(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [172], {
        67401: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            var n = r(12115);
            let o = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                i = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase()),
                a = e => {
                    let t = i(e);
                    return t.charAt(0).toUpperCase() + t.slice(1)
                },
                s = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
                },
                l = e => {
                    for (let t in e)
                        if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
                };
            var u = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let d = (0, n.forwardRef)((e, t) => {
                    let {
                        color: r = "currentColor",
                        size: o = 24,
                        strokeWidth: i = 2,
                        absoluteStrokeWidth: a,
                        className: d = "",
                        children: c,
                        iconNode: f,
                        ...p
                    } = e;
                    return (0, n.createElement)("svg", {
                        ref: t,
                        ...u,
                        width: o,
                        height: o,
                        stroke: r,
                        strokeWidth: a ? 24 * Number(i) / Number(o) : i,
                        className: s("lucide", d),
                        ...!c && !l(p) && {
                            "aria-hidden": "true"
                        },
                        ...p
                    }, [...f.map(e => {
                        let [t, r] = e;
                        return (0, n.createElement)(t, r)
                    }), ...Array.isArray(c) ? c : [c]])
                }),
                c = (e, t) => {
                    let r = (0, n.forwardRef)((r, i) => {
                        let {
                            className: l,
                            ...u
                        } = r;
                        return (0, n.createElement)(d, {
                            ref: i,
                            iconNode: t,
                            className: s("lucide-".concat(o(a(e))), "lucide-".concat(e), l),
                            ...u
                        })
                    });
                    return r.displayName = a(e), r
                }
        },
        94696: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("arrow-down-a-z", [
                ["path", {
                    d: "m3 16 4 4 4-4",
                    key: "1co6wj"
                }],
                ["path", {
                    d: "M7 20V4",
                    key: "1yoxec"
                }],
                ["path", {
                    d: "M20 8h-5",
                    key: "1vsyxs"
                }],
                ["path", {
                    d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10",
                    key: "ag13bf"
                }],
                ["path", {
                    d: "M15 14h5l-5 6h5",
                    key: "ur5jdg"
                }]
            ])
        },
        99053: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("arrow-right", [
                ["path", {
                    d: "M5 12h14",
                    key: "1ays0h"
                }],
                ["path", {
                    d: "m12 5 7 7-7 7",
                    key: "xquz4c"
                }]
            ])
        },
        82929: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("bookmark", [
                ["path", {
                    d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
                    key: "1fy3hk"
                }]
            ])
        },
        56119: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("brush", [
                ["path", {
                    d: "m11 10 3 3",
                    key: "fzmg1i"
                }],
                ["path", {
                    d: "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",
                    key: "p4q2r7"
                }],
                ["path", {
                    d: "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",
                    key: "wy6l02"
                }]
            ])
        },
        98867: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("check", [
                ["path", {
                    d: "M20 6 9 17l-5-5",
                    key: "1gmf2c"
                }]
            ])
        },
        51719: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("chevron-down", [
                ["path", {
                    d: "m6 9 6 6 6-6",
                    key: "qrunsl"
                }]
            ])
        },
        93518: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("chevron-left", [
                ["path", {
                    d: "m15 18-6-6 6-6",
                    key: "1wnfg3"
                }]
            ])
        },
        46967: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("chevron-right", [
                ["path", {
                    d: "m9 18 6-6-6-6",
                    key: "mthhwq"
                }]
            ])
        },
        91902: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("chevron-up", [
                ["path", {
                    d: "m18 15-6-6-6 6",
                    key: "153udz"
                }]
            ])
        },
        16876: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("chevrons-down", [
                ["path", {
                    d: "m7 6 5 5 5-5",
                    key: "1lc07p"
                }],
                ["path", {
                    d: "m7 13 5 5 5-5",
                    key: "1d48rs"
                }]
            ])
        },
        90426: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("circle-question-mark", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
                    key: "1u773s"
                }],
                ["path", {
                    d: "M12 17h.01",
                    key: "p32p05"
                }]
            ])
        },
        33565: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("circle", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }]
            ])
        },
        66889: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("clock", [
                ["path", {
                    d: "M12 6v6l4 2",
                    key: "mmk7yg"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }]
            ])
        },
        42594: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("copyright", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M14.83 14.83a4 4 0 1 1 0-5.66",
                    key: "1i56pz"
                }]
            ])
        },
        25666: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("dna", [
                ["path", {
                    d: "m10 16 1.5 1.5",
                    key: "11lckj"
                }],
                ["path", {
                    d: "m14 8-1.5-1.5",
                    key: "1ohn8i"
                }],
                ["path", {
                    d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",
                    key: "80uv8i"
                }],
                ["path", {
                    d: "m16.5 10.5 1 1",
                    key: "696xn5"
                }],
                ["path", {
                    d: "m17 6-2.891-2.891",
                    key: "xu6p2f"
                }],
                ["path", {
                    d: "M2 15c6.667-6 13.333 0 20-6",
                    key: "1pyr53"
                }],
                ["path", {
                    d: "m20 9 .891.891",
                    key: "3xwk7g"
                }],
                ["path", {
                    d: "M3.109 14.109 4 15",
                    key: "q76aoh"
                }],
                ["path", {
                    d: "m6.5 12.5 1 1",
                    key: "cs35ky"
                }],
                ["path", {
                    d: "m7 18 2.891 2.891",
                    key: "1sisit"
                }],
                ["path", {
                    d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993",
                    key: "q3hbxp"
                }]
            ])
        },
        44857: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("download", [
                ["path", {
                    d: "M12 15V3",
                    key: "m9g1x1"
                }],
                ["path", {
                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
                    key: "ih7n3h"
                }],
                ["path", {
                    d: "m7 10 5 5 5-5",
                    key: "brsn70"
                }]
            ])
        },
        51055: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("ellipsis-vertical", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "1",
                    key: "41hilf"
                }],
                ["circle", {
                    cx: "12",
                    cy: "5",
                    r: "1",
                    key: "gxeob9"
                }],
                ["circle", {
                    cx: "12",
                    cy: "19",
                    r: "1",
                    key: "lyex9k"
                }]
            ])
        },
        35765: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("external-link", [
                ["path", {
                    d: "M15 3h6v6",
                    key: "1q9fwt"
                }],
                ["path", {
                    d: "M10 14 21 3",
                    key: "gplh6r"
                }],
                ["path", {
                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
                    key: "a6xqqp"
                }]
            ])
        },
        45525: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("funnel", [
                ["path", {
                    d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
                    key: "sc7q7i"
                }]
            ])
        },
        20591: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("heart", [
                ["path", {
                    d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
                    key: "mvr1a0"
                }]
            ])
        },
        48617: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("info", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M12 16v-4",
                    key: "1dtifu"
                }],
                ["path", {
                    d: "M12 8h.01",
                    key: "e9boi3"
                }]
            ])
        },
        54113: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("link", [
                ["path", {
                    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
                    key: "1cjeqo"
                }],
                ["path", {
                    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
                    key: "19qd67"
                }]
            ])
        },
        28701: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("list", [
                ["path", {
                    d: "M3 5h.01",
                    key: "18ugdj"
                }],
                ["path", {
                    d: "M3 12h.01",
                    key: "nlz23k"
                }],
                ["path", {
                    d: "M3 19h.01",
                    key: "noohij"
                }],
                ["path", {
                    d: "M8 5h13",
                    key: "1pao27"
                }],
                ["path", {
                    d: "M8 12h13",
                    key: "1za7za"
                }],
                ["path", {
                    d: "M8 19h13",
                    key: "m83p4d"
                }]
            ])
        },
        44504: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("maximize-2", [
                ["path", {
                    d: "M15 3h6v6",
                    key: "1q9fwt"
                }],
                ["path", {
                    d: "m21 3-7 7",
                    key: "1l2asr"
                }],
                ["path", {
                    d: "m3 21 7-7",
                    key: "tjx5ai"
                }],
                ["path", {
                    d: "M9 21H3v-6",
                    key: "wtvkvv"
                }]
            ])
        },
        86710: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("menu", [
                ["path", {
                    d: "M4 5h16",
                    key: "1tepv9"
                }],
                ["path", {
                    d: "M4 12h16",
                    key: "1lakjw"
                }],
                ["path", {
                    d: "M4 19h16",
                    key: "1djgab"
                }]
            ])
        },
        36527: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("minus", [
                ["path", {
                    d: "M5 12h14",
                    key: "1ays0h"
                }]
            ])
        },
        79928: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("palette", [
                ["path", {
                    d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
                    key: "e79jfc"
                }],
                ["circle", {
                    cx: "13.5",
                    cy: "6.5",
                    r: ".5",
                    fill: "currentColor",
                    key: "1okk4w"
                }],
                ["circle", {
                    cx: "17.5",
                    cy: "10.5",
                    r: ".5",
                    fill: "currentColor",
                    key: "f64h9f"
                }],
                ["circle", {
                    cx: "6.5",
                    cy: "12.5",
                    r: ".5",
                    fill: "currentColor",
                    key: "qy21gx"
                }],
                ["circle", {
                    cx: "8.5",
                    cy: "7.5",
                    r: ".5",
                    fill: "currentColor",
                    key: "fotxhn"
                }]
            ])
        },
        33473: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("plus", [
                ["path", {
                    d: "M5 12h14",
                    key: "1ays0h"
                }],
                ["path", {
                    d: "M12 5v14",
                    key: "s699le"
                }]
            ])
        },
        81556: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("rotate-ccw", [
                ["path", {
                    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
                    key: "1357e3"
                }],
                ["path", {
                    d: "M3 3v5h5",
                    key: "1xhq8a"
                }]
            ])
        },
        20853: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("search", [
                ["path", {
                    d: "m21 21-4.34-4.34",
                    key: "14j7rj"
                }],
                ["circle", {
                    cx: "11",
                    cy: "11",
                    r: "8",
                    key: "4ej97u"
                }]
            ])
        },
        42640: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("shield", [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                    key: "oel41y"
                }]
            ])
        },
        36954: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("smartphone", [
                ["rect", {
                    width: "14",
                    height: "20",
                    x: "5",
                    y: "2",
                    rx: "2",
                    ry: "2",
                    key: "1yt0o3"
                }],
                ["path", {
                    d: "M12 18h.01",
                    key: "mhygvu"
                }]
            ])
        },
        45471: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("tag", [
                ["path", {
                    d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
                    key: "vktsd0"
                }],
                ["circle", {
                    cx: "7.5",
                    cy: "7.5",
                    r: ".5",
                    fill: "currentColor",
                    key: "kqv944"
                }]
            ])
        },
        52846: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("timer-off", [
                ["path", {
                    d: "M10 2h4",
                    key: "n1abiw"
                }],
                ["path", {
                    d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",
                    key: "10he05"
                }],
                ["path", {
                    d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",
                    key: "15f7sh"
                }],
                ["path", {
                    d: "m2 2 20 20",
                    key: "1ooewy"
                }],
                ["path", {
                    d: "M12 12v-2",
                    key: "fwoke6"
                }]
            ])
        },
        1466: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("user", [
                ["path", {
                    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
                    key: "975kel"
                }],
                ["circle", {
                    cx: "12",
                    cy: "7",
                    r: "4",
                    key: "17ys0d"
                }]
            ])
        },
        45220: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("volume-2", [
                ["path", {
                    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
                    key: "uqj9uw"
                }],
                ["path", {
                    d: "M16 9a5 5 0 0 1 0 6",
                    key: "1q6k2b"
                }],
                ["path", {
                    d: "M19.364 18.364a9 9 0 0 0 0-12.728",
                    key: "ijwkga"
                }]
            ])
        },
        60650: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("volume-x", [
                ["path", {
                    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
                    key: "uqj9uw"
                }],
                ["line", {
                    x1: "22",
                    x2: "16",
                    y1: "9",
                    y2: "15",
                    key: "1ewh16"
                }],
                ["line", {
                    x1: "16",
                    x2: "22",
                    y1: "9",
                    y2: "15",
                    key: "5ykzw1"
                }]
            ])
        },
        40767: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            let n = (0, r(67401).A)("x", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        77711: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => o.a
            });
            var n = r(21956),
                o = r.n(n)
        },
        5565: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => o.a
            });
            var n = r(4146),
                o = r.n(n)
        },
        87970: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return w
                }
            });
            let n = r(60306),
                o = r(29955),
                i = r(95155),
                a = o._(r(12115)),
                s = n._(r(47650)),
                l = n._(r(36107)),
                u = r(40666),
                d = r(41159),
                c = r(83621);
            r(42363);
            let f = r(63576),
                p = n._(r(65514)),
                h = r(45353),
                m = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                };

            function v(e, t, r, n, o, i, a) {
                let s = null == e ? void 0 : e.src;
                e && e["data-loaded-src"] !== s && (e["data-loaded-src"] = s, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && o(!0), null == r ? void 0 : r.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let n = !1,
                                o = !1;
                            r.current({ ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => o,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    o = !0, t.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(e)
                    }
                }))
            }

            function g(e) {
                return a.use ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
            let y = (0, a.forwardRef)((e, t) => {
                let {
                    src: r,
                    srcSet: n,
                    sizes: o,
                    height: s,
                    width: l,
                    decoding: u,
                    className: d,
                    style: c,
                    fetchPriority: f,
                    placeholder: p,
                    loading: m,
                    unoptimized: y,
                    fill: b,
                    onLoadRef: w,
                    onLoadingCompleteRef: x,
                    setBlurComplete: E,
                    setShowAltText: S,
                    sizesInput: T,
                    onLoad: P,
                    onError: k,
                    ...C
                } = e, M = (0, a.useCallback)(e => {
                    e && (k && (e.src = e.src), e.complete && v(e, p, w, x, E, y, T))
                }, [r, p, w, x, E, k, y, T]), A = (0, h.useMergedRef)(t, M);
                return (0, i.jsx)("img", { ...C,
                    ...g(f),
                    loading: m,
                    width: l,
                    height: s,
                    decoding: u,
                    "data-nimg": b ? "fill" : "1",
                    className: d,
                    style: c,
                    sizes: o,
                    srcSet: n,
                    src: r,
                    ref: A,
                    onLoad: e => {
                        v(e.currentTarget, p, w, x, E, y, T)
                    },
                    onError: e => {
                        S(!0), "empty" !== p && E(!0), k && k(e)
                    }
                })
            });

            function b(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: r
                } = e, n = {
                    as: "image",
                    imageSrcSet: r.srcSet,
                    imageSizes: r.sizes,
                    crossOrigin: r.crossOrigin,
                    referrerPolicy: r.referrerPolicy,
                    ...g(r.fetchPriority)
                };
                return t && s.default.preload ? (s.default.preload(r.src, n), null) : (0, i.jsx)(l.default, {
                    children: (0, i.jsx)("link", {
                        rel: "preload",
                        href: r.srcSet ? void 0 : r.src,
                        ...n
                    }, "__nimg-" + r.src + r.srcSet + r.sizes)
                })
            }
            let w = (0, a.forwardRef)((e, t) => {
                let r = (0, a.useContext)(f.RouterContext),
                    n = (0, a.useContext)(c.ImageConfigContext),
                    o = (0, a.useMemo)(() => {
                        let e = m || n || d.imageConfigDefault,
                            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                            r = e.deviceSizes.sort((e, t) => e - t);
                        return { ...e,
                            allSizes: t,
                            deviceSizes: r
                        }
                    }, [n]),
                    {
                        onLoad: s,
                        onLoadingComplete: l
                    } = e,
                    h = (0, a.useRef)(s);
                (0, a.useEffect)(() => {
                    h.current = s
                }, [s]);
                let v = (0, a.useRef)(l);
                (0, a.useEffect)(() => {
                    v.current = l
                }, [l]);
                let [g, w] = (0, a.useState)(!1), [x, E] = (0, a.useState)(!1), {
                    props: S,
                    meta: T
                } = (0, u.getImgProps)(e, {
                    defaultLoader: p.default,
                    imgConf: o,
                    blurComplete: g,
                    showAltText: x
                });
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(y, { ...S,
                        unoptimized: T.unoptimized,
                        placeholder: T.placeholder,
                        fill: T.fill,
                        onLoadRef: h,
                        onLoadingCompleteRef: v,
                        setBlurComplete: w,
                        setShowAltText: E,
                        sizesInput: e.sizes,
                        ref: t
                    }), T.priority ? (0, i.jsx)(b, {
                        isAppRouter: !r,
                        imgAttributes: S
                    }) : null]
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        76562: () => {},
        53003: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(60306)._(r(12115)).default.createContext({})
        },
        675: (e, t) => {
            "use strict";

            function r(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: r = !1,
                    hasQuery: n = !1
                } = void 0 === e ? {} : e;
                return t || r && n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        21956: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(60306)._(r(30580));

            function o(e, t) {
                var r;
                let o = {};
                "function" == typeof e && (o.loader = e);
                let i = { ...o,
                    ...t
                };
                return (0, n.default)({ ...i,
                    modules: null == (r = i.loadableGenerated) ? void 0 : r.modules
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        40666: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return s
                }
            }), r(42363);
            let n = r(35859),
                o = r(41159);

            function i(e) {
                return void 0 !== e.default
            }

            function a(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function s(e, t) {
                var r;
                let s, l, u, {
                        src: d,
                        sizes: c,
                        unoptimized: f = !1,
                        priority: p = !1,
                        loading: h,
                        className: m,
                        quality: v,
                        width: g,
                        height: y,
                        fill: b = !1,
                        style: w,
                        overrideSrc: x,
                        onLoad: E,
                        onLoadingComplete: S,
                        placeholder: T = "empty",
                        blurDataURL: P,
                        fetchPriority: k,
                        decoding: C = "async",
                        layout: M,
                        objectFit: A,
                        objectPosition: j,
                        lazyBoundary: R,
                        lazyRoot: D,
                        ...L
                    } = e,
                    {
                        imgConf: O,
                        showAltText: N,
                        blurComplete: _,
                        defaultLoader: I
                    } = t,
                    F = O || o.imageConfigDefault;
                if ("allSizes" in F) s = F;
                else {
                    let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
                        t = F.deviceSizes.sort((e, t) => e - t);
                    s = { ...F,
                        allSizes: e,
                        deviceSizes: t
                    }
                }
                if (void 0 === I) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let V = L.loader || I;
                delete L.loader, delete L.srcSet;
                let B = "__next_img_default" in V;
                if (B) {
                    if ("custom" === s.loader) throw Error('Image with src "' + d + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let e = V;
                    V = t => {
                        let {
                            config: r,
                            ...n
                        } = t;
                        return e(n)
                    }
                }
                if (M) {
                    "fill" === M && (b = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[M];
                    e && (w = { ...w,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[M];
                    t && !c && (c = t)
                }
                let z = "",
                    W = a(g),
                    U = a(y);
                if ((r = d) && "object" == typeof r && (i(r) || void 0 !== r.src)) {
                    let e = i(d) ? d.default : d;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                    if (l = e.blurWidth, u = e.blurHeight, P = P || e.blurDataURL, z = e.src, !b) {
                        if (W || U) {
                            if (W && !U) {
                                let t = W / e.width;
                                U = Math.round(e.height * t)
                            } else if (!W && U) {
                                let t = U / e.height;
                                W = Math.round(e.width * t)
                            }
                        } else W = e.width, U = e.height
                    }
                }
                let H = !p && ("lazy" === h || void 0 === h);
                (!(d = "string" == typeof d ? d : z) || d.startsWith("data:") || d.startsWith("blob:")) && (f = !0, H = !1), s.unoptimized && (f = !0), B && !s.dangerouslyAllowSVG && d.split("?", 1)[0].endsWith(".svg") && (f = !0);
                let $ = a(v),
                    G = Object.assign(b ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: A,
                        objectPosition: j
                    } : {}, N ? {} : {
                        color: "transparent"
                    }, w),
                    K = _ || "empty" === T ? null : "blur" === T ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: W,
                        heightInt: U,
                        blurWidth: l,
                        blurHeight: u,
                        blurDataURL: P || "",
                        objectFit: G.objectFit
                    }) + '")' : 'url("' + T + '")',
                    X = K ? {
                        backgroundSize: G.objectFit || "cover",
                        backgroundPosition: G.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: K
                    } : {},
                    Y = function(e) {
                        let {
                            config: t,
                            src: r,
                            unoptimized: n,
                            width: o,
                            quality: i,
                            sizes: a,
                            loader: s
                        } = e;
                        if (n) return {
                            src: r,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: u
                        } = function(e, t, r) {
                            let {
                                deviceSizes: n,
                                allSizes: o
                            } = e;
                            if (r) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let n; n = e.exec(r); n) t.push(parseInt(n[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: o.filter(t => t >= n[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: o,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof t ? {
                                widths: n,
                                kind: "w"
                            } : {
                                widths: [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))],
                                kind: "x"
                            }
                        }(t, o, a), d = l.length - 1;
                        return {
                            sizes: a || "w" !== u ? a : "100vw",
                            srcSet: l.map((e, n) => s({
                                config: t,
                                src: r,
                                quality: i,
                                width: e
                            }) + " " + ("w" === u ? e : n + 1) + u).join(", "),
                            src: s({
                                config: t,
                                src: r,
                                quality: i,
                                width: l[d]
                            })
                        }
                    }({
                        config: s,
                        src: d,
                        unoptimized: f,
                        width: W,
                        quality: $,
                        sizes: c,
                        loader: V
                    });
                return {
                    props: { ...L,
                        loading: H ? "lazy" : h,
                        fetchPriority: k,
                        width: W,
                        height: U,
                        decoding: C,
                        className: m,
                        style: { ...G,
                            ...X
                        },
                        sizes: Y.sizes,
                        srcSet: Y.srcSet,
                        src: x || Y.src
                    },
                    meta: {
                        unoptimized: f,
                        priority: p,
                        placeholder: T,
                        fill: b
                    }
                }
            }
        },
        36107: (e, t, r) => {
            "use strict";
            var n = r(2818);
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    default: function() {
                        return v
                    },
                    defaultHead: function() {
                        return f
                    }
                });
            let o = r(60306),
                i = r(29955),
                a = r(95155),
                s = i._(r(12115)),
                l = o._(r(31172)),
                u = r(53003),
                d = r(81147),
                c = r(675);

            function f(e) {
                void 0 === e && (e = !1);
                let t = [(0, a.jsx)("meta", {
                    charSet: "utf-8"
                }, "charset")];
                return e || t.push((0, a.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                }, "viewport")), t
            }

            function p(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === s.default.Fragment ? e.concat(s.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            r(42363);
            let h = ["name", "httpEquiv", "charSet", "itemProp"];

            function m(e, t) {
                let {
                    inAmpMode: r
                } = t;
                return e.reduce(p, []).reverse().concat(f(r).reverse()).filter(function() {
                    let e = new Set,
                        t = new Set,
                        r = new Set,
                        n = {};
                    return o => {
                        let i = !0,
                            a = !1;
                        if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                            a = !0;
                            let t = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(t) ? i = !1 : e.add(t)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                t.has(o.type) ? i = !1 : t.add(o.type);
                                break;
                            case "meta":
                                for (let e = 0, t = h.length; e < t; e++) {
                                    let t = h[e];
                                    if (o.props.hasOwnProperty(t)) {
                                        if ("charSet" === t) r.has(t) ? i = !1 : r.add(t);
                                        else {
                                            let e = o.props[t],
                                                r = n[t] || new Set;
                                            ("name" !== t || !a) && r.has(e) ? i = !1 : (r.add(e), n[t] = r)
                                        }
                                    }
                                }
                        }
                        return i
                    }
                }()).reverse().map((e, t) => {
                    let o = e.key || t;
                    if (n.env.__NEXT_OPTIMIZE_FONTS && !r && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = { ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, s.default.cloneElement(e, t)
                    }
                    return s.default.cloneElement(e, {
                        key: o
                    })
                })
            }
            let v = function(e) {
                let {
                    children: t
                } = e, r = (0, s.useContext)(u.AmpStateContext), n = (0, s.useContext)(d.HeadManagerContext);
                return (0, a.jsx)(l.default, {
                    reduceComponentsToState: m,
                    headManager: n,
                    inAmpMode: (0, c.isInAmpMode)(r),
                    children: t
                })
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        35859: (e, t) => {
            "use strict";

            function r(e) {
                let {
                    widthInt: t,
                    heightInt: r,
                    blurWidth: n,
                    blurHeight: o,
                    blurDataURL: i,
                    objectFit: a
                } = e, s = n ? 40 * n : t, l = o ? 40 * o : r, u = s && l ? "viewBox='0 0 " + s + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + i + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        83621: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = r(60306)._(r(12115)),
                o = r(41159),
                i = n.default.createContext(o.imageConfigDefault)
        },
        41159: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    VALID_LOADERS: function() {
                        return r
                    },
                    imageConfigDefault: function() {
                        return n
                    }
                });
            let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
                n = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "attachment",
                    localPatterns: void 0,
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        4146: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    default: function() {
                        return l
                    },
                    getImageProps: function() {
                        return s
                    }
                });
            let n = r(60306),
                o = r(40666),
                i = r(87970),
                a = n._(r(65514));

            function s(e) {
                let {
                    props: t
                } = (0, o.getImgProps)(e, {
                    defaultLoader: a.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !0
                    }
                });
                for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                return {
                    props: t
                }
            }
            let l = i.Image
        },
        65514: (e, t) => {
            "use strict";

            function r(e) {
                let {
                    config: t,
                    src: r,
                    width: n,
                    quality: o
                } = e;
                return t.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (o || 75) + (r.startsWith("/_next/static/media/"), "")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r.__next_img_default = !0;
            let n = r
        },
        39827: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(93719);

            function o(e) {
                let {
                    reason: t,
                    children: r
                } = e;
                if ("undefined" == typeof window) throw new n.BailoutToCSRError(t);
                return r
            }
        },
        30580: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let n = r(95155),
                o = r(12115),
                i = r(39827),
                a = r(79214);

            function s(e) {
                return {
                    default: e && "default" in e ? e.default : e
                }
            }
            let l = {
                    loader: () => Promise.resolve(s(() => null)),
                    loading: null,
                    ssr: !0
                },
                u = function(e) {
                    let t = { ...l,
                            ...e
                        },
                        r = (0, o.lazy)(() => t.loader().then(s)),
                        u = t.loading;

                    function d(e) {
                        let s = u ? (0, n.jsx)(u, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }) : null,
                            l = !t.ssr || !!t.loading,
                            d = l ? o.Suspense : o.Fragment,
                            c = t.ssr ? (0, n.jsxs)(n.Fragment, {
                                children: ["undefined" == typeof window ? (0, n.jsx)(a.PreloadChunks, {
                                    moduleIds: t.modules
                                }) : null, (0, n.jsx)(r, { ...e
                                })]
                            }) : (0, n.jsx)(i.BailoutToCSR, {
                                reason: "next/dynamic",
                                children: (0, n.jsx)(r, { ...e
                                })
                            });
                        return (0, n.jsx)(d, { ...l ? {
                                fallback: s
                            } : {},
                            children: c
                        })
                    }
                    return d.displayName = "LoadableComponent", d
                }
        },
        79214: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadChunks", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = r(95155),
                o = r(47650),
                i = r(75861),
                a = r(18284);

            function s(e) {
                let {
                    moduleIds: t
                } = e;
                if ("undefined" != typeof window) return null;
                let r = i.workAsyncStorage.getStore();
                if (void 0 === r) return null;
                let s = [];
                if (r.reactLoadableManifest && t) {
                    let e = r.reactLoadableManifest;
                    for (let r of t) {
                        if (!e[r]) continue;
                        let t = e[r].files;
                        s.push(...t)
                    }
                }
                return 0 === s.length ? null : (0, n.jsx)(n.Fragment, {
                    children: s.map(e => {
                        let t = r.assetPrefix + "/_next/" + (0, a.encodeURIPath)(e);
                        return e.endsWith(".css") ? (0, n.jsx)("link", {
                            precedence: "dynamic",
                            href: t,
                            rel: "stylesheet",
                            as: "style"
                        }, e) : ((0, o.preload)(t, {
                            as: "script",
                            fetchPriority: "low"
                        }), null)
                    })
                })
            }
        },
        63576: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(60306)._(r(12115)).default.createContext(null)
        },
        31172: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = r(12115),
                o = "undefined" == typeof window,
                i = o ? () => {} : n.useLayoutEffect,
                a = o ? () => {} : n.useEffect;

            function s(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: r
                } = e;

                function s() {
                    if (t && t.mountedInstances) {
                        let o = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(r(o, e))
                    }
                }
                if (o) {
                    var l;
                    null == t || null == (l = t.mountedInstances) || l.add(e.children), s()
                }
                return i(() => {
                    var r;
                    return null == t || null == (r = t.mountedInstances) || r.add(e.children), () => {
                        var r;
                        null == t || null == (r = t.mountedInstances) || r.delete(e.children)
                    }
                }), i(() => (t && (t._pendingUpdate = s), () => {
                    t && (t._pendingUpdate = s)
                })), a(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        75434: (e, t, r) => {
            "use strict";
            var n = r(2818);
            r(76562);
            var o = r(12115),
                i = function(e) {
                    return e && "object" == typeof e && "default" in e ? e : {
                        default: e
                    }
                }(o),
                a = void 0 !== n && n.env && !0,
                s = function(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                },
                l = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            r = t.name,
                            n = void 0 === r ? "stylesheet" : r,
                            o = t.optimizeForSpeed,
                            i = void 0 === o ? a : o;
                        u(s(n), "`name` must be a string"), this._name = n, this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}", u("boolean" == typeof i, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = i, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                        var l = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
                        this._nonce = l ? l.getAttribute("content") : null
                    }
                    var t = e.prototype;
                    return t.setOptimizeForSpeed = function(e) {
                            u("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), u(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                        }, t.isOptimizeForSpeed = function() {
                            return this._optimizeForSpeed
                        }, t.inject = function() {
                            var e = this;
                            if (u(!this._injected, "sheet already injected"), this._injected = !0, "undefined" != typeof window && this._optimizeForSpeed) {
                                this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (a || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                                return
                            }
                            this._serverSheet = {
                                cssRules: [],
                                insertRule: function(t, r) {
                                    return "number" == typeof r ? e._serverSheet.cssRules[r] = {
                                        cssText: t
                                    } : e._serverSheet.cssRules.push({
                                        cssText: t
                                    }), r
                                },
                                deleteRule: function(t) {
                                    e._serverSheet.cssRules[t] = null
                                }
                            }
                        }, t.getSheetForTag = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++)
                                if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                        }, t.getSheet = function() {
                            return this.getSheetForTag(this._tags[this._tags.length - 1])
                        }, t.insertRule = function(e, t) {
                            if (u(s(e), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                            if (this._optimizeForSpeed) {
                                var r = this.getSheet();
                                "number" != typeof t && (t = r.cssRules.length);
                                try {
                                    r.insertRule(e, t)
                                } catch (t) {
                                    return a || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                                }
                            } else {
                                var n = this._tags[t];
                                this._tags.push(this.makeStyleTag(this._name, e, n))
                            }
                            return this._rulesCount++
                        }, t.replaceRule = function(e, t) {
                            if (this._optimizeForSpeed || "undefined" == typeof window) {
                                var r = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                                if (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e]) return e;
                                r.deleteRule(e);
                                try {
                                    r.insertRule(t, e)
                                } catch (n) {
                                    a || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), r.insertRule(this._deletedRulePlaceholder, e)
                                }
                            } else {
                                var n = this._tags[e];
                                u(n, "old rule at index `" + e + "` not found"), n.textContent = t
                            }
                            return e
                        }, t.deleteRule = function(e) {
                            if ("undefined" == typeof window) {
                                this._serverSheet.deleteRule(e);
                                return
                            }
                            if (this._optimizeForSpeed) this.replaceRule(e, "");
                            else {
                                var t = this._tags[e];
                                u(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                            }
                        }, t.flush = function() {
                            this._injected = !1, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(e) {
                                return e && e.parentNode.removeChild(e)
                            }), this._tags = []) : this._serverSheet.cssRules = []
                        }, t.cssRules = function() {
                            var e = this;
                            return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, r) {
                                return r ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules, function(t) {
                                    return t.cssText === e._deletedRulePlaceholder ? null : t
                                })) : t.push(null), t
                            }, [])
                        }, t.makeStyleTag = function(e, t, r) {
                            t && u(s(t), "makeStyleTag accepts only strings as second parameter");
                            var n = document.createElement("style");
                            this._nonce && n.setAttribute("nonce", this._nonce), n.type = "text/css", n.setAttribute("data-" + e, ""), t && n.appendChild(document.createTextNode(t));
                            var o = document.head || document.getElementsByTagName("head")[0];
                            return r ? o.insertBefore(n, r) : o.appendChild(n), n
                        },
                        function(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }(e.prototype, [{
                            key: "length",
                            get: function() {
                                return this._rulesCount
                            }
                        }]), e
                }();

            function u(e, t) {
                if (!e) throw Error("StyleSheet: " + t + ".")
            }
            var d = function(e) {
                    for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
                    return t >>> 0
                },
                c = {};

            function f(e, t) {
                if (!t) return "jsx-" + e;
                var r = String(t),
                    n = e + r;
                return c[n] || (c[n] = "jsx-" + d(e + "-" + r)), c[n]
            }

            function p(e, t) {
                "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
                var r = e + t;
                return c[r] || (c[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), c[r]
            }
            var h = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            r = t.styleSheet,
                            n = void 0 === r ? null : r,
                            o = t.optimizeForSpeed,
                            i = void 0 !== o && o;
                        this._sheet = n || new l({
                            name: "styled-jsx",
                            optimizeForSpeed: i
                        }), this._sheet.inject(), n && "boolean" == typeof i && (this._sheet.setOptimizeForSpeed(i), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }
                    var t = e.prototype;
                    return t.add = function(e) {
                        var t = this;
                        void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                            return e[t] = 0, e
                        }, {}));
                        var r = this.getIdAndRules(e),
                            n = r.styleId,
                            o = r.rules;
                        if (n in this._instancesCounts) {
                            this._instancesCounts[n] += 1;
                            return
                        }
                        var i = o.map(function(e) {
                            return t._sheet.insertRule(e)
                        }).filter(function(e) {
                            return -1 !== e
                        });
                        this._indices[n] = i, this._instancesCounts[n] = 1
                    }, t.remove = function(e) {
                        var t = this,
                            r = this.getIdAndRules(e).styleId;
                        if (function(e, t) {
                                if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                            }(r in this._instancesCounts, "styleId: `" + r + "` not found"), this._instancesCounts[r] -= 1, this._instancesCounts[r] < 1) {
                            var n = this._fromServer && this._fromServer[r];
                            n ? (n.parentNode.removeChild(n), delete this._fromServer[r]) : (this._indices[r].forEach(function(e) {
                                return t._sheet.deleteRule(e)
                            }), delete this._indices[r]), delete this._instancesCounts[r]
                        }
                    }, t.update = function(e, t) {
                        this.add(t), this.remove(e)
                    }, t.flush = function() {
                        this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }, t.cssRules = function() {
                        var e = this,
                            t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                                return [t, e._fromServer[t]]
                            }) : [],
                            r = this._sheet.cssRules();
                        return t.concat(Object.keys(this._indices).map(function(t) {
                            return [t, e._indices[t].map(function(e) {
                                return r[e].cssText
                            }).join(e._optimizeForSpeed ? "" : "\n")]
                        }).filter(function(e) {
                            return !!e[1]
                        }))
                    }, t.styles = function(e) {
                        var t, r;
                        return t = this.cssRules(), void 0 === (r = e) && (r = {}), t.map(function(e) {
                            var t = e[0],
                                n = e[1];
                            return i.default.createElement("style", {
                                id: "__" + t,
                                key: "__" + t,
                                nonce: r.nonce ? r.nonce : void 0,
                                dangerouslySetInnerHTML: {
                                    __html: n
                                }
                            })
                        })
                    }, t.getIdAndRules = function(e) {
                        var t = e.children,
                            r = e.dynamic,
                            n = e.id;
                        if (r) {
                            var o = f(n, r);
                            return {
                                styleId: o,
                                rules: Array.isArray(t) ? t.map(function(e) {
                                    return p(o, e)
                                }) : [p(o, t)]
                            }
                        }
                        return {
                            styleId: f(n),
                            rules: Array.isArray(t) ? t : [t]
                        }
                    }, t.selectFromServer = function() {
                        return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                            return e[t.id.slice(2)] = t, e
                        }, {})
                    }, e
                }(),
                m = o.createContext(null);
            m.displayName = "StyleSheetContext";
            var v = i.default.useInsertionEffect || i.default.useLayoutEffect,
                g = "undefined" != typeof window ? new h : void 0;

            function y(e) {
                var t = g || o.useContext(m);
                return t && ("undefined" == typeof window ? t.add(e) : v(function() {
                    return t.add(e),
                        function() {
                            t.remove(e)
                        }
                }, [e.id, String(e.dynamic)])), null
            }
            y.dynamic = function(e) {
                return e.map(function(e) {
                    return f(e[0], e[1])
                }).join(" ")
            }, t.style = y
        },
        58803: (e, t, r) => {
            "use strict";
            e.exports = r(75434).style
        },
        50971: (e, t, r) => {
            "use strict";
            r.d(t, {
                T: () => t7
            });
            var n = r(12115);

            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        strict: t = !0,
                        errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
                        name: o
                    } = e,
                    i = n.createContext(void 0);
                return i.displayName = o, [i.Provider, function e() {
                    var o;
                    let a = n.useContext(i);
                    if (!a && t) {
                        let t = Error(r);
                        throw t.name = "ContextError", null == (o = Error.captureStackTrace) || o.call(Error, t, e), t
                    }
                    return a
                }, i]
            }
            var [i, a] = o({
                name: "ButtonGroupContext",
                strict: !1
            }), [s, l] = o({
                name: "ProviderContext",
                strict: !1
            }), u = e => e ? "true" : void 0;

            function d(e) {
                var t;
                return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
            }

            function c(e) {
                var t;
                return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
            }

            function f(e) {
                let t = null;
                return () => (null == t && (t = e()), t)
            }
            let p = f(function() {
                    return c(/^Mac/i)
                }),
                h = f(function() {
                    return c(/^iPhone/i)
                }),
                m = f(function() {
                    return c(/^iPad/i) || p() && navigator.maxTouchPoints > 1
                }),
                v = f(function() {
                    return h() || m()
                });
            f(function() {
                return p() || v()
            });
            let g = f(function() {
                    return d(/AppleWebKit/i) && !y()
                }),
                y = f(function() {
                    return d(/Chrome/i)
                }),
                b = f(function() {
                    return d(/Android/i)
                }),
                w = f(function() {
                    return d(/Firefox/i)
                });

            function x(e) {
                return 0 === e.mozInputSource && !!e.isTrusted || (b() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
            }
            let E = e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
                },
                S = e => e && "window" in e && e.window === e ? e : E(e).defaultView || window,
                T = null,
                P = new Set,
                k = new Map,
                C = !1,
                M = !1,
                A = {
                    Tab: !0,
                    Escape: !0
                };

            function j(e, t) {
                for (let r of P) r(e, t)
            }

            function R(e) {
                C = !0, e.metaKey || !p() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (T = "keyboard", j("keyboard", e))
            }

            function D(e) {
                T = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (C = !0, j("pointer", e))
            }

            function L(e) {
                x(e) && (C = !0, T = "virtual")
            }

            function O(e) {
                e.target !== window && e.target !== document && (C || M || (T = "virtual", j("virtual", e)), C = !1, M = !1)
            }

            function N() {
                C = !1, M = !0
            }

            function _(e) {
                if ("undefined" == typeof window || k.get(S(e))) return;
                let t = S(e),
                    r = E(e),
                    n = t.HTMLElement.prototype.focus;
                t.HTMLElement.prototype.focus = function() {
                    C = !0, n.apply(this, arguments)
                }, r.addEventListener("keydown", R, !0), r.addEventListener("keyup", R, !0), r.addEventListener("click", L, !0), t.addEventListener("focus", O, !0), t.addEventListener("blur", N, !1), "undefined" != typeof PointerEvent ? (r.addEventListener("pointerdown", D, !0), r.addEventListener("pointermove", D, !0), r.addEventListener("pointerup", D, !0)) : (r.addEventListener("mousedown", D, !0), r.addEventListener("mousemove", D, !0), r.addEventListener("mouseup", D, !0)), t.addEventListener("beforeunload", () => {
                    I(e)
                }, {
                    once: !0
                }), k.set(t, {
                    focus: n
                })
            }
            let I = (e, t) => {
                let r = S(e),
                    n = E(e);
                t && n.removeEventListener("DOMContentLoaded", t), k.has(r) && (r.HTMLElement.prototype.focus = k.get(r).focus, n.removeEventListener("keydown", R, !0), n.removeEventListener("keyup", R, !0), n.removeEventListener("click", L, !0), r.removeEventListener("focus", O, !0), r.removeEventListener("blur", N, !1), "undefined" != typeof PointerEvent ? (n.removeEventListener("pointerdown", D, !0), n.removeEventListener("pointermove", D, !0), n.removeEventListener("pointerup", D, !0)) : (n.removeEventListener("mousedown", D, !0), n.removeEventListener("mousemove", D, !0), n.removeEventListener("mouseup", D, !0)), k.delete(r))
            };

            function F() {
                return "pointer" !== T
            }
            "undefined" != typeof document && function(e) {
                let t;
                let r = E(void 0);
                "loading" !== r.readyState ? _(void 0) : (t = () => {
                    _(void 0)
                }, r.addEventListener("DOMContentLoaded", t)), () => I(e, t)
            }();
            let V = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
                B = "undefined" != typeof document ? n.useLayoutEffect : () => {};

            function z(e) {
                let t = (0, n.useRef)(null);
                return B(() => {
                    t.current = e
                }, [e]), (0, n.useCallback)((...e) => {
                    let r = t.current;
                    return null == r ? void 0 : r(...e)
                }, [])
            }
            class W {
                isDefaultPrevented() {
                    return this.nativeEvent.defaultPrevented
                }
                preventDefault() {
                    this.defaultPrevented = !0, this.nativeEvent.preventDefault()
                }
                stopPropagation() {
                    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
                }
                isPropagationStopped() {
                    return !1
                }
                persist() {}
                constructor(e, t) {
                    this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
                }
            }

            function U(e) {
                let t = (0, n.useRef)({
                    isFocused: !1,
                    observer: null
                });
                B(() => {
                    let e = t.current;
                    return () => {
                        e.observer && (e.observer.disconnect(), e.observer = null)
                    }
                }, []);
                let r = z(t => {
                    null == e || e(t)
                });
                return (0, n.useCallback)(e => {
                    if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                        t.current.isFocused = !0;
                        let n = e.target;
                        n.addEventListener("focusout", e => {
                            t.current.isFocused = !1, n.disabled && r(new W("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                        }, {
                            once: !0
                        }), t.current.observer = new MutationObserver(() => {
                            if (t.current.isFocused && n.disabled) {
                                var e;
                                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                                let r = n === document.activeElement ? null : document.activeElement;
                                n.dispatchEvent(new FocusEvent("blur", {
                                    relatedTarget: r
                                })), n.dispatchEvent(new FocusEvent("focusout", {
                                    bubbles: !0,
                                    relatedTarget: r
                                }))
                            }
                        }), t.current.observer.observe(n, {
                            attributes: !0,
                            attributeFilter: ["disabled"]
                        })
                    }
                }, [r])
            }

            function H(e) {
                let {
                    isDisabled: t,
                    onFocus: r,
                    onBlur: o,
                    onFocusChange: i
                } = e, a = (0, n.useCallback)(e => {
                    if (e.target === e.currentTarget) return o && o(e), i && i(!1), !0
                }, [o, i]), s = U(a), l = (0, n.useCallback)(e => {
                    let t = E(e.target);
                    e.target === e.currentTarget && t.activeElement === e.target && (r && r(e), i && i(!0), s(e))
                }, [i, r, s]);
                return {
                    focusProps: {
                        onFocus: !t && (r || i || o) ? l : void 0,
                        onBlur: !t && (o || i) ? a : void 0
                    }
                }
            }

            function $(...e) {
                return (...t) => {
                    for (let r of e) "function" == typeof r && r(...t)
                }
            }
            "undefined" != typeof window && window.document && window.document.createElement;
            let G = new Map;
            var K = r(43463);

            function X(...e) {
                let t = { ...e[0]
                };
                for (let r = 1; r < e.length; r++) {
                    let n = e[r];
                    for (let e in n) {
                        let r = t[e],
                            o = n[e];
                        "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = $(r, o) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof r && "string" == typeof o ? t[e] = (0, K.A)(r, o) : "id" === e && r && o ? t.id = function(e, t) {
                            if (e === t) return e;
                            let r = G.get(e);
                            if (r) return r.forEach(e => e(t)), t;
                            let n = G.get(t);
                            return n ? (n.forEach(t => t(e)), e) : t
                        }(r, o) : t[e] = void 0 !== o ? o : r
                    }
                }
                return t
            }
            "undefined" != typeof window && window.document && window.document.createElement;
            var Y = new Set(["id", "type", "style", "title", "role", "tabIndex", "htmlFor", "width", "height", "abbr", "accept", "acceptCharset", "accessKey", "action", "allowFullScreen", "allowTransparency", "alt", "async", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "challenge", "charset", "checked", "cite", "class", "className", "cols", "colSpan", "command", "content", "contentEditable", "contextMenu", "controls", "coords", "crossOrigin", "data", "dateTime", "default", "defer", "dir", "disabled", "download", "draggable", "dropzone", "encType", "enterKeyHint", "for", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "headers", "hidden", "high", "href", "hrefLang", "httpEquiv", "icon", "inputMode", "isMap", "itemId", "itemProp", "itemRef", "itemScope", "itemType", "kind", "label", "lang", "list", "loop", "manifest", "max", "maxLength", "media", "mediaGroup", "method", "min", "minLength", "multiple", "muted", "name", "noValidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "radioGroup", "referrerPolicy", "readOnly", "rel", "required", "rows", "rowSpan", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "slot", "sortable", "span", "spellCheck", "src", "srcDoc", "srcSet", "start", "step", "target", "translate", "typeMustMatch", "useMap", "value", "wmode", "wrap"]),
                q = new Set(["onCopy", "onCut", "onPaste", "onLoad", "onError", "onWheel", "onScroll", "onCompositionEnd", "onCompositionStart", "onCompositionUpdate", "onKeyDown", "onKeyPress", "onKeyUp", "onFocus", "onBlur", "onChange", "onInput", "onSubmit", "onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onPointerDown", "onPointerEnter", "onPointerLeave", "onPointerUp", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd"]),
                Q = /^(data-.*)$/,
                Z = /^(aria-.*)$/,
                J = /^(on[A-Z].*)$/;

            function ee(e, t = {}) {
                let {
                    labelable: r = !0,
                    enabled: n = !0,
                    propNames: o,
                    omitPropNames: i,
                    omitEventNames: a,
                    omitDataProps: s,
                    omitEventProps: l
                } = t, u = {};
                if (!n) return e;
                for (let t in e) !((null == i ? void 0 : i.has(t)) || (null == a ? void 0 : a.has(t)) && J.test(t) || J.test(t) && !q.has(t) || s && Q.test(t) || l && J.test(t)) && (Object.prototype.hasOwnProperty.call(e, t) && (Y.has(t) || r && Z.test(t) || (null == o ? void 0 : o.has(t)) || Q.test(t)) || J.test(t)) && (u[t] = e[t]);
                return u
            }
            var et = {
                    solid: {
                        default: "bg-default text-default-foreground",
                        primary: "bg-primary text-primary-foreground",
                        secondary: "bg-secondary text-secondary-foreground",
                        success: "bg-success text-success-foreground",
                        warning: "bg-warning text-warning-foreground",
                        danger: "bg-danger text-danger-foreground",
                        foreground: "bg-foreground text-background"
                    },
                    shadow: {
                        default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
                        primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
                        secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
                        success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
                        warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
                        danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
                        foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background"
                    },
                    bordered: {
                        default: "bg-transparent border-default text-foreground",
                        primary: "bg-transparent border-primary text-primary",
                        secondary: "bg-transparent border-secondary text-secondary",
                        success: "bg-transparent border-success text-success",
                        warning: "bg-transparent border-warning text-warning",
                        danger: "bg-transparent border-danger text-danger",
                        foreground: "bg-transparent border-foreground text-foreground"
                    },
                    flat: {
                        default: "bg-default/40 text-default-700",
                        primary: "bg-primary/20 text-primary-600",
                        secondary: "bg-secondary/20 text-secondary-600",
                        success: "bg-success/20 text-success-700 dark:text-success",
                        warning: "bg-warning/20 text-warning-700 dark:text-warning",
                        danger: "bg-danger/20 text-danger-600 dark:text-danger-500",
                        foreground: "bg-foreground/10 text-foreground"
                    },
                    faded: {
                        default: "border-default bg-default-100 text-default-foreground",
                        primary: "border-default bg-default-100 text-primary",
                        secondary: "border-default bg-default-100 text-secondary",
                        success: "border-default bg-default-100 text-success",
                        warning: "border-default bg-default-100 text-warning",
                        danger: "border-default bg-default-100 text-danger",
                        foreground: "border-default bg-default-100 text-foreground"
                    },
                    light: {
                        default: "bg-transparent text-default-foreground",
                        primary: "bg-transparent text-primary",
                        secondary: "bg-transparent text-secondary",
                        success: "bg-transparent text-success",
                        warning: "bg-transparent text-warning",
                        danger: "bg-transparent text-danger",
                        foreground: "bg-transparent text-foreground"
                    },
                    ghost: {
                        default: "border-default text-default-foreground",
                        primary: "border-primary text-primary",
                        secondary: "border-secondary text-secondary",
                        success: "border-success text-success",
                        warning: "border-warning text-warning",
                        danger: "border-danger text-danger",
                        foreground: "border-foreground text-foreground hover:!bg-foreground"
                    }
                },
                er = ["small", "medium", "large"],
                en = {
                    theme: {
                        opacity: ["disabled"],
                        spacing: ["divider"],
                        borderWidth: er,
                        borderRadius: er
                    },
                    classGroups: {
                        shadow: [{
                            shadow: er
                        }],
                        "font-size": [{
                            text: ["tiny", ...er]
                        }],
                        "bg-image": ["bg-stripe-gradient-default", "bg-stripe-gradient-primary", "bg-stripe-gradient-secondary", "bg-stripe-gradient-success", "bg-stripe-gradient-warning", "bg-stripe-gradient-danger"]
                    }
                },
                eo = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
                ei = e => !e || "object" != typeof e || 0 === Object.keys(e).length,
                ea = (e, t) => JSON.stringify(e) === JSON.stringify(t);

            function es(e) {
                let t = [];
                return function e(t, r) {
                    t.forEach(function(t) {
                        Array.isArray(t) ? e(t, r) : r.push(t)
                    })
                }(e, t), t
            }
            var el = (...e) => es(e).filter(Boolean),
                eu = (e, t) => {
                    let r = {},
                        n = Object.keys(e),
                        o = Object.keys(t);
                    for (let i of n)
                        if (o.includes(i)) {
                            let n = e[i],
                                o = t[i];
                            "object" == typeof n && "object" == typeof o ? r[i] = eu(n, o) : Array.isArray(n) || Array.isArray(o) ? r[i] = el(o, n) : r[i] = o + " " + n
                        } else r[i] = e[i];
                    for (let e of o) n.includes(e) || (r[e] = t[e]);
                    return r
                },
                ed = e => e && "string" == typeof e ? e.replace(/\s+/g, " ").trim() : e,
                ec = /^\[(.+)\]$/;

            function ef(e, t) {
                var r = e;
                return t.split("-").forEach(function(e) {
                    r.nextPart.has(e) || r.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), r = r.nextPart.get(e)
                }), r
            }
            var ep = /\s+/;

            function eh() {
                for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
                    if ("string" == typeof t) return t;
                    for (var r, n = "", o = 0; o < t.length; o++) t[o] && (r = e(t[o])) && (n && (n += " "), n += r);
                    return n
                }(e)) && (n && (n += " "), n += t);
                return n
            }

            function em() {
                for (var e, t, r, n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                var a = function(n) {
                    var i = o[0];
                    return t = (e = function(e) {
                        var t, r, n, o, i, a, s, l, u, d, c;
                        return {
                            cache: function(e) {
                                if (e < 1) return {
                                    get: function() {},
                                    set: function() {}
                                };
                                var t = 0,
                                    r = new Map,
                                    n = new Map;

                                function o(o, i) {
                                    r.set(o, i), ++t > e && (t = 0, n = r, r = new Map)
                                }
                                return {
                                    get: function(e) {
                                        var t = r.get(e);
                                        return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t), t) : void 0
                                    },
                                    set: function(e, t) {
                                        r.has(e) ? r.set(e, t) : o(e, t)
                                    }
                                }
                            }(e.cacheSize),
                            splitModifiers: (r = 1 === (t = e.separator || ":").length, n = t[0], o = t.length, function(e) {
                                for (var i, a = [], s = 0, l = 0, u = 0; u < e.length; u++) {
                                    var d = e[u];
                                    if (0 === s) {
                                        if (d === n && (r || e.slice(u, u + o) === t)) {
                                            a.push(e.slice(l, u)), l = u + o;
                                            continue
                                        }
                                        if ("/" === d) {
                                            i = u;
                                            continue
                                        }
                                    }
                                    "[" === d ? s++ : "]" === d && s--
                                }
                                var c = 0 === a.length ? e : e.substring(l),
                                    f = c.startsWith("!"),
                                    p = f ? c.substring(1) : c;
                                return {
                                    modifiers: a,
                                    hasImportantModifier: f,
                                    baseClassName: p,
                                    maybePostfixModifierPosition: i && i > l ? i - l : void 0
                                }
                            }),
                            ...(l = e.theme, u = e.prefix, d = {
                                nextPart: new Map,
                                validators: []
                            }, (c = Object.entries(e.classGroups), u ? c.map(function(e) {
                                return [e[0], e[1].map(function(e) {
                                    return "string" == typeof e ? u + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(function(e) {
                                        return [u + e[0], e[1]]
                                    })) : e
                                })]
                            }) : c).forEach(function(e) {
                                var t = e[0];
                                (function e(t, r, n, o) {
                                    t.forEach(function(t) {
                                        if ("string" == typeof t) {
                                            ("" === t ? r : ef(r, t)).classGroupId = n;
                                            return
                                        }
                                        if ("function" == typeof t) {
                                            if (t.isThemeGetter) {
                                                e(t(o), r, n, o);
                                                return
                                            }
                                            r.validators.push({
                                                validator: t,
                                                classGroupId: n
                                            });
                                            return
                                        }
                                        Object.entries(t).forEach(function(t) {
                                            var i = t[0];
                                            e(t[1], ef(r, i), n, o)
                                        })
                                    })
                                })(e[1], d, t, l)
                            }), i = e.conflictingClassGroups, s = void 0 === (a = e.conflictingClassGroupModifiers) ? {} : a, {
                                getClassGroupId: function(e) {
                                    var t = e.split("-");
                                    return "" === t[0] && 1 !== t.length && t.shift(),
                                        function e(t, r) {
                                            if (0 === t.length) return r.classGroupId;
                                            var n = t[0],
                                                o = r.nextPart.get(n),
                                                i = o ? e(t.slice(1), o) : void 0;
                                            if (i) return i;
                                            if (0 !== r.validators.length) {
                                                var a = t.join("-");
                                                return r.validators.find(function(e) {
                                                    return (0, e.validator)(a)
                                                }) ? .classGroupId
                                            }
                                        }(t, d) || function(e) {
                                            if (ec.test(e)) {
                                                var t = ec.exec(e)[1],
                                                    r = t ? .substring(0, t.indexOf(":"));
                                                if (r) return "arbitrary.." + r
                                            }
                                        }(e)
                                },
                                getConflictingClassGroupIds: function(e, t) {
                                    var r = i[e] || [];
                                    return t && s[e] ? [].concat(r, s[e]) : r
                                }
                            })
                        }
                    }(o.slice(1).reduce(function(e, t) {
                        return t(e)
                    }, i()))).cache.get, r = e.cache.set, a = s, s(n)
                };

                function s(n) {
                    var o, i, a, s, l, u = t(n);
                    if (u) return u;
                    var d = (i = (o = e).splitModifiers, a = o.getClassGroupId, s = o.getConflictingClassGroupIds, l = new Set, n.trim().split(ep).map(function(e) {
                        var t = i(e),
                            r = t.modifiers,
                            n = t.hasImportantModifier,
                            o = t.baseClassName,
                            s = t.maybePostfixModifierPosition,
                            l = a(s ? o.substring(0, s) : o),
                            u = !!s;
                        if (!l) {
                            if (!s || !(l = a(o))) return {
                                isTailwindClass: !1,
                                originalClassName: e
                            };
                            u = !1
                        }
                        var d = (function(e) {
                            if (e.length <= 1) return e;
                            var t = [],
                                r = [];
                            return e.forEach(function(e) {
                                "[" === e[0] ? (t.push.apply(t, r.sort().concat([e])), r = []) : r.push(e)
                            }), t.push.apply(t, r.sort()), t
                        })(r).join(":");
                        return {
                            isTailwindClass: !0,
                            modifierId: n ? d + "!" : d,
                            classGroupId: l,
                            originalClassName: e,
                            hasPostfixModifier: u
                        }
                    }).reverse().filter(function(e) {
                        if (!e.isTailwindClass) return !0;
                        var t = e.modifierId,
                            r = e.classGroupId,
                            n = e.hasPostfixModifier,
                            o = t + r;
                        return !l.has(o) && (l.add(o), s(r, n).forEach(function(e) {
                            return l.add(t + e)
                        }), !0)
                    }).reverse().map(function(e) {
                        return e.originalClassName
                    }).join(" "));
                    return r(n, d), d
                }
                return function() {
                    return a(eh.apply(null, arguments))
                }
            }

            function ev(e) {
                var t = function(t) {
                    return t[e] || []
                };
                return t.isThemeGetter = !0, t
            }
            var eg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                ey = /^\d+\/\d+$/,
                eb = new Set(["px", "full", "screen"]),
                ew = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                ex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                eE = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;

            function eS(e) {
                return eA(e) || eb.has(e) || ey.test(e) || eT(e)
            }

            function eT(e) {
                return e_(e, "length", eI)
            }

            function eP(e) {
                return e_(e, "size", eF)
            }

            function ek(e) {
                return e_(e, "position", eF)
            }

            function eC(e) {
                return e_(e, "url", eV)
            }

            function eM(e) {
                return e_(e, "number", eA)
            }

            function eA(e) {
                return !Number.isNaN(Number(e))
            }

            function ej(e) {
                return e.endsWith("%") && eA(e.slice(0, -1))
            }

            function eR(e) {
                return eB(e) || e_(e, "number", eB)
            }

            function eD(e) {
                return eg.test(e)
            }

            function eL() {
                return !0
            }

            function eO(e) {
                return ew.test(e)
            }

            function eN(e) {
                return e_(e, "", ez)
            }

            function e_(e, t, r) {
                var n = eg.exec(e);
                return !!n && (n[1] ? n[1] === t : r(n[2]))
            }

            function eI(e) {
                return ex.test(e)
            }

            function eF() {
                return !1
            }

            function eV(e) {
                return e.startsWith("url(")
            }

            function eB(e) {
                return Number.isInteger(Number(e))
            }

            function ez(e) {
                return eE.test(e)
            }

            function eW() {
                var e = ev("colors"),
                    t = ev("spacing"),
                    r = ev("blur"),
                    n = ev("brightness"),
                    o = ev("borderColor"),
                    i = ev("borderRadius"),
                    a = ev("borderSpacing"),
                    s = ev("borderWidth"),
                    l = ev("contrast"),
                    u = ev("grayscale"),
                    d = ev("hueRotate"),
                    c = ev("invert"),
                    f = ev("gap"),
                    p = ev("gradientColorStops"),
                    h = ev("gradientColorStopPositions"),
                    m = ev("inset"),
                    v = ev("margin"),
                    g = ev("opacity"),
                    y = ev("padding"),
                    b = ev("saturate"),
                    w = ev("scale"),
                    x = ev("sepia"),
                    E = ev("skew"),
                    S = ev("space"),
                    T = ev("translate"),
                    P = function() {
                        return ["auto", "contain", "none"]
                    },
                    k = function() {
                        return ["auto", "hidden", "clip", "visible", "scroll"]
                    },
                    C = function() {
                        return ["auto", eD, t]
                    },
                    M = function() {
                        return [eD, t]
                    },
                    A = function() {
                        return ["", eS]
                    },
                    j = function() {
                        return ["auto", eA, eD]
                    },
                    R = function() {
                        return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
                    },
                    D = function() {
                        return ["solid", "dashed", "dotted", "double", "none"]
                    },
                    L = function() {
                        return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
                    },
                    O = function() {
                        return ["start", "end", "center", "between", "around", "evenly", "stretch"]
                    },
                    N = function() {
                        return ["", "0", eD]
                    },
                    _ = function() {
                        return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
                    },
                    I = function() {
                        return [eA, eM]
                    },
                    F = function() {
                        return [eA, eD]
                    };
                return {
                    cacheSize: 500,
                    theme: {
                        colors: [eL],
                        spacing: [eS],
                        blur: ["none", "", eO, eD],
                        brightness: I(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", eO, eD],
                        borderSpacing: M(),
                        borderWidth: A(),
                        contrast: I(),
                        grayscale: N(),
                        hueRotate: F(),
                        invert: N(),
                        gap: M(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [ej, eT],
                        inset: C(),
                        margin: C(),
                        opacity: I(),
                        padding: M(),
                        saturate: I(),
                        scale: I(),
                        sepia: N(),
                        skew: F(),
                        space: M(),
                        translate: M()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", eD]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [eO]
                        }],
                        "break-after": [{
                            "break-after": _()
                        }],
                        "break-before": [{
                            "break-before": _()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [].concat(R(), [eD])
                        }],
                        overflow: [{
                            overflow: k()
                        }],
                        "overflow-x": [{
                            "overflow-x": k()
                        }],
                        "overflow-y": [{
                            "overflow-y": k()
                        }],
                        overscroll: [{
                            overscroll: P()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": P()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": P()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [m]
                        }],
                        "inset-x": [{
                            "inset-x": [m]
                        }],
                        "inset-y": [{
                            "inset-y": [m]
                        }],
                        start: [{
                            start: [m]
                        }],
                        end: [{
                            end: [m]
                        }],
                        top: [{
                            top: [m]
                        }],
                        right: [{
                            right: [m]
                        }],
                        bottom: [{
                            bottom: [m]
                        }],
                        left: [{
                            left: [m]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", eR]
                        }],
                        basis: [{
                            basis: C()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", eD]
                        }],
                        grow: [{
                            grow: N()
                        }],
                        shrink: [{
                            shrink: N()
                        }],
                        order: [{
                            order: ["first", "last", "none", eR]
                        }],
                        "grid-cols": [{
                            "grid-cols": [eL]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", eR]
                            }, eD]
                        }],
                        "col-start": [{
                            "col-start": j()
                        }],
                        "col-end": [{
                            "col-end": j()
                        }],
                        "grid-rows": [{
                            "grid-rows": [eL]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [eR]
                            }, eD]
                        }],
                        "row-start": [{
                            "row-start": j()
                        }],
                        "row-end": [{
                            "row-end": j()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", eD]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", eD]
                        }],
                        gap: [{
                            gap: [f]
                        }],
                        "gap-x": [{
                            "gap-x": [f]
                        }],
                        "gap-y": [{
                            "gap-y": [f]
                        }],
                        "justify-content": [{
                            justify: ["normal"].concat(O())
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal"].concat(O(), ["baseline"])
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [].concat(O(), ["baseline"])
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [y]
                        }],
                        px: [{
                            px: [y]
                        }],
                        py: [{
                            py: [y]
                        }],
                        ps: [{
                            ps: [y]
                        }],
                        pe: [{
                            pe: [y]
                        }],
                        pt: [{
                            pt: [y]
                        }],
                        pr: [{
                            pr: [y]
                        }],
                        pb: [{
                            pb: [y]
                        }],
                        pl: [{
                            pl: [y]
                        }],
                        m: [{
                            m: [v]
                        }],
                        mx: [{
                            mx: [v]
                        }],
                        my: [{
                            my: [v]
                        }],
                        ms: [{
                            ms: [v]
                        }],
                        me: [{
                            me: [v]
                        }],
                        mt: [{
                            mt: [v]
                        }],
                        mr: [{
                            mr: [v]
                        }],
                        mb: [{
                            mb: [v]
                        }],
                        ml: [{
                            ml: [v]
                        }],
                        "space-x": [{
                            "space-x": [S]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [S]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", eD, t]
                        }],
                        "min-w": [{
                            "min-w": ["min", "max", "fit", eD, eS]
                        }],
                        "max-w": [{
                            "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                                screen: [eO]
                            }, eO, eD]
                        }],
                        h: [{
                            h: [eD, t, "auto", "min", "max", "fit"]
                        }],
                        "min-h": [{
                            "min-h": ["min", "max", "fit", eD, eS]
                        }],
                        "max-h": [{
                            "max-h": [eD, t, "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", eO, eT]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", eM]
                        }],
                        "font-family": [{
                            font: [eL]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", eD]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", eA, eM]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", eD, eS]
                        }],
                        "list-image": [{
                            "list-image": ["none", eD]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", eD]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [g]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [g]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [].concat(D(), ["wavy"])
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", eS]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", eD, eS]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        indent: [{
                            indent: M()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", eD]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", eD]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [g]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [].concat(R(), [ek])
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", eP]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, eC]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [h]
                        }],
                        "gradient-via-pos": [{
                            via: [h]
                        }],
                        "gradient-to-pos": [{
                            to: [h]
                        }],
                        "gradient-from": [{
                            from: [p]
                        }],
                        "gradient-via": [{
                            via: [p]
                        }],
                        "gradient-to": [{
                            to: [p]
                        }],
                        rounded: [{
                            rounded: [i]
                        }],
                        "rounded-s": [{
                            "rounded-s": [i]
                        }],
                        "rounded-e": [{
                            "rounded-e": [i]
                        }],
                        "rounded-t": [{
                            "rounded-t": [i]
                        }],
                        "rounded-r": [{
                            "rounded-r": [i]
                        }],
                        "rounded-b": [{
                            "rounded-b": [i]
                        }],
                        "rounded-l": [{
                            "rounded-l": [i]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [i]
                        }],
                        "rounded-se": [{
                            "rounded-se": [i]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [i]
                        }],
                        "rounded-es": [{
                            "rounded-es": [i]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [i]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [i]
                        }],
                        "rounded-br": [{
                            "rounded-br": [i]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [i]
                        }],
                        "border-w": [{
                            border: [s]
                        }],
                        "border-w-x": [{
                            "border-x": [s]
                        }],
                        "border-w-y": [{
                            "border-y": [s]
                        }],
                        "border-w-s": [{
                            "border-s": [s]
                        }],
                        "border-w-e": [{
                            "border-e": [s]
                        }],
                        "border-w-t": [{
                            "border-t": [s]
                        }],
                        "border-w-r": [{
                            "border-r": [s]
                        }],
                        "border-w-b": [{
                            "border-b": [s]
                        }],
                        "border-w-l": [{
                            "border-l": [s]
                        }],
                        "border-opacity": [{
                            "border-opacity": [g]
                        }],
                        "border-style": [{
                            border: [].concat(D(), ["hidden"])
                        }],
                        "divide-x": [{
                            "divide-x": [s]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [s]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [g]
                        }],
                        "divide-style": [{
                            divide: D()
                        }],
                        "border-color": [{
                            border: [o]
                        }],
                        "border-color-x": [{
                            "border-x": [o]
                        }],
                        "border-color-y": [{
                            "border-y": [o]
                        }],
                        "border-color-t": [{
                            "border-t": [o]
                        }],
                        "border-color-r": [{
                            "border-r": [o]
                        }],
                        "border-color-b": [{
                            "border-b": [o]
                        }],
                        "border-color-l": [{
                            "border-l": [o]
                        }],
                        "divide-color": [{
                            divide: [o]
                        }],
                        "outline-style": [{
                            outline: [""].concat(D())
                        }],
                        "outline-offset": [{
                            "outline-offset": [eD, eS]
                        }],
                        "outline-w": [{
                            outline: [eS]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: A()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [g]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [eS]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", eO, eN]
                        }],
                        "shadow-color": [{
                            shadow: [eL]
                        }],
                        opacity: [{
                            opacity: [g]
                        }],
                        "mix-blend": [{
                            "mix-blend": L()
                        }],
                        "bg-blend": [{
                            "bg-blend": L()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [r]
                        }],
                        brightness: [{
                            brightness: [n]
                        }],
                        contrast: [{
                            contrast: [l]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", eO, eD]
                        }],
                        grayscale: [{
                            grayscale: [u]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [d]
                        }],
                        invert: [{
                            invert: [c]
                        }],
                        saturate: [{
                            saturate: [b]
                        }],
                        sepia: [{
                            sepia: [x]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [r]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [n]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [l]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [u]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [d]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [c]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [g]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [b]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [x]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [a]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [a]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [a]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", eD]
                        }],
                        duration: [{
                            duration: F()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", eD]
                        }],
                        delay: [{
                            delay: F()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", eD]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [w]
                        }],
                        "scale-x": [{
                            "scale-x": [w]
                        }],
                        "scale-y": [{
                            "scale-y": [w]
                        }],
                        rotate: [{
                            rotate: [eR, eD]
                        }],
                        "translate-x": [{
                            "translate-x": [T]
                        }],
                        "translate-y": [{
                            "translate-y": [T]
                        }],
                        "skew-x": [{
                            "skew-x": [E]
                        }],
                        "skew-y": [{
                            "skew-y": [E]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", eD]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: ["appearance-none"],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", eD]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": M()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": M()
                        }],
                        "scroll-my": [{
                            "scroll-my": M()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": M()
                        }],
                        "scroll-me": [{
                            "scroll-me": M()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": M()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": M()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": M()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": M()
                        }],
                        "scroll-p": [{
                            "scroll-p": M()
                        }],
                        "scroll-px": [{
                            "scroll-px": M()
                        }],
                        "scroll-py": [{
                            "scroll-py": M()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": M()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": M()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": M()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": M()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": M()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": M()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "pinch-zoom", "manipulation", {
                                pan: ["x", "left", "right", "y", "up", "down"]
                            }]
                        }],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", eD]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [eS, eM]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            }
            var eU = em(eW),
                eH = Object.prototype.hasOwnProperty,
                e$ = new Set(["string", "number", "boolean"]),
                eG = {
                    twMerge: !0,
                    twMergeConfig: {},
                    responsiveVariants: !1
                },
                eK = e => e || void 0,
                eX = (...e) => eK(es(e).filter(Boolean).join(" ")),
                eY = null,
                eq = {},
                eQ = !1,
                eZ = (...e) => t => t.twMerge ? ((!eY || eQ) && (eQ = !1, eY = ei(eq) ? eU : function(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    return "function" == typeof e ? em.apply(void 0, [eW, e].concat(r)) : em.apply(void 0, [function() {
                        return function(e, t) {
                            for (var r in t)(function e(t, r, n) {
                                if (!eH.call(t, r) || e$.has(typeof n) || null === n) {
                                    t[r] = n;
                                    return
                                }
                                if (Array.isArray(n) && Array.isArray(t[r])) {
                                    t[r] = t[r].concat(n);
                                    return
                                }
                                if ("object" == typeof n && "object" == typeof t[r]) {
                                    if (null === t[r]) {
                                        t[r] = n;
                                        return
                                    }
                                    for (var o in n) e(t[r], o, n[o])
                                }
                            })(e, r, t[r]);
                            return e
                        }(eW(), e)
                    }].concat(r))
                }(eq)), eK(eY(eX(e)))) : eX(e),
                eJ = (e, t) => {
                    for (let r in t) e.hasOwnProperty(r) ? e[r] = eX(e[r], t[r]) : e[r] = t[r];
                    return e
                },
                e0 = (e, t) => {
                    let {
                        extend: r = null,
                        slots: n = {},
                        variants: o = {},
                        compoundVariants: i = [],
                        compoundSlots: a = [],
                        defaultVariants: s = {}
                    } = e, l = { ...eG,
                        ...t
                    }, u = null != r && r.base ? eX(r.base, null == e ? void 0 : e.base) : null == e ? void 0 : e.base, d = null != r && r.variants && !ei(r.variants) ? eu(o, r.variants) : o, c = null != r && r.defaultVariants && !ei(r.defaultVariants) ? { ...r.defaultVariants,
                        ...s
                    } : s;
                    ei(l.twMergeConfig) || ea(l.twMergeConfig, eq) || (eQ = !0, eq = l.twMergeConfig);
                    let f = ei(null == r ? void 0 : r.slots),
                        p = ei(n) ? {} : {
                            base: eX(null == e ? void 0 : e.base, f && (null == r ? void 0 : r.base)),
                            ...n
                        },
                        h = f ? p : eJ({ ...null == r ? void 0 : r.slots
                        }, ei(p) ? {
                            base: null == e ? void 0 : e.base
                        } : p),
                        m = e => {
                            if (ei(d) && ei(n) && f) return eZ(u, null == e ? void 0 : e.class, null == e ? void 0 : e.className)(l);
                            if (i && !Array.isArray(i)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof i}`);
                            if (a && !Array.isArray(a)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof a}`);
                            let t = (e, t, r = [], n) => {
                                    let o = r;
                                    if ("string" == typeof t) o = o.concat(ed(t).split(" ").map(t => `${e}:${t}`));
                                    else if (Array.isArray(t)) o = o.concat(t.reduce((t, r) => t.concat(`${e}:${r}`), []));
                                    else if ("object" == typeof t && "string" == typeof n) {
                                        for (let r in t)
                                            if (t.hasOwnProperty(r) && r === n) {
                                                let i = t[r];
                                                if (i && "string" == typeof i) {
                                                    let t = ed(i);
                                                    o[n] ? o[n] = o[n].concat(t.split(" ").map(t => `${e}:${t}`)) : o[n] = t.split(" ").map(t => `${e}:${t}`)
                                                } else Array.isArray(i) && i.length > 0 && (o[n] = i.reduce((t, r) => t.concat(`${e}:${r}`), []))
                                            }
                                    }
                                    return o
                                },
                                o = (r, n = d, o = null, i = null) => {
                                    var a;
                                    let s = n[r];
                                    if (!s || ei(s)) return null;
                                    let u = null != (a = null == i ? void 0 : i[r]) ? a : null == e ? void 0 : e[r];
                                    if (null === u) return null;
                                    let f = eo(u),
                                        p = Array.isArray(l.responsiveVariants) && l.responsiveVariants.length > 0 || !0 === l.responsiveVariants,
                                        h = null == c ? void 0 : c[r],
                                        m = [];
                                    if ("object" == typeof f && p)
                                        for (let [e, r] of Object.entries(f)) {
                                            let n = s[r];
                                            if ("initial" === e) {
                                                h = r;
                                                continue
                                            }
                                            Array.isArray(l.responsiveVariants) && !l.responsiveVariants.includes(e) || (m = t(e, n, m, o))
                                        }
                                    let v = s[f] || s[eo(h)];
                                    return "object" == typeof m && "string" == typeof o && m[o] ? eJ(m, v) : m.length > 0 ? (m.push(v), m) : v
                                },
                                s = (e, t) => {
                                    if (!d || "object" != typeof d) return null;
                                    let r = [];
                                    for (let n in d) {
                                        let i = o(n, d, e, t),
                                            a = "base" === e && "string" == typeof i ? i : i && i[e];
                                        a && (r[r.length] = a)
                                    }
                                    return r
                                },
                                p = {};
                            for (let t in e) void 0 !== e[t] && (p[t] = e[t]);
                            let m = (t, r) => {
                                    var n;
                                    let o = "object" == typeof(null == e ? void 0 : e[t]) ? {
                                        [t]: null == (n = e[t]) ? void 0 : n.initial
                                    } : {};
                                    return { ...c,
                                        ...p,
                                        ...o,
                                        ...r
                                    }
                                },
                                v = (e = [], t) => {
                                    let r = [];
                                    for (let {
                                            class: n,
                                            className: o,
                                            ...i
                                        } of e) {
                                        let e = !0;
                                        for (let [r, n] of Object.entries(i)) {
                                            let o = m(r, t);
                                            if (Array.isArray(n)) {
                                                if (!n.includes(o[r])) {
                                                    e = !1;
                                                    break
                                                }
                                            } else if (o[r] !== n) {
                                                e = !1;
                                                break
                                            }
                                        }
                                        e && (n && r.push(n), o && r.push(o))
                                    }
                                    return r
                                },
                                g = e => {
                                    let t = v(i, e);
                                    return el(v(null == r ? void 0 : r.compoundVariants, e), t)
                                },
                                y = e => {
                                    let t = g(e);
                                    if (!Array.isArray(t)) return t;
                                    let r = {};
                                    for (let e of t)
                                        if ("string" == typeof e && (r.base = eZ(r.base, e)(l)), "object" == typeof e)
                                            for (let [t, n] of Object.entries(e)) r[t] = eZ(r[t], n)(l);
                                    return r
                                },
                                b = e => {
                                    if (a.length < 1) return null;
                                    let t = {};
                                    for (let {
                                            slots: r = [],
                                            class: n,
                                            className: o,
                                            ...i
                                        } of a) {
                                        if (!ei(i)) {
                                            let t = !0;
                                            for (let r of Object.keys(i)) {
                                                let n = m(r, e)[r];
                                                if (void 0 === n || (Array.isArray(i[r]) ? !i[r].includes(n) : i[r] !== n)) {
                                                    t = !1;
                                                    break
                                                }
                                            }
                                            if (!t) continue
                                        }
                                        for (let e of r) t[e] = t[e] || [], t[e].push([n, o])
                                    }
                                    return t
                                };
                            if (!ei(n) || !f) {
                                let e = {};
                                if ("object" == typeof h && !ei(h))
                                    for (let t of Object.keys(h)) e[t] = e => {
                                        var r, n;
                                        return eZ(h[t], s(t, e), (null != (r = y(e)) ? r : [])[t], (null != (n = b(e)) ? n : [])[t], null == e ? void 0 : e.class, null == e ? void 0 : e.className)(l)
                                    };
                                return e
                            }
                            return eZ(u, d ? Object.keys(d).map(e => o(e, d)) : null, g(), null == e ? void 0 : e.class, null == e ? void 0 : e.className)(l)
                        };
                    return m.variantKeys = (() => {
                        if (!(!d || "object" != typeof d)) return Object.keys(d)
                    })(), m.extend = r, m.base = u, m.slots = h, m.variants = d, m.defaultVariants = c, m.compoundSlots = a, m.compoundVariants = i, m
                },
                e1 = (e, t) => {
                    var r, n, o;
                    return e0(e, { ...t,
                        twMerge: null == (r = null == t ? void 0 : t.twMerge) || r,
                        twMergeConfig: { ...null == t ? void 0 : t.twMergeConfig,
                            theme: { ...null == (n = null == t ? void 0 : t.twMergeConfig) ? void 0 : n.theme,
                                ...en.theme
                            },
                            classGroups: { ...null == (o = null == t ? void 0 : t.twMergeConfig) ? void 0 : o.classGroups,
                                ...en.classGroups
                            }
                        }
                    })
                },
                e2 = {
                    default: ["[&+.border-medium.border-default]:ms-[calc(theme(borderWidth.medium)*-1)]"],
                    primary: ["[&+.border-medium.border-primary]:ms-[calc(theme(borderWidth.medium)*-1)]"],
                    secondary: ["[&+.border-medium.border-secondary]:ms-[calc(theme(borderWidth.medium)*-1)]"],
                    success: ["[&+.border-medium.border-success]:ms-[calc(theme(borderWidth.medium)*-1)]"],
                    warning: ["[&+.border-medium.border-warning]:ms-[calc(theme(borderWidth.medium)*-1)]"],
                    danger: ["[&+.border-medium.border-danger]:ms-[calc(theme(borderWidth.medium)*-1)]"]
                },
                e5 = e1({
                    base: ["z-0", "group", "relative", "inline-flex", "items-center", "justify-center", "box-border", "appearance-none", "outline-none", "select-none", "whitespace-nowrap", "min-w-max", "font-normal", "subpixel-antialiased", "overflow-hidden", "tap-highlight-transparent", "data-[pressed=true]:scale-[0.97]", "outline-none", "data-[focus-visible=true]:z-10", "data-[focus-visible=true]:outline-2", "data-[focus-visible=true]:outline-focus", "data-[focus-visible=true]:outline-offset-2"],
                    variants: {
                        variant: {
                            solid: "",
                            bordered: "border-medium bg-transparent",
                            light: "bg-transparent",
                            flat: "",
                            faded: "border-medium",
                            shadow: "",
                            ghost: "border-medium bg-transparent"
                        },
                        size: {
                            sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
                            md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
                            lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large"
                        },
                        color: {
                            default: "",
                            primary: "",
                            secondary: "",
                            success: "",
                            warning: "",
                            danger: ""
                        },
                        radius: {
                            none: "rounded-none",
                            sm: "rounded-small",
                            md: "rounded-medium",
                            lg: "rounded-large",
                            full: "rounded-full"
                        },
                        fullWidth: {
                            true: "w-full"
                        },
                        isDisabled: {
                            true: "opacity-disabled pointer-events-none"
                        },
                        isInGroup: {
                            true: "[&:not(:first-child):not(:last-child)]:rounded-none"
                        },
                        isIconOnly: {
                            true: "px-0 !gap-0",
                            false: "[&>svg]:max-w-[theme(spacing.8)]"
                        },
                        disableAnimation: {
                            true: "!transition-none data-[pressed=true]:scale-100",
                            false: "transition-transform-colors-opacity motion-reduce:transition-none"
                        }
                    },
                    defaultVariants: {
                        size: "md",
                        variant: "solid",
                        color: "default",
                        fullWidth: !1,
                        isDisabled: !1,
                        isInGroup: !1
                    },
                    compoundVariants: [{
                        variant: "solid",
                        color: "default",
                        class: et.solid.default
                    }, {
                        variant: "solid",
                        color: "primary",
                        class: et.solid.primary
                    }, {
                        variant: "solid",
                        color: "secondary",
                        class: et.solid.secondary
                    }, {
                        variant: "solid",
                        color: "success",
                        class: et.solid.success
                    }, {
                        variant: "solid",
                        color: "warning",
                        class: et.solid.warning
                    }, {
                        variant: "solid",
                        color: "danger",
                        class: et.solid.danger
                    }, {
                        variant: "shadow",
                        color: "default",
                        class: et.shadow.default
                    }, {
                        variant: "shadow",
                        color: "primary",
                        class: et.shadow.primary
                    }, {
                        variant: "shadow",
                        color: "secondary",
                        class: et.shadow.secondary
                    }, {
                        variant: "shadow",
                        color: "success",
                        class: et.shadow.success
                    }, {
                        variant: "shadow",
                        color: "warning",
                        class: et.shadow.warning
                    }, {
                        variant: "shadow",
                        color: "danger",
                        class: et.shadow.danger
                    }, {
                        variant: "bordered",
                        color: "default",
                        class: et.bordered.default
                    }, {
                        variant: "bordered",
                        color: "primary",
                        class: et.bordered.primary
                    }, {
                        variant: "bordered",
                        color: "secondary",
                        class: et.bordered.secondary
                    }, {
                        variant: "bordered",
                        color: "success",
                        class: et.bordered.success
                    }, {
                        variant: "bordered",
                        color: "warning",
                        class: et.bordered.warning
                    }, {
                        variant: "bordered",
                        color: "danger",
                        class: et.bordered.danger
                    }, {
                        variant: "flat",
                        color: "default",
                        class: et.flat.default
                    }, {
                        variant: "flat",
                        color: "primary",
                        class: et.flat.primary
                    }, {
                        variant: "flat",
                        color: "secondary",
                        class: et.flat.secondary
                    }, {
                        variant: "flat",
                        color: "success",
                        class: et.flat.success
                    }, {
                        variant: "flat",
                        color: "warning",
                        class: et.flat.warning
                    }, {
                        variant: "flat",
                        color: "danger",
                        class: et.flat.danger
                    }, {
                        variant: "faded",
                        color: "default",
                        class: et.faded.default
                    }, {
                        variant: "faded",
                        color: "primary",
                        class: et.faded.primary
                    }, {
                        variant: "faded",
                        color: "secondary",
                        class: et.faded.secondary
                    }, {
                        variant: "faded",
                        color: "success",
                        class: et.faded.success
                    }, {
                        variant: "faded",
                        color: "warning",
                        class: et.faded.warning
                    }, {
                        variant: "faded",
                        color: "danger",
                        class: et.faded.danger
                    }, {
                        variant: "light",
                        color: "default",
                        class: [et.light.default, "data-[hover=true]:bg-default/40"]
                    }, {
                        variant: "light",
                        color: "primary",
                        class: [et.light.primary, "data-[hover=true]:bg-primary/20"]
                    }, {
                        variant: "light",
                        color: "secondary",
                        class: [et.light.secondary, "data-[hover=true]:bg-secondary/20"]
                    }, {
                        variant: "light",
                        color: "success",
                        class: [et.light.success, "data-[hover=true]:bg-success/20"]
                    }, {
                        variant: "light",
                        color: "warning",
                        class: [et.light.warning, "data-[hover=true]:bg-warning/20"]
                    }, {
                        variant: "light",
                        color: "danger",
                        class: [et.light.danger, "data-[hover=true]:bg-danger/20"]
                    }, {
                        variant: "ghost",
                        color: "default",
                        class: [et.ghost.default, "data-[hover=true]:!bg-default"]
                    }, {
                        variant: "ghost",
                        color: "primary",
                        class: [et.ghost.primary, "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground"]
                    }, {
                        variant: "ghost",
                        color: "secondary",
                        class: [et.ghost.secondary, "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground"]
                    }, {
                        variant: "ghost",
                        color: "success",
                        class: [et.ghost.success, "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground"]
                    }, {
                        variant: "ghost",
                        color: "warning",
                        class: [et.ghost.warning, "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground"]
                    }, {
                        variant: "ghost",
                        color: "danger",
                        class: [et.ghost.danger, "data-[hover=true]:!bg-danger data-[hover=true]:!text-danger-foreground"]
                    }, {
                        isInGroup: !0,
                        class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
                    }, {
                        isInGroup: !0,
                        size: "sm",
                        class: "rounded-none first:rounded-s-small last:rounded-e-small"
                    }, {
                        isInGroup: !0,
                        size: "md",
                        class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
                    }, {
                        isInGroup: !0,
                        size: "lg",
                        class: "rounded-none first:rounded-s-large last:rounded-e-large"
                    }, {
                        isInGroup: !0,
                        isRounded: !0,
                        class: "rounded-none first:rounded-s-full last:rounded-e-full"
                    }, {
                        isInGroup: !0,
                        radius: "none",
                        class: "rounded-none first:rounded-s-none last:rounded-e-none"
                    }, {
                        isInGroup: !0,
                        radius: "sm",
                        class: "rounded-none first:rounded-s-small last:rounded-e-small"
                    }, {
                        isInGroup: !0,
                        radius: "md",
                        class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
                    }, {
                        isInGroup: !0,
                        radius: "lg",
                        class: "rounded-none first:rounded-s-large last:rounded-e-large"
                    }, {
                        isInGroup: !0,
                        radius: "full",
                        class: "rounded-none first:rounded-s-full last:rounded-e-full"
                    }, {
                        isInGroup: !0,
                        variant: ["ghost", "bordered"],
                        color: "default",
                        className: e2.default
                    }, {
                        isInGroup: !0,
                        variant: ["ghost", "bordered"],
                        color: "primary",
                        className: e2.primary
                    }, {
                        isInGroup: !0,
                        variant: ["ghost", "bordered"],
                        color: "secondary",
                        className: e2.secondary
                    }, {
                        isInGroup: !0,
                        variant: ["ghost", "bordered"],
                        color: "success",
                        className: e2.success
                    }, {
                        isInGroup: !0,
                        variant: ["ghost", "bordered"],
                        color: "warning",
                        className: e2.warning
                    }, {
                        isInGroup: !0,
                        variant: ["ghost", "bordered"],
                        color: "danger",
                        className: e2.danger
                    }, {
                        isIconOnly: !0,
                        size: "sm",
                        class: "min-w-8 w-8 h-8"
                    }, {
                        isIconOnly: !0,
                        size: "md",
                        class: "min-w-10 w-10 h-10"
                    }, {
                        isIconOnly: !0,
                        size: "lg",
                        class: "min-w-12 w-12 h-12"
                    }, {
                        variant: ["solid", "faded", "flat", "bordered", "shadow"],
                        class: "data-[hover=true]:opacity-hover"
                    }]
                });
            e1({
                base: "inline-flex items-center justify-center h-auto",
                variants: {
                    fullWidth: {
                        true: "w-full"
                    }
                },
                defaultVariants: {
                    fullWidth: !1
                }
            });
            var e4 = {};
            let e3 = new Set(["id"]),
                e6 = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
                e7 = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
                e9 = /^(data-.*)$/,
                e8 = new Map,
                te = new Set;

            function tt() {
                if ("undefined" == typeof window) return;

                function e(e) {
                    return "propertyName" in e
                }
                let t = r => {
                    if (!e(r) || !r.target) return;
                    let n = e8.get(r.target);
                    if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), e8.delete(r.target)), 0 === e8.size)) {
                        for (let e of te) e();
                        te.clear()
                    }
                };
                document.body.addEventListener("transitionrun", r => {
                    if (!e(r) || !r.target) return;
                    let n = e8.get(r.target);
                    n || (n = new Set, e8.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
                        once: !0
                    })), n.add(r.propertyName)
                }), document.body.addEventListener("transitionend", t)
            }

            function tr(e) {
                requestAnimationFrame(() => {
                    0 === e8.size ? e() : te.add(e)
                })
            }

            function tn(e) {
                if (function() {
                        if (null == to) {
                            to = !1;
                            try {
                                document.createElement("div").focus({
                                    get preventScroll() {
                                        return to = !0, !0
                                    }
                                })
                            } catch {}
                        }
                        return to
                    }()) e.focus({
                    preventScroll: !0
                });
                else {
                    let t = function(e) {
                        let t = e.parentNode,
                            r = [],
                            n = document.scrollingElement || document.documentElement;
                        for (; t instanceof HTMLElement && t !== n;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
                            element: t,
                            scrollTop: t.scrollTop,
                            scrollLeft: t.scrollLeft
                        }), t = t.parentNode;
                        return n instanceof HTMLElement && r.push({
                            element: n,
                            scrollTop: n.scrollTop,
                            scrollLeft: n.scrollLeft
                        }), r
                    }(e);
                    e.focus(),
                        function(e) {
                            for (let {
                                    element: t,
                                    scrollTop: r,
                                    scrollLeft: n
                                } of e) t.scrollTop = r, t.scrollLeft = n
                        }(t)
                }
            }
            "undefined" != typeof document && ("loading" !== document.readyState ? tt() : document.addEventListener("DOMContentLoaded", tt));
            let to = null;

            function ti(e, t) {
                B(() => {
                    if (e && e.ref && t) return e.ref.current = t.current, () => {
                        e.ref && (e.ref.current = null)
                    }
                })
            }

            function ta(e) {
                if (!e) return;
                let t = !0;
                return r => {
                    e({ ...r,
                        preventDefault() {
                            r.preventDefault()
                        },
                        isDefaultPrevented: () => r.isDefaultPrevented(),
                        stopPropagation() {
                            console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
                        },
                        continuePropagation() {
                            t = !1
                        }
                    }), t && r.stopPropagation()
                }
            }
            let ts = n.createContext(null),
                tl = "default",
                tu = "",
                td = new WeakMap;

            function tc(e) {
                if (v()) {
                    if ("default" === tl) {
                        let t = E(e);
                        tu = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    tl = "disabled"
                } else(e instanceof HTMLElement || e instanceof SVGElement) && (td.set(e, e.style.userSelect), e.style.userSelect = "none")
            }

            function tf(e) {
                if (v()) "disabled" === tl && (tl = "restoring", setTimeout(() => {
                    tr(() => {
                        if ("restoring" === tl) {
                            let t = E(e);
                            "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = tu || ""), tu = "", tl = "default"
                        }
                    })
                }, 300));
                else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && td.has(e)) {
                    let t = td.get(e);
                    "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), td.delete(e)
                }
            }
            let tp = n.createContext({
                register: () => {}
            });

            function th(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to " + r + " private field on non-instance");
                return t.get(e)
            }

            function tm(e, t, r) {
                var n = th(e, t, "set");
                return ! function(e, t, r) {
                    if (t.set) t.set.call(e, r);
                    else {
                        if (!t.writable) throw TypeError("attempted to set read only private field");
                        t.value = r
                    }
                }(e, n, r), r
            }

            function tv(e, t, r = !0) {
                var n, o;
                let {
                    metaKey: i,
                    ctrlKey: a,
                    altKey: s,
                    shiftKey: l
                } = t;
                w() && (null === (o = window.event) || void 0 === o ? void 0 : null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (p() ? i = !0 : a = !0);
                let u = g() && p() && !m() ? new KeyboardEvent("keydown", {
                    keyIdentifier: "Enter",
                    metaKey: i,
                    ctrlKey: a,
                    altKey: s,
                    shiftKey: l
                }) : new MouseEvent("click", {
                    metaKey: i,
                    ctrlKey: a,
                    altKey: s,
                    shiftKey: l,
                    bubbles: !0,
                    cancelable: !0
                });
                tv.isOpening = r, tn(e), e.dispatchEvent(u), tv.isOpening = !1
            }
            tp.displayName = "PressResponderContext", tv.isOpening = !1;
            var tg = new WeakMap;
            class ty {
                continuePropagation() {
                    tm(this, tg, !1)
                }
                get shouldStopPropagation() {
                    var e;
                    return (e = th(this, tg, "get")).get ? e.get.call(this) : e.value
                }
                constructor(e, t, r, n) {
                    var o;
                    ! function(e, t, r) {
                        (function(e, t) {
                            if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
                        })(e, t), t.set(e, r)
                    }(this, tg, {
                        writable: !0,
                        value: void 0
                    }), tm(this, tg, !0);
                    let i = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget,
                        a = null == i ? void 0 : i.getBoundingClientRect(),
                        s, l = 0,
                        u, d = null;
                    null != r.clientX && null != r.clientY && (u = r.clientX, d = r.clientY), a && (null != u && null != d ? (s = u - a.left, l = d - a.top) : (s = a.width / 2, l = a.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = l
                }
            }
            let tb = Symbol("linkClicked");

            function tw(e) {
                return "A" === e.tagName && e.hasAttribute("href")
            }

            function tx(e, t) {
                let {
                    key: r,
                    code: n
                } = e, o = t.getAttribute("role");
                return ("Enter" === r || " " === r || "Spacebar" === r || "Space" === n) && !(t instanceof S(t).HTMLInputElement && !tj(t, r) || t instanceof S(t).HTMLTextAreaElement || t.isContentEditable) && !(("link" === o || !o && tw(t)) && "Enter" !== r)
            }

            function tE(e, t) {
                let r = e.changedTouches;
                for (let e = 0; e < r.length; e++) {
                    let n = r[e];
                    if (n.identifier === t) return n
                }
                return null
            }

            function tS(e, t) {
                let r = 0,
                    n = 0;
                return t.targetTouches && 1 === t.targetTouches.length && (r = t.targetTouches[0].clientX, n = t.targetTouches[0].clientY), {
                    currentTarget: e,
                    shiftKey: t.shiftKey,
                    ctrlKey: t.ctrlKey,
                    metaKey: t.metaKey,
                    altKey: t.altKey,
                    clientX: r,
                    clientY: n
                }
            }

            function tT(e, t) {
                let r = t.clientX,
                    n = t.clientY;
                return {
                    currentTarget: e,
                    shiftKey: t.shiftKey,
                    ctrlKey: t.ctrlKey,
                    metaKey: t.metaKey,
                    altKey: t.altKey,
                    clientX: r,
                    clientY: n
                }
            }

            function tP(e, t) {
                let r, n, o = t.getBoundingClientRect(),
                    i = (r = 0, n = 0, void 0 !== e.width ? r = e.width / 2 : void 0 !== e.radiusX && (r = e.radiusX), void 0 !== e.height ? n = e.height / 2 : void 0 !== e.radiusY && (n = e.radiusY), {
                        top: e.clientY - n,
                        right: e.clientX + r,
                        bottom: e.clientY + n,
                        left: e.clientX - r
                    });
                return !(o.left > i.right) && !(i.left > o.right) && !(o.top > i.bottom) && !(i.top > o.bottom)
            }

            function tk(e) {
                return !(e instanceof HTMLElement) || !e.hasAttribute("draggable")
            }

            function tC(e) {
                return !(e instanceof HTMLInputElement) && (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !tw(e))
            }

            function tM(e, t) {
                return e instanceof HTMLInputElement ? !tj(e, t) : tC(e)
            }
            let tA = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

            function tj(e, t) {
                return "checkbox" === e.type || "radio" === e.type ? " " === t : tA.has(e.type)
            }
            let tR = !1,
                tD = 0;

            function tL() {
                tR = !0, setTimeout(() => {
                    tR = !1
                }, 50)
            }

            function tO(e) {
                "touch" === e.pointerType && tL()
            }

            function tN() {
                if ("undefined" != typeof document) return "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", tO) : document.addEventListener("touchend", tL), tD++, () => {
                    --tD > 0 || ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", tO) : document.removeEventListener("touchend", tL))
                }
            }
            var t_ = Object.create,
                tI = Object.defineProperty,
                tF = Object.getOwnPropertyDescriptor,
                tV = Object.getOwnPropertyNames,
                tB = Object.getPrototypeOf,
                tz = Object.prototype.hasOwnProperty,
                tW = (e, t) => function() {
                    return t || (0, e[tV(e)[0]])((t = {
                        exports: {}
                    }).exports, t), t.exports
                },
                tU = (e, t, r, n) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let o of tV(t)) tz.call(e, o) || o === r || tI(e, o, {
                            get: () => t[o],
                            enumerable: !(n = tF(t, o)) || n.enumerable
                        });
                    return e
                },
                tH = tW({
                    "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js" (e) {
                        var t = Symbol.for("react.element"),
                            r = Symbol.for("react.portal"),
                            n = Symbol.for("react.fragment"),
                            o = Symbol.for("react.strict_mode"),
                            i = Symbol.for("react.profiler"),
                            a = Symbol.for("react.provider"),
                            s = Symbol.for("react.context"),
                            l = Symbol.for("react.forward_ref"),
                            u = Symbol.for("react.suspense"),
                            d = Symbol.for("react.memo"),
                            c = Symbol.for("react.lazy"),
                            f = Symbol.iterator,
                            p = {
                                isMounted: function() {
                                    return !1
                                },
                                enqueueForceUpdate: function() {},
                                enqueueReplaceState: function() {},
                                enqueueSetState: function() {}
                            },
                            h = Object.assign,
                            m = {};

                        function v(e, t, r) {
                            this.props = e, this.context = t, this.refs = m, this.updater = r || p
                        }

                        function g() {}

                        function y(e, t, r) {
                            this.props = e, this.context = t, this.refs = m, this.updater = r || p
                        }
                        v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                            if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                            this.updater.enqueueSetState(this, e, t, "setState")
                        }, v.prototype.forceUpdate = function(e) {
                            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                        }, g.prototype = v.prototype;
                        var b = y.prototype = new g;
                        b.constructor = y, h(b, v.prototype), b.isPureReactComponent = !0;
                        var w = Array.isArray,
                            x = Object.prototype.hasOwnProperty,
                            E = {
                                current: null
                            },
                            S = {
                                key: !0,
                                ref: !0,
                                __self: !0,
                                __source: !0
                            };

                        function T(e, r, n) {
                            var o, i = {},
                                a = null,
                                s = null;
                            if (null != r)
                                for (o in void 0 !== r.ref && (s = r.ref), void 0 !== r.key && (a = "" + r.key), r) x.call(r, o) && !S.hasOwnProperty(o) && (i[o] = r[o]);
                            var l = arguments.length - 2;
                            if (1 === l) i.children = n;
                            else if (1 < l) {
                                for (var u = Array(l), d = 0; d < l; d++) u[d] = arguments[d + 2];
                                i.children = u
                            }
                            if (e && e.defaultProps)
                                for (o in l = e.defaultProps) void 0 === i[o] && (i[o] = l[o]);
                            return {
                                $$typeof: t,
                                type: e,
                                key: a,
                                ref: s,
                                props: i,
                                _owner: E.current
                            }
                        }

                        function P(e) {
                            return "object" == typeof e && null !== e && e.$$typeof === t
                        }
                        var k = /\/+/g;

                        function C(e, t) {
                            var r, n;
                            return "object" == typeof e && null !== e && null != e.key ? (r = "" + e.key, n = {
                                "=": "=0",
                                ":": "=2"
                            }, "$" + r.replace(/[=:]/g, function(e) {
                                return n[e]
                            })) : t.toString(36)
                        }

                        function M(e, n, o) {
                            if (null == e) return e;
                            var i = [],
                                a = 0;
                            return ! function e(n, o, i, a, s) {
                                var l, u, d, c = typeof n;
                                ("undefined" === c || "boolean" === c) && (n = null);
                                var p = !1;
                                if (null === n) p = !0;
                                else switch (c) {
                                    case "string":
                                    case "number":
                                        p = !0;
                                        break;
                                    case "object":
                                        switch (n.$$typeof) {
                                            case t:
                                            case r:
                                                p = !0
                                        }
                                }
                                if (p) return s = s(p = n), n = "" === a ? "." + C(p, 0) : a, w(s) ? (i = "", null != n && (i = n.replace(k, "$&/") + "/"), e(s, o, i, "", function(e) {
                                    return e
                                })) : null != s && (P(s) && (l = s, u = i + (!s.key || p && p.key === s.key ? "" : ("" + s.key).replace(k, "$&/") + "/") + n, s = {
                                    $$typeof: t,
                                    type: l.type,
                                    key: u,
                                    ref: l.ref,
                                    props: l.props,
                                    _owner: l._owner
                                }), o.push(s)), 1;
                                if (p = 0, a = "" === a ? "." : a + ":", w(n))
                                    for (var h = 0; h < n.length; h++) {
                                        var m = a + C(c = n[h], h);
                                        p += e(c, o, i, m, s)
                                    } else if ("function" == typeof(m = null === (d = n) || "object" != typeof d ? null : "function" == typeof(d = f && d[f] || d["@@iterator"]) ? d : null))
                                        for (n = m.call(n), h = 0; !(c = n.next()).done;) m = a + C(c = c.value, h++), p += e(c, o, i, m, s);
                                    else if ("object" === c) throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (o = String(n)) ? "object with keys {" + Object.keys(n).join(", ") + "}" : o) + "). If you meant to render a collection of children, use an array instead.");
                                return p
                            }(e, i, "", "", function(e) {
                                return n.call(o, e, a++)
                            }), i
                        }

                        function A(e) {
                            if (-1 === e._status) {
                                var t = e._result;
                                (t = t()).then(function(t) {
                                    (0 === e._status || -1 === e._status) && (e._status = 1, e._result = t)
                                }, function(t) {
                                    (0 === e._status || -1 === e._status) && (e._status = 2, e._result = t)
                                }), -1 === e._status && (e._status = 0, e._result = t)
                            }
                            if (1 === e._status) return e._result.default;
                            throw e._result
                        }
                        var j = {
                                current: null
                            },
                            R = {
                                transition: null
                            };
                        e.Children = {
                            map: M,
                            forEach: function(e, t, r) {
                                M(e, function() {
                                    t.apply(this, arguments)
                                }, r)
                            },
                            count: function(e) {
                                var t = 0;
                                return M(e, function() {
                                    t++
                                }), t
                            },
                            toArray: function(e) {
                                return M(e, function(e) {
                                    return e
                                }) || []
                            },
                            only: function(e) {
                                if (!P(e)) throw Error("React.Children.only expected to receive a single React element child.");
                                return e
                            }
                        }, e.Component = v, e.Fragment = n, e.Profiler = i, e.PureComponent = y, e.StrictMode = o, e.Suspense = u, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
                            ReactCurrentDispatcher: j,
                            ReactCurrentBatchConfig: R,
                            ReactCurrentOwner: E
                        }, e.cloneElement = function(e, r, n) {
                            if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                            var o = h({}, e.props),
                                i = e.key,
                                a = e.ref,
                                s = e._owner;
                            if (null != r) {
                                if (void 0 !== r.ref && (a = r.ref, s = E.current), void 0 !== r.key && (i = "" + r.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                                for (u in r) x.call(r, u) && !S.hasOwnProperty(u) && (o[u] = void 0 === r[u] && void 0 !== l ? l[u] : r[u])
                            }
                            var u = arguments.length - 2;
                            if (1 === u) o.children = n;
                            else if (1 < u) {
                                l = Array(u);
                                for (var d = 0; d < u; d++) l[d] = arguments[d + 2];
                                o.children = l
                            }
                            return {
                                $$typeof: t,
                                type: e.type,
                                key: i,
                                ref: a,
                                props: o,
                                _owner: s
                            }
                        }, e.createContext = function(e) {
                            return (e = {
                                $$typeof: s,
                                _currentValue: e,
                                _currentValue2: e,
                                _threadCount: 0,
                                Provider: null,
                                Consumer: null,
                                _defaultValue: null,
                                _globalName: null
                            }).Provider = {
                                $$typeof: a,
                                _context: e
                            }, e.Consumer = e
                        }, e.createElement = T, e.createFactory = function(e) {
                            var t = T.bind(null, e);
                            return t.type = e, t
                        }, e.createRef = function() {
                            return {
                                current: null
                            }
                        }, e.forwardRef = function(e) {
                            return {
                                $$typeof: l,
                                render: e
                            }
                        }, e.isValidElement = P, e.lazy = function(e) {
                            return {
                                $$typeof: c,
                                _payload: {
                                    _status: -1,
                                    _result: e
                                },
                                _init: A
                            }
                        }, e.memo = function(e, t) {
                            return {
                                $$typeof: d,
                                type: e,
                                compare: void 0 === t ? null : t
                            }
                        }, e.startTransition = function(e) {
                            var t = R.transition;
                            R.transition = {};
                            try {
                                e()
                            } finally {
                                R.transition = t
                            }
                        }, e.unstable_act = function() {
                            throw Error("act(...) is not supported in production builds of React.")
                        }, e.useCallback = function(e, t) {
                            return j.current.useCallback(e, t)
                        }, e.useContext = function(e) {
                            return j.current.useContext(e)
                        }, e.useDebugValue = function() {}, e.useDeferredValue = function(e) {
                            return j.current.useDeferredValue(e)
                        }, e.useEffect = function(e, t) {
                            return j.current.useEffect(e, t)
                        }, e.useId = function() {
                            return j.current.useId()
                        }, e.useImperativeHandle = function(e, t, r) {
                            return j.current.useImperativeHandle(e, t, r)
                        }, e.useInsertionEffect = function(e, t) {
                            return j.current.useInsertionEffect(e, t)
                        }, e.useLayoutEffect = function(e, t) {
                            return j.current.useLayoutEffect(e, t)
                        }, e.useMemo = function(e, t) {
                            return j.current.useMemo(e, t)
                        }, e.useReducer = function(e, t, r) {
                            return j.current.useReducer(e, t, r)
                        }, e.useRef = function(e) {
                            return j.current.useRef(e)
                        }, e.useState = function(e) {
                            return j.current.useState(e)
                        }, e.useSyncExternalStore = function(e, t, r) {
                            return j.current.useSyncExternalStore(e, t, r)
                        }, e.useTransition = function() {
                            return j.current.useTransition()
                        }, e.version = "18.2.0"
                    }
                });

            function t$(e) {
                return (0, n.forwardRef)(e)
            }
            tW({
                "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js" (e, t) {}
            }), ((e, t, r) => (r = null != e ? t_(tB(e)) : {}, tU(!t && e && e.__esModule ? r : tI(r, "default", {
                value: e,
                enumerable: !0
            }), e)))(tW({
                "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js" (e, t) {
                    t.exports = tH()
                }
            })());
            var tG = (e, t, r = !0) => {
                    if (!t) return [e, {}];
                    let n = t.reduce((t, r) => r in e ? { ...t,
                        [r]: e[r]
                    } : t, {});
                    return r ? [Object.keys(e).filter(e => !t.includes(e)).reduce((t, r) => ({ ...t,
                        [r]: e[r]
                    }), {}), n] : [e, n]
                },
                tK = e1({
                    slots: {
                        base: "relative inline-flex flex-col gap-2 items-center justify-center",
                        wrapper: "relative flex",
                        circle1: ["absolute", "w-full", "h-full", "rounded-full", "animate-spinner-ease-spin", "border-2", "border-solid", "border-t-transparent", "border-l-transparent", "border-r-transparent"],
                        circle2: ["absolute", "w-full", "h-full", "rounded-full", "opacity-75", "animate-spinner-linear-spin", "border-2", "border-dotted", "border-t-transparent", "border-l-transparent", "border-r-transparent"],
                        label: "text-foreground dark:text-foreground-dark font-regular"
                    },
                    variants: {
                        size: {
                            sm: {
                                wrapper: "w-5 h-5",
                                circle1: "border-2",
                                circle2: "border-2",
                                label: "text-small"
                            },
                            md: {
                                wrapper: "w-8 h-8",
                                circle1: "border-3",
                                circle2: "border-3",
                                label: "text-medium"
                            },
                            lg: {
                                wrapper: "w-10 h-10",
                                circle1: "border-3",
                                circle2: "border-3",
                                label: "text-large"
                            }
                        },
                        color: {
                            current: {
                                circle1: "border-b-current",
                                circle2: "border-b-current"
                            },
                            white: {
                                circle1: "border-b-white",
                                circle2: "border-b-white"
                            },
                            default: {
                                circle1: "border-b-default",
                                circle2: "border-b-default"
                            },
                            primary: {
                                circle1: "border-b-primary",
                                circle2: "border-b-primary"
                            },
                            secondary: {
                                circle1: "border-b-secondary",
                                circle2: "border-b-secondary"
                            },
                            success: {
                                circle1: "border-b-success",
                                circle2: "border-b-success"
                            },
                            warning: {
                                circle1: "border-b-warning",
                                circle2: "border-b-warning"
                            },
                            danger: {
                                circle1: "border-b-danger",
                                circle2: "border-b-danger"
                            }
                        },
                        labelColor: {
                            foreground: {
                                label: "text-foreground"
                            },
                            primary: {
                                label: "text-primary"
                            },
                            secondary: {
                                label: "text-secondary"
                            },
                            success: {
                                label: "text-success"
                            },
                            warning: {
                                label: "text-warning"
                            },
                            danger: {
                                label: "text-danger"
                            }
                        }
                    },
                    defaultVariants: {
                        size: "md",
                        color: "primary",
                        labelColor: "foreground"
                    }
                }),
                tX = r(95155),
                tY = t$((e, t) => {
                    let {
                        slots: r,
                        classNames: o,
                        label: i,
                        getSpinnerProps: a
                    } = function(e) {
                        let [t, r] = tG(e, tK.variantKeys), {
                            children: o,
                            className: i,
                            classNames: a,
                            label: s,
                            ...l
                        } = t, u = (0, n.useMemo)(() => tK({ ...r
                        }), [function(e) {
                            if (!e || "object" != typeof e) return "";
                            try {
                                return JSON.stringify(e)
                            } catch (e) {
                                return ""
                            }
                        }(r)]), d = function(...e) {
                            for (var t, r, n = 0, o = ""; n < e.length;)(t = e[n++]) && (r = function e(t) {
                                var r, n, o = "";
                                if ("string" == typeof t || "number" == typeof t) o += t;
                                else if ("object" == typeof t) {
                                    if (Array.isArray(t))
                                        for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += " "), o += n);
                                    else
                                        for (r in t) t[r] && (o && (o += " "), o += r)
                                }
                                return o
                            }(t)) && (o && (o += " "), o += r);
                            return o
                        }(null == a ? void 0 : a.base, i), c = s || o, f = (0, n.useMemo)(() => c && "string" == typeof c ? c : l["aria-label"] ? "" : "Loading", [o, c, l["aria-label"]]), p = (0, n.useCallback)(() => ({
                            "aria-label": f,
                            className: u.base({
                                class: d
                            }),
                            ...l
                        }), [f, u, d, l]);
                        return {
                            label: c,
                            slots: u,
                            classNames: a,
                            getSpinnerProps: p
                        }
                    }({ ...e
                    });
                    return (0, tX.jsxs)("div", {
                        ref: t,
                        ...a(),
                        children: [(0, tX.jsxs)("div", {
                            className: r.wrapper({
                                class: null == o ? void 0 : o.wrapper
                            }),
                            children: [(0, tX.jsx)("i", {
                                className: r.circle1({
                                    class: null == o ? void 0 : o.circle1
                                })
                            }), (0, tX.jsx)("i", {
                                className: r.circle2({
                                    class: null == o ? void 0 : o.circle2
                                })
                            })]
                        }), i && (0, tX.jsx)("span", {
                            className: r.label({
                                class: null == o ? void 0 : o.label
                            }),
                            children: i
                        })]
                    })
                });
            tY.displayName = "NextUI.Spinner";
            var tq = r(75815),
                tQ = r(94705);

            function tZ(e) {
                let {
                    children: t,
                    features: r,
                    strict: o = !1
                } = e, [, i] = (0, n.useState)(!tJ(r)), a = (0, n.useRef)(void 0);
                if (!tJ(r)) {
                    let {
                        renderer: e,
                        ...t
                    } = r;
                    a.current = e, (0, tQ.Y)(t)
                }
                return (0, n.useEffect)(() => {
                    tJ(r) && r().then(e => {
                        let {
                            renderer: t,
                            ...r
                        } = e;
                        (0, tQ.Y)(r), a.current = t, i(!0)
                    })
                }, []), (0, tX.jsx)(tq.Y.Provider, {
                    value: {
                        renderer: a.current,
                        strict: o
                    },
                    children: t
                })
            }

            function tJ(e) {
                return "function" == typeof e
            }
            var t0 = r(25683),
                t1 = r(90271);
            let t2 = (0, r(19755).C)(),
                t5 = (0, t1.I)(t2);
            var t4 = () => r.e(578).then(r.bind(r, 70578)).then(e => e.default),
                t3 = e => {
                    let {
                        ripples: t = [],
                        motionProps: r,
                        color: n = "currentColor",
                        style: o,
                        onClear: i
                    } = e;
                    return (0, tX.jsx)(tX.Fragment, {
                        children: t.map(e => {
                            let t = Math.min(Math.max(.01 * e.size, .2), e.size > 100 ? .75 : .5);
                            return (0, tX.jsx)(tZ, {
                                features: t4,
                                children: (0, tX.jsx)(t0.N, {
                                    mode: "popLayout",
                                    children: (0, tX.jsx)(t5.span, {
                                        animate: {
                                            transform: "scale(2)",
                                            opacity: 0
                                        },
                                        className: "nextui-ripple",
                                        exit: {
                                            opacity: 0
                                        },
                                        initial: {
                                            transform: "scale(0)",
                                            opacity: .35
                                        },
                                        style: {
                                            position: "absolute",
                                            backgroundColor: n,
                                            borderRadius: "100%",
                                            transformOrigin: "center",
                                            pointerEvents: "none",
                                            overflow: "hidden",
                                            inset: 0,
                                            zIndex: 0,
                                            top: e.y,
                                            left: e.x,
                                            width: "".concat(e.size, "px"),
                                            height: "".concat(e.size, "px"),
                                            ...o
                                        },
                                        transition: {
                                            duration: t
                                        },
                                        onAnimationComplete: () => {
                                            i(e.key)
                                        },
                                        ...r
                                    })
                                })
                            }, e.key)
                        })
                    })
                };
            t3.displayName = "NextUI.Ripple";
            var t6 = t$((e, t) => {
                let {
                    Component: r,
                    domRef: o,
                    children: i,
                    styles: s,
                    spinnerSize: d,
                    spinner: c = (0, tX.jsx)(tY, {
                        color: "current",
                        size: d
                    }),
                    spinnerPlacement: f,
                    startContent: h,
                    endContent: m,
                    isLoading: g,
                    disableRipple: y,
                    getButtonProps: w,
                    getRippleProps: k,
                    isIconOnly: C
                } = function(e) {
                    var t, r, o, i, s, d, c, f, h;
                    let m = a(),
                        g = l(),
                        y = !!m,
                        {
                            ref: w,
                            as: k,
                            children: C,
                            startContent: M,
                            endContent: j,
                            autoFocus: R,
                            className: D,
                            spinner: L,
                            isLoading: O = !1,
                            disableRipple: N = !1,
                            fullWidth: I = null != (t = null == m ? void 0 : m.fullWidth) && t,
                            radius: B = null == m ? void 0 : m.radius,
                            size: W = null != (r = null == m ? void 0 : m.size) ? r : "md",
                            color: G = null != (o = null == m ? void 0 : m.color) ? o : "default",
                            variant: K = null != (i = null == m ? void 0 : m.variant) ? i : "solid",
                            disableAnimation: Y = null != (d = null != (s = null == m ? void 0 : m.disableAnimation) ? s : null == g ? void 0 : g.disableAnimation) && d,
                            isDisabled: q = null != (c = null == m ? void 0 : m.isDisabled) && c,
                            isIconOnly: Q = null != (f = null == m ? void 0 : m.isIconOnly) && f,
                            spinnerPlacement: Z = "start",
                            onPress: J,
                            onClick: et,
                            ...er
                        } = e,
                        en = k || "button",
                        eo = "string" == typeof en,
                        ei = function(e) {
                            let t = (0, n.useRef)(null);
                            return (0, n.useImperativeHandle)(e, () => t.current), t
                        }(w),
                        ea = null != (h = N || (null == g ? void 0 : g.disableRipple)) ? h : Y,
                        {
                            isFocusVisible: es,
                            isFocused: el,
                            focusProps: eu
                        } = function(e = {}) {
                            var t, r, o;
                            let {
                                autoFocus: i = !1,
                                isTextInput: a,
                                within: s
                            } = e, l = (0, n.useRef)({
                                isFocused: !1,
                                isFocusVisible: i || F()
                            }), [u, d] = (0, n.useState)(!1), [c, f] = (0, n.useState)(() => l.current.isFocused && l.current.isFocusVisible), p = (0, n.useCallback)(() => f(l.current.isFocused && l.current.isFocusVisible), []), h = (0, n.useCallback)(e => {
                                l.current.isFocused = e, d(e), p()
                            }, [p]);
                            t = e => {
                                l.current.isFocusVisible = e, p()
                            }, r = [], o = {
                                isTextInput: a
                            }, _(), (0, n.useEffect)(() => {
                                let e = (e, r) => {
                                    (function(e, t, r) {
                                        var n;
                                        let o = "undefined" != typeof window ? S(null == r ? void 0 : r.target).HTMLInputElement : HTMLInputElement,
                                            i = "undefined" != typeof window ? S(null == r ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement,
                                            a = "undefined" != typeof window ? S(null == r ? void 0 : r.target).HTMLElement : HTMLElement,
                                            s = "undefined" != typeof window ? S(null == r ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
                                        return !((e = e || (null == r ? void 0 : r.target) instanceof o && !V.has(null == r ? void 0 : null === (n = r.target) || void 0 === n ? void 0 : n.type) || (null == r ? void 0 : r.target) instanceof i || (null == r ? void 0 : r.target) instanceof a && (null == r ? void 0 : r.target.isContentEditable)) && "keyboard" === t && r instanceof s && !A[r.key])
                                    })(!!(null == o ? void 0 : o.isTextInput), e, r) && t(F())
                                };
                                return P.add(e), () => {
                                    P.delete(e)
                                }
                            }, r);
                            let {
                                focusProps: m
                            } = H({
                                isDisabled: s,
                                onFocusChange: h
                            }), {
                                focusWithinProps: v
                            } = function(e) {
                                let {
                                    isDisabled: t,
                                    onBlurWithin: r,
                                    onFocusWithin: o,
                                    onFocusWithinChange: i
                                } = e, a = (0, n.useRef)({
                                    isFocusWithin: !1
                                }), s = (0, n.useCallback)(e => {
                                    a.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (a.current.isFocusWithin = !1, r && r(e), i && i(!1))
                                }, [r, i, a]), l = U(s), u = (0, n.useCallback)(e => {
                                    a.current.isFocusWithin || document.activeElement !== e.target || (o && o(e), i && i(!0), a.current.isFocusWithin = !0, l(e))
                                }, [o, i, l]);
                                return t ? {
                                    focusWithinProps: {
                                        onFocus: void 0,
                                        onBlur: void 0
                                    }
                                } : {
                                    focusWithinProps: {
                                        onFocus: u,
                                        onBlur: s
                                    }
                                }
                            }({
                                isDisabled: !s,
                                onFocusWithinChange: h
                            });
                            return {
                                isFocused: u,
                                isFocusVisible: c,
                                focusProps: s ? v : m
                            }
                        }({
                            autoFocus: R
                        }),
                        ed = q || O,
                        ec = (0, n.useMemo)(() => e5({
                            size: W,
                            color: G,
                            variant: K,
                            radius: B,
                            fullWidth: I,
                            isDisabled: ed,
                            isInGroup: y,
                            disableAnimation: Y,
                            isIconOnly: Q,
                            className: D
                        }), [W, G, K, B, I, ed, y, Q, Y, D]),
                        {
                            onPress: ef,
                            onClear: ep,
                            ripples: eh
                        } = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                [t, r] = (0, n.useState)([]),
                                o = (0, n.useCallback)(e => {
                                    let t = e.target,
                                        n = Math.max(t.clientWidth, t.clientHeight);
                                    r(t => {
                                        var r;
                                        return [...t, {
                                            key: (r = t.length.toString(), `${r}-${Math.floor(1e6*Math.random())}`),
                                            size: n,
                                            x: e.x - n / 2,
                                            y: e.y - n / 2
                                        }]
                                    })
                                }, []);
                            return {
                                ripples: t,
                                onClear: (0, n.useCallback)(e => {
                                    r(t => t.filter(t => t.key !== e))
                                }, []),
                                onPress: o,
                                ...e
                            }
                        }(),
                        em = (0, n.useCallback)(e => {
                            ea || ed || Y || !ei.current || ef(e)
                        }, [ea, ed, Y, ei, ef]),
                        {
                            buttonProps: ev,
                            isPressed: eg
                        } = function(e, t) {
                            let r, {
                                elementType: o = "button",
                                isDisabled: i,
                                onPress: a,
                                onPressStart: s,
                                onPressEnd: l,
                                onPressChange: u,
                                preventFocusOnPress: d,
                                allowFocusWhenDisabled: c,
                                onClick: f,
                                href: h,
                                target: m,
                                rel: g,
                                type: y = "button",
                                allowTextSelectionOnPress: w
                            } = e;
                            r = "button" === o ? {
                                type: y,
                                disabled: i
                            } : {
                                role: "button",
                                tabIndex: i ? void 0 : 0,
                                href: "a" !== o || i ? void 0 : h,
                                target: "a" === o ? m : void 0,
                                type: "input" === o ? y : void 0,
                                disabled: "input" === o ? i : void 0,
                                "aria-disabled": i && "input" !== o ? i : void 0,
                                rel: "a" === o ? g : void 0
                            };
                            let P = v() || b();
                            f && "function" == typeof f && function(e, t, ...r) {
                                let n = t ? ` [${t}]` : " ",
                                    o = `[Next UI]${n}: ${e}`;
                                "undefined" != typeof console && (e4[o] || (e4[o] = !0))
                            }("onClick is deprecated, please use onPress instead. See: https://github.com/nextui-org/nextui/issues/4292", "useButton");
                            let {
                                pressProps: k,
                                isPressed: C
                            } = function(e) {
                                let t, r, o, i, {
                                        onPress: a,
                                        onPressChange: s,
                                        onPressStart: l,
                                        onPressEnd: u,
                                        onPressUp: d,
                                        isDisabled: c,
                                        isPressed: f,
                                        preventFocusOnPress: h,
                                        shouldCancelOnPointerExit: m,
                                        allowTextSelectionOnPress: v,
                                        ref: g,
                                        ...y
                                    } = function(e) {
                                        let t = (0, n.useContext)(tp);
                                        if (t) {
                                            let {
                                                register: r,
                                                ...n
                                            } = t;
                                            e = X(n, e), r()
                                        }
                                        return ti(t, e.ref), e
                                    }(e),
                                    [w, T] = (0, n.useState)(!1),
                                    P = (0, n.useRef)({
                                        isPressed: !1,
                                        ignoreEmulatedMouseEvents: !1,
                                        ignoreClickAfterPress: !1,
                                        didFirePressStart: !1,
                                        isTriggeringEvent: !1,
                                        activePointerId: null,
                                        target: null,
                                        isOverTarget: !1,
                                        pointerType: null
                                    }),
                                    {
                                        addGlobalListener: k,
                                        removeAllGlobalListeners: C
                                    } = (t = (0, n.useRef)(new Map), r = (0, n.useCallback)((e, r, n, o) => {
                                        let i = (null == o ? void 0 : o.once) ? (...e) => {
                                            t.current.delete(n), n(...e)
                                        } : n;
                                        t.current.set(n, {
                                            type: r,
                                            eventTarget: e,
                                            fn: i,
                                            options: o
                                        }), e.addEventListener(r, n, o)
                                    }, []), o = (0, n.useCallback)((e, r, n, o) => {
                                        var i;
                                        let a = (null === (i = t.current.get(n)) || void 0 === i ? void 0 : i.fn) || n;
                                        e.removeEventListener(r, a, o), t.current.delete(n)
                                    }, []), i = (0, n.useCallback)(() => {
                                        t.current.forEach((e, t) => {
                                            o(e.eventTarget, e.type, t, e.options)
                                        })
                                    }, [o]), (0, n.useEffect)(() => i, [i]), {
                                        addGlobalListener: r,
                                        removeGlobalListener: o,
                                        removeAllGlobalListeners: i
                                    }),
                                    M = z((e, t) => {
                                        let r = P.current;
                                        if (c || r.didFirePressStart) return !1;
                                        let n = !0;
                                        if (r.isTriggeringEvent = !0, l) {
                                            let r = new ty("pressstart", t, e);
                                            l(r), n = r.shouldStopPropagation
                                        }
                                        return s && s(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, T(!0), n
                                    }),
                                    A = z((e, t, r = !0) => {
                                        let n = P.current;
                                        if (!n.didFirePressStart) return !1;
                                        n.ignoreClickAfterPress = !0, n.didFirePressStart = !1, n.isTriggeringEvent = !0;
                                        let o = !0;
                                        if (u) {
                                            let r = new ty("pressend", t, e);
                                            u(r), o = r.shouldStopPropagation
                                        }
                                        if (s && s(!1), T(!1), a && r && !c) {
                                            let r = new ty("press", t, e);
                                            a(r), o && (o = r.shouldStopPropagation)
                                        }
                                        return n.isTriggeringEvent = !1, o
                                    }),
                                    j = z((e, t) => {
                                        let r = P.current;
                                        if (c) return !1;
                                        if (d) {
                                            r.isTriggeringEvent = !0;
                                            let n = new ty("pressup", t, e);
                                            return d(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
                                        }
                                        return !0
                                    }),
                                    R = z(e => {
                                        let t = P.current;
                                        t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && A(tT(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, C(), v || tf(t.target))
                                    }),
                                    D = z(e => {
                                        m && R(e)
                                    }),
                                    L = (0, n.useMemo)(() => {
                                        let e = P.current,
                                            t = {
                                                onKeyDown(t) {
                                                    if (tx(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                                                        var n;
                                                        tM(t.target, t.key) && t.preventDefault();
                                                        let o = !0;
                                                        if (!e.isPressed && !t.repeat) {
                                                            e.target = t.currentTarget, e.isPressed = !0, o = M(t, "keyboard");
                                                            let n = t.currentTarget;
                                                            k(E(t.currentTarget), "keyup", $(t => {
                                                                tx(t, n) && !t.repeat && n.contains(t.target) && e.target && j(tT(e.target, t), "keyboard")
                                                            }, r), !0)
                                                        }
                                                        o && t.stopPropagation(), t.metaKey && p() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                                                    } else "Meta" === t.key && (e.metaKeyEvents = new Map)
                                                },
                                                onClick(t) {
                                                    if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !tv.isOpening) {
                                                        let r = !0;
                                                        if (c && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || x(t.nativeEvent))) {
                                                            c || h || tn(t.currentTarget);
                                                            let e = M(t, "virtual"),
                                                                n = j(t, "virtual"),
                                                                o = A(t, "virtual");
                                                            r = e && n && o
                                                        }
                                                        e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, r && t.stopPropagation()
                                                    }
                                                }
                                            },
                                            r = t => {
                                                var r, n, o;
                                                if (e.isPressed && e.target && tx(t, e.target)) {
                                                    tM(t.target, t.key) && t.preventDefault();
                                                    let r = t.target;
                                                    A(tT(e.target, t), "keyboard", e.target.contains(r)), C(), "Enter" !== t.key && tw(e.target) && e.target.contains(r) && !t[tb] && (t[tb] = !0, tv(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
                                                } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                                                    let t = e.metaKeyEvents;
                                                    for (let r of (e.metaKeyEvents = void 0, t.values())) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
                                                }
                                            };
                                        if ("undefined" != typeof PointerEvent) {
                                            t.onPointerDown = t => {
                                                var o;
                                                if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
                                                if (o = t.nativeEvent, !b() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) {
                                                    e.pointerType = "virtual";
                                                    return
                                                }
                                                tk(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
                                                let a = !0;
                                                e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, c || h || tn(t.currentTarget), v || tc(e.target), a = M(t, e.pointerType), k(E(t.currentTarget), "pointermove", r, !1), k(E(t.currentTarget), "pointerup", n, !1), k(E(t.currentTarget), "pointercancel", i, !1)), a && t.stopPropagation()
                                            }, t.onMouseDown = e => {
                                                e.currentTarget.contains(e.target) && 0 === e.button && (tk(e.currentTarget) && e.preventDefault(), e.stopPropagation())
                                            }, t.onPointerUp = t => {
                                                t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && tP(t, t.currentTarget) && j(t, e.pointerType || t.pointerType)
                                            };
                                            let r = t => {
                                                    t.pointerId === e.activePointerId && (e.target && tP(t, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, M(tT(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, A(tT(e.target, t), e.pointerType, !1), D(t)))
                                                },
                                                n = t => {
                                                    t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (tP(t, e.target) && null != e.pointerType ? A(tT(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && A(tT(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, C(), v || tf(e.target), "ontouchend" in e.target && "mouse" !== t.pointerType && k(e.target, "touchend", o, {
                                                        once: !0
                                                    }))
                                                },
                                                o = e => {
                                                    tC(e.currentTarget) && e.preventDefault()
                                                },
                                                i = e => {
                                                    R(e)
                                                };
                                            t.onDragStart = e => {
                                                e.currentTarget.contains(e.target) && R(e)
                                            }
                                        } else {
                                            t.onMouseDown = t => {
                                                if (0 === t.button && t.currentTarget.contains(t.target)) {
                                                    if (tk(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents) {
                                                        t.stopPropagation();
                                                        return
                                                    }
                                                    e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = x(t.nativeEvent) ? "virtual" : "mouse", c || h || tn(t.currentTarget), M(t, e.pointerType) && t.stopPropagation(), k(E(t.currentTarget), "mouseup", r, !1)
                                                }
                                            }, t.onMouseEnter = t => {
                                                if (!t.currentTarget.contains(t.target)) return;
                                                let r = !0;
                                                e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, r = M(t, e.pointerType)), r && t.stopPropagation()
                                            }, t.onMouseLeave = t => {
                                                if (!t.currentTarget.contains(t.target)) return;
                                                let r = !0;
                                                e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, r = A(t, e.pointerType, !1), D(t)), r && t.stopPropagation()
                                            }, t.onMouseUp = t => {
                                                t.currentTarget.contains(t.target) && !e.ignoreEmulatedMouseEvents && 0 === t.button && j(t, e.pointerType || "mouse")
                                            };
                                            let r = t => {
                                                if (0 === t.button) {
                                                    if (e.isPressed = !1, C(), e.ignoreEmulatedMouseEvents) {
                                                        e.ignoreEmulatedMouseEvents = !1;
                                                        return
                                                    }
                                                    e.target && tP(t, e.target) && null != e.pointerType ? A(tT(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && A(tT(e.target, t), e.pointerType, !1), e.isOverTarget = !1
                                                }
                                            };
                                            t.onTouchStart = t => {
                                                if (!t.currentTarget.contains(t.target)) return;
                                                let r = function(e) {
                                                    let {
                                                        targetTouches: t
                                                    } = e;
                                                    return t.length > 0 ? t[0] : null
                                                }(t.nativeEvent);
                                                r && (e.activePointerId = r.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", c || h || tn(t.currentTarget), v || tc(e.target), M(tS(e.target, t), e.pointerType) && t.stopPropagation(), k(S(t.currentTarget), "scroll", n, !0))
                                            }, t.onTouchMove = t => {
                                                if (!t.currentTarget.contains(t.target)) return;
                                                if (!e.isPressed) {
                                                    t.stopPropagation();
                                                    return
                                                }
                                                let r = tE(t.nativeEvent, e.activePointerId),
                                                    n = !0;
                                                r && tP(r, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, n = M(tS(e.target, t), e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, n = A(tS(e.target, t), e.pointerType, !1), D(tS(e.target, t))), n && t.stopPropagation()
                                            }, t.onTouchEnd = t => {
                                                if (!t.currentTarget.contains(t.target)) return;
                                                if (!e.isPressed) {
                                                    t.stopPropagation();
                                                    return
                                                }
                                                let r = tE(t.nativeEvent, e.activePointerId),
                                                    n = !0;
                                                r && tP(r, t.currentTarget) && null != e.pointerType ? (j(tS(e.target, t), e.pointerType), n = A(tS(e.target, t), e.pointerType)) : e.isOverTarget && null != e.pointerType && (n = A(tS(e.target, t), e.pointerType, !1)), n && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !v && tf(e.target), C()
                                            }, t.onTouchCancel = t => {
                                                t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && R(tS(e.target, t)))
                                            };
                                            let n = t => {
                                                e.isPressed && t.target.contains(e.target) && R({
                                                    currentTarget: e.target,
                                                    shiftKey: !1,
                                                    ctrlKey: !1,
                                                    metaKey: !1,
                                                    altKey: !1
                                                })
                                            };
                                            t.onDragStart = e => {
                                                e.currentTarget.contains(e.target) && R(e)
                                            }
                                        }
                                        return t
                                    }, [k, c, h, C, v, R, D, A, M, j]);
                                return (0, n.useEffect)(() => () => {
                                    var e;
                                    v || tf(null !== (e = P.current.target) && void 0 !== e ? e : void 0)
                                }, [v]), {
                                    isPressed: f || w,
                                    pressProps: X(y, L)
                                }
                            }({
                                onPressStart: s,
                                onPressEnd: l,
                                onPressChange: u,
                                onPress: e => {
                                    P && (null == f || f(e)), null == a || a(e)
                                },
                                isDisabled: i,
                                preventFocusOnPress: d,
                                allowTextSelectionOnPress: w,
                                ref: t
                            }), {
                                focusableProps: M
                            } = function(e, t) {
                                let {
                                    focusProps: r
                                } = H(e), {
                                    keyboardProps: o
                                } = {
                                    keyboardProps: e.isDisabled ? {} : {
                                        onKeyDown: ta(e.onKeyDown),
                                        onKeyUp: ta(e.onKeyUp)
                                    }
                                }, i = X(r, o), a = function(e) {
                                    let t = (0, n.useContext)(ts) || {};
                                    ti(t, e);
                                    let {
                                        ref: r,
                                        ...o
                                    } = t;
                                    return o
                                }(t), s = e.isDisabled ? {} : a, l = (0, n.useRef)(e.autoFocus);
                                return (0, n.useEffect)(() => {
                                    l.current && t.current && function(e) {
                                        let t = E(e);
                                        if ("virtual" === T) {
                                            let r = t.activeElement;
                                            tr(() => {
                                                t.activeElement === r && e.isConnected && tn(e)
                                            })
                                        } else tn(e)
                                    }(t.current), l.current = !1
                                }, [t]), {
                                    focusableProps: X({ ...i,
                                        tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
                                    }, s)
                                }
                            }(e, t);
                            c && (M.tabIndex = i ? -1 : M.tabIndex);
                            let A = X(M, k, function(e, t = {}) {
                                let {
                                    labelable: r,
                                    isLink: n,
                                    propNames: o
                                } = t, i = {};
                                for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (e3.has(t) || r && e6.has(t) || n && e7.has(t) || (null == o ? void 0 : o.has(t)) || e9.test(t)) && (i[t] = e[t]);
                                return i
                            }(e, {
                                labelable: !0
                            }));
                            return {
                                isPressed: C,
                                buttonProps: X(r, A, {
                                    "aria-haspopup": e["aria-haspopup"],
                                    "aria-expanded": e["aria-expanded"],
                                    "aria-controls": e["aria-controls"],
                                    "aria-pressed": e["aria-pressed"],
                                    onClick: e => {
                                        "button" === y && P || null == f || f(e)
                                    }
                                })
                            }
                        }({
                            elementType: k,
                            isDisabled: ed,
                            onPress: $(J, em),
                            onClick: et,
                            ...er
                        }, ei),
                        {
                            isHovered: ey,
                            hoverProps: eb
                        } = function(e) {
                            let {
                                onHoverStart: t,
                                onHoverChange: r,
                                onHoverEnd: o,
                                isDisabled: i
                            } = e, [a, s] = (0, n.useState)(!1), l = (0, n.useRef)({
                                isHovered: !1,
                                ignoreEmulatedMouseEvents: !1,
                                pointerType: "",
                                target: null
                            }).current;
                            (0, n.useEffect)(tN, []);
                            let {
                                hoverProps: u,
                                triggerHoverEnd: d
                            } = (0, n.useMemo)(() => {
                                let e = (e, n) => {
                                        if (l.pointerType = n, i || "touch" === n || l.isHovered || !e.currentTarget.contains(e.target)) return;
                                        l.isHovered = !0;
                                        let o = e.currentTarget;
                                        l.target = o, t && t({
                                            type: "hoverstart",
                                            target: o,
                                            pointerType: n
                                        }), r && r(!0), s(!0)
                                    },
                                    n = (e, t) => {
                                        if (l.pointerType = "", l.target = null, "touch" === t || !l.isHovered) return;
                                        l.isHovered = !1;
                                        let n = e.currentTarget;
                                        o && o({
                                            type: "hoverend",
                                            target: n,
                                            pointerType: t
                                        }), r && r(!1), s(!1)
                                    },
                                    a = {};
                                return "undefined" != typeof PointerEvent ? (a.onPointerEnter = t => {
                                    tR && "mouse" === t.pointerType || e(t, t.pointerType)
                                }, a.onPointerLeave = e => {
                                    !i && e.currentTarget.contains(e.target) && n(e, e.pointerType)
                                }) : (a.onTouchStart = () => {
                                    l.ignoreEmulatedMouseEvents = !0
                                }, a.onMouseEnter = t => {
                                    l.ignoreEmulatedMouseEvents || tR || e(t, "mouse"), l.ignoreEmulatedMouseEvents = !1
                                }, a.onMouseLeave = e => {
                                    !i && e.currentTarget.contains(e.target) && n(e, "mouse")
                                }), {
                                    hoverProps: a,
                                    triggerHoverEnd: n
                                }
                            }, [t, r, o, i, l]);
                            return (0, n.useEffect)(() => {
                                i && d({
                                    currentTarget: l.target
                                }, l.pointerType)
                            }, [i]), {
                                hoverProps: u,
                                isHovered: a
                            }
                        }({
                            isDisabled: ed
                        }),
                        ew = (0, n.useCallback)(function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return {
                                "data-disabled": u(ed),
                                "data-focus": u(el),
                                "data-pressed": u(eg),
                                "data-focus-visible": u(es),
                                "data-hover": u(ey),
                                "data-loading": u(O),
                                ...X(ev, eu, eb, ee(er, {
                                    enabled: eo
                                }), ee(e))
                            }
                        }, [O, ed, el, eg, eo, es, ey, ev, eu, eb, er]),
                        ex = e => (0, n.isValidElement)(e) ? (0, n.cloneElement)(e, {
                            "aria-hidden": !0,
                            focusable: !1,
                            tabIndex: -1
                        }) : null,
                        eE = ex(M);
                    return {
                        Component: en,
                        children: C,
                        domRef: ei,
                        spinner: L,
                        styles: ec,
                        startContent: eE,
                        endContent: ex(j),
                        isLoading: O,
                        spinnerPlacement: Z,
                        spinnerSize: (0, n.useMemo)(() => ({
                            sm: "sm",
                            md: "sm",
                            lg: "md"
                        })[W], [W]),
                        disableRipple: ea,
                        getButtonProps: ew,
                        getRippleProps: (0, n.useCallback)(() => ({
                            ripples: eh,
                            onClear: ep
                        }), [eh, ep]),
                        isIconOnly: Q
                    }
                }({ ...e,
                    ref: t
                });
                return (0, tX.jsxs)(r, {
                    ref: o,
                    className: s,
                    ...w(),
                    children: [h, g && "start" === f && c, g && C ? null : i, g && "end" === f && c, m, !y && (0, tX.jsx)(t3, { ...k()
                    })]
                })
            });
            t6.displayName = "NextUI.Button";
            var t7 = t6
        },
        93610: (e, t, r) => {
            "use strict";

            function n(e, t, {
                checkForDefaultPrevented: r = !0
            } = {}) {
                return function(n) {
                    if (e ? .(n), !1 === r || !n.defaultPrevented) return t ? .(n)
                }
            }
            r.d(t, {
                m: () => n
            })
        },
        88068: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => i,
                t: () => o
            });
            var n = r(12115);

            function o(...e) {
                return t => e.forEach(e => {
                    "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
            }

            function i(...e) {
                return n.useCallback(o(...e), e)
            }
        },
        18166: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r(12115),
                o = r(95155);

            function i(e, t = []) {
                let r = [],
                    a = () => {
                        let t = r.map(e => n.createContext(e));
                        return function(r) {
                            let o = r ? .[e] || t;
                            return n.useMemo(() => ({
                                [`__scope${e}`]: { ...r,
                                    [e]: o
                                }
                            }), [r, o])
                        }
                    };
                return a.scopeName = e, [function(t, i) {
                    let a = n.createContext(i),
                        s = r.length;
                    r = [...r, i];
                    let l = t => {
                        let {
                            scope: r,
                            children: i,
                            ...l
                        } = t, u = r ? .[e] ? .[s] || a, d = n.useMemo(() => l, Object.values(l));
                        return (0, o.jsx)(u.Provider, {
                            value: d,
                            children: i
                        })
                    };
                    return l.displayName = t + "Provider", [l, function(r, o) {
                        let l = o ? .[e] ? .[s] || a,
                            u = n.useContext(l);
                        if (u) return u;
                        if (void 0 !== i) return i;
                        throw Error(`\`${r}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let r = () => {
                        let r = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = r.reduce((t, {
                                useScope: r,
                                scopeName: n
                            }) => {
                                let o = r(e)[`__scope${n}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return n.useMemo(() => ({
                                [`__scope${t.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return r.scopeName = t.scopeName, r
                }(a, ...t)]
            }
        },
        4256: (e, t, r) => {
            "use strict";
            r.d(t, {
                jH: () => i
            });
            var n = r(12115);
            r(95155);
            var o = n.createContext(void 0);

            function i(e) {
                let t = n.useContext(o);
                return e || t || "ltr"
            }
        },
        10617: (e, t, r) => {
            "use strict";
            r.d(t, {
                H_: () => nB,
                UC: () => n_,
                YJ: () => nI,
                q7: () => nV,
                VF: () => nU,
                JU: () => nF,
                ZL: () => nN,
                z6: () => nz,
                hN: () => nW,
                bL: () => nL,
                wv: () => nH,
                Pb: () => n$,
                G5: () => nK,
                ZP: () => nG,
                l9: () => nO
            });
            var n, o, i, a = r(12115),
                s = r.t(a, 2),
                l = r(93610),
                u = r(88068),
                d = r(18166),
                c = r(1488),
                f = r(23360),
                p = r(95155),
                h = r(12317);

            function m(e) {
                let t = e + "CollectionProvider",
                    [r, n] = function(e, t = []) {
                        let r = [],
                            n = () => {
                                let t = r.map(e => a.createContext(e));
                                return function(r) {
                                    let n = r ? .[e] || t;
                                    return a.useMemo(() => ({
                                        [`__scope${e}`]: { ...r,
                                            [e]: n
                                        }
                                    }), [r, n])
                                }
                            };
                        return n.scopeName = e, [function(t, n) {
                            let o = a.createContext(n),
                                i = r.length;

                            function s(t) {
                                let {
                                    scope: r,
                                    children: n,
                                    ...s
                                } = t, l = r ? .[e][i] || o, u = a.useMemo(() => s, Object.values(s));
                                return (0, p.jsx)(l.Provider, {
                                    value: u,
                                    children: n
                                })
                            }
                            return r = [...r, n], s.displayName = t + "Provider", [s, function(r, s) {
                                let l = s ? .[e][i] || o,
                                    u = a.useContext(l);
                                if (u) return u;
                                if (void 0 !== n) return n;
                                throw Error(`\`${r}\` must be used within \`${t}\``)
                            }]
                        }, function(...e) {
                            let t = e[0];
                            if (1 === e.length) return t;
                            let r = () => {
                                let r = e.map(e => ({
                                    useScope: e(),
                                    scopeName: e.scopeName
                                }));
                                return function(e) {
                                    let n = r.reduce((t, {
                                        useScope: r,
                                        scopeName: n
                                    }) => {
                                        let o = r(e)[`__scope${n}`];
                                        return { ...t,
                                            ...o
                                        }
                                    }, {});
                                    return a.useMemo(() => ({
                                        [`__scope${t.scopeName}`]: n
                                    }), [n])
                                }
                            };
                            return r.scopeName = t.scopeName, r
                        }(n, ...t)]
                    }(t),
                    [o, i] = r(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    s = e => {
                        let {
                            scope: t,
                            children: r
                        } = e, n = a.useRef(null), i = a.useRef(new Map).current;
                        return (0, p.jsx)(o, {
                            scope: t,
                            itemMap: i,
                            collectionRef: n,
                            children: r
                        })
                    };
                s.displayName = t;
                let l = e + "CollectionSlot",
                    d = a.forwardRef((e, t) => {
                        let {
                            scope: r,
                            children: n
                        } = e, o = i(l, r), a = (0, u.s)(t, o.collectionRef);
                        return (0, p.jsx)(h.DX, {
                            ref: a,
                            children: n
                        })
                    });
                d.displayName = l;
                let c = e + "CollectionItemSlot",
                    f = "data-radix-collection-item",
                    m = a.forwardRef((e, t) => {
                        let {
                            scope: r,
                            children: n,
                            ...o
                        } = e, s = a.useRef(null), l = (0, u.s)(t, s), d = i(c, r);
                        return a.useEffect(() => (d.itemMap.set(s, {
                            ref: s,
                            ...o
                        }), () => void d.itemMap.delete(s))), (0, p.jsx)(h.DX, {
                            [f]: "",
                            ref: l,
                            children: n
                        })
                    });
                return m.displayName = c, [{
                    Provider: s,
                    Slot: d,
                    ItemSlot: m
                }, function(t) {
                    let r = i(e + "CollectionConsumer", t);
                    return a.useCallback(() => {
                        let e = r.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll("[".concat(f, "]")));
                        return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
                    }, [r.collectionRef, r.itemMap])
                }, n]
            }
            var v = r(4256),
                g = r(41524),
                y = "dismissableLayer.update",
                b = a.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                w = a.forwardRef((e, t) => {
                    var r, n;
                    let {
                        disableOutsidePointerEvents: i = !1,
                        onEscapeKeyDown: s,
                        onPointerDownOutside: d,
                        onFocusOutside: c,
                        onInteractOutside: h,
                        onDismiss: m,
                        ...v
                    } = e, w = a.useContext(b), [S, T] = a.useState(null), P = null !== (n = null == S ? void 0 : S.ownerDocument) && void 0 !== n ? n : null === (r = globalThis) || void 0 === r ? void 0 : r.document, [, k] = a.useState({}), C = (0, u.s)(t, e => T(e)), M = Array.from(w.layers), [A] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1), j = M.indexOf(A), R = S ? M.indexOf(S) : -1, D = w.layersWithOutsidePointerEventsDisabled.size > 0, L = R >= j, O = function(e) {
                        var t;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            n = (0, g.c)(e),
                            o = a.useRef(!1),
                            i = a.useRef(() => {});
                        return a.useEffect(() => {
                            let e = e => {
                                    if (e.target && !o.current) {
                                        let t = function() {
                                                E("dismissableLayer.pointerDownOutside", n, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (r.removeEventListener("click", i.current), i.current = t, r.addEventListener("click", i.current, {
                                            once: !0
                                        })) : t()
                                    } else r.removeEventListener("click", i.current);
                                    o.current = !1
                                },
                                t = window.setTimeout(() => {
                                    r.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), r.removeEventListener("pointerdown", e), r.removeEventListener("click", i.current)
                            }
                        }, [r, n]), {
                            onPointerDownCapture: () => o.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            r = [...w.branches].some(e => e.contains(t));
                        !L || r || (null == d || d(e), null == h || h(e), e.defaultPrevented || null == m || m())
                    }, P), N = function(e) {
                        var t;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            n = (0, g.c)(e),
                            o = a.useRef(!1);
                        return a.useEffect(() => {
                            let e = e => {
                                e.target && !o.current && E("dismissableLayer.focusOutside", n, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return r.addEventListener("focusin", e), () => r.removeEventListener("focusin", e)
                        }, [r, n]), {
                            onFocusCapture: () => o.current = !0,
                            onBlurCapture: () => o.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...w.branches].some(e => e.contains(t)) || (null == c || c(e), null == h || h(e), e.defaultPrevented || null == m || m())
                    }, P);
                    return ! function(e, t = globalThis ? .document) {
                        let r = (0, g.c)(e);
                        a.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && r(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [r, t])
                    }(e => {
                        R !== w.layers.size - 1 || (null == s || s(e), !e.defaultPrevented && m && (e.preventDefault(), m()))
                    }, P), a.useEffect(() => {
                        if (S) return i && (0 === w.layersWithOutsidePointerEventsDisabled.size && (o = P.body.style.pointerEvents, P.body.style.pointerEvents = "none"), w.layersWithOutsidePointerEventsDisabled.add(S)), w.layers.add(S), x(), () => {
                            i && 1 === w.layersWithOutsidePointerEventsDisabled.size && (P.body.style.pointerEvents = o)
                        }
                    }, [S, P, i, w]), a.useEffect(() => () => {
                        S && (w.layers.delete(S), w.layersWithOutsidePointerEventsDisabled.delete(S), x())
                    }, [S, w]), a.useEffect(() => {
                        let e = () => k({});
                        return document.addEventListener(y, e), () => document.removeEventListener(y, e)
                    }, []), (0, p.jsx)(f.sG.div, { ...v,
                        ref: C,
                        style: {
                            pointerEvents: D ? L ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, l.m)(e.onFocusCapture, N.onFocusCapture),
                        onBlurCapture: (0, l.m)(e.onBlurCapture, N.onBlurCapture),
                        onPointerDownCapture: (0, l.m)(e.onPointerDownCapture, O.onPointerDownCapture)
                    })
                });

            function x() {
                let e = new CustomEvent(y);
                document.dispatchEvent(e)
            }

            function E(e, t, r, n) {
                let {
                    discrete: o
                } = n, i = r.originalEvent.target, a = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: r
                });
                t && i.addEventListener(e, t, {
                    once: !0
                }), o ? (0, f.hO)(i, a) : i.dispatchEvent(a)
            }
            w.displayName = "DismissableLayer", a.forwardRef((e, t) => {
                let r = a.useContext(b),
                    n = a.useRef(null),
                    o = (0, u.s)(t, n);
                return a.useEffect(() => {
                    let e = n.current;
                    if (e) return r.branches.add(e), () => {
                        r.branches.delete(e)
                    }
                }, [r.branches]), (0, p.jsx)(f.sG.div, { ...e,
                    ref: o
                })
            }).displayName = "DismissableLayerBranch";
            var S = 0;

            function T() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
            }
            var P = "focusScope.autoFocusOnMount",
                k = "focusScope.autoFocusOnUnmount",
                C = {
                    bubbles: !1,
                    cancelable: !0
                },
                M = a.forwardRef((e, t) => {
                    let {
                        loop: r = !1,
                        trapped: n = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: i,
                        ...s
                    } = e, [l, d] = a.useState(null), c = (0, g.c)(o), h = (0, g.c)(i), m = a.useRef(null), v = (0, u.s)(t, e => d(e)), y = a.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    a.useEffect(() => {
                        if (n) {
                            let e = function(e) {
                                    if (y.paused || !l) return;
                                    let t = e.target;
                                    l.contains(t) ? m.current = t : R(m.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (y.paused || !l) return;
                                    let t = e.relatedTarget;
                                    null === t || l.contains(t) || R(m.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let r = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && R(l)
                            });
                            return l && r.observe(l, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
                            }
                        }
                    }, [n, l, y.paused]), a.useEffect(() => {
                        if (l) {
                            D.add(y);
                            let e = document.activeElement;
                            if (!l.contains(e)) {
                                let t = new CustomEvent(P, C);
                                l.addEventListener(P, c), l.dispatchEvent(t), t.defaultPrevented || (function(e) {
                                    let {
                                        select: t = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = document.activeElement;
                                    for (let n of e)
                                        if (R(n, {
                                                select: t
                                            }), document.activeElement !== r) return
                                }(A(l).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && R(l))
                            }
                            return () => {
                                l.removeEventListener(P, c), setTimeout(() => {
                                    let t = new CustomEvent(k, C);
                                    l.addEventListener(k, h), l.dispatchEvent(t), t.defaultPrevented || R(null != e ? e : document.body, {
                                        select: !0
                                    }), l.removeEventListener(k, h), D.remove(y)
                                }, 0)
                            }
                        }
                    }, [l, c, h, y]);
                    let b = a.useCallback(e => {
                        if (!r && !n || y.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [n, i] = function(e) {
                                    let t = A(e);
                                    return [j(t, e), j(t.reverse(), e)]
                                }(t);
                            n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(), r && R(i, {
                                select: !0
                            })) : (e.preventDefault(), r && R(n, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [r, n, y.paused]);
                    return (0, p.jsx)(f.sG.div, {
                        tabIndex: -1,
                        ...s,
                        ref: v,
                        onKeyDown: b
                    })
                });

            function A(e) {
                let t = [],
                    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; r.nextNode();) t.push(r.currentNode);
                return t
            }

            function j(e, t) {
                for (let r of e)
                    if (! function(e, t) {
                            let {
                                upTo: r
                            } = t;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === r || e !== r);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(r, {
                            upTo: t
                        })) return r
            }

            function R(e) {
                let {
                    select: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var r;
                    let n = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== n && (r = e) instanceof HTMLInputElement && "select" in r && t && e.select()
                }
            }
            M.displayName = "FocusScope";
            var D = function() {
                let e = [];
                return {
                    add(t) {
                        let r = e[0];
                        t !== r && (null == r || r.pause()), (e = L(e, t)).unshift(t)
                    },
                    remove(t) {
                        var r;
                        null === (r = (e = L(e, t))[0]) || void 0 === r || r.resume()
                    }
                }
            }();

            function L(e, t) {
                let r = [...e],
                    n = r.indexOf(t);
                return -1 !== n && r.splice(n, 1), r
            }
            var O = r(46611),
                N = s["useId".toString()] || (() => void 0),
                _ = 0;

            function I(e) {
                let [t, r] = a.useState(N());
                return (0, O.N)(() => {
                    e || r(e => e ? ? String(_++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
            let F = ["top", "right", "bottom", "left"],
                V = Math.min,
                B = Math.max,
                z = Math.round,
                W = Math.floor,
                U = e => ({
                    x: e,
                    y: e
                }),
                H = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                $ = {
                    start: "end",
                    end: "start"
                };

            function G(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function K(e) {
                return e.split("-")[0]
            }

            function X(e) {
                return e.split("-")[1]
            }

            function Y(e) {
                return "x" === e ? "y" : "x"
            }

            function q(e) {
                return "y" === e ? "height" : "width"
            }

            function Q(e) {
                return ["top", "bottom"].includes(K(e)) ? "y" : "x"
            }

            function Z(e) {
                return e.replace(/start|end/g, e => $[e])
            }

            function J(e) {
                return e.replace(/left|right|bottom|top/g, e => H[e])
            }

            function ee(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function et(e) {
                let {
                    x: t,
                    y: r,
                    width: n,
                    height: o
                } = e;
                return {
                    width: n,
                    height: o,
                    top: r,
                    left: t,
                    right: t + n,
                    bottom: r + o,
                    x: t,
                    y: r
                }
            }

            function er(e, t, r) {
                let n, {
                        reference: o,
                        floating: i
                    } = e,
                    a = Q(t),
                    s = Y(Q(t)),
                    l = q(s),
                    u = K(t),
                    d = "y" === a,
                    c = o.x + o.width / 2 - i.width / 2,
                    f = o.y + o.height / 2 - i.height / 2,
                    p = o[l] / 2 - i[l] / 2;
                switch (u) {
                    case "top":
                        n = {
                            x: c,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        n = {
                            x: c,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        n = {
                            x: o.x + o.width,
                            y: f
                        };
                        break;
                    case "left":
                        n = {
                            x: o.x - i.width,
                            y: f
                        };
                        break;
                    default:
                        n = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (X(t)) {
                    case "start":
                        n[s] -= p * (r && d ? -1 : 1);
                        break;
                    case "end":
                        n[s] += p * (r && d ? -1 : 1)
                }
                return n
            }
            let en = async (e, t, r) => {
                let {
                    placement: n = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: a
                } = r, s = i.filter(Boolean), l = await (null == a.isRTL ? void 0 : a.isRTL(t)), u = await a.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: d,
                    y: c
                } = er(u, n, l), f = n, p = {}, h = 0;
                for (let r = 0; r < s.length; r++) {
                    let {
                        name: i,
                        fn: m
                    } = s[r], {
                        x: v,
                        y: g,
                        data: y,
                        reset: b
                    } = await m({
                        x: d,
                        y: c,
                        initialPlacement: n,
                        placement: f,
                        strategy: o,
                        middlewareData: p,
                        rects: u,
                        platform: a,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    d = null != v ? v : d, c = null != g ? g : c, p = { ...p,
                        [i]: { ...p[i],
                            ...y
                        }
                    }, b && h <= 50 && (h++, "object" == typeof b && (b.placement && (f = b.placement), b.rects && (u = !0 === b.rects ? await a.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : b.rects), {
                        x: d,
                        y: c
                    } = er(u, f, l)), r = -1)
                }
                return {
                    x: d,
                    y: c,
                    placement: f,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function eo(e, t) {
                var r;
                void 0 === t && (t = {});
                let {
                    x: n,
                    y: o,
                    platform: i,
                    rects: a,
                    elements: s,
                    strategy: l
                } = e, {
                    boundary: u = "clippingAncestors",
                    rootBoundary: d = "viewport",
                    elementContext: c = "floating",
                    altBoundary: f = !1,
                    padding: p = 0
                } = G(t, e), h = ee(p), m = s[f ? "floating" === c ? "reference" : "floating" : c], v = et(await i.getClippingRect({
                    element: null == (r = await (null == i.isElement ? void 0 : i.isElement(m))) || r ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating)),
                    boundary: u,
                    rootBoundary: d,
                    strategy: l
                })), g = "floating" === c ? {
                    x: n,
                    y: o,
                    width: a.floating.width,
                    height: a.floating.height
                } : a.reference, y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)), b = await (null == i.isElement ? void 0 : i.isElement(y)) && await (null == i.getScale ? void 0 : i.getScale(y)) || {
                    x: 1,
                    y: 1
                }, w = et(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: s,
                    rect: g,
                    offsetParent: y,
                    strategy: l
                }) : g);
                return {
                    top: (v.top - w.top + h.top) / b.y,
                    bottom: (w.bottom - v.bottom + h.bottom) / b.y,
                    left: (v.left - w.left + h.left) / b.x,
                    right: (w.right - v.right + h.right) / b.x
                }
            }

            function ei(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function ea(e) {
                return F.some(t => e[t] >= 0)
            }
            async function es(e, t) {
                let {
                    placement: r,
                    platform: n,
                    elements: o
                } = e, i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)), a = K(r), s = X(r), l = "y" === Q(r), u = ["left", "top"].includes(a) ? -1 : 1, d = i && l ? -1 : 1, c = G(t, e), {
                    mainAxis: f,
                    crossAxis: p,
                    alignmentAxis: h
                } = "number" == typeof c ? {
                    mainAxis: c,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: c.mainAxis || 0,
                    crossAxis: c.crossAxis || 0,
                    alignmentAxis: c.alignmentAxis
                };
                return s && "number" == typeof h && (p = "end" === s ? -1 * h : h), l ? {
                    x: p * d,
                    y: f * u
                } : {
                    x: f * u,
                    y: p * d
                }
            }

            function el() {
                return "undefined" != typeof window
            }

            function eu(e) {
                return ef(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function ed(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function ec(e) {
                var t;
                return null == (t = (ef(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function ef(e) {
                return !!el() && (e instanceof Node || e instanceof ed(e).Node)
            }

            function ep(e) {
                return !!el() && (e instanceof Element || e instanceof ed(e).Element)
            }

            function eh(e) {
                return !!el() && (e instanceof HTMLElement || e instanceof ed(e).HTMLElement)
            }

            function em(e) {
                return !!el() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof ed(e).ShadowRoot)
            }

            function ev(e) {
                let {
                    overflow: t,
                    overflowX: r,
                    overflowY: n,
                    display: o
                } = ex(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
            }

            function eg(e) {
                return [":popover-open", ":modal"].some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function ey(e) {
                let t = eb(),
                    r = ep(e) ? ex(e) : e;
                return "none" !== r.transform || "none" !== r.perspective || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "perspective", "filter"].some(e => (r.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (r.contain || "").includes(e))
            }

            function eb() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function ew(e) {
                return ["html", "body", "#document"].includes(eu(e))
            }

            function ex(e) {
                return ed(e).getComputedStyle(e)
            }

            function eE(e) {
                return ep(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function eS(e) {
                if ("html" === eu(e)) return e;
                let t = e.assignedSlot || e.parentNode || em(e) && e.host || ec(e);
                return em(t) ? t.host : t
            }

            function eT(e, t, r) {
                var n;
                void 0 === t && (t = []), void 0 === r && (r = !0);
                let o = function e(t) {
                        let r = eS(t);
                        return ew(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : eh(r) && ev(r) ? r : e(r)
                    }(e),
                    i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = ed(o);
                if (i) {
                    let e = eP(a);
                    return t.concat(a, a.visualViewport || [], ev(o) ? o : [], e && r ? eT(e) : [])
                }
                return t.concat(o, eT(o, [], r))
            }

            function eP(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }

            function ek(e) {
                let t = ex(e),
                    r = parseFloat(t.width) || 0,
                    n = parseFloat(t.height) || 0,
                    o = eh(e),
                    i = o ? e.offsetWidth : r,
                    a = o ? e.offsetHeight : n,
                    s = z(r) !== i || z(n) !== a;
                return s && (r = i, n = a), {
                    width: r,
                    height: n,
                    $: s
                }
            }

            function eC(e) {
                return ep(e) ? e : e.contextElement
            }

            function eM(e) {
                let t = eC(e);
                if (!eh(t)) return U(1);
                let r = t.getBoundingClientRect(),
                    {
                        width: n,
                        height: o,
                        $: i
                    } = ek(t),
                    a = (i ? z(r.width) : r.width) / n,
                    s = (i ? z(r.height) : r.height) / o;
                return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
                    x: a,
                    y: s
                }
            }
            let eA = U(0);

            function ej(e) {
                let t = ed(e);
                return eb() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : eA
            }

            function eR(e, t, r, n) {
                var o;
                void 0 === t && (t = !1), void 0 === r && (r = !1);
                let i = e.getBoundingClientRect(),
                    a = eC(e),
                    s = U(1);
                t && (n ? ep(n) && (s = eM(n)) : s = eM(e));
                let l = (void 0 === (o = r) && (o = !1), n && (!o || n === ed(a)) && o) ? ej(a) : U(0),
                    u = (i.left + l.x) / s.x,
                    d = (i.top + l.y) / s.y,
                    c = i.width / s.x,
                    f = i.height / s.y;
                if (a) {
                    let e = ed(a),
                        t = n && ep(n) ? ed(n) : n,
                        r = e,
                        o = eP(r);
                    for (; o && n && t !== r;) {
                        let e = eM(o),
                            t = o.getBoundingClientRect(),
                            n = ex(o),
                            i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
                            a = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
                        u *= e.x, d *= e.y, c *= e.x, f *= e.y, u += i, d += a, o = eP(r = ed(o))
                    }
                }
                return et({
                    width: c,
                    height: f,
                    x: u,
                    y: d
                })
            }

            function eD(e, t) {
                let r = eE(e).scrollLeft;
                return t ? t.left + r : eR(ec(e)).left + r
            }

            function eL(e, t, r) {
                void 0 === r && (r = !1);
                let n = e.getBoundingClientRect();
                return {
                    x: n.left + t.scrollLeft - (r ? 0 : eD(e, n)),
                    y: n.top + t.scrollTop
                }
            }

            function eO(e, t, r) {
                let n;
                if ("viewport" === t) n = function(e, t) {
                    let r = ed(e),
                        n = ec(e),
                        o = r.visualViewport,
                        i = n.clientWidth,
                        a = n.clientHeight,
                        s = 0,
                        l = 0;
                    if (o) {
                        i = o.width, a = o.height;
                        let e = eb();
                        (!e || e && "fixed" === t) && (s = o.offsetLeft, l = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: a,
                        x: s,
                        y: l
                    }
                }(e, r);
                else if ("document" === t) n = function(e) {
                    let t = ec(e),
                        r = eE(e),
                        n = e.ownerDocument.body,
                        o = B(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
                        i = B(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight),
                        a = -r.scrollLeft + eD(e),
                        s = -r.scrollTop;
                    return "rtl" === ex(n).direction && (a += B(t.clientWidth, n.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: a,
                        y: s
                    }
                }(ec(e));
                else if (ep(t)) n = function(e, t) {
                    let r = eR(e, !0, "fixed" === t),
                        n = r.top + e.clientTop,
                        o = r.left + e.clientLeft,
                        i = eh(e) ? eM(e) : U(1),
                        a = e.clientWidth * i.x;
                    return {
                        width: a,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: n * i.y
                    }
                }(t, r);
                else {
                    let r = ej(e);
                    n = {
                        x: t.x - r.x,
                        y: t.y - r.y,
                        width: t.width,
                        height: t.height
                    }
                }
                return et(n)
            }

            function eN(e) {
                return "static" === ex(e).position
            }

            function e_(e, t) {
                if (!eh(e) || "fixed" === ex(e).position) return null;
                if (t) return t(e);
                let r = e.offsetParent;
                return ec(e) === r && (r = r.ownerDocument.body), r
            }

            function eI(e, t) {
                let r = ed(e);
                if (eg(e)) return r;
                if (!eh(e)) {
                    let t = eS(e);
                    for (; t && !ew(t);) {
                        if (ep(t) && !eN(t)) return t;
                        t = eS(t)
                    }
                    return r
                }
                let n = e_(e, t);
                for (; n && ["table", "td", "th"].includes(eu(n)) && eN(n);) n = e_(n, t);
                return n && ew(n) && eN(n) && !ey(n) ? r : n || function(e) {
                    let t = eS(e);
                    for (; eh(t) && !ew(t);) {
                        if (ey(t)) return t;
                        if (eg(t)) break;
                        t = eS(t)
                    }
                    return null
                }(e) || r
            }
            let eF = async function(e) {
                    let t = this.getOffsetParent || eI,
                        r = this.getDimensions,
                        n = await r(e.floating);
                    return {
                        reference: function(e, t, r) {
                            let n = eh(t),
                                o = ec(t),
                                i = "fixed" === r,
                                a = eR(e, !0, i, t),
                                s = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                l = U(0);
                            if (n || !n && !i) {
                                if (("body" !== eu(t) || ev(o)) && (s = eE(t)), n) {
                                    let e = eR(t, !0, i, t);
                                    l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
                                } else o && (l.x = eD(o))
                            }
                            let u = !o || n || i ? U(0) : eL(o, s);
                            return {
                                x: a.left + s.scrollLeft - l.x - u.x,
                                y: a.top + s.scrollTop - l.y - u.y,
                                width: a.width,
                                height: a.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: n.width,
                            height: n.height
                        }
                    }
                },
                eV = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: r,
                            offsetParent: n,
                            strategy: o
                        } = e, i = "fixed" === o, a = ec(n), s = !!t && eg(t.floating);
                        if (n === a || s && i) return r;
                        let l = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            u = U(1),
                            d = U(0),
                            c = eh(n);
                        if ((c || !c && !i) && (("body" !== eu(n) || ev(a)) && (l = eE(n)), eh(n))) {
                            let e = eR(n);
                            u = eM(n), d.x = e.x + n.clientLeft, d.y = e.y + n.clientTop
                        }
                        let f = !a || c || i ? U(0) : eL(a, l, !0);
                        return {
                            width: r.width * u.x,
                            height: r.height * u.y,
                            x: r.x * u.x - l.scrollLeft * u.x + d.x + f.x,
                            y: r.y * u.y - l.scrollTop * u.y + d.y + f.y
                        }
                    },
                    getDocumentElement: ec,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: r,
                            rootBoundary: n,
                            strategy: o
                        } = e, i = [..."clippingAncestors" === r ? eg(t) ? [] : function(e, t) {
                            let r = t.get(e);
                            if (r) return r;
                            let n = eT(e, [], !1).filter(e => ep(e) && "body" !== eu(e)),
                                o = null,
                                i = "fixed" === ex(e).position,
                                a = i ? eS(e) : e;
                            for (; ep(a) && !ew(a);) {
                                let t = ex(a),
                                    r = ey(a);
                                r || "fixed" !== t.position || (o = null), (i ? !r && !o : !r && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || ev(a) && !r && function e(t, r) {
                                    let n = eS(t);
                                    return !(n === r || !ep(n) || ew(n)) && ("fixed" === ex(n).position || e(n, r))
                                }(e, a)) ? n = n.filter(e => e !== a) : o = t, a = eS(a)
                            }
                            return t.set(e, n), n
                        }(t, this._c) : [].concat(r), n], a = i[0], s = i.reduce((e, r) => {
                            let n = eO(t, r, o);
                            return e.top = B(n.top, e.top), e.right = V(n.right, e.right), e.bottom = V(n.bottom, e.bottom), e.left = B(n.left, e.left), e
                        }, eO(t, a, o));
                        return {
                            width: s.right - s.left,
                            height: s.bottom - s.top,
                            x: s.left,
                            y: s.top
                        }
                    },
                    getOffsetParent: eI,
                    getElementRects: eF,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: r
                        } = ek(e);
                        return {
                            width: t,
                            height: r
                        }
                    },
                    getScale: eM,
                    isElement: ep,
                    isRTL: function(e) {
                        return "rtl" === ex(e).direction
                    }
                },
                eB = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: r,
                            y: n,
                            placement: o,
                            rects: i,
                            platform: a,
                            elements: s,
                            middlewareData: l
                        } = t, {
                            element: u,
                            padding: d = 0
                        } = G(e, t) || {};
                        if (null == u) return {};
                        let c = ee(d),
                            f = {
                                x: r,
                                y: n
                            },
                            p = Y(Q(o)),
                            h = q(p),
                            m = await a.getDimensions(u),
                            v = "y" === p,
                            g = v ? "clientHeight" : "clientWidth",
                            y = i.reference[h] + i.reference[p] - f[p] - i.floating[h],
                            b = f[p] - i.reference[p],
                            w = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(u)),
                            x = w ? w[g] : 0;
                        x && await (null == a.isElement ? void 0 : a.isElement(w)) || (x = s.floating[g] || i.floating[h]);
                        let E = x / 2 - m[h] / 2 - 1,
                            S = V(c[v ? "top" : "left"], E),
                            T = V(c[v ? "bottom" : "right"], E),
                            P = x - m[h] - T,
                            k = x / 2 - m[h] / 2 + (y / 2 - b / 2),
                            C = B(S, V(k, P)),
                            M = !l.arrow && null != X(o) && k !== C && i.reference[h] / 2 - (k < S ? S : T) - m[h] / 2 < 0,
                            A = M ? k < S ? k - S : k - P : 0;
                        return {
                            [p]: f[p] + A,
                            data: {
                                [p]: C,
                                centerOffset: k - C - A,
                                ...M && {
                                    alignmentOffset: A
                                }
                            },
                            reset: M
                        }
                    }
                }),
                ez = (e, t, r) => {
                    let n = new Map,
                        o = {
                            platform: eV,
                            ...r
                        },
                        i = { ...o.platform,
                            _c: n
                        };
                    return en(e, t, { ...o,
                        platform: i
                    })
                };
            var eW = r(47650),
                eU = "undefined" != typeof document ? a.useLayoutEffect : a.useEffect;

            function eH(e, t) {
                let r, n, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((r = e.length) !== t.length) return !1;
                        for (n = r; 0 != n--;)
                            if (!eH(e[n], t[n])) return !1;
                        return !0
                    }
                    if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (n = r; 0 != n--;)
                        if (!({}).hasOwnProperty.call(t, o[n])) return !1;
                    for (n = r; 0 != n--;) {
                        let r = o[n];
                        if (("_owner" !== r || !e.$$typeof) && !eH(e[r], t[r])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function e$(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function eG(e, t) {
                let r = e$(e);
                return Math.round(t * r) / r
            }

            function eK(e) {
                let t = a.useRef(e);
                return eU(() => {
                    t.current = e
                }), t
            }
            let eX = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: r,
                            padding: n
                        } = "function" == typeof e ? e(t) : e;
                        return r && ({}).hasOwnProperty.call(r, "current") ? null != r.current ? eB({
                            element: r.current,
                            padding: n
                        }).fn(t) : {} : r ? eB({
                            element: r,
                            padding: n
                        }).fn(t) : {}
                    }
                }),
                eY = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = 0), {
                            name: "offset",
                            options: e,
                            async fn(t) {
                                var r, n;
                                let {
                                    x: o,
                                    y: i,
                                    placement: a,
                                    middlewareData: s
                                } = t, l = await es(t, e);
                                return a === (null == (r = s.offset) ? void 0 : r.placement) && null != (n = s.arrow) && n.alignmentOffset ? {} : {
                                    x: o + l.x,
                                    y: i + l.y,
                                    data: { ...l,
                                        placement: a
                                    }
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eq = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "shift",
                            options: e,
                            async fn(t) {
                                let {
                                    x: r,
                                    y: n,
                                    placement: o
                                } = t, {
                                    mainAxis: i = !0,
                                    crossAxis: a = !1,
                                    limiter: s = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: r
                                            } = e;
                                            return {
                                                x: t,
                                                y: r
                                            }
                                        }
                                    },
                                    ...l
                                } = G(e, t), u = {
                                    x: r,
                                    y: n
                                }, d = await eo(t, l), c = Q(K(o)), f = Y(c), p = u[f], h = u[c];
                                if (i) {
                                    let e = "y" === f ? "top" : "left",
                                        t = "y" === f ? "bottom" : "right",
                                        r = p + d[e],
                                        n = p - d[t];
                                    p = B(r, V(p, n))
                                }
                                if (a) {
                                    let e = "y" === c ? "top" : "left",
                                        t = "y" === c ? "bottom" : "right",
                                        r = h + d[e],
                                        n = h - d[t];
                                    h = B(r, V(h, n))
                                }
                                let m = s.fn({ ...t,
                                    [f]: p,
                                    [c]: h
                                });
                                return { ...m,
                                    data: {
                                        x: m.x - r,
                                        y: m.y - n,
                                        enabled: {
                                            [f]: i,
                                            [c]: a
                                        }
                                    }
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eQ = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            options: e,
                            fn(t) {
                                let {
                                    x: r,
                                    y: n,
                                    placement: o,
                                    rects: i,
                                    middlewareData: a
                                } = t, {
                                    offset: s = 0,
                                    mainAxis: l = !0,
                                    crossAxis: u = !0
                                } = G(e, t), d = {
                                    x: r,
                                    y: n
                                }, c = Q(o), f = Y(c), p = d[f], h = d[c], m = G(s, t), v = "number" == typeof m ? {
                                    mainAxis: m,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...m
                                };
                                if (l) {
                                    let e = "y" === f ? "height" : "width",
                                        t = i.reference[f] - i.floating[e] + v.mainAxis,
                                        r = i.reference[f] + i.reference[e] - v.mainAxis;
                                    p < t ? p = t : p > r && (p = r)
                                }
                                if (u) {
                                    var g, y;
                                    let e = "y" === f ? "width" : "height",
                                        t = ["top", "left"].includes(K(o)),
                                        r = i.reference[c] - i.floating[e] + (t && (null == (g = a.offset) ? void 0 : g[c]) || 0) + (t ? 0 : v.crossAxis),
                                        n = i.reference[c] + i.reference[e] + (t ? 0 : (null == (y = a.offset) ? void 0 : y[c]) || 0) - (t ? v.crossAxis : 0);
                                    h < r ? h = r : h > n && (h = n)
                                }
                                return {
                                    [f]: p,
                                    [c]: h
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eZ = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "flip",
                            options: e,
                            async fn(t) {
                                var r, n, o, i, a;
                                let {
                                    placement: s,
                                    middlewareData: l,
                                    rects: u,
                                    initialPlacement: d,
                                    platform: c,
                                    elements: f
                                } = t, {
                                    mainAxis: p = !0,
                                    crossAxis: h = !0,
                                    fallbackPlacements: m,
                                    fallbackStrategy: v = "bestFit",
                                    fallbackAxisSideDirection: g = "none",
                                    flipAlignment: y = !0,
                                    ...b
                                } = G(e, t);
                                if (null != (r = l.arrow) && r.alignmentOffset) return {};
                                let w = K(s),
                                    x = Q(d),
                                    E = K(d) === d,
                                    S = await (null == c.isRTL ? void 0 : c.isRTL(f.floating)),
                                    T = m || (E || !y ? [J(d)] : function(e) {
                                        let t = J(e);
                                        return [Z(e), t, Z(t)]
                                    }(d)),
                                    P = "none" !== g;
                                !m && P && T.push(... function(e, t, r, n) {
                                    let o = X(e),
                                        i = function(e, t, r) {
                                            let n = ["left", "right"],
                                                o = ["right", "left"];
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    if (r) return t ? o : n;
                                                    return t ? n : o;
                                                case "left":
                                                case "right":
                                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                                default:
                                                    return []
                                            }
                                        }(K(e), "start" === r, n);
                                    return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(Z)))), i
                                }(d, y, g, S));
                                let k = [d, ...T],
                                    C = await eo(t, b),
                                    M = [],
                                    A = (null == (n = l.flip) ? void 0 : n.overflows) || [];
                                if (p && M.push(C[w]), h) {
                                    let e = function(e, t, r) {
                                        void 0 === r && (r = !1);
                                        let n = X(e),
                                            o = Y(Q(e)),
                                            i = q(o),
                                            a = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                                        return t.reference[i] > t.floating[i] && (a = J(a)), [a, J(a)]
                                    }(s, u, S);
                                    M.push(C[e[0]], C[e[1]])
                                }
                                if (A = [...A, {
                                        placement: s,
                                        overflows: M
                                    }], !M.every(e => e <= 0)) {
                                    let e = ((null == (o = l.flip) ? void 0 : o.index) || 0) + 1,
                                        t = k[e];
                                    if (t) return {
                                        data: {
                                            index: e,
                                            overflows: A
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let r = null == (i = A.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                    if (!r) switch (v) {
                                        case "bestFit":
                                            {
                                                let e = null == (a = A.filter(e => {
                                                    if (P) {
                                                        let t = Q(e.placement);
                                                        return t === x || "y" === t
                                                    }
                                                    return !0
                                                }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : a[0];e && (r = e);
                                                break
                                            }
                                        case "initialPlacement":
                                            r = d
                                    }
                                    if (s !== r) return {
                                        reset: {
                                            placement: r
                                        }
                                    }
                                }
                                return {}
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eJ = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "size",
                            options: e,
                            async fn(t) {
                                var r, n;
                                let o, i;
                                let {
                                    placement: a,
                                    rects: s,
                                    platform: l,
                                    elements: u
                                } = t, {
                                    apply: d = () => {},
                                    ...c
                                } = G(e, t), f = await eo(t, c), p = K(a), h = X(a), m = "y" === Q(a), {
                                    width: v,
                                    height: g
                                } = s.floating;
                                "top" === p || "bottom" === p ? (o = p, i = h === (await (null == l.isRTL ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (i = p, o = "end" === h ? "top" : "bottom");
                                let y = g - f.top - f.bottom,
                                    b = v - f.left - f.right,
                                    w = V(g - f[o], y),
                                    x = V(v - f[i], b),
                                    E = !t.middlewareData.shift,
                                    S = w,
                                    T = x;
                                if (null != (r = t.middlewareData.shift) && r.enabled.x && (T = b), null != (n = t.middlewareData.shift) && n.enabled.y && (S = y), E && !h) {
                                    let e = B(f.left, 0),
                                        t = B(f.right, 0),
                                        r = B(f.top, 0),
                                        n = B(f.bottom, 0);
                                    m ? T = v - 2 * (0 !== e || 0 !== t ? e + t : B(f.left, f.right)) : S = g - 2 * (0 !== r || 0 !== n ? r + n : B(f.top, f.bottom))
                                }
                                await d({ ...t,
                                    availableWidth: T,
                                    availableHeight: S
                                });
                                let P = await l.getDimensions(u.floating);
                                return v !== P.width || g !== P.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                e0 = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "hide",
                            options: e,
                            async fn(t) {
                                let {
                                    rects: r
                                } = t, {
                                    strategy: n = "referenceHidden",
                                    ...o
                                } = G(e, t);
                                switch (n) {
                                    case "referenceHidden":
                                        {
                                            let e = ei(await eo(t, { ...o,
                                                elementContext: "reference"
                                            }), r.reference);
                                            return {
                                                data: {
                                                    referenceHiddenOffsets: e,
                                                    referenceHidden: ea(e)
                                                }
                                            }
                                        }
                                    case "escaped":
                                        {
                                            let e = ei(await eo(t, { ...o,
                                                altBoundary: !0
                                            }), r.floating);
                                            return {
                                                data: {
                                                    escapedOffsets: e,
                                                    escaped: ea(e)
                                                }
                                            }
                                        }
                                    default:
                                        return {}
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                e1 = (e, t) => ({ ...eX(e),
                    options: [e, t]
                });
            var e2 = a.forwardRef((e, t) => {
                let {
                    children: r,
                    width: n = 10,
                    height: o = 5,
                    ...i
                } = e;
                return (0, p.jsx)(f.sG.svg, { ...i,
                    ref: t,
                    width: n,
                    height: o,
                    viewBox: "0 0 30 10",
                    preserveAspectRatio: "none",
                    children: e.asChild ? r : (0, p.jsx)("polygon", {
                        points: "0,0 30,0 15,10"
                    })
                })
            });
            e2.displayName = "Arrow";
            var e5 = r(7510),
                e4 = "Popper",
                [e3, e6] = function(e, t = []) {
                    let r = [],
                        n = () => {
                            let t = r.map(e => a.createContext(e));
                            return function(r) {
                                let n = r ? .[e] || t;
                                return a.useMemo(() => ({
                                    [`__scope${e}`]: { ...r,
                                        [e]: n
                                    }
                                }), [r, n])
                            }
                        };
                    return n.scopeName = e, [function(t, n) {
                        let o = a.createContext(n),
                            i = r.length;

                        function s(t) {
                            let {
                                scope: r,
                                children: n,
                                ...s
                            } = t, l = r ? .[e][i] || o, u = a.useMemo(() => s, Object.values(s));
                            return (0, p.jsx)(l.Provider, {
                                value: u,
                                children: n
                            })
                        }
                        return r = [...r, n], s.displayName = t + "Provider", [s, function(r, s) {
                            let l = s ? .[e][i] || o,
                                u = a.useContext(l);
                            if (u) return u;
                            if (void 0 !== n) return n;
                            throw Error(`\`${r}\` must be used within \`${t}\``)
                        }]
                    }, function(...e) {
                        let t = e[0];
                        if (1 === e.length) return t;
                        let r = () => {
                            let r = e.map(e => ({
                                useScope: e(),
                                scopeName: e.scopeName
                            }));
                            return function(e) {
                                let n = r.reduce((t, {
                                    useScope: r,
                                    scopeName: n
                                }) => {
                                    let o = r(e)[`__scope${n}`];
                                    return { ...t,
                                        ...o
                                    }
                                }, {});
                                return a.useMemo(() => ({
                                    [`__scope${t.scopeName}`]: n
                                }), [n])
                            }
                        };
                        return r.scopeName = t.scopeName, r
                    }(n, ...t)]
                }(e4),
                [e7, e9] = e3(e4),
                e8 = e => {
                    let {
                        __scopePopper: t,
                        children: r
                    } = e, [n, o] = a.useState(null);
                    return (0, p.jsx)(e7, {
                        scope: t,
                        anchor: n,
                        onAnchorChange: o,
                        children: r
                    })
                };
            e8.displayName = e4;
            var te = "PopperAnchor",
                tt = a.forwardRef((e, t) => {
                    let {
                        __scopePopper: r,
                        virtualRef: n,
                        ...o
                    } = e, i = e9(te, r), s = a.useRef(null), l = (0, u.s)(t, s);
                    return a.useEffect(() => {
                        i.onAnchorChange((null == n ? void 0 : n.current) || s.current)
                    }), n ? null : (0, p.jsx)(f.sG.div, { ...o,
                        ref: l
                    })
                });
            tt.displayName = te;
            var tr = "PopperContent",
                [tn, to] = e3(tr),
                ti = a.forwardRef((e, t) => {
                    var r, n, o, i, s, l, d, c;
                    let {
                        __scopePopper: h,
                        side: m = "bottom",
                        sideOffset: v = 0,
                        align: y = "center",
                        alignOffset: b = 0,
                        arrowPadding: w = 0,
                        avoidCollisions: x = !0,
                        collisionBoundary: E = [],
                        collisionPadding: S = 0,
                        sticky: T = "partial",
                        hideWhenDetached: P = !1,
                        updatePositionStrategy: k = "optimized",
                        onPlaced: C,
                        ...M
                    } = e, A = e9(tr, h), [j, R] = a.useState(null), D = (0, u.s)(t, e => R(e)), [L, N] = a.useState(null), _ = (0, e5.X)(L), I = null !== (d = null == _ ? void 0 : _.width) && void 0 !== d ? d : 0, F = null !== (c = null == _ ? void 0 : _.height) && void 0 !== c ? c : 0, z = "number" == typeof S ? S : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...S
                    }, U = Array.isArray(E) ? E : [E], H = U.length > 0, $ = {
                        padding: z,
                        boundary: U.filter(tu),
                        altBoundary: H
                    }, {
                        refs: G,
                        floatingStyles: K,
                        placement: X,
                        isPositioned: Y,
                        middlewareData: q
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: r = "absolute",
                            middleware: n = [],
                            platform: o,
                            elements: {
                                reference: i,
                                floating: s
                            } = {},
                            transform: l = !0,
                            whileElementsMounted: u,
                            open: d
                        } = e, [c, f] = a.useState({
                            x: 0,
                            y: 0,
                            strategy: r,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [p, h] = a.useState(n);
                        eH(p, n) || h(n);
                        let [m, v] = a.useState(null), [g, y] = a.useState(null), b = a.useCallback(e => {
                            e !== S.current && (S.current = e, v(e))
                        }, []), w = a.useCallback(e => {
                            e !== T.current && (T.current = e, y(e))
                        }, []), x = i || m, E = s || g, S = a.useRef(null), T = a.useRef(null), P = a.useRef(c), k = null != u, C = eK(u), M = eK(o), A = eK(d), j = a.useCallback(() => {
                            if (!S.current || !T.current) return;
                            let e = {
                                placement: t,
                                strategy: r,
                                middleware: p
                            };
                            M.current && (e.platform = M.current), ez(S.current, T.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !1 !== A.current
                                };
                                R.current && !eH(P.current, t) && (P.current = t, eW.flushSync(() => {
                                    f(t)
                                }))
                            })
                        }, [p, t, r, M, A]);
                        eU(() => {
                            !1 === d && P.current.isPositioned && (P.current.isPositioned = !1, f(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [d]);
                        let R = a.useRef(!1);
                        eU(() => (R.current = !0, () => {
                            R.current = !1
                        }), []), eU(() => {
                            if (x && (S.current = x), E && (T.current = E), x && E) {
                                if (C.current) return C.current(x, E, j);
                                j()
                            }
                        }, [x, E, j, C, k]);
                        let D = a.useMemo(() => ({
                                reference: S,
                                floating: T,
                                setReference: b,
                                setFloating: w
                            }), [b, w]),
                            L = a.useMemo(() => ({
                                reference: x,
                                floating: E
                            }), [x, E]),
                            O = a.useMemo(() => {
                                let e = {
                                    position: r,
                                    left: 0,
                                    top: 0
                                };
                                if (!L.floating) return e;
                                let t = eG(L.floating, c.x),
                                    n = eG(L.floating, c.y);
                                return l ? { ...e,
                                    transform: "translate(" + t + "px, " + n + "px)",
                                    ...e$(L.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: r,
                                    left: t,
                                    top: n
                                }
                            }, [r, l, L.floating, c.x, c.y]);
                        return a.useMemo(() => ({ ...c,
                            update: j,
                            refs: D,
                            elements: L,
                            floatingStyles: O
                        }), [c, j, D, L, O])
                    }({
                        strategy: "fixed",
                        placement: m + ("center" !== y ? "-" + y : ""),
                        whileElementsMounted: function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            return function(e, t, r, n) {
                                let o;
                                void 0 === n && (n = {});
                                let {
                                    ancestorScroll: i = !0,
                                    ancestorResize: a = !0,
                                    elementResize: s = "function" == typeof ResizeObserver,
                                    layoutShift: l = "function" == typeof IntersectionObserver,
                                    animationFrame: u = !1
                                } = n, d = eC(e), c = i || a ? [...d ? eT(d) : [], ...eT(t)] : [];
                                c.forEach(e => {
                                    i && e.addEventListener("scroll", r, {
                                        passive: !0
                                    }), a && e.addEventListener("resize", r)
                                });
                                let f = d && l ? function(e, t) {
                                        let r, n = null,
                                            o = ec(e);

                                        function i() {
                                            var e;
                                            clearTimeout(r), null == (e = n) || e.disconnect(), n = null
                                        }
                                        return ! function a(s, l) {
                                            void 0 === s && (s = !1), void 0 === l && (l = 1), i();
                                            let {
                                                left: u,
                                                top: d,
                                                width: c,
                                                height: f
                                            } = e.getBoundingClientRect();
                                            if (s || t(), !c || !f) return;
                                            let p = W(d),
                                                h = W(o.clientWidth - (u + c)),
                                                m = {
                                                    rootMargin: -p + "px " + -h + "px " + -W(o.clientHeight - (d + f)) + "px " + -W(u) + "px",
                                                    threshold: B(0, V(1, l)) || 1
                                                },
                                                v = !0;

                                            function g(e) {
                                                let t = e[0].intersectionRatio;
                                                if (t !== l) {
                                                    if (!v) return a();
                                                    t ? a(!1, t) : r = setTimeout(() => {
                                                        a(!1, 1e-7)
                                                    }, 1e3)
                                                }
                                                v = !1
                                            }
                                            try {
                                                n = new IntersectionObserver(g, { ...m,
                                                    root: o.ownerDocument
                                                })
                                            } catch (e) {
                                                n = new IntersectionObserver(g, m)
                                            }
                                            n.observe(e)
                                        }(!0), i
                                    }(d, r) : null,
                                    p = -1,
                                    h = null;
                                s && (h = new ResizeObserver(e => {
                                    let [n] = e;
                                    n && n.target === d && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
                                        var e;
                                        null == (e = h) || e.observe(t)
                                    })), r()
                                }), d && !u && h.observe(d), h.observe(t));
                                let m = u ? eR(e) : null;
                                return u && function t() {
                                    let n = eR(e);
                                    m && (n.x !== m.x || n.y !== m.y || n.width !== m.width || n.height !== m.height) && r(), m = n, o = requestAnimationFrame(t)
                                }(), r(), () => {
                                    var e;
                                    c.forEach(e => {
                                        i && e.removeEventListener("scroll", r), a && e.removeEventListener("resize", r)
                                    }), null == f || f(), null == (e = h) || e.disconnect(), h = null, u && cancelAnimationFrame(o)
                                }
                            }(...t, {
                                animationFrame: "always" === k
                            })
                        },
                        elements: {
                            reference: A.anchor
                        },
                        middleware: [eY({
                            mainAxis: v + F,
                            alignmentAxis: b
                        }), x && eq({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === T ? eQ() : void 0,
                            ...$
                        }), x && eZ({ ...$
                        }), eJ({ ...$,
                            apply: e => {
                                let {
                                    elements: t,
                                    rects: r,
                                    availableWidth: n,
                                    availableHeight: o
                                } = e, {
                                    width: i,
                                    height: a
                                } = r.reference, s = t.floating.style;
                                s.setProperty("--radix-popper-available-width", "".concat(n, "px")), s.setProperty("--radix-popper-available-height", "".concat(o, "px")), s.setProperty("--radix-popper-anchor-width", "".concat(i, "px")), s.setProperty("--radix-popper-anchor-height", "".concat(a, "px"))
                            }
                        }), L && e1({
                            element: L,
                            padding: w
                        }), td({
                            arrowWidth: I,
                            arrowHeight: F
                        }), P && e0({
                            strategy: "referenceHidden",
                            ...$
                        })]
                    }), [Q, Z] = tc(X), J = (0, g.c)(C);
                    (0, O.N)(() => {
                        Y && (null == J || J())
                    }, [Y, J]);
                    let ee = null === (r = q.arrow) || void 0 === r ? void 0 : r.x,
                        et = null === (n = q.arrow) || void 0 === n ? void 0 : n.y,
                        er = (null === (o = q.arrow) || void 0 === o ? void 0 : o.centerOffset) !== 0,
                        [en, eo] = a.useState();
                    return (0, O.N)(() => {
                        j && eo(window.getComputedStyle(j).zIndex)
                    }, [j]), (0, p.jsx)("div", {
                        ref: G.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...K,
                            transform: Y ? K.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: en,
                            "--radix-popper-transform-origin": [null === (i = q.transformOrigin) || void 0 === i ? void 0 : i.x, null === (s = q.transformOrigin) || void 0 === s ? void 0 : s.y].join(" "),
                            ...(null === (l = q.hide) || void 0 === l ? void 0 : l.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, p.jsx)(tn, {
                            scope: h,
                            placedSide: Q,
                            onArrowChange: N,
                            arrowX: ee,
                            arrowY: et,
                            shouldHideArrow: er,
                            children: (0, p.jsx)(f.sG.div, {
                                "data-side": Q,
                                "data-align": Z,
                                ...M,
                                ref: D,
                                style: { ...M.style,
                                    animation: Y ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            ti.displayName = tr;
            var ta = "PopperArrow",
                ts = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                tl = a.forwardRef(function(e, t) {
                    let {
                        __scopePopper: r,
                        ...n
                    } = e, o = to(ta, r), i = ts[o.placedSide];
                    return (0, p.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [i]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, p.jsx)(e2, { ...n,
                            ref: t,
                            style: { ...n.style,
                                display: "block"
                            }
                        })
                    })
                });

            function tu(e) {
                return null !== e
            }
            tl.displayName = ta;
            var td = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var r, n, o, i, a;
                    let {
                        placement: s,
                        rects: l,
                        middlewareData: u
                    } = t, d = (null === (r = u.arrow) || void 0 === r ? void 0 : r.centerOffset) !== 0, c = d ? 0 : e.arrowWidth, f = d ? 0 : e.arrowHeight, [p, h] = tc(s), m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[h], v = (null !== (i = null === (n = u.arrow) || void 0 === n ? void 0 : n.x) && void 0 !== i ? i : 0) + c / 2, g = (null !== (a = null === (o = u.arrow) || void 0 === o ? void 0 : o.y) && void 0 !== a ? a : 0) + f / 2, y = "", b = "";
                    return "bottom" === p ? (y = d ? m : "".concat(v, "px"), b = "".concat(-f, "px")) : "top" === p ? (y = d ? m : "".concat(v, "px"), b = "".concat(l.floating.height + f, "px")) : "right" === p ? (y = "".concat(-f, "px"), b = d ? m : "".concat(g, "px")) : "left" === p && (y = "".concat(l.floating.width + f, "px"), b = d ? m : "".concat(g, "px")), {
                        data: {
                            x: y,
                            y: b
                        }
                    }
                }
            });

            function tc(e) {
                let [t, r = "center"] = e.split("-");
                return [t, r]
            }
            var tf = r(17323),
                tp = e => {
                    let {
                        present: t,
                        children: r
                    } = e, n = function(e) {
                        var t, r;
                        let [n, o] = a.useState(), i = a.useRef({}), s = a.useRef(e), l = a.useRef("none"), [u, d] = (t = e ? "mounted" : "unmounted", r = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, a.useReducer((e, t) => {
                            let n = r[e][t];
                            return null != n ? n : e
                        }, t));
                        return a.useEffect(() => {
                            let e = th(i.current);
                            l.current = "mounted" === u ? e : "none"
                        }, [u]), (0, O.N)(() => {
                            let t = i.current,
                                r = s.current;
                            if (r !== e) {
                                let n = l.current,
                                    o = th(t);
                                e ? d("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? d("UNMOUNT") : r && n !== o ? d("ANIMATION_OUT") : d("UNMOUNT"), s.current = e
                            }
                        }, [e, d]), (0, O.N)(() => {
                            if (n) {
                                var e;
                                let t;
                                let r = null !== (e = n.ownerDocument.defaultView) && void 0 !== e ? e : window,
                                    o = e => {
                                        let o = th(i.current).includes(e.animationName);
                                        if (e.target === n && o && (d("ANIMATION_END"), !s.current)) {
                                            let e = n.style.animationFillMode;
                                            n.style.animationFillMode = "forwards", t = r.setTimeout(() => {
                                                "forwards" === n.style.animationFillMode && (n.style.animationFillMode = e)
                                            })
                                        }
                                    },
                                    a = e => {
                                        e.target === n && (l.current = th(i.current))
                                    };
                                return n.addEventListener("animationstart", a), n.addEventListener("animationcancel", o), n.addEventListener("animationend", o), () => {
                                    r.clearTimeout(t), n.removeEventListener("animationstart", a), n.removeEventListener("animationcancel", o), n.removeEventListener("animationend", o)
                                }
                            }
                            d("ANIMATION_END")
                        }, [n, d]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(u),
                            ref: a.useCallback(e => {
                                e && (i.current = getComputedStyle(e)), o(e)
                            }, [])
                        }
                    }(t), o = "function" == typeof r ? r({
                        present: n.isPresent
                    }) : a.Children.only(r), i = (0, u.s)(n.ref, function(e) {
                        var t, r;
                        let n = null === (t = Object.getOwnPropertyDescriptor(e.props, "ref")) || void 0 === t ? void 0 : t.get,
                            o = n && "isReactWarning" in n && n.isReactWarning;
                        return o ? e.ref : (o = (n = null === (r = Object.getOwnPropertyDescriptor(e, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in n && n.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(o));
                    return "function" == typeof r || n.isPresent ? a.cloneElement(o, {
                        ref: i
                    }) : null
                };

            function th(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            tp.displayName = "Presence";
            var tm = "rovingFocusGroup.onEntryFocus",
                tv = {
                    bubbles: !1,
                    cancelable: !0
                },
                tg = "RovingFocusGroup",
                [ty, tb, tw] = m(tg),
                [tx, tE] = function(e, t = []) {
                    let r = [],
                        n = () => {
                            let t = r.map(e => a.createContext(e));
                            return function(r) {
                                let n = r ? .[e] || t;
                                return a.useMemo(() => ({
                                    [`__scope${e}`]: { ...r,
                                        [e]: n
                                    }
                                }), [r, n])
                            }
                        };
                    return n.scopeName = e, [function(t, n) {
                        let o = a.createContext(n),
                            i = r.length;

                        function s(t) {
                            let {
                                scope: r,
                                children: n,
                                ...s
                            } = t, l = r ? .[e][i] || o, u = a.useMemo(() => s, Object.values(s));
                            return (0, p.jsx)(l.Provider, {
                                value: u,
                                children: n
                            })
                        }
                        return r = [...r, n], s.displayName = t + "Provider", [s, function(r, s) {
                            let l = s ? .[e][i] || o,
                                u = a.useContext(l);
                            if (u) return u;
                            if (void 0 !== n) return n;
                            throw Error(`\`${r}\` must be used within \`${t}\``)
                        }]
                    }, function(...e) {
                        let t = e[0];
                        if (1 === e.length) return t;
                        let r = () => {
                            let r = e.map(e => ({
                                useScope: e(),
                                scopeName: e.scopeName
                            }));
                            return function(e) {
                                let n = r.reduce((t, {
                                    useScope: r,
                                    scopeName: n
                                }) => {
                                    let o = r(e)[`__scope${n}`];
                                    return { ...t,
                                        ...o
                                    }
                                }, {});
                                return a.useMemo(() => ({
                                    [`__scope${t.scopeName}`]: n
                                }), [n])
                            }
                        };
                        return r.scopeName = t.scopeName, r
                    }(n, ...t)]
                }(tg, [tw]),
                [tS, tT] = tx(tg),
                tP = a.forwardRef((e, t) => (0, p.jsx)(ty.Provider, {
                    scope: e.__scopeRovingFocusGroup,
                    children: (0, p.jsx)(ty.Slot, {
                        scope: e.__scopeRovingFocusGroup,
                        children: (0, p.jsx)(tk, { ...e,
                            ref: t
                        })
                    })
                }));
            tP.displayName = tg;
            var tk = a.forwardRef((e, t) => {
                    let {
                        __scopeRovingFocusGroup: r,
                        orientation: n,
                        loop: o = !1,
                        dir: i,
                        currentTabStopId: s,
                        defaultCurrentTabStopId: d,
                        onCurrentTabStopIdChange: h,
                        onEntryFocus: m,
                        preventScrollOnEntryFocus: y = !1,
                        ...b
                    } = e, w = a.useRef(null), x = (0, u.s)(t, w), E = (0, v.jH)(i), [S = null, T] = (0, c.i)({
                        prop: s,
                        defaultProp: d,
                        onChange: h
                    }), [P, k] = a.useState(!1), C = (0, g.c)(m), M = tb(r), A = a.useRef(!1), [j, R] = a.useState(0);
                    return a.useEffect(() => {
                        let e = w.current;
                        if (e) return e.addEventListener(tm, C), () => e.removeEventListener(tm, C)
                    }, [C]), (0, p.jsx)(tS, {
                        scope: r,
                        orientation: n,
                        dir: E,
                        loop: o,
                        currentTabStopId: S,
                        onItemFocus: a.useCallback(e => T(e), [T]),
                        onItemShiftTab: a.useCallback(() => k(!0), []),
                        onFocusableItemAdd: a.useCallback(() => R(e => e + 1), []),
                        onFocusableItemRemove: a.useCallback(() => R(e => e - 1), []),
                        children: (0, p.jsx)(f.sG.div, {
                            tabIndex: P || 0 === j ? -1 : 0,
                            "data-orientation": n,
                            ...b,
                            ref: x,
                            style: {
                                outline: "none",
                                ...e.style
                            },
                            onMouseDown: (0, l.m)(e.onMouseDown, () => {
                                A.current = !0
                            }),
                            onFocus: (0, l.m)(e.onFocus, e => {
                                let t = !A.current;
                                if (e.target === e.currentTarget && t && !P) {
                                    let t = new CustomEvent(tm, tv);
                                    if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                        let e = M().filter(e => e.focusable);
                                        tj([e.find(e => e.active), e.find(e => e.id === S), ...e].filter(Boolean).map(e => e.ref.current), y)
                                    }
                                }
                                A.current = !1
                            }),
                            onBlur: (0, l.m)(e.onBlur, () => k(!1))
                        })
                    })
                }),
                tC = "RovingFocusGroupItem",
                tM = a.forwardRef((e, t) => {
                    let {
                        __scopeRovingFocusGroup: r,
                        focusable: n = !0,
                        active: o = !1,
                        tabStopId: i,
                        ...s
                    } = e, u = I(), d = i || u, c = tT(tC, r), h = c.currentTabStopId === d, m = tb(r), {
                        onFocusableItemAdd: v,
                        onFocusableItemRemove: g
                    } = c;
                    return a.useEffect(() => {
                        if (n) return v(), () => g()
                    }, [n, v, g]), (0, p.jsx)(ty.ItemSlot, {
                        scope: r,
                        id: d,
                        focusable: n,
                        active: o,
                        children: (0, p.jsx)(f.sG.span, {
                            tabIndex: h ? 0 : -1,
                            "data-orientation": c.orientation,
                            ...s,
                            ref: t,
                            onMouseDown: (0, l.m)(e.onMouseDown, e => {
                                n ? c.onItemFocus(d) : e.preventDefault()
                            }),
                            onFocus: (0, l.m)(e.onFocus, () => c.onItemFocus(d)),
                            onKeyDown: (0, l.m)(e.onKeyDown, e => {
                                if ("Tab" === e.key && e.shiftKey) {
                                    c.onItemShiftTab();
                                    return
                                }
                                if (e.target !== e.currentTarget) return;
                                let t = function(e, t, r) {
                                    var n;
                                    let o = (n = e.key, "rtl" !== r ? n : "ArrowLeft" === n ? "ArrowRight" : "ArrowRight" === n ? "ArrowLeft" : n);
                                    if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return tA[o]
                                }(e, c.orientation, c.dir);
                                if (void 0 !== t) {
                                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                    e.preventDefault();
                                    let r = m().filter(e => e.focusable).map(e => e.ref.current);
                                    if ("last" === t) r.reverse();
                                    else if ("prev" === t || "next" === t) {
                                        "prev" === t && r.reverse();
                                        let n = r.indexOf(e.currentTarget);
                                        r = c.loop ? function(e, t) {
                                            return e.map((r, n) => e[(t + n) % e.length])
                                        }(r, n + 1) : r.slice(n + 1)
                                    }
                                    setTimeout(() => tj(r))
                                }
                            })
                        })
                    })
                });
            tM.displayName = tC;
            var tA = {
                ArrowLeft: "prev",
                ArrowUp: "prev",
                ArrowRight: "next",
                ArrowDown: "next",
                PageUp: "first",
                Home: "first",
                PageDown: "last",
                End: "last"
            };

            function tj(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = document.activeElement;
                for (let n of e)
                    if (n === r || (n.focus({
                            preventScroll: t
                        }), document.activeElement !== r)) return
            }
            var tR = new WeakMap,
                tD = new WeakMap,
                tL = {},
                tO = 0,
                tN = function(e) {
                    return e && (e.host || tN(e.parentNode))
                },
                t_ = function(e, t, r, n) {
                    var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var r = tN(e);
                        return r && t.contains(r) ? r : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    tL[r] || (tL[r] = new WeakMap);
                    var i = tL[r],
                        a = [],
                        s = new Set,
                        l = new Set(o),
                        u = function(e) {
                            !e || s.has(e) || (s.add(e), u(e.parentNode))
                        };
                    o.forEach(u);
                    var d = function(e) {
                        !e || l.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (s.has(e)) d(e);
                            else try {
                                var t = e.getAttribute(n),
                                    o = null !== t && "false" !== t,
                                    l = (tR.get(e) || 0) + 1,
                                    u = (i.get(e) || 0) + 1;
                                tR.set(e, l), i.set(e, u), a.push(e), 1 === l && o && tD.set(e, !0), 1 === u && e.setAttribute(r, "true"), o || e.setAttribute(n, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                        })
                    };
                    return d(t), s.clear(), tO++,
                        function() {
                            a.forEach(function(e) {
                                var t = tR.get(e) - 1,
                                    o = i.get(e) - 1;
                                tR.set(e, t), i.set(e, o), t || (tD.has(e) || e.removeAttribute(n), tD.delete(e)), o || e.removeAttribute(r)
                            }), --tO || (tR = new WeakMap, tR = new WeakMap, tD = new WeakMap, tL = {})
                        }
                },
                tI = function(e, t, r) {
                    void 0 === r && (r = "data-aria-hidden");
                    var n, o = Array.from(Array.isArray(e) ? e : [e]),
                        i = t || (n = e, "undefined" == typeof document ? null : (Array.isArray(n) ? n[0] : n).ownerDocument.body);
                    return i ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live]"))), t_(o, i, r, "aria-hidden")) : function() {
                        return null
                    }
                },
                tF = function() {
                    return (tF = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function tV(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                return r
            }
            Object.create, Object.create;
            var tB = ("function" == typeof SuppressedError && SuppressedError, "right-scroll-bar-position"),
                tz = "width-before-scroll-bar";

            function tW(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var tU = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
                tH = new WeakMap;

            function t$(e) {
                return e
            }
            var tG = function(e) {
                    void 0 === e && (e = {});
                    var t, r, n, o = (void 0 === t && (t = t$), r = [], n = !1, {
                        read: function() {
                            if (n) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                            return r.length ? r[r.length - 1] : null
                        },
                        useMedium: function(e) {
                            var o = t(e, n);
                            return r.push(o),
                                function() {
                                    r = r.filter(function(e) {
                                        return e !== o
                                    })
                                }
                        },
                        assignSyncMedium: function(e) {
                            for (n = !0; r.length;) {
                                var t = r;
                                r = [], t.forEach(e)
                            }
                            r = {
                                push: function(t) {
                                    return e(t)
                                },
                                filter: function() {
                                    return r
                                }
                            }
                        },
                        assignMedium: function(e) {
                            n = !0;
                            var t = [];
                            if (r.length) {
                                var o = r;
                                r = [], o.forEach(e), t = r
                            }
                            var i = function() {
                                    var r = t;
                                    t = [], r.forEach(e)
                                },
                                a = function() {
                                    return Promise.resolve().then(i)
                                };
                            a(), r = {
                                push: function(e) {
                                    t.push(e), a()
                                },
                                filter: function(e) {
                                    return t = t.filter(e), r
                                }
                            }
                        }
                    });
                    return o.options = tF({
                        async: !0,
                        ssr: !1
                    }, e), o
                }(),
                tK = function() {},
                tX = a.forwardRef(function(e, t) {
                    var r, n, o, i, s = a.useRef(null),
                        l = a.useState({
                            onScrollCapture: tK,
                            onWheelCapture: tK,
                            onTouchMoveCapture: tK
                        }),
                        u = l[0],
                        d = l[1],
                        c = e.forwardProps,
                        f = e.children,
                        p = e.className,
                        h = e.removeScrollBar,
                        m = e.enabled,
                        v = e.shards,
                        g = e.sideCar,
                        y = e.noIsolation,
                        b = e.inert,
                        w = e.allowPinchZoom,
                        x = e.as,
                        E = e.gapMode,
                        S = tV(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        T = (r = [s, t], n = function(e) {
                            return r.forEach(function(t) {
                                return tW(t, e)
                            })
                        }, (o = (0, a.useState)(function() {
                            return {
                                value: null,
                                callback: n,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(value) {
                                        var e = o.value;
                                        e !== value && (o.value = value, o.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = n, i = o.facade, tU(function() {
                            var e = tH.get(i);
                            if (e) {
                                var t = new Set(e),
                                    n = new Set(r),
                                    o = i.current;
                                t.forEach(function(e) {
                                    n.has(e) || tW(e, null)
                                }), n.forEach(function(e) {
                                    t.has(e) || tW(e, o)
                                })
                            }
                            tH.set(i, r)
                        }, [r]), i),
                        P = tF(tF({}, S), u);
                    return a.createElement(a.Fragment, null, m && a.createElement(g, {
                        sideCar: tG,
                        removeScrollBar: h,
                        shards: v,
                        noIsolation: y,
                        inert: b,
                        setCallbacks: d,
                        allowPinchZoom: !!w,
                        lockRef: s,
                        gapMode: E
                    }), c ? a.cloneElement(a.Children.only(f), tF(tF({}, P), {
                        ref: T
                    })) : a.createElement(void 0 === x ? "div" : x, tF({}, P, {
                        className: p,
                        ref: T
                    }), f))
                });
            tX.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, tX.classNames = {
                fullWidth: tz,
                zeroRight: tB
            };
            var tY = function(e) {
                var t = e.sideCar,
                    r = tV(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var n = t.read();
                if (!n) throw Error("Sidecar medium not found");
                return a.createElement(n, tF({}, r))
            };
            tY.isSideCarExport = !0;
            var tq = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(n) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = i || r.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var o, a;
                                (o = t).styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n)), a = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                tQ = function() {
                    var e = tq();
                    return function(t, r) {
                        a.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && r])
                    }
                },
                tZ = function() {
                    var e = tQ();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                tJ = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                t0 = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                t1 = function(e) {
                    var t = window.getComputedStyle(document.body),
                        r = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        n = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [t0(r), t0(n), t0(o)]
                },
                t2 = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return tJ;
                    var t = t1(e),
                        r = document.documentElement.clientWidth,
                        n = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, n - r + t[2] - t[0])
                    }
                },
                t5 = tZ(),
                t4 = "data-scroll-locked",
                t3 = function(e, t, r, n) {
                    var o = e.left,
                        i = e.top,
                        a = e.right,
                        s = e.gap;
                    return void 0 === r && (r = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(s, "px ").concat(n, ";\n  }\n  body[").concat(t4, "] {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(s, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(tB, " {\n    right: ").concat(s, "px ").concat(n, ";\n  }\n  \n  .").concat(tz, " {\n    margin-right: ").concat(s, "px ").concat(n, ";\n  }\n  \n  .").concat(tB, " .").concat(tB, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(tz, " .").concat(tz, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body[").concat(t4, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
                },
                t6 = function() {
                    var e = parseInt(document.body.getAttribute(t4) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                t7 = function() {
                    a.useEffect(function() {
                        return document.body.setAttribute(t4, (t6() + 1).toString()),
                            function() {
                                var e = t6() - 1;
                                e <= 0 ? document.body.removeAttribute(t4) : document.body.setAttribute(t4, e.toString())
                            }
                    }, [])
                },
                t9 = function(e) {
                    var t = e.noRelative,
                        r = e.noImportant,
                        n = e.gapMode,
                        o = void 0 === n ? "margin" : n;
                    t7();
                    var i = a.useMemo(function() {
                        return t2(o)
                    }, [o]);
                    return a.createElement(t5, {
                        styles: t3(i, !t, o, r ? "" : "!important")
                    })
                },
                t8 = !1;
            if ("undefined" != typeof window) try {
                var re = Object.defineProperty({}, "passive", {
                    get: function() {
                        return t8 = !0, !0
                    }
                });
                window.addEventListener("test", re, re), window.removeEventListener("test", re, re)
            } catch (e) {
                t8 = !1
            }
            var rt = !!t8 && {
                    passive: !1
                },
                rr = function(e, t) {
                    if (!(e instanceof Element)) return !1;
                    var r = window.getComputedStyle(e);
                    return "hidden" !== r[t] && !(r.overflowY === r.overflowX && "TEXTAREA" !== e.tagName && "visible" === r[t])
                },
                rn = function(e, t) {
                    var r = t.ownerDocument,
                        n = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), ro(e, n)) {
                            var o = ri(e, n);
                            if (o[1] > o[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== r.body);
                    return !1
                },
                ro = function(e, t) {
                    return "v" === e ? rr(t, "overflowY") : rr(t, "overflowX")
                },
                ri = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                ra = function(e, t, r, n, o) {
                    var i, a = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                        s = a * n,
                        l = r.target,
                        u = t.contains(l),
                        d = !1,
                        c = s > 0,
                        f = 0,
                        p = 0;
                    do {
                        var h = ri(e, l),
                            m = h[0],
                            v = h[1] - h[2] - a * m;
                        (m || v) && ro(e, l) && (f += v, p += m), l instanceof ShadowRoot ? l = l.host : l = l.parentNode
                    } while (!u && l !== document.body || u && (t.contains(l) || t === l));
                    return c && (o && 1 > Math.abs(f) || !o && s > f) ? d = !0 : !c && (o && 1 > Math.abs(p) || !o && -s > p) && (d = !0), d
                },
                rs = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                rl = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                ru = function(e) {
                    return e && "current" in e ? e.current : e
                },
                rd = 0,
                rc = [];
            let rf = (n = function(e) {
                var t = a.useRef([]),
                    r = a.useRef([0, 0]),
                    n = a.useRef(),
                    o = a.useState(rd++)[0],
                    i = a.useState(tZ)[0],
                    s = a.useRef(e);
                a.useEffect(function() {
                    s.current = e
                }, [e]), a.useEffect(function() {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-".concat(o));
                        var t = (function(e, t, r) {
                            if (r || 2 == arguments.length)
                                for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                            return e.concat(n || Array.prototype.slice.call(t))
                        })([e.lockRef.current], (e.shards || []).map(ru), !0).filter(Boolean);
                        return t.forEach(function(e) {
                                return e.classList.add("allow-interactivity-".concat(o))
                            }),
                            function() {
                                document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                    return e.classList.remove("allow-interactivity-".concat(o))
                                })
                            }
                    }
                }, [e.inert, e.lockRef.current, e.shards]);
                var l = a.useCallback(function(e, t) {
                        if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !s.current.allowPinchZoom;
                        var o, i = rs(e),
                            a = r.current,
                            l = "deltaX" in e ? e.deltaX : a[0] - i[0],
                            u = "deltaY" in e ? e.deltaY : a[1] - i[1],
                            d = e.target,
                            c = Math.abs(l) > Math.abs(u) ? "h" : "v";
                        if ("touches" in e && "h" === c && "range" === d.type) return !1;
                        var f = rn(c, d);
                        if (!f) return !0;
                        if (f ? o = c : (o = "v" === c ? "h" : "v", f = rn(c, d)), !f) return !1;
                        if (!n.current && "changedTouches" in e && (l || u) && (n.current = o), !o) return !0;
                        var p = n.current || o;
                        return ra(p, t, e, "h" === p ? l : u, !0)
                    }, []),
                    u = a.useCallback(function(e) {
                        if (rc.length && rc[rc.length - 1] === i) {
                            var r = "deltaY" in e ? rl(e) : rs(e),
                                n = t.current.filter(function(t) {
                                    var n;
                                    return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (n = t.delta)[0] === r[0] && n[1] === r[1]
                                })[0];
                            if (n && n.should) {
                                e.cancelable && e.preventDefault();
                                return
                            }
                            if (!n) {
                                var o = (s.current.shards || []).map(ru).filter(Boolean).filter(function(t) {
                                    return t.contains(e.target)
                                });
                                (o.length > 0 ? l(e, o[0]) : !s.current.noIsolation) && e.cancelable && e.preventDefault()
                            }
                        }
                    }, []),
                    d = a.useCallback(function(e, r, n, o) {
                        var i = {
                            name: e,
                            delta: r,
                            target: n,
                            should: o,
                            shadowParent: function(e) {
                                for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                return t
                            }(n)
                        };
                        t.current.push(i), setTimeout(function() {
                            t.current = t.current.filter(function(e) {
                                return e !== i
                            })
                        }, 1)
                    }, []),
                    c = a.useCallback(function(e) {
                        r.current = rs(e), n.current = void 0
                    }, []),
                    f = a.useCallback(function(t) {
                        d(t.type, rl(t), t.target, l(t, e.lockRef.current))
                    }, []),
                    p = a.useCallback(function(t) {
                        d(t.type, rs(t), t.target, l(t, e.lockRef.current))
                    }, []);
                a.useEffect(function() {
                    return rc.push(i), e.setCallbacks({
                            onScrollCapture: f,
                            onWheelCapture: f,
                            onTouchMoveCapture: p
                        }), document.addEventListener("wheel", u, rt), document.addEventListener("touchmove", u, rt), document.addEventListener("touchstart", c, rt),
                        function() {
                            rc = rc.filter(function(e) {
                                return e !== i
                            }), document.removeEventListener("wheel", u, rt), document.removeEventListener("touchmove", u, rt), document.removeEventListener("touchstart", c, rt)
                        }
                }, []);
                var h = e.removeScrollBar,
                    m = e.inert;
                return a.createElement(a.Fragment, null, m ? a.createElement(i, {
                    styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                }) : null, h ? a.createElement(t9, {
                    gapMode: e.gapMode
                }) : null)
            }, tG.useMedium(n), tY);
            var rp = a.forwardRef(function(e, t) {
                return a.createElement(tX, tF({}, e, {
                    ref: t,
                    sideCar: rf
                }))
            });
            rp.classNames = tX.classNames;
            var rh = ["Enter", " "],
                rm = ["ArrowUp", "PageDown", "End"],
                rv = ["ArrowDown", "PageUp", "Home", ...rm],
                rg = {
                    ltr: [...rh, "ArrowRight"],
                    rtl: [...rh, "ArrowLeft"]
                },
                ry = {
                    ltr: ["ArrowLeft"],
                    rtl: ["ArrowRight"]
                },
                rb = "Menu",
                [rw, rx, rE] = m(rb),
                [rS, rT] = (0, d.A)(rb, [rE, e6, tE]),
                rP = e6(),
                rk = tE(),
                [rC, rM] = rS(rb),
                [rA, rj] = rS(rb),
                rR = e => {
                    let {
                        __scopeMenu: t,
                        open: r = !1,
                        children: n,
                        dir: o,
                        onOpenChange: i,
                        modal: s = !0
                    } = e, l = rP(t), [u, d] = a.useState(null), c = a.useRef(!1), f = (0, g.c)(i), h = (0, v.jH)(o);
                    return a.useEffect(() => {
                        let e = () => {
                                c.current = !0, document.addEventListener("pointerdown", t, {
                                    capture: !0,
                                    once: !0
                                }), document.addEventListener("pointermove", t, {
                                    capture: !0,
                                    once: !0
                                })
                            },
                            t = () => c.current = !1;
                        return document.addEventListener("keydown", e, {
                            capture: !0
                        }), () => {
                            document.removeEventListener("keydown", e, {
                                capture: !0
                            }), document.removeEventListener("pointerdown", t, {
                                capture: !0
                            }), document.removeEventListener("pointermove", t, {
                                capture: !0
                            })
                        }
                    }, []), (0, p.jsx)(e8, { ...l,
                        children: (0, p.jsx)(rC, {
                            scope: t,
                            open: r,
                            onOpenChange: f,
                            content: u,
                            onContentChange: d,
                            children: (0, p.jsx)(rA, {
                                scope: t,
                                onClose: a.useCallback(() => f(!1), [f]),
                                isUsingKeyboardRef: c,
                                dir: h,
                                modal: s,
                                children: n
                            })
                        })
                    })
                };
            rR.displayName = rb;
            var rD = a.forwardRef((e, t) => {
                let {
                    __scopeMenu: r,
                    ...n
                } = e, o = rP(r);
                return (0, p.jsx)(tt, { ...o,
                    ...n,
                    ref: t
                })
            });
            rD.displayName = "MenuAnchor";
            var rL = "MenuPortal",
                [rO, rN] = rS(rL, {
                    forceMount: void 0
                }),
                r_ = e => {
                    let {
                        __scopeMenu: t,
                        forceMount: r,
                        children: n,
                        container: o
                    } = e, i = rM(rL, t);
                    return (0, p.jsx)(rO, {
                        scope: t,
                        forceMount: r,
                        children: (0, p.jsx)(tp, {
                            present: r || i.open,
                            children: (0, p.jsx)(tf.Z, {
                                asChild: !0,
                                container: o,
                                children: n
                            })
                        })
                    })
                };
            r_.displayName = rL;
            var rI = "MenuContent",
                [rF, rV] = rS(rI),
                rB = a.forwardRef((e, t) => {
                    let r = rN(rI, e.__scopeMenu),
                        {
                            forceMount: n = r.forceMount,
                            ...o
                        } = e,
                        i = rM(rI, e.__scopeMenu),
                        a = rj(rI, e.__scopeMenu);
                    return (0, p.jsx)(rw.Provider, {
                        scope: e.__scopeMenu,
                        children: (0, p.jsx)(tp, {
                            present: n || i.open,
                            children: (0, p.jsx)(rw.Slot, {
                                scope: e.__scopeMenu,
                                children: a.modal ? (0, p.jsx)(rz, { ...o,
                                    ref: t
                                }) : (0, p.jsx)(rW, { ...o,
                                    ref: t
                                })
                            })
                        })
                    })
                }),
                rz = a.forwardRef((e, t) => {
                    let r = rM(rI, e.__scopeMenu),
                        n = a.useRef(null),
                        o = (0, u.s)(t, n);
                    return a.useEffect(() => {
                        let e = n.current;
                        if (e) return tI(e)
                    }, []), (0, p.jsx)(rU, { ...e,
                        ref: o,
                        trapFocus: r.open,
                        disableOutsidePointerEvents: r.open,
                        disableOutsideScroll: !0,
                        onFocusOutside: (0, l.m)(e.onFocusOutside, e => e.preventDefault(), {
                            checkForDefaultPrevented: !1
                        }),
                        onDismiss: () => r.onOpenChange(!1)
                    })
                }),
                rW = a.forwardRef((e, t) => {
                    let r = rM(rI, e.__scopeMenu);
                    return (0, p.jsx)(rU, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        onDismiss: () => r.onOpenChange(!1)
                    })
                }),
                rU = a.forwardRef((e, t) => {
                    let {
                        __scopeMenu: r,
                        loop: n = !1,
                        trapFocus: o,
                        onOpenAutoFocus: i,
                        onCloseAutoFocus: s,
                        disableOutsidePointerEvents: d,
                        onEntryFocus: c,
                        onEscapeKeyDown: f,
                        onPointerDownOutside: m,
                        onFocusOutside: v,
                        onInteractOutside: g,
                        onDismiss: y,
                        disableOutsideScroll: b,
                        ...x
                    } = e, E = rM(rI, r), P = rj(rI, r), k = rP(r), C = rk(r), A = rx(r), [j, R] = a.useState(null), D = a.useRef(null), L = (0, u.s)(t, D, E.onContentChange), O = a.useRef(0), N = a.useRef(""), _ = a.useRef(0), I = a.useRef(null), F = a.useRef("right"), V = a.useRef(0), B = b ? rp : a.Fragment, z = b ? {
                        as: h.DX,
                        allowPinchZoom: !0
                    } : void 0, W = e => {
                        var t, r;
                        let n = N.current + e,
                            o = A().filter(e => !e.disabled),
                            i = document.activeElement,
                            a = null === (t = o.find(e => e.ref.current === i)) || void 0 === t ? void 0 : t.textValue,
                            s = function(e, t, r) {
                                var n;
                                let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                                    i = (n = Math.max(r ? e.indexOf(r) : -1, 0), e.map((t, r) => e[(n + r) % e.length]));
                                1 === o.length && (i = i.filter(e => e !== r));
                                let a = i.find(e => e.toLowerCase().startsWith(o.toLowerCase()));
                                return a !== r ? a : void 0
                            }(o.map(e => e.textValue), n, a),
                            l = null === (r = o.find(e => e.textValue === s)) || void 0 === r ? void 0 : r.ref.current;
                        ! function e(t) {
                            N.current = t, window.clearTimeout(O.current), "" !== t && (O.current = window.setTimeout(() => e(""), 1e3))
                        }(n), l && setTimeout(() => l.focus())
                    };
                    a.useEffect(() => () => window.clearTimeout(O.current), []), a.useEffect(() => {
                        var e, t;
                        let r = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null !== (e = r[0]) && void 0 !== e ? e : T()), document.body.insertAdjacentElement("beforeend", null !== (t = r[1]) && void 0 !== t ? t : T()), S++, () => {
                            1 === S && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), S--
                        }
                    }, []);
                    let U = a.useCallback(e => {
                        var t, r;
                        return F.current === (null === (t = I.current) || void 0 === t ? void 0 : t.side) && function(e, t) {
                            return !!t && function(e, t) {
                                let {
                                    x: r,
                                    y: n
                                } = e, o = !1;
                                for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                    let a = t[e].x,
                                        s = t[e].y,
                                        l = t[i].x,
                                        u = t[i].y;
                                    s > n != u > n && r < (l - a) * (n - s) / (u - s) + a && (o = !o)
                                }
                                return o
                            }({
                                x: e.clientX,
                                y: e.clientY
                            }, t)
                        }(e, null === (r = I.current) || void 0 === r ? void 0 : r.area)
                    }, []);
                    return (0, p.jsx)(rF, {
                        scope: r,
                        searchRef: N,
                        onItemEnter: a.useCallback(e => {
                            U(e) && e.preventDefault()
                        }, [U]),
                        onItemLeave: a.useCallback(e => {
                            var t;
                            U(e) || (null === (t = D.current) || void 0 === t || t.focus(), R(null))
                        }, [U]),
                        onTriggerLeave: a.useCallback(e => {
                            U(e) && e.preventDefault()
                        }, [U]),
                        pointerGraceTimerRef: _,
                        onPointerGraceIntentChange: a.useCallback(e => {
                            I.current = e
                        }, []),
                        children: (0, p.jsx)(B, { ...z,
                            children: (0, p.jsx)(M, {
                                asChild: !0,
                                trapped: o,
                                onMountAutoFocus: (0, l.m)(i, e => {
                                    var t;
                                    e.preventDefault(), null === (t = D.current) || void 0 === t || t.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onUnmountAutoFocus: s,
                                children: (0, p.jsx)(w, {
                                    asChild: !0,
                                    disableOutsidePointerEvents: d,
                                    onEscapeKeyDown: f,
                                    onPointerDownOutside: m,
                                    onFocusOutside: v,
                                    onInteractOutside: g,
                                    onDismiss: y,
                                    children: (0, p.jsx)(tP, {
                                        asChild: !0,
                                        ...C,
                                        dir: P.dir,
                                        orientation: "vertical",
                                        loop: n,
                                        currentTabStopId: j,
                                        onCurrentTabStopIdChange: R,
                                        onEntryFocus: (0, l.m)(c, e => {
                                            P.isUsingKeyboardRef.current || e.preventDefault()
                                        }),
                                        preventScrollOnEntryFocus: !0,
                                        children: (0, p.jsx)(ti, {
                                            role: "menu",
                                            "aria-orientation": "vertical",
                                            "data-state": ns(E.open),
                                            "data-radix-menu-content": "",
                                            dir: P.dir,
                                            ...k,
                                            ...x,
                                            ref: L,
                                            style: {
                                                outline: "none",
                                                ...x.style
                                            },
                                            onKeyDown: (0, l.m)(x.onKeyDown, e => {
                                                let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                                                    r = e.ctrlKey || e.altKey || e.metaKey,
                                                    n = 1 === e.key.length;
                                                t && ("Tab" === e.key && e.preventDefault(), !r && n && W(e.key));
                                                let o = D.current;
                                                if (e.target !== o || !rv.includes(e.key)) return;
                                                e.preventDefault();
                                                let i = A().filter(e => !e.disabled).map(e => e.ref.current);
                                                rm.includes(e.key) && i.reverse(),
                                                    function(e) {
                                                        let t = document.activeElement;
                                                        for (let r of e)
                                                            if (r === t || (r.focus(), document.activeElement !== t)) return
                                                    }(i)
                                            }),
                                            onBlur: (0, l.m)(e.onBlur, e => {
                                                e.currentTarget.contains(e.target) || (window.clearTimeout(O.current), N.current = "")
                                            }),
                                            onPointerMove: (0, l.m)(e.onPointerMove, nd(e => {
                                                let t = e.target,
                                                    r = V.current !== e.clientX;
                                                if (e.currentTarget.contains(t) && r) {
                                                    let t = e.clientX > V.current ? "right" : "left";
                                                    F.current = t, V.current = e.clientX
                                                }
                                            }))
                                        })
                                    })
                                })
                            })
                        })
                    })
                });
            rB.displayName = rI;
            var rH = a.forwardRef((e, t) => {
                let {
                    __scopeMenu: r,
                    ...n
                } = e;
                return (0, p.jsx)(f.sG.div, {
                    role: "group",
                    ...n,
                    ref: t
                })
            });
            rH.displayName = "MenuGroup";
            var r$ = a.forwardRef((e, t) => {
                let {
                    __scopeMenu: r,
                    ...n
                } = e;
                return (0, p.jsx)(f.sG.div, { ...n,
                    ref: t
                })
            });
            r$.displayName = "MenuLabel";
            var rG = "MenuItem",
                rK = "menu.itemSelect",
                rX = a.forwardRef((e, t) => {
                    let {
                        disabled: r = !1,
                        onSelect: n,
                        ...o
                    } = e, i = a.useRef(null), s = rj(rG, e.__scopeMenu), d = rV(rG, e.__scopeMenu), c = (0, u.s)(t, i), h = a.useRef(!1);
                    return (0, p.jsx)(rY, { ...o,
                        ref: c,
                        disabled: r,
                        onClick: (0, l.m)(e.onClick, () => {
                            let e = i.current;
                            if (!r && e) {
                                let t = new CustomEvent(rK, {
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                e.addEventListener(rK, e => null == n ? void 0 : n(e), {
                                    once: !0
                                }), (0, f.hO)(e, t), t.defaultPrevented ? h.current = !1 : s.onClose()
                            }
                        }),
                        onPointerDown: t => {
                            var r;
                            null === (r = e.onPointerDown) || void 0 === r || r.call(e, t), h.current = !0
                        },
                        onPointerUp: (0, l.m)(e.onPointerUp, e => {
                            var t;
                            h.current || null === (t = e.currentTarget) || void 0 === t || t.click()
                        }),
                        onKeyDown: (0, l.m)(e.onKeyDown, e => {
                            let t = "" !== d.searchRef.current;
                            !r && (!t || " " !== e.key) && rh.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                        })
                    })
                });
            rX.displayName = rG;
            var rY = a.forwardRef((e, t) => {
                    let {
                        __scopeMenu: r,
                        disabled: n = !1,
                        textValue: o,
                        ...i
                    } = e, s = rV(rG, r), d = rk(r), c = a.useRef(null), h = (0, u.s)(t, c), [m, v] = a.useState(!1), [g, y] = a.useState("");
                    return a.useEffect(() => {
                        let e = c.current;
                        if (e) {
                            var t;
                            y((null !== (t = e.textContent) && void 0 !== t ? t : "").trim())
                        }
                    }, [i.children]), (0, p.jsx)(rw.ItemSlot, {
                        scope: r,
                        disabled: n,
                        textValue: null != o ? o : g,
                        children: (0, p.jsx)(tM, {
                            asChild: !0,
                            ...d,
                            focusable: !n,
                            children: (0, p.jsx)(f.sG.div, {
                                role: "menuitem",
                                "data-highlighted": m ? "" : void 0,
                                "aria-disabled": n || void 0,
                                "data-disabled": n ? "" : void 0,
                                ...i,
                                ref: h,
                                onPointerMove: (0, l.m)(e.onPointerMove, nd(e => {
                                    n ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({
                                        preventScroll: !0
                                    }))
                                })),
                                onPointerLeave: (0, l.m)(e.onPointerLeave, nd(e => s.onItemLeave(e))),
                                onFocus: (0, l.m)(e.onFocus, () => v(!0)),
                                onBlur: (0, l.m)(e.onBlur, () => v(!1))
                            })
                        })
                    })
                }),
                rq = a.forwardRef((e, t) => {
                    let {
                        checked: r = !1,
                        onCheckedChange: n,
                        ...o
                    } = e;
                    return (0, p.jsx)(r4, {
                        scope: e.__scopeMenu,
                        checked: r,
                        children: (0, p.jsx)(rX, {
                            role: "menuitemcheckbox",
                            "aria-checked": nl(r) ? "mixed" : r,
                            ...o,
                            ref: t,
                            "data-state": nu(r),
                            onSelect: (0, l.m)(o.onSelect, () => null == n ? void 0 : n(!!nl(r) || !r), {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                });
            rq.displayName = "MenuCheckboxItem";
            var rQ = "MenuRadioGroup",
                [rZ, rJ] = rS(rQ, {
                    value: void 0,
                    onValueChange: () => {}
                }),
                r0 = a.forwardRef((e, t) => {
                    let {
                        value: r,
                        onValueChange: n,
                        ...o
                    } = e, i = (0, g.c)(n);
                    return (0, p.jsx)(rZ, {
                        scope: e.__scopeMenu,
                        value: r,
                        onValueChange: i,
                        children: (0, p.jsx)(rH, { ...o,
                            ref: t
                        })
                    })
                });
            r0.displayName = rQ;
            var r1 = "MenuRadioItem",
                r2 = a.forwardRef((e, t) => {
                    let {
                        value: r,
                        ...n
                    } = e, o = rJ(r1, e.__scopeMenu), i = r === o.value;
                    return (0, p.jsx)(r4, {
                        scope: e.__scopeMenu,
                        checked: i,
                        children: (0, p.jsx)(rX, {
                            role: "menuitemradio",
                            "aria-checked": i,
                            ...n,
                            ref: t,
                            "data-state": nu(i),
                            onSelect: (0, l.m)(n.onSelect, () => {
                                var e;
                                return null === (e = o.onValueChange) || void 0 === e ? void 0 : e.call(o, r)
                            }, {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                });
            r2.displayName = r1;
            var r5 = "MenuItemIndicator",
                [r4, r3] = rS(r5, {
                    checked: !1
                }),
                r6 = a.forwardRef((e, t) => {
                    let {
                        __scopeMenu: r,
                        forceMount: n,
                        ...o
                    } = e, i = r3(r5, r);
                    return (0, p.jsx)(tp, {
                        present: n || nl(i.checked) || !0 === i.checked,
                        children: (0, p.jsx)(f.sG.span, { ...o,
                            ref: t,
                            "data-state": nu(i.checked)
                        })
                    })
                });
            r6.displayName = r5;
            var r7 = a.forwardRef((e, t) => {
                let {
                    __scopeMenu: r,
                    ...n
                } = e;
                return (0, p.jsx)(f.sG.div, {
                    role: "separator",
                    "aria-orientation": "horizontal",
                    ...n,
                    ref: t
                })
            });
            r7.displayName = "MenuSeparator";
            var r9 = a.forwardRef((e, t) => {
                let {
                    __scopeMenu: r,
                    ...n
                } = e, o = rP(r);
                return (0, p.jsx)(tl, { ...o,
                    ...n,
                    ref: t
                })
            });
            r9.displayName = "MenuArrow";
            var r8 = "MenuSub",
                [ne, nt] = rS(r8),
                nr = e => {
                    let {
                        __scopeMenu: t,
                        children: r,
                        open: n = !1,
                        onOpenChange: o
                    } = e, i = rM(r8, t), s = rP(t), [l, u] = a.useState(null), [d, c] = a.useState(null), f = (0, g.c)(o);
                    return a.useEffect(() => (!1 === i.open && f(!1), () => f(!1)), [i.open, f]), (0, p.jsx)(e8, { ...s,
                        children: (0, p.jsx)(rC, {
                            scope: t,
                            open: n,
                            onOpenChange: f,
                            content: d,
                            onContentChange: c,
                            children: (0, p.jsx)(ne, {
                                scope: t,
                                contentId: I(),
                                triggerId: I(),
                                trigger: l,
                                onTriggerChange: u,
                                children: r
                            })
                        })
                    })
                };
            nr.displayName = r8;
            var nn = "MenuSubTrigger",
                no = a.forwardRef((e, t) => {
                    let r = rM(nn, e.__scopeMenu),
                        n = rj(nn, e.__scopeMenu),
                        o = nt(nn, e.__scopeMenu),
                        i = rV(nn, e.__scopeMenu),
                        s = a.useRef(null),
                        {
                            pointerGraceTimerRef: d,
                            onPointerGraceIntentChange: c
                        } = i,
                        f = {
                            __scopeMenu: e.__scopeMenu
                        },
                        h = a.useCallback(() => {
                            s.current && window.clearTimeout(s.current), s.current = null
                        }, []);
                    return a.useEffect(() => h, [h]), a.useEffect(() => {
                        let e = d.current;
                        return () => {
                            window.clearTimeout(e), c(null)
                        }
                    }, [d, c]), (0, p.jsx)(rD, {
                        asChild: !0,
                        ...f,
                        children: (0, p.jsx)(rY, {
                            id: o.triggerId,
                            "aria-haspopup": "menu",
                            "aria-expanded": r.open,
                            "aria-controls": o.contentId,
                            "data-state": ns(r.open),
                            ...e,
                            ref: (0, u.t)(t, o.onTriggerChange),
                            onClick: t => {
                                var n;
                                null === (n = e.onClick) || void 0 === n || n.call(e, t), e.disabled || t.defaultPrevented || (t.currentTarget.focus(), r.open || r.onOpenChange(!0))
                            },
                            onPointerMove: (0, l.m)(e.onPointerMove, nd(t => {
                                i.onItemEnter(t), t.defaultPrevented || e.disabled || r.open || s.current || (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
                                    r.onOpenChange(!0), h()
                                }, 100))
                            })),
                            onPointerLeave: (0, l.m)(e.onPointerLeave, nd(e => {
                                var t, n;
                                h();
                                let o = null === (t = r.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                                if (o) {
                                    let t = null === (n = r.content) || void 0 === n ? void 0 : n.dataset.side,
                                        a = "right" === t,
                                        s = o[a ? "left" : "right"],
                                        l = o[a ? "right" : "left"];
                                    i.onPointerGraceIntentChange({
                                        area: [{
                                            x: e.clientX + (a ? -5 : 5),
                                            y: e.clientY
                                        }, {
                                            x: s,
                                            y: o.top
                                        }, {
                                            x: l,
                                            y: o.top
                                        }, {
                                            x: l,
                                            y: o.bottom
                                        }, {
                                            x: s,
                                            y: o.bottom
                                        }],
                                        side: t
                                    }), window.clearTimeout(d.current), d.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300)
                                } else {
                                    if (i.onTriggerLeave(e), e.defaultPrevented) return;
                                    i.onPointerGraceIntentChange(null)
                                }
                            })),
                            onKeyDown: (0, l.m)(e.onKeyDown, t => {
                                let o = "" !== i.searchRef.current;
                                if (!e.disabled && (!o || " " !== t.key) && rg[n.dir].includes(t.key)) {
                                    var a;
                                    r.onOpenChange(!0), null === (a = r.content) || void 0 === a || a.focus(), t.preventDefault()
                                }
                            })
                        })
                    })
                });
            no.displayName = nn;
            var ni = "MenuSubContent",
                na = a.forwardRef((e, t) => {
                    let r = rN(rI, e.__scopeMenu),
                        {
                            forceMount: n = r.forceMount,
                            ...o
                        } = e,
                        i = rM(rI, e.__scopeMenu),
                        s = rj(rI, e.__scopeMenu),
                        d = nt(ni, e.__scopeMenu),
                        c = a.useRef(null),
                        f = (0, u.s)(t, c);
                    return (0, p.jsx)(rw.Provider, {
                        scope: e.__scopeMenu,
                        children: (0, p.jsx)(tp, {
                            present: n || i.open,
                            children: (0, p.jsx)(rw.Slot, {
                                scope: e.__scopeMenu,
                                children: (0, p.jsx)(rU, {
                                    id: d.contentId,
                                    "aria-labelledby": d.triggerId,
                                    ...o,
                                    ref: f,
                                    align: "start",
                                    side: "rtl" === s.dir ? "left" : "right",
                                    disableOutsidePointerEvents: !1,
                                    disableOutsideScroll: !1,
                                    trapFocus: !1,
                                    onOpenAutoFocus: e => {
                                        var t;
                                        s.isUsingKeyboardRef.current && (null === (t = c.current) || void 0 === t || t.focus()), e.preventDefault()
                                    },
                                    onCloseAutoFocus: e => e.preventDefault(),
                                    onFocusOutside: (0, l.m)(e.onFocusOutside, e => {
                                        e.target !== d.trigger && i.onOpenChange(!1)
                                    }),
                                    onEscapeKeyDown: (0, l.m)(e.onEscapeKeyDown, e => {
                                        s.onClose(), e.preventDefault()
                                    }),
                                    onKeyDown: (0, l.m)(e.onKeyDown, e => {
                                        let t = e.currentTarget.contains(e.target),
                                            r = ry[s.dir].includes(e.key);
                                        if (t && r) {
                                            var n;
                                            i.onOpenChange(!1), null === (n = d.trigger) || void 0 === n || n.focus(), e.preventDefault()
                                        }
                                    })
                                })
                            })
                        })
                    })
                });

            function ns(e) {
                return e ? "open" : "closed"
            }

            function nl(e) {
                return "indeterminate" === e
            }

            function nu(e) {
                return nl(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }

            function nd(e) {
                return t => "mouse" === t.pointerType ? e(t) : void 0
            }
            na.displayName = ni;
            var nc = "DropdownMenu",
                [nf, np] = (0, d.A)(nc, [rT]),
                nh = rT(),
                [nm, nv] = nf(nc),
                ng = e => {
                    let {
                        __scopeDropdownMenu: t,
                        children: r,
                        dir: n,
                        open: o,
                        defaultOpen: i,
                        onOpenChange: s,
                        modal: l = !0
                    } = e, u = nh(t), d = a.useRef(null), [f = !1, h] = (0, c.i)({
                        prop: o,
                        defaultProp: i,
                        onChange: s
                    });
                    return (0, p.jsx)(nm, {
                        scope: t,
                        triggerId: I(),
                        triggerRef: d,
                        contentId: I(),
                        open: f,
                        onOpenChange: h,
                        onOpenToggle: a.useCallback(() => h(e => !e), [h]),
                        modal: l,
                        children: (0, p.jsx)(rR, { ...u,
                            open: f,
                            onOpenChange: h,
                            dir: n,
                            modal: l,
                            children: r
                        })
                    })
                };
            ng.displayName = nc;
            var ny = "DropdownMenuTrigger",
                nb = a.forwardRef((e, t) => {
                    let {
                        __scopeDropdownMenu: r,
                        disabled: n = !1,
                        ...o
                    } = e, i = nv(ny, r), a = nh(r);
                    return (0, p.jsx)(rD, {
                        asChild: !0,
                        ...a,
                        children: (0, p.jsx)(f.sG.button, {
                            type: "button",
                            id: i.triggerId,
                            "aria-haspopup": "menu",
                            "aria-expanded": i.open,
                            "aria-controls": i.open ? i.contentId : void 0,
                            "data-state": i.open ? "open" : "closed",
                            "data-disabled": n ? "" : void 0,
                            disabled: n,
                            ...o,
                            ref: (0, u.t)(t, i.triggerRef),
                            onPointerDown: (0, l.m)(e.onPointerDown, e => {
                                n || 0 !== e.button || !1 !== e.ctrlKey || (i.onOpenToggle(), i.open || e.preventDefault())
                            }),
                            onKeyDown: (0, l.m)(e.onKeyDown, e => {
                                !n && (["Enter", " "].includes(e.key) && i.onOpenToggle(), "ArrowDown" === e.key && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                            })
                        })
                    })
                });
            nb.displayName = ny;
            var nw = e => {
                let {
                    __scopeDropdownMenu: t,
                    ...r
                } = e, n = nh(t);
                return (0, p.jsx)(r_, { ...n,
                    ...r
                })
            };
            nw.displayName = "DropdownMenuPortal";
            var nx = "DropdownMenuContent",
                nE = a.forwardRef((e, t) => {
                    let {
                        __scopeDropdownMenu: r,
                        ...n
                    } = e, o = nv(nx, r), i = nh(r), s = a.useRef(!1);
                    return (0, p.jsx)(rB, {
                        id: o.contentId,
                        "aria-labelledby": o.triggerId,
                        ...i,
                        ...n,
                        ref: t,
                        onCloseAutoFocus: (0, l.m)(e.onCloseAutoFocus, e => {
                            var t;
                            s.current || null === (t = o.triggerRef.current) || void 0 === t || t.focus(), s.current = !1, e.preventDefault()
                        }),
                        onInteractOutside: (0, l.m)(e.onInteractOutside, e => {
                            let t = e.detail.originalEvent,
                                r = 0 === t.button && !0 === t.ctrlKey,
                                n = 2 === t.button || r;
                            (!o.modal || n) && (s.current = !0)
                        }),
                        style: { ...e.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    })
                });
            nE.displayName = nx;
            var nS = a.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = nh(r);
                return (0, p.jsx)(rH, { ...o,
                    ...n,
                    ref: t
                })
            });
            nS.displayName = "DropdownMenuGroup";
            var nT = a.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = nh(r);
                return (0, p.jsx)(r$, { ...o,
                    ...n,
                    ref: t
                })
            });
            nT.displayName = "DropdownMenuLabel";
            var nP = a.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = nh(r);
                return (0, p.jsx)(rX, { ...o,
                    ...n,
                    ref: t
                })
            });
            nP.displayName = "DropdownMenuItem";
            var nk = a.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = nh(r);
                return (0, p.jsx)(rq, { ...o,
                    ...n,
                    ref: t
                })
            });
            nk.displayName = "DropdownMenuCheckboxItem";
            var nC = a.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = nh(r);
                return (0, p.jsx)(r0, { ...o,
                    ...n,
                    ref: t
                })
            });
            nC.displayName = "DropdownMenuRadioGroup";
            var nM = a.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = nh(r);
                return (0, p.jsx)(r2, { ...o,
                    ...n,
                    ref: t
                })
            });
            nM.displayName = "DropdownMenuRadioItem";
            var nA = a.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = nh(r);
                return (0, p.jsx)(r6, { ...o,
                    ...n,
                    ref: t
                })
            });
            nA.displayName = "DropdownMenuItemIndicator";
            var nj = a.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = nh(r);
                return (0, p.jsx)(r7, { ...o,
                    ...n,
                    ref: t
                })
            });
            nj.displayName = "DropdownMenuSeparator", a.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = nh(r);
                return (0, p.jsx)(r9, { ...o,
                    ...n,
                    ref: t
                })
            }).displayName = "DropdownMenuArrow";
            var nR = a.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = nh(r);
                return (0, p.jsx)(no, { ...o,
                    ...n,
                    ref: t
                })
            });
            nR.displayName = "DropdownMenuSubTrigger";
            var nD = a.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = nh(r);
                return (0, p.jsx)(na, { ...o,
                    ...n,
                    ref: t,
                    style: { ...e.style,
                        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            });
            nD.displayName = "DropdownMenuSubContent";
            var nL = ng,
                nO = nb,
                nN = nw,
                n_ = nE,
                nI = nS,
                nF = nT,
                nV = nP,
                nB = nk,
                nz = nC,
                nW = nM,
                nU = nA,
                nH = nj,
                n$ = e => {
                    let {
                        __scopeDropdownMenu: t,
                        children: r,
                        open: n,
                        onOpenChange: o,
                        defaultOpen: i
                    } = e, a = nh(t), [s = !1, l] = (0, c.i)({
                        prop: n,
                        defaultProp: i,
                        onChange: o
                    });
                    return (0, p.jsx)(nr, { ...a,
                        open: s,
                        onOpenChange: l,
                        children: r
                    })
                },
                nG = nR,
                nK = nD
        },
        17323: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => l
            });
            var n = r(12115),
                o = r(47650),
                i = r(23360),
                a = r(46611),
                s = r(95155),
                l = n.forwardRef((e, t) => {
                    var r, l;
                    let {
                        container: u,
                        ...d
                    } = e, [c, f] = n.useState(!1);
                    (0, a.N)(() => f(!0), []);
                    let p = u || c && (null === (l = globalThis) || void 0 === l ? void 0 : null === (r = l.document) || void 0 === r ? void 0 : r.body);
                    return p ? o.createPortal((0, s.jsx)(i.sG.div, { ...d,
                        ref: t
                    }), p) : null
                });
            l.displayName = "Portal"
        },
        23360: (e, t, r) => {
            "use strict";
            r.d(t, {
                hO: () => l,
                sG: () => s
            });
            var n = r(12115),
                o = r(47650),
                i = r(12317),
                a = r(95155),
                s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let r = n.forwardRef((e, r) => {
                        let {
                            asChild: n,
                            ...o
                        } = e, s = n ? i.DX : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(s, { ...o,
                            ref: r
                        })
                    });
                    return r.displayName = `Primitive.${t}`, { ...e,
                        [t]: r
                    }
                }, {});

            function l(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t))
            }
        },
        18052: (e, t, r) => {
            "use strict";
            r.d(t, {
                OK: () => et,
                bL: () => J,
                VM: () => A,
                lr: () => B,
                LM: () => ee
            });
            var n = r(12115);

            function o(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function i(...e) {
                return t => {
                    let r = !1,
                        n = e.map(e => {
                            let n = o(e, t);
                            return r || "function" != typeof n || (r = !0), n
                        });
                    if (r) return () => {
                        for (let t = 0; t < n.length; t++) {
                            let r = n[t];
                            "function" == typeof r ? r() : o(e[t], null)
                        }
                    }
                }
            }

            function a(...e) {
                return n.useCallback(i(...e), e)
            }
            r(47650);
            var s = r(95155),
                l = n.forwardRef((e, t) => {
                    let {
                        children: r,
                        ...o
                    } = e, i = n.Children.toArray(r), a = i.find(c);
                    if (a) {
                        let e = a.props.children,
                            r = i.map(t => t !== a ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
                        return (0, s.jsx)(u, { ...o,
                            ref: t,
                            children: n.isValidElement(e) ? n.cloneElement(e, void 0, r) : null
                        })
                    }
                    return (0, s.jsx)(u, { ...o,
                        ref: t,
                        children: r
                    })
                });
            l.displayName = "Slot";
            var u = n.forwardRef((e, t) => {
                let {
                    children: r,
                    ...o
                } = e;
                if (n.isValidElement(r)) {
                    let e = function(e) {
                        let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
                            r = t && "isReactWarning" in t && t.isReactWarning;
                        return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(r);
                    return n.cloneElement(r, { ... function(e, t) {
                            let r = { ...t
                            };
                            for (let n in t) {
                                let o = e[n],
                                    i = t[n];
                                /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                                    i(...e), o(...e)
                                } : o && (r[n] = o) : "style" === n ? r[n] = { ...o,
                                    ...i
                                } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...r
                            }
                        }(o, r.props),
                        ref: t ? i(t, e) : e
                    })
                }
                return n.Children.count(r) > 1 ? n.Children.only(null) : null
            });
            u.displayName = "SlotClone";
            var d = ({
                children: e
            }) => (0, s.jsx)(s.Fragment, {
                children: e
            });

            function c(e) {
                return n.isValidElement(e) && e.type === d
            }
            var f = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let r = n.forwardRef((e, r) => {
                        let {
                            asChild: n,
                            ...o
                        } = e, i = n ? l : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(i, { ...o,
                            ref: r
                        })
                    });
                    return r.displayName = `Primitive.${t}`, { ...e,
                        [t]: r
                    }
                }, {}),
                p = r(46611),
                h = e => {
                    let {
                        present: t,
                        children: r
                    } = e, o = function(e) {
                        var t, r;
                        let [o, i] = n.useState(), a = n.useRef({}), s = n.useRef(e), l = n.useRef("none"), [u, d] = (t = e ? "mounted" : "unmounted", r = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, n.useReducer((e, t) => {
                            let n = r[e][t];
                            return null != n ? n : e
                        }, t));
                        return n.useEffect(() => {
                            let e = m(a.current);
                            l.current = "mounted" === u ? e : "none"
                        }, [u]), (0, p.N)(() => {
                            let t = a.current,
                                r = s.current;
                            if (r !== e) {
                                let n = l.current,
                                    o = m(t);
                                e ? d("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? d("UNMOUNT") : r && n !== o ? d("ANIMATION_OUT") : d("UNMOUNT"), s.current = e
                            }
                        }, [e, d]), (0, p.N)(() => {
                            if (o) {
                                var e;
                                let t;
                                let r = null !== (e = o.ownerDocument.defaultView) && void 0 !== e ? e : window,
                                    n = e => {
                                        let n = m(a.current).includes(e.animationName);
                                        if (e.target === o && n && (d("ANIMATION_END"), !s.current)) {
                                            let e = o.style.animationFillMode;
                                            o.style.animationFillMode = "forwards", t = r.setTimeout(() => {
                                                "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e)
                                            })
                                        }
                                    },
                                    i = e => {
                                        e.target === o && (l.current = m(a.current))
                                    };
                                return o.addEventListener("animationstart", i), o.addEventListener("animationcancel", n), o.addEventListener("animationend", n), () => {
                                    r.clearTimeout(t), o.removeEventListener("animationstart", i), o.removeEventListener("animationcancel", n), o.removeEventListener("animationend", n)
                                }
                            }
                            d("ANIMATION_END")
                        }, [o, d]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(u),
                            ref: n.useCallback(e => {
                                e && (a.current = getComputedStyle(e)), i(e)
                            }, [])
                        }
                    }(t), i = "function" == typeof r ? r({
                        present: o.isPresent
                    }) : n.Children.only(r), s = a(o.ref, function(e) {
                        var t, r;
                        let n = null === (t = Object.getOwnPropertyDescriptor(e.props, "ref")) || void 0 === t ? void 0 : t.get,
                            o = n && "isReactWarning" in n && n.isReactWarning;
                        return o ? e.ref : (o = (n = null === (r = Object.getOwnPropertyDescriptor(e, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in n && n.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(i));
                    return "function" == typeof r || o.isPresent ? n.cloneElement(i, {
                        ref: s
                    }) : null
                };

            function m(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            h.displayName = "Presence";
            var v = r(18166),
                g = r(41524),
                y = r(4256);

            function b(e, t, {
                checkForDefaultPrevented: r = !0
            } = {}) {
                return function(n) {
                    if (e ? .(n), !1 === r || !n.defaultPrevented) return t ? .(n)
                }
            }
            var w = "ScrollArea",
                [x, E] = (0, v.A)(w),
                [S, T] = x(w),
                P = n.forwardRef((e, t) => {
                    let {
                        __scopeScrollArea: r,
                        type: o = "hover",
                        dir: i,
                        scrollHideDelay: l = 600,
                        ...u
                    } = e, [d, c] = n.useState(null), [p, h] = n.useState(null), [m, v] = n.useState(null), [g, b] = n.useState(null), [w, x] = n.useState(null), [E, T] = n.useState(0), [P, k] = n.useState(0), [C, M] = n.useState(!1), [A, j] = n.useState(!1), R = a(t, e => c(e)), D = (0, y.jH)(i);
                    return (0, s.jsx)(S, {
                        scope: r,
                        type: o,
                        dir: D,
                        scrollHideDelay: l,
                        scrollArea: d,
                        viewport: p,
                        onViewportChange: h,
                        content: m,
                        onContentChange: v,
                        scrollbarX: g,
                        onScrollbarXChange: b,
                        scrollbarXEnabled: C,
                        onScrollbarXEnabledChange: M,
                        scrollbarY: w,
                        onScrollbarYChange: x,
                        scrollbarYEnabled: A,
                        onScrollbarYEnabledChange: j,
                        onCornerWidthChange: T,
                        onCornerHeightChange: k,
                        children: (0, s.jsx)(f.div, {
                            dir: D,
                            ...u,
                            ref: R,
                            style: {
                                position: "relative",
                                "--radix-scroll-area-corner-width": E + "px",
                                "--radix-scroll-area-corner-height": P + "px",
                                ...e.style
                            }
                        })
                    })
                });
            P.displayName = w;
            var k = "ScrollAreaViewport",
                C = n.forwardRef((e, t) => {
                    let {
                        __scopeScrollArea: r,
                        children: o,
                        nonce: i,
                        ...l
                    } = e, u = T(k, r), d = a(t, n.useRef(null), u.onViewportChange);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                            },
                            nonce: i
                        }), (0, s.jsx)(f.div, {
                            "data-radix-scroll-area-viewport": "",
                            ...l,
                            ref: d,
                            style: {
                                overflowX: u.scrollbarXEnabled ? "scroll" : "hidden",
                                overflowY: u.scrollbarYEnabled ? "scroll" : "hidden",
                                ...e.style
                            },
                            children: (0, s.jsx)("div", {
                                ref: u.onContentChange,
                                style: {
                                    minWidth: "100%",
                                    display: "table"
                                },
                                children: o
                            })
                        })]
                    })
                });
            C.displayName = k;
            var M = "ScrollAreaScrollbar",
                A = n.forwardRef((e, t) => {
                    let {
                        forceMount: r,
                        ...o
                    } = e, i = T(M, e.__scopeScrollArea), {
                        onScrollbarXEnabledChange: a,
                        onScrollbarYEnabledChange: l
                    } = i, u = "horizontal" === e.orientation;
                    return n.useEffect(() => (u ? a(!0) : l(!0), () => {
                        u ? a(!1) : l(!1)
                    }), [u, a, l]), "hover" === i.type ? (0, s.jsx)(j, { ...o,
                        ref: t,
                        forceMount: r
                    }) : "scroll" === i.type ? (0, s.jsx)(R, { ...o,
                        ref: t,
                        forceMount: r
                    }) : "auto" === i.type ? (0, s.jsx)(D, { ...o,
                        ref: t,
                        forceMount: r
                    }) : "always" === i.type ? (0, s.jsx)(L, { ...o,
                        ref: t
                    }) : null
                });
            A.displayName = M;
            var j = n.forwardRef((e, t) => {
                    let {
                        forceMount: r,
                        ...o
                    } = e, i = T(M, e.__scopeScrollArea), [a, l] = n.useState(!1);
                    return n.useEffect(() => {
                        let e = i.scrollArea,
                            t = 0;
                        if (e) {
                            let r = () => {
                                    window.clearTimeout(t), l(!0)
                                },
                                n = () => {
                                    t = window.setTimeout(() => l(!1), i.scrollHideDelay)
                                };
                            return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
                            }
                        }
                    }, [i.scrollArea, i.scrollHideDelay]), (0, s.jsx)(h, {
                        present: r || a,
                        children: (0, s.jsx)(D, {
                            "data-state": a ? "visible" : "hidden",
                            ...o,
                            ref: t
                        })
                    })
                }),
                R = n.forwardRef((e, t) => {
                    var r, o;
                    let {
                        forceMount: i,
                        ...a
                    } = e, l = T(M, e.__scopeScrollArea), u = "horizontal" === e.orientation, d = Q(() => f("SCROLL_END"), 100), [c, f] = (r = "hidden", o = {
                        hidden: {
                            SCROLL: "scrolling"
                        },
                        scrolling: {
                            SCROLL_END: "idle",
                            POINTER_ENTER: "interacting"
                        },
                        interacting: {
                            SCROLL: "interacting",
                            POINTER_LEAVE: "idle"
                        },
                        idle: {
                            HIDE: "hidden",
                            SCROLL: "scrolling",
                            POINTER_ENTER: "interacting"
                        }
                    }, n.useReducer((e, t) => {
                        let r = o[e][t];
                        return null != r ? r : e
                    }, r));
                    return n.useEffect(() => {
                        if ("idle" === c) {
                            let e = window.setTimeout(() => f("HIDE"), l.scrollHideDelay);
                            return () => window.clearTimeout(e)
                        }
                    }, [c, l.scrollHideDelay, f]), n.useEffect(() => {
                        let e = l.viewport,
                            t = u ? "scrollLeft" : "scrollTop";
                        if (e) {
                            let r = e[t],
                                n = () => {
                                    let n = e[t];
                                    r !== n && (f("SCROLL"), d()), r = n
                                };
                            return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
                        }
                    }, [l.viewport, u, f, d]), (0, s.jsx)(h, {
                        present: i || "hidden" !== c,
                        children: (0, s.jsx)(L, {
                            "data-state": "hidden" === c ? "hidden" : "visible",
                            ...a,
                            ref: t,
                            onPointerEnter: b(e.onPointerEnter, () => f("POINTER_ENTER")),
                            onPointerLeave: b(e.onPointerLeave, () => f("POINTER_LEAVE"))
                        })
                    })
                }),
                D = n.forwardRef((e, t) => {
                    let r = T(M, e.__scopeScrollArea),
                        {
                            forceMount: o,
                            ...i
                        } = e,
                        [a, l] = n.useState(!1),
                        u = "horizontal" === e.orientation,
                        d = Q(() => {
                            if (r.viewport) {
                                let e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                                    t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                                l(u ? e : t)
                            }
                        }, 10);
                    return Z(r.viewport, d), Z(r.content, d), (0, s.jsx)(h, {
                        present: o || a,
                        children: (0, s.jsx)(L, {
                            "data-state": a ? "visible" : "hidden",
                            ...i,
                            ref: t
                        })
                    })
                }),
                L = n.forwardRef((e, t) => {
                    let {
                        orientation: r = "vertical",
                        ...o
                    } = e, i = T(M, e.__scopeScrollArea), a = n.useRef(null), l = n.useRef(0), [u, d] = n.useState({
                        content: 0,
                        viewport: 0,
                        scrollbar: {
                            size: 0,
                            paddingStart: 0,
                            paddingEnd: 0
                        }
                    }), c = G(u.viewport, u.content), f = { ...o,
                        sizes: u,
                        onSizesChange: d,
                        hasThumb: !!(c > 0 && c < 1),
                        onThumbChange: e => a.current = e,
                        onThumbPointerUp: () => l.current = 0,
                        onThumbPointerDown: e => l.current = e
                    };

                    function p(e, t) {
                        return function(e, t, r) {
                            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "ltr",
                                o = K(r),
                                i = t || o / 2,
                                a = r.scrollbar.paddingStart + i,
                                s = r.scrollbar.size - r.scrollbar.paddingEnd - (o - i),
                                l = r.content - r.viewport;
                            return Y([a, s], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
                        }(e, l.current, u, t)
                    }
                    return "horizontal" === r ? (0, s.jsx)(O, { ...f,
                        ref: t,
                        onThumbPositionChange: () => {
                            if (i.viewport && a.current) {
                                let e = X(i.viewport.scrollLeft, u, i.dir);
                                a.current.style.transform = "translate3d(".concat(e, "px, 0, 0)")
                            }
                        },
                        onWheelScroll: e => {
                            i.viewport && (i.viewport.scrollLeft = e)
                        },
                        onDragScroll: e => {
                            i.viewport && (i.viewport.scrollLeft = p(e, i.dir))
                        }
                    }) : "vertical" === r ? (0, s.jsx)(N, { ...f,
                        ref: t,
                        onThumbPositionChange: () => {
                            if (i.viewport && a.current) {
                                let e = X(i.viewport.scrollTop, u);
                                a.current.style.transform = "translate3d(0, ".concat(e, "px, 0)")
                            }
                        },
                        onWheelScroll: e => {
                            i.viewport && (i.viewport.scrollTop = e)
                        },
                        onDragScroll: e => {
                            i.viewport && (i.viewport.scrollTop = p(e))
                        }
                    }) : null
                }),
                O = n.forwardRef((e, t) => {
                    let {
                        sizes: r,
                        onSizesChange: o,
                        ...i
                    } = e, l = T(M, e.__scopeScrollArea), [u, d] = n.useState(), c = n.useRef(null), f = a(t, c, l.onScrollbarXChange);
                    return n.useEffect(() => {
                        c.current && d(getComputedStyle(c.current))
                    }, [c]), (0, s.jsx)(F, {
                        "data-orientation": "horizontal",
                        ...i,
                        ref: f,
                        sizes: r,
                        style: {
                            bottom: 0,
                            left: "rtl" === l.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                            right: "ltr" === l.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                            "--radix-scroll-area-thumb-width": K(r) + "px",
                            ...e.style
                        },
                        onThumbPointerDown: t => e.onThumbPointerDown(t.x),
                        onDragScroll: t => e.onDragScroll(t.x),
                        onWheelScroll: (t, r) => {
                            if (l.viewport) {
                                let n = l.viewport.scrollLeft + t.deltaX;
                                e.onWheelScroll(n),
                                    function(e, t) {
                                        return e > 0 && e < t
                                    }(n, r) && t.preventDefault()
                            }
                        },
                        onResize: () => {
                            c.current && l.viewport && u && o({
                                content: l.viewport.scrollWidth,
                                viewport: l.viewport.offsetWidth,
                                scrollbar: {
                                    size: c.current.clientWidth,
                                    paddingStart: $(u.paddingLeft),
                                    paddingEnd: $(u.paddingRight)
                                }
                            })
                        }
                    })
                }),
                N = n.forwardRef((e, t) => {
                    let {
                        sizes: r,
                        onSizesChange: o,
                        ...i
                    } = e, l = T(M, e.__scopeScrollArea), [u, d] = n.useState(), c = n.useRef(null), f = a(t, c, l.onScrollbarYChange);
                    return n.useEffect(() => {
                        c.current && d(getComputedStyle(c.current))
                    }, [c]), (0, s.jsx)(F, {
                        "data-orientation": "vertical",
                        ...i,
                        ref: f,
                        sizes: r,
                        style: {
                            top: 0,
                            right: "ltr" === l.dir ? 0 : void 0,
                            left: "rtl" === l.dir ? 0 : void 0,
                            bottom: "var(--radix-scroll-area-corner-height)",
                            "--radix-scroll-area-thumb-height": K(r) + "px",
                            ...e.style
                        },
                        onThumbPointerDown: t => e.onThumbPointerDown(t.y),
                        onDragScroll: t => e.onDragScroll(t.y),
                        onWheelScroll: (t, r) => {
                            if (l.viewport) {
                                let n = l.viewport.scrollTop + t.deltaY;
                                e.onWheelScroll(n),
                                    function(e, t) {
                                        return e > 0 && e < t
                                    }(n, r) && t.preventDefault()
                            }
                        },
                        onResize: () => {
                            c.current && l.viewport && u && o({
                                content: l.viewport.scrollHeight,
                                viewport: l.viewport.offsetHeight,
                                scrollbar: {
                                    size: c.current.clientHeight,
                                    paddingStart: $(u.paddingTop),
                                    paddingEnd: $(u.paddingBottom)
                                }
                            })
                        }
                    })
                }),
                [_, I] = x(M),
                F = n.forwardRef((e, t) => {
                    let {
                        __scopeScrollArea: r,
                        sizes: o,
                        hasThumb: i,
                        onThumbChange: l,
                        onThumbPointerUp: u,
                        onThumbPointerDown: d,
                        onThumbPositionChange: c,
                        onDragScroll: p,
                        onWheelScroll: h,
                        onResize: m,
                        ...v
                    } = e, y = T(M, r), [w, x] = n.useState(null), E = a(t, e => x(e)), S = n.useRef(null), P = n.useRef(""), k = y.viewport, C = o.content - o.viewport, A = (0, g.c)(h), j = (0, g.c)(c), R = Q(m, 10);

                    function D(e) {
                        S.current && p({
                            x: e.clientX - S.current.left,
                            y: e.clientY - S.current.top
                        })
                    }
                    return n.useEffect(() => {
                        let e = e => {
                            let t = e.target;
                            (null == w ? void 0 : w.contains(t)) && A(e, C)
                        };
                        return document.addEventListener("wheel", e, {
                            passive: !1
                        }), () => document.removeEventListener("wheel", e, {
                            passive: !1
                        })
                    }, [k, w, C, A]), n.useEffect(j, [o, j]), Z(w, R), Z(y.content, R), (0, s.jsx)(_, {
                        scope: r,
                        scrollbar: w,
                        hasThumb: i,
                        onThumbChange: (0, g.c)(l),
                        onThumbPointerUp: (0, g.c)(u),
                        onThumbPositionChange: j,
                        onThumbPointerDown: (0, g.c)(d),
                        children: (0, s.jsx)(f.div, { ...v,
                            ref: E,
                            style: {
                                position: "absolute",
                                ...v.style
                            },
                            onPointerDown: b(e.onPointerDown, e => {
                                0 === e.button && (e.target.setPointerCapture(e.pointerId), S.current = w.getBoundingClientRect(), P.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", y.viewport && (y.viewport.style.scrollBehavior = "auto"), D(e))
                            }),
                            onPointerMove: b(e.onPointerMove, D),
                            onPointerUp: b(e.onPointerUp, e => {
                                let t = e.target;
                                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = P.current, y.viewport && (y.viewport.style.scrollBehavior = ""), S.current = null
                            })
                        })
                    })
                }),
                V = "ScrollAreaThumb",
                B = n.forwardRef((e, t) => {
                    let {
                        forceMount: r,
                        ...n
                    } = e, o = I(V, e.__scopeScrollArea);
                    return (0, s.jsx)(h, {
                        present: r || o.hasThumb,
                        children: (0, s.jsx)(z, {
                            ref: t,
                            ...n
                        })
                    })
                }),
                z = n.forwardRef((e, t) => {
                    let {
                        __scopeScrollArea: r,
                        style: o,
                        ...i
                    } = e, l = T(V, r), u = I(V, r), {
                        onThumbPositionChange: d
                    } = u, c = a(t, e => u.onThumbChange(e)), p = n.useRef(void 0), h = Q(() => {
                        p.current && (p.current(), p.current = void 0)
                    }, 100);
                    return n.useEffect(() => {
                        let e = l.viewport;
                        if (e) {
                            let t = () => {
                                if (h(), !p.current) {
                                    let t = q(e, d);
                                    p.current = t, d()
                                }
                            };
                            return d(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
                        }
                    }, [l.viewport, h, d]), (0, s.jsx)(f.div, {
                        "data-state": u.hasThumb ? "visible" : "hidden",
                        ...i,
                        ref: c,
                        style: {
                            width: "var(--radix-scroll-area-thumb-width)",
                            height: "var(--radix-scroll-area-thumb-height)",
                            ...o
                        },
                        onPointerDownCapture: b(e.onPointerDownCapture, e => {
                            let t = e.target.getBoundingClientRect(),
                                r = e.clientX - t.left,
                                n = e.clientY - t.top;
                            u.onThumbPointerDown({
                                x: r,
                                y: n
                            })
                        }),
                        onPointerUp: b(e.onPointerUp, u.onThumbPointerUp)
                    })
                });
            B.displayName = V;
            var W = "ScrollAreaCorner",
                U = n.forwardRef((e, t) => {
                    let r = T(W, e.__scopeScrollArea),
                        n = !!(r.scrollbarX && r.scrollbarY);
                    return "scroll" !== r.type && n ? (0, s.jsx)(H, { ...e,
                        ref: t
                    }) : null
                });
            U.displayName = W;
            var H = n.forwardRef((e, t) => {
                let {
                    __scopeScrollArea: r,
                    ...o
                } = e, i = T(W, r), [a, l] = n.useState(0), [u, d] = n.useState(0), c = !!(a && u);
                return Z(i.scrollbarX, () => {
                    var e;
                    let t = (null === (e = i.scrollbarX) || void 0 === e ? void 0 : e.offsetHeight) || 0;
                    i.onCornerHeightChange(t), d(t)
                }), Z(i.scrollbarY, () => {
                    var e;
                    let t = (null === (e = i.scrollbarY) || void 0 === e ? void 0 : e.offsetWidth) || 0;
                    i.onCornerWidthChange(t), l(t)
                }), c ? (0, s.jsx)(f.div, { ...o,
                    ref: t,
                    style: {
                        width: a,
                        height: u,
                        position: "absolute",
                        right: "ltr" === i.dir ? 0 : void 0,
                        left: "rtl" === i.dir ? 0 : void 0,
                        bottom: 0,
                        ...e.style
                    }
                }) : null
            });

            function $(e) {
                return e ? parseInt(e, 10) : 0
            }

            function G(e, t) {
                let r = e / t;
                return isNaN(r) ? 0 : r
            }

            function K(e) {
                let t = G(e.viewport, e.content),
                    r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
                return Math.max((e.scrollbar.size - r) * t, 18)
            }

            function X(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
                    n = K(t),
                    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
                    i = t.scrollbar.size - o,
                    a = t.content - t.viewport,
                    s = function(e, [t, r]) {
                        return Math.min(r, Math.max(t, e))
                    }(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
                return Y([0, a], [0, i - n])(s)
            }

            function Y(e, t) {
                return r => {
                    if (e[0] === e[1] || t[0] === t[1]) return t[0];
                    let n = (t[1] - t[0]) / (e[1] - e[0]);
                    return t[0] + n * (r - e[0])
                }
            }
            var q = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                    r = {
                        left: e.scrollLeft,
                        top: e.scrollTop
                    },
                    n = 0;
                return ! function o() {
                    let i = {
                            left: e.scrollLeft,
                            top: e.scrollTop
                        },
                        a = r.left !== i.left,
                        s = r.top !== i.top;
                    (a || s) && t(), r = i, n = window.requestAnimationFrame(o)
                }(), () => window.cancelAnimationFrame(n)
            };

            function Q(e, t) {
                let r = (0, g.c)(e),
                    o = n.useRef(0);
                return n.useEffect(() => () => window.clearTimeout(o.current), []), n.useCallback(() => {
                    window.clearTimeout(o.current), o.current = window.setTimeout(r, t)
                }, [r, t])
            }

            function Z(e, t) {
                let r = (0, g.c)(t);
                (0, p.N)(() => {
                    let t = 0;
                    if (e) {
                        let n = new ResizeObserver(() => {
                            cancelAnimationFrame(t), t = window.requestAnimationFrame(r)
                        });
                        return n.observe(e), () => {
                            window.cancelAnimationFrame(t), n.unobserve(e)
                        }
                    }
                }, [e, r])
            }
            var J = P,
                ee = C,
                et = U
        },
        87421: (e, t, r) => {
            "use strict";
            r.d(t, {
                b: () => h
            });
            var n = r(12115);

            function o(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }
            r(47650);
            var i = r(95155),
                a = n.forwardRef((e, t) => {
                    let {
                        children: r,
                        ...o
                    } = e, a = n.Children.toArray(r), l = a.find(u);
                    if (l) {
                        let e = l.props.children,
                            r = a.map(t => t !== l ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
                        return (0, i.jsx)(s, { ...o,
                            ref: t,
                            children: n.isValidElement(e) ? n.cloneElement(e, void 0, r) : null
                        })
                    }
                    return (0, i.jsx)(s, { ...o,
                        ref: t,
                        children: r
                    })
                });
            a.displayName = "Slot";
            var s = n.forwardRef((e, t) => {
                let {
                    children: r,
                    ...i
                } = e;
                if (n.isValidElement(r)) {
                    let e = function(e) {
                        let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
                            r = t && "isReactWarning" in t && t.isReactWarning;
                        return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(r);
                    return n.cloneElement(r, { ... function(e, t) {
                            let r = { ...t
                            };
                            for (let n in t) {
                                let o = e[n],
                                    i = t[n];
                                /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                                    i(...e), o(...e)
                                } : o && (r[n] = o) : "style" === n ? r[n] = { ...o,
                                    ...i
                                } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...r
                            }
                        }(i, r.props),
                        ref: t ? function(...e) {
                            return t => {
                                let r = !1,
                                    n = e.map(e => {
                                        let n = o(e, t);
                                        return r || "function" != typeof n || (r = !0), n
                                    });
                                if (r) return () => {
                                    for (let t = 0; t < n.length; t++) {
                                        let r = n[t];
                                        "function" == typeof r ? r() : o(e[t], null)
                                    }
                                }
                            }
                        }(t, e) : e
                    })
                }
                return n.Children.count(r) > 1 ? n.Children.only(null) : null
            });
            s.displayName = "SlotClone";
            var l = ({
                children: e
            }) => (0, i.jsx)(i.Fragment, {
                children: e
            });

            function u(e) {
                return n.isValidElement(e) && e.type === l
            }
            var d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let r = n.forwardRef((e, r) => {
                        let {
                            asChild: n,
                            ...o
                        } = e, s = n ? a : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, { ...o,
                            ref: r
                        })
                    });
                    return r.displayName = `Primitive.${t}`, { ...e,
                        [t]: r
                    }
                }, {}),
                c = "horizontal",
                f = ["horizontal", "vertical"],
                p = n.forwardRef((e, t) => {
                    let {
                        decorative: r,
                        orientation: n = c,
                        ...o
                    } = e, a = f.includes(n) ? n : c;
                    return (0, i.jsx)(d.div, {
                        "data-orientation": a,
                        ...r ? {
                            role: "none"
                        } : {
                            "aria-orientation": "vertical" === a ? a : void 0,
                            role: "separator"
                        },
                        ...o,
                        ref: t
                    })
                });
            p.displayName = "Separator";
            var h = p
        },
        12317: (e, t, r) => {
            "use strict";
            r.d(t, {
                DX: () => a
            });
            var n = r(12115),
                o = r(88068),
                i = r(95155),
                a = n.forwardRef((e, t) => {
                    let {
                        children: r,
                        ...o
                    } = e, a = n.Children.toArray(r), l = a.find(u);
                    if (l) {
                        let e = l.props.children,
                            r = a.map(t => t !== l ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
                        return (0, i.jsx)(s, { ...o,
                            ref: t,
                            children: n.isValidElement(e) ? n.cloneElement(e, void 0, r) : null
                        })
                    }
                    return (0, i.jsx)(s, { ...o,
                        ref: t,
                        children: r
                    })
                });
            a.displayName = "Slot";
            var s = n.forwardRef((e, t) => {
                let {
                    children: r,
                    ...i
                } = e;
                if (n.isValidElement(r)) {
                    let e = function(e) {
                        let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
                            r = t && "isReactWarning" in t && t.isReactWarning;
                        return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(r);
                    return n.cloneElement(r, { ... function(e, t) {
                            let r = { ...t
                            };
                            for (let n in t) {
                                let o = e[n],
                                    i = t[n];
                                /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                                    i(...e), o(...e)
                                } : o && (r[n] = o) : "style" === n ? r[n] = { ...o,
                                    ...i
                                } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...r
                            }
                        }(i, r.props),
                        ref: t ? (0, o.t)(t, e) : e
                    })
                }
                return n.Children.count(r) > 1 ? n.Children.only(null) : null
            });
            s.displayName = "SlotClone";
            var l = ({
                children: e
            }) => (0, i.jsx)(i.Fragment, {
                children: e
            });

            function u(e) {
                return n.isValidElement(e) && e.type === l
            }
        },
        82920: (e, t, r) => {
            "use strict";
            r.d(t, {
                bL: () => x,
                zi: () => E
            });
            var n = r(12115),
                o = r(93610),
                i = r(88068),
                a = r(18166),
                s = r(1488),
                l = r(7510),
                u = r(23360),
                d = r(95155),
                c = "Switch",
                [f, p] = (0, a.A)(c),
                [h, m] = f(c),
                v = n.forwardRef((e, t) => {
                    let {
                        __scopeSwitch: r,
                        name: a,
                        checked: l,
                        defaultChecked: c,
                        required: f,
                        disabled: p,
                        value: m = "on",
                        onCheckedChange: v,
                        form: g,
                        ...y
                    } = e, [x, E] = n.useState(null), S = (0, i.s)(t, e => E(e)), T = n.useRef(!1), P = !x || g || !!x.closest("form"), [k = !1, C] = (0, s.i)({
                        prop: l,
                        defaultProp: c,
                        onChange: v
                    });
                    return (0, d.jsxs)(h, {
                        scope: r,
                        checked: k,
                        disabled: p,
                        children: [(0, d.jsx)(u.sG.button, {
                            type: "button",
                            role: "switch",
                            "aria-checked": k,
                            "aria-required": f,
                            "data-state": w(k),
                            "data-disabled": p ? "" : void 0,
                            disabled: p,
                            value: m,
                            ...y,
                            ref: S,
                            onClick: (0, o.m)(e.onClick, e => {
                                C(e => !e), P && (T.current = e.isPropagationStopped(), T.current || e.stopPropagation())
                            })
                        }), P && (0, d.jsx)(b, {
                            control: x,
                            bubbles: !T.current,
                            name: a,
                            value: m,
                            checked: k,
                            required: f,
                            disabled: p,
                            form: g,
                            style: {
                                transform: "translateX(-100%)"
                            }
                        })]
                    })
                });
            v.displayName = c;
            var g = "SwitchThumb",
                y = n.forwardRef((e, t) => {
                    let {
                        __scopeSwitch: r,
                        ...n
                    } = e, o = m(g, r);
                    return (0, d.jsx)(u.sG.span, {
                        "data-state": w(o.checked),
                        "data-disabled": o.disabled ? "" : void 0,
                        ...n,
                        ref: t
                    })
                });
            y.displayName = g;
            var b = e => {
                let {
                    control: t,
                    checked: r,
                    bubbles: o = !0,
                    ...i
                } = e, a = n.useRef(null), s = function(e) {
                    let t = n.useRef({
                        value: e,
                        previous: e
                    });
                    return n.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
                }(r), u = (0, l.X)(t);
                return n.useEffect(() => {
                    let e = a.current,
                        t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                    if (s !== r && t) {
                        let n = new Event("click", {
                            bubbles: o
                        });
                        t.call(e, r), e.dispatchEvent(n)
                    }
                }, [s, r, o]), (0, d.jsx)("input", {
                    type: "checkbox",
                    "aria-hidden": !0,
                    defaultChecked: r,
                    ...i,
                    tabIndex: -1,
                    ref: a,
                    style: { ...e.style,
                        ...u,
                        position: "absolute",
                        pointerEvents: "none",
                        opacity: 0,
                        margin: 0
                    }
                })
            };

            function w(e) {
                return e ? "checked" : "unchecked"
            }
            var x = v,
                E = y
        },
        41524: (e, t, r) => {
            "use strict";
            r.d(t, {
                c: () => o
            });
            var n = r(12115);

            function o(e) {
                let t = n.useRef(e);
                return n.useEffect(() => {
                    t.current = e
                }), n.useMemo(() => (...e) => t.current ? .(...e), [])
            }
        },
        1488: (e, t, r) => {
            "use strict";
            r.d(t, {
                i: () => i
            });
            var n = r(12115),
                o = r(41524);

            function i({
                prop: e,
                defaultProp: t,
                onChange: r = () => {}
            }) {
                let [i, a] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let r = n.useState(e),
                        [i] = r,
                        a = n.useRef(i),
                        s = (0, o.c)(t);
                    return n.useEffect(() => {
                        a.current !== i && (s(i), a.current = i)
                    }, [i, a, s]), r
                }({
                    defaultProp: t,
                    onChange: r
                }), s = void 0 !== e, l = s ? e : i, u = (0, o.c)(r);
                return [l, n.useCallback(t => {
                    if (s) {
                        let r = "function" == typeof t ? t(e) : t;
                        r !== e && u(r)
                    } else a(t)
                }, [s, e, a, u])]
            }
        },
        46611: (e, t, r) => {
            "use strict";
            r.d(t, {
                N: () => o
            });
            var n = r(12115),
                o = globalThis ? .document ? n.useLayoutEffect : () => {}
        },
        7510: (e, t, r) => {
            "use strict";
            r.d(t, {
                X: () => i
            });
            var n = r(12115),
                o = r(46611);

            function i(e) {
                let [t, r] = n.useState(void 0);
                return (0, o.N)(() => {
                    if (e) {
                        r({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                            let n, o;
                            if (!Array.isArray(t) || !t.length) return;
                            let i = t[0];
                            if ("borderBoxSize" in i) {
                                let e = i.borderBoxSize,
                                    t = Array.isArray(e) ? e[0] : e;
                                n = t.inlineSize, o = t.blockSize
                            } else n = e.offsetWidth, o = e.offsetHeight;
                            r({
                                width: n,
                                height: o
                            })
                        });
                        return t.observe(e, {
                            box: "border-box"
                        }), () => t.unobserve(e)
                    }
                    r(void 0)
                }, [e]), t
            }
        },
        31027: (e, t, r) => {
            "use strict";
            r.d(t, {
                F: () => a
            });
            var n = r(43463);
            let o = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
                i = n.$,
                a = (e, t) => r => {
                    var n;
                    if ((null == t ? void 0 : t.variants) == null) return i(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
                    let {
                        variants: a,
                        defaultVariants: s
                    } = t, l = Object.keys(a).map(e => {
                        let t = null == r ? void 0 : r[e],
                            n = null == s ? void 0 : s[e];
                        if (null === t) return null;
                        let i = o(t) || o(n);
                        return a[e][i]
                    }), u = r && Object.entries(r).reduce((e, t) => {
                        let [r, n] = t;
                        return void 0 === n || (e[r] = n), e
                    }, {});
                    return i(e, l, null == t ? void 0 : null === (n = t.compoundVariants) || void 0 === n ? void 0 : n.reduce((e, t) => {
                        let {
                            class: r,
                            className: n,
                            ...o
                        } = t;
                        return Object.entries(o).every(e => {
                            let [t, r] = e;
                            return Array.isArray(r) ? r.includes({ ...s,
                                ...u
                            }[t]) : ({ ...s,
                                ...u
                            })[t] === r
                        }) ? [...e, r, n] : e
                    }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
                }
        },
        1649: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => g
            });
            let n = Symbol.for("constructDateFrom");

            function o(e, t) {
                return "function" == typeof e ? e(t) : e && "object" == typeof e && n in e ? e[n](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
            }
            let i = {
                lessThanXSeconds: {
                    one: "less than a second",
                    other: "less than {{count}} seconds"
                },
                xSeconds: {
                    one: "1 second",
                    other: "{{count}} seconds"
                },
                halfAMinute: "half a minute",
                lessThanXMinutes: {
                    one: "less than a minute",
                    other: "less than {{count}} minutes"
                },
                xMinutes: {
                    one: "1 minute",
                    other: "{{count}} minutes"
                },
                aboutXHours: {
                    one: "about 1 hour",
                    other: "about {{count}} hours"
                },
                xHours: {
                    one: "1 hour",
                    other: "{{count}} hours"
                },
                xDays: {
                    one: "1 day",
                    other: "{{count}} days"
                },
                aboutXWeeks: {
                    one: "about 1 week",
                    other: "about {{count}} weeks"
                },
                xWeeks: {
                    one: "1 week",
                    other: "{{count}} weeks"
                },
                aboutXMonths: {
                    one: "about 1 month",
                    other: "about {{count}} months"
                },
                xMonths: {
                    one: "1 month",
                    other: "{{count}} months"
                },
                aboutXYears: {
                    one: "about 1 year",
                    other: "about {{count}} years"
                },
                xYears: {
                    one: "1 year",
                    other: "{{count}} years"
                },
                overXYears: {
                    one: "over 1 year",
                    other: "over {{count}} years"
                },
                almostXYears: {
                    one: "almost 1 year",
                    other: "almost {{count}} years"
                }
            };

            function a(e) {
                return function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = t.width ? String(t.width) : e.defaultWidth;
                    return e.formats[r] || e.formats[e.defaultWidth]
                }
            }
            let s = {
                    date: a({
                        formats: {
                            full: "EEEE, MMMM do, y",
                            long: "MMMM do, y",
                            medium: "MMM d, y",
                            short: "MM/dd/yyyy"
                        },
                        defaultWidth: "full"
                    }),
                    time: a({
                        formats: {
                            full: "h:mm:ss a zzzz",
                            long: "h:mm:ss a z",
                            medium: "h:mm:ss a",
                            short: "h:mm a"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: a({
                        formats: {
                            full: "{{date}} 'at' {{time}}",
                            long: "{{date}} 'at' {{time}}",
                            medium: "{{date}}, {{time}}",
                            short: "{{date}}, {{time}}"
                        },
                        defaultWidth: "full"
                    })
                },
                l = {
                    lastWeek: "'last' eeee 'at' p",
                    yesterday: "'yesterday at' p",
                    today: "'today at' p",
                    tomorrow: "'tomorrow at' p",
                    nextWeek: "eeee 'at' p",
                    other: "P"
                };

            function u(e) {
                return (t, r) => {
                    let n;
                    if ("formatting" === ((null == r ? void 0 : r.context) ? String(r.context) : "standalone") && e.formattingValues) {
                        let t = e.defaultFormattingWidth || e.defaultWidth,
                            o = (null == r ? void 0 : r.width) ? String(r.width) : t;
                        n = e.formattingValues[o] || e.formattingValues[t]
                    } else {
                        let t = e.defaultWidth,
                            o = (null == r ? void 0 : r.width) ? String(r.width) : e.defaultWidth;
                        n = e.values[o] || e.values[t]
                    }
                    return n[e.argumentCallback ? e.argumentCallback(t) : t]
                }
            }

            function d(e) {
                return function(t) {
                    let r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = n.width,
                        i = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth],
                        a = t.match(i);
                    if (!a) return null;
                    let s = a[0],
                        l = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth],
                        u = Array.isArray(l) ? function(e, t) {
                            for (let r = 0; r < e.length; r++)
                                if (t(e[r])) return r
                        }(l, e => e.test(s)) : function(e, t) {
                            for (let r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r])) return r
                        }(l, e => e.test(s));
                    return r = e.valueCallback ? e.valueCallback(u) : u, {
                        value: r = n.valueCallback ? n.valueCallback(r) : r,
                        rest: t.slice(s.length)
                    }
                }
            }
            let c = {
                    code: "en-US",
                    formatDistance: (e, t, r) => {
                        let n;
                        let o = i[e];
                        return (n = "string" == typeof o ? o : 1 === t ? o.one : o.other.replace("{{count}}", t.toString()), null == r ? void 0 : r.addSuffix) ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n
                    },
                    formatLong: s,
                    formatRelative: (e, t, r, n) => l[e],
                    localize: {
                        ordinalNumber: (e, t) => {
                            let r = Number(e),
                                n = r % 100;
                            if (n > 20 || n < 10) switch (n % 10) {
                                case 1:
                                    return r + "st";
                                case 2:
                                    return r + "nd";
                                case 3:
                                    return r + "rd"
                            }
                            return r + "th"
                        },
                        era: u({
                            values: {
                                narrow: ["B", "A"],
                                abbreviated: ["BC", "AD"],
                                wide: ["Before Christ", "Anno Domini"]
                            },
                            defaultWidth: "wide"
                        }),
                        quarter: u({
                            values: {
                                narrow: ["1", "2", "3", "4"],
                                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                                wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
                            },
                            defaultWidth: "wide",
                            argumentCallback: e => e - 1
                        }),
                        month: u({
                            values: {
                                narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                                abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                            },
                            defaultWidth: "wide"
                        }),
                        day: u({
                            values: {
                                narrow: ["S", "M", "T", "W", "T", "F", "S"],
                                short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                                abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                            },
                            defaultWidth: "wide"
                        }),
                        dayPeriod: u({
                            values: {
                                narrow: {
                                    am: "a",
                                    pm: "p",
                                    midnight: "mi",
                                    noon: "n",
                                    morning: "morning",
                                    afternoon: "afternoon",
                                    evening: "evening",
                                    night: "night"
                                },
                                abbreviated: {
                                    am: "AM",
                                    pm: "PM",
                                    midnight: "midnight",
                                    noon: "noon",
                                    morning: "morning",
                                    afternoon: "afternoon",
                                    evening: "evening",
                                    night: "night"
                                },
                                wide: {
                                    am: "a.m.",
                                    pm: "p.m.",
                                    midnight: "midnight",
                                    noon: "noon",
                                    morning: "morning",
                                    afternoon: "afternoon",
                                    evening: "evening",
                                    night: "night"
                                }
                            },
                            defaultWidth: "wide",
                            formattingValues: {
                                narrow: {
                                    am: "a",
                                    pm: "p",
                                    midnight: "mi",
                                    noon: "n",
                                    morning: "in the morning",
                                    afternoon: "in the afternoon",
                                    evening: "in the evening",
                                    night: "at night"
                                },
                                abbreviated: {
                                    am: "AM",
                                    pm: "PM",
                                    midnight: "midnight",
                                    noon: "noon",
                                    morning: "in the morning",
                                    afternoon: "in the afternoon",
                                    evening: "in the evening",
                                    night: "at night"
                                },
                                wide: {
                                    am: "a.m.",
                                    pm: "p.m.",
                                    midnight: "midnight",
                                    noon: "noon",
                                    morning: "in the morning",
                                    afternoon: "in the afternoon",
                                    evening: "in the evening",
                                    night: "at night"
                                }
                            },
                            defaultFormattingWidth: "wide"
                        })
                    },
                    match: {
                        ordinalNumber: function(e) {
                            return function(t) {
                                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = t.match(e.matchPattern);
                                if (!n) return null;
                                let o = n[0],
                                    i = t.match(e.parsePattern);
                                if (!i) return null;
                                let a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
                                return {
                                    value: a = r.valueCallback ? r.valueCallback(a) : a,
                                    rest: t.slice(o.length)
                                }
                            }
                        }({
                            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                            parsePattern: /\d+/i,
                            valueCallback: e => parseInt(e, 10)
                        }),
                        era: d({
                            matchPatterns: {
                                narrow: /^(b|a)/i,
                                abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                                wide: /^(before christ|before common era|anno domini|common era)/i
                            },
                            defaultMatchWidth: "wide",
                            parsePatterns: {
                                any: [/^b/i, /^(a|c)/i]
                            },
                            defaultParseWidth: "any"
                        }),
                        quarter: d({
                            matchPatterns: {
                                narrow: /^[1234]/i,
                                abbreviated: /^q[1234]/i,
                                wide: /^[1234](th|st|nd|rd)? quarter/i
                            },
                            defaultMatchWidth: "wide",
                            parsePatterns: {
                                any: [/1/i, /2/i, /3/i, /4/i]
                            },
                            defaultParseWidth: "any",
                            valueCallback: e => e + 1
                        }),
                        month: d({
                            matchPatterns: {
                                narrow: /^[jfmasond]/i,
                                abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                            },
                            defaultMatchWidth: "wide",
                            parsePatterns: {
                                narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                                any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                            },
                            defaultParseWidth: "any"
                        }),
                        day: d({
                            matchPatterns: {
                                narrow: /^[smtwf]/i,
                                short: /^(su|mo|tu|we|th|fr|sa)/i,
                                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                            },
                            defaultMatchWidth: "wide",
                            parsePatterns: {
                                narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                                any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
                            },
                            defaultParseWidth: "any"
                        }),
                        dayPeriod: d({
                            matchPatterns: {
                                narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                            },
                            defaultMatchWidth: "any",
                            parsePatterns: {
                                any: {
                                    am: /^a/i,
                                    pm: /^p/i,
                                    midnight: /^mi/i,
                                    noon: /^no/i,
                                    morning: /morning/i,
                                    afternoon: /afternoon/i,
                                    evening: /evening/i,
                                    night: /night/i
                                }
                            },
                            defaultParseWidth: "any"
                        })
                    },
                    options: {
                        weekStartsOn: 0,
                        firstWeekContainsDate: 1
                    }
                },
                f = {};

            function p(e, t) {
                return o(t || e, e)
            }

            function h(e) {
                let t = p(e),
                    r = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
                return r.setUTCFullYear(t.getFullYear()), +e - +r
            }

            function m(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                let i = o.bind(null, e || r.find(e => "object" == typeof e));
                return r.map(i)
            }

            function v(e, t) {
                let r = +p(e) - +p(t);
                return r < 0 ? -1 : r > 0 ? 1 : r
            }

            function g(e, t) {
                return function(e, t, r) {
                    var n, o, i, a, s, l;
                    let u;
                    let d = null !== (o = null !== (n = null == r ? void 0 : r.locale) && void 0 !== n ? n : f.locale) && void 0 !== o ? o : c,
                        g = v(e, t);
                    if (isNaN(g)) throw RangeError("Invalid time value");
                    let y = Object.assign({}, r, {
                            addSuffix: null == r ? void 0 : r.addSuffix,
                            comparison: g
                        }),
                        [b, w] = m(null == r ? void 0 : r.in, ...g > 0 ? [t, e] : [e, t]),
                        x = (i = w, a = b, (l = null == void 0 ? void 0 : (void 0).roundingMethod, e => {
                            let t = (l ? Math[l] : Math.trunc)(e);
                            return 0 === t ? 0 : t
                        })((+p(i) - +p(a)) / 1e3)),
                        E = Math.round((x - (h(w) - h(b)) / 1e3) / 60);
                    if (E < 2) {
                        if (null == r ? void 0 : r.includeSeconds) {
                            if (x < 5) return d.formatDistance("lessThanXSeconds", 5, y);
                            if (x < 10) return d.formatDistance("lessThanXSeconds", 10, y);
                            if (x < 20) return d.formatDistance("lessThanXSeconds", 20, y);
                            if (x < 40) return d.formatDistance("halfAMinute", 0, y);
                            else if (x < 60) return d.formatDistance("lessThanXMinutes", 1, y);
                            else return d.formatDistance("xMinutes", 1, y)
                        }
                        return 0 === E ? d.formatDistance("lessThanXMinutes", 1, y) : d.formatDistance("xMinutes", E, y)
                    }
                    if (E < 45) return d.formatDistance("xMinutes", E, y);
                    if (E < 90) return d.formatDistance("aboutXHours", 1, y);
                    if (E < 1440) {
                        let e = Math.round(E / 60);
                        return d.formatDistance("aboutXHours", e, y)
                    }
                    if (E < 2520) return d.formatDistance("xDays", 1, y);
                    if (E < 43200) {
                        let e = Math.round(E / 1440);
                        return d.formatDistance("xDays", e, y)
                    }
                    if (E < 86400) return u = Math.round(E / 43200), d.formatDistance("aboutXMonths", u, y);
                    if ((u = function(e, t, r) {
                            let [n, o, i] = m(void 0, e, e, t), a = v(o, i), s = Math.abs(function(e, t, r) {
                                let [n, o] = m(void 0, e, t);
                                return 12 * (n.getFullYear() - o.getFullYear()) + (n.getMonth() - o.getMonth())
                            }(o, i));
                            if (s < 1) return 0;
                            1 === o.getMonth() && o.getDate() > 27 && o.setDate(30), o.setMonth(o.getMonth() - a * s);
                            let l = v(o, i) === -a;
                            (function(e, t) {
                                let r = p(e, void 0);
                                return + function(e, t) {
                                    let r = p(e, null == t ? void 0 : t.in);
                                    return r.setHours(23, 59, 59, 999), r
                                }(r, void 0) == + function(e, t) {
                                    let r = p(e, null == t ? void 0 : t.in),
                                        n = r.getMonth();
                                    return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(23, 59, 59, 999), r
                                }(r, void 0)
                            })(n) && 1 === s && 1 === v(n, i) && (l = !1);
                            let u = a * (s - +l);
                            return 0 === u ? 0 : u
                        }(w, b)) < 12) {
                        let e = Math.round(E / 43200);
                        return d.formatDistance("xMonths", e, y)
                    } {
                        let e = u % 12,
                            t = Math.trunc(u / 12);
                        return e < 3 ? d.formatDistance("aboutXYears", t, y) : e < 9 ? d.formatDistance("overXYears", t, y) : d.formatDistance("almostXYears", t + 1, y)
                    }
                }(e, o(e, Date.now()), t)
            }
        },
        35615: (e, t, r) => {
            "use strict";
            r.d(t, {
                f: () => ex
            });
            var n = r(14302),
                o = r(31371);
            let i = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                a = e => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                s = {
                    type: "keyframes",
                    duration: .8
                },
                l = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                u = (e, {
                    keyframes: t
                }) => t.length > 2 ? s : o.f.has(e) ? e.startsWith("scale") ? a(t[1]) : i : l;
            var d = r(59193),
                c = r(93903);
            let f = {
                    current: !1
                },
                p = e => null !== e;

            function h(e, {
                repeat: t,
                repeatType: r = "loop"
            }, n) {
                let o = e.filter(p),
                    i = t && "loop" !== r && t % 2 == 1 ? 0 : o.length - 1;
                return i && void 0 !== n ? n : o[i]
            }
            var m = r(3307),
                v = r(26054);
            let g = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;

            function y(e, t, r, n) {
                if (e === t && r === n) return v.l;
                let o = t => (function(e, t, r, n, o) {
                    let i, a;
                    let s = 0;
                    do(i = g(a = t + (r - t) / 2, n, o) - e) > 0 ? r = a : t = a; while (Math.abs(i) > 1e-7 && ++s < 12);
                    return a
                })(t, 0, 1, e, r);
                return e => 0 === e || 1 === e ? e : g(o(e), t, n)
            }
            var b = r(35290),
                w = r(94641);
            let x = y(.33, 1.53, .69, .99),
                E = (0, w.G)(x),
                S = (0, b.V)(E),
                T = e => (e *= 2) < 1 ? .5 * E(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)));
            var P = r(26575),
                k = r(8216);

            function C(e) {
                return "function" == typeof e
            }
            var M = r(79125),
                A = r(22368),
                j = r(45107),
                R = r(55254);
            let D = (e, t) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (R.f.test(e) || "0" === e) && !e.startsWith("url("));
            class L {
                constructor({
                    autoplay: e = !0,
                    delay: t = 0,
                    type: r = "keyframes",
                    repeat: n = 0,
                    repeatDelay: o = 0,
                    repeatType: i = "loop",
                    ...a
                }) {
                    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = M.k.now(), this.options = {
                        autoplay: e,
                        delay: t,
                        type: r,
                        repeat: n,
                        repeatDelay: o,
                        repeatType: i,
                        ...a
                    }, this.updateFinishedPromise()
                }
                calcStartTime() {
                    return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (0, A.q)(), this._resolved
                }
                onKeyframesResolved(e, t) {
                    this.resolvedAt = M.k.now(), this.hasAttemptedResolve = !0;
                    let {
                        name: r,
                        type: n,
                        velocity: o,
                        delay: i,
                        onComplete: a,
                        onUpdate: s,
                        isGenerator: l
                    } = this.options;
                    if (!l && ! function(e, t, r, n) {
                            let o = e[0];
                            if (null === o) return !1;
                            if ("display" === t || "visibility" === t) return !0;
                            let i = e[e.length - 1],
                                a = D(o, t),
                                s = D(i, t);
                            return (0, j.$)(a === s, `You are trying to animate ${t} from "${o}" to "${i}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${i} via the \`style\` property.`), !!a && !!s && (function(e) {
                                let t = e[0];
                                if (1 === e.length) return !0;
                                for (let r = 0; r < e.length; r++)
                                    if (e[r] !== t) return !0
                            }(e) || ("spring" === r || C(r)) && n)
                        }(e, r, n, o)) {
                        if (f.current || !i) {
                            null == s || s(h(e, this.options, t)), null == a || a(), this.resolveFinishedPromise();
                            return
                        }
                        this.options.duration = 0
                    }
                    let u = this.initPlayback(e, t);
                    !1 !== u && (this._resolved = {
                        keyframes: e,
                        finalKeyframe: t,
                        ...u
                    }, this.onPostResolved())
                }
                onPostResolved() {}
                then(e, t) {
                    return this.currentFinishedPromise.then(e, t)
                }
                flatten() {
                    this.options.type = "keyframes", this.options.ease = "linear"
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise(e => {
                        this.resolveFinishedPromise = e
                    })
                }
            }
            var O = r(26781);
            let N = (e, t, r = 10) => {
                let n = "",
                    o = Math.max(Math.round(t / r), 2);
                for (let t = 0; t < o; t++) n += e((0, O.q)(0, o - 1, t)) + ", ";
                return `linear(${n.substring(0,n.length-2)})`
            };
            var _ = r(42206);

            function I(e, t, r) {
                let n = Math.max(t - 5, 0);
                return (0, _.f)(r - e(n), t - n)
            }
            var F = r(16611);
            let V = {
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 0,
                duration: 800,
                bounce: .3,
                visualDuration: .3,
                restSpeed: {
                    granular: .01,
                    default: 2
                },
                restDelta: {
                    granular: .005,
                    default: .5
                },
                minDuration: .01,
                maxDuration: 10,
                minDamping: .05,
                maxDamping: 1
            };

            function B(e, t) {
                return e * Math.sqrt(1 - t * t)
            }

            function z(e) {
                let t = 0,
                    r = e.next(t);
                for (; !r.done && t < 2e4;) t += 50, r = e.next(t);
                return t >= 2e4 ? 1 / 0 : t
            }
            let W = ["duration", "bounce"],
                U = ["stiffness", "damping", "mass"];

            function H(e, t) {
                return t.some(t => void 0 !== e[t])
            }

            function $(e = V.visualDuration, t = V.bounce) {
                let r;
                let o = "object" != typeof e ? {
                        visualDuration: e,
                        keyframes: [0, 1],
                        bounce: t
                    } : e,
                    {
                        restSpeed: i,
                        restDelta: a
                    } = o,
                    s = o.keyframes[0],
                    l = o.keyframes[o.keyframes.length - 1],
                    u = {
                        done: !1,
                        value: s
                    },
                    {
                        stiffness: d,
                        damping: c,
                        mass: f,
                        duration: p,
                        velocity: h,
                        isResolvedFromDuration: m
                    } = function(e) {
                        let t = {
                            velocity: V.velocity,
                            stiffness: V.stiffness,
                            damping: V.damping,
                            mass: V.mass,
                            isResolvedFromDuration: !1,
                            ...e
                        };
                        if (!H(e, U) && H(e, W)) {
                            if (e.visualDuration) {
                                let r = 2 * Math.PI / (1.2 * e.visualDuration),
                                    n = r * r,
                                    o = 2 * (0, F.q)(.05, 1, 1 - e.bounce) * Math.sqrt(n);
                                t = { ...t,
                                    mass: V.mass,
                                    stiffness: n,
                                    damping: o
                                }
                            } else {
                                let r = function({
                                    duration: e = V.duration,
                                    bounce: t = V.bounce,
                                    velocity: r = V.velocity,
                                    mass: o = V.mass
                                }) {
                                    let i, a;
                                    (0, j.$)(e <= (0, n.f)(V.maxDuration), "Spring duration must be 10 seconds or less");
                                    let s = 1 - t;
                                    s = (0, F.q)(V.minDamping, V.maxDamping, s), e = (0, F.q)(V.minDuration, V.maxDuration, (0, n.X)(e)), s < 1 ? (i = t => {
                                        let n = t * s,
                                            o = n * e;
                                        return .001 - (n - r) / B(t, s) * Math.exp(-o)
                                    }, a = t => {
                                        let n = t * s * e,
                                            o = Math.pow(s, 2) * Math.pow(t, 2) * e,
                                            a = Math.exp(-n),
                                            l = B(Math.pow(t, 2), s);
                                        return (n * r + r - o) * a * (-i(t) + .001 > 0 ? -1 : 1) / l
                                    }) : (i = t => -.001 + Math.exp(-t * e) * ((t - r) * e + 1), a = t => e * e * (r - t) * Math.exp(-t * e));
                                    let l = function(e, t, r) {
                                        let n = r;
                                        for (let r = 1; r < 12; r++) n -= e(n) / t(n);
                                        return n
                                    }(i, a, 5 / e);
                                    if (e = (0, n.f)(e), isNaN(l)) return {
                                        stiffness: V.stiffness,
                                        damping: V.damping,
                                        duration: e
                                    }; {
                                        let t = Math.pow(l, 2) * o;
                                        return {
                                            stiffness: t,
                                            damping: 2 * s * Math.sqrt(o * t),
                                            duration: e
                                        }
                                    }
                                }(e);
                                (t = { ...t,
                                    ...r,
                                    mass: V.mass
                                }).isResolvedFromDuration = !0
                            }
                        }
                        return t
                    }({ ...o,
                        velocity: -(0, n.X)(o.velocity || 0)
                    }),
                    v = h || 0,
                    g = c / (2 * Math.sqrt(d * f)),
                    y = l - s,
                    b = (0, n.X)(Math.sqrt(d / f)),
                    w = 5 > Math.abs(y);
                if (i || (i = w ? V.restSpeed.granular : V.restSpeed.default), a || (a = w ? V.restDelta.granular : V.restDelta.default), g < 1) {
                    let e = B(b, g);
                    r = t => l - Math.exp(-g * b * t) * ((v + g * b * y) / e * Math.sin(e * t) + y * Math.cos(e * t))
                } else if (1 === g) r = e => l - Math.exp(-b * e) * (y + (v + b * y) * e);
                else {
                    let e = b * Math.sqrt(g * g - 1);
                    r = t => {
                        let r = Math.exp(-g * b * t),
                            n = Math.min(e * t, 300);
                        return l - r * ((v + g * b * y) * Math.sinh(n) + e * y * Math.cosh(n)) / e
                    }
                }
                let x = {
                    calculatedDuration: m && p || null,
                    next: e => {
                        let t = r(e);
                        if (m) u.done = e >= p;
                        else {
                            let o = 0;
                            g < 1 && (o = 0 === e ? (0, n.f)(v) : I(r, e, t));
                            let s = Math.abs(o) <= i,
                                d = Math.abs(l - t) <= a;
                            u.done = s && d
                        }
                        return u.value = u.done ? l : t, u
                    },
                    toString: () => {
                        let e = Math.min(z(x), 2e4),
                            t = N(t => x.next(e * t).value, e, 30);
                        return e + "ms " + t
                    }
                };
                return x
            }

            function G({
                keyframes: e,
                velocity: t = 0,
                power: r = .8,
                timeConstant: n = 325,
                bounceDamping: o = 10,
                bounceStiffness: i = 500,
                modifyTarget: a,
                min: s,
                max: l,
                restDelta: u = .5,
                restSpeed: d
            }) {
                let c, f;
                let p = e[0],
                    h = {
                        done: !1,
                        value: p
                    },
                    m = e => void 0 !== s && e < s || void 0 !== l && e > l,
                    v = e => void 0 === s ? l : void 0 === l ? s : Math.abs(s - e) < Math.abs(l - e) ? s : l,
                    g = r * t,
                    y = p + g,
                    b = void 0 === a ? y : a(y);
                b !== y && (g = b - p);
                let w = e => -g * Math.exp(-e / n),
                    x = e => b + w(e),
                    E = e => {
                        let t = w(e),
                            r = x(e);
                        h.done = Math.abs(t) <= u, h.value = h.done ? b : r
                    },
                    S = e => {
                        m(h.value) && (c = e, f = $({
                            keyframes: [h.value, v(h.value)],
                            velocity: I(x, e, h.value),
                            damping: o,
                            stiffness: i,
                            restDelta: u,
                            restSpeed: d
                        }))
                    };
                return S(0), {
                    calculatedDuration: null,
                    next: e => {
                        let t = !1;
                        return (f || void 0 !== c || (t = !0, E(e), S(e)), void 0 !== c && e >= c) ? f.next(e - c) : (t || E(e), h)
                    }
                }
            }
            let K = y(.42, 0, 1, 1),
                X = y(0, 0, .58, 1),
                Y = y(.42, 0, .58, 1),
                q = e => Array.isArray(e) && "number" != typeof e[0],
                Q = e => Array.isArray(e) && "number" == typeof e[0],
                Z = {
                    linear: v.l,
                    easeIn: K,
                    easeInOut: Y,
                    easeOut: X,
                    circIn: P.po,
                    circInOut: P.tn,
                    circOut: P.yT,
                    backIn: E,
                    backInOut: S,
                    backOut: x,
                    anticipate: T
                },
                J = e => {
                    if (Q(e)) {
                        (0, j.V)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                        let [t, r, n, o] = e;
                        return y(t, r, n, o)
                    }
                    return "string" == typeof e ? ((0, j.V)(void 0 !== Z[e], `Invalid easing type '${e}'`), Z[e]) : e
                };
            var ee = r(37751),
                et = r(50010);

            function er({
                duration: e = 300,
                keyframes: t,
                times: r,
                ease: n = "easeInOut"
            }) {
                let o = q(n) ? n.map(J) : J(n),
                    i = {
                        done: !1,
                        value: t[0]
                    },
                    a = (r && r.length === t.length ? r : function(e) {
                        let t = [0];
                        return function(e, t) {
                            let r = e[e.length - 1];
                            for (let n = 1; n <= t; n++) {
                                let o = (0, O.q)(0, t, n);
                                e.push((0, et.k)(r, 1, o))
                            }
                        }(t, e.length - 1), t
                    }(t)).map(t => t * e),
                    s = (0, ee.G)(a, t, {
                        ease: Array.isArray(o) ? o : t.map(() => o || Y).splice(0, t.length - 1)
                    });
                return {
                    calculatedDuration: e,
                    next: t => (i.value = s(t), i.done = t >= e, i)
                }
            }
            var en = r(15068),
                eo = r(91671);
            let ei = e => {
                    let t = ({
                        timestamp: t
                    }) => e(t);
                    return {
                        start: () => m.Gt.update(t, !0),
                        stop: () => (0, m.WG)(t),
                        now: () => m.uv.isProcessing ? m.uv.timestamp : M.k.now()
                    }
                },
                ea = {
                    decay: G,
                    inertia: G,
                    tween: er,
                    keyframes: er,
                    spring: $
                },
                es = e => e / 100;
            class el extends L {
                constructor(e) {
                    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
                        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                        this.teardown();
                        let {
                            onStop: e
                        } = this.options;
                        e && e()
                    };
                    let {
                        name: t,
                        motionValue: r,
                        element: n,
                        keyframes: o
                    } = this.options, i = (null == n ? void 0 : n.KeyframeResolver) || A.h;
                    this.resolver = new i(o, (e, t) => this.onKeyframesResolved(e, t), t, r, n), this.resolver.scheduleResolve()
                }
                flatten() {
                    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
                }
                initPlayback(e) {
                    let t, r;
                    let {
                        type: n = "keyframes",
                        repeat: o = 0,
                        repeatDelay: i = 0,
                        repeatType: a,
                        velocity: s = 0
                    } = this.options, l = C(n) ? n : ea[n] || er;
                    l !== er && "number" != typeof e[0] && (t = (0, en.F)(es, (0, eo.j)(e[0], e[1])), e = [0, 100]);
                    let u = l({ ...this.options,
                        keyframes: e
                    });
                    "mirror" === a && (r = l({ ...this.options,
                        keyframes: [...e].reverse(),
                        velocity: -s
                    })), null === u.calculatedDuration && (u.calculatedDuration = z(u));
                    let {
                        calculatedDuration: d
                    } = u, c = d + i;
                    return {
                        generator: u,
                        mirroredGenerator: r,
                        mapPercentToKeyframes: t,
                        calculatedDuration: d,
                        resolvedDuration: c,
                        totalDuration: c * (o + 1) - i
                    }
                }
                onPostResolved() {
                    let {
                        autoplay: e = !0
                    } = this.options;
                    this.play(), "paused" !== this.pendingPlayState && e ? this.state = this.pendingPlayState : this.pause()
                }
                tick(e, t = !1) {
                    let {
                        resolved: r
                    } = this;
                    if (!r) {
                        let {
                            keyframes: e
                        } = this.options;
                        return {
                            done: !0,
                            value: e[e.length - 1]
                        }
                    }
                    let {
                        finalKeyframe: n,
                        generator: o,
                        mirroredGenerator: i,
                        mapPercentToKeyframes: a,
                        keyframes: s,
                        calculatedDuration: l,
                        totalDuration: u,
                        resolvedDuration: d
                    } = r;
                    if (null === this.startTime) return o.next(0);
                    let {
                        delay: c,
                        repeat: f,
                        repeatType: p,
                        repeatDelay: m,
                        onUpdate: v
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)), t ? this.currentTime = e : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
                    let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
                        y = this.speed >= 0 ? g < 0 : g > u;
                    this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                    let b = this.currentTime,
                        w = o;
                    if (f) {
                        let e = Math.min(this.currentTime, u) / d,
                            t = Math.floor(e),
                            r = e % 1;
                        !r && e >= 1 && (r = 1), 1 === r && t--, (t = Math.min(t, f + 1)) % 2 && ("reverse" === p ? (r = 1 - r, m && (r -= m / d)) : "mirror" === p && (w = i)), b = (0, F.q)(0, 1, r) * d
                    }
                    let x = y ? {
                        done: !1,
                        value: s[0]
                    } : w.next(b);
                    a && (x.value = a(x.value));
                    let {
                        done: E
                    } = x;
                    y || null === l || (E = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                    let S = null === this.holdTime && ("finished" === this.state || "running" === this.state && E);
                    return S && void 0 !== n && (x.value = h(s, this.options, n)), v && v(x.value), S && this.finish(), x
                }
                get duration() {
                    let {
                        resolved: e
                    } = this;
                    return e ? (0, n.X)(e.calculatedDuration) : 0
                }
                get time() {
                    return (0, n.X)(this.currentTime)
                }
                set time(e) {
                    e = (0, n.f)(e), this.currentTime = e, null !== this.holdTime || 0 === this.speed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(e) {
                    let t = this.playbackSpeed !== e;
                    this.playbackSpeed = e, t && (this.time = (0, n.X)(this.currentTime))
                }
                play() {
                    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
                        this.pendingPlayState = "running";
                        return
                    }
                    if (this.isStopped) return;
                    let {
                        driver: e = ei,
                        onPlay: t,
                        startTime: r
                    } = this.options;
                    this.driver || (this.driver = e(e => this.tick(e))), t && t();
                    let n = this.driver.now();
                    null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != r ? r : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    var e;
                    if (!this._resolved) {
                        this.pendingPlayState = "paused";
                        return
                    }
                    this.state = "paused", this.holdTime = null !== (e = this.currentTime) && void 0 !== e ? e : 0
                }
                complete() {
                    "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.teardown(), this.state = "finished";
                    let {
                        onComplete: e
                    } = this.options;
                    e && e()
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(e) {
                    return this.startTime = 0, this.tick(e, !0)
                }
            }
            let eu = new Set(["opacity", "clipPath", "filter", "transform"]);

            function ed(e) {
                let t;
                return () => (void 0 === t && (t = e()), t)
            }
            let ec = {
                    linearEasing: void 0
                },
                ef = function(e, t) {
                    let r = ed(e);
                    return () => {
                        var e;
                        return null !== (e = ec[t]) && void 0 !== e ? e : r()
                    }
                }(() => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (e) {
                        return !1
                    }
                    return !0
                }, "linearEasing"),
                ep = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
                eh = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: ep([0, .65, .55, 1]),
                    circOut: ep([.55, 0, 1, .45]),
                    backIn: ep([.31, .01, .66, -.59]),
                    backOut: ep([.33, 1.53, .69, .99])
                };

            function em(e, t) {
                e.timeline = t, e.onfinish = null
            }
            let ev = ed(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                eg = {
                    anticipate: T,
                    backInOut: S,
                    circInOut: P.tn
                };
            class ey extends L {
                constructor(e) {
                    super(e);
                    let {
                        name: t,
                        motionValue: r,
                        element: n,
                        keyframes: o
                    } = this.options;
                    this.resolver = new k.K(o, (e, t) => this.onKeyframesResolved(e, t), t, r, n), this.resolver.scheduleResolve()
                }
                initPlayback(e, t) {
                    var r, n;
                    let {
                        duration: o = 300,
                        times: i,
                        ease: a,
                        type: s,
                        motionValue: l,
                        name: u,
                        startTime: d
                    } = this.options;
                    if (!(null === (r = l.owner) || void 0 === r ? void 0 : r.current)) return !1;
                    if ("string" == typeof a && ef() && a in eg && (a = eg[a]), C((n = this.options).type) || "spring" === n.type || ! function e(t) {
                            return !!("function" == typeof t && ef() || !t || "string" == typeof t && (t in eh || ef()) || Q(t) || Array.isArray(t) && t.every(e))
                        }(n.ease)) {
                        let {
                            onComplete: t,
                            onUpdate: r,
                            motionValue: n,
                            element: l,
                            ...u
                        } = this.options, d = function(e, t) {
                            let r = new el({ ...t,
                                    keyframes: e,
                                    repeat: 0,
                                    delay: 0,
                                    isGenerator: !0
                                }),
                                n = {
                                    done: !1,
                                    value: e[0]
                                },
                                o = [],
                                i = 0;
                            for (; !n.done && i < 2e4;) o.push((n = r.sample(i)).value), i += 10;
                            return {
                                times: void 0,
                                keyframes: o,
                                duration: i - 10,
                                ease: "linear"
                            }
                        }(e, u);
                        1 === (e = d.keyframes).length && (e[1] = e[0]), o = d.duration, i = d.times, a = d.ease, s = "keyframes"
                    }
                    let c = function(e, t, r, {
                        delay: n = 0,
                        duration: o = 300,
                        repeat: i = 0,
                        repeatType: a = "loop",
                        ease: s = "easeInOut",
                        times: l
                    } = {}) {
                        let u = {
                            [t]: r
                        };
                        l && (u.offset = l);
                        let d = function e(t, r) {
                            if (t) return "function" == typeof t && ef() ? N(t, r) : Q(t) ? ep(t) : Array.isArray(t) ? t.map(t => e(t, r) || eh.easeOut) : eh[t]
                        }(s, o);
                        return Array.isArray(d) && (u.easing = d), e.animate(u, {
                            delay: n,
                            duration: o,
                            easing: Array.isArray(d) ? "linear" : d,
                            fill: "both",
                            iterations: i + 1,
                            direction: "reverse" === a ? "alternate" : "normal"
                        })
                    }(l.owner.current, u, e, { ...this.options,
                        duration: o,
                        times: i,
                        ease: a
                    });
                    return c.startTime = null != d ? d : this.calcStartTime(), this.pendingTimeline ? (em(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
                        let {
                            onComplete: r
                        } = this.options;
                        l.set(h(e, this.options, t)), r && r(), this.cancel(), this.resolveFinishedPromise()
                    }, {
                        animation: c,
                        duration: o,
                        times: i,
                        type: s,
                        ease: a,
                        keyframes: e
                    }
                }
                get duration() {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return 0;
                    let {
                        duration: t
                    } = e;
                    return (0, n.X)(t)
                }
                get time() {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return 0;
                    let {
                        animation: t
                    } = e;
                    return (0, n.X)(t.currentTime || 0)
                }
                set time(e) {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: r
                    } = t;
                    r.currentTime = (0, n.f)(e)
                }
                get speed() {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return 1;
                    let {
                        animation: t
                    } = e;
                    return t.playbackRate
                }
                set speed(e) {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: r
                    } = t;
                    r.playbackRate = e
                }
                get state() {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return "idle";
                    let {
                        animation: t
                    } = e;
                    return t.playState
                }
                get startTime() {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return null;
                    let {
                        animation: t
                    } = e;
                    return t.startTime
                }
                attachTimeline(e) {
                    if (this._resolved) {
                        let {
                            resolved: t
                        } = this;
                        if (!t) return v.l;
                        let {
                            animation: r
                        } = t;
                        em(r, e)
                    } else this.pendingTimeline = e;
                    return v.l
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: t
                    } = e;
                    "finished" === t.playState && this.updateFinishedPromise(), t.play()
                }
                pause() {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: t
                    } = e;
                    t.pause()
                }
                stop() {
                    if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                    this.resolveFinishedPromise(), this.updateFinishedPromise();
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: t,
                        keyframes: r,
                        duration: o,
                        type: i,
                        ease: a,
                        times: s
                    } = e;
                    if ("idle" === t.playState || "finished" === t.playState) return;
                    if (this.time) {
                        let {
                            motionValue: e,
                            onUpdate: t,
                            onComplete: l,
                            element: u,
                            ...d
                        } = this.options, c = new el({ ...d,
                            keyframes: r,
                            duration: o,
                            type: i,
                            ease: a,
                            times: s,
                            isGenerator: !0
                        }), f = (0, n.f)(this.time);
                        e.setWithVelocity(c.sample(f - 10).value, c.sample(f).value, 10)
                    }
                    let {
                        onStop: l
                    } = this.options;
                    l && l(), this.cancel()
                }
                complete() {
                    let {
                        resolved: e
                    } = this;
                    e && e.animation.finish()
                }
                cancel() {
                    let {
                        resolved: e
                    } = this;
                    e && e.animation.cancel()
                }
                static supports(e) {
                    let {
                        motionValue: t,
                        name: r,
                        repeatDelay: n,
                        repeatType: o,
                        damping: i,
                        type: a
                    } = e;
                    return ev() && r && eu.has(r) && t && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate && !n && "mirror" !== o && 0 !== i && "inertia" !== a
                }
            }
            let eb = ed(() => void 0 !== window.ScrollTimeline);
            class ew {
                constructor(e) {
                    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
                }
                then(e, t) {
                    return Promise.all(this.animations).then(e).catch(t)
                }
                getAll(e) {
                    return this.animations[0][e]
                }
                setAll(e, t) {
                    for (let r = 0; r < this.animations.length; r++) this.animations[r][e] = t
                }
                attachTimeline(e, t) {
                    let r = this.animations.map(r => eb() && r.attachTimeline ? r.attachTimeline(e) : t(r));
                    return () => {
                        r.forEach((e, t) => {
                            e && e(), this.animations[t].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(e) {
                    this.setAll("time", e)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(e) {
                    this.setAll("speed", e)
                }
                get startTime() {
                    return this.getAll("startTime")
                }
                get duration() {
                    let e = 0;
                    for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration);
                    return e
                }
                runAll(e) {
                    this.animations.forEach(t => t[e]())
                }
                flatten() {
                    this.runAll("flatten")
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            let ex = (e, t, r, o = {}, i, a) => s => {
                let l = (0, d.r)(o, e) || {},
                    p = l.delay || o.delay || 0,
                    {
                        elapsed: v = 0
                    } = o;
                v -= (0, n.f)(p);
                let g = {
                    keyframes: Array.isArray(r) ? r : [null, r],
                    ease: "easeOut",
                    velocity: t.getVelocity(),
                    ...l,
                    delay: -v,
                    onUpdate: e => {
                        t.set(e), l.onUpdate && l.onUpdate(e)
                    },
                    onComplete: () => {
                        s(), l.onComplete && l.onComplete()
                    },
                    name: e,
                    motionValue: t,
                    element: a ? void 0 : i
                };
                ! function({
                    when: e,
                    delay: t,
                    delayChildren: r,
                    staggerChildren: n,
                    staggerDirection: o,
                    repeat: i,
                    repeatType: a,
                    repeatDelay: s,
                    from: l,
                    elapsed: u,
                    ...d
                }) {
                    return !!Object.keys(d).length
                }(l) && (g = { ...g,
                    ...u(e, g)
                }), g.duration && (g.duration = (0, n.f)(g.duration)), g.repeatDelay && (g.repeatDelay = (0, n.f)(g.repeatDelay)), void 0 !== g.from && (g.keyframes[0] = g.from);
                let y = !1;
                if (!1 !== g.type && (0 !== g.duration || g.repeatDelay) || (g.duration = 0, 0 !== g.delay || (y = !0)), (f.current || c.W.skipAnimations) && (y = !0, g.duration = 0, g.delay = 0), y && !a && void 0 !== t.get()) {
                    let e = h(g.keyframes, l);
                    if (void 0 !== e) return m.Gt.update(() => {
                        g.onUpdate(e), g.onComplete()
                    }), new ew([])
                }
                return !a && ey.supports(g) ? new ey(g) : new el(g)
            }
        },
        17539: (e, t, r) => {
            "use strict";
            r.d(t, {
                n: () => n
            });
            let n = "data-" + (0, r(42717).I)("framerAppearId")
        },
        32389: (e, t, r) => {
            "use strict";
            r.d(t, {
                P: () => o
            });
            var n = r(17539);

            function o(e) {
                return e.props[n.n]
            }
        },
        59193: (e, t, r) => {
            "use strict";

            function n(e, t) {
                return e ? e[t] || e.default || e : void 0
            }
            r.d(t, {
                r: () => n
            })
        },
        5385: (e, t, r) => {
            "use strict";

            function n(e) {
                return null !== e && "object" == typeof e && "function" == typeof e.start
            }
            r.d(t, {
                N: () => n
            })
        },
        82043: (e, t, r) => {
            "use strict";
            r.d(t, {
                p: () => n
            });
            let n = e => Array.isArray(e)
        },
        25683: (e, t, r) => {
            "use strict";
            r.d(t, {
                N: () => g
            });
            var n = r(95155),
                o = r(12115),
                i = r(39656),
                a = r(99234),
                s = r(27249);
            class l extends o.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = this.props.sizeRef.current;
                        e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function u(e) {
                let {
                    children: t,
                    isPresent: r
                } = e, i = (0, o.useId)(), a = (0, o.useRef)(null), u = (0, o.useRef)({
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0
                }), {
                    nonce: d
                } = (0, o.useContext)(s.Q);
                return (0, o.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: t,
                        top: n,
                        left: o
                    } = u.current;
                    if (r || !a.current || !e || !t) return;
                    a.current.dataset.motionPopId = i;
                    let s = document.createElement("style");
                    return d && (s.nonce = d), document.head.appendChild(s), s.sheet && s.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i, '"] {\n            position: absolute !important;\n            width: ').concat(e, "px !important;\n            height: ").concat(t, "px !important;\n            top: ").concat(n, "px !important;\n            left: ").concat(o, "px !important;\n          }\n        ")), () => {
                        document.head.removeChild(s)
                    }
                }, [r]), (0, n.jsx)(l, {
                    isPresent: r,
                    childRef: a,
                    sizeRef: u,
                    children: o.cloneElement(t, {
                        ref: a
                    })
                })
            }
            let d = e => {
                let {
                    children: t,
                    initial: r,
                    isPresent: s,
                    onExitComplete: l,
                    custom: d,
                    presenceAffectsLayout: f,
                    mode: p
                } = e, h = (0, a.M)(c), m = (0, o.useId)(), v = (0, o.useCallback)(e => {
                    for (let t of (h.set(e, !0), h.values()))
                        if (!t) return;
                    l && l()
                }, [h, l]), g = (0, o.useMemo)(() => ({
                    id: m,
                    initial: r,
                    isPresent: s,
                    custom: d,
                    onExitComplete: v,
                    register: e => (h.set(e, !1), () => h.delete(e))
                }), f ? [Math.random(), v] : [s, v]);
                return (0, o.useMemo)(() => {
                    h.forEach((e, t) => h.set(t, !1))
                }, [s]), o.useEffect(() => {
                    s || h.size || !l || l()
                }, [s]), "popLayout" === p && (t = (0, n.jsx)(u, {
                    isPresent: s,
                    children: t
                })), (0, n.jsx)(i.t.Provider, {
                    value: g,
                    children: t
                })
            };

            function c() {
                return new Map
            }
            var f = r(64710),
                p = r(45107);
            let h = e => e.key || "";

            function m(e) {
                let t = [];
                return o.Children.forEach(e, e => {
                    (0, o.isValidElement)(e) && t.push(e)
                }), t
            }
            var v = r(35403);
            let g = e => {
                let {
                    children: t,
                    exitBeforeEnter: r,
                    custom: i,
                    initial: s = !0,
                    onExitComplete: l,
                    presenceAffectsLayout: u = !0,
                    mode: c = "sync"
                } = e;
                (0, p.V)(!r, "Replace exitBeforeEnter with mode='wait'");
                let g = (0, o.useMemo)(() => m(t), [t]),
                    y = g.map(h),
                    b = (0, o.useRef)(!0),
                    w = (0, o.useRef)(g),
                    x = (0, a.M)(() => new Map),
                    [E, S] = (0, o.useState)(g),
                    [T, P] = (0, o.useState)(g);
                (0, v.E)(() => {
                    b.current = !1, w.current = g;
                    for (let e = 0; e < T.length; e++) {
                        let t = h(T[e]);
                        y.includes(t) ? x.delete(t) : !0 !== x.get(t) && x.set(t, !1)
                    }
                }, [T, y.length, y.join("-")]);
                let k = [];
                if (g !== E) {
                    let e = [...g];
                    for (let t = 0; t < T.length; t++) {
                        let r = T[t],
                            n = h(r);
                        y.includes(n) || (e.splice(t, 0, r), k.push(r))
                    }
                    "wait" === c && k.length && (e = k), P(m(e)), S(g);
                    return
                }
                let {
                    forceRender: C
                } = (0, o.useContext)(f.L);
                return (0, n.jsx)(n.Fragment, {
                    children: T.map(e => {
                        let t = h(e),
                            r = g === T || y.includes(t);
                        return (0, n.jsx)(d, {
                            isPresent: r,
                            initial: (!b.current || !!s) && void 0,
                            custom: r ? void 0 : i,
                            presenceAffectsLayout: u,
                            mode: c,
                            onExitComplete: r ? void 0 : () => {
                                if (!x.has(t)) return;
                                x.set(t, !0);
                                let e = !0;
                                x.forEach(t => {
                                    t || (e = !1)
                                }), e && (null == C || C(), P(w.current), l && l())
                            },
                            children: e
                        }, t)
                    })
                })
            }
        },
        64710: (e, t, r) => {
            "use strict";
            r.d(t, {
                L: () => n
            });
            let n = (0, r(12115).createContext)({})
        },
        75815: (e, t, r) => {
            "use strict";
            r.d(t, {
                Y: () => n
            });
            let n = (0, r(12115).createContext)({
                strict: !1
            })
        },
        27249: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => n
            });
            let n = (0, r(12115).createContext)({
                transformPagePoint: e => e,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        39656: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => n
            });
            let n = (0, r(12115).createContext)(null)
        },
        15750: (e, t, r) => {
            "use strict";
            r.d(t, {
                N: () => n
            });
            let n = (0, r(12115).createContext)({})
        },
        26575: (e, t, r) => {
            "use strict";
            r.d(t, {
                po: () => i,
                tn: () => s,
                yT: () => a
            });
            var n = r(35290),
                o = r(94641);
            let i = e => 1 - Math.sin(Math.acos(e)),
                a = (0, o.G)(i),
                s = (0, n.V)(i)
        },
        35290: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => n
            });
            let n = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
        },
        94641: (e, t, r) => {
            "use strict";
            r.d(t, {
                G: () => n
            });
            let n = e => t => 1 - e(1 - t)
        },
        85677: (e, t, r) => {
            "use strict";

            function n(e, t, r, o = {
                passive: !0
            }) {
                return e.addEventListener(t, r, o), () => e.removeEventListener(t, r)
            }
            r.d(t, {
                k: () => n
            })
        },
        66203: (e, t, r) => {
            "use strict";
            r.d(t, {
                F: () => i,
                e: () => o
            });
            var n = r(29889);

            function o(e) {
                return {
                    point: {
                        x: e.pageX,
                        y: e.pageY
                    }
                }
            }
            let i = e => t => (0, n.Mc)(t) && e(t, o(t))
        },
        14499: (e, t, r) => {
            "use strict";
            r.d(t, {
                I: () => i
            });
            var n = r(93903);
            let o = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

            function i(e, t) {
                let r = !1,
                    i = !0,
                    a = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    s = () => r = !0,
                    l = o.reduce((e, t) => (e[t] = function(e) {
                        let t = new Set,
                            r = new Set,
                            n = !1,
                            o = !1,
                            i = new WeakSet,
                            a = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            };

                        function s(t) {
                            i.has(t) && (l.schedule(t), e()), t(a)
                        }
                        let l = {
                            schedule: (e, o = !1, a = !1) => {
                                let s = a && n ? t : r;
                                return o && i.add(e), s.has(e) || s.add(e), e
                            },
                            cancel: e => {
                                r.delete(e), i.delete(e)
                            },
                            process: e => {
                                if (a = e, n) {
                                    o = !0;
                                    return
                                }
                                n = !0, [t, r] = [r, t], t.forEach(s), t.clear(), n = !1, o && (o = !1, l.process(e))
                            }
                        };
                        return l
                    }(s), e), {}),
                    {
                        read: u,
                        resolveKeyframes: d,
                        update: c,
                        preRender: f,
                        render: p,
                        postRender: h
                    } = l,
                    m = () => {
                        let o = n.W.useManualTiming ? a.timestamp : performance.now();
                        r = !1, a.delta = i ? 1e3 / 60 : Math.max(Math.min(o - a.timestamp, 40), 1), a.timestamp = o, a.isProcessing = !0, u.process(a), d.process(a), c.process(a), f.process(a), p.process(a), h.process(a), a.isProcessing = !1, r && t && (i = !1, e(m))
                    },
                    v = () => {
                        r = !0, i = !0, a.isProcessing || e(m)
                    };
                return {
                    schedule: o.reduce((e, t) => {
                        let n = l[t];
                        return e[t] = (e, t = !1, o = !1) => (r || v(), n.schedule(e, t, o)), e
                    }, {}),
                    cancel: e => {
                        for (let t = 0; t < o.length; t++) l[o[t]].cancel(e)
                    },
                    state: a,
                    steps: l
                }
            }
        },
        3307: (e, t, r) => {
            "use strict";
            r.d(t, {
                Gt: () => o,
                PP: () => s,
                WG: () => i,
                uv: () => a
            });
            var n = r(26054);
            let {
                schedule: o,
                cancel: i,
                state: a,
                steps: s
            } = (0, r(14499).I)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.l, !0)
        },
        45395: (e, t, r) => {
            "use strict";
            r.d(t, {
                k: () => n
            });
            let {
                schedule: n,
                cancel: o
            } = (0, r(14499).I)(queueMicrotask, !1)
        },
        79125: (e, t, r) => {
            "use strict";
            let n;
            r.d(t, {
                k: () => s
            });
            var o = r(93903),
                i = r(3307);

            function a() {
                n = void 0
            }
            let s = {
                now: () => (void 0 === n && s.set(i.uv.isProcessing || o.W.useManualTiming ? i.uv.timestamp : performance.now()), n),
                set: e => {
                    n = e, queueMicrotask(a)
                }
            }
        },
        35971: (e, t, r) => {
            "use strict";
            r.d(t, {
                X: () => n
            });
            class n {
                constructor(e) {
                    this.isMounted = !1, this.node = e
                }
                update() {}
            }
        },
        28456: (e, t, r) => {
            "use strict";
            r.d(t, {
                W: () => j
            });
            var n = r(5385),
                o = r(82043);

            function i(e, t) {
                if (!Array.isArray(t)) return !1;
                let r = t.length;
                if (r !== e.length) return !1;
                for (let n = 0; n < r; n++)
                    if (t[n] !== e[n]) return !1;
                return !0
            }
            var a = r(62896),
                s = r(78442);

            function l(e, t, r) {
                let n = e.getProps();
                return (0, s.a)(n, t, void 0 !== r ? r : n.custom, e)
            }
            var u = r(34543),
                d = r(31371),
                c = r(35615),
                f = r(55238),
                p = r(93250),
                h = r(59193),
                m = r(32389),
                v = r(86901),
                g = r(3307);

            function y(e, t, {
                delay: r = 0,
                transitionOverride: n,
                type: o
            } = {}) {
                var i;
                let {
                    transition: a = e.getDefaultTransition(),
                    transitionEnd: s,
                    ...u
                } = t;
                n && (a = n);
                let b = [],
                    w = o && e.animationState && e.animationState.getState()[o];
                for (let t in u) {
                    let n = e.getValue(t, null !== (i = e.latestValues[t]) && void 0 !== i ? i : null),
                        o = u[t];
                    if (void 0 === o || w && function({
                            protectedKeys: e,
                            needsAnimating: t
                        }, r) {
                            let n = e.hasOwnProperty(r) && !0 !== t[r];
                            return t[r] = !1, n
                        }(w, t)) continue;
                    let s = {
                            delay: r,
                            ...(0, h.r)(a || {}, t)
                        },
                        l = !1;
                    if (window.MotionHandoffAnimation) {
                        let r = (0, m.P)(e);
                        if (r) {
                            let e = window.MotionHandoffAnimation(r, t, g.Gt);
                            null !== e && (s.startTime = e, l = !0)
                        }
                    }(0, v.g)(e, t), n.start((0, c.f)(t, n, o, e.shouldReduceMotion && d.f.has(t) ? {
                        type: !1
                    } : s, e, l));
                    let f = n.animation;
                    f && b.push(f)
                }
                return s && Promise.all(b).then(() => {
                    g.Gt.update(() => {
                        s && function(e, t) {
                            let {
                                transitionEnd: r = {},
                                transition: n = {},
                                ...o
                            } = l(e, t) || {};
                            for (let t in o = { ...o,
                                    ...r
                                }) {
                                let r = (0, f.K)(o[t]);
                                e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, (0, p.OQ)(r))
                            }
                        }(e, s)
                    })
                }), b
            }

            function b(e, t, r = {}) {
                var n;
                let o = l(e, t, "exit" === r.type ? null === (n = e.presenceContext) || void 0 === n ? void 0 : n.custom : void 0),
                    {
                        transition: i = e.getDefaultTransition() || {}
                    } = o || {};
                r.transitionOverride && (i = r.transitionOverride);
                let a = o ? () => Promise.all(y(e, o, r)) : () => Promise.resolve(),
                    s = e.variantChildren && e.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: o = 0,
                            staggerChildren: a,
                            staggerDirection: s
                        } = i;
                        return function(e, t, r = 0, n = 0, o = 1, i) {
                            let a = [],
                                s = (e.variantChildren.size - 1) * n,
                                l = 1 === o ? (e = 0) => e * n : (e = 0) => s - e * n;
                            return Array.from(e.variantChildren).sort(w).forEach((e, n) => {
                                e.notify("AnimationStart", t), a.push(b(e, t, { ...i,
                                    delay: r + l(n)
                                }).then(() => e.notify("AnimationComplete", t)))
                            }), Promise.all(a)
                        }(e, t, o + n, a, s, r)
                    } : () => Promise.resolve(),
                    {
                        when: u
                    } = i;
                if (!u) return Promise.all([a(), s(r.delay)]); {
                    let [e, t] = "beforeChildren" === u ? [a, s] : [s, a];
                    return e().then(() => t())
                }
            }

            function w(e, t) {
                return e.sortNodePosition(t)
            }
            let x = u._.length,
                E = [...u.U].reverse(),
                S = u.U.length;

            function T(e = !1) {
                return {
                    isActive: e,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function P() {
                return {
                    animate: T(!0),
                    whileInView: T(),
                    whileHover: T(),
                    whileTap: T(),
                    whileDrag: T(),
                    whileFocus: T(),
                    exit: T()
                }
            }
            var k = r(35971);
            class C extends k.X {
                constructor(e) {
                    super(e), e.animationState || (e.animationState = function(e) {
                        let t = t => Promise.all(t.map(({
                                animation: t,
                                options: r
                            }) => (function(e, t, r = {}) {
                                let n;
                                if (e.notify("AnimationStart", t), Array.isArray(t)) n = Promise.all(t.map(t => b(e, t, r)));
                                else if ("string" == typeof t) n = b(e, t, r);
                                else {
                                    let o = "function" == typeof t ? l(e, t, r.custom) : t;
                                    n = Promise.all(y(e, o, r))
                                }
                                return n.then(() => {
                                    e.notify("AnimationComplete", t)
                                })
                            })(e, t, r))),
                            r = P(),
                            s = !0,
                            d = t => (r, n) => {
                                var o;
                                let i = l(e, n, "exit" === t ? null === (o = e.presenceContext) || void 0 === o ? void 0 : o.custom : void 0);
                                if (i) {
                                    let {
                                        transition: e,
                                        transitionEnd: t,
                                        ...n
                                    } = i;
                                    r = { ...r,
                                        ...n,
                                        ...t
                                    }
                                }
                                return r
                            };

                        function c(l) {
                            let {
                                props: c
                            } = e, f = function e(t) {
                                if (!t) return;
                                if (!t.isControllingVariants) {
                                    let r = t.parent && e(t.parent) || {};
                                    return void 0 !== t.props.initial && (r.initial = t.props.initial), r
                                }
                                let r = {};
                                for (let e = 0; e < x; e++) {
                                    let n = u._[e],
                                        o = t.props[n];
                                    ((0, a.w)(o) || !1 === o) && (r[n] = o)
                                }
                                return r
                            }(e.parent) || {}, p = [], h = new Set, m = {}, v = 1 / 0;
                            for (let t = 0; t < S; t++) {
                                var g;
                                let u = E[t],
                                    y = r[u],
                                    b = void 0 !== c[u] ? c[u] : f[u],
                                    w = (0, a.w)(b),
                                    x = u === l ? y.isActive : null;
                                !1 === x && (v = t);
                                let S = b === f[u] && b !== c[u] && w;
                                if (S && s && e.manuallyAnimateOnMount && (S = !1), y.protectedKeys = { ...m
                                    }, !y.isActive && null === x || !b && !y.prevProp || (0, n.N)(b) || "boolean" == typeof b) continue;
                                let T = (g = y.prevProp, "string" == typeof b ? b !== g : !!Array.isArray(b) && !i(b, g)),
                                    P = T || u === l && y.isActive && !S && w || t > v && w,
                                    k = !1,
                                    C = Array.isArray(b) ? b : [b],
                                    M = C.reduce(d(u), {});
                                !1 === x && (M = {});
                                let {
                                    prevResolvedValues: A = {}
                                } = y, j = { ...A,
                                    ...M
                                }, R = t => {
                                    P = !0, h.has(t) && (k = !0, h.delete(t)), y.needsAnimating[t] = !0;
                                    let r = e.getValue(t);
                                    r && (r.liveStyle = !1)
                                };
                                for (let e in j) {
                                    let t = M[e],
                                        r = A[e];
                                    if (!m.hasOwnProperty(e))((0, o.p)(t) && (0, o.p)(r) ? i(t, r) : t === r) ? void 0 !== t && h.has(e) ? R(e) : y.protectedKeys[e] = !0 : null != t ? R(e) : h.add(e)
                                }
                                y.prevProp = b, y.prevResolvedValues = M, y.isActive && (m = { ...m,
                                    ...M
                                }), s && e.blockInitialAnimation && (P = !1);
                                let D = !(S && T) || k;
                                P && D && p.push(...C.map(e => ({
                                    animation: e,
                                    options: {
                                        type: u
                                    }
                                })))
                            }
                            if (h.size) {
                                let t = {};
                                h.forEach(r => {
                                    let n = e.getBaseTarget(r),
                                        o = e.getValue(r);
                                    o && (o.liveStyle = !0), t[r] = null != n ? n : null
                                }), p.push({
                                    animation: t
                                })
                            }
                            let y = !!p.length;
                            return s && (!1 === c.initial || c.initial === c.animate) && !e.manuallyAnimateOnMount && (y = !1), s = !1, y ? t(p) : Promise.resolve()
                        }
                        return {
                            animateChanges: c,
                            setActive: function(t, n) {
                                var o;
                                if (r[t].isActive === n) return Promise.resolve();
                                null === (o = e.variantChildren) || void 0 === o || o.forEach(e => {
                                    var r;
                                    return null === (r = e.animationState) || void 0 === r ? void 0 : r.setActive(t, n)
                                }), r[t].isActive = n;
                                let i = c(t);
                                for (let e in r) r[e].protectedKeys = {};
                                return i
                            },
                            setAnimateFunction: function(r) {
                                t = r(e)
                            },
                            getState: () => r,
                            reset: () => {
                                r = P(), s = !0
                            }
                        }
                    }(e))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: e
                    } = this.node.getProps();
                    (0, n.N)(e) && (this.unmountControls = e.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: e
                    } = this.node.getProps(), {
                        animate: t
                    } = this.node.prevProps || {};
                    e !== t && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var e;
                    this.node.animationState.reset(), null === (e = this.unmountControls) || void 0 === e || e.call(this)
                }
            }
            let M = 0;
            class A extends k.X {
                constructor() {
                    super(...arguments), this.id = M++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: e,
                        onExitComplete: t
                    } = this.node.presenceContext, {
                        isPresent: r
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || e === r) return;
                    let n = this.node.animationState.setActive("exit", !e);
                    t && !e && n.then(() => t(this.id))
                }
                mount() {
                    let {
                        register: e
                    } = this.node.presenceContext || {};
                    e && (this.unmount = e(this.id))
                }
                unmount() {}
            }
            let j = {
                animation: {
                    Feature: C
                },
                exit: {
                    Feature: A
                }
            }
        },
        66247: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => o
            });
            let n = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                o = {};
            for (let e in n) o[e] = {
                isEnabled: t => n[e].some(e => !!t[e])
            }
        },
        89806: (e, t, r) => {
            "use strict";
            r.d(t, {
                n: () => w
            });
            var n = r(35971),
                o = r(29889),
                i = r(66203),
                a = r(3307);

            function s(e, t, r) {
                let {
                    props: n
                } = e;
                e.animationState && n.whileHover && e.animationState.setActive("whileHover", "Start" === r);
                let o = n["onHover" + r];
                o && a.Gt.postRender(() => o(t, (0, i.e)(t)))
            }
            class l extends n.X {
                mount() {
                    let {
                        current: e
                    } = this.node;
                    e && (this.unmount = (0, o.PT)(e, e => (s(this.node, e, "Start"), e => s(this.node, e, "End"))))
                }
                unmount() {}
            }
            var u = r(85677),
                d = r(15068);
            class c extends n.X {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let e = !1;
                    try {
                        e = this.node.current.matches(":focus-visible")
                    } catch (t) {
                        e = !0
                    }
                    e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = (0, d.F)((0, u.k)(this.node.current, "focus", () => this.onFocus()), (0, u.k)(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }

            function f(e, t, r) {
                let {
                    props: n
                } = e;
                e.animationState && n.whileTap && e.animationState.setActive("whileTap", "Start" === r);
                let o = n["onTap" + ("End" === r ? "" : r)];
                o && a.Gt.postRender(() => o(t, (0, i.e)(t)))
            }
            class p extends n.X {
                mount() {
                    let {
                        current: e
                    } = this.node;
                    e && (this.unmount = (0, o.c$)(e, e => (f(this.node, e, "Start"), (e, {
                        success: t
                    }) => f(this.node, e, t ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let h = new WeakMap,
                m = new WeakMap,
                v = e => {
                    let t = h.get(e.target);
                    t && t(e)
                },
                g = e => {
                    e.forEach(v)
                },
                y = {
                    some: 0,
                    all: 1
                };
            class b extends n.X {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: e = {}
                    } = this.node.getProps(), {
                        root: t,
                        margin: r,
                        amount: n = "some",
                        once: o
                    } = e, i = {
                        root: t ? t.current : void 0,
                        rootMargin: r,
                        threshold: "number" == typeof n ? n : y[n]
                    };
                    return function(e, t, r) {
                        let n = function({
                            root: e,
                            ...t
                        }) {
                            let r = e || document;
                            m.has(r) || m.set(r, {});
                            let n = m.get(r),
                                o = JSON.stringify(t);
                            return n[o] || (n[o] = new IntersectionObserver(g, {
                                root: e,
                                ...t
                            })), n[o]
                        }(t);
                        return h.set(e, r), n.observe(e), () => {
                            h.delete(e), n.unobserve(e)
                        }
                    }(this.node.current, i, e => {
                        let {
                            isIntersecting: t
                        } = e;
                        if (this.isInView === t || (this.isInView = t, o && !t && this.hasEnteredView)) return;
                        t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                        let {
                            onViewportEnter: r,
                            onViewportLeave: n
                        } = this.node.getProps(), i = t ? r : n;
                        i && i(e)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: e,
                        prevProps: t
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: e = {}
                    }, {
                        viewport: t = {}
                    } = {}) {
                        return r => e[r] !== t[r]
                    }(e, t)) && this.startObserver()
                }
                unmount() {}
            }
            let w = {
                inView: {
                    Feature: b
                },
                tap: {
                    Feature: p
                },
                focus: {
                    Feature: c
                },
                hover: {
                    Feature: l
                }
            }
        },
        94705: (e, t, r) => {
            "use strict";
            r.d(t, {
                Y: () => o
            });
            var n = r(66247);

            function o(e) {
                for (let t in e) n.B[t] = { ...n.B[t],
                    ...e[t]
                }
            }
        },
        59246: (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => i
            });
            var n = r(63154),
                o = r(31371);

            function i(e, {
                layout: t,
                layoutId: r
            }) {
                return o.f.has(e) || e.startsWith("origin") || (t || void 0 !== r) && (!!n.H[e] || "opacity" === e)
            }
        },
        65599: (e, t, r) => {
            "use strict";

            function n({
                top: e,
                left: t,
                right: r,
                bottom: n
            }) {
                return {
                    x: {
                        min: t,
                        max: r
                    },
                    y: {
                        min: e,
                        max: n
                    }
                }
            }

            function o({
                x: e,
                y: t
            }) {
                return {
                    top: t.min,
                    right: e.max,
                    bottom: t.max,
                    left: e.min
                }
            }

            function i(e, t) {
                if (!t) return e;
                let r = t({
                        x: e.left,
                        y: e.top
                    }),
                    n = t({
                        x: e.right,
                        y: e.bottom
                    });
                return {
                    top: r.y,
                    left: r.x,
                    bottom: n.y,
                    right: n.x
                }
            }
            r.d(t, {
                FY: () => n,
                bS: () => i,
                pA: () => o
            })
        },
        32994: (e, t, r) => {
            "use strict";
            r.d(t, {
                OU: () => u,
                Ql: () => d,
                Ww: () => f,
                hq: () => i,
                o4: () => l
            });
            var n = r(50010),
                o = r(62985);

            function i(e, t, r) {
                return r + t * (e - r)
            }

            function a(e, t, r, n, o) {
                return void 0 !== o && (e = n + o * (e - n)), n + r * (e - n) + t
            }

            function s(e, t = 0, r = 1, n, o) {
                e.min = a(e.min, t, r, n, o), e.max = a(e.max, t, r, n, o)
            }

            function l(e, {
                x: t,
                y: r
            }) {
                s(e.x, t.translate, t.scale, t.originPoint), s(e.y, r.translate, r.scale, r.originPoint)
            }

            function u(e, t, r, n = !1) {
                let i, a;
                let s = r.length;
                if (s) {
                    t.x = t.y = 1;
                    for (let u = 0; u < s; u++) {
                        a = (i = r[u]).projectionDelta;
                        let {
                            visualElement: s
                        } = i.options;
                        (!s || !s.props.style || "contents" !== s.props.style.display) && (n && i.options.layoutScroll && i.scroll && i !== i.root && f(e, {
                            x: -i.scroll.offset.x,
                            y: -i.scroll.offset.y
                        }), a && (t.x *= a.x.scale, t.y *= a.y.scale, l(e, a)), n && (0, o.HD)(i.latestValues) && f(e, i.latestValues))
                    }
                    t.x < 1.0000000000001 && t.x > .999999999999 && (t.x = 1), t.y < 1.0000000000001 && t.y > .999999999999 && (t.y = 1)
                }
            }

            function d(e, t) {
                e.min = e.min + t, e.max = e.max + t
            }

            function c(e, t, r, o, i = .5) {
                let a = (0, n.k)(e.min, e.max, i);
                s(e, t, r, a, o)
            }

            function f(e, t) {
                c(e.x, t.x, t.scaleX, t.scale, t.originX), c(e.y, t.y, t.scaleY, t.scale, t.originY)
            }
        },
        27865: (e, t, r) => {
            "use strict";
            r.d(t, {
                ge: () => a,
                xU: () => o
            });
            let n = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                o = () => ({
                    x: n(),
                    y: n()
                }),
                i = () => ({
                    min: 0,
                    max: 0
                }),
                a = () => ({
                    x: i(),
                    y: i()
                })
        },
        63154: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => o,
                H: () => n
            });
            let n = {};

            function o(e) {
                Object.assign(n, e)
            }
        },
        62985: (e, t, r) => {
            "use strict";

            function n(e) {
                return void 0 === e || 1 === e
            }

            function o({
                scale: e,
                scaleX: t,
                scaleY: r
            }) {
                return !n(e) || !n(t) || !n(r)
            }

            function i(e) {
                return o(e) || a(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
            }

            function a(e) {
                var t, r;
                return (t = e.x) && "0%" !== t || (r = e.y) && "0%" !== r
            }
            r.d(t, {
                HD: () => i,
                vF: () => a,
                vk: () => o
            })
        },
        77106: (e, t, r) => {
            "use strict";
            r.d(t, {
                L: () => a,
                m: () => i
            });
            var n = r(65599),
                o = r(32994);

            function i(e, t) {
                return (0, n.FY)((0, n.bS)(e.getBoundingClientRect(), t))
            }

            function a(e, t, r) {
                let n = i(e, r),
                    {
                        scroll: a
                    } = t;
                return a && ((0, o.Ql)(n.x, a.offset.x), (0, o.Ql)(n.y, a.offset.y)), n
            }
        },
        19755: (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => H
            });
            var n = r(95155),
                o = r(12115),
                i = r(27249);
            let a = (0, o.createContext)({});
            var s = r(39656),
                l = r(35403),
                u = r(75815),
                d = r(17539),
                c = r(45395),
                f = r(78674),
                p = r(15750),
                h = r(62896),
                m = r(99038);

            function v(e) {
                return Array.isArray(e) ? e.join(" ") : e
            }
            var g = r(94705),
                y = r(15687),
                b = r(64710);
            let w = Symbol.for("motionComponentSymbol");
            var x = r(66247),
                E = r(75526),
                S = r(47928),
                T = r(72126),
                P = r(5385),
                k = r(78442),
                C = r(99234),
                M = r(67365);
            let A = e => (t, r) => {
                    let n = (0, o.useContext)(a),
                        i = (0, o.useContext)(s.t),
                        l = () => (function({
                            scrapeMotionValuesFromProps: e,
                            createRenderState: t,
                            onMount: r
                        }, n, o, i) {
                            let a = {
                                latestValues: function(e, t, r, n) {
                                    let o = {},
                                        i = n(e, {});
                                    for (let e in i) o[e] = (0, M.u)(i[e]);
                                    let {
                                        initial: a,
                                        animate: s
                                    } = e, l = (0, m.e)(e), u = (0, m.O)(e);
                                    t && u && !l && !1 !== e.inherit && (void 0 === a && (a = t.initial), void 0 === s && (s = t.animate));
                                    let d = !!r && !1 === r.initial,
                                        c = (d = d || !1 === a) ? s : a;
                                    if (c && "boolean" != typeof c && !(0, P.N)(c)) {
                                        let t = Array.isArray(c) ? c : [c];
                                        for (let r = 0; r < t.length; r++) {
                                            let n = (0, k.a)(e, t[r]);
                                            if (n) {
                                                let {
                                                    transitionEnd: e,
                                                    transition: t,
                                                    ...r
                                                } = n;
                                                for (let e in r) {
                                                    let t = r[e];
                                                    if (Array.isArray(t)) {
                                                        let e = d ? t.length - 1 : 0;
                                                        t = t[e]
                                                    }
                                                    null !== t && (o[e] = t)
                                                }
                                                for (let t in e) o[t] = e[t]
                                            }
                                        }
                                    }
                                    return o
                                }(n, o, i, e),
                                renderState: t()
                            };
                            return r && (a.mount = e => r(n, e, a)), a
                        })(e, t, n, i);
                    return r ? l() : (0, C.M)(l)
                },
                j = () => ({
                    style: {},
                    transform: {},
                    transformOrigin: {},
                    vars: {}
                }),
                R = () => ({ ...j(),
                    attrs: {}
                });
            var D = r(71721),
                L = r(7986),
                O = r(3307);
            let N = {
                    useVisualState: A({
                        scrapeMotionValuesFromProps: T.x,
                        createRenderState: R,
                        onMount: (e, t, {
                            renderState: r,
                            latestValues: n
                        }) => {
                            O.Gt.read(() => {
                                try {
                                    r.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                                } catch (e) {
                                    r.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), O.Gt.render(() => {
                                (0, D.B)(r, n, (0, L.n)(t.tagName), e.transformTemplate), (0, S.d)(t, r)
                            })
                        }
                    })
                },
                _ = {
                    useVisualState: A({
                        scrapeMotionValuesFromProps: r(701).x,
                        createRenderState: j
                    })
                };
            var I = r(59246),
                F = r(84707),
                V = r(67192);

            function B(e, t, r) {
                for (let n in t)(0, F.S)(t[n]) || (0, I.z)(n, r) || (e[n] = t[n])
            }
            let z = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function W(e) {
                return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || z.has(e)
            }
            let U = e => !W(e);
            try {
                ! function(e) {
                    e && (U = t => t.startsWith("on") ? !W(t) : e(t))
                }(require("@emotion/is-prop-valid").default)
            } catch (e) {}

            function H(e, t) {
                return function(r, {
                    forwardMotionProps: S
                } = {
                    forwardMotionProps: !1
                }) {
                    return function(e) {
                        let {
                            preloadedFeatures: t,
                            createVisualElement: r,
                            useRender: E,
                            useVisualState: S,
                            Component: T
                        } = e;
                        t && (0, g.Y)(t);
                        let P = (0, o.forwardRef)(function(e, t) {
                            var g;
                            let w;
                            let P = { ...(0, o.useContext)(i.Q),
                                    ...e,
                                    layoutId: function(e) {
                                        let {
                                            layoutId: t
                                        } = e, r = (0, o.useContext)(b.L).id;
                                        return r && void 0 !== t ? r + "-" + t : t
                                    }(e)
                                },
                                {
                                    isStatic: k
                                } = P,
                                C = function(e) {
                                    let {
                                        initial: t,
                                        animate: r
                                    } = function(e, t) {
                                        if ((0, m.e)(e)) {
                                            let {
                                                initial: t,
                                                animate: r
                                            } = e;
                                            return {
                                                initial: !1 === t || (0, h.w)(t) ? t : void 0,
                                                animate: (0, h.w)(r) ? r : void 0
                                            }
                                        }
                                        return !1 !== e.inherit ? t : {}
                                    }(e, (0, o.useContext)(a));
                                    return (0, o.useMemo)(() => ({
                                        initial: t,
                                        animate: r
                                    }), [v(t), v(r)])
                                }(e),
                                M = S(e, k);
                            if (!k && y.B) {
                                (0, o.useContext)(u.Y).strict;
                                let e = function(e) {
                                    let {
                                        drag: t,
                                        layout: r
                                    } = x.B;
                                    if (!t && !r) return {};
                                    let n = { ...t,
                                        ...r
                                    };
                                    return {
                                        MeasureLayout: (null == t ? void 0 : t.isEnabled(e)) || (null == r ? void 0 : r.isEnabled(e)) ? n.MeasureLayout : void 0,
                                        ProjectionNode: n.ProjectionNode
                                    }
                                }(P);
                                w = e.MeasureLayout, C.visualElement = function(e, t, r, n, h) {
                                    var m, v;
                                    let {
                                        visualElement: g
                                    } = (0, o.useContext)(a), y = (0, o.useContext)(u.Y), b = (0, o.useContext)(s.t), w = (0, o.useContext)(i.Q).reducedMotion, x = (0, o.useRef)(null);
                                    n = n || y.renderer, !x.current && n && (x.current = n(e, {
                                        visualState: t,
                                        parent: g,
                                        props: r,
                                        presenceContext: b,
                                        blockInitialAnimation: !!b && !1 === b.initial,
                                        reducedMotionConfig: w
                                    }));
                                    let E = x.current,
                                        S = (0, o.useContext)(p.N);
                                    E && !E.projection && h && ("html" === E.type || "svg" === E.type) && function(e, t, r, n) {
                                        let {
                                            layoutId: o,
                                            layout: i,
                                            drag: a,
                                            dragConstraints: s,
                                            layoutScroll: l,
                                            layoutRoot: u
                                        } = t;
                                        e.projection = new r(e.latestValues, t["data-framer-portal-id"] ? void 0 : function e(t) {
                                            if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                                        }(e.parent)), e.projection.setOptions({
                                            layoutId: o,
                                            layout: i,
                                            alwaysMeasureLayout: !!a || s && (0, f.X)(s),
                                            visualElement: e,
                                            animationType: "string" == typeof i ? i : "both",
                                            initialPromotionConfig: n,
                                            layoutScroll: l,
                                            layoutRoot: u
                                        })
                                    }(x.current, r, h, S);
                                    let T = (0, o.useRef)(!1);
                                    (0, o.useInsertionEffect)(() => {
                                        E && T.current && E.update(r, b)
                                    });
                                    let P = r[d.n],
                                        k = (0, o.useRef)(!!P && !(null === (m = window.MotionHandoffIsComplete) || void 0 === m ? void 0 : m.call(window, P)) && (null === (v = window.MotionHasOptimisedAnimation) || void 0 === v ? void 0 : v.call(window, P)));
                                    return (0, l.E)(() => {
                                        E && (T.current = !0, window.MotionIsMounted = !0, E.updateFeatures(), c.k.render(E.render), k.current && E.animationState && E.animationState.animateChanges())
                                    }), (0, o.useEffect)(() => {
                                        E && (!k.current && E.animationState && E.animationState.animateChanges(), k.current && (queueMicrotask(() => {
                                            var e;
                                            null === (e = window.MotionHandoffMarkAsComplete) || void 0 === e || e.call(window, P)
                                        }), k.current = !1))
                                    }), E
                                }(T, M, P, r, e.ProjectionNode)
                            }
                            return (0, n.jsxs)(a.Provider, {
                                value: C,
                                children: [w && C.visualElement ? (0, n.jsx)(w, {
                                    visualElement: C.visualElement,
                                    ...P
                                }) : null, E(T, e, (g = C.visualElement, (0, o.useCallback)(e => {
                                    e && M.mount && M.mount(e), g && (e ? g.mount(e) : g.unmount()), t && ("function" == typeof t ? t(e) : (0, f.X)(t) && (t.current = e))
                                }, [g])), M, k, C.visualElement)]
                            })
                        });
                        return P[w] = T, P
                    }({ ...(0, E.Q)(r) ? N : _,
                        preloadedFeatures: e,
                        useRender: function(e = !1) {
                            return (t, r, n, {
                                latestValues: i
                            }, a) => {
                                let s = ((0, E.Q)(t) ? function(e, t, r, n) {
                                        let i = (0, o.useMemo)(() => {
                                            let r = R();
                                            return (0, D.B)(r, t, (0, L.n)(n), e.transformTemplate), { ...r.attrs,
                                                style: { ...r.style
                                                }
                                            }
                                        }, [t]);
                                        if (e.style) {
                                            let t = {};
                                            B(t, e.style, e), i.style = { ...t,
                                                ...i.style
                                            }
                                        }
                                        return i
                                    } : function(e, t) {
                                        let r = {},
                                            n = function(e, t) {
                                                let r = e.style || {},
                                                    n = {};
                                                return B(n, r, e), Object.assign(n, function({
                                                    transformTemplate: e
                                                }, t) {
                                                    return (0, o.useMemo)(() => {
                                                        let r = j();
                                                        return (0, V.O)(r, t, e), Object.assign({}, r.vars, r.style)
                                                    }, [t])
                                                }(e, t)), n
                                            }(e, t);
                                        return e.drag && !1 !== e.dragListener && (r.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = n, r
                                    })(r, i, a, t),
                                    l = function(e, t, r) {
                                        let n = {};
                                        for (let o in e)("values" !== o || "object" != typeof e.values) && (U(o) || !0 === r && W(o) || !t && !W(o) || e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
                                        return n
                                    }(r, "string" == typeof t, e),
                                    u = t !== o.Fragment ? { ...l,
                                        ...s,
                                        ref: n
                                    } : {},
                                    {
                                        children: d
                                    } = r,
                                    c = (0, o.useMemo)(() => (0, F.S)(d) ? d.get() : d, [d]);
                                return (0, o.createElement)(t, { ...u,
                                    children: c
                                })
                            }
                        }(S),
                        createVisualElement: t,
                        Component: r
                    })
                }
            }
        },
        90271: (e, t, r) => {
            "use strict";

            function n(e) {
                if ("undefined" == typeof Proxy) return e;
                let t = new Map;
                return new Proxy((...t) => e(...t), {
                    get: (r, n) => "create" === n ? e : (t.has(n) || t.set(n, e(n)), t.get(n))
                })
            }
            r.d(t, {
                I: () => n
            })
        },
        46647: (e, t, r) => {
            "use strict";
            r.d(t, {
                P: () => ty
            });
            var n = r(90271),
                o = r(28456),
                i = r(35971),
                a = r(26054),
                s = r(45107),
                l = r(29889),
                u = r(66203),
                d = r(14302),
                c = r(85677);

            function f(e, t, r, n) {
                return (0, c.k)(e, t, (0, u.F)(r), n)
            }
            var p = r(15068);
            let h = (e, t) => Math.abs(e - t);
            var m = r(3307);
            class v {
                constructor(e, t, {
                    transformPagePoint: r,
                    contextWindow: n,
                    dragSnapToOrigin: o = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let e = b(this.lastMoveEventInfo, this.history),
                                t = null !== this.startEvent,
                                r = function(e, t) {
                                    return Math.sqrt(h(e.x, t.x) ** 2 + h(e.y, t.y) ** 2)
                                }(e.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!t && !r) return;
                            let {
                                point: n
                            } = e, {
                                timestamp: o
                            } = m.uv;
                            this.history.push({ ...n,
                                timestamp: o
                            });
                            let {
                                onStart: i,
                                onMove: a
                            } = this.handlers;
                            t || (i && i(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, e)
                        }, this.handlePointerMove = (e, t) => {
                            this.lastMoveEvent = e, this.lastMoveEventInfo = g(t, this.transformPagePoint), m.Gt.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (e, t) => {
                            this.end();
                            let {
                                onEnd: r,
                                onSessionEnd: n,
                                resumeAnimation: o
                            } = this.handlers;
                            if (this.dragSnapToOrigin && o && o(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let i = b("pointercancel" === e.type ? this.lastMoveEventInfo : g(t, this.transformPagePoint), this.history);
                            this.startEvent && r && r(e, i), n && n(e, i)
                        }, !(0, l.Mc)(e)) return;
                    this.dragSnapToOrigin = o, this.handlers = t, this.transformPagePoint = r, this.contextWindow = n || window;
                    let i = g((0, u.e)(e), this.transformPagePoint),
                        {
                            point: a
                        } = i,
                        {
                            timestamp: s
                        } = m.uv;
                    this.history = [{ ...a,
                        timestamp: s
                    }];
                    let {
                        onSessionStart: d
                    } = t;
                    d && d(e, b(i, this.history)), this.removeListeners = (0, p.F)(f(this.contextWindow, "pointermove", this.handlePointerMove), f(this.contextWindow, "pointerup", this.handlePointerUp), f(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(e) {
                    this.handlers = e
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, m.WG)(this.updatePoint)
                }
            }

            function g(e, t) {
                return t ? {
                    point: t(e.point)
                } : e
            }

            function y(e, t) {
                return {
                    x: e.x - t.x,
                    y: e.y - t.y
                }
            }

            function b({
                point: e
            }, t) {
                return {
                    point: e,
                    delta: y(e, w(t)),
                    offset: y(e, t[0]),
                    velocity: function(e, t) {
                        if (e.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let r = e.length - 1,
                            n = null,
                            o = w(e);
                        for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > (0, d.f)(.1)));) r--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let i = (0, d.X)(o.timestamp - n.timestamp);
                        if (0 === i) return {
                            x: 0,
                            y: 0
                        };
                        let a = {
                            x: (o.x - n.x) / i,
                            y: (o.y - n.y) / i
                        };
                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                    }(t, 0)
                }
            }

            function w(e) {
                return e[e.length - 1]
            }
            var x = r(78674),
                E = r(26781),
                S = r(50010);

            function T(e) {
                return e.max - e.min
            }

            function P(e, t, r, n = .5) {
                e.origin = n, e.originPoint = (0, S.k)(t.min, t.max, e.origin), e.scale = T(r) / T(t), e.translate = (0, S.k)(r.min, r.max, e.origin) - e.originPoint, (e.scale >= .9999 && e.scale <= 1.0001 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= -.01 && e.translate <= .01 || isNaN(e.translate)) && (e.translate = 0)
            }

            function k(e, t, r, n) {
                P(e.x, t.x, r.x, n ? n.originX : void 0), P(e.y, t.y, r.y, n ? n.originY : void 0)
            }

            function C(e, t, r) {
                e.min = r.min + t.min, e.max = e.min + T(t)
            }

            function M(e, t, r) {
                e.min = t.min - r.min, e.max = e.min + T(t)
            }

            function A(e, t, r) {
                M(e.x, t.x, r.x), M(e.y, t.y, r.y)
            }
            var j = r(16611);

            function R(e, t, r) {
                return {
                    min: void 0 !== t ? e.min + t : void 0,
                    max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0
                }
            }

            function D(e, t) {
                let r = t.min - e.min,
                    n = t.max - e.max;
                return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), {
                    min: r,
                    max: n
                }
            }

            function L(e, t, r) {
                return {
                    min: O(e, t),
                    max: O(e, r)
                }
            }

            function O(e, t) {
                return "number" == typeof e ? e : e[t] || 0
            }
            var N = r(27865);

            function _(e) {
                return [e("x"), e("y")]
            }
            var I = r(77106),
                F = r(65599),
                V = r(43406),
                B = r(35615);
            let z = ({
                current: e
            }) => e ? e.ownerDocument.defaultView : null;
            var W = r(86901);
            let U = new WeakMap;
            class H {
                constructor(e) {
                    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, N.ge)(), this.visualElement = e
                }
                start(e, {
                    snapToCursor: t = !1
                } = {}) {
                    let {
                        presenceContext: r
                    } = this.visualElement;
                    if (r && !1 === r.isPresent) return;
                    let {
                        dragSnapToOrigin: n
                    } = this.getProps();
                    this.panSession = new v(e, {
                        onSessionStart: e => {
                            let {
                                dragSnapToOrigin: r
                            } = this.getProps();
                            r ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor((0, u.e)(e).point)
                        },
                        onStart: (e, t) => {
                            let {
                                drag: r,
                                dragPropagation: n,
                                onDragStart: o
                            } = this.getProps();
                            if (r && !n && (this.openDragLock && this.openDragLock(), this.openDragLock = (0, l.Wp)(r), !this.openDragLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), _(e => {
                                let t = this.getAxisMotionValue(e).get() || 0;
                                if (V.KN.test(t)) {
                                    let {
                                        projection: r
                                    } = this.visualElement;
                                    if (r && r.layout) {
                                        let n = r.layout.layoutBox[e];
                                        n && (t = T(n) * (parseFloat(t) / 100))
                                    }
                                }
                                this.originPoint[e] = t
                            }), o && m.Gt.postRender(() => o(e, t)), (0, W.g)(this.visualElement, "transform");
                            let {
                                animationState: i
                            } = this.visualElement;
                            i && i.setActive("whileDrag", !0)
                        },
                        onMove: (e, t) => {
                            let {
                                dragPropagation: r,
                                dragDirectionLock: n,
                                onDirectionLock: o,
                                onDrag: i
                            } = this.getProps();
                            if (!r && !this.openDragLock) return;
                            let {
                                offset: a
                            } = t;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(e, t = 10) {
                                    let r = null;
                                    return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r
                                }(a), null !== this.currentDirection && o && o(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", t.point, a), this.updateAxis("y", t.point, a), this.visualElement.render(), i && i(e, t)
                        },
                        onSessionEnd: (e, t) => this.stop(e, t),
                        resumeAnimation: () => _(e => {
                            var t;
                            return "paused" === this.getAnimationState(e) && (null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: n,
                        contextWindow: z(this.visualElement)
                    })
                }
                stop(e, t) {
                    let r = this.isDragging;
                    if (this.cancel(), !r) return;
                    let {
                        velocity: n
                    } = t;
                    this.startAnimation(n);
                    let {
                        onDragEnd: o
                    } = this.getProps();
                    o && m.Gt.postRender(() => o(e, t))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: e,
                        animationState: t
                    } = this.visualElement;
                    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: r
                    } = this.getProps();
                    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1)
                }
                updateAxis(e, t, r) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!r || !$(e, n, this.currentDirection)) return;
                    let o = this.getAxisMotionValue(e),
                        i = this.originPoint[e] + r[e];
                    this.constraints && this.constraints[e] && (i = function(e, {
                        min: t,
                        max: r
                    }, n) {
                        return void 0 !== t && e < t ? e = n ? (0, S.k)(t, e, n.min) : Math.max(e, t) : void 0 !== r && e > r && (e = n ? (0, S.k)(r, e, n.max) : Math.min(e, r)), e
                    }(i, this.constraints[e], this.elastic[e])), o.set(i)
                }
                resolveConstraints() {
                    var e;
                    let {
                        dragConstraints: t,
                        dragElastic: r
                    } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout, o = this.constraints;
                    t && (0, x.X)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = function(e, {
                        top: t,
                        left: r,
                        bottom: n,
                        right: o
                    }) {
                        return {
                            x: R(e.x, r, o),
                            y: R(e.y, t, n)
                        }
                    }(n.layoutBox, t) : this.constraints = !1, this.elastic = function(e = .35) {
                        return !1 === e ? e = 0 : !0 === e && (e = .35), {
                            x: L(e, "left", "right"),
                            y: L(e, "top", "bottom")
                        }
                    }(r), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && _(e => {
                        !1 !== this.constraints && this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
                            let r = {};
                            return void 0 !== t.min && (r.min = t.min - e.min), void 0 !== t.max && (r.max = t.max - e.min), r
                        }(n.layoutBox[e], this.constraints[e]))
                    })
                }
                resolveRefConstraints() {
                    var e;
                    let {
                        dragConstraints: t,
                        onMeasureDragConstraints: r
                    } = this.getProps();
                    if (!t || !(0, x.X)(t)) return !1;
                    let n = t.current;
                    (0, s.V)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: o
                    } = this.visualElement;
                    if (!o || !o.layout) return !1;
                    let i = (0, I.L)(n, o.root, this.visualElement.getTransformPagePoint()),
                        a = {
                            x: D((e = o.layout.layoutBox).x, i.x),
                            y: D(e.y, i.y)
                        };
                    if (r) {
                        let e = r((0, F.pA)(a));
                        this.hasMutatedConstraints = !!e, e && (a = (0, F.FY)(e))
                    }
                    return a
                }
                startAnimation(e) {
                    let {
                        drag: t,
                        dragMomentum: r,
                        dragElastic: n,
                        dragTransition: o,
                        dragSnapToOrigin: i,
                        onDragTransitionEnd: a
                    } = this.getProps(), s = this.constraints || {};
                    return Promise.all(_(a => {
                        if (!$(a, t, this.currentDirection)) return;
                        let l = s && s[a] || {};
                        i && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: r ? e[a] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...o,
                            ...l
                        };
                        return this.startAxisValueAnimation(a, u)
                    })).then(a)
                }
                startAxisValueAnimation(e, t) {
                    let r = this.getAxisMotionValue(e);
                    return (0, W.g)(this.visualElement, e), r.start((0, B.f)(e, r, 0, t, this.visualElement, !1))
                }
                stopAnimation() {
                    _(e => this.getAxisMotionValue(e).stop())
                }
                pauseAnimation() {
                    _(e => {
                        var t;
                        return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.pause()
                    })
                }
                getAnimationState(e) {
                    var t;
                    return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.state
                }
                getAxisMotionValue(e) {
                    let t = `_drag${e.toUpperCase()}`,
                        r = this.visualElement.getProps();
                    return r[t] || this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0)
                }
                snapToCursor(e) {
                    _(t => {
                        let {
                            drag: r
                        } = this.getProps();
                        if (!$(t, r, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, o = this.getAxisMotionValue(t);
                        if (n && n.layout) {
                            let {
                                min: r,
                                max: i
                            } = n.layout.layoutBox[t];
                            o.set(e[t] - (0, S.k)(r, i, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: e,
                        dragConstraints: t
                    } = this.getProps(), {
                        projection: r
                    } = this.visualElement;
                    if (!(0, x.X)(t) || !r || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    _(e => {
                        let t = this.getAxisMotionValue(e);
                        if (t && !1 !== this.constraints) {
                            let r = t.get();
                            n[e] = function(e, t) {
                                let r = .5,
                                    n = T(e),
                                    o = T(t);
                                return o > n ? r = (0, E.q)(t.min, t.max - n, e.min) : n > o && (r = (0, E.q)(e.min, e.max - o, t.min)), (0, j.q)(0, 1, r)
                            }({
                                min: r,
                                max: r
                            }, this.constraints[e])
                        }
                    });
                    let {
                        transformTemplate: o
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), _(t => {
                        if (!$(t, e, null)) return;
                        let r = this.getAxisMotionValue(t),
                            {
                                min: o,
                                max: i
                            } = this.constraints[t];
                        r.set((0, S.k)(o, i, n[t]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    U.set(this.visualElement, this);
                    let e = f(this.visualElement.current, "pointerdown", e => {
                            let {
                                drag: t,
                                dragListener: r = !0
                            } = this.getProps();
                            t && r && this.start(e)
                        }),
                        t = () => {
                            let {
                                dragConstraints: e
                            } = this.getProps();
                            (0, x.X)(e) && e.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: r
                        } = this.visualElement,
                        n = r.addEventListener("measure", t);
                    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), m.Gt.read(t);
                    let o = (0, c.k)(window, "resize", () => this.scalePositionWithinConstraints()),
                        i = r.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: t
                        }) => {
                            this.isDragging && t && (_(t => {
                                let r = this.getAxisMotionValue(t);
                                r && (this.originPoint[t] += e[t].translate, r.set(r.get() + e[t].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        o(), e(), n(), i && i()
                    }
                }
                getProps() {
                    let e = this.visualElement.getProps(),
                        {
                            drag: t = !1,
                            dragDirectionLock: r = !1,
                            dragPropagation: n = !1,
                            dragConstraints: o = !1,
                            dragElastic: i = .35,
                            dragMomentum: a = !0
                        } = e;
                    return { ...e,
                        drag: t,
                        dragDirectionLock: r,
                        dragPropagation: n,
                        dragConstraints: o,
                        dragElastic: i,
                        dragMomentum: a
                    }
                }
            }

            function $(e, t, r) {
                return (!0 === t || t === e) && (null === r || r === e)
            }
            class G extends i.X {
                constructor(e) {
                    super(e), this.removeGroupControls = a.l, this.removeListeners = a.l, this.controls = new H(e)
                }
                mount() {
                    let {
                        dragControls: e
                    } = this.node.getProps();
                    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || a.l
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let K = e => (t, r) => {
                e && m.Gt.postRender(() => e(t, r))
            };
            class X extends i.X {
                constructor() {
                    super(...arguments), this.removePointerDownListener = a.l
                }
                onPointerDown(e) {
                    this.session = new v(e, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: z(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: e,
                        onPanStart: t,
                        onPan: r,
                        onPanEnd: n
                    } = this.node.getProps();
                    return {
                        onSessionStart: K(e),
                        onStart: K(t),
                        onMove: r,
                        onEnd: (e, t) => {
                            delete this.session, n && m.Gt.postRender(() => n(e, t))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = f(this.node.current, "pointerdown", e => this.onPointerDown(e))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var Y = r(95155),
                q = r(12115),
                Q = r(39656),
                Z = r(64710),
                J = r(15750);
            let ee = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            };

            function et(e, t) {
                return t.max === t.min ? 0 : e / (t.max - t.min) * 100
            }
            let er = {
                correct: (e, t) => {
                    if (!t.target) return e;
                    if ("string" == typeof e) {
                        if (!V.px.test(e)) return e;
                        e = parseFloat(e)
                    }
                    let r = et(e, t.target.x),
                        n = et(e, t.target.y);
                    return `${r}% ${n}%`
                }
            };
            var en = r(55254),
                eo = r(63154),
                ei = r(45395);
            class ea extends q.Component {
                componentDidMount() {
                    let {
                        visualElement: e,
                        layoutGroup: t,
                        switchLayoutGroup: r,
                        layoutId: n
                    } = this.props, {
                        projection: o
                    } = e;
                    (0, eo.$)(el), o && (t.group && t.group.add(o), r && r.register && n && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), o.setOptions({ ...o.options,
                        onExitComplete: () => this.safeToRemove()
                    })), ee.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(e) {
                    let {
                        layoutDependency: t,
                        visualElement: r,
                        drag: n,
                        isPresent: o
                    } = this.props, i = r.projection;
                    return i && (i.isPresent = o, n || e.layoutDependency !== t || void 0 === t ? i.willUpdate() : this.safeToRemove(), e.isPresent === o || (o ? i.promote() : i.relegate() || m.Gt.postRender(() => {
                        let e = i.getStack();
                        e && e.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: e
                    } = this.props.visualElement;
                    e && (e.root.didUpdate(), ei.k.postRender(() => {
                        !e.currentAnimation && e.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: e,
                        layoutGroup: t,
                        switchLayoutGroup: r
                    } = this.props, {
                        projection: n
                    } = e;
                    n && (n.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(n), r && r.deregister && r.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: e
                    } = this.props;
                    e && e()
                }
                render() {
                    return null
                }
            }

            function es(e) {
                let [t, r] = function() {
                    let e = (0, q.useContext)(Q.t);
                    if (null === e) return [!0, null];
                    let {
                        isPresent: t,
                        onExitComplete: r,
                        register: n
                    } = e, o = (0, q.useId)();
                    (0, q.useEffect)(() => n(o), []);
                    let i = (0, q.useCallback)(() => r && r(o), [o, r]);
                    return !t && r ? [!1, i] : [!0]
                }(), n = (0, q.useContext)(Z.L);
                return (0, Y.jsx)(ea, { ...e,
                    layoutGroup: n,
                    switchLayoutGroup: (0, q.useContext)(J.N),
                    isPresent: t,
                    safeToRemove: r
                })
            }
            let el = {
                borderRadius: { ...er,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: er,
                borderTopRightRadius: er,
                borderBottomLeftRadius: er,
                borderBottomRightRadius: er,
                boxShadow: {
                    correct: (e, {
                        treeScale: t,
                        projectionDelta: r
                    }) => {
                        let n = en.f.parse(e);
                        if (n.length > 5) return e;
                        let o = en.f.createTransformer(e),
                            i = "number" != typeof n[0] ? 1 : 0,
                            a = r.x.scale * t.x,
                            s = r.y.scale * t.y;
                        n[0 + i] /= a, n[1 + i] /= s;
                        let l = (0, S.k)(a, s, .5);
                        return "number" == typeof n[2 + i] && (n[2 + i] /= l), "number" == typeof n[3 + i] && (n[3 + i] /= l), o(n)
                    }
                }
            };
            var eu = r(87945),
                ed = r(26575);
            let ec = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                ef = ec.length,
                ep = e => "string" == typeof e ? parseFloat(e) : e,
                eh = e => "number" == typeof e || V.px.test(e);

            function em(e, t) {
                return void 0 !== e[t] ? e[t] : e.borderRadius
            }
            let ev = ey(0, .5, ed.yT),
                eg = ey(.5, .95, a.l);

            function ey(e, t, r) {
                return n => n < e ? 0 : n > t ? 1 : r((0, E.q)(e, t, n))
            }

            function eb(e, t) {
                e.min = t.min, e.max = t.max
            }

            function ew(e, t) {
                eb(e.x, t.x), eb(e.y, t.y)
            }

            function ex(e, t) {
                e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
            }
            var eE = r(32994);

            function eS(e, t, r, n, o) {
                return e -= t, e = (0, eE.hq)(e, 1 / r, n), void 0 !== o && (e = (0, eE.hq)(e, 1 / o, n)), e
            }

            function eT(e, t, [r, n, o], i, a) {
                ! function(e, t = 0, r = 1, n = .5, o, i = e, a = e) {
                    if (V.KN.test(t) && (t = parseFloat(t), t = (0, S.k)(a.min, a.max, t / 100) - a.min), "number" != typeof t) return;
                    let s = (0, S.k)(i.min, i.max, n);
                    e === i && (s -= t), e.min = eS(e.min, t, r, s, o), e.max = eS(e.max, t, r, s, o)
                }(e, t[r], t[n], t[o], t.scale, i, a)
            }
            let eP = ["x", "scaleX", "originX"],
                ek = ["y", "scaleY", "originY"];

            function eC(e, t, r, n) {
                eT(e.x, t, eP, r ? r.x : void 0, n ? n.x : void 0), eT(e.y, t, ek, r ? r.y : void 0, n ? n.y : void 0)
            }
            var eM = r(59193);

            function eA(e) {
                return 0 === e.translate && 1 === e.scale
            }

            function ej(e) {
                return eA(e.x) && eA(e.y)
            }

            function eR(e, t) {
                return e.min === t.min && e.max === t.max
            }

            function eD(e, t) {
                return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
            }

            function eL(e, t) {
                return eD(e.x, t.x) && eD(e.y, t.y)
            }

            function eO(e) {
                return T(e.x) / T(e.y)
            }

            function eN(e, t) {
                return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
            }
            var e_ = r(24093);
            class eI {
                constructor() {
                    this.members = []
                }
                add(e) {
                    (0, e_.Kq)(this.members, e), e.scheduleRender()
                }
                remove(e) {
                    if ((0, e_.Ai)(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                        let e = this.members[this.members.length - 1];
                        e && this.promote(e)
                    }
                }
                relegate(e) {
                    let t;
                    let r = this.members.findIndex(t => e === t);
                    if (0 === r) return !1;
                    for (let e = r; e >= 0; e--) {
                        let r = this.members[e];
                        if (!1 !== r.isPresent) {
                            t = r;
                            break
                        }
                    }
                    return !!t && (this.promote(t), !0)
                }
                promote(e, t) {
                    let r = this.lead;
                    if (e !== r && (this.prevLead = r, this.lead = e, e.show(), r)) {
                        r.instance && r.scheduleRender(), e.scheduleRender(), e.resumeFrom = r, t && (e.resumeFrom.preserveOpacity = !0), r.snapshot && (e.snapshot = r.snapshot, e.snapshot.latestValues = r.animationValues || r.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = e.options;
                        !1 === n && r.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(e => {
                        let {
                            options: t,
                            resumingFrom: r
                        } = e;
                        t.onExitComplete && t.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(e => {
                        e.instance && e.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }
            var eF = r(62985);
            let eV = (e, t) => e.depth - t.depth;
            class eB {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(e) {
                    (0, e_.Kq)(this.children, e), this.isDirty = !0
                }
                remove(e) {
                    (0, e_.Ai)(this.children, e), this.isDirty = !0
                }
                forEach(e) {
                    this.isDirty && this.children.sort(eV), this.isDirty = !1, this.children.forEach(e)
                }
            }
            var ez = r(67365),
                eW = r(79125),
                eU = r(93250),
                eH = r(84707),
                e$ = r(32389);
            let eG = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                },
                eK = "undefined" != typeof window && void 0 !== window.MotionDebug,
                eX = ["", "X", "Y", "Z"],
                eY = {
                    visibility: "hidden"
                },
                eq = 0;

            function eQ(e, t, r, n) {
                let {
                    latestValues: o
                } = t;
                o[e] && (r[e] = o[e], t.setStaticValue(e, 0), n && (n[e] = 0))
            }

            function eZ({
                attachResizeListener: e,
                defaultParent: t,
                measureScroll: r,
                checkIsScrollRoot: n,
                resetTransform: o
            }) {
                return class {
                    constructor(e = {}, r = null == t ? void 0 : t()) {
                        this.id = eq++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, eK && (eG.totalNodes = eG.resolvedTargetDeltas = eG.recalculatedProjection = 0), this.nodes.forEach(e1), this.nodes.forEach(e9), this.nodes.forEach(e8), this.nodes.forEach(e2), eK && window.MotionDebug.record(eG)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0;
                        for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new eB)
                    }
                    addEventListener(e, t) {
                        return this.eventHandlers.has(e) || this.eventHandlers.set(e, new eu.v), this.eventHandlers.get(e).add(t)
                    }
                    notifyListeners(e, ...t) {
                        let r = this.eventHandlers.get(e);
                        r && r.notify(...t)
                    }
                    hasListeners(e) {
                        return this.eventHandlers.has(e)
                    }
                    mount(t, r = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
                        let {
                            layoutId: n,
                            layout: o,
                            visualElement: i
                        } = this.options;
                        if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), r && (o || n) && (this.isLayoutDirty = !0), e) {
                            let r;
                            let n = () => this.root.updateBlockedByResize = !1;
                            e(t, () => {
                                this.root.updateBlockedByResize = !0, r && r(), r = function(e, t) {
                                    let r = eW.k.now(),
                                        n = ({
                                            timestamp: t
                                        }) => {
                                            let o = t - r;
                                            o >= 250 && ((0, m.WG)(n), e(o - 250))
                                        };
                                    return m.Gt.read(n, !0), () => (0, m.WG)(n)
                                }(n, 250), ee.hasAnimatedSinceResize && (ee.hasAnimatedSinceResize = !1, this.nodes.forEach(e7))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && i && (n || o) && this.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: t,
                            hasRelativeTargetChanged: r,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let o = this.options.transition || i.getDefaultTransition() || ti,
                                {
                                    onLayoutAnimationStart: a,
                                    onLayoutAnimationComplete: s
                                } = i.getProps(),
                                l = !this.targetLayout || !eL(this.targetLayout, n) || r,
                                u = !t && r;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || t && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, u);
                                let t = { ...(0, eM.r)(o, "layout"),
                                    onPlay: a,
                                    onComplete: s
                                };
                                (i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t)
                            } else t || e7(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let e = this.getStack();
                        e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, m.WG)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(te), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: e
                        } = this.options;
                        return e && e.getProps().transformTemplate
                    }
                    willUpdate(e = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function e(t) {
                                if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
                                let {
                                    visualElement: r
                                } = t.options;
                                if (!r) return;
                                let n = (0, e$.P)(r);
                                if (window.MotionHasOptimisedAnimation(n, "transform")) {
                                    let {
                                        layout: e,
                                        layoutId: r
                                    } = t.options;
                                    window.MotionCancelOptimisedAnimation(n, "transform", m.Gt, !(e || r))
                                }
                                let {
                                    parent: o
                                } = t;
                                o && !o.hasCheckedOptimisedAppear && e(o)
                            }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let e = 0; e < this.path.length; e++) {
                            let t = this.path[e];
                            t.shouldResetTransform = !0, t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1)
                        }
                        let {
                            layoutId: t,
                            layout: r
                        } = this.options;
                        if (void 0 === t && !r) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(e4);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(e3), this.isUpdating = !1, this.nodes.forEach(e6), this.nodes.forEach(eJ), this.nodes.forEach(e0), this.clearAllSnapshots();
                        let e = eW.k.now();
                        m.uv.delta = (0, j.q)(0, 1e3 / 60, e - m.uv.timestamp), m.uv.timestamp = e, m.uv.isProcessing = !0, m.PP.update.process(m.uv), m.PP.preRender.process(m.uv), m.PP.render.process(m.uv), m.uv.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, ei.k.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(e5), this.sharedNodes.forEach(tt)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, m.Gt.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        m.Gt.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
                        let e = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = (0, N.ge)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: t
                        } = this.options;
                        t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
                    }
                    updateScroll(e = "measure") {
                        let t = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t) {
                            let t = n(this.instance);
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: e,
                                isRoot: t,
                                offset: r(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : t
                            }
                        }
                    }
                    resetTransform() {
                        if (!o) return;
                        let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            t = this.projectionDelta && !ej(this.projectionDelta),
                            r = this.getTransformTemplate(),
                            n = r ? r(this.latestValues, "") : void 0,
                            i = n !== this.prevTransformTemplateValue;
                        e && (t || (0, eF.HD)(this.latestValues) || i) && (o(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(e = !0) {
                        var t;
                        let r = this.measurePageBox(),
                            n = this.removeElementScroll(r);
                        return e && (n = this.removeTransform(n)), tl((t = n).x), tl(t.y), {
                            animationId: this.root.animationId,
                            measuredBox: r,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        var e;
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return (0, N.ge)();
                        let r = t.measureViewportBox();
                        if (!((null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) || this.path.some(td))) {
                            let {
                                scroll: e
                            } = this.root;
                            e && ((0, eE.Ql)(r.x, e.offset.x), (0, eE.Ql)(r.y, e.offset.y))
                        }
                        return r
                    }
                    removeElementScroll(e) {
                        var t;
                        let r = (0, N.ge)();
                        if (ew(r, e), null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) return r;
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t],
                                {
                                    scroll: o,
                                    options: i
                                } = n;
                            n !== this.root && o && i.layoutScroll && (o.wasRoot && ew(r, e), (0, eE.Ql)(r.x, o.offset.x), (0, eE.Ql)(r.y, o.offset.y))
                        }
                        return r
                    }
                    applyTransform(e, t = !1) {
                        let r = (0, N.ge)();
                        ew(r, e);
                        for (let e = 0; e < this.path.length; e++) {
                            let n = this.path[e];
                            !t && n.options.layoutScroll && n.scroll && n !== n.root && (0, eE.Ww)(r, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), (0, eF.HD)(n.latestValues) && (0, eE.Ww)(r, n.latestValues)
                        }
                        return (0, eF.HD)(this.latestValues) && (0, eE.Ww)(r, this.latestValues), r
                    }
                    removeTransform(e) {
                        let t = (0, N.ge)();
                        ew(t, e);
                        for (let e = 0; e < this.path.length; e++) {
                            let r = this.path[e];
                            if (!r.instance || !(0, eF.HD)(r.latestValues)) continue;
                            (0, eF.vk)(r.latestValues) && r.updateSnapshot();
                            let n = (0, N.ge)();
                            ew(n, r.measurePageBox()), eC(t, r.latestValues, r.snapshot ? r.snapshot.layoutBox : void 0, n)
                        }
                        return (0, eF.HD)(this.latestValues) && eC(t, this.latestValues), t
                    }
                    setTargetDelta(e) {
                        this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(e) {
                        this.options = { ...this.options,
                            ...e,
                            crossfade: void 0 === e.crossfade || e.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== m.uv.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(e = !1) {
                        var t, r, n, o;
                        let i = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = i.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = i.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = i.isSharedProjectionDirty);
                        let a = !!this.resumingFrom || this !== i;
                        if (!(e || a && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: s,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (s || l)) {
                            if (this.resolvedRelativeTargetAt = m.uv.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let e = this.getClosestProjectingParent();
                                e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, N.ge)(), this.relativeTargetOrigin = (0, N.ge)(), A(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), ew(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = (0, N.ge)(), this.targetWithTransforms = (0, N.ge)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), r = this.target, n = this.relativeTarget, o = this.relativeParent.target, C(r.x, n.x, o.x), C(r.y, n.y, o.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ew(this.target, this.layout.layoutBox), (0, eE.o4)(this.target, this.targetDelta)) : ew(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let e = this.getClosestProjectingParent();
                                    e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, N.ge)(), this.relativeTargetOrigin = (0, N.ge)(), A(this.relativeTargetOrigin, this.target, e.target), ew(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                eK && eG.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || (0, eF.vk)(this.parent.latestValues) || (0, eF.vF)(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var e;
                        let t = this.getLead(),
                            r = !!this.resumingFrom || this !== t,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (n = !1), r && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === m.uv.timestamp && (n = !1), n) return;
                        let {
                            layout: o,
                            layoutId: i
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(o || i)) return;
                        ew(this.layoutCorrected, this.layout.layoutBox);
                        let a = this.treeScale.x,
                            s = this.treeScale.y;
                        (0, eE.OU)(this.layoutCorrected, this.treeScale, this.path, r), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = (0, N.ge)());
                        let {
                            target: l
                        } = t;
                        if (!l) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (ex(this.prevProjectionDelta.x, this.projectionDelta.x), ex(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), k(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === a && this.treeScale.y === s && eN(this.projectionDelta.x, this.prevProjectionDelta.x) && eN(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), eK && eG.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(e = !0) {
                        var t;
                        if (null === (t = this.options.visualElement) || void 0 === t || t.scheduleRender(), e) {
                            let e = this.getStack();
                            e && e.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        this.prevProjectionDelta = (0, N.xU)(), this.projectionDelta = (0, N.xU)(), this.projectionDeltaWithTransform = (0, N.xU)()
                    }
                    setAnimationOrigin(e, t = !1) {
                        let r;
                        let n = this.snapshot,
                            o = n ? n.latestValues : {},
                            i = { ...this.latestValues
                            },
                            a = (0, N.xU)();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
                        let s = (0, N.ge)(),
                            l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            d = !u || u.members.length <= 1,
                            c = !!(l && !d && !0 === this.options.crossfade && !this.path.some(to));
                        this.animationProgress = 0, this.mixTargetDelta = t => {
                            let n = t / 1e3;
                            if (tr(a.x, e.x, n), tr(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, f, p, h;
                                A(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, h = this.relativeTargetOrigin, tn(p.x, h.x, s.x, n), tn(p.y, h.y, s.y, n), r && (u = this.relativeTarget, f = r, eR(u.x, f.x) && eR(u.y, f.y)) && (this.isProjectionDirty = !1), r || (r = (0, N.ge)()), ew(r, this.relativeTarget)
                            }
                            l && (this.animationValues = i, function(e, t, r, n, o, i) {
                                o ? (e.opacity = (0, S.k)(0, void 0 !== r.opacity ? r.opacity : 1, ev(n)), e.opacityExit = (0, S.k)(void 0 !== t.opacity ? t.opacity : 1, 0, eg(n))) : i && (e.opacity = (0, S.k)(void 0 !== t.opacity ? t.opacity : 1, void 0 !== r.opacity ? r.opacity : 1, n));
                                for (let o = 0; o < ef; o++) {
                                    let i = `border${ec[o]}Radius`,
                                        a = em(t, i),
                                        s = em(r, i);
                                    (void 0 !== a || void 0 !== s) && (a || (a = 0), s || (s = 0), 0 === a || 0 === s || eh(a) === eh(s) ? (e[i] = Math.max((0, S.k)(ep(a), ep(s), n), 0), (V.KN.test(s) || V.KN.test(a)) && (e[i] += "%")) : e[i] = s)
                                }(t.rotate || r.rotate) && (e.rotate = (0, S.k)(t.rotate || 0, r.rotate || 0, n))
                            }(i, o, this.latestValues, n, c, d)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(e) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, m.WG)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = m.Gt.update(() => {
                            ee.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, t, r) {
                                let n = (0, eH.S)(0) ? 0 : (0, eU.OQ)(0);
                                return n.start((0, B.f)("", n, 1e3, r)), n.animation
                            }(0, 0, { ...e,
                                onUpdate: t => {
                                    this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t)
                                },
                                onComplete: () => {
                                    e.onComplete && e.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let e = this.getStack();
                        e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let e = this.getLead(),
                            {
                                targetWithTransforms: t,
                                target: r,
                                layout: n,
                                latestValues: o
                            } = e;
                        if (t && r && n) {
                            if (this !== e && this.layout && n && tu(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                r = this.target || (0, N.ge)();
                                let t = T(this.layout.layoutBox.x);
                                r.x.min = e.target.x.min, r.x.max = r.x.min + t;
                                let n = T(this.layout.layoutBox.y);
                                r.y.min = e.target.y.min, r.y.max = r.y.min + n
                            }
                            ew(t, r), (0, eE.Ww)(t, o), k(this.projectionDeltaWithTransform, this.layoutCorrected, t, o)
                        }
                    }
                    registerSharedNode(e, t) {
                        this.sharedNodes.has(e) || this.sharedNodes.set(e, new eI), this.sharedNodes.get(e).add(t);
                        let r = t.options.initialPromotionConfig;
                        t.promote({
                            transition: r ? r.transition : void 0,
                            preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(t) : void 0
                        })
                    }
                    isLead() {
                        let e = this.getStack();
                        return !e || e.lead === this
                    }
                    getLead() {
                        var e;
                        let {
                            layoutId: t
                        } = this.options;
                        return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                    }
                    getPrevLead() {
                        var e;
                        let {
                            layoutId: t
                        } = this.options;
                        return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: e
                        } = this.options;
                        if (e) return this.root.sharedNodes.get(e)
                    }
                    promote({
                        needsReset: e,
                        transition: t,
                        preserveFollowOpacity: r
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, r), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
                            transition: t
                        })
                    }
                    relegate() {
                        let e = this.getStack();
                        return !!e && e.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return;
                        let t = !1,
                            {
                                latestValues: r
                            } = e;
                        if ((r.z || r.rotate || r.rotateX || r.rotateY || r.rotateZ || r.skewX || r.skewY) && (t = !0), !t) return;
                        let n = {};
                        r.z && eQ("z", e, n, this.animationValues);
                        for (let t = 0; t < eX.length; t++) eQ(`rotate${eX[t]}`, e, n, this.animationValues), eQ(`skew${eX[t]}`, e, n, this.animationValues);
                        for (let t in e.render(), n) e.setStaticValue(t, n[t]), this.animationValues && (this.animationValues[t] = n[t]);
                        e.scheduleRender()
                    }
                    getProjectionStyles(e) {
                        var t, r;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return eY;
                        let n = {
                                visibility: ""
                            },
                            o = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = (0, ez.u)(null == e ? void 0 : e.pointerEvents) || "", n.transform = o ? o(this.latestValues, "") : "none", n;
                        let i = this.getLead();
                        if (!this.projectionDelta || !this.layout || !i.target) {
                            let t = {};
                            return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = (0, ez.u)(null == e ? void 0 : e.pointerEvents) || ""), this.hasProjected && !(0, eF.HD)(this.latestValues) && (t.transform = o ? o({}, "") : "none", this.hasProjected = !1), t
                        }
                        let a = i.animationValues || i.latestValues;
                        this.applyTransformsToTarget(), n.transform = function(e, t, r) {
                            let n = "",
                                o = e.x.translate / t.x,
                                i = e.y.translate / t.y,
                                a = (null == r ? void 0 : r.z) || 0;
                            if ((o || i || a) && (n = `translate3d(${o}px, ${i}px, ${a}px) `), (1 !== t.x || 1 !== t.y) && (n += `scale(${1/t.x}, ${1/t.y}) `), r) {
                                let {
                                    transformPerspective: e,
                                    rotate: t,
                                    rotateX: o,
                                    rotateY: i,
                                    skewX: a,
                                    skewY: s
                                } = r;
                                e && (n = `perspective(${e}px) ${n}`), t && (n += `rotate(${t}deg) `), o && (n += `rotateX(${o}deg) `), i && (n += `rotateY(${i}deg) `), a && (n += `skewX(${a}deg) `), s && (n += `skewY(${s}deg) `)
                            }
                            let s = e.x.scale * t.x,
                                l = e.y.scale * t.y;
                            return (1 !== s || 1 !== l) && (n += `scale(${s}, ${l})`), n || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, a), o && (n.transform = o(a, n.transform));
                        let {
                            x: s,
                            y: l
                        } = this.projectionDelta;
                        for (let e in n.transformOrigin = `${100*s.origin}% ${100*l.origin}% 0`, i.animationValues ? n.opacity = i === this ? null !== (r = null !== (t = a.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : n.opacity = i === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0, eo.H) {
                            if (void 0 === a[e]) continue;
                            let {
                                correct: t,
                                applyTo: r
                            } = eo.H[e], o = "none" === n.transform ? a[e] : t(a[e], i);
                            if (r) {
                                let e = r.length;
                                for (let t = 0; t < e; t++) n[r[t]] = o
                            } else n[e] = o
                        }
                        return this.options.layoutId && (n.pointerEvents = i === this ? (0, ez.u)(null == e ? void 0 : e.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(e => {
                            var t;
                            return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                        }), this.root.nodes.forEach(e4), this.root.sharedNodes.clear()
                    }
                }
            }

            function eJ(e) {
                e.updateLayout()
            }

            function e0(e) {
                var t;
                let r = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
                if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
                    let {
                        layoutBox: t,
                        measuredBox: n
                    } = e.layout, {
                        animationType: o
                    } = e.options, i = r.source !== e.layout.source;
                    "size" === o ? _(e => {
                        let n = i ? r.measuredBox[e] : r.layoutBox[e],
                            o = T(n);
                        n.min = t[e].min, n.max = n.min + o
                    }) : tu(o, r.layoutBox, t) && _(n => {
                        let o = i ? r.measuredBox[n] : r.layoutBox[n],
                            a = T(t[n]);
                        o.max = o.min + a, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[n].max = e.relativeTarget[n].min + a)
                    });
                    let a = (0, N.xU)();
                    k(a, t, r.layoutBox);
                    let s = (0, N.xU)();
                    i ? k(s, e.applyTransform(n, !0), r.measuredBox) : k(s, t, r.layoutBox);
                    let l = !ej(a),
                        u = !1;
                    if (!e.resumeFrom) {
                        let n = e.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: o,
                                layout: i
                            } = n;
                            if (o && i) {
                                let a = (0, N.ge)();
                                A(a, r.layoutBox, o.layoutBox);
                                let s = (0, N.ge)();
                                A(s, t, i.layoutBox), eL(a, s) || (u = !0), n.options.layoutRoot && (e.relativeTarget = s, e.relativeTargetOrigin = a, e.relativeParent = n)
                            }
                        }
                    }
                    e.notifyListeners("didUpdate", {
                        layout: t,
                        snapshot: r,
                        delta: s,
                        layoutDelta: a,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (e.isLead()) {
                    let {
                        onExitComplete: t
                    } = e.options;
                    t && t()
                }
                e.options.transition = void 0
            }

            function e1(e) {
                eK && eG.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
            }

            function e2(e) {
                e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
            }

            function e5(e) {
                e.clearSnapshot()
            }

            function e4(e) {
                e.clearMeasurements()
            }

            function e3(e) {
                e.isLayoutDirty = !1
            }

            function e6(e) {
                let {
                    visualElement: t
                } = e.options;
                t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
            }

            function e7(e) {
                e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
            }

            function e9(e) {
                e.resolveTargetDelta()
            }

            function e8(e) {
                e.calcProjection()
            }

            function te(e) {
                e.resetSkewAndRotation()
            }

            function tt(e) {
                e.removeLeadSnapshot()
            }

            function tr(e, t, r) {
                e.translate = (0, S.k)(t.translate, 0, r), e.scale = (0, S.k)(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint
            }

            function tn(e, t, r, n) {
                e.min = (0, S.k)(t.min, r.min, n), e.max = (0, S.k)(t.max, r.max, n)
            }

            function to(e) {
                return e.animationValues && void 0 !== e.animationValues.opacityExit
            }
            let ti = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                ta = e => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
                ts = ta("applewebkit/") && !ta("chrome/") ? Math.round : a.l;

            function tl(e) {
                e.min = ts(e.min), e.max = ts(e.max)
            }

            function tu(e, t, r) {
                return "position" === e || "preserve-aspect" === e && !(.2 >= Math.abs(eO(t) - eO(r)))
            }

            function td(e) {
                var t;
                return e !== e.root && (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
            }
            let tc = eZ({
                    attachResizeListener: (e, t) => (0, c.k)(e, "resize", t),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                tf = {
                    current: void 0
                },
                tp = eZ({
                    measureScroll: e => ({
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }),
                    defaultParent: () => {
                        if (!tf.current) {
                            let e = new tc({});
                            e.mount(window), e.setOptions({
                                layoutScroll: !0
                            }), tf.current = e
                        }
                        return tf.current
                    },
                    resetTransform: (e, t) => {
                        e.style.transform = void 0 !== t ? t : "none"
                    },
                    checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
                });
            var th = r(89806),
                tm = r(19755),
                tv = r(78314);
            let tg = (0, tm.C)({ ...o.W,
                    ...th.n,
                    pan: {
                        Feature: X
                    },
                    drag: {
                        Feature: G,
                        ProjectionNode: tp,
                        MeasureLayout: es
                    },
                    layout: {
                        ProjectionNode: tp,
                        MeasureLayout: es
                    }
                }, tv.J),
                ty = (0, n.I)(tg)
        },
        8216: (e, t, r) => {
            "use strict";
            r.d(t, {
                K: () => h
            });
            var n = r(66879),
                o = r(45107),
                i = r(20555),
                a = r(12271);
            let s = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
            var l = r(40403),
                u = r(18201),
                d = r(22368),
                c = r(55254),
                f = r(1435);
            let p = new Set(["auto", "none", "0"]);
            class h extends d.h {
                constructor(e, t, r, n, o) {
                    super(e, t, r, n, o, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: e,
                        element: t,
                        name: r
                    } = this;
                    if (!t || !t.current) return;
                    super.readKeyframes();
                    for (let r = 0; r < e.length; r++) {
                        let n = e[r];
                        if ("string" == typeof n && (n = n.trim(), (0, a.p)(n))) {
                            let l = function e(t, r, n = 1) {
                                (0, o.V)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                                let [l, u] = function(e) {
                                    let t = s.exec(e);
                                    if (!t) return [, ];
                                    let [, r, n, o] = t;
                                    return [`--${null!=r?r:n}`, o]
                                }(t);
                                if (!l) return;
                                let d = window.getComputedStyle(r).getPropertyValue(l);
                                if (d) {
                                    let e = d.trim();
                                    return (0, i.i)(e) ? parseFloat(e) : e
                                }
                                return (0, a.p)(u) ? e(u, r, n + 1) : u
                            }(n, t.current);
                            void 0 !== l && (e[r] = l), r === e.length - 1 && (this.finalKeyframe = n)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !l.$y.has(r) || 2 !== e.length) return;
                    let [n, d] = e, c = (0, u.n)(n), f = (0, u.n)(d);
                    if (c !== f) {
                        if ((0, l.E4)(c) && (0, l.E4)(f))
                            for (let t = 0; t < e.length; t++) {
                                let r = e[t];
                                "string" == typeof r && (e[t] = parseFloat(r))
                            } else this.needsMeasurement = !0
                    }
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: e,
                        name: t
                    } = this, r = [];
                    for (let t = 0; t < e.length; t++) {
                        var o;
                        ("number" == typeof(o = e[t]) ? 0 === o : null === o || "none" === o || "0" === o || (0, n.$)(o)) && r.push(t)
                    }
                    r.length && function(e, t, r) {
                        let n, o = 0;
                        for (; o < e.length && !n;) {
                            let t = e[o];
                            "string" == typeof t && !p.has(t) && (0, c.V)(t).values.length && (n = e[o]), o++
                        }
                        if (n && r)
                            for (let o of t) e[o] = (0, f.J)(r, n)
                    }(e, r, t)
                }
                measureInitialState() {
                    let {
                        element: e,
                        unresolvedKeyframes: t,
                        name: r
                    } = this;
                    if (!e || !e.current) return;
                    "height" === r && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = l.Hr[r](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
                    let n = t[t.length - 1];
                    void 0 !== n && e.getValue(r, n).jump(n, !1)
                }
                measureEndState() {
                    var e;
                    let {
                        element: t,
                        name: r,
                        unresolvedKeyframes: n
                    } = this;
                    if (!t || !t.current) return;
                    let o = t.getValue(r);
                    o && o.jump(this.measuredOrigin, !1);
                    let i = n.length - 1,
                        a = n[i];
                    n[i] = l.Hr[r](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== a && void 0 === this.finalKeyframe && (this.finalKeyframe = a), (null === (e = this.removedTransforms) || void 0 === e ? void 0 : e.length) && this.removedTransforms.forEach(([e, r]) => {
                        t.getValue(e).set(r)
                    }), this.resolveNoneKeyframes()
                }
            }
        },
        78314: (e, t, r) => {
            "use strict";
            r.d(t, {
                J: () => K
            });
            var n = r(12115),
                o = r(67192),
                i = r(12271),
                a = r(31371),
                s = r(701),
                l = r(98535),
                u = r(99204),
                d = r(77106),
                c = r(15687);
            let f = {
                    current: null
                },
                p = {
                    current: !1
                };
            var h = r(87945),
                m = r(93250),
                v = r(84707),
                g = r(99038),
                y = r(78442),
                b = r(66247);
            let w = new WeakMap;
            var x = r(22368),
                E = r(20555),
                S = r(66879),
                T = r(94064),
                P = r(55254),
                k = r(18201),
                C = r(83510);
            let M = [...k.T, T.y, P.f],
                A = e => M.find((0, C.w)(e));
            var j = r(1435),
                R = r(27865),
                D = r(79125),
                L = r(3307);
            let O = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class N {
                scrapeMotionValuesFromProps(e, t, r) {
                    return {}
                }
                constructor({
                    parent: e,
                    props: t,
                    presenceContext: r,
                    reducedMotionConfig: n,
                    blockInitialAnimation: o,
                    visualState: i
                }, a = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = x.h, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let e = D.k.now();
                        this.renderScheduledAt < e && (this.renderScheduledAt = e, L.Gt.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: s,
                        renderState: l
                    } = i;
                    this.latestValues = s, this.baseTarget = { ...s
                    }, this.initialValues = t.initial ? { ...s
                    } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = r, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = n, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = (0, g.e)(t), this.isVariantNode = (0, g.O)(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
                    let {
                        willChange: u,
                        ...d
                    } = this.scrapeMotionValuesFromProps(t, {}, this);
                    for (let e in d) {
                        let t = d[e];
                        void 0 !== s[e] && (0, v.S)(t) && t.set(s[e], !1)
                    }
                }
                mount(e) {
                    this.current = e, w.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), p.current || function() {
                        if (p.current = !0, c.B) {
                            if (window.matchMedia) {
                                let e = window.matchMedia("(prefers-reduced-motion)"),
                                    t = () => f.current = e.matches;
                                e.addListener(t), t()
                            } else f.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || f.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let e in w.delete(this.current), this.projection && this.projection.unmount(), (0, L.WG)(this.notifyUpdate), (0, L.WG)(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[e].clear();
                    for (let e in this.features) {
                        let t = this.features[e];
                        t && (t.unmount(), t.isMounted = !1)
                    }
                    this.current = null
                }
                bindToMotionValue(e, t) {
                    let r;
                    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
                    let n = a.f.has(e),
                        o = t.on("change", t => {
                            this.latestValues[e] = t, this.props.onUpdate && L.Gt.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        i = t.on("renderRequest", this.scheduleRender);
                    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
                        o(), i(), r && r(), t.owner && t.stop()
                    })
                }
                sortNodePosition(e) {
                    return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
                }
                updateFeatures() {
                    let e = "animation";
                    for (e in b.B) {
                        let t = b.B[e];
                        if (!t) continue;
                        let {
                            isEnabled: r,
                            Feature: n
                        } = t;
                        if (!this.features[e] && n && r(this.props) && (this.features[e] = new n(this)), this.features[e]) {
                            let t = this.features[e];
                            t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, R.ge)()
                }
                getStaticValue(e) {
                    return this.latestValues[e]
                }
                setStaticValue(e, t) {
                    this.latestValues[e] = t
                }
                update(e, t) {
                    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
                    for (let t = 0; t < O.length; t++) {
                        let r = O[t];
                        this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
                        let n = e["on" + r];
                        n && (this.propEventSubscriptions[r] = this.on(r, n))
                    }
                    this.prevMotionValues = function(e, t, r) {
                        for (let n in t) {
                            let o = t[n],
                                i = r[n];
                            if ((0, v.S)(o)) e.addValue(n, o);
                            else if ((0, v.S)(i)) e.addValue(n, (0, m.OQ)(o, {
                                owner: e
                            }));
                            else if (i !== o) {
                                if (e.hasValue(n)) {
                                    let t = e.getValue(n);
                                    !0 === t.liveStyle ? t.jump(o) : t.hasAnimated || t.set(o)
                                } else {
                                    let t = e.getStaticValue(n);
                                    e.addValue(n, (0, m.OQ)(void 0 !== t ? t : o, {
                                        owner: e
                                    }))
                                }
                            }
                        }
                        for (let n in r) void 0 === t[n] && e.removeValue(n);
                        return t
                    }(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(e) {
                    return this.props.variants ? this.props.variants[e] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(e) {
                    let t = this.getClosestVariantNode();
                    if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
                }
                addValue(e, t) {
                    let r = this.values.get(e);
                    t !== r && (r && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get())
                }
                removeValue(e) {
                    this.values.delete(e);
                    let t = this.valueSubscriptions.get(e);
                    t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
                }
                hasValue(e) {
                    return this.values.has(e)
                }
                getValue(e, t) {
                    if (this.props.values && this.props.values[e]) return this.props.values[e];
                    let r = this.values.get(e);
                    return void 0 === r && void 0 !== t && (r = (0, m.OQ)(null === t ? void 0 : t, {
                        owner: this
                    }), this.addValue(e, r)), r
                }
                readValue(e, t) {
                    var r;
                    let n = void 0 === this.latestValues[e] && this.current ? null !== (r = this.getBaseTargetFromProps(this.props, e)) && void 0 !== r ? r : this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
                    return null != n && ("string" == typeof n && ((0, E.i)(n) || (0, S.$)(n)) ? n = parseFloat(n) : !A(n) && P.f.test(t) && (n = (0, j.J)(e, t)), this.setBaseTarget(e, (0, v.S)(n) ? n.get() : n)), (0, v.S)(n) ? n.get() : n
                }
                setBaseTarget(e, t) {
                    this.baseTarget[e] = t
                }
                getBaseTarget(e) {
                    var t;
                    let r;
                    let {
                        initial: n
                    } = this.props;
                    if ("string" == typeof n || "object" == typeof n) {
                        let o = (0, y.a)(this.props, n, null === (t = this.presenceContext) || void 0 === t ? void 0 : t.custom);
                        o && (r = o[e])
                    }
                    if (n && void 0 !== r) return r;
                    let o = this.getBaseTargetFromProps(this.props, e);
                    return void 0 === o || (0, v.S)(o) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : o
                }
                on(e, t) {
                    return this.events[e] || (this.events[e] = new h.v), this.events[e].add(t)
                }
                notify(e, ...t) {
                    this.events[e] && this.events[e].notify(...t)
                }
            }
            var _ = r(8216);
            class I extends N {
                constructor() {
                    super(...arguments), this.KeyframeResolver = _.K
                }
                sortInstanceNodePosition(e, t) {
                    return 2 & e.compareDocumentPosition(t) ? 1 : -1
                }
                getBaseTargetFromProps(e, t) {
                    return e.style ? e.style[t] : void 0
                }
                removeValueFromRenderState(e, {
                    vars: t,
                    style: r
                }) {
                    delete t[e], delete r[e]
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: e
                    } = this.props;
                    (0, v.S)(e) && (this.childSubscription = e.on("change", e => {
                        this.current && (this.current.textContent = `${e}`)
                    }))
                }
            }
            class F extends I {
                constructor() {
                    super(...arguments), this.type = "html", this.renderInstance = l.e
                }
                readValueFromInstance(e, t) {
                    if (a.f.has(t)) {
                        let e = (0, u.D)(t);
                        return e && e.default || 0
                    } {
                        let r = window.getComputedStyle(e),
                            n = ((0, i.j)(t) ? r.getPropertyValue(t) : r[t]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(e, {
                    transformPagePoint: t
                }) {
                    return (0, d.m)(e, t)
                }
                build(e, t, r) {
                    (0, o.O)(e, t, r.transformTemplate)
                }
                scrapeMotionValuesFromProps(e, t, r) {
                    return (0, s.x)(e, t, r)
                }
            }
            var V = r(72126),
                B = r(71721),
                z = r(42717),
                W = r(19552),
                U = r(47928),
                H = r(7986);
            class $ extends I {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = R.ge
                }
                getBaseTargetFromProps(e, t) {
                    return e[t]
                }
                readValueFromInstance(e, t) {
                    if (a.f.has(t)) {
                        let e = (0, u.D)(t);
                        return e && e.default || 0
                    }
                    return t = W.e.has(t) ? t : (0, z.I)(t), e.getAttribute(t)
                }
                scrapeMotionValuesFromProps(e, t, r) {
                    return (0, V.x)(e, t, r)
                }
                build(e, t, r) {
                    (0, B.B)(e, t, this.isSVGTag, r.transformTemplate)
                }
                renderInstance(e, t, r, n) {
                    (0, U.d)(e, t, r, n)
                }
                mount(e) {
                    this.isSVGTag = (0, H.n)(e.tagName), super.mount(e)
                }
            }
            var G = r(75526);
            let K = (e, t) => (0, G.Q)(e) ? new $(t) : new F(t, {
                allowProjection: e !== n.Fragment
            })
        },
        42717: (e, t, r) => {
            "use strict";
            r.d(t, {
                I: () => n
            });
            let n = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
        },
        12271: (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => o,
                p: () => a
            });
            let n = e => t => "string" == typeof t && t.startsWith(e),
                o = n("--"),
                i = n("var(--"),
                a = e => !!i(e) && s.test(e.split("/*")[0].trim()),
                s = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
        },
        75526: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => o
            });
            let n = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function o(e) {
                if ("string" != typeof e || e.includes("-"));
                else if (n.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
                return !1
            }
        },
        40403: (e, t, r) => {
            "use strict";
            r.d(t, {
                $y: () => a,
                E4: () => s,
                Hr: () => p,
                W9: () => f
            });
            var n = r(31371),
                o = r(41535),
                i = r(43406);
            let a = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                s = e => e === o.ai || e === i.px,
                l = (e, t) => parseFloat(e.split(", ")[t]),
                u = (e, t) => (r, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let o = n.match(/^matrix3d\((.+)\)$/u);
                    if (o) return l(o[1], t); {
                        let t = n.match(/^matrix\((.+)\)$/u);
                        return t ? l(t[1], e) : 0
                    }
                },
                d = new Set(["x", "y", "z"]),
                c = n.U.filter(e => !d.has(e));

            function f(e) {
                let t = [];
                return c.forEach(r => {
                    let n = e.getValue(r);
                    void 0 !== n && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0))
                }), t
            }
            let p = {
                width: ({
                    x: e
                }, {
                    paddingLeft: t = "0",
                    paddingRight: r = "0"
                }) => e.max - e.min - parseFloat(t) - parseFloat(r),
                height: ({
                    y: e
                }, {
                    paddingTop: t = "0",
                    paddingBottom: r = "0"
                }) => e.max - e.min - parseFloat(t) - parseFloat(r),
                top: (e, {
                    top: t
                }) => parseFloat(t),
                left: (e, {
                    left: t
                }) => parseFloat(t),
                bottom: ({
                    y: e
                }, {
                    top: t
                }) => parseFloat(t) + (e.max - e.min),
                right: ({
                    x: e
                }, {
                    left: t
                }) => parseFloat(t) + (e.max - e.min),
                x: u(4, 13),
                y: u(5, 14)
            };
            p.translateX = p.x, p.translateY = p.y
        },
        1435: (e, t, r) => {
            "use strict";
            r.d(t, {
                J: () => a
            });
            var n = r(55254),
                o = r(20139),
                i = r(99204);

            function a(e, t) {
                let r = (0, i.D)(e);
                return r !== o.p && (r = n.f), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
            }
        },
        99204: (e, t, r) => {
            "use strict";
            r.d(t, {
                D: () => a
            });
            var n = r(94064),
                o = r(20139);
            let i = { ...r(618).W,
                    color: n.y,
                    backgroundColor: n.y,
                    outlineColor: n.y,
                    fill: n.y,
                    stroke: n.y,
                    borderColor: n.y,
                    borderTopColor: n.y,
                    borderRightColor: n.y,
                    borderBottomColor: n.y,
                    borderLeftColor: n.y,
                    filter: o.p,
                    WebkitFilter: o.p
                },
                a = e => i[e]
        },
        18201: (e, t, r) => {
            "use strict";
            r.d(t, {
                T: () => a,
                n: () => s
            });
            var n = r(41535),
                o = r(43406),
                i = r(83510);
            let a = [n.ai, o.px, o.KN, o.uj, o.vw, o.vh, {
                    test: e => "auto" === e,
                    parse: e => e
                }],
                s = e => a.find((0, i.w)(e))
        },
        618: (e, t, r) => {
            "use strict";
            r.d(t, {
                W: () => l
            });
            var n = r(41535),
                o = r(43406);
            let i = {
                    borderWidth: o.px,
                    borderTopWidth: o.px,
                    borderRightWidth: o.px,
                    borderBottomWidth: o.px,
                    borderLeftWidth: o.px,
                    borderRadius: o.px,
                    radius: o.px,
                    borderTopLeftRadius: o.px,
                    borderTopRightRadius: o.px,
                    borderBottomRightRadius: o.px,
                    borderBottomLeftRadius: o.px,
                    width: o.px,
                    maxWidth: o.px,
                    height: o.px,
                    maxHeight: o.px,
                    top: o.px,
                    right: o.px,
                    bottom: o.px,
                    left: o.px,
                    padding: o.px,
                    paddingTop: o.px,
                    paddingRight: o.px,
                    paddingBottom: o.px,
                    paddingLeft: o.px,
                    margin: o.px,
                    marginTop: o.px,
                    marginRight: o.px,
                    marginBottom: o.px,
                    marginLeft: o.px,
                    backgroundPositionX: o.px,
                    backgroundPositionY: o.px
                },
                a = {
                    rotate: o.uj,
                    rotateX: o.uj,
                    rotateY: o.uj,
                    rotateZ: o.uj,
                    scale: n.hs,
                    scaleX: n.hs,
                    scaleY: n.hs,
                    scaleZ: n.hs,
                    skew: o.uj,
                    skewX: o.uj,
                    skewY: o.uj,
                    distance: o.px,
                    translateX: o.px,
                    translateY: o.px,
                    translateZ: o.px,
                    x: o.px,
                    y: o.px,
                    z: o.px,
                    perspective: o.px,
                    transformPerspective: o.px,
                    opacity: n.X4,
                    originX: o.gQ,
                    originY: o.gQ,
                    originZ: o.px
                },
                s = { ...n.ai,
                    transform: Math.round
                },
                l = { ...i,
                    ...a,
                    zIndex: s,
                    size: o.px,
                    fillOpacity: n.X4,
                    strokeOpacity: n.X4,
                    numOctaves: s
                }
        },
        83510: (e, t, r) => {
            "use strict";
            r.d(t, {
                w: () => n
            });
            let n = e => t => t.test(e)
        },
        67192: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => u
            });
            var n = r(31371);
            let o = (e, t) => t && "number" == typeof e ? t.transform(e) : e;
            var i = r(618);
            let a = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                s = n.U.length;
            var l = r(12271);

            function u(e, t, r) {
                let {
                    style: u,
                    vars: d,
                    transformOrigin: c
                } = e, f = !1, p = !1;
                for (let e in t) {
                    let r = t[e];
                    if (n.f.has(e)) {
                        f = !0;
                        continue
                    }
                    if ((0, l.j)(e)) {
                        d[e] = r;
                        continue
                    } {
                        let t = o(r, i.W[e]);
                        e.startsWith("origin") ? (p = !0, c[e] = t) : u[e] = t
                    }
                }
                if (!t.transform && (f || r ? u.transform = function(e, t, r) {
                        let l = "",
                            u = !0;
                        for (let d = 0; d < s; d++) {
                            let s = n.U[d],
                                c = e[s];
                            if (void 0 === c) continue;
                            let f = !0;
                            if (!(f = "number" == typeof c ? c === (s.startsWith("scale") ? 1 : 0) : 0 === parseFloat(c)) || r) {
                                let e = o(c, i.W[s]);
                                if (!f) {
                                    u = !1;
                                    let t = a[s] || s;
                                    l += `${t}(${e}) `
                                }
                                r && (t[s] = e)
                            }
                        }
                        return l = l.trim(), r ? l = r(t, u ? "" : l) : u && (l = "none"), l
                    }(t, e.transform, r) : u.transform && (u.transform = "none")), p) {
                    let {
                        originX: e = "50%",
                        originY: t = "50%",
                        originZ: r = 0
                    } = c;
                    u.transformOrigin = `${e} ${t} ${r}`
                }
            }
        },
        98535: (e, t, r) => {
            "use strict";

            function n(e, {
                style: t,
                vars: r
            }, n, o) {
                for (let i in Object.assign(e.style, t, o && o.getProjectionStyles(n)), r) e.style.setProperty(i, r[i])
            }
            r.d(t, {
                e: () => n
            })
        },
        701: (e, t, r) => {
            "use strict";
            r.d(t, {
                x: () => i
            });
            var n = r(59246),
                o = r(84707);

            function i(e, t, r) {
                var i;
                let {
                    style: a
                } = e, s = {};
                for (let l in a)((0, o.S)(a[l]) || t.style && (0, o.S)(t.style[l]) || (0, n.z)(l, e) || (null === (i = null == r ? void 0 : r.getValue(l)) || void 0 === i ? void 0 : i.liveStyle) !== void 0) && (s[l] = a[l]);
                return s
            }
        },
        31371: (e, t, r) => {
            "use strict";
            r.d(t, {
                U: () => n,
                f: () => o
            });
            let n = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                o = new Set(n)
        },
        71721: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => l
            });
            var n = r(67192),
                o = r(43406);

            function i(e, t, r) {
                return "string" == typeof e ? e : o.px.transform(t + r * e)
            }
            let a = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                s = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function l(e, {
                attrX: t,
                attrY: r,
                attrScale: l,
                originX: u,
                originY: d,
                pathLength: c,
                pathSpacing: f = 1,
                pathOffset: p = 0,
                ...h
            }, m, v) {
                if ((0, n.O)(e, h, v), m) {
                    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                    return
                }
                e.attrs = e.style, e.style = {};
                let {
                    attrs: g,
                    style: y,
                    dimensions: b
                } = e;
                g.transform && (b && (y.transform = g.transform), delete g.transform), b && (void 0 !== u || void 0 !== d || y.transform) && (y.transformOrigin = function(e, t, r) {
                    let n = i(t, e.x, e.width),
                        o = i(r, e.y, e.height);
                    return `${n} ${o}`
                }(b, void 0 !== u ? u : .5, void 0 !== d ? d : .5)), void 0 !== t && (g.x = t), void 0 !== r && (g.y = r), void 0 !== l && (g.scale = l), void 0 !== c && function(e, t, r = 1, n = 0, i = !0) {
                    e.pathLength = 1;
                    let l = i ? a : s;
                    e[l.offset] = o.px.transform(-n);
                    let u = o.px.transform(t),
                        d = o.px.transform(r);
                    e[l.array] = `${u} ${d}`
                }(g, c, f, p, !1)
            }
        },
        19552: (e, t, r) => {
            "use strict";
            r.d(t, {
                e: () => n
            });
            let n = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
        },
        7986: (e, t, r) => {
            "use strict";
            r.d(t, {
                n: () => n
            });
            let n = e => "string" == typeof e && "svg" === e.toLowerCase()
        },
        47928: (e, t, r) => {
            "use strict";
            r.d(t, {
                d: () => a
            });
            var n = r(42717),
                o = r(98535),
                i = r(19552);

            function a(e, t, r, a) {
                for (let r in (0, o.e)(e, t, void 0, a), t.attrs) e.setAttribute(i.e.has(r) ? r : (0, n.I)(r), t.attrs[r])
            }
        },
        72126: (e, t, r) => {
            "use strict";
            r.d(t, {
                x: () => a
            });
            var n = r(84707),
                o = r(701),
                i = r(31371);

            function a(e, t, r) {
                let a = (0, o.x)(e, t, r);
                for (let r in e)((0, n.S)(e[r]) || (0, n.S)(t[r])) && (a[-1 !== i.U.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = e[r]);
                return a
            }
        },
        22368: (e, t, r) => {
            "use strict";
            r.d(t, {
                h: () => c,
                q: () => d
            });
            var n = r(40403),
                o = r(3307);
            let i = new Set,
                a = !1,
                s = !1;

            function l() {
                if (s) {
                    let e = Array.from(i).filter(e => e.needsMeasurement),
                        t = new Set(e.map(e => e.element)),
                        r = new Map;
                    t.forEach(e => {
                        let t = (0, n.W9)(e);
                        t.length && (r.set(e, t), e.render())
                    }), e.forEach(e => e.measureInitialState()), t.forEach(e => {
                        e.render();
                        let t = r.get(e);
                        t && t.forEach(([t, r]) => {
                            var n;
                            null === (n = e.getValue(t)) || void 0 === n || n.set(r)
                        })
                    }), e.forEach(e => e.measureEndState()), e.forEach(e => {
                        void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
                    })
                }
                s = !1, a = !1, i.forEach(e => e.complete()), i.clear()
            }

            function u() {
                i.forEach(e => {
                    e.readKeyframes(), e.needsMeasurement && (s = !0)
                })
            }

            function d() {
                u(), l()
            }
            class c {
                constructor(e, t, r, n, o, i = !1) {
                    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = r, this.motionValue = n, this.element = o, this.isAsync = i
                }
                scheduleResolve() {
                    this.isScheduled = !0, this.isAsync ? (i.add(this), a || (a = !0, o.Gt.read(u), o.Gt.resolveKeyframes(l))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: e,
                        name: t,
                        element: r,
                        motionValue: n
                    } = this;
                    for (let o = 0; o < e.length; o++)
                        if (null === e[o]) {
                            if (0 === o) {
                                let o = null == n ? void 0 : n.get(),
                                    i = e[e.length - 1];
                                if (void 0 !== o) e[0] = o;
                                else if (r && t) {
                                    let n = r.readValue(t, i);
                                    null != n && (e[0] = n)
                                }
                                void 0 === e[0] && (e[0] = i), n && void 0 === o && n.set(e[0])
                            } else e[o] = e[o - 1]
                        }
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete() {
                    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), i.delete(this)
                }
                cancel() {
                    this.isComplete || (this.isScheduled = !1, i.delete(this))
                }
                resume() {
                    this.isComplete || this.scheduleResolve()
                }
            }
        },
        99038: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => s,
                e: () => a
            });
            var n = r(5385),
                o = r(62896),
                i = r(34543);

            function a(e) {
                return (0, n.N)(e.animate) || i._.some(t => (0, o.w)(e[t]))
            }

            function s(e) {
                return !!(a(e) || e.variants)
            }
        },
        62896: (e, t, r) => {
            "use strict";

            function n(e) {
                return "string" == typeof e || Array.isArray(e)
            }
            r.d(t, {
                w: () => n
            })
        },
        78442: (e, t, r) => {
            "use strict";

            function n(e, t, r, n) {
                if ("function" == typeof t || ("string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t)) {
                    let [o, i] = function(e) {
                        let t = [{}, {}];
                        return null == e || e.values.forEach((e, r) => {
                            t[0][r] = e.get(), t[1][r] = e.getVelocity()
                        }), t
                    }(n);
                    t = t(void 0 !== r ? r : e.custom, o, i)
                }
                return t
            }
            r.d(t, {
                a: () => n
            })
        },
        34543: (e, t, r) => {
            "use strict";
            r.d(t, {
                U: () => n,
                _: () => o
            });
            let n = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                o = ["initial", ...n]
        },
        93903: (e, t, r) => {
            "use strict";
            r.d(t, {
                W: () => n
            });
            let n = {
                skipAnimations: !1,
                useManualTiming: !1
            }
        },
        24093: (e, t, r) => {
            "use strict";

            function n(e, t) {
                -1 === e.indexOf(t) && e.push(t)
            }

            function o(e, t) {
                let r = e.indexOf(t);
                r > -1 && e.splice(r, 1)
            }
            r.d(t, {
                Ai: () => o,
                Kq: () => n
            })
        },
        16611: (e, t, r) => {
            "use strict";
            r.d(t, {
                q: () => n
            });
            let n = (e, t, r) => r > t ? t : r < e ? e : r
        },
        37751: (e, t, r) => {
            "use strict";
            r.d(t, {
                G: () => u
            });
            var n = r(16611),
                o = r(15068),
                i = r(26781),
                a = r(26054),
                s = r(45107),
                l = r(91671);

            function u(e, t, {
                clamp: r = !0,
                ease: d,
                mixer: c
            } = {}) {
                let f = e.length;
                if ((0, s.V)(f === t.length, "Both input and output ranges must be the same length"), 1 === f) return () => t[0];
                if (2 === f && e[0] === e[1]) return () => t[1];
                e[0] > e[f - 1] && (e = [...e].reverse(), t = [...t].reverse());
                let p = function(e, t, r) {
                        let n = [],
                            i = r || l.j,
                            s = e.length - 1;
                        for (let r = 0; r < s; r++) {
                            let s = i(e[r], e[r + 1]);
                            if (t) {
                                let e = Array.isArray(t) ? t[r] || a.l : t;
                                s = (0, o.F)(e, s)
                            }
                            n.push(s)
                        }
                        return n
                    }(t, d, c),
                    h = p.length,
                    m = t => {
                        let r = 0;
                        if (h > 1)
                            for (; r < e.length - 2 && !(t < e[r + 1]); r++);
                        let n = (0, i.q)(e[r], e[r + 1], t);
                        return p[r](n)
                    };
                return r ? t => m((0, n.q)(e[0], e[f - 1], t)) : m
            }
        },
        15687: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => n
            });
            let n = "undefined" != typeof window
        },
        20555: (e, t, r) => {
            "use strict";
            r.d(t, {
                i: () => n
            });
            let n = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
        },
        78674: (e, t, r) => {
            "use strict";

            function n(e) {
                return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
            }
            r.d(t, {
                X: () => n
            })
        },
        66879: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => n
            });
            let n = e => /^0[^.\s]+$/u.test(e)
        },
        91671: (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => P
            });
            var n = r(50010),
                o = r(45107);

            function i(e, t, r) {
                return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
            }
            var a = r(98967),
                s = r(2664),
                l = r(83020);

            function u(e, t) {
                return r => r > 0 ? t : e
            }
            let d = (e, t, r) => {
                    let n = e * e,
                        o = r * (t * t - n) + n;
                    return o < 0 ? 0 : Math.sqrt(o)
                },
                c = [a.u, s.B, l.V],
                f = e => c.find(t => t.test(e));

            function p(e) {
                let t = f(e);
                if ((0, o.$)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t) return !1;
                let r = t.parse(e);
                return t === l.V && (r = function({
                    hue: e,
                    saturation: t,
                    lightness: r,
                    alpha: n
                }) {
                    e /= 360, r /= 100;
                    let o = 0,
                        a = 0,
                        s = 0;
                    if (t /= 100) {
                        let n = r < .5 ? r * (1 + t) : r + t - r * t,
                            l = 2 * r - n;
                        o = i(l, n, e + 1 / 3), a = i(l, n, e), s = i(l, n, e - 1 / 3)
                    } else o = a = s = r;
                    return {
                        red: Math.round(255 * o),
                        green: Math.round(255 * a),
                        blue: Math.round(255 * s),
                        alpha: n
                    }
                }(r)), r
            }
            let h = (e, t) => {
                let r = p(e),
                    o = p(t);
                if (!r || !o) return u(e, t);
                let i = { ...r
                };
                return e => (i.red = d(r.red, o.red, e), i.green = d(r.green, o.green, e), i.blue = d(r.blue, o.blue, e), i.alpha = (0, n.k)(r.alpha, o.alpha, e), s.B.transform(i))
            };
            var m = r(15068),
                v = r(94064),
                g = r(55254),
                y = r(12271);
            let b = new Set(["none", "hidden"]);

            function w(e, t) {
                return r => (0, n.k)(e, t, r)
            }

            function x(e) {
                return "number" == typeof e ? w : "string" == typeof e ? (0, y.p)(e) ? u : v.y.test(e) ? h : T : Array.isArray(e) ? E : "object" == typeof e ? v.y.test(e) ? h : S : u
            }

            function E(e, t) {
                let r = [...e],
                    n = r.length,
                    o = e.map((e, r) => x(e)(e, t[r]));
                return e => {
                    for (let t = 0; t < n; t++) r[t] = o[t](e);
                    return r
                }
            }

            function S(e, t) {
                let r = { ...e,
                        ...t
                    },
                    n = {};
                for (let o in r) void 0 !== e[o] && void 0 !== t[o] && (n[o] = x(e[o])(e[o], t[o]));
                return e => {
                    for (let t in n) r[t] = n[t](e);
                    return r
                }
            }
            let T = (e, t) => {
                let r = g.f.createTransformer(t),
                    n = (0, g.V)(e),
                    i = (0, g.V)(t);
                return n.indexes.var.length === i.indexes.var.length && n.indexes.color.length === i.indexes.color.length && n.indexes.number.length >= i.indexes.number.length ? b.has(e) && !i.values.length || b.has(t) && !n.values.length ? function(e, t) {
                    return b.has(e) ? r => r <= 0 ? e : t : r => r >= 1 ? t : e
                }(e, t) : (0, m.F)(E(function(e, t) {
                    var r;
                    let n = [],
                        o = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let i = 0; i < t.values.length; i++) {
                        let a = t.types[i],
                            s = e.indexes[a][o[a]],
                            l = null !== (r = e.values[s]) && void 0 !== r ? r : 0;
                        n[i] = l, o[a]++
                    }
                    return n
                }(n, i), i.values), r) : ((0, o.$)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), u(e, t))
            };

            function P(e, t, r) {
                return "number" == typeof e && "number" == typeof t && "number" == typeof r ? (0, n.k)(e, t, r) : x(e)(e, t)
            }
        },
        50010: (e, t, r) => {
            "use strict";
            r.d(t, {
                k: () => n
            });
            let n = (e, t, r) => e + (t - e) * r
        },
        15068: (e, t, r) => {
            "use strict";
            r.d(t, {
                F: () => o
            });
            let n = (e, t) => r => t(e(r)),
                o = (...e) => e.reduce(n)
        },
        26781: (e, t, r) => {
            "use strict";
            r.d(t, {
                q: () => n
            });
            let n = (e, t, r) => {
                let n = t - e;
                return 0 === n ? 1 : (r - e) / n
            }
        },
        55238: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => o,
                K: () => i
            });
            var n = r(82043);
            let o = e => !!(e && "object" == typeof e && e.mix && e.toValue),
                i = e => (0, n.p)(e) ? e[e.length - 1] || 0 : e
        },
        87945: (e, t, r) => {
            "use strict";
            r.d(t, {
                v: () => o
            });
            var n = r(24093);
            class o {
                constructor() {
                    this.subscriptions = []
                }
                add(e) {
                    return (0, n.Kq)(this.subscriptions, e), () => (0, n.Ai)(this.subscriptions, e)
                }
                notify(e, t, r) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](e, t, r);
                        else
                            for (let o = 0; o < n; o++) {
                                let n = this.subscriptions[o];
                                n && n(e, t, r)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        14302: (e, t, r) => {
            "use strict";
            r.d(t, {
                X: () => o,
                f: () => n
            });
            let n = e => 1e3 * e,
                o = e => e / 1e3
        },
        99234: (e, t, r) => {
            "use strict";
            r.d(t, {
                M: () => o
            });
            var n = r(12115);

            function o(e) {
                let t = (0, n.useRef)(null);
                return null === t.current && (t.current = e()), t.current
            }
        },
        35403: (e, t, r) => {
            "use strict";
            r.d(t, {
                E: () => o
            });
            var n = r(12115);
            let o = r(15687).B ? n.useLayoutEffect : n.useEffect
        },
        42206: (e, t, r) => {
            "use strict";

            function n(e, t) {
                return t ? 1e3 / t * e : 0
            }
            r.d(t, {
                f: () => n
            })
        },
        93250: (e, t, r) => {
            "use strict";
            r.d(t, {
                OQ: () => d,
                bt: () => l
            });
            var n = r(87945),
                o = r(42206),
                i = r(79125),
                a = r(3307);
            let s = e => !isNaN(parseFloat(e)),
                l = {
                    current: void 0
                };
            class u {
                constructor(e, t = {}) {
                    this.version = "11.15.0", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e, t = !0) => {
                        let r = i.k.now();
                        this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner
                }
                setCurrent(e) {
                    this.current = e, this.updatedAt = i.k.now(), null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = s(this.current))
                }
                setPrevFrameValue(e = this.current) {
                    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
                }
                onChange(e) {
                    return this.on("change", e)
                }
                on(e, t) {
                    this.events[e] || (this.events[e] = new n.v);
                    let r = this.events[e].add(t);
                    return "change" === e ? () => {
                        r(), a.Gt.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : r
                }
                clearListeners() {
                    for (let e in this.events) this.events[e].clear()
                }
                attach(e, t) {
                    this.passiveEffect = e, this.stopPassiveEffect = t
                }
                set(e, t = !0) {
                    t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
                }
                setWithVelocity(e, t, r) {
                    this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - r
                }
                jump(e, t = !0) {
                    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return l.current && l.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    let e = i.k.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
                    let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return (0, o.f)(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
                }
                start(e) {
                    return this.stop(), new Promise(t => {
                        this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function d(e, t) {
                return new u(e, t)
            }
        },
        98967: (e, t, r) => {
            "use strict";
            r.d(t, {
                u: () => o
            });
            var n = r(2664);
            let o = {
                test: (0, r(60233).$)("#"),
                parse: function(e) {
                    let t = "",
                        r = "",
                        n = "",
                        o = "";
                    return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
                        red: parseInt(t, 16),
                        green: parseInt(r, 16),
                        blue: parseInt(n, 16),
                        alpha: o ? parseInt(o, 16) / 255 : 1
                    }
                },
                transform: n.B.transform
            }
        },
        83020: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => s
            });
            var n = r(41535),
                o = r(43406),
                i = r(76165),
                a = r(60233);
            let s = {
                test: (0, a.$)("hsl", "hue"),
                parse: (0, a.q)("hue", "saturation", "lightness"),
                transform: ({
                    hue: e,
                    saturation: t,
                    lightness: r,
                    alpha: a = 1
                }) => "hsla(" + Math.round(e) + ", " + o.KN.transform((0, i.a)(t)) + ", " + o.KN.transform((0, i.a)(r)) + ", " + (0, i.a)(n.X4.transform(a)) + ")"
            }
        },
        94064: (e, t, r) => {
            "use strict";
            r.d(t, {
                y: () => a
            });
            var n = r(98967),
                o = r(83020),
                i = r(2664);
            let a = {
                test: e => i.B.test(e) || n.u.test(e) || o.V.test(e),
                parse: e => i.B.test(e) ? i.B.parse(e) : o.V.test(e) ? o.V.parse(e) : n.u.parse(e),
                transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? i.B.transform(e) : o.V.transform(e)
            }
        },
        2664: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => u
            });
            var n = r(16611),
                o = r(41535),
                i = r(76165),
                a = r(60233);
            let s = e => (0, n.q)(0, 255, e),
                l = { ...o.ai,
                    transform: e => Math.round(s(e))
                },
                u = {
                    test: (0, a.$)("rgb", "red"),
                    parse: (0, a.q)("red", "green", "blue"),
                    transform: ({
                        red: e,
                        green: t,
                        blue: r,
                        alpha: n = 1
                    }) => "rgba(" + l.transform(e) + ", " + l.transform(t) + ", " + l.transform(r) + ", " + (0, i.a)(o.X4.transform(n)) + ")"
                }
        },
        60233: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => i,
                q: () => a
            });
            var n = r(41014);
            let o = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                i = (e, t) => r => !!("string" == typeof r && o.test(r) && r.startsWith(e) || t && null != r && Object.prototype.hasOwnProperty.call(r, t)),
                a = (e, t, r) => o => {
                    if ("string" != typeof o) return o;
                    let [i, a, s, l] = o.match(n.S);
                    return {
                        [e]: parseFloat(i),
                        [t]: parseFloat(a),
                        [r]: parseFloat(s),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                }
        },
        20139: (e, t, r) => {
            "use strict";
            r.d(t, {
                p: () => l
            });
            var n = r(55254),
                o = r(41014);
            let i = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function a(e) {
                let [t, r] = e.slice(0, -1).split("(");
                if ("drop-shadow" === t) return e;
                let [n] = r.match(o.S) || [];
                if (!n) return e;
                let a = r.replace(n, ""),
                    s = i.has(t) ? 1 : 0;
                return n !== r && (s *= 100), t + "(" + s + a + ")"
            }
            let s = /\b([a-z-]*)\(.*?\)/gu,
                l = { ...n.f,
                    getAnimatableNone: e => {
                        let t = e.match(s);
                        return t ? t.map(a).join(" ") : e
                    }
                }
        },
        55254: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => d,
                f: () => h
            });
            var n = r(94064);
            let o = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
            var i = r(41014),
                a = r(76165);
            let s = "number",
                l = "color",
                u = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function d(e) {
                let t = e.toString(),
                    r = [],
                    o = {
                        color: [],
                        number: [],
                        var: []
                    },
                    i = [],
                    a = 0,
                    d = t.replace(u, e => (n.y.test(e) ? (o.color.push(a), i.push(l), r.push(n.y.parse(e))) : e.startsWith("var(") ? (o.var.push(a), i.push("var"), r.push(e)) : (o.number.push(a), i.push(s), r.push(parseFloat(e))), ++a, "${}")).split("${}");
                return {
                    values: r,
                    split: d,
                    indexes: o,
                    types: i
                }
            }

            function c(e) {
                return d(e).values
            }

            function f(e) {
                let {
                    split: t,
                    types: r
                } = d(e), o = t.length;
                return e => {
                    let i = "";
                    for (let u = 0; u < o; u++)
                        if (i += t[u], void 0 !== e[u]) {
                            let t = r[u];
                            t === s ? i += (0, a.a)(e[u]) : t === l ? i += n.y.transform(e[u]) : i += e[u]
                        }
                    return i
                }
            }
            let p = e => "number" == typeof e ? 0 : e,
                h = {
                    test: function(e) {
                        var t, r;
                        return isNaN(e) && "string" == typeof e && ((null === (t = e.match(i.S)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (r = e.match(o)) || void 0 === r ? void 0 : r.length) || 0) > 0
                    },
                    parse: c,
                    createTransformer: f,
                    getAnimatableNone: function(e) {
                        let t = c(e);
                        return f(e)(t.map(p))
                    }
                }
        },
        41535: (e, t, r) => {
            "use strict";
            r.d(t, {
                X4: () => i,
                ai: () => o,
                hs: () => a
            });
            var n = r(16611);
            let o = {
                    test: e => "number" == typeof e,
                    parse: parseFloat,
                    transform: e => e
                },
                i = { ...o,
                    transform: e => (0, n.q)(0, 1, e)
                },
                a = { ...o,
                    default: 1
                }
        },
        43406: (e, t, r) => {
            "use strict";
            r.d(t, {
                KN: () => i,
                gQ: () => u,
                px: () => a,
                uj: () => o,
                vh: () => s,
                vw: () => l
            });
            let n = e => ({
                    test: t => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
                    parse: parseFloat,
                    transform: t => `${t}${e}`
                }),
                o = n("deg"),
                i = n("%"),
                a = n("px"),
                s = n("vh"),
                l = n("vw"),
                u = { ...i,
                    parse: e => i.parse(e) / 100,
                    transform: e => i.transform(100 * e)
                }
        },
        41014: (e, t, r) => {
            "use strict";
            r.d(t, {
                S: () => n
            });
            let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
        },
        76165: (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => n
            });
            let n = e => Math.round(1e5 * e) / 1e5
        },
        34420: (e, t, r) => {
            "use strict";
            r.d(t, {
                d: () => s
            });
            var n = r(12115),
                o = r(93250),
                i = r(27249),
                a = r(99234);

            function s(e) {
                let t = (0, a.M)(() => (0, o.OQ)(e)),
                    {
                        isStatic: r
                    } = (0, n.useContext)(i.Q);
                if (r) {
                    let [, r] = (0, n.useState)(e);
                    (0, n.useEffect)(() => t.on("change", r), [])
                }
                return t
            }
        },
        23160: (e, t, r) => {
            "use strict";
            r.d(t, {
                G: () => f
            });
            var n = r(37751);
            let o = e => e && "object" == typeof e && e.mix,
                i = e => o(e) ? e.mix : void 0;
            var a = r(34420),
                s = r(35403),
                l = r(3307);

            function u(e, t) {
                let r = (0, a.d)(t()),
                    n = () => r.set(t());
                return n(), (0, s.E)(() => {
                    let t = () => l.Gt.preRender(n, !1, !0),
                        r = e.map(e => e.on("change", t));
                    return () => {
                        r.forEach(e => e()), (0, l.WG)(n)
                    }
                }), r
            }
            var d = r(99234),
                c = r(93250);

            function f(e, t, r, o) {
                if ("function" == typeof e) return function(e) {
                    c.bt.current = [], e();
                    let t = u(c.bt.current, e);
                    return c.bt.current = void 0, t
                }(e);
                let a = "function" == typeof t ? t : function(...e) {
                    let t = !Array.isArray(e[0]),
                        r = t ? 0 : -1,
                        o = e[0 + r],
                        a = e[1 + r],
                        s = e[2 + r],
                        l = e[3 + r],
                        u = (0, n.G)(a, s, {
                            mixer: i(s[0]),
                            ...l
                        });
                    return t ? u(o) : u
                }(t, r, o);
                return Array.isArray(e) ? p(e, a) : p([e], ([e]) => a(e))
            }

            function p(e, t) {
                let r = (0, d.M)(() => []);
                return u(e, () => {
                    r.length = 0;
                    let n = e.length;
                    for (let t = 0; t < n; t++) r[t] = e[t].get();
                    return t(r)
                })
            }
        },
        86901: (e, t, r) => {
            "use strict";
            r.d(t, {
                g: () => o
            });
            var n = r(84707);

            function o(e, t) {
                let r = e.getValue("willChange");
                if ((0, n.S)(r) && r.add) return r.add(t)
            }
        },
        84707: (e, t, r) => {
            "use strict";
            r.d(t, {
                S: () => n
            });
            let n = e => !!(e && e.getVelocity)
        },
        67365: (e, t, r) => {
            "use strict";
            r.d(t, {
                u: () => i
            });
            var n = r(55238),
                o = r(84707);

            function i(e) {
                let t = (0, o.S)(e) ? e.get() : e;
                return (0, n.B)(t) ? t.toValue() : t
            }
        },
        10733: (e, t, r) => {
            "use strict";
            let n, o;
            r.d(t, {
                P2: () => f
            });
            let i = (e, t) => t.some(t => e instanceof t),
                a = new WeakMap,
                s = new WeakMap,
                l = new WeakMap,
                u = {
                    get(e, t, r) {
                        if (e instanceof IDBTransaction) {
                            if ("done" === t) return a.get(e);
                            if ("store" === t) return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0])
                        }
                        return d(e[t])
                    },
                    set: (e, t, r) => (e[t] = r, !0),
                    has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
                };

            function d(e) {
                var t;
                if (e instanceof IDBRequest) return function(e) {
                    let t = new Promise((t, r) => {
                        let n = () => {
                                e.removeEventListener("success", o), e.removeEventListener("error", i)
                            },
                            o = () => {
                                t(d(e.result)), n()
                            },
                            i = () => {
                                r(e.error), n()
                            };
                        e.addEventListener("success", o), e.addEventListener("error", i)
                    });
                    return l.set(t, e), t
                }(e);
                if (s.has(e)) return s.get(e);
                let r = "function" == typeof(t = e) ? (o || (o = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function(...e) {
                    return t.apply(c(this), e), d(this.request)
                } : function(...e) {
                    return d(t.apply(c(this), e))
                } : (t instanceof IDBTransaction && function(e) {
                    if (a.has(e)) return;
                    let t = new Promise((t, r) => {
                        let n = () => {
                                e.removeEventListener("complete", o), e.removeEventListener("error", i), e.removeEventListener("abort", i)
                            },
                            o = () => {
                                t(), n()
                            },
                            i = () => {
                                r(e.error || new DOMException("AbortError", "AbortError")), n()
                            };
                        e.addEventListener("complete", o), e.addEventListener("error", i), e.addEventListener("abort", i)
                    });
                    a.set(e, t)
                }(t), i(t, n || (n = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]))) ? new Proxy(t, u) : t;
                return r !== e && (s.set(e, r), l.set(r, e)), r
            }
            let c = e => l.get(e);

            function f(e, t, {
                blocked: r,
                upgrade: n,
                blocking: o,
                terminated: i
            } = {}) {
                let a = indexedDB.open(e, t),
                    s = d(a);
                return n && a.addEventListener("upgradeneeded", e => {
                    n(d(a.result), e.oldVersion, e.newVersion, d(a.transaction), e)
                }), r && a.addEventListener("blocked", e => r(e.oldVersion, e.newVersion, e)), s.then(e => {
                    i && e.addEventListener("close", () => i()), o && e.addEventListener("versionchange", e => o(e.oldVersion, e.newVersion, e))
                }).catch(() => {}), s
            }
            let p = ["get", "getKey", "getAll", "getAllKeys", "count"],
                h = ["put", "add", "delete", "clear"],
                m = new Map;

            function v(e, t) {
                if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t)) return;
                if (m.get(t)) return m.get(t);
                let r = t.replace(/FromIndex$/, ""),
                    n = t !== r,
                    o = h.includes(r);
                if (!(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(o || p.includes(r))) return;
                let i = async function(e, ...t) {
                    let i = this.transaction(e, o ? "readwrite" : "readonly"),
                        a = i.store;
                    return n && (a = a.index(t.shift())), (await Promise.all([a[r](...t), o && i.done]))[0]
                };
                return m.set(t, i), i
            }
            u = (e => ({ ...e,
                get: (t, r, n) => v(t, r) || e.get(t, r, n),
                has: (t, r) => !!v(t, r) || e.has(t, r)
            }))(u);
            let g = ["continue", "continuePrimaryKey", "advance"],
                y = {},
                b = new WeakMap,
                w = new WeakMap,
                x = {
                    get(e, t) {
                        if (!g.includes(t)) return e[t];
                        let r = y[t];
                        return r || (r = y[t] = function(...e) {
                            b.set(this, w.get(this)[t](...e))
                        }), r
                    }
                };
            async function* E(...e) {
                let t = this;
                if (t instanceof IDBCursor || (t = await t.openCursor(...e)), !t) return;
                let r = new Proxy(t, x);
                for (w.set(r, t), l.set(r, c(t)); t;) yield r, t = await (b.get(r) || t.continue()), b.delete(r)
            }

            function S(e, t) {
                return t === Symbol.asyncIterator && i(e, [IDBIndex, IDBObjectStore, IDBCursor]) || "iterate" === t && i(e, [IDBIndex, IDBObjectStore])
            }
            u = (e => ({ ...e,
                get: (t, r, n) => S(t, r) ? E : e.get(t, r, n),
                has: (t, r) => S(t, r) || e.has(t, r)
            }))(u)
        },
        29889: (e, t, r) => {
            "use strict";
            r.d(t, {
                PT: () => a,
                Mc: () => s,
                c$: () => m,
                Wp: () => v
            });
            let n = {
                x: !1,
                y: !1
            };

            function o(e, t) {
                let r = function(e, t, r) {
                        if (e instanceof Element) return [e];
                        if ("string" == typeof e) {
                            let t = document.querySelectorAll(e);
                            return t ? Array.from(t) : []
                        }
                        return Array.from(e)
                    }(e),
                    n = new AbortController;
                return [r, {
                    passive: !0,
                    ...t,
                    signal: n.signal
                }, () => n.abort()]
            }

            function i(e) {
                return t => {
                    "touch" === t.pointerType || n.x || n.y || e(t)
                }
            }

            function a(e, t, r = {}) {
                let [n, s, l] = o(e, r), u = i(e => {
                    let {
                        target: r
                    } = e, n = t(e);
                    if (!n || !r) return;
                    let o = i(e => {
                        n(e), r.removeEventListener("pointerleave", o)
                    });
                    r.addEventListener("pointerleave", o, s)
                });
                return n.forEach(e => {
                    e.addEventListener("pointerenter", u, s)
                }), l
            }
            let s = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary,
                l = new WeakSet;

            function u(e) {
                return t => {
                    "Enter" === t.key && e(t)
                }
            }

            function d(e, t) {
                e.dispatchEvent(new PointerEvent("pointer" + t, {
                    isPrimary: !0,
                    bubbles: !0
                }))
            }
            let c = (e, t) => {
                    let r = e.currentTarget;
                    if (!r) return;
                    let n = u(() => {
                        if (l.has(r)) return;
                        d(r, "down");
                        let e = u(() => {
                            d(r, "up")
                        });
                        r.addEventListener("keyup", e, t), r.addEventListener("blur", () => d(r, "cancel"), t)
                    });
                    r.addEventListener("keydown", n, t), r.addEventListener("blur", () => r.removeEventListener("keydown", n), t)
                },
                f = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                p = (e, t) => !!t && (e === t || p(e, t.parentElement));

            function h(e) {
                return s(e) && !(n.x || n.y)
            }

            function m(e, t, r = {}) {
                let [n, i, a] = o(e, r), s = e => {
                    let n = e.currentTarget;
                    if (!h(e) || l.has(n)) return;
                    l.add(n);
                    let o = t(e),
                        a = (e, t) => {
                            window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", u), h(e) && l.has(n) && (l.delete(n), o && o(e, {
                                success: t
                            }))
                        },
                        s = e => {
                            a(e, r.useGlobalTarget || p(n, e.target))
                        },
                        u = e => {
                            a(e, !1)
                        };
                    window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", u, i)
                };
                return n.forEach(e => {
                    f.has(e.tagName) || -1 !== e.tabIndex || (e.tabIndex = 0), (r.useGlobalTarget ? window : e).addEventListener("pointerdown", s, i), e.addEventListener("focus", e => c(e, i), i)
                }), a
            }

            function v(e) {
                return "x" === e || "y" === e ? n[e] ? null : (n[e] = !0, () => {
                    n[e] = !1
                }) : n.x || n.y ? null : (n.x = n.y = !0, () => {
                    n.x = n.y = !1
                })
            }
        },
        45107: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => o,
                V: () => i
            });
            var n = r(26054);
            let o = n.l,
                i = n.l
        },
        26054: (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => n
            });
            let n = e => e
        },
        30814: (e, t, r) => {
            "use strict";
            r.d(t, {
                l$: () => S,
                oR: () => y
            });
            var n = r(12115),
                o = r(47650);
            let i = e => {
                    switch (e) {
                        case "success":
                            return l;
                        case "info":
                            return d;
                        case "warning":
                            return u;
                        case "error":
                            return c;
                        default:
                            return null
                    }
                },
                a = Array(12).fill(0),
                s = e => {
                    let {
                        visible: t,
                        className: r
                    } = e;
                    return n.createElement("div", {
                        className: ["sonner-loading-wrapper", r].filter(Boolean).join(" "),
                        "data-visible": t
                    }, n.createElement("div", {
                        className: "sonner-spinner"
                    }, a.map((e, t) => n.createElement("div", {
                        className: "sonner-loading-bar",
                        key: "spinner-bar-".concat(t)
                    }))))
                },
                l = n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
                    clipRule: "evenodd"
                })),
                u = n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
                    clipRule: "evenodd"
                })),
                d = n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
                    clipRule: "evenodd"
                })),
                c = n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
                    clipRule: "evenodd"
                })),
                f = n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, n.createElement("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                }), n.createElement("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                })),
                p = () => {
                    let [e, t] = n.useState(document.hidden);
                    return n.useEffect(() => {
                        let e = () => {
                            t(document.hidden)
                        };
                        return document.addEventListener("visibilitychange", e), () => window.removeEventListener("visibilitychange", e)
                    }, []), e
                },
                h = 1;
            class m {
                constructor() {
                    this.subscribe = e => (this.subscribers.push(e), () => {
                        let t = this.subscribers.indexOf(e);
                        this.subscribers.splice(t, 1)
                    }), this.publish = e => {
                        this.subscribers.forEach(t => t(e))
                    }, this.addToast = e => {
                        this.publish(e), this.toasts = [...this.toasts, e]
                    }, this.create = e => {
                        var t;
                        let {
                            message: r,
                            ...n
                        } = e, o = "number" == typeof(null == e ? void 0 : e.id) || (null == (t = e.id) ? void 0 : t.length) > 0 ? e.id : h++, i = this.toasts.find(e => e.id === o), a = void 0 === e.dismissible || e.dismissible;
                        return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), i ? this.toasts = this.toasts.map(t => t.id === o ? (this.publish({ ...t,
                            ...e,
                            id: o,
                            title: r
                        }), { ...t,
                            ...e,
                            id: o,
                            dismissible: a,
                            title: r
                        }) : t) : this.addToast({
                            title: r,
                            ...n,
                            dismissible: a,
                            id: o
                        }), o
                    }, this.dismiss = e => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach(t => t({
                        id: e,
                        dismiss: !0
                    })))) : this.toasts.forEach(e => {
                        this.subscribers.forEach(t => t({
                            id: e.id,
                            dismiss: !0
                        }))
                    }), e), this.message = (e, t) => this.create({ ...t,
                        message: e
                    }), this.error = (e, t) => this.create({ ...t,
                        message: e,
                        type: "error"
                    }), this.success = (e, t) => this.create({ ...t,
                        type: "success",
                        message: e
                    }), this.info = (e, t) => this.create({ ...t,
                        type: "info",
                        message: e
                    }), this.warning = (e, t) => this.create({ ...t,
                        type: "warning",
                        message: e
                    }), this.loading = (e, t) => this.create({ ...t,
                        type: "loading",
                        message: e
                    }), this.promise = (e, t) => {
                        let r, o;
                        if (!t) return;
                        void 0 !== t.loading && (o = this.create({ ...t,
                            promise: e,
                            type: "loading",
                            message: t.loading,
                            description: "function" != typeof t.description ? t.description : void 0
                        }));
                        let i = Promise.resolve(e instanceof Function ? e() : e),
                            a = void 0 !== o,
                            s = i.then(async e => {
                                if (r = ["resolve", e], n.isValidElement(e)) a = !1, this.create({
                                    id: o,
                                    type: "default",
                                    message: e
                                });
                                else if (g(e) && !e.ok) {
                                    a = !1;
                                    let r = "function" == typeof t.error ? await t.error("HTTP error! status: ".concat(e.status)) : t.error,
                                        i = "function" == typeof t.description ? await t.description("HTTP error! status: ".concat(e.status)) : t.description,
                                        s = "object" != typeof r || n.isValidElement(r) ? {
                                            message: r
                                        } : r;
                                    this.create({
                                        id: o,
                                        type: "error",
                                        description: i,
                                        ...s
                                    })
                                } else if (e instanceof Error) {
                                    a = !1;
                                    let r = "function" == typeof t.error ? await t.error(e) : t.error,
                                        i = "function" == typeof t.description ? await t.description(e) : t.description,
                                        s = "object" != typeof r || n.isValidElement(r) ? {
                                            message: r
                                        } : r;
                                    this.create({
                                        id: o,
                                        type: "error",
                                        description: i,
                                        ...s
                                    })
                                } else if (void 0 !== t.success) {
                                    a = !1;
                                    let r = "function" == typeof t.success ? await t.success(e) : t.success,
                                        i = "function" == typeof t.description ? await t.description(e) : t.description,
                                        s = "object" != typeof r || n.isValidElement(r) ? {
                                            message: r
                                        } : r;
                                    this.create({
                                        id: o,
                                        type: "success",
                                        description: i,
                                        ...s
                                    })
                                }
                            }).catch(async e => {
                                if (r = ["reject", e], void 0 !== t.error) {
                                    a = !1;
                                    let r = "function" == typeof t.error ? await t.error(e) : t.error,
                                        i = "function" == typeof t.description ? await t.description(e) : t.description,
                                        s = "object" != typeof r || n.isValidElement(r) ? {
                                            message: r
                                        } : r;
                                    this.create({
                                        id: o,
                                        type: "error",
                                        description: i,
                                        ...s
                                    })
                                }
                            }).finally(() => {
                                a && (this.dismiss(o), o = void 0), null == t.finally || t.finally.call(t)
                            }),
                            l = () => new Promise((e, t) => s.then(() => "reject" === r[0] ? t(r[1]) : e(r[1])).catch(t));
                        return "string" != typeof o && "number" != typeof o ? {
                            unwrap: l
                        } : Object.assign(o, {
                            unwrap: l
                        })
                    }, this.custom = (e, t) => {
                        let r = (null == t ? void 0 : t.id) || h++;
                        return this.create({
                            jsx: e(r),
                            id: r,
                            ...t
                        }), r
                    }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
                }
            }
            let v = new m,
                g = e => e && "object" == typeof e && "ok" in e && "boolean" == typeof e.ok && "status" in e && "number" == typeof e.status,
                y = Object.assign((e, t) => {
                    let r = (null == t ? void 0 : t.id) || h++;
                    return v.addToast({
                        title: e,
                        ...t,
                        id: r
                    }), r
                }, {
                    success: v.success,
                    info: v.info,
                    warning: v.warning,
                    error: v.error,
                    custom: v.custom,
                    message: v.message,
                    promise: v.promise,
                    dismiss: v.dismiss,
                    loading: v.loading
                }, {
                    getHistory: () => v.toasts,
                    getToasts: () => v.getActiveToasts()
                });

            function b(e) {
                return void 0 !== e.label
            }

            function w() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return t.filter(Boolean).join(" ")
            }! function(e) {
                if (!e || "undefined" == typeof document) return;
                let t = document.head || document.getElementsByTagName("head")[0],
                    r = document.createElement("style");
                r.type = "text/css", t.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
            }("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
            let x = e => {
                var t, r, o, a, l, u, d, c, h, m, v;
                let {
                    invert: g,
                    toast: y,
                    unstyled: x,
                    interacting: E,
                    setHeights: S,
                    visibleToasts: T,
                    heights: P,
                    index: k,
                    toasts: C,
                    expanded: M,
                    removeToast: A,
                    defaultRichColors: j,
                    closeButton: R,
                    style: D,
                    cancelButtonStyle: L,
                    actionButtonStyle: O,
                    className: N = "",
                    descriptionClassName: _ = "",
                    duration: I,
                    position: F,
                    gap: V,
                    expandByDefault: B,
                    classNames: z,
                    icons: W,
                    closeButtonAriaLabel: U = "Close toast"
                } = e, [H, $] = n.useState(null), [G, K] = n.useState(null), [X, Y] = n.useState(!1), [q, Q] = n.useState(!1), [Z, J] = n.useState(!1), [ee, et] = n.useState(!1), [er, en] = n.useState(!1), [eo, ei] = n.useState(0), [ea, es] = n.useState(0), el = n.useRef(y.duration || I || 4e3), eu = n.useRef(null), ed = n.useRef(null), ec = 0 === k, ef = k + 1 <= T, ep = y.type, eh = !1 !== y.dismissible, em = y.className || "", ev = y.descriptionClassName || "", eg = n.useMemo(() => P.findIndex(e => e.toastId === y.id) || 0, [P, y.id]), ey = n.useMemo(() => {
                    var e;
                    return null != (e = y.closeButton) ? e : R
                }, [y.closeButton, R]), eb = n.useMemo(() => y.duration || I || 4e3, [y.duration, I]), ew = n.useRef(0), ex = n.useRef(0), eE = n.useRef(0), eS = n.useRef(null), [eT, eP] = F.split("-"), ek = n.useMemo(() => P.reduce((e, t, r) => r >= eg ? e : e + t.height, 0), [P, eg]), eC = p(), eM = y.invert || g, eA = "loading" === ep;
                ex.current = n.useMemo(() => eg * V + ek, [eg, ek]), n.useEffect(() => {
                    el.current = eb
                }, [eb]), n.useEffect(() => {
                    Y(!0)
                }, []), n.useEffect(() => {
                    let e = ed.current;
                    if (e) {
                        let t = e.getBoundingClientRect().height;
                        return es(t), S(e => [{
                            toastId: y.id,
                            height: t,
                            position: y.position
                        }, ...e]), () => S(e => e.filter(e => e.toastId !== y.id))
                    }
                }, [S, y.id]), n.useLayoutEffect(() => {
                    if (!X) return;
                    let e = ed.current,
                        t = e.style.height;
                    e.style.height = "auto";
                    let r = e.getBoundingClientRect().height;
                    e.style.height = t, es(r), S(e => e.find(e => e.toastId === y.id) ? e.map(e => e.toastId === y.id ? { ...e,
                        height: r
                    } : e) : [{
                        toastId: y.id,
                        height: r,
                        position: y.position
                    }, ...e])
                }, [X, y.title, y.description, S, y.id]);
                let ej = n.useCallback(() => {
                    Q(!0), ei(ex.current), S(e => e.filter(e => e.toastId !== y.id)), setTimeout(() => {
                        A(y)
                    }, 200)
                }, [y, A, S, ex]);
                n.useEffect(() => {
                    let e;
                    if ((!y.promise || "loading" !== ep) && y.duration !== 1 / 0 && "loading" !== y.type) return M || E || eC ? (() => {
                        if (eE.current < ew.current) {
                            let e = new Date().getTime() - ew.current;
                            el.current = el.current - e
                        }
                        eE.current = new Date().getTime()
                    })() : el.current !== 1 / 0 && (ew.current = new Date().getTime(), e = setTimeout(() => {
                        null == y.onAutoClose || y.onAutoClose.call(y, y), ej()
                    }, el.current)), () => clearTimeout(e)
                }, [M, E, y, ep, eC, ej]), n.useEffect(() => {
                    y.delete && ej()
                }, [ej, y.delete]);
                let eR = y.icon || (null == W ? void 0 : W[ep]) || i(ep);
                return n.createElement("li", {
                    tabIndex: 0,
                    ref: ed,
                    className: w(N, em, null == z ? void 0 : z.toast, null == y ? void 0 : null == (t = y.classNames) ? void 0 : t.toast, null == z ? void 0 : z.default, null == z ? void 0 : z[ep], null == y ? void 0 : null == (r = y.classNames) ? void 0 : r[ep]),
                    "data-sonner-toast": "",
                    "data-rich-colors": null != (m = y.richColors) ? m : j,
                    "data-styled": !(y.jsx || y.unstyled || x),
                    "data-mounted": X,
                    "data-promise": !!y.promise,
                    "data-swiped": er,
                    "data-removed": q,
                    "data-visible": ef,
                    "data-y-position": eT,
                    "data-x-position": eP,
                    "data-index": k,
                    "data-front": ec,
                    "data-swiping": Z,
                    "data-dismissible": eh,
                    "data-type": ep,
                    "data-invert": eM,
                    "data-swipe-out": ee,
                    "data-swipe-direction": G,
                    "data-expanded": !!(M || B && X),
                    style: {
                        "--index": k,
                        "--toasts-before": k,
                        "--z-index": C.length - k,
                        "--offset": "".concat(q ? eo : ex.current, "px"),
                        "--initial-height": B ? "auto" : "".concat(ea, "px"),
                        ...D,
                        ...y.style
                    },
                    onDragEnd: () => {
                        J(!1), $(null), eS.current = null
                    },
                    onPointerDown: e => {
                        !eA && eh && (eu.current = new Date, ei(ex.current), e.target.setPointerCapture(e.pointerId), "BUTTON" !== e.target.tagName && (J(!0), eS.current = {
                            x: e.clientX,
                            y: e.clientY
                        }))
                    },
                    onPointerUp: () => {
                        var e, t, r, n, o;
                        if (ee || !eh) return;
                        eS.current = null;
                        let i = Number((null == (e = ed.current) ? void 0 : e.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                            a = Number((null == (t = ed.current) ? void 0 : t.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                            s = new Date().getTime() - (null == (r = eu.current) ? void 0 : r.getTime()),
                            l = "x" === H ? i : a,
                            u = Math.abs(l) / s;
                        if (Math.abs(l) >= 45 || u > .11) {
                            ei(ex.current), null == y.onDismiss || y.onDismiss.call(y, y), "x" === H ? K(i > 0 ? "right" : "left") : K(a > 0 ? "down" : "up"), ej(), et(!0);
                            return
                        }
                        null == (n = ed.current) || n.style.setProperty("--swipe-amount-x", "0px"), null == (o = ed.current) || o.style.setProperty("--swipe-amount-y", "0px"), en(!1), J(!1), $(null)
                    },
                    onPointerMove: t => {
                        var r, n, o, i;
                        if (!eS.current || !eh || (null == (r = window.getSelection()) ? void 0 : r.toString().length) > 0) return;
                        let a = t.clientY - eS.current.y,
                            s = t.clientX - eS.current.x,
                            l = null != (i = e.swipeDirections) ? i : function(e) {
                                let [t, r] = e.split("-"), n = [];
                                return t && n.push(t), r && n.push(r), n
                            }(F);
                        !H && (Math.abs(s) > 1 || Math.abs(a) > 1) && $(Math.abs(s) > Math.abs(a) ? "x" : "y");
                        let u = {
                                x: 0,
                                y: 0
                            },
                            d = e => 1 / (1.5 + Math.abs(e) / 20);
                        if ("y" === H) {
                            if (l.includes("top") || l.includes("bottom")) {
                                if (l.includes("top") && a < 0 || l.includes("bottom") && a > 0) u.y = a;
                                else {
                                    let e = a * d(a);
                                    u.y = Math.abs(e) < Math.abs(a) ? e : a
                                }
                            }
                        } else if ("x" === H && (l.includes("left") || l.includes("right"))) {
                            if (l.includes("left") && s < 0 || l.includes("right") && s > 0) u.x = s;
                            else {
                                let e = s * d(s);
                                u.x = Math.abs(e) < Math.abs(s) ? e : s
                            }
                        }(Math.abs(u.x) > 0 || Math.abs(u.y) > 0) && en(!0), null == (n = ed.current) || n.style.setProperty("--swipe-amount-x", "".concat(u.x, "px")), null == (o = ed.current) || o.style.setProperty("--swipe-amount-y", "".concat(u.y, "px"))
                    }
                }, ey && !y.jsx && "loading" !== ep ? n.createElement("button", {
                    "aria-label": U,
                    "data-disabled": eA,
                    "data-close-button": !0,
                    onClick: eA || !eh ? () => {} : () => {
                        ej(), null == y.onDismiss || y.onDismiss.call(y, y)
                    },
                    className: w(null == z ? void 0 : z.closeButton, null == y ? void 0 : null == (o = y.classNames) ? void 0 : o.closeButton)
                }, null != (v = null == W ? void 0 : W.close) ? v : f) : null, (ep || y.icon || y.promise) && null !== y.icon && ((null == W ? void 0 : W[ep]) !== null || y.icon) ? n.createElement("div", {
                    "data-icon": "",
                    className: w(null == z ? void 0 : z.icon, null == y ? void 0 : null == (a = y.classNames) ? void 0 : a.icon)
                }, y.promise || "loading" === y.type && !y.icon ? y.icon || function() {
                    var e, t;
                    return (null == W ? void 0 : W.loading) ? n.createElement("div", {
                        className: w(null == z ? void 0 : z.loader, null == y ? void 0 : null == (t = y.classNames) ? void 0 : t.loader, "sonner-loader"),
                        "data-visible": "loading" === ep
                    }, W.loading) : n.createElement(s, {
                        className: w(null == z ? void 0 : z.loader, null == y ? void 0 : null == (e = y.classNames) ? void 0 : e.loader),
                        visible: "loading" === ep
                    })
                }() : null, "loading" !== y.type ? eR : null) : null, n.createElement("div", {
                    "data-content": "",
                    className: w(null == z ? void 0 : z.content, null == y ? void 0 : null == (l = y.classNames) ? void 0 : l.content)
                }, n.createElement("div", {
                    "data-title": "",
                    className: w(null == z ? void 0 : z.title, null == y ? void 0 : null == (u = y.classNames) ? void 0 : u.title)
                }, y.jsx ? y.jsx : "function" == typeof y.title ? y.title() : y.title), y.description ? n.createElement("div", {
                    "data-description": "",
                    className: w(_, ev, null == z ? void 0 : z.description, null == y ? void 0 : null == (d = y.classNames) ? void 0 : d.description)
                }, "function" == typeof y.description ? y.description() : y.description) : null), n.isValidElement(y.cancel) ? y.cancel : y.cancel && b(y.cancel) ? n.createElement("button", {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: y.cancelButtonStyle || L,
                    onClick: e => {
                        b(y.cancel) && eh && (null == y.cancel.onClick || y.cancel.onClick.call(y.cancel, e), ej())
                    },
                    className: w(null == z ? void 0 : z.cancelButton, null == y ? void 0 : null == (c = y.classNames) ? void 0 : c.cancelButton)
                }, y.cancel.label) : null, n.isValidElement(y.action) ? y.action : y.action && b(y.action) ? n.createElement("button", {
                    "data-button": !0,
                    "data-action": !0,
                    style: y.actionButtonStyle || O,
                    onClick: e => {
                        b(y.action) && (null == y.action.onClick || y.action.onClick.call(y.action, e), e.defaultPrevented || ej())
                    },
                    className: w(null == z ? void 0 : z.actionButton, null == y ? void 0 : null == (h = y.classNames) ? void 0 : h.actionButton)
                }, y.action.label) : null)
            };

            function E() {
                if ("undefined" == typeof window || "undefined" == typeof document) return "ltr";
                let e = document.documentElement.getAttribute("dir");
                return "auto" !== e && e ? e : window.getComputedStyle(document.documentElement).direction
            }
            let S = n.forwardRef(function(e, t) {
                let {
                    invert: r,
                    position: i = "bottom-right",
                    hotkey: a = ["altKey", "KeyT"],
                    expand: s,
                    closeButton: l,
                    className: u,
                    offset: d,
                    mobileOffset: c,
                    theme: f = "light",
                    richColors: p,
                    duration: h,
                    style: m,
                    visibleToasts: g = 3,
                    toastOptions: y,
                    dir: b = E(),
                    gap: w = 14,
                    icons: S,
                    containerAriaLabel: T = "Notifications"
                } = e, [P, k] = n.useState([]), C = n.useMemo(() => Array.from(new Set([i].concat(P.filter(e => e.position).map(e => e.position)))), [P, i]), [M, A] = n.useState([]), [j, R] = n.useState(!1), [D, L] = n.useState(!1), [O, N] = n.useState("system" !== f ? f : "undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), _ = n.useRef(null), I = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), F = n.useRef(null), V = n.useRef(!1), B = n.useCallback(e => {
                    k(t => {
                        var r;
                        return (null == (r = t.find(t => t.id === e.id)) ? void 0 : r.delete) || v.dismiss(e.id), t.filter(t => {
                            let {
                                id: r
                            } = t;
                            return r !== e.id
                        })
                    })
                }, []);
                return n.useEffect(() => v.subscribe(e => {
                    if (e.dismiss) {
                        requestAnimationFrame(() => {
                            k(t => t.map(t => t.id === e.id ? { ...t,
                                delete: !0
                            } : t))
                        });
                        return
                    }
                    setTimeout(() => {
                        o.flushSync(() => {
                            k(t => {
                                let r = t.findIndex(t => t.id === e.id);
                                return -1 !== r ? [...t.slice(0, r), { ...t[r],
                                    ...e
                                }, ...t.slice(r + 1)] : [e, ...t]
                            })
                        })
                    })
                }), [P]), n.useEffect(() => {
                    if ("system" !== f) {
                        N(f);
                        return
                    }
                    if ("system" === f && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? N("dark") : N("light")), "undefined" == typeof window) return;
                    let e = window.matchMedia("(prefers-color-scheme: dark)");
                    try {
                        e.addEventListener("change", e => {
                            let {
                                matches: t
                            } = e;
                            t ? N("dark") : N("light")
                        })
                    } catch (t) {
                        e.addListener(e => {
                            let {
                                matches: t
                            } = e;
                            try {
                                t ? N("dark") : N("light")
                            } catch (e) {
                                console.error(e)
                            }
                        })
                    }
                }, [f]), n.useEffect(() => {
                    P.length <= 1 && R(!1)
                }, [P]), n.useEffect(() => {
                    let e = e => {
                        var t, r;
                        a.every(t => e[t] || e.code === t) && (R(!0), null == (r = _.current) || r.focus()), "Escape" === e.code && (document.activeElement === _.current || (null == (t = _.current) ? void 0 : t.contains(document.activeElement))) && R(!1)
                    };
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [a]), n.useEffect(() => {
                    if (_.current) return () => {
                        F.current && (F.current.focus({
                            preventScroll: !0
                        }), F.current = null, V.current = !1)
                    }
                }, [_.current]), n.createElement("section", {
                    ref: t,
                    "aria-label": "".concat(T, " ").concat(I),
                    tabIndex: -1,
                    "aria-live": "polite",
                    "aria-relevant": "additions text",
                    "aria-atomic": "false",
                    suppressHydrationWarning: !0
                }, C.map((t, o) => {
                    var i;
                    let [a, f] = t.split("-");
                    return P.length ? n.createElement("ol", {
                        key: t,
                        dir: "auto" === b ? E() : b,
                        tabIndex: -1,
                        ref: _,
                        className: u,
                        "data-sonner-toaster": !0,
                        "data-sonner-theme": O,
                        "data-y-position": a,
                        "data-lifted": j && P.length > 1 && !s,
                        "data-x-position": f,
                        style: {
                            "--front-toast-height": "".concat((null == (i = M[0]) ? void 0 : i.height) || 0, "px"),
                            "--width": "".concat(356, "px"),
                            "--gap": "".concat(w, "px"),
                            ...m,
                            ... function(e, t) {
                                let r = {};
                                return [e, t].forEach((e, t) => {
                                    let n = 1 === t,
                                        o = n ? "--mobile-offset" : "--offset",
                                        i = n ? "16px" : "24px";

                                    function a(e) {
                                        ["top", "right", "bottom", "left"].forEach(t => {
                                            r["".concat(o, "-").concat(t)] = "number" == typeof e ? "".concat(e, "px") : e
                                        })
                                    }
                                    "number" == typeof e || "string" == typeof e ? a(e) : "object" == typeof e ? ["top", "right", "bottom", "left"].forEach(t => {
                                        void 0 === e[t] ? r["".concat(o, "-").concat(t)] = i : r["".concat(o, "-").concat(t)] = "number" == typeof e[t] ? "".concat(e[t], "px") : e[t]
                                    }) : a(i)
                                }), r
                            }(d, c)
                        },
                        onBlur: e => {
                            V.current && !e.currentTarget.contains(e.relatedTarget) && (V.current = !1, F.current && (F.current.focus({
                                preventScroll: !0
                            }), F.current = null))
                        },
                        onFocus: e => {
                            e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || V.current || (V.current = !0, F.current = e.relatedTarget)
                        },
                        onMouseEnter: () => R(!0),
                        onMouseMove: () => R(!0),
                        onMouseLeave: () => {
                            D || R(!1)
                        },
                        onDragEnd: () => R(!1),
                        onPointerDown: e => {
                            e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || L(!0)
                        },
                        onPointerUp: () => L(!1)
                    }, P.filter(e => !e.position && 0 === o || e.position === t).map((o, i) => {
                        var a, u;
                        return n.createElement(x, {
                            key: o.id,
                            icons: S,
                            index: i,
                            toast: o,
                            defaultRichColors: p,
                            duration: null != (a = null == y ? void 0 : y.duration) ? a : h,
                            className: null == y ? void 0 : y.className,
                            descriptionClassName: null == y ? void 0 : y.descriptionClassName,
                            invert: r,
                            visibleToasts: g,
                            closeButton: null != (u = null == y ? void 0 : y.closeButton) ? u : l,
                            interacting: D,
                            position: t,
                            style: null == y ? void 0 : y.style,
                            unstyled: null == y ? void 0 : y.unstyled,
                            classNames: null == y ? void 0 : y.classNames,
                            cancelButtonStyle: null == y ? void 0 : y.cancelButtonStyle,
                            actionButtonStyle: null == y ? void 0 : y.actionButtonStyle,
                            closeButtonAriaLabel: null == y ? void 0 : y.closeButtonAriaLabel,
                            removeToast: B,
                            toasts: P.filter(e => e.position == o.position),
                            heights: M.filter(e => e.position == o.position),
                            setHeights: A,
                            expandByDefault: s,
                            gap: w,
                            expanded: j,
                            swipeDirections: e.swipeDirections
                        })
                    })) : null
                }))
            })
        }
    }
]);