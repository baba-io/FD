(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 295692, 75830, 586318, 842727, 832006, e => {
    "use strict";
    var t = e.i(271645)
      , n = e.i(981140)
      , r = e.i(820783)
      , o = e.i(30030)
      , i = e.i(369340)
      , l = e.i(248425)
      , u = Object.defineProperty
      , s = (e, t) => u(e, "name", {
        value: t,
        configurable: !0
    });
    function a(e) {
        let n = t.forwardRef( (n, o) => {
            let {children: i, ...l} = n
              , u = null
              , s = !1
              , a = [];
            g(i) && "function" == typeof b && (i = b(i._payload)),
            t.Children.forEach(i, e => {
                if (h(e)) {
                    s = !0;
                    let t = "child" in e.props ? e.props.child : e.props.children;
                    g(t) && "function" == typeof b && (t = b(t._payload)),
                    u = d(e, t),
                    a.push(u?.props?.children)
                } else
                    a.push(e)
            }
            ),
            u ? u = t.cloneElement(u, void 0, a) : !s && 1 === t.Children.count(i) && t.isValidElement(i) && (u = i);
            let c = u ? p(u) : void 0
              , m = (0,
            r.useComposedRefs)(o, c);
            if (!u) {
                if (i || 0 === i)
                    throw Error(s ? y(e) : w(e));
                return i
            }
            let v = f(l, u.props ?? {});
            return u.type !== t.Fragment && (v.ref = o ? m : c),
            t.cloneElement(u, v)
        }
        );
        return n.displayName = `${e}.Slot`,
        n
    }
    s(a, "createSlot");
    var c = Symbol.for("radix.slottable");
    s(function(e) {
        let t = s(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`,
        t.__radixId = c,
        t
    }, "createSlottable");
    var d = s( (e, n) => {
        if ("child" in e.props) {
            let n = e.props.child;
            return t.isValidElement(n) ? t.cloneElement(n, void 0, e.props.children(n.props.children)) : null
        }
        return t.isValidElement(n) ? n : null
    }
    , "getSlottableElementFromSlottable");
    function f(e, t) {
        let n = {
            ...t
        };
        for (let r in t) {
            let o = e[r]
              , i = t[r];
            /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                let t = i(...e);
                return o(...e),
                t
            }
            : o && (n[r] = o) : "style" === r ? n[r] = {
                ...o,
                ...i
            } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
        }
        return {
            ...e,
            ...n
        }
    }
    function p(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
          , n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (n = (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
    }
    function h(e) {
        return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
    }
    s(f, "mergeProps"),
    s(p, "getElementRef"),
    s(h, "isSlottable");
    var m = Symbol.for("react.lazy");
    function g(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === m && "_payload" in e && v(e._payload)
    }
    function v(e) {
        return "object" == typeof e && null !== e && "then" in e
    }
    s(g, "isLazyComponent"),
    s(v, "isPromiseLike");
    var w = s(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError")
      , y = s(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError")
      , b = t[" use ".trim().toString()]
      , x = e.i(843476)
      , R = Object.defineProperty
      , C = (e, t) => R(e, "name", {
        value: t,
        configurable: !0
    });
    function S(e) {
        let n = e + "CollectionProvider"
          , [i,l] = (0,
        o.createContextScope)(n)
          , [u,s] = i(n, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        })
          , c = C(e => {
            let {scope: n, children: r} = e
              , o = t.useRef(null)
              , i = t.useRef(new Map).current;
            return (0,
            x.jsx)(u, {
                scope: n,
                itemMap: i,
                collectionRef: o,
                children: r
            })
        }
        , "CollectionProvider");
        c.displayName = n;
        let d = e + "CollectionSlot"
          , f = a(d)
          , p = t.forwardRef( (e, t) => {
            let {scope: n, children: o} = e
              , i = s(d, n)
              , l = (0,
            r.useComposedRefs)(t, i.collectionRef);
            return (0,
            x.jsx)(f, {
                ref: l,
                children: o
            })
        }
        );
        p.displayName = d;
        let h = e + "CollectionItemSlot"
          , m = "data-radix-collection-item"
          , g = a(h)
          , v = t.forwardRef( (e, n) => {
            let {scope: o, children: i, ...l} = e
              , u = t.useRef(null)
              , a = (0,
            r.useComposedRefs)(n, u)
              , c = s(h, o);
            return t.useEffect( () => (c.itemMap.set(u, {
                ref: u,
                ...l
            }),
            () => void c.itemMap.delete(u))),
            (0,
            x.jsx)(g, {
                ...{
                    [m]: ""
                },
                ref: a,
                children: i
            })
        }
        );
        function w(n) {
            let r = s(e + "CollectionConsumer", n);
            return t.useCallback( () => {
                let e = r.collectionRef.current;
                if (!e)
                    return [];
                let t = Array.from(e.querySelectorAll(`[${m}]`));
                return Array.from(r.itemMap.values()).sort( (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
            }
            , [r.collectionRef, r.itemMap])
        }
        return v.displayName = h,
        C(w, "useCollection"),
        [{
            Provider: c,
            Slot: p,
            ItemSlot: v
        }, w, l]
    }
    C(S, "createCollection");
    var M = new WeakMap
      , E = class e extends Map {
        static{C(this, "OrderedDict")
        } #e;
        constructor(e) {
            super(e),
            this.#e = [...super.keys()],
            M.set(this, !0)
        }
        set(e, t) {
            return M.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)),
            super.set(e, t),
            this
        }
        insert(e, t, n) {
            let r, o = this.has(t), i = this.#e.length, l = D(e), u = l >= 0 ? l : i + l, s = u < 0 || u >= i ? -1 : u;
            if (s === this.size || o && s === this.size - 1 || -1 === s)
                return this.set(t, n),
                this;
            let a = this.size + +!o;
            l < 0 && u++;
            let c = [...this.#e]
              , d = !1;
            for (let e = u; e < a; e++)
                if (u === e) {
                    let i = c[e];
                    c[e] === t && (i = c[e + 1]),
                    o && this.delete(t),
                    r = this.get(i),
                    this.set(t, n)
                } else {
                    d || c[e - 1] !== t || (d = !0);
                    let n = c[d ? e : e - 1]
                      , o = r;
                    r = this.get(n),
                    this.delete(n),
                    this.set(n, o)
                }
            return this
        }
        with(t, n, r) {
            let o = new e(this);
            return o.insert(t, n, r),
            o
        }
        before(e) {
            let t = this.#e.indexOf(e) - 1;
            if (!(t < 0))
                return this.entryAt(t)
        }
        setBefore(e, t, n) {
            let r = this.#e.indexOf(e);
            return -1 === r ? this : this.insert(r, t, n)
        }
        after(e) {
            let t = this.#e.indexOf(e);
            if (-1 !== (t = -1 === t || t === this.size - 1 ? -1 : t + 1))
                return this.entryAt(t)
        }
        setAfter(e, t, n) {
            let r = this.#e.indexOf(e);
            return -1 === r ? this : this.insert(r + 1, t, n)
        }
        first() {
            return this.entryAt(0)
        }
        last() {
            return this.entryAt(-1)
        }
        clear() {
            return this.#e = [],
            super.clear()
        }
        delete(e) {
            let t = super.delete(e);
            return t && this.#e.splice(this.#e.indexOf(e), 1),
            t
        }
        deleteAt(e) {
            let t = this.keyAt(e);
            return void 0 !== t && this.delete(t)
        }
        at(e) {
            let t = I(this.#e, e);
            if (void 0 !== t)
                return this.get(t)
        }
        entryAt(e) {
            let t = I(this.#e, e);
            if (void 0 !== t)
                return [t, this.get(t)]
        }
        indexOf(e) {
            return this.#e.indexOf(e)
        }
        keyAt(e) {
            return I(this.#e, e)
        }
        from(e, t) {
            let n = this.indexOf(e);
            if (-1 === n)
                return;
            let r = n + t;
            return r < 0 && (r = 0),
            r >= this.size && (r = this.size - 1),
            this.at(r)
        }
        keyFrom(e, t) {
            let n = this.indexOf(e);
            if (-1 === n)
                return;
            let r = n + t;
            return r < 0 && (r = 0),
            r >= this.size && (r = this.size - 1),
            this.keyAt(r)
        }
        find(e, t) {
            let n = 0;
            for (let r of this) {
                if (Reflect.apply(e, t, [r, n, this]))
                    return r;
                n++
            }
        }
        findIndex(e, t) {
            let n = 0;
            for (let r of this) {
                if (Reflect.apply(e, t, [r, n, this]))
                    return n;
                n++
            }
            return -1
        }
        filter(t, n) {
            let r = []
              , o = 0;
            for (let e of this)
                Reflect.apply(t, n, [e, o, this]) && r.push(e),
                o++;
            return new e(r)
        }
        map(t, n) {
            let r = []
              , o = 0;
            for (let e of this)
                r.push([e[0], Reflect.apply(t, n, [e, o, this])]),
                o++;
            return new e(r)
        }
        reduce(...e) {
            let[t,n] = e
              , r = 0
              , o = n ?? this.at(0);
            for (let n of this)
                o = 0 === r && 1 === e.length ? n : Reflect.apply(t, this, [o, n, r, this]),
                r++;
            return o
        }
        reduceRight(...e) {
            let[t,n] = e
              , r = n ?? this.at(-1);
            for (let n = this.size - 1; n >= 0; n--) {
                let o = this.at(n);
                r = n === this.size - 1 && 1 === e.length ? o : Reflect.apply(t, this, [r, o, n, this])
            }
            return r
        }
        toSorted(t) {
            return new e([...this.entries()].sort(t))
        }
        toReversed() {
            let t = new e;
            for (let e = this.size - 1; e >= 0; e--) {
                let n = this.keyAt(e)
                  , r = this.get(n);
                t.set(n, r)
            }
            return t
        }
        toSpliced(...t) {
            let n = [...this.entries()];
            return n.splice(...t),
            new e(n)
        }
        slice(t, n) {
            let r = new e
              , o = this.size - 1;
            if (void 0 === t)
                return r;
            t < 0 && (t += this.size),
            void 0 !== n && n > 0 && (o = n - 1);
            for (let e = t; e <= o; e++) {
                let t = this.keyAt(e)
                  , n = this.get(t);
                r.set(t, n)
            }
            return r
        }
        every(e, t) {
            let n = 0;
            for (let r of this) {
                if (!Reflect.apply(e, t, [r, n, this]))
                    return !1;
                n++
            }
            return !0
        }
        some(e, t) {
            let n = 0;
            for (let r of this) {
                if (Reflect.apply(e, t, [r, n, this]))
                    return !0;
                n++
            }
            return !1
        }
    }
    ;
    function I(e, t) {
        if ("at" in Array.prototype)
            return Array.prototype.at.call(e, t);
        let n = j(e, t);
        return -1 === n ? void 0 : e[n]
    }
    function j(e, t) {
        let n = e.length
          , r = D(t)
          , o = r >= 0 ? r : n + r;
        return o < 0 || o >= n ? -1 : o
    }
    function D(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
    }
    function P(e, t) {
        if (e === t)
            return !0;
        if ("object" != typeof e || "object" != typeof t || null == e || null == t)
            return !1;
        let n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (let r of n)
            if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r])
                return !1;
        return !0
    }
    function k(e, t) {
        return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
    }
    function O(e, t) {
        return e[1].element && t[1].element ? k(e[1].element, t[1].element) ? -1 : 1 : 0
    }
    function _(e) {
        return new MutationObserver(t => {
            for (let n of t)
                if ("childList" === n.type)
                    return void e()
        }
        )
    }
    C(I, "at"),
    C(j, "toSafeIndex"),
    C(D, "toSafeInteger"),
    C(function(e) {
        let n = e + "CollectionProvider"
          , [i,l] = (0,
        o.createContextScope)(n)
          , [u,s] = i(n, {
            collectionElement: null,
            collectionRef: {
                current: null
            },
            collectionRefObject: {
                current: null
            },
            itemMap: new E,
            setItemMap: C( () => void 0, "setItemMap")
        })
          , c = C( ({state: e, ...t}) => e ? (0,
        x.jsx)(f, {
            ...t,
            state: e
        }) : (0,
        x.jsx)(d, {
            ...t
        }), "CollectionProvider");
        c.displayName = n;
        let d = C(e => {
            let t = y();
            return (0,
            x.jsx)(f, {
                ...e,
                state: t
            })
        }
        , "CollectionInit");
        d.displayName = n + "Init";
        let f = C(e => {
            let {scope: n, children: o, state: i} = e
              , l = t.useRef(null)
              , [s,a] = t.useState(null)
              , c = (0,
            r.useComposedRefs)(l, a)
              , [d,f] = i;
            return t.useEffect( () => {
                if (!s)
                    return;
                let e = _( () => {}
                );
                return e.observe(s, {
                    childList: !0,
                    subtree: !0
                }),
                () => {
                    e.disconnect()
                }
            }
            , [s]),
            (0,
            x.jsx)(u, {
                scope: n,
                itemMap: d,
                setItemMap: f,
                collectionRef: c,
                collectionRefObject: l,
                collectionElement: s,
                children: o
            })
        }
        , "CollectionProviderImpl");
        f.displayName = n + "Impl";
        let p = e + "CollectionSlot"
          , h = a(p)
          , m = t.forwardRef( (e, t) => {
            let {scope: n, children: o} = e
              , i = s(p, n)
              , l = (0,
            r.useComposedRefs)(t, i.collectionRef);
            return (0,
            x.jsx)(h, {
                ref: l,
                children: o
            })
        }
        );
        m.displayName = p;
        let g = e + "CollectionItemSlot"
          , v = a(g)
          , w = t.forwardRef( (e, n) => {
            let {scope: o, children: i, ...l} = e
              , u = t.useRef(null)
              , [a,c] = t.useState(null)
              , d = (0,
            r.useComposedRefs)(n, u, c)
              , {setItemMap: f} = s(g, o)
              , p = t.useRef(l);
            P(p.current, l) || (p.current = l);
            let h = p.current;
            return t.useEffect( () => (f(e => a ? e.has(a) ? e.set(a, {
                ...h,
                element: a
            }).toSorted(O) : (e.set(a, {
                ...h,
                element: a
            }),
            e.toSorted(O)) : e),
            () => {
                f(e => a && e.has(a) ? (e.delete(a),
                new E(e)) : e)
            }
            ), [a, h, f]),
            (0,
            x.jsx)(v, {
                "data-radix-collection-item": "",
                ref: d,
                children: i
            })
        }
        );
        function y() {
            return t.useState(new E)
        }
        function b(t) {
            let {itemMap: n} = s(e + "CollectionConsumer", t);
            return n
        }
        return w.displayName = g,
        C(y, "useInitCollection"),
        C(b, "useCollection"),
        [{
            Provider: c,
            Slot: m,
            ItemSlot: w
        }, {
            createCollectionScope: l,
            useCollection: b,
            useInitCollection: y
        }]
    }, "createCollection"),
    C(P, "shallowEqual"),
    C(k, "isElementPreceding"),
    C(O, "sortByDocumentPosition"),
    C(_, "getChildListObserver"),
    e.s(["createCollection", 0, S], 75830);
    var A = Object.defineProperty
      , T = t.createContext(void 0);
    function F(e) {
        let n = t.useContext(T);
        return e || n || "ltr"
    }
    A(F, "name", {
        value: "useDirection",
        configurable: !0
    }),
    e.s(["useDirection", 0, F], 586318);
    var L = e.i(726330)
      , H = e.i(303536)
      , K = e.i(765491)
      , G = e.i(610772)
      , N = e.i(853660)
      , z = e.i(774606)
      , $ = e.i(296626)
      , V = e.i(30207)
      , B = e.i(934620)
      , U = Object.defineProperty
      , W = (e, t) => U(e, "name", {
        value: t,
        configurable: !0
    })
      , X = !1;
    function Z() {
        let[e,n] = t.useState(X);
        return t.useEffect( () => {
            X || (X = !0,
            n(!0))
        }
        , []),
        e
    }
    W(Z, "useIsHydrated");
    var q = t[" useSyncExternalStore ".trim().toString()];
    function Y() {
        return () => {}
    }
    function J() {
        return q(Y, () => !0, () => !1)
    }
    W(Y, "subscribe"),
    W(J, "useIsHydratedModern");
    var Q = "function" == typeof q ? J : Z
      , ee = Object.defineProperty
      , et = (e, t) => ee(e, "name", {
        value: t,
        configurable: !0
    })
      , en = "rovingFocusGroup.onEntryFocus"
      , er = {
        bubbles: !1,
        cancelable: !0
    }
      , eo = "RovingFocusGroup"
      , [ei,el,eu] = S(eo)
      , [es,ea] = (0,
    o.createContextScope)(eo, [eu])
      , [ec,ed] = es(eo)
      , ef = t.forwardRef(et(function(e, t) {
        return (0,
        x.jsx)(ei.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0,
            x.jsx)(ei.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: (0,
                x.jsx)(ep, {
                    ...e,
                    ref: t
                })
            })
        })
    }, "RovingFocusGroup"))
      , ep = t.forwardRef(et(function(e, o) {
        let {__scopeRovingFocusGroup: u, orientation: s, loop: a=!1, dir: c, currentTabStopId: d, defaultCurrentTabStopId: f, onCurrentTabStopIdChange: p, onEntryFocus: h, preventScrollOnEntryFocus: m=!1, ...g} = e
          , v = t.useRef(null)
          , w = (0,
        r.useComposedRefs)(o, v)
          , y = F(c)
          , [b,R] = (0,
        i.useControllableState)({
            prop: d,
            defaultProp: f ?? null,
            onChange: p,
            caller: eo
        })
          , [C,S] = t.useState(!1)
          , M = (0,
        V.useCallbackRef)(h)
          , E = el(u)
          , I = t.useRef(!1)
          , [j,D] = t.useState(0);
        return t.useEffect( () => {
            let e = v.current;
            if (e)
                return e.addEventListener(en, M),
                () => e.removeEventListener(en, M)
        }
        , [M]),
        (0,
        x.jsx)(ec, {
            scope: u,
            orientation: s,
            dir: y,
            loop: a,
            currentTabStopId: b,
            onItemFocus: t.useCallback(e => R(e), [R]),
            onItemShiftTab: t.useCallback( () => S(!0), []),
            onFocusableItemAdd: t.useCallback( () => D(e => e + 1), []),
            onFocusableItemRemove: t.useCallback( () => D(e => e - 1), []),
            children: (0,
            x.jsx)(l.Primitive.div, {
                tabIndex: C || 0 === j ? -1 : 0,
                "data-orientation": s,
                ...g,
                ref: w,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: (0,
                n.composeEventHandlers)(e.onMouseDown, () => {
                    I.current = !0
                }
                ),
                onFocus: (0,
                n.composeEventHandlers)(e.onFocus, e => {
                    let t = !I.current;
                    if (e.target === e.currentTarget && t && !C) {
                        let t = new CustomEvent(en,er);
                        if (e.currentTarget.dispatchEvent(t),
                        !t.defaultPrevented) {
                            let e = E().filter(e => e.focusable);
                            ew([e.find(e => e.active), e.find(e => e.id === b), ...e].filter(Boolean).map(e => e.ref.current), m)
                        }
                    }
                    I.current = !1
                }
                ),
                onBlur: (0,
                n.composeEventHandlers)(e.onBlur, () => S(!1))
            })
        })
    }, "RovingFocusGroupImpl"))
      , eh = t.forwardRef(et(function(e, r) {
        let {__scopeRovingFocusGroup: o, focusable: i=!0, active: u=!1, tabStopId: s, children: a, ...c} = e
          , d = (0,
        G.useId)()
          , f = s || d
          , p = ed("RovingFocusGroupItem", o)
          , h = p.currentTabStopId === f
          , m = el(o)
          , {onFocusableItemAdd: g, onFocusableItemRemove: v, currentTabStopId: w} = p
          , y = Q();
        return (0,
        B.useLayoutEffect)( () => {
            if (y && i)
                return g(),
                () => v()
        }
        , [y, i, g, v]),
        t.useEffect( () => {
            if (!y && i)
                return g(),
                () => v()
        }
        , [y, i, g, v]),
        (0,
        x.jsx)(ei.ItemSlot, {
            scope: o,
            id: f,
            focusable: i,
            active: u,
            children: (0,
            x.jsx)(l.Primitive.span, {
                tabIndex: h ? 0 : -1,
                "data-orientation": p.orientation,
                ...c,
                ref: r,
                onMouseDown: (0,
                n.composeEventHandlers)(e.onMouseDown, e => {
                    i ? p.onItemFocus(f) : e.preventDefault()
                }
                ),
                onFocus: (0,
                n.composeEventHandlers)(e.onFocus, () => p.onItemFocus(f)),
                onKeyDown: (0,
                n.composeEventHandlers)(e.onKeyDown, e => {
                    if ("Tab" === e.key && e.shiftKey)
                        return void p.onItemShiftTab();
                    if (e.target !== e.currentTarget)
                        return;
                    let t = ev(e, p.orientation, p.dir);
                    if (void 0 !== t) {
                        if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                            return;
                        e.preventDefault();
                        let n = m().filter(e => e.focusable).map(e => e.ref.current);
                        if ("last" === t)
                            n.reverse();
                        else if ("prev" === t || "next" === t) {
                            "prev" === t && n.reverse();
                            let r = n.indexOf(e.currentTarget);
                            n = p.loop ? ey(n, r + 1) : n.slice(r + 1)
                        }
                        setTimeout( () => ew(n))
                    }
                }
                ),
                children: "function" == typeof a ? a({
                    isCurrentTabStop: h,
                    hasTabStop: null != w
                }) : a
            })
        })
    }, "RovingFocusGroupItem"))
      , em = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function eg(e, t) {
        return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
    }
    function ev(e, t, n) {
        let r = eg(e.key, n);
        if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r)))
            return em[r]
    }
    function ew(e, t=!1) {
        let n = document.activeElement;
        for (let r of e)
            if (r === n || (r.focus({
                preventScroll: t
            }),
            document.activeElement !== n))
                return
    }
    function ey(e, t) {
        return e.map( (n, r) => e[(t + r) % e.length])
    }
    et(eg, "getDirectionAwareKey"),
    et(ev, "getFocusIntent"),
    et(ew, "focusFirst"),
    et(ey, "wrapArray"),
    e.s(["Item", 0, eh, "Root", 0, ef, "createRovingFocusGroupScope", 0, ea], 842727);
    var eb = Object.defineProperty
      , ex = (e, t) => eb(e, "name", {
        value: t,
        configurable: !0
    });
    function eR(e) {
        let n = t.forwardRef( (n, o) => {
            let {children: i, ...l} = n
              , u = null
              , s = !1
              , a = [];
            eD(i) && "function" == typeof e_ && (i = e_(i._payload)),
            t.Children.forEach(i, e => {
                if (eI(e)) {
                    s = !0;
                    let t = "child" in e.props ? e.props.child : e.props.children;
                    eD(t) && "function" == typeof e_ && (t = e_(t._payload)),
                    u = eS(e, t),
                    a.push(u?.props?.children)
                } else
                    a.push(e)
            }
            ),
            u ? u = t.cloneElement(u, void 0, a) : !s && 1 === t.Children.count(i) && t.isValidElement(i) && (u = i);
            let c = u ? eE(u) : void 0
              , d = (0,
            r.useComposedRefs)(o, c);
            if (!u) {
                if (i || 0 === i)
                    throw Error(s ? eO(e) : ek(e));
                return i
            }
            let f = eM(l, u.props ?? {});
            return u.type !== t.Fragment && (f.ref = o ? d : c),
            t.cloneElement(u, f)
        }
        );
        return n.displayName = `${e}.Slot`,
        n
    }
    ex(eR, "createSlot");
    var eC = Symbol.for("radix.slottable");
    ex(function(e) {
        let t = ex(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`,
        t.__radixId = eC,
        t
    }, "createSlottable");
    var eS = ex( (e, n) => {
        if ("child" in e.props) {
            let n = e.props.child;
            return t.isValidElement(n) ? t.cloneElement(n, void 0, e.props.children(n.props.children)) : null
        }
        return t.isValidElement(n) ? n : null
    }
    , "getSlottableElementFromSlottable");
    function eM(e, t) {
        let n = {
            ...t
        };
        for (let r in t) {
            let o = e[r]
              , i = t[r];
            /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                let t = i(...e);
                return o(...e),
                t
            }
            : o && (n[r] = o) : "style" === r ? n[r] = {
                ...o,
                ...i
            } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
        }
        return {
            ...e,
            ...n
        }
    }
    function eE(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
          , n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (n = (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
    }
    function eI(e) {
        return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === eC
    }
    ex(eM, "mergeProps"),
    ex(eE, "getElementRef"),
    ex(eI, "isSlottable");
    var ej = Symbol.for("react.lazy");
    function eD(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === ej && "_payload" in e && eP(e._payload)
    }
    function eP(e) {
        return "object" == typeof e && null !== e && "then" in e
    }
    ex(eD, "isLazyComponent"),
    ex(eP, "isPromiseLike");
    var ek = ex(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError")
      , eO = ex(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError")
      , e_ = t[" use ".trim().toString()]
      , eA = e.i(186312)
      , eT = e.i(985369)
      , eF = Object.defineProperty
      , eL = (e, t) => eF(e, "name", {
        value: t,
        configurable: !0
    })
      , eH = ["Enter", " "]
      , eK = ["ArrowUp", "PageDown", "End"]
      , eG = ["ArrowDown", "PageUp", "Home", ...eK]
      , eN = {
        ltr: [...eH, "ArrowRight"],
        rtl: [...eH, "ArrowLeft"]
    }
      , ez = {
        ltr: ["ArrowLeft"],
        rtl: ["ArrowRight"]
    }
      , e$ = "Menu"
      , [eV,eB,eU] = S(e$)
      , [eW,eX] = (0,
    o.createContextScope)(e$, [eU, N.createPopperScope, ea])
      , eZ = (0,
    N.createPopperScope)()
      , eq = ea()
      , [eY,eJ] = eW(e$)
      , [eQ,e0] = eW(e$)
      , e1 = eL(e => {
        let {__scopeMenu: n, open: r=!1, children: o, dir: i, onOpenChange: l, modal: u=!0} = e
          , s = eZ(n)
          , [a,c] = t.useState(null)
          , d = t.useRef(!1)
          , f = (0,
        V.useCallbackRef)(l)
          , p = F(i);
        return t.useEffect( () => {
            let e = eL( () => {
                d.current = !0,
                document.addEventListener("pointerdown", t, {
                    capture: !0,
                    once: !0
                }),
                document.addEventListener("pointermove", t, {
                    capture: !0,
                    once: !0
                })
            }
            , "handleKeyDown")
              , t = eL( () => d.current = !1, "handlePointer");
            return document.addEventListener("keydown", e, {
                capture: !0
            }),
            () => {
                document.removeEventListener("keydown", e, {
                    capture: !0
                }),
                document.removeEventListener("pointerdown", t, {
                    capture: !0
                }),
                document.removeEventListener("pointermove", t, {
                    capture: !0
                })
            }
        }
        , []),
        t.useEffect( () => {
            if (!r)
                return;
            let e = eL( () => f(!1), "handleBlur");
            return window.addEventListener("blur", e),
            () => window.removeEventListener("blur", e)
        }
        , [r, f]),
        (0,
        x.jsx)(N.Root, {
            ...s,
            children: (0,
            x.jsx)(eY, {
                scope: n,
                open: r,
                onOpenChange: f,
                content: a,
                onContentChange: c,
                children: (0,
                x.jsx)(eQ, {
                    scope: n,
                    onClose: t.useCallback( () => f(!1), [f]),
                    isUsingKeyboardRef: d,
                    dir: p,
                    modal: u,
                    children: o
                })
            })
        })
    }
    , "Menu")
      , e6 = t.forwardRef(eL(function(e, t) {
        let {__scopeMenu: n, ...r} = e
          , o = eZ(n);
        return (0,
        x.jsx)(N.Anchor, {
            ...o,
            ...r,
            ref: t
        })
    }, "MenuAnchor"))
      , e3 = "MenuPortal"
      , [e2,e8] = eW(e3, {
        forceMount: void 0
    })
      , e5 = eL(e => {
        let {__scopeMenu: t, forceMount: n, children: r, container: o} = e
          , i = eJ(e3, t);
        return (0,
        x.jsx)(e2, {
            scope: t,
            forceMount: n,
            children: (0,
            x.jsx)($.Presence, {
                present: n || i.open,
                children: (0,
                x.jsx)(z.Portal, {
                    asChild: !0,
                    container: o,
                    children: r
                })
            })
        })
    }
    , "MenuPortal")
      , e7 = "MenuContent"
      , [e4,e9] = eW(e7)
      , te = t.forwardRef(eL(function(e, t) {
        let n = e8(e7, e.__scopeMenu)
          , {forceMount: r=n.forceMount, ...o} = e
          , i = eJ(e7, e.__scopeMenu)
          , l = e0(e7, e.__scopeMenu);
        return (0,
        x.jsx)(eV.Provider, {
            scope: e.__scopeMenu,
            children: (0,
            x.jsx)($.Presence, {
                present: r || i.open,
                children: (0,
                x.jsx)(eV.Slot, {
                    scope: e.__scopeMenu,
                    children: l.modal ? (0,
                    x.jsx)(tt, {
                        ...o,
                        ref: t
                    }) : (0,
                    x.jsx)(tn, {
                        ...o,
                        ref: t
                    })
                })
            })
        })
    }, "MenuContent"))
      , tt = t.forwardRef(eL(function(e, o) {
        let i = eJ(e7, e.__scopeMenu)
          , l = t.useRef(null)
          , u = (0,
        r.useComposedRefs)(o, l);
        return t.useEffect( () => {
            let e = l.current;
            if (e)
                return (0,
                eA.hideOthers)(e)
        }
        , []),
        (0,
        x.jsx)(to, {
            ...e,
            ref: u,
            trapFocus: i.open,
            disableOutsidePointerEvents: i.open,
            disableOutsideScroll: !0,
            onFocusOutside: (0,
            n.composeEventHandlers)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
            }),
            onDismiss: () => i.onOpenChange(!1)
        })
    }, "MenuRootContentModal"))
      , tn = t.forwardRef(eL(function(e, t) {
        let n = eJ(e7, e.__scopeMenu);
        return (0,
        x.jsx)(to, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => n.onOpenChange(!1)
        })
    }, "MenuRootContentNonModal"))
      , tr = eR("MenuContent.ScrollLock")
      , to = t.forwardRef(eL(function(e, o) {
        let {__scopeMenu: i, loop: l=!1, trapFocus: u, onOpenAutoFocus: s, onCloseAutoFocus: a, disableOutsidePointerEvents: c, onEntryFocus: d, onEscapeKeyDown: f, onPointerDownOutside: p, onFocusOutside: h, onInteractOutside: m, onDismiss: g, disableOutsideScroll: v, ...w} = e
          , y = eJ(e7, i)
          , b = e0(e7, i)
          , R = eZ(i)
          , C = eq(i)
          , S = eB(i)
          , [M,E] = t.useState(null)
          , I = t.useRef(null)
          , j = (0,
        r.useComposedRefs)(o, I, y.onContentChange)
          , D = t.useRef(0)
          , P = t.useRef("")
          , k = t.useRef(0)
          , O = t.useRef(null)
          , _ = t.useRef("right")
          , A = t.useRef(0)
          , T = v ? eT.RemoveScroll : t.Fragment
          , F = eL(e => {
            let t = P.current + e
              , n = S().filter(e => !e.disabled)
              , r = document.activeElement
              , o = n.find(e => e.ref.current === r)?.textValue
              , i = tA(n.map(e => e.textValue), t, o)
              , l = n.find(e => e.textValue === i)?.ref.current;
            l && setTimeout( () => l.focus())
        }
        , "handleTypeaheadSearch");
        t.useEffect( () => () => window.clearTimeout(D.current), []),
        (0,
        H.useFocusGuards)();
        let G = t.useCallback(e => _.current === O.current?.side && tF(e, O.current?.area), []);
        return (0,
        x.jsx)(e4, {
            scope: i,
            searchRef: P,
            onItemEnter: t.useCallback(e => {
                G(e) && e.preventDefault()
            }
            , [G]),
            onItemLeave: t.useCallback(e => {
                G(e) || (I.current?.focus(),
                E(null))
            }
            , [G]),
            onTriggerLeave: t.useCallback(e => {
                G(e) && e.preventDefault()
            }
            , [G]),
            pointerGraceTimerRef: k,
            onPointerGraceIntentChange: t.useCallback(e => {
                O.current = e
            }
            , []),
            children: (0,
            x.jsx)(T, {
                ...v ? {
                    as: tr,
                    allowPinchZoom: !0
                } : void 0,
                children: (0,
                x.jsx)(K.FocusScope, {
                    asChild: !0,
                    trapped: u,
                    onMountAutoFocus: (0,
                    n.composeEventHandlers)(s, e => {
                        e.preventDefault(),
                        I.current?.focus({
                            preventScroll: !0
                        })
                    }
                    ),
                    onUnmountAutoFocus: a,
                    children: (0,
                    x.jsx)(L.DismissableLayer, {
                        asChild: !0,
                        disableOutsidePointerEvents: c,
                        onEscapeKeyDown: f,
                        onPointerDownOutside: p,
                        onFocusOutside: h,
                        onInteractOutside: m,
                        onDismiss: g,
                        children: (0,
                        x.jsx)(ef, {
                            asChild: !0,
                            ...C,
                            dir: b.dir,
                            orientation: "vertical",
                            loop: l,
                            currentTabStopId: M,
                            onCurrentTabStopIdChange: E,
                            onEntryFocus: (0,
                            n.composeEventHandlers)(d, e => {
                                b.isUsingKeyboardRef.current || e.preventDefault()
                            }
                            ),
                            preventScrollOnEntryFocus: !0,
                            children: (0,
                            x.jsx)(N.Content, {
                                role: "menu",
                                "aria-orientation": "vertical",
                                "data-state": tD(y.open),
                                "data-radix-menu-content": "",
                                dir: b.dir,
                                ...R,
                                ...w,
                                ref: j,
                                style: {
                                    outline: "none",
                                    ...w.style
                                },
                                onKeyDown: (0,
                                n.composeEventHandlers)(w.onKeyDown, e => {
                                    let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget
                                      , n = e.ctrlKey || e.altKey || e.metaKey
                                      , r = 1 === e.key.length;
                                    t && ("Tab" === e.key && e.preventDefault(),
                                    !n && r && F(e.key));
                                    let o = I.current;
                                    if (e.target !== o || !eG.includes(e.key))
                                        return;
                                    e.preventDefault();
                                    let i = S().filter(e => !e.disabled).map(e => e.ref.current);
                                    eK.includes(e.key) && i.reverse(),
                                    tO(i)
                                }
                                ),
                                onBlur: (0,
                                n.composeEventHandlers)(e.onBlur, e => {
                                    e.currentTarget.contains(e.target) || (window.clearTimeout(D.current),
                                    P.current = "")
                                }
                                ),
                                onPointerMove: (0,
                                n.composeEventHandlers)(e.onPointerMove, tL(e => {
                                    let t = e.target
                                      , n = A.current !== e.clientX;
                                    e.currentTarget.contains(t) && n && (_.current = e.clientX > A.current ? "right" : "left",
                                    A.current = e.clientX)
                                }
                                ))
                            })
                        })
                    })
                })
            })
        })
    }, "MenuContentImpl"))
      , ti = t.forwardRef(eL(function(e, t) {
        let {__scopeMenu: n, ...r} = e;
        return (0,
        x.jsx)(l.Primitive.div, {
            role: "group",
            ...r,
            ref: t
        })
    }, "MenuGroup"))
      , tl = t.forwardRef(eL(function(e, t) {
        let {__scopeMenu: n, ...r} = e;
        return (0,
        x.jsx)(l.Primitive.div, {
            ...r,
            ref: t
        })
    }, "MenuLabel"))
      , tu = "MenuItem"
      , ts = "menu.itemSelect"
      , ta = t.forwardRef(eL(function(e, o) {
        let {disabled: i=!1, onSelect: u, ...s} = e
          , a = t.useRef(null)
          , c = e0(tu, e.__scopeMenu)
          , d = e9(tu, e.__scopeMenu)
          , f = (0,
        r.useComposedRefs)(o, a)
          , p = t.useRef(!1)
          , h = eL( () => {
            let e = a.current;
            if (!i && e) {
                let t = new CustomEvent(ts,{
                    bubbles: !0,
                    cancelable: !0
                });
                e.addEventListener(ts, e => u?.(e), {
                    once: !0
                }),
                (0,
                l.dispatchDiscreteCustomEvent)(e, t),
                t.defaultPrevented ? p.current = !1 : c.onClose()
            }
        }
        , "handleSelect");
        return (0,
        x.jsx)(tc, {
            ...s,
            ref: f,
            disabled: i,
            onClick: (0,
            n.composeEventHandlers)(e.onClick, h),
            onPointerDown: t => {
                e.onPointerDown?.(t),
                p.current = !0
            }
            ,
            onPointerUp: (0,
            n.composeEventHandlers)(e.onPointerUp, e => {
                p.current || e.currentTarget?.click()
            }
            ),
            onKeyDown: (0,
            n.composeEventHandlers)(e.onKeyDown, e => {
                i || e.target !== e.currentTarget || ("" === d.searchRef.current || " " !== e.key) && eH.includes(e.key) && (e.currentTarget.click(),
                e.preventDefault())
            }
            )
        })
    }, "MenuItem"))
      , tc = t.forwardRef(eL(function(e, o) {
        let {__scopeMenu: i, disabled: u=!1, textValue: s, ...a} = e
          , c = e9(tu, i)
          , d = eq(i)
          , f = t.useRef(null)
          , p = (0,
        r.useComposedRefs)(o, f)
          , [h,m] = t.useState(!1)
          , [g,v] = t.useState("");
        return t.useEffect( () => {
            let e = f.current;
            e && v((e.textContent ?? "").trim())
        }
        , [a.children]),
        (0,
        x.jsx)(eV.ItemSlot, {
            scope: i,
            disabled: u,
            textValue: s ?? g,
            children: (0,
            x.jsx)(eh, {
                asChild: !0,
                ...d,
                focusable: !u,
                children: (0,
                x.jsx)(l.Primitive.div, {
                    role: "menuitem",
                    "data-highlighted": h ? "" : void 0,
                    "aria-disabled": u || void 0,
                    "data-disabled": u ? "" : void 0,
                    ...a,
                    ref: p,
                    onPointerMove: (0,
                    n.composeEventHandlers)(e.onPointerMove, tL(e => {
                        u ? c.onItemLeave(e) : (c.onItemEnter(e),
                        e.defaultPrevented || e.currentTarget.focus({
                            preventScroll: !0
                        }))
                    }
                    )),
                    onPointerLeave: (0,
                    n.composeEventHandlers)(e.onPointerLeave, tL(e => c.onItemLeave(e))),
                    onFocus: (0,
                    n.composeEventHandlers)(e.onFocus, () => m(!0)),
                    onBlur: (0,
                    n.composeEventHandlers)(e.onBlur, () => m(!1))
                })
            })
        })
    }, "MenuItemImpl"))
      , td = t.forwardRef(eL(function(e, t) {
        let {checked: r=!1, onCheckedChange: o, ...i} = e;
        return (0,
        x.jsx)(tv, {
            scope: e.__scopeMenu,
            checked: r,
            children: (0,
            x.jsx)(ta, {
                role: "menuitemcheckbox",
                "aria-checked": tP(r) ? "mixed" : r,
                ...i,
                ref: t,
                "data-state": tk(r),
                onSelect: (0,
                n.composeEventHandlers)(i.onSelect, () => o?.(!!tP(r) || !r), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    }, "MenuCheckboxItem"))
      , [tf,tp] = eW("MenuRadioGroup", {
        value: void 0,
        onValueChange: eL( () => {}
        , "onValueChange")
    })
      , th = t.forwardRef(eL(function(e, t) {
        let {value: n, onValueChange: r, ...o} = e
          , i = (0,
        V.useCallbackRef)(r);
        return (0,
        x.jsx)(tf, {
            scope: e.__scopeMenu,
            value: n,
            onValueChange: i,
            children: (0,
            x.jsx)(ti, {
                ...o,
                ref: t
            })
        })
    }, "MenuRadioGroup"))
      , tm = t.forwardRef(eL(function(e, t) {
        let {value: r, ...o} = e
          , i = tp("MenuRadioItem", e.__scopeMenu)
          , l = r === i.value;
        return (0,
        x.jsx)(tv, {
            scope: e.__scopeMenu,
            checked: l,
            children: (0,
            x.jsx)(ta, {
                role: "menuitemradio",
                "aria-checked": l,
                ...o,
                ref: t,
                "data-state": tk(l),
                onSelect: (0,
                n.composeEventHandlers)(o.onSelect, () => i.onValueChange?.(r), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    }, "MenuRadioItem"))
      , tg = "MenuItemIndicator"
      , [tv,tw] = eW(tg, {
        checked: !1
    })
      , ty = t.forwardRef(eL(function(e, t) {
        let {__scopeMenu: n, forceMount: r, ...o} = e
          , i = tw(tg, n);
        return (0,
        x.jsx)($.Presence, {
            present: r || tP(i.checked) || !0 === i.checked,
            children: (0,
            x.jsx)(l.Primitive.span, {
                ...o,
                ref: t,
                "data-state": tk(i.checked)
            })
        })
    }, "MenuItemIndicator"))
      , tb = t.forwardRef(eL(function(e, t) {
        let {__scopeMenu: n, ...r} = e;
        return (0,
        x.jsx)(l.Primitive.div, {
            role: "separator",
            "aria-orientation": "horizontal",
            ...r,
            ref: t
        })
    }, "MenuSeparator"))
      , tx = t.forwardRef(eL(function(e, t) {
        let {__scopeMenu: n, ...r} = e
          , o = eZ(n);
        return (0,
        x.jsx)(N.Arrow, {
            ...o,
            ...r,
            ref: t
        })
    }, "MenuArrow"))
      , tR = "MenuSub"
      , [tC,tS] = eW(tR)
      , tM = eL(e => {
        let {__scopeMenu: n, children: r, open: o=!1, onOpenChange: i} = e
          , l = eJ(tR, n)
          , u = eZ(n)
          , [s,a] = t.useState(null)
          , [c,d] = t.useState(null)
          , f = (0,
        V.useCallbackRef)(i);
        return t.useEffect( () => (!1 === l.open && f(!1),
        () => f(!1)), [l.open, f]),
        (0,
        x.jsx)(N.Root, {
            ...u,
            children: (0,
            x.jsx)(eY, {
                scope: n,
                open: o,
                onOpenChange: f,
                content: c,
                onContentChange: d,
                children: (0,
                x.jsx)(tC, {
                    scope: n,
                    contentId: (0,
                    G.useId)(),
                    triggerId: (0,
                    G.useId)(),
                    trigger: s,
                    onTriggerChange: a,
                    children: r
                })
            })
        })
    }
    , "MenuSub")
      , tE = "MenuSubTrigger"
      , tI = t.forwardRef(eL(function(e, o) {
        let i = eJ(tE, e.__scopeMenu)
          , l = e0(tE, e.__scopeMenu)
          , u = tS(tE, e.__scopeMenu)
          , s = e9(tE, e.__scopeMenu)
          , a = t.useRef(null)
          , {pointerGraceTimerRef: c, onPointerGraceIntentChange: d} = s
          , f = {
            __scopeMenu: e.__scopeMenu
        }
          , p = t.useCallback( () => {
            a.current && window.clearTimeout(a.current),
            a.current = null
        }
        , []);
        t.useEffect( () => p, [p]),
        t.useEffect( () => {
            let e = c.current;
            return () => {
                window.clearTimeout(e),
                d(null)
            }
        }
        , [c, d]);
        let h = (0,
        r.useComposedRefs)(o, u.onTriggerChange);
        return (0,
        x.jsx)(e6, {
            asChild: !0,
            ...f,
            children: (0,
            x.jsx)(tc, {
                id: u.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": i.open,
                "aria-controls": i.open ? u.contentId : void 0,
                "data-state": tD(i.open),
                ...e,
                ref: h,
                onClick: t => {
                    e.onClick?.(t),
                    e.disabled || t.defaultPrevented || (t.currentTarget.focus(),
                    i.open || i.onOpenChange(!0))
                }
                ,
                onPointerMove: (0,
                n.composeEventHandlers)(e.onPointerMove, tL(t => {
                    s.onItemEnter(t),
                    !t.defaultPrevented && (e.disabled || i.open || a.current || (s.onPointerGraceIntentChange(null),
                    a.current = window.setTimeout( () => {
                        i.onOpenChange(!0),
                        p()
                    }
                    , 100)))
                }
                )),
                onPointerLeave: (0,
                n.composeEventHandlers)(e.onPointerLeave, tL(e => {
                    p();
                    let t = i.content?.getBoundingClientRect();
                    if (t) {
                        let n = i.content?.dataset.side
                          , r = "right" === n
                          , o = t[r ? "left" : "right"]
                          , l = t[r ? "right" : "left"];
                        s.onPointerGraceIntentChange({
                            area: [{
                                x: e.clientX + (r ? -5 : 5),
                                y: e.clientY
                            }, {
                                x: o,
                                y: t.top
                            }, {
                                x: l,
                                y: t.top
                            }, {
                                x: l,
                                y: t.bottom
                            }, {
                                x: o,
                                y: t.bottom
                            }],
                            side: n
                        }),
                        window.clearTimeout(c.current),
                        c.current = window.setTimeout( () => s.onPointerGraceIntentChange(null), 300)
                    } else {
                        if (s.onTriggerLeave(e),
                        e.defaultPrevented)
                            return;
                        s.onPointerGraceIntentChange(null)
                    }
                }
                )),
                onKeyDown: (0,
                n.composeEventHandlers)(e.onKeyDown, t => {
                    e.disabled || t.target !== t.currentTarget || ("" === s.searchRef.current || " " !== t.key) && eN[l.dir].includes(t.key) && (i.onOpenChange(!0),
                    i.content?.focus(),
                    t.preventDefault())
                }
                )
            })
        })
    }, "MenuSubTrigger"))
      , tj = t.forwardRef(eL(function(e, o) {
        let i = e8(e7, e.__scopeMenu)
          , {forceMount: l=i.forceMount, align: u="start", ...s} = e
          , a = eJ(e7, e.__scopeMenu)
          , c = e0(e7, e.__scopeMenu)
          , d = tS("MenuSubContent", e.__scopeMenu)
          , f = t.useRef(null)
          , p = (0,
        r.useComposedRefs)(o, f);
        return (0,
        x.jsx)(eV.Provider, {
            scope: e.__scopeMenu,
            children: (0,
            x.jsx)($.Presence, {
                present: l || a.open,
                children: (0,
                x.jsx)(eV.Slot, {
                    scope: e.__scopeMenu,
                    children: (0,
                    x.jsx)(to, {
                        id: d.contentId,
                        "aria-labelledby": d.triggerId,
                        ...s,
                        ref: p,
                        align: u,
                        side: "rtl" === c.dir ? "left" : "right",
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        trapFocus: !1,
                        onOpenAutoFocus: e => {
                            c.isUsingKeyboardRef.current && f.current?.focus(),
                            e.preventDefault()
                        }
                        ,
                        onCloseAutoFocus: e => e.preventDefault(),
                        onFocusOutside: (0,
                        n.composeEventHandlers)(e.onFocusOutside, e => {
                            e.target !== d.trigger && a.onOpenChange(!1)
                        }
                        ),
                        onEscapeKeyDown: (0,
                        n.composeEventHandlers)(e.onEscapeKeyDown, e => {
                            c.onClose(),
                            e.preventDefault()
                        }
                        ),
                        onKeyDown: (0,
                        n.composeEventHandlers)(e.onKeyDown, e => {
                            let t = e.currentTarget.contains(e.target)
                              , n = ez[c.dir].includes(e.key);
                            t && n && (a.onOpenChange(!1),
                            d.trigger?.focus(),
                            e.preventDefault())
                        }
                        )
                    })
                })
            })
        })
    }, "MenuSubContent"));
    function tD(e) {
        return e ? "open" : "closed"
    }
    function tP(e) {
        return "indeterminate" === e
    }
    function tk(e) {
        return tP(e) ? "indeterminate" : e ? "checked" : "unchecked"
    }
    function tO(e) {
        let t = document.activeElement;
        for (let n of e)
            if (n === t || (n.focus(),
            document.activeElement !== t))
                return
    }
    function t_(e, t) {
        return e.map( (n, r) => e[(t + r) % e.length])
    }
    function tA(e, t, n) {
        let r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t
          , o = n ? e.indexOf(n) : -1
          , i = t_(e, Math.max(o, 0));
        1 === r.length && (i = i.filter(e => e !== n));
        let l = i.find(e => e.toLowerCase().startsWith(r.toLowerCase()));
        return l !== n ? l : void 0
    }
    function tT(e, t) {
        let {x: n, y: r} = e
          , o = !1;
        for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
            let l = t[e]
              , u = t[i]
              , s = l.x
              , a = l.y
              , c = u.x
              , d = u.y;
            a > r != d > r && n < (c - s) * (r - a) / (d - a) + s && (o = !o)
        }
        return o
    }
    function tF(e, t) {
        return !!t && tT({
            x: e.clientX,
            y: e.clientY
        }, t)
    }
    function tL(e) {
        return t => "mouse" === t.pointerType ? e(t) : void 0
    }
    eL(tD, "getOpenState"),
    eL(tP, "isIndeterminate"),
    eL(tk, "getCheckedState"),
    eL(tO, "focusFirst"),
    eL(t_, "wrapArray"),
    eL(tA, "getNextMatch"),
    eL(tT, "isPointInPolygon"),
    eL(tF, "isPointerInGraceArea"),
    eL(tL, "whenMouse"),
    e.s(["Anchor", 0, e6, "Arrow", 0, tx, "CheckboxItem", 0, td, "Content", 0, te, "Group", 0, ti, "Item", 0, ta, "ItemIndicator", 0, ty, "Label", 0, tl, "Portal", 0, e5, "RadioGroup", 0, th, "RadioItem", 0, tm, "Root", 0, e1, "Separator", 0, tb, "Sub", 0, tM, "SubContent", 0, tj, "SubTrigger", 0, tI, "createMenuScope", 0, eX], 832006);
    var tH = Object.defineProperty
      , tK = (e, t) => tH(e, "name", {
        value: t,
        configurable: !0
    })
      , tG = "DropdownMenu"
      , [tN,tz] = (0,
    o.createContextScope)(tG, [eX])
      , t$ = eX()
      , [tV,tB] = tN(tG)
      , tU = tK(e => {
        let {__scopeDropdownMenu: n, children: r, dir: o, open: l, defaultOpen: u, onOpenChange: s, modal: a=!0} = e
          , c = t$(n)
          , d = t.useRef(null)
          , [f,p] = (0,
        i.useControllableState)({
            prop: l,
            defaultProp: u ?? !1,
            onChange: s,
            caller: tG
        });
        return (0,
        x.jsx)(tV, {
            scope: n,
            triggerId: (0,
            G.useId)(),
            triggerRef: d,
            contentId: (0,
            G.useId)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: t.useCallback( () => p(e => !e), [p]),
            modal: a,
            children: (0,
            x.jsx)(e1, {
                ...c,
                open: f,
                onOpenChange: p,
                dir: o,
                modal: a,
                children: r
            })
        })
    }
    , "DropdownMenu")
      , tW = t.forwardRef(tK(function(e, t) {
        let {__scopeDropdownMenu: o, disabled: i=!1, ...u} = e
          , s = tB("DropdownMenuTrigger", o)
          , a = t$(o)
          , c = (0,
        r.useComposedRefs)(t, s.triggerRef);
        return (0,
        x.jsx)(e6, {
            asChild: !0,
            ...a,
            children: (0,
            x.jsx)(l.Primitive.button, {
                type: "button",
                id: s.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": s.open,
                "aria-controls": s.open ? s.contentId : void 0,
                "data-state": s.open ? "open" : "closed",
                "data-disabled": i ? "" : void 0,
                disabled: i,
                ...u,
                ref: c,
                onPointerDown: (0,
                n.composeEventHandlers)(e.onPointerDown, e => {
                    !i && 0 === e.button && !1 === e.ctrlKey && (s.onOpenToggle(),
                    s.open || e.preventDefault())
                }
                ),
                onKeyDown: (0,
                n.composeEventHandlers)(e.onKeyDown, e => {
                    !i && (["Enter", " "].includes(e.key) && s.onOpenToggle(),
                    "ArrowDown" === e.key && s.onOpenChange(!0),
                    ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                }
                )
            })
        })
    }, "DropdownMenuTrigger"))
      , tX = tK(e => {
        let {__scopeDropdownMenu: t, ...n} = e
          , r = t$(t);
        return (0,
        x.jsx)(e5, {
            ...r,
            ...n
        })
    }
    , "DropdownMenuPortal")
      , tZ = t.forwardRef(tK(function(e, r) {
        let {__scopeDropdownMenu: o, ...i} = e
          , l = tB("DropdownMenuContent", o)
          , u = t$(o)
          , s = t.useRef(!1);
        return (0,
        x.jsx)(te, {
            id: l.contentId,
            "aria-labelledby": l.triggerId,
            ...u,
            ...i,
            ref: r,
            onCloseAutoFocus: (0,
            n.composeEventHandlers)(e.onCloseAutoFocus, e => {
                s.current || l.triggerRef.current?.focus(),
                s.current = !1,
                e.preventDefault()
            }
            ),
            onInteractOutside: (0,
            n.composeEventHandlers)(e.onInteractOutside, e => {
                let t = e.detail.originalEvent
                  , n = 0 === t.button && !0 === t.ctrlKey
                  , r = 2 === t.button || n;
                (!l.modal || r) && (s.current = !0)
            }
            ),
            style: {
                ...e.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    }, "DropdownMenuContent"))
      , tq = t.forwardRef(tK(function(e, t) {
        let {__scopeDropdownMenu: n, ...r} = e
          , o = t$(n);
        return (0,
        x.jsx)(ti, {
            ...o,
            ...r,
            ref: t
        })
    }, "DropdownMenuGroup"))
      , tY = t.forwardRef(tK(function(e, t) {
        let {__scopeDropdownMenu: n, ...r} = e
          , o = t$(n);
        return (0,
        x.jsx)(tl, {
            ...o,
            ...r,
            ref: t
        })
    }, "DropdownMenuLabel"))
      , tJ = t.forwardRef(tK(function(e, t) {
        let {__scopeDropdownMenu: n, ...r} = e
          , o = t$(n);
        return (0,
        x.jsx)(ta, {
            ...o,
            ...r,
            ref: t
        })
    }, "DropdownMenuItem"))
      , tQ = t.forwardRef(tK(function(e, t) {
        let {__scopeDropdownMenu: n, ...r} = e
          , o = t$(n);
        return (0,
        x.jsx)(td, {
            ...o,
            ...r,
            ref: t
        })
    }, "DropdownMenuCheckboxItem"))
      , t0 = t.forwardRef(tK(function(e, t) {
        let {__scopeDropdownMenu: n, ...r} = e
          , o = t$(n);
        return (0,
        x.jsx)(th, {
            ...o,
            ...r,
            ref: t
        })
    }, "DropdownMenuRadioGroup"))
      , t1 = t.forwardRef(tK(function(e, t) {
        let {__scopeDropdownMenu: n, ...r} = e
          , o = t$(n);
        return (0,
        x.jsx)(tm, {
            ...o,
            ...r,
            ref: t
        })
    }, "DropdownMenuRadioItem"))
      , t6 = t.forwardRef(tK(function(e, t) {
        let {__scopeDropdownMenu: n, ...r} = e
          , o = t$(n);
        return (0,
        x.jsx)(ty, {
            ...o,
            ...r,
            ref: t
        })
    }, "DropdownMenuItemIndicator"))
      , t3 = t.forwardRef(tK(function(e, t) {
        let {__scopeDropdownMenu: n, ...r} = e
          , o = t$(n);
        return (0,
        x.jsx)(tb, {
            ...o,
            ...r,
            ref: t
        })
    }, "DropdownMenuSeparator"))
      , t2 = t.forwardRef(tK(function(e, t) {
        let {__scopeDropdownMenu: n, ...r} = e
          , o = t$(n);
        return (0,
        x.jsx)(tx, {
            ...o,
            ...r,
            ref: t
        })
    }, "DropdownMenuArrow"))
      , t8 = tK(e => {
        let {__scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: l} = e
          , u = t$(t)
          , [s,a] = (0,
        i.useControllableState)({
            prop: r,
            defaultProp: l ?? !1,
            onChange: o,
            caller: "DropdownMenuSub"
        });
        return (0,
        x.jsx)(tM, {
            ...u,
            open: s,
            onOpenChange: a,
            children: n
        })
    }
    , "DropdownMenuSub")
      , t5 = t.forwardRef(tK(function(e, t) {
        let {__scopeDropdownMenu: n, ...r} = e
          , o = t$(n);
        return (0,
        x.jsx)(tI, {
            ...o,
            ...r,
            ref: t
        })
    }, "DropdownMenuSubTrigger"))
      , t7 = t.forwardRef(tK(function(e, t) {
        let {__scopeDropdownMenu: n, ...r} = e
          , o = t$(n);
        return (0,
        x.jsx)(tj, {
            ...o,
            ...r,
            ref: t,
            style: {
                ...e.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    }, "DropdownMenuSubContent"));
    e.s(["Arrow", 0, t2, "CheckboxItem", 0, tQ, "Content", 0, tZ, "DropdownMenu", 0, tU, "DropdownMenuArrow", 0, t2, "DropdownMenuCheckboxItem", 0, tQ, "DropdownMenuContent", 0, tZ, "DropdownMenuGroup", 0, tq, "DropdownMenuItem", 0, tJ, "DropdownMenuItemIndicator", 0, t6, "DropdownMenuLabel", 0, tY, "DropdownMenuPortal", 0, tX, "DropdownMenuRadioGroup", 0, t0, "DropdownMenuRadioItem", 0, t1, "DropdownMenuSeparator", 0, t3, "DropdownMenuSub", 0, t8, "DropdownMenuSubContent", 0, t7, "DropdownMenuSubTrigger", 0, t5, "DropdownMenuTrigger", 0, tW, "Group", 0, tq, "Item", 0, tJ, "ItemIndicator", 0, t6, "Label", 0, tY, "Portal", 0, tX, "RadioGroup", 0, t0, "RadioItem", 0, t1, "Root", 0, tU, "Separator", 0, t3, "Sub", 0, t8, "SubContent", 0, t7, "SubTrigger", 0, t5, "Trigger", 0, tW, "createDropdownMenuScope", 0, tz], 540666);
    var t4 = e.i(540666);
    e.s(["DropdownMenu", 0, t4], 295692)
}
]);
