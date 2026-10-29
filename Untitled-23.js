(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 627872, e => {
    "use strict";
    var t = e.i(271645)
      , r = e.i(94800)
      , a = e.i(190072)
      , o = e.i(579832)
      , i = e.i(171204)
      , n = e.i(526241)
      , l = e.i(106258)
      , s = e.i(809886);
    e.s(["CoasterAudio", 0, function({group: e, document: u}) {
        let c = (0,
        t.useRef)(null)
          , d = (0,
        t.useMemo)( () => ({
            matrix: new a.Matrix4,
            position: new a.Vector3,
            ahead: new a.Vector3,
            listener: new a.Vector3
        }), []);
        return (0,
        t.useEffect)( () => () => {
            c.current?.dispose(),
            c.current = null
        }
        , [e]),
        (0,
        r.useFrame)( ({clock: t, camera: r}) => {
            let a = e.motion.coaster;
            if (!a)
                return;
            let f = (0,
            o.getDroneAudio)();
            if (!f)
                return;
            c.current ??= f.createCoasterVoice(a.leadOffset);
            let h = i.prefabReplayClocks.get(u)
              , m = h ? h.current : i.prefabPhysicsClocks.get(u)?.current ?? t.elapsedTime;
            if (void 0 === m)
                return void c.current.update(d.position, 0, 0, 0, !1);
            let p = (t, r) => {
                let o = (0,
                n.coasterTravelDistance)(t, a.leadOffset, a.layout) - 1.5 * n.COASTER_CAR_SPACING;
                return (0,
                n.coasterFrame)(o, d.matrix, a.layout).premultiply(e.owner),
                r.setFromMatrixPosition(d.matrix)
            }
            ;
            p(m, d.position),
            p(m + .02, d.ahead);
            let g = d.position.distanceTo(d.ahead) / .02;
            r.getWorldPosition(d.listener),
            c.current.update(d.position, g, d.position.distanceTo(d.listener), m, !document.hidden && !(0,
            s.isPhasePaused)(l.useSimStore.getState().phase))
        }
        ),
        null
    }
    ])
}
, 83724, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , a = e.i(94800)
      , o = e.i(848546)
      , i = e.i(223490)
      , n = e.i(135702)
      , l = e.i(785110)
      , s = e.i(190072)
      , u = e.i(723038)
      , c = e.i(753522)
      , d = e.i(408560);
    let f = [0, 1, 2, 3, 4].map(e => `/sim/characters/hero-dummy-lod${e}.glb`)
      , h = f.length;
    function m(e) {
        if ("c_traj" === e)
            return "root.x";
        if (/^c_(thumb|index|middle|ring|pinky)\d\.[lr]$/.test(e))
            return `hand.${e.at(-1)}`;
        let t = /^(thigh|leg|arm|forearm)_twist\.([lr])$/.exec(e);
        return t ? `${t[1]}_stretch.${t[2]}` : /^toes_01\.[lr]$/.test(e) ? `foot.${e.at(-1)}` : e
    }
    let p = new WeakMap
      , g = `
uniform highp sampler2D heroPalettes;
uniform int heroFirst;
uniform int heroStride;
attribute vec4 skinIndex;
attribute vec4 skinWeight;
void heroBlend(float slot, float weight, inout vec4 r0, inout vec4 r1, inout vec4 r2) {
  int texel = heroFirst + gl_InstanceID * heroStride + int(slot) * 3;
  ivec2 at = ivec2(texel % 2046, texel / 2046);
  r0 += weight * texelFetch(heroPalettes, at, 0);
  r1 += weight * texelFetch(heroPalettes, at + ivec2(1, 0), 0);
  r2 += weight * texelFetch(heroPalettes, at + ivec2(2, 0), 0);
}
`
      , v = `
vec4 heroRow0 = vec4(0.0), heroRow1 = vec4(0.0), heroRow2 = vec4(0.0);
heroBlend(skinIndex.x, skinWeight.x, heroRow0, heroRow1, heroRow2);
heroBlend(skinIndex.y, skinWeight.y, heroRow0, heroRow1, heroRow2);
heroBlend(skinIndex.z, skinWeight.z, heroRow0, heroRow1, heroRow2);
heroBlend(skinIndex.w, skinWeight.w, heroRow0, heroRow1, heroRow2);
mat4 heroSkin = transpose(mat4(heroRow0, heroRow1, heroRow2, vec4(0.0, 0.0, 0.0, 1.0)));
`
      , w = ["vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;", "vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;"]
      , b = w.every(e => d.ShaderChunk.uv_vertex.includes(e)) ? w.reduce( (e, t) => e.replace(t, ""), d.ShaderChunk.uv_vertex) : null
      , y = `
float metalnessFactor = metalness;
float roughnessFactor = roughness;
vec4 heroSurface = texture2D(metalnessMap, vMapUv);
metalnessFactor *= heroSurface.b;
roughnessFactor *= heroSurface.g;
`
      , M = e => 0 === e.offset.x && 0 === e.offset.y && 1 === e.repeat.x && 1 === e.repeat.y && 0 === e.rotation;
    function x(e, t, r=!1) {
        r && b && (e.vertexShader = e.vertexShader.replace("#include <uv_vertex>", b),
        e.fragmentShader = e.fragmentShader.replace("#include <roughnessmap_fragment>", "").replace("#include <metalnessmap_fragment>", y)),
        Object.assign(e.uniforms, t),
        e.vertexShader = e.vertexShader.replace("#include <skinning_pars_vertex>", g).replace("#include <skinbase_vertex>", v).replace("#include <skinnormal_vertex>", "objectNormal = (heroSkin * vec4(objectNormal, 0.0)).xyz;").replace("#include <skinning_vertex>", "transformed = (heroSkin * vec4(transformed, 1.0)).xyz;")
    }
    let S = new s.Matrix4;
    class E {
        texture;
        data;
        used = 0;
        constructor(e) {
            const t = Math.max(1, Math.ceil(e * c.HERO_BONES.length * 3 / 2046));
            this.data = new Float32Array(2046 * t * 4),
            this.texture = new s.DataTexture(this.data,2046,t,s.RGBAFormat,s.FloatType),
            this.texture.minFilter = this.texture.magFilter = s.NearestFilter,
            this.texture.generateMipmaps = !1
        }
        reset() {
            this.used = 0
        }
        get texel() {
            return this.used / 4
        }
        write(e, t) {
            let {slots: r, binds: a} = t
              , o = this.data;
            for (let t = 0; t < r.length; t++) {
                let i = S.multiplyMatrices(e[r[t]], a[t]).elements
                  , n = this.used + 3 * t * 4;
                o[n] = i[0],
                o[n + 1] = i[4],
                o[n + 2] = i[8],
                o[n + 3] = i[12],
                o[n + 4] = i[1],
                o[n + 5] = i[5],
                o[n + 6] = i[9],
                o[n + 7] = i[13],
                o[n + 8] = i[2],
                o[n + 9] = i[6],
                o[n + 10] = i[10],
                o[n + 11] = i[14]
            }
            this.used += 3 * r.length * 4
        }
        last(e, t) {
            let r = 3 * e.slots.length * 4
              , a = this.data.subarray(this.used - r, this.used);
            return t?.length !== r ? a.slice() : (t.set(a),
            t)
        }
        append(e) {
            this.data.set(e, this.used),
            this.used += e.length
        }
        upload() {
            if (this.used) {
                for (let e = 0; e < this.used; e += 8184)
                    this.texture.addUpdateRange(e, Math.min(8184, this.used - e));
                this.texture.needsUpdate = !0
            }
        }
        dispose() {
            this.texture.dispose()
        }
    }
    let _ = new s.Frustum
      , A = new s.Matrix4
      , C = new s.Sphere
      , R = new s.Vector3
      , T = new s.Vector3;
    class F {
        meshes;
        draws;
        palettes;
        bones = (0,
        u.createHeroBones)();
        versions;
        closest = 1 / 0;
        constructor(e, t, r) {
            this.palettes = new E(r),
            this.draws = e.map( (e, a) => {
                var o;
                let i, n, l, u, d = {
                    heroPalettes: {
                        value: this.palettes.texture
                    },
                    heroFirst: {
                        value: 0
                    },
                    heroStride: {
                        value: 3 * e.slots.length
                    }
                }, {material: f, depth: h} = (n = function(e) {
                    let {map: t, metalnessMap: r, roughnessMap: a} = e;
                    return !!b && !!t && !!r && r === a && r.channel === t.channel && M(t) && M(r)
                }(i = e.material.clone()),
                i.onBeforeCompile = e => x(e, d, n),
                i.customProgramCacheKey = () => n ? "hero-dummy-palette-shared-v1" : "hero-dummy-palette-v1",
                (l = new s.MeshDepthMaterial).onBeforeCompile = e => x(e, d),
                l.customProgramCacheKey = () => "hero-dummy-palette-depth-v1",
                {
                    material: i,
                    depth: l
                }), m = new s.Mesh(e.geometry,f);
                m.name = `Hero dummy lod${t[a]}`,
                m.customDepthMaterial = h,
                m.frustumCulled = !1,
                m.visible = !1;
                let p = {
                    level: e,
                    folded: e.slots.length < c.HERO_BONES.length,
                    uniforms: d,
                    mesh: m,
                    material: f,
                    depth: h,
                    count: 0,
                    order: new Uint32Array(r),
                    kept: new Map
                };
                return o = () => p.count,
                u = m.geometry,
                m.onBeforeRender = (e, t, r, a, i) => {
                    u.instanceCount = i === m.material ? o() : 0
                }
                ,
                m.onBeforeShadow = (e, t, r, a, i, n) => {
                    u.instanceCount = n === m.customDepthMaterial ? o() : 0
                }
                ,
                p
            }
            ),
            this.meshes = this.draws.map(e => e.mesh)
        }
        update(e, t, r, a, o) {
            let i = this.draws;
            if (o !== this.versions) {
                for (let e of i)
                    e.kept.clear();
                this.versions = o
            }
            for (let e of i)
                e.count = 0;
            r && _.setFromProjectionMatrix(A.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), t.coordinateSystem, t.reversedDepth),
            this.closest = 1 / 0,
            T.setFromMatrixPosition(t.matrixWorld);
            for (let t = 0; t < e.length; t++) {
                let a = function(e, t, r, a) {
                    let o = e.elements;
                    if (0 === o[0] && 0 === o[5] && 0 === o[10])
                        return -1;
                    if (!a)
                        return 0;
                    R.set(o[12], o[13], o[14]);
                    let i = R.distanceTo(t);
                    if (i >= a[a.length - 1] || !r.intersectsSphere(C.set(R, 1.6)))
                        return -1;
                    let n = 0;
                    for (; i >= a[n]; )
                        n++;
                    return n
                }(e[t][0], T, _, r);
                !(a < 0) && (i[a].order[i[a].count++] = t,
                0 === a && r && (this.closest = Math.min(this.closest, R.setFromMatrixPosition(e[t][0]).distanceTo(T))))
            }
            for (let t of (this.palettes.reset(),
            i)) {
                t.uniforms.heroFirst.value = this.palettes.texel;
                for (let r = 0; r < t.count; r++) {
                    let i = t.order[r]
                      , n = o && t.kept.get(i)
                      , l = o?.[i];
                    if (n && n.version === l) {
                        this.palettes.append(n.palette);
                        continue
                    }
                    this.palettes.write((0,
                    u.heroBoneMatrices)(e[i], this.bones, t.folded ? null : a?.[i]), t.level),
                    void 0 !== l && (n ? (n.version = l,
                    this.palettes.last(t.level, n.palette)) : t.kept.set(i, {
                        version: l,
                        palette: this.palettes.last(t.level)
                    }))
                }
                t.mesh.visible = t.count > 0
            }
            this.palettes.upload()
        }
        counts() {
            return this.draws.map(e => e.count)
        }
        dispose() {
            for (let e of (this.palettes.dispose(),
            this.draws))
                e.material.dispose(),
                e.depth.dispose()
        }
    }
    let k = new WeakMap
      , D = new Map;
    function I(e, t) {
        let r = D.get(t);
        if (!r) {
            let a, o = new i.GLTFLoader().setKTX2Loader((!(a = k.get(e)) && k.set(e, a = new n.KTX2Loader().setTranscoderPath("/sim/characters/basis/").detectSupport(e)),
            a)).setMeshoptDecoder(l.MeshoptDecoder).loadAsync(f[t]);
            o.then(e => {
                Object.assign(o, {
                    status: "fulfilled",
                    value: e
                })
            }
            , () => D.delete(t)),
            D.set(t, r = o)
        }
        return r
    }
    function O(e) {
        let t = D.get(e);
        return t?.status === "fulfilled" ? t.value : void 0
    }
    e.s(["DUMMY_LOD", 0, {
        low: {
            until: [0, 3, 5, 10, 160]
        },
        medium: {
            until: [1, 4, 7, 14, 160],
            nearestOnDemand: !0
        },
        high: {
            until: [1.5, 5, 8, 16, 160],
            nearestOnDemand: !0
        },
        ultra: {
            until: [2, 6.5, 10, 21, 160]
        }
    }, "DummyBatch", 0, function({poses: e, bones: i, shadows: n=!1, visible: l=!0, lod: u, versions: d}) {
        let f = (0,
        o.useThree)(e => e.gl)
          , [g,v] = (0,
        r.useState)( () => !!O(0))
          , w = (0,
        r.useRef)(!1)
          , b = (0,
        r.useMemo)( () => (function(e, t=!0) {
            if (!e)
                return [0];
            let r = Array.from({
                length: h
            }, (e, t) => t).filter(t => e.until[t] > (t ? e.until[t - 1] : 0));
            return t || !e.nearestOnDemand ? r : r.slice(1)
        }
        )(u, g), [u, g])
          , y = (0,
        r.useMemo)( () => u && b.map(e => u.until[e]), [u, b]);
        for (let e of b)
            (0,
            r.use)(I(f, e));
        let M = (0,
        r.useMemo)( () => new F(b.map(e => (function(e, t=!1) {
            let r, a = p.get(e) ?? [];
            if (a[+t])
                return a[+t];
            if (e.traverse(e => {
                e.isSkinnedMesh && !r && (r = e)
            }
            ),
            !r)
                throw Error("Hero Dummy level has no skinned mesh");
            let {skeleton: o, bindMatrix: i} = r
              , n = new Map(c.HERO_BONES.map( (e, t) => [s.PropertyBinding.sanitizeNodeName(e.name), t]))
              , l = o.bones.map(e => {
                let t = n.get(e.name);
                if (void 0 === t)
                    throw Error(`Hero Dummy bone ${e.name} is not in HERO_BONES`);
                return t
            }
            )
              , u = c.HERO_BONES.flatMap( (e, r) => t && m(e.name) !== e.name ? [] : [r])
              , d = new Map(u.map( (e, t) => [c.HERO_BONES[e].name, t]))
              , f = l.map(e => d.get(t ? m(c.HERO_BONES[e].name) : c.HERO_BONES[e].name))
              , h = u.map( () => new s.Matrix4);
            l.forEach( (e, t) => {
                u[f[t]] === e && h[f[t]].multiplyMatrices(o.boneInverses[t], i)
            }
            );
            let g = function(e, t) {
                let r = new s.InstancedBufferGeometry;
                for (let[t,a] of (r.setIndex(e.index),
                Object.entries(e.attributes)))
                    r.setAttribute(t, a);
                let a = e.getAttribute("skinIndex")
                  , o = new Uint8Array(4 * a.count);
                for (let e = 0; e < a.count; e++)
                    for (let r = 0; r < 4; r++)
                        o[4 * e + r] = t[a.getComponent(e, r)];
                return r.setAttribute("skinIndex", new s.BufferAttribute(o,4)),
                r.instanceCount = 0,
                r
            }(r.geometry, f)
              , v = {
                geometry: g,
                material: r.material,
                slots: u,
                binds: h,
                triangles: (g.index?.count ?? g.getAttribute("position").count) / 3
            };
            return a[+t] = v,
            p.set(e, a),
            v
        }
        )(O(e).scene, e >= 3)),b,e.length), [b, e.length]);
        return (0,
        r.useEffect)( () => () => M.dispose(), [M]),
        (0,
        a.useFrame)( ({camera: t}) => {
            l && (M.update(e, t, y, i, d),
            u?.nearestOnDemand && !g && !w.current && M.closest < u.until[0] && (w.current = !0,
            I(f, 0).then( () => v(!0), () => {}
            )))
        }
        , -2),
        (0,
        t.jsx)("group", {
            visible: l,
            name: "Hero dummies",
            children: M.meshes.map(e => (0,
            t.jsx)("primitive", {
                object: e,
                castShadow: n,
                receiveShadow: !0,
                dispose: null
            }, e.name))
        })
    }
    ], 83724)
}
, 867238, 342519, 159745, 936812, e => {
    "use strict";
    let t;
    var r = e.i(843476)
      , a = e.i(271645)
      , o = e.i(190072)
      , i = e.i(401475)
      , n = e.i(920755);
    let l = "billboard-media"
      , s = /^https:\/\/[a-z0-9]+\.supabase\.co\/storage\/v1\/object\/public\/billboard-media\//;
    function u(e) {
        return s.test(e)
    }
    async function c() {
        let {data: e, error: t} = await (0,
        n.createClient)().from("sim_billboard_media").select("id,name,path,width,height").eq("removed", !1).order("created_at", {
            ascending: !1
        });
        if (t)
            throw Error(`Media library unavailable: ${t.message}`);
        return e ?? []
    }
    async function d(e) {
        let t = {
            "image/png": "png",
            "image/jpeg": "jpg",
            "image/webp": "webp"
        };
        if (!t[e.type])
            throw Error("Choose a PNG, JPEG, or WebP image.");
        if (e.size > 0xa00000)
            throw Error("Images must be 10 MB or smaller.");
        let r = await createImageBitmap(e)
          , {width: a, height: o} = r;
        if (r.close(),
        a > 8192 || o > 8192)
            throw Error("Images must be at most 8192 pixels on each side.");
        let i = (0,
        n.createClient)()
          , {data: {user: s}} = await i.auth.getUser();
        if (!s)
            throw Error("Sign in to upload media.");
        let u = crypto.randomUUID()
          , c = `${s.id}/${u}.${t[e.type]}`
          , {error: d} = await i.storage.from(l).upload(c, e, {
            contentType: e.type,
            upsert: !1
        });
        if (d)
            throw Error(d.message);
        let f = {
            id: u,
            path: c,
            name: e.name.slice(0, 200),
            width: a,
            height: o
        }
          , {error: h} = await i.from("sim_billboard_media").insert({
            ...f,
            owner_id: s.id
        });
        if (h)
            throw Error(`Could not add image to the library: ${h.message}`);
        return f
    }
    async function f(e) {
        let {error: t} = await (0,
        n.createClient)().from("sim_billboard_media").update({
            removed: !0
        }).eq("id", e);
        if (t)
            throw Error(t.message)
    }
    e.s(["isRetiredBillboardMedia", 0, u, "listMedia", 0, c, "mediaContent", 0, function(e) {
        return {
            name: e.name,
            width: e.width,
            height: e.height,
            url: (0,
            n.createClient)().storage.from(l).getPublicUrl(e.path).data.publicUrl
        }
    }
    , "removeMedia", 0, f, "uploadMedia", 0, d], 342519);
    var h = e.i(225228);
    let m = {
        onBeforeCompile: function(e) {
            e.fragmentShader = e.fragmentShader.replace("#include <opaque_fragment>", `
    outgoingLight = vec3(dot(outgoingLight, vec3(0.2126, 0.7152, 0.0722)));
    #include <opaque_fragment>`)
        },
        customProgramCacheKey: () => "billboard-monochrome-v1"
    };
    e.s(["BillboardDisplay", 0, function({billboard: e, aspect: t, monochrome: n=!1}) {
        let l = e.media && !u(e.media.url) ? e.media : void 0
          , s = l?.url ?? null
          , c = (0,
        a.useContext)(h.SceneAssetReadiness)
          , d = (0,
        a.useContext)(h.SceneAssetFailures)
          , [f,p] = (0,
        a.useState)(null);
        (0,
        a.useEffect)( () => {
            if (!s)
                return;
            let e = !0
              , t = Symbol(s);
            c?.add(t);
            let r = new o.TextureLoader().load(s, r => {
                c?.delete(t),
                r.colorSpace = o.SRGBColorSpace,
                e && p({
                    url: s,
                    texture: r
                })
            }
            , void 0, () => {
                c?.delete(t),
                d?.add(s),
                e && p(null)
            }
            );
            return () => {
                e = !1,
                c?.delete(t),
                r.dispose()
            }
        }
        , [s, c, d]);
        let g = f?.url === s ? f?.texture : void 0
          , v = l ? l.width / l.height / t : 1
          , w = "cover" === e.fit;
        return ((0,
        a.useEffect)( () => {
            if (!g)
                return;
            let e = w ? Math.min(1, 1 / v) : 1
              , t = w ? Math.min(1, v) : 1;
            g.repeat.set(e, t),
            g.offset.set((1 - e) / 2, (1 - t) / 2)
        }
        , [g, v, w]),
        g) ? (0,
        r.jsxs)("mesh", {
            position: [0, 0, i.BILLBOARD_IMAGE_POSITION_Z],
            scale: w ? [1, 1, 1] : [Math.min(1, v), Math.min(1, 1 / v), 1],
            raycast: () => {}
            ,
            children: [(0,
            r.jsx)("planeGeometry", {
                args: [1, 1]
            }), (0,
            r.jsx)("meshBasicMaterial", {
                map: g,
                toneMapped: !1,
                ...n ? m : {}
            }, n ? "monochrome" : "color")]
        }) : null
    }
    ], 867238);
    var p = e.i(525902)
      , g = e.i(569638);
    let v = ["shrub", "flowering", "fern", "grass", "trailing"];
    function w(e, t) {
        if (!e)
            return 1.2;
        let r = Math.min(1, Math.max(0, (t - e.from) / (e.to - e.from)));
        return 1.2 + (e.keep - 1 - .2) * r
    }
    function b() {
        if (t)
            return t;
        let e = new o.Texture
          , r = new o.Texture;
        for (let t of [e, r])
            t.colorSpace = o.SRGBColorSpace,
            t.flipY = !1,
            t.premultiplyAlpha = !1,
            t.magFilter = o.LinearFilter,
            t.minFilter = o.LinearMipmapLinearFilter,
            t.anisotropy = 4;
        return e.wrapS = e.wrapT = o.ClampToEdgeWrapping,
        e.generateMipmaps = !1,
        r.wrapS = o.ClampToEdgeWrapping,
        r.wrapT = o.RepeatWrapping,
        t = {
            leaves: e,
            bark: r
        }
    }
    e.s(["FOLIAGE_LOD", 0, {
        low: {
            understorey: {
                from: 50,
                to: 70,
                keep: 0
            },
            crown: {
                from: 100,
                to: 150,
                keep: .5
            }
        },
        medium: {
            understorey: {
                from: 80,
                to: 110,
                keep: 0
            },
            crown: {
                from: 140,
                to: 200,
                keep: .5
            }
        },
        high: {
            understorey: null,
            crown: null
        },
        ultra: {
            understorey: null,
            crown: null
        }
    }, "FOLIAGE_WEAR", 0, .2, "foliageShare", 0, w, "foliageTier", 0, function(e) {
        return e?.kind !== "plant" ? null : v.includes(e.form) ? "understorey" : "crown"
    }
    , "instanceShares", 0, function(e, t, r, a=new Float32Array(e.length / 3)) {
        for (let o = 0; o < a.length; o++) {
            let i = e[3 * o] - t.x
              , n = e[3 * o + 1] - t.y
              , l = e[3 * o + 2] - t.z;
            a[o] = w(r, Math.sqrt(i * i + n * n + l * l))
        }
        return a
    }
    ], 159745);
    let y = {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        imageOrientation: "from-image"
    }
      , M = (e, t) => t ? createImageBitmap(e, t[0], t[1], t[2], t[3], y) : createImageBitmap(e, y);
    async function x(e) {
        let t = await fetch(e);
        if (!t.ok)
            throw Error(`Foliage texture ${e}: ${t.status}`);
        return t.blob()
    }
    async function S(e) {
        let[t,r] = await Promise.all([x(p.default.leaves.url), x(p.default.bark.url)])
          , [a,o] = await Promise.all([M(t), M(r)])
          , i = await Promise.all(p.default.leaves.levels.map(e => M(a, e))).finally( () => a.close());
        e.leaves.image = i[0],
        e.leaves.mipmaps = i,
        e.leaves.needsUpdate = !0,
        e.bark.image = o,
        e.bark.needsUpdate = !0
    }
    let E = "loading"
      , _ = !1
      , A = new Set
      , C = {
        value: 1
    };
    function R(e) {
        E = e,
        C.value = +("ready" !== e),
        A.forEach(e => e())
    }
    function T() {
        return E
    }
    function F(e) {
        return A.add(e),
        () => {
            A.delete(e)
        }
    }
    let k = new o.Color(g.PLANT_COLORS.leaf)
      , D = new o.Color(g.PLANT_COLORS.bark)
      , I = e => e ? new o.Vector3(e.from,e.to,e.keep) : new o.Vector3(1e9,2e9,1)
      , O = 10
      , B = 32767;
    e.s(["bakePlantColors", 0, function(e) {
        e.getAttribute("color") || e.setAttribute("color", new o.BufferAttribute(new Float32Array(3 * e.getAttribute("position").count).fill(1),3))
    }
    , "plantMaterial", 0, function(e="classic", t) {
        let {leaves: r, bark: a} = b()
          , i = (0,
        g.plantTint)(e)
          , n = new o.MeshStandardMaterial({
            map: r,
            vertexColors: !0,
            roughness: .8,
            metalness: 0,
            side: o.DoubleSide,
            alphaTest: .5
        })
          , l = !!t && (!!t.understorey || !!t.crown);
        l && (n.defines = {
            ...n.defines,
            FOLIAGE_FADE: "",
            FOLIAGE_WEAR: "0.200",
            FOLIAGE_FOOT_SCALE: O.toFixed(1),
            FOLIAGE_RANK_SCALE: B.toFixed(1)
        });
        let s = {
            foliageUnderstorey: {
                value: I(t?.understorey ?? null)
            },
            foliageCrown: {
                value: I(t?.crown ?? null)
            },
            barkMap: {
                value: a
            },
            foliageFlat: C,
            foliageFlatLeaf: {
                value: k
            },
            foliageFlatBark: {
                value: D
            },
            foliageAccent: {
                value: new o.Color(i.accent)
            },
            foliageMix: {
                value: i.mix
            },
            foliageShade: {
                value: i.shade
            },
            foliageGrey: {
                value: +!!i.grey
            }
        };
        return n.onBeforeCompile = e => {
            Object.assign(e.uniforms, s),
            e.vertexShader = e.vertexShader.replace("#include <common>", `#include <common>
attribute vec2 barkUv;
varying vec2 vBarkUv;
#ifdef FOLIAGE_FADE
attribute vec4 foliageAnchor;
uniform vec3 foliageUnderstorey;
uniform vec3 foliageCrown;
varying float vFoliageWear;
#endif`).replace("#include <uv_vertex>", "#include <uv_vertex>\n	vBarkUv = barkUv;").replace("#include <project_vertex>", `#include <project_vertex>
#ifdef FOLIAGE_FADE
	bool foliageUnder = foliageAnchor.w < 0.0;
	vec3 foliageFade = foliageUnder ? foliageUnderstorey : foliageCrown;
	float foliageRank = ( foliageUnder ? - foliageAnchor.w - 1.0 : foliageAnchor.w ) / FOLIAGE_RANK_SCALE;
	float foliageT = clamp( ( distance( ( modelMatrix * vec4( foliageAnchor.xyz / FOLIAGE_FOOT_SCALE, 1.0 ) ).xyz, cameraPosition ) - foliageFade.x ) / ( foliageFade.y - foliageFade.x ), 0.0, 1.0 );
	float foliageShare = 1.0 + FOLIAGE_WEAR + ( foliageFade.z - 1.0 - FOLIAGE_WEAR ) * foliageT;
	vFoliageWear = clamp( ( foliageRank - foliageShare ) / FOLIAGE_WEAR + 1.0, 0.0, 1.0 );
	if ( foliageRank >= foliageShare ) gl_Position = vec4( 2.0, 2.0, 2.0, 1.0 );
#endif`),
            e.fragmentShader = e.fragmentShader.replace("#include <common>", `#include <common>
uniform sampler2D barkMap;
uniform float foliageFlat;
uniform vec3 foliageFlatLeaf;
uniform vec3 foliageFlatBark;
uniform vec3 foliageAccent;
uniform float foliageMix;
uniform float foliageShade;
uniform float foliageGrey;
varying vec2 vBarkUv;
#ifdef FOLIAGE_FADE
varying float vFoliageWear;
#endif`).replace("#include <map_fragment>", `{
	vec2 leafDx = dFdx( vMapUv ), leafDy = dFdy( vMapUv ), barkDx = dFdx( vBarkUv ), barkDy = dFdy( vBarkUv );
	if ( foliageFlat > 0.5 ) diffuseColor.rgb *= vBarkUv.x < 0.0 ? foliageFlatLeaf : foliageFlatBark;
	else if ( vBarkUv.x < 0.0 ) diffuseColor *= textureGrad( map, vMapUv, leafDx, leafDy );
	else diffuseColor.rgb *= textureGrad( barkMap, vBarkUv, barkDx, barkDy ).rgb;
}`).replace("#include <color_fragment>", `#include <color_fragment>
	diffuseColor.rgb = foliageGrey > 0.5 ? vec3( dot( diffuseColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) ) ) : mix( diffuseColor.rgb, foliageAccent, foliageMix );
	diffuseColor.rgb *= foliageShade;`).replace("#include <alphatest_fragment>", `#include <alphatest_fragment>
#ifdef FOLIAGE_FADE
	if ( diffuseColor.a < mix( alphaTest, 1.001, vFoliageWear ) ) discard;
#endif`).replace("#include <normal_fragment_begin>", `#include <normal_fragment_begin>
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
		nonPerturbedNormal = normal;
	#endif`)
        }
        ,
        n.customProgramCacheKey = () => l ? "foliage-fade" : "foliage",
        n
    }
    , "useFoliage", 0, function(e=!0) {
        let t = (0,
        a.useSyncExternalStore)(F, T, () => "loading");
        return (0,
        a.useEffect)( () => {
            e && function() {
                if (_)
                    return;
                _ = !0;
                let e = b()
                  , t = r => S(e).then( () => R("ready"), e => {
                    console.warn(e),
                    "flat" !== E && R("flat"),
                    r + 1 < 8 && setTimeout( () => void t(r + 1), Math.min(6e4, 2e3 * 2 ** r))
                }
                );
                t(0)
            }()
        }
        , [e]),
        t
    }
    , "writeFoliageAnchor", 0, function(e, t, r, a) {
        let i = function(e, t) {
            let r = e.getAttribute("position")
              , a = r.count / 3
              , o = new Int32Array(a).map( (e, t) => t)
              , i = e => {
                for (; o[e] !== e; )
                    e = o[e] = o[o[e]];
                return e
            }
              , n = r.array instanceof Float32Array ? r.array : Float32Array.from(r.array)
              , l = new Uint32Array(n.buffer,n.byteOffset,n.length)
              , s = new Map;
            for (let e = 0; e < a; e++)
                for (let t = 3 * e; t < 3 * e + 3; t++) {
                    let r = (Math.imul(l[3 * t], 0x466f45d) ^ Math.imul(l[3 * t + 1], 0x127409f) ^ Math.imul(l[3 * t + 2], 0x4f9ffb7)) >>> 0
                      , a = s.get(r);
                    void 0 === a ? s.set(r, e) : o[i(e)] = i(a)
                }
            let u = new Map
              , c = new Float32Array(r.count);
            for (let e = 0; e < a; e++) {
                let r = i(e);
                u.has(r) || u.set(r, u.size);
                let a = (.6180339887 * u.get(r) + t) % 1;
                c[3 * e] = c[3 * e + 1] = c[3 * e + 2] = a
            }
            return c
        }(e, r)
          , n = new Int16Array(4 * i.length)
          , [l,s,u] = t.map(e => Math.max(-32768, Math.min(32767, Math.round(e * O))));
        for (let e = 0; e < i.length; e++) {
            let t = Math.round(i[e] * B);
            n[4 * e] = l,
            n[4 * e + 1] = s,
            n[4 * e + 2] = u,
            n[4 * e + 3] = "understorey" === a ? -t - 1 : t
        }
        e.setAttribute("foliageAnchor", new o.BufferAttribute(n,4))
    }
    ], 936812)
}
, 126441, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , a = e.i(94800)
      , o = e.i(190072)
      , i = e.i(723038)
      , n = e.i(818686)
      , l = e.i(324792)
      , s = e.i(791560)
      , u = e.i(979392)
      , c = e.i(171204)
      , d = e.i(83724);
    let f = new o.Matrix4
      , h = new o.Vector3
      , m = new o.Vector3
      , p = new o.Frustum
      , g = new o.Matrix4
      , v = new o.Sphere
      , w = [{
        from: 40,
        hz: 15
    }, {
        from: 90,
        hz: 7
    }];
    e.s(["PrefabDummies", 0, function({document: e, photograph: o=!1, shadows: b=!1, quality: y="medium"}) {
        let M = (0,
        r.useMemo)( () => (0,
        l.prefabRiders)(e), [e])
          , x = (0,
        r.useMemo)( () => Float64Array.from(M, l.riderReach), [M])
          , S = (0,
        r.useMemo)( () => M.map(n.createPose), [M])
          , E = (0,
        r.useMemo)( () => M.map(i.createBonePose), [M])
          , _ = (0,
        r.useMemo)( () => ({
            due: new Float64Array(M.length),
            posed: new Float64Array(M.length).fill(NaN),
            versions: new Uint32Array(M.length),
            fixed: Uint8Array.from(M, e => +!!(0,
            l.riderFixed)(e)),
            locals: M.map(e => e.motion && (0,
            s.poseAnimated)(e.dummy.pose) ? (0,
            n.createPose)() : void 0)
        }), [M])
          , A = o ? void 0 : d.DUMMY_LOD[y];
        return (0,
        a.useFrame)( ({clock: t, camera: r}) => {
            let a = o ? void 0 : c.prefabReplayClocks.get(e);
            !function(e, t, r, a, o, i, n, s, u=!1, c) {
                let d = s ? s.until[s.until.length - 1] : 1 / 0
                  , {due: b, posed: y, versions: M, fixed: x, locals: S} = o;
                s && p.setFromProjectionMatrix(g.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), n.coordinateSystem, n.reversedDepth),
                m.setFromMatrixPosition(n.matrixWorld);
                for (let o = 0; o < e.length; o++) {
                    let n = e[o]
                      , g = r[o];
                    if (u || n.id === c) {
                        for (let e of g)
                            e.makeScale(0, 0, 0);
                        y[o] = NaN;
                        continue
                    }
                    let E = 1 / 0;
                    if (s) {
                        h.setFromMatrixPosition((0,
                        l.prefabRiderRoot)(n, i, f));
                        let e = h.distanceTo(m);
                        if (e > d + t[o] || !p.intersectsSphere(v.set(h, t[o]))) {
                            g[0].makeScale(0, 0, 0),
                            y[o] = NaN;
                            continue
                        }
                        (!n.motion || S[o]) && (E = function(e) {
                            let t = 1 / 0;
                            for (let r of w)
                                e >= r.from && (t = r.hz);
                            return t
                        }(e))
                    }
                    if (E !== 1 / 0 && i < b[o] && i >= y[o]) {
                        let e = S[o];
                        if (e) {
                            (0,
                            l.prefabRiderBase)(n, i, f, f);
                            for (let t = 0; t < g.length; t++)
                                g[t].multiplyMatrices(f, e[t]);
                            M[o]++
                        }
                        continue
                    }
                    if (E !== 1 / 0) {
                        let e = .6180339887498949 * o % 1;
                        b[o] = (Math.floor(i * E + e) + 1 - e) / E
                    }
                    y[o] = i,
                    !x[o] && M[o]++;
                    let _ = S[o];
                    if (_) {
                        let e = (0,
                        l.prefabRiderLocal)(n, i, a[o]);
                        for (let t = 0; t < _.length; t++)
                            _[t].copy(e[t]);
                        (0,
                        l.prefabRiderBase)(n, i, f, s ? f : void 0);
                        for (let e = 0; e < g.length; e++)
                            g[e].multiplyMatrices(f, _[e])
                    } else
                        (0,
                        l.posePrefabRider)(n, i, g, a[o], s ? f : void 0)
                }
            }(M, x, S, E, _, o ? 0 : a ? a.current ?? 0 : c.prefabPhysicsClocks.get(e)?.current ?? t.elapsedTime, r, A, !!a && void 0 === a.current, u.impactPlayback.actor)
        }
        , -2.4),
        (0,
        t.jsx)(d.DummyBatch, {
            poses: S,
            bones: E,
            shadows: b,
            lod: A,
            versions: _.versions
        })
    }
    ])
}
, 680043, 856943, 806159, e => {
    "use strict";
    let t, r;
    var a = e.i(843476)
      , o = e.i(627872)
      , i = e.i(160717)
      , n = e.i(244050)
      , l = e.i(867238)
      , s = e.i(930215)
      , u = e.i(271645)
      , c = e.i(190072)
      , d = e.i(94800)
      , f = e.i(991930)
      , h = e.i(171204)
      , m = e.i(552260)
      , p = e.i(622803)
      , g = e.i(466348)
      , v = e.i(708374)
      , w = e.i(391810)
      , b = e.i(777149)
      , y = e.i(85058)
      , M = e.i(79856)
      , x = e.i(936812)
      , S = e.i(159745)
      , E = e.i(814966)
      , _ = e.i(216339)
      , A = e.i(378423)
      , C = e.i(268795)
      , R = e.i(252497)
      , T = e.i(338168)
      , F = e.i(166636)
      , k = e.i(294980)
      , D = e.i(202771)
      , I = e.i(126441)
      , O = e.i(324792)
      , B = e.i(848546)
      , L = e.i(241792)
      , U = e.i(70642)
      , W = e.i(521068);
    let P = null
      , G = new c.Matrix4
      , z = {
        distance: 0,
        steer: 0
    };
    function N({document: e, photograph: t=!1, quality: r="high"}) {
        let o, i = (0,
        u.useMemo)( () => {
            let t, r;
            return t = (0,
            s.resolveDocument)(e),
            r = (0,
            p.worldMatrices)(t),
            t.nodes.filter(e => e.kart).map(e => {
                let t = {
                    matrix: new c.Matrix4,
                    color: e.kart.color,
                    number: e.kart.number,
                    distance: 0,
                    steer: 0
                };
                return e.motion && e.parentId ? {
                    kart: e.kart,
                    motion: e.motion,
                    owner: r.get(e.parentId).clone(),
                    local: new c.Matrix4().fromArray(e.matrix),
                    fleet: t
                } : {
                    kart: e.kart,
                    owner: r.get(e.id).clone(),
                    local: new c.Matrix4,
                    fleet: t
                }
            }
            )
        }
        , [e]), n = (0,
        u.useMemo)( () => i.map(e => e.fleet), [i]), l = (0,
        B.useThree)(e => e.gl), f = (0,
        W.useFleetMaterials)(l), m = (o = (0,
        u.useMemo)( () => P ??= {
            resources: (0,
            U.createKartResources)(new c.MeshStandardMaterial({
                map: function() {
                    let e = document.createElement("canvas");
                    e.width = 256 * U.PLATE_COLUMNS,
                    e.height = 160 * U.PLATE_NUMBERS / U.PLATE_COLUMNS;
                    let t = e.getContext("2d");
                    t.textAlign = "center",
                    t.textBaseline = "middle";
                    for (let e = 0; e < U.PLATE_NUMBERS; e++) {
                        let r = e % U.PLATE_COLUMNS * 256
                          , a = 160 * Math.floor(e / U.PLATE_COLUMNS);
                        t.fillStyle = "#efece1",
                        t.beginPath(),
                        t.roundRect(r + 8, a + 8, 240, 144, 22),
                        t.fill(),
                        t.strokeStyle = "#242c30",
                        t.lineWidth = 5,
                        t.beginPath(),
                        t.roundRect(r + 20, a + 20, 216, 120, 14),
                        t.stroke(),
                        t.fillStyle = "#1c252c",
                        t.font = "italic 900 118px sans-serif",
                        t.fillText(String(e + 1), r + 128, a + 80 + 6)
                    }
                    let r = new c.CanvasTexture(e);
                    return r.colorSpace = c.SRGBColorSpace,
                    r.anisotropy = 4,
                    r
                }(),
                transparent: !0,
                alphaTest: .1,
                roughness: .5,
                polygonOffset: !0,
                polygonOffsetFactor: -1
            })),
            users: 0
        }, []),
        (0,
        u.useEffect)( () => (o.users++,
        () => {
            o.users--,
            queueMicrotask( () => {
                o.users || P !== o || (P = null,
                o.resources.plates.material.map?.dispose(),
                (0,
                U.disposeKartResources)(o.resources))
            }
            )
        }
        ), [o]),
        o.resources), g = (0,
        u.useMemo)( () => new U.KartBatches(m,f,Math.max(1, i.length)), [m, f, i.length]);
        return (0,
        u.useEffect)( () => (g.attach(),
        () => g.dispose()), [g]),
        (0,
        u.useEffect)( () => g.setShadows("low" !== r), [g, r]),
        (0,
        d.useFrame)( ({clock: a, camera: o, size: l}) => {
            let s = t ? void 0 : h.prefabReplayClocks.get(e);
            if (g.show(!s || void 0 !== s.current)) {
                var u = t ? 0 : s ? s.current : h.prefabPhysicsClocks.get(e)?.current ?? a.elapsedTime;
                for (let {motion: e, owner: t, local: r, fleet: a} of i) {
                    if (!e) {
                        a.matrix.copy(t);
                        continue
                    }
                    a.matrix.copy(t).multiply((0,
                    h.motionMatrix)(e, u, G)).multiply(r),
                    e.rig?.id === "whoop-karts" && ((0,
                    L.kartWheels)(e.rig.index, u, z),
                    a.distance = z.distance,
                    a.steer = z.steer)
                }
                g.update(n, o, l.height, r, t ? "close" : void 0)
            }
        }
        , -2.4),
        (0,
        a.jsx)("primitive", {
            object: g.root,
            dispose: null
        })
    }
    let j = new c.Vector3
      , H = new c.Vector3;
    function V({document: e}) {
        let r = (0,
        n.useSceneEnvironmentPalette)()
          , o = (0,
        u.useMemo)( () => (function(e, t) {
            let r = (0,
            s.resolveDocument)(e)
              , a = (0,
            p.worldMatrices)(r)
              , o = r.nodes.filter(e => e.sign && !e.geometry && !e.motion);
            if (!o.length)
                return null;
            let[n,l] = i.SIGN_ATLAS_SIZE
              , u = []
              , d = []
              , f = []
              , h = []
              , m = []
              , g = []
              , v = new c.Color
              , w = new c.Matrix4;
            for (let e of o) {
                let r = e.sign
                  , {quads: o, ink: [s,c,p,b]} = (0,
                i.signLayout)(r)
                  , y = a.get(e.id);
                for (let {quad: [e,a,M,x], cell: [S,E,_,A]} of (v.set((0,
                i.signColors)(r.color, r.behind, t).text),
                H.setFromMatrixColumn(y, 2).normalize(),
                w.makeScale(1 / (p - s), 1 / (b - c), 1).setPosition(-(s + p) / 2 / (p - s), -(c + b) / 2 / (b - c), 0).premultiply(y),
                o)) {
                    let t = u.length / 3;
                    for (let[t,o,s,c] of [[e, a, S, E + A], [M, a, S + _, E + A], [M, x, S + _, E], [e, x, S, E]])
                        j.set(t, o, 0).applyMatrix4(w),
                        u.push(j.x, j.y, j.z),
                        d.push(H.x, H.y, H.z),
                        f.push(s / n, c / l),
                        h.push(v.r, v.g, v.b),
                        m.push(r.lit ? i.SIGN_GLOW : 0);
                    g.push(t, t + 1, t + 2, t, t + 2, t + 3)
                }
            }
            let b = new c.BufferGeometry;
            return b.setAttribute("position", new c.BufferAttribute(new Float32Array(u),3)),
            b.setAttribute("normal", new c.BufferAttribute(new Float32Array(d),3)),
            b.setAttribute("signUv", new c.BufferAttribute(new Float32Array(f),2)),
            b.setAttribute("color", new c.BufferAttribute(new Float32Array(h),3)),
            b.setAttribute("signGlow", new c.BufferAttribute(new Float32Array(m),1)),
            b.setIndex(g),
            b.computeBoundingSphere(),
            b
        }
        )(e, r), [e, r])
          , l = function(e) {
            let[r,a] = (0,
            u.useState)(null);
            return (0,
            u.useEffect)( () => {
                if (!e)
                    return;
                let r = !0
                  , o = () => (t ??= (async () => {
                    let e = await fetch(i.SIGN_ATLAS_URL);
                    if (!e.ok)
                        throw Error(`Sign atlas: ${e.status}`);
                    let t = await createImageBitmap(await e.blob())
                      , [r,a] = i.SIGN_ATLAS_SIZE
                      , o = document.createElement("canvas");
                    o.width = r,
                    o.height = a;
                    let n = o.getContext("2d", {
                        willReadFrequently: !0
                    });
                    n.drawImage(t, 0, 0),
                    t.close();
                    let l = n.getImageData(0, 0, r, a).data
                      , s = new Uint8Array(r * a);
                    for (let e = 0; e < s.length; e++)
                        s[e] = l[4 * e];
                    let u = new c.DataTexture(s,r,a,c.RedFormat,c.UnsignedByteType);
                    return u.minFilter = c.LinearMipmapLinearFilter,
                    u.magFilter = c.LinearFilter,
                    u.generateMipmaps = !0,
                    u.anisotropy = 4,
                    u.unpackAlignment = 1,
                    u.needsUpdate = !0,
                    u
                }
                )().catch(e => {
                    throw t = void 0,
                    e
                }
                )).then(e => {
                    r && a(e)
                }
                , e => console.warn(e))
                  , n = "function" == typeof requestIdleCallback ? requestIdleCallback(o, {
                    timeout: 2e3
                }) : void 0
                  , l = void 0 === n ? setTimeout(o, 500) : void 0;
                return () => {
                    r = !1,
                    void 0 !== n && cancelIdleCallback(n),
                    void 0 !== l && clearTimeout(l)
                }
            }
            , [e]),
            r
        }(!!o)
          , d = (0,
        u.useMemo)( () => {
            let e;
            return l && ((e = new c.MeshStandardMaterial({
                vertexColors: !0,
                roughness: .85,
                transparent: !0,
                depthWrite: !1
            })).onBeforeCompile = e => {
                e.uniforms.signAtlas = {
                    value: l
                },
                e.vertexShader = e.vertexShader.replace("#include <common>", "#include <common>\nattribute vec2 signUv;\nattribute float signGlow;\nvarying vec2 vSignUv;\nvarying float vSignGlow;").replace("#include <uv_vertex>", "#include <uv_vertex>\nvSignUv = signUv;\nvSignGlow = signGlow;"),
                e.fragmentShader = e.fragmentShader.replace("#include <common>", "#include <common>\nuniform sampler2D signAtlas;\nvarying vec2 vSignUv;\nvarying float vSignGlow;").replace("#include <color_fragment>", `#include <color_fragment>
float signDistance = texture2D(signAtlas, vSignUv).r;
float signEdge = max(fwidth(signDistance) * 0.7, 1e-4);
diffuseColor.a *= smoothstep(0.5 - signEdge, 0.5 + signEdge, signDistance);
if (diffuseColor.a < 0.004) discard;`).replace("#include <opaque_fragment>", "if (vSignGlow > 0.0) outgoingLight = diffuseColor.rgb * vSignGlow;\n#include <opaque_fragment>")
            }
            ,
            e.customProgramCacheKey = () => "prefab-signs-v1",
            e)
        }
        , [l]);
        return ((0,
        u.useEffect)( () => () => o?.dispose(), [o]),
        (0,
        u.useEffect)( () => () => d?.dispose(), [d]),
        o && d) ? (0,
        a.jsx)("mesh", {
            geometry: o,
            material: d,
            receiveShadow: !0
        }) : null
    }
    var K = e.i(998494)
      , X = e.i(736659)
      , $ = e.i(985249);
    function Z(e) {
        return (0,
        s.resolveDocument)(e).nodes.some(e => e.light?.intensity || e.sign?.lit)
    }
    let Y = new c.Matrix4().makeScale(1, 1, .02);
    function q(e, t, r, a=0) {
        let o = (0,
        B.useThree)(e => e.gl)
          , i = (0,
        B.useThree)(e => e.scene)
          , n = (0,
        u.useMemo)( () => {
            var r;
            let i, n;
            if (!t)
                return null;
            let l = o.getContext();
            return r = l.getParameter(l.MAX_3D_TEXTURE_SIZE),
            i = performance.now(),
            (n = function(e, t=0, r=1 / 0) {
                let a = (0,
                s.resolveDocument)(e)
                  , o = (0,
                p.worldMatrices)(a)
                  , i = []
                  , n = [];
                for (let e of a.nodes) {
                    let t = o.get(e.id)
                      , r = e.light?.intensity ? {
                        matrix: t,
                        color: new c.Color(e.light.color ?? "#ffffff"),
                        intensity: e.light.intensity,
                        fill: !e.geometry
                    } : e.sign?.lit ? {
                        matrix: t.clone().multiply(Y),
                        color: new c.Color(e.sign.color),
                        intensity: 20,
                        fill: !1
                    } : null;
                    if (r && n.push(r),
                    !e.geometry || e.hidden || e.light)
                        continue;
                    let a = (0,
                    $.lightBlockerShape)(e.geometry);
                    a && i.push({
                        matrix: t,
                        shape: a
                    })
                }
                if (!n.length)
                    return null;
                let l = e.bounds ? (0,
                K.wallDistances)(e.bounds) : void 0;
                return (0,
                $.indoorVolume)(i, n, {
                    ground: t,
                    maxSize: r,
                    limits: l && {
                        minX: -l.negativeX,
                        maxX: l.positiveX,
                        minZ: -l.negativeZ,
                        maxZ: l.positiveZ
                    }
                })
            }(e, a, r)) && {
                volume: n,
                cpuMs: performance.now() - i
            }
        }
        , [e, t, a, o])
          , l = (0,
        u.useMemo)( () => n ? new X.IndoorLight : null, [n]);
        (0,
        u.useEffect)( () => () => l?.dispose(), [l]),
        (0,
        u.useEffect)( () => {
            l?.setSpec(r)
        }
        , [l, r]);
        let f = (0,
        u.useRef)(!1);
        (0,
        u.useEffect)( () => {
            f.current = !!l
        }
        , [l]),
        (0,
        d.useFrame)( () => {
            l && n && f.current && (f.current = !1,
            l.bake(o, i, n.volume))
        }
        , -50)
    }
    e.s(["hasIndoorFixtures", 0, Z, "useIndoorLight", 0, q], 856943);
    var Q = e.i(171683)
      , J = e.i(569638);
    let ee = {
        value: 0
    };
    function et(e, t) {
        let r = e.getAttribute("position")
          , a = new Float32Array(4 * r.count)
          , o = new Float32Array(4 * r.count)
          , i = +("disc" === t.shape)
          , n = +("harbour" === t.tone);
        for (let e = 0; e < r.count; e++) {
            let[l,s] = (0,
            Q.footprintPlace)(t, r.getX(e), r.getZ(e));
            a[4 * e] = l,
            a[4 * e + 1] = s,
            a[4 * e + 2] = t.surface - r.getY(e),
            a[4 * e + 3] = i,
            o[4 * e] = t.half[0],
            o[4 * e + 1] = t.half[1],
            o[4 * e + 2] = t.inner,
            o[4 * e + 3] = n
        }
        e.setAttribute("waterPlace", new c.BufferAttribute(a,4)),
        e.setAttribute("waterHalf", new c.BufferAttribute(o,4))
    }
    let er = (e, t) => new c.Color((0,
    J.ownColor)(e, t));
    function ea(e="classic", t) {
        let a = new c.MeshStandardMaterial({
            roughness: .06,
            metalness: 0,
            flatShading: !0,
            side: c.DoubleSide
        });
        t && (a.defines = {
            ...a.defines,
            WATER_SEA: ""
        });
        let o = {
            waterIsland: {
                value: t ? new c.Vector4(t.center[0],t.center[1],t.half[0] - t.radius,t.half[1] - t.radius) : new c.Vector4
            },
            waterRound: {
                value: t?.radius ?? 0
            },
            waterOpen: {
                value: new c.Vector2(t?.waterline ?? 0,t?.open ?? 1)
            },
            waterMap: {
                value: function() {
                    if (r)
                        return r;
                    let e = new Uint8Array(262144)
                      , t = [[3, 1, 1, .3], [-2, 3, .9, 1.7], [1, -4, .7, 4.1], [5, 2, .5, 2.3], [-4, -3, .45, 5.2], [2, 6, .35, .9], [-6, 1, .3, 3.3], [7, -3, .22, 1.1], [-3, -7, .2, 2.8], [8, 5, .15, 4.6]]
                      , a = t.reduce( (e, [,,t]) => e + t, 0)
                      , o = .5 / t.reduce( (e, [t,r,a]) => e + a * Math.hypot(t, r), 0) * 2.2
                      , i = (e, t, r) => {
                        let a = 43758.5453 * Math.sin(127.1 * e + 311.7 * t + 74.7 * r);
                        return a - Math.floor(a)
                    }
                      , n = [];
                    for (let e = 0; e < 6; e++)
                        for (let t = 0; t < 6; t++)
                            n.push([(t + .15 + .7 * i(t, e, 1)) / 6, (e + .15 + .7 * i(t, e, 2)) / 6]);
                    let l = (e, t) => {
                        let r = new Float32Array(256)
                          , a = new Float32Array(256);
                        for (let o = 0; o < 256; o++) {
                            let i = 2 * Math.PI * e * (o + .5) / 256 + t;
                            r[o] = Math.sin(i),
                            a[o] = Math.cos(i)
                        }
                        return {
                            sin: r,
                            cos: a
                        }
                    }
                      , s = t.map( ([e,t,,r]) => ({
                        u: l(e, r),
                        v: l(t, 0)
                    }));
                    for (let r = 0; r < 256; r++)
                        for (let i = 0; i < 256; i++) {
                            let l = (i + .5) / 256
                              , u = (r + .5) / 256
                              , c = 0
                              , d = 0
                              , f = 0;
                            for (let e = 0; e < t.length; e++) {
                                let[a,o,n] = t[e]
                                  , {u: l, v: u} = s[e]
                                  , h = l.sin[i] * u.cos[r] + l.cos[i] * u.sin[r]
                                  , m = l.cos[i] * u.cos[r] - l.sin[i] * u.sin[r];
                                c += n * h,
                                d += n * a * m,
                                f += n * o * m
                            }
                            let h = Math.floor(6 * l)
                              , m = Math.floor(6 * u)
                              , p = 1 / 0
                              , g = 1 / 0;
                            for (let e = -1; e <= 1; e++)
                                for (let t = -1; t <= 1; t++) {
                                    let r = h + t
                                      , a = m + e
                                      , [o,i] = n[(a + 6) % 6 * 6 + (r + 6) % 6]
                                      , s = o + Math.floor(r / 6) - l
                                      , c = i + Math.floor(a / 6) - u
                                      , d = Math.sqrt(s * s + c * c);
                                    d < p ? (g = p,
                                    p = d) : d < g && (g = d)
                                }
                            let v = Math.pow(1 - Math.min(1, (g - p) * 6 / .38), 2.2)
                              , w = (256 * r + i) * 4;
                            e[w] = Math.round(255 * Math.min(1, Math.max(0, .5 + d * o))),
                            e[w + 1] = Math.round(255 * Math.min(1, Math.max(0, .5 + f * o))),
                            e[w + 2] = Math.round(255 * v),
                            e[w + 3] = Math.round((.5 + .5 * c / a) * 255)
                        }
                    let u = new c.DataTexture(e,256,256,c.RGBAFormat,c.UnsignedByteType);
                    return u.wrapS = u.wrapT = c.RepeatWrapping,
                    u.magFilter = c.LinearFilter,
                    u.minFilter = c.LinearMipmapLinearFilter,
                    u.generateMipmaps = !0,
                    u.anisotropy = 4,
                    u.needsUpdate = !0,
                    r = u
                }()
            },
            waterTime: ee,
            waterShallow: {
                value: er(t ? "#3fb8c4" : "#3fd6c6", e)
            },
            waterDeep: {
                value: er(t ? "#1c5f9c" : "#0f8fb0", e)
            },
            waterHarbourShallow: {
                value: er("#6cbcec", e)
            },
            waterHarbourDeep: {
                value: er("#2f86c8", e)
            },
            waterCaustic: {
                value: er("#d8fff3", e)
            },
            waterFoam: {
                value: er("#f4fbf8", e)
            },
            waterWindow: {
                value: er("#c9f7f0", e)
            },
            waterUnder: {
                value: er("#0f6f80", e)
            }
        };
        return a.onBeforeRender = () => {
            ee.value = performance.now() / 1e3 % 400
        }
        ,
        a.onBeforeCompile = e => {
            Object.assign(e.uniforms, o),
            e.vertexShader = e.vertexShader.replace("#include <common>", `#include <common>
attribute vec4 waterPlace;
attribute vec4 waterHalf;
varying vec4 vWaterPlace;
varying vec4 vWaterHalf;
varying vec3 vWaterWorld;`).replace("#include <project_vertex>", `#include <project_vertex>
	vWaterPlace = waterPlace;
	vWaterHalf = waterHalf;
	vWaterWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),
            e.fragmentShader = e.fragmentShader.replace("#include <common>", `#include <common>
uniform sampler2D waterMap;
uniform float waterTime;
uniform vec3 waterShallow;
uniform vec3 waterDeep;
uniform vec3 waterHarbourShallow;
uniform vec3 waterHarbourDeep;
uniform vec3 waterCaustic;
uniform vec3 waterFoam;
uniform vec3 waterWindow;
uniform vec3 waterUnder;
#ifdef WATER_SEA
uniform vec4 waterIsland;
uniform float waterRound;
uniform vec2 waterOpen;
#endif
varying vec4 vWaterPlace;
varying vec4 vWaterHalf;
varying vec3 vWaterWorld;`).replace("#include <color_fragment>", `#include <color_fragment>
	vec3 waterFace = normalize( cross( dFdx( vWaterWorld ), dFdy( vWaterWorld ) ) );
	vec2 waterAt = abs( waterFace.y ) > 0.5 ? vWaterWorld.xz : vec2( dot( vWaterWorld.xz, vec2( - waterFace.z, waterFace.x ) ), vWaterWorld.y );
	vec4 waterA = texture2D( waterMap, waterAt * 0.37 + waterTime * vec2( 0.035, 0.02 ) );
	vec4 waterB = texture2D( waterMap, vec2( waterAt.y, - waterAt.x ) * 0.53 + waterTime * vec2( - 0.025, 0.03 ) );
	vec2 waterSlope = waterA.rg - 0.5 + vec2( 0.5 - waterB.g, waterB.r - 0.5 );
	float waterLight = min( waterA.b, waterB.b );
	bool waterTop = waterFace.y > 0.5;
#ifdef WATER_SEA
	// The sea (#618): its shore a rounded rectangle round the map (waterIsland: centre, then half size less the corner
	// radius), the waterline waterOpen.x out from it down the beach; it deepens over waterOpen.y metres past that.
	vec2 waterQ = abs( vWaterWorld.xz - waterIsland.xy ) - waterIsland.zw;
	float waterShore = length( max( waterQ, 0.0 ) ) + min( max( waterQ.x, waterQ.y ), 0.0 ) - waterRound - waterOpen.x;
	float waterDepth = smoothstep( 0.0, waterOpen.y, waterShore );
	vec3 waterColor = mix( waterShallow, waterDeep, waterDepth ) + waterCaustic * waterLight * ( 0.4 - 0.38 * waterDepth );
#else
	// How far in from the shore, from the footprint: a box's nearest side, a disc's rim or its island.
	float waterShore = vWaterPlace.w > 0.5
		? min( ( 1.0 - length( vWaterPlace.xy / vWaterHalf.xy ) ) * min( vWaterHalf.x, vWaterHalf.y ), vWaterHalf.z > 0.0 ? length( vWaterPlace.xy ) - vWaterHalf.z : 1e4 )
		: min( vWaterHalf.x - abs( vWaterPlace.x ), vWaterHalf.y - abs( vWaterPlace.y ) );
	float waterDepth = waterTop
		? smoothstep( 0.0, clamp( min( vWaterHalf.x, vWaterHalf.y ) * 0.6, 0.4, 4.0 ), waterShore )
		: smoothstep( 0.0, 1.2, vWaterPlace.z );
	// A harbour body (its tone, in the half size's fourth slot) shades through its own pair.
	vec3 waterColor = mix( mix( waterShallow, waterHarbourShallow, vWaterHalf.w ), mix( waterDeep, waterHarbourDeep, vWaterHalf.w ), waterDepth ) + waterCaustic * waterLight * ( waterTop ? 0.55 - 0.3 * waterDepth : 0.3 - 0.15 * waterDepth );
#endif
	float waterFoamShare = 0.85 * ( waterTop
		? 1.0 - smoothstep( 0.0, 0.3, waterShore + ( waterA.a - 0.5 ) * 0.3 )
		: 1.0 - smoothstep( 0.0, 0.035, vWaterPlace.z ) );
	diffuseColor.rgb = mix( waterColor, waterFoam, waterFoamShare );`).replace("#include <roughnessmap_fragment>", `#include <roughnessmap_fragment>
	roughnessFactor = mix( roughnessFactor, 0.7, waterFoamShare );`).replace("#include <normal_fragment_maps>", `#include <normal_fragment_maps>
	if ( waterTop ) normal = normalize( ( viewMatrix * vec4( normalize( vec3( - waterSlope.x * 0.22, 1.0, - waterSlope.y * 0.22 ) ), 0.0 ) ).xyz );`).replace("#include <opaque_fragment>", `if ( waterFace.y < - 0.5 ) {
		float waterWindowShare = smoothstep( 0.6, 0.8, normalize( vWaterWorld - cameraPosition ).y + ( waterSlope.x + waterSlope.y ) * 0.1 );
		outgoingLight = mix( waterUnder, waterWindow, waterWindowShare ) * ( 1.0 + 0.5 * waterLight );
	}
	#include <opaque_fragment>`)
        }
        ,
        a.customProgramCacheKey = () => t ? "water-sea" : "water",
        a
    }
    e.s(["waterMaterial", 0, ea, "writeWaterPlace", 0, et], 806159);
    var eo = e.i(916189);
    function ei(e, t, r) {
        let a = new Float32Array(3 * e.attributes.position.count);
        for (let e = 0; e < a.length; e += 3)
            a[e] = t.r * r,
            a[e + 1] = t.g * r,
            a[e + 2] = t.b * r;
        e.setAttribute("color", new c.BufferAttribute(a,3))
    }
    let en = y.GROUND_RENDER_ORDER + 1;
    function el({group: e, document: t, photograph: r, quality: i, audio: n, indoor: l, materials: s}) {
        let f = (0,
        u.useRef)(null)
          , m = (0,
        u.useMemo)( () => new c.Matrix4, [])
          , p = (0,
        u.useMemo)( () => ({
            ...t,
            nodes: e.parts
        }), [t, e]);
        return (0,
        d.useFrame)( ({clock: a}) => {
            if (!f.current)
                return;
            let o = r ? void 0 : h.prefabReplayClocks.get(t);
            if (f.current.visible = !o || void 0 !== o.current,
            o && void 0 === o.current)
                return;
            let i = r ? 0 : o ? o.current : h.prefabPhysicsClocks.get(t)?.current ?? a.elapsedTime;
            (0,
            h.motionMatrix)(e.motion, i, m).premultiply(e.owner),
            f.current.matrix.copy(m),
            f.current.matrixWorldNeedsUpdate = !0
        }
        ),
        (0,
        a.jsxs)(a.Fragment, {
            children: [(0,
            a.jsx)("group", {
                ref: f,
                matrix: e.owner,
                matrixAutoUpdate: !1,
                children: (0,
                a.jsx)(es, {
                    document: p,
                    owner: e.owner,
                    quality: i,
                    indoor: l,
                    materials: s
                })
            }), n && !r && e.motion.coaster && e.motion.coaster.offset === e.motion.coaster.leadOffset ? (0,
            a.jsx)(o.CoasterAudio, {
                group: e,
                document: t
            }) : null]
        })
    }
    function es({document: e, owner: t, quality: r, ground: o=0, indoor: d=!1, materials: f}) {
        let h = !!t
          , A = (0,
        n.useSceneEnvironmentPalette)()
          , F = "monochrome" === (0,
        C.environmentMood)(A)
          , {paintRoughness: I, metal: O, contact: B, cover: L} = (0,
        _.useWorldLook)()
          , U = (0,
        u.useMemo)( () => {
            let t = (0,
            s.resolveDocument)(e)
              , r = (0,
            p.worldMatrices)(t);
            return t.nodes.filter(e => e.billboard).map(e => ({
                id: e.id,
                billboard: e.billboard,
                matrix: r.get(e.id)
            }))
        }
        , [e])
          , W = (0,
        u.useMemo)( () => {
            let a = (0,
            C.environmentGridStyle)(A)
              , n = "surface" === B
              , l = function(e, {palette: t, quality: r, owner: a, contactShading: o, ground: n=0}) {
                let l = !!a
                  , u = !!r && Object.values(S.FOLIAGE_LOD[r]).some(Boolean)
                  , d = 1 / ((0,
                C.environmentGridStyle)(t)?.scale ?? 1)
                  , f = (0,
                s.resolveDocument)(e)
                  , h = (0,
                p.worldMatrices)(f)
                  , m = []
                  , y = [];
                for (let e of f.nodes) {
                    let i;
                    if (!e.geometry || e.hidden)
                        continue;
                    let n = (0,
                    g.objectGeometry)(e.geometry, t);
                    if (n.index) {
                        let e = n.toNonIndexed();
                        n.dispose(),
                        n = e
                    }
                    "surface" === o && "coaster" === e.geometry.kind && n.computeBoundingBox();
                    let s = e.light ? "light" : (0,
                    b.renderSurface)(e)
                      , u = h.get(e.id);
                    (0,
                    k.fitted)(s, r) && (i = (0,
                    T.prepareGridFaces)(n, e.geometry, a ? a.clone().multiply(u) : u),
                    l || y.push({
                        id: e.id,
                        planes: i.planes((0,
                        k.planeGroup)(e, s, r))
                    })),
                    m.push({
                        node: e,
                        geometry: n,
                        surface: s,
                        world: u,
                        faces: i
                    })
                }
                let E = (0,
                T.sharedGridCharts)(y)
                  , _ = "surface" === o ? new w.ContactField(m.map( ({node: e, geometry: t, world: r}) => {
                    let a = (0,
                    w.contactShape)(e.geometry, t.boundingBox);
                    return a && {
                        matrix: r,
                        shape: a
                    }
                }
                ),l ? null : n) : void 0
                  , A = new Map;
                for (let[e,{node: a, geometry: n, surface: l, world: s, faces: f}] of m.entries()) {
                    f?.write({
                        nominal: d,
                        seed: a.id,
                        shared: E.get(a.id),
                        ...(0,
                        k.faceFinish)(a, l, r)
                    }),
                    n.applyMatrix4(s),
                    "water" === l ? et(n, (0,
                    Q.waterVolume)(a, s)) : "light" === l ? ei(n, new c.Color((0,
                    i.partColor)(a, t)), a.light.glow ?? 1) : "plant" === l || "bark" === l ? (0,
                    x.bakePlantColors)(n) : "drift-track" !== a.geometry.kind && (0,
                    v.bakeVertexColors)(n, new c.Color((0,
                    i.partColor)(a, t)), o);
                    let h = u && "plant" === l ? (0,
                    S.foliageTier)(a.geometry) : null;
                    h && (0,
                    x.writeFoliageAnchor)(n, [s.elements[12], s.elements[13], s.elements[14]], function(e) {
                        let t = 0x811c9dc5;
                        for (let r = 0; r < e.length; r++)
                            t = Math.imul(t ^ e.charCodeAt(r), 0x1000193);
                        return (t >>> 0) / 0x100000000
                    }(a.id), h),
                    _ && (0,
                    w.writeContact)(n, "drift-track" === a.geometry.kind ? null : _.receiver(e));
                    let m = `${l}:${(0,
                    b.editorDepthLayer)(a)}:${"water" === l ? 0 : (0,
                    M.mapChunk)(s)}`
                      , p = A.get(m) ?? [];
                    p.push(n),
                    A.set(m, p)
                }
                return A
            }(e, {
                palette: A,
                quality: r,
                owner: t,
                contactShading: B,
                ground: o
            })
              , u = f ?? new Map;
            return [...l].map( ([e,t]) => {
                let[o,i] = e.split(":")
                  , l = (0,
                k.fitted)(o, r)
                  , s = (0,
                m.mergeGeometries)(t, !1);
                t.forEach(e => e.dispose()),
                s.computeBoundingSphere();
                let f = `${o}:${i}`
                  , p = u.get(f);
                return p || "light" !== o ? p || (p = "plant" === o ? (0,
                x.plantMaterial)(A, r && S.FOLIAGE_LOD[r]) : "bark" === o ? (0,
                x.plantMaterial)(A) : "water" === o ? ea(A) : (0,
                k.surfaceBatchMaterial)(o, {
                    quality: r,
                    animated: h,
                    style: a,
                    paintRoughness: I,
                    metal: O
                }),
                (0,
                y.applyDepthLayer)(p, Number(i)),
                n && (0,
                w.applyContactShading)(p, "object", L, d),
                u.set(f, p)) : (p = new c.MeshBasicMaterial({
                    vertexColors: !0
                }),
                (0,
                y.applyDepthLayer)(p, Number(i)),
                u.set(f, p)),
                {
                    key: e,
                    geometry: s,
                    material: p,
                    castShadow: "grid-floor" !== o && "water" !== o,
                    foliage: "plant" === o || "bark" === o,
                    leaves: "plant" === o,
                    finished: l,
                    water: "water" === o
                }
            }
            )
        }
        , [e, A, t, h, r, I, O, B, L, o, d, f]);
        (0,
        D.useSurfaceDetail)(!!r && W.some(e => e.finished));
        let P = (0,
        x.useFoliage)(W.some(e => e.foliage))
          , G = (0,
        u.useMemo)( () => [W, P], [W, P]);
        return (0,
        u.useEffect)( () => () => {
            W.forEach(e => e.geometry.dispose()),
            f || new Set(W.map(e => e.material)).forEach(e => e.dispose())
        }
        , [W, f]),
        (0,
        E.useStaticShadows)(h ? null : G),
        (0,
        a.jsxs)(a.Fragment, {
            children: [U.map( ({id: e, billboard: t, matrix: r}) => (0,
            a.jsx)("group", {
                matrix: r,
                matrixAutoUpdate: !1,
                children: (0,
                a.jsx)(l.BillboardDisplay, {
                    billboard: t,
                    aspect: Math.hypot(...r.elements.slice(0, 3)) / Math.hypot(...r.elements.slice(4, 7)),
                    monochrome: F
                })
            }, e)), W.map( ({key: e, geometry: t, material: r, castShadow: o, foliage: i, leaves: n, water: l}) => (0,
            a.jsx)("mesh", {
                geometry: t,
                material: r,
                castShadow: o,
                receiveShadow: !0,
                visible: !n || "loading" !== P,
                renderOrder: l ? en : 0,
                onUpdate: e => {
                    h || l || (0,
                    E.castsStaticShadow)(e),
                    h || i || l || e.layers.enable(R.GROUND_OCCLUDER_LAYER)
                }
            }, e))]
        })
    }
    e.s(["RuntimeEditorObjects", 0, function({document: e, photograph: t=!1, quality: r, audio: o=!0, ground: i=0, still: l=!1, indoorLight: c}) {
        let {staticDocument: d, groups: h} = (0,
        u.useMemo)( () => (0,
        f.splitMotion)(e), [e])
          , m = (0,
        u.useMemo)( () => !l && (0,
        O.hasPrefabDummies)(e), [e, l])
          , p = (0,
        u.useMemo)( () => !l && (0,
        s.resolveDocument)(e).nodes.some(e => e.kart), [e, l])
          , g = (0,
        _.useWorldLook)()
          , v = (0,
        u.useMemo)( () => !!c && (0,
        A.lookIndoor)(g, {
            indoorLight: c
        }) && Z(e), [c, g, e]);
        q(d, v, c, i),
        (0,
        eo.useSceneWater)((0,
        u.useMemo)( () => (0,
        Q.waterVolumes)(d), [d]));
        let w = (0,
        n.useSceneEnvironmentPalette)()
          , b = (0,
        u.useMemo)( () => new Map, [w, r, g, v]);
        return (0,
        u.useEffect)( () => () => b.forEach(e => e.dispose()), [b]),
        (0,
        a.jsxs)(a.Fragment, {
            children: [(0,
            a.jsx)(es, {
                document: d,
                quality: r,
                ground: i,
                indoor: v
            }), (0,
            a.jsx)(V, {
                document: d
            }), (l ? [] : h).map(i => (0,
            a.jsx)(el, {
                group: i,
                document: e,
                photograph: t,
                quality: r,
                audio: o,
                indoor: v,
                materials: b
            }, i.id)), m ? (0,
            a.jsx)(u.Suspense, {
                fallback: null,
                children: (0,
                a.jsx)(I.PrefabDummies, {
                    document: e,
                    photograph: t,
                    quality: r,
                    shadows: !!r && (0,
                    F.atLeast)(r, "high")
                })
            }) : null, p ? (0,
            a.jsx)(N, {
                document: e,
                photograph: t,
                quality: r
            }) : null]
        })
    }
    , "writeLitColors", 0, ei], 680043)
}
, 294980, e => {
    "use strict";
    var t = e.i(190072)
      , r = e.i(777149)
      , a = e.i(468105)
      , o = e.i(694835)
      , i = e.i(338168);
    function n(e) {
        return "grid-floor" === e || "concrete" === e ? "concrete" : "metal" === e ? "brushed-metal" : "plaster"
    }
    let l = (e, t) => !!t && ("metal" === e || "concrete" === e)
      , s = (e, t) => "grid" === e || "grid-floor" === e || l(e, t);
    e.s(["faceFinish", 0, function(e, t, o) {
        let s = (0,
        a.detailKindIndex)(n(t))
          , u = (0,
        r.partFinish)(e)
          , c = !l(t, o) && (0,
        i.paintedColor)(e.color);
        if (!u)
            return {
                kind: s,
                paint: c
            };
        let {kind: d, floor: f} = (0,
        a.finishTagInfo)(u);
        return f ? {
            kind: s,
            floorKind: (0,
            a.detailKindIndex)(d),
            paint: c
        } : {
            kind: (0,
            a.detailKindIndex)(d),
            paint: c
        }
    }
    , "fitted", 0, s, "planeGroup", 0, function(e, t, a) {
        return `${l(t, a) ? "untiled-" : ""}${(0,
        r.editorDepthLayer)(e)}`
    }
    , "surfaceBatchMaterial", 0, function(e, {quality: r, animated: a, style: i, paintRoughness: u, metal: c}) {
        let d = {
            roughness: "metal" === e ? c.roughness : .85,
            metalness: "metal" === e ? c.metalness : 0
        };
        if (!s(e, r))
            return new t.MeshStandardMaterial({
                vertexColors: !0,
                ...d
            });
        let f = l(e, r)
          , h = (0,
        o.gridMaterial)({
            mapping: "face",
            frame: a ? "object" : "world",
            style: f ? void 0 : i,
            lines: !f,
            tiles: !f,
            finish: r ? {
                kind: n(e),
                quality: r,
                paintRoughness: u
            } : void 0
        });
        return f ? Object.assign(h, d) : h
    }
    ])
}
, 284996, e => {
    "use strict";
    var t = e.i(190072)
      , r = e.i(552260)
      , a = e.i(315213);
    let o = 4 * Math.PI / 180
      , i = [!0, !1].flatMap(e => [1, -1].map(t => ({
        side: t,
        front: e
    })))
      , n = (e, r, o=new t.Vector3, i=0) => o.set(e * (a.DRIFT_WHEEL_X + i), a.DRIFT_WHEEL_RADIUS, (r ? 1 : -1) * a.DRIFT_AXLE_Z)
      , l = new t.Quaternion().setFromAxisAngle(new t.Vector3(0,1,0), Math.PI);
    e.s(["DRIFT_CAR_URL", 0, "/sim/vehicles/drift-car.glb", "DRIFT_CAR_ZONE_COUNT", 0, 10, "DRIFT_WHEELS", 0, i, "DRIFT_WHEEL_CAMBER", 0, o, "driftCarModel", 0, function({scene: e, userData: a}) {
        let s = a?.wheelVisualOffsetX
          , u = "number" == typeof s && Number.isFinite(s) ? s : 0
          , c = r => {
            let a = e.getObjectByName(r);
            if (!a?.isMesh)
                throw Error(`drift car model has no mesh ${r}`);
            return function(e) {
                let r = new t.BufferGeometry;
                for (let t of ["position", "normal", "color", "uv"]) {
                    let a = e.getAttribute(t);
                    if (!a)
                        throw Error(`drift car model lacks ${t}`);
                    r.setAttribute(t, a.clone())
                }
                let a = e.getAttribute("_zone");
                if (!a)
                    throw Error("drift car model lacks _ZONE");
                let o = new Float32Array(a.count);
                for (let e = 0; e < a.count; e++)
                    o[e] = Math.round(a.getX(e));
                return r.setAttribute("zone", new t.BufferAttribute(o,1)),
                e.index && r.setIndex(e.index.clone()),
                function(e) {
                    let t = e.getAttribute("position")
                      , r = e.getAttribute("uv")
                      , a = e.getAttribute("zone");
                    for (let e of [1, -1]) {
                        let o = [];
                        for (let r = 0; r < a.count; r++)
                            9 === a.getX(r) && Math.sign(t.getX(r)) === e && o.push(r);
                        if (0 === o.length)
                            continue;
                        let i = e => o.reduce( (t, r) => t + e(r), 0) / o.length
                          , n = i(e => r.getX(e))
                          , l = i(r => -e * t.getZ(r));
                        if (0 > o.reduce( (a, o) => a + (r.getX(o) - n) * (-e * t.getZ(o) - l), 0))
                            for (let e of o)
                                r.setX(e, 1 - r.getX(e))
                    }
                }(r),
                r
            }(a.geometry)
        }
          , d = e => {
            let r = c(`drift_wheel_${e}`);
            return {
                body: c(`drift_body_${e}`),
                wheel: r,
                spokes: function(e, r=6) {
                    let a = e.getAttribute("position")
                      , o = e.getAttribute("zone")
                      , i = 2 * Math.PI / r
                      , n = 0;
                    for (let e = 0; e < a.count; e++)
                        2 === o.getX(e) && (n = Math.max(n, Math.hypot(a.getY(e), a.getZ(e))));
                    let l = 0
                      , s = 0
                      , u = e.index ? Array.from(e.index.array) : Array.from({
                        length: a.count
                    }, (e, t) => t)
                      , c = new t.Vector3
                      , d = new t.Vector3
                      , f = new t.Vector3;
                    for (let e = 0; e + 2 < u.length; e += 3) {
                        if (2 !== o.getX(u[e]))
                            continue;
                        c.fromBufferAttribute(a, u[e]),
                        d.fromBufferAttribute(a, u[e + 1]),
                        f.fromBufferAttribute(a, u[e + 2]);
                        let t = (c.y + d.y + f.y) / 3
                          , i = (c.z + d.z + f.z) / 3;
                        if (Math.hypot(t, i) < .4 * n)
                            continue;
                        let h = d.sub(c).cross(f.sub(c)).length()
                          , m = Math.atan2(t, i) * r;
                        l += h * Math.cos(m),
                        s += h * Math.sin(m)
                    }
                    let h = new Float32Array(a.count)
                      , m = e => {
                        let t = 0
                          , r = new Map;
                        h.fill(0);
                        for (let l = 0; l + 2 < u.length; l += 3) {
                            if (2 !== o.getX(u[l]))
                                continue;
                            let s = (a.getY(u[l]) + a.getY(u[l + 1]) + a.getY(u[l + 2])) / 3
                              , c = (a.getZ(u[l]) + a.getZ(u[l + 1]) + a.getZ(u[l + 2])) / 3;
                            if (Math.hypot(s, c) < .4 * n)
                                continue;
                            let d = Math.round((Math.atan2(s, c) - e) / i)
                              , f = e + d * i;
                            for (let e of u.slice(l, l + 3)) {
                                let o = Math.hypot(a.getY(e), a.getZ(e))
                                  , i = Math.atan2(a.getY(e), a.getZ(e)) - f
                                  , l = Math.atan2(Math.sin(i), Math.cos(i));
                                if (o > .7 * n) {
                                    t = Math.max(t, Math.abs(l));
                                    let e = r.get(d) ?? [1 / 0, -1 / 0];
                                    r.set(d, [Math.min(e[0], l), Math.max(e[1], l)])
                                }
                                h[e] = o < 1e-6 || 1e-4 > Math.abs(l) ? 0 : Math.sign(l)
                            }
                        }
                        let l = [...r.values()].map( ([e,t]) => (e + t) / 2);
                        return {
                            half: t,
                            offset: l.length ? l.reduce( (e, t) => e + t, 0) / l.length : 0
                        }
                    }
                      , p = Math.atan2(s, l) / r
                      , {half: g} = m(p + m(p).offset);
                    return e.setAttribute("spokeEdge", new t.BufferAttribute(h,1)),
                    {
                        count: r,
                        gap: Math.max(0, i - 2 * g)
                    }
                }(r),
                wheelOffset: u
            }
        }
          , f = c("drift_wheel_far")
          , h = (0,
        r.mergeGeometries)([c("drift_body_far"), ...i.map( ({side: e, front: r}) => {
            var a, i, s, c;
            let d;
            return a = f,
            i = e,
            s = r,
            c = u,
            d = new t.Quaternion().setFromAxisAngle(new t.Vector3(0,0,1), i * o),
            i < 0 && d.multiply(l),
            a.clone().applyMatrix4(new t.Matrix4().compose(n(i, s, new t.Vector3, c), d, new t.Vector3(1,1,1)))
        }
        )], !1);
        if (f.dispose(),
        !h)
            throw Error("drift car far level does not merge");
        return {
            close: d("close"),
            mid: d("mid"),
            far: {
                body: h,
                wheel: null,
                spokes: null,
                wheelOffset: u
            }
        }
    }
    , "driftWheelCentre", 0, n])
}
, 630438, e => {
    "use strict";
    var t = e.i(190072)
      , r = e.i(408560)
      , a = e.i(552260)
      , o = e.i(315213)
      , i = e.i(809461)
      , n = e.i(234979)
      , l = e.i(37155)
      , s = e.i(284996);
    let u = ["close", "mid", "far"]
      , c = 1 / 150
      , d = {
        paint: [.32, 0, .7, .75],
        accent: [.82, 0, .08, 0],
        wheel: [.3, .62, .7, 0],
        trim: [.8, 0, .06, 0],
        chrome: [.16, .92, 1, 0],
        glass: [.55, .1, .35, 0],
        tyre: [.93, 0, 0, 0],
        headlight: [.3, 0, .3, 0],
        taillight: [.3, 0, .3, 0],
        number: [.32, 0, .7, .75]
    }
      , f = {
        headlight: {
            color: "#c1e7ff",
            intensity: 1.1
        },
        taillight: {
            color: "#f81008",
            intensity: .08
        }
    }
      , h = ["paint", "accent", "wheel", "trim", "chrome", "glass", "tyre", "headlight", "taillight", "number"]
      , m = l.DRIFT_NUMBERS / 4
      , p = "drift-car-v9";
    function g(e, a, o) {
        let i = "close" === e && "body" === a ? new t.MeshPhysicalMaterial({
            vertexColors: !0,
            clearcoat: 1,
            clearcoatRoughness: .23
        }) : new t.MeshStandardMaterial({
            vertexColors: !0
        });
        i.side = t.DoubleSide,
        i.shadowSide = t.BackSide,
        "wheel" === a && (i.defines = {
            ...i.defines,
            DRIFT_WHEEL: ""
        });
        let n = h.map(e => {
            let[r,a,o,i] = d[e];
            return new t.Vector4(r,a,o,i)
        }
        )
          , l = h.map(e => {
            let r = f[e];
            return r ? new t.Color(r.color).multiplyScalar(r.intensity) : new t.Color(0,0,0)
        }
        )
          , u = r.ShaderChunk.envmap_physical_pars_fragment.replaceAll("* envMapIntensity;", "* envMapIntensity * vSurface.z;");
        return i.onBeforeCompile = e => {
            e.uniforms.zoneSurface = {
                value: n
            },
            e.uniforms.zoneGlow = {
                value: l
            },
            e.uniforms.numberAtlas = o,
            e.vertexShader = e.vertexShader.replace("#include <common>", `#include <common>
attribute float zone;
uniform vec4 zoneSurface[${s.DRIFT_CAR_ZONE_COUNT}];
uniform vec3 zoneGlow[${s.DRIFT_CAR_ZONE_COUNT}];
varying vec4 vSurface;
varying vec3 vGlow;
#ifdef DRIFT_WHEEL
attribute vec3 wheelFinish;
attribute vec2 spokeSmear;
attribute float spokeEdge;
varying float vSpokeBlur;
#else
attribute vec3 carPaint;
attribute vec3 carKit;
attribute vec3 carWheels;
attribute float carNumber;
varying vec3 vNumber;
varying vec2 vNumberUv;
varying vec3 vDoorPaint;
#endif`).replace("#include <color_vertex>", `#include <color_vertex>
	int zoneId = int(zone + 0.5);
	vSurface = zoneSurface[zoneId];
	vGlow = zoneGlow[zoneId];
	#ifdef DRIFT_WHEEL
		if (zoneId == 2) vColor.rgb = wheelFinish;
	#else
		if (zoneId == 0) vColor.rgb = carPaint;
		else if (zoneId == 1) vColor.rgb = carKit;
		// Only the far level's body has wheels (zone 2): they take the car's finish, as the wheel batches do.
		else if (zoneId == 2) vColor.rgb = carWheels;
		float numberCell = carNumber - 1.0;
		vNumber = vec3(mod(numberCell, 4.0), floor(numberCell / 4.0), zoneId == 9 ? 1.0 : 0.0);
		vNumberUv = uv;
		vDoorPaint = carPaint;
	#endif`).replace("#include <beginnormal_vertex>", `#include <beginnormal_vertex>
	#ifdef DRIFT_WHEEL
		// Each marked corner turns half the smear away from its spoke's centreline, toward the side
		// it is marked (spokeEdge, by atan2(y, z)): every spoke widens by the whole smear.
		float spokeTurn = 0.5 * spokeEdge * spokeSmear.x;
		vSpokeBlur = abs(spokeEdge) * spokeSmear.y;
		mat2 spokeRotation = mat2(cos(spokeTurn), -sin(spokeTurn), sin(spokeTurn), cos(spokeTurn));
		objectNormal.yz = spokeRotation * objectNormal.yz;
	#endif`).replace("#include <begin_vertex>", `#include <begin_vertex>
	#ifdef DRIFT_WHEEL
		transformed.yz = spokeRotation * transformed.yz;
	#endif`),
            e.fragmentShader = e.fragmentShader.replace("#include <common>", `#include <common>
varying vec4 vSurface;
varying vec3 vGlow;
#ifdef DRIFT_WHEEL
varying float vSpokeBlur;
#else
#define ROUNDEL 0.46
uniform sampler2D numberAtlas;
varying vec3 vNumber;
varying vec2 vNumberUv;
varying vec3 vDoorPaint;
#endif`).replace("#include <color_fragment>", `#include <color_fragment>
	#ifdef DRIFT_WHEEL
		diffuseColor.rgb *= 1.0 - 0.45 * vSpokeBlur;
	#else
		if (vNumber.z > 0.5) {
			vec2 square = clamp(vNumberUv, 0.0, 1.0);
			float radius = length(square - 0.5), edge = max(fwidth(radius), 1e-4);
			vec3 number = diffuseColor.rgb * texture2D(numberAtlas, (vNumber.xy + square) / vec2(4.0, ${m}.0)).rgb;
			number = mix(number, vec3(0.004), smoothstep(ROUNDEL - 0.022 - edge, ROUNDEL - 0.022 + edge, radius));
			diffuseColor.rgb = mix(vDoorPaint, number, 1.0 - smoothstep(ROUNDEL - edge, ROUNDEL, radius));
		}
	#endif`).replace("#include <envmap_physical_pars_fragment>", u).replace("#include <roughnessmap_fragment>", `float roughnessFactor = vSurface.x;
	#ifdef DRIFT_WHEEL
		roughnessFactor = mix(roughnessFactor, 0.7, vSpokeBlur);
	#endif`).replace("#include <metalnessmap_fragment>", "float metalnessFactor = vSurface.y;").replace("#include <lights_physical_fragment>", `#include <lights_physical_fragment>
	#ifdef USE_CLEARCOAT
		material.clearcoat *= vSurface.w;
	#endif`).replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\n	totalEmissiveRadiance += vGlow;").replace("#include <tonemapping_fragment>", "if (vGlow == vec3(0.0)) {\n#include <tonemapping_fragment>\n}")
        }
        ,
        i.customProgramCacheKey = () => `${p}-${a}`,
        i
    }
    let v = {
        paint: "#ffffff",
        carbon: "#182126",
        glass: "#172e3c",
        alloy: "#68747d",
        chrome: "#a0adb8",
        light: "#e7f5ff",
        tail: "#ff3024",
        livery: "#efeee7",
        rubber: "#11161a"
    }
      , w = {
        paint: [.4, .25, .7],
        carbon: [.58, .12, 0],
        glass: [.25, .3, 1],
        alloy: [.4, .48, .7],
        chrome: [.28, .6, .7],
        light: [1, 0, 0],
        tail: [1, 0, 0],
        livery: [.4, .1, 0],
        rubber: [.93, 0, 0]
    }
      , b = {
        light: {
            emissive: "#c1e7ff",
            intensity: 1.1
        },
        tail: {
            emissive: "#f81008",
            intensity: 1.4
        }
    };
    function y(e) {
        let r = e => v[e]
          , a = e => new t.MeshStandardMaterial({
            color: r(e),
            emissive: b[e].emissive,
            emissiveIntensity: b[e].intensity,
            toneMapped: !1
        });
        return {
            paint: e ? new t.MeshPhysicalMaterial({
                color: r("paint"),
                metalness: .42,
                roughness: .32,
                clearcoat: .75,
                clearcoatRoughness: .23,
                side: t.DoubleSide
            }) : new t.MeshStandardMaterial({
                color: r("paint"),
                metalness: .25,
                roughness: .4,
                side: t.DoubleSide
            }),
            carbon: new t.MeshStandardMaterial({
                color: r("carbon"),
                metalness: .12,
                roughness: .58,
                side: t.DoubleSide
            }),
            glass: e ? new t.MeshPhysicalMaterial({
                color: r("glass"),
                metalness: .3,
                roughness: .16,
                clearcoat: 1,
                side: t.DoubleSide
            }) : new t.MeshStandardMaterial({
                color: r("glass"),
                metalness: .3,
                roughness: .25,
                side: t.DoubleSide
            }),
            alloy: new t.MeshStandardMaterial({
                color: r("alloy"),
                metalness: .48,
                roughness: .4,
                side: t.DoubleSide
            }),
            chrome: new t.MeshStandardMaterial({
                color: r("chrome"),
                metalness: .6,
                roughness: .28,
                side: t.DoubleSide
            }),
            light: a("light"),
            tail: a("tail"),
            livery: new t.MeshStandardMaterial({
                color: r("livery"),
                metalness: .1,
                roughness: .4,
                side: t.DoubleSide
            }),
            rubber: new t.MeshStandardMaterial({
                color: r("rubber"),
                roughness: .93,
                side: t.DoubleSide
            })
        }
    }
    class M {
        root = new t.Group;
        tiers;
        batches = [];
        previous = [];
        casting = [];
        shadows = !1;
        paints = [];
        scratch = {
            car: new t.Matrix4,
            body: new t.Matrix4,
            wheel: new t.Matrix4,
            part: new t.Matrix4,
            position: new t.Vector3,
            rotation: new t.Quaternion,
            orientation: new t.Quaternion,
            euler: new t.Euler,
            one: new t.Vector3(1,1,1),
            world: new t.Vector3,
            camera: new t.Vector3,
            frustum: new t.Frustum,
            viewProjection: new t.Matrix4,
            local: new t.Sphere,
            sphere: new t.Sphere
        };
        constructor(e, r, a) {
            this.root.name = "Drift car fleet";
            const o = (e, a, o, i) => {
                let n = new t.BufferGeometry;
                for (let[t,r] of Object.entries(e.attributes))
                    n.setAttribute(t, r);
                n.setIndex(e.index),
                n.boundingSphere = e.boundingSphere ?? (e.computeBoundingSphere(),
                e.boundingSphere);
                let l = {};
                for (let[e,r] of Object.entries({
                    ...i,
                    caster: 1
                }))
                    n.setAttribute(e, l[e] = new t.InstancedBufferAttribute(new Float32Array(o * r),r).setUsage(t.DynamicDrawUsage));
                let s = new t.InstancedMesh(n,a,o);
                s.customDepthMaterial = r.shadow,
                s.boundingSphere = new t.Sphere,
                s.instanceMatrix.setUsage(t.DynamicDrawUsage),
                s.receiveShadow = !0,
                s.visible = !1,
                s.count = 0;
                let u = {
                    mesh: s,
                    used: 0,
                    casting: 0,
                    instance: l
                };
                return this.batches.push(u),
                u
            }
              , i = i => {
                let n = e[i];
                return {
                    body: o(n.body, r.body[i], a, {
                        carPaint: 3,
                        carKit: 3,
                        carWheels: 3,
                        carNumber: 1
                    }),
                    wheel: n.wheel && "far" !== i ? o(n.wheel, r.wheel[i], 4 * a, {
                        wheelFinish: 3,
                        spokeSmear: 2
                    }) : void 0,
                    gap: n.spokes?.gap ?? 0,
                    wheelOffset: n.wheelOffset,
                    car: function(e) {
                        let r = e => (e.boundingSphere || e.computeBoundingSphere(),
                        e.boundingSphere.clone())
                          , a = r(e.body);
                        if (e.wheel) {
                            let o = r(e.wheel)
                              , i = new t.Vector3;
                            for (let {side: t, front: r} of s.DRIFT_WHEELS)
                                a.union(o.clone().translate((0,
                                s.driftWheelCentre)(t, r, i, e.wheelOffset)))
                        }
                        return a
                    }(n),
                    bounds: new t.Sphere
                }
            }
            ;
            this.tiers = {
                close: i("close"),
                mid: i("mid"),
                far: i("far")
            }
        }
        setShadows(e) {
            this.shadows = e
        }
        update(e, t, r, a, l) {
            let d = this.scratch;
            this.root.updateWorldMatrix(!0, !1);
            let f = this.root.matrixWorld
              , h = f.getMaxScaleOnAxis();
            t.updateWorldMatrix(!0, !1),
            t.getWorldPosition(d.camera),
            d.frustum.setFromProjectionMatrix(d.viewProjection.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), t.coordinateSystem, t.reversedDepth);
            let m = t.fov ?? 60;
            for (let e of this.batches)
                e.used = e.casting = 0;
            for (let e of u)
                this.tiers[e].bounds.makeEmpty();
            for (let t of (e.forEach( (e, t) => {
                let {pose: u} = e;
                d.car.compose(d.position.set(u.x, 0, u.z), d.rotation.setFromAxisAngle(x, u.yaw), d.one),
                d.world.setFromMatrixPosition(d.car).applyMatrix4(f);
                let p = Math.max(1, d.world.distanceTo(d.camera))
                  , g = 4.8 * h * r / (2 * p * Math.tan(m * Math.PI / 360))
                  , v = this.previous[t] ?? (0,
                i.carDetail)(1 / 0, "close", a)
                  , w = l ?? (0,
                i.carDetail)(g, v, a);
                this.previous[t] = w;
                let b = this.tiers[w]
                  , y = this.shadows && "far" !== w && (0,
                i.carCastsShadow)(p, this.casting[t] ?? !1, a);
                if (this.casting[t] = y,
                d.local.copy(b.car).applyMatrix4(d.car),
                !y && !d.frustum.intersectsSphere(d.sphere.copy(d.local).applyMatrix4(f)))
                    return;
                b.bounds.union(d.local);
                let M = this.paint(t, e)
                  , {motion: C} = e
                  , R = C ? d.body.multiplyMatrices(d.car, function(e, t) {
                    let {cgHeight: r, cgForward: a} = n.DRIFT_CAR_SPEC;
                    return S.makeTranslation(0, r + e.height, a),
                    E.makeTranslation(0, -r, -a),
                    _.makeRotationFromEuler(A.set(-e.pitch, 0, e.roll, "ZXY")),
                    t.multiplyMatrices(S, _).multiply(E)
                }(C, d.part)) : d.car
                  , T = this.place(b.body, R, y);
                if (b.body.instance.carPaint.setXYZ(T, M.paint.r, M.paint.g, M.paint.b),
                b.body.instance.carKit.setXYZ(T, M.kit.r, M.kit.g, M.kit.b),
                b.body.instance.carWheels.setXYZ(T, M.wheels.r, M.wheels.g, M.wheels.b),
                b.body.instance.carNumber.setX(T, e.livery.number),
                !b.wheel)
                    return;
                let F = C ? C.steer : -u.slip * o.DRIFT_COUNTERSTEER_GAIN
                  , k = u.distance / o.DRIFT_WHEEL_RADIUS;
                s.DRIFT_WHEELS.forEach( ({side: e, front: t}, r) => {
                    let a = C ? C.spins[r] : k
                      , o = C?.rates ? Math.min(1, Math.abs(C.rates[r]) * c / .35) : 0;
                    (0,
                    s.driftWheelCentre)(e, t, d.position, b.wheelOffset),
                    d.rotation.setFromEuler(d.euler.set(a, t ? F : 0, e * s.DRIFT_WHEEL_CAMBER, "YZX")),
                    d.orientation.setFromEuler(d.euler.set(0, e < 0 ? Math.PI : 0, 0)),
                    d.rotation.multiply(d.orientation),
                    d.wheel.multiplyMatrices(d.car, d.part.compose(d.position, d.rotation, d.one));
                    let i = this.place(b.wheel, d.wheel, y);
                    b.wheel.instance.wheelFinish.setXYZ(i, M.wheels.r, M.wheels.g, M.wheels.b),
                    b.wheel.instance.spokeSmear.setXY(i, o * b.gap, o)
                }
                )
            }
            ),
            u)) {
                let e = this.tiers[t];
                for (let t of [e.body, e.wheel]) {
                    if (!t)
                        continue;
                    let {mesh: r, used: a} = t;
                    if (r.count = a,
                    r.visible = a > 0,
                    r.castShadow = t.casting > 0,
                    0 !== a) {
                        for (let e of (r.instanceMatrix.needsUpdate = !0,
                        Object.values(t.instance)))
                            e.clearUpdateRanges(),
                            e.addUpdateRange(0, a * e.itemSize),
                            e.needsUpdate = !0;
                        r.boundingSphere.copy(e.bounds)
                    }
                }
            }
        }
        usage() {
            let e = e => ({
                cars: e.body.used,
                casting: e.body.casting,
                draws: [e.body, e.wheel].filter(e => e && e.used > 0).length
            });
            return {
                close: e(this.tiers.close),
                mid: e(this.tiers.mid),
                far: e(this.tiers.far)
            }
        }
        attach() {
            for (let {mesh: e} of this.batches)
                e.parent !== this.root && this.root.add(e)
        }
        dispose() {
            for (let {mesh: e} of this.batches)
                e.dispose();
            this.root.clear()
        }
        place(e, t, r) {
            let a = e.used++;
            return e.mesh.setMatrixAt(a, t),
            e.instance.caster.setX(a, +!!r),
            r && e.casting++,
            a
        }
        paint(e, r) {
            let a = this.paints[e];
            return a && a.color === r.color && a.livery === r.livery || (this.paints[e] = a = {
                color: r.color,
                livery: r.livery,
                paint: new t.Color(r.color),
                kit: new t.Color(l.DRIFT_KIT_COLORS[r.livery.kit]),
                wheels: new t.Color(l.DRIFT_WHEEL_COLORS[r.livery.wheels])
            }),
            a
        }
    }
    let x = new t.Vector3(0,1,0)
      , S = new t.Matrix4
      , E = new t.Matrix4
      , _ = new t.Matrix4
      , A = new t.Euler;
    e.s(["DETAILS", 0, u, "FleetBatches", 0, M, "NUMBER_COLUMNS", 0, 4, "NUMBER_ROWS", 0, m, "createDistantCar", 0, function(e) {
        let r = []
          , o = [];
        for (let a of Object.keys(e)) {
            if (!e[a].getAttribute("position"))
                continue;
            let i = e[a].clone()
              , n = i.attributes.position.count
              , l = b[a]
              , s = new t.Color(v[a]);
            l && s.add(new t.Color(l.emissive).multiplyScalar(l.intensity));
            let u = new Float32Array(3 * n);
            for (let e = 0; e < n; e++)
                u.set([s.r, s.g, s.b], 3 * e);
            if (i.setAttribute("color", new t.BufferAttribute(u,3)),
            l)
                o.push(i);
            else {
                let e = new Float32Array(3 * n);
                for (let t = 0; t < n; t++)
                    e.set(w[a], 3 * t);
                i.setAttribute("surface", new t.BufferAttribute(e,3)),
                i.setAttribute("paintMask", new t.BufferAttribute(new Float32Array(n).fill(+("paint" === a)),1)),
                r.push(i)
            }
        }
        let i = e => {
            let r = (e.length ? (0,
            a.mergeGeometries)(e, !1) : null) ?? new t.BufferGeometry;
            for (let t of e)
                t.dispose();
            return r
        }
        ;
        return {
            body: i(r),
            lamps: i(o)
        }
    }
    , "createFleetMaterials", 0, function() {
        let e, a, o, i, n;
        return {
            close: y(!0),
            mid: y(!1),
            far: {
                body: (e = new t.MeshStandardMaterial({
                    vertexColors: !0,
                    side: t.DoubleSide
                }),
                a = r.ShaderChunk.color_vertex.replace("vColor.rgb *= instanceColor.rgb;", "vColor.rgb *= mix(vec3(1.0), instanceColor.rgb, paintMask);"),
                o = r.ShaderChunk.envmap_physical_pars_fragment.replaceAll("* envMapIntensity;", "* envMapIntensity * vSurface.z;"),
                e.onBeforeCompile = e => {
                    e.vertexShader = e.vertexShader.replace("#include <common>", "#include <common>\nattribute float paintMask;\nattribute vec3 surface;\nvarying vec3 vSurface;").replace("#include <color_vertex>", `${a}
	vSurface = surface;`),
                    e.fragmentShader = e.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec3 vSurface;").replace("#include <envmap_physical_pars_fragment>", o).replace("#include <roughnessmap_fragment>", "float roughnessFactor = vSurface.x;").replace("#include <metalnessmap_fragment>", "float metalnessFactor = vSurface.y;")
                }
                ,
                e.customProgramCacheKey = () => "distant-drift-car-v3",
                e),
                lamps: new t.MeshBasicMaterial({
                    vertexColors: !0,
                    toneMapped: !1
                })
            },
            cars: {
                body: {
                    close: g("close", "body", i = {
                        value: null
                    }),
                    mid: g("mid", "body", i),
                    far: g("far", "body", i)
                },
                wheel: {
                    close: g("close", "wheel", i),
                    mid: g("mid", "wheel", i)
                },
                shadow: ((n = new t.MeshDepthMaterial).onBeforeCompile = e => {
                    e.vertexShader = e.vertexShader.replace("#include <common>", "#include <common>\nattribute float caster;").replace("#include <begin_vertex>", "#include <begin_vertex>\n	transformed *= caster;")
                }
                ,
                n.customProgramCacheKey = () => `${p}-shadow`,
                n),
                numbers: i
            }
        }
    }
    , "disposeFleetMaterials", 0, function(e) {
        let {cars: t} = e;
        for (let r of [...Object.values(e.close), ...Object.values(e.mid), e.far.body, e.far.lamps, ...Object.values(t.body), ...Object.values(t.wheel), t.shadow])
            r.dispose()
    }
    , "reflectiveMaterials", 0, function(e) {
        let t = e => [[e.paint, .7], [e.glass, 1], [e.alloy, .7], [e.chrome, .7]]
          , r = [...Object.values(e.cars.body), ...Object.values(e.cars.wheel)].map(e => [e, 1]);
        return [...t(e.close), ...t(e.mid), [e.far.body, 1], ...r]
    }
    ])
}
, 167431, 380416, 271e3, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , a = e.i(94800)
      , o = e.i(190072)
      , i = e.i(998494)
      , n = e.i(471646)
      , l = e.i(425723)
      , s = e.i(125002)
      , u = e.i(128921);
    function c(e) {
        if ("u" < typeof document)
            return null;
        let t = document.createElement("canvas");
        t.width = e,
        t.height = e;
        let r = t.getContext("2d");
        return r ? {
            ctx: r,
            el: t
        } : null
    }
    function d(e) {
        let t = c(512);
        if (!t)
            return null;
        let {ctx: r, el: a} = t
          , o = (0,
        l.mulberry32)(1873);
        r.fillStyle = e.baseColor,
        r.fillRect(0, 0, 512, 512);
        for (let t = 0; t < 5200; t++) {
            let t = 1 + 3 * o();
            r.fillStyle = f(.5 > o() ? e.patchColor : e.jointColor, .8 + .6 * o()),
            r.fillRect(512 * o(), 512 * o(), t, t)
        }
        return (0,
        u.grain)(r, 34, o),
        a
    }
    function f(e, t) {
        let r = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
          , a = parseInt(e.replace("#", ""), 16)
          , o = Math.min(255, Math.round((r ? Number(r[1]) : a >> 16 & 255) * t))
          , i = Math.min(255, Math.round((r ? Number(r[2]) : a >> 8 & 255) * t))
          , n = Math.min(255, Math.round((r ? Number(r[3]) : 255 & a) * t));
        return `rgb(${o},${i},${n})`
    }
    function h(e) {
        if (!e)
            return null;
        let t = new o.CanvasTexture(e);
        return t.wrapS = o.RepeatWrapping,
        t.wrapT = o.RepeatWrapping,
        t.colorSpace = o.SRGBColorSpace,
        t.anisotropy = 8,
        t
    }
    function m(e, t, r) {
        let a = Math.min(1, Math.max(0, (r - e) / Math.max(1e-6, t - e)));
        return a * a * (3 - 2 * a)
    }
    function p(e, t) {
        let r = (0,
        s.groundUsesTexturePack)(e) ? (0,
        s.installedTextures)(s.GRASS_GROUND_TEXTURE_KEYS) : null
          , a = e.shoulderMeters ?? 0
          , i = null
          , p = null
          , g = null
          , v = e.tileSize
          , w = .75 * e.tileSize
          , b = 3;
        if (r)
            i = r.grassDiff,
            p = r.dirtDiff,
            g = r.gravelDiff,
            v = s.TEXTURE_TILE_METRES.grass,
            w = s.TEXTURE_TILE_METRES.dirt,
            b = s.TEXTURE_TILE_METRES.gravel;
        else {
            i = h("grass" === e.surface ? function(e) {
                let t = c(512);
                if (!t)
                    return null;
                let {ctx: r, el: a} = t
                  , o = (0,
                l.mulberry32)(6624);
                r.fillStyle = e.baseColor,
                r.fillRect(0, 0, 512, 512);
                for (let t = 0; t < 340; t++) {
                    let t = 8 + 26 * o()
                      , a = 512 * o()
                      , i = 512 * o();
                    (0,
                    u.wrapped)(512, a, i, t, (a, i) => {
                        let n = r.createRadialGradient(a, i, 0, a, i, t);
                        n.addColorStop(0, `${f(e.patchColor, .9 + .3 * o())}`),
                        n.addColorStop(1, "rgba(0,0,0,0)"),
                        r.fillStyle = n,
                        r.beginPath(),
                        r.arc(a, i, t, 0, 2 * Math.PI),
                        r.fill()
                    }
                    )
                }
                r.lineWidth = 1.4;
                for (let t = 0; t < 2400; t++) {
                    let t = 512 * o()
                      , a = 512 * o()
                      , i = 3 + 6 * o();
                    r.strokeStyle = f(.5 > o() ? e.patchColor : e.jointColor, .85 + .5 * o()),
                    r.beginPath(),
                    r.moveTo(t, a),
                    r.lineTo(t + (o() - .5) * 3, a - i),
                    r.stroke()
                }
                return (0,
                u.grain)(r, 22, o),
                a
            }(e) : "dirt" === e.surface ? d(e) : function(e) {
                let t = c(512);
                if (!t)
                    return null;
                let {ctx: r, el: a} = t
                  , o = (0,
                l.mulberry32)("concrete" === e.surface ? 4471 : 9137);
                for (let t = 0; t < 8; t++)
                    for (let a = 0; a < 8; a++) {
                        let i = .86 + .28 * o();
                        r.fillStyle = f(e.baseColor, i),
                        r.fillRect(64 * a, 64 * t, 64, 64)
                    }
                r.strokeStyle = "rgba(0,0,0,0.35)",
                r.lineWidth = 1.2;
                for (let e = 0; e < 26; e++) {
                    let e = 512 * o()
                      , t = 512 * o();
                    r.beginPath(),
                    r.moveTo(e, t);
                    for (let a = 0; a < 5; a++)
                        e += (o() - .5) * 60,
                        t += (o() - .5) * 60,
                        r.lineTo(e, t);
                    r.stroke()
                }
                r.strokeStyle = e.jointColor,
                r.lineWidth = 3;
                for (let e = 0; e <= 8; e++) {
                    let t = 64 * e;
                    r.beginPath(),
                    r.moveTo(t, 0),
                    r.lineTo(t, 512),
                    r.moveTo(0, t),
                    r.lineTo(512, t),
                    r.stroke()
                }
                return (0,
                u.grain)(r, 30, o),
                a
            }(e));
            let t = e.slopeColor ?? e.jointColor;
            g = p = h(d({
                ...e,
                surface: "dirt",
                baseColor: t,
                patchColor: f(t, 1.2),
                jointColor: f(t, .74)
            }))
        }
        let y = function(e) {
            let t = c(256);
            if (!t)
                return null;
            let {ctx: r, el: a} = t
              , o = (0,
            l.mulberry32)(2255);
            r.fillStyle = "rgb(128,128,128)",
            r.fillRect(0, 0, 256, 256);
            let i = "grass" === e.surface ? 68 : 40;
            for (let t = 0; t < i; t++) {
                let t, a, i, n = 256 * (.05 + .24 * o()), l = 256 * o(), s = 256 * o(), c = .5 > o();
                "grass" === e.surface ? c ? (t = 88 + 18 * o(),
                a = 102 + 22 * o(),
                i = 90 + 16 * o()) : (t = 148 + 28 * o(),
                a = 142 + 22 * o(),
                i = 118 + 18 * o()) : t = a = i = c ? 96 + 24 * o() : 146 + 26 * o(),
                (0,
                u.wrapped)(256, l, s, n, (e, o) => {
                    let l = r.createRadialGradient(e, o, 0, e, o, n);
                    l.addColorStop(0, `rgba(${0 | t},${0 | a},${0 | i},0.78)`),
                    l.addColorStop(1, "rgba(128,128,128,0)"),
                    r.fillStyle = l,
                    r.beginPath(),
                    r.arc(e, o, n, 0, 2 * Math.PI),
                    r.fill()
                }
                )
            }
            return (0,
            u.grain)(r, 8, o),
            a
        }(e)
          , M = null;
        y && ((M = new o.CanvasTexture(y)).wrapS = o.RepeatWrapping,
        M.wrapT = o.RepeatWrapping,
        M.colorSpace = o.LinearSRGBColorSpace,
        M.anisotropy = 4);
        let x = t ? function(e, t) {
            if ("u" < typeof document)
                return null;
            let r = new Uint8Array(262144)
              , a = e.extent
              , i = e.plateaus.some(e => e.shoulder)
              , s = (0,
            l.mulberry32)(0x5f3759df ^ e.seed);
            for (let o = 0; o < 256; o++) {
                let l = (o / 255 - .5) * a * 2;
                for (let u = 0; u < 256; u++) {
                    let c = (u / 255 - .5) * a * 2
                      , d = (256 * o + u) * 4
                      , f = 0
                      , h = 0;
                    if (i && t > 0) {
                        let r = (0,
                        n.nearestShoulderDistance)(e.plateaus, c, l);
                        if (r < t) {
                            let e = 1 - r / t;
                            h = m(.55, .95, e) * (1 - m(.92, 1, e)),
                            f = m(.08, .55, e) * (1 - m(.7, 1, e))
                        }
                    }
                    let p = .018 * c + .001 * e.seed
                      , g = .018 * l
                      , v = m(.15, .55, .35 * Math.sin(2.1 * p + 1.7 * g) + .4 * Math.sin(.7 * p - 1.3 * g) + (s() - .5) * .08);
                    r[d] = Math.round(255 * Math.min(1, f)),
                    r[d + 1] = Math.round(255 * Math.min(1, h)),
                    r[d + 2] = Math.round(255 * Math.min(1, v)),
                    r[d + 3] = 255
                }
            }
            let u = new o.DataTexture(r,256,256,o.RGBAFormat,o.UnsignedByteType);
            return u.wrapS = o.ClampToEdgeWrapping,
            u.wrapT = o.ClampToEdgeWrapping,
            u.magFilter = o.LinearFilter,
            u.minFilter = o.LinearFilter,
            u.colorSpace = o.LinearSRGBColorSpace,
            u.needsUpdate = !0,
            u
        }(t, a) : null;
        return {
            grass: i,
            dirt: p,
            gravel: g,
            macro: M,
            rock: h(function(e) {
                let t, r, a, o, i, n, s = c(512);
                if (!s)
                    return null;
                let {ctx: d, el: h} = s
                  , m = (0,
                l.mulberry32)(4409)
                  , p = (r = (t = parseInt((e.slopeColor ?? e.jointColor).replace("#", ""), 16)) >> 16 & 255,
                i = (r + (a = t >> 8 & 255) + (o = 255 & t)) / 3,
                n = e => Math.min(255, Math.max(0, Math.round(e))),
                `rgb(${n(r + (i - r) * .55 - 18)},${n(a + (i - a) * .55 - 7.2)},${n(o + (i - o) * .55 + 18)})`);
                d.fillStyle = p,
                d.fillRect(0, 0, 512, 512);
                for (let e = 0; e < 220; e++) {
                    let e = 512 * m()
                      , t = 512 * m()
                      , r = 12 + 34 * m()
                      , a = .55 + .85 * m()
                      , o = 3 + Math.floor(2 * m())
                      , i = m() * Math.PI * 2
                      , n = [];
                    for (let e = 0; e < o; e++)
                        n.push(.45 + .55 * m());
                    (0,
                    u.wrapped)(512, e, t, r, (e, t) => {
                        d.fillStyle = f(p, a),
                        d.beginPath();
                        for (let a = 0; a <= o; a++) {
                            let l = i + a / o * Math.PI * 2
                              , s = r * n[a % o]
                              , u = e + Math.cos(l) * s
                              , c = t + Math.sin(l) * s;
                            0 === a ? d.moveTo(u, c) : d.lineTo(u, c)
                        }
                        d.closePath(),
                        d.fill()
                    }
                    )
                }
                d.strokeStyle = f(p, .32),
                d.lineWidth = 1;
                for (let e = 0; e < 900; e++) {
                    let e = 512 * m()
                      , t = 512 * m()
                      , r = 4 + 16 * m()
                      , a = m() * Math.PI * 2;
                    d.beginPath(),
                    d.moveTo(e, t),
                    d.lineTo(e + Math.cos(a) * r, t + Math.sin(a) * r),
                    d.stroke()
                }
                return (0,
                u.grain)(d, 30, m),
                h
            }(e)),
            blend: x,
            grassTile: v,
            dirtTile: w,
            gravelTile: b,
            rockTile: 1.4 * e.tileSize
        }
    }
    e.s(["MACRO_SCALE", 0, 260, "createGroundTextures", 0, p], 380416);
    var g = e.i(569638)
      , v = e.i(268795)
      , w = e.i(244050)
      , b = e.i(694835)
      , y = e.i(202771)
      , M = e.i(85058)
      , x = e.i(252497)
      , S = e.i(879774)
      , E = e.i(391810)
      , _ = e.i(736659)
      , A = e.i(985249);
    function C(e) {
        return new o.ShaderMaterial({
            side: o.DoubleSide,
            depthFunc: e,
            vertexShader: `
      varying float vHeight;
      void main() {
        vec4 world = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          world = instanceMatrix * world;
        #endif
        world = modelMatrix * world;
        vHeight = world.y;
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,
            fragmentShader: `
      varying float vHeight;
      void main() { gl_FragColor = vec4(max(vHeight, 0.0), 0.0, 0.0, 1.0); }`
        })
    }
    let R = `
uniform sampler2D top;
uniform sampler2D bottom;
uniform float metres;
varying vec2 vUv;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  float jitter = hash(vUv * 4096.0);
  float occlusion = 0.0;
  for (int d = 0; d < 8; d++) {
    float angle = (float(d) + jitter) * 0.785398;
    vec2 direction = vec2(cos(angle), sin(angle)) / metres;
    float blocked = 0.0;
    for (int s = 0; s < 8; s++) {
      float r = 0.25 * pow(1.6, float(s) + jitter);
      vec2 uv = vUv + direction * r;
      float high = texture2D(top, uv).r;
      if (high < 0.03) continue;
      float low = min(texture2D(bottom, uv).r, high);
      float a = low / sqrt(low * low + r * r), b = high / sqrt(high * high + r * r);
      blocked = max(blocked, (b * b - a * a) * (1.0 - smoothstep(4.0, 10.0, r)));
    }
    occlusion += blocked;
  }
  gl_FragColor = vec4(occlusion / 8.0, 0.0, 0.0, 1.0);
}`
      , T = `
uniform sampler2D top;
uniform sampler2D bottom;
uniform float metres;
varying vec2 vUv;
void main() {
  float high = texture2D(top, vUv).r;
  float clear = 0.0;
  if (texture2D(bottom, vUv).r >= ${A.HIGH_COVER.toFixed(1)}) for (int r = 0; r < 8; r++) {
    vec2 direction = vec2(cos(float(r) * 0.785398), sin(float(r) * 0.785398)) / metres;
    float hit = 0.0;
    for (int s = 1; s <= ${A.HIGH_COVER_REACH}; s++) {
      vec2 uv = vUv + direction * float(s);
      if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) break;
      float h = float(s);
      if (texture2D(bottom, uv).r <= h && h <= texture2D(top, uv).r) { hit = 1.0; break; }
    }
    clear += 1.0 - hit;
  }
  gl_FragColor = vec4(clear >= ${A.HIGH_COVER_RAYS.toFixed(1)} ? 0.0 : high, 0.0, 0.0, 1.0);
}`
      , F = `
uniform sampler2D source;
uniform vec2 step;
uniform float radius;
varying vec2 vUv;
void main() {
  float lowest = texture2D(source, vUv).r;
  for (int i = 1; i <= 64; i++) {
    if (float(i) > radius) break;
    lowest = min(lowest, min(texture2D(source, vUv + step * float(i)).r, texture2D(source, vUv - step * float(i)).r));
  }
  gl_FragColor = vec4(lowest, 0.0, 0.0, 1.0);
}`
      , k = `
uniform sampler2D source;
uniform vec2 step;
varying vec2 vUv;
void main() {
  float sum = texture2D(source, vUv).r * 0.227;
  sum += (texture2D(source, vUv + step).r + texture2D(source, vUv - step).r) * 0.194;
  sum += (texture2D(source, vUv + step * 2.0).r + texture2D(source, vUv - step * 2.0).r) * 0.121;
  sum += (texture2D(source, vUv + step * 3.0).r + texture2D(source, vUv - step * 3.0).r) * 0.054;
  sum += (texture2D(source, vUv + step * 4.0).r + texture2D(source, vUv - step * 4.0).r) * 0.016;
  gl_FragColor = vec4(sum, 0.0, 0.0, 1.0);
}`;
    function D(e, t, r=!1) {
        let a = e.onBeforeCompile
          , o = e.customProgramCacheKey()
          , i = t.cover && r
          , n = (0,
        _.unbakedIndoorLight)();
        if (i) {
            let t = e.onBeforeRender;
            e.onBeforeRender = function(e, r, a, o, i, l) {
                t.call(this, e, r, a, o, i, l),
                (0,
                _.copyIndoorLight)(n, (0,
                _.sceneIndoorLight)(r))
            }
        }
        return e.onBeforeCompile = (r, o) => {
            a.call(e, r, o),
            Object.assign(r.uniforms, t.uniforms),
            i && Object.assign(r.uniforms, n),
            r.vertexShader = r.vertexShader.replace("#include <common>", "#include <common>\nvarying vec2 vOcclusionXZ;").replace("#include <project_vertex>", "#include <project_vertex>\n	vOcclusionXZ = (modelMatrix * vec4(transformed, 1.0)).xz;"),
            r.fragmentShader = r.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec2 vOcclusionXZ;\nuniform sampler2D groundOcclusionMap;\nuniform vec4 groundOcclusionBounds;\nuniform sampler2D groundCoverMap;" + (i ? _.INDOOR_LIGHT_FRAGMENT : "")).replace("#include <lights_fragment_maps>", i ? `#include <lights_fragment_maps>${(0,
            _.indoorLightApply)("vec3(vOcclusionXZ.x, 0.0, vOcclusionXZ.y)", "vec3(0.0, 1.0, 0.0)")}` : t.cover ? `#include <lights_fragment_maps>
	#ifdef USE_ENVMAP
	{
		float groundSky = 1.0 - ${(0,
            E.coverShare)("groundCoverMap", "groundOcclusionBounds", "vec3(vOcclusionXZ.x, 0.0, vOcclusionXZ.y)", "vec3(0.0, 1.0, 0.0)")};
		iblIrradiance *= groundSky;
		radiance *= groundSky;
	}
	#endif` : "#include <lights_fragment_maps>").replace("#include <aomap_fragment>", `#include <aomap_fragment>
	{
		vec2 occlusionUv = vec2(vOcclusionXZ.x - groundOcclusionBounds.x, groundOcclusionBounds.y - vOcclusionXZ.y) * groundOcclusionBounds.z;
		float skyOcclusion = groundOcclusionBounds.w * texture2D(groundOcclusionMap, occlusionUv).r;
		reflectedLight.indirectDiffuse *= 1.0 - skyOcclusion;
		reflectedLight.indirectSpecular *= 1.0 - skyOcclusion;
		// Part of the sun as well, like the contact shading baked into the solids.
		reflectedLight.directDiffuse *= 1.0 - skyOcclusion * DIRECT_SHARE;
	}`.replace("DIRECT_SHARE", "0.40"))
        }
        ,
        e.customProgramCacheKey = () => `${o}:ground-occlusion${t.cover ? "-cover" : ""}${i ? "-indoor" : ""}`,
        e
    }
    e.s(["GroundOcclusion", 0, class {
        cover;
        uniforms;
        result;
        coverResult;
        scene;
        highest;
        lowest;
        occlude;
        blur;
        open;
        erode;
        fullscreen;
        constructor(e=!1) {
            this.cover = e,
            this.uniforms = {
                groundOcclusionMap: {
                    value: new o.Texture
                },
                groundOcclusionBounds: {
                    value: new o.Vector4(0,0,0,0)
                },
                groundCoverMap: {
                    value: new o.Texture
                }
            },
            this.result = null,
            this.coverResult = null,
            this.scene = null,
            this.highest = C(o.LessEqualDepth),
            this.lowest = C(o.GreaterEqualDepth),
            this.occlude = new o.ShaderMaterial({
                uniforms: {
                    top: {
                        value: null
                    },
                    bottom: {
                        value: null
                    },
                    metres: {
                        value: 1
                    }
                },
                vertexShader: S.QUAD_VERTEX,
                fragmentShader: R,
                depthTest: !1,
                depthWrite: !1
            }),
            this.blur = new o.ShaderMaterial({
                uniforms: {
                    source: {
                        value: null
                    },
                    step: {
                        value: new o.Vector2
                    }
                },
                vertexShader: S.QUAD_VERTEX,
                fragmentShader: k,
                depthTest: !1,
                depthWrite: !1
            }),
            this.open = new o.ShaderMaterial({
                uniforms: {
                    top: {
                        value: null
                    },
                    bottom: {
                        value: null
                    },
                    metres: {
                        value: 1
                    }
                },
                vertexShader: S.QUAD_VERTEX,
                fragmentShader: T,
                depthTest: !1,
                depthWrite: !1
            }),
            this.erode = new o.ShaderMaterial({
                uniforms: {
                    source: {
                        value: null
                    },
                    step: {
                        value: new o.Vector2
                    },
                    radius: {
                        value: 1
                    }
                },
                vertexShader: S.QUAD_VERTEX,
                fragmentShader: F,
                depthTest: !1,
                depthWrite: !1
            }),
            this.fullscreen = new S.FullscreenPass
        }
        bake(e, t, r) {
            if (!(0,
            S.floatColorTargets)(e))
                return;
            let a = Math.max(r.maxX - r.minX, r.maxZ - r.minZ) + 20
              , i = Math.min(1024, 2 ** Math.ceil(Math.log2(a / .2)))
              , n = (r.minX + r.maxX) / 2
              , l = (r.minZ + r.maxZ) / 2
              , s = a / 2
              , u = new o.OrthographicCamera(-s,s,s,-s,1,r.ceiling + 40);
            u.position.set(n, r.ceiling + 20, l),
            u.up.set(0, 0, -1),
            u.lookAt(n, 0, l),
            u.updateMatrixWorld(),
            u.layers.set(x.GROUND_OCCLUDER_LAYER);
            let c = {
                type: o.HalfFloatType,
                format: o.RedFormat,
                minFilter: o.LinearFilter,
                magFilter: o.LinearFilter,
                depthBuffer: !0
            }
              , d = {
                type: o.UnsignedByteType,
                format: o.RedFormat,
                minFilter: o.LinearFilter,
                magFilter: o.LinearFilter,
                depthBuffer: !1
            }
              , f = new o.WebGLRenderTarget(i,i,c)
              , h = new o.WebGLRenderTarget(i,i,c)
              , m = new o.WebGLRenderTarget(i,i,d)
              , p = new o.WebGLRenderTarget(i,i,d)
              , g = i / 2
              , v = {
                type: o.HalfFloatType,
                format: o.RedFormat,
                minFilter: o.LinearFilter,
                magFilter: o.LinearFilter,
                depthBuffer: !1
            }
              , w = this.cover ? new o.WebGLRenderTarget(g,g,v) : null
              , b = this.cover ? new o.WebGLRenderTarget(g,g,v) : null
              , y = this.cover ? new o.WebGLRenderTarget(i,i,{
                ...v
            }) : null
              , M = {
                target: e.getRenderTarget(),
                autoClear: e.autoClear,
                shadows: e.shadowMap.autoUpdate,
                background: t.background,
                override: t.overrideMaterial,
                clearAlpha: e.getClearAlpha(),
                clearColor: e.getClearColor(new o.Color)
            };
            e.autoClear = !1,
            e.shadowMap.autoUpdate = !1,
            t.background = null,
            e.setClearColor(0, 1);
            try {
                if (t.overrideMaterial = this.highest,
                e.setRenderTarget(f),
                e.clear(!0, !0, !1),
                e.render(t, u),
                t.overrideMaterial = this.lowest,
                e.setRenderTarget(h),
                e.state.buffers.depth.setClear(0),
                e.clear(!0, !0, !1),
                e.render(t, u),
                e.state.buffers.depth.setClear(1),
                t.overrideMaterial = M.override,
                this.occlude.uniforms.top.value = f.texture,
                this.occlude.uniforms.bottom.value = h.texture,
                this.occlude.uniforms.metres.value = a,
                this.fullscreen.draw(e, this.occlude, m),
                this.blur.uniforms.source.value = m.texture,
                this.blur.uniforms.step.value.set(1 / i, 0),
                this.fullscreen.draw(e, this.blur, p),
                this.blur.uniforms.source.value = p.texture,
                this.blur.uniforms.step.value.set(0, 1 / i),
                this.fullscreen.draw(e, this.blur, m),
                w && b && y) {
                    this.open.uniforms.top.value = f.texture,
                    this.open.uniforms.bottom.value = h.texture,
                    this.open.uniforms.metres.value = a,
                    this.fullscreen.draw(e, this.open, y),
                    this.erode.uniforms.radius.value = Math.ceil(3 * i / a),
                    this.erode.uniforms.source.value = y.texture,
                    this.erode.uniforms.step.value.set(1 / i, 0),
                    this.fullscreen.draw(e, this.erode, w),
                    this.erode.uniforms.radius.value = Math.ceil(3 * g / a),
                    this.erode.uniforms.source.value = w.texture,
                    this.erode.uniforms.step.value.set(0, 1 / g),
                    this.fullscreen.draw(e, this.erode, b);
                    let t = 3 / 4 / a;
                    this.blur.uniforms.source.value = b.texture,
                    this.blur.uniforms.step.value.set(t, 0),
                    this.fullscreen.draw(e, this.blur, w),
                    this.blur.uniforms.source.value = w.texture,
                    this.blur.uniforms.step.value.set(0, t),
                    this.fullscreen.draw(e, this.blur, b)
                }
            } finally {
                e.state.buffers.depth.setClear(1),
                t.overrideMaterial = M.override,
                t.background = M.background,
                e.setClearColor(M.clearColor, M.clearAlpha),
                e.setRenderTarget(M.target),
                e.autoClear = M.autoClear,
                e.shadowMap.autoUpdate = M.shadows,
                f.dispose(),
                h.dispose(),
                p.dispose(),
                w?.dispose(),
                y?.dispose()
            }
            this.result?.dispose(),
            this.result = m,
            this.uniforms.groundOcclusionMap.value = m.texture,
            this.uniforms.groundOcclusionBounds.value.set(n - s, l + s, 1 / a, .85),
            b && (this.coverResult?.dispose(),
            this.coverResult = b,
            this.uniforms.groundCoverMap.value = b.texture,
            this.scene = t,
            (0,
            E.setSceneCover)(t, this.uniforms))
        }
        dispose() {
            this.result?.dispose(),
            this.result = null,
            this.coverResult?.dispose(),
            this.coverResult = null,
            this.scene && (0,
            E.sceneCover)(this.scene) === this.uniforms && (0,
            E.setSceneCover)(this.scene, void 0),
            this.scene = null,
            this.uniforms.groundOcclusionBounds.value.w = 0,
            this.highest.dispose(),
            this.lowest.dispose(),
            this.occlude.dispose(),
            this.blur.dispose(),
            this.erode.dispose(),
            this.fullscreen.dispose()
        }
    }
    , "applyGroundOcclusion", 0, D], 271e3);
    let I = `
#ifdef USE_FOG
vec3 outskirtsTint = fogColor;
#else
vec3 outskirtsTint = outskirtsHaze;
#endif`;
    e.s(["Ground", 0, function({theme: e, shadows: n, haze: l, playableBounds: s, outskirtsFogColor: u, occlusion: c, quality: d, lines: f=!0, indoor: h=!1, horizon: m}) {
        let x = (0,
        w.useSceneEnvironmentPalette)();
        (0,
        y.useSurfaceDetail)(!!d);
        let S = "grid" === e.surface ? (0,
        g.environmentColor)(e.baseColor, x) : e.baseColor
          , E = Math.max(1400, s ? (0,
        i.worldBound)(s) + 600 : 0)
          , _ = (0,
        r.useRef)(null)
          , {material: A, dispose: C} = (0,
        r.useMemo)( () => {
            var t;
            if ("grid" === e.surface) {
                let t = (0,
                b.gridMaterial)({
                    mapping: "world-xz",
                    vertexColors: !1,
                    axes: e.gridAxes,
                    style: (0,
                    v.environmentGridStyle)(x),
                    finish: d ? {
                        kind: "concrete",
                        quality: d
                    } : void 0,
                    lines: f
                });
                t.color.set(S);
                let r = t.onBeforeCompile;
                t.onBeforeCompile = (e, t) => {
                    if (r(e, t),
                    void 0 !== s) {
                        let t = (0,
                        i.wallDistances)(s);
                        e.uniforms.playableBounds = {
                            value: new o.Vector4(-t.negativeX + 1,t.positiveX - 1,-t.negativeZ + 1,t.positiveZ - 1)
                        },
                        e.uniforms.outskirtsHaze = {
                            value: new o.Color(u ?? "#b9dded")
                        },
                        e.uniforms.outsideColor = {
                            value: new o.Color(m?.floor ?? S)
                        };
                        let r = m?.shore;
                        r && (e.uniforms.groundShore = {
                            value: new o.Vector4(r.center[0],r.center[1],r.half[0] - r.radius,r.half[1] - r.radius)
                        },
                        e.uniforms.groundShoreRound = {
                            value: r.radius
                        },
                        e.uniforms.groundSand = {
                            value: new o.Color(r.sand)
                        });
                        let a = r ? `
                vec2 shoreQ = abs(vMetricGrid - groundShore.xy) - groundShore.zw;
                float shoreDistance = length(max(shoreQ, 0.0)) + min(max(shoreQ.x, shoreQ.y), 0.0) - groundShoreRound;
                if (shoreDistance > 0.0) discard;` : ""
                          , n = r ? `
                diffuseColor.rgb = mix(diffuseColor.rgb, groundSand, smoothstep(-11.0, -6.0, shoreDistance));` : "";
                        e.fragmentShader = e.fragmentShader.replace("#include <common>", `#include <common>
                uniform vec4 playableBounds;
                uniform vec3 outsideColor;
                uniform vec3 outskirtsHaze;${r ? `
                uniform vec4 groundShore;
                uniform float groundShoreRound;
                uniform vec3 groundSand;` : ""}`).replace("#include <roughnessmap_fragment>", `
                float edgeDistance = max(max(playableBounds.x - vMetricGrid.x, vMetricGrid.x - playableBounds.y), max(playableBounds.z - vMetricGrid.y, vMetricGrid.y - playableBounds.w));${a}
                float edgeAA = max(fwidth(edgeDistance), 0.01);
                float outside = smoothstep(-edgeAA, ${m?.floor ? "6.0" : "12.0"} + edgeAA, edgeDistance);
                diffuseColor.rgb = mix(diffuseColor.rgb, outsideColor, outside);${n}
                #include <roughnessmap_fragment>`).replace("#include <fog_fragment>", `#include <fog_fragment>
                ${I}
                gl_FragColor.rgb = mix(gl_FragColor.rgb, outskirtsTint, smoothstep(100.0, 480.0, edgeDistance));`)
                    }
                }
                ;
                let a = t.customProgramCacheKey()
                  , n = m ? `-${void 0 !== m.shore ? "shore" : ""}${m.floor ? "floor" : ""}` : "";
                return t.customProgramCacheKey = () => `${a}-ground-${void 0 !== s}-v8${n}`,
                c && D(t, c, h),
                {
                    material: (0,
                    M.protectGroundFromRoads)(t),
                    dispose: () => t.dispose()
                }
            }
            let r = p(e)
              , a = r.grass
              , n = a?.clone() ?? null;
            if (n) {
                let e = 2800 / r.grassTile;
                n.repeat.set(e, e),
                n.needsUpdate = !0
            }
            let g = new o.MeshStandardMaterial({
                color: n ? "#ffffff" : e.baseColor,
                roughness: "grass" === e.surface ? .98 : .95,
                metalness: 0,
                dithering: !0,
                envMapIntensity: .7
            });
            n && (g.map = n);
            let w = {
                cameraXZ: new o.Vector2(0,0),
                hazeColor: {
                    value: new o.Color(l?.color ?? "#46526a")
                },
                hazeStart: {
                    value: l?.start ?? 60
                },
                hazeEnd: {
                    value: l?.end ?? 400
                },
                hazeStrength: {
                    value: l?.strength ?? 0
                }
            };
            return _.current = w,
            r.macro && (t = {
                value: r.macro
            },
            g.onBeforeCompile = e => {
                e.uniforms.macroMap = t,
                e.uniforms.macroScale = {
                    value: .0038461538461538464
                },
                e.uniforms.hazeColor = w.hazeColor,
                e.uniforms.hazeStart = w.hazeStart,
                e.uniforms.hazeEnd = w.hazeEnd,
                e.uniforms.hazeStrength = w.hazeStrength,
                e.uniforms.cameraXZ = {
                    value: w.cameraXZ
                },
                e.vertexShader = e.vertexShader.replace("#include <common>", "#include <common>\nvarying vec2 vGroundXZ;").replace("#include <begin_vertex>", "#include <begin_vertex>\n	vGroundXZ = (modelMatrix * vec4(position, 1.0)).xz;"),
                e.fragmentShader = e.fragmentShader.replace("#include <common>", `#include <common>
varying vec2 vGroundXZ;
uniform sampler2D macroMap;
uniform float macroScale;
uniform vec3 hazeColor;
uniform float hazeStart;
uniform float hazeEnd;
uniform float hazeStrength;
uniform vec2 cameraXZ;`).replace("#include <map_fragment>", `#include <map_fragment>
	{
		float macro = texture2D(macroMap, vGroundXZ * macroScale).r;
		diffuseColor.rgb *= clamp(macro * 2.0, 0.55, 1.5);

		if ( hazeStrength > 0.001 ) {
			float dist = length( vGroundXZ - cameraXZ );
			float hazeT = smoothstep( hazeStart, hazeEnd, dist ) * hazeStrength;
			float luma = dot( diffuseColor.rgb, vec3( 0.299, 0.587, 0.114 ) );
			vec3 cooled = mix( diffuseColor.rgb, vec3( luma ), 0.4 );
			diffuseColor.rgb = mix( cooled, hazeColor, hazeT );
		}
	}`)
            }
            ,
            g.customProgramCacheKey = () => "sim-ground-v2"),
            c && D(g, c, h),
            {
                material: (0,
                M.protectGroundFromRoads)(g),
                dispose: () => {
                    n?.dispose(),
                    r.macro?.dispose(),
                    r.blend?.dispose(),
                    g.dispose()
                }
            }
        }
        , [S, e, l, s, u, x, c, d, f, h, m]);
        return (0,
        r.useEffect)( () => C, [C]),
        (0,
        a.useFrame)( ({camera: e}) => {
            _.current?.cameraXZ.set(e.position.x, e.position.z)
        }
        ),
        (0,
        t.jsx)("mesh", {
            rotation: [-Math.PI / 2, 0, 0],
            renderOrder: M.GROUND_RENDER_ORDER,
            receiveShadow: n,
            material: A,
            children: (0,
            t.jsx)("planeGeometry", {
                args: [2 * E, 2 * E]
            })
        })
    }
    , "OUTSKIRTS_TINT", 0, I], 167431)
}
, 70642, e => {
    "use strict";
    var t = e.i(190072)
      , r = e.i(809461)
      , a = e.i(619047)
      , o = e.i(820397)
      , i = e.i(630438);
    let n = [-1, 1].flatMap(e => [!0, !1].map(t => ({
        side: e,
        front: t,
        ...t ? o.KART_TYRES.front : o.KART_TYRES.rear
    })))
      , l = ["paint", "carbon", "chrome", "rubber"];
    class s {
        root = new t.Group;
        tiers;
        plates;
        batches = [];
        previous = [];
        casting = [];
        shadows = !1;
        colors = [];
        scratch = {
            wheel: new t.Matrix4,
            part: new t.Matrix4,
            position: new t.Vector3,
            rotation: new t.Quaternion,
            mirror: new t.Quaternion,
            euler: new t.Euler,
            one: new t.Vector3(1,1,1),
            world: new t.Vector3,
            camera: new t.Vector3,
            frustum: new t.Frustum,
            viewProjection: new t.Matrix4,
            local: new t.Sphere,
            sphere: new t.Sphere,
            plateBounds: new t.Sphere
        };
        constructor(e, r, a) {
            this.root.name = "Whoop Speedway karts";
            const o = (e, r, a, o, i, n) => {
                let l = new t.InstancedMesh(r,a,o);
                l.boundingSphere = new t.Sphere,
                l.instanceMatrix.setUsage(t.DynamicDrawUsage),
                i && (l.instanceColor = new t.InstancedBufferAttribute(new Float32Array(3 * o),3).setUsage(t.DynamicDrawUsage)),
                l.receiveShadow = !0,
                l.visible = !1,
                l.count = 0;
                let s = {
                    mesh: l,
                    used: 0,
                    painted: i,
                    finish: n,
                    bounds: e
                };
                return this.batches.push(s),
                s
            }
              , i = i => {
                let n = e[i]
                  , l = r[i]
                  , s = new t.Sphere
                  , u = (e, t) => Object.keys(e).filter(t => e[t].getAttribute("position")).map(r => o(s, e[r], l[r], t, "paint" === r, r));
                return {
                    bounds: s,
                    body: u(n.body, a),
                    front: u(n.front, 2 * a),
                    rear: u(n.rear, 2 * a)
                }
            }
              , n = r => ({
                cast: i(r),
                still: i(r),
                bounds: new t.Sphere,
                plates: !0,
                kart: u(Object.values(e[r].body), e[r])
            })
              , l = new t.Sphere
              , s = {
                still: {
                    bounds: l,
                    front: [],
                    rear: [],
                    body: [o(l, e.far.body, r.far.body, a, !0), ...e.far.lamps.getAttribute("position") ? [o(l, e.far.lamps, r.far.lamps, a, !1)] : []]
                },
                bounds: new t.Sphere,
                kart: u([e.far.body]),
                plates: !1
            };
            this.tiers = {
                close: n("close"),
                mid: n("mid"),
                far: s
            };
            const c = this.scratch.plateBounds;
            this.plates = e.plates.geometry.map(t => {
                let r = o(c, t, e.plates.material, a, !1);
                return r.mesh.receiveShadow = !1,
                r
            }
            )
        }
        setShadows(e) {
            for (let t of (this.shadows = e,
            i.DETAILS)) {
                let r = this.tiers[t].cast;
                if (r)
                    for (let t of [...r.body, ...r.front, ...r.rear])
                        t.mesh.castShadow = e && l.includes(t.finish)
            }
        }
        show(e) {
            return this.root.visible = e,
            e
        }
        update(e, t, a, l, s) {
            let u = this.scratch;
            this.root.updateWorldMatrix(!0, !1);
            let c = this.root.matrixWorld
              , d = c.getMaxScaleOnAxis();
            t.updateWorldMatrix(!0, !1),
            t.getWorldPosition(u.camera),
            u.frustum.setFromProjectionMatrix(u.viewProjection.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), t.coordinateSystem, t.reversedDepth);
            let f = t.fov ?? 60;
            for (let e of this.batches)
                e.used = 0;
            for (let e of (u.plateBounds.makeEmpty(),
            i.DETAILS)) {
                let t = this.tiers[e];
                t.bounds.makeEmpty(),
                t.still.bounds.makeEmpty(),
                t.cast?.bounds.makeEmpty()
            }
            for (let {mesh: t, used: i, painted: h, bounds: m} of (e.forEach( (e, t) => {
                u.world.setFromMatrixPosition(e.matrix).applyMatrix4(c);
                let i = Math.max(1, u.world.distanceTo(u.camera))
                  , h = o.KART_SIZE.length * d * a / (2 * i * Math.tan(f * Math.PI / 360))
                  , m = this.previous[t] ?? (0,
                r.carDetail)(1 / 0, "close", l)
                  , p = s ?? (0,
                r.carDetail)(h, m, l);
                this.previous[t] = p;
                let g = this.tiers[p]
                  , v = this.shadows && (0,
                r.carCastsShadow)(i, this.casting[t] ?? !1, l);
                this.casting[t] = v;
                let w = v && g.cast ? g.cast : g.still;
                if (u.local.copy(g.kart).applyMatrix4(e.matrix),
                !v && !u.frustum.intersectsSphere(u.sphere.copy(u.local).applyMatrix4(c)))
                    return;
                w.bounds.union(u.local),
                g.bounds.union(u.local);
                let b = this.color(t, e.color);
                for (let t of w.body)
                    this.place(t, e.matrix, b);
                if (g.plates && (u.plateBounds.union(u.local),
                this.place(this.plates[(e.number - 1 + 8) % 8], e.matrix, b)),
                0 !== w.front.length)
                    for (let t of n)
                        for (let r of (u.position.set(t.side * t.x, t.radius, t.z),
                        u.rotation.setFromEuler(u.euler.set(e.distance / t.radius, t.front ? e.steer : 0, 0, "YXZ")),
                        u.mirror.setFromEuler(u.euler.set(0, t.side < 0 ? Math.PI : 0, 0)),
                        u.rotation.multiply(u.mirror),
                        u.wheel.multiplyMatrices(e.matrix, u.part.compose(u.position, u.rotation, u.one)),
                        t.front ? w.front : w.rear))
                            this.place(r, u.wheel, b)
            }
            ),
            this.batches))
                t.count = i,
                t.visible = i > 0,
                0 !== i && (t.instanceMatrix.needsUpdate = !0,
                h && t.instanceColor && (t.instanceColor.needsUpdate = !0),
                t.boundingSphere.copy(m))
        }
        usage() {
            let e = e => {
                let t = e => e?.body[0]?.used ?? 0
                  , r = [e.still, e.cast].flatMap(e => e ? [...e.body, ...e.front, ...e.rear] : []).filter(e => e.used > 0).length;
                return {
                    karts: t(e.still) + t(e.cast),
                    casting: t(e.cast),
                    draws: r
                }
            }
            ;
            return {
                close: e(this.tiers.close),
                mid: e(this.tiers.mid),
                far: e(this.tiers.far)
            }
        }
        attach() {
            for (let {mesh: e} of this.batches)
                e.parent !== this.root && this.root.add(e)
        }
        dispose() {
            for (let {mesh: e} of this.batches)
                e.dispose();
            this.root.clear()
        }
        place(e, t, r) {
            e.mesh.setMatrixAt(e.used, t),
            e.painted && e.mesh.setColorAt(e.used, r),
            e.used++
        }
        color(e, r) {
            let a = this.colors[e];
            return a ? a.hex !== r && (a.hex = r,
            a.color.set(r)) : this.colors[e] = a = {
                hex: r,
                color: new t.Color(r)
            },
            a.color
        }
    }
    function u(e, r) {
        let a = new t.Sphere
          , o = (e, t) => {
            if (!e.getAttribute("position"))
                return;
            e.boundingSphere || e.computeBoundingSphere();
            let r = e.boundingSphere.clone();
            t && r.center.add(t),
            a.union(r)
        }
        ;
        for (let t of e)
            o(t);
        if (r)
            for (let e of n) {
                let a = new t.Vector3(e.side * e.x,e.radius,e.z);
                for (let t of Object.values(e.front ? r.front : r.rear))
                    o(t, a)
            }
        return a
    }
    e.s(["KartBatches", 0, s, "PLATE_COLUMNS", 0, 4, "PLATE_NUMBERS", 0, 8, "createKartResources", 0, function(e) {
        let t = e => ({
            body: (0,
            a.createKartGeometry)(e),
            front: (0,
            a.createKartWheelGeometry)(e, !1),
            rear: (0,
            a.createKartWheelGeometry)(e, !0)
        })
          , r = (0,
        a.createDistantKartGeometry)()
          , o = (0,
        i.createDistantCar)(r);
        for (let e of Object.values(r))
            e.dispose();
        let n = (0,
        a.kartNumberPlates)()
          , l = Array.from({
            length: 8
        }, (e, t) => {
            let r = n.clone()
              , a = r.getAttribute("uv")
              , o = t % 4
              , i = Math.floor(t / 4);
            for (let e = 0; e < a.count; e++)
                a.setXY(e, (o + a.getX(e)) / 4, 1 - (i + 1 - a.getY(e)) / 2);
            return r
        }
        );
        return n.dispose(),
        {
            close: t("close"),
            mid: t("mid"),
            far: o,
            plates: {
                geometry: l,
                material: e
            }
        }
    }
    , "disposeKartResources", 0, function(e) {
        let {close: t, mid: r, far: a, plates: o} = e;
        for (let e of [t, r])
            for (let t of [...Object.values(e.body), ...Object.values(e.front), ...Object.values(e.rear)])
                t.dispose();
        for (let e of (a.body.dispose(),
        a.lamps.dispose(),
        o.geometry))
            e.dispose();
        o.material.dispose()
    }
    ])
}
, 521068, e => {
    "use strict";
    var t = e.i(271645)
      , r = e.i(190072)
      , a = e.i(408560)
      , o = e.i(37155)
      , i = e.i(331935)
      , n = e.i(630438);
    let l = new WeakMap;
    e.s(["useFleetMaterials", 0, function(e) {
        let s = (0,
        t.useMemo)( () => {
            let t = l.get(e);
            return t || l.set(e, t = {
                materials: (0,
                n.createFleetMaterials)(),
                users: 0
            }),
            t
        }
        , [e]);
        return (0,
        t.useEffect)( () => {
            if (0 == s.users++ && !s.probe) {
                let t = new i.RoomEnvironment
                  , l = new a.PMREMGenerator(e);
                for (let[e,r] of (s.probe = l.fromScene(t, .045, .1, 100, {
                    size: 128
                }),
                t.dispose(),
                l.dispose(),
                (0,
                n.reflectiveMaterials)(s.materials)))
                    e.envMap = s.probe.texture,
                    e.envMapIntensity = r,
                    e.needsUpdate = !0;
                s.materials.cars.numbers.value = function() {
                    let e = document.createElement("canvas");
                    e.width = 256 * n.NUMBER_COLUMNS,
                    e.height = 256 * n.NUMBER_ROWS;
                    let t = e.getContext("2d");
                    t.fillStyle = "#ffffff",
                    t.fillRect(0, 0, e.width, e.height),
                    t.fillStyle = "#16191c",
                    t.textAlign = "center",
                    t.textBaseline = "middle",
                    t.font = "900 172px sans-serif";
                    for (let e = 0; e < o.DRIFT_NUMBERS; e++) {
                        let r = e % n.NUMBER_COLUMNS
                          , a = n.NUMBER_ROWS - 1 - Math.floor(e / n.NUMBER_COLUMNS);
                        t.fillText(String(e + 1), (r + .5) * 256, (a + .5) * 256 + 8)
                    }
                    let a = new r.CanvasTexture(e);
                    return a.colorSpace = r.SRGBColorSpace,
                    a.anisotropy = 4,
                    a
                }()
            }
            return () => {
                s.users--,
                queueMicrotask( () => {
                    s.users || l.get(e) !== s || (l.delete(e),
                    s.probe?.dispose(),
                    s.materials.cars.numbers.value?.dispose(),
                    (0,
                    n.disposeFleetMaterials)(s.materials))
                }
                )
            }
        }
        , [s, e]),
        s.materials
    }
    ])
}
, 809461, e => {
    "use strict";
    var t = e.i(166636);
    let r = {
        low: [0, 0],
        medium: [35, 40],
        high: [55, 60],
        ultra: [75, 80]
    };
    e.s(["carCastsShadow", 0, function(e, t, a) {
        let[o,i] = r[a];
        return e < (t ? i : o)
    }
    , "carDetail", 0, function(e, r, a) {
        return e < ("far" === r ? 95 : 75) ? "far" : (0,
        t.atLeast)(a, "high") && e > ("close" === r ? 210 : 260) ? "close" : "mid"
    }
    ])
}
, 37155, e => {
    "use strict";
    let t = {
        ember: {
            number: 1,
            kit: "black",
            wheels: "bronze"
        },
        glacier: {
            number: 2,
            kit: "black",
            wheels: "silver"
        },
        pearl: {
            number: 3,
            kit: "black",
            wheels: "bronze"
        },
        crimson: {
            number: 4,
            kit: "black",
            wheels: "gold"
        },
        violet: {
            number: 5,
            kit: "black",
            wheels: "silver"
        },
        lime: {
            number: 6,
            kit: "black",
            wheels: "black"
        },
        cobalt: {
            number: 7,
            kit: "black",
            wheels: "bronze"
        },
        gold: {
            number: 8,
            kit: "black",
            wheels: "black"
        }
    };
    e.s(["DRIFT_KIT_COLORS", 0, {
        black: "#17191c"
    }, "DRIFT_NUMBERS", 0, 8, "DRIFT_WHEEL_COLORS", 0, {
        bronze: "#94703a",
        silver: "#c3c8cd",
        gold: "#c9a043",
        black: "#1b1d20"
    }, "driftLivery", 0, function(e) {
        return t[e] ?? t.ember
    }
    ])
}
, 619047, e => {
    "use strict";
    var t = e.i(190072)
      , r = e.i(934297)
      , a = e.i(552260);
    let o = ["paint", "carbon", "glass", "alloy", "chrome", "light", "tail", "livery", "rubber"];
    class i {
        parts = Object.fromEntries(o.map(e => [e, []]));
        add(e, r, a=[0, 0, 0], o=[0, 0, 0]) {
            let i = new t.Matrix4().makeRotationFromEuler(new t.Euler(...o));
            i.setPosition(...a),
            r.applyMatrix4(i);
            let n = r.index ? r.toNonIndexed() : r;
            n !== r && r.dispose(),
            n.deleteAttribute("uv"),
            this.parts[e].push(n)
        }
        box(e, r, a, o=[0, 0, 0]) {
            this.add(e, new t.BoxGeometry(...r), a, o)
        }
        rod(e, r, a, o, i=8) {
            let n = new t.Vector3(...r)
              , l = new t.Vector3(...a)
              , s = l.clone().sub(n)
              , u = new t.CylinderGeometry(o,o,s.length(),i);
            u.applyQuaternion(new t.Quaternion().setFromUnitVectors(new t.Vector3(0,1,0), s.normalize())),
            this.add(e, u, n.add(l).multiplyScalar(.5).toArray())
        }
        panel(e, r) {
            let a = [];
            for (let e = 1; e < r.length - 1; e++)
                a.push(...r[0], ...r[e], ...r[e + 1]);
            let o = new t.BufferGeometry;
            o.setAttribute("position", new t.Float32BufferAttribute(a,3)),
            o.computeVertexNormals(),
            this.add(e, o)
        }
        finish() {
            return Object.fromEntries(o.map(e => {
                let r = this.parts[e];
                if (!r.length)
                    return [e, new t.BufferGeometry];
                let o = (0,
                a.mergeGeometries)(r)
                  , i = (0,
                a.mergeVertices)(o);
                for (let e of (o.dispose(),
                r))
                    e.dispose();
                return [e, i]
            }
            ))
        }
    }
    function n(e, r, a) {
        let o = []
          , i = [];
        for (let t = 0; t <= e; t++)
            for (let i = 0; i <= r; i++)
                o.push(...a(t / e, i / r));
        for (let t = 0; t < e; t++)
            for (let e = 0; e < r; e++) {
                let a = t * (r + 1) + e
                  , o = a + r + 1;
                i.push(a, o, a + 1, o, o + 1, a + 1)
            }
        let n = new t.BufferGeometry;
        return n.setAttribute("position", new t.Float32BufferAttribute(o,3)),
        n.setIndex(i),
        n.computeVertexNormals(),
        n
    }
    var l = e.i(820397)
      , s = e.i(884079);
    let u = {
        close: 1,
        mid: .45,
        far: .18
    }
      , c = (e, t, r=2) => Math.max(r, Math.round(e * u[t]))
      , d = (e, t, r) => {
        let a = Math.min(1, Math.max(0, (r - e) / (t - e)));
        return a * a * (3 - 2 * a)
    }
    ;
    function f(e, t, r, a, o) {
        let i = Math.cos(e)
          , n = Math.sin(e)
          , l = n >= 0 ? a : o;
        return [t * Math.sign(i) * Math.abs(i) ** (2 / l), r * Math.sign(n) * Math.abs(n) ** (2 / l)]
    }
    function h(e, r, a) {
        let o = (r, a) => new t.Vector3(...e(Math.min(1, Math.max(0, r)), Math.min(1, Math.max(0, a))))
          , i = o(r + .001, a).sub(o(r - .001, a))
          , n = o(r, a + .001).sub(o(r, a - .001));
        return i.cross(n).normalize()
    }
    function m(e, r, a, o, i, l) {
        let s = e => (r, a) => {
            let o = h(i, r, a);
            return new t.Vector3(...i(r, a)).addScaledVector(o, e * l / 2).toArray()
        }
          , u = s(1)
          , c = s(-1)
          , d = (e, t, r) => [e[0] + (t[0] - e[0]) * r, e[1] + (t[1] - e[1]) * r, e[2] + (t[2] - e[2]) * r];
        for (let t of (e.add(r, n(a, o, u)),
        e.add(r, n(a, o, c)),
        [0, 1]))
            e.add(r, n(a, 1, (e, r) => d(c(e, t), u(e, t), r)));
        for (let t of [0, 1])
            e.add(r, n(1, o, (e, r) => d(c(t, r), u(t, r), e)))
    }
    function p(e, t, r, a, o, i="y") {
        let n = "x" === i ? [0, 0, -Math.PI / 2] : "z" === i ? [Math.PI / 2, 0, 0] : [0, 0, 0];
        e.add(t, (0,
        s.latheGeometry)({
            profile: r,
            segments: a
        }), o, n)
    }
    function g(e, t, r=6) {
        let a = [[0, -t / 2 - e]];
        for (let o = 1; o <= r; o++) {
            let i = -Math.PI / 2 + o / r * Math.PI / 2;
            a.push([e * Math.cos(i), -t / 2 + e * Math.sin(i)])
        }
        for (let o = 0; o < r; o++) {
            let i = o / r * Math.PI / 2;
            a.push([e * Math.cos(i), t / 2 + e * Math.sin(i)])
        }
        return a.push([0, t / 2 + e]),
        a
    }
    function v(e, t) {
        let r = .58 + .47 * e
          , a = .19 + .14 * Math.exp(-(((r - .58) / .14) ** 2))
          , o = r > .96 ? Math.sqrt(Math.max(0, 1 - ((r - .96) / .09) ** 2)) : 1
          , [i,n] = f(-Math.PI / 2 + t * Math.PI * 2, (.28 + .32 * d(.8, .88, r)) * (.82 + .18 * o), (a - .065) / 2 * o, 3, 9);
        return [i, (a + .065) / 2 + n, r]
    }
    function w(e, t) {
        let r = 2 * t - 1;
        return [r * (.24 - .05 * e), .3 + .17 * e, .63 - .075 * e + .03 * (1 - r * r)]
    }
    function b(e, t) {
        let r = Math.sqrt(Math.max(0, 1 - (2 * e - 1) ** 10))
          , [a,o] = f(t * Math.PI * 2, .06 * (.7 + .3 * r), .11 * r, 4, 4);
        return [(2 * e - 1) * .66, .19 + o, -.99 + a]
    }
    let y = [[.18, -.2], [.17, -.27], [l.KART_SEAT.y, -.44], [.185, -.505], [.23, -.54], [.8, -.7]];
    function M(e) {
        let t = e * (y.length - 1)
          , r = Math.min(y.length - 2, Math.floor(t))
          , a = t - r
          , o = e => y[Math.max(0, Math.min(y.length - 1, e))]
          , [i,n,l,s] = [o(r - 1), o(r), o(r + 1), o(r + 2)]
          , u = e => .5 * (2 * n[e] + (-i[e] + l[e]) * a + (2 * i[e] - 5 * n[e] + 4 * l[e] - s[e]) * a * a + (-i[e] + 3 * n[e] - 3 * l[e] + s[e]) * a * a * a);
        return [u(0), u(1)]
    }
    function x(e, t) {
        let[r,a] = M(e)
          , [o,i] = M(Math.min(1, e + .01))
          , [n,l] = M(Math.max(0, e - .01))
          , s = o - n
          , u = i - l
          , c = Math.hypot(s, u)
          , f = 2 * t - 1
          , h = (.012 + .07 * d(.3, .62, e)) * f ** 4;
        return [.235 * f, r + -u / c * h, a + s / c * h]
    }
    function S(e, t) {
        let r, a, {radius: o, width: n} = t ? l.KART_TYRES.rear : l.KART_TYRES.front, s = new i, u = c(40, e, 10), d = n / 2, f = .62 * o;
        if (p(s, "rubber", (r = n / 2,
        [[a = .62 * o + .002, -r + .008], [o - .03, -r], [o - .01, -r + .008], [o, -r + .03], [o, r - .03], [o - .01, r - .008], [o - .03, r], [a, r - .008]]), u, [0, 0, 0], "x"),
        p(s, "alloy", [[f - .006, -d + .01], [f, -d + .01], [f, d - .004], [f + .004, d], [f - .008, d], [f - .006, d - .01]], u, [0, 0, 0], "x"),
        p(s, "chrome", [[0, d - .04], [.026, d - .04], [.03, d - .022], [.018, d - .006], [0, d - .004]], c(20, e, 6), [0, 0, 0], "x"),
        "far" === e)
            return s.finish();
        for (let t = 0; t < 5; t++) {
            let r = t * Math.PI * 2 / 5
              , a = Math.cos(r)
              , o = Math.sin(r);
            s.rod("alloy", [d - .018, .024 * o, .024 * a], [d - .012, (f - .004) * o, (f - .004) * a], .011, "close" === e ? 8 : 5)
        }
        return s.finish()
    }
    function E(e="close") {
        let a = new i
          , o = "close" === e
          , s = "far" === e
          , u = (e, t, r) => {
            for (let i = 0; i < t.length - 1; i++)
                a.rod(e, t[i], t[i + 1], r, o ? 10 : 6)
        }
        ;
        a.add("paint", n(c(30, e), c(36, e, 8), v));
        let d = c(36, e, 8);
        for (let t of (a.panel("paint", Array.from({
            length: d
        }, (e, t) => v(0, t / d))),
        m(a, "paint", c(10, e), c(16, e, 4), w, .014),
        [-1, 1]))
            a.add("paint", n(c(24, e), c(28, e, 8), (e, r) => (function(e, t, r) {
                let a = Math.sqrt(Math.max(0, 1 - ((t - .5) * 2) ** 8))
                  , [o,i] = f(-Math.PI / 2 + r * Math.PI * 2, .1 * a ** .4, .1 * a * (.86 + .14 * t), 2.6, 7);
                return [e * (.52 + o), .07 + .1 * (.86 + .14 * t) + i, -.3 + .72 * t]
            }
            )(t, e, t > 0 ? r : 1 - r)));
        if (a.add("paint", n(c(36, e, 6), c(24, e, 8), b)),
        s)
            return a.box("carbon", [.5, .03, 1.5], [0, .085, -.1]),
            a.add("carbon", n(4, 4, x)),
            a.box("carbon", [.14, .3, .24], [-.345, .25, -.45]),
            a.add("chrome", new t.CylinderGeometry(.055,.055,.26,8), [-.29, .34, -.84], [0, 0, Math.PI / 2]),
            a.add("carbon", new t.TorusGeometry(l.KART_STEERING_WHEEL.radius,.02,4,12), [0, l.KART_STEERING_WHEEL.y, l.KART_STEERING_WHEEL.z], [l.KART_STEERING_WHEEL.tilt, 0, 0]),
            a.finish();
        let {front: h, rear: y} = l.KART_TYRES;
        for (let e of [-1, 1])
            u("chrome", [[.2 * e, .085, .86], [.26 * e, .075, .55], [.32 * e, .075, -.3], [.36 * e, .09, -.62], [.3 * e, .11, -.9]], .014),
            u("chrome", [[.26 * e, .085, h.z], [.44 * e, .1, h.z]], .014),
            u("chrome", [[.44 * e, .06, h.z + .02], [.44 * e, .2, h.z - .02]], .012),
            u("alloy", [[.44 * e, h.radius, h.z], [e * (h.x - h.width / 2 + .01), h.radius, h.z]], .012),
            u("chrome", [[.28 * e, .08, .38], [.47 * e, .13, .36], [.47 * e, .13, -.24], [.3 * e, .08, -.26]], .011),
            u("chrome", [[.17 * e, .56, -.635], [.27 * e, .12, -.84]], .01),
            a.add("alloy", new t.CylinderGeometry(.035,.035,.05,o ? 20 : 10), [.36 * e, y.radius, y.z], [0, 0, Math.PI / 2]);
        u("chrome", [[-.26, .085, h.z], [.26, .085, h.z]], .014),
        u("chrome", [[-.32, .075, -.3], [.32, .075, -.3]], .014),
        u("chrome", [[-.3, .11, -.9], [.3, .11, -.9]], .014),
        u("chrome", [[-.2, .085, .86], [.2, .085, .86]], .014);
        let M = y.x - y.width / 2 + .02;
        for (let e of (u("alloy", [[-M, y.radius, y.z], [M, y.radius, y.z]], .02),
        [-.3, .3]))
            u("chrome", [[e, .11, -.9], [e, .15, -.94]], .012);
        for (let t of (a.add("carbon", new r.RoundedBoxGeometry(.5,.01,.92,2,.004), [0, .094, .15]),
        m(a, "carbon", c(28, e), c(16, e, 6), x, .012),
        [-1, 1]))
            for (let[e,r] of [[-.3, .32], [-.48, .3425]])
                u("chrome", [[.15 * t, .162, e], [t * r, .085, e]], .01);
        p(a, "livery", g(.075, .18, o ? 8 : 4), c(24, e, 8), [0, .175, .37], "z"),
        a.add("carbon", new t.CylinderGeometry(.022,.022,.02,12), [0, .255, .42]);
        let S = l.KART_STEERING_WHEEL.tilt
          , _ = new t.Vector3(0,-Math.sin(S),Math.cos(S))
          , A = new t.Vector3(0,l.KART_STEERING_WHEEL.y,l.KART_STEERING_WHEEL.z)
          , C = A.clone().addScaledVector(_, .6);
        a.rod("chrome", C.toArray(), A.clone().addScaledVector(_, .02).toArray(), .015, o ? 10 : 6),
        a.add("rubber", new t.TorusGeometry(l.KART_STEERING_WHEEL.radius,.018,o ? 10 : 6,c(40, e, 12)), [0, l.KART_STEERING_WHEEL.y, l.KART_STEERING_WHEEL.z], [S, 0, 0]),
        a.add("carbon", new t.CylinderGeometry(.045,.045,.03,c(20, e, 8)), [0, l.KART_STEERING_WHEEL.y, l.KART_STEERING_WHEEL.z], [S + Math.PI / 2, 0, 0]);
        let R = new t.Vector3(0,Math.cos(S),Math.sin(S));
        for (let[e,r] of [[1, 0], [-1, 0], [0, -1]]) {
            let o = A.clone().addScaledVector(R, r * (l.KART_STEERING_WHEEL.radius - .01)).add(new t.Vector3(e * (l.KART_STEERING_WHEEL.radius - .01),0,0));
            a.rod("carbon", A.toArray(), o.toArray(), .012, 6)
        }
        for (let e of [-1, 1])
            a.add("alloy", new r.RoundedBoxGeometry(.07,.11,.012,2,.004), [.2 * e, .25, .535], [-.45, 0, 0]),
            a.rod("chrome", [.2 * e, .2, .555], [.2 * e, .1, .57], .008, 6);
        a.add("carbon", new r.RoundedBoxGeometry(.14,.17,.22,3,.03), [-.345, .175, -.45]),
        p(a, "alloy", [[0, .26], [.045, .26], [.045, .33], [0, .33]], c(24, e, 8), [-.345, 0, -.43]);
        let T = [[0, .33]];
        for (let e = 0; e < (o ? 6 : 3); e++) {
            let t = .33 + e * (o ? .014 : .028)
              , r = t + (o ? .006 : .014);
            T.push([.045, t], [.068, t + .001], [.068, r - .001], [.045, r])
        }
        return T.push([.045, .418], [.05, .425], [0, .428]),
        p(a, "alloy", T, c(24, e, 8), [-.345, 0, -.43]),
        a.rod("rubber", [-.345, .428, -.43], [-.345, .46, -.4], .009, 6),
        p(a, "carbon", g(.05, .05, o ? 6 : 3), c(24, e, 8), [-.345, .24, -.27], "z"),
        p(a, "alloy", [[0, -.016], [.062, -.016], [.066, -.01], [.066, .01], [.062, .016], [0, .016]], c(28, e, 8), [-.432, .16, -.5], "x"),
        a.add("carbon", new r.RoundedBoxGeometry(.02,.13,.3,2,.008), [-.445, .15, -.61]),
        u("chrome", [[-.345, .3, -.48], [-.345, .33, -.6], [-.33, .345, -.78]], .018),
        p(a, "chrome", g(.055, .2, o ? 8 : 4), c(28, e, 8), [-.29, .34, -.84], "x"),
        a.rod("chrome", [-.2, .33, -.88], [-.2, .32, -.93], .016, 8),
        p(a, "alloy", [[.02, -.005], [.09, -.005], [.09, .005], [.02, .005]], c(32, e, 10), [.17, y.radius, y.z], "x"),
        a.add("carbon", new r.RoundedBoxGeometry(.04,.05,.07,2,.01), [.17, y.radius + .075, y.z + .01]),
        a.finish()
    }
    e.s(["createDistantKartGeometry", 0, function() {
        let e = E("far")
          , t = new i;
        for (let r of o)
            e[r].getAttribute("position") && t.add(r, e[r]);
        for (let e of [!1, !0]) {
            let r = S("far", e)
              , {x: a, z: i, radius: n} = e ? l.KART_TYRES.rear : l.KART_TYRES.front;
            for (let e of [-1, 1])
                for (let l of o) {
                    if (!r[l].getAttribute("position"))
                        continue;
                    let o = r[l].clone();
                    e < 0 && o.rotateY(Math.PI),
                    t.add(l, o, [e * a, n, i])
                }
            Object.values(r).forEach(e => e.dispose())
        }
        return t.finish()
    }
    , "createKartGeometry", 0, E, "createKartWheelGeometry", 0, S, "kartNumberPlates", 0, function() {
        let e = []
          , r = []
          , a = [];
        for (let[o,{sample: i, u: n, v: l}] of [{
            sample: w,
            u: [.18, .86],
            v: [.29, .71]
        }, {
            sample: b,
            u: [.38, .62],
            v: [.6, .4]
        }].entries()) {
            let s = (e, t) => [n[0] + (n[1] - n[0]) * e, l[0] + (l[1] - l[0]) * t]
              , u = e.length / 3
              , c = 0 === o ? 1 : -1;
            for (let a = 0; a <= 6; a++)
                for (let n = 0; n <= 8; n++) {
                    let[l,u] = s(a / 6, n / 8)
                      , d = h(i, l, u)
                      , f = new t.Vector3(...i(l, u));
                    f.addScaledVector(d, Math.sign(d.z) * c * (0 === o ? .01 : .003)),
                    e.push(f.x, f.y, f.z),
                    r.push(...0 === o ? [n / 8, a / 6] : [1 - a / 6, n / 8])
                }
            let d = (r, a) => new t.Vector3().fromArray(e, (u + 9 * r + a) * 3)
              , f = d(1, 0).sub(d(0, 0)).cross(d(0, 1).sub(d(0, 0))).z * c > 0;
            for (let e = 0; e < 6; e++)
                for (let t = 0; t < 8; t++) {
                    let r = u + 9 * e + t
                      , o = r + 8 + 1;
                    f ? a.push(r, o, r + 1, o, o + 1, r + 1) : a.push(r, r + 1, o, o, r + 1, o + 1)
                }
        }
        let o = new t.BufferGeometry;
        return o.setAttribute("position", new t.Float32BufferAttribute(e,3)),
        o.setAttribute("uv", new t.Float32BufferAttribute(r,2)),
        o.setIndex(a),
        o.computeVertexNormals(),
        o
    }
    ], 619047)
}
]);
