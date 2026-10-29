(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 187333, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , a = e.i(848546)
      , n = e.i(251441)
      , o = e.i(268795)
      , i = e.i(244050);
    e.i(536202);
    var l = e.i(61607)
      , s = e.i(378423)
      , c = e.i(216339)
      , u = e.i(589109)
      , p = e.i(125002);
    e.s(["SimTextures", 0, function({world: e, quality: d, children: m}) {
        let h = (0,
        c.useWorldLook)()
          , f = (0,
        i.useSceneEnvironmentPalette)()
          , g = (0,
        l.useSkyParallax)()
          , C = (0,
        r.useMemo)( () => {
            if (!e)
                return;
            let t = (0,
            s.lookEnvironment)(h, e.environment);
            return "grid" === t.ground.surface ? (0,
            o.themeMapEnvironment)(t, f) : t
        }
        , [e, h, f])
          , S = (0,
        r.useMemo)( () => e ? (0,
        p.textureKeysForWorld)(e) : p.TEXTURE_KEYS, [e])
          , T = (0,
        r.useMemo)( () => [...S.map(e => p.TEXTURE_URLS[e]), ...C && d ? (0,
        n.skyTextureUrls)(C, d, g) : []], [S, C, d, g])
          , y = (0,
        a.useThree)(e => e.gl)
          , M = (0,
        s.gradeLutUrl)(h, e && (0,
        s.lookEnvironment)(h, e.environment));
        (0,
        u.preloadGradeLut)(M, y);
        let A = (0,
        p.loadTextures)(T);
        (0,
        u.loadGradeLut)(M, y);
        let R = y.capabilities.getMaxAnisotropy();
        return (0,
        p.installTextures)(Object.fromEntries(S.map( (e, t) => [e, A[t]])), R),
        (0,
        t.jsx)(t.Fragment, {
            children: m
        })
    }
    ])
}
, 576177, e => {
    e.q("/_next/static/media/surface-detail.worker.21nlkcfu8by5b.ts")
}
, 260095, e => {
    "use strict";
    let t = (0,
    e.i(271645).createContext)(void 0);
    e.s(["TrackWorldContext", 0, t])
}
, 973, e => {
    "use strict";
    var t = e.i(408560)
      , r = e.i(80630);
    let a = {
        powerPreference: "high-performance",
        stencil: !0
    };
    e.s(["simGl", 0, function(e={}) {
        return n => (function(e) {
            let {canvas: n} = e
              , o = {
                alpha: e.alpha ?? !1,
                depth: e.depth ?? !0,
                stencil: a.stencil,
                antialias: e.antialias ?? !1,
                premultipliedAlpha: e.premultipliedAlpha ?? !0,
                preserveDrawingBuffer: e.preserveDrawingBuffer ?? !1,
                powerPreference: a.powerPreference,
                failIfMajorPerformanceCaveat: e.failIfMajorPerformanceCaveat ?? !1
            }
              , i = n.getContext("webgl2", o)
              , l = "reversed" === function(e, t=(0,
            window.location.search)) {
                return e && "log" !== new URLSearchParams(t).get("depth") && e.getExtension("EXT_clip_control") ? "reversed" : "logarithmic"
            }(i)
              , s = new t.WebGLRenderer({
                ...e,
                ...a,
                context: i ?? void 0,
                logarithmicDepthBuffer: !l,
                reversedDepthBuffer: l
            });
            return (0,
            r.keepDrawOrder)(s),
            s
        }
        )({
            ...n,
            ...e
        })
    }
    ])
}
, 130327, e => {
    "use strict";
    var t = e.i(723601)
      , r = e.i(70967)
      , a = e.i(475127);
    r.GRIDWORKS_DRIFT.speed,
    r.GRIDWORKS_DRIFT.maxSlipAngle,
    r.GRIDWORKS_DRIFT.lapSeconds,
    r.GRIDWORKS_DRIFT.fleet;
    let n = (0,
    t.createTrackSample)()
      , o = new Map;
    e.s(["sampleDriftPose", 0, function(e, i, l, s=r.GRIDWORKS_DRIFT) {
        s.line.sample(e * s.speed, n, l),
        i.x = n.x,
        i.z = n.z;
        let c = function(e, r, n) {
            let i = `${n.id}:${r}`
              , l = o.get(i);
            if (!l) {
                let e = new Float64Array(1024)
                  , s = (0,
                t.createTrackSample)();
                for (let t = 0; t < 1024; t++)
                    e[t] = n.line.sample(t / 1024 * n.line.length, s, r).curvature;
                let c = n.slipSmoothingSeconds / n.lapSeconds * 1024
                  , u = Math.ceil(4 * c)
                  , p = Array.from({
                    length: 2 * u + 1
                }, (e, t) => {
                    let r = (t - u) / c;
                    return a.exp(-.5 * r * r)
                }
                )
                  , d = p.reduce( (e, t) => e + t, 0);
                l = new Float64Array(1024);
                for (let t = 0; t < 1024; t++)
                    for (let r = 0; r < p.length; r++)
                        l[t] += e[((t + r - u) % 1024 + 1024) % 1024] * p[r] / d;
                o.set(i, l)
            }
            let s = n.lapSeconds
              , c = (e % s + s) % s / s * 1024
              , u = Math.floor(c)
              , p = c - u
              , d = 1 - p
              , m = p * p * p;
            return l[(u + 1024 - 1) % 1024] * d * d * d / 6 + l[u] * (3 * m - 6 * p * p + 4) / 6 + l[(u + 1) % 1024] * (-3 * m + 3 * p * p + 3 * p + 1) / 6 + l[(u + 2) % 1024] * m / 6
        }(e, l, s)
          , u = c / s.slipReference
          , p = 1 - a.exp(-(u * u));
        return i.slip = s.maxSlipAngle * a.tanh(c * s.slipGain) * p,
        i.yaw = a.atan2(n.tangentX, n.tangentZ) + i.slip,
        i
    }
    ])
}
, 625581, e => {
    "use strict";
    var t = e.i(190072)
      , r = e.i(552260)
      , a = e.i(353198)
      , n = e.i(246747)
      , o = e.i(11871);
    let i = new Map
      , l = new Map;
    function s(e, r) {
        let a = new t.BufferGeometry;
        return a.setAttribute("position", new t.Float32BufferAttribute(e,3)),
        a.setAttribute("uv", new t.Float32BufferAttribute(new Float32Array(e.length / 3 * 2),2)),
        a.setIndex(r),
        a.computeVertexNormals(),
        a
    }
    e.s(["flightGeometry", 0, function(e, c, u=!1, p=!1, d) {
        let m = o.DRONE_PROFILES[e]
          , h = d ?? (0,
        a.droneSkin)(e, c)
          , f = `${e}:${c}:${h.shell}:${h.accent}:${h.props}:${u}:${p}`
          , g = (d ? l : i).get(f);
        if (g)
            return d && (l.delete(f),
            l.set(f, g)),
            g;
        let C = "racer" === e
          , S = "long-range" === e
          , T = "freestyle" === e
          , y = "whoop" === e
          , M = y || "cinewhoop" === e
          , A = []
          , R = "#252a30"
          , G = `#${new t.Color(h.shell).multiplyScalar(.16).lerp(new t.Color("#252c35"), .65).getHexString()}`
          , _ = (e, r, a=0, n=0, o=0) => {
            e.translate(a, n, o);
            let i = e.index ? e.toNonIndexed() : e;
            i !== e && e.dispose();
            let l = new t.Color(r)
              , s = new Float32Array(3 * i.getAttribute("position").count);
            for (let e = 0; e < s.length; e += 3)
                s[e] = l.r,
                s[e + 1] = l.g,
                s[e + 2] = l.b;
            i.setAttribute("color", new t.Float32BufferAttribute(s,3)),
            A.push(i)
        }
          , F = y ? .019 : C ? .028 : .034
          , w = y ? .047 : S ? .145 : C ? .085 : .106;
        if (y || _(new t.BoxGeometry(F,.004,w), G),
        y) {
            _(new t.BoxGeometry(.017,.0014,.017), "#244c43", 0, .004, 0);
            let r = (e, r, a, n) => {
                let o = r.clone().sub(e)
                  , i = e.clone().add(r).multiplyScalar(.5)
                  , l = new t.CylinderGeometry(a,a,o.length(),4);
                l.applyQuaternion(new t.Quaternion().setFromUnitVectors(new t.Vector3(0,1,0), o.normalize())),
                _(l, n, i.x, i.y, i.z)
            }
            ;
            for (let e of [-1, 1]) {
                for (let a of (r(new t.Vector3(.01 * e,-.001,-.011), new t.Vector3(.01 * e,-.001,.011), 8e-4, h.shell),
                r(new t.Vector3(-.01,-.001,.011 * e), new t.Vector3(.01,-.001,.011 * e), 8e-4, h.shell),
                [-.006, .006]))
                    r(new t.Vector3(.0064 * e,-.002,a), new t.Vector3(.0064 * e,.012,a), .001, h.accent);
                r(new t.Vector3(.0064 * e,.012,-.0077), new t.Vector3(.0081 * e,.023,-.0058), 9e-4, h.shell),
                r(new t.Vector3(.0064 * e,.012,.0077), new t.Vector3(.0042 * e,.0151,.0151), 85e-5, h.shell)
            }
            let a = [[-.007, .0078, .015, .0305, .04], [-.0035, .009, .012, .032, .1], [.001, .0095, .011, .0312, .36], [.006, .0088, .011, .0283, .47], [.011, .0068, .0107, .0235, .33], [.0155, .0046, .0107, .0182, .1], [.018, .0026, .011, .0148, .04]]
              , o = []
              , i = []
              , l = []
              , c = [];
            for (let[e,[t,r,n,s,u]] of a.entries()) {
                for (let l = 0; l <= 12; l++) {
                    let c = u + (Math.PI - 2 * u) * l / 12;
                    if (o.push(r * Math.cos(c), n + (s - n) * Math.sin(c), t),
                    e < a.length - 1 && l < 12) {
                        let t = 13 * e + l
                          , r = t + 13;
                        i.push(t, t + 1, r, t + 1, r + 1, r)
                    }
                }
                for (let e of [-1, 1])
                    l.push(e * r * .12, s + 1e-4, t);
                if (e < a.length - 1) {
                    let t = 2 * e;
                    c.push(t, t + 2, t + 1, t + 1, t + 2, t + 3)
                }
            }
            _(s(o, i), h.shell),
            _(s(l, c), h.accent);
            let u = n.CAMERA_DISPLAY_TILT[e] * Math.PI / 180;
            for (let e of (_(new t.TorusGeometry(.0062,95e-5,6,16).rotateX(u), h.shell, 0, .022 + .0068 * Math.sin(u), -.003 - .0068 * Math.cos(u)),
            _(new t.BoxGeometry(.013,.0084,.03), h.shell, 0, -.0072, .004),
            [-.005, .014]))
                _(new t.BoxGeometry(.015,.0102,.0016), h.accent, 0, -.0072, e)
        } else if (C)
            for (let e of (_(new t.CylinderGeometry(.006,.019,.077,10).rotateX(Math.PI / 2).scale(1, .85, 1), h.shell, 0, .021, 0),
            _(new t.BoxGeometry(.003,.028,.03).rotateX(-.35), h.accent, 0, .04, .003),
            _(new t.BoxGeometry(.032,.022,.059), h.shell, 0, -.015, .006),
            [-.01, .022]))
                _(new t.BoxGeometry(.035,.024,.006), h.accent, 0, -.015, e);
        else {
            for (let e of (_(new t.BoxGeometry(F,.003,w), G, 0, .022, 0),
            _(new t.BoxGeometry(.032,.03,.65 * w), h.shell, 0, .04, .006),
            [-.022, .022]))
                _(new t.BoxGeometry(.034,.032,.006), h.accent, 0, .04, e);
            for (let e of [-.013, .013])
                for (let r of [-(.32 * w), .32 * w])
                    _(new t.CylinderGeometry(.002,.002,.022,6), h.accent, e, .011, r)
        }
        let B = n.CAMERA_DISPLAY_TILT[e] * Math.PI / 180
          , x = y ? -.003 : -(.41 * w);
        _(new t.CylinderGeometry(y ? .004 : .007,y ? .005 : .008,.009,12).rotateX(Math.PI / 2 + B), "#173d4c", 0, (y ? .022 : C ? .026 : .014) + .006 * Math.sin(B), x - .006 * Math.cos(B));
        let b = .44 * w;
        if (y) {
            let e = new t.Vector3(0,.005,.005)
              , r = new t.Vector3(0,.034,.0202)
              , a = r.clone().sub(e)
              , n = e.clone().add(r).multiplyScalar(.5)
              , o = new t.CylinderGeometry(65e-5,65e-5,a.length(),6);
            o.applyQuaternion(new t.Quaternion().setFromUnitVectors(new t.Vector3(0,1,0), a.normalize())),
            _(o, R, n.x, n.y, n.z),
            _(new t.CylinderGeometry(.001,.001,.006,6).rotateX(.12), R, 0, .0326, .02)
        } else
            C ? (_(new t.CylinderGeometry(.002,.002,.023,6).rotateX(1.15), h.accent, 0, .023, .041),
            _(new t.CylinderGeometry(.0035,.0035,.01,8).rotateX(1.15), R, 0, .028, .05)) : (_(new t.CylinderGeometry(.0015,.0015,.043,6).rotateX(.25), R, 0, .044, b + .006),
            _(new t.CylinderGeometry(.005,.005,.014,8), h.shell, 0, .067, b + .011));
        if (S) {
            for (let e of [-.018, .018])
                _(new t.BoxGeometry(.004,.018,.086), h.shell, e, .012, .002);
            _(new t.CylinderGeometry(.0025,.0025,.035,6), h.accent, 0, .04, b - .014),
            _(new t.CylinderGeometry(.012,.012,.006,12), h.shell, 0, .06, b - .014)
        }
        for (let e of (p && (A.forEach(e => e.dispose()),
        A.length = 0),
        [1, -1]))
            for (let r of [-1, 1]) {
                let a = e * m.reachX
                  , n = r * m.reachZ;
                if (y)
                    _(new t.TubeGeometry(new t.CatmullRomCurve3([new t.Vector3(.005 * e,-.0021,.006 * r), new t.Vector3(.48 * a,-.0026,.4 * n), new t.Vector3(.73 * a,-.0025,.68 * n), new t.Vector3(a,-.0023,n)]),4,.00105,4,!1), h.shell);
                else {
                    let e = new t.BoxGeometry(.014,.005,Math.hypot(a, n));
                    e.rotateY(Math.atan2(a, n)),
                    _(e, G, a / 2, -.002, n / 2)
                }
                y || _(new t.BoxGeometry(S || T ? .015 : .0105,.003,.62 * Math.hypot(a, n)).rotateY(Math.atan2(a, n)), h.shell, .51 * a, .004, .51 * n);
                let o = m.propY - (y ? .004 : .01);
                if (_(new t.CylinderGeometry(y ? .0031 : .0074,y ? .0031 : .0074,o - -.003,8), "#939b9f", a, (o + -.003) / 2, n),
                _(new t.CylinderGeometry(y ? .005 : .012,y ? .005 : .012,y ? .006 : .016,10), h.accent, a, m.propY - (y ? .004 : .01), n),
                y) {
                    let e = m.propRadius + .0015
                      , r = e + .0011
                      , o = []
                      , i = []
                      , l = Math.atan2(-n, -a);
                    for (let t = 0; t <= 20; t++) {
                        let s = t / 20 * Math.PI * 2
                          , c = -.0033 + .0065 * (1 - Math.cos(3 * (s - l))) / 2;
                        for (let[t,i] of [[e, c], [e, .0103], [r, .0103], [r, c]])
                            o.push(a + Math.cos(s) * t, i, n + Math.sin(s) * t);
                        if (t < 20)
                            for (let e = 0; e < 4; e++) {
                                let r = 4 * t + e
                                  , a = 4 * t + (e + 1) % 4;
                                i.push(r, r + 4, a, a, r + 4, a + 4)
                            }
                    }
                    _(s(o, i), h.shell),
                    _(new t.RingGeometry(e,r,20).rotateX(-Math.PI / 2), h.accent, a, .0104, n);
                    for (let r = 0; r < 3; r++) {
                        let o = l + r * Math.PI * 2 / 3
                          , i = [[.0033, -.0024, -.34], [.0078, -.0021, -.23], [.0125, -.0011, -.13], [e + 5e-4, -.0027, 0]];
                        _(new t.TubeGeometry(new t.CatmullRomCurve3(i.map( ([e,r,i]) => new t.Vector3(a + Math.cos(o + i) * e,r,n + Math.sin(o + i) * e))),3,68e-5,3,!1), h.shell)
                    }
                } else if (M) {
                    let e = m.propRadius + .0025
                      , r = e + .0045;
                    for (let o of (_(new t.CylinderGeometry(r,r,.03,16,1,!0), h.shell, a, (-.006 + .024) / 2, n),
                    _(new t.CylinderGeometry(e,e,.03,16,1,!0).scale(-1, 1, 1), h.shell, a, (-.006 + .024) / 2, n),
                    [-.006, .024]))
                        _(new t.RingGeometry(e,r,16).rotateX(-Math.PI / 2), h.accent, a, o, n);
                    for (let o = 0; o < 3; o++) {
                        let i = o * Math.PI * 2 / 3
                          , l = new t.Vector3(Math.cos(i) * (e + r) / 2,0,Math.sin(i) * (e + r) / 2)
                          , s = new t.CylinderGeometry(.0015,.0015,l.length(),5);
                        s.applyQuaternion(new t.Quaternion().setFromUnitVectors(new t.Vector3(0,1,0), l.clone().normalize())),
                        _(s, R, a + l.x / 2, -.003, n + l.z / 2)
                    }
                }
                if (u)
                    for (let e = 0; e < m.blades; e++) {
                        let r = e * Math.PI * 2 / m.blades
                          , o = new t.BoxGeometry(.2 * m.propRadius,8e-4,.91 * m.propRadius);
                        o.translate(0, 0, .52 * m.propRadius).rotateY(r),
                        _(o, h.props, a, m.propY, n)
                    }
            }
        let L = (0,
        r.mergeGeometries)(A);
        return A.forEach(e => e.dispose()),
        L.computeBoundingSphere(),
        d ? (l.set(f, L),
        l.size > 32 && l.delete(l.keys().next().value)) : i.set(f, L),
        L
    }
    ])
}
, 790504, e => {
    "use strict";
    let t = "#ff3a3a"
      , r = "#ffffff"
      , a = [255, 255, 255];
    function n(e) {
        let t = e.trim().replace("#", "")
          , r = 3 === t.length ? `${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}` : t;
        if (!/^[0-9a-fA-F]{6}$/.test(r))
            return null;
        let a = Number.parseInt(r, 16);
        return [a >> 16 & 255, a >> 8 & 255, 255 & a]
    }
    function o(e, t, r) {
        let a = e => Math.max(0, Math.min(255, Math.round(e))).toString(16).padStart(2, "0");
        return `#${a(e)}${a(t)}${a(r)}`
    }
    function i(e, t, r) {
        return [e[0] + (t[0] - e[0]) * r, e[1] + (t[1] - e[1]) * r, e[2] + (t[2] - e[2]) * r]
    }
    function l(e, t, r) {
        let a = t - (r?.duration ?? 1.4)
          , n = 0;
        for (; n < e.length && e[n].t < a; )
            n += 1;
        n > 0 && e.splice(0, n);
        let o = r?.maxPoints ?? 384;
        e.length > o && e.splice(0, e.length - o)
    }
    e.s(["AMBIENT_GHOST_COLOR", 0, r, "GHOST_POOF_COUNT", 0, 8, "GHOST_POOF_DURATION", 0, .5, "GHOST_PRESENCE_FADE_IN", 0, .2, "GHOST_TRAIL_CORE_POWER", 0, 8, "GHOST_TRAIL_DURATION", 0, 1.4, "GHOST_TRAIL_MAX_POINTS", 0, 384, "GHOST_TRAIL_TAIL_SCALE", 0, .35, "GHOST_TRAIL_WIDTH", 0, .18, "SOLID_GHOST_TRAIL_LOOK", 0, {
        coreGain: .95,
        haloGain: .35,
        coreCover: .7,
        haloCover: .3,
        corePower: 3
    }, "TIME_ATTACK_GHOST_COLOR", 0, t, "appendGhostTrailPoint", 0, function(e, t, r, a, n) {
        (function(e, t, r, a=.08) {
            if (r)
                return !1;
            if (!e)
                return !0;
            let n = t.x - e.x
              , o = t.y - e.y
              , i = t.z - e.z;
            return n * n + o * o + i * i >= a * a
        }
        )(e[e.length - 1] ?? null, t, a, n?.stride) && (e.push({
            x: t.x,
            y: t.y,
            z: t.z,
            t: r
        }),
        l(e, r, n))
    }
    , "ghostPoofAlpha", 0, function(e, t=.5, r=.22) {
        if (e <= 0 || t <= 0 || e >= t)
            return 0;
        let a = e / t
          , n = Math.min(.95, Math.max(.05, r));
        return a < n ? a / n : 1 - (a - n) / (1 - n)
    }
    , "ghostPoofTravel", 0, function(e, t=.5) {
        if (t <= 0)
            return 1;
        let r = Math.min(1, Math.max(0, e / t));
        return 1 - (1 - r) * (1 - r)
    }
    , "ghostPresenceAlpha", 0, function(e, t, r=.2, a=.15) {
        return "live" === t ? 1 : "entering" === t ? r <= 0 ? 1 : e <= 0 ? 0 : Math.min(1, e / r) : a <= 0 ? 0 : e <= 0 ? 1 : Math.max(0, 1 - e / a)
    }
    , "ghostProximityOpacity", 0, function(e, t=2, r=.45) {
        return e >= t ? 1 : e <= r ? 0 : (e - r) / (t - r)
    }
    , "ghostStyle", 0, function(e) {
        let l = n(e) ?? n(t)
          , s = o(...l)
          , c = o(...i(l, a, .42))
          , u = o(...i(l, a, .16))
          , p = o(...i(l, a, .78))
          , d = s === r;
        return {
            color: s,
            body: s,
            nose: c,
            arm: u,
            trailCore: p,
            trailHalo: s,
            bodyOpacity: .62,
            noseOpacity: .85,
            armOpacity: .55,
            haloOpacity: d ? .08 : .42,
            haloRadius: d ? .07 : .15,
            trailCoreOpacity: .95,
            trailHaloOpacity: .22
        }
    }
    , "pruneGhostTrailPoints", 0, l, "trailAgeAlpha", 0, function(e, t=1.4, r=1.8) {
        return t <= 0 || e >= t ? 0 : e <= 0 ? 1 : (1 - e / t) ** r
    }
    ])
}
, 79856, e => {
    "use strict";
    var t = e.i(622803)
      , r = e.i(466348)
      , a = e.i(930215);
    function n(e) {
        return `${Math.floor(e.elements[12] / 40)},${Math.floor(e.elements[14] / 40)}`
    }
    e.s(["mapChunk", 0, n, "staticCollisionChunks", 0, function(e) {
        let o = "gridworks" === e.mapId ? 16384 : 4096
          , i = (0,
        a.resolveDocument)(e)
          , l = (0,
        t.worldMatrices)(i)
          , s = new Map;
        for (let e of i.nodes) {
            if (!e.geometry || e.ghost || e.motion || !(0,
            r.collides)(e.geometry))
                continue;
            let t = l.get(e.id)
              , a = n(t)
              , o = s.get(a) ?? {
                vertices: [],
                indices: []
            }
              , i = (0,
            r.collisionMesh)(e.geometry, t)
              , c = o.vertices.length / 3;
            for (let e of i.vertices)
                o.vertices.push(e);
            for (let e of i.indices)
                o.indices.push(e + c);
            s.set(a, o)
        }
        return [...s].flatMap( ([e,t]) => {
            let r = function(e, t=4096) {
                let r = e.indices.length / 3;
                if (r <= t)
                    return [e];
                let a = new Float64Array(3 * r);
                for (let t = 0; t < r; t++)
                    for (let r = 0; r < 3; r++) {
                        let n = 0;
                        for (let a = 0; a < 3; a++)
                            n += e.vertices[3 * e.indices[3 * t + a] + r];
                        a[3 * t + r] = n
                    }
                let n = []
                  , o = r => {
                    if (r.length <= t)
                        return void n.push(function(e, t) {
                            let r = new Map
                              , a = []
                              , n = [];
                            for (let o of t)
                                for (let t = 0; t < 3; t++) {
                                    let i = e.indices[3 * o + t]
                                      , l = r.get(i);
                                    void 0 === l && (l = r.size,
                                    r.set(i, l),
                                    a.push(e.vertices[3 * i], e.vertices[3 * i + 1], e.vertices[3 * i + 2])),
                                    n.push(l)
                                }
                            return {
                                vertices: a,
                                indices: n
                            }
                        }(e, r));
                    let i = 0
                      , l = -1;
                    for (let e = 0; e < 3; e++) {
                        let t = 1 / 0
                          , n = -1 / 0;
                        for (let o of r) {
                            let r = a[3 * o + e];
                            r < t && (t = r),
                            r > n && (n = r)
                        }
                        n - t > l && (l = n - t,
                        i = e)
                    }
                    let s = [...r].sort( (e, t) => a[3 * e + i] - a[3 * t + i] || e - t)
                      , c = s.length >> 1;
                    o(s.slice(0, c)),
                    o(s.slice(c))
                }
                ;
                return o(Array.from({
                    length: r
                }, (e, t) => t)),
                n
            }(t, o);
            return r.map( (t, a) => ({
                id: r.length > 1 ? `${e}:${a}` : e,
                vertices: new Float32Array(t.vertices),
                indices: new Uint32Array(t.indices)
            }))
        }
        )
    }
    ])
}
, 504786, 287558, 212236, e => {
    "use strict";
    let t, r, a, n, o, i;
    var l, s = e.i(190072), c = e.i(622803), u = e.i(70967), p = e.i(745192), d = e.i(337925);
    let m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , h = new Int8Array(128).fill(-1);
    for (let e = 0; e < m.length; e++)
        h[m.charCodeAt(e)] = e;
    let f = ["x", "z", "yaw", "slip", "speed", "height", "roll", "pitch", "steer", "rpm", "gear", "throttle", "brake", "station", "spinFL", "spinFR", "spinRear", "ratioFL", "ratioFR", "ratioRL", "ratioRR", "slipFL", "slipFR", "slipRL", "slipRR"]
      , g = f.length
      , C = f.indexOf("yaw")
      , S = f.indexOf("speed")
      , T = f.indexOf("gear")
      , y = f.indexOf("throttle")
      , M = f.indexOf("brake")
      , A = f.indexOf("station")
      , R = f.indexOf("spinFL")
      , G = f.indexOf("ratioFL")
      , _ = f.indexOf("slipFL")
      , F = [f.indexOf("x"), f.indexOf("z"), C, f.indexOf("slip"), S, f.indexOf("height"), f.indexOf("roll"), f.indexOf("pitch"), f.indexOf("steer"), f.indexOf("rpm"), A]
      , w = ["x", "z", "yaw", "slip", "speed", "height", "roll", "pitch", "steer", "rpm", "station"]
      , B = [S, R, R + 1, R + 2]
      , x = 2 * Math.PI
      , b = (e, t) => e - Math.floor(e / t) * t;
    function L(e, t, r, a, n) {
        return n * (t + n * ((r - e) / 4 + n * ((2 * e - 5 * t + 4 * r - a) / 6 + n * (3 * (t - r) + a - e) / 8)))
    }
    let D = "race-table-data.ts is out of date: run scripts/generate-drift-race.ts";
    function v(e, t, r, a) {
        let n = t.rows.length / g;
        if (r < 0) {
            let o = e[t.previous];
            return o.rows[(n + r) * g + a] - o.gains[a]
        }
        return r >= n ? e[t.next].rows[(r - n) * g + a] + t.gains[a] : t.rows[r * g + a]
    }
    function E(e, t, r, a, n, o, i, l) {
        let {drives: s, step: c} = e
          , u = B[l];
        return n * r.totalSums[l] + r.sums[4 * a + l] + t.sums[4 * o + l] + c * L(v(s, t, o - 1, u), v(s, t, o, u), v(s, t, o + 1, u), v(s, t, o + 2, u), i)
    }
    function I(e, t, r, a) {
        let {duration: n, count: o, step: i, drives: l} = e
          , s = e.cars[t]
          , c = s.drives.length
          , u = Math.floor(r / n)
          , p = (u % c + c) % c
          , d = (u - p) / c
          , m = l[s.drives[p]]
          , h = (r - u * n) / i
          , f = Math.max(0, Math.min(o - 1, Math.floor(h)))
          , C = h - f
          , S = e => {
            var t, r, a, n;
            return t = v(l, m, f - 1, e),
            r = v(l, m, f, e),
            a = v(l, m, f + 1, e),
            r + .5 * C * (a - t + C * (2 * t - 5 * r + 4 * a - (n = v(l, m, f + 2, e)) + C * (3 * (r - a) + n - t))) + d * s.totalGains[e] + s.gains[p * g + e]
        }
        ;
        for (let e = 0; e < F.length; e++)
            a[w[e]] = S(F[e]);
        a.gear = m.rows[f * g + T],
        a.throttle = Math.max(0, Math.min(1, S(y))),
        a.brake = Math.max(0, Math.min(1, S(M))),
        a.yaw = b(a.yaw + Math.PI, x) - Math.PI,
        a.distance = E(e, m, s, p, d, f, C, 0);
        let A = a.spins ??= [0, 0, 0, 0]
          , B = a.spinRates ??= [0, 0, 0, 0]
          , L = a.wheelSlipRatios ??= [0, 0, 0, 0]
          , D = a.wheelSlipAngles ??= [0, 0, 0, 0];
        for (let t = 0; t < 4; t++) {
            let r = t < 2 ? t : 2;
            A[t] = b(E(e, m, s, p, d, f, C, 1 + r), x),
            B[t] = S(R + r),
            L[t] = S(G + t),
            D[t] = S(_ + t)
        }
        return a.clock = r,
        a
    }
    let P = [{
        id: "ember",
        color: "#ed641c"
    }, {
        id: "glacier",
        color: "#249cc0"
    }, {
        id: "pearl",
        color: "#cfd3d4"
    }, {
        id: "crimson",
        color: "#ba213d"
    }, {
        id: "violet",
        color: "#7954c4"
    }, {
        id: "lime",
        color: "#86b838"
    }, {
        id: "cobalt",
        color: "#2f5fd0"
    }, {
        id: "gold",
        color: "#d8a526"
    }]
      , O = (e, t) => ({
        name: e,
        apex: d.GRAND_SECTORS[e],
        reach: 80,
        moves: t
    })
      , k = {
        id: "grand",
        seed: 0x6a2d0001,
        track: u.GRAND_DRIFT.track,
        car: {
            halfLength: 2.43,
            halfWidth: 1.18,
            clearance: .4,
            edge: .25
        },
        pace: {
            grip: 4.6,
            accelerate: 3,
            brake: 5,
            slowest: 10,
            fastest: 20,
            spacing: .5,
            basis: "line",
            near: 3
        },
        line: {
            lateral: 3,
            near: 9,
            far: 22,
            sharpness: 90,
            smoothing: 3,
            variation: .15
        },
        slip: {
            max: .73,
            reference: .018,
            gain: 45,
            smoothing: .7,
            chaser: .075,
            straighten: {
                dive: .15,
                mistake: .5
            }
        },
        trains: [{
            cars: [0, 1, 2],
            phase: 0
        }, {
            cars: [3, 4, 5],
            phase: 1 / 3
        }, {
            cars: [6, 7],
            phase: 2 / 3
        }],
        cycle: {
            laps: 4,
            seam: 20
        },
        gaps: {
            home: .6,
            min: .55,
            after: .65,
            breathe: .15
        },
        door: {
            offset: .5,
            on: .15,
            near: .75,
            far: 1.2
        },
        lanes: {
            separation: 0,
            heading: 0,
            engage: [.02, .2],
            release: [.82, .98]
        },
        rates: {
            gain: .22,
            loss: .32,
            mistake: .4
        },
        odds: {
            move: .35,
            mistake: .3,
            dropTwo: .3,
            chargeBack: .5,
            breathe: .3
        },
        zones: [O("gantrySweeper", ["dive"]), O("hook", ["dive", "mistake"]), O("towerHairpin", ["dive", "mistake"]), O("westFlicks", ["dive"]), O("driftHall", ["dive", "mistake"]), O("carousel", ["dive", "mistake"]), O("loop", ["dive", "mistake"]), O("mediaHairpin", ["dive", "mistake"])]
    };
    function U() {
        if (!t)
            throw Error("Drift Park's race is not loaded: await loadDriftParkRace() before sampling its cars");
        return t
    }
    (0,
    p.createRace)(k);
    let N = (e, t, r) => I(U(), e, t, r);
    function H() {
        return a ??= {
            kind: "racing",
            id: "grand",
            cars: P,
            maxSpeed: 20,
            sample(e, t) {
                let r = U();
                for (let a = 0; a < t.length; a++)
                    I(r, a, e, t[a]);
                return t
            },
            sampleCar: N
        }
    }
    e.s(["GRAND_CARS", 0, P, "driftParkRace", 0, U, "driftParkRaceLoaded", 0, () => void 0 !== t, "grandTraffic", 0, H, "loadDriftParkRace", 0, function() {
        return r ??= e.A(891562).then(e => {
            let r = function(e) {
                if (4 !== e.version || e.fields.length !== g || f.some( (t, r) => e.fields[r] !== t))
                    throw Error(D);
                let {count: t} = e
                  , r = e.duration / t
                  , a = function(e, t, r, a) {
                    let n = 0
                      , o = () => {
                        let t = 0, r = 1, a;
                        do {
                            if (!((a = h[e.charCodeAt(n++)]) >= 0))
                                throw Error(D);
                            t += (31 & a) * r,
                            r *= 32
                        } while (32 & a) return t % 2 ? (1 - t) / 2 : t / 2
                    }
                      , i = Array.from({
                        length: t
                    }, () => {
                        let e = new Float32Array(r * g);
                        for (let t = 0; t < g; t++) {
                            let n = a[t]
                              , i = 0
                              , l = 0;
                            for (let a = 0; a < r; a++)
                                i += o(),
                                l += i,
                                e[a * g + t] = l * n
                        }
                        return e
                    }
                    );
                    if (n !== e.length)
                        throw Error(D);
                    return i
                }(e.checkpoints, e.drives.length, t, e.quanta)
                  , n = e.drives.map( (e, r) => ({
                    rows: a[r],
                    gains: e.gains,
                    next: e.next,
                    previous: -1,
                    sums: new Float64Array(4 * t),
                    totals: new Float64Array(4)
                }));
                for (let e of (n.forEach( (e, t) => {
                    n[e.next].previous = t
                }
                ),
                n))
                    for (let a = 0; a < 4; a++) {
                        let o = B[a]
                          , i = 0;
                        for (let l = 0; l < t; l++)
                            e.sums[4 * l + a] = i,
                            i += r * L(v(n, e, l - 1, o), v(n, e, l, o), v(n, e, l + 1, o), v(n, e, l + 2, o), 1);
                        e.totals[a] = i
                    }
                let o = e.cars.map(e => {
                    let t = [e.drive];
                    for (; n[t[t.length - 1]].next !== e.drive; )
                        t.push(n[t[t.length - 1]].next);
                    let r = new Float64Array(4 * t.length)
                      , a = new Float64Array(t.length * g)
                      , o = new Float64Array(4)
                      , i = new Float64Array(g);
                    return t.forEach( (e, t) => {
                        for (let a = 0; a < 4; a++)
                            r[4 * t + a] = o[a],
                            o[a] += n[e].totals[a];
                        for (let r = 0; r < g; r++)
                            a[t * g + r] = i[r],
                            i[r] += n[e].gains[r]
                    }
                    ),
                    {
                        drives: t,
                        sums: r,
                        gains: a,
                        totalSums: o,
                        totalGains: i
                    }
                }
                );
                return {
                    duration: e.duration,
                    count: t,
                    step: r,
                    drives: n,
                    cars: o
                }
            }({
                ...e.raceTableHeader(),
                checkpoints: e.raceTableCheckpoints()
            });
            if (r.cars.length !== P.length)
                throw Error("race-table-data.ts has the wrong number of Drift Park cars");
            return t = r
        }
        , e => {
            throw r = void 0,
            e
        }
        )
    }
    ], 287558);
    var V = e.i(130327);
    let z = (n = (l = u.GRIDWORKS_DRIFT).fleet.map(e => e.startDistance / l.speed),
    o = l.fleet.map( (e, t) => t),
    i = (e, t, r) => {
        let a = t + n[e];
        return (0,
        V.sampleDriftPose)(a, r, e, l),
        r.distance = a * l.speed,
        r.speed = l.speed,
        r.clock = a,
        r
    }
    ,
    {
        kind: "classic-lap",
        id: l.id,
        circuit: l,
        cars: l.fleet,
        maxSpeed: l.speed,
        offsets: n,
        variations: o,
        sampleCar: i,
        sample(e, t) {
            for (let r = 0; r < t.length; r++)
                i(r, e, t[r]);
            return t
        }
    });
    function W(e) {
        return "grand" === e ? H() : z
    }
    e.s(["createDriftCarState", 0, () => ({
        x: 0,
        z: 0,
        yaw: 0,
        slip: 0,
        distance: 0,
        speed: 0,
        clock: 0
    }), "driftTraffic", 0, W, "driftTrafficById", 0, function(e) {
        return W("grand" === e ? "grand" : "gridworks")
    }
    ], 212236),
    e.s(["hasDriftParkTrack", 0, function(e) {
        return !!e?.editorDocument?.nodes.some(e => (0,
        u.isDriftTrackPrefab)(e.prefab?.id) && "grand" === u.DRIFT_TRACK_PREFABS[e.prefab.id])
    }
    , "hasDriftTrack", 0, function(e) {
        return e?.editorDocument ? e.editorDocument.nodes.some(e => (0,
        u.isDriftTrackPrefab)(e.prefab?.id)) : !e || "gridworks" === e.mapId
    }
    , "trackInstances", 0, function(e) {
        if (!e?.editorDocument)
            return e && "gridworks" !== e.mapId ? [] : [{
                id: "original-track",
                matrix: new s.Matrix4,
                circuit: u.GRIDWORKS_DRIFT,
                traffic: z
            }];
        let t = e.editorDocument
          , r = (0,
        c.worldMatrices)(t);
        return t.nodes.filter(e => (0,
        u.isDriftTrackPrefab)(e.prefab?.id)).map(e => {
            let t = u.DRIFT_TRACK_PREFABS[e.prefab.id]
              , a = u.DRIFT_CIRCUITS[t];
            return {
                id: e.id,
                matrix: r.get(e.id).clone().multiply(new s.Matrix4().makeTranslation(...a.editorOffset)),
                circuit: a,
                traffic: W(t)
            }
        }
        )
    }
    ], 504786)
}
, 129053, (e, t, r) => {
    t.exports = {
        url: "/sim/detail/surface-detail.webp?v=98e167c488",
        size: 384,
        kinds: ["plaster", "concrete", "floor-tile", "asphalt", "brushed-metal", "wood", "roof-membrane"]
    }
}
, 468105, 250923, e => {
    "use strict";
    var t = e.i(129053);
    let r = ["plaster", "concrete", "floor-tile", "asphalt", "brushed-metal", "wood", "roof-membrane"]
      , a = {
        plaster: {
            scale: 2.4,
            floor: !1,
            grid: !0,
            tone: .3,
            bump: .06,
            roughness: .06,
            base: [.92, .36]
        },
        concrete: {
            scale: 2.4,
            floor: !1,
            grid: !0,
            tone: .45,
            bump: .12,
            roughness: .08,
            base: [.92, .36]
        },
        "floor-tile": {
            scale: 0,
            floor: !0,
            grid: !0,
            tone: .4,
            bump: .08,
            roughness: .1,
            base: [.8, .3]
        },
        asphalt: {
            scale: 1.6,
            floor: !0,
            grid: !1,
            tone: .55,
            bump: .18,
            roughness: .05,
            base: [.94, .78]
        },
        "brushed-metal": {
            scale: 1.2,
            floor: !1,
            grid: !0,
            tone: .3,
            bump: .03,
            roughness: .12,
            base: [1, .12]
        },
        wood: {
            scale: 1.6,
            floor: !1,
            grid: !0,
            tone: .5,
            bump: .08,
            roughness: .08,
            base: [.9, .4]
        },
        "roof-membrane": {
            scale: 2.4,
            floor: !0,
            grid: !0,
            tone: .4,
            bump: .12,
            roughness: .06,
            base: [.95, .5]
        }
    };
    [...r];
    let n = t.default;
    function o(e, t, r) {
        let a = t * t;
        if (e.length !== a * r)
            throw Error(`Surface detail: ${e.length} tones for ${r} layers of ${t} px`);
        for (let t = 0; t < r; t++) {
            let r = 0
              , n = 0;
            for (let o = t * a; o < (t + 1) * a; o++)
                r += e[o],
                n += e[o] * e[o];
            let o = r / a
              , i = Math.sqrt(Math.max(0, n / a - o * o));
            if (Math.abs(o - 128) > .5 || Math.abs(i / 24 - 1) > .15)
                throw Error(`Surface detail: layer ${t} reads mean ${o.toFixed(2)}, spread ${i.toFixed(2)}; the canvas readback was altered`)
        }
    }
    function i(e, t, r=new Uint8Array(t * t * 4)) {
        let a = (r, a) => e[(a + t) % t * t + (r + t) % t]
          , n = new Float32Array(t * t * 2)
          , o = 0;
        for (let e = 0; e < t; e++)
            for (let r = 0; r < t; r++) {
                let i = a(r + 1, e - 1) + 2 * a(r + 1, e) + a(r + 1, e + 1) - (a(r - 1, e - 1) + 2 * a(r - 1, e) + a(r - 1, e + 1))
                  , l = a(r - 1, e + 1) + 2 * a(r, e + 1) + a(r + 1, e + 1) - (a(r - 1, e - 1) + 2 * a(r, e - 1) + a(r + 1, e - 1))
                  , s = (e * t + r) * 2;
                n[s] = i,
                n[s + 1] = l,
                o = Math.max(o, Math.abs(i), Math.abs(l))
            }
        let l = Float32Array.from({
            length: t * t
        }, (e, t) => Math.max(Math.abs(n[2 * t]), Math.abs(n[2 * t + 1])));
        l.sort();
        let s = Math.max(1, l[Math.floor(.98 * l.length)] || o)
          , c = e => Math.max(0, Math.min(255, Math.round(128 + 127 * e)));
        for (let o = 0; o < t; o++)
            for (let i = 0; i < t; i++) {
                let l = o * t + i
                  , u = 4 * l
                  , p = (a(i - 1, o) + a(i + 1, o) + a(i, o - 1) + a(i, o + 1) + 4 * a(i, o)) / 8;
                r[u] = e[l],
                r[u + 1] = c(-(p - 128) / 64),
                r[u + 2] = c(n[2 * l] / s),
                r[u + 3] = c(n[2 * l + 1] / s)
            }
        return r
    }
    async function l(e) {
        let t = await fetch(e);
        if (!t.ok)
            throw Error(`Surface detail ${e}: ${t.status}`);
        let a = await createImageBitmap(await t.blob(), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
        })
          , {size: i} = n;
        if (a.width !== i || a.height !== i * r.length)
            throw Error(`Surface detail: unexpected ${a.width} x ${a.height} strip`);
        let {width: l, height: s} = a
          , c = new OffscreenCanvas(l,s).getContext("2d", {
            willReadFrequently: !0
        });
        if (!c)
            throw Error("Surface detail: no 2D context to decode the strip");
        c.drawImage(a, 0, 0),
        a.close();
        let u = c.getImageData(0, 0, l, s).data
          , p = new Uint8Array(u.length / 4);
        for (let e = 0; e < p.length; e++)
            p[e] = u[4 * e];
        return o(p, i, r.length),
        p
    }
    e.s(["DETAIL_KINDS", 0, r, "DETAIL_KIND_INFO", 0, a, "DETAIL_SET", 0, n, "checkDetailTone", 0, o, "detailKindIndex", 0, function(e) {
        return r.indexOf(e)
    }
    , "detailLayer", 0, i, "detailLayers", 0, function(e, t, r) {
        let a = t * t
          , n = new Uint8Array(4 * a * r);
        for (let o = 0; o < r; o++)
            i(e.subarray(o * a, (o + 1) * a), t, n.subarray(o * a * 4, (o + 1) * a * 4));
        return n
    }
    , "finishTagInfo", 0, function(e) {
        return "wood-floor" === e ? {
            kind: "wood",
            floor: !0
        } : {
            kind: e,
            floor: a[e].floor
        }
    }
    ], 468105),
    e.s(["decodeDetailTone", 0, l], 250923)
}
, 575056, e => {
    "use strict";
    var t = e.i(270950)
      , r = e.i(271645)
      , a = e.i(408560)
      , n = e.i(190072);
    e.s(["ACESFilmicToneMapping", () => n.ACESFilmicToneMapping, "AddEquation", () => n.AddEquation, "AddOperation", () => n.AddOperation, "AdditiveAnimationBlendMode", () => n.AdditiveAnimationBlendMode, "AdditiveBlending", () => n.AdditiveBlending, "AgXToneMapping", () => n.AgXToneMapping, "AlphaFormat", () => n.AlphaFormat, "AlwaysCompare", () => n.AlwaysCompare, "AlwaysDepth", () => n.AlwaysDepth, "AlwaysStencilFunc", () => n.AlwaysStencilFunc, "AmbientLight", () => n.AmbientLight, "AnimationAction", () => n.AnimationAction, "AnimationClip", () => n.AnimationClip, "AnimationLoader", () => n.AnimationLoader, "AnimationMixer", () => n.AnimationMixer, "AnimationObjectGroup", () => n.AnimationObjectGroup, "AnimationUtils", () => n.AnimationUtils, "ArcCurve", () => n.ArcCurve, "ArrayCamera", () => n.ArrayCamera, "ArrowHelper", () => n.ArrowHelper, "AttachedBindMode", () => n.AttachedBindMode, "Audio", () => n.Audio, "AudioAnalyser", () => n.AudioAnalyser, "AudioContext", () => n.AudioContext, "AudioListener", () => n.AudioListener, "AudioLoader", () => n.AudioLoader, "AxesHelper", () => n.AxesHelper, "BackSide", () => n.BackSide, "BasicDepthPacking", () => n.BasicDepthPacking, "BasicShadowMap", () => n.BasicShadowMap, "BatchedMesh", () => n.BatchedMesh, "BezierInterpolant", () => n.BezierInterpolant, "Bone", () => n.Bone, "BooleanKeyframeTrack", () => n.BooleanKeyframeTrack, "Box2", () => n.Box2, "Box3", () => n.Box3, "Box3Helper", () => n.Box3Helper, "BoxGeometry", () => n.BoxGeometry, "BoxHelper", () => n.BoxHelper, "BufferAttribute", () => n.BufferAttribute, "BufferGeometry", () => n.BufferGeometry, "BufferGeometryLoader", () => n.BufferGeometryLoader, "ByteType", () => n.ByteType, "Cache", () => n.Cache, "Camera", () => n.Camera, "CameraHelper", () => n.CameraHelper, "CanvasTexture", () => n.CanvasTexture, "CapsuleGeometry", () => n.CapsuleGeometry, "CatmullRomCurve3", () => n.CatmullRomCurve3, "CineonToneMapping", () => n.CineonToneMapping, "CircleGeometry", () => n.CircleGeometry, "ClampToEdgeWrapping", () => n.ClampToEdgeWrapping, "Clock", () => n.Clock, "Color", () => n.Color, "ColorKeyframeTrack", () => n.ColorKeyframeTrack, "ColorManagement", () => n.ColorManagement, "Compatibility", () => n.Compatibility, "CompressedArrayTexture", () => n.CompressedArrayTexture, "CompressedCubeTexture", () => n.CompressedCubeTexture, "CompressedTexture", () => n.CompressedTexture, "CompressedTextureLoader", () => n.CompressedTextureLoader, "ConeGeometry", () => n.ConeGeometry, "ConstantAlphaFactor", () => n.ConstantAlphaFactor, "ConstantColorFactor", () => n.ConstantColorFactor, "Controls", () => n.Controls, "CubeCamera", () => n.CubeCamera, "CubeDepthTexture", () => n.CubeDepthTexture, "CubeReflectionMapping", () => n.CubeReflectionMapping, "CubeRefractionMapping", () => n.CubeRefractionMapping, "CubeTexture", () => n.CubeTexture, "CubeTextureLoader", () => n.CubeTextureLoader, "CubeUVReflectionMapping", () => n.CubeUVReflectionMapping, "CubicBezierCurve", () => n.CubicBezierCurve, "CubicBezierCurve3", () => n.CubicBezierCurve3, "CubicInterpolant", () => n.CubicInterpolant, "CullFaceBack", () => n.CullFaceBack, "CullFaceFront", () => n.CullFaceFront, "CullFaceFrontBack", () => n.CullFaceFrontBack, "CullFaceNone", () => n.CullFaceNone, "Curve", () => n.Curve, "CurvePath", () => n.CurvePath, "CustomBlending", () => n.CustomBlending, "CustomToneMapping", () => n.CustomToneMapping, "CylinderGeometry", () => n.CylinderGeometry, "Cylindrical", () => n.Cylindrical, "Data3DTexture", () => n.Data3DTexture, "DataArrayTexture", () => n.DataArrayTexture, "DataTexture", () => n.DataTexture, "DataTextureLoader", () => n.DataTextureLoader, "DataUtils", () => n.DataUtils, "DecrementStencilOp", () => n.DecrementStencilOp, "DecrementWrapStencilOp", () => n.DecrementWrapStencilOp, "DefaultLoadingManager", () => n.DefaultLoadingManager, "DepthFormat", () => n.DepthFormat, "DepthStencilFormat", () => n.DepthStencilFormat, "DepthTexture", () => n.DepthTexture, "DetachedBindMode", () => n.DetachedBindMode, "DirectionalLight", () => n.DirectionalLight, "DirectionalLightHelper", () => n.DirectionalLightHelper, "DiscreteInterpolant", () => n.DiscreteInterpolant, "DodecahedronGeometry", () => n.DodecahedronGeometry, "DoubleSide", () => n.DoubleSide, "DstAlphaFactor", () => n.DstAlphaFactor, "DstColorFactor", () => n.DstColorFactor, "DynamicCopyUsage", () => n.DynamicCopyUsage, "DynamicDrawUsage", () => n.DynamicDrawUsage, "DynamicReadUsage", () => n.DynamicReadUsage, "EdgesGeometry", () => n.EdgesGeometry, "EllipseCurve", () => n.EllipseCurve, "EqualCompare", () => n.EqualCompare, "EqualDepth", () => n.EqualDepth, "EqualStencilFunc", () => n.EqualStencilFunc, "EquirectangularReflectionMapping", () => n.EquirectangularReflectionMapping, "EquirectangularRefractionMapping", () => n.EquirectangularRefractionMapping, "Euler", () => n.Euler, "EventDispatcher", () => n.EventDispatcher, "ExternalTexture", () => n.ExternalTexture, "ExtrudeGeometry", () => n.ExtrudeGeometry, "FileLoader", () => n.FileLoader, "Float16BufferAttribute", () => n.Float16BufferAttribute, "Float32BufferAttribute", () => n.Float32BufferAttribute, "FloatType", () => n.FloatType, "Fog", () => n.Fog, "FogExp2", () => n.FogExp2, "FramebufferTexture", () => n.FramebufferTexture, "FrontSide", () => n.FrontSide, "Frustum", () => n.Frustum, "FrustumArray", () => n.FrustumArray, "GLBufferAttribute", () => n.GLBufferAttribute, "GLSL1", () => n.GLSL1, "GLSL3", () => n.GLSL3, "GreaterCompare", () => n.GreaterCompare, "GreaterDepth", () => n.GreaterDepth, "GreaterEqualCompare", () => n.GreaterEqualCompare, "GreaterEqualDepth", () => n.GreaterEqualDepth, "GreaterEqualStencilFunc", () => n.GreaterEqualStencilFunc, "GreaterStencilFunc", () => n.GreaterStencilFunc, "GridHelper", () => n.GridHelper, "Group", () => n.Group, "HTMLTexture", () => n.HTMLTexture, "HalfFloatType", () => n.HalfFloatType, "HemisphereLight", () => n.HemisphereLight, "HemisphereLightHelper", () => n.HemisphereLightHelper, "IcosahedronGeometry", () => n.IcosahedronGeometry, "ImageBitmapLoader", () => n.ImageBitmapLoader, "ImageLoader", () => n.ImageLoader, "ImageUtils", () => n.ImageUtils, "IncrementStencilOp", () => n.IncrementStencilOp, "IncrementWrapStencilOp", () => n.IncrementWrapStencilOp, "InstancedBufferAttribute", () => n.InstancedBufferAttribute, "InstancedBufferGeometry", () => n.InstancedBufferGeometry, "InstancedInterleavedBuffer", () => n.InstancedInterleavedBuffer, "InstancedMesh", () => n.InstancedMesh, "Int16BufferAttribute", () => n.Int16BufferAttribute, "Int32BufferAttribute", () => n.Int32BufferAttribute, "Int8BufferAttribute", () => n.Int8BufferAttribute, "IntType", () => n.IntType, "InterleavedBuffer", () => n.InterleavedBuffer, "InterleavedBufferAttribute", () => n.InterleavedBufferAttribute, "Interpolant", () => n.Interpolant, "InterpolateBezier", () => n.InterpolateBezier, "InterpolateDiscrete", () => n.InterpolateDiscrete, "InterpolateLinear", () => n.InterpolateLinear, "InterpolateSmooth", () => n.InterpolateSmooth, "InterpolationSamplingMode", () => n.InterpolationSamplingMode, "InterpolationSamplingType", () => n.InterpolationSamplingType, "InvertStencilOp", () => n.InvertStencilOp, "KeepStencilOp", () => n.KeepStencilOp, "KeyframeTrack", () => n.KeyframeTrack, "LOD", () => n.LOD, "LatheGeometry", () => n.LatheGeometry, "Layers", () => n.Layers, "LessCompare", () => n.LessCompare, "LessDepth", () => n.LessDepth, "LessEqualCompare", () => n.LessEqualCompare, "LessEqualDepth", () => n.LessEqualDepth, "LessEqualStencilFunc", () => n.LessEqualStencilFunc, "LessStencilFunc", () => n.LessStencilFunc, "Light", () => n.Light, "LightProbe", () => n.LightProbe, "Line", () => n.Line, "Line3", () => n.Line3, "LineBasicMaterial", () => n.LineBasicMaterial, "LineCurve", () => n.LineCurve, "LineCurve3", () => n.LineCurve3, "LineDashedMaterial", () => n.LineDashedMaterial, "LineLoop", () => n.LineLoop, "LineSegments", () => n.LineSegments, "LinearFilter", () => n.LinearFilter, "LinearInterpolant", () => n.LinearInterpolant, "LinearMipMapLinearFilter", () => n.LinearMipMapLinearFilter, "LinearMipMapNearestFilter", () => n.LinearMipMapNearestFilter, "LinearMipmapLinearFilter", () => n.LinearMipmapLinearFilter, "LinearMipmapNearestFilter", () => n.LinearMipmapNearestFilter, "LinearSRGBColorSpace", () => n.LinearSRGBColorSpace, "LinearToneMapping", () => n.LinearToneMapping, "LinearTransfer", () => n.LinearTransfer, "Loader", () => n.Loader, "LoaderUtils", () => n.LoaderUtils, "LoadingManager", () => n.LoadingManager, "LoopOnce", () => n.LoopOnce, "LoopPingPong", () => n.LoopPingPong, "LoopRepeat", () => n.LoopRepeat, "MOUSE", () => n.MOUSE, "Material", () => n.Material, "MaterialBlending", () => n.MaterialBlending, "MaterialLoader", () => n.MaterialLoader, "MathUtils", () => n.MathUtils, "Matrix2", () => n.Matrix2, "Matrix3", () => n.Matrix3, "Matrix4", () => n.Matrix4, "MaxEquation", () => n.MaxEquation, "Mesh", () => n.Mesh, "MeshBasicMaterial", () => n.MeshBasicMaterial, "MeshDepthMaterial", () => n.MeshDepthMaterial, "MeshDistanceMaterial", () => n.MeshDistanceMaterial, "MeshLambertMaterial", () => n.MeshLambertMaterial, "MeshMatcapMaterial", () => n.MeshMatcapMaterial, "MeshNormalMaterial", () => n.MeshNormalMaterial, "MeshPhongMaterial", () => n.MeshPhongMaterial, "MeshPhysicalMaterial", () => n.MeshPhysicalMaterial, "MeshStandardMaterial", () => n.MeshStandardMaterial, "MeshToonMaterial", () => n.MeshToonMaterial, "MinEquation", () => n.MinEquation, "MirroredRepeatWrapping", () => n.MirroredRepeatWrapping, "MixOperation", () => n.MixOperation, "MultiplyBlending", () => n.MultiplyBlending, "MultiplyOperation", () => n.MultiplyOperation, "NearestFilter", () => n.NearestFilter, "NearestMipMapLinearFilter", () => n.NearestMipMapLinearFilter, "NearestMipMapNearestFilter", () => n.NearestMipMapNearestFilter, "NearestMipmapLinearFilter", () => n.NearestMipmapLinearFilter, "NearestMipmapNearestFilter", () => n.NearestMipmapNearestFilter, "NeutralToneMapping", () => n.NeutralToneMapping, "NeverCompare", () => n.NeverCompare, "NeverDepth", () => n.NeverDepth, "NeverStencilFunc", () => n.NeverStencilFunc, "NoBlending", () => n.NoBlending, "NoColorSpace", () => n.NoColorSpace, "NoNormalPacking", () => n.NoNormalPacking, "NoToneMapping", () => n.NoToneMapping, "NormalAnimationBlendMode", () => n.NormalAnimationBlendMode, "NormalBlending", () => n.NormalBlending, "NormalGAPacking", () => n.NormalGAPacking, "NormalRGPacking", () => n.NormalRGPacking, "NotEqualCompare", () => n.NotEqualCompare, "NotEqualDepth", () => n.NotEqualDepth, "NotEqualStencilFunc", () => n.NotEqualStencilFunc, "NumberKeyframeTrack", () => n.NumberKeyframeTrack, "Object3D", () => n.Object3D, "ObjectLoader", () => n.ObjectLoader, "ObjectSpaceNormalMap", () => n.ObjectSpaceNormalMap, "OctahedronGeometry", () => n.OctahedronGeometry, "OneFactor", () => n.OneFactor, "OneMinusConstantAlphaFactor", () => n.OneMinusConstantAlphaFactor, "OneMinusConstantColorFactor", () => n.OneMinusConstantColorFactor, "OneMinusDstAlphaFactor", () => n.OneMinusDstAlphaFactor, "OneMinusDstColorFactor", () => n.OneMinusDstColorFactor, "OneMinusSrcAlphaFactor", () => n.OneMinusSrcAlphaFactor, "OneMinusSrcColorFactor", () => n.OneMinusSrcColorFactor, "OrthographicCamera", () => n.OrthographicCamera, "PCFShadowMap", () => n.PCFShadowMap, "PCFSoftShadowMap", () => n.PCFSoftShadowMap, "PMREMGenerator", () => a.PMREMGenerator, "Path", () => n.Path, "PerspectiveCamera", () => n.PerspectiveCamera, "Plane", () => n.Plane, "PlaneGeometry", () => n.PlaneGeometry, "PlaneHelper", () => n.PlaneHelper, "PointLight", () => n.PointLight, "PointLightHelper", () => n.PointLightHelper, "Points", () => n.Points, "PointsMaterial", () => n.PointsMaterial, "PolarGridHelper", () => n.PolarGridHelper, "PolyhedronGeometry", () => n.PolyhedronGeometry, "PositionalAudio", () => n.PositionalAudio, "PropertyBinding", () => n.PropertyBinding, "PropertyMixer", () => n.PropertyMixer, "QuadraticBezierCurve", () => n.QuadraticBezierCurve, "QuadraticBezierCurve3", () => n.QuadraticBezierCurve3, "Quaternion", () => n.Quaternion, "QuaternionKeyframeTrack", () => n.QuaternionKeyframeTrack, "QuaternionLinearInterpolant", () => n.QuaternionLinearInterpolant, "R11_EAC_Format", () => n.R11_EAC_Format, "RED_GREEN_RGTC2_Format", () => n.RED_GREEN_RGTC2_Format, "RED_RGTC1_Format", () => n.RED_RGTC1_Format, "REVISION", () => n.REVISION, "RG11_EAC_Format", () => n.RG11_EAC_Format, "RGBADepthPacking", () => n.RGBADepthPacking, "RGBAFormat", () => n.RGBAFormat, "RGBAIntegerFormat", () => n.RGBAIntegerFormat, "RGBA_ASTC_10x10_Format", () => n.RGBA_ASTC_10x10_Format, "RGBA_ASTC_10x5_Format", () => n.RGBA_ASTC_10x5_Format, "RGBA_ASTC_10x6_Format", () => n.RGBA_ASTC_10x6_Format, "RGBA_ASTC_10x8_Format", () => n.RGBA_ASTC_10x8_Format, "RGBA_ASTC_12x10_Format", () => n.RGBA_ASTC_12x10_Format, "RGBA_ASTC_12x12_Format", () => n.RGBA_ASTC_12x12_Format, "RGBA_ASTC_4x4_Format", () => n.RGBA_ASTC_4x4_Format, "RGBA_ASTC_5x4_Format", () => n.RGBA_ASTC_5x4_Format, "RGBA_ASTC_5x5_Format", () => n.RGBA_ASTC_5x5_Format, "RGBA_ASTC_6x5_Format", () => n.RGBA_ASTC_6x5_Format, "RGBA_ASTC_6x6_Format", () => n.RGBA_ASTC_6x6_Format, "RGBA_ASTC_8x5_Format", () => n.RGBA_ASTC_8x5_Format, "RGBA_ASTC_8x6_Format", () => n.RGBA_ASTC_8x6_Format, "RGBA_ASTC_8x8_Format", () => n.RGBA_ASTC_8x8_Format, "RGBA_BPTC_Format", () => n.RGBA_BPTC_Format, "RGBA_ETC2_EAC_Format", () => n.RGBA_ETC2_EAC_Format, "RGBA_PVRTC_2BPPV1_Format", () => n.RGBA_PVRTC_2BPPV1_Format, "RGBA_PVRTC_4BPPV1_Format", () => n.RGBA_PVRTC_4BPPV1_Format, "RGBA_S3TC_DXT1_Format", () => n.RGBA_S3TC_DXT1_Format, "RGBA_S3TC_DXT3_Format", () => n.RGBA_S3TC_DXT3_Format, "RGBA_S3TC_DXT5_Format", () => n.RGBA_S3TC_DXT5_Format, "RGBDepthPacking", () => n.RGBDepthPacking, "RGBFormat", () => n.RGBFormat, "RGBIntegerFormat", () => n.RGBIntegerFormat, "RGB_BPTC_SIGNED_Format", () => n.RGB_BPTC_SIGNED_Format, "RGB_BPTC_UNSIGNED_Format", () => n.RGB_BPTC_UNSIGNED_Format, "RGB_ETC1_Format", () => n.RGB_ETC1_Format, "RGB_ETC2_Format", () => n.RGB_ETC2_Format, "RGB_PVRTC_2BPPV1_Format", () => n.RGB_PVRTC_2BPPV1_Format, "RGB_PVRTC_4BPPV1_Format", () => n.RGB_PVRTC_4BPPV1_Format, "RGB_S3TC_DXT1_Format", () => n.RGB_S3TC_DXT1_Format, "RGDepthPacking", () => n.RGDepthPacking, "RGFormat", () => n.RGFormat, "RGIntegerFormat", () => n.RGIntegerFormat, "RawShaderMaterial", () => n.RawShaderMaterial, "Ray", () => n.Ray, "Raycaster", () => n.Raycaster, "RectAreaLight", () => n.RectAreaLight, "RedFormat", () => n.RedFormat, "RedIntegerFormat", () => n.RedIntegerFormat, "ReinhardToneMapping", () => n.ReinhardToneMapping, "RenderTarget", () => n.RenderTarget, "RenderTarget3D", () => n.RenderTarget3D, "RepeatWrapping", () => n.RepeatWrapping, "ReplaceStencilOp", () => n.ReplaceStencilOp, "ReverseSubtractEquation", () => n.ReverseSubtractEquation, "RingGeometry", () => n.RingGeometry, "SIGNED_R11_EAC_Format", () => n.SIGNED_R11_EAC_Format, "SIGNED_RED_GREEN_RGTC2_Format", () => n.SIGNED_RED_GREEN_RGTC2_Format, "SIGNED_RED_RGTC1_Format", () => n.SIGNED_RED_RGTC1_Format, "SIGNED_RG11_EAC_Format", () => n.SIGNED_RG11_EAC_Format, "SRGBColorSpace", () => n.SRGBColorSpace, "SRGBTransfer", () => n.SRGBTransfer, "Scene", () => n.Scene, "ShaderChunk", () => a.ShaderChunk, "ShaderLib", () => a.ShaderLib, "ShaderMaterial", () => n.ShaderMaterial, "ShadowMaterial", () => n.ShadowMaterial, "Shape", () => n.Shape, "ShapeGeometry", () => n.ShapeGeometry, "ShapePath", () => n.ShapePath, "ShapeUtils", () => n.ShapeUtils, "ShortType", () => n.ShortType, "Skeleton", () => n.Skeleton, "SkeletonHelper", () => n.SkeletonHelper, "SkinnedMesh", () => n.SkinnedMesh, "Source", () => n.Source, "Sphere", () => n.Sphere, "SphereGeometry", () => n.SphereGeometry, "Spherical", () => n.Spherical, "SphericalHarmonics3", () => n.SphericalHarmonics3, "SplineCurve", () => n.SplineCurve, "SpotLight", () => n.SpotLight, "SpotLightHelper", () => n.SpotLightHelper, "Sprite", () => n.Sprite, "SpriteMaterial", () => n.SpriteMaterial, "SrcAlphaFactor", () => n.SrcAlphaFactor, "SrcAlphaSaturateFactor", () => n.SrcAlphaSaturateFactor, "SrcColorFactor", () => n.SrcColorFactor, "StaticCopyUsage", () => n.StaticCopyUsage, "StaticDrawUsage", () => n.StaticDrawUsage, "StaticReadUsage", () => n.StaticReadUsage, "StereoCamera", () => n.StereoCamera, "StreamCopyUsage", () => n.StreamCopyUsage, "StreamDrawUsage", () => n.StreamDrawUsage, "StreamReadUsage", () => n.StreamReadUsage, "StringKeyframeTrack", () => n.StringKeyframeTrack, "SubtractEquation", () => n.SubtractEquation, "SubtractiveBlending", () => n.SubtractiveBlending, "TOUCH", () => n.TOUCH, "TangentSpaceNormalMap", () => n.TangentSpaceNormalMap, "TetrahedronGeometry", () => n.TetrahedronGeometry, "Texture", () => n.Texture, "TextureLoader", () => n.TextureLoader, "TextureUtils", () => n.TextureUtils, "Timer", () => n.Timer, "TimestampQuery", () => n.TimestampQuery, "TorusGeometry", () => n.TorusGeometry, "TorusKnotGeometry", () => n.TorusKnotGeometry, "Triangle", () => n.Triangle, "TriangleFanDrawMode", () => n.TriangleFanDrawMode, "TriangleStripDrawMode", () => n.TriangleStripDrawMode, "TrianglesDrawMode", () => n.TrianglesDrawMode, "TubeGeometry", () => n.TubeGeometry, "UVMapping", () => n.UVMapping, "Uint16BufferAttribute", () => n.Uint16BufferAttribute, "Uint32BufferAttribute", () => n.Uint32BufferAttribute, "Uint8BufferAttribute", () => n.Uint8BufferAttribute, "Uint8ClampedBufferAttribute", () => n.Uint8ClampedBufferAttribute, "Uniform", () => n.Uniform, "UniformsGroup", () => n.UniformsGroup, "UniformsLib", () => a.UniformsLib, "UniformsUtils", () => n.UniformsUtils, "UnsignedByteType", () => n.UnsignedByteType, "UnsignedInt101111Type", () => n.UnsignedInt101111Type, "UnsignedInt248Type", () => n.UnsignedInt248Type, "UnsignedInt5999Type", () => n.UnsignedInt5999Type, "UnsignedIntType", () => n.UnsignedIntType, "UnsignedShort4444Type", () => n.UnsignedShort4444Type, "UnsignedShort5551Type", () => n.UnsignedShort5551Type, "UnsignedShortType", () => n.UnsignedShortType, "VSMShadowMap", () => n.VSMShadowMap, "Vector2", () => n.Vector2, "Vector3", () => n.Vector3, "Vector4", () => n.Vector4, "VectorKeyframeTrack", () => n.VectorKeyframeTrack, "VideoFrameTexture", () => n.VideoFrameTexture, "VideoTexture", () => n.VideoTexture, "WebGL3DRenderTarget", () => n.WebGL3DRenderTarget, "WebGLArrayRenderTarget", () => n.WebGLArrayRenderTarget, "WebGLCoordinateSystem", () => n.WebGLCoordinateSystem, "WebGLCubeRenderTarget", () => a.WebGLCubeRenderTarget, "WebGLRenderTarget", () => n.WebGLRenderTarget, "WebGLRenderer", () => a.WebGLRenderer, "WebGLUtils", () => a.WebGLUtils, "WebGPUCoordinateSystem", () => n.WebGPUCoordinateSystem, "WebXRController", () => n.WebXRController, "WireframeGeometry", () => n.WireframeGeometry, "WrapAroundEnding", () => n.WrapAroundEnding, "ZeroCurvatureEnding", () => n.ZeroCurvatureEnding, "ZeroFactor", () => n.ZeroFactor, "ZeroSlopeEnding", () => n.ZeroSlopeEnding, "ZeroStencilOp", () => n.ZeroStencilOp, "createCanvasElement", () => n.createCanvasElement, "error", () => n.error, "getConsoleFunction", () => n.getConsoleFunction, "log", () => n.log, "setConsoleFunction", () => n.setConsoleFunction, "warn", () => n.warn, "warnOnce", () => n.warnOnce], 732009);
    var o = e.i(732009);
    function i(e, t) {
        let r;
        return (...a) => {
            window.clearTimeout(r),
            r = window.setTimeout( () => e(...a), t)
        }
    }
    let l = ["x", "y", "top", "bottom", "left", "right", "width", "height"];
    var s = e.i(846791)
      , c = e.i(843476);
    function u({ref: e, children: a, fallback: n, resize: s, style: p, gl: d, events: m=t.f, eventSource: h, eventPrefix: f, shadows: g, linear: C, flat: S, legacy: T, orthographic: y, frameloop: M, dpr: A, performance: R, raycaster: G, camera: _, scene: F, onPointerMissed: w, onCreated: B, ...x}) {
        r.useMemo( () => (0,
        t.e)(o), []);
        let b = (0,
        t.u)()
          , [L,D] = function({debounce: e, scroll: t, polyfill: a, offsetSize: n}={
            debounce: 0,
            scroll: !1,
            offsetSize: !1
        }) {
            var o, s, c;
            let u = a || ("u" < typeof window ? class {
            }
            : window.ResizeObserver);
            if (!u)
                throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
            let[p,d] = (0,
            r.useState)({
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                bottom: 0,
                right: 0,
                x: 0,
                y: 0
            })
              , m = (0,
            r.useRef)({
                element: null,
                scrollContainers: null,
                resizeObserver: null,
                lastBounds: p,
                orientationHandler: null
            })
              , h = e ? "number" == typeof e ? e : e.scroll : null
              , f = e ? "number" == typeof e ? e : e.resize : null
              , g = (0,
            r.useRef)(!1);
            (0,
            r.useEffect)( () => (g.current = !0,
            () => void (g.current = !1)));
            let[C,S,T] = (0,
            r.useMemo)( () => {
                let e = () => {
                    let e, t;
                    if (!m.current.element)
                        return;
                    let {left: r, top: a, width: o, height: i, bottom: s, right: c, x: u, y: p} = m.current.element.getBoundingClientRect()
                      , h = {
                        left: r,
                        top: a,
                        width: o,
                        height: i,
                        bottom: s,
                        right: c,
                        x: u,
                        y: p
                    };
                    m.current.element instanceof HTMLElement && n && (h.height = m.current.element.offsetHeight,
                    h.width = m.current.element.offsetWidth),
                    Object.freeze(h),
                    g.current && (e = m.current.lastBounds,
                    t = h,
                    !l.every(r => e[r] === t[r])) && d(m.current.lastBounds = h)
                }
                ;
                return [e, f ? i(e, f) : e, h ? i(e, h) : e]
            }
            , [d, n, h, f]);
            function y() {
                m.current.scrollContainers && (m.current.scrollContainers.forEach(e => e.removeEventListener("scroll", T, !0)),
                m.current.scrollContainers = null),
                m.current.resizeObserver && (m.current.resizeObserver.disconnect(),
                m.current.resizeObserver = null),
                m.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", m.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", m.current.orientationHandler))
            }
            function M() {
                m.current.element && (m.current.resizeObserver = new u(T),
                m.current.resizeObserver.observe(m.current.element),
                t && m.current.scrollContainers && m.current.scrollContainers.forEach(e => e.addEventListener("scroll", T, {
                    capture: !0,
                    passive: !0
                })),
                m.current.orientationHandler = () => {
                    T()
                }
                ,
                "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", m.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", m.current.orientationHandler))
            }
            return o = T,
            s = !!t,
            (0,
            r.useEffect)( () => {
                if (s)
                    return window.addEventListener("scroll", o, {
                        capture: !0,
                        passive: !0
                    }),
                    () => void window.removeEventListener("scroll", o, !0)
            }
            , [o, s]),
            c = S,
            (0,
            r.useEffect)( () => (window.addEventListener("resize", c),
            () => void window.removeEventListener("resize", c)), [c]),
            (0,
            r.useEffect)( () => {
                y(),
                M()
            }
            , [t, T, S]),
            (0,
            r.useEffect)( () => y, []),
            [e => {
                e && e !== m.current.element && (y(),
                m.current.element = e,
                m.current.scrollContainers = function e(t) {
                    let r = [];
                    if (!t || t === document.body)
                        return r;
                    let {overflow: a, overflowX: n, overflowY: o} = window.getComputedStyle(t);
                    return [a, n, o].some(e => "auto" === e || "scroll" === e) && r.push(t),
                    [...r, ...e(t.parentElement)]
                }(e),
                M())
            }
            , p, C]
        }({
            scroll: !0,
            debounce: {
                scroll: 50,
                resize: 0
            },
            ...s
        })
          , v = r.useRef(null)
          , E = r.useRef(null);
        r.useImperativeHandle(e, () => v.current);
        let I = (0,
        t.a)(w)
          , [P,O] = r.useState(!1)
          , [k,U] = r.useState(!1);
        if (P)
            throw P;
        if (k)
            throw k;
        let N = r.useRef(null);
        (0,
        t.b)( () => {
            let e = v.current;
            D.width > 0 && D.height > 0 && e && (N.current || (N.current = (0,
            t.c)(e)),
            async function() {
                await N.current.configure({
                    gl: d,
                    scene: F,
                    events: m,
                    shadows: g,
                    linear: C,
                    flat: S,
                    legacy: T,
                    orthographic: y,
                    frameloop: M,
                    dpr: A,
                    performance: R,
                    raycaster: G,
                    camera: _,
                    size: D,
                    onPointerMissed: (...e) => null == I.current ? void 0 : I.current(...e),
                    onCreated: e => {
                        null == e.events.connect || e.events.connect(h ? (0,
                        t.i)(h) ? h.current : h : E.current),
                        f && e.setEvents({
                            compute: (e, t) => {
                                let r = e[f + "X"]
                                  , a = e[f + "Y"];
                                t.pointer.set(r / t.size.width * 2 - 1, -(2 * (a / t.size.height)) + 1),
                                t.raycaster.setFromCamera(t.pointer, t.camera)
                            }
                        }),
                        null == B || B(e)
                    }
                }),
                N.current.render((0,
                c.jsx)(b, {
                    children: (0,
                    c.jsx)(t.E, {
                        set: U,
                        children: (0,
                        c.jsx)(r.Suspense, {
                            fallback: (0,
                            c.jsx)(t.B, {
                                set: O
                            }),
                            children: null != a ? a : null
                        })
                    })
                }))
            }())
        }
        ),
        r.useEffect( () => {
            let e = v.current;
            if (e)
                return () => (0,
                t.d)(e)
        }
        , []);
        let H = h ? "none" : "auto";
        return (0,
        c.jsx)("div", {
            ref: E,
            style: {
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: H,
                ...p
            },
            ...x,
            children: (0,
            c.jsx)("div", {
                ref: L,
                style: {
                    width: "100%",
                    height: "100%"
                },
                children: (0,
                c.jsx)("canvas", {
                    ref: v,
                    style: {
                        display: "block"
                    },
                    children: n
                })
            })
        })
    }
    e.i(189499),
    e.s(["Canvas", 0, function(e) {
        return (0,
        c.jsx)(s.FiberProvider, {
            children: (0,
            c.jsx)(u, {
                ...e
            })
        })
    }
    ], 575056)
}
, 777884, e => {
    e.q("/_next/static/media/basis_transcoder.1nyhl65_x6yw2.js")
}
, 623564, e => {
    e.q("/_next/static/media/basis_transcoder.3fksty7ghxqg8.wasm")
}
]);
