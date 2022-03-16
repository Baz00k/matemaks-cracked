!function (q, z) { "object" == typeof module && "object" == typeof module.exports ? module.exports = q.document ? z(q, !0) : function (B) { if (!B.document) throw Error("jQuery requires a window with a document"); return z(B) } : z(q) }("undefined" != typeof window ? window : this, function (q, z) {
    function B(a, b, c) { var e, f, g = (c = c || U).createElement("script"); if (g.text = a, b) for (e in Tc) (f = b[e] || b.getAttribute && b.getAttribute(e)) && g.setAttribute(e, f); c.head.appendChild(g).parentNode.removeChild(g) } function D(a) {
        return null == a ? a + "" : "object" ==
            typeof a || "function" == typeof a ? vb[cc.call(a)] || "object" : typeof a
    } function ja(a) { var b = !!a && "length" in a && a.length, c = D(a); return !N(a) && !db(a) && ("array" === c || 0 === b || "number" == typeof b && 0 < b && b - 1 in a) } function oa(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() } function va(a, b, c) { return N(b) ? d.grep(a, function (e, f) { return !!b.call(e, f, e) !== c }) : b.nodeType ? d.grep(a, function (e) { return e === b !== c }) : "string" != typeof b ? d.grep(a, function (e) { return -1 < wb.call(b, e) !== c }) : d.filter(b, a, c) } function Oa(a,
        b) { for (; (a = a[b]) && 1 !== a.nodeType;); return a } function Ba(a) { return a } function eb(a) { throw a; } function xb(a, b, c, e) { var f; try { a && N(f = a.promise) ? f.call(a).done(b).fail(c) : a && N(f = a.then) ? f.call(a, b, c) : b.apply(void 0, [a].slice(e)) } catch (g) { c.apply(void 0, [g]) } } function L() { U.removeEventListener("DOMContentLoaded", L); q.removeEventListener("load", L); d.ready() } function ha(a, b) { return b.toUpperCase() } function qa(a) { return a.replace(Uc, "ms-").replace(Vc, ha) } function wa() { this.expando = d.expando + wa.uid++ } function Ma(a,
            b, c) { var e, f; if (void 0 === c && 1 === a.nodeType) if (e = "data-" + b.replace(Wc, "-$&").toLowerCase(), "string" == typeof (c = a.getAttribute(e))) { try { c = "true" === (f = c) || "false" !== f && ("null" === f ? null : f === +f + "" ? +f : Xc.test(f) ? JSON.parse(f) : f) } catch (g) { } xa.set(a, b, c) } else c = void 0; return c } function fb(a, b, c, e) {
                var f, g, k = 20, l = e ? function () { return e.cur() } : function () { return d.css(a, b, "") }, n = l(), u = c && c[3] || (d.cssNumber[b] ? "" : "px"), w = a.nodeType && (d.cssNumber[b] || "px" !== u && +n) && lb.exec(d.css(a, b)); if (w && w[3] !== u) {
                    n /= 2; u = u ||
                        w[3]; for (w = +n || 1; k--;)d.style(a, b, w + u), 0 >= (1 - g) * (1 - (g = l() / n || .5)) && (k = 0), w /= g; w *= 2; d.style(a, b, w + u); c = c || []
                } return c && (w = +w || +n || 0, f = c[1] ? w + (c[1] + 1) * c[2] : +c[2], e && (e.unit = u, e.start = w, e.end = f)), f
            } function ya(a, b) {
                for (var c, e, f, g, k, l, n, u = [], w = 0, r = a.length; w < r; w++)(e = a[w]).style && (c = e.style.display, b ? ("none" === c && (u[w] = J.get(e, "display") || null, u[w] || (e.style.display = "")), "" === e.style.display && yb(e) && (u[w] = (n = k = g = void 0, k = (f = e).ownerDocument, l = f.nodeName, (n = dc[l]) || (g = k.body.appendChild(k.createElement(l)),
                    n = d.css(g, "display"), g.parentNode.removeChild(g), "none" === n && (n = "block"), dc[l] = n)))) : "none" !== c && (u[w] = "none", J.set(e, "display", c))); for (w = 0; w < r; w++)null != u[w] && (a[w].style.display = u[w]); return a
            } function ra(a, b) { var c; return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && oa(a, b) ? d.merge([a], c) : c } function mb(a, b) { for (var c = 0, e = a.length; c < e; c++)J.set(a[c], "globalEval", !b || J.get(b[c], "globalEval")) }
    function zb(a, b, c, e, f) {
        for (var g, k, l, n, u = b.createDocumentFragment(), w = [], r = 0, C = a.length; r < C; r++)if ((g = a[r]) || 0 === g) if ("object" === D(g)) d.merge(w, g.nodeType ? [g] : g); else if (Yc.test(g)) { k = k || u.appendChild(b.createElement("div")); l = (ec.exec(g) || ["", ""])[1].toLowerCase(); l = Ca[l] || Ca._default; k.innerHTML = l[1] + d.htmlPrefilter(g) + l[2]; for (l = l[0]; l--;)k = k.lastChild; d.merge(w, k.childNodes); (k = u.firstChild).textContent = "" } else w.push(b.createTextNode(g)); u.textContent = ""; for (r = 0; g = w[r++];)if (e && -1 < d.inArray(g,
            e)) f && f.push(g); else if (n = gb(g), k = ra(u.appendChild(g), "script"), n && mb(k), c) for (l = 0; g = k[l++];)fc.test(g.type || "") && c.push(g); return u
    } function ia() { return !0 } function Pa() { return !1 } function gc(a, b) { a: { try { var c = U.activeElement; break a } catch (e) { } c = void 0 } return a === c == ("focus" === b) } function Ab(a, b, c, e, f, g) {
        var k, l; if ("object" == typeof b) { for (l in "string" != typeof c && (e = e || c, c = void 0), b) Ab(a, l, c, e, b[l], g); return a } if (null == e && null == f ? (f = c, e = c = void 0) : null == f && ("string" == typeof c ? (f = e, e = void 0) : (f = e, e = c,
            c = void 0)), !1 === f) f = Pa; else if (!f) return a; return 1 === g && (k = f, (f = function (n) { return d().off(n), k.apply(this, arguments) }).guid = k.guid || (k.guid = d.guid++)), a.each(function () { d.event.add(this, b, f, e, c) })
    } function Qa(a, b, c) {
        c ? (J.set(a, b, !1), d.event.add(a, b, {
            namespace: !1, handler: function (e) {
                var f, g, k = J.get(this, b); if (1 & e.isTrigger && this[b]) if (k.length) (d.event.special[b] || {}).delegateType && e.stopPropagation(); else {
                    if (k = Va.call(arguments), J.set(this, b, k), f = c(this, b), this[b](), k !== (g = J.get(this, b)) || f ? J.set(this,
                        b, !1) : g = {}, k !== g) return e.stopImmediatePropagation(), e.preventDefault(), g.value
                } else k.length && (J.set(this, b, { value: d.event.trigger(d.extend(k[0], d.Event.prototype), k.slice(1), this) }), e.stopImmediatePropagation())
            }
        })) : void 0 === J.get(a, b) && d.event.add(a, b, ia)
    } function hc(a, b) { return oa(a, "table") && oa(11 !== b.nodeType ? b : b.firstChild, "tr") && d(a).children("tbody")[0] || a } function Zc(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a } function $c(a) {
        return "true/" === (a.type || "").slice(0, 5) ? a.type =
            a.type.slice(5) : a.removeAttribute("type"), a
    } function ic(a, b) { var c, e, f, g, k, l; if (1 === b.nodeType) { if (J.hasData(a) && (c = J.access(a), e = J.set(b, c), l = c.events)) for (f in delete e.handle, e.events = {}, l) for (c = 0, e = l[f].length; c < e; c++)d.event.add(b, f, l[f][c]); xa.hasData(a) && (g = xa.access(a), k = d.extend({}, g), xa.set(b, k)) } } function hb(a, b, c, e) {
        b = jc.apply([], b); var f, g, k, l = 0, n = a.length, u = n - 1, w = b[0], r = N(w); if (r || 1 < n && "string" == typeof w && !Z.checkClone && ad.test(w)) return a.each(function (G) {
            var E = a.eq(G); r && (b[0] = w.call(this,
                G, E.html())); hb(E, b, c, e)
        }); if (n && (g = (f = zb(b, a[0].ownerDocument, !1, a, e)).firstChild, 1 === f.childNodes.length && (f = g), g || e)) {
            for (k = (g = d.map(ra(f, "script"), Zc)).length; l < n; l++) { var C = f; l !== u && (C = d.clone(C, !0, !0), k && d.merge(g, ra(C, "script"))); c.call(a[l], C, l) } if (k) for (f = g[g.length - 1].ownerDocument, d.map(g, $c), l = 0; l < k; l++)C = g[l], fc.test(C.type || "") && !J.access(C, "globalEval") && d.contains(f, C) && (C.src && "module" !== (C.type || "").toLowerCase() ? d._evalUrl && !C.noModule && d._evalUrl(C.src, { nonce: C.nonce || C.getAttribute("nonce") }) :
                B(C.textContent.replace(bd, ""), C, f))
        } return a
    } function kc(a, b, c) { for (var e = b ? d.filter(b, a) : a, f = 0; null != (b = e[f]); f++)c || 1 !== b.nodeType || d.cleanData(ra(b)), b.parentNode && (c && gb(b) && mb(ra(b, "script")), b.parentNode.removeChild(b)); return a } function nb(a, b, c) {
        var e, f, g, k, l = a.style; return (c = c || Bb(a)) && ("" !== (k = c.getPropertyValue(b) || c[b]) || gb(a) || (k = d.style(a, b)), !Z.pixelBoxStyles() && Nb.test(k) && cd.test(b) && (e = l.width, f = l.minWidth, g = l.maxWidth, l.minWidth = l.maxWidth = l.width = k, k = c.width, l.width = e, l.minWidth =
            f, l.maxWidth = g)), void 0 !== k ? k + "" : k
    } function lc(a, b) { return { get: function () { if (!a()) return (this.get = b).apply(this, arguments); delete this.get } } } function Ob(a) { var b; if (!(b = d.cssProps[a] || mc[a])) { if (!(a in nc)) { a: { b = a; for (var c = b[0].toUpperCase() + b.slice(1), e = oc.length; e--;)if ((b = oc[e] + c) in nc) break a; b = void 0 } a = mc[a] = b || a } b = a } return b } function pc(a, b, c) { return (a = lb.exec(b)) ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b } function Pb(a, b, c, e, f, g) {
        var k = "width" === b ? 1 : 0, l = 0, n = 0; if (c === (e ? "border" : "content")) return 0;
        for (; 4 > k; k += 2)"margin" === c && (n += d.css(a, c + Ra[k], !0, f)), e ? ("content" === c && (n -= d.css(a, "padding" + Ra[k], !0, f)), "margin" !== c && (n -= d.css(a, "border" + Ra[k] + "Width", !0, f))) : (n += d.css(a, "padding" + Ra[k], !0, f), "padding" !== c ? n += d.css(a, "border" + Ra[k] + "Width", !0, f) : l += d.css(a, "border" + Ra[k] + "Width", !0, f)); return !e && 0 <= g && (n += Math.max(0, Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - g - n - l - .5)) || 0), n
    } function qc(a, b, c) {
        var e = Bb(a), f = (!Z.boxSizingReliable() || c) && "border-box" === d.css(a, "boxSizing", !1, e), g = f,
        k = nb(a, b, e), l = "offset" + b[0].toUpperCase() + b.slice(1); if (Nb.test(k)) { if (!c) return k; k = "auto" } return (!Z.boxSizingReliable() && f || "auto" === k || !parseFloat(k) && "inline" === d.css(a, "display", !1, e)) && a.getClientRects().length && (f = "border-box" === d.css(a, "boxSizing", !1, e), (g = l in a) && (k = a[l])), (k = parseFloat(k) || 0) + Pb(a, b, c || (f ? "border" : "content"), g, e, k) + "px"
    } function Fa(a, b, c, e, f) { return new Fa.prototype.init(a, b, c, e, f) } function Qb() {
        Cb && (!1 === U.hidden && q.requestAnimationFrame ? q.requestAnimationFrame(Qb) : q.setTimeout(Qb,
            d.fx.interval), d.fx.tick())
    } function rc() { return q.setTimeout(function () { ib = void 0 }), ib = Date.now() } function Db(a, b) { var c, e = 0, f = { height: a }; for (b = b ? 1 : 0; 4 > e; e += 2 - b)f["margin" + (c = Ra[e])] = f["padding" + c] = a; return b && (f.opacity = f.width = a), f } function sc(a, b, c) { for (var e, f = (Ga.tweeners[b] || []).concat(Ga.tweeners["*"]), g = 0, k = f.length; g < k; g++)if (e = f[g].call(c, b, a)) return e } function Ga(a, b, c) {
        var e, f = 0, g = Ga.prefilters.length, k = d.Deferred().always(function () { delete l.elem }), l = function () {
            if (e) return !1; var u = ib ||
                rc(); u = Math.max(0, n.startTime + n.duration - u); for (var w = 1 - (u / n.duration || 0), r = 0, C = n.tweens.length; r < C; r++)n.tweens[r].run(w); return k.notifyWith(a, [n, w, u]), 1 > w && C ? u : (C || k.notifyWith(a, [n, 1, 0]), k.resolveWith(a, [n]), !1)
        }, n = k.promise({
            elem: a, props: d.extend({}, b), opts: d.extend(!0, { specialEasing: {}, easing: d.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ib || rc(), duration: c.duration, tweens: [], createTween: function (u, w) {
                var r = d.Tween(a, n.opts, u, w, n.opts.specialEasing[u] || n.opts.easing);
                return n.tweens.push(r), r
            }, stop: function (u) { var w = 0, r = u ? n.tweens.length : 0; if (e) return this; for (e = !0; w < r; w++)n.tweens[w].run(1); return u ? (k.notifyWith(a, [n, 1, 0]), k.resolveWith(a, [n, u])) : k.rejectWith(a, [n, u]), this }
        }); c = n.props; !function (u, w) { var r, C, G, E, O; for (r in u) if (G = w[C = qa(r)], E = u[r], Array.isArray(E) && (G = E[1], E = u[r] = E[0]), r !== C && (u[C] = E, delete u[r]), (O = d.cssHooks[C]) && "expand" in O) for (r in E = O.expand(E), delete u[C], E) r in u || (u[r] = E[r], w[r] = G); else w[C] = G }(c, n.opts.specialEasing); for (; f < g; f++)if (b =
            Ga.prefilters[f].call(n, a, c, n.opts)) return N(b.stop) && (d._queueHooks(n.elem, n.opts.queue).stop = b.stop.bind(b)), b; return d.map(c, sc, n), N(n.opts.start) && n.opts.start.call(a, n), n.progress(n.opts.progress).done(n.opts.done, n.opts.complete).fail(n.opts.fail).always(n.opts.always), d.fx.timer(d.extend(l, { elem: a, anim: n, queue: n.opts.queue })), n
    } function Xa(a) { return (a.match(Na) || []).join(" ") } function Ya(a) { return a.getAttribute && a.getAttribute("class") || "" } function Rb(a) {
        return Array.isArray(a) ? a : "string" ==
            typeof a && a.match(Na) || []
    } function Sb(a, b, c, e) { var f; if (Array.isArray(b)) d.each(b, function (g, k) { c || dd.test(a) ? e(a, k) : Sb(a + "[" + ("object" == typeof k && null != k ? g : "") + "]", k, c, e) }); else if (c || "object" !== D(b)) e(a, b); else for (f in b) Sb(a + "[" + f + "]", b[f], c, e) } function tc(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var e, f = 0, g = b.toLowerCase().match(Na) || []; if (N(c)) for (; e = g[f++];)"+" === e[0] ? (e = e.slice(1) || "*", (a[e] = a[e] || []).unshift(c)) : (a[e] = a[e] || []).push(c) } } function uc(a, b, c, e) {
        function f(l) {
            var n;
            return g[l] = !0, d.each(a[l] || [], function (u, w) { var r = w(b, c, e); return "string" != typeof r || k || g[r] ? k ? !(n = r) : void 0 : (b.dataTypes.unshift(r), f(r), !1) }), n
        } var g = {}, k = a === Tb; return f(b.dataTypes[0]) || !g["*"] && f("*")
    } function Ub(a, b) { var c, e, f = d.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((f[c] ? a : e || (e = {}))[c] = b[c]); return e && d.extend(!0, a, e), a } var Za = [], U = q.document, ed = Object.getPrototypeOf, Va = Za.slice, jc = Za.concat, Vb = Za.push, wb = Za.indexOf, vb = {}, cc = vb.toString, Eb = vb.hasOwnProperty, vc = Eb.toString,
        fd = vc.call(Object), Z = {}, N = function (a) { return "function" == typeof a && "number" != typeof a.nodeType }, db = function (a) { return null != a && a === a.window }, Tc = { type: !0, src: !0, nonce: !0, noModule: !0 }, d = function (a, b) { return new d.fn.init(a, b) }, gd = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; d.fn = d.prototype = {
            jquery: "3.4.1", constructor: d, length: 0, toArray: function () { return Va.call(this) }, get: function (a) { return null == a ? Va.call(this) : 0 > a ? this[a + this.length] : this[a] }, pushStack: function (a) {
                a = d.merge(this.constructor(), a); return a.prevObject =
                    this, a
            }, each: function (a) { return d.each(this, a) }, map: function (a) { return this.pushStack(d.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(Va.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length; a = +a + (0 > a ? b : 0); return this.pushStack(0 <= a && a < b ? [this[a]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: Vb, sort: Za.sort, splice: Za.splice
        }; d.extend = d.fn.extend = function () {
            var a,
            b, c, e, f, g = arguments[0] || {}, k = 1, l = arguments.length, n = !1; "boolean" == typeof g && (n = g, g = arguments[k] || {}, k++); "object" == typeof g || N(g) || (g = {}); for (k === l && (g = this, k--); k < l; k++)if (null != (a = arguments[k])) for (b in a) { var u = a[b]; "__proto__" !== b && g !== u && (n && u && (d.isPlainObject(u) || (e = Array.isArray(u))) ? (c = g[b], f = e && !Array.isArray(c) ? [] : e || d.isPlainObject(c) ? c : {}, e = !1, g[b] = d.extend(n, f, u)) : void 0 !== u && (g[b] = u)) } return g
        }; d.extend({
            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
                throw Error(a);
            }, noop: function () { }, isPlainObject: function (a) { var b, c; return !(!a || "[object Object]" !== cc.call(a)) && (!(b = ed(a)) || "function" == typeof (c = Eb.call(b, "constructor") && b.constructor) && vc.call(c) === fd) }, isEmptyObject: function (a) { for (var b in a) return !1; return !0 }, globalEval: function (a, b) { B(a, { nonce: b && b.nonce }) }, each: function (a, b) { var c, e = 0; if (ja(a)) for (c = a.length; e < c && !1 !== b.call(a[e], e, a[e]); e++); else for (e in a) if (!1 === b.call(a[e], e, a[e])) break; return a }, trim: function (a) {
                return null == a ? "" : (a + "").replace(gd,
                    "")
            }, makeArray: function (a, b) { var c = b || []; return null != a && (ja(Object(a)) ? d.merge(c, "string" == typeof a ? [a] : a) : Vb.call(c, a)), c }, inArray: function (a, b, c) { return null == b ? -1 : wb.call(b, a, c) }, merge: function (a, b) { for (var c = +b.length, e = 0, f = a.length; e < c; e++)a[f++] = b[e]; return a.length = f, a }, grep: function (a, b, c) { var e = [], f = 0, g = a.length; for (c = !c; f < g; f++)!b(a[f], f) !== c && e.push(a[f]); return e }, map: function (a, b, c) {
                var e, f, g = 0, k = []; if (ja(a)) for (e = a.length; g < e; g++)null != (f = b(a[g], g, c)) && k.push(f); else for (g in a) null !=
                    (f = b(a[g], g, c)) && k.push(f); return jc.apply([], k)
            }, guid: 1, support: Z
        }); "function" == typeof Symbol && (d.fn[Symbol.iterator] = Za[Symbol.iterator]); d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) { vb["[object " + b + "]"] = b.toLowerCase() }); var cb = function (a) {
            function b(h, m, p, t) {
                var v, A, x, F; var y = m && m.ownerDocument; var I = m ? m.nodeType : 9; if (p = p || [], "string" != typeof h || !h || 1 !== I && 9 !== I && 11 !== I) return p; if (!t && ((m ? m.ownerDocument || m : W) !== S && ua(m), m = m || S, aa)) {
                    if (11 !==
                        I && (F = hd.exec(h))) if (v = F[1]) if (9 === I) { if (!(A = m.getElementById(v))) return p; if (A.id === v) return p.push(A), p } else { if (y && (A = y.getElementById(v)) && la(m, A) && A.id === v) return p.push(A), p } else { if (F[2]) return Wa.apply(p, m.getElementsByTagName(h)), p; if ((v = F[3]) && H.getElementsByClassName && m.getElementsByClassName) return Wa.apply(p, m.getElementsByClassName(v)), p } if (!(!H.qsa || Fb[h + " "] || X && X.test(h) || 1 === I && "object" === m.nodeName.toLowerCase())) {
                            if (v = h, y = m, 1 === I && id.test(h)) {
                                (x = m.getAttribute("id")) ? x = x.replace(wc,
                                    xc) : m.setAttribute("id", x = K); for (y = (I = ba(h)).length; y--;)I[y] = "#" + x + " " + G(I[y]); v = I.join(","); y = Wb.test(h) && r(m.parentNode) || m
                            } try { return Wa.apply(p, y.querySelectorAll(v)), p } catch (P) { Fb(h, !0) } finally { x === K && m.removeAttribute("id") }
                        }
                } return Gb(h.replace(Hb, "$1"), m, p, t)
            } function c() { var h = []; return function v(p, t) { return h.push(p + " ") > Q.cacheLength && delete v[h.shift()], v[p + " "] = t } } function e(h) { return h[K] = !0, h } function f(h) {
                var m = S.createElement("fieldset"); try { return !!h(m) } catch (p) { return !1 } finally {
                    m.parentNode &&
                    m.parentNode.removeChild(m)
                }
            } function g(h, m) { for (var p = h.split("|"), t = p.length; t--;)Q.attrHandle[p[t]] = m } function k(h, m) { var p = m && h, t = p && 1 === h.nodeType && 1 === m.nodeType && h.sourceIndex - m.sourceIndex; if (t) return t; if (p) for (; p = p.nextSibling;)if (p === m) return -1; return h ? 1 : -1 } function l(h) { return function (m) { return "input" === m.nodeName.toLowerCase() && m.type === h } } function n(h) { return function (m) { var p = m.nodeName.toLowerCase(); return ("input" === p || "button" === p) && m.type === h } } function u(h) {
                return function (m) {
                    return "form" in
                        m ? m.parentNode && !1 === m.disabled ? "label" in m ? "label" in m.parentNode ? m.parentNode.disabled === h : m.disabled === h : m.isDisabled === h || m.isDisabled !== !h && jd(m) === h : m.disabled === h : "label" in m && m.disabled === h
                }
            } function w(h) { return e(function (m) { return m = +m, e(function (p, t) { for (var v, A = h([], p.length, m), x = A.length; x--;)p[v = A[x]] && (p[v] = !(t[v] = p[v])) }) }) } function r(h) { return h && "undefined" != typeof h.getElementsByTagName && h } function C() { } function G(h) { for (var m = 0, p = h.length, t = ""; m < p; m++)t += h[m].value; return t } function E(h,
                m, p) { var t = m.dir, v = m.next, A = v || t, x = p && "parentNode" === A, F = ka++; return m.first ? function (y, I, P) { for (; y = y[t];)if (1 === y.nodeType || x) return h(y, I, P); return !1 } : function (y, I, P) { var ea, ca, M, T = [ma, F]; if (P) for (; y = y[t];) { if ((1 === y.nodeType || x) && h(y, I, P)) return !0 } else for (; y = y[t];)if (1 === y.nodeType || x) if (ca = (M = y[K] || (y[K] = {}))[y.uniqueID] || (M[y.uniqueID] = {}), v && v === y.nodeName.toLowerCase()) y = y[t] || y; else { if ((ea = ca[A]) && ea[0] === ma && ea[1] === F) return T[2] = ea[2]; if ((ca[A] = T)[2] = h(y, I, P)) return !0 } return !1 } } function O(h) {
                    return 1 <
                        h.length ? function (m, p, t) { for (var v = h.length; v--;)if (!h[v](m, p, t)) return !1; return !0 } : h[0]
                } function Y(h, m, p, t, v) { for (var A, x = [], F = 0, y = h.length, I = null != m; F < y; F++)(A = h[F]) && (p && !p(A, t, v) || (x.push(A), I && m.push(F))); return x } function Ha(h, m, p, t, v, A) {
                    return t && !t[K] && (t = Ha(t)), v && !v[K] && (v = Ha(v, A)), e(function (x, F, y, I) {
                        var P, ea = [], ca = [], M = F.length, T; if (!(T = x)) { T = m || "*"; for (var V = y.nodeType ? [y] : y, Ia = [], sa = 0, na = V.length; sa < na; sa++)b(T, V[sa], Ia); T = Ia } T = !h || !x && m ? T : Y(T, ea, h, y, I); V = p ? v || (x ? h : M || t) ? [] : F : T; if (p &&
                            p(T, V, y, I), t) { var fa = Y(V, ca); t(fa, [], y, I); for (y = fa.length; y--;)(P = fa[y]) && (V[ca[y]] = !(T[ca[y]] = P)) } if (x) { if (v || h) { if (v) { fa = []; for (y = V.length; y--;)(P = V[y]) && fa.push(T[y] = P); v(null, V = [], fa, I) } for (y = V.length; y--;)(P = V[y]) && -1 < (fa = v ? $a(x, P) : ea[y]) && (x[fa] = !(F[fa] = P)) } } else V = Y(V === F ? V.splice(M, V.length) : V), v ? v(null, F, V, I) : Wa.apply(F, V)
                    })
                } function pa(h) {
                    var m, p, t = h.length, v = Q.relative[h[0].type]; var A = v || Q.relative[" "]; for (var x = v ? 1 : 0, F = E(function (P) { return P === m }, A, !0), y = E(function (P) {
                        return -1 < $a(m,
                            P)
                    }, A, !0), I = [function (P, ea, ca) { P = !v && (ca || ea !== Da) || ((m = ea).nodeType ? F(P, ea, ca) : y(P, ea, ca)); return m = null, P }]; x < t; x++)if (A = Q.relative[h[x].type]) I = [E(O(I), A)]; else { if ((A = Q.filter[h[x].type].apply(null, h[x].matches))[K]) { for (p = ++x; p < t && !Q.relative[h[p].type]; p++); return Ha(1 < x && O(I), 1 < x && G(h.slice(0, x - 1).concat({ value: " " === h[x - 2].type ? "*" : "" })).replace(Hb, "$1"), A, x < p && pa(h.slice(x, p)), p < t && pa(h = h.slice(p)), p < t && G(h)) } I.push(A) } return O(I)
                } var za, H, Q, ta, R, ba, jb, Gb, Da, Ea, Ja, ua, S, da, aa, X, Aa, Ka, la, K =
                    "sizzle" + 1 * new Date, W = a.document, ma = 0, ka = 0, La = c(), ab = c(), Ib = c(), Fb = c(), Xb = function (h, m) { return h === m && (Ja = !0), 0 }, kd = {}.hasOwnProperty, bb = [], ld = bb.pop, md = bb.push, Wa = bb.push, yc = bb.slice, $a = function (h, m) { for (var p = 0, t = h.length; p < t; p++)if (h[p] === m) return p; return -1 }, nd = RegExp("[\\x20\\t\\r\\n\\f]+", "g"), Hb = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), od = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, pd = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, id = /[\x20\t\r\n\f]|>/,
                    qd = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, rd = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, Jb = {
                        ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/, ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                        PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                        needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
                    }, sd = /HTML$/i, td = /^(?:input|select|textarea|button)$/i, ud = /^h\d$/i, ob = /^[^{]+\{\s*\[native \w/, hd = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Wb = /[+~]/, Sa = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), Ta = function (h, m, p) { h = "0x" + m - 65536; return h != h || p ? m : 0 > h ? String.fromCharCode(h + 65536) : String.fromCharCode(h >> 10 | 55296, 1023 & h | 56320) }, wc = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    xc = function (h, m) { return m ? "\x00" === h ? "\ufffd" : h.slice(0, -1) + "\\" + h.charCodeAt(h.length - 1).toString(16) + " " : "\\" + h }, zc = function () { ua() }, jd = E(function (h) { return !0 === h.disabled && "fieldset" === h.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { Wa.apply(bb = yc.call(W.childNodes), W.childNodes), bb[W.childNodes.length].nodeType } catch (h) { Wa = { apply: bb.length ? function (m, p) { md.apply(m, yc.call(p)) } : function (m, p) { for (var t = m.length, v = 0; m[t++] = p[v++];); m.length = t - 1 } } } for (za in H = b.support = {}, R = b.isXML =
                        function (h) { var m = (h.ownerDocument || h).documentElement; return !sd.test(h.namespaceURI || m && m.nodeName || "HTML") }, ua = b.setDocument = function (h) {
                            var m, p; h = h ? h.ownerDocument || h : W; return h !== S && 9 === h.nodeType && h.documentElement && (da = (S = h).documentElement, aa = !R(S), W !== S && (p = S.defaultView) && p.top !== p && (p.addEventListener ? p.addEventListener("unload", zc, !1) : p.attachEvent && p.attachEvent("onunload", zc)), H.attributes = f(function (t) { return t.className = "i", !t.getAttribute("className") }), H.getElementsByTagName = f(function (t) {
                                return t.appendChild(S.createComment("")),
                                    !t.getElementsByTagName("*").length
                            }), H.getElementsByClassName = ob.test(S.getElementsByClassName), H.getById = f(function (t) { return da.appendChild(t).id = K, !S.getElementsByName || !S.getElementsByName(K).length }), H.getById ? (Q.filter.ID = function (t) { var v = t.replace(Sa, Ta); return function (A) { return A.getAttribute("id") === v } }, Q.find.ID = function (t, v) { if ("undefined" != typeof v.getElementById && aa) { var A = v.getElementById(t); return A ? [A] : [] } }) : (Q.filter.ID = function (t) {
                                var v = t.replace(Sa, Ta); return function (A) {
                                    return (A =
                                        "undefined" != typeof A.getAttributeNode && A.getAttributeNode("id")) && A.value === v
                                }
                            }, Q.find.ID = function (t, v) { if ("undefined" != typeof v.getElementById && aa) { var A, x, F = v.getElementById(t); if (F) { if ((A = F.getAttributeNode("id")) && A.value === t) return [F]; var y = v.getElementsByName(t); for (x = 0; F = y[x++];)if ((A = F.getAttributeNode("id")) && A.value === t) return [F] } return [] } }), Q.find.TAG = H.getElementsByTagName ? function (t, v) {
                                return "undefined" != typeof v.getElementsByTagName ? v.getElementsByTagName(t) : H.qsa ? v.querySelectorAll(t) :
                                    void 0
                            } : function (t, v) { var A, x = [], F = 0, y = v.getElementsByTagName(t); if ("*" === t) { for (; A = y[F++];)1 === A.nodeType && x.push(A); return x } return y }, Q.find.CLASS = H.getElementsByClassName && function (t, v) { if ("undefined" != typeof v.getElementsByClassName && aa) return v.getElementsByClassName(t) }, Aa = [], X = [], (H.qsa = ob.test(S.querySelectorAll)) && (f(function (t) {
                                da.appendChild(t).innerHTML = "<a id='" + K + "'></a><select id='" + K + "-\r\\' msallowcapture=''><option selected=''></option></select>"; t.querySelectorAll("[msallowcapture^='']").length &&
                                    X.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"); t.querySelectorAll("[selected]").length || X.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"); t.querySelectorAll("[id~=" + K + "-]").length || X.push("~="); t.querySelectorAll(":checked").length || X.push(":checked"); t.querySelectorAll("a#" + K + "+*").length || X.push(".#.+[+~]")
                            }), f(function (t) {
                                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var v = S.createElement("input"); v.setAttribute("type", "hidden"); t.appendChild(v).setAttribute("name", "D"); t.querySelectorAll("[name=d]").length && X.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="); 2 !== t.querySelectorAll(":enabled").length && X.push(":enabled", ":disabled"); da.appendChild(t).disabled = !0; 2 !== t.querySelectorAll(":disabled").length && X.push(":enabled", ":disabled"); t.querySelectorAll("*,:x"); X.push(",.*:")
                            })), (H.matchesSelector = ob.test(Ka = da.matches || da.webkitMatchesSelector || da.mozMatchesSelector ||
                                da.oMatchesSelector || da.msMatchesSelector)) && f(function (t) { H.disconnectedMatch = Ka.call(t, "*"); Ka.call(t, "[s!='']:x"); Aa.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)") }), X = X.length &&
                                new RegExp(X.join("|")), Aa = Aa.length && new RegExp(Aa.join("|")), m = ob.test(da.compareDocumentPosition), la = m || ob.test(da.contains) ? function (t, v) { var A = 9 === t.nodeType ? t.documentElement : t, x = v && v.parentNode; return t === x || !(!x || 1 !== x.nodeType || !(A.contains ? A.contains(x) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(x))) } : function (t, v) { if (v) for (; v = v.parentNode;)if (v === t) return !0; return !1 }, Xb = m ? function (t, v) {
                                    if (t === v) return Ja = !0, 0; var A = !t.compareDocumentPosition - !v.compareDocumentPosition; return A ||
                                        (1 & (A = (t.ownerDocument || t) === (v.ownerDocument || v) ? t.compareDocumentPosition(v) : 1) || !H.sortDetached && v.compareDocumentPosition(t) === A ? t === S || t.ownerDocument === W && la(W, t) ? -1 : v === S || v.ownerDocument === W && la(W, v) ? 1 : Ea ? $a(Ea, t) - $a(Ea, v) : 0 : 4 & A ? -1 : 1)
                                } : function (t, v) {
                                    if (t === v) return Ja = !0, 0; var A = 0; var x = t.parentNode; var F = v.parentNode, y = [t], I = [v]; if (!x || !F) return t === S ? -1 : v === S ? 1 : x ? -1 : F ? 1 : Ea ? $a(Ea, t) - $a(Ea, v) : 0; if (x === F) return k(t, v); for (x = t; x = x.parentNode;)y.unshift(x); for (x = v; x = x.parentNode;)I.unshift(x);
                                    for (; y[A] === I[A];)A++; return A ? k(y[A], I[A]) : y[A] === W ? -1 : I[A] === W ? 1 : 0
                                }), S
                        }, b.matches = function (h, m) { return b(h, null, null, m) }, b.matchesSelector = function (h, m) { if ((h.ownerDocument || h) !== S && ua(h), !(!H.matchesSelector || !aa || Fb[m + " "] || Aa && Aa.test(m) || X && X.test(m))) try { var p = Ka.call(h, m); if (p || H.disconnectedMatch || h.document && 11 !== h.document.nodeType) return p } catch (t) { Fb(m, !0) } return 0 < b(m, S, null, [h]).length }, b.contains = function (h, m) { return (h.ownerDocument || h) !== S && ua(h), la(h, m) }, b.attr = function (h, m) {
                            (h.ownerDocument ||
                                h) !== S && ua(h); var p = Q.attrHandle[m.toLowerCase()]; p = p && kd.call(Q.attrHandle, m.toLowerCase()) ? p(h, m, !aa) : void 0; return void 0 !== p ? p : H.attributes || !aa ? h.getAttribute(m) : (p = h.getAttributeNode(m)) && p.specified ? p.value : null
                        }, b.escape = function (h) { return (h + "").replace(wc, xc) }, b.error = function (h) { throw Error("Syntax error, unrecognized expression: " + h); }, b.uniqueSort = function (h) {
                            var m, p = [], t = 0, v = 0; if (Ja = !H.detectDuplicates, Ea = !H.sortStable && h.slice(0), h.sort(Xb), Ja) {
                                for (; m = h[v++];)m === h[v] && (t = p.push(v));
                                for (; t--;)h.splice(p[t], 1)
                            } return Ea = null, h
                        }, ta = b.getText = function (h) { var m, p = "", t = 0; if (m = h.nodeType) if (1 === m || 9 === m || 11 === m) { if ("string" == typeof h.textContent) return h.textContent; for (h = h.firstChild; h; h = h.nextSibling)p += ta(h) } else { if (3 === m || 4 === m) return h.nodeValue } else for (; m = h[t++];)p += ta(m); return p }, (Q = b.selectors = {
                            cacheLength: 50, createPseudo: e, match: Jb, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                            preFilter: {
                                ATTR: function (h) { return h[1] = h[1].replace(Sa, Ta), h[3] = (h[3] || h[4] || h[5] || "").replace(Sa, Ta), "~=" === h[2] && (h[3] = " " + h[3] + " "), h.slice(0, 4) }, CHILD: function (h) { return h[1] = h[1].toLowerCase(), "nth" === h[1].slice(0, 3) ? (h[3] || b.error(h[0]), h[4] = +(h[4] ? h[5] + (h[6] || 1) : 2 * ("even" === h[3] || "odd" === h[3])), h[5] = +(h[7] + h[8] || "odd" === h[3])) : h[3] && b.error(h[0]), h }, PSEUDO: function (h) {
                                    var m, p = !h[6] && h[2]; return Jb.CHILD.test(h[0]) ? null : (h[3] ? h[2] = h[4] || h[5] || "" : p && qd.test(p) && (m = ba(p, !0)) && (m = p.indexOf(")",
                                        p.length - m) - p.length) && (h[0] = h[0].slice(0, m), h[2] = p.slice(0, m)), h.slice(0, 3))
                                }
                            }, filter: {
                                TAG: function (h) { var m = h.replace(Sa, Ta).toLowerCase(); return "*" === h ? function () { return !0 } : function (p) { return p.nodeName && p.nodeName.toLowerCase() === m } }, CLASS: function (h) { var m = La[h + " "]; return m || (m = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + h + "([\\x20\\t\\r\\n\\f]|$)"), La(h, function (p) { return m.test("string" == typeof p.className && p.className || "undefined" != typeof p.getAttribute && p.getAttribute("class") || "") })) }, ATTR: function (h,
                                    m, p) { return function (t) { t = b.attr(t, h); return null == t ? "!=" === m : !m || (t += "", "=" === m ? t === p : "!=" === m ? t !== p : "^=" === m ? p && 0 === t.indexOf(p) : "*=" === m ? p && -1 < t.indexOf(p) : "$=" === m ? p && t.slice(-p.length) === p : "~=" === m ? -1 < (" " + t.replace(nd, " ") + " ").indexOf(p) : "|=" === m && (t === p || t.slice(0, p.length + 1) === p + "-")) } }, CHILD: function (h, m, p, t, v) {
                                        var A = "nth" !== h.slice(0, 3), x = "last" !== h.slice(-4), F = "of-type" === m; return 1 === t && 0 === v ? function (y) { return !!y.parentNode } : function (y, I, P) {
                                            var ea, ca, M, T; I = A !== x ? "nextSibling" : "previousSibling";
                                            var V = y.parentNode, Ia = F && y.nodeName.toLowerCase(), sa = !P && !F, na = !1; if (V) {
                                                if (A) { for (; I;) { for (M = y; M = M[I];)if (F ? M.nodeName.toLowerCase() === Ia : 1 === M.nodeType) return !1; var fa = I = "only" === h && !fa && "nextSibling" } return !0 } if (fa = [x ? V.firstChild : V.lastChild], x && sa) for (na = (T = (ea = (P = (ca = (M = V)[K] || (M[K] = {}))[M.uniqueID] || (ca[M.uniqueID] = {}))[h] || [])[0] === ma && ea[1]) && ea[2], M = T && V.childNodes[T]; M = ++T && M && M[I] || (na = T = 0) || fa.pop();) { if (1 === M.nodeType && ++na && M === y) { P[h] = [ma, T, na]; break } } else if (sa && (na = T = (ea = ((ca = (M =
                                                    y)[K] || (M[K] = {}))[M.uniqueID] || (ca[M.uniqueID] = {}))[h] || [])[0] === ma && ea[1]), !1 === na) for (; (M = ++T && M && M[I] || (na = T = 0) || fa.pop()) && ((F ? M.nodeName.toLowerCase() !== Ia : 1 !== M.nodeType) || !++na || (sa && ((P = (ca = M[K] || (M[K] = {}))[M.uniqueID] || (ca[M.uniqueID] = {}))[h] = [ma, na]), M !== y));); return (na -= v) === t || 0 == na % t && 0 <= na / t
                                            }
                                        }
                                    }, PSEUDO: function (h, m) {
                                        var p, t = Q.pseudos[h] || Q.setFilters[h.toLowerCase()] || b.error("unsupported pseudo: " + h); return t[K] ? t(m) : 1 < t.length ? (p = [h, h, "", m], Q.setFilters.hasOwnProperty(h.toLowerCase()) ?
                                            e(function (v, A) { for (var x, F = t(v, m), y = F.length; y--;)v[x = $a(v, F[y])] = !(A[x] = F[y]) }) : function (v) { return t(v, 0, p) }) : t
                                    }
                            }, pseudos: {
                                not: e(function (h) { var m = [], p = [], t = jb(h.replace(Hb, "$1")); return t[K] ? e(function (v, A, x, F) { var y; x = t(v, null, F, []); for (F = v.length; F--;)(y = x[F]) && (v[F] = !(A[F] = y)) }) : function (v, A, x) { return m[0] = v, t(m, null, x, p), m[0] = null, !p.pop() } }), has: e(function (h) { return function (m) { return 0 < b(h, m).length } }), contains: e(function (h) {
                                    return h = h.replace(Sa, Ta), function (m) {
                                        return -1 < (m.textContent ||
                                            ta(m)).indexOf(h)
                                    }
                                }), lang: e(function (h) { return rd.test(h || "") || b.error("unsupported lang: " + h), h = h.replace(Sa, Ta).toLowerCase(), function (m) { var p; do if (p = aa ? m.lang : m.getAttribute("xml:lang") || m.getAttribute("lang")) return (p = p.toLowerCase()) === h || 0 === p.indexOf(h + "-"); while ((m = m.parentNode) && 1 === m.nodeType); return !1 } }), target: function (h) { var m = a.location && a.location.hash; return m && m.slice(1) === h.id }, root: function (h) { return h === da }, focus: function (h) {
                                    return h === S.activeElement && (!S.hasFocus || S.hasFocus()) &&
                                        !!(h.type || h.href || ~h.tabIndex)
                                }, enabled: u(!1), disabled: u(!0), checked: function (h) { var m = h.nodeName.toLowerCase(); return "input" === m && !!h.checked || "option" === m && !!h.selected }, selected: function (h) { return h.parentNode && h.parentNode.selectedIndex, !0 === h.selected }, empty: function (h) { for (h = h.firstChild; h; h = h.nextSibling)if (6 > h.nodeType) return !1; return !0 }, parent: function (h) { return !Q.pseudos.empty(h) }, header: function (h) { return ud.test(h.nodeName) }, input: function (h) { return td.test(h.nodeName) }, button: function (h) {
                                    var m =
                                        h.nodeName.toLowerCase(); return "input" === m && "button" === h.type || "button" === m
                                }, text: function (h) { var m; return "input" === h.nodeName.toLowerCase() && "text" === h.type && (null == (m = h.getAttribute("type")) || "text" === m.toLowerCase()) }, first: w(function () { return [0] }), last: w(function (h, m) { return [m - 1] }), eq: w(function (h, m, p) { return [0 > p ? p + m : p] }), even: w(function (h, m) { for (var p = 0; p < m; p += 2)h.push(p); return h }), odd: w(function (h, m) { for (var p = 1; p < m; p += 2)h.push(p); return h }), lt: w(function (h, m, p) {
                                    for (m = 0 > p ? p + m : m < p ? m : p; 0 <= --m;)h.push(m);
                                    return h
                                }), gt: w(function (h, m, p) { for (p = 0 > p ? p + m : p; ++p < m;)h.push(p); return h })
                            }
                        }).pseudos.nth = Q.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) Q.pseudos[za] = l(za); for (za in { submit: !0, reset: !0 }) Q.pseudos[za] = n(za); return C.prototype = Q.filters = Q.pseudos, Q.setFilters = new C, ba = b.tokenize = function (h, m) {
                            var p, t, v, A, x, F; if (x = ab[h + " "]) return m ? 0 : x.slice(0); x = h; var y = []; for (F = Q.preFilter; x;) {
                                for (A in p && !(t = od.exec(x)) || (t && (x = x.slice(t[0].length) || x), y.push(v = [])), p = !1, (t = pd.exec(x)) && (p = t.shift(),
                                    v.push({ value: p, type: t[0].replace(Hb, " ") }), x = x.slice(p.length)), Q.filter) !(t = Jb[A].exec(x)) || F[A] && !(t = F[A](t)) || (p = t.shift(), v.push({ value: p, type: A, matches: t }), x = x.slice(p.length)); if (!p) break
                            } return m ? x.length : x ? b.error(h) : ab(h, y).slice(0)
                        }, jb = b.compile = function (h, m) {
                            var p, t, v, A, x = [], F = [], y = Ib[h + " "]; if (!y) {
                                m || (m = ba(h)); for (p = m.length; p--;)(y = pa(m[p]))[K] ? x.push(y) : F.push(y); (y = Ib(h, (t = 0 < x.length, v = 0 < F.length, A = function (I, P, ea, ca, M) {
                                    var T, V, Ia = 0, sa = "0", na = I && [], fa = [], Ac = Da, Bc = I || v && Q.find.TAG("*",
                                        M), Cc = ma += null == Ac ? 1 : Math.random() || .1, vd = Bc.length; for (M && (Da = P === S || P || M); sa !== vd && null != (T = Bc[sa]); sa++) { if (v && T) { var Yb = 0; for (P || T.ownerDocument === S || (ua(T), ea = !aa); V = F[Yb++];)if (V(T, P || S, ea)) { ca.push(T); break } M && (ma = Cc) } t && ((T = !V && T) && Ia--, I && na.push(T)) } if (Ia += sa, t && sa !== Ia) { for (Yb = 0; V = x[Yb++];)V(na, fa, P, ea); if (I) { if (0 < Ia) for (; sa--;)na[sa] || fa[sa] || (fa[sa] = ld.call(ca)); fa = Y(fa) } Wa.apply(ca, fa); M && !I && 0 < fa.length && 1 < Ia + x.length && b.uniqueSort(ca) } return M && (ma = Cc, Da = Ac), na
                                }, t ? e(A) : A))).selector =
                                    h
                            } return y
                        }, Gb = b.select = function (h, m, p, t) {
                            var v, A, x, F, y, I = "function" == typeof h && h, P = !t && ba(h = I.selector || h); if (p = p || [], 1 === P.length) {
                                if (2 < (A = P[0] = P[0].slice(0)).length && "ID" === (x = A[0]).type && 9 === m.nodeType && aa && Q.relative[A[1].type]) { if (!(m = (Q.find.ID(x.matches[0].replace(Sa, Ta), m) || [])[0])) return p; I && (m = m.parentNode); h = h.slice(A.shift().value.length) } for (v = Jb.needsContext.test(h) ? 0 : A.length; v-- && (x = A[v], !Q.relative[F = x.type]);)if ((y = Q.find[F]) && (t = y(x.matches[0].replace(Sa, Ta), Wb.test(A[0].type) &&
                                    r(m.parentNode) || m))) { if (A.splice(v, 1), !(h = t.length && G(A))) return Wa.apply(p, t), p; break }
                            } return (I || jb(h, P))(t, m, !aa, p, !m || Wb.test(h) && r(m.parentNode) || m), p
                        }, H.sortStable = K.split("").sort(Xb).join("") === K, H.detectDuplicates = !!Ja, ua(), H.sortDetached = f(function (h) { return 1 & h.compareDocumentPosition(S.createElement("fieldset")) }), f(function (h) { return h.innerHTML = "<a href='#'></a>", "#" === h.firstChild.getAttribute("href") }) || g("type|href|height|width", function (h, m, p) {
                            if (!p) return h.getAttribute(m, "type" ===
                                m.toLowerCase() ? 1 : 2)
                        }), H.attributes && f(function (h) { return h.innerHTML = "<input/>", h.firstChild.setAttribute("value", ""), "" === h.firstChild.getAttribute("value") }) || g("value", function (h, m, p) { if (!p && "input" === h.nodeName.toLowerCase()) return h.defaultValue }), f(function (h) { return null == h.getAttribute("disabled") }) || g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (h, m, p) {
                            var t; if (!p) return !0 === h[m] ? m.toLowerCase() : (t =
                                h.getAttributeNode(m)) && t.specified ? t.value : null
                        }), b
        }(q); d.find = cb; d.expr = cb.selectors; d.expr[":"] = d.expr.pseudos; d.uniqueSort = d.unique = cb.uniqueSort; d.text = cb.getText; d.isXMLDoc = cb.isXML; d.contains = cb.contains; d.escapeSelector = cb.escape; var kb = function (a, b, c) { for (var e = [], f = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;)if (1 === a.nodeType) { if (f && d(a).is(c)) break; e.push(a) } return e }, Dc = function (a, b) { for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a); return c }, Ec = d.expr.match.needsContext, Fc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    d.filter = function (a, b, c) { var e = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === e.nodeType ? d.find.matchesSelector(e, a) ? [e] : [] : d.find.matches(a, d.grep(b, function (f) { return 1 === f.nodeType })) }; d.fn.extend({
        find: function (a) { var b, c = this.length, e = this; if ("string" != typeof a) return this.pushStack(d(a).filter(function () { for (b = 0; b < c; b++)if (d.contains(e[b], this)) return !0 })); var f = this.pushStack([]); for (b = 0; b < c; b++)d.find(a, e[b], f); return 1 < c ? d.uniqueSort(f) : f }, filter: function (a) {
            return this.pushStack(va(this,
                a || [], !1))
        }, not: function (a) { return this.pushStack(va(this, a || [], !0)) }, is: function (a) { return !!va(this, "string" == typeof a && Ec.test(a) ? d(a) : a || [], !1).length }
    }); var wd = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (d.fn.init = function (a, b, c) {
        var e, f; if (!a) return this; if (c = c || xd, "string" == typeof a) {
            if (!(e = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : wd.exec(a)) || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) {
                if (b = b instanceof d ? b[0] : b, d.merge(this, d.parseHTML(e[1],
                    b && b.nodeType ? b.ownerDocument || b : U, !0)), Fc.test(e[1]) && d.isPlainObject(b)) for (e in b) N(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this
            } return (f = U.getElementById(e[2])) && (this[0] = f, this.length = 1), this
        } return a.nodeType ? (this[0] = a, this.length = 1, this) : N(a) ? void 0 !== c.ready ? c.ready(a) : a(d) : d.makeArray(a, this)
    }).prototype = d.fn; var xd = d(U); var yd = /^(?:parents|prev(?:Until|All))/, zd = { children: !0, contents: !0, next: !0, prev: !0 }; d.fn.extend({
        has: function (a) {
            var b = d(a, this), c = b.length; return this.filter(function () {
                for (var e =
                    0; e < c; e++)if (d.contains(this, b[e])) return !0
            })
        }, closest: function (a, b) { var c, e = 0, f = this.length, g = [], k = "string" != typeof a && d(a); if (!Ec.test(a)) for (; e < f; e++)for (c = this[e]; c && c !== b; c = c.parentNode)if (11 > c.nodeType && (k ? -1 < k.index(c) : 1 === c.nodeType && d.find.matchesSelector(c, a))) { g.push(c); break } return this.pushStack(1 < g.length ? d.uniqueSort(g) : g) }, index: function (a) { return a ? "string" == typeof a ? wb.call(d(a), this[0]) : wb.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function (a, b) { return this.pushStack(d.uniqueSort(d.merge(this.get(), d(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    }); d.each({
        parent: function (a) { return (a = a.parentNode) && 11 !== a.nodeType ? a : null }, parents: function (a) { return kb(a, "parentNode") }, parentsUntil: function (a, b, c) { return kb(a, "parentNode", c) }, next: function (a) { return Oa(a, "nextSibling") }, prev: function (a) { return Oa(a, "previousSibling") }, nextAll: function (a) { return kb(a, "nextSibling") }, prevAll: function (a) {
            return kb(a,
                "previousSibling")
        }, nextUntil: function (a, b, c) { return kb(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return kb(a, "previousSibling", c) }, siblings: function (a) { return Dc((a.parentNode || {}).firstChild, a) }, children: function (a) { return Dc(a.firstChild) }, contents: function (a) { return "undefined" != typeof a.contentDocument ? a.contentDocument : (oa(a, "template") && (a = a.content || a), d.merge([], a.childNodes)) }
    }, function (a, b) {
        d.fn[a] = function (c, e) {
            var f = d.map(this, b, c); return "Until" !== a.slice(-5) && (e = c), e && "string" == typeof e &&
                (f = d.filter(e, f)), 1 < this.length && (zd[a] || d.uniqueSort(f), yd.test(a) && f.reverse()), this.pushStack(f)
        }
    }); var Na = /[^\x20\t\r\n\f]+/g; d.Callbacks = function (a) {
        var b, c; a = "string" == typeof a ? (b = a, c = {}, d.each(b.match(Na) || [], function (C, G) { c[G] = !0 }), c) : d.extend({}, a); var e, f, g, k, l = [], n = [], u = -1, w = function () { k = k || a.once; for (g = e = !0; n.length; u = -1)for (f = n.shift(); ++u < l.length;)!1 === l[u].apply(f[0], f[1]) && a.stopOnFalse && (u = l.length, f = !1); a.memory || (f = !1); e = !1; k && (l = f ? [] : "") }, r = {
            add: function () {
                return l && (f && !e && (u =
                    l.length - 1, n.push(f)), function E(G) { d.each(G, function (O, Y) { N(Y) ? a.unique && r.has(Y) || l.push(Y) : Y && Y.length && "string" !== D(Y) && E(Y) }) }(arguments), f && !e && w()), this
            }, remove: function () { return d.each(arguments, function (C, G) { for (var E; -1 < (E = d.inArray(G, l, E));)l.splice(E, 1), E <= u && u-- }), this }, has: function (C) { return C ? -1 < d.inArray(C, l) : 0 < l.length }, empty: function () { return l && (l = []), this }, disable: function () { return k = n = [], l = f = "", this }, disabled: function () { return !l }, lock: function () { return k = n = [], f || e || (l = f = ""), this },
            locked: function () { return !!k }, fireWith: function (C, G) { return k || (G = [C, (G = G || []).slice ? G.slice() : G], n.push(G), e || w()), this }, fire: function () { return r.fireWith(this, arguments), this }, fired: function () { return !!g }
        }; return r
    }; d.extend({
        Deferred: function (a) {
            var b = [["notify", "progress", d.Callbacks("memory"), d.Callbacks("memory"), 2], ["resolve", "done", d.Callbacks("once memory"), d.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", d.Callbacks("once memory"), d.Callbacks("once memory"), 1, "rejected"]], c = "pending",
            e = {
                state: function () { return c }, always: function () { return f.done(arguments).fail(arguments), this }, "catch": function (g) { return e.then(null, g) }, pipe: function () { var g = arguments; return d.Deferred(function (k) { d.each(b, function (l, n) { var u = N(g[n[4]]) && g[n[4]]; f[n[1]](function () { var w = u && u.apply(this, arguments); w && N(w.promise) ? w.promise().progress(k.notify).done(k.resolve).fail(k.reject) : k[n[0] + "With"](this, u ? [w] : arguments) }) }); g = null }).promise() }, then: function (g, k, l) {
                    function n(w, r, C, G) {
                        return function () {
                            var E =
                                this, O = arguments, Y = function () { var pa; if (!(w < u)) { if ((pa = C.apply(E, O)) === r.promise()) throw new TypeError("Thenable self-resolution"); var za = pa && ("object" == typeof pa || "function" == typeof pa) && pa.then; N(za) ? G ? za.call(pa, n(u, r, Ba, G), n(u, r, eb, G)) : (u++, za.call(pa, n(u, r, Ba, G), n(u, r, eb, G), n(u, r, Ba, r.notifyWith))) : (C !== Ba && (E = void 0, O = [pa]), (G || r.resolveWith)(E, O)) } }, Ha = G ? Y : function () {
                                    try { Y() } catch (pa) {
                                        d.Deferred.exceptionHook && d.Deferred.exceptionHook(pa, Ha.stackTrace), u <= w + 1 && (C !== eb && (E = void 0, O = [pa]), r.rejectWith(E,
                                            O))
                                    }
                                }; w ? Ha() : (d.Deferred.getStackHook && (Ha.stackTrace = d.Deferred.getStackHook()), q.setTimeout(Ha))
                        }
                    } var u = 0; return d.Deferred(function (w) { b[0][3].add(n(0, w, N(l) ? l : Ba, w.notifyWith)); b[1][3].add(n(0, w, N(g) ? g : Ba)); b[2][3].add(n(0, w, N(k) ? k : eb)) }).promise()
                }, promise: function (g) { return null != g ? d.extend(g, e) : e }
            }, f = {}; return d.each(b, function (g, k) {
                var l = k[2], n = k[5]; e[k[1]] = l.add; n && l.add(function () { c = n }, b[3 - g][2].disable, b[3 - g][3].disable, b[0][2].lock, b[0][3].lock); l.add(k[3].fire); f[k[0]] = function () {
                    return f[k[0] +
                        "With"](this === f ? void 0 : this, arguments), this
                }; f[k[0] + "With"] = l.fireWith
            }), e.promise(f), a && a.call(f, f), f
        }, when: function (a) { var b = arguments.length, c = b, e = Array(c), f = Va.call(arguments), g = d.Deferred(), k = function (l) { return function (n) { e[l] = this; f[l] = 1 < arguments.length ? Va.call(arguments) : n; --b || g.resolveWith(e, f) } }; if (1 >= b && (xb(a, g.done(k(c)).resolve, g.reject, !b), "pending" === g.state() || N(f[c] && f[c].then))) return g.then(); for (; c--;)xb(f[c], k(c), g.reject); return g.promise() }
    }); var Ad = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    d.Deferred.exceptionHook = function (a, b) { q.console && q.console.warn && a && Ad.test(a.name) && q.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b) }; d.readyException = function (a) { q.setTimeout(function () { throw a; }) }; var Zb = d.Deferred(); d.fn.ready = function (a) { return Zb.then(a)["catch"](function (b) { d.readyException(b) }), this }; d.extend({ isReady: !1, readyWait: 1, ready: function (a) { (!0 === a ? --d.readyWait : d.isReady) || (d.isReady = !0) !== a && 0 < --d.readyWait || Zb.resolveWith(U, [d]) } }); d.ready.then = Zb.then; "complete" ===
        U.readyState || "loading" !== U.readyState && !U.documentElement.doScroll ? q.setTimeout(d.ready) : (U.addEventListener("DOMContentLoaded", L), q.addEventListener("load", L)); var Ua = function (a, b, c, e, f, g, k) { var l = 0, n = a.length, u = null == c; if ("object" === D(c)) for (l in f = !0, c) Ua(a, b, l, c[l], !0, g, k); else if (void 0 !== e && (f = !0, N(e) || (k = !0), u && (k ? (b.call(a, e), b = null) : (u = b, b = function (w, r, C) { return u.call(d(w), C) })), b)) for (; l < n; l++)b(a[l], c, k ? e : e.call(a[l], l, b(a[l], c))); return f ? a : u ? b.call(a) : n ? b(a[0], c) : g }, Uc = /^-ms-/, Vc = /-([a-z])/g,
            Kb = function (a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }; wa.uid = 1; wa.prototype = {
                cache: function (a) { var b = a[this.expando]; return b || (b = {}, Kb(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b }, set: function (a, b, c) { var e; a = this.cache(a); if ("string" == typeof b) a[qa(b)] = c; else for (e in b) a[qa(e)] = b[e]; return a }, get: function (a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][qa(b)] }, access: function (a, b, c) {
                    return void 0 === b ||
                        b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
                }, remove: function (a, b) { var c = a[this.expando]; if (void 0 !== c) { if (void 0 !== b) { var e = (b = Array.isArray(b) ? b.map(qa) : (b = qa(b)) in c ? [b] : b.match(Na) || []).length; for (; e--;)delete c[b[e]] } (void 0 === b || d.isEmptyObject(c)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } }, hasData: function (a) { a = a[this.expando]; return void 0 !== a && !d.isEmptyObject(a) }
            }; var J = new wa, xa = new wa, Xc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Wc = /[A-Z]/g;
    d.extend({ hasData: function (a) { return xa.hasData(a) || J.hasData(a) }, data: function (a, b, c) { return xa.access(a, b, c) }, removeData: function (a, b) { xa.remove(a, b) }, _data: function (a, b, c) { return J.access(a, b, c) }, _removeData: function (a, b) { J.remove(a, b) } }); d.fn.extend({
        data: function (a, b) {
            var c, e, f, g = this[0], k = g && g.attributes; if (void 0 === a) {
                if (this.length && (f = xa.get(g), 1 === g.nodeType && !J.get(g, "hasDataAttrs"))) {
                    for (c = k.length; c--;)k[c] && 0 === (e = k[c].name).indexOf("data-") && (e = qa(e.slice(5)), Ma(g, e, f[e])); J.set(g,
                        "hasDataAttrs", !0)
                } return f
            } return "object" == typeof a ? this.each(function () { xa.set(this, a) }) : Ua(this, function (l) { var n; if (g && void 0 === l) return void 0 !== (n = xa.get(g, a)) ? n : void 0 !== (n = Ma(g, a)) ? n : void 0; this.each(function () { xa.set(this, a, l) }) }, null, b, 1 < arguments.length, null, !0)
        }, removeData: function (a) { return this.each(function () { xa.remove(this, a) }) }
    }); d.extend({
        queue: function (a, b, c) {
            var e; if (a) return b = (b || "fx") + "queue", e = J.get(a, b), c && (!e || Array.isArray(c) ? e = J.access(a, b, d.makeArray(c)) : e.push(c)), e ||
                []
        }, dequeue: function (a, b) { b = b || "fx"; var c = d.queue(a, b), e = c.length, f = c.shift(), g = d._queueHooks(a, b); "inprogress" === f && (f = c.shift(), e--); f && ("fx" === b && c.unshift("inprogress"), delete g.stop, f.call(a, function () { d.dequeue(a, b) }, g)); !e && g && g.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return J.get(a, c) || J.access(a, c, { empty: d.Callbacks("once memory").add(function () { J.remove(a, [b + "queue", c]) }) }) }
    }); d.fn.extend({
        queue: function (a, b) {
            var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length <
                c ? d.queue(this[0], a) : void 0 === b ? this : this.each(function () { var e = d.queue(this, a, b); d._queueHooks(this, a); "fx" === a && "inprogress" !== e[0] && d.dequeue(this, a) })
        }, dequeue: function (a) { return this.each(function () { d.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) {
            var c, e = 1, f = d.Deferred(), g = this, k = this.length, l = function () { --e || f.resolveWith(g, [g]) }; "string" != typeof a && (b = a, a = void 0); for (a = a || "fx"; k--;)(c = J.get(g[k], a + "queueHooks")) && c.empty && (e++, c.empty.add(l));
            return l(), f.promise(b)
        }
    }); var Gc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, lb = new RegExp("^(?:([+-])=|)(" + Gc + ")([a-z%]*)$", "i"), Ra = ["Top", "Right", "Bottom", "Left"], pb = U.documentElement, gb = function (a) { return d.contains(a.ownerDocument, a) }, Bd = { composed: !0 }; pb.getRootNode && (gb = function (a) { return d.contains(a.ownerDocument, a) || a.getRootNode(Bd) === a.ownerDocument }); var yb = function (a, b) { return "none" === (a = b || a).style.display || "" === a.style.display && gb(a) && "none" === d.css(a, "display") }, Hc = function (a, b, c,
        e) { var f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; for (f in c = c.apply(a, e || []), b) a.style[f] = g[f]; return c }, dc = {}; d.fn.extend({ show: function () { return ya(this, !0) }, hide: function () { return ya(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { yb(this) ? d(this).show() : d(this).hide() }) } }); var qb = /^(?:checkbox|radio)$/i, ec = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, fc = /^$|^module$|\/(?:java|ecma)script/i, Ca = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]
        }; Ca.optgroup = Ca.option; Ca.tbody = Ca.tfoot = Ca.colgroup = Ca.caption = Ca.thead; Ca.th = Ca.td; var Lb, Yc = /<|&#?\w+;/; var Mb = U.createDocumentFragment().appendChild(U.createElement("div")); (Lb = U.createElement("input")).setAttribute("type", "radio"); Lb.setAttribute("checked", "checked"); Lb.setAttribute("name", "t"); Mb.appendChild(Lb);
    Z.checkClone = Mb.cloneNode(!0).cloneNode(!0).lastChild.checked; Mb.innerHTML = "<textarea>x</textarea>"; Z.noCloneChecked = !!Mb.cloneNode(!0).lastChild.defaultValue; var Cd = /^key/, Dd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ic = /^([^.]*)(?:\.(.+)|)/; d.event = {
        global: {}, add: function (a, b, c, e, f) {
            var g, k, l, n, u, w, r, C, G; if (u = J.get(a)) for (c.handler && (c = (g = c).handler, f = g.selector), f && d.find.matchesSelector(pb, f), c.guid || (c.guid = d.guid++), (n = u.events) || (n = u.events = {}), (k = u.handle) || (k = u.handle = function (O) {
                return "undefined" !=
                    typeof d && d.event.triggered !== O.type ? d.event.dispatch.apply(a, arguments) : void 0
            }), u = (b = (b || "").match(Na) || [""]).length; u--;) {
                var E = G = (l = Ic.exec(b[u]) || [])[1]; l = (l[2] || "").split(".").sort(); E && (r = d.event.special[E] || {}, E = (f ? r.delegateType : r.bindType) || E, r = d.event.special[E] || {}, w = d.extend({ type: E, origType: G, data: e, handler: c, guid: c.guid, selector: f, needsContext: f && d.expr.match.needsContext.test(f), namespace: l.join(".") }, g), (C = n[E]) || ((C = n[E] = []).delegateCount = 0, r.setup && !1 !== r.setup.call(a, e, l, k) || a.addEventListener &&
                    a.addEventListener(E, k)), r.add && (r.add.call(a, w), w.handler.guid || (w.handler.guid = c.guid)), f ? C.splice(C.delegateCount++, 0, w) : C.push(w), d.event.global[E] = !0)
            }
        }, remove: function (a, b, c, e, f) {
            var g, k, l, n, u, w, r, C, G = J.hasData(a) && J.get(a); if (G && (n = G.events)) {
                for (u = (b = (b || "").match(Na) || [""]).length; u--;)if (w = C = (l = Ic.exec(b[u]) || [])[1], r = (l[2] || "").split(".").sort(), w) {
                    var E = d.event.special[w] || {}; var O = n[w = (e ? E.delegateType : E.bindType) || w] || []; l = l[2] && new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    for (k = g = O.length; g--;) { var Y = O[g]; !f && C !== Y.origType || c && c.guid !== Y.guid || l && !l.test(Y.namespace) || e && e !== Y.selector && ("**" !== e || !Y.selector) || (O.splice(g, 1), Y.selector && O.delegateCount--, E.remove && E.remove.call(a, Y)) } k && !O.length && (E.teardown && !1 !== E.teardown.call(a, r, G.handle) || d.removeEvent(a, w, G.handle), delete n[w])
                } else for (w in n) d.event.remove(a, w + b[u], c, e, !0); d.isEmptyObject(n) && J.remove(a, "handle events")
            }
        }, dispatch: function (a) {
            var b, c, e, f, g = d.event.fix(a), k = Array(arguments.length); var l =
                (J.get(this, "events") || {})[g.type] || []; var n = d.event.special[g.type] || {}; k[0] = g; for (b = 1; b < arguments.length; b++)k[b] = arguments[b]; if (g.delegateTarget = this, !n.preDispatch || !1 !== n.preDispatch.call(this, g)) {
                    var u = d.event.handlers.call(this, g, l); for (b = 0; (e = u[b++]) && !g.isPropagationStopped();)for (g.currentTarget = e.elem, l = 0; (f = e.handlers[l++]) && !g.isImmediatePropagationStopped();)g.rnamespace && !1 !== f.namespace && !g.rnamespace.test(f.namespace) || (g.handleObj = f, g.data = f.data, void 0 !== (c = ((d.event.special[f.origType] ||
                        {}).handle || f.handler).apply(e.elem, k)) && !1 === (g.result = c) && (g.preventDefault(), g.stopPropagation())); return n.postDispatch && n.postDispatch.call(this, g), g.result
                }
        }, handlers: function (a, b) {
            var c, e, f, g = [], k = b.delegateCount, l = a.target; if (k && l.nodeType && !("click" === a.type && 1 <= a.button)) for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== a.type || !0 !== l.disabled)) {
                var n = []; var u = {}; for (c = 0; c < k; c++)void 0 === u[f = (e = b[c]).selector + " "] && (u[f] = e.needsContext ? -1 < d(f, this).index(l) : d.find(f, this,
                    null, [l]).length), u[f] && n.push(e); n.length && g.push({ elem: l, handlers: n })
            } return l = this, k < b.length && g.push({ elem: l, handlers: b.slice(k) }), g
        }, addProp: function (a, b) { Object.defineProperty(d.Event.prototype, a, { enumerable: !0, configurable: !0, get: N(b) ? function () { if (this.originalEvent) return b(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[a] }, set: function (c) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: c }) } }) }, fix: function (a) {
            return a[d.expando] ?
                a : new d.Event(a)
        }, special: { load: { noBubble: !0 }, click: { setup: function (a) { a = this || a; return qb.test(a.type) && a.click && oa(a, "input") && Qa(a, "click", ia), !1 }, trigger: function (a) { a = this || a; return qb.test(a.type) && a.click && oa(a, "input") && Qa(a, "click"), !0 }, _default: function (a) { a = a.target; return qb.test(a.type) && a.click && oa(a, "input") && J.get(a, "click") || oa(a, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }
    }; d.removeEvent = function (a, b,
        c) { a.removeEventListener && a.removeEventListener(b, c) }; d.Event = function (a, b) {
            if (!(this instanceof d.Event)) return new d.Event(a, b); a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? ia : Pa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a; b && d.extend(this, b); this.timeStamp = a && a.timeStamp || Date.now(); this[d.expando] =
                !0
        }; d.Event.prototype = {
            constructor: d.Event, isDefaultPrevented: Pa, isPropagationStopped: Pa, isImmediatePropagationStopped: Pa, isSimulated: !1, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = ia; a && !this.isSimulated && a.preventDefault() }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = ia; a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function () {
                var a = this.originalEvent; this.isImmediatePropagationStopped = ia; a && !this.isSimulated &&
                    a.stopImmediatePropagation(); this.stopPropagation()
            }
        }; d.each({
            altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (a) {
                var b = a.button; return null == a.which && Cd.test(a.type) ? null != a.charCode ? a.charCode :
                    a.keyCode : !a.which && void 0 !== b && Dd.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
            }
        }, d.event.addProp); d.each({ focus: "focusin", blur: "focusout" }, function (a, b) { d.event.special[a] = { setup: function () { return Qa(this, a, gc), !1 }, trigger: function () { return Qa(this, a), !0 }, delegateType: b } }); d.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
            d.event.special[a] = {
                delegateType: b, bindType: b, handle: function (c) {
                    var e, f = c.relatedTarget, g = c.handleObj; return f &&
                        (f === this || d.contains(this, f)) || (c.type = g.origType, e = g.handler.apply(this, arguments), c.type = b), e
                }
            }
        }); d.fn.extend({
            on: function (a, b, c, e) { return Ab(this, a, b, c, e) }, one: function (a, b, c, e) { return Ab(this, a, b, c, e, 1) }, off: function (a, b, c) {
                var e, f; if (a && a.preventDefault && a.handleObj) return e = a.handleObj, d(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this; if ("object" == typeof a) { for (f in a) this.off(f, b, a[f]); return this } return !1 !== b && "function" != typeof b || (c = b,
                    b = void 0), !1 === c && (c = Pa), this.each(function () { d.event.remove(this, a, c, b) })
            }
        }); var Ed = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Fd = /<script|<style|<link/i, ad = /checked\s*(?:[^=]|=\s*.checked.)/i, bd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; d.extend({
            htmlPrefilter: function (a) { return a.replace(Ed, "<$1></$2>") }, clone: function (a, b, c) {
                var e, f, g, k = a.cloneNode(!0), l = gb(a); if (!(Z.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || d.isXMLDoc(a))) {
                    var n = ra(k);
                    var u = 0; for (e = (f = ra(a)).length; u < e; u++) { var w = f[u]; var r = n[u]; void 0; "input" === (g = r.nodeName.toLowerCase()) && qb.test(w.type) ? r.checked = w.checked : "input" !== g && "textarea" !== g || (r.defaultValue = w.defaultValue) }
                } if (b) if (c) for (f = f || ra(a), n = n || ra(k), u = 0, e = f.length; u < e; u++)ic(f[u], n[u]); else ic(a, k); return 0 < (n = ra(k, "script")).length && mb(n, !l && ra(a, "script")), k
            }, cleanData: function (a) {
                for (var b, c, e, f = d.event.special, g = 0; void 0 !== (c = a[g]); g++)if (Kb(c)) {
                    if (b = c[J.expando]) {
                        if (b.events) for (e in b.events) f[e] ?
                            d.event.remove(c, e) : d.removeEvent(c, e, b.handle); c[J.expando] = void 0
                    } c[xa.expando] && (c[xa.expando] = void 0)
                }
            }
        }); d.fn.extend({
            detach: function (a) { return kc(this, a, !0) }, remove: function (a) { return kc(this, a) }, text: function (a) { return Ua(this, function (b) { return void 0 === b ? d.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b) }) }, null, a, arguments.length) }, append: function () {
                return hb(this, arguments, function (a) {
                    1 !== this.nodeType && 11 !== this.nodeType &&
                    9 !== this.nodeType || hc(this, a).appendChild(a)
                })
            }, prepend: function () { return hb(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = hc(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return hb(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return hb(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++)1 ===
                    a.nodeType && (d.cleanData(ra(a, !1)), a.textContent = ""); return this
            }, clone: function (a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function () { return d.clone(this, a, b) }) }, html: function (a) {
                return Ua(this, function (b) {
                    var c = this[0] || {}, e = 0, f = this.length; if (void 0 === b && 1 === c.nodeType) return c.innerHTML; if ("string" == typeof b && !Fd.test(b) && !Ca[(ec.exec(b) || ["", ""])[1].toLowerCase()]) { b = d.htmlPrefilter(b); try { for (; e < f; e++)1 === (c = this[e] || {}).nodeType && (d.cleanData(ra(c, !1)), c.innerHTML = b); c = 0 } catch (g) { } } c &&
                        this.empty().append(b)
                }, null, a, arguments.length)
            }, replaceWith: function () { var a = []; return hb(this, arguments, function (b) { var c = this.parentNode; 0 > d.inArray(this, a) && (d.cleanData(ra(this)), c && c.replaceChild(b, this)) }, a) }
        }); d.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { d.fn[a] = function (c) { for (var e = [], f = d(c), g = f.length - 1, k = 0; k <= g; k++)c = k === g ? this : this.clone(!0), d(f[k])[b](c), Vb.apply(e, c.get()); return this.pushStack(e) } });
    var Nb = new RegExp("^(" + Gc + ")(?!px)[a-z%]+$", "i"), Bb = function (a) { var b = a.ownerDocument.defaultView; return b && b.opener || (b = q), b.getComputedStyle(a) }, cd = new RegExp(Ra.join("|"), "i"); !function () {
        function a() {
            if (l) {
                k.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"; l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"; pb.appendChild(k).appendChild(l); var n = q.getComputedStyle(l);
                b = "1%" !== n.top; g = 12 === Math.round(parseFloat(n.marginLeft)); l.style.right = "60%"; f = 36 === Math.round(parseFloat(n.right)); c = 36 === Math.round(parseFloat(n.width)); l.style.position = "absolute"; e = 12 === Math.round(parseFloat(l.offsetWidth / 3)); pb.removeChild(k); l = null
            }
        } var b, c, e, f, g, k = U.createElement("div"), l = U.createElement("div"); l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === l.style.backgroundClip, d.extend(Z, {
            boxSizingReliable: function () {
                return a(),
                    c
            }, pixelBoxStyles: function () { return a(), f }, pixelPosition: function () { return a(), b }, reliableMarginLeft: function () { return a(), g }, scrollboxSize: function () { return a(), e }
        }))
    }(); var oc = ["Webkit", "Moz", "ms"], nc = U.createElement("div").style, mc = {}, Gd = /^(none|table(?!-c[ea]).+)/, Jc = /^--/, Hd = { position: "absolute", visibility: "hidden", display: "block" }, Kc = { letterSpacing: "0", fontWeight: "400" }; d.extend({
        cssHooks: { opacity: { get: function (a, b) { if (b) { var c = nb(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: {
            animationIterationCount: !0,
            columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0
        }, cssProps: {}, style: function (a, b, c, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, k, l = qa(b), n = Jc.test(b), u = a.style; if (n || (b = Ob(l)), k = d.cssHooks[b] || d.cssHooks[l], void 0 === c) return k && "get" in k && void 0 !== (f = k.get(a, !1, e)) ? f : u[b]; "string" === (g = typeof c) &&
                    (f = lb.exec(c)) && f[1] && (c = fb(a, b, f), g = "number"); null != c && c == c && ("number" !== g || n || (c += f && f[3] || (d.cssNumber[l] ? "" : "px")), Z.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (u[b] = "inherit"), k && "set" in k && void 0 === (c = k.set(a, c, e)) || (n ? u.setProperty(b, c) : u[b] = c))
            }
        }, css: function (a, b, c, e) {
            var f, g, k, l = qa(b); return Jc.test(b) || (b = Ob(l)), (k = d.cssHooks[b] || d.cssHooks[l]) && "get" in k && (f = k.get(a, !0, c)), void 0 === f && (f = nb(a, b, e)), "normal" === f && b in Kc && (f = Kc[b]), "" === c || c ? (g = parseFloat(f), !0 === c || isFinite(g) ?
                g || 0 : f) : f
        }
    }); d.each(["height", "width"], function (a, b) {
        d.cssHooks[b] = {
            get: function (c, e, f) { if (e) return !Gd.test(d.css(c, "display")) || c.getClientRects().length && c.getBoundingClientRect().width ? qc(c, b, f) : Hc(c, Hd, function () { return qc(c, b, f) }) }, set: function (c, e, f) {
                var g, k = Bb(c), l = !Z.scrollboxSize() && "absolute" === k.position, n = (l || f) && "border-box" === d.css(c, "boxSizing", !1, k); f = f ? Pb(c, b, f, n, k) : 0; return n && l && (f -= Math.ceil(c["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(k[b]) - Pb(c, b, "border", !1, k) - .5)),
                    f && (g = lb.exec(e)) && "px" !== (g[3] || "px") && (c.style[b] = e, e = d.css(c, b)), pc(0, e, f)
            }
        }
    }); d.cssHooks.marginLeft = lc(Z.reliableMarginLeft, function (a, b) { if (b) return (parseFloat(nb(a, "marginLeft")) || a.getBoundingClientRect().left - Hc(a, { marginLeft: 0 }, function () { return a.getBoundingClientRect().left })) + "px" }); d.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
        d.cssHooks[a + b] = { expand: function (c) { var e = 0, f = {}; for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > e; e++)f[a + Ra[e] + b] = c[e] || c[e - 2] || c[0]; return f } }; "margin" !==
            a && (d.cssHooks[a + b].set = pc)
    }); d.fn.extend({ css: function (a, b) { return Ua(this, function (c, e, f) { var g, k = {}, l = 0; if (Array.isArray(e)) { f = Bb(c); for (g = e.length; l < g; l++)k[e[l]] = d.css(c, e[l], !1, f); return k } return void 0 !== f ? d.style(c, e, f) : d.css(c, e) }, a, b, 1 < arguments.length) } }); ((d.Tween = Fa).prototype = {
        constructor: Fa, init: function (a, b, c, e, f, g) { this.elem = a; this.prop = c; this.easing = f || d.easing._default; this.options = b; this.start = this.now = this.cur(); this.end = e; this.unit = g || (d.cssNumber[c] ? "" : "px") }, cur: function () {
            var a =
                Fa.propHooks[this.prop]; return a && a.get ? a.get(this) : Fa.propHooks._default.get(this)
        }, run: function (a) { var b, c = Fa.propHooks[this.prop]; return this.options.duration ? this.pos = b = d.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Fa.propHooks._default.set(this), this }
    }).init.prototype = Fa.prototype; (Fa.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = d.css(a.elem, a.prop, "")) && "auto" !== b ? b : 0
            }, set: function (a) { d.fx.step[a.prop] ? d.fx.step[a.prop](a) : 1 !== a.elem.nodeType || !d.cssHooks[a.prop] && null == a.elem.style[Ob(a.prop)] ? a.elem[a.prop] = a.now : d.style(a.elem, a.prop, a.now + a.unit) }
        }
    }).scrollTop = Fa.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }; d.easing = {
        linear: function (a) { return a }, swing: function (a) {
            return .5 -
                Math.cos(a * Math.PI) / 2
        }, _default: "swing"
    }; d.fx = Fa.prototype.init; d.fx.step = {}; var ib, Cb, Id = /^(?:toggle|show|hide)$/, Jd = /queueHooks$/; d.Animation = d.extend(Ga, {
        tweeners: { "*": [function (a, b) { var c = this.createTween(a, b); return fb(c.elem, a, lb.exec(b), c), c }] }, tweener: function (a, b) { N(a) ? (b = a, a = ["*"]) : a = a.match(Na); for (var c, e = 0, f = a.length; e < f; e++)c = a[e], Ga.tweeners[c] = Ga.tweeners[c] || [], Ga.tweeners[c].unshift(b) }, prefilters: [function (a, b, c) {
            var e, f, g, k, l, n, u, w = "width" in b || "height" in b, r = this, C = {}, G = a.style,
            E = a.nodeType && yb(a), O = J.get(a, "fxshow"); for (e in c.queue || (null == (k = d._queueHooks(a, "fx")).unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function () { k.unqueued || l() }), k.unqueued++, r.always(function () { r.always(function () { k.unqueued--; d.queue(a, "fx").length || k.empty.fire() }) })), b) if (f = b[e], Id.test(f)) { if (delete b[e], g = g || "toggle" === f, f === (E ? "hide" : "show")) { if ("show" !== f || !O || void 0 === O[e]) continue; E = !0 } C[e] = O && O[e] || d.style(a, e) } if ((b = !d.isEmptyObject(b)) || !d.isEmptyObject(C)) for (e in w && 1 === a.nodeType &&
                (c.overflow = [G.overflow, G.overflowX, G.overflowY], null == (n = O && O.display) && (n = J.get(a, "display")), "none" === (u = d.css(a, "display")) && (n ? u = n : (ya([a], !0), n = a.style.display || n, u = d.css(a, "display"), ya([a]))), ("inline" === u || "inline-block" === u && null != n) && "none" === d.css(a, "float") && (b || (r.done(function () { G.display = n }), null == n && (u = G.display, n = "none" === u ? "" : u)), G.display = "inline-block")), c.overflow && (G.overflow = "hidden", r.always(function () { G.overflow = c.overflow[0]; G.overflowX = c.overflow[1]; G.overflowY = c.overflow[2] })),
                b = !1, C) b || (O ? "hidden" in O && (E = O.hidden) : O = J.access(a, "fxshow", { display: n }), g && (O.hidden = !E), E && ya([a], !0), r.done(function () { for (e in E || ya([a]), J.remove(a, "fxshow"), C) d.style(a, e, C[e]) })), b = sc(E ? O[e] : 0, e, r), e in O || (O[e] = b.start, E && (b.end = b.start, b.start = 0))
        }], prefilter: function (a, b) { b ? Ga.prefilters.unshift(a) : Ga.prefilters.push(a) }
    }); d.speed = function (a, b, c) {
        var e = a && "object" == typeof a ? d.extend({}, a) : { complete: c || !c && b || N(a) && a, duration: a, easing: c && b || b && !N(b) && b }; return d.fx.off ? e.duration = 0 : "number" !=
            typeof e.duration && (e.duration in d.fx.speeds ? e.duration = d.fx.speeds[e.duration] : e.duration = d.fx.speeds._default), null != e.queue && !0 !== e.queue || (e.queue = "fx"), e.old = e.complete, e.complete = function () { N(e.old) && e.old.call(this); e.queue && d.dequeue(this, e.queue) }, e
    }; d.fn.extend({
        fadeTo: function (a, b, c, e) { return this.filter(yb).css("opacity", 0).show().end().animate({ opacity: b }, a, c, e) }, animate: function (a, b, c, e) {
            var f = d.isEmptyObject(a), g = d.speed(b, c, e); b = function () {
                var k = Ga(this, d.extend({}, a), g); (f || J.get(this,
                    "finish")) && k.stop(!0)
            }; return b.finish = b, f || !1 === g.queue ? this.each(b) : this.queue(g.queue, b)
        }, stop: function (a, b, c) {
            var e = function (f) { var g = f.stop; delete f.stop; g(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
                var f = !0, g = null != a && a + "queueHooks", k = d.timers, l = J.get(this); if (g) l[g] && l[g].stop && e(l[g]); else for (g in l) l[g] && l[g].stop && Jd.test(g) && e(l[g]); for (g = k.length; g--;)k[g].elem !== this || null != a && k[g].queue !== a || (k[g].anim.stop(c), f = !1, k.splice(g,
                    1)); !f && c || d.dequeue(this, a)
            })
        }, finish: function (a) { return !1 !== a && (a = a || "fx"), this.each(function () { var b = J.get(this), c = b[a + "queue"]; var e = b[a + "queueHooks"]; var f = d.timers, g = c ? c.length : 0; b.finish = !0; d.queue(this, a, []); e && e.stop && e.stop.call(this, !0); for (e = f.length; e--;)f[e].elem === this && f[e].queue === a && (f[e].anim.stop(!0), f.splice(e, 1)); for (e = 0; e < g; e++)c[e] && c[e].finish && c[e].finish.call(this); delete b.finish }) }
    }); d.each(["toggle", "show", "hide"], function (a, b) {
        var c = d.fn[b]; d.fn[b] = function (e, f, g) {
            return null ==
                e || "boolean" == typeof e ? c.apply(this, arguments) : this.animate(Db(b, !0), e, f, g)
        }
    }); d.each({ slideDown: Db("show"), slideUp: Db("hide"), slideToggle: Db("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { d.fn[a] = function (c, e, f) { return this.animate(b, c, e, f) } }); d.timers = []; d.fx.tick = function () { var a, b = 0, c = d.timers; for (ib = Date.now(); b < c.length; b++)(a = c[b])() || c[b] !== a || c.splice(b--, 1); c.length || d.fx.stop(); ib = void 0 }; d.fx.timer = function (a) { d.timers.push(a); d.fx.start() };
    d.fx.interval = 13; d.fx.start = function () { Cb || (Cb = !0, Qb()) }; d.fx.stop = function () { Cb = null }; d.fx.speeds = { slow: 600, fast: 200, _default: 400 }; d.fn.delay = function (a, b) { return a = d.fx && d.fx.speeds[a] || a, b = b || "fx", this.queue(b, function (c, e) { var f = q.setTimeout(c, a); e.stop = function () { q.clearTimeout(f) } }) }; var rb = U.createElement("input"); var Kd = U.createElement("select").appendChild(U.createElement("option")); rb.type = "checkbox"; Z.checkOn = "" !== rb.value; Z.optSelected = Kd.selected; (rb = U.createElement("input")).value = "t";
    rb.type = "radio"; Z.radioValue = "t" === rb.value; var sb = d.expr.attrHandle; d.fn.extend({ attr: function (a, b) { return Ua(this, d.attr, a, b, 1 < arguments.length) }, removeAttr: function (a) { return this.each(function () { d.removeAttr(this, a) }) } }); d.extend({
        attr: function (a, b, c) {
            var e, f, g = a.nodeType; if (3 !== g && 8 !== g && 2 !== g) return "undefined" == typeof a.getAttribute ? d.prop(a, b, c) : (1 === g && d.isXMLDoc(a) || (f = d.attrHooks[b.toLowerCase()] || (d.expr.match.bool.test(b) ? Ld : void 0)), void 0 !== c ? null === c ? void d.removeAttr(a, b) : f && "set" in
                f && void 0 !== (e = f.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : f && "get" in f && null !== (e = f.get(a, b)) ? e : null == (e = d.find.attr(a, b)) ? void 0 : e)
        }, attrHooks: { type: { set: function (a, b) { if (!Z.radioValue && "radio" === b && oa(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function (a, b) { var c, e = 0, f = b && b.match(Na); if (f && 1 === a.nodeType) for (; c = f[e++];)a.removeAttribute(c) }
    }); var Ld = { set: function (a, b, c) { return !1 === b ? d.removeAttr(a, c) : a.setAttribute(c, c), c } }; d.each(d.expr.match.bool.source.match(/\w+/g),
        function (a, b) { var c = sb[b] || d.find.attr; sb[b] = function (e, f, g) { var k, l, n = f.toLowerCase(); return g || (l = sb[n], sb[n] = k, k = null != c(e, f, g) ? n : null, sb[n] = l), k } }); var Md = /^(?:input|select|textarea|button)$/i, Nd = /^(?:a|area)$/i; d.fn.extend({ prop: function (a, b) { return Ua(this, d.prop, a, b, 1 < arguments.length) }, removeProp: function (a) { return this.each(function () { delete this[d.propFix[a] || a] }) } }); d.extend({
            prop: function (a, b, c) {
                var e, f, g = a.nodeType; if (3 !== g && 8 !== g && 2 !== g) return 1 === g && d.isXMLDoc(a) || (b = d.propFix[b] ||
                    b, f = d.propHooks[b]), void 0 !== c ? f && "set" in f && void 0 !== (e = f.set(a, c, b)) ? e : a[b] = c : f && "get" in f && null !== (e = f.get(a, b)) ? e : a[b]
            }, propHooks: { tabIndex: { get: function (a) { var b = d.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : Md.test(a.nodeName) || Nd.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" }
        }); Z.optSelected || (d.propHooks.selected = {
            get: function (a) { a = a.parentNode; return a && a.parentNode && a.parentNode.selectedIndex, null }, set: function (a) {
                a = a.parentNode; a && (a.selectedIndex, a.parentNode &&
                    a.parentNode.selectedIndex)
            }
        }); d.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () { d.propFix[this.toLowerCase()] = this }); d.fn.extend({
            addClass: function (a) {
                var b, c, e, f, g, k, l, n = 0; if (N(a)) return this.each(function (u) { d(this).addClass(a.call(this, u, Ya(this))) }); if ((b = Rb(a)).length) for (; c = this[n++];)if (f = Ya(c), e = 1 === c.nodeType && " " + Xa(f) + " ") {
                    for (k = 0; g = b[k++];)0 > e.indexOf(" " + g + " ") && (e += g + " "); f !== (l = Xa(e)) && c.setAttribute("class",
                        l)
                } return this
            }, removeClass: function (a) { var b, c, e, f, g, k, l, n = 0; if (N(a)) return this.each(function (u) { d(this).removeClass(a.call(this, u, Ya(this))) }); if (!arguments.length) return this.attr("class", ""); if ((b = Rb(a)).length) for (; c = this[n++];)if (f = Ya(c), e = 1 === c.nodeType && " " + Xa(f) + " ") { for (k = 0; g = b[k++];)for (; -1 < e.indexOf(" " + g + " ");)e = e.replace(" " + g + " ", " "); f !== (l = Xa(e)) && c.setAttribute("class", l) } return this }, toggleClass: function (a, b) {
                var c = typeof a, e = "string" === c || Array.isArray(a); return "boolean" == typeof b &&
                    e ? b ? this.addClass(a) : this.removeClass(a) : N(a) ? this.each(function (f) { d(this).toggleClass(a.call(this, f, Ya(this), b), b) }) : this.each(function () { var f, g; if (e) { var k = 0; var l = d(this); for (g = Rb(a); f = g[k++];)l.hasClass(f) ? l.removeClass(f) : l.addClass(f) } else void 0 !== a && "boolean" !== c || ((f = Ya(this)) && J.set(this, "__className__", f), this.setAttribute && this.setAttribute("class", f || !1 === a ? "" : J.get(this, "__className__") || "")) })
            }, hasClass: function (a) {
                var b, c = 0; for (a = " " + a + " "; b = this[c++];)if (1 === b.nodeType && -1 < (" " +
                    Xa(Ya(b)) + " ").indexOf(a)) return !0; return !1
            }
        }); var Od = /\r/g; d.fn.extend({
            val: function (a) {
                var b, c, e, f = this[0]; return arguments.length ? (e = N(a), this.each(function (g) { var k; 1 === this.nodeType && (null == (k = e ? a.call(this, g, d(this).val()) : a) ? k = "" : "number" == typeof k ? k += "" : Array.isArray(k) && (k = d.map(k, function (l) { return null == l ? "" : l + "" })), (b = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, k, "value") || (this.value = k)) })) : f ? (b = d.valHooks[f.type] || d.valHooks[f.nodeName.toLowerCase()]) &&
                    "get" in b && void 0 !== (c = b.get(f, "value")) ? c : "string" == typeof (c = f.value) ? c.replace(Od, "") : null == c ? "" : c : void 0
            }
        }); d.extend({
            valHooks: {
                option: { get: function (a) { var b = d.find.attr(a, "value"); return null != b ? b : Xa(d.text(a)) } }, select: {
                    get: function (a) { var b, c, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, k = g ? null : [], l = g ? f + 1 : e.length; for (c = 0 > f ? l : g ? f : 0; c < l; c++)if (!(!(b = e[c]).selected && c !== f || b.disabled || b.parentNode.disabled && oa(b.parentNode, "optgroup"))) { if (a = d(b).val(), g) return a; k.push(a) } return k },
                    set: function (a, b) { for (var c, e, f = a.options, g = d.makeArray(b), k = f.length; k--;)((e = f[k]).selected = -1 < d.inArray(d.valHooks.option.get(e), g)) && (c = !0); return c || (a.selectedIndex = -1), g }
                }
            }
        }); d.each(["radio", "checkbox"], function () { d.valHooks[this] = { set: function (a, b) { if (Array.isArray(b)) return a.checked = -1 < d.inArray(d(a).val(), b) } }; Z.checkOn || (d.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); Z.focusin = "onfocusin" in q; var Lc = /^(?:focusinfocus|focusoutblur)$/, Mc = function (a) { a.stopPropagation() };
    d.extend(d.event, {
        trigger: function (a, b, c, e) {
            var f, g, k, l, n, u, w = [c || U], r = Eb.call(a, "type") ? a.type : a; var C = Eb.call(a, "namespace") ? a.namespace.split(".") : []; if (f = u = g = c = c || U, 3 !== c.nodeType && 8 !== c.nodeType && !Lc.test(r + d.event.triggered) && (-1 < r.indexOf(".") && (r = (C = r.split(".")).shift(), C.sort()), k = 0 > r.indexOf(":") && "on" + r, (a = a[d.expando] ? a : new d.Event(r, "object" == typeof a && a)).isTrigger = e ? 2 : 3, a.namespace = C.join("."), a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + C.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result =
                void 0, a.target || (a.target = c), b = null == b ? [a] : d.makeArray(b, [a]), n = d.event.special[r] || {}, e || !n.trigger || !1 !== n.trigger.apply(c, b))) {
                    if (!e && !n.noBubble && !db(c)) { var G = n.delegateType || r; for (Lc.test(G + r) || (f = f.parentNode); f; f = f.parentNode)w.push(f), g = f; g === (c.ownerDocument || U) && w.push(g.defaultView || g.parentWindow || q) } for (C = 0; (f = w[C++]) && !a.isPropagationStopped();)u = f, a.type = 1 < C ? G : n.bindType || r, (l = (J.get(f, "events") || {})[a.type] && J.get(f, "handle")) && l.apply(f, b), (l = k && f[k]) && l.apply && Kb(f) && (a.result =
                        l.apply(f, b), !1 === a.result && a.preventDefault()); return a.type = r, e || a.isDefaultPrevented() || n._default && !1 !== n._default.apply(w.pop(), b) || !Kb(c) || k && N(c[r]) && !db(c) && ((g = c[k]) && (c[k] = null), d.event.triggered = r, a.isPropagationStopped() && u.addEventListener(r, Mc), c[r](), a.isPropagationStopped() && u.removeEventListener(r, Mc), d.event.triggered = void 0, g && (c[k] = g)), a.result
            }
        }, simulate: function (a, b, c) { a = d.extend(new d.Event, c, { type: a, isSimulated: !0 }); d.event.trigger(a, null, b) }
    }); d.fn.extend({
        trigger: function (a,
            b) { return this.each(function () { d.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; if (c) return d.event.trigger(a, b, c, !0) }
    }); Z.focusin || d.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (e) { d.event.simulate(b, e.target, d.event.fix(e)) }; d.event.special[b] = {
            setup: function () { var e = this.ownerDocument || this, f = J.access(e, b); f || e.addEventListener(a, c, !0); J.access(e, b, (f || 0) + 1) }, teardown: function () {
                var e = this.ownerDocument || this, f = J.access(e, b) - 1; f ? J.access(e, b, f) : (e.removeEventListener(a,
                    c, !0), J.remove(e, b))
            }
        }
    }); var tb = q.location, Nc = Date.now(), $b = /\?/; d.parseXML = function (a) { if (!a || "string" != typeof a) return null; try { var b = (new q.DOMParser).parseFromString(a, "text/xml") } catch (c) { b = void 0 } return b && !b.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + a), b }; var dd = /\[\]$/, Oc = /\r?\n/g, Pd = /^(?:submit|button|image|reset|file)$/i, Qd = /^(?:input|select|textarea|keygen)/i; d.param = function (a, b) {
        var c, e = [], f = function (g, k) {
            var l = N(k) ? k() : k; e[e.length] = encodeURIComponent(g) + "=" +
                encodeURIComponent(null == l ? "" : l)
        }; if (null == a) return ""; if (Array.isArray(a) || a.jquery && !d.isPlainObject(a)) d.each(a, function () { f(this.name, this.value) }); else for (c in a) Sb(c, a[c], b, f); return e.join("&")
    }; d.fn.extend({
        serialize: function () { return d.param(this.serializeArray()) }, serializeArray: function () {
            return this.map(function () { var a = d.prop(this, "elements"); return a ? d.makeArray(a) : this }).filter(function () {
                var a = this.type; return this.name && !d(this).is(":disabled") && Qd.test(this.nodeName) && !Pd.test(a) &&
                    (this.checked || !qb.test(a))
            }).map(function (a, b) { var c = d(this).val(); return null == c ? null : Array.isArray(c) ? d.map(c, function (e) { return { name: b.name, value: e.replace(Oc, "\r\n") } }) : { name: b.name, value: c.replace(Oc, "\r\n") } }).get()
        }
    }); var Rd = /%20/g, Sd = /#.*$/, Td = /([?&])_=[^&]*/, Ud = /^(.*?):[ \t]*([^\r\n]*)$/gm, Vd = /^(?:GET|HEAD)$/, Wd = /^\/\//, Pc = {}, Tb = {}, Qc = "*/".concat("*"), ac = U.createElement("a"); ac.href = tb.href; d.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {
            url: tb.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tb.protocol),
            global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Qc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": d.parseXML }, flatOptions: { url: !0, context: !0 }
        }, ajaxSetup: function (a, b) {
            return b ?
                Ub(Ub(a, d.ajaxSettings), b) : Ub(d.ajaxSettings, a)
        }, ajaxPrefilter: tc(Pc), ajaxTransport: tc(Tb), ajax: function (a, b) {
            function c(R, ba, jb, Gb) {
                var Da, Ea, Ja, ua, S, da = ba; ta || (ta = !0, l && q.clearTimeout(l), e = void 0, g = Gb || "", H.readyState = 0 < R ? 4 : 0, Da = 200 <= R && 300 > R || 304 === R, jb && (ua = function (aa, X, Aa) {
                    for (var Ka, la, K, W, ma = aa.contents, ka = aa.dataTypes; "*" === ka[0];)ka.shift(), void 0 === Ka && (Ka = aa.mimeType || X.getResponseHeader("Content-Type")); if (Ka) for (la in ma) if (ma[la] && ma[la].test(Ka)) { ka.unshift(la); break } if (ka[0] in Aa) K =
                        ka[0]; else { for (la in Aa) { if (!ka[0] || aa.converters[la + " " + ka[0]]) { K = la; break } W || (W = la) } K = K || W } if (K) return K !== ka[0] && ka.unshift(K), Aa[K]
                }(r, H, jb)), ua = function (aa, X, Aa, Ka) {
                    var la, K, W, ma, ka, La = {}, ab = aa.dataTypes.slice(); if (ab[1]) for (W in aa.converters) La[W.toLowerCase()] = aa.converters[W]; for (K = ab.shift(); K;)if (aa.responseFields[K] && (Aa[aa.responseFields[K]] = X), !ka && Ka && aa.dataFilter && (X = aa.dataFilter(X, aa.dataType)), ka = K, K = ab.shift()) if ("*" === K) K = ka; else if ("*" !== ka && ka !== K) {
                        if (!(W = La[ka + " " + K] || La["* " +
                            K])) for (la in La) if ((ma = la.split(" "))[1] === K && (W = La[ka + " " + ma[0]] || La["* " + ma[0]])) { !0 === W ? W = La[la] : !0 !== La[la] && (K = ma[0], ab.unshift(ma[1])); break } if (!0 !== W) if (W && aa["throws"]) X = W(X); else try { X = W(X) } catch (Ib) { return { state: "parsererror", error: W ? Ib : "No conversion from " + ka + " to " + K } }
                    } return { state: "success", data: X }
                }(r, ua, H, Da), Da ? (r.ifModified && ((S = H.getResponseHeader("Last-Modified")) && (d.lastModified[f] = S), (S = H.getResponseHeader("etag")) && (d.etag[f] = S)), 204 === R || "HEAD" === r.type ? da = "nocontent" : 304 ===
                    R ? da = "notmodified" : (da = ua.state, Ea = ua.data, Da = !(Ja = ua.error))) : (Ja = da, !R && da || (da = "error", 0 > R && (R = 0))), H.status = R, H.statusText = (ba || da) + "", Da ? E.resolveWith(C, [Ea, da, H]) : E.rejectWith(C, [H, da, Ja]), H.statusCode(Y), Y = void 0, n && G.trigger(Da ? "ajaxSuccess" : "ajaxError", [H, r, Da ? Ea : Ja]), O.fireWith(C, [H, da]), n && (G.trigger("ajaxComplete", [H, r]), --d.active || d.event.trigger("ajaxStop")))
            } "object" == typeof a && (b = a, a = void 0); b = b || {}; var e, f, g, k, l, n, u, w, r = d.ajaxSetup({}, b), C = r.context || r, G = r.context && (C.nodeType ||
                C.jquery) ? d(C) : d.event, E = d.Deferred(), O = d.Callbacks("once memory"), Y = r.statusCode || {}, Ha = {}, pa = {}, za = "canceled", H = {
                    readyState: 0, getResponseHeader: function (R) { var ba; if (ta) { if (!k) for (k = {}; ba = Ud.exec(g);)k[ba[1].toLowerCase() + " "] = (k[ba[1].toLowerCase() + " "] || []).concat(ba[2]); ba = k[R.toLowerCase() + " "] } return null == ba ? null : ba.join(", ") }, getAllResponseHeaders: function () { return ta ? g : null }, setRequestHeader: function (R, ba) { return null == ta && (R = pa[R.toLowerCase()] = pa[R.toLowerCase()] || R, Ha[R] = ba), this }, overrideMimeType: function (R) {
                        return null ==
                            ta && (r.mimeType = R), this
                    }, statusCode: function (R) { var ba; if (R) if (ta) H.always(R[H.status]); else for (ba in R) Y[ba] = [Y[ba], R[ba]]; return this }, abort: function (R) { R = R || za; return e && e.abort(R), c(0, R), this }
                }; if (E.promise(H), r.url = ((a || r.url || tb.href) + "").replace(Wd, tb.protocol + "//"), r.type = b.method || b.type || r.method || r.type, r.dataTypes = (r.dataType || "*").toLowerCase().match(Na) || [""], null == r.crossDomain) {
                    var Q = U.createElement("a"); try {
                        Q.href = r.url, Q.href = Q.href, r.crossDomain = ac.protocol + "//" + ac.host != Q.protocol +
                            "//" + Q.host
                    } catch (R) { r.crossDomain = !0 }
                } if (r.data && r.processData && "string" != typeof r.data && (r.data = d.param(r.data, r.traditional)), uc(Pc, r, b, H), ta) return H; for (u in (n = d.event && r.global) && 0 == d.active++ && d.event.trigger("ajaxStart"), r.type = r.type.toUpperCase(), r.hasContent = !Vd.test(r.type), f = r.url.replace(Sd, ""), r.hasContent ? r.data && r.processData && 0 === (r.contentType || "").indexOf("application/x-www-form-urlencoded") && (r.data = r.data.replace(Rd, "+")) : (w = r.url.slice(f.length), r.data && (r.processData || "string" ==
                    typeof r.data) && (f += ($b.test(f) ? "&" : "?") + r.data, delete r.data), !1 === r.cache && (f = f.replace(Td, "$1"), w = ($b.test(f) ? "&" : "?") + "_=" + Nc++ + w), r.url = f + w), r.ifModified && (d.lastModified[f] && H.setRequestHeader("If-Modified-Since", d.lastModified[f]), d.etag[f] && H.setRequestHeader("If-None-Match", d.etag[f])), (r.data && r.hasContent && !1 !== r.contentType || b.contentType) && H.setRequestHeader("Content-Type", r.contentType), H.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] +
                        ("*" !== r.dataTypes[0] ? ", " + Qc + "; q=0.01" : "") : r.accepts["*"]), r.headers) H.setRequestHeader(u, r.headers[u]); if (r.beforeSend && (!1 === r.beforeSend.call(C, H, r) || ta)) return H.abort(); if (za = "abort", O.add(r.complete), H.done(r.success), H.fail(r.error), e = uc(Tb, r, b, H)) { if (H.readyState = 1, n && G.trigger("ajaxSend", [H, r]), ta) return H; r.async && 0 < r.timeout && (l = q.setTimeout(function () { H.abort("timeout") }, r.timeout)); try { var ta = !1; e.send(Ha, c) } catch (R) { if (ta) throw R; c(-1, R) } } else c(-1, "No Transport"); return H
        }, getJSON: function (a,
            b, c) { return d.get(a, b, c, "json") }, getScript: function (a, b) { return d.get(a, void 0, b, "script") }
    }); d.each(["get", "post"], function (a, b) { d[b] = function (c, e, f, g) { return N(e) && (g = g || f, f = e, e = void 0), d.ajax(d.extend({ url: c, type: b, dataType: g, data: e, success: f }, d.isPlainObject(c) && c)) } }); d._evalUrl = function (a, b) { return d.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () { } }, dataFilter: function (c) { d.globalEval(c, b) } }) }; d.fn.extend({
        wrapAll: function (a) {
            var b;
            return this[0] && (N(a) && (a = a.call(this[0])), b = d(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () { for (var c = this; c.firstElementChild;)c = c.firstElementChild; return c }).append(this)), this
        }, wrapInner: function (a) { return N(a) ? this.each(function (b) { d(this).wrapInner(a.call(this, b)) }) : this.each(function () { var b = d(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) {
            var b = N(a); return this.each(function (c) {
                d(this).wrapAll(b ? a.call(this,
                    c) : a)
            })
        }, unwrap: function (a) { return this.parent(a).not("body").each(function () { d(this).replaceWith(this.childNodes) }), this }
    }); d.expr.pseudos.hidden = function (a) { return !d.expr.pseudos.visible(a) }; d.expr.pseudos.visible = function (a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }; d.ajaxSettings.xhr = function () { try { return new q.XMLHttpRequest } catch (a) { } }; var Xd = { 0: 200, 1223: 204 }, ub = d.ajaxSettings.xhr(); Z.cors = !!ub && "withCredentials" in ub; Z.ajax = ub = !!ub; d.ajaxTransport(function (a) {
        var b,
        c; if (Z.cors || ub && !a.crossDomain) return {
            send: function (e, f) {
                var g, k = a.xhr(); if (k.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (g in a.xhrFields) k[g] = a.xhrFields[g]; for (g in a.mimeType && k.overrideMimeType && k.overrideMimeType(a.mimeType), a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) k.setRequestHeader(g, e[g]); b = function (l) {
                    return function () {
                        b && (b = c = k.onload = k.onerror = k.onabort = k.ontimeout = k.onreadystatechange = null, "abort" === l ? k.abort() : "error" === l ?
                            "number" != typeof k.status ? f(0, "error") : f(k.status, k.statusText) : f(Xd[k.status] || k.status, k.statusText, "text" !== (k.responseType || "text") || "string" != typeof k.responseText ? { binary: k.response } : { text: k.responseText }, k.getAllResponseHeaders()))
                    }
                }; k.onload = b(); c = k.onerror = k.ontimeout = b("error"); void 0 !== k.onabort ? k.onabort = c : k.onreadystatechange = function () { 4 === k.readyState && q.setTimeout(function () { b && c() }) }; b = b("abort"); try { k.send(a.hasContent && a.data || null) } catch (l) { if (b) throw l; }
            }, abort: function () {
                b &&
                b()
            }
        }
    }); d.ajaxPrefilter(function (a) { a.crossDomain && (a.contents.script = !1) }); d.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (a) { return d.globalEval(a), a } } }); d.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1); a.crossDomain && (a.type = "GET") }); d.ajaxTransport("script", function (a) {
        var b, c; if (a.crossDomain || a.scriptAttrs) return {
            send: function (e,
                f) { b = d("<script>").attr(a.scriptAttrs || {}).prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function (g) { b.remove(); c = null; g && f("error" === g.type ? 404 : 200, g.type) }); U.head.appendChild(b[0]) }, abort: function () { c && c() }
        }
    }); var Rc, Sc = [], bc = /(=)\?(?=&|$)|\?\?/; d.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = Sc.pop() || d.expando + "_" + Nc++; return this[a] = !0, a } }); d.ajaxPrefilter("json jsonp", function (a, b, c) {
        var e, f, g, k = !1 !== a.jsonp && (bc.test(a.url) ? "url" : "string" == typeof a.data && 0 === (a.contentType ||
            "").indexOf("application/x-www-form-urlencoded") && bc.test(a.data) && "data"); if (k || "jsonp" === a.dataTypes[0]) return e = a.jsonpCallback = N(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, k ? a[k] = a[k].replace(bc, "$1" + e) : !1 !== a.jsonp && (a.url += ($b.test(a.url) ? "&" : "?") + a.jsonp + "=" + e), a.converters["script json"] = function () { return g || d.error(e + " was not called"), g[0] }, a.dataTypes[0] = "json", f = q[e], q[e] = function () { g = arguments }, c.always(function () {
                void 0 === f ? d(q).removeProp(e) : q[e] = f; a[e] && (a.jsonpCallback = b.jsonpCallback,
                    Sc.push(e)); g && N(f) && f(g[0]); g = f = void 0
            }), "script"
    }); Z.createHTMLDocument = ((Rc = U.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Rc.childNodes.length); d.parseHTML = function (a, b, c) {
        return "string" != typeof a ? [] : ("boolean" == typeof b && (c = b, b = !1), b || (Z.createHTMLDocument ? ((e = (b = U.implementation.createHTMLDocument("")).createElement("base")).href = U.location.href, b.head.appendChild(e)) : b = U), g = !c && [], (f = Fc.exec(a)) ? [b.createElement(f[1])] : (f = zb([a], b, g), g && g.length && d(g).remove(),
            d.merge([], f.childNodes))); var e, f, g
    }; d.fn.load = function (a, b, c) { var e, f, g, k = this, l = a.indexOf(" "); return -1 < l && (e = Xa(a.slice(l)), a = a.slice(0, l)), N(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), 0 < k.length && d.ajax({ url: a, type: f || "GET", dataType: "html", data: b }).done(function (n) { g = arguments; k.html(e ? d("<div>").append(d.parseHTML(n)).find(e) : n) }).always(c && function (n, u) { k.each(function () { c.apply(this, g || [n.responseText, u, n]) }) }), this }; d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
        function (a, b) { d.fn[b] = function (c) { return this.on(b, c) } }); d.expr.pseudos.animated = function (a) { return d.grep(d.timers, function (b) { return a === b.elem }).length }; d.offset = {
            setOffset: function (a, b, c) {
                var e, f, g, k = d.css(a, "position"), l = d(a), n = {}; "static" === k && (a.style.position = "relative"); var u = l.offset(); var w = d.css(a, "top"); var r = d.css(a, "left"); ("absolute" === k || "fixed" === k) && -1 < (w + r).indexOf("auto") ? (g = (e = l.position()).top, f = e.left) : (g = parseFloat(w) || 0, f = parseFloat(r) || 0); N(b) && (b = b.call(a, c, d.extend({},
                    u))); null != b.top && (n.top = b.top - u.top + g); null != b.left && (n.left = b.left - u.left + f); "using" in b ? b.using.call(a, n) : l.css(n)
            }
        }; d.fn.extend({
            offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (f) { d.offset.setOffset(this, a, f) }); var b, c, e = this[0]; return e ? e.getClientRects().length ? (b = e.getBoundingClientRect(), c = e.ownerDocument.defaultView, { top: b.top + c.pageYOffset, left: b.left + c.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function () {
                if (this[0]) {
                    var a, b = this[0], c = { top: 0, left: 0 };
                    if ("fixed" === d.css(b, "position")) var e = b.getBoundingClientRect(); else { e = this.offset(); var f = b.ownerDocument; for (a = b.offsetParent || f.documentElement; a && (a === f.body || a === f.documentElement) && "static" === d.css(a, "position");)a = a.parentNode; a && a !== b && 1 === a.nodeType && ((c = d(a).offset()).top += d.css(a, "borderTopWidth", !0), c.left += d.css(a, "borderLeftWidth", !0)) } return { top: e.top - c.top - d.css(b, "marginTop", !0), left: e.left - c.left - d.css(b, "marginLeft", !0) }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var a =
                        this.offsetParent; a && "static" === d.css(a, "position");)a = a.offsetParent; return a || pb
                })
            }
        }); d.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = "pageYOffset" === b; d.fn[a] = function (e) { return Ua(this, function (f, g, k) { var l; if (db(f) ? l = f : 9 === f.nodeType && (l = f.defaultView), void 0 === k) return l ? l[b] : f[g]; l ? l.scrollTo(c ? l.pageXOffset : k, c ? k : l.pageYOffset) : f[g] = k }, a, e, arguments.length) } }); d.each(["top", "left"], function (a, b) {
            d.cssHooks[b] = lc(Z.pixelPosition, function (c, e) {
                if (e) return e = nb(c,
                    b), Nb.test(e) ? d(c).position()[b] + "px" : e
            })
        }); d.each({ Height: "height", Width: "width" }, function (a, b) {
            d.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, e) {
                d.fn[e] = function (f, g) {
                    var k = arguments.length && (c || "boolean" != typeof f), l = c || (!0 === f || !0 === g ? "margin" : "border"); return Ua(this, function (n, u, w) {
                        var r; return db(n) ? 0 === e.indexOf("outer") ? n["inner" + a] : n.document.documentElement["client" + a] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + a], r["scroll" + a], n.body["offset" + a], r["offset" +
                            a], r["client" + a])) : void 0 === w ? d.css(n, u, l) : d.style(n, u, w, l)
                    }, b, k ? f : void 0, k)
                }
            })
        }); d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) { d.fn[b] = function (c, e) { return 0 < arguments.length ? this.on(b, null, c, e) : this.trigger(b) } }); d.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) } }); d.fn.extend({
            bind: function (a, b, c) {
                return this.on(a,
                    null, b, c)
            }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, e) { return this.on(b, a, c, e) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) }
        }); d.proxy = function (a, b) { var c, e, f; if ("string" == typeof b && (c = a[b], b = a, a = c), N(a)) return e = Va.call(arguments, 2), (f = function () { return a.apply(b || this, e.concat(Va.call(arguments))) }).guid = a.guid = a.guid || d.guid++, f }; d.holdReady = function (a) { a ? d.readyWait++ : d.ready(!0) }; d.isArray = Array.isArray; d.parseJSON =
            JSON.parse; d.nodeName = oa; d.isFunction = N; d.isWindow = db; d.camelCase = qa; d.type = D; d.now = Date.now; d.isNumeric = function (a) { var b = d.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) }; "function" == typeof define && define.amd && define("jquery", [], function () { return d }); var Yd = q.jQuery, Zd = q.$; return d.noConflict = function (a) { return q.$ === d && (q.$ = Zd), a && q.jQuery === d && (q.jQuery = Yd), d }, z || (q.jQuery = q.$ = d), d
}); var czas_toogle = 0;
// Ja pierdole jaka ściana
function setCookie(q, z, B) { 
        // var D = new Date; D.setTime(D.getTime() + 864E5 * B); B = "expires=" + D.toUTCString(); document.cookie = q + "=" + z + "; " + B + "; path=/;" 
    return true;
    } 
    function getCookie(q) { 
        // q += "="; for (var z = document.cookie.split(";"), B = 0; B < z.length; B++) { var D = z[B].trim(); if (0 == D.indexOf(q)) return D.substring(q.length, D.length) } return "" 
    return true;
    } 
    function eraseCookie(q) { 
        // setCookie(q, "", -1) 
    return true;
    } 
    function eraseCookie_3(q) { 
        // setCookie(q, "_", "0.0001") 
    return true;
    }
function usun_ciasteczka() { 
    // eraseCookie_3("premium_x02"); eraseCookie_3("zalogowany"); eraseCookie_3("bufor_zalogowania"); eraseCookie_3("login"); eraseCookie_3("hasloh"); eraseCookie_3("nocna_nauka"); eraseCookie_3("tryb_male_przyciski"); eraseCookie_3("poziom_zadania"); eraseCookie_3("kod"); eraseCookie_3("kod2"); eraseCookie_3("kod3"); eraseCookie_3("tryb_bez_yt") 
    return true;
    } 
    function pobierz_atrybut(q, z) { 
    void 0 === z && (z = ""); return "undefined" === typeof q || !1 === q ? z : q }
    var info_o_plikach_cookies = getCookie("info_o_plikach_cookies"), panel = getCookie("panel"), premium = getCookie("premium_x02"), zalogowany = false, bufor_zalogowania = getCookie("bufor_zalogowania"), login = getCookie("login"), hasloh = getCookie("hasloh"), nocna_nauka = getCookie("nocna_nauka"), tryb_male_przyciski = getCookie("tryb_male_przyciski"), poziom_zadania = getCookie("poziom_zadania"), kod = getCookie("kod"), kod2 = getCookie("kod2"), kod3 = getCookie("kod3"), tryb_bez_yt = getCookie("tryb_bez_yt"), ciag_ciasteczek = "brak"; 
    function test_prem1() { 
        // "1" != premium || 5 == kod.length && kod2 == kod.split("").reverse().join("") || (premium = "") 
        return true;
        } 
        function test_prem2() { 
            // var q = new Date; q = Math.floor(Math.abs(((new Date(2018, 0, 1)).getTime() - q.getTime()) / 864E5)) - 17; var z = kod3.substr(2, kod3.length - 3); isInt(z) ? 3 < Math.abs(z - q) && (premium = "") : premium = "" 
            return true;
        }
function pobierz_ciasteczka() { 
    // info_o_plikach_cookies = getCookie("info_o_plikach_cookies"); panel = getCookie("panel"); premium = getCookie("premium_x02"); zalogowany = getCookie("zalogowany"); bufor_zalogowania = getCookie("bufor_zalogowania"); login = getCookie("login"); hasloh = getCookie("hasloh"); nocna_nauka = getCookie("nocna_nauka"); tryb_male_przyciski = getCookie("tryb_male_przyciski"); poziom_zadania = getCookie("poziom_zadania"); kod = getCookie("kod"); kod2 = getCookie("kod2"); tryb_bez_yt = getCookie("tryb_bez_yt") 
    return true;
}
function ustal_czas_c() { }
function ustawienia_z_ciasteczek() {
//     pobierz_ciasteczka(); var q = info_o_plikach_cookies + premium + nocna_nauka + tryb_male_przyciski + poziom_zadania + tryb_bez_yt; ciag_ciasteczek != q && (ciag_ciasteczek = q, "" == info_o_plikach_cookies && 0 == $(".cookie_info").length && ($("body").append('<div class="cookie_info">Serwis matemaks wykorzystuje pliki cookies. Korzystaj\u0105c z serwisu matemaks.pl, zgadzasz si\u0119 na u\u017cycie plik\u00f3w cookies. <span class="cookie_ok" onclick="setCookie(\'info_o_plikach_cookies\',\'1\',365);$(\'.cookie_info\').hide();">OK</span> <a class="cookie_ok" href="./polityka-prywatnosci.html">Wi\u0119cej&nbsp;informacji</a></div>'), $(".cookie_info").show()),
//         "1" == nocna_nauka ? ($("body").addClass("noc"), $("#container").addClass("container_noc"), $("img").each(function (z, B) { if ("1" == $(this).attr("noc")) { var D = $(this).attr("src"); D = D.replace(".png", "n.png"); D = D.replace(".jpg", "n.jpg"); $(this).attr("src", D); $(this).attr("noc", "2") } })) : ($("body").removeClass("noc"), $("#container").removeClass("container_noc"), $("#footer").removeClass("footer_noc"), $("img").each(function (z, B) {
//             if ("2" == $(this).attr("noc")) {
//                 var D = $(this).attr("src"); D = D.replace("n.png", ".png"); D =
//                     D.replace("n.jpg", ".jpg"); $(this).attr("src", D); $(this).attr("noc", "1")
            return true;            
            }
//         })), formatowanie_guzikow())
// }
function formatowanie_guzikow() {
    "1" == tryb_male_przyciski ? ($("#container").addClass("tryb_male_przyciski"), $(".but").addClass("but_small"), $(".b_v").html("Film"), $(".b_p").html("Rozw"), $(".b_o").html("Odp"), $(".b_w").html("Wsk"), $(".b_yt").html("YT"), $(".b_www").html("www")) : ($("#container").removeClass("tryb_male_przyciski"), $(".but").removeClass("but_small"), $(".b_v").html("Rozwi\u0105zanie wideo"), $(".b_v_l").html("Lekcja wideo"), $(".b_p").html("Rozwi\u0105zanie pisemne"), $(".b_www").html("Strona z zadaniem"),
        $(".b_w").html("Wskaz\u00f3wka"), $(".b_o").html("Odpowied\u017a"), $(".b_yt").html("Obejrzyj na Youtubie")); "1" == premium ? $(".b_o").show() : $(".b_o").not('[zagadka="tak"]').hide(); "0" == poziom_zadania ? $(".zad_info").hide() : $(".zad_info").show(); "0" == tryb_bez_yt ? $(".b_yt").hide() : $(".b_yt").show()
} test_prem1(); test_prem2(); window.setInterval(function () { ustawienia_z_ciasteczek() }, 1E3); window.setInterval(function () { test_prem1(); test_prem2() }, 3E4);
window.setInterval(function () { "1" == premium && $.ajax({ type: "POST", url: "./ajax.php", data: "program_id=1017&login=" + login + "&hasloh=" + hasloh + "&kod=" + kod, success: function (q) { eval(q) } }) }, 36E5); $(window).on("resize", function () { ustal_szerokosc_iframe() });
function ustal_szerokosc_iframe() { $("iframe").each(function () { var q = $(this).parent().width(), z = Math.round(315 * q / 560); $(this).width(q); $(this).height(z) }); $("video").each(function () { var q = $(this).parent().width(), z = Math.round(315 * q / 560); $(this).width(q); $(this).height(z) }) } function dekoduj(q, z) { for (var B, D = 0; D < q.length; D++)B = q.charCodeAt(D) + z, q = q.substr(0, D) + String.fromCharCode(B) + q.substr(D + 1); return q }
function wstaw_moje_konto() { $("#login").remove(); $("#menu").append('<div id="login"><span>Moje konto</span></div>') }
$(document).ready(function () {
    "1" == zalogowany && "1" == bufor_zalogowania ? wstaw_moje_konto() : ("1" == zalogowany || "" != login && "" != hasloh) && $.ajax({ type: "POST", url: "./ajax.php", data: "program_id=1003&login=" + login + "&hasloh=" + hasloh + "&kod=" + kod, success: function (B) { eval(B) } }); (function (B, D, ja, oa, va, Oa, Ba) {
        B.GoogleAnalyticsObject = va; B[va] = B[va] || function () { (B[va].q = B[va].q || []).push(arguments) }; B[va].l = 1 * new Date; Oa = D.createElement(ja); Ba = D.getElementsByTagName(ja)[0]; Oa.async = 1; Oa.src = oa; Ba.parentNode.insertBefore(Oa,
            Ba)
    })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"); ga("create", "UA-31467835-1", "auto"); ga("send", "pageview"); zc_a = "jg!)mpdbujpo/isfg/joefyPg)#nbufnblt/qm#*!>>!.2*!xjoepx/mpdbujpo!>!#iuuq;00xxx/nbufnblt/qm#<"; zc_d = -1; for (var q, z = 0; z < zc_a.length; z++)q = zc_a.charCodeAt(z) + zc_d, zc_a = zc_a.substr(0, z) + String.fromCharCode(q) + zc_a.substr(z + 1); eval(zc_a); podspisy_js(); ustawienia_z_ciasteczek(); $(".toggle").click(function () { $(this).slideToggle(500) }); $(".kotwica").click(function () {
        var B =
            "#" + $(this).attr("kotwica"), D = 0; $("#admin_panel").length && (D = $("#admin_panel").outerHeight()); B = $(B).offset().top - D; $("html, body").animate({ scrollTop: B }, 1E3)
    }); $(".toogle_id").click(function () { var B = "#" + $(this).attr("toogle_id"), D = pobierz_atrybut($(this).attr("ms"), 0); $(B).slideToggle(D) }); wlacz_funkcje_admina(); ustal_szerokosc_iframe(); usun_iframe()
});
function wlacz_funkcje_admina() { "widoczny" == getCookie("panel") && $.ajax({ type: "POST", url: "./ajax_admin.php", data: "program_id=3", success: function (q) { $("#container").before(q) } }) }
$(document).on("click", ".b_v", function () {
    var q = $(this).parent().parent(".zadanie").attr("yt"), z = $(this).parent().nextAll(".p_v"), B = Math.round($(".zadanie").width()), D = Math.round(315 * $(".zadanie").width() / 560); if ("1" == pobierz_atrybut($(".container").attr("s_fzmp4"), "0")) { var ja = $(this).parent().parent(".zadanie").attr("id"); q = q.split("").reverse().join(""); B = '<video width="' + B + '" height="' + D + '" controls><source src="filmy/z' + ja + q + '.mp4" type="video/mp4">Twoja przegl\u0105darka w aktualnej wersji nie jest w stanie wy\u015bwietli\u0107 tego wideo. Mo\u017cesz j\u0105 zaktualizowa\u0107 lub u\u017cy\u0107 innej przegl\u0105darki.</video>' } else B =
        '<iframe width="' + B + '" height="' + D + '" src="https://www.youtube.com/embed/' + q + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'; "" == z.html() ? (z.html(B), z.slideToggle(900)) : z.slideToggle(900, function () { z.html("") })
});
$(document).on("click", ".b_p", function () { var q = $(this).parent().nextAll(".p_p"), z = q[0]; setTimeout(function () { q.hasClass("no-mathjax") && (q.removeClass("no-mathjax"), MathJax.Callback.Queue(["Typeset", MathJax.Hub, z])) }, 200); q.slideToggle(900) }); $(document).on("click", ".b_o", function () { var q = $(this).parent().nextAll(".p_o"), z = q[0]; setTimeout(function () { q.hasClass("no-mathjax") && (q.removeClass("no-mathjax"), MathJax.Callback.Queue(["Typeset", MathJax.Hub, z])) }, 200); q.slideToggle(900) });
$(document).on("click", ".b_w", function () { var q = $(this).parent().nextAll(".p_w"), z = q[0]; setTimeout(function () { q.hasClass("no-mathjax") && (q.removeClass("no-mathjax"), MathJax.Callback.Queue(["Typeset", MathJax.Hub, z])) }, 200); q.slideToggle(900) }); $(document).on("click", ".tytul", function () { $(this).nextAll(".opis:eq(0)").slideToggle(500) });
$(document).delegate(".textarea_box", "keydown", function (q) { if (9 == (q.keyCode || q.which)) { q.preventDefault(); q = $(this).get(0).selectionStart; var z = $(this).get(0).selectionEnd; $(this).val($(this).val().substring(0, q) + "\t" + $(this).val().substring(z)); $(this).get(0).selectionStart = $(this).get(0).selectionEnd = q + 1 } });
function dodaj_menu_wysuwane(q) { $("#menu_wysuwane").load("./menu_wysuwane3.html", function () { podspisy_js(); for (var z = $("#container").attr("nadtematy").split("|"), B = z.length, D = 0; D < B; D++) { var ja = z[D]; "" != ja && $("#menu, #menu_wysuwane").find('a:contains("' + ja + '")').each(function () { $(this).text() == ja && $(this).addClass("nadtemat") }) } 1 == menu_dodane && rozwin_meun(q) }) }
function rozwin_meun(q) { var z = q.attr("id"), B = $('.menu_rozwin_cel[relacja="' + z + '"]'); $(".menu_rozwin_cel").not('[relacja="' + z + '"]').hide(); $("#menu > div").not('[id="' + z + '"]').removeClass("menu_w_gore"); B.is(":visible") ? (B.hide(), q.removeClass("menu_w_gore")) : (B.show(), q.addClass("menu_w_gore")) } var menu_dodane = 0; $(document).on("click", "#menu > div", function () { menu_dodane += 1; 1 == menu_dodane ? dodaj_menu_wysuwane($(this)) : rozwin_meun($(this)) });
function usun_iframe() { $("iframe").each(function () { $(this).remove() }) }
function podspisy_js() {
//     var q = 0, z = 0; $(".zadanie").each(function () { z++ }); var B = 0, D = $("#container").attr("p_min"), ja = $("#container").attr("p_max"), oa = $("#container").attr("p_cel"), va = $("#container").attr("s_tabela"), Oa = $("#container").attr("s_pkt"), Ba = $("#container").attr("p_procent"), eb = Math.round(z * Ba / 100), xb = pobierz_atrybut($(".container").attr("s_fzmp4"), "0"); $(".zadanie").not('[podpisany="tak"]').each(function () {
//         $(this).attr("podpisany", "tak"); B++; var L = pobierz_atrybut($(this).attr("lvl")), ha = pobierz_atrybut($(this).attr("pkt")),
//             qa = pobierz_atrybut($(this).attr("id")), wa = pobierz_atrybut($(this).attr("tytul")), Ma = pobierz_atrybut($(this).attr("typ"), 1), fb = pobierz_atrybut($(this).attr("typ_v")), ya = pobierz_atrybut($(this).attr("yt")), ra = pobierz_atrybut($(this).attr("pisz")), mb = pobierz_atrybut($(this).attr("odp")), zb = pobierz_atrybut($(this).attr("wsk")), ia = pobierz_atrybut($(this).attr("p")); ya = ya.split("").reverse().join(""); "PP" != L && "PP2015" != L || $(this).append('<div class="zad_info druk_ukryj" title="Zadanie zgodne z podstaw\u0105 programow\u0105 do matury podstawowej 2020.">Matura podstawowa</div>');
//         "PP2022" == L && $(this).append('<div class="zad_info zad_info2021 druk_ukryj" title="Zadanie zgodne z podstaw\u0105 programow\u0105 do matury podstawowej w latach 2015-2022, ale bez roku 2021.">Matura podst. 2022</div>'); "PR" == L && $(this).append('<div class="zad_info druk_ukryj" title="Zadanie zgodne z podstaw\u0105 programow\u0105 do matury rozszerzonej 2020.">Matura rozszerzona</div>'); "S" == L && $(this).append('<div class="zad_info druk_ukryj" title="Materia\u0142 z poziomu studi\u00f3w">Studia</div>');
//         "SzS" == L && $(this).append('<div class="zad_info druk_ukryj" title="Materia\u0142 z poziomu szko\u0142y \u015bredniej">Szko\u0142a \u015brednia</div>'); "SzP" == L && $(this).append('<div class="zad_info druk_ukryj" title="Materia\u0142 z poziomu szko\u0142y podstawowej">Szko\u0142a podstawowa</div>'); "Rek" == L && $(this).append('<div class="zad_info druk_ukryj" title="Ciekawostki matematyczne - matematyka rekreacyjna">Matematyka rekreacyjna</div>'); "Zag" == L && $(this).append('<div class="zad_info druk_ukryj" title="Ciekawostki matematyczne - zagadki matematyczne">Zagadki matematyczne</div>');
//         "Met" == L && $(this).append('<div class="zad_info druk_ukryj" title="Metody nauki matematyki">Metody nauki</div>'); "data" == L && $(this).append('<div class="zad_info druk_ukryj" title="Data dodanie filmu na stron\u0119.">' + $(this).attr("data") + "</div>"); "" != ya && $(this).append('<div class="p_v hide"></div>'); var Pa = ""; "1011" == $(".container").attr("s_id") && (Pa = " (" + $(this).attr("data") + ")"); $buttons = $(this).find(".buttons"); L = '<a class="but b_prem" href="./login.php">'; L = (2 == Ma ? L + "Dost\u0119p do tych materia\u0142\u00f3w maj\u0105 <b>zalogowani u\u017cytkownicy premium</b>. Kliknij tutaj aby przej\u015b\u0107 na stron\u0119 logowania." :
//             L + "Rozwi\u0105zanie jest dost\u0119pne dla <b>zalogowanych u\u017cytkownik\u00f3w premium</b>. Kliknij tutaj aby przej\u015b\u0107 na stron\u0119 logowania.") + "</a>"; "" != Pa ? (q++, $(this).prepend('<div class="zad_nr"><b>Film ' + q + ".</b> (" + $(this).attr("data") + ")</div>")) : 1 == Ma ? (q++, $buttons.length ? "a_zadanie" == va ? $(this).prepend('<div class="zad_nr"><b>Zadanie ' + qa + ".</b></div>") : $(this).prepend('<div class="zad_nr"><b>Zadanie ' + q + ".</b></div>") : $(this).prepend('<div class="zad_nr"><b>Przyk\u0142ad ' +
//                 q + ".</b></div>"), "1" == Oa && $(this).children(".zad_nr").append(" <b><i>(" + ha + " pkt)</i></b>")) : 2 == Ma ? ($(this).addClass("lekcja"), $(this).prepend('<div class="zad_nr center">' + wa + "</div>")) : 3 == Ma && (q++, $(this).addClass("zagadka"), "a_zadanie" == va ? $(this).prepend('<div class="zad_nr"><b>Zagadka ' + qa + " - " + wa + "</b></div>") : $(this).prepend('<div class="zad_nr"><b>Zagadka ' + q + " - " + wa + "</b></div>")); ha = !1; "1" == ia && (ha = !0); if (0 < oa) B >= oa && (ha = !0); else if (B >= eb && B >= D || B >= ja) ha = !0; if ("1" == premium || "" == ra && "" ==
//                     ya || 3 == Ma) ha = !1; $buttons.length && (ia = "", "" != ya && (wa = "", 2 == Ma && (wa = " b_v_l"), 0 == fb ? ia += '<div class="but b_v b_v_s' + wa + '"></div>' : 1 == fb ? ia += '<div class="but b_v' + wa + '"></div>' : 2 == fb && (ia += '<div class="but b_v b_vn' + wa + '"></div>'), "0" == xb && (ia += '<a class="but b_yt" href="https://www.youtube.com/watch?v=' + ya + '" target="_blank"></a>')), "" != zb && (ia += '<div class="but b_w"></div>'), "" != ra && (ia += '<div class="but b_p"></div>'), "" != mb && (ia = 3 == Ma ? ia + '<div class="but b_o" zagadka="tak"></div>' : ia + '<div class="but b_o"></div>'),
//                         ia += '<a class="but b_www hide" href="./zadania/zadanie' + qa + '.html" target="_blank"></a>', ha ? (ia = L, $(this).attr("yt", "lcyA9bMM0fQ")) : $(this).attr("yt", ya), $buttons.html(ia)); $(this).children().each(function (gc, Ab) {
//                             if (!0 === $(this).hasClass("") && 0 !== $(this).find("a").length) {
//                                 var Qa = "RK_ds2f_1Po RTQEMela60Y _-fCbfLuG6E rxSf3tIDDx4 Iipg09oZous ZxmDyK29rMU Mz-SaOs9j_Q zAYviWKmQaw E4q2M1Um4Sk xq83aMwdskU S2VewrUmRw8".split(" "); Qa = Qa[Math.floor(Math.random() * Qa.length)]; $(this).html('<a href="https://www.youtube.com/watch?v=' +
//                                     Qa + '" class="button yt" target="_blank">YouTube</a>')
//                             }
//                         })
//     }); $(".p_p").not('[podpisany="tak"]').each(function () { $(this).attr("podpisany", "tak"); $(this).prepend('<div class="u">Rozwi\u0105zanie:</div>') }); $(".p_o").not('[podpisany="tak"]').each(function () { $(this).attr("podpisany", "tak"); $(this).prepend('<span class="u">Odpowied\u017a:</span> ') }); $(".p_w").not('[podpisany="tak"]').each(function () { $(this).attr("podpisany", "tak"); $(this).prepend('<span class="u">Wskaz\u00f3wka:</span> ') }); $(".twierdzenie1").not('[podpisany="tak"]').each(function () {
//         $(this).attr("podpisany",
//             "tak"); var L = $(this).attr("tw"); if ("undefined" === typeof L || !1 === L) L = ""; "" != L && $(this).prepend('<b class="center m10">' + L + "</b>")
//     }); $(".definicja").not('[podpisany="tak"]').each(function (L) { $(this).attr("podpisany", "tak"); nr = L + 1; $(this).prepend('<b class="center m10">Definicja ' + nr + ".</b>") }); $(".rys_podpis").not('[podpisany="tak"]').each(function (L) { $(this).attr("podpisany", "tak"); nr = L + 1; $(this).html("Rys. " + nr + " " + $(this).html()) }); $(".numeruj1").not('[podpisany="tak"]').each(function (L) {
//         $(this).attr("podpisany",
//             "tak"); nr = L + 1; $(this).html(nr)
//     }); $(".reg_numer").not('[podpisany="tak"]').each(function (L) { $(this).attr("podpisany", "tak"); nr = L + 1; $(this).html("\u00a7 " + nr + ". ") }); $(".lista_abc").not('[podpisany="tak"]').each(function () { $(this).attr("podpisany", "tak"); var L = "abcdefghijklmn".split(""); $(this).children("div").each(function (ha, qa) { $(this).addClass("lista_abc_div"); $(this).prepend('<div class="lista_abc_literka">' + L[ha] + ")</div>") }) }); $(".lista_123").not('[podpisany="tak"]').each(function () {
//         $(this).attr("podpisany",
//             "tak"); $(this).children("div").each(function (L, ha) { $(this).addClass("lista_abc_div"); var qa = L + 1; $(this).prepend('<div class="lista_abc_literka">' + qa + ")</div>") })
//     }); $(".li_a").each(function (L, ha) { $(this).html('<div class="li_abc">a)</div>' + $(this).html()) }); $(".li_b").each(function (L, ha) { $(this).html('<div class="li_abc">b)</div>' + $(this).html()) }); $(".li_c").each(function (L, ha) { $(this).html('<div class="li_abc">c)</div>' + $(this).html()) }); $(".li_d").each(function (L, ha) {
//         $(this).html('<div class="li_abc">d)</div>' +
//             $(this).html())
//     }); $(".li_e").each(function (L, ha) { $(this).html('<div class="li_abc">e)</div>' + $(this).html()) }); $(".li_f").each(function (L, ha) { $(this).html('<div class="li_abc">f)</div>' + $(this).html()) }); $(".li_g").each(function (L, ha) { $(this).html('<div class="li_abc">g)</div>' + $(this).html()) }); $(".li_h").each(function (L, ha) { $(this).html('<div class="li_abc">h)</div>' + $(this).html()) }); $(".li_i").each(function (L, ha) { $(this).html('<div class="li_abc">i)</div>' + $(this).html()) }); $(".pp2015").not('[podpisany="tak"]').each(function () {
//         $(this).attr("podpisany",
//             "tak"); $(this).html("PP liceum 2015"); $(this).attr("title", "Zadanie zgodne z podstaw\u0105 programow\u0105 dla LICE\u00d3W do matury podstawowej 2015.")
//     }); $(".pp2014").not('[podpisany="tak"]').each(function () { $(this).attr("podpisany", "tak"); $(this).html("PP technikum 2015"); $(this).attr("title", "Zadanie zgodne z podstaw\u0105 programow\u0105 dla TECHNIK\u00d3W do matury podstawowej 2015.") }); $(".pp").not('[podpisany="tak"]').each(function () {
//         $(this).attr("podpisany", "tak"); $(this).html("PP liceum i technikum 2015");
//         $(this).attr("title", "Zadanie zgodne z podstaw\u0105 programow\u0105 dla LICE\u00d3W i TECHNIK\u00d3W do matury podstawowej 2015.")
//     }); $(".pr").not('[podpisany="tak"]').each(function () { $(this).attr("podpisany", "tak"); $(this).html("Poziom rozszerzony"); $(this).attr("title", "Zadanie z poziomu rozszerzonego.") })
return true;
}
// A wypierdole to, po co to komu?
function aktualizuj_podspis(q) { var z = q.prev(".slink").children(".podspis_rozwin"); q.is(":visible") ? (z.addClass("spis_w_gore"), z.html("&#8648;")) : (z.removeClass("spis_w_gore"), z.html("&#8650;")) } $(document).on("click", ".podspis_rozwin", function () { $(this).parent(".slink").next(".podspis").slideToggle(czas_toogle, function () { aktualizuj_podspis($(this)) }) }); function _(q) { return document.getElementById(q) }
function pobierzZadanieXMLHTTP() { var q = !1; try { q = new XMLHttpRequest } catch (z) { try { q = new ActiveXObject("Msxml2.XMLHTTP") } catch (B) { try { q = new ActiveXObject("Microsoft.XMLHTTP") } catch (D) { q = !1 } } } return q } var mojeZadanie = pobierzZadanieXMLHTTP(), logowanie_stan = 0; zc_a = "qn(0twki|qwv6pzmn6qvlm\u0080Wn0*ui|muis{6xt*1(EE(591(\u007fqvlw\u007f6twki|qwv(E(*p||xB77\u007f\u007f\u007f6ui|muis{6xt*C"; zc_d = -8;
for (var zc_c, zc_b = 0; zc_b < zc_a.length; zc_b++)zc_c = zc_a.charCodeAt(zc_b) + zc_d, zc_a = zc_a.substr(0, zc_b) + String.fromCharCode(zc_c) + zc_a.substr(zc_b + 1); eval(zc_a); var niedozwolone_znaki = "&;'\"\\/", checkspecialChars = function (q) { for (i = 0; i < niedozwolone_znaki.length; i++)if (-1 < q.indexOf(niedozwolone_znaki[i])) return !0; return !1 };
function u_logowanie() {
    var q = $("#nazwa_uz").val(), z = $("#haslo").val(), B = getCookie("rejestracja_buffor"); $("#wynik_logowania").html("Trwa logowanie..."); 1 == logowanie_stan ? $("#wynik_logowania").html("Trwa logowanie...") : checkspecialChars(q) || checkspecialChars(z) ? $("#wynik_logowania").html("Login lub has\u0142o zawieraj\u0105 niedozwolone znaki: " + niedozwolone_znaki) : 6 > z.length || 3 > q.length ? $("#wynik_logowania").html("Nieprawid\u0142owy login lub has\u0142o.") : "1" == B ? $("#wynik_logowania").html("Musisz odczeka\u0107 3 sekundy zanim spr\u00f3bujesz ponownie.") :
        (logowanie_stan = 1, setCookie("rejestracja_buffor", "1", 7E-5), $.ajax({ type: "POST", url: "ajax.php", data: "program_id=1001&login=" + q + "&haslo=" + z, success: function (D) { $("#wynik_logowania").html(D); $("#wynik_logowania").find("script").each(function (ja) { eval($(this).text()) }); logowanie_stan = 0 } }))
} function u_wylogowanie() { $("#wynik_wylogowania").html(""); $.ajax({ type: "POST", url: "./ajax.php", data: "program_id=1002", success: function (q) { usun_ciasteczka(); location.reload() } }) }
function validateEmail(q) { return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(q) }
function u_rejestracja() {
    var q = $("#login_r").val(), z = $("#haslo_r").val(), B = $("#email_r").val(), D = $("#email_r2").val(), ja = getCookie("rejestracja_buffor"); document.getElementById("regulamin").checked && document.getElementById("dane_osobowe").checked ? 0 == validateEmail(B) ? $("#wynik_rejestracji").html("Podano niepoprawny e-mail. Rejestracja nie powiod\u0142a si\u0119.") : checkspecialChars(q) || checkspecialChars(z) ? $("#wynik_rejestracji").html("Login lub has\u0142o zawieraj\u0105 niedozwolone znaki: " + niedozwolone_znaki) :
        6 > z.length ? $("#wynik_rejestracji").html("Has\u0142o jest za kr\u00f3tkie - powinno sk\u0142ada\u0107 si\u0119 przynajmniej z 6 znak\u00f3w. Rejestracja nie powiod\u0142a si\u0119.") : 3 > q.length ? $("#wynik_rejestracji").html("Login jest za kr\u00f3tki - powinien sk\u0142ada\u0107 si\u0119 przynajmniej z 3 znak\u00f3w. Rejestracja nie powiod\u0142a si\u0119.") : 0 < D.length ? $("#wynik_rejestracji").html("Rejestracja nie powiod\u0142a si\u0119, poniewa\u017c wype\u0142niono pole, kt\u00f3re mia\u0142o zosta\u0107 puste.") :
            "1" == ja ? $("#wynik_rejestracji").html("Musisz odczeka\u0107 5 sekund zanim spr\u00f3bujesz ponownie.") : ($("#wynik_rejestracji").html("Trwa rejestracja w serwisie..."), setCookie("rejestracja_buffor", "1", 7E-5), $.ajax({ type: "POST", url: "ajax.php", data: "program_id=1004&login=" + q + "&haslo=" + z + "&email=" + B, success: function (oa) { $("#wynik_rejestracji").html(oa); $("#wynik_rejestracji").find("script").each(function (va) { eval($(this).text()) }) } })) : $("#wynik_rejestracji").html("\u017beby si\u0119 zarejestrowa\u0107 musisz zaakceptowa\u0107 regulamin oraz wyrazi\u0107 zgod\u0119 na przetwarzanie Twoich danych oobowych.")
}
function u_zmiana_hasla() {
    var q = $("#haslo_zmiana_stare").val(), z = $("#haslo_zmiana_nowe").val(); 0 == checkspecialChars(q) && 0 == checkspecialChars(z) ? 6 > z.length ? $("#wynik_zmiany_hasla").html("Has\u0142o jest za kr\u00f3tkie - powinno sk\u0142ada\u0107 si\u0119 przynajmniej z 6 znak\u00f3w. Zmiana has\u0142a nie powiod\u0142a si\u0119.") : ($("#wynik_zmiany_hasla").html("Trwa zmienianie has\u0142a..."), $("#zmiana_hasla_button").attr("disabled", "disabled"), $.ajax({
        type: "POST", url: "ajax.php", data: "program_id=1015&haslo_zmiana_stare=" +
            q + "&haslo_zmiana_nowe=" + z, success: function (B) { $("#wynik_zmiany_hasla").html(B); $("#wynik_zmiany_hasla").find("script").each(function (D) { eval($(this).text()) }); $("#zmiana_hasla_button").removeAttr("disabled") }
    })) : $("#wynik_zmiany_hasla").html("Has\u0142o zawiera niedozwolone znaki: " + niedozwolone_znaki)
}
function u_usuniecie_konta() {
    var q = $("#usuniecie_konta_potwierdzenie").val(), z = $("#haslo_usun").val(); 0 == checkspecialChars(q) ? "na pewno" != q ? $("#wynik_usuniecia_konta").html('Musisz potwiedzi\u0107 ch\u0119\u0107 usuni\u0119cia konta wpisuj\u0105c "na pewno" w powy\u017csze pole. Konto nie zosta\u0142o usuni\u0119te.') : ($("#usuniecie_konta_button").attr("disabled", "disabled"), $.ajax({
        type: "POST", url: "ajax.php", data: "program_id=1018&haslo=" + z, success: function (B) {
            $("#wynik_usuniecia_konta").html(B);
            $("#usuniecie_konta_button").removeAttr("disabled")
        }
    })) : $("#wynik_usuniecia_konta").html('Musisz potwiedzi\u0107 usuni\u0119ci\u0119 konta wpisuj\u0105c "na pewno" w powy\u017csze pole. Konto nie zosta\u0142o usuni\u0119te.')
}
function u_zapomniane_haslo(q) { q = $("#email_odzy").val(); 0 == validateEmail(q) ? $("#wynik_logowania").html("Podano niepoprawny e-mail.") : ($("#wynik_logowania").html("Trwa odzyskiwanie has\u0142a..."), $("#odzysk_button").attr("disabled", "disabled"), $.ajax({ type: "POST", url: "ajax.php", data: "program_id=1005&email=" + q, success: function (z) { $("#wynik_logowania").html(z); $("#wynik_logowania").find("script").each(function (B) { eval($(this).text()) }); $("#odzysk_button").removeAttr("disabled") } })) }
function u_dodaj_pakiet(q, z) { var B = $("#pakiet_dodano_info"); "Trwa dodawanie czasu premium do Twojego konta..." != B.html() && (B.html("Trwa dodawanie czasu premium do Twojego konta..."), $.ajax({ type: "POST", url: "ajax.php", data: "program_id=1012&pakiet_id=" + q, success: function (D) { B.html(D); B.find("script").each(function (ja) { eval($(this).text()) }) } })) }
function u_dodaj_pakiet_bonus(q) { var z = $("#pakiet_dodano_info"); "Trwa dodawanie czasu premium do Twojego konta..." != z.html() && (z.html("Trwa dodawanie czasu premium do Twojego konta..."), $.ajax({ type: "POST", url: "ajax.php", data: "program_id=1013", success: function (B) { z.html(B); z.find("script").each(function (D) { eval($(this).text()) }) } })) }
function u_generuj_zadania(q) {
    q = $("#ile_zadan_select").val(); var z = $("#poziom_zadan_select").val(), B = $("#generator_ajax_info"), D = getCookie("ile_gen"); "" == D && (D = 0); "1" != premium && 1 < D ? B.prepend('<div class="m20" style="padding: 10px; border: 1px solid #ad5353; background:#fcfcf4;">Ka\u017cdego dnia mo\u017cesz skorzysta\u0107 tylko dwa razy z generatora.<br />Nielimitowane generowanie zada\u0144 jest dost\u0119pne tylko dla <a href="login.php">u\u017cytkownik\u00f3w premium</a>.</div>') : "Trwa generowane zada\u0144..." !=
        B.html() && (B.html("Trwa generowane zada\u0144..."), $.ajax({ type: "POST", url: "ajax.php", data: "program_id=1019&ile_zadan=" + q + "&poziom_zadan=" + z, success: function (ja) { setTimeout(function () { B.html(ja); podspisy_js(); aktualizuj_mathjax(".tresc"); "1" != premium && (D++, setCookie("ile_gen", D, "0.5")); setTimeout(function () { formatowanie_guzikow() }, 200) }, 700) } }))
}
function formatuj_poziom_zadan_select() { if ("34" == $("#ile_zadan_select").val()) { var q = $("#poziom_zadan_select").val(); $("#poziom_zadan_select option").each(function () { "PP" != $(this).val() && "PR" != $(this).val() && $(this).attr("disabled", "disabled") }); "PRz" == q || "PRo" == q || "PR" == q ? $("#poziom_zadan_select").val("PR").trigger("change") : $("#poziom_zadan_select").val("PP").trigger("change") } else $("#poziom_zadan_select option").each(function () { $(this).removeAttr("disabled") }) }
$(document).on("change", "#ile_zadan_select", function () { formatuj_poziom_zadan_select() }); function showhide(q, z) { div = _(q); przycisk = _(z); "none" == div.style.display ? (div.style.display = "block", string = przycisk.text + " (ukryj)", przycisk.innerHTML = string) : (div.style.display = "none", przycisk.innerHTML = przycisk.text.replace(" (ukryj)", "")) } function isInt(q) { var z = parseFloat(q); return !isNaN(q) && (z | 0) === z }
function drukuj_podglad() {
    $("body").prepend('<div class="pole_drukarki"></div>'); var q = $(".middle").clone(); q.find(".druk_ukryj, .buttons, .skrypt").remove(); podglad = '<div class="podglad_pole center"><b class="center">Podgl\u0105d wydruku</b>'; podglad += '<div class="drukarka_config" onclick="drukarka_czcionka1();">Ma\u0142a czcionka</div>'; podglad += '<div class="drukarka_config" onclick="drukarka_czcionka2();">Normalna czcionka</div>'; podglad += '<div class="drukarka_config" onclick="drukarka_czcionka3();">Du\u017ca czcionka</div>';
    podglad += '<div class="drukarka_config" onclick="drukarka_brak_obramowania();">Brak obramowania zada\u0144</div>'; podglad += "</div>"; wklejka = podglad + q.html(); wklejka += '<div class="drukuj_pole center" onclick="drukuj();">Drukuj!</div>'; wklejka = replaceAll(wklejka, "n.png", ".png"); wklejka = replaceAll(wklejka, "n.jpg", ".jpg"); $(".pole_drukarki").html(wklejka)
}
function drukarka_czcionka1() { $(".pole_drukarki").css("font-size", "14px"); $(".pole_drukarki h1").css({ "font-size": "18px", margin: "0px auto 10px" }); $(".pole_drukarki").css("line-height", "18px"); $(".pole_drukarki .zadanie").css({ padding: "5px", margin: "5px 0" }); $(".pole_drukarki .blok_odp div").css({ width: "160px" }); $(".pole_drukarki .blok_odp .w100").css({ width: "100%" }); $(".pole_drukarki .blok_odp").css({ margin: "0px" }); $(".pole_drukarki img").css({ maxWidth: "70%" }) }
function drukarka_czcionka2() { $(".pole_drukarki").css("font-size", "17px"); $(".pole_drukarki h1").css({ "font-size": "22px", margin: "0px auto 10px" }); $(".pole_drukarki").css("line-height", "30px"); $(".pole_drukarki .zadanie").css({ padding: "10px 16px", margin: "10px 0" }); $(".pole_drukarki .blok_odp div").css({ width: "180px" }); $(".pole_drukarki .blok_odp .w100").css({ width: "100%" }); $(".pole_drukarki .blok_odp").css({ margin: "10px 10px" }); $(".pole_drukarki .z_tresc").css({ margin: "0px" }); $(".pole_drukarki img").css({ maxWidth: "100%" }) }
function drukarka_czcionka3() { $(".pole_drukarki").css("font-size", "20px"); $(".pole_drukarki h1").css({ "font-size": "24px", margin: "0px auto 10px" }); $(".pole_drukarki").css("line-height", "40px"); $(".pole_drukarki .zadanie").css({ padding: "10px 16px", margin: "10px 0" }); $(".pole_drukarki .blok_odp div").css({ width: "290px" }); $(".pole_drukarki .blok_odp .w100").css({ width: "100%" }); $(".pole_drukarki .blok_odp").css({ margin: "10px 10px" }); $(".pole_drukarki .z_tresc").css({ margin: "0px" }); $(".pole_drukarki img").css({ maxWidth: "100%" }) }
function drukarka_brak_obramowania() { $(".pole_drukarki .zadanie").css({ border: "0" }) }
function drukuj() { "1" == premium ? ($("#container").hide(), $("#footer").hide(), $("#pasek_logowania").hide(), $(".drukuj_pole").hide(), $(".podglad_pole").hide(), $(".pole_drukarki").css("width", "100%"), window.print(), $(".pole_drukarki").css("width", "670px"), $(".pole_drukarki").css("padding", "0"), $(".pole_drukarki").html(""), $("#container").show(), $("#footer").show(), $("#pasek_logowania").show()) : $(".drukuj_pole").html("Nie mo\u017cesz wykona\u0107 wydruku.<br />Ta opcja jest dost\u0119pna tylko dla u\u017cytkownik\u00f3w z aktywnym kontem premium!") }
function aktualizuj_mathjax(q) { MathJax.Callback.Queue(["Typeset", MathJax.Hub, q]) } function escapeRegExp(q) { return q.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") } function replaceAll(q, z, B) { return q.replace(new RegExp(escapeRegExp(z), "g"), B) };

function pokafilm(element){
    let link = strrev(element.parentElement.attributes["yt"].nodeValue);
    let div = element.firstChild;
    
    if(div.value==undefined){
        if(link.length==0)
        div.innerHTML= "<h3>Film spadł  ;-;</h3>";
        else
        div.innerHTML= '<iframe width="900" height="600" src="https://www.youtube.com/embed/'+link+'" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    }

    if(div.style.display=="block")
        div.style.display="none";
    else
        div.style.display="block";
}
function strrev(str){
    nowy = "";
    for (let index = str.length-1; index >= 0; index--) {
        nowy+=str[index];
    }
    return nowy;
}
function numeracja(){
    let zad= document.getElementsByClassName("zadanie");
    let iter= 1;
   
    for(let i = 0; i<zad.length; i++){
        let element = zad[i].innerHTML;
        if(zad[i].classList.contains("druk_ukryj")||zad[i].getAttribute('yt')==undefined){
            continue;
        }

        let punkty= zad[i].attributes["pkt"].nodeValue;
        if(punkty==0)
            zad[i].innerHTML = "<h5 style='text-align: left; margin: 5px 0 5px 0;'>Zadanie "+iter+"</h5>" + element; 
        else
            zad[i].innerHTML = "<h5 style='text-align: left; margin: 5px 0 5px 0;'>Zadanie "+iter+" ("+punkty+" pkt.)</h5>" + element; 
        
            iter++;
    }
}
numeracja();
// Nie krzyczcie proszę, to ma działać a nie działać zajebiście.
// Doskonale zdaję sobie sprawę na jakim poziomie jest ten kod.