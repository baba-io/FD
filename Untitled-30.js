(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 793273, 389110, e => {
    "use strict";
    var t = e.i(843476)
      , n = e.i(770703)
      , r = e.i(174080)
      , a = e.i(271645);
    let o = (0,
    a.createContext)(null)
      , i = (0,
    a.createContext)(!0);
    e.s(["MenuReadiness", 0, o, "MenuVisibility", 0, i], 389110);
    var l = e.i(954646);
    class s {
        anchor = null;
        stage = null;
        settled = !1;
        listeners = new Set;
        subscribe = e => (this.listeners.add(e),
        () => {
            this.listeners.delete(e)
        }
        );
        set(e) {
            for (let t of (this.anchor = e,
            this.listeners))
                t()
        }
    }
    let c = (0,
    a.createContext)(null)
      , d = (0,
    n.default)( () => e.A(400669), {
        loadableGenerated: {
            modules: [8892]
        },
        ssr: !1
    });
    function u({children: e}) {
        let[n] = (0,
        a.useState)( () => new s)
          , r = (0,
        a.useSyncExternalStore)(n.subscribe, () => null !== n.anchor, () => !1)
          , [o,i] = (0,
        a.useState)(!1);
        return r && !o && i(!0),
        (0,
        t.jsxs)(c, {
            value: n,
            children: [e, o && (0,
            t.jsx)(d, {
                store: n
            })]
        })
    }
    function m({store: e, archetype: n, skin: o, skinOverride: s, drones: c, variant: d="home", onReady: u, preview: f, loading: p, className: h}) {
        let y = (0,
        a.useContext)(i)
          , [g,b] = (0,
        a.useState)(null)
          , [v,S] = (0,
        a.useState)(e.settled)
          , [I] = (0,
        a.useState)( () => ({}))
          , _ = (0,
        a.useRef)(u);
        (0,
        a.useLayoutEffect)( () => {
            _.current = u
        }
        , [u]);
        let k = (0,
        a.useMemo)( () => (c ?? [{
            key: "solo",
            archetype: n,
            skin: o,
            skinOverride: s,
            position: [0, 0],
            scale: 1
        }]).slice(0, 4), [c, n, o, s]);
        (0,
        a.useLayoutEffect)( () => {
            if (g)
                return () => {
                    e.anchor?.id === I && e.set(null)
                }
        }
        , [g, I, e]);
        let w = f?.phase
          , x = f?.time;
        return (0,
        a.useLayoutEffect)( () => {
            g && e.set({
                id: I,
                element: g,
                drones: k,
                variant: d,
                visible: y,
                preview: void 0 === w ? void 0 : {
                    phase: w,
                    time: x ?? 0
                },
                onReady: () => {
                    (0,
                    r.flushSync)( () => S(!0)),
                    _.current?.()
                }
            })
        }
        , [g, I, e, k, d, y, w, x]),
        (0,
        a.useEffect)( () => {
            if (!f)
                return (0,
                l.registerHomeHero)({
                    depart(t) {
                        e.anchor?.id === I && e.stage ? e.stage.depart(t) : t()
                    },
                    recover() {
                        e.stage?.recover()
                    }
                })
        }
        , [I, f, e]),
        (0,
        a.useEffect)( () => {
            let e = setTimeout( () => _.current?.(), 2500);
            return () => clearTimeout(e)
        }
        , []),
        (0,
        t.jsx)("span", {
            ref: b,
            className: h ?? "fd-hero-anchor",
            "data-variant": d,
            "data-drone": k[0]?.archetype,
            "data-skin": k[0]?.skin,
            children: !v && p
        })
    }
    e.s(["DroneHeroAnchor", 0, function e(n) {
        let r = (0,
        a.useContext)(c);
        return r ? (0,
        t.jsx)(m, {
            ...n,
            store: r
        }) : (0,
        t.jsx)(u, {
            children: (0,
            t.jsx)(e, {
                ...n
            })
        })
    }
    , "DroneHeroHost", 0, u, "MAX_HERO_SLOTS", 0, 4, "lineupKey", 0, function(e) {
        return e.map(e => `${e.key}:${e.archetype}:${e.position[0]},${e.position[1]}:${e.scale}`).join("|")
    }
    ], 793273)
}
, 954646, e => {
    "use strict";
    var t = e.i(843476)
      , n = e.i(271645);
    let r = null
      , a = null
      , o = new Set;
    function i() {
        for (let e of o)
            e()
    }
    function l(e, t=!1) {
        if (a === e) {
            if (clearTimeout(e.timer),
            a = null,
            t && r === e.hero)
                try {
                    e.hero.handle.recover?.()
                } catch {}
            i()
        }
    }
    function s(e) {
        if (a === e && !e.committed) {
            e.committed = !0,
            clearTimeout(e.timer),
            e.timer = setTimeout( () => l(e, !0), 1500);
            try {
                e.action()
            } catch (t) {
                if (l(e, !0),
                e.onError)
                    e.onError(t);
                else
                    throw t
            }
        }
    }
    function c() {
        return null !== a
    }
    function d(e) {
        return o.add(e),
        () => {
            o.delete(e)
        }
    }
    let u = () => !1;
    e.s(["HomeTransitionBoundary", 0, function({children: e}) {
        let r = (0,
        n.useSyncExternalStore)(d, c, u)
          , o = (0,
        n.useRef)(null);
        return (0,
        n.useLayoutEffect)( () => {
            let e = o.current
              , t = null
              , n = null
              , r = 0
              , i = () => {
                let a = c();
                if (e && (e.inert = a),
                a && !t) {
                    cancelAnimationFrame(r);
                    let a = document.body.style.overflow;
                    document.body.style.overflow = "hidden";
                    let o = [...e?.querySelectorAll(".fd-menu-content, .sim-scroll, [data-radix-scroll-area-viewport]") ?? []].map(e => {
                        let t = {
                            overflow: e.style.overflow,
                            scrollBehavior: e.style.scrollBehavior,
                            top: e.scrollTop,
                            left: e.scrollLeft
                        };
                        e.style.scrollBehavior = "auto",
                        e.style.overflow = "hidden";
                        let n = () => {
                            e.scrollTop !== t.top && (e.scrollTop = t.top),
                            e.scrollLeft !== t.left && (e.scrollLeft = t.left)
                        }
                        ;
                        return e.addEventListener("scroll", n),
                        n(),
                        () => {
                            e.removeEventListener("scroll", n),
                            e.style.overflow = t.overflow,
                            e.style.scrollBehavior = t.scrollBehavior
                        }
                    }
                    );
                    t = () => {
                        for (let e of (document.body.style.overflow = a,
                        o))
                            e()
                    }
                    ,
                    n = document.activeElement instanceof HTMLElement ? document.activeElement : null,
                    n?.blur()
                } else if (!a && t) {
                    t(),
                    t = null;
                    let e = n;
                    n = null,
                    r = requestAnimationFrame( () => {
                        e?.isConnected && document.activeElement === document.body && e.focus({
                            preventScroll: !0
                        })
                    }
                    )
                }
            }
              , s = e => {
                c() && (e.cancelable && e.preventDefault(),
                e.stopImmediatePropagation(),
                "focusin" === e.type && e.target instanceof HTMLElement && e.target.blur())
            }
              , u = ["pointerdown", "pointerup", "click", "dblclick", "auxclick", "contextmenu", "keydown", "keyup", "wheel", "touchstart", "touchmove", "focusin"];
            for (let e of u)
                window.addEventListener(e, s, {
                    capture: !0,
                    passive: !1
                });
            let m = d(i);
            return i(),
            () => {
                for (let e of (m(),
                u))
                    window.removeEventListener(e, s, {
                        capture: !0
                    });
                cancelAnimationFrame(r),
                t?.(),
                e && (e.inert = !1),
                a && l(a)
            }
        }
        , []),
        (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)("div", {
                ref: o,
                className: "pointer-events-none absolute inset-0",
                inert: r,
                "aria-busy": r || void 0,
                children: e
            }), r && (0,
            t.jsx)("div", {
                "aria-hidden": "true",
                style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: 0x7fffffff,
                    pointerEvents: "auto",
                    cursor: "default"
                }
            })]
        })
    }
    , "isHomeTransitionLocked", 0, c, "registerHomeHero", 0, function(e) {
        a && l(a);
        let t = {
            handle: e
        };
        return r = t,
        () => {
            r === t && (r = null,
            a?.hero === t && l(a))
        }
    }
    , "requestHomeExit", 0, function(e, t) {
        if (a)
            return;
        if (!r) {
            try {
                e()
            } catch (e) {
                if (t)
                    t(e);
                else
                    throw e
            }
            return
        }
        let n = {
            hero: r,
            action: e,
            onError: t,
            committed: !1,
            timer: setTimeout( () => s(n), 500)
        };
        a = n,
        i();
        try {
            n.hero.handle.depart( () => s(n))
        } catch (e) {
            if (a !== n || n.committed)
                throw e;
            s(n)
        }
    }
    ])
}
, 410484, 514152, e => {
    "use strict";
    var t = e.i(843476)
      , n = e.i(271645)
      , r = e.i(106258)
      , a = e.i(809886)
      , o = e.i(771607)
      , i = e.i(870895)
      , l = e.i(814022)
      , s = e.i(37220)
      , c = e.i(246176)
      , d = e.i(353198)
      , u = e.i(353937)
      , m = e.i(404961)
      , f = e.i(333794)
      , p = e.i(28276)
      , h = e.i(609223)
      , y = e.i(245433)
      , g = e.i(544383)
      , b = e.i(118274)
      , v = e.i(105524);
    e.i(573798);
    var S = e.i(509381)
      , I = e.i(244144)
      , _ = e.i(498475)
      , k = e.i(516560)
      , w = e.i(269778)
      , x = e.i(125392)
      , M = e.i(734524)
      , j = e.i(954646)
      , R = e.i(793273);
    function A() {
        let e = (0,
        v.useMatchmaking)(e => e.search)
          , t = (0,
        v.useMatchmaking)(e => e.launch)
          , r = (0,
        c.useLobbySocial)(e => e.squad?.members)
          , a = !!t?.endsAt
          , o = !!e || a
          , [i,l] = (0,
        n.useState)( () => Date.now());
        return (0,
        n.useEffect)( () => {
            if (!o)
                return;
            l(Date.now());
            let e = window.setInterval( () => l(Date.now()), a ? 200 : 1e3);
            return () => window.clearInterval(e)
        }
        , [o, a]),
        (0,
        v.queueView)({
            search: e,
            launch: t
        }, i, e ? r?.find(t => t.id === e.leader)?.username ?? "Your leader" : void 0)
    }
    e.s(["useMatchNotice", 0, function() {
        let e = (0,
        v.useMatchmaking)(e => e.search)
          , t = (0,
        v.useMatchmaking)(e => e.launch)
          , n = (0,
        v.useMatchmaking)(e => e.error);
        return (0,
        v.matchNotice)({
            search: e,
            launch: t,
            error: n
        })
    }
    , "useQueueView", 0, A], 514152);
    var E = e.i(883620)
      , L = e.i(905289)
      , N = e.i(673378);
    function T({scope: e, drone: r, own: a, loadBoards: o, onEquippedBoards: i, disabled: l, initialPeriod: s="allTime"}) {
        let[c,d] = (0,
        n.useState)(null)
          , [u,m] = (0,
        n.useState)(!1)
          , [f,p] = (0,
        n.useState)(0)
          , [h,y] = (0,
        n.useState)(!1)
          , [b,v] = (0,
        n.useState)(s)
          , [I,_] = (0,
        n.useState)( () => (0,
        g.readGhostIntents)(e))
          , w = (0,
        n.useRef)(null)
          , [x,M] = (0,
        n.useState)(r);
        x !== r && (M(r),
        d(null),
        m(!1),
        y(!1));
        let {timeAttackId: j, courseRevision: R, droneId: A} = e
          , O = (0,
        g.raceSelectionKey)(e);
        (0,
        n.useEffect)( () => {
            let e = new AbortController;
            return w.current = e,
            o({
                timeAttackId: j,
                courseRevision: R,
                droneId: r,
                signal: e.signal
            }).then(t => {
                e.signal.aborted || (d({
                    drone: r,
                    data: t
                }),
                m(!1),
                r === A && i({
                    key: O,
                    board: t
                }))
            }
            ).catch( () => {
                e.signal.aborted || m(!0)
            }
            ),
            () => e.abort()
        }
        , [j, R, r, A, O, o, i, f]);
        let q = c?.drone === r ? c.data : null
          , C = q?.[b]
          , P = C ? [...C.rows, ...C.own && !C.rows.some(e => e.attemptId === C.own.attemptId) ? [C.own] : []] : []
          , D = r === e.droneId && q ? q.allTime.own : a
          , $ = (0,
        g.resolveGhostIntents)(I, D, e.droneId, R, j);
        return (0,
        t.jsxs)("section", {
            className: "fd-mode-panel__board-card",
            "aria-label": "Leaderboard",
            children: [(0,
            t.jsx)(k.Segmented, {
                tone: "quiet",
                label: "Leaderboard period",
                value: b,
                onChange: v,
                options: [{
                    value: "allTime",
                    label: "All time"
                }, {
                    value: "daily",
                    label: "Today"
                }]
            }), (0,
            t.jsxs)("div", {
                className: "fd-mode-panel__board-scroll",
                "aria-busy": !q && !u || h,
                children: [u && (0,
                t.jsxs)("p", {
                    className: "fd-mode-panel__note",
                    role: "status",
                    children: ["Leaderboard unavailable ", (0,
                    t.jsx)(S.TextLink, {
                        onClick: () => p(e => e + 1),
                        children: "Retry"
                    })]
                }), q || u ? C && !P.length ? (0,
                t.jsx)("p", {
                    className: "fd-mode-panel__note",
                    children: "No times yet"
                }) : P.length > 0 && (0,
                t.jsxs)("table", {
                    className: "fd-mode-panel__board",
                    children: [(0,
                    t.jsx)("caption", {
                        className: "sr-only",
                        children: "allTime" === b ? "All time" : "Today"
                    }), (0,
                    t.jsx)("thead", {
                        children: (0,
                        t.jsxs)("tr", {
                            children: [(0,
                            t.jsx)("th", {
                                scope: "col",
                                children: "#"
                            }), (0,
                            t.jsx)("th", {
                                scope: "col",
                                children: "Pilot"
                            }), (0,
                            t.jsx)("th", {
                                scope: "col",
                                children: "Time"
                            }), (0,
                            t.jsx)("th", {
                                scope: "col",
                                children: "Ghost"
                            })]
                        })
                    }), (0,
                    t.jsx)("tbody", {
                        children: P.map(n => {
                            let a = $.findIndex(e => (0,
                            g.raceGhostKey)(e) === (0,
                            g.raceGhostKey)(n))
                              , o = a >= 0
                              , i = r !== e.droneId ? "Ghosts use your equipped drone" : (0,
                            g.usableRaceGhost)(n) ? !o && $.length >= 3 ? "3 ghosts maximum" : null : n.ghostUnavailableReason || "Recording unavailable";
                            return (0,
                            t.jsxs)("tr", {
                                "data-you": n.you || void 0,
                                className: n.you ? "fdk-on-ink" : void 0,
                                children: [(0,
                                t.jsx)("td", {
                                    children: n.rank
                                }), (0,
                                t.jsx)("td", {
                                    children: (0,
                                    g.ghostLabel)(n)
                                }), (0,
                                t.jsx)("td", {
                                    children: (0,
                                    t.jsx)("time", {
                                        children: (0,
                                        N.formatCircuitTime)(n.timeMs)
                                    })
                                }), (0,
                                t.jsx)("td", {
                                    title: i ?? void 0,
                                    children: (0,
                                    t.jsx)(E.Checkbox, {
                                        color: (0,
                                        L.racerColor)(a),
                                        label: (0,
                                        t.jsxs)("span", {
                                            className: "sr-only",
                                            children: [(0,
                                            g.ghostLabel)(n), " ghost", i ? ": " + i : ""]
                                        }),
                                        checked: o,
                                        disabled: l || !!i && !o,
                                        onChange: () => (function(t) {
                                            let n = (0,
                                            g.raceGhostKey)(t)
                                              , a = $.some(e => (0,
                                            g.raceGhostKey)(e) === n);
                                            if (l || r !== e.droneId || !a && (!(0,
                                            g.usableRaceGhost)(t) || $.length >= 3))
                                                return;
                                            let o = (0,
                                            g.ghostSelectionIntents)(a ? $.filter(e => (0,
                                            g.raceGhostKey)(e) !== n) : [...$, t], D);
                                            (0,
                                            g.writeGhostIntents)(e, o),
                                            _(o)
                                        }
                                        )(n)
                                    })
                                })]
                            }, (0,
                            g.raceGhostKey)(n))
                        }
                        )
                    })]
                }) : (0,
                t.jsx)("p", {
                    className: "fd-mode-panel__note",
                    children: "Loading leaderboard"
                }), C?.nextOffset != null && (0,
                t.jsx)(S.TextLink, {
                    disabled: h,
                    onClick: () => {
                        let e = w.current;
                        e && !e.signal.aborted && (y(!0),
                        o({
                            timeAttackId: j,
                            courseRevision: R,
                            droneId: r,
                            offset: C.nextOffset,
                            signal: e.signal
                        }).then(t => {
                            e.signal.aborted || d(e => e?.drone === r ? {
                                drone: r,
                                data: {
                                    ...e.data,
                                    [b]: {
                                        ...t[b],
                                        rows: [...e.data[b].rows, ...t[b].rows.filter(t => !e.data[b].rows.some(e => e.attemptId === t.attemptId))]
                                    }
                                }
                            } : e)
                        }
                        ).catch( () => {
                            e.signal.aborted || m(!0)
                        }
                        ).finally( () => {
                            e.signal.aborted || y(!1)
                        }
                        ))
                    }
                    ,
                    children: "More pilots"
                })]
            })]
        })
    }
    function O({request: e, inFlight: n, soloLoad: a=C, initialRaceView: i}) {
        let l = (0,
        b.useModePanel)(e => e.close);
        (0,
        I.preloadRaceIcons)();
        let s = (0,
        r.useSimStore)(o.confirmedXp)
          , c = (0,
        v.useMatchmaking)(e => (0,
        v.queueMode)(e))
          , d = (0,
        v.useMatchmaking)(e => e.online)
          , u = (0,
        b.modeAvailability)(e.mode, s, !0);
        return (0,
        t.jsxs)(S.Panel, {
            className: "fd-mode-panel sim-ui-surface",
            "data-mode-panel": e.mode,
            "data-origin": e.origin,
            "data-in-flight": n || void 0,
            "data-wide": !n && "race" === e.mode && u.open || void 0,
            role: "dialog",
            "aria-modal": !n || void 0,
            "aria-labelledby": "fd-mode-panel-title",
            onKeyDown: e => {
                "Escape" === e.key && (e.stopPropagation(),
                l())
            }
            ,
            children: [(0,
            t.jsxs)("header", {
                className: "fd-mode-panel__head",
                children: ["launcher" === e.origin && (0,
                t.jsx)("nav", {
                    className: "fd-mode-panel__tabs",
                    "aria-label": "Online modes",
                    children: ["race", "tdm"].map(n => (0,
                    t.jsxs)("button", {
                        type: "button",
                        "aria-pressed": e.mode === n,
                        disabled: !!c && c !== n,
                        title: c && c !== n ? v.QUEUE_HELD : void 0,
                        onClick: () => b.useModePanel.getState().open({
                            mode: n,
                            origin: e.origin,
                            ...n === e.mode ? {
                                courseId: e.courseId,
                                arenaId: e.arenaId
                            } : {}
                        }),
                        children: [(0,
                        t.jsx)(M.ModeIcon, {
                            mode: n
                        }), b.PLAY_MODE_NAMES[n]]
                    }, n))
                }), (0,
                t.jsx)("button", {
                    type: "button",
                    className: "fd-mode-panel__close",
                    onClick: l,
                    "aria-label": "Close",
                    title: n ? "Close (Esc)" : "Close",
                    children: (0,
                    t.jsx)(I.Icon, {
                        name: "close",
                        size: 24
                    })
                })]
            }), (0,
            t.jsx)("h2", {
                id: "fd-mode-panel-title",
                className: "race" === e.mode && u.open ? "sr-only" : "fd-mode-panel__title",
                children: b.PLAY_MODE_NAMES[e.mode]
            }), u.open ? "race" === e.mode ? (0,
            t.jsx)(B, {
                request: e,
                inFlight: n,
                online: d,
                soloLoad: a,
                initialView: i
            }) : (0,
            t.jsx)(G, {
                online: d
            }) : (0,
            t.jsxs)("p", {
                className: "fd-mode-panel__locked",
                children: [(0,
                t.jsx)(I.Icon, {
                    name: "lock",
                    size: 24
                }), u.label]
            })]
        })
    }
    function q({mode: e, online: n, disabled: a=!1}) {
        let o = A()
          , i = (0,
        r.useSimStore)(e => e.isAnonymous ? null : e.playerAccountId)
          , l = (0,
        c.useLobbySocial)(e => e.squad)
          , s = l?.members.find(e => e.id === l.leaderId)
          , d = v.useMatchmaking.getState;
        return o?.state === "found" ? (0,
        t.jsxs)("div", {
            className: "fd-mode-panel__searching",
            "data-queue": "found",
            role: "status",
            children: [(0,
            t.jsxs)("span", {
                children: [(0,
                t.jsxs)("strong", {
                    children: ["Match found · ", o.mode]
                }), (0,
                t.jsx)("small", {
                    children: o.line
                })]
            }), (0,
            t.jsx)("span", {
                className: "fd-mode-panel__queue-actions",
                children: (0,
                t.jsx)("button", {
                    type: "button",
                    onClick: () => d().backOut(),
                    children: "Back out"
                })
            })]
        }) : o ? (0,
        t.jsxs)("div", {
            className: "fd-mode-panel__searching",
            "data-queue": "searching",
            role: "status",
            children: [(0,
            t.jsxs)("span", {
                children: [(0,
                t.jsxs)("strong", {
                    children: [o.mode, " · Searching ", o.time]
                }), (0,
                t.jsx)("small", {
                    children: o.lead ? o.fill : `${o.leader} leads \xb7 ${o.fill}`
                })]
            }), o.lead && (0,
            t.jsxs)("span", {
                className: "fd-mode-panel__queue-actions",
                children: [(0,
                t.jsx)("button", {
                    type: "button",
                    "data-light": !0,
                    onClick: () => d().startNow(),
                    children: "Start now"
                }), (0,
                t.jsx)("button", {
                    type: "button",
                    onClick: () => d().cancel(),
                    children: "Cancel"
                })]
            })]
        }) : l && s && l.leaderId !== i ? (0,
        t.jsxs)("p", {
            className: "fd-mode-panel__note",
            children: [s.username, " starts the match"]
        }) : (0,
        t.jsxs)("button", {
            type: "button",
            className: "fd-mode-panel__find",
            "data-mode-primary": !0,
            disabled: !n || a,
            onClick: () => {
                v.useMatchmaking.getState().requestMatch(e) && ((0,
                b.writeLastPlayMode)(e),
                b.useModePanel.getState().close())
            }
            ,
            children: ["race" === e ? "Search" : "Play online", n ? (0,
            t.jsx)(I.Icon, {
                name: "arrow-right",
                className: "fd-mode-panel__find-arrow",
                size: 24
            }) : (0,
            t.jsx)(x.OfflineTag, {})]
        })
    }
    let C = {
        boards: y.fetchRaceBoards,
        ghost: y.fetchRaceGhost
    }
      , P = {
        whoop: "Tiny Whoop",
        cinewhoop: "3 inch",
        freestyle: "5 inch",
        "long-range": "7 inch",
        racer: "5 inch R"
    }
      , D = {
        phase: "arrival",
        time: 6e4
    };
    function $({reason: e=null}) {
        let n = (0,
        v.useMatchmaking)(e => (0,
        v.errorLine)(e.error))
          , r = e ?? n;
        return r ? (0,
        t.jsx)("p", {
            className: "fd-mode-panel__note",
            role: "status",
            "data-match-error": !0,
            children: r
        }) : null
    }
    function B({request: e, inFlight: a, online: i, soloLoad: c, initialView: f}) {
        let y = (0,
        r.useSimStore)(e => e.personalMapId ?? e.settings.map.mapId)
          , S = (0,
        s.useMenuScene)(e => e.selectedMap)
          , w = (0,
        r.useSimStore)(l.flownDrone)
          , x = (0,
        r.useSimStore)(e => e.settings.drone.skins);
        (0,
        r.useSimStore)(e => e.lessonAuthoringEpoch);
        let M = "marker" === e.origin ? (0,
        p.getTimeAttackDoc)(e.courseId) : null
          , j = (0,
        b.raceChoices)(M?.mapId ?? (a ? y : S), w)
          , A = Math.max(0, j.findIndex(t => t.id === e.courseId))
          , E = j[A] ?? null
          , L = t => b.useModePanel.getState().open({
            ...e,
            courseId: j[(A + t + j.length) % j.length].id
        })
          , [N,O] = (0,
        n.useState)(f?.mode ?? "time-attack")
          , [C,G] = (0,
        n.useState)(f?.board ?? w)
          , H = "time-attack" === N ? C : w
          , V = (0,
        r.useSimStore)(e => (0,
        d.isDroneUnlocked)(H, (0,
        o.confirmedXp)(e), e.droneGifts))
          , [Y,K] = (0,
        n.useState)(w);
        Y !== w && (K(w),
        G(w));
        let z = (0,
        v.useMatchmaking)(e => (0,
        v.queueLockLine)(e))
          , X = (0,
        r.useSimStore)(e => e.playerAccountId)
          , J = E?.id ?? null
          , Q = E?.competitiveRevision ?? 1
          , W = J ? {
            accountId: X,
            timeAttackId: J,
            courseRevision: Q,
            droneId: H
        } : null
          , Z = W ? (0,
        g.raceSelectionKey)(W) : ""
          , [ee,et] = (0,
        n.useState)(null)
          , en = ee?.key === Z ? ee.board.allTime.own : null
          , [er,ea] = (0,
        n.useState)(!1)
          , [eo,ei] = (0,
        n.useState)(!1)
          , el = (0,
        n.useRef)(null)
          , [es,ec] = (0,
        n.useState)(Z);
        es !== Z && (ec(Z),
        ea(!1),
        ei(!1)),
        (0,
        n.useEffect)( () => () => el.current?.abort(), [Z, N]);
        let ed = async () => {
            if (!W || er || !V)
                return;
            let e = new AbortController;
            el.current = e,
            ea(!0),
            ei(!1);
            let t = () => {
                e.signal.aborted || ei(!0)
            }
            ;
            try {
                await F(W, c, e.signal, t) || t()
            } catch {
                t()
            } finally {
                e.signal.aborted || ea(!1)
            }
        }
        ;
        return (0,
        t.jsxs)("div", {
            className: "fd-mode-panel__race-body",
            children: [(0,
            t.jsxs)("section", {
                className: "fd-mode-panel__race-card",
                children: [E ? (0,
                t.jsxs)("div", {
                    className: "fd-mode-panel__race",
                    children: [(0,
                    t.jsx)(_.IconButton, {
                        tone: "secondary",
                        disabled: j.length < 2 || "online" === N,
                        onClick: () => L(-1),
                        label: "Previous circuit",
                        icon: (0,
                        t.jsx)(I.Icon, {
                            name: "chevron-left",
                            size: 24
                        })
                    }), (0,
                    t.jsxs)("div", {
                        className: "fd-mode-panel__race-name",
                        children: [(0,
                        t.jsx)("strong", {
                            children: E.name
                        }), (0,
                        t.jsxs)("span", {
                            children: [function(e) {
                                try {
                                    return (0,
                                    m.mapById)(e).name
                                } catch {
                                    return ""
                                }
                            }(E.mapId), j.length > 1 ? ` \xb7 ${A + 1} / ${j.length}` : ""]
                        })]
                    }), (0,
                    t.jsx)(_.IconButton, {
                        tone: "secondary",
                        disabled: j.length < 2 || "online" === N,
                        onClick: () => L(1),
                        label: "Next circuit",
                        icon: (0,
                        t.jsx)(I.Icon, {
                            name: "chevron-right",
                            size: 24
                        })
                    })]
                }) : (0,
                t.jsx)("p", {
                    className: "fd-mode-panel__note",
                    children: h.NO_RACES_FOR_DRONE
                }), (0,
                t.jsx)(k.Segmented, {
                    typography: "body",
                    label: "Race mode",
                    value: N,
                    onChange: e => {
                        el.current?.abort(),
                        ea(!1),
                        O(e)
                    }
                    ,
                    options: [{
                        value: "online",
                        label: "Online race"
                    }, {
                        value: "time-attack",
                        label: "Time attack"
                    }]
                }), !a && (0,
                t.jsx)("div", {
                    className: "fd-mode-panel__drone-stage fdk-slant-clip",
                    children: (0,
                    t.jsx)(R.DroneHeroHost, {
                        children: (0,
                        t.jsx)(R.DroneHeroAnchor, {
                            variant: "gear",
                            archetype: H,
                            skin: (0,
                            u.equippedDroneSkin)(x, H),
                            preview: D
                        })
                    })
                }), "online" === N && (0,
                t.jsx)("p", {
                    className: "fd-mode-panel__note",
                    children: h.ONLINE_RACE_QUEUE_LINE
                }), (0,
                t.jsx)($, {
                    reason: z && E ? `Time attack: ${z.toLowerCase()}` : "time-attack" !== N || V ? eo ? U : null : `${d.DRONES[H].name} unlocks at level ${d.DRONES[H].unlockLevel}`
                })]
            }), "time-attack" === N && (0,
            t.jsxs)("div", {
                className: "fd-mode-panel__boards",
                children: [(0,
                t.jsx)(k.Segmented, {
                    typography: "body",
                    label: "Drone leaderboard",
                    size: "sm",
                    value: C,
                    onChange: e => {
                        e !== C && (el.current?.abort(),
                        G(e))
                    }
                    ,
                    options: ["whoop", "cinewhoop", "freestyle", "long-range", "racer"].map(e => ({
                        value: e,
                        label: P[e]
                    }))
                }), W && (0,
                t.jsx)(T, {
                    scope: W,
                    drone: C,
                    own: en,
                    loadBoards: c.boards,
                    onEquippedBoards: et,
                    disabled: !!z || er,
                    initialPeriod: f?.period
                }, Z)]
            }), (0,
            t.jsx)("div", {
                className: "fd-mode-panel__launch",
                children: z || "online" === N ? (0,
                t.jsx)(q, {
                    mode: "race",
                    online: i
                }) : (0,
                t.jsx)(_.PlayButton, {
                    launchIcon: !0,
                    label: "Time attack",
                    disabled: !E || er || !V,
                    detail: er ? "Starting" : void 0,
                    onClick: () => void ed()
                })
            })]
        })
    }
    async function F(e, t, n, i) {
        var l;
        let s = () => {
            let t = r.useSimStore.getState();
            return !n?.aborted && !(0,
            v.queueBusy)(v.useMatchmaking.getState()) && t.playerAccountId === e.accountId && (0,
            d.isDroneUnlocked)(e.droneId, (0,
            o.confirmedXp)(t), t.droneGifts) && ((0,
            p.getTimeAttackDoc)(e.timeAttackId)?.competitiveRevision ?? 1) === e.courseRevision
        }
        ;
        if (!s())
            return !1;
        let c = (0,
        p.getTimeAttackDoc)(e.timeAttackId);
        if (!c || (await (0,
        f.ensureReplayMap)(c.mapId),
        n?.throwIfAborted(),
        ((0,
        p.getTimeAttackDoc)(e.timeAttackId)?.competitiveRevision ?? 1) !== e.courseRevision))
            return !1;
        let u = await (0,
        g.prepareGhosts)(e, t, {
            signal: n
        });
        return !!s() && !!r.useSimStore.getState().canOpenRace(e.timeAttackId) && (l = () => {
            s() && r.useSimStore.getState().canOpenRace(e.timeAttackId) && r.useSimStore.getState().soloRace(e.timeAttackId, u, {
                droneId: e.droneId
            }) ? (0,
            w.rememberRaceCircuit)(e.timeAttackId) : i?.()
        }
        ,
        (0,
        b.writeLastPlayMode)("race"),
        (0,
        a.isMenuReplayBackdrop)(r.useSimStore.getState().phase) ? (0,
        j.requestHomeExit)(l) : l(),
        !0)
    }
    let U = "Race unavailable. Reopen the panel.";
    function G({online: e}) {
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsxs)("p", {
                className: "fd-mode-panel__rules",
                children: ["4v4 · 20 ", (0,
                t.jsx)(I.Icon, {
                    name: "battery",
                    inline: !0,
                    label: "batteries"
                }), " a team · 8 minutes"]
            }), (0,
            t.jsx)("div", {
                className: "fd-mode-panel__actions",
                children: (0,
                t.jsx)(q, {
                    mode: "tdm",
                    online: e
                })
            }), (0,
            t.jsx)($, {})]
        })
    }
    e.s(["ModePanel", 0, O, "ModePanelHost", 0, function({inFlight: e, soloLoad: o, initialRaceView: i}) {
        let l = (0,
        b.useModePanel)(e => e.request)
          , s = (0,
        r.useSimStore)(e => e.phase)
          , c = e ? "flying" === s : (0,
        a.isMenuReplayBackdrop)(s);
        return ((0,
        n.useEffect)( () => {
            if (e)
                return r.useSimStore.subscribe( (e, t) => {
                    (0,
                    a.isMenuReplayBackdrop)(e.phase) !== (0,
                    a.isMenuReplayBackdrop)(t.phase) && b.useModePanel.getState().close()
                }
                )
        }
        , [e]),
        (0,
        n.useEffect)( () => {
            if (!e || !l)
                return;
            let t = e => {
                "Escape" === e.key && "flying" === r.useSimStore.getState().phase && (e.preventDefault(),
                e.stopImmediatePropagation(),
                b.useModePanel.getState().close())
            }
            ;
            return window.addEventListener("keydown", t, !0),
            () => window.removeEventListener("keydown", t, !0)
        }
        , [e, l]),
        l && c) ? (0,
        t.jsxs)(t.Fragment, {
            children: [!e && (0,
            t.jsx)("div", {
                className: "fd-mode-panel-backdrop",
                "aria-hidden": !0,
                onClick: () => b.useModePanel.getState().close()
            }), (0,
            t.jsx)(O, {
                request: l,
                inFlight: e,
                soloLoad: o,
                initialRaceView: i
            }), e && "marker" === l.origin && (0,
            t.jsxs)("p", {
                className: "fd-mode-panel-hold",
                role: "note",
                children: [(0,
                t.jsx)("kbd", {
                    children: "Esc"
                }), (0,
                t.jsx)("span", {
                    "aria-hidden": !0,
                    children: "·"
                }), "Fly on"]
            })]
        }) : null
    }
    , "soloRefusal", 0, function(e) {
        let t = r.useSimStore.getState()
          , n = (0,
        o.confirmedXp)(t);
        if (!(0,
        d.isDroneUnlocked)(e.droneId, n, t.droneGifts))
            return {
                reason: "drone",
                line: `${d.DRONES[e.droneId].name} unlocks at level ${d.DRONES[e.droneId].unlockLevel}`
            };
        if (!(0,
        i.racesUnlocked)(n))
            return {
                reason: "level",
                line: `Time attack unlocks at level ${i.RACE_UNLOCK_LEVEL}`
            };
        let a = (0,
        p.getTimeAttackDoc)(e.timeAttackId);
        return a && (a.competitiveRevision ?? 1) === e.courseRevision && t.canOpenRace(e.timeAttackId) ? null : {
            reason: "race",
            line: U
        }
    }
    , "startSolo", 0, F], 410484)
}
, 762815, e => {
    "use strict";
    var t = e.i(271645)
      , n = e.i(768834)
      , r = e.i(246176)
      , a = e.i(37220)
      , o = e.i(404961)
      , i = e.i(106258)
      , l = e.i(809886);
    let s = (0,
    n.create)(e => ({
        squadId: null,
        sittingOut: !1,
        set: (t, n) => e({
            squadId: t,
            sittingOut: n
        })
    }));
    function c(e, t) {
        return !!t && e.squadId === t.id && e.sittingOut
    }
    function d(e, t) {
        if (t.mapLoading || t.mapError || t.selectedMap !== e.mapId)
            return !1;
        if (void 0 === e.mapRevision)
            return !0;
        try {
            return ((0,
            o.resolveMap)(e.mapId).revision ?? 0) === e.mapRevision
        } catch {
            return !1
        }
    }
    function u(e, t, n, r) {
        let a = t?.members.find(e => e.id === n);
        return e && a && r && (!a.status || "lobby" === a.status) ? String(a.ready) === e.ready ? null : e : null
    }
    e.s(["SquadReadiness", 0, function() {
        let e = (0,
        i.useSimStore)(e => e.isAnonymous ? null : e.playerAccountId)
          , n = (0,
        r.useLobbySocial)(e => e.squad)
          , o = (0,
        r.useLobbySocial)(e => e.status)
          , m = (0,
        r.useLobbySocial)(e => e.busy || e.presenceSyncing)
          , f = c(s(), n)
          , p = (0,
        a.useMenuScene)(e => e.selectedMap)
          , h = (0,
        a.useMenuScene)(e => e.mapLoading)
          , y = (0,
        a.useMenuScene)(e => e.mapError)
          , g = (0,
        i.useSimStore)(e => (0,
        l.isMenuReplayBackdrop)(e.phase))
          , b = (0,
        t.useRef)(null);
        return (0,
        t.useEffect)( () => {
            var t, a;
            let i, l;
            if (b.current = u(b.current, n, e, g),
            "ready" !== o || m || !n)
                return;
            let s = (t = b.current,
            a = d(n, {
                selectedMap: p,
                mapLoading: h,
                mapError: y
            }),
            i = u(t, n, e, g),
            (l = function(e, t, n, r, a) {
                if (!e || !t || e.leaderId === t || !a)
                    return null;
                let o = e.members.find(e => e.id === t);
                return o && o.online && (!o.status || "lobby" === o.status) ? n ? o.ready ? {
                    key: `${e.id}:out`,
                    ready: "false"
                } : null : o.ready || !r ? null : {
                    key: `${e.id}:${e.launchVersion}:${e.mapId}@${e.mapRevision ?? ""}`,
                    ready: "true"
                } : null
            }(n, e, f, a, g)) && l.key !== i?.key ? {
                sent: l,
                send: l
            } : {
                sent: i,
                send: null
            });
            b.current = s.sent,
            s.send && r.useLobbySocial.getState().act("ready", s.send.ready)
        }
        , [n, o, m, e, f, p, h, y, g]),
        null
    }
    , "sittingOutOf", 0, c, "squadMapReady", 0, d, "useSitOut", 0, s])
}
, 673378, e => {
    "use strict";
    function t(e) {
        let t = Math.max(0, Math.floor(e))
          , n = Math.floor(t / 6e4)
          , r = Math.floor(t / 1e3) % 60;
        return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}.${String(t % 1e3).padStart(3, "0")}`
    }
    e.s(["formatCircuitTime", 0, function(e) {
        return t(e).replace(/^0(?=\d:)/, "")
    }
    , "formatRaceTime", 0, t])
}
, 125392, e => {
    "use strict";
    var t = e.i(843476);
    e.i(573798);
    var n = e.i(568204)
      , r = e.i(244144);
    e.s(["OfflineTag", 0, function() {
        return (0,
        t.jsx)(n.Badge, {
            icon: (0,
            t.jsx)(r.Icon, {
                name: "offline",
                className: "text-(--fdk-orange)",
                strokeWidth: 2.5,
                size: 24
            }),
            children: "Offline"
        })
    }
    ])
}
, 246176, e => {
    "use strict";
    var t = e.i(768834)
      , n = e.i(920755)
      , r = e.i(353198)
      , a = e.i(330374)
      , o = e.i(37220);
    let i = ["run", "match", "sitting_out"]
      , l = {
        friends: [],
        requests: [],
        invitations: [],
        sentInvitations: [],
        inviteCode: null,
        squad: null
    };
    function s(e) {
        if (!e || "object" != typeof e)
            throw Error("The friends list could not load.");
        let t = e => {
            let t = r.DRONE_IDS.includes(e.drone) ? e.drone : r.DEFAULT_DRONE
              , n = "string" == typeof e.skin && e.skin.length <= 100 ? e.skin : "factory"
              , o = (0,
            a.parseRaceAppearance)(e.appearance);
            return {
                ...e,
                username: String(e.username || "Pilot").slice(0, 32),
                xp: Math.max(0, Number(e.xp) || 0),
                drone: t,
                skin: n,
                online: !!e.online,
                status: ["lobby", "flying", "away", "offline"].includes(e.status ?? "") ? e.status : e.online ? "lobby" : "offline",
                activity: i.includes(e.activity) ? e.activity : null,
                appearance: o?.droneId === t && o.skinId === n ? o : null
            }
        }
        ;
        return {
            friends: Array.isArray(e.friends) ? e.friends.slice(0, 100).map(t) : [],
            requests: Array.isArray(e.requests) ? e.requests.slice(0, 100) : [],
            invitations: Array.isArray(e.invitations) ? e.invitations.slice(0, 20) : [],
            sentInvitations: Array.isArray(e.sentInvitations) ? e.sentInvitations.filter(e => "string" == typeof e).slice(0, 100) : [],
            inviteCode: "string" == typeof e.inviteCode && e.inviteCode.length <= 64 ? e.inviteCode : null,
            squad: e.squad && Array.isArray(e.squad.members) ? {
                ...e.squad,
                mapRevision: Number.isSafeInteger(e.squad.mapRevision) && e.squad.mapRevision >= 0 ? e.squad.mapRevision : void 0,
                flightActive: !0 === e.squad.flightActive,
                mode: ["free", "race", "tdm"].includes(e.squad.mode) ? e.squad.mode : void 0,
                drone: r.DRONE_IDS.includes(e.squad.drone) ? e.squad.drone : void 0,
                drones: Array.isArray(e.squad.drones) ? r.DRONE_LADDER.filter(t => e.squad.drones.includes(t)) : void 0,
                mapName: "string" == typeof e.squad.mapName ? e.squad.mapName.slice(0, 80) : void 0,
                members: e.squad.members.slice(0, 4).map(e => ({
                    ...t(e),
                    ready: !!e.ready,
                    admitted: "boolean" == typeof e.admitted ? e.admitted : void 0
                }))
            } : null
        }
    }
    function c(e) {
        return "PGRST202" === e.code || "42P01" === e.code || "42883" === e.code ? "Friends and squads are not available on this server yet. You can still fly solo." : e.message || "Couldn't connect to friends. Try again."
    }
    function d(e, t) {
        return !!e && !!t && e.id === t.id && e.launchVersion === t.launchVersion && e.mapId === t.mapId && e.mapRevision === t.mapRevision && e.roomId === t.roomId
    }
    let u = 0
      , m = (0,
    t.create)(e => ({
        ...l,
        activeLaunch: null,
        launchError: !1,
        launchAttempt: 0,
        retryLaunch: () => e(e => ({
            launchAttempt: e.launchAttempt + 1
        })),
        status: "idle",
        error: "",
        busy: !1,
        presenceSyncing: !1,
        reset: () => {
            u++,
            e({
                ...l,
                activeLaunch: null,
                launchError: !1,
                launchAttempt: 0,
                status: "idle",
                error: "",
                busy: !1,
                presenceSyncing: !1
            })
        }
        ,
        sync: async (t, r, a, o=null, i=null) => {
            if (m.getState().busy)
                return;
            let l = ++u;
            try {
                let {data: c, error: m} = await (0,
                n.createClient)().rpc("social_snapshot", {
                    p_drone: t,
                    p_skin: r,
                    p_status: a,
                    p_room_id: o,
                    p_activity: i
                }).abortSignal(AbortSignal.timeout(1e4));
                if (l !== u)
                    return;
                if (m)
                    throw m;
                let f = s(c);
                e(e => {
                    let t = e.launchError && d(f.squad, e.squad);
                    return {
                        ...f,
                        status: "ready",
                        launchError: t,
                        error: t ? e.error : ""
                    }
                }
                )
            } catch (t) {
                l === u && e({
                    status: "error",
                    error: c(t)
                })
            }
        }
        ,
        act: async (t, r="") => {
            if (m.getState().busy)
                return !1;
            let a = ++u;
            e(e => ({
                busy: !0,
                error: e.launchError ? e.error : ""
            }));
            try {
                let i = m.getState().squad?.mapId
                  , l = m.getState().squad?.mapRevision
                  , c = void 0 === l ? "" : `@${l}`
                  , f = "ready" === t && "true" === r && i ? `true:${i}${c}` : "launch" === t ? `${r}${c}` : r
                  , {data: p, error: h} = await (0,
                n.createClient)().rpc("social_action", {
                    p_action: t,
                    p_target: f,
                    ..."create" === t || "invite" === t ? {
                        p_map_id: o.useMenuScene.getState().selectedMap
                    } : {}
                }).abortSignal(AbortSignal.timeout(1e4));
                if (a !== u)
                    return !1;
                if (h)
                    throw h;
                let y = s(p);
                return e(e => {
                    let t = e.launchError && d(y.squad, e.squad);
                    return {
                        ...y,
                        status: "ready",
                        busy: !1,
                        launchError: t,
                        error: t ? e.error : ""
                    }
                }
                ),
                !0
            } catch (t) {
                return a === u && e({
                    busy: !1,
                    error: c(t)
                }),
                !1
            }
        }
    }));
    async function f() {
        let e = () => {
            let {squad: e, inviteCode: t} = m.getState();
            return e?.inviteCode ?? t ?? null
        }
        ;
        return e() || await m.getState().act("create") ? e() : null
    }
    let p = {
        match: "In a match",
        run: "In a run",
        sitting_out: "Sitting out"
    };
    function h(e) {
        return e.online && e.activity ? p[e.activity] : null
    }
    e.s(["EMPTY_SOCIAL", 0, l, "squadActivityLabel", 0, h, "squadDrone", 0, function(e=m.getState().squad) {
        return e ? e.drone ?? e.members.find(t => t.id === e.leaderId)?.drone ?? r.DEFAULT_DRONE : null
    }
    , "squadDroneChoices", 0, function(e) {
        let t = e.members.find(t => t.id === e.leaderId);
        return e.drones ?? r.DRONE_LADDER.filter(e => (0,
        r.isDroneUnlocked)(e, t?.xp ?? 0, []))
    }
    , "squadLinkCode", 0, f, "squadMemberStatus", 0, function(e, t) {
        if (!e.online)
            return "Offline";
        let n = h(e);
        return n || ("flying" === e.status ? "Flying" : e.id === t ? "Leader" : e.ready ? "Ready" : "Sitting out")
    }
    , "useLobbySocial", 0, m])
}
, 71901, e => {
    "use strict";
    var t = e.i(333794)
      , n = e.i(404961)
      , r = e.i(645793)
      , a = e.i(246176)
      , o = e.i(37220)
      , i = e.i(106258)
      , l = e.i(809886);
    async function s(e, t, n= () => !0) {
        let r = t.read();
        if (!n() || !r.inMenu)
            return !1;
        if (r.squadId && r.leaderId !== r.account)
            throw Error("Only the squad leader can change the map.");
        let a = () => {
            let e = t.read();
            return n() && e.inMenu && e.account === r.account && e.squadId === r.squadId && e.leaderId === r.leaderId
        }
          , o = await t.prepare(e);
        if (!n())
            return !1;
        if (!a())
            throw Error("Your squad changed. Select the map again.");
        let i = t.locked?.(o) ?? null;
        if (i)
            throw Error(i);
        if ((r.squadId || r.pending) && await t.chooseForSquad(o),
        !n())
            return !1;
        if (!a())
            throw Error("Your squad changed. Select the map again.");
        return t.select(o),
        !0
    }
    e.s(["selectLobbyMap", 0, function(e, c) {
        let d = i.useSimStore.getState()
          , u = a.useLobbySocial.getState();
        return d.playerAccountId && !d.isAnonymous && ("ready" !== u.status || u.busy) ? Promise.reject(Error("Your squad is still connecting. Try again in a moment.")) : s(e, {
            read: () => {
                let e = i.useSimStore.getState()
                  , {squad: t, inviteCode: n} = a.useLobbySocial.getState();
                return {
                    account: e.isAnonymous ? null : e.playerAccountId,
                    squadId: t?.id ?? null,
                    leaderId: t?.leaderId ?? null,
                    pending: !t && !!n,
                    inMenu: (0,
                    l.isMenuReplayBackdrop)(e.phase)
                }
            }
            ,
            prepare: t.prepareLobbyMap,
            chooseForSquad: async e => {
                if (!await a.useLobbySocial.getState().act("map", e))
                    throw Error(a.useLobbySocial.getState().error || "The map could not be selected. Try again.")
            }
            ,
            select: e => o.useMenuScene.getState().selectMap(e),
            locked: e => {
                let {xp: t, isAdmin: a} = i.useSimStore.getState()
                  , o = (0,
                n.resolveMap)(e);
                return (0,
                r.mapLockedFor)(o, t ?? 0, !0 === a) ? (0,
                r.mapLockedMessage)(o) : null
            }
        }, c)
    }
    ])
}
, 105524, 462239, e => {
    "use strict";
    var t = e.i(768834)
      , n = e.i(118274);
    let r = {
        race: 15e3,
        teamDeathmatch: 15e3
    };
    e.s(["FILL_AFTER_MS", 0, r, "REPORT_EVERY_MS", 0, 1e3], 462239);
    var a = e.i(233783);
    let o = {
        race: "race",
        tdm: "teamDeathmatch"
    }
      , i = e => "race" === e ? "race" : "tdm"
      , l = {
        race: r.race,
        tdm: r.teamDeathmatch
    }
      , s = {
        race: "Ghosts",
        tdm: "Bots"
    }
      , c = () => "u" < typeof navigator || !1 !== navigator.onLine
      , d = null
      , u = () => ({
        drone: null,
        map: null
    })
      , m = null
      , f = null
      , p = 0
      , h = !1
      , y = null;
    function g(e) {
        let t = d?.find(e);
        t && (p++,
        t.then(e => {
            !1 === e && I.getState().search && I.setState({
                search: null,
                error: "unreachable"
            })
        }
        ).finally( () => {
            p--,
            S(!1)
        }
        ))
    }
    function b() {
        let e = f;
        e && (f = null,
        clearTimeout(e.timer),
        g(e.request))
    }
    function v() {
        f && clearTimeout(f.timer),
        f = null
    }
    function S(e) {
        let t = I.getState();
        0 !== p || f || e || h || t.search || t.launch || (0,
        a.newMatchUnanswered)()
    }
    let I = (0,
    t.create)( (e, t) => ({
        search: null,
        launch: null,
        online: c(),
        error: null,
        requestMatch: n => {
            if (!t().online || w(t()))
                return !1;
            e({
                search: {
                    mode: n,
                    startedAt: Date.now()
                },
                error: null
            }),
            y = n;
            let r = u()
              , i = {
                mode: o[n],
                drone: "race" === n ? r.drone : null,
                course: null,
                map: r.map
            }
              , l = a.useAfterMatch.getState().match;
            return r.room && l === r.room && t().after?.match !== l ? (v(),
            f = {
                room: l,
                request: i,
                timer: setTimeout(b, 5e3)
            }) : g(i),
            !0
        }
        ,
        startNow: () => {
            d ? d.act("start") : e({
                search: null
            })
        }
        ,
        cancel: () => {
            v(),
            e({
                search: null
            }),
            S(!1),
            d?.act("cancel")
        }
        ,
        backOut: () => {
            e({
                launch: null
            }),
            (0,
            a.newMatchUnanswered)(),
            d?.act("backOut")
        }
        ,
        after: null,
        chooseAfter: n => {
            let r = t().after;
            r && e({
                after: {
                    ...r,
                    choice: n
                }
            });
            let a = d?.choose(n) ?? null;
            m = a,
            a?.finally( () => {
                m === a && (m = null)
            }
            )
        }
        ,
        voteNext: n => {
            let r = t().after;
            r && "flyFree" !== r.choice && e({
                after: {
                    ...r,
                    choice: "again",
                    vote: n
                }
            }),
            d?.vote(n)
        }
        ,
        leaveMatchSeat: () => {
            e({
                after: null
            });
            let t = m;
            t ? t.then( () => d?.act("leave")) : d?.act("leave")
        }
    }));
    if ("function" == typeof window.addEventListener) {
        let e = () => {
            let e = c();
            e ? d?.poll() : I.setState({
                online: e
            })
        }
        ;
        window.addEventListener("online", e),
        window.addEventListener("offline", e)
    }
    function _(e) {
        switch (e) {
        case null:
            return null;
        case "busy":
            return "Busy: finish your run or match first";
        case "drone_locked":
            return "Drone locked";
        case "level_locked":
            return "Mode locked at your level";
        case "no_match":
            return "No match found. Try again";
        case "not_leader":
            return "Your squad leader starts the match";
        case "map_failed":
            return "The match map failed to load";
        case "match_closed":
            return "That match ended";
        case "unreachable":
            return "Matchmaking unreachable. Try again";
        case "rate_limited":
            return "Too many tries. Wait a moment";
        case "banned":
            return "Matchmaking is closed to this account";
        case "elsewhere":
            return "Flying in another tab.";
        case "build_unavailable":
            return "Servers are updating. Reload to fly online.";
        default:
            return "Matchmaking is busy. Try again"
        }
    }
    function k(e, t) {
        return Math.max(0, Math.ceil(((e.fillAt ?? e.startedAt + l[e.mode]) - t) / 1e3))
    }
    function w(e) {
        return !!e.search || !!e.launch
    }
    e.s(["QUEUE_HELD", 0, "Unavailable while searching", "applyMatchmakingView", 0, function(e, t) {
        if (!t || !c())
            return void I.setState({
                online: !1
            });
        let n = e.search
          , r = e.launch
          , o = e.after ?? null
          , l = !!I.getState().launch
          , s = f;
        if (s && o?.match === s.room && b(),
        I.setState({
            online: !0,
            search: n ? {
                mode: i(n.mode),
                startedAt: n.startedAt,
                fillAt: n.fillAt,
                lead: n.lead,
                leader: n.leader
            } : s ? I.getState().search : null,
            launch: r ? {
                mode: i(r.mode),
                match: r.match,
                map: r.map,
                ...r.course ? {
                    course: r.course
                } : {},
                ...r.from ? {
                    from: r.from
                } : {},
                ...r.arena ? {
                    arena: r.arena
                } : {},
                endsAt: r.endsAt
            } : null,
            error: e.error ?? (n || r ? null : I.getState().error),
            after: o
        }),
        h = !!(e.ready || e.playing),
        S(l),
        o)
            (0,
            a.roundOver)(o.match, o.mode),
            (0,
            a.seeVote)({
                options: o.options,
                votes: o.votes,
                vote: o.vote,
                endsAt: o.endsAt
            });
        else if (r ?? e.ready) {
            let t = r ?? e.ready
              , n = a.useAfterMatch.getState();
            n.match && t.from === n.match && "newMatch" !== n.pressed && (0,
            a.seeNext)({
                map: t.map,
                course: t.course ?? null
            })
        }
    }
    , "attachMatchmaking", 0, function(e, t) {
        d = e,
        t && (u = t)
    }
    , "errorLine", 0, _, "matchNotice", 0, function(e) {
        let t = w(e) ? null : _(e.error);
        return t ? {
            line: t,
            retry: !!y && ("map_failed" === e.error || "unreachable" === e.error)
        } : null
    }
    , "playMode", 0, i, "pollMatchmaking", 0, function() {
        d?.poll()
    }
    , "queueBusy", 0, w, "queueLockLine", 0, function(e) {
        return e.launch ? "Unavailable while your match launches" : e.search ? "Unavailable while searching" : null
    }
    , "queueMode", 0, function(e) {
        return e.launch?.mode ?? e.search?.mode ?? null
    }
    , "queueView", 0, function(e, t, r="Your leader") {
        let a, o, i, {search: l, launch: c} = e;
        return c ? {
            state: "found",
            mode: n.PLAY_MODE_NAMES[c.mode],
            line: null === c.endsAt ? "Joins after your run" : `Launching in ${Math.max(0, Math.ceil((c.endsAt - t) / 1e3))}`
        } : l ? {
            state: "searching",
            mode: n.PLAY_MODE_NAMES[l.mode],
            time: (a = Math.max(0, Math.floor((t - l.startedAt) / 1e3)),
            `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`),
            fill: (o = k(l, t)) > 0 ? `${s[l.mode]} fill in ${o} s` : "Filling seats",
            chipFill: (i = k(l, t)) > 0 ? `${s[l.mode]} in ${i} s` : "Filling seats",
            lead: !1 !== l.lead,
            leader: r
        } : null
    }
    , "retryMatch", 0, function() {
        return !!y && I.getState().requestMatch(y)
    }
    , "useMatchmaking", 0, I], 105524)
}
, 37220, e => {
    "use strict";
    var t = e.i(768834)
      , n = e.i(998494);
    let r = (0,
    t.create)(e => ({
        destination: null,
        selectedMap: n.DEFAULT_MAP_ID,
        contentVersion: 0,
        pendingMapId: null,
        mapLoading: !1,
        mapError: "",
        mapAttempt: 0,
        socialOpen: !1,
        slotAnchors: null,
        hoveredSlot: null,
        setDestination: t => e({
            destination: t
        }),
        selectMap: t => e(e => ({
            selectedMap: t,
            contentVersion: e.contentVersion + 1,
            mapError: "",
            mapLoading: !1
        })),
        stageMapSelection: t => e({
            pendingMapId: t
        }),
        retryMap: () => e(e => ({
            mapAttempt: e.mapAttempt + 1
        })),
        setSocialOpen: t => e({
            socialOpen: t
        }),
        setSlotAnchors: t => e({
            slotAnchors: t
        }),
        setHoveredSlot: t => e({
            hoveredSlot: t
        })
    }));
    e.s(["useMenuScene", 0, r])
}
, 905289, e => {
    "use strict";
    let t = ["#dc185a", "#2970ff", "#14b09a", "#fff200"];
    e.s(["RACER_COLORS", 0, t, "racerColor", 0, function(e) {
        let n = Math.floor(Math.abs(e)) % t.length;
        return t[n]
    }
    ])
}
, 245433, 94891, e => {
    "use strict";
    var t = e.i(920755)
      , n = e.i(613105)
      , r = e.i(381842)
      , a = e.i(330374)
      , o = e.i(940072)
      , i = e.i(738073);
    function l(e, t) {
        if (!e || "object" != typeof e || 1 !== e.format || 2 !== e.timingVersion)
            return "format";
        let n = e.frames;
        if (!Array.isArray(n) || n.length < 2 || n.length > 2e4 || !n.every(i.isReplayFrame))
            return "frames";
        if (0 !== n[0].t || Math.abs(n[n.length - 1].t - t.timeMs / 1e3) > 1e-6)
            return "timing";
        for (let e = 1; e < n.length; e++)
            if (!(n[e].t >= n[e - 1].t))
                return "timing";
        return n.some(e => e.droneId !== t.droneId || e.droneSkin !== t.skinId) ? "appearance" : null
    }
    e.i(51858);
    let s = (e, t) => e.position.every( (e, n) => e === t.position[n]) && e.rotation.every( (e, n) => e === t.rotation[n]);
    async function c(e) {
        let {data: r, error: o} = await (0,
        t.createClient)().rpc("race_leaderboards", {
            p_time_attack_id: e.timeAttackId,
            p_course_revision: e.courseRevision,
            p_drone_id: e.droneId,
            p_offset: e.offset ?? 0
        }).abortSignal((0,
        n.withDeadline)(e.signal, 8e3));
        if (o)
            throw o;
        let i = (0,
        a.parseRaceBoards)("string" == typeof r ? JSON.parse(r) : r);
        if (!i || [...i.allTime.rows, ...i.daily.rows, i.allTime.own, i.daily.own].some(t => t && (t.timeAttackId !== e.timeAttackId || t.droneId !== e.droneId || t.courseRevision !== e.courseRevision)))
            throw Error("Invalid race leaderboard");
        return i
    }
    async function d(e) {
        let {data: r, error: o} = await (0,
        t.createClient)().rpc("race_board_nearby", {
            p_time_attack_id: e.timeAttackId,
            p_course_revision: e.courseRevision,
            p_drone_id: e.droneId
        }).abortSignal((0,
        n.withDeadline)(e.signal, 8e3));
        if (o)
            throw o;
        let i = (0,
        a.parseRaceNearby)("string" == typeof r ? JSON.parse(r) : r);
        if (!i || [...i.around, ...i.friends].some(t => t.timeAttackId !== e.timeAttackId || t.droneId !== e.droneId || t.courseRevision !== e.courseRevision))
            throw Error("Invalid race leaderboard");
        return i
    }
    async function u(e) {
        if (!e.replayId || !e.replayRevision || !e.appearance)
            throw Error("Recording unavailable");
        let t = new URLSearchParams({
            revision: e.replayRevision,
            replay: e.replayId
        })
          , n = await fetch(`/api/sim/races/${encodeURIComponent(e.attemptId)}/ghost?${t}`, {
            cache: "no-store",
            signal: AbortSignal.timeout(15e3)
        });
        if (!n.ok)
            throw Error("Recording unavailable. Please retry.");
        let r = await n.json()
          , o = (0,
        a.parseRaceAppearance)(r.metadata?.appearance);
        if (r.metadata?.id !== e.replayId || r.metadata?.revision !== e.replayRevision || r.metadata?.attempt_id !== e.attemptId || r.metadata?.time_attack_id !== e.timeAttackId || r.metadata?.time_ms !== e.timeMs || r.metadata?.drone_id !== e.droneId || r.metadata?.course_revision !== e.courseRevision || !o || o.droneId !== e.droneId || o.skinId !== e.appearance.skinId || o.skin.shell !== e.appearance.skin.shell || o.skin.accent !== e.appearance.skin.accent || o.skin.props !== e.appearance.skin.props || (o.skin.propMaterial ?? "normal") !== (e.appearance.skin.propMaterial ?? "normal"))
            throw Error("Recording no longer matches this result");
        let i = await m(r.url);
        if (l(i, {
            timeMs: e.timeMs,
            droneId: e.droneId,
            skinId: e.appearance.skinId
        }))
            throw Error("Invalid recording");
        return {
            entry: {
                ...e,
                appearance: o
            },
            frames: i.frames,
            duration: e.timeMs / 1e3
        }
    }
    async function m(e, t) {
        let n = await fetch(e, {
            signal: t ?? AbortSignal.timeout(3e4)
        });
        if (!n.ok)
            throw Error("Recording download failed. Please retry.");
        if (Number(n.headers.get("content-length")) > r.REPLAY_OBJECT_LIMIT)
            throw Error("Recording is too large");
        let a = n.body?.getReader();
        if (!a)
            throw Error("Recording unavailable");
        let o = []
          , i = 0;
        try {
            for (; ; ) {
                let e = await a.read();
                if (e.done)
                    break;
                if ((i += e.value.length) > r.REPLAY_OBJECT_LIMIT)
                    throw await a.cancel(),
                    Error("Recording is too large");
                o.push(e.value)
            }
        } finally {
            a.releaseLock()
        }
        let l = new Uint8Array(i)
          , s = 0;
        for (let e of o)
            l.set(e, s),
            s += e.length;
        return JSON.parse(new TextDecoder().decode(l))
    }
    e.s(["defaultRecordingProblem", 0, function(e, t) {
        let n = l(e, t);
        if (n)
            return n;
        let r = (e, n, r) => !!e && "object" == typeof e && Number.isInteger(e.steps) && e.steps === n && e.steps >= r && Array.isArray(e.frames) && e.frames.length >= 1 && e.frames.length <= 2e4 && e.frames.every(i.isReplayFrame) && e.frames.every(e => e.droneId === t.droneId && e.droneSkin === t.skinId);
        if (!e.launch || !e.tail || !r(e.launch, t.launchSteps, 1) || e.launch.steps > 14400 || e.launch.frames.length < 2)
            return "launch";
        if (!r(e.tail, t.tailSteps, 0) || e.tail.steps > 480)
            return "tail";
        let {launch: a, tail: c, frames: d} = e
          , u = e => e.every( (t, n) => 0 === n || t.t >= e[n - 1].t);
        if (0 !== a.frames[0].t || !u(a.frames))
            return "launch";
        let m = a.frames[a.frames.length - 1];
        if (Math.abs(m.t - a.steps * o.FLIGHT_TIMESTEP) > 1e-6 || !s(m, d[0]))
            return "launch";
        let f = d[d.length - 1].t;
        return !u(c.frames) || Math.abs(c.frames[0].t - f) > 1e-6 || !s(c.frames[0], d[d.length - 1]) || Math.abs(c.frames[c.frames.length - 1].t - (f + c.steps * o.FLIGHT_TIMESTEP)) > 1e-6 ? "tail" : null
    }
    , "fullLaunchTimeline", 0, function(e) {
        let {launch: t, tail: n, frames: r} = e;
        if (!t || !n || t.frames.length < 1 || r.length < 1 || n.frames.length < 1)
            return null;
        let a = t.steps * o.FLIGHT_TIMESTEP
          , i = e => e.slice(1).map(e => ({
            ...e,
            t: e.t + a
        }))
          , l = r[r.length - 1].t + a;
        return {
            frames: [...t.frames, ...i(r), ...i(n.frames)],
            firstGate: a,
            finish: l,
            end: l + n.steps * o.FLIGHT_TIMESTEP
        }
    }
    , "raceRecordingProblem", 0, l], 94891),
    e.s(["downloadRaceRecording", 0, m, "fetchRaceBoards", 0, c, "fetchRaceGhost", 0, u, "fetchRaceNearby", 0, d], 245433)
}
, 330374, e => {
    "use strict";
    var t = e.i(353198);
    function n(e) {
        if (!e || "object" != typeof e || 1 !== e.version || !t.DRONE_IDS.includes(e.droneId) || "string" != typeof e.skinId || !e.skin || "object" != typeof e.skin)
            return null;
        let n = e.skin;
        return n.id !== e.skinId || "string" != typeof n.name || n.name.length > 120 || ![n.shell, n.accent, n.props].every(e => "string" == typeof e && /^#[0-9a-f]{6}$/i.test(e)) || void 0 !== n.propMaterial && "normal" !== n.propMaterial && "translucent" !== n.propMaterial ? null : structuredClone(e)
    }
    function r(e) {
        if (!e || "object" != typeof e || "string" != typeof e.attemptId || "string" != typeof e.timeAttackId || !e.timeAttackId || !Number.isInteger(e.rank) || e.rank < 1 || !Number.isInteger(e.timeMs) || e.timeMs < 1 || !Number.isInteger(e.courseRevision) || e.courseRevision < 1 || !t.DRONE_IDS.includes(e.droneId) || null !== e.username && "string" != typeof e.username || "boolean" != typeof e.you)
            return null;
        let r = n(e.appearance)
          , a = "string" == typeof e.replayId && "string" == typeof e.replayRevision && r?.droneId === e.droneId;
        return {
            ...e,
            appearance: r,
            replayId: a ? e.replayId : null,
            replayRevision: a ? e.replayRevision : null,
            ...!a ? {
                ghostUnavailableReason: "Recording unavailable"
            } : {}
        }
    }
    e.s(["parseRaceAppearance", 0, n, "parseRaceBoards", 0, function(e) {
        let t = e => {
            if (!e || "object" != typeof e || !Array.isArray(e.rows) || !Number.isInteger(e.total) || e.total < 0 || !(null === e.nextOffset || Number.isInteger(e.nextOffset) && e.nextOffset >= 0))
                return null;
            let t = e.rows.map(r)
              , n = null == e.own ? null : r(e.own);
            return t.some(e => !e) || null != e.own && !n ? null : {
                rows: t,
                own: n,
                total: e.total,
                nextOffset: e.nextOffset
            }
        }
        ;
        if (!e || "object" != typeof e)
            return null;
        let n = t(e.allTime)
          , a = t(e.daily);
        return n && a ? {
            allTime: n,
            daily: a
        } : null
    }
    , "parseRaceNearby", 0, function(e) {
        if (!e || "object" != typeof e || !Array.isArray(e.around) || !Array.isArray(e.friends) || !Number.isInteger(e.total) || e.total < 0)
            return null;
        let t = e.around.map(r)
          , n = e.friends.map(r);
        return [...t, ...n].some(e => !e) ? null : {
            around: t,
            friends: n,
            total: e.total
        }
    }
    ])
}
, 90317, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        bindSnapshot: function() {
            return c
        },
        createAsyncLocalStorage: function() {
            return s
        },
        createSnapshot: function() {
            return d
        }
    };
    for (var a in r)
        Object.defineProperty(n, a, {
            enumerable: !0,
            get: r[a]
        });
    let o = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
        value: "E504",
        enumerable: !1,
        configurable: !0
    });
    class i {
        disable() {
            throw o
        }
        getStore() {}
        run() {
            throw o
        }
        exit() {
            throw o
        }
        enterWith() {
            throw o
        }
        static bind(e) {
            return e
        }
    }
    let l = "u" > typeof globalThis && globalThis.AsyncLocalStorage;
    function s() {
        return l ? new l : new i
    }
    function c(e) {
        return l ? l.bind(e) : i.bind(e)
    }
    function d() {
        return l ? l.snapshot() : function(e, ...t) {
            return e(...t)
        }
    }
}
, 242344, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "workAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = (0,
    e.r(90317).createAsyncLocalStorage)()
}
, 563599, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "workAsyncStorage", {
        enumerable: !0,
        get: function() {
            return r.workAsyncStorageInstance
        }
    });
    let r = e.r(242344)
}
, 309885, (e, t, n) => {
    "use strict";
    function r(e) {
        return e.split("/").map(e => encodeURIComponent(e)).join("/")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return r
        }
    })
}
, 667585, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let r = e.r(132061);
    function a({reason: e, children: t}) {
        if ("u" < typeof window)
            throw Object.defineProperty(new r.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: !1,
                configurable: !0
            });
        return t
    }
}
, 652157, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let r = e.r(843476)
      , a = e.r(174080)
      , o = e.r(563599)
      , i = e.r(309885)
      , l = e.r(543369);
    function s({moduleIds: e}) {
        if ("u" > typeof window)
            return null;
        let t = o.workAsyncStorage.getStore();
        if (void 0 === t)
            return null;
        let n = [];
        if (t.reactLoadableManifest && e) {
            let r = t.reactLoadableManifest;
            for (let t of e) {
                if (!r[t])
                    continue;
                let e = r[t].files;
                n.push(...e)
            }
        }
        if (0 === n.length)
            return null;
        let c = (0,
        l.getAssetTokenQuery)();
        return (0,
        r.jsx)(r.Fragment, {
            children: n.map(e => {
                let n = `${t.assetPrefix}/_next/${(0,
                i.encodeURIPath)(e)}${c}`;
                return e.endsWith(".css") ? (0,
                r.jsx)("link", {
                    precedence: "dynamic",
                    href: n,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce
                }, e) : ((0,
                a.preload)(n, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce
                }),
                null)
            }
            )
        })
    }
}
, 869093, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return c
        }
    });
    let r = e.r(843476)
      , a = e.r(271645)
      , o = e.r(667585)
      , i = e.r(652157);
    function l(e) {
        return {
            default: e && "default" in e ? e.default : e
        }
    }
    let s = {
        loader: () => Promise.resolve(l( () => null)),
        loading: null,
        ssr: !0
    }
      , c = function(e) {
        let t = {
            ...s,
            ...e
        }
          , n = (0,
        a.lazy)( () => t.loader().then(l))
          , c = t.loading;
        function d(e) {
            let l = c ? (0,
            r.jsx)(c, {
                isLoading: !0,
                pastDelay: !0,
                error: null
            }) : null
              , s = !t.ssr || !!t.loading
              , d = s ? a.Suspense : a.Fragment
              , u = t.ssr ? (0,
            r.jsxs)(r.Fragment, {
                children: ["u" < typeof window ? (0,
                r.jsx)(i.PreloadChunks, {
                    moduleIds: t.modules
                }) : null, (0,
                r.jsx)(n, {
                    ...e
                })]
            }) : (0,
            r.jsx)(o.BailoutToCSR, {
                reason: "next/dynamic",
                children: (0,
                r.jsx)(n, {
                    ...e
                })
            });
            return (0,
            r.jsx)(d, {
                ...s ? {
                    fallback: l
                } : {},
                children: u
            })
        }
        return d.displayName = "LoadableComponent",
        d
    }
}
, 770703, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let r = e.r(555682)._(e.r(869093));
    function a(e, t) {
        let n = {};
        "function" == typeof e && (n.loader = e);
        let a = {
            ...n,
            ...t
        };
        return (0,
        r.default)({
            ...a,
            modules: a.loadableGenerated?.modules
        })
    }
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }),
    Object.assign(n.default, n),
    t.exports = n.default)
}
]);
