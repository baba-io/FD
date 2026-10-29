(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 132276, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(271645)
      , a = e.i(645439)
      , n = e.i(631654)
      , i = e.i(894969)
      , r = e.i(389110)
      , o = e.i(522016)
      , l = e.i(770703)
      , c = e.i(657688)
      , d = e.i(466465)
      , u = e.i(13784)
      , m = e.i(157430)
      , p = e.i(583769)
      , h = e.i(403837)
      , f = e.i(579832)
      , g = e.i(584042)
      , x = e.i(752834)
      , S = e.i(106258);
    function b() {
        return (0,
        s.useEffect)( () => {
            let e = (0,
            f.getDroneAudio)();
            if (!e)
                return;
            let t = S.useSimStore.subscribe( (t, s) => {
                t.phase !== s.phase && ((0,
                g.playCues)(e, (0,
                g.phaseCues)(t.phase, s.phase)),
                (0,
                g.warmsRaceBuffers)(t.phase) && (0,
                g.warmBuffers)(e.context, g.RACE_BUFFERS))
            }
            )
              , s = () => (0,
            g.interfaceActive)(S.useSimStore.getState().phase, x.useMapEditor.getState().active)
              , a = e => (0,
            g.controlFor)(e.target instanceof Element ? e.target : null)
              , n = null
              , i = t => {
                if ("mouse" !== t.pointerType)
                    return;
                let i = a(t);
                i !== n && (n = i,
                i && s() && (0,
                g.hoverSounds)(i) && e.play(g.UI_CUES.hover))
            }
              , r = t => {
                let n = a(t)
                  , i = n && s() ? (0,
                g.pressSound)(n) : null;
                i && e.play(g.UI_CUES[i])
            }
              , o = t => {
                "Escape" === t.key && !t.repeat && s() && e.play(g.UI_CUES.back)
            }
              , l = () => {
                s() && e.play(g.UI_CUES.error)
            }
            ;
            return document.addEventListener("pointerover", i),
            document.addEventListener("click", r),
            document.addEventListener("keydown", o),
            document.addEventListener("invalid", l, !0),
            () => {
                t(),
                document.removeEventListener("pointerover", i),
                document.removeEventListener("click", r),
                document.removeEventListener("keydown", o),
                document.removeEventListener("invalid", l, !0)
            }
        }
        , []),
        null
    }
    var v = e.i(664311)
      , y = e.i(26186);
    let k = e => null == e ? "n/a" : e.toFixed(2)
      , w = (e=performance.now()) => {
        let t = y.roomControl.session;
        if (!t)
            return null;
        let {holds: s, heldTicks: a, repairs: n} = t.stats
          , i = y.roomControl.connection?.remote?.feed
          , r = t.current;
        return {
            holds: s,
            heldTicks: a,
            repairs: n,
            clockRate: t.clockRate,
            targetLead: t.targetLead,
            offline: t.offline,
            tick: t.room.tick,
            position: [r.x, r.y, r.z],
            peers: i?.peers.map(e => ({
                id: e.id,
                frames: e.frames.slice(-8).map(e => ({
                    t: e.t,
                    p: e.p
                }))
            })) ?? [],
            playbackDelay: i?.clock?.delay ?? null,
            playbackTime: i?.clock ? i.clock.time(e) : null
        }
    }
    ;
    function j() {
        let[e] = (0,
        s.useState)(v.perfModeRequested)
          , [a,n] = (0,
        s.useState)(null)
          , [i,r] = (0,
        s.useState)(null);
        if ((0,
        s.useEffect)( () => {
            if (!e)
                return;
            window.__simNet = w;
            let t = setInterval( () => {
                n(window.__simFrame?.snapshot() ?? null),
                r(w())
            }
            , 500);
            return () => {
                clearInterval(t),
                window.__simNet === w && delete window.__simNet
            }
        }
        , [e]),
        !e)
            return null;
        let o = a ? Object.entries(a.gpu).map( ([e,t]) => `${e} ${k(t)}`).join(" · ") : "";
        return (0,
        t.jsx)("pre", {
            "aria-label": "Frame performance",
            style: {
                position: "fixed",
                right: 8,
                bottom: 8,
                zIndex: 1e4,
                margin: 0,
                padding: "6px 8px",
                pointerEvents: "none",
                font: "11px/1.4 ui-monospace, monospace",
                color: "#e8f0e8",
                background: "rgba(10, 14, 16, 0.78)"
            },
            children: a ? [`frame p50 ${k(a.frameP50)}  p95 ${k(a.frameP95)}  p99 ${k(a.frameP99)} ms \xb7 ${a.longFrames} over 34 ms, ${a.stalls} over 100 ms`, `cpu p50 ${k(a.cpuP50)}  p95 ${k(a.cpuP95)} ms`, ...null === a.gpuTotal ? [] : [`gpu ${k(a.gpuTotal)} ms (${o})`], `${a.calls} calls \xb7 ${a.triangles} triangles \xb7 ${a.width}\xd7${a.height} @ ${a.pixelRatio.toFixed(2)}x`, ...i && !i.offline ? [`net lead ${i.targetLead} \xb7 clock \xd7${i.clockRate.toFixed(3)} \xb7 ${i.holds} holds (${i.heldTicks} ticks) \xb7 ${i.repairs} repairs`] : []].join("\n") : "Waiting for frames"
        })
    }
    var N = e.i(109242)
      , E = e.i(49925)
      , C = e.i(920755)
      , _ = e.i(157248)
      , L = e.i(710534)
      , R = e.i(726422)
      , M = e.i(424419)
      , P = e.i(28276);
    function I(e) {
        return !!(e && e.app_metadata?.banned !== !0 && !1 === e.is_anonymous && e.email && e.email_confirmed_at)
    }
    var D = e.i(871737)
      , A = e.i(771607);
    async function O(e) {
        (0,
        R.discardLegacyLessonCompletionStorage)();
        try {
            let t = await (0,
            R.fetchPlayerProfile)();
            if (!t)
                throw Error("Your profile could not be loaded. Please try again.");
            if (!e())
                return;
            S.useSimStore.getState().applyPlayerProfile({
                playerReady: !0,
                droneWheelOnboardingCompleted: t.droneWheelOnboardingCompleted,
                controlsOnboardingCompleted: t.controlsOnboardingCompleted,
                xp: t.xp,
                xpToday: t.xpToday,
                droneGifts: t.droneGifts,
                totalFlightTimeMs: t.flightTimeMs,
                completedLessonIds: t.completedLessonIds,
                completedCourseIds: t.completedCourseIds,
                timeAttackPrs: t.timeAttackPrs,
                isAnonymous: t.isAnonymous,
                accountEmail: t.email,
                accountProviders: t.providers,
                isAdmin: t.isAdmin,
                isMod: t.isMod,
                username: t.username,
                usernameChangedAt: t.usernameChangedAt
            })
        } catch (e) {
            throw console.error("[sim] player hydrate failed", e),
            e
        }
    }
    class T {
        lastAt;
        lastInput;
        active = !1;
        pending = 0;
        constructor(e) {
            this.lastAt = e,
            this.lastInput = e
        }
        sample(e, t, s=!1) {
            this.active && (this.pending += Math.max(0, Math.min(e, this.lastInput + 6e4) - this.lastAt)),
            (s || t && !this.active) && (this.lastInput = e),
            this.lastAt = e,
            this.active = t
        }
        take() {
            let e = Math.floor(this.pending);
            return this.pending -= e,
            e
        }
    }
    var F = e.i(263783)
      , z = e.i(962849);
    e.i(573798);
    var $ = e.i(568204)
      , B = e.i(498475)
      , W = e.i(244144)
      , G = e.i(516238)
      , U = e.i(720996)
      , q = e.i(288461);
    let H = ["I’ve already tested the ground. It works.", "Did you know there is a full Replay Editor in the pause menu?", "Flying low to the ground is a good way to earn big points!", "Something feels off? Re-calibrating your radio takes a few seconds.", "Join the community on Discord! Link in the main menu.", "You can toggle on and off any HUD elements in the Settings menu."]
      , J = (0,
    l.default)( () => e.A(914495), {
        loadableGenerated: {
            modules: [88831]
        },
        ssr: !1,
        loading: () => null
    });
    function K({error: e, onRetry: a, progress: n, joining: i=!1, reason: r=null, onOffline: l, onBack: p, onReload: h}) {
        let[f,g] = (0,
        s.useState)(H[0]);
        (0,
        s.useEffect)( () => {
            let e = requestAnimationFrame( () => g(H[Math.floor(Math.random() * H.length)]));
            return () => cancelAnimationFrame(e)
        }
        , []);
        let x = !!n && !e && n.total > 0 && n.loaded < n.total
          , S = x ? Math.min(100, n.loaded / n.total * 100) : 0;
        return (0,
        t.jsxs)("div", {
            className: "sim-boot fdk-screen",
            role: "status",
            "aria-live": "polite",
            children: [(0,
            t.jsx)("div", {
                className: "sim-boot__brand",
                children: (0,
                t.jsxs)("div", {
                    className: m.default.lockup,
                    children: [(0,
                    t.jsx)(d.BrandLogo, {
                        on: "light"
                    }), !i && (0,
                    t.jsx)(u.EarlyAccessBadge, {})]
                })
            }), (0,
            t.jsxs)("div", {
                className: "sim-boot__copy",
                children: [e && !i ? (0,
                t.jsx)($.Badge, {
                    tone: "acid",
                    children: "Tiny technical detour"
                }) : null, (0,
                t.jsx)("h1", {
                    children: i ? e ? "Couldn't join" : "Joining." : e ? (0,
                    t.jsxs)(t.Fragment, {
                        children: ["Oops.", (0,
                        t.jsx)("br", {}), "False start."]
                    }) : (0,
                    t.jsx)(t.Fragment, {
                        children: "Stand by."
                    })
                }), e && i ? (0,
                t.jsxs)(t.Fragment, {
                    children: [r && (0,
                    t.jsx)("p", {
                        className: "sim-boot__reason",
                        children: r.text
                    }), (0,
                    t.jsxs)("div", {
                        className: "sim-boot__choices",
                        children: [r?.reload ? (0,
                        t.jsx)(B.Button, {
                            tone: "primary",
                            onClick: h,
                            children: "Reload"
                        }) : (0,
                        t.jsx)(B.Button, {
                            tone: "primary",
                            onClick: a,
                            children: "Retry"
                        }), (0,
                        t.jsx)(B.Button, {
                            onClick: l,
                            children: "Play offline"
                        }), (0,
                        t.jsx)(B.Button, {
                            onClick: p,
                            children: "Back to menu"
                        })]
                    })]
                }) : e ? (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)("p", {
                        children: "We couldn’t load the playground. Check your connection and give it another go."
                    }), a ? (0,
                    t.jsx)(B.Button, {
                        tone: "primary",
                        sound: "confirm",
                        icon: (0,
                        t.jsx)(W.Icon, {
                            name: "rotate"
                        }),
                        onClick: a,
                        children: "Try again"
                    }) : null]
                }) : (0,
                t.jsxs)(t.Fragment, {
                    children: [!i && (0,
                    t.jsx)("p", {
                        className: "sr-only",
                        children: "Fly a 5-inch freestyle FPV quad in your browser. Acro-mode physics with Betaflight rate curves, full radio support, and stick calibration. Free, no download. Sign in with email to fly."
                    }), (0,
                    t.jsx)("div", {
                        className: "sim-boot__progress",
                        role: "progressbar",
                        "aria-label": i ? "Joining." : "Loading simulator",
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": x ? Math.round(S) : void 0,
                        children: x ? (0,
                        t.jsx)("div", {
                            className: "sim-boot__fill",
                            style: {
                                width: `${S}%`
                            }
                        }) : (0,
                        t.jsx)("div", {
                            className: "sim-boot__fill sim-boot__fill--waiting"
                        })
                    }), !i && (0,
                    t.jsx)("span", {
                        className: "sim-boot__caption",
                        children: x && `${Math.round(S)}% \xb7 ${n.label}`
                    }), i && (0,
                    t.jsx)("div", {
                        className: "sim-boot__choices",
                        children: (0,
                        t.jsx)(B.Button, {
                            onClick: p,
                            children: "Back to menu"
                        })
                    })]
                })]
            }), (0,
            t.jsxs)("div", {
                className: "sim-boot__art",
                "aria-hidden": "true",
                children: [!i && (0,
                t.jsx)(G.SpeechBubble, {
                    className: "sim-boot__bubble",
                    children: e ? "That one wasn’t me. Probably." : f
                }), (0,
                t.jsx)(c.default, {
                    src: "/sim/characters/Dummy-PalmUp.webp",
                    width: 1086,
                    height: 1448,
                    alt: "",
                    priority: !0
                })]
            }), !i && (0,
            t.jsxs)(o.default, {
                className: "sim-boot__back",
                href: "/",
                children: [(0,
                t.jsx)(W.Icon, {
                    name: "arrow-left",
                    size: 17
                }), " Back to the website"]
            })]
        })
    }
    function V() {
        return (0,
        t.jsx)(Y, {
            kind: "desktop"
        })
    }
    function X() {
        return (0,
        t.jsx)(Y, {
            kind: "webgl"
        })
    }
    function Y({kind: e}) {
        let s = "desktop" === e;
        return (0,
        t.jsxs)("div", {
            className: "sim-boot sim-boot--notice fdk-screen",
            children: [(0,
            t.jsx)("div", {
                className: "sim-boot__brand",
                children: (0,
                t.jsxs)("div", {
                    className: m.default.lockup,
                    children: [(0,
                    t.jsx)(d.BrandLogo, {
                        on: "light"
                    }), (0,
                    t.jsx)(u.EarlyAccessBadge, {})]
                })
            }), (0,
            t.jsxs)("div", {
                className: "sim-boot__copy",
                children: [(0,
                t.jsx)($.Badge, {
                    tone: "acid",
                    icon: (0,
                    t.jsx)(W.Icon, {
                        name: "monitor",
                        size: 16
                    }),
                    children: s ? "A little more screen, please" : "One quick tune-up"
                }), (0,
                t.jsx)("h1", {
                    children: s ? (0,
                    t.jsxs)(t.Fragment, {
                        children: ["Big screen.", (0,
                        t.jsx)("br", {}), (0,
                        t.jsx)("em", {
                            children: "Bigger sends."
                        })]
                    }) : (0,
                    t.jsxs)(t.Fragment, {
                        children: ["Let’s get", (0,
                        t.jsx)("br", {}), (0,
                        t.jsx)("em", {
                            children: "you flying."
                        })]
                    })
                }), (0,
                t.jsx)("p", {
                    children: s ? "Bring this playground to a desktop browser. Plug in a radio or gamepad, or use your keyboard. Touch controls aren’t available." : "Your browser needs hardware-accelerated WebGL 2 to run the simulator. Try enabling hardware acceleration or opening a supported desktop browser."
                }), s && (0,
                t.jsxs)("div", {
                    className: "sim-boot__device",
                    children: [(0,
                    t.jsx)(W.Icon, {
                        name: "gamepad",
                        size: 22
                    }), " Desktop + controller = good times."]
                }), (0,
                t.jsxs)(o.default, {
                    className: "fdk-btn fdk-btn--primary fdk-btn--md sim-boot__action",
                    href: "/",
                    children: [(0,
                    t.jsx)("span", {
                        className: "fdk-btn-label",
                        children: "Explore Flight Division"
                    }), (0,
                    t.jsx)("span", {
                        className: "fdk-btn-icon",
                        "aria-hidden": "true",
                        children: (0,
                        t.jsx)(W.Icon, {
                            name: "arrow-left"
                        })
                    })]
                })]
            }), (0,
            t.jsxs)("div", {
                className: "sim-boot__art",
                "aria-hidden": "true",
                children: [(0,
                t.jsx)(G.SpeechBubble, {
                    className: "sim-boot__bubble",
                    children: "I’ll keep your spot warm."
                }), (0,
                t.jsx)(c.default, {
                    src: "/sim/characters/Dummy-CrossedArmsLean.webp",
                    width: 1086,
                    height: 1448,
                    alt: "",
                    priority: !0
                })]
            })]
        })
    }
    let Q = null;
    function Z() {
        if (null === Q)
            try {
                Q = !!document.createElement("canvas").getContext("webgl2")
            } catch {
                Q = !1
            }
        return Q
    }
    function ee() {
        return window.matchMedia("(pointer: coarse) and (max-width: 900px)").matches
    }
    function et(e) {
        let t = window.matchMedia("(pointer: coarse) and (max-width: 900px)");
        return t.addEventListener("change", e),
        () => t.removeEventListener("change", e)
    }
    let es = () => () => {}
    ;
    function ea() {
        let e = (0,
        q.useMapJoin)(e => e.status)
          , a = (0,
        q.useMapJoin)(e => e.generation)
          , n = (0,
        q.useMapJoin)(e => e.failure)
          , i = (0,
        q.useMapJoin)(e => e.code)
          , r = (0,
        q.useMapJoin)(e => e.kind)
          , o = "joining" === e || "failed" === e;
        return (0,
        s.useEffect)( () => {
            if ("joining" === e)
                return (0,
                q.watchMapJoinDeadline)(a)
        }
        , [e, a]),
        (0,
        s.useEffect)( () => {
            if (!o)
                return;
            let e = e => {
                "Escape" !== e.code || e.repeat || (e.preventDefault(),
                e.stopImmediatePropagation(),
                S.useSimStore.getState().returnToMenu())
            }
            ;
            return window.addEventListener("keydown", e, {
                capture: !0
            }),
            () => window.removeEventListener("keydown", e, {
                capture: !0
            })
        }
        , [o]),
        o ? (0,
        t.jsx)("div", {
            className: "absolute inset-0 z-50",
            children: (0,
            t.jsx)(K, {
                joining: !0,
                error: "failed" === e ? "Couldn't join" : null,
                reason: "failed" === e ? (0,
                q.joinFailureReason)(n, i, r) : null,
                onRetry: () => (0,
                q.retryMapJoin)(),
                onOffline: () => (0,
                q.retryMapJoin)(!0),
                onBack: () => S.useSimStore.getState().returnToMenu(),
                onReload: () => window.location.reload()
            })
        }) : null
    }
    function en() {
        let e = (0,
        q.useMapJoin)(e => "joining" === e.status || "failed" === e.status);
        (0,
        a.useInventorySync)(),
        (0,
        n.useNotificationSync)();
        let o = (0,
        i.useInventory)(e => e.status)
          , [l,c] = (0,
        s.useState)(0)
          , [d,u] = (0,
        s.useState)(!1)
          , m = (0,
        s.useCallback)( () => {
            c(e => e + 1);
            let e = !1;
            return () => {
                e || (e = !0,
                c(e => e - 1))
            }
        }
        , [])
          , [p,f] = (0,
        s.useState)(!1)
          , g = (0,
        s.useCallback)( () => f(!0), []);
        (0,
        s.useEffect)( () => {
            if (!p || l || "ready" !== o)
                return;
            let e = requestAnimationFrame( () => u(!0));
            return () => cancelAnimationFrame(e)
        }
        , [p, l, o]),
        (0,
        s.useEffect)( () => {
            let e = (0,
            C.createClient)()
              , t = new T(performance.now())
              , s = (e=!1) => t.sample(performance.now(), S.useSimStore.getState().playerReady && x.useMapEditor.getState().active && "visible" === document.visibilityState && document.hasFocus(), e)
              , a = () => {
                s();
                let a = t.take();
                a > 0 && e.rpc("add_editing_time", {
                    p_delta_ms: a
                }).then( () => {}
                , () => {}
                )
            }
              , n = () => s(!0)
              , i = () => {
                s(),
                a()
            }
              , r = x.useMapEditor.subscribe( (e, t) => {
                e.active !== t.active && i()
            }
            )
              , o = S.useSimStore.subscribe( (e, t) => {
                e.playerReady !== t.playerReady && i()
            }
            )
              , l = ["pointerdown", "pointermove", "keydown", "wheel"];
            l.forEach(e => window.addEventListener(e, n, {
                capture: !0,
                passive: !0
            })),
            window.addEventListener("focus", i),
            window.addEventListener("blur", i),
            window.addEventListener("pagehide", a),
            document.addEventListener("visibilitychange", i),
            s();
            let c = window.setInterval(a, 3e4);
            return () => {
                a(),
                window.clearInterval(c),
                r(),
                o(),
                l.forEach(e => window.removeEventListener(e, n, {
                    capture: !0
                })),
                window.removeEventListener("focus", i),
                window.removeEventListener("blur", i),
                window.removeEventListener("pagehide", a),
                document.removeEventListener("visibilitychange", i)
            }
        }
        , []),
        (0,
        s.useEffect)( () => {
            let e = (0,
            C.createClient)()
              , t = Intl.DateTimeFormat().resolvedOptions().timeZone || null
              , s = 0
              , a = () => {
                if ("visible" !== document.visibilityState || !S.useSimStore.getState().playerReady)
                    return;
                let a = e.rpc("sim_heartbeat", {
                    p_time_zone: t
                }).then( ({data: e}) => (i.useInventory.getState().observeRevision(e?.inventory),
                e?.notifications ?? null), () => null);
                F.useNotifications.getState().refreshSummary(a);
                let n = Math.floor(Date.now() / 36e5);
                s !== n && (s = n,
                fetch("/api/sim/country", {
                    method: "POST"
                }).then(e => {
                    e.ok || (s = 0)
                }
                , () => {
                    s = 0
                }
                ))
            }
            ;
            a();
            let n = window.setInterval(a, 3e4);
            document.addEventListener("visibilitychange", a);
            let r = S.useSimStore.subscribe( (e, t) => {
                e.playerReady && !t.playerReady && a()
            }
            );
            return () => {
                window.clearInterval(n),
                document.removeEventListener("visibilitychange", a),
                r()
            }
        }
        , []),
        (0,
        s.useEffect)( () => {
            let e = ""
              , t = () => {
                let t = S.useSimStore.getState();
                if (!t.playerReady)
                    return;
                let s = JSON.stringify({
                    id: z.sessionFacts.id,
                    facts: z.sessionFacts.facts(t.settings.graphics.quality ?? null)
                });
                s !== e && (e = s,
                fetch("/api/sim/session", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: s,
                    keepalive: !0
                }).then(t => {
                    t.ok || e !== s || (e = "")
                }
                , () => {
                    e === s && (e = "")
                }
                ))
            }
              , s = window.setTimeout(t, 6e4)
              , a = window.setInterval(t, 3e5)
              , n = () => {
                "hidden" === document.visibilityState && t()
            }
            ;
            return document.addEventListener("visibilitychange", n),
            window.addEventListener("pagehide", t),
            () => {
                window.clearTimeout(s),
                window.clearInterval(a),
                document.removeEventListener("visibilitychange", n),
                window.removeEventListener("pagehide", t)
            }
        }
        , []);
        let v = (0,
        S.useSimStore)(e => e.settings.accessibility.motion);
        return (0,
        s.useEffect)( () => ((0,
        U.applyMotionAttribute)(v),
        () => {
            delete document.documentElement.dataset.motion
        }
        ), [v]),
        (0,
        t.jsxs)(t.Fragment, {
            children: [(p || "ready" === o) && (0,
            t.jsx)(J, {
                onReady: g
            }), (0,
            t.jsx)(j, {}), (0,
            t.jsx)(b, {}), p && (0,
            t.jsx)(r.MenuReadiness, {
                value: m,
                children: (0,
                t.jsx)(r.MenuVisibility, {
                    value: d && !e,
                    children: (0,
                    t.jsx)("div", {
                        className: "pointer-events-none absolute inset-0",
                        inert: !d || e,
                        style: {
                            opacity: d && !e ? 1 : 0
                        },
                        children: !e && (0,
                        t.jsx)(h.SimOverlay, {})
                    })
                })
            }), (0,
            t.jsx)(ea, {}), !e && !d && (0,
            t.jsx)("div", {
                className: "absolute inset-0 z-50",
                children: (0,
                t.jsx)(K, {
                    error: "error" === o ? "Couldn’t load your collection." : null,
                    onRetry: "error" === o ? () => {
                        i.useInventory.getState().refresh()
                    }
                    : void 0
                })
            })]
        })
    }
    e.s(["DeviceNotice", 0, Y, "MapJoinCover", 0, ea, "SimApp", 0, function() {
        let e = (0,
        s.useSyncExternalStore)(es, Z, () => null)
          , a = (0,
        s.useSyncExternalStore)(et, ee, () => null)
          , n = function() {
            let e, t, a;
            e = (0,
            S.useSimStore)(e => e.playerAccountId),
            t = (0,
            S.useSimStore)(e => e.playerReady),
            a = (0,
            i.useInventory)(e => "ready" === e.status),
            (0,
            s.useEffect)( () => {
                let s;
                if (!e || !t || !a)
                    return;
                let n = new AbortController
                  , r = ""
                  , o = ""
                  , l = !1
                  , c = () => {
                    let e = S.useSimStore.getState();
                    return (0,
                    D.localPilotLoadout)(e.settings.drone, (0,
                    A.confirmedXp)(e), e.droneGifts)
                }
                  , d = async () => {
                    if (n.signal.aborted || l || S.useSimStore.getState().playerAccountId !== e)
                        return;
                    let t = c()
                      , s = JSON.stringify(t);
                    if (s === r || s === o)
                        return;
                    l = !0;
                    let a = !1;
                    try {
                        let {error: i} = await (0,
                        C.createClient)().rpc("set_pilot_loadout", {
                            p_account_id: e,
                            p_loadout: t
                        }).abortSignal(AbortSignal.any([n.signal, AbortSignal.timeout(8e3)]));
                        if (i)
                            throw i;
                        r = s,
                        a = !0
                    } catch (t) {
                        let e;
                        "string" == typeof (e = t?.code) && ("P0001" === e || "42501" === e || /^2[23]/.test(e)) && (o = s)
                    } finally {
                        l = !1,
                        a && !n.signal.aborted && JSON.stringify(c()) !== r && d()
                    }
                }
                  , u = () => {
                    clearTimeout(s),
                    s = setTimeout(d, 250)
                }
                  , m = S.useSimStore.subscribe( (e, t) => {
                    (e.settings.drone !== t.settings.drone || (0,
                    A.confirmedXp)(e) !== (0,
                    A.confirmedXp)(t) || e.droneGifts !== t.droneGifts) && u()
                }
                )
                  , p = i.useInventory.subscribe( (e, t) => {
                    e.items !== t.items && u()
                }
                );
                d();
                let h = window.setInterval(d, 15e3);
                return window.addEventListener("online", d),
                () => {
                    n.abort(),
                    clearTimeout(s),
                    window.clearInterval(h),
                    window.removeEventListener("online", d),
                    m(),
                    p()
                }
            }
            , [e, t, a]);
            let[n,r] = (0,
            s.useState)("loading")
              , [o,l] = (0,
            s.useState)(null)
              , [c,d] = (0,
            s.useState)(0)
              , [u,m] = (0,
            s.useState)(null)
              , p = (0,
            s.useCallback)( () => {
                l(null),
                m(null),
                r("loading"),
                d(e => e + 1)
            }
            , []);
            return (0,
            s.useEffect)( () => {
                let e = !1
                  , t = 0
                  , s = null
                  , a = (0,
                C.createClient)();
                !async function() {
                    (0,
                    E.resetGridworksDraft)(),
                    S.useSimStore.getState().applyPlayerProfile({
                        playerReady: !1
                    }),
                    r("loading"),
                    m(null);
                    let n = t;
                    try {
                        let {data: {user: i}, error: o} = await a.auth.getUser();
                        if (o)
                            throw o;
                        if (!I(i))
                            return void window.location.reload();
                        if (e || n !== t)
                            return;
                        s = i.id,
                        S.useSimStore.getState().applyPlayerProfile({
                            playerAccountId: s
                        });
                        let l = () => !e && n === t
                          , c = (0,
                        _.fetchAndHydrateCurriculum)({
                            includeMenuReplay: !1,
                            isCurrent: l
                        })
                          , d = O(l)
                          , [u] = await Promise.all([c, d, (0,
                        E.loadGridworksLayout)(l)]);
                        if (e || n !== t || !l())
                            return;
                        (0,
                        L.validateLessons)(u.lessons),
                        (0,
                        L.validateCourses)(u.courses, u.lessons),
                        r("ready"),
                        S.useSimStore.getState().isAdmin && (0,
                        _.fetchMenuShowcaseReplay)().then(e => {
                            e && l() && ((0,
                            P.patchReplay)(e),
                            (0,
                            P.setMenuReplayId)(e.id))
                        }
                        ).catch( () => {}
                        ),
                        (0,
                        M.preloadPlayerReplayLibrary)(),
                        (0,
                        N.preloadPersonalMapLibrary)(s)
                    } catch (s) {
                        if (console.error("[sim] boot failed", s),
                        e || n !== t)
                            return;
                        (0,
                        E.resetGridworksDraft)(),
                        S.useSimStore.getState().applyPlayerProfile({
                            playerReady: !1,
                            isAnonymous: !0,
                            isAdmin: !1,
                            isMod: !1
                        }),
                        l(s instanceof Error ? s.message : "Failed to load."),
                        r("error")
                    }
                }();
                let {data: {subscription: n}} = a.auth.onAuthStateChange( (a, n) => {
                    if (!e) {
                        if (!I(n?.user)) {
                            S.useSimStore.getState().exitTimeAttack(),
                            S.useSimStore.getState().applyPlayerProfile({
                                playerAccountId: null
                            }),
                            (0,
                            E.resetGridworksDraft)(),
                            (0,
                            N.resetPersonalMapLibrary)(),
                            (0,
                            M.resetPlayerReplayLibrary)(),
                            t++,
                            r("loading"),
                            S.useSimStore.getState().applyPlayerProfile({
                                playerReady: !1,
                                isAdmin: !1,
                                isMod: !1
                            }),
                            window.location.reload();
                            return
                        }
                        s && n?.user.id !== s && (S.useSimStore.getState().exitTimeAttack(),
                        S.useSimStore.getState().applyPlayerProfile({
                            playerAccountId: null
                        }),
                        (0,
                        E.resetGridworksDraft)(),
                        (0,
                        N.resetPersonalMapLibrary)(),
                        (0,
                        M.resetPlayerReplayLibrary)(),
                        t++,
                        r("loading"),
                        window.location.reload())
                    }
                }
                )
                  , i = window.setInterval( () => {
                    "visible" === document.visibilityState && !1 !== navigator.onLine && a.auth.getUser().then( ({data: {user: t}, error: s}) => {
                        e || s || I(t) || window.location.reload(),
                        e || s?.status !== 401 || window.location.reload()
                    }
                    )
                }
                , 6e4);
                return () => {
                    window.clearInterval(i),
                    e = !0,
                    (0,
                    N.resetPersonalMapLibrary)(),
                    (0,
                    M.resetPlayerReplayLibrary)(),
                    n.unsubscribe()
                }
            }
            , [c]),
            {
                status: n,
                error: o,
                retry: p,
                progress: u
            }
        }()
          , r = null === e || null === a || !1 === a && ("loading" === n.status || "error" === n.status);
        return (0,
        t.jsxs)("div", {
            className: "relative h-full w-full overflow-hidden bg-(--fdk-ink) text-(--fdk-chalk)",
            children: [r ? (0,
            t.jsx)(K, {
                error: "error" === n.status ? n.error : null,
                onRetry: "error" === n.status ? n.retry : void 0,
                progress: "loading" === n.status ? n.progress : null
            }) : null, !0 === a ? (0,
            t.jsx)(V, {}) : null, !1 === a && !1 === e ? (0,
            t.jsx)(X, {}) : null, !1 === a && !0 === e && "ready" === n.status ? (0,
            t.jsx)(p.SharedMapLaunch, {
                children: (0,
                t.jsx)(en, {})
            }) : null]
        })
    }
    , "SimLoading", 0, K], 132276)
}
, 492926, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(770703)
      , a = e.i(271645)
      , n = e.i(353198)
      , i = e.i(235199)
      , r = e.i(353937)
      , o = e.i(106258)
      , l = e.i(771607)
      , c = e.i(814022)
      , d = e.i(894969)
      , u = e.i(293190);
    e.i(573798);
    var m = e.i(244144);
    e.i(671112);
    let p = (0,
    s.default)( () => e.A(203402), {
        loadableGenerated: {
            modules: [7113]
        },
        ssr: !1,
        loading: () => (0,
        t.jsx)("span", {
            className: "fd-wheel-loading",
            children: "Loading drone…"
        })
    })
      , h = (e, t) => [300 + Math.sin(t) * e, 300 - Math.cos(t) * e];
    e.s(["DroneWheel", 0, function() {
        let e = (0,
        o.useSimStore)(e => e.settings.drone)
          , s = (0,
        o.useSimStore)(e => e.settings.bindings.keyboard.droneWheel)
          , f = (0,
        o.useSimStore)(l.confirmedXp)
          , g = (0,
        o.useSimStore)(e => e.droneGifts)
          , x = (0,
        o.useSimStore)(e => e.droneWheelTutorial)
          , S = (0,
        o.useSimStore)(e => !!e.activeTimeAttackId);
        (0,
        d.useInventory)(e => e.items);
        let b = (0,
        o.useSimStore)(c.flownDrone)
          , [v,y] = (0,
        a.useState)(b)
          , [k,w] = (0,
        a.useState)("")
          , j = (0,
        a.useRef)(null)
          , N = (0,
        a.useRef)(null)
          , E = (0,
        n.isDroneUnlocked)(v, f, g)
          , C = n.DRONES[v]
          , _ = (0,
        r.equippedDroneSkin)(e.skins, v)
          , L = k || (E && S && v !== b ? "Changing drones ends this time attack." : "");
        function R() {
            !x && E && (o.useSimStore.getState().selectWheelDrone(v) || w("Couldn’t save your drone. Please try again."))
        }
        return (0,
        a.useEffect)( () => {
            N.current?.focus(),
            document.pointerLockElement && document.exitPointerLock();
            let e = e => {
                let t = o.useSimStore.getState();
                if ("droneWheel" === t.phase && !e.metaKey && !e.ctrlKey && !e.altKey && (e.preventDefault(),
                e.stopImmediatePropagation(),
                !e.repeat)) {
                    if ("pressTab" === t.droneWheelTutorial) {
                        e.code === t.settings.bindings.keyboard.droneWheel && t.openDroneWheel();
                        return
                    }
                    if ("mouse" === t.droneWheelTutorial) {
                        ("Enter" === e.code || "Space" === e.code) && t.advanceDroneWheelTutorial();
                        return
                    }
                    e.code === t.settings.bindings.keyboard.droneWheel || "Escape" === e.code ? t.closeDroneWheel() : "ArrowRight" === e.code || "ArrowDown" === e.code ? y(e => n.DRONE_LADDER[(n.DRONE_LADDER.indexOf(e) + 1) % n.DRONE_LADDER.length]) : "ArrowLeft" === e.code || "ArrowUp" === e.code ? y(e => n.DRONE_LADDER[(n.DRONE_LADDER.indexOf(e) + n.DRONE_LADDER.length - 1) % n.DRONE_LADDER.length]) : ("Enter" === e.code || "Space" === e.code) && (0,
                    n.isDroneUnlocked)(v, (0,
                    l.confirmedXp)(t), t.droneGifts) && !t.selectWheelDrone(v) && w("Couldn’t save your drone. Please try again.")
                }
            }
            ;
            return window.addEventListener("keydown", e, !0),
            () => window.removeEventListener("keydown", e, !0)
        }
        , [v]),
        (0,
        t.jsxs)("div", {
            ref: N,
            className: "fd-drone-wheel sim-ui-surface",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Change your drone",
            tabIndex: -1,
            onPointerMove: function(e) {
                if (x || !j.current)
                    return;
                let t = j.current.getBoundingClientRect()
                  , s = function(e, t, s) {
                    if (!Number.isFinite(e) || !Number.isFinite(t) || Math.hypot(e, t) < s)
                        return null;
                    let a = 2 * Math.PI
                      , i = (Math.atan2(t, e) + Math.PI / 2 + a) % a;
                    return n.DRONE_LADDER[Math.floor((i + Math.PI / n.DRONE_LADDER.length) / (a / n.DRONE_LADDER.length)) % n.DRONE_LADDER.length]
                }(e.clientX - t.left - t.width / 2, e.clientY - t.top - t.height / 2, .27 * t.width);
                s && (y(s),
                w(""))
            },
            onClick: R,
            children: ["pressTab" !== x && (0,
            t.jsxs)(t.Fragment, {
                children: [!x && (0,
                t.jsxs)("button", {
                    className: "fd-wheel-close",
                    "aria-label": "Close drone wheel",
                    onClick: e => {
                        e.stopPropagation(),
                        o.useSimStore.getState().closeDroneWheel()
                    }
                    ,
                    children: [(0,
                    t.jsx)(m.Icon, {
                        name: "close",
                        size: 20
                    }), (0,
                    t.jsx)("kbd", {
                        children: "Esc"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "fd-wheel-disc",
                    ref: j,
                    children: [(0,
                    t.jsx)("svg", {
                        className: "fd-wheel-sectors",
                        viewBox: "0 0 600 600",
                        "aria-hidden": "true",
                        children: n.DRONE_LADDER.map( (e, s) => (0,
                        t.jsx)("path", {
                            d: function(e) {
                                let t = 2 * Math.PI / n.DRONE_LADDER.length
                                  , s = e * t - t / 2 + .018
                                  , a = e * t + t / 2 - .018
                                  , [i,r] = h(292, s)
                                  , [o,l] = h(292, a)
                                  , [c,d] = h(163, a)
                                  , [u,m] = h(163, s);
                                return `M ${i} ${r} A 292 292 0 0 1 ${o} ${l} L ${c} ${d} A 163 163 0 0 0 ${u} ${m} Z`
                            }(s),
                            className: `${e === v ? "is-hovered" : ""} ${!(0,
                            n.isDroneUnlocked)(e, f, g) ? "is-locked" : ""}`
                        }, e))
                    }), n.DRONE_LADDER.map( (e, s) => {
                        let[a,i] = h(227, s * Math.PI * 2 / n.DRONE_LADDER.length)
                          , r = !(0,
                        n.isDroneUnlocked)(e, f, g);
                        return (0,
                        t.jsxs)("button", {
                            className: `fd-wheel-slot ${e === v ? "is-hovered" : ""} ${r ? "is-locked" : ""}`,
                            style: {
                                left: `${a / 6}%`,
                                top: `${i / 6}%`
                            },
                            tabIndex: -1,
                            "aria-disabled": r || !!x,
                            "aria-label": `${n.DRONES[e].category}: ${n.DRONES[e].name}${r ? `, locked until level ${n.DRONES[e].unlockLevel}` : ""}`,
                            onPointerEnter: () => {
                                x || y(e)
                            }
                            ,
                            onClick: t => {
                                t.stopPropagation(),
                                x || r || o.useSimStore.getState().selectWheelDrone(e) || w("Couldn’t save your drone. Please try again.")
                            }
                            ,
                            children: [(0,
                            t.jsx)("span", {
                                className: "fd-wheel-slot-status",
                                children: r ? (0,
                                t.jsx)(m.Icon, {
                                    name: "lock",
                                    size: 15
                                }) : e === b ? (0,
                                t.jsx)(m.Icon, {
                                    name: "check",
                                    size: 16
                                }) : null
                            }), (0,
                            t.jsx)("strong", {
                                children: n.DRONES[e].category
                            }), (0,
                            t.jsx)("span", {
                                children: n.DRONES[e].name
                            }), (r || e === b) && (0,
                            t.jsx)("small", {
                                children: r ? `LEVEL ${n.DRONES[e].unlockLevel}` : "EQUIPPED"
                            })]
                        }, e)
                    }
                    ), (0,
                    t.jsxs)("div", {
                        className: "fd-wheel-center",
                        "aria-live": "polite",
                        children: [(0,
                        t.jsx)("div", {
                            className: "fd-wheel-preview",
                            children: (0,
                            t.jsx)(p, {
                                archetype: v,
                                skin: _,
                                interactive: !1
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: "fd-wheel-description",
                            children: (0,
                            t.jsx)("h2", {
                                children: C.category
                            })
                        })]
                    }), (0,
                    t.jsx)("button", {
                        className: "fd-wheel-confirm",
                        tabIndex: -1,
                        disabled: !!x || !E,
                        "aria-label": `Fly ${C.category}`,
                        onClick: e => {
                            e.stopPropagation(),
                            R()
                        }
                    })]
                }), L && (0,
                t.jsx)("footer", {
                    className: "fd-wheel-footer",
                    children: (0,
                    t.jsx)("p", {
                        children: L
                    })
                })]
            }), x && (0,
            t.jsxs)("div", {
                className: "fd-wheel-tutorial",
                onClick: e => {
                    e.stopPropagation(),
                    "pressTab" === x ? o.useSimStore.getState().openDroneWheel() : "mouse" === x && o.useSimStore.getState().advanceDroneWheelTutorial()
                }
                ,
                children: [(0,
                t.jsx)("button", {
                    className: "fd-wheel-dismiss",
                    "aria-label": "Click to continue",
                    tabIndex: -1
                }), (0,
                t.jsx)(u.InstructorPresence, {
                    forceVisible: !0,
                    label: null,
                    src: "/sim/characters/Dummy-PalmUp.webp",
                    message: "pressTab" === x ? (0,
                    t.jsxs)(t.Fragment, {
                        children: ["Press ", (0,
                        t.jsxs)("kbd", {
                            className: "fd-wheel-tutorial-key",
                            children: ["[", (0,
                            i.formatKeyCode)(s), "]"]
                        }), " to change your drone"]
                    }) : "Use your mouse to select a drone.",
                    showContinueHint: !0
                })]
            })]
        })
    }
    ], 492926)
}
, 799833, 330220, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(271645)
      , a = e.i(247638)
      , n = e.i(293190);
    e.s(["LessonProgress", 0, function({lesson: e}) {
        let[i,r] = (0,
        s.useState)(!1);
        return (0,
        s.useEffect)( () => {
            let e = 0
              , t = null
              , s = () => {
                t !== a.live.hoverLocked && r(t = a.live.hoverLocked),
                e = requestAnimationFrame(s)
            }
            ;
            return e = requestAnimationFrame(s),
            () => cancelAnimationFrame(e)
        }
        , [e.id]),
        (0,
        t.jsx)(n.InstructorPresence, {
            forceVisible: !0,
            label: i ? "Ready when you are" : null,
            message: i ? "Arm at low throttle, then raise it to launch. You can line up your pitch while you wait." : e.practice.instruction
        })
    }
    ], 799833),
    e.i(671112),
    e.s(["MarkerHoldHint", 0, function() {
        let[e,n] = (0,
        s.useState)(!1);
        return ((0,
        s.useEffect)( () => {
            let e = requestAnimationFrame(function t() {
                e = requestAnimationFrame(t),
                n(e => e === a.live.markerHeld ? e : a.live.markerHeld)
            });
            return () => cancelAnimationFrame(e)
        }
        , []),
        e) ? (0,
        t.jsx)("p", {
            className: "fd-mode-panel-hold",
            role: "status",
            children: "Throttle up to fly on"
        }) : null
    }
    ], 330220)
}
, 680288, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(271645)
      , a = e.i(643531)
      , n = e.i(174886)
      , i = e.i(412864);
    e.s(["MapShareButton", 0, function({id: e, beforeCopy: r, disabled: o=!1, className: l}) {
        let[c,d] = (0,
        s.useState)(!1)
          , [u,m] = (0,
        s.useState)(!1)
          , [p,h] = (0,
        s.useState)("");
        async function f() {
            if (!u) {
                m(!0);
                try {
                    if (r && !await r())
                        return;
                    let t = new URL((0,
                    i.personalMapPath)(e),window.location.origin).href;
                    try {
                        await navigator.clipboard.writeText(t),
                        d(!0)
                    } catch {
                        h(t)
                    }
                } finally {
                    m(!1)
                }
            }
        }
        return (0,
        t.jsxs)("span", {
            className: "map-share-control",
            children: [(0,
            t.jsxs)("button", {
                type: "button",
                className: l,
                disabled: o || u,
                onClick: () => void f(),
                onBlur: () => d(!1),
                children: [c ? (0,
                t.jsx)(a.Check, {
                    size: 16,
                    "aria-hidden": !0
                }) : (0,
                t.jsx)(n.Copy, {
                    size: 16,
                    "aria-hidden": !0
                }), u ? "Saving…" : c ? "Copied" : "Copy link"]
            }), p && (0,
            t.jsx)("input", {
                "aria-label": "Map link",
                readOnly: !0,
                value: p,
                onFocus: e => e.target.select(),
                autoFocus: !0
            })]
        })
    }
    ])
}
, 468483, e => {
    "use strict";
    var t = e.i(843476);
    e.s(["SharedMapStatus", 0, function({error: e, onRetry: s, onExit: a}) {
        return (0,
        t.jsx)("div", {
            className: "fd-shared-map-status",
            children: (0,
            t.jsxs)("section", {
                className: "fd-shared-map-panel",
                "aria-labelledby": "shared-map-title",
                role: e ? void 0 : "status",
                children: [(0,
                t.jsxs)("h1", {
                    id: "shared-map-title",
                    children: [e ? "Map unavailable" : "Opening map", !e && (0,
                    t.jsx)("span", {
                        className: "fd-shared-map-spinner",
                        "aria-hidden": !0
                    })]
                }), e ? (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)("p", {
                        role: "alert",
                        children: e
                    }), (0,
                    t.jsxs)("div", {
                        className: "fd-shared-map-actions",
                        children: [(0,
                        t.jsx)("button", {
                            type: "button",
                            onClick: a,
                            children: "Back to Play"
                        }), (0,
                        t.jsx)("button", {
                            type: "button",
                            className: "fd-shared-map-primary",
                            autoFocus: !0,
                            onClick: s,
                            children: "Try again"
                        })]
                    })]
                }) : (0,
                t.jsx)("div", {
                    className: "fd-shared-map-track",
                    "aria-hidden": !0,
                    children: (0,
                    t.jsx)("span", {})
                })]
            })
        })
    }
    ])
}
, 108431, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(271645)
      , a = e.i(555103)
      , n = e.i(514236)
      , i = e.i(233617)
      , r = e.i(106258);
    e.i(573798);
    var o = e.i(568204)
      , l = e.i(498475)
      , c = e.i(244144)
      , d = e.i(293190)
      , u = e.i(954646)
      , m = e.i(389110)
      , p = e.i(383807)
      , h = e.i(392436);
    e.i(671112);
    let f = [{
        id: "radio",
        label: "Radio",
        icon: "radio"
    }, {
        id: "controller",
        label: "Controller",
        icon: "gamepad"
    }, {
        id: "keyboard",
        label: "Keyboard",
        icon: "keyboard"
    }]
      , g = new Set(["Enter", "NumpadEnter", "Space", "Escape", "Tab"])
      , x = () => {}
    ;
    function S({step: e}) {
        let i = (0,
        s.useRef)(null)
          , [m,v] = (0,
        s.useState)(!0)
          , y = (0,
        s.useRef)(!1)
          , k = (0,
        s.useRef)([])
          , w = "ask" === e.at
          , j = (0,
        a.controlsOnboardingLine)(e)
          , N = new Set((0,
        p.useGamepadList)(w).map(e => (0,
        n.classifyDevice)(e.id)))
          , E = {
            radio: N.has("radio"),
            controller: N.has("gamepad"),
            keyboard: !1
        }
          , C = f.find(e => E[e.id])?.id ?? null
          , _ = (e, t=!1) => {
            y.current || (y.current = !0,
            v(!1),
            k.current.push(window.setTimeout( () => {
                t ? (0,
                u.requestHomeExit)(e) : (e(),
                v(!0),
                k.current.push(window.setTimeout( () => {
                    y.current = !1
                }
                , 200)))
            }
            , 200)))
        }
          , L = () => {
            let e = r.useSimStore.getState();
            _(e.advanceControlsOnboarding, (0,
            a.controlsOnboardingHandsOff)(e.controlsOnboarding))
        }
          , R = (0,
        s.useRef)(L);
        (0,
        s.useEffect)( () => {
            R.current = L
        }
        ),
        (0,
        s.useEffect)( () => {
            let e = k.current;
            return () => {
                for (let t of e)
                    window.clearTimeout(t)
            }
        }
        , []),
        (0,
        h.useRaceMenuInput)(i, x);
        let M = "talk" === e.at ? `${e.choice}:${e.line}` : e.at;
        return ((0,
        s.useEffect)( () => {
            document.pointerLockElement && document.exitPointerLock();
            let e = i.current?.querySelector("[data-race-primary]") ?? i.current;
            e?.focus({
                preventScroll: !0
            })
        }
        , [M]),
        (0,
        s.useEffect)( () => {
            let e = e => {
                if (e.metaKey || e.ctrlKey || e.altKey || !g.has(e.code))
                    return;
                e.stopImmediatePropagation();
                let t = [...i.current?.querySelectorAll(".fd-controls-choice") ?? []];
                if (t.length > 0) {
                    if ("Tab" === e.code) {
                        e.preventDefault();
                        let s = t.indexOf(document.activeElement)
                          , a = s < 0 ? e.shiftKey ? t.length - 1 : 0 : (s + (e.shiftKey ? -1 : 1) + t.length) % t.length;
                        t[a]?.focus();
                        return
                    }
                    if ("Escape" !== e.code && t.includes(e.target))
                        return;
                    e.preventDefault();
                    return
                }
                e.preventDefault(),
                e.repeat || "Escape" === e.code || "Tab" === e.code || R.current()
            }
            ;
            return window.addEventListener("keydown", e, !0),
            () => window.removeEventListener("keydown", e, !0)
        }
        , []),
        j) ? (0,
        t.jsx)("div", {
            ref: i,
            className: "fd-controls-onboarding fdk-screen sim-ui-surface",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Controls setup",
            tabIndex: -1,
            children: (0,
            t.jsxs)("div", {
                className: "fd-wheel-tutorial",
                onClick: w ? void 0 : L,
                children: [w ? null : (0,
                t.jsx)("button", {
                    type: "button",
                    className: "fd-wheel-dismiss",
                    "data-race-primary": !0,
                    "aria-label": "Continue",
                    tabIndex: -1
                }), (0,
                t.jsx)(d.InstructorPresence, {
                    forceVisible: !0,
                    src: j.src,
                    message: (0,
                    t.jsx)("span", {
                        "aria-live": "polite",
                        children: j.text
                    }),
                    speechOpacity: +!!m,
                    showContinueHint: !w,
                    actions: w ? (0,
                    t.jsx)("div", {
                        className: "fd-controls-choices",
                        role: "group",
                        "aria-label": "What you fly with",
                        children: f.map( ({id: e, label: s, icon: a}) => (0,
                        t.jsxs)(l.Button, {
                            tone: "ghost",
                            size: "md",
                            block: !0,
                            className: "fd-controls-choice",
                            icon: (0,
                            t.jsx)(c.Icon, {
                                name: a,
                                size: 24,
                                strokeWidth: 2.25
                            }),
                            "data-race-primary": e === C ? "" : void 0,
                            onClick: t => {
                                t.stopPropagation(),
                                _( () => r.useSimStore.getState().chooseControls(e))
                            }
                            ,
                            children: [s, E[e] ? (0,
                            t.jsx)(o.Badge, {
                                className: "fd-controls-plugged",
                                children: "Plugged in"
                            }) : null]
                        }, e))
                    }) : void 0,
                    afterSpeech: j.keys ? (0,
                    t.jsx)(b, {}) : void 0
                })]
            })
        }) : null
    }
    function b() {
        let e = (0,
        r.useSimStore)(e => e.settings.bindings.keyboard);
        return (0,
        t.jsx)("dl", {
            className: "fd-controls-keys",
            "aria-label": "Keyboard controls",
            children: (0,
            i.keyboardHelp)(e).map(e => (0,
            t.jsxs)("div", {
                children: [(0,
                t.jsx)("dt", {
                    children: e.keys.map(e => (0,
                    t.jsx)("kbd", {
                        className: "fd-wheel-tutorial-key",
                        children: e
                    }, e))
                }), (0,
                t.jsx)("dd", {
                    children: e.action
                })]
            }, e.action))
        })
    }
    e.s(["ControlsOnboarding", 0, function() {
        let e = (0,
        r.useSimStore)(e => e.controlsOnboarding)
          , a = (0,
        r.useSimStore)(e => e.controlsOnboardingCompleted)
          , n = (0,
        r.useSimStore)(e => e.calibrating)
          , i = (0,
        r.useSimStore)(e => e.settingsOpen)
          , o = (0,
        s.useContext)(m.MenuVisibility);
        return ((0,
        s.useEffect)( () => {
            o && !a && r.useSimStore.getState().openControlsOnboarding()
        }
        , [o, a]),
        (0,
        s.useEffect)( () => {
            e?.at !== "setup" || n || i || r.useSimStore.getState().controlsSetupClosed()
        }
        , [e, n, i]),
        e && "setup" !== e.at) ? (0,
        t.jsx)(S, {
            step: e
        }) : null
    }
    ])
}
, 911017, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(770703)
      , a = e.i(271645);
    e.i(573798);
    var n = e.i(568204)
      , i = e.i(498475)
      , r = e.i(624834)
      , o = e.i(354059)
      , l = e.i(516560)
      , c = e.i(509381)
      , d = e.i(244144)
      , u = e.i(353198)
      , m = e.i(11871)
      , p = e.i(106258)
      , h = e.i(771607)
      , f = e.i(71008)
      , g = e.i(15221)
      , x = e.i(894969)
      , S = e.i(277873)
      , b = e.i(353937)
      , v = e.i(793273)
      , y = e.i(389110)
      , k = e.i(954646)
      , w = e.i(517337);
    function j({archetype: e, skin: s, skinOverride: n, environmentOverride: i, className: r, loading: o}) {
        let l = (0,
        a.useRef)(null)
          , c = (0,
        a.useRef)(null)
          , d = (0,
        a.useId)()
          , u = (0,
        a.useContext)(y.MenuVisibility)
          , m = (0,
        w.useGearWorld)(e => e.readyId === d);
        return (0,
        a.useLayoutEffect)( () => {
            let t = l.current;
            if (!t)
                return;
            let a = () => {
                let a = t.getBoundingClientRect()
                  , r = {
                    left: a.left,
                    top: a.top,
                    width: a.width,
                    height: a.height
                }
                  , o = w.useGearWorld.getState().anchor
                  , l = u && r.width > 0 && r.height > 0 && a.bottom > 0 && a.top < window.innerHeight;
                o?.id === d && o.archetype === e && o.skin === s && o.skinOverride === n && o.environmentOverride === i && o.visible === l && Object.entries(r).every( ([e,t]) => o.rect[e] === t) || w.useGearWorld.getState().setAnchor({
                    id: d,
                    archetype: e,
                    skin: s,
                    skinOverride: n,
                    environmentOverride: i,
                    rect: r,
                    visible: l
                })
            }
            ;
            a();
            let r = new ResizeObserver(a);
            return r.observe(t),
            window.addEventListener("resize", a),
            window.addEventListener("scroll", a, !0),
            () => {
                r.disconnect(),
                window.removeEventListener("resize", a),
                window.removeEventListener("scroll", a, !0)
            }
        }
        , [d, e, s, n, i, u]),
        (0,
        a.useLayoutEffect)( () => () => w.useGearWorld.getState().release(d), [d]),
        (0,
        a.useEffect)( () => (0,
        k.registerHomeHero)({
            depart(e) {
                let t = w.useGearWorld.getState().stage;
                t ? t.depart(e) : e()
            },
            recover() {
                w.useGearWorld.getState().stage?.recover?.()
            }
        }), []),
        (0,
        t.jsx)("span", {
            ref: l,
            className: r ?? "fd-hero-anchor",
            "data-variant": "gear-world",
            "data-drone": e,
            "data-skin": s,
            style: {
                pointerEvents: "auto",
                touchAction: "none"
            },
            onPointerDown: e => {
                0 === e.button && (c.current = {
                    pointer: e.pointerId,
                    x: e.clientX,
                    y: e.clientY
                },
                e.currentTarget.setPointerCapture(e.pointerId))
            }
            ,
            onPointerMove: e => {
                let t = c.current;
                if (!t || t.pointer !== e.pointerId)
                    return;
                let s = Math.max(160, .6 * e.currentTarget.clientHeight);
                w.useGearWorld.getState().moveView((e.clientX - t.x) * .008, (t.y - e.clientY) / s),
                t.x = e.clientX,
                t.y = e.clientY
            }
            ,
            onPointerUp: () => {
                c.current = null
            }
            ,
            onPointerCancel: () => {
                c.current = null
            }
            ,
            onLostPointerCapture: () => {
                c.current = null
            }
            ,
            children: !m && o
        })
    }
    var N = e.i(516727)
      , E = e.i(24168)
      , C = e.i(672390);
    function _({onShop: e}) {
        let s = (0,
        x.useInventory)()
          , n = (0,
        p.useSimStore)(e => e.username) ?? "Pilot"
          , o = s.packs.filter(e => e.badge_label)
          , [l,u] = (0,
        a.useState)(null)
          , [m,h] = (0,
        a.useState)(!1)
          , [f,g] = (0,
        a.useState)("")
          , [S,b] = (0,
        a.useState)("")
          , v = (0,
        a.useRef)(!1)
          , y = o.find(e => e.checkout_id === l) ?? o[0]
          , k = y?.badge_label ?? ""
          , w = "ready" === s.status
          , j = !!y?.badge_visible;
        async function N() {
            if (y && w && !v.current) {
                v.current = !0,
                h(!0),
                g(""),
                b("");
                try {
                    let e = await s.setBadgeVisible(y.checkout_id, !j);
                    e ? g(e) : b(j ? `${k} badge removed.` : `${k} badge equipped.`)
                } finally {
                    v.current = !1,
                    h(!1)
                }
            }
        }
        let L = y ? (0,
        t.jsx)(i.PlayButton, {
            className: "fd-gear-action",
            label: m ? "Saving…" : j ? "Remove" : "Equip",
            busy: m,
            "aria-label": m ? void 0 : `${j ? "Remove" : "Equip"} ${k} badge`,
            disabledReason: w ? s.purchasing ? "A purchase is running" : void 0 : "Loading your badges",
            onClick: () => void N()
        }) : w && e ? (0,
        t.jsx)(i.PlayButton, {
            className: "fd-gear-action",
            label: "Shop",
            onClick: e
        }) : null;
        return (0,
        t.jsxs)("section", {
            className: "fd-badges fdk-screen",
            "aria-label": "Your badges",
            "aria-busy": m,
            children: [y && (0,
            t.jsxs)("div", {
                className: "fd-badge-nameplate fdk-on-ink",
                role: "img",
                "aria-label": `${n} with the ${k} badge`,
                children: [(0,
                t.jsx)(d.Icon, {
                    name: "smile",
                    size: 24
                }), (0,
                t.jsx)("strong", {
                    children: n
                }), (0,
                t.jsx)(C.EquippedPilotBadges, {
                    badges: [k]
                })]
            }), f && (0,
            t.jsx)("div", {
                className: "fd-gear-notes",
                children: (0,
                t.jsx)("p", {
                    className: "fd-loadout-error",
                    role: "alert",
                    children: f
                })
            }), (0,
            t.jsxs)("div", {
                className: "fd-gear-catalog fd-gear-catalog--rows",
                role: "group",
                "aria-label": "Badge collection",
                children: [w && !y && (0,
                t.jsx)(r.EmptyState, {
                    className: "fd-gear-state",
                    icon: "star",
                    title: "No badges owned."
                }), "loading" === s.status && (0,
                t.jsx)(r.LoadingState, {
                    className: "fd-gear-state",
                    title: "Loading your badges…"
                }), "error" === s.status && (0,
                t.jsx)("div", {
                    className: "fd-gear-state",
                    role: "alert",
                    children: (0,
                    t.jsx)(r.EmptyState, {
                        className: "fd-gear-empty",
                        icon: "warning",
                        title: s.error,
                        action: (0,
                        t.jsx)(c.TextLink, {
                            onClick: () => void s.refresh(),
                            trailingIcon: (0,
                            t.jsx)(d.Icon, {
                                name: "arrow-right",
                                size: 24
                            }),
                            children: "Try again"
                        })
                    })
                }), o.map(e => (0,
                t.jsx)(E.RowCard, {
                    className: "fd-badge-card",
                    layout: "side",
                    name: e.name,
                    art: (0,
                    t.jsx)("b", {
                        className: "fd-badge-label",
                        "aria-hidden": "true",
                        children: e.badge_label
                    }),
                    label: `${e.badge_label} badge, ${e.name}${e.badge_visible ? ", equipped" : ""}`,
                    equipped: e.badge_visible,
                    selected: y?.checkout_id === e.checkout_id,
                    disabled: m,
                    onSelect: () => {
                        u(e.checkout_id),
                        g(""),
                        b("")
                    }
                }, e.checkout_id))]
            }), (0,
            t.jsxs)("footer", {
                className: "fd-gear-footer",
                children: [(0,
                t.jsxs)("div", {
                    className: "fd-gear-selected",
                    children: [(0,
                    t.jsx)("h2", {
                        children: y?.name
                    }), L]
                }), e && (0,
                t.jsx)(c.TextLink, {
                    className: "fd-gear-shop-link",
                    onClick: e,
                    trailingIcon: (0,
                    t.jsx)(d.Icon, {
                        name: "arrow-right",
                        size: 20
                    }),
                    children: "Shop packs"
                })]
            }), (0,
            t.jsx)("span", {
                className: "sr-only",
                role: "status",
                children: S
            })]
        })
    }
    e.i(671112);
    var L = e.i(322543)
      , R = e.i(993287);
    let M = (0,
    s.default)( () => e.A(133954), {
        loadableGenerated: {
            modules: [88371]
        },
        ssr: !1
    })
      , P = [{
        id: "drone",
        label: "Drones"
    }, {
        id: "colors",
        label: "Skins"
    }, {
        id: "environment",
        label: "Environment"
    }, {
        id: "consumables",
        label: "Boosters"
    }, {
        id: "badges",
        label: "Badges"
    }];
    function I({children: e}) {
        let s = (0,
        a.useRef)(null)
          , [n,i] = (0,
        a.useState)(!1);
        return (0,
        a.useEffect)( () => {
            let e = new IntersectionObserver(t => {
                t.some(e => e.isIntersecting) && (i(!0),
                e.disconnect())
            }
            ,{
                rootMargin: "100px"
            });
            return s.current && e.observe(s.current),
            () => e.disconnect()
        }
        , []),
        (0,
        t.jsx)("span", {
            ref: s,
            className: "fd-gear-preview-art",
            children: n ? e : null
        })
    }
    function D(e) {
        return {
            id: (0,
            S.shopGearId)(e),
            name: e.name,
            shell: e.colors.shell,
            accent: e.colors.accent,
            props: e.colors.props,
            propMaterial: e.prop_material ?? "normal"
        }
    }
    e.s(["GearPanel", 0, function({embedded: e=!1, initialCategory: s="drone", onShop: y, onShopHome: k, onBuy: w}) {
        let E = (0,
        a.useRef)(null)
          , C = (0,
        x.useInventory)()
          , A = (0,
        p.useSimStore)(e => e.settings)
          , O = (0,
        p.useSimStore)(h.confirmedXp)
          , T = (0,
        p.useSimStore)(e => e.droneGifts)
          , F = (0,
        p.useSimStore)(e => e.equipDrone)
          , z = (0,
        p.useSimStore)(e => e.saveEnvironmentPalette)
          , $ = (0,
        p.useSimStore)(e => e.previewEnvironmentPalette)
          , B = A.drone
          , W = (0,
        u.equippedDrone)(B, O, T)
          , [G,U] = (0,
        a.useState)(s)
          , [q,H] = (0,
        a.useState)(W)
          , [J,K] = (0,
        a.useState)(W)
          , [V,X] = (0,
        a.useState)( () => (0,
        b.equippedDroneSkin)(B.skins, W))
          , [Y,Q] = (0,
        a.useState)(A.environmentPalette)
          , [Z,ee] = (0,
        a.useState)([])
          , [et,es] = (0,
        a.useState)("loading")
          , [ea,en] = (0,
        a.useState)(0)
          , [ei,er] = (0,
        a.useState)("")
          , eo = (0,
        L.useSkinHeroVisit)();
        (0,
        a.useEffect)( () => {
            let e = new AbortController;
            return fetch("/api/shop", {
                cache: "no-store",
                signal: AbortSignal.any([e.signal, AbortSignal.timeout(15e3)])
            }).then(async e => {
                if (!e.ok)
                    throw Error();
                return e.json()
            }
            ).then(t => {
                e.signal.aborted || (ee(t.items),
                es("ready"))
            }
            ).catch( () => {
                e.signal.aborted || es("error")
            }
            ),
            () => e.abort()
        }
        , [ea]),
        (0,
        a.useEffect)( () => () => $(null), [$]);
        let el = (0,
        a.useMemo)( () => {
            let e = new Set(C.items.map(e => e.id));
            return [...new Map([...Z.filter(e => e.published), ...C.items].map(e => [e.id, e])).values()].sort( (t, s) => Number(e.has(s.id)) - Number(e.has(t.id)) || (0,
            f.compareGearOrder)(t, s))
        }
        , [Z, C.items])
          , ec = [...u.DRONE_LADDER].sort( (e, t) => Number((0,
        u.isDroneUnlocked)(t, O, T)) - Number((0,
        u.isDroneUnlocked)(e, O, T)))
          , ed = (0,
        a.useMemo)( () => el.filter(e => "colorways" === e.category), [el])
          , eu = (0,
        a.useMemo)( () => el.filter(e => "environments" === e.category), [el])
          , em = e => C.items.some(t => t.id === e.id)
          , ep = e => (0,
        b.equippedDroneSkin)(B.skins, e)
          , eh = "drone" === G ? q : "colors" === G ? J : W
          , ef = ed.find(e => (0,
        S.shopGearId)(e) === ("colors" === G ? V : ep(eh))) ?? ed.find(em)
          , eg = (0,
        a.useMemo)( () => ef ? D(ef) : (0,
        u.droneSkin)(eh, "factory"), [ef, eh])
          , ex = eu.find(e => (0,
        S.shopGearId)(e) === Y) ?? eu.find(em)
          , eS = (0,
        a.useMemo)( () => "environment" === G && ex ? {
            light: ex.colors.light,
            dark: ex.colors.dark,
            accent: ex.colors.accent,
            ground: ex.colors.ground,
            sky: ex.colors.sky
        } : void 0, [G, ex])
          , eb = "environment" === G ? ex : "colors" === G ? ef : void 0
          , ev = eb ? em(eb) : !!(ef && em(ef))
          , ey = "environment" === G ? !!(ex && (0,
        S.shopGearId)(ex) === A.environmentPalette) : eh === W && eg.id === ep(eh)
          , ek = u.DRONES[eh]
          , ew = (0,
        m.droneQuad)(eh)
          , ej = (0,
        u.isDroneUnlocked)(eh, O, T) ? null : ek.unlockLevel
          , eN = "ready" === C.status
          , eE = C.error === x.SIGN_IN_TO_LOAD
          , eC = ej ? `Unlocks at level ${ej}: ${(0,
        u.droneUnlockProgress)(eh, O).remaining.toLocaleString("en-US")} XP to go` : eN ? ev ? C.purchasing ? "A purchase is running" : void 0 : "environment" === G ? "No owned environments" : "No owned colorways" : "loading" === C.status ? "Loading your collection" : eE ? "Sign in to equip" : "Your collection didn’t load"
          , e_ = (e, t) => t && em(e) ? "Equipped" : em(e) ? "Owned" : "ready" !== C.status ? "Ownership unavailable" : "Not owned"
          , eL = "drone" === G ? ek.name : eb?.name;
        return (0,
        a.useLayoutEffect)( () => {
            let e = document.activeElement;
            e instanceof HTMLElement && E.current?.contains(e) && e.matches(".fdk-rarity-card, .fdk-row-card") && e.scrollIntoView({
                block: "nearest",
                inline: "nearest"
            })
        }
        , [eL, ei, et, C.status]),
        (0,
        t.jsxs)("section", {
            ref: E,
            className: `fd-loadout fdk-screen${e ? " fd-loadout--embedded" : ""} fd-loadout--${G}`,
            "aria-label": "Gear",
            onKeyDown: e => {
                let t = e.target;
                if (!t.matches(".fdk-rarity-card, .fdk-row-card"))
                    return;
                let s = [...e.currentTarget.querySelectorAll(".fd-gear-catalog :is(.fdk-rarity-card, .fdk-row-card)")]
                  , a = s.indexOf(t)
                  , n = "drone" === G || "colors" === G ? 2 : 1
                  , i = "ArrowRight" === e.key ? a + 1 : "ArrowLeft" === e.key ? a - 1 : "ArrowDown" === e.key ? a + n : "ArrowUp" === e.key ? a - n : "Home" === e.key ? 0 : "End" === e.key ? s.length - 1 : null;
                null !== i && (e.preventDefault(),
                s[Math.max(0, Math.min(s.length - 1, i))]?.focus())
            }
            ,
            onFocus: e => {
                e.target.matches(".fdk-rarity-card, .fdk-row-card") && e.target.scrollIntoView({
                    block: "nearest",
                    inline: "nearest"
                })
            }
            ,
            children: [(0,
            t.jsx)(l.Tabs, {
                className: "fd-loadout-tabs",
                label: "Gear categories",
                idBase: "gear",
                value: G,
                onChange: function(e) {
                    e === G || C.purchasing || (U(e),
                    H(W),
                    K(W),
                    X(ep(W)),
                    Q(A.environmentPalette),
                    er(""),
                    $(null))
                },
                items: P.map(e => ({
                    value: e.id,
                    label: e.label
                }))
            }), (0,
            t.jsxs)("div", {
                className: "fd-gear-stage",
                children: [(0,
                t.jsx)("div", {
                    className: "fd-drone-canvas",
                    "data-rarity": ef?.rarity ?? "common",
                    role: "img",
                    "aria-label": `${ek.name} in ${eg.name}. Interactive 3D model.`,
                    children: e ? (0,
                    t.jsx)(j, {
                        archetype: eh,
                        skin: eg.id,
                        skinOverride: eg,
                        environmentOverride: eS,
                        loading: (0,
                        t.jsx)(r.LoadingState, {
                            className: "fd-drone-loading",
                            title: "Getting your ride ready…"
                        })
                    }) : (0,
                    t.jsx)(v.DroneHeroAnchor, {
                        variant: "gear",
                        archetype: eh,
                        skin: eg.id,
                        skinOverride: eg,
                        loading: (0,
                        t.jsx)(r.LoadingState, {
                            className: "fd-drone-loading",
                            title: "Getting your ride ready…"
                        })
                    })
                }), ("drone" === G || "colors" === G) && (0,
                t.jsxs)("aside", {
                    className: "fd-drone-brief",
                    "aria-label": "Selected drone",
                    children: [(0,
                    t.jsx)("h2", {
                        children: ek.name
                    }), "drone" === G && (0,
                    t.jsxs)("div", {
                        className: "fd-drone-specs fdk-on-ink",
                        children: [(0,
                        t.jsx)(n.BigNumber, {
                            label: "Weight",
                            value: Math.round(1e3 * ew.mass),
                            unit: "g"
                        }), (0,
                        t.jsx)(n.BigNumber, {
                            label: "Thrust / weight",
                            value: ew.thrustToWeight,
                            unit: ":1"
                        })]
                    }), "drone" === G && (0,
                    t.jsx)(i.Button, {
                        tone: "primary",
                        size: "lg",
                        className: "fd-gear-change-skin",
                        disabled: C.purchasing,
                        onClick: function() {
                            C.purchasing || (K(q),
                            X(ep(q)),
                            U("colors"),
                            er(""),
                            $(null))
                        },
                        children: "Change skin"
                    })]
                })]
            }), (0,
            t.jsx)(l.TabPanel, {
                idBase: "gear",
                value: G,
                className: "fd-gear-panel",
                children: "badges" === G ? (0,
                t.jsx)(_, {
                    onShop: () => k?.("featured")
                }) : "consumables" === G ? (0,
                t.jsx)(N.BoosterPanel, {
                    mode: "inventory",
                    onShop: y
                }) : (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsxs)("div", {
                        className: `fd-gear-catalog${"environment" === G ? " fd-gear-catalog--rows" : ""}`,
                        role: "group",
                        "aria-label": "drone" === G ? "Drones" : "colors" === G ? "Skins" : "Environments",
                        children: ["drone" === G ? ec.map( (e, s) => {
                            let a = !(0,
                            u.isDroneUnlocked)(e, O, T);
                            return (0,
                            t.jsx)(o.RarityCard, {
                                name: u.DRONES[e].name,
                                art: (0,
                                t.jsx)(M, {
                                    archetype: e,
                                    skin: ep(e),
                                    deferMs: 300 + 120 * s,
                                    crop: !0
                                }),
                                selected: q === e,
                                equipped: W === e,
                                locked: a,
                                label: `${u.DRONES[e].name}${a ? `, locked, unlocks at level ${u.DRONES[e].unlockLevel}` : W === e ? ", equipped" : ""}`,
                                onSelect: () => {
                                    H(e),
                                    er("")
                                }
                            }, e)
                        }
                        ) : ("colors" === G ? ed : eu).map( (e, s) => {
                            let a = "colors" === G ? eh === W && (0,
                            S.shopGearId)(e) === ep(eh) : (0,
                            S.shopGearId)(e) === A.environmentPalette
                              , n = eb?.id === e.id;
                            return (0,
                            t.jsx)(o.RarityCard, {
                                name: e.name,
                                rarity: e.rarity,
                                art: (0,
                                t.jsx)(I, {
                                    children: "colors" === G ? (0,
                                    t.jsx)(M, {
                                        archetype: eo(e.id, e.price),
                                        skin: (0,
                                        S.shopGearId)(e),
                                        skinOverride: D(e),
                                        deferMs: 300 + 120 * s,
                                        crop: !0
                                    }) : (0,
                                    t.jsx)(R.default, {
                                        item: e,
                                        presentation: "studio",
                                        interactive: !1
                                    })
                                }),
                                selected: n,
                                equipped: a && em(e),
                                locked: eN && !em(e),
                                label: `${e.name}, ${g.RARITY_LABELS[e.rarity]}, ${eN && !em(e) ? "locked" : e_(e, a).toLowerCase()}`,
                                disabled: C.purchasing,
                                onSelect: () => {
                                    !C.purchasing && ("environment" === G ? Q((0,
                                    S.shopGearId)(e)) : X((0,
                                    S.shopGearId)(e)),
                                    er(""))
                                }
                            }, e.id)
                        }
                        ), "drone" !== G && !el.length && "loading" === C.status && (0,
                        t.jsx)(r.LoadingState, {
                            className: "fd-gear-state",
                            title: "Loading your collection…"
                        }), "drone" !== G && !eb && eN && "ready" === et && (0,
                        t.jsx)(r.EmptyState, {
                            className: "fd-gear-state",
                            title: "No items available."
                        })]
                    }), (0,
                    t.jsxs)("footer", {
                        className: "fd-gear-footer",
                        children: ["error" === C.status && (0,
                        t.jsxs)("p", {
                            className: "fd-gear-note",
                            role: "alert",
                            children: [C.error, !eE && (0,
                            t.jsx)(c.TextLink, {
                                onClick: () => void C.refresh(),
                                children: "Try again"
                            })]
                        }), "error" === et && "drone" !== G && (0,
                        t.jsxs)("p", {
                            className: "fd-gear-note",
                            role: "status",
                            children: ["Couldn’t load the shop. ", (0,
                            t.jsx)(c.TextLink, {
                                onClick: () => {
                                    es("loading"),
                                    en(e => e + 1)
                                }
                                ,
                                children: "Try again"
                            })]
                        }), ei && (0,
                        t.jsx)("p", {
                            className: "fd-loadout-error",
                            role: "alert",
                            children: ei
                        }), (0,
                        t.jsxs)("div", {
                            className: "fd-gear-selected",
                            children: [(0,
                            t.jsxs)("div", {
                                children: [(0,
                                t.jsx)("h2", {
                                    children: eL
                                }), eb && (0,
                                t.jsxs)(t.Fragment, {
                                    children: [(0,
                                    t.jsx)("span", {
                                        className: `fd-gear-footer-rarity fd-gear-item--${eb.rarity}`,
                                        children: g.RARITY_LABELS[eb.rarity]
                                    }), (!ey || !ev) && (0,
                                    t.jsx)("div", {
                                        className: "fd-gear-selected-state",
                                        children: e_(eb, ey)
                                    })]
                                })]
                            }), eb && !ev && "credits" === eb.access_type ? (0,
                            t.jsx)(i.Button, {
                                tone: "primary",
                                size: "lg",
                                className: "fd-gear-buy",
                                disabled: !eN || !C.shop_enabled || C.purchasing || !w,
                                onClick: () => eb && w?.(eb, eh),
                                children: "Buy"
                            }) : eb && !ev ? null : (0,
                            t.jsx)(i.PlayButton, {
                                className: "fd-gear-action",
                                label: ej ? `Level ${ej}` : ey ? "Equipped" : "Equip",
                                detail: ej ? (0,
                                t.jsxs)("span", {
                                    className: "fd-gear-action-lock",
                                    children: [(0,
                                    t.jsx)(d.Icon, {
                                        name: "lock",
                                        size: 18
                                    }), "LVL ", ej]
                                }) : eC,
                                disabledReason: eC,
                                disabled: !eC && ey,
                                onClick: function() {
                                    eC || er(("environment" === G && ex ? z((0,
                                    S.shopGearId)(ex)) : F(eh, eg.id)) ? "" : "Couldn’t save. Please try again.")
                                }
                            })]
                        }), "drone" !== G && k && (0,
                        t.jsx)(c.TextLink, {
                            className: "fd-gear-shop-link",
                            trailingIcon: (0,
                            t.jsx)(d.Icon, {
                                name: "arrow-right",
                                size: 20
                            }),
                            onClick: () => k("environment" === G ? "environments" : "colorways"),
                            children: "environment" === G ? "Shop environments" : "Shop skins"
                        })]
                    })]
                })
            })]
        })
    }
    , "gearSkin", 0, D], 911017)
}
, 517337, e => {
    "use strict";
    let t = (0,
    e.i(768834).create)(e => ({
        anchor: null,
        stage: null,
        readyId: null,
        rotation: 0,
        inspection: 0,
        setAnchor: t => e(e => ({
            anchor: t,
            rotation: e.anchor?.id === t.id ? e.rotation : 0,
            inspection: e.anchor?.id === t.id && e.anchor.archetype === t.archetype ? e.inspection : 0
        })),
        release: t => e(e => e.anchor?.id === t ? {
            anchor: null,
            readyId: null
        } : {}),
        moveView: (t, s) => e(e => ({
            rotation: e.rotation + t,
            inspection: function(e, t) {
                let s = Math.sign(t)
                  , a = Math.abs(t);
                if (e * s < 0) {
                    let t = Math.min(Math.abs(e), a);
                    e += s * t,
                    a -= t
                }
                return e + -(s * (1 - Math.abs(e)) * Math.expm1(-a))
            }(e.inspection, s)
        }))
    }));
    e.s(["useGearWorld", 0, t])
}
, 143596, 654937, 112316, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(710534)
      , a = e.i(106258)
      , n = e.i(809886)
      , i = e.i(271645)
      , r = e.i(451598)
      , o = e.i(809102)
      , l = e.i(353198)
      , c = e.i(870895)
      , d = e.i(28276)
      , u = e.i(58849)
      , m = e.i(333794)
      , p = e.i(404961)
      , h = e.i(998494);
    function f(e, t) {
        let s = t.find(t => t.id === e);
        if (s)
            return {
                name: s.name,
                unlockLevel: s.unlockLevel ?? 1
            };
        if ((0,
        h.isPersonalMapId)(e) || !(0,
        p.hasMap)(e))
            return null;
        let a = (0,
        p.resolveMap)(e);
        return {
            name: a.name,
            unlockLevel: a.unlockLevel ?? 1
        }
    }
    let g = null;
    async function x(e, t=m.prepareLobbyMap) {
        let s = (0,
        h.isOfficialMapId)(e.mapId) || (0,
        h.isPersonalMapId)(e.mapId) ? await t(e.mapId) : e.mapId
          , a = "place" === e.target.kind ? e.target.spawnId : void 0
          , n = e.spawn ?? (a ? (0,
        d.listMapSpawns)(s).find(e => e.id === a) ?? null : null);
        return {
            mapId: s,
            spawn: n
        }
    }
    var S = e.i(105524)
      , b = e.i(246176)
      , v = e.i(71901);
    e.i(573798);
    var y = e.i(568204)
      , k = e.i(498475)
      , w = e.i(624834)
      , j = e.i(509381)
      , N = e.i(244144)
      , E = e.i(125392)
      , C = e.i(300691);
    async function _(e, t=e => e(), s) {
        if (b.useLobbySocial.getState().squad)
            return void t( () => {
                a.useSimStore.getState().returnToMenu(),
                (0,
                v.selectLobbyMap)(e.mapId).catch( () => {}
                )
            }
            );
        let n = await x(e, s);
        t( () => {
            let e = a.useSimStore.getState();
            e.returnToMenu(),
            (0,
            S.queueBusy)(S.useMatchmaking.getState()) || e.startFlight(n.mapId, n.spawn ? {
                spawn: n.spawn
            } : void 0)
        }
        )
    }
    function L({title: e, name: s, next: n, tryIt: d}) {
        let u = (0,
        a.useSimStore)(e => e.xp)
          , m = (0,
        a.useSimStore)(e => e.lastXpAward)
          , p = (0,
        a.useSimStore)(e => e.progressSyncing)
          , h = (0,
        a.useSimStore)(e => e.progressSyncError)
          , f = (0,
        a.useSimStore)(e => e.progressOffline)
          , g = (0,
        a.useSimStore)(e => e.activeLessonId)
          , x = (0,
        a.useSimStore)(e => e.startLesson)
          , v = (0,
        a.useSimStore)(e => e.startLessonPractice)
          , R = (0,
        a.useSimStore)(e => e.openLessons)
          , M = (0,
        a.useSimStore)(e => e.returnToMenu)
          , P = (0,
        a.useSimStore)(e => e.unlockedDroneQueue)
          , I = (0,
        a.useSimStore)(e => e.isAnonymous ? null : e.playerAccountId)
          , D = (0,
        S.useMatchmaking)(S.queueLockLine)
          , A = (0,
        b.useLobbySocial)(e => e.squad)
          , [O,T] = (0,
        i.useState)(!1)
          , [F,z] = (0,
        i.useState)("")
          , $ = d?.locked != null ? `Opens at level ${d.locked}` : function({queueLock: e, squad: t, leader: s}) {
            return e ?? (t && !s ? "Only the squad leader can change the map" : null)
        }({
            queueLock: D,
            squad: !!A,
            leader: !A || A.leaderId === I
        })
          , B = (0,
        r.useCreditRecord)(e => e.notifications)
          , W = (0,
        c.levelProgress)(Math.max(u, m?.xpAfter ?? u))
          , G = (0,
        c.levelProgress)(m?.xpBefore ?? u)
          , U = !p && !h && !f
          , q = U ? m?.xpAwarded ?? 0 : 0
          , H = U && m?.lessonNewlyCompleted === !1;
        function J(e) {
            let t = new Set(P)
              , s = new Set(B.map(e => e.id));
            a.useSimStore.setState(e => ({
                unlockedDroneQueue: e.unlockedDroneQueue.filter(e => !t.has(e))
            })),
            r.useCreditRecord.setState(e => ({
                notifications: e.notifications.filter(e => !s.has(e.id))
            })),
            e()
        }
        async function K(e) {
            if (!O) {
                T(!0),
                z("");
                try {
                    await _(e, J)
                } catch (e) {
                    z(e instanceof Error ? e.message : "The map could not load. Try again.")
                } finally {
                    T(!1)
                }
            }
        }
        return (0,
        t.jsx)("div", {
            onKeyDown: e => e.stopPropagation(),
            children: (0,
            t.jsxs)(w.DialogShell, {
                open: !0,
                size: "lg",
                className: C.default.modal,
                onClose: () => J(R),
                closeOnBackdrop: !1,
                closeLabel: "Back to lessons",
                title: (0,
                t.jsxs)("span", {
                    className: C.default.title,
                    children: [(0,
                    t.jsx)("span", {
                        className: C.default.check,
                        "aria-hidden": "true",
                        children: (0,
                        t.jsx)(N.Icon, {
                            name: "check",
                            strokeWidth: 3.5,
                            size: 24
                        })
                    }), e]
                }),
                description: (0,
                t.jsx)("span", {
                    className: C.default.name,
                    children: s
                }),
                children: [(0,
                t.jsxs)("section", {
                    className: C.default.progress,
                    "aria-label": "Pilot progress",
                    children: [(0,
                    t.jsxs)("div", {
                        className: C.default.progressHeading,
                        children: [(0,
                        t.jsxs)("strong", {
                            children: ["Level ", W.level]
                        }), q > 0 && (0,
                        t.jsxs)(y.Badge, {
                            tone: "acid",
                            display: !0,
                            children: ["+", q.toLocaleString("en-US"), " XP"]
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: C.default.track,
                        style: {
                            "--progress-before": G.level === W.level ? Math.min(G.fraction, W.fraction) : 0
                        },
                        children: (0,
                        t.jsx)(y.ProgressBar, {
                            size: "lg",
                            label: `Level ${W.level} XP`,
                            value: W.xpIntoLevel,
                            max: W.xpForNext,
                            valueText: `${W.xpIntoLevel.toLocaleString("en-US")} / ${W.xpForNext.toLocaleString("en-US")} XP`
                        })
                    }, `${m?.xpBefore}:${m?.xpAfter}`), (0,
                    t.jsx)("div", {
                        className: C.default.progressCaption,
                        children: p ? (0,
                        t.jsx)("span", {
                            role: "status",
                            children: "Saving progress…"
                        }) : f ? (0,
                        t.jsx)("span", {
                            role: "status",
                            children: (0,
                            t.jsx)(E.OfflineTag, {})
                        }) : h ? (0,
                        t.jsx)("span", {
                            role: "alert",
                            className: C.default.error,
                            children: "Progress not saved"
                        }) : H ? (0,
                        t.jsx)("span", {
                            children: "Previously completed"
                        }) : m?.leveledUp ? (0,
                        t.jsx)(y.Badge, {
                            tone: "acid",
                            children: "Level up"
                        }) : null
                    })]
                }), (P.length > 0 || B.length > 0) && (0,
                t.jsxs)("ul", {
                    className: C.default.rewards,
                    "aria-label": "Earned rewards",
                    children: [P.map(e => (0,
                    t.jsxs)("li", {
                        children: [(0,
                        t.jsx)(N.Icon, {
                            name: "check",
                            size: 24
                        }), (0,
                        t.jsxs)("span", {
                            children: [(0,
                            t.jsx)("strong", {
                                children: l.DRONES[e].name
                            }), (0,
                            t.jsx)("small", {
                                children: "Unlocked"
                            })]
                        })]
                    }, e)), B.map(e => (0,
                    t.jsxs)("li", {
                        children: [(0,
                        t.jsx)(N.Icon, {
                            name: "trophy",
                            size: 24
                        }), (0,
                        t.jsxs)("span", {
                            children: [(0,
                            t.jsx)("strong", {
                                children: e.names.join(" · ")
                            }), (0,
                            t.jsx)("small", {
                                children: [e.credits > 0 ? `+${e.credits.toLocaleString("en-US")} Credits` : "", (e.parts ?? 0) > 0 ? `+${e.parts.toLocaleString("en-US")} Parts` : "", ...(e.boosters ?? []).map(e => (0,
                                o.rewardLabel)({
                                    ...e,
                                    credits: 0,
                                    parts: 0
                                })), (e.pending ?? 0) > 0 ? `${e.pending.toLocaleString("en-US")} Parts to claim from the Parts counter in the header` : ""].filter(Boolean).join(" · ")
                            })]
                        })]
                    }, e.id))]
                }), (0,
                t.jsxs)("nav", {
                    className: C.default.actions,
                    "aria-label": "Continue learning",
                    children: [d ? (0,
                    t.jsxs)("div", {
                        className: C.default.paths,
                        "data-single": !n || void 0,
                        children: [(0,
                        t.jsx)("p", {
                            className: C.default.next,
                            children: d.place
                        }), n && (0,
                        t.jsxs)("p", {
                            className: C.default.next,
                            children: ["Next: ", (0,
                            t.jsx)("strong", {
                                children: n.name
                            })]
                        }), (0,
                        t.jsx)(k.Button, {
                            tone: "secondary",
                            size: "lg",
                            block: !0,
                            "data-autofocus": !n || void 0,
                            trailingIcon: (0,
                            t.jsx)(N.Icon, {
                                name: "arrow-up-right",
                                size: 24
                            }),
                            busy: O,
                            disabledReason: $ ?? void 0,
                            "aria-label": `Free Flight: ${d.place}`,
                            onClick: () => void K(d),
                            children: O ? "Loading map…" : "Free Flight"
                        }), n && (0,
                        t.jsx)(k.Button, {
                            tone: "primary",
                            size: "lg",
                            block: !0,
                            "data-autofocus": !0,
                            trailingIcon: (0,
                            t.jsx)(N.Icon, {
                                name: "arrow-right",
                                size: 24
                            }),
                            onClick: () => J( () => x(n.id)),
                            children: n.label
                        }), F && (0,
                        t.jsx)("p", {
                            role: "alert",
                            className: C.default.flyError,
                            children: F
                        })]
                    }) : (0,
                    t.jsxs)(t.Fragment, {
                        children: [n && (0,
                        t.jsxs)("p", {
                            className: C.default.next,
                            children: ["Next: ", (0,
                            t.jsx)("strong", {
                                children: n.name
                            })]
                        }), (0,
                        t.jsx)(k.Button, {
                            tone: "primary",
                            size: "lg",
                            block: !0,
                            "data-autofocus": !0,
                            trailingIcon: (0,
                            t.jsx)(N.Icon, {
                                name: "arrow-right",
                                size: 24
                            }),
                            onClick: () => J(n ? () => x(n.id) : R),
                            children: n?.label ?? "Lessons"
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: C.default.secondary,
                        children: [g && (0,
                        t.jsx)(k.Button, {
                            tone: "ghost",
                            block: !0,
                            icon: (0,
                            t.jsx)(N.Icon, {
                                name: "rotate",
                                size: 24
                            }),
                            onClick: () => J(v),
                            children: "Retry"
                        }), (n || d) && (0,
                        t.jsx)(k.Button, {
                            tone: "ghost",
                            block: !0,
                            icon: (0,
                            t.jsx)(N.Icon, {
                                name: "list",
                                size: 24
                            }),
                            onClick: () => J(R),
                            children: "Lessons"
                        })]
                    }), (0,
                    t.jsx)(j.TextLink, {
                        className: C.default.menu,
                        onClick: () => J(M),
                        children: "Main menu"
                    })]
                })]
            })
        })
    }
    e.s(["LessonComplete", 0, function() {
        let e = (0,
        a.useSimStore)(n.activeLesson);
        if (!e)
            return null;
        let i = (0,
        s.nextLesson)(e.id);
        return (0,
        t.jsx)(L, {
            title: "Lesson complete",
            name: e.name,
            next: i ? {
                id: i.id,
                name: i.name,
                label: "Next lesson"
            } : void 0
        })
    }
    ], 143596);
    var R = e.i(771607);
    e.s(["CourseComplete", 0, function() {
        let e = (0,
        a.useSimStore)(n.activeLesson)
          , r = (0,
        a.useSimStore)(e => e.lastXpAward)
          , o = (0,
        a.useSimStore)(R.confirmedXp)
          , l = (0,
        a.useSimStore)(e => !0 === e.isAdmin)
          , m = (0,
        s.courseById)(r?.courseId) ?? (e ? (0,
        s.courseForLesson)(e.id) : null)
          , p = m ? (0,
        s.nextCourse)(m.id) : null
          , h = p ? (0,
        s.firstLessonOfCourse)(p.id) : null
          , [x,S] = (0,
        i.useState)([]);
        return (0,
        i.useEffect)( () => {
            let e = !0;
            return (function(e=u.listPublishedOfficialMaps) {
                return g ??= e().catch(e => {
                    throw g = null,
                    e
                }
                )
            }
            )().then(t => {
                e && S(t)
            }
            ).catch( () => {}
            ),
            () => {
                e = !1
            }
        }
        , []),
        (0,
        t.jsx)(L, {
            title: "Course complete",
            name: m?.name ?? e?.name ?? "Course",
            next: h ? {
                id: h.id,
                name: p.name,
                label: "Next course"
            } : void 0,
            tryIt: function(e, t, s, a) {
                if (!e)
                    return null;
                let n = e => !s && (0,
                c.xpToLevel)(Number.isFinite(t) ? t : 0) < e.unlockLevel ? e.unlockLevel : null;
                if ("race" === e.kind) {
                    let t = (0,
                    d.getTimeAttackDoc)(e.timeAttackId);
                    if (!t || t.gates.length < 2)
                        return null;
                    let s = f(t.mapId, a);
                    return s ? {
                        target: e,
                        mapId: t.mapId,
                        spawn: t.raceExitSpawn ?? t.spawn,
                        place: `${t.name} \xb7 ${s.name}`,
                        locked: n(s)
                    } : null
                }
                let i = e.mapId
                  , r = f(i, a);
                if (!r)
                    return null;
                let o = e.spawnId ? (0,
                d.knownMapSpawns)(i)?.find(t => t.id === e.spawnId) ?? null : null;
                return {
                    target: e,
                    mapId: i,
                    spawn: o,
                    place: o?.label ? `${r.name} \xb7 ${o.label}` : r.name,
                    locked: n(r)
                }
            }(m?.tryIt, Math.max(o, r?.xpAfter ?? 0), l, x)
        })
    }
    ], 654937);
    var M = e.i(164372)
      , P = e.i(630372)
      , I = e.i(202010)
      , D = e.i(327168)
      , A = e.i(293190);
    e.s(["LessonStepPanel", 0, function() {
        let e = (0,
        a.useSimStore)(n.activeLesson)
          , s = (0,
        a.useSimStore)(e => e.lessonStepIndex)
          , r = (0,
        a.useSimStore)(e => e.editingLessonStep)
          , o = (0,
        a.useSimStore)(e => e.adminOpen)
          , l = (0,
        a.useSimStore)(e => e.goToLessonStep)
          , c = (0,
        a.useSimStore)(e => e.startLessonPractice)
          , d = (0,
        a.useSimStore)(e => e.openLessons)
          , [u,m] = (0,
        i.useState)(0)
          , [p,h] = (0,
        i.useState)(!0)
          , [f,g] = (0,
        i.useState)(!1)
          , x = (0,
        i.useRef)([])
          , S = `${e?.id ?? ""}:${s}`
          , [b,v] = (0,
        i.useState)(S);
        S !== b && (v(S),
        m(0)),
        (0,
        i.useEffect)( () => ((0,
        M.clearFraming)(),
        () => (0,
        M.clearFraming)()), []),
        (0,
        i.useEffect)( () => {
            let e = x.current;
            return () => {
                for (let t of e)
                    window.clearTimeout(t);
                e.length = 0
            }
        }
        , []);
        let y = e ? (0,
        P.resolveLessonStep)(e, s) : null;
        if (!e || !y || r || o)
            return null;
        let w = s === e.steps.length - 1
          , j = y.dialog
          , E = j[Math.min(u, Math.max(j.length - 1, 0))] ?? {
            text: "",
            sprite: I.DEFAULT_INSTRUCTOR_SPRITE
        };
        return (0,
        t.jsxs)("div", {
            className: "absolute inset-0",
            children: [(0,
            t.jsx)("button", {
                type: "button",
                "aria-label": "Continue dialog",
                disabled: f,
                className: `pointer-events-auto absolute inset-0 bg-transparent ${f ? "cursor-default" : "cursor-pointer"}`,
                onClick: function() {
                    if (f)
                        return;
                    for (let e of (g(!0),
                    h(!1),
                    x.current))
                        window.clearTimeout(e);
                    x.current = [];
                    let e = window.setTimeout( () => {
                        let e = !1;
                        if (u < j.length - 1 ? m(e => e + 1) : w ? (c(),
                        e = !0) : l(s + 1),
                        e)
                            return;
                        h(!0);
                        let t = window.setTimeout( () => {
                            g(!1)
                        }
                        , 200);
                        x.current.push(t)
                    }
                    , 200);
                    x.current.push(e)
                }
            }), (0,
            t.jsxs)("div", {
                className: "sim-lesson-toolbar fdk fdk-screen fdk-on-chalk pointer-events-auto absolute top-4 left-4 z-10",
                children: [(0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsxs)("p", {
                        className: "sim-lesson-toolbar__step",
                        children: ["Flight school · Step ", s + 1, " / ", e.steps.length]
                    }), (0,
                    t.jsx)("p", {
                        className: "sim-lesson-toolbar__name",
                        children: e.name
                    })]
                }), (0,
                t.jsx)(k.Button, {
                    size: "sm",
                    tone: "ghost",
                    icon: (0,
                    t.jsx)(N.Icon, {
                        name: "arrow-left",
                        size: 24
                    }),
                    onClick: e => {
                        e.stopPropagation(),
                        d()
                    }
                    ,
                    children: "Lessons"
                })]
            }), (0,
            t.jsx)(A.InstructorPresence, {
                src: (0,
                I.instructorSpriteSrc)(E.sprite),
                label: null,
                message: E.text,
                showContinueHint: !0,
                forceVisible: !0,
                speechOpacity: +!!p,
                afterSpeech: (0,
                t.jsx)(D.LessonRadioSticks, {})
            })]
        })
    }
    ], 112316)
}
, 442497, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(710534)
      , a = e.i(106258);
    e.i(573798);
    var n = e.i(498475)
      , i = e.i(624834)
      , r = e.i(244144);
    e.s(["LessonLoading", 0, function() {
        let e = (0,
        a.useSimStore)(e => e.activeLessonId)
          , o = (0,
        a.useSimStore)(e => e.lessonLoadError)
          , l = (0,
        a.useSimStore)(e => e.retryLessonLoad)
          , c = (0,
        a.useSimStore)(e => e.openLessons)
          , d = e ? (0,
        s.lessonById)(e)?.name : void 0;
        return (0,
        t.jsx)("div", {
            onKeyDown: e => e.stopPropagation(),
            children: (0,
            t.jsx)(i.DialogShell, {
                open: !0,
                className: "fd-lesson-loading",
                title: o ? "Couldn’t load lesson" : "Loading lesson",
                description: o ? d : void 0,
                onClose: c,
                closeOnBackdrop: !1,
                closeLabel: "Back to lessons",
                actions: (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)(n.Button, {
                        tone: "ghost",
                        icon: (0,
                        t.jsx)(r.Icon, {
                            name: "arrow-left",
                            size: 24
                        }),
                        onClick: c,
                        children: "Lessons"
                    }), o && e && (0,
                    t.jsx)(n.Button, {
                        tone: "primary",
                        "data-autofocus": !0,
                        onClick: l,
                        children: "Retry"
                    })]
                }),
                children: o ? (0,
                t.jsx)("p", {
                    className: "fd-lesson-loading-error",
                    role: "alert",
                    children: o
                }) : (0,
                t.jsx)(i.LoadingState, {
                    title: d ?? "Lesson"
                })
            })
        })
    }
    ])
}
, 300691, e => {
    e.v({
        actions: "lesson-result-modal-module__dzJusW__actions",
        award: "lesson-result-modal-module__dzJusW__award",
        check: "lesson-result-modal-module__dzJusW__check",
        error: "lesson-result-modal-module__dzJusW__error",
        flyError: "lesson-result-modal-module__dzJusW__flyError",
        menu: "lesson-result-modal-module__dzJusW__menu",
        modal: "lesson-result-modal-module__dzJusW__modal",
        name: "lesson-result-modal-module__dzJusW__name",
        next: "lesson-result-modal-module__dzJusW__next",
        paths: "lesson-result-modal-module__dzJusW__paths",
        progress: "lesson-result-modal-module__dzJusW__progress",
        progressCaption: "lesson-result-modal-module__dzJusW__progressCaption",
        progressHeading: "lesson-result-modal-module__dzJusW__progressHeading",
        rewards: "lesson-result-modal-module__dzJusW__rewards",
        secondary: "lesson-result-modal-module__dzJusW__secondary",
        title: "lesson-result-modal-module__dzJusW__title",
        track: "lesson-result-modal-module__dzJusW__track"
    })
}
, 794850, e => {
    "use strict";
    var t = e.i(353198);
    e.s(["lobbyAircraft", 0, function(e, s, a) {
        if (e.id === s)
            return a;
        let n = e.appearance
          , i = n?.droneId === e.drone && n.skinId === e.skin ? n.skin : t.DRONES[e.drone].skins.find(t => t.id === e.skin) ?? t.DRONES[e.drone].skins[0];
        return {
            drone: e.drone,
            skin: e.skin,
            skinOverride: i
        }
    }
    , "lobbyMembers", 0, function(e, t) {
        let s = e.find(e => e.id === t);
        return s ? [s, ...e.filter(e => e.id !== t)] : [...e]
    }
    ])
}
, 919356, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(516727)
      , a = e.i(271645);
    e.i(573798);
    var n = e.i(498475)
      , i = e.i(624834)
      , r = e.i(244144)
      , o = e.i(509381)
      , l = e.i(983040)
      , c = e.i(273726)
      , d = e.i(106258)
      , u = e.i(882902)
      , m = e.i(807375)
      , p = e.i(971301)
      , h = e.i(752834)
      , f = e.i(509415)
      , g = e.i(404961)
      , x = e.i(737069)
      , S = e.i(109242)
      , b = e.i(871737)
      , v = e.i(680288);
    function y({id: e, name: s, preview: l}) {
        let[c,d] = (0,
        a.useState)(l?.loading || l?.error ? null : l?.map ?? null)
          , [u,m] = (0,
        a.useState)(l?.error ?? "")
          , [p,h] = (0,
        a.useState)(0)
          , [f,g] = (0,
        a.useState)(!1)
          , [k,w] = (0,
        a.useState)("")
          , j = (0,
        a.useRef)(!1)
          , N = (0,
        a.useRef)(!1)
          , E = (0,
        S.usePersonalMapLibrary)(e => e.ownerId)
          , C = !!c && E === c.ownerId;
        async function _(e) {
            if (!c || C || j.current)
                return;
            j.current = !0,
            g(!0),
            m(""),
            w("");
            let t = c.myVote === e ? 0 : e;
            try {
                let e = await (l?.vote ?? x.voteCommunityMap)(c.id, t);
                N.current && (d(t => t && {
                    ...t,
                    ...e
                }),
                w(0 === t ? "Vote removed." : "Vote saved."))
            } catch (e) {
                N.current && m(e instanceof Error ? e.message : "Your vote could not be saved. Try again.")
            } finally {
                j.current = !1,
                N.current && g(!1)
            }
        }
        return (0,
        a.useEffect)( () => (N.current = !0,
        () => {
            N.current = !1
        }
        ), []),
        (0,
        a.useEffect)( () => {
            if (l)
                return;
            let t = new AbortController;
            return (0,
            x.loadCommunityMap)(e, AbortSignal.any([t.signal, AbortSignal.timeout(1e4)])).then(e => {
                t.signal.aborted || d(e)
            }
            ).catch(e => {
                t.signal.aborted || m(e instanceof Error ? e.message : "Map details could not load.")
            }
            ),
            () => t.abort()
        }
        , [e, p, l]),
        (0,
        t.jsxs)(o.Panel, {
            className: "sim-pause-map fdk-screen",
            flush: !0,
            "aria-labelledby": "pause-map-title",
            children: [(0,
            t.jsxs)("div", {
                className: "sim-pause-map__heading",
                children: [(0,
                t.jsxs)("span", {
                    className: "sim-pause-map__eyebrow",
                    children: [(0,
                    t.jsx)(r.Icon, {
                        name: "users",
                        size: 16
                    }), " Community map"]
                }), (0,
                t.jsx)("h3", {
                    id: "pause-map-title",
                    children: c?.name ?? s
                })]
            }), (0,
            t.jsxs)("div", {
                className: "sim-pause-map__body",
                children: [c ? (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsxs)(n.Button, {
                        tone: "ghost",
                        size: "sm",
                        block: !0,
                        className: "sim-pause-map__creator",
                        trailingIcon: (0,
                        t.jsx)(r.Icon, {
                            name: "arrow-up-right",
                            size: 24
                        }),
                        "aria-label": `View ${c.creator}'s profile`,
                        onClick: () => (l?.openProfile ?? b.usePilotProfile.getState().open)(c.ownerId),
                        children: [(0,
                        t.jsxs)("span", {
                            className: "sim-pause-map__creator-name",
                            children: [(0,
                            t.jsx)("small", {
                                children: "Built by"
                            }), (0,
                            t.jsx)("strong", {
                                children: c.creator
                            })]
                        }), (0,
                        t.jsx)("span", {
                            className: "sim-pause-map__profile-label",
                            children: "View profile"
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "sim-pause-map__rating",
                        children: [(0,
                        t.jsx)("div", {
                            className: "sim-pause-map__votes",
                            "aria-label": `Votes for ${c.name}`,
                            "aria-busy": f,
                            children: [1, -1].map(e => {
                                let s = 1 === e ? "Upvote" : "Downvote";
                                return (0,
                                t.jsxs)(n.Button, {
                                    tone: c.myVote === e ? "primary" : "ghost",
                                    size: "sm",
                                    icon: (0,
                                    t.jsx)(r.Icon, {
                                        name: 1 === e ? "arrow-up" : "arrow-down",
                                        size: 24
                                    }),
                                    "aria-label": `${s} ${c.name}`,
                                    "aria-pressed": c.myVote === e,
                                    disabled: f || C,
                                    title: C ? "You cannot vote on your own map" : void 0,
                                    onClick: () => void _(e),
                                    children: [(0,
                                    t.jsx)("span", {
                                        children: s
                                    }), " ", (0,
                                    t.jsx)("strong", {
                                        children: (0,
                                        x.mapCount)(1 === e ? c.upvotes : c.downvotes)
                                    })]
                                }, e)
                            }
                            )
                        }), (0,
                        t.jsx)("p", {
                            className: "sim-pause-map__hint",
                            children: C ? "This is your map. Other pilots can vote on it." : "Click again to remove your vote."
                        }), (0,
                        t.jsx)("p", {
                            className: "sim-pause-map__status",
                            role: "status",
                            children: f ? "Saving vote…" : k && (0,
                            t.jsxs)(t.Fragment, {
                                children: [(0,
                                t.jsx)(r.Icon, {
                                    name: "check",
                                    size: 14
                                }), k]
                            })
                        })]
                    })]
                }) : !u && (0,
                t.jsx)(i.LoadingState, {
                    className: "sim-pause-map__loading",
                    title: "Loading creator & votes…"
                }), u && (0,
                t.jsxs)("div", {
                    className: "sim-pause-map__error",
                    role: "alert",
                    children: [(0,
                    t.jsx)("p", {
                        children: u
                    }), !c && (0,
                    t.jsx)(o.TextLink, {
                        onClick: () => {
                            m(""),
                            h(e => e + 1)
                        }
                        ,
                        children: "Retry"
                    })]
                }), (0,
                t.jsxs)("footer", {
                    className: "sim-pause-map__footer",
                    children: [(0,
                    t.jsx)(v.MapShareButton, {
                        id: e,
                        className: "fdk-btn fdk-btn--ghost fdk-btn--sm"
                    }), (0,
                    t.jsx)("span", {
                        children: "Share the playground."
                    })]
                })]
            })]
        })
    }
    e.s(["PauseMenu", 0, function({communityPreview: e}={}) {
        let[x,S] = (0,
        a.useState)(!1)
          , b = (0,
        d.useSimStore)(e => e.resume)
          , v = (0,
        d.useSimStore)(e => e.respawn)
          , k = (0,
        d.useSimStore)(e => e.restartTimeAttack)
          , w = (0,
        d.useSimStore)(e => e.exitTimeAttack)
          , j = (0,
        d.useSimStore)(e => e.backToLessonSteps)
          , N = (0,
        d.useSimStore)(e => e.openSettings)
          , E = (0,
        d.useSimStore)(e => e.returnToMenu)
          , C = (0,
        d.useSimStore)(e => e.openSessionReplayEditor)
          , _ = (0,
        d.useSimStore)(e => e.activeLessonId)
          , L = (0,
        d.useSimStore)(e => e.activeTimeAttackId)
          , R = (0,
        d.useSimStore)(e => !!e.raceRun?.match)
          , M = (0,
        d.useSimStore)(e => !!e.raceRun?.match && !!e.timeAttackResult)
          , P = (0,
        d.useSimStore)(e => (0,
        c.respawnAction)(e))
          , I = (0,
        u.useMatchLaunch)(e => e.active?.mode === "teamDeathmatch")
          , D = (0,
        m.useCombatActive)() || I
          , A = (0,
        d.useSimStore)(e => e.personalMapId)
          , O = (0,
        d.useSimStore)(e => e.editorLibraryOpen)
          , T = (0,
        h.useMapEditor)(e => e.playtestMap)
          , F = (0,
        d.useSimStore)(e => e.adminDraftMapId)
          , z = (0,
        p.useOfficialMapAuthoring)(e => e.draft)
          , $ = !!(F && z?.map.id === F)
          , B = $ || !!(A && T && A === `user:${T.id}`)
          , W = e?.map.id ?? (!A?.startsWith("user:") || B || O ? null : A.slice(5))
          , G = !_
          , U = !!L
          , q = G && !F && !U && (0,
        l.getReplay)().frames.length > 0
          , H = U && R ? [{
            label: "Resume",
            action: "resume",
            icon: "play"
        }, ...M ? [] : [{
            label: P,
            action: "respawn",
            icon: "rotate"
        }], {
            label: "Challenges",
            action: "challenges",
            icon: "trophy"
        }, {
            label: "Leave match",
            action: "leaveMatch",
            icon: "log-out"
        }] : U ? [{
            label: "Resume",
            action: "resume",
            icon: "play"
        }, {
            label: "Restart",
            action: "respawn",
            icon: "rotate"
        }, {
            label: "Challenges",
            action: "challenges",
            icon: "trophy"
        }, {
            label: "Exit time attack",
            action: "exitTimeAttack",
            icon: "log-out"
        }] : [{
            label: "Resume",
            action: "resume",
            icon: "play"
        }, {
            label: "Respawn",
            action: "respawn",
            icon: "rotate"
        }, ...G ? [] : [{
            label: "See lesson again",
            action: "lesson",
            icon: "book-open"
        }], ...q ? [{
            label: "Replay Editor",
            action: "replay",
            icon: "clapperboard"
        }] : [], {
            label: "Settings",
            action: "settings",
            icon: "settings"
        }, {
            label: "Challenges",
            action: "challenges",
            icon: "trophy"
        }, ...B ? [{
            label: "Back to editor",
            action: "editor",
            icon: "pencil"
        }, {
            label: "Exit",
            action: "exit",
            icon: "log-out"
        }] : A || O ? [{
            label: W ? "Exit map" : "Exit",
            action: "exit",
            icon: "log-out"
        }] : [{
            label: "Main Menu",
            action: "menu",
            icon: "home"
        }]];
        return (0,
        t.jsxs)(o.Panel, {
            className: `sim-ui-surface sim-pause fdk-screen${W ? " sim-pause--community" : ""}`,
            "aria-labelledby": "pause-title",
            "data-challenges-open": x || void 0,
            children: [(0,
            t.jsxs)("div", {
                className: "sim-pause__copy",
                children: [(0,
                t.jsx)(o.SectionHeading, {
                    size: "lg",
                    id: "pause-title",
                    className: "sim-pause__title",
                    children: "Paused"
                }), (0,
                t.jsx)(s.ActiveBoosters, {}), (0,
                t.jsx)("nav", {
                    className: "sim-pause__nav",
                    "aria-label": "Pause",
                    children: H.map(e => {
                        let s = "respawn" !== e.action || G || U ? e.label : "Restart lesson";
                        return (0,
                        t.jsx)(n.Button, {
                            tone: "resume" === e.action ? "primary" : "ghost",
                            block: !0,
                            icon: (0,
                            t.jsx)(r.Icon, {
                                name: e.icon
                            }),
                            trailingIcon: "resume" === e.action ? (0,
                            t.jsx)(r.Icon, {
                                name: "arrow-right"
                            }) : void 0,
                            "aria-haspopup": "challenges" === e.action ? "dialog" : void 0,
                            onClick: () => {
                                var t;
                                "editor" === (t = e.action) || "exit" === t ? (window.history.replaceState(null, "", "/sim"),
                                $ ? (E(),
                                p.useOfficialMapAuthoring.setState({
                                    testDefinition: null
                                }),
                                "editor" === t ? (h.useMapEditor.setState({
                                    active: !0
                                }),
                                d.useSimStore.getState().openAdmin()) : (0,
                                p.closeOfficialMapEditor)()) : (h.useMapEditor.setState("editor" === t ? {
                                    active: !0
                                } : {
                                    active: !1,
                                    playtestMap: null
                                }),
                                d.useSimStore.setState({
                                    editorLibraryOpen: "editor" === t
                                }),
                                E())) : "resume" === t ? b() : "respawn" === t ? U ? k() : v() : "exitTimeAttack" === t ? w() : "leaveMatch" === t ? ((0,
                                u.leaveMatch)(),
                                b()) : "lesson" === t ? j() : "replay" === t ? C() : "settings" === t ? N() : "challenges" === t ? S(!0) : (window.history.replaceState(null, "", "/sim"),
                                E())
                            }
                            ,
                            className: "sim-pause__action",
                            children: "respawn" === e.action && D && !U ? (0,
                            t.jsxs)("span", {
                                className: "sim-pause__label",
                                children: [s, (0,
                                t.jsxs)("small", {
                                    children: ["Costs your team 1", " ", (0,
                                    t.jsx)(r.Icon, {
                                        name: "battery",
                                        inline: !0,
                                        label: "battery"
                                    })]
                                })]
                            }) : s
                        }, e.action)
                    }
                    )
                })]
            }), W && (0,
            t.jsx)(y, {
                id: W,
                name: e?.map.name ?? (0,
                g.resolveMap)(A).name,
                preview: e
            }, W), (0,
            t.jsx)("div", {
                className: "sim-challenges-keys",
                onKeyDown: e => e.stopPropagation(),
                children: (0,
                t.jsx)(i.DialogShell, {
                    open: x,
                    title: "Challenges",
                    closeLabel: "Close challenges",
                    onClose: () => S(!1),
                    className: "sim-ui-surface sim-challenges-modal",
                    children: (0,
                    t.jsx)("div", {
                        className: "sim-challenges-modal__content",
                        children: (0,
                        t.jsx)(f.PilotRecord, {})
                    })
                })
            })]
        })
    }
    ], 919356)
}
, 187765, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(106258);
    e.i(573798);
    var a = e.i(624834)
      , n = e.i(187107);
    e.s(["UsernameGate", 0, function({actions: e}={}) {
        let i = (0,
        s.useSimStore)(e => e.applyPlayerProfile);
        return (0,
        t.jsx)("div", {
            className: "fd-username-gate-keys",
            onKeyDown: e => e.stopPropagation(),
            children: (0,
            t.jsx)(a.DialogShell, {
                open: !0,
                dismissible: !1,
                onClose: () => {}
                ,
                title: (0,
                t.jsxs)(t.Fragment, {
                    children: ["Choose a", (0,
                    t.jsx)("br", {}), "username"]
                }),
                className: "fd-username-gate",
                children: (0,
                t.jsx)(n.UsernameForm, {
                    mode: "claim",
                    actions: e,
                    onSaved: e => i({
                        username: e.username,
                        usernameChangedAt: e.usernameChangedAt
                    })
                })
            })
        })
    }
    ])
}
, 31502, 119275, e => {
    "use strict";
    var t = e.i(843476);
    let s = (0,
    e.i(475254).default)("arrow-left-right", [["path", {
        d: "M8 3 4 7l4 4",
        key: "9rb6wj"
    }], ["path", {
        d: "M4 7h16",
        key: "6tx8e3"
    }], ["path", {
        d: "m16 21 4-4-4-4",
        key: "siv7j2"
    }], ["path", {
        d: "M20 17H4",
        key: "h6l3hr"
    }]]);
    var a = e.i(271645)
      , n = e.i(483359)
      , i = e.i(760974)
      , r = e.i(106258)
      , o = e.i(859930);
    e.i(573798);
    var l = e.i(498475);
    let c = "w-full border border-(--fdk-graphite) bg-(--fdk-ink)/50 px-3 py-2.5 font-tech text-base text-(--fdk-chalk) outline-none focus:border-(--fdk-orange)"
      , d = "font-tech text-[13px] tracking-[0.14em] text-(--fdk-muted) uppercase"
      , u = [{
        id: "select",
        key: "1",
        label: "Select"
    }, {
        id: "placeGate",
        key: "2",
        label: "Gate"
    }, {
        id: "placeLand",
        key: "3",
        label: "Land"
    }, {
        id: "setSpawn",
        key: "4",
        label: "Spawn"
    }]
      , m = [{
        id: "select",
        key: "1",
        label: "Select"
    }, {
        id: "placeGate",
        key: "2",
        label: "Gate"
    }, {
        id: "setSpawn",
        key: "3",
        label: "Spawn"
    }];
    e.s(["PracticeEditorHud", 0, function() {
        let e = (0,
        r.useSimStore)(e => e.practiceEditorDraft)
          , p = (0,
        r.useSimStore)(e => e.editorTool)
          , h = (0,
        r.useSimStore)(e => e.selectedObjectiveId)
          , f = (0,
        r.useSimStore)(e => e.practiceEditorExitPrompt)
          , g = (0,
        r.useSimStore)(e => e.setEditorTool)
          , x = (0,
        r.useSimStore)(e => e.selectObjective)
          , S = (0,
        r.useSimStore)(e => e.updateObjective)
          , b = (0,
        r.useSimStore)(e => e.updateSpawn)
          , v = (0,
        r.useSimStore)(e => e.reorderObjective)
          , y = (0,
        r.useSimStore)(e => e.duplicateObjective)
          , k = (0,
        r.useSimStore)(e => e.deleteObjective)
          , w = (0,
        r.useSimStore)(e => e.patchPracticeEditorDraft)
          , j = (0,
        r.useSimStore)(e => e.requestPracticeEditorExit)
          , N = (0,
        r.useSimStore)(e => e.dismissPracticeEditorExit)
          , E = (0,
        r.useSimStore)(e => e.cancelPracticeEditor)
          , C = (0,
        r.useSimStore)(e => e.savePracticeEditor)
          , [_,L] = (0,
        a.useState)(!1)
          , [R,M] = (0,
        a.useState)(null);
        if (!e)
            return null;
        let P = e.practice.objectives.find(e => e.id === h) ?? null
          , I = h === i.EDITOR_SPAWN_ID
          , D = (0,
        o.practiceEditorBaseline)(e.practice, e.spawn) !== e.baseline
          , A = "timeAttack" === e.source.kind
          , O = e.practice.objectives.filter(e => "gate" === e.kind).length;
        async function T(e=!1) {
            if (A && O < 2)
                return void M("Place at least two gates (start and finish).");
            L(!0),
            M(null);
            let t = await C(e ? {
                exit: !0
            } : void 0);
            L(!1),
            t || M("Save failed.")
        }
        return (0,
        t.jsxs)("div", {
            className: "fdk-on-ink pointer-events-none absolute inset-0 z-20",
            children: [f ? null : (0,
            t.jsx)("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                children: (0,
                t.jsxs)("div", {
                    className: "relative size-9 opacity-70",
                    children: [(0,
                    t.jsx)("div", {
                        className: "absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-(--fdk-paper)/90"
                    }), (0,
                    t.jsx)("div", {
                        className: "absolute top-1/2 right-0 h-px w-3 -translate-y-1/2 bg-(--fdk-paper)/90"
                    }), (0,
                    t.jsx)("div", {
                        className: "absolute top-0 left-1/2 h-3 w-px -translate-x-1/2 bg-(--fdk-paper)/90"
                    }), (0,
                    t.jsx)("div", {
                        className: "absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 bg-(--fdk-paper)/90"
                    }), (0,
                    t.jsx)("div", {
                        className: "absolute top-1/2 left-1/2 size-0.75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--fdk-paper)"
                    })]
                })
            }), (0,
            t.jsxs)("div", {
                className: "pointer-events-auto absolute inset-x-0 top-0 flex items-center justify-between gap-4 border-b border-(--fdk-graphite) bg-(--fdk-ink)/88 px-6 py-4 sm:px-7",
                children: [(0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsx)("p", {
                        className: d,
                        children: A ? "Time attack" : "Practice course"
                    }), (0,
                    t.jsxs)("div", {
                        className: "mt-1 flex flex-wrap items-baseline gap-3",
                        children: [(0,
                        t.jsx)("p", {
                            className: "font-display text-3xl leading-none tracking-[0.04em] text-(--fdk-chalk) uppercase sm:text-4xl",
                            children: e.name
                        }), D ? (0,
                        t.jsx)("span", {
                            className: "font-tech text-[13px] tracking-[0.14em] text-(--fdk-orange) uppercase",
                            children: "Unsaved"
                        }) : null]
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [(0,
                    t.jsx)(l.Button, {
                        size: "md",
                        tone: "primary",
                        sound: "confirm",
                        disabled: _,
                        onClick: () => void T(!1),
                        children: "Save"
                    }), (0,
                    t.jsx)(l.Button, {
                        size: "md",
                        tone: "ghost",
                        disabled: _,
                        onClick: j,
                        children: "Exit"
                    })]
                })]
            }), (0,
            t.jsxs)("div", {
                className: "pointer-events-auto absolute top-24 bottom-36 left-0 flex w-[min(92vw,28rem)] flex-col gap-4 overflow-y-auto border-r border-(--fdk-graphite) bg-(--fdk-ink)/88 px-6 py-5 sm:px-7",
                children: [A ? null : (0,
                t.jsxs)("label", {
                    className: "block space-y-2",
                    children: [(0,
                    t.jsx)("span", {
                        className: d,
                        children: "Instruction"
                    }), (0,
                    t.jsx)("input", {
                        className: c,
                        value: e.practice.instruction,
                        onChange: t => w({
                            practice: {
                                ...e.practice,
                                instruction: t.target.value
                            }
                        })
                    })]
                }), (0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsx)("p", {
                        className: `mb-3 ${d}`,
                        children: "Sequence"
                    }), (0,
                    t.jsxs)("ul", {
                        className: "space-y-2",
                        children: [(0,
                        t.jsx)("li", {
                            className: `flex items-center gap-2 border px-3 py-2.5 ${I ? "border-(--fdk-orange) bg-(--fdk-ink)/60" : "border-(--fdk-graphite) bg-(--fdk-ink)/30"}`,
                            children: (0,
                            t.jsx)("button", {
                                type: "button",
                                className: "min-w-0 flex-1 truncate text-left font-tech text-base text-(--fdk-chalk)",
                                onClick: () => {
                                    x(i.EDITOR_SPAWN_ID),
                                    g("select")
                                }
                                ,
                                children: "Spawn"
                            })
                        }), e.practice.objectives.map( (s, a) => (0,
                        t.jsxs)("li", {
                            className: `flex items-center gap-2 border px-3 py-2.5 ${s.id === h ? "border-(--fdk-orange) bg-(--fdk-ink)/60" : "border-(--fdk-graphite) bg-(--fdk-ink)/30"}`,
                            children: [(0,
                            t.jsxs)("button", {
                                type: "button",
                                className: "min-w-0 flex-1 truncate text-left font-tech text-base text-(--fdk-chalk)",
                                onClick: () => {
                                    x(s.id),
                                    g("select")
                                }
                                ,
                                children: [(0,
                                t.jsx)("span", {
                                    className: "text-(--fdk-muted) tabular-nums",
                                    children: String(a + 1).padStart(2, "0")
                                }), " ", (0,
                                t.jsx)("span", {
                                    style: {
                                        color: s.color
                                    },
                                    children: "●"
                                }), " ", (0,
                                i.objectiveTitle)(s)]
                            }), (0,
                            t.jsx)("button", {
                                type: "button",
                                disabled: 0 === a,
                                "aria-label": "Move up",
                                className: "sim-focus px-2 py-1 font-tech text-base text-(--fdk-chalk-faint) outline-none hover:text-(--fdk-chalk) disabled:opacity-30",
                                onClick: () => v(s.id, -1),
                                children: "↑"
                            }), (0,
                            t.jsx)("button", {
                                type: "button",
                                disabled: a === e.practice.objectives.length - 1,
                                "aria-label": "Move down",
                                className: "sim-focus px-2 py-1 font-tech text-base text-(--fdk-chalk-faint) outline-none hover:text-(--fdk-chalk) disabled:opacity-30",
                                onClick: () => v(s.id, 1),
                                children: "↓"
                            })]
                        }, s.id)), 0 === e.practice.objectives.length ? (0,
                        t.jsx)("li", {
                            className: "font-tech text-base text-(--fdk-muted)",
                            children: A ? "No gates yet. Use 2–3 to place. Need two gates to save." : "No objectives yet. Use 2–4 to place."
                        }) : null]
                    })]
                }), I ? (0,
                t.jsxs)("div", {
                    className: "space-y-3 border-t border-(--fdk-graphite) pt-4",
                    children: [(0,
                    t.jsx)("p", {
                        className: d,
                        children: "Inspector · spawn"
                    }), (0,
                    t.jsx)("div", {
                        className: "grid grid-cols-3 gap-3",
                        children: ["X", "Y", "Z"].map( (s, a) => (0,
                        t.jsxs)("label", {
                            className: "block space-y-2",
                            children: [(0,
                            t.jsx)("span", {
                                className: d,
                                children: s
                            }), (0,
                            t.jsx)("input", {
                                type: "number",
                                step: .1,
                                className: c,
                                value: e.spawn.position[a],
                                onChange: t => {
                                    let s = [...e.spawn.position];
                                    s[a] = Number(t.target.value) || 0,
                                    b({
                                        position: s
                                    })
                                }
                            })]
                        }, s))
                    }), (0,
                    t.jsxs)("label", {
                        className: "block space-y-2",
                        children: [(0,
                        t.jsx)("span", {
                            className: d,
                            children: "Rotation"
                        }), (0,
                        t.jsx)("input", {
                            type: "number",
                            step: 1,
                            className: c,
                            value: Number((180 * e.spawn.yaw / Math.PI).toFixed(1)),
                            onChange: e => b({
                                yaw: (Number(e.target.value) || 0) * Math.PI / 180
                            })
                        })]
                    })]
                }) : null, P ? (0,
                t.jsxs)("div", {
                    className: "space-y-3 border-t border-(--fdk-graphite) pt-4",
                    children: [(0,
                    t.jsxs)("p", {
                        className: d,
                        children: ["Inspector · ", P.kind]
                    }), (0,
                    t.jsx)("div", {
                        className: "flex flex-wrap gap-2",
                        children: i.PRACTICE_OBJECTIVE_COLORS.map(e => (0,
                        t.jsx)("button", {
                            type: "button",
                            className: `size-9 border ${P.color === e ? "border-(--fdk-paper)" : "border-(--fdk-graphite)"}`,
                            style: {
                                background: e
                            },
                            onClick: () => S(P.id, {
                                color: e
                            }),
                            "aria-label": `Color ${e}`
                        }, e))
                    }), (0,
                    t.jsx)("div", {
                        className: "grid grid-cols-3 gap-3",
                        children: ["X", "Y", "Z"].map( (e, s) => (0,
                        t.jsxs)("label", {
                            className: "block space-y-2",
                            children: [(0,
                            t.jsx)("span", {
                                className: d,
                                children: e
                            }), (0,
                            t.jsx)("input", {
                                type: "number",
                                step: .1,
                                className: c,
                                value: P.position[s],
                                onChange: e => {
                                    let t = [...P.position];
                                    t[s] = Number(e.target.value) || 0,
                                    S(P.id, {
                                        position: t
                                    })
                                }
                            })]
                        }, e))
                    }), "gate" === P.kind ? (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                        t.jsxs)("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [(0,
                            t.jsxs)("label", {
                                className: "block space-y-2",
                                children: [(0,
                                t.jsx)("span", {
                                    className: d,
                                    children: "Width"
                                }), (0,
                                t.jsx)("input", {
                                    type: "number",
                                    step: .1,
                                    className: c,
                                    value: P.size[0],
                                    onChange: e => S(P.id, {
                                        size: [Number(e.target.value) || 1, P.size[1]]
                                    })
                                })]
                            }), (0,
                            t.jsxs)("label", {
                                className: "block space-y-2",
                                children: [(0,
                                t.jsx)("span", {
                                    className: d,
                                    children: "Height"
                                }), (0,
                                t.jsx)("input", {
                                    type: "number",
                                    step: .1,
                                    className: c,
                                    value: P.size[1],
                                    onChange: e => S(P.id, {
                                        size: [P.size[0], Number(e.target.value) || 1]
                                    })
                                })]
                            })]
                        }), (0,
                        t.jsx)("div", {
                            className: "grid grid-cols-3 gap-3",
                            children: ["X", "Y", "Z"].map( (e, s) => (0,
                            t.jsxs)("label", {
                                className: "block space-y-2",
                                children: [(0,
                                t.jsxs)("span", {
                                    className: d,
                                    children: ["Rot ", e, "°"]
                                }), (0,
                                t.jsx)("input", {
                                    type: "number",
                                    step: 1,
                                    className: c,
                                    value: Number((180 * P.rotation[s] / Math.PI).toFixed(1)),
                                    onChange: e => {
                                        let t = [...P.rotation];
                                        t[s] = (Number(e.target.value) || 0) * Math.PI / 180,
                                        S(P.id, {
                                            rotation: t
                                        })
                                    }
                                })]
                            }, e))
                        }), (0,
                        t.jsx)(l.Button, {
                            size: "md",
                            tone: "secondary",
                            block: !0,
                            icon: (0,
                            t.jsx)(s, {}),
                            onClick: () => S(P.id, {
                                rotation: (0,
                                n.flipGate)(P.rotation)
                            }),
                            children: "Flip entry side"
                        })]
                    }) : (0,
                    t.jsxs)("label", {
                        className: "block space-y-2",
                        children: [(0,
                        t.jsx)("span", {
                            className: d,
                            children: "Radius"
                        }), (0,
                        t.jsx)("input", {
                            type: "number",
                            step: .1,
                            className: c,
                            value: P.radius,
                            onChange: e => S(P.id, {
                                radius: Number(e.target.value) || 1
                            })
                        })]
                    }), (0,
                    t.jsx)(l.Button, {
                        size: "md",
                        tone: "secondary",
                        block: !0,
                        onClick: () => y(P.id),
                        children: "Duplicate"
                    }), (0,
                    t.jsx)(l.Button, {
                        size: "md",
                        tone: "destructive",
                        block: !0,
                        onClick: () => k(P.id),
                        children: "Delete"
                    })]
                }) : null, !f && R ? (0,
                t.jsx)("p", {
                    className: "font-tech text-base text-(--fdk-team-red)",
                    children: R
                }) : null]
            }), (0,
            t.jsxs)("div", {
                className: "pointer-events-none absolute inset-x-0 bottom-4 flex flex-col items-center gap-2 px-4 sm:bottom-6",
                children: [(0,
                t.jsx)("p", {
                    className: "font-tech text-[13px] tracking-[0.08em] text-(--fdk-muted)",
                    children: "Click canvas to look · WASD fly · Space/Shift up/down · Q/E turn · R/T tilt · F flip · [/] size · Ctrl+D duplicate"
                }), (0,
                t.jsx)("div", {
                    className: "pointer-events-auto flex flex-wrap items-center justify-center gap-1 border border-(--fdk-graphite) bg-(--fdk-ink)/92 p-2",
                    children: (A ? m : u).map(e => (0,
                    t.jsxs)("button", {
                        type: "button",
                        onClick: () => g(e.id),
                        className: `min-w-20 px-4 py-3 font-tech text-[13px] tracking-[0.12em] uppercase ${p === e.id ? "border border-(--fdk-orange) bg-(--fdk-ink) text-(--fdk-chalk)" : "border border-(--fdk-clear) text-(--fdk-chalk-faint) hover:text-(--fdk-chalk)"}`,
                        children: [(0,
                        t.jsx)("span", {
                            className: "block text-(--fdk-muted)",
                            children: e.key
                        }), e.label]
                    }, e.id))
                })]
            }), f ? (0,
            t.jsx)("div", {
                className: "pointer-events-auto absolute inset-0 z-40 flex items-center justify-center bg-(--fdk-ink)/55 p-4",
                children: (0,
                t.jsxs)("div", {
                    className: "w-[min(92vw,28rem)] border border-(--fdk-graphite) bg-(--fdk-ink)/96",
                    children: [(0,
                    t.jsxs)("header", {
                        className: "border-b border-(--fdk-graphite) px-6 py-5 text-center sm:px-7",
                        children: [(0,
                        t.jsx)("h2", {
                            className: "font-display text-4xl leading-none font-semibold tracking-[0.06em] text-(--fdk-chalk) uppercase sm:text-5xl",
                            children: "Unsaved"
                        }), (0,
                        t.jsx)("p", {
                            className: "mt-3 font-tech text-base text-(--fdk-muted)",
                            children: "Save before leaving, keep editing, or discard."
                        }), R ? (0,
                        t.jsx)("p", {
                            className: "mt-3 font-tech text-base text-(--fdk-team-red)",
                            children: R
                        }) : null]
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-2 p-5 sm:p-6",
                        children: [(0,
                        t.jsx)(l.Button, {
                            tone: "primary",
                            sound: "confirm",
                            size: "lg",
                            block: !0,
                            disabled: _,
                            onClick: () => void T(!0),
                            children: "Save and exit"
                        }), (0,
                        t.jsx)(l.Button, {
                            tone: "secondary",
                            size: "lg",
                            block: !0,
                            disabled: _,
                            onClick: N,
                            children: "Keep editing"
                        }), (0,
                        t.jsx)(l.Button, {
                            tone: "destructive",
                            size: "lg",
                            block: !0,
                            disabled: _,
                            onClick: E,
                            children: "Discard"
                        })]
                    })]
                })
            }) : null]
        })
    }
    ], 31502);
    var p = e.i(638507);
    let h = "w-full border border-(--fdk-graphite) bg-(--fdk-ink)/50 px-3 py-2.5 font-tech text-base text-(--fdk-chalk) outline-none focus:border-(--fdk-orange)"
      , f = "font-tech text-[13px] tracking-[0.14em] text-(--fdk-muted) uppercase"
      , g = [{
        id: "select",
        key: "1",
        label: "Select"
    }, {
        id: "placeSpawn",
        key: "2",
        label: "Spawn"
    }];
    e.s(["SpawnEditorHud", 0, function() {
        let e = (0,
        r.useSimStore)(e => e.spawnEditorDraft)
          , s = (0,
        r.useSimStore)(e => e.editorTool)
          , n = (0,
        r.useSimStore)(e => e.selectedObjectiveId)
          , i = (0,
        r.useSimStore)(e => e.spawnEditorExitPrompt)
          , o = (0,
        r.useSimStore)(e => e.setEditorTool)
          , c = (0,
        r.useSimStore)(e => e.selectObjective)
          , d = (0,
        r.useSimStore)(e => e.updateMapSpawn)
          , u = (0,
        r.useSimStore)(e => e.duplicateMapSpawn)
          , m = (0,
        r.useSimStore)(e => e.deleteMapSpawn)
          , x = (0,
        r.useSimStore)(e => e.requestSpawnEditorExit)
          , S = (0,
        r.useSimStore)(e => e.dismissSpawnEditorExit)
          , b = (0,
        r.useSimStore)(e => e.cancelSpawnEditor)
          , v = (0,
        r.useSimStore)(e => e.saveSpawnEditor)
          , [y,k] = (0,
        a.useState)(!1)
          , [w,j] = (0,
        a.useState)(null);
        if (!e)
            return null;
        let N = e.spawns.find(e => e.id === n) ?? null
          , E = (0,
        p.spawnEditorBaseline)(e.spawns) !== e.baseline;
        async function C(e=!1) {
            k(!0),
            j(null);
            let t = await v(e ? {
                exit: !0
            } : void 0);
            k(!1),
            t || j("Save failed.")
        }
        return (0,
        t.jsxs)("div", {
            className: "fdk-on-ink pointer-events-none absolute inset-0 z-20",
            children: [i ? null : (0,
            t.jsx)("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                children: (0,
                t.jsxs)("div", {
                    className: "relative size-9 opacity-70",
                    children: [(0,
                    t.jsx)("div", {
                        className: "absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-(--fdk-paper)/90"
                    }), (0,
                    t.jsx)("div", {
                        className: "absolute top-1/2 right-0 h-px w-3 -translate-y-1/2 bg-(--fdk-paper)/90"
                    }), (0,
                    t.jsx)("div", {
                        className: "absolute top-0 left-1/2 h-3 w-px -translate-x-1/2 bg-(--fdk-paper)/90"
                    }), (0,
                    t.jsx)("div", {
                        className: "absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 bg-(--fdk-paper)/90"
                    }), (0,
                    t.jsx)("div", {
                        className: "absolute top-1/2 left-1/2 size-0.75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--fdk-paper)"
                    })]
                })
            }), (0,
            t.jsxs)("div", {
                className: "pointer-events-auto absolute inset-x-0 top-0 flex items-center justify-between gap-4 border-b border-(--fdk-graphite) bg-(--fdk-ink)/88 px-6 py-4 sm:px-7",
                children: [(0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsx)("p", {
                        className: f,
                        children: "Map spawns"
                    }), (0,
                    t.jsxs)("div", {
                        className: "mt-1 flex flex-wrap items-baseline gap-3",
                        children: [(0,
                        t.jsx)("p", {
                            className: "font-display text-3xl leading-none tracking-[0.04em] text-(--fdk-chalk) uppercase sm:text-4xl",
                            children: e.name
                        }), E ? (0,
                        t.jsx)("span", {
                            className: "font-tech text-[13px] tracking-[0.14em] text-(--fdk-orange) uppercase",
                            children: "Unsaved"
                        }) : null]
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [(0,
                    t.jsx)(l.Button, {
                        size: "md",
                        tone: "primary",
                        sound: "confirm",
                        disabled: y,
                        onClick: () => void C(!1),
                        children: "Save"
                    }), (0,
                    t.jsx)(l.Button, {
                        size: "md",
                        tone: "ghost",
                        disabled: y,
                        onClick: x,
                        children: "Exit"
                    })]
                })]
            }), (0,
            t.jsxs)("div", {
                className: "pointer-events-auto absolute top-24 bottom-36 left-0 flex w-[min(92vw,28rem)] flex-col gap-4 overflow-y-auto border-r border-(--fdk-graphite) bg-(--fdk-ink)/88 px-6 py-5 sm:px-7",
                children: [(0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsx)("p", {
                        className: `mb-3 ${f}`,
                        children: "Spawns"
                    }), (0,
                    t.jsxs)("ul", {
                        className: "space-y-2",
                        children: [e.spawns.map( (e, s) => (0,
                        t.jsxs)("li", {
                            className: `flex items-center gap-2 border px-3 py-2.5 ${e.id === n ? "border-(--fdk-orange) bg-(--fdk-ink)/60" : "border-(--fdk-graphite) bg-(--fdk-ink)/30"}`,
                            children: [(0,
                            t.jsxs)("button", {
                                type: "button",
                                className: "min-w-0 flex-1 truncate text-left font-tech text-base text-(--fdk-chalk)",
                                onClick: () => {
                                    c(e.id),
                                    o("select")
                                }
                                ,
                                children: [(0,
                                t.jsx)("span", {
                                    className: "text-(--fdk-muted) tabular-nums",
                                    children: String(s + 1).padStart(2, "0")
                                }), " ", e.label]
                            }), (0,
                            t.jsx)("button", {
                                type: "button",
                                "aria-label": "Remove spawn",
                                className: "sim-focus px-2 py-1 font-tech text-base text-(--fdk-chalk-faint) outline-none hover:text-(--fdk-team-red)",
                                onClick: () => m(e.id),
                                children: "×"
                            })]
                        }, e.id)), 0 === e.spawns.length ? (0,
                        t.jsx)("li", {
                            className: "font-tech text-base text-(--fdk-muted)",
                            children: "No spawn points yet. Use 2 to place."
                        }) : null]
                    })]
                }), N ? (0,
                t.jsxs)("div", {
                    className: "space-y-3 border-t border-(--fdk-graphite) pt-4",
                    children: [(0,
                    t.jsx)("p", {
                        className: f,
                        children: "Inspector · spawn"
                    }), (0,
                    t.jsx)("div", {
                        className: "grid grid-cols-3 gap-3",
                        children: ["X", "Y", "Z"].map( (e, s) => (0,
                        t.jsxs)("label", {
                            className: "block space-y-2",
                            children: [(0,
                            t.jsx)("span", {
                                className: f,
                                children: e
                            }), (0,
                            t.jsx)("input", {
                                type: "number",
                                step: .1,
                                className: h,
                                value: N.position[s],
                                onChange: e => {
                                    let t = [...N.position];
                                    t[s] = Number(e.target.value) || 0,
                                    d(N.id, {
                                        position: t
                                    })
                                }
                            })]
                        }, e))
                    }), (0,
                    t.jsxs)("label", {
                        className: "block space-y-2",
                        children: [(0,
                        t.jsx)("span", {
                            className: f,
                            children: "Rotation"
                        }), (0,
                        t.jsx)("input", {
                            type: "number",
                            step: 1,
                            className: h,
                            value: Number((180 * N.yaw / Math.PI).toFixed(1)),
                            onChange: e => d(N.id, {
                                yaw: (Number(e.target.value) || 0) * Math.PI / 180
                            })
                        })]
                    }), (0,
                    t.jsx)(l.Button, {
                        size: "md",
                        tone: "secondary",
                        block: !0,
                        onClick: () => u(N.id),
                        children: "Duplicate"
                    }), (0,
                    t.jsx)(l.Button, {
                        size: "md",
                        tone: "destructive",
                        block: !0,
                        onClick: () => m(N.id),
                        children: "Delete"
                    })]
                }) : null, !i && w ? (0,
                t.jsx)("p", {
                    className: "font-tech text-base text-(--fdk-team-red)",
                    children: w
                }) : null]
            }), (0,
            t.jsxs)("div", {
                className: "pointer-events-none absolute inset-x-0 bottom-4 flex flex-col items-center gap-2 px-4 sm:bottom-6",
                children: [(0,
                t.jsx)("p", {
                    className: "font-tech text-[13px] tracking-[0.08em] text-(--fdk-muted)",
                    children: "Click canvas to look · WASD fly · Space/Shift up/down · Q/E rotate · Ctrl+D duplicate"
                }), (0,
                t.jsx)("div", {
                    className: "pointer-events-auto flex flex-wrap items-center justify-center gap-1 border border-(--fdk-graphite) bg-(--fdk-ink)/92 p-2",
                    children: g.map(e => (0,
                    t.jsxs)("button", {
                        type: "button",
                        onClick: () => o(e.id),
                        className: `min-w-20 px-4 py-3 font-tech text-[13px] tracking-[0.12em] uppercase ${s === e.id ? "border border-(--fdk-orange) bg-(--fdk-ink) text-(--fdk-chalk)" : "border border-(--fdk-clear) text-(--fdk-chalk-faint) hover:text-(--fdk-chalk)"}`,
                        children: [(0,
                        t.jsx)("span", {
                            className: "block text-(--fdk-muted)",
                            children: e.key
                        }), e.label]
                    }, e.id))
                })]
            }), i ? (0,
            t.jsx)("div", {
                className: "pointer-events-auto absolute inset-0 z-40 flex items-center justify-center bg-(--fdk-ink)/55 p-4",
                children: (0,
                t.jsxs)("div", {
                    className: "w-[min(92vw,28rem)] border border-(--fdk-graphite) bg-(--fdk-ink)/96",
                    children: [(0,
                    t.jsxs)("header", {
                        className: "border-b border-(--fdk-graphite) px-6 py-5 text-center sm:px-7",
                        children: [(0,
                        t.jsx)("h2", {
                            className: "font-display text-4xl leading-none font-semibold tracking-[0.06em] text-(--fdk-chalk) uppercase sm:text-5xl",
                            children: "Unsaved"
                        }), (0,
                        t.jsx)("p", {
                            className: "mt-3 font-tech text-base text-(--fdk-muted)",
                            children: "Save before leaving, keep editing, or discard."
                        }), w ? (0,
                        t.jsx)("p", {
                            className: "mt-3 font-tech text-base text-(--fdk-team-red)",
                            children: w
                        }) : null]
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-2 p-5 sm:p-6",
                        children: [(0,
                        t.jsx)(l.Button, {
                            tone: "primary",
                            sound: "confirm",
                            size: "lg",
                            block: !0,
                            disabled: y,
                            onClick: () => void C(!0),
                            children: "Save and exit"
                        }), (0,
                        t.jsx)(l.Button, {
                            tone: "secondary",
                            size: "lg",
                            block: !0,
                            disabled: y,
                            onClick: S,
                            children: "Keep editing"
                        }), (0,
                        t.jsx)(l.Button, {
                            tone: "destructive",
                            size: "lg",
                            block: !0,
                            disabled: y,
                            onClick: b,
                            children: "Discard"
                        })]
                    })]
                })
            }) : null]
        })
    }
    ], 119275)
}
, 403837, 687835, 396246, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(770703)
      , a = e.i(271645)
      , n = e.i(920755)
      , i = e.i(106258)
      , r = e.i(718284)
      , o = e.i(247638)
      , l = e.i(492926)
      , c = e.i(850274)
      , d = e.i(452358)
      , u = e.i(271780)
      , m = e.i(882902);
    e.i(573798);
    var p = e.i(624834);
    let h = "fd-connection-toast";
    function f() {
        let e = (0,
        i.useSimStore)(e => e.roomStatus)
          , s = (0,
        m.useMatchLaunch)(e => e.ended);
        return s ? (0,
        t.jsx)(x, {
            message: s
        }) : "connecting" === e.state ? (0,
        t.jsx)(S, {}) : "online" === e.state ? e.back ? (0,
        t.jsx)(b, {}) : null : "offline" !== e.state || e.message ? "reconnecting" === e.state ? (0,
        t.jsx)(g, {
            message: e.message
        }) : (0,
        t.jsx)(p.Toast, {
            className: h,
            title: e.message
        }) : null
    }
    function g({message: e}) {
        return (0,
        t.jsx)(p.Toast, {
            className: h,
            icon: "offline",
            title: e
        })
    }
    function x({message: e}) {
        return (0,
        a.useEffect)( () => {
            let t = setTimeout( () => {
                m.useMatchLaunch.getState().ended === e && m.useMatchLaunch.setState({
                    ended: null
                })
            }
            , 8e3);
            return () => clearTimeout(t)
        }
        , [e]),
        (0,
        t.jsx)(p.Toast, {
            className: h,
            title: e
        })
    }
    function S() {
        let[e,s] = (0,
        a.useState)(!1);
        return ((0,
        a.useEffect)( () => {
            let e = setTimeout( () => s(!0), 600);
            return () => clearTimeout(e)
        }
        , []),
        e) ? (0,
        t.jsx)(p.Toast, {
            className: h,
            tone: "progress",
            title: "Joining the server"
        }) : null
    }
    function b() {
        let[e,s] = (0,
        a.useState)(!0);
        return ((0,
        a.useEffect)( () => {
            let e = setTimeout( () => s(!1), 4e3);
            return () => clearTimeout(e)
        }
        , []),
        e) ? (0,
        t.jsx)(p.Toast, {
            className: h,
            tone: "success",
            title: "Back online. Progress saves again."
        }) : null
    }
    e.s(["ConnectionStatus", 0, f], 687835);
    var v = e.i(856298)
      , y = e.i(105524)
      , k = e.i(287405)
      , w = e.i(298421)
      , j = e.i(28276)
      , N = e.i(247800)
      , E = e.i(353198)
      , C = e.i(507218)
      , _ = e.i(233783)
      , L = e.i(870895)
      , R = e.i(617317)
      , M = e.i(594791)
      , P = e.i(501433)
      , I = e.i(26186)
      , D = e.i(388365)
      , A = e.i(683293)
      , O = e.i(625965)
      , T = e.i(206527);
    let F = ["start", "race"];
    function z({hidden: e}) {
        let s = (0,
        R.useMatchRace)(e => e.match)
          , n = (0,
        R.useMatchRace)(e => e.course)
          , r = (0,
        R.useMatchRace)(e => e.go)
          , l = (0,
        R.useMatchRace)(e => e.standings)
          , c = (0,
        R.useMatchRace)(e => e.roster)
          , d = (0,
        R.useMatchRace)(e => e.self)
          , u = (0,
        R.useMatchRace)(e => e.seat)
          , m = (0,
        R.useMatchRace)(e => e.seats)
          , p = (0,
        R.useMatchRace)(e => e.finish)
          , h = (0,
        R.useMatchRace)(e => e.worldOffset)
          , f = (0,
        _.useAfterMatch)(e => !!s && e.match === s && ("newMatch" === e.pressed || "flyFree" === e.pressed))
          , g = (0,
        R.useRaceScreen)(e => e.screen)
          , x = (0,
        a.useMemo)( () => n ? (0,
        j.getTimeAttackDoc)(n) : null, [n])
          , S = (0,
        a.useMemo)( () => {
            let e;
            return x ? (e = (0,
            C.hoverStartPose)(x.spawn).position,
            new P.RaceTracker([e[0], e[1], e[2]],x.gates.map(e => e.position))) : null
        }
        , [x])
          , b = (0,
        a.useMemo)( () => (0,
        R.raceSeats)({
            roster: c,
            self: d,
            seat: u
        }), [c, d, u])
          , v = (0,
        a.useRef)(null)
          , [y,k] = (0,
        a.useState)({
            rows: [],
            hud: null,
            countdown: null,
            closesInMs: null,
            held: !1,
            lag: null,
            start: !1
        })
          , $ = (0,
        a.useMemo)( () => new Map, [S]);
        (0,
        a.useEffect)( () => {
            if (!s)
                return void R.useRaceScreen.setState({
                    screen: null
                });
            let e = 0
              , t = 0
              , a = s => {
                var c, d;
                e = requestAnimationFrame(a);
                let m = M.matchRaceClock.worldSteps
                  , g = (c = {
                    course: n,
                    go: r,
                    final: !!l?.final,
                    flewOn: f
                },
                c.course ? c.final ? c.flewOn ? null : "podium" : null === c.go || m < c.go ? "start" : "race" : null);
                if (R.useRaceScreen.getState().screen !== g && R.useRaceScreen.setState({
                    screen: g
                }),
                null === r)
                    return;
                let y = (m - r) * 1e3 / R.STEPS_PER_SECOND;
                if (S && y >= 0) {
                    S.sample("self", y, M.matchRaceClock.position),
                    S.passed("self", M.matchRaceClock.gates, y);
                    let e = (r - h) / N.STEPS_PER_TICK * 1e3 / N.TICK_RATE;
                    for (let t of I.roomControl.connection?.remote?.feed.peers ?? []) {
                        if (!b.some(e => e.key === t.id))
                            continue;
                        let s = $.get(t.id) ?? -1 / 0;
                        for (let a of t.frames) {
                            if (a.t <= s)
                                continue;
                            s = a.t;
                            let n = a.t - e;
                            n >= 0 && S.sample(t.id, n, a.p)
                        }
                        $.set(t.id, s)
                    }
                }
                if (v.current) {
                    let e = (0,
                    R.formatMatchTime)(Math.max(0, p ? (p.finishStep - r) * 1e3 / R.STEPS_PER_SECOND : y));
                    v.current.textContent !== e && (v.current.textContent = e)
                }
                if (s - t < 100)
                    return;
                t = s;
                let w = (0,
                R.liveRows)(b, l, S, y)
                  , j = l?.closes ?? null
                  , E = (0,
                R.ownStanding)({
                    standings: l,
                    seat: u
                })
                  , C = y > 0 ? (d = {
                    lost: E?.outcome === "racing" ? E.lost : void 0,
                    why: E?.held,
                    restagedAt: M.matchRaceClock.restagedAt,
                    offline: "reconnecting" === i.useSimStore.getState().roomStatus.state,
                    back: M.matchRaceClock.back,
                    held: o.live.hoverLocked,
                    finished: !!p
                }).finished ? null : d.offline ? "lost" : void 0 !== d.lost && (null === d.restagedAt || d.lost >= d.restagedAt) ? "resync" === d.why ? "resync" : "lost" : d.back && d.held ? "back" : null : null;
                k({
                    rows: w,
                    hud: function(e, t, s, a, n) {
                        let i = e.find(e => e.self);
                        if (!i)
                            return null;
                        let r = e[i.position]
                          , o = null;
                        if (r && "dnf" !== r.outcome) {
                            let e = null !== r.finishMs && null !== i.finishMs ? r.finishMs - i.finishMs : (0,
                            P.trailing)(a?.racer(r.key) ?? null, a?.racer(i.key) ?? null, n);
                            null !== e && (o = {
                                gap: e,
                                place: r.position
                            })
                        }
                        return {
                            position: i.position,
                            field: e.length,
                            toLeader: i.position > 1 ? i.gap : null,
                            ahead: o,
                            gate: s + 1,
                            gates: t,
                            rows: e
                        }
                    }(w, x?.gates.length ?? 0, M.matchRaceClock.gates, S, y),
                    countdown: null === r ? null : (0,
                    A.countdownValue)((r - m) / R.STEPS_PER_SECOND),
                    closesInMs: null === j ? null : (j - m) * 1e3 / R.STEPS_PER_SECOND,
                    held: o.live.hoverLocked && y > 0 && M.matchRaceClock.gates > 0 && !p,
                    lag: C,
                    start: 0 === M.matchRaceClock.gates
                })
            }
            ;
            return e = requestAnimationFrame(a),
            () => cancelAnimationFrame(e)
        }
        , [s, n, r, l, f, S, $, b, h, p, u, x]),
        (0,
        a.useEffect)( () => () => R.useRaceScreen.setState({
            screen: null
        }), []);
        let B = !!l?.final;
        (0,
        a.useEffect)( () => {
            s && B && (0,
            _.roundOver)(s, "race")
        }
        , [s, B]),
        (0,
        a.useEffect)( () => {
            "podium" === g && "u" > typeof document && document.pointerLockElement && document.exitPointerLock()
        }
        , [g]);
        let W = B && f && null === g;
        if ((0,
        a.useEffect)( () => {
            W && (0,
            I.roomCommand)({
                type: "fly"
            })
        }
        , [W]),
        (0,
        T.useCountdownCues)(s && x ? (0,
        T.startCountdownCue)(g, y.countdown, F, e) : null),
        !s || !x || e || !g)
            return null;
        let G = E.DRONE_IDS.includes(x.droneId ?? "") ? D.RACE_DRONE_NAMES[x.droneId] : "";
        if ("start" === g)
            return (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)(O.StartStrip, {
                    race: x.name,
                    drone: G,
                    racers: (0,
                    R.startRacers)(b, m, e => e.ghost ? null : (0,
                    L.xpToLevel)(e.xp))
                }), (0,
                t.jsx)(O.StartCall, {
                    wait: null === r ? (0,
                    R.startWait)(b, m) ?? {
                        joined: b.length,
                        seats: 0
                    } : null,
                    countdown: null === r ? null : y.countdown
                })]
            });
        if ("podium" === g)
            return (0,
            t.jsx)(w.MatchEnd, {
                match: s,
                mode: "race",
                label: `${x.name} results`,
                table: (0,
                t.jsx)(O.RaceEndTable, {
                    rows: y.rows.length ? y.rows : (0,
                    R.liveRows)(b, l, S, 0),
                    best: !!p?.beatPr
                })
            });
        let U = (0,
        R.ownStanding)({
            standings: l,
            seat: u
        });
        return (0,
        t.jsxs)(t.Fragment, {
            children: [y.hud && (0,
            t.jsx)(O.RaceHud, {
                view: y.hud,
                clock: v
            }), (0,
            t.jsx)(O.Countdown, {
                value: y.countdown
            }), !p && U?.outcome === "dnf" && U.reason ? (0,
            t.jsx)(O.OutOfRace, {
                reason: U.reason
            }) : y.lag ? (0,
            t.jsx)(O.LagHold, {
                state: y.lag,
                start: y.start
            }) : y.held && (0,
            t.jsx)(O.GateResetHint, {}), p && null !== r ? (0,
            t.jsx)(O.FinishStamp, {
                place: U?.place ?? null,
                final: !!l?.final,
                timeMs: (p.finishStep - r) * 1e3 / R.STEPS_PER_SECOND,
                best: p.beatPr,
                closesInMs: y.closesInMs
            }) : null !== y.closesInMs && y.closesInMs > 0 && U?.outcome === "racing" && (0,
            t.jsx)(O.WindowChip, {
                closesInMs: y.closesInMs
            })]
        })
    }
    var $ = e.i(442497)
      , B = e.i(752834)
      , W = e.i(572219);
    function G(e) {
        return !e.settingsOpen && !e.calibrating && ("impactCinematic" === e.phase || "lessonDemoCapture" === e.phase || "showcaseCapture" === e.phase ? (e.respawn(),
        !0) : "flying" === e.phase && !e.editingLessonStep && !e.showcaseRecording && (e.activeTimeAttackId ? e.restartTimeAttack() : e.respawn(),
        !0))
    }
    var U = e.i(809886)
      , q = e.i(979392)
      , H = e.i(498475);
    function J() {
        let e = (0,
        a.useRef)(null);
        return (0,
        a.useEffect)( () => {
            let t = 0
              , s = () => {
                e.current && (e.current.style.opacity = String(q.impactPlayback.fade)),
                t = requestAnimationFrame(s)
            }
            ;
            return t = requestAnimationFrame(s),
            () => cancelAnimationFrame(t)
        }
        , []),
        (0,
        t.jsxs)("div", {
            className: "sim-flight-ui absolute inset-0 z-40 pointer-events-none",
            "aria-label": "Impact replay",
            children: [(0,
            t.jsx)("div", {
                className: "absolute inset-x-0 top-0 h-[8%] bg-(--fdk-ink)"
            }), (0,
            t.jsx)("div", {
                className: "absolute inset-x-0 bottom-0 h-[8%] bg-(--fdk-ink)"
            }), (0,
            t.jsx)("div", {
                className: "fdk-on-ink absolute right-6 bottom-[10%] pointer-events-auto",
                children: (0,
                t.jsx)(H.Button, {
                    size: "sm",
                    tone: "ghost",
                    className: "[--fdk-ghost-face:var(--fdk-ink-plate)]",
                    onClick: () => {
                        q.impactPlayback.skip = !0
                    }
                    ,
                    children: "Skip · Esc"
                })
            }), (0,
            t.jsx)("div", {
                ref: e,
                className: "absolute inset-0 bg-(--fdk-ink)",
                style: {
                    opacity: 1
                }
            })]
        })
    }
    e.s(["ImpactOverlay", 0, J], 396246);
    var K = e.i(929399)
      , V = e.i(757930)
      , X = e.i(325865)
      , Y = e.i(238967)
      , Q = e.i(735995)
      , Z = e.i(799833)
      , ee = e.i(143596)
      , et = e.i(654937)
      , es = e.i(112316)
      , ea = e.i(783558)
      , en = e.i(108431)
      , ei = e.i(954646)
      , er = e.i(849022)
      , eo = e.i(871737)
      , el = e.i(919356)
      , ec = e.i(854514)
      , ed = e.i(771607)
      , eu = e.i(814022)
      , em = e.i(673378)
      , ep = e.i(386521)
      , eh = e.i(392436);
    function ef() {
        let e = (0,
        i.useSimStore)(e => e.phase)
          , s = (0,
        i.useSimStore)(e => e.raceLobby)
          , n = (0,
        i.useSimStore)(e => e.raceRun)
          , r = (0,
        i.useSimStore)(e => e.timeAttackResult)
          , o = (0,
        i.useSimStore)(e => e.settings)
          , l = (0,
        i.useSimStore)(ed.confirmedXp)
          , c = (0,
        i.useSimStore)(e => e.droneGifts)
          , d = (0,
        i.useSimStore)(eu.flownDrone)
          , u = (0,
        i.useSimStore)(e => e.playerAccountId)
          , m = (0,
        i.useSimStore)(e => e.isAdmin)
          , p = (0,
        a.useMemo)( () => r && n ? {
            ...r,
            appearance: n.appearance,
            ghosts: n.ghosts,
            priorPbMs: r.priorPbMs ?? null
        } : null, [r, n]);
        return "raceFinishing" === e && r ? (0,
        t.jsx)(eg, {
            timeMs: r.timeMs
        }) : ("raceLobby" === e || "raceResults" === e) && s ? (0,
        t.jsx)(ep.TimeAttackScreen, {
            course: s.course,
            courseRevision: s.course.competitiveRevision ?? 1,
            initialDroneId: n?.appearance.droneId ?? s.challenge?.droneId ?? d,
            initialGhosts: !n && s.challenge ? [s.challenge] : void 0,
            skins: o.drone.skins,
            xp: l,
            droneGifts: c,
            accountId: u,
            result: "raceResults" === e ? p : null,
            admin: m,
            onSaveDefaultGhost: () => void i.useSimStore.getState().saveDefaultGhost(),
            onStart: e => i.useSimStore.getState().startTimeAttack(e),
            onRetry: () => i.useSimStore.getState().restartTimeAttack(),
            onExit: () => i.useSimStore.getState().exitTimeAttack()
        }, `${u}:${s.course.id}:${n?.id ?? s.challenge?.attemptId ?? "setup"}`) : null
    }
    function eg({timeMs: e}) {
        let[s,n] = (0,
        a.useState)(!1)
          , r = (0,
        a.useRef)(null);
        return (0,
        eh.useRaceMenuInput)(r, () => i.useSimStore.getState().revealRaceResults()),
        (0,
        a.useEffect)( () => {
            document.pointerLockElement && document.exitPointerLock();
            let e = i.useSimStore.getState().raceFinishedAt ?? performance.now()
              , t = performance.now() - e
              , s = window.setTimeout( () => n(!0), Math.max(0, 750 - t))
              , a = window.setTimeout( () => i.useSimStore.getState().revealRaceResults(), Math.max(0, 3e3 - t))
              , r = e => {
                !e.repeat && ["Enter", "Space"].includes(e.code) && (e.preventDefault(),
                i.useSimStore.getState().revealRaceResults())
            }
            ;
            return window.addEventListener("keydown", r),
            () => {
                clearTimeout(s),
                clearTimeout(a),
                window.removeEventListener("keydown", r)
            }
        }
        , []),
        (0,
        t.jsxs)("div", {
            ref: r,
            className: "fd-race-finish-beat",
            children: [(0,
            t.jsx)("strong", {
                "aria-label": "Finish time",
                children: (0,
                em.formatRaceTime)(e)
            }), s && (0,
            t.jsx)("button", {
                "data-race-primary": !0,
                type: "button",
                onClick: () => i.useSimStore.getState().revealRaceResults(),
                children: "Continue"
            })]
        })
    }
    e.i(671112);
    var ex = e.i(350737)
      , eS = e.i(323980)
      , eb = e.i(807375)
      , ev = e.i(914589)
      , ey = e.i(330220)
      , ek = e.i(383068)
      , ew = e.i(854693)
      , ej = e.i(698542)
      , eN = e.i(187765)
      , eE = e.i(787463)
      , eC = e.i(282524);
    function e_() {
        return null
    }
    e.i(720996);
    var eL = e.i(31502)
      , eR = e.i(119275)
      , eM = e.i(632997)
      , eP = e.i(532116)
      , eI = e.i(405424)
      , eD = e.i(389110)
      , eA = e.i(850321)
      , eO = e.i(796856)
      , eT = e.i(541964)
      , eF = e.i(117751);
    function ez() {
        return (0,
        t.jsx)("div", {
            role: "status",
            className: "sim-ui-surface pointer-events-auto p-6",
            children: "Loading…"
        })
    }
    let e$ = (0,
    s.default)( () => e.A(57633).then(e => e.AdminPanel), {
        loadableGenerated: {
            modules: [479877]
        },
        loading: ez
    })
      , eB = (0,
    s.default)( () => e.A(7235).then(e => e.ReplayEditor), {
        loadableGenerated: {
            modules: [410138]
        },
        loading: ez
    });
    e.s(["SimOverlay", 0, function() {
        let e, s, h, g, x, S = (0,
        eo.usePilotProfile)(e => e.id);
        e = (0,
        i.useSimStore)(e => e.droneWheelOnboardingPending),
        (0,
        a.useEffect)( () => {
            if (!e)
                return;
            let t = !1
              , s = !1
              , a = async () => {
                if (!s && !t) {
                    s = !0;
                    try {
                        let {error: e} = await (0,
                        n.createClient)().rpc("complete_drone_wheel_onboarding").abortSignal(AbortSignal.timeout(8e3));
                        if (e)
                            throw e;
                        t || i.useSimStore.setState({
                            droneWheelOnboardingPending: !1
                        })
                    } catch {} finally {
                        s = !1
                    }
                }
            }
            ;
            a();
            let r = window.setInterval(a, 15e3);
            return window.addEventListener("online", a),
            () => {
                t = !0,
                window.clearInterval(r),
                window.removeEventListener("online", a)
            }
        }
        , [e]),
        s = (0,
        i.useSimStore)(e => e.controlsOnboardingPending),
        h = (0,
        i.useSimStore)(e => e.playerAccountId),
        (0,
        a.useEffect)( () => {
            if (!s || !h)
                return;
            let e = !1
              , t = !1
              , a = async () => {
                if (!t && !e && i.useSimStore.getState().playerAccountId === h) {
                    t = !0;
                    try {
                        let t = i.useSimStore.getState().controlsChoice
                          , {error: s} = await (0,
                        n.createClient)().rpc("complete_controls_onboarding", t ? {
                            p_choice: t
                        } : {}).abortSignal(AbortSignal.timeout(8e3));
                        if (s)
                            throw s;
                        e || i.useSimStore.getState().playerAccountId !== h || i.useSimStore.setState({
                            controlsOnboardingPending: !1
                        })
                    } catch {} finally {
                        t = !1
                    }
                }
            }
            ;
            a();
            let r = window.setInterval(a, 15e3);
            return window.addEventListener("online", a),
            () => {
                e = !0,
                window.clearInterval(r),
                window.removeEventListener("online", a)
            }
        }
        , [s, h]);
        let b = (0,
        i.useSimStore)(e => e.phase)
          , N = (0,
        i.useSimStore)(e => e.settingsOpen)
          , E = (0,
        i.useSimStore)(e => e.calibrating)
          , C = (0,
        i.useSimStore)(e => e.adminOpen)
          , _ = (0,
        i.useSimStore)(e => e.isAdmin)
          , L = (0,
        i.useSimStore)(e => e.adminDraftMapId)
          , M = (0,
        i.useSimStore)(e => e.profileOpen)
          , P = (0,
        i.useSimStore)(e => e.username)
          , I = (0,
        i.useSimStore)(e => e.playerReady)
          , D = (0,
        i.useSimStore)(e => e.controlsOnboarding?.at)
          , A = (0,
        i.useSimStore)(e => e.controlsOnboardingCompleted)
          , O = !P
          , T = (0,
        i.useSimStore)(e => e.settings.graphics.showSticks)
          , F = (0,
        eO.useMatchState)(e => e.match?.phase === "warmup")
          , H = (0,
        eO.useMatchScreens)(e => !0 === e.picking)
          , ed = F || H
          , eu = (0,
        eb.useCombatActive)()
          , em = (0,
        eO.useMatchScreens)(e => e.screen)
          , ep = (0,
        m.useMatchLaunch)(e => e.active?.mode === "teamDeathmatch") || eu
          , eh = ep && (0,
        eO.matchScreenOwnsHud)(em)
          , eg = (0,
        w.useCornerCardShown)()
          , ez = (0,
        i.useSimStore)(e => e.editingLessonStep)
          , eW = (0,
        i.useSimStore)(e => e.practiceEditorDraft)
          , eG = (0,
        i.useSimStore)(e => e.spawnEditorDraft)
          , eU = (0,
        i.useSimStore)(e => e.retryLessonDemoCapture)
          , eq = (0,
        i.useSimStore)(e => e.retryShowcaseCapture)
          , eH = (0,
        i.useSimStore)(U.activeLesson)
          , eJ = (0,
        i.useSimStore)(e => e.activeTimeAttackId)
          , eK = (0,
        i.useSimStore)(e => !!e.timeAttackResult)
          , eV = (0,
        i.useSimStore)(e => "online" === e.roomStatus.state)
          , eX = (0,
        y.useMatchmaking)(e => !!e.launch)
          , eY = (0,
        i.useSimStore)(e => e.lessonStepIndex)
          , eQ = (0,
        i.useSimStore)(e => e.lessonStepDraft);
        (0,
        i.useSimStore)(e => e.showcaseEpoch);
        let eZ = "fpv" !== (0,
        j.getMenuShowcase)().camera.view;
        g = (0,
        a.useRef)(!1),
        x = (0,
        a.useRef)(!1),
        (0,
        a.useEffect)( () => {
            let e = 0
              , t = () => {
                e = requestAnimationFrame(t);
                let s = i.useSimStore.getState()
                  , a = s.settings.bindings.respawn;
                if ("none" === a.kind || s.settingsOpen || s.calibrating || B.useMapEditor.getState().active) {
                    x.current = !1,
                    g.current = !1;
                    return
                }
                let n = s.settings.bindings.keyboardOnly ? null : (0,
                eP.getRawGamepad)(s.settings.bindings.deviceId);
                if (!n) {
                    x.current = !1,
                    g.current = !1;
                    return
                }
                let r = !0 === (0,
                eM.readArmBinding)(n, a)
                  , o = (0,
                eI.raceMenuFlightActionSuppressed)("respawn", r);
                if (!x.current) {
                    x.current = !0,
                    g.current = r;
                    return
                }
                let l = r && !g.current;
                g.current = r,
                l && !o && G(s)
            }
            ;
            return e = requestAnimationFrame(t),
            () => cancelAnimationFrame(e)
        }
        , []),
        (0,
        a.useEffect)( () => {
            let e = 0
              , t = null
              , s = ""
              , a = () => {
                e = requestAnimationFrame(a);
                let n = i.useSimStore.getState()
                  , r = n.settings.bindings
                  , o = document.hidden || (0,
                W.isTypingTarget)(document.activeElement) || B.useMapEditor.getState().active || eo.usePilotProfile.getState().id || n.settingsOpen || n.calibrating || n.adminOpen || n.profileOpen || "flying" !== n.phase && "droneWheel" !== n.phase || n.activeLessonId || r.keyboardOnly || "none" === r.droneWheel.kind ? null : (0,
                eP.getRawGamepad)(r.deviceId);
                if (!o) {
                    t = null,
                    s = "";
                    return
                }
                let l = `${o.index}:${o.id}`
                  , c = !0 === (0,
                eM.readArmBinding)(o, r.droneWheel)
                  , d = (0,
                eI.raceMenuFlightActionSuppressed)("droneWheel", c)
                  , u = s === l && !1 === t && c;
                s = l,
                t = c,
                u && !d && ("droneWheel" === n.phase && "mouse" === n.droneWheelTutorial ? n.advanceDroneWheelTutorial() : "droneWheel" !== n.phase || n.droneWheelTutorial ? n.openDroneWheel() : n.closeDroneWheel())
            }
            ;
            return e = requestAnimationFrame(a),
            () => cancelAnimationFrame(e)
        }
        , []),
        (0,
        a.useEffect)( () => {
            "flying" === b && (0,
            W.blurFormControl)()
        }
        , [b]),
        (0,
        a.useEffect)( () => {
            if (N || E || S || M || O)
                return;
            let e = i.useSimStore.getState().phase;
            "lessonDone" !== e && "courseDone" !== e && (0,
            W.blurFormControl)()
        }
        , [N, E, M, O, S]),
        (0,
        a.useEffect)( () => {
            let e = e => {
                if ((0,
                ei.isHomeTransitionLocked)() || B.useMapEditor.getState().active || eo.usePilotProfile.getState().id || (0,
                W.isTypingTarget)(e.target) && "Escape" !== e.code)
                    return;
                let t = i.useSimStore.getState();
                if (t.profileOpen || "droneWheel" === t.phase || "raceLobby" === t.phase || "raceFinishing" === t.phase || "raceResults" === t.phase)
                    return;
                if (e.code === t.settings.bindings.keyboard.droneWheel && "flying" === t.phase && !t.activeLessonId && !t.settingsOpen && !t.calibrating && !t.adminOpen && !t.profileOpen) {
                    e.preventDefault(),
                    e.repeat || t.openDroneWheel();
                    return
                }
                if ("Escape" === e.code && "menu" === t.phase && !t.profileOpen && !t.adminOpen && !t.calibrating && !t.editorLibraryOpen)
                    return;
                if ("Escape" === e.code && (0,
                W.blurFormControl)(),
                "impactCinematic" === t.phase) {
                    e.code === t.settings.bindings.keyboard.respawn ? e.repeat || G(t) : ("Escape" === e.code || "Space" === e.code) && (q.impactPlayback.skip = !0),
                    e.preventDefault();
                    return
                }
                if (!t.username)
                    return void e.preventDefault();
                if ("lessonDemoReview" === t.phase || "showcaseReview" === t.phase || "replayEditor" === t.phase) {
                    if ("Space" === e.code) {
                        e.preventDefault(),
                        t.replayEditor?.source !== "pr" && t.saveReplayEditor();
                        return
                    }
                    "Escape" === e.code && (e.preventDefault(),
                    t.cancelReplayEditor());
                    return
                }
                let s = "lessonDemoCapture" === t.phase
                  , a = "showcaseCapture" === t.phase;
                if (s) {
                    if ("Enter" === e.code) {
                        e.preventDefault(),
                        t.finishLessonDemoCapture();
                        return
                    }
                    if ("Escape" === e.code) {
                        e.preventDefault(),
                        t.cancelLessonDemoCapture();
                        return
                    }
                    e.code === t.settings.bindings.keyboard.respawn && (e.preventDefault(),
                    G(t));
                    return
                }
                if (a) {
                    if ("Enter" === e.code) {
                        e.preventDefault(),
                        t.finishShowcaseCapture();
                        return
                    }
                    if ("Escape" === e.code) {
                        e.preventDefault(),
                        t.cancelShowcaseCapture();
                        return
                    }
                    e.code === t.settings.bindings.keyboard.respawn && (e.preventDefault(),
                    G(t));
                    return
                }
                if ("practiceEditor" === t.phase) {
                    if ("Escape" === e.code) {
                        if (e.preventDefault(),
                        document.pointerLockElement)
                            return void document.exitPointerLock();
                        if (t.practiceEditorExitPrompt)
                            return void t.dismissPracticeEditorExit();
                        t.requestPracticeEditorExit()
                    }
                    return
                }
                if ("spawnEditor" === t.phase) {
                    if ("Escape" === e.code) {
                        if (e.preventDefault(),
                        document.pointerLockElement)
                            return void document.exitPointerLock();
                        if (t.spawnEditorExitPrompt)
                            return void t.dismissSpawnEditorExit();
                        t.requestSpawnEditorExit()
                    }
                    return
                }
                "Escape" === e.code ? (e.preventDefault(),
                t.profileOpen) ? t.closeProfile() : t.calibrating ? t.requestLeaveCalibration() : t.settingsOpen ? t.requestCloseSettings() : t.adminOpen ? t.closeAdmin() : t.editingLessonStep && "lessonStep" === t.phase ? t.cancelLessonStepEdit() : "lessonSelect" === t.phase ? t.closeLessons() : "replaySelect" === t.phase ? t.closeReplays() : "lessonStep" === t.phase || "lessonLoading" === t.phase ? t.openLessons() : "lessonFinishing" === t.phase ? t.revealLessonComplete() : "lessonDone" === t.phase || "courseDone" === t.phase ? t.openLessons() : "flying" === t.phase ? t.pause() : "paused" === t.phase && t.resume() : e.code === t.settings.bindings.keyboard.respawn && G(t) && e.preventDefault()
            }
            ;
            return window.addEventListener("keydown", e),
            () => window.removeEventListener("keydown", e)
        }
        , []);
        let e0 = N || E
          , e1 = C || !!S
          , e2 = "lessonDemoCapture" === b || "showcaseCapture" === b
          , e4 = "practiceEditor" === b
          , e3 = "spawnEditor" === b
          , e7 = "lessonDemoReview" === b
          , e6 = "showcaseReview" === b
          , e8 = "replayEditor" === b
          , e5 = "lessonDone" === b || "courseDone" === b
          , e9 = (0,
        i.useSimStore)(e => e.captureReview?.cameraView)
          , te = e7 || e6 || e8
          , tt = "flying" === b || "lessonFinishing" === b || e2
          , ts = "menu" === b || "lessonSelect" === b || "replaySelect" === b
          , ta = tt && ep && !e2 && !e0 && !e1 && (null === em || "deciding" === em || "start" === em)
          , tn = ts && I && !e1 && !M && !O
          , ti = tn && !A && "setup" !== D;
        !function(e) {
            let[t] = (0,
            a.useState)( () => 0 === i.useSimStore.getState().totalFlightTimeMs);
            (0,
            a.useEffect)( () => {
                if (!t)
                    return;
                let e = (0,
                r.trackFirstSession)()
                  , s = i.useSimStore.subscribe( (e, t) => {
                    t.controlsOnboarding?.at === "ask" && e.controlsOnboarding?.at === "talk" && (0,
                    r.recordFirstSessionStep)("controls_answered")
                }
                )
                  , a = window.setInterval( () => {
                    if ((0,
                    r.firstSessionStepSeen)("first_takeoff"))
                        return window.clearInterval(a);
                    "flying" === i.useSimStore.getState().phase && o.live.telemetry.armed && !o.live.grounded && (0,
                    r.recordFirstSessionStep)("first_takeoff")
                }
                , 250);
                return () => {
                    s(),
                    window.clearInterval(a),
                    e()
                }
            }
            , [t]),
            (0,
            a.useEffect)( () => {
                t && e && (0,
                r.recordFirstSessionStep)("menu_reached")
            }
            , [t, e])
        }((0,
        a.useContext)(eD.MenuVisibility) && ts && !e1 && !M && !O && A);
        let tr = !!eJ
          , to = (0,
        R.useMatchRace)(e => !!e.match)
          , tl = (0,
        R.useRaceScreen)(e => "podium" === e.screen)
          , tc = "raceLobby" === b || "raceFinishing" === b || "raceResults" === b
          , td = ez && eQ ? eQ.demo.camera : eH?.steps[eY]?.demo.camera
          , tu = (("lessonStep" === b || e7) && td?.view !== "fpv" && ("lessonStep" !== b || ez) || "lessonDone" === b || "courseDone" === b || e8 && "thirdPerson" === e9 || e6 && eZ) && !e0 && !e1 && !e2 && !e4 && !e3 && !M && !O;
        return (0,
        t.jsxs)(ei.HomeTransitionBoundary, {
            children: [(0,
            t.jsx)(K.SlowMoOverlay, {}), !tt || e2 || e0 || e1 ? null : (0,
            t.jsx)(f, {}), !tt || e2 || e0 ? null : (0,
            t.jsx)(ek.RaceLeaveWarning, {}), (0,
            t.jsx)(v.QueueChipHost, {
                hidden: ts || e2 || (e0 || e1) && !eX,
                launcher: tt && !e2 && !e0 && !e1 && !M && !O && !to
            }), (0,
            t.jsx)(k.DroneInspectHost, {
                hidden: e2 || e1
            }), (0,
            t.jsx)(w.AfterMatchHost, {
                hidden: e2 || ts,
                belowScore: ta
            }), (0,
            t.jsx)(eT.DronePickHost, {
                hidden: e2 || ts || e0 || e1
            }), (0,
            t.jsx)(eF.MatchResultsHost, {
                hidden: e2 || ts || e0 || e1
            }), (0,
            t.jsx)(ex.PlayLauncher, {
                visible: tt && !e2 && !e0 && !e1 && !M && !O && !to
            }), _ && L && "menu" !== b && (0,
            t.jsx)(p.Toast, {
                className: "sim-admin-draft-banner",
                title: "DRAFT TEST",
                detail: "Offline"
            }), (0,
            t.jsx)(e_, {}), (0,
            t.jsx)(d.AchievementReward, {
                visible: !tc && !e5 && ("flying" === b || "lessonFinishing" === b) && !e0 && !e1 && !M && !O && !e2 && !te && !e4 && !e3
            }), (0,
            t.jsx)(c.DroneUnlockReward, {
                visible: !tc && !e5 && !eK && !e0 && !e1 && !e2 && !e4 && !e3 && !O && !ti
            }), e0 || e1 || e2 || e4 || e3 || O || "flying" !== b && "lessonFinishing" !== b && "impactCinematic" !== b ? null : (0,
            t.jsx)(c.PilotFlightProgress, {}), e0 || e1 || "flying" !== b || tr || eK || eg ? null : (0,
            t.jsx)("div", {
                className: "fd-chain-xp-position",
                "data-placement": eH ? "alternate" : "score",
                children: (0,
                t.jsx)(u.ChainXpReward, {})
            }), eH ? null : (0,
            t.jsx)(Y.GlobalChat, {
                visible: "flying" === b && !ed && eV && !e0 && !e1 && !M && !O
            }), "impactCinematic" === b ? (0,
            t.jsx)(J, {}) : null, (0,
            t.jsxs)("div", {
                className: "pointer-events-none absolute inset-0 z-10",
                children: [e4 ? (0,
                t.jsx)(eL.PracticeEditorHud, {}) : null, e3 ? (0,
                t.jsx)(eR.SpawnEditorHud, {}) : null, !tt || e2 || tl ? null : (0,
                t.jsx)(X.Hud, {
                    showSticks: T,
                    combat: ep
                }), tt && ep && !e2 ? (0,
                t.jsx)(eS.CombatHud, {
                    hidden: !ta
                }) : null, tt && to && !e2 ? (0,
                t.jsx)(z, {
                    hidden: e0 || e1
                }) : null, !tt || e2 || e0 || e1 ? null : (0,
                t.jsx)(eA.FlightNotificationBadge, {}), "flying" !== b || ep || eH || tr || eK || e0 || e1 || M || O || eg ? null : (0,
                t.jsx)(Q.ComboHud, {}), !tt || e2 || L || eH || tr || e0 || e1 || to ? null : (0,
                t.jsx)(V.WorldNavigationHud, {
                    showPlayers: eV && !eK && !eh && !ed
                }), !tt || e2 || !to || tl || e0 || e1 ? null : (0,
                t.jsx)(V.WorldNavigationHud, {
                    showPlayers: !1,
                    pois: !1
                }), "showcaseCapture" === b ? (0,
                t.jsx)(X.HudReticle, {}) : null, !tt || !tr || to || e2 || e0 ? null : (0,
                t.jsx)(ev.TimeAttackTimer, {}), tt && eH && !e0 && !e2 ? (0,
                t.jsx)(Z.LessonProgress, {
                    lesson: eH
                }) : null, !tt || e2 || e0 || e1 ? null : (0,
                t.jsx)(ey.MarkerHoldHint, {}), tu && !e5 ? (0,
                t.jsx)(eC.OrbitHint, {
                    placement: "bottom-right"
                }) : null, e2 && !e0 ? (0,
                t.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-[calc(7rem+var(--admin-bar-h))] flex justify-center",
                    children: (0,
                    t.jsxs)("p", {
                        className: "sim-capture-hint",
                        children: [(0,
                        t.jsx)("span", {
                            "aria-hidden": !0
                        }), " Recording your line ", (0,
                        t.jsx)("kbd", {
                            children: "Enter"
                        }), " to stop"]
                    })
                }) : null, te && !e0 ? (0,
                t.jsx)(eB, {
                    showRecordAgain: e7 || e6,
                    onRecordAgain: e6 ? eq : e7 ? eU : void 0
                }) : null, "lessonLoading" === b ? (0,
                t.jsx)($.LessonLoading, {}) : null, "lessonStep" !== b || e0 || e1 ? null : (0,
                t.jsx)(es.LessonStepPanel, {}), !ts || e1 || M || O ? null : (0,
                t.jsx)(ea.MainMenu, {
                    hushed: ti
                }), tn ? (0,
                t.jsx)(en.ControlsOnboarding, {}) : null, "paused" !== b || e0 || e1 ? null : (0,
                t.jsxs)("div", {
                    className: "pointer-events-auto absolute inset-0 z-30 flex items-center justify-center bg-(--fdk-scrim) p-8",
                    children: [(0,
                    t.jsx)(el.PauseMenu, {}), (0,
                    t.jsxs)("div", {
                        className: "fd-pause-bell fd-pause-social",
                        children: [(0,
                        t.jsx)(ec.LobbyFriends, {}), (0,
                        t.jsx)(eA.NotificationBell, {
                            placement: "pause"
                        })]
                    })]
                }), "lessonDone" !== b || e0 || e1 || M || O ? null : (0,
                t.jsx)(ee.LessonComplete, {}), "courseDone" !== b || e0 || e1 || M || O ? null : (0,
                t.jsx)(et.CourseComplete, {}), (0,
                t.jsx)(ef, {}), e0 && "menu" !== b && "lessonSelect" !== b && "replaySelect" !== b ? (0,
                t.jsx)(ej.SettingsPanel, {}) : null, M ? (0,
                t.jsx)(ew.ProfilePanel, {}) : null, O ? (0,
                t.jsx)(eN.UsernameGate, {}) : null, C || ez || eW || eG ? (0,
                t.jsx)("div", {
                    className: C ? "contents" : "hidden",
                    children: _ ? (0,
                    t.jsx)(e$, {}) : null
                }) : null]
            }), (0,
            t.jsx)(er.PilotProfileModal, {}), "droneWheel" !== b || O ? null : (0,
            t.jsx)(l.DroneWheel, {}), _ && !ti ? (0,
            t.jsx)(eE.AdminBar, {}) : null]
        })
    }
    ], 403837)
}
, 929399, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(271645)
      , a = e.i(663011);
    e.i(671112),
    e.s(["SlowMoOverlay", 0, function() {
        let e = (0,
        s.useRef)(null);
        return (0,
        s.useEffect)( () => {
            let t = 0
              , s = -1
              , n = () => {
                let i = e.current
                  , r = (0,
                a.slowMoIntensity)(a.timeWarp.scale);
                i && r !== s && (s = r,
                i.style.display = r > 0 ? "" : "none",
                i.style.setProperty("--slowmo", r.toFixed(3))),
                t = requestAnimationFrame(n)
            }
            ;
            return t = requestAnimationFrame(n),
            () => cancelAnimationFrame(t)
        }
        , []),
        (0,
        t.jsxs)("div", {
            ref: e,
            className: "fd-slowmo",
            style: {
                display: "none"
            },
            "aria-hidden": !0,
            children: [(0,
            t.jsx)("div", {
                className: "fd-slowmo-grade"
            }), (0,
            t.jsx)("div", {
                className: "fd-slowmo-streaks"
            }), (0,
            t.jsx)("div", {
                className: "fd-slowmo-vignette"
            })]
        })
    }
    ])
}
, 787463, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(106258)
      , a = e.i(752834)
      , n = e.i(647163)
      , i = e.i(954646);
    e.s(["AdminBar", 0, function() {
        let e = (0,
        s.useSimStore)(e => e.adminOpen)
          , r = (0,
        s.useSimStore)(e => e.openAdmin)
          , o = (0,
        s.useSimStore)(e => e.closeAdmin)
          , l = (0,
        s.useSimStore)(e => e.phase);
        return (0,
        a.useMapEditor)(e => e.active) || "lessonDemoCapture" === l || "showcaseCapture" === l || "practiceEditor" === l || "spawnEditor" === l ? null : (0,
        t.jsx)("div", {
            className: "sim-admin-bar pointer-events-auto absolute inset-x-0 bottom-0 z-50 flex h-8 items-center justify-end border-t border-(--fdk-graphite) bg-(--fdk-ink)/94 px-3",
            role: "region",
            "aria-label": "Admin",
            children: (0,
            t.jsx)("button", {
                type: "button",
                onClick: () => (0,
                i.requestHomeExit)(e ? o : r),
                className: (0,
                n.cn)("sim-focus h-6 cursor-pointer px-3 font-display text-[11px] tracking-[0.16em] text-(--fdk-chalk) uppercase outline-none", e ? "border border-(--fdk-orange) bg-(--fdk-ink) text-(--fdk-paper)" : "border border-(--fdk-graphite) bg-(--fdk-ink) hover:border-(--fdk-orange)"),
                children: e ? "Close" : "Admin"
            })
        })
    }
    ])
}
, 293190, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(657688)
      , a = e.i(647163);
    e.i(573798);
    var n = e.i(244144)
      , i = e.i(516238);
    e.s(["InstructorPresence", 0, function({src: e="/sim/characters/Dummy-FingerGun.webp", message: r="Welcome to the playground. Let's make a few mistakes worth learning from.", showContinueHint: o=!1, forceVisible: l=!1, speechOpacity: c=1, actions: d, afterSpeech: u, className: m}) {
        return (0,
        t.jsx)("div", {
            className: (0,
            a.cn)("sim-ui-surface sim-instructor-lesson", l ? "block" : "hidden md:block", m),
            children: (0,
            t.jsxs)("div", {
                className: "sim-instructor-lesson__row",
                children: [(0,
                t.jsx)(s.default, {
                    src: e,
                    alt: "",
                    width: 1024,
                    height: 1536,
                    priority: !0,
                    draggable: !1,
                    className: "sim-instructor-lesson__portrait"
                }), (0,
                t.jsx)("div", {
                    className: "sim-instructor-lesson__speech",
                    style: {
                        opacity: c,
                        transition: "opacity 200ms ease-out"
                    },
                    children: (0,
                    t.jsxs)(i.SpeechBubble, {
                        tail: "left",
                        className: "sim-speech",
                        children: [(0,
                        t.jsx)("p", {
                            children: r
                        }), d ? (0,
                        t.jsx)("div", {
                            className: "sim-speech__actions",
                            children: d
                        }) : null, o ? (0,
                        t.jsxs)("p", {
                            className: "sim-speech__hint",
                            children: [(0,
                            t.jsx)("span", {
                                children: "Click"
                            }), " to continue ", (0,
                            t.jsx)(n.Icon, {
                                name: "arrow-right",
                                size: 14
                            })]
                        }) : null]
                    })
                }), u ? (0,
                t.jsx)("div", {
                    className: "sim-instructor-lesson__after",
                    children: u
                }) : null]
            })
        })
    }
    ])
}
, 631654, 583769, e => {
    "use strict";
    var t = e.i(271645)
      , s = e.i(920755)
      , a = e.i(263783);
    e.s(["useNotificationSync", 0, function() {
        (0,
        t.useEffect)( () => {
            let e, {data: {subscription: t}} = (0,
            s.createClient)().auth.onAuthStateChange( (t, s) => {
                let n = s?.user && !s.user.is_anonymous ? s.user.id : null;
                n !== e && (e = n,
                a.useNotifications.getState().reset(n),
                n && a.useNotifications.getState().refreshSummary())
            }
            );
            return () => {
                t.unsubscribe(),
                a.useNotifications.getState().reset(null)
            }
        }
        , [])
    }
    ], 631654);
    var n = e.i(843476)
      , i = e.i(412864)
      , r = e.i(106258)
      , o = e.i(37220)
      , l = e.i(468483)
      , c = e.i(737069);
    e.s(["SharedMapLaunch", 0, function({children: e}) {
        let[s,a] = (0,
        t.useState)({
            ready: !1,
            error: ""
        })
          , [d,u] = (0,
        t.useState)(0);
        return ((0,
        t.useEffect)( () => {
            let e = !1
              , t = new URLSearchParams(window.location.search).get("map");
            return async function() {
                try {
                    if (null !== t) {
                        let s = await (0,
                        i.loadSharedMap)(t);
                        if (e)
                            return;
                        (0,
                        c.recordMapView)(s.id);
                        let a = s.aliasOf ? `user:${s.id}` : (0,
                        i.registerMapForPlay)(s);
                        o.useMenuScene.getState().stageMapSelection(a);
                        let n = new URL(window.location.href);
                        n.searchParams.delete("map"),
                        window.history.replaceState(window.history.state, "", n)
                    }
                    e || a({
                        ready: !0,
                        error: ""
                    })
                } catch (t) {
                    e || a({
                        ready: !1,
                        error: t instanceof Error ? t.message : "Could not load this map."
                    })
                }
            }(),
            () => {
                e = !0
            }
        }
        , [d]),
        s.ready) ? e : (0,
        n.jsx)(l.SharedMapStatus, {
            error: s.error,
            onRetry: () => {
                a({
                    ready: !1,
                    error: ""
                }),
                u(e => e + 1)
            }
            ,
            onExit: () => {
                let e = new URL(window.location.href);
                e.searchParams.delete("map"),
                window.history.replaceState(window.history.state, "", e),
                r.useSimStore.getState().returnToMenu(),
                r.useSimStore.setState({
                    editorLibraryOpen: !1
                }),
                a({
                    ready: !0,
                    error: ""
                })
            }
        })
    }
    ], 583769)
}
, 645439, e => {
    "use strict";
    var t = e.i(271645)
      , s = e.i(920755)
      , a = e.i(451598)
      , n = e.i(894969);
    e.s(["useInventorySync", 0, function() {
        (0,
        t.useEffect)( () => {
            let e, t, {data: {subscription: i}} = (0,
            s.createClient)().auth.onAuthStateChange( (s, i) => {
                let r = i?.user.id ?? null
                  , o = i?.user.email_confirmed_at && !i.user.is_anonymous ? r : null;
                o !== t && (t = o,
                (0,
                a.setCreditAccount)(o)),
                r !== e && (e = r,
                n.useInventory.getState().reset(r),
                r ? n.useInventory.getState().refresh() : n.useInventory.setState({
                    status: "error",
                    error: n.SIGN_IN_TO_LOAD
                }))
            }
            ), r = () => {
                e && "visible" === document.visibilityState && n.useInventory.getState().refresh()
            }
            ;
            return window.addEventListener("focus", r),
            document.addEventListener("visibilitychange", r),
            () => {
                (0,
                a.setCreditAccount)(null),
                i.unsubscribe(),
                window.removeEventListener("focus", r),
                document.removeEventListener("visibilitychange", r)
            }
        }
        , [])
    }
    ])
}
, 737069, e => {
    "use strict";
    var t = e.i(50270)
      , s = e.i(920755)
      , a = e.i(613105);
    let n = t.z.number().nonnegative()
      , i = t.z.object({
        upvotes: n,
        downvotes: n,
        myVote: t.z.union([t.z.literal(-1), t.z.literal(0), t.z.literal(1)])
    })
      , r = i.extend({
        id: t.z.string().uuid(),
        ownerId: t.z.string().uuid(),
        name: t.z.string(),
        creator: t.z.string(),
        createdAt: t.z.string(),
        updatedAt: t.z.string(),
        views: n,
        aliasOf: t.z.string().nullable().optional()
    })
      , o = t.z.object({
        maps: t.z.array(r),
        hasMore: t.z.boolean()
    })
      , l = t.z.object({
        views: n,
        upvotes: n,
        downvotes: n,
        pilots: n,
        returningPilots: n,
        flightMs: n,
        daily: t.z.array(t.z.object({
            day: t.z.string(),
            views: n,
            flightMs: n
        }))
    });
    function c(e) {
        return Error(["PGRST202", "PGRST205", "42883", "42P01"].includes(e.code ?? "") ? "Community maps are temporarily unavailable. Please try again soon." : e.message)
    }
    async function d(e, t, a="", n=0) {
        let {data: i, error: r} = await (0,
        s.createClient)().rpc("browse_community_maps", {
            p_sort: e,
            p_period: t,
            p_query: a,
            p_offset: n,
            p_aliases: !0
        });
        if (r)
            throw c(r);
        return o.parse(i)
    }
    async function u(e, t) {
        let {data: a, error: n} = await (0,
        s.createClient)().rpc("vote_community_map", {
            p_map_id: e,
            p_value: t
        });
        if (n)
            throw c(n);
        return i.parse(a)
    }
    async function m(e, t) {
        let n = (0,
        s.createClient)().rpc("get_community_map", {
            p_map_id: e,
            p_aliases: !0
        })
          , {data: i, error: o} = await n.abortSignal((0,
        a.withDeadline)(t, 1e4));
        if (o)
            throw c(o);
        if (!i)
            throw Error("This map is no longer available.");
        return r.parse(i)
    }
    async function p(e) {
        try {
            let {data: t, error: a} = await (0,
            s.createClient)().rpc("view_community_map", {
                p_map_id: e
            });
            return !a && !0 === t
        } catch {
            return !1
        }
    }
    async function h(e) {
        let {data: t, error: a} = await (0,
        s.createClient)().rpc("community_map_analytics", {
            p_map_id: e
        });
        if (a)
            throw c(a);
        return l.parse(t)
    }
    e.s(["MAP_PERIODS", 0, {
        day: "Past 24 hours",
        week: "Past week",
        month: "Past month",
        all: "All time"
    }, "browseCommunityMaps", 0, d, "loadCommunityMap", 0, m, "loadMapAnalytics", 0, h, "mapCount", 0, function(e) {
        return new Intl.NumberFormat("en",{
            notation: e >= 1e4 ? "compact" : "standard",
            maximumFractionDigits: 1
        }).format(e)
    }
    , "mapFlightTime", 0, function(e) {
        if (0 === e)
            return "0 min";
        if (e < 6e4)
            return "<1 min";
        let t = Math.floor(e / 6e4);
        return t < 60 ? `${t} min` : `${Math.floor(t / 60)}h ${t % 60}m`
    }
    , "recordMapView", 0, p, "voteCommunityMap", 0, u])
}
, 233617, e => {
    "use strict";
    var t = e.i(235199)
      , s = e.i(572219)
      , a = e.i(12746);
    let n = new Set(["KeyW", "KeyS", "KeyA", "KeyD", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]);
    class i {
        pressed = new Set;
        throttle = 0;
        roll = 0;
        pitch = 0;
        yaw = 0;
        armPresses = 0;
        enabled = !1;
        armCode = "Space";
        interactCode = "KeyE";
        interactDown = !1;
        interactPress = !1;
        attach() {
            let e = e => {
                if (!this.enabled || (0,
                s.isTypingTarget)(e.target))
                    return;
                let t = n.has(e.code)
                  , a = e.code === this.armCode
                  , i = e.code === this.interactCode;
                if (t || a || i) {
                    if (!i || this.interactDown || e.repeat || (this.interactPress = !0),
                    i && (this.interactDown = !0),
                    e.repeat)
                        return void e.preventDefault();
                    a && this.armPresses++,
                    t && this.pressed.add(e.code),
                    e.preventDefault()
                }
            }
              , t = e => {
                e.code === this.interactCode && (this.interactDown = !1),
                n.has(e.code) && (this.pressed.delete(e.code),
                this.enabled && !(0,
                s.isTypingTarget)(e.target) && e.preventDefault())
            }
              , a = () => {
                this.pressed.clear(),
                this.interactDown = this.interactPress = !1
            }
            ;
            return window.addEventListener("keydown", e),
            window.addEventListener("keyup", t),
            window.addEventListener("blur", a),
            window.addEventListener("focusin", a),
            () => {
                window.removeEventListener("keydown", e),
                window.removeEventListener("keyup", t),
                window.removeEventListener("blur", a),
                window.removeEventListener("focusin", a),
                this.clearHeldSticks()
            }
        }
        setEnabled(e) {
            this.enabled !== e && (this.enabled = e,
            e || (this.clearHeldSticks(),
            this.armPresses = 0))
        }
        setArmCode(e) {
            this.armCode = e
        }
        setInteractCode(e) {
            e !== this.interactCode && (this.interactDown = this.interactPress = !1),
            this.interactCode = e
        }
        get interactHeld() {
            return this.interactDown
        }
        takeInteract() {
            let e = this.interactDown || this.interactPress;
            return this.interactPress = !1,
            e
        }
        takeArmPresses() {
            let e = this.armPresses;
            return this.armPresses = 0,
            e
        }
        reset() {
            this.throttle = 0,
            this.roll = 0,
            this.pitch = 0,
            this.yaw = 0,
            this.pressed.clear(),
            this.interactDown = this.interactPress = !1
        }
        clearHeldSticks() {
            this.pressed.clear(),
            this.interactDown = this.interactPress = !1,
            this.roll = 0,
            this.pitch = 0,
            this.yaw = 0
        }
        ramp(e, t, s) {
            let a = (0 === t ? 6 : 4) * s;
            return e < t ? Math.min(t, e + a) : e > t ? Math.max(t, e - a) : e
        }
        step(e, t) {
            let s = e => +!!this.pressed.has(e)
              , n = s("KeyW") - s("KeyS");
            this.throttle = (0,
            a.clamp)(this.throttle + .9 * n * e, 0, 1);
            let i = (s("KeyD") - s("KeyA")) * .6
              , r = (s("ArrowRight") - s("ArrowLeft")) * .6
              , o = (s("ArrowDown") - s("ArrowUp")) * .6;
            this.yaw = this.ramp(this.yaw, i, e),
            this.roll = this.ramp(this.roll, r, e),
            this.pitch = this.ramp(this.pitch, o, e),
            t.throttle = this.throttle,
            t.roll = this.roll,
            t.pitch = this.pitch,
            t.yaw = this.yaw,
            t.source = "keyboard"
        }
    }
    e.s(["KeyboardController", 0, i, "keyboardHelp", 0, function(e) {
        return [{
            keys: ["W", "S"],
            action: "Throttle"
        }, {
            keys: ["A", "D"],
            action: "Yaw"
        }, {
            keys: ["↑", "↓"],
            action: "Pitch"
        }, {
            keys: ["←", "→"],
            action: "Roll"
        }, {
            keys: [(0,
            t.formatKeyCode)(e.arm)],
            action: "Arm"
        }, {
            keys: [(0,
            t.formatKeyCode)(e.respawn)],
            action: "Respawn"
        }, {
            keys: ["Esc"],
            action: "Pause"
        }]
    }
    ])
}
, 164372, e => {
    "use strict";
    let t = {
        obscuredLeft: 0
    };
    e.s(["clearFraming", 0, function() {
        t.obscuredLeft = 0
    }
    , "framing", 0, t])
}
, 109242, e => {
    "use strict";
    var t = e.i(768834)
      , s = e.i(920755);
    let a = (0,
    t.create)( () => ({
        ownerId: null,
        maps: [],
        error: "",
        loading: !1
    }))
      , n = 0;
    async function i(e) {
        let t = ++n
          , i = a.getState();
        a.setState({
            ownerId: e,
            maps: i.ownerId === e ? i.maps : [],
            error: "",
            loading: !0
        });
        try {
            let {data: i, error: r} = await (0,
            s.createClient)().from("sim_personal_maps").select("id,owner_id,name,revision,updated_at,owner_unlimited,alias_of").eq("owner_id", e).order("updated_at", {
                ascending: !1
            });
            if (r)
                throw r;
            if (t !== n)
                return;
            a.setState({
                loading: !1,
                maps: (i ?? []).map(e => ({
                    id: e.id,
                    ownerId: e.owner_id,
                    name: e.name,
                    revision: e.revision,
                    updatedAt: e.updated_at,
                    unlimited: !0 === e.owner_unlimited,
                    ...e.alias_of ? {
                        aliasOf: e.alias_of
                    } : {}
                }))
            })
        } catch {
            t === n && a.setState({
                loading: !1,
                error: "Your maps could not load. Try again."
            })
        }
    }
    e.s(["preloadPersonalMapLibrary", 0, i, "resetPersonalMapLibrary", 0, function() {
        n++,
        a.setState({
            ownerId: null,
            maps: [],
            error: "",
            loading: !1
        })
    }
    , "usePersonalMapLibrary", 0, a])
}
, 971301, e => {
    "use strict";
    var t = e.i(768834)
      , s = e.i(552627)
      , a = e.i(106258)
      , n = e.i(752834);
    let i = (0,
    t.create)( () => ({
        draft: null,
        name: "",
        testDefinition: null
    }));
    e.s(["closeOfficialMapEditor", 0, function() {
        i.setState({
            draft: null,
            name: "",
            testDefinition: null
        }),
        n.useMapEditor.setState({
            active: !1
        })
    }
    , "openOfficialMapEditor", 0, function(e) {
        a.useSimStore.getState().isAdmin && (i.setState({
            draft: e,
            name: e.name,
            testDefinition: null
        }),
        n.useMapEditor.getState().open(e.document, !0))
    }
    , "testOfficialMapDraft", 0, function(e) {
        if (!a.useSimStore.getState().isAdmin)
            return;
        let {draft: t, name: r} = i.getState();
        if (!t)
            return;
        let o = (0,
        s.officialMapDefinition)({
            ...t.map,
            name: r
        }, e ?? t.document, t.revision ?? void 0);
        i.setState({
            testDefinition: o
        }),
        n.useMapEditor.setState({
            active: !1
        }),
        a.useSimStore.getState().playOfficialDraft(o)
    }
    , "useOfficialMapAuthoring", 0, i])
}
, 424419, e => {
    "use strict";
    var t = e.i(768834)
      , s = e.i(344892)
      , a = e.i(106258);
    let n = (0,
    t.create)( () => ({
        status: "idle"
    }))
      , i = 0;
    async function r() {
        let e = ++i
          , t = a.useSimStore.getState().savedReplays;
        n.setState({
            status: "loading"
        });
        try {
            let r = await (0,
            s.loadPlayerReplays)();
            if (e !== i)
                return;
            a.useSimStore.getState().savedReplays === t && a.useSimStore.getState().hydrateSavedReplays(r),
            n.setState({
                status: "ready"
            })
        } catch {
            e === i && n.setState({
                status: "error"
            })
        }
    }
    e.s(["preloadPlayerReplayLibrary", 0, r, "resetPlayerReplayLibrary", 0, function() {
        i++,
        n.setState({
            status: "idle"
        })
    }
    , "usePlayerReplayLibrary", 0, n])
}
, 962849, e => {
    "use strict";
    var t = e.i(133968)
      , s = e.i(228486)
      , a = e.i(818227);
    class n {
        sessionId = null;
        pings = new Uint32Array(401);
        pingCount = 0;
        region = null;
        get id() {
            return this.sessionId ??= crypto.randomUUID()
        }
        roundTrip(e) {
            Number.isFinite(e) && !(e <= 0) && (this.pings[Math.min(400, Math.floor(e / 5))]++,
            this.pingCount++)
        }
        online(e) {
            /^[a-z]{2}-[a-z]+-\d$/.test(e) && (this.region = e)
        }
        medianPing() {
            if (!this.pingCount)
                return null;
            let e = 0;
            for (let t = 0; t < 401; t++)
                if (2 * (e += this.pings[t]) >= this.pingCount)
                    return Math.max(1, Math.round((t + .5) * 5));
            return null
        }
        facts(e, n="u" < typeof navigator ? "" : navigator.userAgent) {
            var i;
            let r = a.flightFrames.session();
            return {
                quality: e,
                browser: (0,
                s.browserFamily)(n),
                os: /CrOS/.test(n) ? "chromeos" : /Android/.test(n) ? "android" : /iPhone|iPad|iPod/.test(n) ? "ios" : /Windows/.test(n) ? "windows" : /Macintosh|Mac OS X/.test(n) ? "mac" : /Linux|X11/.test(n) ? "linux" : "other",
                gpu: (i = (0,
                t.gpuRenderer)()) ? /SwiftShader|llvmpipe|softpipe|Basic Render|Software Adapter/i.test(i) ? "software" : (0,
                t.isIntegratedGpu)(i) ? "integrated" : /\bIntel\b/i.test(i) ? "intel-arc" : /NVIDIA|GeForce|Quadro|\bRTX\b|\bGTX\b/i.test(i) ? "nvidia" : /\bAMD\b|Radeon|\bATI\b/i.test(i) ? "amd" : /\bApple\b/i.test(i) ? "apple" : /Adreno|Mali|PowerVR|Immortalis|Xclipse/i.test(i) ? "mobile" : "unknown" : "unknown",
                region: this.region,
                ping_ms: this.medianPing(),
                frames: r.sampledMs > 0 ? r.frames : [],
                flying_ms: r.flyingMs,
                sampled_ms: r.sampledMs
            }
        }
    }
    let i = new n;
    e.s(["sessionFacts", 0, i])
}
, 346944, e => {
    "use strict";
    var t = e.i(271645);
    let s = (e, t) => {
        let s = e instanceof Map ? e : new Map(e.entries())
          , a = t instanceof Map ? t : new Map(t.entries());
        if (s.size !== a.size)
            return !1;
        for (let[e,t] of s)
            if (!a.has(e) || !Object.is(t, a.get(e)))
                return !1;
        return !0
    }
    ;
    e.s(["useShallow", 0, function(e) {
        let a = t.default.useRef(void 0);
        return t => {
            let n = e(t);
            return !function(e, t) {
                if (Object.is(e, t))
                    return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t))
                    return !1;
                if (Symbol.iterator in e && Symbol.iterator in t) {
                    if ("entries" in e && "entries" in t)
                        return s(e, t);
                    let a = e[Symbol.iterator]()
                      , n = t[Symbol.iterator]()
                      , i = a.next()
                      , r = n.next();
                    for (; !i.done && !r.done; ) {
                        if (!Object.is(i.value, r.value))
                            return !1;
                        i = a.next(),
                        r = n.next()
                    }
                    return !!i.done && !!r.done
                }
                return s({
                    entries: () => Object.entries(e)
                }, {
                    entries: () => Object.entries(t)
                })
            }(a.current, n) ? a.current = n : a.current
        }
    }
    ], 346944)
}
]);
