"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [693], {
        9693: (t, e, a) => {
            a.d(e, {
                f: () => T
            });
            var s = a(7688),
                r = a(29602),
                i = a(28516),
                o = a(2818);
            let n = {
                "rule34.xxx": {
                    baseUrl: "https://api.rule34.xxx",
                    endpoints: {
                        posts: "/index.php",
                        tags: "/autocomplete.php",
                        autocomplete: "/autocomplete.json"
                    }
                },
                danbooru: {
                    baseUrl: "https://danbooru.donmai.us",
                    endpoints: {
                        posts: "/posts.json",
                        autocomplete: "/autocomplete.json"
                    }
                },
                bleachbooru: {
                    baseUrl: "https://bleachbooru.org",
                    endpoints: {
                        posts: "/posts.json",
                        autocomplete: "/autocomplete.json"
                    }
                },
                gelbooru: {
                    baseUrl: "https://gelbooru.com",
                    endpoints: {
                        posts: "/index.php",
                        autocomplete: "/index.php"
                    }
                },
                realbooru: {
                    baseUrl: "https://realbooru.com",
                    endpoints: {
                        posts: "/index.php",
                        autocomplete: "/index.php"
                    }
                },
                hypnohub: {
                    baseUrl: "https://hypnohub.net",
                    endpoints: {
                        posts: "/index.php",
                        autocomplete: "/autocomplete.php"
                    }
                },
                xbooru: {
                    baseUrl: "https://xbooru.com",
                    endpoints: {
                        posts: "/index.php",
                        autocomplete: "/autocomplete.php"
                    }
                },
                safebooru: {
                    baseUrl: "https://safebooru.org",
                    endpoints: {
                        posts: "/index.php",
                        autocomplete: "/autocomplete.php"
                    }
                },
                tbib: {
                    baseUrl: "https://tbib.org",
                    endpoints: {
                        posts: "/index.php",
                        autocomplete: "/autocomplete.php"
                    }
                },
                e621: {
                    baseUrl: "https://e621.net",
                    endpoints: {
                        posts: "/posts.json",
                        autocomplete: "/tags/autocomplete.json"
                    },
                    headers: {
                        "User-Agent": "MediaViewer/1.0 (by username on e621)"
                    }
                },
                e926: {
                    baseUrl: "https://e926.net",
                    endpoints: {
                        posts: "/posts.json",
                        autocomplete: "/tags/autocomplete.json"
                    },
                    headers: {
                        "User-Agent": "MediaViewer/1.0 (by username on e926)"
                    }
                },
                "rule34.paheal.net": {
                    baseUrl: "https://rule34.paheal.net",
                    endpoints: {
                        posts: "/api/danbooru/find_posts",
                        autocomplete: "/api/internal/autocomplete"
                    }
                },
                "konachan.com": {
                    baseUrl: "https://konachan.com",
                    endpoints: {
                        posts: "/post.json",
                        autocomplete: "/tag/summary.json"
                    }
                },
                "yande.re": {
                    baseUrl: "https://yande.re",
                    endpoints: {
                        posts: "/post.json",
                        autocomplete: "/tag/summary.json"
                    }
                }
            };
            class l {
                async fetchApi(t, e) {
                    let a, s;
                    if ("tags" !== t || this.useProxyForAutocomplete) {
                        if (this.useProxy) {
                            let s = new URLSearchParams(e);
                            s.append("site", this.site), s.append("endpoint", t), a = "".concat(r.C1, "/api/booru?").concat(s.toString())
                        } else {
                            let s = n[this.site].baseUrl,
                                r = n[this.site].endpoints[t];
                            a = "".concat(s).concat(r, "?").concat(e.toString())
                        }
                    } else {
                        let s = n[this.site].baseUrl,
                            r = n[this.site].endpoints[t];
                        a = "".concat(s).concat(r, "?").concat(e.toString())
                    }
                    try {
                        if ("gelbooru" === this.site && o.env.GELBOORU_KEYS) {
                            let t = JSON.parse(o.env.GELBOORU_KEYS);
                            if (t && t.length > 0) {
                                let e = t.length > 1 ? t[Math.floor(Math.random() * t.length)] : t[0];
                                a += e
                            }
                        }
                        if ("rule34.xxx" === this.site && o.env.RULE34XXX_KEYS) {
                            let t = JSON.parse(o.env.RULE34XXX_KEYS);
                            if (t && t.length > 0) {
                                let e = t.length > 1 ? t[Math.floor(Math.random() * t.length)] : t[0];
                                a += e
                            }
                        }
                        if (!(s = await fetch(a, {
                                headers: this.useProxy ? {} : this.headers
                            })).ok) throw Error("Failed to fetch from ".concat(this.site))
                    } catch (t) {
                        throw console.error(t), Error("Failed to fetch from ".concat(this.site))
                    }
                    return this.handleResponse(s)
                }
                async handleResponse(t) {
                    let e = t.headers.get("Content-Type");
                    if (null == e ? void 0 : e.includes("application/json")) return t.json();
                    if ((null == e ? void 0 : e.includes("text/xml")) || (null == e ? void 0 : e.includes("application/xml"))) {
                        let e = function(t) {
                            let e = {
                                "&agrave;": "&#224;",
                                "&egrave;": "&#232;",
                                "&igrave;": "&#236;",
                                "&ograve;": "&#242;",
                                "&ugrave;": "&#249;",
                                "&mdash;": "&#8212;",
                                "&ndash;": "&#8211;",
                                "&hellip;": "&#8230;"
                            };
                            return t.replace(/&(?:agrave|egrave|igrave|ograve|ugrave|mdash|ndash|hellip);/g, t => e[t] || t)
                        }(await t.text());
                        return this.parser.parse(e)
                    }
                    try {
                        return await t.json()
                    } catch (t) {
                        throw Error("Unsupported Content-Type or invalid JSON: ".concat(e))
                    }
                }
                xmlToJson(t) {
                    let e = t => {
                        let a = {};
                        if (t.attributes.length > 0) {
                            a["@attributes"] = {};
                            for (let e = 0; e < t.attributes.length; e++) {
                                let s = t.attributes[e];
                                a["@attributes"][s.name] = s.value
                            }
                        }
                        for (let r = 0; r < t.childNodes.length; r++) {
                            var s;
                            let i = t.childNodes[r];
                            if (i.nodeType === Node.ELEMENT_NODE) {
                                let t = i.nodeName,
                                    s = e(i);
                                a[t] ? Array.isArray(a[t]) ? a[t].push(s) : a[t] = [a[t], s] : a[t] = s
                            } else i.nodeType === Node.TEXT_NODE && (null === (s = i.textContent) || void 0 === s ? void 0 : s.trim()) && (a["#text"] = i.textContent.trim())
                        }
                        return a
                    };
                    return e(t.documentElement)
                }
                constructor(t, e, a = {}) {
                    var s, r, o;
                    this.parser = new i.A({
                        ignoreAttributes: !1,
                        attributeNamePrefix: "@_",
                        textNodeName: "#text",
                        isArray: (t, e, a, s) => "tag" === t || "post" === t
                    }), this.site = t, this.baseUrl = e, this.useProxy = null !== (s = a.useProxy) && void 0 !== s && s, this.useProxyForAutocomplete = null !== (r = a.useProxyForAutocomplete) && void 0 !== r ? r : this.useProxy, this.headers = null !== (o = a.headers) && void 0 !== o ? o : {}
                }
            }
            let c = ["https://aws-mp4.rule34.xxx/", "https://api-cdn-mp4.rule34.xxx/", "https://ws-cdn-video.rule34.xxx/", "https://ahri2mp4.rule34.xxx/", "https://webm.rule34.xxx/", "https://api-cdn-us-mp4.rule34.xxx/", "https://uswebm.rule34.xxx/"];
            class u extends l {
                async measureVideoLoadTime(t) {
                    return new Promise((e, a) => {
                        let s = document.createElement("video");
                        s.preload = "auto", s.muted = !0, s.style.display = "none";
                        let r = performance.now(),
                            i = !1,
                            o = () => {
                                i || (i = !0, s.src = "", s.load(), s.remove())
                            },
                            n = setTimeout(() => {
                                o(), a(Error("Timeout"))
                            }, 6e4);
                        s.addEventListener("canplaythrough", () => {
                            if (!i && s.buffered.length > 0 && s.buffered.end(0) >= .95 * s.duration) {
                                clearTimeout(n);
                                let t = performance.now() - r;
                                o(), e(t)
                            }
                        }), s.addEventListener("error", () => {
                            clearTimeout(n), o(), a(Error("Video error"))
                        }), s.src = t, document.body.appendChild(s), s.load()
                    })
                }
                async initCdnSpeedTest() {
                    let t = "r34cdnSpeedTest",
                        e = localStorage.getItem(t);
                    if (e) try {
                        let t = JSON.parse(e);
                        if (Date.now() - t.timestamp < 216e5) {
                            this.sortedCdns = t.cdns, this.verbose && console.log("Using cached CDN order:", this.sortedCdns);
                            return
                        }
                    } catch (t) {}
                    let a = c.map(async t => {
                            let e = "".concat(t).concat("/images/1528/5f9b9788785f25ce203564d5da21af7b.mp4?16328453");
                            try {
                                let a = await this.measureVideoLoadTime(e);
                                return {
                                    cdn: t,
                                    time: a
                                }
                            } catch (e) {
                                return this.verbose && console.warn("CDN ".concat(t, " failed:"), e), {
                                    cdn: t,
                                    time: null
                                }
                            }
                        }),
                        s = await Promise.all(a);
                    s.sort((t, e) => null === t.time ? 1 : null === e.time ? -1 : t.time - e.time), this.sortedCdns = s.map(t => t.cdn), localStorage.setItem(t, JSON.stringify({
                        timestamp: Date.now(),
                        cdns: this.sortedCdns
                    })), this.verbose && (console.log("CDN speed test complete:"), s.forEach(t => {
                        let e = new URL(t.cdn).hostname,
                            a = null !== t.time ? "".concat(t.time.toFixed(0), "ms") : "FAILED";
                        console.log("  ".concat(e, ": ").concat(a))
                    }))
                }
                buildApiParams(t) {
                    var e, a;
                    let s = this.buildTagsString(t);
                    return new URLSearchParams({
                        page: "dapi",
                        s: "post",
                        q: "index",
                        limit: (null !== (e = t.limit) && void 0 !== e ? e : this.postLimit).toString(),
                        pid: (null !== (a = t.page) && void 0 !== a ? a : 0).toString(),
                        tags: s,
                        json: "1",
                        fields: "tag_info"
                    })
                }
                buildTagsString(t) {
                    var e;
                    return [(null === (e = t.tags) || void 0 === e ? void 0 : e.map(r.nx).join(" ")) || "", t.score ? "score:".concat(t.score) : "", t.sort && "date:desc" !== t.sort ? "sort:".concat(t.sort) : ""].filter(Boolean).join(" ").trim()
                }
                validatePostsResponse(t) {
                    if (Array.isArray(t)) return t;
                    if (t && "object" == typeof t && "success" in t && "false" === t.success) throw Error("API Error getting posts: ".concat(t.reason || "Unknown error"));
                    if (!t || "object" == typeof t && 0 === Object.keys(t).length) return this.verbose && console.log("Received empty non-array response for posts, assuming 0 posts."), [];
                    throw console.error("Expected an array of posts, received:", t), Error("Expected an array of posts, but received a different type.")
                }
                async getTags(t) {
                    var e;
                    let a = new URLSearchParams({
                        q: (null === (e = t.name) || void 0 === e ? void 0 : e.replaceAll(" ", "_")) || ""
                    });
                    try {
                        let e = await this.fetchApi("tags", a);
                        if (!Array.isArray(e)) throw console.error("Unexpected response format from tag autocomplete:", e), Error("Invalid tag suggestions received");
                        let s = e.map(t => {
                            var e;
                            return {
                                name: t.value,
                                label: t.value,
                                value: t.value,
                                count: Number(null === (e = t.label) || void 0 === e ? void 0 : e.substring(t.label.lastIndexOf("(") + 1, t.label.length - 1)) || 0,
                                types: null
                            }
                        });
                        if (this.useFirebase && t.supertags && t.name) try {
                            t.name.replaceAll("*", "").toLowerCase()
                        } catch (t) {
                            console.warn("Failed to fetch or process supertags from Firebase:", t)
                        }
                        return s.slice(0, this.tagLimit)
                    } catch (e) {
                        return console.error('Failed to get tags for "'.concat(t.name, '":'), e), []
                    }
                }
                createTagCacheKey(t) {
                    return t && 0 !== t.length ? [...t].map(t => t.toLowerCase()).sort().join("_||_") : "__EMPTY_TAGS__"
                }
                async getNumberOfPostsInQuery() {
                    var t, e, a;
                    let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        r = this.createTagCacheKey(s);
                    if (this.postCountCache.has(r)) return this.verbose && console.log('[Cache Hit] Post count for tags "'.concat(s.join(" "), '" -> ').concat(this.postCountCache.get(r))), null !== (t = this.postCountCache.get(r)) && void 0 !== t ? t : 0;
                    this.verbose && console.log('[Cache Miss] Fetching post count for tags "'.concat(s.join(" "), '"'));
                    let i = new URLSearchParams({
                        page: "dapi",
                        s: "post",
                        q: "index",
                        limit: "0",
                        tags: s.join(" ")
                    });
                    try {
                        let t = await this.fetchApi("posts", i),
                            o = 0;
                        if ((null == t ? void 0 : null === (e = t.posts) || void 0 === e ? void 0 : e["@_count"]) !== void 0) o = parseInt(t.posts["@_count"], 10);
                        else if ((null == t ? void 0 : null === (a = t.response) || void 0 === a ? void 0 : a["@_success"]) === "false") {
                            let e = t.response["@_reason"] || "Unknown API error in count query.";
                            console.error("API error getting post count: ".concat(e)), o = 0
                        } else this.verbose && console.warn("Count attribute not found in response, assuming 0 posts.", t), o = 0;
                        return this.postCountCache.set(r, o), this.verbose && console.log('[Cache Set] Post count for tags "'.concat(s.join(" "), '" = ').concat(o)), o
                    } catch (t) {
                        return console.error('Error fetching post count for tags "'.concat(s.join(" "), '":'), t), 0
                    }
                }
                async getPosts(t) {
                    let e = this.buildApiParams(t);
                    try {
                        let t = await this.fetchApi("posts", e),
                            a = this.validatePostsResponse(t).map(t => this.transformPost(t));
                        return {
                            count: a.length,
                            posts: a
                        }
                    } catch (t) {
                        return console.error("Failed to get posts:", t), {
                            count: 0,
                            posts: []
                        }
                    }
                }
                async fetchPostById(t) {
                    let e = new URLSearchParams({
                        page: "dapi",
                        s: "post",
                        q: "index",
                        limit: "1",
                        tags: "id:".concat(t),
                        json: "1",
                        fields: "tag_info"
                    });
                    try {
                        let a = await this.fetchApi("posts", e);
                        if (!Array.isArray(a)) {
                            if (a && "object" == typeof a && "success" in a && "false" === a.success) return console.warn("API Error fetching post ".concat(t, ": ").concat(a.reason || "Unknown error")), null;
                            if (null == a || 0 === Object.keys(a).length) return this.verbose && console.log("Post with ID ".concat(t, " not found.")), null;
                            throw Error("Expected an array response when fetching post by ID.")
                        }
                        if (0 === a.length) return this.verbose && console.log("Post with ID ".concat(t, " not found.")), null;
                        return this.transformPost(a[0])
                    } catch (e) {
                        return console.error("Failed to fetch post by ID ".concat(t, ":"), e), null
                    }
                }
                transformPost(t) {
                    var e, a, s, r, i, o, n, l, h, p, d, g, m, f, v, y, w, _;
                    let b;
                    let P = t.file_url,
                        x = null === (a = t.file_url) || void 0 === a ? void 0 : null === (e = a.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase(),
                        S = t.tags ? t.tags.trim().split(" ").filter((t, e, a) => "" !== t && a.indexOf(t) === e) : [],
                        T = t.change ? 1e3 * t.change : Date.now(),
                        C = [];
                    if (("image" == (b = "mp4" === x || "webm" === x ? "video" : "gif" === x ? "gif" : "image") || "gif" === b) && ((null == t ? void 0 : t.sample) ? t.sample_url = t.sample_url : t.sample_url = P), P) {
                        let e;
                        switch (x) {
                            case "mp4":
                                e = "video/mp4";
                                break;
                            case "webm":
                                e = "video/webm";
                                break;
                            case "gif":
                                e = "image/gif";
                                break;
                            case "jpg":
                            case "jpeg":
                                e = "image/jpeg";
                                break;
                            case "png":
                                e = "image/png";
                                break;
                            default:
                                e = "application/octet-stream"
                        }
                        if ("video" === b && t.file_url && this.sortedCdns.length > 0) {
                            let e = "api-cdn-mp4.rule34.xxx";
                            t.file_url.includes(e) && (P = t.file_url.replace("https://".concat(e), this.sortedCdns[0]) + "?".concat(t.id))
                        }
                        C.push({
                            src: P,
                            type: e
                        })
                    }
                    "video" === b && t.file_url && (t.preview_url = t.sample_url, (e => {
                        let a = "api-cdn-mp4.rule34.xxx",
                            s = this.sortedCdns.length > 0 ? this.sortedCdns : c;
                        return (null == e ? void 0 : e.includes(a)) ? s.filter(t => !e.includes(t)).map(s => e.replace("https://".concat(a), s) + "?".concat(t.id)) : []
                    })(t.file_url).forEach(t => {
                        t !== P && (t.includes(".webm") ? C.push({
                            src: t,
                            type: "video/webm"
                        }) : t.includes(".mp4") && C.push({
                            src: t,
                            type: "video/mp4"
                        }))
                    }));
                    let A = new Map;
                    C.forEach(t => {
                        t.src && A.set(t.src + t.type, t)
                    });
                    let U = Array.from(A.values());
                    return {
                        id: t.id,
                        created_at: new Date(T).toISOString(),
                        site: "rule34.xxx",
                        score: null !== (s = t.score) && void 0 !== s ? s : 0,
                        width: null !== (r = t.width) && void 0 !== r ? r : 0,
                        height: null !== (i = t.height) && void 0 !== i ? i : 0,
                        md5: null !== (o = t.hash) && void 0 !== o ? o : "",
                        rating: null !== (n = t.rating) && void 0 !== n ? n : "s",
                        source: null !== (l = t.file_url) && void 0 !== l ? l : "",
                        source_links: t.source.split(/\s+/) || [],
                        tags: S,
                        categorizedTags: u.normalizeTagsByCategory(t.tag_info),
                        file_url: null != P ? P : "",
                        sources: U,
                        preview_url: null !== (h = t.preview_url) && void 0 !== h ? h : "",
                        sample_url: null !== (d = null !== (p = t.sample_url) && void 0 !== p ? p : t.file_url) && void 0 !== d ? d : "",
                        download_url: t.file_url,
                        type: b,
                        has_notes: null !== (g = t.has_notes) && void 0 !== g && g,
                        has_comments: (null !== (m = t.comment_count) && void 0 !== m ? m : 0) > 0,
                        status: null !== (f = t.status) && void 0 !== f ? f : "active",
                        parent_id: 0 === t.parent_id ? null : t.parent_id,
                        has_children: 0 !== t.parent_id && null != t.parent_id,
                        creator_id: null !== (v = t.owner) && void 0 !== v ? v : "",
                        change: null !== (y = t.change) && void 0 !== y ? y : 0,
                        preview_width: t.width,
                        preview_height: t.height,
                        sample_width: null !== (w = t.sample_width) && void 0 !== w ? w : 0,
                        sample_height: null !== (_ = t.sample_height) && void 0 !== _ ? _ : 0
                    }
                }
                static normalizeTagsByCategory(t) {
                    let e = {
                        general: [],
                        artist: [],
                        copyright: [],
                        character: [],
                        metadata: []
                    };
                    if (!t || !Array.isArray(t)) return e;
                    let a = {
                        general: "general",
                        artist: "artist",
                        copyright: "copyright",
                        character: "character",
                        metadata: "metadata"
                    };
                    return t.forEach(t => {
                        let {
                            tag: s,
                            type: r
                        } = t, i = a[null == r ? void 0 : r.toLowerCase()] || "general";
                        e[i] ? e[i].push(s) : e.general.push(s)
                    }), e
                }
                constructor(t = {}) {
                    super("rule34.xxx", "https://api.rule34.xxx", { ...t
                    }), this.postCountCache = new Map, this.sortedCdns = [], this.postLimit = t.postLimit || 20, this.tagLimit = t.tagLimit || 20, this.useFirebase = t.useFirebase || !1, this.verbose = t.verbose || !1, this.initCdnSpeedTest()
                }
            }
            class h extends l {
                async getNumberOfPostsInQuery() {
                    return arguments.length > 0 && void 0 !== arguments[0] && arguments[0], this.numberOfPostsPerQuery
                }
                transformPost(t) {
                    var e, a;
                    let s = this.getMediaType(t.file_url),
                        i = t.file_url,
                        o = t.sample_url || t.file_url;
                    return i = (0, r.l)(t.file_url), ("video" === s || "gif" == s) && (o = (0, r.l)(t.sample_url)), {
                        id: t.id,
                        created_at: t.created_at,
                        score: t.score,
                        site: "gelbooru.com",
                        width: t.width,
                        height: t.height,
                        sample_width: null !== (e = t.sample_width) && void 0 !== e ? e : 0,
                        sample_height: null !== (a = t.sample_height) && void 0 !== a ? a : 0,
                        tags: t.tags.split(" "),
                        categorizedTags: {
                            general: t.tags.split(" ")
                        },
                        rating: t.rating,
                        type: s,
                        file_url: i,
                        preview_url: t.preview_url,
                        sample_url: o,
                        source: i,
                        source_links: t.source.split(/\s+/) || [],
                        download_url: t.file_url
                    }
                }
                async getPosts(t) {
                    let {
                        tags: e = [],
                        page: a = 0,
                        limit: s = 20
                    } = t, i = e.map(r.nx).join(" ").replaceAll("( ", "{").replaceAll(" ) ", "} "), o = new URLSearchParams({
                        page: "dapi",
                        s: "post",
                        q: "index",
                        json: "1",
                        limit: s.toString(),
                        pid: a.toString(),
                        tags: i
                    }), n = await this.fetchApi("posts", o), l = n["@attributes"].limit;
                    this.numberOfPostsPerQuery = n["@attributes"].count;
                    let c = (n.post || []).map(t => this.transformPost(t)),
                        u = c.length === l;
                    return {
                        posts: c,
                        hasMore: u
                    }
                }
                async fetchPostById(t) {
                    let e = new URLSearchParams({
                            page: "dapi",
                            s: "post",
                            q: "index",
                            json: "1",
                            fields: "tag_info",
                            limit: 1,
                            tags: "id:".concat(t)
                        }),
                        a = await this.fetchApi("posts", e);
                    return this.transformPost(a.post[0])
                }
                async getTags(t) {
                    var e;
                    let {
                        name: a
                    } = t, s = new URLSearchParams({
                        page: "dapi",
                        s: "tag",
                        q: "index",
                        json: "1",
                        name_pattern: "".concat(a, "%")
                    });
                    return (null === (e = (await this.fetchApi("autocomplete", s)).tag) || void 0 === e ? void 0 : e.map(t => ({
                        value: t.name,
                        label: t.name,
                        count: t.count,
                        type: t.type
                    }))) || []
                }
                getMediaType(t) {
                    var e;
                    let a = null === (e = t.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase();
                    return "mp4" === a || "webm" === a ? "video" : "gif" === a ? "gif" : "image"
                }
                constructor(t = {}) {
                    super("gelbooru", "https://gelbooru.com", {
                        useProxy: t.useProxy,
                        ...t
                    }), this.numberOfPostsPerQuery = null
                }
            }
            class p extends l {
                transformPost(t) {
                    var e;
                    return {
                        id: t.id,
                        created_at: new Date(1e3 * t.change).toISOString(),
                        score: t.score,
                        width: t.width,
                        height: t.height,
                        tags: t.tags.split(" ").map(t => t.replace(/&#039;/g, "'")),
                        categorizedTags: {
                            general: t.tags.split(" ")
                        },
                        site: "hypnohub.net",
                        rating: t.rating,
                        type: this.getMediaType(t.file_url),
                        file_url: t.file_url,
                        preview_url: t.preview_url,
                        sample_url: t.sample_url,
                        sample_width: t.sample_width,
                        sample_height: t.sample_height,
                        source: t.source || "",
                        source_links: (null === (e = t.source) || void 0 === e ? void 0 : e.split(/\s+/)) || [],
                        download_url: t.file_url
                    }
                }
                async fetchPostById(t) {
                    let e = new URLSearchParams({
                            page: "dapi",
                            s: "post",
                            q: "index",
                            json: "1",
                            fields: "tag_info",
                            limit: 1,
                            tags: "id:".concat(t)
                        }),
                        a = await this.fetchApi("posts", e);
                    return this.transformPost(a[0])
                }
                async getPosts(t) {
                    let {
                        tags: e = [],
                        page: a = 0,
                        limit: s = 20
                    } = t, r = new URLSearchParams({
                        page: "dapi",
                        s: "post",
                        q: "index",
                        json: "1",
                        limit: s.toString(),
                        pid: a.toString(),
                        tags: e.join(" ")
                    });
                    return {
                        posts: (await this.fetchApi("posts", r)).filter(t => t.width).map(t => this.transformPost(t))
                    }
                }
                async getTags(t) {
                    let {
                        name: e
                    } = t, a = new URLSearchParams({
                        q: e
                    });
                    return (await this.fetchApi("autocomplete", a)).map(t => {
                        var e;
                        return {
                            value: t.value,
                            label: t.label.split(" ")[0],
                            count: parseInt((null === (e = t.label.match(/\((\d+)\)/)) || void 0 === e ? void 0 : e[1]) || "0"),
                            type: t.type
                        }
                    })
                }
                getMediaType(t) {
                    var e;
                    let a = null === (e = t.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase();
                    return "mp4" === a || "webm" === a ? "video" : "gif" === a ? "gif" : "image"
                }
                constructor(t = {}) {
                    super("hypnohub", "https://hypnohub.net", {
                        useProxy: t.useProxy,
                        ...t
                    })
                }
            }
            class d extends l {
                normalizeTagsByCategory(t) {
                    let e = {
                        general: [],
                        character: [],
                        copyright: [],
                        artist: [],
                        metadata: []
                    };
                    return t.forEach(t => {
                        let {
                            tag: a,
                            type: s
                        } = t;
                        e[({
                            null: "general",
                            tag: "general",
                            character: "character",
                            artist: "artist",
                            metadata: "metadata",
                            copyright: "copyright"
                        })[s]].push(a)
                    }), e
                }
                addExtraSlash(t) {
                    return t.replace("xbooru.com/", "xbooru.com//")
                }
                transformPost(t) {
                    return {
                        id: t.id,
                        created_at: new Date(1e3 * t.change).toISOString(),
                        site: "xbooru.com",
                        score: t.score,
                        width: t.width,
                        height: t.height,
                        tags: t.tags.split(" "),
                        categorizedTags: this.normalizeTagsByCategory(t.tag_info),
                        rating: t.rating,
                        type: this.getMediaType(t.file_url),
                        file_url: t.file_url,
                        preview_url: t.preview_url + "?".concat(t.id),
                        sample_url: t.sample_url,
                        sample_width: t.sample_width,
                        sample_height: t.sample_height,
                        source: this.addExtraSlash(t.file_url) + "?".concat(t.id),
                        source_links: t.source.split(/\s+/) || [],
                        download_url: t.file_url
                    }
                }
                async getPosts(t) {
                    let {
                        tags: e = [],
                        page: a = 0,
                        limit: s = 20
                    } = t, r = new URLSearchParams({
                        page: "dapi",
                        s: "post",
                        q: "index",
                        json: "1",
                        fields: "tag_info",
                        limit: s.toString(),
                        pid: a.toString(),
                        tags: e.join(" ")
                    }), i = await this.fetchApi("posts", r), o = i.length === s;
                    return {
                        posts: i.filter(t => null !== t.directory).map(t => this.transformPost(t)),
                        hasMore: o
                    }
                }
                async fetchPostById(t) {
                    let e = new URLSearchParams({
                            page: "dapi",
                            s: "post",
                            q: "index",
                            json: "1",
                            fields: "tag_info",
                            limit: 1,
                            tags: "id:".concat(t)
                        }),
                        a = await this.fetchApi("posts", e);
                    return this.transformPost(a[0])
                }
                async getTags(t) {
                    let {
                        name: e
                    } = t, a = new URLSearchParams({
                        q: e
                    });
                    return (await this.fetchApi("autocomplete", a)).map(t => {
                        let e = t.label.match(/\((\d+)\)\s*$/),
                            a = e ? parseInt(e[1], 10) : 0;
                        return {
                            value: t.value,
                            label: t.value,
                            count: a,
                            type: "tag"
                        }
                    })
                }
                getMediaType(t) {
                    var e;
                    let a = null === (e = t.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase();
                    return "mp4" === a || "webm" === a ? "video" : "gif" === a ? "gif" : "image"
                }
                constructor(t = {}) {
                    super("xbooru", "https://xbooru.com", {
                        useProxy: !0,
                        ...t
                    })
                }
            }
            class g extends l {
                normalizeTagsByCategory(t) {
                    let e = {
                        general: [],
                        character: [],
                        copyright: [],
                        artist: [],
                        metadata: []
                    };
                    return t.forEach(t => {
                        let {
                            tag: a,
                            type: s
                        } = t;
                        e[({
                            null: "general",
                            tag: "general",
                            character: "character",
                            artist: "artist",
                            metadata: "metadata",
                            copyright: "copyright"
                        })[s]].push(a)
                    }), e
                }
                addExtraSlash(t) {
                    return t.replace("safebooru.org/", "safebooru.org//")
                }
                transformPost(t) {
                    return {
                        id: t.id,
                        created_at: t.change ? new Date(1e3 * t.change).toISOString() : void 0,
                        site: "safebooru.org",
                        score: t.score || 0,
                        width: t.width,
                        height: t.height,
                        tags: t.tags.split(" "),
                        categorizedTags: this.normalizeTagsByCategory(t.tag_info),
                        rating: t.rating,
                        type: this.getMediaType(t.file_url),
                        file_url: this.addExtraSlash(t.file_url),
                        preview_url: this.addExtraSlash(t.preview_url) + "?".concat(t.id),
                        sample_url: this.addExtraSlash(t.sample_url) + "?".concat(t.id),
                        sample_width: t.sample_width,
                        sample_height: t.sample_height,
                        source: t.source,
                        source_links: t.source.split(/\s+/) || [],
                        download_url: t.file_url
                    }
                }
                async getPosts(t) {
                    let {
                        tags: e = [],
                        page: a = 0,
                        limit: s = 20
                    } = t, i = new URLSearchParams({
                        page: "dapi",
                        s: "post",
                        q: "index",
                        json: "1",
                        fields: "tag_info",
                        limit: s.toString(),
                        pid: a.toString(),
                        tags: e.map(r.nx).join(" ")
                    }), o = await this.fetchApi("posts", i), n = o.length === s;
                    return {
                        posts: o.filter(t => !!t.file_url && !!t.directory).map(t => this.transformPost(t)),
                        hasMore: n
                    }
                }
                async fetchPostById(t) {
                    let e = new URLSearchParams({
                            page: "dapi",
                            s: "post",
                            q: "index",
                            json: "1",
                            fields: "tag_info",
                            limit: 1,
                            tags: "id:".concat(t)
                        }),
                        a = await this.fetchApi("posts", e);
                    return this.transformPost(a[0])
                }
                async getTags(t) {
                    let {
                        name: e
                    } = t, a = new URLSearchParams({
                        q: e
                    });
                    return (await this.fetchApi("autocomplete", a)).map(t => {
                        let e = t.label.match(/\((\d+)\)\s*$/),
                            a = e ? parseInt(e[1], 10) : 0;
                        return {
                            value: t.value,
                            label: t.value,
                            count: a,
                            type: "tag"
                        }
                    })
                }
                getMediaType(t) {
                    var e;
                    let a = null === (e = t.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase();
                    return "mp4" === a || "webm" === a ? "video" : "gif" === a ? "gif" : "image"
                }
                constructor(t = {}) {
                    super("safebooru", "https://safebooru.org", {
                        useProxy: !0,
                        ...t
                    })
                }
            }
            var m = a(34362);
            class f extends l {
                normalizeTagsByCategory(t) {
                    return {
                        general: t.general,
                        character: t.character,
                        copyright: t.copyright,
                        artist: t.artist,
                        metadata: t.meta,
                        species: t.species
                    }
                }
                transformPost(t) {
                    var e, a, s;
                    let r = [...t.tags.general, ...t.tags.artist, ...t.tags.copyright, ...t.tags.character, ...t.tags.species, ...t.tags.meta, ...t.tags.lore];
                    return {
                        id: t.id,
                        created_at: t.created_at,
                        site: "".concat(this.currentDomain, ".net"),
                        score: t.score.total,
                        width: t.file.width,
                        height: t.file.height,
                        tags: r,
                        rating: t.rating,
                        type: this.getMediaType(t.file.ext),
                        file_url: t.file.url,
                        preview_url: t.preview.url,
                        sample_url: (null === (e = t.sample) || void 0 === e ? void 0 : e.url) || t.file.url,
                        sample_width: (null === (a = t.sample) || void 0 === a ? void 0 : a.width) || 0,
                        sample_height: (null === (s = t.sample) || void 0 === s ? void 0 : s.height) || 0,
                        download_url: t.file.url,
                        source: t.file.url,
                        source_links: t.sources || [],
                        categorizedTags: this.normalizeTagsByCategory(t.tags)
                    }
                }
                async getPosts(t) {
                    let {
                        tags: e = [],
                        page: a = 0,
                        limit: s = 20
                    } = t, r = new URLSearchParams({
                        limit: s.toString(),
                        page: a.toString(),
                        tags: (0, m.Zy)(e.join(" "))
                    }), {
                        posts: i
                    } = await this.fetchApi("posts", r);
                    return {
                        posts: i.filter(t => {
                            var e, a;
                            return null !== (e = t.file) && void 0 !== e && !!e.url && null !== (a = t.preview) && void 0 !== a && !!a.url
                        }).map(t => this.transformPost(t)),
                        hasMore: i.length === s
                    }
                }
                async fetchPostById(t) {
                    let e = new URLSearchParams({
                            limit: "1",
                            tags: "id:".concat(t)
                        }),
                        {
                            posts: a
                        } = await this.fetchApi("posts", e);
                    return this.transformPost(a[0])
                }
                async getNumberOfPostsInQuery() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    try {
                        let e = this.baseUrl + "/index.php?page=dapi&s=post&q=index",
                            a = "".concat(e, "&limit=0&tags=").concat(t.join("+")),
                            s = await fetch(a);
                        if (!s.ok) throw Error("HTTP error! Status: ".concat(s.status));
                        let r = await s.text(),
                            i = new DOMParser().parseFromString(r, "text/xml").querySelector("posts");
                        if (!i) throw Error("No <posts> element found in the XML response.");
                        let o = i.getAttribute("count");
                        if (!o) throw Error("No count attribute found in the <posts> element.");
                        return parseInt(o, 10)
                    } catch (t) {
                        throw console.error("Error fetching or parsing XML:", t), t
                    }
                }
                async getTags(t) {
                    let {
                        name: e
                    } = t, a = new URLSearchParams({
                        "search[name_matches]": e,
                        expiry: "7"
                    });
                    return (await this.fetchApi("autocomplete", a)).map(t => ({
                        value: t.name,
                        label: "".concat(t.name),
                        count: t.post_count,
                        type: t.category.toString()
                    }))
                }
                getMediaType(t) {
                    return "mp4" === t || "webm" === t ? "video" : "gif" === t ? "gif" : "image"
                }
                constructor(t = !0) {
                    let e = t ? "e926" : "e621";
                    super(e, t ? "https://e926.net" : "https://e621.net", {
                        useProxy: !1
                    }), this.currentDomain = e
                }
            }
            class v extends l {
                transformPost(t) {
                    var e, a, s, r, i, o, n, l, c, u, h, p, d, g, m, f, v, y;
                    return {
                        id: t["@_id"] || (null === (e = t["@attributes"]) || void 0 === e ? void 0 : e.id),
                        site: "rule34.paheal.net",
                        created_at: t["@_date"] || (null === (a = t["@attributes"]) || void 0 === a ? void 0 : a.date),
                        score: parseInt(t["@_score"] || (null === (s = t["@attributes"]) || void 0 === s ? void 0 : s.score) || "0", 10),
                        width: parseInt(t["@_width"] || (null === (r = t["@attributes"]) || void 0 === r ? void 0 : r.width) || "0", 10),
                        height: parseInt(t["@_height"] || (null === (i = t["@attributes"]) || void 0 === i ? void 0 : i.height) || "0", 10),
                        categorizedTags: {
                            general: (t["@_tags"] || (null === (o = t["@attributes"]) || void 0 === o ? void 0 : o.tags) || "").split(" ")
                        },
                        tags: (t["@_tags"] || (null === (n = t["@attributes"]) || void 0 === n ? void 0 : n.tags) || "").split(" "),
                        rating: t["@_rating"] || (null === (l = t["@attributes"]) || void 0 === l ? void 0 : l.rating),
                        type: this.getMediaType(t["@_file_name"] || (null === (c = t["@attributes"]) || void 0 === c ? void 0 : c.file_name)),
                        file_url: t["@_file_url"] || (null === (u = t["@attributes"]) || void 0 === u ? void 0 : u.file_url),
                        preview_url: (null === (h = t["@_preview_url"] || (null === (p = t["@attributes"]) || void 0 === p ? void 0 : p.preview_url)) || void 0 === h ? void 0 : h.startsWith("/")) ? "https://rule34.paheal.net" + (t["@_preview_url"] || (null === (d = t["@attributes"]) || void 0 === d ? void 0 : d.preview_url)) : t["@_preview_url"] || (null === (g = t["@attributes"]) || void 0 === g ? void 0 : g.preview_url),
                        sample_url: t["@_file_url"] || (null === (m = t["@attributes"]) || void 0 === m ? void 0 : m.file_url),
                        source: t["@_file_url"] || (null === (f = t["@attributes"]) || void 0 === f ? void 0 : f.file_url),
                        source_links: (t["@_source"] || (null === (v = t["@source"]) || void 0 === v ? void 0 : v.source) || "").split(/\s+/) || [],
                        download_url: t["@_file_url"] || (null === (y = t["@attributes"]) || void 0 === y ? void 0 : y.file_url)
                    }
                }
                async getPosts(t) {
                    var e;
                    let {
                        tags: a = [],
                        page: s = 0,
                        limit: r = 20
                    } = t, i = new URLSearchParams({
                        tags: a.length > 0 ? a.join(" ") : "score:>0",
                        limit: r.toString(),
                        page: s.toString(),
                        offset: (100 * s).toString()
                    }), o = await this.fetchApi("posts", i), n = Array.isArray(null == o ? void 0 : null === (e = o.posts) || void 0 === e ? void 0 : e.tag) ? o.posts.tag.map(t => this.transformPost(t)) : [], l = 100 === n.length;
                    return {
                        posts: n,
                        hasMore: l
                    }
                }
                async fetchPostById(t) {
                    let e = new URLSearchParams({
                            tags: "id:".concat(t),
                            limit: "1"
                        }),
                        a = await this.fetchApi("posts", e);
                    return this.transformPost(a.posts.tag[0])
                }
                async getTags(t) {
                    let {
                        name: e
                    } = t, a = new URLSearchParams({
                        s: e
                    });
                    return Object.entries(await this.fetchApi("autocomplete", a)).map(t => {
                        let [e, a] = t;
                        return {
                            value: e,
                            label: e,
                            count: a.count,
                            type: a.newtag || "tag"
                        }
                    })
                }
                getMediaType(t) {
                    var e;
                    let a = null === (e = t.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase();
                    return (null == a ? void 0 : a.startsWith("mp4")) || (null == a ? void 0 : a.startsWith("webm")) ? "video" : (null == a ? void 0 : a.startsWith("gif")) ? "gif" : "image"
                }
                constructor(t = {}) {
                    super("rule34.paheal.net", "https://rule34.paheal.net", {
                        useProxy: !0,
                        ...t
                    })
                }
            }
            class y {
                async initialize() {
                    await this.ensureTagData()
                }
                loadFromStorage() {
                    try {
                        let t = localStorage.getItem(this.STORAGE_KEY);
                        if (t) {
                            let e = JSON.parse(t);
                            this.tagData = e.tagData, this.lastFetchTime = e.timestamp, this.tagData && this.buildTagIndex()
                        }
                    } catch (t) {
                        console.error("Failed to load tag data from storage:", t)
                    }
                }
                saveToStorage() {
                    try {
                        let t = {
                            tagData: this.tagData,
                            timestamp: this.lastFetchTime
                        };
                        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(t))
                    } catch (t) {
                        console.error("Failed to save tag data to storage:", t)
                    }
                }
                async ensureTagData() {
                    let t = Date.now();
                    if (!this.tagData || t - this.lastFetchTime > this.CACHE_DURATION) try {
                        this.tagData = await this.fetchFunction(), this.lastFetchTime = t, this.buildTagIndex(), this.saveToStorage()
                    } catch (t) {
                        if (console.error("Failed to fetch tag data:", t), !this.tagData) throw Error("Could not load tag suggestion data")
                    }
                }
                buildTagIndex() {
                    if (!this.tagData) return;
                    let t = this.tagData.data.split(" "),
                        e = new Map,
                        a = new Map,
                        s = new Map,
                        r = new Map;
                    t.forEach((t, i) => {
                        if (!t) return;
                        let o = t.split("`");
                        if (o.length < 2) return;
                        let n = o[0],
                            l = o[1];
                        if (l) {
                            a.set(l, this.getTagCategory(n)), r.set(l, i), e.set(l, l), this.indexTagForSearch(l, l, s);
                            for (let t = 2; t < o.length; t++) {
                                let a = o[t];
                                a && (e.set(a, l), this.indexTagForSearch(a, l, s))
                            }
                        }
                    }), this.indexData = {
                        tagMap: e,
                        tagTypeMap: a,
                        searchIndex: s,
                        orderMap: r
                    }
                }
                indexTagForSearch(t, e, a) {
                    let s = t.toLowerCase();
                    for (let t = 1; t <= s.length; t++) {
                        var r;
                        let i = s.substring(0, t);
                        a.has(i) || a.set(i, new Set), null === (r = a.get(i)) || void 0 === r || r.add(e)
                    }
                }
                getTagCategory(t) {
                    switch (t) {
                        case "0":
                            return "general";
                        case "1":
                            return "artist";
                        case "2":
                            return "style";
                        case "3":
                            return "copyright";
                        case "4":
                            return "character";
                        case "5":
                            return "metadata";
                        default:
                            return "unknown"
                    }
                }
                getSuggestions(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                    if (!this.indexData) return [];
                    let {
                        searchIndex: a,
                        tagTypeMap: s,
                        orderMap: r
                    } = this.indexData;
                    if (!t || 0 === t.trim().length) return [];
                    let i = t.toLowerCase().trim();
                    if (!a.has(i)) return [];
                    let o = Array.from(a.get(i));
                    return o.sort((t, e) => {
                        let a = t.toLowerCase(),
                            s = e.toLowerCase(),
                            o = a.startsWith(i),
                            n = s.startsWith(i);
                        return o && !n ? -1 : !o && n ? 1 : r.get(t) - r.get(e)
                    }), o.slice(0, e).map(t => ({
                        name: t,
                        type: s.get(t)
                    }))
                }
                constructor(t, e) {
                    this.STORAGE_KEY = t, this.fetchFunction = e, this.tagData = null, this.lastFetchTime = 0, this.indexData = null, this.CACHE_DURATION = 6048e5, this.loadFromStorage(), this.initialize()
                }
            }
            class w extends l {
                transformPost(t, e) {
                    if ("deleted" === t.status) return null;
                    let a = {};
                    return t.tags.split(" ").forEach(t => {
                        let s = e[t] || "general";
                        a[s] || (a[s] = []), a[s].push(t)
                    }), {
                        id: t.id.toString(),
                        tags: t.tags.split(" "),
                        site: "konachan.com",
                        categorizedTags: a,
                        score: t.score,
                        source: t.source,
                        created_at: new Date(1e3 * t.created_at).toISOString(),
                        file_url: t.file_url,
                        type: this.getMediaType(t.file_url),
                        sample_url: t.sample_url,
                        preview_url: t.preview_url,
                        width: t.width,
                        height: t.height,
                        sample_width: t.sample_width,
                        sample_height: t.sample_height,
                        md5: t.md5,
                        rating: t.rating,
                        download_url: t.file_url,
                        source_links: t.source.split(/\s+/) || []
                    }
                }
                async getPosts(t) {
                    let {
                        tags: e = [],
                        page: a = 0,
                        limit: s = 20
                    } = t, r = new URLSearchParams({
                        json: "1",
                        api_version: "2",
                        include_tags: "1",
                        limit: s.toString(),
                        page: a.toString(),
                        tags: (0, m.Zy)(e.join(" "))
                    }), i = await this.fetchApi("posts", r), o = i.tags, n = i.posts.map(t => this.transformPost(t, o)).filter(Boolean);
                    return {
                        posts: n,
                        hasMore: n.length === s
                    }
                }
                async fetchPostById(t) {
                    let e = new URLSearchParams({
                            json: "1",
                            api_version: "2",
                            include_tags: "1",
                            limit: "1",
                            tags: "id:".concat(t)
                        }),
                        a = await this.fetchApi("posts", e),
                        s = a.tags;
                    return this.transformPost(a.posts[0], s)
                }
                async getTags(t) {
                    return this.tagSuggestionManager.getSuggestions(t.name, 20).map(t => ({
                        value: t.name,
                        label: t.name,
                        count: null
                    }))
                }
                getMediaType(t) {
                    var e;
                    let a = null == t ? void 0 : null === (e = t.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase();
                    return "mp4" === a || "webm" === a ? "video" : "gif" === a ? "gif" : "image"
                }
                constructor(t = {}) {
                    super("konachan.com", "https://konachan.com", {
                        useProxy: !0,
                        ...t
                    }), this.tagSuggestionManager = new y("konachan_tag_data", async () => {
                        try {
                            let t = new URLSearchParams;
                            return await this.fetchApi("autocomplete", t)
                        } catch (t) {
                            throw console.error("Failed to fetch tag suggestions:", t), t
                        }
                    })
                }
            }
            class _ extends l {
                transformPost(t, e) {
                    if ("deleted" === t.status) return null;
                    let a = {};
                    return t.tags.split(" ").forEach(t => {
                        let s = e[t] || "general";
                        a[s] || (a[s] = []), a[s].push(t)
                    }), {
                        id: t.id.toString(),
                        tags: t.tags.split(" "),
                        site: "yande.re",
                        categorizedTags: a,
                        score: t.score,
                        source: t.source,
                        download_url: t.file_url,
                        created_at: new Date(1e3 * t.created_at).toISOString(),
                        file_url: t.file_url,
                        type: this.getMediaType(t.file_url),
                        sample_url: t.sample_url,
                        sample_width: t.sample_width,
                        sample_height: t.sample_height,
                        preview_url: t.preview_url,
                        width: t.width,
                        height: t.height,
                        md5: t.md5,
                        rating: t.rating,
                        source_links: t.source.split(/\s+/) || []
                    }
                }
                async getPosts(t) {
                    let {
                        tags: e = [],
                        page: a = 0,
                        limit: s = 20
                    } = t, r = new URLSearchParams({
                        json: "1",
                        api_version: "2",
                        include_tags: "1",
                        limit: s.toString(),
                        page: a.toString(),
                        tags: (0, m.Zy)(e.join(" "))
                    }), i = await this.fetchApi("posts", r), o = i.tags, n = i.posts.length;
                    return {
                        posts: i.posts.map(t => this.transformPost(t, o)).filter(Boolean),
                        hasMore: n === s
                    }
                }
                async fetchPostById(t) {
                    let e = new URLSearchParams({
                            json: "1",
                            api_version: "2",
                            include_tags: "1",
                            limit: "1",
                            tags: "id:".concat(t)
                        }),
                        a = await this.fetchApi("posts", e),
                        s = a.tags;
                    return this.transformPost(a.posts[0], s)
                }
                async getTags(t) {
                    return this.tagSuggestionManager.getSuggestions(t.name, 20).map(t => ({
                        value: t.name,
                        label: t.name,
                        count: null
                    }))
                }
                getMediaType(t) {
                    var e;
                    let a = null == t ? void 0 : null === (e = t.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase();
                    return "mp4" === a || "webm" === a ? "video" : "gif" === a ? "gif" : "image"
                }
                constructor(t = {}) {
                    super("yande.re", "https://yande.re", {
                        useProxy: !0,
                        ...t
                    }), this.tagSuggestionManager = new y("yande_tag_data", async () => {
                        let t = new URLSearchParams;
                        return await this.fetchApi("autocomplete", t)
                    })
                }
            }
            class b {
                transformPost(t) {
                    let e = t.content[0].media;
                    return {
                        id: t.id,
                        site: "scrollx.org",
                        score: t.score || 0,
                        width: t.width,
                        height: t.height,
                        tags: "",
                        categorizedTags: t.tags,
                        type: this.getMediaType(e[0].url),
                        file_url: e[0].url,
                        preview_url: e[2].url,
                        sample_url: e[1].url,
                        download_url: t.file_url,
                        source: ""
                    }
                }
                makeQueryKey(t, e) {
                    return "".concat(t.sort().join(","), "|").concat(e)
                }
                async getPosts(t) {
                    let {
                        tags: e = [],
                        limit: a = 20
                    } = t, s = this.makeQueryKey(e, a);
                    this.lastQueryKey !== s && (this.cursor = null, this.lastQueryKey = s);
                    let r = new URLSearchParams({
                        q: e.length ? e.join(", ") : "*",
                        limit: a.toString()
                    });
                    this.cursor && r.set("cursor", this.cursor);
                    let i = await fetch("".concat(this.BASE_URL).concat(this.SEARCH_PATH, "?").concat(r.toString())),
                        {
                            posts: o,
                            next_cursor: n
                        } = await i.json();
                    return this.cursor = null != n ? n : null, {
                        posts: o.map(t => this.transformPost(t)),
                        hasMore: !!this.cursor
                    }
                }
                async fetchPostById(t) {
                    let e = new URLSearchParams({
                            limit: 1,
                            q: "id:".concat(t)
                        }),
                        a = await fetch("".concat(this.BASE_URL).concat(this.SEARCH_PATH, "?").concat(e.toString())),
                        {
                            posts: s
                        } = await a.json();
                    return this.transformPost(s[0])
                }
                async getTags(t) {
                    let {
                        name: e
                    } = t, a = new URLSearchParams({
                        term: e,
                        vsn: 2
                    }), s = await fetch("".concat(this.BASE_URL, "/autocomplete/tags?").concat(a.toString()));
                    return (await s.json()).map(t => ({
                        value: t.name,
                        label: t.name,
                        count: t.count,
                        type: t.type || "general"
                    }))
                }
                getMediaType(t) {
                    var e;
                    let a = null === (e = t.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase();
                    return "mp4" === a || "webm" === a ? "video" : "gif" === a ? "gif" : "image"
                }
                constructor(t = {}) {
                    this.BASE_URL = "http://localhost:8080", this.SEARCH_PATH = "/api/v1/json/search", this.cursor = null, this.lastQueryKey = null
                }
            }
            var P = a(187),
                x = a(26960);
            let S = (0, r.Fr)();
            class T extends s.y {
                get activeClient() {
                    var t;
                    let e = null === (t = this.currentSearchParams) || void 0 === t ? void 0 : t.site;
                    if (!e) return;
                    if (this.clientCache.has(e)) return this.clientCache.get(e);
                    let a = this.clientsFactoryFunctions.get(e || null)();
                    return this.clientCache.set(e, a), a
                }
                getStartIndex() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "rule34.xxx";
                    if (!t) return 0;
                    let e = x.L.find(e => e.label === t);
                    return (null == e ? void 0 : e.isZeroIndexed) ? 0 : 1
                }
                buildSearchTags() {
                    var t, e, a;
                    let s = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    if (!this.currentSearchParams) return [];
                    let {
                        isActive: r,
                        getBlacklistedTags: i
                    } = P.a.getState(), o = [...this.currentSearchParams.tags];
                    if (r && s) {
                        let t = i(this.currentSearchParams.site),
                            e = new Set(this.currentSearchParams.tags),
                            a = t.filter(t => !e.has(t));
                        o.push(...a.map(t => "-".concat(t)))
                    }
                    let {
                        rating: n,
                        score: l,
                        sort: c,
                        ratio: u,
                        timePeriod: h
                    } = this.currentSearchParams;
                    n && o.push("rating:".concat(n)), l && o.push("score:>=".concat(l));
                    let p = x.L.find(t => {
                        var e;
                        return t.label === (null === (e = this.currentSearchParams) || void 0 === e ? void 0 : e.site)
                    });
                    if (h) {
                        let e = null == p ? void 0 : null === (t = p.time_period) || void 0 === t ? void 0 : t.find(t => t.value === h);
                        (null == e ? void 0 : e.tag) && o.push(e.tag)
                    }
                    if (u) {
                        let t = null == p ? void 0 : null === (e = p.ratio_options) || void 0 === e ? void 0 : e.find(t => t.value === u);
                        (null == t ? void 0 : t.tag) && o.push(t.tag)
                    }
                    if (c) {
                        let t = null == p ? void 0 : null === (a = p.sort_options) || void 0 === a ? void 0 : a.find(t => t.value === c);
                        (null == t ? void 0 : t.tag) && o.push(t.tag)
                    }
                    return o
                }
                async fetchAndTransformPosts(t) {
                    let {
                        useBlacklist: e
                    } = t, a = this.buildSearchTags(e), {
                        posts: s,
                        hasMore: r
                    } = await this.activeClient.getPosts({
                        tags: a,
                        page: this.page++,
                        limit: this.postsPerPage
                    });
                    return {
                        posts: s.map(t => T.transformToUnifiedPost(t)),
                        hasMore: r
                    }
                }
                async fetchMoreData() {
                    let t = P.a.getState().getBlacklistedTags(this.currentSearchParams.site),
                        e = this.buildSearchTags(),
                        {
                            posts: a,
                            hasMore: s
                        } = await this.activeClient.getPosts({
                            tags: e,
                            page: this.page++,
                            limit: this.postsPerPage,
                            ...t && {
                                blacklistedTags: t
                            }
                        }),
                        r = await Promise.all(a.map(async t => T.transformToUnifiedPost(t)));
                    return {
                        posts: r,
                        hasMore: s || r.length === this.postsPerPage
                    }
                }
                static generateBooruPostUrl(t, e) {
                    if (!t || !e) return null;
                    switch (t) {
                        case "danbooru.donmai.us":
                            return "https://danbooru.donmai.us/posts/".concat(e);
                        case "e621.net":
                        case "e926.net":
                            return "https://".concat(t, "/posts/").concat(e);
                        case "rule34.paheal.net":
                            return "https://rule34.paheal.net/post/view/".concat(e);
                        case "konachan.com":
                        case "yande.re":
                            return "https://".concat(t, "/post/show/").concat(e);
                        default:
                            return "https://".concat(t, "/index.php?page=post&s=view&id=").concat(e)
                    }
                }
                static transformToUnifiedPost(t) {
                    t && "image" === t.type && (0, r.q8)(t.width, t.height) && (t.type = "long_image");
                    let e = t.sitePostId || t.id,
                        a = this.generateBooruPostUrl(t.site, e),
                        s = [...t.sample_url && t.sample_width ? [{
                            width: t.sample_width,
                            height: t.sample_height,
                            url: "gelbooru.com" === t.site ? (0, r.l)(t.sample_url) : t.sample_url
                        }] : [], {
                            width: t.width,
                            height: t.height,
                            url: t.file_url
                        }];
                    return {
                        id: t.id.toString(),
                        compositeId: (0, r.Lf)(t.site, e),
                        isNsfw: "safe" !== t.rating,
                        site: t.site || "unknown",
                        score: t.score,
                        created_at: t.created_at,
                        title: this.generateDescription(this.decodeCategorizedTags(t.categorizedTags)),
                        tags: Array.isArray(t.tags) ? t.tags : t.tags.split(" "),
                        categorizedTags: this.decodeCategorizedTags(t.categorizedTags),
                        source: t.source,
                        source_links: [...t.source_links, a],
                        processedContent: {
                            resolutions: S ? void 0 : s,
                            sources: t.sources,
                            type: t.type,
                            width: t.width,
                            height: t.height,
                            preview_url: t.preview_url,
                            display_url: t.sample_url,
                            source_url: t.file_url,
                            source: t.source || t.file_url,
                            file_url: t.file_url,
                            download_url: t.download_url
                        }
                    }
                }
                static decodeCategorizedTags(t) {
                    let e = {};
                    for (let a of Object.keys(t)) e[a] = t[a].map(r.jT);
                    return e
                }
                static generateDescription(t) {
                    let {
                        general: e = [],
                        character: a = [],
                        copyright: s = [],
                        artist: r = [],
                        meta: i = []
                    } = t, o = t => t.replace(/_/g, " ").replace(/\(.+?\)/g, "").trim(), n = a.map(o), l = r.map(o), c = s.map(o), u = [...e.map(o)].sort(() => Math.random() - .5).slice(0, 45), h = n.sort(() => Math.random() - .5).slice(0, 3), p = l.sort(() => Math.random() - .5).slice(0, 2), d = c.length > 0 ? c[Math.floor(Math.random() * c.length)] : "", g = c.length > 0 && "original" !== d ? "from ".concat(d) : "", m = "";
                    return h.length > 0 ? (m = "".concat(h.join(", "), " ").concat(g).trim(), p.length > 0 && (m += " by ".concat(p.join(" and "))), m += " featuring ".concat(u.join(", "))) : m = g ? "".concat(g).concat(p.length > 0 ? " by ".concat(p.join(" and ")) : "", " featuring ").concat(u.join(", ")) : "Featuring ".concat(u.join(", ")), m = m.charAt(0).toUpperCase() + m.slice(1)
                }
                async fetchPostById(t) {
                    let e = await this.activeClient.fetchPostById(t);
                    return T.transformToUnifiedPost(e)
                }
                async getNumberOfPostsInQuery() {
                    let t = this.buildSearchTags(!1);
                    return await this.activeClient.getNumberOfPostsInQuery(t)
                }
                getCurrentPage() {
                    return Math.max(0, this.page)
                }
                hasParametersChanged() {
                    return !1
                }
                handleParameterChanges() {}
                updateSearchParams(t) {
                    var e, a;
                    this.initiated = !0;
                    let s = Object.fromEntries(Object.entries(t).map(t => {
                        let [e, a] = t;
                        return [e, "none" === a ? null : a]
                    }));
                    this.currentSearchParams = { ...this.currentSearchParams,
                        ...s
                    }, this.resetQueue(), t.initialData && (this.postQueue = [...t.initialData]), this.page = null !== (a = t.page) && void 0 !== a ? a : this.getStartIndex(null === (e = this.currentSearchParams) || void 0 === e ? void 0 : e.site)
                }
                async searchTags(t) {
                    return (await this.activeClient.getTags({
                        name: t
                    })).sort((t, e) => e.count - t.count).map(t => ({
                        count: t.count,
                        label: (0, r.jT)(t.label),
                        value: (0, r.jT)(t.value),
                        type: t.type || null
                    })).filter(t => 0 !== t.count).filter((t, e, a) => e === a.findIndex(e => e.count === t.count && e.label === t.label && e.value === t.value))
                }
                setTags(t) {
                    this.updateSearchParams({
                        tags: t
                    })
                }
                constructor(t = {}) {
                    var e, a;
                    super(t), this.postsPerPage = 200, this.page = 1, this.initiated = !1, this.clientCache = new Map, this.useProxy = !0, this.currentSearchParams = t || {
                        tags: [],
                        site: null
                    }, this.useProxy = null === (e = null == t ? void 0 : t.useProxy) || void 0 === e || e, this.postsPerPage = t.limit || this.postsPerPage, this.clientsFactoryFunctions = new Map([
                        ["scrollx.org", () => new b],
                        ["rule34.xxx", () => new u({
                            useProxy: this.useProxy,
                            useProxyForAutocomplete: !1
                        })],
                        ["gelbooru.com", () => new h({
                            useProxy: this.useProxy
                        })],
                        ["hypnohub.net", () => new p({
                            useProxy: this.useProxy
                        })],
                        ["xbooru.com", () => new d({
                            useProxy: this.useProxy
                        })],
                        ["safebooru.org", () => new g({
                            useProxy: this.useProxy
                        })],
                        ["e621.net", () => new f(!1)],
                        ["e926.net", () => new f],
                        ["rule34.paheal.net", () => new v({
                            useProxy: this.useProxy
                        })],
                        ["konachan.com", () => new w({
                            useProxy: this.useProxy
                        })],
                        ["yande.re", () => new _({
                            useProxy: this.useProxy
                        })]
                    ]), this.page = null !== (a = t.page) && void 0 !== a ? a : this.getStartIndex(this.currentSearchParams.site)
                }
            }
        }
    }
]);