"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [488], {
        34362: (e, i, t) => {
            function r(e) {
                return ["0_0", "!_!", "1_1", "2_2", "3_3", "4_4", "5_5", "6_6", "7_7", "8_8", "9_9", "T_T", "O_O", "o_o", "u_u", "v_v", "x_x", "^_^", ">_<", "-_-", "$_$", "O_o", "o_O", "@_@", "Q_Q", ";_;"].includes(e) ? e : e.replaceAll(/_/g, " ")
            }

            function o(e) {
                return e.replace(/\(\s+(.*?(?:\s+~\s+.*?)*)\s+\)/g, (e, i) => {
                    let t = i.split(/\s+~\s+/).map(e => "~".concat(e.trim())).join(" ");
                    return " ".concat(t)
                })
            }
            t.d(i, {
                Zy: () => o,
                t: () => r
            }), t(95714).Buffer
        },
        7688: (e, i, t) => {
            t.d(i, {
                y: () => r
            });
            class r {
                async fetchNextPosts(e) {
                    if (this.hasParametersChanged() && (this.resetQueue(), this.handleParameterChanges(), this.triggerRefill(e)), 0 === this.queue.length) {
                        if ("exhausted" === this.fetchState) return {
                            posts: [],
                            hasMore: !1
                        };
                        await this.blockingFetch(e)
                    }
                    let i = this.queue.splice(0, this.postsPerBatch);
                    return this.queue.length < this.refillThreshold && "idle" === this.fetchState && this.triggerRefill(e), {
                        posts: i,
                        hasMore: "exhausted" !== this.fetchState || this.queue.length > 0
                    }
                }
                invalidate(e) {
                    this.resetQueue(), this.handleParameterChanges(), this.triggerRefill(e)
                }
                get queueSize() {
                    return this.queue.length
                }
                get isExhausted() {
                    return "exhausted" === this.fetchState
                }
                get isFetching() {
                    return "fetching" === this.fetchState
                }
                async blockingFetch(e) {
                    this.inflightFetch ? await this.inflightFetch : "idle" === this.fetchState && await this.runFetch(e)
                }
                triggerRefill(e) {
                    "idle" === this.fetchState && this.runFetch(e).catch(e => {
                        (null == e ? void 0 : e.name) !== "AbortError" && console.error("[AbstractDataQueue] Background refill failed:", e)
                    })
                }
                async runFetch(e) {
                    "idle" === this.fetchState && (this.fetchState = "fetching", this.inflightFetch = (async () => {
                        try {
                            let {
                                posts: i,
                                hasMore: t
                            } = await this.fetchMoreData(e);
                            this.enqueue(i), this.fetchState = t ? "idle" : "exhausted"
                        } catch (e) {
                            if ((null == e ? void 0 : e.name) === "AbortError") this.fetchState = "idle";
                            else throw this.fetchState = "exhausted", e
                        } finally {
                            this.inflightFetch = null
                        }
                    })(), await this.inflightFetch)
                }
                enqueue(e) {
                    for (let t of e) {
                        var i;
                        let e = null !== (i = t.compositeId) && void 0 !== i ? i : t.id;
                        this.seenIds.has(e) || (this.seenIds.add(e), this.queue.push(t))
                    }
                }
                hydrate(e) {
                    for (let t of e) {
                        var i;
                        let e = null !== (i = t.compositeId) && void 0 !== i ? i : t.id;
                        this.seenIds.has(e) || (this.seenIds.add(e), this.queue.push(t))
                    }
                }
                resetQueue() {
                    this.queue = [], this.seenIds.clear(), this.fetchState = "idle", this.inflightFetch = null
                }
                constructor(e) {
                    var i, t, r;
                    this.queue = [], this.seenIds = new Set, this.fetchState = "idle", this.inflightFetch = null, this.postsPerBatch = null !== (t = null == e ? void 0 : e.postsPerBatch) && void 0 !== t ? t : 25, this.refillThreshold = null !== (r = null == e ? void 0 : e.refillThreshold) && void 0 !== r ? r : 50, (null == e ? void 0 : null === (i = e.initialData) || void 0 === i ? void 0 : i.length) && this.hydrate(e.initialData)
                }
            }
        },
        22099: (e, i, t) => {
            t.d(i, {
                A: () => a
            });
            var r = t(29602),
                o = t(95714).Buffer;
            class s extends Error {
                constructor(e, i) {
                    super(e), this.details = i, this.name = "RedditAPIError"
                }
            }
            class l {
                isServer() {
                    return !1
                }
                shouldUseServerOAuth() {
                    return this.isServer() && !!this.redditOAuth
                }
                extractFromSort(e) {
                    let i = e,
                        t = "",
                        r = e.match(/^top\?t=(.+)$/);
                    return r && (i = "top", t = "&t=".concat(r[1])), {
                        baseSort: i,
                        timeQuery: t
                    }
                }
                async fetchData(e, i) {
                    var t;
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (this.shouldUseServerOAuth()) return (await this.attemptCachedOAuthFetch(e, i)).json();
                    if (null !== (t = r.isProxy) && void 0 !== t ? t : this.useProxy) return await this.attemptProxyFetch(e, i);
                    throw new s("Direct Reddit fetch is disabled. Use proxy or server OAuth.")
                }
                async attemptDirectFetch(e, i) {
                    let t = this.buildUrl("".concat(this.baseUrl).concat(e), i),
                        r = await fetch(t.toString());
                    return r.ok || await this.handleErrorResponse(r), r
                }
                async attemptProxyFetch(e, i) {
                    let t = this.buildProxyUrl(e, i).toString();
                    console.log("Fetching from proxy: ".concat(t));
                    let r = await fetch(t);
                    if (!r.ok) throw new s("Proxy fetch failed: ".concat(r.statusText));
                    return r.json()
                }
                buildUrl(e, i) {
                    let t = new URL(e, r.C1);
                    return i.forEach((e, i) => t.searchParams.append(i, e)), t
                }
                buildProxyUrl(e, i) {
                    let t = new URL(this.proxyUrl, r.C1);
                    return t.searchParams.set("site", "reddit"), t.searchParams.set("endpoint", e), i.forEach((e, i) => t.searchParams.append(i, e)), t
                }
                async handleErrorResponse(e) {
                    if (404 === e.status) throw new s("Resource not found: ".concat(e.statusText));
                    let i = await e.json();
                    if (403 === e.status && (null == i ? void 0 : i.reason) === "private") throw new s("Subreddit is private");
                    throw Error("Direct fetch failed")
                }
                shouldSkipProxyFetch(e, i) {
                    return !i || e instanceof s && (e.message.includes("Resource not found") || e.message.includes("Subreddit is private"))
                }
                async fetchUsersPosts(e, i) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        {
                            baseSort: r,
                            timeQuery: o
                        } = this.extractFromSort(i),
                        l = new URLSearchParams({
                            limit: this.postsPerPage.toString(),
                            after: t,
                            raw_json: "1",
                            sort: r
                        });
                    o && l.append("t", o.replace("&t=", ""));
                    let d = await this.fetchData("/user/".concat(e, "/submitted.json"), l);
                    if (!d || !d.data) throw new s("Unexpected data structure for user ".concat(e));
                    return {
                        posts: d.data.children.map((e, i) => ({ ...e.data,
                            index: i
                        })),
                        afterToken: d.data.after || ""
                    }
                }
                async fetchSubredditPosts(e, i) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        {
                            baseSort: r,
                            timeQuery: o
                        } = this.extractFromSort(i),
                        l = new URLSearchParams({
                            limit: this.postsPerPage.toString(),
                            after: t,
                            raw_json: "1"
                        });
                    o && l.append("t", o.replace("&t=", ""));
                    let d = await this.fetchData("/r/".concat(e, "/").concat(r, ".json"), l);
                    if (!d || !d.data) throw new s("Unexpected data structure for subreddit ".concat(e));
                    return {
                        posts: d.data.children.map((e, i) => ({ ...e.data,
                            index: i
                        })),
                        afterToken: d.data.after || ""
                    }
                }
                async fetchCombinedPosts(e, i) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        {
                            baseSort: r,
                            timeQuery: o
                        } = this.extractFromSort(i),
                        l = e.join("%2B"),
                        d = new URLSearchParams({
                            limit: this.postsPerPage,
                            after: t,
                            raw_json: "1"
                        });
                    o && d.append("t", o.replace("&t=", ""));
                    let a = await this.fetchData("/r/".concat(l, "/").concat(r, ".json"), d);
                    if (!a || !a.data) throw new s("Unexpected data structure for combined subreddits");
                    return {
                        posts: a.data.children.map((e, i) => ({ ...e.data,
                            index: i
                        })),
                        afterToken: a.data.after || ""
                    }
                }
                async validateSubreddit(e) {
                    try {
                        let i = new URLSearchParams({
                                raw_json: "1"
                            }),
                            t = await this.fetchData("/r/".concat(e, "/hot.json"), i);
                        if ("Not Found" === t.message) throw new s("Subreddit '".concat(e, "' not found"));
                        return !0
                    } catch (i) {
                        if (i instanceof s) throw i;
                        throw new s("Failed to validate subreddit: ".concat(e), i)
                    }
                }
                async searchSubreddits(e, i) {
                    try {
                        let t = new URLSearchParams({
                                q: e,
                                include_over_18: "true",
                                raw_json: "1"
                            }),
                            r = await this.fetchData("/subreddits/search.json", t, {
                                isProxy: !0
                            });
                        if (!r.data) throw new s("Invalid search response format");
                        let o = r.data.children.filter(e => "string" == typeof e.data.url).map(e => ({
                            name: e.data.display_name,
                            url: e.data.url,
                            subscribers: e.data.subscribers,
                            description: e.data.public_description || e.data.description || "",
                            isNSFW: e.data.over18
                        }));
                        return "sfw" === i ? o = o.filter(e => !e.isNSFW) : "nsfw" === i && (o = o.filter(e => e.isNSFW)), o
                    } catch (e) {
                        if (e instanceof s) throw e;
                        throw new s("Failed to search subreddits", e)
                    }
                }
                async autocompleteSubreddits(e, i) {
                    try {
                        let t = new URLSearchParams({
                                query: e,
                                include_over_18: "true",
                                raw_json: "1",
                                gilding_detail: "1"
                            }),
                            r = await this.fetchData("/api/subreddit_autocomplete_v2.json", t);
                        if (!r.data) throw new s("Invalid search response format");
                        let o = r.data.children.filter(e => "string" == typeof e.data.url).map(e => ({
                            name: e.data.display_name,
                            url: e.data.url,
                            subscribers: e.data.subscribers,
                            description: e.data.public_description || e.data.description || "",
                            isNSFW: e.data.over18
                        }));
                        return "sfw" === i ? o = o.filter(e => !e.isNSFW) : "nsfw" === i && (o = o.filter(e => e.isNSFW)), o
                    } catch (e) {
                        if (e instanceof s) throw e;
                        throw new s("Failed to search subreddits", e)
                    }
                }
                async checkForAudio(e) {
                    return await Promise.all(e.map(async e => {
                        var i, t;
                        if (null === (t = e.preview) || void 0 === t ? void 0 : null === (i = t.reddit_video_preview) || void 0 === i ? void 0 : i.hls_url) try {
                            let i = await fetch(e.preview.reddit_video_preview.hls_url);
                            if (i.ok) {
                                let t = await i.text();
                                e.hasAudio = /TYPE=AUDIO/.test(t)
                            }
                        } catch (i) {
                            console.error("Error checking for audio in HLS manifest:", i), e.hasAudio = !1
                        }
                        return e
                    }))
                }
                async getOAuthToken() {
                    if (!this.redditOAuth) throw new s("Missing Reddit OAuth config");
                    let e = Date.now();
                    if (this.cachedToken && this.cachedToken.expiresAt - 6e4 > e) return this.cachedToken.token;
                    let i = o.from("".concat(this.redditOAuth.clientId, ":").concat(this.redditOAuth.clientSecret)).toString("base64"),
                        t = await fetch(this.tokenUrl, {
                            method: "POST",
                            headers: {
                                Authorization: "Basic ".concat(i),
                                "Content-Type": "application/x-www-form-urlencoded",
                                "User-Agent": "node:scrollx:v1.0 (by /u/".concat(this.redditOAuth.username, ")")
                            },
                            body: new URLSearchParams({
                                grant_type: "client_credentials"
                            })
                        });
                    if (!t.ok) throw new s("Reddit OAuth token failed: ".concat(t.status));
                    let r = await t.json();
                    return this.cachedToken = {
                        token: r.access_token,
                        expiresAt: e + 1e3 * r.expires_in
                    }, this.cachedToken.token
                }
                async attemptOAuthFetch(e, i) {
                    var t, r;
                    let o = this.buildUrl("".concat(this.oauthBaseUrl).concat(e), i),
                        s = await this.getOAuthToken(),
                        l = await fetch(o.toString(), {
                            headers: {
                                Authorization: "Bearer ".concat(s),
                                Accept: "application/json",
                                "User-Agent": "node:scrollx:v1.0 (by /u/".concat(null === (t = this.redditOAuth) || void 0 === t ? void 0 : t.username, ")")
                            }
                        });
                    return 401 === l.status && (this.cachedToken = null, s = await this.getOAuthToken(), l = await fetch(o.toString(), {
                        headers: {
                            Authorization: "Bearer ".concat(s),
                            Accept: "application/json",
                            "User-Agent": "node:scrollx:v1.0 (by /u/".concat(null === (r = this.redditOAuth) || void 0 === r ? void 0 : r.username, ")")
                        }
                    })), l.ok || await this.handleErrorResponse(l), l
                }
                getServerCacheTTL(e) {
                    return e.startsWith("/by_id/") ? 2592e3 : 14400
                }
                async attemptCachedOAuthFetch(e, i) {
                    let t = this.getServerCacheTTL(e);
                    if (t <= 0 || "undefined" == typeof caches) return this.attemptOAuthFetch(e, i);
                    let r = new Request(this.buildUrl("".concat(this.oauthBaseUrl).concat(e), i).toString(), {
                            method: "GET"
                        }),
                        o = caches.default,
                        s = await o.match(r);
                    if (s) return s.clone();
                    let l = await this.attemptOAuthFetch(e, i);
                    if (!l.ok) return l;
                    let d = new Response(await l.text(), {
                        status: l.status,
                        headers: {
                            "Content-Type": "application/json",
                            "Cache-Control": "public, max-age=".concat(t)
                        }
                    });
                    return await o.put(r, d.clone()), d
                }
                constructor(e = {}) {
                    var i;
                    this.baseUrl = "https://old.reddit.com", this.oauthBaseUrl = "https://oauth.reddit.com", this.tokenUrl = "https://www.reddit.com/api/v1/access_token", this.cachedToken = null, this.proxyUrl = e.proxyUrl || "/api/booru", this.useProxy = null !== (i = e.useProxy) && void 0 !== i && i, this.postsPerPage = e.limit || "100", this.redditOAuth = e.redditOAuth
                }
            }
            var d = t(7688);
            class a extends d.y {
                async searchSubreddits(e, i) {
                    return this.api.searchSubreddits(e, i)
                }
                async validateSubreddit(e) {
                    return this.api.validateSubreddit(e)
                }
                async fetchAndTransformPosts(e, i) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        {
                            posts: r,
                            afterToken: o
                        } = await this.api.fetchCombinedPosts(e, i, t);
                    return {
                        posts: r.map(e => this.transformToUnifiedPost(e)).filter(e => null !== e),
                        afterToken: o
                    }
                }
                static deduplicatePosts(e) {
                    let i = new Set;
                    return e.filter(e => {
                        var t;
                        let r = null == e ? void 0 : null === (t = e.processedContent) || void 0 === t ? void 0 : t.source_url;
                        return !!r && !i.has(r) && (i.add(r), !0)
                    })
                }
                processPosts(e) {
                    let i = e.map(this.transformToUnifiedPost).filter(e => null !== e);
                    if (!i.length) throw Error("No visual posts to display.");
                    return i
                }
                async fetchUsersPosts() {
                    let {
                        sort: e
                    } = this.options, {
                        posts: i,
                        afterToken: t
                    } = await this.api.fetchUsersPosts(this.currentUser, e, this.afterTokens[this.currentUser] || "");
                    this.afterTokens[this.currentUser] = t;
                    let r = this.processPosts(i);
                    return {
                        posts: a.deduplicatePosts(r),
                        afterToken: t
                    }
                }
                async fetchMoreData() {
                    let {
                        subreddits: e,
                        user: i,
                        sort: t
                    } = this.options;
                    if (i) {
                        let {
                            posts: e,
                            afterToken: i
                        } = await this.fetchUsersPosts();
                        return {
                            posts: e,
                            hasMore: !!i
                        }
                    }
                    let r = [],
                        o = !1;
                    if (this.useCombinedFetch) {
                        let {
                            posts: i,
                            afterToken: s
                        } = await this.api.fetchCombinedPosts(e, t, this.combinedAfterToken);
                        r = i, this.combinedAfterToken = s, o = !!s
                    } else {
                        let i = await Promise.all(e.map(async e => {
                            let {
                                posts: i,
                                afterToken: r
                            } = await this.api.fetchSubredditPosts(e, t, this.afterTokens[e] || "");
                            return this.afterTokens[e] = r, {
                                posts: i,
                                hasMore: !!r
                            }
                        }));
                        r = i.flatMap(e => e.posts).sort((e, i) => i.created - e.created), o = i.some(e => e.hasMore)
                    }
                    let s = this.processPosts(r);
                    return {
                        posts: a.deduplicatePosts(s),
                        hasMore: o
                    }
                }
                hasParametersChanged() {
                    var e;
                    return this.currentSort !== this.options.sort || this.useCombinedFetch !== (null !== (e = this.options.useCombinedFetch) && void 0 !== e && e) || JSON.stringify(this.currentSubreddits) !== JSON.stringify(this.options.subreddits)
                }
                handleParameterChanges() {
                    var e;
                    this.currentSort = this.options.sort, this.currentSubreddits = [...this.options.subreddits], this.useCombinedFetch = null !== (e = this.options.useCombinedFetch) && void 0 !== e && e
                }
                async fetchPostById(e) {
                    var i;
                    let t = new URLSearchParams({}),
                        r = null === (i = (await this.api.fetchData("/by_id/".concat(e, ".json"), t)).data.children[0]) || void 0 === i ? void 0 : i.data;
                    return r ? this.transformToUnifiedPost(r) : null
                }
                transformToUnifiedPost(e) {
                    var i, t, o, s, l, d, a, n, u, h, c, v, p, m;
                    let f = function(e) {
                        var i, t, r, o, s, l, d, a, n, u, h, c, v, p, m, f, w, g, b, _, y, k, S, P, A, x, T, U, F, O, C, R, j, I, B, D, q, E, L, N, W, M, Q, V, z, H, $, J, Z, G, Y, K, X, ee, ei, et, er, eo, es, el, ed, ea, en, eu, eh, ec, ev, ep, em, ef, ew, eg, eb, e_, ey, ek, eS, eP, eA, ex, eT, eU, eF, eO, eC, eR, ej, eI, eB, eD, eq, eE, eL, eN, eW, eM, eQ, eV, ez, eH, e$, eJ, eZ, eG, eY, eK, eX, e0, e1, e2, e4;
                        if (!e || !e.title || e.url.includes("gfycat") || e.url.includes("youtube.com") || e.over_18 && e.domain.includes("imgur.com")) return {
                            type: "invalid",
                            source: "",
                            hlsSource: "",
                            width: 0,
                            height: 0
                        };
                        let e8 = "https://www.reddit.com" + e.permalink;
                        if (e.is_gallery && e.gallery_data && e.media_metadata) {
                            let i = e.gallery_data.items.map(i => {
                                var t, r;
                                let o = e.media_metadata[i.media_id];
                                if (!o) return null;
                                let s = "AnimatedImage" === o.e,
                                    l = s ? o.s.gif || o.s.mp4 : null === (t = o.s) || void 0 === t ? void 0 : t.u;
                                if (!l) return null;
                                let d = (null === (r = o.p) || void 0 === r ? void 0 : r.map(e => ({
                                        url: e.u.replace(/&amp;/g, "&"),
                                        width: e.x,
                                        height: e.y
                                    }))) || [],
                                    a = {
                                        url: l.replace(/&amp;/g, "&"),
                                        width: o.s.x || 0,
                                        height: o.s.y || 0
                                    };
                                return {
                                    source: l,
                                    width: o.s.x || 0,
                                    height: o.s.y || 0,
                                    type: s ? l.endsWith(".mp4") ? "video" : "gif" : "image",
                                    resolutions: [...d, a]
                                }
                            }).filter(Boolean);
                            if (i.length > 0) return {
                                type: "gallery",
                                display_url: i[0].resolutions[0].url,
                                source: i[0].source,
                                width: i[0].width,
                                height: i[0].height,
                                images: i,
                                permalink: e8,
                                gallery_count: i.length,
                                is_animated: i.some(e => "image" !== e.type)
                            }
                        }
                        if ("v.redd.it" === e.domain || e.is_video && (null === (i = e.media) || void 0 === i ? void 0 : i.reddit_video)) {
                            let i = null === (d = e.media) || void 0 === d ? void 0 : d.reddit_video;
                            if (!i) return {
                                type: "invalid",
                                source: "",
                                hlsSource: "",
                                width: 0,
                                height: 0
                            };
                            let t = i.fallback_url.split("/")[3],
                                r = "".concat("https://v.redd.it/".concat(t), "/").concat("DASH_1080", ".mp4"),
                                o = (null === (n = e.preview) || void 0 === n ? void 0 : null === (a = n.images[0].resolutions[2]) || void 0 === a ? void 0 : a.url) || (null === (h = e.preview) || void 0 === h ? void 0 : null === (u = h.images[0].resolutions[1]) || void 0 === u ? void 0 : u.url) || (null === (v = e.preview) || void 0 === v ? void 0 : null === (c = v.images[0].resolutions[0]) || void 0 === c ? void 0 : c.url);
                            return {
                                type: "video",
                                source: r,
                                hlsSource: i.hls_url,
                                dashSource: i.dash_url,
                                poster: null == o ? void 0 : o.replace(/&amp;/g, "&"),
                                width: i.width,
                                height: i.height,
                                permalink: e8,
                                duration: i.duration,
                                bitrate: i.bitrate_kbps
                            }
                        }
                        if ((null === (t = e.url) || void 0 === t ? void 0 : t.includes(".gifv")) || (null === (r = e.url) || void 0 === r ? void 0 : r.endsWith(".mp4")) || (null === (o = e.url) || void 0 === o ? void 0 : o.endsWith(".webm"))) {
                            let i = (null === (p = e.preview) || void 0 === p ? void 0 : p.reddit_video_preview) || {},
                                t = (null === (m = e.url) || void 0 === m ? void 0 : m.includes(".gifv")) ? e.url.replace(".gifv", ".mp4") : i.fallback_url || e.url,
                                r = (null === (w = e.preview) || void 0 === w ? void 0 : null === (f = w.images[0].resolutions[2]) || void 0 === f ? void 0 : f.url) || (null === (b = e.preview) || void 0 === b ? void 0 : null === (g = b.images[0].resolutions[1]) || void 0 === g ? void 0 : g.url) || (null === (y = e.preview) || void 0 === y ? void 0 : null === (_ = y.images[0].resolutions[0]) || void 0 === _ ? void 0 : _.url);
                            return {
                                type: "video",
                                source: t,
                                hlsSource: i.hls_url,
                                dashSource: i.dash_url,
                                permalink: e8,
                                width: i.width || (null === (A = e.preview) || void 0 === A ? void 0 : null === (P = A.images) || void 0 === P ? void 0 : null === (S = P[0]) || void 0 === S ? void 0 : null === (k = S.source) || void 0 === k ? void 0 : k.width) || 0,
                                height: i.height || (null === (F = e.preview) || void 0 === F ? void 0 : null === (U = F.images) || void 0 === U ? void 0 : null === (T = U[0]) || void 0 === T ? void 0 : null === (x = T.source) || void 0 === x ? void 0 : x.height) || 0,
                                duration: i.duration,
                                poster: null == r ? void 0 : r.replace(/&amp;/g, "&"),
                                bitrate: i.bitrate_kbps
                            }
                        }
                        if (null === (s = e.domain) || void 0 === s ? void 0 : s.includes("redgifs")) {
                            if ((null === (O = e.preview) || void 0 === O ? void 0 : O.reddit_video_preview) && e.hasAudio) {
                                let i = (null === (R = e.preview.images[0].resolutions[2]) || void 0 === R ? void 0 : R.url) || (null === (j = e.preview.images[0].resolutions[1]) || void 0 === j ? void 0 : j.url) || (null === (I = e.preview.images[0].resolutions[0]) || void 0 === I ? void 0 : I.url);
                                return {
                                    type: "video",
                                    source: e.preview.reddit_video_preview.fallback_url,
                                    hlsSource: e.preview.reddit_video_preview.hls_url,
                                    width: e.preview.reddit_video_preview.width,
                                    permalink: "https://www.reddit.com" + e.permalink,
                                    poster: null == i ? void 0 : i.replace(/&amp;/g, "&"),
                                    height: e.preview.reddit_video_preview.height
                                }
                            }
                            if (null === (C = e.media) || void 0 === C ? void 0 : C.oembed) {
                                let i = function(e) {
                                        try {
                                            let i = new URL(e).pathname;
                                            return i.substring(i.lastIndexOf("/") + 1).split("-")[0]
                                        } catch (e) {
                                            return console.error("Invalid URL:", e), null
                                        }
                                    }(e.media.oembed.thumbnail_url),
                                    t = {
                                        thumbnail: "https://media.redgifs.com/".concat(i, "-mobile.jpg"),
                                        "mp4-mobile": "https://media.redgifs.com/".concat(i, "-mobile.mp4")
                                    },
                                    r = (null === (D = e.preview) || void 0 === D ? void 0 : null === (B = D.images[0].resolutions[2]) || void 0 === B ? void 0 : B.url) || (null === (E = e.preview) || void 0 === E ? void 0 : null === (q = E.images[0].resolutions[1]) || void 0 === q ? void 0 : q.url) || (null === (N = e.preview) || void 0 === N ? void 0 : null === (L = N.images[0].resolutions[0]) || void 0 === L ? void 0 : L.url) || t.thumbnail;
                                return i ? {
                                    type: "video",
                                    source: t["mp4-mobile"],
                                    sources: [{
                                        src: t["mp4-mobile"],
                                        type: "video/mp4"
                                    }, {
                                        src: null === (M = e.preview) || void 0 === M ? void 0 : null === (W = M.reddit_video_preview) || void 0 === W ? void 0 : W.fallback_url,
                                        type: "video/mp4"
                                    }],
                                    permalink: e8,
                                    poster: null == r ? void 0 : r.replace(/&amp;/g, "&"),
                                    width: e.media.oembed.width,
                                    height: e.media.oembed.height
                                } : {
                                    type: "video",
                                    source: e.preview.reddit_video_preview.fallback_url,
                                    hlsSource: e.preview.reddit_video_preview.hls_url,
                                    sources: [{
                                        src: null === (V = e.preview) || void 0 === V ? void 0 : null === (Q = V.reddit_video_preview) || void 0 === Q ? void 0 : Q.fallback_url,
                                        type: "video/mp4"
                                    }],
                                    poster: null == r ? void 0 : r.replace(/&amp;/g, "&"),
                                    permalink: e8,
                                    width: e.media.oembed.width,
                                    height: e.media.oembed.height
                                }
                            }
                        }
                        if ((null === (l = e.media) || void 0 === l ? void 0 : l.oembed) && "video" === e.media.oembed.type) {
                            let i = function(e) {
                                    try {
                                        let i = new URL(e).pathname;
                                        return i.substring(i.lastIndexOf("/") + 1).split("-")[0]
                                    } catch (e) {
                                        return console.error("Invalid URL:", e), null
                                    }
                                }(e.media.oembed.thumbnail_url),
                                t = {
                                    thumbnail: "https://media.redgifs.com/".concat(i, "-mobile.jpg"),
                                    "mp4-mobile": "https://media.redgifs.com/".concat(i, "-mobile.mp4")
                                },
                                r = (null === (H = e.preview) || void 0 === H ? void 0 : null === (z = H.images[0].resolutions[2]) || void 0 === z ? void 0 : z.url) || (null === (J = e.preview) || void 0 === J ? void 0 : null === ($ = J.images[0].resolutions[1]) || void 0 === $ ? void 0 : $.url) || (null === (G = e.preview) || void 0 === G ? void 0 : null === (Z = G.images[0].resolutions[0]) || void 0 === Z ? void 0 : Z.url) || t.thumbnail;
                            return i ? {
                                type: "video",
                                source: t["mp4-mobile"],
                                sources: [{
                                    src: t["mp4-mobile"],
                                    type: "video/mp4"
                                }, {
                                    src: null === (K = e.preview) || void 0 === K ? void 0 : null === (Y = K.reddit_video_preview) || void 0 === Y ? void 0 : Y.fallback_url,
                                    type: "video/mp4"
                                }],
                                permalink: e8,
                                poster: null == r ? void 0 : r.replace(/&amp;/g, "&"),
                                width: e.media.oembed.width,
                                height: e.media.oembed.height
                            } : {
                                type: "video",
                                source: e.preview.reddit_video_preview.fallback_url,
                                hlsSource: e.preview.reddit_video_preview.hls_url,
                                sources: [{
                                    src: null === (ee = e.preview) || void 0 === ee ? void 0 : null === (X = ee.reddit_video_preview) || void 0 === X ? void 0 : X.fallback_url,
                                    type: "video/mp4"
                                }],
                                poster: null == r ? void 0 : r.replace(/&amp;/g, "&"),
                                permalink: e8,
                                width: e.media.oembed.width,
                                height: e.media.oembed.height
                            }
                        }
                        if ("image" === e.post_hint) {
                            let i = e.url;
                            if (i.endsWith("gif")) {
                                let i = null === (ep = e.preview) || void 0 === ep ? void 0 : null === (ev = ep.images) || void 0 === ev ? void 0 : ev[0],
                                    t = null == i ? void 0 : null === (ew = i.variants) || void 0 === ew ? void 0 : null === (ef = ew.mp4) || void 0 === ef ? void 0 : null === (em = ef.source) || void 0 === em ? void 0 : em.url,
                                    r = (null === (eg = e.preview.images[0].resolutions[2]) || void 0 === eg ? void 0 : eg.url) || (null === (eb = e.preview.images[0].resolutions[1]) || void 0 === eb ? void 0 : eb.url) || (null === (e_ = e.preview.images[0].resolutions[0]) || void 0 === e_ ? void 0 : e_.url);
                                return {
                                    type: "video",
                                    source: (null == t ? void 0 : t.replace(/&amp;/g, "&")) || e.url,
                                    width: (null == i ? void 0 : null === (ey = i.source) || void 0 === ey ? void 0 : ey.width) || 640,
                                    height: (null == i ? void 0 : null === (ek = i.source) || void 0 === ek ? void 0 : ek.height) || 480,
                                    permalink: e8,
                                    poster: r
                                }
                            }
                            let t = null === (eo = e.preview) || void 0 === eo ? void 0 : null === (er = eo.images) || void 0 === er ? void 0 : null === (et = er[0]) || void 0 === et ? void 0 : null === (ei = et.resolutions) || void 0 === ei ? void 0 : ei.map(e => ({
                                url: e.url.replace(/&amp;/g, "&"),
                                width: e.width,
                                height: e.height
                            }));
                            return {
                                type: "image",
                                source: i,
                                width: (null === (ea = e.preview) || void 0 === ea ? void 0 : null === (ed = ea.images) || void 0 === ed ? void 0 : null === (el = ed[0]) || void 0 === el ? void 0 : null === (es = el.source) || void 0 === es ? void 0 : es.width) || 0,
                                height: (null === (ec = e.preview) || void 0 === ec ? void 0 : null === (eh = ec.images) || void 0 === eh ? void 0 : null === (eu = eh[0]) || void 0 === eu ? void 0 : null === (en = eu.source) || void 0 === en ? void 0 : en.height) || 0,
                                permalink: e8,
                                resolutions: t
                            }
                        }
                        if ("link" === e.post_hint && e.url) {
                            let i = null === (eS = e.url) || void 0 === eS ? void 0 : eS.includes("gifv");
                            if (i || (null === (eP = e.url) || void 0 === eP ? void 0 : eP.endsWith(".mp4")) || (null === (eA = e.url) || void 0 === eA ? void 0 : eA.endsWith(".webm")) || (null === (ex = e.url) || void 0 === ex ? void 0 : ex.includes("gfycat.com")) || (null === (eT = e.preview) || void 0 === eT ? void 0 : eT.reddit_video_preview) || (null === (eU = e.media) || void 0 === eU ? void 0 : eU.reddit_video)) return {
                                type: "video",
                                source: i ? null === (ej = e.url) || void 0 === ej ? void 0 : ej.replace(".gifv", ".mp4") : (null === (eB = e.preview) || void 0 === eB ? void 0 : null === (eI = eB.reddit_video_preview) || void 0 === eI ? void 0 : eI.fallback_url) || (null === (eq = e.media) || void 0 === eq ? void 0 : null === (eD = eq.reddit_video) || void 0 === eD ? void 0 : eD.fallback_url) || e.url,
                                hlsSource: (null === (eL = e.preview) || void 0 === eL ? void 0 : null === (eE = eL.reddit_video_preview) || void 0 === eE ? void 0 : eE.hls_url) || (null === (eW = e.media) || void 0 === eW ? void 0 : null === (eN = eW.reddit_video) || void 0 === eN ? void 0 : eN.hls_url),
                                dashSource: (null === (eQ = e.preview) || void 0 === eQ ? void 0 : null === (eM = eQ.reddit_video_preview) || void 0 === eM ? void 0 : eM.dash_url) || (null === (ez = e.media) || void 0 === ez ? void 0 : null === (eV = ez.reddit_video) || void 0 === eV ? void 0 : eV.dash_url),
                                width: (null === (eZ = e.preview) || void 0 === eZ ? void 0 : null === (eJ = eZ.images) || void 0 === eJ ? void 0 : null === (e$ = eJ[0]) || void 0 === e$ ? void 0 : null === (eH = e$.source) || void 0 === eH ? void 0 : eH.width) || (null === (eY = e.media) || void 0 === eY ? void 0 : null === (eG = eY.reddit_video) || void 0 === eG ? void 0 : eG.width) || 0,
                                height: (null === (e1 = e.preview) || void 0 === e1 ? void 0 : null === (e0 = e1.images) || void 0 === e0 ? void 0 : null === (eX = e0[0]) || void 0 === eX ? void 0 : null === (eK = eX.source) || void 0 === eK ? void 0 : eK.height) || (null === (e4 = e.media) || void 0 === e4 ? void 0 : null === (e2 = e4.reddit_video) || void 0 === e2 ? void 0 : e2.height) || 0
                            };
                            if (null === (eR = e.preview) || void 0 === eR ? void 0 : null === (eC = eR.images) || void 0 === eC ? void 0 : null === (eO = eC[0]) || void 0 === eO ? void 0 : null === (eF = eO.source) || void 0 === eF ? void 0 : eF.url) return {
                                type: "image",
                                source: e.preview.images[0].source.url,
                                width: e.preview.images[0].source.width || 0,
                                height: e.preview.images[0].source.height || 0
                            }
                        }
                        return {
                            type: "unsupported",
                            source: "",
                            hlsSource: "",
                            width: 0,
                            height: 0
                        }
                    }(e);
                    if ("invalid" === f.type || "unsupported" === f.type) return null;
                    let w = {
                        type: f.type,
                        width: f.width,
                        height: f.height,
                        preview_url: f.thumbnail || "",
                        display_url: f.url || "",
                        source_url: f.source || f.url || "",
                        source: f.source || f.url || "",
                        thumbnail: f.thumbnail,
                        download_url: f.source || f.url || ""
                    };
                    return ("image" === f.type && (w.preview_url = null === (t = f.resolutions) || void 0 === t ? void 0 : null === (i = t[0]) || void 0 === i ? void 0 : i.url, w.display_url = (null === (s = f.resolutions) || void 0 === s ? void 0 : null === (o = s[3]) || void 0 === o ? void 0 : o.url) || (null === (d = f.resolutions) || void 0 === d ? void 0 : null === (l = d[2]) || void 0 === l ? void 0 : l.url), w.resolutions = null == f ? void 0 : f.resolutions), "gallery" === f.type && f.images && (w.images = f.images.map(e => {
                        var i, t, r, o;
                        return {
                            source: e.source,
                            download_url: e.source,
                            display_url: (null === (t = e.resolutions) || void 0 === t ? void 0 : null === (i = t[2]) || void 0 === i ? void 0 : i.url) || e.source,
                            preview_url: null === (o = e.resolutions) || void 0 === o ? void 0 : null === (r = o[0]) || void 0 === r ? void 0 : r.url,
                            resolutions: e.resolutions,
                            width: e.width,
                            height: e.height
                        }
                    }), w.display_url = (null === (n = f.images[0].resolutions) || void 0 === n ? void 0 : null === (a = n[2]) || void 0 === a ? void 0 : a.url) || f.images[0].source, w.thumbnail = (null === (h = f.images[0].resolutions) || void 0 === h ? void 0 : null === (u = h[1]) || void 0 === u ? void 0 : u.url) || f.images[0].source), "video" === f.type && (w.source = f.hlsSource || f.dashSource || f.source || "", w.sources = f.sources || null, w.display_url = f.hlsSource || "", w.preview_url = (null == e ? void 0 : null === (v = e.media) || void 0 === v ? void 0 : null === (c = v.oembed) || void 0 === c ? void 0 : c.thumbnail_url) || f.poster || f.thumbnail || "", w.thumbnail = null == e ? void 0 : null === (m = e.media) || void 0 === m ? void 0 : null === (p = m.oembed) || void 0 === p ? void 0 : p.thumbnail_url), "embed" === f.type && (w.embedHtml = f.embedHtml, f.processedVideo && (w.processedVideo = {
                        source: f.processedVideo.source,
                        poster: f.processedVideo.poster,
                        duration: f.processedVideo.duration
                    })), "image" !== f.type || w.source && w.display_url && w.preview_url) ? {
                        id: e.id,
                        site: "reddit.com",
                        compositeId: (0, r.Lf)("reddit.com", e.sitePostId || e.id),
                        isNsfw: e.over_18,
                        title: e.title,
                        author: e.author,
                        score: e.score,
                        created_at: new Date(1e3 * e.created_utc).toISOString() || void 0,
                        subreddit: e.subreddit,
                        source: f.permalink || "",
                        source_links: [f.permalink],
                        resolutions: null == f ? void 0 : f.resolutions,
                        processedContent: w
                    } : null
                }
                getAfterToken() {
                    return this.afterTokens[this.currentUser] || this.combinedAfterToken || ""
                }
                resetPagination() {
                    this.afterTokens = {}, this.combinedAfterToken = "", this.resetQueue()
                }
                constructor(e) {
                    var i, t, o;
                    super(e), this.afterTokens = {}, this.combinedAfterToken = "", this.currentSort = "", this.currentSubreddits = [], this.useCombinedFetch = !1, this.initiated = !0, this.api = new l({
                        useProxy: null === (t = null == e ? void 0 : e.useProxy) || void 0 === t || t,
                        proxyUrl: r.C1 + "/api/booru",
                        limit: (null === (i = e.limit) || void 0 === i ? void 0 : i.toString()) || "100",
                        redditOAuth: e.redditOAuth
                    }), this.options = e, this.currentSort = e.sort, this.currentSubreddits = [...e.subreddits], this.currentUser = e.user || "", this.useCombinedFetch = null === (o = e.useCombinedFetch) || void 0 === o || o, e.afterToken && (this.combinedAfterToken = e.afterToken)
                }
            }
        },
        187: (e, i, t) => {
            t.d(i, {
                a: () => d
            });
            var r = t(99827),
                o = t(60709);
            let s = ["vore", "gore", "scat", "loli"].sort();
            ["vore", "gore", "guro", "scat", "queen_of_spades", "dark-skinned_male", "dark_skinned_male", "dark_skin_male", "qos", "qos_tattoo", "blacked", "bbc", "fart", "bara", "absurdly_large_cock", "loli", "anthro", "furry", "equine_penis", "inflation", "amputee", "insectophilia", "insect", "hyper_belly"].sort();
            let l = {
                    "rule34.xxx": [...s],
                    "gelbooru.com": [...s],
                    "danbooru.donmai.us": [],
                    "hypnohub.net": [],
                    "xbooru.com": [],
                    "bleachbooru.org": [],
                    "safebooru.org": [],
                    "tbib.org": [],
                    "e621.net": [],
                    "e926.net": [],
                    "realbooru.com": []
                },
                d = (0, r.v)()((0, o.Zr)((e, i) => ({
                    blacklists: l,
                    isAiFilterActive: !1,
                    toggleAiFilter: () => e(e => ({
                        isAiFilterActive: !e.isAiFilterActive
                    })),
                    isActive: !0,
                    toggleBlacklist: () => e(e => ({
                        isActive: !e.isActive
                    })),
                    addToBlacklist: (i, t) => e(e => ({
                        blacklists: { ...e.blacklists,
                            [i]: [...new Set([...e.blacklists[i], t])].sort()
                        }
                    })),
                    removeFromBlacklist: (i, t) => e(e => ({
                        blacklists: { ...e.blacklists,
                            [i]: e.blacklists[i].filter(e => e !== t)
                        }
                    })),
                    updateBlacklist: (i, t) => e(e => ({
                        blacklists: { ...e.blacklists,
                            [i]: t.sort()
                        }
                    })),
                    getBlacklistedTags: e => {
                        let t = i().blacklists[e] || [];
                        return i().isAiFilterActive ? [...new Set([...t, "ai_generated", "ai_assisted"])].sort() : t
                    }
                }), {
                    name: "booru-blacklist",
                    onRehydrateStorage: () => e => {
                        (null == e ? void 0 : e.blacklists) && Object.keys(e.blacklists).forEach(i => {
                            e.blacklists[i] = [...e.blacklists[i]].sort()
                        })
                    }
                }))
        }
    }
]);