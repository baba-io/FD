(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 834469, e => {
    "use strict";
    var t = e.i(50270);
    t.z.object({
        name: t.z.string().trim().min(1).max(80),
        description: t.z.string().trim().max(1e3),
        price_cents: t.z.number().int().min(50).max(1e8),
        published: t.z.boolean(),
        opens_at: t.z.string().datetime({
            offset: !0
        }).nullable(),
        closes_at: t.z.string().datetime({
            offset: !0
        }).nullable(),
        badge_label: t.z.string().trim().min(1).max(40).nullable(),
        item_ids: t.z.array(t.z.string().uuid()).max(100)
    }).superRefine( (e, t) => {
        new Set(e.item_ids).size !== e.item_ids.length && t.addIssue({
            code: "custom",
            path: ["item_ids"],
            message: "Choose each item once."
        }),
        e.published && !e.item_ids.length && t.addIssue({
            code: "custom",
            path: ["item_ids"],
            message: "Add items before publishing."
        }),
        e.opens_at && e.closes_at && Date.parse(e.closes_at) <= Date.parse(e.opens_at) && t.addIssue({
            code: "custom",
            path: ["closes_at"],
            message: "Closing must be after opening."
        })
    }
    ),
    e.s(["money", 0, function(e) {
        return new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(e / 100)
    }
    , "newPack", 0, function() {
        return {
            name: "",
            description: "",
            price_cents: 500,
            published: !1,
            opens_at: null,
            closes_at: null,
            badge_label: null,
            item_ids: []
        }
    }
    ])
}
, 326999, e => {
    "use strict";
    let t, n, r;
    var o, i, s = e.i(271645);
    function u(e, t, {checkForDefaultPrevented: n=!0}={}) {
        return function(r) {
            if (e?.(r),
            !1 === n || !r.defaultPrevented)
                return t?.(r)
        }
    }
    function l(e, t) {
        if ("function" == typeof e)
            return e(t);
        null != e && (e.current = t)
    }
    function a(...e) {
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
    function c(...e) {
        return s.useCallback(a(...e), e)
    }
    "u" > typeof window && window.document && window.document.createElement;
    var d = e.i(843476)
      , f = globalThis?.document ? s.useLayoutEffect : () => {}
      , m = s[" useId ".trim().toString()] || ( () => void 0)
      , p = 0;
    function v(e) {
        let[t,n] = s.useState(m());
        return f( () => {
            e || n(e => e ?? String(p++))
        }
        , [e]),
        e || (t ? `radix-${t}` : "")
    }
    s[" useEffectEvent ".trim().toString()],
    s[" useInsertionEffect ".trim().toString()];
    var g = s[" useInsertionEffect ".trim().toString()] || f;
    Symbol("RADIX:SYNC_STATE");
    var y = e.i(174080);
    function E(e) {
        var t;
        let n, r = (t = e,
        (n = s.forwardRef( (e, t) => {
            let {children: n, ...r} = e;
            if (s.isValidElement(n)) {
                var o;
                let e, i, u = (o = n,
                (i = (e = Object.getOwnPropertyDescriptor(o.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? o.ref : (i = (e = Object.getOwnPropertyDescriptor(o, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? o.props.ref : o.props.ref || o.ref), l = function(e, t) {
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
                }(r, n.props);
                return n.type !== s.Fragment && (l.ref = t ? a(t, u) : u),
                s.cloneElement(n, l)
            }
            return s.Children.count(n) > 1 ? s.Children.only(null) : null
        }
        )).displayName = `${t}.SlotClone`,
        n), o = s.forwardRef( (e, t) => {
            let {children: n, ...o} = e
              , i = s.Children.toArray(n)
              , u = i.find(h);
            if (u) {
                let e = u.props.children
                  , n = i.map(t => t !== u ? t : s.Children.count(e) > 1 ? s.Children.only(null) : s.isValidElement(e) ? e.props.children : null);
                return (0,
                d.jsx)(r, {
                    ...o,
                    ref: t,
                    children: s.isValidElement(e) ? s.cloneElement(e, void 0, n) : null
                })
            }
            return (0,
            d.jsx)(r, {
                ...o,
                ref: t,
                children: n
            })
        }
        );
        return o.displayName = `${e}.Slot`,
        o
    }
    var b = Symbol("radix.slottable");
    function h(e) {
        return s.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === b
    }
    var w = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce( (e, t) => {
        let n = E(`Primitive.${t}`)
          , r = s.forwardRef( (e, r) => {
            let {asChild: o, ...i} = e;
            return "u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
            (0,
            d.jsx)(o ? n : t, {
                ...i,
                ref: r
            })
        }
        );
        return r.displayName = `Primitive.${t}`,
        {
            ...e,
            [t]: r
        }
    }
    , {});
    function N(e) {
        let t = s.useRef(e);
        return s.useEffect( () => {
            t.current = e
        }
        ),
        s.useMemo( () => (...e) => t.current?.(...e), [])
    }
    var C = "dismissableLayer.update"
      , x = s.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    })
      , D = s.forwardRef( (e, t) => {
        let {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: l, onInteractOutside: a, onDismiss: f, ...m} = e
          , p = s.useContext(x)
          , [v,g] = s.useState(null)
          , y = v?.ownerDocument ?? globalThis?.document
          , [,E] = s.useState({})
          , b = c(t, e => g(e))
          , h = Array.from(p.layers)
          , [D] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1)
          , _ = h.indexOf(D)
          , P = v ? h.indexOf(v) : -1
          , T = p.layersWithOutsidePointerEventsDisabled.size > 0
          , S = P >= _
          , I = function(e, t=globalThis?.document) {
            let n = N(e)
              , r = s.useRef(!1)
              , o = s.useRef( () => {}
            );
            return s.useEffect( () => {
                let e = e => {
                    if (e.target && !r.current) {
                        let r = function() {
                            O("dismissableLayer.pointerDownOutside", n, i, {
                                discrete: !0
                            })
                        }
                          , i = {
                            originalEvent: e
                        };
                        "touch" === e.pointerType ? (t.removeEventListener("click", o.current),
                        o.current = r,
                        t.addEventListener("click", o.current, {
                            once: !0
                        })) : r()
                    } else
                        t.removeEventListener("click", o.current);
                    r.current = !1
                }
                  , i = window.setTimeout( () => {
                    t.addEventListener("pointerdown", e)
                }
                , 0);
                return () => {
                    window.clearTimeout(i),
                    t.removeEventListener("pointerdown", e),
                    t.removeEventListener("click", o.current)
                }
            }
            , [t, n]),
            {
                onPointerDownCapture: () => r.current = !0
            }
        }(e => {
            let t = e.target
              , n = [...p.branches].some(e => e.contains(t));
            S && !n && (o?.(e),
            a?.(e),
            e.defaultPrevented || f?.())
        }
        , y)
          , j = function(e, t=globalThis?.document) {
            let n = N(e)
              , r = s.useRef(!1);
            return s.useEffect( () => {
                let e = e => {
                    e.target && !r.current && O("dismissableLayer.focusOutside", n, {
                        originalEvent: e
                    }, {
                        discrete: !1
                    })
                }
                ;
                return t.addEventListener("focusin", e),
                () => t.removeEventListener("focusin", e)
            }
            , [t, n]),
            {
                onFocusCapture: () => r.current = !0,
                onBlurCapture: () => r.current = !1
            }
        }(e => {
            let t = e.target;
            ![...p.branches].some(e => e.contains(t)) && (l?.(e),
            a?.(e),
            e.defaultPrevented || f?.())
        }
        , y);
        return !function(e, t=globalThis?.document) {
            let n = N(e);
            s.useEffect( () => {
                let e = e => {
                    "Escape" === e.key && n(e)
                }
                ;
                return t.addEventListener("keydown", e, {
                    capture: !0
                }),
                () => t.removeEventListener("keydown", e, {
                    capture: !0
                })
            }
            , [n, t])
        }(e => {
            P === p.layers.size - 1 && (r?.(e),
            !e.defaultPrevented && f && (e.preventDefault(),
            f()))
        }
        , y),
        s.useEffect( () => {
            if (v)
                return n && (0 === p.layersWithOutsidePointerEventsDisabled.size && (i = y.body.style.pointerEvents,
                y.body.style.pointerEvents = "none"),
                p.layersWithOutsidePointerEventsDisabled.add(v)),
                p.layers.add(v),
                R(),
                () => {
                    n && 1 === p.layersWithOutsidePointerEventsDisabled.size && (y.body.style.pointerEvents = i)
                }
        }
        , [v, y, n, p]),
        s.useEffect( () => () => {
            v && (p.layers.delete(v),
            p.layersWithOutsidePointerEventsDisabled.delete(v),
            R())
        }
        , [v, p]),
        s.useEffect( () => {
            let e = () => E({});
            return document.addEventListener(C, e),
            () => document.removeEventListener(C, e)
        }
        , []),
        (0,
        d.jsx)(w.div, {
            ...m,
            ref: b,
            style: {
                pointerEvents: T ? S ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: u(e.onFocusCapture, j.onFocusCapture),
            onBlurCapture: u(e.onBlurCapture, j.onBlurCapture),
            onPointerDownCapture: u(e.onPointerDownCapture, I.onPointerDownCapture)
        })
    }
    );
    function R() {
        let e = new CustomEvent(C);
        document.dispatchEvent(e)
    }
    function O(e, t, n, {discrete: r}) {
        let o = n.originalEvent.target
          , i = new CustomEvent(e,{
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
        if (t && o.addEventListener(e, t, {
            once: !0
        }),
        r)
            o && y.flushSync( () => o.dispatchEvent(i));
        else
            o.dispatchEvent(i)
    }
    D.displayName = "DismissableLayer",
    s.forwardRef( (e, t) => {
        let n = s.useContext(x)
          , r = s.useRef(null)
          , o = c(t, r);
        return s.useEffect( () => {
            let e = r.current;
            if (e)
                return n.branches.add(e),
                () => {
                    n.branches.delete(e)
                }
        }
        , [n.branches]),
        (0,
        d.jsx)(w.div, {
            ...e,
            ref: o
        })
    }
    ).displayName = "DismissableLayerBranch";
    var _ = "focusScope.autoFocusOnMount"
      , P = "focusScope.autoFocusOnUnmount"
      , T = {
        bubbles: !1,
        cancelable: !0
    }
      , S = s.forwardRef( (e, t) => {
        let {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...u} = e
          , [l,a] = s.useState(null)
          , f = N(o)
          , m = N(i)
          , p = s.useRef(null)
          , v = c(t, e => a(e))
          , g = s.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        s.useEffect( () => {
            if (r) {
                let e = function(e) {
                    if (g.paused || !l)
                        return;
                    let t = e.target;
                    l.contains(t) ? p.current = t : L(p.current, {
                        select: !0
                    })
                }
                  , t = function(e) {
                    if (g.paused || !l)
                        return;
                    let t = e.relatedTarget;
                    null !== t && (l.contains(t) || L(p.current, {
                        select: !0
                    }))
                };
                document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
                let n = new MutationObserver(function(e) {
                    if (document.activeElement === document.body)
                        for (let t of e)
                            t.removedNodes.length > 0 && L(l)
                }
                );
                return l && n.observe(l, {
                    childList: !0,
                    subtree: !0
                }),
                () => {
                    document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect()
                }
            }
        }
        , [r, l, g.paused]),
        s.useEffect( () => {
            if (l) {
                F.add(g);
                let e = document.activeElement;
                if (!l.contains(e)) {
                    let t = new CustomEvent(_,T);
                    l.addEventListener(_, f),
                    l.dispatchEvent(t),
                    t.defaultPrevented || (function(e, {select: t=!1}={}) {
                        let n = document.activeElement;
                        for (let r of e)
                            if (L(r, {
                                select: t
                            }),
                            document.activeElement !== n)
                                return
                    }(I(l).filter(e => "A" !== e.tagName), {
                        select: !0
                    }),
                    document.activeElement === e && L(l))
                }
                return () => {
                    l.removeEventListener(_, f),
                    setTimeout( () => {
                        let t = new CustomEvent(P,T);
                        l.addEventListener(P, m),
                        l.dispatchEvent(t),
                        t.defaultPrevented || L(e ?? document.body, {
                            select: !0
                        }),
                        l.removeEventListener(P, m),
                        F.remove(g)
                    }
                    , 0)
                }
            }
        }
        , [l, f, m, g]);
        let y = s.useCallback(e => {
            if (!n && !r || g.paused)
                return;
            let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey
              , o = document.activeElement;
            if (t && o) {
                var i;
                let t, r = e.currentTarget, [s,u] = [j(t = I(i = r), i), j(t.reverse(), i)];
                s && u ? e.shiftKey || o !== u ? e.shiftKey && o === s && (e.preventDefault(),
                n && L(u, {
                    select: !0
                })) : (e.preventDefault(),
                n && L(s, {
                    select: !0
                })) : o === r && e.preventDefault()
            }
        }
        , [n, r, g.paused]);
        return (0,
        d.jsx)(w.div, {
            tabIndex: -1,
            ...u,
            ref: v,
            onKeyDown: y
        })
    }
    );
    function I(e) {
        let t = []
          , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
                let t = "INPUT" === e.tagName && "hidden" === e.type;
                return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
        for (; n.nextNode(); )
            t.push(n.currentNode);
        return t
    }
    function j(e, t) {
        for (let n of e)
            if (!function(e, {upTo: t}) {
                if ("hidden" === getComputedStyle(e).visibility)
                    return !0;
                for (; e && (void 0 === t || e !== t); ) {
                    if ("none" === getComputedStyle(e).display)
                        return !0;
                    e = e.parentElement
                }
                return !1
            }(n, {
                upTo: t
            }))
                return n
    }
    function L(e, {select: t=!1}={}) {
        if (e && e.focus) {
            var n;
            let r = document.activeElement;
            e.focus({
                preventScroll: !0
            }),
            e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
        }
    }
    S.displayName = "FocusScope";
    var F = (r = [],
    {
        add(e) {
            let t = r[0];
            e !== t && t?.pause(),
            (r = A(r, e)).unshift(e)
        },
        remove(e) {
            r = A(r, e),
            r[0]?.resume()
        }
    });
    function A(e, t) {
        let n = [...e]
          , r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1),
        n
    }
    var M = s.forwardRef( (e, t) => {
        let {container: n, ...r} = e
          , [o,i] = s.useState(!1);
        f( () => i(!0), []);
        let u = n || o && globalThis?.document?.body;
        return u ? y.default.createPortal((0,
        d.jsx)(w.div, {
            ...r,
            ref: t
        }), u) : null
    }
    );
    M.displayName = "Portal";
    var W = e => {
        var t;
        let n, r, {present: o, children: i} = e, u = function(e) {
            var t, n;
            let[r,o] = s.useState()
              , i = s.useRef(null)
              , u = s.useRef(e)
              , l = s.useRef("none")
              , [a,c] = (t = e ? "mounted" : "unmounted",
            n = {
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
            },
            s.useReducer( (e, t) => n[e][t] ?? e, t));
            return s.useEffect( () => {
                let e = $(i.current);
                l.current = "mounted" === a ? e : "none"
            }
            , [a]),
            f( () => {
                let t = i.current
                  , n = u.current;
                if (n !== e) {
                    let r = l.current
                      , o = $(t);
                    e ? c("MOUNT") : "none" === o || t?.display === "none" ? c("UNMOUNT") : n && r !== o ? c("ANIMATION_OUT") : c("UNMOUNT"),
                    u.current = e
                }
            }
            , [e, c]),
            f( () => {
                if (r) {
                    let e, t = r.ownerDocument.defaultView ?? window, n = n => {
                        let o = $(i.current).includes(CSS.escape(n.animationName));
                        if (n.target === r && o && (c("ANIMATION_END"),
                        !u.current)) {
                            let n = r.style.animationFillMode;
                            r.style.animationFillMode = "forwards",
                            e = t.setTimeout( () => {
                                "forwards" === r.style.animationFillMode && (r.style.animationFillMode = n)
                            }
                            )
                        }
                    }
                    , o = e => {
                        e.target === r && (l.current = $(i.current))
                    }
                    ;
                    return r.addEventListener("animationstart", o),
                    r.addEventListener("animationcancel", n),
                    r.addEventListener("animationend", n),
                    () => {
                        t.clearTimeout(e),
                        r.removeEventListener("animationstart", o),
                        r.removeEventListener("animationcancel", n),
                        r.removeEventListener("animationend", n)
                    }
                }
                c("ANIMATION_END")
            }
            , [r, c]),
            {
                isPresent: ["mounted", "unmountSuspended"].includes(a),
                ref: s.useCallback(e => {
                    i.current = e ? getComputedStyle(e) : null,
                    o(e)
                }
                , [])
            }
        }(o), l = "function" == typeof i ? i({
            present: u.isPresent
        }) : s.Children.only(i), a = c(u.ref, (t = l,
        (r = (n = Object.getOwnPropertyDescriptor(t.props, "ref")?.get) && "isReactWarning" in n && n.isReactWarning) ? t.ref : (r = (n = Object.getOwnPropertyDescriptor(t, "ref")?.get) && "isReactWarning" in n && n.isReactWarning) ? t.props.ref : t.props.ref || t.ref));
        return "function" == typeof i || u.isPresent ? s.cloneElement(l, {
            ref: a
        }) : null
    }
    ;
    function $(e) {
        return e?.animationName || "none"
    }
    W.displayName = "Presence";
    var k = 0;
    function U() {
        let e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""),
        e.tabIndex = 0,
        e.style.outline = "none",
        e.style.opacity = "0",
        e.style.position = "fixed",
        e.style.pointerEvents = "none",
        e
    }
    var z = e.i(985369)
      , K = e.i(186312)
      , B = "Dialog"
      , [V,q] = function(e, t=[]) {
        let n = []
          , r = () => {
            let t = n.map(e => s.createContext(e));
            return function(n) {
                let r = n?.[e] || t;
                return s.useMemo( () => ({
                    [`__scope${e}`]: {
                        ...n,
                        [e]: r
                    }
                }), [n, r])
            }
        }
        ;
        return r.scopeName = e,
        [function(t, r) {
            let o = s.createContext(r)
              , i = n.length;
            n = [...n, r];
            let u = t => {
                let {scope: n, children: r, ...u} = t
                  , l = n?.[e]?.[i] || o
                  , a = s.useMemo( () => u, Object.values(u));
                return (0,
                d.jsx)(l.Provider, {
                    value: a,
                    children: r
                })
            }
            ;
            return u.displayName = t + "Provider",
            [u, function(n, u) {
                let l = u?.[e]?.[i] || o
                  , a = s.useContext(l);
                if (a)
                    return a;
                if (void 0 !== r)
                    return r;
                throw Error(`\`${n}\` must be used within \`${t}\``)
            }
            ]
        }
        , function(...e) {
            let t = e[0];
            if (1 === e.length)
                return t;
            let n = () => {
                let n = e.map(e => ({
                    useScope: e(),
                    scopeName: e.scopeName
                }));
                return function(e) {
                    let r = n.reduce( (t, {useScope: n, scopeName: r}) => {
                        let o = n(e)[`__scope${r}`];
                        return {
                            ...t,
                            ...o
                        }
                    }
                    , {});
                    return s.useMemo( () => ({
                        [`__scope${t.scopeName}`]: r
                    }), [r])
                }
            }
            ;
            return n.scopeName = t.scopeName,
            n
        }(r, ...t)]
    }(B)
      , [H,Z] = V(B)
      , X = e => {
        let {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: u=!0} = e
          , l = s.useRef(null)
          , a = s.useRef(null)
          , [c,f] = function({prop: e, defaultProp: t, onChange: n= () => {}
        , caller: r}) {
            let[o,i,u] = function({defaultProp: e, onChange: t}) {
                let[n,r] = s.useState(e)
                  , o = s.useRef(n)
                  , i = s.useRef(t);
                return g( () => {
                    i.current = t
                }
                , [t]),
                s.useEffect( () => {
                    o.current !== n && (i.current?.(n),
                    o.current = n)
                }
                , [n, o]),
                [n, r, i]
            }({
                defaultProp: t,
                onChange: n
            })
              , l = void 0 !== e
              , a = l ? e : o;
            {
                let t = s.useRef(void 0 !== e);
                s.useEffect( () => {
                    let e = t.current;
                    if (e !== l) {
                        let t = l ? "controlled" : "uncontrolled";
                        console.warn(`${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
                    }
                    t.current = l
                }
                , [l, r])
            }
            return [a, s.useCallback(t => {
                if (l) {
                    let n = "function" == typeof t ? t(e) : t;
                    n !== e && u.current?.(n)
                } else
                    i(t)
            }
            , [l, e, i, u])]
        }({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: B
        });
        return (0,
        d.jsx)(H, {
            scope: t,
            triggerRef: l,
            contentRef: a,
            contentId: v(),
            titleId: v(),
            descriptionId: v(),
            open: c,
            onOpenChange: f,
            onOpenToggle: s.useCallback( () => f(e => !e), [f]),
            modal: u,
            children: n
        })
    }
    ;
    X.displayName = B;
    var Y = "DialogTrigger"
      , G = s.forwardRef( (e, t) => {
        let {__scopeDialog: n, ...r} = e
          , o = Z(Y, n)
          , i = c(t, o.triggerRef);
        return (0,
        d.jsx)(w.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": ey(o.open),
            ...r,
            ref: i,
            onClick: u(e.onClick, o.onOpenToggle)
        })
    }
    );
    G.displayName = Y;
    var J = "DialogPortal"
      , [Q,ee] = V(J, {
        forceMount: void 0
    })
      , et = e => {
        let {__scopeDialog: t, forceMount: n, children: r, container: o} = e
          , i = Z(J, t);
        return (0,
        d.jsx)(Q, {
            scope: t,
            forceMount: n,
            children: s.Children.map(r, e => (0,
            d.jsx)(W, {
                present: n || i.open,
                children: (0,
                d.jsx)(M, {
                    asChild: !0,
                    container: o,
                    children: e
                })
            }))
        })
    }
    ;
    et.displayName = J;
    var en = "DialogOverlay"
      , er = s.forwardRef( (e, t) => {
        let n = ee(en, e.__scopeDialog)
          , {forceMount: r=n.forceMount, ...o} = e
          , i = Z(en, e.__scopeDialog);
        return i.modal ? (0,
        d.jsx)(W, {
            present: r || i.open,
            children: (0,
            d.jsx)(ei, {
                ...o,
                ref: t
            })
        }) : null
    }
    );
    er.displayName = en;
    var eo = E("DialogOverlay.RemoveScroll")
      , ei = s.forwardRef( (e, t) => {
        let {__scopeDialog: n, ...r} = e
          , o = Z(en, n);
        return (0,
        d.jsx)(z.RemoveScroll, {
            as: eo,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0,
            d.jsx)(w.div, {
                "data-state": ey(o.open),
                ...r,
                ref: t,
                style: {
                    pointerEvents: "auto",
                    ...r.style
                }
            })
        })
    }
    )
      , es = "DialogContent"
      , eu = s.forwardRef( (e, t) => {
        let n = ee(es, e.__scopeDialog)
          , {forceMount: r=n.forceMount, ...o} = e
          , i = Z(es, e.__scopeDialog);
        return (0,
        d.jsx)(W, {
            present: r || i.open,
            children: i.modal ? (0,
            d.jsx)(el, {
                ...o,
                ref: t
            }) : (0,
            d.jsx)(ea, {
                ...o,
                ref: t
            })
        })
    }
    );
    eu.displayName = es;
    var el = s.forwardRef( (e, t) => {
        let n = Z(es, e.__scopeDialog)
          , r = s.useRef(null)
          , o = c(t, n.contentRef, r);
        return s.useEffect( () => {
            let e = r.current;
            if (e)
                return (0,
                K.hideOthers)(e)
        }
        , []),
        (0,
        d.jsx)(ec, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: u(e.onCloseAutoFocus, e => {
                e.preventDefault(),
                n.triggerRef.current?.focus()
            }
            ),
            onPointerDownOutside: u(e.onPointerDownOutside, e => {
                let t = e.detail.originalEvent
                  , n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault()
            }
            ),
            onFocusOutside: u(e.onFocusOutside, e => e.preventDefault())
        })
    }
    )
      , ea = s.forwardRef( (e, t) => {
        let n = Z(es, e.__scopeDialog)
          , r = s.useRef(!1)
          , o = s.useRef(!1);
        return (0,
        d.jsx)(ec, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
                e.onCloseAutoFocus?.(t),
                t.defaultPrevented || (r.current || n.triggerRef.current?.focus(),
                t.preventDefault()),
                r.current = !1,
                o.current = !1
            }
            ,
            onInteractOutside: t => {
                e.onInteractOutside?.(t),
                t.defaultPrevented || (r.current = !0,
                "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
                let i = t.target;
                n.triggerRef.current?.contains(i) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
        })
    }
    )
      , ec = s.forwardRef( (e, t) => {
        let {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...u} = e
          , l = Z(es, n)
          , a = s.useRef(null)
          , f = c(t, a);
        return s.useEffect( () => {
            let e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? U()),
            document.body.insertAdjacentElement("beforeend", e[1] ?? U()),
            k++,
            () => {
                1 === k && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()),
                k--
            }
        }
        , []),
        (0,
        d.jsxs)(d.Fragment, {
            children: [(0,
            d.jsx)(S, {
                asChild: !0,
                loop: !0,
                trapped: r,
                onMountAutoFocus: o,
                onUnmountAutoFocus: i,
                children: (0,
                d.jsx)(D, {
                    role: "dialog",
                    id: l.contentId,
                    "aria-describedby": l.descriptionId,
                    "aria-labelledby": l.titleId,
                    "data-state": ey(l.open),
                    ...u,
                    ref: f,
                    onDismiss: () => l.onOpenChange(!1)
                })
            }), (0,
            d.jsxs)(d.Fragment, {
                children: [(0,
                d.jsx)(ew, {
                    titleId: l.titleId
                }), (0,
                d.jsx)(eN, {
                    contentRef: a,
                    descriptionId: l.descriptionId
                })]
            })]
        })
    }
    )
      , ed = "DialogTitle"
      , ef = s.forwardRef( (e, t) => {
        let {__scopeDialog: n, ...r} = e
          , o = Z(ed, n);
        return (0,
        d.jsx)(w.h2, {
            id: o.titleId,
            ...r,
            ref: t
        })
    }
    );
    ef.displayName = ed;
    var em = "DialogDescription"
      , ep = s.forwardRef( (e, t) => {
        let {__scopeDialog: n, ...r} = e
          , o = Z(em, n);
        return (0,
        d.jsx)(w.p, {
            id: o.descriptionId,
            ...r,
            ref: t
        })
    }
    );
    ep.displayName = em;
    var ev = "DialogClose"
      , eg = s.forwardRef( (e, t) => {
        let {__scopeDialog: n, ...r} = e
          , o = Z(ev, n);
        return (0,
        d.jsx)(w.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: u(e.onClick, () => o.onOpenChange(!1))
        })
    }
    );
    function ey(e) {
        return e ? "open" : "closed"
    }
    eg.displayName = ev;
    var eE = "DialogTitleWarning"
      , [eb,eh] = (o = {
        contentName: es,
        titleName: ed,
        docsSlug: "dialog"
    },
    t = s.createContext(o),
    (n = e => {
        let {children: n, ...r} = e
          , o = s.useMemo( () => r, Object.values(r));
        return (0,
        d.jsx)(t.Provider, {
            value: o,
            children: n
        })
    }
    ).displayName = eE + "Provider",
    [n, function(e) {
        let n = s.useContext(t);
        if (n)
            return n;
        if (void 0 !== o)
            return o;
        throw Error(`\`${e}\` must be used within \`${eE}\``)
    }
    ])
      , ew = ({titleId: e}) => {
        let t = eh(eE)
          , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return s.useEffect( () => {
            e && (document.getElementById(e) || console.error(n))
        }
        , [n, e]),
        null
    }
      , eN = ({contentRef: e, descriptionId: t}) => {
        let n = eh("DialogDescriptionWarning")
          , r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
        return s.useEffect( () => {
            let n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
        }
        , [r, e, t]),
        null
    }
    ;
    e.s(["Close", 0, eg, "Content", 0, eu, "Description", 0, ep, "Overlay", 0, er, "Portal", 0, et, "Root", 0, X, "Title", 0, ef, "Trigger", 0, G], 326999)
}
]);
