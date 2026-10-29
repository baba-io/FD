(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 502108, 339231, 406606, 139853, e => {
    "use strict";
    e.s(["ActivePlayClock", 0, class {
        input = null;
        lastInput = -1 / 0;
        lastFlight = -1 / 0;
        respawn = -1;
        graceUntil = -1 / 0;
        step(e, t, i) {
            if (!i.enabled)
                return this.input = null,
                this.lastInput = this.lastFlight = this.graceUntil = -1 / 0,
                this.respawn = i.respawn,
                0;
            let s = -1 !== this.respawn && i.respawn !== this.respawn
              , n = !1;
            if (!s) {
                let e = i.input
                  , t = this.input;
                for (let i = 0; i < e.length && !n; i++)
                    n = null === t ? Math.abs(e[i]) > .05 : Math.abs(e[i] - t[i]) >= .025
            }
            n && (this.lastInput = e),
            (n || !this.input || s) && this.remember(i.input),
            s && (this.graceUntil = this.lastFlight + 5e3,
            this.respawn = i.respawn),
            this.respawn = i.respawn;
            let r = i.flying && i.armed && e - this.lastInput < 3e4 && (!i.grounded || n);
            r && (this.lastFlight = e);
            let o = (i.transition || i.flying) && e <= Math.max(this.graceUntil, this.lastFlight + 5e3);
            return (r || o) && t > 0 && t <= 500 ? t : 0
        }
        remember(e) {
            this.input && this.input.length === e.length || (this.input = Array(e.length));
            for (let t = 0; t < e.length; t++)
                this.input[t] = e[t]
        }
    }
    ], 502108);
    var t = e.i(190072)
      , i = e.i(252497);
    let s = new t.Quaternion
      , n = new t.Vector3;
    e.s(["crashForceThreshold", 0, function(e) {
        return e ? i.CRASH_FORCE_THRESHOLD_BOTTOM : i.CRASH_FORCE_THRESHOLD
    }
    , "isUndersideImpact", 0, function(e, t, r) {
        return s.set(r.x, r.y, r.z, r.w),
        n.set(0, 1, 0).applyQuaternion(s),
        !(Math.abs(e.x * n.x + e.y * n.y + e.z * n.z) < i.CRASH_UNDERSIDE_ALIGN) && t.x * n.x + t.y * n.y + t.z * n.z <= 0
    }
    ], 339231);
    var r = e.i(266246)
      , o = e.i(998494)
      , a = e.i(475127);
    let l = [64, 16, 4]
      , c = new Map;
    function h(e) {
        let t = e && c.get(e);
        return t && (c.delete(e),
        c.set(e, t)),
        t
    }
    function d(e, t) {
        return e && (c.delete(e),
        c.set(e, t),
        c.size > 4 && c.delete(c.keys().next().value)),
        t
    }
    function *p(e, t) {
        let i = []
          , s = (0,
        o.wallDistances)(t)
          , n = l.map( () => new Map)
          , a = l.map( () => [])
          , c = 0
          , h = !1
          , d = 0
          , p = e => {
            d += e.length;
            let t = Math.min(...e.map(e => e.x)) - .05
              , i = Math.max(...e.map(e => e.x)) + .05
              , r = Math.min(...e.map(e => e.z)) - .05
              , o = Math.max(...e.map(e => e.z)) + .05
              , p = Math.min(...e.map(e => e.y)) - .05
              , u = Math.max(...e.map(e => e.y)) + .05;
            for (let e = 0; e < l.length; e++) {
                let f = l[e]
                  , m = Math.floor(Math.max(t, -s.negativeX) / f)
                  , y = Math.floor(Math.min(i, s.positiveX) / f)
                  , g = Math.floor(Math.max(r, -s.negativeZ) / f)
                  , b = Math.floor(Math.min(o, s.positiveZ) / f);
                if (y < m || b < g)
                    continue;
                let w = (y - m + 1) * (b - g + 1);
                if (w > 256) {
                    if (2e5 === c || 64 === a[e].length) {
                        h = !0;
                        return
                    }
                    c++,
                    a[e].push({
                        minX: m,
                        maxX: y,
                        minZ: g,
                        maxZ: b,
                        bottom: p,
                        top: u
                    });
                    continue
                }
                d += w;
                for (let t = m; t <= y; t++)
                    for (let i = g; i <= b; i++) {
                        let s = `${t},${i}`
                          , r = n[e].get(s) ?? []
                          , o = 0
                          , a = r.length;
                        for (; o < a; ) {
                            let e = o + a >>> 1;
                            r[e][1] < p ? o = e + 1 : a = e
                        }
                        if (o === r.length || r[o][0] > u) {
                            if (2e5 === c) {
                                h = !0;
                                return
                            }
                            r.splice(o, 0, [p, u]),
                            c++
                        } else {
                            let e = r[o];
                            e[0] = Math.min(e[0], p),
                            e[1] = Math.max(e[1], u);
                            let t = o + 1;
                            for (; t < r.length && r[t][0] <= e[1]; )
                                e[1] = Math.max(e[1], r[t][1]),
                                t++;
                            c -= t - o - 1,
                            r.splice(o + 1, t - o - 1)
                        }
                        n[e].set(s, r)
                    }
            }
        }
        ;
        for (let t = 0; t < e.numColliders(); t++) {
            if (d >= 2e3 && (d = 0,
            yield "respawn index"),
            h || 2e5 === c) {
                h = !0;
                break
            }
            c++;
            let s = e.collider(t)
              , n = s.shape;
            if (s.isSensor())
                continue;
            let o = s.translation()
              , a = s.rotation()
              , l = (e, t, i) => {
                let s = 2 * (a.y * i - a.z * t)
                  , n = 2 * (a.z * e - a.x * i)
                  , r = 2 * (a.x * t - a.y * e);
                return {
                    x: o.x + e + a.w * s + a.y * r - a.z * n,
                    y: o.y + t + a.w * n + a.z * s - a.x * r,
                    z: o.z + i + a.w * r + a.x * n - a.y * s
                }
            }
              , u = (e, t, i) => {
                let s = [];
                for (let n of [-1, 1])
                    for (let r of [-1, 1])
                        for (let o of [-1, 1])
                            s.push(l(n * e, r * t, o * i));
                p(s)
            }
            ;
            switch (n.type) {
            case r.ShapeType.Cuboid:
                {
                    let {halfExtents: e} = n;
                    u(e.x, e.y, e.z);
                    break
                }
            case r.ShapeType.Ball:
                {
                    let {radius: e} = n;
                    u(e, e, e);
                    break
                }
            case r.ShapeType.Capsule:
                {
                    let {radius: e, halfHeight: t} = n;
                    u(e, e + t, e);
                    break
                }
            case r.ShapeType.TriMesh:
                {
                    let {vertices: e, indices: t} = n;
                    for (let i = 0; i < t.length && !h; i += 3)
                        p([0, 1, 2].map(s => {
                            let n = 3 * t[i + s];
                            return l(e[n], e[n + 1], e[n + 2])
                        }
                        )),
                        d >= 2e3 && (d = 0,
                        yield "respawn index");
                    break
                }
            case r.ShapeType.ConvexPolyhedron:
                {
                    let e = n.vertices
                      , t = [1 / 0, 1 / 0, 1 / 0]
                      , i = [-1 / 0, -1 / 0, -1 / 0];
                    for (let s = 0; s < e.length; s += 3) {
                        let n = l(e[s], e[s + 1], e[s + 2]);
                        [n.x, n.y, n.z].forEach( (e, s) => {
                            t[s] = Math.min(t[s], e),
                            i[s] = Math.max(i[s], e)
                        }
                        )
                    }
                    d += e.length / 3,
                    p([{
                        x: t[0],
                        y: t[1],
                        z: t[2]
                    }, {
                        x: i[0],
                        y: i[1],
                        z: i[2]
                    }]);
                    break
                }
            case r.ShapeType.HeightField:
                {
                    let {nrows: e, ncols: t, heights: i, scale: s} = n
                      , r = (n, r) => l((n / t - .5) * s.x, i[n * (e + 1) + r] * s.y, (r / e - .5) * s.z);
                    for (let i = 0; i < t && !h; i++)
                        for (let t = 0; t < e && !h; t++)
                            p([r(i, t), r(i + 1, t), r(i, t + 1), r(i + 1, t + 1)]),
                            d >= 2e3 && (d = 0,
                            yield "respawn index");
                    break
                }
            default:
                continue
            }
            if (h)
                break;
            i.push(t)
        }
        let u = [];
        for (let e of n) {
            let t = new Map;
            for (let[i,s] of e)
                t.set(i, {
                    bottoms: s.map( ([e]) => e),
                    tops: s.map( ([,e]) => e)
                }),
                (d += 1 + s.length) >= 2e3 && (d = 0,
                yield "respawn index");
            u.push(t)
        }
        return {
            levels: u,
            spans: a,
            colliders: i,
            storage: {
                records: c,
                tiles: u.reduce( (e, t) => e + t.size, 0),
                spans: a.reduce( (e, t) => e + t.length, 0),
                limited: h
            }
        }
    }
    class u {
        levels;
        spans;
        handles = new Set;
        storage;
        static get cachedWorldCount() {
            return c.size
        }
        constructor(e, t, i, s) {
            let n = s ?? h(i);
            if (!n) {
                const s = p(e, t);
                let r = s.next();
                for (; !r.done; )
                    r = s.next();
                n = d(i, r.value)
            }
            for (const t of (this.levels = n.levels,
            this.spans = n.spans,
            this.storage = n.storage,
            n.colliders))
                this.handles.add(e.collider(t).handle)
        }
        static*build(e, t, i) {
            let s = h(i) ?? d(i, (yield*p(e, t)));
            return new u(e,t,i,s)
        }
        top(e, t, i, s, n, r) {
            let o = this.levels[t].get(`${i},${s}`)
              , a = r;
            if (o) {
                let e = 0
                  , t = o.bottoms.length;
                for (; e < t; ) {
                    let i = e + t >>> 1;
                    o.bottoms[i] <= n + .05 ? e = i + 1 : t = i
                }
                e && (a = Math.max(a, Math.min(n, o.tops[e - 1])))
            }
            for (let e of this.spans[t])
                i >= e.minX && i <= e.maxX && s >= e.minZ && s <= e.maxZ && e.bottom <= n + .05 && (a = Math.max(a, Math.min(n, e.top)));
            let c = l[t];
            return e.collidersWithAabbIntersectingAabb({
                x: (i + .5) * c,
                y: (n + r) / 2,
                z: (s + .5) * c
            }, {
                x: c / 2 + .05,
                y: Math.abs(n - r) / 2 + .05,
                z: c / 2 + .05
            }, e => !(!this.handles.has(e.handle) && !e.isSensor() && (!e.parent() || e.parent().isFixed())) || (a = n,
            !1)),
            a
        }
    }
    function f(e, t) {
        return {
            id: "ground-respawn",
            label: "Nearby ground",
            pad: !1,
            position: e,
            yaw: t
        }
    }
    e.s(["GroundRespawnBounds", 0, u, "RESPAWN_REGIONS", 0, l], 406606);
    let m = .4 + .02
      , y = {
        x: 0,
        y: 0,
        z: 0,
        w: 1
    }
      , g = {
        x: 0,
        y: -1,
        z: 0
    };
    class b {
        items = [];
        get size() {
            return this.items.length
        }
        push(e) {
            let t = this.items;
            t.push(e);
            for (let e = t.length - 1; e > 0; ) {
                let i = e - 1 >> 1;
                if (!w(t[e], t[i]))
                    break;
                [t[e],t[i]] = [t[i], t[e]],
                e = i
            }
        }
        pop() {
            let e = this.items
              , t = e[0]
              , i = e.pop();
            if (e.length) {
                e[0] = i;
                for (let t = 0; ; ) {
                    let i = 2 * t + 1
                      , s = i + 1
                      , n = t;
                    if (i < e.length && w(e[i], e[n]) && (n = i),
                    s < e.length && w(e[s], e[n]) && (n = s),
                    n === t)
                        break;
                    [e[t],e[n]] = [e[n], e[t]],
                    t = n
                }
            }
            return t
        }
        peek() {
            return this.items[0]
        }
    }
    let w = (e, t) => e.bound < t.bound || e.bound === t.bound && e.order < t.order;
    e.s(["LANDING_ROOM", 0, 1, "containSpawn", 0, function(e, t, i=0) {
        let s = (0,
        o.wallDistances)(t)
          , n = (e, t, i) => Math.max(t, Math.min(i, Number.isFinite(e) ? e : (t + i) / 2));
        return {
            ...e,
            yaw: Number.isFinite(e.yaw) ? e.yaw : 0,
            position: [n(e.position[0], -s.negativeX + 1.5, s.positiveX - 1.5), n(e.position[1], i + .1, t.ceiling - 1.5), n(e.position[2], -s.negativeZ + 1.5, s.positiveZ - 1.5)]
        }
    }
    , "findGroundRespawn", 0, function(e, t, i, s=0, {boundsIndex: n, excludesSurface: c, crowded: h, groups: d, filter: p, inset: u=0, landingHeight: w=.42, under: x}={}) {
        let v = t.translation()
          , S = t.rotation();
        if (![v.x, v.y, v.z, S.x, S.y, S.z, S.w].every(Number.isFinite))
            throw Error("Cannot find ground respawn for a non-finite body pose");
        let k = a.atan2(2 * (S.x * S.z + S.w * S.y), 1 - 2 * (S.x * S.x + S.y * S.y))
          , T = Math.min(i.ceiling - 1.01, x ?? 1 / 0)
          , M = T - s + .01
          , R = (0,
        o.wallDistances)(i)
          , C = Math.max(u, 2.1)
          , E = -R.negativeX + C
          , L = R.positiveX - C
          , z = -R.negativeZ + C
          , O = R.positiveZ - C
          , I = Math.max(E, Math.min(L, v.x))
          , D = Math.max(z, Math.min(O, v.z))
          , _ = new r.Ray({
            x: v.x,
            y: T,
            z: v.z
        },{
            x: 0,
            y: -1,
            z: 0
        })
          , A = new r.Cuboid(1,.4,1)
          , P = new r.Ray({
            x: 0,
            y: 0,
            z: 0
        },{
            x: 0,
            y: -1,
            z: 0
        })
          , F = {
            x: 0,
            y: 0,
            z: 0,
            w: 1
        }
          , N = l.map(e => new r.Cuboid(e / 2 + .01,.005,e / 2 + .01))
          , U = Math.ceil(Math.max(L - E, O - z))
          , G = null
          , B = 1 / 0
          , H = 1 / 0
          , q = 0
          , X = 0
          , j = null
          , W = 1 / 0
          , Y = 1 / 0
          , V = 1 / 0
          , Z = e => {
            let t = l[e.level]
              , i = e.ix * t
              , s = e.iz * t
              , n = v.x < i ? i - v.x : v.x > i + t ? v.x - i - t : 0
              , r = v.z < s ? s - v.z : v.z > s + t ? v.z - s - t : 0
              , o = v.y - (e.top + .05 + m);
            return n * n + r * r + (o > 0 ? o * o : 0)
        }
          , K = (e, t, i, s) => {
            let n = {
                level: e,
                ix: t,
                iz: i,
                top: s,
                cast: !1,
                bound: 0,
                order: X++
            };
            return n.bound = Z(n),
            n
        }
          , $ = i => {
            if (i.cast = !0,
            n) {
                i.top = Math.min(i.top, n.top(e, i.level, i.ix, i.iz, T, s)),
                i.bound = Z(i);
                return
            }
            if (q >= 256)
                return;
            q++;
            let o = l[i.level]
              , a = e.castShape({
                x: (i.ix + .5) * o,
                y: T + .005,
                z: (i.iz + .5) * o
            }, y, g, N[i.level], 0, M, !0, r.QueryFilterFlags.EXCLUDE_SENSORS, d, void 0, t, p)
              , c = a?.time_of_impact;
            void 0 !== c && Number.isFinite(c) && c > 0 && (i.top = Math.min(i.top, T - c)),
            i.bound = Z(i)
        }
          , Q = new Map
          , J = (i, s, n) => {
            let o = Q.get(s);
            o || Q.set(s, o = new Map);
            let a = o.get(i);
            a || o.set(i, a = new Map);
            let l = a.get(n);
            if (void 0 === l) {
                Object.assign(P.origin, {
                    x: i,
                    y: s,
                    z: n
                });
                let o = e.castRayAndGetNormal(P, .3, !0, r.QueryFilterFlags.EXCLUDE_SENSORS, d, void 0, t, p);
                l = !(!o || o.normal.y < .98 || Math.abs(o.timeOfImpact - .15) > .08 || null != o.collider.parent() && !o.collider.parent().isFixed()),
                a.set(n, l)
            }
            return l
        }
          , ee = (i, n) => {
            let o = I + i
              , a = D + n;
            if (o < E || o > L || a < z || a > O)
                return;
            let l = function(e, t) {
                let i = Math.max(Math.abs(e), Math.abs(t));
                if (0 === i)
                    return 0;
                let s = t === -i && e < i ? e + i : e === i && t < i ? 2 * i + t + i : t === i ? 4 * i - e + i : 6 * i - t + i;
                return 1e7 * i + s
            }(i, n);
            Object.assign(_.origin, {
                x: o,
                y: T,
                z: a
            });
            let u = e.castRayAndGetNormal(_, M, !0, r.QueryFilterFlags.EXCLUDE_SENSORS, d, void 0, t, p);
            if (!u || u.normal.y < .85 || null != u.collider.parent() && !u.collider.parent().isFixed())
                return;
            let m = T - u.timeOfImpact + .4 + .02;
            if (m < s + .4 || m + .4 >= T)
                return;
            let y = (o - v.x) * (o - v.x) + (a - v.z) * (a - v.z) + (m - v.y) * (m - v.y);
            if (y > B || y === B && l >= H)
                return;
            let g = m - .4 - .02;
            if (c?.(o, g, a, 1))
                return;
            for (let e = -1; e <= 1; e += .5)
                for (let t = -1; t <= 1; t += .5)
                    if (!J(o + e, g + .15, a + t))
                        return;
            if (e.castShape({
                x: o,
                y: m,
                z: a
            }, F, {
                x: 0,
                y: 1,
                z: 0
            }, A, 0, T - m - .4, !0, r.QueryFilterFlags.EXCLUDE_SENSORS, d, void 0, t, p))
                return;
            let b = f([o, g + w, a], k);
            if (y < W || y === W && l < Y) {
                W = y,
                Y = l,
                j = b;
                let e = Math.sqrt(y) + 30;
                V = Math.min(V, e * e)
            }
            h?.(o, a, 1) || (B = y,
            V = Math.min(V, y),
            H = l,
            G = b)
        }
        ;
        for (let e = 0; e <= 3; e++) {
            if (e > U || e * e > V)
                return G ?? j;
            let t = 0 === e ? 1 : 8 * e;
            for (let i = 0; i < t; i++) {
                let t = 0 === e ? 0 : Math.floor(i / (2 * e))
                  , s = 0 === e ? 0 : i % (2 * e) - e
                  , n = 0 === t ? s : 1 === t ? e : 2 === t ? -s : -e
                  , r = 0 === t ? -e : 1 === t ? s : 2 === t ? e : -s;
                n * n + r * r < V && ee(n, r)
            }
        }
        if (4 > U || 16 > V)
            return G ?? j;
        let et = new b
          , ei = l[0]
          , es = Math.sqrt(V)
          , en = Math.max(E, v.x - es)
          , er = Math.min(L, v.x + es)
          , eo = Math.max(z, v.z - es)
          , ea = Math.min(O, v.z + es);
        for (let e = Math.floor((en - .01) / ei); e * ei <= er + .01; e++)
            for (let t = Math.floor((eo - .01) / ei); t * ei <= ea + .01; t++) {
                let i = K(0, e, t, T);
                i.bound <= V && et.push(i)
            }
        for (; et.size && et.peek().bound <= V; ) {
            let e = et.pop();
            if (!e.cast) {
                let t = e.bound;
                if ($(e),
                e.bound > t) {
                    et.push(e);
                    continue
                }
            }
            let t = l[e.level]
              , i = e.ix * t
              , s = e.iz * t;
            if (e.level + 1 < l.length) {
                let i = t / l[e.level + 1];
                for (let t = 0; t < i; t++)
                    for (let s = 0; s < i; s++) {
                        let n = K(e.level + 1, e.ix * i + t, e.iz * i + s, e.top);
                        n.bound <= V && et.push(n)
                    }
                continue
            }
            for (let n = Math.ceil(i - I); I + n < i + t; n++)
                for (let r = Math.ceil(s - D); D + r < s + t; r++) {
                    let t = I + n
                      , o = D + r;
                    if (t < i || o < s || 3 >= Math.max(Math.abs(n), Math.abs(r)))
                        continue;
                    let a = t - v.x
                      , l = o - v.z
                      , c = v.y - (e.top + .05 + m);
                    a * a + l * l + (c > 0 ? c * c : 0) > V || ee(n, r)
                }
        }
        return G ?? j
    }
    , "groundSpawn", 0, f], 139853)
}
, 201093, 438484, e => {
    "use strict";
    e.s(["CAPTURE_TAIL_STEPS", 0, 480], 201093);
    var t = e.i(475127)
      , i = e.i(646423)
      , s = e.i(319202);
    e.s(["WALL_COUNT", 0, 5, "createArenaWalls", 0, function(e, n, r) {
        let[o,a,l] = r.position
          , c = n.createRigidBody(e.RigidBodyDesc.fixed().setTranslation(o, a, l).setRotation({
            x: 0,
            y: (0,
            t.sin)(r.yaw / 2),
            z: 0,
            w: (0,
            t.cos)(r.yaw / 2)
        }));
        for (let t of (c.userData = {
            arenaWall: !0
        },
        function(e) {
            let[t,i,s] = e.size
              , n = t / 2
              , r = s / 2
              , o = i / 2;
            return [{
                centre: [n + .5, o, 0],
                half: [.5, o + .5, r + .5]
            }, {
                centre: [-n - .5, o, 0],
                half: [.5, o + .5, r + .5]
            }, {
                centre: [0, o, r + .5],
                half: [n + .5, o + .5, .5]
            }, {
                centre: [0, o, -r - .5],
                half: [n + .5, o + .5, .5]
            }, {
                centre: [0, i + .5, 0],
                half: [n + .5, .5, r + .5]
            }]
        }(r)))
            n.createCollider(e.ColliderDesc.cuboid(t.half[0], t.half[1], t.half[2]).setTranslation(t.centre[0], t.centre[1], t.centre[2]).setFriction(s.STATIC_FRICTION).setRestitution(s.STATIC_RESTITUTION).setCollisionGroups(i.WALL_GROUPS), c);
        return c
    }
    ], 438484)
}
, 494049, 463747, 880373, 837881, e => {
    "use strict";
    var t = e.i(101060);
    function i(e, i) {
        let {epoch: s, life: n, phase: r} = e
          , o = i.body;
        switch (o.type) {
        case "hit":
            return (r === t.PHASE.alive || r === t.PHASE.ko) && s === i.epoch && n === i.life;
        case "relaunch":
            return r === t.PHASE.ko && s === i.epoch && n === i.life;
        case "down":
            return r === t.PHASE.alive && s === i.epoch && n === i.life;
        case "reclaim":
            return (r === t.PHASE.out || r === t.PHASE.none) && (s === i.epoch || void 0 !== o.from && s === o.from);
        case "out":
            return s === i.epoch || void 0 !== o.from && r === t.PHASE.out && s === o.from;
        case "end":
            return !0
        }
    }
    e.s(["applyTransition", 0, function(e, i, s) {
        let n = i.body;
        switch (e.appliedCseq = i.cseq,
        n.type) {
        case "hit":
            if (e.hp = n.hp,
            e.recoverTicks = 0,
            e.guardTicks = 0,
            !n.ko || e.phase !== t.PHASE.alive)
                return null;
            return e.phase = t.PHASE.ko,
            e.koTicks = 0,
            {
                kind: "ko"
            };
        case "relaunch":
            return e.launch(n.life, s, n.carry),
            {
                kind: "pad",
                pad: n.pad
            };
        case "down":
            return e.phase = t.PHASE.ko,
            e.koTicks = 0,
            {
                kind: "ko"
            };
        case "reclaim":
            return e.epoch = n.epoch,
            e.launch(n.life, s, n.carry),
            {
                kind: "pad",
                pad: n.pad
            };
        case "out":
            return e.phase = t.PHASE.out,
            e.shield = 0,
            e.shieldTicks = 0,
            null;
        case "end":
            return e.phase = t.PHASE.over,
            null
        }
    }
    , "transitionVerdict", 0, function(e, t, s) {
        if (!e || e.match !== t.match || e.seat !== t.seat || t.cseq <= e.appliedCseq)
            return "drop";
        if ("out" === t.body.type || "end" === t.body.type)
            return i(e, t) ? "apply" : "drop";
        let n = t.body;
        return e.epoch !== t.epoch && ("reclaim" !== n.type || n.from !== e.epoch) ? "drop" : t.prev > e.appliedCseq ? "wait" : t.prev < e.appliedCseq || !i(e, t) ? "drop" : void 0 !== t.notBefore && s < t.notBefore ? "wait" : "apply"
    }
    ], 494049);
    class s {
        hi = 0xcbf29ce4;
        lo = 0x84222325;
        bits = new Float64Array(1);
        bytes = new Uint8Array(this.bits.buffer);
        add(e) {
            this.bits[0] = Number.isNaN(e) ? NaN : e;
            for (let e = 0; e < 8; e++)
                this.byte(this.bytes[e]);
            return this
        }
        addAll(e) {
            for (let t = 0; t < e.length; t++)
                this.add(e[t]);
            return this
        }
        byte(e) {
            this.lo ^= e;
            let t = this.lo
              , i = this.hi
              , s = (65535 & t) * 435
              , n = (t >>> 16) * 435
              , r = Math.floor((s + (65535 & n) * 65536) / 0x100000000) + (n >>> 16);
            this.hi = Math.imul(i, 435) + (t << 8) + r >>> 0,
            this.lo = s + ((65535 & n) << 16) >>> 0
        }
        hex() {
            return this.hi.toString(16).padStart(8, "0") + this.lo.toString(16).padStart(8, "0")
        }
        fold() {
            return (this.hi ^ this.lo) >>> 0
        }
        reset() {
            return this.hi = 0xcbf29ce4,
            this.lo = 0x84222325,
            this
        }
    }
    e.s(["BitHash", 0, s], 463747);
    var n = e.i(190072)
      , r = e.i(818686)
      , o = e.i(324792)
      , a = e.i(791560)
      , l = e.i(147424)
      , c = e.i(475127);
    let h = (e, t) => (e + 32768) * 65536 + (t + 32768)
      , d = (e, t, i, s) => e * e + t * t + i * i <= s * s
      , p = (0,
    r.createPose)()
      , u = (0,
    r.createPose)()
      , f = (0,
    r.createPose)()
      , m = new n.Vector3;
    e.s(["PrefabCrowd", 0, class {
        document;
        riders;
        grid;
        moving;
        roots;
        rootTimes;
        reach;
        fixed;
        bounds;
        seen;
        stamp;
        constructor(e, t=(0,
        o.prefabRiders)(e), i=Float64Array.from(t, o.riderReach)) {
            this.document = e,
            this.grid = new Map,
            this.moving = [],
            this.fixed = new Map,
            this.stamp = 0,
            this.riders = t,
            this.seen = new Uint32Array(this.riders.length),
            this.reach = i,
            this.riders.forEach( (e, t) => {
                if (e.motion)
                    return void this.moving.push(t);
                let i = e.owner.elements
                  , s = this.reach[t];
                for (let e = Math.floor((i[12] - s) / 8); e <= Math.floor((i[12] + s) / 8); e++)
                    for (let n = Math.floor((i[14] - s) / 8); n <= Math.floor((i[14] + s) / 8); n++) {
                        let i = h(e, n)
                          , s = this.grid.get(i);
                        s ? s.push(t) : this.grid.set(i, [t])
                    }
            }
            ),
            this.bounds = new Float64Array(6 * this.riders.length).fill(NaN),
            this.roots = new Float64Array(3 * this.moving.length),
            this.rootTimes = new Float64Array(this.moving.length).fill(-1 / 0)
        }
        get count() {
            return this.riders.length
        }
        detectHit(e, t, i, s, n, r) {
            if (!this.riders.length)
                return null;
            let a = i.translation()
              , p = i.linvel()
              , u = [a.x, a.y, a.z]
              , m = [a.x + p.x * s, a.y + p.y * s, a.z + p.z * s]
              , y = (0,
            c.hypot)(p.x, p.y, p.z) * s
              , g = null
              , b = e => {
                let t = this.sweep(e, u, m, n, s);
                t && (!g || t.fraction < g.fraction) && (g = {
                    ...t,
                    rider: e
                })
            }
            ;
            if (y >= .4 * s) {
                this.stamp = this.stamp + 1 >>> 0 || 1;
                let e = Math.floor(Math.min(u[0], m[0]) / 8)
                  , t = Math.floor(Math.max(u[0], m[0]) / 8)
                  , i = Math.floor(Math.min(u[2], m[2]) / 8)
                  , s = Math.floor(Math.max(u[2], m[2]) / 8);
                for (let n = e; n <= t; n++)
                    for (let e = i; e <= s; e++) {
                        let t = this.grid.get(h(n, e));
                        if (t)
                            for (let e of t) {
                                if (this.seen[e] === this.stamp)
                                    continue;
                                this.seen[e] = this.stamp;
                                let t = this.riders[e].owner.elements;
                                d(t[12] - a.x, t[13] - a.y, t[14] - a.z, this.reach[e] + y) && ("walk" === this.riders[e].dummy.pose || this.meetsBounds(e, u, m)) && b(e)
                            }
                    }
            }
            let w = this.roots;
            for (let e = 0; e < this.moving.length; e++) {
                let t = this.moving[e]
                  , i = Math.abs(n - this.rootTimes[e])
                  , r = this.reach[t] + y;
                if (i <= .5 && !d(w[3 * e] - a.x, w[3 * e + 1] - a.y, w[3 * e + 2] - a.z, r + 60 * (i + s)))
                    continue;
                let l = (0,
                o.prefabRiderRoot)(this.riders[t], n, f[0]).elements;
                w[3 * e] = l[12],
                w[3 * e + 1] = l[13],
                w[3 * e + 2] = l[14],
                this.rootTimes[e] = n,
                d(l[12] - a.x, l[13] - a.y, l[14] - a.z, r + 60 * s) && b(t)
            }
            let x = g;
            if (!x || (0,
            l.blockedFirst)(e, t, i, s * x.fraction, r))
                return null;
            let v = this.riders[x.rider]
              , S = u.map( (e, t) => e + (m[t] - e) * x.fraction)
              , k = n + s * x.fraction;
            return (0,
            o.posePrefabRider)(v, k, f),
            {
                actorId: v.id,
                part: x.part,
                fraction: x.fraction,
                crowdTime: k,
                position: S,
                ...(0,
                l.armourContact)(S, f, x.box)
            }
        }
        near(e, t, i, s, n) {
            let r = s + n;
            for (let e = Math.floor((t - r) / 8); e <= Math.floor((t + r) / 8); e++)
                for (let o = Math.floor((i - r) / 8); o <= Math.floor((i + r) / 8); o++)
                    for (let r of this.grid.get(h(e, o)) ?? []) {
                        let e = this.riders[r].owner.elements;
                        if ((0,
                        l.nearSquare)(e[12], e[14], t, i, s, n))
                            return !0
                    }
            for (let r of this.moving) {
                let a = (0,
                o.prefabRiderRoot)(this.riders[r], e, f[0]).elements;
                if ((0,
                l.nearSquare)(a[12], a[14], t, i, s, n))
                    return !0
            }
            return !1
        }
        meetsBounds(e, t, i) {
            let s = this.bounds
              , n = 6 * e;
            if (Number.isNaN(s[n])) {
                let t = (0,
                o.poseBounds)(this.riders[e].dummy.pose, this.riders[e].dummy.floor)
                  , i = this.riders[e].owner;
                s.fill(1 / 0, n, n + 3),
                s.fill(-1 / 0, n + 3, n + 6);
                for (let e = 0; e < 8; e++) {
                    m.set(t[1 & e ? 3 : 0], t[2 & e ? 4 : 1], t[4 & e ? 5 : 2]).applyMatrix4(i);
                    for (let e = 0; e < 3; e++)
                        s[n + e] = Math.min(s[n + e], m.getComponent(e)),
                        s[n + 3 + e] = Math.max(s[n + 3 + e], m.getComponent(e))
                }
            }
            return (0,
            l.segmentMeetsBox)(t, i, s, n, l.DRONE_RADIUS)
        }
        sweep(e, t, i, s, n) {
            let h, d = this.riders[e];
            if (!d.motion && !(0,
            a.poseAnimated)(d.dummy.pose)) {
                if ((0,
                c.hypot)(i[0] - t[0], i[1] - t[1], i[2] - t[2]) < .4 * n)
                    return null;
                let s = this.fixed.get(e);
                return s || this.fixed.set(e, s = (0,
                o.posePrefabRider)(d, 0, (0,
                r.createPose)()).map(e => e.invert())),
                (0,
                l.sweepInverted)(t, i, s, s)
            }
            if ((0,
            o.posePrefabRider)(d, s, p),
            d.motion || "walk" === d.dummy.pose) {
                (0,
                o.posePrefabRider)(d, s + n, u),
                h = u;
                let e = p[1].elements
                  , r = u[1].elements
                  , a = i[0] - t[0] - (r[12] - e[12])
                  , l = i[1] - t[1] - (r[13] - e[13])
                  , f = i[2] - t[2] - (r[14] - e[14]);
                if ((0,
                c.hypot)(a, l, f) < .4 * n)
                    return null
            } else if ((0,
            c.hypot)(i[0] - t[0], i[1] - t[1], i[2] - t[2]) < .4 * n)
                return null;
            return (0,
            l.sweepWalker)(t, i, p, void 0, h)
        }
    }
    ], 880373);
    let y = [{
        id: "body-rear",
        points: [-1.03, .157, -1.967, -1.03, .17, -1.79, -1.03, .574, -1.896, -1.03, .695, -1.43, -1.03, .757, -1.704, -1.03, .801, -1.533, -1.03, .806, -1.43, -1.009, .725, -2.14, -1.005, .75, -2.14, -.997, .46, -2.226, -.997, .73, -2.2, -.997, .77, -2.14, -.987, .77, -2.2, -.983, .725, -2.25, -.978, .75, -2.25, -.952, .725, -2.3, -.937, .46, -2.332, -.912, .895, -2.292, -.905, .895, -2.33, -.88, .895, -1.43, -.875, .257, -2.29, -.844, .612, -2.375, -.844, .742, -2.375, -.83, .17, -1.43, -.83, .756, -2.375, -.692, .201, -2.42, -.68, .173, -2.405, -.674, .183, -2.42, -.674, .267, -2.42, -.65, .165, -2.405, -.65, .177, -2.42, .82, .46, -2.363, .83, .17, -1.43, .83, .27, -2.32, .83, .756, -2.375, .844, .612, -2.375, .844, .742, -2.375, .85, .268, -2.315, .875, .257, -2.29, .88, .895, -1.43, .9, .17, -2.08, .902, .22, -2.2, .905, .895, -2.33, .913, .895, -2.243, .937, .46, -2.332, .952, .725, -2.3, .983, .725, -2.25, .994, .75, -2.2, .997, .46, -2.226, .997, .73, -2.2, .997, .77, -2.14, 1.005, .75, -2.14, 1.009, .725, -2.14, 1.03, .155, -1.916, 1.03, .157, -1.967, 1.03, .17, -1.79, 1.03, .52, -1.922, 1.03, .695, -1.43, 1.03, .724, -1.76, 1.03, .794, -1.588, 1.03, .806, -1.43]
    }, {
        id: "body-rear-door",
        points: [-1.03, .155, -.944, -1.03, .17, -1.07, -1.03, .695, -1.43, -1.03, .798, -.485, -1.03, .806, -1.43, -1.012, .725, 0, -1.008, .75, 0, -1.001, .77, 0, -.998, .153, 0, -.991, .785, 0, -.877, .905, -1.43, -.874, .905, 0, -.83, .17, -1.43, .83, .17, -1.43, .874, .905, 0, .877, .905, -1.43, .991, .785, 0, .998, .153, -.8, .998, .153, 0, 1.001, .77, 0, 1.008, .75, 0, 1.012, .725, 0, 1.03, .157, -.893, 1.03, .17, -1.07, 1.03, .695, -1.43, 1.03, .798, -.485, 1.03, .806, -1.43]
    }, {
        id: "body-front-door",
        points: [-1.03, .157, .893, -1.03, .17, 1.07, -1.03, .694, 1.43, -1.03, .738, 1.121, -1.03, .806, 1.43, -1.012, .725, 0, -1.008, .75, 0, -1.001, .77, 0, -.998, .153, 0, -.998, .153, .8, -.991, .785, 0, -.883, .905, 1.064, -.874, .905, 0, -.83, .17, 1.43, -.658, .865, 1.43, -.152, .905, 1.43, .148, .905, 1.43, .658, .865, 1.43, .83, .17, 1.43, .874, .905, 0, .883, .905, 1.064, .991, .785, 0, .998, .153, 0, 1.001, .77, 0, 1.008, .75, 0, 1.012, .725, 0, 1.03, .155, .944, 1.03, .17, 1.07, 1.03, .694, 1.43, 1.03, .738, 1.121, 1.03, .806, 1.43]
    }, {
        id: "body-front",
        points: [-1.03, .127, 2.26, -1.03, .127, 2.4, -1.03, .14, 2.42, -1.03, .17, 1.79, -1.03, .41, 2.28, -1.03, .694, 1.43, -1.03, .785, 1.626, -1.03, .805, 1.493, -1.03, .806, 1.43, -1.015, .102, 2.26, -1.015, .102, 2.4, -1.015, .127, 2.425, -1.015, .152, 2.425, -1.005, .75, 2.14, -.994, .75, 2.2, -.988, .785, 2.14, -.987, .77, 2.2, -.978, .75, 2.25, -.977, .785, 2.2, -.971, .77, 2.25, -.968, .905, 1.491, -.968, .905, 1.538, -.961, .785, 2.25, -.96, .8, 2.2, -.949, .77, 2.29, -.905, .804, 2.346, -.899, .804, 2.352, -.899, .81, 2.346, -.835, .753, 2.391, -.83, .17, 1.43, -.791, .79, 2.391, -.759, .714, 2.406, -.754, .802, 2.391, -.736, .68, 2.411, -.735, .804, 2.391, -.735, .813, 2.38, -.735, .819, 2.357, -.614, .868, 1.43, -.493, .368, 2.428, -.152, .905, 1.43, 0, .844, 2.29, 0, .866, 2.2, 0, .884, 2.08, 0, .905, 1.78, .148, .905, 1.43, .493, .172, 2.428, .493, .368, 2.428, .658, .865, 1.43, .735, .819, 2.357, .736, .68, 2.411, .754, .802, 2.391, .756, .811, 2.38, .761, .748, 2.402, .808, .78, 2.391, .83, .17, 1.43, .845, .736, 2.391, .899, .804, 2.352, .899, .81, 2.346, .905, .804, 2.346, .956, .75, 2.29, .96, .8, 2.2, .961, .785, 2.25, .968, .905, 1.491, .968, .905, 1.538, .971, .77, 2.25, .977, .785, 2.2, .978, .75, 2.25, .987, .77, 2.2, .988, .785, 2.14, .994, .75, 2.2, 1.005, .75, 2.14, 1.015, .102, 2.26, 1.015, .102, 2.4, 1.015, .127, 2.425, 1.015, .152, 2.425, 1.03, .127, 2.26, 1.03, .127, 2.4, 1.03, .14, 2.42, 1.03, .17, 1.79, 1.03, .41, 2.28, 1.03, .694, 1.43, 1.03, .785, 1.626, 1.03, .8, 1.545, 1.03, .806, 1.43]
    }, {
        id: "chin",
        points: [-1.132, .148, 1.97, -1.096, .401, 1.97, -1.04, .127, 2.4, -1.04, .14, 2.42, -1.04, .41, 2.28, -1.015, .102, 2.26, -1.015, .102, 2.4, -1.015, .127, 2.425, -1.015, .152, 2.425, -.997, .56, 1.97, -.994, .56, 2.127, -.983, .56, 2.2, -.967, .56, 2.25, -.945, .56, 2.29, -.899, .55, 2.352, -.899, .556, 2.346, -.765, .56, 2.391, -.493, .368, 2.428, .493, .172, 2.428, .493, .368, 2.428, .765, .56, 2.391, .899, .55, 2.352, .899, .556, 2.346, .945, .56, 2.29, .967, .56, 2.25, .983, .56, 2.2, .993, .56, 2.14, .997, .56, 1.97, .997, .56, 2.08, 1.015, .102, 2.26, 1.015, .102, 2.4, 1.015, .127, 2.425, 1.015, .152, 2.425, 1.04, .127, 2.4, 1.04, .14, 2.42, 1.04, .41, 2.28, 1.097, .394, 1.97, 1.132, .148, 1.97]
    }, {
        id: "overfender-front-left",
        points: [1.003, .144, 2.15, 1.003, .157, .961, 1.003, .16, .89, 1.003, .624, .71, 1.003, .75, 2.149, 1.003, .758, 2.116, 1.003, .763, .71, 1.003, .763, 2.08, 1.003, .807, 1.353, 1.003, .809, 1.455, 1.012, .725, .71, 1.07, .337, 2.15, 1.095, .145, 2.15, 1.1, .15, .9, 1.1, .774, 1.622, 1.1, .783, 1.272, 1.1, .792, 1.543, 1.1, .797, 1.355, 1.1, .8, 1.454, 1.16, .15, 1.025, 1.16, .15, 1.835, 1.16, .34, 1.02, 1.16, .421, 1.028, 1.16, .457, 1.824, 1.16, .54, 1.069, 1.16, .568, 1.774, 1.16, .631, 1.141, 1.16, .651, 1.695, 1.16, .666, 1.187, 1.16, .682, 1.645, 1.16, .693, 1.239, 1.16, .704, 1.589, 1.16, .712, 1.298, 1.16, .719, 1.526, 1.16, .722, 1.364, 1.16, .725, 1.453]
    }, {
        id: "overfender-rear-left",
        points: [1.003, .157, -1.899, 1.003, .16, -1.97, 1.003, .16, -.89, 1.003, .588, -.71, 1.003, .693, -2.15, 1.003, .75, -2.149, 1.003, .759, -2.108, 1.003, .763, -.71, 1.003, .804, -1.326, 1.003, .807, -1.485, 1.003, .808, -1.43, 1.006, .725, -2.15, 1.012, .725, -.71, 1.045, .2, -.873, 1.1, .15, -1.96, 1.1, .15, -.9, 1.1, .775, -1.618, 1.1, .794, -1.532, 1.1, .794, -1.328, 1.1, .8, -1.43, 1.16, .15, -1.835, 1.16, .15, -1.025, 1.16, .34, -1.84, 1.16, .34, -1.02, 1.16, .427, -1.831, 1.16, .427, -1.029, 1.16, .495, -1.812, 1.16, .495, -1.048, 1.16, .554, -1.783, 1.16, .604, -1.746, 1.16, .604, -1.114, 1.16, .647, -1.7, 1.16, .647, -1.16, 1.16, .681, -1.647, 1.16, .681, -1.213, 1.16, .705, -1.586, 1.16, .705, -1.274, 1.16, .72, -1.517, 1.16, .72, -1.343, 1.16, .725, -1.43]
    }, {
        id: "overfender-front-right",
        points: [-1.16, .15, 1.025, -1.16, .15, 1.835, -1.16, .34, 1.02, -1.16, .421, 1.028, -1.16, .457, 1.824, -1.16, .54, 1.069, -1.16, .568, 1.774, -1.16, .631, 1.141, -1.16, .651, 1.695, -1.16, .666, 1.187, -1.16, .682, 1.645, -1.16, .693, 1.239, -1.16, .704, 1.589, -1.16, .712, 1.298, -1.16, .719, 1.526, -1.16, .722, 1.364, -1.16, .725, 1.453, -1.1, .15, .9, -1.1, .783, 1.272, -1.1, .792, 1.543, -1.1, .797, 1.355, -1.1, .8, 1.454, -1.095, .145, 2.15, -1.064, .406, 2.15, -1.012, .725, .71, -1.003, .142, 2.15, -1.003, .16, .89, -1.003, .62, .71, -1.003, .75, 2.149, -1.003, .754, 2.14, -1.003, .763, .71, -1.003, .763, 2.08, -1.003, .807, 1.353, -1.003, .809, 1.455]
    }, {
        id: "overfender-rear-right",
        points: [-1.16, .15, -1.835, -1.16, .15, -1.025, -1.16, .34, -1.84, -1.16, .34, -1.02, -1.16, .427, -1.831, -1.16, .427, -1.029, -1.16, .495, -1.812, -1.16, .495, -1.048, -1.16, .554, -1.783, -1.16, .604, -1.746, -1.16, .604, -1.114, -1.16, .647, -1.7, -1.16, .647, -1.16, -1.16, .681, -1.647, -1.16, .681, -1.213, -1.16, .705, -1.586, -1.16, .705, -1.274, -1.16, .72, -1.517, -1.16, .72, -1.343, -1.16, .725, -1.43, -1.1, .15, -1.96, -1.1, .15, -.9, -1.1, .775, -1.618, -1.1, .794, -1.532, -1.1, .794, -1.328, -1.1, .8, -1.43, -1.012, .725, -.71, -1.006, .725, -2.15, -1.003, .157, -.961, -1.003, .16, -1.97, -1.003, .16, -.89, -1.003, .592, -.71, -1.003, .692, -2.15, -1.003, .75, -2.149, -1.003, .758, -2.116, -1.003, .763, -2.08, -1.003, .763, -.71, -1.003, .804, -1.534, -1.003, .807, -1.375, -1.003, .808, -1.43]
    }, {
        id: "cabin",
        points: [-.884, .9, -1.504, -.884, .9, 1.069, -.77, 1.38, -.22, -.76, 1.37, -.76, -.76, 1.37, .4, -.74, 1.36, -.98, -.74, 1.36, .62, -.693, 1.392, -.22, -.684, 1.382, -.76, -.684, 1.382, .4, -.666, 1.372, -.98, -.666, 1.372, .62, -.539, 1.407, -.22, -.532, 1.397, -.76, -.532, 1.397, .4, -.518, 1.387, -.98, -.518, 1.387, .62, -.288, .9, 1.2, 0, .9, -1.6, 0, .924, 1.2, 0, 1.395, -.98, 0, 1.395, .62, 0, 1.405, -.76, 0, 1.405, .4, 0, 1.415, -.22, .279, .9, 1.2, .518, 1.387, -.98, .518, 1.387, .62, .532, 1.397, -.76, .532, 1.397, .4, .539, 1.407, -.22, .666, 1.372, -.98, .666, 1.372, .62, .684, 1.382, -.76, .684, 1.382, .4, .693, 1.392, -.22, .74, 1.36, -.98, .74, 1.36, .62, .76, 1.37, -.76, .76, 1.37, .4, .77, 1.38, -.22, .884, .9, -1.504, .884, .9, 1.069]
    }, {
        id: "ducktail",
        points: [-.918, .86, -2.143, -.91, .905, -2.33, -.91, .915, -2.3, -.889, .86, -2.33, -.477, .86, -1.9, 0, .889, -1.9, 0, .92, -2.33, 0, .93, -2.3, .501, .86, -1.9, .889, .86, -2.33, .91, .905, -2.33, .91, .915, -2.3, .918, .86, -2.143]
    }, {
        id: "mirror-left",
        points: [.908, .98, 1.425, .917, .947, 1.425, .917, 1.013, 1.425, .918, .98, 1.505, .92, .98, 1.405, .924, .9, 1.497, .924, .9, 1.544, .926, 1.008, 1.505, .927, .952, 1.405, .927, 1.008, 1.405, .942, .922, 1.425, .942, 1.038, 1.425, .945, .98, 1.565, .947, .932, 1.405, .947, 1.028, 1.405, .947, 1.029, 1.505, .949, .995, 1.565, .96, 1.006, 1.565, .965, .9, 1.497, .965, .9, 1.544, .975, .913, 1.425, .975, .925, 1.405, .975, .98, 1.595, .975, 1.01, 1.565, .975, 1.035, 1.405, .975, 1.037, 1.505, .975, 1.047, 1.425, .99, 1.006, 1.565, 1.001, .965, 1.565, 1.001, .995, 1.565, 1.003, .932, 1.405, 1.003, 1.028, 1.405, 1.003, 1.029, 1.505, 1.005, .98, 1.565, 1.008, .922, 1.425, 1.008, 1.038, 1.425, 1.023, .952, 1.405, 1.023, 1.008, 1.405, 1.024, .951, 1.505, 1.024, .98, 1.404, 1.024, 1.008, 1.505, 1.03, .98, 1.405, 1.032, .98, 1.505, 1.033, .947, 1.425, 1.033, 1.013, 1.425, 1.042, .98, 1.425]
    }, {
        id: "mirror-right",
        points: [-1.042, .98, 1.425, -1.033, .947, 1.425, -1.033, 1.013, 1.425, -1.032, .98, 1.505, -1.03, .98, 1.405, -1.024, .951, 1.505, -1.024, 1.008, 1.505, -1.023, .952, 1.405, -1.023, 1.008, 1.405, -1.008, .922, 1.425, -1.008, 1.038, 1.425, -1.005, .98, 1.565, -1.003, .932, 1.405, -1.003, 1.028, 1.405, -1.003, 1.029, 1.505, -1.001, .965, 1.565, -1.001, .995, 1.565, -.99, 1.006, 1.565, -.975, .913, 1.425, -.975, .925, 1.405, -.975, .98, 1.595, -.975, 1.01, 1.565, -.975, 1.035, 1.405, -.975, 1.037, 1.505, -.975, 1.047, 1.425, -.965, .9, 1.497, -.965, .9, 1.544, -.96, 1.006, 1.565, -.949, .995, 1.565, -.947, .932, 1.405, -.947, 1.028, 1.405, -.947, 1.029, 1.505, -.945, .98, 1.565, -.942, .922, 1.425, -.942, 1.038, 1.425, -.927, .952, 1.405, -.927, 1.008, 1.405, -.926, .98, 1.404, -.926, 1.008, 1.505, -.924, .9, 1.497, -.924, .9, 1.544, -.92, .98, 1.405, -.918, .98, 1.505, -.917, .947, 1.425, -.917, 1.013, 1.425, -.908, .98, 1.425]
    }].map( ({id: e, points: t}) => ({
        id: e,
        vertices: new Float32Array(t)
    }));
    e.s(["DRIFT_CAR_COLLISION_HULLS", 0, y], 837881)
}
, 147424, 442351, e => {
    "use strict";
    var t = e.i(190072)
      , i = e.i(252497)
      , s = e.i(818686)
      , n = e.i(753522)
      , r = e.i(930215)
      , o = e.i(622803)
      , a = e.i(466348)
      , l = e.i(526241)
      , c = e.i(47610)
      , h = e.i(475127)
      , d = e.i(124241)
      , p = e.i(916274);
    function u(e, i, s=0) {
        let n = e.boxes.filter(e => !e.ghost).map(e => ({
            origin: new t.Vector3(...e.position),
            inv: (0,
            d.setFromEuler)(new t.Quaternion, e.rotation).invert(),
            half: e.halfExtents
        })).map(e => {
            let i = new t.Vector3(1,0,0).applyQuaternion(e.inv)
              , s = new t.Vector3(0,1,0).applyQuaternion(e.inv)
              , n = new t.Vector3(0,0,1).applyQuaternion(e.inv);
            return {
                ...e,
                expanded: [e.half[0] + .46 * Math.abs(i.x) + .98 * Math.abs(s.x) + .46 * Math.abs(n.x), e.half[1] + .46 * Math.abs(i.y) + .98 * Math.abs(s.y) + .46 * Math.abs(n.y), e.half[2] + .46 * Math.abs(i.z) + .98 * Math.abs(s.z) + .46 * Math.abs(n.z)]
            }
        }
        )
          , h = (e.prisms ?? []).map(e => {
            let i = (0,
            d.setFromEuler)(new t.Quaternion, e.rotation)
              , s = (0,
            c.prismVertices)(e)
              , n = new t.Vector3(1 / 0,1 / 0,1 / 0)
              , r = n.clone().negate();
            for (let o = 0; o < s.length; o += 3) {
                let a = new t.Vector3(s[o],s[o + 1],s[o + 2]).applyQuaternion(i).add(new t.Vector3(...e.position));
                n.min(a),
                r.max(a)
            }
            return {
                min: n,
                max: r
            }
        }
        );
        e.editorDocument && h.push(...function(e) {
            let i = f.get(e);
            if (!i) {
                let s = (0,
                r.resolveDocument)(e)
                  , n = (0,
                o.worldMatrices)(s)
                  , c = [];
                for (let e of s.nodes) {
                    if (!e.geometry || e.ghost)
                        continue;
                    if ("coaster" === e.geometry.kind && e.geometry.layout) {
                        let i = n.get(e.id)
                          , s = e.geometry.layout
                          , r = (0,
                        l.trackPath)(s).length
                          , o = new t.Matrix4;
                        for (let e = 0; e < r; e += 2) {
                            let n = new t.Vector3().setFromMatrixPosition((0,
                            l.coasterFrame)(e, o, s).premultiply(i));
                            c.push({
                                min: n.clone().addScalar(-1.8),
                                max: n.clone().addScalar(1.8)
                            })
                        }
                        continue
                    }
                    let i = (0,
                    a.objectGeometry)(e.geometry);
                    i.computeBoundingBox();
                    let s = i.boundingBox.clone().applyMatrix4(n.get(e.id));
                    c.push({
                        min: s.min,
                        max: s.max
                    }),
                    i.dispose()
                }
                f.set(e, i = c)
            }
            return i
        }(e.editorDocument));
        let p = new t.Vector3
          , m = i ? {
            minX: i.minX - 1,
            maxX: i.maxX + 1,
            minZ: i.minZ - 1,
            maxZ: i.maxZ + 1
        } : null
          , y = m ? n.filter(e => {
            let t = Math.max(...e.expanded) * Math.SQRT2 + 1;
            return e.origin.x > m.minX - t && e.origin.x < m.maxX + t && e.origin.z > m.minZ - t && e.origin.z < m.maxZ + t
        }
        ) : n
          , g = m ? h.filter(e => e.max.x > m.minX && e.min.x < m.maxX && e.max.z > m.minZ && e.min.z < m.maxZ) : h;
        return (e, t) => {
            for (let i of y)
                if (p.set(e, s + 1, t).sub(i.origin).applyQuaternion(i.inv),
                Math.abs(p.x) < i.expanded[0] && Math.abs(p.y) < i.expanded[1] && Math.abs(p.z) < i.expanded[2])
                    return !1;
            return !g.some(i => i.min.y < s + 2 && i.max.y > s + .02 && e > i.min.x - .46 && e < i.max.x + .46 && t > i.min.z - .46 && t < i.max.z + .46)
        }
    }
    let f = new WeakMap
      , m = new WeakMap;
    function y(e) {
        let t = m.get(e);
        return t || m.set(e, t = function(e) {
            if (e.pedestrians)
                return function(e, t) {
                    let i = (0,
                    p.createRespawnTrackExclusion)(e)
                      , s = []
                      , n = new Map
                      , r = i => {
                        let s = n.get(i);
                        if (!s) {
                            let r = t.filter(e => (e.y ?? 0) === i).reduce( (e, t) => ({
                                minX: Math.min(e.minX, t.minX),
                                maxX: Math.max(e.maxX, t.maxX),
                                minZ: Math.min(e.minZ, t.minZ),
                                maxZ: Math.max(e.maxZ, t.maxZ)
                            }), {
                                minX: 1 / 0,
                                maxX: -1 / 0,
                                minZ: 1 / 0,
                                maxZ: -1 / 0
                            });
                            n.set(i, s = u(e, r, i))
                        }
                        return s
                    }
                    ;
                    for (let n of t) {
                        let t = n.y ?? 0
                          , o = r(t);
                        for (let r = n.minZ; r <= n.maxZ; r += 6)
                            for (let a = n.minX; a <= n.maxX; a += 6)
                                for (let[l,c] of [[8, 0], [0, 8]]) {
                                    if (a + l > n.maxX || r + c > n.maxZ)
                                        continue;
                                    let d = !0;
                                    for (let s = 0; s <= 16; s++) {
                                        let p = a + l * s / 16
                                          , u = r + c * s / 16;
                                        if (!o(p, u) || i(p, t, u, 4) || e.spawns.some(e => (void 0 === n.y || 3 > Math.abs(e.position[1] - t)) && 3 > h.hypot(e.position[0] - p, e.position[2] - u))) {
                                            d = !1;
                                            break
                                        }
                                    }
                                    d && s.push({
                                        id: s.length,
                                        a: [a, t, r],
                                        b: [a + l, t, r + c],
                                        offset: 0
                                    })
                                }
                    }
                    return s.sort( (e, t) => g(e.id) - g(t.id))
                }(e, e.pedestrians.zones);
            let t = u(e)
              , i = [];
            for (let s = -78; s <= 78; s += 6)
                for (let n = -78; n <= 0; n += 6)
                    for (let[r,o] of [[8, 0], [0, 8]]) {
                        if (n + r > 5 || s + o > 82)
                            continue;
                        let a = !0;
                        for (let i = 0; i <= 16; i++) {
                            let l = n + r * i / 16
                              , c = s + o * i / 16;
                            if (!t(l, c) || e.spawns.some(e => 3 > h.hypot(e.position[0] - l, e.position[2] - c))) {
                                a = !1;
                                break
                            }
                        }
                        a && i.push({
                            id: i.length,
                            a: [n, 0, s],
                            b: [n + r, 0, s + o],
                            offset: 0
                        })
                    }
            return i.sort( (e, t) => g(e.id) - g(t.id))
        }(e)),
        t
    }
    function g(e) {
        let t = Math.imul(e + 1, 0x45d9f3b);
        return ((t = Math.imul(t ^ t >>> 16, 0x45d9f3b)) ^ t >>> 16) >>> 0
    }
    function b(e, t) {
        let i = [];
        for (let s of e)
            if (!i.some(e => 6 > h.hypot(e.a[0] - s.a[0], e.a[1] - s.a[1], e.a[2] - s.a[2])) && (i.push({
                ...s,
                id: i.length,
                offset: g(s.id) % 1e3 / 53
            }),
            i.length >= t))
                break;
        return i
    }
    function w(e, t, i, s, n) {
        let r = e.find(e => e.id === i)
          , o = t.find(t => h.hypot(t.a[0] - s[0], t.a[2] - s[2]) > 25 && (!r || h.hypot(t.a[0] - r.a[0], t.a[1] - r.a[1], t.a[2] - r.a[2]) > 15) && !e.some(e => e.id !== i && 5 > h.hypot(e.a[0] - t.a[0], e.a[1] - t.a[1], e.a[2] - t.a[2])));
        return o ? e.map(e => e.id === i ? {
            ...o,
            id: i,
            offset: -n
        } : e) : e.filter(e => e.id !== i)
    }
    e.s(["buildCrowdRoutes", 0, y, "chooseCrowd", 0, b, "relocateActor", 0, w], 442351);
    var x = e.i(514382);
    function v(e) {
        return e.pedestrians?.count ?? 5
    }
    let S = (0,
    s.createPose)()
      , k = new t.Matrix4
      , T = new t.Matrix4
      , M = new t.Ray
      , R = new t.Box3
      , C = new t.Vector3
      , E = new t.Vector3
      , L = new t.Vector3
      , z = new t.Vector3
      , O = new t.Vector3
      , I = new t.Vector3
      , D = (0,
    s.createPose)()
      , _ = (0,
    s.createPose)()
      , A = n.PARTS.map( () => new t.Vector3)
      , P = n.PARTS.map( () => new t.Vector3)
      , F = s.ARMOUR_FRAMES.map(e => e.clone().invert());
    function N(e, t, i, s=.115, r) {
        for (let e = 0; e < n.PARTS.length; e++)
            D[e].copy(i[e]).invert(),
            r && _[e].copy(r[e]).invert();
        return U(e, t, D, r ? _ : D, s)
    }
    function U(e, t, i, s, r=.115) {
        let o = null;
        E.set(...e),
        L.set(...t);
        for (let e = 0; e < n.PARTS.length; e++)
            A[e].copy(E).applyMatrix4(i[e]),
            P[e].copy(L).applyMatrix4(s[e]);
        for (let e = 0; e < n.ARMOUR.length; e++) {
            let t = n.ARMOUR[e].part
              , i = n.ARMOUR[e].half;
            O.copy(A[t]).applyMatrix4(F[e]),
            I.copy(P[t]).applyMatrix4(F[e]),
            R.min.set(-i[0] - r, -i[1] - r, -i[2] - r),
            R.max.set(i[0] + r, i[1] + r, i[2] + r);
            let s = O.distanceTo(I);
            M.set(O, C.copy(I).sub(O).normalize());
            let a = R.containsPoint(O) ? O : M.intersectBox(R, z);
            if (!a)
                continue;
            let l = s > 1e-8 ? O.distanceTo(a) / s : 0;
            l <= 1 && (!o || l < o.fraction) && (o = {
                fraction: l,
                part: t,
                box: e
            })
        }
        return o
    }
    function G(e, i, r) {
        let o = n.ARMOUR[r].half;
        T.multiplyMatrices(i[n.ARMOUR[r].part], s.ARMOUR_FRAMES[r]);
        let a = new t.Vector3(...e).applyMatrix4(k.copy(T).invert())
          , l = a.clone().clamp(new t.Vector3(...o).negate(), new t.Vector3(...o))
          , c = a.clone().sub(l);
        if (1e-10 > c.lengthSq()) {
            let e = o.map( (e, t) => e - Math.abs(a.getComponent(t)))
              , t = e.indexOf(Math.min(...e))
              , i = 0 > a.getComponent(t) ? -1 : 1;
            l.setComponent(t, o[t] * i),
            c.setComponent(t, i)
        }
        return l.applyMatrix4(T),
        c.transformDirection(T),
        {
            point: l.toArray(),
            normal: c.toArray()
        }
    }
    function B(e, t, s, n, r) {
        let o = new e.Cuboid(...i.DRONE_HALF_EXTENTS)
          , a = t.castShape(s.translation(), s.rotation(), s.linvel(), o, 0, n, !0, void 0, r, void 0, s);
        return !!a && a.time_of_impact < n - 1e-5
    }
    let H = new WeakMap;
    function q(e, t) {
        let i = H.get(e);
        if (i?.time === t)
            return i.place;
        let s = (0,
        x.sampleRoute)(e, t);
        return i ? (i.time = t,
        i.place = s) : H.set(e, {
            time: t,
            place: s
        }),
        s
    }
    function X(e, t, i, s, n, r) {
        let o = Math.max(0, Math.abs(e - i) - n)
          , a = Math.max(0, Math.abs(t - s) - n);
        return o * o + a * a < r * r
    }
    e.s(["Crowd", 0, class {
        pool;
        current;
        history = [];
        constructor(e, t=y(e)) {
            this.pool = t,
            this.current = this.add(b(this.pool, v(e)))
        }
        get routes() {
            return this.current.routes
        }
        add(e) {
            let t = {
                version: (this.history.at(-1)?.version ?? -1) + 1,
                routes: e
            };
            return this.history.push(t),
            this.history.length > 64 && this.history.shift(),
            t
        }
        at(e) {
            for (let t of this.history)
                if (t.version === e)
                    return t;
            return null
        }
        detectHit(e, t, i, n, r, o, a) {
            return function(e, t, i, n, r, o, a) {
                if (!r.length)
                    return null;
                let l = i.translation()
                  , c = i.linvel();
                if (.4 > (0,
                h.hypot)(c.x, c.y, c.z))
                    return null;
                let d = [l.x, l.y, l.z]
                  , p = [l.x + c.x * n, l.y + c.y * n, l.z + c.z * n]
                  , u = null
                  , f = (0,
                h.hypot)(c.x, c.z) * n
                  , m = c.y < 0 ? -c.y * n : 0;
                for (let e of r) {
                    let t = q(e, o);
                    if ((0,
                    h.hypot)(t.x - l.x, t.z - l.z) > .8 + f || l.y - t.y - m > 2 || l.y - t.y < -.2)
                        continue;
                    (0,
                    s.sampleWalker)(e, o, S);
                    let i = N(d, p, S);
                    i && (!u || i.fraction < u.fraction) && (u = {
                        ...i,
                        id: e.id
                    })
                }
                if (!u || B(e, t, i, n * u.fraction, a))
                    return null;
                let y = d.map( (e, t) => e + (p[t] - e) * u.fraction)
                  , g = r.find(e => e.id === u.id)
                  , b = o + n * u.fraction;
                return (0,
                s.sampleWalker)(g, b, S),
                {
                    actorId: u.id,
                    part: u.part,
                    fraction: u.fraction,
                    crowdTime: b,
                    position: y,
                    ...G(y, S, u.box)
                }
            }(t, i, n, r, e.routes, o, a)
        }
        relocate(e, t, i, s) {
            return this.add(w(e.routes, this.pool, t, i, s))
        }
        change(e, t) {
            return this.add(function(e, t) {
                let i = e.filter(e => !t.gone.includes(e.id)).map(e => t.routes.find(t => t.id === e.id) ?? e);
                for (let e of t.routes)
                    i.some(t => t.id === e.id) || i.push(e);
                return i
            }(e.routes, t))
        }
    }
    , "DRONE_RADIUS", 0, .115, "armourContact", 0, G, "blockedFirst", 0, B, "crowdNear", 0, function(e, t, i, s, n, r) {
        for (let o of e) {
            let e = q(o, t);
            if (X(e.x, e.z, i, s, n, r))
                return !0
        }
        return !1
    }
    , "nearSquare", 0, X, "pedestrianCount", 0, v, "segmentMeetsBox", 0, function(e, t, i, s, n) {
        let r = 0
          , o = 1;
        for (let a = 0; a < 3; a++) {
            let l = e[a]
              , c = t[a] - l
              , h = i[s + a] - n
              , d = i[s + 3 + a] + n;
            if (0 === c) {
                if (l < h || l > d)
                    return !1;
                continue
            }
            let p = (h - l) / c
              , u = (d - l) / c;
            if (p > u) {
                let e = p;
                p = u,
                u = e
            }
            if (p > r && (r = p),
            u < o && (o = u),
            r > o)
                return !1
        }
        return !0
    }
    , "sweepInverted", 0, U, "sweepWalker", 0, N], 147424)
}
, 54111, e => {
    "use strict";
    var t = e.i(475127)
      , i = e.i(234979);
    e.s(["placeDriftBody", 0, function(e, s, n, r, o) {
        r.x = s[0] * e.x + s[8] * e.z + s[12],
        r.y = s[1] * e.x + s[9] * e.z + s[13],
        r.z = s[2] * e.x + s[10] * e.z + s[14];
        let a = e.yaw + n;
        if (o.y = (0,
        t.sin)(a / 2),
        o.w = (0,
        t.cos)(a / 2),
        o.x = 0,
        o.z = 0,
        void 0 !== e.height) {
            let n = o.y
              , a = o.w
              , l = (0,
            t.sin)(e.roll / 2)
              , c = (0,
            t.cos)(e.roll / 2)
              , h = (0,
            t.sin)(-e.pitch / 2)
              , d = (0,
            t.cos)(-e.pitch / 2)
              , p = c * h
              , u = l * h
              , f = l * d
              , m = c * d;
            o.x = a * p + n * f,
            o.y = a * u + n * m,
            o.z = a * f - n * p,
            o.w = a * m - n * u;
            let {cgHeight: y, cgForward: g} = i.DRIFT_CAR_SPEC
              , b = e.roll
              , w = e.pitch
              , x = (0,
            t.cos)(w) * y + (0,
            t.sin)(w) * g
              , v = (0,
            t.sin)(b) * x
              , S = y + e.height - (0,
            t.cos)(b) * x
              , k = g + (0,
            t.sin)(w) * y - (0,
            t.cos)(w) * g
              , T = (0,
            t.cos)(e.yaw) * v + (0,
            t.sin)(e.yaw) * k
              , M = -(0,
            t.sin)(e.yaw) * v + (0,
            t.cos)(e.yaw) * k;
            r.x += s[0] * T + s[4] * S + s[8] * M,
            r.y += s[1] * T + s[5] * S + s[9] * M,
            r.z += s[2] * T + s[6] * S + s[10] * M
        }
    }
    ])
}
, 414238, e => {
    "use strict";
    var t = e.i(252497)
      , i = e.i(483359)
      , s = e.i(512112);
    e.s(["newObjectiveRun", 0, function() {
        return {
            held: 0,
            beenAirborne: !1
        }
    }
    , "resetObjectiveRun", 0, function(e) {
        e.held = 0,
        e.beenAirborne = !1
    }
    , "stepObjective", 0, function(e, n, r, o) {
        if ("gate" === e.kind)
            return (0,
            i.crossedGate)(e, o.previous, o.current);
        o.grounded || (n.beenAirborne = !0);
        let a = n.beenAirborne && function(e, i) {
            if ("land" !== e.kind)
                return !1;
            let n = i.current.x - e.position[0]
              , r = i.current.y - e.position[1]
              , o = i.current.z - e.position[2];
            return n * n + o * o <= e.radius * e.radius && Math.abs(r) <= s.LAND_HEIGHT_TOLERANCE && i.grounded && i.speed <= s.LAND_SETTLE_SPEED && i.upDot >= t.GROUND_UPRIGHT_DOT
        }(e, o);
        return n.held = a ? n.held + r : 0,
        n.held >= s.LAND_SETTLE_SECONDS
    }
    ])
}
, 512112, e => {
    "use strict";
    e.s(["DEFAULT_DEMO_FOLLOW", 0, .5, "DEFAULT_DEMO_FOV", 0, 55, "DEFAULT_DEMO_RAMP", 0, .2, "DEFAULT_DEMO_REST_MS", 0, 800, "LAND_HEIGHT_TOLERANCE", 0, 1.2, "LAND_SETTLE_SECONDS", 0, .6, "LAND_SETTLE_SPEED", 0, .4, "isChaseDemo", 0, function(e) {
        return "fpv" !== e.camera.view
    }
    ])
}
, 306871, 577390, 26115, 248449, e => {
    "use strict";
    var t = e.i(807375)
      , i = e.i(789788)
      , s = e.i(739011)
      , n = e.i(247800)
      , r = e.i(353198)
      , o = e.i(11871)
      , a = e.i(50270)
      , l = e.i(502108)
      , c = e.i(339231)
      , h = e.i(440169)
      , d = e.i(940072)
      , p = e.i(306212)
      , u = e.i(821578)
      , f = e.i(139853)
      , m = e.i(49159)
      , y = e.i(507218)
      , g = e.i(778807)
      , b = e.i(273726)
      , w = e.i(483359)
      , x = e.i(414238)
      , v = e.i(512112)
      , S = e.i(471646)
      , k = e.i(998494)
      , T = e.i(304661)
      , M = e.i(916274)
      , R = e.i(171683)
      , C = e.i(349894)
      , E = e.i(425117)
      , L = e.i(602893)
      , z = e.i(497710)
      , O = e.i(593922)
      , I = e.i(201093)
      , D = e.i(663011)
      , _ = e.i(870895)
      , A = e.i(135933)
      , P = e.i(438484)
      , F = e.i(147424)
      , N = e.i(324792)
      , U = e.i(579726)
      , G = e.i(121645)
      , B = e.i(101060)
      , H = e.i(494049)
      , q = e.i(980948)
      , X = e.i(646423)
      , j = e.i(475127)
      , W = e.i(463747)
      , Y = e.i(252497)
      , V = e.i(442351)
      , Z = e.i(880373)
      , K = e.i(315213)
      , $ = e.i(837881)
      , Q = e.i(212236)
      , J = e.i(504786)
      , ee = e.i(54111);
    let et = Math.SQRT1_2
      , ei = {
        x: 0,
        y: 0,
        z: 0
    }
      , es = {
        x: 0,
        y: 0,
        z: 0,
        w: 1
    };
    class en {
        physics;
        tracks;
        cars;
        waking;
        translation;
        rotation;
        constructor(e, t, i, s=0xffffffff) {
            if (this.physics = t,
            this.tracks = [],
            this.cars = [],
            this.waking = (0,
            Q.createDriftCarState)(),
            this.translation = {
                x: 0,
                y: 0,
                z: 0
            },
            this.rotation = {
                x: 0,
                y: 0,
                z: 0,
                w: 1
            },
            this.localTranslation = {
                x: 0,
                y: 0,
                z: 0
            },
            this.localRotation = {
                x: 0,
                y: 0,
                z: 0,
                w: 1
            },
            i) {
                const t = this.build(e, i, s);
                for (; !t.next().done; )
                    ;
            }
        }
        static*build(e, t, i, s) {
            let n = new en(e,t,null);
            return yield*n.build(e, i, s),
            n
        }
        *build(e, t, i) {
            let s = this.physics;
            for (let n of (0,
            J.trackInstances)(t)) {
                let {traffic: t} = n;
                if (t.maxSpeed * d.FLIGHT_TIMESTEP > .5)
                    throw Error(`${t.id} cars outrun the wake margin`);
                let r = n.matrix.toArray()
                  , o = {
                    traffic: t,
                    trackMatrix: r,
                    heading: (0,
                    j.atan2)(r[8], r[10]),
                    states: t.cars.map( () => (0,
                    Q.createDriftCarState)())
                };
                this.tracks.push(o);
                for (let n = 0; n < t.cars.length; n++) {
                    let a = s.createRigidBody(e.RigidBodyDesc.kinematicPositionBased().setCanSleep(!1));
                    a.userData = {
                        driftIndex: n,
                        trackMatrix: r,
                        circuit: t.id
                    },
                    yield*function*(e, t, i, s=0xffffffff) {
                        let n = e => t.createCollider(e.setFriction(.55).setRestitution(0).setCollisionGroups(s), i);
                        for (let t of $.DRIFT_CAR_COLLISION_HULLS) {
                            let i = e.ColliderDesc.convexHull(t.vertices);
                            if (!i)
                                throw Error(`degenerate drift hull ${t.id}`);
                            n(i),
                            yield "drift collider"
                        }
                        for (let t of [-1, 1])
                            for (let i of [-1, 1])
                                n(e.ColliderDesc.cylinder(K.DRIFT_WHEEL_WIDTH / 2, K.DRIFT_WHEEL_RADIUS).setTranslation(t * K.DRIFT_WHEEL_X, K.DRIFT_WHEEL_RADIUS, i * K.DRIFT_AXLE_Z).setRotation({
                                    x: 0,
                                    y: 0,
                                    z: et,
                                    w: et
                                })),
                                yield "drift collider"
                    }(e, s, a, i);
                    let l = {
                        body: a,
                        track: o,
                        index: n,
                        awake: !1,
                        slot: this.cars.length
                    };
                    this.cars.push(l),
                    this.park(l)
                }
            }
        }
        get count() {
            return this.cars.length
        }
        get colliderCount() {
            return this.cars.length * ($.DRIFT_CAR_COLLISION_HULLS.length + 4)
        }
        beforeStep(e, t) {
            for (let t of this.tracks)
                t.traffic.sample(e, t.states);
            for (let i of this.cars) {
                this.place(i, i.track.states[i.index]);
                let s = 1 / 0;
                for (let e of t) {
                    let t = e.x - this.translation.x
                      , i = e.z - this.translation.z;
                    s = Math.min(s, t * t + i * i)
                }
                if (!(i.awake ? s <= 625 : s <= 400)) {
                    i.awake && this.park(i),
                    i.awake = !1;
                    continue
                }
                i.awake || (this.place(i, i.track.traffic.sampleCar(i.index, e - d.FLIGHT_TIMESTEP, this.waking)),
                this.move(i, !0),
                i.awake = !0,
                this.place(i, i.track.states[i.index])),
                this.move(i, !1)
            }
        }
        snap(e, t) {
            for (let t of this.tracks)
                t.traffic.sample(e, t.states);
            for (let e of this.cars) {
                this.place(e, e.track.states[e.index]);
                let i = 1 / 0;
                for (let e of t) {
                    let t = e.x - this.translation.x
                      , s = e.z - this.translation.z;
                    i = Math.min(i, t * t + s * s)
                }
                let s = e.awake ? i <= 625 : i <= 400;
                e.awake = s,
                s ? this.move(e, !0) : this.park(e)
            }
        }
        poses() {
            return this.cars.map( ({body: e}) => ({
                translation: e.translation(),
                rotation: e.rotation()
            }))
        }
        castRayAt(e, t, i, s) {
            let n = -1
              , r = this.translation
              , o = this.rotation
              , a = this.localTranslation
              , l = this.localRotation;
            for (let c of this.cars) {
                this.place(c, c.track.traffic.sampleCar(c.index, e, this.waking));
                let h = r.x - t.origin.x
                  , d = r.y - t.origin.y
                  , p = r.z - t.origin.z
                  , u = Math.min(i, Math.max(0, h * t.dir.x + d * t.dir.y + p * t.dir.z))
                  , f = h - u * t.dir.x
                  , m = d - u * t.dir.y
                  , y = p - u * t.dir.z;
                if (f * f + m * m + y * y > 16)
                    continue;
                let g = c.body;
                for (let e = 0; e < g.numColliders(); e++) {
                    let c = g.collider(e);
                    if (!(0,
                    X.groupsInteract)(s, c.collisionGroups()))
                        continue;
                    let h = c.translationWrtParent() ?? ei
                      , d = c.rotationWrtParent() ?? es;
                    !function(e, t, i) {
                        let s = 2 * (e.y * t.z - e.z * t.y)
                          , n = 2 * (e.z * t.x - e.x * t.z)
                          , r = 2 * (e.x * t.y - e.y * t.x);
                        i.x = t.x + e.w * s + (e.y * r - e.z * n),
                        i.y = t.y + e.w * n + (e.z * s - e.x * r),
                        i.z = t.z + e.w * r + (e.x * n - e.y * s)
                    }(o, h, a),
                    a.x += r.x,
                    a.y += r.y,
                    a.z += r.z,
                    l.x = o.w * d.x + o.x * d.w + o.y * d.z - o.z * d.y,
                    l.y = o.w * d.y - o.x * d.z + o.y * d.w + o.z * d.x,
                    l.z = o.w * d.z + o.x * d.y - o.y * d.x + o.z * d.w,
                    l.w = o.w * d.w - o.x * d.x - o.y * d.y - o.z * d.z;
                    let p = c.shape.castRay(t, a, l, i, !0);
                    p >= 0 && (n < 0 || p < n) && (n = p)
                }
            }
            return n
        }
        localTranslation;
        localRotation;
        remove() {
            for (let {body: e} of this.cars)
                this.physics.getRigidBody(e.handle) && this.physics.removeRigidBody(e);
            this.cars.length = 0,
            this.tracks.length = 0
        }
        park(e) {
            this.translation.x = 10 * e.slot,
            this.translation.y = -1e3,
            this.translation.z = 0,
            this.rotation.y = 0,
            this.rotation.x = 0,
            this.rotation.z = 0,
            this.rotation.w = 1,
            this.move(e, !0)
        }
        place(e, t) {
            (0,
            ee.placeDriftBody)(t, e.track.trackMatrix, e.track.heading, this.translation, this.rotation)
        }
        move(e, t) {
            t ? (e.body.setTranslation(this.translation, !0),
            e.body.setRotation(this.rotation, !0)) : (e.body.setNextKinematicTranslation(this.translation),
            e.body.setNextKinematicRotation(this.rotation))
        }
    }
    var er = e.i(471566)
      , eo = e.i(319202)
      , ea = e.i(406606);
    function *el(e, t, i) {
        let s = new e.World({
            x: 0,
            y: -Y.GRAVITY,
            z: 0
        });
        s.timestep = d.FLIGHT_TIMESTEP;
        let n = !1;
        try {
            yield "world allocation";
            let r = (yield*(0,
            eo.buildStaticBody)(e, s, i.fixed)).handle
              , o = !!t.still
              , a = t.world.editorDocument && !o ? yield*er.MovingParts.build(e, s, i.moving) : null
              , l = !t.drift || t.lesson || o ? null : yield*en.build(e, s, t.world, X.DRIFT_GROUPS)
              , c = i.routes && !o ? new F.Crowd(t.world,i.routes) : null;
            yield "crowd";
            let h = i.riders.length && t.world.editorDocument && !o ? new Z.PrefabCrowd(t.world.editorDocument,i.riders,i.reach) : null;
            yield "prefab crowd",
            s.step(),
            yield "physics indexing";
            let d = yield*ea.GroundRespawnBounds.build(s.getRigidBody(r), t.world.bounds, t.world);
            return n = !0,
            {
                physics: s,
                staticBody: r,
                staticColliderCount: i.fixed.length,
                moving: a,
                drift: l,
                crowd: c,
                prefabCrowd: h,
                respawnBounds: d,
                water: i.water
            }
        } finally {
            n || s.free()
        }
    }
    let ec = e => Math.round(1e3 * e) / 1e3
      , eh = e => [ec(e.x), ec(e.y), ec(e.z)];
    function ed(e) {
        return e.halfExtents ? [ec(e.halfExtents.x), ec(e.halfExtents.y), ec(e.halfExtents.z)] : void 0 !== e.halfHeight && void 0 !== e.radius ? [ec(e.halfHeight), ec(e.radius)] : void 0 !== e.radius ? [ec(e.radius)] : []
    }
    let ep = new Set([4, 6, 7, 18])
      , eu = e => "private" !== e
      , ef = Object.freeze({
        x: 0,
        y: 0,
        z: 0,
        w: 1
    })
      , em = [null, "menu", "staged", "running", "finished"]
      , ey = ["flying", "parked", "cinematic"]
      , eg = 15 * n.TICK_RATE
      , eb = Object.freeze({
        none: 0,
        open: 1,
        closed: 2
    })
      , ew = 6e3 / n.TICK_RATE
      , ex = Math.round(D.TIME_WARP_DURATION * n.TICK_RATE)
      , ev = ["mode", "cinematicTicks", "racePhase", "raceGate", "raceSteps", "raceClean", "raceLeaveSeconds", "raceLeaveWarning", "raceLeaveLevel", "raceTail", "lessonActive", "lessonIndex", "lessonHeld", "lessonAirborne", "lessonClean", "invertedSeconds", "previousX", "previousY", "previousZ", "seeded", "respawns", "latches", "mapLeaveSeconds", "mapLeaveWarning", "mapLeaveLevel", "warpTick", "cinematicSpawn", "cinematicX", "cinematicY", "cinematicZ", "cinematicYaw", "markerHold", "drowned"]
      , eS = (0,
    q.snapshotSlots)(ev)
      , ek = ev.length + B.COMBAT_STATE_LENGTH
      , eT = q.BODY_STATE_LENGTH + q.PILOT_STATE_LENGTH + ek
      , eM = Object.freeze({
        body: 0,
        flight: q.BODY_STATE_LENGTH,
        controller: q.BODY_STATE_LENGTH + q.PILOT_CONTROLLER_OFFSET,
        rules: q.BODY_STATE_LENGTH + q.PILOT_STATE_LENGTH,
        combat: q.BODY_STATE_LENGTH + q.PILOT_STATE_LENGTH + ev.length
    })
      , eR = eM.rules
      , eC = e => new Set(e.map(e => eS[e]))
      , eE = eC(["raceLeaveSeconds", "raceLeaveLevel", "lessonHeld", "invertedSeconds", "previousX", "previousY", "previousZ", "mapLeaveSeconds", "mapLeaveLevel", "cinematicX", "cinematicY", "cinematicZ", "cinematicYaw"]);
    eC(["previousX", "previousY", "previousZ", "cinematicX", "cinematicY", "cinematicZ"]),
    eC(["cinematicYaw"]),
    [...U.FLIGHT_CONTROLLER_MEASURE_TOLERANCE].map( ([e,t]) => [eM.controller + e, t]),
    U.FLIGHT_CONTROLLER_BOOST.map(e => eM.controller + e),
    U.FLIGHT_CONTROLLER_RATE_LOOP.map(e => eM.controller + e),
    eM.flight,
    q.PILOT_SLOT.supported;
    let eL = new W.BitHash;
    function ez(e, t=0) {
        eL.reset();
        for (let i = 0; i < eR; i++)
            eL.add(e[t + i]);
        return eL.fold()
    }
    function eO(e, t=0) {
        eL.reset();
        for (let i = eR; i < eT; i++)
            eE.has(i - eR) || eL.add(e[t + i]);
        return eL.fold()
    }
    function eI(e) {
        return 1 === e[eM.flight + q.PILOT_SLOT.supported]
    }
    function eD(e, t, i) {
        let s = q.BODY_SLOT
          , n = e.translation()
          , r = e.rotation();
        return n.x === t[i + s.x] && n.y === t[i + s.y] && n.z === t[i + s.z] && r.x === t[i + s.qx] && r.y === t[i + s.qy] && r.z === t[i + s.qz] && r.w === t[i + s.qw]
    }
    q.BODY_SLOT.x,
    q.BODY_SLOT.y,
    q.BODY_SLOT.z,
    q.BODY_SLOT.vx,
    q.BODY_SLOT.vy,
    q.BODY_SLOT.vz,
    q.BODY_SLOT.wx,
    q.BODY_SLOT.wy,
    q.BODY_SLOT.wz;
    let e_ = n.TICK_RATE;
    class eA {
        id;
        tuning;
        body;
        combo;
        xp;
        flight;
        input;
        control;
        proximity;
        scoringClock;
        playClock;
        latched;
        markerHold;
        gifts;
        captureTail;
        previous;
        preLinvel;
        samplePosition;
        play;
        sticks;
        playSample;
        comboSample;
        ownedGates;
        onChainExpire;
        lessonRun;
        objective;
        profile;
        quad;
        rates;
        drone;
        normalDrone;
        mode;
        ghost;
        race;
        suspendedMotion;
        recollide;
        ccdStale;
        lessonActive;
        lessonIndex;
        lessonClean;
        lessonSatisfied;
        cinematicTicks;
        cinematicSpawn;
        warpTick;
        mapLeave;
        invertedSeconds;
        drowned;
        preSpeed;
        seeded;
        respawns;
        clockMs;
        sampleRespawn;
        sampleTicks;
        last;
        context;
        touched;
        crowd;
        heldSince;
        combatSetup;
        combat;
        aimTiltDeg;
        combatLocked;
        combatFired;
        combatTicked;
        constructor(e, t, i, s, r, a, c, h) {
            this.id = t,
            this.tuning = s,
            this.body = r,
            this.combo = c,
            this.xp = null,
            this.input = (0,
            n.idleInput)(),
            this.control = {
                throttle: 0,
                roll: 0,
                pitch: 0,
                yaw: 0,
                armRequested: !1,
                interact: !1,
                source: "gamepad"
            },
            this.proximity = new E.ScoringProximity,
            this.scoringClock = new l.ActivePlayClock,
            this.playClock = new l.ActivePlayClock,
            this.latched = new Set,
            this.markerHold = eb.none,
            this.gifts = [],
            this.captureTail = !1,
            this.previous = {
                x: 0,
                y: 0,
                z: 0
            },
            this.preLinvel = {
                x: 0,
                y: 0,
                z: 0
            },
            this.samplePosition = {
                x: 0,
                y: 0,
                z: 0
            },
            this.play = {
                activeMs: 0,
                flightMs: 0,
                distance: 0,
                mode: "free",
                activity: "free"
            },
            this.sticks = [0, 0, 0, 0],
            this.playSample = {
                enabled: !0,
                flying: !0,
                transition: !1,
                respawn: 0,
                armed: !1,
                grounded: !1,
                input: this.sticks
            },
            this.comboSample = {
                airborne: !1,
                speed: 0,
                verticalSpeed: 0,
                carDistance: 1 / 0,
                coasterDistance: 1 / 0,
                surfaceDistance: 1 / 0,
                surfaceVector: null,
                rotation: {
                    x: 0,
                    y: 0,
                    z: 0,
                    w: 1
                },
                velocity: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                position: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                contact: !1,
                span: .3
            },
            this.ownedGates = () => !0,
            this.onChainExpire = () => {}
            ,
            this.lessonRun = (0,
            x.newObjectiveRun)(),
            this.ghost = !1,
            this.race = null,
            this.suspendedMotion = null,
            this.recollide = !1,
            this.ccdStale = !1,
            this.lessonActive = !1,
            this.lessonIndex = 0,
            this.lessonClean = !0,
            this.lessonSatisfied = !1,
            this.cinematicTicks = 0,
            this.cinematicSpawn = null,
            this.warpTick = ex,
            this.mapLeave = (0,
            m.createMapLeaveState)(),
            this.invertedSeconds = 0,
            this.drowned = !1,
            this.preSpeed = 0,
            this.seeded = !1,
            this.respawns = 0,
            this.clockMs = 0,
            this.sampleRespawn = -1,
            this.sampleTicks = 0,
            this.last = null,
            this.context = null,
            this.touched = !1,
            this.crowd = null,
            this.heldSince = null,
            this.combatSetup = null,
            this.combat = new B.CombatState,
            this.combatLocked = !1,
            this.combatFired = !1,
            this.combatTicked = !1,
            this.flight = new q.PilotFlight(e,h.controller()),
            this.aimTiltDeg = (e => e.cameraTiltDeg ?? 0)(s),
            this.drone = i,
            this.normalDrone = i,
            this.profile = o.DRONE_PROFILES[i],
            this.quad = {
                ...this.profile.quad,
                throttleMid: s.throttle.mid,
                throttleExpo: s.throttle.expo
            },
            this.rates = s.rates,
            this.mode = a ? "parked" : "flying",
            this.objective = {
                previous: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                current: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                speed: 0,
                upDot: 1,
                grounded: !1
            }
        }
    }
    let eP = e => "flying" === e.mode && null === e.heldSince;
    e.s(["BUMP_FORCE_THRESHOLD", 0, 60, "MARKER_HOLD", 0, eb, "PILOT_SNAPSHOT", 0, eM, "ROOM_PILOT_STATE_LENGTH", 0, eT, "Room", 0, class e {
        rapier;
        physics;
        world;
        kind;
        lesson;
        still;
        moving;
        drift;
        crowd;
        prefabCrowd;
        courses;
        arenas;
        physicsSetup;
        tick;
        worldSteps;
        queue;
        gates;
        pilots;
        byBody;
        byCollider;
        commands;
        groundHeight;
        excludesTrack;
        water;
        excludesSurface;
        floor;
        scoring;
        contactEvents;
        distanceCounts;
        neighbours;
        outbox;
        latchKeys;
        latchBits;
        replaying;
        forensics;
        forensicLog;
        forensicsDropped;
        forensicSeen;
        impacts;
        staticBody;
        staticColliderCount;
        wallsBody;
        walls;
        respawnBounds;
        anchored;
        probeRay;
        contactSample;
        probeBalls;
        ccd;
        ccdStale;
        ccdGateChanges;
        ccdSteps;
        constructor(e, t, i) {
            this.rapier = e,
            this.tick = 0,
            this.worldSteps = 0,
            this.pilots = [],
            this.byBody = new Map,
            this.byCollider = new Map,
            this.commands = [],
            this.neighbours = [],
            this.outbox = [],
            this.latchBits = [],
            this.replaying = !1,
            this.forensicLog = [],
            this.forensicsDropped = 0,
            this.forensicSeen = new Map,
            this.impacts = [],
            this.anchored = new Float64Array(eT),
            this.probeRay = null,
            this.contactSample = {
                touching: !1,
                verticallySupported: !1,
                hit: !1
            },
            this.probeBalls = new Map,
            this.ccdStale = !0,
            this.ccdGateChanges = 0,
            this.ccdSteps = {
                on: 0,
                off: 0
            },
            this.onCollision = (e, t, i) => {
                if (!i)
                    return;
                let s = this.byCollider.get(e) ?? this.byCollider.get(t);
                s && (s.race?.phase === "running" && (s.race.clean = !1),
                s.lessonActive && (s.lessonClean = !1))
            }
            ,
            this.onContactForce = e => {
                let t = this.byCollider.get(e.collider1())
                  , i = t ?? this.byCollider.get(e.collider2());
                if (i && this.forensics) {
                    let s = t ? e.collider1() : e.collider2()
                      , n = t ? e.collider2() : e.collider1();
                    this.impacts.push({
                        pilot: i,
                        mine: s,
                        theirs: n,
                        force: e.totalForceMagnitude(),
                        normal: e.maxForceDirection()
                    })
                }
                if (i?.mode !== "flying")
                    return;
                let s = this.physics.getCollider(t ? e.collider2() : e.collider1())?.parent() ?? null;
                this.contact(i, e.totalForceMagnitude(), e.maxForceDirection(), s)
            }
            ,
            this.world = t.world,
            this.kind = t.kind,
            this.lesson = t.lesson ?? null,
            this.still = !!t.still,
            this.scoring = !!t.scoring && !this.lesson,
            this.contactEvents = !!t.contactEvents,
            this.forensics = !!t.forensics,
            this.physicsSetup = t.physicsSetup ?? p.CURRENT_PHYSICS,
            this.floor = t.world.terrain?.floor ?? 0,
            this.distanceCounts = (0,
            k.isOfficialMapId)(t.world.mapId) || T.LESSON_MAP_IDS.has(t.world.mapId),
            this.groundHeight = (0,
            S.createHeightSampler)(t.world.terrain),
            this.excludesTrack = (0,
            M.createRespawnTrackExclusion)(t.world),
            this.courses = new Map((this.lesson ? [] : t.courses ?? []).filter(e => e.mapId === t.world.mapId && e.gates.length >= 2).map(e => [e.id, e])),
            this.arenas = new Map((this.lesson || "match" === this.kind ? [] : t.arenas ?? []).filter(e => e.mapId === t.world.mapId).map(e => [e.id, (0,
            A.arenaEntrance)(e)])),
            this.latchKeys = [...this.courses.keys(), ...[...this.arenas.keys()].map(e => `arena:${e}`)].sort().slice(0, 52);
            for (let e = 0, t = 1; e < this.latchKeys.length; e++,
            t *= 2)
                this.latchBits.push(t);
            if (!i) {
                const s = el(e, t, function(e) {
                    let t = e.world
                      , i = t.editorDocument
                      , s = e.crowd && !e.lesson && !e.still
                      , n = s && i ? (0,
                    N.prefabRiders)(i) : [];
                    return {
                        fixed: (0,
                        eo.staticColliders)(t),
                        moving: i && !e.still ? (0,
                        er.assemblyMeshes)(i) : [],
                        routes: s && ("gridworks" === t.mapId || t.pedestrians) ? (0,
                        V.buildCrowdRoutes)(t) : null,
                        riders: n,
                        reach: Float64Array.from(n, N.riderReach),
                        water: i ? (0,
                        R.waterVolumes)(i) : []
                    }
                }(t));
                let n = s.next();
                for (; !n.done; )
                    n = s.next();
                i = n.value
            }
            const {physics: s} = i;
            this.physics = s,
            this.queue = new e.EventQueue(!0),
            this.staticBody = i.staticBody,
            this.respawnBounds = i.respawnBounds,
            this.water = i.water;
            const n = (0,
            R.waterRespawnExclusion)(this.water)
              , r = this.excludesTrack;
            this.excludesSurface = n ? (e, t, i, s) => r(e, t, i, s) || n(e, t, i, s) : r,
            this.staticColliderCount = i.staticColliderCount,
            this.moving = i.moving,
            this.drift = i.drift,
            this.crowd = i.crowd,
            this.prefabCrowd = i.prefabCrowd,
            this.gates = new X.RoomGates(e,s,e => this.byBody.get(e)?.id),
            this.ccd = new q.CcdGate(e),
            this.walls = "match" === this.kind && t.walls ? t.walls : null,
            this.wallsBody = this.walls ? (0,
            P.createArenaWalls)(e, s, this.walls).handle : null
        }
        static*build(t, i, s) {
            let n = yield*el(t, i, s);
            try {
                return new e(t,i,n)
            } catch (e) {
                throw n.physics.free(),
                e
            }
        }
        get pilotCount() {
            return this.pilots.length
        }
        get time() {
            return this.worldSteps * d.FLIGHT_TIMESTEP
        }
        get warpScale() {
            let e = this.paceSetter?.warpTick ?? ex;
            return e < ex ? (0,
            D.timeWarpScale)(e / n.TICK_RATE) : 1
        }
        get paceSetter() {
            return "private" === this.kind ? this.pilots[0] ?? null : null
        }
        addPilot(e) {
            let t = this.contain(this.lesson?.spawn ?? e.spawn)
              , i = {
                rates: e.rates,
                throttle: e.throttle,
                cameraTiltDeg: e.cameraTiltDeg
            }
              , s = this.createPilot(e.id, e.drone, i, t, !!e.parked, e.combo ?? new C.ComboScoring);
            s.xp = e.xp ?? null,
            s.gifts = e.gifts ?? [],
            s.captureTail = e.captureTail ?? !1,
            this.lesson ? (this.beginLesson(s),
            this.lessonAirStart(t) && (s.body.setGravityScale(0, !0),
            s.flight.hoverLock.engage(t.position))) : e.hover && (s.body.setGravityScale(0, !0),
            s.flight.hoverLock.engage(t.position)),
            "parked" === s.mode && eu(this.kind) && this.suspendBody(s),
            this.emit(s, {
                type: "respawned",
                pose: t,
                reason: "join"
            })
        }
        createPilot(e, t, i, s, n, r) {
            if (this.pilot(e))
                throw Error(`pilot ${e} is already in the room`);
            let a = (0,
            q.createPilotBody)(this.rapier, this.physics, o.DRONE_PROFILES[t], s, this.physicsSetup)
              , l = new eA(this.rapier,e,t,i,a,n,r,this.physicsSetup);
            return l.ownedGates = this.gates.ownedBy(e),
            l.onChainExpire = () => this.bankChain(l, !1),
            this.pilots.push(l),
            this.byBody.set(a.handle, l),
            this.configureColliders(l),
            this.applyGroups(l),
            l
        }
        removePilot(e) {
            let t = this.pilot(e);
            t && (this.abandon(t),
            this.bankChain(t, !0),
            this.dropPilot(t))
        }
        dropPilot(e) {
            this.gates.clearOwner(e.id);
            for (let t = 0; t < e.body.numColliders(); t++)
                this.byCollider.delete(e.body.collider(t).handle);
            this.byBody.delete(e.body.handle),
            this.physics.removeRigidBody(e.body),
            this.pilots.splice(this.pilots.indexOf(e), 1)
        }
        exportPilot(e) {
            let t = this.transferOf(e);
            return this.dropPilot(this.require(e)),
            t
        }
        transferOf(e) {
            let t = this.require(e)
              , i = t.last;
            return {
                id: e,
                state: this.savePilot(e),
                context: this.pilotContext(e),
                tuning: t.tuning,
                input: (0,
                n.copyInput)(t.input, (0,
                n.idleInput)()),
                last: i && {
                    ...i,
                    motors: [...i.motors]
                },
                accounting: {
                    combo: t.combo,
                    proximity: t.proximity,
                    scoringClock: t.scoringClock,
                    playClock: t.playClock,
                    clockMs: t.clockMs,
                    sampleRespawn: t.sampleRespawn,
                    sampleTicks: t.sampleTicks,
                    samplePosition: {
                        ...t.samplePosition
                    }
                },
                contact: {
                    ...t.flight.primedContact ?? (0,
                    u.sampleGroundContact)(this.physics, t.body, this.contactSample)
                }
            }
        }
        importPilot(e) {
            let {id: t, state: i, context: s, accounting: r} = e
              , o = this.pilot(t);
            if (o)
                o.tuning = e.tuning,
                this.refreshTuning(o),
                o.suspendedMotion && !eD(o.body, i, eM.body) && (o.recollide = !0);
            else {
                let n = eM.body + q.BODY_SLOT.x;
                o = this.createPilot(t, s.normalDrone, e.tuning, {
                    id: t,
                    label: "",
                    pad: !1,
                    position: [i[n], i[n + 1], i[n + 2]],
                    yaw: 0
                }, !1, r.combo),
                this.seatLessonGates(o)
            }
            o.combo = r.combo,
            o.proximity = r.proximity,
            o.scoringClock = r.scoringClock,
            o.playClock = r.playClock,
            o.clockMs = r.clockMs,
            o.sampleRespawn = r.sampleRespawn,
            o.sampleTicks = r.sampleTicks,
            Object.assign(o.samplePosition, r.samplePosition),
            (0,
            n.copyInput)(e.input, o.input),
            o.last = e.last,
            this.restoreContext(t, s),
            this.loadPilot(t, i),
            o.flight.primeContact("flying" === o.mode ? e.contact ?? null : null)
        }
        hasPilot(e) {
            return !!this.pilot(e)
        }
        setPilotXp(e, t) {
            this.require(e).xp = t
        }
        setPilotCaptureTail(e, t) {
            this.require(e).captureTail = t
        }
        setPilotGifts(e, t) {
            this.require(e).gifts = t
        }
        command(e, t) {
            this.commands.push({
                pilot: e,
                command: t
            })
        }
        hold(e) {
            let t = this.require(e);
            null === t.heldSince && ("flying" === t.mode && t.flight.primeContact(t.flight.primedContact ?? (0,
            u.sampleGroundContact)(this.physics, t.body, this.contactSample)),
            t.heldSince = this.tick,
            this.settleBody(t))
        }
        release(e) {
            let t = this.require(e)
              , i = t.heldSince;
            null === i || (t.heldSince = null,
            this.settleBody(t),
            this.tick - i <= e_ || "flying" !== t.mode || t.race?.phase === "running" && null === t.race.go && this.restartRace(t))
        }
        anchor(e, t, i=0, s=!1) {
            let n = this.require(e)
              , r = n.body.translation()
              , o = {
                x: r.x,
                y: r.y,
                z: r.z
            }
              , a = this.savePilot(e, this.anchored)
              , l = s && null !== this.lesson && n.lessonActive && function(e, t, i, s=0) {
                if (!e || "land" !== e.kind)
                    return !1;
                let n = s + eR;
                if (!t[n + eS.lessonActive] || !t[n + eS.lessonAirborne] || t[n + eS.lessonHeld] + d.FLIGHT_TIMESTEP < v.LAND_SETTLE_SECONDS)
                    return !1;
                let r = i.x - e.position[0]
                  , o = i.y - e.position[1]
                  , a = i.z - e.position[2];
                return r * r + a * a <= e.radius * e.radius && Math.abs(o) <= v.LAND_HEIGHT_TOLERANCE
            }(this.lesson.objectives[n.lessonIndex], a, function(e, t=0) {
                let i = t + eM.body + q.BODY_SLOT.x;
                return {
                    x: e[i],
                    y: e[i + 1],
                    z: e[i + 2]
                }
            }(t, i));
            this.loadPilot(e, function(e, t, i=0) {
                for (let s = 0; s < eR; s++)
                    e[s] = t[i + s];
                for (let s of eE)
                    e[eR + s] = t[i + eR + s];
                return e[eR + eS.previousX] = t[i + q.BODY_SLOT.x],
                e[eR + eS.previousY] = t[i + q.BODY_SLOT.y],
                e[eR + eS.previousZ] = t[i + q.BODY_SLOT.z],
                e
            }(a, t, i));
            let c = n.race;
            s && c && ("staged" === c.phase || "running" === c.phase) ? this.crossGates(n, c, o, n.body.translation()) : l && this.completeObjective(n)
        }
        crowdOf(e) {
            return this.crowdFor(this.require(e))
        }
        crowdFor(e) {
            return this.crowd ? e.crowd ?? this.crowd.current : null
        }
        setPilotCrowd(e, t) {
            this.require(e).crowd = t
        }
        changeCrowd(e, t) {
            let i = this.require(e)
              , s = this.crowdFor(i);
            if (!s)
                return;
            let n = this.crowd.change(s, t);
            i.crowd ? i.crowd = n : this.crowd.current = n
        }
        refuseDrone(e, t, i) {
            let s = this.require(e)
              , n = s.race;
            if (t !== i && n && "menu" !== n.phase && (s.normalDrone === t || s.drone === t)) {
                let e = "staged" === n.phase;
                this.exitRace(s),
                this.emit(s, {
                    type: "raceLeft",
                    courseId: n.course.id,
                    staged: e
                })
            }
            s.normalDrone === t && t !== i && (s.combatSetup ? this.pickDrone(s, i) : this.swapDrone(s, i)),
            this.emit(s, {
                type: "droneRefused",
                drone: i,
                refused: t
            })
        }
        setCombat(e, t, i, s) {
            let n = this.require(e);
            n.combatSetup = t,
            t ? i && n.combat.assign(i) : n.combat.clear(),
            n.aimTiltDeg = t && void 0 !== s ? s : n.tuning.cameraTiltDeg ?? 0
        }
        seatOnPad(e, t) {
            this.teleport(this.require(e), {
                id: "pad",
                label: "",
                position: [...t.position],
                yaw: t.yaw,
                pad: !0
            }, !0, "join")
        }
        combatStanding(e) {
            let t = this.pilot(e)
              , i = t?.combatSetup;
            if (!t || !i)
                return null;
            let {epoch: s, life: n, phase: r, appliedCseq: o} = t.combat;
            return {
                match: i.match,
                seat: i.seat,
                epoch: s,
                life: n,
                phase: r,
                appliedCseq: o
            }
        }
        applyCombat(e, t) {
            let i = this.require(e)
              , s = i.combatSetup
              , n = (0,
            H.transitionVerdict)(this.combatStanding(e), t, this.tick);
            if ("apply" !== n || !s)
                return n;
            let r = (0,
            H.applyTransition)(i.combat, t, (0,
            G.droneCombat)(i.normalDrone).health);
            return r?.kind === "ko" ? this.knockedOut(i, "hit") : r?.kind === "pad" && (this.teleport(i, {
                id: "pad",
                label: "",
                position: [...r.pad.position],
                yaw: r.pad.yaw,
                pad: !0
            }, !0, "relaunch"),
            this.restage(i),
            i.aimTiltDeg = i.tuning.cameraTiltDeg ?? 0),
            n
        }
        step(e, t) {
            let i = this.beginTick(e);
            for (let e = 0; e < i; e++)
                this.advance();
            this.endTick(),
            this.takeEvents(t)
        }
        beginTick(e) {
            let t = this.commands.length
              , i = 0;
            for (let e = 0; e < t; e++) {
                let t = this.commands[e]
                  , s = this.pilot(t.pilot);
                s && null !== s.heldSince ? this.commands[i++] = t : s && this.apply(s, t.command)
            }
            for (let s of (this.commands.splice(i, t - i),
            this.pilots)) {
                if (null !== s.heldSince) {
                    this.idle(s);
                    continue
                }
                let t = e.get(s.id);
                t && (0,
                n.copyInput)(t, s.input),
                (0,
                n.tickControl)(s.input, s.control),
                this.tickPilot(s)
            }
            let s = this.stepsThisTick();
            for (let e of this.pilots)
                eP(e) || this.holdClocks(e, s);
            return s
        }
        advance() {
            this.physicsStep()
        }
        endTick() {
            if (this.forensics)
                for (let e of this.pilots)
                    e.touched && this.inspectHolds(e);
            for (let e of this.pilots)
                e.combatTicked && (e.combatTicked = !1,
                e.combat.phase === B.PHASE.alive && e.combat.shieldAfter(e.combatFired, e.combatLocked && !e.flight.hoverLock.active));
            this.tick++
        }
        takeEvents(e) {
            for (let t of this.outbox)
                e.push(t);
            this.outbox.length = 0
        }
        replay(e) {
            this.replaying = !0;
            try {
                let t = this.beginTick(e);
                for (let e = 0; e < t; e++)
                    this.advance();
                this.endTick()
            } finally {
                this.replaying = !1
            }
        }
        view(e) {
            let t = this.pilot(e);
            return t ? {
                id: t.id,
                drone: t.drone,
                normalDrone: t.normalDrone,
                mode: t.mode,
                body: t.body,
                last: t.last,
                combo: t.combo,
                proximity: t.proximity,
                input: t.input,
                invertedSeconds: t.invertedSeconds,
                mapLeave: t.mapLeave,
                race: t.race,
                lessonIndex: t.lessonIndex,
                lessonHeld: t.lessonRun.held,
                lessonSatisfied: t.lessonSatisfied,
                respawns: t.respawns,
                combat: t.combatSetup ? {
                    setup: t.combatSetup,
                    state: t.combat
                } : null,
                aimTiltDeg: t.aimTiltDeg,
                markerHold: t.markerHold,
                drowned: t.drowned
            } : null
        }
        castRay(e, t, i, s, n=0) {
            let r = (0,
            X.queryGroups)(!1)
              , o = this.rapier.QueryFilterFlags.EXCLUDE_SENSORS;
            if (n > 0) {
                let a = this.probeBalls.get(n);
                a || this.probeBalls.set(n, a = new this.rapier.Ball(n));
                let l = this.physics.castShape(e, ef, t, a, 0, i, !0, o, r);
                return l ? (s && (s.x = -l.normal2.x,
                s.y = -l.normal2.y,
                s.z = -l.normal2.z),
                l.time_of_impact) : 1 / 0
            }
            let a = this.probeRay ??= new this.rapier.Ray({
                x: 0,
                y: 0,
                z: 0
            },{
                x: 0,
                y: 0,
                z: 1
            });
            a.origin.x = e.x,
            a.origin.y = e.y,
            a.origin.z = e.z,
            a.dir.x = t.x,
            a.dir.y = t.y,
            a.dir.z = t.z;
            let l = this.physics.castRayAndGetNormal(a, i, !0, o, r);
            return l ? (s && (s.x = l.normal.x,
            s.y = l.normal.y,
            s.z = l.normal.z),
            l.timeOfImpact) : 1 / 0
        }
        moveClear(e, t, i, s=0, n=this.worldSteps) {
            let r = i.x - t.x
              , o = i.y - t.y
              , a = i.z - t.z
              , l = Math.sqrt(r * r + o * o + a * a);
            if (0 === l)
                return !0;
            let c = this.pilot(e)
              , h = c?.ghost ?? !1
              , p = (0,
            X.queryGroups)(h)
              , u = h ? c?.ownedGates : void 0
              , f = n !== this.worldSteps
              , m = n * d.FLIGHT_TIMESTEP;
            f && this.moving && (this.moving.snap(m),
            this.physics.propagateModifiedBodyPositionsToColliders());
            try {
                let e = r / l
                  , n = o / l
                  , c = a / l
                  , h = (e, t, i, s, n, r) => this.castMove(e, t, i, s, n, r, l, p, u, m)
                  , d = h(t.x, t.y, t.z, e, n, c);
                if (d < 0)
                    return !0;
                if (0 === d)
                    return !1;
                let f = h(i.x, i.y, i.z, -e, -n, -c);
                if (f <= 0)
                    return !1;
                let y = l - d - f;
                if (!(y > 1e-6 && y <= s))
                    return !1;
                let[g,b,w] = Math.abs(e) <= Math.abs(n) && Math.abs(e) <= Math.abs(c) ? [1, 0, 0] : Math.abs(n) <= Math.abs(c) ? [0, 1, 0] : [0, 0, 1]
                  , x = n * w - c * b
                  , v = c * g - e * w
                  , S = e * b - n * g
                  , k = Math.sqrt(x * x + v * v + S * S);
                x /= k,
                v /= k,
                S /= k;
                let T = n * S - c * v
                  , M = c * x - e * S
                  , R = e * v - n * x
                  , C = 2 * s
                  , E = (i, s, r) => 0 > h(t.x + C * i, t.y + C * s, t.z + C * r, e, n, c) && 0 > h(t.x - C * i, t.y - C * s, t.z - C * r, e, n, c);
                return E(x, v, S) || E(T, M, R)
            } finally {
                f && this.moving && (this.moving.snap(this.time),
                this.physics.propagateModifiedBodyPositionsToColliders())
            }
        }
        castMove(e, t, i, s, n, r, o, a, l, c) {
            let h = this.probeRay ??= new this.rapier.Ray({
                x: 0,
                y: 0,
                z: 0
            },{
                x: 0,
                y: 0,
                z: 1
            });
            h.origin.x = e,
            h.origin.y = t,
            h.origin.z = i,
            h.dir.x = s,
            h.dir.y = n,
            h.dir.z = r;
            let d = this.physics.castRay(h, o, !0, this.rapier.QueryFilterFlags.EXCLUDE_SENSORS, a, void 0, void 0, e => !e.parent()?.isKinematic() && (!l || l(e)))
              , p = d ? d.timeOfImpact : -1
              , u = this.moving ? this.moving.castRay(h, o, a) : -1;
            u >= 0 && (p < 0 || u < p) && (p = u);
            let f = this.drift ? this.drift.castRayAt(c, h, o, a) : -1;
            return f >= 0 && (p < 0 || f < p) && (p = f),
            p
        }
        touched(e) {
            return this.pilot(e)?.touched ?? !1
        }
        play(e) {
            return this.pilot(e)?.play ?? null
        }
        raceCourse(e) {
            return this.pilot(e)?.race?.course ?? null
        }
        savePilot(e, t=new Float64Array(eT), i=0) {
            let s = this.require(e)
              , n = i + eM.body
              , r = q.BODY_SLOT;
            if ((0,
            q.saveBodyState)(s.body, t, n),
            s.suspendedMotion) {
                let {linear: e, angular: i} = s.suspendedMotion;
                t[n + r.vx] = e.x,
                t[n + r.vy] = e.y,
                t[n + r.vz] = e.z,
                t[n + r.wx] = i.x,
                t[n + r.wy] = i.y,
                t[n + r.wz] = i.z
            }
            s.flight.saveState(t, i + eM.flight);
            let o = i + eR
              , a = s.race;
            t[o + eS.mode] = ey.indexOf(s.mode),
            t[o + eS.cinematicTicks] = s.cinematicTicks,
            t[o + eS.racePhase] = a ? em.indexOf(a.phase) : 0,
            t[o + eS.raceGate] = a?.gateIndex ?? 0,
            t[o + eS.raceSteps] = a?.steps ?? 0,
            t[o + eS.raceClean] = +!!a?.clean,
            t[o + eS.raceLeaveSeconds] = a?.leave.secondsLeft ?? 0,
            t[o + eS.raceLeaveWarning] = +!!a?.leave.warning,
            t[o + eS.raceLeaveLevel] = a?.leave.level ?? 0,
            t[o + eS.raceTail] = a?.tail ?? 0,
            t[o + eS.lessonActive] = +!!s.lessonActive,
            t[o + eS.lessonIndex] = s.lessonIndex,
            t[o + eS.lessonHeld] = s.lessonRun.held,
            t[o + eS.lessonAirborne] = +!!s.lessonRun.beenAirborne,
            t[o + eS.lessonClean] = +!!s.lessonClean,
            t[o + eS.invertedSeconds] = s.invertedSeconds,
            t[o + eS.previousX] = s.previous.x,
            t[o + eS.previousY] = s.previous.y,
            t[o + eS.previousZ] = s.previous.z,
            t[o + eS.seeded] = +!!s.seeded,
            t[o + eS.respawns] = s.respawns,
            t[o + eS.latches] = this.latchMask(s),
            t[o + eS.mapLeaveSeconds] = s.mapLeave.secondsLeft,
            t[o + eS.mapLeaveWarning] = +!!s.mapLeave.warning,
            t[o + eS.mapLeaveLevel] = s.mapLeave.level,
            t[o + eS.warpTick] = s.warpTick;
            let l = s.cinematicSpawn;
            return t[o + eS.cinematicSpawn] = +!!l,
            t[o + eS.cinematicX] = l?.position[0] ?? 0,
            t[o + eS.cinematicY] = l?.position[1] ?? 0,
            t[o + eS.cinematicZ] = l?.position[2] ?? 0,
            t[o + eS.cinematicYaw] = l?.yaw ?? 0,
            t[o + eS.markerHold] = s.markerHold,
            t[o + eS.drowned] = +!!s.drowned,
            s.combat.save(t, i + eM.combat),
            t
        }
        loadPilot(e, t, i=0) {
            let s = this.require(e)
              , n = i + eM.body;
            for (let i = 0; i < q.BODY_STATE_LENGTH; i++)
                if (!Number.isFinite(t[n + i]))
                    throw Error(`Non-finite pilot ${e} snapshot at tick ${this.tick}, body index ${i}`);
            s.suspendedMotion && !eD(s.body, t, n) && (s.recollide = !0),
            this.resumeBody(s),
            (0,
            q.loadBodyState)(s.body, t, n),
            s.ccdStale = !0,
            s.flight.loadState(t, i + eM.flight);
            let r = i + eR
              , o = ey[t[r + eS.mode]] ?? "flying";
            s.cinematicTicks = t[r + eS.cinematicTicks];
            let a = em[t[r + eS.racePhase]] ?? null
              , l = t[r + eS.raceGate]
              , c = t[r + eS.raceSteps]
              , h = 1 === t[r + eS.raceClean]
              , d = t[r + eS.raceLeaveSeconds]
              , p = 1 === t[r + eS.raceLeaveWarning]
              , u = t[r + eS.raceLeaveLevel]
              , m = s.race;
            m && a ? (m.phase = a,
            m.steps = c,
            m.clean = h,
            Object.assign(m.leave, {
                secondsLeft: d,
                warning: p,
                level: u
            }),
            m.tail = t[r + eS.raceTail] > 0 ? t[r + eS.raceTail] : null,
            this.seatRaceGates(s, l)) : m && !a && this.endRace(s),
            s.lessonActive = 1 === t[r + eS.lessonActive],
            s.lessonIndex = t[r + eS.lessonIndex],
            s.lessonRun.held = t[r + eS.lessonHeld],
            s.lessonRun.beenAirborne = 1 === t[r + eS.lessonAirborne],
            s.lessonClean = 1 === t[r + eS.lessonClean],
            s.invertedSeconds = t[r + eS.invertedSeconds],
            s.previous.x = t[r + eS.previousX],
            s.previous.y = t[r + eS.previousY],
            s.previous.z = t[r + eS.previousZ],
            s.seeded = 1 === t[r + eS.seeded],
            s.respawns = t[r + eS.respawns],
            this.restoreLatch(s, t[r + eS.latches]),
            s.mapLeave.secondsLeft = t[r + eS.mapLeaveSeconds],
            s.mapLeave.warning = 1 === t[r + eS.mapLeaveWarning],
            s.mapLeave.level = t[r + eS.mapLeaveLevel],
            s.warpTick = t[r + eS.warpTick],
            s.markerHold = t[r + eS.markerHold],
            s.drowned = 1 === t[r + eS.drowned],
            s.combat.load(t, i + eM.combat),
            this.setMode(s, o),
            s.cinematicSpawn = 1 === t[r + eS.cinematicSpawn] ? (0,
            f.groundSpawn)([t[r + eS.cinematicX], t[r + eS.cinematicY], t[r + eS.cinematicZ]], t[r + eS.cinematicYaw]) : null
        }
        latchMask(e) {
            let t = 0;
            for (let i = 0; i < this.latchKeys.length; i++)
                e.latched.has(this.latchKeys[i]) && (t += this.latchBits[i]);
            return t
        }
        restoreLatch(e, t) {
            e.latched.clear();
            for (let i = this.latchKeys.length - 1; i >= 0; i--)
                t < this.latchBits[i] || (t -= this.latchBits[i],
                e.latched.add(this.latchKeys[i]))
        }
        pilotContext(e) {
            let t = this.require(e)
              , i = t.race
              , s = t.context;
            return s && s.xp === t.xp && s.gifts === t.gifts && s.captureTail === t.captureTail && s.drone === t.drone && s.normalDrone === t.normalDrone && s.course === (i?.course ?? null) && s.courseRevision === (i?.revision ?? 0) && s.raceGo === (i?.go ?? null) && s.crowd === t.crowd && s.heldSince === t.heldSince && s.combat === t.combatSetup && s.aimTiltDeg === t.aimTiltDeg ? s : (t.context = {
                xp: t.xp,
                gifts: t.gifts,
                captureTail: t.captureTail,
                drone: t.drone,
                normalDrone: t.normalDrone,
                course: i?.course ?? null,
                courseRevision: i?.revision ?? 0,
                raceGo: i?.go ?? null,
                crowd: t.crowd,
                heldSince: t.heldSince,
                combat: t.combatSetup,
                aimTiltDeg: t.aimTiltDeg
            },
            t.context)
        }
        restoreContext(e, t) {
            let i = this.require(e);
            this.pilotContext(e) !== t && (i.xp = t.xp,
            i.gifts = t.gifts ?? [],
            i.captureTail = t.captureTail ?? !1,
            i.race && (i.race.course !== t.course || i.race.revision !== t.courseRevision || i.race.go !== (t.raceGo ?? null)) && (i.race = null,
            this.gates.clearOwner(i.id)),
            !i.race && t.course && (i.race = {
                course: t.course,
                revision: t.courseRevision,
                phase: "menu",
                gateIndex: 0,
                steps: 0,
                clean: !0,
                leave: (0,
                z.createLeaveState)(),
                tail: null,
                go: t.raceGo ?? null
            }),
            i.normalDrone = t.normalDrone,
            i.drone !== t.drone && this.setDrone(i, t.drone),
            i.crowd = t.crowd,
            i.combatSetup = t.combat,
            i.aimTiltDeg = t.aimTiltDeg,
            i.heldSince !== t.heldSince && (i.heldSince = t.heldSince,
            this.settleBody(i)),
            this.applyGroups(i))
        }
        setWorldSteps(e) {
            this.worldSteps = e,
            this.moving?.snap(this.time),
            this.drift?.snap(this.time, this.driftNeighbours()),
            this.physics.propagateModifiedBodyPositionsToColliders(),
            (this.moving || this.drift) && (this.ccdStale = !0)
        }
        setCrowdRoutes(e) {
            this.crowd && (this.crowd.current = this.crowd.add(e))
        }
        takeSnapshot() {
            return this.physics.takeSnapshot()
        }
        free() {
            this.queue.free(),
            this.physics.free()
        }
        apply(e, t) {
            switch (t.type) {
            case "respawn":
                return this.respawnRequested(e, "request");
            case "park":
                if ("flying" !== e.mode)
                    return;
                e.race?.phase === "running" && null === e.race.go && this.restartRace(e),
                this.setMode(e, "parked");
                return;
            case "fly":
                if ("parked" !== e.mode || e.race && ("menu" === e.race.phase || "finished" === e.race.phase && null === e.race.go))
                    return;
                if (e.race?.phase === "finished")
                    return this.holdWhereParked(e);
                this.setMode(e, "flying"),
                !t.warp || "private" !== this.kind || e.race || this.lesson || (e.warpTick = 0);
                return;
            case "tuning":
                e.tuning = t.tuning,
                this.refreshTuning(e),
                e.combatSetup || (e.aimTiltDeg = t.tuning.cameraTiltDeg ?? 0);
                return;
            case "swapDrone":
                if (e.race || this.lesson || e.combatSetup || e.drone === t.drone)
                    return;
                return this.swapDrone(e, t.drone);
            case "pickDrone":
                if (!e.combatSetup || e.normalDrone === t.drone || !(0,
                B.canPickDrone)(e.combat, e.combatSetup, this.tick))
                    return;
                return this.pickDrone(e, t.drone);
            case "openRace":
                {
                    if (e.race?.go != null || e.combatSetup || null !== e.xp && !(0,
                    _.racesUnlocked)(e.xp))
                        return;
                    let i = this.courses.get(t.courseId);
                    if (!i || this.lesson)
                        return this.emit(e, {
                            type: "raceRefused",
                            courseId: t.courseId,
                            reason: "unknown_course"
                        });
                    this.enterRaceMenu(e, i);
                    return
                }
            case "startRace":
                if (e.race?.go != null || e.combatSetup)
                    return;
                return this.startRace(e, t.courseId, t.revision, t.drone, null);
            case "restartRace":
                e.race && "menu" !== e.race.phase && !e.combatSetup && this.restartRace(e);
                return;
            case "exitRace":
                if (e.combatSetup)
                    return;
                return this.exitRace(e);
            case "closeMarker":
                return this.closeMarker(e);
            case "startLesson":
                return this.startLesson(e);
            case "placeAt":
                this.bankChain(e, !0),
                this.teleport(e, t.spawn, !1, "request");
                return;
            case "cinematicDone":
                "cinematic" === e.mode && this.endCinematic(e);
                return
            }
        }
        pickDrone(e, t) {
            let i = e.combat
              , s = (0,
            G.droneCombat)(t).health;
            this.swapDrone(e, t),
            i.phase === B.PHASE.alive && this.tick < e.combatSetup.start ? i.hp = s : i.hp = Math.min(i.hp, s)
        }
        swapDrone(e, t) {
            this.bankChain(e, !1),
            e.normalDrone = t,
            e.race && "menu" !== e.race.phase || (this.setDrone(e, t),
            (0,
            h.prepareDroneSwap)(e.body),
            e.flight.resetForSwap(),
            e.combo.resetMotion(),
            e.proximity.reset(),
            this.emit(e, {
                type: "droneSwapped",
                drone: t
            }))
        }
        respawnRequested(e, t) {
            let i = "request" === t || "drowned" === t;
            if (e.combatSetup && i && this.tick < e.combatSetup.start)
                return;
            if (e.combatSetup && e.combat.phase === B.PHASE.alive && i)
                return e.combat.phase = B.PHASE.ko,
                e.combat.koTicks = 0,
                this.knockedOut(e, "self");
            if (e.combatSetup && e.combat.phase === B.PHASE.ko)
                return;
            if ("cinematic" === e.mode)
                return this.endCinematic(e);
            if (e.race?.go != null && "running" === e.race.phase)
                return this.resetToGate(e, e.race);
            if (e.race && "menu" !== e.race.phase)
                return this.restartRace(e);
            if (this.lesson) {
                (e.lessonActive || e.lessonIndex > 0) && this.startLesson(e);
                return
            }
            if ("flying" !== e.mode)
                return;
            this.bankChain(e, !1);
            let s = (0,
            f.findGroundRespawn)(this.physics, e.body, this.world.bounds, this.floor, this.respawnProbes(e));
            s && this.teleport(e, s, !1, t)
        }
        enterRaceMenu(e, t) {
            this.bankChain(e, !0),
            this.endRace(e),
            e.markerHold = eb.none,
            e.race = {
                course: t,
                revision: t.competitiveRevision ?? 1,
                phase: "menu",
                gateIndex: 0,
                steps: 0,
                clean: !0,
                leave: (0,
                z.createLeaveState)(),
                tail: null,
                go: null
            },
            this.applyGroups(e),
            this.setMode(e, "parked")
        }
        stageMatchRace(e, t) {
            let i = this.require(e)
              , s = i.race;
            if (s && "staged" === s.phase && s.go === g.GO_PENDING && t.go !== g.GO_PENDING && s.course.id === t.courseId && s.revision === t.revision && i.drone === t.drone) {
                s.go = t.go,
                this.emit(i, {
                    type: "raceGo",
                    courseId: s.course.id,
                    go: t.go
                });
                return
            }
            this.startRace(i, t.courseId, t.revision, t.drone, t.go)
        }
        closeMatchRace(e, t) {
            let i = this.require(e)
              , s = i.race;
            s && null !== s.go && s.course.id === t && "menu" !== s.phase && "finished" !== s.phase && (this.bankChain(i, !0),
            s.phase = "finished",
            this.gates.clearOwner(i.id),
            this.applyGroups(i),
            "flying" === i.mode && this.setMode(i, "parked"))
        }
        restageMatchRace(e, t) {
            let i = this.require(e)
              , s = () => {
                let e = i.race;
                return null !== e && e.go === t.go && e.course.id === t.courseId && e.revision === t.revision && i.drone === t.drone
            }
            ;
            s() || this.startRace(i, t.courseId, t.revision, t.drone, t.go);
            let n = i.race;
            if (!n || null === n.go || !s())
                return;
            let r = Math.max(0, Math.min(Math.trunc(t.gate), n.course.gates.length - 1));
            0 === r ? (this.abandon(i),
            this.bankChain(i, !0),
            Object.assign(n, {
                phase: "staged",
                gateIndex: 0,
                steps: 0,
                clean: !0,
                leave: (0,
                z.createLeaveState)(),
                tail: null
            }),
            this.stageRace(i)) : (Object.assign(n, {
                phase: "running",
                steps: Math.max(0, this.worldSteps - n.go),
                clean: !1
            }),
            this.seatRaceGates(i, r),
            this.applyGroups(i),
            this.resetToGate(i, n)),
            this.emit(i, {
                type: "raceRestaged",
                courseId: n.course.id,
                gate: r
            })
        }
        startRace(e, t, i, s, n) {
            if (null !== e.xp && !(0,
            _.racesUnlocked)(e.xp))
                return this.emit(e, {
                    type: "raceRefused",
                    courseId: t,
                    reason: "locked"
                });
            let r = this.courses.get(t);
            return r ? (r.competitiveRevision ?? 1) !== i ? this.emit(e, {
                type: "raceRefused",
                courseId: t,
                reason: "course_changed"
            }) : void (this.bankChain(e, !0),
            this.endRace(e),
            e.drone !== s && this.setDrone(e, s),
            e.race = {
                course: r,
                revision: i,
                phase: "staged",
                gateIndex: 0,
                steps: 0,
                clean: !0,
                leave: (0,
                z.createLeaveState)(),
                tail: null,
                go: n
            },
            this.stageRace(e)) : this.emit(e, {
                type: "raceRefused",
                courseId: t,
                reason: "unknown_course"
            })
        }
        restartRace(e) {
            let t = e.race;
            t && (null === t.go || "finished" !== t.phase) && (this.abandon(e),
            this.bankChain(e, !0),
            Object.assign(t, {
                phase: "staged",
                gateIndex: 0,
                steps: 0,
                clean: !0,
                leave: (0,
                z.createLeaveState)(),
                tail: null
            }),
            this.stageRace(e))
        }
        resetToGate(e, t) {
            this.bankChain(e, !0),
            Object.assign(t.leave, (0,
            z.createLeaveState)()),
            this.restage(e),
            this.teleport(e, this.contain((0,
            L.gateResetPose)(t.course, t.gateIndex - 1)), !0, "race")
        }
        stageRace(e) {
            let t = e.race;
            this.seatRaceGates(e, 0),
            this.applyGroups(e);
            let i = this.contain((0,
            y.hoverStartPose)(this.contain(t.course.spawn)));
            this.restage(e),
            this.teleport(e, i, !0, "race"),
            this.emit(e, {
                type: "raceStaged",
                courseId: t.course.id,
                revision: t.revision
            })
        }
        exitRace(e) {
            let t = e.race;
            if (!t)
                return;
            this.bankChain(e, !0);
            let i = t.course.raceExitSpawn ?? t.course.spawn;
            this.endRace(e),
            this.teleport(e, i, !1, "exit")
        }
        endRace(e) {
            e.race && (this.abandon(e),
            e.race = null,
            this.gates.clearOwner(e.id),
            e.drone !== e.normalDrone && this.setDrone(e, e.normalDrone),
            this.applyGroups(e))
        }
        abandon(e) {
            let t = e.race;
            t?.phase === "running" && this.emit(e, {
                type: "raceAbandoned",
                courseId: t.course.id,
                revision: t.revision,
                drone: e.drone
            })
        }
        seatRaceGates(e, t) {
            let i = e.race;
            i.gateIndex = t,
            i.course.gates.forEach( (s, n) => {
                n >= t && "finished" !== i.phase ? this.gates.addOwned(e.id, `race:${n}`, s) : this.gates.removeOwned(e.id, `race:${n}`)
            }
            )
        }
        startLesson(e) {
            let t = this.lesson;
            if (!t)
                return;
            this.beginLesson(e);
            let i = this.contain(t.spawn);
            this.restage(e),
            this.teleport(e, i, this.lessonAirStart(i), "lesson")
        }
        lessonAirStart(e) {
            let[t,i,s] = e.position;
            return i > this.groundHeight(t, s) + 1
        }
        beginLesson(e) {
            this.lesson && (e.lessonActive = !0,
            e.lessonIndex = 0,
            e.lessonClean = !0,
            (0,
            x.resetObjectiveRun)(e.lessonRun),
            this.seatLessonGates(e),
            this.applyGroups(e))
        }
        seatLessonGates(e) {
            this.lesson?.objectives.forEach( (t, i) => {
                "gate" === t.kind && this.gates.addOwned(e.id, `lesson:${i}`, t)
            }
            )
        }
        tickPilot(e) {
            if (e.touched = !1,
            e.play.activeMs = 0,
            e.play.flightMs = 0,
            e.play.distance = 0,
            e.play.mode = this.playMode(e),
            e.play.activity = this.playActivity(e),
            "cinematic" === e.mode && ++e.cinematicTicks >= eg && this.endCinematic(e),
            e.combatSetup && this.tickCombat(e, e.combatSetup),
            this.replaying || (e.clockMs += 1e3 / n.TICK_RATE,
            ++e.sampleTicks < 6))
                return;
            e.sampleTicks = 0;
            let t = e.last?.armed ?? !1
              , i = e.last?.supported ?? !1
              , s = this.activitySample(e, t, i);
            s.enabled = "parked" !== e.mode,
            s.flying = "flying" === e.mode,
            s.transition = "cinematic" === e.mode;
            let r = e.playClock.step(e.clockMs, ew, s);
            e.play.activeMs = r;
            let o = e.body.translation()
              , a = e.samplePosition
              , l = o.x - a.x
              , c = o.y - a.y
              , h = o.z - a.z
              , d = Math.sqrt(l * l + c * c + h * h);
            this.distanceCounts && r > 0 && t && !i && e.sampleRespawn === e.respawns && d <= .15 * r && (e.play.distance = d),
            a.x = o.x,
            a.y = o.y,
            a.z = o.z,
            e.sampleRespawn = e.respawns
        }
        tickCombat(e, t) {
            let i = e.combat;
            if (e.combatTicked = !0,
            e.combatFired = !1,
            e.combatLocked = e.flight.hoverLock.active,
            i.tick((0,
            G.droneCombat)(e.normalDrone).health),
            i.phase === B.PHASE.ko) {
                e.control.armRequested = !1,
                e.control.interact = !1;
                return
            }
            if (i.phase === B.PHASE.alive && "flying" === e.mode) {
                if (this.tick < t.start) {
                    e.flight.hoverLock.active || (e.control.throttle = 0),
                    e.control.interact = !1;
                    return
                }
                e.flight.hoverLock.active || 1 !== e.body.gravityScale() || (e.input.buttons & n.BUTTON_INTERACT) == 0 || i.gunCooldown > 0 || (i.gunCooldown = (0,
                s.gunOf)(t.gun).intervalTicks,
                i.shotSeq++,
                e.combatFired = !0,
                this.emit(e, {
                    type: "shotFired",
                    epoch: i.epoch,
                    life: i.life,
                    shotSeq: i.shotSeq
                }))
            }
        }
        knockedOut(e, t) {
            let i = e.combat;
            i.shield = B.SHIELD.off,
            i.shieldTicks = 0,
            this.emit(e, {
                type: "combatKo",
                epoch: i.epoch,
                life: i.life,
                cause: t
            })
        }
        idle(e) {
            e.touched = !1,
            e.play.activeMs = 0,
            e.play.flightMs = 0,
            e.play.distance = 0
        }
        holdClocks(e, t) {
            let i = e.race;
            i?.phase === "running" && (null !== e.heldSince && "flying" === e.mode || null !== i.go) && (i.steps += t)
        }
        stepsThisTick() {
            if ("private" === this.kind && this.pilots.length > 0 && this.pilots.every(e => "flying" !== e.mode))
                return 0;
            let e = this.paceSetter;
            if (!e || null !== e.heldSince || e.warpTick >= ex)
                return n.STEPS_PER_TICK;
            let t = (0,
            D.timeWarpScale)(e.warpTick++ / n.TICK_RATE);
            return Math.max(1, Math.min(n.STEPS_PER_TICK, Math.round(t * n.STEPS_PER_TICK)))
        }
        physicsStep() {
            let e = d.FLIGHT_TIMESTEP;
            for (let t of this.pilots)
                eP(t) && this.beforePilotStep(t, e);
            let t = (this.worldSteps + 1) * e;
            for (let i of (this.moving?.beforeStep(t),
            this.drift && this.drift.beforeStep(t, this.driftNeighbours()),
            this.gateCcd(e),
            this.physics.step(this.queue, this.gates.hooks),
            this.ccdStale = !1,
            this.pilots))
                this.assertFiniteBody(i, "after physics"),
                (0,
                q.settleRotation)(i.body);
            for (let i of (this.moving?.afterStep(t),
            this.worldSteps++,
            this.queue.drainCollisionEvents(this.onCollision),
            this.queue.drainContactForceEvents(this.onContactForce),
            this.impacts.length && this.inspectImpacts(),
            this.pilots))
                eP(i) && this.afterPilotStep(i, e)
        }
        gateCcd(e) {
            let t = this.ccdStale || this.gates.changes !== this.ccdGateChanges;
            this.ccdGateChanges = this.gates.changes;
            let i = this.moving?.stepReach ?? 0;
            for (let s of this.pilots) {
                let n;
                if (s.suspendedMotion)
                    continue;
                let r = s.body;
                t || s.ccdStale ? (n = !0,
                r.isCcdEnabled() || r.enableCcd(!0)) : n = this.ccd.update(this.physics, r, s.profile, e, (0,
                X.queryGroups)(s.ghost), i),
                s.ccdStale = !1,
                n ? this.ccdSteps.on++ : this.ccdSteps.off++
            }
        }
        get ccdCounts() {
            return this.ccdSteps
        }
        assertFiniteBody(e, t) {
            let i = e.body
              , s = i.translation()
              , n = i.rotation()
              , r = i.linvel()
              , o = i.angvel();
            if (!(Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.z) && Number.isFinite(n.x) && Number.isFinite(n.y) && Number.isFinite(n.z) && Number.isFinite(n.w) && Number.isFinite(r.x) && Number.isFinite(r.y) && Number.isFinite(r.z) && Number.isFinite(o.x) && Number.isFinite(o.y) && Number.isFinite(o.z)))
                throw Error(`Non-finite pilot ${e.id} ${t} at tick ${this.tick}, world step ${this.worldSteps}`)
        }
        onCollision;
        onContactForce;
        beforePilotStep(e, t) {
            this.assertFiniteBody(e, "before flight");
            let i = e.body
              , s = e.ghost
              , n = e.race?.phase === "staged" || e.race?.phase === "running"
              , r = null !== e.combatSetup && e.combat.phase === B.PHASE.alive
              , o = e.markerHold !== eb.none
              , a = 0;
            if (this.water.length) {
                let t = i.translation();
                if ((a = (0,
                R.submersion)(this.water, t.x, t.y, t.z, e.profile.halfExtents[1])) > .5 && !e.drowned && !e.flight.hoverLock.active) {
                    e.drowned = !0;
                    let t = i.linvel();
                    this.emit(e, {
                        type: "drowned",
                        speed: Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z)
                    })
                }
            }
            let l = e.flight.step(this.physics, i, {
                dt: t,
                sticks: e.control,
                rates: e.rates,
                quad: e.quad,
                profile: e.profile,
                groundHeight: this.groundHeight,
                hoverStart: n || e.lessonActive || r || o,
                hoverHeld: this.countingDown(e) || e.markerHold === eb.open,
                hoverYaw: (n || r || o) && !e.lessonActive,
                queryGroups: (0,
                X.queryGroups)(s),
                queryFilter: s ? e.ownedGates : void 0,
                drowned: e.drowned,
                submerged: a
            });
            if (this.assertFiniteBody(e, "after flight"),
            o && !l.hoverLocked && (e.markerHold = eb.none),
            e.last = l,
            l.hoverReleased && e.race?.phase === "staged") {
                let t = i.translation()
                  , s = i.rotation();
                this.emit(e, {
                    type: "raceLaunched",
                    courseId: e.race.course.id,
                    step: this.worldSteps,
                    position: [t.x, t.y, t.z],
                    rotation: [s.x, s.y, s.z, s.w]
                })
            }
            l.touching && (e.touched = !0),
            l.armed && !l.hoverLocked && (e.play.flightMs += 1e3 * t);
            let c = i.linvel();
            if (e.preSpeed = l.speed,
            e.preLinvel.x = c.x,
            e.preLinvel.y = c.y,
            e.preLinvel.z = c.z,
            (this.crowd || this.prefabCrowd) && !e.race && !this.replaying) {
                let s = this.crowdFor(e)
                  , n = s ? this.crowd.detectHit(s, this.rapier, this.physics, i, t, this.time, (0,
                X.queryGroups)(!1)) : null
                  , r = this.prefabCrowd?.detectHit(this.rapier, this.physics, i, t, this.time, (0,
                X.queryGroups)(!1)) ?? null
                  , o = n && r ? r.fraction < n.fraction ? r : n : n ?? r;
                if (o && this.dummyHit(e, o))
                    return
            }
            if (e.invertedSeconds = e.drowned ? e.invertedSeconds + t : (0,
            b.advanceInvertedRecovery)(e.invertedSeconds, t, !0, l.touching, l.upDot),
            e.invertedSeconds >= b.INVERTED_RESPAWN_SECONDS) {
                e.invertedSeconds = 0,
                this.respawnRequested(e, e.drowned ? "drowned" : "inverted");
                return
            }
            if (this.scoring && !this.replaying && !e.race) {
                let n = this.activitySample(e, l.armed, l.supported);
                n.enabled = !0,
                n.flying = !0,
                n.transition = !1;
                let r = e.scoringClock.step(e.clockMs, 1e3 * t, n) > 0
                  , o = e.proximity.step(this.physics, i, t, (0,
                X.queryGroups)(s), s ? e.ownedGates : void 0)
                  , a = e.comboSample;
                a.airborne = r && l.armed && !l.supported,
                a.speed = l.speed,
                a.verticalSpeed = c.y,
                a.carDistance = o.carDistance,
                a.coasterDistance = o.coasterDistance,
                a.carTarget = o.carTarget,
                a.coasterTarget = o.coasterTarget,
                a.surfaceDistance = o.surfaceDistance,
                a.surfaceVector = o.surfaceVector,
                a.rotation = i.rotation(),
                Object.assign(a.velocity, e.preLinvel),
                Object.assign(a.position, i.translation()),
                a.contact = l.contact,
                a.span = 2 * Math.max(e.profile.halfExtents[0], e.profile.halfExtents[2]),
                a.gap = e.proximity.stepGap(this.physics, i, e.profile, e.preLinvel, t, a.airborne, X.GAP_QUERY_GROUPS),
                e.combo.step(t, a, e.onChainExpire)
            }
        }
        afterPilotStep(e, t) {
            let i = e.body.translation()
              , s = e.previous
              , n = (0,
            m.stepMapLeave)(e.mapLeave, (0,
            m.mapReturnZone)(this.world.bounds, i, this.floor), t);
            if ("tick" === n && this.emit(e, {
                type: "mapWarning",
                secondsLeft: e.mapLeave.secondsLeft
            }),
            "eject" === n) {
                if (e.combatSetup && this.tick >= e.combatSetup.start)
                    return this.respawnRequested(e, "request");
                let t = (0,
                f.findGroundRespawn)(this.physics, e.body, this.world.bounds, this.floor, {
                    ...this.respawnProbes(e),
                    inset: m.MAP_RETURN_MARGIN,
                    landingHeight: .1
                });
                if (!t)
                    return;
                let i = {
                    ...t,
                    yaw: (0,
                    m.mapCenterYaw)(this.world.bounds, t.position[0], t.position[2])
                };
                return e.race && (e.race.clean = !1),
                e.lessonActive && (e.lessonClean = !1),
                void this.teleport(e, i, !1, "mapReturn")
            }
            e.seeded ? this.lesson ? e.lessonActive && this.judgeLesson(e, s, i, t) : this.judgeRace(e, s, i, t) : (e.seeded = !0,
            this.latchMarkers(e, i),
            e.race?.phase === "running" && e.race.steps++),
            this.parkAfterTail(e),
            s.x = i.x,
            s.y = i.y,
            s.z = i.z
        }
        parkAfterTail(e) {
            let t = e.race;
            if (t && null !== t.tail) {
                if ("finished" !== t.phase) {
                    t.tail = null;
                    return
                }
                this.worldSteps < t.tail || (t.tail = null,
                "flying" === e.mode && this.setMode(e, "parked"))
            }
        }
        judgeRace(e, t, i, s) {
            let n = e.race;
            if (!n) {
                if (e.combatSetup)
                    return;
                let s = (0,
                O.droneEntryRadius)(e.drone)
                  , n = null
                  , r = null
                  , o = 1 / 0
                  , a = (n, r) => {
                    let a = (0,
                    O.markerForCourse)(r);
                    if (e.latched.has(n))
                        return (0,
                        O.outsideRaceMarker)(a, i, s, 3) && e.latched.delete(n),
                        !1;
                    if (!(0,
                    O.entersRaceMarker)(a, t, i, s))
                        return !1;
                    e.latched.add(n);
                    let l = i.x - a.position[0]
                      , c = i.z - a.position[2]
                      , h = l * l + c * c;
                    return !(h >= o) && (o = h,
                    !0)
                }
                ;
                for (let t of this.courses.values())
                    (null === e.xp || (0,
                    _.racesUnlocked)(e.xp)) && a(t.id, t) && (n = t,
                    r = null);
                for (let[t,i] of this.arenas)
                    (null === e.xp || (0,
                    _.tdmUnlocked)(e.xp)) && a(`arena:${t}`, i) && (r = t,
                    n = null);
                n ? (this.emit(e, {
                    type: "raceMarker",
                    courseId: n.id
                }),
                this.holdAtMarker(e, i)) : r && (this.emit(e, {
                    type: "arenaMarker",
                    arenaId: r
                }),
                this.holdAtMarker(e, i));
                return
            }
            if ("staged" !== n.phase && "running" !== n.phase || ("running" === n.phase && n.steps++,
            this.crossGates(e, n, t, i),
            !e.race || "staged" !== n.phase && "running" !== n.phase))
                return;
            let r = (0,
            z.leaveZone)(n.course, n.gateIndex, "running" === n.phase, i);
            if (!r)
                return;
            let o = (0,
            z.stepLeave)(n.leave, r, s);
            if ("tick" === o)
                this.emit(e, {
                    type: "raceWarning",
                    courseId: n.course.id,
                    secondsLeft: n.leave.secondsLeft
                });
            else if ("eject" === o) {
                let t = "staged" === n.phase;
                return (this.emit(e, {
                    type: "raceOffCourse",
                    courseId: n.course.id,
                    staged: t
                }),
                null !== n.go && "running" === n.phase) ? this.resetToGate(e, n) : this.restartRace(e)
            }
        }
        countingDown(e) {
            let t = e.race;
            return null !== t && "staged" === t.phase && null !== t.go && this.worldSteps < t.go || null !== e.combatSetup && this.tick < e.combatSetup.start
        }
        crossGates(e, t, i, s) {
            let n = -1;
            for (; t.gateIndex < t.course.gates.length; ) {
                let r = (0,
                w.gateCrossingFraction)(t.course.gates[t.gateIndex], i, s);
                if (null === r || r < n || (n = r,
                this.passGate(e, t),
                t.gateIndex >= t.course.gates.length))
                    break
            }
        }
        passGate(e, t) {
            let i = t.gateIndex;
            if (this.gates.removeOwned(e.id, `race:${i}`),
            0 === i && (t.phase = "running",
            t.steps = 0,
            t.clean = !0),
            t.gateIndex = i + 1,
            this.emit(e, {
                type: "raceGate",
                courseId: t.course.id,
                index: i
            }),
            t.gateIndex < t.course.gates.length)
                return;
            t.phase = "finished";
            let s = Math.max(1, Math.floor(25 * t.steps / 6));
            this.bankChain(e, !0),
            e.captureTail ? t.tail = this.worldSteps + I.CAPTURE_TAIL_STEPS : this.setMode(e, "parked"),
            this.emit(e, {
                type: "raceFinished",
                courseId: t.course.id,
                revision: t.revision,
                drone: e.drone,
                steps: t.steps,
                timeMs: s,
                clean: t.clean,
                finishStep: this.worldSteps,
                go: t.go
            })
        }
        judgeLesson(e, t, i, s) {
            let n = this.lesson.objectives[e.lessonIndex];
            if (!n)
                return;
            let r = e.objective;
            Object.assign(r.previous, t),
            Object.assign(r.current, i),
            r.speed = e.last?.speed ?? 0,
            r.upDot = e.last?.upDot ?? 1,
            r.grounded = e.last?.supported ?? !1;
            let o = (0,
            x.stepObjective)(n, e.lessonRun, s, r);
            e.lessonSatisfied = !o && "land" === n.kind && e.lessonRun.held > 0,
            o && this.completeObjective(e)
        }
        completeObjective(e) {
            let t = this.lesson;
            (0,
            x.resetObjectiveRun)(e.lessonRun),
            this.emit(e, {
                type: "lessonObjective",
                lessonId: t.id,
                index: e.lessonIndex
            }),
            e.lessonIndex++,
            e.lessonIndex < t.objectives.length || (e.lessonActive = !1,
            this.emit(e, {
                type: "lessonComplete",
                lessonId: t.id,
                drone: e.normalDrone,
                clean: e.lessonClean
            }))
        }
        contact(e, t, i, s) {
            let n = .65 * t / e.quad.mass
              , r = e.preLinvel
              , o = s?.linvel()
              , a = Math.abs((r.x - (o?.x ?? 0)) * i.x + (r.y - (o?.y ?? 0)) * i.y + (r.z - (o?.z ?? 0)) * i.z)
              , l = n >= 60 && (0,
            c.isUndersideImpact)(i, r, e.body.rotation())
              , h = n >= 60 && n >= (0,
            c.crashForceThreshold)(l) && e.preSpeed >= 3;
            h && this.bankChain(e, !1),
            this.contactEvents && n > 12 && this.emit(e, {
                type: "contact",
                force: n,
                normalSpeed: a,
                underside: l,
                crash: h,
                grounded: e.last?.supported ?? !1,
                vertical: Math.abs(i.y) > .75
            })
        }
        dummyHit(e, t) {
            let i = this.world.pedestrians?.indoor ? t.position[1] + 2 : void 0
              , s = (0,
            f.findGroundRespawn)(this.physics, e.body, this.world.bounds, this.floor, {
                ...this.respawnProbes(e),
                under: i
            });
            if (!s)
                return !1;
            this.bankChain(e, !0);
            let n = e.body.linvel()
              , r = e.body.angvel()
              , o = e.body.rotation()
              , a = this.crowdFor(e)
              , l = a?.routes ?? [];
            if (e.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0),
            e.body.setAngvel({
                x: 0,
                y: 0,
                z: 0
            }, !0),
            e.cinematicSpawn = s,
            e.cinematicTicks = 0,
            a && !(0,
            N.isPrefabActor)(t.actorId)) {
                let i = this.crowd.relocate(a, t.actorId, s.position, t.crowdTime);
                e.crowd ? e.crowd = i : this.crowd.current = i
            }
            return this.setMode(e, "cinematic"),
            this.emit(e, {
                type: "dummyHit",
                hit: t,
                spawn: s,
                drone: e.normalDrone,
                routes: l,
                velocity: [n.x, n.y, n.z],
                angularVelocity: [r.x, r.y, r.z],
                rotation: [o.x, o.y, o.z, o.w]
            }),
            !0
        }
        endCinematic(e) {
            let t = e.cinematicSpawn;
            if (e.cinematicSpawn = null,
            e.cinematicTicks = 0,
            this.setMode(e, "flying"),
            !t)
                return;
            let i = this.respawnProbes(e);
            if (i.crowded?.(t.position[0], t.position[2], f.LANDING_ROOM)) {
                let s = this.world.pedestrians?.indoor ? e.body.translation().y + 2 : void 0;
                t = (0,
                f.findGroundRespawn)(this.physics, e.body, this.world.bounds, this.floor, {
                    ...i,
                    under: s
                }) ?? t
            }
            this.teleport(e, t, !1, "dummy")
        }
        bankChain(e, t) {
            let i = e.combo;
            if ("active" !== i.state.phase)
                return;
            let {total: s, flightSeconds: n} = i.state;
            n > 0 && this.scoring && this.emit(e, {
                type: "chain",
                score: s,
                seconds: n,
                families: {
                    ...i.familyPoints
                },
                mode: "free",
                drone: e.normalDrone,
                silent: t
            }),
            i.finish(),
            t && i.reset()
        }
        restage(e) {
            e.warpTick = ex,
            e.cinematicTicks = 0
        }
        teleport(e, t, i, s) {
            let n = i ? t : this.contain(t);
            this.resumeBody(e),
            (0,
            q.placePilotBody)(e.body, n),
            e.body.setGravityScale(+!i, !0),
            e.flight.reset(),
            i ? e.flight.hoverLock.engage(n.position) : e.flight.hoverLock.clear(),
            e.markerHold = eb.none,
            e.combo.resetMotion(),
            e.proximity.reset(),
            e.invertedSeconds = 0,
            e.drowned = !1,
            Object.assign(e.mapLeave, (0,
            m.createMapLeaveState)()),
            e.seeded = !1,
            e.respawns++,
            (0,
            x.resetObjectiveRun)(e.lessonRun),
            "flying" !== e.mode && this.setMode(e, "flying"),
            this.emit(e, {
                type: "respawned",
                pose: n,
                reason: s
            })
        }
        setMode(e, t) {
            t !== e.mode && "flying" !== t && (e.combo.resetMotion(),
            e.proximity.resetGap()),
            "cinematic" !== t && (e.cinematicSpawn = null),
            "flying" !== t && e.flight.primeContact(null),
            e.mode = t,
            this.settleBody(e),
            this.applyGroups(e)
        }
        settleBody(e) {
            null !== e.heldSince || eu(this.kind) && "flying" !== e.mode ? this.suspendBody(e) : this.resumeBody(e)
        }
        suspendBody(e) {
            if (e.suspendedMotion)
                return;
            let t = e.body;
            e.suspendedMotion = {
                linear: t.linvel(),
                angular: t.angvel()
            },
            t.setBodyType(this.rapier.RigidBodyType.KinematicPositionBased, !0),
            t.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0),
            t.setAngvel({
                x: 0,
                y: 0,
                z: 0
            }, !0);
            for (let e = 0; e < t.numColliders(); e++)
                t.collider(e).setEnabled(!1)
        }
        resumeBody(e) {
            let t = e.suspendedMotion;
            if (!t)
                return;
            let i = e.body;
            if (i.setBodyType(this.rapier.RigidBodyType.Dynamic, !0),
            e.recollide)
                e.recollide = !1,
                e.suspendedMotion = null,
                this.replaceColliders(e);
            else
                for (let e = 0; e < i.numColliders(); e++)
                    i.collider(e).setEnabled(!0);
            i.recomputeMassPropertiesFromColliders(),
            i.setLinvel(t.linear, !0),
            i.setAngvel(t.angular, !0),
            e.suspendedMotion = null
        }
        setDrone(e, t) {
            e.drone = t,
            e.profile = o.DRONE_PROFILES[t],
            this.refreshTuning(e),
            this.replaceColliders(e)
        }
        replaceColliders(e) {
            for (let t = e.body.numColliders() - 1; t >= 0; t--) {
                let i = e.body.collider(t);
                this.byCollider.delete(i.handle),
                this.physics.removeCollider(i, !1)
            }
            let t = (0,
            q.createPilotBody)(this.rapier, this.physics, e.profile, {
                position: [0, 0, 0],
                yaw: 0
            }, this.physicsSetup);
            for (let i = 0; i < t.numColliders(); i++) {
                let s = t.collider(i)
                  , n = 0 === i ? (0,
                q.airframeCollider)(this.rapier, e.profile, this.physicsSetup) : this.rapier.ColliderDesc.ball(e.profile.cameraGuard).setTranslation(...e.profile.camera).setDensity(0);
                this.physics.createCollider(n.setFriction(s.friction()).setRestitution(s.restitution()).setContactSkin(s.contactSkin()), e.body)
            }
            this.physics.removeRigidBody(t),
            this.configureColliders(e),
            this.applyGroups(e),
            e.body.recomputeMassPropertiesFromColliders()
        }
        refreshTuning(e) {
            let {throttle: t, rates: i} = e.tuning;
            e.quad = {
                ...e.profile.quad,
                throttleMid: t.mid,
                throttleExpo: t.expo
            },
            e.rates = i
        }
        configureColliders(e) {
            let t = this.rapier.ActiveEvents.COLLISION_EVENTS | this.rapier.ActiveEvents.CONTACT_FORCE_EVENTS
              , i = 12 * e.quad.mass / .65;
            for (let s = 0; s < e.body.numColliders(); s++) {
                let n = e.body.collider(s);
                n.setEnabled(null === e.suspendedMotion),
                n.setActiveEvents(t),
                n.setContactForceEventThreshold(i),
                this.byCollider.set(n.handle, e)
            }
        }
        applyGroups(e) {
            let t = null !== e.race || !!this.lesson || "flying" !== e.mode;
            e.ghost = t;
            let i = t ? X.GHOST_GROUPS : X.PILOT_GROUPS;
            for (let t = 0; t < e.body.numColliders(); t++)
                e.body.collider(t).setCollisionGroups(i)
        }
        takeContactForensics() {
            let e = this.forensicLog.splice(0)
              , t = this.forensicsDropped;
            return this.forensicsDropped = 0,
            {
                entries: e,
                dropped: t
            }
        }
        census() {
            let e = 1 + this.pilots.length + this.gates.ownedBodies + +(null !== this.wallsBody)
              , t = this.staticColliderCount + 2 * this.pilots.length + this.gates.ownedParts + (null !== this.wallsBody ? P.WALL_COUNT : 0);
            this.moving && (e += this.moving.count,
            t += this.moving.count),
            this.drift && (e += this.drift.count,
            t += this.drift.colliderCount);
            let i = [];
            this.physics.forEachRigidBody(e => {
                i.length >= 5 || "unknown" !== this.kindOf(e) || i.push({
                    handle: e.handle,
                    type: e.bodyType(),
                    enabled: e.isEnabled(),
                    colliders: e.numColliders(),
                    at: eh(e.translation())
                })
            }
            );
            let s = this.pilots.filter(e => 2 !== e.body.numColliders()).map(e => ({
                pilot: e.id,
                colliders: e.body.numColliders()
            }));
            return {
                bodies: this.physics.bodies.len(),
                expectedBodies: e,
                colliders: this.physics.colliders.len(),
                expectedColliders: t,
                orphans: i,
                oddPilots: s
            }
        }
        kindOf(e) {
            if (!e)
                return "unknown";
            if (e.handle === this.staticBody || e.handle === this.wallsBody)
                return "static";
            if (this.byBody.has(e.handle))
                return "pilot";
            let t = e.userData;
            return t?.driftIndex !== void 0 ? "drift" : t?.raceGate ? "gate" : t && "chaseKind" in t ? "moving" : "unknown"
        }
        inspectHolds(e) {
            let t = [];
            for (let i = 0; i < e.body.numColliders(); i++) {
                let s = e.body.collider(i);
                this.physics.contactPairsWith(s, e => {
                    this.physics.contactPair(s, e, i => {
                        let n = i.numContacts();
                        if (0 === n)
                            return;
                        let r = 1 / 0;
                        for (let e = 0; e < n; e++)
                            r = Math.min(r, i.contactDist(e));
                        t.push({
                            mine: s,
                            theirs: e,
                            normal: i.normal(),
                            distance: r
                        })
                    }
                    )
                }
                )
            }
            for (let {mine: i, theirs: s, normal: n, distance: r} of t)
                this.inspect(e, i, s, "hold", null, n, r)
        }
        inspectImpacts() {
            for (let {pilot: e, mine: t, theirs: i, force: s, normal: n} of this.impacts.splice(0)) {
                let r = this.physics.getCollider(t)
                  , o = this.physics.getCollider(i);
                r && o && this.inspect(e, r, o, "impact", s, n, 0)
            }
        }
        inspect(e, t, i, s, n, r, o) {
            let a = `${e.id}\u0000${i.handle}\u0000${s}`
              , l = this.forensicSeen.get(a);
            if (void 0 !== l && this.tick - l < 60)
                return;
            let c = i.parent()
              , h = this.kindOf(c)
              , d = "gate" === h ? this.gates.ownerOf(i.handle) ?? null : "pilot" === h ? this.byCollider.get(i.handle)?.id ?? null : null
              , p = t.collisionGroups()
              , u = i.collisionGroups()
              , f = (p >>> 16 & u & 65535) != 0 && (u >>> 16 & p & 65535) != 0
              , m = i.isEnabled()
              , y = c ? c.isEnabled() : null
              , g = function(e, t) {
                let i = 1 / 0;
                if (!(ep.has(e.shape.type) || ep.has(t.shape.type)))
                    for (let[s,n] of [[e, t], [t, e]])
                        try {
                            let e = s.contactCollider(n, 1);
                            e && (i = Math.min(i, e.distance))
                        } catch {}
                if (Number.isFinite(i))
                    return ec(i);
                try {
                    let i = e.translation()
                      , s = t.projectPoint(i, !0);
                    if (!s)
                        return NaN;
                    let n = s.isInside ? 0 : Math.hypot(s.point.x - i.x, s.point.y - i.y, s.point.z - i.z)
                      , r = ed(e.shape).reduce( (e, t) => e + t * t, 0)
                      , o = n - Math.sqrt(r);
                    return o > 1 ? 1 / 0 : ec(o)
                } catch {
                    return NaN
                }
            }(t, i)
              , b = [];
            if ("unknown" === h && b.push("unknown"),
            "pilot" === h && d !== e.id && b.push("pilot"),
            "gate" === h && d !== e.id && b.push("foreign gate"),
            f || b.push("groups"),
            m && !1 !== y || b.push("disabled"),
            g - Math.max(0, o) > .25 && b.push("gap"),
            b.length) {
                if (this.forensicSeen.size > 1e3)
                    for (let[e,t] of this.forensicSeen)
                        this.tick - t >= 60 && this.forensicSeen.delete(e);
                if (this.forensicSeen.set(a, this.tick),
                this.forensicLog.length >= 32)
                    return void this.forensicsDropped++;
                this.forensicLog.push({
                    tick: this.tick,
                    worldSteps: this.worldSteps,
                    pilot: e.id,
                    mode: e.mode,
                    ghost: e.ghost,
                    position: eh(e.body.translation()),
                    velocity: eh(e.body.linvel()),
                    source: s,
                    kind: h,
                    owner: d,
                    handle: i.handle,
                    bodyHandle: c?.handle ?? null,
                    bodyType: c?.bodyType() ?? null,
                    enabled: m,
                    bodyEnabled: y,
                    groups: (p >>> 0).toString(16),
                    otherGroups: (u >>> 0).toString(16),
                    groupsPass: f,
                    shape: i.shape.type,
                    size: ed(i.shape),
                    at: eh(i.translation()),
                    gap: Number.isFinite(g) ? g : null,
                    manifoldGap: "hold" === s ? Math.round(1e3 * o) / 1e3 : null,
                    normal: r ? eh(r) : null,
                    force: null === n ? null : Math.round(100 * n) / 100,
                    reasons: b
                })
            }
        }
        driftNeighbours() {
            let e = this.neighbours;
            for (let t of (e.length = 0,
            this.pilots))
                eP(t) && !t.ghost && e.push(t.body.translation());
            return e
        }
        activitySample(e, t, i) {
            let s = e.playSample;
            return e.sticks[0] = e.input.throttle,
            e.sticks[1] = e.input.roll,
            e.sticks[2] = e.input.pitch,
            e.sticks[3] = e.input.yaw,
            s.respawn = e.respawns,
            s.armed = t,
            s.grounded = i,
            s
        }
        holdAtMarker(e, t) {
            let i = e.body
              , s = i.rotation()
              , n = (0,
            j.atan2)(2 * (s.w * s.y + s.x * s.z), 1 - 2 * (s.x * s.x + s.y * s.y));
            (0,
            q.placePilotBody)(i, {
                position: [t.x, t.y, t.z],
                yaw: n
            }),
            i.setGravityScale(0, !0),
            e.flight.hoverLock.engage([t.x, t.y, t.z]),
            e.markerHold = eb.open
        }
        holdWhereParked(e) {
            let t = e.body.translation()
              , i = e.body.rotation()
              , s = (0,
            j.atan2)(2 * (i.w * i.y + i.x * i.z), 1 - 2 * (i.x * i.x + i.y * i.y));
            this.teleport(e, {
                id: "finish",
                label: "Finish",
                position: [t.x, t.y, t.z],
                yaw: s,
                pad: !1
            }, !0, "race"),
            e.markerHold = eb.closed
        }
        closeMarker(e) {
            if (e.markerHold !== eb.open)
                return;
            e.markerHold = eb.closed;
            let t = e.flight.hoverLock;
            t.active && t.engage([t.position.x, t.position.y, t.position.z])
        }
        latchMarkers(e, t) {
            e.latched.clear();
            let i = (0,
            O.droneEntryRadius)(e.drone);
            for (let s of this.courses.values())
                (0,
                O.outsideRaceMarker)((0,
                O.markerForCourse)(s), t, i) || e.latched.add(s.id);
            for (let[s,n] of this.arenas)
                (0,
                O.outsideRaceMarker)((0,
                O.markerForCourse)(n), t, i) || e.latched.add(`arena:${s}`)
        }
        playMode(e) {
            return this.lesson ? "lesson" : e.race ? "race" : (0,
            k.isPersonalMapId)(this.world.mapId) ? "personal" : "free"
        }
        playActivity(e) {
            if (this.lesson)
                return "lesson";
            if (e.race)
                return "race";
            if (e.combatSetup)
                return "team_deathmatch";
            let t = e.combo.state.chaseSkill;
            return t ? "car" === t || "kart" === t ? "car_chase" : "coaster_chase" : (0,
            k.isPersonalMapId)(this.world.mapId) ? "player_map" : "free"
        }
        contain(e) {
            return (0,
            f.containSpawn)(e, this.world.bounds, this.floor)
        }
        respawnProbes(e) {
            let t = this.crowdFor(e)
              , i = this.prefabCrowd
              , s = this.time
              , n = t?.routes.length || i ? (e, n, r) => !!t && (0,
            F.crowdNear)(t.routes, s, e, n, r, 5) || !!i && i.near(s, e, n, r, 5) : void 0;
            return {
                boundsIndex: this.respawnBounds,
                excludesSurface: this.excludesSurface,
                crowded: n,
                groups: (0,
                X.queryGroups)(e.ghost),
                filter: e.ghost ? e.ownedGates : void 0
            }
        }
        emit(e, t) {
            this.replaying || this.outbox.push({
                ...t,
                pilot: e.id,
                tick: this.tick
            })
        }
        pilot(e) {
            for (let t of this.pilots)
                if (t.id === e)
                    return t
        }
        require(e) {
            let t = this.pilot(e);
            if (!t)
                throw Error(`no pilot ${e}`);
            return t
        }
    }
    , "physicsDigest", 0, ez, "rulesDigest", 0, eO, "sharedRoom", 0, eu, "stillRoom", 0, (e, t=!1) => "match" === e || t && "private" === e, "supportedIn", 0, eI], 577390);
    var eF = e.i(945999);
    let eN = 5 * n.TICK_RATE;
    n.BUTTON_ARM,
    n.BUTTON_INTERACT;
    let eU = e => "ticks" in e
      , eG = ["contact", "follow", "probe"];
    function eB(e, t, i) {
        let s = i.input;
        e.setInt16(t, (0,
        n.stickToWire)(s.throttle, !1)),
        e.setInt16(t + 2, (0,
        n.stickToWire)(s.roll, !0)),
        e.setInt16(t + 4, (0,
        n.stickToWire)(s.pitch, !0)),
        e.setInt16(t + 6, (0,
        n.stickToWire)(s.yaw, !0)),
        e.setUint8(t + 8, 255 & s.buttons),
        e.setUint32(t + 9, i.physics >>> 0),
        e.setUint32(t + 13, i.rules >>> 0),
        e.setUint8(t + 17, i.flags)
    }
    function eH(e) {
        let t = eT;
        for (; t > 0 && Object.is(e[t - 1], 0); )
            t--;
        return t
    }
    function eq(e, t, i, s) {
        for (let n = 0; n < s; n++,
        t += 8)
            e.setFloat64(t, i[n]);
        return t
    }
    let eX = 4 * Math.ceil(8 * eT / 3)
      , ej = e => eU(e) ? e.from : e.tick
      , eW = e => eU(e) ? e.from + e.ticks : e.tick + 1;
    n.TICK_RATE;
    let eY = a.z.number().int().min(0).max(0xffffffff)
      , eV = a.z.object({
        id: a.z.string().min(1).max(128),
        revision: a.z.number().int().min(0).max(1e6)
    }).strict()
      , eZ = a.z.object({
        t: a.z.literal("place"),
        tick: eY,
        worldSteps: eY,
        state: a.z.string().max(eX).regex(/^[A-Za-z0-9+/]*={0,2}$/),
        context: a.z.object({
            drone: a.z.enum(r.DRONE_IDS),
            normalDrone: a.z.enum(r.DRONE_IDS),
            course: eV.nullable(),
            crowd: eY.nullable(),
            raceGo: eY.nullable().optional()
        }).strict()
    }).strict()
      , eK = a.z.object({
        t: a.z.literal("echo"),
        id: eY,
        tick: eY
    }).strict();
    e.s(["CONTACT_FLAGS", 0, 3, "CONTACT_FRAME_TICKS", 0, 30, "DETACH_GRACE_MS", 0, 6e4, "ENTRY_REDUNDANCY", 0, 3, "FLIGHT_LOG_HISTORY", 0, 512, "FOLLOW_FRAME_TICKS", 0, 30, "VERIFY_BOUND", 0, eN, "applyGameplayEvent", 0, function(e, t, i) {
        switch (i.kind) {
        case "crowd":
            return e.changeCrowd(t, i.payload),
            !0;
        case "xp":
            return e.setPilotXp(t, i.payload.xp),
            !0;
        case "refusal":
            return e.refuseDrone(t, i.payload.refused, i.payload.drone),
            !0;
        case "combat":
            return "apply" === e.applyCombat(t, i.payload);
        case "race":
            return e.stageMatchRace(t, i.payload),
            !0;
        case "raceClosed":
            return e.closeMatchRace(t, i.payload.courseId),
            !0;
        case "raceRestage":
            return e.restageMatchRace(t, i.payload),
            !0
        }
    }
    , "blankEntry", 0, function() {
        return {
            tick: -1,
            input: (0,
            n.idleInput)(),
            physics: 0,
            rules: 0,
            flags: 0
        }
    }
    , "copyEntry", 0, function(e, t) {
        return t.tick = e.tick,
        (0,
        n.copyInput)(e.input, t.input),
        t.physics = e.physics,
        t.rules = e.rules,
        t.flags = e.flags,
        t
    }
    , "describeTick", 0, function(e, t, i, s) {
        return e.physics = ez(t),
        e.rules = eO(t),
        e.flags = !!i | 2 * !!eI(t) | 4 * !!s,
        e
    }
    , "echoSchema", 0, eK, "encodeEntries", 0, function(e) {
        let t = Math.min(e.length, 3)
          , i = new ArrayBuffer(6 + 18 * t)
          , s = new DataView(i);
        s.setUint8(0, 1),
        s.setUint32(1, e[e.length - 1].tick >>> 0),
        s.setUint8(5, t);
        for (let i = 0; i < t; i++)
            eB(s, 6 + 18 * i, e[e.length - t + i]);
        return i
    }
    , "encodeLog", 0, function(e, t=32768) {
        for (let t = 1; t < e.length; t++)
            if (ej(e[t]) !== eW(e[t - 1]))
                throw Error("log records must follow each other with no gap");
        let i = Math.min(t, 32768)
          , s = [];
        for (let t = 0; t < e.length; ) {
            let n = 7
              , r = t
              , o = 0;
            for (; r < e.length; r++) {
                let s = e[r]
                  , a = !eU(s) && (r === t || eU(e[r - 1]))
                  , l = eU(s) ? 5 : 3 * !!a + 18;
                if (r > t && n + l > i)
                    break;
                n += l,
                (eU(s) || a) && o++
            }
            let a = new ArrayBuffer(n)
              , l = new DataView(a);
            l.setUint8(0, 4),
            l.setUint32(1, ej(e[t]) >>> 0),
            l.setUint16(5, o);
            let c = 7
              , h = -1;
            for (let i = t; i < r; i++) {
                let t = e[i];
                if (eU(t)) {
                    l.setUint8(c, 1),
                    l.setUint32(c + 1, t.ticks >>> 0),
                    c += 5,
                    h = -1;
                    continue
                }
                h < 0 && (l.setUint8(c, 0),
                h = c + 1,
                l.setUint16(h, 0),
                c += 3),
                l.setUint16(h, l.getUint16(h) + 1),
                eB(l, c, t),
                c += 18
            }
            s.push(a),
            t = r
        }
        return s
    }
    , "encodeShot", 0, function(e) {
        let t = Math.min(e.views.length, eF.MAX_SHOT_VIEWS)
          , i = new ArrayBuffer(12 + 5 * t)
          , s = new DataView(i);
        s.setUint8(0, 6),
        s.setUint32(1, e.tick >>> 0),
        s.setUint32(5, e.snap >>> 0),
        s.setInt16(9, Math.max(-32768, Math.min(32767, e.play))),
        s.setUint8(11, t);
        for (let i = 0, n = 12; i < t; i++,
        n += 5) {
            let t = e.views[i];
            s.setUint8(n, t.seat),
            s.setUint16(n + 1, t.segment),
            s.setInt16(n + 3, Math.max(-32768, Math.min(32767, t.lag)))
        }
        return i
    }
    , "encodeState", 0, function(e, t, i) {
        let s = eH(i)
          , n = new ArrayBuffer(8 + 8 * s)
          , r = new DataView(n);
        return r.setUint8(0, 3),
        r.setUint8(1, eG.indexOf(e)),
        r.setUint32(2, t >>> 0),
        r.setUint16(6, s),
        eq(r, 8, i, s),
        n
    }
    , "isHold", 0, eU, "placeMessage", 0, function(e, t, i, s) {
        var n;
        return {
            t: "place",
            tick: e,
            worldSteps: t,
            state: function(e) {
                let t = eH(e)
                  , i = new Uint8Array(8 * t);
                eq(new DataView(i.buffer), 0, e, t);
                let s = "";
                for (let e = 0; e < i.length; e++)
                    s += String.fromCharCode(i[e]);
                return btoa(s)
            }(i),
            context: {
                drone: (n = s).drone,
                normalDrone: n.normalDrone,
                course: n.course ? {
                    id: n.course.id,
                    revision: n.courseRevision
                } : null,
                crowd: n.crowd?.version ?? null,
                raceGo: n.raceGo
            }
        }
    }
    , "placeSchema", 0, eZ], 26115);
    let e$ = e => e >= 0 ? 127 & e : -2 === e ? 254 : 255
      , eQ = e => 255 === e ? -1 : 254 === e ? -2 : e
      , eJ = (e, t) => 127 & e | 128 * !!t
      , e1 = e => Math.max(0, Math.min(65535, Math.round(100 * e)))
      , e0 = e => Math.max(-32767, Math.min(32767, Math.round(100 * e)))
      , e2 = Math.SQRT1_2;
    e.s(["BOLT_MISSED", 0, -2, "BOLT_OPEN", 0, -1, "decodeSnapshot", 0, function(e) {
        let t = e instanceof Uint8Array ? e : new Uint8Array(e);
        if (t.byteLength < 31 || 2 !== t[0] && 5 !== t[0])
            return null;
        let i = 5 === t[0]
          , s = i ? 31 : 28
          , n = new DataView(t.buffer,t.byteOffset,t.byteLength)
          , r = 29
          , o = n.getUint16(r)
          , a = (r += 2) + o * s;
        if (t.byteLength !== a && !(i && t.byteLength >= a + 2 && t.byteLength === a + 2 + 26 * t[a] + 6 * t[a + 1]))
            return null;
        let l = []
          , c = [0, 0, 0, 0];
        for (let e = 0; e < o; e++,
        r += s) {
            !function(e, t=[0, 0, 0, 0]) {
                let i = 3 & e
                  , s = 2
                  , n = 0;
                for (let r = 0; r < 4; r++) {
                    if (r === i)
                        continue;
                    let o = (e >>> s & 1023) / 1023 * 2 * e2 - e2;
                    t[r] = o,
                    n += o * o,
                    s += 10
                }
                t[i] = Math.sqrt(Math.max(0, 1 - n))
            }(n.getUint32(r + 14), c);
            let e = {
                slot: n.getUint16(r),
                x: n.getFloat32(r + 2),
                y: n.getFloat32(r + 6),
                z: n.getFloat32(r + 10),
                qx: c[0],
                qy: c[1],
                qz: c[2],
                qw: c[3],
                vx: n.getInt16(r + 18) / 100,
                vy: n.getInt16(r + 20) / 100,
                vz: n.getInt16(r + 22) / 100,
                drone: n.getUint8(r + 24),
                flags: n.getUint8(r + 25),
                throttle: n.getUint8(r + 26),
                age: n.getUint8(r + 27)
            };
            i && (e.segment = n.getUint16(r + 28),
            e.life = n.getUint8(r + 30)),
            l.push(e)
        }
        let h = n.getUint32(1)
          , d = {
            tick: h,
            worldSteps: n.getUint32(5),
            lead: n.getInt16(13),
            newest: n.getInt32(9),
            guessed: n.getUint8(15),
            ahead: n.getInt32(16),
            verified: n.getUint32(20),
            acked: n.getUint32(24),
            behind: 1 === n.getUint8(28),
            ...i ? {
                match: i
            } : {},
            others: l
        };
        if (t.byteLength === a)
            return d;
        let p = []
          , u = []
          , f = t[r]
          , m = t[r + 1];
        r += 2;
        for (let e = 0; e < f; e++,
        r += 26) {
            let e = n.getUint8(r)
              , t = n.getUint8(r + 23);
            p.push({
                seat: 127 & e,
                team: e >> 7,
                tick: h - n.getInt16(r + 1),
                origin: [n.getFloat32(r + 3), n.getFloat32(r + 7), n.getFloat32(r + 11)],
                dir: function(e, t) {
                    let i = e.getInt16(t) / 32767
                      , s = e.getInt16(t + 2) / 32767
                      , n = 1 - Math.abs(i) - Math.abs(s);
                    n < 0 && ([i,s] = [(1 - Math.abs(s)) * (i < 0 ? -1 : 1), (1 - Math.abs(i)) * (s < 0 ? -1 : 1)]);
                    let r = Math.hypot(i, s, n) || 1;
                    return [i / r, s / r, n / r]
                }(n, r + 15),
                speed: n.getUint16(r + 19) / 100,
                length: n.getUint16(r + 21) / 100,
                hit: eQ(t),
                stop: n.getUint16(r + 24) / 100
            })
        }
        for (let e = 0; e < m; e++,
        r += 6) {
            let e = n.getUint8(r);
            u.push({
                seat: 127 & e,
                team: e >> 7,
                tick: h - n.getInt16(r + 1),
                hit: eQ(n.getUint8(r + 3)),
                stop: n.getUint16(r + 4) / 100
            })
        }
        return d.bolts = p,
        d.hits = u,
        d
    }
    , "encodeSnapshot", 0, function(e) {
        let t = !!e.match
          , i = t ? 31 : 28
          , s = t ? (e.bolts ?? []).slice(0, 255) : []
          , n = t ? (e.hits ?? []).slice(0, 255) : []
          , r = s.length || n.length ? 2 + 26 * s.length + 6 * n.length : 0
          , o = new ArrayBuffer(31 + e.others.length * i + r)
          , a = new DataView(o);
        a.setUint8(0, t ? 5 : 2),
        a.setUint32(1, e.tick >>> 0),
        a.setUint32(5, e.worldSteps >>> 0),
        a.setInt32(9, Math.max(-1, e.newest)),
        a.setInt16(13, Math.max(-32768, Math.min(32767, Math.round(e.lead)))),
        a.setUint8(15, Math.max(0, Math.min(255, e.guessed))),
        a.setInt32(16, Math.max(-1, e.ahead)),
        a.setUint32(20, e.verified >>> 0),
        a.setUint32(24, e.acked >>> 0),
        a.setUint8(28, +!!e.behind);
        let l = 29;
        for (let s of (a.setUint16(l, e.others.length),
        l += 2,
        e.others))
            a.setUint16(l, s.slot),
            a.setFloat32(l + 2, s.x),
            a.setFloat32(l + 6, s.y),
            a.setFloat32(l + 10, s.z),
            a.setUint32(l + 14, function(e, t, i, s) {
                let n = [e, t, i, s]
                  , r = 0;
                for (let e = 1; e < 4; e++)
                    Math.abs(n[e]) > Math.abs(n[r]) && (r = e);
                let o = n[r] < 0 ? -1 : 1
                  , a = r
                  , l = 2;
                for (let e = 0; e < 4; e++)
                    e !== r && (a |= Math.round((Math.max(-e2, Math.min(e2, n[e] * o)) + e2) / (2 * e2) * 1023) << l,
                    l += 10);
                return a >>> 0
            }(s.qx, s.qy, s.qz, s.qw)),
            a.setInt16(l + 18, e0(s.vx)),
            a.setInt16(l + 20, e0(s.vy)),
            a.setInt16(l + 22, e0(s.vz)),
            a.setUint8(l + 24, s.drone),
            a.setUint8(l + 25, s.flags),
            a.setUint8(l + 26, s.throttle),
            a.setUint8(l + 27, Math.max(0, Math.min(255, s.age))),
            t && (a.setUint16(l + 28, (s.segment ?? 0) & 65535),
            a.setUint8(l + 30, (s.life ?? 0) & 255)),
            l += i;
        if (!r)
            return o;
        a.setUint8(l, s.length),
        a.setUint8(l + 1, n.length),
        l += 2;
        let c = t => Math.max(-32768, Math.min(32767, e.tick - t));
        for (let e of s)
            a.setUint8(l, eJ(e.seat, e.team)),
            a.setInt16(l + 1, c(e.tick)),
            a.setFloat32(l + 3, e.origin[0]),
            a.setFloat32(l + 7, e.origin[1]),
            a.setFloat32(l + 11, e.origin[2]),
            function(e, t, i) {
                let s = Math.abs(e[0]) + Math.abs(e[1]) + Math.abs(e[2]) || 1
                  , n = e[0] / s
                  , r = e[1] / s;
                e[2] < 0 && ([n,r] = [(1 - Math.abs(r)) * (n < 0 ? -1 : 1), (1 - Math.abs(n)) * (r < 0 ? -1 : 1)]),
                t.setInt16(i, Math.round(32767 * n)),
                t.setInt16(i + 2, Math.round(32767 * r))
            }(e.dir, a, l + 15),
            a.setUint16(l + 19, e1(e.speed)),
            a.setUint16(l + 21, e1(e.length)),
            a.setUint8(l + 23, e$(e.hit)),
            a.setUint16(l + 24, e1(e.hit >= 0 ? e.stop : e.length)),
            l += 26;
        for (let e of n)
            a.setUint8(l, eJ(e.seat, e.team)),
            a.setInt16(l + 1, c(e.tick)),
            a.setUint8(l + 3, e$(e.hit)),
            a.setUint16(l + 4, e1(e.stop)),
            l += 6;
        return o
    }
    ], 248449);
    var e5 = e.i(635525);
    function e3(e) {
        return void 0 !== e.seat && null !== (0,
        t.knockedOut)(e.seat, e.shown?.pose.life ?? e.frames.at(-1)?.life)
    }
    let e4 = [0, 0, 0]
      , e6 = (0,
    e5.emptyPose)();
    function e7(e) {
        let t = Math.max(0, Math.min(1, e));
        return t * t * (3 - 2 * t)
    }
    e.s(["BOLT_FADE_MS", 0, 90, "BOLT_STREAK", 0, 24, "MAX_SHOWN_BOLTS", 0, 96, "ShownBolts", 0, class {
        list = [];
        add(e, t) {
            let i = `${e.seat}:${e.tick}`;
            !this.list.some(e => e.key === i) && (this.list.push({
                key: i,
                seat: e.seat,
                team: e.team,
                tick: e.tick,
                origin: [...e.origin],
                dir: [...e.dir],
                speed: e.speed,
                length: e.length,
                hit: e.hit >= 0 ? e.hit : null,
                stop: e.hit >= 0 ? Math.min(e.length, e.stop) : e.length,
                predicted: !1,
                decided: e.hit >= 0 || -2 === e.hit,
                drawn: -1,
                at: t,
                leave: null,
                late: 0,
                heard: !1,
                done: !1
            }),
            this.list.length > 96 && this.list.splice(0, this.list.length - 96))
        }
        hit(e) {
            let t = this.list.find(t => t.key === `${e.seat}:${e.tick}`);
            if (t) {
                if (e.hit < 0) {
                    if (-2 !== e.hit || t.decided && null !== t.hit)
                        return;
                    t.hit = null,
                    t.stop = t.length
                } else {
                    let i = Math.min(t.length, e.stop);
                    if (t.decided && null !== t.hit && !(i < t.stop))
                        return;
                    t.predicted && t.hit === e.hit || (t.hit = e.hit,
                    t.stop = i)
                }
                t.predicted = !1,
                t.decided = !0
            }
        }
        prune(e) {
            for (let t = this.list.length - 1; t >= 0; t--)
                (this.list[t].done || e - this.list[t].at > 3e3) && this.list.splice(t, 1)
        }
    }
    , "boltCore", 0, function(e) {
        let t = Number.parseInt(e.slice(1, 7), 16);
        if (!/^#[0-9a-f]{6}/i.test(e) || !Number.isFinite(t))
            return e;
        let i = e => Math.round((t >> e & 255) * .7 + 76.5);
        return `#${(i(16) << 16 | i(8) << 8 | i(0)).toString(16).padStart(6, "0")}`
    }
    , "boltPoint", 0, function(e, t, i, s) {
        let n = e.leave
          , r = 1 - e7(i / 12)
          , o = Math.min(15, e.stop / 2)
          , a = o > 0 ? e7((i - (e.stop - o)) / o) : 1;
        for (let o = 0; o < 3; o++)
            s[o] = e.origin[o] + e.dir[o] * i + (n ? n[o] * r : 0) + t.bend[o] * a;
        return s
    }
    , "boltShots", 0, function(e) {
        let t = [];
        for (let i of e)
            !i.heard && i.leave && (i.heard = !0,
            1e3 * i.late > 250 || t.push([i.origin[0] + i.leave[0], i.origin[1] + i.leave[1], i.origin[2] + i.leave[2]]));
        return t
    }
    , "drawBolt", 0, function(e, t, a, l, c) {
        let h;
        if (e.done)
            return !1;
        let d = t.peers.find(t => t.seat === e.seat && null === t.leavingAt)
          , p = d?.shown && d.shown.at === a && d.shown.pose.t === d.shown.time ? d.shown : null;
        if (p)
            h = p.time;
        else {
            let e = (0,
            e5.playbackTime)(t, a);
            h = e + (t.ahead ? t.ahead(a, e) : 0)
        }
        let u = (h - 1e3 * e.tick / n.TICK_RATE) / 1e3;
        if (!(u >= 0))
            return !1;
        if (!e.leave) {
            if (d && e3(d) && !(e.decided && null !== e.hit))
                return e.done = e.heard = !0,
                !1;
            if (e.leave = [0, 0, 0],
            e.late = u,
            p) {
                let t = p.pose
                  , s = o.DRONE_PROFILES[t.droneId ?? r.DEFAULT_DRONE]?.camera ?? [0, 0, 0];
                (0,
                i.rotate)(t.q, s, e4);
                for (let i = 0; i < 3; i++)
                    e.leave[i] = t.p[i] + e4[i] - e.origin[i]
            }
        }
        let f = e.speed * u
          , m = 90 * e.speed / 1e3;
        if (null !== e.hit || e.decided || function(e, t, a, l, c, h, d) {
            if (!(d > h))
                return;
            let p = 1 / 0
              , u = -1
              , f = (t, i, n) => {
                let r = t[0] - e.origin[0]
                  , o = t[1] - e.origin[1]
                  , a = t[2] - e.origin[2]
                  , l = r * e.dir[0] + o * e.dir[1] + a * e.dir[2]
                  , c = Math.max(0, r * r + o * o + a * a - l * l)
                  , f = (0,
                s.boltRadius)(s.STANDARD_GUN, Math.max(0, l)) + i;
                if (c > f * f)
                    return;
                let m = Math.sqrt(f * f - c)
                  , y = Math.max(h, l - m);
                y <= d && y <= l + m && y < p && (p = y,
                u = n)
            }
              , m = 1e3 * e.tick / n.TICK_RATE;
            for (let s of t.peers) {
                if (void 0 === s.seat || s.seat === e.seat || void 0 === s.team || s.team === e.team || null !== s.leavingAt || l - s.receivedAt >= e5.STALE_MS || e3(s))
                    continue;
                let t = s.shown
                  , n = t?.pose;
                if (!t || !n || n.t !== t.time)
                    continue;
                let a = (n.p[0] - e.origin[0]) * e.dir[0] + (n.p[1] - e.origin[1]) * e.dir[1] + (n.p[2] - e.origin[2]) * e.dir[2]
                  , h = t.time + m + Math.max(0, a) / e.speed * 1e3 - c;
                f((0,
                e5.displayPose)(s, h, e6) ? e6.p : n.p, (0,
                i.boundingRadius)(o.DRONE_PROFILES[n.droneId ?? r.DEFAULT_DRONE]?.halfExtents ?? o.DRONE_PROFILES[r.DEFAULT_DRONE].halfExtents), s.seat)
            }
            null !== a.seat && a.position && !a.down && void 0 !== a.team && null !== a.team && a.team !== e.team && f(a.position, a.bound ?? (0,
            i.boundingRadius)(o.DRONE_PROFILES[r.DEFAULT_DRONE].halfExtents), a.seat),
            u < 0 || (e.hit = u,
            e.stop = p,
            e.predicted = !0)
        }(e, t, l, a, h, Math.max(0, e.drawn), Math.min(f, e.length)),
        e.drawn = Math.min(f, e.stop),
        e.stop <= 0 || f > e.stop + m)
            return e.done = !0,
            !1;
        if (c.head = Math.min(e.stop, f),
        c.tail = Math.min(c.head, Math.max(0, f - 24)),
        c.alpha = f > e.stop ? 1 - (f - e.stop) / m : 1,
        c.bend[0] = c.bend[1] = c.bend[2] = 0,
        null !== e.hit) {
            let i = e.hit === l.seat ? null : t.peers.find(t => t.seat === e.hit && null === t.leavingAt) ?? null
              , s = e.hit === l.seat ? l.down ? null : l.position : i && !e3(i) ? i.shown?.pose.p ?? null : null;
            if (s) {
                for (let t = 0; t < 3; t++)
                    c.bend[t] = s[t] - (e.origin[t] + e.dir[t] * e.stop);
                Math.hypot(c.bend[0], c.bend[1], c.bend[2]) > 20 && (c.bend[0] = c.bend[1] = c.bend[2] = 0)
            }
        }
        return !0
    }
    , "emptyBoltFrame", 0, () => ({
        tail: 0,
        head: 0,
        alpha: 0,
        bend: [0, 0, 0]
    })], 306871)
}
, 916274, e => {
    "use strict";
    var t = e.i(190072)
      , i = e.i(504786)
      , s = e.i(723601);
    let n = new Map;
    e.s(["createRespawnTrackExclusion", 0, function(e) {
        let r = (0,
        i.trackInstances)(e).map( ({matrix: e, circuit: t}) => ({
            inverse: e.clone().invert(),
            track: t.track,
            points: function(e) {
                let t = n.get(e.id);
                if (!t) {
                    let i = Math.ceil(e.length / .4);
                    t = Array.from({
                        length: i + 1
                    }, (t, n) => e.sample(n / i * e.length, (0,
                    s.createTrackSample)())),
                    n.set(e.id, t)
                }
                return t
            }(t.track)
        }))
          , o = new t.Vector3;
        return (e, t, i, s) => {
            for (let {inverse: n, track: a, points: l} of r) {
                if (o.set(e, t, i).applyMatrix4(n),
                Math.abs(o.y) > .15)
                    continue;
                let r = a.width / 2 + a.curbWidth + Math.SQRT2 * s * n.getMaxScaleOnAxis() + .02;
                for (let e = 0; e < l.length - 1; e++) {
                    let t = l[e]
                      , i = l[e + 1]
                      , s = i.x - t.x
                      , n = i.z - t.z
                      , a = Math.max(0, Math.min(1, ((o.x - t.x) * s + (o.z - t.z) * n) / (s * s + n * n)))
                      , c = o.x - t.x - a * s
                      , h = o.z - t.z - a * n;
                    if (c * c + h * h <= r * r)
                        return !0
                }
            }
            return !1
        }
    }
    ])
}
, 602893, e => {
    "use strict";
    var t = e.i(475127)
      , i = e.i(483359);
    let s = (e, i) => (0,
    t.atan2)(-e, -i);
    e.s(["gateResetPose", 0, function(e, t) {
        let n = e.gates[t]
          , r = e.gates[t + 1]
          , [o,a,l] = n.position
          , c = e.spawn.yaw
          , h = r ? r.position[0] - o : 0
          , d = r ? r.position[2] - l : 0;
        if (h * h + d * d > .25)
            c = s(h, d);
        else {
            let {normal: e} = (0,
            i.gateBasis)(n);
            e[0] * e[0] + e[2] * e[2] > .01 && (c = s(-e[0], -e[2]))
        }
        return {
            id: `${n.id}:reset`,
            label: "",
            position: [o, a, l],
            yaw: c,
            pad: !1
        }
    }
    ])
}
]);
