(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 250466, e => {
    "use strict";
    let t;
    var r = e.i(843476)
      , i = e.i(333772)
      , n = e.i(288461)
      , a = e.i(998494)
      , s = e.i(816125)
      , o = e.i(271645)
      , l = e.i(353937)
      , u = e.i(263783)
      , c = e.i(246176)
      , d = e.i(37220)
      , p = e.i(106258)
      , m = e.i(771607)
      , h = e.i(814022)
      , f = e.i(809886);
    e.i(71901);
    var y = e.i(333794)
      , g = e.i(404961)
      , S = e.i(752834)
      , v = e.i(645793)
      , w = e.i(870895)
      , M = e.i(29394)
      , x = e.i(58849)
      , b = e.i(882902)
      , R = e.i(762815);
    function k() {
        let e = (0,
        p.useSimStore)(e => e.isAnonymous ? null : e.playerAccountId)
          , t = (0,
        p.useSimStore)(e => e.phase)
          , r = (0,
        c.useLobbySocial)(e => e.requests.filter(e => "incoming" === e.direction).map(e => e.id).sort().join(","));
        (0,
        o.useEffect)( () => {
            e && r && u.useNotifications.getState().refreshSummary()
        }
        , [e, r]),
        (0,
        o.useEffect)( () => {
            "menu" === t && c.useLobbySocial.setState({
                activeLaunch: null
            })
        }
        , [t]);
        let i = (0,
        c.useLobbySocial)(e => e.squad)
          , n = (0,
        c.useLobbySocial)(e => e.launchAttempt);
        (0,
        o.useEffect)( () => {
            let t = c.useLobbySocial.getState().activeLaunch;
            !t || i && i.id === t.squadId && i.launchVersion === t.launchVersion && i.mapId === t.mapId && i.members.some(t => t.id === e) || c.useLobbySocial.setState({
                activeLaunch: null
            })
        }
        , [i, e]);
        let s = (0,
        o.useRef)(0)
          , k = (0,
        o.useRef)(new Map)
          , E = (0,
        o.useRef)(0);
        (0,
        o.useEffect)( () => {
            let t, r = () => {
                E.current++
            }
            ;
            if (r(),
            c.useLobbySocial.getState().reset(),
            k.current.clear(),
            !e)
                return;
            let i = !1
              , n = function(e) {
                let t = !1
                  , r = !1
                  , i = null
                  , n = null;
                async function a() {
                    for (; r && !t && e.canSync(); ) {
                        r = !1;
                        let n = e.read();
                        if (await e.send(n) && (i = n.status),
                        t)
                            return;
                        e.read().status !== n.status && (r = !0),
                        e.onPending(r && e.read().status !== i)
                    }
                }
                function s() {
                    return n || (!t && r && e.canSync() ? n = a().finally( () => {
                        n = null
                    }
                    ) : Promise.resolve())
                }
                return {
                    request: () => t ? Promise.resolve() : (r = !0,
                    e.read().status !== i && e.onPending(!0),
                    s()),
                    flush: s,
                    dispose() {
                        t = !0,
                        r = !1
                    }
                }
            }({
                read: () => {
                    let e = p.useSimStore.getState()
                      , t = (0,
                    h.flownDrone)(e);
                    return {
                        drone: t,
                        skin: (0,
                        l.equippedDroneSkin)(e.settings.drone.skins, t),
                        status: e.adminDraftMapId || S.useMapEditor.getState().active ? "away" : (0,
                        f.isMenuReplayBackdrop)(e.phase) ? "lobby" : "flying",
                        roomId: "online" === e.roomStatus.state ? e.roomStatus.room.id : null,
                        activity: function({inMatch: e, inRun: t, sittingOut: r}) {
                            return e ? "match" : t ? "run" : r ? "sitting_out" : null
                        }({
                            inMatch: !!b.useMatchLaunch.getState().active,
                            inRun: (0,
                            b.inTimedRun)(e),
                            sittingOut: (0,
                            R.sittingOutOf)(R.useSitOut.getState(), c.useLobbySocial.getState().squad)
                        })
                    }
                }
                ,
                canSync: () => !i && !document.hidden && !c.useLobbySocial.getState().busy,
                send: async ({drone: e, skin: t, status: r, roomId: i, activity: n}) => (await c.useLobbySocial.getState().sync(e, t, r, i, n),
                "ready" === c.useLobbySocial.getState().status),
                onPending: e => c.useLobbySocial.setState({
                    presenceSyncing: e
                })
            })
              , a = p.useSimStore.subscribe( (e, t) => {
                (e.adminDraftMapId !== t.adminDraftMapId || (0,
                f.isMenuReplayBackdrop)(e.phase) !== (0,
                f.isMenuReplayBackdrop)(t.phase) || (0,
                b.inTimedRun)(e) !== (0,
                b.inTimedRun)(t)) && n.request()
            }
            )
              , s = b.useMatchLaunch.subscribe( (e, t) => {
                !!e.active != !!t.active && n.request()
            }
            )
              , o = R.useSitOut.subscribe( (e, t) => {
                (e.sittingOut !== t.sittingOut || e.squadId !== t.squadId) && n.request()
            }
            )
              , u = c.useLobbySocial.subscribe( (e, t) => {
                t.busy && !e.busy && n.flush()
            }
            )
              , m = S.useMapEditor.subscribe( (e, t) => {
                e.active !== t.active && n.request()
            }
            );
            !async function() {
                if (await n.request(),
                i)
                    return;
                let e = new URL(window.location.href)
                  , t = e.searchParams.get("squad");
                t && (d.useMenuScene.getState().setSocialOpen(!0),
                await c.useLobbySocial.getState().act("join", t) && (e.searchParams.delete("squad"),
                window.history.replaceState(window.history.state, "", e)))
            }();
            let y = () => {
                clearTimeout(t),
                t = setTimeout( () => {
                    n.request(),
                    y()
                }
                , c.useLobbySocial.getState().squad || d.useMenuScene.getState().socialOpen ? 5e3 : 2e4)
            }
            ;
            y();
            let g = d.useMenuScene.subscribe( (e, t) => {
                e.socialOpen && !t.socialOpen && (n.request(),
                y())
            }
            )
              , v = c.useLobbySocial.subscribe( (e, t) => {
                !!e.squad != !!t.squad && y()
            }
            )
              , w = () => {
                document.hidden || n.request()
            }
            ;
            return document.addEventListener("visibilitychange", w),
            () => {
                i = !0,
                n.dispose(),
                r(),
                clearTimeout(t),
                g(),
                v(),
                a(),
                u(),
                m(),
                s(),
                o(),
                document.removeEventListener("visibilitychange", w),
                c.useLobbySocial.getState().reset()
            }
        }
        , [e]);
        let I = i?.id
          , D = i?.mapId
          , L = i?.mapRevision
          , j = (0,
        d.useMenuScene)(e => e.mapAttempt);
        (0,
        o.useEffect)( () => {
            if (!e || !I || !D || !(0,
            f.isMenuReplayBackdrop)(t))
                return void d.useMenuScene.setState({
                    mapLoading: !1,
                    mapError: ""
                });
            let r = !1
              , i = () => {
                let t = p.useSimStore.getState()
                  , i = c.useLobbySocial.getState();
                return !r && !t.isAnonymous && t.playerAccountId === e && (0,
                f.isMenuReplayBackdrop)(t.phase) && i.squad?.id === I && i.squad.mapId === D
            }
            ;
            return async function() {
                d.useMenuScene.setState({
                    mapLoading: !0,
                    mapError: ""
                });
                try {
                    let e = await (0,
                    y.prepareLobbyMap)(D);
                    if (i() && void 0 !== L && ((0,
                    g.resolveMap)(e).revision ?? 0) !== L)
                        throw Error("The map was updated while loading. Try again.");
                    i() && d.useMenuScene.getState().selectMap(e)
                } catch (e) {
                    i() && d.useMenuScene.setState({
                        mapLoading: !1,
                        mapError: e instanceof Error ? e.message : "The squad map could not load."
                    })
                }
            }(),
            () => {
                r = !0
            }
        }
        , [e, I, D, L, t, j]);
        let A = (0,
        d.useMenuScene)(e => e.selectedMap)
          , T = (0,
        p.useSimStore)(e => (0,
        w.xpToLevel)((0,
        m.confirmedXp)(e)))
          , C = (0,
        p.useSimStore)(e => e.isAdmin);
        return (0,
        o.useEffect)( () => {
            if (I || !(0,
            f.isMenuReplayBackdrop)(t))
                return;
            if ((0,
            v.mapLockedFor)((0,
            g.resolveMap)(A), (0,
            w.xpRequiredForLevel)(T), C))
                return void d.useMenuScene.getState().selectMap(a.DEFAULT_MAP_ID);
            if (!(0,
            a.isOfficialMapId)(A) || (0,
            M.canAccessMap)(A))
                return;
            let e = !0;
            return d.useMenuScene.setState({
                mapLoading: !0,
                mapError: ""
            }),
            (0,
            x.prepareOfficialMapForPlay)(A).then( () => {
                e && d.useMenuScene.setState({
                    mapLoading: !1
                }),
                e = !1
            }
            , t => {
                e && d.useMenuScene.setState({
                    mapLoading: !1,
                    mapError: t instanceof Error ? t.message : "The map could not load."
                }),
                e = !1
            }
            ),
            () => {
                e && d.useMenuScene.setState({
                    mapLoading: !1
                }),
                e = !1
            }
        }
        , [I, A, t, j, T, C]),
        (0,
        o.useEffect)( () => {
            var t;
            if (!i || !e)
                return;
            let r = n !== s.current;
            s.current = n;
            let a = k.current.get(i.id);
            if (k.current.set(i.id, i.launchVersion),
            !i.roomId || (t = i.launchVersion,
            !(t > 0) || !r && (void 0 === a || !(t > a))) || i.members.find(t => t.id === e)?.admitted === !1)
                return;
            let o = p.useSimStore.getState().phase;
            if (!(0,
            f.isMenuReplayBackdrop)(o) || S.useMapEditor.getState().active)
                return;
            let l = ++E.current;
            c.useLobbySocial.setState({
                launchError: !1,
                error: ""
            });
            let u = () => {
                let t = p.useSimStore.getState()
                  , r = c.useLobbySocial.getState().squad;
                return l === E.current && !t.isAnonymous && t.playerAccountId === e && (0,
                f.isMenuReplayBackdrop)(t.phase) && !S.useMapEditor.getState().active && !!i.roomId && r?.id === i.id && r.launchVersion === i.launchVersion && r.mapId === i.mapId && r.mapRevision === i.mapRevision && r.roomId === i.roomId && r.members.some(t => t.id === e)
            }
            ;
            !async function() {
                try {
                    let e = await (0,
                    y.prepareLobbyMap)(i.mapId);
                    if (!u())
                        return;
                    if (void 0 !== i.mapRevision && ((0,
                    g.resolveMap)(e).revision ?? 0) !== i.mapRevision)
                        throw Error("The map was updated while loading. Review it before launching again.");
                    d.useMenuScene.getState().selectMap(e),
                    p.useSimStore.getState().guardSettings( () => {
                        u() && (c.useLobbySocial.setState({
                            activeLaunch: {
                                squadId: i.id,
                                launchVersion: i.launchVersion,
                                mapId: e
                            }
                        }),
                        e.startsWith("user:") ? (p.useSimStore.getState().playPersonalMap(e),
                        p.useSimStore.setState({
                            editorLibraryOpen: !1
                        })) : p.useSimStore.getState().startFlight(e, {
                            squad: !0
                        }))
                    }
                    )
                } catch (e) {
                    if (!u())
                        return;
                    c.useLobbySocial.setState({
                        launchError: !0,
                        error: e instanceof Error ? e.message : "The squad map could not load."
                    })
                }
            }()
        }
        , [i, e, n]),
        null
    }
    var E = e.i(105524)
      , I = e.i(462239)
      , D = e.i(613105)
      , L = e.i(174637);
    class j extends Error {
        code;
        constructor(e) {
            super(e),
            this.code = e
        }
    }
    class A {
        base;
        token;
        fetcher;
        pass;
        constructor(e, t, r= (...e) => fetch(...e)) {
            this.base = e,
            this.token = t,
            this.fetcher = r,
            this.pass = null
        }
        find(e) {
            return this.send({
                action: "find",
                ...e,
                region: (0,
                L.nearestRegion)(),
                build: L.SIM_BUILD
            })
        }
        act(e, t) {
            return this.send({
                action: e,
                ...t,
                ...this.pass ? {
                    pass: this.pass
                } : {}
            })
        }
        choose(e, t) {
            return this.send({
                action: "choose",
                choice: e,
                ...t,
                ...this.pass ? {
                    pass: this.pass
                } : {}
            })
        }
        vote(e, t) {
            return this.send({
                action: "vote",
                option: e,
                ...t,
                ...this.pass ? {
                    pass: this.pass
                } : {}
            })
        }
        async send(e) {
            let t, r = await this.token();
            if (!r)
                throw new j("unauthorized");
            try {
                t = await this.fetcher(`${this.base}/matchmaking`, {
                    method: "POST",
                    signal: (0,
                    D.withDeadline)(null, 8e3),
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${r}`
                    },
                    body: JSON.stringify(e)
                })
            } catch {
                throw new j("offline")
            }
            let i = await t.json().catch( () => null);
            if (!t.ok || !i?.status)
                throw 401 === t.status && (this.pass = null),
                new j(t.status >= 500 || !i?.error ? "offline" : i.error);
            return "string" == typeof i.pass && (this.pass = i.pass),
            i.status
        }
    }
    let T = e => e.course ? {
        course: e.course
    } : {}
      , C = e => e.from ? {
        from: e.from
    } : {}
      , F = e => e.arena ? {
        arena: e.arena
    } : {}
      , P = new Set(["rate_limited", "auth_unavailable", "unauthorized"])
      , z = [5e3, 1e4, 15e3]
      , O = {
        search: null,
        launch: null,
        ready: null,
        error: null
    };
    class _ {
        deps;
        timer;
        inFlight;
        stopped;
        constructor(e) {
            this.deps = e,
            this.timer = null,
            this.inFlight = null,
            this.stopped = !1,
            this.active = !1,
            this.leaves = 0,
            this.sent = 0,
            this.leaveSettled = 0,
            this.leaving = null,
            this.last = O,
            this.failures = 0
        }
        active;
        leaves;
        sent;
        leaveSettled;
        leaving;
        last;
        failures;
        now() {
            return (this.deps.now ?? Date.now)()
        }
        async run(e, t=!1, r=!1) {
            let i = this.leaves
              , n = ++this.sent;
            r && (this.leaving = n);
            let a = () => this.leaves !== i || t && (null !== this.leaving || n <= this.leaveSettled);
            try {
                let t = await e();
                if (r && this.leaving === n && this.settleLeave(),
                a())
                    return !0;
                let i = function(e, t) {
                    switch (e.state) {
                    case "queued":
                        return {
                            search: {
                                mode: e.mode,
                                startedAt: t - e.queuedMs,
                                fillAt: t + e.fillInMs,
                                lead: e.lead,
                                leader: e.leader,
                                members: e.members
                            },
                            launch: null,
                            ready: null,
                            error: null
                        };
                    case "launching":
                        return {
                            search: null,
                            launch: {
                                mode: e.mode,
                                match: e.match,
                                map: e.map,
                                ...T(e),
                                ...F(e),
                                ...C(e),
                                endsAt: t + e.launchInMs
                            },
                            ready: null,
                            error: null
                        };
                    case "waiting":
                        return {
                            search: null,
                            launch: {
                                mode: e.mode,
                                match: e.match,
                                map: e.map,
                                ...T(e),
                                ...F(e),
                                ...C(e),
                                endsAt: null
                            },
                            ready: null,
                            error: null
                        };
                    case "ready":
                        return {
                            search: null,
                            launch: null,
                            ready: {
                                match: e.match,
                                mode: e.mode,
                                map: e.map,
                                ...T(e),
                                ...F(e),
                                ...C(e)
                            },
                            error: null
                        };
                    case "playing":
                        return {
                            search: null,
                            launch: null,
                            ready: null,
                            error: null,
                            playing: {
                                match: e.match,
                                mode: e.mode,
                                map: e.map,
                                ...T(e),
                                ...F(e)
                            }
                        };
                    case "after":
                        return {
                            search: null,
                            launch: null,
                            ready: null,
                            error: null,
                            after: {
                                mode: e.mode,
                                match: e.match,
                                map: e.map,
                                choice: e.choice,
                                byLeader: "leader" === e.by,
                                endsAt: t + e.endsInMs,
                                options: e.options,
                                votes: e.votes,
                                vote: e.vote
                            }
                        };
                    default:
                        return {
                            search: null,
                            launch: null,
                            ready: null,
                            error: e.error ?? null
                        }
                    }
                }(t, this.now());
                this.active = !!(i.search || i.launch || i.ready || i.playing || i.after),
                this.failures = 0,
                this.last = i,
                this.deps.onView(i, !0)
            } catch (i) {
                if (r && this.leaving === n && this.settleLeave(),
                a())
                    return !0;
                let e = i instanceof j ? i.code : "offline";
                if ("offline" === e)
                    return this.failures++,
                    this.deps.onView(this.last, !1),
                    !1;
                P.has(e) ? (this.failures++,
                t || this.deps.onView({
                    ...this.last,
                    error: e
                }, !0)) : (this.failures = 0,
                this.deps.onView({
                    ...this.last,
                    error: e
                }, !0))
            }
            return !0
        }
        poll() {
            if (this.stopped)
                return Promise.resolve();
            this.timer && (this.deps.cancel ?? clearTimeout)(this.timer),
            this.timer = null;
            let e = this.inFlight ?? this.run( () => this.deps.api.act("status", this.deps.report()), !0).then( () => {}
            );
            return this.inFlight = e,
            e.finally( () => {
                this.inFlight === e && (this.inFlight = null),
                this.next()
            }
            )
        }
        reschedule() {
            this.timer && (this.deps.cancel ?? clearTimeout)(this.timer),
            this.timer = null,
            this.next()
        }
        next() {
            if (this.stopped || this.timer)
                return;
            let e = this.failures ? z[Math.min(this.failures, z.length) - 1] : I.REPORT_EVERY_MS;
            (this.failures || this.active || this.deps.standingBy()) && (this.timer = (this.deps.schedule ?? setTimeout)( () => {
                this.timer = null,
                this.poll()
            }
            , e))
        }
        async find(e) {
            let t = await this.run( () => this.deps.api.find({
                ...e,
                ...this.deps.report()
            }));
            return this.reschedule(),
            t
        }
        settleLeave() {
            this.leaving = null,
            this.leaveSettled = this.sent
        }
        async act(e) {
            let t = "leave" === e;
            t && (this.leaves++,
            this.last = O),
            await this.run( () => this.deps.api.act(e, this.deps.report()), !1, t),
            this.reschedule()
        }
        async choose(e) {
            await this.run( () => this.deps.api.choose(e, this.deps.report())),
            this.reschedule()
        }
        async vote(e) {
            await this.run( () => this.deps.api.vote(e, this.deps.report())),
            this.reschedule()
        }
        stop() {
            this.stopped = !0,
            this.timer && (this.deps.cancel ?? clearTimeout)(this.timer),
            this.timer = null
        }
    }
    var V = e.i(617317)
      , q = e.i(920755)
      , B = e.i(233783);
    function N(e) {
        let t = B.useAfterMatch.getState();
        return !!e && t.match === e && "flyFree" === t.pressed
    }
    function W(e) {
        let t = B.useAfterMatch.getState()
          , r = E.useMatchmaking.getState().after;
        return t.match === e && "flyFree" === t.pressed && (r?.match !== e || "flyFree" !== r.choice)
    }
    function G() {
        let e = (0,
        p.useSimStore)(e => e.isAnonymous ? null : e.playerAccountId)
          , t = (0,
        c.useLobbySocial)(e => e.squad?.id ?? null)
          , r = (0,
        p.useSimStore)(e => e.phase);
        return (0,
        o.useEffect)( () => {
            let t = (0,
            L.sessionServiceUrl)();
            if (!t || !e)
                return void E.useMatchmaking.setState({
                    online: !1,
                    search: null,
                    launch: null
                });
            let r = !0
              , i = () => r && (p.useSimStore.getState().isAnonymous ? null : p.useSimStore.getState().playerAccountId) === e
              , n = new A(t,async () => (await (0,
            q.createClient)().auth.getSession()).data.session?.access_token ?? null)
              , a = function({enter: e, leave: t, current: r}) {
                let i = null
                  , n = null
                  , a = !1
                  , s = (a, s, o) => {
                    let l = a.match;
                    i = l,
                    e({
                        ...a,
                        ...o ? {
                            resumed: !0
                        } : {}
                    }, () => r() && !N(s)).then( () => {
                        "map_failed" === E.useMatchmaking.getState().error && E.useMatchmaking.setState({
                            error: null
                        })
                    }
                    ).catch(e => {
                        n = l,
                        e instanceof b.MatchLaunchAbandoned || E.useMatchmaking.setState({
                            error: "map_failed"
                        }),
                        t()
                    }
                    ).finally( () => {
                        i === l && (i = null)
                    }
                    )
                }
                ;
                return {
                    entering: () => i,
                    ready(e, t) {
                        if (!e || t === e.match || i === e.match || n === e.match || N(e.from) || b.useMatchLaunch.getState().yielded === e.match)
                            return;
                        let {mode: r, map: o, course: l, arena: u, from: c} = e;
                        s({
                            match: e.match,
                            mode: r,
                            map: o,
                            ...l ? {
                                course: l
                            } : {},
                            ...u ? {
                                arena: u
                            } : {}
                        }, c, !a)
                    },
                    resume(e, t) {
                        let r = !a;
                        a = !0,
                        r && e && t !== e.match && i !== e.match && n !== e.match && b.useMatchLaunch.getState().yielded !== e.match && s(e, void 0, !0)
                    }
                }
            }({
                enter: b.enterMatch,
                leave: () => void s.act("leave"),
                current: i
            })
              , s = new _({
                api: n,
                report: () => {
                    let e;
                    return {
                        busy: (e = b.useMatchLaunch.getState().active,
                        (0,
                        b.inTimedRun)(p.useSimStore.getState()) || !!e && B.useAfterMatch.getState().match !== e.match),
                        sittingOut: (0,
                        R.sittingOutOf)(R.useSitOut.getState(), c.useLobbySocial.getState().squad)
                    }
                }
                ,
                standingBy: () => !!c.useLobbySocial.getState().squad,
                onView: (e, t) => {
                    i() && ((0,
                    E.applyMatchmakingView)(e, t),
                    function(e, t, r) {
                        let {active: i, yielded: n} = b.useMatchLaunch.getState();
                        r.ready(e.ready, i?.match),
                        t && r.resume(e.playing, i?.match);
                        let a = r.entering()
                          , s = e.after?.match ?? e.playing?.match;
                        s && i?.match !== s && a !== s && n !== s ? W(s) ? e.after?.match === s && "flyFree" !== e.after.choice && E.useMatchmaking.getState().chooseAfter("flyFree") : E.useMatchmaking.getState().leaveMatchSeat() : e.after?.choice === "flyFree" && e.after.byLeader && i?.match === e.after.match && ((0,
                        B.pressAfter)("flyFree"),
                        (0,
                        b.leaveMatch)())
                    }(e, t, a))
                }
            });
            return (0,
            E.attachMatchmaking)(s, () => {
                let e = p.useSimStore.getState();
                return {
                    drone: (0,
                    h.flownDrone)(e),
                    map: e.personalMapId ?? ((0,
                    f.isMenuReplayBackdrop)(e.phase) ? d.useMenuScene.getState().selectedMap : e.settings.map.mapId),
                    room: b.useMatchLaunch.getState().active?.match ?? null
                }
            }
            ),
            s.poll(),
            () => {
                r = !1,
                s.stop(),
                (0,
                E.attachMatchmaking)(null)
            }
        }
        , [e]),
        (0,
        o.useEffect)( () => {
            t && (0,
            E.pollMatchmaking)()
        }
        , [t]),
        (0,
        o.useEffect)( () => {
            "menu" === r && (0,
            b.leaveMatch)()
        }
        , [r]),
        (0,
        o.useEffect)( () => {
            let e, t, r;
            return e = null,
            t = b.useMatchLaunch.subscribe( (t, r) => {
                let i = r.active?.match;
                if (!i || i === t.active?.match)
                    return;
                t.active || W(i) || t.yielded === i || E.useMatchmaking.getState().leaveMatchSeat();
                let n = B.useAfterMatch.getState();
                t.active && "race" === n.mode && n.match === i && null !== n.next && V.useMatchRace.getState().match === i ? e = i : n.match && (t.active || "flyFree" !== n.pressed || "menu" === p.useSimStore.getState().phase) && (0,
                B.clearAfterMatch)()
            }
            ),
            r = V.useMatchRace.subscribe( (t, r) => {
                if (!e || r.match !== e || t.match === e)
                    return;
                let i = B.useAfterMatch.getState();
                i.match === e && "flyFree" !== i.pressed && (0,
                B.clearAfterMatch)(),
                e = null
            }
            ),
            () => {
                t(),
                r()
            }
        }
        , []),
        null
    }
    var U = e.i(49925)
      , Q = e.i(373636)
      , K = e.i(884316)
      , $ = e.i(306212)
      , H = e.i(786545)
      , Y = e.i(31288)
      , J = e.i(829858)
      , X = e.i(480858);
    let Z = "legacy" === (0,
    $.physicsFromSearch)("u" < typeof location ? "" : location.search).name;
    function ee({mapId: e, lessonId: t, draftTest: r}) {
        let i = (0,
        n.useMapJoin)(e => e.generation)
          , s = (0,
        n.useMapJoin)(e => "joining" === e.status)
          , l = (0,
        n.useMapJoin)(e => e.offline)
          , u = (0,
        p.useSimStore)(e => !!(0,
        L.sessionServiceUrl)() && !!e.playerAccountId && !e.isAnonymous)
          , d = (0,
        p.useSimStore)(e => "lessonDemoCapture" === e.phase || "showcaseCapture" === e.phase)
          , m = (0,
        p.useSimStore)(e => null !== e.personalMapId) || (0,
        a.isPersonalMapId)(e)
          , h = (0,
        b.useMatchLaunch)(e => e.active)
          , f = (0,
        K.usePracticeLaunch)(r => !t && !d && r.active?.arena.mapId === e)
          , y = (0,
        p.useSimStore)(X.soloRaceOf)
          , S = (0,
        Q.usePublishedGridworks)(e => e.revision)
          , v = (0,
        c.useLobbySocial)(e => e.activeLaunch)
          , w = (0,
        c.useLobbySocial)(e => e.squad)
          , M = (0,
        p.useSimStore)(e => e.isAnonymous ? null : e.playerAccountId)
          , x = (0,
        o.useMemo)( () => {
            let i = t || r ? null : "gridworks" === e ? (0,
            U.gridworksLayoutRevision)() ?? 0 : e.startsWith("official:") || (0,
            a.isPersonalMapId)(e) ? (0,
            g.mapById)(e).revision ?? null : null
              , n = (0,
            J.flightSquadAdmission)({
                launch: v,
                squad: w,
                accountId: M,
                mapId: e,
                lessonId: t
            })
              , s = t || n?.mapId !== e ? null : n.squadId;
            return (0,
            Y.roomRequestFor)({
                online: u,
                capture: d,
                draft: r,
                legacyPhysics: Z,
                practice: f,
                offlineChoice: l,
                mapId: e,
                lessonId: t,
                revision: i,
                activeMatch: h,
                soloRace: y,
                personal: m,
                squadId: s,
                squadLaunch: s ? n.launchVersion : 0
            })
        }
        , [S, t, r, e, v, w, M, u, d, f, l, h, y, m]);
        return (0,
        o.useEffect)( () => {
            if (s && x)
                return (0,
                H.prefetchAdmission)(x, async () => (await (0,
                q.createClient)().auth.getSession()).data.session?.access_token ?? null, {
                    rejoin: (0,
                    X.lobbyToReturnTo)(x),
                    takeover: !0
                })
        }
        , [i, s, x]),
        null
    }
    var et = e.i(662827)
      , er = e.i(94800)
      , ei = e.i(436007)
      , en = e.i(190072)
      , ea = e.i(940072)
      , es = e.i(983040);
    function eo() {
        let {world: e, step: t, rigidBodyStates: r} = (0,
        ei.useRapier)()
          , i = (0,
        o.useMemo)( () => new ea.FixedStepClock, [])
          , n = (0,
        o.useRef)(new Map)
          , a = (0,
        o.useRef)(p.useSimStore.getState().phase)
          , s = (0,
        o.useMemo)( () => ({
            matrix: new en.Matrix4,
            position: new en.Vector3,
            rotation: new en.Quaternion,
            targetRotation: new en.Quaternion,
            scale: new en.Vector3
        }), []);
        return (0,
        er.useFrame)( (o, l) => {
            let u = p.useSimStore.getState();
            if (document.hidden || (0,
            f.isPhasePaused)(u.phase) || u.phase !== a.current) {
                a.current = u.phase,
                i.reset(),
                n.current.clear();
                return
            }
            let c = i.advance(l);
            if ((0,
            es.advanceReplayClock)(c.dropped),
            c.interrupted)
                return void n.current.clear();
            for (let i = 0; i < c.steps; i++)
                r.forEach( (e, t) => {
                    if (e.rigidBody.isFixed())
                        return;
                    let r = n.current.get(t);
                    r || (r = {
                        position: new en.Vector3,
                        rotation: new en.Quaternion
                    },
                    n.current.set(t, r)),
                    r.position.copy(e.rigidBody.translation()),
                    r.rotation.copy(e.rigidBody.rotation())
                }
                ),
                e.timestep = ea.FLIGHT_TIMESTEP,
                t(ea.FLIGHT_TIMESTEP);
            for (let[e,t] of n.current) {
                let i = r.get(e);
                if (!i) {
                    n.current.delete(e);
                    continue
                }
                s.position.copy(t.position).lerp(i.rigidBody.translation(), c.alpha),
                s.rotation.copy(t.rotation).slerp(s.targetRotation.copy(i.rigidBody.rotation()), c.alpha),
                s.matrix.compose(s.position, s.rotation, i.scale).premultiply(i.invertedWorldMatrix),
                "instancedMesh" === i.meshType ? i.setMatrix(s.matrix) : (s.matrix.decompose(s.position, s.rotation, s.scale),
                i.object.position.copy(s.position),
                i.object.quaternion.copy(s.rotation))
            }
        }
        , -50),
        null
    }
    var el = e.i(101407)
      , eu = e.i(170341)
      , ec = e.i(260095)
      , ed = e.i(932931)
      , ep = e.i(34226)
      , em = e.i(147424)
      , eh = e.i(382897)
      , ef = e.i(247638)
      , ey = e.i(579832)
      , eg = e.i(420001)
      , eS = e.i(818686)
      , ev = e.i(753522)
      , ew = e.i(266246)
      , eM = e.i(324792)
      , ex = e.i(212236)
      , eb = e.i(54111)
      , eR = e.i(475127)
      , ek = e.i(252497);
    let eE = 1 / 60
      , eI = 1 / 60 / 4
      , eD = [7, 10, 2.5, 1, .7, 1, .7, 2, 1, .5, 2, 1, .5]
      , eL = ev.ARMOUR.map(e => {
        let t = e => e.half[0] * e.half[1] * e.half[2]
          , r = ev.ARMOUR.filter(t => t.part === e.part).reduce( (e, r) => e + t(r), 0);
        return eD[e.part] * t(e) / r
    }
    );
    function ej(e, t) {
        let r = new en.Quaternion().copy(e.rotation()).multiply(new en.Quaternion().copy(e.principalInertiaLocalFrame()))
          , i = t.clone().applyQuaternion(r.invert())
          , n = e.invPrincipalInertia();
        return i.x * i.x * n.x + i.y * i.y * n.y + i.z * i.z * n.z
    }
    function eA(e, t, r) {
        let i = t.clone().sub(new en.Vector3().copy(e.worldCom())).cross(r)
          , n = i.length();
        return 1 / e.mass() + (n > 1e-6 ? n * n * ej(e, i.divideScalar(n)) : 0)
    }
    function eT(e) {
        let t = e.translation()
          , r = e.rotation();
        return {
            position: [t.x, t.y, t.z],
            rotation: [r.x, r.y, r.z, r.w]
        }
    }
    function eC(e, t, r, i, n=4) {
        let a = i ?? {
            bodies: [],
            coreColliders: new Set,
            actorColliders: new Set
        }
          , s = (0,
        eS.poseToBodies)(t)
          , o = (0,
        eS.poseToBodies)(r)
          , l = [];
        return s.forEach( (t, r) => {
            let i = new en.Quaternion(...t.rotation)
              , s = e.createRigidBody(ew.RigidBodyDesc.dynamic().setTranslation(...t.position).setRotation(i).setLinearDamping(.3).setAngularDamping(.35).setSoftCcdPrediction(1).setAdditionalSolverIterations(8))
              , u = new en.Vector3(...t.position).sub(new en.Vector3(...o[r].position)).divideScalar(eI).clampLength(0, n);
            s.setLinvel(u, !0);
            let c = i.clone().multiply(new en.Quaternion(...o[r].rotation).invert()).normalize();
            c.w < 0 && c.set(-c.x, -c.y, -c.z, -c.w);
            let d = new en.Vector3(c.x,c.y,c.z);
            s.setAngvel(d.lengthSq() > 1e-10 ? d.normalize().multiplyScalar(Math.min(12, 2 * Math.acos(en.MathUtils.clamp(c.w, -1, 1)) / eI)) : d, !0);
            let p = ev.PARTS[r].center;
            ev.ARMOUR.forEach( (t, i) => {
                if (t.part !== r)
                    return;
                let n = new en.Quaternion(...t.rotation).normalize()
                  , o = ew.ColliderDesc.cuboid(...t.half).setTranslation(t.center[0] - p[0], t.center[1] - p[1], t.center[2] - p[2]).setRotation(n).setMass(eL[i]).setFriction(9 === r || 12 === r ? .9 : .65).setRestitution(.02).setCollisionGroups(r < 2 ? 131077 : 262147).setActiveEvents(ew.ActiveEvents.CONTACT_FORCE_EVENTS).setContactForceEventThreshold(80)
                  , l = e.createCollider(o, s);
                a.actorColliders.add(l.handle),
                r < 2 && a.coreColliders.add(l.handle)
            }
            ),
            s.recomputeMassPropertiesFromColliders(),
            l.push(s)
        }
        ),
        ev.PARTS.forEach( (r, i) => {
            var n;
            let a;
            if (r.parent < 0)
                return;
            let o = l[r.parent]
              , u = l[i]
              , c = new en.Vector3().setFromMatrixPosition(t[i])
              , d = new en.Quaternion(...s[r.parent].rotation)
              , p = new en.Quaternion(...s[i].rotation)
              , m = c.clone().sub(new en.Vector3(...s[r.parent].position)).applyQuaternion(d.clone().invert())
              , h = c.clone().sub(new en.Vector3(...s[i].position)).applyQuaternion(p.clone().invert())
              , f = d.clone().invert().multiply(p)
              , y = f.clone().multiply(new en.Quaternion(f.x,0,0,f.w).normalize().invert())
              , g = (r.name.startsWith("forearm") || r.name.startsWith("shin") || r.name.startsWith("foot")) && Math.abs(y.w) > .9992001066609779
              , S = g ? ew.JointData.revolute(m, h, {
                x: 1,
                y: 0,
                z: 0
            }) : ew.JointData.spherical(m, h)
              , v = e.createImpulseJoint(S, o, u, !0);
            if (v.setContactsEnabled(!1),
            "head" === r.name && ((a = (n = v).rawSet).jointSetLimits(n.handle, eF.bend, -.65, .65),
            a.jointSetLimits(n.handle, eF.tilt, -.65, .65),
            a.jointSetLimits(n.handle, eF.twist, -1.1, 1.1)),
            g) {
                let e = r.name.startsWith("forearm") ? [-2.4, .08] : r.name.startsWith("shin") ? [-.08, 2.45] : [-.5, .35];
                v.setLimits(e[0], e[1])
            }
        }
        ),
        a.bodies.push(...l),
        a
    }
    let eF = {
        bend: 3,
        twist: 4,
        tilt: 5
    };
    class eP {
        clip;
        world;
        bodies;
        drone;
        time;
        stillTime;
        settled;
        impactStrength;
        landingStrength;
        landingCooldown;
        events;
        coreColliders;
        actorColliders;
        constructor(e) {
            this.clip = e,
            this.bodies = [],
            this.time = 0,
            this.stillTime = 0,
            this.settled = !1,
            this.landingStrength = 0,
            this.landingCooldown = 0,
            this.events = new ew.EventQueue(!0),
            this.coreColliders = new Set,
            this.actorColliders = new Set,
            this.world = ew.World.restoreSnapshot(e.snapshot),
            this.world.timestep = eI;
            const t = this.world.getRigidBody(e.droneHandle)
              , r = 3 * Math.max(.05, t?.mass() || .65);
            t && this.world.removeRigidBody(t);
            const i = {
                bodies: this.bodies,
                coreColliders: this.coreColliders,
                actorColliders: this.actorColliders
            }
              , n = e.document ? (0,
            eM.prefabRider)(e.document, e.actorId) : void 0;
            if (n) {
                const t = (0,
                eM.posePrefabRider)(n, e.crowdTime, (0,
                eS.createPose)());
                eC(this.world, t, (0,
                eM.posePrefabRider)(n, e.crowdTime - eI, (0,
                eS.createPose)()), i, 40)
            } else {
                const t = e.routes.find(t => t.id === e.actorId)
                  , r = (0,
                eS.sampleWalker)(t, e.crowdTime, (0,
                eS.createPose)());
                eC(this.world, r, (0,
                eS.sampleWalker)(t, e.crowdTime - eI, (0,
                eS.createPose)()), i)
            }
            this.drone = this.world.createRigidBody(ew.RigidBodyDesc.dynamic().setTranslation(...e.drone.position).setRotation(new en.Quaternion(...e.drone.rotation)).setCcdEnabled(!0).setAngularDamping(.6)),
            this.world.createCollider(ew.ColliderDesc.cuboid(...ek.DRONE_HALF_EXTENTS).setMass(r).setFriction(.65).setRestitution(.08), this.drone),
            this.drone.recomputeMassPropertiesFromColliders();
            const a = new en.Vector3(...e.velocity)
              , s = new en.Vector3(...e.point)
              , o = this.bodies[e.part];
            this.drone.setLinvel(a, !0),
            this.drone.setAngvel((e => ({
                x: e[0],
                y: e[1],
                z: e[2]
            }))(e.angularVelocity.map(e => en.MathUtils.clamp(e, -12, 12))), !0);
            const l = new en.Vector3().copy(this.drone.velocityAtPoint(s)).sub(new en.Vector3().copy(o.velocityAtPoint(s)))
              , u = e.normal ? new en.Vector3(...e.normal).normalize() : l.clone().normalize().negate()
              , c = Math.max(0, -l.dot(u))
              , d = u.clone().negate()
              , p = Math.min(90, 1.08 * c / Math.max(.001, eA(this.drone, s, d) + eA(o, s, d)))
              , m = d.multiplyScalar(p)
              , h = l.clone().addScaledVector(u, c);
            if (h.lengthSq() > 1e-8) {
                const e = h.length();
                h.divideScalar(e);
                const t = Math.min(.3 * p, e / (eA(this.drone, s, h) + eA(o, s, h)));
                m.addScaledVector(h, t)
            }
            o.applyImpulseAtPoint(m, s, !0),
            this.drone.applyImpulseAtPoint(m.clone().negate(), s, !0);
            const f = Math.min(12.6, 3.15 + .588 * c);
            if (e.boosted) {
                const e = a.clone().normalize().multiplyScalar(6 * f);
                for (const t of this.bodies)
                    t.applyImpulse(e.clone().multiplyScalar(t.mass()), !0);
                const t = a.clone().normalize()
                  , r = .8 * f / Math.max(.001, eA(o, s, t));
                o.applyImpulseAtPoint(t.multiplyScalar(r), s, !0)
            } else {
                const e = d.clone().setY(0);
                e.lengthSq() > 1e-8 && e.normalize();
                const t = this.bodies[1];
                t.applyImpulse(e.multiplyScalar(t.mass() * f).add(new en.Vector3(0,t.mass() * Math.min(9.45, 2.94 + .378 * c),0)), !0)
            }
            this.drone.applyImpulse({
                x: 0,
                y: this.drone.mass() * Math.min(7.14, 1.89 + .294 * c),
                z: 0
            }, !0),
            this.impactStrength = en.MathUtils.clamp(m.length() / 35, 0, 1),
            e.ragdoll.length = 0,
            e.ragdoll.push(this.sample())
        }
        sample() {
            return {
                t: this.time,
                bodies: this.bodies.map(eT),
                drone: eT(this.drone)
            }
        }
        step() {
            this.landingStrength = 0;
            for (let e = 0; e < 4; e++) {
                let e = (this.clip.frames.at(-1)?.driftTime ?? 0) + this.time + eI;
                for (let t of this.clip.cars) {
                    let r = this.world.getRigidBody(t.handle);
                    if (!r)
                        continue;
                    let i = (0,
                    ex.driftTrafficById)(t.circuit).sampleCar(t.index, e, (0,
                    ex.createDriftCarState)());
                    if (void 0 !== i.height) {
                        let e = t.trackMatrix ?? new en.Matrix4().toArray()
                          , n = {
                            x: 0,
                            y: 0,
                            z: 0
                        }
                          , a = {
                            x: 0,
                            y: 0,
                            z: 0,
                            w: 1
                        };
                        (0,
                        eb.placeDriftBody)(i, e, (0,
                        eR.atan2)(e[8], e[10]), n, a),
                        r.setNextKinematicTranslation(n),
                        r.setNextKinematicRotation(a);
                        continue
                    }
                    let n = new en.Vector3(i.x,0,i.z)
                      , a = i.yaw;
                    t.trackMatrix && (n.applyMatrix4(new en.Matrix4().fromArray(t.trackMatrix)),
                    a += Math.atan2(t.trackMatrix[8], t.trackMatrix[10])),
                    r.setNextKinematicTranslation(n),
                    r.setNextKinematicRotation({
                        x: 0,
                        y: Math.sin(a / 2),
                        z: 0,
                        w: Math.cos(a / 2)
                    })
                }
                this.clip.rides?.driveIn(this.world, this.clip.crowdTime + this.time + eI),
                function(e) {
                    ev.PARTS.forEach( (t, r) => {
                        if (t.parent < 0)
                            return;
                        let i = e[t.parent]
                          , n = e[r]
                          , a = new en.Vector3().copy(n.angvel()).sub(new en.Vector3().copy(i.angvel()))
                          , s = a.length();
                        if (s < 1e-6)
                            return;
                        let o = a.divideScalar(s)
                          , l = ej(n, o) + ej(i, o)
                          , u = Math.max(s * (1 - Math.exp(-(2 === r ? 14 : t.name.startsWith("forearm") ? 5 : 8) * eI)), s - (2 === r ? 12 : 20))
                          , c = o.multiplyScalar(-u / Math.max(.001, l));
                        n.applyTorqueImpulse(c, !0),
                        i.applyTorqueImpulse(c.clone().negate(), !0)
                    }
                    )
                }(this.bodies),
                this.world.step(this.events),
                this.time += eI;
                let t = [];
                for (let {other: e, strength: r} of (this.events.drainContactForceEvents(e => {
                    let r = e.collider1()
                      , i = e.collider2()
                      , n = this.coreColliders.has(r) ? r : this.coreColliders.has(i) ? i : void 0;
                    void 0 === n || this.actorColliders.has(n === r ? i : r) || this.time < .2 || this.time < this.landingCooldown || t.push({
                        other: n === r ? i : r,
                        strength: en.MathUtils.clamp((e.totalForceMagnitude() * eI - 1.5) / 18, 0, 1)
                    })
                }
                ),
                t)) {
                    let t = this.world.getCollider(e)?.parent()
                      , i = t ? this.world.getRigidBody(t.handle) : void 0;
                    i?.handle !== this.drone.handle && (!i?.isKinematic() || this.clip.cars.some(e => e.handle === i.handle)) && (this.landingStrength = Math.max(this.landingStrength, r))
                }
            }
            this.landingStrength > 0 && (this.landingCooldown = this.time + .35);
            let e = function(e) {
                let t = 0
                  , r = 0;
                for (let i = 0; i < e.length; i++) {
                    let n = e[i].linvel()
                      , a = e[i].angvel()
                      , s = n.x * n.x + n.y * n.y + n.z * n.z;
                    if (i < 2 && s > .65 * .65)
                        return !1;
                    let o = i < 2 ? 4 : 1
                      , l = i < 2 ? .25 : .12;
                    t += o * (s + l * l * (a.x * a.x + a.y * a.y + a.z * a.z)),
                    r += o
                }
                return r > 0 && t / r < .65 * .65
            }(this.bodies);
            this.stillTime = e && this.time > .8 ? this.stillTime + eE : 0,
            this.settled = this.stillTime > .4 || this.time >= 4;
            let t = this.sample();
            return this.clip.ragdoll.push(t),
            t
        }
        free() {
            this.events.free(),
            this.world.free()
        }
    }
    var ez = e.i(979392)
      , eO = e.i(171204)
      , e_ = e.i(83724)
      , eV = e.i(871234)
      , eq = e.i(702217)
      , eB = e.i(828045);
    let eN = new ew.Ray({
        x: 0,
        y: 0,
        z: 0
    },{
        x: 0,
        y: 0,
        z: -1
    })
      , eW = eN.origin
      , eG = eN.dir;
    function eU(e, t, r, i, n=!1) {
        let a = t.position.x - r.x
          , s = t.position.y - r.y
          , o = t.position.z - r.z
          , l = Math.hypot(a, s, o);
        if (l < 1e-4)
            return void (0,
            eB.resolveOrbitCameraCollision)(t.position, r, null, i);
        let u = 1 / l;
        eW.x = r.x,
        eW.y = r.y,
        eW.z = r.z,
        eG.x = a * u,
        eG.y = s * u,
        eG.z = o * u;
        let c = e.castRayAndGetNormal(eN, l, !0, n ? ew.QueryFilterFlags.EXCLUDE_DYNAMIC | ew.QueryFilterFlags.EXCLUDE_KINEMATIC : ew.QueryFilterFlags.EXCLUDE_DYNAMIC);
        (0,
        eB.resolveOrbitCameraCollision)(t.position, r, c ? {
            toi: c.timeOfImpact,
            normalY: c.normal.y
        } : null, i)
    }
    function eQ(e, t, r) {
        return {
            position: e.position.map( (e, i) => e + (t.position[i] - e) * r),
            rotation: new en.Quaternion(...e.rotation).slerp(new en.Quaternion(...t.rotation), r).toArray()
        }
    }
    function eK({clip: e, quality: t, shadows: i}) {
        let n = (0,
        o.useRef)(null)
          , a = (0,
        o.useRef)(null)
          , s = (0,
        o.useRef)(0)
          , l = (0,
        o.useRef)(null)
          , u = (0,
        o.useRef)(void 0)
          , c = (0,
        o.useRef)({
            t: 0,
            real: 0,
            accumulator: 0,
            finishAt: -1,
            settledAt: -1,
            primed: !1,
            hitPlayed: !1,
            kick: 0
        })
          , d = (0,
        eM.isPrefabActor)(e.actorId)
          , m = (0,
        o.useMemo)( () => [...e.routes, ...(0,
        eM.isPrefabActor)(e.actorId) ? [null] : []].map(eS.createPose), [e])
          , h = d ? e.routes.length : e.routes.findIndex(t => t.id === e.actorId)
          , f = (0,
        o.useMemo)( () => ({
            drone: new en.Vector3,
            actor: new en.Vector3,
            target: new en.Vector3,
            lens: new en.Vector3,
            velocity: new en.Vector3(...e.velocity),
            rotation: new en.Quaternion,
            matrix: new en.Matrix4
        }), [e])
          , y = (0,
        o.useMemo)( () => {
            let t = e.frames.at(-1);
            return [...e.frames, {
                ...t,
                t: e.impactTime + 12,
                driftTime: void 0 === t.driftTime ? void 0 : t.driftTime + 12
            }]
        }
        , [e]);
        (0,
        o.useEffect)( () => {
            let t = e.document
              , r = t ? {
                current: e.crowdTime - e.impactTime
            } : void 0;
            return t && r && eO.prefabReplayClocks.set(t, r),
            u.current = r,
            ez.impactPlayback.actor = (0,
            eM.isPrefabActor)(e.actorId) ? e.actorId : -1,
            () => {
                t && eO.prefabReplayClocks.get(t) === r && eO.prefabReplayClocks.delete(t),
                u.current = void 0,
                ez.impactPlayback.actor = -1
            }
        }
        , [e]),
        (0,
        o.useEffect)( () => {
            let t = setTimeout( () => p.useSimStore.getState().finishImpact(e.id), 8e3);
            return () => clearTimeout(t)
        }
        , [e.id]),
        (0,
        o.useLayoutEffect)( () => {
            let t;
            try {
                t = new eP(e)
            } catch (t) {
                console.error("Impact simulation could not start", t),
                p.useSimStore.getState().finishImpact(e.id);
                return
            }
            return l.current = t,
            c.current = {
                t: 0,
                real: 0,
                accumulator: 0,
                finishAt: -1,
                settledAt: -1,
                primed: !1,
                hitPlayed: !1,
                kick: 0
            },
            () => {
                l.current = null,
                t.free()
            }
        }
        , [e]),
        (0,
        er.useFrame)( (t, r) => {
            let i = n.current
              , o = a.current
              , y = l.current
              , g = c.current;
            if (!i || !o || !y || document.hidden)
                return;
            let S = g.primed ? r : 0
              , v = Math.min(S, .05);
            g.real += S,
            (ez.impactPlayback.skip || g.real >= 7.88) && g.finishAt < 0 && (g.finishAt = g.real);
            let w = function(e, t) {
                if (e < t - .18)
                    return 1;
                if (e < t) {
                    let r = Math.max(0, (e - (t - .18)) / .18);
                    return 1 - .75 * r * r * (3 - 2 * r)
                }
                return e < t + .12 ? .25 : Math.min(1, .25 + (e - t - .12) * 2.5)
            }(g.t, e.impactTime);
            ez.impactPlayback.speed = w;
            let M = 0;
            if (g.kick *= Math.exp(-(15 * v)),
            g.finishAt < 0) {
                let t = g.t + v * w;
                if (t >= e.impactTime) {
                    for (g.accumulator += t - Math.max(g.t, e.impactTime); g.accumulator >= eE && !y.settled; )
                        y.step(),
                        M = Math.max(M, y.landingStrength),
                        g.accumulator -= eE;
                    y.settled && (g.settledAt < 0 && (g.settledAt = g.real),
                    g.real - g.settledAt >= .35 && (g.finishAt = g.real))
                }
                g.t = t
            }
            s.current = g.t,
            ez.impactPlayback.time = g.t;
            let x = g.t < e.impactTime;
            x || g.hitPlayed || (g.hitPlayed = !0,
            g.kick = Math.max(g.kick, y.impactStrength),
            (0,
            eg.playImpact)((0,
            ey.getDroneAudio)(), {
                x: e.point[0],
                y: e.point[1],
                z: e.point[2]
            }, y.impactStrength, !0)),
            M > 0 && ((0,
            eg.playImpact)((0,
            ey.getDroneAudio)(), y.bodies[1].translation(), M),
            g.kick = Math.max(g.kick, .35 * M));
            let b = e.ragdoll
              , R = b.at(-1)
              , k = b.at(-2) ?? R
              , E = Math.min(1, g.accumulator / eE)
              , I = x ? e.crowdTime + (g.t - e.impactTime) : e.crowdTime + k.t + (R.t - k.t) * E;
            for (let t = 0; t < e.routes.length; t++)
                (0,
                eS.sampleWalker)(e.routes[t], I, m[t]);
            u.current && (u.current.current = I);
            let D = [0, 0, 0, 0];
            if (x) {
                let t = (0,
                es.findReplayIndex)(e.frames, g.t, 0)
                  , r = e.frames[t]
                  , i = e.frames[t + 1] ?? r
                  , n = (0,
                es.replaySampleBlend)(e.frames, g.t, t);
                f.drone.set(...r.position).lerp(new en.Vector3(...i.position), n),
                f.rotation.set(...r.rotation).slerp(new en.Quaternion(...i.rotation), n),
                D = (0,
                es.resolveReplayMotors)(e.frames, g.t, t, .1);
                let a = d && e.document ? (0,
                eM.prefabRider)(e.document, e.actorId) : void 0;
                a && (0,
                eM.posePrefabRider)(a, I, m[h])
            } else {
                let e = R.bodies.map( (e, t) => eQ(k.bodies[t], e, E));
                (0,
                eS.bodiesToPose)(e, m[h]);
                let t = eQ(k.drone, R.drone, E);
                f.drone.set(...t.position),
                f.rotation.set(...t.rotation)
            }
            o.position.copy(f.drone),
            o.quaternion.copy(f.rotation),
            Object.assign(ef.live.position, {
                x: f.drone.x,
                y: f.drone.y,
                z: f.drone.z
            }),
            Object.assign(ef.live.rotation, {
                x: f.rotation.x,
                y: f.rotation.y,
                z: f.rotation.z,
                w: f.rotation.w
            }),
            ef.live.telemetry.armed = x,
            ef.live.telemetry.speed = x ? f.velocity.length() * w : 0;
            for (let e = 0; e < 4; e++)
                ef.live.motors[e] = D[e] * Math.sqrt(w);
            f.actor.set(...ev.PARTS[1].center).sub(new en.Vector3(...ev.PARTS[1].pivot)).applyMatrix4(m[h][1]);
            let L = x ? Math.min(1, Math.max(0, (g.t - (e.impactTime - .7)) / .7)) : 1;
            f.target.copy(f.drone).lerp(f.actor, x ? .2 + .65 * L : 1);
            let j = new en.Vector3(e.velocity[0],0,e.velocity[2]);
            .01 > j.lengthSq() && j.set(0, 0, -1),
            j.normalize();
            let A = new en.Vector3(-j.z,0,j.x);
            f.lens.copy(f.target).addScaledVector(A, x ? 5.2 : 4.2).addScaledVector(j, -2.5).add(new en.Vector3(0,2.3,0)),
            g.primed ? i.position.lerp(f.lens, 1 - Math.exp(-(6 * v))) : (i.position.copy(f.lens),
            g.primed = !0),
            eU(y.world, i, f.target, .7, !0),
            i.lookAt(f.target),
            i.rotateX(-(.012 * g.kick)),
            ez.impactPlayback.fade = Math.max(Math.max(0, 1 - g.real / .1), g.finishAt >= 0 ? Math.min(1, Math.max(0, (g.real - g.finishAt) / .12)) : 0),
            g.finishAt >= 0 && g.real >= g.finishAt + .12 && p.useSimStore.getState().finishImpact(e.id)
        }
        , -3);
        let g = (0,
        o.useMemo)( () => ({
            camera: () => n.current,
            ready: () => c.current.primed && !!n.current && !!l.current,
            forcePost: !0
        }), []);
        return (0,
        eu.useFrameHooks)(g),
        (0,
        r.jsxs)(r.Fragment, {
            children: [(0,
            r.jsx)(eh.PerspectiveCamera, {
                ref: n,
                makeDefault: !0,
                fov: 55,
                near: .08,
                far: 500
            }), (0,
            r.jsx)(e_.DummyBatch, {
                poses: m,
                shadows: i && "low" !== t,
                lod: e_.DUMMY_LOD[t]
            }), (0,
            r.jsx)("group", {
                ref: a,
                children: (0,
                r.jsx)(eV.DroneModel, {
                    castShadow: i,
                    fpv: !1
                })
            }), (0,
            r.jsx)(eq.ReplayDriftFleet, {
                frames: y,
                time: s,
                quality: t,
                shadows: i
            })]
        })
    }
    var e$ = e.i(971301)
      , eH = e.i(575056)
      , eY = e.i(166636)
      , eJ = e.i(973)
      , eX = e.i(630372)
      , eZ = e.i(424028)
      , e0 = e.i(471646)
      , e1 = e.i(632526)
      , e2 = e.i(28276)
      , e3 = e.i(420333)
      , e5 = e.i(393038)
      , e8 = e.i(861526)
      , e4 = e.i(26186);
    function e6({enabled: e}) {
        return (0,
        er.useFrame)( () => {
            let t = (0,
            ey.getDroneAudio)();
            if (!t)
                return;
            let r = ef.live.grounded || performance.now() / 1e3 - eg.contactState.at < eg.SLIDE_GAP
              , i = e && e4.flightAudible.current && r ? ef.live.telemetry.speed : 0;
            t.setScrape(i, ef.live.position)
        }
        ),
        null
    }
    var e7 = e.i(579726)
      , e9 = e.i(349884)
      , te = e.i(821578)
      , tt = e.i(632997)
      , tr = e.i(512112);
    let ti = {
        throttle: 0,
        roll: 0,
        pitch: 0,
        yaw: 0
    }
      , tn = {
        ...ti
    }
      , ta = {
        ...ti
    };
    function ts(e, t) {
        e.throttle = t.throttle,
        e.roll = t.roll,
        e.pitch = t.pitch,
        e.yaw = t.yaw
    }
    function to(e, t, r, i) {
        e.throttle = t.throttle + (r.throttle - t.throttle) * i,
        e.roll = t.roll + (r.roll - t.roll) * i,
        e.pitch = t.pitch + (r.pitch - t.pitch) * i,
        e.yaw = t.yaw + (r.yaw - t.yaw) * i
    }
    var tl = e.i(11871)
      , tu = e.i(811113)
      , tc = e.i(297383);
    let td = new en.Vector3(0,1,0)
      , tp = (0,
    tu.defaultSettings)();
    function tm({demo: e, shadows: t, ground: i}) {
        let n = (0,
        o.useRef)(null)
          , a = (0,
        o.useRef)(0)
          , s = (0,
        o.useRef)(!1)
          , l = "fpv" === e.camera.view ? e.camera : null
          , u = (0,
        p.useSimStore)(e => e.settings.camera)
          , c = (0,
        p.useSimStore)(e => e.settings.graphics.drawDistance)
          , d = (0,
        o.useMemo)( () => new e7.FlightController, [])
          , m = (0,
        o.useMemo)( () => (0,
        tt.emptyControlInput)(), [])
          , h = (0,
        o.useMemo)( () => (function(e) {
            let t = 0;
            for (let r of e)
                t += Math.max(0, r.seconds);
            return t
        }
        )(e.segments) + (e.restMs ?? tr.DEFAULT_DEMO_REST_MS) / 1e3, [e])
          , f = (0,
        o.useMemo)( () => {
            let {position: t, yaw: r} = e.spawn
              , i = new en.Quaternion().setFromAxisAngle(td, r);
            return e => {
                e.setTranslation({
                    x: t[0],
                    y: t[1],
                    z: t[2]
                }, !0),
                e.setRotation({
                    x: i.x,
                    y: i.y,
                    z: i.z,
                    w: i.w
                }, !0),
                e.setLinvel({
                    x: 0,
                    y: 0,
                    z: 0
                }, !0),
                e.setAngvel({
                    x: 0,
                    y: 0,
                    z: 0
                }, !0),
                d.reset(),
                a.current = 0,
                s.current = !1,
                ef.live.position.x = t[0],
                ef.live.position.y = t[1],
                ef.live.position.z = t[2]
            }
        }
        , [e, d]);
        return (0,
        o.useEffect)( () => {
            let e = n.current;
            e && f(e)
        }
        , [f]),
        (0,
        ei.useBeforePhysicsStep)(t => {
            let r = n.current;
            if (!r)
                return;
            let o = t.timestep;
            a.current += o,
            a.current >= h && f(r),
            function(e, t, r) {
                if (r.armRequested = !0,
                r.source = "none",
                0 === e.length)
                    return to(r, ti, ti, 1);
                let i = Math.max(0, t)
                  , n = 0;
                for (let t of (ts(tn, ti),
                e)) {
                    let e = Math.max(0, t.seconds);
                    if (ta.throttle = t.throttle ?? 0,
                    ta.roll = t.roll ?? 0,
                    ta.pitch = t.pitch ?? 0,
                    ta.yaw = t.yaw ?? 0,
                    i < n + e) {
                        let a = i - n
                          , s = Math.min(t.ramp ?? tr.DEFAULT_DEMO_RAMP, e);
                        return to(r, tn, ta, s > 0 ? Math.min(1, a / s) : 1),
                        r
                    }
                    n += e,
                    ts(tn, ta)
                }
                to(r, tn, tn, 1)
            }(e.segments, a.current, m);
            let l = (0,
            te.updateSupportedLatch)(s, (0,
            te.sampleGroundContact)(t, r))
              , u = r.translation()
              , c = d.step(o, r, m, !0, tp.rates, (0,
            tl.droneQuad)("freestyle"), {
                supported: l,
                groundHeight: i(u.x, u.z)
            })
              , p = r.rotation();
            ef.live.droneId = "freestyle",
            ef.live.droneSkin = "factory",
            ef.live.voltageFactor = c.voltageFactor,
            ef.live.position.x = u.x,
            ef.live.position.y = u.y,
            ef.live.position.z = u.z,
            ef.live.rotation.x = p.x,
            ef.live.rotation.y = p.y,
            ef.live.rotation.z = p.z,
            ef.live.rotation.w = p.w,
            ef.live.input.throttle = m.throttle,
            ef.live.input.roll = m.roll,
            ef.live.input.pitch = m.pitch,
            ef.live.input.yaw = m.yaw,
            ef.live.input.armRequested = !0,
            ef.live.input.source = m.source,
            ef.live.telemetry.speed = c.speed,
            ef.live.telemetry.altitude = c.altitude,
            (0,
            e9.writeAttitudeTelemetry)(ef.live.telemetry, p.x, p.y, p.z, p.w),
            ef.live.telemetry.throttle = c.throttleCommand,
            ef.live.telemetry.armed = !0,
            ef.live.grounded = l,
            ef.live.upDot = c.upDot,
            ef.live.motors[0] = c.motors[0],
            ef.live.motors[1] = c.motors[1],
            ef.live.motors[2] = c.motors[2],
            ef.live.motors[3] = c.motors[3]
        }
        ),
        (0,
        r.jsxs)(ei.RigidBody, {
            ref: n,
            colliders: !1,
            ccd: !0,
            canSleep: !1,
            linearDamping: 0,
            angularDamping: .05,
            position: e.spawn.position,
            rotation: [0, e.spawn.yaw, 0],
            children: [(0,
            r.jsx)(ei.CuboidCollider, {
                args: ek.DRONE_HALF_EXTENTS,
                mass: (0,
                tl.droneQuad)("freestyle").mass,
                friction: .7,
                restitution: .25,
                contactSkin: .008
            }), l ? (0,
            r.jsx)(ei.BallCollider, {
                args: [ek.FPV_CAMERA_GUARD_RADIUS],
                position: ek.FPV_CAMERA_MOUNT_OFFSET,
                density: 0,
                friction: .7,
                restitution: .25,
                contactSkin: .008
            }) : null, (0,
            r.jsx)(eV.DroneModel, {
                archetype: "freestyle",
                skin: "factory",
                castShadow: t,
                fpv: !!l
            }), l ? (0,
            r.jsx)(tc.FpvCamera, {
                fov: u.fov,
                tiltDeg: u.tiltDeg,
                shake: u.shake,
                far: c
            }) : null]
        })
    }
    var th = e.i(301572)
      , tf = e.i(674797)
      , ty = e.i(790504);
    class tg {
        next = -1 / 0;
        due(e) {
            var t;
            let r, i;
            return r = (t = {
                ...e,
                hasNearbyReplacement: !0
            }).graceSeconds ?? 2,
            i = t.cullRadius ?? 130,
            !(t.ageSeconds < r) && !(t.distance <= i) && !!t.hasNearbyReplacement && !(e.now < this.next) && (this.next = e.now + 1e3,
            !0)
        }
    }
    function tS() {
        let e = new Set;
        for (let t of (0,
        e2.listLessons)())
            for (let r of t.steps)
                r.replayId && e.add(r.replayId);
        return e
    }
    var tv = e.i(290840)
      , tw = e.i(543689)
      , tM = e.i(840390)
      , tx = e.i(353198);
    function tb(e) {
        return Array.isArray(e) && 4 === e.length && e.every(Number.isFinite)
    }
    function tR(e, t) {
        let r = e.x - t.x
          , i = e.y - t.y
          , n = e.z - t.z;
        return r * r + i * i + n * n
    }
    function tk(e, t, r, i=3) {
        let n = 1 / 0;
        for (let a of e.filter(e => r - e.t >= i)) {
            let e = Math.sqrt(tR(a, t));
            e < n && (n = e)
        }
        return n
    }
    var tE = e.i(284853);
    let tI = new Map
      , tD = new Map
      , tL = new Map
      , tj = new Map
      , tA = new Map
      , tT = new Map
      , tC = new Map;
    function tF(e) {
        return tj.get(e) ?? null
    }
    function tP(e) {
        tj.delete(e.id),
        tj.set(e.id, e),
        tL.has(e.id) || tL.set(e.id, e.bytes ?? new TextEncoder().encode(JSON.stringify(e)).length);
        let t = [...tL.values()].reduce( (e, t) => e + t, 0);
        for (; t > 0x1000000; ) {
            let e = tj.keys().next().value;
            if (null == e)
                break;
            t -= tL.get(e) ?? 0,
            tL.delete(e),
            tj.delete(e)
        }
    }
    async function tz(e) {
        let t = tT.get(e);
        if (t && t.expires > Date.now())
            return t.metas;
        let r = tC.get(e);
        if (r)
            return r;
        let i = tO(e, 0).then(t => (tT.set(e, {
            metas: t,
            expires: Date.now() + 3e5
        }),
        tT.size > 32 && tT.delete(tT.keys().next().value),
        t));
        tC.set(e, i);
        try {
            return await i
        } finally {
            tC.get(e) === i && tC.delete(e)
        }
    }
    async function tO(e, t) {
        let r = (0,
        q.createClient)()
          , {data: i, error: n} = await r.rpc("list_ambient_replay_metas_v2", {
            p_map_id: e
        });
        if (n)
            throw n;
        if (0 !== t)
            return [];
        let a = Array.isArray(i) ? i : []
          , s = new Set;
        for (let e of a)
            (0,
            tw.isReplayId)(e.id) && "string" == typeof e.revision && (s.add(e.id),
            tI.get(e.id) !== e.revision && (tj.delete(e.id),
            tL.delete(e.id)),
            tI.set(e.id, e.revision));
        for (let t of tD.get(e) ?? [])
            s.has(t) || (tj.delete(t),
            tL.delete(t),
            tI.delete(t),
            tM.replayCache.invalidate(t));
        return tD.set(e, s),
        a.map(t => (function(e, t="") {
            if (!(0,
            tw.isReplayId)(e.id))
                return null;
            let r = Number(e.duration);
            if (!Number.isFinite(r) || r <= 0)
                return null;
            let i = function(e) {
                if (!Array.isArray(e))
                    return [];
                let t = [];
                for (let r of e) {
                    if (!r || "object" != typeof r)
                        continue;
                    let e = Number(r.t)
                      , i = Number(r.x)
                      , n = Number(r.y)
                      , a = Number(r.z);
                    [e, i, n, a].every(Number.isFinite) && t.push({
                        t: e,
                        x: i,
                        y: n,
                        z: a
                    })
                }
                return t
            }(e.path_samples);
            return 0 === i.length ? null : {
                id: e.id,
                duration: r,
                pathSamples: (0,
                tE.transformMapPathSamples)(t, i, "from-storage")
            }
        }
        )(t, e)).filter(e => null != e)
    }
    async function t_(e) {
        let t = tI.get(e);
        if (!t)
            throw Error("Ghost metadata is unavailable.");
        return tM.replayCache.load("ambient-v1", e, t, (r, i) => {
            if (!r || "object" != typeof r || r.id !== e || r.revision !== t || 1 !== r.format)
                return null;
            let n = function(e) {
                if (!Array.isArray(e) || !e.length)
                    return null;
                let t = []
                  , r = -1 / 0;
                for (let i of e) {
                    if (!Array.isArray(i) || 11 !== i.length && 13 !== i.length || !i.slice(0, 9).every(Number.isFinite))
                        return null;
                    let[e,n,a,s,o,l,u,c,d,p,m,h,f] = i
                      , y = 13 === i.length && !tx.DRONE_IDS.includes(h) && null !== (0,
                    tx.replayCraft)(h)
                      , g = y ? "freestyle" : h
                      , S = y ? "factory" : f;
                    if (e < r || e < 0 || !Number.isInteger(n) || null !== p && !tb(p) || null !== m && !tb(m))
                        return null;
                    let v = tx.DRONE_SKIN_IDS.includes(S) || "string" == typeof S && /^shop:[0-9a-f-]{36}$/i.test(S);
                    if (13 === i.length && (!tx.DRONE_IDS.includes(g) || !v))
                        return null;
                    let w = Math.hypot(l, u, c, d);
                    if (w < .98 || w > 1.02)
                        return null;
                    t.push({
                        t: e,
                        segment: n,
                        ...g ? {
                            droneId: g,
                            droneSkin: S
                        } : {},
                        position: [a, s, o],
                        rotation: [l / w, u / w, c / w, d / w],
                        ...p ? {
                            throttle: p[0],
                            roll: p[1],
                            pitch: p[2],
                            yaw: p[3]
                        } : {},
                        ...m ? {
                            motors: m
                        } : {}
                    }),
                    r = e
                }
                return t
            }(r.frames);
            return !n || !Number.isFinite(Number(r.duration)) || 0 >= Number(r.duration) ? null : {
                id: e,
                duration: Number(r.duration),
                frames: n,
                bytes: i
            }
        }
        , async () => (0,
        tv.downloadReplayPayload)(e, "ambient", t))
    }
    async function tV(e, t, r=t_) {
        let i = tj.get(e);
        if (i)
            return tP(i),
            i;
        let n = `${t}:${e}:${tI.get(e) ?? "test"}`
          , a = tA.get(n);
        if (a)
            return a;
        let s = tI.get(e)
          , o = (async () => {
            let i = await r(e);
            if (!i || s !== tI.get(e))
                return null;
            let n = {
                ...i,
                frames: (0,
                tE.transformMapReplayFrames)(t, i.frames, "from-storage")
            };
            return tP(n),
            n
        }
        )().finally( () => {
            tA.delete(n)
        }
        );
        return tA.set(n, o),
        o
    }
    function tq(e, t, r) {
        let i = t.get(e);
        return null != i && i > r
    }
    function tB(e, t) {
        return !(t.excludedIds.has(e.id) || t.activeIds.has(e.id)) && !(e.duration < 4) && 0 !== e.pathSamples.length && tk(e.pathSamples, t.player, e.duration) < 1 / 0
    }
    function tN(e=Date.now(), t=5e3) {
        return e + t
    }
    function tW(e, t=Math.random) {
        let r = e <= 0
          , i = r ? .5 : 1.8
          , n = Math.max(0, (r ? 1.6 : 4.2) - i);
        return i + Math.min(1, Math.max(0, t())) * n
    }
    function tG(e) {
        let t = 0;
        for (let r of e)
            r.dying || (t += 1);
        return t
    }
    tM.replayCache.onInvalidate(e => {
        tj.delete(e),
        tL.delete(e)
    }
    );
    var tU = e.i(699915)
      , tQ = e.i(931067);
    let tK = o.forwardRef(function({children: e, follow: t=!0, lockX: r=!1, lockY: i=!1, lockZ: n=!1, ...a}, s) {
        let l = o.useRef(null)
          , u = o.useRef(null)
          , c = new en.Quaternion;
        return (0,
        er.useFrame)( ({camera: e}) => {
            if (!t || !u.current)
                return;
            let a = l.current.rotation.clone();
            u.current.updateMatrix(),
            u.current.updateWorldMatrix(!1, !1),
            u.current.getWorldQuaternion(c),
            e.getWorldQuaternion(l.current.quaternion).premultiply(c.invert()),
            r && (l.current.rotation.x = a.x),
            i && (l.current.rotation.y = a.y),
            n && (l.current.rotation.z = a.z)
        }
        ),
        o.useImperativeHandle(s, () => u.current, []),
        o.createElement("group", (0,
        tQ.default)({
            ref: u
        }, a), o.createElement("group", {
            ref: l
        }, e))
    });
    function t$({puff: e, ageRef: t, texture: i, color: n}) {
        let a = (0,
        o.useRef)(null)
          , s = (0,
        o.useRef)(null);
        return (0,
        er.useFrame)( () => {
            let r = a.current
              , i = s.current;
            if (!r || !i)
                return;
            let n = t.current - e.delay
              , o = (0,
            ty.ghostPoofAlpha)(n)
              , l = (0,
            ty.ghostPoofTravel)(n)
              , u = e.distance * l;
            r.position.set(e.dir[0] * u, e.dir[1] * u, e.dir[2] * u),
            r.scale.setScalar(e.size * (.35 + 1.15 * l)),
            i.opacity = .85 * o,
            i.visible = o > 0
        }
        ),
        (0,
        r.jsx)("group", {
            ref: a,
            children: (0,
            r.jsx)(tK, {
                follow: !0,
                children: (0,
                r.jsxs)("mesh", {
                    rotation: [0, 0, e.roll],
                    children: [(0,
                    r.jsx)("planeGeometry", {
                        args: [1, 1]
                    }), (0,
                    r.jsx)("meshBasicMaterial", {
                        ref: s,
                        map: i,
                        color: n,
                        transparent: !0,
                        opacity: 0,
                        depthWrite: !1,
                        depthTest: !0,
                        toneMapped: !1,
                        blending: en.AdditiveBlending,
                        side: en.FrontSide,
                        fog: !1
                    })]
                })
            })
        })
    }
    function tH({position: e, color: i, onDone: n}) {
        let a = (0,
        o.useRef)(0)
          , s = (0,
        o.useRef)(!1)
          , l = "flying" === (0,
        p.useSimStore)(e => e.phase)
          , u = (0,
        o.useMemo)( () => (function() {
            if (void 0 !== t)
                return t;
            if ("u" < typeof document)
                return t = null,
                null;
            let e = document.createElement("canvas");
            e.width = 64,
            e.height = 64;
            let r = e.getContext("2d");
            if (!r)
                return t = null,
                null;
            let i = r.createRadialGradient(32, 32, 0, 32, 32, 32);
            i.addColorStop(0, "rgba(255,255,255,1)"),
            i.addColorStop(.22, "rgba(255,255,255,0.7)"),
            i.addColorStop(.55, "rgba(255,255,255,0.16)"),
            i.addColorStop(1, "rgba(255,255,255,0)"),
            r.fillStyle = i,
            r.fillRect(0, 0, 64, 64);
            let n = new en.CanvasTexture(e);
            return n.needsUpdate = !0,
            t = n,
            n
        }
        )(), [])
          , c = (0,
        o.useMemo)( () => (function(e) {
            let t = [];
            for (let r = 0; r < e; r++) {
                let i = r / e * Math.PI * 2 + (Math.random() - .5) * .55
                  , n = .38 + .5 * Math.random()
                  , a = Math.cos(n);
                t.push({
                    dir: [Math.cos(i) * a, Math.sin(n), Math.sin(i) * a],
                    distance: .75 + 1.05 * Math.random(),
                    size: .42 + .5 * Math.random(),
                    roll: Math.random() * Math.PI,
                    delay: .06 * Math.random()
                })
            }
            return t
        }
        )(ty.GHOST_POOF_COUNT), []);
        return ((0,
        er.useFrame)( (e, t) => {
            l && (a.current += t),
            !s.current && a.current >= ty.GHOST_POOF_DURATION + .06 && (s.current = !0,
            n?.())
        }
        ),
        u) ? (0,
        r.jsx)("group", {
            position: e,
            children: c.map( (e, t) => (0,
            r.jsx)(t$, {
                puff: e,
                ageRef: a,
                texture: u,
                color: i
            }, t))
        }) : null
    }
    var tY = e.i(502478)
      , tJ = e.i(663011);
    function tX(e, t) {
        return 0 === e.length ? null : e[(0,
        es.findReplayIndex)(e, t, 0)]?.position ?? null
    }
    function tZ({frames: e, duration: t, seekT: i, dying: n, onFinished: a, onTooFar: s, onLingerDone: l}) {
        let u = (0,
        o.useRef)(i)
          , c = (0,
        o.useRef)(0)
          , d = (0,
        o.useRef)(0)
          , m = (0,
        o.useRef)(0)
          , h = (0,
        o.useRef)(t);
        h.current = t;
        let f = (0,
        o.useRef)(s);
        f.current = s;
        let y = (0,
        o.useMemo)( () => new tg, [])
          , g = (0,
        p.useSimStore)(e => e.phase)
          , S = (0,
        o.useRef)(g);
        S.current = g;
        let v = (0,
        o.useRef)(0)
          , w = (0,
        o.useRef)("entering")
          , M = (0,
        o.useRef)(0)
          , x = (0,
        o.useRef)(0)
          , b = (0,
        o.useRef)(!1)
          , R = (0,
        o.useMemo)( () => tX(e, i), [e, i])
          , [k,E] = (0,
        o.useState)(!0)
          , [I,D] = (0,
        o.useState)(null);
        (0,
        o.useLayoutEffect)( () => {
            n && ("leaving" !== w.current && (w.current = "leaving",
            v.current = 0),
            D(t => t ?? tX(e, u.current)))
        }
        , [n, e]);
        let L = (0,
        o.useCallback)( () => {
            let e = performance.now();
            if ("flying" === S.current && d.current > 0) {
                let t = (e - d.current) / 1e3;
                u.current = Math.min(h.current, u.current + t * tJ.timeWarp.scale),
                c.current += t
            }
            return d.current = e,
            u.current
        }
        , []);
        return (0,
        er.useFrame)( (t, r) => {
            if ("flying" !== S.current)
                return;
            if (v.current += r,
            "entering" === w.current && v.current >= ty.GHOST_PRESENCE_FADE_IN && (w.current = "live"),
            M.current = (0,
            ty.ghostPresenceAlpha)(v.current, w.current),
            n) {
                x.current += r,
                !b.current && x.current >= ty.GHOST_TRAIL_DURATION && (b.current = !0,
                l());
                return
            }
            let i = u.current
              , a = (0,
            es.findReplayIndex)(e, i, m.current);
            m.current = a;
            let s = e[a]?.position;
            if (!s)
                return;
            let o = ef.live.position
              , d = s[0] - o.x
              , p = s[1] - o.y
              , h = s[2] - o.z
              , g = Math.sqrt(d * d + p * p + h * h);
            y.due({
                distance: g,
                ageSeconds: c.current,
                now: performance.now()
            }) && f.current()
        }
        ),
        (0,
        r.jsxs)(r.Fragment, {
            children: [(0,
            r.jsx)(tU.GhostDrone, {
                frames: e,
                duration: t,
                color: ty.AMBIENT_GHOST_COLOR,
                clock: L,
                onFinished: a,
                presenceRef: M,
                releasing: n,
                sound: "ambient"
            }), k && R ? (0,
            r.jsx)(tH, {
                position: R,
                color: ty.AMBIENT_GHOST_COLOR,
                onDone: () => E(!1)
            }) : null, I ? (0,
            r.jsx)(tH, {
                position: I,
                color: ty.AMBIENT_GHOST_COLOR
            }) : null]
        })
    }
    function t0() {
        let e = (0,
        p.useSimStore)(f.activeMapId);
        return (0,
        r.jsx)(t1, {
            mapId: e
        }, e)
    }
    function t1({mapId: e}) {
        let[t,i] = (0,
        o.useState)([])
          , n = (0,
        o.useRef)(t);
        n.current = t;
        let a = (0,
        o.useRef)([])
          , s = (0,
        o.useRef)(new Map)
          , l = (0,
        o.useRef)(new Set)
          , u = (0,
        o.useRef)(0)
          , c = (0,
        o.useRef)(!1)
          , d = (0,
        o.useRef)(0)
          , m = (0,
        o.useRef)(0)
          , h = (0,
        o.useRef)(e);
        h.current = e;
        let f = (0,
        p.useSimStore)(e => e.phase)
          , y = (0,
        o.useRef)(f);
        y.current = f,
        (0,
        o.useEffect)( () => {
            let t = !1;
            c.current = !0,
            a.current = [],
            s.current = new Map,
            l.current = new Set,
            m.current = 0,
            d.current = tW(0);
            let r = () => {
                !document.hidden && navigator.onLine && "flying" === p.useSimStore.getState().phase && tz(e).then(r => {
                    t || h.current !== e || (a.current = r)
                }
                ).catch(e => {
                    console.error("[sim] ambient ghost metas failed", e)
                }
                )
            }
            ;
            r();
            let i = window.setInterval(r, 3e5);
            document.addEventListener("visibilitychange", r),
            window.addEventListener("online", r);
            let n = p.useSimStore.subscribe( (e, t) => {
                "flying" === e.phase && "flying" !== t.phase && r()
            }
            );
            return () => {
                c.current = !1,
                window.clearInterval(i),
                document.removeEventListener("visibilitychange", r),
                window.removeEventListener("online", r),
                n(),
                t = !0
            }
        }
        , [e]);
        let g = (0,
        o.useCallback)( (e, t) => {
            s.current.set(t, tN()),
            i(t => {
                let r = t.find(t => t.instanceId === e);
                return !r || r.dying ? t : t.map(t => t.instanceId === e ? {
                    ...t,
                    dying: !0
                } : t)
            }
            )
        }
        , [])
          , S = (0,
        o.useCallback)(e => {
            i(t => t.filter(t => t.instanceId !== e))
        }
        , [])
          , v = (0,
        o.useCallback)( (e, t) => {
            let r = new Set(n.current.filter(t => t.instanceId !== e).map(e => e.id));
            for (let e of l.current)
                r.add(e);
            (function(e) {
                let t = e.excludedIds ?? new Set
                  , r = e.nearRadius ?? 80;
                for (let i of e.metas)
                    if (tB(i, {
                        player: e.player,
                        activeIds: e.activeIds,
                        excludedIds: t
                    }) && !tq(i.id, e.cooldownUntil, e.now) && tk(i.pathSamples, e.player, i.duration) <= r)
                        return !0;
                return !1
            }
            )({
                metas: navigator.onLine && (0,
                tY.canDownloadAmbientReplay)() ? a.current : a.current.filter(e => tF(e.id)),
                player: ef.live.position,
                activeIds: r,
                cooldownUntil: s.current,
                now: Date.now(),
                excludedIds: tS()
            }) && (m.current += 1,
            d.current = 0,
            g(e, t))
        }
        , [g]);
        return (0,
        er.useFrame)( (t, r) => {
            if ("flying" !== y.current || document.hidden || 0 === a.current.length)
                return;
            let o = n.current
              , p = l.current
              , f = tG(o)
              , g = new Set(o.map(e => e.id));
            if (f >= 10) {
                m.current = 0;
                return
            }
            let S = m.current;
            if (S <= 0 && (d.current -= r),
            p.size > 0 || S <= 0 && d.current > 0)
                return;
            let v = ef.live.position
              , w = function(e) {
                let t = e.excludedIds ?? new Set
                  , r = e.random ?? Math.random
                  , i = e.nearRadius ?? 80
                  , n = e.target ?? 10;
                if (e.activeIds.size >= n)
                    return null;
                let a = e.metas.filter(r => tB(r, {
                    player: e.player,
                    activeIds: e.activeIds,
                    excludedIds: t
                }))
                  , s = a.filter(t => !tq(t.id, e.cooldownUntil, e.now))
                  , o = a.filter(t => tq(t.id, e.cooldownUntil, e.now))
                  , l = s;
                if (0 === l.length && 0 === e.activeIds.size && o.length > 0 && (l = o),
                0 === l.length)
                    return null;
                let u = l.map(t => ({
                    meta: t,
                    distance: tk(t.pathSamples, e.player, t.duration)
                })).sort( (e, t) => e.distance - t.distance || e.meta.id.localeCompare(t.meta.id))
                  , c = u.filter(e => e.distance <= i);
                return c.length > 0 ? function(e, t, r) {
                    let i = e.map(e => (r?.has(e.meta.id) ? 2 : 1) / (e.distance + 10))
                      , n = i.reduce( (e, t) => e + t, 0)
                      , a = t() * n;
                    for (let t = 0; t < e.length; t++)
                        if ((a -= i[t] ?? 0) <= 0)
                            return e[t].meta;
                    return e[e.length - 1].meta
                }(c, r, e.cachedIds) : u[0]?.meta ?? null
            }({
                metas: navigator.onLine && (0,
                tY.canDownloadAmbientReplay)() ? a.current : a.current.filter(e => tF(e.id)),
                cachedIds: new Set(a.current.filter(e => tF(e.id)).map(e => e.id)),
                player: v,
                activeIds: g,
                cooldownUntil: s.current,
                now: Date.now(),
                excludedIds: tS(),
                target: g.size + (10 - f)
            });
            if (!w || S > 0 && !function(e, t, r=80) {
                return tk(e.pathSamples, t, e.duration) <= r
            }(w, v)) {
                m.current = 0,
                d.current = tW(f);
                return
            }
            p.add(w.id),
            m.current > 0 && (m.current -= 1),
            d.current = function(e, t, r=Math.random) {
                return t > 0 ? 0 : tW(e, r)
            }(f + 1, m.current),
            tV(w.id, e).then(t => {
                if (p.delete(w.id),
                !c.current || !t || h.current !== e)
                    return;
                let r = function(e, t, r, i, n=3) {
                    if (0 === t.length)
                        return null;
                    let a = t.length - 1
                      , s = {
                        from: -1,
                        end: -1
                    }
                      , o = null
                      , l = 1 / 0;
                    for (let u of e) {
                        let e = (0,
                        es.findReplayIndex)(t, u.t, Math.max(s.from, 0));
                        if ((e < s.from || e > s.end) && (s = {
                            from: e,
                            end: (0,
                            es.replayFlightEnd)(t, e)
                        }),
                        (s.end === a ? i : t[s.end].t) - u.t < n)
                            continue;
                        let c = tR(u, r);
                        c < l && (l = c,
                        o = {
                            t: u.t,
                            end: s.end
                        })
                    }
                    return o ? {
                        seekT: o.t,
                        duration: o.end === a ? i : t[o.end].t,
                        frames: o.end === a ? t : t.slice(0, o.end + 1)
                    } : null
                }(w.pathSamples, t.frames, ef.live.position, t.duration);
                if (!r)
                    return void s.current.set(w.id, tN());
                u.current += 1;
                let n = `${w.id}:${u.current}`;
                i(e => e.some(e => e.id === w.id) || tG(e) >= 10 ? e : [...e, {
                    id: w.id,
                    instanceId: n,
                    frames: r.frames,
                    duration: r.duration,
                    seekT: r.seekT
                }])
            }
            ).catch(e => {
                p.delete(w.id),
                s.current.set(w.id, Date.now() + 5e3),
                e instanceof tY.AmbientDownloadBudgetError || console.error("[sim] ambient ghost clip failed", e)
            }
            )
        }
        ),
        (0,
        r.jsx)(r.Fragment, {
            children: t.map(e => (0,
            r.jsx)(tZ, {
                frames: e.frames,
                duration: e.duration,
                seekT: e.seekT,
                dying: !!e.dying,
                onFinished: () => g(e.instanceId, e.id),
                onTooFar: () => v(e.instanceId, e.id),
                onLingerDone: () => S(e.instanceId)
            }, e.instanceId))
        })
    }
    var t2 = e.i(478940)
      , t3 = e.i(848546)
      , t5 = e.i(947077)
      , t8 = e.i(774004)
      , t4 = e.i(907462)
      , t6 = e.i(561424);
    let t7 = {
        peers: [],
        serverTime: 0,
        localTime: 0,
        status: "connecting"
    };
    function t9() {
        let e = (0,
        t3.useThree)(e => e.scene)
          , t = (0,
        o.useRef)(null)
          , i = (0,
        o.useRef)(t7);
        return (0,
        o.useEffect)( () => {
            t4.navigationRuntime.multiplayer = i;
            let r = (0,
            t8.createMultiplayerRenderer)();
            return t.current = r,
            e.add(r.group),
            () => {
                t4.navigationRuntime.multiplayer === i && (t4.navigationRuntime.multiplayer = null),
                e.remove(r.group),
                t.current = null,
                r.dispose()
            }
        }
        , [e]),
        (0,
        er.useFrame)( ({camera: e}) => {
            i.current = e4.roomControl.connection?.remote?.feed ?? e4.roomControl.practice?.feed ?? t7,
            t.current && (t.current.group.visible = "podium" !== V.useRaceScreen.getState().screen),
            t.current?.update(i.current, e, performance.now()),
            (0,
            t5.playBoltShots)((0,
            ey.getDroneAudio)(), i.current.bolts)
        }
        , -1),
        (0,
        r.jsx)(t6.RaceTrails, {
            renderer: t
        })
    }
    var re = e.i(635525)
      , rt = e.i(685336)
      , rr = e.i(343998);
    function ri({objective: e, isNext: t}) {
        let i = (0,
        o.useRef)(null)
          , n = (0,
        o.useRef)(null);
        (0,
        er.useFrame)( ({clock: e}) => {
            if (!t)
                return;
            let r = Math.sin(3 * e.elapsedTime)
              , a = rt.objectiveProgress.satisfied ? 1 : .45
              , s = i.current;
            s && (s.opacity = (.45 + .07 * r) * a);
            let o = n.current;
            o && (o.opacity = (.1 + .19999999999999998 * rt.objectiveProgress.fraction) * a)
        }
        );
        let[a,s,l] = e.position
          , u = e.radius;
        return (0,
        r.jsxs)("group", {
            position: [a, s + .03, l],
            rotation: [-Math.PI / 2, 0, 0],
            children: [(0,
            r.jsxs)("mesh", {
                children: [(0,
                r.jsx)("circleGeometry", {
                    args: [u, 48]
                }), (0,
                r.jsx)("meshBasicMaterial", {
                    ref: n,
                    color: e.color,
                    transparent: !0,
                    opacity: t ? .1 : .07,
                    depthWrite: !1,
                    side: en.DoubleSide,
                    toneMapped: !1
                })]
            }), (0,
            r.jsxs)("mesh", {
                children: [(0,
                r.jsx)("ringGeometry", {
                    args: [.88 * u, u, 48]
                }), (0,
                r.jsx)("meshBasicMaterial", {
                    ref: i,
                    color: e.color,
                    transparent: !0,
                    opacity: t ? .45 : .07,
                    depthWrite: !1,
                    side: en.DoubleSide,
                    toneMapped: !1
                })]
            })]
        })
    }
    function rn({objectives: e, index: t}) {
        return (0,
        r.jsx)(r.Fragment, {
            children: e.map( (e, i) => "gate" === e.kind ? (0,
            r.jsx)(rr.HolographicGate, {
                gate: e,
                status: i < t ? "completed" : i === t ? "next" : "upcoming"
            }, e.id) : i < t ? null : (0,
            r.jsx)(ri, {
                objective: e,
                isNext: i === t
            }, e.id))
        })
    }
    var ra = e.i(230753)
      , rs = e.i(580864)
      , ro = e.i(638778)
      , rl = e.i(164372)
      , ru = e.i(130297);
    function rc(e, t, r, i) {
        e.position.x += r.x - i.x,
        e.position.y += r.y - i.y,
        e.position.z += r.z - i.z,
        t?.target.copy(r),
        i.copy(r)
    }
    let rd = (0,
    o.forwardRef)(function({minDistance: e, maxDistance: t, interactive: i=!0}, n) {
        return (0,
        r.jsx)(ru.OrbitControls, {
            ref: n,
            enableDamping: !0,
            dampingFactor: .08,
            enablePan: !1,
            enableRotate: i,
            enableZoom: i,
            rotateSpeed: .6,
            zoomSpeed: .7,
            minDistance: e,
            maxDistance: t,
            minPolarAngle: eB.CHASE_MIN_POLAR_ANGLE,
            maxPolarAngle: eB.CHASE_MAX_POLAR_ANGLE
        })
    })
      , rp = new en.Vector3;
    function rm({demo: e, interactive: t=!0}) {
        let i = (0,
        o.useRef)(null)
          , n = (0,
        o.useRef)(null)
          , a = (0,
        o.useRef)(new en.Vector3)
          , s = (0,
        o.useRef)(new en.Vector3)
          , l = (0,
        o.useRef)(!1)
          , u = (0,
        o.useRef)({
            obscured: -1,
            width: 0,
            height: 0
        })
          , c = (0,
        t3.useThree)(e => e.size)
          , {world: d} = (0,
        ei.useRapier)()
          , p = e.camera.follow ?? tr.DEFAULT_DEMO_FOLLOW
          , [m,h,f] = e.camera.offset
          , [y,g,S] = e.spawn.position;
        return (0,
        er.useFrame)( (e, t) => {
            let r = i.current;
            if (!r)
                return;
            let o = rl.framing.obscuredLeft
              , d = u.current;
            if (o !== d.obscured || c.width !== d.width || c.height !== d.height)
                if (u.current = {
                    obscured: o,
                    width: c.width,
                    height: c.height
                },
                o > 0) {
                    let e = c.width * (1 + o);
                    r.aspect = e / c.height,
                    r.setViewOffset(e, c.height, 0, 0, c.width, c.height)
                } else
                    r.aspect = c.width / c.height,
                    r.clearViewOffset();
            if (rp.set(ef.live.position.x, ef.live.position.y, ef.live.position.z),
            l.current)
                a.current.lerp(rp, 1 - Math.exp(-t / (.04 / 3)));
            else {
                a.current.copy(rp),
                s.current.copy(a.current),
                l.current = !0;
                let e = (0,
                eB.demoChaseLensPosition)(a.current, {
                    x: y,
                    y: g,
                    z: S
                }, p, [m, h, f]);
                r.position.set(e.x, e.y, e.z)
            }
            rc(r, n.current, a.current, s.current)
        }
        , -2),
        (0,
        er.useFrame)( () => {
            let e = i.current
              , t = n.current;
            e && t && eU(d, e, t.target, .6)
        }
        , 0),
        (0,
        r.jsxs)(r.Fragment, {
            children: [(0,
            r.jsx)(eh.PerspectiveCamera, {
                ref: i,
                makeDefault: !0,
                fov: e.camera.fov ?? tr.DEFAULT_DEMO_FOV,
                near: .1,
                far: 2e3
            }), (0,
            r.jsx)(rd, {
                ref: n,
                minDistance: .6,
                maxDistance: 6,
                interactive: t
            })]
        })
    }
    var rh = e.i(776922)
      , rf = e.i(572219);
    let ry = new Set(["KeyW", "KeyA", "KeyS", "KeyD", "Space", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight"]);
    class rg {
        pressed = new Set;
        attached = !1;
        detachFn = null;
        attach() {
            if (this.attached)
                return this.detachFn ?? ( () => {}
                );
            let e = e => {
                !ry.has(e.code) || (0,
                rf.isTypingTarget)(e.target) || (this.pressed.add(e.code),
                e.preventDefault())
            }
              , t = e => {
                ry.has(e.code) && this.pressed.delete(e.code)
            }
              , r = () => this.pressed.clear();
            return window.addEventListener("keydown", e),
            window.addEventListener("keyup", t),
            window.addEventListener("blur", r),
            this.attached = !0,
            this.detachFn = () => {
                window.removeEventListener("keydown", e),
                window.removeEventListener("keyup", t),
                window.removeEventListener("blur", r),
                this.pressed.clear(),
                this.attached = !1,
                this.detachFn = null
            }
            ,
            this.detachFn
        }
        sample() {
            let e = !!this.pressed.has("KeyW") - !!this.pressed.has("KeyS")
              , t = !!this.pressed.has("KeyD") - !!this.pressed.has("KeyA");
            return {
                forward: e,
                strafe: t,
                up: !!this.pressed.has("Space") - (this.pressed.has("ShiftLeft") || this.pressed.has("ShiftRight") ? 1 : 0),
                sprint: this.pressed.has("ControlLeft") || this.pressed.has("ControlRight")
            }
        }
    }
    let rS = -Math.PI / 2 + .05
      , rv = Math.PI / 2 - .05
      , rw = new en.Vector3
      , rM = new en.Vector3
      , rx = new en.Vector3
      , rb = new en.Euler(0,0,0,"YXZ");
    function rR() {
        let e = (0,
        o.useRef)(null)
          , t = (0,
        t3.useThree)(e => e.gl)
          , i = (0,
        o.useMemo)( () => new rg, [])
          , n = (0,
        o.useRef)(!1);
        return (0,
        o.useEffect)( () => i.attach(), [i]),
        (0,
        o.useEffect)( () => {
            let e = t.domElement
              , r = () => {
                document.pointerLockElement !== e && e.requestPointerLock()
            }
              , i = t => {
                document.pointerLockElement === e && (rh.editorLive.yaw -= .0022 * t.movementX,
                rh.editorLive.pitch = en.MathUtils.clamp(rh.editorLive.pitch - .0022 * t.movementY, rS, rv))
            }
              , n = t => {
                if (document.pointerLockElement !== e)
                    return;
                t.preventDefault();
                let r = t.deltaY > 0 ? .8928571428571428 : 1.12;
                rh.editorLive.flySpeed = en.MathUtils.clamp(rh.editorLive.flySpeed * r, 2, 80)
            }
            ;
            return e.addEventListener("click", r),
            document.addEventListener("mousemove", i),
            e.addEventListener("wheel", n, {
                passive: !1
            }),
            () => {
                e.removeEventListener("click", r),
                document.removeEventListener("mousemove", i),
                e.removeEventListener("wheel", n),
                document.pointerLockElement === e && document.exitPointerLock()
            }
        }
        , [t]),
        (0,
        er.useFrame)( (t, r) => {
            let a = e.current;
            if (!a)
                return;
            n.current || (a.position.set(rh.editorLive.position.x, rh.editorLive.position.y, rh.editorLive.position.z),
            n.current = !0),
            rb.set(rh.editorLive.pitch, rh.editorLive.yaw, 0),
            a.quaternion.setFromEuler(rb);
            let s = i.sample()
              , o = rh.editorLive.flySpeed * (s.sprint ? 2.5 : 1) * r;
            rw.set(0, 0, -1).applyQuaternion(a.quaternion),
            rw.y = 0,
            rw.lengthSq() > 1e-6 && rw.normalize(),
            rM.set(1, 0, 0).applyQuaternion(a.quaternion),
            rM.y = 0,
            rM.lengthSq() > 1e-6 && rM.normalize(),
            rx.set(0, 0, 0),
            rx.addScaledVector(rw, s.forward * o),
            rx.addScaledVector(rM, s.strafe * o),
            rx.y += s.up * o,
            a.position.add(rx),
            rh.editorLive.position.x = a.position.x,
            rh.editorLive.position.y = a.position.y,
            rh.editorLive.position.z = a.position.z
        }
        ),
        (0,
        r.jsx)(eh.PerspectiveCamera, {
            ref: e,
            makeDefault: !0,
            fov: 70,
            near: .05,
            far: 2e3
        })
    }
    var rk = e.i(76569)
      , rE = e.i(187333)
      , rI = e.i(225228)
      , rD = e.i(847511);
    let rL = new en.Vector3;
    function rj() {
        let e = (0,
        o.useRef)(null)
          , t = (0,
        o.useRef)(null)
          , i = (0,
        o.useRef)(!1)
          , n = (0,
        o.useRef)(new en.Vector3)
          , a = (0,
        o.useRef)(new en.Vector3)
          , {world: s} = (0,
        ei.useRapier)();
        return (0,
        er.useFrame)( (r, s) => {
            let o = e.current;
            if (o) {
                if (rL.set(ef.live.position.x, ef.live.position.y, ef.live.position.z),
                i.current)
                    n.current.lerp(rL, 1 - Math.exp(-s / .01));
                else {
                    n.current.copy(rL),
                    a.current.copy(n.current);
                    let e = (0,
                    eB.replayChaseLensPosition)(n.current, ef.live.rotation, 1.6, 1.4, 1.5);
                    o.position.set(e.x, e.y, e.z),
                    i.current = !0
                }
                rc(o, t.current, n.current, a.current)
            }
        }
        , -2),
        (0,
        er.useFrame)( () => {
            let r = e.current
              , i = t.current;
            r && i && eU(s, r, i.target, .8)
        }
        , 0),
        (0,
        r.jsxs)(r.Fragment, {
            children: [(0,
            r.jsx)(eh.PerspectiveCamera, {
                ref: e,
                makeDefault: !0,
                fov: 70,
                near: .1,
                far: 2e3
            }), (0,
            r.jsx)(rd, {
                ref: t,
                minDistance: .8,
                maxDistance: 10
            })]
        })
    }
    var rA = e.i(288936)
      , rT = e.i(483359)
      , rC = e.i(961731)
      , rF = e.i(760974)
      , rP = e.i(689812)
      , rz = e.i(308108);
    let rO = {
        position: [0, 0, 0],
        rotation: [0, 0, 0]
    }
      , r_ = [0, 0, 0]
      , rV = Math.PI / 12
      , rq = [0, 1, 0]
      , rB = new en.Raycaster
      , rN = new en.Vector2(0,0)
      , rW = new en.Vector3
      , rG = new en.Plane
      , rU = new en.Vector3
      , rQ = new en.Vector3
      , rK = new en.Vector3
      , r$ = new en.Vector3;
    function rH({gate: e, selected: t, ghost: i}) {
        let {euler: n} = (0,
        rT.gateBasis)(e)
          , [a,s] = e.size
          , l = i ? .35 : t ? 1 : .92
          , u = t ? "#ffffff" : e.color
          , c = (0,
        rC.gateHasHeader)(e)
          , d = (0,
        o.useMemo)( () => (0,
        rC.raceGateFrame)(e.size, c, u), [e.size, c, u]);
        return (0,
        r.jsxs)("group", {
            position: e.position,
            rotation: n,
            children: [(0,
            r.jsx)(rz.RaceGateMesh, {
                gate: rO,
                kit: d,
                opacity: l
            }), (0,
            r.jsxs)("mesh", {
                children: [(0,
                r.jsx)("planeGeometry", {
                    args: [a, s]
                }), (0,
                r.jsx)("meshBasicMaterial", {
                    color: e.color,
                    transparent: !0,
                    opacity: i ? .15 : t ? .35 : .18,
                    depthWrite: !1,
                    side: en.DoubleSide,
                    toneMapped: !1
                })]
            }), (0,
            r.jsxs)("mesh", {
                position: [0, 0, -.6],
                rotation: [Math.PI / 2, 0, 0],
                children: [(0,
                r.jsx)("coneGeometry", {
                    args: [.25, .7, 10]
                }), (0,
                r.jsx)("meshBasicMaterial", {
                    color: u,
                    transparent: !0,
                    opacity: l
                })]
            }), (0,
            r.jsxs)("mesh", {
                visible: !1,
                children: [(0,
                r.jsx)("planeGeometry", {
                    args: [a + .32, s + .32]
                }), (0,
                r.jsx)("meshBasicMaterial", {
                    side: en.DoubleSide
                })]
            })]
        })
    }
    function rY({objective: e, selected: t, ghost: i}) {
        let[n,a,s] = e.position
          , o = e.radius;
        return (0,
        r.jsxs)("group", {
            position: [n, a + .03, s],
            rotation: [-Math.PI / 2, 0, 0],
            children: [(0,
            r.jsxs)("mesh", {
                children: [(0,
                r.jsx)("circleGeometry", {
                    args: [o, 48]
                }), (0,
                r.jsx)("meshBasicMaterial", {
                    color: e.color,
                    transparent: !0,
                    opacity: i ? .25 : t ? .45 : .2,
                    depthWrite: !1,
                    side: en.DoubleSide,
                    toneMapped: !1
                })]
            }), (0,
            r.jsxs)("mesh", {
                children: [(0,
                r.jsx)("ringGeometry", {
                    args: [.88 * o, o, 48]
                }), (0,
                r.jsx)("meshBasicMaterial", {
                    color: t ? "#ffffff" : e.color,
                    transparent: !0,
                    opacity: i ? .35 : t ? .85 : .55,
                    depthWrite: !1,
                    side: en.DoubleSide,
                    toneMapped: !1
                })]
            }), (0,
            r.jsxs)("mesh", {
                visible: !1,
                children: [(0,
                r.jsx)("circleGeometry", {
                    args: [o, 32]
                }), (0,
                r.jsx)("meshBasicMaterial", {
                    side: en.DoubleSide
                })]
            })]
        })
    }
    function rJ({objective: e, selected: t, groupRef: i}) {
        return (0,
        r.jsx)("group", {
            ref: i,
            position: e.position,
            userData: {
                objectiveId: e.id
            },
            children: "gate" === e.kind ? (0,
            r.jsx)(rH, {
                gate: {
                    ...e,
                    position: [0, 0, 0]
                },
                selected: t
            }) : (0,
            r.jsx)(rY, {
                objective: {
                    ...e,
                    position: [0, 0, 0]
                },
                selected: t
            })
        })
    }
    function rX({tool: e, ghostPos: t}) {
        let i, n = (0,
        o.useRef)(null);
        if ((0,
        er.useFrame)( () => {
            let r = n.current;
            if (!r)
                return;
            let[i,a,s] = t.current;
            r.position.set(i, a, s),
            r.rotation.y = rh.editorLive.yaw,
            r.visible = "select" !== e
        }
        ),
        "select" === e)
            return null;
        if ("setSpawn" === e)
            return (0,
            r.jsx)("group", {
                ref: n,
                children: (0,
                r.jsx)(rP.SpawnMarker, {
                    position: [0, 0, 0],
                    yaw: 0,
                    active: !0
                })
            });
        let a = (i = rF.PRACTICE_OBJECTIVE_COLORS[0],
        "placeGate" === e ? {
            kind: "gate",
            color: i,
            size: [...rF.DEFAULT_GATE_SIZE]
        } : "placeLand" === e ? {
            kind: "land",
            color: i,
            radius: rF.DEFAULT_LAND_RADIUS
        } : null);
        return a ? (0,
        r.jsx)("group", {
            ref: n,
            children: "gate" === a.kind ? (0,
            r.jsx)(rH, {
                gate: {
                    position: [0, 0, 0],
                    rotation: r_,
                    size: a.size,
                    color: a.color
                },
                ghost: !0
            }) : (0,
            r.jsx)(rY, {
                objective: {
                    position: [0, 0, 0],
                    radius: a.radius,
                    color: a.color
                },
                ghost: !0
            })
        }) : null
    }
    function rZ() {
        let e = (0,
        p.useSimStore)(e => e.practiceEditorDraft)
          , t = (0,
        p.useSimStore)(e => e.editorTool)
          , i = (0,
        p.useSimStore)(e => e.selectedObjectiveId)
          , n = (0,
        p.useSimStore)(e => e.selectObjective)
          , a = (0,
        p.useSimStore)(e => e.addObjectiveAt)
          , s = (0,
        p.useSimStore)(e => e.updateObjective)
          , l = (0,
        p.useSimStore)(e => e.updateSpawn)
          , u = (0,
        p.useSimStore)(e => e.duplicateObjective)
          , c = (0,
        p.useSimStore)(e => e.deleteObjective)
          , d = (0,
        p.useSimStore)(e => e.setSpawnFromPose)
          , m = (0,
        p.useSimStore)(e => e.setEditorTool)
          , {camera: h, gl: f, scene: y} = (0,
        t3.useThree)()
          , g = (0,
        o.useRef)([0, 2, 0])
          , S = (0,
        o.useRef)(!1)
          , v = (0,
        o.useRef)(null)
          , w = (0,
        o.useRef)(null)
          , M = (0,
        o.useRef)(null)
          , x = (0,
        o.useRef)(new Map)
          , b = e?.practice.objectives ?? []
          , R = e?.spawn;
        return ((0,
        o.useEffect)( () => {
            let e = f.domElement
              , t = () => {
                rB.setFromCamera(rN, h);
                let e = rB.intersectObjects(y.children, !0);
                for (let t of e) {
                    let e = t.object;
                    for (; e; ) {
                        if (e.userData?.objectiveId)
                            return {
                                point: [t.point.x, t.point.y, t.point.z],
                                objectiveId: e.userData.objectiveId
                            };
                        if (e.userData?.ghostPreview)
                            break;
                        e = e.parent
                    }
                }
                for (let t of e) {
                    let e = t.object
                      , r = !1;
                    for (; e; ) {
                        if (e.userData?.objectiveId || e.userData?.ghostPreview) {
                            r = !0;
                            break
                        }
                        e = e.parent
                    }
                    if (r)
                        continue;
                    let i = t.point;
                    return {
                        point: [i.x, i.y, i.z],
                        objectiveId: null
                    }
                }
                return h.getWorldDirection(rK),
                rW.copy(h.position).addScaledVector(rK, 8),
                {
                    point: [rW.x, rW.y, rW.z],
                    objectiveId: null
                }
            }
              , r = r => {
                let i = e.getBoundingClientRect();
                if (document.pointerLockElement === e ? rN.set(0, 0) : (rN.x = (r.clientX - i.left) / i.width * 2 - 1,
                rN.y = -(2 * ((r.clientY - i.top) / i.height)) + 1),
                S.current && v.current && M.current) {
                    let e = v.current
                      , t = M.current
                      , r = w.current;
                    if (!r)
                        return;
                    if (rB.setFromCamera(rN, h),
                    "land" === t || "spawn" === t ? rG.setFromNormalAndCoplanarPoint(rQ.set(0, 1, 0), rU.set(r[0], r[1], r[2])) : (h.getWorldDirection(rK),
                    r$.copy(rK).negate(),
                    rG.setFromNormalAndCoplanarPoint(r$, rU.set(r[0], r[1], r[2]))),
                    rB.ray.intersectPlane(rG, rU)) {
                        let t, r = [rU.x, rU.y, rU.z];
                        w.current = r,
                        (t = x.current.get(e)) && t.position.set(r[0], r[1], r[2])
                    }
                    return
                }
                ( () => {
                    let e = p.useSimStore.getState().editorTool
                      , r = t()
                      , [i,n,a] = r.point;
                    "placeLand" === e || "setSpawn" === e ? n = r.point[1] : "placeGate" === e && (r.objectiveId ? (h.getWorldDirection(rK),
                    rW.copy(h.position).addScaledVector(rK, 8),
                    i = rW.x,
                    n = rW.y,
                    a = rW.z) : n = Math.max(r.point[1] + 1.7, 1)),
                    g.current = [i, n, a]
                }
                )()
            }
              , i = r => {
                if (0 !== r.button || p.useSimStore.getState().practiceEditorExitPrompt || document.pointerLockElement !== e)
                    return;
                rN.set(0, 0);
                let i = p.useSimStore.getState()
                  , s = i.editorTool
                  , o = t();
                if ("select" === s) {
                    if (o.objectiveId) {
                        n(o.objectiveId);
                        let e = o.objectiveId === rF.EDITOR_SPAWN_ID
                          , t = e ? null : i.practiceEditorDraft?.practice.objectives.find(e => e.id === o.objectiveId)
                          , r = e ? i.practiceEditorDraft?.spawn.position : t?.position;
                        S.current = !0,
                        v.current = o.objectiveId,
                        M.current = e ? "spawn" : t?.kind ?? null,
                        w.current = r ? [...r] : null
                    } else
                        n(null);
                    return
                }
                if ("setSpawn" === s) {
                    let[e,t,r] = g.current;
                    d([e, t, r], rh.editorLive.yaw),
                    m("select");
                    return
                }
                if ("placeGate" === s) {
                    let[e,t,r] = g.current;
                    a("gate", [e, t, r], {
                        rotation: [0, rh.editorLive.yaw, 0]
                    });
                    return
                }
                if ("placeLand" === s) {
                    let[e,t,r] = g.current;
                    a("land", [e, t, r])
                }
            }
              , o = () => {
                S.current && v.current && w.current && (v.current === rF.EDITOR_SPAWN_ID ? l({
                    position: w.current
                }) : s(v.current, {
                    position: w.current
                })),
                S.current = !1,
                v.current = null,
                M.current = null,
                w.current = null
            }
              , b = e => {
                if ((0,
                rf.isTypingTarget)(e.target) || "practiceEditor" !== p.useSimStore.getState().phase || p.useSimStore.getState().practiceEditorExitPrompt)
                    return;
                let t = p.useSimStore.getState().practiceEditorDraft
                  , r = t?.source.kind === "timeAttack" ? {
                    Digit1: "select",
                    Digit2: "placeGate",
                    Digit3: "setSpawn"
                } : {
                    Digit1: "select",
                    Digit2: "placeGate",
                    Digit3: "placeLand",
                    Digit4: "setSpawn"
                };
                if (r[e.code]) {
                    e.preventDefault(),
                    m(r[e.code]);
                    return
                }
                let i = p.useSimStore.getState().selectedObjectiveId;
                if (!i || !t)
                    return;
                if (i === rF.EDITOR_SPAWN_ID)
                    return void ("KeyQ" === e.code ? (e.preventDefault(),
                    l({
                        yaw: t.spawn.yaw + rV
                    })) : "KeyE" === e.code && (e.preventDefault(),
                    l({
                        yaw: t.spawn.yaw - rV
                    })));
                let n = t.practice.objectives.find(e => e.id === i);
                if (!n)
                    return;
                if ("Delete" === e.code || "Backspace" === e.code) {
                    e.preventDefault(),
                    c(i);
                    return
                }
                if ((e.metaKey || e.ctrlKey) && "KeyD" === e.code) {
                    e.preventDefault(),
                    u(i);
                    return
                }
                let a = "gate" === n.kind ? {
                    KeyQ: [rq, rV],
                    KeyE: [rq, -rV],
                    KeyR: [(0,
                    rT.gateBasis)(n).right, rV],
                    KeyT: [(0,
                    rT.gateBasis)(n).right, -rV]
                } : null;
                if ("gate" === n.kind && a?.[e.code]) {
                    e.preventDefault();
                    let[t,r] = a[e.code];
                    s(i, {
                        rotation: (0,
                        rT.rotateGate)(n.rotation, t, r)
                    });
                    return
                }
                if ("KeyF" === e.code) {
                    e.preventDefault(),
                    "gate" === n.kind && s(i, {
                        rotation: (0,
                        rT.flipGate)(n.rotation)
                    });
                    return
                }
                if ("BracketLeft" === e.code) {
                    e.preventDefault(),
                    "gate" === n.kind ? s(i, {
                        size: [Math.max(1, n.size[0] - .25), Math.max(1, n.size[1] - .25)]
                    }) : s(i, {
                        radius: Math.max(1, n.radius - .25)
                    });
                    return
                }
                "BracketRight" === e.code && (e.preventDefault(),
                "gate" === n.kind ? s(i, {
                    size: [n.size[0] + .25, n.size[1] + .25]
                }) : s(i, {
                    radius: n.radius + .25
                }))
            }
            ;
            return e.addEventListener("pointermove", r),
            e.addEventListener("pointerdown", i),
            window.addEventListener("pointerup", o),
            window.addEventListener("keydown", b),
            () => {
                e.removeEventListener("pointermove", r),
                e.removeEventListener("pointerdown", i),
                window.removeEventListener("pointerup", o),
                window.removeEventListener("keydown", b)
            }
        }
        , [h, f, y, n, a, s, l, u, c, d, m]),
        e && R) ? (0,
        r.jsxs)("group", {
            children: [b.map(e => (0,
            r.jsx)(rJ, {
                objective: e,
                selected: e.id === i,
                groupRef: t => {
                    t ? x.current.set(e.id, t) : x.current.delete(e.id)
                }
            }, e.id)), (0,
            r.jsx)("group", {
                position: R.position,
                userData: {
                    objectiveId: rF.EDITOR_SPAWN_ID
                },
                ref: e => {
                    e ? x.current.set(rF.EDITOR_SPAWN_ID, e) : x.current.delete(rF.EDITOR_SPAWN_ID)
                }
                ,
                children: (0,
                r.jsx)(rP.SpawnMarker, {
                    position: [0, 0, 0],
                    yaw: R.yaw,
                    active: "setSpawn" === t || i === rF.EDITOR_SPAWN_ID
                })
            }), (0,
            r.jsx)("group", {
                userData: {
                    ghostPreview: !0
                },
                children: (0,
                r.jsx)(rX, {
                    tool: t,
                    ghostPos: g
                })
            })]
        }) : null
    }
    let r0 = Math.PI / 12
      , r1 = new en.Raycaster
      , r2 = new en.Vector2(0,0)
      , r3 = new en.Vector3
      , r5 = new en.Plane
      , r8 = new en.Vector3
      , r4 = new en.Vector3
      , r6 = new en.Vector3;
    function r7({visible: e, ghostPos: t}) {
        let i = (0,
        o.useRef)(null);
        return ((0,
        er.useFrame)( () => {
            let r = i.current;
            if (!r)
                return;
            let[n,a,s] = t.current;
            r.position.set(n, a, s),
            r.rotation.y = rh.editorLive.yaw,
            r.visible = e
        }
        ),
        e) ? (0,
        r.jsx)("group", {
            ref: i,
            children: (0,
            r.jsx)(rP.SpawnMarker, {
                position: [0, 0, 0],
                yaw: 0,
                active: !0
            })
        }) : null
    }
    function r9() {
        let e = (0,
        p.useSimStore)(e => e.spawnEditorDraft)
          , t = (0,
        p.useSimStore)(e => e.editorTool)
          , i = (0,
        p.useSimStore)(e => e.selectedObjectiveId)
          , n = (0,
        p.useSimStore)(e => e.selectObjective)
          , a = (0,
        p.useSimStore)(e => e.addSpawnAt)
          , s = (0,
        p.useSimStore)(e => e.updateMapSpawn)
          , l = (0,
        p.useSimStore)(e => e.duplicateMapSpawn)
          , u = (0,
        p.useSimStore)(e => e.deleteMapSpawn)
          , c = (0,
        p.useSimStore)(e => e.setEditorTool)
          , {camera: d, gl: m, scene: h} = (0,
        t3.useThree)()
          , f = (0,
        o.useRef)([0, 2, 0])
          , y = (0,
        o.useRef)(!1)
          , g = (0,
        o.useRef)(null)
          , S = (0,
        o.useRef)(null)
          , v = (0,
        o.useRef)(new Map)
          , w = e?.spawns ?? [];
        return ((0,
        o.useEffect)( () => {
            let e = m.domElement
              , t = () => {
                r1.setFromCamera(r2, d);
                let e = r1.intersectObjects(h.children, !0);
                for (let t of e) {
                    let e = t.object;
                    for (; e; ) {
                        if (e.userData?.spawnId)
                            return {
                                point: [t.point.x, t.point.y, t.point.z],
                                spawnId: e.userData.spawnId
                            };
                        if (e.userData?.ghostPreview)
                            break;
                        e = e.parent
                    }
                }
                for (let t of e) {
                    let e = t.object
                      , r = !1;
                    for (; e; ) {
                        if (e.userData?.spawnId || e.userData?.ghostPreview) {
                            r = !0;
                            break
                        }
                        e = e.parent
                    }
                    if (r)
                        continue;
                    let i = t.point;
                    return {
                        point: [i.x, i.y, i.z],
                        spawnId: null
                    }
                }
                return d.getWorldDirection(r6),
                r3.copy(d.position).addScaledVector(r6, 8),
                {
                    point: [r3.x, r3.y, r3.z],
                    spawnId: null
                }
            }
              , r = r => {
                let i, n = e.getBoundingClientRect();
                if (document.pointerLockElement === e ? r2.set(0, 0) : (r2.x = (r.clientX - n.left) / n.width * 2 - 1,
                r2.y = -(2 * ((r.clientY - n.top) / n.height)) + 1),
                y.current && g.current) {
                    let e = g.current
                      , t = S.current;
                    if (!t)
                        return;
                    if (r1.setFromCamera(r2, d),
                    r5.setFromNormalAndCoplanarPoint(r4.set(0, 1, 0), r8.set(t[0], t[1], t[2])),
                    r1.ray.intersectPlane(r5, r8)) {
                        let t, r = [r8.x, r8.y, r8.z];
                        S.current = r,
                        (t = v.current.get(e)) && t.position.set(r[0], r[1], r[2])
                    }
                    return
                }
                f.current = [(i = t()).point[0], i.point[1], i.point[2]]
            }
              , i = r => {
                if (0 !== r.button || p.useSimStore.getState().spawnEditorExitPrompt || document.pointerLockElement !== e)
                    return;
                r2.set(0, 0);
                let i = p.useSimStore.getState()
                  , s = i.editorTool
                  , o = t();
                if ("select" === s) {
                    if (o.spawnId) {
                        n(o.spawnId);
                        let e = i.spawnEditorDraft?.spawns.find(e => e.id === o.spawnId);
                        y.current = !0,
                        g.current = o.spawnId,
                        S.current = e ? [...e.position] : null
                    } else
                        n(null);
                    return
                }
                if ("placeSpawn" === s) {
                    let[e,t,r] = f.current;
                    a([e, t, r], rh.editorLive.yaw)
                }
            }
              , o = () => {
                y.current && g.current && S.current && s(g.current, {
                    position: S.current
                }),
                y.current = !1,
                g.current = null,
                S.current = null
            }
              , w = e => {
                if ((0,
                rf.isTypingTarget)(e.target) || "spawnEditor" !== p.useSimStore.getState().phase || p.useSimStore.getState().spawnEditorExitPrompt)
                    return;
                if ("Digit1" === e.code) {
                    e.preventDefault(),
                    c("select");
                    return
                }
                if ("Digit2" === e.code) {
                    e.preventDefault(),
                    c("placeSpawn");
                    return
                }
                let t = p.useSimStore.getState().selectedObjectiveId
                  , r = p.useSimStore.getState().spawnEditorDraft;
                if (!t || !r)
                    return;
                let i = r.spawns.find(e => e.id === t);
                if (i) {
                    if ("Delete" === e.code || "Backspace" === e.code) {
                        e.preventDefault(),
                        u(t);
                        return
                    }
                    if ((e.metaKey || e.ctrlKey) && "KeyD" === e.code) {
                        e.preventDefault(),
                        l(t);
                        return
                    }
                    if ("KeyQ" === e.code) {
                        e.preventDefault(),
                        s(t, {
                            yaw: i.yaw + r0
                        });
                        return
                    }
                    "KeyE" === e.code && (e.preventDefault(),
                    s(t, {
                        yaw: i.yaw - r0
                    }))
                }
            }
            ;
            return e.addEventListener("pointermove", r),
            e.addEventListener("pointerdown", i),
            window.addEventListener("pointerup", o),
            window.addEventListener("keydown", w),
            () => {
                e.removeEventListener("pointermove", r),
                e.removeEventListener("pointerdown", i),
                window.removeEventListener("pointerup", o),
                window.removeEventListener("keydown", w)
            }
        }
        , [d, m, h, n, a, s, l, u, c]),
        e) ? (0,
        r.jsxs)("group", {
            children: [w.map(e => (0,
            r.jsx)("group", {
                position: e.position,
                userData: {
                    spawnId: e.id
                },
                ref: t => {
                    t ? v.current.set(e.id, t) : v.current.delete(e.id)
                }
                ,
                children: (0,
                r.jsx)(rP.SpawnMarker, {
                    position: [0, 0, 0],
                    yaw: e.yaw,
                    active: "placeSpawn" === t || i === e.id
                })
            }, e.id)), (0,
            r.jsx)("group", {
                userData: {
                    ghostPreview: !0
                },
                children: (0,
                r.jsx)(r7, {
                    visible: "placeSpawn" === t,
                    ghostPos: f
                })
            })]
        }) : null
    }
    var ie = e.i(655861)
      , it = e.i(869488)
      , ir = e.i(794396);
    function ii({onReady: e}) {
        var t;
        let s = (0,
        n.useMapJoin)(e => e.generation)
          , l = (0,
        n.useMapJoin)(e => "joining" === e.status)
          , u = (0,
        n.useMapJoin)(e => "joining" === e.status || "failed" === e.status)
          , c = (0,
        o.useMemo)( () => new Set, [])
          , d = (0,
        p.useSimStore)(e => e.phase)
          , m = (0,
        p.useSimStore)(e => e.impactClip)
          , h = (0,
        p.useSimStore)(e => e.settings.graphics)
          , y = (0,
        o.useMemo)( () => ({
            bloom: h.bloom ?? !1,
            msaa: h.msaa ?? !1
        }), [h.bloom, h.msaa])
          , v = (0,
        p.useSimStore)(e => e.settings.camera)
          , w = (0,
        p.useSimStore)(tl.selectedQuad)
          , M = (0,
        p.useSimStore)(f.activeMapId)
          , x = (0,
        p.useSimStore)(f.activeLesson)
          , R = (0,
        p.useSimStore)(e => e.activeTimeAttackId)
          , k = (0,
        b.useMatchLaunch)(e => (0,
        b.stillFlight)(e.active, M, x?.id ?? null))
          , E = (0,
        p.useSimStore)(e => null !== (0,
        X.soloRaceOf)(e))
          , I = (0,
        K.usePracticeLaunch)(e => !x && e.active?.arena.mapId === M)
          , D = k || E || I
          , L = (0,
        p.useSimStore)(e => e.lessonStepIndex)
          , j = (0,
        p.useSimStore)(e => e.lessonObjectiveIndex)
          , A = (0,
        p.useSimStore)(e => e.editingLessonStep)
          , T = (0,
        p.useSimStore)(e => e.lessonStepDraft)
          , C = (0,
        p.useSimStore)(e => e.replayEditor)
          , F = (0,
        p.useSimStore)(e => e.savedReplays)
          , P = (0,
        e2.getTimeAttackDoc)(F.find(e => e.id === C?.savedId)?.timeAttackId)
          , z = (0,
        p.useSimStore)(e => e.captureReview)
          , O = (0,
        p.useSimStore)(e => e.isAdmin && e.adminOpen)
          , _ = (0,
        S.useMapEditor)(e => e.active)
          , q = (0,
        p.useSimStore)(e => e.lessonAuthoringEpoch)
          , B = (0,
        p.useSimStore)(e => e.adminDraftMapId)
          , N = (0,
        e$.useOfficialMapAuthoring)(e => e.testDefinition)
          , W = B && N?.id === B ? N : null
          , G = (0,
        Q.usePublishedGridworks)(e => e.revision)
          , U = (0,
        p.useSimStore)(e => e.showcaseEpoch)
          , $ = (0,
        p.useSimStore)(e => e.practiceEditorDraft)
          , H = (0,
        p.useSimStore)(e => e.spawnEditorDraft)
          , Y = (0,
        p.useSimStore)(e => e.freeFlightSpawn)
          , J = (0,
        o.useMemo)( () => W ?? (H ? (0,
        g.mapById)(H.mapId) : (0,
        g.resolveMap)(M)), [M, H, W, q])
          , Z = (0,
        o.useMemo)( () => x ? (0,
        eZ.worldForLesson)(x) : W ? (0,
        e1.worldWithDocument)(W, W.editorDocument ?? null) : (0,
        e1.worldForMap)(J), [x, J, G, W])
          , et = (0,
        o.useMemo)( () => (0,
        e0.createHeightSampler)(Z.terrain), [Z.terrain])
          , er = (0,
        o.useMemo)( () => ({
            world: Z,
            generation: s
        }), [Z, s])
          , en = (0,
        o.useMemo)( () => x && "lessonLoading" !== d ? (0,
        eX.resolveLessonStep)(x, L) : null, [x, L, d])
          , ea = (0,
        o.useMemo)( () => (0,
        e2.getMenuShowcase)(), [U, d])
          , eh = (0,
        o.useMemo)( () => $?.spawn ? $.spawn : x ? x.spawn : Y || Z.spawns[0], [$, x, Y, Z.spawns])
          , ef = (0,
        o.useMemo)( () => {
            let e = "lessonDone" === d || "courseDone" === d ? (0,
            es.getReplay)() : null;
            return function(e) {
                let t, {phase: r, lessonId: i, lessonStepIndex: n, editingLessonStep: a, lessonStepDraft: s, authoredStep: o, captureReview: l, menuShowcase: u, showcaseEpoch: c, finishReplay: d, spawn: p, cameraSettings: m, hasLesson: h, practiceHideMapGates: y} = e;
                if ((0,
                f.isMenuReplayBackdrop)(r))
                    return {
                        craft: {
                            kind: "none"
                        },
                        camera: {
                            kind: "cinematic"
                        },
                        showLessonCourse: !1,
                        filterGatesFromWorld: !1
                    };
                let g = "lessonDemoCapture" === r
                  , S = "showcaseCapture" === r
                  , v = g || S
                  , w = "lessonDemoReview" === r
                  , M = "showcaseReview" === r
                  , x = "replayEditor" === r
                  , b = (0,
                f.isPhaseDemo)(r)
                  , R = "practiceEditor" === r
                  , k = "spawnEditor" === r
                  , E = R || k
                  , I = "flying" === r || "lessonFinishing" === r || "lessonDone" === r || "courseDone" === r
                  , D = a && s ? s.demo.camera : o?.demo.camera
                  , L = a && s ? s.recording : o?.recording ?? null
                  , j = b || w ? o?.demo : void 0
                  , A = j && D ? {
                    ...j,
                    camera: D
                } : j
                  , T = b && !!L && L.frames.length > 0
                  , C = w && !!l && l.frames.length > 0
                  , F = M && !!l && l.frames.length > 0
                  , P = x && !!l && l.frames.length > 0
                  , z = l?.cameraView !== "thirdPerson"
                  , O = !!d && d.frames.length > 0
                  , _ = C ? l : T ? L : null
                  , V = _ && A?.camera.view === "fpv" ? {
                    fov: m.fov,
                    tiltDeg: m.tiltDeg
                } : null
                  , q = "fpv" === u.camera.view
                  , B = F && q ? {
                    fov: m.fov,
                    tiltDeg: m.tiltDeg
                } : null
                  , N = g ? o?.demo.spawn ?? p : p
                  , W = l && (w || M || x) ? {
                    trimStart: l.trimStart,
                    trimEnd: l.trimEnd,
                    playing: l.playing,
                    seekToken: l.seekToken,
                    seekTo: l.seekTo
                } : null;
                t = E ? {
                    kind: "none"
                } : _ ? {
                    kind: "replay",
                    key: `${i}-${n}-${w ? "review" : "rec"}`,
                    frames: _.frames,
                    duration: _.duration,
                    fpv: V,
                    control: w ? W : null
                } : A ? {
                    kind: "demo",
                    key: `${i}-${n}`,
                    demo: A
                } : F && l ? {
                    kind: "replay",
                    key: `showcase-review-${c}`,
                    frames: l.frames,
                    duration: l.duration,
                    fpv: B,
                    control: W
                } : P && l ? {
                    kind: "replay",
                    key: "session-replay-editor",
                    frames: l.frames,
                    duration: l.duration,
                    fpv: z ? {
                        fov: m.fov,
                        tiltDeg: m.tiltDeg
                    } : null,
                    control: W
                } : O && d ? {
                    kind: "replay",
                    key: `${i}-finish`,
                    frames: d.frames,
                    duration: d.duration,
                    fpv: null,
                    control: null
                } : {
                    kind: "live",
                    active: !0,
                    spawn: v ? N : p
                };
                let G = A && !T && !C && (0,
                tr.isChaseDemo)(A) ? A : void 0
                  , U = A && (T || C) && (0,
                tr.isChaseDemo)(A) ? A : void 0
                  , Q = "lessonStep" !== r || a;
                return {
                    craft: t,
                    camera: E ? {
                        kind: "freecam"
                    } : G ? {
                        kind: "demo",
                        key: `${i}-${n}-camera`,
                        demo: G,
                        interactive: Q
                    } : U ? {
                        kind: "demo",
                        key: `${i}-${n}-rec-camera`,
                        demo: U,
                        interactive: Q
                    } : O || P && !z || F && !q ? {
                        kind: "replay",
                        key: O ? `${i}-replay` : P ? "session-replay-cam" : F ? "showcase-review-cam" : `menu-showcase-cam-${c}`
                    } : {
                        kind: "none"
                    },
                    showLessonCourse: h && I && !v,
                    filterGatesFromWorld: R ? y ?? !0 : !k && !(!h || I || v || w || x)
                }
            }({
                phase: d,
                lessonId: x?.id ?? null,
                lessonStepIndex: L,
                editingLessonStep: A,
                lessonStepDraft: T,
                authoredStep: en,
                captureReview: z,
                menuShowcase: ea,
                showcaseEpoch: U,
                finishReplay: e,
                spawn: eh,
                cameraSettings: v,
                hasLesson: !!x,
                practiceHideMapGates: $?.hideMapGates
            })
        }
        , [d, x, L, A, T, en, z, ea, U, eh, v, $?.hideMapGates])
          , ey = (0,
        o.useMemo)( () => x ? (0,
        eZ.lessonFlightWorld)(Z) : ef.filterGatesFromWorld ? {
            ...Z,
            boxes: Z.boxes.filter(e => "gate" !== e.kind)
        } : Z, [Z, x, ef.filterGatesFromWorld])
          , {craft: eg, camera: eS} = ef
          , ev = "impactCinematic" === d && m
          , ew = (0,
        it.useActivityDisplay)(e => null !== e.display)
          , eM = (0,
        V.useRaceScreen)(e => "podium" === e.screen)
          , ex = (0,
        p.useSimStore)(e => !!e.raceRun?.match)
          , eb = !u && "raceLobby" !== d && "raceFinishing" !== d && "raceResults" !== d && "droneWheel" !== d && "paused" !== d && "practiceEditor" !== d && "spawnEditor" !== d && !(0,
        f.isMenuReplayBackdrop)(d) && ("none" !== eg.kind || "impactCinematic" === d);
        return (0,
        r.jsxs)(r.Fragment, {
            children: ["live" === eg.kind ? (0,
            r.jsx)(ee, {
                mapId: ey.mapId,
                lessonId: x?.id ?? null,
                draftTest: !!W
            }) : null, (0,
            r.jsxs)(eH.Canvas, {
                frameloop: l || ew ? "always" : _ ? "never" : "paused" === d || "droneWheel" === d || "raceLobby" === d || "raceFinishing" === d || "raceResults" === d ? "demand" : "always",
                shadows: !!h.shadows && "percentage",
                dpr: (0,
                eY.renderPixelRatio)(window.devicePixelRatio, window.innerWidth, window.innerHeight, h),
                gl: (0,
                eJ.simGl)({
                    antialias: !1
                }),
                camera: {
                    fov: v.fov,
                    near: .05,
                    far: h.drawDistance
                },
                children: [(0,
                r.jsx)(ie.ActivityThumbnails, {}), (0,
                r.jsx)(el.GraphicsController, {}), (0,
                r.jsx)(eu.SimFrameRenderer, {
                    quality: h.quality,
                    effects: y,
                    report: !0
                }), (0,
                r.jsx)(o.Suspense, {
                    fallback: null,
                    children: (0,
                    r.jsxs)(rI.SceneAssetReadiness, {
                        value: c,
                        children: [(0,
                        r.jsx)(e3.DroneAudio, {
                            enabled: eb,
                            room: (0,
                            e5.roomForMap)(M),
                            ambience: (0,
                            e8.ambienceForMap)(M)
                        }), (0,
                        r.jsx)(e6, {
                            enabled: eb && "live" === eg.kind
                        }), (0,
                        r.jsx)(rE.SimTextures, {
                            world: ey,
                            quality: h.quality,
                            children: (0,
                            r.jsx)(ec.TrackWorldContext.Provider, {
                                value: ey,
                                children: (0,
                                r.jsxs)(ed.DriftParkRaceGate, {
                                    world: ey,
                                    children: [(0,
                                    r.jsxs)(ei.Physics, {
                                        timeStep: "vary",
                                        paused: !0,
                                        gravity: [0, -ek.GRAVITY, 0],
                                        children: [(0,
                                        r.jsx)(eo, {}), (0,
                                        r.jsx)(rk.SimEnvironment, {
                                            world: ey,
                                            quality: h.quality,
                                            shadows: h.shadows,
                                            drawDistance: h.drawDistance,
                                            movingColliders: "live" !== eg.kind,
                                            still: D
                                        }), x || D || "live" !== eg.kind || R ? null : (0,
                                        r.jsxs)(r.Fragment, {
                                            children: [(0,
                                            r.jsx)("group", {
                                                visible: "impactCinematic" !== d,
                                                children: (0,
                                                r.jsx)(eq.ClockedDriftFleet, {
                                                    clock: e4.flightWorldClock,
                                                    audible: e4.flightAudible,
                                                    quality: h.quality,
                                                    shadows: h.shadows
                                                })
                                            }), ("gridworks" === J.id || J.pedestrians) && (0,
                                            r.jsx)(o.Suspense, {
                                                fallback: null,
                                                children: (0,
                                                r.jsx)(ep.WalkingCrowd, {
                                                    count: (0,
                                                    em.pedestrianCount)(J),
                                                    quality: h.quality,
                                                    shadows: h.shadows
                                                })
                                            })]
                                        }), ev ? (0,
                                        r.jsx)(eK, {
                                            clip: m,
                                            quality: h.quality,
                                            shadows: h.shadows
                                        }, m.id) : "replay" === eg.kind ? (0,
                                        r.jsx)(tf.ReplayDrone, {
                                            timeAttack: P,
                                            frames: eg.frames,
                                            duration: eg.duration,
                                            shadows: h.shadows,
                                            fpv: eg.fpv,
                                            control: eg.control,
                                            shake: v.shake,
                                            drawDistance: h.drawDistance,
                                            airMode: w.airMode,
                                            idleThrottle: w.idleThrottle,
                                            quality: h.quality
                                        }, eg.key) : "demo" === eg.kind ? (0,
                                        r.jsx)(tm, {
                                            demo: eg.demo,
                                            ground: et,
                                            shadows: h.shadows
                                        }, eg.key) : null, "live" === eg.kind ? (0,
                                        r.jsx)(th.RoomFlight, {
                                            joinScene: er,
                                            draftTest: !!W,
                                            world: ey,
                                            lesson: x ?? null,
                                            still: D,
                                            spawn: eg.spawn,
                                            active: eg.active && !ev,
                                            visible: !ev && !eM && !ew
                                        }) : null, "live" !== eg.kind || ev || u ? null : (0,
                                        r.jsxs)(r.Fragment, {
                                            children: [(0,
                                            r.jsx)(ir.LiveMatchStage, {}), (0,
                                            r.jsx)(it.ActivityDisplayStage, {
                                                world: ey,
                                                view: J.views.lobby
                                            })]
                                        }), x && ef.showLessonCourse ? (0,
                                        r.jsx)(rn, {
                                            objectives: x.practice.objectives,
                                            index: j
                                        }) : null, i.RACE_LOBBY_ENABLED && !W && !x && ((0,
                                        a.isOfficialMapId)(M) || (0,
                                        a.isPersonalMapId)(M)) && ("flying" === d || "paused" === d || "droneWheel" === d || "raceLobby" === d || "raceFinishing" === d || "raceResults" === d) ? (0,
                                        r.jsx)(ra.TimeAttackCourse, {}) : null, i.RACE_LOBBY_ENABLED && !W && !x && (0,
                                        a.isOfficialMapId)(M) && ("flying" === d || "paused" === d || "droneWheel" === d) ? (0,
                                        r.jsx)(rs.ArenaMarkers, {}) : null, !W && !x && (k || I) ? (0,
                                        r.jsx)(ro.ArenaWalls, {}) : null, W || "gridworks" !== M || (t = {
                                            hasLesson: !!x,
                                            activeTimeAttackId: R,
                                            phase: d
                                        }).hasLesson || null != t.activeTimeAttackId || "flying" !== t.phase && "paused" !== t.phase && "droneWheel" !== t.phase ? null : (0,
                                        r.jsx)(t0, {}), (0,
                                        re.multiplayerMounted)({
                                            hasLesson: !!x,
                                            activeTimeAttackId: ex ? null : R,
                                            phase: d,
                                            editing: _ || O || !!W
                                        }) ? (0,
                                        r.jsx)(t9, {}) : null, "practiceEditor" === d ? (0,
                                        r.jsx)(rZ, {}) : null, "spawnEditor" === d ? (0,
                                        r.jsx)(r9, {}) : null, "demo" === eS.kind ? (0,
                                        r.jsx)(rm, {
                                            demo: eS.demo,
                                            interactive: eS.interactive
                                        }, eS.key) : "replay" === eS.kind ? (0,
                                        r.jsx)(rj, {}, eS.key) : null]
                                    }), "cinematic" === eS.kind ? (0,
                                    r.jsxs)(r.Fragment, {
                                        children: [(0,
                                        r.jsx)(rA.ShowcaseCamera, {
                                            view: J.views.menu,
                                            cinematic: !0
                                        }), (0,
                                        r.jsx)(eq.CinematicDriftFleet, {
                                            quality: h.quality,
                                            shadows: h.shadows
                                        })]
                                    }) : "showcase" === eS.kind ? (0,
                                    r.jsx)(rA.ShowcaseCamera, {
                                        view: eS.view,
                                        sweep: !0
                                    }, `${M}-${d}`) : "freecam" === eS.kind ? (0,
                                    r.jsx)(rR, {}, H ? `spawns-${H.mapId}` : $?.source.kind === "timeAttack" ? $.source.timeAttackId : $?.source.kind === "lesson" ? $.source.lessonId : "freecam") : null, (0,
                                    r.jsx)(t2.NavigationCamera, {}), (0,
                                    r.jsx)(rD.SceneReady, {
                                        onReady: () => {
                                            (0,
                                            n.mapJoinSceneReady)(s, er),
                                            e?.()
                                        }
                                    }, `${s}:${M}:${q}:${G}`)]
                                })
                            })
                        })]
                    })
                })]
            })]
        })
    }
    e.s(["default", 0, function({onReady: e}) {
        let t = (0,
        p.useSimStore)(e => e.phase);
        return (0,
        r.jsxs)(r.Fragment, {
            children: [(0,
            r.jsx)(k, {}), (0,
            r.jsx)(et.SquadDroneSync, {}), (0,
            r.jsx)(R.SquadReadiness, {}), (0,
            r.jsx)(G, {}), (0,
            f.isMenuReplayBackdrop)(t) ? (0,
            r.jsx)(s.default, {
                onReady: e
            }) : (0,
            r.jsx)(ii, {
                onReady: e
            })]
        })
    }
    ], 250466)
}
, 88831, function(e) {
    e.n(e.i(250466))
}
]);
