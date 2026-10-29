(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 584042, t => {
    "use strict";
    var e = t.i(106801)
      , i = t.i(579832)
      , a = t.i(488691);
    let r = new class {
        crashAt = -1 / 0;
        contact(t, e) {
            t && (this.crashAt = e)
        }
        cue(t) {
            return t - this.crashAt <= .3 ? "combo.break" : "combo.finish"
        }
    }
    ;
    function s() {
        return "u" < typeof performance ? 0 : performance.now() / 1e3
    }
    function o(t, e) {
        if (t)
            for (let i of e)
                t.play(i.name, {
                    params: i.params,
                    delay: i.delay
                })
    }
    function l(t, e) {
        let i = t ? Math.hypot(t[0], t[1], t[2]) : 0;
        if (!t || !(i > 1e-6))
            return null;
        let r = a.ZAP_DISTANCE / i;
        return {
            x: e.x + t[0] * r,
            y: e.y + t[1] * r,
            z: e.z + t[2] * r
        }
    }
    let n = new Set(["impactCinematic"])
      , h = new Set(["menu", "paused", "raceLobby", "raceResults", "lessonSelect", "lessonStep", "lessonDone", "courseDone", "replaySelect"])
      , c = new Set(["click", "confirm", "back", "error"]);
    t.s(["RACE_BUFFERS", 0, ["race.cheer"], "RECORD_DELAY", 0, .6, "UI_CUES", 0, {
        hover: "ui.hover",
        click: "ui.click",
        confirm: "ui.confirm",
        back: "ui.back",
        error: "ui.error"
    }, "WarpWatch", 0, class {
        last = 1;
        update(t) {
            if (!Number.isFinite(t))
                return !1;
            let e = this.last >= 1 && t < 1;
            return this.last = t,
            e
        }
    }
    , "chainEnding", 0, r, "combatNoticeCues", 0, function(t, e) {
        return null === e || t.victim === e ? [] : t.ko && t.credit === e ? [{
            name: "combat.ko"
        }] : "hit" === t.kind && t.attacker === e ? [{
            name: "combat.hit"
        }] : []
    }
    , "controlFor", 0, function(t) {
        return !t || t.closest("[data-sonner-toaster],[data-ui-sound-scope=none]") ? null : t.closest("[data-ui-sound],button,a[href],summary,select,input[type=checkbox],input[type=radio],input[type=range],[role=button],[role=tab],[role=menuitem],[role=option],[role=switch],[role=checkbox],[role=radio]")
    }
    , "countdownCue", 0, function(t) {
        return {
            name: "go" === t ? "race.go" : "race.count"
        }
    }
    , "cueClock", 0, s, "hoverSounds", 0, function(t) {
        return "none" !== t.getAttribute("data-ui-sound") && !t.disabled && "true" !== t.getAttribute("aria-disabled")
    }
    , "interfaceActive", 0, function(t, e) {
        return h.has(t) && !e
    }
    , "multiplierCue", 0, function(t, e) {
        let i = t => Math.floor(t + 1e-6);
        return i(e) > i(t) && i(e) >= 2 ? "combo.tier" : "combo.level"
    }
    , "phaseCues", 0, function(t, e) {
        return n.has(t) && !n.has(e) ? [{
            name: "time.slow"
        }] : n.has(e) && "flying" === t ? [{
            name: "time.resume",
            params: {
                duration: .5
            }
        }] : []
    }
    , "playCues", 0, o, "playFlightCues", 0, function(t, e) {
        "contact" === t.type && r.contact(t.crash, s());
        let a = function(t, e) {
            switch (t.type) {
            case "raceStaged":
                return [{
                    name: "race.ready"
                }];
            case "raceGate":
                {
                    let i = e.raceGates - 1;
                    if (0 === t.index)
                        return e.counted ? [{
                            name: "race.gate",
                            params: {
                                progress: 0
                            }
                        }] : [{
                            name: "race.go"
                        }];
                    if (i <= 0 || t.index >= i)
                        return [];
                    return [{
                        name: t.index === i - 1 ? "race.lastgate" : "race.gate",
                        params: {
                            progress: t.index / i
                        }
                    }]
                }
            case "raceFinished":
                return null == e.priorBestMs || t.timeMs < e.priorBestMs ? [{
                    name: "race.finish"
                }, {
                    name: "race.record",
                    delay: .6
                }] : [{
                    name: "race.finish"
                }];
            case "lessonObjective":
                {
                    let i = e.lessonObjectives;
                    if (i > 0 && t.index + 1 >= i)
                        return [];
                    return [{
                        name: "lesson.objective",
                        params: {
                            progress: i > 0 ? (t.index + 1) / i : 0
                        }
                    }]
                }
            case "lessonComplete":
                return [{
                    name: "lesson.complete"
                }];
            default:
                return []
            }
        }(t, e);
        a.length && o((0,
        i.getDroneAudio)(), a)
    }
    , "playHitTaken", 0, function(t, e, i) {
        if (!t)
            return;
        let {name: a, at: r, params: s} = {
            name: "combat.zap",
            at: l(e.from, i),
            params: {
                weight: e.weight
            }
        };
        t.play(a, {
            at: r,
            params: s
        })
    }
    , "pressSound", 0, function(t) {
        let e = t.getAttribute("data-ui-sound");
        return null !== e ? c.has(e) ? e : null : t.disabled || "true" === t.getAttribute("aria-disabled") ? "error" : "BUTTON" === t.tagName && "submit" === t.type && t.form ? "confirm" : "click"
    }
    , "warmBuffers", 0, function(t, i) {
        for (let a of i)
            (0,
            e.loadBuffer)(t, a).catch( () => {}
            )
    }
    , "warmsRaceBuffers", 0, function(t) {
        return "raceLobby" === t
    }
    , "zapAt", 0, l])
}
, 807375, 744666, t => {
    "use strict";
    var e = t.i(271645)
      , i = t.i(483242)
      , a = t.i(121645)
      , r = t.i(739011)
      , s = t.i(101060)
      , o = t.i(247800)
      , l = t.i(584042)
      , n = t.i(579832)
      , h = t.i(532116)
      , c = t.i(720996)
      , u = t.i(106258)
      , d = t.i(809886);
    function m(t) {
        return !(0,
        d.isPhasePaused)(t.phase) && !t.settingsOpen && !t.calibrating && !t.adminOpen && !t.profileOpen && !("u" > typeof document && document.hidden)
    }
    t.s(["combatPresentationAllowed", 0, m], 744666);
    let p = {
        fire: {
            duration: 35,
            weakMagnitude: .18,
            strongMagnitude: .08
        },
        hit: {
            duration: 65,
            weakMagnitude: .55,
            strongMagnitude: .25
        },
        ko: {
            duration: 180,
            weakMagnitude: .65,
            strongMagnitude: .8
        },
        taken: {
            duration: 80,
            weakMagnitude: .2,
            strongMagnitude: .15
        }
    };
    function f(t) {
        let e = u.useSimStore.getState()
          , {settings: i} = e;
        if (!m(e) || i.camera.shake <= 0 || !1 === i.flight.rumble || i.bindings.keyboardOnly || (0,
        c.motionReduced)())
            return;
        let a = (0,
        h.getRawGamepad)(i.bindings.deviceId);
        !function(t, e, i, a=1) {
            let r = Math.max(0, Math.min(1, a));
            if (!i || r <= 0 || !t?.playEffect)
                return;
            let s = p[e];
            try {
                t.playEffect("dual-rumble", {
                    startDelay: 0,
                    ...s,
                    weakMagnitude: s.weakMagnitude * r,
                    strongMagnitude: s.strongMagnitude * r
                }).catch( () => {}
                )
            } catch {}
        }(a?.vibrationActuator, t, !0, i.camera.shake)
    }
    var g = t.i(796856);
    class T {
        seats = new Map;
        update(t, e, i) {
            let a = this.seats.get(t);
            if (!a || !(i - a.at <= 250) || i < a.at) {
                let a = +!!e;
                return this.seats.set(t, {
                    alpha: a,
                    at: i,
                    seen: e ? i : -1 / 0
                }),
                a
            }
            e && (a.seen = i);
            let r = +(i - a.seen < 150)
              , s = Math.max(0, i - (r ? a.at : Math.max(a.at, a.seen + 150))) / 150;
            return a.alpha = r > a.alpha ? Math.min(r, a.alpha + s) : Math.max(r, a.alpha - s),
            1e-9 > Math.abs(a.alpha - r) && (a.alpha = r),
            a.at = i,
            a.alpha
        }
    }
    let y = {
        active: !1,
        seat: null,
        team: null,
        self: {
            phase: "none",
            life: 0,
            hp: 0,
            health: 100,
            shield: 0,
            koTicks: 0
        },
        away: {
            cause: null,
            back: null
        },
        match: null,
        threat: (0,
        a.maxShotDamage)(r.STANDARD_GUN),
        tick: 0,
        tickAt: 0,
        bolts: [],
        arrivals: [],
        cooldown: {
            ticks: 0,
            interval: r.STANDARD_GUN.intervalTicks,
            at: 0
        },
        mark: {
            id: 0,
            at: -1 / 0
        },
        koMark: {
            id: 0,
            at: -1 / 0
        },
        downed: new Map,
        damage: [],
        feed: [],
        seats: new Map,
        ripple: {
            at: -1 / 0,
            from: null
        },
        burst: {
            at: -1 / 0,
            weight: 0
        },
        sparks: [],
        attacker: {
            seat: null,
            at: -1 / 0
        },
        taken: {
            life: 0,
            hits: []
        },
        knockout: null,
        seen: 0,
        incoming: null,
        guardTicks: 0,
        nextId: 1,
        nextBoltId: 1
    }
      , k = new Set;
    function v(t) {
        if (y.active !== t)
            for (let e of (y.active = t,
            k))
                e()
    }
    let M = t => (k.add(t),
    () => {
        k.delete(t)
    }
    );
    function w() {
        v(!1),
        (0,
        g.setMatchState)(null),
        (0,
        g.setMatchSeats)([], null),
        Object.assign(y, {
            seat: null,
            team: null,
            match: null,
            threat: (0,
            a.maxShotDamage)(r.STANDARD_GUN),
            tick: 0,
            tickAt: 0,
            bolts: [],
            arrivals: [],
            cooldown: {
                ticks: 0,
                interval: r.STANDARD_GUN.intervalTicks,
                at: 0
            },
            mark: {
                id: 0,
                at: -1 / 0
            },
            koMark: {
                id: 0,
                at: -1 / 0
            },
            downed: new Map,
            damage: [],
            feed: [],
            seats: new Map,
            ripple: {
                at: -1 / 0,
                from: null
            },
            burst: {
                at: -1 / 0,
                weight: 0
            },
            sparks: [],
            attacker: {
                seat: null,
                at: -1 / 0
            },
            taken: {
                life: 0,
                hits: []
            },
            knockout: null,
            seen: 0,
            incoming: null,
            guardTicks: 0,
            nextId: 1,
            nextBoltId: 1
        }),
        y.self = {
            phase: "none",
            life: 0,
            hp: 0,
            health: 100,
            shield: 0,
            koTicks: 0
        },
        y.away = {
            cause: null,
            back: null
        }
    }
    let S = (t, e, i) => {
        t.push(e),
        t.length > i && t.splice(0, t.length - i)
    }
    ;
    function x(t) {
        S(y.sparks, {
            id: y.nextId++,
            ...t
        }, 8)
    }
    function b(t, e, i, a) {
        let r = y.seats.get(t);
        if (!r || void 0 !== e && r.life !== e) {
            let t = a ?? r?.health ?? y.self.health;
            return {
                hp: t,
                health: t
            }
        }
        if (r.hp <= 0)
            return {
                hp: 0,
                health: r.health
            };
        let l = (i - r.at) * o.TICK_RATE / 1e3
          , n = l < s.RECOVER_DELAY_TICKS ? 0 : Math.floor((l - s.RECOVER_DELAY_TICKS) / s.RECOVER_TICKS_PER_HP) + 1;
        return {
            hp: Math.min(r.health, r.hp + n),
            health: r.health
        }
    }
    function A(t) {
        let e = Math.max(0, Math.ceil(t / o.TICK_RATE));
        return `${Math.floor(e / 60)}:${String(e % 60).padStart(2, "0")}`
    }
    t.s(["ATTACKER_MS", 0, 5e3, "BRACKET_RANGE", 0, 150, "DAMAGE_LABELS", 0, 6, "DAMAGE_MS", 0, 1100, "DISTANCE_FROM", 0, 40, "FEED_LINES", 0, 4, "FEED_MS", 0, 6e3, "HIT_BURST_MS", 0, 150, "KO_MARK_MS", 0, 400, "RIPPLE_MS", 0, 600, "SPARK_MS", 0, 420, "SightFade", 0, T, "attackerHealth", 0, function(t, e, i, r) {
        return b(t, e, r, i ? (0,
        a.droneCombat)(i).health : void 0)
    }
    , "bracketRadius", 0, function(t, e) {
        return (0,
        r.boltRadius)(r.STANDARD_GUN, Math.max(0, t)) + e
    }
    , "combatArrival", 0, function(t) {
        y.arrivals = y.arrivals.filter(e => t < e.at || (y.mark = {
            id: e.id,
            at: e.at
        },
        t - e.at < 260 && (0,
        n.getDroneAudio)()?.play("combat.predict"),
        !1))
    }
    , "combatBolt", 0, function(t, e) {
        let {prediction: i} = t
          , a = y.nextBoltId++;
        if ((0,
        n.getDroneAudio)()?.play("laser.fire", {
            pan: a % 2 ? .12 : -.12
        }),
        f("fire"),
        S(y.bolts, {
            id: a,
            origin: i.origin,
            dir: i.dir,
            length: i.length,
            speed: i.speed,
            at: e,
            hit: i.hit?.seat ?? null
        }, 6),
        i.hit) {
            S(y.arrivals, {
                id: a,
                at: e + i.length / Math.max(1, i.speed) * 1e3,
                seat: i.hit.seat
            }, 6);
            let {origin: t, dir: r, length: s, speed: o} = i;
            x({
                at: e + s / Math.max(1, o) * 1e3,
                origin: [t[0] + r[0] * s, t[1] + r[1] * s, t[2] + r[2] * s],
                seat: i.hit.seat,
                dir: r,
                weight: .6
            })
        }
    }
    , "combatCooldown", 0, function(t) {
        let {ticks: e, interval: i, at: a} = y.cooldown;
        return Math.max(0, Math.min(1, (e - Math.max(0, t - a) * o.TICK_RATE / 1e3) / Math.max(1, i)))
    }
    , "combatHud", 0, y, "combatMatch", 0, function(t) {
        y.match = t,
        y.threat = (0,
        a.maxShotDamage)(r.STANDARD_GUN, t?.drones?.length ? t.drones : void 0),
        (0,
        g.setMatchState)(t)
    }
    , "combatNotice", 0, function(t, e) {
        if (t.seq <= y.seen)
            return;
        y.seen = t.seq,
        y.seats.set(t.victim, {
            life: t.life,
            hp: t.hp,
            health: t.health,
            at: e
        });
        let i = y.seat
          , a = t.ko && null !== i && t.credit === i && t.victim !== i;
        "hit" === t.kind && null !== i && t.attacker === i && (S(y.damage, {
            id: t.seq,
            seat: t.victim,
            damage: t.damage,
            ko: t.ko,
            at: e,
            position: null
        }, 6),
        a || f("hit")),
        t.ko && (S(y.feed, {
            id: t.seq,
            credit: t.credit,
            victim: t.victim,
            at: e
        }, 4),
        y.downed.set(t.victim, {
            life: t.life,
            at: e
        }),
        y.sparks = y.sparks.filter(e => e.seat !== t.victim),
        a && (y.koMark = {
            id: t.seq,
            at: e
        },
        f("ko"))),
        (0,
        l.playCues)((0,
        n.getDroneAudio)(), (0,
        l.combatNoticeCues)(t, i)),
        "hit" !== t.kind || t.ko || null === i || t.victim === i || t.attacker === i || x({
            at: e,
            origin: null,
            seat: t.victim,
            dir: t.from ? [-t.from[0], -t.from[1], -t.from[2]] : null,
            weight: .6
        }),
        null !== i && t.victim === i && null !== t.attacker && (y.attacker = {
            seat: t.attacker,
            at: e
        },
        y.incoming = t.from),
        null !== i && t.victim === i && (y.taken.life !== t.life && (y.taken = {
            life: t.life,
            hits: []
        }),
        "hit" === t.kind && y.taken.hits.push(t.damage),
        t.ko && (y.knockout = {
            life: t.life,
            by: t.credit,
            hits: [...y.taken.hits],
            at: e
        }))
    }
    , "combatSelf", 0, function(t, e, i, o="freestyle", l={
        cause: null,
        back: null
    }) {
        var n;
        if (!t)
            return y.active && w(),
            null;
        let {setup: h, state: c} = t;
        v(!0),
        y.seat = h.seat,
        y.team = h.team,
        y.tick = e,
        y.tickAt = i,
        y.cooldown = {
            ticks: c.gunCooldown,
            interval: (0,
            r.gunOf)(h.gun).intervalTicks,
            at: i
        };
        let u = (0,
        a.droneCombat)(o).health
          , d = null;
        return c.guardTicks < y.guardTicks && c.life === y.self.life && (d = {
            from: y.incoming,
            weight: (n = c.hp,
            Math.max(.25, 1 - Math.max(0, Math.min(1, n / Math.max(1, u)))))
        },
        y.ripple = {
            at: i,
            from: d.from
        },
        y.burst = {
            at: i,
            weight: d.weight
        },
        f("taken"),
        y.incoming = null),
        y.guardTicks = c.guardTicks,
        Object.assign(y.self, {
            phase: s.COMBAT_PHASES[c.phase] ?? "none",
            life: c.life,
            hp: c.hp,
            health: u,
            shield: c.shield,
            koTicks: c.koTicks
        }),
        y.away = c.phase === s.PHASE.out ? {
            cause: l.cause,
            back: l.back
        } : {
            cause: null,
            back: null
        },
        d
    }
    , "damageWeight", 0, t => Math.max(0, Math.min(1, t / 100)), "knockedOut", 0, function(t, e) {
        let i = y.downed.get(t);
        return i && e === i.life ? i : null
    }
    , "matchClock", 0, function(t, e) {
        return "suddenDeath" === t.phase ? {
            time: A(t.suddenDeathEnd - e),
            label: "Sudden death"
        } : "deciding" === t.phase ? {
            time: A(0),
            label: "Deciding"
        } : "over" === t.phase ? {
            time: A(0),
            label: null
        } : "warmup" === t.phase ? {
            time: A(t.lineup - e),
            label: null
        } : "lineup" === t.phase ? {
            time: A(t.cap - t.start),
            label: null
        } : {
            time: A(t.cap - e),
            label: null
        }
    }
    , "oneHitFromKo", 0, function(t, e, i=y.threat) {
        return "alive" === e && t > 0 && t <= i
    }
    , "resetCombatHud", 0, w, "seatHealth", 0, b, "teamColor", 0, function(t) {
        return i.TEAM_COLORS[i.ARENA_TEAMS[t ?? 0] ?? "blue"]
    }
    , "useCombatActive", 0, function() {
        return (0,
        e.useSyncExternalStore)(M, () => y.active, () => !1)
    }
    ], 807375)
}
, 121645, 739011, t => {
    "use strict";
    var e = t.i(353198)
      , i = t.i(247800);
    let a = Object.freeze({
        id: "standard",
        damage: 35,
        intervalTicks: i.TICK_RATE / 3,
        speed: 200,
        range: 90,
        radiusSlope: .04366094290851206,
        radiusMin: .45,
        radiusMax: 2.2,
        aimHelpDeg: 8,
        guardSteps: Math.round(.3 * i.TICK_RATE * i.STEPS_PER_TICK)
    })
      , r = Object.freeze({
        [a.id]: a
    });
    function s(t, e=1) {
        return Math.round(t.damage * e)
    }
    t.s(["STANDARD_GUN", 0, a, "boltRadius", 0, function(t, e) {
        return Math.min(t.radiusMax, Math.max(t.radiusMin, e * t.radiusSlope))
    }
    , "gunOf", 0, t => r[t] ?? a, "hitDamage", 0, s], 739011);
    let o = Object.freeze({
        health: 100,
        damage: 1
    })
      , l = Object.freeze({
        whoop: Object.freeze({
            health: 115,
            damage: .9
        }),
        cinewhoop: Object.freeze({
            health: 130,
            damage: .7
        }),
        freestyle: o,
        "long-range": Object.freeze({
            health: 75,
            damage: 1.65
        }),
        racer: Object.freeze({
            health: 75,
            damage: 1.35
        })
    });
    function n(t) {
        return Object.hasOwn(l, t) ? l[t] : o
    }
    let h = (t, e) => s(t, n(e).damage);
    t.s(["STANDARD_HEALTH", 0, 100, "droneCombat", 0, n, "maxShotDamage", 0, function(t, i=e.DRONE_IDS) {
        return Math.max(...i.map(e => h(t, e)))
    }
    , "shotDamage", 0, h], 121645)
}
, 101060, t => {
    "use strict";
    var e = t.i(980948)
      , i = t.i(247800);
    let a = Object.freeze({
        none: 0,
        alive: 1,
        ko: 2,
        out: 3,
        over: 4
    })
      , r = Object.freeze({
        off: 0,
        pad: 1,
        launch: 2
    })
      , s = 4 * i.TICK_RATE
      , o = 3 * i.TICK_RATE
      , l = 8 * i.TICK_RATE
      , n = i.TICK_RATE / 10
      , h = ["epoch", "life", "phase", "hp", "recoverTicks", "guardTicks", "koTicks", "shield", "shieldTicks", "gunCooldown", "shotSeq", "appliedCseq"]
      , c = (0,
    e.snapshotSlots)(h)
      , u = h.length;
    class d {
        epoch = 0;
        life = 0;
        phase = a.none;
        hp = 0;
        recoverTicks = 0;
        guardTicks = 0;
        koTicks = 0;
        shield = r.off;
        shieldTicks = 0;
        gunCooldown = 0;
        shotSeq = 0;
        appliedCseq = 0;
        save(t, e) {
            t[e + c.epoch] = this.epoch,
            t[e + c.life] = this.life,
            t[e + c.phase] = this.phase,
            t[e + c.hp] = this.hp,
            t[e + c.recoverTicks] = this.recoverTicks,
            t[e + c.guardTicks] = this.guardTicks,
            t[e + c.koTicks] = this.koTicks,
            t[e + c.shield] = this.shield,
            t[e + c.shieldTicks] = this.shieldTicks,
            t[e + c.gunCooldown] = this.gunCooldown,
            t[e + c.shotSeq] = this.shotSeq,
            t[e + c.appliedCseq] = this.appliedCseq
        }
        load(t, e) {
            this.epoch = t[e + c.epoch],
            this.life = t[e + c.life],
            this.phase = t[e + c.phase],
            this.hp = t[e + c.hp],
            this.recoverTicks = t[e + c.recoverTicks],
            this.guardTicks = t[e + c.guardTicks],
            this.koTicks = t[e + c.koTicks],
            this.shield = t[e + c.shield],
            this.shieldTicks = t[e + c.shieldTicks],
            this.gunCooldown = t[e + c.gunCooldown],
            this.shotSeq = t[e + c.shotSeq],
            this.appliedCseq = t[e + c.appliedCseq]
        }
        numbers() {
            let {epoch: t, life: e, phase: i, hp: a, recoverTicks: r, guardTicks: s, koTicks: o, shield: l, shieldTicks: n, gunCooldown: h, shotSeq: c, appliedCseq: u} = this;
            return {
                epoch: t,
                life: e,
                phase: i,
                hp: a,
                recoverTicks: r,
                guardTicks: s,
                koTicks: o,
                shield: l,
                shieldTicks: n,
                gunCooldown: h,
                shotSeq: c,
                appliedCseq: u
            }
        }
        assign(t) {
            for (let e of h)
                this[e] = t[e]
        }
        clear() {
            this.epoch = this.life = this.phase = this.hp = 0,
            this.recoverTicks = this.guardTicks = this.koTicks = 0,
            this.shield = this.shieldTicks = this.gunCooldown = this.shotSeq = this.appliedCseq = 0
        }
        launch(t, e, i) {
            this.life = t,
            this.phase = a.alive,
            this.hp = i ? Math.max(1, Math.min(e, i.hp)) : e,
            this.recoverTicks = i ? i.recoverTicks : 0,
            this.guardTicks = this.koTicks = 0,
            this.shield = r.pad,
            this.shieldTicks = 0,
            this.gunCooldown = 0,
            this.shotSeq = 0
        }
        tick(t) {
            this.gunCooldown > 0 && this.gunCooldown--,
            this.guardTicks++,
            this.phase === a.ko && this.koTicks++,
            this.recoverTicks++,
            this.phase === a.alive && this.hp < t && this.recoverTicks >= l && (this.recoverTicks - l) % n == 0 && this.hp++
        }
        shieldAfter(t, e) {
            t ? (this.shield = r.off,
            this.shieldTicks = 0) : this.shield === r.pad && e ? (this.shield = r.launch,
            this.shieldTicks = o) : this.shield === r.launch && --this.shieldTicks <= 0 && (this.shield = r.off,
            this.shieldTicks = 0)
        }
    }
    t.s(["COMBAT_PHASES", 0, ["none", "alive", "ko", "out", "over"], "COMBAT_STATE_LENGTH", 0, u, "CombatState", 0, d, "PHASE", 0, a, "RECOVER_DELAY_TICKS", 0, l, "RECOVER_TICKS_PER_HP", 0, n, "RELAUNCH_TICKS", 0, s, "SHIELD", 0, r, "canPickDrone", 0, (t, e, i) => t.phase === a.ko || t.phase === a.alive && i < e.lineup])
}
, 980948, t => {
    "use strict";
    var e = t.i(440169)
      , i = t.i(579726)
      , a = t.i(534306)
      , r = t.i(821578)
      , s = t.i(507218)
      , o = t.i(475127);
    function l(t) {
        return {
            x: 0,
            y: (0,
            o.sin)(t / 2),
            z: 0,
            w: (0,
            o.cos)(t / 2)
        }
    }
    function n(t, e, i) {
        let {mass: r, centre: s, inertia: o} = (0,
        a.flightHardware)(e.flight).mass;
        return i.uniformMass ? t.ColliderDesc.cuboid(...e.halfExtents).setMass(r) : t.ColliderDesc.cuboid(...e.halfExtents).setMassProperties(r, {
            x: s[0],
            y: s[1],
            z: s[2]
        }, {
            x: o[0],
            y: o[1],
            z: o[2]
        }, {
            x: 0,
            y: 0,
            z: 0,
            w: 1
        })
    }
    let h = new Map
      , c = {
        x: 0,
        y: 0,
        z: 0,
        w: 1
    };
    function u(t) {
        return Object.freeze(Object.fromEntries(t.map( (t, e) => [t, e])))
    }
    let d = ["armed", "armBlocked", "supported", "hoverLock", "lockX", "lockY", "lockZ", "lockFloor", "flightMs"]
      , m = u(d)
      , p = d.length
      , f = p + i.FLIGHT_CONTROLLER_STATE_LENGTH;
    class g {
        controller;
        hoverLock = new s.HoverLock;
        armed = !1;
        armBlockedByThrottle = !1;
        supported = {
            current: !1
        };
        flightTimeMs = 0;
        voltageFactor = 1;
        contact = {
            touching: !1,
            verticallySupported: !1,
            hit: !1
        };
        primed = null;
        aglRay;
        zero = {
            x: 0,
            y: 0,
            z: 0
        };
        hoverAngvel = {
            x: 0,
            y: 0,
            z: 0
        };
        result = {
            throttleCommand: 0,
            speed: 0,
            altitude: 0,
            upDot: 1,
            motors: [0, 0, 0, 0],
            voltageFactor: 1,
            armed: !1,
            armBlockedByThrottle: !1,
            touching: !1,
            contact: !1,
            supported: !1,
            hoverLocked: !1,
            hoverReleased: !1,
            flightTimeMs: 0
        };
        stepContext = {
            supported: !1,
            agl: null,
            profile: void 0,
            groundHeight: 0,
            submerged: 0
        };
        constructor(t, e=new i.FlightController) {
            this.controller = e,
            this.aglRay = new t.Ray({
                x: 0,
                y: 0,
                z: 0
            },{
                x: 0,
                y: -1,
                z: 0
            })
        }
        reset() {
            this.controller.reset(),
            this.armed = !1,
            this.armBlockedByThrottle = !1,
            this.supported.current = !1,
            this.flightTimeMs = 0,
            this.voltageFactor = 1
        }
        primeContact(t) {
            this.primed = t && {
                ...t
            }
        }
        get primedContact() {
            return this.primed
        }
        resetForSwap() {
            this.controller.reset(),
            this.supported.current = !1
        }
        step(t, e, a) {
            let {sticks: o, dt: l} = a;
            a.drowned ? (this.armed = !1,
            this.armBlockedByThrottle = !1) : o.armRequested ? this.armed || (o.throttle <= i.ARM_THROTTLE_LIMIT ? (this.armed = !0,
            this.armBlockedByThrottle = !1) : this.armBlockedByThrottle = !0) : (this.armed = !1,
            this.armBlockedByThrottle = !1);
            let n = this.primed ? Object.assign(this.contact, this.primed) : (0,
            r.sampleGroundContact)(t, e, this.contact);
            this.primed = null;
            let h = (0,
            r.updateSupportedLatch)(this.supported, n)
              , c = e.translation()
              , u = this.aglRay.origin;
            u.x = c.x,
            u.y = c.y,
            u.z = c.z;
            let d = t.castRay(this.aglRay, 1.2, !0, void 0, a.queryGroups, void 0, e, a.queryFilter)
              , m = d ? d.timeOfImpact : null
              , p = !1;
            if (this.hoverLock.active)
                if (!a.hoverStart || this.armed && this.hoverLock.releases(o.throttle) && !a.hoverHeld)
                    this.hoverLock.clear(),
                    p = !0,
                    e.setGravityScale(1, !0),
                    e.setAngvel(this.zero, !0),
                    this.controller.reset();
                else {
                    let t = this.hoverLock.position;
                    e.setTranslation(t, !0),
                    e.setLinvel(this.zero, !0),
                    e.setAngvel((0,
                    s.hoverLockAngvel)(o, a.rates, e.rotation(), this.hoverAngvel, !0 === a.hoverYaw), !0),
                    c.x = t.x,
                    c.y = t.y,
                    c.z = t.z
                }
            let f = a.groundHeight(c.x, c.z)
              , g = this.result;
            if (this.hoverLock.active)
                g.throttleCommand = 0,
                g.speed = 0,
                g.altitude = Math.max(0, c.y - f),
                g.upDot = (0,
                s.quatUpDot)(e.rotation()),
                g.motors.fill(0),
                g.voltageFactor = this.voltageFactor;
            else {
                let t = this.controller.step(l, e, o, this.armed, a.rates, a.quad, this.context(h, m, a.profile, f, a.drowned ? a.submerged ?? 0 : 0));
                g.throttleCommand = t.throttleCommand,
                g.speed = t.speed,
                g.altitude = t.altitude,
                g.upDot = t.upDot,
                g.motors[0] = t.motors[0],
                g.motors[1] = t.motors[1],
                g.motors[2] = t.motors[2],
                g.motors[3] = t.motors[3],
                g.voltageFactor = t.voltageFactor
            }
            return this.voltageFactor = g.voltageFactor,
            this.armed && !this.hoverLock.active && (this.flightTimeMs += 1e3 * l),
            g.armed = this.armed,
            g.armBlockedByThrottle = this.armBlockedByThrottle,
            g.touching = n.touching,
            g.contact = n.hit,
            g.supported = h,
            g.hoverLocked = this.hoverLock.active,
            g.hoverReleased = p,
            g.flightTimeMs = this.flightTimeMs,
            g
        }
        context(t, e, i, a, r) {
            let s = this.stepContext;
            return s.supported = t,
            s.agl = e,
            s.profile = i,
            s.groundHeight = a,
            s.submerged = r,
            s
        }
        saveState(t=new Float64Array(f), e=0) {
            let i = this.hoverLock;
            return t[e + m.armed] = +!!this.armed,
            t[e + m.armBlocked] = +!!this.armBlockedByThrottle,
            t[e + m.supported] = +!!this.supported.current,
            t[e + m.hoverLock] = +!!i.active,
            t[e + m.lockX] = i.position.x,
            t[e + m.lockY] = i.position.y,
            t[e + m.lockZ] = i.position.z,
            t[e + m.lockFloor] = i.floor,
            t[e + m.flightMs] = this.flightTimeMs,
            this.controller.saveState(t, e + p),
            t
        }
        loadState(t, e=0) {
            this.armed = 1 === t[e + m.armed],
            this.armBlockedByThrottle = 1 === t[e + m.armBlocked],
            this.supported.current = 1 === t[e + m.supported],
            this.hoverLock.restore(1 === t[e + m.hoverLock], [t[e + m.lockX], t[e + m.lockY], t[e + m.lockZ]], t[e + m.lockFloor]),
            this.flightTimeMs = t[e + m.flightMs],
            this.controller.loadState(t, e + p),
            this.voltageFactor = i.FlightController.voltageFactor(t, e + p)
        }
    }
    let T = (t, e) => t.x === e.x && t.y === e.y && t.z === e.z && t.w === e.w
      , y = [1, -1, 2, -2, 3, -3, 4, -4]
      , k = ["x", "y", "z", "w"]
      , v = new Float32Array(1)
      , M = new Uint32Array(v.buffer);
    function w(t) {
        for (let e = 0; e < 3; e++) {
            let e = t.rotation();
            if (t.setRotation(e, !1),
            T(t.rotation(), e))
                return
        }
        let e = t.rotation()
          , i = [...k].sort( (t, i) => Math.abs(e[i]) - Math.abs(e[t]));
        for (let r of y)
            for (let s of i) {
                var a;
                let i = {
                    x: e.x,
                    y: e.y,
                    z: e.z,
                    w: e.w
                };
                i[s] = (a = i[s],
                v[0] = a,
                M[0] += r,
                v[0]),
                t.setRotation(i, !1);
                let o = t.rotation();
                if (t.setRotation(o, !1),
                T(t.rotation(), o))
                    return
            }
    }
    let S = ["x", "y", "z", "qx", "qy", "qz", "qw", "vx", "vy", "vz", "wx", "wy", "wz", "gravity"]
      , x = u(S)
      , b = S.length;
    t.s(["BODY_SLOT", 0, x, "BODY_STATE_LENGTH", 0, b, "CcdGate", 0, class {
        ball;
        flags;
        constructor(t) {
            this.ball = new t.Ball(1),
            this.flags = t.QueryFilterFlags.EXCLUDE_SENSORS
        }
        update(t, e, i, a, r, s=0) {
            let o = e.linvel()
              , l = Math.sqrt(o.x * o.x + o.y * o.y + o.z * o.z);
            this.ball.radius = function(t) {
                let e = h.get(t);
                if (void 0 === e) {
                    let[i,a,r] = t.halfExtents
                      , [s,o,l] = t.camera;
                    e = Math.max(Math.sqrt(i * i + a * a + r * r), Math.sqrt(s * s + o * o + l * l) + t.cameraGuard),
                    h.set(t, e)
                }
                return e
            }(i) + .25 + 4 * l * a + s;
            let n = null !== t.intersectionWithShape(e.translation(), c, this.ball, this.flags, r, void 0, e);
            return e.isCcdEnabled() !== n && e.enableCcd(n),
            n
        }
    }
    , "PILOT_CONTROLLER_OFFSET", 0, p, "PILOT_SLOT", 0, m, "PILOT_STATE_LENGTH", 0, f, "PilotFlight", 0, g, "airframeCollider", 0, n, "createPilotBody", 0, function(t, e, i, a, r) {
        let s = e.createRigidBody(t.RigidBodyDesc.dynamic().setCanSleep(!1).setTranslation(a.position[0], a.position[1], a.position[2]).setRotation(l(a.yaw)));
        s.setLinearDamping(0),
        s.setAngularDamping(r.angularDamping),
        s.enableCcd(!0);
        let o = .06 * i.propRadius;
        return e.createCollider(n(t, i, r).setFriction(.7).setRestitution(.1).setContactSkin(o), s),
        e.createCollider(t.ColliderDesc.ball(i.cameraGuard).setTranslation(...i.camera).setDensity(0).setFriction(.7).setRestitution(.1).setContactSkin(o), s),
        w(s),
        s
    }
    , "loadBodyState", 0, function(t, e, i=0) {
        t.setTranslation({
            x: e[i + x.x],
            y: e[i + x.y],
            z: e[i + x.z]
        }, !0),
        t.setRotation({
            x: e[i + x.qx],
            y: e[i + x.qy],
            z: e[i + x.qz],
            w: e[i + x.qw]
        }, !0),
        t.setLinvel({
            x: e[i + x.vx],
            y: e[i + x.vy],
            z: e[i + x.vz]
        }, !0),
        t.setAngvel({
            x: e[i + x.wx],
            y: e[i + x.wy],
            z: e[i + x.wz]
        }, !0),
        t.setGravityScale(e[i + x.gravity], !0)
    }
    , "placePilotBody", 0, function(t, i) {
        t.setTranslation({
            x: i.position[0],
            y: i.position[1],
            z: i.position[2]
        }, !0),
        t.setRotation(l(i.yaw), !0),
        w(t),
        (0,
        e.clearDroneMotion)(t)
    }
    , "saveBodyState", 0, function(t, e=new Float64Array(b), i=0) {
        let a = t.translation()
          , r = t.rotation()
          , s = t.linvel()
          , o = t.angvel();
        return e[i + x.x] = a.x,
        e[i + x.y] = a.y,
        e[i + x.z] = a.z,
        e[i + x.qx] = r.x,
        e[i + x.qy] = r.y,
        e[i + x.qz] = r.z,
        e[i + x.qw] = r.w,
        e[i + x.vx] = s.x,
        e[i + x.vy] = s.y,
        e[i + x.vz] = s.z,
        e[i + x.wx] = o.x,
        e[i + x.wy] = o.y,
        e[i + x.wz] = o.z,
        e[i + x.gravity] = t.gravityScale(),
        e
    }
    , "settleRotation", 0, w, "snapshotSlots", 0, u])
}
, 440169, 579726, 821578, t => {
    "use strict";
    function e(t) {
        t.resetForces(!0),
        t.resetTorques(!0)
    }
    t.s(["clearDroneMotion", 0, function(t) {
        t.setLinvel({
            x: 0,
            y: 0,
            z: 0
        }, !0),
        t.setAngvel({
            x: 0,
            y: 0,
            z: 0
        }, !0),
        e(t)
    }
    , "prepareDroneSwap", 0, e], 440169);
    var i = t.i(190072)
      , a = t.i(252497)
      , r = t.i(12746)
      , s = t.i(475127)
      , o = t.i(718598);
    let l = 2 * Math.PI;
    function n(t, e) {
        if (t <= 0)
            return 1;
        let i = l * t * e;
        return i / (i + 1)
    }
    function h(t, e, i, a) {
        let r = t[e] + (i - t[e]) * a;
        return t[e] = r,
        r
    }
    function c(t, e, i, a) {
        let r = t[e] + (i - t[e]) * a
          , s = t[e + 1] + (r - t[e + 1]) * a;
        return t[e] = r,
        t[e + 1] = s,
        s
    }
    let u = {
        range: 0
    };
    function d(t) {
        return t < 0 ? 0 : t > 1 ? 1 : t
    }
    let m = .013754 / 100
      , p = 1 / 60
      , f = [29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 48, 49, 50, 52, 54]
      , g = (t, e) => [0, 1, 2].map(i => [t + i, e])
      , T = new Map([...g(29, {
        absolute: 30,
        relative: .1
    }), ...g(32, {
        absolute: 30,
        relative: .1
    }), ...g(35, {
        absolute: 4e3,
        relative: .1
    }), ...g(38, {
        absolute: 4e3,
        relative: .1
    }), ...g(41, {
        absolute: 50,
        relative: .1
    }), [48, {
        absolute: .2,
        relative: 0
    }], [49, {
        absolute: .2,
        relative: 0
    }], [50, {
        absolute: 30,
        relative: .1
    }], [52, {
        absolute: .15,
        relative: .1
    }], [54, {
        absolute: .01,
        relative: 0
    }]])
      , y = [48, 49]
      , k = ["roll", "pitch", "yaw"];
    class v {
        tune;
        state;
        motors;
        setpoint;
        gyro;
        p;
        i;
        d;
        f;
        requested;
        sum;
        throttle;
        sticks;
        ffSpeed;
        constructor(t) {
            this.tune = t,
            this.state = new Float64Array(55),
            this.motors = new Float64Array(4),
            this.setpoint = new Float64Array(3),
            this.gyro = new Float64Array(3),
            this.p = new Float64Array(3),
            this.i = new Float64Array(3),
            this.d = new Float64Array(3),
            this.f = new Float64Array(3),
            this.requested = new Float64Array(3),
            this.sum = new Float64Array(3),
            this.throttle = 0,
            this.sticks = new Float64Array(4),
            this.ffSpeed = new Float64Array(3)
        }
        reset() {
            this.state.fill(0),
            this.motors.fill(0)
        }
        save(t, e) {
            t.set(this.state, e)
        }
        load(t, e) {
            for (let i = 0; i < 55; i++)
                this.state[i] = t[e + i]
        }
        step(t, e, i, a, s, o, l, f, g, T, y=1 / 0) {
            let v = this.state
              , M = this.tune
              , w = this.sticks;
            if (w[0] = e,
            w[1] = i,
            w[2] = a,
            w[3] = s,
            0 === v[53]) {
                for (let t = 0; t < 3; t++) {
                    let e = (0,
                    r.applyActualRates)(w[t], o[k[t]]);
                    v[14 + t] = e,
                    v[0 + 2 * t] = e,
                    v[0 + 2 * t + 1] = e,
                    v[44 + t] = e
                }
                v[6] = s,
                v[7] = s,
                v[47] = s,
                v[29] = l,
                v[30] = f,
                v[31] = g,
                v[32] = l,
                v[33] = f,
                v[34] = g;
                for (let t = 0; t < 4; t++)
                    v[17 + t] = w[t];
                v[22] = p,
                v[53] = 1
            }
            v[21] += t;
            let S = !1;
            for (let t = 0; t < 4; t++)
                w[t] !== v[17 + t] && (S = !0);
            if (S) {
                let e = Math.max(t, Math.min(v[21], p));
                for (let t = 0; t < 3; t++) {
                    let i = (0,
                    r.applyActualRates)(w[t], o[k[t]]);
                    v[26 + t] = v[23 + t],
                    v[23 + t] = (i - v[14 + t]) / e,
                    v[14 + t] = i
                }
                for (let t = 0; t < 4; t++)
                    v[17 + t] = w[t];
                v[22] = e,
                v[21] = 0
            } else if (v[21] > v[22] + t / 2) {
                let t = !1;
                for (let e = 0; e < 3; e++)
                    (0 !== v[23 + e] || 0 !== v[26 + e]) && (t = !0);
                if (t) {
                    for (let t = 0; t < 3; t++)
                        v[26 + t] = v[23 + t],
                        v[23 + t] = 0;
                    v[21] = 0
                }
            }
            let x = n(1.5537739740300374 * M.rcSmoothingSetpoint, t)
              , b = n(1.5537739740300374 * M.rcSmoothingFeedforward, t)
              , A = c(v, 6, s, n(1.5537739740300374 * M.rcSmoothingThrottle, t));
            this.throttle = A;
            let R = M.feedforwardMaxRateLimit / 100
              , E = this.ffSpeed;
            for (let t = 0; t < 3; t++) {
                this.setpoint[t] = c(v, 0 + 2 * t, v[14 + t], x);
                let e = v[23 + t] + .01 * M.feedforwardBoost * (v[23 + t] - v[26 + t])
                  , i = w[t]
                  , a = i < 0 ? -i : i;
                a > R && e * i > 0 && (e *= Math.max(0, (1 - a) / (1 - R))),
                E[t] = c(v, 8 + 2 * t, e, b)
            }
            let C = n(M.gyroLowpassMin + (M.gyroLowpassMax - M.gyroLowpassMin) * A, t)
              , _ = n(M.dtermLowpassMin + (M.dtermLowpassMax - M.dtermLowpassMin) * A, t)
              , L = n(M.dtermLowpass2, t)
              , z = this.gyro;
            z[0] = h(v, 29, l, C),
            z[1] = h(v, 30, f, C),
            z[2] = h(v, 31, g, C);
            let O = Math.abs(A - h(v, 47, A, n(M.antiGravityCutoff, t)))
              , D = 1 + O * M.antiGravityGain / 10
              , I = 1 + .5 * O;
            T.armed ? A > M.airmodeStartThrottle && (v[51] = 1) : v[51] = 0;
            let F = T.airmode && 1 === v[51]
              , q = M.itermWindup / 100
              , N = v[52] > q ? Math.max(0, 1 - (v[52] - q) / (1 - q)) : 1
              , G = !T.armed || T.noAttitude || !F && A < .05
              , P = A > M.tpaBreakpoint ? 1 - M.tpaRate * (A - M.tpaBreakpoint) / (1 - M.tpaBreakpoint) : 1
              , B = n(M.itermRelaxCutoff, t)
              , H = n(35, t);
            for (let e = 0; e < 3; e++) {
                let i = this.setpoint[e]
                  , a = i - z[e]
                  , r = (z[e] - v[32 + e]) / t;
                v[32 + e] = z[e];
                let s = h(v, 38 + e, h(v, 35 + e, r, _), L)
                  , o = 1;
                (e < 2 || M.itermRelaxYaw) && (o = Math.max(0, 1 - Math.abs(i - h(v, 44 + e, i, B)) / 40));
                let l = M.d[e];
                if (e < 2 && M.dMin[e] > 0 && M.dMin[e] < M.d[e]) {
                    let t = Math.min(1, Math.abs(s) * M.dMinGain * 4e-6 + Math.abs(E[e]) * M.dMinAdvance * 2e-6)
                      , i = h(v, 48 + e, t, H);
                    l = M.dMin[e] + (M.d[e] - M.dMin[e]) * i
                }
                let c = .032029 * M.p[e] * a * I;
                2 === e && (c = h(v, 50, c, n(M.yawLowpass, t)));
                let u = -(529e-6 * l) * s * P
                  , d = M.f[e] * m * E[e]
                  , p = 2 === e ? M.pidSumLimitYaw : M.pidSumLimit
                  , f = c + u + d
                  , g = f + v[41 + e]
                  , y = g >= p && a > 0 || g <= -p && a < 0 ? v[41 + e] : v[41 + e] + .244381 * M.i[e] * a * o * t * D * N;
                y > M.itermLimit ? y = M.itermLimit : y < -M.itermLimit && (y = -M.itermLimit),
                (G || e < 2 && T.lockRollPitch) && (y = 0),
                v[41 + e] = y;
                let k = f + y
                  , w = k > p ? p : k < -p ? -p : k;
                (!T.armed || T.noAttitude || e < 2 && T.lockRollPitch) && (w = 0),
                this.p[e] = c,
                this.i[e] = y,
                this.d[e] = u,
                this.f[e] = d,
                this.requested[e] = k,
                this.sum[e] = w
            }
            if (!T.armed)
                return this.motors.fill(0),
                v[52] = 0,
                v[54] = 0,
                this.motors;
            let U = M.motorIdle;
            if (M.dynIdleMinRpm > 0 && y < 1 / 0) {
                let e = 100 * M.dynIdleMinRpm - y
                  , i = v[54] + 4e-4 * e * t;
                i < 0 ? i = 0 : i > M.dynIdleMaxIncrease && (i = M.dynIdleMaxIncrease),
                v[54] = i,
                U += Math.min(M.dynIdleMaxIncrease, Math.max(0, i + 2e-5 * e))
            }
            let Y = function(t, e, i, a, r, s, o, l) {
                let n = -i + a - r
                  , h = i + a + r
                  , c = -i - a + r
                  , m = i - a - r
                  , p = Math.max(n, h, c, m)
                  , f = Math.min(n, h, c, m)
                  , g = p - f;
                if (g > 1) {
                    let t = 1 / g;
                    n *= t,
                    h *= t,
                    c *= t,
                    m *= t,
                    p *= t,
                    f *= t
                }
                let T = e < 0 ? 0 : e > 1 ? 1 : e;
                s && (T < -f && (T = -f),
                T > 1 - p && (T = 1 - p));
                let y = l - o;
                return t[0] = o + y * d(T + n),
                t[1] = o + y * d(T + h),
                t[2] = o + y * d(T + c),
                t[3] = o + y * d(T + m),
                u.range = g,
                u
            }(this.motors, A, this.sum[0] / 1e3, this.sum[1] / 1e3, this.sum[2] / 1e3, F, U, M.motorOutputLimit);
            return v[52] = Y.range,
            this.motors
        }
    }
    var M = t.i(93888)
      , w = t.i(145725)
      , S = t.i(685024)
      , x = t.i(534306);
    class b {
        hz;
        q;
        filter;
        seed;
        dt;
        b0;
        a1;
        a2;
        value;
        constructor(t=22, e=.9) {
            this.hz = t,
            this.q = e,
            this.filter = new Float64Array(8),
            this.seed = 0x9e3779b9,
            this.dt = 0,
            this.b0 = 0,
            this.a1 = 0,
            this.a2 = 0,
            this.value = new Float64Array(4)
        }
        reset() {
            this.filter.fill(0),
            this.value.fill(0),
            this.seed = 0x9e3779b9
        }
        save(t, e) {
            for (let i = 0; i < 8; i++)
                t[e + i] = this.filter[i];
            t[e + 8] = this.seed
        }
        load(t, e) {
            for (let i = 0; i < 8; i++)
                this.filter[i] = t[e + i];
            this.seed = t[e + 8] >>> 0
        }
        next() {
            this.seed = this.seed + 0x6d2b79f5 >>> 0;
            let t = this.seed;
            return t = Math.imul(t ^ t >>> 15, 1 | t),
            (((t ^= t + Math.imul(t ^ t >>> 7, 61 | t)) ^ t >>> 14) >>> 0) / 0x100000000 * 2 - 1
        }
        coefficients(t) {
            let e = 2 * Math.PI * this.hz * t
              , i = (0,
            s.exp)(-Math.PI * this.hz * t / this.q)
              , a = 2 * i * (0,
            s.cos)(e)
              , r = -i * i;
            this.a1 = a,
            this.a2 = r,
            this.b0 = 1 / Math.sqrt((1 - r) / ((1 + r) * ((1 - r) * (1 - r) - a * a))),
            this.dt = t
        }
        step(t) {
            t !== this.dt && this.coefficients(t);
            for (let t = 0; t < 4; t++) {
                let e = (this.next() + this.next()) * 1.2247
                  , i = 2 * t
                  , a = this.b0 * e + this.a1 * this.filter[i] + this.a2 * this.filter[i + 1];
                this.filter[i + 1] = this.filter[i],
                this.filter[i] = a,
                this.value[t] = a
            }
        }
    }
    let A = 180 / Math.PI
      , R = Math.PI / 180
      , E = 60 / (2 * Math.PI)
      , C = a.ARM_LENGTH / Math.SQRT2
      , _ = 3 + w.POWERTRAIN_STATE_LENGTH
      , L = _ + 4
      , z = L + 9
      , O = z + 55;
    [...Array.from({
        length: w.POWERTRAIN_STATE_LENGTH
    }, (t, e) => 3 + e), ...f.map(t => z + t)];
    let D = y.map(t => z + t)
      , I = [3, 4, 5, 6, 7, _, _ + 1, _ + 2, _ + 3, ...f.filter(t => !y.includes(t)).map(t => z + t), ...[51, 53].map(t => z + t)]
      , F = {
        absolute: .5,
        relative: .1
    }
      , q = new Map([[0, M.ANY_MEASURE], [2, M.ANY_MEASURE], ...w.POWERTRAIN_MEASURE_TOLERANCE.map( (t, e) => [3 + e, t]), ...[0, 1, 2, 3].map(t => [_ + t, F]), ...[...T].map( ([t,e]) => [z + t, e])]);
    Object.values(x.FLIGHT_SPECS).map(t => (0,
    w.powertrainRanges)(t.motor, t.battery)).reduce( (t, e) => t.map( ([t,i], a) => [Math.min(t, e[a][0]), Math.max(i, e[a][1])]));
    let N = 1e3
      , G = 2
      , P = 1.2
      , B = 8;
    function H(t, e=1) {
        return [t[1] * e, -t[2] * e, -t[0] * e]
    }
    t.s(["ARM_THROTTLE_LIMIT", 0, .15, "FLIGHT_CONTROLLER_BOOST", 0, D, "FLIGHT_CONTROLLER_MEASURE_TOLERANCE", 0, q, "FLIGHT_CONTROLLER_RATE_LOOP", 0, I, "FLIGHT_CONTROLLER_STATE_LENGTH", 0, O, "FlightController", 0, class {
        onTrace;
        constructor(t) {
            this.onTrace = t,
            this.rate = new v(x.FLIGHT_SPECS.freestyle.tune),
            this.power = new w.Powertrain,
            this.turbulence = new b,
            this.induced = new Float64Array(4),
            this.groundY = 0,
            this.hasGroundY = !1,
            this.restTimer = 0,
            this.result = {
                throttleCommand: 0,
                speed: 0,
                altitude: 0,
                upDot: 1,
                motors: [0, 0, 0, 0],
                voltageFactor: 1
            },
            this.flags = {
                armed: !1,
                lockRollPitch: !1,
                noAttitude: !1,
                airmode: !0
            },
            this.loads = {
                thrust: 0,
                hx: 0,
                hz: 0,
                torque: 0,
                induced: 0,
                wake: 0
            },
            this.aero = new Float64Array(4),
            this.drag = {
                x: 0,
                y: 0,
                z: 0
            },
            this.q = new i.Quaternion,
            this.invQ = new i.Quaternion,
            this.mid = new i.Quaternion,
            this.scratch = new i.Vector3
        }
        rate;
        power;
        turbulence;
        induced;
        groundY;
        hasGroundY;
        restTimer;
        result;
        flags;
        loads;
        aero;
        drag;
        q;
        invQ;
        mid;
        scratch;
        saveState(t=new Float64Array(O), e=0) {
            t[e + 0] = this.groundY,
            t[e + 0 + 1] = +!!this.hasGroundY,
            t[e + 0 + 2] = this.restTimer,
            this.power.save(t, e + 3);
            for (let i = 0; i < 4; i++)
                t[e + _ + i] = this.induced[i];
            return this.turbulence.save(t, e + L),
            this.rate.save(t, e + z),
            t
        }
        loadState(t, e=0) {
            this.groundY = t[e + 0],
            this.hasGroundY = 1 === t[e + 0 + 1],
            this.restTimer = t[e + 0 + 2],
            this.power.load(t, e + 3);
            for (let i = 0; i < 4; i++)
                this.induced[i] = t[e + _ + i];
            this.turbulence.load(t, e + L),
            this.rate.load(t, e + z)
        }
        static voltageFactor(t, e=0) {
            return t[e + 3 + 5]
        }
        reset() {
            this.groundY = 0,
            this.hasGroundY = !1,
            this.restTimer = 0,
            this.power.reset(),
            this.induced.fill(0),
            this.turbulence.reset(),
            this.rate.reset()
        }
        step(t, e, i, l, n, h, c) {
            var u;
            let {supported: d, profile: m} = c
              , p = m?.flight ?? x.FLIGHT_SPECS.freestyle
              , f = (0,
            x.flightHardware)(p)
              , [g,T,y] = f.mass.inertia
              , k = this.rate;
            k.tune = p.tune;
            let v = e.rotation();
            this.q.set(v.x, v.y, v.z, v.w),
            this.invQ.copy(this.q).invert();
            let M = e.translation();
            d && (this.groundY = M.y,
            this.hasGroundY = !0);
            let w = this.hasGroundY ? Math.max(0, M.y - this.groundY) : Math.max(0, M.y)
              , b = (u = c.agl,
            void 0 === u ? w : null === u ? 1 / 0 : u)
              , _ = Math.max(0, M.y - (c.groundHeight ?? 0))
              , L = e.angvel()
              , z = e.linvel()
              , O = (0,
            s.hypot)(z.x, z.y, z.z)
              , D = (0,
            s.hypot)(L.x, L.y, L.z);
            d && O < a.GROUND_REST_SPEED && D < a.GROUND_REST_ANGVEL ? this.restTimer += t : this.restTimer = 0;
            let I = this.restTimer >= a.GROUND_REST_DWELL_S;
            this.scratch.set(0, 1, 0).applyQuaternion(this.q);
            let F = this.scratch.y
              , q = I && F > a.GROUND_UPRIGHT_DOT
              , U = I && F < a.GROUND_TURTLE_DOT
              , Y = I && !q && !U;
            this.scratch.set(L.x, L.y, L.z).applyQuaternion(this.invQ);
            let K = this.scratch.x
              , j = this.scratch.y
              , Q = this.scratch.z
              , W = K
              , V = j
              , X = Q;
            this.scratch.set(z.x, z.y, z.z).applyQuaternion(this.invQ);
            let Z = this.scratch.x
              , $ = this.scratch.y
              , J = this.scratch.z
              , tt = (0,
            r.applyThrottleCurve)(i.throttle, h.throttleExpo, h.throttleMid)
              , te = l && !Y
              , ti = this.flags;
            ti.armed = te,
            ti.lockRollPitch = q,
            ti.noAttitude = Y || U,
            ti.airmode = h.airMode;
            let ta = F > a.GROUND_UPRIGHT_DOT ? (0,
            S.groundEffect)(b + p.layout.propY, f.rotor.radius) : 1;
            (0,
            o.bodyDrag)(this.drag, Z, $, J, O, p.aero);
            let tr = this.drag.x
              , ts = this.drag.y
              , to = this.drag.z
              , [tl,tn,th] = f.pressure
              , tc = tn * to - th * ts
              , tu = th * tr - tl * to
              , td = tl * ts - tn * tr
              , tm = t / 8
              , tp = p.motor.rotorInertia
              , tf = this.power
              , tg = this.loads
              , tT = this.aero
              , ty = 0
              , tk = 0
              , tv = 0
              , tM = 0
              , tw = 0
              , tS = 0
              , tx = 0
              , tb = 0
              , tA = 0;
            for (let t = 0; t < 8; t++) {
                let t = tf.omega
                  , e = Math.min(t[0], t[1], t[2], t[3]) * E
                  , r = k.step(tm, i.roll, i.pitch, i.yaw, tt, n, -Q * A, K * A, -j * A, ti, e);
                this.turbulence.step(tm);
                let s = tr
                  , o = ts
                  , l = to
                  , h = tc
                  , c = tu
                  , u = td;
                for (let t = 0; t < 4; t++) {
                    let e = f.hubs[t]
                      , i = e[0]
                      , a = e[1]
                      , r = e[2]
                      , n = Z + j * r - Q * a
                      , d = $ + Q * i - K * r
                      , m = J + K * a - j * i;
                    (0,
                    S.rotorLoads)(tg, f.rotor, tf.omega[t], n, d, m, this.induced[t], ta),
                    this.induced[t] = tg.induced;
                    let g = 1 + p.prop.wakeNoise * tg.wake * this.turbulence.value[t]
                      , T = tg.thrust * g;
                    tT[t] = tg.torque * g,
                    s += tg.hx,
                    o += T,
                    l += tg.hz,
                    h += a * tg.hz - r * T,
                    c += r * tg.hx - i * tg.hz,
                    u += i * T - a * tg.hx
                }
                tf.step(tm, p.motor, p.battery, r, te, tT);
                let d = 0;
                for (let t = 0; t < 4; t++)
                    c -= a.PROP_SPIN_SIGNS[t] * tf.drive[t],
                    d += a.PROP_SPIN_SIGNS[t] * tf.omega[t];
                d *= tp,
                h += Q * d,
                u -= K * d,
                h -= j * y * Q - Q * T * j,
                c -= Q * g * K - K * y * Q,
                u -= K * T * j - j * g * K,
                K += h / g * tm,
                j += c / T * tm,
                Q += u / y * tm,
                ty += s,
                tk += o,
                tv += l,
                tM += h,
                tw += c,
                tS += u,
                tx += K,
                tb += j,
                tA += Q
            }
            ty *= .125,
            tk *= .125,
            tv *= .125,
            tM *= .125,
            tw *= .125,
            tS *= .125,
            q && l ? (this.scratch.set(0, V, 0).applyQuaternion(this.q),
            e.setAngvel({
                x: this.scratch.x,
                y: this.scratch.y,
                z: this.scratch.z
            }, !0)) : U && e.setAngvel({
                x: 0,
                y: 0,
                z: 0
            }, !0);
            let tR = .125 * t * .25;
            if (this.mid.set(tx * tR, tb * tR, tA * tR, 1).normalize(),
            this.mid.premultiply(this.q),
            this.scratch.set(ty, tk, tv).applyQuaternion(this.mid).multiplyScalar(t),
            e.applyImpulse(this.scratch, !0),
            this.scratch.set(tM, tw, tS).applyQuaternion(this.mid).multiplyScalar(t),
            e.applyTorqueImpulse(this.scratch, !0),
            c.submerged && m && function(t, e, i, r, s, o, l, n) {
                let[h,c,u] = i
                  , d = 1 / (1 + .5 * N * P * (4 / 3 * (h * c + c * u + h * u) * r) / e * l * n) - 1
                  , m = r * a.GRAVITY / G * n;
                t.applyImpulse({
                    x: e * s.x * d,
                    y: e * (s.y * d + m),
                    z: e * s.z * d
                }, !0);
                let p = 1 / (1 + B * r * n) - 1
                  , f = t.angvel();
                t.setAngvel({
                    x: f.x + o.x * p,
                    y: f.y + o.y * p,
                    z: f.z + o.z * p
                }, !0)
            }(e, f.mass.mass, m.halfExtents, c.submerged, z, L, O, t),
            Y) {
                this.scratch.set(0, 1, 0).applyQuaternion(this.q);
                let i = Math.sign(F);
                .05 > Math.abs(F) && (i = Math.sign(L.x * this.scratch.z - L.z * this.scratch.x) || 1);
                let r = -this.scratch.z * i
                  , s = this.scratch.x * i
                  , o = Math.sqrt(r * r + s * s);
                if (o > 1e-6) {
                    let i = a.GROUND_TIP_TORQUE * (f.mass.mass / .65) * (p.layout.reachX / C) * t / o;
                    e.applyTorqueImpulse({
                        x: r * i,
                        y: 0,
                        z: s * i
                    }, !0)
                }
            }
            let tE = m?.sound.maxRpm ?? 32e3
              , tC = this.result;
            tC.throttleCommand = te ? p.tune.motorIdle + (p.tune.motorOutputLimit - p.tune.motorIdle) * k.throttle : 0,
            tC.speed = O,
            tC.altitude = _,
            tC.upDot = F;
            for (let t = 0; t < 4; t++)
                tC.motors[t] = Math.min(1, tf.omega[t] * E / tE);
            return tC.voltageFactor = tf.sag,
            this.onTrace && this.onTrace({
                dt: t,
                input: {
                    roll: i.roll,
                    pitch: i.pitch,
                    yaw: i.yaw,
                    throttle: i.throttle
                },
                setpoint: H(k.setpoint, R),
                gyro: [W, V, X],
                p: H(k.p),
                i: H(k.i),
                d: H(k.d),
                ff: H(k.f),
                requestedTorque: H(k.requested),
                limitedTorque: H(k.sum),
                deliveredTorque: [tM, tw, tS],
                motorTargets: [k.motors[0], k.motors[1], k.motors[2], k.motors[3]],
                motors: [tC.motors[0], tC.motors[1], tC.motors[2], tC.motors[3]],
                voltageFactor: tC.voltageFactor
            }),
            tC
        }
    }
    ], 579726);
    let U = {
        touching: !1,
        verticallySupported: !1,
        hit: !1
    };
    t.s(["sampleGroundContact", 0, function(t, e, i=U) {
        i.touching = !1,
        i.verticallySupported = !1,
        i.hit = !1;
        let r = e.numColliders();
        for (let s = 0; s < r; s++) {
            let r = e.collider(s);
            t.contactPairsWith(r, e => {
                let s = r.contactSkin() + e.contactSkin() + 5e-4;
                t.contactPair(r, e, t => {
                    let e = t.numContacts();
                    if (0 !== e) {
                        i.touching = !0,
                        Math.abs(t.normal().y) >= a.GROUND_SUPPORT_UP_DOT && (i.verticallySupported = !0);
                        for (let a = 0; !i.hit && a < e; a++)
                            t.contactDist(a) <= s && (i.hit = !0)
                    }
                }
                )
            }
            )
        }
        return i
    }
    , "updateSupportedLatch", 0, function(t, e) {
        return e.verticallySupported ? t.current = !0 : e.touching || (t.current = !1),
        t.current
    }
    ], 821578)
}
, 507218, t => {
    "use strict";
    var e = t.i(12746);
    let i = Math.PI / 180;
    t.s(["HoverLock", 0, class {
        active = !1;
        position = {
            x: 0,
            y: 0,
            z: 0
        };
        floorThrottle = 1;
        engage(t) {
            this.active = !0,
            this.position.x = t[0],
            this.position.y = t[1],
            this.position.z = t[2],
            this.floorThrottle = 1
        }
        clear() {
            this.active = !1
        }
        get floor() {
            return this.floorThrottle
        }
        restore(t, e, i) {
            this.active = t,
            this.position.x = e[0],
            this.position.y = e[1],
            this.position.z = e[2],
            this.floorThrottle = i
        }
        releases(t) {
            return !!this.active && (t < this.floorThrottle && (this.floorThrottle = t),
            t > this.floorThrottle + .08)
        }
    }
    , "hoverLockAngvel", 0, function(t, a, r, s, o=!1) {
        let l = (0,
        e.applyActualRates)(t.pitch, a.pitch) * i
          , n = -(0,
        e.applyActualRates)(t.roll, a.roll) * i
          , {x: h, y: c, z: u, w: d} = r
          , m = d * l + c * n
          , p = u * l - h * n
          , f = d * n - c * l
          , g = -h * l - u * n;
        if (o) {
            let r = -(0,
            e.applyActualRates)(t.yaw, a.yaw) * i;
            m -= u * r,
            p += d * r,
            f += h * r,
            g -= c * r
        }
        return s.x = m * d + -(g * h) + -(p * u) - -(f * c),
        s.y = p * d + -(g * c) + -(f * h) - -(m * u),
        s.z = f * d + -(g * u) + -(m * c) - -(p * h),
        s
    }
    , "hoverStartPose", 0, function(t) {
        let[e,i,a] = t.position;
        return {
            ...t,
            position: [e, i + 1, a]
        }
    }
    , "quatUpDot", 0, function(t) {
        return 1 - 2 * (t.x * t.x + t.z * t.z)
    }
    ])
}
]);
