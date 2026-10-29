(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 19945, t => {
    "use strict";
    var e = t.i(244e3)
      , i = t.i(98747)
      , s = t.i(475127)
      , n = t.i(577390)
      , h = t.i(247800);
    function a(t, e, i, n) {
        let h = t.pits[e]
          , a = (i - (n - 1) / 2) * 2.5
          , r = (0,
        s.cos)(h.yaw)
          , o = (0,
        s.sin)(h.yaw);
        return {
            id: `pit-${h.team}-${i}`,
            label: "",
            pad: !1,
            yaw: h.yaw,
            position: [h.position[0] + a * r, h.position[1], h.position[2] - a * o]
        }
    }
    class r {
        room;
        seats;
        bots;
        drone;
        pits;
        inputs = new Map;
        constructor(t, s) {
            const {arena: r, difficulties: o} = s;
            this.drone = s.drone ?? r.drones[0],
            this.room = new n.Room(t,{
                crowd: !0,
                drift: !0,
                contactEvents: !1,
                still: (0,
                n.stillRoom)("match"),
                walls: s.arena.bounds,
                ...s.room,
                kind: "match",
                world: s.world
            }),
            this.seats = o.map( (t, e) => ({
                id: `bot:${e}:1`,
                seat: e,
                team: e % 2
            }));
            const l = s.seed ?? 1
              , d = (0,
            e.mapBounds)(s.world.bounds);
            this.bots = o.map( (t, i) => new e.ArenaBot({
                bounds: r.bounds,
                map: d,
                difficulty: t,
                drone: this.drone,
                seed: 1e3 * l + i
            }));
            const c = [0, 1].map(t => this.seats.filter(e => e.team === t).length);
            for (const t of (this.pits = this.seats.map(t => a(r, t.team, this.seats.filter(e => e.team === t.team && e.seat < t.seat).length, c[t.team])),
            this.seats))
                this.room.addPilot({
                    id: t.id,
                    drone: this.drone,
                    spawn: this.pits[t.seat],
                    ...i.BOT_TUNING
                }),
                this.inputs.set(t.id, (0,
                h.idleInput)())
        }
        step(t) {
            this.decide(),
            this.room.step(this.inputs, t)
        }
        decide() {
            let t = this.room
              , e = t.tick;
            for (let s = 0; s < this.seats.length; s++) {
                let n = this.seats[s]
                  , h = this.bots[s].decide((0,
                i.senseBot)(t, e, n, this.seats));
                for (let e of h.commands ?? [])
                    t.command(n.id, "respawn" === e.type ? {
                        type: "placeAt",
                        spawn: this.pits[s]
                    } : e);
                (0,
                i.botInput)(h, this.inputs.get(n.id))
            }
        }
        free() {
            this.room.free()
        }
    }
    t.s(["ArenaMatch", 0, r, "pitSpawn", 0, a])
}
, 244e3, 98747, t => {
    "use strict";
    var e = t.i(998494)
      , i = t.i(12746)
      , s = t.i(789788)
      , n = t.i(247800);
    let h = {
        rates: i.RATE_PRESETS.freestyle,
        throttle: {
            mid: .5,
            expo: 0
        }
    };
    function a(t, e) {
        let i = t.view(e);
        if (!i)
            return null;
        let s = i.body.translation()
          , n = i.body.linvel()
          , h = i.body.rotation();
        return {
            position: {
                x: s.x,
                y: s.y,
                z: s.z
            },
            velocity: {
                x: n.x,
                y: n.y,
                z: n.z
            },
            rotation: {
                x: h.x,
                y: h.y,
                z: h.z,
                w: h.w
            },
            armed: i.last?.armed ?? !1,
            flying: "flying" === i.mode && null === t.pilotContext(e).heldSince,
            ...i.combat ? {
                combat: {
                    life: i.combat.state.life,
                    hp: i.combat.state.hp
                }
            } : {}
        }
    }
    let r = new WeakMap;
    t.s(["BOT_TUNING", 0, h, "botInput", 0, function(t, e=(0,
    n.idleInput)()) {
        return (0,
        n.quantizeInput)({
            throttle: t.throttle,
            roll: t.roll,
            pitch: t.pitch,
            yaw: t.yaw,
            armRequested: t.arm,
            interact: t.interact ?? !1
        }, e)
    }
    , "senseBot", 0, function(t, e, i, n) {
        var h;
        let o, l = [];
        for (let e of n) {
            if (e.id === i.id)
                continue;
            let n = a(t, e.id);
            n && l.push({
                ...n,
                seat: e.seat,
                team: e.team,
                tilt: (0,
                s.muzzleTilt)(t.view(e.id).aimTiltDeg)
            })
        }
        let d = t.view(i.id)?.combat?.setup;
        return {
            tick: e,
            seat: i.seat,
            team: i.team,
            self: a(t, i.id),
            others: l,
            probe: (h = t,
            (o = r.get(h)) || r.set(h, o = (t, e, i, s, n) => h.castRay(t, e, i, s, n)),
            o),
            waiting: !!d && e < d.start
        }
    }
    ], 98747);
    var o = t.i(475127);
    let l = 180 / Math.PI
      , d = (0,
    o.cos)(.35)
      , c = (0,
    o.sin)(.35);
    function u(t, e, i, s, n) {
        let h = 2 * (t.y * s - t.z * i)
          , a = 2 * (t.z * e - t.x * s)
          , r = 2 * (t.x * i - t.y * e);
        return n.x = e + t.w * h + t.y * r - t.z * a,
        n.y = i + t.w * a + t.z * h - t.x * r,
        n.z = s + t.w * r + t.x * a - t.y * h,
        n
    }
    function f(t, e) {
        let s = Math.abs(t);
        if (!(s > 0))
            return 0;
        if (s >= (0,
        i.applyActualRates)(1, e))
            return t < 0 ? -1 : 1;
        let n = 0
          , h = 1;
        for (let t = 0; t < 16; t++) {
            let t = (n + h) * .5;
            (0,
            i.applyActualRates)(t, e) < s ? n = t : h = t
        }
        let a = (n + h) * .5;
        return t < 0 ? -a : a
    }
    class m {
        rates;
        limits;
        hover;
        climbIntegral;
        sinTilt;
        cosTilt;
        tanMax;
        up;
        nose;
        goal;
        constructor(t, e, i, s) {
            this.rates = t,
            this.limits = e,
            this.climbIntegral = 0,
            this.up = {
                x: 0,
                y: 1,
                z: 0
            },
            this.nose = {
                x: 0,
                y: 0,
                z: -1
            },
            this.goal = {
                x: 0,
                y: 0,
                z: 0,
                w: 1
            },
            this.sinTilt = (0,
            o.sin)(i),
            this.cosTilt = (0,
            o.cos)(i),
            this.tanMax = (0,
            o.sin)(e.maxTilt) / (0,
            o.cos)(e.maxTilt),
            this.hover = s
        }
        reset() {
            this.climbIntegral = 0
        }
        track(t, e, i, s, n, h) {
            let a = t.velocity
              , r = e.y - a.y;
            this.climbIntegral = p(this.climbIntegral + 1.6 * r * n, -6, 6);
            let m = 3 * (e.x - a.x)
              , g = 3 * (e.z - a.z)
              , k = 3 * r + this.climbIntegral + 9.81;
            k < 2.4525 && (k = 2.4525);
            let y = Math.sqrt(m * m + g * g)
              , w = k * this.tanMax;
            y > w && (m *= w / y,
            g *= w / y);
            let T = Math.sqrt(m * m + k * k + g * g)
              , b = m / T
              , S = k / T
              , x = g / T
              , v = i.x
              , E = i.y
              , M = i.z;
            if (s && s.weight > 0) {
                let t = s.direction
                  , e = -t.z
                  , i = t.x
                  , n = Math.sqrt(e * e + i * i);
                if (n > .15) {
                    e /= n;
                    let h = -(i /= n) * t.y
                      , a = i * t.x - e * t.z
                      , r = e * t.y
                      , o = this.sinTilt * t.x + this.cosTilt * h
                      , l = this.sinTilt * t.y + this.cosTilt * a
                      , u = this.sinTilt * t.z + this.cosTilt * r
                      , f = p(s.weight, 0, 1)
                      , m = b + (o - b) * f
                      , g = S + (l - S) * f
                      , y = x + (u - x) * f
                      , w = Math.sqrt(m * m + g * g + y * y)
                      , z = (m /= w) * b + (g /= w) * S + (y /= w) * x;
                    if (z < d) {
                        let t = m - z * b
                          , e = g - z * S
                          , i = y - z * x
                          , s = Math.sqrt(t * t + e * e + i * i) || 1;
                        t /= s,
                        e /= s,
                        i /= s,
                        m = b * d + t * c,
                        g = S * d + e * c,
                        y = x * d + i * c
                    }
                    b = m,
                    S = g,
                    x = y,
                    T = Math.min(25.506000000000004, k / Math.max(S, .35)),
                    v = this.cosTilt * t.x - this.sinTilt * h,
                    E = this.cosTilt * t.y - this.sinTilt * a,
                    M = this.cosTilt * t.z - this.sinTilt * r
                }
            }
            T > 25.506000000000004 && (T = 25.506000000000004);
            let z = v * b + E * S + M * x
              , P = v - z * b
              , _ = E - z * S
              , I = M - z * x
              , C = Math.sqrt(P * P + _ * _ + I * I);
            if (C < .001) {
                let e = u(t.rotation, 0, 0, -1, this.nose)
                  , i = e.x * b + e.y * S + e.z * x;
                P = e.x - i * b,
                C = Math.sqrt(P * P + (_ = e.y - i * S) * _ + (I = e.z - i * x) * I) || 1
            }
            !function(t, e, i, s, n, h, a) {
                let r = e * h - i * n
                  , o = -t
                  , l = i * s - t * h
                  , d = -e
                  , c = t * n - e * s
                  , u = -i
                  , f = r + n + u;
                if (f > 0) {
                    let t = .5 / Math.sqrt(f + 1);
                    a.w = .25 / t,
                    a.x = (h - d) * t,
                    a.y = (o - c) * t,
                    a.z = (l - s) * t
                } else if (r > n && r > u) {
                    let t = 2 * Math.sqrt(1 + r - n - u);
                    a.w = (h - d) / t,
                    a.x = .25 * t,
                    a.y = (s + l) / t,
                    a.z = (o + c) / t
                } else if (n > u) {
                    let t = 2 * Math.sqrt(1 + n - r - u);
                    a.w = (o - c) / t,
                    a.x = (s + l) / t,
                    a.y = .25 * t,
                    a.z = (d + h) / t
                } else {
                    let t = 2 * Math.sqrt(1 + u - r - n);
                    a.w = (l - s) / t,
                    a.x = (o + c) / t,
                    a.y = (d + h) / t,
                    a.z = .25 * t
                }
            }(P /= C, _ /= C, I /= C, b, S, x, this.goal);
            let R = t.rotation
              , D = this.goal
              , A = R.w * D.w + R.x * D.x + R.y * D.y + R.z * D.z
              , K = R.w * D.x - R.x * D.w - R.y * D.z + R.z * D.y
              , q = R.w * D.y + R.x * D.z - R.y * D.w - R.z * D.x
              , O = R.w * D.z - R.x * D.y + R.y * D.x - R.z * D.w;
            A < 0 && (A = -A,
            K = -K,
            q = -q,
            O = -O);
            let U = Math.sqrt(K * K + q * q + O * O)
              , B = 0
              , N = 0
              , F = 0;
            if (U > 1e-9) {
                let t = 2 * (0,
                o.atan2)(U, A) / U
                  , e = Math.sqrt((B = 9 * K * t) * B + (N = 4.5 * q * t) * N + (F = 9 * O * t) * F)
                  , i = this.limits.maxRate * p(T / 9.81, .4, 1);
                e > i && (B *= i / e,
                N *= i / e,
                F *= i / e)
            }
            h.pitch = f(B * l, this.rates.pitch),
            h.yaw = f(-N * l, this.rates.yaw),
            h.roll = f(-F * l, this.rates.roll);
            let Y = u(t.rotation, 0, 1, 0, this.up)
              , L = T * (Y.x * b + Y.y * S + Y.z * x);
            return h.throttle = L > 0 ? p(this.hover * Math.sqrt(L / 9.81), 0, 1) : 0,
            h
        }
        camera(t, e) {
            var i, s;
            return i = t.rotation,
            s = this.sinTilt,
            u(i, 0, s, -this.cosTilt, e)
        }
    }
    function p(t, e, i) {
        return t < e ? e : t > i ? i : t
    }
    let g = {
        easy: {
            reactionTicks: 24,
            anticipation: .4,
            aimErrorDeg: 6,
            fireConeDeg: 9,
            aimWeight: .55,
            maxTiltDeg: 40,
            maxRateDeg: 280,
            speed: .65,
            evade: .45,
            turnToFight: .1
        },
        normal: {
            reactionTicks: 15,
            anticipation: .7,
            aimErrorDeg: 3.5,
            fireConeDeg: 7,
            aimWeight: .75,
            maxTiltDeg: 50,
            maxRateDeg: 420,
            speed: .85,
            evade: .75,
            turnToFight: .35
        },
        hard: {
            reactionTicks: 9,
            anticipation: .9,
            aimErrorDeg: 1.8,
            fireConeDeg: 5,
            aimWeight: .9,
            maxTiltDeg: 58,
            maxRateDeg: 560,
            speed: 1,
            evade: .95,
            turnToFight: .6
        }
    }
      , k = {
        whoop: 8,
        cinewhoop: 11,
        freestyle: 17,
        racer: 20,
        "long-range": 15
    }
      , y = {
        whoop: .2,
        cinewhoop: .3,
        freestyle: .35,
        racer: .35,
        "long-range": .4
    }
      , w = {
        whoop: .36,
        cinewhoop: .36,
        freestyle: .21,
        racer: .17,
        "long-range": .32
    }
      , T = (0,
    o.cos)(.57)
      , b = (0,
    o.sin)(.57);
    class S {
        skill;
        intent = {
            mode: "launch",
            target: null,
            fire: !1,
            guarded: !1,
            velocity: {
                x: 0,
                y: 0,
                z: 0
            },
            aimError: 0,
            lineDenied: !1,
            aimDenied: !1,
            threatened: !1,
            repositioning: !1
        };
        flight;
        cruise;
        clearance;
        radius;
        brake;
        sinTilt;
        cosTilt;
        fireCos;
        aimError;
        cx;
        cy;
        cz;
        cosYaw;
        sinYaw;
        halfX;
        halfZ;
        height;
        map;
        rng;
        seen;
        seenCount;
        seenHealth;
        lastHealth = 0;
        lastLife = -1;
        attackedUntil = 0;
        quietTicks = 0;
        targetVisible = !1;
        fightUntil = 0;
        seenHead = -1;
        seenTicks = 0;
        mode = "launch";
        target = null;
        thinkAt = 0;
        modeUntil = 0;
        launchFrom = 0;
        wanderX = 0;
        wanderY = 0;
        wanderZ = 0;
        wanderUntil = 0;
        jinkSign = 1;
        jinkClimb = 1;
        jinkUntil = 0;
        orbitSign = 1;
        evades = 0;
        armedBefore = !1;
        stillTicks = 0;
        freeTicks = 0;
        stalls = 0;
        dropUntil = 0;
        respawnAt = 0;
        aimYaw = 0;
        aimPitch = 0;
        detourUntil = 0;
        detourX = 0;
        detourY = 0;
        detourZ = 0;
        slowTicks = 0;
        gap = 1 / 0;
        want = {
            x: 0,
            y: 0,
            z: 0
        };
        heading = {
            x: 0,
            y: 0,
            z: -1
        };
        camera = {
            x: 0,
            y: 0,
            z: -1
        };
        aimDir = {
            x: 0,
            y: 0,
            z: -1
        };
        aim = {
            direction: this.aimDir,
            weight: 0
        };
        normal = {
            x: 0,
            y: 0,
            z: 0
        };
        ray = {
            x: 0,
            y: 0,
            z: 0
        };
        origin = {
            x: 0,
            y: 0,
            z: 0
        };
        sticks = {
            throttle: 0,
            roll: 0,
            pitch: 0,
            yaw: 0
        };
        other = {
            x: 0,
            y: 0,
            z: 0
        };
        constructor(t) {
            const e = this.skill = g[t.difficulty]
              , i = (0,
            s.muzzleOf)(t.drone).tilt;
            this.sinTilt = (0,
            o.sin)(i),
            this.cosTilt = (0,
            o.cos)(i);
            const n = e.maxTiltDeg * Math.PI / 180;
            this.flight = new m(h.rates,{
                maxTilt: n,
                maxRate: e.maxRateDeg * Math.PI / 180
            },i,w[t.drone]),
            this.cruise = k[t.drone] * e.speed,
            this.clearance = 1 + .06 * k[t.drone],
            this.radius = y[t.drone],
            this.brake = 5.395500000000001 * (0,
            o.sin)(n) / (0,
            o.cos)(n),
            this.fireCos = (0,
            o.cos)(e.fireConeDeg * Math.PI / 180),
            this.aimError = e.aimErrorDeg * Math.PI / 180;
            const {position: a, yaw: r, size: l} = t.bounds;
            this.cx = a[0],
            this.cy = a[1],
            this.cz = a[2],
            this.cosYaw = (0,
            o.cos)(r),
            this.sinYaw = (0,
            o.sin)(r),
            this.halfX = l[0] / 2,
            this.height = l[1],
            this.halfZ = l[2] / 2;
            const d = t.map;
            this.map = d ? {
                minX: d.position[0] - d.size[0] / 2,
                maxX: d.position[0] + d.size[0] / 2,
                minZ: d.position[2] - d.size[2] / 2,
                maxZ: d.position[2] + d.size[2] / 2,
                top: d.position[1] + d.size[1]
            } : null,
            this.rng = (0x9e3779b9 ^ t.seed) >>> 0 || 1,
            this.seen = new Float64Array((e.reactionTicks + 1) * 192),
            this.seenCount = new Int32Array(e.reactionTicks + 1),
            this.seenHealth = new Float64Array((e.reactionTicks + 1) * 2)
        }
        decide(t) {
            let e = t.self;
            if (this.intent.fire = !1,
            this.intent.lineDenied = this.intent.aimDenied = this.intent.repositioning = !1,
            !e || !e.flying)
                return this.armedBefore = !1,
                {
                    throttle: 0,
                    roll: 0,
                    pitch: 0,
                    yaw: 0,
                    arm: e?.armed ?? !1
                };
            this.see(t);
            let i = 2 * this.late()
              , s = this.seenHealth[i]
              , h = this.seenHealth[i + 1];
            if (s === this.lastLife && h < this.lastHealth && (this.attackedUntil = t.tick + 120),
            s !== this.lastLife && (this.attackedUntil = 0),
            this.lastLife = s,
            this.lastHealth = h,
            !e.armed)
                return this.armedBefore = !1,
                {
                    throttle: 0,
                    roll: 0,
                    pitch: 0,
                    yaw: 0,
                    arm: !0
                };
            if (t.waiting)
                return this.armedBefore = !1,
                this.stillTicks = 0,
                {
                    throttle: 0,
                    roll: 0,
                    pitch: 0,
                    yaw: 0,
                    arm: !0
                };
            this.armedBefore || (this.armedBefore = !0,
            this.setMode("launch", t.tick),
            this.launchFrom = e.position.y,
            this.flight.reset());
            let a = this.unstick(t.tick, e);
            t.tick >= this.thinkAt && this.think(t, e);
            let r = this.want;
            this.plan(t, e, r),
            this.intent.guarded = this.guard(t, e, r),
            this.intent.velocity.x = r.x,
            this.intent.velocity.y = r.y,
            this.intent.velocity.z = r.z;
            let o = this.aimAt(t, e);
            this.quietTicks = this.intent.fire || "chase" !== this.mode ? 0 : this.quietTicks + 1,
            this.quietTicks >= 180 && t.tick >= this.detourUntil && (this.reposition(t, e),
            this.quietTicks = 0),
            this.intent.repositioning = t.tick < this.detourUntil;
            let l = this.flight.track(e, r, this.heading, o, n.TICK_SECONDS, this.sticks);
            t.tick < this.dropUntil && (l.throttle = 0);
            let d = this.intent.fire;
            return {
                throttle: l.throttle,
                roll: l.roll,
                pitch: l.pitch,
                yaw: l.yaw,
                arm: !0,
                interact: d,
                commands: a
            }
        }
        see(t) {
            let e = this.seenCount.length;
            this.seenHead = (this.seenHead + 1) % e,
            this.seenTicks++,
            this.seenHealth[2 * this.seenHead] = t.self?.combat?.life ?? -1,
            this.seenHealth[2 * this.seenHead + 1] = t.self?.combat?.hp ?? 0;
            let i = 0
              , s = 16 * this.seenHead * 12
              , n = this.seen;
            for (let e of t.others) {
                var h, a;
                if (16 === i)
                    break;
                let t = s + 12 * i
                  , r = e.tilt ?? 0;
                h = e.rotation,
                a = (0,
                o.sin)(r),
                u(h, 0, a, -(0,
                o.cos)(r), this.other),
                n[t] = e.seat,
                n[t + 1] = e.team,
                n[t + 2] = e.flying && e.armed ? 1 : 0,
                n[t + 3] = e.position.x,
                n[t + 4] = e.position.y,
                n[t + 5] = e.position.z,
                n[t + 6] = e.velocity.x,
                n[t + 7] = e.velocity.y,
                n[t + 8] = e.velocity.z,
                n[t + 9] = this.other.x,
                n[t + 10] = this.other.y,
                n[t + 11] = this.other.z,
                i++
            }
            this.seenCount[this.seenHead] = i
        }
        late() {
            let t = this.seenCount.length
              , e = Math.min(this.skill.reactionTicks, this.seenTicks - 1);
            return (this.seenHead - e + t) % t
        }
        perceived(t) {
            let e = this.late()
              , i = this.seenCount[e]
              , s = 16 * e * 12;
            for (let e = 0; e < i; e++)
                if (this.seen[s + 12 * e] === t)
                    return s + 12 * e;
            return -1
        }
        judge(t, e) {
            let i = this.seen
              , s = this.skill.reactionTicks * n.TICK_SECONDS * this.skill.anticipation;
            return e.x = i[t + 3] + i[t + 6] * s,
            e.y = i[t + 4] + i[t + 7] * s,
            e.z = i[t + 5] + i[t + 8] * s,
            e
        }
        think(t, e) {
            var i, s;
            let n = t.tick;
            if (this.thinkAt = n + Math.max(4, this.skill.reactionTicks >> 1),
            "launch" === this.mode && n < this.modeUntil && e.position.y < this.launchFrom + 2.5)
                return;
            let h = this.late()
              , a = this.seenCount[h]
              , r = 16 * h * 12
              , o = this.seen
              , l = e.position
              , d = (i = e.rotation,
            s = this.sinTilt,
            u(i, 0, s, -this.cosTilt, this.camera))
              , c = -1
              , f = 1 / 0
              , m = !1
              , p = -1
              , g = 1 / 0
              , k = 0;
            for (let i = 0; i < a; i++) {
                let s = r + 12 * i;
                if (o[s + 1] === t.team || !o[s + 2])
                    continue;
                let h = o[s + 3] - l.x
                  , a = o[s + 4] - l.y
                  , u = o[s + 5] - l.z
                  , y = Math.sqrt(h * h + a * a + u * u) || 1e-6;
                if (!this.inside(o[s + 3], o[s + 4], o[s + 5], 2))
                    continue;
                let w = -(o[s + 9] * h + o[s + 10] * a + o[s + 11] * u) / y
                  , T = (d.x * h + d.y * a + d.z * u) / y
                  , b = this.clearLine(t, e, h / y, a / y, u / y, y);
                b && y < 40 && (w > .95 && T < .3 || n < this.attackedUntil) && y < g && (p = i,
                g = y,
                k = T);
                let S = y + 12 * (1 - T) + 80 * !b - 20 * (o[s] === this.target && this.quietTicks < 120);
                S < f && (f = S,
                c = i,
                m = b),
                o[s] === this.target && (this.targetVisible = b)
            }
            if (this.intent.threatened = p >= 0 || n < this.attackedUntil,
            "evade" !== this.mode || !(n < this.modeUntil)) {
                if (p >= 0 && n >= this.fightUntil) {
                    let t = o[r + 12 * p];
                    if (k > .3 || this.evades >= 2 || this.evades > 0 && this.random() < this.skill.turnToFight) {
                        this.evades = 0,
                        this.setMode("chase", n, t),
                        this.fightUntil = n + 120,
                        this.orbitSign = .5 > this.random() ? -1 : 1;
                        return
                    }
                    if (this.random() < this.skill.evade) {
                        this.evades++,
                        this.setMode("evade", n, t, 70 + Math.floor(90 * this.random()));
                        return
                    }
                } else
                    "evade" !== this.mode && (this.evades = 0);
                if (c >= 0) {
                    let t = o[r + 12 * c];
                    ("chase" !== this.mode || this.target !== t) && (this.orbitSign = .5 > this.random() ? -1 : 1,
                    this.setMode("chase", n, t)),
                    this.targetVisible = m;
                    return
                }
                "patrol" !== this.mode && this.setMode("patrol", n)
            }
        }
        setMode(t, e, i=null, s=0) {
            this.mode = this.intent.mode = t,
            this.target = this.intent.target = i,
            this.modeUntil = e + ("launch" === t ? 50 : s),
            "patrol" === t && (this.wanderUntil = 0),
            "evade" === t && (this.jinkUntil = 0)
        }
        plan(t, e, i) {
            var s, n, h, a, r, o, l, d, c, u, f, m;
            let p = t.tick
              , g = e.position
              , k = e.velocity
              , y = this.cruise
              , w = this.heading;
            if (Math.sqrt(k.x * k.x + k.z * k.z) > 1 && (w.x = k.x,
            w.y = 0,
            w.z = k.z),
            p < this.detourUntil) {
                i.x = this.detourX,
                i.y = this.detourY,
                i.z = this.detourZ;
                return
            }
            switch (this.mode) {
            case "launch":
                i.x = 0,
                i.z = 0,
                i.y = 2.5,
                (p >= this.modeUntil || g.y > this.launchFrom + 3) && (this.thinkAt = p);
                return;
            case "patrol":
                let T, b, S, v, E, M, z, P;
                (p >= this.wanderUntil || 3 > (s = g,
                n = this.wanderX,
                h = this.wanderY,
                a = this.wanderZ,
                T = n - s.x,
                b = h - s.y,
                Math.sqrt(T * T + b * b + (S = a - s.z) * S))) && this.wander(p),
                r = g,
                o = this.wanderX,
                l = this.wanderY,
                d = this.wanderZ,
                c = .6 * y,
                u = i,
                v = o - r.x,
                P = Math.min(c, .8 * (z = Math.sqrt(v * v + (E = l - r.y) * E + (M = d - r.z) * M) || 1e-6)),
                u.x = v / z * P,
                u.y = E / z * P,
                u.z = M / z * P;
                return;
            case "chase":
                {
                    let s, n = null === this.target ? -1 : this.perceived(this.target);
                    if (n < 0) {
                        this.setMode("patrol", p),
                        this.plan(t, e, i);
                        return
                    }
                    let h = this.judge(n, this.other)
                      , a = this.seen
                      , r = a[n + 6]
                      , o = a[n + 7]
                      , l = a[n + 8]
                      , d = h.x - g.x
                      , c = h.y - g.y
                      , u = h.z - g.z
                      , k = Math.sqrt(d * d + c * c + u * u) || 1e-6
                      , T = Math.min(1, k / Math.max(y, 1))
                      , b = h.x + r * T - g.x
                      , S = h.z + l * T - g.z
                      , v = Math.sqrt(b * b + S * S) || 1e-6
                      , E = this.targetVisible ? this.standoff() : 2
                      , M = x(1.2 * (v - E), -.6 * y, y);
                    if (i.x = .8 * r + b / v * M,
                    i.y = .8 * o + x(1.5 * (h.y + o * T + 3 * !this.targetVisible - g.y), -.5 * y, .5 * y),
                    i.z = .8 * l + S / v * M,
                    !this.targetVisible || k < 2 * E && p % 180 < 60) {
                        let t = Math.sqrt(d * d + u * u) || 1e-6
                          , e = this.targetVisible ? .15 : .55;
                        i.x += -u / t * this.orbitSign * e * y,
                        i.z += d / t * this.orbitSign * e * y
                    }
                    f = i,
                    m = y,
                    (s = Math.sqrt(f.x * f.x + f.y * f.y + f.z * f.z)) > m && (f.x *= m / s,
                    f.y *= m / s,
                    f.z *= m / s),
                    w.x = d,
                    w.y = 0,
                    w.z = u;
                    return
                }
            case "evade":
                {
                    let t = null === this.target ? -1 : this.perceived(this.target);
                    p >= this.jinkUntil && (this.jinkUntil = p + 25 + Math.floor(45 * this.random()),
                    this.jinkSign = .5 > this.random() ? -1 : 1,
                    this.jinkClimb = .5 > this.random() ? -1 : 1);
                    let e = this.heading.x
                      , s = this.heading.z;
                    if (t >= 0) {
                        let i = this.judge(t, this.other);
                        e = g.x - i.x,
                        s = g.z - i.z
                    }
                    let n = Math.sqrt(e * e + s * s) || 1
                      , h = .5 * (e /= n) - (s /= n) * this.jinkSign * .85
                      , a = .5 * s + e * this.jinkSign * .85;
                    i.x = h * y,
                    i.z = a * y,
                    i.y = .3 * this.jinkClimb * y,
                    p >= this.modeUntil && (this.thinkAt = p);
                    return
                }
            }
        }
        wander(t) {
            let e = (2 * this.random() - 1) * this.halfX * .6
              , i = (2 * this.random() - 1) * this.halfZ * .6
              , s = Math.min(this.height - 3, 12)
              , n = Math.min(3, s)
              , h = n + this.random() * Math.max(0, s - n);
            this.wanderX = this.cx + e * this.cosYaw + i * this.sinYaw,
            this.wanderZ = this.cz - e * this.sinYaw + i * this.cosYaw,
            this.wanderY = this.cy + h;
            let a = this.map;
            a && (this.wanderX = x(this.wanderX, a.minX + 3, a.maxX - 3),
            this.wanderZ = x(this.wanderZ, a.minZ + 3, a.maxZ - 3),
            this.wanderY = Math.min(this.wanderY, a.top - 3)),
            this.wanderUntil = t + 360
        }
        standoff() {
            return x(.35 * Math.min(this.halfX, this.halfZ), 6, 16)
        }
        guard(t, e, i) {
            let s = e.velocity
              , n = t.tick
              , h = this.bound(e, i)
              , a = Math.sqrt(s.x * s.x + s.y * s.y + s.z * s.z)
              , r = Math.sqrt(i.x * i.x + i.y * i.y + i.z * i.z)
              , o = t => t * t / (2 * this.brake) + this.clearance + .4 * t + 2;
            if (a > .5) {
                h = this.look(t, e, i, s.x / a, s.y / a, s.z / a, o(a)) || h;
                let n = Math.sqrt(s.x * s.x + s.z * s.z);
                if (n > .2 * a) {
                    let r = s.x / n
                      , l = s.z / n
                      , d = .6 * o(a);
                    h = this.look(t, e, i, r * T + l * b, 0, -r * b + l * T, d) || h,
                    h = this.look(t, e, i, r * T - l * b, 0, r * b + l * T, d) || h
                }
            }
            r > .5 && (h = this.look(t, e, i, i.x / r, i.y / r, i.z / r, o(Math.max(r, a))) || h),
            h = this.look(t, e, i, 0, -1, 0, Math.max(4, 1 + s.y * s.y / 9 + 1.4)) || h;
            let l = this.gap < 1.7;
            return (i.y > .3 || s.y > .3 || l) && (h = this.look(t, e, i, 0, 1, 0, 3 + s.y * s.y / 7, !l) || h),
            (h = this.bound(e, i) || h) && a < 1 ? this.slowTicks++ : this.slowTicks = 0,
            this.slowTicks > 45 && n >= this.detourUntil && this.detour(n, e),
            h
        }
        bound(t, e) {
            let i = t.position
              , s = t.velocity
              , n = this.cosYaw
              , h = this.sinYaw
              , a = i.x - this.cx
              , r = i.z - this.cz
              , o = a * n - r * h
              , l = a * h + r * n
              , d = i.y - this.cy
              , c = this.clearance + 1
              , u = this.brakeFirst(e, s, n, -h, this.halfX - o, c);
            u = this.brakeFirst(e, s, -n, h, this.halfX + o, c) || u,
            u = this.brakeFirst(e, s, h, n, this.halfZ - l, c) || u,
            u = this.brakeFirst(e, s, -h, -n, this.halfZ + l, c) || u,
            u = this.limit(e, s, n, 0, -h, this.halfX - o, c) || u,
            u = this.limit(e, s, -n, 0, h, this.halfX + o, c) || u,
            u = this.limit(e, s, h, 0, n, this.halfZ - l, c) || u,
            u = this.limit(e, s, -h, 0, -n, this.halfZ + l, c) || u,
            u = this.limit(e, s, 0, 1, 0, this.height - d, 1.7) || u,
            u = this.limit(e, s, 0, -1, 0, d, 1.4) || u;
            let f = this.map;
            return f ? (u = this.brakeFirst(e, s, 1, 0, f.maxX - i.x, c) || u,
            u = this.brakeFirst(e, s, -1, 0, i.x - f.minX, c) || u,
            u = this.brakeFirst(e, s, 0, 1, f.maxZ - i.z, c) || u,
            u = this.brakeFirst(e, s, 0, -1, i.z - f.minZ, c) || u,
            u = this.limit(e, s, 1, 0, 0, f.maxX - i.x, c) || u,
            u = this.limit(e, s, -1, 0, 0, i.x - f.minX, c) || u,
            u = this.limit(e, s, 0, 0, 1, f.maxZ - i.z, c) || u,
            u = this.limit(e, s, 0, 0, -1, i.z - f.minZ, c) || u,
            this.limit(e, s, 0, 1, 0, f.top - i.y, 1.7) || u) : u
        }
        brakeFirst(t, e, i, s, n, h) {
            let a = e.x * i + e.z * s;
            if (a <= 0)
                return !1;
            let r = n - h - .4 * a;
            if (r >= 0 && a * a <= 2 * this.brake * r)
                return !1;
            let o = s * t.x - i * t.z - (s * e.x - i * e.z);
            return 0 !== o && (t.x -= s * o,
            t.z += i * o,
            !0)
        }
        detour(t, e) {
            this.slowTicks = 0;
            let i = (2 * this.random() - 1) * 1.05
              , s = (0,
            o.cos)(i)
              , n = (0,
            o.sin)(i)
              , h = this.cx - e.position.x
              , a = this.cz - e.position.z
              , r = Math.sqrt(h * h + a * a);
            r > .001 ? (h /= r,
            a /= r) : (h = 1,
            a = 0);
            let l = .6 * this.cruise;
            this.detourX = (h * s + a * n) * l,
            this.detourZ = (-h * n + a * s) * l,
            this.detourY = .5,
            this.detourUntil = t + 60,
            this.wanderUntil = 0
        }
        reposition(t, e) {
            let i = null === this.target ? -1 : this.perceived(this.target);
            if (i < 0)
                return;
            let s = this.judge(i, this.other)
              , n = e.position
              , h = s.x - n.x
              , a = s.z - n.z
              , r = Math.sqrt(h * h + a * a) || 1
              , o = Math.min(8, this.standoff())
              , l = -1 / 0
              , d = 0
              , c = 0
              , u = 0;
            for (let e of [this.orbitSign, -this.orbitSign]) {
                let i = -a / r * e
                  , f = h / r * e
                  , m = {
                    x: n.x + i * o,
                    y: n.y + 2,
                    z: n.z + f * o
                };
                if (!this.inside(m.x, m.y, m.z, -this.clearance))
                    continue;
                let p = Math.sqrt(o * o + 4);
                if (this.ray.x = i * o / p,
                this.ray.y = 2 / p,
                this.ray.z = f * o / p,
                t.probe(n, this.ray, p, void 0, this.radius) < p)
                    continue;
                let g = s.x - m.x
                  , k = s.y - m.y
                  , y = s.z - m.z
                  , w = Math.sqrt(g * g + k * k + y * y) || 1;
                this.ray.x = g / w,
                this.ray.y = k / w,
                this.ray.z = y / w;
                let T = t.probe(m, this.ray, w - .3);
                T > l && (l = T,
                d = i,
                c = .8,
                u = f)
            }
            l === -1 / 0 ? this.detour(t.tick, e) : (this.detourX = d * this.cruise * .6,
            this.detourY = c,
            this.detourZ = u * this.cruise * .6,
            this.detourUntil = t.tick + 90)
        }
        look(t, e, i, s, n, h, a, r=!0) {
            this.gap = 1 / 0;
            let o = this.ray;
            o.x = s,
            o.y = n,
            o.z = h;
            let l = this.origin;
            l.x = e.position.x,
            l.y = e.position.y,
            l.z = e.position.z;
            let d = t.probe(l, o, a, this.normal, this.radius);
            if (!(d < a))
                return !1;
            let c = this.normal
              , u = -(s * c.x + n * c.y + h * c.z);
            if (u <= .05)
                return !1;
            this.gap = d * u;
            let f = n < -.9 ? 1.4 : n > .9 ? 1.2 : this.clearance;
            return this.limit(i, e.velocity, -c.x, -c.y, -c.z, this.gap, f, r)
        }
        limit(t, e, i, s, n, h, a, r=!0) {
            let o = h - a - .4 * Math.max(0, e.x * i + e.y * s + e.z * n)
              , l = s < 0 ? -s : s
              , d = this.brake * (1 - l) + (s > 0 ? 3.5 : 4.5) * l
              , c = o >= 0 ? Math.sqrt(2 * d * o) : r ? 1.5 * o : 0
              , u = t.x * i + t.y * s + t.z * n;
            if (u <= c)
                return !1;
            let f = u - c;
            return t.x -= i * f,
            t.y -= s * f,
            t.z -= n * f,
            !0
        }
        inside(t, e, i, s) {
            let n = t - this.cx
              , h = i - this.cz
              , a = n * this.cosYaw - h * this.sinYaw
              , r = n * this.sinYaw + h * this.cosYaw
              , o = e - this.cy;
            return Math.abs(a) <= this.halfX + s && Math.abs(r) <= this.halfZ + s && o >= -s && o <= this.height + s
        }
        aimAt(t, e) {
            var i, s;
            if ("chase" !== this.mode || null === this.target)
                return null;
            let n = this.perceived(this.target);
            if (n < 0)
                return null;
            let h = this.judge(n, this.other)
              , a = this.seen
              , r = e.position
              , o = h.x - r.x
              , l = h.y - r.y
              , d = h.z - r.z
              , c = Math.sqrt(o * o + l * l + d * d) || 1e-6;
            if (c > 108)
                return null;
            let f = c / 200
              , m = o + a[n + 6] * f
              , p = l + a[n + 7] * f
              , g = d + a[n + 8] * f
              , k = Math.sqrt(m * m + p * p + g * g) || 1e-6;
            m /= k,
            p /= k,
            g /= k,
            (3 & t.tick) == 0 && (this.aimYaw = .94 * this.aimYaw + this.gauss() * this.aimError * .35,
            this.aimPitch = .94 * this.aimPitch + this.gauss() * this.aimError * .35,
            this.intent.aimError = Math.sqrt(this.aimYaw * this.aimYaw + this.aimPitch * this.aimPitch));
            let y = -g
              , w = m
              , T = Math.sqrt(y * y + w * w);
            if (T > .001) {
                y /= T;
                let t = -(w /= T) * p
                  , e = w * m - y * g
                  , i = y * p;
                m += y * this.aimYaw + t * this.aimPitch,
                p += e * this.aimPitch,
                g += w * this.aimYaw + i * this.aimPitch,
                k = Math.sqrt(m * m + p * p + g * g),
                m /= k,
                p /= k,
                g /= k
            }
            let b = this.aim;
            b.direction.x = m,
            b.direction.y = p,
            b.direction.z = g;
            let S = (i = e.rotation,
            s = this.sinTilt,
            u(i, 0, s, -this.cosTilt, this.camera))
              , v = S.x * m + S.y * p + S.z * g
              , E = this.targetVisible && c < 2 * this.standoff() && t.tick % 180 >= 60 ? 1 : this.skill.aimWeight;
            return b.weight = this.intent.guarded ? 0 : E * x((v - .2) / .5, 0, 1),
            this.intent.aimDenied = v <= this.fireCos,
            this.intent.lineDenied = !this.clearLine(t, e, o / c, l / c, d / c, c),
            this.intent.aimDenied || this.intent.lineDenied || !(c < 90) || (this.intent.fire = !0),
            b.weight > 0 ? b : null
        }
        clearLine(t, e, i, s, n, h) {
            let a = this.ray;
            a.x = i,
            a.y = s,
            a.z = n;
            let r = this.origin;
            return r.x = e.position.x,
            r.y = e.position.y,
            r.z = e.position.z,
            !(t.probe(r, a, h - .3) < 1 / 0)
        }
        unstick(t, e) {
            let i = e.rotation
              , s = e.velocity
              , n = 1 - 2 * (i.x * i.x + i.z * i.z)
              , h = s.x * s.x + s.y * s.y + s.z * s.z;
            if (h > 2.25 ? ++this.freeTicks > 120 && (this.stalls = 0) : this.freeTicks = 0,
            h < .09 && t >= this.dropUntil ? this.stillTicks++ : this.stillTicks = 0,
            this.stillTicks < 20)
                return;
            this.stillTicks = 0;
            let a = n < -.2 ? 4 : ++this.stalls;
            if (a >= 4) {
                if (t < this.respawnAt)
                    return;
                return this.stalls = 0,
                this.respawnAt = t + 180,
                this.armedBefore = !1,
                [{
                    type: "respawn"
                }]
            }
            1 === a ? (this.setMode("launch", t),
            this.launchFrom = e.position.y) : (this.dropUntil = t + 12,
            this.detour(t, e))
        }
        random() {
            let t = this.rng;
            return t ^= t << 13,
            t >>>= 0,
            t ^= t >>> 17,
            t ^= t << 5,
            t >>>= 0,
            this.rng = t || 1,
            t / 0x100000000
        }
        gauss() {
            return (this.random() + this.random() + this.random() - 1.5) * 2
        }
    }
    function x(t, e, i) {
        return t < e ? e : t > i ? i : t
    }
    t.s(["ArenaBot", 0, S, "mapBounds", 0, function(t) {
        let i = (0,
        e.wallDistances)(t)
          , s = Math.max(10, i.negativeX + i.positiveX - 8)
          , n = Math.max(10, i.negativeZ + i.positiveZ - 8);
        return {
            position: [(i.positiveX - i.negativeX) / 2, 0, (i.positiveZ - i.negativeZ) / 2],
            yaw: 0,
            size: [s, Math.max(3, t.ceiling - 4), n]
        }
    }
    ], 244e3)
}
, 311560, 283221, 705758, 962216, 66031, t => {
    "use strict";
    var e = t.i(247800)
      , i = t.i(121645)
      , s = t.i(739011)
      , n = t.i(945999);
    let h = e.TICK_RATE * e.STEPS_PER_TICK
      , a = 8 * h
      , r = h / 10
      , o = 10 * h
      , l = 5 * h
      , d = (t, i) => Math.max(t, i * e.STEPS_PER_TICK - n.COMBAT_CAP);
    class c {
        health;
        hp;
        latest;
        counted;
        ko;
        down;
        constructor(t) {
            this.health = t,
            this.latest = -1 / 0,
            this.counted = [],
            this.ko = null,
            this.down = !1,
            this.hp = t
        }
        hpAt(t) {
            return t > this.latest && this.latest !== -1 / 0 ? Math.min(this.health, this.hp + Math.floor(Math.max(0, t - this.latest - a) / r)) : this.hp
        }
    }
    let u = t => "hit" === t.kind ? t.hit.victim : t.ko.seat
      , f = t => "hit" === t.kind ? t.hit.life : t.ko.life
      , m = t => "hit" === t.kind ? t.hit.hit : t.ko.tick * e.STEPS_PER_TICK;
    function p(t, e) {
        if (t.key !== e.key)
            return t.key - e.key;
        let i = m(t)
          , s = m(e);
        if (i !== s)
            return i - s;
        let n = "hit" === t.kind ? t.hit.shot : null
          , h = "hit" === e.kind ? e.hit.shot : null;
        return n && h ? n.seat - h.seat || n.epoch - h.epoch || n.life - h.life || n.seq - h.seq : !!n - !!h
    }
    class g {
        batteries;
        cutoff = 1 / 0;
        teams;
        health;
        guard;
        lives = new Map;
        pending = [];
        candidates = 0;
        ended = new Map;
        seq = 0;
        constructor(t) {
            this.teams = t.teams,
            this.health = t.health ?? ( () => i.STANDARD_HEALTH),
            this.guard = t.guardSteps ?? s.STANDARD_GUN.guardSteps,
            this.batteries = new Map([...new Set(t.teams.values())].map(e => [e, t.batteries ?? 20]))
        }
        teamOf(t) {
            return this.teams.get(t) ?? -1
        }
        enemiesOf(t) {
            let e = this.teamOf(t);
            return [...this.teams].filter( ([,t]) => t !== e).map( ([t]) => t)
        }
        submit(t) {
            if (this.teamOf(t.victim) !== this.teamOf(t.shot.seat)) {
                if (this.candidates >= 644)
                    throw Error("a match would hold more than 644 candidates awaiting their commit");
                this.candidates++,
                this.pending.push({
                    kind: "hit",
                    hit: t,
                    key: d(t.hit, t.shot.proof)
                })
            }
        }
        selfKo(t) {
            this.pending.push({
                kind: "selfKo",
                ko: t,
                key: d(t.tick * e.STEPS_PER_TICK, t.proof)
            })
        }
        standDown(t) {
            this.pending.push({
                kind: "down",
                ko: t,
                key: t.tick * e.STEPS_PER_TICK
            })
        }
        carry(t, e, i) {
            let s = this.lifeOf(t, e)
              , n = `${t}:${i}`;
            if (!s.down || this.lives.has(n))
                return;
            let h = new c(this.health(t, i));
            h.hp = Math.min(h.health, s.hp),
            h.latest = s.latest,
            this.lives.set(n, h)
        }
        endEpoch(t, e, i) {
            let s = `${t}:${e}`;
            this.ended.has(s) || this.ended.set(s, i)
        }
        get waiting() {
            return this.pending.length
        }
        get earliestPending() {
            let t = 1 / 0;
            for (let e of this.pending)
                e.key < t && (t = e.key);
            return t
        }
        life(t, e) {
            let i = this.lifeOf(t, e);
            return {
                hp: i.hp,
                latest: i.latest,
                ko: i.ko,
                down: i.down,
                health: i.health
            }
        }
        hpAt(t, e, i) {
            return this.lifeOf(t, e).hpAt(i)
        }
        commit(t) {
            let e = [];
            for (let i = !0; i; ) {
                i = !1,
                this.pending.sort(p);
                for (let s = 0; s < this.pending.length; s++) {
                    let n = this.pending[s];
                    if (this.ready(n, s, t)) {
                        this.pending.splice(s, 1),
                        "hit" === n.kind && this.candidates--,
                        e.push(this.apply(n)),
                        i = !0;
                        break
                    }
                }
            }
            return e
        }
        holds(t) {
            let i = []
              , s = new Set;
            for (let n of [...this.pending].sort(p)) {
                let h = u(n)
                  , a = f(n)
                  , r = `${h}:${a}`;
                if (s.has(r))
                    continue;
                s.add(r);
                let o = this.lives.get(r)?.ko;
                if (!o || !(o.key <= n.key))
                    if (t.known(h, a, n.key, !1)) {
                        if ("hit" === n.kind) {
                            let s = n.hit.shot
                              , h = s.tick * e.STEPS_PER_TICK;
                            this.lives.get(`${s.seat}:${s.life}`)?.ko || t.known(s.seat, s.life, h, !0) || i.push({
                                seat: s.seat,
                                life: s.life,
                                x: h,
                                inclusive: !0
                            })
                        }
                    } else
                        i.push({
                            seat: h,
                            life: a,
                            x: n.key,
                            inclusive: !1
                        })
            }
            return i
        }
        lifeOf(t, e) {
            let i = `${t}:${e}`
              , s = this.lives.get(i);
            return s || this.lives.set(i, s = new c(this.health(t, e))),
            s
        }
        ready(t, e, i) {
            let s = u(t)
              , n = f(t)
              , h = this.lifeOf(s, n).ko;
            if (h && h.key <= t.key)
                return !0;
            for (let t = 0; t < e; t++) {
                let e = this.pending[t];
                if (u(e) === s && f(e) === n)
                    return !1
            }
            return !!i.known(s, n, t.key, !1) && ("hit" !== t.kind || this.shooterDecided(t.hit.shot, i))
        }
        shooterDecided(t, i) {
            let s = t.tick * e.STEPS_PER_TICK
              , n = this.lifeOf(t.seat, t.life);
            if (n.ko)
                return !0;
            let h = 0
              , a = !1;
            for (let e of this.pending)
                if (!(u(e) !== t.seat || f(e) !== t.life || e.key > s || m(e) >= s)) {
                    if (a = !0,
                    "hit" !== e.kind)
                        return !1;
                    h += e.hit.damage
                }
            return !!(!a && i.known(t.seat, t.life, s, !0)) || n.hp - h - i.unknownDamage(t.seat, t.life, s) >= 1
        }
        apply(t) {
            let i = u(t)
              , s = f(t)
              , n = this.lifeOf(i, s)
              , h = m(t)
              , a = this.teamOf(i)
              , r = {
                seq: ++this.seq,
                kind: t.kind,
                outcome: "void",
                victim: i,
                life: s,
                hit: h,
                key: t.key,
                shot: "hit" === t.kind ? t.hit.shot : null,
                damage: "hit" === t.kind ? t.hit.damage : 0,
                hp: Math.max(0, n.hpAt(h)),
                ko: !1,
                credit: null,
                assists: [],
                from: "hit" === t.kind ? t.hit.from : null
            };
            if (n.ko || t.key > this.cutoff)
                return r;
            if ("down" === t.kind)
                return r.outcome = "counted",
                n.ko = {
                    hit: h,
                    key: t.key
                },
                n.down = !0,
                r;
            if ("selfKo" === t.kind) {
                if (this.endedBy(t.ko.seat, t.ko.epoch, t.ko.tick))
                    return r;
                r.outcome = "counted";
                let e = this.lastEnemy(n, h - l, h);
                return this.knockOut(n, r, h, t.key, a, e),
                r.hp = 0,
                r
            }
            let d = t.hit.shot
              , c = d.tick * e.STEPS_PER_TICK
              , p = this.lifeOf(d.seat, d.life).ko;
            if (p && p.hit < c && p.key <= c || this.endedBy(d.seat, d.epoch, d.ready))
                return r;
            if (n.counted.some(t => Math.abs(t.hit - h) < this.guard))
                return r.outcome = "guarded",
                r;
            for (r.outcome = "counted",
            n.hp = n.hpAt(h) - t.hit.damage,
            h > n.latest && (n.latest = h),
            n.counted.push({
                hit: h,
                attacker: d.seat,
                damage: t.hit.damage
            }),
            n.counted.sort( (t, e) => t.hit - e.hit); n.counted.length && n.counted[0].hit < n.latest - o; )
                n.counted.shift();
            return r.hp = Math.max(0, n.hp),
            n.hp <= 0 && this.knockOut(n, r, h, t.key, a, d.seat),
            r
        }
        knockOut(t, e, i, s, n, h) {
            t.ko = {
                hit: i,
                key: s
            },
            e.ko = !0,
            e.credit = h,
            e.assists = [...new Set(t.counted.filter(t => t.hit < i && t.hit >= i - o && t.attacker !== h).map(t => t.attacker))],
            this.batteries.set(n, Math.max(0, (this.batteries.get(n) ?? 0) - 1))
        }
        lastEnemy(t, e, i) {
            for (let s = t.counted.length - 1; s >= 0; s--) {
                let n = t.counted[s];
                if (n.hit <= i && n.hit >= e)
                    return n.attacker
            }
            return null
        }
        endedBy(t, e, i) {
            let s = this.ended.get(`${t}:${e}`);
            return void 0 !== s && i >= s
        }
    }
    t.s(["CombatLedger", 0, g, "TEAM_BATTERIES", 0, 20], 283221);
    let k = n.COMBAT_CAP / e.STEPS_PER_TICK;
    t.s(["MatchFrontier", 0, class {
        enemies;
        shot;
        clock;
        bolts;
        seats;
        constructor(t, e) {
            this.enemies = t,
            this.shot = e,
            this.clock = 0,
            this.bolts = null,
            this.seats = new Map
        }
        start(t, e, i, s) {
            let n = this.seats.get(t);
            for (let e of (n || this.seats.set(t, n = []),
            n))
                e.end > i && (e.end = i);
            n.push({
                epoch: e,
                from: i,
                end: 1 / 0,
                log: s
            })
        }
        end(t, e) {
            let i = this.seats.get(t)?.at(-1);
            i && i.end > e && (i.end = e)
        }
        log(t, e) {
            return this.seats.get(t)?.find(t => t.epoch === e)?.log ?? null
        }
        forget(t) {
            for (let e of this.seats.values())
                for (let i of e)
                    i.log?.forget(t)
        }
        epochAt(t, e) {
            let i = this.seats.get(t) ?? [];
            for (let t = i.length - 1; t >= 0; t--)
                if (i[t].from <= e && e < i[t].end)
                    return i[t]
        }
        known(t, i, s, n) {
            if (this.bolts && !this.bolts.swept(t, i, s, n))
                return !1;
            let h = n ? Math.floor(s / e.STEPS_PER_TICK) : Math.ceil(s / e.STEPS_PER_TICK) - 1
              , a = (n ? Math.floor(s / e.STEPS_PER_TICK) : Math.ceil(s / e.STEPS_PER_TICK)) + k;
            return !!this.settled(t, h, a) && this.enemies(t).every(t => this.settled(t, h, a))
        }
        unknownDamage(t, i, s) {
            let n = Math.floor(s / e.STEPS_PER_TICK)
              , h = n + k;
            if (!this.settled(t, n, h))
                return 1 / 0;
            let a = this.bolts?.damage(t, i, s) ?? 0;
            for (let e of this.enemies(t)) {
                let t = this.openTicks(e, n, h);
                if (!t)
                    continue;
                let {damage: i, intervalTicks: s} = this.shot(e);
                a += Math.ceil(t / s) * i
            }
            return a
        }
        holding(t, i, s, n) {
            let h = n ? Math.floor(s / e.STEPS_PER_TICK) : Math.ceil(s / e.STEPS_PER_TICK) - 1
              , a = (n ? Math.floor(s / e.STEPS_PER_TICK) : Math.ceil(s / e.STEPS_PER_TICK)) + k
              , r = new Set
              , o = (t, e) => {
                for (let i of this.seats.get(t) ?? []) {
                    let t = Math.min(h, i.end - 1);
                    i.log && t >= i.from && i.log.verified < t && !e(i.log, t) && r.add(i.log)
                }
            }
            ;
            for (let e of [t, ...this.enemies(t)])
                o(e, (t, e) => t.settled(e, a, this.clock));
            for (let e of this.bolts?.holding?.(t, i, s, n) ?? [])
                o(e, () => !1);
            return r
        }
        settled(t, e, i) {
            for (let s of this.seats.get(t) ?? []) {
                let t = Math.min(e, s.end - 1);
                if (!(t < s.from) && (s.log ? !s.log.settled(t, i, this.clock) : t > this.clock))
                    return !1
            }
            return !0
        }
        openTicks(t, e, i) {
            let s = 0;
            for (let n of this.seats.get(t) ?? []) {
                let t = Math.min(e, n.end - 1);
                if (!(t < n.from)) {
                    if (!n.log) {
                        s += Math.max(0, t - this.clock);
                        continue
                    }
                    n.log.settled(t, i, this.clock) || (s += t - Math.max(n.from, n.log.firstOpen) + 1)
                }
            }
            return s
        }
    }
    ], 311560);
    let y = () => ({
        tick: -1,
        epoch: 0,
        life: 0,
        segment: 0,
        flags: 0,
        position: [0, 0, 0],
        rotation: [0, 0, 0, 1],
        velocity: [0, 0, 0]
    });
    class w {
        capacity;
        numbers;
        ints;
        start;
        count;
        segments;
        provisional;
        pins;
        constructor(t) {
            this.capacity = t,
            this.start = 0,
            this.count = 0,
            this.segments = 0,
            this.provisional = 0,
            this.pins = new Map,
            this.numbers = new Float64Array(10 * t),
            this.ints = new Int32Array(5 * t)
        }
        slot(t) {
            return (this.start + t) % this.capacity
        }
        tickOf(t) {
            return this.ints[5 * this.slot(t) + 0]
        }
        find(t) {
            if (!this.count)
                return -1;
            let e = this.tickOf(this.count - 1)
              , i = this.count - 1 - (e - t);
            if (i >= 0 && i < this.count && this.tickOf(i) === t)
                return i;
            let s = 0
              , n = this.count - 1;
            for (; s <= n; ) {
                let e = s + n >> 1
                  , i = this.tickOf(e);
                if (i === t)
                    return e;
                i < t ? s = e + 1 : n = e - 1
            }
            return -1
        }
        get pinned() {
            let t = 1 / 0;
            for (let e of this.pins.keys())
                e < t && (t = e);
            return t
        }
        resized(t) {
            let e = new w(t);
            for (let t = 0; t < this.count; t++) {
                let i = this.slot(t);
                e.numbers.set(this.numbers.subarray(10 * i, (i + 1) * 10), 10 * t),
                e.ints.set(this.ints.subarray(5 * i, (i + 1) * 5), 5 * t)
            }
            for (let[t,i] of (e.count = this.count,
            e.segments = this.segments,
            e.provisional = this.provisional,
            this.pins))
                e.pins.set(t, i);
            return e
        }
    }
    function T(t, e, i) {
        let s = t.slot(e)
          , n = t.ints
          , h = t.numbers
          , a = 5 * s
          , r = 10 * s;
        i.tick = n[a + 0],
        i.epoch = n[a + 1],
        i.life = n[a + 2],
        i.segment = n[a + 3],
        i.flags = n[a + 4];
        for (let t = 0; t < 3; t++)
            i.position[t] = h[r + t];
        for (let t = 0; t < 4; t++)
            i.rotation[t] = h[r + 3 + t];
        for (let t = 0; t < 3; t++)
            i.velocity[t] = h[r + 7 + t]
    }
    t.s(["PoseHistory", 0, class {
        match;
        seats;
        constructor(t) {
            this.match = t,
            this.seats = new Map
        }
        publish(t, e) {
            let i = this.seats.get(t);
            i || this.seats.set(t, i = new w(360));
            let s = i.ints;
            if (i.count) {
                let t = i.tickOf(i.count - 1);
                if (e.tick < t)
                    return !1;
                if (e.tick === t) {
                    if (!i.provisional)
                        return !1;
                    i.count--,
                    i.provisional--
                }
            }
            let n = i.count ? 5 * i.slot(i.count - 1) : -1
              , h = n >= 0 && !e.breaks && s[n + 0] === e.tick - 1 && s[n + 2] === e.life
              , a = (i = this.room(t, i)).slot(i.count)
              , r = 5 * a;
            i.ints[r + 0] = e.tick,
            i.ints[r + 1] = e.epoch,
            i.ints[r + 2] = e.life,
            i.ints[r + 3] = h ? i.ints[5 * i.slot(i.count - 1) + 3] : ++i.segments,
            i.ints[r + 4] = !!h | 2 * !!e.alive | 4 * !!e.shielded | 8 * !!e.held;
            for (let t = 0; t < 10; t++)
                i.numbers[10 * a + t] = e.pose[e.at + t];
            return i.count++,
            i.provisional++,
            !0
        }
        room(t, e) {
            let i = e.pinned;
            for (; e.count >= 360 && e.tickOf(0) < i && e.count > e.provisional; )
                e.start = e.slot(1),
                e.count--;
            let s = e.capacity;
            if (e.count >= s) {
                if (s >= 540)
                    throw Error(`seat ${t}'s pose history would keep more than 540 records`);
                s = 540
            } else
                s > 360 && e.count < 360 && (s = 360);
            if (s === e.capacity)
                return e;
            let n = e.resized(s);
            return this.seats.set(t, n),
            n
        }
        settle(t, e, i) {
            let s = this.seats.get(t);
            if (!s)
                return;
            let n = s.ints;
            for (; s.provisional; ) {
                let t = 5 * s.slot(s.count - s.provisional)
                  , h = n[t + 0];
                if (h > e)
                    return;
                let a = n[t + 4]
                  , r = (2 & a) != 0 && (4 & a) == 0 && i(h);
                n[t + 4] = 16 | a | 32 * !!r,
                s.provisional--
            }
        }
        abandon(t) {
            let e = this.seats.get(t);
            if (e)
                for (; e.provisional; e.provisional--)
                    e.ints[5 * e.slot(e.count - e.provisional) + 4] |= 16
        }
        freeze(t, e) {
            let i = this.seats.get(t);
            if (!i?.count || (i.count -= i.provisional,
            i.provisional = 0,
            !i.count))
                return -1;
            let s = i.slot(i.count - 1)
              , n = i.ints[5 * s + 0]
              , h = Int32Array.from(i.ints.subarray(5 * s, (s + 1) * 5))
              , a = Float64Array.from(i.numbers.subarray(10 * s, (s + 1) * 10));
            for (let t = 7; t < 10; t++)
                a[t] = 0;
            let r = 17 | 38 & h[4];
            for (let s = n + 1; s <= e; s++) {
                let e = (i = this.room(t, i)).slot(i.count)
                  , n = 5 * e;
                i.ints.set(h, n),
                i.ints[n + 0] = s,
                i.ints[n + 4] = r,
                i.numbers.set(a, 10 * e),
                i.count++
            }
            return n
        }
        pin(t, e) {
            let i = this.seats.get(t);
            i || this.seats.set(t, i = new w(360));
            let s = i.count ? Math.max(e, i.tickOf(0)) : e;
            i.pins.set(s, (i.pins.get(s) ?? 0) + 1);
            let n = !0;
            return () => {
                if (!n)
                    return;
                n = !1;
                let e = this.seats.get(t).pins
                  , i = e.get(s) - 1;
                i ? e.set(s, i) : e.delete(s)
            }
        }
        newest(t) {
            let e = this.seats.get(t);
            return e?.count ? e.tickOf(e.count - 1) : -1
        }
        newestFinal(t, e) {
            let i = this.seats.get(t);
            return !!i && !(i.count <= i.provisional) && (T(i, i.count - i.provisional - 1, e),
            !0)
        }
        kept(t) {
            return this.seats.get(t)?.count ?? 0
        }
        read(t, e, i) {
            let s = this.seats.get(t)
              , n = s ? s.find(e) : -1;
            return !(n < 0) && (T(s, n, i),
            !0)
        }
        sample(t, i, s) {
            let n = this.seats.get(t);
            if (!n?.count)
                return "pending";
            let h = Math.floor(i / e.STEPS_PER_TICK)
              , a = i - h * e.STEPS_PER_TICK
              , r = n.find(h)
              , o = n.count - n.provisional;
            if (r < 0)
                return h > n.tickOf(n.count - 1) ? "pending" : "missing";
            if (r >= o)
                return "pending";
            if (T(n, r, s),
            !a)
                return "ok";
            if (r + 1 >= n.count)
                return "pending";
            if (n.tickOf(r + 1) !== h + 1)
                return "ok";
            if (r + 1 >= o)
                return "pending";
            let l = n.slot(r + 1)
              , d = n.ints[5 * l + 4];
            if (!(1 & d))
                return "ok";
            32 & d || (s.flags &= -33);
            let c = a / e.STEPS_PER_TICK
              , u = n.numbers
              , f = 10 * l;
            for (let t = 0; t < 3; t++)
                s.position[t] += (u[f + t] - s.position[t]) * c;
            return "ok"
        }
        get bytes() {
            let t = 0;
            for (let e of this.seats.values())
                t += e.numbers.byteLength + e.ints.byteLength;
            return t
        }
    }
    , "RECORD_ELIGIBLE", 0, 32, "emptyRecord", 0, y], 705758);
    var b = t.i(789788);
    let S = n.COMBAT_CAP / e.STEPS_PER_TICK;
    t.s(["MatchCombat", 0, class {
        history;
        world;
        sink;
        retained;
        fired;
        record0;
        record1;
        reach;
        a;
        b;
        test;
        constructor(t, e, i) {
            this.history = t,
            this.world = e,
            this.sink = i,
            this.retained = [],
            this.fired = new Map,
            this.record0 = y(),
            this.record1 = y(),
            this.reach = y(),
            this.a = [0, 0, 0],
            this.b = [0, 0, 0],
            this.test = {
                status: "skip",
                t: 0
            }
        }
        get bolts() {
            return this.retained
        }
        fire(t) {
            let e = `${t.id.seat}:${t.id.epoch}:${t.id.life}:${t.id.seq}`;
            if (this.fired.has(e))
                return !1;
            for (let[i,s] of (this.fired.set(e, t.tick),
            this.fired))
                s < t.tick - 600 && this.fired.delete(i);
            if (this.retained.length >= 161)
                throw Error("a match would hold more than 161 pending shots and bolts");
            let i = t.views.filter(e => e.seat !== t.id.seat && null !== this.world.team(e.seat) && this.world.team(e.seat) !== t.team);
            return this.retained.push({
                key: e,
                shot: {
                    ...t,
                    views: i
                },
                launched: !1,
                origin: [0, 0, 0],
                dir: [0, 0, 0],
                speed: 0,
                length: 0,
                steps: 0,
                main: 0,
                end: 1 / 0,
                hit: -1,
                mainDone: !1,
                late: i.map(t => ({
                    view: t,
                    next: 0,
                    done: !1
                })),
                releases: [this.history.pin(t.id.seat, t.tick)],
                void: !1,
                proof: t.ready
            }),
            !0
        }
        judge(t) {
            for (let e of this.retained)
                if (!e.void && (e.launched || this.launch(e, t)))
                    for (let i of (this.sweepMain(e, t),
                    e.late))
                        i.done || this.sweepLate(e, i, t);
            for (let t = 0; t < this.retained.length; t++) {
                let e = this.retained[t];
                if (e.void || e.launched && e.mainDone && e.late.every(t => t.done)) {
                    for (let t of e.releases)
                        t();
                    this.retained.splice(t--, 1)
                }
            }
        }
        swept(t, e, i, s) {
            for (let e of this.retained) {
                let n = this.reachFrom(e, t);
                if (s ? n <= i : n < i)
                    return !1
            }
            return !0
        }
        holding(t, e, i, s) {
            let n = new Set;
            for (let e of this.retained) {
                let h = this.reachFrom(e, t);
                if (s ? !(h > i) : !(h >= i))
                    for (let t of (n.add(e.shot.id.seat),
                    e.shot.views))
                        n.add(t.seat)
            }
            return [...n]
        }
        damage(t, e, i) {
            let s = 0;
            for (let e of this.retained)
                this.reachFrom(e, t) <= i && (s += e.shot.damage);
            return s
        }
        reachFrom(t, i) {
            if (t.void)
                return 1 / 0;
            let s = t.late.find(t => t.view.seat === i);
            if (!s)
                return 1 / 0;
            let n = t.shot.tick * e.STEPS_PER_TICK;
            if (!t.launched)
                return n;
            let h = s.done ? 1 / 0 : n + s.next;
            return t.mainDone ? h < t.end ? h : 1 / 0 : Math.min(n + t.main, h)
        }
        endEpoch(t, e, i) {
            for (let s of this.retained) {
                let n = s.shot.id;
                n.seat === t && n.epoch === e && !s.launched && s.shot.tick > i && (s.void = !0)
            }
        }
        launch(t, i) {
            let s = t.shot
              , n = s.tick
              , h = this.record0
              , a = this.history.sample(s.id.seat, n * e.STEPS_PER_TICK, h);
            if ("ok" !== a)
                return "missing" === a && (t.void = !0),
                !1;
            let r = t.origin
              , o = [0, 0, 0];
            (0,
            b.muzzleRay)(h.position, h.rotation, s.muzzle, r, o);
            let l = (0,
            b.boltSpeed)(s.gun, h.velocity, o)
              , d = [];
            for (let t of s.views) {
                let h = n * e.STEPS_PER_TICK - t.shift
                  , a = this.timing(t.seat, h, h, n, i);
                if ("late" === a)
                    continue;
                let c = y()
                  , u = "wait" === a ? "pending" : this.history.sample(t.seat, h, c);
                if ("pending" === u) {
                    if (!this.couldReach(t.seat, r, o, l, s.gun.range, h, s.gun.radiusMax))
                        continue;
                    return !1
                }
                "ok" === u && c.segment === t.segment && 32 & c.flags && d.push({
                    position: c.position,
                    velocity: c.velocity,
                    bound: this.world.bound(t.seat)
                })
            }
            for (let i of ((0,
            b.aimHelp)(r, o, l, s.gun, d, t.dir),
            t.speed = l,
            t.length = l > 0 ? Math.min(s.gun.range, this.world.wall(r, t.dir, s.gun.range)) : 0,
            t.steps = l > 0 ? Math.ceil(t.length * b.STEPS_PER_SECOND / l) : 0,
            t.launched = !0,
            t.proof = this.world.proof(s.id.seat, n) ?? s.ready,
            s.views))
                t.releases.push(this.history.pin(i.seat, Math.floor((n * e.STEPS_PER_TICK - i.shift) / e.STEPS_PER_TICK)));
            return !0
        }
        couldReach(t, e, i, s, n, h, a) {
            let r = [e[0] + i[0] * n, e[1] + i[1] * n, e[2] + i[2] * n];
            return s <= 0 || this.reachable(t, e, r, h, a + this.world.bound(t))
        }
        reachable(t, i, s, n, h) {
            let a = this.reach;
            if (!this.history.newestFinal(t, a))
                return !0;
            let r = Math.max(0, n - a.tick * e.STEPS_PER_TICK) / b.STEPS_PER_SECOND;
            return (0,
            b.segmentDistance)(a.position, i, s) <= h + 60 * r
        }
        timing(t, i, s, n, h) {
            let a = n + S
              , r = -1 / 0
              , o = !1;
            for (let n = Math.floor(i / e.STEPS_PER_TICK); n <= Math.ceil(s / e.STEPS_PER_TICK); n++) {
                let e = this.world.proof(t, n);
                if (null !== e)
                    r = Math.max(r, e);
                else {
                    if (this.world.least(t, n, h) > a)
                        return "late";
                    o = !0
                }
            }
            return r > a ? "late" : o ? "wait" : "on"
        }
        segment(t, e) {
            let i = t.speed / b.STEPS_PER_SECOND
              , s = Math.min(t.length, i * e)
              , n = Math.min(t.length, i * (e + 1));
            for (let e = 0; e < 3; e++)
                this.a[e] = t.origin[e] + t.dir[e] * s,
                this.b[e] = t.origin[e] + t.dir[e] * n;
            return n
        }
        testStep(t, i, n) {
            let h = this.test
              , a = t.shot.tick * e.STEPS_PER_TICK + n
              , r = this.segment(t, n)
              , o = (0,
            s.boltRadius)(t.shot.gun, r) + this.world.bound(i.seat)
              , l = this.record0
              , d = this.record1
              , c = this.history.sample(i.seat, a - i.shift, l)
              , u = "ok" === c ? this.history.sample(i.seat, a + 1 - i.shift, d) : c;
            if (h.t = 0,
            "pending" === c || "pending" === u)
                return h.status = this.canMeet(t, i, n) ? "wait" : "skip",
                h;
            if ("missing" === c || "missing" === u || l.segment !== i.segment || d.segment !== i.segment || !(32 & l.flags) || !(32 & d.flags))
                return h.status = "skip",
                h;
            let f = (0,
            b.sweptContact)(this.a, this.b, l.position, d.position, o);
            return h.status = f < 0 ? "miss" : "hit",
            h.t = f,
            h
        }
        canMeet(t, i, n) {
            let h = t.shot.tick * e.STEPS_PER_TICK + n
              , a = this.segment(t, n);
            return this.reachable(i.seat, this.a, this.b, h + 1 - i.shift, (0,
            s.boltRadius)(t.shot.gun, a) + this.world.bound(i.seat))
        }
        candidate(t, e, i, s) {
            let n = this.record0;
            this.history.sample(e.seat, Math.floor(i) - e.shift, n);
            let h = t.shot;
            this.sink.submit({
                victim: e.seat,
                life: n.life,
                segment: n.segment,
                hit: i,
                damage: h.damage,
                main: s,
                shot: {
                    ...h.id,
                    tick: h.tick,
                    ready: h.ready,
                    proof: t.proof
                },
                from: [-t.dir[0], -t.dir[1], -t.dir[2]]
            })
        }
        sweepMain(t, i) {
            let s = t.shot.tick;
            for (; !t.mainDone && t.main < t.steps; ) {
                let n = t.main
                  , h = s * e.STEPS_PER_TICK + n
                  , a = -1
                  , r = 1 / 0;
                for (let s = 0; s < t.shot.views.length; s++) {
                    let o = t.shot.views[s]
                      , l = this.timing(o.seat, h - o.shift, h + 1 - o.shift, Math.ceil(h / e.STEPS_PER_TICK), i);
                    if ("wait" === l && this.canMeet(t, o, n))
                        return;
                    if ("on" !== l)
                        continue;
                    let d = this.testStep(t, o, n);
                    if ("wait" === d.status)
                        return;
                    "hit" === d.status && d.t < r && (a = s,
                    r = d.t)
                }
                if (a >= 0) {
                    let e = t.shot.views[a];
                    for (let i of (t.end = h + r,
                    t.hit = e.seat,
                    t.mainDone = !0,
                    this.candidate(t, e, t.end, !0),
                    t.late))
                        i.view.seat === e.seat && (i.done = !0);
                    return
                }
                t.main++
            }
            t.main >= t.steps && !t.mainDone && (t.mainDone = !0,
            t.end = s * e.STEPS_PER_TICK + t.steps)
        }
        sweepLate(t, i, s) {
            let n = t.shot.tick
              , h = i.view
              , a = t.mainDone ? Math.min(t.steps - 1, Math.floor(t.end - n * e.STEPS_PER_TICK)) : t.main - 1;
            for (; i.next <= a; ) {
                let a = i.next
                  , r = n * e.STEPS_PER_TICK + a;
                if ("late" !== this.timing(h.seat, r - h.shift, r + 1 - h.shift, Math.ceil(r / e.STEPS_PER_TICK), s)) {
                    i.next++;
                    continue
                }
                let o = this.testStep(t, h, a);
                if ("wait" === o.status)
                    return;
                if ("hit" === o.status) {
                    let e = r + o.t;
                    e < t.end && this.candidate(t, h, e, !1),
                    i.done = !0;
                    return
                }
                i.next++
            }
            t.mainDone && (i.done = !0)
        }
    }
    ], 962216);
    let x = 15 * e.TICK_RATE
      , v = 5 * e.TICK_RATE
      , E = 480 * e.TICK_RATE
      , M = 60 * e.TICK_RATE * e.STEPS_PER_TICK;
    t.s(["LINEUP_TICKS", 0, v, "MatchRules", 0, class {
        start;
        lineup;
        warmup;
        teams;
        batteries;
        ticks;
        suddenDeathSteps;
        capKey;
        frontier;
        outcome = null;
        kos = [];
        constructor(t) {
            this.start = t.start,
            this.lineup = this.start - (t.lineupTicks ?? v),
            this.warmup = this.lineup - (t.warmupTicks ?? x),
            this.teams = t.teams ?? 2,
            this.batteries = t.batteries ?? 20,
            this.ticks = t.ticks ?? E,
            this.suddenDeathSteps = t.suddenDeathSteps ?? M,
            this.capKey = (this.start + this.ticks) * e.STEPS_PER_TICK,
            this.frontier = this.start * e.STEPS_PER_TICK - 1
        }
        get capTick() {
            return this.start + this.ticks
        }
        get suddenDeathEndKey() {
            return this.capKey + this.suddenDeathSteps
        }
        committed(t, e) {
            t.ko && "counted" === t.outcome && this.kos.push({
                key: t.key,
                team: e
            })
        }
        advance(t) {
            return t > this.frontier && (this.frontier = t),
            this.outcome || (this.outcome = this.walk()),
            this.outcome
        }
        phase(t, i) {
            return this.outcome ? "over" : t < this.lineup && this.lineup > this.warmup ? "warmup" : t < this.start && this.start > this.lineup ? "lineup" : i.some(t => t <= 0) ? "deciding" : t <= this.capTick ? "playing" : this.frontier < this.capKey || t * e.STEPS_PER_TICK > this.suddenDeathEndKey || this.kos.some(t => t.key > this.capKey) ? "deciding" : "suddenDeath"
        }
        joinable(t, e) {
            let i = this.phase(t, e);
            return t - this.start < .7 * this.ticks && e.every(t => t > 5) && ("playing" === i || "warmup" === i || "lineup" === i)
        }
        walk() {
            let t = this.kos.filter(t => t.key <= this.frontier).sort( (t, e) => t.key - e.key)
              , e = Array(this.teams).fill(this.batteries)
              , i = 0
              , s = () => {
                let s = t[i].key
                  , n = new Set;
                for (; i < t.length && t[i].key === s; i++)
                    e[t[i].team]--,
                    n.add(t[i].team);
                return {
                    key: s,
                    teams: n
                }
            }
              , n = () => e.map(t => Math.max(0, t));
            for (; i < t.length && t[i].key <= this.capKey; ) {
                let {key: t} = s()
                  , i = e.flatMap( (t, e) => t <= 0 ? [e] : []);
                if (!i.length)
                    continue;
                let h = 1 === i.length && 2 === this.teams ? 1 - i[0] : null;
                return {
                    winner: h,
                    decision: null === h ? "draw" : "batteries",
                    cutoff: t,
                    batteries: n()
                }
            }
            if (this.frontier < this.capKey)
                return null;
            let h = Math.max(...e)
              , a = e.flatMap( (t, e) => t === h ? [e] : []);
            if (1 === a.length)
                return {
                    winner: a[0],
                    decision: "clock",
                    cutoff: this.capKey,
                    batteries: n()
                };
            if (i < t.length && t[i].key <= this.suddenDeathEndKey) {
                let {key: t, teams: e} = s()
                  , i = 1 === e.size && 2 === this.teams ? 1 - [...e][0] : null;
                return {
                    winner: i,
                    decision: null === i ? "draw" : "suddenDeath",
                    cutoff: t,
                    batteries: n()
                }
            }
            return this.frontier < this.suddenDeathEndKey ? null : {
                winner: null,
                decision: "draw",
                cutoff: this.suddenDeathEndKey,
                batteries: n()
            }
        }
    }
    , "WARMUP_TICKS", 0, x, "matchFrontier", 0, function(t, i, s, n, h) {
        let a = [...i]
          , r = e => a.every( ([i,s]) => t.known(i, s, e, !0))
          , o = Math.floor((n + 1) / e.STEPS_PER_TICK);
        for (; o <= h && r(o * e.STEPS_PER_TICK + e.STEPS_PER_TICK - 1); )
            o++;
        let l = o * e.STEPS_PER_TICK - 1;
        for (; o <= h && l < o * e.STEPS_PER_TICK + e.STEPS_PER_TICK - 2 && r(l + 1); )
            l++;
        return Math.max(n, Math.min(l, s - 1))
    }
    ], 66031)
}
, 335789, t => {
    "use strict";
    var e = t.i(306871)
      , i = t.i(635525)
      , s = t.i(247800);
    t.s(["PracticeFeed", 0, class {
        match;
        feed;
        peers;
        looks;
        constructor(t, e, i=null) {
            this.match = i,
            this.peers = new Map;
            const s = t.filter(t => t.userId !== e)
              , n = s.map(t => ({
                id: t.userId,
                name: t.name,
                admin: !1,
                label: t.label,
                seat: t.seat,
                team: t.team,
                userId: null
            }));
            for (const t of s)
                this.peers.set(t.userId, {
                    id: t.userId,
                    name: t.name,
                    admin: !1,
                    label: t.label,
                    seat: t.seat,
                    team: t.team,
                    userId: null,
                    frames: [],
                    joinedAt: 0,
                    receivedAt: 0,
                    leavingAt: null
                });
            const h = t.find(t => t.userId === e);
            this.feed = {
                peers: [...this.peers.values()],
                roster: n,
                selfSessionId: e,
                status: "connected",
                serverTime: 0,
                localTime: 0,
                ...h?.seat === void 0 ? {} : {
                    seat: h.seat
                },
                ...h?.team === void 0 ? {} : {
                    team: h.team
                }
            },
            this.looks = new Map(s.map(t => [t.userId, {
                droneId: t.drone,
                droneSkin: t.skin,
                palette: t.palette
            }]))
        }
        update(t, n) {
            let h = 1e3 * t.time;
            for (let[e,i] of this.peers) {
                let s = t.view(e);
                if (!s)
                    continue;
                let a = s.body.translation()
                  , r = s.body.rotation()
                  , o = s.body.linvel();
                i.frames.push({
                    ...this.looks.get(e),
                    t: h,
                    p: [a.x, a.y, a.z],
                    q: [r.x, r.y, r.z, r.w],
                    v: [o.x, o.y, o.z],
                    run: s.respawns,
                    life: s.combat?.state.life,
                    throttle: s.last?.throttleCommand ?? 0,
                    armed: s.last?.armed ?? !1
                }),
                i.frames.length > 16 && i.frames.splice(0, i.frames.length - 16),
                i.joinedAt || (i.joinedAt = n),
                i.receivedAt = n
            }
            this.feed.serverTime = h + i.PLAYBACK_DELAY_MS,
            this.feed.localTime = n;
            let a = this.match?.takeBolts();
            if (a && (a.bolts.length || a.hits.length)) {
                let i = t.worldSteps / s.STEPS_PER_TICK - t.tick
                  , h = this.feed.bolts ??= new e.ShownBolts;
                for (let t of a.bolts)
                    h.add({
                        ...t,
                        tick: t.tick + i
                    }, n);
                for (let t of a.hits)
                    h.hit({
                        ...t,
                        tick: t.tick + i
                    })
            }
            this.feed.bolts?.prune(n)
        }
    }
    ])
}
, 315292, t => {
    "use strict";
    var e = t.i(244e3)
      , i = t.i(98747)
      , s = t.i(789788)
      , n = t.i(311560)
      , h = t.i(121645)
      , a = t.i(739011)
      , r = t.i(705758)
      , o = t.i(283221)
      , l = t.i(962216)
      , d = t.i(66031)
      , c = t.i(974627)
      , u = t.i(101060)
      , f = t.i(494049)
      , m = t.i(980948)
      , p = t.i(247800)
      , g = t.i(19945)
      , k = t.i(11871)
      , y = t.i(248449);
    let w = t => `${t.seat}:${t.epoch}:${t.life}:${t.seq}`;
    class T {
        tracked = new Map;
        get size() {
            return this.tracked.size
        }
        track(t) {
            this.tracked.set(w(t.shot.id), {
                bolt: t,
                told: "none",
                stop: 0,
                pending: 0,
                counted: null
            })
        }
        candidate(t) {
            let e = this.tracked.get(w(t.shot));
            e && e.pending++
        }
        committed(t) {
            if ("hit" !== t.kind || !t.shot)
                return;
            let e = this.tracked.get(w(t.shot));
            e && (e.pending = Math.max(0, e.pending - 1),
            "counted" !== t.outcome || e.counted && e.counted.hit <= t.hit || (e.counted = {
                seat: t.victim,
                hit: t.hit
            }))
        }
        take(t, e) {
            let i = {
                bolts: [],
                hits: []
            };
            if (!this.tracked.size)
                return i;
            let n = new Set(e);
            for (let[e,d] of this.tracked) {
                var h, a, r, o, l;
                let c = d.bolt
                  , u = !n.has(c)
                  , f = t - c.shot.tick > 600;
                if (!c.launched) {
                    (u || f) && this.tracked.delete(e);
                    continue
                }
                let m = d.counted
                  , g = u && 0 === d.pending
                  , k = m ? (h = c,
                a = m.hit,
                Math.min(h.length, Math.max(0, h.speed * (a - h.shot.tick * p.STEPS_PER_TICK) / s.STEPS_PER_SECOND))) : c.length
                  , w = {
                    seat: c.shot.id.seat,
                    team: c.shot.team,
                    tick: c.shot.tick
                };
                "none" === d.told ? i.bolts.push((r = c,
                o = m ? m.seat : g ? y.BOLT_MISSED : y.BOLT_OPEN,
                l = k,
                {
                    seat: r.shot.id.seat,
                    team: r.shot.team,
                    tick: r.shot.tick,
                    origin: [...r.origin],
                    dir: [...r.dir],
                    speed: r.speed,
                    length: r.length,
                    hit: o,
                    stop: l
                })) : m && ("open" === d.told || k < d.stop) ? i.hits.push({
                    ...w,
                    hit: m.seat,
                    stop: k
                }) : !m && g && i.hits.push({
                    ...w,
                    hit: y.BOLT_MISSED,
                    stop: k
                }),
                d.told = m ? "hit" : "open",
                d.stop = k,
                (g || f) && this.tracked.delete(e)
            }
            return i
        }
    }
    var b = t.i(890128)
      , S = t.i(60650);
    t.s(["PracticeMatch", 0, class {
        rapier;
        flight;
        options;
        matchId;
        seats;
        rules;
        ledger;
        bolts;
        entries;
        shots;
        scores;
        history;
        frontier;
        downlink;
        participants;
        scratch;
        record;
        started;
        eventId;
        notice;
        finished;
        onMatch;
        onNotice;
        constructor(t, c, u) {
            this.rapier = t,
            this.flight = c,
            this.options = u,
            this.entries = [],
            this.shots = new Map,
            this.scores = null,
            this.downlink = new T,
            this.scratch = new Float64Array(16),
            this.record = (0,
            r.emptyRecord)(),
            this.started = !1,
            this.eventId = 0,
            this.notice = "",
            this.finished = !1,
            this.onMatch = null,
            this.onNotice = null,
            this.matchId = `practice-${u.seed >>> 0}`;
            const {arena: f} = u;
            this.seats = Array.from({
                length: 8
            }, (t, e) => ({
                seat: e,
                team: e % 2,
                id: 0 === e ? c.pilotId : `bot:${e}:1`,
                bot: null,
                name: (0,
                b.botName)(e),
                cseq: 0,
                koApplied: new Map,
                relaunched: new Set,
                queue: [],
                drones: new Map
            })),
            this.participants = this.seats.map( ({id: t, seat: e, team: i}) => ({
                id: t,
                seat: e,
                team: i
            })),
            this.history = new r.PoseHistory(this.matchId);
            const m = c.room;
            for (const r of (this.rules = new d.MatchRules({
                ...u.rules,
                start: m.tick + (u.rules?.warmupTicks ?? d.WARMUP_TICKS) + (u.rules?.lineupTicks ?? d.LINEUP_TICKS)
            }),
            this.ledger = new o.CombatLedger({
                teams: new Map(this.seats.map(t => [t.seat, t.team])),
                health: (t, e) => (0,
                h.droneCombat)(this.seats[t]?.drones.get(e) ?? u.drone).health,
                batteries: u.rules?.batteries
            }),
            this.frontier = new n.MatchFrontier(t => this.ledger.enemiesOf(t),t => ({
                damage: 0 === t ? (0,
                h.maxShotDamage)(a.STANDARD_GUN, u.arena.drones) : (0,
                h.shotDamage)(a.STANDARD_GUN, u.drone),
                intervalTicks: a.STANDARD_GUN.intervalTicks
            })),
            this.bolts = new l.MatchCombat(this.history,{
                proof: (t, e) => e,
                least: (t, e) => e,
                team: t => this.seats[t]?.team ?? null,
                bound: () => (0,
                s.boundingRadius)(k.DRONE_PROFILES[u.drone].halfExtents),
                wall: (e, i, n) => (0,
                s.wallDistance)(t, m.physics, e, i, n)
            },{
                submit: t => {
                    this.downlink.candidate(t),
                    this.ledger.submit(t)
                }
            }),
            this.frontier.bolts = this.bolts,
            this.seats)) {
                if (0 === r.seat)
                    continue;
                const t = this.seats.filter(t => t.team === r.team && t.seat < r.seat).length;
                m.addPilot({
                    id: r.id,
                    drone: u.drone,
                    spawn: (0,
                    g.pitSpawn)(f, r.team, t, 4),
                    ...i.BOT_TUNING,
                    hover: !0
                }),
                r.bot = new e.ArenaBot({
                    bounds: f.bounds,
                    map: (0,
                    e.mapBounds)(m.world.bounds),
                    difficulty: u.difficulty,
                    drone: u.drone,
                    seed: 31 * u.seed + r.seat >>> 0
                })
            }
        }
        roster(t, e) {
            let i = (this.flight.room.hasPilot(this.flight.pilotId) ? this.flight.room.view(this.flight.pilotId)?.normalDrone : void 0) ?? this.options.drone;
            return this.seats.map(s => {
                let n = s.bot ? this.options.drone : i
                  , {skin: h, palette: a} = s.bot ? (0,
                S.builtInPaint)(n, b.BOT_SKINS[s.seat % b.BOT_SKINS.length]) : e ?? (0,
                S.builtInPaint)(n);
                return {
                    slot: s.seat,
                    userId: s.id,
                    name: s.bot ? s.name : t,
                    admin: !1,
                    mod: !1,
                    xp: 0,
                    drone: n,
                    skin: h,
                    palette: {
                        ...a
                    },
                    seat: s.seat,
                    team: s.team,
                    ...s.bot ? {
                        label: b.SEAT_LABELS.bot
                    } : {}
                }
            }
            )
        }
        tickStart(t, e, s) {
            for (let n of (this.started || this.start(t, e),
            this.seats)) {
                if (!n.bot)
                    continue;
                this.applyQueued(t, n);
                let h = n.bot.decide((0,
                i.senseBot)(t, e, this.participants[n.seat], this.participants));
                for (let e of h.commands ?? [])
                    t.command(n.id, "respawn" === e.type ? {
                        type: "placeAt",
                        spawn: this.pad(n, !0)
                    } : e);
                s.set(n.id, (0,
                i.botInput)(h, s.get(n.id)))
            }
        }
        tickEnd(t, e, i) {
            if (!this.started)
                return;
            let s = new Set;
            for (let n of i) {
                let i = this.seats.find(t => t.id === n.pilot);
                i && ("respawned" === n.type && s.add(n.pilot),
                "shotFired" === n.type && this.fire(t, i, e, n.epoch, n.life, n.shotSeq),
                "combatKo" === n.type && (i.koApplied.has(n.life) || i.koApplied.set(n.life, n.tick),
                "self" === n.cause && this.ledger.selfKo({
                    seat: i.seat,
                    epoch: n.epoch,
                    life: n.life,
                    tick: n.tick,
                    proof: n.tick
                })))
            }
            for (let i of this.seats) {
                let n = t.view(i.id);
                if (!n?.combat)
                    continue;
                let h = n.combat.state;
                h.phase === u.PHASE.alive && i.drones.set(h.life, n.normalDrone),
                this.history.publish(i.seat, {
                    tick: e + 1,
                    pose: (0,
                    m.saveBodyState)(n.body, this.scratch),
                    at: m.BODY_SLOT.x,
                    held: !1,
                    breaks: s.has(i.id),
                    epoch: h.epoch,
                    life: h.life,
                    alive: h.phase === u.PHASE.alive,
                    shielded: h.shield !== u.SHIELD.off
                }),
                this.history.settle(i.seat, e + 1, () => !0)
            }
            this.frontier.clock = e,
            this.bolts.judge(e),
            this.commit(t, e)
        }
        message(t) {
            let e = this.rules
              , i = [0, 1].map(t => this.ledger.batteries.get(t) ?? e.batteries);
            return {
                t: "match",
                lineup: e.lineup,
                start: e.start,
                cap: e.capTick,
                suddenDeathEnd: e.suddenDeathEndKey / p.STEPS_PER_TICK,
                phase: e.phase(t, i),
                batteries: i,
                joinable: !1,
                outcome: e.outcome,
                drones: [...this.options.arena.drones],
                scores: this.matchScores()
            }
        }
        matchScores() {
            let t = this.rules.outcome;
            if (this.scores && this.scores.entries === this.entries.length && this.scores.decided === (null !== t))
                return this.scores.lines;
            let e = (0,
            c.seatScores)(this.entries, this.seats.map(t => t.seat), t?.cutoff, t ? this.shots : void 0);
            return this.scores = {
                entries: this.entries.length,
                decided: null !== t,
                lines: e
            },
            e
        }
        free() {
            for (let t of this.seats)
                t.bot && this.flight.room.hasPilot(t.id) && this.flight.room.removePilot(t.id)
        }
        start(t, e) {
            for (let i of (this.started = !0,
            this.seats)) {
                let s = {
                    epoch: 1,
                    life: 1,
                    phase: u.PHASE.alive,
                    hp: (0,
                    h.droneCombat)(t.view(i.id)?.normalDrone ?? this.options.drone).health,
                    recoverTicks: 0,
                    guardTicks: 0,
                    koTicks: 0,
                    shield: e < this.rules.start ? u.SHIELD.pad : u.SHIELD.off,
                    shieldTicks: 0,
                    gunCooldown: 0,
                    shotSeq: 0,
                    appliedCseq: 0
                };
                t.setCombat(i.id, this.setup(i), s),
                this.frontier.start(i.seat, 1, e, null)
            }
        }
        setup(t) {
            return {
                match: this.matchId,
                seat: t.seat,
                team: t.team,
                gun: a.STANDARD_GUN.id,
                lineup: this.rules.lineup,
                start: this.rules.start
            }
        }
        fire(t, e, i, n, r, o) {
            let l = [];
            for (let t of this.seats)
                t.team !== e.team && this.history.read(t.seat, i, this.record) && l.push({
                    seat: t.seat,
                    segment: this.record.segment,
                    shift: 0
                });
            let d = t.view(e.id)
              , c = d?.normalDrone ?? this.options.drone;
            this.bolts.fire({
                id: {
                    seat: e.seat,
                    epoch: n,
                    life: r,
                    seq: o
                },
                team: e.team,
                tick: i,
                ready: i,
                views: l,
                muzzle: (0,
                s.muzzleOf)(c, d?.aimTiltDeg),
                gun: a.STANDARD_GUN,
                damage: (0,
                h.shotDamage)(a.STANDARD_GUN, c)
            }) && (this.shots.set(e.seat, (this.shots.get(e.seat) ?? 0) + 1),
            this.downlink.track(this.bolts.bolts[this.bolts.bolts.length - 1]))
        }
        takeBolts() {
            var t;
            return {
                bolts: (t = this.downlink.take(this.flight.room.tick, this.bolts.bolts)).bolts.filter(t => 0 !== t.seat),
                hits: t.hits.filter(t => 0 !== t.seat)
            }
        }
        commit(t, e) {
            for (let e of this.ledger.commit(this.frontier)) {
                if (this.downlink.committed(e),
                "down" === e.kind)
                    continue;
                this.entries.push(e),
                "counted" === e.outcome && this.onNotice?.({
                    t: "combat",
                    seq: e.seq,
                    kind: e.kind,
                    victim: e.victim,
                    life: e.life,
                    attacker: e.shot?.seat ?? null,
                    damage: e.damage,
                    hp: e.hp,
                    health: this.ledger.life(e.victim, e.life).health,
                    ko: e.ko,
                    credit: e.credit,
                    from: e.from
                });
                let i = this.seats[e.victim];
                this.rules.committed(e, i.team);
                let s = t.view(i.id)?.combat?.state.life;
                "hit" === e.kind && "counted" === e.outcome && e.life === s && this.send(t, i, e.life, {
                    type: "hit",
                    hp: e.hp,
                    attacker: e.shot.seat,
                    from: e.from ?? [0, 0, 0],
                    ko: e.ko
                })
            }
            if (!this.finished) {
                let i = this.seats.map(e => [e.seat, t.view(e.id)?.combat?.state.life ?? 1])
                  , s = this.rules.outcome ?? this.rules.advance((0,
                d.matchFrontier)(this.frontier, i, this.ledger.earliestPending, this.rules.frontier, e));
                if (s)
                    for (let e of (this.finished = !0,
                    this.ledger.cutoff = s.cutoff,
                    this.seats))
                        this.send(t, e, t.view(e.id)?.combat?.state.life ?? 1, {
                            type: "end",
                            winner: s.winner
                        })
            }
            if (!this.finished)
                for (let e of this.seats) {
                    let i = t.view(e.id)?.combat?.state.life ?? 1
                      , s = e.koApplied.get(i);
                    !e.relaunched.has(i) && void 0 !== s && this.ledger.life(e.seat, i).ko && (e.relaunched.add(i),
                    this.send(t, e, i, {
                        type: "relaunch",
                        life: i + 1,
                        pad: this.pad(e, !1)
                    }, s + u.RELAUNCH_TICKS))
                }
            let i = this.message(e)
              , s = JSON.stringify(i);
            s !== this.notice && (this.notice = s,
            this.onMatch?.(i))
        }
        send(t, e, i, s, n) {
            let h = {
                match: this.matchId,
                seat: e.seat,
                epoch: 1,
                life: i,
                cseq: e.cseq + 1,
                prev: e.cseq,
                ...void 0 === n ? {} : {
                    notBefore: n
                },
                body: s
            };
            e.cseq = h.cseq,
            e.bot ? (e.queue.push(h),
            this.applyQueued(t, e)) : this.flight.gameplayEvent({
                id: ++this.eventId,
                kind: "combat",
                payload: h
            })
        }
        applyQueued(t, e) {
            for (let i = 0; i < e.queue.length; ) {
                let s = (0,
                f.transitionVerdict)(t.combatStanding(e.id), e.queue[i], t.tick);
                if ("wait" === s) {
                    i++;
                    continue
                }
                let[n] = e.queue.splice(i, 1);
                "apply" === s && t.applyCombat(e.id, n),
                i = 0
            }
        }
        pad(t, e) {
            let i = this.seats.filter(e => e.team === t.team && e.seat < t.seat).length
              , s = (0,
            g.pitSpawn)(this.options.arena, t.team, i, 4);
            return e ? s : {
                position: [...s.position],
                yaw: s.yaw
            }
        }
    }
    , "practiceSpawn", 0, function(t) {
        return (0,
        g.pitSpawn)(t, 0, 0, 4)
    }
    ], 315292)
}
]);
