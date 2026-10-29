(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 612523, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(920755)
      , i = e.i(937769)
      , n = e.i(245433);
    async function s(e, t) {
        let[a,{data: s, error: l}] = await Promise.all([(0,
        n.fetchRaceGhost)(e), (0,
        r.createClient)().from("race_course_versions").select("map_id, spawn, gates").eq("time_attack_id", e.timeAttackId).eq("revision", e.courseRevision).abortSignal(AbortSignal.timeout(1e4)).maybeSingle()])
          , o = s ? (0,
        i.parseTimeAttackRow)({
            ...s,
            id: e.timeAttackId,
            name: "Race replay",
            sort_order: 0,
            competitive_revision: e.courseRevision
        }) : null;
        if (l || !o || o.mapId !== t || !a.entry.appearance)
            throw Error("This race replay is unavailable.");
        return {
            id: e.replayId,
            name: o.name,
            mapId: o.mapId,
            duration: a.duration,
            frames: a.frames,
            timeAttack: o,
            appearance: a.entry.appearance
        }
    }
    var l = e.i(762447);
    function o({ghost: e, mapId: r, embedded: i, reel: n}) {
        let[d,c] = (0,
        a.useState)(null)
          , [u,m] = (0,
        a.useState)("")
          , [p,h] = (0,
        a.useState)(0);
        return ((0,
        a.useEffect)( () => {
            let t = !1;
            return s(e, r).then(e => {
                t || c(e)
            }
            ).catch(e => {
                t || m(e instanceof Error ? e.message : "This replay could not load.")
            }
            ),
            () => {
                t = !0
            }
        }
        , [e, r, p]),
        d) ? (0,
        t.jsx)(l.ReplayPlayer, {
            clip: d,
            embedded: i,
            reel: n && !i ? {} : void 0
        }) : (0,
        t.jsxs)("div", {
            className: "relative grid aspect-video min-h-64 place-content-center gap-4 rounded-3xl bg-[#11151b] p-8 text-center text-white",
            children: [(0,
            t.jsx)("p", {
                role: u ? "alert" : "status",
                children: u || "Loading replay…"
            }), u && (0,
            t.jsx)("button", {
                type: "button",
                className: "underline",
                onClick: () => {
                    m(""),
                    h(e => e + 1)
                }
                ,
                children: "Try again"
            })]
        })
    }
    e.s(["RaceReplayViewer", 0, function({ghost: e, mapId: a, embedded: r=!0, reel: i=!1}) {
        return (0,
        t.jsx)(o, {
            ghost: e,
            mapId: a,
            embedded: r,
            reel: i
        }, `${e.attemptId}:${e.replayRevision}:${a}`)
    }
    ], 612523)
}
, 825414, e => {
    e.v({
        stickAxisHorizontal: "replay-viewer-module__LOlknG__stickAxisHorizontal",
        stickAxisVertical: "replay-viewer-module__LOlknG__stickAxisVertical",
        stickDot: "replay-viewer-module__LOlknG__stickDot",
        stickField: "replay-viewer-module__LOlknG__stickField",
        stickGroup: "replay-viewer-module__LOlknG__stickGroup",
        sticks: "replay-viewer-module__LOlknG__sticks",
        sticksFields: "replay-viewer-module__LOlknG__sticksFields",
        timeline: "replay-viewer-module__LOlknG__timeline"
    })
}
, 762447, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(770703)
      , r = e.i(522016)
      , i = e.i(271645)
      , n = e.i(664659)
      , s = e.i(174344)
      , l = e.i(495242)
      , o = e.i(431343)
      , d = e.i(367240)
      , c = e.i(466465)
      , u = e.i(983040)
      , m = e.i(290840)
      , p = e.i(469855)
      , h = e.i(825414);
    let f = (0,
    a.default)( () => e.A(580219), {
        loadableGenerated: {
            modules: [328499]
        },
        ssr: !1,
        loading: () => (0,
        t.jsx)("div", {
            className: "absolute inset-0 grid place-items-center text-zinc-400",
            role: "status",
            children: "Loading viewer…"
        })
    })
      , x = (0,
    a.default)( () => e.A(251523), {
        loadableGenerated: {
            modules: [942231]
        },
        ssr: !1
    });
    class g extends i.Component {
        state = {
            failed: !1
        };
        static getDerivedStateFromError() {
            return {
                failed: !0
            }
        }
        render() {
            return this.state.failed ? (0,
            t.jsxs)("div", {
                className: "absolute inset-0 grid place-content-center gap-3 p-8 text-center",
                children: [(0,
                t.jsx)("p", {
                    children: "The 3D viewer could not load. Check that WebGL is enabled in your browser."
                }), (0,
                t.jsx)("button", {
                    onClick: () => window.location.reload(),
                    className: "underline",
                    children: "Reload viewer"
                })]
            }) : this.props.children
        }
    }
    function y({clip: e, embedded: a=!1, reel: m, prepareMap: v, marks: j, note: w}) {
        let k, S = (0,
        i.useRef)(null), N = (0,
        i.useRef)({
            t: 0,
            playing: !1,
            rate: 1
        }), [_,I] = (0,
        i.useState)(0), [R,C] = (0,
        i.useState)(!1), [A,E] = (0,
        i.useState)(1), [L,T] = (0,
        i.useState)("fpv"), [P,M] = (0,
        i.useState)(!1), [D,$] = (0,
        i.useState)(""), [F,z] = (0,
        i.useState)(!1), O = (k = (0,
        u.findReplayIndex)(e.frames, _, 0),
        (0,
        u.sampleReplaySticks)(e.frames, _, k));
        function B(t) {
            N.current.t = Math.max(0, Math.min(e.duration, t)),
            I(N.current.t)
        }
        function G() {
            P && (N.current.t >= e.duration && B(0),
            N.current.playing = !N.current.playing,
            C(N.current.playing))
        }
        (0,
        i.useEffect)( () => {
            let e = window.setInterval( () => {
                I(N.current.t),
                C(N.current.playing)
            }
            , 100)
              , t = () => {
                document.hidden && (N.current.playing = !1,
                C(!1))
            }
            ;
            return document.addEventListener("visibilitychange", t),
            () => {
                clearInterval(e),
                document.removeEventListener("visibilitychange", t)
            }
        }
        , []);
        let U = "inline-flex size-10 shrink-0 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white disabled:opacity-30 sm:size-11"
          , q = (j ?? []).reduce( (t, a) => {
            let r = Math.max(0, Math.min(1, a.t / e.duration))
              , i = [...t].reverse().find( ({row: e}) => 0 === e);
            return [...t, {
                mark: a,
                at: r,
                row: i && r - i.at < .14 ? 1 : 0
            }]
        }
        , []);
        return (0,
        t.jsxs)("div", {
            ref: S,
            className: "relative isolate aspect-video min-h-72 w-full overflow-hidden rounded-3xl bg-[#11151b] shadow-[0_24px_100px_-24px_#000] ring-1 ring-white/10 outline-none focus-visible:ring-white/40 fullscreen:h-dvh fullscreen:rounded-none",
            tabIndex: 0,
            "aria-label": "Replay player. Space to play or pause, arrow keys to seek.",
            onKeyDown: e => {
                e.target === e.currentTarget && ((" " === e.key || "k" === e.key.toLowerCase()) && (e.preventDefault(),
                G()),
                ("ArrowLeft" === e.key || "ArrowRight" === e.key) && (e.preventDefault(),
                B(N.current.t + ("ArrowLeft" === e.key ? -5 : 5))))
            }
            ,
            children: [(0,
            t.jsx)("div", {
                className: "absolute inset-0",
                children: (0,
                t.jsx)(g, {
                    children: (0,
                    t.jsx)(f, {
                        clip: e,
                        clock: N,
                        view: L,
                        prepareMap: v,
                        onReady: () => M(!0),
                        onMapLoaded: z
                    })
                })
            }), (0,
            t.jsx)("div", {
                className: "pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-black/35 to-transparent"
            }), !a && (0,
            t.jsx)(r.default, {
                href: "/",
                "aria-label": "Flight Division home",
                className: "absolute top-5 left-5 z-10 opacity-90 drop-shadow-lg transition-opacity hover:opacity-100 sm:top-7 sm:left-7",
                children: (0,
                t.jsx)(c.BrandLogo, {
                    priority: !0,
                    on: "dark",
                    className: "h-6 sm:h-8"
                })
            }), P && F && (0,
            t.jsx)("p", {
                className: "absolute top-14 left-5 z-10 max-w-[calc(100%-2.5rem)] rounded-full bg-black/45 px-3 py-1.5 text-xs text-white/85 backdrop-blur-xl sm:top-7 sm:right-7 sm:left-auto sm:max-w-[calc(100%-16rem)]",
                children: p.MAP_CHANGED_NOTE
            }), P && !R && (0,
            t.jsx)("button", {
                onClick: G,
                "aria-label": _ >= e.duration ? "Replay from start" : "Play replay",
                className: "absolute top-[43%] left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-black shadow-2xl backdrop-blur-xl transition hover:scale-105 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:size-20",
                children: (0,
                t.jsx)(o.Play, {
                    className: "ml-1",
                    fill: "currentColor",
                    strokeWidth: 1.5,
                    size: 28
                })
            }), O && (0,
            t.jsx)(b, {
                input: O
            }), (0,
            t.jsx)("div", {
                className: "pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/65 via-black/20 to-transparent px-3 pt-16 pb-3 sm:px-5 sm:pb-5",
                children: (0,
                t.jsxs)("div", {
                    className: "pointer-events-auto rounded-2xl border border-white/10 bg-[#14171b]/65 px-3 py-2 shadow-xl backdrop-blur-2xl sm:px-4",
                    children: [(0,
                    t.jsx)("input", {
                        type: "range",
                        min: 0,
                        max: e.duration,
                        step: .01,
                        value: _,
                        disabled: !P,
                        onChange: e => B(Number(e.target.value)),
                        "aria-label": "Seek replay",
                        "aria-valuetext": `${(0,
                        p.formatReplayTime)(_)} of ${(0,
                        p.formatReplayTime)(e.duration)}`,
                        className: h.default.timeline,
                        style: {
                            "--progress": `${_ / e.duration * 100}%`
                        }
                    }), q.length > 0 && (0,
                    t.jsx)("div", {
                        className: `relative mb-1 text-[11px] text-white/75 ${q.some( ({row: e}) => e) ? "h-10" : "h-5"}`,
                        "aria-label": "Clip moments",
                        children: q.map( ({mark: e, at: a, row: r}) => (0,
                        t.jsxs)("button", {
                            type: "button",
                            disabled: !P,
                            onClick: () => B(e.t),
                            "aria-label": `Seek to ${e.label}, ${(0,
                            p.formatReplayTime)(e.t)}`,
                            className: `absolute whitespace-nowrap rounded-full px-1.5 py-0.5 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white disabled:opacity-40 ${r ? "top-5" : "top-0"}`,
                            style: {
                                left: `${100 * a}%`,
                                transform: a > .85 ? "translateX(-100%)" : a < .15 ? "none" : "translateX(-50%)"
                            },
                            children: [e.label, " ", (0,
                            t.jsx)("span", {
                                className: "text-white/45",
                                children: (0,
                                p.formatReplayTime)(e.t)
                            })]
                        }, `${e.label}:${e.t}`))
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex flex-wrap items-center gap-1 sm:gap-2",
                        children: [(0,
                        t.jsx)("button", {
                            className: U,
                            disabled: !P,
                            onClick: G,
                            "aria-label": R ? "Pause replay" : "Play replay",
                            children: R ? (0,
                            t.jsx)(l.Pause, {
                                size: 18,
                                fill: "currentColor"
                            }) : (0,
                            t.jsx)(o.Play, {
                                size: 18,
                                fill: "currentColor"
                            })
                        }), (0,
                        t.jsx)("button", {
                            className: U,
                            disabled: !P,
                            onClick: () => B(0),
                            "aria-label": "Restart replay",
                            children: (0,
                            t.jsx)(d.RotateCcw, {
                                size: 17
                            })
                        }), (0,
                        t.jsxs)("span", {
                            className: "mr-auto text-xs font-medium tabular-nums text-white/90",
                            children: [(0,
                            p.formatReplayTime)(_), " ", (0,
                            t.jsxs)("span", {
                                className: "ml-1 text-white/40",
                                children: ["/ ", (0,
                                p.formatReplayTime)(e.duration)]
                            })]
                        }), (0,
                        t.jsx)("div", {
                            role: "group",
                            "aria-label": "Camera view",
                            className: "flex rounded-full bg-black/20 p-1",
                            children: ["fpv", "chase"].map(e => (0,
                            t.jsx)("button", {
                                onClick: () => T(e),
                                "aria-pressed": L === e,
                                className: `min-h-8 rounded-full px-3 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-white ${L === e ? "bg-white/15 text-white shadow-sm" : "text-white/50 hover:text-white"}`,
                                children: "fpv" === e ? "FPV" : "Chase"
                            }, e))
                        }), (0,
                        t.jsxs)("div", {
                            className: "relative",
                            children: [(0,
                            t.jsx)("select", {
                                value: A,
                                onChange: e => {
                                    let t = Number(e.target.value);
                                    N.current.rate = t,
                                    E(t)
                                }
                                ,
                                "aria-label": "Playback speed",
                                className: "min-h-10 cursor-pointer appearance-none rounded-full bg-transparent py-2 pr-6 pl-3 text-xs font-medium text-white/75 outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white",
                                children: [.25, .5, 1, 1.5, 2].map(e => (0,
                                t.jsxs)("option", {
                                    className: "bg-zinc-900 text-white",
                                    value: e,
                                    children: [e, "×"]
                                }, e))
                            }), (0,
                            t.jsx)(n.ChevronDown, {
                                size: 11,
                                "aria-hidden": !0,
                                className: "pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-white/40"
                            })]
                        }), m && P && (0,
                        t.jsx)(x, {
                            clip: e,
                            player: {
                                seek: B,
                                pause: function() {
                                    N.current.playing = !1,
                                    C(!1)
                                }
                            },
                            prepareMap: m.prepareMap ?? v,
                            onFrame: m.onFrame
                        }), (0,
                        t.jsx)("button", {
                            className: U,
                            "aria-label": "Toggle fullscreen",
                            onClick: async () => {
                                try {
                                    document.fullscreenElement ? await document.exitFullscreen() : await S.current?.requestFullscreen()
                                } catch {
                                    $("Fullscreen is unavailable in this browser.")
                                }
                            }
                            ,
                            children: (0,
                            t.jsx)(s.Maximize, {
                                size: 17
                            })
                        })]
                    }), w && (0,
                    t.jsx)("p", {
                        className: "mt-2 text-xs text-zinc-400",
                        children: w
                    }), D && (0,
                    t.jsx)("p", {
                        role: "status",
                        className: "mt-2 text-xs text-zinc-400",
                        children: D
                    })]
                })
            })]
        })
    }
    function b({input: e}) {
        let a = e => Math.min(1, Math.max(-1, e))
          , r = Math.min(1, Math.max(0, e.throttle))
          , i = {
            x: a(e.yaw),
            y: 1 - 2 * r
        }
          , n = {
            x: a(e.roll),
            y: a(e.pitch)
        };
        return (0,
        t.jsx)("section", {
            className: h.default.sticks,
            "aria-label": "Stick inputs",
            children: (0,
            t.jsxs)("div", {
                className: h.default.sticksFields,
                children: [(0,
                t.jsx)(v, {
                    position: i
                }), (0,
                t.jsx)(v, {
                    position: n
                })]
            })
        })
    }
    function v({position: e}) {
        return (0,
        t.jsx)("div", {
            className: h.default.stickGroup,
            children: (0,
            t.jsxs)("div", {
                className: h.default.stickField,
                children: [(0,
                t.jsx)("span", {
                    className: h.default.stickAxisHorizontal,
                    "aria-hidden": !0
                }), (0,
                t.jsx)("span", {
                    className: h.default.stickAxisVertical,
                    "aria-hidden": !0
                }), (0,
                t.jsx)("span", {
                    className: h.default.stickDot,
                    style: {
                        left: `${(e.x + 1) * 50}%`,
                        top: `${(e.y + 1) * 50}%`
                    },
                    "aria-hidden": !0
                })]
            })
        })
    }
    e.s(["ReplayPlayer", 0, y, "ReplayViewer", 0, function({id: e, embedded: a=!1, reel: n=!1, admin: s=!1}) {
        let[l,o] = (0,
        i.useState)(null)
          , [d,u] = (0,
        i.useState)("")
          , [h,f] = (0,
        i.useState)(!0)
          , [x,g] = (0,
        i.useState)(0);
        return (0,
        i.useEffect)( () => {
            let t = !1;
            return async function() {
                try {
                    let a = await (0,
                    m.downloadReplayPayload)(e, s ? "admin" : "shared")
                      , r = (0,
                    p.parseSharedReplay)(a);
                    t || (o(r),
                    u(r ? "" : "This replay is unavailable. It may have been deleted or replaced."))
                } catch {
                    t || u("We couldn’t load this replay. Please try again.")
                } finally {
                    t || f(!1)
                }
            }(),
            () => {
                t = !0
            }
        }
        , [e, s, x]),
        (0,
        t.jsx)("main", {
            "data-embedded": a,
            className: "data-[embedded=true]:p-0 flex min-h-dvh flex-col items-center justify-center bg-[#080a0d] bg-[radial-gradient(ellipse_at_50%_35%,#202630_0%,transparent_65%)] px-3 py-8 text-white sm:px-8",
            children: (0,
            t.jsxs)("div", {
                className: "w-full max-w-5xl",
                children: [l ? (0,
                t.jsx)(y, {
                    clip: l,
                    embedded: a,
                    reel: n && !a ? {} : void 0
                }) : (0,
                t.jsxs)("div", {
                    className: "relative grid aspect-video min-h-64 place-content-center rounded-3xl border border-white/10 bg-[#11151b] p-8 text-center",
                    children: [(0,
                    t.jsx)(r.default, {
                        href: "/",
                        "aria-label": "Flight Division home",
                        className: "absolute top-5 left-5",
                        children: (0,
                        t.jsx)(c.BrandLogo, {
                            priority: !0,
                            on: "dark"
                        })
                    }), (0,
                    t.jsx)("p", {
                        role: h ? "status" : "alert",
                        children: h ? "Loading replay…" : d
                    }), !h && (0,
                    t.jsx)("button", {
                        className: "mt-4 underline",
                        onClick: () => {
                            f(!0),
                            u(""),
                            g(e => e + 1)
                        }
                        ,
                        children: "Try again"
                    })]
                }), !a && (0,
                t.jsxs)("p", {
                    className: "mt-6 text-center text-sm text-zinc-500",
                    children: ["Play for free ", (0,
                    t.jsx)(r.default, {
                        href: "/",
                        className: "ml-1 font-medium text-white/80 transition-colors hover:text-orange-400",
                        children: "Flight Division"
                    })]
                })]
            })
        })
    }
    ])
}
, 240840, e => {
    e.v({
        badge: "rarity-badge-module__n_NcBq__badge"
    })
}
, 209003, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(15221);
    e.i(671112);
    var r = e.i(240840);
    e.s(["RarityBadge", 0, function({rarity: e="uncommon"}) {
        return (0,
        t.jsxs)("span", {
            className: r.default.badge,
            "data-rarity": e,
            children: [(0,
            t.jsx)("span", {
                "aria-hidden": "true",
                children: "◆"
            }), a.RARITY_LABELS[e]]
        })
    }
    ])
}
, 721235, e => {
    e.v({
        surface: "rarity-surface-module__YkNqxq__surface"
    })
}
, 287405, 637979, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(770703)
      , r = e.i(271645)
      , i = e.i(768834)
      , n = e.i(209003)
      , s = e.i(50270)
      , l = e.i(920755)
      , o = e.i(353198)
      , d = e.i(15221);
    let c = s.z.object({
        id: s.z.string(),
        name: s.z.string().max(120),
        rarity: s.z.enum(d.ALL_RARITIES),
        access: s.z.enum(["included", "credits", "pack", "parts"]),
        pack: s.z.string().max(80).nullable().catch(null)
    });
    function u(e, t, a) {
        if (o.DRONE_SKIN_IDS.includes(e)) {
            let a = "factory" === e;
            return {
                name: t.name || "Factory",
                rarity: "common",
                rarityLabel: d.RARITY_LABELS.common,
                source: a ? "Factory paint, on every drone" : "Comes with the drone"
            }
        }
        let r = "failed" === a ? void 0 : a
          , i = r?.rarity ?? t.rarity ?? "common";
        return {
            name: r?.name ?? (t.name || "Colorway"),
            rarity: i,
            rarityLabel: d.RARITY_LABELS[i],
            source: r ? function(e) {
                switch (e.access) {
                case "included":
                    return "Free for every pilot";
                case "credits":
                    return "Shop";
                case "parts":
                    return "Shop, for Parts";
                case "pack":
                    return e.pack ? `${e.pack} pack` : "A pack"
                }
            }(r) : null === r ? "No longer available" : "failed" === a ? "Unavailable right now" : null
        }
    }
    let m = new Set
      , p = (0,
    i.create)( (e, t) => ({
        facts: {},
        request: async a => {
            let r = t().facts
              , i = [...new Set(a)].filter(e => !o.DRONE_SKIN_IDS.includes(e) && (!(e in r) || "failed" === r[e]) && !m.has(e)).slice(0, 50);
            if (i.length) {
                i.forEach(e => m.add(e));
                try {
                    let {data: t, error: a} = await (0,
                    l.createClient)().rpc("colorway_facts", {
                        p_ids: i
                    }).abortSignal(AbortSignal.timeout(1e4));
                    if (a)
                        throw a;
                    let r = s.z.array(c).catch([]).parse(t);
                    e(e => ({
                        facts: {
                            ...e.facts,
                            ...Object.fromEntries(i.map(e => [e, r.find(t => t.id === e) ?? null]))
                        }
                    }))
                } catch {
                    e(e => ({
                        facts: {
                            ...e.facts,
                            ...Object.fromEntries(i.map(e => [e, "failed"]))
                        }
                    }))
                } finally {
                    i.forEach(e => m.delete(e))
                }
            }
        }
    }));
    e.s(["inspectColorway", 0, u, "useColorwayFacts", 0, p], 637979);
    var h = e.i(277873)
      , f = e.i(106258)
      , x = e.i(814022);
    e.i(573798);
    var g = e.i(498475)
      , y = e.i(509381)
      , b = e.i(244144);
    let v = (0,
    a.default)( () => e.A(133954), {
        loadableGenerated: {
            modules: [88371]
        },
        ssr: !1
    })
      , j = (0,
    i.create)(e => ({
        inspected: null,
        open: t => e({
            inspected: t
        }),
        close: () => e({
            inspected: null
        })
    }));
    function w({inspected: e, info: a, own: r, viewing: i, onView: s, onClose: l}) {
        let d = i ? r : e.drone;
        return (0,
        t.jsxs)(y.Panel, {
            cut: "md",
            className: "fd-drone-inspect sim-ui-surface",
            role: "dialog",
            "aria-label": `${e.pilot}'s drone`,
            children: [(0,
            t.jsxs)("header", {
                children: [(0,
                t.jsxs)("h2", {
                    children: [e.pilot, (0,
                    t.jsx)("span", {
                        children: o.DRONES[e.drone].name
                    })]
                }), (0,
                t.jsx)("span", {
                    className: "fd-drone-inspect__close",
                    children: (0,
                    t.jsx)(g.IconButton, {
                        label: "Close",
                        icon: (0,
                        t.jsx)(b.Icon, {
                            name: "close",
                            size: 24
                        }),
                        onClick: l
                    })
                })]
            }), (0,
            t.jsxs)("div", {
                className: "fd-drone-inspect__stage",
                role: "img",
                "aria-label": `${o.DRONES[d].name} in ${a.name}`,
                children: [(0,
                t.jsx)(v, {
                    archetype: d,
                    skin: e.skinId,
                    skinOverride: e.skin
                }, d), (0,
                t.jsx)("span", {
                    className: "fd-drone-inspect__caption",
                    children: i ? `On your ${o.DRONES[d].name}` : `${e.pilot}'s ${o.DRONES[d].name}`
                })]
            }), (0,
            t.jsxs)("dl", {
                children: [(0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsx)("dt", {
                        children: "Colorway"
                    }), (0,
                    t.jsx)("dd", {
                        children: a.name
                    })]
                }), (0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsx)("dt", {
                        children: "Rarity"
                    }), (0,
                    t.jsx)("dd", {
                        children: (0,
                        t.jsx)(n.RarityBadge, {
                            rarity: a.rarity
                        })
                    })]
                }), (0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsx)("dt", {
                        children: "From"
                    }), (0,
                    t.jsx)("dd", {
                        "aria-live": "polite",
                        children: a.source ?? "Looking it up…"
                    })]
                })]
            }), (0,
            t.jsx)(g.Button, {
                tone: i ? "ghost" : "secondary",
                size: "md",
                block: !0,
                className: "fd-drone-inspect__view",
                "aria-pressed": i,
                onClick: s,
                children: "View"
            })]
        })
    }
    function k(e, t) {
        let a = p(t => t.facts[e]);
        return (0,
        r.useEffect)( () => {
            p.getState().request([e])
        }
        , [e]),
        u(e, t, a)
    }
    function S({inspected: e, own: a, onClose: i}) {
        let[n,s] = (0,
        r.useState)(!1)
          , l = k(e.skinId, {
            name: e.skin.name,
            rarity: e.rarity ?? (0,
            h.ownedItem)(e.skinId)?.rarity
        });
        return (0,
        t.jsx)(w, {
            inspected: e,
            info: l,
            own: a,
            viewing: n,
            onView: () => s(e => !e),
            onClose: i
        })
    }
    e.s(["ColorwaySourceText", 0, function({skinId: e, name: a, rarity: r}) {
        let i = k(e, {
            name: a,
            rarity: r
        });
        return (0,
        t.jsx)("span", {
            "aria-live": "polite",
            children: i.source ?? "Looking it up…"
        })
    }
    , "DroneInspectHost", 0, function({hidden: e}) {
        let a = j(e => e.inspected)
          , i = j(e => e.close)
          , n = (0,
        f.useSimStore)(x.flownDrone);
        return ((0,
        r.useEffect)( () => f.useSimStore.subscribe( (e, t) => {
            e.phase !== t.phase && i()
        }
        ), [i]),
        (0,
        r.useEffect)( () => {
            if (!a)
                return;
            let e = e => {
                "Escape" === e.key && (e.stopPropagation(),
                i())
            }
            ;
            return window.addEventListener("keydown", e, !0),
            () => window.removeEventListener("keydown", e, !0)
        }
        , [a, i]),
        !a || e) ? null : (0,
        t.jsx)(S, {
            inspected: a,
            own: n,
            onClose: i
        }, `${a.pilot}:${a.drone}:${a.skinId}`)
    }
    , "useDroneInspect", 0, j], 287405)
}
, 481474, e => {
    "use strict";
    var t = e.i(271645);
    let a = null;
    e.s(["useNameCheck", 0, function(r, i) {
        let[n,s] = (0,
        t.useState)(null);
        return ((0,
        t.useEffect)( () => {
            let t = !0;
            return (a ??= e.A(837435)).then(e => {
                t && s(e)
            }
            , () => {}
            ),
            () => {
                t = !1
            }
        }
        , []),
        n && r.trim()) ? "map" === i ? n.mapNameProblem(r) : n.nameAllowed(r.trim()) ? null : n.NAME_REFUSED : null
    }
    ])
}
, 187107, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(726422)
      , i = e.i(172732);
    e.i(573798);
    var n = e.i(498475)
      , s = e.i(244144)
      , l = e.i(883620)
      , o = e.i(481474);
    let d = {
        check: r.checkUsernameAvailable,
        save: r.setUsernameRemote
    };
    e.s(["UsernameForm", 0, function({mode: e, currentUsername: c, onSaved: u, actions: m=d}) {
        let p = (0,
        a.useId)()
          , h = (0,
        a.useRef)(null)
          , [f,x] = (0,
        a.useState)("")
          , [g,y] = (0,
        a.useState)("idle")
          , [b,v] = (0,
        a.useState)("")
          , [j,w] = (0,
        a.useState)(!1)
          , [k,S] = (0,
        a.useState)(null)
          , N = (0,
        a.useRef)(0)
          , _ = (0,
        i.trimUsername)(f)
          , I = !!c && _.toLowerCase() === c.toLowerCase()
          , R = !!c && _ === c
          , C = _ ? (0,
        i.usernameFormatReason)(_) : null
          , A = null !== (0,
        o.useNameCheck)(_, "username")
          , E = _ ? "ok" !== C ? C : A ? "blocked" : I ? "available" : null : "idle";
        null === E && b !== _ && (v(_),
        y("checking"));
        let L = E ?? (b === _ ? g : "checking");
        (0,
        a.useEffect)( () => {
            if (null !== E)
                return;
            let e = ++N.current
              , t = !1
              , a = window.setTimeout( () => {
                (async () => {
                    try {
                        let a = await m.check(_);
                        if (t || e !== N.current)
                            return;
                        y(a.available ? "available" : a.reason)
                    } catch {
                        if (t || e !== N.current)
                            return;
                        y("error")
                    }
                }
                )()
            }
            , 400);
            return () => {
                window.clearTimeout(a),
                t = !0
            }
        }
        , [_, E, m]);
        let T = !j && !!_ && !R && "available" === L
          , P = async e => {
            if (e.preventDefault(),
            !T)
                return;
            w(!0),
            S(null);
            let t = !1;
            try {
                let e = await m.save(_);
                t = !0,
                u(e)
            } catch (e) {
                e instanceof r.UsernameError ? "taken" === e.reason ? y("taken") : "reserved" === e.reason ? y("reserved") : "invalid" === e.reason ? y("invalid") : "blocked" === e.reason ? y("blocked") : "cooldown" === e.reason ? S("You can change this again later.") : S("Could not save. Try again.") : S("Could not save. Try again.")
            } finally {
                w(!1),
                t || requestAnimationFrame( () => h.current?.focus())
            }
        }
          , M = j ? {
            text: "Saving…",
            tone: "muted"
        } : "idle" === L || "ok" === L ? null : "checking" === L ? {
            text: "Checking…",
            tone: "muted"
        } : "available" === L ? {
            text: "Available",
            tone: "ok"
        } : "taken" === L ? {
            text: "That name is taken.",
            tone: "danger"
        } : "blocked" === L ? {
            text: "That name isn't allowed. Try another.",
            tone: "danger"
        } : "reserved" === L ? {
            text: (0,
            i.usernameFormatMessage)("reserved"),
            tone: "danger"
        } : "invalid" === L ? {
            text: (0,
            i.usernameFormatMessage)("invalid"),
            tone: "danger"
        } : "error" === L ? {
            text: "Could not check. Try again.",
            tone: "danger"
        } : null
          , D = M?.tone === "danger" ? M.text : null
          , $ = M && "danger" !== M.tone ? M : null;
        return (0,
        t.jsxs)("form", {
            className: "fd-username-form",
            onSubmit: e => void P(e),
            children: ["claim" === e && (0,
            t.jsx)("label", {
                htmlFor: p,
                className: "fd-username-label",
                children: "Username"
            }), (0,
            t.jsx)(l.TextInput, {
                ref: h,
                id: p,
                label: "change" === e ? "New username" : "Username",
                error: D,
                "aria-describedby": "claim" === e ? `${p}-help ${p}-status` : void 0,
                disabled: j,
                autoComplete: "username",
                autoCapitalize: "off",
                autoCorrect: "off",
                spellCheck: !1,
                maxLength: 16,
                placeholder: "change" === e ? "New username" : void 0,
                value: f,
                autoFocus: "claim" === e,
                onChange: e => {
                    x(e.target.value),
                    S(null)
                }
            }), "claim" === e && (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("p", {
                    id: `${p}-help`,
                    className: "fd-username-help",
                    children: "3–16 letters, numbers or underscores. Start with a letter; don’t end with an underscore."
                }), (0,
                t.jsxs)("p", {
                    id: `${p}-status`,
                    className: "fd-username-status",
                    "data-tone": $?.tone,
                    "aria-live": "polite",
                    children: [$?.tone === "ok" && (0,
                    t.jsx)(s.Icon, {
                        name: "check",
                        size: 16
                    }), $?.text ?? " "]
                })]
            }), (0,
            t.jsx)(n.Button, {
                type: "submit",
                tone: "primary",
                size: "claim" === e ? "md" : "sm",
                block: !0,
                disabled: !T,
                trailingIcon: "claim" === e ? (0,
                t.jsx)(s.Icon, {
                    name: "arrow-right"
                }) : void 0,
                className: "fd-username-submit",
                children: j ? "Saving…" : "change" === e ? "Save username" : "Continue"
            }), $ && "change" === e ? (0,
            t.jsxs)("p", {
                className: "fd-username-status",
                "data-tone": $.tone,
                "aria-live": "polite",
                children: ["ok" === $.tone && (0,
                t.jsx)(s.Icon, {
                    name: "check",
                    size: 16
                }), $.text]
            }) : null, k ? (0,
            t.jsx)("p", {
                role: "alert",
                className: "fd-username-error",
                children: k
            }) : null]
        })
    }
    ])
}
, 849022, 59701, 848491, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645);
    e.i(573798);
    var r = e.i(498475)
      , i = e.i(624834)
      , n = e.i(509381)
      , s = e.i(244144)
      , l = e.i(920755)
      , o = e.i(871737)
      , d = e.i(353198)
      , c = e.i(106258)
      , u = e.i(814022)
      , m = e.i(771607)
      , p = e.i(894969)
      , h = e.i(172732)
      , f = e.i(937769)
      , x = e.i(28276)
      , g = e.i(412864)
      , y = e.i(29394)
      , b = e.i(998494)
      , v = e.i(245433)
      , j = e.i(544383);
    function w(e, t, a=null) {
        if (!t.attemptId || !t.droneId || !t.courseRevision)
            return null;
        let r = {
            attemptId: t.attemptId,
            timeAttackId: t.raceId,
            replayId: t.replayId,
            replayRevision: t.replayRevision,
            timeMs: t.timeMs,
            username: e.name,
            you: e.id === a,
            appearance: t.appearance,
            droneId: t.droneId,
            courseRevision: t.courseRevision,
            rank: 1
        };
        return (0,
        j.usableRaceGhost)(r) ? r : null
    }
    async function k({mapId: e, ghost: t}, a, r={
        boards: v.fetchRaceBoards,
        ghost: v.fetchRaceGhost
    }) {
        if (a?.throwIfAborted(),
        !(0,
        j.usableRaceGhost)(t))
            throw Error("This personal best has no challenge recording.");
        let i = c.useSimStore.getState();
        if (!(0,
        d.isDroneUnlocked)(t.droneId, (0,
        m.confirmedXp)(i), i.droneGifts))
            throw Error(`${d.DRONES[t.droneId].name} unlocks at level ${d.DRONES[t.droneId].unlockLevel}.`);
        let n = i.playerAccountId
          , {data: s, error: o} = await (0,
        f.selectRaces)(e => (0,
        l.createClient)().from("sim_time_attacks").select(e).eq("id", t.timeAttackId).abortSignal(a ? AbortSignal.any([a, AbortSignal.timeout(1e4)]) : AbortSignal.timeout(1e4)).maybeSingle());
        if (a?.throwIfAborted(),
        o)
            throw Error("This race could not load. Try again.");
        let u = s ? (0,
        f.parseTimeAttackRow)(s) : null;
        if (!u || u.mapId !== e || !(0,
        y.canAccessMap)(u.mapId) || u.gates.length < 2)
            throw Error("This race is no longer available.");
        if ((u.competitiveRevision ?? 1) !== t.courseRevision)
            throw Error("This course has changed since that personal best. Choose a current record.");
        if ((0,
        b.isPersonalMapId)(u.mapId)) {
            let e = await (0,
            g.loadSharedMap)(u.mapId.slice(5));
            a?.throwIfAborted(),
            (0,
            g.registerMapForPlay)(e)
        }
        a?.throwIfAborted();
        let p = await (0,
        j.prepareGhosts)({
            accountId: n,
            timeAttackId: u.id,
            courseRevision: t.courseRevision,
            droneId: t.droneId
        }, r, {
            exact: [t],
            signal: a
        });
        if (!p.ghosts.length)
            throw Error("This personal best's recording could not load. Try again.");
        if (c.useSimStore.getState().playerAccountId !== n)
            throw Error("Your account changed. Open the profile again.");
        return () => {
            if (a?.throwIfAborted(),
            c.useSimStore.getState().playerAccountId !== n)
                throw Error("Your account changed. Open the profile again.");
            if ((0,
            x.patchTimeAttackDoc)(u),
            !c.useSimStore.getState().soloRace(u.id, p, {
                droneId: t.droneId,
                challenge: t
            }) && !c.useSimStore.getState().raceLobby)
                throw Error("Race setup changed. Close the current activity and try again.")
        }
    }
    e.s(["preparePersonalBestChallenge", 0, k, "profileRecordGhost", 0, w], 59701);
    var S = e.i(612523)
      , N = e.i(105524)
      , _ = e.i(187107)
      , I = e.i(954646)
      , R = e.i(770703)
      , C = e.i(568204)
      , A = e.i(516560)
      , E = e.i(883620)
      , L = e.i(870895)
      , T = e.i(987808)
      , P = e.i(469855)
      , M = e.i(721235)
      , D = e.i(793273)
      , $ = e.i(388365)
      , F = e.i(672390)
      , z = e.i(287405)
      , O = e.i(463946);
    let B = (0,
    R.default)( () => e.A(133954), {
        loadableGenerated: {
            modules: [88371]
        },
        ssr: !1
    })
      , G = [{
        value: "drone",
        label: "This drone"
    }, {
        value: "all",
        label: "All drones"
    }];
    function U({profile: e, ownProfile: l=!1, embedded: o=!1, accountContent: c, busy: u=!1, onModerate: m, onModerationSubmit: p, onReplay: h, onChallenge: f, challengeError: x, challengeLock: g=null, recordsStatus: y, viewerDrone: v}) {
        let j = (0,
        a.useMemo)( () => e.drones.length ? e.drones : d.DRONE_LADDER.filter(t => (0,
        d.isDroneUnlocked)(t, e.xp, [e.droneLoadout.archetype])).map(t => {
            let a = d.DRONES[t].skins.find(a => a.id === e.droneLoadout.skins[t]) ?? d.DRONES[t].skins[0];
            return {
                droneId: t,
                skinId: a.id,
                skin: a,
                rarity: "common"
            }
        }
        ), [e.drones, e.droneLoadout, e.xp])
          , [k,S] = (0,
        a.useState)(e.droneLoadout.archetype)
          , N = j.find(e => e.droneId === k) ?? j[0]
          , [_,R] = (0,
        a.useState)(!1)
          , [q,H] = (0,
        a.useState)(null)
          , [V,Y] = (0,
        a.useState)(!1)
          , W = !l && !!v
          , K = W && V ? v : N.droneId
          , X = d.DRONES[N.droneId]
          , Z = (0,
        a.useMemo)( () => [{
            key: "profile",
            archetype: K,
            skin: N.skinId,
            skinOverride: N.skin,
            position: [0, 0],
            scale: 1
        }], [N, K])
          , J = e.records.filter(e => _ || e.droneId === N.droneId)
          , Q = e.records.filter(e => !e.droneId).length
          , ee = (0,
        L.levelProgress)(e.xp)
          , et = Math.floor(e.flightTimeMs / 6e4)
          , ea = new Date(e.joinedAt);
        async function er(e) {
            let t = new URL((0,
            P.raceReplayPath)({
                attemptId: e.attemptId,
                replayId: e.replayId,
                replayRevision: e.replayRevision
            }),window.location.origin).href;
            try {
                await navigator.clipboard.writeText(t),
                H({
                    attemptId: e.attemptId,
                    copied: !0
                })
            } catch {
                H({
                    attemptId: e.attemptId,
                    copied: !1,
                    fallback: t
                })
            }
        }
        return (0,
        t.jsxs)(D.DroneHeroHost, {
            children: [(0,
            t.jsxs)("header", {
                className: "fd-pilot-hero",
                children: [(0,
                t.jsx)("span", {
                    className: "fd-pilot-avatar",
                    "aria-hidden": "true",
                    children: (0,
                    t.jsx)(s.Icon, {
                        name: "smile",
                        size: 24
                    })
                }), (0,
                t.jsxs)("div", {
                    className: "fd-pilot-heading",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "fd-pilot-eyebrow",
                        children: [!o && (l ? "Your profile" : "Pilot profile"), " ", (0,
                        t.jsx)(F.PilotBadge, {
                            admin: e.admin,
                            mod: e.mod
                        }), !!e.badges.length && (0,
                        t.jsx)("span", {
                            className: "fd-pilot-badges",
                            children: e.badges.map(e => (0,
                            t.jsxs)(C.Badge, {
                                tone: "acid",
                                children: ["◆ ", e]
                            }, e))
                        })]
                    }), (0,
                    t.jsx)("h2", {
                        id: "pilot-profile-title",
                        children: e.name
                    }), Number.isFinite(ea.getTime()) && (0,
                    t.jsxs)("p", {
                        children: ["Flying since ", ea.toLocaleDateString(void 0, {
                            month: "short",
                            year: "numeric"
                        })]
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "fd-pilot-progression",
                    children: [(0,
                    t.jsx)(C.LevelBadge, {
                        level: ee.level
                    }), (0,
                    t.jsx)(C.ProgressBar, {
                        className: "fd-pilot-xp",
                        label: `Level ${ee.level} progress`,
                        value: ee.xpIntoLevel,
                        max: ee.xpForNext,
                        valueText: `${ee.xpIntoLevel.toLocaleString()} / ${ee.xpForNext.toLocaleString()} XP`
                    })]
                })]
            }), (0,
            t.jsxs)("div", {
                className: "fd-pilot-body",
                children: [(0,
                t.jsxs)("section", {
                    className: "fd-pilot-hangar",
                    "aria-label": `${e.name}’s drones`,
                    children: [(0,
                    t.jsxs)("div", {
                        className: ["fd-pilot-drone", !o && M.default.surface].filter(Boolean).join(" "),
                        "data-rarity": N.rarity,
                        children: [(0,
                        t.jsxs)("div", {
                            className: "fd-pilot-drone-status",
                            children: [!o && (0,
                            t.jsx)("span", {
                                children: l ? "Your drone" : "Pilot’s drone"
                            }), N.droneId === e.droneLoadout.archetype && (0,
                            t.jsx)(C.Badge, {
                                tone: "chalk",
                                icon: (0,
                                t.jsx)(s.Icon, {
                                    name: "check-circle"
                                }),
                                children: "Equipped"
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "fd-pilot-drone-stage",
                            role: "img",
                            "aria-label": `${X.name} ${X.category}, ${N.skin.name || "Factory"} skin. Rotating 3D model.`,
                            children: [!o && (0,
                            t.jsx)("span", {
                                className: "fd-pilot-drone-word",
                                "aria-hidden": "true",
                                children: X.category
                            }), (0,
                            t.jsx)("div", {
                                className: "fd-pilot-drone-render",
                                children: (0,
                                t.jsx)(D.DroneHeroAnchor, {
                                    drones: Z,
                                    loading: (0,
                                    t.jsx)("span", {
                                        className: "fd-pilot-drone-loading",
                                        children: "Getting the drone ready…"
                                    })
                                })
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "fd-pilot-drone-caption",
                            children: [(0,
                            t.jsx)("h3", {
                                children: X.name
                            }), (0,
                            t.jsxs)("p", {
                                children: [N.skin.name || "Factory", " ", (0,
                                t.jsxs)("span", {
                                    children: ["· ", N.rarity]
                                })]
                            }), !l && (0,
                            t.jsxs)("p", {
                                className: "fd-pilot-drone-source",
                                children: ["From: ", (0,
                                t.jsx)(z.ColorwaySourceText, {
                                    skinId: N.skinId,
                                    name: N.skin.name,
                                    rarity: N.rarity
                                })]
                            }), W && (0,
                            t.jsxs)("p", {
                                className: "fd-pilot-drone-view fdk-on-ink",
                                children: [(0,
                                t.jsx)(r.Button, {
                                    size: "sm",
                                    tone: V ? "ghost" : "secondary",
                                    "aria-pressed": V,
                                    onClick: () => Y(e => !e),
                                    children: "View"
                                }), V && (0,
                                t.jsxs)("span", {
                                    children: ["On your ", d.DRONES[K].name]
                                })]
                            })]
                        })]
                    }), (0,
                    t.jsx)("nav", {
                        className: "fd-pilot-fleet",
                        "aria-label": "Pilot drones",
                        children: j.map( (e, a) => (0,
                        t.jsx)(n.Tile, {
                            selected: N.droneId === e.droneId,
                            label: `View ${$.RACE_DRONE_NAMES[e.droneId]} drone and personal bests`,
                            onSelect: () => {
                                S(e.droneId),
                                R(!1),
                                Y(!1)
                            }
                            ,
                            art: (0,
                            t.jsx)(B, {
                                archetype: e.droneId,
                                skin: e.skinId,
                                skinOverride: e.skin,
                                topDown: !0,
                                deferMs: 650 + 120 * a
                            }),
                            title: $.RACE_DRONE_NAMES[e.droneId],
                            meta: d.DRONES[e.droneId].size,
                            corner: N.droneId === e.droneId ? (0,
                            t.jsx)(s.Icon, {
                                name: "check-circle",
                                size: 17
                            }) : void 0
                        }, e.droneId))
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "fd-pilot-record-column",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "fd-pilot-stats",
                        children: [(0,
                        t.jsx)(C.BigNumber, {
                            label: "Flight time",
                            value: et >= 60 ? (0,
                            t.jsxs)(t.Fragment, {
                                children: [Math.floor(et / 60), (0,
                                t.jsx)("small", {
                                    children: "h"
                                }), " ", et % 60, (0,
                                t.jsx)("small", {
                                    children: "m"
                                })]
                            }) : (0,
                            t.jsxs)(t.Fragment, {
                                children: [et, (0,
                                t.jsx)("small", {
                                    children: "min"
                                })]
                            })
                        }), (0,
                        t.jsx)(C.BigNumber, {
                            label: "Total XP",
                            value: Math.floor(e.xp).toLocaleString()
                        }), (0,
                        t.jsx)(C.BigNumber, {
                            label: "Lessons",
                            value: e.lessons
                        }), (0,
                        t.jsx)(C.BigNumber, {
                            label: "Courses",
                            value: e.courses
                        })]
                    }), (0,
                    t.jsxs)("section", {
                        className: "fd-pilot-records",
                        "aria-labelledby": "pilot-records-title",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "fd-pilot-section-heading",
                            children: [(0,
                            t.jsx)("h3", {
                                id: "pilot-records-title",
                                children: "Personal bests"
                            }), (0,
                            t.jsx)(A.Segmented, {
                                className: "fd-pilot-filter",
                                size: "sm",
                                label: "Filter personal bests",
                                options: G,
                                value: _ ? "all" : "drone",
                                onChange: e => R("all" === e)
                            })]
                        }), (0,
                        t.jsxs)("p", {
                            className: "fd-pilot-record-summary",
                            children: [_ ? "All drones" : $.RACE_DRONE_NAMES[N.droneId], " ", (0,
                            t.jsxs)("span", {
                                children: ["· ", J.length, " ", 1 === J.length ? "personal best" : "personal bests"]
                            })]
                        }), "loading" === y ? (0,
                        t.jsx)(i.LoadingState, {
                            className: "fd-pilot-empty",
                            title: "Loading personal bests…"
                        }) : "error" === y ? (0,
                        t.jsx)("div", {
                            role: "status",
                            children: (0,
                            t.jsx)(i.EmptyState, {
                                className: "fd-pilot-empty",
                                icon: "flag",
                                title: "Personal bests could not load.",
                                children: "Retry below to see saved race times."
                            })
                        }) : J.length ? (0,
                        t.jsx)("ul", {
                            children: J.map(a => {
                                var i;
                                let n = w(e, a)
                                  , o = a.legacyReplayId ?? a.replayId
                                  , d = !!o && (!!n || !!a.legacyReplayId || !a.attemptId)
                                  , c = !!n && a.currentCourse && !!f
                                  , m = a.currentCourse ? n ? void 0 : "This time has no compatible race recording." : "This course has changed since this personal best.";
                                return (0,
                                t.jsxs)("li", {
                                    children: [(0,
                                    t.jsx)("span", {
                                        className: "fd-pilot-race-icon",
                                        "aria-hidden": "true",
                                        children: (0,
                                        t.jsx)(s.Icon, {
                                            name: "flag",
                                            size: 20
                                        })
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "fd-pilot-race-name",
                                        children: [(0,
                                        t.jsx)("strong", {
                                            children: a.name
                                        }), (0,
                                        t.jsxs)("span", {
                                            children: ["gridworks" === (i = a.mapId) ? "Playground Classic" : i === b.WHOOP_WORLD_MAP_ID ? "Whoop World" : i === b.DRIFT_PARK_MAP_ID ? "Drift Park" : i.startsWith("user:") ? "Community map" : "Official map", _ && ` \xb7 ${a.droneId ? $.RACE_DRONE_NAMES[a.droneId] : "Legacy"}`, !a.currentCourse && " · Previous course"]
                                        })]
                                    }), (0,
                                    t.jsx)("strong", {
                                        className: "fd-pilot-time",
                                        children: (0,
                                        T.formatTimeAttack)(a.timeMs)
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "fd-pilot-record-actions",
                                        children: [(0,
                                        t.jsx)(r.Button, {
                                            size: "sm",
                                            tone: "ghost",
                                            icon: (0,
                                            t.jsx)(s.Icon, {
                                                name: "play",
                                                size: 13,
                                                filled: !0
                                            }),
                                            disabled: !d || u,
                                            onClick: () => o && (0,
                                            I.requestHomeExit)( () => h(o, a.name, a)),
                                            "aria-label": `Spectate ${a.name}${a.droneId ? ` with ${$.RACE_DRONE_NAMES[a.droneId]}` : ""}`,
                                            title: d ? "Spectate this personal best" : "No replay saved",
                                            children: "Watch"
                                        }), l ? (0,
                                        t.jsx)(r.Button, {
                                            size: "sm",
                                            tone: "primary",
                                            trailingIcon: q?.copied && q.attemptId === a.attemptId ? (0,
                                            t.jsx)(s.Icon, {
                                                name: "check",
                                                size: 15
                                            }) : (0,
                                            t.jsx)(s.Icon, {
                                                name: "copy",
                                                size: 14
                                            }),
                                            disabled: !n,
                                            onClick: () => n && void er(n),
                                            onBlur: () => H(e => e?.copied ? null : e),
                                            title: n ? "Copy a link to this replay" : "This time has no shareable recording.",
                                            "aria-label": `Copy link to ${a.name}${a.droneId ? ` with ${$.RACE_DRONE_NAMES[a.droneId]}` : ""}`,
                                            children: q?.copied && q.attemptId === a.attemptId ? "Copied" : "Copy link"
                                        }) : (0,
                                        t.jsx)(r.Button, {
                                            size: "sm",
                                            tone: "primary",
                                            trailingIcon: (0,
                                            t.jsx)(s.Icon, {
                                                name: "arrow-right",
                                                size: 15
                                            }),
                                            disabled: !c || u || !!g,
                                            onClick: () => f?.(a),
                                            title: m ?? g ?? void 0,
                                            "aria-label": `Challenge ${a.name}${a.droneId ? ` with ${$.RACE_DRONE_NAMES[a.droneId]}` : ""}`,
                                            children: "Challenge"
                                        })]
                                    }), q?.fallback && q.attemptId === a.attemptId && (0,
                                    t.jsx)(E.TextInput, {
                                        className: "fd-pilot-share-fallback",
                                        label: `${a.name} replay link`,
                                        readOnly: !0,
                                        value: q.fallback,
                                        onFocus: e => e.target.select(),
                                        autoFocus: !0
                                    })]
                                }, `${a.raceId}:${a.droneId}:${a.courseRevision}`)
                            }
                            )
                        }) : (0,
                        t.jsx)(i.EmptyState, {
                            className: "fd-pilot-empty",
                            icon: "flag",
                            title: _ ? "No race times yet." : "No race times on this drone yet.",
                            children: _ ? "The next starting gate is a good place to begin." : "Choose another drone or view all personal bests."
                        }), !_ && Q > 0 && (0,
                        t.jsxs)(n.TextLink, {
                            className: "fd-pilot-legacy",
                            trailingIcon: (0,
                            t.jsx)(s.Icon, {
                                name: "arrow-right",
                                size: 13
                            }),
                            onClick: () => R(!0),
                            children: ["View ", Q, " older ", 1 === Q ? "record" : "records", " in All drones"]
                        }), (0,
                        t.jsxs)("p", {
                            className: "fd-pilot-challenge-hint",
                            children: [(0,
                            t.jsx)(s.Icon, {
                                name: "flag",
                                size: 14
                            }), " ", l ? "Copy a link to share a replay. Anyone can watch it." : "Challenge a time. Its ghost and drone will be ready to race."]
                        }), u && (0,
                        t.jsx)("p", {
                            className: "fd-pilot-action-status",
                            role: "status",
                            children: "Getting things ready…"
                        }), !l && g && (0,
                        t.jsx)("p", {
                            className: "fd-pilot-action-status",
                            role: "status",
                            children: g
                        }), x && (0,
                        t.jsx)("p", {
                            className: "fd-pilot-error",
                            role: "alert",
                            children: x
                        })]
                    })]
                })]
            }), c && (0,
            t.jsxs)("details", {
                className: "fd-pilot-account",
                children: [(0,
                t.jsx)("summary", {
                    children: "Account & pilot name"
                }), c]
            }), e.canModerate && (0,
            t.jsxs)("section", {
                className: "fd-pilot-moderation",
                "aria-labelledby": "pilot-moderation-title",
                children: [(0,
                t.jsx)("h3", {
                    id: "pilot-moderation-title",
                    children: "Moderation"
                }), (0,
                t.jsx)(O.ModerationActionForm, {
                    name: e.name,
                    banned: !!e.banned,
                    silenced: !!e.silenced,
                    busy: u,
                    onSubmit: p ?? (async e => (m?.(e.action, e.enabled),
                    !0))
                })]
            })]
        })
    }
    function q() {
        let e = (0,
        c.useSimStore)(e => e.username)
          , a = (0,
        c.useSimStore)(e => e.usernameChangedAt)
          , r = (0,
        c.useSimStore)(e => e.accountEmail)
          , i = (0,
        c.useSimStore)(e => e.accountProviders)
          , n = (0,
        c.useSimStore)(e => e.isAnonymous)
          , s = (0,
        c.useSimStore)(e => e.applyPlayerProfile)
          , l = (0,
        h.usernameChangeBlockedUntil)(a);
        return (0,
        t.jsxs)("div", {
            className: "fd-pilot-account-content",
            children: [(0,
            t.jsxs)("div", {
                children: [(0,
                t.jsx)("h3", {
                    children: "Pilot name"
                }), l ? (0,
                t.jsxs)("p", {
                    children: ["You can change your name again on ", (0,
                    h.formatUsernameChangeDate)(l), "."]
                }) : (0,
                t.jsx)(_.UsernameForm, {
                    mode: "change",
                    currentUsername: e,
                    onSaved: e => s({
                        username: e.username,
                        usernameChangedAt: e.usernameChangedAt
                    })
                })]
            }), (0,
            t.jsxs)("div", {
                children: [(0,
                t.jsx)("h3", {
                    children: "Account"
                }), (0,
                t.jsx)("p", {
                    children: n ? "Guest pilot" : i.includes("google") ? `Google${r ? ` \xb7 ${r}` : ""}` : r || "Account linked"
                })]
            })]
        })
    }
    function H({id: e, ownProfile: r=!1, embedded: s=!1, onClose: h}) {
        let[f,x] = (0,
        a.useState)(null)
          , [g,y] = (0,
        a.useState)("")
          , [b,v] = (0,
        a.useState)(0)
          , [j,_] = (0,
        a.useState)(!1)
          , R = (0,
        a.useRef)(!1)
          , C = (0,
        a.useRef)(null)
          , [A,E] = (0,
        a.useState)("")
          , L = (0,
        N.useMatchmaking)(N.queueLockLine)
          , [T,P] = (0,
        a.useState)(null)
          , M = (0,
        c.useSimStore)(e => e.settings.drone)
          , D = (0,
        c.useSimStore)(u.flownDrone)
          , $ = (0,
        c.useSimStore)(e => e.xp)
          , F = (0,
        c.useSimStore)(m.confirmedXp)
          , z = (0,
        c.useSimStore)(e => e.droneGifts)
          , O = (0,
        c.useSimStore)(e => e.username)
          , B = (0,
        c.useSimStore)(e => e.totalFlightTimeMs)
          , G = (0,
        c.useSimStore)(e => e.completedLessonIds)
          , Y = (0,
        c.useSimStore)(e => e.completedCourseIds)
          , W = (0,
        c.useSimStore)(e => e.isAdmin)
          , K = (0,
        c.useSimStore)(e => e.isMod)
          , X = (0,
        p.useInventory)(e => e.items)
          , Z = (0,
        p.useInventory)(e => e.packs)
          , J = (0,
        a.useMemo)( () => (0,
        o.localPilotDrones)(M, F, z), [M, F, z, X]);
        (0,
        a.useEffect)( () => {
            if (!e)
                return;
            let t = new AbortController;
            return async function() {
                try {
                    let {data: a, error: r} = await (0,
                    l.createClient)().rpc("get_pilot_profile", {
                        p_id: e
                    }).abortSignal(AbortSignal.any([t.signal, AbortSignal.timeout(1e4)]));
                    if (r)
                        throw r;
                    let i = o.pilotProfileSchema.parse(a);
                    t.signal.aborted || x(i)
                } catch {
                    t.signal.aborted || y("This pilot’s profile could not load. Try again.")
                }
            }(),
            () => t.abort()
        }
        , [e, b]),
        (0,
        a.useEffect)( () => () => C.current?.abort(), []);
        let Q = r ? {
            ...f ?? o.pilotProfileSchema.parse({
                id: e ?? "00000000-0000-4000-8000-000000000000",
                name: "",
                xp: 0,
                joinedAt: "",
                flightTimeMs: 0,
                lessons: 0,
                courses: 0,
                admin: !1,
                mod: !1,
                canModerate: !1,
                silenced: null,
                banned: null,
                records: []
            }),
            name: O || "Pilot",
            xp: $,
            flightTimeMs: B,
            lessons: G.length,
            courses: Y.length,
            admin: W,
            mod: K,
            droneLoadout: {
                ...M,
                archetype: (0,
                d.equippedDrone)(M, F, z)
            },
            drones: J,
            badges: Z.filter(e => e.badge_label && e.badge_visible).map(e => e.badge_label),
            canModerate: !1
        } : f;
        async function ee({action: t, enabled: a, reason: r, hours: i}) {
            if (R.current || !e)
                return !1;
            R.current = !0,
            _(!0),
            y("");
            try {
                let {error: n} = await (0,
                l.createClient)().rpc("moderate_pilot_with_reason", {
                    p_id: e,
                    p_action: t,
                    p_enabled: a,
                    p_reason: r,
                    p_hours: i
                }).abortSignal(AbortSignal.timeout(1e4));
                if (n)
                    throw n;
                return x(e => e && {
                    ...e,
                    ["silence" === t ? "silenced" : "banned"]: a
                }),
                !0
            } catch {
                return y("Could not update this pilot. Your permissions may have changed. Try again."),
                !1
            } finally {
                R.current = !1,
                _(!1)
            }
        }
        async function et(e) {
            if (!Q || R.current || (0,
            N.queueBusy)(N.useMatchmaking.getState()))
                return;
            let t = w(Q, e, c.useSimStore.getState().playerAccountId);
            if (!t || !e.currentCourse)
                return;
            R.current = !0,
            _(!0),
            E("");
            let a = new AbortController;
            function r(e) {
                a.signal.aborted || (C.current = null,
                R.current = !1,
                _(!1),
                E(e instanceof Error ? e.message : "Could not prepare this race. Try again."))
            }
            C.current = a;
            try {
                let i = await k({
                    mapId: e.mapId,
                    ghost: t
                }, a.signal);
                a.signal.throwIfAborted(),
                (0,
                I.requestHomeExit)( () => {
                    a.signal.throwIfAborted();
                    let e = (0,
                    N.queueLockLine)(N.useMatchmaking.getState());
                    if (e)
                        throw Error(e);
                    i(),
                    a.signal.aborted || h()
                }
                , r)
            } catch (e) {
                r(e)
            }
        }
        function ea() {
            C.current?.abort(),
            (0,
            I.requestHomeExit)(h)
        }
        let er = T?.record && Q ? w(Q, T.record, c.useSimStore.getState().playerAccountId) : null
          , ei = (0,
        t.jsxs)(t.Fragment, {
            children: [T ? (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsxs)("header", {
                    className: "fd-pilot-replay-heading",
                    children: [(0,
                    t.jsx)(n.TextLink, {
                        onClick: () => P(null),
                        children: "← Pilot profile"
                    }), (0,
                    t.jsx)("h2", {
                        id: "pilot-profile-title",
                        children: T.name
                    })]
                }), er && T.record ? (0,
                t.jsx)(S.RaceReplayViewer, {
                    ghost: er,
                    mapId: T.record.mapId
                }, er.attemptId) : (0,
                t.jsx)("iframe", {
                    className: "fd-pilot-replay",
                    src: `/replays/${encodeURIComponent(T.id)}?embedded=1`,
                    title: `Spectate ${T.name}`,
                    allow: "fullscreen"
                })]
            }) : Q ? (0,
            t.jsx)(U, {
                profile: Q,
                ownProfile: r,
                viewerDrone: D,
                embedded: s,
                accountContent: r ? (0,
                t.jsx)(q, {}) : void 0,
                busy: j,
                onModerationSubmit: ee,
                onReplay: (e, t, a) => P({
                    id: e,
                    name: t,
                    record: a
                }),
                onChallenge: et,
                challengeError: A,
                challengeLock: L,
                recordsStatus: r && e && !f ? g ? "error" : "loading" : void 0
            }) : (0,
            t.jsxs)("div", {
                className: "fd-pilot-loading",
                children: [(0,
                t.jsx)("h2", {
                    id: "pilot-profile-title",
                    children: "Pilot profile"
                }), g ? (0,
                t.jsx)("p", {
                    role: "status",
                    children: "Profile unavailable"
                }) : (0,
                t.jsx)(i.LoadingState, {
                    title: "Loading pilot…"
                })]
            }), g && (0,
            t.jsxs)("div", {
                className: "fd-pilot-error",
                role: "alert",
                children: [g, " ", !f && (0,
                t.jsx)(n.TextLink, {
                    onClick: () => {
                        y(""),
                        v(e => e + 1)
                    }
                    ,
                    children: "Retry"
                })]
            })]
        });
        return s ? (0,
        t.jsx)("section", {
            className: `fd-pilot-destination fdk-screen${T ? " fd-pilot-destination--replay" : ""}`,
            "aria-label": "Your pilot profile",
            children: ei
        }) : (0,
        t.jsx)(V, {
            replay: !!T,
            onClose: ea,
            onEscape: () => {
                T ? P(null) : ea()
            }
            ,
            animateClose: !1,
            children: ei
        })
    }
    function V({children: e, onClose: i, onEscape: l=i, replay: o=!1, animateClose: d=!0}) {
        let c = (0,
        a.useRef)(null)
          , u = (0,
        a.useRef)(!1);
        function m(e) {
            d ? (0,
            I.requestHomeExit)(e) : e()
        }
        return (0,
        a.useEffect)( () => {
            let e = c.current
              , t = document.activeElement;
            return e.showModal(),
            e.querySelector(".fd-pilot-close button")?.focus({
                preventScroll: !0
            }),
            () => {
                e.close(),
                t?.isConnected && t.focus()
            }
        }
        , []),
        (0,
        t.jsx)("dialog", {
            ref: c,
            className: `fd-pilot-dialog fdk-screen${o ? " fd-pilot-dialog--replay" : ""}`,
            "aria-labelledby": "pilot-profile-title",
            onCancel: e => {
                e.preventDefault(),
                m(l)
            }
            ,
            onPointerDown: e => {
                u.current = e.target === e.currentTarget
            }
            ,
            onClick: e => {
                u.current && e.target === e.currentTarget && m(i),
                u.current = !1
            }
            ,
            children: (0,
            t.jsxs)("div", {
                className: "fd-pilot-frame",
                children: [(0,
                t.jsx)("span", {
                    className: "fd-pilot-close",
                    children: (0,
                    t.jsx)(r.IconButton, {
                        label: "Close pilot profile",
                        icon: (0,
                        t.jsx)(s.Icon, {
                            name: "close",
                            size: 22
                        }),
                        size: "md",
                        autoFocus: !0,
                        onClick: () => m(i)
                    })
                }), (0,
                t.jsx)(n.Panel, {
                    className: "fd-pilot-sheet sim-ui-surface sim-scroll",
                    children: e
                })]
            })
        })
    }
    e.s(["PilotProfileCard", 0, U], 848491),
    e.s(["PilotDialog", 0, V, "PilotProfileDialog", 0, H, "PilotProfileModal", 0, function() {
        let e = (0,
        o.usePilotProfile)(e => e.id)
          , a = (0,
        c.useSimStore)(e => e.playerAccountId)
          , r = (0,
        o.usePilotProfile)(e => e.close);
        return e ? (0,
        t.jsx)(H, {
            id: e,
            ownProfile: e === a,
            onClose: r
        }, e) : null
    }
    ], 849022)
}
, 726422, e => {
    "use strict";
    var t = e.i(920755)
      , a = e.i(579612)
      , r = e.i(353198);
    class i extends Error {
        reason;
        constructor(e) {
            super(e),
            this.name = "UsernameError",
            this.reason = e
        }
    }
    async function n() {
        let e, a = (0,
        t.createClient)(), {data: {user: i}} = await a.auth.getUser();
        if (!i)
            return null;
        let[{data: n},{data: s},{data: l},{data: o}] = await Promise.all([a.from("profiles").select("*").eq("id", i.id).abortSignal(AbortSignal.timeout(15e3)).maybeSingle(), a.from("lesson_completions").select("lesson_id").eq("user_id", i.id).abortSignal(AbortSignal.timeout(15e3)), a.from("course_completions").select("course_id").eq("user_id", i.id).abortSignal(AbortSignal.timeout(15e3)), a.rpc("read_player_time_attack_prs").abortSignal(AbortSignal.timeout(8e3))]);
        if (!n || !s || !l || !o)
            throw Error("Your saved progress could not be loaded. Please try again.");
        if (2 !== n.xp_economy_version && 3 !== n.xp_economy_version)
            throw Error("The progression update is being installed. Please refresh shortly.");
        let d = (i.identities ?? []).map(e => e.provider).filter(e => "string" == typeof e);
        return {
            droneWheelOnboardingCompleted: !0 === n.drone_wheel_onboarding_completed,
            controlsOnboardingCompleted: !1 !== n.controls_onboarding_completed,
            xp: Math.max(0, Number(n.xp ?? 0) + Number(n.chain_xp_fraction ?? 0)),
            xpToday: (e = new Date().toISOString().slice(0, 10),
            n.xp_today_date !== e ? 0 : Math.max(0, n.xp_today ?? 0)),
            droneGifts: void 0 === n.drone_gifts ? ["freestyle"] : (0,
            r.parseDroneGifts)(n.drone_gifts),
            flightTimeMs: Math.max(0, Number(n.flight_time_ms ?? 0)),
            completedLessonIds: (s ?? []).map(e => e.lesson_id).filter(e => "string" == typeof e),
            completedCourseIds: (l ?? []).map(e => e.course_id).filter(e => "string" == typeof e),
            timeAttackPrs: function(e) {
                let t = {};
                for (let a of e) {
                    if ("string" != typeof a.time_attack_id)
                        continue;
                    let e = Number(a.time_ms);
                    if (!Number.isFinite(e) || e <= 0)
                        continue;
                    let r = t[a.time_attack_id];
                    (null == r || e < r) && (t[a.time_attack_id] = e)
                }
                return t
            }(o ?? []),
            isAnonymous: !!i.is_anonymous,
            email: i.email ?? null,
            providers: d,
            isAdmin: !0 === n.is_admin,
            isMod: !0 === n.is_mod,
            username: "string" == typeof n.username && n.username.trim().length > 0 ? n.username : null,
            usernameChangedAt: "string" == typeof n.username_changed_at ? n.username_changed_at : null
        }
    }
    async function s(e) {
        var a;
        let r = (0,
        t.createClient)()
          , {data: i, error: n} = await r.rpc("username_available", {
            p_username: e
        });
        if (n)
            throw n;
        let s = i ?? {}
          , l = "ok" === (a = s.reason) || "invalid" === a || "reserved" === a || "taken" === a ? a : "taken";
        return {
            available: !0 === s.available && "ok" === l,
            reason: l
        }
    }
    async function l(e) {
        let t;
        try {
            t = await (0,
            a.postJson)("/api/account/username", {
                username: e
            }, "Could not save. Try again.")
        } catch (r) {
            let e, t = r instanceof a.ApiError ? r.text("reason") : null;
            if ("blocked" === t)
                throw new i("blocked");
            throw new i((e = (t ?? (r instanceof Error ? r.message : "")).toLowerCase()).includes("invalid") ? "invalid" : e.includes("reserved") ? "reserved" : e.includes("taken") ? "taken" : e.includes("cooldown") ? "cooldown" : "unknown")
        }
        let r = t ?? {}
          , n = "string" == typeof r.username && r.username.trim().length > 0 ? r.username : null;
        if (!n)
            throw new i("unknown");
        return {
            username: n,
            usernameChangedAt: "string" == typeof r.username_changed_at ? r.username_changed_at : null
        }
    }
    e.s(["UsernameError", 0, i, "checkUsernameAvailable", 0, s, "discardLegacyLessonCompletionStorage", 0, function() {
        try {
            window.localStorage.removeItem("fd.sim.lessonCompletion.v1")
        } catch {}
    }
    , "fetchPlayerProfile", 0, n, "setUsernameRemote", 0, l])
}
, 469855, e => {
    "use strict";
    var t = e.i(937769)
      , a = e.i(543689)
      , r = e.i(738073)
      , i = e.i(284853)
      , n = e.i(998494);
    e.s(["MAP_CHANGED_NOTE", 0, "This map has changed since this flight.", "advanceViewerClock", 0, function(e, t, a) {
        e.playing && (e.t = Math.min(a, Math.max(0, e.t + Math.max(0, t) * e.rate)),
        e.t >= a && (e.playing = !1))
    }
    , "formatReplayTime", 0, function(e) {
        let t = Math.floor(Math.max(0, e));
        return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`
    }
    , "parseSharedReplay", 0, function(e) {
        if (!e || "object" != typeof e)
            return null;
        let s = Number(e.duration)
          , l = (0,
        n.recordingMapId)(e.map_id);
        if (!(0,
        a.isReplayId)(e.id) || !l || !Number.isFinite(s) || s <= 0 || !Array.isArray(e.frames) || !e.frames.length || !e.frames.every(r.isReplayFrame))
            return null;
        let o = e.frames;
        if (o.some( (e, t) => e.t < 0 || t > 0 && e.t < o[t - 1].t))
            return null;
        let d = e.time_attack && "object" == typeof e.time_attack ? (0,
        t.parseTimeAttackRow)(e.time_attack) : null;
        return {
            timeAttack: d?.mapId === l ? d : null,
            id: e.id,
            name: "string" == typeof e.name && e.name.trim() ? e.name : "Flight replay",
            mapId: l,
            mapRevision: (0,
            n.parseLayoutRevision)(e.map_revision),
            duration: s,
            frames: (0,
            i.transformMapReplayFrames)(l, o, "from-storage")
        }
    }
    , "raceReplayPath", 0, function({attemptId: e, replayId: t, replayRevision: a}) {
        return `/replays/race/${encodeURIComponent(e)}?${new URLSearchParams({
            replay: t,
            revision: a
        })}`
    }
    , "replayPath", 0, function(e) {
        return `/replays/${encodeURIComponent(e)}`
    }
    ])
}
, 388365, e => {
    "use strict";
    e.s(["RACE_DRONE_NAMES", 0, {
        freestyle: "Freestyle",
        whoop: "Tiny Whoop",
        cinewhoop: "Cinewhoop",
        "long-range": "Long Range",
        racer: "Racing"
    }])
}
, 172732, e => {
    "use strict";
    let t = new Set(["you", "admin", "administrator", "official", "staff", "support", "system", "flightdivision", "flight_division", "pilot"])
      , a = /^[A-Za-z][A-Za-z0-9_]*$/;
    function r(e) {
        return e.trim()
    }
    e.s(["formatUsernameChangeDate", 0, function(e) {
        return e.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
        })
    }
    , "trimUsername", 0, r, "usernameChangeBlockedUntil", 0, function(e, t=Date.now()) {
        let a = function(e) {
            if (!e)
                return null;
            let t = Date.parse(e);
            return Number.isNaN(t) ? null : t + 12096e5
        }(e);
        return null == a || t >= a ? null : new Date(a)
    }
    , "usernameFormatMessage", 0, function(e) {
        return "reserved" === e ? "That name is reserved." : "Use 3 to 16 letters, numbers, or underscores. Start with a letter."
    }
    , "usernameFormatReason", 0, function(e) {
        let i = r(e);
        return i.length < 3 || i.length > 16 || !a.test(i) || i.endsWith("_") ? "invalid" : t.has(i.toLowerCase()) ? "reserved" : "ok"
    }
    ])
}
, 174344, e => {
    "use strict";
    let t = (0,
    e.i(475254).default)("maximize", [["path", {
        d: "M8 3H5a2 2 0 0 0-2 2v3",
        key: "1dcmit"
    }], ["path", {
        d: "M21 8V5a2 2 0 0 0-2-2h-3",
        key: "1e4gt3"
    }], ["path", {
        d: "M3 16v3a2 2 0 0 0 2 2h3",
        key: "wsl5sc"
    }], ["path", {
        d: "M16 21h3a2 2 0 0 0 2-2v-3",
        key: "18trek"
    }]]);
    e.s(["Maximize", 0, t], 174344)
}
]);
