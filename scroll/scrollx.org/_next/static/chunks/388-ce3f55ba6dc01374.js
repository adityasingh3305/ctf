"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [388], {
        13071: (e, r, t) => {
            t.d(r, {
                A: () => i
            });
            var s = t(95155),
                n = t(12115),
                a = t(29602);

            function i(e) {
                let {
                    children: r
                } = e, [t, i] = (0, n.useState)(!1);
                return ((0, n.useEffect)(() => {
                    if (!(0, a.Fr)()) return;
                    let e = e => {
                        e.preventDefault()
                    };
                    return document.addEventListener("contextmenu", e), () => {
                        document.removeEventListener("contextmenu", e)
                    }
                }, []), (0, n.useEffect)(() => {
                    i(!0)
                }, []), t) ? (0, s.jsx)("div", {
                    style: {
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        WebkitTouchCallout: "none"
                    },
                    children: r
                }) : null
            }
        },
        21109: (e, r, t) => {
            t.d(r, {
                A: () => i
            });
            var s = t(95155),
                n = t(48173),
                a = t.n(n);

            function i(e) {
                let {
                    site: r
                } = e;
                return (0, s.jsxs)(a(), {
                    href: "/".concat(r),
                    className: "text-2xl font-extrabold tracking-tight cursor-pointer group flex items-center",
                    children: [(0, s.jsx)("span", {
                        className: "hidden sm:inline text-white transition-transform duration-300 ease-in-out",
                        children: "scroll"
                    }), (0, s.jsx)("img", {
                        src: "/favicon.ico",
                        alt: "Logo",
                        className: "w-6 h-6 transition-transform duration-300 ease-in-out"
                    })]
                })
            }
            t(29602)
        },
        42129: (e, r, t) => {
            t.d(r, {
                E: () => T
            });
            var s = t(95155),
                n = t(12115),
                a = t(86710),
                i = t(40767),
                m = t(33473),
                l = t(20853),
                o = t(93518),
                c = t(45525),
                d = t(46647),
                u = t(25683),
                b = t(20750),
                h = t(14085),
                g = t(9955),
                p = t(72581),
                f = t(29288);

            function k(e) {
                let {
                    isOpen: r,
                    onClose: t
                } = e, a = (0, n.useRef)(null), [m, l] = (0, n.useState)(null);
                return ((0, n.useEffect)(() => {
                    let e = e => {
                        a.current && !a.current.contains(e.target) && t()
                    };
                    return r && (document.addEventListener("mousedown", e), document.body.style.overflow = "hidden"), () => {
                        document.removeEventListener("mousedown", e), document.body.style.overflow = "auto"
                    }
                }, [r, t]), (0, n.useEffect)(() => {
                    let e = e => {
                        "Escape" === e.key && t()
                    };
                    return r && window.addEventListener("keydown", e), () => {
                        window.removeEventListener("keydown", e)
                    }
                }, [r, t]), r) ? (0, s.jsx)("div", {
                    className: "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-0",
                    children: (0, s.jsxs)("div", {
                        ref: a,
                        className: "bg-gray-900 rounded-xl w-full max-w-md transform transition-all duration-200 ease-out",
                        children: [(0, s.jsxs)("div", {
                            className: "flex justify-between items-center p-4 border-b border-gray-800",
                            children: [(0, s.jsx)("h2", {
                                className: "text-xl font-semibold text-white",
                                children: "Content Filters"
                            }), (0, s.jsx)(h.$, {
                                variant: "ghost",
                                size: "icon",
                                onClick: t,
                                className: "hover:bg-gray-800 rounded-full",
                                children: (0, s.jsx)(i.A, {
                                    className: "h-5 w-5 text-gray-400"
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "p-4 space-y-6",
                            children: [m && (0, s.jsx)("div", {
                                className: "text-red-400 text-sm bg-red-950/50 p-3 rounded-lg",
                                children: m
                            }), (0, s.jsxs)("div", {
                                className: "space-y-4",
                                children: [(0, s.jsx)(x, {
                                    title: "Images",
                                    description: "Photos and other static images",
                                    filterKey: "showImages",
                                    onError: l
                                }), (0, s.jsx)(x, {
                                    title: "Videos",
                                    description: "Video content and GIFs",
                                    filterKey: "showVideos",
                                    onError: l
                                }), (0, s.jsx)(x, {
                                    title: "Albums",
                                    description: "Collections of multiple images",
                                    filterKey: "showAlbums",
                                    onError: l
                                })]
                            })]
                        })]
                    })
                }) : null
            }

            function x(e) {
                let {
                    title: r,
                    description: t,
                    filterKey: n,
                    onError: a
                } = e, {
                    getCurrentFilter: i,
                    updateCurrentFilter: m
                } = (0, f.t0)(), l = i(), o = l[n];
                return (0, s.jsxs)("div", {
                    className: "group flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors",
                    children: [(0, s.jsxs)("div", {
                        className: "flex-grow",
                        children: [(0, s.jsx)("h3", {
                            className: "text-base font-medium text-white",
                            children: r
                        }), (0, s.jsx)("p", {
                            className: "text-sm text-gray-400 mt-0.5",
                            children: t
                        })]
                    }), (0, s.jsx)(p.d, {
                        checked: o,
                        onCheckedChange: e => {
                            if (!e && !["showImages", "showVideos", "showAlbums"].filter(e => e !== n).some(e => l[e])) {
                                a("At least one content type must remain enabled");
                                return
                            }
                            a(null), m({
                                [n]: e
                            })
                        },
                        className: "mt-1"
                    })]
                })
            }
            var v = t(5413),
                y = t(76046),
                w = t(21971),
                j = t(92241),
                N = t(30894),
                C = t(29602),
                S = t(21109),
                A = t(20669);

            function T(e) {
                let {
                    sortBy: r,
                    onSortChange: t,
                    onSubredditChange: p,
                    onUpdateParams: x,
                    handleSiteChange: T,
                    dataSource: E
                } = e, [P, z] = (0, n.useState)(!1), [F, M] = (0, n.useState)(!1), [_, L] = (0, n.useState)(!1), [B, R] = (0, n.useState)(""), [I, G] = (0, n.useState)([]), [W, D] = (0, n.useState)(!1);
                (0, y.useRouter)();
                let {
                    getCurrentFilter: H
                } = (0, f.t0)(), {
                    showImages: O,
                    showVideos: U,
                    showAlbums: X
                } = H(), q = (0, C.Fr)(), {
                    site: Y,
                    searchInput: V,
                    onSearchChange: Z
                } = (0, A.E)(), J = (0, n.useRef)(null), K = (0, n.useRef)(null);
                (0, n.useEffect)(() => {
                    let e = setTimeout(async () => {
                        if (B.trim().length < 2) {
                            G([]);
                            return
                        }
                        D(!0);
                        try {
                            let e = await E.searchSubreddits(B.trim(), "all");
                            G(e)
                        } catch (e) {
                            console.error("Failed to search subreddits:", e)
                        } finally {
                            D(!1)
                        }
                    }, 300);
                    return () => clearTimeout(e)
                }, [B, E]);
                let Q = e => {
                        let r = e.replace("r/", ""),
                            t = new URLSearchParams(window.location.search),
                            s = t.get("q") || "",
                            n = t.get("sort") || "hot",
                            a = t.get("t") || "all",
                            i = s.split(" ") || [];
                        if (!i.includes(r)) {
                            let e = [...i, r],
                                s = "".concat(e.join(" "));
                            t.set("q", s), t.set("sort", n), "top" === n && t.set("t", a), t.toString(), Z(s)
                        }
                    },
                    $ = e => {
                        let r = e.replace("r/", "").toLowerCase(),
                            t = new URLSearchParams(window.location.search),
                            s = t.get("sort") || "hot",
                            n = t.get("t") || "all";
                        t.set("q", r), t.set("sort", s), "top" === s && t.set("t", n), t.toString(), Z(r), R(""), z(!1)
                    },
                    ee = e => {
                        if (I.length > 0) {
                            $(I[0].name);
                            return
                        }
                        e.preventDefault(), B.trim() && $(B.trim())
                    };
                (0, n.useEffect)(() => {
                    function e(e) {
                        J.current && !J.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), R(""), G([]), z(!1))
                    }
                    return P && document.addEventListener("click", e, {
                        capture: !0
                    }), () => {
                        document.removeEventListener("click", e, {
                            capture: !0
                        })
                    }
                }, [P]), (0, n.useEffect)(() => {
                    function e(e) {
                        K.current && !K.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), R(""), G([]), z(!1))
                    }
                    return P && q && document.addEventListener("click", e, {
                        capture: !0
                    }), () => {
                        document.removeEventListener("click", e, {
                            capture: !0
                        })
                    }
                }, [P, q]);
                let er = "bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-2xl p-1.5 z-[60]",
                    et = "cursor-pointer rounded-md px-3 py-2.5 text-sm text-zinc-400 outline-none focus:bg-zinc-800 focus:text-white hover:bg-zinc-800 hover:text-white data-[state=open]:bg-zinc-800 data-[state=open]:text-white transition-colors flex items-center justify-between group/item";
                return (0, s.jsxs)("div", {
                    className: "sticky top-0 z-40",
                    children: [(0, s.jsx)(N.$, {
                        children: (0, s.jsxs)("div", {
                            className: "bg-black/80 backdrop-blur-sm border-b border-white/10 px-4 h-14 md:h-16 lg:h-14 flex items-center justify-between",
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, s.jsx)(h.$, {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "[&_svg]:size-5 md:[&_svg]:size-6 text-gray-400 hover:bg-zinc-800 hover:text-gray-400 ",
                                    onClick: () => L(!0),
                                    children: (0, s.jsx)(a.A, {})
                                }), (0, s.jsx)(S.A, {
                                    site: "reddit.com"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [!q && (0, s.jsxs)("div", {
                                    ref: J,
                                    className: "relative flex items-center",
                                    children: [(0, s.jsx)(d.P.div, {
                                        animate: {
                                            x: P ? -410 : 0
                                        },
                                        transition: {
                                            duration: .3
                                        },
                                        children: (0, s.jsx)(w.x, {
                                            value: "reddit.com",
                                            onSelect: e => T({
                                                site: e
                                            })
                                        })
                                    }), (0, s.jsx)(u.N, {
                                        children: P ? (0, s.jsxs)(d.P.div, {
                                            initial: {
                                                width: 0,
                                                opacity: 0
                                            },
                                            animate: {
                                                width: "400px",
                                                opacity: 1
                                            },
                                            exit: {
                                                width: 0,
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: .3
                                            },
                                            className: "absolute right-0 top-1/2 transform -translate-y-1/2",
                                            children: [(0, s.jsxs)("form", {
                                                onSubmit: ee,
                                                className: "relative",
                                                children: [(0, s.jsx)(g.p, {
                                                    className: "w-full h-10 md:h-12 bg-gray-900/90 border-gray-700 text-white placeholder:text-gray-400  focus-visible:ring-1 focus-visible:ring-gray-600 focus-visible:border-gray-600",
                                                    placeholder: "Search subreddits...",
                                                    value: B,
                                                    spellCheck: !1,
                                                    onChange: e => R(e.target.value),
                                                    autoFocus: !0
                                                }), B && (0, s.jsx)(h.$, {
                                                    type: "button",
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:bg-zinc-800 hover:text-gray-400 ",
                                                    onClick: () => R(""),
                                                    children: (0, s.jsx)(i.A, {
                                                        className: "h-4 w-4 md:h-5 md:w-5"
                                                    })
                                                })]
                                            }), I.length > 0 && (0, s.jsx)("div", {
                                                className: "absolute top-full left-0 right-0 mt-1 bg-gray-900 border border-gray-800 rounded-md shadow-lg overflow-hidden max-h-60 overflow-y-auto",
                                                children: I.map(e => (0, s.jsx)("div", {
                                                    className: "p-2 hover:bg-gray-800 border-b border-gray-800 last:border-0",
                                                    children: (0, s.jsxs)("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [(0, s.jsx)("button", {
                                                            onClick: () => $(e.name),
                                                            className: "flex-grow text-left",
                                                            children: (0, s.jsx)("span", {
                                                                className: "text-sm md:text-base font-semibold",
                                                                style: {
                                                                    color: e.isNSFW ? "rgb(255, 20, 147)" : "inherit"
                                                                },
                                                                children: e.name
                                                            })
                                                        }), (0, s.jsx)("button", {
                                                            onClick: () => Q(e.name),
                                                            className: "[&_svg]:size-5 md:[&_svg]:size-6 text-gray-400 hover:text-white ml-2 p-1",
                                                            title: "Add to feed",
                                                            children: (0, s.jsx)(m.A, {})
                                                        })]
                                                    })
                                                }, e.name))
                                            })]
                                        }) : (0, s.jsx)(h.$, {
                                            variant: "ghost",
                                            size: "icon",
                                            className: "[&_svg]:size-6  md:[&_svg]:size-6 text-gray-400 hover:bg-zinc-800 hover:text-gray-400  ml-2",
                                            onClick: () => z(!0),
                                            children: (0, s.jsx)(l.A, {})
                                        })
                                    })]
                                }), q && (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)(w.x, {
                                        value: "reddit.com",
                                        onSelect: e => T({
                                            site: e
                                        })
                                    }), (0, s.jsx)(h.$, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "[&_svg]:size-6  md:[&_svg]:size-6 text-gray-400 hover:bg-zinc-800 hover:text-gray-400 ",
                                        onClick: () => z(!0),
                                        children: (0, s.jsx)(l.A, {})
                                    })]
                                }), (0, s.jsxs)(b.rI, {
                                    children: [(0, s.jsx)(b.ty, {
                                        asChild: !0,
                                        children: (0, s.jsx)(h.$, {
                                            variant: "ghost",
                                            className: "text-gray-400 hover:bg-zinc-800 hover:text-gray-400 ",
                                            children: (0, s.jsx)("span", {
                                                className: "truncate font-medium text-sm",
                                                children: r.includes("top?t=") ? r.split("=")[1].charAt(0).toUpperCase() + r.split("=")[1].slice(1) : r.split("?")[0].charAt(0).toUpperCase() + r.split("?")[0].slice(1)
                                            })
                                        })
                                    }), (0, s.jsxs)(b.SQ, {
                                        align: "end",
                                        className: er,
                                        children: [(0, s.jsx)(b._2, {
                                            onClick: () => t("hot"),
                                            className: et,
                                            children: "Hot"
                                        }), (0, s.jsxs)(b.lv, {
                                            children: [(0, s.jsxs)(b.nV, {
                                                className: et,
                                                children: [(0, s.jsx)("span", {
                                                    children: "Top"
                                                }), (0, s.jsx)(o.A, {
                                                    className: "h-4 w-4 ml-auto transition-transform group-hover/item:translate-x-0.5"
                                                })]
                                            }), (0, s.jsx)(b.dc, {
                                                children: (0, s.jsx)(b.M5, {
                                                    className: er,
                                                    sideOffset: 7,
                                                    children: [{
                                                        label: "Now",
                                                        val: "top?t=hour"
                                                    }, {
                                                        label: "Today",
                                                        val: "top?t=day"
                                                    }, {
                                                        label: "Week",
                                                        val: "top?t=week"
                                                    }, {
                                                        label: "Month",
                                                        val: "top?t=month"
                                                    }, {
                                                        label: "Year",
                                                        val: "top?t=year"
                                                    }, {
                                                        label: "All Time",
                                                        val: "top?t=all"
                                                    }].map(e => (0, s.jsx)(b._2, {
                                                        onClick: () => t(e.val),
                                                        className: et,
                                                        children: e.label
                                                    }, e.val))
                                                })
                                            })]
                                        }), (0, s.jsx)(b._2, {
                                            onClick: () => t("new"),
                                            className: et,
                                            children: "New"
                                        }), (0, s.jsx)(b._2, {
                                            onClick: () => t("rising"),
                                            className: et,
                                            children: "Rising"
                                        })]
                                    })]
                                }), (0, s.jsx)(h.$, {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "text-gray-400 hover:bg-zinc-800 hover:text-gray-400 ",
                                    onClick: () => M(!0),
                                    children: (0, s.jsx)(c.A, {
                                        fill: O && U && X ? "none" : "currentColor"
                                    })
                                }), (0, s.jsx)(j.x, {})]
                            })]
                        })
                    }), q && P && (0, s.jsx)("div", {
                        ref: K,
                        className: "fixed inset-x-0 top-14 bg-black/80 backdrop-blur-sm border-b border-white/10 z-50",
                        children: (0, s.jsxs)("div", {
                            className: "p-4",
                            children: [(0, s.jsxs)("form", {
                                onSubmit: ee,
                                className: "relative",
                                children: [(0, s.jsx)(g.p, {
                                    className: "w-full h-12 bg-gray-900/90 border-gray-700 text-white placeholder:text-gray-400  focus-visible:ring-1 focus-visible:ring-gray-600 focus-visible:border-gray-600 text-base",
                                    placeholder: "Search subreddits...",
                                    value: B,
                                    spellCheck: !1,
                                    onChange: e => R(e.target.value),
                                    autoFocus: !0
                                }), B && (0, s.jsx)(h.$, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "icon",
                                    className: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white",
                                    onClick: () => R(""),
                                    children: (0, s.jsx)(i.A, {
                                        className: "h-5 w-5 md:h-6 md:w-6"
                                    })
                                })]
                            }), I.length > 0 && (0, s.jsx)("div", {
                                className: "mt-0 bg-gray-900 border border-gray-800 rounded-md shadow-lg overflow-hidden max-h-60 overflow-y-auto",
                                children: I.map(e => (0, s.jsx)("div", {
                                    className: "p-3 hover:bg-gray-800 border-b border-gray-800 last:border-0",
                                    children: (0, s.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [(0, s.jsx)("button", {
                                            onClick: () => $(e.name),
                                            className: "flex-grow text-left",
                                            children: (0, s.jsx)("span", {
                                                className: "text-base font-semibold",
                                                style: {
                                                    color: e.isNSFW ? "rgb(255, 20, 147)" : "inherit"
                                                },
                                                children: e.name
                                            })
                                        }), (0, s.jsx)("button", {
                                            onClick: () => Q(e.name),
                                            className: "text-gray-400 hover:text-white ml-3 p-2",
                                            title: "Add to feed",
                                            children: (0, s.jsx)(m.A, {
                                                className: "h-5 w-5 md:h-6 md:w-6"
                                            })
                                        })]
                                    })
                                }, e.name))
                            })]
                        })
                    }), (0, s.jsx)(k, {
                        isOpen: F,
                        onClose: () => M(!1)
                    }), (0, s.jsx)(v.B, {
                        site: "reddit.com",
                        isOpen: _,
                        sortBy: r,
                        onOpen: () => L(!0),
                        onClose: () => L(!1),
                        onUpdateParams: x
                    })]
                })
            }
        },
        30894: (e, r, t) => {
            t.d(r, {
                $: () => i
            });
            var s = t(95155),
                n = t(12115);
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50,
                        [r, t] = (0, n.useState)(!0),
                        [s, a] = (0, n.useState)(0);
                    return (0, n.useEffect)(() => {
                        let r = () => {
                            let r = window.scrollY;
                            if (r <= 10) {
                                t(!0), a(r);
                                return
                            }
                            Math.abs(r - s) > e && (t(s > r), a(r))
                        };
                        return window.addEventListener("scroll", r), () => window.removeEventListener("scroll", r)
                    }, [s, e]), r
                },
                i = e => {
                    let {
                        children: r
                    } = e, t = a();
                    return (0, s.jsx)("div", {
                        className: "fixed top-0 left-0 right-0 transition-transform duration-300 ".concat(t ? "translate-y-0" : "-translate-y-full"),
                        style: {
                            zIndex: 40
                        },
                        children: r
                    })
                }
        },
        5413: (e, r, t) => {
            t.d(r, {
                B: () => _
            });
            var s = t(95155),
                n = t(12115),
                a = t(46647),
                i = t(25683),
                m = t(51719),
                l = t(46967),
                o = t(99053),
                c = t(33473),
                d = t(90426),
                u = t(40767),
                b = t(82929),
                h = t(20591),
                g = t(66889),
                p = t(76046),
                f = t(58810),
                k = t(97709),
                x = t(1649),
                v = t(87421),
                y = t(29602);
            let w = n.forwardRef((e, r) => {
                let {
                    className: t,
                    orientation: n = "horizontal",
                    decorative: a = !0,
                    ...i
                } = e;
                return (0, s.jsx)(v.b, {
                    ref: r,
                    decorative: a,
                    orientation: n,
                    className: (0, y.cn)("shrink-0 bg-border", "horizontal" === n ? "h-[1px] w-full" : "h-full w-[1px]", t),
                    ...i
                })
            });
            w.displayName = v.b.displayName;
            var j = t(3392);
            let N = JSON.parse('[{"category":"Top 25","subreddits":[{"name":"r/gonewild","members":"4.4m"},{"name":"r/nsfw","members":"4.0m"},{"name":"r/RealGirls","members":"3.6m"},{"name":"r/porn","members":"3.1m"},{"name":"r/cumsluts","members":"2.9m"},{"name":"r/NSFW_GIF","members":"2.8m"},{"name":"r/LegalTeens","members":"2.8m"},{"name":"r/GirlsFinishingTheJob","members":"2.6m"},{"name":"r/collegesluts","members":"2.5m"},{"name":"r/AsiansGoneWild","members":"2.5m"},{"name":"r/pussy","members":"2.5m"},{"name":"r/BreedingMaterial","members":"2.4m"},{"name":"r/BustyPetite","members":"2.3m"},{"name":"r/nsfwhardcore","members":"2.2m"},{"name":"r/PetiteGoneWild","members":"2.2m"},{"name":"r/milf","members":"2.2m"},{"name":"r/TittyDrop","members":"2.1m"},{"name":"r/ass","members":"2.1m"},{"name":"r/adorableporn","members":"2.1m"},{"name":"r/holdthemoan","members":"1.9m"},{"name":"r/BiggerThanYouThought","members":"1.9m"},{"name":"r/porninfifteenseconds","members":"1.8m"},{"name":"r/pawg","members":"1.8m"},{"name":"r/OnOff","members":"1.6m"},{"name":"r/tiktokthots","members":"1.3m"}]},{"category":"Top 100","subreddits":[{"name":"r/gonewild","members":"4.4m"},{"name":"r/nsfw","members":"4.0m"},{"name":"r/RealGirls","members":"3.6m"},{"name":"r/hentai","members":"3.1m"},{"name":"r/porn","members":"3.1m"},{"name":"r/cumsluts","members":"2.9m"},{"name":"r/NSFW_GIF","members":"2.8m"},{"name":"r/rule34","members":"2.8m"},{"name":"r/LegalTeens","members":"2.8m"},{"name":"r/GirlsFinishingTheJob","members":"2.6m"},{"name":"r/collegesluts","members":"2.5m"},{"name":"r/AsiansGoneWild","members":"2.5m"},{"name":"r/pussy","members":"2.5m"},{"name":"r/BreedingMaterial","members":"2.4m"},{"name":"r/BustyPetite","members":"2.3m"},{"name":"r/nsfwhardcore","members":"2.2m"},{"name":"r/PetiteGoneWild","members":"2.2m"},{"name":"r/milf","members":"2.2m"},{"name":"r/TittyDrop","members":"2.1m"},{"name":"r/ass","members":"2.1m"},{"name":"r/Nudes","members":"2.0m"},{"name":"r/holdthemoan","members":"1.9m"},{"name":"r/BiggerThanYouThought","members":"1.9m"},{"name":"r/nsfw_gifs","members":"1.9m"},{"name":"r/Nude_Selfie","members":"1.9m"},{"name":"r/boobs","members":"1.8m"},{"name":"r/porninfifteenseconds","members":"1.8m"},{"name":"r/pawg","members":"1.8m"},{"name":"r/LipsThatGrip","members":"1.8m"},{"name":"r/celebnsfw","members":"1.8m"},{"name":"r/Blowjobs","members":"1.8m"},{"name":"r/latinas","members":"1.7m"},{"name":"r/juicyasians","members":"1.7m"},{"name":"r/bigasses","members":"1.7m"},{"name":"r/anal","members":"1.6m"},{"name":"r/OnOff","members":"1.6m"},{"name":"r/curvy","members":"1.6m"},{"name":"r/lesbians","members":"1.5m"},{"name":"r/xsmallgirls","members":"1.5m"},{"name":"r/AsianHotties","members":"1.5m"},{"name":"r/squirting","members":"1.5m"},{"name":"r/Amateur","members":"1.5m"},{"name":"r/HENTAI_GIF","members":"1.4m"},{"name":"r/gothsluts","members":"1.4m"},{"name":"r/SheLikesItRough","members":"1.4m"},{"name":"r/18_19","members":"1.4m"},{"name":"r/Gonewild18","members":"1.4m"},{"name":"r/BigBoobsGW","members":"1.4m"},{"name":"r/barelylegalteens","members":"1.4m"},{"name":"r/trashyboners","members":"1.3m"},{"name":"r/freeuse","members":"1.3m"},{"name":"r/chubby","members":"1.3m"},{"name":"r/Hotwife","members":"1.3m"},{"name":"r/grool","members":"1.3m"},{"name":"r/asshole","members":"1.3m"},{"name":"r/deepthroat","members":"1.3m"},{"name":"r/Cuckold","members":"1.3m"},{"name":"r/cumfetish","members":"1.3m"},{"name":"r/PublicFlashing","members":"1.3m"},{"name":"r/workgonewild","members":"1.3m"},{"name":"r/nsfwcosplay","members":"1.2m"},{"name":"r/Stacked","members":"1.2m"},{"name":"r/HappyEmbarrassedGirls","members":"1.2m"},{"name":"r/SluttyConfessions","members":"1.2m"},{"name":"r/thick","members":"1.2m"},{"name":"r/asstastic","members":"1.2m"},{"name":"r/palegirls","members":"1.2m"},{"name":"r/gonewild30plus","members":"1.2m"},{"name":"r/SexInFrontOfOthers","members":"1.2m"},{"name":"r/creampies","members":"1.2m"},{"name":"r/dirtysmall","members":"1.2m"},{"name":"r/Upskirt","members":"1.2m"},{"name":"r/WatchItForThePlot","members":"1.2m"},{"name":"r/amateurcumsluts","members":"1.2m"},{"name":"r/fuckdoll","members":"1.1m"},{"name":"r/bigtiddygothgf","members":"1.1m"},{"name":"r/TooCuteForPorn","members":"1.1m"},{"name":"r/FitNakedGirls","members":"1.1m"},{"name":"r/TinyTits","members":"1.1m"},{"name":"r/traps","members":"1.1m"},{"name":"r/altgonewild","members":"1.0m"},{"name":"r/girlsinyogapants","members":"1.0m"},{"name":"r/gettingherselfoff","members":"1.0m"},{"name":"r/CollegeAmateurs","members":"1.0m"},{"name":"r/ThickThighs","members":"1.0m"},{"name":"r/gonewildcouples","members":"1.0m"},{"name":"r/Ebony","members":"995.1k"},{"name":"r/fitgirls","members":"993.6k"},{"name":"r/AnalGW","members":"991.7k"},{"name":"r/booty_queens","members":"991.2k"},{"name":"r/hugeboobs","members":"967.6k"},{"name":"r/CuteLittleButts","members":"967.6k"},{"name":"r/GWCouples","members":"939.4k"},{"name":"r/GirlswithGlasses","members":"937.2k"},{"name":"r/assholegonewild","members":"937.0k"},{"name":"r/Boobies","members":"929.6k"},{"name":"r/bodyperfection","members":"918.7k"},{"name":"r/wifesharing","members":"907.6k"},{"name":"r/homemadexxx","members":"833.8k"}]},{"category":"Top Female","subreddits":[{"name":"r/gonewild","members":"4.4m"},{"name":"r/nsfw","members":"4.0m"},{"name":"r/RealGirls","members":"3.6m"},{"name":"r/hentai","members":"3.1m"},{"name":"r/porn","members":"3.1m"},{"name":"r/cumsluts","members":"2.9m"},{"name":"r/NSFW_GIF","members":"2.8m"},{"name":"r/rule34","members":"2.8m"},{"name":"r/LegalTeens","members":"2.8m"},{"name":"r/GirlsFinishingTheJob","members":"2.6m"},{"name":"r/collegesluts","members":"2.5m"},{"name":"r/AsiansGoneWild","members":"2.5m"},{"name":"r/pussy","members":"2.5m"},{"name":"r/BreedingMaterial","members":"2.4m"},{"name":"r/BustyPetite","members":"2.3m"},{"name":"r/nsfwhardcore","members":"2.2m"},{"name":"r/PetiteGoneWild","members":"2.2m"},{"name":"r/milf","members":"2.2m"},{"name":"r/TittyDrop","members":"2.1m"},{"name":"r/ass","members":"2.1m"},{"name":"r/holdthemoan","members":"1.9m"},{"name":"r/BiggerThanYouThought","members":"1.9m"},{"name":"r/nsfw_gifs","members":"1.9m"},{"name":"r/boobs","members":"1.8m"},{"name":"r/porninfifteenseconds","members":"1.8m"},{"name":"r/pawg","members":"1.8m"},{"name":"r/LipsThatGrip","members":"1.8m"},{"name":"r/celebnsfw","members":"1.8m"},{"name":"r/Blowjobs","members":"1.8m"},{"name":"r/juicyasians","members":"1.7m"},{"name":"r/bigasses","members":"1.7m"},{"name":"r/anal","members":"1.6m"},{"name":"r/OnOff","members":"1.6m"},{"name":"r/curvy","members":"1.6m"},{"name":"r/lesbians","members":"1.5m"},{"name":"r/AsianHotties","members":"1.5m"},{"name":"r/squirting","members":"1.5m"},{"name":"r/Amateur","members":"1.5m"},{"name":"r/HENTAI_GIF","members":"1.4m"},{"name":"r/SheLikesItRough","members":"1.4m"},{"name":"r/18_19","members":"1.4m"},{"name":"r/JizzedToThis","members":"1.4m"},{"name":"r/Gonewild18","members":"1.4m"},{"name":"r/BigBoobsGW","members":"1.4m"},{"name":"r/trashyboners","members":"1.3m"},{"name":"r/freeuse","members":"1.3m"},{"name":"r/Hotwife","members":"1.3m"},{"name":"r/grool","members":"1.3m"},{"name":"r/deepthroat","members":"1.3m"},{"name":"r/cumfetish","members":"1.3m"},{"name":"r/workgonewild","members":"1.3m"},{"name":"r/nsfwcosplay","members":"1.2m"},{"name":"r/Stacked","members":"1.2m"},{"name":"r/thick","members":"1.2m"},{"name":"r/paag","members":"1.2m"},{"name":"r/asstastic","members":"1.2m"},{"name":"r/palegirls","members":"1.2m"},{"name":"r/gonewild30plus","members":"1.2m"},{"name":"r/SexInFrontOfOthers","members":"1.2m"},{"name":"r/creampies","members":"1.2m"},{"name":"r/dirtysmall","members":"1.2m"},{"name":"r/Upskirt","members":"1.2m"},{"name":"r/WatchItForThePlot","members":"1.2m"},{"name":"r/amateurcumsluts","members":"1.2m"},{"name":"r/TooCuteForPorn","members":"1.1m"},{"name":"r/boobbounce","members":"1.1m"},{"name":"r/TinyTits","members":"1.1m"},{"name":"r/altgonewild","members":"1.0m"},{"name":"r/girlsinyogapants","members":"1.0m"},{"name":"r/gettingherselfoff","members":"1.0m"},{"name":"r/fitgirls","members":"993.6k"},{"name":"r/hugeboobs","members":"967.6k"},{"name":"r/CuteLittleButts","members":"967.6k"},{"name":"r/GWCouples","members":"939.4k"},{"name":"r/GirlswithGlasses","members":"937.2k"},{"name":"r/Boobies","members":"929.6k"},{"name":"r/redheads","members":"921.6k"},{"name":"r/bodyperfection","members":"918.7k"},{"name":"r/wifesharing","members":"907.6k"},{"name":"r/Hotchickswithtattoos","members":"882.0k"},{"name":"r/rearpussy","members":"881.3k"},{"name":"r/homemadexxx","members":"833.8k"},{"name":"r/whenitgoesin","members":"810.6k"},{"name":"r/porn_gifs","members":"798.2k"},{"name":"r/FestivalSluts","members":"786.3k"},{"name":"r/StraightGirlsPlaying","members":"785.8k"},{"name":"r/facedownassup","members":"781.2k"},{"name":"r/burstingout","members":"755.6k"},{"name":"r/quiver","members":"749.2k"},{"name":"r/WouldYouFuckMyWife","members":"723.6k"},{"name":"r/tightdresses","members":"718.0k"},{"name":"r/ginger","members":"699.7k"},{"name":"r/NSFW_Snapchat","members":"694.4k"},{"name":"r/gonewildcurvy","members":"694.1k"},{"name":"r/theratio","members":"606.7k"}]},{"category":"Top Male","subreddits":[{"name":"r/MassiveCock","members":"713.7k"},{"name":"r/Sissies","members":"650.9k"},{"name":"r/GaybrosGoneWild","members":"563.1k"},{"name":"r/gayporn","members":"474.8k"},{"name":"r/cock","members":"426.8k"},{"name":"r/TotallyStraight","members":"394.4k"},{"name":"r/ratemycock","members":"387.9k"},{"name":"r/twinks","members":"381.6k"},{"name":"r/penis","members":"377.4k"},{"name":"r/ladybonersgw","members":"370.0k"},{"name":"r/PublicBoys","members":"295.7k"},{"name":"r/gaynsfw","members":"288.5k"},{"name":"r/broslikeus","members":"280.2k"},{"name":"r/RedditorCum","members":"266.0k"},{"name":"r/gaycumsluts","members":"224.8k"},{"name":"r/gaymersgonewild","members":"220.4k"},{"name":"r/jacking","members":"210.7k"},{"name":"r/foreskin","members":"208.9k"},{"name":"r/gaystoriesgonewild","members":"199.7k"},{"name":"r/CumCannonAddicts","members":"185.9k"},{"name":"r/BonersInPublic","members":"179.9k"},{"name":"r/BarebackGayPorn","members":"164.9k"},{"name":"r/gaycruising","members":"163.8k"},{"name":"r/GayGifs","members":"162.3k"},{"name":"r/gaypornhunters","members":"147.3k"},{"name":"r/Androgynoushotties","members":"137.0k"},{"name":"r/GayKink","members":"136.5k"},{"name":"r/CuteGuyButts","members":"135.1k"},{"name":"r/gaybears","members":"129.1k"},{"name":"r/CockOutline","members":"128.9k"},{"name":"r/DickSlips","members":"123.4k"},{"name":"r/manass","members":"122.3k"},{"name":"r/TwinkLove","members":"116.5k"},{"name":"r/MaleUnderwear","members":"103.9k"},{"name":"r/hotguyswithtattoos","members":"99.3k"},{"name":"r/men_in_panties","members":"91.5k"},{"name":"r/gayotters","members":"89.2k"},{"name":"r/GayDaddiesPics","members":"89.1k"},{"name":"r/chesthairporn","members":"87.9k"},{"name":"r/jockstraps","members":"73.7k"},{"name":"r/GayFreeUse","members":"71.5k"},{"name":"r/lovegaymale","members":"68.0k"},{"name":"r/notgayporn","members":"67.9k"},{"name":"r/UniformedMen","members":"67.3k"},{"name":"r/nopullingout","members":"65.6k"},{"name":"r/gayholdthemoan","members":"64.9k"},{"name":"r/ChubbyDudes","members":"64.4k"},{"name":"r/ManSex","members":"57.8k"},{"name":"r/insanelyhairymen","members":"54.5k"},{"name":"r/forearmporn","members":"50.6k"},{"name":"r/gaypornwithplot","members":"49.2k"},{"name":"r/gayfacials","members":"37.7k"},{"name":"r/gayvideos","members":"37.3k"},{"name":"r/manlove","members":"37.2k"},{"name":"r/GaySex","members":"36.3k"},{"name":"r/tightywhities","members":"35.8k"},{"name":"r/boxershorts","members":"32.4k"},{"name":"r/CondomToBareback","members":"31.1k"},{"name":"r/GayPainal","members":"29.0k"},{"name":"r/Scally","members":"26.6k"},{"name":"r/WrestleWithThePackage","members":"26.4k"},{"name":"r/CumCausesCum","members":"26.4k"},{"name":"r/Homosexual","members":"25.8k"},{"name":"r/CubsGoneWild","members":"25.3k"},{"name":"r/GayMuscleWorship","members":"25.1k"},{"name":"r/malemodels","members":"22.9k"},{"name":"r/bearbros","members":"16.7k"},{"name":"r/MaleFootGear","members":"6481"},{"name":"r/cumclothes","members":"5697"},{"name":"r/MaleBraceFace","members":"1645"}]},{"category":"Top Trans","subreddits":[{"name":"r/traps","members":"1.1m"},{"name":"r/FemBoys","members":"1.0m"},{"name":"r/futanari","members":"842.9k"},{"name":"r/transporn","members":"640.1k"},{"name":"r/Tgirls","members":"631.6k"},{"name":"r/GoneWildTrans","members":"603.2k"},{"name":"r/traphentai","members":"581.1k"},{"name":"r/bigdickgirl","members":"532.9k"},{"name":"r/Shemales","members":"488.5k"},{"name":"r/tscum","members":"413.8k"},{"name":"r/ShemalesParadise","members":"397.7k"},{"name":"r/sissyhypno","members":"351.1k"},{"name":"r/dickgirls","members":"335.5k"},{"name":"r/Sissyperfection","members":"286.8k"},{"name":"r/Tgifs","members":"275.4k"},{"name":"r/DeliciousTraps","members":"274.7k"},{"name":"r/TSonFM","members":"241.8k"},{"name":"r/tbulges","members":"192.9k"},{"name":"r/shemale_gifs","members":"187.1k"},{"name":"r/LadyCocks","members":"176.9k"},{"name":"r/trapgifs","members":"100.9k"},{"name":"r/amatuer_shemales","members":"89.0k"},{"name":"r/POVTranny","members":"62.4k"},{"name":"r/genderotica","members":"40.0k"},{"name":"r/crossdreaming","members":"8869"}]},{"category":"Hentai","subreddits":[{"name":"r/hentai","members":"3.1m"},{"name":"r/HENTAI_GIF","members":"1.4m"},{"name":"r/doujinshi","members":"476.9k"},{"name":"r/ahegao","members":"377.6k"},{"name":"r/Tentai","members":"357.2k"},{"name":"r/yuri","members":"314.4k"},{"name":"r/wholesomehentai","members":"277.1k"},{"name":"r/CumHentai","members":"261.8k"},{"name":"r/FreeuseHentai","members":"260.9k"},{"name":"r/hentaicaptions","members":"246.3k"},{"name":"r/HentaiPetgirls","members":"215.9k"},{"name":"r/consentacles","members":"191.3k"},{"name":"r/HentaiAnal","members":"166.5k"},{"name":"r/Paizuri","members":"165.9k"},{"name":"r/JerkOffToAnime","members":"150.0k"},{"name":"r/MasturbationHentai","members":"147.0k"},{"name":"r/uncensoredhentai","members":"119.6k"},{"name":"r/OralHentai","members":"88.8k"},{"name":"r/DarkSkinHentai","members":"84.1k"},{"name":"r/yurigif","members":"77.9k"},{"name":"r/SnapMyChoker","members":"32.7k"}]},{"category":"Rule34","subreddits":[{"name":"r/rule34","members":"2.8m"},{"name":"r/Overwatch_Porn","members":"739.9k"},{"name":"r/Naruto_Hentai","members":"471.8k"},{"name":"r/Rule34LoL","members":"445.5k"},{"name":"r/GenshinImpactHentai","members":"409.7k"},{"name":"r/GenshinImpactNSFW","members":"327.0k"},{"name":"r/starwarsnsfw","members":"299.8k"},{"name":"r/NintendoWaifus","members":"287.1k"},{"name":"r/BokuNoEroAcademia","members":"275.1k"},{"name":"r/funpiece","members":"223.5k"},{"name":"r/RWBYNSFW","members":"191.4k"},{"name":"r/2Booty","members":"183.9k"},{"name":"r/valorantrule34","members":"171.5k"},{"name":"r/Rule34RainbowSix","members":"167.0k"},{"name":"r/Bleach_Hentai","members":"165.5k"},{"name":"r/TheLostWoods","members":"159.5k"},{"name":"r/DVaNSFW","members":"138.4k"},{"name":"r/saohentai","members":"130.6k"},{"name":"r/DragonBallNSFW","members":"124.3k"},{"name":"r/KillLaHentai","members":"112.3k"},{"name":"r/DDLCRule34","members":"108.7k"},{"name":"r/ReZeroHentai","members":"99.4k"},{"name":"r/GenshinLewds","members":"90.9k"},{"name":"r/Arknuts","members":"80.8k"},{"name":"r/MyDressUpDarlingNSFW","members":"73.6k"},{"name":"r/TracerNSFW","members":"69.7k"},{"name":"r/DarlingInTheFranXXX","members":"58.1k"},{"name":"r/Ganyu","members":"55.0k"},{"name":"r/Touhou_NSFW","members":"51.2k"}]},{"category":"Alt","subreddits":[{"name":"r/gothsluts","members":"1.4m"},{"name":"r/bigtiddygothgf","members":"1.1m"},{"name":"r/altgonewild","members":"1.0m"},{"name":"r/FestivalSluts","members":"786.3k"},{"name":"r/EGirls","members":"636.3k"},{"name":"r/prettyaltgirls","members":"582.0k"},{"name":"r/emogirls","members":"551.5k"},{"name":"r/PunkGirls","members":"401.4k"},{"name":"r/cat_girls","members":"154.1k"},{"name":"r/SceneGirls","members":"135.2k"},{"name":"r/RaveGirls","members":"113.4k"},{"name":"r/metalgirls","members":"21.7k"}]},{"category":"Amateur","subreddits":[{"name":"r/RealGirls","members":"3.6m"},{"name":"r/Amateur","members":"1.5m"},{"name":"r/homemadexxx","members":"833.8k"},{"name":"r/RealHomePorn","members":"751.6k"},{"name":"r/AmateurPorn","members":"553.6k"},{"name":"r/Nsfw_Amateurs","members":"480.8k"},{"name":"r/homesex","members":"477.7k"},{"name":"r/randomsexiness","members":"386.4k"},{"name":"r/Workoutgonewild","members":"352.3k"},{"name":"r/KissandFuck","members":"162.0k"},{"name":"r/CoupleKissing","members":"135.6k"},{"name":"r/AmateurXXX","members":"85.8k"},{"name":"r/instahotties","members":"74.6k"},{"name":"r/amateurs","members":"59.3k"},{"name":"r/NSFW_GirlfriendVideos","members":"55.7k"},{"name":"r/Bad_ass_girlfriends","members":"33.2k"}]},{"category":"Anal","subreddits":[{"name":"r/anal","members":"1.6m"},{"name":"r/anal_gifs","members":"522.0k"},{"name":"r/Roughanal","members":"498.8k"},{"name":"r/buttsthatgrip","members":"392.9k"},{"name":"r/painal","members":"314.0k"},{"name":"r/CumFromAnal","members":"292.1k"},{"name":"r/upherbutt","members":"277.3k"},{"name":"r/AnalOrgasms","members":"259.7k"},{"name":"r/asslick","members":"192.6k"},{"name":"r/buttsex","members":"152.5k"},{"name":"r/SkinnyAnal","members":"64.1k"},{"name":"r/AnalPorn","members":"40.5k"},{"name":"r/femaleasiananal","members":"30.0k"}]},{"category":"Ecchi","subreddits":[{"name":"r/ecchi","members":"614.3k"},{"name":"r/thighdeology","members":"569.7k"},{"name":"r/AnimeMILFS","members":"448.0k"},{"name":"r/Animewallpaper","members":"262.9k"},{"name":"r/waifusgonewild","members":"248.6k"},{"name":"r/AnimeBooty","members":"243.4k"},{"name":"r/pantsu","members":"189.1k"},{"name":"r/dekaihentai","members":"182.0k"},{"name":"r/AraAra","members":"180.7k"},{"name":"r/animebodysuits","members":"164.4k"},{"name":"r/Nekomimi","members":"160.7k"},{"name":"r/Artistic_Hentai","members":"151.9k"},{"name":"r/officelady","members":"149.4k"},{"name":"r/OppaiLove","members":"149.3k"},{"name":"r/WaifusOnCouch","members":"147.9k"},{"name":"r/KuroiHada","members":"147.8k"},{"name":"r/chiisaihentai","members":"143.9k"},{"name":"r/UpskirtHentai","members":"126.7k"},{"name":"r/BigAnimeTiddies","members":"126.4k"},{"name":"r/HentaiSchoolGirls","members":"119.4k"},{"name":"r/AverageAnimeTiddies","members":"118.8k"},{"name":"r/swimsuithentai","members":"112.7k"},{"name":"r/ZettaiRyouiki","members":"104.0k"},{"name":"r/thighhighhentai","members":"103.8k"},{"name":"r/AnimeFeets","members":"102.9k"},{"name":"r/animemidriff","members":"97.0k"},{"name":"r/Sukebei","members":"95.9k"},{"name":"r/ChurchofBooty","members":"87.7k"},{"name":"r/ecchigifs","members":"84.4k"},{"name":"r/SoakedHentai","members":"81.8k"},{"name":"r/streetmoe","members":"79.9k"},{"name":"r/animelegs","members":"72.6k"},{"name":"r/rippedanimelegwear","members":"69.2k"},{"name":"r/handholding","members":"68.9k"},{"name":"r/animearmpits","members":"68.4k"},{"name":"r/kemonomimi","members":"66.2k"},{"name":"r/Uniform_Hentai","members":"65.8k"},{"name":"r/animepointyears","members":"64.8k"},{"name":"r/AnimePussy","members":"64.5k"},{"name":"r/SportsHentai","members":"62.1k"},{"name":"r/HentaiSlutMarks","members":"61.7k"},{"name":"r/LewdAnimeGirls","members":"60.6k"},{"name":"r/Lewd_Not_Hentai","members":"59.8k"},{"name":"r/Fitmoe","members":"58.3k"},{"name":"r/buttfangs","members":"57.2k"},{"name":"r/shorthairedwaifus","members":"56.1k"},{"name":"r/Moescape","members":"55.8k"},{"name":"r/EroAltGirls","members":"55.3k"},{"name":"r/skindentation","members":"43.0k"},{"name":"r/BikiniMoe","members":"42.8k"},{"name":"r/Fuckubus","members":"42.6k"},{"name":"r/wombtattoos","members":"41.7k"},{"name":"r/lowlegsheaven","members":"41.0k"},{"name":"r/2DTittyTouching","members":"40.3k"},{"name":"r/animelegwear","members":"38.1k"},{"name":"r/animebutts","members":"34.2k"},{"name":"r/silverhair","members":"29.2k"},{"name":"r/AshiHentai","members":"27.8k"},{"name":"r/Sweatymoe","members":"26.7k"},{"name":"r/ChurchofBelly","members":"26.2k"},{"name":"r/EvilMoe","members":"25.3k"},{"name":"r/Patchuu","members":"25.0k"},{"name":"r/Artistic_Ecchi","members":"24.8k"},{"name":"r/reversebunnysuit","members":"24.3k"},{"name":"r/tyingherhairup","members":"23.1k"},{"name":"r/ChinaDress","members":"20.2k"},{"name":"r/KeyholeHentai","members":"19.3k"},{"name":"r/ClingingClothes","members":"18.5k"},{"name":"r/Futuremoe","members":"13.7k"}]},{"category":"Fetish","subreddits":[{"name":"r/rape_hentai","members":"378.3k"},{"name":"r/HelplessHentai","members":"318.5k"},{"name":"r/FreeuseHentai","members":"260.9k"},{"name":"r/GameOverGirls","members":"239.3k"},{"name":"r/netorare","members":"200.0k"},{"name":"r/cumflation","members":"192.9k"},{"name":"r/HypnoHentai","members":"182.4k"},{"name":"r/HentaiForcedOrgasms","members":"136.3k"},{"name":"r/StuckHentai","members":"135.5k"},{"name":"r/NTR","members":"128.1k"},{"name":"r/HardcoreHentaiBondage","members":"105.8k"},{"name":"r/corruptionhentai","members":"104.5k"},{"name":"r/MindBreak","members":"95.0k"},{"name":"r/HookedUpHentai","members":"91.3k"},{"name":"r/BimboHentai","members":"69.3k"},{"name":"r/NSFWTiedTogether","members":"66.1k"},{"name":"r/hentaichastity","members":"62.6k"},{"name":"r/PredicamentHentai","members":"56.0k"},{"name":"r/HentaiBodyWriting","members":"48.7k"},{"name":"r/HentaiHucows","members":"42.6k"},{"name":"r/HentaiBreathPlay","members":"41.0k"}]},{"category":"Futa","subreddits":[{"name":"r/futanari","members":"842.9k"},{"name":"r/traphentai","members":"581.1k"},{"name":"r/FutanariPegging","members":"278.8k"},{"name":"r/DeliciousTraps","members":"274.7k"},{"name":"r/FutaCum","members":"195.0k"},{"name":"r/hugefutanari","members":"175.2k"},{"name":"r/FutanariHentai","members":"115.5k"},{"name":"r/CuteTraps","members":"104.0k"},{"name":"r/futanaria","members":"33.5k"}]},{"category":"Asian","subreddits":[{"name":"r/AsiansGoneWild","members":"2.5m"},{"name":"r/juicyasians","members":"1.7m"},{"name":"r/AsianHotties","members":"1.5m"},{"name":"r/paag","members":"1.2m"},{"name":"r/AsianNSFW","members":"941.8k"},{"name":"r/bustyasians","members":"717.8k"},{"name":"r/NSFW_Japan","members":"660.5k"},{"name":"r/rice_cakes","members":"596.7k"},{"name":"r/JapanesePorn2","members":"581.2k"},{"name":"r/realasians","members":"503.2k"},{"name":"r/AsianPorn","members":"469.2k"},{"name":"r/AsianCuties","members":"363.7k"},{"name":"r/AsianCumsluts","members":"350.8k"},{"name":"r/kpopfap","members":"331.7k"},{"name":"r/javdreams","members":"294.6k"},{"name":"r/NSFW_China","members":"263.8k"},{"name":"r/AsianPussy","members":"248.5k"},{"name":"r/AsianBlowjobs","members":"222.3k"},{"name":"r/AsianFetish","members":"209.3k"},{"name":"r/kpics","members":"203.9k"},{"name":"r/asian_gifs","members":"172.0k"},{"name":"r/AmateurAsianGirls","members":"146.3k"},{"name":"r/BLACKEDJAV","members":"110.9k"},{"name":"r/prettyasiangirls","members":"101.2k"},{"name":"r/PetiteJAV","members":"93.4k"},{"name":"r/AsianAsshole","members":"87.0k"},{"name":"r/Jav_Creampies","members":"69.7k"},{"name":"r/AsianNipples","members":"64.9k"},{"name":"r/AsianChicks","members":"52.2k"},{"name":"r/Asian_Fever","members":"46.0k"}]},{"category":"Ass","subreddits":[{"name":"r/ass","members":"2.1m"},{"name":"r/pawg","members":"1.8m"},{"name":"r/bigasses","members":"1.7m"},{"name":"r/paag","members":"1.2m"},{"name":"r/asstastic","members":"1.2m"},{"name":"r/CuteLittleButts","members":"967.6k"},{"name":"r/SpreadEm","members":"748.8k"},{"name":"r/twerking","members":"718.3k"},{"name":"r/ButtsAndBareFeet","members":"696.1k"},{"name":"r/BubbleButts","members":"688.0k"},{"name":"r/booty","members":"657.3k"},{"name":"r/assinthong","members":"607.2k"},{"name":"r/whooties","members":"587.7k"},{"name":"r/CentaurGirls","members":"425.5k"},{"name":"r/BoltedOnBooty","members":"225.3k"},{"name":"r/TheUnderbun","members":"201.1k"},{"name":"r/AbsoluteWeapons","members":"103.2k"},{"name":"r/AssOnTheGlass","members":"83.3k"},{"name":"r/hugeass","members":"57.8k"},{"name":"r/booty_gifs","members":"54.8k"},{"name":"r/HighResASS","members":"37.6k"},{"name":"r/assgifs","members":"25.6k"}]},{"category":"Athletic","subreddits":[{"name":"r/fitgirls","members":"993.6k"},{"name":"r/Ohlympics","members":"318.5k"},{"name":"r/NSFW_Hardbodies","members":"211.8k"},{"name":"r/AthleticGirls","members":"162.0k"},{"name":"r/HottestFemaleAthletes","members":"153.8k"},{"name":"r/waterpoloboobs","members":"17.9k"}]},{"category":"Baddies","subreddits":[{"name":"r/HipHopGoneWild","members":"331.3k"},{"name":"r/Blackcelebrity","members":"93.4k"},{"name":"r/HipHopAllStars","members":"86.7k"},{"name":"r/BadandBoujeeBitches","members":"49.9k"},{"name":"r/BaddieWithAFatty","members":"22.3k"},{"name":"r/BADDIEHUBBB","members":"8710"}]},{"category":"BBW","subreddits":[{"name":"r/chubby","members":"1.3m"},{"name":"r/BBW","members":"726.4k"},{"name":"r/GoneWildPlus","members":"410.5k"},{"name":"r/BBW_Chubby","members":"301.2k"},{"name":"r/BBWGW","members":"169.6k"}]},{"category":"BDSM","subreddits":[{"name":"r/SheLikesItRough","members":"1.4m"},{"name":"r/bdsm","members":"910.5k"},{"name":"r/Bondage","members":"592.6k"},{"name":"r/forcedorgasms","members":"504.6k"},{"name":"r/collared","members":"302.4k"},{"name":"r/Spanking","members":"226.1k"},{"name":"r/gagged","members":"139.5k"},{"name":"r/BDSMerotica","members":"103.3k"},{"name":"r/shinybondage","members":"65.8k"},{"name":"r/Cuffed","members":"58.5k"},{"name":"r/damselsindistress","members":"53.3k"},{"name":"r/BDSM_NoSpam","members":"16.1k"},{"name":"r/ffmaledom","members":"15.1k"}]},{"category":"Bikinis","subreddits":[{"name":"r/bigtitsinbikinis","members":"688.0k"},{"name":"r/tanlines","members":"632.5k"},{"name":"r/bikinis","members":"316.0k"},{"name":"r/MicroBikini","members":"209.6k"},{"name":"r/Bikini","members":"131.9k"},{"name":"r/bikinibridge","members":"131.7k"},{"name":"r/OnePieceVixens","members":"130.4k"},{"name":"r/slingbikini","members":"107.2k"},{"name":"r/realbikinis","members":"103.8k"},{"name":"r/PoolsidePorn","members":"95.3k"},{"name":"r/swimsuit","members":"91.3k"},{"name":"r/swimsuitsuccubus","members":"86.8k"},{"name":"r/SwimmerPorn","members":"74.3k"},{"name":"r/OnePieceSuits","members":"74.1k"},{"name":"r/WickedWeasel","members":"69.3k"},{"name":"r/bbwbikinis","members":"59.8k"},{"name":"r/BigTitsInOnePieces","members":"59.8k"},{"name":"r/underwaterbabes","members":"59.4k"},{"name":"r/BikiniStrip","members":"36.2k"},{"name":"r/SISwimsuitGirls","members":"34.9k"},{"name":"r/swimsuitasians","members":"31.9k"},{"name":"r/SwimmerBabes","members":"31.2k"},{"name":"r/SwimsuitBooty","members":"21.8k"},{"name":"r/swimsuits","members":"21.3k"},{"name":"r/Nsfw_TryOnHaul","members":"18.4k"},{"name":"r/BikiniBlowjobs","members":"17.7k"},{"name":"r/BeachHentai","members":"16.2k"},{"name":"r/Competitiveswimsuits","members":"14.9k"},{"name":"r/Triangl","members":"13.1k"},{"name":"r/bikini_celebs","members":"12.4k"},{"name":"r/ToplessOnePiece","members":"10.6k"},{"name":"r/TitsOutBikiniTop","members":"8472"},{"name":"r/Bathingsuitsgw","members":"8179"},{"name":"r/MSC_irl","members":"8134"},{"name":"r/Pornstarsinbikini","members":"7274"},{"name":"r/swimsuitswomenonly","members":"6109"},{"name":"r/Amateurbikinigw","members":"4887"},{"name":"r/BikiniBeauties","members":"4857"},{"name":"r/BikiniDreams","members":"4720"},{"name":"r/Onepiecerolleddown","members":"2835"},{"name":"r/bikininheels","members":"960"}]},{"category":"Boobs","subreddits":[{"name":"r/BustyPetite","members":"2.3m"},{"name":"r/TittyDrop","members":"2.1m"},{"name":"r/boobs","members":"1.8m"},{"name":"r/Stacked","members":"1.2m"},{"name":"r/boobbounce","members":"1.1m"},{"name":"r/hugeboobs","members":"967.6k"},{"name":"r/Boobies","members":"929.6k"},{"name":"r/naturaltitties","members":"825.9k"},{"name":"r/tits","members":"767.4k"},{"name":"r/burstingout","members":"755.6k"},{"name":"r/homegrowntits","members":"717.0k"},{"name":"r/boltedontits","members":"536.0k"},{"name":"r/EngorgedVeinyBreasts","members":"480.6k"},{"name":"r/torpedotits","members":"412.6k"},{"name":"r/BreastEnvy","members":"360.3k"},{"name":"r/youtubetitties","members":"342.0k"},{"name":"r/Saggy","members":"279.5k"},{"name":"r/underboob","members":"269.3k"},{"name":"r/Busty","members":"233.7k"},{"name":"r/TheHangingBoobs","members":"212.3k"},{"name":"r/bigboobs","members":"189.9k"},{"name":"r/Hugeboobshardcore","members":"185.2k"},{"name":"r/bustybabes","members":"137.0k"},{"name":"r/boobgifs","members":"123.8k"},{"name":"r/handbra","members":"119.9k"},{"name":"r/JustOneBoob","members":"110.3k"},{"name":"r/TheUnderboob","members":"110.0k"},{"name":"r/Bigtitssmalltits","members":"109.0k"}]},{"category":"Celebrity","subreddits":[{"name":"r/celebnsfw","members":"1.8m"},{"name":"r/WatchItForThePlot","members":"1.2m"},{"name":"r/Celebhub","members":"974.4k"},{"name":"r/Celebs","members":"753.2k"},{"name":"r/gentlemanboners","members":"694.8k"},{"name":"r/Celebswithbigtits","members":"658.9k"},{"name":"r/NudeCelebsOnly","members":"644.5k"},{"name":"r/extramile","members":"578.7k"},{"name":"r/BillieEilishGW","members":"406.7k"},{"name":"r/jerkofftoceleb","members":"380.4k"},{"name":"r/CelebrityButts","members":"373.2k"},{"name":"r/OnOffCelebs","members":"332.8k"},{"name":"r/kpopfap","members":"331.7k"},{"name":"r/CardiB","members":"234.0k"},{"name":"r/KylieJenner","members":"230.4k"},{"name":"r/KendallJenner","members":"219.3k"},{"name":"r/pickoneceleb","members":"194.6k"},{"name":"r/nsfwcelebs","members":"194.7k"},{"name":"r/Nicki_Minaj","members":"164.3k"},{"name":"r/CelebsGW","members":"155.2k"},{"name":"r/CelebNudes","members":"126.6k"},{"name":"r/MadisonBeerLewd","members":"123.5k"},{"name":"r/CelebNudeDebut","members":"110.5k"},{"name":"r/CelebrityFeet","members":"107.5k"},{"name":"r/JennaOrtegaLust","members":"106.6k"},{"name":"r/CelebrityMommy","members":"106.8k"},{"name":"r/Rihanna","members":"101.2k"},{"name":"r/AubreyPlaza","members":"90.5k"},{"name":"r/CelebrityLegs","members":"79.3k"},{"name":"r/CelebrityBelly","members":"77.2k"},{"name":"r/CelebrityArmpits","members":"71.3k"},{"name":"r/CelebrityPokies","members":"69.9k"},{"name":"r/nsfwcelebgifs","members":"52.9k"},{"name":"r/LadyGagasAss","members":"39.5k"},{"name":"r/celeb_barefoot","members":"29.5k"},{"name":"r/rawcelebs","members":"15.1k"}]},{"category":"Clothing","subreddits":[{"name":"r/GirlswithGlasses","members":"937.2k"},{"name":"r/seethru","members":"515.7k"},{"name":"r/WhyEvenWearAnything","members":"489.5k"},{"name":"r/pokies","members":"447.6k"},{"name":"r/SchoolgirlsXXX","members":"430.6k"},{"name":"r/WtSSTaDaMiT","members":"280.9k"},{"name":"r/nobra","members":"150.1k"},{"name":"r/NothingUnder","members":"142.2k"},{"name":"r/BarelyClothed","members":"133.5k"},{"name":"r/OnePieceVixens","members":"130.4k"},{"name":"r/leotards","members":"114.1k"},{"name":"r/workoutgirls","members":"101.1k"},{"name":"r/ThinClothing","members":"80.6k"},{"name":"r/CelebrityPokies","members":"69.9k"},{"name":"r/clothedwomen","members":"67.0k"},{"name":"r/sheerpanties","members":"65.9k"},{"name":"r/ClothedForPrejacs","members":"64.8k"},{"name":"r/xmasgirls","members":"52.7k"},{"name":"r/boobstrap","members":"47.4k"},{"name":"r/MuricaNSFW","members":"47.0k"},{"name":"r/Bodystockings","members":"42.4k"},{"name":"r/GirlsWithHeadTowels","members":"39.6k"},{"name":"r/cupless","members":"29.7k"},{"name":"r/SeeThruAsians","members":"22.8k"},{"name":"r/OnlyFansFashionistas","members":"22.0k"},{"name":"r/SheerExcitement","members":"18.7k"},{"name":"r/Boob_Holes","members":"12.3k"},{"name":"r/ComfyBabes","members":"9512"},{"name":"r/wintergirls","members":"8345"},{"name":"r/ThinLayer","members":"7105"},{"name":"r/goneclothed","members":"6050"},{"name":"r/puffy","members":"4539"},{"name":"r/BarelyTied","members":"2438"},{"name":"r/LittleWhiteShirt","members":"1684"},{"name":"r/BowsRibbonsHeadbands","members":"602"}]},{"category":"Cosplay","subreddits":[{"name":"r/nsfwcosplay","members":"1.2m"},{"name":"r/cosplaygirls","members":"1.2m"},{"name":"r/cosplaybabes","members":"768.8k"},{"name":"r/CosplayPornVideos","members":"434.6k"},{"name":"r/cosplaybutts","members":"362.4k"},{"name":"r/CosplayLewd","members":"322.7k"},{"name":"r/CosplayNSFW","members":"189.6k"},{"name":"r/CosplayNation","members":"159.0k"},{"name":"r/cat_girls","members":"154.1k"},{"name":"r/ParodyPornVideos","members":"118.2k"},{"name":"r/CosPlayPorn","members":"69.6k"},{"name":"r/Superherosluts","members":"38.7k"},{"name":"r/CosplayFeet","members":"34.7k"},{"name":"r/Cosplayheels","members":"15.6k"}]},{"category":"Cum","subreddits":[{"name":"r/cumsluts","members":"2.9m"},{"name":"r/GirlsFinishingTheJob","members":"2.6m"},{"name":"r/cumfetish","members":"1.3m"},{"name":"r/creampies","members":"1.2m"},{"name":"r/amateurcumsluts","members":"1.2m"},{"name":"r/cumshots","members":"780.1k"},{"name":"r/FacialFun","members":"779.5k"},{"name":"r/creampie","members":"675.9k"},{"name":"r/cumcoveredfucking","members":"628.7k"},{"name":"r/Breeding","members":"619.3k"},{"name":"r/throatpies","members":"576.0k"},{"name":"r/thickloads","members":"496.9k"},{"name":"r/CumHaters","members":"484.3k"},{"name":"r/creampiegifs","members":"462.0k"},{"name":"r/cumonclothes","members":"358.4k"},{"name":"r/Facials","members":"311.4k"},{"name":"r/pulsatingcumshots","members":"284.7k"},{"name":"r/bodyshots","members":"267.6k"},{"name":"r/before_after_cumsluts","members":"229.1k"},{"name":"r/felching","members":"182.7k"},{"name":"r/CumAgain","members":"179.1k"},{"name":"r/CumSwap","members":"164.0k"},{"name":"r/CumOverdose","members":"146.9k"},{"name":"r/coveredincum","members":"141.3k"},{"name":"r/CumInTheAir","members":"109.3k"},{"name":"r/OhCumOn","members":"79.9k"},{"name":"r/cumshotgifs","members":"74.2k"}]},{"category":"Curvy","subreddits":[{"name":"r/BiggerThanYouThought","members":"1.9m"},{"name":"r/juicyasians","members":"1.7m"},{"name":"r/curvy","members":"1.6m"},{"name":"r/thick","members":"1.2m"},{"name":"r/ThickThighs","members":"1.0m"},{"name":"r/SlimThick","members":"832.7k"},{"name":"r/MassiveTitsnAss","members":"766.0k"},{"name":"r/JiggleFuck","members":"748.3k"},{"name":"r/gonewildcurvy","members":"694.1k"},{"name":"r/voluptuous","members":"406.2k"},{"name":"r/tightsqueeze","members":"203.0k"},{"name":"r/CasualJiggles","members":"188.1k"}]},{"category":"Discussion","subreddits":[{"name":"r/pornID","members":"1.2m"},{"name":"r/gonewildaudio","members":"1.2m"},{"name":"r/NSFW411","members":"1.0m"},{"name":"r/AskRedditAfterDark","members":"824.2k"},{"name":"r/gonewildstories","members":"752.0k"},{"name":"r/dirtypenpals","members":"527.8k"},{"name":"r/Ifyouhadtopickone","members":"431.3k"},{"name":"r/stupidslutsclub","members":"370.7k"},{"name":"r/Incestconfessions","members":"329.4k"},{"name":"r/chickflixxx","members":"326.4k"},{"name":"r/TrueFMK","members":"315.8k"},{"name":"r/onlyfansadvice","members":"283.2k"},{"name":"r/eroticliterature","members":"264.9k"},{"name":"r/DirtyConfession","members":"262.6k"},{"name":"r/NSFWIAMA","members":"241.3k"},{"name":"r/HappyEndingMassage","members":"83.7k"},{"name":"r/WickrFinder","members":"76.8k"},{"name":"r/GWASapphic","members":"55.7k"},{"name":"r/EroticRolePlay","members":"28.5k"},{"name":"r/cglpersonals","members":"25.8k"}]},{"category":"Dresses","subreddits":[{"name":"r/tightdresses","members":"718.0k"},{"name":"r/SchoolGirlSkirts","members":"408.4k"},{"name":"r/SunDressesGoneWild","members":"337.7k"},{"name":"r/WeddingsGoneWild","members":"293.7k"},{"name":"r/SkirtRiding","members":"229.4k"},{"name":"r/nopanties","members":"183.3k"},{"name":"r/skirtsgw","members":"99.0k"},{"name":"r/miniskirt","members":"85.2k"},{"name":"r/DressTwerk","members":"73.7k"},{"name":"r/pencilskirts","members":"43.9k"},{"name":"r/girlsinplaidskirts","members":"37.9k"},{"name":"r/SchoolGirlMiniSkirts","members":"24.5k"},{"name":"r/BigButtsInSkirts","members":"14.7k"},{"name":"r/tightdress","members":"12.4k"},{"name":"r/shortykeepingittight","members":"12.1k"},{"name":"r/girlsindresses","members":"7093"},{"name":"r/PlaidSkirts","members":"4386"},{"name":"r/SexySkirts","members":"4182"}]},{"category":"Ebony","subreddits":[{"name":"r/Ebony","members":"995.1k"},{"name":"r/WomenOfColor","members":"563.6k"},{"name":"r/womenofcolorXXX","members":"215.5k"},{"name":"r/BlackGirlPics","members":"190.4k"},{"name":"r/SexWithBlackGirls","members":"62.2k"}]},{"category":"Ethnicity","subreddits":[{"name":"r/latinas","members":"1.7m"},{"name":"r/DarkAngels","members":"669.7k"},{"name":"r/BrownHotties","members":"669.2k"},{"name":"r/Mexicana","members":"521.1k"},{"name":"r/LatinasGW","members":"430.8k"},{"name":"r/WomenOfColour","members":"170.7k"},{"name":"r/CaribbeanGirls","members":"57.9k"},{"name":"r/LatinaVerticalGifs","members":"45.7k"},{"name":"r/hotlatinas","members":"19.6k"}]},{"category":"Feet","subreddits":[{"name":"r/PLASTT","members":"801.2k"},{"name":"r/ButtsAndBareFeet","members":"747.9k"},{"name":"r/feetpics","members":"530.1k"},{"name":"r/Feet_NSFW","members":"399.7k"},{"name":"r/VerifiedFeet","members":"288.7k"},{"name":"r/FeetLoversHeaven","members":"268.4k"},{"name":"r/FootFetish","members":"254.8k"},{"name":"r/FeetToesAndSocks","members":"182.3k"},{"name":"r/FeetInYourFace","members":"171.4k"},{"name":"r/Feetishh","members":"121.2k"}]},{"category":"Gay","subreddits":[{"name":"r/MassiveCock","members":"713.7k"},{"name":"r/Sissies","members":"650.9k"},{"name":"r/GaybrosGoneWild","members":"563.1k"},{"name":"r/gayporn","members":"474.8k"},{"name":"r/cock","members":"426.8k"},{"name":"r/TotallyStraight","members":"394.4k"},{"name":"r/ratemycock","members":"387.9k"},{"name":"r/twinks","members":"381.6k"},{"name":"r/penis","members":"377.4k"},{"name":"r/ladybonersgw","members":"370.0k"},{"name":"r/PublicBoys","members":"295.7k"},{"name":"r/gaynsfw","members":"288.5k"},{"name":"r/GoneWildHairy","members":"282.6k"},{"name":"r/broslikeus","members":"280.2k"},{"name":"r/RedditorCum","members":"266.0k"},{"name":"r/bigonewild","members":"235.1k"},{"name":"r/gaycumsluts","members":"224.8k"},{"name":"r/gaymersgonewild","members":"220.4k"},{"name":"r/jacking","members":"210.7k"},{"name":"r/foreskin","members":"208.9k"},{"name":"r/gaystoriesgonewild","members":"199.7k"},{"name":"r/CumCannonAddicts","members":"185.9k"},{"name":"r/BonersInPublic","members":"179.9k"},{"name":"r/BarebackGayPorn","members":"164.9k"},{"name":"r/gaycruising","members":"163.8k"},{"name":"r/GayGifs","members":"162.3k"},{"name":"r/gaypornhunters","members":"147.3k"},{"name":"r/Androgynoushotties","members":"137.0k"},{"name":"r/GayKink","members":"136.5k"},{"name":"r/CuteGuyButts","members":"135.1k"},{"name":"r/gaybears","members":"129.1k"},{"name":"r/CockOutline","members":"128.9k"},{"name":"r/DickSlips","members":"123.4k"},{"name":"r/manass","members":"122.3k"},{"name":"r/TwinkLove","members":"116.5k"},{"name":"r/TopsAndBottoms","members":"108.6k"},{"name":"r/MaleUnderwear","members":"103.9k"},{"name":"r/hotguyswithtattoos","members":"99.3k"},{"name":"r/men_in_panties","members":"91.5k"},{"name":"r/gayotters","members":"89.2k"},{"name":"r/GayDaddiesPics","members":"89.1k"},{"name":"r/chesthairporn","members":"87.9k"},{"name":"r/jockstraps","members":"73.7k"},{"name":"r/GayFreeUse","members":"71.5k"},{"name":"r/lovegaymale","members":"68.0k"},{"name":"r/notgayporn","members":"67.9k"},{"name":"r/UniformedMen","members":"67.3k"},{"name":"r/nopullingout","members":"65.6k"},{"name":"r/gayholdthemoan","members":"64.9k"},{"name":"r/ChubbyDudes","members":"64.4k"},{"name":"r/GayChubs","members":"59.7k"},{"name":"r/ManSex","members":"57.8k"},{"name":"r/insanelyhairymen","members":"54.5k"},{"name":"r/forearmporn","members":"50.6k"},{"name":"r/gaypornwithplot","members":"49.2k"},{"name":"r/gayfacials","members":"37.7k"},{"name":"r/gayvideos","members":"37.3k"},{"name":"r/manlove","members":"37.2k"},{"name":"r/GaySex","members":"36.3k"},{"name":"r/tightywhities","members":"35.8k"},{"name":"r/boxershorts","members":"32.4k"},{"name":"r/CondomToBareback","members":"31.1k"},{"name":"r/GayPainal","members":"29.0k"},{"name":"r/Scally","members":"26.6k"},{"name":"r/WrestleWithThePackage","members":"26.4k"},{"name":"r/CumCausesCum","members":"26.4k"},{"name":"r/Homosexual","members":"25.8k"},{"name":"r/CubsGoneWild","members":"25.3k"},{"name":"r/GayMuscleWorship","members":"25.1k"},{"name":"r/malemodels","members":"22.9k"},{"name":"r/bearbros","members":"16.7k"},{"name":"r/MaleFootGear","members":"6481"},{"name":"r/cumclothes","members":"5697"},{"name":"r/MaleBraceFace","members":"1645"}]},{"category":"Gifs","subreddits":[{"name":"r/NSFW_GIF","members":"2.8m"},{"name":"r/nsfw_gifs","members":"1.9m"},{"name":"r/porninfifteenseconds","members":"1.8m"},{"name":"r/porn_gifs","members":"798.2k"},{"name":"r/NSFW_HTML5","members":"378.5k"},{"name":"r/PornGifs","members":"138.3k"},{"name":"r/Penetration_gifs","members":"116.9k"},{"name":"r/randomsexygifs","members":"108.5k"},{"name":"r/adultgifs","members":"80.3k"},{"name":"r/XXX_Animated_Gifs","members":"63.1k"},{"name":"r/motiontrackedboobs","members":"37.5k"},{"name":"r/NSFW_GFY","members":"22.7k"}]},{"category":"Gonewild","subreddits":[{"name":"r/gonewild","members":"4.4m"},{"name":"r/AsiansGoneWild","members":"2.5m"},{"name":"r/BigBoobsGW","members":"1.4m"},{"name":"r/workgonewild","members":"1.3m"},{"name":"r/asstastic","members":"1.2m"},{"name":"r/gonewildaudio","members":"1.2m"},{"name":"r/altgonewild","members":"1.0m"},{"name":"r/gonewildcouples","members":"1.0m"},{"name":"r/AnalGW","members":"991.7k"},{"name":"r/GWCouples","members":"939.4k"},{"name":"r/couplesgonewild","members":"899.9k"},{"name":"r/gwpublic","members":"867.1k"},{"name":"r/IndiansGoneWild","members":"839.0k"},{"name":"r/UnderwearGW","members":"745.3k"},{"name":"r/LabiaGW","members":"741.4k"},{"name":"r/MasturbationGoneWild","members":"717.9k"},{"name":"r/BDSMGW","members":"702.8k"},{"name":"r/gonewildcurvy","members":"694.1k"},{"name":"r/gonewildcolor","members":"659.1k"},{"name":"r/Swingersgw","members":"642.9k"},{"name":"r/GoneWildTrans","members":"603.2k"},{"name":"r/GoneMild","members":"587.6k"},{"name":"r/GWNerdy","members":"566.1k"},{"name":"r/GoneWildSmiles","members":"479.0k"},{"name":"r/RateMyNudeBody","members":"443.8k"},{"name":"r/gifsgonewild","members":"431.8k"},{"name":"r/GoneWildPlus","members":"410.5k"},{"name":"r/dykesgonewild","members":"402.9k"},{"name":"r/GoneWildScrubs","members":"395.7k"},{"name":"r/TributeMe","members":"360.6k"},{"name":"r/BigBoobsGonewild","members":"351.4k"},{"name":"r/leggingsgonewild","members":"339.0k"},{"name":"r/GoneErotic","members":"335.5k"},{"name":"r/GoneWildCD","members":"315.2k"},{"name":"r/peegonewild","members":"295.0k"},{"name":"r/LingerieGW","members":"284.2k"},{"name":"r/daresgonewild","members":"283.2k"},{"name":"r/treesgonewild","members":"264.2k"},{"name":"r/TallGoneWild","members":"253.7k"},{"name":"r/mycleavage","members":"225.7k"},{"name":"r/gonewildmetal","members":"190.3k"},{"name":"r/BBWGW","members":"169.6k"},{"name":"r/socksgonewild","members":"133.8k"},{"name":"r/ArtGW","members":"127.9k"},{"name":"r/DirtyPantiesGW","members":"92.7k"},{"name":"r/mengonewild","members":"82.5k"},{"name":"r/TeaseMePleaseMe","members":"74.2k"},{"name":"r/ShowerBeerGoneWild","members":"67.2k"},{"name":"r/EdmontonGoneWild","members":"44.1k"},{"name":"r/BHMGoneWild","members":"43.0k"},{"name":"r/milfgw","members":"35.4k"},{"name":"r/GoneInsane","members":"33.3k"},{"name":"r/GonewildFaces","members":"28.5k"},{"name":"r/gwbooks","members":"22.3k"},{"name":"r/DesiGoneWild","members":"20.5k"},{"name":"r/GONEWILDTWERK","members":"9121"},{"name":"r/goneclothed","members":"6050"},{"name":"r/ketogonewild","members":"5886"},{"name":"r/GirlsGoneDogeCoin","members":"2275"}]},{"category":"Lesbian","subreddits":[{"name":"r/lesbians","members":"1.5m"},{"name":"r/StraightGirlsPlaying","members":"785.8k"},{"name":"r/girlskissing","members":"599.5k"},{"name":"r/Lesbian_gifs","members":"597.6k"},{"name":"r/scissoring","members":"256.2k"},{"name":"r/mmgirls","members":"243.1k"},{"name":"r/GirlsJoy","members":"157.1k"},{"name":"r/GirlsCuddling","members":"74.1k"},{"name":"r/dyke","members":"63.6k"},{"name":"r/Lesbos","members":"9491"}]},{"category":"MILF","subreddits":[{"name":"r/milf","members":"2.2m"},{"name":"r/maturemilf","members":"925.1k"},{"name":"r/MILFs","members":"516.7k"},{"name":"r/realmoms","members":"403.2k"},{"name":"r/realmilf","members":"193.1k"},{"name":"r/cougars","members":"167.6k"},{"name":"r/HotAsianMilfs","members":"112.6k"},{"name":"r/GroupOfNudeMILFs","members":"54.6k"},{"name":"r/hairymilfs","members":"40.7k"}]},{"category":"Masturbation","subreddits":[{"name":"r/gettingherselfoff","members":"1.0m"},{"name":"r/jilling","members":"576.7k"},{"name":"r/Handjob","members":"243.2k"},{"name":"r/GirlsWatchingPorn","members":"129.2k"}]},{"category":"Mild","subreddits":[{"name":"r/CuteLittleButts","members":"967.6k"},{"name":"r/cosplaybabes","members":"768.8k"},{"name":"r/gentlemanboners","members":"694.8k"},{"name":"r/IRLgirls","members":"636.8k"},{"name":"r/EGirls","members":"636.3k"},{"name":"r/lingerie","members":"596.1k"},{"name":"r/GoneMild","members":"587.6k"},{"name":"r/prettyaltgirls","members":"582.0k"},{"name":"r/thongs","members":"398.6k"},{"name":"r/AsianCuties","members":"363.7k"},{"name":"r/CasualJiggles","members":"188.1k"},{"name":"r/LaBeauteFeminine","members":"161.4k"},{"name":"r/vscosluts","members":"122.2k"},{"name":"r/AbsoluteWeapons","members":"103.2k"},{"name":"r/prettyasiangirls","members":"101.2k"},{"name":"r/asiansgonemild","members":"96.8k"},{"name":"r/EroticButNotPorn","members":"82.8k"},{"name":"r/Playboy_Gifs","members":"62.0k"},{"name":"r/cutekorean","members":"34.1k"}]},{"category":"Nipples","subreddits":[{"name":"r/ghostnipples","members":"673.4k"},{"name":"r/Nipples","members":"667.6k"},{"name":"r/pokies","members":"447.6k"},{"name":"r/lactation","members":"393.1k"},{"name":"r/Puffies","members":"328.6k"}]},{"category":"Onlyfans","subreddits":[{"name":"r/onlyfansgirls101","members":"2.1m"},{"name":"r/OnlyFans101","members":"1.6m"},{"name":"r/naughtychicks","members":"605.4k"},{"name":"r/OnlyFansAsstastic","members":"482.1k"},{"name":"r/NSFW_Social","members":"436.8k"},{"name":"r/Onlyfans_Promo","members":"375.0k"},{"name":"r/OnlyFansBusty","members":"350.4k"},{"name":"r/OnlyFansPetite","members":"331.7k"},{"name":"r/onlynudechicks","members":"327.1k"},{"name":"r/OnlyFansBrunette","members":"188.0k"},{"name":"r/OnlyFansBlonde","members":"154.0k"},{"name":"r/Onlyfanssmallgirls","members":"119.6k"}]},{"category":"Oral","subreddits":[{"name":"r/Blowjobs","members":"1.8m"},{"name":"r/deepthroat","members":"1.3m"},{"name":"r/BlowJob","members":"920.8k"},{"name":"r/FaceFuck","members":"771.4k"},{"name":"r/Throatfucking","members":"497.2k"},{"name":"r/cunnilingus","members":"301.0k"},{"name":"r/OnHerKnees","members":"290.2k"},{"name":"r/dreamjobs","members":"136.0k"},{"name":"r/SwordSwallowers","members":"131.8k"},{"name":"r/DeepThroatTears","members":"115.1k"},{"name":"r/lickingdick","members":"104.7k"},{"name":"r/gag","members":"60.3k"},{"name":"r/OralSex","members":"54.4k"},{"name":"r/gawkgawkgawk","members":"40.2k"}]},{"category":"Orgasms","subreddits":[{"name":"r/Orgasms","members":"817.9k"},{"name":"r/quiver","members":"749.2k"},{"name":"r/BrokenBabes","members":"531.3k"},{"name":"r/orgasmcontrol","members":"304.8k"},{"name":"r/Womenorgasm","members":"76.7k"}]},{"category":"Outfits","subreddits":[{"name":"r/nsfwoutfits","members":"513.2k"},{"name":"r/GoneWildScrubs","members":"395.7k"},{"name":"r/NSFWCostumes","members":"346.9k"},{"name":"r/MilitaryGoneWild","members":"230.8k"},{"name":"r/nursesgw","members":"204.9k"},{"name":"r/SluttyHalloween","members":"199.3k"},{"name":"r/Secretary","members":"94.2k"},{"name":"r/GirlsInRealUniforms","members":"78.5k"},{"name":"r/frenchmaid","members":"67.2k"},{"name":"r/hotofficegirls","members":"54.1k"},{"name":"r/OfficeSexPorn","members":"42.3k"},{"name":"r/UniformFetish","members":"23.2k"},{"name":"r/girlsinuniform","members":"11.8k"},{"name":"r/WorkGoneWildNurse","members":"8897"},{"name":"r/WafukuAsians","members":"8497"},{"name":"r/AsianCheerleaders","members":"4896"},{"name":"r/FirstRespondersGW","members":"3974"}]},{"category":"Petite","subreddits":[{"name":"r/BustyPetite","members":"2.3m"},{"name":"r/PetiteGoneWild","members":"2.2m"},{"name":"r/xsmallgirls","members":"1.5m"},{"name":"r/dirtysmall","members":"1.2m"},{"name":"r/SmallCutie","members":"759.5k"},{"name":"r/funsized","members":"749.7k"},{"name":"r/petite","members":"646.6k"},{"name":"r/skinnytail","members":"492.3k"}]},{"category":"Pornstars","subreddits":[{"name":"r/RileyReid","members":"747.2k"},{"name":"r/MiaMalkova","members":"662.1k"},{"name":"r/DaniDaniels","members":"343.4k"},{"name":"r/TessaFowler","members":"321.6k"},{"name":"r/RemyLaCroix","members":"315.2k"},{"name":"r/LittleCaprice","members":"296.6k"},{"name":"r/Hitomi_Tanaka","members":"291.7k"},{"name":"r/Sashagrey","members":"270.8k"},{"name":"r/MyCherryCrush","members":"223.6k"},{"name":"r/EmilyBloom","members":"218.0k"},{"name":"r/asaakira","members":"210.6k"},{"name":"r/seltinsweety","members":"182.8k"},{"name":"r/Tori_Black","members":"178.7k"},{"name":"r/KyliePage","members":"167.0k"},{"name":"r/KatyaClover","members":"160.4k"},{"name":"r/augustames","members":"141.4k"},{"name":"r/FayeReagan","members":"136.4k"},{"name":"r/NadyaNabakova","members":"135.8k"},{"name":"r/SaraJUnderwood","members":"125.0k"},{"name":"r/JynxMaze","members":"124.2k"},{"name":"r/KrissyLynn","members":"122.2k"},{"name":"r/Anjelica_Ebbi","members":"120.5k"},{"name":"r/helgalovekaty","members":"110.5k"},{"name":"r/MalenaMorgan","members":"99.2k"},{"name":"r/AbellaAnderson","members":"99.1k"},{"name":"r/lucypinder","members":"97.9k"},{"name":"r/TheRedFox","members":"64.9k"},{"name":"r/AmyAnderssen","members":"62.1k"},{"name":"r/Ashlynn_Brooke","members":"57.3k"},{"name":"r/KureaHasumi","members":"55.5k"},{"name":"r/leannadecker","members":"52.3k"},{"name":"r/arielrebel","members":"50.7k"},{"name":"r/TiffanyThompson","members":"41.6k"},{"name":"r/londonandrews","members":"40.7k"},{"name":"r/ericacampbell","members":"39.2k"},{"name":"r/DioraBaird","members":"38.3k"},{"name":"r/ariel_model","members":"35.2k"},{"name":"r/JenSelter","members":"33.5k"},{"name":"r/JordanCarver","members":"33.2k"},{"name":"r/miela","members":"32.6k"},{"name":"r/Maria_Ozawa","members":"31.4k"},{"name":"r/RosieJones","members":"28.9k"},{"name":"r/WendyFiore","members":"28.4k"},{"name":"r/JanaDefi","members":"28.3k"},{"name":"r/BiancaBeauchamp","members":"27.5k"},{"name":"r/VictoriaRaeBlack","members":"27.4k"},{"name":"r/alisonangel","members":"27.3k"},{"name":"r/TeenKasia","members":"26.7k"},{"name":"r/BibiJones","members":"26.5k"},{"name":"r/amberblank","members":"26.3k"},{"name":"r/igawyrwal","members":"24.1k"},{"name":"r/eva_angelina","members":"23.8k"},{"name":"r/Jenya_D","members":"23.3k"},{"name":"r/HannaHilton","members":"23.0k"},{"name":"r/MiaSollis","members":"22.9k"},{"name":"r/LilyC","members":"21.6k"},{"name":"r/NessaDevil","members":"21.3k"},{"name":"r/cheekyasian","members":"21.2k"},{"name":"r/AriaGiovanni","members":"16.6k"},{"name":"r/shay_laren","members":"12.4k"},{"name":"r/Hayden_Winters","members":"9651"},{"name":"r/anneli","members":"7354"},{"name":"r/IvySnow","members":"5378"},{"name":"r/MissIvyJean","members":"5361"}]},{"category":"Pose","subreddits":[{"name":"r/facedownassup","members":"781.2k"},{"name":"r/NSFW_Plowcam","members":"422.4k"},{"name":"r/doggy","members":"343.2k"},{"name":"r/spreadeagle","members":"309.5k"},{"name":"r/cumov","members":"128.9k"},{"name":"r/handinpanties","members":"112.2k"},{"name":"r/StomachDownFeetUp","members":"39.0k"},{"name":"r/Feetup","members":"26.8k"},{"name":"r/Aparthigh","members":"19.8k"}]},{"category":"Positions","subreddits":[{"name":"r/FaceFuck","members":"771.4k"},{"name":"r/girlswhoride","members":"649.6k"},{"name":"r/pronebone","members":"585.3k"},{"name":"r/facesitting","members":"471.4k"},{"name":"r/NSFW_Plowcam","members":"422.4k"},{"name":"r/SpitRoasted","members":"387.4k"},{"name":"r/ArmsUpPorn","members":"250.1k"},{"name":"r/standingout","members":"179.6k"}]},{"category":"Public","subreddits":[{"name":"r/PublicFlashing","members":"1.3m"},{"name":"r/workgonewild","members":"1.3m"},{"name":"r/SexInFrontOfOthers","members":"1.2m"},{"name":"r/gwpublic","members":"867.1k"},{"name":"r/PublicSexPorn","members":"782.6k"},{"name":"r/FlashingGirls","members":"651.3k"},{"name":"r/FlashingAndFlaunting","members":"648.5k"},{"name":"r/ChangingRooms","members":"521.5k"},{"name":"r/VoyeurFlash","members":"469.8k"},{"name":"r/NakedAdventures","members":"364.4k"},{"name":"r/pizzadare","members":"326.3k"},{"name":"r/NotSafeForNature","members":"248.9k"},{"name":"r/Milehighgirls","members":"8932"}]},{"category":"Pussy","subreddits":[{"name":"r/pussy","members":"2.5m"},{"name":"r/rearpussy","members":"881.3k"},{"name":"r/LabiaGW","members":"741.4k"},{"name":"r/Innie","members":"741.1k"},{"name":"r/PantiesToTheSide","members":"621.6k"},{"name":"r/HairyPussy","members":"598.4k"},{"name":"r/PussyFlashing","members":"480.6k"},{"name":"r/pelfie","members":"435.8k"},{"name":"r/Pussy_Perfection","members":"389.4k"},{"name":"r/BreakingTheSeal","members":"313.3k"}]},{"category":"Small","subreddits":[{"name":"r/xsmallgirls","members":"1.5m"},{"name":"r/dirtysmall","members":"1.2m"},{"name":"r/TinyTits","members":"1.1m"},{"name":"r/SmallCutie","members":"759.5k"},{"name":"r/funsized","members":"749.7k"},{"name":"r/petite","members":"646.6k"},{"name":"r/aa_cups","members":"554.5k"},{"name":"r/skinnytail","members":"492.3k"},{"name":"r/B_Cups","members":"394.9k"}]},{"category":"Stockings","subreddits":[{"name":"r/thighhighs","members":"699.9k"},{"name":"r/stockings","members":"381.6k"},{"name":"r/pantyhose","members":"242.5k"},{"name":"r/GirlsinLaceFishnets","members":"184.3k"},{"name":"r/girlsinleggings","members":"146.2k"},{"name":"r/socksgonewild","members":"133.8k"},{"name":"r/Nylonfetish","members":"107.2k"},{"name":"r/GarterBelts","members":"105.0k"},{"name":"r/kneesocks","members":"72.0k"},{"name":"r/NylonSoles","members":"49.2k"},{"name":"r/sockfetish","members":"45.5k"},{"name":"r/pantyhosefetish","members":"33.9k"},{"name":"r/girlsinpantyhose","members":"33.4k"},{"name":"r/stockingfetish","members":"26.6k"},{"name":"r/ZettaiRyouikiIRL","members":"26.4k"},{"name":"r/GirlsinTUBEsocks","members":"26.2k"},{"name":"r/BootsAndStockings","members":"24.4k"},{"name":"r/AnkleSocksGW","members":"15.1k"}]},{"category":"Tattoos","subreddits":[{"name":"r/Hotchickswithtattoos","members":"882.0k"},{"name":"r/EvgeniaTalanina","members":"92.2k"},{"name":"r/tattooed_redheads","members":"46.8k"},{"name":"r/hotgirlswithtattoos","members":"23.5k"},{"name":"r/TattooPornVideos","members":"21.9k"},{"name":"r/tattooedgonewild","members":"16.5k"},{"name":"r/TattoosPorn","members":"13.5k"},{"name":"r/pubic_tattoo","members":"8489"},{"name":"r/KinkyTattoos","members":"7432"}]},{"category":"Teens","subreddits":[{"name":"r/LegalTeens","members":"2.8m"},{"name":"r/collegesluts","members":"2.5m"},{"name":"r/18_19","members":"1.4m"},{"name":"r/barelylegalteens","members":"1.4m"},{"name":"r/TeenBeauties","members":"1.1m"},{"name":"r/CollegeAmateurs","members":"1.0m"},{"name":"r/18nsfw","members":"786.0k"},{"name":"r/2000sGirls","members":"711.5k"},{"name":"r/collegensfw","members":"339.6k"},{"name":"r/Barelylegal","members":"291.3k"},{"name":"r/springbreakers","members":"73.0k"}]},{"category":"Thighs","subreddits":[{"name":"r/girlsinyogapants","members":"1.0m"},{"name":"r/ThickThighs","members":"1.0m"},{"name":"r/thighhighs","members":"699.9k"},{"name":"r/datgap","members":"390.8k"},{"name":"r/legs","members":"387.3k"},{"name":"r/stockings","members":"381.6k"},{"name":"r/ZettaiRyouikiIRL","members":"26.4k"}]},{"category":"TikTok","subreddits":[{"name":"r/tiktokporn","members":"1.8m"},{"name":"r/tiktokthots","members":"1.3m"},{"name":"r/tiktoksweets","members":"528.2k"},{"name":"r/TikTok_Tits","members":"293.9k"},{"name":"r/TikTok_Ass","members":"176.0k"}]},{"category":"Trans","subreddits":[{"name":"r/traps","members":"1.1m"},{"name":"r/FemBoys","members":"1.0m"},{"name":"r/transporn","members":"640.1k"},{"name":"r/Tgirls","members":"631.6k"},{"name":"r/GoneWildTrans","members":"603.2k"},{"name":"r/bigdickgirl","members":"532.9k"},{"name":"r/Shemales","members":"488.5k"},{"name":"r/tscum","members":"413.8k"},{"name":"r/ShemalesParadise","members":"397.7k"},{"name":"r/TransGoneWild","members":"367.5k"},{"name":"r/sissyhypno","members":"351.1k"},{"name":"r/dickgirls","members":"335.5k"},{"name":"r/Sissyperfection","members":"286.8k"},{"name":"r/Tgifs","members":"275.4k"},{"name":"r/DeliciousTraps","members":"274.7k"},{"name":"r/TSonFM","members":"241.8k"},{"name":"r/tbulges","members":"192.9k"},{"name":"r/shemale_gifs","members":"187.1k"},{"name":"r/LadyCocks","members":"176.9k"},{"name":"r/TransTease","members":"119.7k"},{"name":"r/trapgifs","members":"100.9k"},{"name":"r/amatuer_shemales","members":"89.0k"},{"name":"r/transanal","members":"81.0k"},{"name":"r/tsCantHoldHerCum","members":"65.1k"},{"name":"r/POVTranny","members":"62.4k"},{"name":"r/transdeepthroat","members":"59.7k"},{"name":"r/genderotica","members":"40.0k"},{"name":"r/Transfixed","members":"39.6k"},{"name":"r/TransPrincesses","members":"39.1k"},{"name":"r/TransGirlsCum","members":"38.5k"},{"name":"r/TRANSDREAMS","members":"23.4k"},{"name":"r/ShemalesFuck","members":"16.5k"},{"name":"r/crossdreaming","members":"8869"}]},{"category":"Videos","subreddits":[{"name":"r/porninfifteenseconds","members":"1.8m"},{"name":"r/porninaminute","members":"456.9k"},{"name":"r/nsfw_videos","members":"212.7k"},{"name":"r/SupercutsNSFW","members":"150.3k"},{"name":"r/softcorenights","members":"94.0k"},{"name":"r/nsfwvideos","members":"53.9k"},{"name":"r/FullNSFWMovies","members":"22.4k"},{"name":"r/AdultMovies","members":"10.0k"}]},{"category":"Vintage","subreddits":[{"name":"r/NostalgiaFapping","members":"543.9k"},{"name":"r/VintageBabes","members":"141.7k"},{"name":"r/VintageSmut","members":"90.1k"},{"name":"r/OldenPorn","members":"46.8k"},{"name":"r/gonewanton","members":"28.3k"},{"name":"r/VintageErotica","members":"13.7k"}]},{"category":"Wet","subreddits":[{"name":"r/Oilporn","members":"496.5k"},{"name":"r/wet","members":"236.9k"},{"name":"r/Bathing","members":"94.0k"},{"name":"r/WetAndMessy","members":"70.1k"},{"name":"r/underwaterbabes","members":"59.4k"},{"name":"r/GirlswithBodypaint","members":"38.9k"},{"name":"r/Slippery","members":"32.6k"}]}]'),
                C = JSON.parse('{"o":[{"name":"Top Posts","query":"","sort":"score"},{"name":"Trending","query":"","score":50},{"name":"Video","query":"video"},{"name":"Overwatch","query":"overwatch","score":25},{"name":"Marvel Rivals","query":"marvel_rivals","score":25},{"name":"Genshin Impact","query":"genshin_impact"},{"name":"Brawl Stars","query":"brawl_stars"},{"name":"Friday Night Funkin","query":"friday_night_funkin"},{"name":"Atomic Heart","query":"atomic_heart"},{"name":"Minecraft","query":"minecraft"},{"name":"Murder Drones","query":"murder_drones"},{"name":"CountryHumans","query":"countryhumans"},{"name":"Honkai: Star Rail","query":"honkai:_star_rail"},{"name":"Five Nights at Freddy\'s","query":"five_nights_at_freddy\'s"},{"name":"Roblox","query":"roblox"},{"name":"Undertale","query":"undertale"},{"name":"Pokemon","query":"pokemon"},{"name":"3D","query":"3d"},{"name":"Furry","query":"furry"},{"name":"Gay","query":"gay"}]}');
            var S = t(36954);
            let A = () => {
                let [e, r] = (0, n.useState)(!1), [t, m] = (0, n.useState)(!1), [l, o] = (0, n.useState)(!1), [c, d] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    let e = window.navigator.userAgent.toLowerCase(),
                        t = /iphone|ipad|ipod/.test(e);
                    if (m(t), (0, y.tv)()) {
                        r(!1);
                        return
                    }
                    if (t) {
                        r(!0);
                        return
                    }
                    let s = e => {
                            e.preventDefault(), d(e), (0, y.Fr)() && r(!0)
                        },
                        n = () => {
                            r(!1), d(null)
                        };
                    return window.addEventListener("beforeinstallprompt", s), window.addEventListener("appinstalled", n), () => {
                        window.removeEventListener("beforeinstallprompt", s), window.removeEventListener("appinstalled", n)
                    }
                }, []);
                let b = async () => {
                    if (t) {
                        o(!0);
                        return
                    }
                    if (c) try {
                        await c.prompt(), await c.userChoice, d(null), r(!1)
                    } catch (e) {
                        console.error("Error during installation:", e)
                    }
                };
                return e ? (0, s.jsxs)("div", {
                    children: [(0, s.jsxs)("button", {
                        onClick: b,
                        className: "flex items-center gap-2 px-3 py-3 p-2 rounded-lg hover:bg-gray-600/40 group transition-colors w-full text-left",
                        children: [(0, s.jsx)("div", {
                            className: "relative w-5 h-5 flex-shrink-0",
                            children: (0, s.jsx)(S.A, {
                                className: "h-5 w-5 text-gray-400 group-hover:text-white transition-colors"
                            })
                        }), (0, s.jsx)("span", {
                            className: "font-medium",
                            children: t ? "How to Install Web App" : "Install Web App"
                        })]
                    }), (0, s.jsx)(i.N, {
                        children: l && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(a.P.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: .5
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "fixed inset-0 bg-black z-40",
                                onClick: () => o(!1)
                            }), (0, s.jsxs)(a.P.div, {
                                initial: {
                                    y: "100%"
                                },
                                animate: {
                                    y: 0
                                },
                                exit: {
                                    y: "100%"
                                },
                                transition: {
                                    type: "tween",
                                    ease: "easeOut",
                                    duration: .3
                                },
                                className: "fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white rounded-t-xl p-6 shadow-xl",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex justify-between items-center mb-4",
                                    children: [(0, s.jsx)("h2", {
                                        className: "text-lg font-semibold",
                                        children: "Install ScrollX"
                                    }), (0, s.jsx)("button", {
                                        onClick: () => o(!1),
                                        children: (0, s.jsx)(u.A, {
                                            className: "h-5 w-5 text-gray-400 hover:text-white"
                                        })
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "space-y-4 text-gray-300",
                                    children: [(0, s.jsx)("p", {
                                        children: "To install this app on your iPhone:"
                                    }), (0, s.jsxs)("ol", {
                                        className: "list-decimal pl-5 space-y-2",
                                        children: [(0, s.jsx)("li", {
                                            children: "Open this site in Safari."
                                        }), (0, s.jsxs)("li", {
                                            children: ["Tap the ", (0, s.jsx)("strong", {
                                                children: "Share"
                                            }), " button (bottom toolbar)."]
                                        }), (0, s.jsxs)("li", {
                                            children: ["Select ", (0, s.jsx)("strong", {
                                                children: "Add to Home Screen"
                                            }), "."]
                                        })]
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "mt-6",
                                    children: (0, s.jsx)("button", {
                                        onClick: () => o(!1),
                                        className: "w-full py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors",
                                        children: "Got it"
                                    })
                                })]
                            })]
                        })
                    })]
                }) : null
            };
            var T = t(5565),
                E = t(48173),
                P = t.n(E),
                z = t(20669),
                F = t(58802),
                M = t(29288);

            function _(e) {
                var r;
                let {
                    isOpen: t,
                    onOpen: v,
                    onClose: S,
                    sortBy: E,
                    onUpdateParams: _,
                    site: L
                } = e, B = (0, n.useRef)(null), R = (0, n.useRef)(null), I = (0, p.useRouter)(), G = (0, f.F)(e => e.entries), W = (0, k.I)(e => e.favorites), {
                    toggleFavorite: D
                } = (0, k.I)(), {
                    onSearchChange: H
                } = (0, z.E)(), {
                    expandedCategories: O,
                    setExpandedCategories: U
                } = (0, M.t0)();
                (0, n.useEffect)(() => {
                    f.F.persist.rehydrate(), k.I.persist.rehydrate()
                }, [t]);
                let X = e => {
                        let r = G.filter(r => !(r.site === e.site && r.query === e.query && r.timestamp === e.timestamp));
                        f.F.setState({
                            entries: r
                        })
                    },
                    q = e => {
                        D({ ...e,
                            query: e.query.replace(/id:\<=\S*/, "").replace(/id:\>=\S*/, "").trim(),
                            id: null
                        })
                    },
                    Y = e => {
                        U(O.includes(e) ? O.filter(r => r !== e) : [...O, e])
                    },
                    V = e => {
                        H(e.map(e => e.name.replace("r/", "")).join(" ")), S()
                    },
                    Z = e => {
                        H(e.replace("r/", "")), S()
                    },
                    J = e => {
                        let r = e.replace("r/", ""),
                            t = new URLSearchParams(window.location.search),
                            s = t.get("q") || "";
                        t.get("sort");
                        let n = s ? s.split(" ") : [];
                        n.includes(r) || H([...n, r].join(" ")), S()
                    },
                    K = e => {
                        let r = "/".concat(L, "?"),
                            t = [];
                        return e.query && t.push("q=".concat(encodeURIComponent(e.query))), !e.query && e.sort && t.push("sort=".concat(encodeURIComponent(e.sort))), !e.query && e.score && t.push("score=".concat(encodeURIComponent(e.score))), r += t.join("&")
                    },
                    Q = e => {
                        let r = K(e);
                        I.push(r), S()
                    },
                    $ = e => {
                        _(e), S()
                    },
                    ee = e => {
                        _({ ...e,
                            id: null,
                            page: null,
                            cursor: null
                        }), S()
                    };
                (0, n.useEffect)(() => {
                    let e = e => {
                        B.current && !B.current.contains(e.target) && S()
                    };
                    return t && document.addEventListener("mousedown", e, {
                        capture: !0
                    }), () => {
                        document.removeEventListener("mousedown", e, {
                            capture: !0
                        })
                    }
                }, [t, S]), (0, n.useEffect)(() => (t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
                    document.body.style.overflow = ""
                }), [t]);
                let {
                    dragOffset: er,
                    dragPercentage: et,
                    isAnimating: es,
                    isSnappingBack: en
                } = (0, F.n)(R, {
                    onClose: S,
                    onOpen: v,
                    isOpen: t,
                    threshold: 80,
                    velocityThreshold: .1,
                    direction: "left",
                    id: "sidebar"
                });
                return (0, s.jsx)(i.N, {
                    initial: !1,
                    children: (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)(a.P.div, {
                            initial: !1,
                            animate: t || et > 0 || en ? {
                                opacity: 1,
                                pointerEvents: "auto"
                            } : {
                                opacity: 0,
                                pointerEvents: "none"
                            },
                            transition: {
                                duration: .2
                            },
                            className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50",
                            style: {
                                opacity: 0
                            },
                            ref: R,
                            children: (0, s.jsxs)(a.P.div, {
                                ref: B,
                                initial: {
                                    x: "-100%"
                                },
                                animate: {
                                    x: !t && et > 0 ? en ? "-100%" : "".concat(-100 + et, "%") : t && er > 0 ? -er : t ? 0 : "-100%"
                                },
                                exit: {
                                    x: "-100%"
                                },
                                transition: !(et > 0) || es || en ? {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                } : {
                                    type: "tween",
                                    duration: 0
                                },
                                className: "absolute inset-y-0 left-0 w-80 bg-black/50 shadow-xl",
                                "data-sidebar-direction": "left",
                                children: [(0, s.jsx)("div", {
                                    className: "sticky top-0 bg-black z-10 p-4 border-b border-white/10",
                                    children: (0, s.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [(0, s.jsx)("h2", {
                                                className: "text-xl font-bold text-white",
                                                children: "Browse"
                                            }), (0, s.jsx)(P(), {
                                                href: "/about",
                                                className: "p-1.5 rounded-full hover:bg-gray-800 transition-colors group",
                                                "aria-label": "Help",
                                                children: (0, s.jsx)(d.A, {
                                                    className: "h-5 w-5 text-gray-400 group-hover:text-white transition-colors"
                                                })
                                            })]
                                        }), (0, s.jsx)(a.P.button, {
                                            whileHover: {
                                                scale: 1.1
                                            },
                                            whileTap: {
                                                scale: .9
                                            },
                                            onClick: S,
                                            className: "p-1.5 rounded-full hover:bg-gray-800 transition-colors",
                                            "aria-label": "Close",
                                            children: (0, s.jsx)(u.A, {
                                                className: "h-5 w-5 text-gray-400 hover:text-white transition-colors"
                                            })
                                        })]
                                    })
                                }), (0, s.jsx)(j.F, {
                                    className: "h-[calc(100vh-5rem)]",
                                    onWheel: e => e.stopPropagation(),
                                    children: (0, s.jsxs)("div", {
                                        className: "p-4 space-y-6",
                                        children: [!(0, y.tv)() && (0, s.jsx)("div", {
                                            children: (0, s.jsxs)(P(), {
                                                href: "https://theporndude.com/",
                                                rel: "nofollow noopener",
                                                target: "_blank",
                                                className: "flex items-center gap-2 px-3 py-3 p-2 rounded-lg hover:bg-gray-600/40 group transition-colors",
                                                children: [(0, s.jsx)("div", {
                                                    className: "relative w-5 h-5 flex-shrink-0",
                                                    children: (0, s.jsx)(T.default, {
                                                        src: "https://icons.duckduckgo.com/ip2/theporndude.com.ico",
                                                        alt: "ThePornDude icon",
                                                        className: "object-contain",
                                                        fill: !0,
                                                        unoptimized: !0
                                                    })
                                                }), (0, s.jsx)("span", {
                                                    className: "font-medium",
                                                    children: "ThePornDude"
                                                })]
                                            })
                                        }), (0, s.jsxs)("div", {
                                            children: [(0, s.jsx)(A, {}), (0, s.jsxs)(P(), {
                                                href: "/saved/".concat(L),
                                                className: "flex items-center gap-2 px-3 py-3 p-2 rounded-lg hover:bg-gray-600/40 group transition-colors",
                                                children: [(0, s.jsx)("div", {
                                                    className: "relative w-5 h-5 flex-shrink-0",
                                                    children: (0, s.jsx)(b.A, {
                                                        className: "h-5 w-5 text-gray-400 group-hover:text-white transition-colors"
                                                    })
                                                }), (0, s.jsx)("span", {
                                                    className: "font-medium",
                                                    children: "Saved"
                                                })]
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            children: [(0, s.jsx)("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: (0, s.jsxs)(a.P.button, {
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: .95
                                                    },
                                                    className: "flex items-center gap-2 w-full text-white hover:text-gray-300 transition-colors",
                                                    onClick: () => Y("Favorites"),
                                                    children: [O.includes("Favorites") ? (0, s.jsx)(m.A, {
                                                        className: "h-4 w-4"
                                                    }) : (0, s.jsx)(l.A, {
                                                        className: "h-4 w-4"
                                                    }), (0, s.jsx)(h.A, {
                                                        className: "h-4 w-4"
                                                    }), (0, s.jsx)("span", {
                                                        className: "font-medium",
                                                        children: "Favorites"
                                                    })]
                                                })
                                            }), (0, s.jsx)(i.N, {
                                                children: O.includes("Favorites") && (0, s.jsx)(a.P.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        height: 0
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        height: "auto"
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        height: 0
                                                    },
                                                    className: "mt-2 space-y-2",
                                                    children: 0 === W.length ? (0, s.jsx)("p", {
                                                        className: "text-sm text-gray-400 italic",
                                                        children: "No favorites yet"
                                                    }) : W.map((e, r) => (0, s.jsx)(a.P.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: -10
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            y: -10
                                                        },
                                                        transition: {
                                                            delay: .05 * r
                                                        },
                                                        className: "p-3 rounded-lg hover:bg-gray-600/40 group transition-colors",
                                                        children: (0, s.jsxs)("div", {
                                                            className: "flex justify-between items-Heartt gap-3",
                                                            children: [(0, s.jsxs)("button", {
                                                                onClick: () => ee(e),
                                                                className: "flex-grow text-left",
                                                                children: [(0, s.jsx)("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: (0, s.jsx)("span", {
                                                                        className: "text-white font-medium",
                                                                        children: e.site
                                                                    })
                                                                }), (0, s.jsx)("p", {
                                                                    className: "text-sm text-gray-300 mt-1 line-clamp-1",
                                                                    children: (0, y.EJ)(e.query, 27)
                                                                })]
                                                            }), (0, s.jsx)("div", {
                                                                className: "flex flex-col items-end",
                                                                children: (0, s.jsx)(a.P.button, {
                                                                    whileHover: {
                                                                        scale: 1.1
                                                                    },
                                                                    whileTap: {
                                                                        scale: .9
                                                                    },
                                                                    onClick: () => D(e),
                                                                    className: "mt-2 p-2 hover:bg-gray-600/40 rounded-full transition-all flex items-center justify-center mb-2",
                                                                    title: "Remove from favorites",
                                                                    children: (0, s.jsx)(u.A, {
                                                                        className: "h-5 w-5 text-gray-400 hover:text-white"
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    }, "".concat(e.site, "-").concat(e.timestamp)))
                                                })
                                            })]
                                        }), (0, s.jsx)(w, {
                                            className: "bg-white/10"
                                        }), (0, s.jsxs)("div", {
                                            children: [(0, s.jsx)("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: (0, s.jsxs)(a.P.button, {
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: .95
                                                    },
                                                    className: "flex items-center gap-2 text-white w-full hover:text-gray-300 transition-colors",
                                                    onClick: () => Y("History"),
                                                    children: [O.includes("History") ? (0, s.jsx)(m.A, {
                                                        className: "h-4 w-4"
                                                    }) : (0, s.jsx)(l.A, {
                                                        className: "h-4 w-4"
                                                    }), (0, s.jsx)(g.A, {
                                                        className: "h-4 w-4"
                                                    }), (0, s.jsx)("span", {
                                                        className: "font-medium",
                                                        children: "History"
                                                    })]
                                                })
                                            }), (0, s.jsx)(i.N, {
                                                children: O.includes("History") && (0, s.jsx)(a.P.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        height: 0
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        height: "auto"
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        height: 0
                                                    },
                                                    className: "mt-2 space-y-2",
                                                    children: 0 === G.length ? (0, s.jsx)("p", {
                                                        className: "text-sm text-gray-400 italic",
                                                        children: "No history yet"
                                                    }) : G.map((e, r) => (0, s.jsx)(a.P.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: -10
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            y: -10
                                                        },
                                                        transition: {
                                                            delay: .05 * r
                                                        },
                                                        className: "p-3 rounded-lg hover:bg-gray-600/40 group transition-colors",
                                                        children: (0, s.jsxs)("div", {
                                                            className: "flex justify-between items-Heartt gap-3",
                                                            children: [(0, s.jsxs)("button", {
                                                                onClick: () => $(e),
                                                                className: "flex-grow text-left",
                                                                children: [(0, s.jsx)("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: (0, s.jsx)("span", {
                                                                        className: "text-white font-medium",
                                                                        children: e.site
                                                                    })
                                                                }), (0, s.jsx)("p", {
                                                                    className: "text-sm text-gray-300 mt-1 line-clamp-1",
                                                                    children: (0, y.EJ)(e.query, 30)
                                                                }), (0, s.jsx)("div", {
                                                                    className: "mt-1 text-xs text-gray-500",
                                                                    children: (0, x.m)(e.timestamp, {
                                                                        addSuffix: !0
                                                                    })
                                                                })]
                                                            }), (0, s.jsxs)("div", {
                                                                className: "flex flex-col",
                                                                children: [(0, s.jsx)(a.P.button, {
                                                                    whileHover: {
                                                                        scale: 1.1
                                                                    },
                                                                    whileTap: {
                                                                        scale: .9
                                                                    },
                                                                    onClick: () => X(e),
                                                                    className: "hover:bg-gray-600/40 rounded-full transition-all flex items-center justify-center mt-2 mb-2",
                                                                    title: "Remove from history",
                                                                    children: (0, s.jsx)(u.A, {
                                                                        className: "h-4  w-4 text-gray-400 hover:text-white"
                                                                    })
                                                                }), (0, s.jsx)(a.P.button, {
                                                                    whileHover: {
                                                                        scale: 1.1
                                                                    },
                                                                    whileTap: {
                                                                        scale: .9
                                                                    },
                                                                    onClick: () => q(e),
                                                                    className: "hover:bg-gray-600/40 rounded-full transition-all flex items-center justify-center mt-4",
                                                                    title: "Remove from history",
                                                                    children: (0, s.jsx)(h.A, {
                                                                        className: "h-4 w-4 text-gray-400 hover:text-white"
                                                                    })
                                                                })]
                                                            })]
                                                        })
                                                    }, "".concat(e.site, "-").concat(e.timestamp)))
                                                })
                                            })]
                                        }), (0, s.jsx)(w, {
                                            className: "bg-white/10"
                                        }), "reddit.com" === L ? (0, s.jsx)("div", {
                                            className: "space-y-6",
                                            children: N.map(e => (0, s.jsxs)("div", {
                                                children: [(0, s.jsxs)("div", {
                                                    className: "flex items-center justify-between mb-2",
                                                    children: [(0, s.jsxs)("button", {
                                                        className: "flex items-center gap-2 text-white hover:text-gray-300 transition-colors",
                                                        onClick: () => Y(e.category),
                                                        children: [O.includes(e.category) ? (0, s.jsx)(m.A, {
                                                            className: "h-4 w-4"
                                                        }) : (0, s.jsx)(l.A, {
                                                            className: "h-4 w-4"
                                                        }), (0, s.jsx)("span", {
                                                            className: "font-medium",
                                                            children: e.category
                                                        })]
                                                    }), (0, s.jsx)(P(), {
                                                        href: "/reddit.com?q=".concat(e.subreddits.map(e => e.name.replace("r/", "")).join("+")),
                                                        onClick: r => {
                                                            r.preventDefault(), V(e.subreddits)
                                                        },
                                                        className: "text-gray-400 hover:text-white hover:bg-gray-800 p-2 rounded-md transition-colors",
                                                        title: "View all",
                                                        children: (0, s.jsx)(o.A, {
                                                            className: "h-4 w-4"
                                                        })
                                                    })]
                                                }), (0, s.jsx)("div", {
                                                    className: "mt-2 space-y-1 overflow-hidden ".concat(O.includes(e.category) ? "block opacity-100" : "hidden opacity-0"),
                                                    children: e.subreddits.map(e => (0, s.jsx)("div", {
                                                        className: "ml-6 p-2 rounded-lg hover:bg-gray-600/40 group transition-colors",
                                                        children: (0, s.jsxs)("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [(0, s.jsxs)(P(), {
                                                                href: "/reddit.com?q=".concat(e.name.replace("r/", "")),
                                                                className: "flex-grow text-left",
                                                                onClick: r => {
                                                                    r.preventDefault(), Z(e.name)
                                                                },
                                                                children: [(0, s.jsx)("span", {
                                                                    className: "text-gray-300 hover:text-white",
                                                                    children: e.name
                                                                }), (0, s.jsx)("span", {
                                                                    className: "text-xs text-gray-500 ml-2",
                                                                    children: e.members
                                                                })]
                                                            }), (0, s.jsx)("button", {
                                                                onClick: r => {
                                                                    r.preventDefault(), J(e.name)
                                                                },
                                                                className: "text-gray-400 hover:text-white p-1 hover:bg-gray-700 rounded transition-all",
                                                                title: "Add to feed",
                                                                children: (0, s.jsx)(c.A, {
                                                                    className: "h-4 w-4"
                                                                })
                                                            })]
                                                        })
                                                    }, e.name))
                                                })]
                                            }, e.category))
                                        }) : (0, s.jsx)("div", {
                                            className: "space-y-2 p-2",
                                            children: null === (r = C.o) || void 0 === r ? void 0 : r.map((e, r) => (0, s.jsx)(a.P.div, {
                                                whileHover: {
                                                    backgroundColor: "rgba(75, 85, 99, 0.4)"
                                                },
                                                className: "p-2 rounded-lg group transition-colors flex items-center justify-between",
                                                children: (0, s.jsx)(P(), {
                                                    href: K(e),
                                                    className: "flex-grow text-left flex items-center",
                                                    onClick: r => {
                                                        r.preventDefault(), Q(e)
                                                    },
                                                    children: (0, s.jsx)("span", {
                                                        className: "text-gray-300 hover:text-white",
                                                        children: e.name
                                                    })
                                                })
                                            }, "".concat(e.name, "-").concat(r)))
                                        }), (0, s.jsx)(w, {
                                            className: "bg-white/10"
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        49746: (e, r, t) => {
            t.d(r, {
                B: () => eR
            });
            var s = t(95155),
                n = t(12115),
                a = t(29602),
                i = t(93518),
                m = t(46967);

            function l(e) {
                var r;
                let {
                    totalItems: t,
                    currentIndex: s,
                    onIndexChange: a,
                    enableMouse: i = !1,
                    isMobile: m = !1,
                    resistance: l = .3,
                    disable: o
                } = e, c = (0, n.useRef)(null), d = (null === (r = c.current) || void 0 === r ? void 0 : r.getBoundingClientRect().width) / 4 || 50, [u, b] = (0, n.useState)(0), [h, g] = (0, n.useState)(0), [p, f] = (0, n.useState)(0), [k, x] = (0, n.useState)(!1), [v, y] = (0, n.useState)(!1), [w, j] = (0, n.useState)(!1), [N, C] = (0, n.useState)(0), [S, A] = (0, n.useState)(250), [T, E] = (0, n.useState)(0), [P, z] = (0, n.useState)(0), [F, M] = (0, n.useState)(0), _ = s > 0, L = s < t - 1, B = (0, n.useCallback)((e, r) => {
                    let t = Math.abs(e),
                        s = Math.abs(r);
                    if (s > 2e3) return 100;
                    let n = 400;
                    return s > 0 && (n = 400 - 210 * Math.min(s / 1e3, 2)), t < 100 && (n += 50), Math.max(100, Math.min(400, n))
                }, []), R = (0, n.useCallback)(() => {
                    x(!1), y(!1), j(!1), C(0), b(0), g(0), f(0), z(0)
                }, []), I = (0, n.useCallback)(e => {
                    if (o) return;
                    let r = e.touches[0];
                    x(!0), b(r.clientX), g(r.clientY), f(r.clientX), E(performance.now()), M(performance.now()), z(0), y(!1), j(!1), A(0)
                }, []), G = (0, n.useCallback)(e => {
                    if (o || !k) return;
                    let r = e.touches[0],
                        t = r.clientX,
                        s = r.clientY,
                        n = performance.now(),
                        a = n - F;
                    if (!w) {
                        let e = Math.abs(t - u),
                            r = Math.abs(s - h);
                        (e > 10 || r > 10) && (y(e > r), j(!0))
                    }
                    if (!w || !v) return;
                    e.preventDefault(), e.stopPropagation(), a > 0 && z((t - p) / a * 1e3), f(t), M(n);
                    let i = t - u,
                        m = i;
                    (!_ && i > 0 || !L && i < 0) && (m = i * l), C(m)
                }, [k, w, v, u, h, p, F, _, L, l]), W = (0, n.useCallback)(() => {
                    if (!o && k) {
                        if (w && v) {
                            let e = p - u,
                                r = performance.now() - T,
                                n = r > 0 ? e / r * 1e3 : 0,
                                i = Math.abs(n),
                                m = Math.abs(e) > d || i > 200;
                            A(B(e, n)), m && (e > 0 ? a((s - 1 + t) % t) : e < 0 && a((s + 1) % t))
                        } else A(250);
                        R()
                    }
                }, [k, w, v, p, u, T, B, a, s, t, R]), D = (0, n.useCallback)(e => {
                    i && (x(!0), b(e.clientX), f(e.clientX), E(performance.now()), M(performance.now()), z(0), A(0))
                }, [i]), H = (0, n.useCallback)(e => {
                    if (!k || !i) return;
                    let r = e.clientX,
                        t = performance.now(),
                        s = t - F;
                    s > 0 && z((r - p) / s * 1e3), f(r), M(t);
                    let n = r - u,
                        a = n;
                    (!_ && n > 0 || !L && n < 0) && (a = n * l), C(a)
                }, [k, i, F, p, u, _, L, l]), O = (0, n.useCallback)(() => {
                    if (!k || !i) return;
                    let e = p - u,
                        r = performance.now() - T,
                        t = r > 0 ? e / r * 1e3 : 0,
                        n = Math.abs(t),
                        m = Math.abs(e) > d || n > 200;
                    A(B(e, t)), m && (e > 0 && _ ? a(s - 1) : e < 0 && L && a(s + 1)), R()
                }, [k, i, p, u, T, B, _, L, a, s, R]);
                (0, n.useEffect)(() => {
                    let e = c.current;
                    if (e) return e.addEventListener("touchstart", I, {
                        passive: !1
                    }), e.addEventListener("touchmove", G, {
                        passive: !1
                    }), e.addEventListener("touchend", W, {
                        passive: !1
                    }), i && e.addEventListener("mousedown", D), () => {
                        e.removeEventListener("touchstart", I), e.removeEventListener("touchmove", G), e.removeEventListener("touchend", W), i && e.removeEventListener("mousedown", D)
                    }
                }, [I, G, W, D, i]), (0, n.useEffect)(() => {
                    if (!k || !i) return;
                    let e = e => H(e),
                        r = () => O();
                    return document.addEventListener("mousemove", e), document.addEventListener("mouseup", r), () => {
                        document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", r)
                    }
                }, [k, i, H, O]);
                let U = (0, n.useCallback)(() => ({
                    transform: "translateX(calc(-".concat(100 * s, "% + ").concat(N, "px))"),
                    transition: k || !m ? "none" : "transform ".concat(S, "ms cubic-bezier(0.25, 0.46, 0.45, 0.94)")
                }), [s, N, k, S]);
                return {
                    containerRef: c,
                    swipeState: {
                        transform: N,
                        transitionDuration: S,
                        isDragging: k
                    },
                    getContainerStyle: U,
                    canScrollLeft: _,
                    canScrollRight: L,
                    dragVelocity: P,
                    resetDragState: R
                }
            }
            var o = t(51719),
                c = t(29288);
            let d = e => {
                let {
                    content: r,
                    title: t,
                    id: i,
                    isFullscreen: m = !1,
                    site: l
                } = e, [d, u] = (0, n.useState)(!1), {
                    columnCount: b,
                    useHighestQualityImages: h,
                    useLowQualityGallery: g
                } = (0, c.t0)(), [p, f] = function() {
                    let e = (0, n.useRef)(null),
                        [r, t] = (0, n.useState)(0);
                    return (0, n.useEffect)(() => {
                        if (!e.current) return;
                        let r = new ResizeObserver(e => {
                            let [r] = e;
                            t(r.contentRect.width)
                        });
                        return r.observe(e.current), () => r.disconnect()
                    }, []), [e, r]
                }(), k = (0, n.useMemo)(() => {
                    var e, t;
                    let s = r.display_url || r.preview_url || r.source_url || (null === (e = r.source) || void 0 === e ? void 0 : e.replace(/&amp;/g, "&")) || "",
                        n = r.preview_url || "",
                        i = r.display_url || "",
                        m = r.source_url || (null === (t = r.source) || void 0 === t ? void 0 : t.replace(/&amp;/g, "&")) || r.display_url || "",
                        l = r.width || 640,
                        o = r.height || Math.round(9 / 16 * l),
                        c = (0, a.q8)(l, o);
                    return {
                        imageUrl: s,
                        previewUrl: n,
                        sampleUrl: i,
                        fullUrl: m,
                        width: l,
                        height: o,
                        isLong: c,
                        isGif: r.source.includes(".gif")
                    }
                }, [r.display_url, r.preview_url, r.source_url, r.source, r.width, r.height]), x = (0, n.useMemo)(() => {
                    let {
                        width: e,
                        height: r,
                        isLong: t
                    } = k;
                    if (!m) return "".concat(e, "/").concat(Math.min(r, e * a.HX));
                    if (t) return "".concat(e, "/").concat(r);
                    let s = window.innerWidth,
                        n = window.innerHeight,
                        i = e / r;
                    return i > s / n ? "".concat(s, "/").concat(s / i) : "".concat(n * i, "/").concat(n)
                }, [k, m]), v = (0, n.useCallback)((e, r, t, s, n) => {
                    let i;
                    if (!e) return {};
                    let m = e.sort((e, r) => e.width - r.width);
                    if (r) {
                        let e = window.innerWidth,
                            r = window.innerHeight,
                            n = t / s;
                        if (n > e / r) i = "100vw";
                        else {
                            let t = Math.round(r * n / e * 100);
                            i = "".concat(t, "vw")
                        }
                    } else if (n) i = "".concat(n, "px");
                    else {
                        let e = "Automatic" === b ? (0, a.bQ)() : b;
                        i = "".concat(1 / e * 100, "vw")
                    }
                    return {
                        srcSet: m.map(e => "".concat(e.url, " ").concat(e.width, "w")).join(", "),
                        sizes: i,
                        src: m[m.length - 1].url
                    }
                }, [b]), y = (0, n.useMemo)(() => "reddit.com" === l ? v(r.resolutions, m, k.width, k.height, f) : {}, [l, m, h, g, r.resolutions, k.width, k.height, f, v]), w = (0, n.useMemo)(() => !m && (g || "gelbooru.com" === l) ? k.previewUrl : m && h ? k.fullUrl : m && r.display_url.includes("gelbooru") ? (0, a.l)(r.display_url) : r.display_url, [m, g, h, k.previewUrl, k.fullUrl, r.display_url, l]), j = (0, n.useMemo)(() => !m && g ? null : "reddit.com" === l ? k.previewUrl : m && h ? k.sampleUrl : k.previewUrl, [l, m, h, g, k.previewUrl, k.sampleUrl]), N = (0, n.useCallback)(() => u(!0), []);
                return k.isGif ? (0, s.jsx)("div", {
                    ref: p,
                    className: "relative w-full ".concat(m && k.isLong ? "h-auto" : "h-full"),
                    style: {
                        aspectRatio: x,
                        overflow: m && k.isLong ? "auto" : "hidden"
                    },
                    children: (0, s.jsx)("img", {
                        src: r.source,
                        alt: t || "Image ".concat(i),
                        className: "".concat(m && k.isLong ? "relative w-full h-auto" : "absolute inset-0 object-contain", " select-none"),
                        style: {
                            height: m && k.isLong ? "auto" : "100%",
                            width: "100%"
                        },
                        draggable: !1
                    })
                }) : k.isLong && !m ? (0, s.jsxs)("div", {
                    className: "relative w-full group",
                    style: {
                        aspectRatio: x,
                        overflow: "hidden"
                    },
                    children: [(0, s.jsx)("img", {
                        alt: t || "Image ".concat(i),
                        className: "absolute inset-0 object-cover object-top",
                        style: {
                            opacity: d ? 1 : 0,
                            transition: "opacity ease-out",
                            width: "100%"
                        },
                        onLoad: N,
                        ...y,
                        src: w
                    }), (0, s.jsx)("div", {
                        className: "absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center text-white transition-opacity duration-200",
                        children: (0, s.jsx)(o.A, {
                            className: "w-6 h-6 sm:w-9 sm:h-9"
                        })
                    })]
                }) : (0, s.jsxs)("div", {
                    ref: p,
                    className: "relative w-full ".concat(m && k.isLong ? "h-auto" : "h-full"),
                    style: {
                        aspectRatio: x,
                        overflow: m && k.isLong ? void 0 : "hidden"
                    },
                    children: [j && (0, s.jsx)("img", {
                        src: j,
                        alt: "",
                        className: "absolute inset-0 object-contain select-none",
                        style: {
                            width: "100%",
                            height: "100%"
                        },
                        draggable: !1
                    }), (0, s.jsx)("img", { ...y,
                        src: w,
                        alt: t,
                        decoding: "async",
                        className: "".concat(m && k.isLong ? "relative w-full h-auto" : "absolute inset-0 object-contain", " select-none"),
                        style: {
                            opacity: g || d ? 1 : 0,
                            visibility: g || d ? "visible" : "hidden",
                            transition: "opacity ease-out",
                            width: "100%",
                            height: m && k.isLong ? "auto" : "100%"
                        },
                        onLoad: N,
                        draggable: !1
                    })]
                })
            };

            function u(e) {
                let {
                    images: r,
                    aspectRatio: t,
                    title: o,
                    content: c,
                    currentIndex: u,
                    setCurrentIndex: b
                } = e, h = (0, a.Fr)(), {
                    containerRef: g,
                    swipeState: p,
                    getContainerStyle: f,
                    canScrollLeft: k,
                    canScrollRight: x
                } = l({
                    totalItems: r.length,
                    currentIndex: u,
                    onIndexChange: b,
                    enableMouse: !1,
                    isMobile: h,
                    resistance: .3
                }), v = (0, n.useMemo)(() => t || ((null == r ? void 0 : r.length) ? r.map(e => e.width / e.height)[0] : 16 / 9), [r, t]), y = e => {
                    var r, t, s, n, a;
                    let i = null === (r = e.resolutions) || void 0 === r ? void 0 : r.map(e => ({ ...e,
                        url: e.url || e.display_url || ""
                    }));
                    return { ...e,
                        source: e.source || e.url || "",
                        display_url: e.display_url || e.url || "",
                        preview_url: e.preview_url || (null === (s = e.resolutions) || void 0 === s ? void 0 : null === (t = s[0]) || void 0 === t ? void 0 : t.display_url) || (null === (a = e.resolutions) || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : n.url) || "",
                        source_url: e.source_url || "",
                        resolutions: i
                    }
                }, w = () => {
                    b(e => (e + 1) % r.length)
                }, j = () => {
                    b(e => (e - 1 + r.length) % r.length)
                };
                return (null == r ? void 0 : r.length) ? (0, s.jsxs)("div", {
                    className: "relative group select-none overflow-hidden",
                    style: {
                        width: "100%",
                        paddingBottom: "".concat(1 / v * 100, "%")
                    },
                    children: [(0, s.jsx)("div", {
                        className: "absolute inset-0 flex",
                        style: f(),
                        children: r.map((e, t) => {
                            var n, a, i, m, l, c, b, g, p;
                            let f = t === u,
                                k = h ? 0 : 1,
                                x = Math.abs(t - u) <= k,
                                v = Math.abs(t - u) + r.length <= k || Math.abs(t - u) - r.length >= -k;
                            if (!f && !x && !v) return (0, s.jsx)("div", {
                                className: "w-full h-full flex-shrink-0 relative",
                                children: (0, s.jsx)("img", {
                                    src: (null === (a = e.resolutions) || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : n.url) || (null === (m = e.resolutions) || void 0 === m ? void 0 : null === (i = m[0]) || void 0 === i ? void 0 : i.display_url)
                                })
                            }, t);
                            if ((null === (l = e.source) || void 0 === l ? void 0 : l.includes(".gif")) && h) return (0, s.jsxs)("div", {
                                className: "w-full h-full flex-shrink-0 relative",
                                children: [(0, s.jsx)("img", {
                                    src: (null === (b = e.resolutions) || void 0 === b ? void 0 : null === (c = b[0]) || void 0 === c ? void 0 : c.url) || (null === (p = e.resolutions) || void 0 === p ? void 0 : null === (g = p[0]) || void 0 === g ? void 0 : g.display_url),
                                    alt: o,
                                    className: "absolute inset-0 z-10 object-contain",
                                    style: {
                                        width: "100%",
                                        height: "100%"
                                    }
                                }), (0, s.jsx)("div", {
                                    className: "z-20 absolute bottom-0 left-0 right-0 p-2 flex items-center justify-between transition-opacity duration-200 pointer-events-none",
                                    style: {
                                        fontSize: "max(0.5vw, 12px)"
                                    },
                                    children: (0, s.jsx)("button", {
                                        className: "w-[2em] h-[2em] flex items-center justify-center bg-black/30 rounded hover:bg-black/70 transition-colors pointer-events-auto",
                                        children: (0, s.jsx)("svg", {
                                            className: "w-[1.3em] h-[1.3em] text-white",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: (0, s.jsx)("path", {
                                                d: "M8 5v14l11-7z"
                                            })
                                        })
                                    })
                                })]
                            }, t);
                            let w = y(e);
                            return (0, s.jsx)("div", {
                                className: "w-full h-full flex-shrink-0 relative",
                                children: (0, s.jsx)(d, {
                                    content: w,
                                    title: o || "Image ".concat(t + 1),
                                    id: t,
                                    isFullscreen: !1,
                                    site: "reddit.com"
                                })
                            }, t)
                        })
                    }), r.length > 1 && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("button", {
                            onClick: e => {
                                e.stopPropagation(), j()
                            },
                            className: "absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-1 transition-all hidden md:block opacity-0 group-hover:opacity-100 hover:bg-black/70",
                            children: (0, s.jsx)(i.A, {
                                className: "w-7 h-7 text-white"
                            })
                        }), (0, s.jsx)("button", {
                            onClick: e => {
                                e.stopPropagation(), w()
                            },
                            className: "absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-1 transition-all hidden md:block opacity-0 group-hover:opacity-100 hover:bg-black/70",
                            children: (0, s.jsx)(m.A, {
                                className: "w-7 h-7 text-white"
                            })
                        })]
                    }), r.length > 1 && (0, s.jsxs)("div", {
                        className: "absolute bottom-1 right-1 bg-black/50 text-white text-sm px-1 py-0.5 rounded-full sm:bottom-2 sm:right-2 sm:px-2 sm:py-1",
                        children: [u + 1, " / ", r.length]
                    })]
                }) : null
            }
            var b = t(77711),
                h = t(8898);
            let g = (0, b.default)(() => t.e(343).then(t.bind(t, 73343)), {
                loadableGenerated: {
                    webpack: () => [73343]
                }
            });

            function p(e) {
                let {
                    src: r,
                    width: t,
                    height: a,
                    poster: i,
                    post: m,
                    className: l,
                    isFullscreen: o = !1,
                    onFullscreen: c
                } = e, d = (0, n.useMemo)(() => {
                    var e, r;
                    return (null == m ? void 0 : null === (r = m.preview) || void 0 === r ? void 0 : null === (e = r.images) || void 0 === e ? void 0 : e[0]) ? (0, h.p)(m.preview.images[0]) : null
                }, [m]), u = null == m ? void 0 : m.processedContent;
                if (!u) return null;
                let b = (() => {
                    if (u.processedVideo) return {
                        source: u.processedVideo.source,
                        sources: u.sources,
                        poster: u.processedVideo.poster,
                        width: u.width,
                        height: u.height,
                        duration: u.processedVideo.duration
                    };
                    if ("video" === u.type) return {
                        source: u.hlsSource || u.dashSource || u.source,
                        sources: u.sources,
                        fallbackUrl: u.source,
                        poster: u.poster || (null == d ? void 0 : d.url),
                        width: u.width,
                        height: u.height,
                        duration: u.duration,
                        bitrate: u.bitrate
                    };
                    if ("embed" === u.type) {
                        var e, r;
                        return {
                            source: (null === (e = u.processedVideo) || void 0 === e ? void 0 : e.source) || null,
                            poster: (null === (r = u.processedVideo) || void 0 === r ? void 0 : r.poster) || null,
                            sources: u.sources,
                            width: u.width,
                            height: u.height
                        }
                    }
                    return null
                })();
                return (null == b ? void 0 : b.source) ? (0, s.jsx)("div", {
                    className: "media-player relative ".concat(l, " ").concat(o ? "absolute inset-0" : ""),
                    children: (0, s.jsx)(g, {
                        post: m,
                        src: b.source_url,
                        sources: b.sources,
                        fallbackUrl: b.fallbackUrl,
                        id: (null == m ? void 0 : m.id) || "direct-video",
                        poster: i || b.poster || (null == d ? void 0 : d.url),
                        height: a || b.height,
                        width: t || b.width,
                        duration: b.duration,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        onFullscreen: e => {
                            c && c()()
                        },
                        isFullscreen: o,
                        className: "w-full h-full object-contain"
                    })
                }) : null
            }
            var f = t(44504);

            function k(e) {
                let {
                    src: r,
                    width: t,
                    height: n,
                    onFullscreen: a,
                    isFullscreen: i = !1
                } = e;
                return (0, s.jsxs)("div", {
                    className: "relative w-full h-full group",
                    children: [(0, s.jsx)("iframe", {
                        src: r,
                        className: "w-full h-full",
                        style: {
                            aspectRatio: t && n ? "".concat(t, "/").concat(n) : "16/9"
                        },
                        frameBorder: "0",
                        scrolling: "no",
                        allowFullScreen: !0
                    }), !i && a && (0, s.jsx)("button", {
                        onClick: e => {
                            e.stopPropagation(), a()
                        },
                        className: "absolute top-2 left-2 w-8 h-8 flex items-center justify-center bg-black/50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white hover:bg-black/70 z-10",
                        children: (0, s.jsx)(f.A, {
                            className: "w-5 h-5"
                        })
                    })]
                })
            }
            var x = t(48173),
                v = t.n(x),
                y = t(54113),
                w = t(44857),
                j = t(82929),
                N = t(45471),
                C = t(20669);
            let S = new Map;

            function A(e, r) {
                let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    [s, a] = (0, n.useState)(r),
                    [i, m] = (0, n.useState)(!1),
                    l = (0, n.useMemo)(() => r ? Object.values(r).flat() : [], [r]),
                    o = l.join(",");
                return (0, n.useEffect)(() => {
                    if (a(r), !t || 0 === l.length || !e.includes("gelbooru")) return;
                    let s = !0,
                        n = (e, r) => {
                            let t = {
                                artist: [],
                                character: [],
                                copyright: [],
                                species: [],
                                general: [],
                                metadata: []
                            };
                            e.forEach(e => {
                                let s = r[e] || "general";
                                t[s] || (t[s] = []), t[s].push(e)
                            }), a(t)
                        };
                    return (async () => {
                        let e = l.filter(e => !S.has(e));
                        if (0 === e.length) {
                            n(l, Object.fromEntries(S));
                            return
                        }
                        m(!0);
                        try {
                            let r = await fetch("https://scrollx.org/api/get-tag-categories", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    tags: e
                                })
                            });
                            if (!r.ok) throw Error("Failed to fetch from Tag Worker");
                            let t = await r.json();
                            Object.entries(t).forEach(e => {
                                let [r, t] = e;
                                S.set(r, t)
                            }), s && n(l, Object.fromEntries(S))
                        } catch (e) {
                            console.error("Tag categorization failed:", e)
                        } finally {
                            s && m(!1)
                        }
                    })(), () => {
                        s = !1
                    }
                }, [e, o, t]), {
                    categorizedTags: s,
                    isLoading: i
                }
            }
            var T = t(65498),
                E = t(187),
                P = (t(28701), t(94696), t(20750)),
                z = t(1466),
                F = t(42594),
                M = t(56119),
                _ = t(48617),
                L = t(25666),
                B = t(33565),
                R = t(79928),
                I = t(35765),
                G = t(20853),
                W = t(36527),
                D = t(33473),
                H = t(42640);
            let O = {
                    general: {
                        normal: "bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white active:text-white border-slate-600/50",
                        selected: "bg-slate-500/40 hover:bg-slate-500/50 text-slate-100 hover:text-white active:text-white border-slate-400/80 shadow-[0_0_16px_rgba(148,163,184,0.5)]",
                        icon: "text-slate-400"
                    },
                    character: {
                        normal: "bg-blue-700 hover:bg-blue-600 text-blue-50 hover:text-white active:text-white border-blue-500/50",
                        selected: "bg-blue-500/40 hover:bg-blue-500/50 text-blue-100 hover:text-white active:text-white border-blue-400/80 shadow-[0_0_16px_rgba(96,165,250,0.6)]",
                        icon: "text-blue-400"
                    },
                    copyright: {
                        normal: "bg-purple-700 hover:bg-purple-600 text-purple-50 hover:text-white active:text-white border-purple-500/50",
                        selected: "bg-purple-500/40 hover:bg-purple-500/50 text-purple-100 hover:text-white active:text-white border-purple-400/80 shadow-[0_0_16px_rgba(192,132,252,0.6)]",
                        icon: "text-purple-400"
                    },
                    artist: {
                        normal: "bg-emerald-700 hover:bg-emerald-600 text-emerald-50 hover:text-white active:text-white border-emerald-500/50",
                        selected: "bg-emerald-500/40 hover:bg-emerald-500/50 text-emerald-100 hover:text-white active:text-white border-emerald-400/80 shadow-[0_0_16px_rgba(52,211,153,0.6)]",
                        icon: "text-emerald-400"
                    },
                    metadata: {
                        normal: "bg-amber-700 hover:bg-amber-600 text-amber-50 hover:text-white active:text-white border-amber-500/50",
                        selected: "bg-amber-500/40 hover:bg-amber-500/50 text-amber-100 hover:text-white active:text-white border-amber-400/80 shadow-[0_0_16px_rgba(251,191,36,0.6)]",
                        icon: "text-amber-400"
                    },
                    species: {
                        normal: "bg-rose-700 hover:bg-rose-600 text-rose-50 hover:text-white active:text-white border-rose-500/50",
                        selected: "bg-rose-500/40 hover:bg-rose-500/50 text-rose-100 hover:text-white active:text-white border-rose-400/80 shadow-[0_0_16px_rgba(251,113,133,0.6)]",
                        icon: "text-rose-400"
                    },
                    circle: {
                        normal: "bg-pink-700 hover:bg-pink-600 text-pink-50 hover:text-white active:text-white border-pink-500/50",
                        selected: "bg-pink-500/40 hover:bg-pink-500/50 text-pink-100 hover:text-white active:text-white border-pink-400/80 shadow-[0_0_16px_rgba(244,114,182,0.6)]",
                        icon: "text-pink-400"
                    },
                    style: {
                        normal: "bg-indigo-700 hover:bg-indigo-600 text-indigo-50 hover:text-white active:text-white border-indigo-500/50",
                        selected: "bg-indigo-500/40 hover:bg-indigo-500/50 text-indigo-100 hover:text-white active:text-white border-indigo-400/80 shadow-[0_0_16px_rgba(129,140,248,0.6)]",
                        icon: "text-indigo-400"
                    }
                },
                U = {
                    general: N.A,
                    character: z.A,
                    copyright: F.A,
                    artist: M.A,
                    metadata: _.A,
                    species: L.A,
                    circle: B.A,
                    style: R.A
                },
                X = (0, n.memo)(e => {
                    let {
                        name: r,
                        displayName: t,
                        category: a,
                        selectionType: i,
                        site: m,
                        searchInput: l,
                        onSearchChange: o,
                        addToBlacklist: c
                    } = e, [d, u] = (0, n.useState)(!1), [b, h] = (0, n.useState)(!1), g = O[a] || O.general, p = U[a] || N.A, f = i ? g.selected : g.normal, k = "/".concat(m, "?q=").concat(r), x = (0, n.useCallback)(() => {
                        h(!0), u(!0)
                    }, []), v = (0, n.useCallback)(() => {
                        let e = l.split(" ").filter(Boolean);
                        e.includes(r) || o([...e, r].join(" ")), u(!1)
                    }, [l, r, o]), y = (0, n.useCallback)(() => {
                        let e = l.split(" ").filter(Boolean);
                        e.includes("-".concat(r)) || o([...e, "-".concat(r)].join(" ")), u(!1)
                    }, [l, r, o]), w = (0, n.useCallback)(() => {
                        o(r), u(!1)
                    }, [r, o]), j = (0, n.useCallback)(() => {
                        c(m, r), u(!1)
                    }, [m, r, c]), C = (0, n.useCallback)(() => {
                        let e = l.split(" ").filter(Boolean);
                        if ((e = e.filter(e => e !== r)).includes("(") && e.includes(")")) {
                            let r = e.indexOf("("),
                                t = e.indexOf(")"),
                                s = e.slice(r + 1, t).filter((e, r, t) => !("~" === e && (0 === r || r === t.length - 1))).filter((e, r, t) => !("~" === e && "~" === t[r - 1]));
                            0 === s.length ? e.splice(r, t - r + 1) : 1 === s.length ? e.splice(r, t - r + 1, s[0]) : e.splice(r + 1, t - r - 1, ...s)
                        }
                        o(e.join(" ")), u(!1)
                    }, [l, r, o]), S = (0, s.jsxs)("button", {
                        className: "flex items-center gap-1.5 rounded-full px-3 py-1.5 h-8 text-sm font-medium border transition-all duration-200 \n        ease-out hover:text-white max-w-[90vw] min-w-0 cursor-pointer ".concat(f, " ").concat(d ? "opacity-80" : ""),
                        children: [(0, s.jsx)(p, {
                            className: "h-3.5 w-3.5 flex-shrink-0 ".concat(g.icon)
                        }), (0, s.jsx)("span", {
                            className: "truncate",
                            children: t
                        })]
                    });
                    if (0 !== r.length) return b ? (0, s.jsxs)(P.rI, {
                        modal: !1,
                        open: d,
                        onOpenChange: u,
                        children: [(0, s.jsx)(P.ty, {
                            asChild: !0,
                            onPointerDown: e => e.preventDefault(),
                            onClick: () => u(e => !e),
                            children: (0, s.jsx)("a", {
                                href: k,
                                target: "_blank",
                                rel: "noreferrer noopener",
                                onClick: e => e.preventDefault(),
                                children: S
                            })
                        }), d && (0, s.jsxs)(P.SQ, {
                            "data-sheet-ignore-click-away": !0,
                            className: "bg-zinc-900/95 backdrop-blur-sm text-zinc-200 border-zinc-800 shadow-xl py-1 w-56",
                            sideOffset: 5,
                            children: [(0, s.jsxs)("a", {
                                href: k,
                                target: "_blank",
                                rel: "noreferrer noopener",
                                className: "flex items-center gap-3 px-4 py-2.5 text-base cursor-pointer hover:bg-zinc-800 text-zinc-200 no-underline",
                                onClick: () => u(!1),
                                children: [(0, s.jsx)(I.A, {
                                    className: "h-5 w-5 text-zinc-400"
                                }), (0, s.jsx)("span", {
                                    children: "Open in new tab"
                                })]
                            }), (0, s.jsx)(P.mB, {
                                className: "bg-zinc-800 p-0 m-0.5"
                            }), (0, s.jsxs)(P._2, {
                                onClick: w,
                                className: "flex items-center gap-3 px-4 py-2.5 text-base cursor-pointer focus:bg-zinc-800 focus:text-white",
                                children: [(0, s.jsx)(G.A, {
                                    className: "h-5 w-5 text-blue-400"
                                }), (0, s.jsx)("span", {
                                    children: "Set tag"
                                })]
                            }), (0, s.jsx)(P.mB, {
                                className: "bg-zinc-800 p-0 m-0.5"
                            }), "exact" === i ? (0, s.jsxs)(P._2, {
                                onClick: C,
                                className: "flex items-center gap-3 px-4 py-2.5 text-base cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800 focus:text-white",
                                children: [(0, s.jsx)(W.A, {
                                    className: "h-4 w-4 text-rose-400"
                                }), (0, s.jsx)("span", {
                                    children: "Remove tag"
                                })]
                            }) : (0, s.jsxs)(P._2, {
                                onClick: v,
                                className: "flex items-center gap-3 px-4 py-2.5 text-base cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800 focus:text-white",
                                children: [(0, s.jsx)(D.A, {
                                    className: "h-4 w-4 text-emerald-400"
                                }), (0, s.jsx)("span", {
                                    children: "Add tag"
                                })]
                            }), (0, s.jsx)(P.mB, {
                                className: "bg-zinc-800 p-0 m-0.5"
                            }), "exact" !== i && (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsxs)(P._2, {
                                    onClick: y,
                                    className: "flex items-center gap-3 px-4 py-2.5 text-base cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800 focus:text-white",
                                    children: [(0, s.jsx)(W.A, {
                                        className: "h-5 w-5 text-rose-400"
                                    }), (0, s.jsx)("span", {
                                        children: "Exclude tag"
                                    })]
                                }), (0, s.jsx)(P.mB, {
                                    className: "bg-zinc-800 p-0 m-0.5"
                                })]
                            }), (0, s.jsxs)(P._2, {
                                onClick: j,
                                className: "flex items-center gap-3 px-4 py-2.5 text-base cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800 focus:text-white",
                                children: [(0, s.jsx)(H.A, {
                                    className: "h-5 w-5"
                                }), (0, s.jsx)("span", {
                                    children: "Add to blacklist"
                                })]
                            })]
                        })]
                    }) : (0, s.jsx)("div", {
                        onClick: x,
                        children: S
                    })
                }, (e, r) => e.name === r.name && e.category === r.category && e.isSelected === r.isSelected && e.searchInput === r.searchInput && e.onSearchChange === r.onSearchChange && e.addToBlacklist === r.addToBlacklist);
            X.displayName = "TagItem";
            var q = t(34362);
            let Y = ["artist", "character", "copyright", "species", "general", "metadata"];

            function V(e) {
                let {
                    tags: r
                } = e, {
                    site: t,
                    searchInput: a,
                    onSearchChange: i
                } = (0, C.E)(), {
                    addToBlacklist: m
                } = (0, E.a)(), [l, o] = (0, n.useState)(!1), [c, d] = (0, n.useState)(null), u = (0, n.useRef)(!1), {
                    exactTags: b,
                    wildcardPatterns: h
                } = (0, n.useMemo)(() => {
                    let e = a.split(" ").filter(Boolean);
                    return {
                        exactTags: new Set(e.filter(e => !e.includes("*"))),
                        wildcardPatterns: e.filter(e => e.includes("*")).map(e => {
                            let r = e.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
                            return RegExp("^".concat(r, "$"), "i")
                        })
                    }
                }, [a]), g = (0, n.useCallback)(e => b.has(e) ? "exact" : h.some(r => r.test(e)) ? "wildcard" : null, [b, h]), p = (0, n.useMemo)(() => Object.entries(r).filter(e => {
                    let [r, t] = e;
                    return t.length > 0
                }).sort((e, r) => {
                    let [t] = e, [s] = r;
                    return (-1 === Y.indexOf(t) ? 99 : Y.indexOf(t)) - (-1 === Y.indexOf(s) ? 99 : Y.indexOf(s))
                }), [r]), f = (0, n.useMemo)(() => {
                    let e = r.general || [];
                    if (0 === e.length) return [];
                    let t = {};
                    return e.forEach(e => {
                        let r = e.charAt(0).toUpperCase();
                        /[A-Z]/.test(r) || (r = "#"), t[r] || (t[r] = []), t[r].push(e)
                    }), Object.keys(t).sort((e, r) => "#" === e ? -1 : "#" === r ? 1 : e.localeCompare(r)).map(e => ({
                        letter: e,
                        tagList: t[e]
                    }))
                }, [r]), k = (0, n.useCallback)(e => {
                    let r = document.getElementById("tag-group-".concat(e));
                    r && (r.scrollIntoView({
                        behavior: "instant",
                        block: "center"
                    }), d(e))
                }, []);
                return (0, s.jsxs)("div", {
                    className: "relative h-full",
                    children: [(0, s.jsxs)("div", {
                        className: "space-y-4",
                        children: [p.map(e => {
                            let [r, n] = e;
                            return (0, s.jsxs)("div", {
                                className: "relative",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex items-baseline gap-2",
                                        children: [(0, s.jsx)("h3", {
                                            className: "text-lg font-bold capitalize text-gray-300",
                                            children: r
                                        }), "general" === r && !1]
                                    }), "general" === r && !1]
                                }), "general" === r && l ? (0, s.jsx)("div", {
                                    className: "space-y-5",
                                    children: f.map(e => {
                                        let {
                                            letter: n,
                                            tagList: l
                                        } = e;
                                        return (0, s.jsxs)("div", {
                                            id: "tag-group-".concat(n),
                                            "data-group-letter": n,
                                            className: "space-y-1 scroll-mt-2",
                                            children: [(0, s.jsxs)("div", {
                                                className: "flex items-center gap-3",
                                                children: [(0, s.jsx)("span", {
                                                    className: "text-sm font-bold w-4 text-center transition-colors duration-200 ".concat(c === n ? "text-blue-400 scale-110" : "text-zinc-500"),
                                                    children: n
                                                }), (0, s.jsx)("div", {
                                                    className: "flex-1 h-px transition-colors duration-200 ".concat(c === n ? "bg-blue-500/50" : "bg-zinc-800/50")
                                                })]
                                            }), (0, s.jsx)("div", {
                                                className: "flex flex-wrap gap-2 pl-7",
                                                children: l.map(e => (0, s.jsx)(X, {
                                                    name: e,
                                                    displayName: (0, q.t)(e),
                                                    category: r,
                                                    selectionType: g(e),
                                                    site: t,
                                                    searchInput: a,
                                                    onSearchChange: i,
                                                    addToBlacklist: m
                                                }, e))
                                            })]
                                        }, n)
                                    })
                                }) : (0, s.jsx)("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: n.map(e => (0, s.jsx)(X, {
                                        name: e,
                                        displayName: (0, q.t)(e),
                                        category: r,
                                        selectionType: g(e),
                                        site: t,
                                        searchInput: a,
                                        onSearchChange: i,
                                        addToBlacklist: m
                                    }, e))
                                })]
                            }, r)
                        }), l && (0, s.jsx)("div", {
                            className: "h-[6vh] w-full shrink-0",
                            "aria-hidden": "true"
                        })]
                    }), l && f.length > 0 && (0, s.jsx)("div", {
                        className: "draggable-item opacity-70 sticky bottom-4 z-50 mx-auto max-w-[95%] sm:max-w-md \n            flex flex-wrap justify-center gap-0.5 p-1.5  backdrop-blur-md rounded-xl border \n            border-zinc-800/80 shadow-[0_-4px_20px_rgba(0,0,0,0.6)] touch-none select-none",
                        onPointerDown: e => {
                            e.preventDefault(), e.stopPropagation(), u.current = !0;
                            let r = e.target;
                            r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId);
                            let t = r.getAttribute("data-letter");
                            t && k(t)
                        },
                        onPointerMove: e => {
                            if ("mouse" === e.pointerType && 0 === e.buttons) {
                                u.current = !1;
                                return
                            }
                            if (!u.current) return;
                            e.preventDefault(), e.stopPropagation();
                            let r = document.elementFromPoint(e.clientX, e.clientY),
                                t = null == r ? void 0 : r.getAttribute("data-letter");
                            t && t !== c && k(t)
                        },
                        onPointerUp: () => u.current = !1,
                        onPointerCancel: () => u.current = !1,
                        children: f.map(e => {
                            let {
                                letter: r
                            } = e, t = c === r;
                            return (0, s.jsx)("button", {
                                "data-letter": r,
                                className: "w-8 h-9 flex items-center justify-center text-[13px] font-bold rounded transition-all duration-150 ".concat(t ? "bg-blue-600 text-white shadow-md scale-110 z-10" : "text-zinc-100 active:bg-zinc-700"),
                                "aria-label": "Scroll to ".concat(r),
                                children: r
                            }, r)
                        })
                    })]
                })
            }

            function Z(e) {
                let {
                    isOpen: r,
                    onClose: t,
                    tags: a
                } = e, {
                    site: i
                } = (0, C.E)(), [m, l] = (0, n.useState)(() => window.innerWidth < 768), {
                    categorizedTags: o,
                    isLoading: c
                } = A(i, a, r);
                return (0, n.useEffect)(() => {
                    let e = () => l(window.innerWidth < 768);
                    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []), (0, s.jsx)(T.A, {
                    isOpen: r,
                    onClose: t,
                    ariaLabel: "Tag Panel",
                    fitContent: !0,
                    children: (0, s.jsx)("div", {
                        className: "p-4",
                        children: (0, s.jsx)(V, {
                            tags: o
                        })
                    })
                })
            }
            let J = e => {
                let {
                    gifUrl: r,
                    placeholderUrl: t,
                    altText: i,
                    onFullscreen: m
                } = e, {
                    playMode: l
                } = (0, c.t0)(), [o, d] = (0, n.useState)(!1), [u, b] = (0, n.useState)(!1), [h, g] = (0, n.useState)(!1), p = (0, n.useRef)(null), k = (0, a.Fr)();
                (0, n.useEffect)(() => {
                    if ("auto" !== l) return;
                    let e = new IntersectionObserver(e => {
                        let [r] = e;
                        g(r.intersectionRatio >= .5)
                    }, {
                        threshold: .5,
                        rootMargin: "0px"
                    });
                    return p.current && e.observe(p.current), () => {
                        p.current && e.unobserve(p.current)
                    }
                }, [l]), (0, n.useEffect)(() => {
                    switch (l) {
                        case "auto":
                            b(h);
                            break;
                        case "hover":
                            b(o);
                            break;
                        default:
                            b(!1)
                    }
                }, [l, h, o]);
                let x = e => {
                    e.stopPropagation(), e.preventDefault(), "click" === l && b(e => !e)
                };
                return (0, s.jsxs)("div", {
                    ref: p,
                    className: "relative",
                    onMouseEnter: () => d(!0),
                    onMouseLeave: () => d(!1),
                    children: [(0, s.jsx)("img", {
                        src: t,
                        alt: i,
                        style: {
                            display: u ? "none" : "block",
                            width: "100%",
                            height: "auto"
                        },
                        onClick: e => "click" === l && x(e)
                    }), (0, s.jsx)("img", {
                        src: r,
                        alt: i,
                        style: {
                            display: u ? "block" : "none",
                            width: "100%",
                            height: "auto"
                        },
                        onClick: e => "click" === l && x(e)
                    }), !k && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: "z-20 absolute bottom-0 left-0 right-0 p-2 flex items-center justify-between transition-opacity duration-200",
                            style: {
                                fontSize: "max(0.5vw, 12px)"
                            },
                            children: (0, s.jsx)("button", {
                                onClick: x,
                                className: "w-[2.5em] h-[2.5em] flex items-center justify-center bg-black/30 rounded hover:bg-black/70 transition-colors cursor-pointer",
                                children: u ? (0, s.jsxs)("svg", {
                                    className: "w-[1.3em] h-[1.3em] text-white",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: [(0, s.jsx)("rect", {
                                        x: "6",
                                        y: "4",
                                        width: "4",
                                        height: "16"
                                    }), (0, s.jsx)("rect", {
                                        x: "14",
                                        y: "4",
                                        width: "4",
                                        height: "16"
                                    })]
                                }) : (0, s.jsx)("svg", {
                                    className: "w-[1.3em] h-[1.3em] text-white",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0, s.jsx)("path", {
                                        d: "M8 5v14l11-7z"
                                    })
                                })
                            })
                        }), "click" === l && (0, s.jsx)("button", {
                            onClick: m,
                            className: "absolute top-2 left-2 w-8 h-8 flex items-center justify-center bg-black/50 rounded opacity-100 group-hover:opacity-100 transition-opacity duration-200 text-white hover:bg-black/70 z-10",
                            children: (0, s.jsx)(f.A, {
                                className: "w-5 h-5"
                            })
                        })]
                    })]
                })
            };
            var K = t(50971),
                Q = t(30814);
            let $ = e => {
                    let {
                        className: r,
                        ...t
                    } = e;
                    return (0, s.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "24",
                        viewBox: "0 0 24 24",
                        width: "24",
                        focusable: "false",
                        "aria-hidden": "true",
                        stroke: "currentColor",
                        fill: "none",
                        strokeWidth: 2,
                        className: r,
                        ...t,
                        children: (0, s.jsx)("path", {
                            d: "m13.202 3.368 9.438 7.865c.48.4.48 1.137 0 1.537l-9.438 7.865c-.652.543-1.64.08-1.64-.768V16H9.957c-2.778 0-5.406 1.263-7.141 3.432-.304.38-.912.086-.803-.388l1.118-4.843C3.968 10.572 7.2 8 10.926 8h.636V4.137c0-.848.989-1.311 1.64-.769Z"
                        })
                    })
                },
                ee = () => {
                    Q.oR.success("Link copied to clipboard!", {
                        duration: 1500,
                        position: "bottom-center",
                        style: {
                            marginBottom: "40px"
                        },
                        onClick: () => Q.oR.dismiss()
                    })
                };

            function er(e) {
                var r, t;
                let {
                    isOpen: i,
                    onClose: m,
                    shareUrl: l,
                    item: o,
                    onShare: c
                } = e, [d, u] = (0, n.useState)(!1), b = null !== (t = null == o ? void 0 : null === (r = o.source_links) || void 0 === r ? void 0 : r.filter(e => {
                    try {
                        let r = new URL(e);
                        return "https:" === r.protocol
                    } catch (e) {
                        return !1
                    }
                })) && void 0 !== t ? t : [], h = async () => {
                    try {
                        if (navigator.clipboard) {
                            await navigator.clipboard.writeText(l), u(!0), ee(), setTimeout(() => u(!1), 2e3);
                            return
                        }
                        let e = document.createElement("textarea");
                        e.value = l, e.style.position = "fixed", document.body.appendChild(e), e.focus(), e.select();
                        try {
                            if (document.execCommand("copy")) u(!0), ee(), setTimeout(() => u(!1), 2e3);
                            else throw Error("Copy command failed")
                        } finally {
                            document.body.removeChild(e)
                        }
                    } catch (e) {
                        console.error("Failed to copy:", e), Q.oR.error("Failed to copy link")
                    }
                }, g = async () => {
                    try {
                        if (navigator.share) await navigator.share({
                            title: o.title,
                            text: o.title,
                            url: l
                        });
                        else if (navigator.clipboard) await navigator.clipboard.writeText(l), ee();
                        else {
                            let e = document.createElement("textarea");
                            e.value = l, document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e), ee()
                        }
                        null == c || c("system")
                    } catch (e) {
                        "AbortError" !== e.name && Q.oR.error("Failed to share")
                    }
                }, p = () => {
                    let e = o.title;
                    return o.subreddit || (e = (0, a._C)(e)), e
                };
                return (0, s.jsxs)(T.A, {
                    isOpen: i,
                    onClose: m,
                    ariaLabel: "Tag Panel",
                    children: [(0, s.jsxs)("div", {
                        className: "flex items-center justify-between p-1 bg-gray-800 rounded-lg gap-2 w-full hover:bg-gray-700 cursor-pointer",
                        onClick: () => {
                            h(), null == c || c("copy")
                        },
                        children: [(0, s.jsx)("span", {
                            className: "text-sm text-gray-300 flex-1 min-w-0 line-clamp-1 break-all",
                            title: l,
                            children: l
                        }), (0, s.jsx)(K.T, {
                            size: "sm",
                            variant: "ghost",
                            onPress: e => {
                                h(), null == c || c("copy")
                            },
                            className: "text-white hover:bg-white/20 shrink-0 px-2 whitespace-nowrap",
                            children: d ? "Copied!" : "Copy"
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "space-y-3",
                        children: [(0, s.jsx)("h3", {
                            className: "text-md font-semibold text-gray-200 text-center",
                            children: "Share Post"
                        }), (0, s.jsxs)("div", {
                            className: "grid grid-cols-1 gap-3",
                            children: [(0, s.jsx)(K.T, {
                                startContent: (0, s.jsx)("svg", {
                                    className: "w-5 h-5",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0, s.jsx)("path", {
                                        d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                                    })
                                }),
                                onPress: () => {
                                    h(), null == c || c("discord")
                                },
                                className: "flex items-center justify-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg",
                                children: "Discord"
                            }), (0, s.jsx)(K.T, {
                                startContent: (0, s.jsx)("svg", {
                                    className: "w-5 h-5",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0, s.jsx)("path", {
                                        d: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
                                    })
                                }),
                                onPress: () => {
                                    window.open("https://www.reddit.com/submit?url=".concat(encodeURIComponent(l), "&title=").concat(encodeURIComponent(p())), "_blank"), null == c || c("reddit")
                                },
                                className: "flex items-center justify-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg",
                                children: "Reddit"
                            }), (0, s.jsx)(K.T, {
                                startContent: (0, s.jsx)("svg", {
                                    className: "w-5 h-5",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0, s.jsx)("path", {
                                        d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                    })
                                }),
                                onPress: () => {
                                    window.open("https://x.com/intent/post?url=".concat(encodeURIComponent(l)), "_blank"), null == c || c("x")
                                },
                                className: "flex items-center justify-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg",
                                children: "X"
                            }), (0, s.jsx)(K.T, {
                                startContent: (0, s.jsx)("svg", {
                                    className: "w-5 h-5",
                                    viewBox: "0 -3.268 64 68.414",
                                    fill: "currentColor",
                                    children: (0, s.jsx)("path", {
                                        d: "M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805zm36.254 0C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745z"
                                    })
                                }),
                                onPress: () => {
                                    p() && p(), window.open("https://bsky.app/intent/compose?text=".concat(encodeURIComponent(l)), "_blank"), null == c || c("bluesky")
                                },
                                className: "flex items-center justify-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg",
                                children: "Bluesky"
                            }), (0, s.jsx)(K.T, {
                                startContent: (0, s.jsx)("svg", {
                                    fill: "currentColor",
                                    className: "w-5 h-5",
                                    viewBox: "0 0 24 24",
                                    children: (0, s.jsx)("path", {
                                        d: "M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 .993-.019 2.181.012 3.441.103 4.243.778 8.425 4.701 9.463 1.809.479 3.362.579 4.612.51 2.268-.126 3.541-.809 3.541-.809l-.075-1.646s-1.621.511-3.441.449c-1.804-.062-3.707-.194-3.999-2.409a4.523 4.523 0 0 1-.04-.621s1.77.433 4.014.536c1.372.063 2.658-.08 3.965-.236 2.506-.299 4.688-1.843 4.962-3.254.434-2.223.398-5.424.398-5.424zm-3.353 5.59h-2.081V9.057c0-1.075-.452-1.62-1.357-1.62-1 0-1.501.647-1.501 1.927v2.791h-2.069V9.364c0-1.28-.501-1.927-1.502-1.927-.905 0-1.357.546-1.357 1.62v5.099H6.026V8.903c0-1.074.273-1.927.823-2.558.566-.631 1.307-.955 2.228-.955 1.065 0 1.872.409 2.405 1.228l.518.869.519-.869c.533-.819 1.34-1.228 2.405-1.228.92 0 1.662.324 2.228.955.549.631.822 1.484.822 2.558v5.253z"
                                    })
                                }),
                                onPress: () => {
                                    let e = prompt("Enter your Mastodon instance (e.g.: mastodon.social)", localStorage.getItem("mastodonInstance") || "mastodon.social");
                                    e && (localStorage.setItem("mastodonInstance", e), window.open("https://".concat(e, "/share?text=").concat(encodeURIComponent(l)), "_blank")), null == c || c("mastodon")
                                },
                                className: "flex items-center justify-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg",
                                children: "Mastodon"
                            }), (0, s.jsx)(K.T, {
                                startContent: (0, s.jsx)("svg", {
                                    className: "w-5 h-5",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0, s.jsx)("path", {
                                        d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                                    })
                                }),
                                onPress: () => {
                                    let e = encodeURIComponent(l);
                                    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? window.location.href = "whatsapp://send?text=".concat(e) : window.open("https://wa.me/?text=".concat(e), "_blank", "noopener,noreferrer"), null == c || c("whatsapp")
                                },
                                className: "flex items-center justify-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg",
                                children: "WhatsApp"
                            }), (0, s.jsx)(K.T, {
                                startContent: (0, s.jsx)("svg", {
                                    className: "w-5 h-5",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0, s.jsx)("path", {
                                        d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"
                                    })
                                }),
                                onPress: () => {
                                    let e = encodeURIComponent(l);
                                    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? window.location.href = "tg://msg_url?url=".concat(e) : window.open("https://t.me/share/url?url=".concat(e), "_blank", "noopener,noreferrer"), null == c || c("telegram")
                                },
                                className: "flex items-center justify-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg",
                                children: "Telegram"
                            }), (0, s.jsx)(K.T, {
                                startContent: (0, s.jsx)("svg", {
                                    className: "w-5 h-5",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0, s.jsx)("path", {
                                        d: "M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.986 8l3.126 3.259 5.892-3.259-6.811 6.963z"
                                    })
                                }),
                                onPress: () => {
                                    let e = "https://www.messenger.com/new?body=".concat(encodeURIComponent("Check this: " + l)),
                                        r = "fb-messenger://share?link=".concat(l, "&app_id=").concat("YOUR_APP_ID");
                                    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? (window.location.href = r, setTimeout(() => {
                                        window.open(e, "_blank")
                                    }, 1e3)) : window.open("https://www.messenger.com/new?body=".concat(encodeURIComponent("Check this: " + l)), "_blank"), null == c || c("messenger")
                                },
                                className: "flex items-center justify-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg",
                                children: "Messenger"
                            }), (0, s.jsx)(K.T, {
                                startContent: (0, s.jsx)("svg", {
                                    className: "w-5 h-5",
                                    viewBox: "0 0 260 260",
                                    fill: "currentColor",
                                    children: (0, s.jsx)("path", {
                                        d: "M210.857,197.545c-1.616-0.872-3.584-0.787-5.119,0.223c-11.62,7.638-23.4,11.511-35.016,11.511 c-6.242,0-11.605-1.394-16.416-4.275c-3.27-1.936-6.308-5.321-7.397-8.263c-1.057-2.797-1.045-10.327-1.029-20.748l0.005-63.543 h52.795c2.762,0,5-2.239,5-5V62.802c0-2.761-2.238-5-5-5h-52.795V5c0-2.761-2.238-5-5-5h-35.566c-2.528,0-4.658,1.887-4.964,4.397 c-1.486,12.229-4.258,22.383-8.247,30.196c-3.89,7.7-9.153,14.401-15.651,19.925c-5.206,4.44-14.118,8.736-26.49,12.769 c-2.058,0.671-3.45,2.589-3.45,4.754v35.41c0,2.761,2.238,5,5,5h28.953v82.666c0,12.181,1.292,21.347,3.952,28.026 c2.71,6.785,7.521,13.174,14.303,18.993c6.671,5.716,14.79,10.187,24.158,13.298c9.082,2.962,16.315,4.567,28.511,4.567 c10.31,0,20.137-1.069,29.213-3.179c8.921-2.082,19.017-5.761,30.008-10.934c1.753-0.825,2.871-2.587,2.871-4.524v-39.417 C213.484,200.108,212.476,198.418,210.857,197.545z"
                                    })
                                }),
                                onPress: () => {
                                    window.open("https://www.tumblr.com/widgets/share/tool?canonicalUrl=".concat(encodeURIComponent(l)), "_blank"), null == c || c("tumblr")
                                },
                                className: "flex items-center justify-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg",
                                children: "Tumblr"
                            })]
                        })]
                    }), (0, s.jsx)(K.T, {
                        fullWidth: !0,
                        startContent: (0, s.jsx)($, {
                            className: "w-5 h-5"
                        }),
                        onPress: g,
                        className: "flex items-center justify-center gap-2 p-4 bg-blue-600 hover:bg-blue-700 rounded-lg",
                        children: "Share via System"
                    }), b.length > 0 && (0, s.jsxs)("div", {
                        className: "space-y-3",
                        children: [(0, s.jsx)("h3", {
                            className: "text-md font-semibold text-gray-200 text-center",
                            children: "Sources"
                        }), (0, s.jsx)("div", {
                            className: "space-y-2",
                            children: b.map((e, r) => (0, s.jsxs)(v(), {
                                href: e,
                                onClick: () => c("source"),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all group",
                                children: [(0, s.jsx)(I.A, {
                                    className: "w-4 h-4 text-blue-400"
                                }), (0, s.jsx)("span", {
                                    className: "text-sm text-gray-300 flex-1 min-w-0 line-clamp-1 break-all",
                                    title: e,
                                    children: e
                                })]
                            }, r))
                        })]
                    })]
                })
            }
            var et = t(27863),
                es = t(90936),
                en = t(95795);

            function ea(e) {
                var r;
                let {
                    item: t,
                    onClick: i,
                    style: m = "card",
                    currentSite: l,
                    currentSearch: o,
                    onSave: b,
                    onShare: h,
                    onDownload: g
                } = e, [f, x] = (0, n.useState)(!1), [S, A] = (0, n.useState)(!1), [T, E] = (0, n.useState)(0), {
                    save: P,
                    unsave: z,
                    isSaved: F
                } = (0, et.A)(), M = F(t.id, l), {
                    site: _,
                    searchInput: L,
                    onSearchChange: B,
                    onUserChange: R
                } = (0, C.E)(), {
                    playMode: I
                } = (0, c.t0)(), {
                    shouldShowAds: G,
                    hasAdblock: W
                } = (0, en.gA)(), D = t.processedContent;
                if ((0, n.useEffect)(() => {
                        f || S ? es.U.lock("sidebar-open") : es.U.unlock("sidebar-open")
                    }, [f, S]), !D) return null;
                let H = "auto" !== I && (0, a.Fr)(),
                    O = () => H ? (0, s.jsxs)("div", {
                        children: [(0, s.jsx)("img", {
                            src: D.preview_url,
                            alt: t.title,
                            className: "absolute inset-0 z-10 object-contain",
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }), (0, s.jsx)("div", {
                            className: "z-20 absolute bottom-0 left-0 right-0 p-2 flex items-center justify-between transition-opacity duration-200 pointer-events-none",
                            style: {
                                fontSize: "max(0.5vw, 12px)"
                            },
                            children: (0, s.jsx)("button", {
                                className: "w-[2em] h-[2em] flex items-center justify-center bg-black/30 rounded hover:bg-black/70 transition-colors pointer-events-auto",
                                children: (0, s.jsx)("svg", {
                                    className: "w-[1.3em] h-[1.3em] text-white",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0, s.jsx)("path", {
                                        d: "M8 5v14l11-7z"
                                    })
                                })
                            })
                        })]
                    }) : (0, s.jsx)(p, {
                        src: D.source_url,
                        width: D.width,
                        height: D.height,
                        poster: D.preview_url,
                        post: t,
                        className: (0, a.cn)("w-full h-full", "compact" === m ? "compact" : "", "relative bg-black"),
                        onFullscreen: i
                    }),
                    U = e => r => {
                        switch (r.stopPropagation(), e) {
                            case "save":
                                M ? (z(t.id, l), null == b || b(t, !1)) : (P(t, l), null == b || b(t, !0));
                                break;
                            case "download":
                                "gallery" === t.processedContent.type ? (t.processedContent = { ...t.processedContent,
                                    download_url: t.processedContent.images[T].download_url
                                }, (0, a.PE)({ ...t
                                }, "_" + (T + 1), G, W)) : (0, a.PE)(t, "", G, W);
                                break;
                            case "source":
                                t.source_links && t.source_links.length > 0 && window.open(t.source_links[0], "_blank");
                                break;
                            case "tags":
                                x(!0);
                                break;
                            case "share":
                                A(!0)
                        }
                    };
                return (0, s.jsxs)(s.Fragment, {
                    children: [t.tags && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("figcaption", {
                            children: (0, s.jsx)("span", {
                                className: "sr-only",
                                children: t.processedContent.type + " #" + t.id + " from " + t.site + " tagged with " + t.tags.join(", ")
                            })
                        }), (0, s.jsx)(Z, {
                            isOpen: f,
                            onClose: e => {
                                x(!1)
                            },
                            tags: t.categorizedTags,
                            currentSite: l
                        })]
                    }), (0, s.jsx)(er, {
                        isOpen: S,
                        item: t,
                        onClose: e => {
                            A(!1)
                        },
                        shareUrl: (0, a.zI)(l, t),
                        onShare: h
                    }), (0, s.jsxs)("div", {
                        className: (0, a.cn)("tile group relative overflow-visible rounded-lg transition-all duration-300 hover:z-20", "lg:hover:scale-[1.01]", "compact" === m ? "compact" : "", "card" === m ? "flex flex-col" : ""),
                        onClick: () => {
                            "gallery" === t.processedContent.type ? i()(T) : i()()
                        },
                        children: [(0, s.jsxs)("div", {
                            className: "\n          media-container overflow-hidden \n          transition-all duration-200\n          /* 1. Base: Rounded on large screens, flat on small */\n          lg:rounded-lg sm:rounded-none\n\n          ".concat("card" === m ? "rounded-b-none lg:rounded-b-none" : "", "\n\n          ").concat("compact" === m ? "hover:rounded-b-none lg:hover:rounded-b-none" : "", "\n\n          ").concat("no text" === m ? "lg:rounded-b-lg sm:rounded-b-none" : "", "\n        "),
                            children: [(0, s.jsx)("div", {
                                className: "absolute inset-0 pointer-events-none border border-white/20 rounded-[inherit]"
                            }), (() => {
                                switch (D.type) {
                                    case "gif":
                                        if (H) return (0, s.jsxs)("div", {
                                            children: [(0, s.jsx)("img", {
                                                src: D.preview_url,
                                                alt: t.title,
                                                style: {
                                                    width: "100%",
                                                    height: "100%"
                                                }
                                            }), (0, s.jsx)("div", {
                                                className: "z-20 absolute bottom-0 left-0 right-0 p-2 flex items-center justify-between transition-opacity duration-200 pointer-events-none",
                                                style: {
                                                    fontSize: "max(0.5vw, 12px)"
                                                },
                                                children: (0, s.jsx)("button", {
                                                    className: "w-[2em] h-[2em] flex items-center justify-center bg-black/30 rounded hover:bg-black/70 transition-colors pointer-events-auto",
                                                    children: (0, s.jsx)("svg", {
                                                        className: "w-[1.3em] h-[1.3em] text-white",
                                                        viewBox: "0 0 24 24",
                                                        fill: "currentColor",
                                                        children: (0, s.jsx)("path", {
                                                            d: "M8 5v14l11-7z"
                                                        })
                                                    })
                                                })
                                            })]
                                        });
                                        return (0, s.jsx)(J, {
                                            gifUrl: D.source_url,
                                            placeholderUrl: D.preview_url,
                                            altText: t.title,
                                            onFullscreen: i
                                        });
                                    case "image":
                                    case "long_image":
                                        return (0, s.jsx)(d, {
                                            content: D,
                                            title: t.title,
                                            id: t.id,
                                            site: t.site
                                        });
                                    case "video":
                                        return (0, s.jsx)("div", {
                                            className: "relative w-full h-full",
                                            style: {
                                                aspectRatio: D.width && D.height ? "".concat(D.width, "/").concat(D.height) : "16/9"
                                            },
                                            children: (0, s.jsx)("div", {
                                                className: "absolute inset-0",
                                                children: O()
                                            })
                                        });
                                    case "gallery":
                                        return D.images && D.images.length > 0 ? (0, s.jsx)(u, {
                                            images: D.images,
                                            content: D,
                                            title: t.title,
                                            currentIndex: T,
                                            setCurrentIndex: E
                                        }) : null;
                                    case "embed":
                                        var e;
                                        if (D.processedVideo) {
                                            let e = D.processedVideo;
                                            return (0, s.jsx)("div", {
                                                className: "relative w-full h-full",
                                                style: {
                                                    aspectRatio: D.width && D.height ? "".concat(D.width, "/").concat(D.height) : "16/9"
                                                },
                                                children: (0, s.jsx)("div", {
                                                    className: "absolute inset-0",
                                                    children: (0, s.jsx)(p, {
                                                        src: e.source,
                                                        width: D.width,
                                                        height: D.height,
                                                        poster: e.poster,
                                                        post: t,
                                                        className: (0, a.cn)("w-full h-full", "compact" === m ? "compact" : "", "relative bg-black"),
                                                        onFullscreen: i
                                                    })
                                                })
                                            })
                                        }
                                        let r = null === (e = D.embedHtml) || void 0 === e ? void 0 : e.match(/src="([^"]+)"/),
                                            n = r ? r[1] : "";
                                        return (0, s.jsx)(k, {
                                            src: n,
                                            width: D.width,
                                            height: D.height,
                                            onFullscreen: i
                                        });
                                    default:
                                        return null
                                }
                            })()]
                        }), (() => {
                            if ("no text" === m) return null;
                            let e = t.categorizedTags ? Object.values(t.categorizedTags).reduce((e, r) => e + r.length, 0) : 0;
                            if (e > 0) {
                                let r = "w-[max(18px,min(7vw,30px))] h-[max(18px,min(7vw,30px))] sm:mt-3 sm:mb-3";
                                return (0, s.jsxs)("div", {
                                    className: (0, a.cn)("bg-[#1a1a1a] shadow-lg rounded-b-lg", "compact" === m ? "absolute left-0 right-0 transition-all duration-200 ease-in-out" : "", "compact" === m ? "opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0" : "", "z-10"),
                                    children: [t.title && !e && (0, s.jsx)("h3", {
                                        className: "text-sm font-semibold text-white line-clamp-2 mb-2",
                                        children: t.title
                                    }), (0, s.jsx)("div", {
                                        className: "flex flex-col gap-3",
                                        children: e > 0 && (0, s.jsxs)("div", {
                                            className: "grid grid-cols-4 w-full",
                                            children: ["e621.net" === l || "e926.net" === l ? (0, s.jsx)("button", {
                                                onClick: e => {
                                                    e.stopPropagation(), t.source && U("source")(e)
                                                },
                                                disabled: !t.source_links || 0 === t.source_links.length,
                                                className: "flex justify-center items-center py-5 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ".concat(t.source_links && t.source_links.length > 0 ? "text-gray-300 hover:text-white hover:bg-white/10" : "text-gray-500 cursor-not-allowed"),
                                                title: t.source ? "" : "No source available",
                                                children: (0, s.jsx)(y.A, {
                                                    className: "".concat(r, " ").concat(t.source ? "" : "opacity-50")
                                                })
                                            }) : (0, s.jsx)("button", {
                                                onClick: e => {
                                                    e.stopPropagation(), U("share")(e)
                                                },
                                                className: "flex justify-center items-center py-5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer",
                                                children: (0, s.jsx)($, {
                                                    className: r,
                                                    strokeWidth: 1.9
                                                })
                                            }), (0, s.jsx)("button", {
                                                onClick: e => {
                                                    e.stopPropagation(), U("download")(e), g && g()
                                                },
                                                className: "flex justify-center items-center py-5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer",
                                                children: (0, s.jsx)(w.A, {
                                                    className: r
                                                })
                                            }), (0, s.jsx)("button", {
                                                onClick: e => {
                                                    e.stopPropagation(), U("save")(e)
                                                },
                                                className: "flex justify-center items-center py-5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer",
                                                children: (0, s.jsx)(j.A, {
                                                    color: M ? "#FACE15" : "currentColor",
                                                    fill: M ? "#FACE15" : "none",
                                                    className: r
                                                })
                                            }), (0, s.jsx)("button", {
                                                onClick: e => {
                                                    e.stopPropagation(), U("tags")(e)
                                                },
                                                className: "flex justify-center items-center py-5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer",
                                                children: (0, s.jsx)(N.A, {
                                                    className: r,
                                                    style: {
                                                        transform: "rotate(45deg)"
                                                    }
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }
                            return (0, s.jsxs)("div", {
                                className: (0, a.cn)("bg-[#1a1a1a] shadow-lg rounded-b-lg p-4", "compact" === m ? "absolute left-0 right-0 transition-all duration-400 ease-in-out" : "", "compact" === m ? "opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0" : "", "z-10"),
                                children: [t.title && (0, s.jsx)("h3", {
                                    title: t.title,
                                    className: "text-sm font-semibold text-white line-clamp-2 mb-2 mt-1",
                                    children: t.title
                                }), (0, s.jsx)("div", {
                                    className: "flex flex-col gap-3 mb-1",
                                    children: t.author && t.subreddit && (0, s.jsxs)("div", {
                                        className: "flex items-center justify-between w-full",
                                        children: [(0, s.jsxs)("p", {
                                            className: "text-xs text-gray-300",
                                            children: ["Posted by", " ", "[deleted]" === t.author ? (0, s.jsxs)("span", {
                                                children: ["u/", t.author]
                                            }) : (0, s.jsxs)(v(), {
                                                href: "/reddit.com/user?userName=".concat(t.author.toLowerCase().trim()),
                                                className: "hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer",
                                                onClick: e => {
                                                    e.stopPropagation(), R(t.author)
                                                },
                                                children: ["u/", t.author]
                                            }), " ", "in", " ", (0, s.jsxs)(v(), {
                                                href: "/reddit.com?q=".concat(t.subreddit),
                                                className: "hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer",
                                                onClick: e => {
                                                    e.preventDefault(), e.stopPropagation(), B(t.subreddit)
                                                },
                                                children: ["r/", t.subreddit]
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "flex gap-4",
                                            children: [" ", (0, s.jsx)("button", {
                                                onClick: e => {
                                                    e.stopPropagation(), U("share")(e), g && g()
                                                },
                                                className: "text-gray-300 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer",
                                                "aria-label": "Share post",
                                                children: (0, s.jsx)($, {
                                                    strokeWidth: 1.8
                                                })
                                            }), (0, s.jsx)("button", {
                                                onClick: e => {
                                                    e.stopPropagation(), U("download")(e)
                                                },
                                                className: "text-gray-300 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer",
                                                "aria-label": "Save post",
                                                children: (0, s.jsx)(w.A, {
                                                    className: "w-6.5 h-6.5"
                                                })
                                            }), (0, s.jsx)("button", {
                                                onClick: e => {
                                                    e.stopPropagation(), U("save")(e)
                                                },
                                                className: "text-gray-300 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer",
                                                "aria-label": "Share post",
                                                children: (0, s.jsx)(j.A, {
                                                    color: M ? "#FACE15" : "currentColor",
                                                    fill: M ? "#FACE15" : "none",
                                                    className: "w-6.5 h-6.5"
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })(), (0, s.jsx)("a", {
                            className: "sr-only",
                            href: "/".concat(t.site, "/post/").concat("reddit.com" === t.site ? "t3_" + t.id : t.id),
                            onClickCapture: e => {
                                e.preventDefault()
                            },
                            onAuxClickCapture: e => {
                                e.preventDefault()
                            },
                            onKeyDownCapture: e => {
                                "Enter" === e.key && e.preventDefault()
                            },
                            "aria-label": null == t ? void 0 : null === (r = t.tags) || void 0 === r ? void 0 : r.slice(0, 5).join(", ")
                        })]
                    })]
                })
            }
            let ei = e => {
                let {
                    items: r,
                    scrollY: t,
                    viewportHeight: a,
                    renderTile: i
                } = e, m = (0, n.useRef)(new Map), [l, o] = (0, n.useState)(0), c = (0, n.useRef)(null);
                (0, n.useEffect)(() => (c.current = new ResizeObserver(e => {
                    let r = !1;
                    for (let a of e) {
                        var t, s, n;
                        let e = a.target.dataset.postId;
                        if (!e) continue;
                        let i = null !== (n = null === (s = a.borderBoxSize) || void 0 === s ? void 0 : null === (t = s[0]) || void 0 === t ? void 0 : t.blockSize) && void 0 !== n ? n : a.contentRect.height;
                        i > 0 && m.current.get(e) !== i && (m.current.set(e, i), r = !0)
                    }
                    r && o(e => e + 1)
                }), () => {
                    var e;
                    null === (e = c.current) || void 0 === e || e.disconnect(), c.current = null
                }), []);
                let d = (0, n.useRef)(new Map),
                    u = (0, n.useCallback)(e => r => {
                        var t, s;
                        let n = d.current.get(e);
                        n && (null === (t = c.current) || void 0 === t || t.unobserve(n), d.current.delete(e)), r && (d.current.set(e, r), null === (s = c.current) || void 0 === s || s.observe(r))
                    }, []),
                    {
                        paddingTop: b,
                        paddingBottom: h,
                        visibleItems: g
                    } = (0, n.useMemo)(() => {
                        let e = Math.min(3e3, Math.max(1600, 2 * a)),
                            s = t - e,
                            n = t + a + e,
                            i = 0,
                            l = 0,
                            o = 0,
                            c = [];
                        for (let e of r) {
                            let r = m.current.get(e.id);
                            if (void 0 === r) {
                                c.push(e);
                                continue
                            }
                            o + r < s ? i += r : o > n ? l += r : c.push(e), o += r
                        }
                        return {
                            paddingTop: i,
                            paddingBottom: l,
                            visibleItems: c
                        }
                    }, [r, t, a, l]);
                return (0, s.jsxs)("div", {
                    className: "flex-1 pl-[1px] lg:pl-1.5 flex flex-col",
                    children: [(0, s.jsx)("div", {
                        style: {
                            height: b
                        },
                        className: "w-full"
                    }), g.map(e => (0, s.jsx)("div", {
                        id: "post-".concat(e.id),
                        "data-post-id": e.id,
                        className: "pb-[1px] lg:pb-1.5",
                        ref: u(e.id),
                        children: i(e)
                    }, e.id)), (0, s.jsx)("div", {
                        style: {
                            height: h
                        },
                        className: "w-full"
                    })]
                })
            };

            function em(e) {
                var r;
                let {
                    columns: t,
                    onItemClick: a,
                    onLoadMore: i,
                    isLoading: m,
                    site: l,
                    hasMore: o,
                    seoNextAnchor: d,
                    onVisibleTileChange: u,
                    onSave: b,
                    onShare: h,
                    onDownload: g
                } = e, p = (0, n.useRef)(null), {
                    tileStyle: f
                } = (0, c.t0)(), k = function() {
                    let [e, r] = (0, n.useState)(0), t = (0, n.useCallback)(() => {
                        if ("fixed" === window.getComputedStyle(document.body).position) {
                            let e = document.body.style.top;
                            r((e ? Math.abs(parseInt(e, 10)) : 0) || 0)
                        } else r(window.scrollY)
                    }, []);
                    return (0, n.useEffect)(() => {
                        t(), window.addEventListener("scroll", t, {
                            passive: !0
                        });
                        let e = new MutationObserver(t);
                        return e.observe(document.body, {
                            attributes: !0,
                            attributeFilter: ["style"]
                        }), () => {
                            window.removeEventListener("scroll", t), e.disconnect()
                        }
                    }, [t]), e
                }(), [x, v] = (0, n.useState)(1200);
                (0, n.useEffect)(() => {
                    v(window.innerHeight);
                    let e = () => v(window.innerHeight);
                    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []);
                let y = (0, n.useCallback)(e => {
                    e[0].isIntersecting && i()
                }, [i]);
                (0, n.useEffect)(() => {
                    let e = p.current;
                    if (!e) return;
                    let r = new IntersectionObserver(y, {
                        threshold: .1,
                        rootMargin: "200%"
                    });
                    return r.observe(e), () => r.unobserve(e)
                }, [y]);
                let w = (0, n.useRef)(null);
                (0, n.useEffect)(() => {
                    if (u) return null !== w.current && cancelAnimationFrame(w.current), w.current = requestAnimationFrame(() => {
                        let e = document.querySelectorAll("[data-post-id]"),
                            r = null,
                            t = 1 / 0,
                            s = 1 / 0;
                        for (let a of e) {
                            let e = a.getBoundingClientRect();
                            if (!(e.bottom < 0) && !(e.top > x) && (e.top < t || 50 > Math.abs(e.top - t) && e.left < s)) {
                                var n;
                                t = e.top, s = e.left, r = null !== (n = a.dataset.postId) && void 0 !== n ? n : null
                            }
                        }
                        r && u(r)
                    }), () => {
                        null !== w.current && cancelAnimationFrame(w.current)
                    }
                }, [k, u, x]);
                let j = null !== (r = ({
                    1: "lg:px-[20%] xl:px-[35%]",
                    2: "lg:px-[10%] xl:px-[20%]"
                })[t.length]) && void 0 !== r ? r : "";
                return (0, s.jsx)("div", {
                    className: "p-1 lg:p-1.5",
                    children: (0, s.jsxs)("div", {
                        className: "flex-grow min-h-[120vh]",
                        children: [(0, s.jsx)("div", {
                            className: "flex ".concat(j),
                            children: t.map((e, r) => (0, s.jsx)(ei, {
                                items: e,
                                scrollY: k,
                                viewportHeight: x,
                                renderTile: e => (0, s.jsx)(ea, {
                                    item: e,
                                    currentSite: l,
                                    style: f,
                                    onClick: () => a(e),
                                    onSave: b,
                                    onDownload: () => null == g ? void 0 : g(e),
                                    onShare: r => null == h ? void 0 : h(e, r)
                                })
                            }, r))
                        }), (0, s.jsx)("a", {
                            href: d,
                            ref: p,
                            className: "w-full h-20 flex items-center justify-center text-gray-500 cursor-default",
                            children: o && "Loading more posts..."
                        })]
                    })
                })
            }
            var el = t(58803),
                eo = t.n(el),
                ec = t(20591),
                ed = t(16876),
                eu = t(52846),
                eb = t(40767),
                eh = t(91902),
                eg = t(14085);

            function ep() {
                let e = () => screen.orientation && screen.orientation.type ? screen.orientation.type.startsWith("portrait") ? "portrait" : "landscape" : "number" == typeof window.orientation ? 90 === Math.abs(window.orientation) ? "landscape" : "portrait" : window.innerHeight >= window.innerWidth ? "portrait" : "landscape",
                    [r, t] = (0, n.useState)(e);
                return (0, n.useEffect)(() => {
                    let r = () => t(e());
                    return window.addEventListener("resize", r), window.addEventListener("orientationchange", r), screen.orientation && screen.orientation.addEventListener("change", r), () => {
                        window.removeEventListener("resize", r), window.removeEventListener("orientationchange", r), screen.orientation && screen.orientation.removeEventListener("change", r)
                    }
                }, []), r
            }

            function ef(e) {
                let {
                    item: r,
                    isTitleExpanded: t,
                    setIsTitleExpanded: n
                } = e, {
                    site: i,
                    searchInput: m,
                    onSearchChange: l,
                    onUserChange: o
                } = (0, C.E)(), c = ep();
                if ((0, a.Fr)() && "portrait" !== c) return null;
                let d = e => {
                        e.preventDefault(), l(r.subreddit)
                    },
                    u = {
                        textShadow: "\n      0px 0px 3px rgba(0, 0, 0, 0.9),\n      0px 0px 6px rgba(0, 0, 0, 0.7),\n      0px 3px 6px rgba(0, 0, 0, 0.6)\n    "
                    };
                return (0, s.jsxs)("div", {
                    className: "absolute bottom-12 left-0 right-0 px-4 text-white text-sm font-semibold z-50 w-10/12",
                    children: [(0, s.jsxs)("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [(0, s.jsx)(v(), {
                            href: "/reddit.com?q=".concat(r.subreddit),
                            className: "hover:text-white transition-colors duration-200 text-sm font-semibold",
                            onClick: e => d(e),
                            style: u,
                            children: r.subreddit
                        }), "  ", (0, s.jsx)("div", {
                            className: "flex items-center",
                            children: "[deleted]" === r.author ? null : (0, s.jsxs)(v(), {
                                href: "/reddit.com/user?userName=".concat(r.author.toLowerCase().trim()),
                                className: "text-sm font-normal opacity-90 hover:opacity-100 transition-opacity duration-200",
                                onClick: e => {
                                    e.stopPropagation(), o(r.author)
                                },
                                style: u,
                                children: ["u/", r.author]
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        className: "overflow-hidden transition-all duration-300 ".concat(t ? "max-h-[500px]" : "max-h-[1.5em]"),
                        onClick: e => {
                            n(!t)
                        },
                        style: {
                            cursor: "pointer"
                        },
                        children: (0, s.jsx)("div", {
                            className: "".concat(t ? "whitespace-normal" : "whitespace-nowrap overflow-hidden text-ellipsis", " text-sm leading-relaxed"),
                            style: u,
                            children: r.title
                        })
                    })]
                })
            }
            var ek = t(60650),
                ex = t(45220),
                ev = t(35610);
            let ey = e => {
                    let {
                        onClick: r,
                        isVisible: t = !0,
                        className: n
                    } = e;
                    return t ? (0, s.jsx)("div", {
                        className: "absolute inset-0 flex items-center justify-center ".concat(n || ""),
                        style: {
                            pointerEvents: r ? "auto" : "none"
                        },
                        onClick: r,
                        children: (0, s.jsx)("div", {
                            className: "w-20 h-20 opacity-40 drop-shadow-xl flex items-center justify-center",
                            children: (0, s.jsx)("svg", {
                                className: "text-white w-16 h-16",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                style: {
                                    filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.9))"
                                },
                                children: (0, s.jsx)("path", {
                                    d: "M8 5v14l11-7z",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinejoin: "round"
                                })
                            })
                        })
                    }) : null
                },
                ew = (0, a.Fr)(),
                ej = e => {
                    var r, t, a, i;
                    let m = e.videoRef,
                        l = (0, n.useRef)(null),
                        [o, d] = (0, n.useState)(null),
                        [u, b] = (0, n.useState)(!1),
                        [h, g] = (0, n.useState)(!0),
                        [p, f] = (0, n.useState)(0),
                        {
                            audio: k,
                            setAudio: x,
                            audioVolume: v
                        } = (0, c.t0)(),
                        [y, w] = (0, n.useState)(!k),
                        [j, N] = (0, n.useState)(!1),
                        [C, S] = (0, n.useState)(!1),
                        [A, T] = (0, n.useState)(null);
                    window.matchMedia("(orientation: landscape)").matches;
                    let E = ep(),
                        [P, z] = (0, n.useState)(!1),
                        F = (0, n.useRef)(null),
                        [M, _] = (0, n.useState)(!1),
                        L = (0, n.useRef)(1),
                        B = (0, n.useRef)(!1);
                    (0, n.useEffect)(() => {
                        if (!(null == m ? void 0 : m.current)) return;
                        let r = m.current;
                        e.fastPlay && !B.current ? (L.current = r.playbackRate, r.playbackRate = 2, B.current = !0, _(!0), g(!0), r.play()) : !e.fastPlay && B.current && (r.playbackRate = L.current, B.current = !1, setTimeout(() => _(!1), 100))
                    }, [e.fastPlay]), (0, n.useEffect)(() => {
                        let r = m.current;
                        r && (r.currentTime = 0, e.autoplay ? (g(!0), r.play()) : r.pause())
                    }, [e.autoplay]), (0, n.useEffect)(() => {
                        let e = m.current;
                        e && (e.volume = v)
                    }, [v]), (0, n.useEffect)(() => {
                        w(!k)
                    }, [k]);
                    let R = (e, r) => {
                            o && o.destroy();
                            let t = new ev.Ay({
                                enableWorker: !0,
                                lowLatencyMode: !0
                            });
                            t.attachMedia(e), t.on(ev.Ay.Events.MEDIA_ATTACHED, () => {
                                t.loadSource(r)
                            }), t.on(ev.Ay.Events.MANIFEST_PARSED, () => {
                                b(!0)
                            }), t.on(ev.Ay.Events.ERROR, (e, r) => {
                                if (r.fatal) switch (r.type) {
                                    case ev.Ay.ErrorTypes.NETWORK_ERROR:
                                        console.error("Network error"), t.startLoad();
                                        break;
                                    case ev.Ay.ErrorTypes.MEDIA_ERROR:
                                        console.error("Media error"), t.recoverMediaError();
                                        break;
                                    default:
                                        console.error("Fatal error")
                                }
                            }), d(t)
                        },
                        I = r => {
                            if (e.fastPlay || M || Date.now() - e.lastDoubleTapTimeRef.current < 600) return;
                            r.preventDefault(), r.stopPropagation();
                            let t = null == e ? void 0 : e.singleTapTimeoutRef;
                            t.current && clearTimeout(t.current), t.current = setTimeout(async () => {
                                if (Date.now() - e.lastDoubleTapTimeRef.current < 600) return;
                                let r = m.current;
                                if (r) try {
                                    r.paused ? (await r.play(), g(!0)) : (r.pause(), g(!1))
                                } catch (e) {
                                    if ("NotAllowedError" === e.name) {
                                        w(!0);
                                        try {
                                            await r.play(), g(!0)
                                        } catch (e) {
                                            console.error("Failed to play even with mute:", e)
                                        }
                                    }
                                }
                            }, ez)
                        },
                        G = (0, n.useCallback)(r => {
                            if (!e.autoplay) return;
                            let t = m.current;
                            if (!t) return;
                            let s = "forward" === r ? Math.min(t.duration, t.currentTime + 5) : Math.max(0, t.currentTime - 5);
                            !isNaN(t.duration) && isFinite(t.duration) ? (t.currentTime = s, h || (t.play(), g(!0))) : console.warn("Video duration not available yet. Seek ignored."), T(r), S(!0), setTimeout(() => {
                                S(!1), T(null)
                            }, 500)
                        }, [e.autoplay, h]),
                        W = (0, n.useCallback)(r => {
                            switch (r.key) {
                                case "ArrowLeft":
                                case "a":
                                case "A":
                                    G("backward");
                                    break;
                                case "ArrowRight":
                                case "d":
                                case "D":
                                    G("forward");
                                    break;
                                case " ":
                                    if (r.preventDefault(), !e.autoplay) return;
                                    I(r)
                            }
                        }, [G]);
                    (0, n.useEffect)(() => {
                        let r = m.current;
                        if (r && e.src) {
                            if ("empty" === e.src) {
                                r.pause();
                                return
                            }
                            if (e.src.includes(".m3u8") && ev.Ay.isSupported()) R(r, e.src);
                            else {
                                if (r.lastVideoEndingTime = r.currentTime, e.sources) {
                                    for (; r.firstChild;) r.removeChild(r.firstChild);
                                    e.sources.forEach(e => {
                                        let {
                                            src: t,
                                            type: s
                                        } = e;
                                        if (!t || !s) return;
                                        let n = document.createElement("source");
                                        n.src = t + "#t=0.0001", n.type = s, r.appendChild(n)
                                    }), r.removeAttribute("src")
                                } else r.src = e.src + "#t=0.0001";
                                r.load()
                            }
                            return r.playbackRate = 1, (e.playOnSourceChange || e.autoplay) && (r.play(), h || g(!0)), () => {
                                o && o.destroy()
                            }
                        }
                    }, [e.src]), (0, n.useEffect)(() => (window.addEventListener("keydown", W), () => {
                        window.removeEventListener("keydown", W)
                    }), [W]);
                    let D = function(e) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                t = l.current,
                                s = m.current;
                            if (!t || !s) return;
                            let n = t.getBoundingClientRect(),
                                a = Math.max(0, Math.min(1, (e - n.left) / n.width));
                            a && (r && (!isNaN(s.duration) && isFinite(s.duration) ? (s.previousTime = s.currentTime, s.currentTime = s.duration * a, s.play(), g(!0)) : console.warn("Video duration not available yet. Seek ignored.")), f(100 * a))
                        },
                        H = e => {
                            e.preventDefault(), e.stopPropagation(), m.current && (w(!y), x(y))
                        };
                    null === (r = m.current) || void 0 === r || r.addEventListener("ended", () => {
                        if (m.current) {
                            var e, r;
                            m.current.previousTime = null === (e = m.current) || void 0 === e ? void 0 : e.duration, m.current.currentTime = 0, null === (r = m.current) || void 0 === r || r.play()
                        }
                    }), null == m || null === (t = m.current) || void 0 === t || t.duration;
                    let [O, U] = (0, n.useState)(!1), [X, q] = (0, n.useState)(!1);
                    (0, n.useEffect)(() => {
                        let e = m.current;
                        if (!e) return;
                        let r = () => {
                                let r = e.duration;
                                r && !isNaN(r) && q(r > 30)
                            },
                            t = () => {},
                            s = () => {
                                U(!1), console.error("Video loading error")
                            };
                        return e.addEventListener("loadedmetadata", r), e.addEventListener("waiting", t), e.addEventListener("error", s), () => {
                            e.removeEventListener("loadedmetadata", r), e.removeEventListener("waiting", t), e.removeEventListener("error", s)
                        }
                    }, [null === (a = m.current) || void 0 === a ? void 0 : a.src]), (0, n.useEffect)(() => {
                        U(!1)
                    }, [null === (i = m.current) || void 0 === i ? void 0 : i.src]), (0, n.useEffect)(() => {
                        let r = () => {
                            var r, t;
                            m.current && ("hidden" === document.visibilityState ? (null === (r = m.current) || void 0 === r || r.pause(), g(!1)) : "visible" === document.visibilityState && e.autoplay && (null === (t = m.current) || void 0 === t || t.play(), g(!0)))
                        };
                        return document.addEventListener("visibilitychange", r), () => {
                            document.removeEventListener("visibilitychange", r)
                        }
                    }, [m, e.autoplay]);
                    let Y = (0, n.useCallback)(() => {
                            F.current && clearTimeout(F.current), F.current = setTimeout(() => {
                                z(!1)
                            }, 3e3)
                        }, []),
                        V = (0, n.useRef)(null);
                    (0, n.useEffect)(() => (P ? Y() : F.current && (clearTimeout(F.current), F.current = null), () => {
                        F.current && clearTimeout(F.current)
                    }), [P, Y]);
                    let Z = ew && "portrait" !== E,
                        J = j || O || X && !Z && !e.fastPlay || P || !h,
                        K = {
                            filter: ew ? "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5))" : "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.9))",
                            opacity: .75,
                            transform: "scaleY(1)"
                        },
                        Q = "size-8 lg:size-7";
                    return (0, s.jsxs)("div", {
                        className: "relative w-full max-w-2xl mx-auto w-full h-full object-contain group",
                        style: {
                            maxWidth: "100%",
                            maxHeight: "100%"
                        },
                        children: [(0, s.jsx)("video", {
                            ref: m,
                            className: "w-full h-full object-contain",
                            poster: e.poster,
                            playsInline: !0,
                            muted: y,
                            onTimeUpdate: () => {
                                let e = m.current;
                                e && !j && f(e.currentTime / e.duration * 100)
                            },
                            onClick: I,
                            children: "Your browser does not support the video tag."
                        }), e.fastPlay && (0, s.jsx)("div", {
                            className: "absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/75 rounded-full px-4 py-1 pointer-events-none",
                            children: (0, s.jsx)("span", {
                                className: "text-white text-medium font-semibold",
                                children: "2x"
                            })
                        }), (0, s.jsx)(ey, {
                            isVisible: !h
                        }), !ew && !e.fastPlay && (0, s.jsx)("div", {
                            className: "interactive-control absolute right-0.5 bottom-16 z-50",
                            children: (0, s.jsxs)("div", {
                                className: "relative",
                                children: [(0, s.jsx)("div", {
                                    className: "absolute -inset-2",
                                    onClick: H,
                                    "aria-hidden": "true"
                                }), (0, s.jsx)("button", {
                                    onClick: H,
                                    className: "w-12 h-12 flex items-center justify-center m-1 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer relative z-10",
                                    children: y ? (0, s.jsx)(ek.A, {
                                        color: "#f9f9f9",
                                        className: Q,
                                        strokeWidth: 2.2,
                                        style: { ...K
                                        }
                                    }) : (0, s.jsx)(ex.A, {
                                        color: "#f9f9f9",
                                        className: Q,
                                        strokeWidth: 2.2,
                                        style: { ...K
                                        }
                                    })
                                })]
                            })
                        }), ew && y && (0, s.jsx)("div", {
                            className: "interactive-control absolute left-4 top-16 transition-all duration-200 ease-in-out z-50",
                            children: (0, s.jsxs)("div", {
                                className: "relative",
                                children: [(0, s.jsx)("div", {
                                    className: "absolute -inset-2",
                                    onClick: H,
                                    "aria-hidden": "true"
                                }), (0, s.jsx)("button", {
                                    onClick: H,
                                    className: "w-12 h-12 flex items-center justify-center m-0 transition-colors duration-200 relative z-10",
                                    children: y ? (0, s.jsx)(ek.A, {
                                        color: "#f9f9f9",
                                        className: Q,
                                        strokeWidth: 2.2,
                                        style: { ...K
                                        }
                                    }) : (0, s.jsx)(ex.A, {
                                        color: "#f9f9f9",
                                        className: Q,
                                        strokeWidth: 2.2,
                                        style: { ...K
                                        }
                                    })
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            ref: V,
                            className: "relative group",
                            children: (0, s.jsx)("div", {
                                className: "draggable-item absolute left-0 w-full transition-all duration-200 ease-in-out bottom-0",
                                children: (0, s.jsx)("div", {
                                    ref: l,
                                    className: "relative h-12 cursor-pointer transition-all duration-1500 ease-in-out touch-none ".concat(J ? "opacity-100" : "opacity-0 md:hover:opacity-100"),
                                    onTouchStart: e => {
                                        e.stopPropagation(), z(!0), N(!0), D(e.touches[0].clientX, !1)
                                    },
                                    onTouchMove: e => {
                                        j && (z(!0), e.stopPropagation(), D(e.touches[0].clientX, !1))
                                    },
                                    onTouchEnd: e => {
                                        j && (e.stopPropagation(), N(!1), D(e.changedTouches[0].clientX, !0))
                                    },
                                    ...!("ontouchstart" in window) && {
                                        onMouseDown: e => {
                                            e.preventDefault(), e.stopPropagation(), z(!0), N(!0), D(e.clientX, !1);
                                            let r = e => {
                                                    e.preventDefault(), D(e.clientX, !1)
                                                },
                                                t = e => {
                                                    e.preventDefault(), N(!1), D(e.clientX, !0), document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", t)
                                                };
                                            document.addEventListener("mousemove", r), document.addEventListener("mouseup", t)
                                        }
                                    },
                                    children: (0, s.jsx)("div", {
                                        className: "absolute left-0 w-full rounded-full overflow-hidden\n        ".concat(j ? "h-1.5 bg-white/60" : h ? "h-0.5 bg-white/30" : "h-1 bg-white/50", "\n        ").concat(j ? "" : "transition-all duration-200", "\n      "),
                                        style: {
                                            bottom: "0.25rem"
                                        },
                                        children: (0, s.jsx)("div", {
                                            className: "absolute w-full left-0 top-0 rounded-full\n          ".concat(j ? "bg-white/90" : h ? "bg-white/40" : "bg-white/70", "\n          ").concat(j ? "" : "transition-all duration-200", "\n        "),
                                            style: {
                                                width: "".concat(p, "%"),
                                                height: "100%"
                                            }
                                        })
                                    })
                                })
                            })
                        }), C && "forward" === A && (0, s.jsx)("div", {
                            className: "absolute right-1/4 top-1/2 -translate-y-1/2 bg-black/75 rounded-full p-3",
                            children: (0, s.jsxs)("span", {
                                className: "text-white text-lg",
                                children: ["+", 5, "s"]
                            })
                        }), C && "backward" === A && (0, s.jsx)("div", {
                            className: "absolute left-1/4 top-1/2 -translate-y-1/2 bg-black/75 rounded-full p-3",
                            children: (0, s.jsxs)("span", {
                                className: "text-white text-lg",
                                children: ["-", 5, "s"]
                            })
                        })]
                    })
                };
            var eN = t(97709),
                eC = t(46647),
                eS = t(25683);
            let eA = e => {
                var r, t, s, n, a;
                let i = null === (r = e.resolutions) || void 0 === r ? void 0 : r.map(e => ({ ...e,
                    url: e.url || e.display_url || ""
                }));
                return { ...e,
                    source: e.source || e.display_url || e.url || "",
                    display_url: e.display_url || e.url || "",
                    preview_url: e.preview_url || (null === (s = e.resolutions) || void 0 === s ? void 0 : null === (t = s[0]) || void 0 === t ? void 0 : t.url) || (null === (a = e.resolutions) || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : n.display_url) || "",
                    source_url: e.source_url || "",
                    resolutions: i
                }
            };

            function eT(e) {
                let {
                    images: r,
                    currentIndex: t,
                    onIndexChange: n,
                    title: i,
                    showControls: m = !0,
                    className: o = "",
                    isCurrentItem: c,
                    isGallerySwipeInProgress: u,
                    disableDrag: b = !1,
                    renderFullscreenButtons: h,
                    renderBottomLeftText: g
                } = e, p = (0, a.Fr)(), {
                    containerRef: f,
                    swipeState: k,
                    getContainerStyle: x,
                    canScrollLeft: v,
                    canScrollRight: y
                } = l({
                    totalItems: r.length,
                    currentIndex: t,
                    onIndexChange: n,
                    enableMouse: !1,
                    isMobile: p,
                    disable: b,
                    resistance: .3
                });
                return (u && (u.current = 0 !== k.transform), null == r ? void 0 : r.length) ? (0, s.jsxs)("div", {
                    ref: f,
                    className: "relative w-full h-full overflow-hidden select-none ".concat(o),
                    children: [(0, s.jsx)("div", {
                        className: "absolute inset-0 flex",
                        style: x(),
                        children: r.map((e, n) => {
                            let a = n === t,
                                m = c ? 1 : 0,
                                l = Math.abs(n - t) <= m,
                                o = Math.abs(n - t) + r.length <= m || Math.abs(n - t) - r.length >= -m;
                            if (!a && !l && !o) return (0, s.jsx)("div", {
                                className: "w-full h-full flex-shrink-0"
                            }, n);
                            let u = eA(e);
                            return (0, s.jsx)("div", {
                                className: "w-full h-full flex-shrink-0 relative",
                                children: (0, s.jsx)(d, {
                                    content: u,
                                    id: n,
                                    isFullscreen: !0,
                                    site: "reddit.com",
                                    title: i || "Image ".concat(n + 1)
                                })
                            }, n)
                        })
                    }), null == h ? void 0 : h(), null == g ? void 0 : g(), m && r.length > 1 && (0, s.jsx)("div", {
                        className: "absolute top-4 left-1/2 -translate-x-1/2 z-20",
                        children: (0, s.jsxs)("span", {
                            className: "text-white bg-black/40 px-2 py-1 rounded-full shadow-md text-sm font-medium sm:text-white/70 sm:bg-black/60 sm:px-3 sm:py-2",
                            children: [t + 1, " / ", r.length]
                        })
                    })]
                }) : null
            }
            let eE = () => {
                    let [e, r] = (0, n.useState)(!1), t = (0, n.useRef)(null);
                    return (0, n.useEffect)(() => {
                        let e = !0,
                            s = async () => {
                                try {
                                    if (!("wakeLock" in navigator)) return;
                                    if (!t.current) {
                                        let s = await navigator.wakeLock.request("screen");
                                        t.current = s, e && r(!0), s.addEventListener("release", () => {
                                            t.current = null, e && r(!1)
                                        })
                                    }
                                } catch (t) {
                                    console.error("WakeLock error:", t.name, t.message), e && r(!1)
                                }
                            },
                            n = async () => {
                                t.current && (await t.current.release(), t.current = null, e && r(!1))
                            },
                            a = () => {
                                "visible" === document.visibilityState ? s() : n()
                            };
                        return s(), document.addEventListener("visibilitychange", a), () => {
                            e = !1, document.removeEventListener("visibilitychange", a), n()
                        }
                    }, []), e
                },
                eP = (0, a.Fr)(),
                ez = 300,
                eF = () => {
                    let e = document.documentElement;
                    if (!e) {
                        console.error("Element not provided for fullscreen.");
                        return
                    }
                    e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.webkitEnterFullscreen ? e.webkitEnterFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                },
                eM = () => {
                    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
                };

            function e_(e) {
                let {
                    items: r,
                    initialItem: t,
                    currentIndex: i,
                    setCurrentIndex: m,
                    currentGalleryIndex: l,
                    setCurrentGalleryIndex: u,
                    onCloseFullscreen: b,
                    onLoadMore: h,
                    hasMore: g,
                    site: f,
                    onLike: k,
                    onShare: x,
                    onSave: v,
                    openTagSidebar: y,
                    onDownload: C = () => null,
                    logSwipeVelocity: S = () => null,
                    logZoom: A = () => null,
                    playerRefs: T = [(0, n.useRef)(null), (0, n.useRef)(null), (0, n.useRef)(null)],
                    panelOpenRef: E = (0, n.useRef)({
                        tagPanel: {
                            startTime: null,
                            totalTime: 0
                        },
                        sharePanel: {
                            startTime: null,
                            totalTime: 0
                        }
                    }),
                    longImageRef: P = (0, n.useRef)({
                        furthestScroll: 0,
                        furthestScrollRatio: 0
                    })
                } = e, [z, F] = (0, n.useState)(!1), M = (0, n.useRef)(null), [_, L] = (0, n.useState)(!1), B = (0, n.useRef)(null), R = (0, n.useRef)(performance.now()), [I, G] = (0, n.useState)(!1), [W, D] = (0, n.useState)(!1), H = I || W, {
                    save: O,
                    unsave: U,
                    isSaved: X
                } = (0, et.A)(), q = (0, a.un)(), {
                    shouldShowAds: Y,
                    hasAdblock: V
                } = (0, en.gA)(), {
                    toggleFavorite: J,
                    isFavorite: K
                } = (0, eN.I)(), {
                    autoscrollEnabled: Q,
                    setAutoscrollEnabled: ee,
                    autoscrollSpeedModifier: ea,
                    setAutoscrollSpeedModifier: ei,
                    useBrowserFullscreen: em,
                    invertFullscreenButtons: el
                } = (0, c.t0)();
                eE();
                let [ep, ek] = (0, n.useState)(!1), ex = (0, n.useRef)(!1), ev = (0, n.useRef)(null), ew = (0, n.useRef)(null), eA = (0, n.useRef)(null), e_ = r[i], eL = "long_image" === e_.processedContent.type, eB = (0, n.useRef)(0), eR = (0, n.useRef)(0), eI = (0, n.useRef)(0), eG = (0, n.useRef)(0);
                (0, n.useEffect)(() => {
                    var e;
                    let t = !1;
                    ev.current && (cancelAnimationFrame(ev.current), ev.current = null), ew.current && (clearTimeout(ew.current), ew.current = null), eA.current && (clearTimeout(eA.current), eA.current = null);
                    let s = r[i],
                        n = null == s ? void 0 : null === (e = s.processedContent) || void 0 === e ? void 0 : e.type,
                        a = null == s ? void 0 : s.processedContent,
                        o = "long_image" === n,
                        c = null;
                    ex.current = !1, c = null;
                    let d = e => {
                            if (!B.current || ep || ex.current) {
                                ev.current = null;
                                return
                            }
                            let r = B.current;
                            if (null === c) {
                                c = e, ev.current = requestAnimationFrame(d);
                                return
                            }
                            let t = e - c;
                            if (c = e, r.scrollTop += 350 * t / 1e3, r.scrollTop + r.clientHeight >= r.scrollHeight - 1 && !ex.current) {
                                ex.current = !0, c = null, ew.current = setTimeout(() => {
                                    m(e => e + 1), ew.current = null
                                }, 250), eA.current = ew.current;
                                return
                            }
                            ev.current = requestAnimationFrame(d)
                        },
                        b = null;
                    return Q && s && (b = setInterval(() => {
                        var e, r;
                        if (s) {
                            if (o) {
                                ev.current || (ev.current = requestAnimationFrame(d));
                                return
                            }
                            if (!ep) {
                                if ("video" === n) {
                                    let r = null === (e = T[i % 3]) || void 0 === e ? void 0 : e.current;
                                    if (r && !r.ended) {
                                        if (!t) {
                                            let e = () => {
                                                m(e => e + 1), r.removeEventListener("ended", e), t = !1
                                            };
                                            r.addEventListener("ended", e), t = !0
                                        }
                                        return
                                    }
                                } else "gallery" === n ? l < ((null == a ? void 0 : null === (r = a.images) || void 0 === r ? void 0 : r.length) || 0) - 1 ? u(e => e + 1) : (m(e => e + 1), u(0)) : m(e => e + 1)
                            }
                        }
                    }, 5e3 * ea)), () => {
                        b && clearInterval(b), ev.current && (cancelAnimationFrame(ev.current), ev.current = null), ew.current && (clearTimeout(ew.current), ew.current = null), eA.current && (clearTimeout(eA.current), eA.current = null)
                    }
                }, [Q, i, l, r, B, m, u, ep, a.q8]);
                let eW = (0, n.useRef)(!1);
                (0, n.useEffect)(() => {
                    let e = () => {
                        let e = H || es.U.isAnySidebarOpen();
                        e && !ep ? (eW.current = !0, ek(!0)) : !e && eW.current && (eW.current = !1, ek(!1))
                    };
                    e();
                    let r = setInterval(e, 100);
                    return () => clearInterval(r)
                }, [H, ep]), (0, n.useEffect)(() => {
                    H ? es.U.lock("panel-open") : es.U.unlock("panel-open")
                }, [H]);
                let eD = (0, n.useCallback)(() => {
                        M.current && em && eF()
                    }, [em]),
                    eH = (0, n.useCallback)(() => {
                        em && eM()
                    }, []);
                (0, n.useEffect)(() => {
                    let e = () => {
                        null === document.fullscreenElement && (console.log("Browser fullscreen exited. Calling onCloseFullscreen."), b && b())
                    };
                    return document.addEventListener("fullscreenchange", e), document.addEventListener("webkitfullscreenchange", e), document.addEventListener("mozfullscreenchange", e), document.addEventListener("MSFullscreenChange", e), () => {
                        document.removeEventListener("fullscreenchange", e), document.removeEventListener("webkitfullscreenchange", e), document.removeEventListener("mozfullscreenchange", e), document.removeEventListener("MSFullscreenChange", e)
                    }
                }, [b]), (0, n.useEffect)(() => (eD(), () => {
                    eH()
                }), [eD, eH, em]), (0, n.useEffect)(() => {
                    G(!1), D(!1)
                }, [i]), (0, n.useEffect)(() => {
                    let e = Date.now(),
                        {
                            tagPanel: r,
                            sharePanel: t
                        } = E.current;
                    I && null === r.startTime ? r.startTime = e : I || null === r.startTime || (r.totalTime += e - r.startTime, r.startTime = null), W && null === t.startTime ? t.startTime = e : W || null === t.startTime || (t.totalTime += e - t.startTime, t.startTime = null)
                }, [I, W]);
                let eO = (0, n.useRef)({}),
                    eU = (0, n.useRef)({});
                (0, n.useEffect)(() => {
                    let e = e => {
                            if (e.repeat) return;
                            let t = r[i],
                                s = t.processedContent,
                                n = "gallery" === s.type && s.images,
                                l = ("long_image" === s.type || "image" === s.type || "gallery" === s.type) && (0, a.q8)(s.width, s.height),
                                o = new Date().getTime(),
                                c = o - (eO.current[e.key] || 0) < 200;
                            if (eO.current[e.key] = o, "ArrowUp" === e.key || "w" === e.key.toLowerCase()) {
                                if (l) {
                                    if (c && i > 0) m(e => e - 1), u(0);
                                    else {
                                        let r = () => {
                                            B.current && (B.current.scrollBy({
                                                top: -15,
                                                behavior: "instant"
                                            }), eU.current[e.key] = requestAnimationFrame(r))
                                        };
                                        r(), e.preventDefault()
                                    }
                                } else i > 0 && (m(e => e - 1), u(0))
                            } else if ("ArrowDown" === e.key || "s" === e.key.toLowerCase()) {
                                if (l) {
                                    if (c && i < r.length - 1) m(e => e + 1), u(0);
                                    else {
                                        let r = () => {
                                            B.current && (B.current.scrollBy({
                                                top: 15,
                                                behavior: "instant"
                                            }), eU.current[e.key] = requestAnimationFrame(r))
                                        };
                                        r(), e.preventDefault()
                                    }
                                } else i < r.length - 1 && (m(e => e + 1), u(0))
                            } else "Escape" === e.key ? null == b || b() : " " == e.key || "Space" == e.code || 32 == e.keyCode ? (e.preventDefault(), "video" === s.type || ("image" === s.type || "gallery" === s.type && Q) && ek(e => !e)) : "f" === e.key.toLowerCase() ? X(t.id, f) ? (U(t.id, f), v && v(t, !1)) : (O(t, f), e4(e => ++e), e3.current = setTimeout(() => e4(0), 500), v && v(t, !0)) : "t" === e.key.toLowerCase() ? G(e => !e) : n && ("ArrowLeft" === e.key || "a" === e.key.toLowerCase() ? (Q && ek(!0), u(e => (e - 1 + s.images.length) % s.images.length)) : ("ArrowRight" === e.key || "d" === e.key.toLowerCase()) && (Q && ek(!0), u(e => (e + 1) % s.images.length)))
                        },
                        t = e => {
                            eU.current[e.key] && (cancelAnimationFrame(eU.current[e.key]), eU.current[e.key] = null)
                        };
                    return window.addEventListener("keydown", e), window.addEventListener("keyup", t), () => {
                        window.removeEventListener("keydown", e), window.removeEventListener("keyup", t), Object.values(eU.current).forEach(e => {
                            e && cancelAnimationFrame(e)
                        })
                    }
                }, [i, l, r, b]), (0, n.useEffect)(() => {
                    !z && g && r.length - i <= 5 && (async () => {
                        F(!0), await h(), F(!1)
                    })()
                }, [i, r.length, g, z, h]);
                let eX = (0, n.useRef)(null),
                    eq = e => {
                        if (!H) {
                            if (e.ctrlKey) {
                                e.preventDefault(), eX.current && (clearTimeout(eX.current), eX.current = null);
                                let r = 1 - .01 * e.deltaY,
                                    t = e.currentTarget.getBoundingClientRect(),
                                    s = e.clientX - t.left,
                                    n = e.clientY - t.top,
                                    a = s - window.innerWidth / 2,
                                    i = n - window.innerHeight / 2;
                                rA(e => {
                                    let t = Math.min(Math.max(e.scale * r, .95), 5);
                                    if (t < 1.02 && e.scale > 1.02) return {
                                        scale: 1,
                                        translateX: 0,
                                        translateY: 0,
                                        isZooming: !1
                                    };
                                    let s = Math.min(1, Math.max(0, (t - 1) / .3)),
                                        n = s * s,
                                        m = e.translateX + (-a - e.translateX) * n * .1,
                                        l = e.translateY + (-i - e.translateY) * n * .1,
                                        o = window.innerWidth / 2,
                                        c = window.innerHeight / 2,
                                        d = o * t - o,
                                        u = c * t - c;
                                    return {
                                        scale: t,
                                        translateX: Math.max(-d, Math.min(d, m)),
                                        translateY: Math.max(-u, Math.min(u, l)),
                                        isZooming: t > 1.05
                                    }
                                })
                            } else {
                                let t = performance.now();
                                if (t - R.current < 300) return;
                                if ("long_image" === r[i].processedContent.type && B.current) {
                                    let {
                                        scrollTop: r,
                                        scrollHeight: t,
                                        clientHeight: s
                                    } = B.current, n = r <= 0, a = Math.ceil(r + s) >= t - 1;
                                    if (!n && !a || !(n && e.deltaY < 0) && !(a && e.deltaY > 0)) return
                                }
                                e.preventDefault(), e.deltaY > 0 && i < r.length - 1 ? (m(e => e + 1), u(0), R.current = t) : e.deltaY < 0 && i > 0 && (m(e => e - 1), u(0), R.current = t)
                            }
                        }
                    };
                (0, n.useEffect)(() => {
                    eP || (rA({
                        scale: 1,
                        translateX: 0,
                        translateY: 0,
                        isZooming: !1
                    }), rE(null))
                }, [i]), (0, n.useEffect)(() => () => {
                    eX.current && clearTimeout(eX.current)
                }, []), (0, n.useEffect)(() => {
                    let e = M.current;
                    return e && e.addEventListener("wheel", eq, {
                        passive: !1
                    }), () => {
                        e && e.removeEventListener("wheel", eq)
                    }
                }, [i, r.length, H]), (0, n.useEffect)(() => {
                    let e = window.getComputedStyle(document.body).overflow,
                        r = window.getComputedStyle(document.documentElement).overflow;
                    document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden";
                    let t = e => {
                        e.target === document.body && e.preventDefault()
                    };
                    return document.body.addEventListener("touchmove", t, {
                        passive: !1
                    }), () => {
                        document.body.style.overflow = e, document.documentElement.style.overflow = r, document.body.removeEventListener("touchmove", t)
                    }
                }, []);
                let [eY, eV] = (0, n.useState)(!1), eZ = e => {
                    if ("reddit.com" === f && e) {
                        let r = !(rS.isZooming || rq) && !("gallery" === e.processedContent.type && 0 !== l);
                        return (0, s.jsx)("div", {
                            className: "transition-opacity duration-600 ".concat(r ? "opacity-100" : "opacity-0 pointer-events-none"),
                            children: (0, s.jsx)(ef, {
                                item: e,
                                isTitleExpanded: eY,
                                setIsTitleExpanded: eV,
                                children: " "
                            })
                        })
                    }
                    return null
                }, [eJ, eK] = (0, n.useState)({}), [eQ, e$] = (0, n.useState)(!1), [e0, e1] = (0, n.useState)([]), e2 = (0, n.useRef)(0), [e5, e4] = (0, n.useState)(0), e3 = (0, n.useRef)(null), e6 = function(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = e.id || e,
                        s = eJ[t];
                    !r && k && (e$(!0), setTimeout(() => e$(!1), 800)), s && r ? (null == k || k(t, !1), eK(e => ({ ...e,
                        [t]: !1
                    }))) : s || (eK(e => ({ ...e,
                        [t]: !0
                    })), null == k || k(t, !0), e$(!0), setTimeout(() => e$(!1), 800))
                }, e8 = (0, n.useRef)(null), e9 = (0, n.useRef)(0), e7 = function(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = arguments.length > 2 ? arguments[2] : void 0,
                        s = arguments.length > 3 ? arguments[3] : void 0,
                        n = X(e.id, f);
                    if (n && r ? (U(e.id, f), O(e, f), null == v || v(e, !1)) : n || (O(e, f), e4(e => ++e), e3.current = setTimeout(() => e4(0), 500), null == v || v(e, !0)), !r && void 0 !== t && void 0 !== s) {
                        let e = ++e2.current;
                        e1(r => [...r, {
                            id: e,
                            x: t,
                            y: s,
                            randX: (Math.random() - .5) * 20,
                            randY: (Math.random() - .5) * 20,
                            randRotate: (Math.random() - .5) * 25,
                            randRotateSign: .5 > Math.random() ? 1 : -1,
                            randScale: .95 + .1 * Math.random(),
                            color: function(e) {
                                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                                    t = parseInt(e.slice(1, 3), 16) / 255,
                                    s = parseInt(e.slice(3, 5), 16) / 255,
                                    n = parseInt(e.slice(5, 7), 16) / 255,
                                    a = Math.max(t, s, n),
                                    i = Math.min(t, s, n),
                                    m = 0,
                                    l = 0,
                                    o = (a + i) / 2;
                                if (a !== i) {
                                    let e = a - i;
                                    switch (l = o > .5 ? e / (2 - a - i) : e / (a + i), a) {
                                        case t:
                                            m = (s - n) / e + (s < n ? 6 : 0);
                                            break;
                                        case s:
                                            m = (n - t) / e + 2;
                                            break;
                                        case n:
                                            m = (t - s) / e + 4
                                    }
                                    m /= 6
                                }
                                m = (360 * m + (Math.random() * r * 2 - r)) % 360;
                                let c = (1 - Math.abs(2 * (o = Math.min(1, Math.max(.5, o + (.05 * Math.random() - .025)))) - 1)) * l,
                                    d = c * (1 - Math.abs(m / 60 % 2 - 1)),
                                    u = o - c / 2,
                                    b = 0,
                                    h = 0,
                                    g = 0;
                                m < 60 ? (b = c, h = d, g = 0) : m < 120 ? (b = d, h = c, g = 0) : m < 180 ? (b = 0, h = c, g = d) : m < 240 ? (b = 0, h = d, g = c) : m < 300 ? (b = d, h = 0, g = c) : (b = c, h = 0, g = d);
                                let p = e => Math.round((e + u) * 255).toString(16).padStart(2, "0");
                                return "#".concat(p(b)).concat(p(h)).concat(p(g))
                            }("#FACE15", 8)
                        }]), setTimeout(() => {
                            e1(r => r.filter(r => r.id !== e))
                        }, 900)
                    }
                }, re = {
                    filter: eP ? "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5))" : "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.9))",
                    opacity: .75,
                    transform: "scaleY(1)"
                }, rr = "size-8 lg:size-7", rt = e => {
                    let r = !(rS.isZooming || rq),
                        t = X(e.id, f),
                        n = eJ[e.id] || !1,
                        i = k ? [{
                            icon: (0, s.jsx)(ec.A, {
                                fill: n ? "#f9f9f9" : "none",
                                color: "#f9f9f9",
                                strokeWidth: 2.5,
                                style: { ...re
                                }
                            }),
                            onClick: r => {
                                r.stopPropagation(), e6(e, !0)
                            },
                            tooltip: n ? "Liked" : "Like"
                        }] : [],
                        m = "e621.net" === f || "e926.net" === f ? [] : [{
                            icon: (0, s.jsx)($, {
                                className: rr,
                                strokeWidth: 2.1,
                                style: { ...re
                                }
                            }),
                            onClick: e => {
                                e.stopPropagation(), D(!0)
                            },
                            tooltip: "Share"
                        }],
                        o = [{
                            icon: (0, s.jsx)(eC.P.div, {
                                initial: {
                                    y: 0,
                                    scale: 1
                                },
                                animate: e5 > 0 ? {
                                    y: [0, -6, 0],
                                    scale: [1, 1.28, .96, 1]
                                } : {},
                                transition: {
                                    duration: .4,
                                    ease: [.22, 1, .36, 1],
                                    times: [0, .4, .75, 1]
                                },
                                style: {
                                    display: "inline-flex"
                                },
                                children: (0, s.jsx)(j.A, {
                                    color: t ? "#FACE15" : "#f9f9f9",
                                    fill: t ? "#FACE15" : "none",
                                    className: rr,
                                    strokeWidth: 2.5,
                                    style: { ...re,
                                        opacity: t ? 1 : re.opacity,
                                        transition: "fill 0.2s ease, color 0.2s ease"
                                    }
                                })
                            }, e5),
                            onClick: r => {
                                r.stopPropagation(), t ? (U(e.id, f), null == v || v(e, !1)) : (O(e, f), e4(e => ++e), e3.current = setTimeout(() => e4(0), 500), null == v || v(e, !0))
                            },
                            tooltip: "Save"
                        }, {
                            icon: (0, s.jsx)(w.A, {
                                color: "#f9f9f9",
                                className: rr,
                                strokeWidth: 2.5,
                                style: re
                            }),
                            onClick: r => {
                                r.stopPropagation(), "gallery" === e.processedContent.type ? (e.processedContent = { ...e.processedContent,
                                    download_url: e.processedContent.images[l].download_url
                                }, (0, a.PE)({ ...e
                                }, "_" + (l + 1), Y, V)) : (0, a.PE)(e, "", Y, V), C && C(e)
                            },
                            tooltip: "Download"
                        }, ...m],
                        c = ("reddit.com" !== f || K(f, e.subreddit), []),
                        d = [...i, ..."reddit.com" !== f ? [{
                            icon: (0, s.jsx)(N.A, {
                                className: rr,
                                color: "#f9f9f9",
                                strokeWidth: 2.5,
                                style: { ...re,
                                    transform: "rotate(45deg)"
                                }
                            }),
                            onClick: e => {
                                e.stopPropagation(), (0, a.Fr)() ? y() : G(!0)
                            },
                            tooltip: "Tags"
                        }] : [], ...c, ...o];
                    return (0, s.jsxs)("div", {
                        className: "transition-opacity duration-600 ".concat(r ? "opacity-100" : "opacity-0 pointer-events-none"),
                        children: [(0, s.jsx)(ey, {
                            isVisible: Q && ep && "video" !== e.processedContent.type,
                            className: "z-50"
                        }), (0, s.jsx)("div", {
                            className: "absolute ".concat(el ? "left" : "right", "-0 transition-all m-1 duration-200 ease-in-out z-50"),
                            style: {
                                bottom: eP ? "5rem" : "7rem"
                            },
                            children: d.map((e, r) => (0, s.jsx)("div", {
                                className: "relative",
                                children: (0, s.jsx)("button", {
                                    onTouchStart: e => {
                                        e.currentTarget.dataset.touchStartX = e.touches[0].clientX, e.currentTarget.dataset.touchStartY = e.touches[0].clientY
                                    },
                                    onTouchEnd: e => {
                                        rJ();
                                        let r = parseFloat(e.currentTarget.dataset.touchStartX || 0),
                                            t = parseFloat(e.currentTarget.dataset.touchStartY || 0),
                                            s = Math.abs(e.changedTouches[0].clientX - r),
                                            n = Math.abs(e.changedTouches[0].clientY - t);
                                        s < 10 && n < 10 && e.stopPropagation()
                                    },
                                    onPointerDown: e => {
                                        e.currentTarget.dataset.startX = e.clientX, e.currentTarget.dataset.startY = e.clientY, e.currentTarget.dataset.startTime = Date.now()
                                    },
                                    onClick: e => {
                                        e.stopPropagation(), e.preventDefault()
                                    },
                                    onPointerUp: r => {
                                        let t = parseFloat(r.currentTarget.dataset.startX || 0),
                                            s = parseFloat(r.currentTarget.dataset.startY || 0),
                                            n = parseFloat(r.currentTarget.dataset.startTime || 0),
                                            a = Math.abs(r.clientX - t),
                                            i = Math.abs(r.clientY - s),
                                            m = Date.now() - n;
                                        a < 10 && i < 10 && m < 300 && e.onClick(r)
                                    },
                                    className: "flex items-center justify-center w-14 h-14 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer",
                                    children: e.icon
                                })
                            }, r))
                        })]
                    })
                }, rs = () => rh || !eP ? "none" : "transform ".concat(rk, "ms cubic-bezier(0.32, 0.58, 0.28, 1)"), rn = (0, n.useRef)(!1), ra = (0, n.useRef)(0), ri = (e, r) => {
                    var t, n;
                    if (Math.abs(r - i) > 1) return null;
                    let m = e.processedContent,
                        o = r === i,
                        c = (0, a.cn)("absolute w-full h-full max-h-100 flex bg-black"),
                        b = {
                            transform: (() => {
                                let e = (r - i) * 100,
                                    t = rp / window.innerHeight * 100;
                                return "translateY(".concat(e + t, "%)")
                            })(),
                            transition: rs(),
                            willChange: "transform",
                            zIndex: o ? 20 : 10
                        },
                        h = {
                            transform: o ? "translate(".concat(rS.translateX, "px, ").concat(rS.translateY, "px) scale(").concat(rS.scale, ")") : "none",
                            transition: rS.isZooming ? "none" : "transform 0.3s ease-out"
                        };
                    switch (m && "image" === m.type && (0, a.q8)(m.width, m.height) && (m.type = "long_image"), m.type) {
                        case "video":
                        default:
                            return null;
                        case "gif":
                            return (0, s.jsxs)("div", {
                                className: c,
                                style: b,
                                children: [eZ(e), rt(e), (0, s.jsx)("div", {
                                    className: c,
                                    style: h,
                                    children: (0, s.jsx)("img", {
                                        className: "w-full h-full object-contain",
                                        src: e.processedContent.source_url,
                                        alt: e.title || "GIF content"
                                    })
                                })]
                            });
                        case "long_image":
                            let g = (0, s.jsx)(d, {
                                content: m,
                                title: e.title,
                                id: e.id,
                                isFullscreen: !0,
                                site: e.site
                            });
                            if (Math.abs(r - i) > 1) return null;
                            let f = e => e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.changedTouches && e.changedTouches.length > 0 ? e.changedTouches[0].clientY : e.clientY,
                                k = e => {
                                    if (!o || e.touches && e.touches.length >= 2) return;
                                    let {
                                        scrollTop: r,
                                        scrollHeight: t,
                                        clientHeight: s
                                    } = e.currentTarget, n = Math.ceil(r + s) >= t - 10, a = f(e) - ra.current;
                                    (!(r <= 10) || !(a > 0)) && (n && a < 0 || e.stopPropagation())
                                };
                            return (0, s.jsxs)("div", {
                                style: {
                                    zIndex: o ? 20 : -10,
                                    WebkitOverflowScrolling: "touch",
                                    overscrollBehavior: "contain",
                                    touchAction: "pan-y",
                                    willChange: o ? "transform, scroll-position" : "auto",
                                    WebkitBackfaceVisibility: o ? "hidden" : "visible",
                                    transform: o ? "translate(".concat(rS.translateX, "px, ").concat(rS.translateY, "px) translateZ(0) scale(").concat(rS.scale, ")") : "translateZ(0)",
                                    transition: rS.isZooming ? "none" : "transform 0.3s ease-out"
                                },
                                onScroll: o ? rm : void 0,
                                ref: o ? B : void 0,
                                tabIndex: -1,
                                onTouchStart: e => {
                                    q && e.currentTarget.focus({
                                        preventScroll: !0
                                    }), ra.current = f(e)
                                },
                                onTouchMove: k,
                                onPointerDown: e => {
                                    ra.current = e.clientY
                                },
                                onPointerMove: k,
                                className: "jsx-dea68b16b0fb62a " + ((0, a.cn)("absolute inset-0 w-full h-full mx-auto", "bg-black scroll-container", o ? "overflow-y-auto max-h-full w-full lg:w-3/5 md:w-4/5" : "overflow-hidden w-full lg:w-3/5 md:w-4/5") || ""),
                                children: [(0, s.jsx)(eo(), {
                                    id: "dea68b16b0fb62a",
                                    children: ".jsx-dea68b16b0fb62a::-webkit-scrollbar{display:none}.scroll-container.jsx-dea68b16b0fb62a{-ms-overflow-style:none;scrollbar-width:none}"
                                }), g]
                            });
                        case "image":
                            {
                                let r = (0, s.jsx)(d, {
                                    content: m,
                                    title: e.title,
                                    id: e.id,
                                    isFullscreen: !0,
                                    site: e.site
                                });
                                return (0, s.jsxs)("div", {
                                    className: c,
                                    style: b,
                                    children: [eZ(e), rt(e), (0, s.jsx)("div", {
                                        className: c,
                                        style: h,
                                        children: r
                                    })]
                                })
                            }
                        case "gallery":
                            if (!(null === (t = m.images) || void 0 === t ? void 0 : t.length) || !m.images[l]) return null;
                            return (0, s.jsx)("div", {
                                className: c,
                                style: { ...b
                                },
                                children: (0, s.jsx)("div", {
                                    className: c,
                                    style: h,
                                    children: (0, s.jsx)(eT, {
                                        images: m.images,
                                        currentIndex: o ? l : 0,
                                        isCurrentItem: o,
                                        isGallerySwipeInProgress: rn,
                                        disableDrag: rS.isZooming,
                                        onIndexChange: u,
                                        title: e.title,
                                        showControls: o,
                                        className: "bg-black relative",
                                        renderFullscreenButtons: () => rt(e),
                                        renderBottomLeftText: () => eZ(e)
                                    })
                                })
                            });
                        case "embed":
                            if (m.processedVideo) return (0, s.jsx)("div", {
                                className: c,
                                style: b,
                                children: (0, s.jsx)("div", {
                                    className: "w-full h-full",
                                    children: (0, s.jsx)(p, {
                                        src: m.processedVideo.source,
                                        width: m.width,
                                        height: m.height,
                                        poster: m.processedVideo.poster,
                                        post: e,
                                        className: "w-full h-full",
                                        isFullscreen: !0
                                    })
                                })
                            });
                            let x = null === (n = e.processedContent.embedHtml) || void 0 === n ? void 0 : n.match(/src="([^"]+)"/),
                                v = x ? x[1] : "";
                            return (0, s.jsx)("div", {
                                className: c,
                                style: b,
                                children: (0, s.jsxs)("div", {
                                    className: "relative w-full h-full",
                                    children: [(0, s.jsx)("div", {
                                        className: "absolute flex items-center justify-center",
                                        style: {
                                            top: "10%",
                                            left: "10%",
                                            width: "80%",
                                            height: "80%",
                                            zIndex: 10
                                        },
                                        children: (0, s.jsx)("div", {
                                            className: "w-full h-full",
                                            style: {
                                                backgroundColor: "transparent"
                                            }
                                        })
                                    }), (0, s.jsx)("iframe", {
                                        src: v,
                                        className: "w-full h-full",
                                        style: {
                                            aspectRatio: e.processedContent.width && e.processedContent.height ? "".concat(e.processedContent.width, "/").concat(e.processedContent.height) : "16/9"
                                        },
                                        frameBorder: "0",
                                        scrolling: "no",
                                        allowFullScreen: !0
                                    })]
                                })
                            })
                    }
                }, rm = e => {
                    let r = e.target,
                        t = r.scrollTop,
                        s = r.scrollHeight - r.clientHeight,
                        n = P.current;
                    t > n.furthestScroll && (n.furthestScroll = t, n.furthestScrollRatio = Math.min(1, t / s))
                }, [rl, ro] = (0, n.useState)(0), [rc, rd] = (0, n.useState)(0), [ru, rb] = (0, n.useState)(0), [rh, rg] = (0, n.useState)(!1), [rp, rf] = (0, n.useState)(0), [rk, rx] = (0, n.useState)(250), [rv, ry] = (0, n.useState)(0), rw = (0, n.useRef)([]), rj = i > 0, rN = i < r.length - 1, rC = (0, n.useRef)("free"), [rS, rA] = (0, n.useState)({
                    scale: 1,
                    translateX: 0,
                    translateY: 0,
                    isZooming: !1
                }), [rT, rE] = (0, n.useState)(null), rP = (0, n.useRef)(null), rz = e => {
                    let r = performance.now(),
                        t = e.filter(e => r - e.time < 120);
                    if (t.length < 3 || r - t[t.length - 2].time > 80) return {
                        x: 0,
                        y: 0
                    };
                    let s = 0,
                        n = 0,
                        a = 0,
                        i = 0,
                        m = 0,
                        l = 0,
                        o = t.length,
                        c = t[0].time;
                    for (let e of t) {
                        let r = e.time - c;
                        s += r, n += e.x, a += e.y, i += r * e.x, m += r * e.y, l += r * r
                    }
                    let d = o * l - s * s;
                    if (.001 > Math.abs(d)) return {
                        x: 0,
                        y: 0
                    };
                    let u = (o * i - s * n) / d * 1e3,
                        b = (o * m - s * a) / d * 1e3;
                    return {
                        x: 10 > Math.abs(u) ? 0 : u,
                        y: 10 > Math.abs(b) ? 0 : b
                    }
                }, rF = (e, r) => {
                    let t = Math.abs(r),
                        s = 400;
                    return t > 0 && (s = 400 - 280 * Math.pow(Math.min(t / 2800, 1), 2)), Math.max(120, Math.min(400, s *= .9))
                }, rM = (e, r) => {
                    let t = e.clientX - r.clientX,
                        s = e.clientY - r.clientY;
                    return Math.sqrt(t * t + s * s)
                }, r_ = (e, r) => ({
                    x: (e.clientX + r.clientX) / 2,
                    y: (e.clientY + r.clientY) / 2
                }), rL = () => {
                    rg(!1), rf(0), ro(0), rd(0), rb(0), rw.current = [], rP.current = null
                }, rB = () => {
                    rf(0), rw.current = [], rP.current = null
                }, rR = e => {
                    rP.current = null, rC.current = "free", rg(!0);
                    let r = e.touches[0],
                        t = performance.now();
                    ro(r.clientY), rd(r.clientX), rb(r.clientY), ry(t), eB.current = r.clientY, eR.current = r.clientX, eI.current = r.clientY, eG.current = t, rw.current = [{
                        x: r.clientX,
                        y: r.clientY,
                        time: t
                    }]
                }, rI = e => {
                    let r = e.clientY,
                        t = e.clientX,
                        s = performance.now(),
                        n = r - rl,
                        a = t - rc;
                    if (!rP.current) {
                        let e = Math.sqrt(n * n + a * a);
                        if (e > 8) {
                            let r = s - rv;
                            r > 0 && e / r * 1e3 > 50 && (Math.abs(n) > 1.2 * Math.abs(a) ? rP.current = "vertical" : Math.abs(a) > 1.2 * Math.abs(n) && (rP.current = "horizontal"))
                        }
                    }
                    if ("horizontal" !== rP.current) {
                        if (rb(r), eI.current = r, rw.current.push({
                                x: t,
                                y: r,
                                time: s
                            }), rw.current.length > 30 && rw.current.shift(), eL && B.current) {
                            if ("scroll" === rC.current) return;
                            if ("nav" === rC.current) {
                                rf(n);
                                return
                            }
                            if (3 > Math.abs(n)) return;
                            let {
                                scrollTop: e,
                                scrollHeight: r,
                                clientHeight: t
                            } = B.current, s = n > 0, a = n < 0;
                            if (s && e <= 10 && rj || a && e >= r - t - 10 && rN) {
                                rC.current = "nav", rf(n);
                                return
                            }
                            rC.current = "scroll";
                            return
                        }
                        rf(n)
                    }
                }, rG = e => {
                    var t;
                    let s = performance.now();
                    rP.current = null;
                    let n = null === (t = e.changedTouches) || void 0 === t ? void 0 : t[0];
                    n && rw.current.push({
                        x: n.clientX,
                        y: n.clientY,
                        time: s
                    });
                    let {
                        x: a,
                        y: l
                    } = rz(rw.current), o = eI.current - eB.current, c = Math.abs(l), d = "gallery" === r[i].processedContent.type, b = Math.abs(a) > Math.abs(l);
                    if (eL) {
                        let e = rC.current;
                        if (rC.current = "free", "scroll" === e) {
                            rL();
                            return
                        }
                        if ("nav" === e) {
                            let e = rF(o, l);
                            rx(e), L(!0), setTimeout(() => L(!1), e);
                            let r = Math.abs(o) > .1 * window.innerHeight,
                                t = 50 > Math.abs(l) || o * l > 0;
                            (r || c > 250) && t && (o > 0 && rj ? (m(e => e - 1), u(0), rD.current = 0, rH.current = null) : o < 0 && rN && (m(e => e + 1), u(0), rD.current = 0, rH.current = null)), rL();
                            return
                        }
                        rL();
                        return
                    }
                    let h = rF(o, l);
                    if (rx(h), S(o / (window.screen.height * window.devicePixelRatio) / ((s - rv) / 1e3), function(e, r) {
                            let t = window.screen.width * window.devicePixelRatio;
                            return e / (Math.sqrt(t ** 2 + (window.screen.height * window.devicePixelRatio) ** 2) / function() {
                                var e;
                                let r = navigator.userAgent || "",
                                    t = window.devicePixelRatio || 1,
                                    s = Math.max(window.screen.width * t, window.screen.height * t);
                                if (null === (e = navigator.userAgentData) || void 0 === e ? void 0 : e.brands) {
                                    let e = navigator.userAgentData.brands.map(e => e.brand).join(" ");
                                    if (e.includes("iPhone")) return 6.1;
                                    if (e.includes("iPad")) return 10.2
                                }
                                if (/iPhone/.test(r)) return /iPhone 14 Pro Max|iPhone 13 Pro Max|iPhone 12 Pro Max/.test(r) ? 6.7 : /iPhone 14 Pro|iPhone 13 Pro|iPhone 12 Pro/.test(r) ? 6.1 : /iPhone SE/.test(r) || /iPhone 8|iPhone 7|iPhone 6/.test(r) ? 4.7 : /iPhone X|iPhone XS|iPhone 11 Pro/.test(r) ? 5.8 : /iPhone XR|iPhone 11/.test(r) ? 6.1 : /Plus|Max/.test(r) ? 6.5 : 6;
                                if (/Android/.test(r)) {
                                    if (/Pixel 7 Pro/.test(r)) return 6.7;
                                    if (/Pixel 7|Pixel 6/.test(r)) return 6.3;
                                    if (/Pixel 5|Pixel 4/.test(r)) return 6;
                                    if (/Pixel 3|Pixel 2/.test(r)) return 5.5;
                                    if (/Samsung/.test(r)) {
                                        if (/S22 Ultra/.test(r)) return 6.8;
                                        if (/S22|S21|S20/.test(r)) return 6.2
                                    }
                                }
                                return s < 1200 ? 4.7 : s < 1600 ? 5.8 : s < 2e3 ? 6.5 : s < 2600 ? 8 : s < 3200 ? 10.5 : s < 4e3 ? 12.9 : 6
                            }()) / (r / 1e3)
                        }(o, s - rv), l), L(!0), setTimeout(() => L(!1), h), b && d);
                    else {
                        let e = rp * l >= 0;
                        (Math.abs(o) > window.innerHeight / 4 || c > 250) && e && (o > 0 && rj ? (m(e => e - 1), u(0), rD.current = 0, rH.current = null) : o < 0 && rN && (m(e => e + 1), u(0), rD.current = 0, rH.current = null))
                    }
                    rL()
                }, rW = (0, n.useRef)(!1), rD = (0, n.useRef)(0), rH = (0, n.useRef)(null);
                if (!r[i]) return;
                let rO = (0, n.useRef)(i);
                (0, n.useEffect)(() => {
                    rO.current = i
                }, [i]);
                let rU = (0, n.useRef)(0),
                    rX = (0, n.useRef)(!1);
                (0, n.useEffect)(() => {
                    rU.current = rp
                }, [rp]), (0, n.useEffect)(() => {
                    rX.current = rS.isZooming
                }, [rS.isZooming]);
                let [rq, rY] = (0, n.useState)(!1), rV = (0, n.useRef)(null), rZ = (0, n.useCallback)((e, r) => {
                    !e.target.closest("button") && (0 !== rU.current || rX.curren || es.U.isActive() || (rV.current && clearTimeout(rV.current), rV.current = setTimeout(() => {
                        0 !== rU.current || rX.current || es.U.isActive() || (r.current && (rY(!0), "vibrate" in navigator && navigator.vibrate(15)), rV.current = null)
                    }, 250)))
                }, []), rJ = (0, n.useCallback)(() => {
                    rV.current && (clearTimeout(rV.current), rV.current = null), rq && rY(!1)
                }, [rq]);
                (0, n.useEffect)(() => () => {
                    rV.current && clearTimeout(rV.current)
                }, []), (0, n.useEffect)(() => {
                    let e = () => {
                        if (!Q) return
                    };
                    return document.addEventListener("visibilitychange", e), () => {
                        document.removeEventListener("visibilitychange", e)
                    }
                }, [Q]), (0, n.useEffect)(() => {
                    rS.isZooming ? es.U.lock("zooming") : es.U.unlock("zooming")
                }, [rS.isZooming]), (0, n.useEffect)(() => {
                    rq ? es.U.lock("fastPlaying") : es.U.unlock("fastPlaying")
                }, [rq]), (0, n.useEffect)(() => (es.U.disableSidebar("sidebar"), () => {
                    es.U.enableSidebar("sidebar")
                }), []);
                let [rK, rQ] = (0, n.useState)(!1), r$ = (0, n.useRef)(null), r0 = e => {
                    if (!r$.current) return;
                    let r = r$.current.getBoundingClientRect();
                    ei(Math.max(.1, Math.min(1, (e - r.left) / r.width)))
                };
                return (0, s.jsxs)("div", {
                    ref: M,
                    className: "fixed inset-0 z-50 bg-black overflow-hidden touch-none",
                    onClick: () => {
                        var e;
                        if (!Q) return;
                        let t = r[i];
                        (null == t ? void 0 : null === (e = t.processedContent) || void 0 === e ? void 0 : e.type) !== "video" && ek(e => !e)
                    },
                    onTouchStart: e => {
                        if (H || rq) return;
                        let r = e.touches;
                        if (!rW.current) {
                            if (2 !== r.length || 0 !== rp || rn.current) 1 !== r.length || rS.isZooming || rW.current || rR(e);
                            else {
                                let e = rM(r[0], r[1]),
                                    t = r_(r[0], r[1]),
                                    s = t.x - window.innerWidth / 2,
                                    n = t.y - window.innerHeight / 2;
                                rE({
                                    distance: e,
                                    center: t,
                                    pinchCenterX: s,
                                    pinchCenterY: n,
                                    scale: rS.scale,
                                    translateX: rS.translateX,
                                    translateY: rS.translateY
                                }), rA(e => ({ ...e,
                                    zoomStart: performance.now(),
                                    isZooming: !0
                                })), rW.current = !0, rL()
                            }
                        }
                    },
                    onTouchMove: e => {
                        if (H || rq) return;
                        let r = e.touches[0],
                            t = e.touches;
                        if (2 === t.length && rT && !es.U.isActive()) {
                            let e = rM(t[0], t[1]),
                                r = r_(t[0], t[1]),
                                s = e / rT.distance,
                                n = Math.min(Math.max(rT.scale * (1 + (s - 1) * .8), 1), 5),
                                a = r.x,
                                i = r.y,
                                m = window.innerWidth / 2,
                                l = window.innerHeight / 2,
                                o = a - m,
                                c = i - l,
                                d = rT.translateX + o * (rT.scale - n),
                                u = rT.translateY + c * (rT.scale - n),
                                b = window.innerWidth / 2,
                                h = window.innerHeight / 2,
                                g = b * (n - 1),
                                p = h * (n - 1),
                                f = Math.max(-g, Math.min(g, d)),
                                k = Math.max(-p, Math.min(p, u));
                            if (n > rT.scale) {
                                let e = Math.abs(o) / m,
                                    r = Math.abs(c) / l;
                                e > .050000000000000044 && (f += .5 * g * ((e - .050000000000000044) / .95) * (o > 0 ? -1 : 1), f = Math.max(-g, Math.min(g, f))), r > .050000000000000044 && (k += .5 * p * ((r - .050000000000000044) / .95) * (c > 0 ? -1 : 1), k = Math.max(-p, Math.min(p, k)))
                            }
                            rA({
                                scale: n,
                                translateX: f,
                                translateY: k,
                                isZooming: !0
                            })
                        } else 1 !== t.length || rW.current || rI(r)
                    },
                    onTouchEnd: e => {
                        let t = e.touches;
                        if (0 === t.length && (rW.current = !1), rT || rW.current) {
                            rS.isZooming && A(rS), rA({
                                scale: 1,
                                translateX: 0,
                                translateY: 0,
                                isZooming: !1
                            }), rE(null), rL(), rD.current = 0;
                            return
                        }
                        if (rh && !H && !rq && 0 === t.length) {
                            let t = e.changedTouches[0],
                                s = Date.now(),
                                n = e.currentTarget.getBoundingClientRect();
                            if (s - rD.current < ez && t) {
                                let a = t.clientX - n.left,
                                    m = t.clientY - n.top,
                                    l = rH.current,
                                    o = Math.min(60, .15 * window.innerWidth);
                                if (l && Math.hypot(a - l.x, m - l.y) < o) {
                                    e.preventDefault(), e9.current = Date.now(), e8.current && (clearTimeout(e8.current), e8.current = null), rB(), e7(r[i], !1, a, m), rD.current = s, rH.current = {
                                        x: a,
                                        y: m
                                    };
                                    return
                                }
                            }
                            Math.abs(eI.current - eB.current) > 10 || (rD.current = s, rH.current = {
                                x: t.clientX - n.left,
                                y: t.clientY - n.top
                            }), rG(e)
                        }
                    },
                    children: [
                        [0, 1, 2].map(e => {
                            var t, n;
                            let a;
                            let m = i % 3,
                                l = i + (a = e === m ? 0 : e === (m + 1) % 3 ? 1 : -1),
                                o = (l % r.length + r.length) % r.length,
                                c = r[o],
                                d = (null == c ? void 0 : null === (t = c.processedContent) || void 0 === t ? void 0 : t.type) === "video",
                                u = l < 0 || l >= r.length,
                                b = 0 === a,
                                h = rO.current,
                                g = 0;
                            h < i ? g = 1 : h > i && (g = -1);
                            let p = 0 !== a && a === g,
                                f = rh || p ? "none" : rs();
                            return (0, s.jsx)("div", {
                                className: "absolute inset-0 flex items-center justify-center z-50",
                                style: {
                                    transform: eL ? "" : "translateY(".concat(rp, "px)"),
                                    transition: f,
                                    pointerEvents: b ? "auto" : "none",
                                    willChange: "transform",
                                    display: d && !u ? void 0 : "none"
                                },
                                ...!eP && {
                                    onMouseDown: r => rZ(r, T[e]),
                                    onMouseUp: rJ,
                                    onMouseLeave: rJ
                                },
                                onTouchStart: r => rZ(r, T[e]),
                                onTouchEnd: rJ,
                                onTouchCancel: rJ,
                                children: (0, s.jsxs)("div", {
                                    className: "absolute w-full h-full flex z-50 items-center justify-center bg-black",
                                    style: {
                                        transform: "translateY(".concat(100 * a, "%)"),
                                        transition: f
                                    },
                                    children: [rt(c), eZ(c), (0, s.jsx)("div", {
                                        className: "absolute w-full h-full",
                                        style: {
                                            transform: b && d ? "translate(".concat(rS.translateX, "px, ").concat(rS.translateY, "px) scale(").concat(rS.scale, ")") : "none",
                                            transition: rS.isZooming ? "none" : "transform 0.3s ease-out"
                                        },
                                        children: (0, s.jsx)(ej, {
                                            videoRef: T[e],
                                            autoplay: b && d,
                                            src: "video" === c.processedContent.type ? c.processedContent.hlsSource || c.processedContent.dashSource || c.processedContent.source : "empty",
                                            poster: c.processedContent.preview_url || (null === (n = c.processedContent.processedVideo) || void 0 === n ? void 0 : n.poster),
                                            singleTapTimeoutRef: e8,
                                            lastDoubleTapTimeRef: e9,
                                            fastPlay: rq && b && d,
                                            sources: c.processedContent.sources,
                                            post: c,
                                            className: "w-full h-full object-contain",
                                            onSourceChange: () => {}
                                        })
                                    })]
                                }, "player-slot-".concat(e))
                            }, "player-wrapper-".concat(e))
                        }), (0, s.jsx)("div", {
                            className: "fixed inset-0 flex items-center justify-center overflow-hidden touch-none pointer-events-none z-50",
                            children: (0, s.jsx)(eS.N, {
                                children: eQ && (0, s.jsx)(eC.P.div, {
                                    initial: {
                                        opacity: 0,
                                        scale: .6
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1.4
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: 1.2
                                    },
                                    transition: {
                                        duration: .3
                                    },
                                    children: (0, s.jsx)(ec.A, {
                                        className: "w-24 h-24",
                                        fill: "white",
                                        color: "white"
                                    })
                                }, "heart-animation")
                            })
                        }), e0.map(e => {
                            let {
                                id: r,
                                x: t,
                                y: n,
                                randX: a,
                                randY: i,
                                randRotateSign: m,
                                randRotate: l,
                                randScale: o,
                                color: c
                            } = e;
                            return (0, s.jsx)(eC.P.div, {
                                className: "fixed pointer-events-none z-50",
                                style: {
                                    left: t + a,
                                    top: n + i,
                                    translateX: "-50%",
                                    translateY: "-50%"
                                },
                                initial: {
                                    opacity: 0,
                                    scale: .3 * o,
                                    y: 0,
                                    rotate: -15 * m + l
                                },
                                animate: {
                                    opacity: [0, 1, 1, 1, .7, 0],
                                    scale: [.3 * o, 1.3 * o, 1.55 * o, 1.7 * o],
                                    y: [0, -60 + i, -100 + i, -130 + i],
                                    rotate: [-10 * m + l, -2 * m + l, 0 * m + l]
                                },
                                children: (0, s.jsx)(j.A, {
                                    color: c,
                                    fill: c,
                                    className: "w-[26vw] h-[26vh]"
                                })
                            }, r)
                        }), eL && (0, s.jsxs)(s.Fragment, {
                            children: [rt(e_), (0, s.jsx)("div", {
                                className: "transition-opacity duration-600 ".concat(!rS.isZooming && eP ? "opacity-100" : "opacity-0 pointer-events-none"),
                                children: (0, s.jsx)("div", {
                                    className: "absolute ".concat(el ? "left" : "right", "-0 transition-all m-1 mx-0.5 duration-200 ease-in-out z-50"),
                                    style: {
                                        bottom: "1.5rem"
                                    },
                                    children: (0, s.jsx)("button", {
                                        onClick: e => (e.stopPropagation(), i < r.length - 1 && (rf(0) || m(e => e + 1))),
                                        className: "flex items-center justify-center w-14 h-14 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer",
                                        children: (0, s.jsx)(ed.A, {
                                            color: "#f9f9f9",
                                            className: "size-10",
                                            strokeWidth: 2.5,
                                            style: re
                                        })
                                    })
                                })
                            })]
                        }), Q && (0, s.jsxs)("div", {
                            draggable: !0,
                            className: "absolute right-4 top-1 flex items-center gap-2 transition-all duration-200 ease-in-out z-50",
                            children: [(0, s.jsx)("div", {
                                ref: r$,
                                draggable: !0,
                                className: "draggable-item relative w-40 cursor-pointer transition-all duration-200 ease-in-out touch-none ".concat(rK ? "opacity-100" : "opacity-50 hover:opacity-100"),
                                style: {
                                    height: "3rem",
                                    paddingTop: "1rem",
                                    paddingBottom: "1rem"
                                },
                                onTouchStart: e => {
                                    e.stopPropagation(), rQ(!0), r0(e.touches[0].clientX)
                                },
                                onTouchMove: e => {
                                    e.preventDefault(), e.stopPropagation(), r0(e.touches[0].clientX)
                                },
                                onTouchEnd: e => {
                                    e.stopPropagation(), rQ(!1)
                                },
                                onClick: e => e.stopPropagation(),
                                ...!("ontouchstart" in window) && {
                                    onMouseDown: e => {
                                        e.preventDefault(), e.stopPropagation(), rQ(!0), r0(e.clientX);
                                        let r = e => {
                                                r0(e.clientX)
                                            },
                                            t = () => {
                                                rQ(!1), document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", t)
                                            };
                                        document.addEventListener("mousemove", r), document.addEventListener("mouseup", t)
                                    }
                                },
                                children: (0, s.jsx)("div", {
                                    className: "draggable-item absolute left-0 w-full rounded-full overflow-hidden\n                shadow-sm shadow-white/30\n                ".concat(rK ? "h-2 bg-white/70" : "h-1.5 bg-white/50", "\n                ").concat(rK ? "" : "transition-all duration-200", "\n              "),
                                    style: {
                                        top: "50%",
                                        transform: "translateY(-50%)"
                                    },
                                    children: (0, s.jsx)("div", {
                                        className: "draggable-item absolute w-full left-0 top-0 rounded-full\n                  ".concat(rK ? "bg-white/90" : "bg-white/40", "\n                  ").concat(rK ? "" : "transition-all duration-200", "\n                "),
                                        style: {
                                            width: "".concat(100 * ea, "%"),
                                            height: "100%"
                                        }
                                    })
                                })
                            }), (0, s.jsxs)("div", {
                                className: "relative",
                                onClick: e => {
                                    e.stopPropagation(), ee(!1)
                                },
                                children: [(0, s.jsx)("div", {
                                    className: "absolute -inset-2",
                                    "aria-hidden": "true"
                                }), (0, s.jsx)("button", {
                                    className: "relative flex items-center justify-center w-14 h-14 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer",
                                    children: (0, s.jsx)(eu.A, {
                                        color: "#f9f9f9",
                                        size: 30,
                                        strokeWidth: 2.5,
                                        style: { ...re
                                        }
                                    })
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "absolute w-1 top-0 left-0 right-0 z-50",
                            children: (0, s.jsx)("div", {
                                className: "pt-4 pl-4",
                                children: (0, s.jsx)("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: b && (0, s.jsx)("div", {
                                        className: "flex items-center gap-4",
                                        children: (0, s.jsx)(eg.$, {
                                            variant: "ghost",
                                            size: "icon",
                                            onClick: e => {
                                                e.stopPropagation(), b(e_.id)
                                            },
                                            className: "text-white/70 hover:text-white",
                                            children: (0, s.jsx)(eb.A, {})
                                        })
                                    })
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: "w-full h-full relative",
                            children: r.map((e, r) => ({
                                item: e,
                                index: r
                            })).filter(e => {
                                let {
                                    index: r
                                } = e;
                                return 2 >= Math.abs(r - i)
                            }).map(e => {
                                let {
                                    item: r,
                                    index: t
                                } = e;
                                return (0, s.jsx)("div", {
                                    children: ri(r, t)
                                }, "".concat(r.id, "-").concat(t, "-fullscreen"))
                            })
                        }), i != i || eP ? null : (0, s.jsx)(s.Fragment, {
                            children: e_.tags && (0, s.jsx)(Z, {
                                isOpen: I,
                                onClose: e => {
                                    G(!1)
                                },
                                tags: e_.categorizedTags,
                                currentSite: f
                            })
                        }), i != i ? null : (0, s.jsx)(s.Fragment, {
                            children: (0, s.jsx)(er, {
                                isOpen: W,
                                item: e_,
                                onClose: e => {
                                    D(!1)
                                },
                                onShare: e => x(e_, e),
                                shareUrl: (0, a.zI)(f, e_)
                            })
                        }), (0, s.jsxs)("div", {
                            className: "absolute ".concat(el ? "left" : "right", "-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 \n          ").concat(eP ? "hidden" : "opacity-40", "\n      "),
                            children: [(0, s.jsx)(eg.$, {
                                variant: "ghost",
                                size: "icon",
                                className: "bg-black/50 hover:bg-black/70 text-white/70 hover:text-white",
                                onClick: e => (e.stopPropagation(), i > 0 && (rf(0) || m(e => e - 1))),
                                disabled: 0 === i,
                                children: (0, s.jsx)(eh.A, {
                                    className: "w-6 h-6"
                                })
                            }), (0, s.jsx)(eg.$, {
                                variant: "ghost",
                                size: "icon",
                                className: "bg-black/50 hover:bg-black/70 text-white/70 hover:text-white",
                                onClick: e => (e.stopPropagation(), i < r.length - 1 && (rf(0) || m(e => e + 1))),
                                disabled: i === r.length - 1,
                                children: (0, s.jsx)(o.A, {
                                    className: "w-6 h-6"
                                })
                            })]
                        })
                    ]
                })
            }
            var eL = t(58802);

            function eB(e) {
                let {
                    isOpen: r,
                    onClose: t,
                    onOpen: a,
                    tags: i
                } = e, {
                    site: m
                } = (0, C.E)(), l = (0, n.useRef)(null), {
                    dragOffset: o,
                    dragPercentage: c,
                    isAnimating: d,
                    isSnappingBack: u
                } = (0, eL.n)(l, {
                    onClose: t,
                    onOpen: a,
                    isOpen: r,
                    threshold: 80,
                    velocityThreshold: .1,
                    direction: "left",
                    id: "tag-sidebar"
                }), b = c > 0, h = r || b || d || u, {
                    categorizedTags: g,
                    isLoading: p
                } = A(m, i, h), f = (0, n.useRef)(g);
                h && (f.current = g);
                let k = f.current;
                return (0, s.jsx)(eS.N, {
                    children: (0, s.jsxs)(eC.P.div, {
                        ref: l,
                        initial: {
                            x: "-100%"
                        },
                        animate: {
                            x: !r && b ? u ? "-100%" : "".concat(-100 + c, "%") : r && o > 0 ? -o : r ? 0 : "-100%"
                        },
                        exit: {
                            x: "-100%"
                        },
                        "data-sidebar-direction": "left",
                        transition: !b || d || u ? {
                            type: "tween",
                            duration: .2
                        } : {
                            type: "tween",
                            duration: 0
                        },
                        className: "fixed left-0 top-0 bottom-0 h-[100dvh] w-full sm:w-96 bg-black border-r border-zinc-800/50 z-50 overscroll-contain overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800",
                        style: {
                            touchAction: "pan-y",
                            pointerEvents: r ? "auto" : "none"
                        },
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-center justify-between p-4 border-b border-zinc-800/50 bg-black",
                            children: [(0, s.jsx)("h2", {
                                className: "text-xl font-bold text-zinc-100",
                                children: "Tags"
                            }), (0, s.jsx)(eg.$, {
                                variant: "ghost",
                                size: "icon",
                                onClick: t,
                                className: "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors",
                                children: (0, s.jsx)(eb.A, {
                                    className: "h-5 w-5"
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "p-4",
                            children: h && (0, s.jsx)(V, {
                                tags: k
                            })
                        })]
                    })
                })
            }

            function eR(e) {
                let {
                    startingIndex: r = null,
                    posts: t,
                    error: i,
                    isLoading: m,
                    handleLoadMore: l,
                    hasMore: o,
                    handleVisibleTileChange: d,
                    site: u,
                    seoNextAnchor: b,
                    isOnSavedPath: h
                } = e, g = (0, n.useRef)(null), {
                    columnCount: p,
                    tileStyle: f
                } = (0, c.t0)(), k = (0, n.useCallback)(e => "Automatic" === p ? (0, a.bQ)() : parseInt(p), [p]), [x, v] = (0, n.useState)(() => k(window.innerWidth)), y = (0, n.useRef)(Array.from({
                    length: x
                }, () => [])), w = (0, n.useRef)(Array(x).fill(0)), [j, N] = (0, n.useState)(y.current);
                (0, n.useEffect)(() => {
                    let e = () => {
                        g.current && v(k(g.current.offsetWidth))
                    };
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, [k]);
                let C = (0, n.useCallback)(e => {
                        if ("gallery" === e.processedContent.type && e.processedContent.images) return e.processedContent.images[0].height / e.processedContent.images[0].width;
                        let r = e.processedContent.width || 1,
                            t = e.processedContent.height || 1;
                        return (0, a.q8)(r, t) ? a.HX : t / r
                    }, []),
                    S = (0, n.useCallback)(e => {
                        0 !== y.current.length && (e.forEach(e => {
                            let r = w.current.indexOf(Math.min(...w.current));
                            y.current[r].push(e), w.current[r] += C(e)
                        }), N(y.current.map(e => [...e])))
                    }, [C]);
                (0, n.useEffect)(() => {
                    let e = new Set(y.current.flat().map(e => e.id)),
                        r = t.filter(r => !e.has(r.id));
                    r.length > 0 && S(r)
                }, [t, S]), (0, n.useEffect)(() => {
                    let e = Array.from({
                            length: x
                        }, () => []),
                        r = Array(x).fill(0);
                    t.forEach(t => {
                        let s = r.indexOf(Math.min(...r));
                        e[s].push(t), r[s] += C(t)
                    }), y.current = e, w.current = r, N(e.map(e => [...e]))
                }, [x]);
                let [A, T] = (0, n.useState)(r), [E] = (0, n.useState)(0), [P, z] = (0, n.useState)(!1), F = (0, a.un)(), M = (0, n.useRef)(0);
                (0, n.useEffect)(() => {
                    "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual")
                }, []), (0, n.useEffect)(() => {
                    var e;
                    if (null === A || !P) return;
                    let r = null === (e = t[A]) || void 0 === e ? void 0 : e.id;
                    if (!r) return;
                    let s = setTimeout(() => {
                        let e = document.getElementById("post-".concat(r));
                        e && e.scrollIntoView({
                            behavior: "instant",
                            block: "center"
                        })
                    }, 50);
                    return () => clearTimeout(s)
                }, [A, P, t]), (0, n.useEffect)(() => (null === A || P || (window.history.pushState({
                    fullscreen: !0
                }, ""), z(!0)), window.addEventListener("popstate", _, !0), () => window.removeEventListener("popstate", _, !0)), [A, P]);
                let _ = e => {
                        P && (e.stopImmediatePropagation(), e.preventDefault(), M.current = window.scrollY, T(null), z(!1))
                    },
                    L = (0, n.useCallback)(() => {
                        M.current = window.scrollY, F ? (T(null), z(!1)) : P && window.history.back()
                    }, [F, P]),
                    [B, R] = (0, n.useState)(E),
                    [I, G] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    null === A && G(!1)
                }, [A]);
                let W = (0, n.useCallback)(e => r => {
                        let s = t.findIndex(r => r.id === e.id);
                        T(s >= 0 ? s : 0), R(r)
                    }, [t]),
                    D = (0, n.useCallback)(() => {
                        l()
                    }, [l]),
                    H = (0, n.useCallback)(() => G(!0), []),
                    O = (0, n.useCallback)(() => G(!1), []),
                    U = (0, n.useMemo)(() => {
                        var e;
                        return null !== A ? null === (e = t[A]) || void 0 === e ? void 0 : e.categorizedTags : void 0
                    }, [t, A]),
                    X = (0, en.C7)(e => e.setKeywords);
                return (0, n.useEffect)(() => {
                    if (!t || 0 === t.length) return;
                    let e = new Set,
                        r = new Set,
                        s = new Set,
                        n = new Set;
                    t.slice(0, 50).forEach(t => {
                        var a, i, m;
                        t.subreddit && e.add(t.subreddit.toLowerCase());
                        let l = (e, r) => {
                            null == e || e.forEach(e => {
                                let t = e.toLowerCase();
                                t && !t.includes("original") && "oc" !== t && r.add(t)
                            })
                        };
                        l(null === (a = t.categorizedTags) || void 0 === a ? void 0 : a.copyright, r), l(null === (i = t.categorizedTags) || void 0 === i ? void 0 : i.character, s), l(null === (m = t.categorizedTags) || void 0 === m ? void 0 : m.general, n)
                    }), X([...Array.from(e), ...Array.from(r), ...Array.from(s), ...Array.from(n)])
                }, [t, X]), (0, s.jsxs)("div", {
                    className: "w-full",
                    ref: g,
                    children: [i && (0, s.jsx)("div", {
                        className: "text-red-500 p-4",
                        children: i
                    }), null !== A && (0, s.jsx)(e_, {
                        currentIndex: A,
                        setCurrentIndex: T,
                        currentGalleryIndex: B,
                        setCurrentGalleryIndex: R,
                        items: t,
                        hasMore: o,
                        startingGalleryIndex: E,
                        onLoadMore: D,
                        onCloseFullscreen: L,
                        openTagSidebar: H,
                        site: u
                    }), null !== A && "reddit.com" !== u && (0, s.jsx)(eB, {
                        tags: U,
                        isOpen: I,
                        onOpen: H,
                        onClose: O
                    }), (0, s.jsx)(em, {
                        site: u,
                        columns: j,
                        onLoadMore: D,
                        isLoading: m,
                        hasMore: o,
                        seoNextAnchor: b,
                        onItemClick: W,
                        onVisibleTileChange: d
                    })]
                })
            }
        },
        65498: (e, r, t) => {
            t.d(r, {
                A: () => h
            });
            var s = t(95155),
                n = t(12115),
                a = t(25683),
                i = t(46647),
                m = t(34420),
                l = t(23160),
                o = t(3392),
                c = t(14085),
                d = t(17323),
                u = t(43463);
            let b = (0, t(29602).Fr)();

            function h(e) {
                return b ? (0, s.jsx)(p, { ...e
                }) : (0, s.jsx)(g, { ...e
                })
            }

            function g(e) {
                let {
                    isOpen: r,
                    onClose: t,
                    title: m,
                    ariaLabel: l,
                    children: b,
                    footer: h,
                    maxWidth: g = "max-w-3xl",
                    scrollHeight: p = "h-[calc(90vh-4rem)]"
                } = e;
                return n.useEffect(() => (r ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
                    document.body.style.overflow = ""
                }), [r]), (0, s.jsx)(d.Z, {
                    children: (0, s.jsx)(a.N, {
                        children: r && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(i.P.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
                                "aria-hidden": "true",
                                onClick: e => {
                                    e.stopPropagation(), null == t || t(e)
                                }
                            }), (0, s.jsxs)(i.P.div, {
                                initial: {
                                    y: "100%"
                                },
                                animate: {
                                    y: 0
                                },
                                exit: {
                                    y: "100%"
                                },
                                transition: {
                                    type: "tween",
                                    ease: "easeOut",
                                    duration: .3
                                },
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": l || m,
                                onClick: e => e.stopPropagation(),
                                className: (0, u.A)("fixed inset-x-0 bottom-0 z-50 mx-auto w-full", g, "max-h-[95vh] rounded-t-xl bg-gray-950 text-white shadow-lg"),
                                children: [m && (0, s.jsx)("div", {
                                    className: "px-4 py-3 border-b border-gray-800 text-center",
                                    children: (0, s.jsx)("h2", {
                                        className: "text-lg font-semibold",
                                        children: m
                                    })
                                }), (0, s.jsx)(o.F, {
                                    className: p,
                                    children: (0, s.jsx)("div", {
                                        className: "p-4 space-y-6",
                                        children: b
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "p-2 border-t border-gray-800",
                                    children: (0, s.jsx)(c.$, {
                                        variant: "ghost",
                                        onClick: () => t(),
                                        className: "w-full text-white hover:text-white hover:bg-gray-700 rounded-lg text-md",
                                        children: "Dismiss"
                                    })
                                })]
                            })]
                        })
                    })
                })
            }

            function p(e) {
                let {
                    isOpen: r,
                    onClose: t,
                    title: o,
                    ariaLabel: c,
                    children: b,
                    footer: h,
                    maxWidth: g = "max-w-3xl"
                } = e, p = (0, m.d)(0), f = n.useRef(null), k = n.useRef(null), x = n.useRef(null), [v, y] = n.useState(!1), [w, j] = n.useState(!0), [N, C] = n.useState(!1), [S, A] = n.useState(!1), T = n.useRef(0), E = n.useRef(0), P = n.useRef(0), z = n.useRef(0), F = n.useRef(0);
                (0, l.G)(p, [0, 300], [1, 0]), n.useEffect(() => (r ? (document.body.style.overflow = "hidden", j(!0)) : document.body.style.overflow = "", () => {
                    document.body.style.overflow = ""
                }), [r]);
                let M = async () => {
                    if (!w && !S) return;
                    y(!1), A(!1), C(!1);
                    let e = E.current,
                        r = F.current;
                    e > 100 && r >= 0 || r > 500 ? null == t || t() : e > 0 && await new Promise(e => {
                        let r = p.get(),
                            t = Date.now(),
                            s = () => {
                                let n = Math.min((Date.now() - t) / 150, 1),
                                    a = r * (1 - (1 - Math.pow(1 - n, 3)));
                                p.set(a), n < 1 ? requestAnimationFrame(s) : (p.set(0), e(null))
                            };
                        requestAnimationFrame(s)
                    }), T.current = 0, E.current = 0, P.current = 0, z.current = 0, F.current = 0
                };
                return n.useEffect(() => {
                    let e = k.current;
                    if (!e) return;
                    let r = r => {
                        let t = r.touches[0].clientY - T.current;
                        e.scrollTop <= 0 && t > 0 && r.cancelable && r.preventDefault()
                    };
                    return e.addEventListener("touchmove", r, {
                        passive: !1
                    }), () => {
                        e.removeEventListener("touchmove", r)
                    }
                }, [r]), n.useEffect(() => {
                    if (!r) return;
                    let e = e => {
                        var r;
                        let s = e.target;
                        s.closest("[data-sheet-ignore-click-away]") || (null === (r = f.current) || void 0 === r ? void 0 : r.contains(s)) || null == t || t(e)
                    };
                    return document.addEventListener("pointerdown", e), () => {
                        document.removeEventListener("pointerdown", e)
                    }
                }, [r, t]), (0, s.jsx)(d.Z, {
                    children: (0, s.jsx)(a.N, {
                        children: r && (0, s.jsx)(s.Fragment, {
                            children: (0, s.jsxs)(i.P.div, {
                                ref: f,
                                initial: {
                                    y: "100%"
                                },
                                animate: {
                                    y: 0
                                },
                                exit: {
                                    y: "100%"
                                },
                                transition: {
                                    type: "spring",
                                    damping: 30,
                                    stiffness: 300,
                                    mass: .2
                                },
                                style: {
                                    y: p
                                },
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": c || o,
                                onTouchStart: e => {
                                    var r, t;
                                    let s = null === (r = x.current) || void 0 === r ? void 0 : r.contains(e.target);
                                    A(s);
                                    let n = (null === (t = k.current) || void 0 === t ? void 0 : t.scrollTop) || 0;
                                    j(n <= 0), (n <= 0 || s) && (T.current = e.touches[0].clientY, P.current = e.touches[0].clientY, z.current = Date.now(), E.current = 0, F.current = 0, y(!0), C(!1))
                                },
                                onTouchMove: e => {
                                    if (!w && !S) return;
                                    let r = Date.now(),
                                        t = e.touches[0].clientY,
                                        s = t - T.current,
                                        n = r - z.current;
                                    if (n > 0) {
                                        let e = t - P.current;
                                        F.current = e / n * 1e3
                                    }
                                    P.current = t, z.current = r, s > 0 && (E.current = s, p.stop(), p.set(.7 * s), C(s > 100))
                                },
                                onTouchEnd: M,
                                className: (0, u.A)("fixed inset-x-0 bottom-0 z-50 mx-auto w-full", g, "max-h-[90vh] rounded-t-xl bg-gray-950 text-white shadow-lg", "grid grid-rows-[auto_auto_1fr_auto] overflow-hidden"),
                                children: [(0, s.jsx)("div", {
                                    ref: x,
                                    className: "flex justify-center items-center py-6 cursor-grab active:cursor-grabbing",
                                    children: (0, s.jsxs)("div", {
                                        className: "relative flex items-center justify-center w-12 h-1.5",
                                        children: [(0, s.jsx)(i.P.div, {
                                            className: "absolute right-1/2 w-[26px] h-1.5 bg-gray-400 rounded-full",
                                            style: {
                                                originX: "100%",
                                                marginRight: "-4px"
                                            },
                                            animate: {
                                                rotate: N ? 15 : 0
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 25
                                            }
                                        }), (0, s.jsx)(i.P.div, {
                                            className: "absolute left-1/2 w-[26px] h-1.5 bg-gray-400 rounded-full",
                                            style: {
                                                originX: "0%",
                                                marginLeft: "-1px"
                                            },
                                            animate: {
                                                rotate: N ? -15 : 0
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 25
                                            }
                                        })]
                                    })
                                }), o && (0, s.jsx)("div", {
                                    className: "px-4 pb-3 border-b border-gray-800 text-center",
                                    children: (0, s.jsx)("h2", {
                                        className: "text-lg font-semibold",
                                        children: o
                                    })
                                }), (0, s.jsx)("div", {
                                    ref: k,
                                    className: "min-h-0 overflow-y-auto overscroll-contain",
                                    onScroll: () => {
                                        var e;
                                        j(0 >= ((null === (e = k.current) || void 0 === e ? void 0 : e.scrollTop) || 0))
                                    },
                                    children: (0, s.jsx)("div", {
                                        className: "p-4 space-y-6",
                                        children: b
                                    })
                                }), h && (0, s.jsx)("div", {
                                    className: "p-2 border-t border-gray-800",
                                    children: h
                                })]
                            })
                        })
                    })
                })
            }
        },
        92241: (e, r, t) => {
            t.d(r, {
                x: () => u
            });
            var s = t(95155),
                n = t(12115),
                a = t(14085),
                i = t(51055),
                m = t(81556),
                l = t(65498),
                o = t(72581),
                c = t(29288);
            let d = (0, t(29602).Fr)();

            function u(e) {
                var r, t, u;
                let {
                    activeSite: b
                } = e, [h, g] = (0, n.useState)(!1), {
                    columnCount: p,
                    tileStyle: f,
                    playMode: k,
                    audio: x,
                    autoscrollEnabled: v,
                    playToEnd: y,
                    viewMode: w,
                    setColumnCount: j,
                    setTileStyle: N,
                    setPlayMode: C,
                    setAudio: S,
                    setAutoscrollEnabled: A,
                    setPlayToEnd: T,
                    setViewMode: E,
                    useBrowserFullscreen: P,
                    setUseBrowserFullscreen: z,
                    invertFullscreenButtons: F,
                    setInvertFullscreenButtons: M,
                    useHighestQualityImages: _,
                    setUseHighestQualityImages: L,
                    useLowQualityGallery: B,
                    setUseLowQualityGallery: R,
                    disableGestures: I,
                    setDisableGestures: G,
                    siteSearchDefaults: W,
                    setSiteSearchDefault: D,
                    resetSiteSearchDefault: H
                } = (0, c.t0)(), O = [{
                    label: "Audio",
                    checked: x,
                    onChange: S
                }, {
                    label: "Browser Fullscreen",
                    checked: P,
                    onChange: z
                }, {
                    label: "Autoscroll",
                    checked: v,
                    onChange: A
                }, {
                    label: "High Quality Fullscreen",
                    checked: _,
                    onChange: L
                }, {
                    label: "Low Quality Gallery",
                    checked: B,
                    onChange: R
                }, ...d ? [{
                    label: "Invert Buttons",
                    checked: F,
                    onChange: M
                }, {
                    label: "Disable Gestures",
                    checked: I,
                    onChange: G
                }] : []], U = null == b ? void 0 : b.value, X = U && null !== (r = W[U]) && void 0 !== r ? r : {}, q = !!U && Object.keys(null !== (t = W[U]) && void 0 !== t ? t : {}).length > 0, Y = null !== (u = X.score) && void 0 !== u ? u : null == b ? void 0 : b.defaultScore, V = "rating" in X ? X.rating : null, Z = "sort" in X ? X.sort : null, J = "timePeriod" in X ? X.timePeriod : null, K = "ratio" in X ? X.ratio : null, Q = e => {
                    let {
                        active: r,
                        onClick: t,
                        children: n
                    } = e;
                    return (0, s.jsx)("button", {
                        onClick: t,
                        className: "px-3 py-1.5 rounded-lg text-sm transition-colors ".concat(r ? "bg-zinc-600 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"),
                        children: n
                    })
                }, $ = (0, s.jsx)(a.$, {
                    variant: "ghost",
                    size: "icon",
                    className: "h-10 w-10 text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100 transition-all rounded-lg",
                    onClick: () => g(!0),
                    children: (0, s.jsx)(i.A, {
                        className: "h-5 w-5"
                    })
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [$, (0, s.jsxs)(l.A, {
                        isOpen: h,
                        onClose: () => g(!1),
                        title: "Settings",
                        children: [(0, s.jsxs)("div", {
                            className: "space-y-1",
                            children: [(0, s.jsx)("p", {
                                className: "text-xs text-zinc-500 uppercase tracking-wider px-1 mb-2",
                                children: "Column Count"
                            }), (0, s.jsx)("div", {
                                className: "flex flex-wrap gap-2",
                                children: (d ? ["Automatic", 1, 2, 3] : ["Automatic", 1, 2, 3, 4, 5, 6, 7]).map(e => (0, s.jsx)("button", {
                                    onClick: () => j(e),
                                    className: "px-4 py-2 rounded-lg text-sm transition-colors ".concat(p === e ? "bg-zinc-600 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"),
                                    children: e
                                }, e))
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "space-y-1",
                            children: [(0, s.jsx)("p", {
                                className: "text-xs text-zinc-500 uppercase tracking-wider px-1 mb-2",
                                children: "Tile Style"
                            }), (0, s.jsx)("div", {
                                className: "flex flex-wrap gap-2",
                                children: ["no text", "compact", "card"].map(e => (0, s.jsx)("button", {
                                    onClick: () => N(e),
                                    className: "px-4 py-2 rounded-lg text-sm capitalize transition-colors ".concat(f === e ? "bg-zinc-600 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"),
                                    children: e
                                }, e))
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "space-y-1",
                            children: [(0, s.jsx)("p", {
                                className: "text-xs text-zinc-500 uppercase tracking-wider px-1 mb-2",
                                children: "Play Mode"
                            }), (0, s.jsx)("div", {
                                className: "flex flex-wrap gap-2",
                                children: (d ? ["click", "auto"] : ["click", "auto", "hover"]).map(e => (0, s.jsxs)("button", {
                                    onClick: () => C(e),
                                    className: "px-4 py-2 rounded-lg text-sm transition-colors ".concat(k === e ? "bg-zinc-600 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"),
                                    children: ["click" === e ? "Click to Play" : void 0, "hover" === e ? "Play on Hover" : null, "auto" === e ? "Autoplay" : null]
                                }, e))
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "space-y-1",
                            children: [(0, s.jsx)("p", {
                                className: "text-xs text-zinc-500 uppercase tracking-wider px-1 mb-2",
                                children: "Options"
                            }), (0, s.jsx)("div", {
                                className: "rounded-xl overflow-hidden divide-y divide-zinc-800 border border-zinc-800",
                                children: O.map(e => (0, s.jsxs)("div", {
                                    onClick: () => e.onChange(!e.checked),
                                    className: "flex items-center justify-between px-4 py-3.5 text-sm text-zinc-300 bg-zinc-900 active:bg-zinc-800 transition-colors cursor-pointer select-none",
                                    children: [(0, s.jsx)("span", {
                                        children: e.label
                                    }), (0, s.jsx)("div", {
                                        className: "pointer-events-none",
                                        children: (0, s.jsx)(o.d, {
                                            checked: e.checked,
                                            onCheckedChange: e.onChange,
                                            className: "scale-90 data-[state=checked]:bg-zinc-500"
                                        })
                                    })]
                                }, e.label))
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "rounded-xl overflow-hidden divide-y divide-zinc-800 border border-zinc-800",
                            children: [(0, s.jsx)("button", {
                                onClick: () => window.open("https://www.reddit.com/r/scrollx/", "_blank"),
                                className: "w-full text-left px-4 py-3.5 text-sm text-zinc-300 bg-zinc-900 active:bg-zinc-800 transition-colors",
                                children: "Subreddit"
                            }), (0, s.jsx)("button", {
                                onClick: () => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfXh3uNDhlLYwVoLHdrVyrDMu2i-gmFEt1IpQUZDFIThC7GeQ/viewform?usp=header", "_blank"),
                                className: "w-full text-left px-4 py-3.5 text-sm text-zinc-300 bg-zinc-900 active:bg-zinc-800 transition-colors",
                                children: "Anonymous feedback"
                            })]
                        }), (0, s.jsx)("div", {
                            className: "border-t border-zinc-800 pt-1"
                        }), b && (0, s.jsxs)("div", {
                            className: "space-y-3",
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center justify-between px-1",
                                children: [(0, s.jsxs)("p", {
                                    className: "text-xs text-zinc-500 uppercase tracking-wider",
                                    children: ["Defaults \xb7 ", b.label]
                                }), q && (0, s.jsxs)("button", {
                                    onClick: () => H(b.value),
                                    className: "flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors",
                                    children: [(0, s.jsx)(m.A, {
                                        className: "h-3 w-3"
                                    }), "Reset"]
                                })]
                            }), b.score_options && b.score_options.length > 0 && (0, s.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, s.jsx)("p", {
                                    className: "text-xs text-zinc-500 px-1",
                                    children: "Min Score"
                                }), (0, s.jsx)("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: b.score_options.map(e => (0, s.jsx)(Q, {
                                        active: Y === e,
                                        onClick: () => D(b.value, {
                                            score: e
                                        }),
                                        children: e
                                    }, e))
                                })]
                            }), b.rating_options && b.rating_options.length > 0 && (0, s.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, s.jsx)("p", {
                                    className: "text-xs text-zinc-500 px-1",
                                    children: "Rating"
                                }), (0, s.jsx)("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: b.rating_options.map(e => (0, s.jsx)(Q, {
                                        active: V === e.value,
                                        onClick: () => D(b.value, {
                                            rating: e.value
                                        }),
                                        children: e.label
                                    }, e.label))
                                })]
                            }), b.sort_options && b.sort_options.length > 0 && (0, s.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, s.jsx)("p", {
                                    className: "text-xs text-zinc-500 px-1",
                                    children: "Sort"
                                }), (0, s.jsx)("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: b.sort_options.map(e => (0, s.jsx)(Q, {
                                        active: Z === e.value,
                                        onClick: () => D(b.value, {
                                            sort: e.value
                                        }),
                                        children: e.label
                                    }, e.label))
                                })]
                            }), b.time_period && b.time_period.length > 0 && (0, s.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, s.jsx)("p", {
                                    className: "text-xs text-zinc-500 px-1",
                                    children: "Time Period"
                                }), (0, s.jsx)("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: b.time_period.map(e => (0, s.jsx)(Q, {
                                        active: J === e.value,
                                        onClick: () => D(b.value, {
                                            timePeriod: e.value
                                        }),
                                        children: e.label
                                    }, e.value))
                                })]
                            }), b.ratio_options && b.ratio_options.length > 0 && (0, s.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, s.jsx)("p", {
                                    className: "text-xs text-zinc-500 px-1",
                                    children: "Ratio"
                                }), (0, s.jsx)("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: b.ratio_options.map(e => (0, s.jsx)(Q, {
                                        active: K === e.value,
                                        onClick: () => D(b.value, {
                                            ratio: e.value
                                        }),
                                        children: e.label
                                    }, e.value))
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        21971: (e, r, t) => {
            t.d(r, {
                x: () => c
            });
            var s = t(95155),
                n = t(5565),
                a = t(51719),
                i = t(98867),
                m = t(12115),
                l = t(29602),
                o = t(26960);

            function c(e) {
                let {
                    value: r,
                    onSelect: t,
                    exclude: c = []
                } = e, [d, u] = (0, m.useState)(!1), [b, h] = (0, m.useState)({
                    align: "center",
                    offsetX: 0
                }), g = (0, m.useRef)(null), p = (0, m.useRef)(null), f = o.L.find(e => e.label === r), k = o.L.filter(e => !c.includes(e.label)), x = () => {
                    if (!p.current) return;
                    let e = p.current.getBoundingClientRect(),
                        r = window.innerWidth,
                        t = Math.min(r - 32, 360),
                        s = e.left + e.width / 2 - t / 2;
                    s < 16 ? h({
                        align: "left",
                        offsetX: 16 - e.left
                    }) : s + t > r - 16 ? h({
                        align: "right",
                        offsetX: r - 16 - (e.left + e.width)
                    }) : h({
                        align: "center",
                        offsetX: 0
                    })
                };
                (0, m.useLayoutEffect)(() => {
                    d && x()
                }, [d]), (0, m.useEffect)(() => {
                    if (!d) return;
                    let e = () => x();
                    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, [d]), (0, m.useEffect)(() => {
                    let e = e => {
                        d && g.current && !g.current.contains(e.target) && (e.preventDefault(), e.stopPropagation(), u(!1))
                    };
                    return d && (document.addEventListener("click", e, !0), document.addEventListener("contextmenu", e, !0)), () => {
                        document.removeEventListener("click", e, !0), document.removeEventListener("contextmenu", e, !0)
                    }
                }, [d]);
                let v = e => {
                    t(e), u(!1)
                };
                return (0, s.jsxs)("div", {
                    className: "relative inline-block",
                    ref: g,
                    children: [(0, s.jsx)("div", {
                        className: "hidden",
                        children: o.L.map(e => (0, s.jsx)(n.default, {
                            src: e.icon,
                            alt: "",
                            width: 1,
                            height: 1,
                            priority: !0,
                            unoptimized: !0
                        }, e.value))
                    }), (0, s.jsxs)("button", {
                        ref: p,
                        onClick: e => {
                            e.stopPropagation(), u(!d)
                        },
                        className: "flex items-center justify-center h-10 w-10 mx-1 bg-white/10 hover:bg-white/15 transition-colors rounded-full border border-white/20 cursor-pointer group relative",
                        children: [f && (0, s.jsx)("div", {
                            className: "relative h-5 w-5",
                            children: (0, s.jsx)(n.default, {
                                src: f.icon,
                                alt: f.label,
                                className: "object-contain rounded-sm",
                                fill: !0,
                                unoptimized: !0
                            })
                        }), (0, s.jsx)(a.A, {
                            className: "absolute -bottom-0.5 -right-0.5 h-3 w-3 text-white/60 group-hover:text-white/80 transition-colors bg-black/50 rounded-full p-0.5"
                        })]
                    }), d && (0, s.jsx)("div", {
                        className: (() => {
                            let e = "absolute top-full mt-2 w-[calc(100vw-32px)] max-w-sm bg-gray-900/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50";
                            switch (b.align) {
                                case "left":
                                    return "".concat(e, " left-0");
                                case "right":
                                    return "".concat(e, " right-0");
                                default:
                                    return "".concat(e, " left-1/2 transform -translate-x-1/2")
                            }
                        })(),
                        style: "center" === b.align ? {} : {
                            transform: "translateX(".concat(b.offsetX, "px)")
                        },
                        onClick: e => e.stopPropagation(),
                        children: (0, s.jsx)("div", {
                            className: "p-2 sm:p-3 grid grid-cols-3 gap-2",
                            style: {
                                maxHeight: "calc(100vh - 100px)"
                            },
                            children: 0 === k.length ? (0, s.jsx)("div", {
                                className: "py-6 col-span-3 text-center text-white/40 text-sm",
                                children: "No sites available"
                            }) : k.map(e => (0, s.jsxs)("button", {
                                onClick: () => v(e.label),
                                className: (0, l.cn)("flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg transition-all duration-200 group relative", "hover:bg-white/10 active:scale-95", e.label === r ? "bg-blue-500/20 border border-blue-400/30 text-white shadow-lg" : "bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/20"),
                                children: [(0, s.jsx)("div", {
                                    className: "relative h-7 w-7 sm:h-8 sm:w-8 shrink-0",
                                    children: (0, s.jsx)(n.default, {
                                        src: e.icon,
                                        alt: e.label,
                                        className: "object-contain rounded-sm",
                                        fill: !0,
                                        unoptimized: !0
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "text-[10px] sm:text-xs font-medium text-center leading-tight min-h-[2rem] sm:min-h-[2.5rem] flex items-center",
                                    children: (0, s.jsx)("span", {
                                        className: "line-clamp-2 break-words",
                                        children: e.label
                                    })
                                }), e.label === r && (0, s.jsx)("div", {
                                    className: "absolute -top-1 -right-1 bg-blue-400 rounded-full p-0.5 sm:p-1",
                                    children: (0, s.jsx)(i.A, {
                                        className: "h-2 w-2 sm:h-2.5 sm:w-2.5 text-white"
                                    })
                                })]
                            }, e.value))
                        })
                    })]
                })
            }
        },
        14085: (e, r, t) => {
            t.d(r, {
                $: () => o
            });
            var s = t(95155),
                n = t(12115),
                a = t(12317),
                i = t(31027),
                m = t(29602);
            let l = (0, i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-9 px-4 py-2",
                            sm: "h-8 rounded-md px-3 text-xs",
                            lg: "h-10 rounded-md px-8",
                            icon: "h-9 w-9"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                o = n.forwardRef((e, r) => {
                    let {
                        className: t,
                        variant: n,
                        size: i,
                        asChild: o = !1,
                        ...c
                    } = e, d = o ? a.DX : "button";
                    return (0, s.jsx)(d, {
                        className: (0, m.cn)(l({
                            variant: n,
                            size: i,
                            className: t
                        })),
                        ref: r,
                        ...c
                    })
                });
            o.displayName = "Button"
        },
        20750: (e, r, t) => {
            t.d(r, {
                M5: () => h,
                SQ: () => g,
                _2: () => p,
                dc: () => d,
                lv: () => u,
                mB: () => f,
                nV: () => b,
                rI: () => o,
                ty: () => c
            });
            var s = t(95155),
                n = t(12115),
                a = t(10617),
                i = t(98867),
                m = t(33565),
                l = t(29602);
            let o = e => (0, s.jsx)(a.bL, {
                    modal: (0, l.Fr)(),
                    ...e
                }),
                c = a.l9;
            a.YJ;
            let d = a.ZL,
                u = a.Pb;
            a.z6;
            let b = n.forwardRef((e, r) => {
                let {
                    className: t,
                    inset: n,
                    children: i,
                    ...m
                } = e;
                return (0, s.jsx)(a.ZP, {
                    ref: r,
                    className: (0, l.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", n && "pl-8", t),
                    ...m,
                    children: i
                })
            });
            b.displayName = a.ZP.displayName;
            let h = n.forwardRef((e, r) => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, s.jsx)(a.G5, {
                    ref: r,
                    className: (0, l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
                    ...n
                })
            });
            h.displayName = a.G5.displayName;
            let g = n.forwardRef((e, r) => {
                let {
                    className: t,
                    sideOffset: n = 4,
                    ...i
                } = e;
                return (0, s.jsx)(a.ZL, {
                    children: (0, s.jsx)(a.UC, {
                        ref: r,
                        sideOffset: n,
                        className: (0, l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
                        ...i
                    })
                })
            });
            g.displayName = a.UC.displayName;
            let p = n.forwardRef((e, r) => {
                let {
                    className: t,
                    inset: n,
                    ...i
                } = e;
                return (0, s.jsx)(a.q7, {
                    ref: r,
                    className: (0, l.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", n && "pl-8", t),
                    ...i
                })
            });
            p.displayName = a.q7.displayName, n.forwardRef((e, r) => {
                let {
                    className: t,
                    children: n,
                    checked: m,
                    ...o
                } = e;
                return (0, s.jsxs)(a.H_, {
                    ref: r,
                    className: (0, l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
                    checked: m,
                    ...o,
                    children: [(0, s.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, s.jsx)(a.VF, {
                            children: (0, s.jsx)(i.A, {
                                className: "h-4 w-4"
                            })
                        })
                    }), n]
                })
            }).displayName = a.H_.displayName, n.forwardRef((e, r) => {
                let {
                    className: t,
                    children: n,
                    ...i
                } = e;
                return (0, s.jsxs)(a.hN, {
                    ref: r,
                    className: (0, l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
                    ...i,
                    children: [(0, s.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, s.jsx)(a.VF, {
                            children: (0, s.jsx)(m.A, {
                                className: "h-2 w-2 fill-current"
                            })
                        })
                    }), n]
                })
            }).displayName = a.hN.displayName, n.forwardRef((e, r) => {
                let {
                    className: t,
                    inset: n,
                    ...i
                } = e;
                return (0, s.jsx)(a.JU, {
                    ref: r,
                    className: (0, l.cn)("px-2 py-1.5 text-sm font-semibold", n && "pl-8", t),
                    ...i
                })
            }).displayName = a.JU.displayName;
            let f = n.forwardRef((e, r) => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, s.jsx)(a.wv, {
                    ref: r,
                    className: (0, l.cn)("-mx-1 my-1 h-px bg-muted", t),
                    ...n
                })
            });
            f.displayName = a.wv.displayName
        },
        9955: (e, r, t) => {
            t.d(r, {
                p: () => i
            });
            var s = t(95155),
                n = t(12115),
                a = t(29602);
            let i = n.forwardRef((e, r) => {
                let {
                    className: t,
                    type: n,
                    ...i
                } = e;
                return (0, s.jsx)("input", {
                    type: n,
                    className: (0, a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
                    ref: r,
                    ...i
                })
            });
            i.displayName = "Input"
        },
        3392: (e, r, t) => {
            t.d(r, {
                F: () => m
            });
            var s = t(95155),
                n = t(12115),
                a = t(18052),
                i = t(29602);
            let m = n.forwardRef((e, r) => {
                let {
                    className: t,
                    children: n,
                    ...m
                } = e;
                return (0, s.jsxs)(a.bL, {
                    ref: r,
                    className: (0, i.cn)("relative overflow-hidden", t),
                    ...m,
                    children: [(0, s.jsx)(a.LM, {
                        className: "h-full w-full rounded-[inherit]",
                        children: n
                    }), (0, s.jsx)(l, {}), (0, s.jsx)(a.OK, {})]
                })
            });
            m.displayName = a.bL.displayName;
            let l = n.forwardRef((e, r) => {
                let {
                    className: t,
                    orientation: n = "vertical",
                    ...m
                } = e;
                return (0, s.jsx)(a.VM, {
                    ref: r,
                    orientation: n,
                    className: (0, i.cn)("flex touch-none select-none transition-colors", "vertical" === n && "h-full w-2.5 border-l border-l-transparent p-[1px]", "horizontal" === n && "h-2.5 flex-col border-t border-t-transparent p-[1px]", t),
                    ...m,
                    children: (0, s.jsx)(a.lr, {
                        className: "relative flex-1 rounded-full bg-border"
                    })
                })
            });
            l.displayName = a.VM.displayName
        },
        72581: (e, r, t) => {
            t.d(r, {
                d: () => m
            });
            var s = t(95155),
                n = t(12115),
                a = t(82920),
                i = t(29602);
            let m = n.forwardRef((e, r) => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, s.jsx)(a.bL, {
                    className: (0, i.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-700 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700", t),
                    ...n,
                    ref: r,
                    children: (0, s.jsx)(a.zi, {
                        className: (0, i.cn)("pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-all data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 data-[state=checked]:scale-105")
                    })
                })
            });
            m.displayName = a.bL.displayName
        },
        20669: (e, r, t) => {
            t.d(r, {
                E: () => m,
                v: () => i
            });
            var s = t(95155),
                n = t(12115);
            let a = (0, n.createContext)(null);

            function i(e) {
                let {
                    children: r,
                    site: t,
                    searchInput: n,
                    onSearchChange: i
                } = e;
                return (0, s.jsx)(a.Provider, {
                    value: {
                        site: t,
                        searchInput: n,
                        onSearchChange: i
                    },
                    children: r
                })
            }

            function m() {
                let e = (0, n.useContext)(a);
                if (!e) throw Error("useBooruContext must be used within a BooruProvider");
                return e
            }
        },
        8898: (e, r, t) => {
            function s(e, r) {
                let t = null;
                return function() {
                    for (var s = arguments.length, n = Array(s), a = 0; a < s; a++) n[a] = arguments[a];
                    t && clearTimeout(t), t = setTimeout(() => {
                        t = null, e(...n)
                    }, r)
                }
            }

            function n(e) {
                if (!(null == e ? void 0 : e.length)) return;
                let r = e.find(e => e.width >= 640) || e[e.length - 1];
                return r ? {
                    url: r.url.replace(/&amp;/g, "&"),
                    width: r.width,
                    height: r.height
                } : void 0
            }
            t.d(r, {
                p: () => n,
                s: () => s
            })
        },
        95795: (e, r, t) => {
            t.d(r, {
                C7: () => i,
                gA: () => m
            });
            var s = t(99827);
            let n = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return Array.from(new Set(["ai", "3d", "interactive", "gaming", "anime", ...e.map(e => e.toLowerCase().replace(/\s+/g, "_")).filter(e => e.length > 2 && !e.includes("original") && "oc" !== e)])).slice(0, 25)
            };
            async function a() {
                if (await new Promise(e => {
                        let r = document.createElement("div");
                        r.className = "ad-banner ads adsbygoogle", r.style.cssText = "width:1px;height:1px;position:absolute;left:-9999px;top:-9999px;", document.body.appendChild(r), requestAnimationFrame(() => {
                            setTimeout(() => {
                                let t = 0 === r.offsetHeight || null === r.offsetParent || "none" === window.getComputedStyle(r).display || "hidden" === window.getComputedStyle(r).visibility;
                                document.body.removeChild(r), e(t)
                            }, 100)
                        })
                    })) return !0;
                try {
                    return await fetch("https://cdn.tapioni.com/adgpt.js", {
                        method: "HEAD",
                        mode: "no-cors",
                        cache: "no-store"
                    }), !1
                } catch (e) {
                    return !0
                }
            }
            let i = (0, s.v)(e => ({
                hasAdblock: !1,
                ready: !1,
                keywords: ["rule34", "hentai", "3d"],
                initialize: async r => {
                    if (r) {
                        e({
                            ready: !0
                        });
                        return
                    }
                    e({
                        hasAdblock: await a(),
                        ready: !0
                    })
                },
                setKeywords: r => e({
                    keywords: n(r)
                })
            }));

            function m() {
                let e = i(e => e.ready),
                    r = i(e => e.hasAdblock),
                    t = i(e => e.setKeywords);
                return {
                    shouldShowAds: e && !0,
                    hasAdblock: r,
                    keywords: i(e => e.keywords),
                    setKeywords: t
                }
            }
        },
        58802: (e, r, t) => {
            t.d(r, {
                n: () => i
            });
            var s = t(12115),
                n = t(90936),
                a = t(29288);

            function i(e, r) {
                let {
                    disableGestures: t
                } = (0, a.t0)(), {
                    onClose: i,
                    onOpen: m,
                    isOpen: l,
                    threshold: o = 100,
                    velocityThreshold: c = .5,
                    direction: d = "right",
                    checkGestureLock: u,
                    id: b = d
                } = r, h = (0, s.useRef)(0), g = (0, s.useRef)(0), p = (0, s.useRef)(0), f = (0, s.useRef)(!1), [k, x] = (0, s.useState)(0), [v, y] = (0, s.useState)(0), [w, j] = (0, s.useState)(!1), [N, C] = (0, s.useState)(!1);
                return (0, s.useEffect)(() => {
                    if (!l) return;
                    let r = e.current;
                    if (!r) return;
                    let t = !1,
                        s = !1,
                        a = e => {
                            let r = e.target;
                            r.closest('[draggable="true"]') || r.closest("[data-draggable]") || r.hasAttribute("draggable") || r.closest(".draggable-item") || (h.current = e.touches[0].clientX, g.current = e.touches[0].clientY, p.current = Date.now(), f.current = !1, t = !1, s = !1, j(!1), C(!1))
                        },
                        m = e => {
                            let r = e.target;
                            if (r.closest('[draggable="true"]') || r.closest("[data-draggable]") || r.closest(".draggable-item") || u && u()) return;
                            let a = e.touches[0].clientX - h.current,
                                i = e.touches[0].clientY - g.current,
                                m = Math.abs(a),
                                l = Math.abs(i);
                            !t && (m > 10 || l > 10) && (t = !0, l > 1.5 * m ? s = !0 : m > l && ("right" === d && a > 0 ? f.current = !0 : "left" === d && a < 0 && (f.current = !0))), !s && f.current && ("right" === d ? a > 0 : a < 0) && (e.preventDefault(), x(Math.abs(a)), n.U.setDragging(!0, b))
                        },
                        k = e => {
                            let r = e.target;
                            if (r.closest('[draggable="true"]') || r.closest("[data-draggable]") || r.closest(".draggable-item")) return;
                            if (!f.current) {
                                x(0), n.U.setDragging(!1);
                                return
                            }
                            let t = e.changedTouches[0].clientX,
                                s = Date.now(),
                                a = "right" === d ? t - h.current : h.current - t,
                                m = s - p.current;
                            a > o || a / m > c ? (j(!0), i()) : x(0), f.current = !1, n.U.setDragging(!1)
                        };
                    return r.addEventListener("touchstart", a, {
                        passive: !0
                    }), r.addEventListener("touchmove", m, {
                        passive: !1
                    }), r.addEventListener("touchend", k, {
                        passive: !0
                    }), () => {
                        r.removeEventListener("touchstart", a), r.removeEventListener("touchmove", m), r.removeEventListener("touchend", k)
                    }
                }, [l, i, o, c, d]), (0, s.useEffect)(() => {
                    if (l || t) return;
                    let e = 0,
                        r = 0,
                        s = 0,
                        a = 0,
                        i = 0,
                        h = !1,
                        g = "undecided",
                        p = !1,
                        f = window.innerWidth < 640 ? window.innerWidth : 384,
                        k = t => {
                            let n = t.target;
                            if (n.closest('[draggable="true"]') || n.closest("[data-draggable]") || n.closest(".draggable-item")) return;
                            e = t.touches[0].clientX, r = t.touches[0].clientY, a = e, i = r, s = Date.now();
                            let m = window.innerWidth;
                            p = "right" === d ? e > m - 40 : e < 40, h = !1, g = "undecided", j(!1), C(!1)
                        },
                        v = t => {
                            let s = t.target;
                            if (s.closest('[draggable="true"]') || s.closest("[data-draggable]") || s.closest(".draggable-item") || u && u() || n.U.isLocked() || n.U.isAnySidebarOpen() || n.U.isSidebarDisabled(b)) return;
                            a = t.touches[0].clientX, i = t.touches[0].clientY;
                            let m = a - e,
                                l = Math.abs(m),
                                o = Math.abs(i - r);
                            if (!(l < 5) || !(o < 5)) {
                                if ("undecided" === g && (l > 15 || o > 15) && (l > 1.5 * o ? ("right" === d ? m < 0 : m > 0) ? (g = "horizontal", h = !0, n.U.setDragging(!0, b)) : g = "invalid" : o > 1.5 * l ? g = "vertical" : (l > 30 || o > 30) && (g = "invalid")), "horizontal" === g && h) {
                                    t.preventDefault();
                                    let e = Math.abs(m);
                                    p && (e *= 1.2);
                                    let r = Math.min(e, f),
                                        s = r / f * 100;
                                    x(r), y(s)
                                } else if ("vertical" === g) return
                            }
                        },
                        w = r => {
                            if (!h) {
                                x(0), y(0), n.U.setDragging(!1), g = "undecided", p = !1;
                                return
                            }
                            let t = r.changedTouches[0].clientX,
                                a = Date.now(),
                                i = "right" === d ? e - t : t - e,
                                l = a - s;
                            Math.abs(i) > (p ? .8 * o : o) || i / l > c ? (j(!0), n.U.openSidebar(b) ? m() : C(!0)) : C(!0), h = !1, g = "undecided", p = !1, n.U.setDragging(!1)
                        };
                    return document.addEventListener("touchstart", k, {
                        passive: !0
                    }), document.addEventListener("touchmove", v, {
                        passive: !1
                    }), document.addEventListener("touchend", w, {
                        passive: !0
                    }), () => {
                        document.removeEventListener("touchstart", k), document.removeEventListener("touchmove", v), document.removeEventListener("touchend", w)
                    }
                }, [l, m, o, c, d, b]), (0, s.useEffect)(() => (l ? n.U.openSidebar(b) : n.U.closeSidebar(b), () => {
                    l && n.U.closeSidebar(b)
                }), [l, b]), (0, s.useEffect)(() => {
                    l && (x(0), y(0), j(!1), C(!1))
                }, [l]), (0, s.useEffect)(() => {
                    if (N) {
                        let e = setTimeout(() => {
                            x(0), y(0), C(!1)
                        }, 200);
                        return () => clearTimeout(e)
                    }
                }, [N]), {
                    dragOffset: k,
                    dragPercentage: v,
                    isAnimating: w,
                    isSnappingBack: N
                }
            }
        },
        90936: (e, r, t) => {
            t.d(r, {
                U: () => n
            });
            class s {
                static getInstance() {
                    return s.instance || (s.instance = new s), s.instance
                }
                disableSidebar(e) {
                    e && this.disabledSidebars.add(e)
                }
                enableSidebar(e) {
                    e && this.disabledSidebars.delete(e)
                }
                isSidebarDisabled(e) {
                    return !!e && this.disabledSidebars.has(e)
                }
                setDragging(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this.isDragging = e, this.draggingSidebar = e ? r : null
                }
                isAnyDragging() {
                    return this.isDragging
                }
                isSidebarDragging(e) {
                    return this.isDragging && this.draggingSidebar === e
                }
                isActive() {
                    return null !== this.currentOpenSidebar || this.isDragging
                }
                lock(e) {
                    this.lockReasons.add(e), this.locked = this.lockReasons.size > 0
                }
                unlock(e) {
                    this.lockReasons.delete(e), this.locked = this.lockReasons.size > 0
                }
                isLocked() {
                    return this.locked
                }
                unlockAll() {
                    this.lockReasons.clear(), this.locked = !1
                }
                isAnySidebarOpen() {
                    return null !== this.currentOpenSidebar
                }
                isSidebarOpen(e) {
                    return this.currentOpenSidebar === e
                }
                getOpenSidebar() {
                    return this.currentOpenSidebar
                }
                openSidebar(e) {
                    return !(this.locked || this.isSidebarDisabled(e)) && (null === this.currentOpenSidebar || this.currentOpenSidebar === e) && (this.currentOpenSidebar = e, this.notifyListeners(), !0)
                }
                closeSidebar(e) {
                    this.currentOpenSidebar === e && (this.currentOpenSidebar = null, this.notifyListeners())
                }
                closeAll() {
                    this.currentOpenSidebar = null, this.notifyListeners()
                }
                subscribe(e) {
                    return this.listeners.add(e), () => {
                        this.listeners.delete(e)
                    }
                }
                notifyListeners() {
                    this.listeners.forEach(e => e(this.currentOpenSidebar))
                }
                constructor() {
                    this.currentOpenSidebar = null, this.listeners = new Set, this.locked = !1, this.lockReasons = new Set, this.isDragging = !1, this.draggingSidebar = null, this.disabledSidebars = new Set
                }
            }
            let n = s.getInstance()
        },
        97709: (e, r, t) => {
            t.d(r, {
                I: () => a
            });
            var s = t(99827),
                n = t(60709);
            let a = (0, s.v)()((0, n.Zr)((e, r) => ({
                favorites: [],
                toggleFavorite: r => e(e => {
                    let t = r.query.replace(/id:\<=\S*/, "").replace(/id:\>=\S*/, "").trim();
                    return e.favorites.some(e => e.site === r.site && e.query === t) ? {
                        favorites: e.favorites.filter(e => !(e.site === r.site && e.query === t))
                    } : {
                        favorites: [{ ...r,
                            query: t,
                            timestamp: Date.now()
                        }, ...e.favorites].slice(0, 50)
                    }
                }),
                isFavorite: (e, t) => {
                    if (!t) return !1;
                    let s = t.replace(/id:\<=\S*/, "").replace(/id:\>=\S*/, "").trim();
                    return r().favorites.some(r => r.site === e && r.query === s)
                },
                clearFavorites: () => e({
                    favorites: []
                })
            }), {
                name: "favorites-store"
            }))
        },
        58810: (e, r, t) => {
            t.d(r, {
                F: () => a
            });
            var s = t(99827),
                n = t(60709);
            let a = (0, s.v)()((0, n.Zr)((e, r) => ({
                entries: [],
                addEntry: r => e(e => {
                    let t = r.query.replace(/id:\<=\S*/, "").replace(/id:\>=\S*/, "").trim();
                    return {
                        entries: [{ ...r,
                            query: t,
                            timestamp: Date.now()
                        }, ...e.entries.filter(e => !(e.site === r.site && e.query === t))].slice(0, 35)
                    }
                }),
                getLastPage: (e, t) => {
                    let s = r().entries.find(r => r.site === e && r.query === t);
                    return (null == s ? void 0 : s.lastPage) || 0
                },
                clearHistory: () => e({
                    entries: []
                })
            }), {
                name: "browsing-history"
            }))
        },
        27863: (e, r, t) => {
            t.d(r, {
                A: () => o
            });
            var s = t(99827),
                n = t(10733),
                a = t(29602);
            let i = "saved-posts",
                m = null,
                l = () => (m || (m = (0, n.P2)("saved-posts-db", 3, {
                    upgrade(e, r, t, s) {
                        if (console.log("Upgrading DB from version ".concat(r, " to ").concat(t)), e.objectStoreNames.contains(i)) {
                            let e = s.objectStore(i);
                            e.indexNames.contains("site") || e.createIndex("site", "site", {
                                unique: !1
                            }), e.indexNames.contains("originalId") || e.createIndex("originalId", "originalId", {
                                unique: !1
                            }), e.indexNames.contains("savedAt") || e.createIndex("savedAt", "savedAt", {
                                unique: !1
                            })
                        } else {
                            console.log("Creating object store: ".concat(i));
                            let r = e.createObjectStore(i, {
                                keyPath: "id"
                            });
                            r.createIndex("site", "site", {
                                unique: !1
                            }), r.createIndex("originalId", "originalId", {
                                unique: !1
                            }), r.createIndex("savedAt", "savedAt", {
                                unique: !1
                            })
                        }
                        console.log("DB upgrade complete")
                    },
                    blocked() {
                        console.error("IndexedDB blocked. Please close other tabs using this database.")
                    },
                    blocking() {
                        console.warn("IndexedDB blocking. Database version change pending.")
                    },
                    terminated() {
                        console.error("IndexedDB connection terminated unexpectedly."), m = null
                    }
                })), m),
                o = (0, s.v)((e, r) => ({
                    savedIds: new Set,
                    isLoading: !0,
                    isInitialized: !1,
                    initializationPromise: null,
                    ensureInitialized: async () => r().isInitialized ? Promise.resolve() : r().initializationPromise ? r().initializationPromise : (console.log("ensureInitialized: Triggering initialization..."), r().initialize()),
                    initialize: async () => {
                        if (r().initializationPromise) return r().initializationPromise;
                        if (r().isInitialized) return Promise.resolve();
                        let t = (async () => {
                            console.log("Initialization started..."), e({
                                isLoading: !0
                            });
                            try {
                                let r = await l(),
                                    t = await r.getAllKeys(i),
                                    s = new Set(t);
                                console.log("Initialization complete. Loaded ".concat(s.size, " saved post IDs.")), e({
                                    savedIds: s,
                                    isLoading: !1,
                                    isInitialized: !0,
                                    initializationPromise: null
                                })
                            } catch (r) {
                                throw console.error("Failed to initialize saved posts:", r), e({
                                    isLoading: !1,
                                    isInitialized: !0,
                                    initializationPromise: null,
                                    savedIds: new Set
                                }), r
                            }
                        })();
                        return e({
                            initializationPromise: t
                        }), t
                    },
                    save: async (t, s) => {
                        await r().ensureInitialized();
                        let n = (0, a.Lf)(s, t.id);
                        if (r().savedIds.has(n)) return;
                        let m = {
                                id: n,
                                originalId: t.id,
                                site: s,
                                savedAt: new Date,
                                post: { ...t,
                                    site: s
                                }
                            },
                            o = { ...m,
                                savedAt: m.savedAt.getTime()
                            };
                        try {
                            let r = await l();
                            await r.put(i, o), e(e => ({
                                savedIds: new Set(e.savedIds).add(n)
                            }))
                        } catch (e) {
                            console.error("Error saving post:", e)
                        }
                    },
                    unsave: async (t, s) => {
                        await r().ensureInitialized();
                        let n = (0, a.Lf)(s, t);
                        if (r().savedIds.has(n)) try {
                            let r = await l();
                            await r.delete(i, n), e(e => {
                                let r = new Set(e.savedIds);
                                return r.delete(n), {
                                    savedIds: r
                                }
                            })
                        } catch (e) {
                            console.error("Error unsaving post:", e)
                        }
                    },
                    isSaved: (e, t) => {
                        let s = (0, a.Lf)(t, e),
                            n = r().savedIds.has(s);
                        return r().isInitialized || r().isLoading ? !r().isLoading && n : (console.warn("isSaved called before store initialization completed. Initializing..."), r().initialize().catch(e => console.error("Background initialization failed:", e)), !1)
                    },
                    loadPosts: async (e, t, s) => {
                        await r().ensureInitialized();
                        try {
                            let r = (await l()).transaction(i, "readonly"),
                                n = r.objectStore(i),
                                m = s ? n.index("site") : n.index("savedAt"),
                                o = s ? IDBKeyRange.only(s) : void 0,
                                c = await m.openCursor(o, "prev"),
                                d = [],
                                u = (e - 1) * t,
                                b = 0;
                            for (u > 0 && c && await c.advance(u); c && b < t;) {
                                let e = { ...c.value,
                                    savedAt: new Date(c.value.savedAt)
                                };
                                d.push(e), b++, c = await c.continue()
                            }
                            if (await r.done, !d.length) return {};
                            return d = d.map(e => {
                                if (!d) return;
                                let r = null == e ? void 0 : e.post;
                                if (r) return "gelbooru.com" === r.site && ("video" === r.type || "gif" == r.type) && (e.post.processedContent.file_url = (0, a.l)(r.file_url), e.post.processedContent.display_url = (0, a.l)(r.display_url)), e
                            })
                        } catch (e) {
                            return console.error("Error loading posts:", e), []
                        }
                    },
                    getPostById: async (e, t) => {
                        await r().ensureInitialized();
                        let s = (0, a.Lf)(t, e);
                        if (r().savedIds.has(s)) try {
                            let e = await l(),
                                r = await e.get(i, s);
                            if (r) return { ...r,
                                savedAt: new Date(r.savedAt)
                            };
                            return
                        } catch (e) {
                            console.error("Error fetching post ".concat(s, ":"), e);
                            return
                        }
                    }
                }));
            o.getState().isInitialized || o.getState().initializationPromise || (console.log("Queueing initial store initialization..."), setTimeout(() => {
                o.getState().initialize().then(() => console.log("Initial background initialization successful.")).catch(e => console.error("Failed to initialize database on initial load:", e))
            }, 0))
        },
        29288: (e, r, t) => {
            t.d(r, {
                dp: () => c,
                k2: () => o,
                t0: () => l
            });
            var s = t(99827),
                n = t(60709);
            let a = (0, t(29602).Fr)(),
                i = {
                    columnCount: "Automatic",
                    tileStyle: a ? "no text" : "compact",
                    playMode: a ? "click" : "hover",
                    audio: !0,
                    audioVolume: 1,
                    autoscrollEnabled: !1,
                    useBrowserFullscreen: !1
                },
                m = {
                    showImages: !0,
                    showVideos: !0,
                    showAlbums: !0
                },
                l = (0, s.v)()((0, n.Zr)((e, r) => ({
                    currentQuery: "",
                    filterSettings: {},
                    expandedCategories: [],
                    autoscrollSpeedModifier: .5,
                    disableGestures: !1,
                    setDisableGestures: r => e({
                        disableGestures: r
                    }),
                    setAutoscrollSpeedModifier: r => e({
                        autoscrollSpeedModifier: r
                    }),
                    setExpandedCategories: r => e({
                        expandedCategories: r
                    }),
                    setCurrentQuery: r => e({
                        currentQuery: r
                    }),
                    getCurrentFilter: () => {
                        let {
                            currentQuery: e,
                            filterSettings: t
                        } = r();
                        return "" === e ? { ...m,
                            showImages: !1,
                            showVideos: !0,
                            showAlbums: !1,
                            ...t[e]
                        } : { ...m,
                            ...t[e]
                        }
                    },
                    updateCurrentFilter: r => e(e => ({
                        filterSettings: { ...e.filterSettings,
                            [e.currentQuery]: { ...m,
                                ...e.filterSettings[e.currentQuery],
                                ...r
                            }
                        }
                    })),
                    ...i,
                    showImages: !0,
                    showVideos: !0,
                    showAlbums: !0,
                    hasConfirmedAge: !1,
                    invertFullscreenButtons: !1,
                    useHighestQualityImages: !1,
                    useLowQualityGallery: !1,
                    setInvertFullscreenButtons: r => e({
                        invertFullscreenButtons: r
                    }),
                    setColumnCount: r => e({
                        columnCount: r
                    }),
                    setTileStyle: r => e({
                        tileStyle: r
                    }),
                    setPlayMode: r => e({
                        playMode: r
                    }),
                    setAudio: r => e({
                        audio: r
                    }),
                    setAudioVolume: r => e({
                        audioVolume: r
                    }),
                    setAutoscrollEnabled: r => e({
                        autoscrollEnabled: r
                    }),
                    setUseBrowserFullscreen: r => e({
                        useBrowserFullscreen: r
                    }),
                    setShowImages: r => e({
                        showImages: r
                    }),
                    setShowVideos: r => e({
                        showVideos: r
                    }),
                    setShowVideosWithSound: r => e({
                        showVideosWithSound: r
                    }),
                    setShowAlbums: r => e({
                        showAlbums: r
                    }),
                    setHasConfirmedAge: r => e({
                        hasConfirmedAge: r
                    }),
                    setUseHighestQualityImages: r => e({
                        useHighestQualityImages: r
                    }),
                    setUseLowQualityGallery: r => e({
                        useLowQualityGallery: r
                    }),
                    siteSearchDefaults: {},
                    setSiteSearchDefault: (r, t) => e(e => ({
                        siteSearchDefaults: { ...e.siteSearchDefaults,
                            [r]: { ...e.siteSearchDefaults[r],
                                ...t
                            }
                        }
                    })),
                    resetSiteSearchDefault: r => e(e => {
                        let t = { ...e.siteSearchDefaults
                        };
                        return delete t[r], {
                            siteSearchDefaults: t
                        }
                    })
                }), {
                    name: "settings"
                })),
                o = (0, s.v)()((0, n.Zr)((e, r) => ({
                    collections: {
                        "rule34.xxx": [{
                            name: "Ntr",
                            tags: " ( netorare  ~  netorase  ~  cheating  ~  cheating_wife  ~  cheating_girlfriend ) ",
                            id: "collection-1742833948720",
                            count: -1
                        }, {
                            name: "High Heels",
                            tags: " ( feet  ~  footjob )  high_heels",
                            id: "collection-1742835319632",
                            count: 0
                        }, {
                            name: "Cowgirl",
                            tags: " ( cowgirl_outfit  ~  cow_print ) ",
                            id: "collection-1742819277921",
                            count: 0
                        }, {
                            name: "Fit tomboy",
                            tags: "tomboy abs",
                            id: "collection-1742834105492",
                            count: 0
                        }, {
                            name: "Dogggy Pov",
                            tags: " ( doggy_style  ~  doggystyle )  pov",
                            id: "collection-1742834184174",
                            count: 0
                        }, {
                            name: "Video with sound",
                            tags: "video sound",
                            id: "collection-1742834275122",
                            count: 2
                        }, {
                            name: "Vertical video",
                            tags: " ( vertical_video  ~  3:4  ~  9:16  ~  4:5  ~  8:11  ~  5:6 )",
                            id: "collection-1742834275120980",
                            count: 3
                        }, {
                            name: "Monster Girl",
                            tags: "monster_girl  ( fellatio  ~  paizuri  ~  blowjob ) ",
                            id: "collection-1742835478110",
                            count: 0
                        }],
                        "gelbooru.com": [],
                        "rule34.paheal.net": [],
                        "yande.re": [],
                        "konachan.com": [],
                        "danbooru.donmai.us": [],
                        "hypnohub.net": [],
                        "safebooru.org": [],
                        "xbooru.com": [],
                        "e621.net": [],
                        "e926.net": [],
                        "bleachbooru.org": [],
                        "tbib.org": [],
                        "realbooru.com": []
                    },
                    addCollection: (r, t) => e(e => ({
                        collections: { ...e.collections,
                            [r]: [...e.collections[r], { ...t,
                                id: "collection-".concat(Date.now()),
                                count: 0
                            }]
                        }
                    })),
                    removeCollection: (r, t) => e(e => ({
                        collections: { ...e.collections,
                            [r]: e.collections[r].filter(e => e.id !== t)
                        }
                    })),
                    incrementCollectionCount: (r, t) => e(e => ({
                        collections: { ...e.collections,
                            [r]: e.collections[r].map(e => e.id === t ? { ...e,
                                count: e.count + 1
                            } : e)
                        }
                    })),
                    getCollections: e => r().collections[e] || []
                }), {
                    name: "tag-collections"
                })),
                c = (0, s.v)(e => ({
                    selectedPost: null,
                    setSelectedPost: r => e({
                        selectedPost: r
                    })
                }))
        }
    }
]);