// CSS is imported separately in the HTML (index.html) to avoid vitest issues
// import "./style.css";

/* ========== AbstractDataQueue ========== */
class AbstractDataQueue {
  constructor({ postsPerBatch = 25, refillThreshold = 50, initialData } = {}) {
    this.queue = [];
    this.seenIds = new Set();
    this.fetchState = "idle"; // idle | fetching | exhausted
    this.inflightFetch = null;
    this.postsPerBatch = postsPerBatch;
    this.refillThreshold = refillThreshold;
    if (initialData && initialData.length) this.hydrate(initialData);
  }

  async fetchNextPosts(signal) {
    if (this.hasParametersChanged()) {
      this.resetQueue();
      this.handleParameterChanges();
      this.triggerRefill(signal);
    }
    if (this.queue.length === 0) {
      if (this.fetchState === "exhausted") return { posts: [], hasMore: false };
      await this.blockingFetch(signal);
    }
    const posts = this.queue.splice(0, this.postsPerBatch);
    if (this.queue.length < this.refillThreshold && this.fetchState === "idle") {
      this.triggerRefill(signal);
    }
    return {
      posts,
      hasMore: this.fetchState !== "exhausted" || this.queue.length > 0,
    };
  }

  invalidate(signal) {
    this.resetQueue();
    this.handleParameterChanges();
    this.triggerRefill(signal);
  }

  get queueSize() { return this.queue.length; }
  get isExhausted() { return this.fetchState === "exhausted"; }
  get isFetching() { return this.fetchState === "fetching"; }

  async blockingFetch(signal) {
    if (this.inflightFetch) {
      await this.inflightFetch;
    } else if (this.fetchState === "idle") {
      await this.runFetch(signal);
    }
  }

  triggerRefill(signal) {
    if (this.fetchState === "idle") {
      this.runFetch(signal).catch((e) => {
        if (e?.name !== "AbortError") {
          console.error("[AbstractDataQueue] Background refill failed:", e);
        }
      });
    }
  }

  async runFetch(signal) {
    if (this.fetchState !== "idle") return;
    this.fetchState = "fetching";
    this.inflightFetch = (async () => {
      try {
        const { posts, hasMore } = await this.fetchMoreData(signal);
        this.enqueue(posts);
        this.fetchState = hasMore ? "idle" : "exhausted";
      } catch (e) {
        if (e?.name === "AbortError") {
          this.fetchState = "idle";
        } else {
          this.fetchState = "exhausted";
          throw e;
        }
      } finally {
        this.inflightFetch = null;
      }
    })();
    await this.inflightFetch;
  }

  enqueue(posts) {
    for (const post of posts) {
      const id = post.compositeId || post.id;
      if (!this.seenIds.has(id)) {
        this.seenIds.add(id);
        this.queue.push(post);
      }
    }
  }

  hydrate(posts) {
    for (const post of posts) {
      const id = post.compositeId || post.id;
      if (!this.seenIds.has(id)) {
        this.seenIds.add(id);
        this.queue.push(post);
      }
    }
  }

  resetQueue() {
    this.queue = [];
    this.seenIds.clear();
    this.fetchState = "idle";
    this.inflightFetch = null;
  }
}

/* ========== RedditAPIError ========== */
class RedditAPIError extends Error {
  constructor(message, details) {
    super(message);
    this.name = "RedditAPIError";
    this.details = details;
  }
}

/* ========== RedditAPI ========== */
class RedditAPI {
  constructor({
    baseUrl = "https://www.reddit.com",
    proxyUrl = "/api/booru",
    useProxy = false,
    limit = "100",
    redditOAuth = null,
  } = {}) {
    this.baseUrl = baseUrl;
    this.oauthBaseUrl = "https://oauth.reddit.com";
    this.tokenUrl = "https://www.reddit.com/api/v1/access_token";
    this.proxyUrl = proxyUrl;
    this.useProxy = useProxy;
    this.postsPerPage = limit;
    this.cachedToken = null;
    this.redditOAuth = redditOAuth;
  }

  isServer() { return false; }
  shouldUseServerOAuth() { return this.isServer() && !!this.redditOAuth; }

  normalizeSubredditInput(input) {
    const raw = (input || "").trim();
    if (!raw) return "all";
    const tokens = raw
      .split(/[,+\s]+/)
      .map((t) => t.trim())
      .filter(Boolean)
      .map((t) => t.replace(/^r\//i, ""))
      .filter((t) => /^[A-Za-z0-9_]+$/.test(t));
    if (!tokens.length) return "all";
    const unique = [];
    const seen = new Set();
    for (const t of tokens) {
      const k = t.toLowerCase();
      if (!seen.has(k)) {
        seen.add(k);
        unique.push(t);
      }
    }
    return unique.join("+");
  }

  extractFromSort(sort) {
    let baseSort = sort;
    let timeQuery = "";
    const match = sort.match(/^top\?t=(.+)$/);
    if (match) {
      baseSort = "top";
      timeQuery = `&t=${match[1]}`;
    }
    return { baseSort, timeQuery };
  }

  async fetchData(endpoint, params = new URLSearchParams(), opts = {}) {
    if (this.shouldUseServerOAuth()) {
      return (await this.attemptCachedOAuthFetch(endpoint, params)).json();
    }
    if (opts.isProxy ?? this.useProxy) {
      return this.attemptProxyFetch(endpoint, params);
    }
    return this.attemptDirectFetch(endpoint, params);
  }

  async attemptDirectFetch(endpoint, params) {
    const url = new URL(`${this.baseUrl}${endpoint}`, window.location.origin);
    params.forEach((value, key) => url.searchParams.append(key, value));
    try {
      const res = await fetch(url.toString(), {
        headers: { Accept: "application/json" },
        credentials: "omit",
      });
      if (res.ok) return res.json();
    } catch (_) {
      // CORS/network failure — fall through to JSONP
    }
    return this.jsonpRequest(url.toString());
  }

  jsonpRequest(url) {
    return new Promise((resolve, reject) => {
      const callbackName = "reddit_jsonp_" + Math.random().toString(36).substr(2, 9);
      const separator = url.includes("?") ? "&" : "?";
      const fullUrl = url + separator + "jsonp=" + callbackName;
      
      // Set up timeout
      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error("JSONP request timed out"));
      }, 15000);
      
      // Define the callback function globally
      window[callbackName] = (data) => {
        cleanup();
        resolve(data);
      };
      
      function cleanup() {
        clearTimeout(timeout);
        delete window[callbackName];
        if (script.parentNode) script.parentNode.removeChild(script);
      }
      
      // Create and inject the script tag
      const script = document.createElement("script");
      script.src = fullUrl;
      script.onerror = () => {
        cleanup();
        reject(new Error("JSONP request failed"));
      };
      document.head.appendChild(script);
    });
  }

  async attemptProxyFetch(endpoint, params) {
    const url = new URL(this.proxyUrl, window.location.origin);
    url.searchParams.set("site", "reddit");
    url.searchParams.set("endpoint", endpoint);
    params.forEach((value, key) => url.searchParams.append(key, value));
    const res = await fetch(url.toString());
    if (!res.ok) throw new RedditAPIError(`Proxy fetch failed: ${res.statusText}`);
    const text = await res.text();
    const jsonpMatch = text.match(/^[a-zA-Z_]\w*\((.+)\)$/s);
    if (jsonpMatch) {
      return JSON.parse(jsonpMatch[1]);
    }
    return JSON.parse(text);
  }

  async handleErrorResponse(res) {
    if (res.status === 404) throw new RedditAPIError(`Resource not found: ${res.statusText}`);
    const body = await res.json();
    if (res.status === 403 && body?.reason === "private") throw new RedditAPIError("Subreddit is private");
    throw new Error("Direct fetch failed");
  }

  async fetchSubredditPosts(subreddit, sort, after = "") {
    const { baseSort, timeQuery } = this.extractFromSort(sort);
    const multi = this.normalizeSubredditInput(subreddit);
    const params = new URLSearchParams({
      limit: this.postsPerPage.toString(),
      after,
      raw_json: "1",
    });
    if (timeQuery) params.append("t", timeQuery.replace("&t=", ""));
    const data = await this.fetchData(`/r/${multi}/${baseSort}.json`, params);
    return {
      posts: data.data.children.map((child, index) => ({ ...child.data, index })),
      afterToken: data.data.after || "",
    };
  }

  async fetchCombinedPosts(subreddits, sort, after = "") {
    const { baseSort, timeQuery } = this.extractFromSort(sort);
    const multi = subreddits.join("%2B");
    const params = new URLSearchParams({
      limit: this.postsPerPage.toString(),
      after,
      raw_json: "1",
    });
    if (timeQuery) params.append("t", timeQuery.replace("&t=", ""));
    const data = await this.fetchData(`/r/${multi}/${baseSort}.json`, params);
    return {
      posts: data.data.children.map((child, index) => ({ ...child.data, index })),
      afterToken: data.data.after || "",
    };
  }

  async fetchUsersPosts(username, sort, after = "") {
    const { baseSort, timeQuery } = this.extractFromSort(sort);
    const params = new URLSearchParams({
      limit: this.postsPerPage.toString(),
      after,
      raw_json: "1",
      sort: baseSort,
    });
    if (timeQuery) params.append("t", timeQuery.replace("&t=", ""));
    const data = await this.fetchData(`/user/${username}/submitted.json`, params);
    if (!data || !data.data) throw new RedditAPIError(`Unexpected data structure for user ${username}`);
    return {
      posts: data.data.children.map((child, index) => ({ ...child.data, index })),
      afterToken: data.data.after || "",
    };
  }

  async fetchSuggestions(query) {
    const params = new URLSearchParams({ query, limit: "5", include_over_18: "true" });
    // 1. Try Vite dev proxy first (handles CORS in development)
    try {
      const proxyPath = "/api/reddit/api/subreddit_autocomplete_v2.json";
      const res = await fetch(`${proxyPath}?${params.toString()}`);
      if (res.ok) return res.json();
    } catch (_) { /* fall through */ }
    // 2. Try direct fetch (+ JSONP fallback) — works in production when CORS allows
    try {
      return await this.attemptDirectFetch("/api/subreddit_autocomplete_v2.json", params);
    } catch (_) { /* fall through */ }
    // 3. Try through the configured proxy (e.g. /api/booru if available)
    try {
      return await this.attemptProxyFetch("/api/subreddit_autocomplete_v2.json", params);
    } catch (e) {
      throw new RedditAPIError(`Suggestions fetch failed`, e);
    }
  }

  async fetchComments(permalink) {
    const params = new URLSearchParams({ raw_json: "1" });
    const endpoint = `${permalink}.json`;

    // Try direct fetch first (with JSONP fallback if CORS blocks)
    const url = new URL(`${this.baseUrl}${endpoint}`, window.location.origin);
    params.forEach((value, key) => url.searchParams.append(key, value));

    try {
      const res = await fetch(url.toString(), {
        headers: { Accept: "application/json" },
        credentials: "omit",
      });
      if (res.ok) return res.json();
    } catch (_) {
      // CORS/network failure — fall through to JSONP
    }

    // Fallback: JSONP (works everywhere, no CORS restrictions)
    return this.jsonpRequest(url.toString());
  }

  async validateSubreddit(name) {
    try {
      const data = await this.fetchData(`/r/${name}/hot.json`, new URLSearchParams({ raw_json: "1" }));
      if (data.message === "Not Found") throw new RedditAPIError(`Subreddit '${name}' not found`);
      return true;
    } catch (e) {
      if (e instanceof RedditAPIError) throw e;
      throw new RedditAPIError(`Failed to validate subreddit: ${name}`, e);
    }
  }

  async searchSubreddits(query, filter) {
    try {
      const params = new URLSearchParams({ q: query, include_over_18: "true", raw_json: "1" });
      const data = await this.fetchData("/subreddits/search.json", params, { isProxy: true });
      if (!data.data) throw new RedditAPIError("Invalid search response format");
      let results = data.data.children
        .filter((c) => typeof c.data.url === "string")
        .map((c) => ({
          name: c.data.display_name,
          url: c.data.url,
          subscribers: c.data.subscribers,
          description: c.data.public_description || c.data.description || "",
          isNSFW: c.data.over18,
        }));
      if (filter === "sfw") results = results.filter((r) => !r.isNSFW);
      if (filter === "nsfw") results = results.filter((r) => r.isNSFW);
      return results;
    } catch (e) {
      if (e instanceof RedditAPIError) throw e;
      throw new RedditAPIError("Failed to search subreddits", e);
    }
  }

  async autocompleteSubreddits(query, filter) {
    try {
      const params = new URLSearchParams({ query, include_over_18: "true", raw_json: "1", gilding_detail: "1" });
      const data = await this.fetchData("/api/subreddit_autocomplete_v2.json", params);
      if (!data.data) throw new RedditAPIError("Invalid search response format");
      let results = data.data.children
        .filter((c) => typeof c.data.url === "string")
        .map((c) => ({
          name: c.data.display_name,
          url: c.data.url,
          subscribers: c.data.subscribers,
          description: c.data.public_description || c.data.description || "",
          isNSFW: c.data.over18,
        }));
      if (filter === "sfw") results = results.filter((r) => !r.isNSFW);
      if (filter === "nsfw") results = results.filter((r) => r.isNSFW);
      return results;
    } catch (e) {
      if (e instanceof RedditAPIError) throw e;
      throw new RedditAPIError("Failed to search subreddits", e);
    }
  }

  // OAuth methods (for server-side use)
  async getOAuthToken() {
    if (!this.redditOAuth) throw new RedditAPIError("Missing Reddit OAuth config");
    const now = Date.now();
    if (this.cachedToken && this.cachedToken.expiresAt - 60000 > now) {
      return this.cachedToken.token;
    }
    const basic = btoa(`${this.redditOAuth.clientId}:${this.redditOAuth.clientSecret}`);
    const res = await fetch(this.tokenUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": `node:scrollx:v1.0 (by /u/${this.redditOAuth.username})`,
      },
      body: new URLSearchParams({ grant_type: "client_credentials" }),
    });
    if (!res.ok) throw new RedditAPIError(`Reddit OAuth token failed: ${res.status}`);
    const tokenData = await res.json();
    this.cachedToken = { token: tokenData.access_token, expiresAt: now + tokenData.expires_in * 1000 };
    return this.cachedToken.token;
  }

  async attemptOAuthFetch(endpoint, params) {
    const url = new URL(`${this.oauthBaseUrl}${endpoint}`, window.location.origin);
    params.forEach((value, key) => url.searchParams.append(key, value));
    let token = await this.getOAuthToken();
    let res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "User-Agent": `node:scrollx:v1.0 (by /u/${this.redditOAuth?.username})`,
      },
    });
    if (res.status === 401) {
      this.cachedToken = null;
      token = await this.getOAuthToken();
      res = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "User-Agent": `node:scrollx:v1.0 (by /u/${this.redditOAuth?.username})`,
        },
      });
    }
    if (!res.ok) await this.handleErrorResponse(res);
    return res;
  }

  async attemptCachedOAuthFetch(endpoint, params) {
    const ttl = endpoint.startsWith("/by_id/") ? 2592000 : 14400;
    if (ttl <= 0 || typeof caches === "undefined") return this.attemptOAuthFetch(endpoint, params);
    const url = new URL(`${this.oauthBaseUrl}${endpoint}`, window.location.origin);
    params.forEach((value, key) => url.searchParams.append(key, value));
    const req = new Request(url.toString(), { method: "GET" });
    const cache = await caches.default;
    const cached = await cache.match(req);
    if (cached) return cached.clone();
    const response = await this.attemptOAuthFetch(endpoint, params);
    if (!response.ok) return response;
    const cloned = new Response(await response.text(), {
      status: response.status,
      headers: { "Content-Type": "application/json", "Cache-Control": `public, max-age=${ttl}` },
    });
    await cache.put(req, cloned.clone());
    return cloned;
  }
}

/* ========== RedditDataSource ========== */
class RedditDataSource extends AbstractDataQueue {
  constructor(options) {
    const { subreddits, user, sort, postsPerBatch, refillThreshold, initialData, useProxy, proxyUrl, limit, redditOAuth, useCombinedFetch = true } = options;
    super({ postsPerBatch, refillThreshold, initialData });
    this.afterTokens = {};
    this.combinedAfterToken = "";
    this.currentSort = "";
    this.currentSubreddits = [];
    this.useCombinedFetch = false;
    this.initiated = true;
    this.api = new RedditAPI({
      useProxy: useProxy ?? true,
      proxyUrl: proxyUrl || "/api/booru",
      limit: limit?.toString() || "100",
      redditOAuth,
    });
    this.options = options;
    this.currentSort = sort;
    this.currentSubreddits = [...(subreddits || [])];
    this.currentUser = user || "";
    this.useCombinedFetch = useCombinedFetch;
    if (options.afterToken) this.combinedAfterToken = options.afterToken;
  }

  async searchSubreddits(query, filter) { return this.api.searchSubreddits(query, filter); }
  async validateSubreddit(name) { return this.api.validateSubreddit(name); }

  async fetchAndTransformPosts(subreddits, sort, after = "") {
    const { posts, afterToken } = await this.api.fetchCombinedPosts(subreddits, sort, after);
    return {
      posts: posts.map((p) => this.transformToUnifiedPost(p)).filter(Boolean),
      afterToken,
    };
  }

  static deduplicatePosts(posts) {
    const seen = new Set();
    return posts.filter((p) => {
      const src = p?.processedContent?.source_url;
      return !!src && !seen.has(src) && (seen.add(src), true);
    });
  }

  processPosts(posts) {
    const processed = posts.map((p) => this.transformToUnifiedPost(p)).filter(Boolean);
    if (!processed.length) return [];
    return processed;
  }

  async fetchUsersPosts() {
    const { sort } = this.options;
    const { posts, afterToken } = await this.api.fetchUsersPosts(
      this.currentUser,
      sort,
      this.afterTokens[this.currentUser] || ""
    );
    this.afterTokens[this.currentUser] = afterToken;
    const processed = this.processPosts(posts);
    return { posts: RedditDataSource.deduplicatePosts(processed), afterToken };
  }

  async fetchMoreData(signal) {
    const { subreddits, user, sort } = this.options;
    if (user) {
      try {
        const { posts, afterToken } = await this.fetchUsersPosts();
        return { posts, hasMore: !!afterToken };
      } catch (e) {
        console.error("[RedditDataSource] fetchUsersPosts failed:", e);
        return { posts: [], hasMore: false };
      }
    }
    let posts = [];
    let hasMore = false;
    try {
      if (this.useCombinedFetch && subreddits && subreddits.length > 0) {
        const { posts: combinedPosts, afterToken } = await this.api.fetchCombinedPosts(
          subreddits,
          sort,
          this.combinedAfterToken
        );
        posts = combinedPosts;
        this.combinedAfterToken = afterToken;
        hasMore = !!afterToken;
      } else if (subreddits && subreddits.length > 0) {
        const results = await Promise.all(
          subreddits.map(async (sub) => {
            const { posts: subPosts, afterToken } = await this.api.fetchSubredditPosts(
              sub,
              sort,
              this.afterTokens[sub] || ""
            );
            this.afterTokens[sub] = afterToken;
            return { posts: subPosts, hasMore: !!afterToken };
          })
        );
        posts = results.flatMap((r) => r.posts).sort((a, b) => b.created - a.created);
        hasMore = results.some((r) => r.hasMore);
      }
    } catch (e) {
      console.error("[RedditDataSource] fetchMoreData failed:", e);
      return { posts: [], hasMore: false };
    }
    const processed = this.processPosts(posts);
    return { posts: RedditDataSource.deduplicatePosts(processed), hasMore };
  }

  hasParametersChanged() {
    return (
      this.currentSort !== this.options.sort ||
      this.currentUser !== (this.options.user || "") ||
      this.useCombinedFetch !== (this.options.useCombinedFetch ?? false) ||
      JSON.stringify(this.currentSubreddits) !== JSON.stringify(this.options.subreddits)
    );
  }

  handleParameterChanges() {
    this.currentSort = this.options.sort;
    this.currentSubreddits = [...(this.options.subreddits || [])];
    this.currentUser = this.options.user || "";
    this.useCombinedFetch = this.options.useCombinedFetch ?? false;
  }

  async fetchPostById(id) {
    const params = new URLSearchParams({});
    const data = await this.api.fetchData(`/by_id/${id}.json`, params);
    const post = data?.data?.children?.[0]?.data;
    return post ? this.transformToUnifiedPost(post) : null;
  }

  transformToUnifiedPost(data) {
    const processed = processRedditContent(data);
    if (!processed || processed.type === "invalid" || processed.type === "unsupported") return null;
    const content = {
      type: processed.type,
      width: processed.width,
      height: processed.height,
      preview_url: processed.thumbnail || "",
      display_url: processed.url || "",
      source_url: processed.source || processed.url || "",
      source: processed.source || processed.url || "",
      thumbnail: processed.thumbnail,
      download_url: processed.source || processed.url || "",
    };
    if (processed.type === "image" && processed.resolutions) {
      content.preview_url = processed.resolutions[0]?.url;
      content.display_url = processed.resolutions[3]?.url || processed.resolutions[2]?.url;
      content.resolutions = processed.resolutions;
    }
    if (processed.type === "gallery" && processed.images) {
      content.images = processed.images.map((img) => ({
        source: img.source,
        download_url: img.source,
        display_url: img.resolutions?.[2]?.url || img.source,
        preview_url: img.resolutions?.[0]?.url,
        resolutions: img.resolutions,
        width: img.width,
        height: img.height,
      }));
      content.display_url = processed.images[0].resolutions?.[2]?.url || processed.images[0].source;
      content.thumbnail = processed.images[0].resolutions?.[1]?.url || processed.images[0].source;
    }
    if (processed.type === "video") {
      content.hlsSource = processed.hlsSource || "";
      content.dashSource = processed.dashSource || "";
      content.source = processed.hlsSource || processed.source || processed.dashSource || "";
      content.sources = (processed.sources || []).filter((s) => s?.src);
      const poster = processed.poster || "";
      content.display_url = poster;
      content.preview_url = poster;
      content.thumbnail = poster;
    }
    if (processed.type === "embed") {
      content.embedHtml = processed.html;
    }
    return {
      id: data.id,
      site: "reddit.com",
      compositeId: `reddit.com:${data.id}`,
      isNsfw: data.over_18,
      title: data.title,
      author: data.author,
      score: data.score,
      num_comments: data.num_comments,
      permalink: data.permalink,
      created_at: new Date(data.created_utc * 1000).toISOString(),
      subreddit: data.subreddit,
      source: processed.permalink || "",
      source_links: [processed.permalink],
      resolutions: processed.resolutions,
      processedContent: content,
    };
  }

  getAfterToken() {
    return this.afterTokens[this.currentUser] || this.combinedAfterToken || "";
  }

  resetPagination() {
    this.afterTokens = {};
    this.combinedAfterToken = "";
    this.resetQueue();
  }
}

/* ========== InfiniteRedditFeed ========== */
class InfiniteRedditFeed extends AbstractDataQueue {
  constructor(options) {
    const { allSubreddits, subredditsPerBatch = 5, postsPerBatch, refillThreshold, initialData, ...baseOptions } = options;
    super({ postsPerBatch, refillThreshold, initialData });
    this.usedSubreddits = new Set();
    this.initiated = true;
    if (!allSubreddits?.length) throw new Error("InfiniteRedditFeed requires a non-empty 'allSubreddits' list.");
    this.allSubreddits = allSubreddits;
    this.subredditsPerBatch = subredditsPerBatch;
    this.baseOptions = baseOptions;
    this.currentDataSource = this.createNextDataSource();
  }

  async fetchMoreData(signal) {
    const result = await this.currentDataSource.fetchNextPosts(signal);
    if (!result.hasMore) {
      this.currentDataSource = this.createNextDataSource();
    }
    return { posts: result.posts, hasMore: true };
  }

  hasParametersChanged() { return false; }
  handleParameterChanges() {}

  createNextDataSource() {
    let available = this.allSubreddits.filter((s) => !this.usedSubreddits.has(s));
    if (available.length < this.subredditsPerBatch) this.usedSubreddits.clear();
    available = available.length >= this.subredditsPerBatch
      ? available
      : this.allSubreddits;
    const batch = [...available]
      .slice(0, 350)
      .sort(() => Math.random() - 0.5)
      .slice(0, this.subredditsPerBatch);
    batch.forEach((s) => this.usedSubreddits.add(s));
    return new RedditDataSource({
      ...this.baseOptions,
      subreddits: batch,
      afterToken: "",
      limit: 100,
      useProxy: true,
    });
  }

  async fetchPostById(id) { return this.currentDataSource.fetchPostById(id); }
  async searchSubreddits(query, filter) { return this.currentDataSource.searchSubreddits(query, filter); }
  async validateSubreddit(name) { return this.currentDataSource.validateSubreddit(name); }
}

/* ========== Content Processing ========== */
function decodeRedditUrl(url) {
  if (!url) return "";
  return String(url).replace(/&amp;/g, "&");
}

function getPreviewPoster(data) {
  // Try OEmbed thumbnail first (reliable)
  if (data.media?.oembed?.thumbnail_url) {
    return decodeRedditUrl(data.media.oembed.thumbnail_url);
  }
  // Try source image
  if (data.preview?.images?.[0]?.source?.url) {
    return decodeRedditUrl(data.preview.images[0].source.url);
  }
  // Try resolutions from largest to smallest
  const resolutions = data.preview?.images?.[0]?.resolutions;
  if (resolutions?.length) {
    for (let i = resolutions.length - 1; i >= 0; i--) {
      if (resolutions[i]?.url) return decodeRedditUrl(resolutions[i].url);
    }
  }
  // Last resort: thumbnail if it's a real URL
  if (data.thumbnail && ![null, "self", "default", "nsfw", ""].includes(data.thumbnail)) {
    return decodeRedditUrl(data.thumbnail);
  }
  return "";
}

function processRedditContent(data) {
  if (!data || !data.title) return { type: "invalid", source: "", hlsSource: "", width: 0, height: 0 };

  const permalink = `https://www.reddit.com${data.permalink}`;

  // Gallery
  if (data.is_gallery && data.gallery_data && data.media_metadata) {
    const images = data.gallery_data.items
      .map((item) => {
        const meta = data.media_metadata[item.media_id];
        if (!meta) return null;
        const isAnimated = meta.e === "AnimatedImage";
        const src = isAnimated ? (meta.s.gif || meta.s.mp4) : meta.s?.u;
        if (!src) return null;
        const resolutions = (meta.p || []).map((r) => ({
          url: decodeRedditUrl(r.u),
          width: r.x,
          height: r.y,
        }));
        resolutions.push({ url: decodeRedditUrl(src), width: meta.s.x || 0, height: meta.s.y || 0 });
        return {
          source: src,
          width: meta.s.x || 0,
          height: meta.s.y || 0,
          type: isAnimated ? (src.endsWith(".mp4") ? "video" : "gif") : "image",
          resolutions,
        };
      })
      .filter(Boolean);
    if (images.length) {
      return {
        type: "gallery",
        display_url: images[0].resolutions[0].url,
        source: images[0].source,
        width: images[0].width,
        height: images[0].height,
        images,
        permalink,
        gallery_count: images.length,
        is_animated: images.some((i) => i.type !== "image"),
      };
    }
  }

  // v.redd.it video
  if (data.domain === "v.redd.it" || (data.is_video && data.media?.reddit_video)) {
    const redditVideo = data.media?.reddit_video;
    if (!redditVideo) return { type: "invalid", source: "", hlsSource: "", width: 0, height: 0 };
    // Reddit's fallback_url already points at the highest DASH mp4 rung the
    // post actually has (e.g. DASH_1080/DASH_720/DASH_480). Use it directly so
    // we never request a non-existent 1080 variant (which 404s). Strip query.
    const bestSource = (redditVideo.fallback_url || "").split("?")[0] || redditVideo.fallback_url;
    return {
      type: "video",
      source: bestSource,
      hlsSource: redditVideo.hls_url,
      dashSource: redditVideo.dash_url,
      poster: getPreviewPoster(data),
      width: redditVideo.width,
      height: redditVideo.height,
      permalink,
      duration: redditVideo.duration,
    };
  }

  // Direct media files (.gifv, .mp4, .webm)
  if (data.url?.includes(".gifv") || data.url?.endsWith(".mp4") || data.url?.endsWith(".webm")) {
    const preview = data.preview?.reddit_video_preview || {};
    const source = data.url.includes(".gifv") ? data.url.replace(".gifv", ".mp4") : (preview.fallback_url || data.url);
    return {
      type: "video",
      source,
      hlsSource: preview.hls_url,
      dashSource: preview.dash_url,
      permalink,
      width: preview.width || data.preview?.images?.[0]?.source?.width || 0,
      height: preview.height || data.preview?.images?.[0]?.source?.height || 0,
      duration: preview.duration,
      poster: getPreviewPoster(data),
    };
  }

  // Redgifs
  if (data.domain?.includes("redgifs")) {
    if (data.preview?.reddit_video_preview && data.hasAudio) {
      return {
        type: "video",
        source: data.preview.reddit_video_preview.fallback_url,
        hlsSource: data.preview.reddit_video_preview.hls_url,
        width: data.preview.reddit_video_preview.width,
        height: data.preview.reddit_video_preview.height,
        permalink: `https://www.reddit.com${data.permalink}`,
        poster: getPreviewPoster(data),
      };
    }
    if (data.media?.oembed) {
      const id = extractRedgifsId(data.media.oembed.thumbnail_url);
      if (id) {
        return {
          type: "video",
          source: `https://media.redgifs.com/${id}-mobile.mp4`,
          sources: [
            { src: `https://media.redgifs.com/${id}-mobile.mp4`, type: "video/mp4" },
            { src: data.preview?.reddit_video_preview?.fallback_url, type: "video/mp4" },
          ],
          permalink,
          poster: getPreviewPoster(data) || `https://media.redgifs.com/${id}-mobile.jpg`,
          width: data.media.oembed.width,
          height: data.media.oembed.height,
        };
      }
      return {
        type: "video",
        source: data.preview?.reddit_video_preview?.fallback_url,
        hlsSource: data.preview?.reddit_video_preview?.hls_url,
        sources: [{ src: data.preview?.reddit_video_preview?.fallback_url, type: "video/mp4" }],
        poster: getPreviewPoster(data),
        permalink,
        width: data.media.oembed.width,
        height: data.media.oembed.height,
      };
    }
  }

  // OEmbed video (e.g., other providers)
  if (data.media?.oembed && data.media.oembed.type === "video") {
    const id = extractRedgifsId(data.media.oembed.thumbnail_url);
    if (id) {
      return {
        type: "video",
        source: `https://media.redgifs.com/${id}-mobile.mp4`,
        sources: [
          { src: `https://media.redgifs.com/${id}-mobile.mp4`, type: "video/mp4" },
          { src: data.preview?.reddit_video_preview?.fallback_url, type: "video/mp4" },
        ],
        permalink,
        poster: getPreviewPoster(data) || `https://media.redgifs.com/${id}-mobile.jpg`,
        width: data.media.oembed.width,
        height: data.media.oembed.height,
      };
    }
    return {
      type: "video",
      source: data.preview?.reddit_video_preview?.fallback_url,
      hlsSource: data.preview?.reddit_video_preview?.hls_url,
      sources: [{ src: data.preview?.reddit_video_preview?.fallback_url, type: "video/mp4" }],
      poster: getPreviewPoster(data),
      permalink,
      width: data.media.oembed.width,
      height: data.media.oembed.height,
    };
  }

  // Image
  if (data.post_hint === "image") {
    const url = data.url;
    if (url.endsWith("gif")) {
      const img = data.preview?.images?.[0];
      const mp4Src = img?.variants?.mp4?.source?.url;
      return {
        type: "video",
        source: decodeRedditUrl(mp4Src || url),
        width: img?.source?.width || 640,
        height: img?.source?.height || 480,
        permalink,
        poster: getPreviewPoster(data),
      };
    }
    const resolutions = data.preview?.images?.[0]?.resolutions?.map((r) => ({
      url: decodeRedditUrl(r.url),
      width: r.width,
      height: r.height,
    }));
    return {
      type: "image",
      source: url,
      width: data.preview?.images?.[0]?.source?.width || 0,
      height: data.preview?.images?.[0]?.source?.height || 0,
      permalink,
      resolutions,
    };
  }

  // Link
  if (data.post_hint === "link" && data.url) {
    const isGifv = data.url.includes("gifv");
    if (isGifv || data.url.endsWith(".mp4") || data.url.endsWith(".webm") ||
        data.url.includes("gfycat.com") || data.preview?.reddit_video_preview || data.media?.reddit_video) {
      const preview = data.preview?.reddit_video_preview;
      return {
        type: "video",
        source: isGifv ? data.url.replace(".gifv", ".mp4") :
          (preview?.fallback_url || data.media?.reddit_video?.fallback_url || data.url),
        hlsSource: preview?.hls_url || data.media?.reddit_video?.hls_url,
        dashSource: preview?.dash_url || data.media?.reddit_video?.dash_url,
        width: preview?.width || data.preview?.images?.[0]?.source?.width || data.media?.reddit_video?.width || 0,
        height: preview?.height || data.preview?.images?.[0]?.source?.height || data.media?.reddit_video?.height || 0,
        permalink,
        poster: getPreviewPoster(data),
      };
    }
    if (data.preview?.images?.[0]?.source?.url) {
      const resolutions = (data.preview.images[0].resolutions || []).map((r) => ({
        url: decodeRedditUrl(r.url),
        width: r.width,
        height: r.height,
      }));
      return {
        type: "image",
        source: decodeRedditUrl(data.preview.images[0].source.url),
        width: data.preview.images[0].source.width || 0,
        height: data.preview.images[0].source.height || 0,
        permalink,
        resolutions,
        poster: getPreviewPoster(data),
      };
    }
  }

  // Fallback: check for preview image
  const imgUrl = data.preview?.images?.[0]?.source?.url || data.url;
  if (imgUrl && /\.(jpg|jpeg|png|gif|webp)/i.test(imgUrl)) {
    const resolutions = (data.preview?.images?.[0]?.resolutions || []).map((r) => ({
      url: decodeRedditUrl(r.url),
      width: r.width,
      height: r.height,
    }));
    return { type: "image", source: decodeRedditUrl(imgUrl), resolutions, poster: getPreviewPoster(data) };
  }

  // OEmbed embed
  if (data.media?.oembed?.html) {
    return {
      type: "embed",
      html: data.media.oembed.html,
      poster: data.preview?.images?.[0]?.source?.url || data.thumbnail,
    };
  }

  return { type: "unsupported", source: "", hlsSource: "", width: 0, height: 0 };
}

function extractRedgifsId(url) {
  if (!url) return null;
  try {
    const parts = new URL(url).pathname.split("/");
    const last = parts.pop() || parts.pop();
    return last
      .replace("-mobile", "")
      .replace(".jpg", "")
      .replace(".mp4", "")
      .split("-")[0];
  } catch {
    return null;
  }
}

/* ========== ReelVideoPlayer ========== */
class ReelVideoPlayer {
  constructor(videoEl, { onDestroy } = {}) {
    this.video = videoEl;
    this.onDestroy = onDestroy;
    this.controlsVisible = true;
    this.hideTimer = null;
    this.isSeeking = false;
    this.lastTapTime = 0;
    this.tapTimeout = null;

    this.wrapper = videoEl.parentElement;
    this.buildControls();
    this.bindEvents();
    this.showControls();
  }

  buildControls() {
    const c = document.createElement("div");
    c.className = "rvp-controls";
    c.innerHTML = `
      <div class="rvp-center">
        <button class="rvp-play-btn" aria-label="Play/Pause"><i class="bi bi-play-fill"></i></button>
      </div>
      <div class="rvp-bottom">
        <div class="rvp-time"><span class="rvp-current">0:00</span><span class="rvp-sep">/</span><span class="rvp-duration">0:00</span></div>
        <div class="rvp-right">
          <div class="rvp-volume-wrap">
            <button class="rvp-vol-btn" aria-label="Mute"><i class="bi bi-volume-up-fill"></i></button>
            <div class="rvp-vol-slider-wrap"><input type="range" class="rvp-vol-slider" min="0" max="1" step="0.05" value="1"></div>
          </div>
          <button class="rvp-fullscreen-btn" aria-label="Fullscreen"><i class="bi bi-fullscreen"></i></button>
        </div>
      </div>
      <div class="rvp-seek-hint left"><i class="bi bi-rewind-fill"></i> 10s</div>
      <div class="rvp-seek-hint right">10s <i class="bi bi-fast-forward-fill"></i></div>
    `;
    this.controls = c;
    this.wrapper.appendChild(c);

    this.progressBar = document.createElement("div");
    this.progressBar.className = "rvp-progress";
    this.progressBar.innerHTML = `
      <div class="rvp-progress-track">
        <div class="rvp-progress-buffered"></div>
        <div class="rvp-progress-played"></div>
        <input type="range" class="rvp-progress-thumb" min="0" max="1" step="0.001" value="0" aria-label="Seek">
      </div>
    `;
    this.wrapper.appendChild(this.progressBar);

    this.playBtn = c.querySelector(".rvp-play-btn");
    this.currentTimeEl = c.querySelector(".rvp-current");
    this.durationEl = c.querySelector(".rvp-duration");
    this.volBtn = c.querySelector(".rvp-vol-btn");
    this.volSlider = c.querySelector(".rvp-vol-slider");
    this.fullscreenBtn = c.querySelector(".rvp-fullscreen-btn");
    this.seekHintLeft = c.querySelector(".rvp-seek-hint.left");
    this.seekHintRight = c.querySelector(".rvp-seek-hint.right");
    this.bufferedBar = this.progressBar.querySelector(".rvp-progress-buffered");
    this.playedBar = this.progressBar.querySelector(".rvp-progress-played");
    this.progressThumb = this.progressBar.querySelector(".rvp-progress-thumb");

    this.video.removeAttribute("controls");
  }

  bindEvents() {
    this.video.addEventListener("play", () => this.onPlay());
    this.video.addEventListener("pause", () => this.onPause());
    this.video.addEventListener("timeupdate", () => this.onTimeUpdate());
    this.video.addEventListener("progress", () => this.onProgress());
    this.video.addEventListener("loadedmetadata", () => this.onLoadedMeta());
    this.video.addEventListener("waiting", () => this.onBuffering());
    this.video.addEventListener("canplay", () => this.onCanPlay());
    this.video.addEventListener("volumechange", () => this.onVolumeChange());
    this.video.addEventListener("ended", () => this.onEnded());

    this.playBtn.addEventListener("click", (e) => { e.stopPropagation(); this.togglePlay(); });
    this.volSlider.addEventListener("input", () => { this.video.volume = this.volSlider.value; });
    this.volBtn.addEventListener("click", (e) => { e.stopPropagation(); this.toggleMute(); });
    this.fullscreenBtn.addEventListener("click", (e) => { e.stopPropagation(); this.toggleFullscreen(); });
    this.progressThumb.addEventListener("input", () => { this.isSeeking = true; this.onSeek(); });
    this.progressThumb.addEventListener("change", () => { this.isSeeking = false; });

    this.progressBar.addEventListener("click", (e) => {
      if (e.target === this.progressThumb) return;
      const rect = this.progressBar.querySelector(".rvp-progress-track").getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      this.video.currentTime = pct * (this.video.duration || 0);
    });

    this.wrapper.addEventListener("click", (e) => {
      if (e.target.closest(".rvp-controls") || e.target.closest(".rvp-progress")) return;
      this.handleTap(e);
    });

    this.wrapper.addEventListener("dblclick", (e) => {
      if (e.target.closest(".rvp-controls") || e.target.closest(".rvp-progress")) return;
      const rect = this.wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      if (x < rect.width / 2) {
        this.seekRelative(-10);
        this.showSeekHint("left");
      } else {
        this.seekRelative(10);
        this.showSeekHint("right");
      }
    });

    this.video.addEventListener("webkitbeginfullscreen", () => this.onFullscreenChange(true));
    this.video.addEventListener("webkitendfullscreen", () => this.onFullscreenChange(false));
    document.addEventListener("fullscreenchange", () => this.onFullscreenChange(!!document.fullscreenElement));
  }

  handleTap(e) {
    if (this.controlsVisible) {
      this.hideControls();
    } else {
      this.showControls();
    }
  }

  togglePlay() {
    if (this.video.paused) {
      this.video.play().catch(() => {});
    } else {
      this.video.pause();
    }
  }

  onPlay() {
    this.playBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
    this.wrapper.classList.remove("rvp-ended");
    this.showControls();
  }

  onPause() {
    this.playBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
    this.showControls();
    clearTimeout(this.hideTimer);
  }

  onEnded() {
    this.playBtn.innerHTML = '<i class="bi bi-arrow-repeat"></i>';
    this.wrapper.classList.add("rvp-ended");
    this.showControls();
  }

  onTimeUpdate() {
    if (this.isSeeking) return;
    const ct = this.video.currentTime || 0;
    const dur = this.video.duration || 0;
    this.currentTimeEl.textContent = this.formatTime(ct);
    if (dur) {
      this.progressThumb.value = ct / dur;
      this.playedBar.style.width = `${(ct / dur) * 100}%`;
    }
  }

  onProgress() {
    const v = this.video;
    if (v.buffered.length > 0) {
      const end = v.buffered.end(v.buffered.length - 1);
      const dur = v.duration || 1;
      this.bufferedBar.style.width = `${(end / dur) * 100}%`;
    }
  }

  onLoadedMeta() {
    this.durationEl.textContent = this.formatTime(this.video.duration || 0);
    this.progressThumb.max = "1";
  }

  onBuffering() {
    this.wrapper.classList.add("rvp-buffering");
  }

  onCanPlay() {
    this.wrapper.classList.remove("rvp-buffering");
  }

  onVolumeChange() {
    const muted = this.video.muted || this.video.volume === 0;
    this.volSlider.value = muted ? 0 : this.video.volume;
    const icon = muted ? "bi-volume-mute-fill" : this.video.volume > 0.5 ? "bi-volume-up-fill" : "bi-volume-down-fill";
    this.volBtn.innerHTML = `<i class="bi ${icon}"></i>`;
  }

  toggleMute() {
    this.video.muted = !this.video.muted;
  }

  seekRelative(seconds) {
    this.video.currentTime = Math.max(0, Math.min(this.video.duration || 0, (this.video.currentTime || 0) + seconds));
  }

  showSeekHint(side) {
    const el = side === "left" ? this.seekHintLeft : this.seekHintRight;
    el.classList.add("active");
    clearTimeout(el._hide);
    el._hide = setTimeout(() => el.classList.remove("active"), 600);
  }

  onSeek() {
    const pct = parseFloat(this.progressThumb.value);
    this.video.currentTime = pct * (this.video.duration || 0);
    this.playedBar.style.width = `${pct * 100}%`;
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      this.wrapper.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  onFullscreenChange(isFullscreen) {
    this.fullscreenBtn.innerHTML = isFullscreen ? '<i class="bi bi-fullscreen-exit"></i>' : '<i class="bi bi-fullscreen"></i>';
    this.wrapper.classList.toggle("rvp-fullscreen", isFullscreen);
  }

  showControls() {
    this.controlsVisible = true;
    this.controls.classList.add("rvp-visible");
    clearTimeout(this.hideTimer);
    if (!this.video.paused) {
      this.hideTimer = setTimeout(() => this.hideControls(), 3000);
    }
  }

  hideControls() {
    this.controlsVisible = false;
    this.controls.classList.remove("rvp-visible");
  }

  destroy() {
    clearTimeout(this.hideTimer);
    this.controls.remove();
    this.progressBar.remove();
    this.video._rvp = null;
    if (this.onDestroy) this.onDestroy();
  }

  formatTime(s) {
    if (!s || !isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }
}

/* ========== RedditScroller UI ========== */
class RedditScroller {
  constructor() {
    // DOM refs
    this.homeEl = document.getElementById("home");
    this.homeGrid = document.getElementById("homeGrid");
    this.app = document.getElementById("app");
    this.reelView = document.getElementById("reelView");
    this.topBar = document.getElementById("topBar");
    this.searchInput = document.getElementById("subredditSearch");
    this.suggestions = document.getElementById("suggestions");
    this.loader = document.getElementById("loader");
    this.gridLoader = document.getElementById("gridLoader");
    this.timePills = document.getElementById("timePills");
    this.blacklistBtn = document.getElementById("blacklistBtn");
    this.blacklistModal = document.getElementById("blacklistModal");
    this.blacklistInput = document.getElementById("blacklistInput");
    this.blacklistTagsEl = document.getElementById("blacklistTags");
    this.commentSheet = document.getElementById("commentSheet");
    this.commentList = document.getElementById("commentList");
    this.commentLoader = document.getElementById("commentLoader");
    this.commentCountEl = document.getElementById("commentCount");
    this.closeCommentsBtn = document.getElementById("closeComments");

    // State
    this.currentSubreddit = "all";
    this.currentSort = "hot";
    this.currentTime = "day";
    this.isLoading = false;
    this.posts = [];
    this.reelMode = false;
    this.audioUnlocked = false;
    this._lastScrollTop = 0;
    this.videoObserver = null;
    this.blacklist = JSON.parse(localStorage.getItem("rscroller_blacklist") || "[]");
    this.masonryCols = [];
    this.colCount = 1;
    this.resizeTimer = null;

    // Use the queue-based data source
    this.api = new RedditAPI({ baseUrl: "https://www.reddit.com", useProxy: true });
    this.dataSource = new RedditDataSource({
      subreddits: ["all"],
      sort: "hot",
      postsPerBatch: 12,
      refillThreshold: 50,
      useProxy: false,
      useCombinedFetch: true,
    });

    this.init();
  }

  init() {
    this.setupMasonry();
    this.setupObservers();
    this.setupEventListeners();
    this.setupAudioUnlock();
    this.renderBlacklistTags();
    this.fetchPosts();
  }

  setupAudioUnlock() {
    const unlock = () => {
      this.audioUnlocked = true;
      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
    };
    window.addEventListener("click", unlock);
    window.addEventListener("keydown", unlock);
  }

  setupMasonry() {
    this.colCount = this.getColCount();
    this.buildColumns();
    window.addEventListener("resize", () => {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        const newCount = this.getColCount();
        if (newCount !== this.colCount) {
          this.colCount = newCount;
          this.buildColumns();
          if (!this.reelMode && this.posts.length > 0) {
            this.renderGridPosts(this.posts, 0);
          }
        }
      }, 250);
    });
  }

  getColCount() {
    const w = window.innerWidth;
    if (w >= 1200) return 4;
    if (w >= 800) return 3;
    if (w >= 500) return 2;
    return 1;
  }

  buildColumns() {
    this.homeGrid.innerHTML = "";
    this.masonryCols = [];
    this.masonryHeights = [];
    for (let i = 0; i < this.colCount; i++) {
      const col = document.createElement("div");
      col.className = "masonry-col";
      this.homeGrid.appendChild(col);
      this.masonryCols.push(col);
      this.masonryHeights.push(0);
    }
  }

  // Gallery navigation for flex cards (smooth sliding track)
  initFlexGallery(card, images, postId) {
    const state = { currentIndex: 0, images, postId };
    const track = card.querySelector(".flex-gallery-track");
    const dotsContainer = card.querySelector(".flex-gallery-dots");
    const counterBadge = card.querySelector(".flex-gallery-count");
    if (!track) return;

    const updatePosition = (idx, animate = true) => {
      state.currentIndex = idx;
      if (!animate) track.style.transition = "none";
      track.style.transform = `translateX(-${idx * 100}%)`;
      if (!animate) {
        track.offsetHeight; // force reflow
        track.style.transition = "";
      }
      if (dotsContainer) {
        dotsContainer.querySelectorAll("span").forEach((s, i) => s.classList.toggle("active", i === idx));
      }
      if (counterBadge) {
        counterBadge.textContent = `${idx + 1}/${images.length}`;
      }
    };

    const leftBtn = card.querySelector(".flex-gallery-nav.left");
    const rightBtn = card.querySelector(".flex-gallery-nav.right");
    if (leftBtn) {
      leftBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        const next = (state.currentIndex - 1 + images.length) % images.length;
        updatePosition(next);
      });
    }
    if (rightBtn) {
      rightBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        const next = (state.currentIndex + 1) % images.length;
        updatePosition(next);
      });
    }

    // Touch swipe for horizontal gallery navigation on mobile
    let touchStartX = 0;
    let touchStartY = 0;
    card.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    card.addEventListener("touchend", (e) => {
      const diffX = touchStartX - e.changedTouches[0].clientX;
      const diffY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
        if (diffX > 0) {
          updatePosition((state.currentIndex + 1) % images.length);
        } else {
          updatePosition((state.currentIndex - 1 + images.length) % images.length);
        }
      }
    }, { passive: true });

    card._galleryState = state;
    card._updateGalleryPosition = updatePosition;
  }

  // Gallery navigation for reel view
  initReelGallery(container, images, postId) {
    const state = { currentIndex: 0, images, postId };
    const track = container.querySelector(".reel-gallery-track");
    const counter = container.querySelector(".reel-gallery-counter");
    const dots = container.querySelectorAll(".reel-gallery-dots span");

    const updatePosition = (idx, animate = true) => {
      state.currentIndex = idx;
      if (!animate) track.style.transition = "none";
      track.style.transform = `translateX(-${idx * 100}%)`;
      if (!animate) {
        track.offsetHeight; // force reflow
        track.style.transition = "";
      }
      if (counter) counter.textContent = `${idx + 1} / ${images.length}`;
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    };

    const leftBtn = container.querySelector(".reel-gallery-arrow.left");
    const rightBtn = container.querySelector(".reel-gallery-arrow.right");

    if (leftBtn) {
      leftBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (state.currentIndex > 0) updatePosition(state.currentIndex - 1);
      });
    }
    if (rightBtn) {
      rightBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (state.currentIndex < images.length - 1) updatePosition(state.currentIndex + 1);
      });
    }

    // Touch swipe for horizontal gallery navigation
    let touchStartX = 0;
    let touchStartY = 0;
    container.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    container.addEventListener("touchend", (e) => {
      const diffX = touchStartX - e.changedTouches[0].clientX;
      const diffY = touchStartY - e.changedTouches[0].clientY;
      // Only navigate if horizontal swipe is dominant and > threshold
      if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
        if (diffX > 0 && state.currentIndex < images.length - 1) {
          updatePosition(state.currentIndex + 1);
        } else if (diffX < 0 && state.currentIndex > 0) {
          updatePosition(state.currentIndex - 1);
        }
      }
    }, { passive: true });

    // Store state on container for keyboard navigation access
    container._galleryState = state;
    container._updateGalleryPosition = updatePosition;
  }

  getCurrentReelIndex() {
    if (!this.reelMode) return -1;
    const feed = this.app;
    const cards = feed.querySelectorAll(".post-card");
    const scrollTop = feed.scrollTop;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (card.offsetTop <= scrollTop + 100 && card.offsetTop + card.offsetHeight > scrollTop + 100) {
        return i;
      }
    }
    return 0;
  }

  pauseInactiveReelVideos(activeVideo = null) {
    this.app.querySelectorAll(".reel-video-player video").forEach((video) => {
      if (video !== activeVideo) {
        video.pause();
        video.muted = true;
      }
    });
  }

  setupObservers() {
    this.videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          const shouldPlay = entry.isIntersecting && entry.intersectionRatio >= 0.6;
          if (shouldPlay) {
            // Grid videos only play on hover — don't autoplay here
            if (video.dataset.grid) return;
            this.pauseInactiveReelVideos(video);
            video.muted = !this.audioUnlocked;
            video.play().catch(() => {
              if (!this.audioUnlocked) {
                video.muted = true;
              }
              video.play().catch(() => {});
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    this.gridSentinelObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.isLoading && this.dataSource && !this.dataSource.isExhausted) {
          this.fetchPosts(false);
        }
      },
      { root: this.homeEl, threshold: 0.1, rootMargin: "200%" }
    );
    this.gridSentinelObserver.observe(this.gridLoader);

    this.reelSentinelObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.isLoading && this.dataSource && !this.dataSource.isExhausted) {
          this.fetchPosts(true);
        }
      },
      { root: this.app, threshold: 0.1, rootMargin: "200%" }
    );
    this.reelSentinelObserver.observe(this.loader);
  }

  setupEventListeners() {
    document.getElementById("closeReel").addEventListener("click", () => this.closeReel());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.reelMode) {
        if (this.commentSheet.classList.contains("active")) {
          this.toggleComments(false);
        } else {
          this.closeReel();
        }
      }
      // Gallery navigation with arrow keys in reel view
      if (this.reelMode && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
        const activeCard = this.app.querySelector(".post-card:hover, .post-card:focus-within") ||
                          this.app.querySelector(".reel-feed .post-card:nth-child(" + (this.getCurrentReelIndex() + 1) + ")");
        if (activeCard) {
          const galleryContainer = activeCard.querySelector(".reel-gallery-container");
          if (galleryContainer && galleryContainer._galleryState) {
            const state = galleryContainer._galleryState;
            const updateFn = galleryContainer._updateGalleryPosition;
            if (e.key === "ArrowLeft" && state.currentIndex > 0) {
              e.preventDefault();
              updateFn(state.currentIndex - 1);
            } else if (e.key === "ArrowRight" && state.currentIndex < state.images.length - 1) {
              e.preventDefault();
              updateFn(state.currentIndex + 1);
            }
          }
        }
      }
    });

    this.blacklistBtn.addEventListener("click", () => (this.blacklistModal.style.display = "flex"));
    document.getElementById("closeModal").addEventListener("click", () => (this.blacklistModal.style.display = "none"));
    this.blacklistModal.addEventListener("click", (e) => {
      if (e.target === this.blacklistModal) this.blacklistModal.style.display = "none";
    });
    document.getElementById("addBlacklist").addEventListener("click", () => this.addBlacklistTerm());
    this.blacklistInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.addBlacklistTerm();
    });

    document.getElementById("sortPills").addEventListener("click", (e) => {
      const pill = e.target.closest(".sort-pill");
      if (!pill) return;
      document.querySelectorAll("#sortPills .sort-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      this.currentSort = pill.dataset.sort;
      this.timePills.style.display = ["top", "controversial"].includes(this.currentSort) ? "flex" : "none";
      this.resetFeed();
      this.fetchPosts();
    });

    document.getElementById("timePills").addEventListener("click", (e) => {
      const pill = e.target.closest(".sort-pill");
      if (!pill) return;
      document.querySelectorAll("#timePills .sort-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      this.currentTime = pill.dataset.time;
      this.resetFeed();
      this.fetchPosts();
    });

    let timeout;
    this.searchInput.addEventListener("input", (e) => {
      clearTimeout(timeout);
      const val = e.target.value.trim();
      if (!val) {
        this.suggestions.style.display = "none";
        return;
      }
      timeout = setTimeout(() => this.fetchSuggestions(val), 500);
    });
    this.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && this.searchInput.value.trim()) {
        this.currentSubreddit = this.searchInput.value.trim();
        this.resetFeed();
        this.fetchPosts();
        this.suggestions.style.display = "none";
      }
    });
    document.addEventListener("click", (e) => {
      if (!this.suggestions.contains(e.target) && e.target !== this.searchInput) {
        this.suggestions.style.display = "none";
      }
    });

    let ticking = false;
    this.homeEl.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.handleTopBarScroll(this.homeEl);
          ticking = false;
        });
        ticking = true;
      }
    });

    let reelTicking = false;
    this.app.addEventListener("scroll", () => {
      if (!this.reelMode || reelTicking) return;
      window.requestAnimationFrame(() => {
        const currentIndex = this.getCurrentReelIndex();
        const cards = this.app.querySelectorAll(".post-card");
        if (currentIndex >= 0 && cards[currentIndex]) {
          const currentVideo = cards[currentIndex].querySelector("video");
          this.pauseInactiveReelVideos(currentVideo);
        }
        reelTicking = false;
      });
      reelTicking = true;
    });

    // ── Comment sheet: close on outside click ──
    this.reelView.addEventListener("click", (e) => {
      if (
        this.commentSheet.classList.contains("active") &&
        !e.target.closest("#commentSheet") &&
        !e.target.closest("#closeComments") &&
        !e.target.closest(".comment-btn")
      ) {
        this.toggleComments(false);
      }
    });

    this.closeCommentsBtn.addEventListener("click", () => this.toggleComments(false));
  }

  handleTopBarScroll(el) {
    const curr = el.scrollTop;
    if (curr > this._lastScrollTop && curr > 80) {
      this.topBar.classList.add("hidden");
    } else {
      this.topBar.classList.remove("hidden");
    }
    this._lastScrollTop = curr;
  }

  openReel(startIndex) {
    this.reelMode = true;
    this.audioUnlocked = true;
    this.app.innerHTML = "";
    this.renderReelPosts(this.posts.slice(startIndex));
    this.reelView.classList.add("active");
    document.body.style.overflow = "hidden";
    this.app.scrollTop = 0;
  }

  closeReel() {
    this.reelMode = false;
    this.reelView.classList.remove("active");
    this.toggleComments(false);
    document.body.style.overflow = "";
    document.querySelectorAll("#app video").forEach((v) => {
      if (v._rvp) v._rvp.destroy();
      else v.pause();
    });
    this.app.innerHTML = "";
  }

  addBlacklistTerm() {
    const term = this.blacklistInput.value.trim().toLowerCase();
    if (term && !this.blacklist.includes(term)) {
      this.blacklist.push(term);
      localStorage.setItem("rscroller_blacklist", JSON.stringify(this.blacklist));
      this.renderBlacklistTags();
      this.blacklistInput.value = "";
    }
  }
  removeBlacklistTerm(term) {
    this.blacklist = this.blacklist.filter((t) => t !== term);
    localStorage.setItem("rscroller_blacklist", JSON.stringify(this.blacklist));
    this.renderBlacklistTags();
  }
  renderBlacklistTags() {
    this.blacklistTagsEl.innerHTML = this.blacklist
      .map(
        (term) =>
          `<span class="blacklist-tag">${term} <button onclick="window.scroller.removeBlacklistTerm('${term}')">-</button></span>`
      )
      .join("");
  }
  isBlacklisted(data) {
    const h = `${data.title} ${data.subreddit}`.toLowerCase();
    return this.blacklist.some((t) => h.includes(t));
  }

  async fetchSuggestions(query) {
    try {
      const lastToken = (query || "").split(/[,+\s]+/).pop() || "";
      const q = lastToken.trim().replace(/^r\//i, "");
      if (!q) {
        this.suggestions.style.display = "none";
        return;
      }
      const data = await this.api.fetchSuggestions(q);
      const subs = data.data.children.filter((c) => c.kind === "t5");
      if (subs.length) this.renderSuggestions(subs);
      else this.suggestions.style.display = "none";
    } catch (e) {
      console.error(e);
    }
  }

  renderSuggestions(subs) {
    this.suggestions.innerHTML = subs
      .map(
        (sub) => `
      <div class="suggestion-item" data-name="${sub.data.display_name}">
        <div class="suggestion-icon" style="background-image:url(${sub.data.community_icon || sub.data.icon_img || ""}); background-size:cover;"></div>
        <div>
          <span style="font-weight:600;">r/${sub.data.display_name}</span>
          <span style="font-size:0.75rem;color:#aaa;display:block;">${(sub.data.subscribers || 0).toLocaleString()} members</span>
        </div>
      </div>`
      )
      .join("");
    this.suggestions.style.display = "block";
    this.suggestions.querySelectorAll(".suggestion-item").forEach((item) => {
      item.addEventListener("click", () => {
        const picked = item.dataset.name;
        const existing = this.searchInput.value || "";
        const parts = existing
          .split(/[,+\s]+/)
          .map((t) => t.trim())
          .filter(Boolean)
          .map((t) => t.replace(/^r\//i, ""));
        if (parts.length) parts[parts.length - 1] = picked;
        else parts.push(picked);
        const nextRaw = parts.join(", ");
        this.searchInput.value = nextRaw;
        this.currentSubreddit = nextRaw;
        this.resetFeed();
        this.fetchPosts();
        this.suggestions.style.display = "none";
      });
    });
  }

  resetFeed() {
    this.posts = [];
    if (this.dataSource) {
      this.dataSource.resetPagination();
    }
    this.buildColumns();
    if (this.reelMode) this.closeReel();
  }

  async fetchPosts(appendToReel = false) {
    this.isLoading = true;
    if (appendToReel) this.loader.style.opacity = "1";
    else this.gridLoader.style.opacity = "1";
    try {
      // Update data source options based on current state
      const sort = ["top", "controversial"].includes(this.currentSort)
        ? `${this.currentSort}?t=${this.currentTime}`
        : this.currentSort;
      const input = this.currentSubreddit.trim();
      const isUser = input.startsWith("u/") || input.startsWith("user/");

      if (isUser) {
        const username = input.replace(/^u\//i, "").replace(/^user\//i, "").trim();
        this.dataSource.options = {
          ...this.dataSource.options,
          subreddits: [],
          user: username,
          sort,
        };
      } else {
        const subreddits = this.api.normalizeSubredditInput(input).split("+");
        this.dataSource.options = {
          ...this.dataSource.options,
          subreddits,
          user: null,
          sort,
        };
      }
      this.dataSource.handleParameterChanges();

      // Use the queue-based fetch
      const { posts: rawPosts } = await this.dataSource.fetchNextPosts();
      const newPosts = rawPosts.filter((p) => !this.isBlacklisted(p));

      const startIndex = this.posts.length;
      this.posts.push(...newPosts);
      if (appendToReel) this.renderReelPosts(newPosts);
      else {
        this.renderGridPosts(newPosts, startIndex);
        // After first batch is painted, expand batch size for smoother infinite scroll
        if (startIndex === 0 && this.dataSource.postsPerBatch < 25) {
          this.dataSource.postsPerBatch = 25;
        }
      }
    } catch (err) {
      console.error("Fetch failed:", err);
      this.homeGrid.innerHTML =
        '<div style="grid-column:1/-1;text-align:center;padding:4rem 2rem;color:#22c55e;"><i class="bi bi-exclamation-triangle-fill" style="font-size:2rem;display:block;margin-bottom:1rem;"></i><p style="font-size:1rem;font-weight:600;margin-bottom:0.5rem;">Failed to load Reddit data</p><p style="font-size:0.85rem;color:#a1a1aa;">Check the browser console for details.</p></div>';
    } finally {
      this.isLoading = false;
      this.loader.style.opacity = "0";
      this.gridLoader.style.opacity = "0";

      if (!appendToReel) {
        this.gridSentinelObserver.unobserve(this.gridLoader);
        this.gridSentinelObserver.observe(this.gridLoader);
      } else {
        this.reelSentinelObserver.unobserve(this.loader);
        this.reelSentinelObserver.observe(this.loader);
      }
    }
  }

  renderGridPosts(newPosts, startIndex) {
    const CHUNK = 6;
    let offset = 0;
    const renderChunk = () => {
      const slice = newPosts.slice(offset, offset + CHUNK);
      if (!slice.length) return;
      const frags = this.masonryCols.map(() => document.createDocumentFragment());
      slice.forEach((data, i) => {
        const processed = data.processedContent || processRedditContent(data);
        if (!processed || processed.type === "invalid" || processed.type === "unsupported") return;
        const idx = startIndex + offset + i;
        let thumb;
        let fallbackSrc = "";
        const INVALID_THUMBS = new Set(["self", "default", "nsfw", "spoiler", "image", ""]);
        const fallbackThumb = data.thumbnail && !INVALID_THUMBS.has(data.thumbnail) ? data.thumbnail : "";
        if (processed.type === "video") {
          thumb = processed.thumbnail || processed.preview_url || processed.poster || fallbackThumb;
        } else {
          thumb = processed.poster || processed.display_url || processed.preview_url || fallbackThumb;
        }
        if (!thumb && processed.source) {
          thumb = processed.source;
        }
        fallbackSrc = (processed.source && thumb !== processed.source) ? processed.source : "";
        const isVideo = processed.type === "video" || processed.type === "embed";
        const isGallery = processed.type === "gallery";
        const w = processed.width || 0;
        const h = processed.height || 0;
        const aspectStyle = w && h ? ` style="aspect-ratio:${w}/${h}"` : "";
        const isAboveFold = idx < 8;
        const refPolicy = thumb ? ' referrerpolicy="no-referrer"' : "";
        const fallbackAttr = fallbackSrc ? ` data-fallback="${fallbackSrc}"` : "";
        const imgAttrs = `loading="${isAboveFold ? "eager" : "lazy"}" decoding="async"${isAboveFold ? ' fetchpriority="high"' : ""}${refPolicy}${fallbackAttr} onerror="if(this.dataset.fallback){this.src=this.dataset.fallback;this.removeAttribute('data-fallback')}else{this.style.display='none'}"`;

        // Build media HTML based on content type
        let mediaHtml = "";
        if (processed.type === "video") {
          const hlsSrc = processed.hlsSource || "";
          const poster = processed.preview_url || processed.thumbnail || thumb || "";
          const mp4Sources = (processed.sources || []).filter(
            (s) => s?.src && !s.src.includes(".m3u8") && !s.src.includes(".mpd")
          );
          const fallbackMp4 = mp4Sources[0]?.src || processed.dashSource || processed.source || "";
          const sourceElems = mp4Sources.map((s) => `<source src="${s.src}" type="video/mp4">`).join("") +
            (!mp4Sources.length && fallbackMp4 ? `<source src="${fallbackMp4}" type="video/mp4">` : "");
          mediaHtml = `<video loop muted playsinline preload="none" poster="${poster}" referrerpolicy="no-referrer" data-hls="${hlsSrc}" data-fallback="${fallbackMp4}" data-poster="${poster}" data-grid="1">${sourceElems}</video>`;
        } else if (isGallery && processed.images && processed.images.length > 0) {
          // Build a sliding track for smooth gallery navigation (mirrors reel view)
          const galleryCount = processed.images.length;
          if (galleryCount > 1) {
            const slidesHtml = processed.images.map((img) => {
              const src = img.display_url || img.preview_url || img.source || thumb;
              return `<img src="${src}" loading="lazy" decoding="async" referrerpolicy="no-referrer" alt="" draggable="false">`;
            }).join("");
            const dotsHtml = processed.images.map((_, i) => `<span${i === 0 ? ' class="active"' : ''}></span>`).join("");
            mediaHtml = `
              <div class="flex-gallery-track">${slidesHtml}</div>
              <button class="flex-gallery-nav left" aria-label="Previous image"><i class="bi bi-chevron-left"></i></button>
              <button class="flex-gallery-nav right" aria-label="Next image"><i class="bi bi-chevron-right"></i></button>
              <div class="flex-gallery-dots">${dotsHtml}</div>`;
          } else {
            const src = processed.images[0].display_url || processed.images[0].preview_url || processed.images[0].source || thumb;
            mediaHtml = `<img src="${src}" ${imgAttrs.replace('loading="eager"', 'loading="lazy"').replace('fetchpriority="high"', '')} alt="">`;
          }
        } else {
          mediaHtml = `<img src="${thumb}" ${imgAttrs} alt="">`;
        }

        // Badge overlay for galleries and videos
        let badgeHtml = "";
        if (isGallery) {
          const count = processed.images ? processed.images.length : processed.gallery_count || 0;
          badgeHtml = `<div class="flex-badge flex-badge-gallery"><i class="bi bi-images"></i> <span class="flex-gallery-count">${count}</span></div>`;
        } else if (isVideo) {
          badgeHtml = `<div class="flex-badge flex-badge-video"><i class="bi bi-play-circle-fill"></i></div>`;
        }

        const card = document.createElement("div");
        card.className = "flex-card";
        card.dataset.index = idx;
        card.innerHTML = `
          <div class="flex-thumb"${aspectStyle}>
            ${mediaHtml}
            ${badgeHtml}
            <div class="flex-thumb-overlay">
              <i class="bi bi-${isVideo ? "play-circle" : "arrows-fullscreen"}-fill"></i>
            </div>
          </div>
          <div class="flex-body">
            <span class="flex-sub" data-sub="${data.subreddit}">r/${data.subreddit}</span>
            <span class="flex-title">${data.title}</span>
            <div class="flex-meta">
              <span><i class="bi bi-arrow-up"></i> ${this.formatNumber(data.score)}</span>
              <span><i class="bi bi-chat"></i> ${this.formatNumber(data.num_comments)}</span>
              <span class="flex-author" data-author="${data.author}">u/${data.author}</span>
            </div>
          </div>`;
        card.addEventListener("click", (e) => {
          const sub = e.target.closest(".flex-sub");
          if (sub) {
            e.stopPropagation();
            this.navigateToSubreddit(sub.dataset.sub);
            return;
          }
          const author = e.target.closest(".flex-author");
          if (author) {
            e.stopPropagation();
            this.navigateToUser(author.dataset.author);
            return;
          }
          this.openReel(idx);
        });

        // Setup video observer for grid videos (hover-to-play)
        const gridVideo = card.querySelector("video");
        if (gridVideo) {
          this.videoObserver.observe(gridVideo);
          const hlsSrc = gridVideo.dataset.hls;
          if (hlsSrc && hlsSrc.includes(".m3u8")) {
            this.initHls(gridVideo, hlsSrc, gridVideo.dataset.fallback || "");
          }
          gridVideo.muted = true;
          gridVideo.preload = "none";
          // Play on hover, pause when mouse leaves
          card.addEventListener("mouseenter", () => {
            gridVideo.currentTime = 0;
            gridVideo.play().catch(() => {});
          });
          card.addEventListener("mouseleave", () => {
            gridVideo.pause();
          });
        }
        // Setup gallery navigation for multi-image posts
        if (isGallery && processed.images && processed.images.length > 1) {
          this.initFlexGallery(card, processed.images, data.id || data.name);
        }
        // Select column with smallest accumulated visual height (ScrollX masonry model)
        let targetColIdx = 0;
        for (let j = 1; j < this.masonryHeights.length; j++) {
          if (this.masonryHeights[j] < this.masonryHeights[targetColIdx]) {
            targetColIdx = j;
          }
        }
        // Estimated visual height: aspect ratio clamped + fixed card body allowance
        const aspectWeight = w && h ? Math.min(Math.max(h / w, 0.4), 2.5) : 1;
        this.masonryHeights[targetColIdx] += aspectWeight + 0.5;
        frags[targetColIdx].appendChild(card);
      });
      frags.forEach((frag, i) => this.masonryCols[i].appendChild(frag));
      offset += CHUNK;
      if (offset < newPosts.length) {
        requestAnimationFrame(renderChunk);
      }
    };
    requestAnimationFrame(renderChunk);
  }

  renderReelPosts(posts) {
    posts.forEach((data) => {
      const processed = data.processedContent || processRedditContent(data);
      if (!processed || processed.type === "invalid" || processed.type === "unsupported") return;

      const card = document.createElement("div");
      card.className = "post-card";

      let contentHtml = "";
      if (processed.type === "video") {
        const hlsSrc = processed.hlsSource || "";
        const isHls = hlsSrc.includes(".m3u8");
        const poster = processed.preview_url || processed.thumbnail || "";
        // Find the best non-HLS MP4 fallback for data-fallback and <source> elements
        const mp4Sources = (processed.sources || []).filter(
          (s) => s?.src && !s.src.includes(".m3u8") && !s.src.includes(".mpd")
        );
        const fallbackMp4 = mp4Sources[0]?.src || (!isHls && processed.source ? processed.source : "");
        const sourceElems = isHls
          ? "" // HLS.js will attach — don't add any <source> to confuse the browser
          : mp4Sources.map((s) => `<source src="${s.src}" type="video/mp4">`).join("") +
            (fallbackMp4 && !mp4Sources.length ? `<source src="${fallbackMp4}" type="video/mp4">` : "");
        contentHtml = `<div class="reel-video-player"><video loop playsinline referrerpolicy="no-referrer" poster="${poster}" data-fallback="${fallbackMp4}">${sourceElems}</video></div>`;
      } else if (processed.type === "embed") {
        contentHtml = `<div class="embed-container">${processed.html}</div>`;
      } else if (processed.type === "gallery") {
        const images = processed.images || [];
        if (images.length > 1) {
          // Build carousel for multi-image galleries
          const slidesHtml = images.map(img => {
            const src = img.display_url || img.preview_url || img.source || "";
            return `<img src="${src}" loading="lazy" referrerpolicy="no-referrer" draggable="false">`;
          }).join("");
          const dotsHtml = images.map((_, i) => `<span${i === 0 ? ' class="active"' : ''}></span>`).join("");
          contentHtml = `
            <div class="reel-gallery-container">
              <div class="reel-gallery-track">${slidesHtml}</div>
              <button class="reel-gallery-arrow left" aria-label="Previous image"><i class="bi bi-chevron-left"></i></button>
              <button class="reel-gallery-arrow right" aria-label="Next image"><i class="bi bi-chevron-right"></i></button>
              <div class="reel-gallery-counter">1 / ${images.length}</div>
              <div class="reel-gallery-dots">${dotsHtml}</div>
            </div>`;
        } else {
          const src = (images[0]?.display_url || images[0]?.source || processed.display_url || processed.source || "");
          contentHtml = `<img src="${src}" loading="lazy" referrerpolicy="no-referrer">`;
        }
      } else {
        contentHtml = `<img src="${processed.source}" loading="lazy" referrerpolicy="no-referrer">`;
      }

      card.innerHTML = this.getPostTemplate(data, contentHtml);
      this.app.appendChild(card);

      const video = card.querySelector("video");
      if (video) {
        const rvp = new ReelVideoPlayer(video);
        video._rvp = rvp;
        this.videoObserver.observe(video);
        video.addEventListener("play", () => this.pauseInactiveReelVideos(video));
        const hlsSrc = processed.hlsSource || "";
        if (hlsSrc) {
          this.initHls(video, hlsSrc, video.dataset.fallback || "");
        }
      }
      // Setup gallery navigation for multi-image posts
      if (processed.type === "gallery" && processed.images && processed.images.length > 1) {
        const galleryContainer = card.querySelector(".reel-gallery-container");
        if (galleryContainer) {
          this.initReelGallery(galleryContainer, processed.images, data.id || data.name);
        }
      }
      card.querySelector(".share-btn").onclick = (e) => {
        e.stopPropagation();
        this.sharePost(data);
      };
      card.querySelector(".comment-btn").onclick = (e) => {
        e.stopPropagation();
        this.openComments(data);
      };
      card.querySelector(".subreddit-name").onclick = (e) => {
        e.stopPropagation();
        this.navigateToSubreddit(data.subreddit);
      };
      card.querySelector(".post-meta").onclick = (e) => {
        e.stopPropagation();
        this.navigateToUser(data.author);
      };
    });
  }

  getPostTemplate(data, contentHtml) {
    return `
      <div class="post-content" id="content-${data.id || data.name}">${contentHtml}</div>
      <div class="post-info-overlay">
        <div class="post-header">
          <span class="subreddit-name">${data.subreddit}</span>
          <span class="post-meta">u/${data.author}</span>
        </div>
        <h2 class="post-title">${data.title}</h2>
      </div>
      <div class="post-footer">
        <div class="footer-item">
          <i class="bi bi-arrow-up-circle-fill"></i>
          <span>${this.formatNumber(data.score)}</span>
        </div>
        <div class="footer-item comment-btn" data-postid="${data.id}">
          <i class="bi bi-chat-fill"></i>
          <span>${this.formatNumber(data.num_comments)}</span>
        </div>
        <div class="footer-item share-btn" data-postid="${data.id}">
          <i class="bi bi-share-fill"></i>
          <span>Share</span>
        </div>
      </div>`;
  }

  sharePost(data) {
    const url = `https://reddit.com${data.permalink}`;
    if (navigator.share) {
      navigator.share({ title: data.title, url });
    } else {
      navigator.clipboard.writeText(url).then(() => {
        const btn = document.querySelector(`.share-btn`);
        if (btn) {
          btn.innerHTML = '<i class="bi bi-check-lg"></i><span>Copied!</span>';
          setTimeout(
            () =>
              (btn.innerHTML = '<i class="bi bi-share-fill"></i><span>Share</span>'),
            1500
          );
        }
      });
    }
  }

  async openComments(data) {
    this.toggleComments(true);
    this.commentList.innerHTML = "";
    this.commentLoader.style.display = "flex";
    this.commentCountEl.innerText = `${this.formatNumber(data.num_comments)} comments`;

    // Populate post info in comment header
    const titleEl = document.getElementById("commentPostTitle");
    const subredditEl = document.getElementById("commentSubreddit");
    if (titleEl) titleEl.textContent = data.title || "Comments";
    if (subredditEl) subredditEl.textContent = `r/${data.subreddit || ""}`;

    // Store current comment data for retry
    this._currentCommentData = data;

    this._commentRequestId = (this._commentRequestId || 0) + 1;
    const reqId = this._commentRequestId;

    // Store permalink for "load more" operations
    this._currentCommentPermalink = data.permalink;

    try {
      const [, commentData] = await this.api.fetchComments(data.permalink);
      if (reqId !== this._commentRequestId) return;
      const comments = commentData.data.children
        .filter((c) => c.kind === "t1")
        .map((c) => c.data);
      if (!comments.length) {
        this.commentList.innerHTML =
          '<div class="comment-empty">No comments yet. Be the first to comment on Reddit.</div>';
        return;
      }
      this.commentList.innerHTML = this.renderCommentTree(comments, 0);
      this.attachCollapseHandlers(this.commentList);
      this.attachLoadMoreHandlers(this.commentList);
    } catch (e) {
      if (reqId !== this._commentRequestId) return;
      console.error("Failed to fetch comments:", e);
      this.commentList.innerHTML =
        '<div class="comment-empty">Failed to load comments. <button class="pill-btn" onclick="window.scroller && window.scroller.openComments(window.scroller._currentCommentData)" style="margin-top:8px;font-size:0.8rem;"><i class="bi bi-arrow-clockwise"></i> Retry</button></div>';
    } finally {
      if (reqId === this._commentRequestId) {
        this.commentLoader.style.display = "none";
      }
    }
  }

  renderCommentTree(comments, depth = 0) {
    return comments
      .filter((c) => c.body || c.body === "")
      .map((c) => {
        const isDeleted = c.author === "[deleted]" || c.author === "[removed]";
        const authorClass = c.author === "[deleted]" ? "author-deleted" : c.author === "[removed]" ? "author-removed" : "";
        const isCollapsed = depth >= 3;
        const hasReplies = c.replies && c.replies.data && (
          c.replies.data.children.some((r) => r.kind === "t1") ||
          c.replies.data.children.some((r) => r.kind === "more")
        );
        return `
      <div class="comment-item ${depth > 0 ? "comment-reply" : ""}${isCollapsed ? " collapsed" : ""}" data-depth="${Math.min(depth, 6)}">
        <div class="comment-header-row">
          <span class="comment-author ${authorClass}">${isDeleted ? c.author : `u/${c.author}`}</span>
          ${c.stickied ? '<span class="pinned-badge"><i class="bi bi-pin-fill"></i> Pinned</span>' : ""}
          <span class="comment-score"><i class="bi bi-arrow-up-short"></i>${this.formatNumber(c.score || 0)}</span>
          ${c.created_utc ? `<span class="comment-time">${this.formatTimeAgo(c.created_utc)}</span>` : ""}
          ${hasReplies ? '<i class="bi bi-chevron-down comment-collapse-toggle"></i>' : ""}
        </div>
        <div class="comment-body">${this.parseMarkdown(c.body || "")}</div>
        ${c.replies && c.replies.data
          ? this.renderCommentReplies(c.replies.data.children, depth + 1)
          : ""}
      </div>
    `;
      })
      .join("");
  }

  renderCommentReplies(children, depth) {
    const t1Comments = children.filter((r) => r.kind === "t1").map((r) => r.data);
    const moreEntries = children.filter((r) => r.kind === "more").map((r) => r.data);
    let html = "";

    if (t1Comments.length) {
      html += this.renderCommentTree(t1Comments, depth);
    }

    // Render "load more" buttons for truncated threads
    for (const more of moreEntries) {
      const count = more.count || more.children?.length || 0;
      const childrenIds = (more.children || []).join(",");
      if (count > 0) {
        html += `<button class="comment-load-more" data-parent-id="${more.parent_id || ""}" data-children="${childrenIds}" data-count="${count}" data-depth="${depth}">
          <i class="bi bi-plus-circle"></i> Load ${count} more repl${count > 1 ? "ies" : "y"}
        </button>`;
      }
    }

    return html ? `<div class="comment-replies">${html}</div>` : "";
  }

  async fetchMoreComments(button) {
    const children = button.dataset.children;
    const depth = parseInt(button.dataset.depth, 10) || 0;
    const permalink = this._currentCommentPermalink;

    if (!children || !permalink) return;

    // Show loading state
    button.disabled = true;
    button.innerHTML = '<div class="spinner" style="width:14px;height:14px;border-width:2px;margin:0 auto;"></div>';

    try {
      // Fetch the full comment thread with specific children included
      // Reddit API: pass children IDs as query params to load specific sub-threads
      const ids = children.split(",").slice(0, 50); // Max 50 per request

      // Fetch directly (with JSONP fallback) — bypass proxy which isn't configured
      const fetchUrl = `${this.api.baseUrl}${permalink}.json`;
      const params = new URLSearchParams({ raw_json: "1", limit: "100" });
      params.set("children", ids.join(","));
      const fullUrl = fetchUrl + "?" + params.toString();
      
      let data;
      try {
        const res = await fetch(fullUrl, { headers: { Accept: "application/json" }, credentials: "omit" });
        if (res.ok) data = await res.json();
      } catch (_) {}
      if (!data) {
        data = await this.api.jsonpRequest(fullUrl);
      }
      if (!data || !data[1]) throw new Error("Invalid response");

      // data[1] is the comments listing
      const commentData = data[1];
      if (!commentData.data || !commentData.data.children) throw new Error("Invalid response");

      // Parse resolved comments (t1 kind)
      const resolvedComments = commentData.data.children
        .filter((c) => c.kind === "t1")
        .map((c) => c.data);

      if (!resolvedComments.length) {
        button.textContent = "No more replies to load";
        button.disabled = true;
        setTimeout(() => button.remove(), 2000);
        return;
      }

      // Render the resolved comments after the button
      const fragment = document.createElement("div");
      fragment.innerHTML = this.renderCommentTree(resolvedComments, depth);
      button.parentNode.insertBefore(fragment, button.nextSibling);

      // Attach collapse handlers to new comments
      this.attachCollapseHandlers(fragment);
      this.attachLoadMoreHandlers(fragment);

      // Check if there are remaining children beyond the 50 cap
      const allChildren = children.split(",");
      const remainingChildren = allChildren.slice(50);

      if (remainingChildren.length > 0) {
        button.dataset.children = remainingChildren.join(",");
        button.dataset.count = remainingChildren.length;
        button.innerHTML = `<i class="bi bi-plus-circle"></i> Load ${remainingChildren.length} more repl${remainingChildren.length > 1 ? "ies" : "y"}`;
        button.disabled = false;
      } else {
        button.remove();
      }
    } catch (e) {
      console.error("Failed to load more comments:", e);
      button.innerHTML = '<i class="bi bi-exclamation-circle"></i> Failed to load. Tap to retry.';
      button.disabled = false;
      // Re-enable retry on next click
      button.addEventListener("click", () => this.fetchMoreComments(button), { once: true });
    }
  }

  attachLoadMoreHandlers(container) {
    container.querySelectorAll(".comment-load-more").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.fetchMoreComments(btn);
      });
    });
  }

  attachCollapseHandlers(container) {
    container.querySelectorAll(".comment-header-row").forEach((row) => {
      const toggle = row.querySelector(".comment-collapse-toggle");
      if (!toggle) {
        const item = row.closest(".comment-item");
        const hasReplies = item && item.querySelector(":scope > .comment-replies");
        if (hasReplies) {
          row.style.cursor = "pointer";
          row.addEventListener("click", (e) => {
            e.stopPropagation();
            item.classList.toggle("collapsed");
          });
        }
        return;
      }
      row.style.cursor = "pointer";
      row.addEventListener("click", (e) => {
        e.stopPropagation();
        const item = row.closest(".comment-item");
        item.classList.toggle("collapsed");
        toggle.classList.toggle("bi-chevron-down");
        toggle.classList.toggle("bi-chevron-right");
      });
    });
  }

  formatTimeAgo(createdUtc) {
    if (!createdUtc) return "";
    const diff = Date.now() - createdUtc * 1000;
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h`;
    const days = Math.floor(hrs / 24);
    if (days < 30) return `${days}d`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months}mo`;
    return `${Math.floor(months / 12)}y`;
  }

  toggleComments(show) {
    if (show) this.commentSheet.classList.add("active");
    else this.commentSheet.classList.remove("active");
  }

  parseMarkdown(text) {
    if (!text) return "";
    // Step 1: Escape HTML
    let html = String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Step 2: Parse block-level elements first
    // Paragraphs: double newlines become <p> tags (wrap entire output later)
    // Handle paragraphs: split on blank lines, process each block

    // Step 3: Inline elements (order matters to avoid conflicts)
    // Inline code (must be before bold/italic to avoid nesting issues)
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

    // Strikethrough
    html = html.replace(/~~([^~]+)~~/g, "<del>$1</del>");

    // Spoiler tags: >!text!<
    html = html.replace(/\&gt;!([^!]+)!/g, '<span class="comment-spoiler">$1</span>');

    // Bold **text**
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

    // Italic *text*
    html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");

    // Links [text](url)
    html = html.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // Step 4: Reddit-specific auto-linking
    // r/subreddit links
    html = html.replace(/(^|\s)(r\/[a-zA-Z0-9_]+)/g, '$1<a href="https://reddit.com/$2" target="_blank" rel="noopener noreferrer">$2</a>');
    // u/username links
    html = html.replace(/(^|\s)(u\/[a-zA-Z0-9_-]+)/g, '$1<a href="https://reddit.com/$2" target="_blank" rel="noopener noreferrer">$2</a>');

    // Step 5: Blockquotes (lines starting with >)
    html = html.replace(/^&gt;\s?(.*)$/gm, "<blockquote>$1</blockquote>");

    // Step 6: Convert line breaks - preserve paragraph structure
    // Replace single newlines with <br>, but don't double up
    html = html.replace(/\n/g, "<br>");

    return html;
  }

  initHls(video, hlsUrl, fallbackUrl = "") {
    if (!video || !hlsUrl) return;
    if (!Hls.isSupported()) {
      // Native HLS (Safari) — assign directly
      video.src = hlsUrl;
      video.load();
      return;
    }
    if (video._hls) {
      video._hls.destroy();
      video._hls = null;
    }
    const hls = new Hls({
      enableWorker: true,
      lowLatencyMode: true,
      startFragPrefetch: true,
      // Always play the highest available rendition (HD every time).
      // Do NOT cap to the rendered element size — that forces low quality
      // on small grid thumbnails.
      capLevelToPlayerSize: false,
      startLevel: -1,
      maxBufferLength: 15,
      maxMaxBufferLength: 30,
      backBufferLength: 5,
      // High default bandwidth estimate so ABR never starts on a low rung.
      abrEwmaDefaultEstimate: 5000000,
    });
    // Attach first, then load source once media is ready (ScrollX pattern)
    hls.attachMedia(video);
    hls.on(Hls.Events.MEDIA_ATTACHED, () => {
      hls.loadSource(hlsUrl);
    });
    // Pin to the highest-quality rendition as soon as the manifest is known.
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      if (hls.levels && hls.levels.length) {
        const topLevel = hls.levels.length - 1;
        hls.startLevel = topLevel;
        hls.currentLevel = topLevel;
      }
    });
    hls.on(Hls.Events.ERROR, (_, d) => {
      if (!d.fatal) return;
      if (d.type === Hls.ErrorTypes.NETWORK_ERROR) {
        hls.startLoad();
      } else if (d.type === Hls.ErrorTypes.MEDIA_ERROR) {
        hls.recoverMediaError();
      } else {
        hls.destroy();
        video._hls = null;
        if (fallbackUrl) {
          video.src = fallbackUrl;
          video.load();
        }
      }
    });
    video._hls = hls;
  }

  navigateToSubreddit(sub) {
    this.searchInput.value = sub;
    this.currentSubreddit = sub;
    this.resetFeed();
    this.fetchPosts();
  }

  navigateToUser(username) {
    this.searchInput.value = `u/${username}`;
    this.currentSubreddit = `u/${username}`;
    this.resetFeed();
    this.fetchPosts();
  }

  formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  }
}

// Only auto-instantiate in browser, not during tests
if (typeof window !== "undefined" && document.getElementById("home")) {
  const scroller = new RedditScroller();
  window.scroller = scroller;
}
export { RedditAPI, RedditAPIError, AbstractDataQueue, RedditDataSource, InfiniteRedditFeed, processRedditContent, RedditScroller };
