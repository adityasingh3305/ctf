"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [926], {
        61838: (e, t, i) => {
            i.d(t, {
                K: () => eo
            });
            var r = i(95155),
                a = i(12115),
                s = i(86710),
                l = i(20853),
                o = i(51719),
                n = i(42640),
                c = i(98144),
                d = i(20750),
                u = i(14085),
                h = i(5413),
                x = i(25683),
                g = i(46647),
                m = i(187),
                p = i(3392),
                v = i(26960),
                b = i(72581),
                f = i(7410);
            let w = e => {
                let {
                    value: t,
                    onChange: i,
                    placeholder: a = "Enter tags separated by commas…",
                    isActive: s = !0,
                    height: l = "52vh"
                } = e;
                return (0, r.jsx)("textarea", {
                    value: t,
                    onChange: e => i(e.target.value),
                    disabled: !s,
                    spellCheck: !1,
                    placeholder: a,
                    className: "\n        w-full p-4 rounded-xl border font-mono text-sm leading-relaxed tracking-wide \n        resize-none transition-all duration-200 outline-none\n        ".concat(s ? "bg-white/[0.04] border-white/[0.06] text-white focus:ring-1 focus:ring-white/30 focus:border-white/30" : "bg-white/[0.02] border-white/[0.03] text-white/40 cursor-not-allowed placeholder-white/10", "\n      "),
                    style: {
                        height: l
                    }
                })
            };

            function y(e) {
                let {
                    isOpen: t,
                    onClose: i,
                    site: s
                } = e, {
                    blacklists: l,
                    updateBlacklist: o,
                    isActive: n,
                    toggleBlacklist: d,
                    isAiFilterActive: u,
                    toggleAiFilter: h
                } = (0, m.a)(), [y, j] = (0, a.useState)({}), [N, k] = (0, a.useState)(s);
                (0, a.useEffect)(() => {
                    t && j(Object.entries(l).reduce((e, t) => {
                        let [i, r] = t;
                        return { ...e,
                            [i]: Array.isArray(r) ? r.join(", ") : ""
                        }
                    }, {}))
                }, [t, l]), (0, a.useEffect)(() => {
                    k(s)
                }, [s]), (0, a.useEffect)(() => (document.body.style.overflow = t ? "hidden" : "", () => {
                    document.body.style.overflow = ""
                }), [t]);
                let _ = (e, t) => {
                    j(i => ({ ...i,
                        [e]: t
                    }))
                };
                return (0, a.useRef)(null), (0, r.jsx)(x.N, {
                    children: t && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(g.P.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
                            onClick: i,
                            "aria-hidden": "true"
                        }), (0, r.jsxs)(g.P.div, {
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
                                damping: 25,
                                stiffness: 200
                            },
                            className: "fixed inset-x-0 bottom-0 z-50 w-full max-w-3xl mx-auto max-h-[90vh] rounded-t-2xl bg-gray-950 text-white shadow-2xl border-t border-white/5",
                            "aria-modal": "true",
                            role: "dialog",
                            onClick: e => e.stopPropagation(),
                            "aria-label": "Blacklist Panel",
                            children: [(0, r.jsx)("div", {
                                className: "px-5 py-4 border-b border-white/5",
                                children: (0, r.jsx)("h2", {
                                    className: "text-base font-semibold tracking-wide text-white",
                                    children: "Filters"
                                })
                            }), (0, r.jsx)(p.F, {
                                className: "h-[calc(90vh-8rem)]",
                                children: (0, r.jsxs)("div", {
                                    className: "p-5 space-y-5",
                                    children: [(0, r.jsxs)("div", {
                                        className: "rounded-xl bg-white/[0.04] border border-white/[0.06] divide-y divide-white/[0.06]",
                                        children: [(0, r.jsxs)("div", {
                                            className: "flex items-center justify-between px-4 py-3 cursor-pointer select-none hover:bg-white/[0.03] rounded-t-xl transition-colors",
                                            onClick: d,
                                            children: [(0, r.jsxs)("div", {
                                                className: "flex items-center gap-3",
                                                children: [(0, r.jsx)("div", {
                                                    className: "p-1.5 rounded-lg bg-white/5",
                                                    children: (0, r.jsx)(c.A, {
                                                        className: "h-4 w-4 text-white/70"
                                                    })
                                                }), (0, r.jsxs)("div", {
                                                    children: [(0, r.jsx)("p", {
                                                        className: "text-sm font-medium text-white",
                                                        children: "Tag Blacklist"
                                                    }), (0, r.jsx)("p", {
                                                        className: "text-xs text-white/60",
                                                        children: "Hide posts with blocked tags"
                                                    })]
                                                })]
                                            }), (0, r.jsx)(b.d, {
                                                checked: n,
                                                onCheckedChange: d,
                                                onClick: e => e.stopPropagation()
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex items-center justify-between px-4 py-3 rounded-b-xl transition-all duration-200 ".concat(n ? "cursor-pointer hover:bg-white/[0.03]" : "opacity-35 pointer-events-none"),
                                            onClick: n ? h : void 0,
                                            children: [(0, r.jsxs)("div", {
                                                className: "flex items-center gap-3",
                                                children: [(0, r.jsx)("div", {
                                                    className: "p-1.5 rounded-lg bg-white/5",
                                                    children: (0, r.jsx)(f.A, {
                                                        className: "h-4 w-4 text-white/70"
                                                    })
                                                }), (0, r.jsxs)("div", {
                                                    children: [(0, r.jsx)("p", {
                                                        className: "text-sm font-medium text-white",
                                                        children: "Filter AI Art"
                                                    }), (0, r.jsx)("p", {
                                                        className: "text-xs text-white/60",
                                                        children: "Excludes ai_generated, ai_assisted"
                                                    })]
                                                })]
                                            }), (0, r.jsx)(b.d, {
                                                checked: u,
                                                onCheckedChange: h,
                                                onClick: e => e.stopPropagation()
                                            })]
                                        })]
                                    }), v.L.filter(e => e.label === N).map(e => {
                                        let {
                                            label: t
                                        } = e;
                                        return (0, r.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [(0, r.jsxs)("label", {
                                                className: "block text-xs font-medium text-white uppercase tracking-widest",
                                                children: ["Blocked tags — ", t]
                                            }), (0, r.jsx)(w, {
                                                value: y[N] || "",
                                                onChange: e => _(N, e),
                                                isActive: n,
                                                height: "52vh"
                                            })]
                                        }, t)
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                className: "flex gap-3 px-5 py-4 border-t border-white/5",
                                children: [(0, r.jsx)("button", {
                                    onClick: i,
                                    className: "flex-1 py-2.5 rounded-xl text-sm font-medium text-white/60 border border-white/10 hover:border-white/30 hover:text-white/70 transition-all duration-150",
                                    children: "Dismiss"
                                }), (0, r.jsx)("button", {
                                    onClick: () => {
                                        Object.entries(y).forEach(e => {
                                            let [t, i] = e;
                                            o(t, i.split(/[,\s]+/).map(e => e.trim()).filter(Boolean))
                                        }), i()
                                    },
                                    className: "flex-1 py-2.5 rounded-xl text-sm font-medium text-white bg-white/10 hover:bg-white/15 transition-all duration-150",
                                    children: "Save"
                                })]
                            })]
                        })]
                    })
                })
            }
            var j = i(21971),
                N = i(92241),
                k = i(45471),
                _ = i(20591),
                C = i(40767),
                z = i(1466),
                S = i(42594),
                A = i(56119),
                R = i(48617),
                E = i(25666),
                O = i(33565),
                D = i(79928),
                F = i(19993),
                P = i(26785),
                T = i(74027),
                I = i(9955),
                $ = i(97709),
                q = i(33473),
                L = i(29288),
                B = i(65498);

            function M(e) {
                let {
                    isOpen: t,
                    onClose: i,
                    currentTags: s,
                    onAddToSearch: l,
                    site: o
                } = e, {
                    collections: n,
                    addCollection: c,
                    removeCollection: d,
                    incrementCollectionCount: h,
                    getCollections: m
                } = (0, L.k2)(), [p, v] = (0, a.useState)(""), [b, f] = (0, a.useState)(!1), [w, y] = (0, a.useState)(o);
                a.useEffect(() => (t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
                    document.body.style.overflow = ""
                }), [t]), a.useEffect(() => {
                    y(o)
                }, [o]);
                let j = e => {
                        l(e.tags), h(w, e.id), i()
                    },
                    N = m(w);
                return (0, r.jsxs)(B.A, {
                    isOpen: t,
                    onClose: i,
                    title: "Tag Collections",
                    children: [(0, r.jsxs)("div", {
                        className: "p-4 space-y-2",
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center justify-between py-3 px-4 border-b border-gray-800 last:border-0 cursor-pointer hover:bg-gray-800 transition-colors",
                            onClick: () => f(!0),
                            children: [(0, r.jsx)("div", {
                                className: "flex-1",
                                children: (0, r.jsx)("div", {
                                    className: "font-medium",
                                    children: "Create from current"
                                })
                            }), (0, r.jsx)("div", {
                                className: "flex items-center gap-2",
                                children: (0, r.jsx)(u.$, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: () => f(!0),
                                    className: "text-blue-400 hover:bg-gray-700 hover:text-blue-300 [&_svg]:size-5",
                                    children: (0, r.jsx)(q.A, {})
                                })
                            })]
                        }, "create-collection"), 0 === N.length ? (0, r.jsx)("div", {
                            className: "text-center text-gray-500 py-8",
                            children: "No collections yet. Create one from current tags."
                        }) : N.sort((e, t) => t.count - e.count).map(e => (0, r.jsxs)("div", {
                            className: "flex items-center justify-between py-3 px-4 border-b border-gray-800 last:border-0 cursor-pointer hover:bg-gray-800 transition-colors",
                            onClick: () => j(e),
                            children: [(0, r.jsxs)("div", {
                                className: "flex-1 overflow-hidden",
                                children: [(0, r.jsx)("div", {
                                    className: "font-medium",
                                    children: e.name
                                }), (0, r.jsx)("div", {
                                    className: "text-sm text-gray-400",
                                    children: e.tags
                                })]
                            }), (0, r.jsx)("div", {
                                className: "flex items-center gap-2",
                                children: (0, r.jsx)(u.$, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: t => {
                                        t.stopPropagation(), d(w, e.id)
                                    },
                                    className: "text-red-400 hover:bg-gray-700 hover:text-red-300 [&_svg]:size-5",
                                    children: (0, r.jsx)(C.A, {})
                                })
                            })]
                        }, e.id))]
                    }), (0, r.jsx)(x.N, {
                        children: b && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(g.P.div, {
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
                                onClick: () => f(!1),
                                "aria-hidden": "true"
                            }), (0, r.jsx)(g.P.div, {
                                initial: {
                                    scale: .9,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                exit: {
                                    scale: .9,
                                    opacity: 0
                                },
                                className: "fixed inset-0 z-50 flex items-center justify-center",
                                children: (0, r.jsxs)("div", {
                                    className: "w-full max-w-md p-6 bg-gray-950 rounded-lg shadow-lg",
                                    children: [(0, r.jsxs)("h2", {
                                        className: "text-xl font-semibold mb-4",
                                        children: ["Create Collection for ", w]
                                    }), (0, r.jsx)(I.p, {
                                        value: p,
                                        onChange: e => v(e.target.value),
                                        placeholder: "Collection name",
                                        className: "bg-gray-900 border-gray-700 text-white mb-4"
                                    }), (0, r.jsxs)("div", {
                                        className: "flex justify-end gap-2",
                                        children: [(0, r.jsx)(u.$, {
                                            variant: "ghost",
                                            onClick: () => f(!1),
                                            className: "text-white hover:bg-gray-800",
                                            children: "Cancel"
                                        }), (0, r.jsx)(u.$, {
                                            onClick: () => {
                                                p.trim() && s.length > 0 && (console.log("handleCreateCollection", w), c(w, {
                                                    name: p.trim(),
                                                    tags: s
                                                }), v(""), f(!1))
                                            },
                                            disabled: !p.trim() || 0 === s.length,
                                            className: "bg-blue-600 hover:bg-blue-700 text-white",
                                            children: "Create"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }

            function Q(e) {
                let {
                    open: t,
                    onClose: i
                } = e;
                return (0, a.useEffect)(() => (t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
                    document.body.style.overflow = ""
                }), [t]), (0, r.jsx)(B.A, {
                    isOpen: t,
                    onClose: i,
                    title: "Search Help",
                    children: (0, r.jsxs)("div", {
                        className: "p-4 sm:p-6 space-y-4 sm:space-y-5 text-sm leading-relaxed",
                        children: [(0, r.jsxs)("p", {
                            children: ["The search system is ", (0, r.jsx)("strong", {
                                children: "tag-based"
                            }), " — every post is tagged with things like characters, series, or attributes. Combine them to find exactly what you want."]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("h3", {
                                className: "font-semibold mb-2",
                                children: "\uD83D\uDD39 Basic Search (AND logic)"
                            }), (0, r.jsxs)("p", {
                                children: ["Typing multiple tags means ", (0, r.jsx)("strong", {
                                    children: "all of them must match"
                                }), "."]
                            }), (0, r.jsx)("pre", {
                                className: "bg-gray-800 p-2 rounded mt-2 text-xs overflow-x-auto whitespace-nowrap",
                                children: "blonde_hair blue_eyes swimsuit"
                            }), (0, r.jsxs)("p", {
                                className: "mt-2",
                                children: ["→ Finds posts that have ", (0, r.jsx)("strong", {
                                    children: "blonde hair"
                                }), ",", " ", (0, r.jsx)("strong", {
                                    children: "blue eyes"
                                }), ", and a ", (0, r.jsx)("strong", {
                                    children: "swimsuit"
                                }), " ", "together."]
                            })]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("h3", {
                                className: "font-semibold mb-2",
                                children: "\uD83D\uDD39 OR Searches (Groups)"
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)("strong", {
                                    children: "Drag"
                                }), " tags together to form a group. Groups use OR logic."]
                            }), (0, r.jsx)("pre", {
                                className: "bg-gray-800 p-2 rounded mt-2 text-xs overflow-x-auto whitespace-nowrap",
                                children: "(naruto OR uchiha_sasuke) hyuuga_hinata"
                            }), (0, r.jsxs)("p", {
                                className: "mt-2",
                                children: ["→ Finds posts with ", (0, r.jsx)("strong", {
                                    children: "Naruto or Sasuke"
                                }), ", but must also include ", (0, r.jsx)("strong", {
                                    children: "Hinata"
                                }), "."]
                            }), (0, r.jsx)("p", {
                                className: "mt-3",
                                children: "More advanced grouping:"
                            }), (0, r.jsx)("pre", {
                                className: "bg-gray-800 p-2 rounded mt-2 text-xs overflow-x-auto whitespace-nowrap",
                                children: "swimsuit (beach OR pool)"
                            }), (0, r.jsxs)("p", {
                                children: ["→ Finds posts with a ", (0, r.jsx)("strong", {
                                    children: "swimsuit"
                                }), " at either the", " ", (0, r.jsx)("strong", {
                                    children: "beach"
                                }), " or ", (0, r.jsx)("strong", {
                                    children: "pool"
                                }), "."]
                            })]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("h3", {
                                className: "font-semibold mb-2",
                                children: "\uD83D\uDD39 Excluding Tags"
                            }), (0, r.jsx)("p", {
                                children: "Clicking a tag to toggles exclusion."
                            }), (0, r.jsx)("pre", {
                                className: "bg-gray-800 p-2 rounded mt-2 text-xs overflow-x-auto whitespace-nowrap",
                                children: "hyuuga_hinata -ntr"
                            }), (0, r.jsxs)("p", {
                                children: ["→ Hinata posts, but no ", (0, r.jsx)("strong", {
                                    children: "NTR"
                                }), "."]
                            }), (0, r.jsx)("pre", {
                                className: "bg-gray-800 p-2 rounded mt-2 text-xs overflow-x-auto whitespace-nowrap",
                                children: "(uzumaki_naruto OR uchiha_sasuke) -yaoi"
                            }), (0, r.jsxs)("p", {
                                children: ["→ Naruto or Sasuke, but excludes ", (0, r.jsx)("strong", {
                                    children: "yaoi"
                                }), "."]
                            })]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("h3", {
                                className: "font-semibold mb-2",
                                children: "\uD83D\uDD39 Examples"
                            }), (0, r.jsxs)("ul", {
                                className: "list-disc pl-5 space-y-2",
                                children: [(0, r.jsxs)("li", {
                                    children: [(0, r.jsx)("code", {
                                        className: "bg-gray-800 px-1 rounded text-xs break-all",
                                        children: "tsunade big_penis -futanari"
                                    }), "→ Tsunade with big penis, excluding futanari"]
                                }), (0, r.jsxs)("li", {
                                    children: [(0, r.jsx)("code", {
                                        className: "bg-gray-800 px-1 rounded text-xs break-all",
                                        children: "(haruno_sakura OR ino_yamanaka) blowjob"
                                    }), "→ Either Sakura or Ino, but must be a blowjob scene"]
                                }), (0, r.jsxs)("li", {
                                    children: [(0, r.jsx)("code", {
                                        className: "bg-gray-800 px-1 rounded text-xs break-all",
                                        children: "anal stockings -yaoi"
                                    }), "→ Anal + stockings, but exclude yaoi"]
                                }), (0, r.jsxs)("li", {
                                    children: [(0, r.jsx)("code", {
                                        className: "bg-gray-800 px-1 rounded text-xs break-all",
                                        children: "swimsuit (beach OR pool) -loli"
                                    }), "→ Swimsuit at beach or pool, excluding loli"]
                                }), (0, r.jsxs)("li", {
                                    children: [(0, r.jsx)("code", {
                                        className: "bg-gray-800 px-1 rounded text-xs break-all",
                                        children: "(uzumaki_naruto OR uchiha_sasuke) (haruno_sakura OR hyuuga_hinata) (swimsuit OR lingerie) -yaoi"
                                    }), "→ Naruto or Sasuke, with Sakura or Hinata, wearing swimsuit or lingerie, but excludes yaoi"]
                                })]
                            })]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("h3", {
                                className: "font-semibold mb-2",
                                children: "\uD83D\uDD39 Saving Searches"
                            }), (0, r.jsxs)("p", {
                                children: ["You can ", (0, r.jsx)("strong", {
                                    children: "save searches"
                                }), " to collections and quickly reuse them later. Great for long searches like", " ", (0, r.jsx)("code", {
                                    className: "bg-gray-800 px-1 rounded text-xs break-all",
                                    children: "(haruno_sakura OR ino_yamanaka OR hyuuga_hinata OR ty_lee OR tenten OR tsunade OR shizune OR temari OR kushina_uzumaki OR konan OR kurenai_yuuhi OR female_anbu) -ntr"
                                }), "."]
                            })]
                        })]
                    })
                })
            }
            var U = i(91812),
                G = i(53561),
                H = i(66329),
                Y = i(29602),
                K = i(34362);
            let J = e => {
                    let {
                        tag: t,
                        onRemove: i,
                        onToggleExclude: a,
                        isOverlay: s = !1,
                        groupId: l = null,
                        index: o
                    } = e, {
                        attributes: n,
                        listeners: c,
                        setNodeRef: d,
                        transform: u,
                        transition: h,
                        isDragging: x
                    } = (0, G.gl)({
                        id: t.id,
                        data: {
                            type: "tag",
                            groupId: l,
                            tag: t
                        },
                        disabled: s
                    }), g = {
                        transform: H.Ks.Transform.toString(u),
                        transition: h,
                        opacity: x ? .5 : 1,
                        touchAction: "none"
                    };
                    return (0, r.jsxs)("div", {
                        ref: d,
                        style: g,
                        ...n,
                        ...c,
                        className: "\n      draggable-item\n      flex items-center gap-2 px-3 py-1.5 rounded-full\n      ".concat(x ? "bg-gray-700" : "bg-gray-800", "\n      border border-gray-700 text-sm mr-2 mb-2\n      hover:border-gray-500\n      ").concat(t.excluded ? "bg-gray-900" : "", "\n      ").concat(s ? "cursor-grabbing" : "cursor-grab", "\n    "),
                        children: [(0, r.jsx)("button", {
                            onClick: a,
                            className: "\n        flex-1 min-w-0 truncate\n        ".concat(t.excluded ? "text-gray-400" : "text-white", "\n      "),
                            children: 0 === o ? (0, r.jsxs)("h1", {
                                className: "text-sm font-normal m-0 p-0",
                                children: [t.excluded ? "-" : "", (0, Y.EJ)((0, K.t)(t.value), 32)]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [" ", t.excluded ? "-" : "", (0, Y.EJ)((0, K.t)(t.value), 32)]
                            })
                        }), (0, r.jsx)("div", {
                            className: "w-px h-4 bg-gray-600"
                        }), (0, r.jsx)("button", {
                            onClick: i,
                            className: "p-1 -mr-1 text-gray-400 hover:text-white rounded-full hover:bg-gray-700",
                            children: (0, r.jsx)(C.A, {
                                size: 14
                            })
                        })]
                    })
                },
                W = e => {
                    let {
                        group: t,
                        onRemove: i,
                        onRemoveTag: s,
                        onToggleExclude: l,
                        isOverlay: o = !1
                    } = e, {
                        attributes: n,
                        listeners: c,
                        setNodeRef: d,
                        transform: u,
                        transition: h,
                        isDragging: x
                    } = (0, G.gl)({
                        id: t.id,
                        data: {
                            type: "group",
                            group: t
                        },
                        disabled: o
                    }), {
                        setNodeRef: g,
                        isOver: m
                    } = (0, U.zM)({
                        id: "droppable-".concat(t.id),
                        data: {
                            type: "group",
                            group: t
                        }
                    }), p = {
                        transform: H.Ks.Transform.toString(u),
                        transition: h,
                        opacity: x ? .5 : 1,
                        touchAction: "none"
                    };
                    return (0, r.jsx)("div", {
                        ref: e => {
                            d(e), g(e)
                        },
                        ...n,
                        ...c,
                        style: p,
                        className: "\n        draggable-item\n        flex flex-wrap items-center gap-1 px-2 py-1 rounded-md \n        ".concat(x ? "bg-gray-700/30" : "bg-gray-700/20", "\n        ").concat(m ? "border-blue-400/50" : "border-gray-600/30", "\n        border mb-1.5 hover:border-gray-500/50\n        ").concat(o ? "cursor-grabbing" : "cursor-grab", "\n        transition-all duration-200 ease-in-out\n      "),
                        children: t.tags.map((e, i) => (0, r.jsxs)(a.Fragment, {
                            children: [i > 0 && (0, r.jsx)("span", {
                                className: "text-gray-400 text-sm mx-1",
                                children: "OR"
                            }), (0, r.jsx)(J, {
                                tag: e,
                                onRemove: () => s(e.id),
                                onToggleExclude: () => l(e.id),
                                groupId: t.id
                            })]
                        }, e.id))
                    })
                };

            function V(e) {
                let {
                    items: t,
                    onChange: i,
                    className: s,
                    enableTagGrouping: l
                } = e, [o, n] = (0, a.useState)(null), c = (0, U.FR)((0, U.MS)(U.AN, {
                    activationConstraint: {
                        distance: 8
                    }
                }), (0, U.MS)(U.IG, {
                    activationConstraint: {
                        delay: 200,
                        tolerance: 5
                    }
                }), (0, U.MS)(U.uN, {
                    coordinateGetter: G.JR
                })), d = e => {
                    let t = e => {
                        if ("type" in e && "group" === e.type) {
                            var t;
                            return (null === (t = e.tags[0]) || void 0 === t ? void 0 : t.label.toLowerCase()) || ""
                        }
                        return e.label.toLowerCase()
                    };
                    return [...e].map(e => "type" in e && "group" === e.type ? { ...e,
                        tags: [...e.tags].sort((e, t) => e.label.localeCompare(t.label))
                    } : e).sort((e, i) => {
                        let r = "type" in e && "group" === e.type;
                        return r !== ("type" in i && "group" === i.type) ? r ? -1 : 1 : t(e).localeCompare(t(i))
                    })
                }, u = e => {
                    i(t.filter(t => t.id !== e))
                }, h = (e, r) => {
                    i(t.map(t => {
                        if ("type" in t && "group" === t.type && t.id === e) {
                            let e = t.tags.filter(e => e.id !== r);
                            return 1 === e.length ? e[0] : 0 === e.length ? null : { ...t,
                                tags: e
                            }
                        }
                        return t
                    }).filter(Boolean))
                }, x = e => {
                    i(t.map(t => "type" in t || t.id !== e ? t : { ...t,
                        excluded: !t.excluded
                    }))
                }, g = (e, r) => {
                    i(t.map(t => "type" in t && "group" === t.type && t.id === e ? { ...t,
                        tags: t.tags.map(e => e.id === r ? { ...e,
                            excluded: !e.excluded
                        } : e)
                    } : t))
                }, m = (0, a.useMemo)(() => d(t), [t]);
                return (0, r.jsx)("div", {
                    className: s,
                    children: (0, r.jsxs)(U.Mp, {
                        sensors: c,
                        collisionDetection: U.TT,
                        onDragStart: e => {
                            let {
                                active: i
                            } = e;
                            n(t.find(e => e.id === i.id) || t.flatMap(e => "type" in e ? e.tags : []).find(e => e.id === i.id) || null)
                        },
                        onDragEnd: e => {
                            var r, a;
                            let {
                                active: s,
                                over: l
                            } = e;
                            if (!(null == s ? void 0 : s.data.current)) return;
                            let o = [...t],
                                {
                                    groupId: c,
                                    tag: u,
                                    type: h
                                } = s.data.current,
                                x = e => c ? e.map(e => "type" in e && e.id === c ? { ...e,
                                    tags: e.tags.filter(e => e.id !== u.id)
                                } : e).filter(e => !("type" in e) || e.tags.length > 0) : e.filter(e => e.id !== u.id),
                                g = (e, t) => e.map(e => "type" in e && e.id === t ? { ...e,
                                    tags: [...e.tags, u]
                                } : e);
                            if ("tag" !== h) {
                                if (l && s.id !== l.id) {
                                    let e = t.findIndex(e => e.id === s.id),
                                        r = t.findIndex(e => e.id === l.id);
                                    i((0, G.be)(t, e, r))
                                }
                                n(null);
                                return
                            }
                            if (null == l ? void 0 : l.id.toString().startsWith("droppable-")) {
                                let e = l.id.toString().replace("droppable-", "");
                                e !== c && (o = g(o = x(o), e))
                            } else if ((null == l ? void 0 : null === (r = l.data.current) || void 0 === r ? void 0 : r.type) === "tag") {
                                let e = l.data.current.groupId,
                                    t = l.data.current.tag;
                                c && c === e || (null == u ? void 0 : u.id) === l.id || (o = x(o), e ? o = g(o, e) : (o = o.filter(e => e.id !== t.id)).push({
                                    id: "group-".concat(Math.random()),
                                    type: "group",
                                    tags: [t, u]
                                }))
                            } else if ((null == l ? void 0 : null === (a = l.data.current) || void 0 === a ? void 0 : a.type) === "group") {
                                let e = l.id;
                                c !== e && (o = g(o = x(o), e.toString()))
                            } else !l && c && (o = x(o)).push(u);
                            i(d(o.flatMap(e => "type" in e && "group" === e.type && 1 === e.tags.length ? e.tags[0] : e))), n(null)
                        },
                        children: [(0, r.jsx)("div", {
                            className: "flex flex-wrap items-start",
                            children: m.map((e, t) => "type" in e && "group" === e.type ? (0, r.jsx)(W, {
                                group: e,
                                onRemoveTag: t => h(e.id, t),
                                onToggleExclude: t => g(e.id, t),
                                isOverlay: !0
                            }, e.id) : (0, r.jsx)(J, {
                                tag: e,
                                onRemove: () => u(e.id),
                                onToggleExclude: () => x(e.id),
                                index: t,
                                isOverlay: l
                            }, e.id))
                        }), (0, r.jsx)(U.Hd, {
                            children: o ? "type" in o ? (0, r.jsx)(W, {
                                group: o,
                                onRemoveTag: () => {},
                                onToggleExclude: () => {},
                                isOverlay: !0
                            }) : (0, r.jsx)(J, {
                                tag: o,
                                onRemove: () => {},
                                onToggleExclude: () => {},
                                isOverlay: !0
                            }) : null
                        })]
                    })
                })
            }
            var X = i(58802),
                Z = i(30814);
            let ee = function() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    (0, a.useLayoutEffect)(() => {
                        if (!e) return;
                        let t = window.getComputedStyle(document.body).overflow;
                        return document.body.style.overflow = "hidden", () => {
                            document.body.style.overflow = t
                        }
                    }, [e])
                },
                et = {
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
                ei = {
                    general: k.A,
                    character: z.A,
                    copyright: S.A,
                    artist: A.A,
                    metadata: R.A,
                    species: E.A,
                    circle: O.A,
                    style: D.A
                },
                er = function(e) {
                    var t, i;
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : et;
                    return e && "general" !== e && null !== (i = null === (t = r[e]) || void 0 === t ? void 0 : t.icon) && void 0 !== i ? i : "text-white"
                };

            function ea(e) {
                let {
                    isOpen: t,
                    onClose: i,
                    onOpen: s,
                    searchInput: l,
                    onSearch: n,
                    onSubmit: c,
                    suggestions: h,
                    onSuggestionClick: m,
                    showSuggestions: p,
                    setShowSuggestions: b,
                    onUpdateParams: f,
                    site: w,
                    sortBy: y,
                    rating: j,
                    ratio: N,
                    score: z,
                    timePeriod: S,
                    enableTagGrouping: A = !0
                } = e, [R, E] = (0, a.useState)(y || ""), [O, D] = (0, a.useState)(z || null), [q, L] = (0, a.useState)(j || null), [B, U] = (0, a.useState)(N || null), [G, H] = (0, a.useState)(null);
                ee(t), (0, a.useEffect)(() => {
                    E(y || ""), D(z || null), L(j || null), U(N || null), H(S || null)
                }, [t]);
                let J = (0, a.useRef)(!1);
                (0, a.useEffect)(() => {
                    if (t) {
                        let e = e => {
                            t && i()
                        };
                        return window.addEventListener("popstate", e), () => {
                            window.removeEventListener("popstate", e)
                        }
                    }
                }, [t, i]);
                let W = () => {
                        J.current && (window.history.back(), J.current = !1), i()
                    },
                    ea = (0, a.useRef)(null),
                    es = (0, a.useRef)(null),
                    el = (0, a.useRef)(null),
                    {
                        toggleFavorite: eo,
                        isFavorite: en
                    } = (0, $.I)(),
                    ec = e => {
                        let t = e.startsWith("-"),
                            i = t ? e.slice(1) : e;
                        return {
                            id: "tag-".concat(Math.random(), "-").concat(i),
                            label: i,
                            value: i,
                            excluded: t
                        }
                    },
                    ed = e => {
                        let t = e.split("~").map(e => e.trim()).map(ec);
                        return {
                            id: "group-".concat(Math.random()),
                            type: "group",
                            tags: t
                        }
                    },
                    eu = e => (0, Y.Y3)(e).map(e => "group" === e.type ? ed(e.raw) : ec(e.raw)),
                    [eh, ex] = (0, a.useState)(eu(l));
                (0, a.useEffect)(() => {
                    ex(eu(l))
                }, [t]);
                let eg = () => eh.map(e => "type" in e && "group" === e.type ? " (".concat(e.tags.map(e => " ".concat(e.excluded ? "-" : "").concat(e.value, " ")).join(" ~ "), ") ") : "".concat(e.excluded ? "-" : "").concat(e.value)).join(" ").replaceAll("  ", " ").trim(),
                    em = e => {
                        e.preventDefault(), c(eg(), R, O, q, B, G)
                    },
                    ep = e => {
                        ex([...eh, {
                            id: "tag-".concat(Math.random()),
                            label: e.label,
                            value: e.value,
                            excluded: !1
                        }]), n(""), ea.current.value = "", m(e)
                    },
                    ev = () => {
                        let e = eg().trim();
                        e && eo({
                            site: w,
                            query: e
                        })
                    },
                    eb = en(w, eg()),
                    ef = v.L.find(e => e.label === w);
                (0, a.useEffect)(() => {
                    function e(e) {
                        el.current && !el.current.contains(e.target) && es.current && !es.current.contains(e.target) && (n(""), ea.current.value = "")
                    }
                    if (p) return document.addEventListener("mousedown", e, {
                        capture: !0
                    }), () => document.removeEventListener("mousedown", e, {
                        capture: !0
                    })
                }, [p, n]), (0, a.useEffect)(() => {
                    let e = ea.current,
                        t = e => {
                            let t = (e.clipboardData || window.clipboardData).getData("text");
                            console.log("User pasted:", t);
                            let i = eu(t);
                            ex(e => [...e, ...i]), e.preventDefault()
                        };
                    return null == e || e.addEventListener("paste", t), () => {
                        null == e || e.removeEventListener("paste", t)
                    }
                }, [eu]), (0, a.useRef)(0), (0, a.useEffect)(() => (t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
                    document.body.style.overflow = ""
                }), [t]);
                let [ew, ey] = (0, a.useState)(!1), ej = e => {
                    ex([...eh, ...eu(e)])
                }, [eN, ek] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    let e = document.documentElement;
                    return t ? e.style.overscrollBehaviorY = "none" : e.style.overscrollBehaviorY = "", () => {
                        e.style.overscrollBehaviorY = ""
                    }
                }, [t]);
                let e_ = (0, a.useRef)(null),
                    {
                        dragOffset: eC,
                        dragPercentage: ez,
                        isAnimating: eS,
                        isSnappingBack: eA
                    } = (0, X.n)(e_, {
                        onClose: W,
                        onOpen: s,
                        isOpen: t,
                        threshold: 80,
                        velocityThreshold: .1,
                        id: "search-sidebar"
                    }),
                    eR = async e => {
                        if (navigator.clipboard && window.isSecureContext) try {
                            return await navigator.clipboard.writeText(e), !0
                        } catch (e) {
                            console.error("Clipboard API failed", e)
                        }
                        try {
                            let t = document.createElement("textarea");
                            t.value = e, t.style.position = "fixed", t.style.left = "-9999px", t.style.top = "0", document.body.appendChild(t), t.focus(), t.select();
                            let i = document.execCommand("copy");
                            return document.body.removeChild(t), i
                        } catch (e) {
                            return console.error("Fallback copy failed", e), !1
                        }
                    },
                    eE = async () => {
                        try {
                            if (!navigator.clipboard) throw Error("Clipboard API not available");
                            return await navigator.clipboard.readText()
                        } catch (e) {
                            return console.error("Failed to read clipboard: ", e), null
                        }
                    };
                return (0, r.jsx)(x.N, {
                    children: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(g.P.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: t || ez > 0 || eA ? 1 : 0
                            },
                            transition: {
                                duration: .2
                            },
                            className: "hidden sm:block fixed inset-0 bg-black/60 backdrop-blur-sm z-50",
                            style: {
                                pointerEvents: t || ez > 0 || eA ? "auto" : "none"
                            },
                            onClick: W
                        }), (0, r.jsxs)(g.P.div, {
                            ref: e_,
                            initial: {
                                x: "100%"
                            },
                            animate: {
                                x: !t && ez > 0 ? eA ? "100%" : "".concat(100 - ez, "%") : t && eC > 0 ? eC : t ? 0 : "100%"
                            },
                            exit: {
                                x: "100%"
                            },
                            transition: !(ez > 0) || eS || eA ? {
                                type: "tween",
                                duration: .2
                            } : {
                                type: "tween",
                                duration: 0
                            },
                            "data-sidebar-direction": "right",
                            className: "fixed right-0 top-0 bottom-0 h-[100dvh] w-full sm:w-96 bg-black border-l border-zinc-800/50 flex flex-col z-50 overscroll-contain",
                            style: {
                                touchAction: "pan-y"
                            },
                            children: [(0, r.jsxs)("div", {
                                className: "p-5 border-b border-zinc-800/50 flex justify-between items-center",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center gap-6",
                                    children: [(0, r.jsx)("h2", {
                                        className: "text-white text-xl font-semibold tracking-tight",
                                        children: "Search"
                                    }), (0, r.jsx)(_.A, {
                                        className: "h-5 w-5 transition-colors cursor-pointer ".concat(eb ? "text-red-500 hover:text-red-600" : "text-zinc-300 hover:text-zinc-100"),
                                        fill: eb ? "currentColor" : "none",
                                        onClick: () => ev()
                                    }), (0, r.jsx)(F.A, {
                                        className: "h-5 w-5 transition-colors cursor-pointer text-zinc-300 hover:text-zinc-100",
                                        onClick: () => ex([])
                                    }), (0, r.jsx)(P.A, {
                                        className: "h-5 w-5 transition-colors cursor-pointer text-zinc-300 hover:text-zinc-100",
                                        onClick: async () => {
                                            let e = eg();
                                            await eR(e) ? Z.oR.success("Search query copied to clipboard") : Z.oR.error("Failed to copy to clipboard")
                                        }
                                    }), (0, r.jsx)(T.A, {
                                        className: "h-5 w-5 transition-colors cursor-pointer text-zinc-300 hover:text-zinc-100",
                                        onClick: async () => {
                                            let e = await eE();
                                            e ? ej(e) : Z.oR.error("Could not read clipboard.")
                                        }
                                    })]
                                }), (0, r.jsx)(u.$, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: W,
                                    className: "text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-all",
                                    children: (0, r.jsx)(C.A, {
                                        className: "h-5 w-5"
                                    })
                                }), (0, r.jsx)(Q, {
                                    open: eN,
                                    onClose: () => ek(!1)
                                })]
                            }), (0, r.jsx)("div", {
                                className: "flex-1 overflow-y-auto",
                                children: (0, r.jsxs)("div", {
                                    className: "p-5 space-y-4",
                                    children: [(0, r.jsx)("form", {
                                        onSubmit: em,
                                        children: (0, r.jsxs)("div", {
                                            className: "relative",
                                            ref: el,
                                            children: [(0, r.jsx)(I.p, {
                                                ref: ea,
                                                onChange: e => n(e),
                                                onKeyDown: e => {
                                                    let t = e.target.value.trim().replaceAll(" ", "_");
                                                    if ("Enter" === e.key && t.trim()) {
                                                        if (e.preventDefault(), !t) return;
                                                        ex([...eh, {
                                                            id: "tag-".concat(Math.random()),
                                                            label: t.trim(),
                                                            value: t.trim(),
                                                            excluded: !1
                                                        }]), n(""), ea.current.value = ""
                                                    }
                                                },
                                                spellCheck: !1,
                                                placeholder: "Search for tags...",
                                                className: "w-full h-11 pl-4 pr-12 bg-gray-900/90 border-gray-700 text-white  placeholder:text-zinc-300 focus-visible:ring-2  ring-1 ring-zinc-700 focus-visible:ring-zinc-600 focus-visible:border-zinc-600 transition-all rounded-lg"
                                            }), (0, r.jsx)("button", {
                                                type: "button",
                                                onClick: () => {
                                                    ea.current.value = "", b(!p)
                                                },
                                                className: "absolute right-2 top-1/2 transform -translate-y-1/2 text-zinc-300 hover:text-white p-2 transition-colors rounded-md hover:bg-zinc-800/50",
                                                "aria-label": "Toggle suggestions",
                                                children: (0, r.jsx)(o.A, {
                                                    className: "h-5 w-5 transition-transform duration-200 ".concat(p ? "rotate-180" : "rotate-0")
                                                })
                                            }), p && h.length > 0 && (0, r.jsx)("div", {
                                                ref: es,
                                                className: " absolute top-full left-0 right-0 z-50  mt-1 rounded-xl border border-zinc-700 bg-zinc-900/95 backdrop-blur-md /* Increased opacity for legibility over content */ shadow-[0_20px_50px_rgba(0,0,0,0.5)] /* Heavier shadow to separate from background */ max-h-72 overflow-y-auto ",
                                                children: h.map(e => {
                                                    var t, i, a;
                                                    let s = (a = e.count) >= 1e6 ? (a / 1e6).toFixed(0) + "M" : a >= 1e3 ? (a / 1e3).toFixed(0) + "K" : a > 0 ? a : null,
                                                        l = er(e.type),
                                                        o = ei[e.type],
                                                        n = null !== (i = null === (t = et[e.type]) || void 0 === t ? void 0 : t.icon) && void 0 !== i ? i : et.general.icon;
                                                    return (0, r.jsxs)("button", {
                                                        onClick: () => ep(e),
                                                        className: " flex items-center w-full px-4 py-3 text-left hover:bg-zinc-800/60 transition-colors border-b border-zinc-800/30 last:border-0 gap-3 ",
                                                        children: [o && (0, r.jsx)(o, {
                                                            className: "w-4 h-4 flex-shrink-0 ".concat(n),
                                                            "aria-hidden": !0
                                                        }), (0, r.jsx)("div", {
                                                            className: "flex-grow overflow-hidden",
                                                            children: (0, r.jsx)("span", {
                                                                className: "font-semibold whitespace-nowrap overflow-hidden text-ellipsis ".concat(l),
                                                                children: (0, K.t)(e.label)
                                                            })
                                                        }), s && (0, r.jsx)("span", {
                                                            className: "text-zinc-200 text-sm ml-2 font-mono",
                                                            children: s
                                                        })]
                                                    }, e.value)
                                                })
                                            })]
                                        })
                                    }), (() => {
                                        var e, t, i, a, s;
                                        let l = "bg-zinc-950/95 text-zinc-100 border border-zinc-800 rounded-lg shadow-xl",
                                            n = "cursor-pointer rounded-md focus:bg-zinc-800 focus:text-white px-3 py-2 my-2hover:bg-zinc-800 hover:text-white transition-colors",
                                            c = "h-4 w-4 text-zinc-400 transition-transform duration-200 group-data-[state=open]:rotate-180",
                                            h = e => (0, Y.F_)(e) ? "w-full h-10 px-4 rounded-lg border border-blue-500/50 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/80 transition-all duration-200 flex items-center justify-between shadow-[0_0_8px_rgba(59,130,246,0.15)]" : "w-full h-10 px-4 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/80 hover:border-zinc-700 transition-all duration-200 flex items-center justify-between",
                                            x = [];
                                        (null == ef ? void 0 : ef.sort_options) && x.push("sort"), (null == ef ? void 0 : ef.time_period) && x.push("period"), (null == ef ? void 0 : ef.score_options) && x.push("score"), (null == ef ? void 0 : ef.ratio_options) && x.push("ratio"), (null == ef ? void 0 : ef.rating_options) && x.push("rating"), (null == ef ? void 0 : ef.hasCollections) && x.push("collections");
                                        let g = x.length,
                                            m = 5 === g,
                                            p = [];
                                        (null == ef ? void 0 : ef.sort_options) && p.push((0, r.jsxs)(d.rI, {
                                            children: [(0, r.jsx)(d.ty, {
                                                asChild: !0,
                                                children: (0, r.jsxs)(u.$, {
                                                    variant: "ghost",
                                                    className: h(R),
                                                    children: [(0, r.jsx)("span", {
                                                        className: (0, Y.F_)(R) ? "text-white text-sm font-semibold" : "text-zinc-200 text-sm",
                                                        children: (0, Y.F_)(R) ? R.split("?")[0][0].toUpperCase() + R.split("?")[0].slice(1) : "Sort by"
                                                    }), (0, r.jsx)(o.A, {
                                                        className: c
                                                    })]
                                                })
                                            }), (0, r.jsx)(d.SQ, {
                                                style: {
                                                    width: "var(--radix-dropdown-menu-trigger-width)"
                                                },
                                                align: "start",
                                                className: l,
                                                children: null == ef ? void 0 : null === (e = ef.sort_options) || void 0 === e ? void 0 : e.map(e => (0, r.jsx)(d._2, {
                                                    onClick: () => E(e.value),
                                                    className: "".concat(n, " capitalize"),
                                                    children: e.label
                                                }, e.value))
                                            })]
                                        }, "sort")), (null == ef ? void 0 : ef.time_period) && p.push((0, r.jsxs)(d.rI, {
                                            children: [(0, r.jsx)(d.ty, {
                                                asChild: !0,
                                                children: (0, r.jsxs)(u.$, {
                                                    variant: "ghost",
                                                    className: h(G),
                                                    children: [(0, r.jsx)("span", {
                                                        className: (0, Y.F_)(G) ? "text-zinc-100 text-sm font-semibold capitalize" : "text-zinc-200 text-sm",
                                                        children: (0, Y.F_)(G) ? "".concat(G) : "Period"
                                                    }), (0, r.jsx)(o.A, {
                                                        className: c
                                                    })]
                                                })
                                            }), (0, r.jsx)(d.SQ, {
                                                style: {
                                                    width: "var(--radix-dropdown-menu-trigger-width)"
                                                },
                                                align: "start",
                                                className: l,
                                                children: null == ef ? void 0 : ef.time_period.map(e => (0, r.jsx)(d._2, {
                                                    onClick: () => H(e.value),
                                                    className: n,
                                                    children: e.label
                                                }, e.value))
                                            })]
                                        }, "period")), (null == ef ? void 0 : ef.score_options) && p.push((0, r.jsxs)(d.rI, {
                                            children: [(0, r.jsx)(d.ty, {
                                                asChild: !0,
                                                children: (0, r.jsxs)(u.$, {
                                                    variant: "ghost",
                                                    className: h(O),
                                                    children: [(0, r.jsx)("span", {
                                                        className: O ? "text-zinc-100 text-sm font-semibold" : "text-zinc-200 text-sm",
                                                        children: O ? "≥".concat(O) : "Min score"
                                                    }), (0, r.jsx)(o.A, {
                                                        className: c
                                                    })]
                                                })
                                            }), (0, r.jsx)(d.SQ, {
                                                style: {
                                                    width: "var(--radix-dropdown-menu-trigger-width)"
                                                },
                                                align: "start",
                                                className: l,
                                                children: null == ef ? void 0 : null === (t = ef.score_options) || void 0 === t ? void 0 : t.map(e => (0, r.jsxs)(d._2, {
                                                    onClick: () => D(e),
                                                    className: n,
                                                    children: ["≥ ", e]
                                                }, e))
                                            })]
                                        }, "score")), (null == ef ? void 0 : ef.ratio_options) && p.push((0, r.jsxs)(d.rI, {
                                            children: [(0, r.jsx)(d.ty, {
                                                asChild: !0,
                                                children: (0, r.jsxs)(u.$, {
                                                    variant: "ghost",
                                                    className: h(B),
                                                    children: [(0, r.jsx)("span", {
                                                        className: (0, Y.F_)(B) ? "text-white text-sm font-semibold capitalize" : "text-zinc-200 text-sm capitalize",
                                                        children: null !== (a = (0, Y.F_)(B)) && void 0 !== a ? a : "Ratio"
                                                    }), (0, r.jsx)(o.A, {
                                                        className: c
                                                    })]
                                                })
                                            }), (0, r.jsx)(d.SQ, {
                                                style: {
                                                    width: "var(--radix-dropdown-menu-trigger-width)"
                                                },
                                                align: "start",
                                                className: l,
                                                children: null == ef ? void 0 : null === (i = ef.ratio_options) || void 0 === i ? void 0 : i.map(e => (0, r.jsx)(d._2, {
                                                    onClick: () => U(e.value),
                                                    className: "".concat(n, " capitalize"),
                                                    children: e.label
                                                }, e.label))
                                            })]
                                        }, "ratio")), (null == ef ? void 0 : ef.rating_options) && p.push((0, r.jsxs)(d.rI, {
                                            children: [(0, r.jsx)(d.ty, {
                                                asChild: !0,
                                                children: (0, r.jsxs)(u.$, {
                                                    variant: "ghost",
                                                    className: h(q),
                                                    children: [(0, r.jsx)("span", {
                                                        className: (0, Y.F_)(q) ? "text-white text-sm font-semibold capitalize" : "text-zinc-200 text-sm capitalize",
                                                        children: (0, Y.F_)(q) ? q : "Rating"
                                                    }), (0, r.jsx)(o.A, {
                                                        className: c
                                                    })]
                                                })
                                            }), (0, r.jsx)(d.SQ, {
                                                style: {
                                                    width: "var(--radix-dropdown-menu-trigger-width)"
                                                },
                                                align: "start",
                                                className: l,
                                                children: null == ef ? void 0 : null === (s = ef.rating_options) || void 0 === s ? void 0 : s.map(e => (0, r.jsx)(d._2, {
                                                    onClick: () => L(e.value),
                                                    className: "".concat(n, " capitalize"),
                                                    children: e.label
                                                }, e.label))
                                            })]
                                        }, "rating"));
                                        let v = (null == ef ? void 0 : ef.hasCollections) ? m ? (0, r.jsx)(u.$, {
                                            variant: "ghost",
                                            className: "group w-10 h-10 p-0 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/80 hover:border-zinc-700 transition-all duration-200 flex items-center justify-center",
                                            onClick: () => ey(!0),
                                            children: (0, r.jsx)(k.A, {
                                                className: "h-5 w-5 text-zinc-400 group-hover:text-zinc-200 rotate-45 group-hover:scale-110 transition-all"
                                            })
                                        }, "collections") : (0, r.jsxs)(u.$, {
                                            variant: "ghost",
                                            className: "".concat("group w-full h-10 px-4 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/80 hover:border-zinc-700 transition-all duration-200 flex items-center justify-between", " text-zinc-100"),
                                            onClick: () => ey(!0),
                                            children: [(0, r.jsx)("span", {
                                                className: "text-zinc-200 text-sm",
                                                children: "Collections"
                                            }), (0, r.jsx)(k.A, {
                                                className: "h-4 w-4 text-zinc-200 rotate-45 group-hover:scale-110 transition-transform"
                                            })]
                                        }, "collections") : null;
                                        return 4 === g ? (0, r.jsxs)("div", {
                                            className: "grid grid-cols-2 gap-3 py-3",
                                            children: [p, v]
                                        }) : m ? (0, r.jsxs)("div", {
                                            className: "py-3 space-y-3",
                                            children: [(0, r.jsx)("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: p.slice(0, 2)
                                            }), (0, r.jsxs)("div", {
                                                className: "grid grid-cols-[1fr_auto_1fr] gap-3 items-center",
                                                children: [p[2], v, p[3]]
                                            })]
                                        }) : (0, r.jsxs)("div", {
                                            className: "grid grid-cols-2 gap-3 py-3",
                                            children: [p, v]
                                        })
                                    })(), eh.length > 0 && (0, r.jsx)("div", {
                                        className: "mt-2",
                                        children: (0, r.jsx)(V, {
                                            items: eh,
                                            onChange: ex,
                                            enableTagGrouping: A
                                        })
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "px-5 pb-3",
                                children: !A && (0, r.jsx)("p", {
                                    className: "text-xs text-zinc-500 leading-relaxed",
                                    children: "Tip: Drag tags together to create OR groups. Click to exclude"
                                })
                            }), (0, r.jsx)("div", {
                                className: "p-5 border-t border-zinc-800/50",
                                children: (0, r.jsx)(u.$, {
                                    className: "w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-lg shadow-blue-600/20",
                                    onClick: em,
                                    children: "Search"
                                })
                            })]
                        }), (0, r.jsx)(M, {
                            site: w,
                            isOpen: ew,
                            onClose: () => ey(!1),
                            currentTags: eg(),
                            onAddToSearch: ej
                        })]
                    })
                })
            }
            var es = i(30894),
                el = i(21109);

            function eo(e) {
                let {
                    sortBy: t,
                    rating: i,
                    score: x,
                    ratio: g,
                    timePeriod: p,
                    searchInput: b,
                    site: f,
                    onSearch: w,
                    onUpdateParams: k,
                    onSiteChange: _,
                    dataSource: C
                } = e, [z, S] = (0, a.useState)(!1), [A, R] = (0, a.useState)(!1), [E, O] = (0, a.useState)([]), [D, F] = (0, a.useState)(!1), [P, T] = (0, a.useState)(b), [I, $] = (0, a.useState)(!1), q = (0, a.useRef)(null), L = (0, a.useRef)(null), {
                    isActive: B
                } = (0, m.a)();
                (0, a.useEffect)(() => {
                    T(b)
                }, [b]);
                let M = async e => {
                    if (!e) {
                        T(""), F(!1);
                        return
                    }
                    let t = e.target.value.replaceAll(" ", "_");
                    if (T(t), e.target.selectionStart, t.length > 2 || "konachan.com" === f || "yande.re" === f || "rule34.xxx" === f) try {
                        let e = await C.searchTags(t);
                        Array.isArray(e) && (O(e), F(!0))
                    } catch (e) {
                        console.error("Failed to fetch tag suggestions:", e)
                    } else O([]), F(!1)
                };
                (0, a.useEffect)(() => {
                    function e(e) {
                        z || !q.current || q.current.contains(e.target) || F(!1)
                    }
                    return z && T(b), document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
                }, [z]);
                let Q = e => {
                        k(e)
                    },
                    U = v.L.find(e => e.label === f),
                    G = "group w-full h-12 px-6text-zinc-800 hover:text-zinc-100 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200 flex items-center justify-between gap-2",
                    H = "bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl p-1.5 animate-in fade-in zoom-in-95 duration-100",
                    K = "cursor-pointer rounded-md px-3 py-2.5 text-sm text-zinc-400 focus:bg-zinc-800 focus:text-white hover:bg-zinc-800 hover:text-white transition-colors capitalize",
                    J = "h-4 w-4 text-zinc-500 transition-transform duration-200 group-data-[state=open]:rotate-180";
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(es.$, {
                        children: (0, r.jsxs)("div", {
                            className: "bg-black/80 backdrop-blur-sm border-b border-white/10 px-4 h-14 md:h-16 lg:h-14  flex items-center justify-between",
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, r.jsx)(u.$, {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "[&_svg]:size-5 md:[&_svg]:size-6 text-gray-400 hover:bg-zinc-800 hover:text-gray-400 ",
                                    onClick: () => R(!0),
                                    children: (0, r.jsx)(s.A, {})
                                }), (0, r.jsx)(el.A, {
                                    site: f
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, r.jsxs)("div", {
                                    children: [(0, r.jsx)(j.x, {
                                        value: f,
                                        onSelect: e => _(e)
                                    }), (0, r.jsx)(u.$, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "relative [&_svg]:size-6 w-12 ml-4  md:[&_svg]:size-6 text-gray-400 hover:bg-zinc-800 hover:text-gray-400 ml-2",
                                        onClick: () => S(!0),
                                        children: (0, r.jsx)(l.A, {})
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "hidden md:flex items-center gap-3 py-3",
                                    children: [(null == U ? void 0 : U.sort_options) && (0, r.jsxs)(d.rI, {
                                        children: [(0, r.jsx)(d.ty, {
                                            asChild: !0,
                                            children: (0, r.jsxs)(u.$, {
                                                variant: "ghost",
                                                className: G,
                                                children: [(0, r.jsx)("span", {
                                                    className: (0, Y.F_)(t) ? "text-zinc-300 font-semibold capitalize" : "text-zinc-400",
                                                    children: (0, Y.F_)(t) ? t.split("?")[0].charAt(0).toUpperCase() + t.split("?")[0].slice(1) : "Sort By"
                                                }), (0, r.jsx)(o.A, {
                                                    className: J
                                                })]
                                            })
                                        }), (0, r.jsx)(d.SQ, {
                                            align: "start",
                                            className: H,
                                            style: {
                                                width: "var(--radix-dropdown-menu-trigger-width)"
                                            },
                                            children: null == U ? void 0 : U.sort_options.map(e => (0, r.jsx)(d._2, {
                                                onClick: () => Q({
                                                    sort: e.value
                                                }),
                                                className: K,
                                                children: e.label
                                            }, e.value))
                                        })]
                                    }), (null == U ? void 0 : U.time_period) && (0, r.jsxs)(d.rI, {
                                        children: [(0, r.jsx)(d.ty, {
                                            asChild: !0,
                                            children: (0, r.jsxs)(u.$, {
                                                variant: "ghost",
                                                className: G,
                                                children: [(0, r.jsx)("span", {
                                                    className: (0, Y.F_)(p) ? "text-zinc-300 font-semibold capitalize" : "text-zinc-400",
                                                    children: (0, Y.F_)(p) ? p : "All Time"
                                                }), (0, r.jsx)(o.A, {
                                                    className: J
                                                })]
                                            })
                                        }), (0, r.jsx)(d.SQ, {
                                            align: "start",
                                            className: H,
                                            style: {
                                                width: "var(--radix-dropdown-menu-trigger-width)"
                                            },
                                            children: null == U ? void 0 : U.time_period.map(e => (0, r.jsx)(d._2, {
                                                onClick: () => Q({
                                                    timePeriod: e.value
                                                }),
                                                className: K,
                                                children: e.label
                                            }, e.value))
                                        })]
                                    }), (null == U ? void 0 : U.ratio_options) && (0, r.jsxs)(d.rI, {
                                        children: [(0, r.jsx)(d.ty, {
                                            asChild: !0,
                                            children: (0, r.jsxs)(u.$, {
                                                variant: "ghost",
                                                className: G,
                                                children: [(0, r.jsx)("span", {
                                                    className: (0, Y.F_)(g) ? "text-zinc-300 font-semibold capitalize" : "text-zinc-400",
                                                    children: (0, Y.F_)(g) ? g : "Ratio"
                                                }), (0, r.jsx)(o.A, {
                                                    className: J
                                                })]
                                            })
                                        }), (0, r.jsx)(d.SQ, {
                                            align: "start",
                                            className: H,
                                            style: {
                                                width: "var(--radix-dropdown-menu-trigger-width)"
                                            },
                                            children: null == U ? void 0 : U.ratio_options.map(e => (0, r.jsx)(d._2, {
                                                onClick: () => Q({
                                                    ratio: e.value
                                                }),
                                                className: K,
                                                children: e.label
                                            }, e.value))
                                        })]
                                    }), (null == U ? void 0 : U.rating_options) && (0, r.jsxs)(d.rI, {
                                        children: [(0, r.jsx)(d.ty, {
                                            asChild: !0,
                                            children: (0, r.jsxs)(u.$, {
                                                variant: "ghost",
                                                className: G,
                                                children: [(0, r.jsx)("span", {
                                                    className: (0, Y.F_)(i) ? "text-zinc-300 font-semibold capitalize" : "text-zinc-400",
                                                    children: (0, Y.F_)(i) ? i : "Rating"
                                                }), (0, r.jsx)(o.A, {
                                                    className: J
                                                })]
                                            })
                                        }), (0, r.jsx)(d.SQ, {
                                            align: "start",
                                            className: H,
                                            style: {
                                                width: "var(--radix-dropdown-menu-trigger-width)"
                                            },
                                            children: null == U ? void 0 : U.rating_options.map(e => (0, r.jsx)(d._2, {
                                                onClick: () => Q({
                                                    rating: e.value
                                                }),
                                                className: K,
                                                children: e.label
                                            }, e.label))
                                        })]
                                    }), (null == U ? void 0 : U.score_options) && (0, r.jsxs)(d.rI, {
                                        children: [(0, r.jsx)(d.ty, {
                                            asChild: !0,
                                            children: (0, r.jsxs)(u.$, {
                                                variant: "ghost",
                                                className: G,
                                                children: [(0, r.jsx)("span", {
                                                    className: x ? "text-zinc-300 font-semibold" : "text-zinc-400",
                                                    children: x ? "≥".concat(x) : "Min Score"
                                                }), (0, r.jsx)(o.A, {
                                                    className: J
                                                })]
                                            })
                                        }), (0, r.jsx)(d.SQ, {
                                            align: "start",
                                            className: H,
                                            style: {
                                                width: "var(--radix-dropdown-menu-trigger-width)"
                                            },
                                            children: null == U ? void 0 : U.score_options.map(e => (0, r.jsxs)(d._2, {
                                                onClick: () => Q({
                                                    score: e
                                                }),
                                                className: K,
                                                children: ["≥", e]
                                            }, e))
                                        })]
                                    })]
                                }), (0, r.jsx)(u.$, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: () => $(!0),
                                    className: "[&_svg]:size-4 w-10  md:[&_svg]:size-5 text-gray-400 hover:bg-zinc-800 hover:text-gray-400 ",
                                    children: B ? (0, r.jsx)(n.A, {
                                        fill: "currentColor"
                                    }) : (0, r.jsx)(c.A, {})
                                }), (0, r.jsx)(N.x, {
                                    activeSite: v.L.find(e => e.label === f)
                                })]
                            })]
                        })
                    }), (0, r.jsx)(ea, {
                        isOpen: z,
                        enableTagGrouping: !1 === U.doesSupportOrSynthax,
                        onClose: () => S(!1),
                        setIsSearchSidebarOpen: S,
                        onOpen: () => S(!0),
                        searchInput: b,
                        onSearch: M,
                        site: f,
                        onSubmit: (e, t, i, r, a, s) => {
                            w(e, t, i, r, a, s), S(!1)
                        },
                        suggestions: E,
                        onSuggestionClick: e => {
                            if (!L.current) return;
                            let t = L.current.selectionStart || 0,
                                i = P.slice(0, t),
                                r = P.slice(t),
                                a = i.lastIndexOf(" "),
                                s = -1 === a ? e.value : i.slice(0, a + 1) + e.value;
                            T(s + r), F(!1), setTimeout(() => {
                                if (L.current) {
                                    L.current.focus();
                                    let e = s.length;
                                    L.current.setSelectionRange(e, e)
                                }
                            }, 0)
                        },
                        showSuggestions: D,
                        setShowSuggestions: F,
                        onUpdateParams: Q,
                        sortBy: t,
                        rating: i,
                        score: x,
                        timePeriod: p,
                        ratio: g
                    }), (0, r.jsx)(h.B, {
                        site: f,
                        isOpen: A,
                        sortBy: t,
                        onOpen: () => R(!0),
                        onClose: () => R(!1),
                        onUpdateParams: Q
                    }), (0, r.jsx)(y, {
                        isOpen: I,
                        site: f,
                        onClose: () => $(!1)
                    })]
                })
            }
        },
        94841: (e, t, i) => {
            i.d(t, {
                _: () => n
            });
            var r = i(12115),
                a = i(76046),
                s = i(26960),
                l = i(29602),
                o = i(29288);

            function n(e) {
                let {
                    mode: t,
                    currentSite: i,
                    currentQuery: n = "",
                    loggedIn: c = !1,
                    reloadAfterUrlUpdate: d = !1
                } = e, u = (0, a.usePathname)(), {
                    siteSearchDefaults: h
                } = (0, o.t0)(), x = (0, r.useCallback)(e => {
                    if (!e) return "";
                    let t = (0, l.Y3)(e),
                        i = t.filter(e => "group" === e.type),
                        r = t.filter(e => "tag" === e.type);
                    return r.sort((e, t) => e.raw.replace(/^-/, "").localeCompare(t.raw.replace(/^-/, ""))), [...i.map(e => "( ".concat(e.raw, " )")), ...r.map(e => e.raw)].join(" ")
                }, []), g = (0, r.useCallback)(() => {
                    var e, t, i, r, a, l, n, c;
                    let d = u.split("/").filter(e => e && "saved" !== e)[0] || "rule34.xxx",
                        h = new URLSearchParams(window.location.search),
                        x = !h.get("q") && !h.get("sort") && !h.get("t") && !h.get("rating") && !h.get("id") && !h.get("ratio") && !h.get("timePeriod"),
                        g = s.L.find(e => e.label === d),
                        m = null !== (t = o.t0.getState().siteSearchDefaults[d]) && void 0 !== t ? t : {},
                        p = h.get("sort"),
                        v = h.get("rating"),
                        b = h.get("timePeriod"),
                        f = h.get("ratio"),
                        w = h.get("score") ? parseInt(h.get("score")) : x && null !== (r = null !== (i = m.score) && void 0 !== i ? i : null == g ? void 0 : g.defaultScore) && void 0 !== r ? r : null;
                    return {
                        site: d,
                        query: (null === (e = h.get("q")) || void 0 === e ? void 0 : e.replace(/[\u00AD\u200B\u200C\u200D\uFEFF]/g, "")) || "",
                        sort: null != p ? p : x && null !== (a = m.sort) && void 0 !== a ? a : "reddit.com" === d ? "hot" : void 0,
                        timeframe: h.get("t"),
                        timePeriod: null != b ? b : x && null !== (l = m.timePeriod) && void 0 !== l ? l : void 0,
                        rating: null != v ? v : x && null !== (n = m.rating) && void 0 !== n ? n : void 0,
                        ratio: null != f ? f : x && null !== (c = m.ratio) && void 0 !== c ? c : void 0,
                        page: h.get("page") ? parseInt(h.get("page")) : void 0,
                        score: w,
                        id: h.get("id"),
                        cursor: h.get("cursor")
                    }
                }, [u]), m = (0, r.useCallback)(e => {
                    let i = g(),
                        r = { ...i,
                            ...e
                        },
                        a = new URLSearchParams;
                    "reddit.com" !== r.site && r.id ? "oldest" === r.sort ? r.query = r.query.replace(/id:\>=\S*/, "").trim() + " id:>=".concat(r.id) : "random" === r.sort || "score" === r.sort || (r.query = r.query.replace(/id:\<=\S*/, "").trim() + " id:<=".concat(r.id)) : "reddit.com" === r.site && "reddit.com" !== i.site && (r.sort = "hot"), r.query && (r.query = x(r.query), a.set("q", r.query.toLowerCase().trim())), r.sort && a.set("sort", r.sort), r.timeframe && a.set("t", r.timeframe), r.rating && a.set("rating", r.rating), r.ratio && a.set("ratio", r.ratio), r.timePeriod && a.set("timePeriod", r.timePeriod.toString()), (r.score || 0 === r.score) && a.set("score", r.score.toString());
                    let s = "saved" === t ? "/saved" : "",
                        o = "/".concat(r.site),
                        n = a.toString() ? "?".concat(a.toString()) : "",
                        c = "".concat(s).concat(o).concat(n);
                    window.location.pathname + window.location.search !== c && (l.QB.push(c), d && window.location.reload(), window.scrollTo(0, 0))
                }, [g, x]), p = (0, r.useCallback)(e => {
                    var i, r, a;
                    let l;
                    if ("saved" === t) {
                        window.location.href = "/saved/".concat(e);
                        return
                    }
                    let n = g(),
                        c = "reddit.com" === n.site,
                        d = s.L.find(t => t.label === e),
                        u = null !== (i = o.t0.getState().siteSearchDefaults[e]) && void 0 !== i ? i : {},
                        h = null !== (r = u.score) && void 0 !== r ? r : null == d ? void 0 : d.defaultScore,
                        x = (e, t) => e && (null == t ? void 0 : t.map(e => e.value).includes(e)) ? e : void 0,
                        p = (e, t) => e && "none" !== e && (null == t ? void 0 : t.map(e => e.value).includes(e)) ? e : void 0,
                        v = {
                            site: e,
                            score: h
                        };
                    if (c !== ("reddit.com" === e)) l = { ...v,
                        query: "",
                        sort: void 0,
                        rating: void 0,
                        ratio: void 0,
                        timePeriod: void 0,
                        page: void 0,
                        cursor: void 0
                    };
                    else {
                        let e = n.query.replace(/id:\<=\S*/, "").replace(/id:\>=\S*/, ""),
                            t = e.trim().length > 0,
                            i = Object.keys(null !== (a = o.t0.getState().siteSearchDefaults[n.site]) && void 0 !== a ? a : {}).length > 0;
                        v.rating = t || !i ? p(n.rating, null == d ? void 0 : d.rating_options) : x(u.rating, null == d ? void 0 : d.rating_options), v.sort = t || !i ? p(n.sort, null == d ? void 0 : d.sort_options) : x(u.sort, null == d ? void 0 : d.sort_options), v.timePeriod = t || !i ? p(n.timePeriod, null == d ? void 0 : d.time_period) : x(u.timePeriod, null == d ? void 0 : d.time_period), v.ratio = t || !i ? p(n.ratio, null == d ? void 0 : d.ratio_options) : x(u.ratio, null == d ? void 0 : d.ratio_options), l = { ...v,
                            query: e,
                            page: void 0,
                            cursor: void 0
                        }
                    }
                    m(l)
                }, [t, g, m]), v = (0, r.useCallback)((e, r, a, s, l, o) => {
                    if ("saved" === t && !c) {
                        window.location.href = "/".concat(i, "/?q=").concat(e);
                        return
                    }
                    m({
                        query: e.trim(),
                        ...void 0 !== r && {
                            sort: r
                        },
                        ...null != a && {
                            score: a
                        },
                        ...void 0 !== s && {
                            rating: s
                        },
                        ...void 0 !== l && {
                            ratio: l
                        },
                        ...void 0 !== o && {
                            timePeriod: o
                        }
                    })
                }, [t, i, m, c]), b = (0, r.useCallback)(e => {
                    "saved" !== t && m({
                        sort: e
                    })
                }, [t, m]), f = (0, r.useCallback)(e => {
                    ("saved" !== t || c) && (void 0 !== e.sort && (e = { ...e,
                        sort: e.sort
                    }), m(e))
                }, [t, c, m]), w = (0, r.useCallback)(e => {
                    window.location.href = "/reddit.com/user?userName=".concat(e)
                }, []), y = (0, r.useCallback)((e, i, r, a) => "reddit.com" === e ? {
                    sortBy: "saved" === t ? "hot" : (null == i ? void 0 : i.timeframe) ? "".concat(i.sort, "?t=").concat(i.timeframe) : (null == i ? void 0 : i.sort) || "hot",
                    onSortChange: b,
                    onUpdateParams: f,
                    handleSiteChange: e => p(e.site),
                    dataSource: r
                } : {
                    sortBy: null == i ? void 0 : i.sort,
                    rating: null == i ? void 0 : i.rating,
                    ratio: null == i ? void 0 : i.ratio,
                    score: null == i ? void 0 : i.score,
                    timePeriod: null == i ? void 0 : i.timePeriod,
                    searchInput: "saved" === t ? "" : (null == i ? void 0 : i.query) || "",
                    site: e,
                    onSearch: v,
                    onUpdateParams: f,
                    onSiteChange: p,
                    dataSource: a
                }, [t, v, b, f, p]);
                return {
                    getURLState: g,
                    updateURL: m,
                    handleSiteChange: p,
                    handleSearch: v,
                    handleSortChange: b,
                    handleParamsUpdate: f,
                    handleUserChange: w,
                    getNavProps: y
                }
            }
        }
    }
]);