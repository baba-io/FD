(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 981140, 820783, 30030, e => {
    "use strict";
    var t = Object.defineProperty
      , n = (e, n) => t(e, "name", {
        value: n,
        configurable: !0
    })
      , r = !!("u" > typeof window && window.document && window.document.createElement);
    function o(e, t, {checkForDefaultPrevented: r=!0}={}) {
        return n(function(n) {
            if (e?.(n),
            !1 === r || !n || !n.defaultPrevented)
                return t?.(n)
        }, "handleEvent")
    }
    function i(e) {
        if (!r)
            throw Error("Cannot access document outside of the DOM");
        return e?.ownerDocument ?? document
    }
    function u(e) {
        return "IFRAME" === e.tagName
    }
    n(o, "composeEventHandlers"),
    n(function(e) {
        if (!r)
            throw Error("Cannot access window outside of the DOM");
        return e?.ownerDocument?.defaultView ?? window
    }, "getOwnerWindow"),
    n(i, "getOwnerDocument"),
    n(function e(t, n=!1) {
        let {activeElement: r} = i(t);
        if (!r?.nodeName)
            return null;
        if (u(r) && r.contentDocument)
            return e(r.contentDocument.body, n);
        if (n) {
            let e = r.getAttribute("aria-activedescendant");
            if (e) {
                let t = i(r).getElementById(e);
                if (t)
                    return t
            }
        }
        return r
    }, "getActiveElement"),
    n(u, "isFrame"),
    e.s(["composeEventHandlers", 0, o], 981140);
    var a = e.i(271645)
      , c = Object.defineProperty
      , s = (e, t) => c(e, "name", {
        value: t,
        configurable: !0
    });
    function l(e, t) {
        if ("function" == typeof e)
            return e(t);
        null != e && (e.current = t)
    }
    function d(...e) {
        return t => {
            let n = !1
              , r = e.map(e => {
                let r = l(e, t);
                return n || "function" != typeof r || (n = !0),
                r
            }
            );
            if (n)
                return () => {
                    for (let t = 0; t < r.length; t++) {
                        let n = r[t];
                        "function" == typeof n ? n() : l(e[t], null)
                    }
                }
        }
    }
    function f(...e) {
        return a.useCallback(d(...e), e)
    }
    s(l, "setRef"),
    s(d, "composeRefs"),
    s(f, "useComposedRefs"),
    e.s(["useComposedRefs", 0, f], 820783);
    var m = e.i(843476)
      , p = Object.defineProperty
      , v = (e, t) => p(e, "name", {
        value: t,
        configurable: !0
    });
    function h(e, t=[]) {
        let n = [];
        function r(t, r) {
            let o = a.createContext(r);
            o.displayName = t + "Context";
            let i = n.length;
            n = [...n, r];
            let u = v(t => {
                let {scope: n, children: r, ...u} = t
                  , c = n?.[e]?.[i] || o
                  , s = a.useMemo( () => u, Object.values(u));
                return (0,
                m.jsx)(c.Provider, {
                    value: s,
                    children: r
                })
            }
            , "Provider");
            function c(n, u, s={}) {
                let {optional: l=!1} = s
                  , d = u?.[e]?.[i] || o
                  , f = a.useContext(d);
                if (f)
                    return f;
                if (void 0 !== r)
                    return r;
                if (!l)
                    throw Error(`\`${n}\` must be used within \`${t}\``)
            }
            return u.displayName = t + "Provider",
            v(c, "useContext"),
            [u, c]
        }
        v(r, "createContext");
        let o = v( () => {
            let t = n.map(e => a.createContext(e));
            return v(function(n) {
                let r = n?.[e] || t;
                return a.useMemo( () => ({
                    [`__scope${e}`]: {
                        ...n,
                        [e]: r
                    }
                }), [n, r])
            }, "useScope")
        }
        , "createScope");
        return o.scopeName = e,
        [r, y(o, ...t)]
    }
    function y(...e) {
        let t = e[0];
        if (1 === e.length)
            return t;
        let n = v( () => {
            let n = e.map(e => ({
                useScope: e(),
                scopeName: e.scopeName
            }));
            return v(function(e) {
                let r = n.reduce( (t, {useScope: n, scopeName: r}) => {
                    let o = n(e)[`__scope${r}`];
                    return {
                        ...t,
                        ...o
                    }
                }
                , {});
                return a.useMemo( () => ({
                    [`__scope${t.scopeName}`]: r
                }), [r])
            }, "useComposedScopes")
        }
        , "createScope");
        return n.scopeName = t.scopeName,
        n
    }
    v(function(e, t) {
        let n = a.createContext(t);
        n.displayName = e + "Context";
        let r = v(e => {
            let {children: t, ...r} = e
              , o = a.useMemo( () => r, Object.values(r));
            return (0,
            m.jsx)(n.Provider, {
                value: o,
                children: t
            })
        }
        , "Provider");
        function o(r, i={}) {
            let {optional: u=!1} = i
              , c = a.useContext(n);
            if (c)
                return c;
            if (void 0 !== t)
                return t;
            if (!u)
                throw Error(`\`${r}\` must be used within \`${e}\``)
        }
        return r.displayName = e + "Provider",
        v(o, "useContext"),
        [r, o]
    }, "createContext"),
    v(h, "createContextScope"),
    v(y, "composeContextScopes"),
    e.s(["createContextScope", 0, h], 30030)
}
, 726330, 248425, 30207, e => {
    "use strict";
    var t, n = e.i(271645), r = e.i(981140), o = e.i(174080), i = e.i(820783), u = Object.defineProperty, a = (e, t) => u(e, "name", {
        value: t,
        configurable: !0
    });
    function c(e) {
        let t = n.forwardRef( (t, r) => {
            let {children: o, ...u} = t
              , a = null
              , c = !1
              , s = [];
            v(o) && "function" == typeof E && (o = E(o._payload)),
            n.Children.forEach(o, e => {
                if (m(e)) {
                    c = !0;
                    let t = "child" in e.props ? e.props.child : e.props.children;
                    v(t) && "function" == typeof E && (t = E(t._payload)),
                    a = l(e, t),
                    s.push(a?.props?.children)
                } else
                    s.push(e)
            }
            ),
            a ? a = n.cloneElement(a, void 0, s) : !c && 1 === n.Children.count(o) && n.isValidElement(o) && (a = o);
            let p = a ? f(a) : void 0
              , h = (0,
            i.useComposedRefs)(r, p);
            if (!a) {
                if (o || 0 === o)
                    throw Error(c ? b(e) : y(e));
                return o
            }
            let g = d(u, a.props ?? {});
            return a.type !== n.Fragment && (g.ref = r ? h : p),
            n.cloneElement(a, g)
        }
        );
        return t.displayName = `${e}.Slot`,
        t
    }
    a(c, "createSlot");
    var s = Symbol.for("radix.slottable");
    a(function(e) {
        let t = a(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`,
        t.__radixId = s,
        t
    }, "createSlottable");
    var l = a( (e, t) => {
        if ("child" in e.props) {
            let t = e.props.child;
            return n.isValidElement(t) ? n.cloneElement(t, void 0, e.props.children(t.props.children)) : null
        }
        return n.isValidElement(t) ? t : null
    }
    , "getSlottableElementFromSlottable");
    function d(e, t) {
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
    function f(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
          , n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (n = (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
    }
    function m(e) {
        return n.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === s
    }
    a(d, "mergeProps"),
    a(f, "getElementRef"),
    a(m, "isSlottable");
    var p = Symbol.for("react.lazy");
    function v(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === p && "_payload" in e && h(e._payload)
    }
    function h(e) {
        return "object" == typeof e && null !== e && "then" in e
    }
    a(v, "isLazyComponent"),
    a(h, "isPromiseLike");
    var y = a(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError")
      , b = a(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError")
      , E = n[" use ".trim().toString()]
      , g = e.i(843476)
      , w = Object.defineProperty
      , S = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce( (e, t) => {
        let r = c(`Primitive.${t}`)
          , o = n.forwardRef( (e, n) => {
            let {asChild: o, ...i} = e;
            return "u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
            (0,
            g.jsx)(o ? r : t, {
                ...i,
                ref: n
            })
        }
        );
        return o.displayName = `Primitive.${t}`,
        {
            ...e,
            [t]: o
        }
    }
    , {});
    function C(e, t) {
        e && o.flushSync( () => e.dispatchEvent(t))
    }
    function R(e) {
        let t = n.useRef(e);
        return n.useEffect( () => {
            t.current = e
        }
        ),
        n.useMemo( () => (...e) => t.current?.(...e), [])
    }
    w(C, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
    }),
    e.s(["Primitive", 0, S, "dispatchDiscreteCustomEvent", 0, C], 248425),
    (0,
    Object.defineProperty)(R, "name", {
        value: "useCallbackRef",
        configurable: !0
    }),
    e.s(["useCallbackRef", 0, R], 30207);
    var P = Object.defineProperty
      , N = (e, t) => P(e, "name", {
        value: t,
        configurable: !0
    })
      , O = "dismissableLayer.update"
      , L = n.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set,
        dismissableSurfaces: new Set
    })
      , T = n.forwardRef(N(function(e, o) {
        let {disableOutsidePointerEvents: u=!1, deferPointerDownOutside: a=!1, onEscapeKeyDown: c, onPointerDownOutside: s, onFocusOutside: l, onInteractOutside: d, onDismiss: f, ...m} = e
          , p = n.useContext(L)
          , [v,h] = n.useState(null)
          , y = v?.ownerDocument ?? globalThis?.document
          , [,b] = n.useState({})
          , E = (0,
        i.useComposedRefs)(o, h)
          , w = Array.from(p.layers)
          , [C] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1)
          , P = C ? w.indexOf(C) : -1
          , T = v ? w.indexOf(v) : -1
          , M = p.layersWithOutsidePointerEventsDisabled.size > 0
          , k = T >= P
          , D = n.useRef(!1)
          , I = _(e => {
            s?.(e),
            d?.(e),
            e.defaultPrevented || f?.()
        }
        , {
            ownerDocument: y,
            deferPointerDownOutside: a,
            isDeferredPointerDownOutsideRef: D,
            dismissableSurfaces: p.dismissableSurfaces,
            shouldHandlePointerDownOutside: n.useCallback(e => {
                if (!(e instanceof Node))
                    return !1;
                let t = [...p.branches].some(t => t.contains(e));
                return k && !t
            }
            , [p.branches, k])
        })
          , F = A(e => {
            if (a && D.current)
                return;
            let t = e.target;
            ![...p.branches].some(e => e.contains(t)) && (l?.(e),
            d?.(e),
            e.defaultPrevented || f?.())
        }
        , y)
          , j = !!v && T === w.length - 1
          , W = R(e => {
            "Escape" === e.key && (c?.(e),
            !e.defaultPrevented && f && (e.preventDefault(),
            f()))
        }
        );
        return n.useEffect( () => {
            if (j)
                return y.addEventListener("keydown", W, {
                    capture: !0
                }),
                () => y.removeEventListener("keydown", W, {
                    capture: !0
                })
        }
        , [y, j, W]),
        n.useEffect( () => {
            if (v)
                return u && (0 === p.layersWithOutsidePointerEventsDisabled.size && (t = y.body.style.pointerEvents,
                y.body.style.pointerEvents = "none"),
                p.layersWithOutsidePointerEventsDisabled.add(v)),
                p.layers.add(v),
                x(),
                () => {
                    u && (p.layersWithOutsidePointerEventsDisabled.delete(v),
                    0 === p.layersWithOutsidePointerEventsDisabled.size && (y.body.style.pointerEvents = t))
                }
        }
        , [v, y, u, p]),
        n.useEffect( () => () => {
            v && (p.layers.delete(v),
            p.layersWithOutsidePointerEventsDisabled.delete(v),
            x())
        }
        , [v, p]),
        n.useEffect( () => {
            let e = N( () => b({}), "handleUpdate");
            return document.addEventListener(O, e),
            () => document.removeEventListener(O, e)
        }
        , []),
        (0,
        g.jsx)(S.div, {
            ...m,
            ref: E,
            style: {
                pointerEvents: M ? k ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: (0,
            r.composeEventHandlers)(e.onFocusCapture, F.onFocusCapture),
            onBlurCapture: (0,
            r.composeEventHandlers)(e.onBlurCapture, F.onBlurCapture),
            onPointerDownCapture: (0,
            r.composeEventHandlers)(e.onPointerDownCapture, I.onPointerDownCapture)
        })
    }, "DismissableLayer"));
    function M() {
        let e = n.useContext(L)
          , [t,r] = n.useState(null);
        return n.useEffect( () => {
            if (t)
                return e.dismissableSurfaces.add(t),
                () => {
                    e.dismissableSurfaces.delete(t)
                }
        }
        , [t, e.dismissableSurfaces]),
        r
    }
    N(M, "useDismissableLayerSurface");
    var k = N( () => !0, "IS_TRUE");
    function _(e, t) {
        let {ownerDocument: r=globalThis?.document, deferPointerDownOutside: o=!1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: u, shouldHandlePointerDownOutside: a=k} = t
          , c = R(e)
          , s = n.useRef(!1)
          , l = n.useRef(!1)
          , d = n.useRef(new Map)
          , f = n.useRef( () => {}
        );
        return n.useEffect( () => {
            function e() {
                l.current = !1,
                i.current = !1,
                d.current.clear()
            }
            function t() {
                return Array.from(d.current.values()).some(Boolean)
            }
            function n(e) {
                if (!l.current)
                    return;
                let t = e.target;
                t instanceof Node && [...u].some(e => e.contains(t)) || d.current.set(e.type, !0),
                "click" === e.type && window.setTimeout( () => {
                    l.current && f.current()
                }
                , 0)
            }
            function m(e) {
                l.current && d.current.set(e.type, !1)
            }
            N(e, "resetOutsideInteraction"),
            N(t, "isOutsideInteractionIntercepted"),
            N(n, "handleInteractionCapture"),
            N(m, "handleInteractionBubble");
            let p = N(n => {
                if (n.target && !s.current) {
                    let u = function() {
                        r.removeEventListener("click", f.current);
                        let n = t();
                        e(),
                        n || D("dismissableLayer.pointerDownOutside", c, m, {
                            discrete: !0
                        })
                    };
                    if (N(u, "handleAndDispatchPointerDownOutsideEvent"),
                    !a(n.target)) {
                        r.removeEventListener("click", f.current),
                        e(),
                        s.current = !1;
                        return
                    }
                    let m = {
                        originalEvent: n
                    };
                    l.current = !0,
                    i.current = o && 0 === n.button,
                    d.current.clear(),
                    o && 0 === n.button ? (r.removeEventListener("click", f.current),
                    f.current = u,
                    r.addEventListener("click", f.current, {
                        once: !0
                    })) : u()
                } else
                    r.removeEventListener("click", f.current),
                    e();
                s.current = !1
            }
            , "handlePointerDown")
              , v = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
            for (let e of v)
                r.addEventListener(e, n, !0),
                r.addEventListener(e, m);
            let h = window.setTimeout( () => {
                r.addEventListener("pointerdown", p)
            }
            , 0);
            return () => {
                for (let e of (window.clearTimeout(h),
                r.removeEventListener("pointerdown", p),
                r.removeEventListener("click", f.current),
                v))
                    r.removeEventListener(e, n, !0),
                    r.removeEventListener(e, m)
            }
        }
        , [r, c, o, i, u, a]),
        {
            onPointerDownCapture: N( () => s.current = !0, "onPointerDownCapture")
        }
    }
    function A(e, t=globalThis?.document) {
        let r = R(e)
          , o = n.useRef(!1);
        return n.useEffect( () => {
            let e = N(e => {
                e.target && !o.current && D("dismissableLayer.focusOutside", r, {
                    originalEvent: e
                }, {
                    discrete: !1
                })
            }
            , "handleFocus");
            return t.addEventListener("focusin", e),
            () => t.removeEventListener("focusin", e)
        }
        , [t, r]),
        {
            onFocusCapture: N( () => o.current = !0, "onFocusCapture"),
            onBlurCapture: N( () => o.current = !1, "onBlurCapture")
        }
    }
    function x() {
        let e = new CustomEvent(O);
        document.dispatchEvent(e)
    }
    function D(e, t, n, {discrete: r}) {
        let o = n.originalEvent.target
          , i = new CustomEvent(e,{
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
        t && o.addEventListener(e, t, {
            once: !0
        }),
        r ? C(o, i) : o.dispatchEvent(i)
    }
    N(_, "usePointerDownOutside"),
    N(A, "useFocusOutside"),
    N(x, "dispatchUpdate"),
    N(D, "handleAndDispatchCustomEvent"),
    e.s(["DismissableLayer", 0, T, "useDismissableLayerSurface", 0, M], 726330)
}
, 303536, e => {
    "use strict";
    var t = e.i(271645)
      , n = Object.defineProperty
      , r = (e, t) => n(e, "name", {
        value: t,
        configurable: !0
    })
      , o = 0
      , i = null;
    function u() {
        t.useEffect( () => {
            i || (i = {
                start: a(),
                end: a()
            });
            let {start: e, end: t} = i;
            return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e),
            document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t),
            o++,
            () => {
                1 === o && (i?.start.remove(),
                i?.end.remove(),
                i = null),
                o = Math.max(0, o - 1)
            }
        }
        , [])
    }
    function a() {
        let e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""),
        e.tabIndex = 0,
        e.style.outline = "none",
        e.style.opacity = "0",
        e.style.position = "fixed",
        e.style.pointerEvents = "none",
        e
    }
    r(function(e) {
        return u(),
        e.children
    }, "FocusGuards"),
    r(u, "useFocusGuards"),
    r(a, "createFocusGuard"),
    e.s(["useFocusGuards", 0, u])
}
, 765491, e => {
    "use strict";
    var t = e.i(271645)
      , n = e.i(820783)
      , r = e.i(248425)
      , o = e.i(30207)
      , i = e.i(843476)
      , u = Object.defineProperty
      , a = (e, t) => u(e, "name", {
        value: t,
        configurable: !0
    })
      , c = "focusScope.autoFocusOnMount"
      , s = "focusScope.autoFocusOnUnmount"
      , l = {
        bubbles: !1,
        cancelable: !0
    }
      , d = t.forwardRef(a(function(e, u) {
        let {loop: d=!1, trapped: v=!1, onMountAutoFocus: h, onUnmountAutoFocus: y, ...g} = e
          , [w,C] = t.useState(null)
          , R = (0,
        o.useCallbackRef)(h)
          , P = (0,
        o.useCallbackRef)(y)
          , N = t.useRef(null)
          , O = (0,
        n.useComposedRefs)(u, C)
          , L = t.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        t.useEffect( () => {
            if (v) {
                let e = function(e) {
                    if (L.paused || !w)
                        return;
                    let t = e.target;
                    w.contains(t) ? N.current = t : b(N.current, {
                        select: !0
                    })
                }
                  , t = function(e) {
                    if (L.paused || !w)
                        return;
                    let t = e.relatedTarget;
                    null !== t && (w.contains(t) || b(N.current, {
                        select: !0
                    }))
                }
                  , n = function(e) {
                    if (document.activeElement === document.body)
                        for (let t of e)
                            t.removedNodes.length > 0 && b(w)
                };
                a(e, "handleFocusIn"),
                a(t, "handleFocusOut"),
                a(n, "handleMutations"),
                document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
                let r = new MutationObserver(n);
                return w && r.observe(w, {
                    childList: !0,
                    subtree: !0
                }),
                () => {
                    document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    r.disconnect()
                }
            }
        }
        , [v, w, L.paused]),
        t.useEffect( () => {
            if (w) {
                E.add(L);
                let e = document.activeElement;
                if (!w.contains(e)) {
                    let t = new CustomEvent(c,l);
                    w.addEventListener(c, R),
                    w.dispatchEvent(t),
                    t.defaultPrevented || (f(S(p(w)), {
                        select: !0
                    }),
                    document.activeElement === e && b(w))
                }
                return () => {
                    w.removeEventListener(c, R),
                    setTimeout( () => {
                        let t = new CustomEvent(s,l);
                        w.addEventListener(s, P),
                        w.dispatchEvent(t),
                        t.defaultPrevented || b(e ?? document.body, {
                            select: !0
                        }),
                        w.removeEventListener(s, P),
                        E.remove(L)
                    }
                    , 0)
                }
            }
        }
        , [w, R, P, L]);
        let T = t.useCallback(e => {
            if (!d && !v || L.paused)
                return;
            let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey
              , n = document.activeElement;
            if (t && n) {
                let t = e.currentTarget
                  , [r,o] = m(t);
                r && o ? e.shiftKey || n !== o ? e.shiftKey && n === r && (e.preventDefault(),
                d && b(o, {
                    select: !0
                })) : (e.preventDefault(),
                d && b(r, {
                    select: !0
                })) : n === t && e.preventDefault()
            }
        }
        , [d, v, L.paused]);
        return (0,
        i.jsx)(r.Primitive.div, {
            tabIndex: -1,
            ...g,
            ref: O,
            onKeyDown: T
        })
    }, "FocusScope"));
    function f(e, {select: t=!1}={}) {
        let n = document.activeElement;
        for (let r of e)
            if (b(r, {
                select: t
            }),
            document.activeElement !== n)
                return
    }
    function m(e) {
        let t = p(e);
        return [v(t, e), v(t.reverse(), e)]
    }
    function p(e) {
        let t = []
          , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: a(e => {
                let t = "INPUT" === e.tagName && "hidden" === e.type;
                return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
            , "acceptNode")
        });
        for (; n.nextNode(); )
            t.push(n.currentNode);
        return t
    }
    function v(e, t) {
        let n = "function" == typeof t.checkVisibility && t.checkVisibility({
            checkVisibilityCSS: !0
        });
        for (let r of e)
            if (!(n ? !r.checkVisibility({
                checkVisibilityCSS: !0
            }) : h(r, {
                upTo: t
            })))
                return r
    }
    function h(e, {upTo: t}) {
        if ("hidden" === getComputedStyle(e).visibility)
            return !0;
        for (; e && (void 0 === t || e !== t); ) {
            if ("none" === getComputedStyle(e).display)
                return !0;
            e = e.parentElement
        }
        return !1
    }
    function y(e) {
        return e instanceof HTMLInputElement && "select" in e
    }
    function b(e, {select: t=!1}={}) {
        if (e && e.focus) {
            let n = document.activeElement;
            e.focus({
                preventScroll: !0
            }),
            e !== n && y(e) && t && e.select()
        }
    }
    a(f, "focusFirst"),
    a(m, "getTabbableEdges"),
    a(p, "getTabbableCandidates"),
    a(v, "findVisible"),
    a(h, "isHidden"),
    a(y, "isSelectableInput"),
    a(b, "focus");
    var E = g();
    function g() {
        let e = [];
        return {
            add(t) {
                let n = e[0];
                t !== n && n?.pause(),
                (e = w(e, t)).unshift(t)
            },
            remove(t) {
                e = w(e, t),
                e[0]?.resume()
            }
        }
    }
    function w(e, t) {
        let n = [...e]
          , r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1),
        n
    }
    function S(e) {
        return e.filter(e => "A" !== e.tagName)
    }
    a(g, "createFocusScopesStack"),
    a(w, "arrayRemove"),
    a(S, "removeLinks"),
    e.s(["FocusScope", 0, d])
}
, 610772, 934620, e => {
    "use strict";
    var t = e.i(271645)
      , n = globalThis?.document ? t.useLayoutEffect : () => {}
    ;
    e.s(["useLayoutEffect", 0, n], 934620);
    var r = Object.defineProperty
      , o = t[" useId ".trim().toString()] || ( () => void 0)
      , i = 0;
    function u(e) {
        let[r,u] = t.useState(o());
        return n( () => {
            e || u(e => e ?? String(i++))
        }
        , [e]),
        e || (r ? `radix-${r}` : "")
    }
    r(u, "name", {
        value: "useId",
        configurable: !0
    }),
    e.s(["useId", 0, u], 610772)
}
, 774606, 296626, e => {
    "use strict";
    var t = e.i(271645)
      , n = e.i(174080)
      , r = e.i(248425)
      , o = e.i(934620)
      , i = e.i(843476)
      , u = Object.defineProperty
      , a = t.forwardRef(u(function(e, u) {
        let {container: a, ...c} = e
          , [s,l] = t.useState(!1);
        (0,
        o.useLayoutEffect)( () => l(!0), []);
        let d = a || s && globalThis?.document?.body;
        return d ? n.createPortal((0,
        i.jsx)(r.Primitive.div, {
            ...c,
            ref: u
        }), d) : null
    }, "name", {
        value: "Portal",
        configurable: !0
    }));
    e.s(["Portal", 0, a], 774606);
    var c = Object.defineProperty
      , s = (e, t) => c(e, "name", {
        value: t,
        configurable: !0
    });
    function l(e, n) {
        return t.useReducer( (e, t) => n[e][t] ?? e, e)
    }
    s(l, "useStateMachine");
    var d = s(e => {
        let {present: n, children: r} = e
          , o = f(n)
          , i = "function" == typeof r ? r({
            present: o.isPresent
        }) : t.Children.only(r)
          , u = p(o.ref, h(i));
        return "function" == typeof r || o.isPresent ? t.cloneElement(i, {
            ref: u
        }) : null
    }
    , "Presence");
    function f(e) {
        let[n,r] = t.useState()
          , i = t.useRef(null)
          , u = t.useRef(e)
          , a = t.useRef("none")
          , c = t.useRef(void 0)
          , [d,f] = l(e ? "mounted" : "unmounted", {
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
        });
        return t.useEffect( () => {
            "mounted" === d ? (a.current = c.current ?? v(i.current),
            c.current = void 0) : a.current = "none"
        }
        , [d]),
        (0,
        o.useLayoutEffect)( () => {
            let t = i.current
              , n = u.current;
            if (n !== e) {
                let r = a.current
                  , o = v(t);
                e ? (c.current = o,
                f("MOUNT")) : "none" === o || t?.display === "none" ? f("UNMOUNT") : n && r !== o ? f("ANIMATION_OUT") : f("UNMOUNT"),
                u.current = e
            }
        }
        , [e, f]),
        (0,
        o.useLayoutEffect)( () => {
            if (n) {
                let e, t = n.ownerDocument.defaultView ?? window, r = s(r => {
                    let o = v(i.current).includes(CSS.escape(r.animationName));
                    if (r.target === n && o && (f("ANIMATION_END"),
                    !u.current)) {
                        let r = n.style.animationFillMode;
                        n.style.animationFillMode = "forwards",
                        e = t.setTimeout( () => {
                            "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                        }
                        )
                    }
                }
                , "handleAnimationEnd"), o = s(e => {
                    e.target === n && (a.current = v(i.current))
                }
                , "handleAnimationStart");
                return n.addEventListener("animationstart", o),
                n.addEventListener("animationcancel", r),
                n.addEventListener("animationend", r),
                () => {
                    t.clearTimeout(e),
                    n.removeEventListener("animationstart", o),
                    n.removeEventListener("animationcancel", r),
                    n.removeEventListener("animationend", r)
                }
            }
            f("ANIMATION_END")
        }
        , [n, f]),
        {
            isPresent: ["mounted", "unmountSuspended"].includes(d),
            ref: t.useCallback(e => {
                if (e) {
                    let t = getComputedStyle(e);
                    i.current = t,
                    c.current = v(t)
                } else
                    i.current = null;
                r(e)
            }
            , [])
        }
    }
    function m(e, t) {
        if ("function" == typeof e)
            return e(t);
        null != e && (e.current = t)
    }
    function p(...e) {
        let n = t.useRef(e);
        return n.current = e,
        t.useCallback(e => {
            let t = n.current
              , r = !1
              , o = t.map(t => {
                let n = m(t, e);
                return r || "function" != typeof n || (r = !0),
                n
            }
            );
            if (r)
                return () => {
                    for (let e = 0; e < o.length; e++) {
                        let n = o[e];
                        "function" == typeof n ? n() : m(t[e], null)
                    }
                }
        }
        , [])
    }
    function v(e) {
        return e?.animationName || "none"
    }
    function h(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
          , n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (n = (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
    }
    s(f, "usePresence"),
    s(m, "setRef"),
    s(p, "useStableComposedRefs"),
    s(v, "getAnimationName"),
    s(h, "getElementRef"),
    e.s(["Presence", 0, d], 296626)
}
, 369340, e => {
    "use strict";
    var t = e.i(271645)
      , n = e.i(934620)
      , r = Object.defineProperty
      , o = t[" useEffectEvent ".trim().toString()]
      , i = t[" useInsertionEffect ".trim().toString()];
    function u(e) {
        if ("function" == typeof o)
            return o(e);
        let r = t.useRef( () => {
            throw Error("Cannot call an event handler while rendering.")
        }
        );
        return "function" == typeof i ? i( () => {
            r.current = e
        }
        ) : (0,
        n.useLayoutEffect)( () => {
            r.current = e
        }
        ),
        t.useMemo( () => (...e) => r.current?.(...e), [])
    }
    r(u, "name", {
        value: "useEffectEvent",
        configurable: !0
    });
    var a = Object.defineProperty
      , c = (e, t) => a(e, "name", {
        value: t,
        configurable: !0
    })
      , s = t[" useInsertionEffect ".trim().toString()] || n.useLayoutEffect;
    function l({prop: e, defaultProp: n, onChange: r=c( () => {}
    , "onChange"), caller: o}) {
        let[i,u,a] = d({
            defaultProp: n,
            onChange: r
        })
          , s = void 0 !== e
          , m = s ? e : i;
        return [m, t.useCallback(t => {
            if (s) {
                let n = f(t) ? t(e) : t;
                n !== e && a.current?.(n)
            } else
                u(t)
        }
        , [s, e, u, a])]
    }
    function d({defaultProp: e, onChange: n}) {
        let[r,o] = t.useState(e)
          , i = t.useRef(r)
          , u = t.useRef(n);
        return s( () => {
            u.current = n
        }
        , [n]),
        t.useEffect( () => {
            i.current !== r && (u.current?.(r),
            i.current = r)
        }
        , [r, i]),
        [r, o, u]
    }
    function f(e) {
        return "function" == typeof e
    }
    c(l, "useControllableState"),
    c(d, "useUncontrolledState"),
    c(f, "isFunction");
    var m = Symbol("RADIX:SYNC_STATE");
    c(function(e, n, r, o) {
        let {prop: i, defaultProp: a, onChange: c, caller: s} = n
          , l = void 0 !== i
          , d = u(c)
          , f = [{
            ...r,
            state: a
        }];
        o && f.push(o);
        let[p,v] = t.useReducer( (t, n) => {
            if (n.type === m)
                return {
                    ...t,
                    state: n.state
                };
            let r = e(t, n);
            return l && !Object.is(r.state, t.state) && d(r.state),
            r
        }
        , ...f)
          , h = p.state
          , y = t.useRef(h);
        t.useEffect( () => {
            y.current !== h && (y.current = h,
            l || d(h))
        }
        , [h, y, l]);
        let b = t.useMemo( () => void 0 !== i ? {
            ...p,
            state: i
        } : p, [p, i]);
        return t.useEffect( () => {
            l && !Object.is(i, p.state) && v({
                type: m,
                state: i
            })
        }
        , [i, p.state, l]),
        [b, v]
    }, "useControllableStateReducer"),
    e.s(["useControllableState", 0, l], 369340)
}
, 186312, e => {
    "use strict";
    var t = new WeakMap
      , n = new WeakMap
      , r = {}
      , o = 0
      , i = function(e) {
        return e && (e.host || i(e.parentNode))
    }
      , u = function(e, u, a, c) {
        var s = (Array.isArray(e) ? e : [e]).map(function(e) {
            if (u.contains(e))
                return e;
            var t = i(e);
            return t && u.contains(t) ? t : (console.error("aria-hidden", e, "in not contained inside", u, ". Doing nothing"),
            null)
        }).filter(function(e) {
            return !!e
        });
        r[a] || (r[a] = new WeakMap);
        var l = r[a]
          , d = []
          , f = new Set
          , m = new Set(s)
          , p = function(e) {
            !e || f.has(e) || (f.add(e),
            p(e.parentNode))
        };
        s.forEach(p);
        var v = function(e) {
            !e || m.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e))
                    v(e);
                else
                    try {
                        var r = e.getAttribute(c)
                          , o = null !== r && "false" !== r
                          , i = (t.get(e) || 0) + 1
                          , u = (l.get(e) || 0) + 1;
                        t.set(e, i),
                        l.set(e, u),
                        d.push(e),
                        1 === i && o && n.set(e, !0),
                        1 === u && e.setAttribute(a, "true"),
                        o || e.setAttribute(c, "true")
                    } catch (t) {
                        console.error("aria-hidden: cannot operate on ", e, t)
                    }
            })
        };
        return v(u),
        f.clear(),
        o++,
        function() {
            d.forEach(function(e) {
                var r = t.get(e) - 1
                  , o = l.get(e) - 1;
                t.set(e, r),
                l.set(e, o),
                r || (n.has(e) || e.removeAttribute(c),
                n.delete(e)),
                o || e.removeAttribute(a)
            }),
            --o || (t = new WeakMap,
            t = new WeakMap,
            n = new WeakMap,
            r = {})
        }
    };
    e.s(["hideOthers", 0, function(e, t, n) {
        void 0 === n && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e])
          , o = t || ("u" < typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))),
        u(r, o, n, "aria-hidden")) : function() {
            return null
        }
    }
    ])
}
, 985369, e => {
    "use strict";
    var t, n, r, o, i, u, a, c = e.i(290571), s = e.i(271645), l = "right-scroll-bar-position", d = "width-before-scroll-bar";
    function f(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t),
        e
    }
    var m = "u" > typeof window ? s.useLayoutEffect : s.useEffect
      , p = new WeakMap
      , v = (void 0 === t && (t = {}),
    (void 0 === n && (n = function(e) {
        return e
    }
    ),
    r = [],
    o = !1,
    i = {
        read: function() {
            if (o)
                throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return r.length ? r[r.length - 1] : null
        },
        useMedium: function(e) {
            var t = n(e, o);
            return r.push(t),
            function() {
                r = r.filter(function(e) {
                    return e !== t
                })
            }
        },
        assignSyncMedium: function(e) {
            for (o = !0; r.length; ) {
                var t = r;
                r = [],
                t.forEach(e)
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
            o = !0;
            var t = [];
            if (r.length) {
                var n = r;
                r = [],
                n.forEach(e),
                t = r
            }
            var i = function() {
                var n = t;
                t = [],
                n.forEach(e)
            }
              , u = function() {
                return Promise.resolve().then(i)
            };
            u(),
            r = {
                push: function(e) {
                    t.push(e),
                    u()
                },
                filter: function(e) {
                    return t = t.filter(e),
                    r
                }
            }
        }
    }).options = (0,
    c.__assign)({
        async: !0,
        ssr: !1
    }, t),
    i)
      , h = function() {}
      , y = s.forwardRef(function(e, t) {
        var n, r, o, i, u = s.useRef(null), a = s.useState({
            onScrollCapture: h,
            onWheelCapture: h,
            onTouchMoveCapture: h
        }), l = a[0], d = a[1], y = e.forwardProps, b = e.children, E = e.className, g = e.removeScrollBar, w = e.enabled, S = e.shards, C = e.sideCar, R = e.noRelative, P = e.noIsolation, N = e.inert, O = e.allowPinchZoom, L = e.as, T = e.gapMode, M = (0,
        c.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = (n = [u, t],
        r = function(e) {
            return n.forEach(function(t) {
                return f(t, e)
            })
        }
        ,
        (o = (0,
        s.useState)(function() {
            return {
                value: null,
                callback: r,
                facade: {
                    get current() {
                        return o.value
                    },
                    set current(value) {
                        var e = o.value;
                        e !== value && (o.value = value,
                        o.callback(value, e))
                    }
                }
            }
        })[0]).callback = r,
        i = o.facade,
        m(function() {
            var e = p.get(i);
            if (e) {
                var t = new Set(e)
                  , r = new Set(n)
                  , o = i.current;
                t.forEach(function(e) {
                    r.has(e) || f(e, null)
                }),
                r.forEach(function(e) {
                    t.has(e) || f(e, o)
                })
            }
            p.set(i, n)
        }, [n]),
        i), _ = (0,
        c.__assign)((0,
        c.__assign)({}, M), l);
        return s.createElement(s.Fragment, null, w && s.createElement(C, {
            sideCar: v,
            removeScrollBar: g,
            shards: S,
            noRelative: R,
            noIsolation: P,
            inert: N,
            setCallbacks: d,
            allowPinchZoom: !!O,
            lockRef: u,
            gapMode: T
        }), y ? s.cloneElement(s.Children.only(b), (0,
        c.__assign)((0,
        c.__assign)({}, _), {
            ref: k
        })) : s.createElement(void 0 === L ? "div" : L, (0,
        c.__assign)({}, _, {
            className: E,
            ref: k
        }), b))
    });
    y.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
    },
    y.classNames = {
        fullWidth: d,
        zeroRight: l
    };
    var b = function(e) {
        var t = e.sideCar
          , n = (0,
        c.__rest)(e, ["sideCar"]);
        if (!t)
            throw Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = t.read();
        if (!r)
            throw Error("Sidecar medium not found");
        return s.createElement(r, (0,
        c.__assign)({}, n))
    };
    b.isSideCarExport = !0;
    var E = function() {
        var e = 0
          , t = null;
        return {
            add: function(n) {
                if (0 == e && (t = function() {
                    if (!document)
                        return null;
                    var e = document.createElement("style");
                    e.type = "text/css";
                    var t = a || ("u" > typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
                    return t && e.setAttribute("nonce", t),
                    e
                }())) {
                    var r, o;
                    (r = t).styleSheet ? r.styleSheet.cssText = n : r.appendChild(document.createTextNode(n)),
                    o = t,
                    (document.head || document.getElementsByTagName("head")[0]).appendChild(o)
                }
                e++
            },
            remove: function() {
                --e || !t || (t.parentNode && t.parentNode.removeChild(t),
                t = null)
            }
        }
    }
      , g = function() {
        var e = E();
        return function(t, n) {
            s.useEffect(function() {
                return e.add(t),
                function() {
                    e.remove()
                }
            }, [t && n])
        }
    }
      , w = function() {
        var e = g();
        return function(t) {
            return e(t.styles, t.dynamic),
            null
        }
    }
      , S = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    }
      , C = function(e) {
        return parseInt(e || "", 10) || 0
    }
      , R = function(e) {
        var t = window.getComputedStyle(document.body)
          , n = t["padding" === e ? "paddingLeft" : "marginLeft"]
          , r = t["padding" === e ? "paddingTop" : "marginTop"]
          , o = t["padding" === e ? "paddingRight" : "marginRight"];
        return [C(n), C(r), C(o)]
    }
      , P = function(e) {
        if (void 0 === e && (e = "margin"),
        "u" < typeof window)
            return S;
        var t = R(e)
          , n = document.documentElement.clientWidth
          , r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    }
      , N = w()
      , O = "data-scroll-locked"
      , L = function(e, t, n, r) {
        var o = e.left
          , i = e.top
          , u = e.right
          , a = e.gap;
        return void 0 === n && (n = "margin"),
        "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(a, "px ").concat(r, ";\n  }\n  body[").concat(O, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(l, " {\n    right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(d, " {\n    margin-right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(l, " .").concat(l, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(d, " .").concat(d, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(O, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
    }
      , T = function() {
        var e = parseInt(document.body.getAttribute(O) || "0", 10);
        return isFinite(e) ? e : 0
    }
      , M = function() {
        s.useEffect(function() {
            return document.body.setAttribute(O, (T() + 1).toString()),
            function() {
                var e = T() - 1;
                e <= 0 ? document.body.removeAttribute(O) : document.body.setAttribute(O, e.toString())
            }
        }, [])
    }
      , k = function(e) {
        var t = e.noRelative
          , n = e.noImportant
          , r = e.gapMode
          , o = void 0 === r ? "margin" : r;
        M();
        var i = s.useMemo(function() {
            return P(o)
        }, [o]);
        return s.createElement(N, {
            styles: L(i, !t, o, n ? "" : "!important")
        })
    }
      , _ = !1;
    if ("u" > typeof window)
        try {
            var A = Object.defineProperty({}, "passive", {
                get: function() {
                    return _ = !0,
                    !0
                }
            });
            window.addEventListener("test", A, A),
            window.removeEventListener("test", A, A)
        } catch (e) {
            _ = !1
        }
    var x = !!_ && {
        passive: !1
    }
      , D = function(e, t) {
        if (!(e instanceof Element))
            return !1;
        var n = window.getComputedStyle(e);
        return "hidden" !== n[t] && (n.overflowY !== n.overflowX || "TEXTAREA" === e.tagName || "visible" !== n[t])
    }
      , I = function(e, t) {
        var n = t.ownerDocument
          , r = t;
        do {
            if ("u" > typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host),
            F(e, r)) {
                var o = j(e, r);
                if (o[1] > o[2])
                    return !0
            }
            r = r.parentNode
        } while (r && r !== n.body) return !1
    }
      , F = function(e, t) {
        return "v" === e ? D(t, "overflowY") : D(t, "overflowX")
    }
      , j = function(e, t) {
        return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
    }
      , W = function(e, t, n, r, o) {
        var i, u = (i = window.getComputedStyle(t).direction,
        "h" === e && "rtl" === i ? -1 : 1), a = u * r, c = n.target, s = t.contains(c), l = !1, d = a > 0, f = 0, m = 0;
        do {
            if (!c)
                break;
            var p = j(e, c)
              , v = p[0]
              , h = p[1] - p[2] - u * v;
            (v || h) && F(e, c) && (f += h,
            m += v);
            var y = c.parentNode;
            c = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y
        } while (!s && c !== document.body || s && (t.contains(c) || t === c)) return d && (o && 1 > Math.abs(f) || !o && a > f) ? l = !0 : !d && (o && 1 > Math.abs(m) || !o && -a > m) && (l = !0),
        l
    }
      , U = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    }
      , B = function(e) {
        return [e.deltaX, e.deltaY]
    }
      , $ = function(e) {
        return e && "current" in e ? e.current : e
    }
      , V = 0
      , H = [];
    let K = (u = function(e) {
        var t = s.useRef([])
          , n = s.useRef([0, 0])
          , r = s.useRef()
          , o = s.useState(V++)[0]
          , i = s.useState(w)[0]
          , u = s.useRef(e);
        s.useEffect(function() {
            u.current = e
        }, [e]),
        s.useEffect(function() {
            if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(o));
                var t = (0,
                c.__spreadArray)([e.lockRef.current], (e.shards || []).map($), !0).filter(Boolean);
                return t.forEach(function(e) {
                    return e.classList.add("allow-interactivity-".concat(o))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(o)),
                    t.forEach(function(e) {
                        return e.classList.remove("allow-interactivity-".concat(o))
                    })
                }
            }
        }, [e.inert, e.lockRef.current, e.shards]);
        var a = s.useCallback(function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey)
                return !u.current.allowPinchZoom;
            var o, i = U(e), a = n.current, c = "deltaX" in e ? e.deltaX : a[0] - i[0], s = "deltaY" in e ? e.deltaY : a[1] - i[1], l = e.target, d = Math.abs(c) > Math.abs(s) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === l.type)
                return !1;
            var f = window.getSelection()
              , m = f && f.anchorNode;
            if (m && (m === l || m.contains(l)))
                return !1;
            var p = I(d, l);
            if (!p)
                return !0;
            if (p ? o = d : (o = "v" === d ? "h" : "v",
            p = I(d, l)),
            !p)
                return !1;
            if (!r.current && "changedTouches" in e && (c || s) && (r.current = o),
            !o)
                return !0;
            var v = r.current || o;
            return W(v, t, e, "h" === v ? c : s, !0)
        }, [])
          , l = s.useCallback(function(e) {
            if (H.length && H[H.length - 1] === i) {
                var n = "deltaY" in e ? B(e) : U(e)
                  , r = t.current.filter(function(t) {
                    var r;
                    return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta,
                    r[0] === n[0] && r[1] === n[1])
                })[0];
                if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return
                }
                if (!r) {
                    var o = (u.current.shards || []).map($).filter(Boolean).filter(function(t) {
                        return t.contains(e.target)
                    });
                    (o.length > 0 ? a(e, o[0]) : !u.current.noIsolation) && e.cancelable && e.preventDefault()
                }
            }
        }, [])
          , d = s.useCallback(function(e, n, r, o) {
            var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: function(e) {
                    for (var t = null; null !== e; )
                        e instanceof ShadowRoot && (t = e.host,
                        e = e.host),
                        e = e.parentNode;
                    return t
                }(r)
            };
            t.current.push(i),
            setTimeout(function() {
                t.current = t.current.filter(function(e) {
                    return e !== i
                })
            }, 1)
        }, [])
          , f = s.useCallback(function(e) {
            n.current = U(e),
            r.current = void 0
        }, [])
          , m = s.useCallback(function(t) {
            d(t.type, B(t), t.target, a(t, e.lockRef.current))
        }, [])
          , p = s.useCallback(function(t) {
            d(t.type, U(t), t.target, a(t, e.lockRef.current))
        }, []);
        s.useEffect(function() {
            return H.push(i),
            e.setCallbacks({
                onScrollCapture: m,
                onWheelCapture: m,
                onTouchMoveCapture: p
            }),
            document.addEventListener("wheel", l, x),
            document.addEventListener("touchmove", l, x),
            document.addEventListener("touchstart", f, x),
            function() {
                H = H.filter(function(e) {
                    return e !== i
                }),
                document.removeEventListener("wheel", l, x),
                document.removeEventListener("touchmove", l, x),
                document.removeEventListener("touchstart", f, x)
            }
        }, []);
        var v = e.removeScrollBar
          , h = e.inert;
        return s.createElement(s.Fragment, null, h ? s.createElement(i, {
            styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
        }) : null, v ? s.createElement(k, {
            noRelative: e.noRelative,
            gapMode: e.gapMode
        }) : null)
    }
    ,
    v.useMedium(u),
    b);
    var X = s.forwardRef(function(e, t) {
        return s.createElement(y, (0,
        c.__assign)({}, e, {
            ref: t,
            sideCar: K
        }))
    });
    X.classNames = y.classNames,
    e.s(["RemoveScroll", 0, X], 985369)
}
]);
