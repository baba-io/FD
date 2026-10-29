(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 391810, 985249, 736659, e => {
    "use strict";
    e.s(["COVER_STRENGTH", () => L, "ContactField", () => q, "applyContactShading", () => eo, "contactKey", () => H, "contactShape", () => B, "coverShare", () => E, "sceneCover", () => z, "setSceneCover", () => G, "writeContact", () => ei], 391810),
    e.s(["INDOOR_LIGHT_FRAGMENT", () => F, "IndoorLight", () => D, "copyIndoorLight", () => S, "indoorLightApply", () => k, "sceneIndoorLight", () => v, "unbakedIndoorLight", () => w], 736659);
    var t = e.i(190072)
      , i = e.i(879774);
    let r = Array.from({
        length: 8
    }, (e, t) => [Math.cos(t * Math.PI / 4), Math.sin(t * Math.PI / 4)])
      , n = new t.Vector3;
    function o(e, [i,r]) {
        let a = new t.Vector3(1 / 0,1 / 0,1 / 0)
          , l = new t.Vector3(-1 / 0,-1 / 0,-1 / 0);
        for (let t = 0; t < 8; t++)
            n.set(1 & t ? r.x : i.x, 2 & t ? r.y : i.y, 4 & t ? r.z : i.z).applyMatrix4(e),
            a.min(n),
            l.max(n);
        return {
            min: a,
            max: l
        }
    }
    let a = [new t.Vector3(-.5,-.5,-.5), new t.Vector3(.5,.5,.5)]
      , l = new Float64Array(16)
      , s = new t.Matrix4;
    function f({matrix: e, shape: i}, r) {
        let[n,o] = "box" === i.kind ? a : function(e) {
            if ("box" === e.kind)
                return [new t.Vector3(-.5,-.5,-.5), new t.Vector3(.5,.5,.5)];
            if ("ring" === e.kind)
                return [new t.Vector3(-e.outer,e.bottom,-e.outer), new t.Vector3(e.outer,e.top,e.outer)];
            let i = new t.Vector3(1 / 0,1 / 0,-e.depth / 2)
              , r = new t.Vector3(-1 / 0,-1 / 0,e.depth / 2);
            for (let[t,n] of e.points)
                i.x = Math.min(i.x, t),
                i.y = Math.min(i.y, n),
                r.x = Math.max(r.x, t),
                r.y = Math.max(r.y, n);
            return [i, r]
        }(i)
          , l = e.elements
          , s = (n.x + o.x) / 2
          , c = (n.y + o.y) / 2
          , u = (n.z + o.z) / 2
          , h = (o.x - n.x) / 2
          , d = (o.y - n.y) / 2
          , m = (o.z - n.z) / 2;
        return r[0] = l[0] * s + l[4] * c + l[8] * u + l[12],
        r[1] = l[1] * s + l[5] * c + l[9] * u + l[13],
        r[2] = l[2] * s + l[6] * c + l[10] * u + l[14],
        r[3] = Math.abs(l[0]) * h + Math.abs(l[4]) * d + Math.abs(l[8]) * m,
        r[4] = Math.abs(l[1]) * h + Math.abs(l[5]) * d + Math.abs(l[9]) * m,
        r[5] = Math.abs(l[2]) * h + Math.abs(l[6]) * d + Math.abs(l[10]) * m,
        r
    }
    let c = [0, 0, 0, 0, 0, 0];
    function u(e, t, i, r, n) {
        n[0] = e[0] * t + e[4] * i + e[8] * r + e[12],
        n[1] = e[1] * t + e[5] * i + e[9] * r + e[13],
        n[2] = e[2] * t + e[6] * i + e[10] * r + e[14]
    }
    let h = [0, 0, 0]
      , d = [0, 0, 0]
      , m = [0, 0, 0]
      , p = [0, 0];
    function g(e, t, i, r, n) {
        let o = r
          , a = n
          , l = e.shape;
        if ("box" === l.kind || "prism" === l.kind) {
            for (let e = 2 * ("box" !== l.kind); e < 3; e++) {
                let r = ("box" === l.kind ? .5 : l.depth / 2) - 1e-4
                  , n = t[e]
                  , s = i[e];
                if (1e-12 > Math.abs(s)) {
                    if (n <= -r || n >= r)
                        return null;
                    continue
                }
                let f = (-r - n) / s
                  , c = (r - n) / s;
                if (f > c) {
                    let e = f;
                    f = c,
                    c = e
                }
                if (f > o && (o = f),
                c < a && (a = c),
                o >= a)
                    return null
            }
            if ("box" === l.kind)
                return p[0] = o,
                p[1] = a,
                p;
            for (let r of e.edges) {
                let e = r.dx * (t[1] - r.ay) - r.dy * (t[0] - r.ax)
                  , n = r.dx * i[1] - r.dy * i[0];
                if (1e-12 > Math.abs(n)) {
                    if (e <= 1e-4)
                        return null;
                    continue
                }
                let l = (1e-4 - e) / n;
                if (n > 0 ? o = Math.max(o, l) : a = Math.min(a, l),
                o >= a)
                    return null
            }
            return p[0] = o,
            p[1] = a,
            p
        }
        let s = 1 / 0
          , f = -1 / 0
          , c = l.inner * l.inner
          , u = l.outer * l.outer;
        for (let e = 0; e <= 8; e++) {
            let o = r + (n - r) * e / 8
              , a = t[0] + i[0] * o
              , h = t[1] + i[1] * o
              , d = t[2] + i[2] * o
              , m = a * a + d * d;
            h > l.bottom + 1e-4 && h < l.top - 1e-4 && m > c && m < u && (o < s && (s = o),
            f = o)
        }
        return s > f ? null : (p[0] = s,
        p[1] = f,
        p)
    }
    function x(e, t, i, r, n, o, a) {
        if (e.aligned) {
            let l = 0
              , s = 1
              , f = [t, i, r]
              , c = [n, o, a]
              , u = [e.min.x, e.min.y, e.min.z]
              , h = [e.max.x, e.max.y, e.max.z];
            for (let e = 0; e < 3; e++) {
                let t = f[e]
                  , i = c[e] - t
                  , r = u[e] + 1e-4
                  , n = h[e] - 1e-4;
                if (1e-12 > Math.abs(i)) {
                    if (t <= r || t >= n)
                        return !1;
                    continue
                }
                let o = (r - t) / i
                  , a = (n - t) / i;
                if (o > a) {
                    let e = o;
                    o = a,
                    a = e
                }
                if (o > l && (l = o),
                a < s && (s = a),
                l >= s)
                    return !1
            }
            return !0
        }
        return e.plan ? function(e, t, i, r, n, o, a) {
            let l = 0
              , s = 1
              , f = e.min.y + 1e-4
              , c = e.max.y - 1e-4
              , u = o - i;
            if (1e-12 > Math.abs(u)) {
                if (i <= f || i >= c)
                    return !1
            } else {
                let e = (f - i) / u
                  , t = (c - i) / u;
                if (e > t) {
                    let i = e;
                    e = t,
                    t = i
                }
                if (e > l && (l = e),
                t < s && (s = t),
                l >= s)
                    return !1
            }
            let h = n - t
              , d = a - r;
            for (let i of e.plan) {
                let e = i.dx * (r - i.az) - i.dz * (t - i.ax)
                  , n = i.dx * d - i.dz * h;
                if (1e-12 > Math.abs(n)) {
                    if (e <= 1e-4)
                        return !1;
                    continue
                }
                let o = (1e-4 - e) / n;
                if (n > 0 ? o > l && (l = o) : o < s && (s = o),
                l >= s)
                    return !1
            }
            return !0
        }(e, t, i, r, n, o, a) : (u(e.inverse, t, i, r, h),
        u(e.inverse, n, o, a, d),
        m[0] = d[0] - h[0],
        m[1] = d[1] - h[1],
        m[2] = d[2] - h[2],
        null !== g(e, h, m, 0, 1))
    }
    function v(e) {
        return e.userData.indoorLight
    }
    function y(e, t) {
        e.userData.indoorLight = t
    }
    e.s(["HIGH_COVER", 0, 9, "HIGH_COVER_RAYS", 0, 6, "HIGH_COVER_REACH", 0, 40, "INDOOR_SPREAD", 0, 5, "SKY", 0, 8, "indoorVolume", 0, function(e, i, {ground: n=0, limits: a, maxSize: d=1 / 0}={}) {
        let p = i.filter(e => e.intensity > 0 && Math.abs(e.matrix.determinant()) > 1e-12);
        if (!p.length)
            return null;
        let v = [new t.Vector3(-.5,-.5,-.5), new t.Vector3(.5,.5,.5)]
          , y = new t.Vector3(1 / 0,1 / 0,1 / 0)
          , M = new t.Vector3(-1 / 0,-1 / 0,-1 / 0);
        for (let e of p) {
            let {min: t, max: i} = o(e.matrix, v);
            y.min(t),
            M.max(i)
        }
        for (let t of (y.x -= 6,
        y.z -= 6,
        M.x += 6,
        M.z += 6,
        M.y += 2,
        y.y = n,
        e)) {
            let[e,i,r,o,a,l] = f(t, c);
            "ring" === t.shape.kind || i - a < n + 2 || 3 > Math.max(o, l) || .5 > Math.min(o, l) || (y.x = Math.min(y.x, e - o - 2),
            y.z = Math.min(y.z, r - l - 2),
            M.x = Math.max(M.x, e + o + 2),
            M.z = Math.max(M.z, r + l + 2))
        }
        if (a && (y.x = Math.max(y.x, a.minX),
        y.z = Math.max(y.z, a.minZ),
        M.x = Math.min(M.x, a.maxX),
        M.z = Math.min(M.z, a.maxZ)),
        M.x <= y.x || M.z <= y.z || M.y <= y.y)
            return null;
        let w = 1
          , b = e => [Math.max(1, Math.ceil((M.x - y.x) / e)), Math.max(1, Math.ceil((M.y - y.y) / e)), Math.max(1, Math.ceil((M.z - y.z) / e))]
          , S = b(1);
        for (; S[0] * S[1] * S[2] > 1048576 || Math.max(...S) > d; )
            S = b(w *= 1.1);
        let[F,k,T] = S
          , A = y.x
          , C = y.y
          , $ = y.z
          , D = {
            origin: [A, C, $],
            cell: w,
            dims: S,
            links: new Uint8Array(F * k * T),
            emission: new Float32Array(F * k * T * 3)
        }
          , L = D.links;
        L.fill(7);
        for (let e = 0; e < k; e++)
            for (let t = 0; t < T; t++)
                L[F - 1 + F * (t + T * e)] &= -2;
        for (let e = 0; e < k; e++)
            for (let t = 0; t < F; t++)
                L[t + F * (T - 1 + T * e)] &= -5;
        for (let e = F * T * (k - 1); e < L.length; e++)
            L[e] &= -3;
        let z = (e, t, i, r) => [Math.max(0, Math.ceil((e - i) / w - .5)), Math.min(r - 1, Math.floor((t - i) / w - .5))]
          , G = (e, t, i, r) => [Math.max(0, Math.ceil((e - w - i) / w - .5)), Math.min(r - 2, Math.floor((t - i) / w - .5))]
          , E = {
            minX: A,
            maxX: A + F * w,
            minZ: $,
            maxZ: $ + T * w,
            small: w / 4
        }
          , _ = e.map(e => (function(e, i) {
            let r, n, {matrix: o, shape: a} = e, u = o.elements, [h,d,m,p,g,x] = f(e, c);
            if (h + p <= i.minX || h - p >= i.maxX || m + x <= i.minZ || m - x >= i.maxZ)
                return null;
            let v = i.small;
            if (+(p < v) + +(g < v) + +(x < v) >= 2 || 1e-12 > Math.abs(o.determinant()))
                return null;
            let y = new t.Vector3(h - p,d - g,m - x)
              , M = new t.Vector3(h + p,d + g,m + x)
              , w = "box" === a.kind;
            for (let e = 0; w && e < 3; e++)
                1 != +(Math.abs(u[4 * e]) > 1e-9) + +(Math.abs(u[4 * e + 1]) > 1e-9) + +(Math.abs(u[4 * e + 2]) > 1e-9) && (w = !1);
            let b = w ? l : Float64Array.from(s.copy(o).invert().elements);
            if ("prism" === a.kind) {
                let e = a.points
                  , t = 0;
                for (let i = 0; i < e.length; i++) {
                    let[r,n] = e[i]
                      , [o,a] = e[(i + 1) % e.length];
                    t += r * a - o * n
                }
                let i = t < 0 ? [...e].reverse() : e;
                r = i.map( ([e,t], r) => {
                    let[n,o] = i[(r + 1) % i.length];
                    return {
                        ax: e,
                        ay: t,
                        dx: n - e,
                        dy: o - t
                    }
                }
                )
            }
            if ("prism" === a.kind && 1e-9 > Math.abs(u[1]) && 1e-9 > Math.abs(u[5]) && 1e-9 > Math.abs(u[8]) && 1e-9 > Math.abs(u[10])) {
                let e = a.points.map( ([e,t]) => [u[0] * e + u[4] * t + u[12], u[2] * e + u[6] * t + u[14]])
                  , t = 0;
                for (let i = 0; i < e.length; i++) {
                    let[r,n] = e[i]
                      , [o,a] = e[(i + 1) % e.length];
                    t += r * a - o * n
                }
                let i = t < 0 ? e.reverse() : e;
                n = i.map( ([e,t], r) => {
                    let[n,o] = i[(r + 1) % i.length];
                    return {
                        ax: e,
                        az: t,
                        dx: n - e,
                        dz: o - t
                    }
                }
                )
            }
            return {
                min: y,
                max: M,
                inverse: b,
                shape: a,
                aligned: w,
                edges: r,
                plan: n
            }
        }
        )(e, E)).filter(e => null !== e)
          , R = new Float32Array(F * T).fill(-1 / 0)
          , P = new Float32Array(F * T).fill(1 / 0);
        for (let e of _) {
            if (e.max.y <= C)
                continue;
            let[t,i] = z(e.min.x + 1e-4, e.max.x - 1e-4, A, F)
              , [r,n] = z(e.min.z + 1e-4, e.max.z - 1e-4, $, T);
            for (let o = r; o <= n; o++)
                for (let r = t; r <= i; r++) {
                    let t = e.aligned ? e.max.y : function(e, t, i) {
                        if (e.plan) {
                            for (let r of e.plan)
                                if (r.dx * (i - r.az) - r.dz * (t - r.ax) <= 1e-4)
                                    return -1 / 0;
                            return e.max.y
                        }
                        u(e.inverse, t, 0, i, h);
                        let r = e.inverse;
                        m[0] = r[4],
                        m[1] = r[5],
                        m[2] = r[6];
                        let n = g(e, h, m, e.min.y - 1, e.max.y + 1);
                        return n ? n[1] : -1 / 0
                    }(e, A + (r + .5) * w, $ + (o + .5) * w);
                    t !== -1 / 0 && (t > R[r + F * o] && (R[r + F * o] = t),
                    e.min.y < P[r + F * o] && (P[r + F * o] = e.min.y))
                }
            if (e.min.y >= C + k * w)
                continue;
            let[o,a] = z(e.min.y + 1e-4, e.max.y - 1e-4, C, k);
            for (let[l,s] of [[1, 0], [2, 1], [4, 2]]) {
                let[f,c] = 0 === s ? G(e.min.x + 1e-4, e.max.x - 1e-4, A, F) : [t, i]
                  , [u,h] = 1 === s ? G(e.min.y + 1e-4, e.max.y - 1e-4, C, k) : [o, a]
                  , [d,m] = 2 === s ? G(e.min.z + 1e-4, e.max.z - 1e-4, $, T) : [r, n];
                for (let t = u; t <= h; t++)
                    for (let i = d; i <= m; i++)
                        for (let r = f; r <= c; r++) {
                            let n = r + F * (i + T * t);
                            if (L[n] & l) {
                                if (!e.aligned) {
                                    let n = A + (r + .5) * w
                                      , o = C + (t + .5) * w
                                      , a = $ + (i + .5) * w;
                                    if (!x(e, n, o, a, n + (0 === s ? w : 0), o + (1 === s ? w : 0), a + (2 === s ? w : 0)))
                                        continue
                                }
                                L[n] &= ~l
                            }
                        }
            }
        }
        for (let e = 0; e < T; e++)
            for (let t = 0; t < F; t++) {
                let i = R[t + F * e];
                for (let r = Math.max(0, Math.floor((i - C) / w + .5)); r < k; r++)
                    C + (r + .5) * w > i && (L[t + F * (e + T * r)] |= 8);
                let n = i === -1 / 0 ? -1 / 0 : P[t + F * e] - 9;
                for (let i = 0, o = C + .5 * w; o <= n && i < k; i++,
                o += w)
                    (function(e, t, i, n, o, a, l, s) {
                        let f = 0
                          , c = 0;
                        for (let[u,h] of r) {
                            let d = !1;
                            for (let r = o; r <= 40; r += o) {
                                let f = Math.floor(a + .5 + u * r / o)
                                  , c = Math.floor(l + .5 + h * r / o);
                                if (f < 0 || c < 0 || f >= i || c >= n)
                                    break;
                                let m = f + i * c
                                  , p = s + r;
                                if (t[m] <= p && p <= e[m]) {
                                    d = !0;
                                    break
                                }
                            }
                            if (!d && ++f >= 6)
                                return !0;
                            if (d && ++c > r.length - 6)
                                break
                        }
                        return !1
                    }
                    )(R, P, F, T, w, t, e, o) && (L[t + F * (e + T * i)] |= 8)
            }
        let I = new Map;
        _.forEach( (e, t) => {
            for (let i = Math.floor(e.min.x / 8); i <= Math.floor(e.max.x / 8); i++)
                for (let r = Math.floor(e.min.z / 8); r <= Math.floor(e.max.z / 8); r++) {
                    let e = 65536 * i + r
                      , n = I.get(e);
                    n ? n.push(t) : I.set(e, [t])
                }
        }
        );
        let B = []
          , U = new Set
          , O = (e, t, i, r, n, o) => {
            for (let a of B)
                if (!(a.max.x < Math.min(e, r) || a.min.x > Math.max(e, r) || a.max.y < Math.min(t, n) || a.min.y > Math.max(t, n) || a.max.z < Math.min(i, o) || a.min.z > Math.max(i, o)) && x(a, e, t, i, r, n, o))
                    return !1;
            return !0
        }
          , V = new t.Vector3
          , N = new t.Matrix4
          , j = new t.Vector3;
        for (let e of p) {
            let {min: t, max: i} = o(e.matrix, v)
              , r = e.matrix.elements
              , n = Math.hypot(r[0], r[1], r[2])
              , a = Math.hypot(r[4], r[5], r[6])
              , l = Math.hypot(r[8], r[9], r[10])
              , [,s,f] = [n, a, l].sort( (e, t) => e - t)
              , c = e.fill ? n * l : s * f
              , u = e.fill ? -1e-4 : +w
              , [h,d] = z(t.x - u, i.x + u, A, F)
              , [m,p] = z(t.y - u, i.y + u, C, k)
              , [g,x] = z(t.z - u, i.z + u, $, T);
            if (V.setFromMatrixPosition(e.matrix),
            N.copy(e.matrix).invert(),
            B.length = 0,
            U.clear(),
            !e.fill)
                for (let e = Math.floor((t.x - u) / 8); e <= Math.floor((i.x + u) / 8); e++)
                    for (let r = Math.floor((t.z - u) / 8); r <= Math.floor((i.z + u) / 8); r++)
                        for (let n of I.get(65536 * e + r) ?? []) {
                            let e = _[n];
                            U.has(n) || e.max.x < t.x - u || e.min.x > i.x + u || e.max.y < t.y - u || e.min.y > i.y + u || e.max.z < t.z - u || e.min.z > i.z + u || (U.add(n),
                            B.push(e))
                        }
            let y = [];
            for (let t = m; t <= p; t++)
                for (let i = g; i <= x; i++)
                    for (let r = h; r <= d; r++) {
                        let n = A + (r + .5) * w
                          , o = C + (t + .5) * w
                          , a = $ + (i + .5) * w;
                        if (e.fill) {
                            if (j.set(n, o, a).applyMatrix4(N),
                            Math.abs(j.x) > .5 || Math.abs(j.y) > .5 || Math.abs(j.z) > .5)
                                continue
                        } else if (!O(V.x, V.y, V.z, n, o, a))
                            continue;
                        y.push(r + F * (i + T * t))
                    }
            if (!y.length && e.fill) {
                let e = (e, t, i) => Math.min(i - 1, Math.max(0, Math.floor((e - t) / w)));
                y.push(e(V.x, A, F) + F * (e(V.z, $, T) + T * e(V.y, C, k)))
            }
            if (!y.length)
                continue;
            let M = e.intensity * c / y.length;
            for (let t of y)
                D.emission[3 * t] += e.color.r * M,
                D.emission[3 * t + 1] += e.color.g * M,
                D.emission[3 * t + 2] += e.color.b * M
        }
        return D
    }
    , "lightBlockerShape", 0, function(e) {
        switch (e.kind) {
        case "box":
            return {
                kind: "box"
            };
        case "prism":
            return {
                kind: "prism",
                points: e.points,
                depth: e.depth
            };
        case "cylinder":
            return {
                kind: "ring",
                inner: 0,
                outer: .5,
                bottom: -.5,
                top: .5
            };
        case "lathe":
            {
                if (e.arc && e.arc[1] < 2 * Math.PI - 1e-9)
                    return null;
                let t = 1 / 0
                  , i = 0
                  , r = 1 / 0
                  , n = -1 / 0;
                for (let[o,a] of e.profile)
                    t = Math.min(t, o),
                    i = Math.max(i, o),
                    r = Math.min(r, a),
                    n = Math.max(n, a);
                return i > 0 && n > r ? {
                    kind: "ring",
                    inner: t,
                    outer: i,
                    bottom: r,
                    top: n
                } : null
            }
        default:
            return null
        }
    }
    ], 985249);
    let M = new t.Data3DTexture(new Uint8Array(4),1,1,1);
    function w() {
        return {
            indoorLightMap: {
                value: M
            },
            indoorLightOrigin: {
                value: new t.Vector4(0,0,0,0)
            },
            indoorLightScale: {
                value: new t.Vector3(1,1,1)
            },
            indoorLightTint: {
                value: new t.Color(0,0,0)
            }
        }
    }
    M.needsUpdate = !0;
    let b = w();
    function S(e, t) {
        let i = t ?? b;
        e.indoorLightMap.value = i.indoorLightMap.value,
        e.indoorLightOrigin.value.copy(i.indoorLightOrigin.value),
        e.indoorLightScale.value.copy(i.indoorLightScale.value),
        e.indoorLightTint.value.copy(i.indoorLightTint.value)
    }
    let F = `
uniform mediump sampler3D indoorLightMap;
uniform vec4 indoorLightOrigin;
uniform vec3 indoorLightScale;
uniform vec3 indoorLightTint;
vec4 indoorLight(vec3 point, vec3 normal) {
	// The texture's layers are heights: x, z, y.
	vec4 texel = textureLod(indoorLightMap, ((point + normal * indoorLightOrigin.w - indoorLightOrigin.xyz) * indoorLightScale).xzy, 0.0);
	return vec4(texel.rgb * texel.rgb * indoorLightTint, texel.a);
}`;
    function k(e, t) {
        return `
	{
		vec3 indoorNormal = ${t};
		vec4 indoor = indoorLight(${e}, indoorNormal);
		// Under cover, or where the room's own light outshines the fill, the hemisphere fill is light off the room, not
		// the sky: its blue goes toward the hue of the room's light.
		vec3 indoorRoom = indoor.rgb + indoorLightTint * 0.01;
		float indoorRoomLuma = dot(indoorRoom, vec3(0.2126, 0.7152, 0.0722)), indoorFillLuma = dot(irradiance, vec3(0.2126, 0.7152, 0.0722));
		vec3 indoorHue = mix(vec3(1.0), indoorRoom / max(indoorRoomLuma, 1e-4), 0.600);
		float indoorShift = max(indoor.a, ${L.toFixed(3)} * indoorRoomLuma / (indoorRoomLuma + indoorFillLuma + 1e-4));
		irradiance = mix(irradiance, indoorFillLuma * indoorHue, indoorShift);
		irradiance += indoor.rgb * (0.85 + 0.15 * indoorNormal.y);
		#ifdef USE_ENVMAP
		float indoorSky = 1.0 - indoor.a * clamp(0.5 + 0.5 * indoorNormal.y, 0.0, 1.0);
		iblIrradiance = mix(iblIrradiance, dot(iblIrradiance, vec3(0.2126, 0.7152, 0.0722)) * indoorHue, indoorShift) * indoorSky;
		radiance *= indoorSky;
		#endif
	}`
    }
    let T = `
uniform highp sampler3D links;
int linkAt(ivec3 p) { return int(texelFetch(links, p, 0).r * 255.0 + 0.5); }`
      , A = `
uniform highp sampler3D source;
uniform int layer;
uniform ivec3 axis;
uniform int bit;
uniform int radius;
${T}
void main() {
	ivec3 p = ivec3(ivec2(gl_FragCoord.xy), layer);
	float total = float(radius + 1);
	vec4 sum = texelFetch(source, p, 0) * total;
	ivec3 q = p;
	for (int d = 1; d <= 16; d++) {
		if (d > radius || (linkAt(q) & bit) == 0) break;
		q += axis;
		float w = float(radius + 1 - d);
		sum += texelFetch(source, q, 0) * w;
		total += w;
	}
	q = p;
	for (int d = 1; d <= 16; d++) {
		ivec3 r = q - axis;
		if (d > radius || any(lessThan(r, ivec3(0))) || (linkAt(r) & bit) == 0) break;
		q = r;
		float w = float(radius + 1 - d);
		sum += texelFetch(source, q, 0) * w;
		total += w;
	}
	vec4 result = sum / total;
	if ((linkAt(p) & 8) != 0) result.a = 1.0;
	gl_FragColor = result;
}`
      , C = `
uniform highp sampler3D source;
uniform int layer;
uniform ivec3 size;
uniform float gain;
uniform float strength;
${T}
void main() {
	ivec3 p = ivec3(ivec2(gl_FragCoord.xy), layer);
	vec4 value = texelFetch(source, p, 0);
	int open = linkAt(p) & 7;
	if (p.x > 0) open |= linkAt(p - ivec3(1, 0, 0)) & 1;
	if (p.y > 0) open |= linkAt(p - ivec3(0, 1, 0)) & 4;
	if (p.z > 0) open |= linkAt(p - ivec3(0, 0, 1)) & 2;
	if (open == 0) {
		vec4 sum = vec4(0.0);
		float count = 0.0;
		for (int a = 0; a < 3; a++) for (int s = -1; s <= 1; s += 2) {
			ivec3 q = p;
			q[a] += s;
			if (q[a] < 0 || q[a] >= size[a]) continue;
			sum += texelFetch(source, q, 0);
			count += 1.0;
		}
		if (count > 0.0) value = sum / count;
	}
	gl_FragColor = vec4(sqrt(clamp(value.rgb * gain, 0.0, 1.0)), strength * (1.0 - clamp(value.a, 0.0, 1.0)));
}`;
    function $(e, i) {
        return new t.ShaderMaterial({
            uniforms: i,
            vertexShader: "void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",
            fragmentShader: e,
            depthTest: !1,
            depthWrite: !1
        })
    }
    class D {
        uniforms = w();
        result = null;
        scene = null;
        spread = $(A, {
            source: {
                value: null
            },
            links: {
                value: null
            },
            layer: {
                value: 0
            },
            axis: {
                value: [1, 0, 0]
            },
            bit: {
                value: 1
            },
            radius: {
                value: 1
            }
        });
        encode = $(C, {
            source: {
                value: null
            },
            links: {
                value: null
            },
            layer: {
                value: 0
            },
            size: {
                value: [1, 1, 1]
            },
            gain: {
                value: 1
            },
            strength: {
                value: 0
            }
        });
        quad = new t.Mesh(new t.PlaneGeometry(2,2));
        quadScene = new t.Scene;
        camera = new t.OrthographicCamera(-1,1,1,-1,0,1);
        tint = new t.Color(0,0,0);
        timing = null;
        constructor() {
            this.quad.frustumCulled = !1,
            this.quadScene.add(this.quad)
        }
        setSpec(e) {
            this.tint.set(e?.color ?? "#ffffff").multiplyScalar(e?.intensity ?? 0),
            this.uniforms.indoorLightTint.value.copy(this.tint).multiplyScalar(8)
        }
        bake(e, r, n) {
            let[o,a,l] = n.dims
              , s = e.getContext()
              , f = s.getParameter(s.MAX_3D_TEXTURE_SIZE);
            if (!(0,
            i.floatColorTargets)(e) || Math.max(o, a, l) > f)
                return;
            let c = performance.now()
              , u = o * a * l
              , h = new t.Data3DTexture(n.links,o,l,a);
            h.format = t.RedFormat,
            h.type = t.UnsignedByteType,
            h.minFilter = h.magFilter = t.NearestFilter,
            h.unpackAlignment = 1,
            h.needsUpdate = !0;
            let d = new Uint16Array(4 * u)
              , m = t.DataUtils.toHalfFloat(1);
            for (let e = 0; e < u; e++) {
                let i = n.emission[3 * e]
                  , r = n.emission[3 * e + 1]
                  , o = n.emission[3 * e + 2];
                (i || r || o) && (d[4 * e] = t.DataUtils.toHalfFloat(i),
                d[4 * e + 1] = t.DataUtils.toHalfFloat(r),
                d[4 * e + 2] = t.DataUtils.toHalfFloat(o)),
                8 & n.links[e] && (d[4 * e + 3] = m)
            }
            let p = new t.Data3DTexture(d,o,l,a);
            p.format = t.RGBAFormat,
            p.type = t.HalfFloatType,
            p.minFilter = p.magFilter = t.NearestFilter,
            p.needsUpdate = !0;
            let g = performance.now()
              , x = {
                type: t.HalfFloatType,
                format: t.RGBAFormat,
                minFilter: t.NearestFilter,
                magFilter: t.NearestFilter,
                depthBuffer: !1
            }
              , v = new t.WebGL3DRenderTarget(o,l,a,x)
              , M = new t.WebGL3DRenderTarget(o,l,a,x)
              , w = new t.WebGL3DRenderTarget(o,l,a,{
                type: t.UnsignedByteType,
                format: t.RGBAFormat,
                minFilter: t.LinearFilter,
                magFilter: t.LinearFilter,
                depthBuffer: !1
            })
              , b = e.getRenderTarget()
              , S = e.autoClear;
            e.autoClear = !1;
            let F = (t, i) => {
                this.quad.material = t;
                for (let r = 0; r < a; r++)
                    t.uniforms.layer.value = r,
                    e.setRenderTarget(i, r),
                    e.render(this.quadScene, this.camera)
            }
            ;
            try {
                let e = Math.min(16, Math.max(1, Math.round(5 / n.cell)))
                  , t = [[[1, 0, 0], 1], [[0, 1, 0], 4], [[0, 0, 1], 2]];
                this.spread.uniforms.links.value = h,
                this.spread.uniforms.radius.value = e;
                let i = p
                  , r = v;
                for (let e = 0; e < 2; e++)
                    for (let[e,n] of t)
                        this.spread.uniforms.source.value = i,
                        this.spread.uniforms.axis.value = e,
                        this.spread.uniforms.bit.value = n,
                        F(this.spread, r),
                        i = r.texture,
                        r = r === v ? M : v;
                this.encode.uniforms.source.value = i,
                this.encode.uniforms.links.value = h,
                this.encode.uniforms.size.value = [o, l, a],
                this.encode.uniforms.gain.value = 6 / (n.cell * n.cell * n.cell) / 8,
                this.encode.uniforms.strength.value = L,
                F(this.encode, w)
            } finally {
                e.setRenderTarget(b),
                e.autoClear = S,
                v.dispose(),
                M.dispose(),
                h.dispose(),
                p.dispose()
            }
            this.result?.dispose(),
            this.result = w;
            let[k,T,A] = n.origin;
            this.uniforms.indoorLightMap.value = w.texture,
            this.uniforms.indoorLightOrigin.value.set(k, T, A, n.cell),
            this.uniforms.indoorLightScale.value.set(1 / (o * n.cell), 1 / (a * n.cell), 1 / (l * n.cell)),
            this.scene = r,
            y(r, this.uniforms),
            this.timing = {
                voxels: u,
                uploadMs: g - c,
                passesMs: performance.now() - g
            }
        }
        dispose() {
            this.result?.dispose(),
            this.result = null,
            this.scene && v(this.scene) === this.uniforms && y(this.scene, void 0),
            this.scene = null,
            this.uniforms.indoorLightOrigin.value.w = 0,
            this.spread.dispose(),
            this.encode.dispose(),
            this.quad.geometry.dispose()
        }
    }
    let L = .8;
    function z(e) {
        return e.userData.contactCover
    }
    function G(e, t) {
        e.userData.contactCover = t
    }
    function E(e, t, i, r) {
        let n = "0.40"
          , o = `vec2(${i}.x + ${r}.x * ${n} - ${t}.x, ${t}.y - ${i}.z - ${r}.z * ${n}) * ${t}.z`;
        return `(${t}.w > 0.0 ? ${L.toFixed(2)} * clamp((texture2D(${e}, ${o}).r - ${i}.y - 0.50) / 3.0, 0.0, 1.0) * clamp(0.5 + 0.5 * ${r}.y, 0.0, 1.0) : 0.0)`
    }
    let _ = {
        kind: "box"
    }
      , R = new t.Box3(new t.Vector3(-.5,-.5,-.5),new t.Vector3(.5,.5,.5))
      , P = new t.Box3(new t.Vector3(-.5,-.5,-.12),new t.Vector3(.5,.5,.12))
      , I = 2 * Math.PI;
    function B(e, i) {
        switch (e.kind) {
        case "box":
            return _;
        case "prism":
            return {
                kind: "prism",
                points: e.points,
                depth: e.depth
            };
        case "cylinder":
            return {
                kind: "round",
                radius: .5,
                bottom: -.5,
                top: .5,
                flatTop: !0
            };
        case "sphere":
        case "cone":
        case "pyramid":
            return {
                kind: "other",
                bounds: R
            };
        case "torus":
            return {
                kind: "other",
                bounds: P
            };
        case "lathe":
            {
                let i = 0
                  , r = 1 / 0
                  , n = -1 / 0;
                for (let[t,o] of e.profile)
                    i = Math.max(i, t),
                    r = Math.min(r, o),
                    n = Math.max(n, o);
                if (e.arc && e.arc[1] < I - 1e-9 || e.rise) {
                    let o = e.rise ?? 0;
                    return {
                        kind: "other",
                        bounds: new t.Box3(new t.Vector3(-i,r + Math.min(0, o),-i),new t.Vector3(i,n + Math.max(0, o),i))
                    }
                }
                let o = e.profile.some( ([t,i], r) => {
                    let[o,a] = e.profile[(r + 1) % e.profile.length];
                    return 1e-6 > Math.abs(i - n) && 1e-6 > Math.abs(a - n) && Math.abs(t - o) > 1e-6
                }
                );
                return {
                    kind: "round",
                    radius: i,
                    bottom: r,
                    top: n,
                    flatTop: o
                }
            }
        default:
            return i ? {
                kind: "other",
                bounds: i
            } : null
        }
    }
    let U = new t.Vector3;
    function O(e, t) {
        let i = e[4 * t]
          , r = e[4 * t + 1];
        return Math.abs(r) >= .9995 * Math.hypot(i, r, e[4 * t + 2])
    }
    function V(e, t, i, r, n, o=!0) {
        let a = 0;
        for (let i = 0; i < e.length; i++) {
            let r = (i + 1) % e.length;
            a += e[i] * t[r] - e[r] * t[i]
        }
        a < 0 && (e.reverse(),
        t.reverse());
        let l = 1 / 0
          , s = -1 / 0
          , f = 1 / 0
          , c = -1 / 0
          , u = 0
          , h = 0;
        for (let i = 0; i < e.length; i++)
            l = Math.min(l, e[i]),
            s = Math.max(s, e[i]),
            f = Math.min(f, t[i]),
            c = Math.max(c, t[i]),
            u += e[i],
            h += t[i];
        return {
            xs: e,
            zs: t,
            minX: l,
            maxX: s,
            minZ: f,
            maxZ: c,
            cx: u / e.length,
            cz: h / e.length,
            bottom: i,
            top: r,
            carries: n,
            exact: o
        }
    }
    function N(e, t) {
        let i = 1 / 0
          , r = -1 / 0
          , n = 1 / 0
          , o = -1 / 0
          , a = 1 / 0
          , l = -1 / 0;
        for (let s = 0; s < 8; s++)
            U.set(1 & s ? t.max.x : t.min.x, 2 & s ? t.max.y : t.min.y, 4 & s ? t.max.z : t.min.z).applyMatrix4(e),
            i = Math.min(i, U.x),
            r = Math.max(r, U.x),
            n = Math.min(n, U.y),
            o = Math.max(o, U.y),
            a = Math.min(a, U.z),
            l = Math.max(l, U.z);
        return V([i, r, r, i], [a, a, l, l], n, o, !1, !1)
    }
    function j(e, t, i) {
        if (t < e.minX - 1e-6 || t > e.maxX + 1e-6 || i < e.minZ - 1e-6 || i > e.maxZ + 1e-6)
            return !1;
        let r = e.xs.length;
        for (let n = 0; n < r; n++) {
            let o = (n + 1) % r;
            if ((e.xs[o] - e.xs[n]) * (i - e.zs[n]) - (e.zs[o] - e.zs[n]) * (t - e.xs[n]) < -1e-6)
                return !1
        }
        return !0
    }
    function K(e, t, i) {
        for (let r of e)
            if (j(r, t, i))
                return !0;
        return !1
    }
    class q {
        ground;
        footprints;
        grid;
        seen;
        stamp;
        constructor(e, i=0) {
            this.ground = i,
            this.grid = new Map,
            this.stamp = 0,
            this.footprints = e.map(e => e ? function({matrix: e, shape: i}) {
                let r = e.elements
                  , n = []
                  , o = [];
                if ("box" === i.kind) {
                    if (!O(r, 1))
                        return N(e, R);
                    for (let[t,i] of [[-.5, -.5], [.5, -.5], [.5, .5], [-.5, .5]])
                        U.set(t, 0, i).applyMatrix4(e),
                        n.push(U.x),
                        o.push(U.z);
                    let t = Math.abs(r[5]) / 2;
                    return V(n, o, r[13] - t, r[13] + t, !0)
                }
                if ("prism" === i.kind) {
                    if (!O(r, 2)) {
                        let r = new t.Box3;
                        for (let[e,t] of i.points)
                            r.expandByPoint(U.set(e, t, -i.depth / 2)).expandByPoint(U.set(e, t, i.depth / 2));
                        return N(e, r)
                    }
                    for (let[t,r] of i.points)
                        U.set(t, r, 0).applyMatrix4(e),
                        n.push(U.x),
                        o.push(U.z);
                    let a = Math.abs(r[9]) * i.depth / 2;
                    return V(n, o, r[13] - a, r[13] + a, !0)
                }
                if ("round" === i.kind) {
                    if (!O(r, 1))
                        return N(e, new t.Box3(new t.Vector3(-i.radius,i.bottom,-i.radius),new t.Vector3(i.radius,i.top,i.radius)));
                    for (let t = 0; t < 8; t++) {
                        let r = t * I / 8;
                        U.set(i.radius * Math.cos(r), 0, i.radius * Math.sin(r)).applyMatrix4(e),
                        n.push(U.x),
                        o.push(U.z)
                    }
                    let a = r[13] + r[5] * i.bottom
                      , l = r[13] + r[5] * i.top;
                    return V(n, o, Math.min(a, l), Math.max(a, l), i.flatTop && r[5] > 0)
                }
                return N(e, i.bounds)
            }(e) : null),
            this.seen = new Int32Array(e.length),
            this.footprints.forEach( (e, t) => {
                if (e?.carries)
                    for (let i = Math.floor(e.minX / 8); i <= Math.floor(e.maxX / 8); i++)
                        for (let r = Math.floor(e.minZ / 8); r <= Math.floor(e.maxZ / 8); r++) {
                            let e = 65536 * i + r
                              , n = this.grid.get(e);
                            n ? n.push(t) : this.grid.set(e, [t])
                        }
            }
            )
        }
        near(e, t, i) {
            let r = [];
            this.stamp++;
            for (let n = Math.floor((e.minX - t) / 8); n <= Math.floor((e.maxX + t) / 8); n++)
                for (let o = Math.floor((e.minZ - t) / 8); o <= Math.floor((e.maxZ + t) / 8); o++)
                    for (let a of this.grid.get(65536 * n + o) ?? []) {
                        if (a === i || this.seen[a] === this.stamp)
                            continue;
                        this.seen[a] = this.stamp;
                        let n = this.footprints[a];
                        n.maxX < e.minX - t || n.minX > e.maxX + t || n.maxZ < e.minZ - t || n.minZ > e.maxZ + t || r.push(a)
                    }
            return r
        }
        receiver(e) {
            let t, i = this.footprints[e];
            if (!i)
                return null;
            let r = null === this.ground ? null : "number" == typeof this.ground ? this.ground : this.ground(i.cx, i.cz)
              , n = null !== r && i.bottom <= r + .05 ? r : null
              , o = this.near(i, .2, e).map(e => this.footprints[e]);
            if (null === n) {
                let e = o.filter(e => .05 >= Math.abs(e.top - i.bottom));
                if (e.length) {
                    let r = function(e) {
                        let t = [[e.cx, e.cz]]
                          , i = Math.max(1, Math.ceil(e.xs.length / 8));
                        for (let r = 0; r < e.xs.length; r += i)
                            t.push([e.xs[r] + (e.cx - e.xs[r]) * .3, e.zs[r] + (e.cz - e.zs[r]) * .3]);
                        return t
                    }(i);
                    if (r.filter( ([t,i]) => K(e, t, i)).length >= .6 * r.length) {
                        n = i.bottom;
                        let r = i.minX - .15 - .05
                          , o = i.maxX + .15 + .05
                          , a = i.minZ - .15 - .05
                          , l = i.maxZ + .15 + .05;
                        e.some(e => j(e, r, a) && j(e, o, a) && j(e, o, l) && j(e, r, l)) || (t = e)
                    }
                }
            }
            let a = i.exact ? o.filter(e => e.top > i.bottom + .05 && e.top < i.top - .05).sort( (e, t) => e.top - t.top) : []
              , l = [];
            for (let e of a) {
                let t = l[l.length - 1];
                t && e.top - t.top <= .05 ? t.footprints.push(e) : l.push({
                    top: e.top,
                    footprints: [e]
                })
            }
            return t ? {
                own: n,
                ownOn: t,
                slabs: l
            } : {
                own: n,
                slabs: l
            }
        }
    }
    function H(e) {
        if (!e)
            return "-";
        let t = e => e.map(e => `${e.minX.toFixed(2)},${e.maxX.toFixed(2)},${e.minZ.toFixed(2)},${e.maxZ.toFixed(2)}`).join(";");
        return `${e.own?.toFixed(3) ?? "x"}${e.ownOn ? `@${t(e.ownOn)}` : ""}${e.slabs.map(e => `|${e.top.toFixed(3)}:${t(e.footprints)}`).join("")}`
    }
    function W(e) {
        return null === e ? 65535 : Math.min(65534, Math.max(0, Math.round((e - -64) / 1024 * 65535)))
    }
    let X = new t.Vector3
      , Z = new t.Vector3
      , Y = new t.Vector3
      , J = new t.Vector3
      , Q = new t.Vector3
      , ee = new t.Matrix3;
    function et(e, t, i) {
        let r = [];
        for (let n = 0; n < e.length; n++) {
            let o = e[n]
              , a = e[(n + 1) % e.length]
              , l = i ? o.y >= t : o.y <= t
              , s = i ? a.y >= t : a.y <= t;
            l && r.push(o),
            l !== s && r.push(function(e, t, i) {
                let r = (i - e.y) / (t.y - e.y);
                return {
                    y: i,
                    values: e.values.map( (e, i) => e + (t.values[i] - e) * r)
                }
            }(o, a, t))
        }
        return r
    }
    function ei(e, i, r) {
        let n = e.attributes.position
          , o = e.attributes.normal
          , a = i?.own ?? null
          , l = null === a ? void 0 : i?.ownOn
          , s = Math.floor(n.count / 3);
        if (!i || !i.slabs.length && !l || e.index)
            return void e.setAttribute("contactBase", new t.Uint16BufferAttribute(new Uint16Array(n.count).fill(W(a)),1,!0));
        r && ee.getNormalMatrix(r);
        let {slabs: f} = i
          , c = [X, Z, Y]
          , u = 0
          , h = 0
          , d = 0
          , m = 0
          , p = e => {
            for (let t of c) {
                let i = t.x + u
                  , r = t.z + h;
                if (!K(e, i + (d - i) * .04, r + (m - r) * .04))
                    return !1
            }
            return !0
        }
          , g = Array(s).fill(a)
          , x = Array(s);
        for (let e = 0; e < s; e++) {
            let t = 3 * e;
            X.fromBufferAttribute(n, t),
            Z.fromBufferAttribute(n, t + 1),
            Y.fromBufferAttribute(n, t + 2),
            r && (X.applyMatrix4(r),
            Z.applyMatrix4(r),
            Y.applyMatrix4(r));
            let i = Math.min(X.y, Z.y, Y.y)
              , a = Math.max(X.y, Z.y, Y.y)
              , s = 0;
            for (; s < f.length && f[s].top < i - .05; )
                s++;
            let c = s < f.length && f[s].top < a - .05;
            if (!c && !l)
                continue;
            o ? (J.fromBufferAttribute(o, t).add(Q.fromBufferAttribute(o, t + 1)).add(Q.fromBufferAttribute(o, t + 2)),
            r && J.applyMatrix3(ee)) : J.subVectors(Z, X).cross(Q.subVectors(Y, X));
            let v = Math.hypot(J.x, J.z);
            if (!(v < .3 * J.length())) {
                u = J.x / v * .15,
                h = J.z / v * .15,
                d = (X.x + Z.x + Y.x) / 3 + u,
                m = (X.z + Z.z + Y.z) / 3 + h,
                l && !p(l) && (g[e] = null);
                for (let t = s; c && t < f.length && f[t].top < a - .05; t++) {
                    if (!p(f[t].footprints))
                        continue;
                    let r = f[t].top;
                    r <= i + .002 ? g[e] = Math.max(g[e] ?? -1 / 0, r) : r < a - .002 && (x[e] ??= []).push(r)
                }
            }
        }
        if (!x.some(Boolean)) {
            let i = new Uint16Array(n.count);
            for (let e = 0; e < s; e++)
                i.fill(W(g[e]), 3 * e, 3 * e + 3);
            e.setAttribute("contactBase", new t.Uint16BufferAttribute(i,1,!0));
            return
        }
        let v = Object.keys(e.attributes).filter(e => "contactBase" !== e)
          , y = v.map(t => e.getAttribute(t))
          , M = (e, t) => {
            let i = [];
            for (let t of y)
                for (let r = 0; r < t.itemSize; r++)
                    i.push(t.array[e * t.itemSize + r]);
            return {
                y: t,
                values: i
            }
        }
          , w = new Map
          , b = 0;
        for (let e = 0; e < s; e++) {
            let t = x[e];
            if (!t) {
                b += 3;
                continue
            }
            let i = 3 * e;
            X.fromBufferAttribute(n, i),
            Z.fromBufferAttribute(n, i + 1),
            Y.fromBufferAttribute(n, i + 2),
            r && (X.applyMatrix4(r),
            Z.applyMatrix4(r),
            Y.applyMatrix4(r));
            let o = []
              , a = [M(i, X.y), M(i + 1, Z.y), M(i + 2, Y.y)]
              , l = g[e];
            for (let e of t) {
                let t = et(a, e, !1);
                for (let e = 1; e + 1 < t.length; e++)
                    o.push({
                        corners: [t[0], t[e], t[e + 1]],
                        base: l
                    });
                a = et(a, e, !0),
                l = e
            }
            for (let e = 1; e + 1 < a.length; e++)
                o.push({
                    corners: [a[0], a[e], a[e + 1]],
                    base: l
                });
            w.set(e, o),
            b += 3 * o.length
        }
        let S = y.map(e => new e.array.constructor(b * e.itemSize))
          , F = new Uint16Array(b)
          , k = 0;
        for (let e = 0; e < s; e++) {
            let t = w.get(e);
            if (!t) {
                y.forEach( (t, i) => S[i].set(t.array.subarray(3 * e * t.itemSize, (e + 1) * 3 * t.itemSize), k * t.itemSize)),
                F.fill(W(g[e]), k, k + 3),
                k += 3;
                continue
            }
            for (let {corners: e, base: i} of t) {
                for (let t of e) {
                    let e = 0;
                    y.forEach( (i, r) => {
                        for (let n = 0; n < i.itemSize; n++)
                            S[r][k * i.itemSize + n] = t.values[e + n];
                        e += i.itemSize
                    }
                    ),
                    k++
                }
                F.fill(W(i), k - 3, k)
            }
        }
        y.forEach( (i, r) => e.setAttribute(v[r], new t.BufferAttribute(S[r],i.itemSize,i.normalized))),
        e.setAttribute("contactBase", new t.Uint16BufferAttribute(F,1,!0)),
        e.clearGroups(),
        e.boundingBox = null,
        e.boundingSphere = null
    }
    let er = new t.Texture
      , en = new t.Vector4(0,0,0,0);
    function eo(e, t, i=!1, r=!1) {
        let n = e.onBeforeCompile
          , o = e.onBeforeRender
          , a = e.customProgramCacheKey()
          , l = i && r
          , s = {
            contactCoverMap: {
                value: er
            },
            contactCoverBounds: {
                value: en.clone()
            }
        }
          , f = w();
        return i && (e.onBeforeRender = function(e, t, i, r, n, a) {
            if (o.call(this, e, t, i, r, n, a),
            l)
                S(f, v(t));
            else {
                let e = z(t);
                s.contactCoverMap.value = e?.groundCoverMap.value ?? er,
                s.contactCoverBounds.value.copy(e?.groundOcclusionBounds.value ?? en)
            }
        }
        ),
        e.onBeforeCompile = (r, o) => {
            n.call(e, r, o),
            l ? Object.assign(r.uniforms, f) : i && Object.assign(r.uniforms, s),
            r.vertexShader = r.vertexShader.replace("#include <common>", `#include <common>
attribute float contactBase;
varying float vContactAbove;`).replace("#include <project_vertex>", `#include <project_vertex>
	vContactAbove = ${"world" === t ? "(modelMatrix * vec4(transformed, 1.0)).y" : "transformed.y"} - (contactBase * 1024.0 + -64.0);`),
            r.fragmentShader = r.fragmentShader.replace("#include <common>", `#include <common>
${l ? F : i ? "uniform sampler2D contactCoverMap;\nuniform vec4 contactCoverBounds;" : ""}
varying float vContactAbove;`).replace("#include <lights_fragment_maps>", l ? `#include <lights_fragment_maps>${k("cameraPosition + (vec4(-vViewPosition, 0.0) * viewMatrix).xyz", "(vec4(normal, 0.0) * viewMatrix).xyz")}` : i ? `#include <lights_fragment_maps>
	#ifdef USE_ENVMAP
	{
		// Under cover the sky probe would light this as if it stood outdoors. Ceilings are lit from below: no read.
		vec3 contactNormal = (vec4(normal, 0.0) * viewMatrix).xyz;
		if (contactNormal.y > -0.5 && contactCoverBounds.w > 0.0) {
			vec3 contactPoint = cameraPosition + (vec4(-vViewPosition, 0.0) * viewMatrix).xyz;
			float contactSky = 1.0 - ${E("contactCoverMap", "contactCoverBounds", "contactPoint", "contactNormal")};
			iblIrradiance *= contactSky;
			radiance *= contactSky;
		}
	}
	#endif` : "#include <lights_fragment_maps>").replace("#include <aomap_fragment>", `#include <aomap_fragment>
	{
		// The normal's world y, from the view-space one: floors and ceilings get none, nor anything
		// below its surface or more than six falloffs above it, where the band has faded.
		float contactUp = dot(normal, viewMatrix[1].xyz);
		if (abs(contactUp) < 0.95 && vContactAbove > -0.03 && vContactAbove < 5.40) {
			float contact = 0.700 * (1.0 - max(0.0, contactUp)) * exp(-max(vContactAbove, 0.0) / 0.900);
			reflectedLight.indirectDiffuse *= 1.0 - contact;
			reflectedLight.indirectSpecular *= 1.0 - contact;
			reflectedLight.directDiffuse *= 1.0 - contact * 0.50;
		}
	}`)
        }
        ,
        e.customProgramCacheKey = () => `${a}:contact-${t}${i ? "-cover" : ""}${l ? "-indoor" : ""}`,
        e
    }
}
, 85058, e => {
    "use strict";
    var t = e.i(190072)
      , i = e.i(80630);
    let r = 64 / 0xffffff;
    function n(e) {
        return `
#ifdef USE_REVERSED_DEPTH_BUFFER
	gl_Position.z += ${e.toPrecision(12)} * log( 1.0 + projectionMatrix[ 3 ][ 2 ] / projectionMatrix[ 2 ][ 2 ] ) * projectionMatrix[ 3 ][ 2 ];
#endif`
    }
    function o(e, t, r) {
        let n = t => {
            e.polygonOffset = null !== t,
            e.polygonOffsetFactor = t?.[0] ?? 0,
            e.polygonOffsetUnits = t?.[1] ?? 0
        }
        ;
        n(t);
        let o = e.onBeforeRender;
        return e.onBeforeRender = function(e, ...a) {
            o.call(this, e, ...a),
            n((0,
            i.reversedDepth)(e) ? r : t)
        }
        ,
        e
    }
    e.s(["DEPTH_LAYER_STEP", 0, r, "GROUND_DECAL_RENDER_ORDER", 0, -1, "GROUND_RENDER_ORDER", 0, 1, "HORIZON_RENDER_ORDER", 0, .5, "applyDepthLayer", 0, function(e, i) {
        if (0 === i)
            return e;
        e.stencilWrite = !0,
        e.stencilFuncMask = 1,
        e.stencilWriteMask = 1,
        e.stencilRef = 1,
        e.stencilFunc = t.AlwaysStencilFunc,
        e.stencilFail = t.KeepStencilOp,
        e.stencilZFail = t.KeepStencilOp,
        e.stencilZPass = t.ReplaceStencilOp;
        let a = e.onBeforeCompile
          , l = e.customProgramCacheKey();
        return o(e, [0, -64 * i], null),
        e.onBeforeCompile = (t, o) => {
            a.call(e, t, o),
            t.vertexShader = t.vertexShader.replace("#include <logdepthbuf_vertex>", `#include <logdepthbuf_vertex>${n(r * i)}`),
            t.fragmentShader = t.fragmentShader.replace("#include <logdepthbuf_fragment>", `#include <logdepthbuf_fragment>
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  gl_FragDepth = max(0.0, gl_FragDepth - ${(r * i).toPrecision(12)});
#endif`)
        }
        ,
        e.customProgramCacheKey = () => `${l}:depth-layer-v2:${i}`,
        e
    }
    , "polygonOffsetByDepth", 0, o, "protectGroundFromRoads", 0, function(e) {
        return e.stencilWrite = !0,
        e.stencilFuncMask = 1,
        e.stencilWriteMask = 0,
        e.stencilRef = 0,
        e.stencilFunc = t.EqualStencilFunc,
        e.stencilFail = t.KeepStencilOp,
        e.stencilZFail = t.KeepStencilOp,
        e.stencilZPass = t.KeepStencilOp,
        e
    }
    , "pullUnderReversedDepth", 0, function(e, t) {
        o(e, e.polygonOffset ? [e.polygonOffsetFactor, e.polygonOffsetUnits] : null, null);
        let i = e.onBeforeCompile
          , r = e.customProgramCacheKey();
        return e.onBeforeCompile = (r, o) => {
            i.call(e, r, o),
            r.vertexShader = r.vertexShader.replace("#include <logdepthbuf_vertex>", `#include <logdepthbuf_vertex>${n(t)}`)
        }
        ,
        e.customProgramCacheKey = () => `${r}:reversed-pull:${t}`,
        e
    }
    , "reversedDepthPull", 0, n])
}
, 694835, 202771, 338168, e => {
    "use strict";
    let t, i;
    var r = e.i(190072)
      , n = e.i(271645)
      , o = e.i(378423)
      , a = e.i(468105)
      , l = e.i(225228)
      , s = e.i(250923);
    function f(e) {
        return e.paintRoughness ?? o.WORLD_LOOK.paintRoughness
    }
    function c(e, t, i) {
        let r = Math.imul(e ^ i, 0x165667b1) ^ Math.imul(t, 0x27d4eb2f);
        return (((r = Math.imul(r ^ r >>> 13, 0x4bf19f61)) ^ r >>> 16) >>> 0) / 0xffffffff
    }
    function u(e, t, i, r) {
        let n = e * i / 256
          , o = t * i / 256
          , a = Math.floor(n)
          , l = Math.floor(o)
          , s = n - a
          , f = o - l
          , u = s * s * (3 - 2 * s)
          , h = f * f * (3 - 2 * f)
          , d = c(a % i, l % i, r)
          , m = c((a + 1) % i, l % i, r)
          , p = c(a % i, (l + 1) % i, r);
        return (d + (m - d) * u) * (1 - h) + (p + (c((a + 1) % i, (l + 1) % i, r) - p) * u) * h
    }
    let h = {
        value: ((i = new r.DataArrayTexture(new Uint8Array([128, 128, 128, 128]),1,1,1)).name = "Surface detail (waiting)",
        i.colorSpace = r.NoColorSpace,
        i.needsUpdate = !0,
        i)
    };
    async function d(e) {
        let t = await (0,
        s.decodeDetailTone)(e)
          , {size: i} = a.DETAIL_SET
          , r = i * i
          , n = new Uint8Array(4 * r * a.DETAIL_KINDS.length);
        for (let e = 0; e < a.DETAIL_KINDS.length; e++)
            await new Promise(e => "function" == typeof requestIdleCallback ? requestIdleCallback( () => e(), {
                timeout: 250
            }) : setTimeout(e, 0)),
            (0,
            a.detailLayer)(t.subarray(e * r, (e + 1) * r), i, n.subarray(e * r * 4, (e + 1) * r * 4));
        return n
    }
    let m = "loading"
      , p = !1
      , g = new Set;
    function x(e) {
        m = e,
        g.forEach(e => e())
    }
    function v() {
        return m
    }
    function y(e) {
        return g.add(e),
        () => {
            g.delete(e)
        }
    }
    function M(e, t=!1) {
        return e ? `${t ? "faces" : e.kind}-${"low" === e.quality ? "macro" : "detail"}-paint${f(e)}-v6` : "plain"
    }
    let w = a.DETAIL_KINDS.map(e => a.DETAIL_KIND_INFO[e])
      , b = e => [e.tone, e.bump, e.roughness, +!!e.grid]
      , S = e => [e.scale, e.base[0], e.base[1], 0]
      , F = Array.from({
        length: 8
    }, (e, t) => {
        let i = t % 4
          , r = [1, 0, -1, 0][i]
          , n = [0, 1, 0, -1][i]
          , o = t > 3 ? -1 : 1;
        return [r * o, n * o, -n, r]
    }
    )
      , k = {
        finishKindStrength: {
            value: w.map(e => new r.Vector4(...b(e)))
        },
        finishKindValues: {
            value: w.map(e => new r.Vector4(...S(e)))
        },
        finishTurns: {
            value: F.map( ([e,t,i,n]) => new r.Vector4(e,t,i,n))
        }
    };
    function T(e) {
        e.uniforms.surfaceDetail = {
            value: function() {
                if (t)
                    return t;
                let e = new Uint8Array(131072);
                for (let t = 0; t < 256; t++)
                    for (let i = 0; i < 256; i++) {
                        let r = (256 * t + i) * 2;
                        e[r] = Math.round((.7 * u(i, t, 8, 1907) + .3 * u(i, t, 4, 7741)) * 255),
                        e[r + 1] = Math.round((.65 * u(i, t, 64, 4211) + .35 * u(i, t, 24, 811)) * 255)
                    }
                return (t = new r.DataTexture(e,256,256,r.RGFormat,r.UnsignedByteType)).name = "World broad layers (shared)",
                t.colorSpace = r.NoColorSpace,
                t.wrapS = t.wrapT = r.RepeatWrapping,
                t.minFilter = r.LinearMipmapLinearFilter,
                t.magFilter = r.LinearFilter,
                t.generateMipmaps = !0,
                t.anisotropy = 4,
                t.needsUpdate = !0,
                t
            }()
        },
        e.uniforms.surfaceDetailMaps = h,
        Object.assign(e.uniforms, k)
    }
    let A = `uniform sampler2D surfaceDetail;
uniform sampler2DArray surfaceDetailMaps;
uniform vec4 finishKindStrength[${w.length}];
uniform vec4 finishKindValues[${w.length}];
uniform vec4 finishTurns[${F.length}];`
      , C = e => `vec4(${e.map(e => e.toFixed(4)).join(", ")})`;
    function $(e, t) {
        let i = "low" !== e.quality
          , r = "string" == typeof t.kind ? void 0 : t.kind.own;
        return `
vec3 finishPosition = ${t.position};
float finishPaint = clamp(${t.paint}, 0.0, 1.0);
${r ? `int finishKind = ${(0,
        a.detailKindIndex)(r)};
vec4 finishStrength = ${C(b(a.DETAIL_KIND_INFO[r]))};
vec4 finishKindInfo = ${C(S(a.DETAIL_KIND_INFO[r]))};` : `int finishKind = int(${t.kind} + 0.5);
vec4 finishStrength = finishKindStrength[finishKind];
vec4 finishKindInfo = finishKindValues[finishKind];`}
float finishGrid = finishStrength.w;
vec2 finishKindRough = finishKindInfo.yz;
// Broad weathering and metre-scale mineral mottling. Oblique projections at
// unrelated footprints do not stamp the same patches along long floors or
// walls; only neutral values modulate the palette colour.
vec2 macroA = (finishPosition.xz + finishPosition.y * vec2(0.37, 0.61)) / 149.0;
vec2 finishLayersA = texture2D(surfaceDetail, macroA).rg;
${i ? `vec2 macroB = (finishPosition.zy + finishPosition.x * vec2(-0.41, 0.73)) / 47.0 + vec2(0.31, 0.57);
vec2 finishLayersB = texture2D(surfaceDetail, macroB).rg;
float finishMacro = clamp((finishLayersA.x - 0.5) * 2.4 + (finishLayersB.x - 0.5) * 1.6, -0.85, 0.85);
float finishMottle = (finishLayersA.y - 0.5) * 1.2 + (finishLayersB.y - 0.5) * 1.8;` : `float finishMacro = clamp((finishLayersA.x - 0.5) * 2.9, -0.85, 0.85);
float finishMottle = (finishLayersA.y - 0.5) * 2.2;`}
float finishWeather = smoothstep(0.16, 0.48, -finishMacro + finishMottle * 0.35);
// The kind's map: laid in metres, or one repeat per grid tile, turned and
// mirrored per tile so neighbouring tiles never match. Gradients come from
// the unturned coordinates, so a tile's edge never drops to a coarse mip.
float finishScale = finishKindInfo.x;
vec2 finishBase = finishScale > 0.0 ? (${t.detail}) / finishScale : ${t.cell};
vec2 finishGx = dFdx(finishBase), finishGy = dFdy(finishBase);
float finishFootprint = ${t.footprint};
// The map fades to the plain palette colour by pixel footprint: its bump
// first, long before it could sparkle in FPV, then its tone and roughness.
float finishNear = 1.0 - smoothstep(0.006, 0.04, finishFootprint);
float finishFar = 1.0 - smoothstep(0.02, 0.14, finishFootprint);
// Where it has faded out the map adds nothing: no turn and no read.
vec4 finishMap = vec4(0.5);
if (finishFar > 0.0) {
  vec2 finishUv = finishBase;
  if (finishScale <= 0.0) {
    // The tile's turn (\`FINISH_TURNS\`), from its hash.
    vec2 finishTile = floor(finishBase);
    mat2 finishTurn = mat2(finishTurns[int(gridHash(finishTile + 7.0) * 8.0)]);
    finishUv = finishTile + 0.5 + finishTurn * (finishBase - finishTile - 0.5);
    finishGx = finishTurn * finishGx; finishGy = finishTurn * finishGy;
  }
  finishMap = textureGrad(surfaceDetailMaps, vec3(finishUv, float(finishKind)), finishGx, finishGy);
}
float finishDetail = (finishMap.r - 0.5) * 2.0 * finishStrength.x * finishFar * mix(1.0, 0.5, finishPaint);
float finishRough = (finishMap.g - 0.5) * 2.0 * finishStrength.z * finishFar;
float finishHeight = 0.0;
${i ? `// The map's slope in metres per metre, carried along its own axes.
vec2 finishSlope = (finishMap.ba - 0.5) * 2.0 * finishStrength.y * finishNear * mix(1.0, 0.3, finishPaint);
float finishRepeat = finishScale > 0.0 ? finishScale : 0.5 * ((${t.tile}).x + (${t.tile}).y);
float finishSlopeDx = dot(finishSlope, finishGx) * finishRepeat;
float finishSlopeDy = dot(finishSlope, finishGy) * finishRepeat;` : ""}
// The palette stays the colour: the broad layers and the map only shade it,
// a quiet few percent, around a mean of exactly one.
float finishTone = 1.0 + finishDetail
  + mix(finishMacro * 0.06 + finishMottle * 0.045 - finishWeather * 0.03, finishMacro * 0.025 + finishMottle * 0.02, finishPaint);
diffuseColor.rgb *= clamp(finishTone, 0.7, 1.3);
`
    }
    function D(e) {
        return `
roughnessFactor = clamp(roughnessFactor * mix(finishKindRough.x, ${f(e).toFixed(3)}, finishPaint)
  + finishMottle * 0.05 + finishWeather * 0.04 + finishRough, finishKindRough.y, 1.0);
`
    }
    function L(e) {
        return "low" === e.quality ? "" : `
// Surface-gradient bump: the map's slope, carried to the screen through its
// coordinates' derivatives, plus the grid's grooves. A scalar height has no
// tangent-normal rotations to mismatch between faces, and stays attached to
// animated rest space. Derivatives first; where the map's bump and the grooves
// have faded there is nothing to bend.
vec3 finishDx = dFdx(-vViewPosition), finishDy = dFdy(-vViewPosition);
float finishHx = dFdx(finishHeight) + finishSlopeDx, finishHy = dFdy(finishHeight) + finishSlopeDy;
if (finishHx != 0.0 || finishHy != 0.0) {
  vec3 finishR1 = cross(finishDy, normal), finishR2 = cross(normal, finishDx);
  float finishDet = dot(finishDx, finishR1) * faceDirection;
  vec3 finishGradient = sign(finishDet) * (finishHx * finishR1 + finishHy * finishR2);
  normal = normalize(max(abs(finishDet), 0.00000001) * normal - finishGradient);
}
`
    }
    e.s(["FINISH_DECLARATIONS", 0, A, "attachFinish", 0, T, "finishBump", 0, L, "finishLayers", 0, $, "finishRoughness", 0, D, "surfaceFinishKey", 0, M, "useSurfaceDetail", 0, function(t=!0) {
        let i = (0,
        n.useSyncExternalStore)(y, v, () => "loading")
          , o = (0,
        n.useContext)(l.SceneAssetReadiness)
          , s = (0,
        n.useContext)(l.SceneAssetFailures);
        return (0,
        n.useEffect)( () => {
            if (!t)
                return;
            let i = requestAnimationFrame( () => (function() {
                if (p)
                    return;
                p = !0;
                let t = i => (function() {
                    let t, i = new URL(a.DETAIL_SET.url,location.href).href;
                    try {
                        t = e.r(948511)(Worker, {
                            type: "module",
                            name: "Surface detail"
                        })
                    } catch {
                        return d(i)
                    }
                    return new Promise( (e, r) => {
                        t.onmessage = ({data: i}) => {
                            t.terminate(),
                            "error" in i ? r(Error(i.error)) : e(i.data)
                        }
                        ,
                        t.onerror = n => {
                            n.preventDefault(),
                            t.terminate(),
                            d(i).then(e, r)
                        }
                        ,
                        t.postMessage({
                            url: i
                        })
                    }
                    )
                }
                )().then(e => {
                    var t;
                    let i;
                    t = a.DETAIL_SET.size,
                    (i = new r.DataArrayTexture(e,t,t,a.DETAIL_KINDS.length)).name = "Surface detail",
                    i.format = r.RGBAFormat,
                    i.type = r.UnsignedByteType,
                    i.colorSpace = r.NoColorSpace,
                    i.wrapS = i.wrapT = r.RepeatWrapping,
                    i.minFilter = r.LinearMipmapLinearFilter,
                    i.magFilter = r.LinearFilter,
                    i.generateMipmaps = !0,
                    i.anisotropy = 4,
                    i.needsUpdate = !0,
                    h.value = i,
                    x("ready")
                }
                , e => {
                    console.warn(e),
                    "failed" !== m && x("failed"),
                    i + 1 < 8 && setTimeout( () => void t(i + 1), Math.min(6e4, 2e3 * 2 ** i))
                }
                );
                t(0)
            }
            )());
            return () => cancelAnimationFrame(i)
        }
        , [t]),
        (0,
        n.useLayoutEffect)( () => {
            if (!t || !o || "loading" !== i)
                return;
            let e = Symbol("surface detail");
            return o.add(e),
            () => {
                o.delete(e)
            }
        }
        , [t, o, i]),
        (0,
        n.useLayoutEffect)( () => {
            t && "failed" === i && s?.add(a.DETAIL_SET.url)
        }
        , [t, i, s]),
        i
    }
    ], 202771);
    var z = e.i(466348)
      , G = e.i(884079);
    let E = (e, t) => {
        let i = [];
        for (let r = e / 3; r < (e + t) / 3; r++)
            i.push(r);
        return i
    }
    ;
    function _(e) {
        let t = String(e)
          , i = 0x811c9dc5;
        for (let e = 0; e < t.length; e++)
            i = Math.imul(i ^ t.charCodeAt(e), 0x1000193);
        return i >>> 0
    }
    function R(e, t, i) {
        if (e.index)
            throw Error("Grid faces need non-indexed geometry");
        let n = e.attributes.position.count;
        e.attributes.uv || e.setAttribute("uv", new r.Float32BufferAttribute(new Float32Array(2 * n),2));
        let o = {
            geometry: e,
            local: e.attributes.position.array,
            e: i ? Float64Array.from(i.elements) : Float64Array.of(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            param: e.attributes.uv.array
        }
          , a = function(e, t) {
            let {geometry: i} = t
              , r = i.groups
              , n = i.attributes.position.count;
            switch (e.kind) {
            case "box":
                return j(r.length ? r : N(n, 6));
            case "cylinder":
            case "cone":
                return r.map(e => 0 === e.materialIndex ? {
                    triangles: E(e.start, e.count),
                    planar: !1,
                    wrapS: K(t, e.start, e.count)
                } : {
                    triangles: E(e.start, e.count),
                    planar: !0
                });
            case "pyramid":
                return function(e) {
                    let {geometry: t, local: i} = e
                      , r = [];
                    for (let n of t.groups)
                        if (0 === n.materialIndex)
                            for (let t of E(n.start, n.count)) {
                                let[n,o] = [0, 1, 2].map(e => 3 * t + e).sort( (e, t) => i[3 * e + 1] - i[3 * t + 1]).slice(0, 2).sort( (e, t) => e - t)
                                  , a = O(e, n);
                                q(e, [t], a, H(O(e, o), a), Y(J(e, t))),
                                r.push({
                                    triangles: [t],
                                    planar: !0
                                })
                            }
                        else {
                            let t = E(n.start, n.count)
                              , i = V(e, [0, -.5, .5])
                              , o = V(e, [.5, -.5, 0]);
                            q(e, t, i, H(o, i), Y(J(e, t[0]))),
                            r.push({
                                triangles: t,
                                planar: !0
                            })
                        }
                    return r
                }(t);
            case "sphere":
                return [{
                    triangles: E(0, n),
                    planar: !1,
                    wrapS: K(t, 0, n)
                }];
            case "torus":
                return [{
                    triangles: E(0, n),
                    planar: !1,
                    wrapS: 1,
                    wrapT: 1
                }];
            case "prism":
                return function(e) {
                    let {geometry: t, param: i} = e
                      , r = []
                      , n = t.groups.find(e => 0 === e.materialIndex)
                      , o = t.groups.find(e => 1 === e.materialIndex);
                    if (n) {
                        let e = n.count / 2;
                        for (let t of [n.start, n.start + e])
                            r.push({
                                triangles: E(t, e),
                                planar: !0,
                                plane: !0
                            })
                    }
                    if (o) {
                        let t = o.count / 6
                          , n = []
                          , a = []
                          , l = [];
                        for (let i = 0; i < t; i++) {
                            let t = o.start + 6 * i
                              , r = O(e, t);
                            n.push(Y(J(e, t / 3))),
                            a.push(Z(H(O(e, t + 1), r))),
                            l.push(Z(H(O(e, t + 2), r)))
                        }
                        let s = e => W(n[e], n[(e + 1) % t]) >= .82
                          , f = [...Array(t).keys()].filter(e => !s(e))
                          , c = [];
                        if (f.length)
                            for (let e = 0; e < f.length; e++) {
                                let i = [];
                                for (let r = (f[e] + 1) % t; i.push(r),
                                s(r); r = (r + 1) % t)
                                    ;
                                c.push(i)
                            }
                        else
                            c.push([...Array(t).keys()]);
                        for (let e of c) {
                            let t = 0
                              , n = [];
                            for (let r of e) {
                                let e = o.start + 6 * r
                                  , s = t
                                  , f = t + a[r]
                                  , c = l[r]
                                  , u = [s, f, s, f, f, s]
                                  , h = [0, 0, c, 0, c, c];
                                for (let t = 0; t < 6; t++)
                                    i[(e + t) * 2] = u[t],
                                    i[(e + t) * 2 + 1] = h[t];
                                n.push(e / 3, e / 3 + 1),
                                t = f
                            }
                            r.push({
                                triangles: n,
                                planar: 1 === e.length,
                                wrapS: f.length ? void 0 : t
                            })
                        }
                    }
                    return r
                }(t);
            case "lathe":
                return function(e, t) {
                    let {geometry: i, param: r, local: n} = t
                      , o = (e.arc?.[1] ?? 2 * Math.PI) >= 2 * Math.PI - 1e-9 && !e.rise
                      , a = Math.max(...e.profile.map( ([e]) => e), 1e-6)
                      , l = a * a * 1e-12
                      , s = new Map;
                    for (let e of i.groups) {
                        let t = e.materialIndex ?? 0
                          , i = 3 & t
                          , r = s.get(t);
                        r || (r = {
                            triangles: [],
                            planar: i >= G.CAP_START,
                            kind: i
                        },
                        s.set(t, r));
                        for (let t = e.start / 3; t < (e.start + e.count) / 3; t++)
                            r.triangles.push(t)
                    }
                    for (let e of s.values()) {
                        if (e.kind >= G.CAP_START)
                            continue;
                        o && (e.wrapS = a * Math.PI * 2);
                        let s = 1 / 0
                          , f = -1 / 0;
                        for (let o of e.triangles)
                            for (let e = 0; e < 3; e++) {
                                let a = 3 * o + e;
                                n[3 * a] * n[3 * a] + n[3 * a + 2] * n[3 * a + 2] <= l && (t.q ??= new Uint8Array(i.attributes.position.count).fill(1),
                                t.q[a] = 0),
                                s = Math.min(s, r[2 * a + 1]),
                                f = Math.max(f, r[2 * a + 1])
                            }
                        e.kind === G.RUN_CLOSED && (e.wrapT = f - s)
                    }
                    return [...s.values()]
                }(e, t);
            case "coaster":
                return function(e, t, i) {
                    let {geometry: r, param: n} = i
                      , o = r.attributes.position.count;
                    if ("ties" === e)
                        return j(N(o, 6));
                    if (t > 4)
                        return [{
                            triangles: E(0, o),
                            planar: !1,
                            wrapS: 1,
                            wrapT: 1
                        }];
                    let a = new Map;
                    for (let e = 0; e < o / 3; e++) {
                        let i = n[6 * e + 1]
                          , r = n[6 * e + 3]
                          , o = n[6 * e + 5]
                          , l = Math.min(i, r, o)
                          , s = Math.max(i, r, o) - l > .5
                          , f = s ? t - 1 : Math.round(l * t) % t;
                        if (s)
                            for (let t = 0; t < 3; t++)
                                n[6 * e + 2 * t + 1] < .5 && (n[6 * e + 2 * t + 1] += 1);
                        let c = a.get(f);
                        c ? c.push(e) : a.set(f, [e])
                    }
                    return [...a.values()].map(e => ({
                        triangles: e,
                        planar: !1,
                        wrapS: 1
                    }))
                }(e.layer, "whoop-monorail" === e.layout ? 4 : 8, t);
            case "drift-track":
            case "plant":
                return function({local: e, geometry: t}) {
                    let i = new Map;
                    for (let r = 0; r < t.attributes.position.count / 3; r++) {
                        let t = 9 * r
                          , n = e[t + 3] - e[t]
                          , o = e[t + 4] - e[t + 1]
                          , a = e[t + 5] - e[t + 2]
                          , l = e[t + 6] - e[t]
                          , s = e[t + 7] - e[t + 1]
                          , f = e[t + 8] - e[t + 2]
                          , c = [o * f - a * s, a * l - n * f, n * s - o * l]
                          , u = Math.abs(c[0]) >= Math.abs(c[1]) && Math.abs(c[0]) >= Math.abs(c[2]) ? 0 : Math.abs(c[1]) >= Math.abs(c[2]) ? 1 : 2
                          , h = 2 * u + +(c[u] < 0)
                          , d = i.get(h);
                        d ? d.push(r) : i.set(h, [r])
                    }
                    return [...i.values()].map(e => ({
                        triangles: e,
                        planar: !0,
                        plane: !0
                    }))
                }(t)
            }
        }(t, o);
        return {
            planes: (e=0) => {
                var t, i, r;
                let n;
                return t = a,
                i = o,
                r = e,
                n = [],
                t.forEach( (e, t) => {
                    if (!e.planar)
                        return;
                    en.length < 9 * e.triangles.length && (en = new Float64Array(18 * e.triangles.length));
                    let o = 0
                      , a = 0
                      , l = 0;
                    e.triangles.forEach( (e, t) => {
                        let r = B(i, e);
                        en.set(r, 9 * t);
                        let n = r[3] - r[0]
                          , s = r[4] - r[1]
                          , f = r[5] - r[2]
                          , c = r[6] - r[0]
                          , u = r[7] - r[1]
                          , h = r[8] - r[2];
                        o += s * h - f * u,
                        a += f * c - n * h,
                        l += n * u - s * c
                    }
                    );
                    let {normal: s, key: f} = er(o, a, l, en)
                      , [c,u,h] = Y(X(.9 > Math.abs(s[0]) ? [1, 0, 0] : [0, 1, 0], s))
                      , [d,m,p] = X(s, [c, u, h])
                      , g = Array(6 * e.triangles.length)
                      , x = 1 / 0
                      , v = 1 / 0
                      , y = -1 / 0
                      , M = -1 / 0
                      , w = 0
                      , b = en;
                    for (let t = 0; t < e.triangles.length; t++)
                        for (let e = 9 * t; e < 9 * t + 9; e += 3) {
                            let t = b[e] * c + b[e + 1] * u + b[e + 2] * h
                              , i = b[e] * d + b[e + 1] * m + b[e + 2] * p;
                            g[w++] = t,
                            g[w++] = i,
                            t < x && (x = t),
                            t > y && (y = t),
                            i < v && (v = i),
                            i > M && (M = i)
                        }
                    n.push({
                        chart: t,
                        key: `${r}|${f}`,
                        triangles: g,
                        min: [x, v],
                        max: [y, M]
                    })
                }
                ),
                n
            }
            ,
            write: e => (function(e, t, i) {
                let {geometry: n, param: o, q: a} = t
                  , l = i.nominal ?? 1
                  , s = new Uint16Array(4 * n.attributes.position.count)
                  , f = _(i.seed)
                  , c = +!!i.paint
                  , u = Math.min(15, i.kind ?? 0)
                  , h = void 0 === i.floorKind ? u : Math.min(15, i.floorKind);
                e.forEach( (e, r) => {
                    if (e.plane || i.shared?.has(r) && e.planar)
                        return void function(e, t, i, r, n, o, a) {
                            let {normal: l, key: s} = function(e, t) {
                                let i = 0
                                  , r = 0
                                  , n = 0;
                                for (let o of e.triangles) {
                                    let e = B(t, o)
                                      , a = e[3] - e[0]
                                      , l = e[4] - e[1]
                                      , s = e[5] - e[2]
                                      , f = e[6] - e[0]
                                      , c = e[7] - e[1]
                                      , u = e[8] - e[2];
                                    i += l * u - s * c,
                                    r += s * f - a * u,
                                    n += a * c - l * f
                                }
                                return er(i, r, n, O(t, 3 * e.triangles[0]))
                            }(e, t)
                              , f = .9 > Math.abs(l[1]) ? Y(H([0, 1, 0], l.map(e => e * l[1]))) : Y(X(l, [1, 0, 0]))
                              , c = X(f, l)
                              , u = ei(i)
                              , h = 512 * (Math.abs(l[1]) > .7)
                              , d = (l[1] > .7 ? a : o) << 10
                              , m = _(s) >>> 26;
                            for (let o of e.triangles)
                                for (let e = 0; e < 3; e++) {
                                    let a = 3 * o + e;
                                    P(t.local, t.e, a, U, 0),
                                    t.param[2 * a] = W(U, c) / i,
                                    t.param[2 * a + 1] = W(U, f) / i,
                                    r[4 * a] = u,
                                    r[4 * a + 1] = u,
                                    r[4 * a + 2] = h | d | n << 14 | 32768,
                                    r[4 * a + 3] = m << 10
                                }
                        }(e, t, l, s, c, u, h);
                    let n = Math.imul(f ^ Math.imul(r + 1, 0x9e3779b9), 0x85ebca6b) >>> 0 >>> 26
                      , d = function(e, t, i) {
                        let {param: r, q: n} = t
                          , o = 0
                          , a = 0
                          , l = 0
                          , s = 0
                          , f = 0
                          , c = 1 / 0
                          , u = -1 / 0
                          , h = 1 / 0
                          , d = -1 / 0;
                        for (let i of e.triangles) {
                            let m = 3 * i
                              , p = 0
                              , g = 0;
                            for (let e = 0; e < 3; e++)
                                ee[e] = r[(m + e) * 2],
                                et[e] = r[(m + e) * 2 + 1],
                                !n || n[m + e] ? g += ee[e] : p++;
                            Q(ee, e.wrapS),
                            Q(et, e.wrapT);
                            for (let e = 0; e < 3; e++)
                                h = Math.min(h, et[e]),
                                d = Math.max(d, et[e]),
                                (!n || n[m + e]) && (c = Math.min(c, ee[e]),
                                u = Math.max(u, ee[e]));
                            let x = B(t, i)
                              , v = x[3] - x[0]
                              , y = x[4] - x[1]
                              , M = x[5] - x[2]
                              , w = x[6] - x[0]
                              , b = x[7] - x[1]
                              , S = x[8] - x[2];
                            if (l += y * S - M * b,
                            s += M * w - v * S,
                            f += v * b - y * w,
                            p > 1)
                                continue;
                            if (1 === p)
                                for (let e = 0; e < 3; e++)
                                    n[m + e] || (ee[e] = g / 2);
                            let F = ee[1] - ee[0]
                              , k = et[1] - et[0]
                              , T = ee[2] - ee[0]
                              , A = et[2] - et[0]
                              , C = F * A - T * k;
                            if (1e-12 > Math.abs(C))
                                continue;
                            let $ = (v * A - w * k) / C
                              , D = (y * A - b * k) / C
                              , L = (M * A - S * k) / C
                              , z = (w * F - v * T) / C
                              , G = (b * F - y * T) / C
                              , E = (S * F - M * T) / C;
                            o = Math.max(o, Math.sqrt($ * $ + D * D + L * L)),
                            a = Math.max(a, Math.sqrt(z * z + G * G + E * E))
                        }
                        Number.isFinite(c) || (c = 0,
                        u = 1),
                        Number.isFinite(h) || (h = 0,
                        d = 1);
                        let m = e.wrapS ?? Math.max(u - c, 1e-9)
                          , p = e.wrapT ?? Math.max(d - h, 1e-9);
                        e.wrapS && (c = Math.floor(c / e.wrapS + 1e-9) * e.wrapS),
                        e.wrapT && (h = Math.floor(h / e.wrapT + 1e-9) * e.wrapT);
                        let g = o * m
                          , x = a * p
                          , v = Math.max(1, Math.floor(g / i + .5))
                          , y = Math.max(1, Math.floor(x / i + .5))
                          , M = Math.sqrt(l * l + s * s + f * f) || 1
                          , w = Math.abs(s) / M;
                        return {
                            floor: e.planar && w > .7,
                            up: s / M > .7,
                            countS: v,
                            countT: y,
                            tileS: g / v,
                            tileT: x / y,
                            minS: c,
                            spanS: m,
                            minT: h,
                            spanT: p
                        }
                    }(e, t, l)
                      , m = ei(d.tileS)
                      , p = ei(d.tileT)
                      , g = Math.min(d.countS, 511) | 512 * !!d.floor | (d.up ? h : u) << 10 | c << 14
                      , x = Math.min(d.countT, 1023) | n << 10;
                    for (let t of e.triangles) {
                        let i = 3 * t;
                        for (let e = 0; e < 3; e++)
                            ee[e] = o[(i + e) * 2],
                            et[e] = o[(i + e) * 2 + 1];
                        Q(ee, e.wrapS),
                        Q(et, e.wrapT);
                        for (let e = 0; e < 3; e++) {
                            let t = i + e
                              , r = a ? a[t] : 1;
                            o[2 * t] = (ee[e] - d.minS) / d.spanS * d.countS * r,
                            o[2 * t + 1] = (et[e] - d.minT) / d.spanT * d.countT,
                            s[4 * t] = m,
                            s[4 * t + 1] = p,
                            s[4 * t + 2] = g | r << 15,
                            s[4 * t + 3] = x
                        }
                    }
                }
                ),
                n.attributes.uv.needsUpdate = !0,
                n.setAttribute("gridFace", new r.BufferAttribute(s,4))
            }
            )(a, o, e)
        }
    }
    function P(e, t, i, r, n) {
        let o = e[3 * i]
          , a = e[3 * i + 1]
          , l = e[3 * i + 2];
        r[n] = t[0] * o + t[4] * a + t[8] * l + t[12],
        r[n + 1] = t[1] * o + t[5] * a + t[9] * l + t[13],
        r[n + 2] = t[2] * o + t[6] * a + t[10] * l + t[14]
    }
    let I = new Float64Array(9);
    function B({local: e, e: t}, i) {
        return P(e, t, 3 * i, I, 0),
        P(e, t, 3 * i + 1, I, 3),
        P(e, t, 3 * i + 2, I, 6),
        I
    }
    let U = new Float64Array(3);
    function O({local: e, e: t}, i) {
        return P(e, t, i, U, 0),
        [U[0], U[1], U[2]]
    }
    function V({e}, t) {
        return P(Float32Array.from(t), e, 0, U, 0),
        [U[0], U[1], U[2]]
    }
    function N(e, t) {
        let i = [];
        for (let r = 0; r < e; r += t)
            i.push({
                start: r,
                count: t
            });
        return i
    }
    function j(e) {
        return e.map(e => ({
            triangles: E(e.start, e.count),
            planar: !0
        }))
    }
    function K(e, t, i) {
        let {local: r} = e
          , n = 0;
        for (let e = t; e < t + i; e++)
            n = Math.max(n, r[3 * e] * r[3 * e] + r[3 * e + 2] * r[3 * e + 2]);
        for (let o = t; o < t + i; o++)
            r[3 * o] * r[3 * o] + r[3 * o + 2] * r[3 * o + 2] > 1e-12 * n || (e.q ??= new Uint8Array(e.geometry.attributes.position.count).fill(1),
            e.q[o] = 0);
        return 1
    }
    function q(e, t, i, r, n) {
        let o = Y(r)
          , a = Y(X(n, o));
        for (let r of t)
            for (let t = 0; t < 3; t++) {
                let n = 3 * r + t;
                P(e.local, e.e, n, U, 0);
                let l = U[0] - i[0]
                  , s = U[1] - i[1]
                  , f = U[2] - i[2];
                e.param[2 * n] = l * o[0] + s * o[1] + f * o[2],
                e.param[2 * n + 1] = l * a[0] + s * a[1] + f * a[2]
            }
    }
    let H = (e, t) => [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
      , W = (e, t) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
      , X = (e, t) => [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
      , Z = e => Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2])
      , Y = e => {
        let t = Z(e) || 1;
        return [e[0] / t, e[1] / t, e[2] / t]
    }
    ;
    function J(e, t) {
        let i = B(e, t);
        return X([i[3] - i[0], i[4] - i[1], i[5] - i[2]], [i[6] - i[0], i[7] - i[1], i[8] - i[2]])
    }
    function Q(e, t) {
        if (!t)
            return;
        let i = Math.min(e[0], e[1], e[2]);
        if (!(Math.max(e[0], e[1], e[2]) - i <= t / 2))
            for (let r = 0; r < 3; r++)
                e[r] < i + t / 2 && (e[r] += t)
    }
    let ee = [0, 0, 0]
      , et = [0, 0, 0]
      , ei = e => Math.min(65535, Math.max(1, Math.round(1e4 * e)));
    function er(e, t, i, r) {
        let n = Math.sqrt(e * e + t * t + i * i) || 1
          , o = [Math.round(e / n * 1e3), Math.round(t / n * 1e3), Math.round(i / n * 1e3)]
          , a = Y(o);
        return {
            normal: a,
            key: `${o.join(",")},${Math.round(1e3 * W(a, r))}`
        }
    }
    let en = new Float64Array(576)
      , eo = (e, t, i) => (t[0] - e[0]) * (i[1] - e[1]) - (t[1] - e[1]) * (i[0] - e[0])
      , ea = new WeakMap;
    e.s(["GRID_TILE_UNITS", 0, 1e4, "paintedColor", 0, function(e) {
        let t = new r.Color(e)
          , i = Math.max(t.r, t.g, t.b)
          , n = Math.min(t.r, t.g, t.b);
        return i - n > .045 && (i - n) / Math.max(i, .001) > .22
    }
    , "partGridPlanes", 0, function(e, t, i) {
        let r = `${i}|${t.elements.join(",")}`
          , n = ea.get(e);
        if (n?.key === r)
            return n.planes;
        let o = (0,
        z.objectGeometry)(e);
        if (o.index) {
            let e = o.toNonIndexed();
            o.dispose(),
            o = e
        }
        let a = R(o, e, t).planes(i);
        return o.dispose(),
        ea.set(e, {
            key: r,
            planes: a
        }),
        a
    }
    , "prepareGridFaces", 0, R, "sharedGridCharts", 0, function(e) {
        let t = new Map;
        e.forEach( ({planes: e}, i) => {
            for (let r of e) {
                let e = t.get(r.key);
                e ? e.push({
                    part: i,
                    plane: r
                }) : t.set(r.key, [{
                    part: i,
                    plane: r
                }])
            }
        }
        );
        let i = new Map
          , r = (t, r) => {
            let n = e[t].id
              , o = i.get(n) ?? new Set;
            o.add(r),
            i.set(n, o)
        }
        ;
        for (let e of t.values())
            if (!(e.length < 2)) {
                e.sort( (e, t) => e.plane.min[0] - t.plane.min[0]);
                for (let t = 0; t < e.length; t++) {
                    let i = e[t];
                    for (let n = t + 1; n < e.length && e[n].plane.min[0] < i.plane.max[0]; n++) {
                        let t = e[n];
                        i.part === t.part || t.plane.min[1] >= i.plane.max[1] || i.plane.min[1] >= t.plane.max[1] || function(e, t) {
                            for (let i = 0; i < e.length; i += 6) {
                                let r = [[e[i], e[i + 1]], [e[i + 2], e[i + 3]], [e[i + 4], e[i + 5]]];
                                for (let e = 0; e < t.length; e += 6)
                                    if (function(e) {
                                        let t = 0;
                                        for (let i = 0; i < e.length; i++) {
                                            let r = e[i]
                                              , n = e[(i + 1) % e.length];
                                            t += r[0] * n[1] - n[0] * r[1]
                                        }
                                        return Math.abs(t) / 2
                                    }(function(e, t) {
                                        let i = e
                                          , r = Math.sign(eo(t[0], t[1], t[2]));
                                        if (!r)
                                            return [];
                                        for (let e = 0; e < t.length && i.length; e++) {
                                            let n = t[e]
                                              , o = t[(e + 1) % t.length]
                                              , a = i
                                              , l = e => r * eo(n, o, e);
                                            i = [];
                                            for (let e = 0; e < a.length; e++) {
                                                let t = a[e]
                                                  , r = a[(e + 1) % a.length]
                                                  , n = l(t)
                                                  , o = l(r);
                                                if (n >= 0 && i.push(t),
                                                n * o < 0) {
                                                    let e = n / (n - o);
                                                    i.push([t[0] + (r[0] - t[0]) * e, t[1] + (r[1] - t[1]) * e])
                                                }
                                            }
                                        }
                                        return i
                                    }(r, [[t[e], t[e + 1]], [t[e + 2], t[e + 3]], [t[e + 4], t[e + 5]]])) > 1e-4)
                                        return !0
                            }
                            return !1
                        }(i.plane.triangles, t.plane.triangles) && (r(i.part, i.plane.chart),
                        r(t.part, t.plane.chart))
                    }
                }
            }
        return i
    }
    ], 338168);
    let el = `
float gridLine(vec2 p, float width) {
  vec2 footprint = max(fwidth(p), vec2(0.0001));
  vec2 dist = abs(fract(p - 0.5) - 0.5);
  vec2 line = 1.0 - smoothstep(vec2(width) - footprint * 0.5, vec2(width) + footprint * 0.5, dist);
  line *= 1.0 - smoothstep(vec2(0.15), vec2(0.65), footprint);
  return max(line.x, line.y);
}`
      , es = `
float gridLines(vec2 p, vec2 width) {
  vec4 slope = vec4(dFdx(p), dFdy(p));
  vec2 deriv = max(vec2(length(slope.xz), length(slope.yw)), vec2(0.00001));
  vec2 drawWidth = clamp(width, deriv, vec2(0.5));
  vec2 aa = deriv * 1.5;
  vec2 cell = 1.0 - abs(fract(p) * 2.0 - 1.0);
  vec2 line = smoothstep(drawWidth + aa, drawWidth - aa, cell);
  line *= clamp(width / drawWidth, 0.0, 1.0);
  line = mix(line, width, clamp(deriv * 2.0 - 1.0, 0.0, 1.0));
  return mix(line.x, 1.0, line.y);
}
float gridLine(vec2 p, float width) { return gridLines(p, vec2(width)); }
// The same lines from derivatives the caller already has: cheaper, and safe inside a branch.
float gridLinesAt(vec2 p, vec2 width, vec2 deriv) {
  vec2 drawWidth = clamp(width, deriv, vec2(0.5));
  vec2 aa = deriv * 1.5;
  vec2 cell = 1.0 - abs(fract(p) * 2.0 - 1.0);
  vec2 line = smoothstep(drawWidth + aa, drawWidth - aa, cell);
  line *= clamp(width / drawWidth, 0.0, 1.0);
  line = mix(line, width, clamp(deriv * 2.0 - 1.0, 0.0, 1.0));
  return mix(line.x, 1.0, line.y);
}`
      , ef = `
float gridHash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
// Signed per-cell tone in -0.5..0.5, gone before a cell is a few pixels wide.
float gridTileAt(vec2 p, float seed, vec2 footprint) {
  return (gridHash(floor(p) + seed) - 0.5) * (1.0 - smoothstep(0.08, 0.3, max(footprint.x, footprint.y)));
}
float gridTile(vec2 p, float seed) { return gridTileAt(p, seed, fwidth(p)); }`;
    e.s(["gridMaterial", 0, function({mapping: e, frame: t="world", vertexColors: i=!0, axes: n, style: o, finish: l, lines: s=!0, tiles: f=!0}) {
        let c = new r.MeshStandardMaterial({
            vertexColors: i,
            roughness: o?.roughness ?? 1,
            metalness: o?.metalness ?? 0,
            dithering: !!l
        })
          , u = "face" === e
          , h = !!l && a.DETAIL_KIND_INFO[l.kind].grid
          , d = !!l && "low" !== l.quality
          , m = new r.Color(n?.color ?? "#ffffff");
        return c.onBeforeCompile = e => {
            o && (e.uniforms.themeGridScale = {
                value: o.scale
            },
            e.uniforms.themeGridMinor = {
                value: o.minor
            },
            e.uniforms.themeGridMajor = {
                value: o.major
            },
            e.uniforms.themeGridColor = {
                value: new r.Color(o.color)
            }),
            l && T(e);
            let i = u ? `varying vec2 vGridUv; varying vec2 vGridTile; varying vec4 vGridInfo;${l ? " varying float vGridKind;" : ""}` : "varying vec2 vMetricGrid;";
            if (e.vertexShader = e.vertexShader.replace("#include <common>", `#include <common>
${i}
${u ? "attribute vec4 gridFace;" : ""}
${l && "object" === t ? "varying vec3 vFinishPosition;" : ""}`).replace("#include <begin_vertex>", `#include <begin_vertex>
${u ? `vGridUv = uv;
// gridFace: tile sizes (0.1 mm), then count U | floor | kind | paint | axis tip, count V | seed.
vec4 gridPacked = floor(gridFace + 0.5);
int gridU = int(gridPacked.z), gridV = int(gridPacked.w);
vGridTile = gridPacked.xy / 10000.0;
vGridInfo = vec4(float((gridU >> 15) & 1), float((gridU >> 9) & 1), float((gridU >> 14) & 1), float(gridV >> 10) / 63.0);
${l ? "vGridKind = float((gridU >> 10) & 15);" : ""}` : "vMetricGrid = (modelMatrix * vec4(position, 1.0)).xz;"}
${l && "object" === t ? "vFinishPosition = position;" : ""}`),
            e.fragmentShader = e.fragmentShader.replace("#include <common>", `#include <common>
${i}
${o ? "uniform float themeGridScale; uniform float themeGridMinor; uniform float themeGridMajor; uniform vec3 themeGridColor;" : ""}
${l ? `${A}
${"object" === t ? "varying vec3 vFinishPosition;" : "#define vFinishPosition (cameraPosition + (vec4(-vViewPosition, 0.0) * viewMatrix).xyz)"}` : ""}
${u || l ? es : el}
${ef}`).replace("#include <color_fragment>", `#include <color_fragment>
${u ? function({style: e, finish: t, fine: i, lines: r, tiles: n}) {
                return `
// Tiles in face units: whole tiles per face, so borders land on its edges.
// U is projective on wrapped surfaces, so lines meet exactly at an axis tip.
float gridQ = clamp(vGridInfo.x, 0.001, 1.0);
vec2 gridCell = vec2(vGridUv.x / gridQ, vGridUv.y);
vec2 gridTileSize = max(vGridTile, vec2(0.001));
float gridFloor = floor(vGridInfo.y + 0.5);
float gridPaint = clamp(floor(vGridInfo.z + 0.5), 0.0, 1.0);
float gridSeed = clamp(vGridInfo.w, 0.0, 1.0);
vec2 gridMetric = gridCell * gridTileSize;
// Derivatives once, before any branch; every layer below reuses them.
vec2 gridDx = dFdx(gridCell), gridDy = dFdy(gridCell);
vec2 gridDeriv = max(vec2(length(vec2(gridDx.x, gridDy.x)), length(vec2(gridDx.y, gridDy.y))), vec2(0.00001));
vec2 gridSpread = abs(gridDx) + abs(gridDy);
float gridFootprint = max(length(gridDx * gridTileSize), length(gridDy * gridTileSize));
${t ? $(t, {
                    position: "vFinishPosition",
                    detail: "gridMetric + gridSeed * vec2(37.0, 61.0)",
                    cell: "gridCell",
                    tile: "gridTileSize",
                    footprint: "gridFootprint",
                    paint: "gridPaint",
                    kind: "vGridKind"
                }) : ""}
// Borders a quarter tile at most, so thin trims keep a face; tiles under ~0.2 m
// (railings, trims) fade theirs instead of turning into solid outline.
${r ? `vec2 gridBorderWidth = min(vec2(0.016) / gridTileSize, vec2(0.25));
float gridBorder = gridLinesAt(gridCell, gridBorderWidth, gridDeriv) * smoothstep(0.06, 0.2, min(gridTileSize.x, gridTileSize.y));
// Floors and ceilings: a faint quarter-tile sub-grid, near only.
float gridSub = 0.0;
if (gridFloor > 0.5 && gridFootprint < 0.012)
  gridSub = gridLinesAt(gridCell * 4.0, min(vec2(0.006) / (gridTileSize * 0.25), vec2(0.2)), gridDeriv * 4.0)
    * (1.0 - smoothstep(0.004, 0.012, gridFootprint));` : `// No lines: the editor draws its own grid over the bare surface.
float gridBorder = 0.0;
float gridSub = 0.0;`}
${t ? `// Asphalt takes no grid: no lines, grooves or tile tones.
gridBorder *= finishGrid;
gridSub *= finishGrid;` : ""}
${n ? `// Each face and each tile gets its own faint tone, like the per-face lightmaps
// of a Source map: neighbours read apart without any blotches.
float gridFaceTone = gridHash(vec2(gridSeed * 64.0, 17.0)) - 0.5;
float gridPanel = gridTileAt(gridCell, 3.0 + gridSeed * 64.0, gridSpread)${t ? " * finishGrid" : ""};
diffuseColor.rgb *= 1.0 + gridFaceTone * 0.06 + gridPanel * mix(0.05, 0.035, gridPaint);` : "// Untiled: one plain colour under the finish, with no face or tile tones."}
${i ? `// Borders are cut, not painted: a shallow groove the light can catch up close.
finishHeight -= gridBorder * 0.0018 * (1.0 - smoothstep(0.003, 0.012, gridFootprint));` : ""}
// Lines are lighter than the surface: warm white on paint, a brighter shade of
// concrete or charcoal, held below bloom in direct sun.
vec3 gridInk = ${e ? "themeGridColor" : "gridPaint > 0.5 ? mix(diffuseColor.rgb, vec3(0.86, 0.76, 0.66), 0.72) : min(diffuseColor.rgb * 1.5 + 0.09, vec3(0.75))"};
float gridStrength = ${e ? "clamp(themeGridMajor * 2.2, 0.0, 0.9)" : "0.8"};
float gridFaint = ${e ? "clamp(themeGridMinor * 3.0 + 0.1, 0.0, 0.7)" : "0.35"};
diffuseColor.rgb = mix(diffuseColor.rgb, gridInk, clamp(max(gridBorder * gridStrength, gridSub * gridFaint), 0.0, 1.0));
`
            }({
                style: o,
                finish: l,
                fine: d,
                lines: s && f,
                tiles: f
            }) : function({style: e, finish: t, flight: i, fine: r, axes: n, axisColor: o, lines: a}) {
                let[l,s] = i ? ["0.02", "0.008"] : t ? ["0.024", "0.024"] : ["0.012", "0.012"];
                return `
vec2 gridMetric = vMetricGrid;
vec2 gridCell = vMetricGrid${e ? " * themeGridScale" : ""};
float gridFootprint = max(length(dFdx(gridMetric)), length(dFdy(gridMetric)));
${t ? $(t, {
                    position: "vFinishPosition",
                    detail: "gridMetric",
                    cell: "gridCell",
                    tile: `vec2(${e ? "1.0 / themeGridScale" : "1.0"})`,
                    footprint: "gridFootprint",
                    paint: "0.0",
                    kind: {
                        own: t.kind
                    }
                }) : ""}
${a ? `float minorGrid = gridLine(gridCell, ${l});
float majorGrid = gridLine(gridCell / 5.0, ${s});
float subGrid = ${i ? "gridLine(gridCell * 4.0, 0.024) * (1.0 - smoothstep(0.004, 0.012, gridFootprint))" : "0.0"};` : `// No lines: the editor draws its own grid over the bare surface.
float minorGrid = 0.0;
float majorGrid = 0.0;
float subGrid = 0.0;`}
${t && !i ? "minorGrid = 0.0; majorGrid = 0.0; // Asphalt have no construction grid." : ""}
${i ? `float gridPanel = gridTile(gridCell, 1.0);
float gridSlab = gridTile(gridCell / 5.0, 11.0);
// Tiles and slabs carry the tonal variation.
diffuseColor.rgb *= 1.0 + gridPanel * 0.045 + gridSlab * 0.075;` : ""}
${r && i ? `// Seams are cut, not painted: a shallow groove the light can catch up close.
// The bevel fades with pixel footprint, long before it could sparkle in FPV.
finishHeight -= minorGrid * 0.0016 * (1.0 - smoothstep(0.003, 0.012, gridFootprint))
  + majorGrid * 0.0035 * (1.0 - smoothstep(0.008, 0.04, gridFootprint));` : ""}
${e ? e.floorMix ? "diffuseColor.rgb = mix(diffuseColor.rgb, themeGridColor, max(max(minorGrid * themeGridMinor, majorGrid * themeGridMajor), subGrid * themeGridMinor * 0.6));" : i ? "diffuseColor.rgb *= 1.0 + minorGrid * themeGridMinor * 2.5 + majorGrid * themeGridMajor * 1.6 + subGrid * themeGridMinor;" : "diffuseColor.rgb *= 1.0 - minorGrid * themeGridMinor - majorGrid * themeGridMajor;" : i ? "diffuseColor.rgb *= 1.0 + minorGrid * 0.24 + majorGrid * 0.3 + subGrid * 0.1;" : `diffuseColor.rgb *= 1.0 - minorGrid * ${t ? "0.2" : "0.18"} - majorGrid * ${t ? "0.34" : "0.3"};`}
${n ? `
vec2 axisP = vMetricGrid - vec2(${n.center.map(e => e.toFixed(3)).join(",")});
vec2 axisAA = max(fwidth(axisP), vec2(0.001));
vec2 axisLine = 1.0 - smoothstep(vec2(${(n.width / 2).toFixed(3)}) - axisAA, vec2(${(n.width / 2).toFixed(3)}) + axisAA, abs(axisP));
vec2 insideCourt = 1.0 - smoothstep(vec2(${n.halfExtents.map(e => e.toFixed(3)).join(",")}) - axisAA, vec2(${n.halfExtents.map(e => e.toFixed(3)).join(",")}), abs(axisP));
float axisMask = max(axisLine.x * insideCourt.y, axisLine.y * insideCourt.x);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(${o.toArray().map(e => e.toFixed(5)).join(",")}), axisMask);
` : ""}
`
            }({
                style: o,
                finish: l,
                flight: h,
                fine: d,
                axes: n,
                axisColor: m,
                lines: s
            })}`),
            l) {
                e.fragmentShader = e.fragmentShader.replace("#include <roughnessmap_fragment>", `#include <roughnessmap_fragment>
${D(l)}`);
                let t = L(l);
                t && (e.fragmentShader = e.fragmentShader.replace("#include <normal_fragment_maps>", `#include <normal_fragment_maps>
${t}`))
            }
        }
        ,
        c.customProgramCacheKey = () => `grid-${e}-${t}-${JSON.stringify(n)}-${o ? o.floorMix ? "theme-mix" : "theme-multiply" : "authored"}-${M(l, u)}${s ? "" : "-bare"}${f ? "" : "-untiled"}-v12`,
        c
    }
    ], 694835)
}
, 666259, e => {
    "use strict";
    var t = e.i(190072)
      , i = e.i(128921)
      , r = e.i(694835)
      , n = e.i(202771)
      , o = e.i(125002)
      , a = e.i(391810)
      , l = e.i(85058);
    let s = new Map
      , f = new Map
      , c = new t.Color("#ffd7a1");
    function u(e) {
        return `${e}:${(0,
        o.surfaceTexturesInstalled)(e) ? "pack" : "canvas"}`
    }
    function h(e) {
        let t = u(e);
        if (s.has(t))
            return s.get(t) ?? null;
        let r = i.SURFACE_TEXTURES[e]
          , n = r ? r() : null;
        return s.set(t, n),
        n
    }
    function d(e, i, r) {
        let n = h(e)
          , o = new t.MeshStandardMaterial({
            vertexColors: r,
            dithering: !0,
            roughness: n?.roughness ?? .9,
            metalness: n?.metalness ?? 0,
            bumpScale: n?.bumpScale ?? 0,
            normalScale: new t.Vector2(n?.normalScale ?? 1,n?.normalScale ?? 1),
            envMapIntensity: n?.envMapIntensity ?? .85
        });
        return ("plastic" === e || "skid" === e || "stain" === e) && ((0,
        l.polygonOffsetByDepth)(o, [-1, -1], [-2, 0]),
        o.onBeforeCompile = e => {
            e.vertexShader = e.vertexShader.replace("#include <logdepthbuf_vertex>", `#include <logdepthbuf_vertex>${(0,
            l.reversedDepthPull)(2e-4)}`),
            e.fragmentShader = e.fragmentShader.replace("#include <logdepthbuf_fragment>", `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	{
		float logDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
		gl_FragDepth = logDepth - 0.0002 - 1.5 * fwidth( logDepth );
	}
#endif
`)
        }
        ,
        o.customProgramCacheKey = () => "overlay-depth-bias"),
        n?.map && (o.map = n.map),
        n?.roughnessMap && (o.roughnessMap = n.roughnessMap),
        n?.bumpMap && (o.bumpMap = n.bumpMap),
        n?.normalMap && (o.normalMap = n.normalMap),
        n?.alphaTest && (o.alphaTest = n.alphaTest,
        o.transparent = !1,
        o.side = t.DoubleSide),
        i > 0 && n?.emissiveMap && (o.emissiveMap = n.emissiveMap,
        o.emissive = c,
        o.emissiveIntensity = 2.2 * i),
        o
    }
    e.s(["propMaterial", 0, function(e, i=!1) {
        let r = `prop:${u(e)}:${i}`
          , n = f.get(r);
        if (n)
            return n;
        let o = "emissive" === e ? new t.MeshBasicMaterial({
            vertexColors: i,
            toneMapped: !1
        }) : d(e, 0, i);
        return f.set(r, o),
        o
    }
    , "surfaceMaterial", 0, function(e, i=0, o, l, s) {
        let c = "windows" === e ? i : 0
          , h = s && "emissive" !== e ? s : void 0
          , m = `${u(e)}:${c}:${"grid" === e && o ? JSON.stringify(o) : "authored"}:${"grid" === e ? (0,
        n.surfaceFinishKey)(l) : "plain"}${h ? `:contact${h.cover ? "-cover" : ""}` : ""}`
          , p = f.get(m);
        if (p)
            return p;
        let g = "grid" === e ? (0,
        r.gridMaterial)({
            mapping: "face",
            style: o,
            finish: l
        }) : "emissive" === e ? new t.MeshBasicMaterial({
            vertexColors: !0,
            toneMapped: !1
        }) : d(e, c, !0);
        return h && (0,
        a.applyContactShading)(g, "object", h.cover),
        f.set(m, g),
        g
    }
    , "surfaceTile", 0, function(e) {
        return "grid" === e ? 1 : h(e)?.tile ?? 2
    }
    ])
}
, 708374, e => {
    "use strict";
    var t = e.i(843476)
      , i = e.i(271645)
      , r = e.i(190072)
      , n = e.i(552260)
      , o = e.i(471646)
      , a = e.i(666259)
      , l = e.i(268795)
      , s = e.i(244050)
      , f = e.i(252497)
      , c = e.i(338168)
      , u = e.i(814966)
      , h = e.i(202771)
      , d = e.i(216339)
      , m = e.i(391810);
    let p = {
        kind: "box"
    }
      , g = new r.Euler
      , x = new r.Quaternion
      , v = new r.Vector3
      , y = new r.Vector3(1,1,1)
      , M = new r.Matrix4
      , w = new r.Color;
    function b(e, t, i="height") {
        let n = e.attributes.position
          , o = e.attributes.normal
          , a = n.count
          , l = new Float32Array(3 * a)
          , s = "height" === i;
        for (let e = 0; e < a; e++) {
            let i = n.getY(e)
              , r = o.getY(e)
              , a = 1 - Math.max(0, r)
              , f = Math.max(.25, 1 - (s ? .52 * a * Math.exp(-Math.max(0, i) / 3.1) : 0) - .36 * Math.max(0, -r));
            l[3 * e] = t.r * f,
            l[3 * e + 1] = t.g * f,
            l[3 * e + 2] = t.b * f
        }
        e.setAttribute("color", new r.BufferAttribute(l,3))
    }
    function S(e, t) {
        return g.set(e.rotation[0], e.rotation[1], e.rotation[2]),
        x.setFromEuler(g),
        v.set(e.position[0], e.position[1], e.position[2]),
        t.compose(v, x, y)
    }
    function F(e, t) {
        return g.set(...e.rotation),
        x.setFromEuler(g),
        v.set(...e.position),
        t.compose(v, x, y)
    }
    e.s(["StaticGeometry", 0, function({boxes: e, prisms: g, environment: x, shadows: v, quality: y, authored: k, terrain: T}) {
        let A = (0,
        s.useSceneEnvironmentPalette)()
          , {paintRoughness: C, contact: $, cover: D} = (0,
        d.useWorldLook)();
        (0,
        h.useSurfaceDetail)(!!y);
        let L = (0,
        i.useMemo)( () => {
            let t, i = "grid" === x.ground.surface ? (0,
            l.environmentGridStyle)(A) : void 0, s = y ? {
                kind: "plaster",
                quality: y,
                paintRoughness: C
            } : void 0, h = new Map;
            if (e.forEach( (e, t) => h.set(e, k?.boxes[t]?.color ?? e.color)),
            g?.forEach( (e, t) => h.set(e, k?.prisms?.[t]?.color ?? e.color)),
            "surface" === $) {
                var d;
                let i = [...e, ...g ?? []]
                  , n = new m.ContactField((d = g ?? [],
                [...e.map(e => ({
                    matrix: S(e, new r.Matrix4).scale(new r.Vector3(2 * e.halfExtents[0],2 * e.halfExtents[1],2 * e.halfExtents[2])),
                    shape: {
                        kind: "box"
                    }
                })), ...d.map(e => ({
                    matrix: F(e, new r.Matrix4),
                    shape: {
                        kind: "prism",
                        points: e.points,
                        depth: e.depth
                    }
                }))]),T ? (0,
                o.createHeightSampler)(T) : 0);
                t = new Map(i.map( (e, t) => [e, n.receiver(t)]))
            }
            let v = new Map;
            for (let t of e) {
                let e = v.get(t.surface);
                e ? e.push(t) : v.set(t.surface, [t])
            }
            for (let e of g ?? [])
                v.has(e.surface) || v.set(e.surface, []);
            let L = [];
            for (let[e,o] of v) {
                let l = function(e, t, i, o, l, s, h, d, g=!1) {
                    let x = []
                      , v = (0,
                    a.surfaceTile)(e)
                      , y = d && "emissive" !== e ? d : void 0
                      , k = "grid" === e
                      , T = 1 / (l?.scale ?? 1);
                    if (t.forEach( (t, i) => {
                        let n = 2 * t.halfExtents[0]
                          , o = 2 * t.halfExtents[1]
                          , a = 2 * t.halfExtents[2];
                        S(t, M);
                        let l = new r.BoxGeometry(n,o,a);
                        if (k || function(e, t, i, r, n, o, a) {
                            let l = e.attributes.uv
                              , s = [[r / n, i / n], [r / n, i / n], [t / n, r / n], [t / n, r / n], [t / n, i / n], [t / n, i / n]];
                            for (let e = 0; e < 6; e++) {
                                let[t,i] = s[e];
                                for (let r = 0; r < 4; r++) {
                                    let n = 4 * e + r;
                                    l.setXY(n, l.getX(n) * t + o, l.getY(n) * i + a)
                                }
                            }
                            l.needsUpdate = !0
                        }(l, n, o, a, t.uvScale ?? v, .618 * i % 1 * 4, .382 * i % 1 * 4),
                        k || y) {
                            let e = l.toNonIndexed();
                            l.dispose(),
                            l = e
                        }
                        k && (0,
                        c.prepareGridFaces)(l, p, M).write({
                            nominal: T,
                            seed: `box:${i}`,
                            paint: (0,
                            c.paintedColor)(h?.get(t) ?? t.color)
                        }),
                        l.applyMatrix4(M),
                        w.set(t.color),
                        "grid" !== e && "flat" !== e && w.convertSRGBToLinear(),
                        b(l, w, d ? "surface" : "height"),
                        y && (0,
                        m.writeContact)(l, y.get(t)),
                        x.push(l)
                    }
                    ),
                    o.forEach( (e, t) => {
                        let i = new r.Shape;
                        e.points.forEach( ([e,t], r) => 0 === r ? i.moveTo(e, t) : i.lineTo(e, t)),
                        i.closePath();
                        let n = new r.ExtrudeGeometry(i,{
                            depth: e.depth,
                            bevelEnabled: !1,
                            steps: 1
                        });
                        n.translate(0, 0, -e.depth / 2),
                        F(e, M),
                        k && (0,
                        c.prepareGridFaces)(n, {
                            kind: "prism",
                            points: e.points,
                            depth: e.depth
                        }, M).write({
                            nominal: T,
                            seed: `prism:${t}`,
                            paint: (0,
                            c.paintedColor)(h?.get(e) ?? e.color)
                        }),
                        n.applyMatrix4(M),
                        w.set(e.color),
                        b(n, w, d ? "surface" : "height"),
                        y && (0,
                        m.writeContact)(n, y.get(e)),
                        x.push(n)
                    }
                    ),
                    0 === x.length)
                        return null;
                    let A = o.length > 0 ? x.map(e => e.index ? e.toNonIndexed() : e) : x
                      , C = (0,
                    n.mergeGeometries)(A, !1);
                    for (let e = 0; e < A.length; e++)
                        A[e] !== x[e] && A[e].dispose();
                    for (let e of x)
                        e.dispose();
                    if (!C)
                        return null;
                    C.computeBoundingSphere();
                    let $ = new r.Mesh(C,(0,
                    a.surfaceMaterial)(e, i.windowGlow, l, s, y && {
                        cover: g
                    }));
                    return $.matrixAutoUpdate = !1,
                    $.layers.enable(f.GROUND_OCCLUDER_LAYER),
                    (0,
                    u.castsStaticShadow)($)
                }(e, o, x, (g ?? []).filter(t => t.surface === e), i, s, h, t, D);
                l && L.push(l)
            }
            return L
        }
        , [e, g, x, A, y, C, k, $, D, T]);
        return (0,
        u.useStaticShadows)(L),
        (0,
        i.useEffect)( () => () => {
            for (let e of L)
                e.geometry.dispose()
        }
        , [L]),
        (0,
        t.jsx)(t.Fragment, {
            children: L.map( (e, i) => (0,
            t.jsx)("primitive", {
                object: e,
                castShadow: v,
                receiveShadow: v
            }, i))
        })
    }
    , "bakeVertexColors", 0, b])
}
, 814966, e => {
    "use strict";
    var t = e.i(271645)
      , i = e.i(848546)
      , r = e.i(252497);
    let n = new WeakMap;
    function o(e) {
        return n.get(e) ?? 0
    }
    function a(e) {
        n.set(e, o(e) + 1)
    }
    e.s(["castsStaticShadow", 0, function(e) {
        return e.layers.enable(r.STATIC_SHADOW_LAYER),
        e
    }
    , "isStaticShadowCaster", 0, function(e) {
        return e.layers.isEnabled(r.STATIC_SHADOW_LAYER)
    }
    , "staticShadowRevision", 0, o, "useStaticShadows", 0, function(e) {
        let r = (0,
        i.useThree)(e => e.scene);
        (0,
        t.useEffect)( () => (a(r),
        () => a(r)), [r, e])
    }
    ])
}
, 244050, e => {
    "use strict";
    var t = e.i(271645)
      , i = e.i(894969)
      , r = e.i(277873)
      , n = e.i(106258);
    let o = (0,
    t.createContext)(null);
    function a() {
        (0,
        i.useInventory)(e => e.items);
        let e = (0,
        n.useSimStore)(e => e.environmentPalettePreview ?? e.settings.environmentPalette);
        return (0,
        r.ownsGear)("environments", e) ? e : "classic"
    }
    e.s(["EnvironmentPaintContext", 0, o, "useEnvironmentPalette", 0, a, "useSceneEnvironmentPalette", 0, function() {
        let e = (0,
        t.useContext)(o)
          , i = a();
        return e ?? i
    }
    ])
}
, 216339, e => {
    "use strict";
    var t = e.i(271645)
      , i = e.i(378423);
    let r = (0,
    t.createContext)(i.WORLD_LOOK);
    e.s(["WorldLookContext", 0, r, "useWorldLook", 0, function() {
        return (0,
        t.useContext)(r)
    }
    ])
}
, 268795, e => {
    "use strict";
    var t = e.i(190072)
      , i = e.i(569638);
    function r(e) {
        return [1, 3, 5].map(t => parseInt(e.slice(t, t + 2), 16) / 255)
    }
    function n(e) {
        let[t,i,n] = r(e);
        return .2126 * t + .7152 * i + .0722 * n
    }
    function o(e) {
        let t = r(e);
        return Math.max(...t) - Math.min(...t) < .045
    }
    function a(e, i, r) {
        return `#${new t.Color(e).lerp(new t.Color(i), r).getHexString()}`
    }
    function l(e) {
        if ((0,
        i.isOriginalEnvironment)(e))
            return "original";
        let t = (0,
        i.environmentPaint)(e);
        if (t.sky?.toLowerCase() === "#b6dced")
            return "natural";
        if ([t.light, t.dark, t.accent, t.ground, t.sky ?? "#ffffff"].every(o))
            return "monochrome";
        if (n(t.light) + .12 < n(t.dark))
            return "negative";
        if (!t.sky)
            return "daylight";
        let[a,l,s] = r(t.sky);
        return l > 1.2 * a && l > 1.05 * s && .5 > n(t.sky) ? "biolume" : a > 1.25 * s && a > 1.08 * l ? "sunset" : s > 1.12 * l && a > 1.035 * l ? "twilight" : n(t.light) > .83 && n(t.ground) > .66 ? "daylight" : .46 > n(t.sky) && s > 1.15 * a ? "blueprint" : "daylight"
    }
    e.s(["environmentGridStyle", 0, function(e) {
        let t = l(e);
        if ("original" === t || "natural" === t)
            return;
        let r = (0,
        i.environmentPaint)(e);
        switch (t) {
        case "monochrome":
            return {
                scale: .5,
                minor: .035,
                major: .17,
                color: "#ffffff",
                floorMix: !0,
                roughness: .88,
                metalness: 0
            };
        case "negative":
            return {
                scale: .5,
                minor: .09,
                major: .27,
                color: r.dark,
                floorMix: !0,
                roughness: .48,
                metalness: .16
            };
        case "blueprint":
            return {
                scale: 1,
                minor: .19,
                major: .42,
                color: a(r.light, "#ffffff", .32),
                floorMix: !0,
                roughness: .8,
                metalness: .04
            };
        case "biolume":
            return {
                scale: .5,
                minor: .04,
                major: .24,
                color: r.accent,
                floorMix: !0,
                roughness: .62,
                metalness: .08
            };
        case "sunset":
            return {
                scale: .4,
                minor: .025,
                major: .1,
                color: r.light,
                floorMix: !1,
                roughness: 1,
                metalness: 0
            };
        case "twilight":
            return {
                scale: 1,
                minor: .035,
                major: .12,
                color: r.light,
                floorMix: !1,
                roughness: .85,
                metalness: .02
            };
        default:
            return {
                scale: 1,
                minor: .055,
                major: .15,
                color: r.light,
                floorMix: !1,
                roughness: .9,
                metalness: .02
            }
        }
    }
    , "environmentMood", 0, l, "themeMapEnvironment", 0, function(e, t) {
        let r = l(t)
          , n = (0,
        i.environmentPaint)(t);
        if ("original" === r || "natural" === r || !n.sky)
            return e;
        let o = "blueprint" === r || "biolume" === r || "negative" === r
          , s = "monochrome" === r
          , f = "sunset" === r
          , c = "twilight" === r
          , u = o ? a(n.sky, n.accent, .035) : f ? a(n.sky, "#ffcfaa", .42) : c ? a(n.sky, "#edcec3", .55) : a(n.sky, "#ffffff", .2)
          , h = o ? a(n.sky, "#03050b", .4) : f ? "#669acf" : c ? a(n.sky, "#738ba9", .65) : s ? a(n.sky, "#474747", .35) : a(n.sky, n.dark, .12)
          , d = s ? "#ffffff" : f ? "#ffe4c7" : c ? "#ffe8e0" : o ? a(n.light, "#ffffff", .72) : "#fff6ed"
          , m = f ? [-.75, .2, .5] : c ? [-.6, .3, .65] : o ? [-.6, .65, .5] : e.sky.sunDirection;
        return {
            ...e,
            backgroundColor: e.backgroundColor ? u : void 0,
            sky: {
                ...e.sky,
                sunDirection: m,
                palette: {
                    zenith: h,
                    horizon: u,
                    sunTint: d,
                    sunStrength: o ? .26 : .8
                }
            },
            sun: {
                ...e.sun,
                color: d,
                intensity: e.sun.intensity * (o ? .54 : f ? .87 : c ? .77 : 1),
                direction: f || c ? [m[0], .48, m[2]] : m
            },
            ambient: {
                skyColor: s ? "#dedede" : f || c ? "#dce3eb" : a(n.sky, "#ffffff", o ? .65 : .72),
                groundColor: s ? "#797979" : a(n.ground, "#a4a4a4", .5),
                intensity: e.ambient.intensity * (o ? 1.31 : 1.06)
            },
            fog: {
                ...e.fog,
                color: u,
                densityScale: o ? .3 : f || c ? .34 : e.fog.densityScale,
                skirt: e.fog.skirt ? {
                    ...e.fog.skirt,
                    color: n.accent
                } : void 0
            },
            ground: {
                ...e.ground,
                gridAxes: e.ground.gridAxes ? {
                    ...e.ground.gridAxes,
                    color: n.accent
                } : void 0
            },
            clouds: e.clouds ? {
                ...e.clouds,
                monochrome: s,
                color: s ? "#e5e5e5" : f || c ? "#f3e5dd" : a(n.sky, "#ffffff", o ? .15 : .68),
                opacity: o ? .12 : f || c ? .58 : .8
            } : void 0,
            haze: e.haze ? {
                ...e.haze,
                color: u
            } : void 0,
            localLights: e.localLights?.map(e => ({
                ...e,
                color: s ? "#ffffff" : n.accent
            })),
            indoorLight: e.indoorLight && {
                color: s ? "#ffffff" : f ? a(e.indoorLight.color, "#ffd9b8", .3) : c ? a(e.indoorLight.color, "#ffdcd2", .25) : o ? a(e.indoorLight.color, n.accent, .2) : e.indoorLight.color,
                intensity: e.indoorLight.intensity * (o ? 1.3 : 1)
            }
        }
    }
    ])
}
, 510914, e => {
    "use strict";
    e.s(["default", 0, function(t, i) {
        return (r, n) => (function(t, i, r, n) {
            let o = "SharedWorker" === t.name
              , a = e.b
              , l = [r.map(t => e.h("string" == typeof t ? t : t.path, a)).reverse(), e.X, a]
              , s = ["NEXT_DEPLOYMENT_ID", "NEXT_CLIENT_ASSET_SUFFIX"];
            for (let e = 0; e < s.length; e++)
                l.push(globalThis[s[e]]);
            let f = new URL(e.h(i, a),location.origin)
              , c = JSON.stringify(l);
            return o ? f.searchParams.set("params", c) : f.hash = "#params=" + encodeURIComponent(c),
            new t(f,n ? {
                ...n,
                type: void 0
            } : void 0)
        }
        )(r, t, i, n)
    }
    ])
}
, 948511, e => {
    e.v(e.r(510914).default("static/chunks/turbopack-worker-2ru9m5gbh1na6.js", ["static/chunks/2vtkfuol3gk_u.js", "static/chunks/turbopack-3tr_ivc6p4gw5.js"]))
}
]);
