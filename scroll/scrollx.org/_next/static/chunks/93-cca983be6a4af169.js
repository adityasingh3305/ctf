"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [93], {
        59093: (e, t, s) => {
            s.d(t, {
                default: () => E
            });
            var r = s(95155),
                i = s(12115),
                o = s(76046),
                a = s(61838),
                n = s(49746),
                l = s(40767),
                c = s(91902),
                d = s(51719),
                u = s(20591),
                h = s(97709),
                g = s(29602);

            function m() {
                let e = (0, o.useSearchParams)(),
                    [t, s] = (0, i.useState)(!1),
                    a = e.get("q") || "reddit@",
                    n = a ? a.split(" ").filter(Boolean) : [],
                    {
                        toggleFavorite: m,
                        isFavorite: p
                    } = (0, h.I)(),
                    b = t => {
                        let s = n.filter(e => e !== t),
                            r = new URLSearchParams(e);
                        0 === s.length ? r.delete("q") : r.set("q", "".concat(s.join(" "))), g.QB.push("/reddit.com?".concat(r.toString()))
                    },
                    f = e => {
                        g.QB.push("/reddit.com?q=".concat(e))
                    },
                    y = (e, t) => {
                        1 === t.button && window.open("/reddit.com?q=".concat(e), "_blank")
                    };
                if (!n.length) return null;
                let w = p("reddit.com", n.join(" ")),
                    v = t ? n : n.slice(0, 5);
                return (0, r.jsx)("div", {
                    className: "flex flex-col gap-2 p-4",
                    children: (0, r.jsxs)("div", {
                        className: "flex flex-wrap gap-2",
                        children: [v.map(e => (0, r.jsxs)("div", {
                            onClick: t => {
                                t.preventDefault(), f(e)
                            },
                            onAuxClick: t => y(e, t),
                            className: "flex items-center gap-1 rounded-full px-3 py-1 border border-white text-white transition-colors duration-200 hover:bg-white hover:text-black cursor-pointer",
                            children: [(0, r.jsx)("span", {
                                children: e
                            }), (0, r.jsx)("button", {
                                onClick: t => {
                                    t.stopPropagation(), b(e)
                                },
                                className: "hover:text-destructive transition-colors duration-200",
                                "aria-label": "Remove ".concat(e),
                                children: (0, r.jsx)(l.A, {
                                    size: 16
                                })
                            })]
                        }, e)), n.length > 5 && (0, r.jsxs)("button", {
                            onClick: () => s(e => !e),
                            className: "flex items-center gap-1 rounded-full px-3 py-1 border border-white text-white transition-colors duration-200 hover:bg-white hover:text-black",
                            children: [t ? (0, r.jsx)(c.A, {
                                size: 16
                            }) : (0, r.jsx)(d.A, {
                                size: 16
                            }), (0, r.jsx)("span", {
                                children: t ? "Show Less" : "+".concat(n.length - 5, " More")
                            })]
                        }), (0, r.jsxs)("button", {
                            onClick: () => {
                                m({
                                    site: "reddit.com",
                                    query: n.join(" ")
                                })
                            },
                            className: "flex items-center gap-1 rounded-full px-3 py-1 border border-white text-white transition-colors duration-200 hover:bg-white hover:text-black",
                            children: [(0, r.jsx)(u.A, {
                                className: "h-4 w-4 ml-2",
                                fill: w ? "red" : "none"
                            }), (0, r.jsx)("span", {
                                children: w ? "Remove from Favorites" : "Save to Favorites"
                            })]
                        })]
                    })
                })
            }
            var p = s(9693),
                b = s(22099),
                f = s(20669),
                y = s(30814),
                w = s(42129),
                v = s(58810),
                x = s(29288),
                S = s(7688);
            class k extends S.y {
                async fetchMoreData(e) {
                    let t = await this.currentDataSource.fetchNextPosts(e);
                    return t.hasMore || (this.currentDataSource = this.createNextDataSource()), {
                        posts: t.posts,
                        hasMore: !0
                    }
                }
                hasParametersChanged() {
                    return !1
                }
                handleParameterChanges() {}
                createNextDataSource() {
                    var e, t;
                    let s = this.allSubreddits.filter(e => !this.usedSubreddits.has(e));
                    s.length < this.subredditsPerBatch && this.usedSubreddits.clear();
                    let r = (e = s.length >= this.subredditsPerBatch ? s : this.allSubreddits, t = this.subredditsPerBatch, [...e].slice(0, 350).sort(() => Math.random() - .5).slice(0, t));
                    return r.forEach(e => this.usedSubreddits.add(e)), new b.A({ ...this.baseOptions,
                        subreddits: r,
                        afterToken: "",
                        limit: 100,
                        useProxy: !0
                    })
                }
                async fetchPostById(e) {
                    return this.currentDataSource.fetchPostById(e)
                }
                async searchSubreddits(e, t) {
                    return this.currentDataSource.searchSubreddits(e, t)
                }
                async validateSubreddit(e) {
                    return this.currentDataSource.validateSubreddit(e)
                }
                constructor(e) {
                    let {
                        allSubreddits: t,
                        subredditsPerBatch: s,
                        postsPerBatch: r,
                        refillThreshold: i,
                        initialData: o,
                        ...a
                    } = e;
                    if (super({
                            postsPerBatch: r,
                            refillThreshold: i,
                            initialData: o
                        }), this.usedSubreddits = new Set, this.initiated = !0, !(null == t ? void 0 : t.length)) throw Error("InfiniteRedditFeed requires a non-empty 'allSubreddits' list.");
                    this.allSubreddits = t, this.subredditsPerBatch = null != s ? s : 5, this.baseOptions = a, this.currentDataSource = this.createNextDataSource()
                }
            }
            var j = s(94841);
            let P = JSON.parse('["gonewild","nsfw","cumsluts","gooned","hentai","porn","realgirls","rule34","collegesluts","asiansgonewild","legalteens","girlsfinishingthejob","nsfw_gif","tittydrop","petitegonewild","pussy","nsfwhardcore","nude_selfie","milf","latinas","breedingmaterial","slut","onlyfans101","nudes","needysluts","boobs","ass","tiktokporn","bustypetite","bigasses","gothsluts","blowjobs","asianhotties","tiktoknsfw","barelylegalteens","realhomeporn","femboys","adorableporn","girlsmasturbating","shefuckshim","pawg","xsmallgirls","anal","chubby","pornid","lesbians","porninfifteenseconds","short_porn","dadwouldbeproud","lipsthatgrip","nsfw_gifs","squirting","cuckold","celebnsfw","curvy","freeuse","holdthemoan","juicyasians","jizzedtothis","fuckdoll","biggerthanyouthought","deepthroat","shelikesitrough","bigtiddygothgf","traps","onoff","18_19","hentai_gif","hotwife","thickwhitegirls","naturaltitties","cumfetish","homemadensfw","cosplaygirls","gonewild18","egirls","asstastic","bigboobsgw","asshole","tiktokthots","blowjob","pussy_perfection","buttsandbarefeet","slutsofsnapchat","threesome","creampies","booty","grool","blackchickswhitedicks","tipofmypenis","fitnakedgirls","gettingherselfoff","stacked","smallboobs","upskirt","nsfwcosplay","thick","teenbeauties","smallcutie","public","amateur","paag","brownhotties","publicsexporn","publicflashing","watchitfortheplot","naughtywives","toocuteforporn","workgonewild","blowjobgirls","analgw","transporn","amateurcumsluts","long_porn","doggystyle_nsfw","dirtysmall","cumshots","daughtertraining","facefuck","amihot","obsf","altgonewild","happyembarrassedgirls","iwanttosuckcock","justfriendshavingfun","cumdumpsters","palegirls","adorablenudes","redheads","schoolgirlsxxx","boobbounce","bdsm","perfectbody","iwanttobeher","petite","nsfwverifiedamateurs","slimthick","orgasms","punkgirls","gonewild30plus","hotmoms","womenbendingover","tits","wetpussys","amateurporn","largemilkers","ebony","younggirlsgonewild","porn_gifs","roughporn","homemadexxx","couplesgonewild","bubblebutts","booty_queens","spreadem","maturemilf","nsfw411","cutelittlebutts","step_fantasy_gifs","girlsinyogapants","sissies","tinytits","asiannsfw","ebonyhomemade","massivetitsnass","pawglove","fitgirls","collegeamateurs","fantasticbreasts","swingersgw","futanari","degradingholes","cheatingwives","cougarsforcubs","couplesporn","wifesharing","twerking","gwpublic","momsonincest","miakhalifa","letsnotmeet","rearpussy","nipples","ediblebuttholes","18_22","bdsmgw","gymgirlsnsfw","sextrophies","innie","bodyperfection","publicnudity","masturbationgonewild","hugeboobs","outdoorrecreation","hungrybutts","indiansgonewild","stripgirls","exhibitionistfun","mexicana","fuckinglikecrazy","tightdresses","voyeurflash","cosplaypornvideos","pornstarhq","just18","boltedontits","sluts","assholegonewild","girlsshowering","bustynaturals","buttplug","flashinggirls","slutwife","boobies","normalnudes","asiangirlswhitecocks","girlswithglasses","amateur_milfs","pornrelapsed","rape_hentai","pronebone","vagina","gwcouples","centaurgirls","totalbabes","innocentlynaughty","ghostnipples","ebonythroatqueens","emogirlsfuck","onlyifshespackin","bigass","wouldyoufuckmywife","mombod","ratemypussy","monsterdicks","lesbian_gifs","shavedpussies","2busty2hide"]');
            var C = s(13071);
            ! function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
                e.slice(0, 350).sort(() => Math.random() - .5).slice(0, t)
            }(P);
            let q = (e, t, s, r) => {
                    let i = e.slice(0, 25).map(e => {
                        var s, r, i, o, a, n;
                        let l = "video" === e.processedContent.type,
                            c = [...(null == e ? void 0 : null === (s = e.categorizedTags) || void 0 === s ? void 0 : s.general) || [], ...(null == e ? void 0 : null === (r = e.categorizedTags) || void 0 === r ? void 0 : r.character) || [], ...(null == e ? void 0 : null === (i = e.categorizedTags) || void 0 === i ? void 0 : i.copyright) || [], ...(null == e ? void 0 : null === (o = e.categorizedTags) || void 0 === o ? void 0 : o.meta) || []].join(", "),
                            d = (0, g.zI)(t, e);
                        return {
                            "@id": "".concat(t, ":").concat(e.id),
                            "@type": l ? "VideoObject" : "ImageObject",
                            name: e.title || (l ? "Video from gallery" : "Image from gallery"),
                            inLanguage: "en",
                            isFamilyFriendly: !e.isNsfw,
                            contentUrl: e.processedContent.source,
                            description: e.title,
                            uploadDate: e.created_at,
                            ...l && {
                                thumbnailUrl: e.processedContent.display_url || e.processedContent.source,
                                embedUrl: d
                            },
                            author: {
                                "@type": "Person",
                                name: e.author || (null == e ? void 0 : null === (n = e.categorizedTags) || void 0 === n ? void 0 : null === (a = n.artist) || void 0 === a ? void 0 : a[0]) || "Unknown"
                            },
                            keywords: c
                        }
                    });
                    return {
                        "@context": "https://schema.org",
                        "@graph": [{
                            "@id": "https://scrollx.org/#website",
                            "@type": "WebSite",
                            name: "ScrollX",
                            url: "https://scrollx.org",
                            inLanguage: "en",
                            publisher: {
                                "@id": "https://scrollx.org/#identity"
                            }
                        }, {
                            "@id": "https://scrollx.org/#identity",
                            "@type": "Organization",
                            name: "ScrollX",
                            url: "https://scrollx.org"
                        }, {
                            "@id": "https://scrollx.org/".concat(t, "/#webpage"),
                            description: r,
                            name: s,
                            url: "https://scrollx.org/".concat(t),
                            "@type": ["WebPage", "CollectionPage", "SearchResultsPage"],
                            about: {
                                "@id": "https://scrollx.org/#identity"
                            },
                            isPartOf: {
                                "@id": "https://scrollx.org/#website"
                            }
                        }, ...i]
                    }
                },
                _ = (e, t, s) => {
                    let r = (0, i.useMemo)(() => q(e, t, s), [JSON.stringify(e.slice(0, 25)), t, s]);
                    (0, i.useEffect)(() => {
                        let e = "structured-data",
                            t = document.getElementById(e);
                        return t || ((t = document.createElement("script")).type = "application/ld+json", t.id = e, document.head.appendChild(t)), t.textContent = JSON.stringify(r, null, 2), () => {
                            t && document.head.removeChild(t)
                        }
                    }, [r])
                },
                N = (e, t) => {
                    let s = document.querySelector('meta[name="'.concat(e, '"]')) || document.querySelector('meta[property="'.concat(e, '"]'));
                    s ? s.setAttribute("content", t) : (s = document.createElement("meta"), e.startsWith("og:") ? s.setAttribute("property", e) : s.setAttribute("name", e), s.content = t, document.head.appendChild(s))
                };

            function A(e) {
                let {
                    initialPosts: t = []
                } = e, s = (0, o.usePathname)().split("/")[2] || "reddit.com", l = (0, o.useSearchParams)(), {
                    getCurrentFilter: c,
                    setCurrentQuery: d
                } = (0, x.t0)(), [u, h] = (0, i.useState)(t || []), {
                    getURLState: S,
                    handleSiteChange: C,
                    handleSearch: q,
                    handleSortChange: A,
                    handleParamsUpdate: E,
                    handleUserChange: z,
                    getNavProps: B
                } = (0, j._)({
                    mode: "path",
                    currentSite: s,
                    reloadAfterUrlUpdate: 0 !== t.length
                }), D = S(), [M] = (0, i.useState)(() => new p.f({
                    page: D.page,
                    site: D.site
                })), [T, I] = (0, i.useState)(null), F = "reddit.com" === D.site ? T : M, {
                    title: U,
                    description: O
                } = (0, g.t0)(D.site, D.query, D);
                _(u, D.site, U, O), (0, i.useEffect)(() => {
                    let e = S(),
                        {
                            site: s,
                            query: r
                        } = e,
                        {
                            title: i,
                            description: o
                        } = (0, g.t0)(s, r, { ...e,
                            score: l.get("score") ? e.score : void 0
                        });
                    if (0 === t.length) {
                        document.title = i, N("description", o), N("og:title", i), N("og:description", o), N("twitter:title", i), N("twitter:description", o);
                        let t = l.get("page"),
                            a = l.get("cursor"),
                            n = (0, g.qw)(s, r, e),
                            c = document.querySelector('link[rel="canonical"]');
                        c || ((c = document.createElement("link")).rel = "canonical", document.head.appendChild(c)), c.setAttribute("href", n);
                        let d = document.querySelector('meta[name="robots"]');
                        d || ((d = document.createElement("meta")).name = "robots", document.head.appendChild(d)), d.setAttribute("content", t || a ? "noindex, follow" : "index, follow")
                    }
                }, [l]);
                let [L, R] = (0, i.useState)(!0), [J, V] = (0, i.useState)(!1), [W, Q] = (0, i.useState)(null), [X, H] = (0, i.useState)(0);
                (0, i.useEffect)(() => {
                    let e = S();
                    if (K.current && (K.current.abort(), K.current = null), t && t.length) {
                        if ("reddit.com" === e.site) {
                            let s = t[0].subreddit;
                            d(e.query), I(new b.A({
                                subreddits: e.query ? e.query.split(" ").filter(Boolean) : [s],
                                sort: e.timeframe ? "".concat(e.sort, "?t=").concat(e.timeframe) : e.sort,
                                useCombinedFetch: !0
                            }))
                        } else {
                            var s, r, i, o, a, n, l, c;
                            let d = null === (r = t[0].categorizedTags) || void 0 === r ? void 0 : null === (s = r.artist) || void 0 === s ? void 0 : s[0],
                                u = null === (o = t[0].categorizedTags) || void 0 === o ? void 0 : null === (i = o.copyright) || void 0 === i ? void 0 : i[0],
                                h = null === (n = t[0].categorizedTags) || void 0 === n ? void 0 : null === (a = n.character) || void 0 === a ? void 0 : a[0],
                                g = null === (c = t[0].categorizedTags) || void 0 === c ? void 0 : null === (l = c.general) || void 0 === l ? void 0 : l[0],
                                m = h || u || d || g;
                            M.updateSearchParams({
                                site: e.site,
                                tags: m ? [m] : [],
                                rating: e.rating,
                                score: e.score,
                                timePeriod: e.timePeriod,
                                sort: e.sort,
                                id: e.id,
                                ratio: null == e ? void 0 : e.ratio,
                                cursor: e.cursor,
                                page: e.page
                            })
                        }
                    } else "reddit.com" === e.site ? (d(e.query), e.query ? I(new b.A({
                        subreddits: e.query.split(" ").filter(Boolean),
                        sort: e.timeframe ? "".concat(e.sort, "?t=").concat(e.timeframe) : e.sort,
                        useCombinedFetch: !0
                    })) : I(new k({
                        allSubreddits: P,
                        subredditsPerBatch: 1,
                        sort: e.timeframe ? '<span class="math-inline">{state.sort}?t=</span>{state.timeframe}' : e.sort,
                        useCombinedFetch: !0,
                        useProxy: !0,
                        limit: 100
                    }))) : M.updateSearchParams({
                        site: e.site,
                        tags: e.query ? e.query.split(" ").filter(Boolean) : [],
                        rating: e.rating,
                        score: e.score,
                        timePeriod: e.timePeriod,
                        sort: e.sort,
                        id: e.id,
                        ratio: null == e ? void 0 : e.ratio,
                        cursor: e.cursor,
                        page: e.page
                    });
                    h(t), R(!0), Q(null), H(e => e + 1), window.scrollTo(0, 0)
                }, [l, M]), (0, i.useEffect)(() => () => {
                    K.current && K.current.abort()
                }, []);
                let K = (0, i.useRef)(null),
                    Y = (0, i.useCallback)(async () => {
                        if (!J && !W && L) try {
                            let e = S(),
                                s = "reddit.com" === e.site ? T : M;
                            if (!s || !s.initiated) return;
                            0 === t.length && K.current && K.current.abort();
                            let r = new AbortController;
                            K.current = r, V(!0);
                            let {
                                posts: i,
                                hasMore: o
                            } = await s.fetchNextPosts(r.signal);
                            if (r.signal.aborted) return;
                            h(e => {
                                let t = new Set(e.map(e => e.id)),
                                    s = i.filter(e => !t.has(e.id));
                                return [...e, ...s]
                            }), R(o), Q(null), K.current = null
                        } catch (e) {
                            console.log("Error fetching posts:", e), "AbortError" !== e.name && Q(e instanceof Error ? e.message : "Failed to fetch posts")
                        } finally {
                            V(!1)
                        }
                    }, [J, W, L, T, M, S]),
                    {
                        showImages: $,
                        showVideos: G,
                        showAlbums: Z
                    } = c(),
                    ee = (0, i.useMemo)(() => "reddit.com" !== D.site ? u : u.filter(e => {
                        let {
                            type: t
                        } = e.processedContent;
                        return ("image" !== t || !!$) && ("gallery" !== t || !!Z) && ("video" !== t || !!G)
                    }), [u, D.site, $, G, Z]),
                    et = (0, i.useMemo)(() => {
                        if ("reddit.com" !== D.site && 0 === t.length) {
                            let e = "" !== D.query ? "?q=".concat(D.query) : "",
                                t = M.getCurrentPage() + 1;
                            if (!(t > 10)) return window.origin + "/".concat(D.site).concat(e).concat(e ? "&" : "?", "page=").concat(t)
                        }
                    }, [D.site, D.query, M]);
                return (0, r.jsx)(f.v, {
                    site: D.site,
                    searchInput: D.query,
                    onSearchChange: q,
                    onUserChange: e => {
                        window.location.href = "/reddit.com/user?userName=".concat(e)
                    },
                    children: (0, r.jsxs)("div", {
                        className: "min-h-screen bg-black text-white",
                        children: [(0, r.jsxs)("div", {
                            className: "pt-16",
                            children: ["reddit.com" === D.site && D.query && (0, r.jsx)(m, {}), F && (0, r.jsx)(n.B, {
                                startingIndex: t && t.length ? 0 : null,
                                posts: (null == t ? void 0 : t.length) ? u : ee,
                                error: W,
                                isLoading: J,
                                handleLoadMore: Y,
                                hasMore: L,
                                seoNextAnchor: et,
                                handleVisibleTileChange: e => {
                                    let t = S();
                                    window.scrollY >= 1 * window.innerHeight && v.F.getState().addEntry({ ...t,
                                        id: e || null
                                    })
                                },
                                site: D.site
                            }, X)]
                        }), (0, r.jsx)("div", {
                            className: "bg-black",
                            children: "reddit.com" === D.site ? (0, r.jsx)(w.E, {
                                sortBy: D.timeframe ? "".concat(D.sort, "?t=").concat(D.timeframe) : D.sort,
                                onSortChange: A,
                                onUpdateParams: E,
                                handleSiteChange: e => C(e.site),
                                dataSource: T
                            }) : (0, r.jsx)(a.K, {
                                sortBy: D.sort,
                                rating: D.rating,
                                ratio: D.ratio,
                                score: D.score,
                                timePeriod: D.timePeriod,
                                searchInput: D.query,
                                site: D.site,
                                onSearch: q,
                                onUpdateParams: E,
                                onSiteChange: C,
                                dataSource: M
                            })
                        }), (0, r.jsx)(y.l$, {
                            position: "bottom-center",
                            richColors: !0
                        })]
                    })
                })
            }

            function E(e) {
                let {
                    initialPosts: t
                } = e;
                return (0, r.jsx)(C.A, {
                    children: (0, r.jsx)(A, {
                        initialPosts: t
                    })
                })
            }
        }
    }
]);