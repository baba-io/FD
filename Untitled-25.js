(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 463946, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645);
    e.i(671112),
    e.s(["ModerationActionForm", 0, function({name: e, banned: n, silenced: o, busy: i, onSubmit: a}) {
        let[l,s] = (0,
        r.useState)("silence")
          , [d,c] = (0,
        r.useState)("")
          , [u,p] = (0,
        r.useState)(!1)
          , [f,m] = (0,
        r.useState)("1")
          , [h,g] = (0,
        r.useState)("hours")
          , v = "ban" === l ? n : o
          , b = Number(f) * ("days" === h ? 24 : 1)
          , x = v || u || Number.isInteger(Number(f)) && b >= 1 && b <= 87600;
        async function y(e) {
            e.preventDefault(),
            !i && x && d.trim() && await a({
                action: l,
                enabled: !v,
                reason: d.trim(),
                hours: v || u ? null : b
            }) && c("")
        }
        return (0,
        t.jsxs)("form", {
            className: "fd-mod-action",
            onSubmit: y,
            children: [(0,
            t.jsxs)("strong", {
                children: ["Moderate ", e]
            }), (0,
            t.jsxs)("label", {
                children: ["Action", (0,
                t.jsxs)("select", {
                    value: l,
                    disabled: i,
                    onChange: e => s(e.target.value),
                    children: [(0,
                    t.jsx)("option", {
                        value: "silence",
                        children: o ? "Remove silence" : "Silence"
                    }), (0,
                    t.jsx)("option", {
                        value: "ban",
                        children: n ? "Remove ban" : "Ban"
                    })]
                })]
            }), (0,
            t.jsx)("p", {
                children: "ban" === l ? "Blocks game access." : "Prevents posting in chat."
            }), !v && (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsxs)("label", {
                    children: ["Duration", (0,
                    t.jsxs)("select", {
                        value: u ? "permanent" : "temporary",
                        disabled: i,
                        onChange: e => p("permanent" === e.target.value),
                        children: [(0,
                        t.jsx)("option", {
                            value: "temporary",
                            children: "Temporary"
                        }), (0,
                        t.jsx)("option", {
                            value: "permanent",
                            children: "Permanent"
                        })]
                    })]
                }), !u && (0,
                t.jsxs)("div", {
                    className: "fd-mod-duration",
                    children: [(0,
                    t.jsxs)("label", {
                        children: ["Amount", (0,
                        t.jsx)("input", {
                            type: "number",
                            min: "1",
                            max: "days" === h ? 3650 : 87600,
                            step: "1",
                            required: !0,
                            value: f,
                            disabled: i,
                            onChange: e => m(e.target.value)
                        })]
                    }), (0,
                    t.jsxs)("label", {
                        children: ["Unit", (0,
                        t.jsxs)("select", {
                            value: h,
                            disabled: i,
                            onChange: e => g(e.target.value),
                            children: [(0,
                            t.jsx)("option", {
                                value: "hours",
                                children: "Hours"
                            }), (0,
                            t.jsx)("option", {
                                value: "days",
                                children: "Days"
                            })]
                        })]
                    })]
                })]
            }), (0,
            t.jsxs)("label", {
                children: ["Reason", (0,
                t.jsx)("textarea", {
                    required: !0,
                    maxLength: 500,
                    rows: 2,
                    value: d,
                    disabled: i,
                    onChange: e => c(e.target.value),
                    placeholder: "Explain this action for the moderation history"
                })]
            }), (0,
            t.jsx)("button", {
                className: "fd-mod-submit",
                disabled: i || !x || !d.trim(),
                type: "submit",
                children: i ? "Saving…" : `${v ? "Remove" : "Apply"} ${l}`
            })]
        })
    }
    ])
}
, 672390, e => {
    "use strict";
    var t = e.i(843476);
    function r({label: e, variant: n, ariaLabel: o}) {
        return (0,
        t.jsx)("span", {
            className: `fd-pilot-badge fd-pilot-badge--${n}`,
            "aria-label": o,
            children: e
        })
    }
    e.s(["EquippedPilotBadges", 0, function({badges: e=[]}) {
        return (0,
        t.jsx)(t.Fragment, {
            children: e.map(e => (0,
            t.jsx)(r, {
                label: e,
                variant: "cosmetic",
                ariaLabel: `${e} badge`
            }, e))
        })
    }
    , "PilotBadge", 0, function({admin: e, mod: n}) {
        return e || n ? (0,
        t.jsx)(r, {
            label: e ? "DEV" : "MOD",
            variant: e ? "dev" : "mod",
            ariaLabel: e ? "Developer" : "Moderator"
        }) : null
    }
    ])
}
, 580114, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , n = e.i(247638)
      , o = e.i(647163);
    function i(e, t=!1) {
        return t ? Math.max(12, Math.round(e / 5)) : Math.max(4, Math.round(e / 12))
    }
    function a(e, t=!1) {
        return e / 2 - i(e, t) / 2 - 1
    }
    function l(e, t, r) {
        return `calc(-50% + ${e * r}px) calc(-50% + ${t * r}px)`
    }
    function s(e, t, r, n) {
        e && (e.style.translate = l(r.yaw, 1 - 2 * r.throttle, n)),
        t && (t.style.translate = l(r.roll, r.pitch, n))
    }
    function d({label: e, axisLabels: r, dotRef: n, size: s=56, showLabel: c=!1, bordered: u=!1, restBottom: p=!1}) {
        let f = i(s, u)
          , m = a(s, u);
        return (0,
        t.jsxs)("div", {
            className: "flex flex-col items-center gap-1",
            children: [(0,
            t.jsxs)("div", {
                className: (0,
                o.cn)("sim-stick-field relative", u && "sim-stick-field--bordered"),
                style: {
                    width: s,
                    height: s
                },
                children: [(0,
                t.jsx)("div", {
                    className: "sim-stick-axis-h absolute inset-x-1 top-1/2 h-px"
                }), (0,
                t.jsx)("div", {
                    className: "sim-stick-axis-v absolute inset-y-1 left-1/2 w-px"
                }), r ? (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)("span", {
                        className: "sim-stick-cap absolute top-0.5 left-1/2 -translate-x-1/2",
                        children: r.y
                    }), (0,
                    t.jsx)("span", {
                        className: "sim-stick-cap absolute bottom-0.5 left-1/2 -translate-x-1/2",
                        children: r.x
                    })]
                }) : null, (0,
                t.jsx)("div", {
                    ref: n,
                    className: (0,
                    o.cn)("sim-stick-dot absolute top-1/2 left-1/2 bg-(--fdk-orange)", u && "sim-stick-dot--round"),
                    style: {
                        width: f,
                        height: f,
                        translate: l(0, +!!p, m)
                    }
                })]
            }), c ? (0,
            t.jsx)("span", {
                className: "sim-stick-label font-display tracking-[0.14em] text-(--fdk-chalk) uppercase",
                style: {
                    fontSize: Math.max(9, Math.round(s / 8))
                },
                children: e
            }) : null]
        })
    }
    e.s(["StickBox", 0, d, "StickPair", 0, function({size: e=128, className: i, showLabel: l=!0}) {
        let c = (0,
        r.useRef)(null)
          , u = (0,
        r.useRef)(null);
        return (0,
        r.useEffect)( () => {
            let t = a(e)
              , r = 0
              , o = () => {
                r = requestAnimationFrame(o),
                s(c.current, u.current, n.live.input, t)
            }
            ;
            return r = requestAnimationFrame(o),
            () => cancelAnimationFrame(r)
        }
        , [e]),
        (0,
        t.jsxs)("div", {
            className: (0,
            o.cn)("flex items-start justify-center gap-5 font-tech", i),
            children: [(0,
            t.jsx)(d, {
                label: "Thr / Yaw",
                dotRef: c,
                size: e,
                showLabel: l,
                restBottom: !0
            }), (0,
            t.jsx)(d, {
                label: "Pit / Rol",
                dotRef: u,
                size: e,
                showLabel: l
            })]
        })
    }
    , "stickDotTranslate", 0, l, "stickTravel", 0, a, "writeStickDots", 0, s])
}
, 523895, e => {
    "use strict";
    e.s(["PALETTE", 0, {
        orange: "#ff7900",
        orangeHover: "#ff922e",
        orangeText: "#a34b00",
        ink: "#17191d",
        inkRaised: "#25282e",
        chalk: "#f7f5ef",
        paper: "#ffffff",
        muted: "#62666d",
        graphite: "#3c4047",
        sky: "#bdeaff",
        skyHover: "#a5dff9",
        skyEdge: "#5093ad",
        acid: "#e5ff54",
        brick: "#a33115",
        brickHover: "#8c2a12",
        slate: "#4d5158",
        stone: "#c9c7bf",
        heldPlate: "#c4c6c8d9",
        online: "#48943c",
        onlineText: "#2f6b27",
        offline: "#96998f"
    }, "withAlpha", 0, function(e, t) {
        return e.slice(0, 7) + Math.round(255 * Math.min(1, Math.max(0, t))).toString(16).padStart(2, "0")
    }
    ])
}
, 871737, e => {
    "use strict";
    var t = e.i(768834)
      , r = e.i(50270)
      , n = e.i(106258)
      , o = e.i(15221)
      , i = e.i(277873)
      , a = e.i(353198)
      , l = e.i(353937)
      , s = e.i(330374);
    let d = r.z.union([r.z.enum(a.DRONE_SKIN_IDS), r.z.string().regex(/^shop:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i).transform(e => e)])
      , c = r.z.object({
        archetype: r.z.enum(a.DRONE_IDS),
        skins: r.z.object({
            freestyle: d,
            whoop: d,
            cinewhoop: d,
            "long-range": d,
            racer: d
        })
    })
      , u = r.z.string().regex(/^#[0-9a-f]{6}$/i)
      , p = r.z.object({
        droneId: r.z.enum(a.DRONE_IDS),
        skinId: d,
        skin: r.z.object({
            id: d,
            name: r.z.string().max(120),
            shell: u,
            accent: u,
            props: u,
            propMaterial: r.z.enum(["normal", "translucent"]).optional()
        }),
        rarity: r.z.enum(o.ALL_RARITIES)
    }).refine(e => e.skinId === e.skin.id, "Drone skin IDs do not match")
      , f = r.z.object({
        raceId: r.z.string().min(1),
        name: r.z.string(),
        mapId: r.z.string().min(1),
        timeMs: r.z.number().int().positive(),
        replayId: r.z.string().uuid().nullable(),
        droneId: r.z.enum(a.DRONE_IDS).nullable().default(null),
        courseRevision: r.z.number().int().positive().nullable().default(null),
        attemptId: r.z.string().uuid().nullable().default(null),
        replayRevision: r.z.string().uuid().nullable().default(null),
        appearance: r.z.unknown().transform(s.parseRaceAppearance).default(null),
        currentCourse: r.z.boolean().default(!0),
        legacyReplayId: r.z.string().uuid().nullable().default(null)
    }).transform(e => e.droneId || e.replayRevision ? e.attemptId && e.droneId && e.courseRevision && e.replayRevision && e.appearance?.droneId === e.droneId ? e : {
        ...e,
        replayId: null,
        replayRevision: null
    } : {
        ...e,
        legacyReplayId: e.legacyReplayId ?? e.replayId,
        replayId: null,
        currentCourse: !1
    })
      , m = r.z.object({
        id: r.z.string().uuid(),
        name: r.z.string(),
        admin: r.z.boolean(),
        mod: r.z.boolean(),
        xp: r.z.number().finite().nonnegative(),
        joinedAt: r.z.string(),
        flightTimeMs: r.z.number().finite().nonnegative(),
        lessons: r.z.number().nonnegative(),
        courses: r.z.number().nonnegative(),
        droneLoadout: c.default(a.defaultDroneLoadout),
        drones: r.z.array(p).default([]),
        badges: r.z.array(r.z.string()).default([]),
        canModerate: r.z.boolean(),
        silenced: r.z.boolean().nullable(),
        banned: r.z.boolean().nullable(),
        records: r.z.array(f)
    });
    function h(e, t, r) {
        return {
            archetype: (0,
            a.equippedDrone)(e, t, r),
            skins: Object.fromEntries(a.DRONE_IDS.map(t => [t, (0,
            l.equippedDroneSkin)(e.skins, t)]))
        }
    }
    let g = (0,
    t.create)( (e, t) => ({
        id: null,
        resumeOnClose: !1,
        open: (o, i) => {
            if (!r.z.string().uuid().safeParse(o).success)
                return;
            let a = n.useSimStore.getState()
              , l = t().id ? t().resumeOnClose : i?.pause !== !1 && "flying" === a.phase;
            i?.pause !== !1 && a.pause(),
            "u" > typeof document && document.pointerLockElement && document.exitPointerLock(),
            e({
                id: o,
                resumeOnClose: l
            })
        }
        ,
        close: () => {
            let r = t().resumeOnClose;
            e({
                id: null,
                resumeOnClose: !1
            }),
            r && n.useSimStore.getState().resume()
        }
    }));
    e.s(["localPilotDrones", 0, function(e, t, r) {
        let n = h(e, t, r);
        return a.DRONE_LADDER.filter(e => (0,
        a.isDroneUnlocked)(e, t, r)).map(e => {
            let t = (0,
            a.droneSkin)(e, n.skins[e]);
            return {
                droneId: e,
                skinId: t.id,
                skin: t,
                rarity: (0,
                i.ownedItem)(t.id)?.rarity ?? "common"
            }
        }
        )
    }
    , "localPilotLoadout", 0, h, "pilotProfileSchema", 0, m, "usePilotProfile", 0, g])
}
, 127923, 853660, e => {
    "use strict";
    var t = e.i(271645)
      , r = e.i(981140)
      , n = e.i(820783)
      , o = e.i(30030)
      , i = e.i(726330)
      , a = e.i(303536)
      , l = e.i(765491)
      , s = e.i(610772)
      , d = e.i(258950)
      , c = e.i(953760)
      , u = e.i(248425)
      , p = e.i(843476)
      , f = Object.defineProperty
      , m = t.forwardRef(f(function(e, t) {
        let {children: r, width: n=10, height: o=5, ...i} = e;
        return (0,
        p.jsx)(u.Primitive.svg, {
            ...i,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : (0,
            p.jsx)("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    }, "name", {
        value: "Arrow",
        configurable: !0
    }))
      , h = e.i(30207)
      , g = e.i(934620);
    function v(e) {
        let[r,n] = t.useState(void 0);
        return (0,
        g.useLayoutEffect)( () => {
            if (e) {
                n({
                    width: e.offsetWidth,
                    height: e.offsetHeight
                });
                let t = new ResizeObserver(t => {
                    let r, o;
                    if (!Array.isArray(t) || !t.length)
                        return;
                    let i = t[0];
                    if ("borderBoxSize" in i) {
                        let e = i.borderBoxSize
                          , t = Array.isArray(e) ? e[0] : e;
                        r = t.inlineSize,
                        o = t.blockSize
                    } else
                        r = e.offsetWidth,
                        o = e.offsetHeight;
                    n({
                        width: r,
                        height: o
                    })
                }
                );
                return t.observe(e, {
                    box: "border-box"
                }),
                () => t.unobserve(e)
            }
            n(void 0)
        }
        , [e]),
        r
    }
    (0,
    Object.defineProperty)(v, "name", {
        value: "useSize",
        configurable: !0
    });
    var b = Object.defineProperty
      , x = (e, t) => b(e, "name", {
        value: t,
        configurable: !0
    })
      , y = "Popper"
      , [P,j] = (0,
    o.createContextScope)(y)
      , [w,S] = P(y)
      , R = x(e => {
        let {__scopePopper: r, children: n} = e
          , [o,i] = t.useState(null)
          , [a,l] = t.useState(void 0);
        return (0,
        p.jsx)(w, {
            scope: r,
            anchor: o,
            onAnchorChange: i,
            placementState: a,
            setPlacementState: l,
            children: n
        })
    }
    , "Popper")
      , C = t.forwardRef(x(function(e, r) {
        let {__scopePopper: o, virtualRef: i, ...a} = e
          , l = S("PopperAnchor", o)
          , s = t.useRef(null)
          , d = l.onAnchorChange
          , c = t.useCallback(e => {
            s.current = e,
            e && d(e)
        }
        , [d])
          , f = (0,
        n.useComposedRefs)(r, c)
          , m = t.useRef(null);
        t.useEffect( () => {
            if (!i)
                return;
            let e = m.current;
            m.current = i.current,
            e !== m.current && d(m.current)
        }
        );
        let h = l.placementState && $(l.placementState)
          , g = h?.[0]
          , v = h?.[1];
        return i ? null : (0,
        p.jsx)(u.Primitive.div, {
            "data-radix-popper-side": g,
            "data-radix-popper-align": v,
            ...a,
            ref: f
        })
    }, "PopperAnchor"))
      , A = "PopperContent"
      , [z,k] = P(A)
      , E = t.forwardRef(x(function(e, r) {
        let {__scopePopper: o, side: i="bottom", sideOffset: a=0, align: l="center", alignOffset: s=0, arrowPadding: f=0, avoidCollisions: m=!0, collisionBoundary: b=[], collisionPadding: y=0, sticky: P="partial", hideWhenDetached: j=!1, updatePositionStrategy: w="optimized", onPlaced: R, ...C} = e
          , k = S(A, o)
          , [E,O] = t.useState(null)
          , I = (0,
        n.useComposedRefs)(r, O)
          , [F,_] = t.useState(null)
          , M = v(F)
          , L = M?.width ?? 0
          , T = M?.height ?? 0
          , H = "number" == typeof y ? y : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...y
        }
          , B = Array.isArray(b) ? b : [b]
          , W = B.length > 0
          , q = {
            padding: H,
            boundary: B.filter(D),
            altBoundary: W
        }
          , {refs: U, floatingStyles: V, placement: Y, isPositioned: K, middlewareData: X} = (0,
        d.useFloating)({
            strategy: "fixed",
            placement: i + ("center" !== l ? "-" + l : ""),
            whileElementsMounted: x( (...e) => (0,
            c.autoUpdate)(...e, {
                animationFrame: "always" === w
            }), "whileElementsMounted"),
            elements: {
                reference: k.anchor
            },
            middleware: [(0,
            d.offset)({
                mainAxis: a + T,
                alignmentAxis: s
            }), m && (0,
            d.shift)({
                mainAxis: !0,
                crossAxis: !1,
                limiter: "partial" === P ? (0,
                d.limitShift)() : void 0,
                ...q
            }), m && (0,
            d.flip)({
                ...q
            }), (0,
            d.size)({
                ...q,
                apply: x( ({elements: e, rects: t, availableWidth: r, availableHeight: n}) => {
                    let {width: o, height: i} = t.reference
                      , a = e.floating.style;
                    a.setProperty("--radix-popper-available-width", `${r}px`),
                    a.setProperty("--radix-popper-available-height", `${n}px`),
                    a.setProperty("--radix-popper-anchor-width", `${o}px`),
                    a.setProperty("--radix-popper-anchor-height", `${i}px`)
                }
                , "apply")
            }), F && (0,
            d.arrow)({
                element: F,
                padding: f
            }), N({
                arrowWidth: L,
                arrowHeight: T
            }), j && (0,
            d.hide)({
                strategy: "referenceHidden",
                ...q,
                boundary: W ? q.boundary : void 0
            })]
        })
          , Z = k.setPlacementState;
        (0,
        g.useLayoutEffect)( () => (Z(Y),
        () => {
            Z(void 0)
        }
        ), [Y, Z]);
        let[G,J] = $(Y)
          , Q = (0,
        h.useCallbackRef)(R);
        (0,
        g.useLayoutEffect)( () => {
            K && Q?.()
        }
        , [K, Q]);
        let ee = X.arrow?.x
          , et = X.arrow?.y
          , er = X.arrow?.centerOffset !== 0
          , [en,eo] = t.useState();
        return (0,
        g.useLayoutEffect)( () => {
            E && eo(window.getComputedStyle(E).zIndex)
        }
        , [E]),
        (0,
        p.jsx)("div", {
            ref: U.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
                ...V,
                transform: K ? V.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: en,
                "--radix-popper-transform-origin": [X.transformOrigin?.x, X.transformOrigin?.y].join(" "),
                ...X.hide?.referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: (0,
            p.jsx)(z, {
                scope: o,
                placedSide: G,
                placedAlign: J,
                onArrowChange: _,
                arrowX: ee,
                arrowY: et,
                shouldHideArrow: er,
                children: (0,
                p.jsx)(u.Primitive.div, {
                    "data-side": G,
                    "data-align": J,
                    ...C,
                    ref: I,
                    style: {
                        ...C.style,
                        animation: K ? C.style?.animation : "none"
                    }
                })
            })
        })
    }, "PopperContent"))
      , O = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    }
      , I = t.forwardRef(x(function(e, t) {
        let {__scopePopper: r, ...n} = e
          , o = k("PopperArrow", r)
          , i = O[o.placedSide];
        return (0,
        p.jsx)("span", {
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
            children: (0,
            p.jsx)(m, {
                ...n,
                ref: t,
                style: {
                    ...n.style,
                    display: "block"
                }
            })
        })
    }, "PopperArrow"));
    function D(e) {
        return null !== e
    }
    x(D, "isNotNull");
    var N = x(e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
            let {placement: r, rects: n, middlewareData: o} = t
              , i = o.arrow?.centerOffset !== 0
              , a = i ? 0 : e.arrowWidth
              , l = i ? 0 : e.arrowHeight
              , [s,d] = $(r)
              , c = {
                start: "0%",
                center: "50%",
                end: "100%"
            }[d]
              , u = (o.arrow?.x ?? 0) + a / 2
              , p = (o.arrow?.y ?? 0) + l / 2
              , f = ""
              , m = "";
            return "bottom" === s ? (f = i ? c : `${u}px`,
            m = `${-l}px`) : "top" === s ? (f = i ? c : `${u}px`,
            m = `${n.floating.height + l}px`) : "right" === s ? (f = `${-l}px`,
            m = i ? c : `${p}px`) : "left" === s && (f = `${n.floating.width + l}px`,
            m = i ? c : `${p}px`),
            {
                data: {
                    x: f,
                    y: m
                }
            }
        }
    }), "transformOrigin");
    function $(e) {
        let[t,r="center"] = e.split("-");
        return [t, r]
    }
    x($, "getSideAndAlignFromPlacement"),
    e.s(["Anchor", 0, C, "Arrow", 0, I, "Content", 0, E, "Root", 0, R, "createPopperScope", 0, j], 853660);
    var F = e.i(774606)
      , _ = e.i(296626)
      , M = Object.defineProperty
      , L = (e, t) => M(e, "name", {
        value: t,
        configurable: !0
    });
    function T(e) {
        let r = t.forwardRef( (r, o) => {
            let {children: i, ...a} = r
              , l = null
              , s = !1
              , d = [];
            Y(i) && "function" == typeof G && (i = G(i._payload)),
            t.Children.forEach(i, e => {
                if (U(e)) {
                    s = !0;
                    let t = "child" in e.props ? e.props.child : e.props.children;
                    Y(t) && "function" == typeof G && (t = G(t._payload)),
                    l = B(e, t),
                    d.push(l?.props?.children)
                } else
                    d.push(e)
            }
            ),
            l ? l = t.cloneElement(l, void 0, d) : !s && 1 === t.Children.count(i) && t.isValidElement(i) && (l = i);
            let c = l ? q(l) : void 0
              , u = (0,
            n.useComposedRefs)(o, c);
            if (!l) {
                if (i || 0 === i)
                    throw Error(s ? Z(e) : X(e));
                return i
            }
            let p = W(a, l.props ?? {});
            return l.type !== t.Fragment && (p.ref = o ? u : c),
            t.cloneElement(l, p)
        }
        );
        return r.displayName = `${e}.Slot`,
        r
    }
    L(T, "createSlot");
    var H = Symbol.for("radix.slottable");
    L(function(e) {
        let t = L(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`,
        t.__radixId = H,
        t
    }, "createSlottable");
    var B = L( (e, r) => {
        if ("child" in e.props) {
            let r = e.props.child;
            return t.isValidElement(r) ? t.cloneElement(r, void 0, e.props.children(r.props.children)) : null
        }
        return t.isValidElement(r) ? r : null
    }
    , "getSlottableElementFromSlottable");
    function W(e, t) {
        let r = {
            ...t
        };
        for (let n in t) {
            let o = e[n]
              , i = t[n];
            /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                let t = i(...e);
                return o(...e),
                t
            }
            : o && (r[n] = o) : "style" === n ? r[n] = {
                ...o,
                ...i
            } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
        }
        return {
            ...e,
            ...r
        }
    }
    function q(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
          , r = t && "isReactWarning" in t && t.isReactWarning;
        return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
    }
    function U(e) {
        return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === H
    }
    L(W, "mergeProps"),
    L(q, "getElementRef"),
    L(U, "isSlottable");
    var V = Symbol.for("react.lazy");
    function Y(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === V && "_payload" in e && K(e._payload)
    }
    function K(e) {
        return "object" == typeof e && null !== e && "then" in e
    }
    L(Y, "isLazyComponent"),
    L(K, "isPromiseLike");
    var X = L(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError")
      , Z = L(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError")
      , G = t[" use ".trim().toString()]
      , J = e.i(369340)
      , Q = e.i(186312)
      , ee = e.i(985369)
      , et = Object.defineProperty
      , er = (e, t) => et(e, "name", {
        value: t,
        configurable: !0
    })
      , en = "Popover"
      , [eo,ei] = (0,
    o.createContextScope)(en, [j])
      , ea = j()
      , [el,es] = eo(en)
      , ed = er(e => {
        let {__scopePopover: r, children: n, open: o, defaultOpen: i, onOpenChange: a, modal: l=!1} = e
          , d = ea(r)
          , c = t.useRef(null)
          , [u,f] = t.useState(!1)
          , [m,h] = (0,
        J.useControllableState)({
            prop: o,
            defaultProp: i ?? !1,
            onChange: a,
            caller: en
        });
        return (0,
        p.jsx)(R, {
            ...d,
            children: (0,
            p.jsx)(el, {
                scope: r,
                contentId: (0,
                s.useId)(),
                triggerRef: c,
                open: m,
                onOpenChange: h,
                onOpenToggle: t.useCallback( () => h(e => !e), [h]),
                hasCustomAnchor: u,
                onCustomAnchorAdd: t.useCallback( () => f(!0), []),
                onCustomAnchorRemove: t.useCallback( () => f(!1), []),
                modal: l,
                children: n
            })
        })
    }
    , "Popover")
      , ec = t.forwardRef(er(function(e, r) {
        let {__scopePopover: n, ...o} = e
          , i = es("PopoverAnchor", n)
          , a = ea(n)
          , {onCustomAnchorAdd: l, onCustomAnchorRemove: s} = i;
        return t.useEffect( () => (l(),
        () => s()), [l, s]),
        (0,
        p.jsx)(C, {
            ...a,
            ...o,
            ref: r
        })
    }, "PopoverAnchor"))
      , eu = t.forwardRef(er(function(e, t) {
        let {__scopePopover: o, ...i} = e
          , a = es("PopoverTrigger", o)
          , l = ea(o)
          , s = (0,
        n.useComposedRefs)(t, a.triggerRef)
          , d = (0,
        p.jsx)(u.Primitive.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": a.open,
            "aria-controls": a.open ? a.contentId : void 0,
            "data-state": eS(a.open),
            ...i,
            ref: s,
            onClick: (0,
            r.composeEventHandlers)(e.onClick, a.onOpenToggle)
        });
        return a.hasCustomAnchor ? d : (0,
        p.jsx)(C, {
            asChild: !0,
            ...l,
            children: d
        })
    }, "PopoverTrigger"))
      , ep = "PopoverPortal"
      , [ef,em] = eo(ep, {
        forceMount: void 0
    })
      , eh = er(e => {
        let {__scopePopover: t, forceMount: r, children: n, container: o} = e
          , i = es(ep, t);
        return (0,
        p.jsx)(ef, {
            scope: t,
            forceMount: r,
            children: (0,
            p.jsx)(_.Presence, {
                present: r || i.open,
                children: (0,
                p.jsx)(F.Portal, {
                    asChild: !0,
                    container: o,
                    children: n
                })
            })
        })
    }
    , "PopoverPortal")
      , eg = "PopoverContent"
      , ev = t.forwardRef(er(function(e, t) {
        let r = em(eg, e.__scopePopover)
          , {forceMount: n=r.forceMount, ...o} = e
          , i = es(eg, e.__scopePopover);
        return (0,
        p.jsx)(_.Presence, {
            present: n || i.open,
            children: i.modal ? (0,
            p.jsx)(ex, {
                ...o,
                ref: t
            }) : (0,
            p.jsx)(ey, {
                ...o,
                ref: t
            })
        })
    }, "PopoverContent"))
      , eb = T("PopoverContent.RemoveScroll")
      , ex = t.forwardRef(er(function(e, o) {
        let i = es(eg, e.__scopePopover)
          , a = t.useRef(null)
          , l = (0,
        n.useComposedRefs)(o, a)
          , s = t.useRef(!1);
        return t.useEffect( () => {
            let e = a.current;
            if (e)
                return (0,
                Q.hideOthers)(e)
        }
        , []),
        (0,
        p.jsx)(ee.RemoveScroll, {
            as: eb,
            allowPinchZoom: !0,
            children: (0,
            p.jsx)(eP, {
                ...e,
                ref: l,
                trapFocus: i.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0,
                r.composeEventHandlers)(e.onCloseAutoFocus, e => {
                    e.preventDefault(),
                    s.current || i.triggerRef.current?.focus()
                }
                ),
                onPointerDownOutside: (0,
                r.composeEventHandlers)(e.onPointerDownOutside, e => {
                    let t = e.detail.originalEvent
                      , r = 0 === t.button && !0 === t.ctrlKey;
                    s.current = 2 === t.button || r
                }
                , {
                    checkForDefaultPrevented: !1
                }),
                onFocusOutside: (0,
                r.composeEventHandlers)(e.onFocusOutside, e => e.preventDefault(), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    }, "PopoverContentModal"))
      , ey = t.forwardRef(er(function(e, r) {
        let n = es(eg, e.__scopePopover)
          , o = t.useRef(!1)
          , i = t.useRef(!1);
        return (0,
        p.jsx)(eP, {
            ...e,
            ref: r,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
                e.onCloseAutoFocus?.(t),
                t.defaultPrevented || (o.current || n.triggerRef.current?.focus(),
                t.preventDefault()),
                o.current = !1,
                i.current = !1
            }
            ,
            onInteractOutside: t => {
                e.onInteractOutside?.(t),
                t.defaultPrevented || (o.current = !0,
                "pointerdown" === t.detail.originalEvent.type && (i.current = !0));
                let r = t.target;
                n.triggerRef.current?.contains(r) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
            }
        })
    }, "PopoverContentNonModal"))
      , eP = t.forwardRef(er(function(e, t) {
        let {__scopePopover: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: s, disableOutsidePointerEvents: d, onEscapeKeyDown: c, onPointerDownOutside: u, onFocusOutside: f, onInteractOutside: m, ...h} = e
          , g = es(eg, r)
          , v = ea(r);
        return (0,
        a.useFocusGuards)(),
        (0,
        p.jsx)(l.FocusScope, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: (0,
            p.jsx)(i.DismissableLayer, {
                asChild: !0,
                disableOutsidePointerEvents: d,
                onInteractOutside: m,
                onEscapeKeyDown: c,
                onPointerDownOutside: u,
                onFocusOutside: f,
                onDismiss: () => g.onOpenChange(!1),
                deferPointerDownOutside: !0,
                children: (0,
                p.jsx)(E, {
                    "data-state": eS(g.open),
                    role: "dialog",
                    id: g.contentId,
                    ...v,
                    ...h,
                    ref: t,
                    style: {
                        ...h.style,
                        "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            })
        })
    }, "PopoverContentImpl"))
      , ej = t.forwardRef(er(function(e, t) {
        let {__scopePopover: n, ...o} = e
          , i = es("PopoverClose", n);
        return (0,
        p.jsx)(u.Primitive.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: (0,
            r.composeEventHandlers)(e.onClick, () => i.onOpenChange(!1))
        })
    }, "PopoverClose"))
      , ew = t.forwardRef(er(function(e, t) {
        let {__scopePopover: r, ...n} = e
          , o = ea(r);
        return (0,
        p.jsx)(I, {
            ...o,
            ...n,
            ref: t
        })
    }, "PopoverArrow"));
    function eS(e) {
        return e ? "open" : "closed"
    }
    er(eS, "getState"),
    e.s(["Anchor", 0, ec, "Arrow", 0, ew, "Close", 0, ej, "Content", 0, ev, "Popover", 0, ed, "PopoverAnchor", 0, ec, "PopoverArrow", 0, ew, "PopoverClose", 0, ej, "PopoverContent", 0, ev, "PopoverPortal", 0, eh, "PopoverTrigger", 0, eu, "Portal", 0, eh, "Root", 0, ed, "Trigger", 0, eu, "createPopoverScope", 0, ei], 178761);
    var eR = e.i(178761);
    e.s(["Popover", 0, eR], 127923)
}
]);
