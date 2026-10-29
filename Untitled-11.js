(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 196121, 271271, e => {
    "use strict";
    var t = e.i(843476)
      , n = e.i(271645)
      , r = e.i(900065)
      , i = e.i(175765);
    function o(e, t, n, r) {
        let i, o = e.length, l = 0;
        if (t = t < 0 ? -t > o ? 0 : o + t : t > o ? o : t,
        n = n > 0 ? n : 0,
        r.length < 1e4)
            (i = Array.from(r)).unshift(t, n),
            e.splice(...i);
        else
            for (n && e.splice(t, n); l < r.length; )
                (i = r.slice(l, l + 1e4)).unshift(t, 0),
                e.splice(...i),
                l += 1e4,
                t += 1e4
    }
    function l(e, t) {
        return e.length > 0 ? (o(e, e.length, 0, t),
        e) : t
    }
    let s = {}.hasOwnProperty;
    function u(e) {
        let t = {}
          , n = -1;
        for (; ++n < e.length; )
            !function(e, t) {
                let n;
                for (n in t) {
                    let r, i = (s.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
                    if (l)
                        for (r in l) {
                            s.call(i, r) || (i[r] = []);
                            let e = l[r];
                            !function(e, t) {
                                let n = -1
                                  , r = [];
                                for (; ++n < t.length; )
                                    ("after" === t[n].add ? e : r).push(t[n]);
                                o(e, 0, 0, r)
                            }(i[r], Array.isArray(e) ? e : e ? [e] : [])
                        }
                }
            }(t, e[n]);
        return t
    }
    let c = v(/[A-Za-z]/)
      , a = v(/[\dA-Za-z]/)
      , f = v(/[#-'*+\--9=?A-Z^-~]/);
    function h(e) {
        return null !== e && (e < 32 || 127 === e)
    }
    let d = v(/\d/)
      , p = v(/[\dA-Fa-f]/)
      , m = v(/[!-/:-@[-`{-~]/);
    function g(e) {
        return null !== e && e < -2
    }
    function k(e) {
        return null !== e && (e < 0 || 32 === e)
    }
    function x(e) {
        return -2 === e || -1 === e || 32 === e
    }
    let y = v(/\p{P}|\p{S}/u)
      , b = v(/\s/);
    function v(e) {
        return function(t) {
            return null !== t && t > -1 && e.test(String.fromCharCode(t))
        }
    }
    function w(e, t, n, r) {
        let i = r ? r - 1 : 1 / 0
          , o = 0;
        return function(r) {
            return x(r) ? (e.enter(n),
            function r(l) {
                return x(l) && o++ < i ? (e.consume(l),
                r) : (e.exit(n),
                t(l))
            }(r)) : t(r)
        }
    }
    let S = {
        tokenize: function(e) {
            let t, n = e.attempt(this.parser.constructs.contentInitial, function(t) {
                return null === t ? void e.consume(t) : (e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                w(e, n, "linePrefix"))
            }, function(n) {
                return e.enter("paragraph"),
                function n(r) {
                    let i = e.enter("chunkText", {
                        contentType: "text",
                        previous: t
                    });
                    return t && (t.next = i),
                    t = i,
                    function t(r) {
                        if (null === r) {
                            e.exit("chunkText"),
                            e.exit("paragraph"),
                            e.consume(r);
                            return
                        }
                        return g(r) ? (e.consume(r),
                        e.exit("chunkText"),
                        n) : (e.consume(r),
                        t)
                    }(r)
                }(n)
            });
            return n
        }
    }
      , C = {
        tokenize: function(e) {
            let t, n, r, i = this, l = [], s = 0;
            return u;
            function u(t) {
                if (s < l.length) {
                    let n = l[s];
                    return i.containerState = n[1],
                    e.attempt(n[0].continuation, c, a)(t)
                }
                return a(t)
            }
            function c(e) {
                if (s++,
                i.containerState._closeFlow) {
                    let n;
                    i.containerState._closeFlow = void 0,
                    t && y();
                    let r = i.events.length
                      , l = r;
                    for (; l--; )
                        if ("exit" === i.events[l][0] && "chunkFlow" === i.events[l][1].type) {
                            n = i.events[l][1].end;
                            break
                        }
                    x(s);
                    let u = r;
                    for (; u < i.events.length; )
                        i.events[u][1].end = {
                            ...n
                        },
                        u++;
                    return o(i.events, l + 1, 0, i.events.slice(r)),
                    i.events.length = u,
                    a(e)
                }
                return u(e)
            }
            function a(n) {
                if (s === l.length) {
                    if (!t)
                        return d(n);
                    if (t.currentConstruct && t.currentConstruct.concrete)
                        return m(n);
                    i.interrupt = !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack)
                }
                return i.containerState = {},
                e.check(E, f, h)(n)
            }
            function f(e) {
                return t && y(),
                x(s),
                d(e)
            }
            function h(e) {
                return i.parser.lazy[i.now().line] = s !== l.length,
                r = i.now().offset,
                m(e)
            }
            function d(t) {
                return i.containerState = {},
                e.attempt(E, p, m)(t)
            }
            function p(e) {
                return s++,
                l.push([i.currentConstruct, i.containerState]),
                d(e)
            }
            function m(r) {
                if (null === r) {
                    t && y(),
                    x(0),
                    e.consume(r);
                    return
                }
                return t = t || i.parser.flow(i.now()),
                e.enter("chunkFlow", {
                    _tokenizer: t,
                    contentType: "flow",
                    previous: n
                }),
                function t(n) {
                    if (null === n) {
                        k(e.exit("chunkFlow"), !0),
                        x(0),
                        e.consume(n);
                        return
                    }
                    return g(n) ? (e.consume(n),
                    k(e.exit("chunkFlow")),
                    s = 0,
                    i.interrupt = void 0,
                    u) : (e.consume(n),
                    t)
                }(r)
            }
            function k(e, l) {
                let u = i.sliceStream(e);
                if (l && u.push(null),
                e.previous = n,
                n && (n.next = e),
                n = e,
                t.defineSkip(e.start),
                t.write(u),
                i.parser.lazy[e.start.line]) {
                    let e, n, l = t.events.length;
                    for (; l--; )
                        if (t.events[l][1].start.offset < r && (!t.events[l][1].end || t.events[l][1].end.offset > r))
                            return;
                    let u = i.events.length
                      , c = u;
                    for (; c--; )
                        if ("exit" === i.events[c][0] && "chunkFlow" === i.events[c][1].type) {
                            if (e) {
                                n = i.events[c][1].end;
                                break
                            }
                            e = !0
                        }
                    for (x(s),
                    l = u; l < i.events.length; )
                        i.events[l][1].end = {
                            ...n
                        },
                        l++;
                    o(i.events, c + 1, 0, i.events.slice(u)),
                    i.events.length = l
                }
            }
            function x(t) {
                let n = l.length;
                for (; n-- > t; ) {
                    let t = l[n];
                    i.containerState = t[1],
                    t[0].exit.call(i, e)
                }
                l.length = t
            }
            function y() {
                t.write([null]),
                n = void 0,
                t = void 0,
                i.containerState._closeFlow = void 0
            }
        }
    }
      , E = {
        tokenize: function(e, t, n) {
            return w(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
        }
    }
      , T = {
        partial: !0,
        tokenize: function(e, t, n) {
            return function(t) {
                return x(t) ? w(e, r, "linePrefix")(t) : r(t)
            }
            ;
            function r(e) {
                return null === e || g(e) ? t(e) : n(e)
            }
        }
    };
    class F {
        constructor(e) {
            this.left = e ? [...e] : [],
            this.right = []
        }
        get(e) {
            if (e < 0 || e >= this.left.length + this.right.length)
                throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
            return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1]
        }
        get length() {
            return this.left.length + this.right.length
        }
        shift() {
            return this.setCursor(0),
            this.right.pop()
        }
        slice(e, t) {
            let n = null == t ? 1 / 0 : t;
            return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse())
        }
        splice(e, t, n) {
            this.setCursor(Math.trunc(e));
            let r = this.right.splice(this.right.length - (t || 0), 1 / 0);
            return n && I(this.left, n),
            r.reverse()
        }
        pop() {
            return this.setCursor(1 / 0),
            this.left.pop()
        }
        push(e) {
            this.setCursor(1 / 0),
            this.left.push(e)
        }
        pushMany(e) {
            this.setCursor(1 / 0),
            I(this.left, e)
        }
        unshift(e) {
            this.setCursor(0),
            this.right.push(e)
        }
        unshiftMany(e) {
            this.setCursor(0),
            I(this.right, e.reverse())
        }
        setCursor(e) {
            if (e !== this.left.length && (!(e > this.left.length) || 0 !== this.right.length) && (!(e < 0) || 0 !== this.left.length))
                if (e < this.left.length) {
                    let t = this.left.splice(e, 1 / 0);
                    I(this.right, t.reverse())
                } else {
                    let t = this.right.splice(this.left.length + this.right.length - e, 1 / 0);
                    I(this.left, t.reverse())
                }
        }
    }
    function I(e, t) {
        let n = 0;
        if (t.length < 1e4)
            e.push(...t);
        else
            for (; n < t.length; )
                e.push(...t.slice(n, n + 1e4)),
                n += 1e4
    }
    function z(e) {
        let t, n, r, i, l, s, u, c = {}, a = -1, f = new F(e);
        for (; ++a < f.length; ) {
            for (; a in c; )
                a = c[a];
            if (t = f.get(a),
            a && "chunkFlow" === t[1].type && "listItemPrefix" === f.get(a - 1)[1].type && ((r = 0) < (s = t[1]._tokenizer.events).length && "lineEndingBlank" === s[r][1].type && (r += 2),
            r < s.length && "content" === s[r][1].type))
                for (; ++r < s.length && "content" !== s[r][1].type; )
                    "chunkText" === s[r][1].type && (s[r][1]._isInFirstContentOfListItem = !0,
                    r++);
            if ("enter" === t[0])
                t[1].contentType && (Object.assign(c, function(e, t) {
                    let n, r, i = e.get(t)[1], o = e.get(t)[2], l = t - 1, s = [], u = i._tokenizer;
                    !u && (u = o.parser[i.contentType](i.start),
                    i._contentTypeTextTrailing && (u._contentTypeTextTrailing = !0));
                    let c = u.events
                      , a = []
                      , f = {}
                      , h = -1
                      , d = i
                      , p = 0
                      , m = 0
                      , g = [0];
                    for (; d; ) {
                        for (; e.get(++l)[1] !== d; )
                            ;
                        s.push(l),
                        !d._tokenizer && (n = o.sliceStream(d),
                        d.next || n.push(null),
                        r && u.defineSkip(d.start),
                        d._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = !0),
                        u.write(n),
                        d._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = void 0)),
                        r = d,
                        d = d.next
                    }
                    for (d = i; ++h < c.length; )
                        "exit" === c[h][0] && "enter" === c[h - 1][0] && c[h][1].type === c[h - 1][1].type && c[h][1].start.line !== c[h][1].end.line && (m = h + 1,
                        g.push(m),
                        d._tokenizer = void 0,
                        d.previous = void 0,
                        d = d.next);
                    for (u.events = [],
                    d ? (d._tokenizer = void 0,
                    d.previous = void 0) : g.pop(),
                    h = g.length; h--; ) {
                        let t = c.slice(g[h], g[h + 1])
                          , n = s.pop();
                        a.push([n, n + t.length - 1]),
                        e.splice(n, 2, t)
                    }
                    for (a.reverse(),
                    h = -1; ++h < a.length; )
                        f[p + a[h][0]] = p + a[h][1],
                        p += a[h][1] - a[h][0] - 1;
                    return f
                }(f, a)),
                a = c[a],
                u = !0);
            else if (t[1]._container) {
                for (r = a,
                n = void 0; r--; )
                    if ("lineEnding" === (i = f.get(r))[1].type || "lineEndingBlank" === i[1].type)
                        "enter" === i[0] && (n && (f.get(n)[1].type = "lineEndingBlank"),
                        i[1].type = "lineEnding",
                        n = r);
                    else if ("linePrefix" === i[1].type || "listItemIndent" === i[1].type)
                        ;
                    else
                        break;
                n && (t[1].end = {
                    ...f.get(n)[1].start
                },
                (l = f.slice(n, a)).unshift(t),
                f.splice(n, a - n + 1, l))
            }
        }
        return o(e, 0, 1 / 0, f.slice(0)),
        !u
    }
    let A = {
        resolve: function(e) {
            return z(e),
            e
        },
        tokenize: function(e, t) {
            let n;
            return function(t) {
                return e.enter("content"),
                n = e.enter("chunkContent", {
                    contentType: "content"
                }),
                r(t)
            }
            ;
            function r(t) {
                return null === t ? i(t) : g(t) ? e.check(L, o, i)(t) : (e.consume(t),
                r)
            }
            function i(n) {
                return e.exit("chunkContent"),
                e.exit("content"),
                t(n)
            }
            function o(t) {
                return e.consume(t),
                e.exit("chunkContent"),
                n.next = e.enter("chunkContent", {
                    contentType: "content",
                    previous: n
                }),
                n = n.next,
                r
            }
        }
    }
      , L = {
        partial: !0,
        tokenize: function(e, t, n) {
            let r = this;
            return function(t) {
                return e.exit("chunkContent"),
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                w(e, i, "linePrefix")
            }
            ;
            function i(i) {
                if (null === i || g(i))
                    return n(i);
                let o = r.events[r.events.length - 1];
                return !r.parser.constructs.disable.null.includes("codeIndented") && o && "linePrefix" === o[1].type && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i)
            }
        }
    }
      , P = {
        tokenize: function(e) {
            let t = this
              , n = e.attempt(T, function(r) {
                return null === r ? void e.consume(r) : (e.enter("lineEndingBlank"),
                e.consume(r),
                e.exit("lineEndingBlank"),
                t.currentConstruct = void 0,
                n)
            }, e.attempt(this.parser.constructs.flowInitial, r, w(e, e.attempt(this.parser.constructs.flow, r, e.attempt(A, r)), "linePrefix")));
            return n;
            function r(r) {
                return null === r ? void e.consume(r) : (e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                t.currentConstruct = void 0,
                n)
            }
        }
    }
      , _ = {
        resolveAll: R()
    }
      , D = j("string")
      , M = j("text");
    function j(e) {
        return {
            resolveAll: R("text" === e ? O : void 0),
            tokenize: function(t) {
                let n = this
                  , r = this.parser.constructs[e]
                  , i = t.attempt(r, o, l);
                return o;
                function o(e) {
                    return u(e) ? i(e) : l(e)
                }
                function l(e) {
                    return null === e ? void t.consume(e) : (t.enter("data"),
                    t.consume(e),
                    s)
                }
                function s(e) {
                    return u(e) ? (t.exit("data"),
                    i(e)) : (t.consume(e),
                    s)
                }
                function u(e) {
                    if (null === e)
                        return !0;
                    let t = r[e]
                      , i = -1;
                    if (t)
                        for (; ++i < t.length; ) {
                            let e = t[i];
                            if (!e.previous || e.previous.call(n, n.previous))
                                return !0
                        }
                    return !1
                }
            }
        }
    }
    function R(e) {
        return function(t, n) {
            let r, i = -1;
            for (; ++i <= t.length; )
                void 0 === r ? t[i] && "data" === t[i][1].type && (r = i,
                i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end,
                t.splice(r + 2, i - r - 2),
                i = r + 2),
                r = void 0);
            return e ? e(t, n) : t
        }
    }
    function O(e, t) {
        let n = 0;
        for (; ++n <= e.length; )
            if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
                let r, i = e[n - 1][1], o = t.sliceStream(i), l = o.length, s = -1, u = 0;
                for (; l--; ) {
                    let e = o[l];
                    if ("string" == typeof e) {
                        for (s = e.length; 32 === e.charCodeAt(s - 1); )
                            u++,
                            s--;
                        if (s)
                            break;
                        s = -1
                    } else if (-2 === e)
                        r = !0,
                        u++;
                    else if (-1 === e)
                        ;
                    else {
                        l++;
                        break
                    }
                }
                if (t._contentTypeTextTrailing && n === e.length && (u = 0),
                u) {
                    let o = {
                        type: n === e.length || r || u < 2 ? "lineSuffix" : "hardBreakTrailing",
                        start: {
                            _bufferIndex: l ? s : i.start._bufferIndex + s,
                            _index: i.start._index + l,
                            line: i.end.line,
                            column: i.end.column - u,
                            offset: i.end.offset - u
                        },
                        end: {
                            ...i.end
                        }
                    };
                    i.end = {
                        ...o.start
                    },
                    i.start.offset === i.end.offset ? Object.assign(i, o) : (e.splice(n, 0, ["enter", o, t], ["exit", o, t]),
                    n += 2)
                }
                n++
            }
        return e
    }
    function H(e) {
        return null === e || k(e) || b(e) ? 1 : y(e) ? 2 : void 0
    }
    function B(e, t, n) {
        let r = []
          , i = -1;
        for (; ++i < e.length; ) {
            let o = e[i].resolveAll;
            o && !r.includes(o) && (t = o(t, n),
            r.push(o))
        }
        return t
    }
    let q = {
        name: "attention",
        resolveAll: function(e, t) {
            let n, r, i, s, u, c, a, f, h = -1;
            for (; ++h < e.length; )
                if ("enter" === e[h][0] && "attentionSequence" === e[h][1].type && e[h][1]._close) {
                    for (n = h; n--; )
                        if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[h][1]).charCodeAt(0)) {
                            if ((e[n][1]._close || e[h][1]._open) && (e[h][1].end.offset - e[h][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[h][1].end.offset - e[h][1].start.offset) % 3))
                                continue;
                            c = e[n][1].end.offset - e[n][1].start.offset > 1 && e[h][1].end.offset - e[h][1].start.offset > 1 ? 2 : 1;
                            let d = {
                                ...e[n][1].end
                            }
                              , p = {
                                ...e[h][1].start
                            };
                            V(d, -c),
                            V(p, c),
                            s = {
                                type: c > 1 ? "strongSequence" : "emphasisSequence",
                                start: d,
                                end: {
                                    ...e[n][1].end
                                }
                            },
                            u = {
                                type: c > 1 ? "strongSequence" : "emphasisSequence",
                                start: {
                                    ...e[h][1].start
                                },
                                end: p
                            },
                            i = {
                                type: c > 1 ? "strongText" : "emphasisText",
                                start: {
                                    ...e[n][1].end
                                },
                                end: {
                                    ...e[h][1].start
                                }
                            },
                            r = {
                                type: c > 1 ? "strong" : "emphasis",
                                start: {
                                    ...s.start
                                },
                                end: {
                                    ...u.end
                                }
                            },
                            e[n][1].end = {
                                ...s.start
                            },
                            e[h][1].start = {
                                ...u.end
                            },
                            a = [],
                            e[n][1].end.offset - e[n][1].start.offset && (a = l(a, [["enter", e[n][1], t], ["exit", e[n][1], t]])),
                            a = l(a, [["enter", r, t], ["enter", s, t], ["exit", s, t], ["enter", i, t]]),
                            a = l(a, B(t.parser.constructs.insideSpan.null, e.slice(n + 1, h), t)),
                            a = l(a, [["exit", i, t], ["enter", u, t], ["exit", u, t], ["exit", r, t]]),
                            e[h][1].end.offset - e[h][1].start.offset ? (f = 2,
                            a = l(a, [["enter", e[h][1], t], ["exit", e[h][1], t]])) : f = 0,
                            o(e, n - 1, h - n + 3, a),
                            h = n + a.length - f - 2;
                            break
                        }
                }
            for (h = -1; ++h < e.length; )
                "attentionSequence" === e[h][1].type && (e[h][1].type = "data");
            return e
        },
        tokenize: function(e, t) {
            let n, r = this.parser.constructs.attentionMarkers.null, i = this.previous, o = H(i);
            return function(l) {
                return n = l,
                e.enter("attentionSequence"),
                function l(s) {
                    if (s === n)
                        return e.consume(s),
                        l;
                    let u = e.exit("attentionSequence")
                      , c = H(s)
                      , a = !c || 2 === c && o || r.includes(s)
                      , f = !o || 2 === o && c || r.includes(i);
                    return u._open = !!(42 === n ? a : a && (o || !f)),
                    u._close = !!(42 === n ? f : f && (c || !a)),
                    t(s)
                }(l)
            }
        }
    };
    function V(e, t) {
        e.column += t,
        e.offset += t,
        e._bufferIndex += t
    }
    let U = {
        continuation: {
            tokenize: function(e, t, n) {
                let r = this;
                return function(t) {
                    return x(t) ? w(e, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : i(t)
                }
                ;
                function i(r) {
                    return e.attempt(U, t, n)(r)
                }
            }
        },
        exit: function(e) {
            e.exit("blockQuote")
        },
        name: "blockQuote",
        tokenize: function(e, t, n) {
            let r = this;
            return function(t) {
                if (62 === t) {
                    let n = r.containerState;
                    return n.open || (e.enter("blockQuote", {
                        _container: !0
                    }),
                    n.open = !0),
                    e.enter("blockQuotePrefix"),
                    e.enter("blockQuoteMarker"),
                    e.consume(t),
                    e.exit("blockQuoteMarker"),
                    i
                }
                return n(t)
            }
            ;
            function i(n) {
                return x(n) ? (e.enter("blockQuotePrefixWhitespace"),
                e.consume(n),
                e.exit("blockQuotePrefixWhitespace"),
                e.exit("blockQuotePrefix"),
                t) : (e.exit("blockQuotePrefix"),
                t(n))
            }
        }
    }
      , N = {
        name: "characterEscape",
        tokenize: function(e, t, n) {
            return function(t) {
                return e.enter("characterEscape"),
                e.enter("escapeMarker"),
                e.consume(t),
                e.exit("escapeMarker"),
                r
            }
            ;
            function r(r) {
                return m(r) ? (e.enter("characterEscapeValue"),
                e.consume(r),
                e.exit("characterEscapeValue"),
                e.exit("characterEscape"),
                t) : n(r)
            }
        }
    }
      , Q = document.createElement("i");
    function W(e) {
        let t = "&" + e + ";";
        Q.innerHTML = t;
        let n = Q.textContent;
        return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
    }
    let $ = {
        name: "characterReference",
        tokenize: function(e, t, n) {
            let r, i, o = this, l = 0;
            return function(t) {
                return e.enter("characterReference"),
                e.enter("characterReferenceMarker"),
                e.consume(t),
                e.exit("characterReferenceMarker"),
                s
            }
            ;
            function s(t) {
                return 35 === t ? (e.enter("characterReferenceMarkerNumeric"),
                e.consume(t),
                e.exit("characterReferenceMarkerNumeric"),
                u) : (e.enter("characterReferenceValue"),
                r = 31,
                i = a,
                c(t))
            }
            function u(t) {
                return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"),
                e.consume(t),
                e.exit("characterReferenceMarkerHexadecimal"),
                e.enter("characterReferenceValue"),
                r = 6,
                i = p,
                c) : (e.enter("characterReferenceValue"),
                r = 7,
                i = d,
                c(t))
            }
            function c(s) {
                if (59 === s && l) {
                    let r = e.exit("characterReferenceValue");
                    return i !== a || W(o.sliceSerialize(r)) ? (e.enter("characterReferenceMarker"),
                    e.consume(s),
                    e.exit("characterReferenceMarker"),
                    e.exit("characterReference"),
                    t) : n(s)
                }
                return i(s) && l++ < r ? (e.consume(s),
                c) : n(s)
            }
        }
    }
      , Z = {
        partial: !0,
        tokenize: function(e, t, n) {
            let r = this;
            return function(t) {
                return null === t ? n(t) : (e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                i)
            }
            ;
            function i(e) {
                return r.parser.lazy[r.now().line] ? n(e) : t(e)
            }
        }
    }
      , J = {
        concrete: !0,
        name: "codeFenced",
        tokenize: function(e, t, n) {
            let r, i = this, o = {
                partial: !0,
                tokenize: function(e, t, n) {
                    let o = 0;
                    return function(t) {
                        return e.enter("lineEnding"),
                        e.consume(t),
                        e.exit("lineEnding"),
                        l
                    }
                    ;
                    function l(t) {
                        return e.enter("codeFencedFence"),
                        x(t) ? w(e, u, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : u(t)
                    }
                    function u(t) {
                        return t === r ? (e.enter("codeFencedFenceSequence"),
                        function t(i) {
                            return i === r ? (o++,
                            e.consume(i),
                            t) : o >= s ? (e.exit("codeFencedFenceSequence"),
                            x(i) ? w(e, c, "whitespace")(i) : c(i)) : n(i)
                        }(t)) : n(t)
                    }
                    function c(r) {
                        return null === r || g(r) ? (e.exit("codeFencedFence"),
                        t(r)) : n(r)
                    }
                }
            }, l = 0, s = 0;
            return function(t) {
                var o;
                let c;
                return o = t,
                l = (c = i.events[i.events.length - 1]) && "linePrefix" === c[1].type ? c[2].sliceSerialize(c[1], !0).length : 0,
                r = o,
                e.enter("codeFenced"),
                e.enter("codeFencedFence"),
                e.enter("codeFencedFenceSequence"),
                function t(i) {
                    return i === r ? (s++,
                    e.consume(i),
                    t) : s < 3 ? n(i) : (e.exit("codeFencedFenceSequence"),
                    x(i) ? w(e, u, "whitespace")(i) : u(i))
                }(o)
            }
            ;
            function u(o) {
                return null === o || g(o) ? (e.exit("codeFencedFence"),
                i.interrupt ? t(o) : e.check(Z, a, p)(o)) : (e.enter("codeFencedFenceInfo"),
                e.enter("chunkString", {
                    contentType: "string"
                }),
                function t(i) {
                    return null === i || g(i) ? (e.exit("chunkString"),
                    e.exit("codeFencedFenceInfo"),
                    u(i)) : x(i) ? (e.exit("chunkString"),
                    e.exit("codeFencedFenceInfo"),
                    w(e, c, "whitespace")(i)) : 96 === i && i === r ? n(i) : (e.consume(i),
                    t)
                }(o))
            }
            function c(t) {
                return null === t || g(t) ? u(t) : (e.enter("codeFencedFenceMeta"),
                e.enter("chunkString", {
                    contentType: "string"
                }),
                function t(i) {
                    return null === i || g(i) ? (e.exit("chunkString"),
                    e.exit("codeFencedFenceMeta"),
                    u(i)) : 96 === i && i === r ? n(i) : (e.consume(i),
                    t)
                }(t))
            }
            function a(t) {
                return e.attempt(o, p, f)(t)
            }
            function f(t) {
                return e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                h
            }
            function h(t) {
                return l > 0 && x(t) ? w(e, d, "linePrefix", l + 1)(t) : d(t)
            }
            function d(t) {
                return null === t || g(t) ? e.check(Z, a, p)(t) : (e.enter("codeFlowValue"),
                function t(n) {
                    return null === n || g(n) ? (e.exit("codeFlowValue"),
                    d(n)) : (e.consume(n),
                    t)
                }(t))
            }
            function p(n) {
                return e.exit("codeFenced"),
                t(n)
            }
        }
    }
      , K = {
        name: "codeIndented",
        tokenize: function(e, t, n) {
            let r = this;
            return function(t) {
                return e.enter("codeIndented"),
                w(e, i, "linePrefix", 5)(t)
            }
            ;
            function i(t) {
                let i = r.events[r.events.length - 1];
                return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? function t(n) {
                    return null === n ? o(n) : g(n) ? e.attempt(G, t, o)(n) : (e.enter("codeFlowValue"),
                    function n(r) {
                        return null === r || g(r) ? (e.exit("codeFlowValue"),
                        t(r)) : (e.consume(r),
                        n)
                    }(n))
                }(t) : n(t)
            }
            function o(n) {
                return e.exit("codeIndented"),
                t(n)
            }
        }
    }
      , G = {
        partial: !0,
        tokenize: function(e, t, n) {
            let r = this;
            return i;
            function i(t) {
                return r.parser.lazy[r.now().line] ? n(t) : g(t) ? (e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                i) : w(e, o, "linePrefix", 5)(t)
            }
            function o(e) {
                let o = r.events[r.events.length - 1];
                return o && "linePrefix" === o[1].type && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(e) : g(e) ? i(e) : n(e)
            }
        }
    };
    function Y(e, t, n, r, i, o, l, s, u) {
        let c = u || 1 / 0
          , a = 0;
        return function(t) {
            return 60 === t ? (e.enter(r),
            e.enter(i),
            e.enter(o),
            e.consume(t),
            e.exit(o),
            f) : null === t || 32 === t || 41 === t || h(t) ? n(t) : (e.enter(r),
            e.enter(l),
            e.enter(s),
            e.enter("chunkString", {
                contentType: "string"
            }),
            m(t))
        }
        ;
        function f(n) {
            return 62 === n ? (e.enter(o),
            e.consume(n),
            e.exit(o),
            e.exit(i),
            e.exit(r),
            t) : (e.enter(s),
            e.enter("chunkString", {
                contentType: "string"
            }),
            d(n))
        }
        function d(t) {
            return 62 === t ? (e.exit("chunkString"),
            e.exit(s),
            f(t)) : null === t || 60 === t || g(t) ? n(t) : (e.consume(t),
            92 === t ? p : d)
        }
        function p(t) {
            return 60 === t || 62 === t || 92 === t ? (e.consume(t),
            d) : d(t)
        }
        function m(i) {
            return !a && (null === i || 41 === i || k(i)) ? (e.exit("chunkString"),
            e.exit(s),
            e.exit(l),
            e.exit(r),
            t(i)) : a < c && 40 === i ? (e.consume(i),
            a++,
            m) : 41 === i ? (e.consume(i),
            a--,
            m) : null === i || 32 === i || 40 === i || h(i) ? n(i) : (e.consume(i),
            92 === i ? x : m)
        }
        function x(t) {
            return 40 === t || 41 === t || 92 === t ? (e.consume(t),
            m) : m(t)
        }
    }
    function X(e, t, n, r, i, o) {
        let l, s = this, u = 0;
        return function(t) {
            return e.enter(r),
            e.enter(i),
            e.consume(t),
            e.exit(i),
            e.enter(o),
            c
        }
        ;
        function c(f) {
            return u > 999 || null === f || 91 === f || 93 === f && !l || 94 === f && !u && "_hiddenFootnoteSupport" in s.parser.constructs ? n(f) : 93 === f ? (e.exit(o),
            e.enter(i),
            e.consume(f),
            e.exit(i),
            e.exit(r),
            t) : g(f) ? (e.enter("lineEnding"),
            e.consume(f),
            e.exit("lineEnding"),
            c) : (e.enter("chunkString", {
                contentType: "string"
            }),
            a(f))
        }
        function a(t) {
            return null === t || 91 === t || 93 === t || g(t) || u++ > 999 ? (e.exit("chunkString"),
            c(t)) : (e.consume(t),
            l || (l = !x(t)),
            92 === t ? f : a)
        }
        function f(t) {
            return 91 === t || 92 === t || 93 === t ? (e.consume(t),
            u++,
            a) : a(t)
        }
    }
    function ee(e, t, n, r, i, o) {
        let l;
        return function(t) {
            return 34 === t || 39 === t || 40 === t ? (e.enter(r),
            e.enter(i),
            e.consume(t),
            e.exit(i),
            l = 40 === t ? 41 : t,
            s) : n(t)
        }
        ;
        function s(n) {
            return n === l ? (e.enter(i),
            e.consume(n),
            e.exit(i),
            e.exit(r),
            t) : (e.enter(o),
            u(n))
        }
        function u(t) {
            return t === l ? (e.exit(o),
            s(l)) : null === t ? n(t) : g(t) ? (e.enter("lineEnding"),
            e.consume(t),
            e.exit("lineEnding"),
            w(e, u, "linePrefix")) : (e.enter("chunkString", {
                contentType: "string"
            }),
            c(t))
        }
        function c(t) {
            return t === l || null === t || g(t) ? (e.exit("chunkString"),
            u(t)) : (e.consume(t),
            92 === t ? a : c)
        }
        function a(t) {
            return t === l || 92 === t ? (e.consume(t),
            c) : c(t)
        }
    }
    function et(e, t) {
        let n;
        return function r(i) {
            return g(i) ? (e.enter("lineEnding"),
            e.consume(i),
            e.exit("lineEnding"),
            n = !0,
            r) : x(i) ? w(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
        }
    }
    function en(e) {
        return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
    }
    let er = {
        partial: !0,
        tokenize: function(e, t, n) {
            return function(t) {
                return k(t) ? et(e, r)(t) : n(t)
            }
            ;
            function r(t) {
                return ee(e, i, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t)
            }
            function i(t) {
                return x(t) ? w(e, o, "whitespace")(t) : o(t)
            }
            function o(e) {
                return null === e || g(e) ? t(e) : n(e)
            }
        }
    }
      , ei = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
      , eo = ["pre", "script", "style", "textarea"]
      , el = {
        partial: !0,
        tokenize: function(e, t, n) {
            return function(r) {
                return e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                e.attempt(T, t, n)
            }
        }
    }
      , es = {
        partial: !0,
        tokenize: function(e, t, n) {
            let r = this;
            return function(t) {
                return g(t) ? (e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                i) : n(t)
            }
            ;
            function i(e) {
                return r.parser.lazy[r.now().line] ? n(e) : t(e)
            }
        }
    }
      , eu = {
        name: "labelEnd",
        resolveAll: function(e) {
            let t = -1
              , n = [];
            for (; ++t < e.length; ) {
                let r = e[t][1];
                if (n.push(e[t]),
                "labelImage" === r.type || "labelLink" === r.type || "labelEnd" === r.type) {
                    let e = "labelImage" === r.type ? 4 : 2;
                    r.type = "data",
                    t += e
                }
            }
            return e.length !== n.length && o(e, 0, e.length, n),
            e
        },
        resolveTo: function(e, t) {
            let n, r, i, s, u = e.length, c = 0;
            for (; u--; )
                if (n = e[u][1],
                r) {
                    if ("link" === n.type || "labelLink" === n.type && n._inactive)
                        break;
                    "enter" === e[u][0] && "labelLink" === n.type && (n._inactive = !0)
                } else if (i) {
                    if ("enter" === e[u][0] && ("labelImage" === n.type || "labelLink" === n.type) && !n._balanced && (r = u,
                    "labelLink" !== n.type)) {
                        c = 2;
                        break
                    }
                } else
                    "labelEnd" === n.type && (i = u);
            let a = {
                type: "labelLink" === e[r][1].type ? "link" : "image",
                start: {
                    ...e[r][1].start
                },
                end: {
                    ...e[e.length - 1][1].end
                }
            }
              , f = {
                type: "label",
                start: {
                    ...e[r][1].start
                },
                end: {
                    ...e[i][1].end
                }
            }
              , h = {
                type: "labelText",
                start: {
                    ...e[r + c + 2][1].end
                },
                end: {
                    ...e[i - 2][1].start
                }
            };
            return s = l(s = [["enter", a, t], ["enter", f, t]], e.slice(r + 1, r + c + 3)),
            s = l(s, [["enter", h, t]]),
            s = l(s, B(t.parser.constructs.insideSpan.null, e.slice(r + c + 4, i - 3), t)),
            s = l(s, [["exit", h, t], e[i - 2], e[i - 1], ["exit", f, t]]),
            s = l(s, e.slice(i + 1)),
            s = l(s, [["exit", a, t]]),
            o(e, r, e.length, s),
            e
        },
        tokenize: function(e, t, n) {
            let r, i, o = this, l = o.events.length;
            for (; l--; )
                if (("labelImage" === o.events[l][1].type || "labelLink" === o.events[l][1].type) && !o.events[l][1]._balanced) {
                    r = o.events[l][1];
                    break
                }
            return function(t) {
                return r ? r._inactive ? a(t) : (i = o.parser.defined.includes(en(o.sliceSerialize({
                    start: r.end,
                    end: o.now()
                }))),
                e.enter("labelEnd"),
                e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelEnd"),
                s) : n(t)
            }
            ;
            function s(t) {
                return 40 === t ? e.attempt(ec, c, i ? c : a)(t) : 91 === t ? e.attempt(ea, c, i ? u : a)(t) : i ? c(t) : a(t)
            }
            function u(t) {
                return e.attempt(ef, c, a)(t)
            }
            function c(e) {
                return t(e)
            }
            function a(e) {
                return r._balanced = !0,
                n(e)
            }
        }
    }
      , ec = {
        tokenize: function(e, t, n) {
            return function(t) {
                return e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(t),
                e.exit("resourceMarker"),
                r
            }
            ;
            function r(t) {
                return k(t) ? et(e, i)(t) : i(t)
            }
            function i(t) {
                return 41 === t ? c(t) : Y(e, o, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t)
            }
            function o(t) {
                return k(t) ? et(e, s)(t) : c(t)
            }
            function l(e) {
                return n(e)
            }
            function s(t) {
                return 34 === t || 39 === t || 40 === t ? ee(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : c(t)
            }
            function u(t) {
                return k(t) ? et(e, c)(t) : c(t)
            }
            function c(r) {
                return 41 === r ? (e.enter("resourceMarker"),
                e.consume(r),
                e.exit("resourceMarker"),
                e.exit("resource"),
                t) : n(r)
            }
        }
    }
      , ea = {
        tokenize: function(e, t, n) {
            let r = this;
            return function(t) {
                return X.call(r, e, i, o, "reference", "referenceMarker", "referenceString")(t)
            }
            ;
            function i(e) {
                return r.parser.defined.includes(en(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e)
            }
            function o(e) {
                return n(e)
            }
        }
    }
      , ef = {
        tokenize: function(e, t, n) {
            return function(t) {
                return e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(t),
                e.exit("referenceMarker"),
                r
            }
            ;
            function r(r) {
                return 93 === r ? (e.enter("referenceMarker"),
                e.consume(r),
                e.exit("referenceMarker"),
                e.exit("reference"),
                t) : n(r)
            }
        }
    }
      , eh = {
        name: "labelStartImage",
        resolveAll: eu.resolveAll,
        tokenize: function(e, t, n) {
            let r = this;
            return function(t) {
                return e.enter("labelImage"),
                e.enter("labelImageMarker"),
                e.consume(t),
                e.exit("labelImageMarker"),
                i
            }
            ;
            function i(t) {
                return 91 === t ? (e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelImage"),
                o) : n(t)
            }
            function o(e) {
                return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
            }
        }
    }
      , ed = {
        name: "labelStartLink",
        resolveAll: eu.resolveAll,
        tokenize: function(e, t, n) {
            let r = this;
            return function(t) {
                return e.enter("labelLink"),
                e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelLink"),
                i
            }
            ;
            function i(e) {
                return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
            }
        }
    }
      , ep = {
        name: "lineEnding",
        tokenize: function(e, t) {
            return function(n) {
                return e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                w(e, t, "linePrefix")
            }
        }
    }
      , em = {
        name: "thematicBreak",
        tokenize: function(e, t, n) {
            let r, i = 0;
            return function(o) {
                var l;
                return e.enter("thematicBreak"),
                r = l = o,
                function o(l) {
                    return l === r ? (e.enter("thematicBreakSequence"),
                    function t(n) {
                        return n === r ? (e.consume(n),
                        i++,
                        t) : (e.exit("thematicBreakSequence"),
                        x(n) ? w(e, o, "whitespace")(n) : o(n))
                    }(l)) : i >= 3 && (null === l || g(l)) ? (e.exit("thematicBreak"),
                    t(l)) : n(l)
                }(l)
            }
        }
    }
      , eg = {
        continuation: {
            tokenize: function(e, t, n) {
                let r = this;
                return r.containerState._closeFlow = void 0,
                e.check(T, function(n) {
                    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine,
                    w(e, t, "listItemIndent", r.containerState.size + 1)(n)
                }, function(n) {
                    return r.containerState.furtherBlankLines || !x(n) ? (r.containerState.furtherBlankLines = void 0,
                    r.containerState.initialBlankLine = void 0,
                    i(n)) : (r.containerState.furtherBlankLines = void 0,
                    r.containerState.initialBlankLine = void 0,
                    e.attempt(ex, t, i)(n))
                });
                function i(i) {
                    return r.containerState._closeFlow = !0,
                    r.interrupt = void 0,
                    w(e, e.attempt(eg, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i)
                }
            }
        },
        exit: function(e) {
            e.exit(this.containerState.type)
        },
        name: "list",
        tokenize: function(e, t, n) {
            let r = this
              , i = r.events[r.events.length - 1]
              , o = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(i[1], !0).length : 0
              , l = 0;
            return function(t) {
                let i = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                if ("listUnordered" === i ? !r.containerState.marker || t === r.containerState.marker : d(t)) {
                    if (r.containerState.type || (r.containerState.type = i,
                    e.enter(i, {
                        _container: !0
                    })),
                    "listUnordered" === i)
                        return e.enter("listItemPrefix"),
                        42 === t || 45 === t ? e.check(em, n, s)(t) : s(t);
                    if (!r.interrupt || 49 === t)
                        return e.enter("listItemPrefix"),
                        e.enter("listItemValue"),
                        function t(i) {
                            return d(i) && ++l < 10 ? (e.consume(i),
                            t) : (!r.interrupt || l < 2) && (r.containerState.marker ? i === r.containerState.marker : 41 === i || 46 === i) ? (e.exit("listItemValue"),
                            s(i)) : n(i)
                        }(t)
                }
                return n(t)
            }
            ;
            function s(t) {
                return e.enter("listItemMarker"),
                e.consume(t),
                e.exit("listItemMarker"),
                r.containerState.marker = r.containerState.marker || t,
                e.check(T, r.interrupt ? n : u, e.attempt(ek, a, c))
            }
            function u(e) {
                return r.containerState.initialBlankLine = !0,
                o++,
                a(e)
            }
            function c(t) {
                return x(t) ? (e.enter("listItemPrefixWhitespace"),
                e.consume(t),
                e.exit("listItemPrefixWhitespace"),
                a) : n(t)
            }
            function a(n) {
                return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length,
                t(n)
            }
        }
    }
      , ek = {
        partial: !0,
        tokenize: function(e, t, n) {
            let r = this;
            return w(e, function(e) {
                let i = r.events[r.events.length - 1];
                return !x(e) && i && "listItemPrefixWhitespace" === i[1].type ? t(e) : n(e)
            }, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
        }
    }
      , ex = {
        partial: !0,
        tokenize: function(e, t, n) {
            let r = this;
            return w(e, function(e) {
                let i = r.events[r.events.length - 1];
                return i && "listItemIndent" === i[1].type && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e)
            }, "listItemIndent", r.containerState.size + 1)
        }
    }
      , ey = {
        name: "setextUnderline",
        resolveTo: function(e, t) {
            let n, r, i, o = e.length;
            for (; o--; )
                if ("enter" === e[o][0]) {
                    if ("content" === e[o][1].type) {
                        n = o;
                        break
                    }
                    "paragraph" === e[o][1].type && (r = o)
                } else
                    "content" === e[o][1].type && e.splice(o, 1),
                    i || "definition" !== e[o][1].type || (i = o);
            let l = {
                type: "setextHeading",
                start: {
                    ...e[n][1].start
                },
                end: {
                    ...e[e.length - 1][1].end
                }
            };
            return e[r][1].type = "setextHeadingText",
            i ? (e.splice(r, 0, ["enter", l, t]),
            e.splice(i + 1, 0, ["exit", e[n][1], t]),
            e[n][1].end = {
                ...e[i][1].end
            }) : e[n][1] = l,
            e.push(["exit", l, t]),
            e
        },
        tokenize: function(e, t, n) {
            let r, i = this;
            return function(t) {
                var l;
                let s, u = i.events.length;
                for (; u--; )
                    if ("lineEnding" !== i.events[u][1].type && "linePrefix" !== i.events[u][1].type && "content" !== i.events[u][1].type) {
                        s = "paragraph" === i.events[u][1].type;
                        break
                    }
                return !i.parser.lazy[i.now().line] && (i.interrupt || s) ? (e.enter("setextHeadingLine"),
                r = t,
                l = t,
                e.enter("setextHeadingLineSequence"),
                function t(n) {
                    return n === r ? (e.consume(n),
                    t) : (e.exit("setextHeadingLineSequence"),
                    x(n) ? w(e, o, "lineSuffix")(n) : o(n))
                }(l)) : n(t)
            }
            ;
            function o(r) {
                return null === r || g(r) ? (e.exit("setextHeadingLine"),
                t(r)) : n(r)
            }
        }
    };
    e.s(["attentionMarkers", 0, {
        null: [42, 95]
    }, "contentInitial", 0, {
        91: {
            name: "definition",
            tokenize: function(e, t, n) {
                let r, i = this;
                return function(t) {
                    var r;
                    return e.enter("definition"),
                    r = t,
                    X.call(i, e, o, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(r)
                }
                ;
                function o(t) {
                    return (r = en(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)),
                    58 === t) ? (e.enter("definitionMarker"),
                    e.consume(t),
                    e.exit("definitionMarker"),
                    l) : n(t)
                }
                function l(t) {
                    return k(t) ? et(e, s)(t) : s(t)
                }
                function s(t) {
                    return Y(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t)
                }
                function u(t) {
                    return e.attempt(er, c, c)(t)
                }
                function c(t) {
                    return x(t) ? w(e, a, "whitespace")(t) : a(t)
                }
                function a(o) {
                    return null === o || g(o) ? (e.exit("definition"),
                    i.parser.defined.push(r),
                    t(o)) : n(o)
                }
            }
        }
    }, "disable", 0, {
        null: []
    }, "document", 0, {
        42: eg,
        43: eg,
        45: eg,
        48: eg,
        49: eg,
        50: eg,
        51: eg,
        52: eg,
        53: eg,
        54: eg,
        55: eg,
        56: eg,
        57: eg,
        62: U
    }, "flow", 0, {
        35: {
            name: "headingAtx",
            resolve: function(e, t) {
                let n, r, i = e.length - 2, l = 3;
                return "whitespace" === e[3][1].type && (l += 2),
                i - 2 > l && "whitespace" === e[i][1].type && (i -= 2),
                "atxHeadingSequence" === e[i][1].type && (l === i - 1 || i - 4 > l && "whitespace" === e[i - 2][1].type) && (i -= l + 1 === i ? 2 : 4),
                i > l && (n = {
                    type: "atxHeadingText",
                    start: e[l][1].start,
                    end: e[i][1].end
                },
                r = {
                    type: "chunkText",
                    start: e[l][1].start,
                    end: e[i][1].end,
                    contentType: "text"
                },
                o(e, l, i - l + 1, [["enter", n, t], ["enter", r, t], ["exit", r, t], ["exit", n, t]])),
                e
            },
            tokenize: function(e, t, n) {
                let r = 0;
                return function(i) {
                    var o;
                    return e.enter("atxHeading"),
                    o = i,
                    e.enter("atxHeadingSequence"),
                    function i(o) {
                        return 35 === o && r++ < 6 ? (e.consume(o),
                        i) : null === o || k(o) ? (e.exit("atxHeadingSequence"),
                        function n(r) {
                            return 35 === r ? (e.enter("atxHeadingSequence"),
                            function t(r) {
                                return 35 === r ? (e.consume(r),
                                t) : (e.exit("atxHeadingSequence"),
                                n(r))
                            }(r)) : null === r || g(r) ? (e.exit("atxHeading"),
                            t(r)) : x(r) ? w(e, n, "whitespace")(r) : (e.enter("atxHeadingText"),
                            function t(r) {
                                return null === r || 35 === r || k(r) ? (e.exit("atxHeadingText"),
                                n(r)) : (e.consume(r),
                                t)
                            }(r))
                        }(o)) : n(o)
                    }(o)
                }
            }
        },
        42: em,
        45: [ey, em],
        60: {
            concrete: !0,
            name: "htmlFlow",
            resolveTo: function(e) {
                let t = e.length;
                for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type); )
                    ;
                return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start,
                e[t + 1][1].start = e[t - 2][1].start,
                e.splice(t - 2, 2)),
                e
            },
            tokenize: function(e, t, n) {
                let r, i, o, l, s, u = this;
                return function(t) {
                    var n;
                    return n = t,
                    e.enter("htmlFlow"),
                    e.enter("htmlFlowData"),
                    e.consume(n),
                    f
                }
                ;
                function f(l) {
                    return 33 === l ? (e.consume(l),
                    h) : 47 === l ? (e.consume(l),
                    i = !0,
                    m) : 63 === l ? (e.consume(l),
                    r = 3,
                    u.interrupt ? t : R) : c(l) ? (e.consume(l),
                    o = String.fromCharCode(l),
                    y) : n(l)
                }
                function h(i) {
                    return 45 === i ? (e.consume(i),
                    r = 2,
                    d) : 91 === i ? (e.consume(i),
                    r = 5,
                    l = 0,
                    p) : c(i) ? (e.consume(i),
                    r = 4,
                    u.interrupt ? t : R) : n(i)
                }
                function d(r) {
                    return 45 === r ? (e.consume(r),
                    u.interrupt ? t : R) : n(r)
                }
                function p(r) {
                    let i = "CDATA[";
                    return r === i.charCodeAt(l++) ? (e.consume(r),
                    l === i.length) ? u.interrupt ? t : z : p : n(r)
                }
                function m(t) {
                    return c(t) ? (e.consume(t),
                    o = String.fromCharCode(t),
                    y) : n(t)
                }
                function y(l) {
                    if (null === l || 47 === l || 62 === l || k(l)) {
                        let s = 47 === l
                          , c = o.toLowerCase();
                        return !s && !i && eo.includes(c) ? (r = 1,
                        u.interrupt ? t(l) : z(l)) : ei.includes(o.toLowerCase()) ? (r = 6,
                        s) ? (e.consume(l),
                        b) : u.interrupt ? t(l) : z(l) : (r = 7,
                        u.interrupt && !u.parser.lazy[u.now().line] ? n(l) : i ? function t(n) {
                            return x(n) ? (e.consume(n),
                            t) : F(n)
                        }(l) : v(l))
                    }
                    return 45 === l || a(l) ? (e.consume(l),
                    o += String.fromCharCode(l),
                    y) : n(l)
                }
                function b(r) {
                    return 62 === r ? (e.consume(r),
                    u.interrupt ? t : z) : n(r)
                }
                function v(t) {
                    return 47 === t ? (e.consume(t),
                    F) : 58 === t || 95 === t || c(t) ? (e.consume(t),
                    w) : x(t) ? (e.consume(t),
                    v) : F(t)
                }
                function w(t) {
                    return 45 === t || 46 === t || 58 === t || 95 === t || a(t) ? (e.consume(t),
                    w) : S(t)
                }
                function S(t) {
                    return 61 === t ? (e.consume(t),
                    C) : x(t) ? (e.consume(t),
                    S) : v(t)
                }
                function C(t) {
                    return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t),
                    s = t,
                    E) : x(t) ? (e.consume(t),
                    C) : function t(n) {
                        return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || k(n) ? S(n) : (e.consume(n),
                        t)
                    }(t)
                }
                function E(t) {
                    return t === s ? (e.consume(t),
                    s = null,
                    T) : null === t || g(t) ? n(t) : (e.consume(t),
                    E)
                }
                function T(e) {
                    return 47 === e || 62 === e || x(e) ? v(e) : n(e)
                }
                function F(t) {
                    return 62 === t ? (e.consume(t),
                    I) : n(t)
                }
                function I(t) {
                    return null === t || g(t) ? z(t) : x(t) ? (e.consume(t),
                    I) : n(t)
                }
                function z(t) {
                    return 45 === t && 2 === r ? (e.consume(t),
                    _) : 60 === t && 1 === r ? (e.consume(t),
                    D) : 62 === t && 4 === r ? (e.consume(t),
                    O) : 63 === t && 3 === r ? (e.consume(t),
                    R) : 93 === t && 5 === r ? (e.consume(t),
                    j) : g(t) && (6 === r || 7 === r) ? (e.exit("htmlFlowData"),
                    e.check(el, H, A)(t)) : null === t || g(t) ? (e.exit("htmlFlowData"),
                    A(t)) : (e.consume(t),
                    z)
                }
                function A(t) {
                    return e.check(es, L, H)(t)
                }
                function L(t) {
                    return e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    P
                }
                function P(t) {
                    return null === t || g(t) ? A(t) : (e.enter("htmlFlowData"),
                    z(t))
                }
                function _(t) {
                    return 45 === t ? (e.consume(t),
                    R) : z(t)
                }
                function D(t) {
                    return 47 === t ? (e.consume(t),
                    o = "",
                    M) : z(t)
                }
                function M(t) {
                    if (62 === t) {
                        let n = o.toLowerCase();
                        return eo.includes(n) ? (e.consume(t),
                        O) : z(t)
                    }
                    return c(t) && o.length < 8 ? (e.consume(t),
                    o += String.fromCharCode(t),
                    M) : z(t)
                }
                function j(t) {
                    return 93 === t ? (e.consume(t),
                    R) : z(t)
                }
                function R(t) {
                    return 62 === t ? (e.consume(t),
                    O) : 45 === t && 2 === r ? (e.consume(t),
                    R) : z(t)
                }
                function O(t) {
                    return null === t || g(t) ? (e.exit("htmlFlowData"),
                    H(t)) : (e.consume(t),
                    O)
                }
                function H(n) {
                    return e.exit("htmlFlow"),
                    t(n)
                }
            }
        },
        61: ey,
        95: em,
        96: J,
        126: J
    }, "flowInitial", 0, {
        [-2]: K,
        [-1]: K,
        32: K
    }, "insideSpan", 0, {
        null: [q, _]
    }, "string", 0, {
        38: $,
        92: N
    }, "text", 0, {
        [-5]: ep,
        [-4]: ep,
        [-3]: ep,
        33: eh,
        38: $,
        42: q,
        60: [{
            name: "autolink",
            tokenize: function(e, t, n) {
                let r = 0;
                return function(t) {
                    return e.enter("autolink"),
                    e.enter("autolinkMarker"),
                    e.consume(t),
                    e.exit("autolinkMarker"),
                    e.enter("autolinkProtocol"),
                    i
                }
                ;
                function i(t) {
                    return c(t) ? (e.consume(t),
                    o) : 64 === t ? n(t) : s(t)
                }
                function o(t) {
                    return 43 === t || 45 === t || 46 === t || a(t) ? (r = 1,
                    function t(n) {
                        return 58 === n ? (e.consume(n),
                        r = 0,
                        l) : (43 === n || 45 === n || 46 === n || a(n)) && r++ < 32 ? (e.consume(n),
                        t) : (r = 0,
                        s(n))
                    }(t)) : s(t)
                }
                function l(r) {
                    return 62 === r ? (e.exit("autolinkProtocol"),
                    e.enter("autolinkMarker"),
                    e.consume(r),
                    e.exit("autolinkMarker"),
                    e.exit("autolink"),
                    t) : null === r || 32 === r || 60 === r || h(r) ? n(r) : (e.consume(r),
                    l)
                }
                function s(t) {
                    return 64 === t ? (e.consume(t),
                    u) : f(t) ? (e.consume(t),
                    s) : n(t)
                }
                function u(i) {
                    return a(i) ? function i(o) {
                        return 46 === o ? (e.consume(o),
                        r = 0,
                        u) : 62 === o ? (e.exit("autolinkProtocol").type = "autolinkEmail",
                        e.enter("autolinkMarker"),
                        e.consume(o),
                        e.exit("autolinkMarker"),
                        e.exit("autolink"),
                        t) : function t(o) {
                            if ((45 === o || a(o)) && r++ < 63) {
                                let n = 45 === o ? t : i;
                                return e.consume(o),
                                n
                            }
                            return n(o)
                        }(o)
                    }(i) : n(i)
                }
            }
        }, {
            name: "htmlText",
            tokenize: function(e, t, n) {
                let r, i, o, l = this;
                return function(t) {
                    return e.enter("htmlText"),
                    e.enter("htmlTextData"),
                    e.consume(t),
                    s
                }
                ;
                function s(t) {
                    return 33 === t ? (e.consume(t),
                    u) : 47 === t ? (e.consume(t),
                    T) : 63 === t ? (e.consume(t),
                    C) : c(t) ? (e.consume(t),
                    I) : n(t)
                }
                function u(t) {
                    return 45 === t ? (e.consume(t),
                    f) : 91 === t ? (e.consume(t),
                    i = 0,
                    m) : c(t) ? (e.consume(t),
                    S) : n(t)
                }
                function f(t) {
                    return 45 === t ? (e.consume(t),
                    p) : n(t)
                }
                function h(t) {
                    return null === t ? n(t) : 45 === t ? (e.consume(t),
                    d) : g(t) ? (o = h,
                    j(t)) : (e.consume(t),
                    h)
                }
                function d(t) {
                    return 45 === t ? (e.consume(t),
                    p) : h(t)
                }
                function p(e) {
                    return 62 === e ? M(e) : 45 === e ? d(e) : h(e)
                }
                function m(t) {
                    let r = "CDATA[";
                    return t === r.charCodeAt(i++) ? (e.consume(t),
                    i === r.length ? y : m) : n(t)
                }
                function y(t) {
                    return null === t ? n(t) : 93 === t ? (e.consume(t),
                    b) : g(t) ? (o = y,
                    j(t)) : (e.consume(t),
                    y)
                }
                function b(t) {
                    return 93 === t ? (e.consume(t),
                    v) : y(t)
                }
                function v(t) {
                    return 62 === t ? M(t) : 93 === t ? (e.consume(t),
                    v) : y(t)
                }
                function S(t) {
                    return null === t || 62 === t ? M(t) : g(t) ? (o = S,
                    j(t)) : (e.consume(t),
                    S)
                }
                function C(t) {
                    return null === t ? n(t) : 63 === t ? (e.consume(t),
                    E) : g(t) ? (o = C,
                    j(t)) : (e.consume(t),
                    C)
                }
                function E(e) {
                    return 62 === e ? M(e) : C(e)
                }
                function T(t) {
                    return c(t) ? (e.consume(t),
                    F) : n(t)
                }
                function F(t) {
                    return 45 === t || a(t) ? (e.consume(t),
                    F) : function t(n) {
                        return g(n) ? (o = t,
                        j(n)) : x(n) ? (e.consume(n),
                        t) : M(n)
                    }(t)
                }
                function I(t) {
                    return 45 === t || a(t) ? (e.consume(t),
                    I) : 47 === t || 62 === t || k(t) ? z(t) : n(t)
                }
                function z(t) {
                    return 47 === t ? (e.consume(t),
                    M) : 58 === t || 95 === t || c(t) ? (e.consume(t),
                    A) : g(t) ? (o = z,
                    j(t)) : x(t) ? (e.consume(t),
                    z) : M(t)
                }
                function A(t) {
                    return 45 === t || 46 === t || 58 === t || 95 === t || a(t) ? (e.consume(t),
                    A) : function t(n) {
                        return 61 === n ? (e.consume(n),
                        L) : g(n) ? (o = t,
                        j(n)) : x(n) ? (e.consume(n),
                        t) : z(n)
                    }(t)
                }
                function L(t) {
                    return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t),
                    r = t,
                    P) : g(t) ? (o = L,
                    j(t)) : x(t) ? (e.consume(t),
                    L) : (e.consume(t),
                    _)
                }
                function P(t) {
                    return t === r ? (e.consume(t),
                    r = void 0,
                    D) : null === t ? n(t) : g(t) ? (o = P,
                    j(t)) : (e.consume(t),
                    P)
                }
                function _(t) {
                    return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 47 === t || 62 === t || k(t) ? z(t) : (e.consume(t),
                    _)
                }
                function D(e) {
                    return 47 === e || 62 === e || k(e) ? z(e) : n(e)
                }
                function M(r) {
                    return 62 === r ? (e.consume(r),
                    e.exit("htmlTextData"),
                    e.exit("htmlText"),
                    t) : n(r)
                }
                function j(t) {
                    return e.exit("htmlTextData"),
                    e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    R
                }
                function R(t) {
                    return x(t) ? w(e, O, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : O(t)
                }
                function O(t) {
                    return e.enter("htmlTextData"),
                    o(t)
                }
            }
        }],
        91: ed,
        92: [{
            name: "hardBreakEscape",
            tokenize: function(e, t, n) {
                return function(t) {
                    return e.enter("hardBreakEscape"),
                    e.consume(t),
                    r
                }
                ;
                function r(r) {
                    return g(r) ? (e.exit("hardBreakEscape"),
                    t(r)) : n(r)
                }
            }
        }, N],
        93: eu,
        95: q,
        96: {
            name: "codeText",
            previous: function(e) {
                return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
            },
            resolve: function(e) {
                let t, n, r = e.length - 4, i = 3;
                if (("lineEnding" === e[3][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type)) {
                    for (t = i; ++t < r; )
                        if ("codeTextData" === e[t][1].type) {
                            e[i][1].type = "codeTextPadding",
                            e[r][1].type = "codeTextPadding",
                            i += 2,
                            r -= 2;
                            break
                        }
                }
                for (t = i - 1,
                r++; ++t <= r; )
                    void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : (t === r || "lineEnding" === e[t][1].type) && (e[n][1].type = "codeTextData",
                    t !== n + 2 && (e[n][1].end = e[t - 1][1].end,
                    e.splice(n + 2, t - n - 2),
                    r -= t - n - 2,
                    t = n + 2),
                    n = void 0);
                return e
            },
            tokenize: function(e, t, n) {
                let r, i, o = 0;
                return function(t) {
                    return e.enter("codeText"),
                    e.enter("codeTextSequence"),
                    function t(n) {
                        return 96 === n ? (e.consume(n),
                        o++,
                        t) : (e.exit("codeTextSequence"),
                        l(n))
                    }(t)
                }
                ;
                function l(u) {
                    return null === u ? n(u) : 32 === u ? (e.enter("space"),
                    e.consume(u),
                    e.exit("space"),
                    l) : 96 === u ? (i = e.enter("codeTextSequence"),
                    r = 0,
                    function n(l) {
                        return 96 === l ? (e.consume(l),
                        r++,
                        n) : r === o ? (e.exit("codeTextSequence"),
                        e.exit("codeText"),
                        t(l)) : (i.type = "codeTextData",
                        s(l))
                    }(u)) : g(u) ? (e.enter("lineEnding"),
                    e.consume(u),
                    e.exit("lineEnding"),
                    l) : (e.enter("codeTextData"),
                    s(u))
                }
                function s(t) {
                    return null === t || 32 === t || 96 === t || g(t) ? (e.exit("codeTextData"),
                    l(t)) : (e.consume(t),
                    s)
                }
            }
        }
    }], 304127);
    var eb = e.i(304127);
    let ev = /[\0\t\n\r]/g;
    function ew(e, t) {
        let n = Number.parseInt(e, t);
        return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n)
    }
    let eS = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
    function eC(e, t, n) {
        if (t)
            return t;
        if (35 === n.charCodeAt(0)) {
            let e = n.charCodeAt(1)
              , t = 120 === e || 88 === e;
            return ew(n.slice(t ? 2 : 1), t ? 16 : 10)
        }
        return W(n) || e
    }
    var eE = e.i(834425);
    let eT = {}.hasOwnProperty;
    function eF(e) {
        return {
            line: e.line,
            column: e.column,
            offset: e.offset
        }
    }
    function eI(e, t) {
        if (e)
            throw Error("Cannot close `" + e.type + "` (" + (0,
            eE.stringifyPosition)({
                start: e.start,
                end: e.end
            }) + "): a different token (`" + t.type + "`, " + (0,
            eE.stringifyPosition)({
                start: t.start,
                end: t.end
            }) + ") is open");
        throw Error("Cannot close document, a token (`" + t.type + "`, " + (0,
        eE.stringifyPosition)({
            start: t.start,
            end: t.end
        }) + ") is still open")
    }
    function ez(e, t) {
        let n = String(e);
        if ("string" != typeof t)
            throw TypeError("Expected character");
        let r = 0
          , i = n.indexOf(t);
        for (; -1 !== i; )
            r++,
            i = n.indexOf(t, i + t.length);
        return r
    }
    var eA = e.i(420061);
    let eL = function(e) {
        var t, n;
        if (null == e)
            return e_;
        if ("function" == typeof e)
            return eP(e);
        if ("object" == typeof e) {
            return Array.isArray(e) ? function(e) {
                let t = []
                  , n = -1;
                for (; ++n < e.length; )
                    t[n] = eL(e[n]);
                return eP(function(...e) {
                    let n = -1;
                    for (; ++n < t.length; )
                        if (t[n].apply(this, e))
                            return !0;
                    return !1
                })
            }(e) : (t = e,
            eP(function(e) {
                let n;
                for (n in t)
                    if (e[n] !== t[n])
                        return !1;
                return !0
            }))
        }
        if ("string" == typeof e) {
            return n = e,
            eP(function(e) {
                return e && e.type === n
            })
        }
        throw Error("Expected function, string, or object as test")
    };
    function eP(e) {
        return function(t, n, r) {
            return !!(function(e) {
                return null !== e && "object" == typeof e && "type" in e
            }(t) && e.call(this, t, "number" == typeof n ? n : void 0, r || void 0))
        }
    }
    function e_() {
        return !0
    }
    let eD = []
      , eM = "phrasing"
      , ej = ["autolink", "link", "image", "label"];
    function eR(e) {
        this.enter({
            type: "link",
            title: null,
            url: "",
            children: []
        }, e)
    }
    function eO(e) {
        this.config.enter.autolinkProtocol.call(this, e)
    }
    function eH(e) {
        this.config.exit.autolinkProtocol.call(this, e)
    }
    function eB(e) {
        this.config.exit.data.call(this, e);
        let t = this.stack[this.stack.length - 1];
        (0,
        eA.ok)("link" === t.type),
        t.url = "http://" + this.sliceSerialize(e)
    }
    function eq(e) {
        this.config.exit.autolinkEmail.call(this, e)
    }
    function eV(e) {
        this.exit(e)
    }
    function eU(e) {
        !function(e, t, n) {
            let r = eL((n || {}).ignore || [])
              , i = function(e) {
                let t = [];
                if (!Array.isArray(e))
                    throw TypeError("Expected find and replace tuple or list of tuples");
                let n = !e[0] || Array.isArray(e[0]) ? e : [e]
                  , r = -1;
                for (; ++r < n.length; ) {
                    var i;
                    let e = n[r];
                    t.push(["string" == typeof (i = e[0]) ? RegExp(function(e) {
                        if ("string" != typeof e)
                            throw TypeError("Expected a string");
                        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
                    }(i), "g") : i, function(e) {
                        return "function" == typeof e ? e : function() {
                            return e
                        }
                    }(e[1])])
                }
                return t
            }(t)
              , o = -1;
            for (; ++o < i.length; )
                !function(e, t, n, r) {
                    let i;
                    "function" == typeof t && "function" != typeof n ? (r = n,
                    n = t) : i = t;
                    let o = eL(i)
                      , l = r ? -1 : 1;
                    (function e(i, s, u) {
                        let c = i && "object" == typeof i ? i : {};
                        if ("string" == typeof c.type) {
                            let e = "string" == typeof c.tagName ? c.tagName : "string" == typeof c.name ? c.name : void 0;
                            Object.defineProperty(a, "name", {
                                value: "node (" + i.type + (e ? "<" + e + ">" : "") + ")"
                            })
                        }
                        return a;
                        function a() {
                            var c;
                            let a, f, h, d = eD;
                            if ((!t || o(i, s, u[u.length - 1] || void 0)) && !1 === (d = Array.isArray(c = n(i, u)) ? c : "number" == typeof c ? [!0, c] : null == c ? eD : [c])[0])
                                return d;
                            if ("children" in i && i.children && i.children && "skip" !== d[0])
                                for (f = (r ? i.children.length : -1) + l,
                                h = u.concat(i); f > -1 && f < i.children.length; ) {
                                    if (!1 === (a = e(i.children[f], f, h)())[0])
                                        return a;
                                    f = "number" == typeof a[1] ? a[1] : f + l
                                }
                            return d
                        }
                    }
                    )(e, void 0, [])()
                }(e, "text", l);
            function l(e, t) {
                let n, l = -1;
                for (; ++l < t.length; ) {
                    let e = t[l]
                      , i = n ? n.children : void 0;
                    if (r(e, i ? i.indexOf(e) : void 0, n))
                        return;
                    n = e
                }
                if (n)
                    return function(e, t) {
                        let n = t[t.length - 1]
                          , r = i[o][0]
                          , l = i[o][1]
                          , s = 0
                          , u = n.children.indexOf(e)
                          , c = !1
                          , a = [];
                        r.lastIndex = 0;
                        let f = r.exec(e.value);
                        for (; f; ) {
                            let n = f.index
                              , i = {
                                index: f.index,
                                input: f.input,
                                stack: [...t, e]
                            }
                              , o = l(...f, i);
                            if ("string" == typeof o && (o = o.length > 0 ? {
                                type: "text",
                                value: o
                            } : void 0),
                            !1 === o ? r.lastIndex = n + 1 : (s !== n && a.push({
                                type: "text",
                                value: e.value.slice(s, n)
                            }),
                            Array.isArray(o) ? a.push(...o) : o && a.push(o),
                            s = n + f[0].length,
                            c = !0),
                            !r.global)
                                break;
                            f = r.exec(e.value)
                        }
                        return c ? (s < e.value.length && a.push({
                            type: "text",
                            value: e.value.slice(s)
                        }),
                        n.children.splice(u, 1, ...a)) : a = [e],
                        u + a.length
                    }(e, t)
            }
        }(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, eN], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, eQ]], {
            ignore: ["link", "linkReference"]
        })
    }
    function eN(e, t, n, r, i) {
        let o, l = "";
        if (!eW(i))
            return !1;
        if (/^w/i.test(t) && (n = t + n,
        t = "",
        l = "http://"),
        (o = n.split(".")).length < 2 || o[o.length - 1] && (/_/.test(o[o.length - 1]) || !/[a-zA-Z\d]/.test(o[o.length - 1])) || o[o.length - 2] && (/_/.test(o[o.length - 2]) || !/[a-zA-Z\d]/.test(o[o.length - 2])))
            return !1;
        let s = function(e) {
            let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
            if (!t)
                return [e, void 0];
            e = e.slice(0, t.index);
            let n = t[0]
              , r = n.indexOf(")")
              , i = ez(e, "(")
              , o = ez(e, ")");
            for (; -1 !== r && i > o; )
                e += n.slice(0, r + 1),
                r = (n = n.slice(r + 1)).indexOf(")"),
                o++;
            return [e, n]
        }(n + r);
        if (!s[0])
            return !1;
        let u = {
            type: "link",
            title: null,
            url: l + t + s[0],
            children: [{
                type: "text",
                value: t + s[0]
            }]
        };
        return s[1] ? [u, {
            type: "text",
            value: s[1]
        }] : u
    }
    function eQ(e, t, n, r) {
        return !(!eW(r, !0) || /[-\d_]$/.test(n)) && {
            type: "link",
            title: null,
            url: "mailto:" + t + "@" + n,
            children: [{
                type: "text",
                value: t + "@" + n
            }]
        }
    }
    function eW(e, t) {
        let n = e.input.charCodeAt(e.index - 1);
        return (0 === e.index || b(n) || y(n)) && (!t || 47 !== n)
    }
    function e$() {
        this.buffer()
    }
    function eZ(e) {
        this.enter({
            type: "footnoteReference",
            identifier: "",
            label: ""
        }, e)
    }
    function eJ() {
        this.buffer()
    }
    function eK(e) {
        this.enter({
            type: "footnoteDefinition",
            identifier: "",
            label: "",
            children: []
        }, e)
    }
    function eG(e) {
        let t = this.resume()
          , n = this.stack[this.stack.length - 1];
        (0,
        eA.ok)("footnoteReference" === n.type),
        n.identifier = en(this.sliceSerialize(e)).toLowerCase(),
        n.label = t
    }
    function eY(e) {
        this.exit(e)
    }
    function eX(e) {
        let t = this.resume()
          , n = this.stack[this.stack.length - 1];
        (0,
        eA.ok)("footnoteDefinition" === n.type),
        n.identifier = en(this.sliceSerialize(e)).toLowerCase(),
        n.label = t
    }
    function e1(e) {
        this.exit(e)
    }
    function e0(e, t, n, r) {
        let i = n.createTracker(r)
          , o = i.move("[^")
          , l = n.enter("footnoteReference")
          , s = n.enter("reference");
        return o += i.move(n.safe(n.associationId(e), {
            after: "]",
            before: o
        })),
        s(),
        l(),
        o += i.move("]")
    }
    function e2(e, t, n) {
        return 0 === t ? e : e4(e, t, n)
    }
    function e4(e, t, n) {
        return (n ? "" : "    ") + e
    }
    e0.peek = function() {
        return "["
    }
    ;
    let e9 = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"];
    function e3(e) {
        this.enter({
            type: "delete",
            children: []
        }, e)
    }
    function e6(e) {
        this.exit(e)
    }
    function e5(e, t, n, r) {
        let i = n.createTracker(r)
          , o = n.enter("strikethrough")
          , l = i.move("~~");
        return l += n.containerPhrasing(e, {
            ...i.current(),
            before: l,
            after: "~"
        }),
        l += i.move("~~"),
        o(),
        l
    }
    function e7(e) {
        return e.length
    }
    function e8(e) {
        let t = "string" == typeof e ? e.codePointAt(0) : 0;
        return 67 === t || 99 === t ? 99 : 76 === t || 108 === t ? 108 : 114 * (82 === t || 114 === t)
    }
    e5.peek = function() {
        return "~"
    }
    ;
    function te(e, t, n) {
        let r = e.value || ""
          , i = "`"
          , o = -1;
        for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
            i += "`";
        for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length; ) {
            let e, t = n.unsafe[o], i = n.compilePattern(t);
            if (t.atBreak)
                for (; e = i.exec(r); ) {
                    let t = e.index;
                    10 === r.charCodeAt(t) && 13 === r.charCodeAt(t - 1) && t--,
                    r = r.slice(0, t) + " " + r.slice(e.index + 1)
                }
        }
        return i + r + i
    }
    te.peek = function() {
        return "`"
    }
    ;
    eL(["break", "delete", "emphasis", "footnote", "footnoteReference", "image", "imageReference", "inlineCode", "inlineMath", "link", "linkReference", "mdxJsxTextElement", "mdxTextExpression", "strong", "text", "textDirective"]);
    let tt = function(e, t, n, r) {
        let i = function(e) {
            let t = e.options.listItemIndent || "one";
            if ("tab" !== t && "one" !== t && "mixed" !== t)
                throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
            return t
        }(n)
          , o = n.bulletCurrent || function(e) {
            let t = e.options.bullet || "*";
            if ("*" !== t && "+" !== t && "-" !== t)
                throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
            return t
        }(n);
        t && "list" === t.type && t.ordered && (o = ("number" == typeof t.start && t.start > -1 ? t.start : 1) + (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) + o);
        let l = o.length + 1;
        ("tab" === i || "mixed" === i && (t && "list" === t.type && t.spread || e.spread)) && (l = 4 * Math.ceil(l / 4));
        let s = n.createTracker(r);
        s.move(o + " ".repeat(l - o.length)),
        s.shift(l);
        let u = n.enter("listItem")
          , c = n.indentLines(n.containerFlow(e, s.current()), function(e, t, n) {
            return t ? (n ? "" : " ".repeat(l)) + e : (n ? o : o + " ".repeat(l - o.length)) + e
        });
        return u(),
        c
    };
    function tn(e) {
        let t = e._align;
        (0,
        eA.ok)(t, "expected `_align` on table"),
        this.enter({
            type: "table",
            align: t.map(function(e) {
                return "none" === e ? null : e
            }),
            children: []
        }, e),
        this.data.inTable = !0
    }
    function tr(e) {
        this.exit(e),
        this.data.inTable = void 0
    }
    function ti(e) {
        this.enter({
            type: "tableRow",
            children: []
        }, e)
    }
    function to(e) {
        this.exit(e)
    }
    function tl(e) {
        this.enter({
            type: "tableCell",
            children: []
        }, e)
    }
    function ts(e) {
        let t = this.resume();
        this.data.inTable && (t = t.replace(/\\([\\|])/g, tu));
        let n = this.stack[this.stack.length - 1];
        (0,
        eA.ok)("inlineCode" === n.type),
        n.value = t,
        this.exit(e)
    }
    function tu(e, t) {
        return "|" === t ? t : e
    }
    function tc(e) {
        let t = this.stack[this.stack.length - 2];
        (0,
        eA.ok)("listItem" === t.type),
        t.checked = "taskListCheckValueChecked" === e.type
    }
    function ta(e) {
        let t = this.stack[this.stack.length - 2];
        if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
            let e = this.stack[this.stack.length - 1];
            (0,
            eA.ok)("paragraph" === e.type);
            let n = e.children[0];
            if (n && "text" === n.type) {
                let r, i = t.children, o = -1;
                for (; ++o < i.length; ) {
                    let e = i[o];
                    if ("paragraph" === e.type) {
                        r = e;
                        break
                    }
                }
                r === e && (n.value = n.value.slice(1),
                0 === n.value.length ? e.children.shift() : e.position && n.position && "number" == typeof n.position.start.offset && (n.position.start.column++,
                n.position.start.offset++,
                e.position.start = Object.assign({}, n.position.start)))
            }
        }
        this.exit(e)
    }
    function tf(e, t, n, r) {
        let i = e.children[0]
          , o = "boolean" == typeof e.checked && i && "paragraph" === i.type
          , l = "[" + (e.checked ? "x" : " ") + "] "
          , s = n.createTracker(r);
        o && s.move(l);
        let u = tt(e, t, n, {
            ...r,
            ...s.current()
        });
        return o && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function(e) {
            return e + l
        })),
        u
    }
    let th = {
        tokenize: function(e, t, n) {
            let r = 0;
            return function t(o) {
                return (87 === o || 119 === o) && r < 3 ? (r++,
                e.consume(o),
                t) : 46 === o && 3 === r ? (e.consume(o),
                i) : n(o)
            }
            ;
            function i(e) {
                return null === e ? n(e) : t(e)
            }
        },
        partial: !0
    }
      , td = {
        tokenize: function(e, t, n) {
            let r, i, o;
            return l;
            function l(t) {
                return 46 === t || 95 === t ? e.check(tm, u, s)(t) : null === t || k(t) || b(t) || 45 !== t && y(t) ? u(t) : (o = !0,
                e.consume(t),
                l)
            }
            function s(t) {
                return 95 === t ? r = !0 : (i = r,
                r = void 0),
                e.consume(t),
                l
            }
            function u(e) {
                return i || r || !o ? n(e) : t(e)
            }
        },
        partial: !0
    }
      , tp = {
        tokenize: function(e, t) {
            let n = 0
              , r = 0;
            return i;
            function i(l) {
                return 40 === l ? (n++,
                e.consume(l),
                i) : 41 === l && r < n ? o(l) : 33 === l || 34 === l || 38 === l || 39 === l || 41 === l || 42 === l || 44 === l || 46 === l || 58 === l || 59 === l || 60 === l || 63 === l || 93 === l || 95 === l || 126 === l ? e.check(tm, t, o)(l) : null === l || k(l) || b(l) ? t(l) : (e.consume(l),
                i)
            }
            function o(t) {
                return 41 === t && r++,
                e.consume(t),
                i
            }
        },
        partial: !0
    }
      , tm = {
        tokenize: function(e, t, n) {
            return r;
            function r(l) {
                return 33 === l || 34 === l || 39 === l || 41 === l || 42 === l || 44 === l || 46 === l || 58 === l || 59 === l || 63 === l || 95 === l || 126 === l ? (e.consume(l),
                r) : 38 === l ? (e.consume(l),
                o) : 93 === l ? (e.consume(l),
                i) : 60 === l || null === l || k(l) || b(l) ? t(l) : n(l)
            }
            function i(e) {
                return null === e || 40 === e || 91 === e || k(e) || b(e) ? t(e) : r(e)
            }
            function o(t) {
                return c(t) ? function t(i) {
                    return 59 === i ? (e.consume(i),
                    r) : c(i) ? (e.consume(i),
                    t) : n(i)
                }(t) : n(t)
            }
        },
        partial: !0
    }
      , tg = {
        tokenize: function(e, t, n) {
            return function(t) {
                return e.consume(t),
                r
            }
            ;
            function r(e) {
                return a(e) ? n(e) : t(e)
            }
        },
        partial: !0
    }
      , tk = {
        name: "wwwAutolink",
        tokenize: function(e, t, n) {
            let r = this;
            return function(t) {
                return 87 !== t && 119 !== t || !tw.call(r, r.previous) || tT(r.events) ? n(t) : (e.enter("literalAutolink"),
                e.enter("literalAutolinkWww"),
                e.check(th, e.attempt(td, e.attempt(tp, i), n), n)(t))
            }
            ;
            function i(n) {
                return e.exit("literalAutolinkWww"),
                e.exit("literalAutolink"),
                t(n)
            }
        },
        previous: tw
    }
      , tx = {
        name: "protocolAutolink",
        tokenize: function(e, t, n) {
            let r = this
              , i = ""
              , o = !1;
            return function(t) {
                return (72 === t || 104 === t) && tS.call(r, r.previous) && !tT(r.events) ? (e.enter("literalAutolink"),
                e.enter("literalAutolinkHttp"),
                i += String.fromCodePoint(t),
                e.consume(t),
                l) : n(t)
            }
            ;
            function l(t) {
                if (c(t) && i.length < 5)
                    return i += String.fromCodePoint(t),
                    e.consume(t),
                    l;
                if (58 === t) {
                    let n = i.toLowerCase();
                    if ("http" === n || "https" === n)
                        return e.consume(t),
                        s
                }
                return n(t)
            }
            function s(t) {
                return 47 === t ? (e.consume(t),
                o) ? u : (o = !0,
                s) : n(t)
            }
            function u(t) {
                return null === t || h(t) || k(t) || b(t) || y(t) ? n(t) : e.attempt(td, e.attempt(tp, a), n)(t)
            }
            function a(n) {
                return e.exit("literalAutolinkHttp"),
                e.exit("literalAutolink"),
                t(n)
            }
        },
        previous: tS
    }
      , ty = {
        name: "emailAutolink",
        tokenize: function(e, t, n) {
            let r, i, o = this;
            return function(t) {
                return !tE(t) || !tC.call(o, o.previous) || tT(o.events) ? n(t) : (e.enter("literalAutolink"),
                e.enter("literalAutolinkEmail"),
                function t(r) {
                    return tE(r) ? (e.consume(r),
                    t) : 64 === r ? (e.consume(r),
                    l) : n(r)
                }(t))
            }
            ;
            function l(t) {
                return 46 === t ? e.check(tg, u, s)(t) : 45 === t || 95 === t || a(t) ? (i = !0,
                e.consume(t),
                l) : u(t)
            }
            function s(t) {
                return e.consume(t),
                r = !0,
                l
            }
            function u(l) {
                return i && r && c(o.previous) ? (e.exit("literalAutolinkEmail"),
                e.exit("literalAutolink"),
                t(l)) : n(l)
            }
        },
        previous: tC
    }
      , tb = {}
      , tv = 48;
    for (; tv < 123; )
        tb[tv] = ty,
        58 == ++tv ? tv = 65 : 91 === tv && (tv = 97);
    function tw(e) {
        return null === e || 40 === e || 42 === e || 95 === e || 91 === e || 93 === e || 126 === e || k(e)
    }
    function tS(e) {
        return !c(e)
    }
    function tC(e) {
        return !(47 === e || tE(e))
    }
    function tE(e) {
        return 43 === e || 45 === e || 46 === e || 95 === e || a(e)
    }
    function tT(e) {
        let t = e.length
          , n = !1;
        for (; t--; ) {
            let r = e[t][1];
            if (("labelLink" === r.type || "labelImage" === r.type) && !r._balanced) {
                n = !0;
                break
            }
            if (r._gfmAutolinkLiteralWalkedInto) {
                n = !1;
                break
            }
        }
        return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
        n
    }
    tb[43] = ty,
    tb[45] = ty,
    tb[46] = ty,
    tb[95] = ty,
    tb[72] = [ty, tx],
    tb[104] = [ty, tx],
    tb[87] = [ty, tk],
    tb[119] = [ty, tk];
    let tF = {
        tokenize: function(e, t, n) {
            let r = this;
            return w(e, function(e) {
                let i = r.events[r.events.length - 1];
                return i && "gfmFootnoteDefinitionIndent" === i[1].type && 4 === i[2].sliceSerialize(i[1], !0).length ? t(e) : n(e)
            }, "gfmFootnoteDefinitionIndent", 5)
        },
        partial: !0
    };
    function tI(e, t, n) {
        let r, i = this, o = i.events.length, l = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
        for (; o--; ) {
            let e = i.events[o][1];
            if ("labelImage" === e.type) {
                r = e;
                break
            }
            if ("gfmFootnoteCall" === e.type || "labelLink" === e.type || "label" === e.type || "image" === e.type || "link" === e.type)
                break
        }
        return function(o) {
            if (!r || !r._balanced)
                return n(o);
            let s = en(i.sliceSerialize({
                start: r.end,
                end: i.now()
            }));
            return 94 === s.codePointAt(0) && l.includes(s.slice(1)) ? (e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(o),
            e.exit("gfmFootnoteCallLabelMarker"),
            t(o)) : n(o)
        }
    }
    function tz(e, t) {
        let n = e.length;
        for (; n--; )
            if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
                e[n][1];
                break
            }
        e[n + 1][1].type = "data",
        e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
        let r = {
            type: "gfmFootnoteCall",
            start: Object.assign({}, e[n + 3][1].start),
            end: Object.assign({}, e[e.length - 1][1].end)
        }
          , i = {
            type: "gfmFootnoteCallMarker",
            start: Object.assign({}, e[n + 3][1].end),
            end: Object.assign({}, e[n + 3][1].end)
        };
        i.end.column++,
        i.end.offset++,
        i.end._bufferIndex++;
        let o = {
            type: "gfmFootnoteCallString",
            start: Object.assign({}, i.end),
            end: Object.assign({}, e[e.length - 1][1].start)
        }
          , l = {
            type: "chunkString",
            contentType: "string",
            start: Object.assign({}, o.start),
            end: Object.assign({}, o.end)
        }
          , s = [e[n + 1], e[n + 2], ["enter", r, t], e[n + 3], e[n + 4], ["enter", i, t], ["exit", i, t], ["enter", o, t], ["enter", l, t], ["exit", l, t], ["exit", o, t], e[e.length - 2], e[e.length - 1], ["exit", r, t]];
        return e.splice(n, e.length - n + 1, ...s),
        e
    }
    function tA(e, t, n) {
        let r, i = this, o = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []), l = 0;
        return function(t) {
            return e.enter("gfmFootnoteCall"),
            e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteCallLabelMarker"),
            s
        }
        ;
        function s(t) {
            return 94 !== t ? n(t) : (e.enter("gfmFootnoteCallMarker"),
            e.consume(t),
            e.exit("gfmFootnoteCallMarker"),
            e.enter("gfmFootnoteCallString"),
            e.enter("chunkString").contentType = "string",
            u)
        }
        function u(s) {
            if (l > 999 || 93 === s && !r || null === s || 91 === s || k(s))
                return n(s);
            if (93 === s) {
                e.exit("chunkString");
                let r = e.exit("gfmFootnoteCallString");
                return o.includes(en(i.sliceSerialize(r))) ? (e.enter("gfmFootnoteCallLabelMarker"),
                e.consume(s),
                e.exit("gfmFootnoteCallLabelMarker"),
                e.exit("gfmFootnoteCall"),
                t) : n(s)
            }
            return k(s) || (r = !0),
            l++,
            e.consume(s),
            92 === s ? c : u
        }
        function c(t) {
            return 91 === t || 92 === t || 93 === t ? (e.consume(t),
            l++,
            u) : u(t)
        }
    }
    function tL(e, t, n) {
        let r, i, o = this, l = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []), s = 0;
        return function(t) {
            return e.enter("gfmFootnoteDefinition")._container = !0,
            e.enter("gfmFootnoteDefinitionLabel"),
            e.enter("gfmFootnoteDefinitionLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteDefinitionLabelMarker"),
            u
        }
        ;
        function u(t) {
            return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"),
            e.consume(t),
            e.exit("gfmFootnoteDefinitionMarker"),
            e.enter("gfmFootnoteDefinitionLabelString"),
            e.enter("chunkString").contentType = "string",
            c) : n(t)
        }
        function c(t) {
            if (s > 999 || 93 === t && !i || null === t || 91 === t || k(t))
                return n(t);
            if (93 === t) {
                e.exit("chunkString");
                let n = e.exit("gfmFootnoteDefinitionLabelString");
                return r = en(o.sliceSerialize(n)),
                e.enter("gfmFootnoteDefinitionLabelMarker"),
                e.consume(t),
                e.exit("gfmFootnoteDefinitionLabelMarker"),
                e.exit("gfmFootnoteDefinitionLabel"),
                f
            }
            return k(t) || (i = !0),
            s++,
            e.consume(t),
            92 === t ? a : c
        }
        function a(t) {
            return 91 === t || 92 === t || 93 === t ? (e.consume(t),
            s++,
            c) : c(t)
        }
        function f(t) {
            return 58 === t ? (e.enter("definitionMarker"),
            e.consume(t),
            e.exit("definitionMarker"),
            l.includes(r) || l.push(r),
            w(e, h, "gfmFootnoteDefinitionWhitespace")) : n(t)
        }
        function h(e) {
            return t(e)
        }
    }
    function tP(e, t, n) {
        return e.check(T, t, e.attempt(tF, t, n))
    }
    function t_(e) {
        e.exit("gfmFootnoteDefinition")
    }
    class tD {
        constructor() {
            this.map = []
        }
        add(e, t, n) {
            !function(e, t, n, r) {
                let i = 0;
                if (0 !== n || 0 !== r.length) {
                    for (; i < e.map.length; ) {
                        if (e.map[i][0] === t) {
                            e.map[i][1] += n,
                            e.map[i][2].push(...r);
                            return
                        }
                        i += 1
                    }
                    e.map.push([t, n, r])
                }
            }(this, e, t, n)
        }
        consume(e) {
            if (this.map.sort(function(e, t) {
                return e[0] - t[0]
            }),
            0 === this.map.length)
                return;
            let t = this.map.length
              , n = [];
            for (; t > 0; )
                t -= 1,
                n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
                e.length = this.map[t][0];
            n.push(e.slice()),
            e.length = 0;
            let r = n.pop();
            for (; r; ) {
                for (let t of r)
                    e.push(t);
                r = n.pop()
            }
            this.map.length = 0
        }
    }
    function tM(e, t, n) {
        let r, i = this, o = 0, l = 0;
        return function(e) {
            let t = i.events.length - 1;
            for (; t > -1; ) {
                let e = i.events[t][1].type;
                if ("lineEnding" === e || "linePrefix" === e)
                    t--;
                else
                    break
            }
            let r = t > -1 ? i.events[t][1].type : null
              , o = "tableHead" === r || "tableRow" === r ? v : s;
            return o === v && i.parser.lazy[i.now().line] ? n(e) : o(e)
        }
        ;
        function s(t) {
            var n;
            return e.enter("tableHead"),
            e.enter("tableRow"),
            124 === (n = t) || (r = !0,
            l += 1),
            u(n)
        }
        function u(t) {
            return null === t ? n(t) : g(t) ? l > 1 ? (l = 0,
            i.interrupt = !0,
            e.exit("tableRow"),
            e.enter("lineEnding"),
            e.consume(t),
            e.exit("lineEnding"),
            f) : n(t) : x(t) ? w(e, u, "whitespace")(t) : (l += 1,
            r && (r = !1,
            o += 1),
            124 === t) ? (e.enter("tableCellDivider"),
            e.consume(t),
            e.exit("tableCellDivider"),
            r = !0,
            u) : (e.enter("data"),
            c(t))
        }
        function c(t) {
            return null === t || 124 === t || k(t) ? (e.exit("data"),
            u(t)) : (e.consume(t),
            92 === t ? a : c)
        }
        function a(t) {
            return 92 === t || 124 === t ? (e.consume(t),
            c) : c(t)
        }
        function f(t) {
            return (i.interrupt = !1,
            i.parser.lazy[i.now().line]) ? n(t) : (e.enter("tableDelimiterRow"),
            r = !1,
            x(t)) ? w(e, h, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : h(t)
        }
        function h(t) {
            return 45 === t || 58 === t ? p(t) : 124 === t ? (r = !0,
            e.enter("tableCellDivider"),
            e.consume(t),
            e.exit("tableCellDivider"),
            d) : n(t)
        }
        function d(t) {
            return x(t) ? w(e, p, "whitespace")(t) : p(t)
        }
        function p(t) {
            return 58 === t ? (l += 1,
            r = !0,
            e.enter("tableDelimiterMarker"),
            e.consume(t),
            e.exit("tableDelimiterMarker"),
            m) : 45 === t ? (l += 1,
            m(t)) : null === t || g(t) ? b(t) : n(t)
        }
        function m(t) {
            return 45 === t ? (e.enter("tableDelimiterFiller"),
            function t(n) {
                return 45 === n ? (e.consume(n),
                t) : 58 === n ? (r = !0,
                e.exit("tableDelimiterFiller"),
                e.enter("tableDelimiterMarker"),
                e.consume(n),
                e.exit("tableDelimiterMarker"),
                y) : (e.exit("tableDelimiterFiller"),
                y(n))
            }(t)) : n(t)
        }
        function y(t) {
            return x(t) ? w(e, b, "whitespace")(t) : b(t)
        }
        function b(i) {
            if (124 === i)
                return h(i);
            if (null === i || g(i))
                return r && o === l ? (e.exit("tableDelimiterRow"),
                e.exit("tableHead"),
                t(i)) : n(i);
            return n(i)
        }
        function v(t) {
            return e.enter("tableRow"),
            S(t)
        }
        function S(n) {
            return 124 === n ? (e.enter("tableCellDivider"),
            e.consume(n),
            e.exit("tableCellDivider"),
            S) : null === n || g(n) ? (e.exit("tableRow"),
            t(n)) : x(n) ? w(e, S, "whitespace")(n) : (e.enter("data"),
            C(n))
        }
        function C(t) {
            return null === t || 124 === t || k(t) ? (e.exit("data"),
            S(t)) : (e.consume(t),
            92 === t ? E : C)
        }
        function E(t) {
            return 92 === t || 124 === t ? (e.consume(t),
            C) : C(t)
        }
    }
    function tj(e, t) {
        let n, r, i, o = -1, l = !0, s = 0, u = [0, 0, 0, 0], c = [0, 0, 0, 0], a = !1, f = 0, h = new tD;
        for (; ++o < e.length; ) {
            let d = e[o]
              , p = d[1];
            "enter" === d[0] ? "tableHead" === p.type ? (a = !1,
            0 !== f && (tO(h, t, f, n, r),
            r = void 0,
            f = 0),
            n = {
                type: "table",
                start: Object.assign({}, p.start),
                end: Object.assign({}, p.end)
            },
            h.add(o, 0, [["enter", n, t]])) : "tableRow" === p.type || "tableDelimiterRow" === p.type ? (l = !0,
            i = void 0,
            u = [0, 0, 0, 0],
            c = [0, o + 1, 0, 0],
            a && (a = !1,
            r = {
                type: "tableBody",
                start: Object.assign({}, p.start),
                end: Object.assign({}, p.end)
            },
            h.add(o, 0, [["enter", r, t]])),
            s = "tableDelimiterRow" === p.type ? 2 : r ? 3 : 1) : s && ("data" === p.type || "tableDelimiterMarker" === p.type || "tableDelimiterFiller" === p.type) ? (l = !1,
            0 === c[2] && (0 !== u[1] && (c[0] = c[1],
            i = tR(h, t, u, s, void 0, i),
            u = [0, 0, 0, 0]),
            c[2] = o)) : "tableCellDivider" === p.type && (l ? l = !1 : (0 !== u[1] && (c[0] = c[1],
            i = tR(h, t, u, s, void 0, i)),
            c = [(u = c)[1], o, 0, 0])) : "tableHead" === p.type ? (a = !0,
            f = o) : "tableRow" === p.type || "tableDelimiterRow" === p.type ? (f = o,
            0 !== u[1] ? (c[0] = c[1],
            i = tR(h, t, u, s, o, i)) : 0 !== c[1] && (i = tR(h, t, c, s, o, i)),
            s = 0) : s && ("data" === p.type || "tableDelimiterMarker" === p.type || "tableDelimiterFiller" === p.type) && (c[3] = o)
        }
        for (0 !== f && tO(h, t, f, n, r),
        h.consume(t.events),
        o = -1; ++o < t.events.length; ) {
            let e = t.events[o];
            "enter" === e[0] && "table" === e[1].type && (e[1]._align = function(e, t) {
                let n = !1
                  , r = [];
                for (; t < e.length; ) {
                    let i = e[t];
                    if (n) {
                        if ("enter" === i[0])
                            "tableContent" === i[1].type && r.push("tableDelimiterMarker" === e[t + 1][1].type ? "left" : "none");
                        else if ("tableContent" === i[1].type) {
                            if ("tableDelimiterMarker" === e[t - 1][1].type) {
                                let e = r.length - 1;
                                r[e] = "left" === r[e] ? "center" : "right"
                            }
                        } else if ("tableDelimiterRow" === i[1].type)
                            break
                    } else
                        "enter" === i[0] && "tableDelimiterRow" === i[1].type && (n = !0);
                    t += 1
                }
                return r
            }(t.events, o))
        }
        return e
    }
    function tR(e, t, n, r, i, o) {
        0 !== n[0] && (o.end = Object.assign({}, tH(t.events, n[0])),
        e.add(n[0], 0, [["exit", o, t]]));
        let l = tH(t.events, n[1]);
        if (o = {
            type: 1 === r ? "tableHeader" : 2 === r ? "tableDelimiter" : "tableData",
            start: Object.assign({}, l),
            end: Object.assign({}, l)
        },
        e.add(n[1], 0, [["enter", o, t]]),
        0 !== n[2]) {
            let i = tH(t.events, n[2])
              , o = tH(t.events, n[3])
              , l = {
                type: "tableContent",
                start: Object.assign({}, i),
                end: Object.assign({}, o)
            };
            if (e.add(n[2], 0, [["enter", l, t]]),
            2 !== r) {
                let r = t.events[n[2]]
                  , i = t.events[n[3]];
                if (r[1].end = Object.assign({}, i[1].end),
                r[1].type = "chunkText",
                r[1].contentType = "text",
                n[3] > n[2] + 1) {
                    let t = n[2] + 1
                      , r = n[3] - n[2] - 1;
                    e.add(t, r, [])
                }
            }
            e.add(n[3] + 1, 0, [["exit", l, t]])
        }
        return void 0 !== i && (o.end = Object.assign({}, tH(t.events, i)),
        e.add(i, 0, [["exit", o, t]]),
        o = void 0),
        o
    }
    function tO(e, t, n, r, i) {
        let o = []
          , l = tH(t.events, n);
        i && (i.end = Object.assign({}, l),
        o.push(["exit", i, t])),
        r.end = Object.assign({}, l),
        o.push(["exit", r, t]),
        e.add(n + 1, 0, o)
    }
    function tH(e, t) {
        let n = e[t]
          , r = "enter" === n[0] ? "start" : "end";
        return n[1][r]
    }
    let tB = {
        name: "tasklistCheck",
        tokenize: function(e, t, n) {
            let r = this;
            return function(t) {
                return null === r.previous && r._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"),
                e.enter("taskListCheckMarker"),
                e.consume(t),
                e.exit("taskListCheckMarker"),
                i) : n(t)
            }
            ;
            function i(t) {
                return k(t) ? (e.enter("taskListCheckValueUnchecked"),
                e.consume(t),
                e.exit("taskListCheckValueUnchecked"),
                o) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"),
                e.consume(t),
                e.exit("taskListCheckValueChecked"),
                o) : n(t)
            }
            function o(t) {
                return 93 === t ? (e.enter("taskListCheckMarker"),
                e.consume(t),
                e.exit("taskListCheckMarker"),
                e.exit("taskListCheck"),
                l) : n(t)
            }
            function l(r) {
                return g(r) ? t(r) : x(r) ? e.check({
                    tokenize: tq
                }, t, n)(r) : n(r)
            }
        }
    };
    function tq(e, t, n) {
        return w(e, function(e) {
            return null === e ? n(e) : t(e)
        }, "whitespace")
    }
    let tV = {};
    function tU(e) {
        try {
            let t = new URL(e);
            return ["https:", "http:"].includes(t.protocol) ? t.href : void 0
        } catch {
            return
        }
    }
    let tN = (0,
    i.unified)().use(function(e) {
        let t = this;
        t.parser = function(n) {
            var i, s;
            let c, a, f, h;
            return "object" == typeof (i = {
                ...t.data("settings"),
                ...e,
                extensions: t.data("micromarkExtensions") || [],
                mdastExtensions: t.data("fromMarkdownExtensions") || []
            }) && (s = i,
            i = void 0),
            (function(e) {
                let t = {
                    transforms: [],
                    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                    enter: {
                        autolink: i(x),
                        autolinkProtocol: a,
                        autolinkEmail: a,
                        atxHeading: i(m),
                        blockQuote: i(function() {
                            return {
                                type: "blockquote",
                                children: []
                            }
                        }),
                        characterEscape: a,
                        characterReference: a,
                        codeFenced: i(p),
                        codeFencedFenceInfo: o,
                        codeFencedFenceMeta: o,
                        codeIndented: i(p, o),
                        codeText: i(function() {
                            return {
                                type: "inlineCode",
                                value: ""
                            }
                        }, o),
                        codeTextData: a,
                        data: a,
                        codeFlowValue: a,
                        definition: i(function() {
                            return {
                                type: "definition",
                                identifier: "",
                                label: null,
                                title: null,
                                url: ""
                            }
                        }),
                        definitionDestinationString: o,
                        definitionLabelString: o,
                        definitionTitleString: o,
                        emphasis: i(function() {
                            return {
                                type: "emphasis",
                                children: []
                            }
                        }),
                        hardBreakEscape: i(g),
                        hardBreakTrailing: i(g),
                        htmlFlow: i(k, o),
                        htmlFlowData: a,
                        htmlText: i(k, o),
                        htmlTextData: a,
                        image: i(function() {
                            return {
                                type: "image",
                                title: null,
                                url: "",
                                alt: null
                            }
                        }),
                        label: o,
                        link: i(x),
                        listItem: i(function(e) {
                            return {
                                type: "listItem",
                                spread: e._spread,
                                checked: null,
                                children: []
                            }
                        }),
                        listItemValue: function(e) {
                            this.data.expectingFirstListItemValue && (this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10),
                            this.data.expectingFirstListItemValue = void 0)
                        },
                        listOrdered: i(y, function() {
                            this.data.expectingFirstListItemValue = !0
                        }),
                        listUnordered: i(y),
                        paragraph: i(function() {
                            return {
                                type: "paragraph",
                                children: []
                            }
                        }),
                        reference: function() {
                            this.data.referenceType = "collapsed"
                        },
                        referenceString: o,
                        resourceDestinationString: o,
                        resourceTitleString: o,
                        setextHeading: i(m),
                        strong: i(function() {
                            return {
                                type: "strong",
                                children: []
                            }
                        }),
                        thematicBreak: i(function() {
                            return {
                                type: "thematicBreak"
                            }
                        })
                    },
                    exit: {
                        atxHeading: s(),
                        atxHeadingSequence: function(e) {
                            let t = this.stack[this.stack.length - 1];
                            t.depth || (t.depth = this.sliceSerialize(e).length)
                        },
                        autolink: s(),
                        autolinkEmail: function(e) {
                            f.call(this, e),
                            this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                        },
                        autolinkProtocol: function(e) {
                            f.call(this, e),
                            this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                        },
                        blockQuote: s(),
                        characterEscapeValue: f,
                        characterReferenceMarkerHexadecimal: d,
                        characterReferenceMarkerNumeric: d,
                        characterReferenceValue: function(e) {
                            let t, n = this.sliceSerialize(e), r = this.data.characterReferenceType;
                            r ? (t = ew(n, "characterReferenceMarkerNumeric" === r ? 10 : 16),
                            this.data.characterReferenceType = void 0) : t = W(n);
                            let i = this.stack[this.stack.length - 1];
                            i.value += t
                        },
                        characterReference: function(e) {
                            this.stack.pop().position.end = eF(e.end)
                        },
                        codeFenced: s(function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""),
                            this.data.flowCodeInside = void 0
                        }),
                        codeFencedFence: function() {
                            this.data.flowCodeInside || (this.buffer(),
                            this.data.flowCodeInside = !0)
                        },
                        codeFencedFenceInfo: function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].lang = e
                        },
                        codeFencedFenceMeta: function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].meta = e
                        },
                        codeFlowValue: f,
                        codeIndented: s(function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "")
                        }),
                        codeText: s(function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].value = e
                        }),
                        codeTextData: f,
                        data: f,
                        definition: s(),
                        definitionDestinationString: function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].url = e
                        },
                        definitionLabelString: function(e) {
                            let t = this.resume()
                              , n = this.stack[this.stack.length - 1];
                            n.label = t,
                            n.identifier = en(this.sliceSerialize(e)).toLowerCase()
                        },
                        definitionTitleString: function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].title = e
                        },
                        emphasis: s(),
                        hardBreakEscape: s(h),
                        hardBreakTrailing: s(h),
                        htmlFlow: s(function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].value = e
                        }),
                        htmlFlowData: f,
                        htmlText: s(function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].value = e
                        }),
                        htmlTextData: f,
                        image: s(function() {
                            let e = this.stack[this.stack.length - 1];
                            if (this.data.inReference) {
                                let t = this.data.referenceType || "shortcut";
                                e.type += "Reference",
                                e.referenceType = t,
                                delete e.url,
                                delete e.title
                            } else
                                delete e.identifier,
                                delete e.label;
                            this.data.referenceType = void 0
                        }),
                        label: function() {
                            let e = this.stack[this.stack.length - 1]
                              , t = this.resume()
                              , n = this.stack[this.stack.length - 1];
                            this.data.inReference = !0,
                            "link" === n.type ? n.children = e.children : n.alt = t
                        },
                        labelText: function(e) {
                            let t = this.sliceSerialize(e)
                              , n = this.stack[this.stack.length - 2];
                            n.label = t.replace(eS, eC),
                            n.identifier = en(t).toLowerCase()
                        },
                        lineEnding: function(e) {
                            let n = this.stack[this.stack.length - 1];
                            if (this.data.atHardBreak) {
                                n.children[n.children.length - 1].position.end = eF(e.end),
                                this.data.atHardBreak = void 0;
                                return
                            }
                            !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (a.call(this, e),
                            f.call(this, e))
                        },
                        link: s(function() {
                            let e = this.stack[this.stack.length - 1];
                            if (this.data.inReference) {
                                let t = this.data.referenceType || "shortcut";
                                e.type += "Reference",
                                e.referenceType = t,
                                delete e.url,
                                delete e.title
                            } else
                                delete e.identifier,
                                delete e.label;
                            this.data.referenceType = void 0
                        }),
                        listItem: s(),
                        listOrdered: s(),
                        listUnordered: s(),
                        paragraph: s(),
                        referenceString: function(e) {
                            let t = this.resume()
                              , n = this.stack[this.stack.length - 1];
                            n.label = t,
                            n.identifier = en(this.sliceSerialize(e)).toLowerCase(),
                            this.data.referenceType = "full"
                        },
                        resourceDestinationString: function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].url = e
                        },
                        resourceTitleString: function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].title = e
                        },
                        resource: function() {
                            this.data.inReference = void 0
                        },
                        setextHeading: s(function() {
                            this.data.setextHeadingSlurpLineEnding = void 0
                        }),
                        setextHeadingLineSequence: function(e) {
                            this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2
                        },
                        setextHeadingText: function() {
                            this.data.setextHeadingSlurpLineEnding = !0
                        },
                        strong: s(),
                        thematicBreak: s()
                    }
                };
                !function e(t, n) {
                    let r = -1;
                    for (; ++r < n.length; ) {
                        let i = n[r];
                        Array.isArray(i) ? e(t, i) : function(e, t) {
                            let n;
                            for (n in t)
                                if (eT.call(t, n))
                                    switch (n) {
                                    case "canContainEols":
                                        {
                                            let r = t[n];
                                            r && e[n].push(...r);
                                            break
                                        }
                                    case "transforms":
                                        {
                                            let r = t[n];
                                            r && e[n].push(...r);
                                            break
                                        }
                                    case "enter":
                                    case "exit":
                                        {
                                            let r = t[n];
                                            r && Object.assign(e[n], r)
                                        }
                                    }
                        }(t, i)
                    }
                }(t, (e || {}).mdastExtensions || []);
                let n = {};
                return function(e) {
                    let r = {
                        type: "root",
                        children: []
                    }
                      , i = {
                        stack: [r],
                        tokenStack: [],
                        config: t,
                        enter: l,
                        exit: u,
                        buffer: o,
                        resume: c,
                        data: n
                    }
                      , s = []
                      , a = -1;
                    for (; ++a < e.length; )
                        ("listOrdered" === e[a][1].type || "listUnordered" === e[a][1].type) && ("enter" === e[a][0] ? s.push(a) : a = function(e, t, n) {
                            let r, i, o, l, s = t - 1, u = -1, c = !1;
                            for (; ++s <= n; ) {
                                let t = e[s];
                                switch (t[1].type) {
                                case "listUnordered":
                                case "listOrdered":
                                case "blockQuote":
                                    "enter" === t[0] ? u++ : u--,
                                    l = void 0;
                                    break;
                                case "lineEndingBlank":
                                    "enter" === t[0] && (!r || l || u || o || (o = s),
                                    l = void 0);
                                    break;
                                case "linePrefix":
                                case "listItemValue":
                                case "listItemMarker":
                                case "listItemPrefix":
                                case "listItemPrefixWhitespace":
                                    break;
                                default:
                                    l = void 0
                                }
                                if (!u && "enter" === t[0] && "listItemPrefix" === t[1].type || -1 === u && "exit" === t[0] && ("listUnordered" === t[1].type || "listOrdered" === t[1].type)) {
                                    if (r) {
                                        let l = s;
                                        for (i = void 0; l--; ) {
                                            let t = e[l];
                                            if ("lineEnding" === t[1].type || "lineEndingBlank" === t[1].type) {
                                                if ("exit" === t[0])
                                                    continue;
                                                i && (e[i][1].type = "lineEndingBlank",
                                                c = !0),
                                                t[1].type = "lineEnding",
                                                i = l
                                            } else if ("linePrefix" === t[1].type || "blockQuotePrefix" === t[1].type || "blockQuotePrefixWhitespace" === t[1].type || "blockQuoteMarker" === t[1].type || "listItemIndent" === t[1].type)
                                                ;
                                            else
                                                break
                                        }
                                        o && (!i || o < i) && (r._spread = !0),
                                        r.end = Object.assign({}, i ? e[i][1].start : t[1].end),
                                        e.splice(i || s, 0, ["exit", r, t[2]]),
                                        s++,
                                        n++
                                    }
                                    if ("listItemPrefix" === t[1].type) {
                                        let i = {
                                            type: "listItem",
                                            _spread: !1,
                                            start: Object.assign({}, t[1].start),
                                            end: void 0
                                        };
                                        r = i,
                                        e.splice(s, 0, ["enter", i, t[2]]),
                                        s++,
                                        n++,
                                        o = void 0,
                                        l = !0
                                    }
                                }
                            }
                            return e[t][1]._spread = c,
                            n
                        }(e, s.pop(), a));
                    for (a = -1; ++a < e.length; ) {
                        let n = t[e[a][0]];
                        eT.call(n, e[a][1].type) && n[e[a][1].type].call(Object.assign({
                            sliceSerialize: e[a][2].sliceSerialize
                        }, i), e[a][1])
                    }
                    if (i.tokenStack.length > 0) {
                        let e = i.tokenStack[i.tokenStack.length - 1];
                        (e[1] || eI).call(i, void 0, e[0])
                    }
                    for (r.position = {
                        start: eF(e.length > 0 ? e[0][1].start : {
                            line: 1,
                            column: 1,
                            offset: 0
                        }),
                        end: eF(e.length > 0 ? e[e.length - 2][1].end : {
                            line: 1,
                            column: 1,
                            offset: 0
                        })
                    },
                    a = -1; ++a < t.transforms.length; )
                        r = t.transforms[a](r) || r;
                    return r
                }
                ;
                function i(e, t) {
                    return function(n) {
                        l.call(this, e(n), n),
                        t && t.call(this, n)
                    }
                }
                function o() {
                    this.stack.push({
                        type: "fragment",
                        children: []
                    })
                }
                function l(e, t, n) {
                    this.stack[this.stack.length - 1].children.push(e),
                    this.stack.push(e),
                    this.tokenStack.push([t, n || void 0]),
                    e.position = {
                        start: eF(t.start),
                        end: void 0
                    }
                }
                function s(e) {
                    return function(t) {
                        e && e.call(this, t),
                        u.call(this, t)
                    }
                }
                function u(e, t) {
                    let n = this.stack.pop()
                      , r = this.tokenStack.pop();
                    if (r)
                        r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || eI).call(this, e, r[0]));
                    else
                        throw Error("Cannot close `" + e.type + "` (" + (0,
                        eE.stringifyPosition)({
                            start: e.start,
                            end: e.end
                        }) + "): it’s not open");
                    n.position.end = eF(e.end)
                }
                function c() {
                    return (0,
                    r.toString)(this.stack.pop())
                }
                function a(e) {
                    let t = this.stack[this.stack.length - 1].children
                      , n = t[t.length - 1];
                    n && "text" === n.type || ((n = {
                        type: "text",
                        value: ""
                    }).position = {
                        start: eF(e.start),
                        end: void 0
                    },
                    t.push(n)),
                    this.stack.push(n)
                }
                function f(e) {
                    let t = this.stack.pop();
                    t.value += this.sliceSerialize(e),
                    t.position.end = eF(e.end)
                }
                function h() {
                    this.data.atHardBreak = !0
                }
                function d(e) {
                    this.data.characterReferenceType = e.type
                }
                function p() {
                    return {
                        type: "code",
                        lang: null,
                        meta: null,
                        value: ""
                    }
                }
                function m() {
                    return {
                        type: "heading",
                        depth: 0,
                        children: []
                    }
                }
                function g() {
                    return {
                        type: "break"
                    }
                }
                function k() {
                    return {
                        type: "html",
                        value: ""
                    }
                }
                function x() {
                    return {
                        type: "link",
                        title: null,
                        url: "",
                        children: []
                    }
                }
                function y(e) {
                    return {
                        type: "list",
                        ordered: "listOrdered" === e.type,
                        start: null,
                        spread: e._spread,
                        children: []
                    }
                }
            }
            )(s)(function(e) {
                for (; !z(e); )
                    ;
                return e
            }((function(e) {
                let t = {
                    constructs: u([eb, ...(e || {}).extensions || []]),
                    content: n(S),
                    defined: [],
                    document: n(C),
                    flow: n(P),
                    lazy: {},
                    string: n(D),
                    text: n(M)
                };
                return t;
                function n(e) {
                    return function(n) {
                        return function(e, t, n) {
                            let r = {
                                _bufferIndex: -1,
                                _index: 0,
                                line: n && n.line || 1,
                                column: n && n.column || 1,
                                offset: n && n.offset || 0
                            }
                              , i = {}
                              , s = []
                              , u = []
                              , c = []
                              , a = {
                                attempt: k(function(e, t) {
                                    x(e, t.from)
                                }),
                                check: k(m),
                                consume: function(e) {
                                    g(e) ? (r.line++,
                                    r.column = 1,
                                    r.offset += -3 === e ? 2 : 1,
                                    y()) : -1 !== e && (r.column++,
                                    r.offset++),
                                    r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++,
                                    r._bufferIndex === u[r._index].length && (r._bufferIndex = -1,
                                    r._index++)),
                                    f.previous = e
                                },
                                enter: function(e, t) {
                                    let n = t || {};
                                    return n.type = e,
                                    n.start = p(),
                                    f.events.push(["enter", n, f]),
                                    c.push(n),
                                    n
                                },
                                exit: function(e) {
                                    let t = c.pop();
                                    return t.end = p(),
                                    f.events.push(["exit", t, f]),
                                    t
                                },
                                interrupt: k(m, {
                                    interrupt: !0
                                })
                            }
                              , f = {
                                code: null,
                                containerState: {},
                                defineSkip: function(e) {
                                    i[e.line] = e.column,
                                    y()
                                },
                                events: [],
                                now: p,
                                parser: e,
                                previous: null,
                                sliceSerialize: function(e, t) {
                                    return function(e, t) {
                                        let n, r = -1, i = [];
                                        for (; ++r < e.length; ) {
                                            let o, l = e[r];
                                            if ("string" == typeof l)
                                                o = l;
                                            else
                                                switch (l) {
                                                case -5:
                                                    o = "\r";
                                                    break;
                                                case -4:
                                                    o = "\n";
                                                    break;
                                                case -3:
                                                    o = "\r\n";
                                                    break;
                                                case -2:
                                                    o = t ? " " : "	";
                                                    break;
                                                case -1:
                                                    if (!t && n)
                                                        continue;
                                                    o = " ";
                                                    break;
                                                default:
                                                    o = String.fromCharCode(l)
                                                }
                                            n = -2 === l,
                                            i.push(o)
                                        }
                                        return i.join("")
                                    }(d(e), t)
                                },
                                sliceStream: d,
                                write: function(e) {
                                    return (u = l(u, e),
                                    function() {
                                        let e;
                                        for (; r._index < u.length; ) {
                                            let n = u[r._index];
                                            if ("string" == typeof n)
                                                for (e = r._index,
                                                r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length; ) {
                                                    var t;
                                                    t = n.charCodeAt(r._bufferIndex),
                                                    h = h(t)
                                                }
                                            else
                                                h = h(n)
                                        }
                                    }(),
                                    null !== u[u.length - 1]) ? [] : (x(t, 0),
                                    f.events = B(s, f.events, f),
                                    f.events)
                                }
                            }
                              , h = t.tokenize.call(f, a);
                            return t.resolveAll && s.push(t),
                            f;
                            function d(e) {
                                return function(e, t) {
                                    let n, r = t.start._index, i = t.start._bufferIndex, o = t.end._index, l = t.end._bufferIndex;
                                    if (r === o)
                                        n = [e[r].slice(i, l)];
                                    else {
                                        if (n = e.slice(r, o),
                                        i > -1) {
                                            let e = n[0];
                                            "string" == typeof e ? n[0] = e.slice(i) : n.shift()
                                        }
                                        l > 0 && n.push(e[o].slice(0, l))
                                    }
                                    return n
                                }(u, e)
                            }
                            function p() {
                                let {_bufferIndex: e, _index: t, line: n, column: i, offset: o} = r;
                                return {
                                    _bufferIndex: e,
                                    _index: t,
                                    line: n,
                                    column: i,
                                    offset: o
                                }
                            }
                            function m(e, t) {
                                t.restore()
                            }
                            function k(e, t) {
                                return function(n, i, o) {
                                    var l;
                                    let s, u, h, d;
                                    return Array.isArray(n) ? m(n) : "tokenize" in n ? m([n]) : (l = n,
                                    function(e) {
                                        let t = null !== e && l[e]
                                          , n = null !== e && l.null;
                                        return m([...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(n) ? n : n ? [n] : []])(e)
                                    }
                                    );
                                    function m(e) {
                                        return (s = e,
                                        u = 0,
                                        0 === e.length) ? o : g(e[u])
                                    }
                                    function g(e) {
                                        return function(n) {
                                            let i, o, l, s, u;
                                            return (i = p(),
                                            o = f.previous,
                                            l = f.currentConstruct,
                                            s = f.events.length,
                                            u = Array.from(c),
                                            d = {
                                                from: s,
                                                restore: function() {
                                                    r = i,
                                                    f.previous = o,
                                                    f.currentConstruct = l,
                                                    f.events.length = s,
                                                    c = u,
                                                    y()
                                                }
                                            },
                                            h = e,
                                            e.partial || (f.currentConstruct = e),
                                            e.name && f.parser.constructs.disable.null.includes(e.name)) ? x(n) : e.tokenize.call(t ? Object.assign(Object.create(f), t) : f, a, k, x)(n)
                                        }
                                    }
                                    function k(t) {
                                        return e(h, d),
                                        i
                                    }
                                    function x(e) {
                                        return (d.restore(),
                                        ++u < s.length) ? g(s[u]) : o
                                    }
                                }
                            }
                            function x(e, t) {
                                e.resolveAll && !s.includes(e) && s.push(e),
                                e.resolve && o(f.events, t, f.events.length - t, e.resolve(f.events.slice(t), f)),
                                e.resolveTo && (f.events = e.resolveTo(f.events, f))
                            }
                            function y() {
                                r.line in i && r.column < 2 && (r.column = i[r.line],
                                r.offset += i[r.line] - 1)
                            }
                        }(t, e, n)
                    }
                }
            }
            )(s).document().write((a = 1,
            f = "",
            h = !0,
            function(e, t, n) {
                let r, i, o, l, s, u = [];
                for (e = f + ("string" == typeof e ? e.toString() : new TextDecoder(t || void 0).decode(e)),
                o = 0,
                f = "",
                h && (65279 === e.charCodeAt(0) && o++,
                h = void 0); o < e.length; ) {
                    if (ev.lastIndex = o,
                    l = (r = ev.exec(e)) && void 0 !== r.index ? r.index : e.length,
                    s = e.charCodeAt(l),
                    !r) {
                        f = e.slice(o);
                        break
                    }
                    if (10 === s && o === l && c)
                        u.push(-3),
                        c = void 0;
                    else
                        switch (c && (u.push(-5),
                        c = void 0),
                        o < l && (u.push(e.slice(o, l)),
                        a += l - o),
                        s) {
                        case 0:
                            u.push(65533),
                            a++;
                            break;
                        case 9:
                            for (i = 4 * Math.ceil(a / 4),
                            u.push(-2); a++ < i; )
                                u.push(-1);
                            break;
                        case 10:
                            u.push(-4),
                            a = 1;
                            break;
                        default:
                            c = !0,
                            a = 1
                        }
                    o = l + 1
                }
                return n && (c && u.push(-5),
                f && u.push(f),
                u.push(null)),
                u
            }
            )(n, i, !0))))
        }
    }).use(function(e) {
        let t, n, r, i = e || tV, l = this.data(), s = l.micromarkExtensions || (l.micromarkExtensions = []), c = l.fromMarkdownExtensions || (l.fromMarkdownExtensions = []), a = l.toMarkdownExtensions || (l.toMarkdownExtensions = []);
        s.push(u([{
            text: tb
        }, {
            document: {
                91: {
                    name: "gfmFootnoteDefinition",
                    tokenize: tL,
                    continuation: {
                        tokenize: tP
                    },
                    exit: t_
                }
            },
            text: {
                91: {
                    name: "gfmFootnoteCall",
                    tokenize: tA
                },
                93: {
                    name: "gfmPotentialFootnoteCall",
                    add: "after",
                    tokenize: tI,
                    resolveTo: tz
                }
            }
        }, (t = (i || {}).singleTilde,
        n = {
            name: "strikethrough",
            tokenize: function(e, n, r) {
                let i = this.previous
                  , o = this.events
                  , l = 0;
                return function(s) {
                    return 126 === i && "characterEscape" !== o[o.length - 1][1].type ? r(s) : (e.enter("strikethroughSequenceTemporary"),
                    function o(s) {
                        let u = H(i);
                        if (126 === s)
                            return l > 1 ? r(s) : (e.consume(s),
                            l++,
                            o);
                        if (l < 2 && !t)
                            return r(s);
                        let c = e.exit("strikethroughSequenceTemporary")
                          , a = H(s);
                        return c._open = !a || 2 === a && !!u,
                        c._close = !u || 2 === u && !!a,
                        n(s)
                    }(s))
                }
            },
            resolveAll: function(e, t) {
                let n = -1;
                for (; ++n < e.length; )
                    if ("enter" === e[n][0] && "strikethroughSequenceTemporary" === e[n][1].type && e[n][1]._close) {
                        let r = n;
                        for (; r--; )
                            if ("exit" === e[r][0] && "strikethroughSequenceTemporary" === e[r][1].type && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset == e[r][1].end.offset - e[r][1].start.offset) {
                                e[n][1].type = "strikethroughSequence",
                                e[r][1].type = "strikethroughSequence";
                                let i = {
                                    type: "strikethrough",
                                    start: Object.assign({}, e[r][1].start),
                                    end: Object.assign({}, e[n][1].end)
                                }
                                  , l = {
                                    type: "strikethroughText",
                                    start: Object.assign({}, e[r][1].end),
                                    end: Object.assign({}, e[n][1].start)
                                }
                                  , s = [["enter", i, t], ["enter", e[r][1], t], ["exit", e[r][1], t], ["enter", l, t]]
                                  , u = t.parser.constructs.insideSpan.null;
                                u && o(s, s.length, 0, B(u, e.slice(r + 1, n), t)),
                                o(s, s.length, 0, [["exit", l, t], ["enter", e[n][1], t], ["exit", e[n][1], t], ["exit", i, t]]),
                                o(e, r - 1, n - r + 3, s),
                                n = r + s.length - 2;
                                break
                            }
                    }
                for (n = -1; ++n < e.length; )
                    "strikethroughSequenceTemporary" === e[n][1].type && (e[n][1].type = "data");
                return e
            }
        },
        null == t && (t = !0),
        {
            text: {
                126: n
            },
            insideSpan: {
                null: [n]
            },
            attentionMarkers: {
                null: [126]
            }
        }), {
            flow: {
                null: {
                    name: "table",
                    tokenize: tM,
                    resolveAll: tj
                }
            }
        }, {
            text: {
                91: tB
            }
        }])),
        c.push([{
            transforms: [eU],
            enter: {
                literalAutolink: eR,
                literalAutolinkEmail: eO,
                literalAutolinkHttp: eO,
                literalAutolinkWww: eO
            },
            exit: {
                literalAutolink: eV,
                literalAutolinkEmail: eq,
                literalAutolinkHttp: eH,
                literalAutolinkWww: eB
            }
        }, {
            enter: {
                gfmFootnoteCallString: e$,
                gfmFootnoteCall: eZ,
                gfmFootnoteDefinitionLabelString: eJ,
                gfmFootnoteDefinition: eK
            },
            exit: {
                gfmFootnoteCallString: eG,
                gfmFootnoteCall: eY,
                gfmFootnoteDefinitionLabelString: eX,
                gfmFootnoteDefinition: e1
            }
        }, {
            canContainEols: ["delete"],
            enter: {
                strikethrough: e3
            },
            exit: {
                strikethrough: e6
            }
        }, {
            enter: {
                table: tn,
                tableData: tl,
                tableHeader: tl,
                tableRow: ti
            },
            exit: {
                codeText: ts,
                table: tr,
                tableData: to,
                tableHeader: to,
                tableRow: to
            }
        }, {
            exit: {
                taskListCheckValueChecked: tc,
                taskListCheckValueUnchecked: tc,
                paragraph: ta
            }
        }]),
        a.push({
            extensions: [{
                unsafe: [{
                    character: "@",
                    before: "[+\\-.\\w]",
                    after: "[\\-.\\w]",
                    inConstruct: eM,
                    notInConstruct: ej
                }, {
                    character: ".",
                    before: "[Ww]",
                    after: "[\\-.\\w]",
                    inConstruct: eM,
                    notInConstruct: ej
                }, {
                    character: ":",
                    before: "[ps]",
                    after: "\\/",
                    inConstruct: eM,
                    notInConstruct: ej
                }]
            }, (r = !1,
            i && i.firstLineBlank && (r = !0),
            {
                handlers: {
                    footnoteDefinition: function(e, t, n, i) {
                        let o = n.createTracker(i)
                          , l = o.move("[^")
                          , s = n.enter("footnoteDefinition")
                          , u = n.enter("label");
                        return l += o.move(n.safe(n.associationId(e), {
                            before: l,
                            after: "]"
                        })),
                        u(),
                        l += o.move("]:"),
                        e.children && e.children.length > 0 && (o.shift(4),
                        l += o.move((r ? "\n" : " ") + n.indentLines(n.containerFlow(e, o.current()), r ? e4 : e2))),
                        s(),
                        l
                    },
                    footnoteReference: e0
                },
                unsafe: [{
                    character: "[",
                    inConstruct: ["label", "phrasing", "reference"]
                }]
            }), {
                unsafe: [{
                    character: "~",
                    inConstruct: "phrasing",
                    notInConstruct: e9
                }],
                handlers: {
                    delete: e5
                }
            }, function(e) {
                let t = e || {}
                  , n = t.tableCellPadding
                  , r = t.tablePipeAlign
                  , i = t.stringLength
                  , o = n ? " " : "|";
                return {
                    unsafe: [{
                        character: "\r",
                        inConstruct: "tableCell"
                    }, {
                        character: "\n",
                        inConstruct: "tableCell"
                    }, {
                        atBreak: !0,
                        character: "|",
                        after: "[	 :-]"
                    }, {
                        character: "|",
                        inConstruct: "tableCell"
                    }, {
                        atBreak: !0,
                        character: ":",
                        after: "-"
                    }, {
                        atBreak: !0,
                        character: "-",
                        after: "[:|-]"
                    }],
                    handlers: {
                        inlineCode: function(e, t, n) {
                            let r = te(e, t, n);
                            return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")),
                            r
                        },
                        table: function(e, t, n, r) {
                            return s(function(e, t, n) {
                                let r = e.children
                                  , i = -1
                                  , o = []
                                  , l = t.enter("table");
                                for (; ++i < r.length; )
                                    o[i] = u(r[i], t, n);
                                return l(),
                                o
                            }(e, n, r), e.align)
                        },
                        tableCell: l,
                        tableRow: function(e, t, n, r) {
                            let i = s([u(e, n, r)]);
                            return i.slice(0, i.indexOf("\n"))
                        }
                    }
                };
                function l(e, t, n, r) {
                    let i = n.enter("tableCell")
                      , l = n.enter("phrasing")
                      , s = n.containerPhrasing(e, {
                        ...r,
                        before: o,
                        after: o
                    });
                    return l(),
                    i(),
                    s
                }
                function s(e, t) {
                    return function(e, t) {
                        let n = t || {}
                          , r = (n.align || []).concat()
                          , i = n.stringLength || e7
                          , o = []
                          , l = []
                          , s = []
                          , u = []
                          , c = 0
                          , a = -1;
                        for (; ++a < e.length; ) {
                            let t = []
                              , r = []
                              , o = -1;
                            for (e[a].length > c && (c = e[a].length); ++o < e[a].length; ) {
                                var f;
                                let l = null == (f = e[a][o]) ? "" : String(f);
                                if (!1 !== n.alignDelimiters) {
                                    let e = i(l);
                                    r[o] = e,
                                    (void 0 === u[o] || e > u[o]) && (u[o] = e)
                                }
                                t.push(l)
                            }
                            l[a] = t,
                            s[a] = r
                        }
                        let h = -1;
                        if ("object" == typeof r && "length" in r)
                            for (; ++h < c; )
                                o[h] = e8(r[h]);
                        else {
                            let e = e8(r);
                            for (; ++h < c; )
                                o[h] = e
                        }
                        h = -1;
                        let d = []
                          , p = [];
                        for (; ++h < c; ) {
                            let e = o[h]
                              , t = ""
                              , r = "";
                            99 === e ? (t = ":",
                            r = ":") : 108 === e ? t = ":" : 114 === e && (r = ":");
                            let i = !1 === n.alignDelimiters ? 1 : Math.max(1, u[h] - t.length - r.length)
                              , l = t + "-".repeat(i) + r;
                            !1 !== n.alignDelimiters && ((i = t.length + i + r.length) > u[h] && (u[h] = i),
                            p[h] = i),
                            d[h] = l
                        }
                        l.splice(1, 0, d),
                        s.splice(1, 0, p),
                        a = -1;
                        let m = [];
                        for (; ++a < l.length; ) {
                            let e = l[a]
                              , t = s[a];
                            h = -1;
                            let r = [];
                            for (; ++h < c; ) {
                                let i = e[h] || ""
                                  , l = ""
                                  , s = "";
                                if (!1 !== n.alignDelimiters) {
                                    let e = u[h] - (t[h] || 0)
                                      , n = o[h];
                                    114 === n ? l = " ".repeat(e) : 99 === n ? e % 2 ? (l = " ".repeat(e / 2 + .5),
                                    s = " ".repeat(e / 2 - .5)) : s = l = " ".repeat(e / 2) : s = " ".repeat(e)
                                }
                                !1 === n.delimiterStart || h || r.push("|"),
                                !1 !== n.padding && (!1 !== n.alignDelimiters || "" !== i) && (!1 !== n.delimiterStart || h) && r.push(" "),
                                !1 !== n.alignDelimiters && r.push(l),
                                r.push(i),
                                !1 !== n.alignDelimiters && r.push(s),
                                !1 !== n.padding && r.push(" "),
                                (!1 !== n.delimiterEnd || h !== c - 1) && r.push("|")
                            }
                            m.push(!1 === n.delimiterEnd ? r.join("").replace(/ +$/, "") : r.join(""))
                        }
                        return m.join("\n")
                    }(e, {
                        align: t,
                        alignDelimiters: r,
                        padding: n,
                        stringLength: i
                    })
                }
                function u(e, t, n) {
                    let r = e.children
                      , i = -1
                      , o = []
                      , s = t.enter("tableRow");
                    for (; ++i < r.length; )
                        o[i] = l(r[i], e, t, n);
                    return s(),
                    o
                }
            }(i), {
                unsafe: [{
                    atBreak: !0,
                    character: "-",
                    after: "[:|-]"
                }],
                handlers: {
                    listItem: tf
                }
            }]
        })
    });
    function tQ(e) {
        let t = tN.parse(e)
          , n = new Map;
        for (let e of t.children)
            "definition" === e.type && n.set(e.identifier, e);
        return {
            tree: t,
            definitions: n
        }
    }
    e.s(["parseSafeMarkdown", 0, tQ, "unsafeMarkdownLinks", 0, function(e) {
        let {tree: t, definitions: n} = tQ(e)
          , r = new Set
          , i = e => {
            if ("link" !== e.type || tU(e.url) || r.add(e.url || "(empty link)"),
            "linkReference" === e.type) {
                let t = n.get(e.identifier)?.url;
                t && tU(t) || r.add(t ?? `[${e.label ?? e.identifier}]`)
            }
            if ("children" in e)
                for (let t of e.children)
                    i(t)
        }
        ;
        return i(t),
        [...r]
    }
    ], 271271);
    let tW = (0,
    n.memo)(function({text: e, variant: i, className: o}) {
        let {tree: l, definitions: s} = tQ(e)
          , u = "document" === i
          , c = l.children.map( (e, i) => (function e(i, o, l, c=!1) {
            if (l > 24)
                return (0,
                t.jsx)(n.Fragment, {
                    children: (0,
                    r.toString)(i)
                }, o);
            let a = "children" in i ? i.children.map( (t, n) => e(t, n, l + 1, c)) : null;
            switch (i.type) {
            case "text":
            case "html":
                return i.value;
            case "strong":
                return (0,
                t.jsx)("strong", {
                    children: a
                }, o);
            case "emphasis":
                return (0,
                t.jsx)("em", {
                    children: a
                }, o);
            case "delete":
                return (0,
                t.jsx)("del", {
                    children: a
                }, o);
            case "inlineCode":
                return (0,
                t.jsx)("code", {
                    children: i.value
                }, o);
            case "code":
                return (0,
                t.jsx)("pre", {
                    children: (0,
                    t.jsx)("code", {
                        children: i.value
                    })
                }, o);
            case "break":
                return (0,
                t.jsx)("br", {}, o);
            case "paragraph":
                return (0,
                t.jsx)("p", {
                    children: a
                }, o);
            case "heading":
                {
                    if (!u)
                        return (0,
                        t.jsx)("strong", {
                            className: "fd-chat-markdown__heading",
                            children: a
                        }, o);
                    let e = ["h3", "h3", "h4", "h5", "h6", "h6"][i.depth - 1];
                    return (0,
                    t.jsx)(e, {
                        children: a
                    }, o)
                }
            case "blockquote":
                return (0,
                t.jsx)("blockquote", {
                    children: a
                }, o);
            case "list":
                return i.ordered ? (0,
                t.jsx)("ol", {
                    start: i.start ?? 1,
                    children: a
                }, o) : (0,
                t.jsx)("ul", {
                    children: a
                }, o);
            case "listItem":
                return (0,
                t.jsx)("li", {
                    children: a
                }, o);
            case "table":
                {
                    if (!u)
                        return (0,
                        t.jsx)("table", {
                            children: (0,
                            t.jsx)("tbody", {
                                children: a
                            })
                        }, o);
                    let[n,...r] = i.children;
                    return (0,
                    t.jsx)("div", {
                        className: "fd-markdown-table",
                        children: (0,
                        t.jsxs)("table", {
                            children: [n && (0,
                            t.jsx)("thead", {
                                children: e(n, 0, l + 1, !0)
                            }), r.length > 0 && (0,
                            t.jsx)("tbody", {
                                children: r.map( (t, n) => e(t, n, l + 1))
                            })]
                        })
                    }, o)
                }
            case "tableRow":
                return (0,
                t.jsx)("tr", {
                    children: a
                }, o);
            case "tableCell":
                return u && c ? (0,
                t.jsx)("th", {
                    scope: "col",
                    children: a
                }, o) : (0,
                t.jsx)("td", {
                    children: a
                }, o);
            case "thematicBreak":
                return (0,
                t.jsx)("hr", {}, o);
            case "link":
            case "linkReference":
                {
                    let e = tU("link" === i.type ? i.url : s.get(i.identifier)?.url ?? "");
                    if (!e)
                        return (0,
                        t.jsx)(n.Fragment, {
                            children: a
                        }, o);
                    return (0,
                    t.jsxs)("a", {
                        href: e,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [a, u && (0,
                        t.jsx)("span", {
                            className: "sr-only",
                            children: " (opens in a new tab)"
                        })]
                    }, o)
                }
            case "image":
            case "imageReference":
                return i.alt ?? "";
            case "definition":
                return null;
            default:
                return (0,
                t.jsx)(n.Fragment, {
                    children: a
                }, o)
            }
        }
        )(e, i, 0));
        return u ? (0,
        t.jsx)("div", {
            className: o,
            children: c
        }) : (0,
        t.jsx)("span", {
            className: o ?? "fd-chat-markdown",
            children: c
        })
    });
    e.s(["SafeMarkdown", 0, tW], 196121)
}
, 104100, (e, t, n) => {
    "use strict";
    var r = Object.prototype.hasOwnProperty
      , i = Object.prototype.toString
      , o = Object.defineProperty
      , l = Object.getOwnPropertyDescriptor
      , s = function(e) {
        return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === i.call(e)
    }
      , u = function(e) {
        if (!e || "[object Object]" !== i.call(e))
            return !1;
        var t, n = r.call(e, "constructor"), o = e.constructor && e.constructor.prototype && r.call(e.constructor.prototype, "isPrototypeOf");
        if (e.constructor && !n && !o)
            return !1;
        for (t in e)
            ;
        return void 0 === t || r.call(e, t)
    }
      , c = function(e, t) {
        o && "__proto__" === t.name ? o(e, t.name, {
            enumerable: !0,
            configurable: !0,
            value: t.newValue,
            writable: !0
        }) : e[t.name] = t.newValue
    }
      , a = function(e, t) {
        if ("__proto__" === t) {
            if (!r.call(e, t))
                return;
            else if (l)
                return l(e, t).value
        }
        return e[t]
    };
    t.exports = function e() {
        var t, n, r, i, o, l, f = arguments[0], h = 1, d = arguments.length, p = !1;
        for ("boolean" == typeof f && (p = f,
        f = arguments[1] || {},
        h = 2),
        (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); h < d; ++h)
            if (t = arguments[h],
            null != t)
                for (n in t)
                    r = a(f, n),
                    f !== (i = a(t, n)) && (p && i && (u(i) || (o = s(i))) ? (o ? (o = !1,
                    l = r && s(r) ? r : []) : l = r && u(r) ? r : {},
                    c(f, {
                        name: n,
                        newValue: e(p, l, i)
                    })) : void 0 !== i && c(f, {
                        name: n,
                        newValue: i
                    }));
        return f
    }
}
, 175765, 420061, 834425, e => {
    "use strict";
    function t(e) {
        if (e)
            throw e
    }
    var n = e.i(104100);
    function r() {}
    function i(e) {
        if ("object" != typeof e || null === e)
            return !1;
        let t = Object.getPrototypeOf(e);
        return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    }
    function o(e) {
        return e && "object" == typeof e ? "position" in e || "type" in e ? s(e.position) : "start" in e || "end" in e ? s(e) : "line" in e || "column" in e ? l(e) : "" : ""
    }
    function l(e) {
        return u(e && e.line) + ":" + u(e && e.column)
    }
    function s(e) {
        return l(e && e.start) + "-" + l(e && e.end)
    }
    function u(e) {
        return e && "number" == typeof e ? e : 1
    }
    e.s(["ok", 0, r], 420061),
    e.s(["stringifyPosition", 0, o], 834425);
    class c extends Error {
        constructor(e, t, n) {
            super(),
            "string" == typeof t && (n = t,
            t = void 0);
            let r = ""
              , i = {}
              , l = !1;
            if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? {
                place: t
            } : "type" in t ? {
                ancestors: [t],
                place: t.position
            } : {
                ...t
            }),
            "string" == typeof e ? r = e : !i.cause && e && (l = !0,
            r = e.message,
            i.cause = e),
            !i.ruleId && !i.source && "string" == typeof n) {
                const e = n.indexOf(":");
                -1 === e ? i.ruleId = n : (i.source = n.slice(0, e),
                i.ruleId = n.slice(e + 1))
            }
            if (!i.place && i.ancestors && i.ancestors) {
                const e = i.ancestors[i.ancestors.length - 1];
                e && (i.place = e.position)
            }
            const s = i.place && "start" in i.place ? i.place.start : i.place;
            this.ancestors = i.ancestors || void 0,
            this.cause = i.cause || void 0,
            this.column = s ? s.column : void 0,
            this.fatal = void 0,
            this.file = "",
            this.message = r,
            this.line = s ? s.line : void 0,
            this.name = o(i.place) || "1:1",
            this.place = i.place || void 0,
            this.reason = this.message,
            this.ruleId = i.ruleId || void 0,
            this.source = i.source || void 0,
            this.stack = l && i.cause && "string" == typeof i.cause.stack ? i.cause.stack : "",
            this.actual = void 0,
            this.expected = void 0,
            this.note = void 0,
            this.url = void 0
        }
    }
    c.prototype.file = "",
    c.prototype.name = "",
    c.prototype.reason = "",
    c.prototype.message = "",
    c.prototype.stack = "",
    c.prototype.column = void 0,
    c.prototype.line = void 0,
    c.prototype.ancestors = void 0,
    c.prototype.cause = void 0,
    c.prototype.fatal = void 0,
    c.prototype.place = void 0,
    c.prototype.ruleId = void 0,
    c.prototype.source = void 0;
    let a = function(e, t) {
        let n;
        if (void 0 !== t && "string" != typeof t)
            throw TypeError('"ext" argument must be a string');
        p(e);
        let r = 0
          , i = -1
          , o = e.length;
        if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; o--; )
                if (47 === e.codePointAt(o)) {
                    if (n) {
                        r = o + 1;
                        break
                    }
                } else
                    i < 0 && (n = !0,
                    i = o + 1);
            return i < 0 ? "" : e.slice(r, i)
        }
        if (t === e)
            return "";
        let l = -1
          , s = t.length - 1;
        for (; o--; )
            if (47 === e.codePointAt(o)) {
                if (n) {
                    r = o + 1;
                    break
                }
            } else
                l < 0 && (n = !0,
                l = o + 1),
                s > -1 && (e.codePointAt(o) === t.codePointAt(s--) ? s < 0 && (i = o) : (s = -1,
                i = l));
        return r === i ? i = l : i < 0 && (i = e.length),
        e.slice(r, i)
    }
      , f = function(e) {
        let t;
        if (p(e),
        0 === e.length)
            return ".";
        let n = -1
          , r = e.length;
        for (; --r; )
            if (47 === e.codePointAt(r)) {
                if (t) {
                    n = r;
                    break
                }
            } else
                t || (t = !0);
        return n < 0 ? 47 === e.codePointAt(0) ? "/" : "." : 1 === n && 47 === e.codePointAt(0) ? "//" : e.slice(0, n)
    }
      , h = function(e) {
        let t;
        p(e);
        let n = e.length
          , r = -1
          , i = 0
          , o = -1
          , l = 0;
        for (; n--; ) {
            let s = e.codePointAt(n);
            if (47 === s) {
                if (t) {
                    i = n + 1;
                    break
                }
                continue
            }
            r < 0 && (t = !0,
            r = n + 1),
            46 === s ? o < 0 ? o = n : 1 !== l && (l = 1) : o > -1 && (l = -1)
        }
        return o < 0 || r < 0 || 0 === l || 1 === l && o === r - 1 && o === i + 1 ? "" : e.slice(o, r)
    }
      , d = function(...e) {
        var t;
        let n, r, i, o = -1;
        for (; ++o < e.length; )
            p(e[o]),
            e[o] && (i = void 0 === i ? e[o] : i + "/" + e[o]);
        return void 0 === i ? "." : (p(t = i),
        n = 47 === t.codePointAt(0),
        0 !== (r = function(e, t) {
            let n, r, i = "", o = 0, l = -1, s = 0, u = -1;
            for (; ++u <= e.length; ) {
                if (u < e.length)
                    n = e.codePointAt(u);
                else if (47 === n)
                    break;
                else
                    n = 47;
                if (47 === n) {
                    if (l === u - 1 || 1 === s)
                        ;
                    else if (l !== u - 1 && 2 === s) {
                        if (i.length < 2 || 2 !== o || 46 !== i.codePointAt(i.length - 1) || 46 !== i.codePointAt(i.length - 2)) {
                            if (i.length > 2) {
                                if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                    r < 0 ? (i = "",
                                    o = 0) : o = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"),
                                    l = u,
                                    s = 0;
                                    continue
                                }
                            } else if (i.length > 0) {
                                i = "",
                                o = 0,
                                l = u,
                                s = 0;
                                continue
                            }
                        }
                        t && (i = i.length > 0 ? i + "/.." : "..",
                        o = 2)
                    } else
                        i.length > 0 ? i += "/" + e.slice(l + 1, u) : i = e.slice(l + 1, u),
                        o = u - l - 1;
                    l = u,
                    s = 0
                } else
                    46 === n && s > -1 ? s++ : s = -1
            }
            return i
        }(t, !n)).length || n || (r = "."),
        r.length > 0 && 47 === t.codePointAt(t.length - 1) && (r += "/"),
        n ? "/" + r : r)
    };
    function p(e) {
        if ("string" != typeof e)
            throw TypeError("Path must be a string. Received " + JSON.stringify(e))
    }
    function m(e) {
        return !!(null !== e && "object" == typeof e && "href" in e && e.href && "protocol" in e && e.protocol && void 0 === e.auth)
    }
    let g = ["history", "path", "basename", "stem", "extname", "dirname"];
    class k {
        constructor(e) {
            let t, n;
            t = e ? m(e) ? {
                path: e
            } : "string" == typeof e || function(e) {
                return !!(e && "object" == typeof e && "byteLength" in e && "byteOffset" in e)
            }(e) ? {
                value: e
            } : e : {},
            this.cwd = "cwd" in t ? "" : "/",
            this.data = {},
            this.history = [],
            this.messages = [],
            this.value,
            this.map,
            this.result,
            this.stored;
            let r = -1;
            for (; ++r < g.length; ) {
                const e = g[r];
                e in t && void 0 !== t[e] && null !== t[e] && (this[e] = "history" === e ? [...t[e]] : t[e])
            }
            for (n in t)
                g.includes(n) || (this[n] = t[n])
        }
        get basename() {
            return "string" == typeof this.path ? a(this.path) : void 0
        }
        set basename(e) {
            y(e, "basename"),
            x(e, "basename"),
            this.path = d(this.dirname || "", e)
        }
        get dirname() {
            return "string" == typeof this.path ? f(this.path) : void 0
        }
        set dirname(e) {
            b(this.basename, "dirname"),
            this.path = d(e || "", this.basename)
        }
        get extname() {
            return "string" == typeof this.path ? h(this.path) : void 0
        }
        set extname(e) {
            if (x(e, "extname"),
            b(this.dirname, "extname"),
            e) {
                if (46 !== e.codePointAt(0))
                    throw Error("`extname` must start with `.`");
                if (e.includes(".", 1))
                    throw Error("`extname` cannot contain multiple dots")
            }
            this.path = d(this.dirname, this.stem + (e || ""))
        }
        get path() {
            return this.history[this.history.length - 1]
        }
        set path(e) {
            m(e) && (e = function(e) {
                if ("string" == typeof e)
                    e = new URL(e);
                else if (!m(e)) {
                    let t = TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
                    throw t.code = "ERR_INVALID_ARG_TYPE",
                    t
                }
                if ("file:" !== e.protocol) {
                    let e = TypeError("The URL must be of scheme file");
                    throw e.code = "ERR_INVALID_URL_SCHEME",
                    e
                }
                return function(e) {
                    if ("" !== e.hostname) {
                        let e = TypeError('File URL host must be "localhost" or empty on darwin');
                        throw e.code = "ERR_INVALID_FILE_URL_HOST",
                        e
                    }
                    let t = e.pathname
                      , n = -1;
                    for (; ++n < t.length; )
                        if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
                            let e = t.codePointAt(n + 2);
                            if (70 === e || 102 === e) {
                                let e = TypeError("File URL path must not include encoded / characters");
                                throw e.code = "ERR_INVALID_FILE_URL_PATH",
                                e
                            }
                        }
                    return decodeURIComponent(t)
                }(e)
            }(e)),
            y(e, "path"),
            this.path !== e && this.history.push(e)
        }
        get stem() {
            return "string" == typeof this.path ? a(this.path, this.extname) : void 0
        }
        set stem(e) {
            y(e, "stem"),
            x(e, "stem"),
            this.path = d(this.dirname || "", e + (this.extname || ""))
        }
        fail(e, t, n) {
            let r = this.message(e, t, n);
            throw r.fatal = !0,
            r
        }
        info(e, t, n) {
            let r = this.message(e, t, n);
            return r.fatal = void 0,
            r
        }
        message(e, t, n) {
            let r = new c(e,t,n);
            return this.path && (r.name = this.path + ":" + r.name,
            r.file = this.path),
            r.fatal = !1,
            this.messages.push(r),
            r
        }
        toString(e) {
            return void 0 === this.value ? "" : "string" == typeof this.value ? this.value : new TextDecoder(e || void 0).decode(this.value)
        }
    }
    function x(e, t) {
        if (e && e.includes("/"))
            throw Error("`" + t + "` cannot be a path: did not expect `/`")
    }
    function y(e, t) {
        if (!e)
            throw Error("`" + t + "` cannot be empty")
    }
    function b(e, t) {
        if (!e)
            throw Error("Setting `" + t + "` requires `path` to be set too")
    }
    let v = function(e) {
        let t = this.constructor.prototype
          , n = t[e]
          , r = function() {
            return n.apply(r, arguments)
        };
        return Object.setPrototypeOf(r, t),
        r
    }
      , w = {}.hasOwnProperty
      , S = new class e extends v {
        constructor() {
            super("copy"),
            this.Compiler = void 0,
            this.Parser = void 0,
            this.attachers = [],
            this.compiler = void 0,
            this.freezeIndex = -1,
            this.frozen = void 0,
            this.namespace = {},
            this.parser = void 0,
            this.transformers = function() {
                let e = []
                  , t = {
                    run: function(...t) {
                        let n = -1
                          , r = t.pop();
                        if ("function" != typeof r)
                            throw TypeError("Expected function as last argument, not " + r);
                        !function i(o, ...l) {
                            let s = e[++n]
                              , u = -1;
                            if (o)
                                return void r(o);
                            for (; ++u < t.length; )
                                (null === l[u] || void 0 === l[u]) && (l[u] = t[u]);
                            t = l,
                            s ? (function(e, t) {
                                let n;
                                return function(...t) {
                                    let o, l = e.length > t.length;
                                    l && t.push(r);
                                    try {
                                        o = e.apply(this, t)
                                    } catch (e) {
                                        if (l && n)
                                            throw e;
                                        return r(e)
                                    }
                                    l || (o && o.then && "function" == typeof o.then ? o.then(i, r) : o instanceof Error ? r(o) : i(o))
                                }
                                ;
                                function r(e, ...i) {
                                    n || (n = !0,
                                    t(e, ...i))
                                }
                                function i(e) {
                                    r(null, e)
                                }
                            }
                            )(s, i)(...l) : r(null, ...l)
                        }(null, ...t)
                    },
                    use: function(n) {
                        if ("function" != typeof n)
                            throw TypeError("Expected `middelware` to be a function, not " + n);
                        return e.push(n),
                        t
                    }
                };
                return t
            }()
        }
        copy() {
            let t = new e
              , r = -1;
            for (; ++r < this.attachers.length; ) {
                let e = this.attachers[r];
                t.use(...e)
            }
            return t.data((0,
            n.default)(!0, {}, this.namespace)),
            t
        }
        data(e, t) {
            return "string" == typeof e ? 2 == arguments.length ? (T("data", this.frozen),
            this.namespace[e] = t,
            this) : w.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (T("data", this.frozen),
            this.namespace = e,
            this) : this.namespace
        }
        freeze() {
            if (this.frozen)
                return this;
            for (; ++this.freezeIndex < this.attachers.length; ) {
                let[e,...t] = this.attachers[this.freezeIndex];
                if (!1 === t[0])
                    continue;
                !0 === t[0] && (t[0] = void 0);
                let n = e.call(this, ...t);
                "function" == typeof n && this.transformers.use(n)
            }
            return this.frozen = !0,
            this.freezeIndex = 1 / 0,
            this
        }
        parse(e) {
            this.freeze();
            let t = z(e)
              , n = this.parser || this.Parser;
            return C("parse", n),
            n(String(t), t)
        }
        process(e, t) {
            let n = this;
            return this.freeze(),
            C("process", this.parser || this.Parser),
            E("process", this.compiler || this.Compiler),
            t ? i(void 0, t) : new Promise(i);
            function i(i, o) {
                let l = z(e)
                  , s = n.parse(l);
                function u(e, n) {
                    e || !n ? o(e) : i ? i(n) : (r(),
                    t(void 0, n))
                }
                n.run(s, l, function(e, t, r) {
                    var i, o;
                    if (e || !t || !r)
                        return u(e);
                    let l = n.stringify(t, r);
                    "string" == typeof (i = l) || (o = i) && "object" == typeof o && "byteLength" in o && "byteOffset" in o ? r.value = l : r.result = l,
                    u(e, r)
                })
            }
        }
        processSync(e) {
            let n, i = !1;
            return this.freeze(),
            C("processSync", this.parser || this.Parser),
            E("processSync", this.compiler || this.Compiler),
            this.process(e, function(e, r) {
                i = !0,
                t(e),
                n = r
            }),
            I("processSync", "process", i),
            r(),
            n
        }
        run(e, t, n) {
            F(e),
            this.freeze();
            let i = this.transformers;
            return n || "function" != typeof t || (n = t,
            t = void 0),
            n ? o(void 0, n) : new Promise(o);
            function o(o, l) {
                r();
                let s = z(t);
                i.run(e, s, function(t, i, s) {
                    let u = i || e;
                    t ? l(t) : o ? o(u) : (r(),
                    n(void 0, u, s))
                })
            }
        }
        runSync(e, n) {
            let i, o = !1;
            return this.run(e, n, function(e, n) {
                t(e),
                i = n,
                o = !0
            }),
            I("runSync", "run", o),
            r(),
            i
        }
        stringify(e, t) {
            this.freeze();
            let n = z(t)
              , r = this.compiler || this.Compiler;
            return E("stringify", r),
            F(e),
            r(e, n)
        }
        use(e, ...t) {
            let r = this.attachers
              , o = this.namespace;
            if (T("use", this.frozen),
            null == e)
                ;
            else if ("function" == typeof e)
                u(e, t);
            else if ("object" == typeof e)
                Array.isArray(e) ? s(e) : l(e);
            else
                throw TypeError("Expected usable value, not `" + e + "`");
            return this;
            function l(e) {
                if (!("plugins" in e) && !("settings" in e))
                    throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
                s(e.plugins),
                e.settings && (o.settings = (0,
                n.default)(!0, o.settings, e.settings))
            }
            function s(e) {
                let t = -1;
                if (null == e)
                    ;
                else if (Array.isArray(e))
                    for (; ++t < e.length; )
                        !function(e) {
                            if ("function" == typeof e)
                                u(e, []);
                            else if ("object" == typeof e)
                                if (Array.isArray(e)) {
                                    let[t,...n] = e;
                                    u(t, n)
                                } else
                                    l(e);
                            else
                                throw TypeError("Expected usable value, not `" + e + "`")
                        }(e[t]);
                else
                    throw TypeError("Expected a list of plugins, not `" + e + "`")
            }
            function u(e, t) {
                let o = -1
                  , l = -1;
                for (; ++o < r.length; )
                    if (r[o][0] === e) {
                        l = o;
                        break
                    }
                if (-1 === l)
                    r.push([e, ...t]);
                else if (t.length > 0) {
                    let[o,...s] = t
                      , u = r[l][1];
                    i(u) && i(o) && (o = (0,
                    n.default)(!0, u, o)),
                    r[l] = [e, o, ...s]
                }
            }
        }
    }
    ().freeze();
    function C(e, t) {
        if ("function" != typeof t)
            throw TypeError("Cannot `" + e + "` without `parser`")
    }
    function E(e, t) {
        if ("function" != typeof t)
            throw TypeError("Cannot `" + e + "` without `compiler`")
    }
    function T(e, t) {
        if (t)
            throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
    }
    function F(e) {
        if (!i(e) || "string" != typeof e.type)
            throw TypeError("Expected node, got `" + e + "`")
    }
    function I(e, t, n) {
        if (!n)
            throw Error("`" + e + "` finished async. Use `" + t + "` instead")
    }
    function z(e) {
        var t;
        return (t = e) && "object" == typeof t && "message" in t && "messages" in t ? e : new k(e)
    }
    e.s(["unified", 0, S], 175765)
}
, 900065, e => {
    "use strict";
    let t = {};
    function n(e, t, n) {
        var i;
        if ((i = e) && "object" == typeof i) {
            if ("value" in e)
                return "html" !== e.type || n ? e.value : "";
            if (t && "alt" in e && e.alt)
                return e.alt;
            if ("children" in e)
                return r(e.children, t, n)
        }
        return Array.isArray(e) ? r(e, t, n) : ""
    }
    function r(e, t, r) {
        let i = []
          , o = -1;
        for (; ++o < e.length; )
            i[o] = n(e[o], t, r);
        return i.join("")
    }
    e.s(["toString", 0, function(e, r) {
        let i = r || t;
        return n(e, "boolean" != typeof i.includeImageAlt || i.includeImageAlt, "boolean" != typeof i.includeHtml || i.includeHtml)
    }
    ])
}
]);
