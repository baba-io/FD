(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 638778, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(190072)
      , n = e.i(882902)
      , o = e.i(331536)
      , a = e.i(884316)
      , s = e.i(106258)
      , l = e.i(809886);
    let c = `
#include <common>
#include <logdepthbuf_pars_vertex>
varying vec2 vUv;
varying vec3 vWorld;
varying vec3 vNormal;
void main() {
  vUv = uv;
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  vNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #include <logdepthbuf_vertex>
}
`
      , u = `
#include <common>
#include <logdepthbuf_pars_fragment>
uniform sampler2D uMap;
uniform vec3 uColor;
uniform float uNear;
varying vec2 vUv;
varying vec3 vWorld;
varying vec3 vNormal;
void main() {
  #include <logdepthbuf_fragment>
  float grid = texture2D(uMap, vUv).r;
  vec3 toEye = cameraPosition - vWorld;
  float near = exp(-length(toEye) / uNear);
  // The wall's face seen edge on glows a little, so its plane reads from inside the arena.
  float facing = clamp(abs(dot(normalize(vNormal), normalize(toEye))), 0.0, 1.0);
  float edge = pow(1.0 - facing, 3.0);
  float alpha = grid * (0.10 + 0.62 * near) + 0.012 + 0.05 * near + edge * 0.06;
  vec3 color = mix(uColor, vec3(1.0), grid * near * 0.35);
  gl_FragColor = vec4(color, min(alpha, 0.8));
}
`;
    function d({bounds: e}) {
        let n = (0,
        r.useMemo)( () => {
            let e = new i.TextureLoader().load("/sim/textures/arena-wall.png");
            return e.wrapS = e.wrapT = i.RepeatWrapping,
            e.minFilter = i.LinearMipmapLinearFilter,
            e.colorSpace = i.NoColorSpace,
            e.anisotropy = 4,
            e
        }
        , []);
        (0,
        r.useEffect)( () => () => n.dispose(), [n]);
        let a = (0,
        r.useMemo)( () => {
            var e;
            return e = o.POI_IDENTITIES.tdm.emission,
            new i.ShaderMaterial({
                vertexShader: c,
                fragmentShader: u,
                uniforms: {
                    uMap: {
                        value: n
                    },
                    uColor: {
                        value: new i.Color(e)
                    },
                    uNear: {
                        value: 14
                    }
                },
                transparent: !0,
                depthWrite: !1,
                side: i.DoubleSide,
                toneMapped: !1
            })
        }
        , [n]);
        (0,
        r.useEffect)( () => () => a.dispose(), [a]);
        let s = (0,
        r.useMemo)( () => (function(e) {
            let[t,r,n] = e.size
              , o = t / 2
              , a = n / 2
              , s = []
              , l = []
              , c = []
              , u = []
              , d = (e, t, r, i) => {
                let n = s.length / 3
                  , o = [[0, 0], [r, 0], [r, i], [0, i]];
                e.forEach( (e, r) => {
                    s.push(...e),
                    l.push(...t),
                    c.push(o[r][0] / 6, o[r][1] / 6)
                }
                ),
                u.push(n, n + 1, n + 2, n, n + 2, n + 3)
            }
            ;
            d([[o, 0, -a], [o, 0, a], [o, r, a], [o, r, -a]], [1, 0, 0], n, r),
            d([[-o, 0, a], [-o, 0, -a], [-o, r, -a], [-o, r, a]], [-1, 0, 0], n, r),
            d([[o, 0, a], [-o, 0, a], [-o, r, a], [o, r, a]], [0, 0, 1], t, r),
            d([[-o, 0, -a], [o, 0, -a], [o, r, -a], [-o, r, -a]], [0, 0, -1], t, r),
            d([[-o, r, -a], [o, r, -a], [o, r, a], [-o, r, a]], [0, 1, 0], t, n);
            let h = new i.BufferGeometry;
            return h.setAttribute("position", new i.BufferAttribute(new Float32Array(s),3)),
            h.setAttribute("normal", new i.BufferAttribute(new Float32Array(l),3)),
            h.setAttribute("uv", new i.BufferAttribute(new Float32Array(c),2)),
            h.setIndex(u),
            h
        }
        )(e), [e]);
        return (0,
        r.useEffect)( () => () => s.dispose(), [s]),
        (0,
        t.jsx)("mesh", {
            geometry: s,
            material: a,
            position: e.position,
            rotation: [0, e.yaw, 0],
            renderOrder: 2,
            frustumCulled: !1
        })
    }
    e.s(["ArenaWallMesh", 0, d, "ArenaWalls", 0, function() {
        let e = (0,
        s.useSimStore)(l.activeMapId)
          , r = (0,
        a.usePracticeLaunch)(e => e.active)
          , i = (0,
        n.useMatchLaunch)(e => e.active)
          , o = r && r.arena.mapId === e ? r.arena.bounds : i && i.map === e && i.arena ? i.arena.bounds : null;
        return o ? (0,
        t.jsx)(d, {
            bounds: o
        }) : null
    }
    ])
}
, 420333, e => {
    "use strict";
    var t = e.i(271645)
      , r = e.i(94800)
      , i = e.i(190072)
      , n = e.i(579832)
      , o = e.i(584042)
      , a = e.i(13050)
      , s = e.i(931245)
      , l = e.i(573558)
      , c = e.i(907462)
      , u = e.i(247638)
      , d = e.i(349894)
      , h = e.i(663011);
    let m = new i.Vector3
      , p = new i.Vector3
      , f = new i.Vector3
      , g = new i.Vector3
      , v = new i.Vector3
      , y = new i.Vector3
      , w = new i.Vector3
      , b = new i.Vector3
      , x = new i.Vector3
      , S = new i.Vector3
      , M = new i.Vector3(0,1,0)
      , A = new i.Quaternion
      , E = new i.Quaternion
      , R = new i.Vector3
      , k = []
      , T = new Map;
    e.s(["DroneAudio", 0, function({enabled: e=!0, room: i="dry", ambience: P=null}) {
        let C = (0,
        t.useRef)(null)
          , j = (0,
        t.useRef)(!1)
          , O = (0,
        t.useRef)(d.combo.state.event)
          , I = (0,
        t.useRef)(d.combo.state.multiplier)
          , D = (0,
        t.useRef)(new o.WarpWatch);
        return (0,
        t.useEffect)( () => {
            let t = (0,
            n.getDroneAudio)();
            if (!t)
                return;
            t.installGestureResume(),
            (0,
            a.ensureAudioMix)();
            let r = t.claimScene();
            C.current = r,
            t.setRoom(r, i),
            t.setAmbience(r, P);
            let o = () => {
                !document.hidden && e && t.resume()
            }
            ;
            return document.addEventListener("visibilitychange", o),
            () => {
                document.removeEventListener("visibilitychange", o),
                t.releaseScene(r),
                C.current === r && (C.current = null)
            }
        }
        , [e, i, P]),
        (0,
        r.useFrame)( (t, r) => {
            let i = (0,
            n.getDroneAudio)();
            if (!i)
                return;
            e && !document.hidden && i.resume();
            let P = t.camera;
            P.updateMatrixWorld(),
            P.getWorldPosition(m),
            P.getWorldDirection(p),
            P.getWorldQuaternion(A),
            f.copy(M).applyQuaternion(A),
            g.set(u.live.position.x, u.live.position.y, u.live.position.z),
            i.setListener({
                x: m.x,
                y: m.y,
                z: m.z,
                forwardX: p.x,
                forwardY: p.y,
                forwardZ: p.z,
                upX: f.x,
                upY: f.y,
                upZ: f.z
            }),
            i.setSource({
                x: g.x,
                y: g.y,
                z: g.z
            });
            let L = m.distanceTo(g);
            i.setDistance(L);
            let _ = 1;
            if (j.current && r > 1e-4 && r < .1) {
                w.copy(m).sub(v).divideScalar(r),
                b.copy(g).sub(y).divideScalar(r),
                x.copy(g).sub(m);
                let e = x.length();
                if (e > .15) {
                    x.divideScalar(e);
                    let t = (b.x - w.x) * x.x + (b.y - w.y) * x.y + (b.z - w.z) * x.z;
                    _ = (0,
                    s.dopplerFactor)(t)
                }
            } else
                w.set(0, 0, 0);
            j.current = !0,
            v.copy(m),
            y.copy(g);
            let F = e && !document.hidden;
            C.current && i.setSceneGain(C.current, +!!F),
            (0,
            a.updateMixState)(h.timeWarp.scale);
            let V = d.combo.state
              , z = "active" === V.phase && V.multiplier > I.current;
            if (O.current !== V.event || z) {
                if (F && "idle" !== V.phase) {
                    let e = !!V.skill && d.CONTINUOUS_SKILLS.has(V.skill);
                    i.play("finished" === V.phase ? o.chainEnding.cue((0,
                    o.cueClock)()) : z ? (0,
                    o.multiplierCue)(I.current, V.multiplier) : e ? "combo.sustain" : "combo.skill", {
                        params: {
                            multiplier: V.multiplier
                        }
                    })
                }
                O.current = V.event,
                I.current = V.multiplier
            }
            D.current.update(h.timeWarp.scale) && F && i.play("time.resume", {
                params: {
                    duration: h.TIME_WARP_DURATION
                }
            }),
            R.set(0, 1, 0).applyQuaternion(E.set(u.live.rotation.x, u.live.rotation.y, u.live.rotation.z, u.live.rotation.w));
            let N = j.current ? b.dot(R) : 0;
            i.setMotors(u.live.motors, u.live.telemetry.armed, _ * Math.sqrt(h.timeWarp.scale), u.live.droneId, N),
            S.set(1, 0, 0).applyQuaternion(A);
            let G = b.dot(S) / Math.max(1, b.length());
            for (let e of (i.setAirspeed(u.live.telemetry.speed * h.timeWarp.scale, 1 / (1 + Math.max(0, L - 1) ** 2 / 16), G),
            k.length = 0,
            (0,
            l.lobbyDrones)(c.navigationRuntime.multiplayer?.current, performance.now(), k, T),
            l.ghostSounds.values()))
                k.push(e);
            i.others.update(k, {
                position: m,
                velocity: w
            }, F)
        }
        ),
        null
    }
    ])
}
, 799567, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(94800)
      , n = e.i(818686)
      , o = e.i(983040)
      , a = e.i(83724);
    e.s(["ReplayCrowd", 0, function({frames: e, time: s, quality: l, shadows: c=!1}) {
        let u = (0,
        r.useMemo)( () => e.filter(e => void 0 !== e.crowdRoutes), [e])
          , d = Math.max(0, ...u.map(e => e.crowdRoutes?.length ?? 0))
          , h = (0,
        r.useMemo)( () => Array.from({
            length: d
        }, n.createPose), [d]);
        return (0,
        i.useFrame)( () => {
            let t = (0,
            o.findReplayIndex)(e, s.current, 0)
              , r = e[t]
              , i = e[t + 1] ?? r
              , a = [];
            for (let e of u) {
                if (e.t > s.current)
                    break;
                a = e.crowdRoutes ?? []
            }
            let l = (r?.crowdTime ?? 0) + ((i?.crowdTime ?? r?.crowdTime ?? 0) - (r?.crowdTime ?? 0)) * (0,
            o.replaySampleBlend)(e, s.current, t);
            for (let e = 0; e < d; e++)
                a[e] ? (0,
                n.sampleWalker)(a[e], l, h[e]) : h[e][0].makeScale(0, 0, 0)
        }
        , -3.1),
        d ? (0,
        t.jsx)(a.DummyBatch, {
            poses: h,
            shadows: c,
            lod: a.DUMMY_LOD[l]
        }) : null
    }
    ])
}
, 34226, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(94800)
      , n = e.i(106258)
      , o = e.i(723038)
      , a = e.i(818686)
      , s = e.i(979392)
      , l = e.i(83724)
      , c = e.i(166636);
    e.s(["WalkingCrowd", 0, function({count: e, quality: u, shadows: d}) {
        let h = (0,
        n.useSimStore)(e => "impactCinematic" === e.phase)
          , m = (0,
        r.useMemo)( () => Array.from({
            length: e
        }, a.createPose), [e])
          , p = (0,
        r.useMemo)( () => Array.from({
            length: e
        }, o.createBonePose), [e]);
        return (0,
        i.useFrame)( ({camera: t}) => {
            let r = t.matrixWorld.elements
              , i = r[12]
              , n = r[14];
            for (let t = 0; t < e; t++) {
                let e = s.crowdRuntime.routes[t];
                if (!e || Math.hypot(e.a[0] - i, e.a[2] - n) > 130) {
                    m[t][0].makeScale(0, 0, 0);
                    continue
                }
                (0,
                a.sampleWalker)(e, s.crowdRuntime.time, m[t], p[t])
            }
        }
        , -4),
        (0,
        t.jsx)(l.DummyBatch, {
            poses: m,
            bones: p,
            visible: !h,
            shadows: d && (0,
            c.atLeast)(u, "high"),
            lod: l.DUMMY_LOD[u]
        })
    }
    ])
}
, 932931, e => {
    "use strict";
    let t;
    var r = e.i(843476)
      , i = e.i(271645)
      , n = e.i(287558)
      , o = e.i(504786)
      , a = e.i(848546)
      , s = e.i(88014);
    function l({children: e}) {
        let t = (0,
        a.useThree)(e => e.gl.domElement.parentElement)
          , r = (0,
        i.useRef)(null);
        return (0,
        i.useLayoutEffect)( () => {
            if (!t)
                return;
            let e = document.createElement("div");
            e.style.cssText = "position:absolute;inset:0;z-index:60",
            t.appendChild(e);
            let i = r.current = (0,
            s.createRoot)(e);
            return () => {
                r.current = null,
                i.unmount(),
                e.remove()
            }
        }
        , [t]),
        (0,
        i.useLayoutEffect)( () => {
            r.current?.render(e)
        }
        ),
        null
    }
    e.i(573798);
    var c = e.i(498475);
    let u = [1e3, 3e3, 9e3];
    async function d(e=u, t=e => new Promise(t => setTimeout(t, e))) {
        for (let r = 0; ; r++)
            try {
                return await (0,
                n.loadDriftParkRace)(),
                !0
            } catch (i) {
                if (r >= e.length)
                    return console.error("[sim] Drift Park's race failed to load", i),
                    !1;
                await t(e[r])
            }
    }
    function h() {
        return (0,
        r.jsxs)("div", {
            role: "alert",
            className: "fdk fdk-on-ink pointer-events-auto grid size-full place-content-center justify-items-center gap-4 bg-(--fdk-ink-dim) p-8 text-center",
            children: [(0,
            r.jsx)("p", {
                className: "font-(family-name:--fdk-font-display) text-2xl uppercase",
                children: "Drift Park didn’t finish loading."
            }), (0,
            r.jsx)("p", {
                className: "max-w-sm",
                children: "Check your connection, then reload the page."
            }), (0,
            r.jsx)(c.Button, {
                tone: "primary",
                sound: "confirm",
                onClick: () => window.location.reload(),
                children: "Reload"
            })]
        })
    }
    e.s(["DriftParkRaceGate", 0, function({world: e, children: a}) {
        return !(0,
        i.useMemo)( () => (0,
        o.hasDriftParkTrack)(e), [e]) || (0,
        n.driftParkRaceLoaded)() || (0,
        i.use)(t ??= d()) ? a : (0,
        r.jsx)(l, {
            children: (0,
            r.jsx)(h, {})
        })
    }
    , "RaceLoadFailed", 0, h], 932931)
}
, 871234, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(894969)
      , i = e.i(94800)
      , n = e.i(271645)
      , o = e.i(190072)
      , a = e.i(790504)
      , s = e.i(206062)
      , l = e.i(618151)
      , c = e.i(252497)
      , u = e.i(106258)
      , d = e.i(814022)
      , h = e.i(353198)
      , m = e.i(702329)
      , p = e.i(11871)
      , f = e.i(353937)
      , g = e.i(625581);
    e.s(["DroneModel", 0, function({castShadow: e, fpv: v=!1, ghost: y=!1, ghostColor: w=a.TIME_ATTACK_GHOST_COLOR, ghostFade: b, drive: x=null, archetype: S, skin: M, skinOverride: A}) {
        (0,
        r.useInventory)(e => e.items);
        let E = (0,
        u.useSimStore)(e => e.settings)
          , R = (0,
        u.useSimStore)(d.flownDrone)
          , k = S ?? R
          , T = M ?? (0,
        f.equippedDroneSkin)(E.drone.skins, k)
          , P = p.DRONE_PROFILES[k]
          , C = A ?? (0,
        h.droneSkin)(k, T)
          , j = (0,
        a.ghostStyle)(w)
          , O = y && !v ? (0,
        g.flightGeometry)(k, T) : null
          , I = (0,
        n.useRef)(null)
          , D = (0,
        n.useRef)(null);
        return ((0,
        i.useFrame)( () => {
            let e = b?.current ?? 1;
            I.current && (I.current.opacity = j.bodyOpacity * e),
            D.current && (D.current.opacity = j.haloOpacity * e)
        }
        ),
        v || y) ? (0,
        t.jsxs)("group", {
            children: [O && (0,
            t.jsxs)("mesh", {
                children: [(0,
                t.jsx)("primitive", {
                    object: O,
                    attach: "geometry"
                }), (0,
                t.jsx)("meshBasicMaterial", {
                    ref: I,
                    color: j.body,
                    transparent: !0,
                    opacity: j.bodyOpacity,
                    depthWrite: !1,
                    toneMapped: !1,
                    side: o.DoubleSide
                })]
            }), y && (0,
            t.jsxs)("mesh", {
                children: [(0,
                t.jsx)("sphereGeometry", {
                    args: [j.haloRadius * P.propRadius / .0635, 12, 8]
                }), (0,
                t.jsx)("meshBasicMaterial", {
                    ref: D,
                    color: j.body,
                    transparent: !0,
                    opacity: j.haloOpacity,
                    depthWrite: !1,
                    toneMapped: !1,
                    blending: o.AdditiveBlending
                })]
            }), v && !y && (0,
            t.jsx)(m.FpvAirframe, {
                archetype: k,
                skin: T
            }), [[1, -1], [-1, -1], [1, 1], [-1, 1]].map( ([e,r], i) => (0,
            t.jsx)("group", {
                position: [e * P.reachX, P.propY, r * P.reachZ],
                scale: P.propRadius / l.PROP_RADIUS,
                children: (0,
                t.jsx)(s.Propeller, {
                    motorIndex: i,
                    spinSign: c.PROP_SPIN_SIGNS[i],
                    fpv: v,
                    drive: x,
                    bladeCount: P.blades,
                    color: C.props,
                    material: C.propMaterial,
                    ghostColor: y ? j.body : void 0,
                    ghostFade: y ? b : void 0
                })
            }, i))]
        }) : (0,
        t.jsx)(m.DroneAirframe, {
            archetype: k,
            skin: T,
            skinOverride: A,
            castShadow: e,
            drive: x
        })
    }
    ])
}
, 297383, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(11871)
      , i = e.i(271645)
      , n = e.i(382897)
      , o = e.i(94800)
      , a = e.i(848546)
      , s = e.i(190072)
      , l = e.i(113640)
      , c = e.i(807375)
      , u = e.i(720996)
      , d = e.i(106258)
      , h = e.i(809886)
      , m = e.i(811113);
    class p {
        positions = new Float32Array(864);
        geometry = new s.BufferGeometry;
        material = new s.ShaderMaterial({
            transparent: !0,
            depthTest: !1,
            depthWrite: !1,
            toneMapped: !1,
            uniforms: {
                strength: {
                    value: 0
                }
            },
            vertexShader: `varying vec2 screen; varying float opacity;
      attribute float alpha;
      void main() { screen = position.xy; opacity = alpha; gl_Position = vec4(position, 1.); }`,
            fragmentShader: `varying vec2 screen; varying float opacity; uniform float strength;
      void main() {
        // Keep the central flight corridor completely clear, including during turns.
        float edge = smoothstep(.52, .85, length(screen));
        gl_FragColor = vec4(.91, .94, .86, opacity * strength * edge);
      }`
        });
        scene = new s.Scene;
        camera = new s.OrthographicCamera;
        constructor() {
            const e = new Float32Array(288)
              , t = [];
            for (let r = 0; r < 16; r++)
                for (let i = 0; i <= 8; i++) {
                    const n = (9 * r + i) * 2;
                    e[n] = e[n + 1] = .72 * Math.sin(i / 8 * Math.PI),
                    i < 8 && t.push(n, n + 2, n + 1, n + 1, n + 2, n + 3)
                }
            this.geometry.setAttribute("position", new s.BufferAttribute(this.positions,3).setUsage(s.DynamicDrawUsage)),
            this.geometry.setAttribute("alpha", new s.BufferAttribute(e,1)),
            this.geometry.setIndex(t);
            const r = new s.Mesh(this.geometry,this.material);
            r.frustumCulled = !1,
            this.scene.add(r)
        }
        render(e, t, r, i, n) {
            if (r < .002)
                return;
            let o = e.domElement.width / Math.max(1, e.domElement.height);
            for (let e = 0; e < 16; e++) {
                let r = 43758.5453 * Math.sin(127.1 * e + 3.7) % 1
                  , a = (t * (.65 + .35 * Math.abs(r)) + .618 * e) % 1
                  , s = 2.39996 * e + .3 * r
                  , l = Math.cos(s)
                  , c = Math.sin(s)
                  , u = a < .72 ? Math.sin(a / .72 * Math.PI) : 0
                  , d = .73 + .65 * a
                  , h = .09 + .19 * Math.abs(r);
                for (let t = 0; t <= 8; t++) {
                    let a = t / 8
                      , s = d + a * h
                      , m = .014 * Math.sin(a * Math.PI) * r
                      , p = .0045 * Math.sin(a * Math.PI) * u;
                    for (let r = 0; r < 2; r++) {
                        let a = m + (r ? p : -p)
                          , u = ((9 * e + t) * 2 + r) * 3;
                        this.positions[u] = i + l * s - c * a / o,
                        this.positions[u + 1] = n + c * s + l * a,
                        this.positions[u + 2] = 0
                    }
                }
            }
            this.geometry.attributes.position.needsUpdate = !0,
            this.material.uniforms.strength.value = r;
            let a = e.autoClear;
            e.autoClear = !1,
            e.render(this.scene, this.camera),
            e.autoClear = a
        }
        dispose() {
            this.geometry.dispose(),
            this.material.dispose()
        }
    }
    var f = e.i(247638)
      , g = e.i(252497)
      , v = e.i(170341)
      , y = e.i(80630);
    let w = Math.PI / 180
      , b = g.GROUND_UPRIGHT_DOT;
    e.s(["FpvCamera", 0, function({archetype: e, fov: x, tiltDeg: S, shake: M, far: A}) {
        let E = e ? r.DRONE_PROFILES[e] : void 0
          , R = (0,
        i.useMemo)( () => new l.CameraFeel, [])
          , k = (0,
        i.useMemo)( () => new p, [])
          , T = (0,
        i.useRef)(!1)
          , P = (0,
        i.useRef)(new s.Vector3)
          , C = (0,
        i.useRef)(new s.Vector3)
          , j = (0,
        i.useRef)(new s.Quaternion)
          , O = (0,
        i.useRef)(!1)
          , I = (0,
        i.useRef)(-1)
          , D = (0,
        i.useRef)({
            x: 0,
            y: 0,
            forward: 0,
            strength: 0
        })
          , L = (0,
        i.useRef)(-1 / 0)
          , _ = (0,
        i.useRef)(f.live.hitJolt.id)
          , F = (0,
        i.useRef)(new s.Vector3);
        (0,
        i.useEffect)( () => () => k.dispose(), [k]);
        let V = (0,
        i.useRef)(null)
          , z = (0,
        i.useRef)(null)
          , N = (0,
        a.useThree)(e => e.size)
          , G = (0,
        i.useRef)(new s.Quaternion)
          , B = (0,
        i.useRef)(new s.Quaternion)
          , W = (0,
        i.useRef)(new s.Vector3);
        (0,
        i.useEffect)( () => {
            let e = z.current;
            e && e.layers.set(g.FPV_PROP_LAYER)
        }
        , []),
        (0,
        i.useEffect)( () => {
            let e = z.current;
            e && (e.fov = x,
            e.aspect = N.width / Math.max(1, N.height),
            e.updateProjectionMatrix())
        }
        , [x, N.width, N.height]),
        (0,
        o.useFrame)( ({camera: e}, t) => {
            let r = V.current;
            if (!r)
                return;
            let i = d.useSimStore.getState()
              , n = (0,
            h.isPhasePaused)(i.phase) || i.settingsOpen || i.calibrating || i.adminOpen || i.profileOpen || document.hidden
              , o = I.current !== i.respawnToken || t > .1
              , a = (0,
            u.motionReduced)();
            T.current = i.settings.graphics.motionBlur && !n && !o && !a && !f.live.grounded,
            I.current = i.respawnToken;
            let s = n || o || a
              , m = f.live.hitJolt
              , p = null;
            if (m.id !== _.current && !s) {
                let t = m.from ? F.current.set(m.from[0], m.from[1], m.from[2]).applyQuaternion(e.getWorldQuaternion(j.current).invert()) : null;
                p = (0,
                l.hitJolt)(t ? [t.x, t.y, t.z] : null, m.weight)
            }
            _.current = m.id;
            let g = !f.live.grounded
              , v = (f.live.motors[0] + f.live.motors[1] + f.live.motors[2] + f.live.motors[3]) / 4
              , y = c.combatHud.bolts.at(-1)
              , S = y && y.at !== L.current && performance.now() - y.at < 100 ? y.id % 2 : null;
            if (L.current = y?.at ?? -1 / 0,
            (0,
            l.feelFrame)(R, {
                still: s,
                jolt: p,
                fire: S,
                dt: t,
                speed: f.live.telemetry.speed,
                motor: v,
                airborne: g,
                impact: f.live.impactShake,
                shake: M
            }),
            s)
                f.live.impactShake = 0,
                O.current = !1,
                D.current.strength = 0;
            else {
                f.live.impactShake = Math.max(0, f.live.impactShake - 3.2 * t);
                let r = C.current;
                if (r.set(f.live.position.x, f.live.position.y, f.live.position.z),
                O.current && t > 0) {
                    r.sub(P.current).divideScalar(t),
                    e.getWorldQuaternion(j.current),
                    r.applyQuaternion(j.current.invert());
                    let i = Math.max(0, -r.z) / Math.max(1, r.length())
                      , n = 1 - Math.exp(-t / .15)
                      , o = Math.tan(x * w / 2)
                      , a = Math.max(1, -r.z) * o
                      , s = N.width / Math.max(1, N.height)
                      , l = Math.max(-.25, Math.min(.25, r.x / a / s))
                      , c = Math.max(-.25, Math.min(.25, r.y / a));
                    D.current.x += (l - D.current.x) * n,
                    D.current.y += (c - D.current.y) * n,
                    D.current.forward += (i * i - D.current.forward) * n
                } else
                    D.current.x = D.current.y = D.current.forward = 0;
                P.current.set(f.live.position.x, f.live.position.y, f.live.position.z),
                O.current = !0,
                D.current.strength = g ? R.wind * i.settings.camera.speedLines * D.current.forward : 0
            }
            let A = 0
              , k = 0
              , H = 0;
            if (f.live.grounded && f.live.upDot < b) {
                let e = Math.min(1, (b - f.live.upDot) / (b + 1)) * (E ? .3 * E.cameraGuard : .06);
                G.current.set(f.live.rotation.x, f.live.rotation.y, f.live.rotation.z, f.live.rotation.w),
                B.current.copy(G.current).invert(),
                W.current.set(0, 1, 0).applyQuaternion(B.current).multiplyScalar(e),
                A = W.current.x,
                k = W.current.y,
                H = W.current.z
            }
            for (let t of [e, z.current])
                t && t.fov !== x * (1 + R.fovPunch) && (t.fov = x * (1 + R.fovPunch),
                t.updateProjectionMatrix());
            r.position.set(A, k, H),
            r.rotation.set(R.pitch, R.yaw, R.roll)
        }
        , -20);
        let H = (0,
        d.useSimStore)(e => (0,
        m.lensStrength)(e.settings))
          , U = (0,
        i.useRef)(H);
        U.current = H;
        let Y = (0,
        i.useMemo)( () => ({
            lens: () => U.current,
            overlay: (e, t) => {
                let r = z.current;
                r && function(e, t, r) {
                    let i = e.autoClear
                      , n = e.shadowMap.autoUpdate
                      , o = t.background;
                    e.autoClear = !1,
                    e.shadowMap.autoUpdate = !1,
                    t.background = null;
                    try {
                        e.clearDepth(),
                        (0,
                        y.prepareCamera)(e, r),
                        e.render(t, r)
                    } finally {
                        t.background = o,
                        e.shadowMap.autoUpdate = n,
                        e.autoClear = i
                    }
                }(e, t, r)
            }
            ,
            afterBlit: e => k.render(e, R.time, D.current.strength, D.current.x, D.current.y),
            motionBlur: () => T.current
        }), [k, R]);
        (0,
        v.useFrameHooks)(Y);
        let q = S * w;
        return (0,
        t.jsx)("group", {
            position: E?.camera ?? g.FPV_CAMERA_MOUNT_OFFSET,
            children: (0,
            t.jsxs)("group", {
                ref: V,
                children: [(0,
                t.jsx)(n.PerspectiveCamera, {
                    makeDefault: !0,
                    fov: x,
                    near: e ? (0,
                    r.droneCameraNear)(e, x, N.width / Math.max(1, N.height)) : .05,
                    far: A,
                    rotation: [q, 0, 0]
                }), (0,
                t.jsx)("perspectiveCamera", {
                    ref: z,
                    fov: x,
                    near: .002,
                    far: .5,
                    rotation: [q, 0, 0]
                })]
            })
        })
    }
    ], 297383)
}
, 699915, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(94800)
      , n = e.i(190072)
      , o = e.i(478093)
      , a = e.i(790504)
      , s = e.i(983040)
      , l = e.i(106258)
      , c = e.i(573558)
      , u = e.i(663011)
      , d = e.i(11871)
      , h = e.i(702329)
      , m = e.i(871234)
      , p = e.i(277885);
    let f = new n.Vector3
      , g = new n.Vector3
      , v = new n.Quaternion
      , y = new n.Quaternion
      , w = new n.Vector3
      , b = new n.Vector3;
    function x(e, t, r, i, n, o) {
        if (0 === t.length)
            return;
        let a = (0,
        s.findReplayIndex)(t, r, i.current);
        i.current = a;
        let l = t[a]
          , c = t[a + 1] ?? l;
        if (!l)
            return;
        let u = (0,
        s.replaySampleBlend)(t, r, a);
        f.set(...l.position),
        g.set(...c.position),
        f.lerp(g, u),
        v.set(...l.rotation),
        y.set(...c.rotation),
        v.slerp(y, u),
        e.position.copy(f),
        e.quaternion.copy(v);
        let d = (0,
        s.sampleReplaySticks)(t, r, a)
          , h = d ? Math.max(o, d.throttle) : o > 0 ? o : .05;
        n.motors = (0,
        s.resolveReplayMotors)(t, r, a, h),
        n.armed = !0
    }
    e.s(["GhostDrone", 0, function({frames: e, duration: n, color: s, clock: f, onFinished: g, presenceRef: v, releasing: y=!1, skinOverride: S, solid: M=!1, sound: A}) {
        let E = (0,
        r.useRef)(null)
          , R = (0,
        r.useRef)(1)
          , [k,T] = (0,
        r.useState)( () => ({
            id: e[0]?.droneId ?? "freestyle",
            skin: e[0]?.droneSkin ?? "factory"
        }))
          , P = (0,
        r.useRef)(+!v)
          , C = (0,
        r.useRef)(0)
          , j = (0,
        r.useRef)(!1)
          , O = (0,
        r.useRef)(f)
          , I = (0,
        r.useRef)(g);
        O.current = f,
        I.current = g;
        let D = (0,
        r.useRef)({
            motors: [0, 0, 0, 0],
            armed: !0
        })
          , L = (0,
        l.useSimStore)(e => e.phase)
          , {airMode: _, idleThrottle: F} = (0,
        d.droneQuad)(k.id)
          , V = _ ? F : 0
          , z = (0,
        r.useId)();
        return (0,
        r.useEffect)( () => () => {
            c.ghostSounds.delete(z)
        }
        , [z, A]),
        (0,
        r.useLayoutEffect)( () => {
            let t = E.current;
            t && (C.current = 0,
            j.current = !1,
            x(t, e, (0,
            o.resolveGhostPlaybackTime)(n, O.current), C, D.current, V))
        }
        , [e, n, V]),
        (0,
        i.useFrame)(t => {
            let r = E.current;
            if (!r)
                return;
            let i = (0,
            o.resolveGhostPlaybackTime)(n, O.current);
            x(r, e, i, C, D.current, V);
            let s = e[C.current]
              , l = s?.droneId ?? "freestyle"
              , d = s?.droneSkin ?? "factory";
            (k.id !== l || k.skin !== d) && T({
                id: l,
                skin: d
            }),
            t.camera.getWorldPosition(w);
            let h = (0,
            a.ghostProximityOpacity)(w.distanceTo(r.position));
            R.current = h,
            P.current = h * (v?.current ?? 1),
            M && (r.visible = P.current > 0),
            A && function(e, t, r, i, n, o, a, s, l) {
                let d = (0,
                c.ghostSound)(e, t);
                d.craft = o,
                d.position.x = r.position.x,
                d.position.y = r.position.y,
                d.position.z = r.position.z;
                let h = i[n]
                  , m = i[n + 1]
                  , p = h && m ? m.t - h.t : 0;
                p > 0 && h.segment === m.segment ? (d.velocity.x = (m.position[0] - h.position[0]) / p,
                d.velocity.y = (m.position[1] - h.position[1]) / p,
                d.velocity.z = (m.position[2] - h.position[2]) / p) : d.velocity.x = d.velocity.y = d.velocity.z = 0,
                b.set(0, 1, 0).applyQuaternion(r.quaternion),
                d.up.x = b.x,
                d.up.y = b.y,
                d.up.z = b.z;
                for (let e = 0; e < 4; e++)
                    d.motors[e] = a.motors[e];
                d.armed = s && a.armed,
                d.presence = l,
                d.pitch = Math.sqrt(u.timeWarp.scale)
            }(z, A, r, e, C.current, l, D.current, n <= 0 || i < n, v?.current ?? 1),
            n > 0 && i >= n && !j.current && I.current && (j.current = !0,
            I.current())
        }
        , -1),
        (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)("group", {
                ref: E,
                children: M ? (0,
                t.jsx)(h.DroneAirframe, {
                    archetype: k.id,
                    skin: k.skin,
                    skinOverride: S,
                    castShadow: !1,
                    drive: D.current
                }) : (0,
                t.jsx)(m.DroneModel, {
                    archetype: k.id,
                    skin: k.skin,
                    skinOverride: S,
                    castShadow: !1,
                    ghost: !0,
                    ghostColor: s,
                    ghostFade: P,
                    drive: D.current
                })
            }), (0,
            t.jsx)(p.GhostTrail, {
                target: E,
                color: s,
                coreColor: M ? s : void 0,
                look: M ? a.SOLID_GHOST_TRAIL_LOOK : void 0,
                fadeRef: R,
                advancing: "flying" === L,
                releasing: y
            })]
        })
    }
    ])
}
, 277885, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(94800)
      , n = e.i(190072)
      , o = e.i(790504);
    let a = new n.Vector3
      , s = new n.Vector3
      , l = new n.Vector3
      , c = new n.Vector3
      , u = new n.Vector3
      , d = new n.Vector3(0,1,0)
      , h = `
#include <common>
#include <logdepthbuf_pars_vertex>
attribute float side;
attribute float age;
varying float vSide;
varying float vAge;
void main() {
  vSide = side;
  vAge = age;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #include <logdepthbuf_vertex>
}
`
      , m = `
#include <common>
#include <logdepthbuf_pars_fragment>
uniform vec3 uCore;
uniform vec3 uHalo;
uniform float uCoreGain;
uniform float uHaloGain;
uniform float uFade;
uniform float uCoreCover;
uniform float uHaloCover;
uniform float uCorePower;
varying float vSide;
varying float vAge;
void main() {
  // MSAA shades partly covered edge pixels at their centre, outside the
  // ribbon, where |side| passes 1; pow of a negative is NaN on Safari and D3D.
  float x = min(abs(vSide), 1.0);
  float core = pow(1.0 - x, uCorePower);
  float halo = pow(1.0 - x, 2.0);
  float fade = vAge * uFade;
  vec3 col = (core * uCore * uCoreGain + halo * uHalo * uHaloGain) * fade;
  // Premultiplied over: zero cover is plain additive glow.
  float cover = clamp((core * uCoreCover + halo * uHaloCover) * fade, 0.0, 1.0);
  gl_FragColor = vec4(col, cover);
  #include <logdepthbuf_fragment>
}
`;
    e.s(["GhostTrail", 0, function({target: e, color: p, fadeRef: f, advancing: g, releasing: v=!1, coreColor: y, look: w, resetDistance: b}) {
        let x = (0,
        r.useRef)([])
          , S = (0,
        r.useRef)({
            x: 0,
            y: 0,
            z: 0,
            t: 0
        })
          , M = (0,
        r.useRef)(0)
          , A = (0,
        r.useMemo)( () => (0,
        o.ghostStyle)(p), [p])
          , E = (0,
        r.useMemo)( () => (function(e) {
            let t = new n.BufferGeometry
              , r = 2 * e;
            t.setAttribute("position", new n.BufferAttribute(new Float32Array(3 * r),3)),
            t.setAttribute("age", new n.BufferAttribute(new Float32Array(r),1));
            let i = new Float32Array(r);
            for (let t = 0; t < e; t++)
                i[2 * t] = -1,
                i[2 * t + 1] = 1;
            t.setAttribute("side", new n.BufferAttribute(i,1));
            let o = new Uint32Array((e - 1) * 6)
              , a = 0;
            for (let t = 0; t < e - 1; t++) {
                let e = 2 * t;
                o[a++] = e,
                o[a++] = e + 1,
                o[a++] = e + 2,
                o[a++] = e + 1,
                o[a++] = e + 3,
                o[a++] = e + 2
            }
            return t.setIndex(new n.BufferAttribute(o,1)),
            t.setDrawRange(0, 0),
            t
        }
        )(o.GHOST_TRAIL_MAX_POINTS + 1), [])
          , R = (0,
        r.useMemo)( () => new n.ShaderMaterial({
            uniforms: {
                uCore: {
                    value: new n.Color(1,1,1)
                },
                uHalo: {
                    value: new n.Color(1,0,0)
                },
                uCoreGain: {
                    value: 1
                },
                uHaloGain: {
                    value: 1
                },
                uFade: {
                    value: 1
                },
                uCoreCover: {
                    value: 0
                },
                uHaloCover: {
                    value: 0
                },
                uCorePower: {
                    value: o.GHOST_TRAIL_CORE_POWER
                }
            },
            vertexShader: h,
            fragmentShader: m,
            transparent: !0,
            depthWrite: !1,
            depthTest: !0,
            toneMapped: !1,
            blending: n.CustomBlending,
            blendSrc: n.OneFactor,
            blendDst: n.OneMinusSrcAlphaFactor,
            side: n.FrontSide,
            fog: !1
        }), []);
        return (0,
        r.useEffect)( () => () => {
            E.dispose(),
            R.dispose()
        }
        , [E, R]),
        (0,
        i.useFrame)( (t, r) => {
            g && (M.current += r);
            let i = e.current
              , n = null;
            if (v)
                (0,
                o.pruneGhostTrailPoints)(x.current, M.current);
            else if (i) {
                i.getWorldPosition(a);
                let e = x.current.at(-1);
                b && e && Math.hypot(a.x - e.x, a.y - e.y, a.z - e.z) > b && (x.current.length = 0),
                (0,
                o.appendGhostTrailPoint)(x.current, a, M.current, !g),
                (n = S.current).x = a.x,
                n.y = a.y,
                n.z = a.z,
                n.t = M.current
            }
            R.uniforms.uCore.value.set(y ?? A.trailCore),
            R.uniforms.uHalo.value.set(A.trailHalo),
            R.uniforms.uCoreGain.value = w?.coreGain ?? A.trailCoreOpacity,
            R.uniforms.uHaloGain.value = w?.haloGain ?? A.trailHaloOpacity,
            R.uniforms.uCoreCover.value = w?.coreCover ?? 0,
            R.uniforms.uHaloCover.value = w?.haloCover ?? 0,
            R.uniforms.uCorePower.value = w?.corePower ?? o.GHOST_TRAIL_CORE_POWER,
            R.uniforms.uFade.value = f.current,
            function(e, t, r, i, n, a) {
                let h = t.at(-1)
                  , m = null !== r && void 0 !== h && Math.abs(r.x - h.x) + Math.abs(r.y - h.y) + Math.abs(r.z - h.z) > .001
                  , p = t.length + +!!m
                  , f = e => e < t.length ? t[e] : r;
                if (p < 2)
                    return e.setDrawRange(0, 0);
                let g = e.getAttribute("position")
                  , v = e.getAttribute("age");
                i.getWorldPosition(s);
                for (let e = 0; e < p; e++) {
                    let t = f(e)
                      , r = e > 0 ? f(e - 1) : t
                      , i = e < p - 1 ? f(e + 1) : t;
                    e < p - 1 ? l.set(i.x - t.x, i.y - t.y, i.z - t.z) : l.set(t.x - r.x, t.y - r.y, t.z - r.z),
                    c.set(s.x - t.x, s.y - t.y, s.z - t.z),
                    u.crossVectors(c, l),
                    1e-8 > u.lengthSq() && u.crossVectors(d, l),
                    1e-8 > u.lengthSq() && u.set(1, 0, 0);
                    let h = (0,
                    o.trailAgeAlpha)(a - t.t)
                      , m = n * (o.GHOST_TRAIL_TAIL_SCALE + (1 - o.GHOST_TRAIL_TAIL_SCALE) * h);
                    u.normalize().multiplyScalar(m);
                    let y = 2 * e;
                    g.setXYZ(y, t.x + u.x, t.y + u.y, t.z + u.z),
                    g.setXYZ(y + 1, t.x - u.x, t.y - u.y, t.z - u.z),
                    v.setX(y, h),
                    v.setX(y + 1, h)
                }
                g.needsUpdate = !0,
                v.needsUpdate = !0,
                e.setDrawRange(0, (p - 1) * 6)
            }(E, x.current, n, t.camera, o.GHOST_TRAIL_WIDTH / 2, M.current)
        }
        , 0),
        (0,
        t.jsx)("mesh", {
            geometry: E,
            material: R,
            frustumCulled: !1
        })
    }
    ])
}
, 674797, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(94800)
      , n = e.i(190072)
      , o = e.i(349884)
      , a = e.i(247638)
      , s = e.i(983040)
      , l = e.i(799567)
      , c = e.i(938848)
      , u = e.i(218384)
      , d = e.i(702217)
      , h = e.i(871234)
      , m = e.i(297383)
      , p = e.i(166636);
    let f = new n.Vector3
      , g = new n.Vector3
      , v = new n.Quaternion
      , y = new n.Quaternion;
    e.s(["ReplayDrone", 0, function({frames: e, duration: w, shadows: b, fpv: x, control: S, shake: M=.6, drawDistance: A=500, airMode: E=!0, idleThrottle: R=.05, quality: k="medium", timeAttack: T}) {
        let[P,C] = (0,
        r.useState)( () => (0,
        s.replayEquipment)(e[0]))
          , j = (0,
        r.useRef)(null)
          , O = (0,
        r.useRef)(0)
          , I = (0,
        r.useRef)(0)
          , D = (0,
        r.useRef)(-1)
          , L = S?.trimStart
          , _ = S?.trimEnd
          , F = S?.playing;
        return (0,
        r.useEffect)( () => {
            if (!S) {
                O.current = 0,
                I.current = 0,
                D.current = -1;
                return
            }
            O.current = S.trimStart,
            I.current = 0,
            D.current = S.seekToken,
            s.replayPlayback.trimStart = S.trimStart,
            s.replayPlayback.trimEnd = S.trimEnd,
            s.replayPlayback.playing = S.playing,
            s.replayPlayback.t = S.trimStart,
            s.replayPlayback.scrubbing = !1
        }
        , [e]),
        (0,
        r.useEffect)( () => {
            void 0 === L || void 0 === _ || void 0 === F || s.replayPlayback.scrubbing || (s.replayPlayback.trimStart = L,
            s.replayPlayback.trimEnd = _,
            s.replayPlayback.playing = F)
        }
        , [L, _, F]),
        (0,
        i.useFrame)( (t, r) => {
            let i, l, c, u = j.current;
            if (!u || 0 === e.length)
                return;
            if (S) {
                i = s.replayPlayback.trimStart,
                l = s.replayPlayback.trimEnd,
                c = s.replayPlayback.playing;
                let t = Math.max(i, l);
                s.replayPlayback.scrubbing ? (O.current = n.MathUtils.clamp(s.replayPlayback.t, i, t),
                I.current = (0,
                s.findReplayIndex)(e, O.current, I.current)) : S.seekToken !== D.current ? (D.current = S.seekToken,
                O.current = n.MathUtils.clamp(S.seekTo, i, t),
                I.current = 0) : c && (O.current += r,
                t > i && O.current > t && (O.current = i + (O.current - i) % (t - i),
                I.current = 0),
                O.current < i && (O.current = i)),
                s.replayPlayback.scrubbing || (s.replayPlayback.t = O.current)
            } else {
                i = 0,
                l = w > 0 ? w : e[e.length - 1]?.t ?? 0,
                c = !0;
                let t = Math.max(i, l);
                O.current += r,
                t > i && O.current > t && (O.current = i + (O.current - i) % (t - i),
                I.current = 0),
                s.replayPlayback.t = O.current
            }
            let d = O.current
              , h = (0,
            s.findReplayIndex)(e, d, I.current);
            I.current = h;
            let m = e[h]
              , p = (0,
            s.replayEquipment)(m);
            (P.id !== p.id || P.skin !== p.skin) && C(p),
            a.live.droneId = p.id,
            a.live.droneSkin = p.skin,
            a.live.voltageFactor = p.voltageFactor;
            let b = e[h + 1] ?? m
              , x = b.t - m.t
              , M = (0,
            s.replaySampleBlend)(e, d, h);
            f.set(...m.position),
            g.set(...b.position),
            f.lerp(g, M),
            v.set(...m.rotation),
            y.set(...b.rotation),
            v.slerp(y, M),
            u.position.copy(f),
            u.quaternion.copy(v),
            a.live.position.x = f.x,
            a.live.position.y = f.y,
            a.live.position.z = f.z,
            a.live.rotation.x = v.x,
            a.live.rotation.y = v.y,
            a.live.rotation.z = v.z,
            a.live.rotation.w = v.w,
            (0,
            o.writeAttitudeTelemetry)(a.live.telemetry, v.x, v.y, v.z, v.w);
            let A = E ? R : 0
              , k = (0,
            s.sampleReplaySticks)(e, d, h);
            k ? (a.live.input.throttle = k.throttle,
            a.live.input.roll = k.roll,
            a.live.input.pitch = k.pitch,
            a.live.input.yaw = k.yaw,
            a.live.input.armRequested = !0,
            a.live.input.source = "none",
            a.live.telemetry.armed = !0,
            a.live.telemetry.throttle = Math.max(A, k.throttle)) : (a.live.telemetry.armed = !0,
            a.live.telemetry.throttle = A > 0 ? A : .05);
            let T = (0,
            s.resolveReplayMotors)(e, d, h, a.live.telemetry.throttle);
            a.live.motors[0] = T[0],
            a.live.motors[1] = T[1],
            a.live.motors[2] = T[2],
            a.live.motors[3] = T[3];
            let L = Math.hypot(b.position[0] - m.position[0], b.position[1] - m.position[1], b.position[2] - m.position[2]);
            a.live.telemetry.speed = x > 1e-4 ? L / x : 0
        }
        , -3),
        (0,
        t.jsxs)(t.Fragment, {
            children: [T && (0,
            t.jsx)(c.ReplayRaceGates, {
                attack: T,
                frames: e,
                time: O
            }), (0,
            t.jsx)(u.ReplayPrefabMotion, {
                frames: e,
                time: O
            }), (0,
            t.jsx)(l.ReplayCrowd, {
                frames: e,
                time: O,
                quality: k,
                shadows: b && (0,
                p.atLeast)(k, "high")
            }), (0,
            t.jsx)(d.ReplayDriftFleet, {
                frames: e,
                time: O,
                quality: k,
                shadows: b
            }), (0,
            t.jsxs)("group", {
                ref: j,
                children: [(0,
                t.jsx)(h.DroneModel, {
                    archetype: P.id,
                    skin: P.skin,
                    castShadow: b,
                    fpv: !!x
                }), x ? (0,
                t.jsx)(m.FpvCamera, {
                    archetype: P.id,
                    fov: x.fov,
                    tiltDeg: x.tiltDeg,
                    shake: M,
                    far: A
                }) : null]
            })]
        })
    }
    ])
}
, 933031, 308108, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(94800)
      , n = e.i(190072)
      , o = e.i(483359)
      , a = e.i(961731)
      , s = e.i(260095)
      , l = e.i(552260);
    let c = new n.Matrix4
      , u = new n.Quaternion
      , d = new n.Euler
      , h = new n.Vector3
      , m = new n.Vector3(1,1,1);
    function p(e, t) {
        let r = new n.Color(t)
          , i = e.getAttribute("position").count
          , o = new Float32Array(3 * i);
        for (let e = 0; e < i; e++)
            o[3 * e] = r.r,
            o[3 * e + 1] = r.g,
            o[3 * e + 2] = r.b;
        return e.setAttribute("color", new n.Float32BufferAttribute(o,3)),
        e
    }
    function f(e) {
        let[t,r,i] = e.half
          , o = new n.BoxGeometry(2 * t,2 * r,2 * i);
        return d.set(0, 0, e.roll ?? 0),
        u.setFromEuler(d),
        h.set(...e.center),
        o.applyMatrix4(c.compose(h, u, m)),
        p(o, e.color)
    }
    function g(e) {
        return d.set(0, e.face > 0 ? 0 : Math.PI, 0),
        u.setFromEuler(d),
        h.set(...e.center),
        c.compose(h, u, m),
        [0, 1, 2, 3].map(t => {
            let r = new n.CircleGeometry(e.radius,6,t * Math.PI / 2 + Math.PI / 4,Math.PI / 2);
            return r.applyMatrix4(c),
            p(r, t % 2 == 0 ? a.GATE_TARGET_YELLOW : a.GATE_INK)
        }
        )
    }
    function v(e) {
        if (0 === e.length)
            return null;
        let t = (0,
        l.mergeGeometries)(e, !1);
        for (let t of e)
            t.dispose();
        return t
    }
    let y = null
      , w = new Map;
    function b(e, t) {
        let r = `${e}:${t}`
          , i = w.get(r);
        if (!i) {
            let o = t < 1;
            i = "body" === e ? new n.MeshStandardMaterial({
                vertexColors: !0,
                roughness: .6,
                metalness: 0,
                transparent: o,
                opacity: t,
                depthWrite: !o
            }) : new n.MeshBasicMaterial({
                vertexColors: !0,
                toneMapped: !1,
                transparent: o,
                opacity: t,
                depthWrite: !o
            }),
            w.set(r, i)
        }
        return i
    }
    function x({gate: e, kit: i, opacity: a=1}) {
        let s = i.frame.find(e => "glow" === e.layer)?.color ?? "#ffffff"
          , l = (0,
        r.useMemo)( () => {
            let e;
            return {
                frameBody: v([...(e = (e, t) => e.filter(e => e.layer === t).map(f))(i.frame, "body"), ...i.targets.flatMap(g)]),
                frameGlow: v(e(i.frame, "glow")),
                mountBody: v(e(i.mount ?? [], "body")),
                mountGlow: v(e(i.mount ?? [], "glow")),
                thrusters: function(e, t) {
                    if (0 === e.length)
                        return null;
                    let r = new n.Color(t);
                    return v(e.map(e => {
                        let t = new n.CylinderGeometry(e.radius,1.7 * e.radius,e.length,12,4,!0);
                        t.translate(e.center[0], e.center[1] - e.length / 2, e.center[2]);
                        let i = t.getAttribute("position")
                          , o = new Float32Array(4 * i.count);
                        for (let t = 0; t < i.count; t++) {
                            let n = (i.getY(t) - (e.center[1] - e.length)) / e.length;
                            o.set([r.r, r.g, r.b, .5 * n * n], 4 * t)
                        }
                        return t.setAttribute("color", new n.Float32BufferAttribute(o,4)),
                        t
                    }
                    ))
                }(i.thrusters ?? [], s)
            }
        }
        , [i, s]);
        (0,
        r.useEffect)( () => () => {
            for (let e of Object.values(l))
                e?.dispose()
        }
        , [l]);
        let c = (0,
        o.gateBasis)(e)
          , {euler: u} = c
          , d = (0,
        o.gateMountYaw)(c)
          , h = 1 === a
          , m = b("body", a)
          , p = b("glow", a);
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsxs)("group", {
                position: e.position,
                rotation: u,
                children: [l.frameBody && (0,
                t.jsx)("mesh", {
                    geometry: l.frameBody,
                    material: m,
                    castShadow: h,
                    receiveShadow: h
                }), l.frameGlow && (0,
                t.jsx)("mesh", {
                    geometry: l.frameGlow,
                    material: p
                })]
            }), (0,
            t.jsxs)("group", {
                position: e.position,
                rotation: [0, d, 0],
                children: [l.mountBody && (0,
                t.jsx)("mesh", {
                    geometry: l.mountBody,
                    material: m,
                    castShadow: h,
                    receiveShadow: h
                }), l.mountGlow && (0,
                t.jsx)("mesh", {
                    geometry: l.mountGlow,
                    material: p
                }), l.thrusters && (0,
                t.jsx)("mesh", {
                    geometry: l.thrusters,
                    material: y ??= new n.MeshBasicMaterial({
                        vertexColors: !0,
                        transparent: !0,
                        depthWrite: !1,
                        blending: n.AdditiveBlending,
                        side: n.DoubleSide,
                        toneMapped: !1
                    }),
                    renderOrder: 2
                })]
            })]
        })
    }
    function S({gate: e, active: a}) {
        let s = (0,
        r.useRef)(null)
          , l = (0,
        r.useRef)(null)
          , {euler: c} = (0,
        o.gateBasis)(e);
        return (0,
        i.useFrame)( ({clock: e}) => {
            if (!a)
                return;
            let t = Math.sin(3 * e.elapsedTime)
              , r = l.current;
            r && (r.opacity = .3 + .07 * t);
            let i = s.current;
            if (i) {
                let e = 1 + .02 * t;
                i.scale.set(e, e, 1)
            }
        }
        ),
        (0,
        t.jsxs)("mesh", {
            ref: s,
            position: e.position,
            rotation: c,
            children: [(0,
            t.jsx)("planeGeometry", {
                args: e.size
            }), (0,
            t.jsx)("meshBasicMaterial", {
                ref: l,
                color: e.color,
                transparent: !0,
                opacity: .3,
                depthWrite: !1,
                side: n.FrontSide,
                toneMapped: !1
            })]
        })
    }
    function M() {
        let e = (0,
        r.useContext)(s.TrackWorldContext);
        return (0,
        r.useMemo)( () => e ? (0,
        a.worldSurfaceProbe)(e) : a.FLAT_SURFACE, [e])
    }
    e.s(["RaceGateMesh", 0, x], 308108),
    e.s(["HolographicGateView", 0, function({gate: e, status: i, active: n=!0, probe: o}) {
        var s;
        let l, c = M(), u = (s = o ?? c,
        l = "completed" === i ? "#9aa0a6" : e.color,
        (0,
        r.useMemo)( () => (0,
        a.raceGateKit)(e, l, s), [e, l, s])), d = "next" === i;
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(x, {
                gate: e,
                kit: u
            }), d ? (0,
            t.jsx)(S, {
                gate: e,
                active: n
            }) : null]
        })
    }
    , "useTrackSurfaceProbe", 0, M], 933031)
}
, 816125, 101407, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(575056)
      , n = e.i(94800)
      , o = e.i(848546)
      , a = e.i(190072)
      , s = e.i(106258)
      , l = e.i(814022)
      , c = e.i(752834)
      , u = e.i(37220)
      , d = e.i(246176)
      , h = e.i(894969)
      , m = e.i(794850)
      , p = e.i(353937)
      , f = e.i(632526)
      , g = e.i(404961)
      , v = e.i(373636)
      , y = e.i(166636)
      , w = e.i(973);
    function b() {
        let e = (0,
        s.useSimStore)(e => e.settings.graphics)
          , t = (0,
        o.useThree)(e => e.size)
          , i = (0,
        o.useThree)(e => e.setDpr)
          , n = (0,
        o.useThree)(e => e.invalidate)
          , {quality: a, renderScale: l, msaa: c, postProcessing: u} = e;
        return (0,
        r.useEffect)( () => {
            let e = () => {
                i((0,
                y.renderPixelRatio)(window.devicePixelRatio, t.width, t.height, {
                    quality: a,
                    renderScale: l,
                    msaa: c,
                    postProcessing: u
                })),
                n()
            }
            ;
            return e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
        }
        , [a, l, c, u, t.width, t.height, i, n]),
        null
    }
    e.s(["GraphicsController", 0, b], 101407);
    var x = e.i(187333)
      , S = e.i(211090)
      , M = e.i(170341)
      , A = e.i(847511)
      , E = e.i(288936)
      , R = e.i(720996)
      , k = e.i(759366)
      , T = e.i(825586)
      , P = e.i(167614)
      , C = e.i(954646)
      , j = e.i(343627)
      , O = e.i(396091);
    class I {
        shown;
        desired;
        generation = 0;
        departAt = null;
        leaving = !1;
        gone = !1;
        constructor(e) {
            this.shown = this.desired = e
        }
        select(e, t) {
            this.desired = e,
            this.leaving || this.gone || null === this.departAt && (e.archetype === this.shown.archetype ? this.shown = e : this.departAt = t)
        }
        depart(e) {
            this.leaving = !0,
            this.departAt ??= e
        }
        advance(e) {
            return null === this.departAt || this.gone || e - this.departAt < O.DEPARTURE_MS + 40 ? null : this.leaving ? (this.gone = !0,
            "exit") : (this.shown = this.desired,
            this.generation++,
            this.departAt = null,
            "arrive")
        }
        recover() {
            this.leaving = this.gone = !1,
            this.departAt = null,
            this.shown = this.desired,
            this.generation++
        }
    }
    var D = e.i(361073)
      , L = e.i(745109)
      , _ = e.i(391090)
      , F = e.i(332628)
      , V = e.i(625979)
      , z = e.i(517337)
      , N = e.i(981229);
    function G({world: e, view: r}) {
        let i = (0,
        z.useGearWorld)(e => e.anchor);
        return i ? (0,
        t.jsx)(B, {
            anchor: i,
            world: e,
            view: r
        }, i.id) : null
    }
    function B({anchor: e, world: i, view: s}) {
        let {camera: l, size: c, gl: u} = (0,
        o.useThree)()
          , d = (0,
        r.useRef)(null)
          , [h] = (0,
        r.useState)( () => new I(e))
          , [m,p] = (0,
        r.useState)( () => ({
            selection: h.shown,
            generation: h.generation
        }))
          , f = (0,
        r.useMemo)( () => ({
            departAt: null
        }), [])
          , g = (0,
        r.useRef)(null)
          , v = (0,
        r.useRef)(null)
          , y = (0,
        r.useRef)(!1)
          , w = (0,
        r.useRef)(0)
          , b = (0,
        r.useRef)((0,
        V.gearInspectionDistance)(e.archetype))
          , x = (0,
        r.useMemo)( () => (0,
        V.gearInspectionDistance)(m.selection.archetype), [m.selection.archetype])
          , {left: S, top: M, width: A, height: E} = e.rect
          , C = (0,
        r.useMemo)( () => {
            let e = u.domElement.getBoundingClientRect()
              , t = (0,
            F.placeGearWorldCamera)(l, i, s, c.width / Math.max(1, c.height))
              , r = (0,
            F.gearWorldFraming)(l, e, {
                left: S,
                top: M,
                width: A,
                height: E
            }, t.base)
              , n = l.clone();
            return (0,
            N.flattenStandPerspective)(l, r.position.clone().add(new a.Vector3(0,r.deckY + .23 * r.standWidth,0)), {
                width: c.width,
                height: c.height
            }),
            {
                ...t,
                ...r,
                worldCamera: n,
                viewOffset: {
                    ...l.view
                },
                inspectionView: (0,
                V.createGearInspectionView)(l, r.position, r.deckY, r.standWidth)
            }
        }
        , [l, u, c.width, c.height, i, s, S, M, A, E]);
        (0,
        r.useLayoutEffect)( () => {
            let e = C.viewOffset;
            return l.setViewOffset(e.fullWidth, e.fullHeight, e.offsetX, e.offsetY, e.width, e.height),
            () => l.clearViewOffset()
        }
        , [l, C]),
        (0,
        r.useEffect)( () => {
            let t = h.departAt;
            h.select({
                archetype: e.archetype,
                skin: e.skin,
                skinOverride: e.skinOverride
            }, performance.now()),
            (0,
            R.motionReduced)() && null !== h.departAt && !h.leaving && h.advance(h.departAt + 300),
            f.departAt = h.departAt,
            null === t && null !== h.departAt && (v.current?.(),
            v.current = (0,
            j.playHomeDroneAudio)("departure", .65, {
                fromRotorSpeed: 230,
                craft: h.shown.archetype
            }))
        }
        , [e.archetype, e.skin, e.skinOverride, h, f]),
        (0,
        r.useEffect)( () => {
            let e = {
                depart(e) {
                    if ((0,
                    R.motionReduced)())
                        return void e();
                    g.current = e;
                    let t = h.departAt;
                    h.depart(performance.now()),
                    f.departAt = h.departAt,
                    null === t && (v.current?.(),
                    v.current = (0,
                    j.playHomeDroneAudio)("departure", .8, {
                        fromRotorSpeed: 230,
                        craft: h.shown.archetype
                    }))
                },
                recover() {
                    g.current = null,
                    h.recover(),
                    f.departAt = null,
                    p({
                        selection: h.shown,
                        generation: h.generation
                    })
                }
            };
            return z.useGearWorld.setState({
                stage: e
            }),
            () => {
                z.useGearWorld.getState().stage === e && z.useGearWorld.setState({
                    stage: null
                }),
                v.current?.(),
                g.current = null
            }
        }
        , [h, f]),
        (0,
        n.useFrame)( (t, r) => {
            let i = z.useGearWorld.getState()
              , n = i.inspection - w.current;
            w.current = (0,
            R.motionReduced)() || 1e-4 > Math.abs(n) ? i.inspection : w.current + n * (1 - Math.exp(-(14 * Math.min(r, .1))));
            let o = x - b.current;
            b.current = (0,
            R.motionReduced)() || 1e-4 > Math.abs(o) ? x : b.current + o * (1 - Math.exp(-(10 * Math.min(r, .1)))),
            (0,
            V.applyGearInspectionView)(l, C.inspectionView, w.current, b.current),
            y.current || (y.current = !0,
            queueMicrotask( () => {
                z.useGearWorld.getState().anchor?.id === e.id && z.useGearWorld.setState({
                    readyId: e.id
                })
            }
            )),
            d.current && (d.current.rotation.y = C.yaw + Math.PI + _.LOBBY_CRAFT_TURN + i.rotation,
            d.current.visible = e.visible && !h.gone && m.generation === h.generation);
            let a = h.advance(performance.now());
            if ("arrive" === a)
                d.current && (d.current.visible = !1),
                f.departAt = null;
            else if ("exit" === a) {
                let e = g.current;
                g.current = null,
                requestAnimationFrame( () => e?.())
            }
            (m.selection !== h.shown || m.generation !== h.generation) && p({
                selection: h.shown,
                generation: h.generation
            })
        }
        );
        let O = (0,
        r.useMemo)( () => {
            let e = new a.DirectionalLight("#fff3e2",1.15)
              , t = new a.DirectionalLight("#e4efff",2.4);
            for (let r of [e, t])
                r.layers.set(T.LOBBY_AIRCRAFT_LAYER);
            return {
                key: e,
                rim: t
            }
        }
        , []);
        (0,
        r.useLayoutEffect)( () => {
            let e = new a.Vector3().setFromMatrixColumn(l.matrixWorld, 0).setY(0).normalize();
            for (let t of (O.key.position.copy(l.position).addScaledVector(e, -2.4).add(new a.Vector3(0,2.6,0)),
            O.rim.position.copy(C.position).addScaledVector(C.forward, 3.2).addScaledVector(e, 1.4).add(new a.Vector3(0,2.2,0)),
            [O.key, O.rim]))
                t.target.position.copy(C.position),
                t.target.updateMatrixWorld()
        }
        , [l, C, O]),
        (0,
        r.useEffect)( () => () => {
            O.key.dispose(),
            O.rim.dispose()
        }
        , [O]);
        let D = (0,
        _.lobbyCraftFraming)(m.selection.archetype, C.referenceWidth, C.deckY);
        return (0,
        t.jsxs)(k.LobbyComposite, {
            worldCamera: C.worldCamera,
            children: [(0,
            t.jsx)("primitive", {
                object: O.key
            }), (0,
            t.jsx)("primitive", {
                object: O.rim
            }), (0,
            t.jsxs)("group", {
                position: C.position,
                visible: e.visible && C.referenceWidth > 0,
                children: [(0,
                t.jsx)(L.LobbyStand, {
                    width: C.standWidth,
                    yaw: C.yaw,
                    state: "you"
                }), (0,
                t.jsx)("group", {
                    ref: d,
                    children: (0,
                    t.jsx)(P.LobbyCraft, {
                        ...m.selection,
                        ...D,
                        deckY: C.deckY,
                        yaw: 0,
                        footprint: C.standWidth,
                        hover: !0,
                        delayMs: 0,
                        launch: f,
                        voice: .8
                    }, m.generation)
                })]
            })]
        })
    }
    var W = e.i(914584)
      , H = e.i(655861)
      , U = e.i(869488)
      , Y = e.i(244050);
    function q({world: e, view: i}) {
        let {camera: n, size: c} = (0,
        o.useThree)()
          , f = (0,
        s.useSimStore)(e => e.settings.drone)
          , g = (0,
        d.useLobbySocial)(e => e.squad)
          , v = (0,
        s.useSimStore)(e => e.playerAccountId)
          , y = (0,
        u.useMenuScene)(e => e.hoveredSlot);
        (0,
        h.useInventory)(e => e.items);
        let w = (0,
        s.useSimStore)(l.flownDrone)
          , b = (0,
        p.equippedDroneSkin)(f.skins, w)
          , x = v ?? "local"
          , S = g ? (0,
        m.lobbyMembers)(g.members, x) : [{
            id: x,
            drone: w,
            skin: b,
            online: !0,
            ready: !0
        }]
          , M = (0,
        r.useMemo)( () => ({
            departAt: null
        }), [])
          , A = (0,
        r.useMemo)( () => {
            let t = (0,
            F.lobbyStage)(e, i);
            return {
                ...(0,
                F.homeWorldFraming)(n, t, {
                    width: c.width,
                    height: c.height
                }, D.DEFAULT_STAGE_FLOOR),
                forward: t.forward,
                yaw: t.yaw + Math.PI + _.LOBBY_CRAFT_TURN,
                standYaw: t.yaw
            }
        }
        , [n, c.width, c.height, e, i]);
        (0,
        r.useLayoutEffect)( () => {
            let e = A.viewOffset;
            return n.setViewOffset(e.fullWidth, e.fullHeight, e.offsetX, e.offsetY, e.width, e.height),
            () => n.clearViewOffset()
        }
        , [n, A]),
        (0,
        r.useEffect)( () => {
            let e = new a.Vector3
              , t = new a.Vector3
              , r = t => (e.copy(t).project(n),
            {
                x: (e.x + 1) / 2,
                y: (1 - e.y) / 2
            })
              , i = A.positions.map( (e, i) => {
                let o = A.widths[i] * D.LOBBY_STAND_SHARE
                  , s = L.LOBBY_STAND_TOP * o;
                t.copy(n.position).sub(e).setY(0).normalize();
                let l = r(e.clone().addScaledVector(t, .5 * o))
                  , c = r(e.clone().add(new a.Vector3(0,s + .26 * o,0)))
                  , u = e.clone().add(new a.Vector3(0,s + .12 * o,0))
                  , d = r(u)
                  , h = r(e.clone().addScaledVector(A.right, -(.5 * o)))
                  , m = r(e.clone().addScaledVector(A.right, .5 * o))
                  , p = 0 === i ? (0,
                _.lobbyCraftFraming)(w, (0,
                W.craftWidthOn)(A.widths[0], w, !0), s, _.STAND_SIZE_COMPRESSION).aircraftWidth : 0
                  , f = r(u.clone().addScaledVector(A.right, p / 2)).x - r(u.clone().addScaledVector(A.right, -p / 2)).x;
                return {
                    x: l.x,
                    y: l.y,
                    top: c.y,
                    width: m.x - h.x,
                    craft: d.y,
                    craftWidth: f
                }
            }
            );
            u.useMenuScene.getState().setSlotAnchors(i)
        }
        , [n, A, w]),
        (0,
        r.useEffect)( () => () => u.useMenuScene.getState().setSlotAnchors(null), []),
        (0,
        r.useEffect)( () => {
            let e, t = () => {}
            , r = (0,
            C.registerHomeHero)({
                depart(r) {
                    (0,
                    R.motionReduced)() ? r() : (M.departAt = performance.now(),
                    t = (0,
                    j.playHomeDroneAudio)("departure", 1, {
                        fromRotorSpeed: 230
                    }),
                    e = setTimeout(r, O.DEPARTURE_MS + 40))
                },
                recover() {
                    M.departAt = null
                }
            });
            return () => {
                r(),
                clearTimeout(e),
                t(),
                M.departAt = null
            }
        }
        , [M]);
        let E = (0,
        r.useMemo)( () => {
            let e = new a.DirectionalLight("#fff3e2",1.15)
              , t = new a.DirectionalLight("#e4efff",2.4);
            for (let r of [e, t])
                r.layers.set(T.LOBBY_AIRCRAFT_LAYER);
            return {
                key: e,
                rim: t
            }
        }
        , []);
        return (0,
        r.useLayoutEffect)( () => {
            let {center: e, right: t, forward: r} = A;
            for (let i of (E.key.position.copy(n.position).addScaledVector(t, -2.4).add(new a.Vector3(0,2.6,0)),
            E.rim.position.copy(e).addScaledVector(r, 3.2).addScaledVector(t, 1.4).add(new a.Vector3(0,2.2,0)),
            [E.key, E.rim]))
                i.target.position.copy(e),
                i.target.updateMatrixWorld()
        }
        , [n, A, E]),
        (0,
        r.useEffect)( () => () => {
            E.key.dispose(),
            E.rim.dispose()
        }
        , [E]),
        (0,
        t.jsxs)(k.LobbyComposite, {
            worldCamera: A.worldCamera,
            children: [(0,
            t.jsx)("primitive", {
                object: E.key
            }), (0,
            t.jsx)("primitive", {
                object: E.rim
            }), A.positions.map( (e, r) => {
                let i = S[r]
                  , n = i?.id === x
                  , o = i ? (0,
                m.lobbyAircraft)(i, x, {
                    drone: w,
                    skin: b
                }) : null
                  , a = A.widths[r] * D.LOBBY_STAND_SHARE
                  , s = L.LOBBY_STAND_TOP * a
                  , l = !!i && i.online && (!g || i.id === g.leaderId || i.ready);
                return (0,
                t.jsxs)("group", {
                    position: e,
                    children: [(0,
                    t.jsx)(L.LobbyStand, {
                        width: a,
                        yaw: A.standYaw,
                        state: i ? n ? "you" : "pilot" : "empty",
                        highlight: y === r
                    }), o && (0,
                    t.jsx)("group", {
                        rotation: [0, A.yaw, 0],
                        children: (0,
                        t.jsx)(X, {
                            archetype: o.drone,
                            skin: o.skin,
                            skinOverride: o.skinOverride,
                            padWidth: A.widths[r],
                            emphasised: 0 === r,
                            deckY: s,
                            footprint: a,
                            hover: l,
                            delayMs: 140 * r,
                            squadLaunch: M,
                            voice: n ? .8 : .4
                        })
                    })]
                }, i?.id ?? `slot-${r}`)
            }
            )]
        })
    }
    function X({archetype: e, skin: i, skinOverride: o, padWidth: a, emphasised: s, deckY: l, footprint: c, hover: u, delayMs: d, squadLaunch: h, voice: m}) {
        let p = (0,
        r.useRef)(null)
          , [f] = (0,
        r.useState)( () => new I({
            archetype: e,
            skin: i,
            skinOverride: o
        }))
          , [g,v] = (0,
        r.useState)( () => ({
            selection: f.shown,
            generation: f.generation
        }))
          , y = (0,
        r.useMemo)( () => ({
            departAt: null
        }), [])
          , w = (0,
        r.useRef)(null);
        (0,
        r.useEffect)( () => {
            let t = null === f.departAt;
            f.select({
                archetype: e,
                skin: i,
                skinOverride: o
            }, performance.now()),
            null !== f.departAt && t && ((0,
            R.motionReduced)() ? f.advance(f.departAt + O.DEPARTURE_MS + 40) : m > .5 && (w.current?.(),
            w.current = (0,
            j.playHomeDroneAudio)("departure", .65, {
                fromRotorSpeed: 230,
                craft: f.shown.archetype
            })))
        }
        , [e, i, o, f, m]),
        (0,
        r.useEffect)( () => () => w.current?.(), []),
        (0,
        n.useFrame)( () => {
            let e = f.advance(performance.now());
            y.departAt = h.departAt ?? f.departAt,
            p.current && (p.current.visible = "arrive" !== e && g.generation === f.generation),
            (g.selection !== f.shown || g.generation !== f.generation) && v({
                selection: f.shown,
                generation: f.generation
            })
        }
        );
        let b = (0,
        _.lobbyCraftFraming)(g.selection.archetype, (0,
        W.craftWidthOn)(a, g.selection.archetype, s), l, _.STAND_SIZE_COMPRESSION);
        return (0,
        t.jsx)("group", {
            ref: p,
            children: (0,
            t.jsx)(P.LobbyCraft, {
                ...g.selection,
                ...b,
                deckY: l,
                yaw: 0,
                footprint: c,
                hover: u,
                delayMs: d,
                launch: y,
                voice: m
            }, g.generation)
        })
    }
    let K = "(max-width: 1440px)";
    function Z() {
        return window.matchMedia(K).matches
    }
    function Q(e) {
        let t = window.matchMedia(K);
        return t.addEventListener("change", e),
        () => t.removeEventListener("change", e)
    }
    e.s(["default", 0, function({onReady: e}) {
        let n = (0,
        U.useActivityDisplay)(e => null !== e.display)
          , o = (0,
        u.useMenuScene)(e => e.destination)
          , a = (0,
        c.useMapEditor)(e => e.active)
          , l = (0,
        u.useMenuScene)(e => e.selectedMap)
          , d = (0,
        u.useMenuScene)(e => e.contentVersion)
          , h = (0,
        v.usePublishedGridworks)(e => e.revision)
          , m = (0,
        s.useSimStore)(e => e.settings.graphics)
          , p = (0,
        z.useGearWorld)(e => null !== e.anchor)
          , R = (0,
        z.useGearWorld)(e => e.anchor?.environmentOverride ?? null)
          , k = (0,
        r.useSyncExternalStore)(Q, Z, () => !0)
          , T = (0,
        r.useMemo)( () => (0,
        g.resolveMap)(l), [l, d])
          , P = (0,
        r.useMemo)( () => (0,
        f.worldForMap)(T), [T, h])
          , C = (0,
        r.useMemo)( () => ({
            bloom: m.bloom ?? !1,
            msaa: m.msaa ?? !1
        }), [m.bloom, m.msaa])
          , j = "maps" === o || "community" === o || "editor" === o && a || "record" === o && k;
        return ((0,
        r.useEffect)( () => {
            j && e?.()
        }
        , [j, e]),
        j) ? null : (0,
        t.jsxs)(i.Canvas, {
            gl: (0,
            w.simGl)({
                antialias: !0
            }),
            shadows: !!m.shadows && "percentage",
            events: () => ({
                enabled: !1,
                priority: 1
            }),
            dpr: (0,
            y.renderPixelRatio)(window.devicePixelRatio, window.innerWidth, window.innerHeight, m),
            camera: {
                fov: 44,
                near: .015,
                far: m.drawDistance
            },
            children: [(0,
            t.jsx)(H.ActivityThumbnails, {}), (0,
            t.jsx)(b, {}), (0,
            t.jsx)(M.SimFrameRenderer, {
                quality: m.quality,
                effects: C
            }), (0,
            t.jsx)(Y.EnvironmentPaintContext, {
                value: "gear" === o ? R : null,
                children: (0,
                t.jsx)(r.Suspense, {
                    fallback: null,
                    children: (0,
                    t.jsxs)(x.SimTextures, {
                        world: P,
                        quality: m.quality,
                        children: [(0,
                        t.jsx)(S.SimEnvironmentView, {
                            world: P,
                            quality: m.quality,
                            shadows: m.shadows,
                            drawDistance: m.drawDistance
                        }), n ? (0,
                        t.jsx)(U.ActivityDisplayStage, {
                            world: P,
                            view: T.views.lobby
                        }) : o && "play" !== o ? "gear" === o && p ? (0,
                        t.jsx)(G, {
                            world: P,
                            view: T.views.lobby
                        }) : (0,
                        t.jsx)(E.ShowcaseCamera, {
                            view: T.views.menu,
                            sweep: !0
                        }) : (0,
                        t.jsx)(q, {
                            world: P,
                            view: T.views.lobby
                        }), e && (0,
                        t.jsx)(A.SceneReady, {
                            onReady: e
                        })]
                    })
                })
            })]
        })
    }
    ], 816125)
}
, 662827, e => {
    "use strict";
    var t = e.i(271645)
      , r = e.i(246176)
      , i = e.i(882902)
      , n = e.i(106258)
      , o = e.i(809886);
    let a = null;
    e.s(["SquadDroneSync", 0, function() {
        let e, s, l, c, u;
        return e = (0,
        n.useSimStore)(e => e.isAnonymous ? null : e.playerAccountId),
        s = (0,
        r.useLobbySocial)(t => e ? (0,
        r.squadDrone)(t.squad) : null),
        l = (0,
        r.useLobbySocial)(e => e.squad?.launchVersion ?? 0),
        c = (0,
        i.useMatchLaunch)(e => e.active?.match ?? null),
        u = (0,
        n.useSimStore)(e => (0,
        o.isMenuReplayBackdrop)(e.phase)),
        (0,
        t.useEffect)( () => {
            (u || !s) && n.useSimStore.setState({
                squadDrone: s
            })
        }
        , [s, u]),
        (0,
        t.useEffect)( () => {
            let e = `${s}|${l}|${c}`;
            e !== a && (a = e,
            n.useSimStore.setState({
                lentSpent: null
            }))
        }
        , [s, l, c]),
        null
    }
    ])
}
, 621599, e => {
    "use strict";
    var t = e.i(271645);
    function r(e, t=!1) {
        let i = Math.min(440, e.width / 2 - 72)
          , n = 28 + (t ? 0 : Math.min(210, .25 * e.height)) + 6 + 40 + 6
          , o = e.height - 32;
        return {
            left: 40,
            top: o - n,
            right: 40 + i,
            bottom: o
        }
    }
    let i = e => (window.addEventListener("resize", e),
    () => window.removeEventListener("resize", e))
      , n = () => `${window.innerWidth}x${window.innerHeight}`
      , o = () => "1600x900";
    e.s(["useResultsStageClear", 0, function(e) {
        let a = (0,
        t.useSyncExternalStore)(i, n, o);
        return (0,
        t.useMemo)( () => {
            let[t,i] = a.split("x").map(Number);
            var n = {
                width: t,
                height: i
            };
            switch (e) {
            case "end":
                return {
                    obstacles: [r(n, !0)],
                    top: .24
                };
            case "podium":
                return {
                    obstacles: [r(n)],
                    top: .04
                }
            }
        }
        , [a, e])
    }
    ])
}
, 478940, e => {
    "use strict";
    var t = e.i(271645)
      , r = e.i(848546)
      , i = e.i(907462);
    e.s(["NavigationCamera", 0, function() {
        let e = (0,
        r.useThree)(e => e.camera);
        return (0,
        t.useEffect)( () => (i.navigationRuntime.camera = e,
        () => {
            i.navigationRuntime.camera === e && (i.navigationRuntime.camera = null)
        }
        ), [e]),
        null
    }
    ])
}
, 634247, 825580, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(94800)
      , n = e.i(190072)
      , o = e.i(331536)
      , a = e.i(967226)
      , s = e.i(720996)
      , l = e.i(552260);
    let c = {
        depthTest: !0,
        depthWrite: !1,
        depthFunc: n.LessEqualDepth
    };
    function u(e, t=3) {
        let r = new n.CircleGeometry(e + .65,96);
        r.rotateX(-Math.PI / 2),
        r.translate(0, .025, 0);
        let i = new n.CylinderGeometry(e,e,t,96,1,!0);
        i.translate(0, t / 2, 0);
        let o = [.055, t - .025].map(t => {
            let r = new n.TorusGeometry(e,.18,16,96);
            return r.rotateX(-Math.PI / 2),
            r.translate(0, t, 0),
            r
        }
        )
          , a = (0,
        l.mergeGeometries)(o, !1);
        for (let e of o)
            e.dispose();
        if (!a)
            throw Error("POI rims could not be merged");
        for (let e of [r, a, i])
            e.computeBoundingSphere();
        return {
            base: r,
            rims: a,
            field: i
        }
    }
    function d(e) {
        e.base.dispose(),
        e.rims.dispose(),
        e.field.dispose()
    }
    e.s(["POI_GROUND_HALO", 0, .65, "POI_RIM_HALO", 0, .18, "POI_WORLD_DEPTH", 0, c, "createRaceMarkerGeometry", 0, u, "disposeRaceMarkerGeometry", 0, d], 825580);
    let h = `
#include <common>
#include <logdepthbuf_pars_vertex>
varying vec2 vUv;
varying vec3 vLocal;
varying vec3 vNormal;
varying vec3 vView;
varying vec3 vTangent;
void main() {
  vUv = uv;
  vLocal = position;
  vNormal = normalMatrix * normal;
  vTangent = normalMatrix * vec3(-position.z, 0.0, position.x);
  vec4 view = modelViewMatrix * vec4(position, 1.0);
  vView = -view.xyz;
  gl_Position = projectionMatrix * view;
  #include <logdepthbuf_vertex>
}
`
      , m = `
#include <common>
#include <logdepthbuf_pars_fragment>
uniform vec3 uColor;
uniform vec3 uCore;
uniform float uRadius;
uniform float uHeight;
uniform float uTime;
uniform float uStrength;
varying vec2 vUv;
varying vec3 vLocal;
varying vec3 vNormal;
varying vec3 vView;
varying vec3 vTangent;

float line(float coordinate, float width) {
  float footprint = max(fwidth(coordinate), .0001);
  float distance = abs(fract(coordinate - .5) - .5);
  return (1.0 - smoothstep(width, width + footprint, distance))
    * (1.0 - smoothstep(.22, .5, footprint));
}

void main() {
  vec3 color = uColor;
  float alpha = 0.0;
  #ifdef FIELD
    float facing = clamp(abs(dot(normalize(vNormal), normalize(vView))), 0.0, 1.0);
    float edge = pow(1.0 - facing, 2.5);
    float rimDistance = min(vLocal.y, uHeight - vLocal.y);
    float rimWash = exp(-rimDistance * 8.0);
    float vertical = line(vUv.x * 48.0, .018);
    float horizontal = line(vLocal.y * 5.0, .014);
    float major = line(vUv.x * 12.0, .016);
    float scanPhase = fract(uTime * .16 + .18);
    float scanDistance = (vUv.y - scanPhase) / .055;
    float scan = exp(-scanDistance * scanDistance) * sin(scanPhase * 3.14159265);
    // The rear face stays quiet so the cylinder reads as a volume, not two grids.
    float front = gl_FrontFacing ? 1.0 : .38;
    alpha = (.075 + edge * .38 + rimWash * .2
      + vertical * .048 + horizontal * .022 + major * .025 + scan * .07) * front;
    color = mix(uColor, uCore, clamp(edge * .28 + rimWash * .24, 0.0, .5));
  #endif
  #ifdef RIMS
    // A Gaussian cross-section gives a white-hot hairline and soft colored halo
    // in the material itself, so medium/low settings don't need screen bloom.
    vec3 tangent = normalize(vTangent);
    vec3 acrossView = vView - tangent * dot(vView, tangent);
    acrossView /= max(length(acrossView), .0001);
    // Signed distance retains a derivative across the core's centre. Taking
    // abs before fwidth loses that footprint and creates dotted distant rims.
    vec3 acrossAxis = cross(tangent, acrossView);
    acrossAxis /= max(length(acrossAxis), .0001);
    float across = dot(normalize(vNormal), acrossAxis);
    float coreDistance = across / max(.11, fwidth(across) * .8);
    float haloDistance = across / .52;
    float core = exp(-coreDistance * coreDistance);
    float halo = exp(-haloDistance * haloDistance);
    alpha = core * .96 + halo * .42;
    color = mix(uColor, uCore, core * core * .96);
  #endif
  #ifdef BASE
    float radius = length(vLocal.xz);
    float edge = abs(radius - uRadius);
    float halo = exp(-pow(edge / .32, 2.0));
    float interior = (1.0 - smoothstep(uRadius * .5, uRadius, radius)) * .035;
    alpha = halo * .3 + interior;
  #endif
  alpha *= uStrength;
  if (alpha < .002) discard;
  gl_FragColor = vec4(color, min(alpha, 1.0));
  #include <logdepthbuf_fragment>
  #include <colorspace_fragment>
}
`;
    var p = e.i(514722);
    e.s(["PoiMarker", 0, function({id: e, kind: l, name: f, marker: g, visible: v, locked: y=!1, lockLabel: w}) {
        let b = o.POI_IDENTITIES[l]
          , x = w ?? `Level ${b.unlockLevel}`
          , S = y ? o.POI_LOCKED_COLOR : b.color
          , M = (0,
        r.useRef)(null)
          , A = (0,
        r.useMemo)( () => new n.Quaternion, [])
          , E = (0,
        r.useRef)(null)
          , R = (0,
        s.useReducedMotion)()
          , k = (0,
        r.useMemo)( () => {
            let e = document.createElement("canvas");
            e.width = e.height = 256;
            let t = e.getContext("2d");
            t && (0,
            p.drawPoiIcon)(t, l, y, e.width);
            let r = document.createElement("canvas");
            r.width = 768,
            r.height = 144;
            let i = r.getContext("2d");
            i && (i.fillStyle = "#17191dd9",
            i.beginPath(),
            i.roundRect(4, 4, 760, 136, 20),
            i.fill(),
            i.textAlign = "center",
            i.textBaseline = "middle",
            i.fillStyle = "#f7f5ef",
            i.font = '600 44px "Arial Narrow", Arial, sans-serif',
            i.fillText(f, 384, y ? 50 : 72, 716),
            y && (i.font = "600 29px Arial, sans-serif",
            i.fillStyle = o.POI_LOCKED_COLOR,
            i.fillText(x, 384, 102, 716)));
            let a = new n.CanvasTexture(e)
              , s = new n.CanvasTexture(r);
            return a.minFilter = s.minFilter = n.LinearFilter,
            a.colorSpace = s.colorSpace = n.SRGBColorSpace,
            {
                icon: a,
                label: s
            }
        }
        , [l, y, f, x]);
        (0,
        r.useEffect)( () => () => {
            k.icon.dispose(),
            k.label.dispose()
        }
        , [k]);
        let T = (0,
        r.useMemo)( () => u(g.radius, g.height), [g.radius, g.height]);
        (0,
        r.useEffect)( () => () => d(T), [T]);
        let P = (0,
        r.useMemo)( () => (function(e, t, r, i=!1) {
            let o = {
                uColor: {
                    value: new n.Color(e)
                },
                uCore: {
                    value: new n.Color(e).lerp(new n.Color("#f4fcff"), .88)
                },
                uRadius: {
                    value: t
                },
                uHeight: {
                    value: r
                },
                uTime: {
                    value: 0
                },
                uStrength: {
                    value: i ? .42 : 1
                }
            }
              , a = e => new n.ShaderMaterial({
                ...c,
                uniforms: o,
                defines: {
                    [e]: 1
                },
                vertexShader: h,
                fragmentShader: m,
                transparent: !0,
                toneMapped: !1,
                side: "RIMS" === e ? n.FrontSide : n.DoubleSide,
                forceSinglePass: !0
            });
            return {
                base: a("BASE"),
                rims: a("RIMS"),
                field: a("FIELD"),
                uniforms: o
            }
        }
        )(y ? S : b.emission, g.radius, g.height, y), [S, b.emission, g.radius, g.height, y]);
        return (0,
        r.useEffect)( () => () => {
            P.base.dispose(),
            P.rims.dispose(),
            P.field.dispose()
        }
        , [P]),
        (0,
        i.useFrame)( ({camera: t, clock: r}) => {
            v && (M.current && (M.current.visible = !a.poiOverlayRegistry.owns(e),
            M.current.parent.getWorldQuaternion(A),
            M.current.quaternion.copy(A.invert()).multiply(t.quaternion)),
            E.current && (E.current.material.uniforms.uTime.value = R || y ? 0 : r.elapsedTime))
        }
        ),
        (0,
        t.jsxs)("group", {
            name: `poi:${e}`,
            position: g.position,
            visible: v,
            children: [(0,
            t.jsx)("mesh", {
                geometry: T.base,
                material: P.base
            }), (0,
            t.jsx)("mesh", {
                ref: E,
                geometry: T.field,
                material: P.field
            }), (0,
            t.jsx)("mesh", {
                geometry: T.rims,
                material: P.rims
            }), (0,
            t.jsxs)("group", {
                ref: M,
                position: [0, o.POI_ANCHOR_HEIGHT, 0],
                children: [(0,
                t.jsxs)("mesh", {
                    children: [(0,
                    t.jsx)("planeGeometry", {
                        args: [o.POI_WORLD_SIZE, o.POI_WORLD_SIZE]
                    }), (0,
                    t.jsx)("meshBasicMaterial", {
                        ...c,
                        map: k.icon,
                        transparent: !0,
                        toneMapped: !1
                    })]
                }), (0,
                t.jsxs)("mesh", {
                    position: [0, -1.1, 0],
                    children: [(0,
                    t.jsx)("planeGeometry", {
                        args: [3.2, .6]
                    }), (0,
                    t.jsx)("meshBasicMaterial", {
                        ...c,
                        map: k.label,
                        transparent: !0,
                        toneMapped: !1
                    })]
                })]
            })]
        })
    }
    ], 634247)
}
, 871747, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(593922)
      , i = e.i(634247);
    e.s(["RaceMarker", 0, function({course: e, visible: n, locked: o=!1, lockLabel: a}) {
        return (0,
        t.jsx)(i.PoiMarker, {
            id: `race:${e.id}`,
            kind: "race",
            name: e.name,
            marker: (0,
            r.markerForCourse)(e),
            visible: n,
            locked: o,
            lockLabel: a
        })
    }
    ])
}
, 794396, 165825, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(28276)
      , n = e.i(353198)
      , o = e.i(60650)
      , a = e.i(353937)
      , s = e.i(617317)
      , l = e.i(106258)
      , c = e.i(404961)
      , u = e.i(809886)
      , d = e.i(260095)
      , h = e.i(869488)
      , m = e.i(621599);
    function p({entries: e}) {
        let i = (0,
        r.useContext)(d.TrackWorldContext)
          , n = (0,
        l.useSimStore)(u.activeMapId)
          , o = (0,
        r.useMemo)( () => [...e].sort( (e, t) => e.place - t.place), [e])
          , a = (0,
        m.useResultsStageClear)("podium");
        return i ? (0,
        t.jsx)(h.ActivityStage, {
            entries: o,
            layout: "results",
            clear: a,
            world: i,
            view: (0,
            c.resolveMap)(n).views.lobby
        }) : null
    }
    e.s(["MatchStage", 0, p], 165825);
    var f = e.i(625965);
    function g(e, t) {
        let r = n.DRONE_IDS.includes(e.drone) ? e.drone : n.DEFAULT_DRONE;
        if (e.self && !e.palette) {
            let e = (0,
            a.equippedDroneSkin)(t, r);
            return "factory" === e ? {
                drone: r,
                skin: o.STAND_IN_SKIN
            } : {
                drone: r,
                skin: e
            }
        }
        let i = (0,
        o.seatSkin)(r, e.skin, e.palette);
        return {
            drone: r,
            skin: i.id,
            skinOverride: i
        }
    }
    e.s(["LiveMatchStage", 0, function() {
        let e = (0,
        s.useRaceScreen)(e => e.screen)
          , n = (0,
        s.useMatchRace)(e => e.course)
          , o = (0,
        s.useMatchRace)(e => e.roster)
          , a = (0,
        s.useMatchRace)(e => e.self)
          , c = (0,
        s.useMatchRace)(e => e.seat)
          , u = (0,
        s.useMatchRace)(e => e.standings)
          , d = (0,
        l.useSimStore)(e => e.settings.drone.skins)
          , h = (0,
        r.useMemo)( () => n ? (0,
        i.getTimeAttackDoc)(n) : null, [n])
          , m = (0,
        r.useMemo)( () => {
            if (!h)
                return [];
            let e = (0,
            s.raceSeats)({
                roster: o,
                self: a,
                seat: c
            });
            return (0,
            s.liveRows)(e, u, null, 0).filter(e => e.position <= 4).map(e => ({
                key: e.key,
                ...g(e, d),
                place: e.place ?? e.position,
                tag: (0,
                t.jsx)(f.PodiumTag, {
                    place: e.place ?? e.position,
                    name: e.name,
                    self: e.self,
                    seat: e.seat
                })
            }))
        }
        , [h, o, a, c, u, d]);
        return h && "podium" === e && m.length ? (0,
        t.jsx)(p, {
            start: h.spawn,
            entries: m
        }) : null
    }
    , "seatPaint", 0, g], 794396)
}
, 561424, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(94800)
      , n = e.i(790504)
      , o = e.i(617317)
      , a = e.i(905289)
      , s = e.i(277885);
    e.s(["RaceTrails", 0, function({renderer: e}) {
        let[l,c] = (0,
        r.useState)([])
          , u = (0,
        o.useRaceScreen)(e => "podium" === e.screen);
        return ((0,
        i.useFrame)( () => {
            let t = e.current?.racers;
            if (!t) {
                l.length && c([]);
                return
            }
            (t.size !== l.length || l.some(e => t.get(e.seat) !== e)) && c([...t.values()])
        }
        , -.5),
        u) ? null : (0,
        t.jsx)(t.Fragment, {
            children: l.map(e => (0,
            t.jsx)(s.GhostTrail, {
                target: e.target,
                color: (0,
                a.racerColor)(e.seat),
                coreColor: (0,
                a.racerColor)(e.seat),
                look: n.SOLID_GHOST_TRAIL_LOOK,
                fadeRef: e.fade,
                advancing: !0,
                resetDistance: 20
            }, e.seat))
        })
    }
    ])
}
, 807845, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(94800)
      , n = e.i(190072)
      , o = e.i(483359);
    let a = 40 * Math.PI / 180;
    function s(e, t, r, i, n, o) {
        let a = n * n
          , s = a * n;
        return o.copy(e).multiplyScalar(2 * s - 3 * a + 1).addScaledVector(t, s - 2 * a + n).addScaledVector(r, -2 * s + 3 * a).addScaledVector(i, s - a)
    }
    var l = e.i(106258);
    let c = `
#include <common>
#include <logdepthbuf_pars_vertex>
attribute vec3 aTangent;
attribute float aSide;
attribute float aArc;
uniform float uHalfWidth;
uniform float uPixelSpread;
varying float vSide;
varying float vArc;
varying float vDist;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vec3 toCam = cameraPosition - world.xyz;
  float dist = length(toCam);
  vec3 dir = normalize(mat3(modelMatrix) * aTangent);
  vec3 across = cross(toCam, dir);
  if (dot(across, across) < 1e-8) across = cross(vec3(0.0, 1.0, 0.0), dir);
  if (dot(across, across) < 1e-8) across = vec3(1.0, 0.0, 0.0);
  float width = max(uHalfWidth, dist * uPixelSpread);
  world.xyz += normalize(across) * aSide * width;
  vSide = aSide;
  vArc = aArc;
  vDist = dist;
  gl_Position = projectionMatrix * viewMatrix * world;
  #include <logdepthbuf_vertex>
}
`
      , u = `
#include <common>
#include <logdepthbuf_pars_fragment>
uniform vec3 uColor;
uniform vec3 uCore;
uniform float uTime;
uniform float uOpacity;
uniform float uFadeStart;
uniform float uFadeEnd;
varying float vSide;
varying float vArc;
varying float vDist;
void main() {
  float x = abs(vSide);
  float body = 1.0 - smoothstep(0.55, 1.0, x);
  float core = 1.0 - smoothstep(0.0, 0.4, x);
  // A soft pulse travelling the flying direction.
  float wave = fract(vArc / 14.0 - uTime * 0.55);
  float pulse = smoothstep(0.0, 0.2, wave) * (1.0 - smoothstep(0.2, 0.45, wave));
  vec3 col = mix(uColor, uCore, clamp(core * 0.65 + pulse * 0.35, 0.0, 1.0));
  // Further away is fainter, and nothing smears across the lens up close.
  float fade = (1.0 - smoothstep(uFadeStart, uFadeEnd, vDist)) * smoothstep(0.3, 1.0, vDist);
  float alpha = body * fade * uOpacity * (0.8 + 0.2 * pulse);
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(col, alpha);
  #include <logdepthbuf_fragment>
}
`;
    e.s(["RacingLine", 0, function({course: e, gateIndex: d}) {
        let h = (0,
        l.useSimStore)(e => e.settings.graphics.drawDistance)
          , {line: m, geometry: p} = (0,
        r.useMemo)( () => (function(e) {
            let t = function(e) {
                let t = [new n.Vector3(...function(e) {
                    let[t,r,i] = e.spawn.position;
                    return [t, r - .02, i]
                }(e)), ...e.gates.map(e => new n.Vector3(...function(e) {
                    let {up: t} = (0,
                    o.gateBasis)(e)
                      , r = Math.max(0, Math.min(1, t[1]))
                      , i = .38 * e.size[1] * r
                      , [n,a,s] = e.position;
                    return [n - t[0] * i, a - t[1] * i, s - t[2] * i]
                }(e)))]
                  , r = []
                  , i = (e, t) => t.clone().sub(e).normalize();
                if (r.push(t.length > 1 ? i(t[0], t[1]) : new n.Vector3(0,0,-1)),
                e.gates.forEach( (e, s) => {
                    let l = t[s + 1]
                      , {normal: c} = (0,
                    o.gateBasis)(e)
                      , u = new n.Vector3(-c[0],-c[1],-c[2])
                      , d = i(t[s], l)
                      , h = t[s + 2];
                    h && d.add(i(l, h)),
                    r.push(function(e, t) {
                        if (1e-8 > e.lengthSq())
                            return t.clone();
                        let r = e.clone().normalize()
                          , i = r.dot(t);
                        if (i >= Math.cos(a))
                            return r;
                        let n = r.addScaledVector(t, -i);
                        return 1e-8 > n.lengthSq() ? t.clone() : n.normalize().multiplyScalar(Math.sin(a)).addScaledVector(t, Math.cos(a))
                    }(d, u))
                }
                ),
                e.gates.length > 0) {
                    let e = r[r.length - 1];
                    t.push(t[t.length - 1].clone().addScaledVector(e, 3)),
                    r.push(e.clone())
                }
                let l = []
                  , c = []
                  , u = new n.Vector3
                  , d = new n.Vector3
                  , h = new n.Vector3
                  , m = new n.Vector3;
                for (let e = 0; e < t.length - 1; e++) {
                    let i = t[e]
                      , o = t[e + 1]
                      , a = function(e, t, r) {
                        let i = Math.acos(Math.max(-1, Math.min(1, t.dot(r))));
                        return e * (i < 1e-4 ? 1 : 2 * Math.tan(i / 4) / Math.sin(i / 2)) * .65
                    }(i.distanceTo(o), r[e], r[e + 1]);
                    u.copy(r[e]).multiplyScalar(a),
                    d.copy(r[e + 1]).multiplyScalar(a);
                    let p = 0;
                    m.copy(i);
                    for (let e = 1; e <= 8; e++)
                        s(i, u, o, d, e / 8, h),
                        p += h.distanceTo(m),
                        m.copy(h);
                    let f = Math.max(1, Math.ceil(p / .4));
                    c[e] = l.length;
                    for (let e = 0; e < f; e++)
                        l.push(s(i, u, o, d, e / f, new n.Vector3))
                }
                c[t.length - 1] = l.length,
                l.push(t[t.length - 1].clone());
                let p = l.length
                  , f = new Float32Array(3 * p)
                  , g = new Float32Array(3 * p)
                  , v = new Float32Array(p)
                  , y = new n.Vector3;
                for (let e = 0; e < p; e++) {
                    let t = l[e];
                    f[3 * e] = t.x,
                    f[3 * e + 1] = t.y,
                    f[3 * e + 2] = t.z;
                    let r = l[Math.max(0, e - 1)]
                      , i = l[Math.min(p - 1, e + 1)];
                    y.subVectors(i, r),
                    1e-12 > y.lengthSq() && y.set(0, 0, -1),
                    y.normalize(),
                    g[3 * e] = y.x,
                    g[3 * e + 1] = y.y,
                    g[3 * e + 2] = y.z,
                    v[e] = 0 === e ? 0 : v[e - 1] + t.distanceTo(l[e - 1])
                }
                return {
                    count: p,
                    points: f,
                    tangents: g,
                    arc: v,
                    gateSample: e.gates.map( (e, t) => c[t + 1])
                }
            }(e)
              , r = 2 * t.count
              , i = new Float32Array(3 * r)
              , l = new Float32Array(3 * r)
              , c = new Float32Array(r)
              , u = new Float32Array(r);
            for (let e = 0; e < t.count; e++)
                for (let[r,n] of [[2 * e, -1], [2 * e + 1, 1]])
                    i.set(t.points.subarray(3 * e, 3 * e + 3), 3 * r),
                    l.set(t.tangents.subarray(3 * e, 3 * e + 3), 3 * r),
                    c[r] = n,
                    u[r] = t.arc[e];
            let d = new Uint32Array((t.count - 1) * 6);
            for (let e = 0, r = 0; e < t.count - 1; e++) {
                let t = 2 * e;
                d[r++] = t,
                d[r++] = t + 1,
                d[r++] = t + 2,
                d[r++] = t + 1,
                d[r++] = t + 3,
                d[r++] = t + 2
            }
            let h = new n.BufferGeometry;
            return h.setAttribute("position", new n.BufferAttribute(i,3)),
            h.setAttribute("aTangent", new n.BufferAttribute(l,3)),
            h.setAttribute("aSide", new n.BufferAttribute(c,1)),
            h.setAttribute("aArc", new n.BufferAttribute(u,1)),
            h.setIndex(new n.BufferAttribute(d,1)),
            h.computeBoundingSphere(),
            {
                line: t,
                geometry: h
            }
        }
        )(e), [e])
          , f = (0,
        r.useMemo)( () => new n.ShaderMaterial({
            uniforms: {
                uColor: {
                    value: new n.Color("#e5ff54")
                },
                uCore: {
                    value: new n.Color("#f7f5ef")
                },
                uHalfWidth: {
                    value: .05
                },
                uPixelSpread: {
                    value: 0
                },
                uTime: {
                    value: 0
                },
                uOpacity: {
                    value: .7
                },
                uFadeStart: {
                    value: 4
                },
                uFadeEnd: {
                    value: 70
                }
            },
            vertexShader: c,
            fragmentShader: u,
            transparent: !0,
            depthWrite: !1,
            depthTest: !0,
            toneMapped: !1,
            blending: n.NormalBlending,
            side: n.DoubleSide,
            fog: !1
        }), []);
        return (0,
        r.useEffect)( () => () => p.dispose(), [p]),
        (0,
        r.useEffect)( () => () => f.dispose(), [f]),
        (0,
        r.useEffect)( () => {
            let e = d <= 0 ? 0 : m.gateSample[Math.min(d, m.gateSample.length) - 1] ?? 0;
            p.setDrawRange(6 * e, 6 * Math.max(0, m.count - 1 - e))
        }
        , [p, m, d]),
        (0,
        i.useFrame)( ({camera: e, size: t, clock: r}) => {
            let i = f.uniforms;
            i.uTime.value = r.elapsedTime,
            i.uFadeEnd.value = Math.min(70, .5 * h);
            let o = e instanceof n.PerspectiveCamera ? e.fov : 90;
            i.uPixelSpread.value = 1.5 * Math.tan(o * Math.PI / 360) / Math.max(1, t.height)
        }
        ),
        (0,
        t.jsx)("mesh", {
            geometry: p,
            material: f,
            frustumCulled: !1
        })
    }
    ], 807845)
}
, 76569, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(436007)
      , n = e.i(471566)
      , o = e.i(171204)
      , a = e.i(983040)
      , s = e.i(106258);
    function l({document: e}) {
        let {world: t, rapier: c} = (0,
        i.useRapier)()
          , u = (0,
        r.useRef)(null)
          , d = (0,
        r.useRef)(0);
        return (0,
        r.useEffect)( () => {
            let r = new n.MovingParts(c,t,e);
            return u.current = r,
            d.current = 0,
            o.prefabPhysicsClocks.set(e, r.clock),
            a.livePrefabClock.current = r.clock.current,
            () => {
                r.remove(),
                u.current === r && (u.current = null),
                o.prefabPhysicsClocks.get(e) === r.clock && (o.prefabPhysicsClocks.delete(e),
                a.livePrefabClock.current = void 0)
            }
        }
        , [c, t, e]),
        (0,
        i.useBeforePhysicsStep)(e => {
            "impactCinematic" !== s.useSimStore.getState().phase && u.current?.beforeStep((d.current + 1) * e.timestep)
        }
        ),
        (0,
        i.useAfterPhysicsStep)(e => {
            let t = u.current;
            t && ("impactCinematic" !== s.useSimStore.getState().phase && t.afterStep(++d.current * e.timestep),
            a.livePrefabClock.current = t.clock.current)
        }
        ),
        null
    }
    var c = e.i(319202)
      , u = e.i(211090);
    function d({world: e}) {
        let {world: t, rapier: n} = (0,
        i.useRapier)()
          , o = (0,
        r.useMemo)( () => (0,
        c.staticColliders)(e), [e]);
        return (0,
        r.useEffect)( () => {
            let e = (0,
            c.createStaticBody)(n, t, o);
            return () => {
                t.getRigidBody(e.handle) && t.removeRigidBody(e)
            }
        }
        , [n, t, o]),
        null
    }
    e.s(["SimEnvironment", 0, function({world: e, quality: r, shadows: i, drawDistance: n, focus: o, movingColliders: a=!0, still: s=!1}) {
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(u.SimEnvironmentView, {
                world: e,
                quality: r,
                shadows: i,
                drawDistance: n,
                focus: o,
                still: s
            }), (0,
            t.jsx)(d, {
                world: e
            }), a && !s && e.editorDocument && (0,
            t.jsx)(l, {
                document: e.editorDocument
            })]
        })
    }
    ], 76569)
}
, 938848, 218384, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(94800)
      , n = e.i(987808)
      , o = e.i(483359)
      , a = e.i(933031);
    e.s(["ReplayRaceGates", 0, function({attack: e, frames: s, time: l}) {
        let c = (0,
        r.useMemo)( () => (function(e, t) {
            let r = t.map( () => 1 / 0);
            if (!t.length)
                return r;
            r[0] = 0;
            let i = 1;
            for (let n = 1; n < e.length && i < t.length; n++) {
                let a = e[n - 1]
                  , s = e[n];
                if (a.segment !== s.segment)
                    continue;
                let l = {
                    x: a.position[0],
                    y: a.position[1],
                    z: a.position[2]
                }
                  , c = {
                    x: s.position[0],
                    y: s.position[1],
                    z: s.position[2]
                }
                  , u = -1;
                for (; i < t.length; ) {
                    let e = (0,
                    o.gateCrossingFraction)(t[i], l, c);
                    if (null === e || e < u)
                        break;
                    u = e,
                    r[i] = Math.max(r[i - 1], a.t + (s.t - a.t) * e),
                    i++
                }
            }
            return r
        }
        )(s, e.gates), [s, e])
          , [u,d] = (0,
        r.useState)(1);
        (0,
        i.useFrame)( () => {
            var e;
            let t, r = (e = l.current,
            (t = c.findIndex(t => t > e)) < 0 ? c.length : t);
            r !== u && d(r)
        }
        , -2.5);
        let h = (0,
        r.useMemo)( () => (0,
        n.visibleTimeAttackGates)({
            attacks: [e],
            mapId: e.mapId,
            activeId: e.id,
            gateIndex: u
        }), [e, u]);
        return (0,
        t.jsx)(t.Fragment, {
            children: h.map(e => (0,
            t.jsx)(a.HolographicGateView, {
                gate: e.gate,
                status: "upcoming" === e.status ? "completed" : e.status
            }, e.gate.id))
        })
    }
    ], 938848);
    var s = e.i(983040)
      , l = e.i(171204)
      , c = e.i(260095);
    e.s(["ReplayPrefabMotion", 0, function({frames: e, time: t}) {
        let n = (0,
        r.useContext)(c.TrackWorldContext)
          , o = n?.editorDocument
          , a = (0,
        r.useRef)(void 0)
          , u = (0,
        r.useRef)(0);
        return (0,
        r.useEffect)( () => {
            if (o)
                return l.prefabReplayClocks.set(o, a),
                () => {
                    l.prefabReplayClocks.get(o) === a && l.prefabReplayClocks.delete(o)
                }
        }
        , [o]),
        (0,
        i.useFrame)( () => {
            u.current = (0,
            s.findReplayIndex)(e, t.current, u.current),
            a.current = (0,
            s.sampleReplayPrefabTime)(e, t.current, u.current)
        }
        , -2.5),
        null
    }
    ], 218384)
}
, 288936, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , i = e.i(382897)
      , n = e.i(94800)
      , o = e.i(190072);
    let a = [{
        center: [48, 0, 5],
        radius: 70,
        height: 32,
        lookAtHeight: 0,
        startAngle: .4,
        fov: 55,
        speed: .012
    }, {
        center: [-51, 0, 37.2],
        radius: 28.2,
        height: 9.6,
        lookAtHeight: 5.4,
        startAngle: .75,
        fov: 58,
        speed: .012
    }, {
        center: [-15, 0, -15],
        radius: 105,
        height: 60,
        lookAtHeight: 8,
        startAngle: -1.1,
        fov: 52,
        speed: .012
    }]
      , s = new o.Vector3
      , l = new o.Vector3;
    e.s(["ShowcaseCamera", 0, function({view: e, sweep: c=!1, cinematic: u=!1}) {
        let d = u ? a[0] : e
          , h = (0,
        r.useRef)(-1)
          , m = (0,
        r.useRef)(null)
          , p = (0,
        r.useRef)(d.startAngle)
          , f = (0,
        r.useRef)(0)
          , g = (0,
        r.useRef)(!1);
        (0,
        r.useEffect)( () => {
            let e = window.matchMedia("(prefers-reduced-motion: reduce)")
              , t = () => {
                g.current = e.matches
            }
            ;
            return t(),
            e.addEventListener("change", t),
            () => e.removeEventListener("change", t)
        }
        , []);
        let v = (0,
        r.useRef)(new o.Vector3)
          , y = (0,
        r.useRef)(new o.Vector3)
          , w = (0,
        r.useRef)(!1);
        return (0,
        n.useFrame)( (t, r) => {
            let i = m.current;
            if (!i)
                return;
            g.current || (f.current += Math.min(r, .1));
            let n = Math.floor(f.current / 18) % a.length
              , o = u ? a[n] : e;
            if (u) {
                h.current !== n && (w.current = !1,
                h.current = n,
                i.fov = o.fov,
                i.updateProjectionMatrix());
                let e = f.current % 18 / 18;
                p.current = o.startAngle + (e - .5) * .18
            } else
                g.current || (c ? p.current = o.startAngle + .08 * Math.sin(.08 * f.current) : p.current += r * o.speed);
            if (s.set(o.center[0] + Math.cos(p.current) * o.radius, o.center[1] + o.height, o.center[2] + Math.sin(p.current) * o.radius),
            l.set(o.center[0], o.center[1] + o.lookAtHeight, o.center[2]),
            w.current) {
                let e = 1 - Math.exp(-r / (.7 / 3));
                v.current.lerp(s, e),
                y.current.lerp(l, e),
                i.fov += (o.fov - i.fov) * e,
                i.updateProjectionMatrix()
            } else
                v.current.copy(s),
                y.current.copy(l),
                w.current = !0;
            i.position.copy(v.current),
            i.lookAt(y.current)
        }
        ),
        (0,
        t.jsx)(i.PerspectiveCamera, {
            ref: m,
            makeDefault: !0,
            fov: d.fov,
            near: .1,
            far: 2e3
        })
    }
    ])
}
, 689812, 191816, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(190072)
      , i = e.i(271645);
    function n({color: e, length: o=2.4, cross: a=!1}) {
        let s = (0,
        i.useMemo)( () => {
            let e = -o / 2
              , t = o / 2
              , i = t - .55
              , n = new r.Shape;
            return n.moveTo(-.09, e),
            n.lineTo(.09, e),
            n.lineTo(.09, i),
            n.lineTo(.4, i),
            n.lineTo(0, t),
            n.lineTo(-.4, i),
            n.lineTo(-.09, i),
            n.closePath(),
            new r.ExtrudeGeometry(n,{
                depth: .045,
                bevelEnabled: !1
            }).translate(0, 0, -.0225)
        }
        , [o]);
        return (0,
        i.useEffect)( () => () => s.dispose(), [s]),
        (0,
        t.jsxs)("group", {
            rotation: [-Math.PI / 2, 0, 0],
            children: [(0,
            t.jsx)("mesh", {
                geometry: s,
                children: (0,
                t.jsx)("meshBasicMaterial", {
                    color: e,
                    toneMapped: !1
                })
            }), a && (0,
            t.jsx)("mesh", {
                geometry: s,
                rotation: [0, Math.PI / 2, 0],
                children: (0,
                t.jsx)("meshBasicMaterial", {
                    color: e,
                    toneMapped: !1
                })
            })]
        })
    }
    e.s(["FlightDirectionArrow", 0, n], 191816),
    e.s(["SpawnMarker", 0, function({position: e, yaw: i, active: o, color: a="#72e2c1", activeColor: s="#a7ffe3", radius: l=1.2}) {
        return (0,
        t.jsxs)("group", {
            position: e,
            rotation: [0, i, 0],
            children: [(0,
            t.jsxs)("mesh", {
                position: [0, .04, 0],
                rotation: [-Math.PI / 2, 0, 0],
                children: [(0,
                t.jsx)("circleGeometry", {
                    args: [l, 32]
                }), (0,
                t.jsx)("meshBasicMaterial", {
                    color: o ? s : a,
                    transparent: !0,
                    opacity: o ? .45 : .22,
                    depthWrite: !1,
                    side: r.DoubleSide,
                    toneMapped: !1
                })]
            }), (0,
            t.jsx)("group", {
                position: [0, .12, -.5],
                children: (0,
                t.jsx)(n, {
                    color: o ? "#ffffff" : a
                })
            })]
        })
    }
    ], 689812)
}
, 230753, 343998, 580864, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(870895)
      , i = e.i(771607)
      , n = e.i(271645)
      , o = e.i(28276)
      , a = e.i(987808)
      , s = e.i(609223)
      , l = e.i(905289)
      , c = e.i(106258)
      , u = e.i(809886)
      , d = e.i(478093)
      , h = e.i(699915)
      , m = e.i(94800)
      , p = e.i(436007)
      , f = e.i(266246)
      , g = e.i(961731)
      , v = e.i(933031)
      , y = e.i(260095);
    let w = {
        raceGate: !0
    };
    function b(e) {
        let t = e.parent();
        return !t || t.isFixed() && t.userData?.raceGate !== !0
    }
    function x({gate: e, status: r, active: i=!0}) {
        let o = (0,
        n.useContext)(y.TrackWorldContext)
          , {world: a} = (0,
        p.useRapier)()
          , s = (0,
        v.useTrackSurfaceProbe)()
          , [l,c] = (0,
        n.useState)(null)
          , u = (0,
        n.useRef)(null);
        (0,
        n.useEffect)( () => {
            u.current = null
        }
        , [o, e]),
        (0,
        m.useFrame)( () => {
            let t;
            if (u.current === o)
                return;
            let r = (t = new f.Ray({
                x: 0,
                y: 0,
                z: 0
            },{
                x: 0,
                y: -1,
                z: 0
            }),
            (e, r, i) => {
                Object.assign(t.origin, {
                    x: e,
                    y: i,
                    z: r
                });
                let n = a.castRay(t, 400, !0, f.QueryFilterFlags.EXCLUDE_SENSORS, void 0, void 0, void 0, b);
                return n ? i - n.timeOfImpact : null
            }
            );
            null !== r(e.position[0], e.position[2], e.position[1]) && (u.current = o,
            c({
                world: o,
                probe: r
            }))
        }
        );
        let d = l && l.world === o ? l.probe : s
          , h = (0,
        n.useMemo)( () => (0,
        g.raceGateColliders)(e, (0,
        g.raceGateKit)(e, e.color, d)), [e, d]);
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)("group", {
                visible: i,
                children: (0,
                t.jsx)(v.HolographicGateView, {
                    gate: e,
                    status: r,
                    active: i,
                    probe: d
                })
            }), i && (0,
            t.jsx)(p.RigidBody, {
                type: "fixed",
                colliders: !1,
                userData: w,
                children: h.map( (e, r) => (0,
                t.jsx)(p.CuboidCollider, {
                    args: e.halfExtents,
                    position: e.position,
                    rotation: e.rotation
                }, r))
            })]
        })
    }
    e.s(["HolographicGate", 0, x], 343998);
    var S = e.i(871747)
      , M = e.i(807845)
      , A = e.i(511590);
    e.s(["TimeAttackCourse", 0, function() {
        let e = (0,
        c.useSimStore)(u.activeMapId)
          , m = (0,
        c.useSimStore)(e => e.activeTimeAttackId)
          , p = (0,
        A.useActivityEntrances)()
          , f = (0,
        c.useSimStore)(e => e.timeAttackGateIndex)
          , g = (0,
        c.useSimStore)(e => e.lessonAuthoringEpoch)
          , v = (0,
        c.useSimStore)(e => e.phase)
          , y = (0,
        c.useSimStore)(e => e.raceRun)
          , w = (0,
        c.useSimStore)(i.confirmedXp)
          , b = (0,
        c.useSimStore)(e => e.droneGifts)
          , E = (0,
        r.racesUnlocked)(w)
          , R = (0,
        c.useSimStore)(e => e.timeAttackRunning)
          , k = (0,
        c.useSimStore)(e => e.settings.graphics.showRacingLine)
          , T = (0,
        n.useMemo)( () => [...(0,
        o.listTimeAttacks)()], [g])
          , P = (0,
        n.useMemo)( () => m && y ? (0,
        a.visibleTimeAttackGates)({
            attacks: [y.course],
            mapId: e,
            activeId: m,
            gateIndex: f
        }) : [], [y, e, m, f])
          , C = "flying" === v || "paused" === v || "raceFinishing" === v;
        return (0,
        t.jsxs)(t.Fragment, {
            children: [T.filter(t => t.mapId === e && t.gates.length >= 2).map(e => {
                let i = (0,
                s.raceDroneLock)(e, w, b);
                return (0,
                t.jsx)(S.RaceMarker, {
                    course: e,
                    visible: p,
                    locked: !E || !!i,
                    lockLabel: i ? (0,
                    s.raceLockLabel)(i, E ? null : r.RACE_UNLOCK_LEVEL) : void 0
                }, e.id)
            }
            ), C && "raceFinishing" !== v && k && y && (0,
            t.jsx)(M.RacingLine, {
                course: y.course,
                gateIndex: f
            }), C && P.map(e => (0,
            t.jsx)(x, {
                gate: e.gate,
                status: "upcoming" === e.status ? "completed" : e.status
            }, `${e.attackId}:${e.gate.id}`)), (0,
            d.isTimeAttackGhostMounted)({
                activeTimeAttackId: m,
                phase: v,
                timeAttackRunning: R,
                hasClip: !!y?.ghosts.length
            }) && y?.ghosts.map( (e, r) => (0,
            t.jsx)(h.GhostDrone, {
                color: (0,
                l.racerColor)(r),
                frames: e.frames,
                duration: e.duration,
                skinOverride: e.entry.appearance?.skin,
                solid: !0,
                sound: "race"
            }, `${y.id}:${e.entry.attemptId}:${e.entry.replayRevision}`))]
        })
    }
    ], 230753);
    var E = e.i(135933)
      , R = e.i(593922)
      , k = e.i(634247);
    e.s(["ArenaMarkers", 0, function() {
        let e = (0,
        c.useSimStore)(u.activeMapId)
          , a = (0,
        c.useSimStore)(e => e.lessonAuthoringEpoch)
          , s = (0,
        A.useActivityEntrances)()
          , l = (0,
        c.useSimStore)(e => (0,
        r.tdmUnlocked)((0,
        i.confirmedXp)(e)))
          , d = (0,
        n.useMemo)( () => (0,
        o.listArenas)().filter(t => t.mapId === e), [a, e]);
        return (0,
        t.jsx)(t.Fragment, {
            children: d.map(e => (0,
            t.jsx)(k.PoiMarker, {
                id: `arena:${e.id}`,
                kind: "tdm",
                name: e.name,
                marker: (0,
                R.markerForCourse)((0,
                E.arenaEntrance)(e)),
                visible: s,
                locked: !l
            }, e.id))
        })
    }
    ], 580864)
}
, 349884, e => {
    "use strict";
    var t = e.i(190072);
    let r = 180 / Math.PI
      , i = new t.Quaternion
      , n = new t.Euler;
    e.s(["writeAttitudeTelemetry", 0, function(e, t, o, a, s) {
        let l, c, u, d = (i.set(t, o, a, s),
        n.setFromQuaternion(i, "YXZ"),
        l = n.x * r,
        c = -n.z * r,
        (u = -n.y * r % 360) < 0 && (u += 360),
        {
            rollDeg: c,
            pitchDeg: l,
            headingDeg: u
        });
        e.rollDeg = d.rollDeg,
        e.pitchDeg = d.pitchDeg,
        e.headingDeg = d.headingDeg
    }
    ])
}
, 947077, e => {
    "use strict";
    var t = e.i(306871);
    e.s(["playBoltShots", 0, function(e, r) {
        if (!r?.list.length)
            return;
        let i = (0,
        t.boltShots)(r.list);
        if (e)
            for (let[t,r,n] of i)
                e.play("laser.shot", {
                    at: {
                        x: t,
                        y: r,
                        z: n
                    }
                })
    }
    ])
}
, 113640, e => {
    "use strict";
    let t = (e, t=0, r=1) => Math.min(r, Math.max(t, e))
      , r = 1.6 * Math.PI / 180
      , i = .4 * Math.PI / 180;
    e.s(["CameraFeel", 0, class {
        time = 0;
        rush = 0;
        wind = 0;
        pitch = 0;
        yaw = 0;
        roll = 0;
        fovPunch = 0;
        fireAge = 1 / 0;
        fireSide = 1;
        load = 0;
        kick = 0;
        primed = !1;
        joltAge = 1 / 0;
        joltAxes = [0, 0, 0];
        reset() {
            this.time = this.rush = this.wind = this.pitch = this.yaw = this.roll = 0,
            this.load = this.kick = 0,
            this.primed = !1,
            this.joltAge = this.fireAge = 1 / 0,
            this.fovPunch = 0
        }
        jolt([e,t,r]) {
            this.joltAge = 0,
            this.joltAxes[0] = e,
            this.joltAxes[1] = t,
            this.joltAxes[2] = r
        }
        fire(e) {
            this.fireAge = 0,
            this.fireSide = 0 === e ? -1 : 1
        }
        step(e, r, n, o, a, s) {
            let l, c;
            if (!Number.isFinite(e) || e <= 0 || e > .1)
                return void this.reset();
            this.time += e;
            let u = o ? t(n) : 0;
            this.primed || (this.load = u,
            this.primed = !0);
            let d = u - this.load;
            this.load += d * (1 - Math.exp(-e / .07)),
            this.kick += (.009 * d - this.kick) * (1 - Math.exp(-e / .09));
            let h = o ? (l = t((r - 12) / 23)) * l * (3 - 2 * l) : 0;
            this.rush += (h - this.rush) * (1 - Math.exp(-e / (h > this.rush ? .22 : .12)));
            let m = o ? (c = t((r - 8) / 14)) * c * (3 - 2 * c) : 0;
            this.wind += (m - this.wind) * (1 - Math.exp(-e / (m > this.wind ? .22 : .12)));
            let p = o ? 25e-5 * this.load + 65e-5 * this.rush : 0
              , f = t(a) ** 2 * .018
              , g = this.time
              , v = t(s);
            this.fireAge += e;
            let y = v * function(e) {
                if (!(e >= 0) || e >= .18)
                    return 0;
                let t = e < .025 ? e / .025 : (.18 - e) / .155;
                return t * t * (3 - 2 * t)
            }(this.fireAge);
            this.fovPunch = .015 * y,
            this.joltAge += e;
            let w = function(e) {
                if (!(e >= 0) || e >= .11)
                    return 0;
                let t = e / .022;
                return t * Math.exp(1 - t) * (1 - e / .11)
            }(this.joltAge)
              , [b,x,S] = this.joltAxes;
            this.pitch = v * (this.kick + p * Math.sin(61 * g) + f * Math.sin(43 * g + 1) + w * b) + y * i,
            this.yaw = v * (.6 * p * Math.sin(79 * g + 2) + .6 * f * Math.sin(53 * g + 2) + w * x),
            this.roll = v * (.8 * p * Math.sin(67 * g + 4) + .8 * f * Math.sin(37 * g + 3) + w * S) - y * i * .22 * this.fireSide
        }
    }
    , "feelFrame", 0, function(e, t) {
        t.still ? e.reset() : (null != t.fire && e.fire(t.fire),
        t.jolt && e.jolt(t.jolt),
        e.step(t.dt, t.speed, t.motor, t.airborne, t.impact, t.shake))
    }
    , "hitJolt", 0, function(e, i) {
        let n = r * (.7 + .6 * t(i));
        if (!e)
            return [.8 * n, 0, 0];
        let o = Math.hypot(e[0], e[1], e[2]) || 1
          , a = e[0] / o;
        return [-(e[2] / o) * n * .8, a * n * .5, -a * n * .8]
    }
    ])
}
, 322757, e => {
    "use strict";
    var t = e.i(579832)
      , r = e.i(584042)
      , i = e.i(247638);
    e.s(["hitTaken", 0, function(e, n=i.live.position) {
        (0,
        r.playHitTaken)((0,
        t.getDroneAudio)(), e, n),
        i.live.hitJolt = {
            id: i.live.hitJolt.id + 1,
            from: e.from ? [e.from[0], e.from[1], e.from[2]] : null,
            weight: e.weight
        }
    }
    ])
}
, 79983, e => {
    "use strict";
    var t = e.i(60650)
      , r = e.i(353198)
      , i = e.i(945999)
      , n = e.i(789788)
      , o = e.i(11871)
      , a = e.i(247800)
      , s = e.i(306871)
      , l = e.i(635525);
    class c {
        feed = {
            peers: [],
            status: "connecting",
            serverTime: 0,
            localTime: 0,
            clock: new l.PlaybackClock
        };
        roster = [];
        runs = new Map;
        chatWaiter = null;
        enemy = () => !1;
        lead = 0;
        flown = {
            step: NaN,
            at: 0
        };
        constructor(e, t, r, i) {
            this.feed.selfSessionId = e,
            i && (this.feed.looks = i),
            t && r && (this.feed.lobbyId = t,
            this.feed.chat = [],
            this.feed.sendChat = (e, t) => new Promise(i => {
                this.chatWaiter?.({
                    ok: !0
                }),
                this.chatWaiter = i,
                t ? r.unsay(t) : r.say(e, crypto.randomUUID()),
                setTimeout( () => {
                    this.chatWaiter === i && (this.chatWaiter = null,
                    i({
                        ok: !0
                    }))
                }
                , 3e3)
            }
            ))
        }
        setRoster(e, t=performance.now()) {
            this.roster = e;
            let r = this.feed.selfSessionId;
            for (let i of (this.feed.roster = e.filter(e => e.userId !== r).map(e => ({
                id: e.userId,
                userId: e.userId,
                name: e.name,
                admin: e.admin,
                mod: e.mod,
                badges: e.badges,
                xp: e.xp,
                ...e.label ? {
                    label: e.label
                } : {},
                ...void 0 === e.seat ? {} : {
                    seat: e.seat
                },
                ...void 0 === e.team ? {} : {
                    team: e.team
                }
            })),
            this.feed.peers))
                e.some(e => e.userId === i.id) || null !== i.leavingAt || (i.leavingAt = t)
        }
        setChat(e, t, r) {
            this.feed.chat && (this.feed.chat = e);
            let i = this.chatWaiter;
            this.chatWaiter = null,
            i?.(r ? {
                ok: !1,
                blocked: !0
            } : t ? {
                ok: !1,
                error: t
            } : {
                ok: !0
            })
        }
        snapshot(e, i=performance.now()) {
            let n = 1e3 / a.TICK_RATE
              , o = e.tick * n;
            this.feed.serverTime = o,
            this.feed.localTime = i,
            this.feed.snap = Math.max(this.feed.snap ?? e.tick, e.tick),
            this.lead = e.lead,
            this.feed.clock?.observe(o, i),
            this.feed.status = "connected";
            let c = this.feed.peers;
            for (let e = c.length - 1; e >= 0; e--)
                null !== c[e].leavingAt && i - c[e].leavingAt >= l.FADE_MS && c.splice(e, 1);
            for (let o of e.others) {
                let a = this.roster.find(t => (e.match ? t.seat : t.slot) === o.slot);
                if (!a || a.userId === this.feed.selfSessionId)
                    continue;
                let s = c.find(e => e.id === a.userId);
                if (4 & o.flags) {
                    s && null === s.leavingAt && (s.leavingAt = i);
                    continue
                }
                if (s)
                    (null !== s.leavingAt || i - s.receivedAt > l.STALE_MS) && (s.joinedAt = i - l.FADE_MS * (.5 - Math.sin(Math.asin(1 - 2 * Math.max(0, Math.min(1, (0,
                    l.presenceAlpha)(s, i)))) / 3)));
                else {
                    if (c.length >= l.MAX_PEERS)
                        continue;
                    s = {
                        id: a.userId,
                        userId: a.userId,
                        name: a.name,
                        admin: a.admin,
                        mod: a.mod,
                        badges: a.badges,
                        xp: a.xp,
                        ...e.match && void 0 !== a.seat ? {
                            seat: a.seat
                        } : {},
                        ...e.match && void 0 !== a.team ? {
                            team: a.team
                        } : {},
                        ...a.label ? {
                            label: a.label
                        } : {},
                        frames: [],
                        joinedAt: i,
                        receivedAt: i,
                        leavingAt: null,
                        clock: new l.PeerClock
                    },
                    c.push(s),
                    this.runs.set(s.id, (this.runs.get(s.id) ?? -1) + 1)
                }
                s.leavingAt = null,
                s.receivedAt = i,
                s.shownIn = e.tick;
                let u = (e.tick - o.age) * n;
                s.clock && (s.clock.lag = o.age * n);
                let d = s.frames.at(-1);
                if (d && u <= d.t)
                    continue;
                let h = this.runs.get(s.id) ?? 0;
                e.match ? h = o.segment ?? 0 : d && (u - d.t > l.MAX_INTERPOLATION_GAP_MS || Math.hypot(o.x - d.p[0], o.y - d.p[1], o.z - d.p[2]) > 20) && this.runs.set(s.id, ++h);
                let m = r.DRONE_IDS[o.drone] ?? r.DEFAULT_DRONE;
                s.frames.push({
                    t: u,
                    p: [o.x, o.y, o.z],
                    q: [o.qx, o.qy, o.qz, o.qw],
                    v: [o.vx, o.vy, o.vz],
                    run: h,
                    ...void 0 === o.life ? {} : {
                        life: o.life
                    },
                    throttle: o.throttle / 255,
                    armed: (1 & o.flags) != 0,
                    droneId: m,
                    droneSkin: a.skin ?? t.STAND_IN_SKIN,
                    palette: a.palette
                }),
                s.frames.length > 120 && s.frames.splice(0, s.frames.length - 120)
            }
            if (e.bolts?.length || e.hits?.length) {
                let t = this.feed.bolts ??= new s.ShownBolts;
                for (let r of e.bolts ?? [])
                    t.add(r, i);
                for (let r of e.hits ?? [])
                    t.hit(r)
            }
            this.feed.bolts?.prune(i)
        }
        enemiesOf(e, t) {
            void 0 !== t && (this.feed.seat = t),
            this.feed.team = e,
            this.enemy = t => this.roster.some(r => r.seat === t && void 0 !== r.team && r.team !== e);
            let r = new l.ShownLead;
            this.feed.ahead = (e, t) => Number.isNaN(this.flown.step) ? 0 : r.ease((0,
            l.boxLead)(this.flown.step + (e - this.flown.at) * i.STEPS_PER_MS, this.lead, t), e)
        }
        flying(e, t) {
            this.flown.step = e,
            this.flown.at = t
        }
        sight(e, t=performance.now()) {
            return (0,
            l.shotSight)(this.feed, e, this.enemy, t)
        }
        boltTargets(e, t=!1) {
            let a = []
              , s = (0,
            i.estimatedReady)(e.tick, this.lead)
              , c = (0,
            i.playbackOf)(e);
            for (let u of e.views) {
                let d = this.feed.peers.find(e => e.seat === u.seat);
                if (!d?.frames.length)
                    continue;
                let h = d.frames
                  , m = (0,
                i.shift)({
                    playback: c,
                    lag: u.lag,
                    authenticated: u.lag
                }, s, e.tick).shift
                  , p = {
                    t: 0,
                    p: [0, 0, 0],
                    q: [0, 0, 0, 1],
                    run: 0
                }
                  , f = t && !!this.feed.ahead
                  , g = (e, t) => {
                    let r = (0,
                    l.stepsToMs)(e - m);
                    return !(!(f && (0,
                    l.displayPose)(d, r, p)) && 0 > (0,
                    l.boxPose)(h, r, p)) && p.run === u.segment && (t[0] = p.p[0],
                    t[1] = p.p[1],
                    t[2] = p.p[2],
                    !0)
                }
                  , v = h[h.length - 1];
                a.push({
                    seat: u.seat,
                    bound: (0,
                    n.boundingRadius)(o.DRONE_PROFILES[v.droneId ?? r.DEFAULT_DRONE].halfExtents),
                    velocity: v.v ?? [0, 0, 0],
                    centre: g
                })
            }
            return a
        }
        boxes(e, t, r) {
            let i = this.sight(e, t);
            if (!i)
                return;
            let n = [0, 0, 0];
            for (let t of this.boltTargets(i))
                t.centre(e * a.STEPS_PER_TICK, n) && r.set(t.seat, [n[0], n[1], n[2]])
        }
        disconnected() {
            this.feed.status = "reconnecting"
        }
    }
    e.s(["RemotePilots", 0, c])
}
, 478093, e => {
    "use strict";
    var t = e.i(987808);
    e.s(["isTimeAttackGhostMounted", 0, function(e) {
        return !!e.activeTimeAttackId && e.timeAttackRunning && e.hasClip && ("flying" === e.phase || "paused" === e.phase)
    }
    , "resolveGhostPlaybackTime", 0, function(e, r) {
        var i;
        return r ? e <= 0 ? 0 : Math.min(e, Math.max(0, r())) : (i = t.timeAttackClock.elapsedMs,
        e <= 0 ? 0 : Math.min(e, Math.max(0, i / 1e3)))
    }
    ])
}
, 130297, e => {
    "use strict";
    var t = e.i(931067)
      , r = e.i(848546)
      , i = e.i(94800)
      , n = e.i(271645)
      , o = e.i(190072)
      , a = Object.defineProperty;
    class s {
        constructor() {
            ( (e, t) => {
                let r, i;
                i = void 0,
                (r = "symbol" != typeof t ? t + "" : t) in e ? a(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[r] = i
            }
            )(this, "_listeners")
        }
        addEventListener(e, t) {
            void 0 === this._listeners && (this._listeners = {});
            let r = this._listeners;
            void 0 === r[e] && (r[e] = []),
            -1 === r[e].indexOf(t) && r[e].push(t)
        }
        hasEventListener(e, t) {
            if (void 0 === this._listeners)
                return !1;
            let r = this._listeners;
            return void 0 !== r[e] && -1 !== r[e].indexOf(t)
        }
        removeEventListener(e, t) {
            if (void 0 === this._listeners)
                return;
            let r = this._listeners[e];
            if (void 0 !== r) {
                let e = r.indexOf(t);
                -1 !== e && r.splice(e, 1)
            }
        }
        dispatchEvent(e) {
            if (void 0 === this._listeners)
                return;
            let t = this._listeners[e.type];
            if (void 0 !== t) {
                e.target = this;
                let r = t.slice(0);
                for (let t = 0, i = r.length; t < i; t++)
                    r[t].call(this, e);
                e.target = null
            }
        }
    }
    var l = Object.defineProperty
      , c = (e, t, r) => {
        let i;
        return (i = "symbol" != typeof t ? t + "" : t) in e ? l(e, i, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[i] = r,
        r
    }
    ;
    let u = new o.Ray
      , d = new o.Plane
      , h = Math.cos(Math.PI / 180 * 70)
      , m = (e, t) => (e % t + t) % t;
    class p extends s {
        constructor(e, t) {
            super(),
            c(this, "object"),
            c(this, "domElement"),
            c(this, "enabled", !0),
            c(this, "target", new o.Vector3),
            c(this, "minDistance", 0),
            c(this, "maxDistance", 1 / 0),
            c(this, "minZoom", 0),
            c(this, "maxZoom", 1 / 0),
            c(this, "minPolarAngle", 0),
            c(this, "maxPolarAngle", Math.PI),
            c(this, "minAzimuthAngle", -1 / 0),
            c(this, "maxAzimuthAngle", 1 / 0),
            c(this, "enableDamping", !1),
            c(this, "dampingFactor", .05),
            c(this, "enableZoom", !0),
            c(this, "zoomSpeed", 1),
            c(this, "enableRotate", !0),
            c(this, "rotateSpeed", 1),
            c(this, "enablePan", !0),
            c(this, "panSpeed", 1),
            c(this, "screenSpacePanning", !0),
            c(this, "keyPanSpeed", 7),
            c(this, "zoomToCursor", !1),
            c(this, "autoRotate", !1),
            c(this, "autoRotateSpeed", 2),
            c(this, "reverseOrbit", !1),
            c(this, "reverseHorizontalOrbit", !1),
            c(this, "reverseVerticalOrbit", !1),
            c(this, "keys", {
                LEFT: "ArrowLeft",
                UP: "ArrowUp",
                RIGHT: "ArrowRight",
                BOTTOM: "ArrowDown"
            }),
            c(this, "mouseButtons", {
                LEFT: o.MOUSE.ROTATE,
                MIDDLE: o.MOUSE.DOLLY,
                RIGHT: o.MOUSE.PAN
            }),
            c(this, "touches", {
                ONE: o.TOUCH.ROTATE,
                TWO: o.TOUCH.DOLLY_PAN
            }),
            c(this, "target0"),
            c(this, "position0"),
            c(this, "zoom0"),
            c(this, "_domElementKeyEvents", null),
            c(this, "getPolarAngle"),
            c(this, "getAzimuthalAngle"),
            c(this, "setPolarAngle"),
            c(this, "setAzimuthalAngle"),
            c(this, "getDistance"),
            c(this, "getZoomScale"),
            c(this, "listenToKeyEvents"),
            c(this, "stopListenToKeyEvents"),
            c(this, "saveState"),
            c(this, "reset"),
            c(this, "update"),
            c(this, "connect"),
            c(this, "dispose"),
            c(this, "dollyIn"),
            c(this, "dollyOut"),
            c(this, "getScale"),
            c(this, "setScale"),
            this.object = e,
            this.domElement = t,
            this.target0 = this.target.clone(),
            this.position0 = this.object.position.clone(),
            this.zoom0 = this.object.zoom,
            this.getPolarAngle = () => f.phi,
            this.getAzimuthalAngle = () => f.theta,
            this.setPolarAngle = e => {
                let t = m(e, 2 * Math.PI)
                  , i = f.phi;
                i < 0 && (i += 2 * Math.PI),
                t < 0 && (t += 2 * Math.PI);
                let n = Math.abs(t - i);
                2 * Math.PI - n < n && (t < i ? t += 2 * Math.PI : i += 2 * Math.PI),
                g.phi = t - i,
                r.update()
            }
            ,
            this.setAzimuthalAngle = e => {
                let t = m(e, 2 * Math.PI)
                  , i = f.theta;
                i < 0 && (i += 2 * Math.PI),
                t < 0 && (t += 2 * Math.PI);
                let n = Math.abs(t - i);
                2 * Math.PI - n < n && (t < i ? t += 2 * Math.PI : i += 2 * Math.PI),
                g.theta = t - i,
                r.update()
            }
            ,
            this.getDistance = () => r.object.position.distanceTo(r.target),
            this.listenToKeyEvents = e => {
                e.addEventListener("keydown", ee),
                this._domElementKeyEvents = e
            }
            ,
            this.stopListenToKeyEvents = () => {
                this._domElementKeyEvents.removeEventListener("keydown", ee),
                this._domElementKeyEvents = null
            }
            ,
            this.saveState = () => {
                r.target0.copy(r.target),
                r.position0.copy(r.object.position),
                r.zoom0 = r.object.zoom
            }
            ,
            this.reset = () => {
                r.target.copy(r.target0),
                r.object.position.copy(r.position0),
                r.object.zoom = r.zoom0,
                r.object.updateProjectionMatrix(),
                r.dispatchEvent(i),
                r.update(),
                l = s.NONE
            }
            ,
            this.update = ( () => {
                let t = new o.Vector3
                  , n = new o.Vector3(0,1,0)
                  , a = new o.Quaternion().setFromUnitVectors(e.up, n)
                  , c = a.clone().invert()
                  , m = new o.Vector3
                  , w = new o.Quaternion
                  , b = 2 * Math.PI;
                return function() {
                    let x = r.object.position;
                    a.setFromUnitVectors(e.up, n),
                    c.copy(a).invert(),
                    t.copy(x).sub(r.target),
                    t.applyQuaternion(a),
                    f.setFromVector3(t),
                    r.autoRotate && l === s.NONE && D(2 * Math.PI / 60 / 60 * r.autoRotateSpeed),
                    r.enableDamping ? (f.theta += g.theta * r.dampingFactor,
                    f.phi += g.phi * r.dampingFactor) : (f.theta += g.theta,
                    f.phi += g.phi);
                    let S = r.minAzimuthAngle
                      , M = r.maxAzimuthAngle;
                    isFinite(S) && isFinite(M) && (S < -Math.PI ? S += b : S > Math.PI && (S -= b),
                    M < -Math.PI ? M += b : M > Math.PI && (M -= b),
                    S <= M ? f.theta = Math.max(S, Math.min(M, f.theta)) : f.theta = f.theta > (S + M) / 2 ? Math.max(S, f.theta) : Math.min(M, f.theta)),
                    f.phi = Math.max(r.minPolarAngle, Math.min(r.maxPolarAngle, f.phi)),
                    f.makeSafe(),
                    !0 === r.enableDamping ? r.target.addScaledVector(y, r.dampingFactor) : r.target.add(y),
                    r.zoomToCursor && C || r.object.isOrthographicCamera ? f.radius = G(f.radius) : f.radius = G(f.radius * v),
                    t.setFromSpherical(f),
                    t.applyQuaternion(c),
                    x.copy(r.target).add(t),
                    r.object.matrixAutoUpdate || r.object.updateMatrix(),
                    r.object.lookAt(r.target),
                    !0 === r.enableDamping ? (g.theta *= 1 - r.dampingFactor,
                    g.phi *= 1 - r.dampingFactor,
                    y.multiplyScalar(1 - r.dampingFactor)) : (g.set(0, 0, 0),
                    y.set(0, 0, 0));
                    let A = !1;
                    if (r.zoomToCursor && C) {
                        let i = null;
                        if (r.object instanceof o.PerspectiveCamera && r.object.isPerspectiveCamera) {
                            let e = t.length();
                            i = G(e * v);
                            let n = e - i;
                            r.object.position.addScaledVector(T, n),
                            r.object.updateMatrixWorld()
                        } else if (r.object.isOrthographicCamera) {
                            let e = new o.Vector3(P.x,P.y,0);
                            e.unproject(r.object),
                            r.object.zoom = Math.max(r.minZoom, Math.min(r.maxZoom, r.object.zoom / v)),
                            r.object.updateProjectionMatrix(),
                            A = !0;
                            let n = new o.Vector3(P.x,P.y,0);
                            n.unproject(r.object),
                            r.object.position.sub(n).add(e),
                            r.object.updateMatrixWorld(),
                            i = t.length()
                        } else
                            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),
                            r.zoomToCursor = !1;
                        null !== i && (r.screenSpacePanning ? r.target.set(0, 0, -1).transformDirection(r.object.matrix).multiplyScalar(i).add(r.object.position) : (u.origin.copy(r.object.position),
                        u.direction.set(0, 0, -1).transformDirection(r.object.matrix),
                        Math.abs(r.object.up.dot(u.direction)) < h ? e.lookAt(r.target) : (d.setFromNormalAndCoplanarPoint(r.object.up, r.target),
                        u.intersectPlane(d, r.target))))
                    } else
                        r.object instanceof o.OrthographicCamera && r.object.isOrthographicCamera && (A = 1 !== v) && (r.object.zoom = Math.max(r.minZoom, Math.min(r.maxZoom, r.object.zoom / v)),
                        r.object.updateProjectionMatrix());
                    return v = 1,
                    C = !1,
                    !!(A || m.distanceToSquared(r.object.position) > p || 8 * (1 - w.dot(r.object.quaternion)) > p) && (r.dispatchEvent(i),
                    m.copy(r.object.position),
                    w.copy(r.object.quaternion),
                    A = !1,
                    !0)
                }
            }
            )(),
            this.connect = e => {
                r.domElement = e,
                r.domElement.style.touchAction = "none",
                r.domElement.addEventListener("contextmenu", et),
                r.domElement.addEventListener("pointerdown", Z),
                r.domElement.addEventListener("pointercancel", $),
                r.domElement.addEventListener("wheel", J)
            }
            ,
            this.dispose = () => {
                var e, t, i, n, o, a;
                r.domElement && (r.domElement.style.touchAction = "auto"),
                null == (e = r.domElement) || e.removeEventListener("contextmenu", et),
                null == (t = r.domElement) || t.removeEventListener("pointerdown", Z),
                null == (i = r.domElement) || i.removeEventListener("pointercancel", $),
                null == (n = r.domElement) || n.removeEventListener("wheel", J),
                null == (o = r.domElement) || o.ownerDocument.removeEventListener("pointermove", Q),
                null == (a = r.domElement) || a.ownerDocument.removeEventListener("pointerup", $),
                null !== r._domElementKeyEvents && r._domElementKeyEvents.removeEventListener("keydown", ee)
            }
            ;
            const r = this
              , i = {
                type: "change"
            }
              , n = {
                type: "start"
            }
              , a = {
                type: "end"
            }
              , s = {
                NONE: -1,
                ROTATE: 0,
                DOLLY: 1,
                PAN: 2,
                TOUCH_ROTATE: 3,
                TOUCH_PAN: 4,
                TOUCH_DOLLY_PAN: 5,
                TOUCH_DOLLY_ROTATE: 6
            };
            let l = s.NONE;
            const p = 1e-6
              , f = new o.Spherical
              , g = new o.Spherical;
            let v = 1;
            const y = new o.Vector3
              , w = new o.Vector2
              , b = new o.Vector2
              , x = new o.Vector2
              , S = new o.Vector2
              , M = new o.Vector2
              , A = new o.Vector2
              , E = new o.Vector2
              , R = new o.Vector2
              , k = new o.Vector2
              , T = new o.Vector3
              , P = new o.Vector2;
            let C = !1;
            const j = []
              , O = {};
            function I() {
                return Math.pow(.95, r.zoomSpeed)
            }
            function D(e) {
                r.reverseOrbit || r.reverseHorizontalOrbit ? g.theta += e : g.theta -= e
            }
            function L(e) {
                r.reverseOrbit || r.reverseVerticalOrbit ? g.phi += e : g.phi -= e
            }
            const _ = ( () => {
                let e = new o.Vector3;
                return function(t, r) {
                    e.setFromMatrixColumn(r, 0),
                    e.multiplyScalar(-t),
                    y.add(e)
                }
            }
            )()
              , F = ( () => {
                let e = new o.Vector3;
                return function(t, i) {
                    !0 === r.screenSpacePanning ? e.setFromMatrixColumn(i, 1) : (e.setFromMatrixColumn(i, 0),
                    e.crossVectors(r.object.up, e)),
                    e.multiplyScalar(t),
                    y.add(e)
                }
            }
            )()
              , V = ( () => {
                let e = new o.Vector3;
                return function(t, i) {
                    let n = r.domElement;
                    if (n && r.object instanceof o.PerspectiveCamera && r.object.isPerspectiveCamera) {
                        let o = r.object.position;
                        e.copy(o).sub(r.target);
                        let a = e.length();
                        _(2 * t * (a *= Math.tan(r.object.fov / 2 * Math.PI / 180)) / n.clientHeight, r.object.matrix),
                        F(2 * i * a / n.clientHeight, r.object.matrix)
                    } else
                        n && r.object instanceof o.OrthographicCamera && r.object.isOrthographicCamera ? (_(t * (r.object.right - r.object.left) / r.object.zoom / n.clientWidth, r.object.matrix),
                        F(i * (r.object.top - r.object.bottom) / r.object.zoom / n.clientHeight, r.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),
                        r.enablePan = !1)
                }
            }
            )();
            function z(e) {
                r.object instanceof o.PerspectiveCamera && r.object.isPerspectiveCamera || r.object instanceof o.OrthographicCamera && r.object.isOrthographicCamera ? v = e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
                r.enableZoom = !1)
            }
            function N(e) {
                if (!r.zoomToCursor || !r.domElement)
                    return;
                C = !0;
                let t = r.domElement.getBoundingClientRect()
                  , i = e.clientX - t.left
                  , n = e.clientY - t.top
                  , o = t.width
                  , a = t.height;
                P.x = i / o * 2 - 1,
                P.y = -(n / a * 2) + 1,
                T.set(P.x, P.y, 1).unproject(r.object).sub(r.object.position).normalize()
            }
            function G(e) {
                return Math.max(r.minDistance, Math.min(r.maxDistance, e))
            }
            function B(e) {
                w.set(e.clientX, e.clientY)
            }
            function W(e) {
                S.set(e.clientX, e.clientY)
            }
            function H() {
                if (1 == j.length)
                    w.set(j[0].pageX, j[0].pageY);
                else {
                    let e = .5 * (j[0].pageX + j[1].pageX)
                      , t = .5 * (j[0].pageY + j[1].pageY);
                    w.set(e, t)
                }
            }
            function U() {
                if (1 == j.length)
                    S.set(j[0].pageX, j[0].pageY);
                else {
                    let e = .5 * (j[0].pageX + j[1].pageX)
                      , t = .5 * (j[0].pageY + j[1].pageY);
                    S.set(e, t)
                }
            }
            function Y() {
                let e = j[0].pageX - j[1].pageX
                  , t = j[0].pageY - j[1].pageY
                  , r = Math.sqrt(e * e + t * t);
                E.set(0, r)
            }
            function q(e) {
                if (1 == j.length)
                    b.set(e.pageX, e.pageY);
                else {
                    let t = ei(e)
                      , r = .5 * (e.pageX + t.x)
                      , i = .5 * (e.pageY + t.y);
                    b.set(r, i)
                }
                x.subVectors(b, w).multiplyScalar(r.rotateSpeed);
                let t = r.domElement;
                t && (D(2 * Math.PI * x.x / t.clientHeight),
                L(2 * Math.PI * x.y / t.clientHeight)),
                w.copy(b)
            }
            function X(e) {
                if (1 == j.length)
                    M.set(e.pageX, e.pageY);
                else {
                    let t = ei(e)
                      , r = .5 * (e.pageX + t.x)
                      , i = .5 * (e.pageY + t.y);
                    M.set(r, i)
                }
                A.subVectors(M, S).multiplyScalar(r.panSpeed),
                V(A.x, A.y),
                S.copy(M)
            }
            function K(e) {
                var t;
                let i = ei(e)
                  , n = e.pageX - i.x
                  , o = e.pageY - i.y
                  , a = Math.sqrt(n * n + o * o);
                R.set(0, a),
                k.set(0, Math.pow(R.y / E.y, r.zoomSpeed)),
                t = k.y,
                z(v / t),
                E.copy(R)
            }
            function Z(e) {
                var t, i, a;
                !1 !== r.enabled && (0 === j.length && (null == (t = r.domElement) || t.ownerDocument.addEventListener("pointermove", Q),
                null == (i = r.domElement) || i.ownerDocument.addEventListener("pointerup", $)),
                a = e,
                j.push(a),
                "touch" === e.pointerType ? function(e) {
                    switch (er(e),
                    j.length) {
                    case 1:
                        switch (r.touches.ONE) {
                        case o.TOUCH.ROTATE:
                            if (!1 === r.enableRotate)
                                return;
                            H(),
                            l = s.TOUCH_ROTATE;
                            break;
                        case o.TOUCH.PAN:
                            if (!1 === r.enablePan)
                                return;
                            U(),
                            l = s.TOUCH_PAN;
                            break;
                        default:
                            l = s.NONE
                        }
                        break;
                    case 2:
                        switch (r.touches.TWO) {
                        case o.TOUCH.DOLLY_PAN:
                            if (!1 === r.enableZoom && !1 === r.enablePan)
                                return;
                            r.enableZoom && Y(),
                            r.enablePan && U(),
                            l = s.TOUCH_DOLLY_PAN;
                            break;
                        case o.TOUCH.DOLLY_ROTATE:
                            if (!1 === r.enableZoom && !1 === r.enableRotate)
                                return;
                            r.enableZoom && Y(),
                            r.enableRotate && H(),
                            l = s.TOUCH_DOLLY_ROTATE;
                            break;
                        default:
                            l = s.NONE
                        }
                        break;
                    default:
                        l = s.NONE
                    }
                    l !== s.NONE && r.dispatchEvent(n)
                }(e) : function(e) {
                    let t;
                    switch (e.button) {
                    case 0:
                        t = r.mouseButtons.LEFT;
                        break;
                    case 1:
                        t = r.mouseButtons.MIDDLE;
                        break;
                    case 2:
                        t = r.mouseButtons.RIGHT;
                        break;
                    default:
                        t = -1
                    }
                    switch (t) {
                    case o.MOUSE.DOLLY:
                        if (!1 === r.enableZoom)
                            return;
                        N(e),
                        E.set(e.clientX, e.clientY),
                        l = s.DOLLY;
                        break;
                    case o.MOUSE.ROTATE:
                        if (e.ctrlKey || e.metaKey || e.shiftKey) {
                            if (!1 === r.enablePan)
                                return;
                            W(e),
                            l = s.PAN
                        } else {
                            if (!1 === r.enableRotate)
                                return;
                            B(e),
                            l = s.ROTATE
                        }
                        break;
                    case o.MOUSE.PAN:
                        if (e.ctrlKey || e.metaKey || e.shiftKey) {
                            if (!1 === r.enableRotate)
                                return;
                            B(e),
                            l = s.ROTATE
                        } else {
                            if (!1 === r.enablePan)
                                return;
                            W(e),
                            l = s.PAN
                        }
                        break;
                    default:
                        l = s.NONE
                    }
                    l !== s.NONE && r.dispatchEvent(n)
                }(e))
            }
            function Q(e) {
                !1 !== r.enabled && ("touch" === e.pointerType ? function(e) {
                    switch (er(e),
                    l) {
                    case s.TOUCH_ROTATE:
                        if (!1 === r.enableRotate)
                            return;
                        q(e),
                        r.update();
                        break;
                    case s.TOUCH_PAN:
                        if (!1 === r.enablePan)
                            return;
                        X(e),
                        r.update();
                        break;
                    case s.TOUCH_DOLLY_PAN:
                        if (!1 === r.enableZoom && !1 === r.enablePan)
                            return;
                        r.enableZoom && K(e),
                        r.enablePan && X(e),
                        r.update();
                        break;
                    case s.TOUCH_DOLLY_ROTATE:
                        if (!1 === r.enableZoom && !1 === r.enableRotate)
                            return;
                        r.enableZoom && K(e),
                        r.enableRotate && q(e),
                        r.update();
                        break;
                    default:
                        l = s.NONE
                    }
                }(e) : function(e) {
                    if (!1 !== r.enabled)
                        switch (l) {
                        case s.ROTATE:
                            let t;
                            if (!1 === r.enableRotate)
                                return;
                            b.set(e.clientX, e.clientY),
                            x.subVectors(b, w).multiplyScalar(r.rotateSpeed),
                            (t = r.domElement) && (D(2 * Math.PI * x.x / t.clientHeight),
                            L(2 * Math.PI * x.y / t.clientHeight)),
                            w.copy(b),
                            r.update();
                            break;
                        case s.DOLLY:
                            var i, n;
                            if (!1 === r.enableZoom)
                                return;
                            (R.set(e.clientX, e.clientY),
                            k.subVectors(R, E),
                            k.y > 0) ? (i = I(),
                            z(v / i)) : k.y < 0 && (n = I(),
                            z(v * n)),
                            E.copy(R),
                            r.update();
                            break;
                        case s.PAN:
                            if (!1 === r.enablePan)
                                return;
                            M.set(e.clientX, e.clientY),
                            A.subVectors(M, S).multiplyScalar(r.panSpeed),
                            V(A.x, A.y),
                            S.copy(M),
                            r.update()
                        }
                }(e))
            }
            function $(e) {
                var t, i, n;
                (function(e) {
                    delete O[e.pointerId];
                    for (let t = 0; t < j.length; t++)
                        if (j[t].pointerId == e.pointerId)
                            return void j.splice(t, 1)
                }
                )(e),
                0 === j.length && (null == (t = r.domElement) || t.releasePointerCapture(e.pointerId),
                null == (i = r.domElement) || i.ownerDocument.removeEventListener("pointermove", Q),
                null == (n = r.domElement) || n.ownerDocument.removeEventListener("pointerup", $)),
                r.dispatchEvent(a),
                l = s.NONE
            }
            function J(e) {
                if (!1 !== r.enabled && !1 !== r.enableZoom && (l === s.NONE || l === s.ROTATE)) {
                    var t, i;
                    e.preventDefault(),
                    r.dispatchEvent(n),
                    (N(e),
                    e.deltaY < 0) ? (t = I(),
                    z(v * t)) : e.deltaY > 0 && (i = I(),
                    z(v / i)),
                    r.update(),
                    r.dispatchEvent(a)
                }
            }
            function ee(e) {
                if (!1 !== r.enabled && !1 !== r.enablePan) {
                    let t = !1;
                    switch (e.code) {
                    case r.keys.UP:
                        V(0, r.keyPanSpeed),
                        t = !0;
                        break;
                    case r.keys.BOTTOM:
                        V(0, -r.keyPanSpeed),
                        t = !0;
                        break;
                    case r.keys.LEFT:
                        V(r.keyPanSpeed, 0),
                        t = !0;
                        break;
                    case r.keys.RIGHT:
                        V(-r.keyPanSpeed, 0),
                        t = !0
                    }
                    t && (e.preventDefault(),
                    r.update())
                }
            }
            function et(e) {
                !1 !== r.enabled && e.preventDefault()
            }
            function er(e) {
                let t = O[e.pointerId];
                void 0 === t && (t = new o.Vector2,
                O[e.pointerId] = t),
                t.set(e.pageX, e.pageY)
            }
            function ei(e) {
                return O[(e.pointerId === j[0].pointerId ? j[1] : j[0]).pointerId]
            }
            this.dollyIn = (e=I()) => {
                z(v * e),
                r.update()
            }
            ,
            this.dollyOut = (e=I()) => {
                z(v / e),
                r.update()
            }
            ,
            this.getScale = () => v,
            this.setScale = e => {
                z(e),
                r.update()
            }
            ,
            this.getZoomScale = () => I(),
            void 0 !== t && this.connect(t),
            this.update()
        }
    }
    let f = n.forwardRef( ({makeDefault: e, camera: o, regress: a, domElement: s, enableDamping: l=!0, keyEvents: c=!1, onChange: u, onStart: d, onEnd: h, ...m}, f) => {
        let g = (0,
        r.useThree)(e => e.invalidate)
          , v = (0,
        r.useThree)(e => e.camera)
          , y = (0,
        r.useThree)(e => e.gl)
          , w = (0,
        r.useThree)(e => e.events)
          , b = (0,
        r.useThree)(e => e.setEvents)
          , x = (0,
        r.useThree)(e => e.set)
          , S = (0,
        r.useThree)(e => e.get)
          , M = (0,
        r.useThree)(e => e.performance)
          , A = o || v
          , E = s || w.connected || y.domElement
          , R = n.useMemo( () => new p(A), [A]);
        return (0,
        i.useFrame)( () => {
            R.enabled && R.update()
        }
        , -1),
        n.useEffect( () => (c && R.connect(!0 === c ? E : c),
        R.connect(E),
        () => void R.dispose()), [c, E, a, R, g]),
        n.useEffect( () => {
            let e = e => {
                g(),
                a && M.regress(),
                u && u(e)
            }
              , t = e => {
                d && d(e)
            }
              , r = e => {
                h && h(e)
            }
            ;
            return R.addEventListener("change", e),
            R.addEventListener("start", t),
            R.addEventListener("end", r),
            () => {
                R.removeEventListener("start", t),
                R.removeEventListener("end", r),
                R.removeEventListener("change", e)
            }
        }
        , [u, d, h, R, g, b]),
        n.useEffect( () => {
            if (e) {
                let e = S().controls;
                return x({
                    controls: R
                }),
                () => x({
                    controls: e
                })
            }
        }
        , [e, R]),
        n.createElement("primitive", (0,
        t.default)({
            ref: f,
            object: R,
            enableDamping: l
        }, m))
    }
    );
    e.s(["OrbitControls", 0, f], 130297)
}
, 382897, e => {
    "use strict";
    var t = e.i(931067)
      , r = e.i(271645)
      , i = e.i(848546)
      , n = e.i(94800)
      , o = e.i(190072);
    let a = r.forwardRef( ({envMap: e, resolution: a=256, frames: s=1 / 0, makeDefault: l, children: c, ...u}, d) => {
        let h = (0,
        i.useThree)( ({set: e}) => e)
          , m = (0,
        i.useThree)( ({camera: e}) => e)
          , p = (0,
        i.useThree)( ({size: e}) => e)
          , f = r.useRef(null);
        r.useImperativeHandle(d, () => f.current, []);
        let g = r.useRef(null)
          , v = function(e) {
            let t = (0,
            i.useThree)(e => e.size)
              , n = (0,
            i.useThree)(e => e.viewport)
              , a = "number" == typeof e ? e : t.width * n.dpr
              , s = t.height * n.dpr
              , l = ("number" == typeof e ? void 0 : e) || {}
              , {samples: c=0, depth: u, ...d} = l
              , h = null != u ? u : l.depthBuffer
              , m = r.useMemo( () => {
                let e = new o.WebGLRenderTarget(a,s,{
                    minFilter: o.LinearFilter,
                    magFilter: o.LinearFilter,
                    type: o.HalfFloatType,
                    ...d
                });
                return h && (e.depthTexture = new o.DepthTexture(a,s,o.FloatType)),
                e.samples = c,
                e
            }
            , []);
            return r.useLayoutEffect( () => {
                m.setSize(a, s),
                c && (m.samples = c)
            }
            , [c, m, a, s]),
            r.useEffect( () => () => m.dispose(), []),
            m
        }(a);
        r.useLayoutEffect( () => {
            u.manual || (f.current.aspect = p.width / p.height)
        }
        , [p, u]),
        r.useLayoutEffect( () => {
            f.current.updateProjectionMatrix()
        }
        );
        let y = 0
          , w = null
          , b = "function" == typeof c;
        return (0,
        n.useFrame)(t => {
            b && (s === 1 / 0 || y < s) && (g.current.visible = !1,
            t.gl.setRenderTarget(v),
            w = t.scene.background,
            e && (t.scene.background = e),
            t.gl.render(t.scene, f.current),
            t.scene.background = w,
            t.gl.setRenderTarget(null),
            g.current.visible = !0,
            y++)
        }
        ),
        r.useLayoutEffect( () => {
            if (l)
                return h( () => ({
                    camera: f.current
                })),
                () => h( () => ({
                    camera: m
                }))
        }
        , [f, l, h]),
        r.createElement(r.Fragment, null, r.createElement("perspectiveCamera", (0,
        t.default)({
            ref: f
        }, u), !b && c), r.createElement("group", {
            ref: g
        }, b && c(v.texture)))
    }
    );
    e.s(["PerspectiveCamera", 0, a], 382897)
}
, 268911, e => {
    "use strict";
    var t = e.i(190072);
    e.s(["mergeVertices", 0, function(e, r=1e-4) {
        r = Math.max(r, Number.EPSILON);
        let i = {}
          , n = e.getIndex()
          , o = e.getAttribute("position")
          , a = n ? n.count : o.count
          , s = 0
          , l = Object.keys(e.attributes)
          , c = {}
          , u = {}
          , d = []
          , h = ["getX", "getY", "getZ", "getW"];
        for (let t = 0, r = l.length; t < r; t++) {
            let r = l[t];
            c[r] = [];
            let i = e.morphAttributes[r];
            i && (u[r] = Array(i.length).fill(0).map( () => []))
        }
        let m = Math.pow(10, Math.log10(1 / r));
        for (let t = 0; t < a; t++) {
            let r = n ? n.getX(t) : t
              , o = "";
            for (let t = 0, i = l.length; t < i; t++) {
                let i = l[t]
                  , n = e.getAttribute(i)
                  , a = n.itemSize;
                for (let e = 0; e < a; e++)
                    o += `${~~(n[h[e]](r) * m)},`
            }
            if (o in i)
                d.push(i[o]);
            else {
                for (let t = 0, i = l.length; t < i; t++) {
                    let i = l[t]
                      , n = e.getAttribute(i)
                      , o = e.morphAttributes[i]
                      , a = n.itemSize
                      , s = c[i]
                      , d = u[i];
                    for (let e = 0; e < a; e++) {
                        let t = h[e];
                        if (s.push(n[t](r)),
                        o)
                            for (let e = 0, i = o.length; e < i; e++)
                                d[e].push(o[e][t](r))
                    }
                }
                i[o] = s,
                d.push(s),
                s++
            }
        }
        let p = e.clone();
        for (let r = 0, i = l.length; r < i; r++) {
            let i = l[r]
              , n = e.getAttribute(i)
              , o = new n.array.constructor(c[i])
              , a = new t.BufferAttribute(o,n.itemSize,n.normalized);
            if (p.setAttribute(i, a),
            i in u)
                for (let r = 0; r < u[i].length; r++) {
                    let n = e.morphAttributes[i][r]
                      , o = new n.array.constructor(u[i][r])
                      , a = new t.BufferAttribute(o,n.itemSize,n.normalized);
                    p.morphAttributes[i][r] = a
                }
        }
        return p.setIndex(d),
        p
    }
    , "toCreasedNormals", 0, function(e, r=Math.PI / 3) {
        let i = Math.cos(r)
          , n = (1 + 1e-10) * 100
          , o = [new t.Vector3, new t.Vector3, new t.Vector3]
          , a = new t.Vector3
          , s = new t.Vector3
          , l = new t.Vector3
          , c = new t.Vector3;
        function u(e) {
            let t = ~~(e.x * n)
              , r = ~~(e.y * n)
              , i = ~~(e.z * n);
            return `${t},${r},${i}`
        }
        let d = e.index ? e.toNonIndexed() : e
          , h = d.attributes.position
          , m = {};
        for (let e = 0, r = h.count / 3; e < r; e++) {
            let r = 3 * e
              , i = o[0].fromBufferAttribute(h, r + 0)
              , n = o[1].fromBufferAttribute(h, r + 1)
              , l = o[2].fromBufferAttribute(h, r + 2);
            a.subVectors(l, n),
            s.subVectors(i, n);
            let c = new t.Vector3().crossVectors(a, s).normalize();
            for (let e = 0; e < 3; e++) {
                let t = u(o[e]);
                t in m || (m[t] = []),
                m[t].push(c)
            }
        }
        let p = new Float32Array(3 * h.count)
          , f = new t.BufferAttribute(p,3,!1);
        for (let e = 0, t = h.count / 3; e < t; e++) {
            let t = 3 * e
              , r = o[0].fromBufferAttribute(h, t + 0)
              , n = o[1].fromBufferAttribute(h, t + 1)
              , d = o[2].fromBufferAttribute(h, t + 2);
            a.subVectors(d, n),
            s.subVectors(r, n),
            l.crossVectors(a, s).normalize();
            for (let e = 0; e < 3; e++) {
                let r = m[u(o[e])];
                c.set(0, 0, 0);
                for (let e = 0, t = r.length; e < t; e++) {
                    let t = r[e];
                    l.dot(t) > i && c.add(t)
                }
                c.normalize(),
                f.setXYZ(t + e, c.x, c.y, c.z)
            }
        }
        return d.setAttribute("normal", f),
        d
    }
    ], 268911)
}
]);
