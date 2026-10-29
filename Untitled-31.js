(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 471566, t => {
    "use strict";
    var e = t.i(190072)
      , i = t.i(466348)
      , r = t.i(171204);
    function o() {
        return {
            matrix: new e.Matrix4,
            rigid: new e.Matrix4,
            residual: new e.Matrix4,
            position: new e.Vector3,
            rotation: new e.Quaternion,
            x: new e.Vector3,
            y: new e.Vector3,
            z: new e.Vector3
        }
    }
    function s(t, e, i=o()) {
        (0,
        r.motionMatrix)(t.motion, e, i.matrix).premultiply(t.owner);
        let a = i.matrix.elements;
        return i.position.set(a[12], a[13], a[14]),
        i.x.set(a[0], a[1], a[2]).normalize(),
        i.y.set(a[4], a[5], a[6]).addScaledVector(i.x, -i.x.dot(i.y)).normalize(),
        i.z.crossVectors(i.x, i.y).normalize(),
        i.rigid.makeBasis(i.x, i.y, i.z).setPosition(i.position),
        i.rotation.setFromRotationMatrix(i.rigid),
        i.residual.copy(i.rigid).invert().multiply(i.matrix),
        i
    }
    function a(t, e) {
        let i = new Float32Array(t.length)
          , r = e.elements;
        for (let e = 0; e < t.length; e += 3) {
            let o = t[e]
              , s = t[e + 1]
              , a = t[e + 2];
            i[e] = r[0] * o + r[4] * s + r[8] * a + r[12],
            i[e + 1] = r[1] * o + r[5] * s + r[9] * a + r[13],
            i[e + 2] = r[2] * o + r[6] * s + r[10] * a + r[14]
        }
        return i
    }
    var n = t.i(991930)
      , l = t.i(646423);
    function h(t, e) {
        let i = t.elements
          , r = e.elements;
        for (let t = 0; t < 16; t++)
            r[t] = Math.round(131072 * i[t]) / 131072 + 0;
        return e
    }
    function c(t) {
        let e = [1 / 0, 1 / 0, 1 / 0]
          , i = [-1 / 0, -1 / 0, -1 / 0];
        for (let r = 0; r < t.length; r++)
            e[r % 3] = Math.min(e[r % 3], t[r]),
            i[r % 3] = Math.max(i[r % 3], t[r]);
        let r = (e[0] + i[0]) / 2
          , o = (e[1] + i[1]) / 2
          , s = (e[2] + i[2]) / 2
          , a = 0;
        for (let e = 0; e < t.length; e += 3) {
            let i = t[e] - r
              , n = t[e + 1] - o
              , l = t[e + 2] - s;
            a = Math.max(a, i * i + n * n + l * l)
        }
        return Float64Array.of(r, o, s, Math.sqrt(a))
    }
    function u(t, e, i, r, o, s, a, n, l) {
        let h = 2 * (o * n[2] - s * n[1])
          , c = 2 * (s * n[0] - r * n[2])
          , u = 2 * (r * n[1] - o * n[0]);
        return l[0] = t + n[0] + a * h + (o * u - s * c),
        l[1] = e + n[1] + a * c + (s * h - r * u),
        l[2] = i + n[2] + a * u + (r * c - o * h),
        l
    }
    let p = [0, 0, 0]
      , d = [0, 0, 0];
    function f(t, e) {
        t[0] = e.position.x,
        t[1] = e.position.y,
        t[2] = e.position.z,
        t[3] = e.rotation.x,
        t[4] = e.rotation.y,
        t[5] = e.rotation.z,
        t[6] = e.rotation.w
    }
    let m = new WeakMap;
    function g(t) {
        let r = m.get(t);
        return r || (r = (0,
        n.splitMotion)(t).groups.map(t => ({
            group: t,
            mesh: function(t) {
                let r = []
                  , o = [];
                for (let s of t.parts) {
                    if (!s.geometry || s.ghost || !(0,
                    i.collides)(s.geometry))
                        continue;
                    let t = (0,
                    i.collisionMesh)(s.geometry, new e.Matrix4().fromArray(s.matrix))
                      , a = r.length / 3;
                    for (let e of t.vertices)
                        r.push(e);
                    for (let e of t.indices)
                        o.push(e + a)
                }
                return {
                    vertices: new Float32Array(r),
                    indices: new Uint32Array(o)
                }
            }(t)
        })),
        m.set(t, r)),
        r
    }
    t.s(["MovingParts", 0, class t {
        rapier;
        physics;
        clock;
        assemblies;
        constructor(t, i, r) {
            if (this.rapier = t,
            this.physics = i,
            this.clock = {
                current: 0
            },
            this.stepReach = 0,
            this.scratch = o(),
            this.stretch = new e.Matrix4,
            this.assemblies = [],
            r) {
                const t = this.build(g(r));
                for (; !t.next().done; )
                    ;
            }
        }
        static*build(e, i, r) {
            let o = new t(e,i,null);
            return yield*o.build(r),
            o
        }
        *build(t) {
            let {rapier: i, physics: r} = this;
            for (let {group: n, mesh: l} of t) {
                if (!l.indices.length)
                    continue;
                let t = s(n, 0)
                  , u = h(t.residual, new e.Matrix4)
                  , p = r.createRigidBody(i.RigidBodyDesc.kinematicPositionBased().setCanSleep(!1).setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.rotation))
                  , d = n.motion.coaster;
                p.userData = {
                    chaseKind: d ? "whoop-monorail" === d.layout ? "monorail" : "coaster" : n.motion.rig?.id === "whoop-karts" ? "kart" : void 0
                };
                let m = a(l.vertices, u)
                  , g = r.createCollider(i.ColliderDesc.trimesh(m, l.indices).setFriction(.65).setRestitution(.05), p)
                  , y = new Float64Array(7);
                f(y, t),
                this.assemblies.push({
                    group: n,
                    body: p,
                    collider: g,
                    ...l,
                    pose: o(),
                    residual: u,
                    bounds: c(m),
                    at: y
                }),
                yield "moving assembly"
            }
        }
        get count() {
            return this.assemblies.length
        }
        stepReach;
        beforeStep(t) {
            let e = 0;
            for (let i of this.assemblies) {
                let r = this.pose(i, t);
                i.body.setNextKinematicTranslation(r.position),
                i.body.setNextKinematicRotation(r.rotation),
                e = Math.max(e, function(t, e, i) {
                    let {x: r, y: o, z: s, w: a} = e.rotation
                      , n = t[3]
                      , l = t[4]
                      , h = t[5]
                      , c = t[6];
                    u(t[0], t[1], t[2], n, l, h, c, i, p),
                    u(e.position.x, e.position.y, e.position.z, r, o, s, a, i, d);
                    let f = d[0] - p[0]
                      , m = d[1] - p[1]
                      , g = d[2] - p[2]
                      , y = c * r - a * n - (o * h - s * l)
                      , v = c * o - a * l - (s * n - r * h)
                      , M = c * s - a * h - (r * l - o * n);
                    return Math.sqrt(f * f + m * m + g * g) + 2 * i[3] * Math.sqrt(y * y + v * v + M * M)
                }(i.at, r, i.bounds)),
                f(i.at, r)
            }
            this.stepReach = e
        }
        snap(t) {
            for (let e of this.assemblies) {
                let i = this.pose(e, t);
                e.body.setTranslation(i.position, !0),
                e.body.setRotation(i.rotation, !0),
                f(e.at, i)
            }
            this.clock.current = t
        }
        afterStep(t) {
            this.clock.current = t
        }
        driveIn(t, e) {
            for (let i of this.assemblies) {
                let r = t.getRigidBody(i.body.handle);
                if (!r?.isKinematic())
                    continue;
                let o = s(i.group, e, this.scratch);
                r.setNextKinematicTranslation(o.position),
                r.setNextKinematicRotation(o.rotation)
            }
        }
        scratch;
        stretch;
        pose(t, e) {
            let i = s(t.group, e, t.pose)
              , r = h(i.residual, this.stretch);
            if (!r.equals(t.residual)) {
                let e = a(t.vertices, r);
                t.collider.setShape(new this.rapier.TriMesh(e,t.indices)),
                t.residual.copy(r),
                t.bounds = c(e)
            }
            return i
        }
        castRay(t, e, i) {
            let r = -1;
            for (let {collider: o} of this.assemblies) {
                if (!(0,
                l.groupsInteract)(i, o.collisionGroups()))
                    continue;
                let s = o.castRay(t, e, !0);
                s >= 0 && (r < 0 || s < r) && (r = s)
            }
            return r
        }
        poses() {
            return this.assemblies.map( ({body: t}) => ({
                translation: t.translation(),
                rotation: t.rotation()
            }))
        }
        shapes() {
            return this.assemblies.map( ({collider: t}) => t.vertices())
        }
        remove() {
            for (let {body: t} of this.assemblies)
                this.physics.getRigidBody(t.handle) && this.physics.removeRigidBody(t)
        }
    }
    , "assemblyMeshes", 0, g], 471566)
}
, 319202, 47610, t => {
    "use strict";
    var e = t.i(632526);
    function i(t) {
        return new Float32Array([-t.depth / 2, t.depth / 2].flatMap(e => t.points.flatMap( ([t,i]) => [t, i, e])))
    }
    t.s(["prismVertices", 0, i], 47610);
    var r = t.i(471646)
      , o = t.i(998494)
      , s = t.i(79856)
      , a = t.i(124241);
    let n = [0, 0, 0, 1]
      , l = new WeakMap
      , h = ([t,e,i,r]) => ({
        x: t,
        y: e,
        z: i,
        w: r
    });
    function *c(t, e, i) {
        let r = e.createRigidBody(t.RigidBodyDesc.fixed());
        for (let o of i)
            e.createCollider((function(t, e) {
                switch (e.shape) {
                case "cuboid":
                    return t.ColliderDesc.cuboid(...e.halfExtents).setTranslation(...e.position).setRotation(h(e.rotation));
                case "heightfield":
                    {
                        let[i,r,o] = e.scale;
                        return t.ColliderDesc.heightfield(e.segments, e.segments, e.heights, {
                            x: i,
                            y: r,
                            z: o
                        })
                    }
                case "trimesh":
                    return t.ColliderDesc.trimesh(e.vertices, e.indices);
                case "convexHull":
                    {
                        let i = t.ColliderDesc.convexHull(e.points);
                        if (!i)
                            throw Error("degenerate convex hull");
                        return i.setTranslation(...e.position).setRotation(h(e.rotation))
                    }
                case "ball":
                    return t.ColliderDesc.ball(e.radius).setTranslation(...e.position);
                case "capsule":
                    return t.ColliderDesc.capsule(e.halfHeight, e.radius).setTranslation(...e.position)
                }
            }
            )(t, o).setDensity(0).setFriction(.85).setRestitution(.12), r),
            yield "static collider";
        return r
    }
    t.s(["STATIC_FRICTION", 0, .85, "STATIC_RESTITUTION", 0, .12, "buildStaticBody", 0, c, "createStaticBody", 0, function(t, e, i) {
        let r = c(t, e, i)
          , o = r.next();
        for (; !o.done; )
            o = r.next();
        return o.value
    }
    , "staticColliders", 0, function(t) {
        let h = l.get(t);
        if (h)
            return h;
        let c = []
          , u = (0,
        o.worldBound)(t.bounds) + 40
          , p = [u, .5, u];
        if (t.terrain) {
            let e = (0,
            r.heightGrid)(t.terrain);
            c.push({
                shape: "heightfield",
                segments: e.segments,
                heights: e.heights,
                scale: [e.size, 1, e.size]
            }),
            c.push({
                shape: "cuboid",
                halfExtents: p,
                position: [0, -14, 0],
                rotation: n
            })
        } else
            c.push({
                shape: "cuboid",
                halfExtents: p,
                position: [0, -.5, 0],
                rotation: n
            });
        if (t.editorDocument)
            for (let e of (0,
            s.staticCollisionChunks)(t.editorDocument))
                c.push({
                    shape: "trimesh",
                    vertices: e.vertices,
                    indices: e.indices
                });
        for (let i of (0,
        e.collidableBoxes)(t))
            c.push({
                shape: "cuboid",
                halfExtents: i.halfExtents,
                position: i.position,
                rotation: (0,
                a.eulerQuaternion)(i.rotation)
            });
        for (let e of t.prisms ?? [])
            c.push({
                shape: "convexHull",
                points: i(e),
                position: e.position,
                rotation: (0,
                a.eulerQuaternion)(e.rotation)
            });
        for (let e of t.props)
            "radome" === e.kind && c.push({
                shape: "ball",
                radius: 6.5 * e.scale,
                position: [e.position[0], e.position[1] + 6.1 * e.scale, e.position[2]]
            });
        return l.set(t, c),
        c
    }
    ], 319202)
}
, 306212, t => {
    "use strict";
    var e = t.i(579726)
      , i = t.i(353198)
      , r = t.i(534306);
    let o = {
        airMode: !0,
        idleThrottle: .09,
        throttleExpo: .1
    }
      , s = {
        freestyle: {
            quad: {
                ...o,
                mass: .65,
                thrustToWeight: 8,
                motorResponseMs: 18,
                dragCoefficient: .013,
                responsiveness: 1
            },
            reachX: .087,
            reachZ: .087,
            propRadius: .0635,
            halfExtents: [.151, .035, .151],
            yawArm: .016,
            rotorDrag: .045,
            sagDepth: .1
        },
        whoop: {
            quad: {
                ...o,
                mass: .025,
                thrustToWeight: 3.6,
                motorResponseMs: 10,
                dragCoefficient: .0011,
                responsiveness: 1.15
            },
            reachX: .065 / Math.sqrt(8),
            reachZ: .065 / Math.sqrt(8),
            propRadius: .0155,
            halfExtents: [.042, .016, .042],
            yawArm: .004,
            rotorDrag: .0035,
            sagDepth: .2
        },
        cinewhoop: {
            quad: {
                ...o,
                mass: .36,
                thrustToWeight: 4.5,
                motorResponseMs: 22,
                dragCoefficient: .017,
                responsiveness: .8
            },
            reachX: .064,
            reachZ: .05248,
            propRadius: .0381,
            halfExtents: [.11, .035, .099],
            yawArm: .01,
            rotorDrag: .028,
            sagDepth: .14
        },
        "long-range": {
            quad: {
                ...o,
                mass: 1.25,
                thrustToWeight: 4.3,
                motorResponseMs: 34,
                dragCoefficient: .023,
                responsiveness: .7
            },
            reachX: .119,
            reachZ: .119 * 1.15,
            propRadius: .0889,
            halfExtents: [.209, .045, .227],
            yawArm: .022,
            rotorDrag: .075,
            sagDepth: .12
        },
        racer: {
            quad: {
                ...o,
                mass: .525,
                thrustToWeight: 10,
                motorResponseMs: 14,
                dragCoefficient: .009,
                responsiveness: 1.12
            },
            reachX: .21 / Math.sqrt(8),
            reachZ: .21 / Math.sqrt(8),
            propRadius: .0635,
            halfExtents: [.139, .041, .139],
            yawArm: .015,
            rotorDrag: .038,
            sagDepth: .14
        }
    };
    var a = t.i(190072)
      , n = t.i(252497);
    let l = [.12, .035, .12];
    var h = t.i(12746)
      , c = t.i(475127);
    function u(t, e, i) {
        let r = (0,
        h.clamp)((i - t) / (e - t), 0, 1);
        return r * r * (3 - 2 * r)
    }
    function p(t, e, i, r) {
        return [t - e + i - r, t + e + i + r, t - e - i + r, t + e - i - r]
    }
    function d(t) {
        return (t[0] + t[1] + t[2] + t[3]) * .25
    }
    function f(t) {
        return (0,
        h.clamp)(t, -1, 1)
    }
    let m = Math.PI / 180
      , g = 1.5 * m
      , y = 200 * m
      , v = n.ARM_LENGTH / Math.SQRT2;
    function M(t, e, i) {
        return Math.abs(t) < i && Math.abs(e) < i && Math.abs(t - e) < 30 * m
    }
    let x = [0, 0, 0, 0];
    class w {
        onTrace;
        constructor(t) {
            this.onTrace = t,
            this.motors = [0, 0, 0, 0],
            this.result = {
                throttleCommand: 0,
                speed: 0,
                altitude: 0,
                upDot: 1,
                motors: [0, 0, 0, 0],
                voltageFactor: 1
            },
            this.thrustsN = [0, 0, 0, 0],
            this.voltageFactor = 1,
            this.groundY = 0,
            this.hasGroundY = !1,
            this.restTimer = 0,
            this.integral = new a.Vector3,
            this.prevGyro = new a.Vector3,
            this.hasPrevGyro = !1,
            this.filteredDerivative = new a.Vector3,
            this.prevSetpoint = new a.Vector3,
            this.feedforward = new a.Vector3,
            this.saturatedError = new a.Vector3,
            this.airVelocity = new a.Vector3,
            this.wake = [0, 0, 0, 0],
            this.aeroTime = 0,
            this.stateVectors = [this.integral, this.prevGyro, this.filteredDerivative, this.prevSetpoint, this.feedforward, this.saturatedError],
            this.q = new a.Quaternion,
            this.invQ = new a.Quaternion,
            this.gyro = new a.Vector3,
            this.setpoint = new a.Vector3,
            this.error = new a.Vector3,
            this.torque = new a.Vector3,
            this.scratch = new a.Vector3
        }
        motors;
        result;
        thrustsN;
        voltageFactor;
        groundY;
        hasGroundY;
        restTimer;
        integral;
        prevGyro;
        hasPrevGyro;
        filteredDerivative;
        prevSetpoint;
        feedforward;
        saturatedError;
        airVelocity;
        wake;
        aeroTime;
        stateVectors;
        q;
        invQ;
        gyro;
        setpoint;
        error;
        torque;
        scratch;
        saveState(t=new Float64Array(32), e=0) {
            let i = e;
            for (let e = 0; e < 4; e++)
                t[i++] = this.motors[e];
            for (let e of (t[i++] = this.voltageFactor,
            t[i++] = this.groundY,
            t[i++] = +!!this.hasGroundY,
            t[i++] = this.restTimer,
            this.stateVectors))
                t[i++] = e.x,
                t[i++] = e.y,
                t[i++] = e.z;
            t[i++] = +!!this.hasPrevGyro;
            for (let e = 0; e < 4; e++)
                t[i++] = this.wake[e];
            return t[i++] = this.aeroTime,
            t
        }
        loadState(t, e=0) {
            let i = e;
            for (let e = 0; e < 4; e++)
                this.motors[e] = t[i++];
            for (let e of (this.voltageFactor = t[i++],
            this.groundY = t[i++],
            this.hasGroundY = 1 === t[i++],
            this.restTimer = t[i++],
            this.stateVectors))
                e.x = t[i++],
                e.y = t[i++],
                e.z = t[i++];
            this.hasPrevGyro = 1 === t[i++];
            for (let e = 0; e < 4; e++)
                this.wake[e] = t[i++];
            this.aeroTime = t[i++]
        }
        reset() {
            this.motors[0] = 0,
            this.motors[1] = 0,
            this.motors[2] = 0,
            this.motors[3] = 0,
            this.voltageFactor = 1,
            this.groundY = 0,
            this.hasGroundY = !1,
            this.restTimer = 0,
            this.integral.set(0, 0, 0),
            this.prevGyro.set(0, 0, 0),
            this.hasPrevGyro = !1,
            this.filteredDerivative.set(0, 0, 0),
            this.prevSetpoint.set(0, 0, 0),
            this.feedforward.set(0, 0, 0),
            this.saturatedError.set(0, 0, 0),
            this.wake.fill(0),
            this.aeroTime = 0
        }
        step(t, e, o, a, w, b, T) {
            var R, A, D, S;
            let {supported: q} = T
              , _ = (R = T.profile,
            i.DRONE_IDS.find(t => r.FLIGHT_SPECS[t] === R?.flight) ?? "freestyle")
              , E = s[_]
              , z = {
                ...s[_].quad,
                throttleExpo: b.throttleExpo,
                throttleMid: b.throttleMid
            }
              , C = E?.reachX ?? v
              , F = E?.reachZ ?? v
              , P = E?.yawArm ?? .016
              , O = e.rotation();
            this.q.set(O.x, O.y, O.z, O.w),
            this.invQ.copy(this.q).invert();
            let G = e.translation();
            q && (this.groundY = G.y,
            this.hasGroundY = !0);
            let U = this.hasGroundY ? Math.max(0, G.y - this.groundY) : Math.max(0, G.y)
              , I = (A = T.agl,
            void 0 === A ? U : null === A ? 1 / 0 : A)
              , V = Math.max(0, G.y - (T.groundHeight ?? 0))
              , B = z.mass * n.GRAVITY * z.thrustToWeight
              , N = function(t, e=l) {
                let[i,r,o] = e
                  , s = 2 * i
                  , a = 2 * r
                  , n = 2 * o
                  , h = t / 12;
                return [h * (a * a + n * n), h * (s * s + n * n), h * (s * s + a * a)]
            }(z.mass, E?.halfExtents)
              , L = Math.max(.2, z.responsiveness)
              , k = e.angvel()
              , Y = e.linvel()
              , Q = (0,
            c.hypot)(Y.x, Y.y, Y.z)
              , W = (0,
            c.hypot)(k.x, k.y, k.z);
            q && Q < n.GROUND_REST_SPEED && W < n.GROUND_REST_ANGVEL ? this.restTimer += t : this.restTimer = 0;
            let X = this.restTimer >= n.GROUND_REST_DWELL_S;
            this.scratch.set(0, 1, 0).applyQuaternion(this.q);
            let H = this.scratch.y
              , Z = X && H > n.GROUND_UPRIGHT_DOT
              , K = X && H < n.GROUND_TURTLE_DOT
              , j = X && !Z && !K
              , $ = j || K
              , J = Z || $ ? 0 : (0,
            h.applyActualRates)(o.roll, w.roll)
              , tt = Z || $ ? 0 : (0,
            h.applyActualRates)(o.pitch, w.pitch)
              , te = $ ? 0 : (0,
            h.applyActualRates)(o.yaw, w.yaw);
            this.setpoint.set(tt * m, -te * m, -J * m),
            this.gyro.set(k.x, k.y, k.z).applyQuaternion(this.invQ),
            this.airVelocity.set(Y.x, Y.y, Y.z).applyQuaternion(this.invQ);
            let ti = this.onTrace ? {
                dt: t,
                input: {
                    roll: o.roll,
                    pitch: o.pitch,
                    yaw: o.yaw,
                    throttle: o.throttle
                },
                setpoint: [this.setpoint.x, this.setpoint.y, this.setpoint.z],
                gyro: [this.gyro.x, this.gyro.y, this.gyro.z],
                p: [0, 0, 0],
                i: [0, 0, 0],
                d: [0, 0, 0],
                ff: [0, 0, 0],
                requestedTorque: [0, 0, 0],
                limitedTorque: [0, 0, 0],
                deliveredTorque: [0, 0, 0],
                motorTargets: [0, 0, 0, 0],
                motors: [0, 0, 0, 0],
                voltageFactor: this.voltageFactor
            } : void 0
              , tr = (0,
            h.applyThrottleCurve)(o.throttle, z.throttleExpo, z.throttleMid)
              , to = z.airMode ? z.idleThrottle : 0
              , ts = a && !j ? Math.max(to, tr) : 0
              , ta = 0
              , tn = 0
              , tl = 0;
            if (a && !$) {
                this.error.copy(this.setpoint).sub(this.gyro);
                let e = .02 / L
                  , i = [e, .02 / L, e]
                  , r = z.airMode ? 1 : (0,
                h.clamp)(2 * ts, .1, 1)
                  , o = (D = (0,
                h.clamp)(d(this.motors), .2, 1),
                2 * (0,
                h.clamp01)(D))
                  , s = Z ? 0 : B * C * r * o * this.voltageFactor
                  , a = B * P * r * o * this.voltageFactor
                  , n = Z ? 0 : B * C * .5 * r * this.voltageFactor
                  , l = B * P * .5 * r * this.voltageFactor
                  , u = [n * F / C, l, n]
                  , p = 1 - (0,
                c.exp)(-t / 1.75);
                this.integral.multiplyScalar(1 - p),
                M(this.setpoint.x, this.gyro.x, y) && Math.abs(this.error.x) > g && this.error.x * this.saturatedError.x <= 0 && (this.integral.x += this.error.x * t),
                M(this.setpoint.y, this.gyro.y, y) && Math.abs(this.error.y) > g && this.error.y * this.saturatedError.y <= 0 && (this.integral.y += this.error.y * t),
                M(this.setpoint.z, this.gyro.z, y) && Math.abs(this.error.z) > g && this.error.z * this.saturatedError.z <= 0 && (this.integral.z += this.error.z * t);
                for (let t = 0; t < 3; t++) {
                    let e = 0 === t ? "x" : 1 === t ? "y" : "z"
                      , r = u[t]
                      , o = r > 0 ? .3 * r * i[t] * .35 / N[t] : 0;
                    this.integral[e] = (0,
                    h.clamp)(this.integral[e], -o, o)
                }
                Z && (this.integral.x = 0,
                this.integral.z = 0),
                this.hasPrevGyro || (this.prevGyro.copy(this.gyro),
                this.prevSetpoint.copy(this.setpoint),
                this.filteredDerivative.set(0, 0, 0),
                this.feedforward.set(0, 0, 0),
                this.hasPrevGyro = !0),
                this.scratch.copy(this.gyro).sub(this.prevGyro).divideScalar(t),
                this.filteredDerivative.lerp(this.scratch, 1 - (0,
                c.exp)(-2 * Math.PI * 80 * t)),
                this.prevGyro.copy(this.gyro),
                this.scratch.copy(this.setpoint).sub(this.prevSetpoint).divideScalar(t),
                this.feedforward.lerp(this.scratch, 1 - (0,
                c.exp)(-t / .012)),
                this.prevSetpoint.copy(this.setpoint);
                for (let t = 0; t < 3; t++) {
                    let e = 0 === t ? "x" : 1 === t ? "y" : "z"
                      , r = i[t]
                      , o = N[t]
                      , s = this.error[e] / r
                      , a = this.integral[e] / (.35 * r)
                      , n = -(1 === t ? .5 : .35) * this.filteredDerivative[e]
                      , l = (0,
                    h.clamp)(.35 * this.feedforward[e], Math.min(0, s), Math.max(0, s));
                    this.torque[e] = o * (s + a + n + l),
                    ti && (ti.p[t] = o * s,
                    ti.i[t] = o * a,
                    ti.d[t] = o * n,
                    ti.ff[t] = o * l,
                    ti.requestedTorque[t] = this.torque[e])
                }
                this.torque.x = (0,
                h.clamp)(this.torque.x, -u[0], u[0]),
                this.torque.y = (0,
                h.clamp)(this.torque.y, -l, l),
                this.torque.z = (0,
                h.clamp)(this.torque.z, -n, n),
                ti && (ti.limitedTorque = [this.torque.x, this.torque.y, this.torque.z]),
                s > 1e-6 && (tn = f(this.torque.x / (s * F / C)),
                ta = f(-this.torque.z / s)),
                a > 1e-6 && (tl = f(-this.torque.y / a))
            } else
                this.integral.set(0, 0, 0),
                this.hasPrevGyro = !1,
                this.saturatedError.set(0, 0, 0),
                K && e.setAngvel({
                    x: 0,
                    y: 0,
                    z: 0
                }, !0);
            Z && a && (this.scratch.set(k.x, k.y, k.z).applyQuaternion(this.invQ),
            this.scratch.x = 0,
            this.scratch.z = 0,
            this.scratch.applyQuaternion(this.q),
            e.setAngvel({
                x: this.scratch.x,
                y: this.scratch.y,
                z: this.scratch.z
            }, !0));
            let th = ts > 0 || Math.abs(ta) + Math.abs(tn) + Math.abs(tl) > 1e-6 ? function(t) {
                let e = (0,
                h.clamp01)(t.throttle)
                  , i = t.roll
                  , r = t.pitch
                  , o = t.yaw;
                if (t.airMode) {
                    let t = p(0, i, r, o)
                      , s = Math.max(t[0], t[1], t[2], t[3])
                      , a = Math.min(t[0], t[1], t[2], t[3])
                      , n = s - a;
                    if (n > 1) {
                        let e = 1 / n;
                        i *= e,
                        r *= e,
                        o *= e,
                        s = Math.max((t = p(0, i, r, o))[0], t[1], t[2], t[3]),
                        a = Math.min(t[0], t[1], t[2], t[3])
                    }
                    let l = (0,
                    h.clamp)(e, -a, 1 - s);
                    return [(0,
                    h.clamp01)(l + t[0]), (0,
                    h.clamp01)(l + t[1]), (0,
                    h.clamp01)(l + t[2]), (0,
                    h.clamp01)(l + t[3])]
                }
                let s = Math.min(e, 1 - .12 * Math.max(Math.abs(i), Math.abs(r), Math.abs(o)))
                  , a = p(s, i, r, o)
                  , n = Math.max(a[0], a[1], a[2], a[3])
                  , l = Math.min(a[0], a[1], a[2], a[3]);
                if (n > 1 && n > s + 1e-6) {
                    let t = (1 - s) / (n - s);
                    i *= t,
                    r *= t,
                    o *= t,
                    n = Math.max((a = p(s, i, r, o))[0], a[1], a[2], a[3]),
                    l = Math.min(a[0], a[1], a[2], a[3])
                }
                if (l < 0 && s > 1e-6) {
                    let t = s / (s - l);
                    i *= t,
                    r *= t,
                    o *= t,
                    a = p(s, i, r, o)
                }
                return [(0,
                h.clamp01)(a[0]), (0,
                h.clamp01)(a[1]), (0,
                h.clamp01)(a[2]), (0,
                h.clamp01)(a[3])]
            }({
                throttle: ts,
                roll: ta,
                pitch: tn,
                yaw: tl,
                airMode: z.airMode
            }) : x
              , tc = Math.max(.001, z.motorResponseMs / 1e3);
            for (let e = 0; e < 4; e++) {
                let i = th[e] < this.motors[e] ? .65 * tc : tc
                  , r = 1 - (0,
                c.exp)(-t / i);
                this.motors[e] += (th[e] - this.motors[e]) * r
            }
            for (let t of (this.saturatedError.set(tn - (th[0] + th[1] - th[2] - th[3]) * .25, -tl + (-th[0] + th[1] + th[2] - th[3]) * .25, -ta + (-th[0] + th[1] - th[2] + th[3]) * .25),
            ["x", "y", "z"]))
                1e-6 > Math.abs(this.saturatedError[t]) && (this.saturatedError[t] = 0);
            let tu = d(this.motors);
            this.voltageFactor = function(t, e=.1) {
                return (0,
                h.clamp)(t, 1 - e, 1)
            }(function(t, e, i, r=.1) {
                let o = (0,
                h.clamp)(i, 0, 1);
                return o >= .65 ? t + (1 - (o - .65) / .35 * r - t) * (1 - (0,
                c.exp)(-e / 1.2)) : t + (1 - t) * (1 - (0,
                c.exp)(-e / 2.5))
            }(this.voltageFactor, t, tu, E?.sagDepth), E?.sagDepth);
            let tp = function(t, e, i=.6) {
                if (e < n.GROUND_UPRIGHT_DOT || t >= i || t < 0)
                    return 1;
                let r = 1 - t / i;
                return 1 + .2 * r * r
            }(I, H, E ? 9.45 * E.propRadius : void 0)
              , td = B / 4 * this.voltageFactor * (j ? 0 : tp);
            this.aeroTime = (this.aeroTime + t) % 1;
            for (let e = 0; e < 4; e++) {
                let i = e % 2 == 0 ? C : -C
                  , r = e < 2 ? -F : F
                  , o = this.airVelocity.y + this.gyro.z * i - this.gyro.x * r
                  , s = (0,
                c.hypot)(this.airVelocity.x + this.gyro.y * r, this.airVelocity.z - this.gyro.y * i)
                  , n = function(t) {
                    let e = (0,
                    h.clamp01)(t);
                    return e * e
                }(this.motors[e]) * td
                  , l = function(t, e=.0635) {
                    return Math.sqrt(Math.max(0, t) / (2.45 * Math.PI * e * e))
                }(n, E?.propRadius)
                  , p = a && !q ? function(t, e, i) {
                    let r = -t / Math.max(1, i);
                    return u(1, 4, i) * u(.3, .9, r) * (1 - u(1.5, 2.5, r)) * (1 - u(.2, .8, e / Math.max(1, i)))
                }(o, s, l) : 0;
                this.wake[e] = (S = this.wake[e],
                S + (p - S) * (1 - (0,
                c.exp)(-t / (p > S ? .09 : .045)))),
                this.thrustsN[e] = n * (0,
                h.clamp)(1 - .18 * o / Math.max(1, l), .55, 1.1) * function(t, e, i) {
                    let r = 1.7 * i
                      , o = .65 * (0,
                    c.sin)(2 * e * Math.PI * 19 + r) + .35 * (0,
                    c.sin)(2 * e * Math.PI * 31 + 2.3 * r);
                    return 1 - (0,
                    h.clamp)(t, 0, 1) * (.16 + .045 * o)
                }(this.wake[e], this.aeroTime, e)
            }
            let tf = function(t, e, i, r=e) {
                let[o,s,a,n] = t;
                return {
                    thrust: o + s + a + n,
                    torqueX: r * (o + s - a - n),
                    torqueY: i * (o + n - s - a),
                    torqueZ: e * (o + a - s - n)
                }
            }(this.thrustsN, C, P, F);
            if (ti && this.onTrace && (ti.deliveredTorque = [tf.torqueX, tf.torqueY, tf.torqueZ],
            ti.motorTargets = [...th],
            ti.motors = [...this.motors],
            ti.voltageFactor = this.voltageFactor,
            this.onTrace(ti)),
            tf.thrust > 1e-6 && (this.scratch.set(0, 1, 0).applyQuaternion(this.q).multiplyScalar(tf.thrust * t),
            e.applyImpulse(this.scratch, !0)),
            Math.abs(tf.torqueX) + Math.abs(tf.torqueY) + Math.abs(tf.torqueZ) > 1e-8 && (this.torque.set(tf.torqueX, tf.torqueY, tf.torqueZ),
            this.torque.applyQuaternion(this.q).multiplyScalar(t),
            e.applyTorqueImpulse(this.torque, !0)),
            j) {
                this.scratch.set(0, 1, 0).applyQuaternion(this.q);
                let i = Math.sign(H);
                .05 > Math.abs(H) && (i = Math.sign(k.x * this.scratch.z - k.z * this.scratch.x) || 1),
                this.torque.set(-this.scratch.z * i, 0, this.scratch.x * i);
                let r = this.torque.length();
                r > 1e-6 && (this.torque.multiplyScalar(n.GROUND_TIP_TORQUE * (E ? z.mass / .65 * C / v : 1) * t / r),
                e.applyTorqueImpulse(this.torque, !0))
            }
            Q > 0 && ((function(t, e, i, r, o, s, a=.045) {
                let n = a * i
                  , l = (t, e, i) => {
                    let a = (r * e * Math.abs(t) + i) * s;
                    return -t * o * a / (o + a)
                }
                ;
                return t.set(l(e.x, 1.15, n), l(e.y, 4, 0), l(e.z, 1, n))
            }
            )(this.scratch, this.airVelocity, 4 * tu, z.dragCoefficient, z.mass, t, E?.rotorDrag).applyQuaternion(this.q),
            e.applyImpulse(this.scratch, !0));
            let tm = this.result;
            return tm.throttleCommand = ts,
            tm.speed = Q,
            tm.altitude = V,
            tm.upDot = H,
            tm.motors[0] = this.motors[0],
            tm.motors[1] = this.motors[1],
            tm.motors[2] = this.motors[2],
            tm.motors[3] = this.motors[3],
            tm.voltageFactor = this.voltageFactor,
            tm
        }
    }
    let b = Object.freeze({
        name: "current",
        controller: () => new e.FlightController,
        uniformMass: !1,
        angularDamping: 0
    })
      , T = Object.freeze({
        name: "legacy",
        controller: () => new w,
        uniformMass: !0,
        angularDamping: .05
    });
    t.s(["CURRENT_PHYSICS", 0, b, "physicsFromSearch", 0, function(t, e=!0) {
        return e || "legacy" !== new URLSearchParams(t).get("physics") ? b : T
    }
    ], 306212)
}
, 774004, t => {
    "use strict";
    var e = t.i(190072)
      , i = t.i(60650)
      , r = t.i(625581)
      , o = t.i(353198)
      , s = t.i(807375)
      , a = t.i(789788)
      , n = t.i(11871)
      , l = t.i(720996)
      , h = t.i(106258)
      , c = t.i(809886)
      , u = t.i(306871);
    let p = [[-.56, -.84], [.56, -.84]]
      , d = new e.Vector3;
    function f(t, e) {
        let i = Math.tan(e.fov * Math.PI / 360)
          , [r,o] = p[t];
        return d.set(.4 * r * i * e.aspect, .4 * o * i, -.4).applyMatrix4(e.matrixWorld),
        [d.x, d.y, d.z]
    }
    function m(t, e, i) {
        let r = Math.min(1, Math.max(0, e / t.length));
        for (let e = 0; e < 3; e++)
            i[e] = t.start[e] + (t.end[e] - t.start[e]) * r;
        return i
    }
    var g = t.i(247638)
      , y = t.i(635525)
      , v = t.i(483242)
      , M = t.i(601060)
      , x = t.i(790504);
    let w = [[.2, .016, .04], [.2, .016, .04], [.1, .05, .15], [.21, .03, .045]];
    function b(t) {
        let e = 0x7fffffff & Math.imul(0x2545f491 ^ t, 0x9e3779b1) || 1;
        return () => (e = Math.imul(e, 0x41c64e6d) + 12345 & 0x7fffffff) / 0x7fffffff
    }
    let T = (t, e, i) => {
        let r = Math.max(0, Math.min(1, (i - t) / (e - t)));
        return r * r * (3 - 2 * r)
    }
    ;
    var R = t.i(617317)
      , A = t.i(905289);
    let D = {
        min: .2,
        perMetre: .012,
        alpha: .85
    }
      , S = {
        min: .05,
        perMetre: .0035,
        alpha: 1
    }
      , q = `
#include <common>
#include <logdepthbuf_pars_vertex>
attribute vec4 tint;
#ifdef CRAFT
attribute vec3 color;
#endif
varying vec4 vTint;
varying vec2 vUv;
void main() {
  vTint = tint;
  #ifdef CRAFT
    vTint.rgb *= color;
  #endif
  vUv = uv;
  #ifdef BILLBOARD
    vec4 center = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    center.xy += position.xy * vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz));
    gl_Position = projectionMatrix * center;
  #else
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    vTint.rgb *= 0.65 + 0.35 * abs(normal.y);
  #endif
  #include <logdepthbuf_vertex>
}
`
      , _ = `
#include <common>
#include <logdepthbuf_pars_fragment>
varying vec4 vTint;
varying vec2 vUv;
void main() {
  vec4 color = vTint;
  #ifdef GLOW
    float radius = length(vUv - 0.5) * 2.0;
    color.a *= pow(max(0.0, 1.0 - radius), 2.0);
  #endif
  #ifdef SOFT
    // A smoke puff: a soft-edged disc, a little darker underneath.
    float edge = length(vUv - 0.5) * 2.0;
    color.a *= 1.0 - smoothstep(0.2, 1.0, edge);
    color.rgb *= 0.86 + 0.14 * vUv.y;
  #endif
  if (color.a < 0.003) discard;
  gl_FragColor = color;
  #include <logdepthbuf_fragment>
  #include <colorspace_fragment>
}
`;
    function E(t, i, r={}) {
        let o = new e.ShaderMaterial({
            vertexShader: q,
            fragmentShader: _,
            defines: r,
            transparent: !0,
            depthWrite: !!r.CRAFT || !!r.SOLID,
            side: e.DoubleSide,
            toneMapped: !1,
            ...r.GLOW ? {
                blending: e.AdditiveBlending
            } : {}
        })
          , s = new e.InstancedBufferAttribute(new Float32Array(4 * i),4).setUsage(e.DynamicDrawUsage);
        t.setAttribute("tint", s);
        let a = new e.InstancedMesh(t,o,i);
        return a.instanceMatrix.setUsage(e.DynamicDrawUsage),
        a.frustumCulled = !1,
        a.raycast = () => {}
        ,
        a.count = 0,
        {
            mesh: a,
            tint: s,
            material: o,
            geometry: t
        }
    }
    function z(t=!1) {
        let i = new e.BufferGeometry
          , r = 8 * u.MAX_SHOWN_BOLTS * 12;
        i.setAttribute("position", new e.BufferAttribute(new Float32Array(3 * r),3).setUsage(e.DynamicDrawUsage)),
        i.setAttribute("tint", new e.BufferAttribute(new Float32Array(4 * r),4).setUsage(e.DynamicDrawUsage)),
        i.setAttribute("edge", new e.BufferAttribute(new Float32Array(r),1).setUsage(e.DynamicDrawUsage));
        let o = new e.ShaderMaterial({
            transparent: !0,
            depthWrite: !1,
            depthTest: !0,
            side: e.DoubleSide,
            toneMapped: !1,
            ...t ? {
                blending: e.AdditiveBlending
            } : {},
            vertexShader: `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      attribute vec4 tint;
      attribute float edge;
      varying vec4 vTint;
      varying float vEdge;
      void main() {
        vTint = tint;
        vEdge = edge;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        #include <logdepthbuf_vertex>
      }
    `,
            fragmentShader: `
      #include <common>
      #include <logdepthbuf_pars_fragment>
      varying vec4 vTint;
      varying float vEdge;
      void main() {
        float across = 1.0 - abs(vEdge);
        gl_FragColor = vec4(vTint.rgb, vTint.a * across);
        #include <logdepthbuf_fragment>
        #include <colorspace_fragment>
      }
    `
        })
          , s = new e.Mesh(i,o);
        return s.frustumCulled = !1,
        s.raycast = () => {}
        ,
        s.renderOrder = 2,
        i.setDrawRange(0, 0),
        {
            mesh: s,
            geometry: i,
            material: o
        }
    }
    function C(t, e, i, r, o) {
        if (!r)
            return (0,
            y.samplePose)(t, Math.min(e, i), o);
        o.run = r.run;
        for (let t = 0; t < 3; t++)
            o.p[t] = r.p[t];
        return !0
    }
    t.s(["createMultiplayerRenderer", 0, function() {
        let t, p, d, q, _ = new e.Group, F = new Map, P = (t, e) => {
            let s = `${t}:${e}`
              , a = F.get(s);
            if (!a) {
                let n = o.DRONE_SKIN_IDS.includes(e) && "factory" !== e ? e : i.STAND_IN_SKIN;
                if (n !== e)
                    return P(t, n);
                a = E((0,
                r.flightGeometry)(t, n, !0).clone(), y.MAX_PEERS, {
                    CRAFT: "1"
                }),
                F.set(s, a),
                _.add(a.mesh)
            }
            return a
        }
        , O = new Map, G = new e.Color("white"), U = E(new e.PlaneGeometry(1,1), y.MAX_PEERS, {
            BILLBOARD: "1",
            GLOW: "1"
        }), I = E(new e.PlaneGeometry(1,1), 6 * y.MAX_PEERS, {
            BILLBOARD: "1",
            GLOW: "1"
        }), V = (t = new e.BufferGeometry,
        p = 17 * y.MAX_PEERS * 6,
        t.setAttribute("position", new e.BufferAttribute(new Float32Array(3 * p),3).setUsage(e.DynamicDrawUsage)),
        t.setAttribute("tint", new e.BufferAttribute(new Float32Array(4 * p),4).setUsage(e.DynamicDrawUsage)),
        d = new e.ShaderMaterial({
            transparent: !0,
            depthWrite: !1,
            side: e.DoubleSide,
            blending: e.AdditiveBlending,
            toneMapped: !1,
            vertexShader: `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      attribute vec4 tint;
      varying vec4 vTint;
      void main() {
        vTint = tint;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        #include <logdepthbuf_vertex>
      }
    `,
            fragmentShader: `
      #include <common>
      #include <logdepthbuf_pars_fragment>
      varying vec4 vTint;
      void main() {
        gl_FragColor = vTint;
        #include <logdepthbuf_fragment>
        #include <colorspace_fragment>
      }
    `
        }),
        (q = new e.Mesh(t,d)).frustumCulled = !1,
        q.raycast = () => {}
        ,
        t.setDrawRange(0, 0),
        {
            mesh: q,
            geometry: t,
            material: d
        }), B = E(new e.PlaneGeometry(1,1), 72, {
            BILLBOARD: "1",
            SOFT: "1"
        }), N = E(new e.BoxGeometry(1,1,1), 32, {
            SOLID: "1"
        }), L = z(), k = z(!0), Y = new Map, Q = [new e.PointLight(0xffffff,0,3,2)];
        for (let t of Q)
            t.visible = !1,
            _.add(t);
        let W = [U, I, B, N];
        for (let t of [...W, V, L, k])
            _.add(t.mesh);
        let X = new e.Color(y.GOLD)
          , H = new e.Color(y.ADMIN_RED)
          , Z = A.RACER_COLORS.map( (t, i) => new e.Color((0,
        A.racerColor)(i)))
          , K = new Map
          , j = new e.Object3D
          , $ = new e.Vector3
          , J = new e.Vector3
          , tt = new e.Vector3
          , te = new e.Vector3
          , ti = new e.Vector3
          , tr = new e.Quaternion
          , to = new e.Quaternion
          , ts = new e.Matrix4
          , ta = new e.Vector3
          , tn = (0,
        y.emptyPose)()
          , tl = (0,
        y.emptyPose)()
          , th = V.geometry.getAttribute("position")
          , tc = V.geometry.getAttribute("tint")
          , tu = new Map
          , tp = new e.Color("#f4f3ee")
          , td = new e.Color("#9a9ca0")
          , tf = new e.Color
          , tm = new e.Color("#3c4047")
          , tg = new e.Color("#25282e")
          , ty = new e.Color
          , tv = {
            p: [0, 0, 0],
            size: 0,
            alpha: 0,
            shade: 0
        }
          , tM = {
            p: [0, 0, 0],
            q: [0, 0, 0, 1],
            scale: 1,
            alpha: 0
        }
          , tx = L.geometry.getAttribute("position")
          , tw = L.geometry.getAttribute("tint")
          , tb = L.geometry.getAttribute("edge")
          , tT = (0,
        u.emptyBoltFrame)()
          , tR = new e.Color
          , tA = new e.Color
          , tD = {
            seat: null,
            position: [0, 0, 0]
        }
          , tS = [0, 0, 0]
          , tq = [0, 0, 0]
          , t_ = new e.Vector3;
        function tE(t, e, i, r=L) {
            let o = r.geometry.getAttribute("position")
              , s = r.geometry.getAttribute("tint")
              , a = r.geometry.getAttribute("edge")
              , {tail: n, head: l, alpha: h} = tT
              , c = l - n;
            if (!(c > 0))
                return i;
            for (let l of [D, S]) {
                let p = l === D ? e : tA;
                for (let e = 0; e < 8; e++) {
                    let d = n + c * e / 8
                      , f = n + c * (e + 1) / 8;
                    if ("start" in t ? (m(t, d, tS),
                    m(t, f, tq)) : ((0,
                    u.boltPoint)(t, tT, d, tS),
                    (0,
                    u.boltPoint)(t, tT, f, tq)),
                    te.set(tq[0] - tS[0], tq[1] - tS[1], tq[2] - tS[2]),
                    1e-8 > te.lengthSq())
                        continue;
                    let g = Math.hypot($.x - tS[0], $.y - tS[1], $.z - tS[2])
                      , y = Math.hypot($.x - tq[0], $.y - tq[1], $.z - tq[2]);
                    ti.set($.x - tS[0], $.y - tS[1], $.z - tS[2]),
                    tt.crossVectors(te, ti).normalize();
                    for (let t = 0; t < 6; t++) {
                        let n = 2 === t || 4 === t || 5 === t
                          , c = 1 === t || 3 === t || 4 === t ? 1 : -1
                          , u = n ? tq : tS
                          , d = n ? y : g
                          , f = Math.max(r === k ? .01 * l.min : l.min, l.perMetre * d);
                        t_.copy(tt).multiplyScalar(f * c),
                        o.setXYZ(i, u[0] + t_.x, u[1] + t_.y, u[2] + t_.z),
                        s.setXYZW(i, p.r, p.g, p.b, h * l.alpha * (n ? e + 1 : e) / 8),
                        a.setX(i++, c)
                    }
                }
            }
            return i
        }
        function tz(t, e, i, r, o, s, a) {
            ts.compose(i, r, o),
            t.mesh.setMatrixAt(e, ts),
            t.tint.setXYZW(e, s.r, s.g, s.b, a)
        }
        return {
            group: _,
            racers: K,
            update(t, p, d) {
                p.getWorldPosition($);
                let m = null !== R.useMatchRace.getState().match;
                for (let[e,i] of K)
                    i.fade.current = 0,
                    m && t.peers.some(t => t.seat === e) || K.delete(e);
                for (let t of [...F.values(), ...O.values()])
                    t.mesh.count = 0;
                let A = 0
                  , D = 0
                  , S = 0;
                for (let o of t.peers) {
                    let a = (0,
                    y.drawPilot)(t, o, d);
                    if (!a)
                        continue;
                    let {time: n, pose: l} = a
                      , h = (0,
                    y.presenceAlpha)(o, d) * (0,
                    y.smoothFade)(n - o.frames[0]?.t, 0, 700);
                    if (h <= 0)
                        continue;
                    let c = void 0 === o.seat ? null : (0,
                    s.knockedOut)(o.seat, l.life);
                    if (c) {
                        let t = `${o.seat}:${c.life}`;
                        tu.has(t) || tu.set(t, {
                            at: c.at,
                            origin: [...l.p],
                            drift: [...o.frames.at(-1)?.v ?? [0, 0, 0]],
                            seed: 97 * o.seat + c.life,
                            floor: (0,
                            M.groundBelow)(l.p),
                            team: o.team
                        });
                        continue
                    }
                    t.looks?.drawn(o, o.drawn?.time ?? n, l),
                    J.fromArray(l.p);
                    let u = $.distanceTo(J)
                      , p = h * (0,
                    y.distanceAlpha)(u, "trail");
                    if (p < .003)
                        continue;
                    let f = m && void 0 !== o.seat
                      , g = f ? Z[o.seat % Z.length] : o.admin ? H : X
                      , v = h * (0,
                    y.distanceAlpha)(u, "body");
                    tr.fromArray(l.q);
                    let x = l.droneId ?? "freestyle"
                      , w = l.palette ? null : P(x, l.droneSkin ?? i.STAND_IN_SKIN);
                    if (l.palette) {
                        let t = `${x}:${l.palette.shell}:${l.palette.accent}:${l.palette.props}`
                          , e = O.get(t);
                        e || (e = {
                            ...E((0,
                            r.flightGeometry)(x, "factory", !0, !1, l.palette).clone(), y.MAX_PEERS, {
                                CRAFT: "1"
                            }),
                            usedAt: d
                        },
                        O.set(t, e),
                        _.add(e.mesh)),
                        e.usedAt = d,
                        w = e
                    }
                    if (!w)
                        continue;
                    if (tz(w, w.mesh.count++, J, tr, ta.setScalar(1), G, v),
                    tz(U, A, J, to, ta.setScalar(o.admin ? .85 : .65), g, .5 * v * (0,
                    y.smoothFade)(u, 3, 8)),
                    A++,
                    f) {
                        let t = K.get(o.seat);
                        t || (t = {
                            seat: o.seat,
                            target: {
                                current: new e.Group
                            },
                            fade: {
                                current: 0
                            }
                        },
                        K.set(o.seat, t)),
                        t.target.current.position.copy(J),
                        t.fade.current = p;
                        continue
                    }
                    if (o.admin && v > .01)
                        for (let t = 0; t < 6; t++) {
                            let e = (d / 1100 + t / 6) % 1
                              , i = 2.399 * t + d / 1600;
                            j.position.set(J.x + Math.cos(i) * (.12 + .25 * e), J.y + .45 * e, J.z + Math.sin(i) * (.12 + .25 * e)),
                            tz(I, D++, j.position, to, ta.setScalar(.09 * (1 - e)), H, v * (1 - e) * (0,
                            y.smoothFade)(u, 3, 8))
                        }
                    let b = t.ahead ? o.frames[o.frames.length - 1].t : 1 / 0;
                    for (let t = 0; t < 17 && C(o.frames, n - 80 * t, b, 0 === t ? l : null, tn) && C(o.frames, n - (t + 1) * 80, b, null, tl) && tn.run === l.run && tl.run === l.run; t++) {
                        if (te.set(tl.p[0] - tn.p[0], tl.p[1] - tn.p[1], tl.p[2] - tn.p[2]),
                        1e-6 > te.lengthSq() || te.lengthSq() > 400)
                            continue;
                        ti.set($.x - tn.p[0], $.y - tn.p[1], $.z - tn.p[2]),
                        tt.crossVectors(te, ti).normalize().multiplyScalar(.055);
                        let e = h * (0,
                        y.distanceAlpha)(ti.length(), "trail") * (1 - t / 17) ** 2 * .7;
                        for (let t = 0; t < 6; t++) {
                            let i = 2 === t || 4 === t || 5 === t
                              , r = 1 === t || 3 === t || 4 === t ? 1 : -1
                              , o = i ? tl.p : tn.p;
                            th.setXYZ(S, o[0] + tt.x * r, o[1] + tt.y * r, o[2] + tt.z * r),
                            tc.setXYZW(S++, g.r, g.g, g.b, e * (i ? .85 : 1))
                        }
                    }
                }
                let q = 0
                  , z = t.bolts?.list;
                if (z?.length)
                    for (let e of (tD.seat = t.seat ?? null,
                    tD.team = t.team ?? null,
                    tD.position = [g.live.position.x, g.live.position.y, g.live.position.z],
                    tD.bound = (0,
                    a.boundingRadius)((n.DRONE_PROFILES[g.live.droneId] ?? n.DRONE_PROFILES[o.DEFAULT_DRONE]).halfExtents),
                    tD.down = null !== tD.seat && null !== (0,
                    s.knockedOut)(tD.seat, s.combatHud.self.life),
                    z)) {
                        if (!(0,
                        u.drawBolt)(e, t, d, tD, tT))
                            continue;
                        let i = (0,
                        s.teamColor)(e.team);
                        tR.set(i),
                        tA.set((0,
                        u.boltCore)(i)),
                        q = tE(e, tR, q)
                    }
                let ts = h.useSimStore.getState()
                  , tS = (0,
                c.isPhasePaused)(ts.phase) || ts.settingsOpen || ts.calibrating || ts.adminOpen || ts.profileOpen || "u" > typeof document && document.hidden
                  , tq = s.combatHud.active && !tS
                  , t_ = tq && !(0,
                l.motionReduced)() ? ts.settings.camera.shake : 0
                  , tC = t_ > 0 && "low" !== ts.settings.graphics.quality;
                for (let t of Q)
                    t.visible = tC,
                    t.intensity = 0;
                for (let t of Y.keys())
                    s.combatHud.bolts.some(e => e.id === t) || Y.delete(t);
                let tF = 0;
                if (tq)
                    for (let t of s.combatHud.bolts) {
                        let e = Y.get(t.id);
                        e && e.at === t.at || (e = {
                            ...function(t, e) {
                                let i = f(t.id % 2, e)
                                  , r = [t.origin[0] + t.dir[0] * t.length, t.origin[1] + t.dir[1] * t.length, t.origin[2] + t.dir[2] * t.length];
                                return {
                                    start: i,
                                    end: r,
                                    length: Math.hypot(...r.map( (t, e) => t - i[e]))
                                }
                            }(t, p),
                            at: t.at
                        },
                        Y.set(t.id, e));
                        let i = d - t.at
                          , r = (0,
                        s.teamColor)(s.combatHud.team);
                        if (tC && i >= 0 && i < 75) {
                            let e = Q[0];
                            e.position.fromArray(f(t.id % 2, p)),
                            e.color.set(r),
                            e.intensity = Math.max(e.intensity, 1.8 * t_ * (1 - i / 75))
                        }
                        (function(t, e, i, r) {
                            let o = i - t.at
                              , s = t.speed * o / 1e3;
                            return !(o < 0) && e.length > 0 && !(s >= e.length + t.speed * u.BOLT_FADE_MS / 1e3) && (r.head = Math.min(e.length, s),
                            r.tail = Math.max(0, r.head - u.BOLT_STREAK),
                            r.alpha = s > e.length ? 1 - (s - e.length) / (t.speed * u.BOLT_FADE_MS / 1e3) : 1,
                            r.head > r.tail)
                        }
                        )(t, e, d, tT) && (tR.set(r),
                        tA.set((0,
                        u.boltCore)(r)).multiplyScalar(2),
                        tF = tE(e, tR, tF, k))
                    }
                if (k.mesh.visible = tF > 0,
                k.geometry.setDrawRange(0, tF),
                tF)
                    for (let t of ["position", "tint", "edge"]) {
                        let e = k.geometry.getAttribute(t);
                        e.clearUpdateRanges(),
                        e.addUpdateRange(0, tF * e.itemSize),
                        e.needsUpdate = !0
                    }
                if (L.mesh.visible = q > 0,
                L.geometry.setDrawRange(0, q),
                q)
                    for (let t of [tx, tw, tb])
                        t.clearUpdateRanges(),
                        t.addUpdateRange(0, q * t.itemSize),
                        t.needsUpdate = !0;
                U.mesh.count = A,
                I.mesh.count = D;
                let tP = 0
                  , tO = 0
                  , tG = 0;
                for (let[t,e] of tu) {
                    let i = d - e.at;
                    if (i > 6e4) {
                        tu.delete(t);
                        continue
                    }
                    if (i >= 1500 || tG >= 8)
                        continue;
                    tG++,
                    J.fromArray(e.origin);
                    let r = $.distanceTo(J)
                      , o = (0,
                    y.distanceAlpha)(r, "body")
                      , s = Math.min(2.5, Math.max(1, r / 15));
                    for (let t = 0; t < 9; t++)
                        if (function(t, e, i, r) {
                            if (i < 0 || i >= 1500)
                                return !1;
                            let o = b(31 * t.seed + e)
                              , s = e / 9 * Math.PI * 2 + (o() - .5) * .8
                              , a = -.25 + 1.05 * o()
                              , n = 0 === e ? 0 : .45 + .75 * o()
                              , l = (0,
                            x.ghostPoofTravel)(i / 1e3, .38)
                              , h = i / 1e3
                              , c = .3 * (1 - Math.exp(-(2.5 * h))) / 2.5
                              , u = n * l;
                            return r.p[0] = t.origin[0] + Math.cos(s) * Math.cos(a) * u + t.drift[0] * c,
                            r.p[1] = t.origin[1] + Math.sin(a) * u + t.drift[1] * c + .3 * h,
                            r.p[2] = t.origin[2] + Math.sin(s) * Math.cos(a) * u + t.drift[2] * c,
                            r.size = (0 === e ? 1.25 : .8 + .45 * o()) * (.35 + .75 * l + .35 * h),
                            r.alpha = Math.min(1, i / 50) * (1 - T(600, 1500, i)) * (0 === e ? .9 : .8),
                            r.shade = .55 + .45 * o(),
                            r.alpha > .003
                        }(e, t, i, tv)) {
                            tf.copy(td).lerp(tp, tv.shade);
                            for (let t = 0; t < 3; t++)
                                tv.p[t] = e.origin[t] + (tv.p[t] - e.origin[t]) * s;
                            tz(B, tP++, J.fromArray(tv.p), to, ta.setScalar(tv.size * s), tf, tv.alpha * o)
                        }
                    ty.set(v.TEAM_COLORS[v.ARENA_TEAMS[e.team ?? 0] ?? "blue"]);
                    for (let t = 0; t < 4; t++) {
                        if (!function(t, e, i, r) {
                            if (i < 0 || i >= 1500)
                                return !1;
                            let o = b(53 * t.seed + 7 + e)
                              , s = e / 4 * Math.PI * 2 + (o() - .5) * 1.2
                              , a = 2 + 1.8 * o()
                              , n = 2.2 + 1.6 * o() + .5 * t.drift[1]
                              , l = t.floor + w[e % w.length][1] / 2
                              , h = t.origin[1] - l
                              , c = h >= 0 ? (n + Math.sqrt(n * n + 19.62 * h)) / 9.81 : 0
                              , u = Math.min(i / 1e3, c);
                            r.p[0] = t.origin[0] + (Math.cos(s) * a + .5 * t.drift[0]) * u,
                            r.p[1] = Math.max(l, t.origin[1] + n * u - 4.905 * u * u),
                            r.p[2] = t.origin[2] + (Math.sin(s) * a + .5 * t.drift[2]) * u;
                            let p = o() - .5
                              , d = o() - .5
                              , f = o() - .5
                              , m = Math.hypot(p, d, f) || 1;
                            p /= m,
                            d /= m,
                            f /= m,
                            i / 1e3 >= c && (p = 0,
                            d = 1,
                            f = 0);
                            let g = (9 + 9 * o()) * u + o() * Math.PI
                              , y = Math.sin(g / 2);
                            r.q[0] = p * y,
                            r.q[1] = d * y,
                            r.q[2] = f * y,
                            r.q[3] = Math.cos(g / 2);
                            let v = 1 - T(1150, 1500, i);
                            return r.scale = .4 + .6 * v,
                            r.alpha = v,
                            v > .003
                        }(e, t, i, tM))
                            continue;
                        let[r,s,a] = w[t];
                        tz(N, tO++, J.fromArray(tM.p), tr.fromArray(tM.q), ta.set(r * tM.scale, s * tM.scale, a * tM.scale), t < 2 ? ty : 2 === t ? tg : tm, tM.alpha * o)
                    }
                }
                for (let[t,e] of (B.mesh.count = tP,
                N.mesh.count = tO,
                O))
                    0 === e.mesh.count && (d - e.usedAt > 15e3 || O.size > 24) && (_.remove(e.mesh),
                    e.geometry.dispose(),
                    e.material.dispose(),
                    e.mesh.dispose(),
                    O.delete(t));
                for (let t of [...W, ...F.values(), ...O.values()])
                    t.mesh.visible = t.mesh.count > 0,
                    t.mesh.visible && (t.mesh.instanceMatrix.needsUpdate = !0,
                    t.tint.needsUpdate = !0);
                V.mesh.visible = S > 0,
                V.geometry.setDrawRange(0, S),
                S && (th.needsUpdate = !0,
                tc.needsUpdate = !0)
            },
            dispose() {
                for (let t of [...W, ...F.values(), ...O.values(), V, L, k])
                    t.geometry.dispose(),
                    t.material.dispose();
                for (let t of [...W, ...F.values(), ...O.values()])
                    t.mesh.dispose();
                _.clear()
            }
        }
    }
    ], 774004)
}
]);
