(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 211090, e => {
    "use strict";
    var t = e.i(843476)
      , o = e.i(271645)
      , r = e.i(94800)
      , a = e.i(848546)
      , n = e.i(569638)
      , i = e.i(244050)
      , s = e.i(268795)
      , l = e.i(378423)
      , u = e.i(216339)
      , d = e.i(998494)
      , c = e.i(522932)
      , f = e.i(838152)
      , h = e.i(167431)
      , m = e.i(190072)
      , p = e.i(247638)
      , g = e.i(106258);
    let v = `
#include <common>
#include <logdepthbuf_pars_vertex>
varying vec3 vWorldPos;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
  #include <logdepthbuf_vertex>
}
`
      , w = `
#include <common>
#include <logdepthbuf_pars_fragment>
uniform vec2 uDrone;
uniform float uFadeMeters;
uniform float uMaxOpacity;
uniform float uActive;
uniform vec3 uColor;
varying vec3 vWorldPos;

void main() {
  float d = distance(vWorldPos.xz, uDrone);
  float alpha = uActive * uMaxOpacity * smoothstep(uFadeMeters, 0.0, d);
  if (alpha < 0.008) discard;
  gl_FragColor = vec4(uColor, alpha);
  #include <logdepthbuf_fragment>
}
`;
    function x({position: e, rotation: o, span: r, height: a, material: n}) {
        return (0,
        t.jsx)("mesh", {
            position: e,
            rotation: o,
            material: n,
            frustumCulled: !1,
            renderOrder: 10,
            children: (0,
            t.jsx)("planeGeometry", {
                args: [r, a]
            })
        })
    }
    function b({bound: e, color: a, opacity: n, height: i, inset: s=0, fadeMeters: l=50}) {
        let u = Math.min(.75, Math.max(0, n))
          , d = (0,
        o.useRef)(null);
        null === d.current && (d.current = new m.ShaderMaterial({
            uniforms: {
                uDrone: {
                    value: new m.Vector2(0,0)
                },
                uFadeMeters: {
                    value: l
                },
                uMaxOpacity: {
                    value: u
                },
                uActive: {
                    value: 0
                },
                uColor: {
                    value: new m.Color(a)
                }
            },
            vertexShader: v,
            fragmentShader: w,
            transparent: !0,
            depthTest: !0,
            depthWrite: !1,
            toneMapped: !1,
            side: m.FrontSide,
            fog: !1
        })),
        (0,
        o.useEffect)( () => () => {
            d.current?.dispose(),
            d.current = null
        }
        , []),
        (0,
        r.useFrame)( () => {
            let e = d.current;
            if (!e)
                return;
            let t = +("flying" === g.useSimStore.getState().phase);
            e.uniforms.uActive.value = t,
            e.uniforms.uFadeMeters.value = l,
            e.uniforms.uMaxOpacity.value = u,
            e.uniforms.uColor.value.set(a),
            e.visible = t > 0,
            0 !== t && e.uniforms.uDrone.value.set(p.live.position.x, p.live.position.z)
        }
        );
        let c = e + s - .5
          , f = 2 * c
          , h = i / 2
          , y = d.current;
        return (0,
        t.jsxs)("group", {
            children: [(0,
            t.jsx)(x, {
                position: [c, h, 0],
                rotation: [0, -Math.PI / 2, 0],
                span: f,
                height: i,
                material: y
            }), (0,
            t.jsx)(x, {
                position: [-c, h, 0],
                rotation: [0, Math.PI / 2, 0],
                span: f,
                height: i,
                material: y
            }), (0,
            t.jsx)(x, {
                position: [0, h, c],
                rotation: [0, Math.PI, 0],
                span: f,
                height: i,
                material: y
            }), (0,
            t.jsx)(x, {
                position: [0, h, -c],
                rotation: [0, 0, 0],
                span: f,
                height: i,
                material: y
            })]
        })
    }
    var y = e.i(552260)
      , M = e.i(666259)
      , S = e.i(814966)
      , C = e.i(128921);
    let k = new m.Matrix4
      , z = new m.Vector3
      , G = new m.Quaternion
      , A = new m.Vector3
      , E = new m.Euler
      , F = new m.Color;
    function D(e, t) {
        let o = 43758.5453 * Math.sin(12.9898 * e + 78.233 * t);
        return o - Math.floor(o)
    }
    function j(e, t) {
        let o = e.index ? e.toNonIndexed() : e;
        o !== e && e.dispose();
        let r = o.attributes.position.count
          , a = new Float32Array(3 * r);
        F.set(t);
        for (let e = 0; e < r; e++)
            a[3 * e] = F.r,
            a[3 * e + 1] = F.g,
            a[3 * e + 2] = F.b;
        return o.setAttribute("color", new m.BufferAttribute(a,3)),
        o
    }
    function O(e) {
        let t = (0,
        y.mergeGeometries)(e, !1);
        if (t)
            for (let t of e)
                t.dispose();
        return t ?? e[0]
    }
    function R(e, t, o, r) {
        let a = 43758.5453 * Math.sin(.0127 * Math.round(1e4 * e) + .0311 * Math.round(1e4 * t) + .0747 * Math.round(1e4 * o) + 12.9898 * r);
        return a - Math.floor(a)
    }
    function I(e, t, o, r=[1, 1, 1]) {
        let a = e.attributes.position;
        for (let e = 0; e < a.count; e++) {
            let n = a.getX(e)
              , i = a.getY(e)
              , s = a.getZ(e);
            a.setXYZ(e, n + (R(n, i, s, o) - .5) * t * r[0], i + (R(n, i, s, o + 7.7) - .5) * t * r[1], s + (R(n, i, s, o + 19.3) - .5) * t * r[2])
        }
        return a.needsUpdate = !0,
        e.computeVertexNormals(),
        e
    }
    function B(e, t, o, r, a) {
        return new m.CylinderGeometry(t,e,o,r).translate(0, a + o / 2, 0)
    }
    function T(e, t, o, r) {
        return new m.CylinderGeometry(e,e,t,o).translate(0, r + t / 2, 0)
    }
    function _(e, t, o) {
        let r = [];
        for (let a = 0; a < e; a++) {
            let n = .68 + .41 * a % 1 * .5
              , i = (.27 * a % 1 - .5) * .34
              , s = o * n;
            r.push(new m.PlaneGeometry(t * (.8 + .3 * n),s,1,2).translate(0, s / 2, 0).rotateZ(i).rotateY(a / e * Math.PI + .37 * a).translate((.53 * a % 1 - .5) * t * .4, 0, (.71 * a % 1 - .5) * t * .4))
        }
        return (0,
        y.mergeGeometries)(r, !1) ?? r[0]
    }
    let P = {
        radome: {
            geometry: () => {
                let e = new m.IcosahedronGeometry(6.5,2);
                e.translate(0, 6.1, 0);
                let t = j(e, "#becbc4");
                return t.computeVertexNormals(),
                t
            }
            ,
            color: "#ffffff",
            painted: !0,
            shadows: !0
        },
        cone: {
            geometry: function(e) {
                let t = e > 0 ? 10 : 7;
                return O([j(new m.BoxGeometry(.5,.05,.5).translate(0, .025, 0), "#26282b"), j(new m.BoxGeometry(.44,.04,.44).translate(0, .06, 0), "#d8552a"), j(B(.22, .15, .24, t, .08), "#d8552a"), j(B(.15, .115, .14, t, .32), "#e9edee"), j(B(.115, .085, .13, t, .46), "#d8552a"), j(B(.085, .06, .09, t, .59), "#e9edee"), j(B(.06, .025, .1, t, .68), "#d8552a")])
            },
            color: "#ffffff",
            painted: !0,
            shadows: !0
        },
        tyre: {
            geometry: function(e) {
                let t = e > 0 ? 16 : 10;
                return O([j(new m.TorusGeometry(.3,.13,e > 0 ? 7 : 5,t).rotateX(Math.PI / 2).translate(0, .13, 0), "#2c2d30"), j(new m.TorusGeometry(.315,.035,4,t).rotateX(Math.PI / 2).translate(0, .13, 0), "#232427"), j(T(.19, .05, t, .1), "#585c60"), j(T(.07, .07, 8, .09), "#4a4e52")])
            },
            color: "#ffffff",
            painted: !0,
            shadows: !0
        },
        barrel: {
            geometry: function(e) {
                let t = e > 0 ? 12 : 8;
                return O([j(B(.27, .27, .88, t, .01), "#55624c"), j(T(.285, .42, t, .23), "#5d6b53"), j(T(.295, .07, t, .24), "#48543f"), j(T(.295, .07, t, .58), "#48543f"), j(T(.29, .06, t, 0), "#3f4a38"), j(T(.29, .06, t, .83), "#3f4a38"), j(T(.26, .03, t, .89), "#616f56"), j(T(.055, .035, 6, .92).translate(.13, 0, .06), "#79684a")])
            },
            color: "#ffffff",
            painted: !0,
            shadows: !0
        },
        bush: {
            geometry: function(e) {
                return O((e > 0 ? [[.62, 0, .5, 0], [.46, .5, .4, .22], [.42, -.42, .38, -.3], [.38, .1, .72, -.45]] : [[.68, 0, .5, 0], [.46, .45, .38, -.25]]).map( ([e,t,o,r], a) => I(new m.IcosahedronGeometry(e,0).scale(1.15, .78, 1.15), .4 * e, 9.1 * a).translate(t, o, r)))
            },
            color: "#6f8a52",
            themed: !0,
            shadows: !0,
            jitter: .25
        },
        grass: {
            geometry: e => _(e > 0 ? 3 : 2, .9, .6),
            color: "#7d9a56",
            themed: !0,
            bladed: !0,
            shadows: !1
        },
        reed: {
            geometry: e => _(e > 0 ? 4 : 3, .55, 1.6),
            color: "#8a8d4e",
            themed: !0,
            bladed: !0,
            shadows: !1
        },
        antenna: {
            geometry: function(e) {
                let t = [j(new m.BoxGeometry(.85,.16,.85).translate(0, .08, 0), "#7a7770"), j(new m.BoxGeometry(.55,.12,.55).translate(0, .2, 0), "#6a6862")];
                for (let e = 0; e < 3; e++) {
                    let o = e * Math.PI * 2 / 3
                      , r = .28 * Math.cos(o)
                      , a = .28 * Math.sin(o)
                      , n = .12 * Math.cos(o)
                      , i = .12 * Math.sin(o)
                      , s = (r + n) / 2
                      , l = (a + i) / 2
                      , u = Math.atan2(n - r, 6.4)
                      , d = Math.atan2(i - a, 6.4);
                    t.push(j(new m.BoxGeometry(.07,6.4,.07).rotateZ(-u).rotateX(d).translate(s, .35 + 3.2, l), "#9aa1a7"))
                }
                for (let e = 0; e <= 5; e++) {
                    let o = e / 5
                      , r = .35 + 6.4 * o
                      , a = .28 + -.16000000000000003 * o;
                    for (let e = 0; e < 3; e++) {
                        let o = e * Math.PI * 2 / 3
                          , n = (e + 1) * Math.PI * 2 / 3
                          , i = Math.cos(o) * a
                          , s = Math.sin(o) * a
                          , l = Math.cos(n) * a
                          , u = Math.sin(n) * a
                          , d = (i + l) / 2
                          , c = (s + u) / 2
                          , f = Math.hypot(l - i, u - s)
                          , h = Math.atan2(u - s, l - i);
                        t.push(j(new m.BoxGeometry(f,.045,.045).rotateY(-h).translate(d, r, c), "#7a8288"))
                    }
                }
                for (let[e,o,r] of [[4.2, .78, .2], [5.35, .62, 1.9]])
                    for (let a of (t.push(j(new m.BoxGeometry(2 * o,.06,.06).rotateY(r).translate(0, e, 0), "#9aa1a7")),
                    [-1, 1]))
                        t.push(j(new m.BoxGeometry(.08,.55,.28).rotateY(r).translate(Math.cos(r) * a * o, e - .18, -Math.sin(r) * a * o), "#d2d6d8"));
                return t.push(j(B(.03, .012, 1, 4, 6.55), "#b9bec2"), j(new m.IcosahedronGeometry(.09,0).translate(0, 6.85, 0), "#c04a3a")),
                e > 0 && t.push(j(new m.BoxGeometry(.03,4.2,.03).translate(.22, 2.4, .05), "#4a4e52")),
                O(t)
            },
            color: "#ffffff",
            painted: !0,
            shadows: !0
        },
        rock: {
            geometry: function(e) {
                let t = [I(new m.IcosahedronGeometry(.66,+(e > 0)).scale(1.3, .72, 1.05), .42, 3.3, [1, .55, 1]).translate(0, .3, 0)];
                return e > 0 && t.push(I(new m.IcosahedronGeometry(.26,0).scale(1.2, .8, 1), .2, 11.4).rotateY(.8).translate(.78, .14, -.42)),
                O(t)
            },
            color: "#7c7a74",
            shadows: !0,
            jitter: .55
        },
        boulder: {
            geometry: function(e) {
                let t = e > 0 ? 2 : 1
                  , o = [I(new m.BoxGeometry(1.5,.85,1.2,t,t,t), .32, 41.2, [1, .6, 1]).rotateY(.4).translate(0, .42, 0)];
                return e > 0 && o.push(I(new m.BoxGeometry(.55,.4,.5,1,1,1), .16, 52.9, [1, .7, 1]).rotateY(-.6).translate(.95, .2, -.35)),
                O(o)
            },
            color: "#6b7278",
            shadows: !0,
            jitter: .5,
            toneSpread: .45
        },
        slab: {
            geometry: function(e) {
                let t = e > 0 ? 3 : 1;
                return O([I(new m.BoxGeometry(2.2,.22,1.3,t,1,t), .09, 63.4, [1, .4, 1]).rotateZ(.09).rotateX(-.06).translate(0, .13, 0)])
            },
            color: "#767c81",
            shadows: !0,
            jitter: .35,
            toneSpread: .4
        },
        windsock: {
            geometry: function(e) {
                let t = e > 0 ? 8 : 6
                  , o = [j(new m.BoxGeometry(.9,.16,.9).translate(0, .08, 0), "#797670"), j(T(.24, .1, t, .16), "#6f767d"), j(B(.13, .07, 5.6, t, .26), "#8d949b"), j(new m.BoxGeometry(.14,.5,.14).translate(0, 5.62, 0), "#6f767d"), j(T(.09, .22, 6, 5.5).translate(.2, 0, 0), "#5f666c"), j(new m.TorusGeometry(.5,.045,5,12).rotateY(Math.PI / 2).translate(.34, 5.6, 0), "#8d949b")];
                for (let e of [0, 2.094, 4.189])
                    o.push(j(B(.05, .04, 1.5, 4, 0).rotateZ(.42).rotateY(e).translate(-.3 * Math.cos(e), .24, .3 * Math.sin(e)), "#7c8389"));
                let r = .36
                  , a = 0;
                for (let e = 0; e < 5; e++) {
                    let n = .48 - .055 * e
                      , i = .48 - (e + 1) * .055;
                    a += .035 * (e + 1),
                    o.push(j(new m.CylinderGeometry(i,n,.56,t,1,!0).rotateZ(-Math.PI / 2).translate(r + .28, 5.6 - a, 0), e % 2 == 0 ? "#e2622a" : "#e6e9ea")),
                    r += .56
                }
                return O(o)
            },
            color: "#ffffff",
            painted: !0,
            shadows: !0
        },
        runwayLight: {
            geometry: function() {
                return O([j(T(.19, .05, 8, 0), "#313336"), j(T(.13, .06, 8, .04), "#2a2c2f"), j(new m.IcosahedronGeometry(.1,0).scale(1, .8, 1).translate(0, .13, 0), "#ffffff")])
            },
            color: "#ffcf7a",
            painted: !0,
            shadows: !1
        },
        floodlight: {
            geometry: function() {
                return O([j(new m.BoxGeometry(.18,.08,.18).translate(0, .04, 0), "#3a3d42"), j(new m.BoxGeometry(.09,2.4,.09).translate(0, 1.28, 0), "#5a6068"), j(new m.BoxGeometry(.55,.08,.08).translate(.22, 2.45, 0), "#5a6068"), j(new m.BoxGeometry(.28,.1,.22).translate(.48, 2.32, 0), "#2c2e32"), j(new m.BoxGeometry(.2,.06,.14).translate(.48, 2.24, 0), "#ffb86a")])
            },
            color: "#ffffff",
            painted: !0,
            shadows: !0
        }
    }
      , Z = {
        radome: "plastic",
        cone: "plastic",
        tyre: "rubber",
        barrel: "metal",
        bush: "foliage",
        grass: "foliage",
        reed: "foliage",
        antenna: "metal",
        rock: "concrete",
        boulder: "concrete",
        slab: "concrete",
        windsock: "plastic",
        runwayLight: "emissive",
        floodlight: "metal"
    };
    function X({props: e, theme: r, shadows: a, quality: n}) {
        let i = (0,
        o.useMemo)( () => {
            let t = +("low" !== n)
              , o = new Map
              , i = new Map
              , s = []
              , l = [];
            for (let l of function(e) {
                let t = new Map;
                for (let o of e) {
                    let e = o.lod ?? "near"
                      , r = Math.floor(o.position[0] / 90)
                      , a = Math.floor(o.position[2] / 90)
                      , n = `${o.kind}:${e}:${r}:${a}`
                      , i = t.get(n);
                    i ? i.items.push(o) : t.set(n, {
                        kind: o.kind,
                        lod: e,
                        items: [o]
                    })
                }
                return [...t.values()]
            }("low" === n ? e.filter(e => "far" !== e.lod) : e)) {
                let e, u = P[l.kind], d = u.themed ? r.patchColor : u.color, c = "far" === l.lod ? 0 : t, f = `${l.kind}:${c}`, h = o.get(f);
                if (h || (h = u.geometry(c),
                o.set(f, h)),
                u.bladed) {
                    let t = i.get(l.kind);
                    t || (t = function(e) {
                        let t = (0,
                        C.createBladeTexture)()
                          , o = new m.MeshStandardMaterial({
                            color: e,
                            transparent: !1,
                            alphaTest: .45,
                            side: m.DoubleSide,
                            roughness: .95,
                            metalness: 0
                        });
                        return t && (o.map = t),
                        o
                    }(d),
                    i.set(l.kind, t)),
                    e = t
                } else
                    e = (0,
                    M.propMaterial)(Z[l.kind], u.painted);
                let p = a && u.shadows && "far" !== l.lod && !(u.costlyShadows && "low" === n)
                  , g = (0,
                S.castsStaticShadow)(new m.InstancedMesh(h,e,l.items.length));
                g.castShadow = p,
                g.receiveShadow = p && "far" !== l.lod,
                l.items.forEach( (e, t) => {
                    z.set(e.position[0], e.position[1], e.position[2]),
                    u.jitter ? (E.set((D(t, 1) - .5) * u.jitter, e.rotationY, (D(t, 2) - .5) * u.jitter),
                    A.set(e.scale * (.84 + .34 * D(t, 3)), e.scale * (.8 + .42 * D(t, 4)), e.scale * (.84 + .34 * D(t, 5)))) : (E.set(0, e.rotationY, 0),
                    A.setScalar(e.scale)),
                    G.setFromEuler(E),
                    k.compose(z, G, A),
                    g.setMatrixAt(t, k);
                    let o = u.toneSpread ? 1 - u.toneSpread / 2 + .37 * t % 1 * u.toneSpread : .95 + .37 * t % 1 * .22;
                    F.set(e.color ?? (u.themed ? d : u.color)).multiplyScalar(o),
                    g.setColorAt(t, F)
                }
                ),
                g.instanceMatrix.needsUpdate = !0,
                g.instanceColor && (g.instanceColor.needsUpdate = !0),
                g.computeBoundingSphere(),
                s.push(g)
            }
            return {
                meshes: s,
                dispose: () => {
                    for (let e of s)
                        e.dispose();
                    for (let e of o.values())
                        e.dispose();
                    for (let e of i.values())
                        e.dispose();
                    for (let e of l)
                        e.dispose()
                }
            }
        }
        , [e, r, a, n]);
        return (0,
        o.useEffect)( () => i.dispose, [i]),
        (0,
        S.useStaticShadows)(i),
        (0,
        t.jsx)(t.Fragment, {
            children: i.meshes.map( (e, o) => (0,
            t.jsx)("primitive", {
                object: e
            }, o))
        })
    }
    var L = e.i(708374)
      , U = e.i(471646)
      , N = e.i(380416);
    let H = [.16, .28]
      , Y = [.26, .46];
    function V(e, t, o, r, a) {
        let n = (t(o + a, r) - t(o - a, r)) / (2 * a)
          , i = (t(o, r + a) - t(o, r - a)) / (2 * a)
          , s = Math.hypot(n, 1, i);
        e.push(-n / s, 1 / s, -i / s)
    }
    function W(e, t, o, r) {
        let a = new m.BufferGeometry;
        return a.setAttribute("position", new m.BufferAttribute(new Float32Array(e),3)),
        a.setAttribute("normal", new m.BufferAttribute(new Float32Array(t),3)),
        a.setAttribute("uv", new m.BufferAttribute(new Float32Array(o),2)),
        a.setIndex(r),
        a.computeBoundingSphere(),
        a
    }
    function q(e, t, o) {
        let r = t % o / o * 4
          , a = Math.floor(r)
          , n = (r - a) * 2 - 1;
        return 0 === a ? [n * e, -e] : 1 === a ? [e, n * e] : 2 === a ? [-n * e, e] : [-e, -n * e]
    }
    function $(e) {
        return !!e && "isCanvasTexture" in e && !!e.isCanvasTexture
    }
    function K({spec: e, theme: a, shadows: n, quality: i, haze: s, cloudShadows: l}) {
        let u = (0,
        o.useMemo)( () => {
            let {segments: t, size: o, heights: r} = (0,
            U.heightGrid)(e)
              , n = t + 1
              , u = o / 2
              , d = o / t
              , c = (o, a) => {
                let i = (o + u) / d
                  , s = (a + u) / d;
                if (i < 0 || s < 0 || i > t || s > t)
                    return (0,
                    U.terrainHeight)(e, o, a);
                let l = Math.round(i)
                  , c = Math.round(s);
                return 1e-6 > Math.abs(i - l) && 1e-6 > Math.abs(s - c) ? r[l * n + c] : (0,
                U.terrainHeight)(e, o, a)
            }
              , f = (0,
            N.createGroundTextures)(a, e)
              , h = f.grassTile
              , p = new m.MeshStandardMaterial({
                color: f.grass ? "#ffffff" : a.baseColor,
                roughness: .98,
                metalness: 0,
                dithering: !0,
                envMapIntensity: .7
            });
            f.grass && (p.map = f.grass);
            let g = new m.Vector2(0,0)
              , v = new m.Vector2(0,0)
              , w = new m.Color(s?.color ?? "#a4b4c6")
              , x = "low" !== i && l ? l.strength : 0
              , b = l ? 1 / l.scale : 0
              , y = {
                authoredPalette: {
                    value: +!!a.layerColors
                },
                meadowDark: {
                    value: new m.Color(a.layerColors?.meadowDark ?? a.baseColor)
                },
                meadowLight: {
                    value: new m.Color(a.layerColors?.meadowLight ?? a.patchColor)
                },
                stoneDark: {
                    value: new m.Color(a.layerColors?.rockDark ?? a.jointColor)
                },
                stoneLight: {
                    value: new m.Color(a.layerColors?.rockLight ?? a.slopeColor ?? a.jointColor)
                },
                soilColor: {
                    value: new m.Color(a.layerColors?.soil ?? a.jointColor)
                },
                dirtMap: {
                    value: f.dirt
                },
                gravelMap: {
                    value: f.gravel
                },
                rockMap: {
                    value: f.rock
                },
                macroMap: {
                    value: f.macro
                },
                blendMap: {
                    value: f.blend
                },
                dirtScale: {
                    value: 1 / f.dirtTile
                },
                gravelScale: {
                    value: 1 / f.gravelTile
                },
                rockScale: {
                    value: 1 / f.rockTile
                },
                macroScale: {
                    value: 1 / N.MACRO_SCALE
                },
                blendOrigin: {
                    value: [-e.extent, -e.extent]
                },
                blendExtent: {
                    value: 2 * e.extent
                },
                bareSlope: {
                    value: H
                },
                rockSlope: {
                    value: Y
                },
                heightFloor: {
                    value: e.floor
                },
                heightCrest: {
                    value: function(e) {
                        let {heights: t} = (0,
                        U.heightGrid)(e)
                          , o = e.base + e.noise.amplitude;
                        for (let e = 0; e < t.length; e++)
                            t[e] > o && (o = t[e]);
                        return Math.max(o, e.floor + 8)
                    }(e)
                },
                hazeColor: {
                    value: w
                },
                hazeStart: {
                    value: s?.start ?? 80
                },
                hazeEnd: {
                    value: s?.end ?? 500
                },
                hazeStrength: {
                    value: s?.strength ?? 0
                },
                cameraXZ: {
                    value: g
                },
                cloudStrength: {
                    value: x
                },
                cloudScale: {
                    value: b
                },
                cloudOffset: {
                    value: v
                }
            }
              , M = {
                cameraXZ: g,
                cloudOffset: v,
                cloudStrength: y.cloudStrength,
                cloudScale: y.cloudScale
            };
            f.dirt && f.gravel && f.rock && f.macro && f.blend && (p.onBeforeCompile = e => {
                Object.assign(e.uniforms, y),
                e.vertexShader = e.vertexShader.replace("#include <common>", "#include <common>\nvarying vec2 vGroundXZ;\nvarying float vGroundY;\nvarying float vGroundSlope;").replace("#include <begin_vertex>", `#include <begin_vertex>
	{
		vec4 worldPos = modelMatrix * vec4( transformed, 1.0 );
		vGroundXZ = worldPos.xz;
		vGroundY = worldPos.y;
		vGroundSlope = clamp( 1.0 - normalize( normal ).y, 0.0, 1.0 );
	}`),
                e.fragmentShader = e.fragmentShader.replace("#include <common>", `#include <common>
varying vec2 vGroundXZ;
varying float vGroundY;
varying float vGroundSlope;
uniform sampler2D dirtMap;
uniform float authoredPalette;
uniform vec3 meadowDark;
uniform vec3 meadowLight;
uniform vec3 stoneDark;
uniform vec3 stoneLight;
uniform vec3 soilColor;
uniform sampler2D gravelMap;
uniform sampler2D rockMap;
uniform sampler2D macroMap;
uniform sampler2D blendMap;
uniform float dirtScale;
uniform float gravelScale;
uniform float rockScale;
uniform float macroScale;
uniform vec2 blendOrigin;
uniform float blendExtent;
uniform vec2 bareSlope;
uniform vec2 rockSlope;
uniform float heightFloor;
uniform float heightCrest;
uniform vec3 hazeColor;
uniform float hazeStart;
uniform float hazeEnd;
uniform float hazeStrength;
uniform vec2 cameraXZ;
uniform float cloudStrength;
uniform float cloudScale;
uniform vec2 cloudOffset;`).replace("#include <map_fragment>", `#include <map_fragment>
	{
		vec3 grass = diffuseColor.rgb;
		vec3 dirt = texture2D( dirtMap, vGroundXZ * dirtScale ).rgb;
		vec3 gravel = texture2D( gravelMap, vGroundXZ * gravelScale ).rgb;
		vec3 rock = texture2D( rockMap, vGroundXZ * rockScale ).rgb;

		// Needed by the rock height band below, so pulled up from the macro
		// section further down rather than computed twice.
		float heightT = smoothstep( heightFloor, heightCrest, vGroundY );

		vec2 blendUv = ( vGroundXZ - blendOrigin ) / blendExtent;
		vec4 shoulder = texture2D( blendMap, blendUv );
		float slopeDirt = smoothstep( bareSlope.x, bareSlope.y, vGroundSlope );
		float slopeRock = smoothstep( rockSlope.x, rockSlope.y, vGroundSlope );

		// Sedimentary banding: a slowly-modulated sine turned into hard bands
		// with smoothstep, so exposed rock reads as stacked strata instead of one
		// flat grey mass. Modulating the frequency itself with a second, much
		// slower sine keeps individual bands from sharing one pitch, which is
		// the tell that gives a periodic function away as a barcode.
		float bandFreq = 0.85 + 0.15 * sin( vGroundY * 0.05 );
		float strata = smoothstep( 0.3, 0.7, sin( vGroundY * bandFreq ) * 0.5 + 0.5 );
		rock = mix( rock * 0.86, rock * 1.08, strata );

		// Rock wants a steep face, with only a light height gate to keep it off
		// the valley floor. The band used to open at heightT 0.12, which on this
		// terrain is about six metres up — above the drainage cut walls and the
		// runway cut banks, which are precisely the faces that should be showing
		// bedrock. It now opens just clear of the floor and is fully in by the
		// time the ground has risen a bank's worth.
		float rockHeightBand = smoothstep( 0.02, 0.22, heightT );
		float wRock = slopeRock * rockHeightBand * ( 1.0 - shoulder.r ) * ( 1.0 - shoulder.g );

		float wDirt = max( slopeDirt, shoulder.r ) * ( 1.0 - wRock );
		float wGravel = shoulder.g * ( 1.0 - slopeDirt * 0.65 );
		float wSum = max( wDirt + wGravel + wRock, 1e-4 );
		float wGrass = max( 1.0 - wSum, 0.0 );

		// Dry patches lean grass toward dirt without a fourth layer.
		grass = mix( grass, dirt, shoulder.b * 0.35 );

		// Erosion streaking: a second dirt sample at a UV stretched long in Y and
		// squeezed in XZ turns the tile's own noise into vertical run-off streaks
		// on steep faces, rather than the tile just reading as uniformly steep.
		vec2 streakUv = vec2( vGroundXZ.x * dirtScale * 3.0, vGroundY * dirtScale * 0.22 );
		vec3 streak = texture2D( dirtMap, streakUv ).rgb;
		dirt = mix( dirt, streak, slopeDirt * 0.4 );

		diffuseColor.rgb = grass * wGrass + dirt * wDirt + gravel * wGravel + rock * wRock;

        // Alpine art direction keeps meadows green and uses world-height UVs
        // on cliffs. Projecting a top-down detail tile down an almost vertical
        // face stretches it into stripes, so rock is sampled in two planes.
        if (authoredPalette > 0.5) {
          float meadowVariation = texture2D(macroMap, vGroundXZ / 145.0).g;
          vec3 meadow = mix(meadowDark, meadowLight, meadowVariation);
          float rockGrain = texture2D(rockMap, vec2(vGroundXZ.x + vGroundXZ.y * 0.35, vGroundY) / 24.0).g * 3.0;
          vec3 stone = mix(stoneDark, stoneLight, rockGrain);
          stone *= 0.88 + strata * 0.22;
          float exposed = smoothstep(0.25, 0.56, vGroundSlope);
          meadow *= 0.82 + clamp(dot(grass, vec3(0.333)) * 2.5, 0.0, 0.35);
          float shore = max(shoulder.r, shoulder.g) * 0.65;
          diffuseColor.rgb = mix(meadow, stone, exposed);
          diffuseColor.rgb = mix(diffuseColor.rgb, soilColor, shore);
        }

		// Broad environmental patches: darker valleys, moister lows, cooler shade.
		float valley = 1.0 - heightT;
		vec3 macroSample = texture2D( macroMap, vGroundXZ * macroScale ).rgb;
		float macro = dot( macroSample, vec3( 0.333 ) );
		diffuseColor.rgb *= clamp( macro * 2.0, 0.62, 1.42 );
		// Pull albedo slightly toward the macro's own hue (moist green / dry beige).
		diffuseColor.rgb = mix( diffuseColor.rgb, diffuseColor.rgb * normalize( macroSample + 0.05 ), 0.18 );
		vec3 moist = diffuseColor.rgb * vec3( 0.88, 1.06, 0.92 );
		vec3 dryHigh = diffuseColor.rgb * vec3( 1.06, 1.02, 0.94 );
		diffuseColor.rgb = mix( moist, dryHigh, heightT );
		diffuseColor.rgb = mix( diffuseColor.rgb, diffuseColor.rgb * vec3( 0.9, 0.92, 0.86 ), valley * 0.22 * ( 1.0 - shoulder.r ) );
		// Extra earth on steep faces beyond the dirt layer weight. Gated by
		// (1 - wRock) so this doesn't nudge rock-covered faces back toward dirt.
		diffuseColor.rgb = mix( diffuseColor.rgb, dirt * 0.92, slopeDirt * 0.18 * ( 1.0 - wRock ) * (1.0 - authoredPalette) );

		// Large, slow cloud-shadow multiply (quality-gated via cloudStrength).
		if ( cloudStrength > 0.001 ) {
			float cloud = texture2D( macroMap, vGroundXZ * cloudScale + cloudOffset ).r;
			float shade = mix( 1.0 - cloudStrength, 1.0, smoothstep( 0.35, 0.72, cloud ) );
			diffuseColor.rgb *= shade;
		}

		// Chromatic distance haze — cools and softens far terrain.
		if ( hazeStrength > 0.001 ) {
			float dist = length( vGroundXZ - cameraXZ );
			float hazeT = smoothstep( hazeStart, hazeEnd, dist ) * hazeStrength;
			float luma = dot( diffuseColor.rgb, vec3( 0.299, 0.587, 0.114 ) );
			vec3 cooled = mix( diffuseColor.rgb, vec3( luma ), hazeT * 0.45 );
			diffuseColor.rgb = mix( cooled, hazeColor, hazeT );
		}
	}`)
            }
            ,
            p.customProgramCacheKey = () => "sim-terrain-layers-v5");
            let C = Math.ceil(t / 8)
              , k = []
              , z = [];
            for (let o = 0; o < 8; o++) {
                let r = o * C
                  , a = Math.min(r + C, t);
                for (let o = 0; o < 8; o++) {
                    let n = o * C
                      , i = Math.min(n + C, t)
                      , s = function(e, t, o, r, a, n, i) {
                        let s = a - r
                          , l = i - n;
                        if (s < 1 || l < 1)
                            return null;
                        let {segments: u, size: d} = (0,
                        U.heightGrid)(e)
                          , c = d / u
                          , f = d / 2
                          , h = []
                          , m = []
                          , p = []
                          , g = [];
                        for (let e = 0; e <= s; e++) {
                            let a = (r + e) * c - f;
                            for (let e = 0; e <= l; e++) {
                                let r = (n + e) * c - f;
                                h.push(a, t(a, r), r),
                                V(m, t, a, r, c),
                                p.push(a / o, r / o)
                            }
                        }
                        let v = l + 1;
                        for (let e = 0; e < s; e++)
                            for (let t = 0; t < l; t++) {
                                let o = e * v + t
                                  , r = o + v;
                                g.push(o, o + 1, r + 1, o, r + 1, r)
                            }
                        return W(h, m, p, g)
                    }(e, c, h, r, a, n, i);
                    if (!s)
                        continue;
                    k.push(s);
                    let l = new m.Mesh(s,p);
                    l.matrixAutoUpdate = !1,
                    z.push((0,
                    S.castsStaticShadow)(l))
                }
            }
            let G = function(e, t, o) {
                let r = []
                  , a = []
                  , n = []
                  , i = []
                  , s = Math.pow(1500 / e.extent, .07142857142857142)
                  , l = [];
                for (let t = 0; t <= 14; t++)
                    l.push(e.extent * Math.pow(s, t));
                for (let i = 0; i <= 14; i++) {
                    let s = l[i]
                      , u = Math.max(e.resolution, 4 * s / 160 / 2);
                    for (let e = 0; e <= 160; e++) {
                        let[i,l] = q(s, e, 160);
                        r.push(i, t(i, l), l),
                        V(a, t, i, l, u),
                        n.push(i / o, l / o)
                    }
                }
                for (let e = 0; e < 14; e++)
                    for (let t = 0; t < 160; t++) {
                        let o = 161 * e + t
                          , r = o + 161;
                        i.push(o, r + 1, r, o, o + 1, r + 1)
                    }
                let u = r.length / 3;
                for (let i = 0; i <= 160; i++) {
                    let[s,l] = q(e.extent, i, 160);
                    r.push(s, t(s, l) - 4, l),
                    a.push(0, 1, 0),
                    n.push(s / o, l / o)
                }
                for (let e = 0; e < 160; e++) {
                    let t = e
                      , o = u + e;
                    i.push(t, o, o + 1, t, o + 1, t + 1),
                    i.push(t, o + 1, o, t, t + 1, o + 1)
                }
                return W(r, a, n, i)
            }(e, c, h);
            k.push(G);
            let A = new m.Mesh(G,p);
            return A.matrixAutoUpdate = !1,
            {
                detail: z,
                horizon: A,
                cloudSpeed: l?.speed ?? 0,
                liveUniforms: M,
                dispose: () => {
                    for (let e of k)
                        e.dispose();
                    f.macro?.dispose(),
                    f.blend?.dispose(),
                    f.rock?.dispose(),
                    $(f.grass) && f.grass?.dispose(),
                    $(f.dirt) && f.dirt?.dispose(),
                    $(f.gravel) && f.gravel?.dispose(),
                    p.dispose()
                }
            }
        }
        , [e, a, s, l, i]);
        (0,
        o.useEffect)( () => u.dispose, [u]),
        (0,
        S.useStaticShadows)(u),
        (0,
        r.useFrame)( ({camera: e}, t) => {
            let o = u.liveUniforms;
            if (o && (o.cameraXZ.set(e.position.x, e.position.z),
            u.cloudSpeed > 0 && o.cloudStrength.value > 0)) {
                let e = u.cloudSpeed * t * o.cloudScale.value;
                o.cloudOffset.set(o.cloudOffset.x + e, o.cloudOffset.y + .71 * e)
            }
        }
        );
        let d = n && "low" !== i;
        return (0,
        t.jsxs)(t.Fragment, {
            children: [u.detail.map( (e, o) => (0,
            t.jsx)("primitive", {
                object: e,
                castShadow: d,
                receiveShadow: n
            }, o)), (0,
            t.jsx)("primitive", {
                object: u.horizon,
                receiveShadow: !1,
                castShadow: !1
            })]
        })
    }
    var J = e.i(680043)
      , Q = e.i(856943)
      , ee = e.i(399900)
      , et = e.i(880400)
      , eo = e.i(466348)
      , er = e.i(68270)
      , ea = e.i(936812)
      , en = e.i(159745);
    function ei(e, {bounds: t, fogColor: o, drawDistance: r, range: a, key: n}) {
        let i = (0,
        d.wallDistances)(t)
          , s = {
            horizonSector: {
                value: new m.Vector4(-i.negativeX,i.positiveX,-i.negativeZ,i.positiveZ)
            },
            outskirtsHaze: {
                value: new m.Color(o)
            },
            horizonFar: {
                value: r
            },
            horizonFrom: {
                value: a.from
            },
            horizonTo: {
                value: a.to
            }
        }
          , l = e.onBeforeCompile.bind(e)
          , u = e.customProgramCacheKey.bind(e);
        e.onBeforeCompile = (e, t) => {
            l(e, t),
            Object.assign(e.uniforms, s),
            e.vertexShader = e.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vHorizonWorld;").replace("#include <project_vertex>", `#include <project_vertex>
	{
		vec4 horizonAt = vec4( transformed, 1.0 );
		#ifdef USE_BATCHING
			horizonAt = batchingMatrix * horizonAt;
		#endif
		#ifdef USE_INSTANCING
			horizonAt = instanceMatrix * horizonAt;
		#endif
		vHorizonWorld = ( modelMatrix * horizonAt ).xyz;
	}`),
            e.fragmentShader = e.fragmentShader.replace("#include <common>", `#include <common>
varying vec3 vHorizonWorld;
uniform vec4 horizonSector;
uniform vec3 outskirtsHaze;
uniform float horizonFar;
uniform float horizonFrom;
uniform float horizonTo;`).replace("#include <fog_fragment>", `#include <fog_fragment>
	{
		float outward = max( max( horizonSector.x - vHorizonWorld.x, vHorizonWorld.x - horizonSector.y ), max( horizonSector.z - vHorizonWorld.z, vHorizonWorld.z - horizonSector.w ) );
		float distanceHaze = smoothstep( horizonFar * 0.65, horizonFar * 0.94, distance( cameraPosition, vHorizonWorld ) );
		float haze = max( smoothstep( horizonFrom, horizonTo, outward ), distanceHaze );
		${h.OUTSKIRTS_TINT}
		gl_FragColor.rgb = mix( gl_FragColor.rgb, outskirtsTint, haze );
	}`)
        }
        ,
        e.customProgramCacheKey = () => `${u()}-horizon-${n}`
    }
    var es = e.i(85058);
    let el = [{
        spec: {
            form: "broadleaf",
            seed: 3
        },
        share: .32
    }, {
        spec: {
            form: "broadleaf",
            seed: 11
        },
        share: .28
    }, {
        spec: {
            form: "conifer",
            seed: 5
        },
        share: .25
    }, {
        spec: {
            form: "conifer",
            seed: 8,
            shape: "pine"
        },
        share: .15
    }]
      , eu = [{
        from: 7,
        to: 22,
        spacing: 9,
        size: [.95, 1.3],
        impostor: !1
    }, {
        from: 22,
        to: 90,
        spacing: 9.5,
        size: [1.1, 1.6],
        impostor: !0
    }, {
        from: 90,
        to: 210,
        spacing: 13,
        size: [1.4, 2],
        impostor: !0
    }, {
        from: 210,
        to: 420,
        spacing: 18,
        size: [1.8, 2.5],
        impostor: !0
    }]
      , ed = {
        low: 0,
        medium: 110,
        high: 110,
        ultra: 110
    }
      , ec = {
        low: 420,
        medium: 210,
        high: 210,
        ultra: 210
    };
    function ef(e, t, o) {
        let r = (0,
        d.wallDistances)(e);
        return Math.max(-r.negativeX - t, t - r.positiveX, -r.negativeZ - o, o - r.positiveZ)
    }
    let eh = {
        width: 256 * el.length,
        height: 640
    }
      , em = 384 / eh.height;
    function ep(e) {
        let t = e.boundingBox;
        return {
            half: 1.02 * Math.max(-t.min.x, t.max.x, -t.min.z, t.max.z),
            height: 1.02 * t.max.y
        }
    }
    function eg(e, t) {
        let o = new m.Object3D;
        return o.position.set(e.x, 0, e.z),
        o.rotation.set(0, e.yaw, 0),
        o.scale.set(e.size * (t?.half ?? 1), e.size * (t?.height ?? 1), e.size * (t?.half ?? 1)),
        o.updateMatrix(),
        o.matrix
    }
    function ev({bounds: e, fogColor: n, drawDistance: s, quality: l}) {
        let u = (0,
        i.useSceneEnvironmentPalette)()
          , c = (0,
        ea.useFoliage)()
          , f = (0,
        a.useThree)(e => e.gl)
          , h = (0,
        o.useMemo)( () => {
            var t;
            let o, r, a, n, i;
            return o = (0,
            d.wallDistances)(e),
            r = [],
            a = el.map( (e, t) => el.slice(0, t + 1).reduce( (e, t) => e + t.share, 0)),
            eu.forEach( (t, n) => {
                let i = -o.negativeX - t.to
                  , s = -o.negativeZ - t.to
                  , l = Math.ceil((o.negativeX + o.positiveX + 2 * t.to) / t.spacing)
                  , u = Math.ceil((o.negativeZ + o.positiveZ + 2 * t.to) / t.spacing);
                for (let o = 0; o < u; o++)
                    for (let u = 0; u < l; u++) {
                        let l = e => (function(e, t, o) {
                            let r = 0x165667b1 * e + 0x27d4eb2f * t + 0x4bf19f61 * o | 0;
                            return r = Math.imul(r ^ r >>> 13, 0x4bf19f61),
                            ((r ^= r >>> 16) >>> 0) / 0x100000000
                        }
                        )(7919 * n + o, u, e)
                          , d = i + (u + .15 + .7 * l(1)) * t.spacing
                          , c = s + (o + .15 + .7 * l(2)) * t.spacing
                          , f = ef(e, d, c);
                        if (f < t.from || f >= t.to)
                            continue;
                        let h = l(3)
                          , m = a.findIndex(e => h < e);
                        r.push({
                            x: d,
                            z: c,
                            yaw: l(4) * Math.PI * 2,
                            size: t.size[0] + (t.size[1] - t.size[0]) * l(5),
                            kind: m < 0 ? el.length - 1 : m,
                            band: n,
                            draw: l(6)
                        })
                    }
            }
            ),
            t = r,
            n = en.FOLIAGE_LOD[l].crown,
            i = ec[l],
            {
                trees: t.filter(t => eu[t.band].from < i && (!n || t.draw < (0,
                en.foliageShare)(n, ef(e, t.x, t.z)))),
                whole: ed[l],
                fade: n
            }
        }
        , [e, l])
          , p = (0,
        o.useMemo)( () => el.map(e => {
            var t;
            let o, r;
            return t = e.spec,
            o = (0,
            er.tree)("horizon", t, [0, 0, 0]).map(e => {
                let t = (0,
                eo.objectGeometry)(e.geometry).applyMatrix4(new m.Matrix4().fromArray(e.matrix))
                  , o = t.index ? t.toNonIndexed() : t;
                for (let e of Object.keys(o.attributes))
                    ["position", "normal", "uv", "color", "barkUv"].includes(e) || o.deleteAttribute(e);
                return o.getAttribute("barkUv") || o.setAttribute("barkUv", new m.Float32BufferAttribute(new Float32Array(2 * o.getAttribute("position").count).fill(-1),2)),
                o
            }
            ),
            r = (0,
            y.mergeGeometries)(o),
            o.forEach(e => e.dispose()),
            r.computeBoundingBox(),
            r
        }
        ), [])
          , g = (0,
        o.useMemo)( () => p.map(ep), [p])
          , v = (0,
        o.useMemo)( () => (function() {
            let e = []
              , t = []
              , o = []
              , r = (r, a, n, i) => {
                let s = Math.hypot(...a);
                e.push(...r),
                t.push(a[0] / s, a[1] / s, a[2] / s),
                o.push(n, i)
            }
              , a = [[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]];
            for (let e = 0; e < 3; e++) {
                let t = e / 3 * Math.PI
                  , o = Math.cos(t)
                  , n = Math.sin(t);
                for (let[e,t] of a) {
                    let a = (t + 1) / 2;
                    r([o * e, a, n * e], [o * e * .75, .25 + .75 * a, n * e * .75], (e + 1) / 2, a * em)
                }
            }
            for (let[e,t] of a)
                r([e, .66, t], [.4 * e, 1, .4 * t], (e + 1) / 2, em + (1 - em) * (1 - t) / 2);
            let n = new m.BufferGeometry;
            return n.setAttribute("position", new m.Float32BufferAttribute(e,3)),
            n.setAttribute("normal", new m.Float32BufferAttribute(t,3)),
            n.setAttribute("uv", new m.Float32BufferAttribute(o,2)),
            n
        }
        )(), []);
        (0,
        o.useEffect)( () => () => {
            p.forEach(e => e.dispose()),
            v.dispose()
        }
        , [p, v]);
        let w = (t, o) => (ei(t, {
            bounds: e,
            fogColor: n,
            drawDistance: s,
            range: {
                from: 50,
                to: 420
            },
            key: o
        }),
        t)
          , x = (0,
        o.useMemo)( () => w((0,
        ea.plantMaterial)(u), "forest"), [u, e, n, s])
          , b = (0,
        o.useRef)(null)
          , M = (0,
        o.useMemo)( () => {
            var e;
            let t, o;
            return w((e = h.fade,
            t = new m.MeshStandardMaterial({
                roughness: .85,
                metalness: 0,
                side: m.DoubleSide,
                alphaTest: .45
            }),
            e && (t.defines = {
                ...t.defines,
                FOREST_FADE: "",
                FOLIAGE_WEAR: en.FOLIAGE_WEAR.toFixed(3)
            }),
            o = {
                value: new m.Vector3(e?.from ?? 1e9,e?.to ?? 2e9,e?.keep ?? 1)
            },
            t.onBeforeCompile = e => {
                e.uniforms.forestFade = o,
                e.vertexShader = e.vertexShader.replace("#include <common>", "#include <common>\nattribute float impostorKind;\nattribute vec2 impostorLod;\nuniform vec3 forestFade;").replace("#include <uv_vertex>", `#include <uv_vertex>
	#ifdef USE_MAP
		vMapUv.x = ( vMapUv.x + impostorKind ) / ${el.length}.0;
	#endif`).replace("#include <project_vertex>", `#include <project_vertex>
	if ( impostorLod.y > 0.5 ) gl_Position = vec4( 2.0, 2.0, 2.0, 1.0 );
	#ifdef FOREST_FADE
	{
		float forestT = clamp( ( distance( ( modelMatrix * instanceMatrix * vec4( 0.0, 0.0, 0.0, 1.0 ) ).xyz, cameraPosition ) - forestFade.x ) / ( forestFade.y - forestFade.x ), 0.0, 1.0 );
		if ( impostorLod.x >= 1.0 + FOLIAGE_WEAR + ( forestFade.z - 1.0 - FOLIAGE_WEAR ) * forestT ) gl_Position = vec4( 2.0, 2.0, 2.0, 1.0 );
	}
	#endif`),
                e.fragmentShader = e.fragmentShader.replace("#include <normal_fragment_begin>", `#include <normal_fragment_begin>
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
		nonPerturbedNormal = normal;
	#endif`)
            }
            ,
            t.customProgramCacheKey = () => e ? "forest-impostor-fade" : "forest-impostor",
            t), "forest-impostor")
        }
        , [h.fade, e, n, s])
          , S = (0,
        o.useRef)(null);
        (0,
        r.useFrame)( () => {
            let e = "ready" === c ? JSON.stringify(u) : null;
            if (e && S.current !== e) {
                let t, o, r, a, n, i, s, l, d, c, h;
                S.current = e,
                b.current?.dispose(),
                (t = new m.WebGLRenderTarget(eh.width,eh.height,{
                    type: m.HalfFloatType,
                    depthBuffer: !0
                })).texture.generateMipmaps = !0,
                t.texture.minFilter = m.LinearMipmapLinearFilter,
                t.texture.magFilter = m.LinearFilter,
                o = new m.Scene,
                r = (0,
                ea.plantMaterial)(u),
                a = new m.Mesh(void 0,r),
                o.add(new m.AmbientLight(0xffffff,Math.PI), a),
                n = new m.OrthographicCamera(-1,1,1,0,.1,200),
                i = new m.OrthographicCamera(-1,1,1,-1,.1,200),
                n.position.set(0, 0, 100),
                i.position.set(0, 100, 0),
                i.up.set(0, 0, -1),
                i.lookAt(0, 0, 0),
                s = f.getRenderTarget(),
                l = f.getClearColor(new m.Color),
                d = f.getClearAlpha(),
                c = f.autoClear,
                f.setRenderTarget(t),
                f.setClearColor(0, 0),
                f.autoClear = !1,
                f.clear(),
                h = (e, r, a, n, i) => {
                    e.updateProjectionMatrix(),
                    t.viewport.set(r, a, n, i),
                    t.scissor.copy(t.viewport),
                    t.scissorTest = !0,
                    f.setRenderTarget(t),
                    f.render(o, e)
                }
                ,
                p.forEach( (e, t) => {
                    let {half: o, height: r} = g[t];
                    a.geometry = e,
                    n.left = -o,
                    n.right = o,
                    n.bottom = 0,
                    n.top = r,
                    h(n, 256 * t, 0, 256, 384),
                    i.left = -o,
                    i.right = o,
                    i.bottom = -o,
                    i.top = o,
                    h(i, 256 * t, 384, 256, 256)
                }
                ),
                t.viewport.set(0, 0, t.width, t.height),
                t.scissorTest = !1,
                f.setRenderTarget(s),
                f.setClearColor(l, d),
                f.autoClear = c,
                r.dispose(),
                b.current = t,
                M.map = b.current.texture,
                M.needsUpdate = !0
            }
        }
        , -60),
        (0,
        o.useEffect)( () => () => {
            x.dispose(),
            M.dispose()
        }
        , [x, M]),
        (0,
        o.useEffect)( () => () => {
            b.current?.dispose(),
            b.current = null,
            S.current = null
        }
        , []);
        let C = (0,
        o.useMemo)( () => h.whole ? h.trees.filter(e => !eu[e.band].impostor) : [], [h])
          , k = (0,
        o.useMemo)( () => {
            let e = new Set(C);
            return [...C, ...h.trees.filter(t => !e.has(t))]
        }
        , [C, h])
          , z = (0,
        o.useMemo)( () => {
            let e = v.clone();
            e.setAttribute("impostorKind", new m.InstancedBufferAttribute(new Float32Array(k.map(e => e.kind)),1)),
            e.setAttribute("impostorLod", new m.InstancedBufferAttribute(new Float32Array(k.flatMap(e => [e.draw, 0])),2));
            let t = new m.InstancedMesh(e,M,k.length);
            return k.forEach( (e, o) => t.setMatrixAt(o, eg(e, g[e.kind]))),
            t.computeBoundingSphere(),
            t.name = "Forest horizon impostors",
            t.renderOrder = es.HORIZON_RENDER_ORDER,
            t.raycast = () => {}
            ,
            t
        }
        , [k, v, M, g])
          , G = (0,
        o.useRef)(null)
          , A = (0,
        o.useRef)(null);
        (0,
        o.useEffect)( () => {
            let e = G.current;
            if (!C.length || !e)
                return;
            let t = p.reduce( (e, t) => e + t.getAttribute("position").count, 0)
              , o = new m.BatchedMesh(C.length,t,void 0,x)
              , r = p.map(e => o.addGeometry(e));
            return C.forEach(e => {
                let t = o.addInstance(r[e.kind]);
                o.setMatrixAt(t, eg(e)),
                o.setVisibleAt(t, !1)
            }
            ),
            o.sortObjects = !1,
            o.name = "Forest horizon trees",
            o.renderOrder = es.HORIZON_RENDER_ORDER,
            o.raycast = () => {}
            ,
            e.add(o),
            A.current = o,
            () => {
                e.remove(o),
                A.current === o && (A.current = null),
                o.dispose()
            }
        }
        , [C, p, x]),
        (0,
        o.useEffect)( () => () => {
            z.geometry.dispose(),
            z.dispose()
        }
        , [z]);
        let E = (0,
        o.useRef)({
            impostors: null,
            batch: null,
            at: null,
            whole: [],
            feet: new Float32Array(0),
            shares: new Float32Array(0)
        });
        return (0,
        r.useFrame)( ({camera: e}) => (function(e, t, {forest: o, near: r, impostors: a, whole: n}) {
            if (e.impostors !== a && Object.assign(e, {
                impostors: a,
                at: null,
                feet: Float32Array.from(r.flatMap(e => [e.x, 0, e.z])),
                shares: new Float32Array(r.length)
            }),
            e.batch !== n && Object.assign(e, {
                batch: n,
                at: null,
                whole: r.map( () => !1)
            }),
            !n || e.at && 1 > e.at.distanceToSquared(t))
                return;
            e.at = (e.at ?? new m.Vector3).copy(t),
            o.fade && (0,
            en.instanceShares)(e.feet, t, o.fade, e.shares);
            let i = a.geometry.getAttribute("impostorLod")
              , s = i.array
              , l = o.whole * o.whole
              , u = !1;
            for (let a = 0; a < r.length; a++) {
                let i = r[a]
                  , d = i.x - t.x
                  , c = t.y
                  , f = i.z - t.z
                  , h = d * d + c * c + f * f < l
                  , m = h && (!o.fade || i.draw < e.shares[a]);
                m !== e.whole[a] && (e.whole[a] = m,
                n.setVisibleAt(a, m));
                let p = +!!h;
                s[2 * a + 1] !== p && (s[2 * a + 1] = p,
                u = !0)
            }
            u && (i.clearUpdateRanges(),
            i.addUpdateRange(0, 2 * r.length),
            i.needsUpdate = !0)
        }
        )(E.current, e.position, {
            forest: h,
            near: C,
            impostors: z,
            whole: A.current
        }), -55),
        (0,
        t.jsx)("group", {
            ref: G,
            name: "Forest horizon",
            visible: "ready" === c,
            children: (0,
            t.jsx)("primitive", {
                object: z
            })
        })
    }
    var ew = e.i(806159);
    let ex = "#e3cf9c";
    function eb(e) {
        let t = (0,
        d.wallDistances)(e);
        return {
            center: [(t.positiveX - t.negativeX) / 2, (t.positiveZ - t.negativeZ) / 2],
            half: [(t.positiveX + t.negativeX) / 2 + 22, (t.positiveZ + t.negativeZ) / 2 + 22],
            radius: 48
        }
    }
    function ey({center: e, half: t, radius: o}, r, a=12) {
        let n = [];
        for (let[i,s,l] of [[1, 1, 0], [-1, 1, .5], [-1, -1, 1], [1, -1, 1.5]]) {
            let u = e[0] + i * (t[0] - o)
              , d = e[1] + s * (t[1] - o);
            for (let e = 0; e <= a; e++) {
                let t = (l + e / a * .5) * Math.PI
                  , i = Math.cos(t)
                  , s = Math.sin(t);
                n.push({
                    p: [u + i * (o + r), d + s * (o + r)],
                    n: [i, s]
                })
            }
        }
        return n
    }
    let eM = [{
        seed: 2,
        height: 8.5,
        lean: 1.2
    }, {
        seed: 7,
        height: 10.5,
        lean: 2
    }];
    function eS(e, t) {
        let o = 0x165667b1 * e + 0x27d4eb2f * t | 0;
        return o = Math.imul(o ^ o >>> 13, 0x4bf19f61),
        ((o ^= o >>> 16) >>> 0) / 0x100000000
    }
    function eC({bounds: e, fogColor: r, drawDistance: a}) {
        let s = (0,
        i.useSceneEnvironmentPalette)()
          , l = (0,
        ea.useFoliage)()
          , u = (0,
        o.useMemo)( () => eb(e), [e])
          , d = (0,
        o.useMemo)( () => {
            let e;
            return (e = new m.Shape([[-4e3, -4e3], [4e3, -4e3], [4e3, 4e3], [-4e3, 4e3]].map( ([e,t]) => new m.Vector2(e,t)))).holes.push(new m.Path(ey(u, 1).map( ({p: e}) => new m.Vector2(e[0],-e[1])))),
            new m.ShapeGeometry(e).rotateX(-Math.PI / 2).translate(0, -.7, 0)
        }
        , [u])
          , c = (0,
        o.useMemo)( () => (function(e) {
            let t = ey(e, -.5)
              , o = ey(e, 16)
              , r = [];
            for (let e = 0; e < t.length; e++) {
                let a = (e + 1) % t.length
                  , n = [t[e].p[0], -.01, t[e].p[1]]
                  , i = [t[a].p[0], -.01, t[a].p[1]]
                  , s = [o[a].p[0], -1.8, o[a].p[1]]
                  , l = [o[e].p[0], -1.8, o[e].p[1]];
                r.push(...n, ...i, ...s, ...n, ...s, ...l)
            }
            let a = new m.BufferGeometry;
            return a.setAttribute("position", new m.Float32BufferAttribute(r,3)),
            a.computeVertexNormals(),
            a
        }
        )(u), [u])
          , f = (0,
        o.useMemo)( () => {
            let e, t, o, r, a;
            return e = new m.Color(ex),
            t = new m.Color("#5d8f45"),
            o = new m.Color("#456f36"),
            r = [[.5, 250, 240, 80, 15], [2.2, 300, 170, 60, 10], [3.6, 230, 300, 100, 20], [5.1, 280, 200, 70, 12]].map( ([r,a,n,i,s]) => {
                let l = [[0, s], [.3, .92 * s], [.6, .62 * s], [.85, .25 * s], [.95, 1.2], [1, -.6], [1.05, -2]].map( ([e,t]) => new m.Vector2(e,t))
                  , d = new m.LatheGeometry(l,28).toNonIndexed()
                  , c = d.getAttribute("position")
                  , f = [];
                for (let r = 0; r < c.count; r++) {
                    let a = c.getY(r)
                      , n = a < 1.6 ? e : t.clone().lerp(o, Math.min(1, a / s));
                    f.push(n.r, n.g, n.b)
                }
                d.setAttribute("color", new m.Float32BufferAttribute(f,3));
                let h = Math.cos(r)
                  , p = Math.sin(r)
                  , g = Math.min(u.half[0] / Math.max(Math.abs(h), 1e-6), u.half[1] / Math.max(Math.abs(p), 1e-6))
                  , v = u.center[0] + h * (g + a)
                  , w = u.center[1] + p * (g + a);
                return d.applyMatrix4(new m.Matrix4().makeScale(n / 2, 1, i / 2)).applyMatrix4(new m.Matrix4().makeRotationY(-r + Math.PI / 2)).translate(v, -.7, w),
                d
            }
            ),
            a = (0,
            y.mergeGeometries)(r),
            r.forEach(e => e.dispose()),
            a.computeVertexNormals(),
            a
        }
        , [u])
          , h = (0,
        o.useMemo)( () => eM.map( ({seed: e, height: t, lean: o}) => {
            let r, a;
            return r = (0,
            er.palm)("horizon palm", [0, 0, 0], [o, t, 0], {
                seed: e
            }).map(e => {
                let t = (0,
                eo.objectGeometry)(e.geometry).applyMatrix4(new m.Matrix4().fromArray(e.matrix))
                  , o = t.index ? t.toNonIndexed() : t;
                for (let e of Object.keys(o.attributes))
                    ["position", "normal", "uv", "color", "barkUv"].includes(e) || o.deleteAttribute(e);
                return o.getAttribute("barkUv") || o.setAttribute("barkUv", new m.Float32BufferAttribute(new Float32Array(2 * o.getAttribute("position").count).fill(-1),2)),
                o
            }
            ),
            a = (0,
            y.mergeGeometries)(r),
            r.forEach(e => e.dispose()),
            a
        }
        ), [])
          , p = (0,
        o.useMemo)( () => (function(e) {
            let t = ey(e, -6, 24)
              , o = []
              , r = Math.floor(t.reduce( (e, {p: o}, r) => e + Math.hypot(o[0] - t[(r + 1) % t.length].p[0], o[1] - t[(r + 1) % t.length].p[1]), 0) / 7);
            for (let e = 0, a = 0, n = 0; e < r; e++) {
                let r = 7 * e;
                for (; n < t.length - 1; ) {
                    let e = t[n].p
                      , o = t[n + 1].p
                      , i = Math.hypot(o[0] - e[0], o[1] - e[1]);
                    if (a + i >= r)
                        break;
                    a += i,
                    n++
                }
                if (.45 > eS(Math.floor(e / 5), 3) || .3 > eS(e, 5))
                    continue;
                let i = t[n].p
                  , s = t[(n + 1) % t.length].p
                  , l = Math.min(1, (r - a) / (Math.hypot(s[0] - i[0], s[1] - i[1]) || 1))
                  , u = t[n].n
                  , d = (eS(e, 7) - .5) * 5;
                o.push({
                    x: i[0] + (s[0] - i[0]) * l + u[0] * d,
                    z: i[1] + (s[1] - i[1]) * l + u[1] * d,
                    yaw: eS(e, 11) * Math.PI * 2,
                    size: .85 + .35 * eS(e, 13),
                    kind: .5 > eS(e, 17) ? 0 : 1
                })
            }
            return o
        }
        )(u), [u]);
        (0,
        o.useEffect)( () => () => {
            d.dispose(),
            c.dispose(),
            f.dispose()
        }
        , [d, c, f]),
        (0,
        o.useEffect)( () => () => h.forEach(e => e.dispose()), [h]);
        let g = (t, o, n=150, i=900) => (ei(t, {
            bounds: e,
            fogColor: r,
            drawDistance: a,
            range: {
                from: n,
                to: i
            },
            key: o
        }),
        t)
          , v = (0,
        o.useMemo)( () => {
            let e = {
                center: u.center,
                half: u.half,
                radius: u.radius,
                waterline: 6.222222222222221,
                open: 70
            };
            return {
                water: g((0,
                ew.waterMaterial)(s, e), "sea"),
                sand: g(new m.MeshStandardMaterial({
                    color: (0,
                    n.ownColor)(ex, s),
                    roughness: 1,
                    metalness: 0
                }), "beach"),
                island: g(new m.MeshStandardMaterial({
                    vertexColors: !0,
                    roughness: 1,
                    metalness: 0,
                    flatShading: !0
                }), "island", 150, 700),
                palm: g((0,
                ea.plantMaterial)(s), "palm")
            }
        }
        , [s, u, e, r, a]);
        (0,
        o.useEffect)( () => () => Object.values(v).forEach(e => e.dispose()), [v]);
        let w = (0,
        o.useMemo)( () => h.map( (e, t) => {
            let o = p.filter(e => e.kind === t)
              , r = new m.InstancedMesh(e,v.palm,o.length)
              , a = new m.Object3D;
            return o.forEach( (e, t) => {
                a.position.set(e.x, 0, e.z),
                a.rotation.set(0, e.yaw, 0),
                a.scale.setScalar(e.size),
                a.updateMatrix(),
                r.setMatrixAt(t, a.matrix)
            }
            ),
            r.computeBoundingSphere(),
            r.name = "Sea horizon palms",
            r.renderOrder = es.HORIZON_RENDER_ORDER,
            r.raycast = () => {}
            ,
            r
        }
        ), [h, p, v]);
        return (0,
        o.useEffect)( () => () => w.forEach(e => e.dispose()), [w]),
        (0,
        t.jsxs)("group", {
            name: "Sea horizon",
            children: [(0,
            t.jsx)("mesh", {
                geometry: d,
                material: v.water,
                name: "Sea horizon water",
                renderOrder: es.HORIZON_RENDER_ORDER,
                raycast: () => {}
            }), (0,
            t.jsx)("mesh", {
                geometry: c,
                material: v.sand,
                name: "Sea horizon beach",
                renderOrder: es.HORIZON_RENDER_ORDER,
                raycast: () => {}
            }), (0,
            t.jsx)("mesh", {
                geometry: f,
                material: v.island,
                name: "Sea horizon islands",
                renderOrder: es.HORIZON_RENDER_ORDER,
                raycast: () => {}
            }), (0,
            t.jsx)("group", {
                visible: "ready" === l,
                children: w.map( (e, o) => (0,
                t.jsx)("primitive", {
                    object: e
                }, o))
            })]
        })
    }
    function ek({horizon: e, bounds: o, fogColor: r, drawDistance: a, quality: n}) {
        switch (e) {
        case "city":
            return (0,
            t.jsx)(et.GridworksOutskirts, {
                bounds: o,
                fogColor: r,
                drawDistance: a
            });
        case "forest":
            return (0,
            t.jsx)(ev, {
                bounds: o,
                fogColor: r,
                drawDistance: a,
                quality: n
            });
        case "sea":
            return (0,
            t.jsx)(eC, {
                bounds: o,
                fogColor: r,
                drawDistance: a
            })
        }
    }
    var ez = e.i(702404)
      , eG = e.i(271e3)
      , eA = e.i(251441)
      , eE = e.i(125002);
    e.i(536202);
    var eF = e.i(61607);
    e.s(["SimEnvironmentView", 0, function({world: e, quality: m, shadows: p, drawDistance: g, focus: v, still: w=!1, movingShadows: x}) {
        var y, M;
        let S, C, k, z, G = (0,
        i.useSceneEnvironmentPalette)(), A = (0,
        u.useWorldLook)(), E = (0,
        eF.useSkyParallax)(), F = (0,
        o.useMemo)( () => {
            let t = (0,
            l.lookEnvironment)(A, e.environment);
            return "grid" === t.ground.surface ? (0,
            s.themeMapEnvironment)(t, G) : t
        }
        , [e.environment, G, A]);
        (0,
        eE.loadTextures)((0,
        eA.skyTextureUrls)(F, m, E));
        let D = (0,
        o.useMemo)( () => "grid" !== e.environment.ground.surface || "classic" === G ? e : {
            ...e,
            boxes: e.boxes.map(e => ({
                ...e,
                color: "emissive" === e.surface && (0,
                n.isOriginalEnvironment)(G) ? e.color : (0,
                n.environmentColor)(e.color, G)
            })),
            prisms: e.prisms?.map(e => ({
                ...e,
                color: "emissive" === e.surface && (0,
                n.isOriginalEnvironment)(G) ? e.color : (0,
                n.environmentColor)(e.color, G)
            }))
        }, [e, G])
          , j = (0,
        d.worldBound)(e.bounds)
          , O = e.bounds.ceiling
          , R = e.terrain
          , I = !R && "grid" === e.environment.ground.surface
          , B = e.horizon ?? ee.DEFAULT_HORIZON
          , T = (0,
        o.useMemo)( () => I ? function(e, t, o) {
            switch (e) {
            case "city":
                return;
            case "forest":
                return {
                    floor: (0,
                    n.ownColor)("#56703f", o)
                };
            case "sea":
                return {
                    shore: {
                        ...eb(t),
                        sand: (0,
                        n.ownColor)(ex, o)
                    }
                }
            }
        }(B, e.bounds, G) : void 0, [I, B, e.bounds, G])
          , _ = F.fog.skirt
          , P = (y = !R && ("surface" === A.contact || "low" !== m),
        M = A.cover,
        S = (0,
        a.useThree)(e => e.gl),
        C = (0,
        a.useThree)(e => e.scene),
        k = (0,
        o.useMemo)( () => y ? new eG.GroundOcclusion(M) : void 0, [y, M]),
        (0,
        o.useEffect)( () => () => k?.dispose(), [k]),
        z = (0,
        o.useRef)(!0),
        (0,
        o.useEffect)( () => {
            z.current = !0
        }
        , [e, k]),
        (0,
        r.useFrame)( () => {
            if (!k || !z.current)
                return;
            z.current = !1;
            let t = (0,
            d.wallDistances)(e.bounds);
            k.bake(S, C, {
                minX: -t.negativeX,
                maxX: t.positiveX,
                minZ: -t.negativeZ,
                maxZ: t.positiveZ,
                ceiling: e.bounds.ceiling
            })
        }
        , -50),
        k)
          , Z = (0,
        o.useMemo)( () => (0,
        l.lookIndoor)(A, F) && !!e.editorDocument && (0,
        Q.hasIndoorFixtures)(e.editorDocument), [A, F, e.editorDocument]);
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(c.Atmosphere, {
                environment: F,
                quality: m,
                shadows: p,
                drawDistance: g,
                focus: v,
                bounds: e.bounds,
                movingShadows: x
            }, `${e.mapId}-atmosphere`), (0,
            t.jsx)(f.WorldGrade, {
                environment: F
            }), _ && !I ? (0,
            t.jsx)(b, {
                bound: j,
                color: _.color ?? F.fog.color,
                opacity: _.opacity,
                height: _.height ?? O,
                inset: _.inset ?? 0,
                fadeMeters: _.fadeMeters ?? 50
            }) : null, R ? (0,
            t.jsx)(K, {
                spec: R,
                theme: F.ground,
                shadows: p,
                quality: m,
                haze: F.haze,
                cloudShadows: F.cloudShadows
            }, `${e.mapId}-terrain`) : (0,
            t.jsx)(h.Ground, {
                theme: F.ground,
                shadows: p,
                haze: F.haze,
                playableBounds: e.bounds,
                outskirtsFogColor: F.fog.color,
                occlusion: P,
                quality: m,
                indoor: Z,
                horizon: T
            }), I && (0,
            t.jsx)(ek, {
                horizon: B,
                bounds: e.bounds,
                fogColor: F.fog.color,
                drawDistance: g,
                quality: m
            }), "gridworks" !== e.mapId || e.editorDocument ? null : (0,
            t.jsx)(ez.GridworksTrack, {
                shadows: p,
                quality: m
            }), e.editorDocument && (0,
            t.jsx)(J.RuntimeEditorObjects, {
                document: e.editorDocument,
                quality: m,
                still: w,
                indoorLight: F.indoorLight
            }), (0,
            t.jsx)(L.StaticGeometry, {
                boxes: D.boxes,
                prisms: D.prisms,
                environment: F,
                shadows: p,
                quality: m,
                authored: e,
                terrain: R
            }, `${e.mapId}-geometry`), (0,
            t.jsx)(X, {
                props: e.props,
                theme: F.ground,
                shadows: p,
                quality: m
            })]
        })
    }
    ], 211090)
}
]);s