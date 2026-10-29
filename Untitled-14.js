(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 301572, e => {
    "use strict";
    var t = e.i(843476)
      , i = e.i(271645)
      , s = e.i(780348)
      , n = e.i(288461)
      , o = e.i(170341)
      , r = e.i(94800)
      , a = e.i(436007)
      , l = e.i(190072)
      , c = e.i(349884)
      , h = e.i(579832)
      , d = e.i(584042)
      , u = e.i(420001)
      , m = e.i(577390)
      , p = e.i(778807)
      , f = e.i(409993)
      , g = e.i(979392)
      , k = e.i(714745)
      , v = e.i(28276)
      , y = e.i(353198)
      , b = e.i(353937)
      , S = e.i(940072)
      , w = e.i(306212)
      , T = e.i(512112)
      , I = e.i(685336)
      , R = e.i(247638)
      , M = e.i(49925)
      , A = e.i(171204)
      , C = e.i(373636)
      , E = e.i(404961)
      , x = e.i(998494)
      , z = e.i(983040)
      , L = e.i(26186)
      , P = e.i(647412)
      , q = e.i(291355)
      , D = e.i(152756)
      , _ = e.i(246176)
      , j = e.i(829858)
      , O = e.i(882902)
      , F = e.i(884316)
      , N = e.i(335789)
      , H = e.i(315292)
      , B = e.i(480858)
      , K = e.i(617317)
      , G = e.i(426310)
      , U = e.i(594791)
      , V = e.i(174637)
      , W = e.i(31288);
    let J = new Map
      , $ = e => `${e.kind}:${e.map}:${e.lesson ?? ""}:${e.squadId ?? ""}:${e.match ?? ""}:${e.race ?? ""}`;
    var Y = e.i(410290);
    class X {
        last = null;
        step(e) {
            let t = null === this.last ? 0 : Math.max(0, e - this.last) / 1e3;
            return this.last = e,
            t
        }
        due(e) {
            return null === this.last || e - this.last >= 40
        }
    }
    var Q = e.i(818227)
      , Z = e.i(811113)
      , ee = e.i(920755)
      , et = e.i(349894)
      , ei = e.i(807375)
      , es = e.i(322757)
      , en = e.i(601060)
      , eo = e.i(796856)
      , er = e.i(106258)
      , ea = e.i(809886)
      , el = e.i(771607)
      , ec = e.i(814022)
      , eh = e.i(409409)
      , ed = e.i(987808)
      , eu = e.i(49159)
      , em = e.i(497710)
      , ep = e.i(663011)
      , ef = e.i(871234)
      , eg = e.i(297383)
      , ek = e.i(706079);
    let ev = new Set(["flying", "lessonFinishing", "lessonDemoCapture", "showcaseCapture"])
      , ey = e => ({
        rates: e.rates,
        throttle: e.throttle,
        cameraTiltDeg: e.camera.tiltDeg
    })
      , eb = (0,
    w.physicsFromSearch)("u" < typeof location ? "" : location.search)
      , eS = "legacy" === eb.name
      , ew = new WeakMap
      , eT = 1
      , eI = e => {
        let t = ew.get(e);
        return t || ew.set(e, t = eT++),
        t
    }
    ;
    function eR(e) {
        let t = e.room.view(e.pilotId)
          , i = t?.last;
        if (!t || !i)
            return;
        let s = t.body
          , n = s.translation()
          , o = s.rotation()
          , r = er.useSimStore.getState();
        R.live.position.x = n.x,
        R.live.position.y = n.y,
        R.live.position.z = n.z,
        R.live.rotation.x = o.x,
        R.live.rotation.y = o.y,
        R.live.rotation.z = o.z,
        R.live.rotation.w = o.w,
        R.live.droneId = t.drone,
        R.live.droneSkin = (0,
        b.equippedDroneSkin)(r.settings.drone.skins, t.drone),
        R.live.voltageFactor = i.voltageFactor,
        R.live.armBlockedByThrottle = i.armBlockedByThrottle,
        R.live.hoverLocked = i.hoverLocked,
        R.live.markerHeld = (0,
        f.heldAfterMarker)(t);
        let a = e.control;
        R.live.input.throttle = a.throttle,
        R.live.input.roll = a.roll,
        R.live.input.pitch = a.pitch,
        R.live.input.yaw = a.yaw,
        R.live.input.armRequested = a.armRequested,
        R.live.input.source = a.source;
        let l = eM.get(e);
        R.live.telemetry.speed = i.speed,
        R.live.telemetry.altitude = i.altitude,
        R.live.telemetry.distance = l ? Math.hypot(n.x - l[0], n.z - l[2]) : 0,
        (0,
        c.writeAttitudeTelemetry)(R.live.telemetry, o.x, o.y, o.z, o.w),
        R.live.telemetry.throttle = i.throttleCommand,
        R.live.telemetry.armed = i.armed,
        R.live.telemetry.flightTimeMs = i.flightTimeMs,
        R.live.grounded = i.supported,
        R.live.upDot = i.upDot,
        R.live.invertedSeconds = t.invertedSeconds,
        R.live.drowned = t.drowned,
        R.live.motors[0] = i.motors[0],
        R.live.motors[1] = i.motors[1],
        R.live.motors[2] = i.motors[2],
        R.live.motors[3] = i.motors[3],
        "parked" !== t.mode && (0,
        z.recordReplayFrame)(0, S.FLIGHT_TIMESTEP, n, o, {
            throttle: a.throttle,
            roll: a.roll,
            pitch: a.pitch,
            yaw: a.yaw
        }, i.motors, {
            droneId: R.live.droneId,
            droneSkin: R.live.droneSkin,
            voltageFactor: i.voltageFactor
        })
    }
    let eM = new WeakMap;
    e.s(["RoomFlight", 0, function({world: e, lesson: c, spawn: f, active: S, joinScene: w=e, visible: ew=!0, draftTest: eT=!1, still: eA=!1}) {
        let {rapier: eC} = (0,
        a.useRapier)()
          , eE = (0,
        i.useRef)(null)
          , ex = (0,
        i.useRef)(null)
          , ez = (0,
        i.useRef)(null)
          , eL = (0,
        n.useMapJoin)(e => e.generation)
          , eP = (0,
        n.useMapJoin)(e => e.offline)
          , eq = (0,
        i.useRef)(null)
          , eD = (0,
        i.useRef)(0)
          , e_ = (0,
        i.useRef)(!0)
          , ej = (0,
        i.useRef)(f);
        (0,
        i.useEffect)( () => {
            ej.current = f
        }
        , [f]);
        let eO = (0,
        er.useSimStore)(e => e.settings.camera)
          , eF = (0,
        er.useSimStore)(e => e.settings.graphics.shadows)
          , eN = (0,
        er.useSimStore)(e => e.settings.graphics.drawDistance)
          , eH = (0,
        er.useSimStore)(ec.flownDrone)
          , eB = (0,
        er.useSimStore)(e => e.lessonAuthoringEpoch)
          , eK = (0,
        er.useSimStore)(e => null !== e.personalMapId) || (0,
        x.isPersonalMapId)(e.mapId)
          , eG = (0,
        er.useSimStore)(e => "lessonDemoCapture" === e.phase || "showcaseCapture" === e.phase)
          , eU = (0,
        er.useSimStore)(e => !!(0,
        V.sessionServiceUrl)() && !!e.playerAccountId && !e.isAnonymous)
          , [eV] = (0,
        i.useState)( () => {
            let t = _.useLobbySocial.getState()
              , i = er.useSimStore.getState();
            return (0,
            j.flightSquadAdmission)({
                launch: t.activeLaunch,
                squad: t.squad,
                accountId: i.isAnonymous ? null : i.playerAccountId,
                mapId: e.mapId,
                lessonId: c?.id ?? null
            })
        }
        )
          , eW = c || eV?.mapId !== e.mapId ? null : eV.squadId
          , eJ = eW ? eV.launchVersion : 0
          , e$ = (0,
        C.usePublishedGridworks)(e => e.revision)
          , eY = (0,
        i.useMemo)( () => c || eT ? null : "gridworks" === e.mapId ? (0,
        M.gridworksLayoutRevision)() ?? 0 : e.mapId.startsWith("official:") || (0,
        x.isPersonalMapId)(e.mapId) ? (0,
        E.mapById)(e.mapId).revision ?? null : null, [c, e, e$, eT])
          , eX = (0,
        O.useMatchLaunch)(e => e.active)
          , eQ = (0,
        F.usePracticeLaunch)(e => e.active)
          , eZ = !eQ || c || eG || eQ.arena.mapId !== e.mapId ? null : eQ
          , e0 = (0,
        er.useSimStore)(B.soloRaceOf)
          , e1 = (0,
        i.useMemo)( () => (0,
        W.roomRequestFor)({
            online: eU,
            capture: eG,
            draft: eT,
            legacyPhysics: eS,
            practice: !!eZ,
            offlineChoice: eP,
            mapId: e.mapId,
            lessonId: c?.id ?? null,
            revision: eY,
            activeMatch: eX,
            soloRace: e0,
            personal: eK,
            squadId: eW,
            squadLaunch: eJ
        }), [eG, eU, eT, c, eK, e.mapId, eY, eW, eJ, eX, e0, eZ, eP])
          , e4 = (0,
        ec.lendHolds)(e1, !!c || !!e0);
        (0,
        i.useEffect)( () => (er.useSimStore.setState({
            lendHere: e4
        }),
        () => er.useSimStore.setState({
            lendHere: !0
        })), [e4]);
        let[e2,e8] = (0,
        i.useState)(null)
          , e3 = (0,
        i.useMemo)( () => e1 ? J.get($(e1)) ?? e1.kind : "private", [e1])
          , e7 = e2?.request === e1 ? e2.kind : e3
          , e9 = (0,
        i.useMemo)( () => c && !eG ? {
            kind: e7,
            world: e,
            contactEvents: !0,
            physicsSetup: eb,
            lesson: {
                id: c.id,
                spawn: c.spawn,
                objectives: c.practice.objectives
            }
        } : eZ ? {
            kind: "match",
            world: e,
            contactEvents: !0,
            physicsSetup: eb,
            still: !0,
            scoring: !1,
            courses: [],
            activities: [],
            walls: eZ.arena.bounds
        } : {
            kind: e7,
            world: e,
            contactEvents: !0,
            physicsSetup: eb,
            drift: !c,
            still: eA,
            ..."match" === e7 && eX?.map === e.mapId && eX.arena ? {
                walls: eX.arena.bounds
            } : {},
            courses: eG || c || eT ? [] : (0,
            v.listTimeAttacks)(),
            arenas: eG || c || eT ? [] : (0,
            v.listArenas)(),
            crowd: !c && !eK,
            scoring: !eG && !eK && !eT
        }, [e, c, eG, eK, eB, e1, e7, eT, eZ, eA, eX])
          , e5 = `${eL}:${eI(w)}:${eI(e9.world)}:${e9.lesson?.id ?? ""}:${eI(e9)}`;
        (0,
        i.useEffect)( () => {
            let t = er.useSimStore.getState()
              , i = ej.current;
            et.combo.reset(),
            e_.current = !0,
            eq.current = null,
            ez.current = null;
            let r = null
              , a = null
              , l = new Y.RoomSession({
                rapier: eC,
                room: e9,
                link: new Y.LocalLink,
                pilot: {
                    id: "local",
                    drone: eZ?.drone ?? (0,
                    ec.flownDrone)(t),
                    xp: (0,
                    el.confirmedXp)(t),
                    gifts: t.droneGifts.filter(y.isNormalDrone),
                    ...ey(t.settings),
                    spawn: eZ ? (0,
                    H.practiceSpawn)(eZ.arena) : i,
                    parked: !0,
                    combo: et.combo,
                    hover: !!eZ
                },
                onEvent: (e, t) => {
                    (function(e, t, i) {
                        let s = er.useSimStore.getState();
                        switch ((0,
                        d.playFlightCues)(t, {
                            raceGates: s.raceRun?.course.gates.length ?? 0,
                            priorBestMs: s.raceRun?.priorPbMs ?? null,
                            lessonObjectives: e.room.lesson?.objectives.length ?? 0,
                            counted: "raceGate" === t.type && (e.room.view(e.pilotId)?.race?.go ?? null) !== null
                        }),
                        t.type) {
                        case "raceStaged":
                        case "raceGo":
                            {
                                let i = e.room.view(e.pilotId)?.race?.go ?? null
                                  , n = O.useMatchLaunch.getState().active?.match;
                                null !== i && n && s.beginMatchRace(t.courseId, i, n) && (0,
                                K.matchRaceStaged)(t.courseId, i === p.GO_PENDING ? null : i);
                                break
                            }
                        case "respawned":
                            (0,
                            z.markReplayDiscontinuity)(),
                            R.live.impactShake = 0,
                            U.matchRaceClock.back = !1,
                            eM.set(e, t.pose.position),
                            "mapReturn" !== t.reason && e.input.reset();
                            break;
                        case "contact":
                            (0,
                            u.onContact)((0,
                            h.getDroneAudio)(), R.live.position, t, performance.now() / 1e3),
                            t.force >= m.BUMP_FORCE_THRESHOLD && !t.grounded && (R.live.impactShake = Math.min(1, R.live.impactShake + t.force / 1200));
                            break;
                        case "drowned":
                            (0,
                            u.playImpact)((0,
                            h.getDroneAudio)(), R.live.position, (0,
                            u.contactStrength)(t.speed));
                            break;
                        case "mapWarning":
                        case "raceWarning":
                            (0,
                            h.getDroneAudio)()?.play("race.tick", {
                                params: {
                                    secondsLeft: t.secondsLeft
                                }
                            });
                            break;
                        case "raceLeft":
                        case "raceOffCourse":
                            (0,
                            h.getDroneAudio)()?.play("race.leave"),
                            em.timeAttackLeave.leftAt = performance.now(),
                            em.timeAttackLeave.leftStaged = t.staged,
                            em.timeAttackLeave.leftRestaged = "raceOffCourse" === t.type;
                            break;
                        case "raceRestaged":
                            U.matchRaceClock.restagedAt = t.tick,
                            U.matchRaceClock.back = !0;
                            break;
                        case "dummyHit":
                            s.beginImpact((0,
                            D.impactClip)(e, t)) || e.command({
                                type: "cinematicDone"
                            })
                        }
                        s.roomEvent(t, i)
                    }
                    )(l, e, t),
                    "droneSwapped" === e.type && e.pilot === l.pilotId && a?.()
                }
                ,
                onStep: eR,
                onTick: e => {
                    !function(e, t, i=!1) {
                        if (e.commandPending || i)
                            return;
                        let s = t.getState()
                          , n = function(e, t, i) {
                            if (!t || "flying" !== e.phase)
                                return null;
                            let s = e.raceRun;
                            if (s && e.activeTimeAttackId === s.course.id) {
                                let i = t.race;
                                if (!i)
                                    return {
                                        kind: "raceLeft"
                                    };
                                if (i.course.id !== s.course.id || i.revision !== (s.course.competitiveRevision ?? 1) || "menu" === i.phase)
                                    return null;
                                let n = "running" === i.phase;
                                return i.gateIndex === e.timeAttackGateIndex && n === e.timeAttackRunning ? null : {
                                    kind: "race",
                                    gateIndex: i.gateIndex,
                                    running: n
                                }
                            }
                            return null !== e.activeLessonId && e.activeLessonId === i && t.lessonIndex !== e.lessonObjectiveIndex ? {
                                kind: "lesson",
                                index: t.lessonIndex
                            } : null
                        }(s, e.room.view(e.pilotId), e.room.lesson?.id ?? null);
                        n && (e.stats.repairs++,
                        s.repairRoomProgress(n))
                    }(e, er.useSimStore, V?.pending);
                    let t = e.room.view(e.pilotId)
                      , i = (0,
                    ei.combatSelf)(t?.combat ?? null, e.room.tick, performance.now(), t?.normalDrone, {
                        cause: e.outCause,
                        back: e.reclaimAt
                    });
                    i && (0,
                    es.hitTaken)(i),
                    r?.update(e.room, performance.now())
                }
                ,
                onBolt: e => (0,
                ei.combatBolt)(e, performance.now())
            })
              , c = eZ ? new H.PracticeMatch(eC,l,{
                arena: eZ.arena,
                difficulty: eZ.difficulty,
                drone: eZ.drone,
                seed: eZ.seed
            }) : null;
            if (c) {
                l.host = c,
                c.onMatch = ei.combatMatch,
                c.onNotice = e => (0,
                ei.combatNotice)(e, performance.now());
                let e = () => {
                    let e = l.room.view(l.pilotId)?.normalDrone ?? eZ.drone
                      , i = (0,
                    b.equippedDroneSkin)(er.useSimStore.getState().settings.drone.skins, e)
                      , s = "factory" === i ? void 0 : (0,
                    y.droneSkin)(e, i);
                    return c.roster(t.username ?? "You", s && {
                        skin: s.id,
                        palette: {
                            shell: s.shell,
                            accent: s.accent,
                            props: s.props
                        }
                    })
                }
                  , i = e();
                r = new N.PracticeFeed(i,l.pilotId,c),
                (0,
                eo.setMatchSeats)(i, l.pilotId),
                a = () => (0,
                eo.setMatchSeats)(e(), l.pilotId),
                L.roomControl.practice = {
                    feed: r.feed
                }
            }
            ex.current = l;
            let f = !0
              , v = () => f && ex.current === l && n.useMapJoin.getState().generation === eL && "failed" !== n.useMapJoin.getState().status
              , S = (0,
            n.bindMapJoin)(eL, e.mapId, w, l, e1?.kind ?? "lobby")
              , T = eP || !!eZ || eG || eT || eS
              , M = (0,
            o.onFrameDrawn)( () => {
                if (ex.current !== l || ez.current !== l)
                    return;
                let e = o.drawnView.camera?.parent;
                for (; e && e !== eE.current; )
                    e = e.parent;
                S?.drawn({
                    joined: T || !l.offline,
                    initialized: l.steps > 0,
                    fpv: !!e && e === eE.current
                })
            }
            );
            L.roomControl.session = l;
            let C = (0,
            en.registerScenery)((0,
            en.sceneryRay)(eC, l.room.physics));
            (0,
            eh.setRoomOfflineProbe)( () => L.roomControl.session?.offline ?? !0);
            let E = l.input.attach()
              , x = e9.world.editorDocument
              , j = l.room.moving;
            x && j && A.prefabPhysicsClocks.set(x, j.clock),
            g.crowdRuntime.session++,
            t.raceLobby && t.activeTimeAttackId && "raceLobby" === t.phase && l.command({
                type: "openRace",
                courseId: t.activeTimeAttackId
            });
            let G = t.raceRun
              , V = !G || G.match || t.timeAttackResult || t.activeTimeAttackId !== G.course.id ? null : (0,
            s.initialSoloLaunch)( () => {
                l.command({
                    type: "openRace",
                    courseId: G.course.id
                }),
                l.command({
                    type: "startRace",
                    courseId: G.course.id,
                    revision: G.course.competitiveRevision ?? 1,
                    drone: G.appearance.droneId,
                    skin: G.appearance.skinId
                })
            }
            , () => {
                let e = er.useSimStore.getState();
                return ex.current === l && e.raceRun?.id === G.id && !e.timeAttackResult && e.activeTimeAttackId === G.course.id
            }
            , T);
            (0,
            z.markReplayDiscontinuity)();
            let W = e1 ? new q.RoomConnection({
                session: l,
                request: e1,
                returnTo: (0,
                B.lobbyToReturnTo)(e1),
                onAdmitted: S?.admitted,
                token: async () => (await (0,
                ee.createClient)().auth.getSession()).data.session?.access_token ?? null,
                hello: () => {
                    let e = er.useSimStore.getState()
                      , t = "match" === e1.kind && O.useMatchLaunch.getState().active?.mode === "teamDeathmatch" ? (0,
                    ek.lastPick)(e.playerAccountId) : null;
                    return {
                        tuning: ey(e.settings),
                        drone: t ?? (0,
                        ec.flownDrone)(e),
                        skins: Object.fromEntries(y.DRONE_IDS.map(t => [t, (0,
                        b.equippedDroneSkin)(e.settings.drone.skins, t)])),
                        revision: e1.revision,
                        still: !!e9.still
                    }
                }
                ,
                onStatus: e => {
                    v() && (S?.status(e),
                    V?.status(e),
                    "online" === e.state && (0,
                    B.noteRoom)(e1, e.room),
                    "match" === e1.kind && (0,
                    O.followMatchStatus)(e),
                    er.useSimStore.getState().setRoomStatus(e),
                    "blocked" === e.state && (0,
                    O.flyingElsewhere)())
                }
                ,
                onServerEvent: e => {
                    ("raceFinished" === e.type || "lessonComplete" === e.type || "raceRefused" === e.type) && er.useSimStore.getState().roomEvent(e, !0)
                }
                ,
                onResult: e => er.useSimStore.getState().roomResult(e),
                onVerdict: e => er.useSimStore.getState().roomVerdict(e),
                onStanding: ({mute: e, mod: t}) => er.useSimStore.getState().applyPlayerProfile({
                    chatMute: e,
                    isMod: t
                }),
                onMatch: ei.combatMatch,
                onCombat: e => (0,
                ei.combatNotice)(e, performance.now()),
                onMatchRoom: (e, t, i, s) => {
                    (0,
                    K.joinMatchRoom)(e, t, i, s, O.useMatchLaunch.getState().active?.course ?? null),
                    (0,
                    eo.setMatchSeats)(e?.mode === "teamDeathmatch" ? s : [], e?.mode === "teamDeathmatch" ? t : null)
                }
                ,
                onRoster: e => {
                    (0,
                    K.setMatchRoster)(e),
                    eo.useMatchSeats.getState().self && (0,
                    eo.setMatchSeats)(e, eo.useMatchSeats.getState().self)
                }
                ,
                onStandings: K.setMatchStandings,
                onContent: ({courses: e}) => {
                    v() && !e9.lesson && (0,
                    k.staleContent)(e) && (0,
                    k.refreshCatalog)( () => {
                        v() && er.useSimStore.setState(e => ({
                            lessonAuthoringEpoch: e.lessonAuthoringEpoch + 1
                        }))
                    }
                    )
                }
                ,
                onRoomKind: e => {
                    var t, i;
                    let s = (t = l.room.kind,
                    i = e_.current,
                    t === e ? "join" : (J.set($(e1), e),
                    i ? "rebuild" : "stay"));
                    return "rebuild" === s && e8({
                        request: e1,
                        kind: e
                    }),
                    s
                }
                ,
                onMapChanged: () => {
                    v() && (0,
                    P.reloadRoomMap)(e9.world.mapId).then( () => {
                        v() && er.useSimStore.setState(e => ({
                            lessonAuthoringEpoch: e.lessonAuthoringEpoch + 1
                        }))
                    }
                    ).catch(e => {
                        if (v()) {
                            if ((0,
                            n.mapJoinCovered)())
                                return void S?.fail("map_reload");
                            er.useSimStore.getState().returnToMenu(),
                            _.useLobbySocial.setState({
                                launchError: !1,
                                error: e instanceof Error ? e.message : "This map changed. Select the map again to retry."
                            })
                        }
                    }
                    )
                }
            }) : null
              , X = S?.onEnd( () => W?.dispose());
            return L.roomControl.connection = W,
            W || T || S?.fail(),
            W || V?.status({
                state: "offline"
            }),
            W ? "failed" === n.useMapJoin.getState().status ? W.dispose() : W.start() : eT ? er.useSimStore.getState().setRoomStatus({
                state: "offline",
                code: "unsupported",
                message: ""
            }) : eS ? er.useSimStore.getState().setRoomStatus({
                state: "offline",
                code: "unsupported",
                message: "Offline practice: legacy physics (development A/B)."
            }) : er.useSimStore.getState().setRoomStatus({
                state: "offline",
                code: eG ? "unsupported" : "offline",
                message: ""
            }),
            () => {
                f = !1,
                X?.(),
                S?.dispose(),
                M(),
                V?.dispose(),
                W?.dispose(),
                L.roomControl.connection === W && (L.roomControl.connection = null),
                (0,
                ei.resetCombatHud)(),
                E(),
                x && j && A.prefabPhysicsClocks.get(x) === j.clock && A.prefabPhysicsClocks.delete(x),
                L.roomControl.session === l && (L.roomControl.session = null),
                C(),
                ex.current === l && (ex.current = null),
                c && (l.host = null,
                c.free(),
                L.roomControl.practice?.feed === r?.feed && (L.roomControl.practice = null),
                F.usePracticeLaunch.getState().active === eZ && (0,
                F.leavePractice)()),
                l.dispose(),
                Object.assign(eu.mapReturnWarning, (0,
                eu.createMapLeaveState)()),
                g.crowdRuntime.routes = [],
                z.liveCrowdTrack.current = void 0,
                z.liveDriftClock.current = void 0,
                z.livePrefabClock.current = void 0,
                ep.timeWarp.scale = 1,
                (0,
                I.resetObjectiveProgress)()
            }
        }
        , [e5, eC]),
        (0,
        i.useEffect)( () => {
            let e = () => {
                let e = er.useSimStore.getState();
                ex.current?.input.setEnabled(!!e.username && !e.settingsOpen && !e.calibrating && !e.adminOpen && !e.profileOpen && !(0,
                ea.isPhasePaused)(e.phase) && !(0,
                n.mapJoinCovered)())
            }
            ;
            e();
            let t = er.useSimStore.subscribe(e)
              , i = n.useMapJoin.subscribe(e);
            return () => {
                t(),
                i()
            }
        }
        , [e5]),
        (0,
        i.useEffect)( () => er.useSimStore.subscribe( (e, t) => {
            e.xp !== t.xp && ex.current?.offline && ex.current.room.setPilotXp(ex.current.pilotId, (0,
            el.confirmedXp)(e)),
            (e.settings.rates !== t.settings.rates || e.settings.throttle !== t.settings.throttle || e.settings.camera.tiltDeg !== t.settings.camera.tiltDeg) && ex.current?.command({
                type: "tuning",
                tuning: ey(e.settings)
            })
        }
        ), []),
        (0,
        i.useEffect)( () => {
            let e = () => {
                if (ex.current?.resetClock(),
                !document.hidden)
                    return;
                let e = er.useSimStore.getState();
                "raceLobby" === e.phase || "raceFinishing" === e.phase || "raceResults" === e.phase || (0,
                G.hiddenTabKeepsRace)(e) || (e.activeTimeAttackId && ("flying" === e.phase || "paused" === e.phase) && e.exitTimeAttack(),
                er.useSimStore.getState().pause())
            }
            ;
            return document.addEventListener("visibilitychange", e),
            () => document.removeEventListener("visibilitychange", e)
        }
        , []);
        let e6 = (0,
        i.useRef)(er.useSimStore.getState().phase)
          , te = (0,
        i.useMemo)( () => ({
            q0: new l.Quaternion,
            q1: new l.Quaternion,
            p: new l.Vector3
        }), [])
          , tt = (0,
        i.useMemo)( () => new X, [])
          , ti = (0,
        i.useCallback)( (e, t) => {
            let i = er.useSimStore.getState();
            (0,
            n.mapJoinCovered)() || "connecting" === i.roomStatus.state || (e_.current = !1);
            let s = (0,
            n.mapJoinCovered)() || e_.current && "connecting" === i.roomStatus.state
              , o = e.room.view(e.pilotId)
              , r = o?.mode === "flying" && o.race?.phase === "finished" && null !== o.race.tail && ("raceFinishing" === i.phase || "raceResults" === i.phase)
              , a = (ev.has(i.phase) || r) && (!document.hidden || (0,
            G.hiddenTabKeepsRace)(i)) && !s;
            if (a !== eq.current)
                eq.current = a,
                eD.current = t,
                e.command(a ? {
                    type: "fly",
                    warp: "droneWheel" === e6.current
                } : {
                    type: "park"
                });
            else {
                let i;
                a && o?.mode === "parked" && "menu" !== (i = o.race?.phase) && "finished" !== i && t - eD.current > 500 && (eD.current = t,
                e.command({
                    type: "fly"
                }))
            }
            e6.current = i.phase;
            let l = (0,
            ec.flownDrone)(i);
            return !o || o.race || o.combat || o.drone === l || "flying" !== i.phase || e.command({
                type: "swapDrone",
                drone: l
            }),
            e.frame(tt.step(t), i.settings.bindings, a),
            L.roomControl.session === e && L.roomControl.connection?.remote?.flying(e.steps, t),
            a
        }
        , [tt]);
        return (0,
        i.useEffect)( () => {
            let e = setInterval( () => {
                let e = ex.current
                  , t = performance.now();
                !(e && document.hidden && (0,
                G.hiddenTabKeepsRace)(er.useSimStore.getState()) && (0,
                G.hiddenTabFliesNothing)(e.room.view(e.pilotId)?.race, e.room.worldSteps)) && e && tt.due(t) && ti(e, t)
            }
            , 16);
            return () => clearInterval(e)
        }
        , [ti, tt]),
        (0,
        r.useFrame)( (e, t) => {
            let i = ex.current;
            if (!i)
                return;
            let s = er.useSimStore.getState()
              , n = performance.now()
              , o = ti(i, n);
            (function(e) {
                let t = e.room
                  , i = t.view(e.pilotId);
                if (!i)
                    return;
                Object.assign(eu.mapReturnWarning, i.mapLeave),
                eu.mapReturnWarning.target = (0,
                eu.mapReturnZone)(t.world.bounds, i.body.translation(), t.world.terrain?.floor ?? 0).target;
                let s = i.race
                  , n = s?.phase === "running";
                U.matchRaceClock.worldSteps = t.worldSteps + e.alpha,
                U.matchRaceClock.gates = s?.gateIndex ?? 0;
                let o = i.body.translation();
                U.matchRaceClock.position[0] = o.x,
                U.matchRaceClock.position[1] = o.y,
                U.matchRaceClock.position[2] = o.z,
                ed.timeAttackClock.running = n,
                ed.timeAttackClock.elapsedMs = s && "menu" !== s.phase && "staged" !== s.phase ? Math.floor((s.steps + (n ? e.alpha : 0)) * 25 / 6) : 0,
                s && ("staged" === s.phase || "running" === s.phase) && (Object.assign(em.timeAttackLeave, s.leave),
                em.timeAttackLeave.staged = "staged" === s.phase,
                em.timeAttackLeave.solo = null === s.go,
                em.timeAttackLeave.target = s.course.gates[s.gateIndex]?.position ?? em.timeAttackLeave.target),
                t.lesson && (I.objectiveProgress.fraction = Math.min(1, i.lessonHeld / T.LAND_SETTLE_SECONDS),
                I.objectiveProgress.remaining = Math.max(0, T.LAND_SETTLE_SECONDS - i.lessonHeld),
                I.objectiveProgress.satisfied = i.lessonSatisfied),
                t.crowd && (g.crowdRuntime.time = t.time,
                g.crowdRuntime.routes = t.crowd.routes,
                z.liveCrowdTrack.current = {
                    time: t.time,
                    routes: t.crowd.routes
                }),
                z.liveDriftClock.current = t.drift ? t.time : void 0,
                z.livePrefabClock.current = t.moving?.clock.current,
                ep.timeWarp.scale = t.warpScale
            }
            )(i),
            Q.flightFrames.frame(t, o, n);
            let r = s.settings.graphics;
            Q.flightFrames.view(r.quality, (0,
            Z.lensStrength)(s.settings), r.postProcessing ?? "low" !== r.quality);
            let a = eE.current;
            if (a) {
                let e = i.previous
                  , t = i.current
                  , s = i.alpha;
                a.position.set(e.x + (t.x - e.x) * s, e.y + (t.y - e.y) * s, e.z + (t.z - e.z) * s),
                te.q0.set(e.qx, e.qy, e.qz, e.qw),
                te.q1.set(t.qx, t.qy, t.qz, t.qw),
                a.quaternion.copy(te.q0.slerp(te.q1, s)),
                ez.current = i
            }
            L.flightWorldClock.current = i.previousTime + (i.currentTime - i.previousTime) * i.alpha,
            L.flightAudible.current = !(0,
            ea.isPhasePaused)(s.phase) && "impactCinematic" !== s.phase
        }
        , -60),
        (0,
        t.jsxs)("group", {
            ref: eE,
            visible: ew,
            children: [(0,
            t.jsx)(ef.DroneModel, {
                castShadow: eF,
                fpv: S,
                archetype: eH
            }), S ? (0,
            t.jsx)(eg.FpvCamera, {
                archetype: eH,
                fov: eO.fov,
                tiltDeg: eO.tiltDeg,
                shake: eO.shake,
                far: eN
            }) : null]
        })
    }
    ], 301572)
}
, 420001, e => {
    "use strict";
    function t(e) {
        return Math.min(1, .8 * Math.sqrt(Math.max(0, e) / 12))
    }
    let i = {
        at: -1 / 0
    };
    function s(e, t, i, n=!1) {
        return e?.play("impact.hit", {
            at: t,
            params: {
                strength: i,
                strike: +!!n
            }
        }) ?? null
    }
    e.s(["SLIDE_GAP", 0, .15, "contactState", 0, i, "contactStrength", 0, t, "onContact", 0, function(e, n, o, r) {
        let a = r - i.at < .15 && o.normalSpeed < 1.2;
        i.at = r,
        !a && o.normalSpeed > .18 && s(e, n, t(o.normalSpeed), !o.vertical && !o.underside)
    }
    , "playImpact", 0, s])
}
, 409993, 685336, 647412, 232871, 410290, e => {
    "use strict";
    var t = e.i(577390);
    e.s(["heldAfterMarker", 0, function(e) {
        return !!e.last?.hoverLocked && e.markerHold === t.MARKER_HOLD.closed
    }
    ], 409993);
    let i = {
        fraction: 0,
        remaining: 0,
        satisfied: !1
    };
    e.s(["objectiveProgress", 0, i, "resetObjectiveProgress", 0, function() {
        i.fraction = 0,
        i.remaining = 0,
        i.satisfied = !1
    }
    ], 685336);
    var s = e.i(412864)
      , n = e.i(58849)
      , o = e.i(998494);
    async function r(e) {
        if ((0,
        o.isOfficialMapId)(e))
            await (0,
            n.prepareOfficialMapForPlay)(e);
        else if ((0,
        o.isPersonalMapId)(e)) {
            let t = await (0,
            s.loadSharedMap)(e.slice(5));
            if (t.aliasOf)
                throw Error("This map needs a newer game version. Reload the game to continue.");
            await (0,
            s.preparePersonalMapForPlay)(t)
        } else
            throw Error("This map needs a newer game version. Reload the game to continue.")
    }
    e.s(["reloadRoomMap", 0, r], 647412);
    var a = e.i(50270);
    new TextEncoder,
    new TextDecoder;
    var l = e.i(789788)
      , c = e.i(353198)
      , h = e.i(55807)
      , d = e.i(228486)
      , u = e.i(26115);
    let m = a.z.object({
        rates: a.z.object({
            roll: h.axisRatesSchema,
            pitch: h.axisRatesSchema,
            yaw: h.axisRatesSchema
        }).strict(),
        throttle: a.z.object({
            mid: a.z.number().min(0).max(1),
            expo: a.z.number().min(0).max(1)
        }).strict(),
        cameraTiltDeg: a.z.number().min(0).max(l.MAX_CAMERA_TILT_DEG).optional()
    }).strict()
      , p = a.z.string().min(1).max(128)
      , f = a.z.enum(c.DRONE_IDS)
      , g = a.z.number().int().min(0).max(1e6)
      , k = e => a.z.array(g).length(e)
      , v = a.z.discriminatedUnion("type", [a.z.object({
        type: a.z.literal("respawn")
    }).strict(), a.z.object({
        type: a.z.literal("park")
    }).strict(), a.z.object({
        type: a.z.literal("fly"),
        warp: a.z.boolean().optional()
    }).strict(), a.z.object({
        type: a.z.literal("tuning"),
        tuning: m
    }).strict(), a.z.object({
        type: a.z.literal("swapDrone"),
        drone: f
    }).strict(), a.z.object({
        type: a.z.literal("pickDrone"),
        drone: f
    }).strict(), a.z.object({
        type: a.z.literal("openRace"),
        courseId: p
    }).strict(), a.z.object({
        type: a.z.literal("startRace"),
        courseId: p,
        revision: a.z.number().int().min(1).max(1e6),
        drone: f,
        skin: a.z.string().max(64).optional()
    }).strict(), a.z.object({
        type: a.z.literal("restartRace")
    }).strict(), a.z.object({
        type: a.z.literal("exitRace")
    }).strict(), a.z.object({
        type: a.z.literal("closeMarker")
    }).strict(), a.z.object({
        type: a.z.literal("startLesson")
    }).strict(), a.z.object({
        type: a.z.literal("cinematicDone")
    }).strict()])
      , y = a.z.number().int().min(0).max(0xffffffff);
    a.z.discriminatedUnion("t", [a.z.object({
        t: a.z.literal("hello"),
        v: a.z.literal(5),
        ticket: a.z.string().min(20).max(32768),
        build: a.z.string().min(1).max(64),
        tuning: m,
        drone: f,
        skins: a.z.record(a.z.string().max(32), a.z.string().max(64)).refine(e => Object.keys(e).length <= 16).optional(),
        revision: a.z.number().int().min(0).nullable().optional(),
        still: a.z.boolean().optional()
    }).strict(), a.z.object({
        t: a.z.literal("cmd"),
        tick: y,
        c: v
    }).strict(), u.placeSchema, u.echoSchema, a.z.object({
        t: a.z.literal("ping"),
        c: a.z.number().finite()
    }).strict(), a.z.object({
        t: a.z.literal("stats"),
        corrections: a.z.number().int().min(0).max(1e5),
        late: a.z.number().int().min(0).max(1e5),
        resyncs: a.z.number().int().min(0).max(1e5),
        jumps: a.z.number().int().min(0).max(1e5),
        rewound: a.z.number().int().min(0).max(1e7),
        rttMs: a.z.number().min(0).max(6e4),
        visible: a.z.number().int().min(0).max(1e5).optional(),
        ruleOnly: a.z.number().int().min(0).max(1e5).optional(),
        largestCm: a.z.number().int().min(0).max(1e5).optional(),
        recovered: a.z.number().int().min(0).max(1e4).optional(),
        slowResults: a.z.number().int().min(0).max(1e4).optional(),
        small: g.optional(),
        contact: g.optional(),
        reflyMs: a.z.number().int().min(0).max(1e7).optional(),
        refly: k(d.REFLY_BUCKETS).optional(),
        leadPeak: a.z.number().int().min(0).max(1e3).optional(),
        frames: k(d.FRAME_BUCKETS).optional(),
        browser: a.z.enum(d.BROWSERS).optional(),
        quality: a.z.enum(["low", "medium", "high", "ultra"]).optional(),
        pixelRatio: a.z.number().min(0).max(8).optional(),
        resizes: g.optional(),
        lens: a.z.number().min(0).max(1).optional(),
        post: a.z.boolean().optional(),
        repairs: g.optional(),
        recoveries: g.optional(),
        leapTicks: a.z.number().int().min(0).max(1e7).optional(),
        leapMs: a.z.number().int().min(0).max(1e7).optional(),
        snaps: g.optional(),
        snapCm: a.z.number().int().min(0).max(1e5).optional(),
        flyingMs: a.z.number().int().min(0).max(1e8).optional(),
        sampledMs: a.z.number().int().min(0).max(1e8).optional(),
        trimPeak: a.z.number().min(0).max(1).optional(),
        holds: g.optional(),
        heldTicks: a.z.number().int().min(0).max(1e7).optional(),
        detaches: g.optional(),
        detachedMs: a.z.number().int().min(0).max(1e8).optional(),
        keptOffline: g.optional(),
        peerFreezes: g.optional(),
        peerJumps: g.optional(),
        peerBackwards: g.optional(),
        joinMs: a.z.number().int().min(0).max(6e5).optional()
    }).strict(), a.z.object({
        t: a.z.literal("chat"),
        body: a.z.string().min(1).max(400),
        nonce: a.z.string().uuid()
    }).strict(), a.z.object({
        t: a.z.literal("chatRemove"),
        id: a.z.string().regex(/^\d{1,16}$/)
    }).strict(), a.z.object({
        t: a.z.literal("bye")
    }).strict()]);
    let b = new Set(["upgrade_required", "banned", "replaced", "removed"]);
    var S = e.i(248449)
      , w = e.i(174637);
    let T = new Set(v.options.map(e => e.shape.type.value))
      , I = u.FLIGHT_LOG_HISTORY
      , R = e => (0,
    u.isHold)(e) ? e.from + e.ticks : e.tick + 1;
    class M {
        samples = [];
        add(e, t) {
            for (this.samples.push({
                ms: e,
                at: t
            }); this.samples.length > 8 || t - this.samples[0].at > 3e4; )
                this.samples.shift();
            let i = e;
            for (let e of this.samples)
                i = Math.min(i, e.ms);
            return i
        }
    }
    e.s(["NetLink", 0, class {
        handlers;
        offline;
        rtt;
        rtts;
        socket;
        recent;
        queue;
        sent;
        movedAt;
        spare;
        lastTick;
        ready;
        closed;
        helloAt;
        errorCode;
        ban;
        heardAt;
        pinger;
        deadline;
        constructor(e, t, i) {
            this.handlers = i,
            this.offline = !1,
            this.rtt = 100,
            this.rtts = new M,
            this.recent = [],
            this.queue = [],
            this.sent = 0,
            this.movedAt = 0,
            this.spare = [],
            this.lastTick = -1,
            this.ready = !1,
            this.closed = !1,
            this.helloAt = 0,
            this.errorCode = null,
            this.heardAt = performance.now(),
            this.onVisible = () => {
                ("u" < typeof document || "visible" === document.visibilityState) && (this.heardAt = performance.now())
            }
            ;
            const s = new WebSocket(e.url);
            s.binaryType = "arraybuffer",
            this.socket = s,
            s.addEventListener("open", () => {
                this.closed || (this.helloAt = performance.now(),
                s.send(JSON.stringify({
                    t: "hello",
                    v: 5,
                    ticket: e.ticket,
                    build: w.SIM_BUILD,
                    tuning: t.tuning,
                    drone: t.drone,
                    ...t.skins ? {
                        skins: t.skins
                    } : {},
                    revision: t.revision ?? null,
                    ...t.still ? {
                        still: !0
                    } : {}
                })))
            }
            ),
            s.addEventListener("message", e => this.receive(e.data)),
            s.addEventListener("close", () => this.finish()),
            s.addEventListener("error", () => this.finish()),
            this.pinger = setInterval( () => {
                this.sendText({
                    t: "ping",
                    c: performance.now()
                }),
                this.checkSilence()
            }
            , 2e3),
            "u" > typeof document && document.addEventListener("visibilitychange", this.onVisible),
            this.deadline = setTimeout( () => {
                this.ready || (s.close(),
                this.finish())
            }
            , 25e3)
        }
        get connected() {
            return this.ready && !this.closed
        }
        entry(e) {
            if (!this.connected)
                return;
            e.tick !== this.lastTick + 1 && this.restart(),
            this.lastTick = e.tick;
            let t = this.recent.length >= u.ENTRY_REDUNDANCY ? this.recent.shift() : (0,
            u.blankEntry)();
            this.recent.push((0,
            u.copyEntry)(e, t)),
            this.queue.push((0,
            u.copyEntry)(e, this.spare.pop() ?? (0,
            u.blankEntry)())),
            this.flush()
        }
        log(e) {
            let t;
            if (!this.connected || !e.length)
                return;
            t = e[0],
            ((0,
            u.isHold)(t) ? t.from : t.tick) !== this.lastTick + 1 && this.restart(),
            this.recent.length = 0;
            let i = e.length;
            for (; i > 0 && e.length - i < u.ENTRY_REDUNDANCY && !(0,
            u.isHold)(e[i - 1]); )
                i--;
            for (let t of e.slice(i))
                this.recent.push((0,
                u.copyEntry)(t, (0,
                u.blankEntry)()));
            for (let t of e)
                this.queue.push((0,
                u.isHold)(t) ? {
                    from: t.from,
                    ticks: t.ticks
                } : (0,
                u.copyEntry)(t, this.spare.pop() ?? (0,
                u.blankEntry)()));
            this.lastTick = R(e[e.length - 1]) - 1,
            this.flush()
        }
        place(e) {
            this.connected && (this.restart(),
            this.lastTick = e.tick - 1,
            this.sendText(e))
        }
        state(e, t, i) {
            this.connected && !(this.socket.bufferedAmount > 262144) && this.socket.send((0,
            u.encodeState)(e, t, i))
        }
        command(e, t) {
            this.connected && T.has(t.type) && this.sendText({
                t: "cmd",
                tick: e,
                c: t
            })
        }
        echo(e, t) {
            this.connected && this.sendText({
                t: "echo",
                id: e,
                tick: t
            })
        }
        shot(e) {
            this.connected && this.socket.send((0,
            u.encodeShot)(e))
        }
        report(e) {
            this.sendText({
                t: "stats",
                ...e,
                rttMs: Math.round(this.rtt)
            })
        }
        say(e, t) {
            this.sendText({
                t: "chat",
                body: e,
                nonce: t
            })
        }
        unsay(e) {
            this.sendText({
                t: "chatRemove",
                id: e
            })
        }
        dispose() {
            this.closed || (this.sendText({
                t: "bye"
            }),
            this.closed = !0,
            clearInterval(this.pinger),
            clearTimeout(this.deadline),
            "u" > typeof document && document.removeEventListener("visibilitychange", this.onVisible),
            this.socket.close(1e3, "bye"))
        }
        drop() {
            this.closed || (this.closed = !0,
            this.ready = !1,
            this.restart(),
            clearInterval(this.pinger),
            clearTimeout(this.deadline),
            "u" > typeof document && document.removeEventListener("visibilitychange", this.onVisible),
            this.socket.close(4e3, "detached"))
        }
        onVisible;
        checkSilence() {
            !this.ready || this.closed || "u" > typeof document && "visible" !== document.visibilityState || performance.now() - this.heardAt < 6e3 || (this.socket.close(),
            this.finish())
        }
        sendText(e) {
            this.socket.readyState !== WebSocket.OPEN || this.closed || this.socket.send(JSON.stringify(e))
        }
        receive(e) {
            let t;
            if (!this.closed) {
                if (this.heardAt = performance.now(),
                e instanceof ArrayBuffer) {
                    let t = this.ready ? (0,
                    S.decodeSnapshot)(e) : null;
                    if (!t)
                        return;
                    this.acknowledge(t.acked),
                    this.handlers.snapshot(t);
                    return
                }
                try {
                    t = JSON.parse(String(e))
                } catch {
                    return
                }
                switch (t.t) {
                case "welcome":
                    this.ready = !0,
                    clearTimeout(this.deadline),
                    this.restart();
                    let i = void 0 === t.held ? void 0 : Math.max(1, performance.now() - this.helloAt - t.held);
                    void 0 !== i && (this.rtt = i),
                    this.handlers.welcome(t, i),
                    this.connected && this.sendText({
                        t: "ping",
                        c: performance.now()
                    });
                    return;
                case "pong":
                    {
                        let e = performance.now();
                        this.rtt = Math.max(1, e - t.c),
                        this.handlers.roundTrip?.(this.rtts.add(this.rtt, e));
                        return
                    }
                case "error":
                    this.errorCode = t.code,
                    "banned" === t.code && (this.ban = {
                        until: t.until ?? null,
                        reason: t.reason ?? ""
                    });
                    return;
                default:
                    this.handlers.message(t)
                }
            }
        }
        restart() {
            this.recent.length = 0,
            this.trim(this.queue.length),
            this.sent = 0
        }
        flush() {
            let e = this.queue;
            if (this.sent < e.length && this.socket.readyState === WebSocket.OPEN && this.socket.bufferedAmount <= 262144) {
                if (0 === this.sent && (this.movedAt = performance.now()),
                this.sent !== e.length - 1 || (0,
                u.isHold)(e[this.sent]))
                    for (let t of (0,
                    u.encodeLog)(this.sent ? e.slice(this.sent) : e))
                        this.socket.send(t);
                else
                    this.socket.send((0,
                    u.encodeEntries)(this.recent));
                this.sent = e.length
            }
            let t = e.length - I;
            t > 0 && (this.trim(t),
            this.sent = Math.max(0, this.sent - t))
        }
        acknowledge(e) {
            if (e > this.lastTick + 1)
                return;
            let t = this.queue
              , i = performance.now()
              , s = 0;
            for (; s < t.length && R(t[s]) <= e; )
                s++;
            s && (this.trim(s),
            this.sent = Math.max(0, this.sent - s),
            this.movedAt = i),
            this.sent > 0 && 0 === this.socket.bufferedAmount && i - this.movedAt > 1e3 + this.rtt && (this.sent = 0,
            this.flush())
        }
        trim(e) {
            for (let t of this.queue.splice(0, e))
                !(0,
                u.isHold)(t) && this.spare.length < I && this.spare.push(t)
        }
        finish() {
            let e = this.closed;
            this.closed = !0,
            this.ready = !1,
            clearInterval(this.pinger),
            clearTimeout(this.deadline),
            "u" > typeof document && document.removeEventListener("visibilitychange", this.onVisible),
            e || this.handlers.closed(this.errorCode, null !== this.errorCode && b.has(this.errorCode), this.ban)
        }
    }
    ], 232871);
    var A = e.i(632997)
      , C = e.i(940072)
      , E = e.i(41595)
      , x = e.i(532116)
      , z = e.i(233617);
    class L {
        arm;
        keyboard;
        current;
        enabled;
        interactHeld;
        interactPress;
        constructor(e=E.armIntent) {
            this.arm = e,
            this.keyboard = new z.KeyboardController,
            this.current = (0,
            A.emptyControlInput)(),
            this.enabled = !1,
            this.interactHeld = !1,
            this.interactPress = !1,
            this.current.armRequested = e.intent
        }
        attach() {
            return this.keyboard.attach()
        }
        setEnabled(e) {
            this.enabled = e,
            this.keyboard.setEnabled(e),
            e || (this.interactHeld = this.interactPress = !1)
        }
        reset() {
            this.keyboard.reset(),
            this.interactHeld = this.interactPress = !1,
            Object.assign(this.current, (0,
            A.emptyControlInput)(), {
                armRequested: this.arm.intent
            })
        }
        sample(e) {
            if (this.keyboard.setArmCode(e.keyboard.arm),
            this.keyboard.setInteractCode(e.keyboard.interact),
            !this.enabled)
                return;
            let t = !e.keyboardOnly && (0,
            A.isFullyBound)(e) ? (0,
            x.getRawGamepad)(e.deviceId) : null
              , i = !!t && "none" !== e.interact.kind && !0 === (0,
            E.readArmPressed)(t, e.interact, this.interactHeld);
            i && !this.interactHeld && (this.interactPress = !0),
            this.interactHeld = i
        }
        read(e, t) {
            var i, s, n;
            this.sample(t);
            let o = !t.keyboardOnly && (0,
            A.isFullyBound)(t) ? (0,
            x.getRawGamepad)(t.deviceId) : null
              , r = (0,
            A.readControlInput)(o, t, this.current);
            r || this.keyboard.step(e, this.current);
            let a = r && "none" !== t.arm.kind ? "follow" === t.armBehavior ? (0,
            A.readArmBinding)(o, t.arm) : (0,
            E.readArmPressed)(o, t.arm, this.arm.controlHeld) : null;
            this.current.armRequested = this.arm.step({
                behavior: t.armBehavior,
                control: a,
                keyboardPresses: this.keyboard.takeArmPresses(),
                enabled: this.enabled,
                bindingKey: (i = t.arm,
                s = t.armBehavior,
                n = r ? o.id : null,
                `${n ?? ""}|${s}|${i.kind}|${"button" === i.kind ? i.buttonIndex : "axis" === i.kind ? `${i.axisIndex}:${i.invert}` : ""}`)
            });
            let l = this.keyboard.takeInteract();
            return this.current.interact = this.enabled && (this.interactHeld || this.interactPress || l),
            this.interactPress = !1,
            this.current
        }
    }
    var P = e.i(739011)
      , q = e.i(980948)
      , D = e.i(247800)
      , _ = e.i(494049);
    let j = new Set(["raceFinished", "lessonComplete"])
      , O = u.FLIGHT_LOG_HISTORY
      , F = O - 1
      , N = D.INPUT_AHEAD - 24 - 6
      , H = 1e3 / D.TICK_RATE
      , B = 120 * D.TICK_RATE
      , K = 5 * D.TICK_RATE;
    class G {
        room;
        pilotId;
        input = new L;
        previous = {
            x: 0,
            y: 0,
            z: 0,
            qx: 0,
            qy: 0,
            qz: 0,
            qw: 1
        };
        current = {
            x: 0,
            y: 0,
            z: 0,
            qx: 0,
            qy: 0,
            qz: 0,
            qw: 1
        };
        previousTime = 0;
        currentTime = 0;
        alpha = 1;
        get steps() {
            return this.room.tick * D.STEPS_PER_TICK + this.slot + this.alpha
        }
        stats = {
            holds: 0,
            heldTicks: 0,
            repairs: 0
        };
        leadPeak = 0;
        trimPeak = 0;
        following = !1;
        sight = null;
        gunReady = null;
        boltTargets = null;
        host = null;
        hostSeen = 0;
        clock = new C.FixedStepClock;
        onEvent;
        onStep;
        onTick;
        onBolt;
        rapier;
        tickInput = (0,
        D.idleInput)();
        inputs = new Map;
        events = [];
        history = Array.from({
            length: O
        }, () => ({
            end: new Float64Array(t.ROOM_PILOT_STATE_LENGTH),
            logged: -1
        }));
        entry = (0,
        u.blankEntry)();
        contactTicks = 0;
        requested = [];
        gameplay = [];
        transitions = [];
        outCause = null;
        currentLink;
        joining = null;
        rate = 1;
        roundTrip = 6;
        leadAverage = 3;
        measured = !1;
        marginPeak = 0;
        marginAt = 0;
        marginKept = {
            peak: 0,
            at: 0
        };
        flying = !0;
        settled = -1;
        releasing = !1;
        unconfirmed = [];
        scratch = new Float64Array(t.ROOM_PILOT_STATE_LENGTH);
        slot = 0;
        tickSteps = 0;
        lastControl = (0,
        A.emptyControlInput)();
        snap = !0;
        disposed = !1;
        constructor(e) {
            this.room = new t.Room(e.rapier,e.room),
            this.pilotId = e.pilot.id,
            this.currentLink = e.link,
            this.onEvent = e.onEvent,
            this.onStep = e.onStep,
            this.onTick = e.onTick,
            this.onBolt = e.onBolt,
            this.rapier = e.rapier,
            this.inputs.set(this.pilotId, this.tickInput),
            this.room.addPilot(e.pilot),
            this.capture()
        }
        get link() {
            return this.currentLink
        }
        get offline() {
            return this.currentLink.offline
        }
        get clockRate() {
            return this.rate
        }
        setLink(e) {
            this.currentLink = e,
            this.joining = null,
            this.gameplay.length = 0,
            this.following = !1
        }
        command(e) {
            this.disposed || this.requested.push(e)
        }
        frame(e, t, i=!0) {
            if (this.disposed)
                return;
            this.input.sample(t),
            e > 1 && (this.marginPeak = this.marginKept.peak,
            this.marginAt = this.marginKept.at),
            this.flying = i;
            let s = !this.offline
              , n = s || null !== this.joining
              , o = n ? this.clock.advance(e * (s ? this.rate : 1), 60) : this.clock.advance(e);
            o.interrupted && (this.snap = !0,
            n && this.stall(o.dropped, t));
            for (let e = 0; e < o.steps; e++)
                this.slotStep(t);
            this.alpha = o.alpha,
            this.marginKept.peak = this.marginPeak,
            this.marginKept.at = this.marginAt
        }
        resetClock() {
            this.clock.reset(),
            this.snap = !0
        }
        join(e, t, i={}) {
            void 0 !== i.rttMs && this.observeRoundTrip(i.rttMs),
            this.joining = {
                placement: {
                    ...e
                },
                link: t
            },
            this.gameplay.length = 0,
            this.following = !1
        }
        gameplayEvent(e) {
            !this.disposed && (!this.offline || this.joining || this.host) && this.gameplay.push(e)
        }
        observeRoundTrip(e) {
            Number.isFinite(e) && e >= 0 && (this.roundTrip = Math.min(N, Math.ceil(e / H)))
        }
        leadReport(e) {
            if (this.joining || e.newest < this.settled)
                return;
            if ((e.ahead ?? -1) >= 0)
                return void this.trim(.99);
            let t = e.lead;
            this.measured || (this.measured = !0,
            this.leadAverage = t);
            let i = this.leadAverage - t;
            i > this.margin && this.flying && (this.marginPeak = Math.min(21, i),
            this.marginAt = this.room.tick);
            let s = this.targetLead;
            this.leadPeak = Math.max(this.leadPeak, s),
            this.leadAverage += (t - this.leadAverage) * .2;
            let n = s - this.leadAverage;
            this.trim(1 + Math.max(-.01, Math.min(.01, .02 * n)))
        }
        trim(e) {
            this.rate = e,
            this.trimPeak = Math.max(this.trimPeak, Math.abs(e - 1))
        }
        takeTrimPeak() {
            let e = this.trimPeak;
            return this.trimPeak = 0,
            e
        }
        follow(e) {
            this.following = e
        }
        unacked(e) {
            return this.joining || this.settled < 0 ? 0 : e.tick - Math.max(e.acked, this.settled)
        }
        confirm(e) {
            let t = this.unconfirmed.findIndex(t => t.type === e.type && t.tick === e.tick);
            t >= 0 && this.unconfirmed.splice(t, 1)
        }
        takeUnconfirmed() {
            return this.unconfirmed.splice(0)
        }
        takeLeadPeak() {
            let e = Math.max(this.leadPeak, this.targetLead);
            return this.leadPeak = 0,
            e
        }
        get targetLead() {
            return Math.min(24, 3 + Math.ceil(this.margin))
        }
        get margin() {
            let e = Math.max(0, this.room.tick - this.marginAt - B);
            return Math.max(0, this.marginPeak - e / K)
        }
        dispose() {
            this.disposed || (this.disposed = !0,
            this.currentLink.dispose(),
            this.joining?.link.dispose(),
            this.room.removePilot(this.pilotId),
            this.flush(),
            this.room.free())
        }
        get control() {
            return this.lastControl
        }
        get commandPending() {
            return this.requested.length > 0
        }
        loggedState(e) {
            let t = this.history[e & F];
            return e >= 0 && t.logged === e ? t.end : null
        }
        slotStep(e) {
            let t = this.room;
            if (0 === this.slot) {
                for (let i of (this.releasing && (this.releasing = !1,
                t.release(this.pilotId)),
                this.joining && this.place(this.joining.placement, this.joining.link),
                this.lastControl = this.input.read(D.TICK_SECONDS, e),
                (0,
                D.quantizeInput)(this.lastControl, this.tickInput),
                this.gunReady && !this.gunReady() && (this.tickInput.buttons &= ~D.BUTTON_INTERACT),
                this.gameplay)) {
                    if ("combat" === i.kind) {
                        this.transitions.push(i);
                        continue
                    }
                    (0,
                    u.applyGameplayEvent)(t, this.pilotId, i),
                    this.currentLink.echo(i.id, t.tick)
                }
                for (let e of (this.gameplay.length = 0,
                this.transitions.length && this.applyTransitions(),
                this.requested))
                    this.currentLink.command(t.tick, e),
                    t.command(this.pilotId, e);
                this.requested.length = 0,
                this.host?.tickStart(t, t.tick, this.inputs),
                this.tickSteps = t.beginTick(this.inputs)
            }
            if (this.slot < this.tickSteps ? (t.advance(),
            this.capture(),
            this.onStep?.(this)) : this.still(),
            ++this.slot === D.STEPS_PER_TICK) {
                let e = t.touched(this.pilotId);
                t.endTick(),
                this.log(t.tick - 1, e),
                this.slot = 0,
                this.flush(),
                this.onTick?.(this)
            }
        }
        applyTransitions() {
            let e = this.room
              , t = this.transitions;
            for (let i = 0; i < t.length; ) {
                let s = t[i]
                  , n = (0,
                _.transitionVerdict)(e.combatStanding(this.pilotId), s.payload, e.tick);
                if ("wait" === n) {
                    i++;
                    continue
                }
                if (t.splice(i, 1),
                "drop" === n)
                    continue;
                (0,
                u.applyGameplayEvent)(e, this.pilotId, s),
                this.currentLink.echo(s.id, e.tick);
                let o = s.payload.body;
                "out" === o.type ? this.outCause = o.cause ?? "connection" : "reclaim" === o.type && (this.outCause = null),
                i = 0
            }
        }
        get waitingTransitions() {
            return this.transitions.length
        }
        get reclaimAt() {
            let e = null;
            for (let {payload: t} of this.transitions)
                "reclaim" === t.body.type && void 0 !== t.notBefore && (e = Math.min(e ?? 1 / 0, t.notBefore));
            return e
        }
        place(e, i) {
            let s = this.room;
            this.joining = null;
            let n = e.tick + this.roundTrip + this.targetLead;
            for (let i of (s.tick = n,
            (0,
            t.sharedRoom)(s.kind) && s.setWorldSteps(e.worldSteps + (n - e.tick) * D.STEPS_PER_TICK),
            e.crowd && s.setCrowdRoutes(e.crowd),
            void 0 !== e.xp && s.setPilotXp(this.pilotId, e.xp),
            void 0 !== e.gifts && s.setPilotGifts(this.pilotId, e.gifts.filter(c.isNormalDrone)),
            s.setPilotCaptureTail(this.pilotId, !0 === e.captureTail),
            e.combat ? s.setCombat(this.pilotId, e.combat.setup, e.combat.state, e.combat.aimTiltDeg) : s.combatStanding(this.pilotId) && s.setCombat(this.pilotId, null),
            this.outCause = e.combat?.out ?? null,
            e.combat?.pad && s.seatOnPad(this.pilotId, e.combat.pad),
            this.history))
                i.logged = -1;
            this.unconfirmed.length = 0,
            this.currentLink = i,
            i.place((0,
            u.placeMessage)(n, s.worldSteps, s.savePilot(this.pilotId, this.scratch), s.pilotContext(this.pilotId))),
            this.settled = n,
            this.measured = !1,
            this.rate = 1
        }
        stall(e, t) {
            let i = Math.floor(e / C.FLIGHT_TIMESTEP + 1e-9);
            for (; i > 0 && 0 !== this.slot; )
                this.slotStep(t),
                i--;
            let s = Math.floor(i / D.STEPS_PER_TICK);
            s > 0 && this.joining ? (this.joining.placement.tick += s,
            this.joining.placement.worldSteps += s * D.STEPS_PER_TICK,
            0 === this.slot && this.place(this.joining.placement, this.joining.link)) : s > 0 && this.hold(s);
            for (let e = s * D.STEPS_PER_TICK; e < i; e++)
                this.slotStep(t)
        }
        hold(e) {
            let t = this.room
              , i = t.tick;
            t.hold(this.pilotId);
            let s = 0;
            for (let i = 0; i < e; i++)
                this.host?.tickStart(t, t.tick, this.inputs),
                s += t.beginTick(this.inputs),
                t.endTick(),
                this.host && (t.takeEvents(this.events),
                this.host.tickEnd(t, t.tick - 1, this.events.slice(this.hostSeen)),
                this.hostSeen = this.events.length);
            t.setWorldSteps(t.worldSteps + s),
            this.releasing = !0,
            this.stats.holds++,
            this.stats.heldTicks += e,
            this.currentLink.log([{
                from: i,
                ticks: e
            }]),
            this.snap = !0,
            this.capture()
        }
        log(e, t) {
            let i = this.room
              , s = this.history[e & F];
            i.savePilot(this.pilotId, s.end),
            s.logged = e;
            let n = this.entry;
            for (let o of (n.tick = e,
            (0,
            D.copyInput)(this.tickInput, n.input),
            (0,
            u.describeTick)(n, s.end, t, null !== i.pilotContext(this.pilotId).heldSince),
            i.takeEvents(this.events),
            this.events)) {
                if ("shotFired" !== o.type || o.pilot !== this.pilotId)
                    continue;
                let t = this.sight?.(e);
                t && this.currentLink.shot(t),
                this.predictBolt(e, o.shotSeq, t ?? null)
            }
            this.currentLink.entry(n),
            n.flags & u.CONTACT_FLAGS ? ++this.contactTicks % u.CONTACT_FRAME_TICKS == 0 && this.currentLink.state("contact", e, s.end) : this.contactTicks > 0 && (this.contactTicks = 0,
            this.currentLink.state("contact", e, s.end)),
            this.following && !this.joining && e % u.FOLLOW_FRAME_TICKS == 0 && this.currentLink.state("follow", e, s.end)
        }
        predictBolt(e, i, s) {
            let n = this.onBolt ? this.loggedState(e - 1) : null;
            if (!n)
                return;
            let o = t.PILOT_SNAPSHOT.body + q.BODY_SLOT.x
              , r = this.room
              , a = r.view(this.pilotId)
              , h = (0,
            l.predictBolt)({
                tick: e,
                position: n.subarray(o, o + 3),
                rotation: n.subarray(o + 3, o + 7),
                velocity: n.subarray(o + 7, o + 10),
                muzzle: (0,
                l.muzzleOf)(a?.normalDrone ?? c.DEFAULT_DRONE, a?.aimTiltDeg),
                gun: P.STANDARD_GUN
            }, s && this.boltTargets ? this.boltTargets(s) : [], (e, t, i) => (0,
            l.wallDistance)(this.rapier, r.physics, e, t, i));
            this.onBolt({
                type: "boltPredicted",
                pilot: this.pilotId,
                tick: e,
                shotSeq: i,
                prediction: h
            })
        }
        flush() {
            if (this.room.takeEvents(this.events),
            !this.disposed && this.host && this.host.tickEnd(this.room, this.room.tick - 1, this.hostSeen ? this.events.slice(this.hostSeen) : this.events),
            this.hostSeen = 0,
            !this.events.length)
                return;
            let e = this.currentLink.offline;
            for (let t of this.events.splice(0))
                t.pilot === this.pilotId && ("respawned" === t.type && (this.snap = !0),
                !e && j.has(t.type) && this.unconfirmed.push(t) > 4 && this.unconfirmed.shift(),
                this.onEvent(t, e));
            this.snap && this.capture()
        }
        capture() {
            let e = this.room.view(this.pilotId)?.body;
            if (!e)
                return;
            let t = e.translation()
              , i = e.rotation();
            this.snap ? (this.snap = !1,
            U(this.previous, t, i),
            this.previousTime = this.room.time) : (V(this.current, this.previous),
            this.previousTime = this.currentTime),
            U(this.current, t, i),
            this.currentTime = this.room.time
        }
        still() {
            V(this.current, this.previous),
            this.previousTime = this.currentTime
        }
    }
    function U(e, t, i) {
        e.x = t.x,
        e.y = t.y,
        e.z = t.z,
        e.qx = i.x,
        e.qy = i.y,
        e.qz = i.z,
        e.qw = i.w
    }
    function V(e, t) {
        t.x = e.x,
        t.y = e.y,
        t.z = e.z,
        t.qx = e.qx,
        t.qy = e.qy,
        t.qz = e.qz,
        t.qw = e.qw
    }
    e.s(["LocalLink", 0, class {
        offline = !0;
        entry() {}
        log() {}
        state() {}
        command() {}
        place() {}
        echo() {}
        shot() {}
        dispose() {}
    }
    , "RoomSession", 0, G], 410290)
}
, 426310, e => {
    "use strict";
    e.s(["hiddenTabFliesNothing", 0, function(e, t) {
        return e?.go != null && t >= e.go
    }
    , "hiddenTabKeepsRace", 0, function(e) {
        return !!e.raceRun?.match
    }
    ])
}
, 786545, e => {
    "use strict";
    var t = e.i(174637);
    let i = null;
    function s(e, t={}) {
        return JSON.stringify([e, t.rejoin ?? null, !!t.takeover, t.avoid ?? null])
    }
    e.s(["admissionKey", 0, s, "prefetchAdmission", 0, function(e, n, o={}) {
        let r = (0,
        t.sessionServiceUrl)();
        if (!r)
            return () => {}
            ;
        let a = s(e, o);
        if (i && i.key === a && Date.now() - i.at < 2e4)
            return i.cancel;
        i?.cancel();
        let l = new AbortController
          , c = (async () => {
            let i = await n();
            return l.signal.aborted || !i ? null : (0,
            t.requestRoom)(r, i, e, {
                ...o,
                signal: l.signal
            })
        }
        )();
        c.catch( () => {}
        );
        let h = {
            key: a,
            at: Date.now(),
            promise: c,
            cancel: () => {
                l.abort(),
                i === h && (i = null)
            }
        };
        return i = h,
        h.cancel
    }
    , "takePrefetchedAdmission", 0, function(e) {
        if (!i || i.key !== e || Date.now() - i.at >= 2e4)
            return null;
        let {promise: t} = i;
        return i = null,
        t
    }
    ])
}
, 291355, 152756, e => {
    "use strict";
    var t = e.i(247800)
      , i = e.i(26115)
      , s = e.i(174637)
      , n = e.i(232871)
      , o = e.i(79983)
      , r = e.i(635525)
      , a = e.i(514563)
      , l = e.i(818227)
      , c = e.i(962849)
      , h = e.i(410290)
      , d = e.i(288461)
      , u = e.i(786545);
    let m = [1e3, 2e3, 5e3, 1e4, 3e4, 6e4]
      , p = [1e3, 2e3, 5e3]
      , f = new Set(["unauthorized", "forbidden", "banned", "build_unavailable", "invalid_message", "squad_unavailable"])
      , g = new Set(["moved", "replaced", "banned", "upgrade_required", "map_changed", "place_refused", "removed"])
      , k = 0;
    function v() {
        return "u" > typeof document && "hidden" === document.visibilityState
    }
    e.s(["RoomConnection", 0, class {
        options;
        remote;
        link;
        room;
        attempt;
        timer;
        visible;
        droppedAt;
        anyRoom;
        avoid;
        practising;
        disposed;
        controller;
        reporter;
        reported;
        detaches;
        detachedMs;
        looks;
        constructor(e) {
            this.options = e,
            this.remote = null,
            this.link = null,
            this.room = null,
            this.attempt = 0,
            this.timer = null,
            this.visible = null,
            this.droppedAt = 0,
            this.anyRoom = !1,
            this.avoid = null,
            this.practising = !1,
            this.disposed = !1,
            this.controller = null,
            this.reporter = null,
            this.reported = {
                repairs: 0,
                holds: 0,
                heldTicks: 0
            },
            this.detaches = 0,
            this.detachedMs = 0,
            this.looks = new r.PeerLooks,
            this.onPageHide = () => {
                if (this.disposed)
                    return;
                this.clearTimer(),
                this.controller?.abort();
                let e = this.link;
                if (!e)
                    return;
                let t = this.options.request;
                "match" === t.kind || t.squadId || (this.link = null,
                this.left = !0,
                e.dispose(),
                this.remote?.disconnected(),
                this.remote = null,
                this.options.session.setLink(new h.LocalLink))
            }
            ,
            this.onPageShow = e => {
                this.disposed || !this.left || e.persisted && (this.left = !1,
                this.options.onStatus({
                    state: "connecting"
                }),
                this.admit(null))
            }
            ,
            this.left = !1
        }
        start() {
            (0,
            s.sessionServiceUrl)() ? (this.options.onStatus({
                state: "connecting"
            }),
            this.reporter ??= setInterval( () => this.report(), 6e4),
            window.addEventListener("pagehide", this.onPageHide),
            window.addEventListener("pageshow", this.onPageShow),
            this.admit(this.options.returnTo ?? null)) : this.options.onStatus({
                state: "offline",
                code: "unsupported",
                message: (0,
                s.admissionMessage)("offline")
            })
        }
        dispose() {
            this.disposed = !0,
            this.clearTimer(),
            this.reporter && clearInterval(this.reporter),
            window.removeEventListener("pagehide", this.onPageHide),
            window.removeEventListener("pageshow", this.onPageShow),
            this.controller?.abort(),
            this.link?.dispose(),
            this.link = null
        }
        onPageHide;
        onPageShow;
        left;
        async admit(e) {
            let t, i, n, o = (0,
            s.sessionServiceUrl)();
            if (!o || this.disposed)
                return;
            try {
                t = await Promise.race([this.options.token(), new Promise( (e, t) => {
                    i = setTimeout( () => t(Error("token timeout")), 1e4)
                }
                )])
            } catch {
                if (this.disposed)
                    return;
                this.unreachable();
                return
            } finally {
                clearTimeout(i)
            }
            if (this.disposed)
                return;
            if (!t)
                return void this.offline("offline");
            this.controller = new AbortController;
            let r = this.avoid;
            try {
                let i = (0,
                u.takePrefetchedAdmission)((0,
                u.admissionKey)(this.options.request, {
                    takeover: !0,
                    rejoin: e,
                    avoid: r
                }));
                n = (i && await i) ?? await (0,
                s.requestRoom)(o, t, this.options.request, {
                    takeover: !0,
                    rejoin: e,
                    avoid: r,
                    signal: this.controller.signal
                })
            } catch (t) {
                if (this.disposed)
                    return;
                let e = t instanceof s.AdmissionError ? t.code : "unavailable";
                if ("invalid_message" === e && r)
                    return this.avoid = null,
                    this.admit(null);
                if ("session_active" === e)
                    return void this.options.onStatus({
                        state: "blocked",
                        message: (0,
                        s.admissionMessage)(e)
                    });
                if ("room_closed" === e && "match" === this.options.request.kind)
                    return this.matchClosed("closed");
                if (!f.has(e) && "map_changed" !== e)
                    return this.unreachable(e);
                this.offline(e, "banned" === e && t instanceof s.AdmissionError && t.ban ? (0,
                s.restrictionMessage)("Banned", t.ban) : void 0),
                "map_changed" === e && this.options.onMapChanged?.();
                return
            }
            if (this.disposed)
                return;
            this.options.onAdmitted?.();
            let a = this.options.onRoomKind?.(n.room.kind) ?? "join";
            if ("rebuild" !== a) {
                if ("stay" === a)
                    return this.stayOffline();
                this.connect(n)
            }
        }
        connect(e) {
            this.link?.dispose();
            let r = this.options.session
              , a = "private" !== e.room.kind
              , l = !1
              , d = null
              , u = new n.NetLink(e,this.options.hello(),{
                welcome: (i, s) => {
                    if (this.link !== u)
                        return;
                    l = !0,
                    this.options.onContent?.({
                        courses: i.courses
                    }),
                    this.room = e.room,
                    this.attempt = 0,
                    this.endDetach(),
                    this.anyRoom = !1,
                    this.avoid = null;
                    let n = this.practising;
                    this.practising = !1,
                    this.remote = a ? new o.RemotePilots(i.pilot,"lobby" === e.room.kind ? e.room.id : null,u,this.looks) : null,
                    this.remote?.setRoster(i.roster);
                    let h = this.remote;
                    h && i.match?.mode === "teamDeathmatch" && h.enemiesOf(i.match.team, i.match.seat),
                    r.sight = h && (e => h.sight(e)),
                    r.boltTargets = h && (e => h.boltTargets(e, !0)),
                    r.gunReady = h && i.match ? () => void 0 !== h.feed.snap : null,
                    this.options.onMatchRoom?.(i.match ?? null, i.pilot, i.worldSteps - t.STEPS_PER_TICK * i.tick, i.roster),
                    r.join({
                        tick: i.tick,
                        worldSteps: i.worldSteps,
                        crowd: i.crowd,
                        xp: i.xp,
                        gifts: i.gifts,
                        captureTail: i.captureTail,
                        combat: i.combat
                    }, u, void 0 === s ? {} : {
                        rttMs: s
                    }),
                    c.sessionFacts.online(e.region),
                    void 0 !== s && c.sessionFacts.roundTrip(s),
                    this.options.onStatus({
                        state: "online",
                        room: e.room,
                        region: e.region,
                        ...n ? {
                            back: n
                        } : {}
                    })
                }
                ,
                roundTrip: e => {
                    this.link === u && (r.observeRoundTrip(e),
                    c.sessionFacts.roundTrip(e))
                }
                ,
                snapshot: e => {
                    if (this.link === u) {
                        if (r.unacked(e) > i.VERIFY_BOUND)
                            return this.detach(u, "unacked");
                        r.leadReport(e),
                        this.remote?.snapshot(e)
                    }
                }
                ,
                message: e => {
                    if (this.link === u)
                        switch (e.t) {
                        case "ev":
                            for (let t of e.e)
                                r.confirm(t),
                                this.options.onServerEvent(t);
                            return;
                        case "result":
                            this.options.onResult(e);
                            return;
                        case "verdict":
                            this.options.onVerdict?.(e);
                            return;
                        case "roster":
                            this.remote?.setRoster(e.pilots),
                            this.options.onRoster?.(e.pilots);
                            return;
                        case "standings":
                            this.options.onStandings?.({
                                go: e.go,
                                closes: e.closes,
                                final: e.final,
                                seats: e.seats
                            });
                            return;
                        case "chat":
                            this.remote?.setChat(e.messages, e.error, e.blocked);
                            return;
                        case "standing":
                            this.options.onStanding?.({
                                mute: e.mute,
                                mod: e.mod
                            });
                            return;
                        case "match":
                            this.options.onMatch?.(e);
                            return;
                        case "combat":
                            this.options.onCombat?.(e);
                            return;
                        case "ending":
                            d = e.reason;
                            return;
                        case "probe":
                            {
                                let t = r.loggedState(e.tick);
                                t && u.state("probe", e.tick, t);
                                return
                            }
                        case "follow":
                            r.follow(e.on);
                            return;
                        case "event":
                            r.gameplayEvent(e);
                            return;
                        case "detached":
                            this.detach(u, e.reason, e.shard);
                            return
                        }
                }
                ,
                closed: (e, t, i) => {
                    if (this.link !== u || this.disposed)
                        return;
                    let n = "match" === this.options.request.kind && ("room_closed" === e || "moved" === e || "removed" === e || null !== d && !g.has(e ?? ""));
                    if (l && !n && !g.has(e ?? ""))
                        return this.detach(u, "closed");
                    if (this.link = null,
                    this.remote?.disconnected(),
                    n)
                        return this.matchClosed("moved" === e || "removed" === e ? e : d ?? "closed");
                    if ("moved" !== e) {
                        if ("replaced" === e) {
                            this.remote = null,
                            this.options.onStatus({
                                state: "blocked",
                                message: (0,
                                s.admissionMessage)("session_active")
                            }),
                            r.setLink(new h.LocalLink);
                            return
                        }
                        if ("banned" === e)
                            return this.offline("banned", i ? (0,
                            s.restrictionMessage)("Banned", i) : void 0);
                        if ("upgrade_required" === e)
                            return this.offline("build_unavailable");
                        if ("map_changed" === e) {
                            this.offline("map_changed"),
                            this.options.onMapChanged?.();
                            return
                        }
                        if ("place_refused" === e) {
                            this.offline("place_refused", void 0, !0),
                            this.retry( () => this.admit(null));
                            return
                        }
                        this.unreachable()
                    }
                }
            });
            this.link = u
        }
        detach(e, t, i) {
            if (this.link !== e || this.disposed)
                return;
            this.link = null,
            e.drop(),
            this.remote?.disconnected(),
            !this.droppedAt && (this.droppedAt = Date.now(),
            this.detaches++),
            "busy" === t && (this.anyRoom = !0,
            this.avoid = i ?? null);
            let n = this.options.session;
            for (let e of (n.setLink(new h.LocalLink),
            n.takeUnconfirmed()))
                this.options.onServerEvent(e);
            this.options.onStatus({
                state: "reconnecting",
                message: (0,
                s.admissionMessage)("disconnected")
            }),
            this.retry( () => this.admit(this.rejoinTarget()))
        }
        stayOffline() {
            k++,
            this.endDetach(),
            this.remote = null,
            this.options.session.setLink(new h.LocalLink),
            this.options.onStatus({
                state: "reconnecting",
                message: (0,
                s.admissionMessage)("disconnected")
            })
        }
        unreachable(e="unavailable") {
            this.droppedAt || this.offline(e, void 0, !0),
            this.retry( () => this.admit(this.rejoinTarget()))
        }
        matchClosed(e) {
            "closed" === e && this.droppedAt && (e = "offline"),
            this.clearTimer(),
            this.endDetach(),
            this.offline("room_closed", (0,
            s.matchEndedMessage)(e))
        }
        rejoinTarget() {
            return this.withinGrace() && !this.anyRoom ? this.room?.id ?? null : null
        }
        report() {
            if (!this.link?.connected)
                return;
            let e = this.options.session
              , t = e.stats
              , i = (0,
            a.pendingResults)()?.takeCounts()
              , s = l.flightFrames.take()
              , n = this.looks.take()
              , o = (0,
            d.takeJoinMs)();
            this.link.report({
                ...null !== o ? {
                    joinMs: Math.round(o)
                } : {},
                corrections: 0,
                late: 0,
                resyncs: 0,
                jumps: 0,
                rewound: 0,
                ...i ? {
                    recovered: i.recovered,
                    slowResults: i.slow
                } : {},
                leadPeak: e.takeLeadPeak(),
                trimPeak: Math.round(1e4 * e.takeTrimPeak()) / 1e4,
                repairs: t.repairs - this.reported.repairs,
                holds: t.holds - this.reported.holds,
                heldTicks: t.heldTicks - this.reported.heldTicks,
                detaches: this.detaches,
                detachedMs: Math.round(this.detachedMs),
                keptOffline: k,
                peerFreezes: n.freezes,
                peerJumps: n.jumps,
                peerBackwards: n.backwards,
                flyingMs: s.flyingMs,
                sampledMs: s.sampledMs,
                frames: s.frames,
                browser: s.browser,
                ...s.quality ? {
                    quality: s.quality
                } : {},
                pixelRatio: s.pixelRatio,
                resizes: s.resizes,
                lens: s.lens,
                post: s.post
            }),
            this.reported = {
                repairs: t.repairs,
                holds: t.holds,
                heldTicks: t.heldTicks
            },
            this.detaches = this.detachedMs = k = 0
        }
        endDetach() {
            this.droppedAt && (this.detachedMs += Date.now() - this.droppedAt),
            this.droppedAt = 0
        }
        withinGrace() {
            return this.droppedAt > 0 && Date.now() - this.droppedAt < i.DETACH_GRACE_MS
        }
        offline(e, t=(0,
        s.admissionMessage)(e), i=!1) {
            this.practising = !0,
            this.endDetach(),
            this.remote = null,
            this.options.session.setLink(new h.LocalLink),
            this.options.onStatus({
                state: "offline",
                code: e,
                message: t,
                ...i ? {
                    retrying: i
                } : {}
            })
        }
        retry(e, t) {
            if (this.disposed)
                return;
            this.clearTimer();
            let i = t ?? (this.droppedAt ? p : m)
              , s = i[Math.min(this.attempt++, i.length - 1)];
            this.timer = setTimeout( () => {
                if (this.timer = null,
                !this.disposed) {
                    if (this.droppedAt && v())
                        return this.whenVisible( () => this.retry(e, [0]));
                    this.droppedAt && !this.withinGrace() ? this.remote = null : !this.droppedAt && this.options.session.offline && this.options.onStatus({
                        state: "connecting"
                    }),
                    e()
                }
            }
            , s)
        }
        clearTimer() {
            this.timer && clearTimeout(this.timer),
            this.timer = null,
            this.visible?.(),
            this.visible = null
        }
        whenVisible(e) {
            if (this.visible?.(),
            !v())
                return e();
            let t = () => {
                v() || (this.visible?.(),
                this.visible = null,
                e())
            }
            ;
            document.addEventListener("visibilitychange", t),
            this.visible = () => document.removeEventListener("visibilitychange", t)
        }
    }
    ], 291355);
    var y = e.i(809102)
      , b = e.i(894969)
      , S = e.i(983040);
    let w = 1;
    e.s(["impactClip", 0, function(e, t) {
        let {hit: i} = t
          , s = (0,
        S.getImpactApproach)({
            t: 0,
            position: i.position,
            rotation: t.rotation,
            crowdTime: i.crowdTime
        })
          , n = e.room.physics
          , o = [];
        return n.forEachRigidBody(e => {
            let t = e.userData;
            t?.driftIndex !== void 0 && o.push({
                handle: e.handle,
                index: t.driftIndex,
                trackMatrix: t.trackMatrix,
                circuit: t.circuit
            })
        }
        ),
        {
            id: w++,
            actorId: i.actorId,
            frames: s.frames,
            impactTime: s.duration,
            boosted: (0,
            y.boosterRemaining)(b.useInventory.getState().boosters.find(e => "dummy-launch" === e.id), (0,
            b.inventoryNow)()) > 0,
            crowdTime: i.crowdTime,
            routes: t.routes,
            point: i.point,
            normal: i.normal,
            velocity: t.velocity,
            angularVelocity: t.angularVelocity,
            drone: {
                position: i.position,
                rotation: t.rotation
            },
            part: i.part,
            spawn: {
                ...t.spawn,
                position: [...t.spawn.position]
            },
            snapshot: e.room.takeSnapshot(),
            droneHandle: e.room.view(e.pilotId).body.handle,
            cars: o,
            ragdoll: [],
            document: e.room.world.editorDocument,
            rides: e.room.moving ?? void 0
        }
    }
    ], 152756)
}
, 780348, e => {
    "use strict";
    e.s(["initialSoloLaunch", 0, function(e, t, i=!1) {
        let s = !0;
        return {
            get pending() {
                return s && t()
            },
            status(n) {
                s && ("online" === n.state || i && "offline" === n.state) && (s = !1,
                t() && e())
            },
            dispose() {
                s = !1
            }
        }
    }
    ])
}
, 31288, e => {
    "use strict";
    var t = e.i(882902)
      , i = e.i(480858);
    e.s(["roomRequestFor", 0, function(e) {
        let {online: s, capture: n, draft: o, legacyPhysics: r, practice: a, offlineChoice: l, mapId: c, lessonId: h, revision: d, activeMatch: u, soloRace: m, personal: p, squadId: f, squadLaunch: g} = e;
        if (n || !s || o || r || a || l)
            return null;
        if (h)
            return {
                kind: "private",
                map: c,
                lesson: h,
                revision: d
            };
        let k = (0,
        t.matchRoomRequest)(u, c, null, d);
        if (k)
            return k;
        let v = (0,
        i.soloRoomRequest)(m, c, d);
        return v || {
            kind: p && !f ? "private" : "lobby",
            map: c,
            lesson: null,
            revision: d,
            ...f ? {
                squadId: f,
                launchVersion: g
            } : {}
        }
    }
    ])
}
, 829858, e => {
    "use strict";
    e.s(["flightSquadAdmission", 0, function({launch: e, squad: t, accountId: i, mapId: s, lessonId: n}) {
        return e && t && i && !n && e.mapId === s && e.squadId === t.id && e.launchVersion === t.launchVersion && e.mapId === t.mapId && t.members.some(e => e.id === i) ? {
            ...e
        } : null
    }
    ])
}
, 480858, e => {
    "use strict";
    let t = null;
    e.s(["lobbyToReturnTo", 0, function(e) {
        return e && "lobby" === e.kind && !e.squadId && t?.left && t.map === e.map ? t.room : null
    }
    , "noteRoom", 0, function(e, i) {
        "lobby" !== i.kind || i.squadId ? e.race && t && (t.left = !0) : t = {
            map: i.map,
            room: i.id,
            left: !1
        }
    }
    , "soloRaceOf", 0, function(e) {
        return !e.activeTimeAttackId || e.raceRun?.match || e.activeLessonId ? null : e.activeTimeAttackId
    }
    , "soloRoomRequest", 0, function(e, t, i) {
        return e ? {
            kind: "private",
            map: t,
            lesson: null,
            revision: i,
            still: !0,
            race: e
        } : null
    }
    ])
}
]);
