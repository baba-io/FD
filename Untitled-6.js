(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 419519, e => {
    "use strict";
    var t = e.i(843476)
      , i = e.i(271645)
      , r = e.i(94800)
      , s = e.i(848546)
      , o = e.i(223490)
      , a = e.i(225228)
      , n = e.i(284996)
      , l = e.i(630438)
      , f = e.i(521068);
    let u = {
        model: null,
        failed: !1
    }
      , h = !1
      , d = new Set;
    function c(e) {
        u = e,
        d.forEach(e => e())
    }
    function p() {
        if (h)
            return;
        h = !0;
        let e = t => new o.GLTFLoader().loadAsync(n.DRIFT_CAR_URL).then(e => {
            let t = (0,
            n.driftCarModel)(e);
            return e.scene.traverse(e => e.geometry?.dispose()),
            t
        }
        ).then(e => c({
            model: e,
            failed: !1
        }), i => {
            console.error("drift car model failed to load", i),
            u.failed || c({
                model: null,
                failed: !0
            }),
            t + 1 < 8 ? setTimeout( () => void e(t + 1), Math.min(6e4, 2e3 * 2 ** t)) : h = !1
        }
        );
        e(0)
    }
    function m() {
        return u
    }
    function g(e) {
        return d.add(e),
        () => {
            d.delete(e)
        }
    }
    function v({model: e, cars: o, quality: a, shadows: n, forcedDetail: u}) {
        let h = (0,
        s.useThree)(e => e.gl)
          , d = (0,
        f.useFleetMaterials)(h)
          , c = (0,
        i.useMemo)( () => new l.FleetBatches(e,d.cars,Math.max(1, o.length)), [e, d, o.length]);
        return (0,
        i.useEffect)( () => (c.attach(),
        () => c.dispose()), [c]),
        (0,
        i.useEffect)( () => c.setShadows(n), [c, n]),
        (0,
        r.useFrame)( ({camera: e, size: t}) => c.update(o, e, t.height, a, u)),
        (0,
        t.jsx)("primitive", {
            object: c.root,
            dispose: null
        })
    }
    e.s(["DriftFleet", 0, function(e) {
        let r, s, o, l = (r = (0,
        i.useSyncExternalStore)(g, m, m),
        s = (0,
        i.useContext)(a.SceneAssetReadiness),
        o = (0,
        i.useContext)(a.SceneAssetFailures),
        (0,
        i.useEffect)( () => p(), []),
        (0,
        i.useLayoutEffect)( () => {
            if (!s || r.model || r.failed)
                return;
            let e = Symbol("drift car model");
            return s.add(e),
            () => {
                s.delete(e)
            }
        }
        , [s, r]),
        (0,
        i.useLayoutEffect)( () => {
            r.failed && o?.add(n.DRIFT_CAR_URL)
        }
        , [r, o]),
        r.model);
        return l ? (0,
        t.jsx)(v, {
            model: l,
            ...e
        }) : null
    }
    , "loadDriftCarModel", 0, p])
}
, 702217, 841558, 94297, e => {
    "use strict";
    var t = e.i(843476)
      , i = e.i(271645)
      , r = e.i(94800)
      , s = e.i(190072)
      , o = e.i(579832)
      , a = e.i(212236)
      , n = e.i(37155)
      , l = e.i(983040)
      , f = e.i(504786)
      , u = e.i(106258)
      , h = e.i(260095)
      , d = e.i(419519)
      , c = e.i(408560)
      , p = e.i(130327)
      , m = e.i(315213)
      , g = e.i(85058)
      , v = e.i(70967)
      , y = e.i(1792);
    let x = NaN;
    class w {
        traffic;
        slots;
        window;
        slotK;
        points;
        changed;
        tyres;
        newest;
        states;
        tyre;
        slip;
        constructor(e, t=2048, i=2044) {
            this.traffic = e,
            this.slots = t,
            this.window = i,
            this.changed = [],
            this.newest = NaN,
            this.tyre = {
                x: 0,
                z: 0
            },
            this.slip = {
                strength: 0,
                heading: 0
            },
            this.tyres = 2 * e.cars.length,
            this.slotK = new Float64Array(t).fill(x),
            this.points = new Float64Array(t * this.tyres * 6),
            this.states = e.cars.map( () => (0,
            a.createDriftCarState)())
        }
        slot(e) {
            return (e % this.slots + this.slots) % this.slots
        }
        holds(e) {
            return this.slotK[this.slot(e)] === e
        }
        update(e, t) {
            this.changed.length = 0;
            let i = Math.ceil(32 * e) + 1
              , r = i - this.window + 1;
            this.newest = i;
            for (let e = 0; e < this.slots; e++) {
                let t = this.slotK[e];
                Number.isNaN(t) || t >= r && t <= i || (this.slotK[e] = x,
                this.changed.push(e))
            }
            let s = 0;
            for (let e = i; e >= r; e--) {
                let i = this.slot(e);
                if (this.slotK[i] !== e) {
                    if (t <= 0) {
                        s++;
                        continue
                    }
                    t--,
                    this.fill(e, i),
                    this.changed.push(i)
                }
            }
            return s
        }
        offset(e, t) {
            return (this.slot(e) * this.tyres + t) * 6
        }
        fill(e, t) {
            this.traffic.sample(e / 32, this.states);
            let {tyre: i, slip: r} = this;
            this.states.forEach( (e, s) => {
                for (let o = 0; o < 2; o++) {
                    (0,
                    m.driftLocalToWorld)(e, (o ? 1 : -1) * m.DRIFT_WHEEL_X, -m.DRIFT_AXLE_Z, i),
                    function(e, t, i) {
                        if (!e.wheelSlipRatios || !e.wheelSlipAngles) {
                            i.heading = e.yaw - e.slip,
                            i.strength = Math.min(1, 3 * Math.abs(e.slip));
                            return
                        }
                        let r = t ? 2 : 3;
                        i.heading = e.yaw + e.wheelSlipAngles[r],
                        i.strength = Math.max(0, Math.min(1, ((0,
                        y.tyreSlideSpeed)(e.speed, e.wheelSlipRatios[r], e.wheelSlipAngles[r]) - 1.5) / 5))
                    }(e, o, r);
                    let a = (t * this.tyres + 2 * s + o) * 6;
                    this.points[a] = i.x,
                    this.points[a + 1] = i.z,
                    this.points[a + 2] = Math.sin(r.heading),
                    this.points[a + 3] = Math.cos(r.heading),
                    this.points[a + 4] = r.strength,
                    this.points[a + 5] = e.distance
                }
            }
            ),
            this.slotK[t] = e
        }
    }
    let b = {
        low: 48,
        medium: 80,
        high: 180,
        ultra: 180
    }
      , F = {
        low: [35, 65],
        medium: [55, 95],
        high: [80, 110],
        ultra: [80, 110]
    }
      , M = e => 3.6 * (e + 1) + 6
      , A = M(v.GRIDWORKS_DRIFT.speed);
    function R() {
        return {
            camera: new s.Vector3,
            sphere: new s.Sphere,
            frustum: new s.Frustum,
            projection: new s.Matrix4
        }
    }
    function S(e, t, i, r, s, o=A) {
        return e.getWorldPosition(s.camera),
        s.sphere.center.set(i.x, 0, i.z),
        s.sphere.radius = o,
        s.sphere.applyMatrix4(t),
        s.sphere.radius += 3,
        s.frustum.setFromProjectionMatrix(s.projection.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), e.coordinateSystem, e.reversedDepth),
        s.sphere.distanceToPoint(s.camera) < F[r][1] && s.frustum.intersectsSphere(s.sphere)
    }
    let _ = {
        low: .32,
        medium: .22,
        high: .2,
        ultra: .18
    };
    function E(e) {
        return e - 4096 * Math.floor(e / 4096)
    }
    let D = [void 0]
      , T = `        // Asphalt and paint already use depth layers 1 and 2.
        #ifdef USE_LOGARITHMIC_DEPTH_BUFFER
          gl_FragDepth = max(0.0, gl_FragDepth - ${(3 * g.DEPTH_LAYER_STEP).toPrecision(12)});
        #endif
`
      , k = 3 * g.DEPTH_LAYER_STEP
      , I = `        float edge = smoothstep(0.0, 0.13, vUv.x) * smoothstep(0.0, 0.13, 1.0 - vUv.x);
        float grain = 0.85 + 0.1 * sin(vUv.y * 31.0) * sin(vUv.x * 91.0);
        float alpha = 0.58 * edge * grain * vStrength * freshness;
        gl_FragColor = vec4(0.008, 0.009, 0.01, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
`
      , L = [0]
      , P = new Map;
    function U({elapsed: e, offsets: o=L, variations: a=D, circuit: n=v.GRIDWORKS_DRIFT}) {
        let l = `${n.id}:${a.join()}`
          , f = (0,
        i.useMemo)( () => {
            let e;
            return (e = P.get(l)) || (e = {
                geometry: function(e, t=v.GRIDWORKS_DRIFT) {
                    let i = Math.max(768, Math.ceil(t.line.length / .42))
                      , r = []
                      , o = []
                      , a = []
                      , n = []
                      , l = []
                      , f = []
                      , u = (0,
                    m.createDriftPose)()
                      , h = {
                        x: 0,
                        z: 0
                    }
                      , d = {
                        x: 0,
                        z: 0
                    };
                    for (let s = 0; s < e.length; s++)
                        for (let c of [-1, 1]) {
                            let g = r.length / 3;
                            for (let v = 0; v <= i; v++) {
                                let y = v / i * t.lapSeconds;
                                (0,
                                m.driftLocalToWorld)((0,
                                p.sampleDriftPose)(y, u, e[s], t), c * m.DRIFT_WHEEL_X, -m.DRIFT_AXLE_Z, h);
                                let x = Math.min(1, 3 * Math.abs(u.slip));
                                (0,
                                m.driftLocalToWorld)((0,
                                p.sampleDriftPose)(y + .001, u, e[s], t), c * m.DRIFT_WHEEL_X, -m.DRIFT_AXLE_Z, d);
                                let w = d.x - h.x
                                  , b = d.z - h.z
                                  , F = Math.hypot(w, b);
                                for (let e of [-1, 1]) {
                                    let t = .5 * m.DRIFT_WHEEL_WIDTH;
                                    r.push(h.x - b / F * e * t, .045, h.z + w / F * e * t),
                                    o.push((e + 1) / 2, 12 * y),
                                    a.push(y),
                                    n.push(x),
                                    l.push(s)
                                }
                                if (v > 0 && Math.max(x, n[n.length - 3]) >= .02) {
                                    let e = g + (v - 1) * 2;
                                    f.push(e, e + 1, e + 2, e + 1, e + 3, e + 2)
                                }
                            }
                        }
                    let c = new s.BufferGeometry;
                    return c.setAttribute("position", new s.Float32BufferAttribute(r,3)),
                    c.setAttribute("uv", new s.Float32BufferAttribute(o,2)),
                    c.setAttribute("birth", new s.Float32BufferAttribute(a,1)),
                    c.setAttribute("strength", new s.Float32BufferAttribute(n,1)),
                    c.setAttribute("carIndex", new s.Float32BufferAttribute(l,1)),
                    c.setIndex(f),
                    c.computeBoundingSphere(),
                    c
                }(a, n),
                users: 0
            },
            P.set(l, e)),
            e
        }
        , [l, a, n])
          , u = (0,
        i.useMemo)( () => ({
            ribbons: f.geometry,
            tire: (0,
            g.pullUnderReversedDepth)(function(e, t=v.GRIDWORKS_DRIFT.lapSeconds) {
                return new s.ShaderMaterial({
                    transparent: !0,
                    depthWrite: !1,
                    fog: !0,
                    polygonOffset: !0,
                    polygonOffsetFactor: 0,
                    polygonOffsetUnits: -192,
                    uniforms: s.UniformsUtils.merge([c.UniformsLib.fog, {
                        times: {
                            value: new Float32Array(e)
                        },
                        lap: {
                            value: t
                        }
                    }]),
                    vertexShader: `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      attribute float birth;
      attribute float strength;
      attribute float carIndex;
      uniform float times[${e}];
      varying float vTime;
      varying float vBirth;
      varying float vStrength;
      varying vec2 vUv;
      #include <fog_pars_vertex>
      void main() {
        // Select this ribbon's car once per vertex, not in a loop per fragment.
        vTime = times[int(carIndex + 0.5)];
        vBirth = birth; vUv = uv; vStrength = strength;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <logdepthbuf_vertex>
        #include <fog_vertex>
      }`,
                    fragmentShader: `
      #include <logdepthbuf_pars_fragment>
      uniform float lap;
      varying float vTime;
      varying float vBirth;
      varying float vStrength;
      varying vec2 vUv;
      #include <fog_pars_fragment>
      void main() {
        #include <logdepthbuf_fragment>
${T}        // Every vertex of a ribbon carries the same time, so the lap cut stays per fragment.
        float age = mod(vTime - vBirth + lap, lap);
        float freshness = (1.0 - smoothstep(12.0, max(60.0, lap), age)) * step(vBirth, vTime);
${I}      }`
                })
            }(o.length, n.lapSeconds), k)
        }), [o.length, f, n]);
        return (0,
        i.useEffect)( () => (f.users++,
        () => {
            f.users--,
            queueMicrotask( () => {
                f.users || P.get(l) !== f || (P.delete(l),
                f.geometry.dispose())
            }
            )
        }
        ), [l, f]),
        (0,
        i.useEffect)( () => () => u.tire.dispose(), [u]),
        (0,
        r.useFrame)( () => {
            let t = u.tire.uniforms.times.value;
            for (let i = 0; i < o.length; i++)
                t[i] = e.current + o[i]
        }
        ),
        (0,
        t.jsx)("mesh", {
            geometry: u.ribbons,
            material: u.tire,
            renderOrder: g.GROUND_DECAL_RENDER_ORDER
        })
    }
    let C = new Map;
    function O({cars: e, variations: o, quality: a, circuit: n=v.GRIDWORKS_DRIFT}) {
        let l = b[a]
          , f = `${n.id}:${o.join()}`
          , u = (0,
        i.useMemo)( () => (function(e, t, i) {
            let r = C.get(e);
            if (!r) {
                let o = function(e, t=v.GRIDWORKS_DRIFT) {
                    let i = 2 * e.length
                      , r = new Float32Array(2048 * i * 4)
                      , s = (0,
                    m.createDriftPose)()
                      , o = {
                        x: 0,
                        z: 0
                    };
                    return e.forEach( (e, i) => {
                        for (let a = 0; a < 2048; a++) {
                            (0,
                            p.sampleDriftPose)(a / 2048 * t.lapSeconds, s, e, t);
                            let n = Math.min(1, 3 * Math.abs(s.slip));
                            for (let e = 0; e < 2; e++) {
                                (0,
                                m.driftLocalToWorld)(s, (e ? 1 : -1) * m.DRIFT_WHEEL_X, -m.DRIFT_AXLE_Z, o);
                                let t = ((2 * i + e) * 2048 + a) * 4;
                                r[t] = o.x,
                                r[t + 1] = o.z,
                                r[t + 2] = n
                            }
                        }
                    }
                    ),
                    {
                        data: r,
                        samples: 2048,
                        rows: i
                    }
                }(t, i)
                  , a = new s.DataTexture(o.data,o.samples,o.rows,s.RGBAFormat,s.FloatType);
                a.minFilter = a.magFilter = s.NearestFilter,
                a.generateMipmaps = !1,
                a.needsUpdate = !0,
                r = {
                    texture: a,
                    users: 0
                },
                C.set(e, r)
            }
            return r
        }
        )(f, o, n), [f, o, n]);
        (0,
        i.useEffect)( () => (u.users++,
        () => {
            u.users--,
            queueMicrotask( () => {
                u.users || C.get(f) !== u || (C.delete(f),
                u.texture.dispose())
            }
            )
        }
        ), [f, u]);
        let h = (0,
        i.useMemo)( () => (function() {
            let e = new Uint8Array(65536);
            for (let t = 0; t < 128; t++)
                for (let i = 0; i < 128; i++) {
                    let r = (i + .5) / 128 * 2 - 1
                      , s = (t + .5) / 128 * 2 - 1
                      , o = Math.hypot(r, s)
                      , a = Math.sin(9 * r + Math.sin(7 * s)) * Math.cos(8 * s - 3 * r)
                      , n = Math.max(0, Math.min(1, (1 - o) / .42))
                      , l = n * n * (3 - 2 * n) * Math.max(0, 1 - o * o) * (.7 + .22 * a + Math.sin(23 * r + 11 * s) * Math.cos(19 * s - 7 * r) * .08)
                      , f = (128 * t + i) * 4;
                    e[f] = e[f + 1] = e[f + 2] = Math.round(205 + 24 * a),
                    e[f + 3] = Math.round(255 * l)
                }
            let t = new s.DataTexture(e,128,128);
            return t.magFilter = s.LinearFilter,
            t.minFilter = s.LinearMipmapLinearFilter,
            t.generateMipmaps = !0,
            t.needsUpdate = !0,
            t
        }
        )(), []);
        (0,
        i.useEffect)( () => () => h.dispose(), [h]);
        let d = (0,
        i.useMemo)( () => {
            var t, i, r, o;
            let a = (t = u.texture,
            i = e.length,
            r = n.lapSeconds,
            o = u.texture.image.width,
            new s.ShaderMaterial({
                transparent: !0,
                depthWrite: !1,
                fog: !0,
                uniforms: {
                    ...s.UniformsUtils.merge([c.UniformsLib.fog]),
                    smokeMap: {
                        value: h
                    },
                    births: {
                        value: t
                    },
                    clocks: {
                        value: Array.from({
                            length: i
                        }, () => new s.Vector4)
                    },
                    shown: {
                        value: new Float32Array(i)
                    },
                    fadeRange: {
                        value: new s.Vector2(...F.high)
                    }
                },
                defines: {
                    CARS: i,
                    PUFFS: l.toFixed(1),
                    LIFE: "3.6000",
                    LAP: r.toFixed(6),
                    SAMPLES: o
                },
                vertexShader: `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      attribute float puff;
      uniform vec4 clocks[CARS];
      uniform float shown[CARS];
      uniform sampler2D births;
      uniform vec2 fadeRange;
      varying vec2 vUv;
      varying float vOpacity;
      #include <fog_pars_vertex>
      void main() {
        float car = floor((puff + 0.5) / PUFFS);
        float i = puff - car * PUFFS;
        int c = int(car + 0.5);
        // clocks: generation time, lap phase, seed offset, generation start.
        vec4 clock = clocks[c];
        float slot = floor(i * 0.5) * (LIFE / (PUFFS * 0.5));
        float older = clock.x < slot ? 1.0 : 0.0;
        float age = clock.x - slot + older * LIFE;
        float born = clock.w + slot - older * LIFE;
        float seed = i * 7.13 + clock.z - older * 1.71;
        float phase = mod(clock.y + slot - older * LIFE, LAP) / LAP * float(SAMPLES);
        int k = int(floor(phase)) % SAMPLES;
        int row = c * 2 + int(mod(i, 2.0) + 0.5);
        vec3 birth = mix(texelFetch(births, ivec2(k, row), 0).xyz, texelFetch(births, ivec2((k + 1) % SAMPLES, row), 0).xyz, fract(phase));

        float spread = age * 0.32;
        float size = 0.48 + age * (0.85 + sin(seed) * 0.12);
        vec3 center = vec3(birth.x + sin(seed) * spread + age * 0.28, 0.19 + age * 0.48 + sin(seed * 2.0) * spread * 0.2, birth.y + cos(seed) * spread);
        float rotation = seed + age * 0.16;
        float c0 = cos(rotation), s0 = sin(rotation);
        vUv = mat2(c0, -s0, s0, c0) * (uv - 0.5) + 0.5;
        vOpacity = born < 0.0 ? 0.0 : 0.34 * birth.z * min(age / 0.1, 1.0) * pow(1.0 - age / LIFE, 1.4) * shown[c];

        vec4 mvPosition = modelViewMatrix * vec4(center, 1.0);
        // Fade before a puff covers a large part of the view. Collapse invisible
        // puffs in the vertex shader so they generate NO fragments.
        float depth = -mvPosition.z;
        float coverage = size * projectionMatrix[1][1] / max(depth, 0.001);
        vOpacity *= smoothstep(0.35, 1.4, depth) * (1.0 - smoothstep(0.45, 1.1, coverage));
        vOpacity *= 1.0 - smoothstep(fadeRange.x, fadeRange.y, length(mvPosition.xyz));
        if (vOpacity < 0.002) {
          gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
          return;
        }
        // View-facing puffs retain their shape through drone roll and their
        // world size even on a scaled-down track.
        mvPosition.xy += position.xy * size;
        gl_Position = projectionMatrix * mvPosition;
        #include <logdepthbuf_vertex>
        #include <fog_vertex>
      }`,
                fragmentShader: `
      #include <logdepthbuf_pars_fragment>
      uniform sampler2D smokeMap;
      varying vec2 vUv;
      varying float vOpacity;
      #include <fog_pars_fragment>
      void main() {
        vec4 puff = texture2D(smokeMap, vUv);
        float alpha = puff.a * vOpacity;
        if (alpha < 0.002) discard;
        #include <logdepthbuf_fragment>
        gl_FragColor = vec4(puff.rgb, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`
            }))
              , f = new s.PlaneGeometry(1,1)
              , d = new s.InstancedBufferGeometry;
            d.index = f.index,
            d.setAttribute("position", f.getAttribute("position")),
            d.setAttribute("uv", f.getAttribute("uv")),
            d.setAttribute("puff", new s.InstancedBufferAttribute(Float32Array.from({
                length: e.length * l
            }, (e, t) => t),1)),
            d.instanceCount = e.length * l;
            let p = new s.Mesh(d,a);
            return p.frustumCulled = !1,
            p.renderOrder = 2,
            p.name = "Drift smoke",
            {
                mesh: p,
                material: a,
                geometry: d
            }
        }
        , [h, u, e.length, l, n.lapSeconds]);
        (0,
        i.useEffect)( () => () => {
            d.material.dispose(),
            d.geometry.dispose()
        }
        , [d]),
        (0,
        i.useEffect)( () => {
            d.material.uniforms.fadeRange.value.set(...F[a])
        }
        , [a, d]);
        let g = (0,
        i.useMemo)( () => R(), []);
        return (0,
        r.useFrame)( ({camera: t}) => {
            let {mesh: i, material: r} = d
              , s = r.uniforms.clocks.value
              , o = r.uniforms.shown.value;
            i.updateWorldMatrix(!0, !1);
            let l = !1;
            e.forEach( (e, r) => {
                var f;
                let u, h, d, c = e.pose.clock, p = S(t, i.matrixWorld, e.pose, a, g, M(n.speed));
                o[r] = +!!p,
                l ||= p;
                let m = (f = n.lapSeconds,
                h = 3.6 * (u = Math.floor(c / 3.6)),
                {
                    frac: c - h,
                    lapPhase: (h % f + f) % f,
                    seed: (1.71 * u % (d = 2 * Math.PI) + d) % d,
                    base: h
                });
                s[r].set(m.frac, m.lapPhase, m.seed, m.base)
            }
            ),
            i.visible = l
        }
        ),
        (0,
        t.jsx)("primitive", {
            object: d.mesh
        })
    }
    let N = null
      , j = !1
      , z = new Set;
    function W() {
        if (N)
            return N;
        let e = new s.TextureLoader().load("/sim/drift-smoke/puffs.webp", () => {
            j = !0,
            z.forEach(e => e())
        }
        , void 0, t => {
            console.error("drift smoke sprites failed to load", t),
            N === e && (N = null)
        }
        );
        return e.minFilter = s.LinearMipmapLinearFilter,
        e.magFilter = s.LinearFilter,
        e.generateMipmaps = !0,
        e.premultiplyAlpha = !1,
        N = e
    }
    function B() {
        return j
    }
    function V(e) {
        return z.add(e),
        () => {
            z.delete(e)
        }
    }
    let G = new s.Vector3(1.15,1.09,1)
      , H = new s.Vector3(.5,.49,.66);
    function K(e, t, i, r, o, a) {
        return new s.ShaderMaterial({
            transparent: !0,
            depthTest: !0,
            depthWrite: !1,
            fog: !0,
            uniforms: {
                ...s.UniformsUtils.merge([c.UniformsLib.fog]),
                smokeMap: {
                    value: e
                },
                births: {
                    value: t
                },
                slideClock: {
                    value: new s.Vector2
                },
                slides: {
                    value: Array.from({
                        length: 2 * i
                    }, () => new s.Vector4)
                },
                order: {
                    value: new Float32Array(i)
                },
                shown: {
                    value: new Float32Array(i)
                },
                fadeRange: {
                    value: new s.Vector2(...F.high)
                },
                sunView: {
                    value: new s.Vector3(0,1,0)
                },
                lit: {
                    value: G.clone()
                },
                shade: {
                    value: H.clone()
                }
            },
            defines: {
                CARS: i,
                TYRES: 2 * i,
                PUFFS: r.toFixed(1),
                LIFE: "2.2000",
                SAMPLES: a,
                SPACING: o.toFixed(4),
                BIRTH: Math.max(.64, 2.5 * o).toFixed(4),
                OPACITY: (function(e, t=0) {
                    let i = Math.min(1, Math.max(0, (t / 2.2 - .7) / .3));
                    return (1 - Math.pow(.13, e / .55)) * (1 - i * i * (3 - 2 * i))
                }
                )(o).toFixed(4),
                RATE: "32.0",
                LAST: 254,
                PERIOD: "4096.0",
                FINAL_SIZE: "3.0000",
                SPREAD: "0.4500",
                JITTER: "0.0600",
                BIRTH_LIFT: "0.1000",
                LIFT: "0.1600",
                RISE: "0.1600"
            },
            vertexShader: `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      attribute float puff;
      uniform sampler2D births;
      uniform vec2 slideClock;
      uniform vec4 slides[TYRES];
      uniform float order[CARS];
      uniform float shown[CARS];
      uniform vec2 fadeRange;
      varying vec2 vUv;
      varying vec2 vCell;
      varying vec2 vTurn;
      varying float vOpacity;
      varying float vHeight;
      varying float vErode;
      #include <fog_pars_vertex>

      // Tyre row's table point m columns after the search's oldest.
      vec4 point(int row, int m) {
        return texelFetch(births, ivec2((int(slideClock.x) + m) % SAMPLES, row), 0);
      }
      // Slide distance at column m relative to now, unwrapped: never decreasing in m.
      float rel(int row, int m, float now) {
        float d = point(row, m).w - now;
        return d - PERIOD * floor(d / PERIOD + 0.5);
      }

      void hide() {
        gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }

      void main() {
        float car = floor((puff + 0.5) / (PUFFS * 2.0));
        float j = puff - car * PUFFS * 2.0;
        int c = int(car + 0.5);
        float side = mod(j, 2.0);
        float rank = floor(j * 0.5);
        rank = order[c] > 0.5 ? PUFFS - 1.0 - rank : rank;
        int row = c * 2 + int(side + 0.5);
        vec4 slide = slides[row];
        // This puff's slide distance, relative to now.
        float target = -slide.y - rank * SPACING;

        // Where the tyre's slide reached it: the last column at or before it, then the step's fraction.
        if (shown[c] < 0.5 || rel(row, 0, slide.x) > target) { hide(); return; }
        int lo = 0, hi = LAST;
        for (int step = 0; step < 8; step++) {
          if (hi - lo <= 1) break;
          int mid = (lo + hi) / 2;
          if (rel(row, mid, slide.x) <= target) lo = mid; else hi = mid;
        }
        float a = rel(row, lo, slide.x), b = rel(row, lo + 1, slide.x);
        if (b <= a) { hide(); return; }
        float f = min(1.0, (target - a) / (b - a));
        float age = (slideClock.y - float(lo) - f) / RATE;
        if (age < 0.0 || age >= LIFE) { hide(); return; }
        vec3 birth = mix(point(row, lo).xyz, point(row, lo + 1).xyz, f);

        float number = mod(slide.z - rank, 4096.0) + side * 1013.0;
        float seed = number * 2.39996;
        float life = age / LIFE;
        // Dense and low at the tyre, swelling and rising behind the car over its life.
        float grow = life;
        float birthSize = BIRTH * (1.0 + sin(seed) * 0.04);
        float size = mix(birthSize, FINAL_SIZE, grow);
        float spread = mix(JITTER, SPREAD, grow);
        float height = mix(birthSize * BIRTH_LIFT, FINAL_SIZE * LIFT + RISE, grow);
        vec3 center = vec3(birth.x + sin(seed) * spread, height, birth.y + cos(seed) * spread);
        float rotation = seed + life * 0.5;
        float c0 = cos(rotation), s0 = sin(rotation);
        vUv = mat2(c0, -s0, s0, c0) * (uv - 0.5) + 0.5;
        vTurn = vec2(c0, s0);
        float cell = floor(fract(seed * 0.618) * 4.0);
        vCell = vec2(mod(cell, 2.0), floor(cell * 0.5)) * 0.5;
        vErode = smoothstep(0.5, 1.0, life);
        vOpacity = OPACITY * birth.z * min(age / 0.04, 1.0) * (1.0 - smoothstep(0.7, 1.0, life));

        vec4 mvPosition = modelViewMatrix * vec4(center, 1.0);
        vec4 ground = modelViewMatrix * vec4(center.x, 0.0, center.z, 1.0);
        vec3 up = normalize(mat3(modelViewMatrix) * vec3(0.0, 1.0, 0.0));
        // Soften, never vanish, as the camera passes through a puff.
        float depth = -mvPosition.z;
        vOpacity *= mix(0.3, 1.0, smoothstep(0.2, 0.9 + size * 0.2, depth));
        vOpacity *= 1.0 - smoothstep(fadeRange.x, fadeRange.y, length(mvPosition.xyz));
        if (vOpacity < 0.002) { hide(); return; }
        mvPosition.xy += position.xy * size;
        vHeight = dot(mvPosition.xyz - ground.xyz, up);
        // Use the billboard's real depth. Pulling it towards the camera let smoke behind
        // an opaque car win its depth test and show through the opposite body panel (#774).
        gl_Position = projectionMatrix * mvPosition;
        #include <logdepthbuf_vertex>
        #include <fog_vertex>
      }`,
            fragmentShader: `
      #include <logdepthbuf_pars_fragment>
      uniform sampler2D smokeMap;
      uniform vec3 sunView;
      uniform vec3 lit;
      uniform vec3 shade;
      varying vec2 vUv;
      varying vec2 vCell;
      varying vec2 vTurn;
      varying float vOpacity;
      varying float vHeight;
      varying float vErode;
      #include <fog_pars_fragment>
      void main() {
        vec2 uv = clamp(vUv, 0.0, 1.0) * 0.5 + vCell;
        vec4 puff = texture2D(smokeMap, uv);
        // Old puffs lose their thin parts first: they break into wisps.
        float density = smoothstep(vErode * 0.7, vErode * 0.7 + 0.35, puff.a);
        // Where the puff meets the asphalt it fades instead of cutting a line.
        float alpha = density * vOpacity * smoothstep(0.0, 0.3, vHeight);
        if (alpha < 0.004) discard;
        #include <logdepthbuf_fragment>
        vec2 n2 = puff.rg * 2.0 - 1.0;
        // The sprite turns by vTurn: turn its normal back into the view.
        n2 = vec2(n2.x * vTurn.x - n2.y * vTurn.y, n2.x * vTurn.y + n2.y * vTurn.x);
        vec3 normal = vec3(n2, sqrt(max(0.0, 1.0 - dot(n2, n2))));
        float light = clamp(dot(normal, sunView) * 0.7 + 0.45, 0.0, 1.0);
        vec3 color = mix(shade, lit, smoothstep(0.0, 1.0, light)) * (0.8 + 0.2 * puff.b);
        gl_FragColor = vec4(color, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`
        })
    }
    e.s(["onRacingSmokeAtlas", 0, V, "racingSmokeAtlas", 0, W, "racingSmokeAtlasReady", 0, B, "racingSmokeMaterial", 0, K], 841558);
    var q = e.i(225228);
    let $ = 200 * Math.PI / 31;
    class X {
        history;
        geometry;
        position;
        mark;
        drawn;
        dirty;
        whole;
        constructor(e) {
            this.history = e,
            this.geometry = new s.BufferGeometry,
            this.dirty = new Uint8Array(2048),
            this.whole = !1;
            const t = e.slots * e.tyres;
            this.position = new s.BufferAttribute(new Float32Array(4 * t * 3),3).setUsage(s.DynamicDrawUsage),
            this.mark = new s.BufferAttribute(new Float32Array(4 * t * 4),4).setUsage(s.DynamicDrawUsage);
            const i = new Uint32Array(6 * t);
            for (let e = 0; e < t; e++) {
                const t = 4 * e;
                i.set([t, t + 1, t + 2, t + 1, t + 3, t + 2], 6 * e)
            }
            this.geometry.setAttribute("position", this.position),
            this.geometry.setAttribute("mark", this.mark),
            this.geometry.setIndex(new s.BufferAttribute(i,1)),
            this.drawn = new Float64Array(e.slots).fill(NaN),
            this.position.onUpload( () => {
                this.whole = !1
            }
            )
        }
        sync() {
            let {history: e} = this;
            for (let t of e.changed)
                this.dirty[t] = 1,
                this.dirty[(t + e.slots - 1) % e.slots] = 1;
            let t = -1;
            for (let i = 0; i <= e.slots; i++) {
                let r = i < e.slots && 1 === this.dirty[i] && this.draw(i);
                i < e.slots && (this.dirty[i] = 0),
                r && t < 0 && (t = i),
                !r && t >= 0 && (this.upload(t, i),
                t = -1)
            }
        }
        draw(e) {
            let {history: t} = this
              , i = t.slotK[e]
              , r = !Number.isNaN(i) && t.holds(i + 1)
              , s = r ? i : NaN;
            if (Object.is(s, this.drawn[e]))
                return !1;
            this.drawn[e] = s;
            let o = this.position.array
              , a = this.mark.array;
            for (let s = 0; s < t.tyres; s++) {
                let n = e * t.tyres + s
                  , l = 4 * n * 3
                  , f = 4 * n * 4
                  , u = r ? t.offset(i, s) : 0
                  , h = r ? t.offset(i + 1, s) : 0;
                if (!r || .02 > Math.max(t.points[u + 4], t.points[h + 4])) {
                    o.fill(0, l, l + 12),
                    a.fill(0, f, f + 16);
                    continue
                }
                let d = e / 32
                  , c = t.points[u + 5] % $
                  , p = 0;
                for (let[e,i] of [[0, u], [1, h]]) {
                    let r = t.points[i]
                      , s = t.points[i + 1]
                      , n = t.points[i + 2]
                      , h = t.points[i + 3]
                      , g = c + t.points[i + 5] - t.points[u + 5];
                    for (let u of [-1, 1]) {
                        let c = .5 * m.DRIFT_WHEEL_WIDTH * u;
                        o[l + 3 * p] = r - h * c,
                        o[l + 3 * p + 1] = .045,
                        o[l + 3 * p + 2] = s + n * c,
                        a[f + 4 * p] = (u + 1) / 2,
                        a[f + 4 * p + 1] = g,
                        a[f + 4 * p + 2] = d + e / 32,
                        a[f + 4 * p + 3] = t.points[i + 4],
                        p++
                    }
                }
            }
            return !0
        }
        upload(e, t) {
            if (!this.whole && this.position.updateRanges.length > 256 && (this.position.clearUpdateRanges(),
            this.mark.clearUpdateRanges(),
            this.whole = !0),
            this.position.needsUpdate = this.mark.needsUpdate = !0,
            this.whole)
                return;
            let i = this.history.tyres;
            this.position.addUpdateRange(e * i * 12, (t - e) * i * 12),
            this.mark.addUpdateRange(e * i * 16, (t - e) * i * 16)
        }
        dispose() {
            this.geometry.dispose()
        }
    }
    let Z = -1 / 0;
    class Y {
        history;
        texture;
        data;
        column;
        filled;
        slide;
        first;
        last;
        constructor(e) {
            this.history = e,
            this.first = NaN,
            this.last = NaN,
            this.data = new Float32Array(256 * e.tyres * 4),
            this.texture = new s.DataTexture(this.data,256,e.tyres,s.RGBAFormat,s.FloatType),
            this.texture.minFilter = this.texture.magFilter = s.NearestFilter,
            this.texture.generateMipmaps = !1,
            this.texture.needsUpdate = !0,
            this.column = new Float64Array(256).fill(NaN),
            this.filled = new Float64Array(256).fill(NaN),
            this.slide = new Float64Array(256 * e.tyres)
        }
        sync() {
            let {history: e} = this
              , t = e.newest
              , i = t + 1;
            for (; i > t - 256 + 1 && e.holds(i - 1); )
                i--;
            if (i > t)
                return;
            let r = Math.max(this.first, i)
              , s = Math.min(this.last, t);
            r <= s ? (this.first = r,
            this.last = s) : (this.first = this.last = t,
            this.slide.fill(0, this.at(t, 0), this.at(t, 0) + e.tyres));
            for (let e = this.last + 1; e <= t; e++)
                this.step(e - 1, e, 1);
            for (let e = this.first - 1; e >= i; e--)
                this.step(e + 1, e, -1);
            this.first = i,
            this.last = t;
            let o = !1;
            for (let r = t - 256 + 1; r <= t; r++) {
                let t = this.at(r, 0) / e.tyres
                  , s = r >= i;
                if (s ? this.column[t] !== r : this.column[t] !== Z || this.filled[t] !== i) {
                    this.column[t] = s ? r : Z,
                    this.filled[t] = s ? NaN : i;
                    for (let o = 0; o < e.tyres; o++) {
                        let a = (256 * o + t) * 4
                          , n = e.offset(r, o);
                        this.data[a] = s ? e.points[n] : 0,
                        this.data[a + 1] = s ? e.points[n + 1] : 0,
                        this.data[a + 2] = s ? Math.min(1, e.points[n + 4]) : 0,
                        this.data[a + 3] = E(this.slide[this.at(s ? r : i, o)]),
                        this.texture.addUpdateRange(a, 4)
                    }
                    o = !0
                }
            }
            this.texture.updateRanges.length > 1024 && this.texture.clearUpdateRanges(),
            o && (this.texture.needsUpdate = !0)
        }
        slideAt(e, t) {
            let i = 32 * e
              , r = Math.floor(i);
            if (!(r >= this.first && r + 1 <= this.last))
                return NaN;
            let s = this.slide[this.at(r, t)];
            return s + (this.slide[this.at(r + 1, t)] - s) * (i - r)
        }
        step(e, t, i) {
            let {history: r} = this;
            for (let s = 0; s < r.tyres; s++) {
                let o = r.offset(e, s)
                  , a = r.offset(t, s)
                  , n = Math.max(r.points[o + 4], r.points[a + 4]) >= .02 ? Math.hypot(r.points[a] - r.points[o], r.points[a + 1] - r.points[o + 1]) : 0;
                this.slide[this.at(t, s)] = this.slide[this.at(e, s)] + i * n
            }
        }
        at(e, t) {
            return (e % 256 + 256) % 256 * this.history.tyres + t
        }
        dispose() {
            this.texture.dispose()
        }
    }
    function J({traffic: e, states: o, clock: a, quality: n}) {
        let l = Math.ceil(48.400000000000006 / _[n])
          , f = _[n]
          , u = (0,
        i.useMemo)( () => {
            let t = new w(e,2048,2044)
              , i = new X(t)
              , r = (0,
            g.pullUnderReversedDepth)(new s.ShaderMaterial({
                transparent: !0,
                depthWrite: !1,
                fog: !0,
                polygonOffset: !0,
                polygonOffsetFactor: 0,
                polygonOffsetUnits: -192,
                uniforms: s.UniformsUtils.merge([c.UniformsLib.fog, {
                    clock: {
                        value: 0
                    }
                }]),
                defines: {
                    RING: "64.000000",
                    LEAD: "0.093750",
                    FADE: "60.0"
                },
                vertexShader: `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      attribute vec4 mark;
      uniform float clock;
      varying float vAge;
      varying float vStrength;
      varying vec2 vUv;
      #include <fog_pars_vertex>
      void main() {
        // Ring time on both sides: every point in the window ages within (-LEAD, RING - LEAD).
        vAge = mod(clock - mark.z + LEAD, RING) - LEAD;
        vUv = mark.xy; vStrength = mark.w;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <logdepthbuf_vertex>
        #include <fog_vertex>
      }`,
                fragmentShader: `
      #include <logdepthbuf_pars_fragment>
      varying float vAge;
      varying float vStrength;
      varying vec2 vUv;
      #include <fog_pars_fragment>
      void main() {
        #include <logdepthbuf_fragment>
${T}        // The newest quad reaches just past the tyre: cut it where the tyre is now.
        float freshness = (1.0 - smoothstep(12.0, FADE, vAge)) * step(0.0, vAge);
${I}      }`
            }), k)
              , o = new s.Mesh(i.geometry,r);
            o.frustumCulled = !1,
            o.renderOrder = g.GROUND_DECAL_RENDER_ORDER,
            o.name = "Drift tire marks";
            let a = new Y(t);
            return {
                history: t,
                marks: i,
                tire: r,
                markMesh: o,
                table: a
            }
        }
        , [e]);
        (0,
        i.useEffect)( () => () => {
            u.marks.dispose(),
            u.tire.dispose(),
            u.table.dispose()
        }
        , [u]);
        let h = (0,
        i.useSyncExternalStore)(V, B, B)
          , d = (0,
        i.useContext)(q.SceneAssetReadiness);
        (0,
        i.useLayoutEffect)( () => {
            if (!d || h)
                return;
            let e = Symbol("drift smoke sprites");
            return d.add(e),
            () => {
                d.delete(e)
            }
        }
        , [d, h]);
        let p = (0,
        i.useMemo)( () => {
            let t = e.cars.length
              , i = K(W(), u.table.texture, t, l, f, 256)
              , r = new s.PlaneGeometry(1,1)
              , o = new s.InstancedBufferGeometry;
            o.index = r.index,
            o.setAttribute("position", r.getAttribute("position")),
            o.setAttribute("uv", r.getAttribute("uv"));
            let a = t * l * 2;
            o.setAttribute("puff", new s.InstancedBufferAttribute(Float32Array.from({
                length: a
            }, (e, t) => t),1)),
            o.instanceCount = a;
            let n = new s.Mesh(o,i);
            return n.frustumCulled = !1,
            n.renderOrder = 2,
            n.name = "Drift smoke",
            {
                mesh: n,
                material: i,
                geometry: o
            }
        }
        , [e, u, l, f]);
        (0,
        i.useEffect)( () => () => {
            p.material.dispose(),
            p.geometry.dispose()
        }
        , [p]),
        (0,
        i.useEffect)( () => {
            p.material.uniforms.fadeRange.value.set(...F[n])
        }
        , [n, p]);
        let m = (0,
        i.useMemo)( () => R(), [])
          , v = (0,
        i.useMemo)( () => ({
            light: null,
            world: new s.Vector3
        }), [])
          , y = (0,
        i.useMemo)( () => new s.Vector3, [])
          , x = 2.2 * (e.maxSpeed + 1) + 9;
        return (0,
        r.useFrame)( ({camera: e, scene: t}) => {
            let i, r;
            v.light?.parent || (v.light = null,
            t.traverse(e => {
                !v.light && e instanceof s.DirectionalLight && e.intensity > 0 && (v.light = e)
            }
            )),
            v.light ? v.world.copy(v.light.position).sub(v.light.target.position) : v.world.set(-.6, .8, .5),
            p.material.uniforms.sunView.value.copy(v.world).transformDirection(e.matrixWorldInverse);
            let l = a.current
              , {history: d, marks: c, table: g, tire: w} = u;
            d.update(l, 128),
            c.sync(),
            g.sync(),
            w.uniforms.clock.value = (l % 64 + 64) % 64;
            let {uniforms: b} = p.material
              , F = b.slides.value
              , M = b.shown.value
              , A = b.order.value
              , R = {
                first: ((r = Math.floor(i = 32 * l) - 254 + 1) % 256 + 256) % 256,
                now: i - r
            };
            b.slideClock.value.set(R.first, R.now),
            p.mesh.updateWorldMatrix(!0, !1),
            e.getWorldPosition(y),
            p.mesh.worldToLocal(y);
            let _ = !1;
            o.forEach( (t, i) => {
                let r = S(e, p.mesh.matrixWorld, t, n, m, x);
                for (let e = 0; e < 2; e++) {
                    let t = g.slideAt(l, 2 * i + e);
                    if (Number.isNaN(t)) {
                        r = !1;
                        continue
                    }
                    let s = function(e, t) {
                        let i = Math.floor(e / t);
                        return {
                            wrapped: E(e),
                            lead: e - i * t,
                            number: (i % 4096 + 4096) % 4096
                        }
                    }(t, f);
                    F[2 * i + e].set(s.wrapped, s.lead, s.number, 0)
                }
                M[i] = +!!r,
                _ ||= r;
                let s = t.yaw - t.slip;
                A[i] = +((y.x - t.x) * Math.sin(s) + (y.z - t.z) * Math.cos(s) > 0)
            }
            ),
            p.mesh.visible = _ && h
        }
        , -2.3),
        (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)("primitive", {
                object: u.markMesh
            }), (0,
            t.jsx)("primitive", {
                object: p.mesh
            })]
        })
    }
    function Q({track: e, clock: l, quality: f, shadows: h, leadColor: c, audible: p}) {
        let {traffic: m} = e
          , g = (0,
        u.useSimStore)(e => "reduced" === e.settings.graphics.trafficDetail)
          , v = (0,
        i.useRef)(null)
          , y = (0,
        i.useMemo)( () => m.cars.map( (e, t) => ({
            pose: (0,
            a.createDriftCarState)(),
            color: 0 === t && c ? c : e.color,
            livery: (0,
            n.driftLivery)(e.id),
            motion: void 0
        })), [m, c])
          , x = (0,
        i.useMemo)( () => y.map(e => e.pose), [y])
          , w = (0,
        i.useRef)([])
          , b = (0,
        i.useMemo)( () => ({
            car: new s.Vector3,
            listener: new s.Vector3
        }), []);
        return (0,
        i.useEffect)( () => () => {
            for (let e of w.current)
                e?.dispose();
            w.current = []
        }
        , [m]),
        (0,
        r.useFrame)( ({camera: e}, t) => {
            m.sample(l.current, x),
            y.forEach(e => {
                let t = e.pose;
                if (void 0 !== t.height) {
                    let i = e.motion ??= {
                        height: 0,
                        roll: 0,
                        pitch: 0,
                        steer: 0,
                        spins: t.spins,
                        rates: t.spinRates
                    };
                    i.height = t.height,
                    i.roll = t.roll,
                    i.pitch = t.pitch,
                    i.steer = t.steer
                }
            }
            );
            let i = p ? (0,
            o.getDroneAudio)() : null;
            if (!i || !v.current)
                return;
            v.current.updateWorldMatrix(!0, !1),
            e.getWorldPosition(b.listener);
            let r = "racing" === m.kind;
            x.forEach( (e, s) => {
                let o = w.current[s] ??= i.createCarVoice(s, r);
                b.car.set(e.x, 0, e.z).applyMatrix4(v.current.matrixWorld);
                let a = b.car.distanceTo(b.listener)
                  , n = !!p?.current;
                r ? o.updateRacing(b.car, a, e, t, s, n) : o.update(b.car, a, e.slip, e.speed, e.clock, t, s, n)
            }
            )
        }
        , -2.4),
        (0,
        t.jsxs)("group", {
            ref: v,
            matrix: e.matrix,
            matrixAutoUpdate: !1,
            children: [(0,
            t.jsx)(d.DriftFleet, {
                cars: y,
                quality: g ? "low" : f,
                shadows: h && !g
            }), !g && ("classic-lap" === m.kind ? (0,
            t.jsx)(ee, {
                traffic: m,
                cars: y,
                clock: l,
                quality: f
            }) : (0,
            t.jsx)(J, {
                traffic: m,
                states: x,
                clock: l,
                quality: f
            }))]
        })
    }
    function ee({traffic: e, cars: i, clock: r, quality: s}) {
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(O, {
                cars: i,
                variations: e.variations,
                quality: s,
                circuit: e.circuit
            }), (0,
            t.jsx)(U, {
                elapsed: r,
                offsets: e.offsets,
                variations: e.variations,
                circuit: e.circuit
            })]
        })
    }
    e.s(["DriftHistoryEffects", 0, J], 94297),
    e.s(["CinematicDriftFleet", 0, function({quality: e, shadows: s}) {
        let o = (0,
        i.useRef)(0)
          , a = (0,
        i.useContext)(h.TrackWorldContext)
          , n = (0,
        i.useMemo)( () => (0,
        f.trackInstances)(a), [a]);
        return (0,
        r.useFrame)( (e, t) => {
            o.current += Math.min(t, .1)
        }
        , -2.5),
        (0,
        t.jsx)("group", {
            children: n.map(i => (0,
            t.jsx)(Q, {
                track: i,
                clock: o,
                quality: e,
                shadows: s
            }, i.id))
        })
    }
    , "ClockedDriftFleet", 0, function({clock: e, quality: r, shadows: s, leadColor: o, audible: a}) {
        let n = (0,
        i.useContext)(h.TrackWorldContext)
          , l = (0,
        i.useMemo)( () => (0,
        f.trackInstances)(n), [n]);
        return (0,
        t.jsx)("group", {
            children: l.map(i => (0,
            t.jsx)(Q, {
                track: i,
                clock: e,
                quality: r,
                shadows: s,
                leadColor: o,
                audible: a
            }, i.id))
        })
    }
    , "ReplayDriftFleet", 0, function({frames: e, time: s, quality: o, shadows: a}) {
        let n = (0,
        i.useRef)(null)
          , u = (0,
        i.useRef)(0)
          , d = (0,
        i.useRef)(0)
          , c = (0,
        i.useContext)(h.TrackWorldContext)
          , p = (0,
        i.useMemo)( () => (0,
        f.trackInstances)(c), [c])
          , m = (0,
        i.useMemo)( () => e.some(e => void 0 !== e.driftTime), [e]);
        return ((0,
        r.useFrame)( () => {
            if (!n.current)
                return;
            d.current = (0,
            l.findReplayIndex)(e, s.current, d.current);
            let t = (0,
            l.sampleReplayDriftTime)(e, s.current, d.current);
            n.current.visible = void 0 !== t,
            void 0 !== t && (u.current = t)
        }
        , -2.5),
        m) ? (0,
        t.jsx)("group", {
            ref: n,
            visible: !1,
            children: p.map(e => (0,
            t.jsx)(Q, {
                track: e,
                clock: u,
                quality: o,
                shadows: a
            }, e.id))
        }) : null
    }
    ], 702217)
}
]);
