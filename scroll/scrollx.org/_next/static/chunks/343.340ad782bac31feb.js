"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [343], {
        73343: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => i
            });
            var l = r(95155),
                n = r(8898),
                a = r(35610),
                s = r(12115),
                c = r(29288),
                o = r(44504),
                u = r(29602);

            function i(e) {
                var t;
                let r = (0, s.useRef)(null),
                    i = (0, s.useRef)(null),
                    [d, m] = (0, s.useState)(!1),
                    [h, f] = (0, s.useState)(!1),
                    [p, b] = (0, s.useState)(!1),
                    [v, g] = (0, s.useState)(!1),
                    [y, w] = (0, s.useState)(0),
                    [x, k] = (0, s.useState)([]),
                    [F, E] = (0, s.useState)(!1),
                    [C, T] = (0, s.useState)(null),
                    {
                        playMode: j,
                        audio: N,
                        setAudio: M,
                        audioVolume: S,
                        setAudioVolume: L
                    } = (0, c.t0)(),
                    [A, R] = (0, s.useState)(S),
                    {
                        selectedPost: z
                    } = (0, c.dp)(),
                    P = "auto" === j,
                    B = "hover" === j,
                    D = "click" === j,
                    [O, W] = (0, s.useState)(P || !e.isFullscreen && !N),
                    [_, H] = (0, s.useState)(e.isFullscreen || P),
                    I = (0, u.Fr)(),
                    X = (0, s.useRef)(null);
                (0, s.useEffect)(() => {
                    let e = r.current;
                    e && (e.volume = S, R(S))
                }, [S]), e.isFullscreen && (0, s.useEffect)(() => {
                    W(!N)
                }, []), (0, s.useEffect)(() => {
                    r.current && (e.isFullscreen || null === z ? !e.isFullscreen && null === z && P && r.current.paused && r.current.play().catch(e => {
                        "AbortError" !== e.name && console.error("Failed to play video:", e)
                    }) : r.current.paused || r.current.pause())
                }, [z, e.isFullscreen, P]);
                let U = (0, s.useRef)(P),
                    V = (0, s.useCallback)((0, n.s)(e => {
                        let [t] = e;
                        t.isIntersecting ? m(!0) : m(!1)
                    }, 100), []);
                (0, s.useEffect)(() => {
                    let e = r.current;
                    if (!e) return;
                    let t = new IntersectionObserver(V, {
                        threshold: .5
                    });
                    return t.observe(e), () => {
                        t.disconnect()
                    }
                }, [V]);
                let Y = (0, s.useCallback)((t, r) => {
                        C && C.destroy();
                        let l = new a.Ay({
                            maxBufferLength: 15,
                            maxMaxBufferLength: 30,
                            enableWorker: !0,
                            lowLatencyMode: !0,
                            backBufferLength: 15,
                            startLevel: -1,
                            abrEwmaDefaultEstimate: 5e6,
                            abrBandWidthFactor: .95,
                            abrBandWidthUpFactor: .85,
                            progressive: !0,
                            capLevelToPlayerSize: !0,
                            manifestLoadingTimeOut: 1e4,
                            manifestLoadingMaxRetry: 4,
                            fragLoadingTimeOut: 2e4,
                            fragLoadingMaxRetry: 6,
                            levelLoadingTimeOut: 1e4,
                            levelLoadingMaxRetry: 4,
                            testBandwidth: !0,
                            startFragPrefetch: !0,
                            maxBufferSize: 6e7,
                            maxBufferHole: .5,
                            highBufferWatchdogPeriod: 2,
                            nudgeOffset: .2,
                            nudgeMaxRetry: 5
                        });
                        l.on(a.Ay.Events.MANIFEST_PARSED, (r, l) => {
                            E(l.audio), b(!0), (P || e.isFullscreen) && t.play().catch(() => {
                                W(!0), t.play()
                            })
                        }), l.on(a.Ay.Events.ERROR, (e, t) => {
                            if (t.fatal) switch (t.type) {
                                case a.Ay.ErrorTypes.NETWORK_ERROR:
                                    console.error("Network error, attempting to recover...", t), l.startLoad();
                                    break;
                                case a.Ay.ErrorTypes.MEDIA_ERROR:
                                    console.error("Media error, attempting to recover...", t), l.recoverMediaError();
                                    break;
                                default:
                                    console.error("Fatal error, destroying HLS instance:", t)
                            }
                        }), l.on(a.Ay.Events.LEVEL_SWITCHED, (e, t) => {
                            let r = l.levels[t.level];
                            console.debug("Quality changed to:", (null == r ? void 0 : r.height) || "auto")
                        }), l.loadSource(r), l.attachMedia(t), T(l)
                    }, [C, P, e.isFullscreen]),
                    K = (0, s.useCallback)(() => {
                        let e = r.current;
                        e && E(e.mozHasAudio || !!e.webkitAudioDecodedByteCount || !!(e.audioTracks && e.audioTracks.length))
                    }, [N, _, e.post]),
                    Q = 0,
                    q = () => {
                        K(), setTimeout(() => {
                            Q < 40 && (Q++, q())
                        }, 500)
                    };
                (0, s.useEffect)(() => {
                    let t = r.current;
                    if (t) return (async () => {
                        if (q(), !d || !e.isFullscreen && !B && !P || B && !h) {
                            e.isFullscreen || (t.pause(), H(!1));
                            return
                        }
                        try {
                            X.current && await X.current.catch(() => {}), X.current = t.play(), await X.current, H(!0), X.current = null
                        } catch (e) {
                            if ("NotAllowedError" === e.name) {
                                W(!0);
                                try {
                                    X.current = t.play(), await X.current, H(!0), X.current = null
                                } catch (e) {
                                    "AbortError" !== e.name && console.error("Failed to play even with mute:", e), X.current = null
                                }
                            } else "AbortError" !== e.name && (console.error("Playback error:", e), X.current = null)
                        }
                    })(), () => {
                        !e.isFullscreen && B && (X.current ? X.current.then(() => t.pause()).catch(() => t.pause()) : t.pause(), H(!1))
                    }
                }, [B, P, h, d, e.isFullscreen]), (0, s.useEffect)(() => {
                    let t = r.current;
                    t && !e.isFullscreen && (U.current && !P && (t.pause(), H(!1)), U.current = P)
                }, [P, B, D, e.isFullscreen]);
                let G = () => {
                    let e = r.current;
                    if (!e) return;
                    w(e.currentTime / e.duration * 100);
                    let t = e.buffered,
                        l = [];
                    for (let e = 0; e < t.length; e++) l.push([t.start(e), t.end(e)]);
                    k(l)
                };
                (0, s.useEffect)(() => {
                    let e = r.current;
                    if (e) return e.addEventListener("timeupdate", G), () => {
                        e.removeEventListener("timeupdate", G)
                    }
                }, []), (0, s.useEffect)(() => {
                    let t = r.current;
                    if (!t || !d || p) return;
                    let l = e.src || e.fallbackUrl;
                    if (l) {
                        if (C && (C.destroy(), T(null)), l.includes(".m3u8") && a.Ay.isSupported()) Y(t, l);
                        else {
                            if (e.sources) {
                                for (; t.firstChild;) t.removeChild(t.firstChild);
                                e.sources.forEach(e => {
                                    let {
                                        src: r,
                                        type: l
                                    } = e;
                                    if (!r || !l) return;
                                    let n = document.createElement("source");
                                    n.src = r + "#t=0.0001", n.type = l, t.appendChild(n)
                                }), t.removeAttribute("src")
                            } else t.src = l + "#t=0.0001";
                            e.isFullscreen && t.play().catch(() => {
                                W(!0), t.play()
                            })
                        }
                        b(!0)
                    }
                }, [d, p, e.src, e.fallbackUrl, Y]);
                let J = (0, s.useCallback)(() => {
                        (0, u.Fr)() || (f(!0), !e.isFullscreen && N && W(!1))
                    }, [N, e.isFullscreen]),
                    Z = (0, s.useCallback)(() => {
                        !(0, u.Fr)() && (e.isFullscreen || D || (f(!1), W(!0), B && r.current && !e.isFullscreen && (r.current.pause(), H(!1))))
                    }, [D, B, e.isFullscreen]);
                (0, s.useEffect)(() => () => {
                    C && C.destroy()
                }, [C]);
                let $ = async t => {
                        t.stopPropagation();
                        let l = r.current;
                        if (l) try {
                            _ ? (l.pause(), H(!1)) : (await l.play(), H(!0))
                        } catch (t) {
                            if ("NotAllowedError" === t.name) {
                                W(!0);
                                try {
                                    await l.play(), H(!0)
                                } catch (e) {
                                    console.error("Failed to play even with mute:", e)
                                }
                            } else "AbortError" !== t.name && console.error("Error toggling playback:", t, e.post)
                        }
                    },
                    ee = (0, s.useCallback)(t => {
                        if (!e.isFullscreen || !r.current) return;
                        let l = r.current;
                        switch (t.key) {
                            case "ArrowLeft":
                                t.preventDefault();
                                let n = l.currentTime - .1 * l.duration;
                                l.currentTime = Math.max(0, n);
                                break;
                            case "ArrowRight":
                                t.preventDefault();
                                let a = l.currentTime + .1 * l.duration;
                                l.currentTime = Math.min(l.duration, a)
                        }
                    }, [e.isFullscreen]);
                (0, s.useEffect)(() => {
                    if (e.isFullscreen) return window.addEventListener("keydown", ee), () => {
                        window.removeEventListener("keydown", ee)
                    }
                }, [e.isFullscreen, ee]);
                let [et, er] = (0, s.useState)(null), [el, en] = (0, s.useState)(null), [ea, es] = (0, s.useState)(0), [ec, eo] = (0, s.useState)(0), [eu, ei] = (0, s.useState)(!1), [ed, em] = (0, s.useState)(null), eh = (0, s.useRef)(), ef = (0, s.useRef)(!1), ep = (0, s.useCallback)((t, l) => {
                    let n = r.current;
                    if (!n || !e.isFullscreen || !(0, u.Fr)()) return;
                    let a = t / l;
                    a < .4 ? (n.currentTime = Math.max(0, n.currentTime - 10), em("backward")) : a > .6 && (n.currentTime = Math.min(n.duration, n.currentTime + 10), em("forward")), ei(!0), setTimeout(() => {
                        ei(!1), em(null)
                    }, 500)
                }, [e.isFullscreen]), eb = (0, s.useCallback)(t => {
                    if (!(0, u.Fr)() || !e.isFullscreen) return;
                    let r = t.touches[0];
                    er(r.clientX), en(r.clientY), ef.current = !1
                }, [e.isFullscreen]), ev = (0, s.useCallback)(e => {
                    if (!et || !el) return;
                    let t = e.touches[0],
                        r = Math.abs(t.clientX - et),
                        l = Math.abs(t.clientY - el);
                    l > 10 && l > r && (ef.current = !0)
                }, [et, el]), eg = (0, s.useCallback)(t => {
                    var r;
                    if (!(0, u.Fr)() || !e.isFullscreen || ef.current) {
                        ef.current = !1;
                        return
                    }
                    t.preventDefault(), t.stopPropagation();
                    let l = t.changedTouches[0],
                        n = Date.now(),
                        a = (null === (r = i.current) || void 0 === r ? void 0 : r.clientWidth) || 0;
                    et && 40 > Math.abs(l.clientX - et) && (n - ea < 300 && 40 > Math.abs(l.clientX - ec) ? (eh.current && (clearTimeout(eh.current), eh.current = void 0), ep(l.clientX, a)) : (eh.current && clearTimeout(eh.current), eh.current = setTimeout(() => {
                        $(t), eh.current = void 0
                    }, 300)), es(n), eo(l.clientX)), er(null), en(null)
                }, [ea, ec, et, el, e.isFullscreen, $, ep]);
                return (0, s.useEffect)(() => {
                    let t = r.current;
                    t && e.src && "video" === e.post.processedContent.type && (async () => {
                        if ("empty" === e.src) {
                            await (null == t ? void 0 : t.pause());
                            return
                        }
                        let r = !t.paused;
                        if (t.currentTime, t.muted, C && (C.destroy(), T(null)), b(!1), e.src.includes(".m3u8") && a.Ay.isSupported()) Y(t, e.src);
                        else if (e.sources) {
                            for (; t.firstChild;) t.removeChild(t.firstChild);
                            e.sources.forEach(e => {
                                let {
                                    src: r,
                                    type: l
                                } = e;
                                if (!r || !l) return;
                                let n = document.createElement("source");
                                n.src = r, n.type = l, t.appendChild(n)
                            }), t.removeAttribute("src")
                        } else t.src = e.src;
                        if (t.currentTime = 0, W(!1), r) try {
                            await t.play()
                        } catch (e) {
                            console.error("Error restoring playback:", e)
                        }
                    })()
                }, [e.src]), null == r || null === (t = r.current) || void 0 === t || t.duration, (0, l.jsxs)("div", {
                    ref: i,
                    className: "group relative ".concat(e.className),
                    onMouseEnter: J,
                    onMouseLeave: Z,
                    onClick: $,
                    onTouchStart: eb,
                    onTouchMove: ev,
                    onTouchEnd: eg,
                    style: {
                        maxWidth: "100%",
                        maxHeight: "100%",
                        aspectRatio: e.width && e.height ? "".concat(e.width, "/").concat(e.height) : "16/9"
                    },
                    children: [(0, l.jsx)("video", {
                        ref: r,
                        onTimeUpdate: G,
                        poster: e.poster,
                        onClick: t => {
                            "click" !== j && !e.isFullscreen && e.onFullscreen && (t.stopPropagation(), e.onFullscreen(t))
                        },
                        className: "w-full h-full object-contain",
                        playsInline: !0,
                        autoPlay: e.isFullscreen || P,
                        muted: O,
                        loop: !0,
                        disablePictureInPicture: !0,
                        disableRemotePlayback: !0,
                        draggable: !1,
                        preload: "none",
                        src: e.src
                    }), (0, u.Fr)() && eu && "forward" === ed && (0, l.jsx)("div", {
                        className: "absolute right-1/4 top-1/2 -translate-y-1/2 bg-black/75 rounded-full p-3 transform transition-transform duration-200 scale-110",
                        children: (0, l.jsxs)("span", {
                            className: "text-white text-lg font-medium",
                            children: ["+", 10, "s"]
                        })
                    }), (0, u.Fr)() && eu && "backward" === ed && (0, l.jsx)("div", {
                        className: "absolute left-1/4 top-1/2 -translate-y-1/2 bg-black/75 rounded-full p-3 transform transition-transform duration-200 scale-110",
                        children: (0, l.jsxs)("span", {
                            className: "text-white text-lg font-medium",
                            children: ["-", 10, "s"]
                        })
                    }), (0, l.jsx)("div", {
                        className: "absolute z-0 bottom-0 left-0 w-full h-8 group/progress z-20",
                        children: (0, l.jsx)("div", {
                            className: "absolute bottom-0 left-0 w-full h-8 cursor-pointer ".concat(e.isFullscreen ? "opacity-100" : "opacity-0 hover:opacity-100", " "),
                            onClick: e => {
                                e.stopPropagation();
                                let t = e.currentTarget.getBoundingClientRect(),
                                    l = (e.clientX - t.left) / t.width;
                                if (r.current) {
                                    let e = r.current.duration * l;
                                    Number.isNaN(e) || (r.current.currentTime = e)
                                }
                            },
                            children: (0, l.jsx)("div", {
                                className: "absolute bottom-0 left-0 h-1 bg-red-500 transition-all duration-200",
                                style: {
                                    width: "".concat(y, "%")
                                }
                            })
                        })
                    }), !e.isFullscreen && e.onFullscreen && "click" === j && (0, l.jsx)("button", {
                        onClick: t => {
                            var l;
                            t.stopPropagation(), null == r || null === (l = r.current) || void 0 === l || l.pause(), H(!1), null == e || e.onFullscreen()
                        },
                        className: "absolute top-2 left-2 w-8 h-8 flex items-center justify-center bg-black/50 rounded opacity-100 group-hover:opacity-100 transition-opacity duration-200 text-white hover:bg-black/70 z-10",
                        children: (0, l.jsx)(o.A, {
                            className: "w-5 h-5"
                        })
                    }), !I && (0, l.jsxs)("div", {
                        className: "z-20 absolute bottom-0 left-0 right-0 p-2 flex items-center justify-between transition-opacity duration-200 pointer-events-none",
                        style: {
                            fontSize: "max(0.5vw, 12px)"
                        },
                        children: [(0, l.jsx)("button", {
                            onClick: e => {
                                e.stopPropagation(), $(e)
                            },
                            className: "w-[2.5em] h-[2.5em] flex items-center justify-center bg-black/30 rounded hover:bg-black/70 transition-colors pointer-events-auto",
                            children: _ ? (0, l.jsxs)("svg", {
                                className: "w-[1.3em] h-[1.3em] text-white",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: [(0, l.jsx)("rect", {
                                    x: "6",
                                    y: "4",
                                    width: "4",
                                    height: "16"
                                }), (0, l.jsx)("rect", {
                                    x: "14",
                                    y: "4",
                                    width: "4",
                                    height: "16"
                                })]
                            }) : (0, l.jsx)("svg", {
                                className: "w-[1.3em] h-[1.3em] text-white",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: (0, l.jsx)("path", {
                                    d: "M8 5v14l11-7z"
                                })
                            })
                        }), F && (0, l.jsxs)("div", {
                            className: "relative group/volume pointer-events-auto",
                            children: [(0, l.jsx)("div", {
                                className: "absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-[2em] h-[8em] bg-black/50 rounded flex items-center justify-center opacity-0 group-hover/volume:opacity-100 transition-opacity duration-200",
                                children: (0, l.jsx)("input", {
                                    type: "range",
                                    min: "0",
                                    max: "1",
                                    step: "0.01",
                                    value: A,
                                    onChange: e => {
                                        let t = parseFloat(e.target.value);
                                        R(t), L(t);
                                        let l = r.current;
                                        l && (l.volume = t, 0 === t ? W(!0) : O && N && W(!1))
                                    },
                                    onMouseDown: e => e.stopPropagation(),
                                    onClick: e => {
                                        e.preventDefault(), e.stopPropagation()
                                    },
                                    onPointerDown: e => e.stopPropagation(),
                                    onTouchStart: e => e.stopPropagation(),
                                    className: "h-[6em] w-[0.25em] appearance-none cursor-pointer bg-white/20 rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[0.75em] [&::-webkit-slider-thumb]:h-[0.75em] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:w-[0.75em] [&::-moz-range-thumb]:h-[0.75em] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:border-0 [&::-moz-range-track]:bg-white/20 [&::-moz-range-track]:rounded-full",
                                    style: {
                                        WebkitAppearance: "slider-vertical",
                                        direction: "rtl"
                                    }
                                })
                            }), (0, l.jsx)("button", {
                                onClick: e => {
                                    e.stopPropagation();
                                    let t = r.current;
                                    t && (O && (0 === A ? (R(.5), t.volume = .5) : t.volume = A), M(O), W(!O))
                                },
                                className: "w-[2.5em] h-[2.5em] flex items-center justify-center bg-black/30 rounded hover:bg-black/70 transition-colors",
                                children: O ? (0, l.jsx)("svg", {
                                    className: "w-[1.3em] h-[1.3em] text-white",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0, l.jsx)("path", {
                                        d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
                                    })
                                }) : (0, l.jsx)("svg", {
                                    className: "w-[1.3em] h-[1.3em] text-white",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0, l.jsx)("path", {
                                        d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }
        }
    }
]);