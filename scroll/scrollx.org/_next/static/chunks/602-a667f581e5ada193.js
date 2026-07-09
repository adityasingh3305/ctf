"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [602], {
        29602: (e, t, n) => {
            n.d(t, {
                C1: () => l,
                EJ: () => f,
                F_: () => G,
                Fr: () => m,
                HX: () => p,
                Lf: () => M,
                Ne: () => _,
                PE: () => k,
                QB: () => y,
                Y3: () => O,
                _C: () => w,
                bQ: () => d,
                cn: () => u,
                jT: () => s,
                l: () => U,
                nx: () => c,
                q8: () => h,
                qw: () => E,
                t0: () => A,
                tv: () => L,
                un: () => g,
                zI: () => b
            });
            var o = n(43463),
                a = n(69795),
                r = n(78733),
                i = n.n(r);
            let l = "https://scrollx.org/";

            function c(e) {
                return e.replaceAll('"', "*").replace(/\*+/g, "*")
            }

            function s(e) {
                return i().decode(e)
            }

            function d() {
                return Math.max(2, Math.floor(window.innerWidth / 400))
            }

            function u() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, a.QP)((0, o.$)(t))
            }
            let p = 2.5;

            function h(e, t) {
                return t / e > p
            }

            function m() {
                if ("undefined" == typeof navigator) return !1;
                let e = navigator.userAgent || navigator.vendor || window.opera,
                    t = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
                return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(e) || t
            }

            function g() {
                return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
            }

            function f(e, t) {
                return e.length <= t ? e : e.substring(0, t) + "..."
            }

            function w(e) {
                let t = e.toLowerCase().indexOf("featuring");
                return -1 !== t ? e.substring(0, t).trim() : e.trim()
            }

            function b(e, t) {
                let n = "reddit.com" === e ? "t3_" + t.id : t.id;
                return "".concat(window.origin, "/").concat(e, "/post/").concat(n)
            }
            let v = e => {
                    "function" == typeof gtag && gtag("event", "page_view", {
                        page_path: e
                    })
                },
                y = {
                    push: e => {
                        window.location.pathname + window.location.search + window.location.hash !== e && (window.history.pushState({}, "", e), v(e))
                    }
                },
                x = e => e.replace(/[,]/g, "").replace(/[^a-z0-9.]/gi, "_").replace(/_+/g, "_").substring(0, 80).trim(),
                S = {
                    GLOBAL: {
                        key: "last_popunder_global",
                        minutes: 30
                    },
                    DOWNLOAD: {
                        key: "last_popunder_download",
                        minutes: 10
                    }
                },
                _ = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "GLOBAL",
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        o = S[e],
                        a = 6e4 * o.minutes,
                        r = localStorage.getItem(o.key),
                        i = r ? parseInt(r, 10) : 0,
                        l = Date.now();
                    l - i < a || (C(t, n), localStorage.setItem(o.key, l.toString()))
                },
                C = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    if (e) {
                        let e = encodeURIComponent(window.location.href),
                            n = "https://scrollx.org/api/proxy/content/popunder?p=".concat(e, "&tags=").concat(encodeURIComponent(t.join(",")));
                        window.open(n, "_blank", "noopener");
                        return
                    }
                    window.open("https://s.pemsrv.com/v1/link.php?idzone=5902426&type=8&tags=".concat(encodeURIComponent(t.join(","))), "_blank", "noopener")
                },
                k = function(e) {
                    var t;
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (!(null === (t = e.processedContent) || void 0 === t ? void 0 : t.download_url)) return;
                    n && _("DOWNLOAD", o);
                    let a = e.processedContent.download_url || e.processedContent.source || e.processedContent.file_url,
                        r = "".concat(e.site, "_").concat(e.id, "_") + (e.title || I(a).base),
                        i = I(a).ext;
                    if (!i) switch (e.processedContent.type) {
                        case "image":
                            i = "jpg";
                            break;
                        case "video":
                            i = "mp4";
                            break;
                        case "gif":
                            i = "gif";
                            break;
                        default:
                            i = "bin"
                    }
                    i && !r.endsWith(".".concat(i)) && (r = "".concat(x(r), ".").concat(i));
                    let l = "".concat("https://scrollx.org/download", "?url=").concat(encodeURIComponent(a), "&filename=").concat(encodeURIComponent(r)),
                        c = document.createElement("a");
                    c.href = l, c.download = r, document.body.appendChild(c), c.click(), document.body.removeChild(c)
                };

            function I(e) {
                try {
                    let {
                        pathname: t
                    } = new URL(e), n = t.substring(t.lastIndexOf("/") + 1);
                    if (!n) return {
                        base: "download",
                        ext: ""
                    };
                    let o = n.split("?")[0].split("#")[0],
                        a = o.lastIndexOf(".");
                    if (a <= 0 || a === o.length - 1) return {
                        base: o,
                        ext: ""
                    };
                    return {
                        base: o.substring(0, a),
                        ext: o.substring(a + 1)
                    }
                } catch (e) {
                    return {
                        base: "download",
                        ext: ""
                    }
                }
            }
            let F = e => {
                    if (!e) return null;
                    let t = e => e.replace(/_/g, " ").split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
                    return e.replace(/[()]/g, "").trim().replace(/\s+/g, " ").split(" ").map(e => "~" === (e = e.trim()) ? "or" : e.startsWith("-") ? "no ".concat(t(e.slice(1))) : t(e)).reduce((e, t, n, o) => 0 === n ? t : e + ("or" === t || "or" === o[n - 1] || t.startsWith("No ") ? " " : ", ") + t, "")
                },
                R = e => {
                    var t;
                    return G(e) ? null !== (t = ({
                        score: "top rated",
                        oldest: "oldest first",
                        random: "random order"
                    })[e]) && void 0 !== t ? t : e : null
                },
                B = e => G(e) ? e : null,
                P = e => G(e) ? e : null,
                N = e => G(e) ? "".concat({
                    desktop: "desktop",
                    mobile: "mobile",
                    square: "square",
                    long: "long",
                    landscape: "landscape"
                }[e], " ratio") : null,
                W = e => null != e ? "score ".concat(e, "+") : null,
                j = e => {
                    var t, n;
                    if (!e) return null;
                    let [o, a] = e.split("?t=");
                    return null !== (n = ({
                        hot: "Hot",
                        new: "New",
                        rising: "Rising",
                        top: a ? "Top of ".concat(null !== (t = ({
                            hour: "past hour",
                            day: "today",
                            week: "this week",
                            month: "this month",
                            year: "this year",
                            all: "all time"
                        })[a]) && void 0 !== t ? t : a) : "Top"
                    })[o]) && void 0 !== n ? n : o
                },
                A = function(e, t) {
                    var n, o, a;
                    let {
                        sort: r,
                        rating: i,
                        timePeriod: l,
                        ratio: c,
                        score: s
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, d = null !== (n = ({
                        "rule34.xxx": "Rule34",
                        "realbooru.com": "Realbooru",
                        "gelbooru.com": "Gelbooru",
                        "danbooru.donmai.us": "Danbooru",
                        "hypnohub.net": "Hypnohub",
                        "xbooru.com": "Xbooru",
                        "bleachbooru.org": "Bleachbooru",
                        "safebooru.org": "Safebooru",
                        "tbib.org": "TBIB",
                        "e621.net": "E621",
                        "e926.net": "E926",
                        "rule34.paheal.net": "Rule34 Paheal",
                        "reddit.com": "Reddit"
                    })[e]) && void 0 !== n ? n : String(a = e.split(".")[0]).charAt(0).toUpperCase() + String(a).slice(1), u = null !== (o = ({
                        "rule34.xxx": "hentai GIFs, anime porn, and adult art",
                        "realbooru.com": "real-life adult photos and uncensored GIFs",
                        "gelbooru.com": "hentai images, animated porn, and doujinshi",
                        "danbooru.donmai.us": "hentai illustrations and anime-style NSFW art",
                        "hypnohub.net": "hypnosis and mind control hentai art",
                        "xbooru.com": "hentai GIFs, doujinshi, and animated porn",
                        "bleachbooru.org": "Bleach hentai art and NSFW anime illustrations",
                        "safebooru.org": "clean anime art and fan-created illustrations",
                        "tbib.org": "hentai images and tagged anime art",
                        "e621.net": "furry NSFW art and adult animations",
                        "e926.net": "furry SFW art and community content",
                        "rule34.paheal.net": "Rule34 Paheal hentai and adult fan art",
                        "reddit.com": "NSFW videos, GIFs, and explicit images"
                    })[e]) && void 0 !== o ? o : "NSFW videos, images, and animated content", p = F(t), h = [R(r), B(i), W(s), P(l), N(c)].filter(Boolean).join(", ");
                    return {
                        title: "reddit.com" === e ? [j(r, l), p ? "from ".concat(p) : null, "Reddit"].filter(Boolean).join(" ") + " | ScrollX" : [p, h, d].filter(Boolean).join(" - ") + " | ScrollX",
                        description: (() => {
                            if ("reddit.com" === e) {
                                let e = j(r);
                                return p ? "Browse ".concat(e ? "".concat(e, " posts") : "posts", " from ").concat(p, " on Reddit with ScrollX. Fast gallery and swipe mode.") : "Browse ".concat(e ? "".concat(e, " posts") : "posts", " on Reddit with ScrollX. Fast gallery and swipe mode.")
                            }
                            let t = [R(r), B(i), P(l)].filter(Boolean).join(", ");
                            return p ? "Browse ".concat(p, " ").concat(u, " on ").concat(d).concat(t ? " — ".concat(t) : "", ". Fast gallery and swipe mode.") : "Browse ".concat(u, " on ").concat(d).concat(t ? " — ".concat(t) : "", ". Fast gallery and swipe mode.")
                        })()
                    }
                };

            function E(e, t) {
                let {
                    sort: n,
                    rating: o,
                    score: a,
                    timePeriod: r
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = "https://scrollx.org/".concat(e), l = new URLSearchParams;
                t && l.set("q", t), G(n) && l.set("sort", n), G(o) && l.set("rating", o), G(r) && l.set("timePeriod", r), null != a && a > 0 && l.set("score", a.toString());
                let c = l.toString();
                return c ? "".concat(i, "?").concat(c) : i
            }

            function L() {
                return !!(window.matchMedia("(display-mode: standalone)").matches || window.matchMedia("(display-mode: fullscreen)").matches || window.matchMedia("(display-mode: minimal-ui)").matches || "standalone" in navigator && navigator.standalone)
            }
            let O = e => {
                    let t;
                    let n = /\(\s+(.+?)\s+\)/g,
                        o = /\S+/g,
                        a = [],
                        r = 0;
                    for (; null !== (t = n.exec(e));) {
                        let i = e.slice(r, t.index).trim();
                        i && (i.match(o) || []).forEach(e => a.push({
                            type: "tag",
                            raw: e
                        })), a.push({
                            type: "group",
                            raw: t[1]
                        }), r = n.lastIndex
                    }
                    let i = e.slice(r).trim();
                    return i && (i.match(o) || []).forEach(e => a.push({
                        type: "tag",
                        raw: e
                    })), a
                },
                U = e => {
                    if (!e) return "";
                    let t = function(e) {
                        let t = new TextEncoder().encode(e),
                            n = "";
                        for (let e of t) n += String.fromCharCode(e);
                        return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }(e);
                    return "https://scrollx.org/m/".concat(t)
                },
                G = e => e && "none" !== e,
                M = (e, t) => "".concat(e, ":").concat(t).trim()
        }
    }
]);