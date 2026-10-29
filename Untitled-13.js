(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 206062, 618151, e => {
    "use strict";
    let t;
    var r = e.i(843476)
      , o = e.i(271645)
      , l = e.i(94800)
      , a = e.i(190072)
      , n = e.i(128921)
      , s = e.i(252497)
      , c = e.i(247638)
      , i = e.i(552260);
    let h = new Map;
    function u(e, t) {
        let r = `${e}:${t}`
          , o = h.get(r);
        if (o)
            return o;
        let l = function() {
            let e = []
              , t = [];
            for (let t = 0; t < 28; t++) {
                let r = (1 - Math.cos(t / 28 * Math.PI)) / 2
                  , o = .007 + .048 * r
                  , l = (.005 + .011 * Math.sin(Math.PI * r)) * Math.sqrt(1 - r * r)
                  , a = -(26 - 17 * r) * Math.PI / 180
                  , n = .01 * r * r
                  , s = .0014 * (1 - .55 * r) * Math.sqrt(1 - r * r);
                for (let t = 0; t < 16; t++) {
                    let r = t / 16 * Math.PI * 2
                      , c = .5 * l * Math.cos(r)
                      , i = .035 * l * Math.sin(r) ** 2
                      , h = .5 * s * Math.sin(r) + i
                      , u = n + c * Math.cos(a) - h * Math.sin(a)
                      , f = c * Math.sin(a) + h * Math.cos(a);
                    e.push(Math.sqrt(o * o - u * u), f, u)
                }
            }
            for (let e = 0; e < 27; e++)
                for (let r = 0; r < 16; r++) {
                    let o = 16 * e + r
                      , l = o + 16
                      , a = 16 * e + (r + 1) % 16
                      , n = a + 16;
                    t.push(o, l, a, a, l, n)
                }
            let r = e.length / 3;
            e.push(.007, 0, 0);
            let o = e.length / 3;
            e.push(Math.sqrt(.002925), 0, .01);
            for (let e = 0; e < 16; e++) {
                let l = (e + 1) % 16;
                t.push(r, e, l);
                t.push(432 + e, o, 432 + l)
            }
            let l = new a.BufferGeometry;
            return l.setAttribute("position", new a.Float32BufferAttribute(e,3)),
            l.setIndex(t),
            l.computeVertexNormals(),
            l
        }()
          , n = Array.from({
            length: e
        }, (t, r) => l.clone().rotateY(r * Math.PI * 2 / e))
          , s = (0,
        i.mergeGeometries)(n);
        if (l.dispose(),
        n.forEach(e => e.dispose()),
        -1 === t) {
            s.scale(1, 1, -1);
            let e = s.getIndex();
            for (let t = 0; t < e.count; t += 3) {
                let r = e.getX(t + 1);
                e.setX(t + 1, e.getX(t + 2)),
                e.setX(t + 2, r)
            }
        }
        return s.computeBoundingSphere(),
        h.set(r, s),
        s
    }
    function f() {
        if (t)
            return t;
        let e = new a.LatheGeometry([new a.Vector2(.0025,-.002), new a.Vector2(.0075,-.002), new a.Vector2(.0085,-.0017), new a.Vector2(.009,-.001), new a.Vector2(.009,.001), new a.Vector2(.0085,.0017), new a.Vector2(.0075,.002), new a.Vector2(.0025,.002), new a.Vector2(.0025,-.002)],48);
        return e.deleteAttribute("uv"),
        t = e,
        e
    }
    function p(e) {
        return "translucent" === e ? .58 : 1
    }
    function m(e, t) {
        let r = "translucent" === t;
        return new a.MeshPhysicalMaterial({
            color: e,
            metalness: 0,
            roughness: r ? .19 : .32,
            clearcoat: r ? .95 : .45,
            clearcoatRoughness: r ? .12 : .24,
            ior: 1.49,
            transparent: !0,
            opacity: p(t),
            depthWrite: !r
        })
    }
    e.s(["PROP_RADIUS", 0, .055, "propHubGeometry", 0, f, "solidPropGeometry", 0, u], 618151);
    var M = e.i(663011);
    let d = -(26 * Math.PI) / 180
      , b = -(9 * Math.PI) / 180
      , w = new a.Color("#ffffff")
      , y = new a.Color("#ffffff")
      , P = null
      , g = new a.Vector3
      , v = new a.Vector3;
    e.s(["Propeller", 0, function({color: e="#5c636c", bladeCount: t=s.PROP_BLADE_COUNT, material: i="normal", spinSign: h, motorIndex: I, fpv: T=!1, drive: x=null, visualDrive: S, ghostColor: V, ghostFade: R}) {
        let A = (0,
        o.useRef)(null)
          , C = (0,
        o.useRef)(null)
          , G = (0,
        o.useRef)(null)
          , E = (0,
        o.useRef)(null)
          , B = (0,
        o.useRef)(null)
          , _ = (0,
        o.useMemo)( () => u(t, h), [t, h])
          , q = (0,
        o.useMemo)( () => f(), [])
          , D = (0,
        o.useMemo)( () => (function() {
            if (P)
                return P;
            let e = []
              , t = []
              , r = []
              , o = []
              , l = w.r
              , n = w.g
              , s = w.b;
            for (let a = 0; a < 18; a++) {
                let c = a * Math.PI * 2 / 18
                  , i = Math.cos(c)
                  , h = Math.sin(c)
                  , u = e.length / 3;
                for (let o = 0; o < 10; o++) {
                    let a = o / 9
                      , c = .007 + .048 * a
                      , u = (.0035 + 4 * a * (1 - a) * .011) * (1 - a * a * .72)
                      , f = d + (b - d) * a
                      , p = .01 * a * a
                      , m = u / 2
                      , M = Math.sin(f) * m
                      , w = p + m
                      , y = p - m
                      , P = Math.sqrt(Math.max(0, c * c - w * w))
                      , g = Math.sqrt(Math.max(0, c * c - y * y))
                      , v = -M;
                    e.push(P * i + w * h, M, -P * h + w * i),
                    e.push(g * i + y * h, v, -g * h + y * i);
                    let I = .045 * (.35 + .65 * a);
                    t.push(l, n, s),
                    t.push(l, n, s),
                    r.push(I, I)
                }
                for (let e = 0; e < 9; e++) {
                    let t = u + 2 * e
                      , r = t + 2;
                    o.push(t, r, t + 1, t + 1, r, r + 1)
                }
            }
            let c = e.length / 3
              , i = y.r
              , h = y.g
              , u = y.b;
            for (let o = 0; o <= 48; o++) {
                let l = o / 48 * Math.PI * 2
                  , a = .055 * Math.cos(l)
                  , n = .055 * Math.sin(l);
                e.push(a, .001, n),
                e.push(a, -.001, n),
                t.push(i, h, u),
                t.push(i, h, u),
                r.push(.14, .098)
            }
            for (let e = 0; e < 48; e++) {
                let t = c + 2 * e
                  , r = t + 2;
                o.push(t, r, t + 1, t + 1, r, r + 1)
            }
            let f = new a.BufferGeometry;
            return f.setAttribute("position", new a.Float32BufferAttribute(e,3)),
            f.setAttribute("color", new a.Float32BufferAttribute(t,3)),
            f.setAttribute("alpha", new a.Float32BufferAttribute(r,1)),
            f.setIndex(o),
            f.computeVertexNormals(),
            P = f,
            f
        }
        )(), [])
          , O = (0,
        o.useMemo)( () => (0,
        n.propDiscTexture)(), [])
          , W = (0,
        o.useMemo)( () => V ? new a.MeshBasicMaterial({
            color: V,
            transparent: !0,
            opacity: .7,
            side: a.DoubleSide,
            depthWrite: !1,
            toneMapped: !1
        }) : m(e, i), [V, e, i])
          , j = (0,
        o.useMemo)( () => V ? new a.MeshBasicMaterial({
            color: V,
            transparent: !0,
            opacity: .55,
            depthWrite: !1,
            toneMapped: !1
        }) : m(e, i), [V, e, i])
          , F = (0,
        o.useMemo)( () => {
            let t = new a.MeshBasicMaterial({
                color: V ?? e,
                vertexColors: !V,
                transparent: !0,
                opacity: 0,
                depthWrite: !1,
                side: a.DoubleSide,
                toneMapped: !1
            });
            return t.onBeforeCompile = e => {
                e.vertexShader = e.vertexShader.replace("#include <common>", `#include <common>
attribute float alpha;
varying float vPropAlpha;`).replace("#include <color_vertex>", `#include <color_vertex>
vPropAlpha = alpha;`),
                e.fragmentShader = e.fragmentShader.replace("#include <common>", `#include <common>
varying float vPropAlpha;`).replace("#include <color_fragment>", `#include <color_fragment>
diffuseColor.a *= vPropAlpha;`)
            }
            ,
            t.customProgramCacheKey = () => V ? "prop-smear-alpha-ghost" : "prop-smear-alpha",
            t
        }
        , [V, e])
          , L = (0,
        o.useMemo)( () => new a.MeshBasicMaterial({
            color: V ?? e,
            map: O,
            transparent: !0,
            opacity: 0,
            depthWrite: !1,
            side: a.DoubleSide,
            toneMapped: !1
        }), [O, V, e]);
        return (0,
        o.useEffect)( () => () => {
            W.dispose()
        }
        , [W]),
        (0,
        o.useEffect)( () => () => j.dispose(), [j]),
        (0,
        o.useEffect)( () => () => F.dispose(), [F]),
        (0,
        o.useEffect)( () => () => L.dispose(), [L]),
        (0,
        o.useEffect)( () => {
            let e = T ? s.FPV_PROP_LAYER : 0
              , t = A.current;
            t && t.traverse(t => {
                t.layers.set(e)
            }
            )
        }
        , [T]),
        (0,
        l.useFrame)( (e, t) => {
            let r = C.current;
            if (!r)
                return;
            let o = x ? x.motors[I] ?? 0 : c.live.motors[I] ?? 0
              , l = x ? x.armed : c.live.telemetry.armed
              , a = S ? Math.max(0, S.speed) : l ? 45 + 260 * o : 0
              , n = S ? Math.max(0, Math.min(1, S.blur)) : l ? Math.min(1, o / .22) : 0;
            if (a > 0) {
                let e = Math.min(a * t * (S ? 1 : M.timeWarp.scale), .35);
                r.rotation.y += e * h
            }
            let s = R?.current ?? 1;
            j.opacity = (V ? .55 : p(i)) * s,
            W.opacity = (V ? .7 : p(i) * (1 - .92 * n)) * s,
            W.depthWrite = !V && "normal" === i && n < .05,
            F.opacity = n * s * (V ? 1 : p(i)),
            e.camera.getWorldDirection(g),
            v.set(0, 1, 0),
            A.current && (A.current.updateWorldMatrix(!0, !1),
            v.transformDirection(A.current.matrixWorld));
            let u = Math.abs(g.dot(v));
            L.opacity = (V ? .35 : .22 * p(i)) * n * u * s
        }
        ),
        (0,
        r.jsxs)("group", {
            ref: A,
            children: [(0,
            r.jsxs)("mesh", {
                position: [0, .0025, 0],
                children: [(0,
                r.jsx)("cylinderGeometry", {
                    args: [.0035, .004, .003, 6]
                }), V ? (0,
                r.jsx)("meshBasicMaterial", {
                    color: V,
                    transparent: !0,
                    opacity: .55,
                    depthWrite: !1,
                    toneMapped: !1
                }) : (0,
                r.jsx)("meshStandardMaterial", {
                    color: "#1e2228",
                    roughness: .4,
                    metalness: .65
                })]
            }), (0,
            r.jsxs)("group", {
                ref: C,
                children: [(0,
                r.jsx)("mesh", {
                    geometry: q,
                    material: j,
                    dispose: null
                }), (0,
                r.jsx)("mesh", {
                    ref: G,
                    geometry: _,
                    material: W,
                    dispose: null
                }), (0,
                r.jsx)("mesh", {
                    scale: [1, 1, h],
                    ref: E,
                    geometry: D,
                    material: F,
                    dispose: null
                }), (0,
                r.jsx)("mesh", {
                    ref: B,
                    rotation: [-Math.PI / 2, 0, 0],
                    material: L,
                    children: (0,
                    r.jsx)("circleGeometry", {
                        args: [.055, 48]
                    })
                })]
            })]
        })
    }
    ], 206062)
}
, 246747, e => {
    "use strict";
    e.s(["CAMERA_DISPLAY_TILT", 0, {
        freestyle: 30,
        whoop: 20,
        cinewhoop: 15,
        "long-range": 25,
        racer: 45
    }])
}
, 689330, 567692, e => {
    "use strict";
    let t;
    var r = e.i(246747)
      , o = e.i(190072)
      , l = e.i(934297)
      , a = e.i(552260)
      , n = e.i(11871);
    let s = new Map
      , c = new Map;
    e.s(["buildDroneGeometry", 0, function(e, t="full") {
        if ("whoop" === e)
            return function(e="full") {
                let t = s.get(e);
                if (t)
                    return t;
                let c = "fpv" === e
                  , i = n.DRONE_PROFILES.whoop
                  , h = {}
                  , u = [];
                function f(e, t, r=[0, 0, 0], o=[0, 0, 0]) {
                    t.rotateX(o[0]),
                    t.rotateY(o[1]),
                    t.rotateZ(o[2]),
                    t.translate(...r);
                    let l = t.index ? t.toNonIndexed() : t;
                    l !== t && t.dispose(),
                    (h[e] ??= []).push(l)
                }
                function p(e, t, r, o=5e-4, a=[0, 0, 0]) {
                    f(e, new l.RoundedBoxGeometry(...t,2,Math.min(o, ...t.map(e => e / 3))), r, a)
                }
                function m(e, t, r, l, a=[0, 0, 0], n=24) {
                    f(e, new o.CylinderGeometry(t,t,r,n), l, a)
                }
                function M(e, t, r, l=24, a=8) {
                    f(e, new o.TubeGeometry(new o.CatmullRomCurve3(t.map(e => new o.Vector3(...e))),l,r,a,!1))
                }
                function d(e, t=85e-5) {
                    m("metal", t, 65e-5, e, [0, 0, 0], 6),
                    m("rubber", .4 * t, 15e-5, [e[0], e[1] + 4e-4, e[2]], [0, 0, 0], 6)
                }
                function b(e, t) {
                    let r = new o.BufferGeometry;
                    return r.setAttribute("position", new o.Float32BufferAttribute(e.flat(),3)),
                    r.setAttribute("uv", new o.Float32BufferAttribute(e.flatMap( ([e,,t]) => [20 * e, 20 * t]),2)),
                    r.setIndex(t),
                    r.computeVertexNormals(),
                    r
                }
                let w = i.propRadius + .0015;
                for (let[e,t] of [[1, -1], [-1, -1], [1, 1], [-1, 1]]) {
                    if (c && t > 0)
                        continue;
                    let r = e * i.reachX
                      , l = t * i.reachZ;
                    u.push([r, i.propY, l]);
                    let a = Math.atan2(-l, -r);
                    if (M("shell", [[.005 * e, -.0021, .006 * t], [.48 * r, -.0026, .4 * l], [.73 * r, -.0025, .68 * l], [r, -.0023, l]], .00105, c ? 6 : 24, c ? 5 : 8),
                    c || M("shell", [[.0075 * e, -.0019, .0035 * t], [.65 * r, -.0014, .35 * l], [r + Math.cos(a + .62) * (w + 5e-4), .0021, l + Math.sin(a + .62) * (w + 5e-4)]], 8e-4),
                    !function(e, t, r) {
                        let l = c ? 40 : 80
                          , a = c ? [[w, .003], [w, .01], [w + .0012, .01], [w + .001, .003]] : [[w, .003], [w, .009], [w + 25e-5, .0099], [w + 65e-5, .0103], [w + .001, .01025], [w + .00135, .0097], [w + .00115, .0088], [w + 95e-5, .003]]
                          , n = []
                          , s = [];
                        for (let o = 0; o <= l; o++) {
                            let s = o / l * Math.PI * 2
                              , c = -.0033 + .0065 * (1 - Math.cos(3 * (s - r))) / 2;
                            for (let[r,o] of a)
                                n.push([e + Math.cos(s) * r, .003 === o ? c : o, t + Math.sin(s) * r])
                        }
                        let i = a.length;
                        for (let e = 0; e < l; e++)
                            for (let t = 0; t < i; t++) {
                                let r = e * i + t
                                  , o = e * i + (t + 1) % i;
                                s.push(r, r + i, o, o, r + i, o + i)
                            }
                        f("shell", b(n, s)),
                        c || f("accent", new o.TorusGeometry(w + 75e-5,27e-5,6,80), [e, .0104, t], [Math.PI / 2, 0, 0]);
                        for (let o = 0; o < 3; o++) {
                            let l = r + o * Math.PI * 2 / 3
                              , a = (r, o, a) => [e + Math.cos(l + a) * r, o, t + Math.sin(l + a) * r];
                            M("shell", [a(.0033, -.0024, -.34), a(.0078, -.0021, -.23), a(.0125, -.0011, -.13), a(w + 5e-4, -.0027, 0)], 68e-5, c ? 6 : 20, c ? 4 : 8)
                        }
                    }(r, l, a),
                    m("shell", .0051, .0015, [r, -.0027, l], [0, 0, 0], c ? 16 : 32),
                    m("metal", .0032, .003, [r, -.001, l], [0, 0, 0], c ? 12 : 24),
                    c)
                        m("accent", .0046, .005, [r, .002, l], [0, 0, 0], 16);
                    else {
                        m("copper", .0037, .0042, [r, .0015, l]),
                        m("accent", .0047, .0012, [r, .0041, l], [0, 0, 0], 32),
                        m("accent", .0045, 7e-4, [r, -7e-4, l], [0, 0, 0], 32);
                        for (let e = 0; e < 10; e++) {
                            let t = e * Math.PI / 5;
                            p("accent", [85e-5, .0041, .0011], [r + .0041 * Math.cos(t), .0016, l + .0041 * Math.sin(t)], 2e-4, [0, -t, 0])
                        }
                        for (let e of [-1, 1])
                            d([r + .0027 * e, -.0019, l], 55e-5)
                    }
                    m("metal", .0012, .0034, [r, .0053, l], [0, 0, 0], c ? 12 : 24)
                }
                if (!c) {
                    for (let e of [-1, 1])
                        M("shell", [[.0075 * e, -.0015, -.011], [.0103 * e, -.0017, -.006], [.0103 * e, -.0017, .006], [.0075 * e, -.0015, .012]], 85e-5),
                        M("shell", [[-.0075, -.0015, .0115 * e], [0, -.0015, .0125 * e], [.0075, -.0015, .0115 * e]], 85e-5);
                    for (let e of (p("board", [.017, .0014, .017], [0, .004, 0], 7e-4),
                    p("rubber", [.0055, .0012, .0055], [-.002, .0053, -.001], 2e-4),
                    p("metal", [.0037, .001, .005], [.0045, .0052, .002], 25e-5),
                    [-1, 1]))
                        for (let t = 0; t < 5; t++)
                            p("metal", [.0012, 4e-4, .001], [.0072 * e, .0049, -.0054 + .0027 * t], 1e-4);
                    for (let e of [-1, 1])
                        for (let t of [-1, 1])
                            m("accent", .00135, .013, [.0064 * e, .005, .0077 * t]),
                            m("rubber", .00155, .0014, [.0064 * e, .0034, .0077 * t]),
                            d([.0064 * e, .012, .0077 * t]);
                    let e = [[-.007, .0078, .015, .0305, .04], [-.0035, .009, .012, .032, .1], [.001, .0095, .011, .0312, .36], [.006, .0088, .011, .0283, .47], [.011, .0068, .0107, .0235, .33], [.0155, .0046, .0107, .0182, .1], [.018, .0026, .011, .0148, .04]]
                      , t = new o.CatmullRomCurve3(e.map( ([e,t,r]) => new o.Vector3(e,t,r)))
                      , l = new o.CatmullRomCurve3(e.map( ([e,,,t,r]) => new o.Vector3(e,t,r)))
                      , a = []
                      , n = [];
                    for (let e = 0; e < 2; e++)
                        for (let r = 0; r <= 48; r++) {
                            let o = t.getPoint(r / 48)
                              , n = l.getPoint(r / 48);
                            for (let t = 0; t <= 32; t++) {
                                let r = n.z + (Math.PI - 2 * n.z) * t / 32
                                  , l = 65e-5 * e;
                                a.push([(o.y - l) * Math.cos(r), o.z + (n.y - o.z - l) * Math.sin(r), o.x])
                            }
                        }
                    for (let e = 0; e < 2; e++)
                        for (let t = 0; t < 48; t++)
                            for (let r = 0; r < 32; r++) {
                                let o = 1617 * e + 33 * t + r
                                  , l = o + 32 + 1;
                                0 === e ? n.push(o, o + 1, l, o + 1, l + 1, l) : n.push(o, l, o + 1, o + 1, l, l + 1)
                            }
                    for (let e = 0; e < 48; e++)
                        for (let t of [0, 32]) {
                            let r = 33 * e + t
                              , o = r + 32 + 1;
                            0 === t ? n.push(r, o, r + 1617, o, o + 1617, r + 1617) : n.push(r, r + 1617, o, o, r + 1617, o + 1617)
                        }
                    for (let e of [0, 48])
                        for (let t = 0; t < 32; t++) {
                            let r = 33 * e + t;
                            0 === e ? n.push(r, r + 1617, r + 1, r + 1, r + 1617, r + 1617 + 1) : n.push(r, r + 1, r + 1617, r + 1, r + 1617 + 1, r + 1617)
                        }
                    f("shell", b(a, n));
                    let s = []
                      , c = [];
                    for (let e = 0; e <= 48; e++) {
                        let r = e / 48
                          , o = t.getPoint(r)
                          , a = l.getPoint(r)
                          , n = .1 + .035 * Math.sin(r * Math.PI);
                        for (let e of [-1, 1]) {
                            let t = Math.PI / 2 + e * n;
                            s.push([(o.y + 12e-5) * Math.cos(t), o.z + (a.y - o.z + 16e-5) * Math.sin(t), o.x])
                        }
                        if (e < 48) {
                            let t = 2 * e;
                            c.push(t, t + 1, t + 2, t + 1, t + 3, t + 2)
                        }
                    }
                    for (let e of (f("accent", b(s, c)),
                    [-1, 1]))
                        M("shell", [[.0064 * e, .0115, -.0077], [.0081 * e, .0156, -.0071], [.0085 * e, .022, -.0058]], 9e-4),
                        M("shell", [[.0064 * e, .0115, -.0077], [.009 * e, .011, -.001], [.0076 * e, .011, .009], [.0038 * e, .012, .0165]], 9e-4),
                        M("shell", [[.0064 * e, .0115, .0077], [.0069 * e, .014, .012], [.0042 * e, .0151, .0151]], 85e-5),
                        M("accent", [[.0085 * e, .0185, -.0048], [.0091 * e, .0208, 1e-4], [.008 * e, .0204, .0062]], 28e-5, 20, 6);
                    let i = r.CAMERA_DISPLAY_TILT.whoop * Math.PI / 180
                      , h = e => [0, .022 - Math.sin(i) * e, -.003 + Math.cos(i) * e];
                    p("rubber", [.01, .009, .006], [0, .022, -.003], 7e-4, [i, 0, 0]),
                    m("rubber", .0052, .0102, h(-.0035), [Math.PI / 2 + i, 0, 0], 40),
                    f("shell", new o.TorusGeometry(.0062,95e-5,10,48), h(-.0068), [i, 0, 0]),
                    f("accent", new o.TorusGeometry(.0055,3e-4,8,48), h(-.0084), [i, 0, 0]),
                    m("metal", .0046, 7e-4, h(-.009), [Math.PI / 2 + i, 0, 0], 40),
                    m("rubber", .004, 8e-4, h(-.0095), [Math.PI / 2 + i, 0, 0], 40);
                    let u = new o.SphereGeometry(.00365,32,16);
                    for (let e of (u.scale(1, 1, .19),
                    f("glass", u, h(-.0101), [i, 0, 0]),
                    p("shell", [.013, .0084, .03], [0, -.0072, .004], .0018),
                    [-1, 1]))
                        p("metal", [.0117, .0072, 55e-5], [0, -.0072, .004 + .015 * e], 3e-4);
                    for (let e of [-.005, .014])
                        M("accent", [[-.007, -.0018, e], [-.0076, -.005, e], [-.0074, -.0116, e], [0, -.012, e], [.0074, -.0116, e], [.0076, -.005, e], [.007, -.0018, e]], 8e-4, 32, 8),
                        p("accent", [.014, .0012, .002], [0, -.0024, e], 4e-4);
                    for (let[e,t] of (p("accent", [.007, 25e-5, .008], [0, -.0029, .004], 3e-4),
                    p("accent", [.005, .003, .0055], [0, .0019, .0225], 5e-4),
                    p("metal", [.0052, .0032, 4e-4], [0, .0019, .0225], 12e-5),
                    ["red", "rubber"].entries())) {
                        let r = 0 === e ? .0013 : -.0013;
                        M(t, [[r, -.0072, .019], [r, -.007, .025], [r, -.003, .028], [r, .0019, .0247]], 43e-5, 20, 6),
                        M(t, [[r, .0019, .0201], [r, .0048, .016], [r, .0062, .01], [r, .0049, .0065]], 43e-5, 20, 6),
                        m("metal", 7e-4, 5e-4, [r, .005, .0065])
                    }
                    m("metal", 8e-4, 7e-4, [0, .005, .005]),
                    M("rubber", [[0, .005, .005], [0, .0135, .0125], [0, .0255, .019], [0, .034, .0202]], 5e-4, 24, 6),
                    M("accent", [[0, .015, .0134], [0, .022, .0171], [0, .026, .0193]], .001, 16, 8),
                    m("rubber", .001, .006, [0, .0326, .02], [.12, 0, 0], 16)
                }
                let y = {};
                for (let[e,t] of Object.entries(h))
                    y[e] = (0,
                    a.mergeGeometries)(t, !1),
                    t.forEach(e => e.dispose());
                let P = {
                    parts: y,
                    motors: u,
                    radius: i.propRadius,
                    blades: i.blades,
                    displayScale: 2.75
                };
                return s.set(e, P),
                P
            }(t);
        let i = "fpv" === t
          , h = `${e}:${t}`
          , u = c.get(h);
        if (u)
            return u;
        let f = "cinewhoop" === e
          , p = "long-range" === e
          , m = "racer" === e
          , M = "freestyle" === e
          , d = n.DRONE_PROFILES[e]
          , b = d.reachX
          , w = d.propRadius
          , y = m ? .028 : .034
          , P = p ? .145 : m ? .085 : .106
          , g = -(.41 * P)
          , v = m ? .026 : .014
          , I = g + .012
          , T = f ? .008 : .018
          , x = f ? .01 : .013
          , S = {};
        function V(e, t, r=[0, 0, 0], o=[0, 0, 0]) {
            t.rotateX(o[0]),
            t.rotateY(o[1]),
            t.rotateZ(o[2]),
            t.translate(...r);
            let l = t.index ? t.toNonIndexed() : t;
            l !== t && t.dispose(),
            (S[e] ??= []).push(l)
        }
        function R(e, t, r, a=.001, n=[0, 0, 0]) {
            V(e, i && .001 >= Math.min(...t) ? new o.BoxGeometry(...t) : new l.RoundedBoxGeometry(...t,i ? 1 : 2,Math.min(a, ...t.map(e => e / 3))), r, n)
        }
        function A(e, t, r, l, a=[0, 0, 0], n=24) {
            V(e, new o.CylinderGeometry(t,t,r,n), l, a)
        }
        function C(e, t, r, l) {
            let a = new o.Vector3(...t)
              , n = new o.Vector3(...r)
              , s = n.clone().sub(a)
              , c = new o.CylinderGeometry(l,l,s.length(),10);
            c.applyQuaternion(new o.Quaternion().setFromUnitVectors(new o.Vector3(0,1,0), s.normalize())),
            V(e, c, a.add(n).multiplyScalar(.5).toArray())
        }
        function G(e, t, r=8e-4) {
            V(e, new o.TubeGeometry(new o.CatmullRomCurve3(t.map(e => new o.Vector3(...e))),16,r,6,!1))
        }
        function E(e, t=.0017) {
            A("metal", t, .0015, e, [0, 0, 0], 6),
            A("rubber", .45 * t, 3e-4, [e[0], e[1] + 85e-5, e[2]], [0, 0, 0], 6)
        }
        function B(e, t, r, l=-r / 2) {
            let a = new o.Shape
              , n = t / 2
              , s = r / 2;
            a.moveTo(-(.65 * n), l),
            a.lineTo(.65 * n, l),
            a.lineTo(n, l + .013),
            a.lineTo(n, s - .012),
            a.lineTo(.6 * n, s),
            a.lineTo(-(.6 * n), s),
            a.lineTo(-n, s - .012),
            a.lineTo(-n, l + .013),
            a.closePath(),
            V("carbon", new o.ExtrudeGeometry(a,{
                depth: .002,
                bevelEnabled: !0,
                bevelSegments: 1,
                steps: 1,
                bevelSize: 5e-4,
                bevelThickness: 4e-4
            }), [0, e, 0], [Math.PI / 2, 0, 0])
        }
        if (!i)
            for (let e of (B(0, 1.25 * y, P),
            m || B(.022, y, P, I),
            R("board", [.85 * y, .002, .85 * y], [0, .007, 0], 3e-4),
            R("rubber", [.011, .003, .011], [0, .009, 0], 3e-4),
            [-1, 1])) {
                for (let t of [-1, 1]) {
                    let r = e * y * .36
                      , o = !m && t < 0 ? I + .008 : t * P * .33;
                    A("accent", .0022, .022, [r, .011, o]),
                    E([r, .022 + 7e-4, o]),
                    A("rubber", .0018, .0065, [e * y * .3, .00325, t * y * .3])
                }
                for (let t = 0; t < 6; t++)
                    R("metal", [.0018, .001, .002], [e * y * .39, .0085, (t / 5 - .5) * y * .66], 2e-4)
            }
        let _ = [];
        for (let[e,[t,r]] of [[1, -1], [-1, -1], [1, 1], [-1, 1]].entries()) {
            if (i && r > 0)
                continue;
            let l = t * b
              , a = r * d.reachZ;
            _.push([l, T + .012, a]);
            let n = Math.hypot(l, a)
              , s = new o.Shape;
            if (s.moveTo(-.008, .01),
            s.lineTo(-.006, n - .013),
            s.quadraticCurveTo(-.019, n + .006, -.007, n + .014),
            s.lineTo(.007, n + .014),
            s.quadraticCurveTo(.019, n + .006, .006, n - .013),
            s.lineTo(.008, .01),
            s.closePath(),
            V("carbon", new o.ExtrudeGeometry(s,{
                depth: .004,
                bevelEnabled: !0,
                bevelSegments: 2,
                steps: 1,
                bevelSize: 6e-4,
                bevelThickness: 4e-4,
                curveSegments: 8
            }), [0, 0, 0], [Math.PI / 2, Math.atan2(l, a), 0]),
            R("edge", [.011, .001, n], [l / 2, -.0043, a / 2], 3e-4, [0, Math.atan2(l, a), 0]),
            R("accent", [.015, .004, .009], [.58 * l, .001, .58 * a], .001, [0, Math.atan2(l, a), 0]),
            !i)
                for (let e = -1; e <= 1; e++)
                    G("rubber", [[.15 * l + .0016 * e, .003, .15 * a], [.6 * l + .0016 * e, .003, .6 * a], [l, .006, a]], 6e-4);
            let c = [Math.PI / 2, Math.atan2(l, a), 0]
              , h = m ? .0105 : f ? .013 : .015;
            if (i)
                R("shell", [h, .003, .62 * n], [.51 * l, .004, .51 * a], .001, [0, c[1], 0]);
            else {
                let e = new o.Shape;
                e.moveTo(0, .13 * n),
                e.quadraticCurveTo(-.6 * h, .16 * n, -.52 * h, .29 * n),
                e.lineTo(-.4 * h, .77 * n),
                e.quadraticCurveTo(0, .91 * n, .4 * h, .77 * n),
                e.lineTo(.52 * h, .29 * n),
                e.quadraticCurveTo(.6 * h, .16 * n, 0, .13 * n),
                V("shell", new o.ExtrudeGeometry(e,{
                    depth: .003,
                    bevelEnabled: !0,
                    bevelSegments: 2,
                    steps: 1,
                    bevelSize: 8e-4,
                    bevelThickness: 7e-4,
                    curveSegments: 12
                }), [0, .006, 0], c),
                R("accent", [.28 * h, 6e-4, .37 * n], [.48 * l, .007, .48 * a], 25e-5, [0, c[1], 0])
            }
            for (let e of [.26, .74])
                R("accent", [h + 8e-4, .001, .004], [l * e, .0067, a * e], 3e-4, [0, c[1], 0]);
            let u = T - .005;
            if (A("metal", .62 * x, u - -4e-4, [l, (u + -4e-4) / 2, a]),
            A("rubber", 1.08 * x, .003, [l, .002, a]),
            i || A("copper", .76 * x, .012, [l, T - .003, a]),
            A("accent", x, .004, [l, T + .004, a]),
            A("shell", .95 * x, .002, [l, T - .006, a]),
            A("metal", .3 * x, .006, [l, T + .008, a]),
            i)
                A("accent", .95 * x, .01, [l, T - .001, a]);
            else
                for (let e = 0; e < 12; e++) {
                    let t = e * Math.PI / 6;
                    R("accent", [.15 * x, .01, .0016], [l + Math.cos(t) * x * .88, T - .001, a + Math.sin(t) * x * .88], 3e-4, [0, -t, 0])
                }
            if (!i)
                for (let e of [-1, 1])
                    E([l + .009 * e, .001, a + .012], .0012);
            if (R("shell", [.017, .008, .017], [l, -.008, a], .003),
            f) {
                let t = w + .0025
                  , r = [new o.Vector2(t + 6e-4,-.006), new o.Vector2(t + .0038,-.006), new o.Vector2(t + .0045,-.003), new o.Vector2(t + .003,.014), new o.Vector2(t + .0042,.023), new o.Vector2(t + .0035,.024), new o.Vector2(t + 3e-4,.024), new o.Vector2(t,.022), new o.Vector2(t,-.004), new o.Vector2(t + 6e-4,-.006)];
                if (V("shell", new o.LatheGeometry(r,i ? 40 : 64), [l, 0, a]),
                V("accent", new o.TorusGeometry(t + .0021,.0015,6,i ? 40 : 64), [l, .0235, a], [Math.PI / 2, 0, 0]),
                !i) {
                    V("accent", new o.TorusGeometry(t + .0024,.001,6,64), [l, -.0045, a], [Math.PI / 2, 0, 0]);
                    for (let e = 0; e < 6; e++) {
                        let r = e * Math.PI / 3 + Math.PI / 6
                          , o = t + .004;
                        G("shell", [[l + Math.cos(r) * o, -.004, a + Math.sin(r) * o], [l + Math.cos(r) * (o - 6e-4), .007, a + Math.sin(r) * (o - 6e-4)], [l + Math.cos(r) * o, .021, a + Math.sin(r) * o]], 8e-4)
                    }
                }
                for (let r = 0; r < 3; r++) {
                    let o = r * Math.PI * 2 / 3 + e;
                    C("carbon", [l, -.003, a], [l + Math.cos(o) * (t + .002), -.003, a + Math.sin(o) * (t + .002)], .0015)
                }
            }
        }
        if (!i) {
            let t = r.CAMERA_DISPLAY_TILT[e] * Math.PI / 180
              , l = e => [0, v - Math.sin(t) * e, g + Math.cos(t) * e];
            for (let e of [-1, 1]) {
                let t = new o.Shape;
                for (let r of (t.moveTo(-.016, -.01),
                t.quadraticCurveTo(-.02, .001, -.013, .018),
                t.quadraticCurveTo(-.009, .021, .005, .019),
                t.lineTo(.015, .008),
                t.lineTo(.009, -.006),
                t.quadraticCurveTo(-.003, -.013, -.016, -.01),
                V("shell", new o.ExtrudeGeometry(t,{
                    depth: .0038,
                    bevelEnabled: !0,
                    bevelSize: .0012,
                    bevelThickness: .001,
                    bevelSegments: 3,
                    curveSegments: 10,
                    steps: 1
                }), [e < 0 ? -.0178 : .014, v, g], [0, Math.PI / 2, 0]),
                A("metal", .0028, .001, [.019 * e, v, g], [0, 0, Math.PI / 2], 6),
                A("accent", .0042, 8e-4, [.0188 * e, v, g], [0, 0, Math.PI / 2], 24),
                [0, .005]))
                    R("accent", [6e-4, .002, .008], [.0191 * e, v + .01, g + .004 + r], 2e-4, [.45, 0, 0])
            }
            G("shell", [[-.016, v + .015, g - .003], [-.01, v + .02, g + .002], [.01, v + .02, g + .002], [.016, v + .015, g - .003]], .0021),
            R("rubber", [.027, .017, .012], [0, v, g], .001, [t, 0, 0]),
            A("rubber", .01, .013, l(-.003), [Math.PI / 2 + t, 0, 0], 32),
            A("accent", .0101, .0018, l(-.0085), [Math.PI / 2 + t, 0, 0], 40),
            A("metal", .0086, .0016, l(-.01), [Math.PI / 2 + t, 0, 0], 40),
            A("rubber", .0072, .002, l(-.011), [Math.PI / 2 + t, 0, 0], 32),
            A("glass", .0058, 7e-4, l(-.0122), [Math.PI / 2 + t, 0, 0], 32);
            let a = new o.SphereGeometry(.005699999999999999,24,16);
            if (a.scale(1, 1, .24),
            V("glass", a, l(-.0124), [t, 0, 0]),
            M || f)
                for (let e of [-1, 1]) {
                    R("shell", [.0045, .011, f ? .052 : .065], [.019 * e, .009, .007], .002),
                    R("accent", [.0011, .0024, f ? .044 : .057], [.0212 * e, .012, .007], 5e-4);
                    for (let t = 0; t < 3; t++)
                        R("rubber", [8e-4, .003, .006], [.0214 * e, .006, -.006 + .012 * t], 4e-4, [.24, 0, 0])
                }
            if (!m)
                for (let e of [-1, 1])
                    G("shell", [[e * y * .46, .023, I + .011], [e * y * .48, .023, .01], [e * y * .43, .023, .36 * P]], .0012);
            if (m) {
                let e = new o.LatheGeometry([new o.Vector2(0,-.044), new o.Vector2(.006,-.042), new o.Vector2(.012,-.037), new o.Vector2(.017,-.029), new o.Vector2(.02,-.015), new o.Vector2(.0205,-.004), new o.Vector2(.0195,.009), new o.Vector2(.017,.021), new o.Vector2(.013,.031), new o.Vector2(.007,.039), new o.Vector2(0,.043)],48);
                e.rotateX(Math.PI / 2),
                e.scale(1, .85, 1),
                V("shell", e, [0, .021, 0]);
                let t = new o.Shape;
                for (let e of (t.moveTo(-.033, .028),
                t.quadraticCurveTo(-.021, .034, -.009, .057),
                t.quadraticCurveTo(-.003, .066, .006, .054),
                t.quadraticCurveTo(.013, .043, .03, .03),
                t.closePath(),
                V("accent", new o.ExtrudeGeometry(t,{
                    depth: .0024,
                    bevelEnabled: !0,
                    bevelThickness: 6e-4,
                    bevelSize: .001,
                    bevelSegments: 2,
                    steps: 1
                }), [-.0012, 0, 0], [0, Math.PI / 2, 0]),
                G("shell", [[0, .04, -.023], [0, .054, -.005], [0, .058, .004], [0, .038, .026]], .0011),
                [-1, 1])) {
                    for (let t = 0; t < 4; t++)
                        R("rubber", [.001, .006, .002], [.0196 * e, .021, -.008 + .006 * t], 4e-4, [.3, 0, 0]);
                    for (let t of (G("accent", [[.011 * e, .03, -.032], [.0175 * e, .031, -.012], [.0175 * e, .03, .013], [.01 * e, .027, .033]], .0014),
                    [-.026, .024]))
                        E([.012 * e, .036, t], .0012)
                }
            }
            if (p)
                for (let e of [-1, 1]) {
                    R("shell", [.004, .018, .086], [.018 * e, .012, .002], .002),
                    R("accent", [.0045, .004, .074], [.018 * e, .021, .002], 7e-4);
                    for (let t = 0; t < 5; t++)
                        R("rubber", [8e-4, .006, .002], [.0202 * e, .012, -.013 + .007 * t], 3e-4, [.25, 0, 0])
                }
            let n = m ? -.015 : .039
              , s = m ? .022 : .026
              , c = p ? .086 : .059;
            for (let e of (R("shell", [.032, s, c], [0, n, .006], .003),
            [-1, 1])) {
                R("accent", [.02976, .89 * s, .0012], [0, n, .006 + e * c / 2], .001);
                let t = .006 + e * c * .27;
                for (let e of (R("accent", [.035, .002, .008], [0, n + s / 2 + 7e-4, t], 4e-4),
                R("accent", [.035, .002, .008], [0, n - s / 2, t], 4e-4),
                [-1, 1]))
                    R("accent", [.002, s, .008], [.0166 * e, n, t], 4e-4);
                R("metal", [.007, .002, .01], [.016, n + s / 2, t], 6e-4);
                for (let e = 0; e < 7; e++)
                    R("edge", [.001, 2e-4, .005], [-.012 + .004 * e, n + s / 2 + .0018, t], 5e-5)
            }
            R("accent", [.02, 6e-4, .01], [0, n + s / 2 + 6e-4, .006], .001);
            for (let e = 0; e < 3; e++)
                R("rubber", [.002, 4e-4, .007], [-.006 + .005 * e, n + s / 2 + .001, .006], 1e-4, [0, -.35, 0]);
            for (let e of [-1, 1])
                for (let t of (R("accent", [7e-4, .36 * s, .64 * c], [.0162 * e, n, .006], 3e-4),
                [-1, 1]))
                    R("shell", [.0011, .001, .73 * c], [.032 * e * .46, n + t * s * .47, .006], 3e-4);
            let i = .021 * !f
              , h = f ? .014 : .022
              , u = P * (f ? .57 : .4);
            for (let e of [-1, 1])
                R("accent", [.01, .007, .0045], [i, h, u + .0045 * e / 2], 7e-4);
            for (let[e,t] of (R("edge", [.0105, .0075, 6e-4], [i, h, u], 15e-5),
            ["red", "rubber"].entries())) {
                let r = i + (0 === e ? 1 : -1) * .0024
                  , o = .009 - .005 * e
                  , l = .009 - .007 * e
                  , a = .32 * y;
                G(t, [[o, n, c / 2 + .006], [r, n + .012, Math.max(c / 2 + .014, u + .012) + .003 * e], [r, h, u + .0038249999999999994]], .0015),
                G(t, [[r, h, u - .0038249999999999994], [r, .012, u - .0045 - .005], [l, .011, a + .003], [l, .0085, a]], .0015),
                A("metal", .0022500000000000003, .001, [l, .0085, a])
            }
            let d = .44 * P;
            m ? (C("accent", [0, .019, .03], [0, .027, .052], .002),
            A("rubber", .0035, .01, [0, .028, .05], [1.15, 0, 0])) : (C("rubber", [0, .022, d], [0, .065, d + .011], .0015),
            A("shell", .005, .014, [0, .067, d + .011], [.2, 0, 0]),
            A("accent", .00515, .002, [0, .022 + .049, d + .012], [.2, 0, 0])),
            p && (C("accent", [0, .022, d - .014], [0, .057, d - .014], .0025),
            A("rubber", .012, .005, [0, .059, d - .014]),
            A("shell", .011, .002, [0, .062, d - .014]),
            C("rubber", [-.023, .03, d], [.023, .03, d], .0014))
        }
        let q = {};
        for (let[e,t] of Object.entries(S))
            q[e] = (0,
            a.mergeGeometries)(t, !1),
            t.forEach(e => e.dispose());
        let D = {
            parts: q,
            motors: _,
            radius: w,
            blades: d.blades,
            displayScale: f ? 1.4 : p ? .7 : 1
        };
        return c.set(h, D),
        D
    }
    ], 689330);
    let i = new Map;
    function h() {
        if (t)
            return t;
        let e = new Uint8Array(65536);
        for (let t = 0; t < 128; t++)
            for (let r = 0; r < 128; r++) {
                let o = (Math.floor(r / 16) + Math.floor(t / 16)) % 4 < 2
                  , l = 150 + 24 * Math.sin((o ? t : r) % 16 / 16 * Math.PI) + 5 * ((o ? t : r) % 3 == 0)
                  , a = (128 * t + r) * 4;
                e[a] = e[a + 1] = e[a + 2] = l,
                e[a + 3] = 255
            }
        return (t = new o.DataTexture(e,128,128,o.RGBAFormat)).wrapS = t.wrapT = o.RepeatWrapping,
        t.repeat.set(9, 9),
        t.needsUpdate = !0,
        t
    }
    e.s(["airframeMaterials", 0, function(e, t) {
        let r, l = `${e}:${t.shell}:${t.accent}:${t.props ?? t.accent}`, a = i.get(l);
        if (a)
            return a;
        let n = (e, t, r=0) => new o.MeshStandardMaterial({
            color: e,
            roughness: t,
            metalness: r
        })
          , s = "whoop" === e
          , c = new o.Color(t.shell).multiplyScalar(.16).lerp(new o.Color("#252c35"), .65)
          , u = new o.Color(t.accent).lerp(new o.Color(t.shell), .28).multiplyScalar(.46)
          , f = e => new o.MeshPhysicalMaterial({
            color: e,
            roughness: .3,
            metalness: s ? .18 : .42,
            clearcoat: .28,
            clearcoatRoughness: .24
        })
          , p = {
            carbon: n(c, .43, .34),
            edge: n(u, .39, .45),
            shell: (r = t.shell,
            new o.MeshPhysicalMaterial({
                color: r,
                roughness: s ? .34 : .29,
                metalness: .12 * !s,
                clearcoat: s ? .25 : .48,
                clearcoatRoughness: .28
            })),
            accent: f(t.accent),
            livery: f(t.props ?? t.accent),
            rubber: n("#191e25", .78),
            metal: n("#b8c3ce", .23, .88),
            copper: n("#ba794a", .32, .72),
            board: n("#1f4843", .6, .15),
            red: n("#bf3629", .5),
            glass: new o.MeshPhysicalMaterial({
                color: "#15394c",
                roughness: .075,
                metalness: .5,
                clearcoat: 1,
                clearcoatRoughness: .025,
                iridescence: .25,
                iridescenceIOR: 1.35
            })
        };
        return p.carbon.bumpMap = h(),
        p.carbon.bumpScale = 65e-6,
        p.carbon.roughnessMap = h(),
        i.set(l, p),
        p
    }
    ], 567692)
}
, 663011, e => {
    "use strict";
    e.s(["TIME_WARP_DURATION", 0, 1.1, "TIME_WARP_FLOOR", 0, .2, "slowMoIntensity", 0, function(e) {
        return Math.min(1, Math.max(0, (1 - e) / .8))
    }
    , "timeWarp", 0, {
        scale: 1,
        elapsed: 1.1,
        token: 0
    }, "timeWarpScale", 0, function(e) {
        if (!Number.isFinite(e) || e >= 1.1)
            return 1;
        let t = Math.max(0, e / 1.1);
        return .2 + .8 * t * t * (3 - 2 * t)
    }
    ])
}
]);
