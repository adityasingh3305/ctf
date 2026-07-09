"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [516], {
        28516: (t, e, i) => {
            let n;
            i.d(e, {
                A: () => X
            });
            let r = {
                    preserveOrder: !1,
                    attributeNamePrefix: "@_",
                    attributesGroupName: !1,
                    textNodeName: "#text",
                    ignoreAttributes: !0,
                    removeNSPrefix: !1,
                    allowBooleanAttributes: !1,
                    parseTagValue: !0,
                    parseAttributeValue: !1,
                    trimValues: !0,
                    cdataPropName: !1,
                    numberParseOptions: {
                        hex: !0,
                        leadingZeros: !0,
                        eNotation: !0
                    },
                    tagValueProcessor: function(t, e) {
                        return e
                    },
                    attributeValueProcessor: function(t, e) {
                        return e
                    },
                    stopNodes: [],
                    alwaysCreateTextNode: !1,
                    isArray: () => !1,
                    commentPropName: !1,
                    unpairedTags: [],
                    processEntities: !0,
                    htmlEntities: !1,
                    ignoreDeclaration: !1,
                    ignorePiTags: !1,
                    transformTagName: !1,
                    transformAttributeName: !1,
                    updateTag: function(t, e, i) {
                        return t
                    },
                    captureMetaData: !1
                },
                s = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
                a = RegExp("^" + ("[" + s + "][") + s + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");

            function o(t, e) {
                let i = [],
                    n = e.exec(t);
                for (; n;) {
                    let r = [];
                    r.startIndex = e.lastIndex - n[0].length;
                    let s = n.length;
                    for (let t = 0; t < s; t++) r.push(n[t]);
                    i.push(r), n = e.exec(t)
                }
                return i
            }
            let l = function(t) {
                return null != a.exec(t)
            };
            n = "function" != typeof Symbol ? "@@xmlMetadata" : Symbol("XML Node Metadata");
            class u {
                constructor(t) {
                    this.tagname = t, this.child = [], this[":@"] = {}
                }
                add(t, e) {
                    "__proto__" === t && (t = "#__proto__"), this.child.push({
                        [t]: e
                    })
                }
                addChild(t, e) {
                    "__proto__" === t.tagname && (t.tagname = "#__proto__"), t[":@"] && Object.keys(t[":@"]).length > 0 ? this.child.push({
                        [t.tagname]: t.child,
                        ":@": t[":@"]
                    }) : this.child.push({
                        [t.tagname]: t.child
                    }), void 0 !== e && (this.child[this.child.length - 1][n] = {
                        startIndex: e
                    })
                }
                static getMetaDataSymbol() {
                    return n
                }
            }

            function g(t, e) {
                return "!" === t[e + 1] && "-" === t[e + 2] && "-" === t[e + 3]
            }
            let f = /^[-+]?0x[a-fA-F0-9]+$/,
                h = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,
                d = {
                    hex: !0,
                    leadingZeros: !0,
                    decimalPoint: ".",
                    eNotation: !0
                };
            class p {
                constructor(t) {
                    this.options = t, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
                        apos: {
                            regex: /&(apos|#39|#x27);/g,
                            val: "'"
                        },
                        gt: {
                            regex: /&(gt|#62|#x3E);/g,
                            val: ">"
                        },
                        lt: {
                            regex: /&(lt|#60|#x3C);/g,
                            val: "<"
                        },
                        quot: {
                            regex: /&(quot|#34|#x22);/g,
                            val: '"'
                        }
                    }, this.ampEntity = {
                        regex: /&(amp|#38|#x26);/g,
                        val: "&"
                    }, this.htmlEntities = {
                        space: {
                            regex: /&(nbsp|#160);/g,
                            val: " "
                        },
                        cent: {
                            regex: /&(cent|#162);/g,
                            val: "\xa2"
                        },
                        pound: {
                            regex: /&(pound|#163);/g,
                            val: "\xa3"
                        },
                        yen: {
                            regex: /&(yen|#165);/g,
                            val: "\xa5"
                        },
                        euro: {
                            regex: /&(euro|#8364);/g,
                            val: "€"
                        },
                        copyright: {
                            regex: /&(copy|#169);/g,
                            val: "\xa9"
                        },
                        reg: {
                            regex: /&(reg|#174);/g,
                            val: "\xae"
                        },
                        inr: {
                            regex: /&(inr|#8377);/g,
                            val: "₹"
                        },
                        num_dec: {
                            regex: /&#([0-9]{1,7});/g,
                            val: (t, e) => String.fromCodePoint(Number.parseInt(e, 10))
                        },
                        num_hex: {
                            regex: /&#x([0-9a-fA-F]{1,6});/g,
                            val: (t, e) => String.fromCodePoint(Number.parseInt(e, 16))
                        }
                    }, this.addExternalEntities = c, this.parseXml = v, this.parseTextData = m, this.resolveNameSpace = x, this.buildAttributesMap = N, this.isItStopNode = I, this.replaceEntitiesValue = T, this.readStopNodeData = w, this.saveTextToParentTag = y, this.addChild = E, this.ignoreAttributesFn = function(t) {
                        return "function" == typeof t ? t : Array.isArray(t) ? e => {
                            for (let i of t)
                                if ("string" == typeof i && e === i || i instanceof RegExp && i.test(e)) return !0
                        } : () => !1
                    }(this.options.ignoreAttributes)
                }
            }

            function c(t) {
                let e = Object.keys(t);
                for (let i = 0; i < e.length; i++) {
                    let n = e[i];
                    this.lastEntities[n] = {
                        regex: RegExp("&" + n + ";", "g"),
                        val: t[n]
                    }
                }
            }

            function m(t, e, i, n, r, s, a) {
                if (void 0 !== t && (this.options.trimValues && !n && (t = t.trim()), t.length > 0)) {
                    a || (t = this.replaceEntitiesValue(t));
                    let n = this.options.tagValueProcessor(e, t, i, r, s);
                    return null == n ? t : typeof n != typeof t || n !== t ? n : this.options.trimValues ? P(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? P(t, this.options.parseTagValue, this.options.numberParseOptions) : t
                }
            }

            function x(t) {
                if (this.options.removeNSPrefix) {
                    let e = t.split(":"),
                        i = "/" === t.charAt(0) ? "/" : "";
                    if ("xmlns" === e[0]) return "";
                    2 === e.length && (t = i + e[1])
                }
                return t
            }
            let b = RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");

            function N(t, e, i) {
                if (!0 !== this.options.ignoreAttributes && "string" == typeof t) {
                    let i = o(t, b),
                        n = i.length,
                        r = {};
                    for (let t = 0; t < n; t++) {
                        let n = this.resolveNameSpace(i[t][1]);
                        if (this.ignoreAttributesFn(n, e)) continue;
                        let s = i[t][4],
                            a = this.options.attributeNamePrefix + n;
                        if (n.length) {
                            if (this.options.transformAttributeName && (a = this.options.transformAttributeName(a)), "__proto__" === a && (a = "#__proto__"), void 0 !== s) {
                                this.options.trimValues && (s = s.trim()), s = this.replaceEntitiesValue(s);
                                let t = this.options.attributeValueProcessor(n, s, e);
                                null == t ? r[a] = s : typeof t != typeof s || t !== s ? r[a] = t : r[a] = P(s, this.options.parseAttributeValue, this.options.numberParseOptions)
                            } else this.options.allowBooleanAttributes && (r[a] = !0)
                        }
                    }
                    if (Object.keys(r).length) {
                        if (this.options.attributesGroupName) {
                            let t = {};
                            return t[this.options.attributesGroupName] = r, t
                        }
                        return r
                    }
                }
            }
            let v = function(t) {
                t = t.replace(/\r\n?/g, "\n");
                let e = new u("!xml"),
                    i = e,
                    n = "",
                    r = "";
                for (let s = 0; s < t.length; s++)
                    if ("<" === t[s]) {
                        if ("/" === t[s + 1]) {
                            let e = O(t, ">", s, "Closing Tag is not closed."),
                                a = t.substring(s + 2, e).trim();
                            if (this.options.removeNSPrefix) {
                                let t = a.indexOf(":"); - 1 !== t && (a = a.substr(t + 1))
                            }
                            this.options.transformTagName && (a = this.options.transformTagName(a)), i && (n = this.saveTextToParentTag(n, i, r));
                            let o = r.substring(r.lastIndexOf(".") + 1);
                            if (a && -1 !== this.options.unpairedTags.indexOf(a)) throw Error(`Unpaired tag can not be used as closing tag: </${a}>`);
                            let l = 0;
                            o && -1 !== this.options.unpairedTags.indexOf(o) ? (l = r.lastIndexOf(".", r.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : l = r.lastIndexOf("."), r = r.substring(0, l), i = this.tagsNodeStack.pop(), n = "", s = e
                        } else if ("?" === t[s + 1]) {
                            let e = A(t, s, !1, "?>");
                            if (!e) throw Error("Pi Tag is not closed.");
                            if (n = this.saveTextToParentTag(n, i, r), this.options.ignoreDeclaration && "?xml" === e.tagName || this.options.ignorePiTags);
                            else {
                                let t = new u(e.tagName);
                                t.add(this.options.textNodeName, ""), e.tagName !== e.tagExp && e.attrExpPresent && (t[":@"] = this.buildAttributesMap(e.tagExp, r, e.tagName)), this.addChild(i, t, r, s)
                            }
                            s = e.closeIndex + 1
                        } else if ("!--" === t.substr(s + 1, 3)) {
                            let e = O(t, "--\x3e", s + 4, "Comment is not closed.");
                            if (this.options.commentPropName) {
                                let a = t.substring(s + 4, e - 2);
                                n = this.saveTextToParentTag(n, i, r), i.add(this.options.commentPropName, [{
                                    [this.options.textNodeName]: a
                                }])
                            }
                            s = e
                        } else if ("!D" === t.substr(s + 1, 2)) {
                            let e = function(t, e) {
                                let i = {};
                                if ("O" === t[e + 3] && "C" === t[e + 4] && "T" === t[e + 5] && "Y" === t[e + 6] && "P" === t[e + 7] && "E" === t[e + 8]) {
                                    e += 9;
                                    let d = 1,
                                        p = !1,
                                        c = !1;
                                    for (; e < t.length; e++)
                                        if ("<" !== t[e] || c) {
                                            if (">" === t[e]) {
                                                if (c ? "-" === t[e - 1] && "-" === t[e - 2] && (c = !1, d--) : d--, 0 === d) break
                                            } else "[" === t[e] ? p = !0 : t[e]
                                        } else {
                                            var n, r, s, a, o, u, f, h;
                                            if (p && "!" === (n = t)[(r = e) + 1] && "E" === n[r + 2] && "N" === n[r + 3] && "T" === n[r + 4] && "I" === n[r + 5] && "T" === n[r + 6] && "Y" === n[r + 7]) {
                                                let n, r;
                                                e += 7, [n, r, e] = function(t, e) {
                                                    let i = "";
                                                    for (; e < t.length && "'" !== t[e] && '"' !== t[e]; e++) i += t[e];
                                                    if (-1 !== (i = i.trim()).indexOf(" ")) throw Error("External entites are not supported");
                                                    let n = t[e++],
                                                        r = "";
                                                    for (; e < t.length && t[e] !== n; e++) r += t[e];
                                                    return [i, r, e]
                                                }(t, e + 1), -1 === r.indexOf("&") && (i[function(t) {
                                                    if (l(t)) return t;
                                                    throw Error(`Invalid entity name ${t}`)
                                                }(n)] = {
                                                    regx: RegExp(`&${n};`, "g"),
                                                    val: r
                                                })
                                            } else if (p && "!" === (s = t)[(a = e) + 1] && "E" === s[a + 2] && "L" === s[a + 3] && "E" === s[a + 4] && "M" === s[a + 5] && "E" === s[a + 6] && "N" === s[a + 7] && "T" === s[a + 8]) e += 8;
                                            else if (p && "!" === (o = t)[(u = e) + 1] && "A" === o[u + 2] && "T" === o[u + 3] && "T" === o[u + 4] && "L" === o[u + 5] && "I" === o[u + 6] && "S" === o[u + 7] && "T" === o[u + 8]) e += 8;
                                            else if (p && "!" === (f = t)[(h = e) + 1] && "N" === f[h + 2] && "O" === f[h + 3] && "T" === f[h + 4] && "A" === f[h + 5] && "T" === f[h + 6] && "I" === f[h + 7] && "O" === f[h + 8] && "N" === f[h + 9]) e += 9;
                                            else if (g) c = !0;
                                            else throw Error("Invalid DOCTYPE");
                                            d++
                                        }
                                    if (0 !== d) throw Error("Unclosed DOCTYPE")
                                } else throw Error("Invalid Tag instead of DOCTYPE");
                                return {
                                    entities: i,
                                    i: e
                                }
                            }(t, s);
                            this.docTypeEntities = e.entities, s = e.i
                        } else if ("![" === t.substr(s + 1, 2)) {
                            let e = O(t, "]]>", s, "CDATA is not closed.") - 2,
                                a = t.substring(s + 9, e);
                            n = this.saveTextToParentTag(n, i, r);
                            let o = this.parseTextData(a, i.tagname, r, !0, !1, !0, !0);
                            void 0 == o && (o = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{
                                [this.options.textNodeName]: a
                            }]) : i.add(this.options.textNodeName, o), s = e + 2
                        } else {
                            let a = A(t, s, this.options.removeNSPrefix),
                                o = a.tagName,
                                l = a.rawTagName,
                                g = a.tagExp,
                                f = a.attrExpPresent,
                                h = a.closeIndex;
                            this.options.transformTagName && (o = this.options.transformTagName(o)), i && n && "!xml" !== i.tagname && (n = this.saveTextToParentTag(n, i, r, !1));
                            let d = i;
                            d && -1 !== this.options.unpairedTags.indexOf(d.tagname) && (i = this.tagsNodeStack.pop(), r = r.substring(0, r.lastIndexOf("."))), o !== e.tagname && (r += r ? "." + o : o);
                            let p = s;
                            if (this.isItStopNode(this.options.stopNodes, r, o)) {
                                let e = "";
                                if (g.length > 0 && g.lastIndexOf("/") === g.length - 1) "/" === o[o.length - 1] ? (o = o.substr(0, o.length - 1), r = r.substr(0, r.length - 1), g = o) : g = g.substr(0, g.length - 1), s = a.closeIndex;
                                else if (-1 !== this.options.unpairedTags.indexOf(o)) s = a.closeIndex;
                                else {
                                    let i = this.readStopNodeData(t, l, h + 1);
                                    if (!i) throw Error(`Unexpected end of ${l}`);
                                    s = i.i, e = i.tagContent
                                }
                                let n = new u(o);
                                o !== g && f && (n[":@"] = this.buildAttributesMap(g, r, o)), e && (e = this.parseTextData(e, o, r, !0, f, !0, !0)), r = r.substr(0, r.lastIndexOf(".")), n.add(this.options.textNodeName, e), this.addChild(i, n, r, p)
                            } else {
                                if (g.length > 0 && g.lastIndexOf("/") === g.length - 1) {
                                    "/" === o[o.length - 1] ? (o = o.substr(0, o.length - 1), r = r.substr(0, r.length - 1), g = o) : g = g.substr(0, g.length - 1), this.options.transformTagName && (o = this.options.transformTagName(o));
                                    let t = new u(o);
                                    o !== g && f && (t[":@"] = this.buildAttributesMap(g, r, o)), this.addChild(i, t, r, p), r = r.substr(0, r.lastIndexOf("."))
                                } else {
                                    let t = new u(o);
                                    this.tagsNodeStack.push(i), o !== g && f && (t[":@"] = this.buildAttributesMap(g, r, o)), this.addChild(i, t, r, p), i = t
                                }
                                n = "", s = h
                            }
                        }
                    } else n += t[s];
                return e.child
            };

            function E(t, e, i, n) {
                this.options.captureMetaData || (n = void 0);
                let r = this.options.updateTag(e.tagname, i, e[":@"]);
                !1 === r || ("string" == typeof r && (e.tagname = r), t.addChild(e, n))
            }
            let T = function(t) {
                if (this.options.processEntities) {
                    for (let e in this.docTypeEntities) {
                        let i = this.docTypeEntities[e];
                        t = t.replace(i.regx, i.val)
                    }
                    for (let e in this.lastEntities) {
                        let i = this.lastEntities[e];
                        t = t.replace(i.regex, i.val)
                    }
                    if (this.options.htmlEntities)
                        for (let e in this.htmlEntities) {
                            let i = this.htmlEntities[e];
                            t = t.replace(i.regex, i.val)
                        }
                    t = t.replace(this.ampEntity.regex, this.ampEntity.val)
                }
                return t
            };

            function y(t, e, i, n) {
                return t && (void 0 === n && (n = 0 === e.child.length), void 0 !== (t = this.parseTextData(t, e.tagname, i, !1, !!e[":@"] && 0 !== Object.keys(e[":@"]).length, n)) && "" !== t && e.add(this.options.textNodeName, t), t = ""), t
            }

            function I(t, e, i) {
                let n = "*." + i;
                for (let i in t) {
                    let r = t[i];
                    if (n === r || e === r) return !0
                }
                return !1
            }

            function O(t, e, i, n) {
                let r = t.indexOf(e, i);
                if (-1 !== r) return r + e.length - 1;
                throw Error(n)
            }

            function A(t, e, i, n = ">") {
                let r = function(t, e, i = ">") {
                    let n;
                    let r = "";
                    for (let s = e; s < t.length; s++) {
                        let e = t[s];
                        if (n) e === n && (n = "");
                        else if ('"' === e || "'" === e) n = e;
                        else if (e === i[0]) {
                            if (!i[1] || t[s + 1] === i[1]) return {
                                data: r,
                                index: s
                            }
                        } else "	" === e && (e = " ");
                        r += e
                    }
                }(t, e + 1, n);
                if (!r) return;
                let s = r.data,
                    a = r.index,
                    o = s.search(/\s/),
                    l = s,
                    u = !0; - 1 !== o && (l = s.substring(0, o), s = s.substring(o + 1).trimStart());
                let g = l;
                if (i) {
                    let t = l.indexOf(":"); - 1 !== t && (u = (l = l.substr(t + 1)) !== r.data.substr(t + 1))
                }
                return {
                    tagName: l,
                    tagExp: s,
                    closeIndex: a,
                    attrExpPresent: u,
                    rawTagName: g
                }
            }

            function w(t, e, i) {
                let n = i,
                    r = 1;
                for (; i < t.length; i++)
                    if ("<" === t[i]) {
                        if ("/" === t[i + 1]) {
                            let s = O(t, ">", i, `${e} is not closed`);
                            if (t.substring(i + 2, s).trim() === e && 0 == --r) return {
                                tagContent: t.substring(n, i),
                                i: s
                            };
                            i = s
                        } else if ("?" === t[i + 1]) i = O(t, "?>", i + 1, "StopNode is not closed.");
                        else if ("!--" === t.substr(i + 1, 3)) i = O(t, "--\x3e", i + 3, "StopNode is not closed.");
                        else if ("![" === t.substr(i + 1, 2)) i = O(t, "]]>", i, "StopNode is not closed.") - 2;
                        else {
                            let n = A(t, i, ">");
                            n && ((n && n.tagName) === e && "/" !== n.tagExp[n.tagExp.length - 1] && r++, i = n.closeIndex)
                        }
                    }
            }

            function P(t, e, i) {
                if (e && "string" == typeof t) {
                    let e = t.trim();
                    return "true" === e || "false" !== e && function(t, e = {}) {
                        if (e = Object.assign({}, d, e), !t || "string" != typeof t) return t;
                        let i = t.trim();
                        if (void 0 !== e.skipLike && e.skipLike.test(i)) return t;
                        if ("0" === t) return 0;
                        if (e.hex && f.test(i)) return function(t, e) {
                            if (parseInt) return parseInt(t, 16);
                            if (Number.parseInt) return Number.parseInt(t, 16);
                            if (window && window.parseInt) return window.parseInt(t, e);
                            throw Error("parseInt, Number.parseInt, window.parseInt are not supported")
                        }(i, 16);
                        if (-1 !== i.search(/[eE]/)) {
                            let n = i.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
                            if (!n) return t;
                            if (e.leadingZeros) i = (n[1] || "") + n[3];
                            else if ("0" !== n[2] || "." !== n[3][0]) return t;
                            return e.eNotation ? Number(i) : t
                        } {
                            let r = h.exec(i);
                            if (!r) return t; {
                                var n;
                                let s = r[1],
                                    a = r[2],
                                    o = ((n = r[3]) && -1 !== n.indexOf(".") && ("." === (n = n.replace(/0+$/, "")) ? n = "0" : "." === n[0] ? n = "0" + n : "." === n[n.length - 1] && (n = n.substr(0, n.length - 1))), n);
                                if (!e.leadingZeros && a.length > 0 && s && "." !== i[2]) return t; {
                                    if (!e.leadingZeros && a.length > 0 && !s && "." !== i[1]) return t;
                                    if (e.leadingZeros && a === t) return 0;
                                    let n = Number(i),
                                        r = "" + n;
                                    return -1 !== r.search(/[eE]/) ? e.eNotation ? n : t : -1 !== i.indexOf(".") ? "0" === r && "" === o ? n : r === o ? n : s && r === "-" + o ? n : t : a ? o === r || s + o === r ? n : t : i === r || i === s + r ? n : t
                                }
                            }
                        }
                    }(t, i)
                }
                return void 0 !== t ? t : ""
            }
            let C = u.getMetaDataSymbol(),
                S = {
                    allowBooleanAttributes: !1,
                    unpairedTags: []
                };

            function _(t) {
                return " " === t || "	" === t || "\n" === t || "\r" === t
            }

            function k(t, e) {
                let i = e;
                for (; e < t.length; e++)
                    if ("?" == t[e] || " " == t[e]) {
                        let n = t.substr(i, e - i);
                        if (e > 5 && "xml" === n) return V("InvalidXml", "XML declaration allowed only at the start of the document.", $(t, e));
                        if ("?" != t[e] || ">" != t[e + 1]) continue;
                        e++;
                        break
                    }
                return e
            }

            function D(t, e) {
                if (t.length > e + 5 && "-" === t[e + 1] && "-" === t[e + 2]) {
                    for (e += 3; e < t.length; e++)
                        if ("-" === t[e] && "-" === t[e + 1] && ">" === t[e + 2]) {
                            e += 2;
                            break
                        }
                } else if (t.length > e + 8 && "D" === t[e + 1] && "O" === t[e + 2] && "C" === t[e + 3] && "T" === t[e + 4] && "Y" === t[e + 5] && "P" === t[e + 6] && "E" === t[e + 7]) {
                    let i = 1;
                    for (e += 8; e < t.length; e++)
                        if ("<" === t[e]) i++;
                        else if (">" === t[e] && 0 == --i) break
                } else if (t.length > e + 9 && "[" === t[e + 1] && "C" === t[e + 2] && "D" === t[e + 3] && "A" === t[e + 4] && "T" === t[e + 5] && "A" === t[e + 6] && "[" === t[e + 7]) {
                    for (e += 8; e < t.length; e++)
                        if ("]" === t[e] && "]" === t[e + 1] && ">" === t[e + 2]) {
                            e += 2;
                            break
                        }
                }
                return e
            }
            let F = RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");

            function M(t, e) {
                let i = o(t, F),
                    n = {};
                for (let t = 0; t < i.length; t++) {
                    if (0 === i[t][1].length) return V("InvalidAttr", "Attribute '" + i[t][2] + "' has no space in starting.", j(i[t]));
                    if (void 0 !== i[t][3] && void 0 === i[t][4]) return V("InvalidAttr", "Attribute '" + i[t][2] + "' is without value.", j(i[t]));
                    if (void 0 === i[t][3] && !e.allowBooleanAttributes) return V("InvalidAttr", "boolean attribute '" + i[t][2] + "' is not allowed.", j(i[t]));
                    let r = i[t][2];
                    if (!l(r)) return V("InvalidAttr", "Attribute '" + r + "' is an invalid name.", j(i[t]));
                    if (n.hasOwnProperty(r)) return V("InvalidAttr", "Attribute '" + r + "' is repeated.", j(i[t]));
                    n[r] = 1
                }
                return !0
            }

            function V(t, e, i) {
                return {
                    err: {
                        code: t,
                        msg: e,
                        line: i.line || i,
                        col: i.col
                    }
                }
            }

            function $(t, e) {
                let i = t.substring(0, e).split(/\r?\n/);
                return {
                    line: i.length,
                    col: i[i.length - 1].length + 1
                }
            }

            function j(t) {
                return t.startIndex + t[1].length
            }
            class X {
                constructor(t) {
                    this.externalEntities = {}, this.options = Object.assign({}, r, t)
                }
                parse(t, e) {
                    if ("string" == typeof t);
                    else if (t.toString) t = t.toString();
                    else throw Error("XML data is accepted in String or Bytes[] form.");
                    if (e) {
                        !0 === e && (e = {});
                        let i = function(t, e) {
                            e = Object.assign({}, S, e);
                            let i = [],
                                n = !1,
                                r = !1;
                            "\uFEFF" === t[0] && (t = t.substr(1));
                            for (let s = 0; s < t.length; s++)
                                if ("<" === t[s] && "?" === t[s + 1]) {
                                    if (s += 2, (s = k(t, s)).err) return s
                                } else if ("<" === t[s]) {
                                let a = s;
                                if ("!" === t[++s]) {
                                    s = D(t, s);
                                    continue
                                } {
                                    let o = !1;
                                    "/" === t[s] && (o = !0, s++);
                                    let u = "";
                                    for (; s < t.length && ">" !== t[s] && " " !== t[s] && "	" !== t[s] && "\n" !== t[s] && "\r" !== t[s]; s++) u += t[s];
                                    if ("/" === (u = u.trim())[u.length - 1] && (u = u.substring(0, u.length - 1), s--), !l(u)) return V("InvalidTag", 0 === u.trim().length ? "Invalid space after '<'." : "Tag '" + u + "' is an invalid name.", $(t, s));
                                    let g = function(t, e) {
                                        let i = "",
                                            n = "",
                                            r = !1;
                                        for (; e < t.length; e++) {
                                            if ('"' === t[e] || "'" === t[e]) "" === n ? n = t[e] : n !== t[e] || (n = "");
                                            else if (">" === t[e] && "" === n) {
                                                r = !0;
                                                break
                                            }
                                            i += t[e]
                                        }
                                        return "" === n && {
                                            value: i,
                                            index: e,
                                            tagClosed: r
                                        }
                                    }(t, s);
                                    if (!1 === g) return V("InvalidAttr", "Attributes for '" + u + "' have open quote.", $(t, s));
                                    let f = g.value;
                                    if (s = g.index, "/" === f[f.length - 1]) {
                                        let i = s - f.length,
                                            r = M(f = f.substring(0, f.length - 1), e);
                                        if (!0 !== r) return V(r.err.code, r.err.msg, $(t, i + r.err.line));
                                        n = !0
                                    } else if (o) {
                                        if (!g.tagClosed) return V("InvalidTag", "Closing tag '" + u + "' doesn't have proper closing.", $(t, s));
                                        if (f.trim().length > 0) return V("InvalidTag", "Closing tag '" + u + "' can't have attributes or invalid starting.", $(t, a)); {
                                            if (0 === i.length) return V("InvalidTag", "Closing tag '" + u + "' has not been opened.", $(t, a));
                                            let e = i.pop();
                                            if (u !== e.tagName) {
                                                let i = $(t, e.tagStartPos);
                                                return V("InvalidTag", "Expected closing tag '" + e.tagName + "' (opened in line " + i.line + ", col " + i.col + ") instead of closing tag '" + u + "'.", $(t, a))
                                            }
                                            0 == i.length && (r = !0)
                                        }
                                    } else {
                                        let o = M(f, e);
                                        if (!0 !== o) return V(o.err.code, o.err.msg, $(t, s - f.length + o.err.line));
                                        if (!0 === r) return V("InvalidXml", "Multiple possible root nodes found.", $(t, s)); - 1 !== e.unpairedTags.indexOf(u) || i.push({
                                            tagName: u,
                                            tagStartPos: a
                                        }), n = !0
                                    }
                                    for (s++; s < t.length; s++)
                                        if ("<" === t[s]) {
                                            if ("!" === t[s + 1]) {
                                                s = D(t, ++s);
                                                continue
                                            }
                                            if ("?" === t[s + 1]) {
                                                if ((s = k(t, ++s)).err) return s
                                            } else break
                                        } else if ("&" === t[s]) {
                                        let e = function(t, e) {
                                            if (";" === t[++e]) return -1;
                                            if ("#" === t[e]) return function(t, e) {
                                                let i = /\d/;
                                                for ("x" === t[e] && (e++, i = /[\da-fA-F]/); e < t.length; e++) {
                                                    if (";" === t[e]) return e;
                                                    if (!t[e].match(i)) break
                                                }
                                                return -1
                                            }(t, ++e);
                                            let i = 0;
                                            for (; e < t.length; e++, i++)
                                                if (!t[e].match(/\w/) || !(i < 20)) {
                                                    if (";" === t[e]) break;
                                                    return -1
                                                }
                                            return e
                                        }(t, s);
                                        if (-1 == e) return V("InvalidChar", "char '&' is not expected.", $(t, s));
                                        s = e
                                    } else if (!0 === r && !_(t[s])) return V("InvalidXml", "Extra text at the end", $(t, s));
                                    "<" === t[s] && s--
                                }
                            } else {
                                if (_(t[s])) continue;
                                return V("InvalidChar", "char '" + t[s] + "' is not expected.", $(t, s))
                            }
                            return n ? 1 == i.length ? V("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", $(t, i[0].tagStartPos)) : !(i.length > 0) || V("InvalidXml", "Invalid '" + JSON.stringify(i.map(t => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
                                line: 1,
                                col: 1
                            }) : V("InvalidXml", "Start tag expected.", 1)
                        }(t, e);
                        if (!0 !== i) throw Error(`${i.err.msg}:${i.err.line}:${i.err.col}`)
                    }
                    let i = new p(this.options);
                    i.addExternalEntities(this.externalEntities);
                    let n = i.parseXml(t);
                    return this.options.preserveOrder || void 0 === n ? n : function t(e, i, n) {
                        let r;
                        let s = {};
                        for (let a = 0; a < e.length; a++) {
                            let o = e[a],
                                l = function(t) {
                                    let e = Object.keys(t);
                                    for (let t = 0; t < e.length; t++) {
                                        let i = e[t];
                                        if (":@" !== i) return i
                                    }
                                }(o),
                                u = "";
                            if (u = void 0 === n ? l : n + "." + l, l === i.textNodeName) void 0 === r ? r = o[l] : r += "" + o[l];
                            else if (void 0 === l) continue;
                            else if (o[l]) {
                                let e = t(o[l], i, u),
                                    n = function(t, e) {
                                        let {
                                            textNodeName: i
                                        } = e, n = Object.keys(t).length;
                                        return 0 === n || 1 === n && (!!t[i] || "boolean" == typeof t[i] || 0 === t[i])
                                    }(e, i);
                                void 0 !== o[C] && (e[C] = o[C]), o[":@"] ? function(t, e, i, n) {
                                    if (e) {
                                        let r = Object.keys(e),
                                            s = r.length;
                                        for (let a = 0; a < s; a++) {
                                            let s = r[a];
                                            n.isArray(s, i + "." + s, !0, !0) ? t[s] = [e[s]] : t[s] = e[s]
                                        }
                                    }
                                }(e, o[":@"], u, i) : 1 !== Object.keys(e).length || void 0 === e[i.textNodeName] || i.alwaysCreateTextNode ? 0 === Object.keys(e).length && (i.alwaysCreateTextNode ? e[i.textNodeName] = "" : e = "") : e = e[i.textNodeName], void 0 !== s[l] && s.hasOwnProperty(l) ? (Array.isArray(s[l]) || (s[l] = [s[l]]), s[l].push(e)) : i.isArray(l, u, n) ? s[l] = [e] : s[l] = e
                            }
                        }
                        return "string" == typeof r ? r.length > 0 && (s[i.textNodeName] = r) : void 0 !== r && (s[i.textNodeName] = r), s
                    }(n, this.options)
                }
                addEntity(t, e) {
                    if (-1 !== e.indexOf("&")) throw Error("Entity value can't have '&'");
                    if (-1 !== t.indexOf("&") || -1 !== t.indexOf(";")) throw Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
                    if ("&" === e) throw Error("An entity with value '&' is not permitted");
                    this.externalEntities[t] = e
                }
                static getMetaDataSymbol() {
                    return u.getMetaDataSymbol()
                }
            }
        }
    }
]);