(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 552581, e => {
    e.v({
        back: "default-ghost-library-module__CoKRXq__back",
        dialogName: "default-ghost-library-module__CoKRXq__dialogName",
        drone: "default-ghost-library-module__CoKRXq__drone",
        duration: "default-ghost-library-module__CoKRXq__duration",
        empty: "default-ghost-library-module__CoKRXq__empty",
        error: "default-ghost-library-module__CoKRXq__error",
        head: "default-ghost-library-module__CoKRXq__head",
        library: "default-ghost-library-module__CoKRXq__library",
        list: "default-ghost-library-module__CoKRXq__list",
        loading: "default-ghost-library-module__CoKRXq__loading",
        notice: "default-ghost-library-module__CoKRXq__notice",
        player: "default-ghost-library-module__CoKRXq__player",
        playerState: "default-ghost-library-module__CoKRXq__playerState",
        retry: "default-ghost-library-module__CoKRXq__retry",
        row: "default-ghost-library-module__CoKRXq__row",
        rowActions: "default-ghost-library-module__CoKRXq__rowActions",
        rowTitle: "default-ghost-library-module__CoKRXq__rowTitle",
        save: "default-ghost-library-module__CoKRXq__save",
        saveStatus: "default-ghost-library-module__CoKRXq__saveStatus",
        scroll: "default-ghost-library-module__CoKRXq__scroll",
        times: "default-ghost-library-module__CoKRXq__times",
        watch: "default-ghost-library-module__CoKRXq__watch",
        watchHead: "default-ghost-library-module__CoKRXq__watchHead",
        watchTimes: "default-ghost-library-module__CoKRXq__watchTimes"
    })
}
, 386521, 843369, e => {
    "use strict";
    let t;
    var a = e.i(843476)
      , s = e.i(870895)
      , l = e.i(271645)
      , n = e.i(466465)
      , r = e.i(13784)
      , i = e.i(157430)
      , o = e.i(353198)
      , d = e.i(353937)
      , c = e.i(894969)
      , u = e.i(673378)
      , h = e.i(245433)
      , m = e.i(905289)
      , f = e.i(544383)
      , p = e.i(392436)
      , _ = e.i(388365)
      , g = e.i(869488)
      , y = e.i(396091)
      , x = e.i(184866)
      , b = e.i(793273);
    let j = y.ARRIVAL_MS - y.TOUCHDOWN_MS + 20
      , v = {
        1: [[.6, 1]],
        2: [[-.65, 1], [.65, 1]],
        3: [[-1, 1], [1, 1], [0, 1.45]]
    };
    function k(e) {
        let t = e.map( (e, t) => ({
            entry: e,
            index: t
        })).sort( (e, t) => e.entry.timeMs - t.entry.timeMs || Number(!!t.entry.player) - Number(!!e.entry.player) || e.index - t.index).slice(0, b.MAX_HERO_SLOTS).map( ({entry: e}) => e)
          , {right: a, back: s} = (0,
        x.studioGroundAxes)()
          , l = v[t.length - 1] ?? []
          , n = t.length;
        return t.map( (e, t) => {
            let r = 0 === t
              , [i,o] = r ? [0, 0] : [.36 * l[t - 1][0], .36 * l[t - 1][1]];
            return {
                key: e.id,
                rank: t + 1,
                entry: e,
                archetype: e.appearance.droneId,
                skin: e.appearance.skinId,
                skinOverride: e.appearance.skin,
                position: [S(a[0] * i + s[0] * o), S(a[1] * i + s[1] * o)],
                scale: r ? 1 : .72,
                delayMs: (r ? n - 1 : n - 1 - t) * j,
                labelAt: r ? "front" : "above",
                emphasis: !!e.player
            }
        }
        )
    }
    let S = e => Math.round(1e4 * e) / 1e4 || 0;
    e.s(["PODIUM_LANDING_GAP_MS", 0, j, "podiumSlots", 0, k], 843369);
    var R = e.i(125392);
    e.i(573798);
    var I = e.i(568204)
      , w = e.i(498475)
      , G = e.i(624834)
      , N = e.i(516560)
      , D = e.i(509381)
      , C = e.i(244144)
      , T = e.i(401778)
      , A = e.i(331919)
      , M = e.i(920755)
      , E = e.i(613105)
      , L = e.i(940072)
      , K = e.i(937769)
      , $ = e.i(330374)
      , J = e.i(94891);
    let q = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function B(e) {
        if (!e || "object" != typeof e)
            return null;
        let t = (0,
        $.parseRaceAppearance)(e.appearance)
          , a = (e, t) => Number.isSafeInteger(e) && e >= t;
        return "string" == typeof e.defaultId && q.test(e.defaultId) && "string" == typeof e.resultId && "string" == typeof e.userId && (null === e.attemptId || "string" == typeof e.attemptId && q.test(e.attemptId)) && "string" == typeof e.timeAttackId && e.timeAttackId && a(e.courseRevision, 1) && a(e.timeMs, 1) && a(e.launchSteps, 1) && a(e.tailSteps, 0) && o.DRONE_IDS.includes(e.droneId) && t && t.droneId === e.droneId && "string" == typeof e.storagePath && e.storagePath && "string" == typeof e.sha256 && "string" == typeof e.createdAt && "string" == typeof e.replayRevision && (null === e.replayId || "string" == typeof e.replayId) ? {
            defaultId: e.defaultId,
            attemptId: e.attemptId,
            resultId: e.resultId,
            userId: e.userId,
            name: "string" == typeof e.name && e.name ? e.name : "Pilot",
            timeAttackId: e.timeAttackId,
            courseRevision: e.courseRevision,
            droneId: e.droneId,
            timeMs: e.timeMs,
            launchSteps: e.launchSteps,
            tailSteps: e.tailSteps,
            appearance: t,
            replayId: e.replayId,
            replayRevision: e.replayRevision,
            storagePath: e.storagePath,
            sha256: e.sha256,
            createdAt: e.createdAt
        } : null
    }
    function O(e) {
        return Math.round(e.launchSteps * L.FLIGHT_TIMESTEP * 1e3) + e.timeMs
    }
    class P extends Error {
        forbidden;
        constructor(e, t=!1) {
            super(e),
            this.forbidden = t
        }
    }
    let z = "Admin access required"
      , X = e => !!e && /42501|Admin access required/.test(`${e.code} ${e.message}`);
    async function U(e, t, a) {
        let {data: s, error: l} = await (0,
        M.createClient)().rpc("default_ghosts_for_course", {
            p_time_attack_id: e,
            p_drone_id: t
        }).abortSignal((0,
        E.withDeadline)(a, 1e4));
        if (l)
            throw new P(X(l) ? z : "Default Ghosts unavailable",X(l));
        let n = "string" == typeof s ? JSON.parse(s) : s;
        return Array.isArray(n) ? n.flatMap(e => {
            let t = B(e);
            return t ? [t] : []
        }
        ) : []
    }
    async function F(e, t) {
        let {data: a, error: s} = await (0,
        M.createClient)().rpc("delete_default_ghost", {
            p_default_id: e
        }).abortSignal((0,
        E.withDeadline)(t, 1e4));
        if (s)
            throw new P(X(s) ? z : "Could not delete. Try again",X(s));
        let l = "string" == typeof a ? JSON.parse(a) : a
          , n = l && "object" == typeof l ? l.status : void 0;
        if ("deleted" === n || "not_found" === n)
            return n;
        throw new P("Could not delete. Try again")
    }
    async function W(e, t) {
        let {data: a, error: s} = await (0,
        M.createClient)().rpc("get_default_ghost_descriptor", {
            p_default_id: e
        }).abortSignal((0,
        E.withDeadline)(t, 1e4));
        if (s)
            throw new P(X(s) ? z : "Default Ghost unavailable",X(s));
        let l = "string" == typeof a ? JSON.parse(a) : a;
        return l ? B(l) : null
    }
    async function H(e, t) {
        let a = fetch(`/api/sim/races/defaults/${encodeURIComponent(e.defaultId)}`, {
            cache: "no-store",
            signal: (0,
            E.withDeadline)(t, 15e3)
        })
          , s = (0,
        M.createClient)().from("race_course_versions").select("map_id, spawn, gates").eq("time_attack_id", e.timeAttackId).eq("revision", e.courseRevision).abortSignal((0,
        E.withDeadline)(t, 1e4)).maybeSingle()
          , [l,{data: n, error: r}] = await Promise.all([a, s]);
        if (r)
            throw new P("Course version unavailable. Try again");
        if (!n)
            throw new P("This course version no longer exists, so the recording cannot play on it");
        let i = (0,
        K.parseTimeAttackRow)({
            ...n,
            id: e.timeAttackId,
            name: "Default Ghost",
            sort_order: 0,
            competitive_revision: e.courseRevision
        });
        if (!i)
            throw new P("This course version cannot be read");
        if (403 === l.status)
            throw new P(z,!0);
        if (404 === l.status)
            throw new P("This Default Ghost was deleted");
        if (!l.ok)
            throw new P("Recording unavailable. Try again");
        let o = await l.json()
          , d = B(o.metadata);
        if (!d || "string" != typeof o.url || d.defaultId !== e.defaultId || d.sha256 !== e.sha256 || d.timeMs !== e.timeMs || d.launchSteps !== e.launchSteps || d.tailSteps !== e.tailSteps || d.droneId !== e.droneId)
            throw new P("Recording no longer matches this Default Ghost");
        let c = await (0,
        h.downloadRaceRecording)(o.url, t)
          , u = (0,
        J.defaultRecordingProblem)(c, {
            timeMs: e.timeMs,
            droneId: e.droneId,
            skinId: e.appearance.skinId,
            launchSteps: e.launchSteps,
            tailSteps: e.tailSteps
        });
        if ("launch" === u)
            throw new P("This recording has no verified launch, so it cannot play as a Default Ghost");
        if (u)
            throw new P("This recording is not the saved default's");
        let m = (0,
        J.fullLaunchTimeline)(c);
        if (!m)
            throw new P("This recording has no verified launch, so it cannot play as a Default Ghost");
        return {
            entry: e,
            marks: {
                firstGate: m.firstGate,
                finish: m.finish,
                end: m.end
            },
            replay: {
                id: e.defaultId,
                name: i.name,
                mapId: i.mapId,
                duration: m.end,
                frames: m.frames,
                timeAttack: i,
                appearance: e.appearance
            }
        }
    }
    var Y = e.i(883620)
      , V = e.i(762447)
      , Z = e.i(552581);
    function Q(e) {
        let t = new Date(e);
        if (Number.isNaN(t.getTime()))
            return "";
        let a = t.toLocaleDateString("en-GB", {
            timeZone: "UTC",
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
          , s = t.toLocaleTimeString("en-GB", {
            timeZone: "UTC",
            hour: "2-digit",
            minute: "2-digit"
        });
        return `${a} \xb7 ${s} UTC`
    }
    let ee = e => e instanceof Error ? e.message : "Something went wrong";
    function et({state: e, canSave: t, onSave: s, loadEntry: n=W}) {
        let[r,i] = (0,
        l.useState)(null)
          , o = e && ("saved" === e.status || "exists" === e.status) ? e.defaultId : null;
        (0,
        l.useEffect)( () => {
            if (!o)
                return;
            let e = new AbortController;
            return n(o, e.signal).then(t => {
                e.signal.aborted || i(t)
            }
            ).catch( () => {}
            ),
            () => e.abort()
        }
        , [o, n]);
        let d = r && r.defaultId === o ? r : null
          , c = e?.status === "saving"
          , h = !!o
          , m = e && ("pending" === e.status || "error" === e.status);
        return (0,
        a.jsxs)("div", {
            className: Z.default.save,
            "data-default-ghost-save": !0,
            children: [!h && (0,
            a.jsx)(w.Button, {
                tone: "primary",
                size: "sm",
                busy: c,
                disabled: !t || c,
                onClick: s,
                children: c ? "Saving…" : "Save as Default Ghost"
            }), e && "saving" !== e.status && (0,
            a.jsxs)("p", {
                className: Z.default.saveStatus,
                role: "error" === e.status || "pending" === e.status ? "alert" : "status",
                "data-tone": h ? "saved" : "note",
                children: [h && (0,
                a.jsx)(C.Icon, {
                    name: "check-circle",
                    size: 18
                }), (0,
                A.defaultGhostMessage)(e), m && (0,
                a.jsx)(D.TextLink, {
                    className: Z.default.retry,
                    onClick: s,
                    children: "Retry"
                })]
            }), h && d && (0,
            a.jsxs)("p", {
                className: Z.default.duration,
                children: ["Release to finish ", (0,
                a.jsx)("time", {
                    children: (0,
                    u.formatRaceTime)(O(d))
                })]
            })]
        })
    }
    function ea({timeAttackId: e, courseName: t, currentRevision: s, droneId: n, onDroneChange: r, onBack: i, onWatch: d, loaders: c={}}) {
        let h = c.list ?? U
          , m = c.remove ?? F
          , [f,p] = (0,
        l.useState)(n)
          , [g,y] = (0,
        l.useState)(0)
          , [x,b] = (0,
        l.useState)([])
          , [j,v] = (0,
        l.useState)(null)
          , [k,S] = (0,
        l.useState)(!1)
          , [R,I] = (0,
        l.useState)(null)
          , [w,N] = (0,
        l.useState)(null)
          , T = (0,
        l.useRef)(null);
        async function A() {
            if (j) {
                S(!0),
                I(null);
                try {
                    let e = await m(j.defaultId);
                    b(e => [...e, j.defaultId]),
                    N("deleted" === e ? `Deleted the ${(0,
                    u.formatRaceTime)(j.timeMs)} Default Ghost. Its original result and best stay.` : "That Default Ghost was already deleted."),
                    v(null)
                } catch (e) {
                    I(e instanceof P ? e.message : "Could not delete. Try again")
                } finally {
                    S(!1)
                }
            }
        }
        return (0,
        l.useEffect)( () => {
            T.current?.focus()
        }
        , []),
        (0,
        a.jsxs)("section", {
            className: Z.default.library,
            "aria-labelledby": "default-ghosts-heading",
            "data-default-ghost-library": !0,
            children: [(0,
            a.jsxs)("header", {
                className: Z.default.head,
                children: [(0,
                a.jsxs)(D.TextLink, {
                    className: Z.default.back,
                    onClick: i,
                    children: [(0,
                    a.jsx)(C.Icon, {
                        name: "chevron-left",
                        size: 24
                    }), " Back"]
                }), (0,
                a.jsxs)("h2", {
                    id: "default-ghosts-heading",
                    ref: T,
                    tabIndex: -1,
                    children: ["Default Ghosts ", (0,
                    a.jsx)("span", {
                        children: t
                    })]
                })]
            }), (0,
            a.jsx)(Y.Select, {
                label: "Drone",
                className: Z.default.drone,
                value: f,
                onChange: e => {
                    N(null),
                    p(e),
                    r?.(e)
                }
                ,
                options: o.DRONE_IDS.map(e => ({
                    value: e,
                    label: _.RACE_DRONE_NAMES[e]
                }))
            }), (0,
            a.jsx)(es, {
                timeAttackId: e,
                droneId: f,
                currentRevision: s,
                list: h,
                gone: x,
                onRetry: () => y(e => e + 1),
                onWatch: d,
                onDelete: e => {
                    I(null),
                    v(e)
                }
            }, `${f}:${g}`), w && (0,
            a.jsx)("p", {
                className: Z.default.notice,
                role: "status",
                children: w
            }), (0,
            a.jsx)(G.ConfirmDialog, {
                open: !!j,
                destructive: !0,
                title: "Delete Default Ghost?",
                confirmLabel: "Delete",
                cancelLabel: "Cancel",
                busy: k,
                busyLabel: "Deleting…",
                error: R,
                closeOnBackdrop: !1,
                description: j && (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)("p", {
                        className: Z.default.dialogName,
                        children: (0,
                        a.jsxs)("b", {
                            children: [t, " · ", _.RACE_DRONE_NAMES[j.droneId]]
                        })
                    }), (0,
                    a.jsxs)("p", {
                        children: ["Time Attack score ", (0,
                        a.jsx)("time", {
                            children: (0,
                            u.formatRaceTime)(j.timeMs)
                        }), (0,
                        a.jsx)("br", {}), "Release to finish ", (0,
                        a.jsx)("time", {
                            children: (0,
                            u.formatRaceTime)(O(j))
                        }), (0,
                        a.jsx)("br", {}), (0,
                        a.jsx)("small", {
                            children: Q(j.createdAt)
                        })]
                    }), (0,
                    a.jsx)("p", {
                        children: "This recording will no longer fill new races. Races already using it can finish."
                    }), (0,
                    a.jsx)("p", {
                        children: "The original result and personal best stay."
                    })]
                }),
                onConfirm: () => void A(),
                onCancel: () => {
                    k || v(null)
                }
            })]
        })
    }
    function es({timeAttackId: e, droneId: t, currentRevision: s, list: n, gone: r, onRetry: i, onWatch: o, onDelete: d}) {
        let[c,h] = (0,
        l.useState)(null);
        (0,
        l.useEffect)( () => {
            let a = new AbortController;
            return n(e, t, a.signal).then(e => {
                a.signal.aborted || h({
                    entries: e
                })
            }
            ).catch(e => {
                a.signal.aborted || h({
                    error: ee(e)
                })
            }
            ),
            () => a.abort()
        }
        , [e, t, n]);
        let m = c && "error" in c ? c.error : null
          , f = c && "entries" in c ? c.entries.filter(e => !r.includes(e.defaultId)) : null;
        return (0,
        a.jsxs)("div", {
            className: Z.default.scroll,
            "aria-busy": null === c,
            children: [null === c && (0,
            a.jsx)(G.LoadingState, {
                className: Z.default.loading,
                title: "Loading Default Ghosts"
            }), m && (0,
            a.jsxs)("div", {
                className: Z.default.error,
                role: "alert",
                children: [m, " ", !/Admin access/.test(m) && (0,
                a.jsx)(D.TextLink, {
                    onClick: i,
                    children: "Retry"
                })]
            }), f && !f.length && (0,
            a.jsx)(G.EmptyState, {
                icon: "trophy",
                className: Z.default.empty,
                title: "No Default Ghosts on this drone",
                children: "Save a completed Time Attack run to add one."
            }), f && f.length > 0 && (0,
            a.jsx)(D.List, {
                label: "Default Ghosts",
                className: Z.default.list,
                children: f.map(e => {
                    let t = e.courseRevision === s ? "compatible" : "changed";
                    return (0,
                    a.jsx)(D.ListRow, {
                        className: Z.default.row,
                        title: (0,
                        a.jsxs)("span", {
                            className: Z.default.rowTitle,
                            children: [(0,
                            a.jsx)("b", {
                                children: _.RACE_DRONE_NAMES[e.droneId]
                            }), (0,
                            a.jsx)("small", {
                                children: Q(e.createdAt)
                            }), "compatible" === t ? (0,
                            a.jsx)(I.Badge, {
                                tone: "acid",
                                icon: (0,
                                a.jsx)(C.Icon, {
                                    name: "check-circle",
                                    size: 14
                                }),
                                children: "Compatible"
                            }) : (0,
                            a.jsx)(I.Badge, {
                                tone: "brick",
                                icon: (0,
                                a.jsx)(C.Icon, {
                                    name: "circle-alert",
                                    size: 14
                                }),
                                children: "Course changed"
                            })]
                        }),
                        meta: (0,
                        a.jsxs)("span", {
                            className: Z.default.times,
                            children: [(0,
                            a.jsxs)("span", {
                                children: [(0,
                                a.jsx)("small", {
                                    children: "Time Attack score"
                                }), (0,
                                a.jsx)("time", {
                                    children: (0,
                                    u.formatRaceTime)(e.timeMs)
                                })]
                            }), (0,
                            a.jsxs)("span", {
                                children: [(0,
                                a.jsx)("small", {
                                    children: "Release to finish"
                                }), (0,
                                a.jsx)("time", {
                                    children: (0,
                                    u.formatRaceTime)(O(e))
                                })]
                            })]
                        }),
                        trail: (0,
                        a.jsxs)("span", {
                            className: Z.default.rowActions,
                            children: [(0,
                            a.jsx)(w.Button, {
                                tone: "primary",
                                size: "sm",
                                onClick: () => o(e),
                                "aria-label": `Watch the ${(0,
                                u.formatRaceTime)(e.timeMs)} Default Ghost`,
                                children: "Watch"
                            }), (0,
                            a.jsx)(w.Button, {
                                size: "sm",
                                onClick: () => d(e),
                                "aria-label": `Delete the ${(0,
                                u.formatRaceTime)(e.timeMs)} Default Ghost`,
                                children: "Delete"
                            })]
                        })
                    }, e.defaultId)
                }
                )
            })]
        })
    }
    function el({entry: e, courseName: t, onBack: s, load: n=H}) {
        let[r,i] = (0,
        l.useState)(0)
          , o = (0,
        l.useRef)(null);
        return (0,
        l.useEffect)( () => {
            o.current?.focus()
        }
        , []),
        (0,
        a.jsxs)("section", {
            className: Z.default.watch,
            "aria-labelledby": "default-ghost-watch-heading",
            "data-default-ghost-watch": !0,
            children: [(0,
            a.jsxs)("header", {
                className: Z.default.watchHead,
                children: [(0,
                a.jsxs)("div", {
                    children: [(0,
                    a.jsx)("h2", {
                        id: "default-ghost-watch-heading",
                        children: t
                    }), (0,
                    a.jsxs)("p", {
                        children: [_.RACE_DRONE_NAMES[e.droneId], " · ", Q(e.createdAt)]
                    })]
                }), (0,
                a.jsxs)("dl", {
                    className: Z.default.watchTimes,
                    children: [(0,
                    a.jsxs)("div", {
                        children: [(0,
                        a.jsx)("dt", {
                            children: "Time Attack score"
                        }), (0,
                        a.jsxs)("dd", {
                            children: [(0,
                            a.jsx)("time", {
                                children: (0,
                                u.formatRaceTime)(e.timeMs)
                            }), (0,
                            a.jsx)("small", {
                                children: "First gate to finish"
                            })]
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        children: [(0,
                        a.jsx)("dt", {
                            children: "Release to finish"
                        }), (0,
                        a.jsxs)("dd", {
                            children: [(0,
                            a.jsx)("time", {
                                children: (0,
                                u.formatRaceTime)(O(e))
                            }), (0,
                            a.jsx)("small", {
                                children: "Online duration"
                            })]
                        })]
                    })]
                }), (0,
                a.jsx)(w.Button, {
                    ref: o,
                    icon: (0,
                    a.jsx)(C.Icon, {
                        name: "chevron-left",
                        size: 24
                    }),
                    onClick: s,
                    children: "Back to Default Ghosts"
                })]
            }), (0,
            a.jsx)(en, {
                entry: e,
                load: n,
                onRetry: () => i(e => e + 1)
            }, `${e.defaultId}:${r}`)]
        })
    }
    function en({entry: e, load: t, onRetry: s}) {
        let[n,r] = (0,
        l.useState)(null);
        (0,
        l.useEffect)( () => {
            let a = new AbortController;
            return t(e, a.signal).then(e => {
                a.signal.aborted || r({
                    clip: e
                })
            }
            ).catch(e => {
                a.signal.aborted || r({
                    error: ee(e)
                })
            }
            ),
            () => a.abort()
        }
        , [e, t]);
        let i = n && "clip" in n ? n.clip : null
          , o = n && "error" in n ? n.error : null
          , d = i ? [{
            t: 0,
            label: "Throttle release"
        }, {
            t: i.marks.firstGate,
            label: "First gate"
        }, {
            t: i.marks.finish,
            label: "Finish"
        }, ...i.marks.end > i.marks.finish ? [{
            t: i.marks.end,
            label: "Clip end"
        }] : []] : [];
        return (0,
        a.jsxs)("div", {
            className: Z.default.player,
            children: [i && (0,
            a.jsx)(V.ReplayPlayer, {
                clip: i.replay,
                embedded: !0,
                marks: d,
                note: i.marks.end > i.marks.finish ? "The clip includes the post-finish tail. The tail adds no scoring time." : "This recording ends at the finish line."
            }), !i && (0,
            a.jsx)("div", {
                className: Z.default.playerState,
                role: o ? "alert" : "status",
                children: o ? (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)("p", {
                        children: o
                    }), !/Admin access|deleted|no longer exists|no verified launch|not the saved/.test(o) && (0,
                    a.jsx)(D.TextLink, {
                        onClick: s,
                        children: "Retry"
                    })]
                }) : (0,
                a.jsx)(G.LoadingState, {
                    title: "Loading recording"
                })
            })]
        })
    }
    let er = new Map
      , ei = f.ghostLabel
      , eo = e => e instanceof Error ? e.message : "Could not load ghost";
    function ed({droneId: e, skins: t, result: s, onReady: n, save: r}) {
        let i = (0,
        d.equippedDroneSkin)(t, e)
          , c = (0,
        o.droneSkin)(e, i)
          , h = (0,
        l.useMemo)( () => {
            var e;
            let t, l, n;
            return s ? (e = s,
            t = new Map,
            l = [{
                id: "player",
                appearance: e.appearance,
                timeMs: e.timeMs,
                player: !0
            }],
            n = new Map([["player", "You"]]),
            e.ghosts.forEach( (a, s) => {
                if (!a.entry.appearance)
                    return;
                let r = (0,
                f.raceGhostKey)(a.entry);
                l.push({
                    id: r,
                    appearance: a.entry.appearance,
                    timeMs: a.entry.timeMs
                }),
                t.set(r, (0,
                m.racerColor)(s)),
                n.set(r, a.entry.you ? "saved" === e.saveStatus && e.timeMs < a.entry.timeMs ? "You · previous PB" : "You · PB" : ei(a.entry))
            }
            ),
            k(l).map(e => ({
                ...e,
                label: (0,
                a.jsxs)("div", {
                    className: `${T.default.lineupLabel} fd-activity-result-label`,
                    "data-player": e.entry.player || void 0,
                    style: {
                        "--ghost-color": t.get(e.key)
                    },
                    children: [(0,
                    a.jsx)("span", {
                        children: e.rank
                    }), (0,
                    a.jsxs)("div", {
                        children: [(0,
                        a.jsx)("b", {
                            children: (0,
                            a.jsx)("span", {
                                children: n.get(e.key)
                            })
                        }), (0,
                        a.jsx)("time", {
                            children: (0,
                            u.formatRaceTime)(e.entry.timeMs)
                        })]
                    })]
                })
            }))) : null
        }
        , [s])
          , p = (0,
        l.useRef)(null)
          , y = (0,
        l.useRef)(n);
        (0,
        l.useLayoutEffect)( () => {
            y.current = n
        }
        , [n]);
        let x = (0,
        l.useMemo)( () => h ? h.map(e => ({
            key: e.key,
            drone: e.archetype,
            skin: e.skin,
            skinOverride: e.skinOverride,
            self: e.emphasis,
            tag: e.label
        })) : [{
            key: "player",
            drone: e,
            skin: i,
            self: !0
        }], [h, e, i]);
        return (0,
        l.useLayoutEffect)( () => {
            let e, t = p.current;
            if (!t)
                return;
            let a = () => {
                let a = t.getBoundingClientRect();
                e = {
                    entries: x,
                    layout: "results",
                    bounds: {
                        left: a.left / window.innerWidth,
                        top: a.top / window.innerHeight,
                        width: a.width / window.innerWidth,
                        height: a.height / window.innerHeight
                    },
                    onReady: () => y.current()
                },
                g.useActivityDisplay.setState({
                    display: e
                })
            }
            ;
            a();
            let s = new ResizeObserver(a);
            return s.observe(t),
            window.addEventListener("resize", a),
            () => {
                s.disconnect(),
                window.removeEventListener("resize", a),
                g.useActivityDisplay.getState().display === e && g.useActivityDisplay.setState({
                    display: null
                })
            }
        }
        , [x]),
        (0,
        a.jsxs)("div", {
            className: T.default.stage,
            children: [!s && (0,
            a.jsx)("span", {
                className: T.default.stageWord,
                "aria-hidden": "true",
                children: _.RACE_DRONE_NAMES[e]
            }), s && (0,
            a.jsxs)("div", {
                className: T.default.finish,
                children: [(0,
                a.jsxs)("h2", {
                    children: [(0,
                    a.jsx)("span", {
                        className: "sr-only",
                        children: "Finish time "
                    }), (0,
                    u.formatRaceTime)(s.timeMs)]
                }), "rejected" === s.saveStatus ? (0,
                a.jsxs)("p", {
                    role: "alert",
                    children: ["Result not saved", s.rejectReason ? `: ${s.rejectReason}` : ""]
                }) : "offline" === s.saveStatus ? (0,
                a.jsx)("p", {
                    role: "status",
                    children: (0,
                    a.jsx)(R.OfflineTag, {})
                }) : "excluded" === s.saveStatus ? null != s.priorPbMs && (0,
                a.jsxs)("p", {
                    children: ["Best ", (0,
                    u.formatRaceTime)(s.priorPbMs)]
                }) : "unconfirmed" === s.saveStatus ? (0,
                a.jsx)("p", {
                    role: "status",
                    children: "Save not confirmed. Your progress may update later."
                }) : "saving" === s.saveStatus ? (0,
                a.jsx)("p", {
                    role: "status",
                    children: s.slowSave ? "Waiting for save confirmation. You can keep flying." : "Saving…"
                }) : "saved" === s.saveStatus && s.beatPr ? (0,
                a.jsx)("p", {
                    children: (0,
                    a.jsxs)(I.Badge, {
                        tone: "acid",
                        display: !0,
                        children: ["New best", s.priorPbMs ? ` −${((s.priorPbMs - s.timeMs) / 1e3).toFixed(3)}` : ""]
                    })
                }) : (0,
                a.jsxs)("p", {
                    children: ["Best ", (0,
                    u.formatRaceTime)(s.prMs)]
                }), r]
            }), (0,
            a.jsx)("div", {
                ref: p,
                className: T.default.stageCanvas,
                "data-results": !!s || void 0
            }), !s && (0,
            a.jsxs)("p", {
                className: T.default.appearanceLabel,
                children: [_.RACE_DRONE_NAMES[e], c.name ? ` \xb7 ${c.name}` : ""]
            })]
        })
    }
    function ec({scope: e, results: n, skins: r, xp: i, droneGifts: c, onStart: u, onRetry: p, onChangeGhosts: g, onBackToResults: y, onDefaultGhosts: x, tab: b, setTab: j, stageReady: v, initialSelection: k, onSelectionChange: S, loadBoards: R=h.fetchRaceBoards, loadGhost: I=h.fetchRaceGhost, result: A}) {
        let M = `${(0,
        f.raceSelectionKey)(e)}:${new Date().toISOString().slice(0, 10)}`
          , [E,L] = (0,
        l.useState)( () => t === e.accountId ? er.get(M) ?? null : null)
          , [K,$] = (0,
        l.useState)(!0)
          , [J,q] = (0,
        l.useState)(!1)
          , [B,O] = (0,
        l.useState)(0)
          , [P,z] = (0,
        l.useState)(k ?? [])
          , [X,U] = (0,
        l.useState)(n)
          , [F,W] = (0,
        l.useState)({})
          , [H,Y] = (0,
        l.useState)({})
          , [V,Z] = (0,
        l.useState)(0)
          , [Q,ee] = (0,
        l.useState)(!1)
          , [et,ea] = (0,
        l.useState)(!1)
          , es = (0,
        l.useRef)(!1)
          , el = (0,
        l.useRef)({})
          , [en] = (0,
        l.useState)( () => k?.map(e => ({
            kind: "attempt",
            entry: e
        })) ?? (0,
        f.readGhostIntents)(e))
          , [ed] = (0,
        l.useState)(void 0 !== k)
          , eh = (0,
        d.equippedDroneSkin)(r, e.droneId)
          , em = (0,
        s.racesUnlocked)(i)
          , ef = em && (0,
        o.isDroneUnlocked)(e.droneId, i, c);
        function ep(t) {
            es.current = !0,
            U(!0),
            ee(!1),
            z(t),
            S(t),
            (0,
            f.writeGhostIntents)(e, (0,
            f.ghostSelectionIntents)(t, E?.allTime.own ?? null))
        }
        (0,
        l.useEffect)( () => {
            let a = new AbortController;
            return t !== e.accountId && (er.clear(),
            t = e.accountId),
            R({
                timeAttackId: e.timeAttackId,
                courseRevision: e.courseRevision,
                droneId: e.droneId,
                signal: a.signal
            }).then(t => {
                if (!a.signal.aborted && (er.size > 40 && er.delete(er.keys().next().value),
                er.set(M, t),
                L(t),
                $(!1),
                q(!1),
                !es.current && !n)) {
                    let a = (0,
                    f.resolveGhostSelection)(en, t, e.droneId, e.courseRevision, e.timeAttackId);
                    es.current = !0,
                    z(a),
                    U(!0),
                    ed && (0,
                    f.writeGhostIntents)(e, (0,
                    f.ghostSelectionIntents)(a, t.allTime.own))
                }
            }
            ).catch( () => {
                !a.signal.aborted && ($(!1),
                q(!0),
                es.current || n || (es.current = !0,
                U(!0)))
            }
            ),
            () => a.abort()
        }
        , [e, M, B, n, en, ed, A?.saveStatus, A?.ghostSaveStatus, R]),
        (0,
        l.useEffect)( () => {
            let e = !1;
            for (let t of P) {
                let a = (0,
                f.raceGhostKey)(t);
                if (!el.current[a]) {
                    if (!(0,
                    f.usableRaceGhost)(t)) {
                        Promise.resolve().then( () => {
                            e || Y(e => ({
                                ...e,
                                [a]: t.ghostUnavailableReason || "Recording unavailable"
                            }))
                        }
                        );
                        continue
                    }
                    I(t).then(t => {
                        e || (el.current[a] = t,
                        W(e => ({
                            ...e,
                            [a]: t
                        })),
                        Y(e => {
                            let t = {
                                ...e
                            };
                            return delete t[a],
                            t
                        }
                        ))
                    }
                    ).catch(t => {
                        e || Y(e => ({
                            ...e,
                            [a]: eo(t)
                        }))
                    }
                    )
                }
            }
            return () => {
                e = !0
            }
        }
        , [P, V, I]);
        let e_ = E?.[b]
          , eg = e_ ? [...e_.rows, ...e_.own && !e_.rows.some(e => e.attemptId === e_.own.attemptId) ? [e_.own] : []] : []
          , ey = X && P.every(e => !!F[(0,
        f.raceGhostKey)(e)]);
        return (0,
        a.jsxs)("aside", {
            className: T.default.sidebar,
            children: [(0,
            a.jsxs)("section", {
                className: T.default.board,
                "aria-labelledby": "race-board-heading",
                children: [(0,
                a.jsxs)("h2", {
                    id: "race-board-heading",
                    children: [_.RACE_DRONE_NAMES[e.droneId], " ", (0,
                    a.jsx)("span", {
                        children: "leaderboard"
                    })]
                }), (0,
                a.jsx)(N.Segmented, {
                    label: "Leaderboard period",
                    size: "sm",
                    className: T.default.tabs,
                    value: b,
                    onChange: j,
                    options: [{
                        value: "allTime",
                        label: "All time"
                    }, {
                        value: "daily",
                        label: "Today"
                    }]
                }), !n && (0,
                a.jsxs)("div", {
                    className: T.default.ghostCount,
                    children: [(0,
                    a.jsxs)("span", {
                        children: ["Ghosts ", (0,
                        a.jsxs)("b", {
                            children: [P.length, "/3"]
                        })]
                    }), (0,
                    a.jsx)(D.TextLink, {
                        className: T.default.clear,
                        onClick: () => ep([]),
                        children: P.length ? "Clear" : "None"
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: T.default.boardScroll,
                    "aria-busy": K,
                    children: [K && !E ? (0,
                    a.jsx)(G.LoadingState, {
                        className: T.default.loading,
                        title: "Loading leaderboard"
                    }) : null, J && (0,
                    a.jsxs)("div", {
                        className: T.default.boardError,
                        role: "status",
                        children: ["Leaderboard unavailable ", (0,
                        a.jsx)(D.TextLink, {
                            onClick: () => {
                                $(!0),
                                O(e => e + 1)
                            }
                            ,
                            children: "Retry"
                        })]
                    }), e_ && !eg.length && (0,
                    a.jsx)(G.EmptyState, {
                        icon: "trophy",
                        className: T.default.empty,
                        title: "No times yet"
                    }), !!eg.length && (0,
                    a.jsxs)("table", {
                        className: T.default.table,
                        children: [(0,
                        a.jsx)("thead", {
                            children: (0,
                            a.jsxs)("tr", {
                                children: [(0,
                                a.jsx)("th", {
                                    scope: "col",
                                    children: "#"
                                }), (0,
                                a.jsx)("th", {
                                    scope: "col",
                                    children: "Pilot"
                                }), (0,
                                a.jsx)("th", {
                                    scope: "col",
                                    children: "Time"
                                }), !n && (0,
                                a.jsx)("th", {
                                    scope: "col",
                                    children: "Ghost"
                                })]
                            })
                        }), (0,
                        a.jsx)("tbody", {
                            children: eg.map( (e, t) => {
                                let s = (0,
                                f.raceGhostKey)(e)
                                  , l = P.findIndex(e => (0,
                                f.raceGhostKey)(e) === s)
                                  , r = l >= 0
                                  , i = !(0,
                                f.usableRaceGhost)(e);
                                return (0,
                                a.jsx)(eu, {
                                    entry: e,
                                    results: n,
                                    checked: r,
                                    color: (0,
                                    m.racerColor)(l),
                                    unavailable: i,
                                    pending: r && !F[s] && !H[s],
                                    onToggle: () => {
                                        let t;
                                        return t = (0,
                                        f.raceGhostKey)(e),
                                        void (P.some(e => (0,
                                        f.raceGhostKey)(e) === t) ? ep(P.filter(e => (0,
                                        f.raceGhostKey)(e) !== t)) : P.length >= 3 ? ee(!0) : ep([...P, e]))
                                    }
                                    ,
                                    gap: t > 0 && e.rank > eg[t - 1].rank + 1
                                }, `${s}:${t}`)
                            }
                            )
                        })]
                    }), e_?.nextOffset != null && (0,
                    a.jsx)(D.TextLink, {
                        className: T.default.more,
                        disabled: K,
                        trailingIcon: (0,
                        a.jsx)(C.Icon, {
                            name: "chevron-down",
                            size: 24
                        }),
                        onClick: () => {
                            $(!0),
                            R({
                                timeAttackId: e.timeAttackId,
                                courseRevision: e.courseRevision,
                                droneId: e.droneId,
                                offset: e_.nextOffset
                            }).then(e => L(t => t ? {
                                ...t,
                                [b]: {
                                    ...e[b],
                                    rows: [...t[b].rows, ...e[b].rows.filter(e => !t[b].rows.some(t => t.attemptId === e.attemptId))]
                                }
                            } : e)).catch( () => q(!0)).finally( () => $(!1))
                        }
                        ,
                        children: "More pilots"
                    })]
                }), !n && P.length > 0 && (0,
                a.jsx)("div", {
                    className: T.default.selections,
                    "aria-label": "Selected ghosts",
                    children: P.map( (e, t) => {
                        let s = (0,
                        f.raceGhostKey)(e)
                          , l = H[s];
                        return (0,
                        a.jsxs)("div", {
                            className: T.default.selection,
                            "data-error": !!l || void 0,
                            style: {
                                "--ghost-color": (0,
                                m.racerColor)(t)
                            },
                            children: [(0,
                            a.jsxs)("span", {
                                title: l || ei(e),
                                children: [ei(e), F[s] || l ? "" : " …"]
                            }), l && (0,
                            a.jsx)(w.IconButton, {
                                label: `Retry ${ei(e)} ghost`,
                                icon: (0,
                                a.jsx)(C.Icon, {
                                    name: "rotate",
                                    size: 24
                                }),
                                title: l,
                                onClick: () => {
                                    Y(e => {
                                        let t = {
                                            ...e
                                        };
                                        return delete t[s],
                                        t
                                    }
                                    ),
                                    Z(e => e + 1)
                                }
                            }), (0,
                            a.jsx)(w.IconButton, {
                                label: `Remove ${ei(e)} ghost`,
                                icon: (0,
                                a.jsx)(C.Icon, {
                                    name: "close",
                                    size: 24
                                }),
                                onClick: () => ep(P.filter(e => (0,
                                f.raceGhostKey)(e) !== s))
                            }), l && (0,
                            a.jsx)("small", {
                                children: l
                            })]
                        }, s)
                    }
                    )
                }), Q && (0,
                a.jsx)("p", {
                    className: T.default.controlMessage,
                    role: "status",
                    children: "3 ghosts maximum"
                }), et && (0,
                a.jsx)("p", {
                    className: T.default.controlMessage,
                    role: "alert",
                    children: "Race setup changed. Please re-enter the race."
                }), n && (0,
                a.jsxs)(D.TextLink, {
                    className: T.default.changeGhosts,
                    onClick: g,
                    children: [(0,
                    a.jsx)(C.Icon, {
                        name: "settings-2",
                        size: 24
                    }), " Change ghosts"]
                }), x && (0,
                a.jsxs)(D.TextLink, {
                    className: T.default.changeGhosts,
                    "data-default-ghosts": !0,
                    onClick: x,
                    children: [(0,
                    a.jsx)(C.Icon, {
                        name: "folder-open",
                        size: 24
                    }), " Default Ghosts"]
                })]
            }), (0,
            a.jsxs)("div", {
                className: T.default.actions,
                children: [y && (0,
                a.jsxs)(D.TextLink, {
                    className: T.default.back,
                    onClick: y,
                    children: [(0,
                    a.jsx)(C.Icon, {
                        name: "arrow-left",
                        size: 24
                    }), " Back to results"]
                }), !n && J && !X && (0,
                a.jsx)(D.TextLink, {
                    className: T.default.back,
                    onClick: () => ep([]),
                    children: "Race without ghosts"
                }), (0,
                a.jsx)(w.Button, {
                    tone: "primary",
                    size: "lg",
                    block: !0,
                    className: T.default.start,
                    "data-race-primary": !0,
                    disabled: !n && (!ef || !ey || !v),
                    trailingIcon: (0,
                    a.jsx)(C.Icon, {
                        name: "arrow-right",
                        size: 24
                    }),
                    onClick: () => {
                        n ? p() : !1 === u({
                            droneId: e.droneId,
                            skinId: eh,
                            ghosts: P.map(e => F[(0,
                            f.raceGhostKey)(e)]),
                            priorPbMs: E?.allTime.own?.timeMs ?? null
                        }) && ea(!0)
                    }
                    ,
                    children: n ? "Try again" : em ? ef ? "Start race" : `Unlocks at level ${o.DRONES[e.droneId].unlockLevel}` : `Unlocks at level ${s.RACE_UNLOCK_LEVEL}`
                })]
            })]
        })
    }
    function eu({entry: e, results: t, checked: s, color: l, unavailable: n, pending: r, gap: i, onToggle: o}) {
        return (0,
        a.jsxs)(a.Fragment, {
            children: [i && (0,
            a.jsx)("tr", {
                className: T.default.gap,
                "aria-hidden": "true",
                children: (0,
                a.jsx)("td", {
                    colSpan: t ? 3 : 4,
                    children: "···"
                })
            }), (0,
            a.jsxs)("tr", {
                "data-you": e.you || void 0,
                "data-selected": s || void 0,
                className: e.you ? "fdk-on-ink" : void 0,
                children: [(0,
                a.jsx)("td", {
                    children: e.rank
                }), (0,
                a.jsx)("td", {
                    children: e.you ? t ? "You" : "You · PB" : ei(e)
                }), (0,
                a.jsx)("td", {
                    children: (0,
                    a.jsx)("time", {
                        children: (0,
                        u.formatRaceTime)(e.timeMs)
                    })
                }), !t && (0,
                a.jsx)("td", {
                    children: (0,
                    a.jsxs)("label", {
                        className: T.default.checkbox,
                        title: n ? e.ghostUnavailableReason || "Recording unavailable" : void 0,
                        style: {
                            "--ghost-color": l
                        },
                        tabIndex: n && !s ? 0 : void 0,
                        "aria-label": n ? `${ei(e)}: ${e.ghostUnavailableReason || "Recording unavailable"}` : void 0,
                        children: [(0,
                        a.jsx)("input", {
                            type: "checkbox",
                            checked: s,
                            disabled: n && !s,
                            onChange: o,
                            "aria-label": `Race ${e.you ? "your personal best" : `${ei(e)}’s`} ghost, ${(e.timeMs / 1e3).toFixed(3)} seconds${n ? ", recording unavailable" : ""}`
                        }), (0,
                        a.jsx)("span", {
                            "aria-hidden": "true",
                            children: r ? (0,
                            a.jsx)("i", {}) : s ? (0,
                            a.jsx)(C.Icon, {
                                name: "check",
                                size: 22
                            }) : n ? (0,
                            a.jsx)(C.Icon, {
                                name: "minus",
                                size: 16
                            }) : null
                        })]
                    })
                })]
            })]
        })
    }
    e.s(["TimeAttackScreen", 0, function(e) {
        let {course: t, skins: s, result: o, onExit: d} = e;
        (0,
        c.useInventory)(e => e.items);
        let u = t.droneId ?? e.initialDroneId
          , [m,_] = (0,
        l.useState)(o ? "results" : "setup")
          , [g,y] = (0,
        l.useState)(null)
          , [x,b] = (0,
        l.useState)(null)
          , j = o ? "results" : "setup"
          , [v,k] = (0,
        l.useState)( () => {
            let a = e.initialGhosts?.filter(a => a.timeAttackId === t.id && a.courseRevision === (e.courseRevision ?? t.competitiveRevision ?? 1) && a.droneId === u && (0,
            f.usableRaceGhost)(a));
            return a?.length ? a.slice(0, 3) : void 0
        }
        )
          , [S,R] = (0,
        l.useState)("allTime")
          , [I,G] = (0,
        l.useState)(!1)
          , N = (0,
        l.useRef)(null)
          , D = (0,
        l.useRef)(null);
        (0,
        p.useRaceMenuInput)(D, d);
        let A = "results" === m && !!o
          , M = !!e.admin
          , E = A ? o.appearance.droneId : u
          , L = e.courseRevision ?? t.competitiveRevision ?? 1
          , K = (0,
        l.useMemo)( () => ({
            accountId: e.accountId,
            timeAttackId: t.id,
            courseRevision: L,
            droneId: E
        }), [e.accountId, t.id, L, E])
          , $ = (0,
        l.useMemo)( () => {
            var t, a;
            let s;
            return t = e.accountId,
            a = e.loadGhost ?? h.fetchRaceGhost,
            s = new Map,
            e => {
                let l = `${t ?? "guest"}:${(0,
                f.raceGhostKey)(e)}`
                  , n = s.get(l);
                if (n)
                    return n;
                s.size >= 15 && s.delete(s.keys().next().value);
                let r = a(e).catch(e => {
                    throw s.delete(l),
                    e
                }
                );
                return s.set(l, r),
                r
            }
        }
        , [e.accountId, e.loadGhost]);
        return (0,
        l.useEffect)( () => {
            let e = document.activeElement instanceof HTMLElement ? document.activeElement : null;
            return document.pointerLockElement && document.exitPointerLock(),
            N.current?.focus(),
            () => e?.focus()
        }
        , []),
        (0,
        l.useEffect)( () => {
            D.current?.contains(document.activeElement) || D.current?.querySelector('nav button[aria-pressed="true"]')?.focus()
        }
        , [m]),
        (0,
        a.jsxs)("section", {
            ref: D,
            className: `fd-menu fdk-screen fdk-on-chalk ${T.default.screen}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "race-screen-title",
            onKeyDown: e => {
                if (e.stopPropagation(),
                "Escape" === e.key && (e.preventDefault(),
                d()),
                "Tab" !== e.key)
                    return;
                let t = D.current?.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), [tabindex="0"]');
                if (!t?.length)
                    return;
                let a = t[0]
                  , s = t[t.length - 1];
                e.shiftKey && document.activeElement === a ? (e.preventDefault(),
                s.focus()) : e.shiftKey || document.activeElement !== s || (e.preventDefault(),
                a.focus())
            }
            ,
            children: [(0,
            a.jsxs)("header", {
                className: `fd-menu-header ${T.default.header}`,
                children: [(0,
                a.jsxs)("div", {
                    className: `fd-menu-brand ${i.default.lockup}`,
                    children: [(0,
                    a.jsx)(n.BrandLogo, {
                        on: "light",
                        priority: !0
                    }), (0,
                    a.jsx)(r.EarlyAccessBadge, {})]
                }), (0,
                a.jsx)("h1", {
                    id: "race-screen-title",
                    children: t.name
                }), (0,
                a.jsx)(w.Button, {
                    ref: N,
                    tone: "ghost",
                    className: T.default.exit,
                    icon: (0,
                    a.jsx)(C.Icon, {
                        name: "log-out",
                        size: 24
                    }),
                    onClick: d,
                    children: "Exit"
                })]
            }), (0,
            a.jsx)("div", {
                className: `fd-menu-content ${T.default.body}`,
                children: (0,
                a.jsx)("div", {
                    className: T.default.content,
                    children: "watch" === m && g ? (0,
                    a.jsx)(el, {
                        entry: g,
                        courseName: t.name,
                        load: e.defaultGhosts?.clip,
                        onBack: () => _("library")
                    }) : (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)(ed, {
                            droneId: K.droneId,
                            skins: s,
                            result: A ? o : null,
                            onReady: () => G(!0),
                            save: M && A && e.onSaveDefaultGhost ? (0,
                            a.jsx)(et, {
                                state: o.defaultGhost,
                                canSave: "saved" === o.saveStatus && !!o.attemptId,
                                onSave: e.onSaveDefaultGhost,
                                loadEntry: e.defaultGhosts?.entry
                            }) : null
                        }), "library" === m ? (0,
                        a.jsx)(ea, {
                            timeAttackId: t.id,
                            courseName: t.name,
                            currentRevision: L,
                            droneId: x ?? K.droneId,
                            loaders: e.defaultGhosts,
                            onDroneChange: b,
                            onBack: () => _(j),
                            onWatch: e => {
                                y(e),
                                _("watch")
                            }
                        }) : (0,
                        a.jsx)(ec, {
                            ...e,
                            scope: K,
                            results: A,
                            tab: S,
                            setTab: R,
                            loadGhost: $,
                            initialSelection: v,
                            onSelectionChange: k,
                            stageReady: I,
                            onChangeGhosts: () => _("setup"),
                            onDefaultGhosts: M ? () => _("library") : void 0,
                            onBackToResults: o && !A ? () => _("results") : void 0
                        }, `${(0,
                        f.raceSelectionKey)(K)}:${m}`)]
                    })
                })
            })]
        })
    }
    ], 386521)
}
, 401778, e => {
    e.v({
        actions: "time-attack-screen-module__u2DJSG__actions",
        appearanceLabel: "time-attack-screen-module__u2DJSG__appearanceLabel",
        back: "time-attack-screen-module__u2DJSG__back",
        board: "time-attack-screen-module__u2DJSG__board",
        boardError: "time-attack-screen-module__u2DJSG__boardError",
        boardScroll: "time-attack-screen-module__u2DJSG__boardScroll",
        body: "time-attack-screen-module__u2DJSG__body",
        changeGhosts: "time-attack-screen-module__u2DJSG__changeGhosts",
        checkbox: "time-attack-screen-module__u2DJSG__checkbox",
        clear: "time-attack-screen-module__u2DJSG__clear",
        content: "time-attack-screen-module__u2DJSG__content",
        controlMessage: "time-attack-screen-module__u2DJSG__controlMessage",
        empty: "time-attack-screen-module__u2DJSG__empty",
        exit: "time-attack-screen-module__u2DJSG__exit",
        finish: "time-attack-screen-module__u2DJSG__finish",
        gap: "time-attack-screen-module__u2DJSG__gap",
        ghostCount: "time-attack-screen-module__u2DJSG__ghostCount",
        header: "time-attack-screen-module__u2DJSG__header",
        lineupLabel: "time-attack-screen-module__u2DJSG__lineupLabel",
        loading: "time-attack-screen-module__u2DJSG__loading",
        more: "time-attack-screen-module__u2DJSG__more",
        screen: "time-attack-screen-module__u2DJSG__screen",
        selection: "time-attack-screen-module__u2DJSG__selection",
        selections: "time-attack-screen-module__u2DJSG__selections",
        sidebar: "time-attack-screen-module__u2DJSG__sidebar",
        spin: "time-attack-screen-module__u2DJSG__spin",
        stage: "time-attack-screen-module__u2DJSG__stage",
        stageCanvas: "time-attack-screen-module__u2DJSG__stageCanvas",
        stageLoading: "time-attack-screen-module__u2DJSG__stageLoading",
        stageWord: "time-attack-screen-module__u2DJSG__stageWord",
        start: "time-attack-screen-module__u2DJSG__start",
        table: "time-attack-screen-module__u2DJSG__table",
        tabs: "time-attack-screen-module__u2DJSG__tabs"
    })
}
]);
