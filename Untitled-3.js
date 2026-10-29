(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 828045, e => {
    "use strict";
    e.s(["CHASE_MAX_POLAR_ANGLE", 0, 1.05, "CHASE_MIN_POLAR_ANGLE", 0, .35, "CINEMATIC_CHASE_HEIGHT", 0, 2.2, "demoChaseLensPosition", 0, function(e, t, a, r) {
        let n = Math.max(r[1], 2.2)
          , o = t.x + (e.x - t.x) * a + r[0]
          , i = t.z + (e.z - t.z) * a + r[2];
        return {
            x: o,
            y: Math.max(t.y + (e.y - t.y) * a + n, e.y + .8),
            z: i
        }
    }
    , "replayChaseLensPosition", 0, function(e, t, a, r, n) {
        var o;
        let i, l, s, c, u, h = (i = 2 * (-1 * (o = t).y - 0 * o.z),
        l = 2 * (0 * o.z - -1 * o.x),
        s = 2 * (0 * o.x - 0 * o.y),
        (u = Math.hypot((c = {
            x: 0 + o.w * i + (o.y * s - o.z * l),
            y: 0 + o.w * l + (o.z * i - o.x * s),
            z: -1 + o.w * s + (o.x * l - o.y * i)
        }).x, c.z)) < 1e-4 ? {
            x: 0,
            z: -1
        } : {
            x: c.x / u,
            z: c.z / u
        }), d = h.z, m = -h.x;
        return {
            x: e.x - h.x * a + d * r,
            y: Math.max(e.y + n, e.y + .8),
            z: e.z - h.z * a + m * r
        }
    }
    , "resolveOrbitCameraCollision", 0, function(e, t, a, r) {
        let n = e.x - t.x
          , o = e.y - t.y
          , i = e.z - t.z
          , l = Math.hypot(n, o, i);
        if (l < 1e-4) {
            e.y = Math.max(e.y, t.y + .8);
            return
        }
        if (a && a.toi < l - .2) {
            let s = 1 / l
              , c = o * s;
            if (a.normalY > .5) {
                let r = t.y + c * a.toi;
                e.y = Math.max(e.y, r + .2)
            } else {
                let o = Math.max(r, a.toi - .2);
                e.x = t.x + n * s * o,
                e.y = t.y + c * o,
                e.z = t.z + i * s * o
            }
        }
        e.y < t.y + .8 && (e.y = t.y + .8)
    }
    ])
}
, 883380, e => {
    "use strict";
    e.s(["COSMETIC_IDS", 0, ["original", "glacier", "voltage"]])
}
, 166636, e => {
    "use strict";
    let t = {
        low: 1,
        medium: 1.5,
        high: 2,
        ultra: 2
    }
      , a = {
        low: 2073600,
        medium: 2073600,
        high: 3686400,
        ultra: 8294400
    }
      , r = ["low", "medium", "high", "ultra"];
    function n(e, t) {
        return r.indexOf(e) >= r.indexOf(t)
    }
    function o(e) {
        let t = "ultra" === e;
        return {
            quality: e,
            shadows: "low" !== e,
            postProcessing: "low" !== e,
            bloom: n(e, "high"),
            msaa: t,
            renderScale: "low" === e ? .75 : 1
        }
    }
    function i(e) {
        let t = o(e.quality);
        return Object.keys(t).some(a => (("postProcessing" === a ? e.postProcessing ?? "low" !== e.quality : e[a]) ?? ("renderScale" === a && 1)) !== t[a])
    }
    e.s(["atLeast", 0, n, "graphicsPreset", 0, o, "isCustomGraphics", 0, i, "renderPixelRatio", 0, function(e, r, n, o) {
        let i = Math.max(1, r * n)
          , l = Math.min(e || 1, t[o.quality], Math.sqrt(a[o.quality] / i));
        return o.msaa && (o.postProcessing ?? "low" !== o.quality) && (l = Math.min(l, Math.sqrt(3686400 / i))),
        l * (o.renderScale ?? 1)
    }
    , "withoutUltra", 0, function(e) {
        return "ultra" !== e.quality ? e : i(e) ? {
            ...e,
            quality: "high"
        } : {
            ...e,
            ...o("high")
        }
    }
    ])
}
, 514236, e => {
    "use strict";
    let t = /standard gamepad|xbox|x-box|playstation|dualsense|dualshock|wireless controller|pro controller|8bitdo|\b045e\b|\b054c\b|\b057e\b|vendor: 045e|vendor: 054c|vendor: 057e/i
      , a = /radiomaster|frsky|taranis|horus|jumper|tx16|tx12|boxer|zorro|pocket|edgetx|opentx|expresslrs|literadio|flysky|betafpv|tbs|tango|mambo|\bfpv\b|\b1209\b|vendor: 1209|\b0483\b|vendor: 0483/i;
    e.s(["PLAYSTATION_PATTERN", 0, /playstation|dualsense|dualshock|\b054c\b|vendor: 054c/i, "classifyDevice", 0, function(e) {
        return e ? a.test(e) ? "radio" : t.test(e) ? "gamepad" : null : null
    }
    , "defaultArmBehavior", 0, function(e) {
        return "gamepad" === e ? "toggle" : "follow"
    }
    , "deviceProfileOf", 0, function(e) {
        let {deviceId: t, keyboard: a, keyboardOnly: r, ...n} = e;
        return structuredClone(n)
    }
    ])
}
, 133968, e => {
    "use strict";
    let t, a = /\bArc(?:\(TM\)|™)?\s+(?:Pro\s+)?[AB]\d{2,3}/i, r = /\bRadeon(?:\(TM\)|™)?\s+(?:Graphics|Vega\s+\d+|\d{3}M\b|R[4-7]\s+Graphics)|\bVega\s+\d+\s+Graphics/i;
    function n(e) {
        return !!e && (/\bIntel\b/i.test(e) ? !a.test(e) : r.test(e))
    }
    let o = /^(?:WebKit WebGL|Mozilla|)$/;
    function i() {
        if (void 0 !== t || (t = null,
        "u" < typeof document))
            return t;
        try {
            let e = document.createElement("canvas")
              , a = {
                powerPreference: "high-performance"
            }
              , r = e.getContext("webgl2", a) ?? e.getContext("webgl", a);
            if (!r)
                return t;
            let n = String(r.getParameter(r.RENDERER) ?? "");
            if (o.test(n)) {
                let e = r.getExtension("WEBGL_debug_renderer_info");
                e && (n = String(r.getParameter(e.UNMASKED_RENDERER_WEBGL) ?? ""))
            }
            r.getExtension("WEBGL_lose_context")?.loseContext(),
            t = n || null
        } catch {
            t = null
        }
        return t
    }
    function l() {
        return n(i())
    }
    e.s(["gpuRenderer", 0, i, "integratedGpu", 0, l, "isIntegratedGpu", 0, n, "overrideGpuRenderer", 0, function(e) {
        t = e
    }
    , "ultraAvailable", 0, function() {
        return !l()
    }
    ])
}
, 269176, e => {
    "use strict";
    let t = {
        offset: [2, e.i(828045).CINEMATIC_CHASE_HEIGHT, 2.6],
        follow: .6,
        fov: 55
    };
    e.s(["DEFAULT_CHASE_CAMERA", 0, t, "DEFAULT_FPV_CAMERA", 0, {
        view: "fpv"
    }])
}
, 466348, 223371, 100660, e => {
    "use strict";
    var t = e.i(190072)
      , a = e.i(569638)
      , r = e.i(723601)
      , n = e.i(70967);
    function o(e) {
        let a = new t.BufferGeometry;
        a.setAttribute("position", new t.Float32BufferAttribute(e.positions,3)),
        a.setAttribute("color", new t.Float32BufferAttribute(e.colors,3));
        let r = [];
        for (let t = 0; t < e.positions.length; t += 3)
            r.push(e.positions[t], e.positions[t + 2]);
        return a.setAttribute("uv", new t.Float32BufferAttribute(r,2)),
        a.computeVertexNormals(),
        a.computeBoundingSphere(),
        a
    }
    function i(e="classic", l=n.GRIDWORKS_DRIFT.track) {
        let s = l.sample
          , c = l.length
          , u = {
            positions: [],
            colors: []
        }
          , h = {
            positions: [],
            colors: []
        }
          , d = new t.Color((0,
        a.environmentColor)("#474a50", e))
          , m = new t.Color((0,
        a.environmentColor)("#eeeae2", e))
          , f = new t.Color((0,
        a.environmentColor)("#c74436", e))
          , p = new t.Color((0,
        a.environmentColor)("#262b30", e))
          , b = (0,
        r.createTrackSample)()
          , g = (0,
        r.createTrackSample)()
          , y = (0,
        r.createTrackSample)()
          , x = l.width / 2
          , z = (e, t, a) => [e.x - e.tangentZ * t, a, e.z + e.tangentX * t];
        function w(e, t, a, r, n, o, i) {
            s(t, b),
            s(a, g),
            function(e, t, a, r, n, o) {
                for (let i of [t, a, r, a, n, r])
                    e.positions.push(...i),
                    e.colors.push(o.r, o.g, o.b)
            }(e, z(b, r, o), z(b, n, o), z(g, r, o), z(g, n, o), i)
        }
        let S = Math.ceil(c / .4);
        for (let e = 0; e < S; e++) {
            let t = e / S * c
              , a = (e + 1) / S * c;
            w(u, t, a, -x, x, .02, d);
            let r = Math.max(t, .96);
            for (let e of [-1, 1]) {
                let t = e * (x - .1);
                r < a && w(h, r, a, t - .055, t + .055, .03, m)
            }
            if (s((t + a) / 2, y),
            Math.abs(y.curvature) > l.curbCurvature) {
                let r = Math.floor(e / 4) % 2 ? m : f;
                w(h, t, a, -x - l.curbWidth, -x, .03, r),
                w(h, t, a, x, x + l.curbWidth, .03, r)
            }
        }
        let v = Math.round(l.width / .5)
          , M = l.width / v;
        for (let e = 0; e < 2; e++)
            for (let t = 0; t < v; t++)
                w(h, .48 * e, (e + 1) * .48, -x + t * M, -x + (t + 1) * M, .03, (e + t) % 2 ? m : p);
        for (let e = 0; e < 3; e++)
            for (let t of [-1, 1]) {
                let a = -7 - 7 * e - 2 * (1 === t)
                  , r = t * x * .5;
                w(h, a, a + .1, r - 1.4, r + 1.4, .03, m),
                w(h, a + .1, a + 5, r - 1.4, r - 1.3, .03, m),
                w(h, a + .1, a + 5, r + 1.3, r + 1.4, .03, m)
            }
        return {
            road: o(u),
            paint: o(h)
        }
    }
    e.s(["buildTrack", 0, i], 223371);
    var l = e.i(552260)
      , s = e.i(526241)
      , c = e.i(475127);
    let u = new Map;
    function h(e, a, r, n, o="gridworks", i=8, l=r, u=0) {
        let d = []
          , m = []
          , f = []
          , p = new t.Matrix4
          , b = new t.Vector3
          , g = (0,
        s.trackPath)(o).length
          , [y,x] = "gridworks" === o ? [Math.cos, Math.sin] : [c.cos, c.sin];
        for (let t = 0; t < n; t++) {
            (0,
            s.coasterFrame)(t * g / n, p, o);
            for (let o = 0; o < i; o++) {
                let s = o / i * Math.PI * 2 + u;
                b.set(e + r * y(s), a + l * x(s), 0).applyMatrix4(p),
                d.push(b.x, b.y, b.z),
                m.push(t / n, o / i);
                let c = t * i + o
                  , h = (t + 1) % n * i + o
                  , g = (t + 1) % n * i + (o + 1) % i
                  , z = t * i + (o + 1) % i;
                f.push(c, z, h, h, z, g)
            }
        }
        let z = new t.BufferGeometry;
        return z.setAttribute("position", new t.Float32BufferAttribute(d,3)),
        z.setAttribute("uv", new t.Float32BufferAttribute(m,2)),
        z.setIndex(f),
        z.computeVertexNormals(),
        z
    }
    function d(e, a=!1, r="gridworks") {
        let n = `${r}:${e}:${a}`;
        if (!u.has(n)) {
            let o = (0,
            s.trackPath)(r)
              , i = a ? 192 : "gridworks" === r ? s.COASTER_SAMPLES : o.positions.length
              , c = [];
            if ("whoop-monorail" === r)
                "spine" === e && c.push(h(0, -.95, .42 * Math.SQRT2, i, r, 4, .62 * Math.SQRT2, Math.PI / 4));
            else if ("rails" === e && c.push(h(-s.COASTER_GAUGE / 2, 0, .15, i, r), h(s.COASTER_GAUGE / 2, 0, .15, i, r)),
            "spine" === e && c.push(h(0, -.8, .25, i, r)),
            "ties" === e) {
                let e = Math.ceil(o.length / (a ? 8 : 1.8));
                for (let a = 0; a < e; a++) {
                    let n = (0,
                    s.coasterFrame)(a / e * o.length, void 0, r);
                    c.push(new t.BoxGeometry(2.65,.18,.22).translate(0, -.2, 0).applyMatrix4(n)),
                    c.push(new t.BoxGeometry(.18,.6,.18).translate(0, -.5, 0).applyMatrix4(n))
                }
            }
            let d = c.length ? (0,
            l.mergeGeometries)(c) : new t.BufferGeometry;
            c.forEach(e => e.dispose()),
            u.set(n, d)
        }
        return u.get(n).clone()
    }
    e.s(["coasterGeometry", 0, d], 100660);
    var m = e.i(884079)
      , f = e.i(31620);
    function p(e, a="classic") {
        switch (e.kind) {
        case "coaster":
            return d(e.layer, !1, e.layout);
        case "drift-track":
            {
                let t = (0,
                n.driftCircuitById)(e.circuit)
                  , r = i(a, t.track);
                return r["road" === e.layer ? "paint" : "road"].dispose(),
                r[e.layer].translate(...t.editorOffset)
            }
        case "box":
            return new t.BoxGeometry(1,1,1);
        case "sphere":
            return new t.SphereGeometry(.5,24,16);
        case "cylinder":
            return new t.CylinderGeometry(.5,.5,1,24);
        case "cone":
            return new t.ConeGeometry(.5,1,24);
        case "pyramid":
            return new t.ConeGeometry(.5,1,4);
        case "torus":
            return new t.TorusGeometry(.38,.12,12,32);
        case "prism":
            {
                let a = new t.Shape;
                return e.points.forEach( ([e,t], r) => r ? a.lineTo(e, t) : a.moveTo(e, t)),
                a.closePath(),
                new t.ExtrudeGeometry(a,{
                    depth: e.depth,
                    bevelEnabled: !1,
                    steps: 1
                }).translate(0, 0, -e.depth / 2)
            }
        case "lathe":
            return e.bark ? (0,
            f.barkGeometry)((0,
            m.latheGeometry)(e), e.profile, e.bark) : (0,
            m.latheGeometry)(e);
        case "plant":
            return (0,
            f.plantGeometry)(e)
        }
    }
    let b = e => "plant" !== e.kind;
    e.s(["collides", 0, b, "collisionMesh", 0, function(e, t) {
        if (!b(e))
            return {
                vertices: new Float32Array(0),
                indices: new Uint32Array(0)
            };
        let a = ("lathe" === e.kind ? (0,
        m.latheGeometry)(e) : p(e)).applyMatrix4(t)
          , r = new Float32Array(a.attributes.position.array)
          , n = a.index ? new Uint32Array(a.index.array) : Uint32Array.from({
            length: r.length / 3
        }, (e, t) => t);
        return a.dispose(),
        {
            vertices: r,
            indices: n
        }
    }
    , "objectGeometry", 0, p], 466348)
}
, 930215, e => {
    "use strict";
    var t = e.i(872128);
    let a = new WeakMap
      , r = new WeakMap;
    e.s(["resolveDocument", 0, function(e) {
        if (!e.nodes.some(e => e.prefab))
            return e;
        let n = r.get(e);
        if (n)
            return n;
        let o = new Set(e.nodes.map(e => e.id))
          , i = {
            ...e,
            nodes: e.nodes.flatMap(r => {
                if (!r.prefab)
                    return [r];
                let n = a.get(r);
                if (n && n.every( (e, t) => 0 === t || !o.has(e.id)))
                    return n.forEach( (e, t) => t && o.add(e.id)),
                    n;
                let i = (0,
                t.presetFor)(r.prefab.id, e.mapId);
                if (!i)
                    throw Error(`Unknown prefab: ${r.prefab.id}`);
                let {prefab: l, ...s} = r
                  , c = !1
                  , u = [s, ...(0,
                t.variantPreset)(i, l.variant).parts.map( (e, t) => {
                    let a = `${r.id}/part/${t}`;
                    for (; o.has(a); )
                        a += "/",
                        c = !0;
                    return o.add(a),
                    {
                        ...e,
                        id: a,
                        parentId: r.id,
                        ...e.billboard ? {
                            billboard: {
                                media: l.media,
                                fit: l.fit
                            }
                        } : {}
                    }
                }
                )];
                return c || a.set(r, u),
                u
            }
            )
        };
        return r.set(e, i),
        i
    }
    ])
}
, 632526, 373636, e => {
    "use strict";
    let t = (0,
    e.i(768834).create)( () => ({
        document: null,
        revision: 0,
        draftRevision: null
    }));
    e.s(["usePublishedGridworks", 0, t], 373636);
    var a = e.i(425723)
      , r = e.i(471646)
      , n = e.i(475127);
    let o = new Map;
    function i(e) {
        let t = []
          , o = []
          , i = []
          , l = (0,
        r.createHeightSampler)(e.terrain)
          , {procedural: s} = e.layout
          , c = "function" == typeof e.layout.authored ? e.layout.authored(l) : e.layout.authored;
        if (s) {
            let c = function(e, t, o, i, l=r.FLAT_GROUND) {
                let s = (0,
                a.mulberry32)(e.seed)
                  , c = e => e[Math.floor(s() * e.length)]
                  , u = (e, t) => e + s() * (t - e)
                  , h = (e, t) => Math.sqrt(e * e + s() * (t * t - e * e))
                  , d = (a, r, o) => {
                    var i;
                    return i = e.spawnClearance,
                    t.every(e => n.hypot(a - e.position[0], r - e.position[2]) > i + o)
                }
                  , m = (t, a) => (e.exclude ?? []).some(e => {
                    let r, o, i, l, s;
                    return r = t - e.at[0],
                    o = a - e.at[1],
                    l = 0 === (i = e.rotationY ?? 0) ? r : r * n.cos(i) - o * n.sin(i),
                    s = 0 === i ? o : r * n.sin(i) + o * n.cos(i),
                    Math.abs(l) <= e.halfExtents[0] && Math.abs(s) <= e.halfExtents[1]
                }
                )
                  , f = []
                  , p = []
                  , b = []
                  , g = o.size / 2 - 4;
                for (let e of t)
                    e.pad && f.push(...(0,
                    a.launchPadBoxes)(e, i));
                let y = e.buildings;
                if (y)
                    for (let t = 0; t < y.count; t++) {
                        let r = t / y.count * Math.PI * 2 + u(-.14, .14)
                          , o = u(y.radius[0], y.radius[1])
                          , i = u(y.footprint[0], y.footprint[1])
                          , h = u(y.footprint[0], y.footprint[1])
                          , m = u(y.height[0], y.height[1])
                          , p = n.cos(r) * o
                          , b = n.sin(r) * o;
                        if (Math.abs(p) > g || Math.abs(b) > g || !d(p, b, Math.max(i, h)))
                            continue;
                        let x = s() < y.glassChance
                          , z = !x && .35 > s()
                          , w = x ? "windows" : z ? "brick" : "concrete"
                          , S = x ? e.palette.glass : z ? e.palette.brick : e.palette.concrete
                          , v = Math.max(1, Math.round(m / y.storeyHeight));
                        f.push(...(0,
                        a.buildingBoxes)({
                            position: [p, l(p, b), b],
                            rotationY: r + u(-.45, .45),
                            width: i,
                            depth: h,
                            height: v * y.storeyHeight,
                            surface: w,
                            color: c(S),
                            trimColor: c(e.palette.concrete),
                            storeyHeight: y.storeyHeight,
                            clutter: Math.round(u(y.clutter[0], y.clutter[1])),
                            random: s
                        }))
                    }
                let x = e.shells;
                if (x)
                    for (let t = 0; t < x.count; t++) {
                        let r = t / x.count * Math.PI * 2 + u(-.5, .5)
                          , o = u(x.radius[0], x.radius[1])
                          , i = u(x.width[0], x.width[1])
                          , h = u(x.depth[0], x.depth[1])
                          , m = n.cos(r) * o
                          , p = n.sin(r) * o;
                        if (Math.abs(m) > g || Math.abs(p) > g || !d(m, p, .7 * Math.max(i, h)))
                            continue;
                        let y = (0,
                        a.shellBoxes)({
                            position: [m, l(m, p), p],
                            rotationY: r + u(-.6, .6),
                            width: i,
                            depth: h,
                            height: u(x.height[0], x.height[1]),
                            color: c(e.palette.brick),
                            trimColor: c(e.palette.concrete),
                            random: s
                        });
                        f.push(...y.boxes),
                        b.push(...y.props)
                    }
                let z = e.containers;
                if (z)
                    for (let t = 0; t < z.count; t++) {
                        let t = s() * Math.PI * 2
                          , r = u(z.radius[0], z.radius[1])
                          , o = n.cos(t) * r
                          , i = n.sin(t) * r;
                        if (!d(o, i, a.CONTAINER_HALF[0]))
                            continue;
                        let h = s() * Math.PI
                          , m = 1 + Math.floor(s() * z.maxLevels)
                          , p = l(o, i);
                        for (let t = 0; t < m; t++)
                            f.push(...(0,
                            a.containerBoxes)({
                                position: [o + u(-.7, .7) * t, p + a.CONTAINER_HALF[1] + t * a.CONTAINER_HALF[1] * 2, i + u(-.7, .7) * t],
                                rotationY: h + u(-.15, .15) * t,
                                color: c(e.palette.container)
                            }))
                    }
                let w = e.ramps;
                if (w)
                    for (let t = 0; t < w.count; t++) {
                        let t = s() * Math.PI * 2
                          , r = u(w.radius[0], w.radius[1])
                          , o = n.cos(t) * r
                          , i = n.sin(t) * r;
                        if (!d(o, i, 6))
                            continue;
                        let h = u(w.tilt[0], w.tilt[1])
                          , m = u(3, 6)
                          , p = u(2.5, 5)
                          , b = [o, l(o, i) + u(1.4, 3.2), i]
                          , g = [0, t, h];
                        f.push({
                            position: b,
                            halfExtents: [m, .22, p],
                            rotation: g,
                            color: c(e.palette.concrete),
                            surface: "concrete",
                            kind: "ramp"
                        }),
                        f.push({
                            position: (0,
                            a.localToWorld)(b, t, [0, .3, p - .12]),
                            halfExtents: [m, .12, .12],
                            rotation: g,
                            color: "#cfd4d8",
                            surface: "plastic",
                            kind: "trim",
                            ghost: !0
                        })
                    }
                let S = e.pillars;
                if (S)
                    for (let e = 0; e < S.count; e++) {
                        let e = s() * Math.PI * 2
                          , t = u(S.radius[0], S.radius[1])
                          , a = n.cos(e) * t
                          , r = n.sin(e) * t;
                        if (!d(a, r, .6))
                            continue;
                        let o = u(S.height[0], S.height[1])
                          , i = l(a, r);
                        f.push({
                            position: [a, i + o / 2, r],
                            halfExtents: [.16, o / 2, .16],
                            rotation: [0, s() * Math.PI, 0],
                            color: "#5c6167",
                            surface: "metal",
                            kind: "pillar"
                        }),
                        f.push({
                            position: [a, i + .09, r],
                            halfExtents: [.5, .09, .5],
                            rotation: [0, 0, 0],
                            color: "#4d5257",
                            surface: "concrete",
                            kind: "trim",
                            ghost: !0
                        })
                    }
                let v = e.gateLoop;
                if (v)
                    for (let t = 0; t < v.count; t++) {
                        let a = t / v.count * Math.PI * 2
                          , r = u(v.opening.height[0], v.opening.height[1])
                          , o = Math.max(r / 2 + 1.1, u(v.height[0], v.height[1]))
                          , i = n.cos(a) * v.radius
                          , s = n.sin(a) * v.radius;
                        p.push({
                            id: `${v.idPrefix}-${t + 1}`,
                            position: [i, l(i, s) + o, s],
                            rotationY: -a,
                            size: [u(v.opening.width[0], v.opening.width[1]), r],
                            color: e.palette.gate[t % e.palette.gate.length],
                            role: 0 === t ? "startFinish" : "gate"
                        })
                    }
                let M = (e, t) => {
                    let[a,o] = e.scale ?? [.8, 1.4]
                      , i = () => {
                        let t = s() * Math.PI * 2
                          , a = e.areaUniform ? h(e.radius[0], e.radius[1]) : u(e.radius[0], e.radius[1]);
                        return [n.cos(t) * a, n.sin(t) * a]
                    }
                      , f = (n, i) => {
                        let h = c(e.kinds)
                          , f = s() * Math.PI * 2
                          , p = u(a, o);
                        if (!d(n, i, t) || m(n, i))
                            return;
                        let g = l(n, i);
                        if (!e.heightRange || !(g < e.heightRange[0]) && !(g > e.heightRange[1])) {
                            if (void 0 !== e.maxSlope || void 0 !== e.minSlope) {
                                let t = (0,
                                r.terrainSlope)(l, n, i);
                                if (void 0 !== e.maxSlope && t > e.maxSlope || void 0 !== e.minSlope && t < e.minSlope)
                                    return
                            }
                            b.push({
                                kind: h,
                                position: [n, g, i],
                                rotationY: f,
                                scale: p,
                                ...e.lod ? {
                                    lod: e.lod
                                } : {}
                            })
                        }
                    }
                    ;
                    for (let t = 0; t < e.count; t++) {
                        let[t,a] = i()
                          , r = e.clump;
                        if (!r) {
                            f(t, a);
                            continue
                        }
                        let o = Math.round(u(r.count[0], r.count[1]));
                        for (let e = 0; e < o; e++) {
                            let e = s() * Math.PI * 2
                              , o = Math.sqrt(s()) * r.spread;
                            f(t + n.cos(e) * o, a + n.sin(e) * o)
                        }
                    }
                }
                ;
                for (let t of (e.scatter && M(e.scatter, 1.5),
                e.scatters ?? []))
                    M(t, 1.5);
                let A = e.grass;
                if (A)
                    for (let e = 0; e < A.count; e++) {
                        let e = s() * Math.PI * 2
                          , t = A.areaUniform ? h(A.radius[0], A.radius[1]) : u(A.radius[0], A.radius[1])
                          , a = n.cos(e) * t
                          , o = n.sin(e) * t
                          , i = s() * Math.PI
                          , c = .7 + .9 * s();
                        !(!d(a, o, 2) || m(a, o)) && (void 0 !== A.maxSlope && (0,
                        r.terrainSlope)(l, a, o) > A.maxSlope || b.push({
                            kind: "grass",
                            position: [a, l(a, o), o],
                            rotationY: i,
                            scale: c
                        }))
                    }
                for (let e of p)
                    f.push(...(0,
                    a.gateBoxes)(e, l));
                return {
                    boxes: f,
                    gates: p,
                    props: b
                }
            }(s, e.spawns, e.bounds, e.accent, l);
            t.push(...c.boxes),
            o.push(...c.gates),
            i.push(...c.props)
        }
        if (c)
            for (let e of (c.boxes && t.push(...c.boxes),
            c.props && i.push(...c.props),
            c.gates ?? []))
                o.push(e),
                t.push(...(0,
                a.gateBoxes)(e, l));
        return {
            mapId: e.id,
            prisms: c?.prisms,
            boxes: t,
            gates: o,
            props: i,
            spawns: e.spawns,
            bounds: e.bounds,
            environment: e.environment,
            terrain: e.terrain,
            ...e.pedestrians ? {
                pedestrians: e.pedestrians
            } : {},
            ...e.horizon ? {
                horizon: e.horizon
            } : {}
        }
    }
    function l(e, t) {
        let a = i(e);
        return t ? {
            ...a,
            bounds: t.bounds ?? a.bounds,
            boxes: [],
            prisms: [],
            editorDocument: t,
            ...t.horizon ? {
                horizon: t.horizon
            } : {}
        } : a
    }
    e.s(["buildWorld", 0, i, "collidableBoxes", 0, function(e) {
        return e.boxes.filter(e => !e.ghost)
    }
    , "worldForMap", 0, function(e) {
        let a = "gridworks" === e.id ? t.getState().document : e.editorDocument ?? null
          , r = o.get(e.id);
        if (r && (r.editorDocument ?? null) === a)
            return r;
        let n = l(e, a);
        return o.set(e.id, n),
        n
    }
    , "worldWithDocument", 0, l], 632526)
}
, 304661, e => {
    "use strict";
    let t = new Set(["drift-park", "whoop-world"])
      , a = new Set(["flight-school"]);
    e.s(["LESSON_MAP_IDS", 0, a, "UNPUBLISHED_MAP_IDS", 0, t])
}
, 811113, 55807, e => {
    "use strict";
    var t = e.i(883380)
      , a = e.i(569638)
      , r = e.i(50270)
      , n = e.i(353198)
      , o = e.i(166636)
      , i = e.i(133968)
      , l = e.i(778534)
      , s = e.i(235199)
      , c = e.i(632997)
      , u = e.i(514236)
      , h = e.i(998494)
      , d = e.i(304661);
    let m = {
        centerSensitivity: {
            min: 10,
            max: 2e3
        },
        maxRate: {
            min: 50,
            max: 2e3
        },
        expo: {
            min: 0,
            max: 1
        }
    }
      , f = r.z.object({
        centerSensitivity: r.z.number().finite().min(m.centerSensitivity.min).max(m.centerSensitivity.max),
        maxRate: r.z.number().finite().min(m.maxRate.min).max(m.maxRate.max),
        expo: r.z.number().finite().min(m.expo.min).max(m.expo.max)
    }).strict().refine(e => e.centerSensitivity <= e.maxRate, {
        message: "Center cannot exceed Max.",
        path: ["centerSensitivity"]
    });
    function p(e) {
        let t = (e, t) => Math.min(m[t].max, Math.max(m[t].min, e))
          , a = t(e.centerSensitivity, "centerSensitivity")
          , r = Math.max(t(e.maxRate, "maxRate"), a);
        return {
            centerSensitivity: a,
            maxRate: r,
            expo: t(e.expo, "expo")
        }
    }
    e.s(["RATE_LIMITS", 0, m, "axisRatesSchema", 0, f, "normalizeLegacyAxisRates", 0, p, "rateFieldError", 0, function(e, t, a) {
        if (!Number.isFinite(t))
            return "Enter a number.";
        let {min: r, max: n} = m[e];
        return t < r || t > n ? "expo" === e ? `Expo is ${r.toFixed(2)} to ${n.toFixed(2)}.` : `Use ${r} to ${n} \xb0/s.` : "centerSensitivity" === e && t > a.maxRate ? "Center cannot exceed Max." : "maxRate" === e && t < a.centerSensitivity ? "Max cannot be below Center." : null
    }
    ], 55807);
    var b = e.i(12746);
    let g = r.z.string().regex(/^shop:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i).transform(e => e)
      , y = "fd-sim-settings-v5"
      , x = r.z.object({
        axisIndex: r.z.number().int().min(0).max(31),
        invert: r.z.boolean(),
        min: r.z.number().min(-1).max(1),
        center: r.z.number().min(-1).max(1),
        max: r.z.number().min(-1).max(1)
    })
      , z = r.z.union([r.z.object({
        kind: r.z.literal("none")
    }), r.z.object({
        kind: r.z.literal("button"),
        buttonIndex: r.z.number().int().min(0).max(31)
    }), r.z.object({
        kind: r.z.literal("axis"),
        axisIndex: r.z.number().int().min(0).max(31),
        threshold: r.z.number().min(-1).max(1),
        invert: r.z.boolean()
    })])
      , w = r.z.object({
        arm: r.z.string().min(1),
        respawn: r.z.string().min(1),
        droneWheel: r.z.string().min(1).catch("Tab").default("Tab"),
        interact: r.z.string().min(1).catch("KeyE").default("KeyE")
    }).transform(e => {
        let t = new Set([e.arm, e.respawn, e.droneWheel]);
        return t.has(e.interact) ? {
            ...e,
            interact: ["KeyE", "KeyF", "KeyQ", "KeyG"].find(e => !t.has(e)) ?? "KeyT"
        } : e
    }
    ).catch(s.DEFAULT_KEYBOARD_BINDS).default(s.DEFAULT_KEYBOARD_BINDS)
      , S = r.z.object({
        throttle: r.z.boolean().catch(!1).default(!1),
        roll: r.z.boolean().catch(!1).default(!1),
        pitch: r.z.boolean().catch(!1).default(!1),
        yaw: r.z.boolean().catch(!1).default(!1)
    }).catch({
        throttle: !1,
        roll: !1,
        pitch: !1,
        yaw: !1
    }).default({
        throttle: !1,
        roll: !1,
        pitch: !1,
        yaw: !1
    })
      , v = r.z.object({
        deviceId: r.z.string().nullable(),
        channels: r.z.object({
            throttle: x.nullable(),
            roll: x.nullable(),
            pitch: x.nullable(),
            yaw: x.nullable()
        }),
        swappedAxes: S,
        deadband: r.z.number().min(0).max(.4),
        throttleSelfCentering: r.z.boolean(),
        halfThrottle: r.z.boolean().catch(!1).default(!1),
        arm: z,
        respawn: z.catch(s.UNBOUND_SWITCH).default(s.UNBOUND_SWITCH),
        droneWheel: z.catch(s.UNBOUND_SWITCH).default(s.UNBOUND_SWITCH),
        interact: z.catch(s.UNBOUND_SWITCH).default(s.UNBOUND_SWITCH),
        keyboard: w
    })
      , M = r.z.enum(["gamepad", "radio"]).nullable()
      , A = r.z.enum(["toggle", "follow"])
      , E = {
        channels: r.z.object({
            throttle: x.nullable().catch(null),
            roll: x.nullable().catch(null),
            pitch: x.nullable().catch(null),
            yaw: x.nullable().catch(null)
        }),
        swappedAxes: S,
        deadband: r.z.number().min(0).max(.4).catch(.03),
        throttleSelfCentering: r.z.boolean().catch(!1),
        halfThrottle: r.z.boolean().catch(!1).default(!1),
        arm: z.catch(s.UNBOUND_SWITCH),
        armBehavior: A.catch("follow"),
        deviceKind: M.catch(null).default(null),
        stickMode: r.z.enum(["mode1", "mode2", "mode3", "mode4"]).nullable().catch(null).default(null),
        respawn: z.catch(s.UNBOUND_SWITCH).default(s.UNBOUND_SWITCH),
        droneWheel: z.catch(s.UNBOUND_SWITCH).default(s.UNBOUND_SWITCH),
        interact: z.catch(s.UNBOUND_SWITCH).default(s.UNBOUND_SWITCH)
    }
      , I = r.z.object({
        deviceId: r.z.string().max(256).nullable().catch(null),
        ...E,
        keyboardOnly: r.z.boolean().catch(!1).default(!1),
        keyboard: w
    })
      , _ = r.z.object(E)
      , D = r.z.record(r.z.unknown()).transform(e => {
        let t = {};
        for (let[a,r] of Object.entries(e).slice(-12)) {
            if (!a || a.length > 256)
                continue;
            let e = _.safeParse(r);
            e.success && (t[a] = e.data)
        }
        return t
    }
    ).catch({}).default({})
      , C = r.z.object({
        centerSensitivity: r.z.number().min(10).max(400),
        maxRate: r.z.number().min(50).max(1800),
        expo: r.z.number().min(0).max(1)
    })
      , P = r.z.object({
        centerSensitivity: r.z.number().finite(),
        maxRate: r.z.number().finite(),
        expo: r.z.number().finite()
    }).transform(p)
      , T = r.z.object({
        archetype: r.z.enum(n.DRONE_IDS).catch(n.DEFAULT_DRONE),
        skins: r.z.object({
            freestyle: r.z.union([r.z.enum(n.DRONE_SKIN_IDS), g]).catch("factory"),
            whoop: r.z.union([r.z.enum(n.DRONE_SKIN_IDS), g]).catch("factory"),
            cinewhoop: r.z.union([r.z.enum(n.DRONE_SKIN_IDS), g]).catch("factory"),
            "long-range": r.z.union([r.z.enum(n.DRONE_SKIN_IDS), g]).catch("factory"),
            racer: r.z.union([r.z.enum(n.DRONE_SKIN_IDS), g]).catch("factory")
        }).catch((0,
        n.defaultDroneLoadout)().skins)
    }).catch((0,
    n.defaultDroneLoadout)()).default((0,
    n.defaultDroneLoadout)())
      , k = r.z.object({
        trail: r.z.union([r.z.enum(t.COSMETIC_IDS), g]).catch("original")
    }).catch({
        trail: "original"
    }).default({
        trail: "original"
    })
      , N = r.z.union([r.z.enum(a.ENVIRONMENT_PALETTE_IDS), g]).catch("classic").default("classic")
      , R = r.z.object({
        mid: r.z.number().min(0).max(1).catch(0).default(0),
        expo: r.z.number().min(0).max(1).catch(.1).default(.1)
    }).catch({
        mid: 0,
        expo: .1
    }).default({
        mid: 0,
        expo: .1
    })
      , O = r.z.object({
        fov: r.z.number().min(50).max(150),
        tiltDeg: r.z.number().min(0).max(60),
        shake: r.z.number().min(0).max(1),
        speedLines: r.z.number().min(0).max(1).catch(.45).default(.45),
        fisheye: r.z.number().min(0).max(1).optional().catch(void 0)
    });
    function B(e) {
        let t;
        if (!e || "object" != typeof e || !("resolutionMode" in e))
            return e;
        let {resolutionMode: a, ...r} = e
          , n = r.quality;
        if ("low" !== n && "medium" !== n && "high" !== n && "ultra" !== n)
            return r;
        let i = (t = "ultra" === n,
        {
            shadows: "low" !== n,
            postProcessing: "low" !== n,
            ambientOcclusion: t,
            bloom: t,
            msaa: t,
            renderScale: "low" === n ? .75 : 1
        })
          , l = {
            shadows: r.shadows,
            postProcessing: r.postProcessing ?? "low" !== n,
            ambientOcclusion: r.ambientOcclusion ?? !1,
            bloom: r.bloom ?? !1,
            msaa: r.msaa ?? !1,
            renderScale: r.renderScale ?? 1
        };
        return Object.keys(i).every(e => l[e] === i[e]) ? {
            ...r,
            ...(0,
            o.graphicsPreset)(n)
        } : r
    }
    let U = {
        postProcessing: r.z.boolean().optional(),
        renderScale: r.z.number().min(.5).max(1).catch(1).default(1),
        quality: r.z.enum(["low", "medium", "high", "ultra"]),
        shadows: r.z.boolean(),
        motionBlur: r.z.boolean().catch(!0).default(!0),
        bloom: r.z.boolean().catch(!1).default(!1),
        msaa: r.z.boolean().catch(!1).default(!1),
        drawDistance: r.z.number().min(100).max(1200),
        showSticks: r.z.boolean(),
        showRacingLine: r.z.boolean().catch(!0).default(!0),
        showPlayerOverlays: r.z.boolean().catch(!0).default(!0),
        showActivityOverlays: r.z.boolean().catch(!0).default(!0),
        showSkillChainHud: r.z.boolean().catch(!0).default(!0),
        showChat: r.z.boolean().catch(!0).default(!0)
    }
      , L = r.z.object({
        mapId: r.z.union([r.z.enum(h.MAP_IDS), r.z.string().regex(/^official:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/).transform(e => e)]).refine(e => !d.LESSON_MAP_IDS.has(e)).catch(h.DEFAULT_MAP_ID)
    }).default({
        mapId: h.DEFAULT_MAP_ID
    })
      , G = r.z.object({
        drone: T,
        gearCosmetics: k,
        environmentPalette: N,
        version: r.z.number().max(4),
        bindings: v,
        rates: r.z.object({
            roll: C,
            pitch: C,
            yaw: C
        }),
        throttle: R,
        camera: O,
        graphics: r.z.preprocess(B, r.z.object({
            carsEnabled: r.z.boolean().catch(!0).default(!0),
            ...U
        })),
        audio: r.z.object({
            volume: r.z.number().min(0).max(1)
        }).catch({
            volume: .7
        }).default({
            volume: .7
        }),
        map: L
    })
      , j = r.z.object({
        fov: O.shape.fov.catch($().fov),
        tiltDeg: O.shape.tiltDeg.catch($().tiltDeg),
        shake: O.shape.shake.catch($().shake),
        speedLines: O.shape.speedLines,
        fisheye: O.shape.fisheye
    }).catch($())
      , F = r.z.preprocess(B, r.z.object({
        trafficDetail: r.z.enum(["full", "reduced"]).catch("full").default("full"),
        ...U,
        quality: U.quality.catch(Y().quality),
        shadows: U.shadows.catch(Y().shadows),
        drawDistance: U.drawDistance.catch(Y().drawDistance),
        showSticks: U.showSticks.catch(Y().showSticks),
        postProcessing: U.postProcessing.catch(void 0)
    })).catch(Y())
      , H = r.z.object({
        gain: r.z.number().finite().min(0).max(1),
        muted: r.z.boolean().catch(!1)
    })
      , W = r.z.object({
        master: H.catch({
            gain: .7,
            muted: !1
        }),
        categories: r.z.object(Object.fromEntries(l.AUDIO_CATEGORIES.map(e => [e, H.catch({
            gain: 1,
            muted: !1
        })]))).catch(V().categories),
        muteInBackground: r.z.boolean().catch(!0)
    }).catch(V()).default(V())
      , q = r.z.object({
        version: r.z.literal(5),
        drone: T,
        gearCosmetics: k,
        environmentPalette: N,
        bindings: I.catch((0,
        c.defaultBindings)()),
        deviceProfiles: D,
        rates: r.z.object({
            roll: P,
            pitch: P,
            yaw: P
        }).catch(K()),
        throttle: R,
        camera: j,
        graphics: F,
        audio: W,
        flight: r.z.object({
            autoArm: r.z.boolean().catch(!0),
            rumble: r.z.boolean().catch(!0).default(!0)
        }).catch({
            autoArm: !0,
            rumble: !0
        }).default({
            autoArm: !0,
            rumble: !0
        }),
        accessibility: r.z.object({
            motion: r.z.enum(["system", "reduce", "full"]).catch("system")
        }).catch({
            motion: "system"
        }).default({
            motion: "system"
        }),
        map: L
    });
    function K() {
        return {
            roll: {
                ...b.RATE_PRESETS.freestyle.roll
            },
            pitch: {
                ...b.RATE_PRESETS.freestyle.pitch
            },
            yaw: {
                ...b.RATE_PRESETS.freestyle.yaw
            }
        }
    }
    function $() {
        return {
            fov: 100,
            tiltDeg: 30,
            shake: .6,
            speedLines: .45
        }
    }
    function Y() {
        return {
            trafficDetail: "full",
            postProcessing: !0,
            renderScale: 1,
            quality: "medium",
            shadows: !0,
            motionBlur: !1,
            bloom: !1,
            msaa: !1,
            drawDistance: 500,
            showSticks: !0,
            showRacingLine: !0,
            showPlayerOverlays: !0,
            showActivityOverlays: !0,
            showSkillChainHud: !0,
            showChat: !0
        }
    }
    function V() {
        return {
            master: {
                gain: .7,
                muted: !1
            },
            categories: {
                motors: {
                    gain: 1,
                    muted: !1
                },
                wind: {
                    gain: 1,
                    muted: !1
                },
                world: {
                    gain: 1,
                    muted: !1
                },
                interface: {
                    gain: 1,
                    muted: !1
                },
                race: {
                    gain: 1,
                    muted: !1
                }
            },
            muteInBackground: !0
        }
    }
    function J() {
        return {
            version: 5,
            drone: (0,
            n.defaultDroneLoadout)(),
            environmentPalette: "classic",
            gearCosmetics: {
                trail: "original"
            },
            bindings: (0,
            c.defaultBindings)(),
            deviceProfiles: {},
            rates: K(),
            throttle: {
                mid: 0,
                expo: .1
            },
            camera: $(),
            graphics: Y(),
            audio: V(),
            flight: {
                autoArm: !0,
                rumble: !0
            },
            accessibility: {
                motion: "system"
            },
            map: {
                mapId: h.DEFAULT_MAP_ID
            }
        }
    }
    function Q(e) {
        try {
            let t = window.localStorage.getItem(e);
            return t ? function(e) {
                let t = "object" == typeof e && null !== e ? e.version : void 0;
                if (5 === t) {
                    let t = q.safeParse(e);
                    return t.success ? t.data : null
                }
                if ("number" == typeof t && t <= 4) {
                    let t = G.safeParse(e);
                    return t.success ? function(e) {
                        let {quad: t, drone: a, version: r, bindings: n, rates: o, graphics: i, audio: l, ...s} = e
                          , {tuning: c, ...h} = a
                          , {carsEnabled: d, ...m} = i
                          , f = (0,
                        u.classifyDevice)(n.deviceId)
                          , b = {
                            ...n,
                            armBehavior: (0,
                            u.defaultArmBehavior)(f),
                            deviceKind: f,
                            stickMode: null,
                            keyboardOnly: !1
                        }
                          , g = V();
                        return {
                            ...s,
                            version: 5,
                            drone: h,
                            bindings: b,
                            deviceProfiles: {},
                            rates: {
                                roll: p(o.roll),
                                pitch: p(o.pitch),
                                yaw: p(o.yaw)
                            },
                            graphics: {
                                ...m,
                                trafficDetail: !1 === d ? "reduced" : "full"
                            },
                            audio: {
                                ...g,
                                master: {
                                    gain: l.volume,
                                    muted: !1
                                }
                            },
                            flight: {
                                autoArm: !0,
                                rumble: !0
                            },
                            accessibility: {
                                motion: "system"
                            }
                        }
                    }(t.data) : null
                }
                return null
            }(JSON.parse(t)) : null
        } catch {
            return null
        }
    }
    function X(e) {
        return "ultra" !== e.graphics.quality || (0,
        i.ultraAvailable)() ? e : {
            ...e,
            graphics: (0,
            o.withoutUltra)(e.graphics)
        }
    }
    function Z(e) {
        try {
            return window.localStorage.setItem(y, JSON.stringify(e)),
            !0
        } catch {
            return !1
        }
    }
    e.s(["DEFAULT_LENS", 0, .3, "defaultAudio", 0, V, "defaultRates", 0, K, "defaultSettings", 0, J, "lensStrength", 0, function(e) {
        return e.camera.fisheye ?? .3 * ("low" !== e.graphics.quality)
    }
    , "loadSettingsWithSource", 0, function() {
        let e = Q(y);
        if (e) {
            let t = X(e);
            return t !== e && Z(t),
            {
                settings: t,
                source: "current"
            }
        }
        let t = Q("fpv-sim-settings");
        if (t) {
            let e = X(t);
            return Z(e),
            {
                settings: e,
                source: "legacy"
            }
        }
        return {
            settings: J(),
            source: "default"
        }
    }
    , "saveSettings", 0, Z, "settingsBackup", 0, function(e) {
        return JSON.stringify({
            format: "flight-division-settings",
            exportedAt: new Date().toISOString(),
            settings: e
        }, null, 2)
    }
    ], 811113)
}
, 633643, e => {
    "use strict";
    var t = e.i(738073)
      , a = e.i(269176)
      , r = e.i(998494);
    e.s(["parseMenuShowcase", 0, function(e) {
        var n;
        if (!e || "object" != typeof e || !("string" == typeof (n = e.mapId) && r.MAP_IDS.includes(n)) || !Array.isArray(e.frames))
            return null;
        let o = e.frames.filter(t.isReplayFrame);
        if (0 === o.length)
            return null;
        let i = "number" == typeof e.duration && e.duration > 0 ? e.duration : o[o.length - 1].t
          , l = (0,
        t.isCamera)(e.camera) ? e.camera : a.DEFAULT_CHASE_CAMERA;
        return {
            mapId: e.mapId,
            frames: o,
            duration: i,
            camera: l
        }
    }
    ])
}
]);
