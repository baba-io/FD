(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 522932, 520179, 837994, 838152, 880400, 702404, e => {
    "use strict";
    var t, o, a = e.i(843476), i = e.i(271645), r = e.i(243257), n = e.i(730624), s = e.i(848546), l = e.i(190072), d = e.i(55428), c = e.i(348029), u = e.i(524001), h = e.i(80630), m = e.i(94800), f = e.i(252497), p = e.i(664311), g = e.i(814966), v = l, w = e.i(408560);
    class S extends v.Texture {
        clone() {
            return this
        }
    }
    let y = new S({
        width: 128,
        height: 128,
        depth: 1
    });
    y.format = v.RedFormat,
    y.type = v.UnsignedByteType,
    y.minFilter = y.magFilter = v.LinearFilter,
    y.generateMipmaps = !1,
    y.name = "movingShadow.tiles";
    let x = "#ifndef MOVING_SHADOW_TILES_OFF\n#define MOVING_SHADOW_TILES\n#endif\n";
    for (let e of ["standard", "physical", "lambert", "phong", "toon"]) {
        let t = w.ShaderLib[e];
        t.fragmentShader.startsWith(x) || (t.fragmentShader = x + t.fragmentShader),
        t.uniforms.movingShadowTiles = {
            value: y
        }
    }
    let M = new WeakMap
      , _ = {
        enabled: !0
    }
      , b = `void main() {
	gl_Position = vec4( position.xy, 0.0, 1.0 );
}`
      , C = `uniform sampler2DShadow movingShadowMap;
uniform float movingShadowSize;
uniform float movingShadowClear;
uniform float movingShadowMark;
void main() {
	vec2 tile = floor( gl_FragCoord.xy );
	vec2 first = floor( tile * movingShadowSize / 128.0 );
	vec2 end = ceil( ( tile + 1.0 ) * movingShadowSize / 128.0 );
	float empty = movingShadowMark;
	for ( int y = 0; y < 17; y ++ ) {
		float row = first.y + 2.0 * float( y );
		if ( row >= end.y || empty < 1.0 ) break;
		for ( int x = 0; x < 17; x ++ ) {
			float column = first.x + 2.0 * float( x );
			if ( column >= end.x ) break;
			empty = min( empty, texture( movingShadowMap, vec3( ( vec2( column, row ) + 1.0 ) / movingShadowSize, movingShadowClear ) ) );
		}
	}
	gl_FragColor = vec4( empty == 1.0 ? 1.0 : 0.0, 0.0, 0.0, 1.0 );
}`;
    class T {
        scene = new v.Scene;
        camera = new v.OrthographicCamera(-1,1,1,-1,0,1);
        material = new v.ShaderMaterial({
            uniforms: {
                movingShadowMap: {
                    value: null
                },
                movingShadowSize: {
                    value: 1
                },
                movingShadowClear: {
                    value: 1
                },
                movingShadowMark: {
                    value: 0
                }
            },
            vertexShader: b,
            fragmentShader: C,
            depthTest: !1,
            depthWrite: !1
        });
        geometry = new v.BufferGeometry;
        constructor() {
            this.geometry.setAttribute("position", new v.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),3));
            const e = new v.Mesh(this.geometry,this.material);
            e.frustumCulled = !1,
            this.scene.add(e)
        }
        draw(e, t) {
            var o, a;
            let i, r = t.shadow.map, n = t.shadow.mapSize.x, s = this.material.uniforms;
            s.movingShadowMap.value = r?.depthTexture ?? null,
            s.movingShadowSize.value = n,
            s.movingShadowClear.value = +!e.state.buffers.depth.getReversed(),
            s.movingShadowMark.value = _.enabled && r?.depthTexture && t.shadow.mapSize.y === n && (o = n,
            a = t.shadow.radius,
            (i = o / 128) >= 2 * (a * Math.sqrt(.9) + 1) + 1 && i <= 32) ? 1 : 0;
            let l = e.getRenderTarget()
              , d = e.getActiveCubeFace()
              , c = e.getActiveMipmapLevel()
              , u = e.autoClear
              , h = e.info.autoReset;
            try {
                let t;
                e.autoClear = !1,
                e.info.autoReset = !1,
                e.setRenderTarget(((t = M.get(e)) || ((t = new v.WebGLRenderTarget(128,128,{
                    depthBuffer: !1,
                    generateMipmaps: !1
                })).textures[0] = y,
                M.set(e, t)),
                t)),
                e.render(this.scene, this.camera)
            } finally {
                e.setRenderTarget(l, d, c),
                e.autoClear = u,
                e.info.autoReset = h
            }
        }
        dispose() {
            this.geometry.dispose(),
            this.material.dispose()
        }
    }
    e.s(["MovingShadowTilePass", 0, T, "movingShadowSkip", 0, _], 520179);
    let k = /#pragma unroll_loop_start(\s+)for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{/
      , E = "directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;"
      , D = RegExp(`${E.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s+#endif\\s+)RE_Direct\\(`)
      , R = [0, 1, 2, 3, 4].map(e => {
        let t = Math.sqrt((e + .5) / 5);
        return [Math.cos(2.399963229728653 * e) * t, Math.sin(2.399963229728653 * e) * t]
    }
    )
      , A = `float getShadowTurned( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, vec2 turn ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		#ifdef USE_REVERSED_DEPTH_BUFFER
		shadowCoord.z -= shadowBias;
		bool frustumTest = inFrustum && shadowCoord.z >= 0.0;
		#else
		shadowCoord.z += shadowBias;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		#endif
		if ( frustumTest ) {
			mat2 disk = mat2( turn.x, turn.y, - turn.y, turn.x ) * ( shadowRadius / shadowMapSize.x );
			shadow = (
				${R.map( ([e,t]) => `texture( shadowMap, vec3( shadowCoord.xy + disk * vec2( ${e.toFixed(8)}, ${t.toFixed(8)} ), shadowCoord.z ) )`).join(" +\n				")}
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#if defined( MOVING_SHADOW_TILES ) && NUM_DIR_LIGHT_SHADOWS == 2
	#define MOVING_SHADOW_SKIP
	uniform sampler2D movingShadowTiles;
	#endif
	`
      , L = "#elif defined( SHADOWMAP_TYPE_VSM )"
      , O = [0, 1, 2, 3, 4].map(e => `texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( ${e}, 5, phi ) * radius, shadowCoord.z ) )`)
      , z = `#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	#if defined( USE_CLEARCOAT ) || defined( TOON )
	#define SHADOW_MASK_FACES( light ) true
	#else
	#define SHADOW_MASK_FACES( light ) ( dot( geometryNormal, light.direction ) > 0.0 )
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
	float directionalShadowPhi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
	vec2 directionalShadowTurn = vec2( cos( directionalShadowPhi ), sin( directionalShadowPhi ) );
	#define SHADOW_MASK_READ( map, coord ) getShadowTurned( map, directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, coord, directionalShadowTurn )
	#else
	#define SHADOW_MASK_READ( map, coord ) getShadow( map, directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, coord )
	#endif
	#ifdef MOVING_SHADOW_SKIP
	#define SHADOW_MASK_HOLDS( coord ) ( texture( movingShadowTiles, ( coord ).xy ).r < 1.0 )
	#else
	#define SHADOW_MASK_HOLDS( coord ) true
	#endif
	float directionalShadows[ NUM_DIR_LIGHT_SHADOWS ];
	float directionalShadowMask = 1.0;
	bool directionalShadowLetsLight = false;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLights[ i ];
		directionalShadows[ i ] = 1.0;
		if ( receiveShadow && directionalLight.color != vec3( 0.0 ) && SHADOW_MASK_FACES( directionalLight ) ) {
			directionalLightShadow = directionalLightShadows[ i ];
			directionalShadows[ i ] = SHADOW_MASK_READ( directionalShadowMap[ i ], vDirectionalShadowCoord[ i ] );
			directionalShadowLetsLight = directionalShadowLetsLight || directionalShadows[ i ] > 0.0;
		}
	}
	#pragma unroll_loop_end
	#if NUM_DIR_LIGHT_SHADOWS > 1
	if ( directionalShadowLetsLight ) {
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			directionalLight = directionalLights[ i ];
			if ( directionalLight.color == vec3( 0.0 ) && SHADOW_MASK_HOLDS( vDirectionalShadowCoord[ i ] ) ) {
				directionalLightShadow = directionalLightShadows[ i ];
				directionalShadowMask *= SHADOW_MASK_READ( directionalShadowMap[ i ], vDirectionalShadowCoord[ i ] );
			}
		}
		#pragma unroll_loop_end
	}
	#endif
	#endif
	`
      , B = `#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 1
		if ( directLight.color != vec3( 0.0 ) )
		#endif
		RE_Direct(`
      , F = (t = w.ShaderChunk.shadowmap_pars_fragment).includes("getShadowTurned") ? t : 2 !== t.split(L).length || ["const float goldenAngle = 2.399963229728653;", "float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );", "float theta = float( sampleIndex ) * goldenAngle + phi;", "return vec2( cos( theta ), sin( theta ) ) * r;", "float radius = shadowRadius * texelSize.x;", "float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;", ...O].some(e => !t.includes(e)) ? null : t.replace(L, A + L)
      , P = F && ((o = w.ShaderChunk.lights_fragment_begin).includes("directionalShadowMask") ? o : k.test(o) && 2 === o.split(E).length && D.test(o) ? o.replace(k, e => z + e).replace(D, (e, t) => "directLight.color *= ( directLight.visible && receiveShadow ) ? directionalShadows[ i ] * directionalShadowMask : 1.0;" + t + B) : null);
    function W(e, t, o=!1) {
        let a = new l.DepthTexture(e,t,l.UnsignedShortType);
        a.format = l.DepthFormat,
        a.compareFunction = o ? l.GreaterEqualCompare : l.LessEqualCompare,
        a.minFilter = a.magFilter = l.LinearFilter,
        a.name = "sunShadow.depth";
        let i = new l.WebGLRenderTarget(e,t,{
            format: l.RedFormat,
            type: l.UnsignedByteType,
            minFilter: l.NearestFilter,
            magFilter: l.NearestFilter,
            generateMipmaps: !1,
            depthBuffer: !0,
            depthTexture: a
        });
        return i.texture.name = "sunShadow.colour",
        i
    }
    function I(e) {
        e?.depthTexture?.dispose(),
        e?.dispose()
    }
    function V(e) {
        if (e.boundingBox)
            return e.boundingBox;
        let t = e.getAttribute("position");
        if (!t || t.isInterleavedBufferAttribute || t.normalized || !(t.array instanceof Float32Array))
            return e.computeBoundingBox(),
            e.boundingBox;
        let o = t.array
          , a = 3 * t.count
          , i = 1 / 0
          , r = 1 / 0
          , n = 1 / 0
          , s = -1 / 0
          , d = -1 / 0
          , c = -1 / 0;
        for (let e = 0; e < a; e += 3) {
            let t = o[e]
              , a = o[e + 1]
              , l = o[e + 2];
            t < i && (i = t),
            t > s && (s = t),
            a < r && (r = a),
            a > d && (d = a),
            l < n && (n = l),
            l > c && (c = l)
        }
        return e.boundingBox = new l.Box3(new l.Vector3(i,r,n),new l.Vector3(s,d,c)),
        e.boundingBox
    }
    F && P ? (w.ShaderChunk.shadowmap_pars_fragment = F,
    w.ShaderChunk.lights_fragment_begin = P) : console.error("shadow-mask: Three's shadow or lighting chunk changed; moving casters will cast no sun shadows");
    let U = new l.Box3
      , H = new l.Vector3
      , j = new l.Vector3
      , G = new l.Color;
    class N {
        sun;
        mask;
        statics;
        switched;
        staticTarget;
        movingTarget;
        bakedRevision;
        bakedKey;
        bakeScene;
        bakeCamera;
        tiles;
        bakes;
        constructor(e, t) {
            this.sun = e,
            this.mask = t,
            this.statics = [],
            this.switched = [],
            this.staticTarget = null,
            this.movingTarget = null,
            this.bakedRevision = -1,
            this.bakedKey = "",
            this.bakeScene = new l.Scene,
            this.bakeCamera = new l.OrthographicCamera,
            this.tiles = new T,
            this.bakes = [],
            e.shadow.autoUpdate = !1,
            this.bakeCamera.layers.set(f.STATIC_SHADOW_LAYER)
        }
        invalidate() {
            this.bakedRevision = -1
        }
        update(e, t, o, a) {
            let i = (0,
            g.staticShadowRevision)(t);
            return i === this.bakedRevision && o === this.bakedKey && this.staticTarget ? null : (this.bakedRevision = i,
            this.bakedKey = o,
            this.bake(e, t, a))
        }
        bake(e, t, {direction: o, bounds: a, quality: i}) {
            let r = performance.now();
            t.updateMatrixWorld();
            let n = [];
            t.traverse(e => {
                e.isMesh && e.castShadow && (0,
                g.isStaticShadowCaster)(e) && n.push(e)
            }
            );
            let s = new l.Box3
              , c = 0;
            t.traverseVisible(e => {
                e.isMesh && e.castShadow && (0,
                g.isStaticShadowCaster)(e) && (s.union(e.isInstancedMesh ? (V(e.geometry),
                e.boundingBox || e.computeBoundingBox(),
                U.copy(e.boundingBox).applyMatrix4(e.matrixWorld)) : U.copy(V(e.geometry)).applyMatrix4(e.matrixWorld)),
                c++)
            }
            );
            let u = e.capabilities.maxTextureSize
              , m = (0,
            d.staticShadowFrame)({
                direction: o,
                casters: s,
                bounds: a,
                quality: i,
                maxTextureSize: u
            }) ?? function(e) {
                let {y: t, z: o} = (0,
                d.shadowBasis)(e);
                return {
                    position: o.clone().multiplyScalar(2),
                    target: new l.Vector3,
                    up: t,
                    halfWidth: 1,
                    halfHeight: 1,
                    near: 1,
                    far: 4,
                    width: 1,
                    height: 1,
                    texel: 2,
                    bytes: d.SHADOW_BYTES_PER_TEXEL,
                    bias: 0,
                    normalBias: 0
                }
            }(o)
              , f = performance.now()
              , {sun: v} = this;
            this.staticTarget && this.staticTarget.width === m.width && this.staticTarget.height === m.height || (I(this.staticTarget),
            this.staticTarget = W(m.width, m.height, e.state.buffers.depth.getReversed())),
            v.shadow.map && v.shadow.map !== this.staticTarget && I(v.shadow.map),
            v.shadow.map = this.staticTarget,
            v.shadow.mapSize.set(m.width, m.height);
            let w = v.shadow.camera;
            Object.assign(w, {
                left: -m.halfWidth,
                right: m.halfWidth,
                top: m.halfHeight,
                bottom: -m.halfHeight,
                near: m.near,
                far: m.far
            }),
            w.up.copy(m.up),
            (0,
            h.prepareCamera)(e, w),
            w.updateProjectionMatrix(),
            v.shadow.bias = m.bias,
            v.shadow.normalBias = m.normalBias,
            v.position.copy(m.position),
            v.target.position.copy(m.target),
            v.updateMatrixWorld(),
            v.target.updateMatrixWorld(),
            v.shadow.needsUpdate = !0,
            e.shadowMap.needsUpdate = !0;
            let S = e.info.render.calls
              , y = e.autoClear
              , x = e.getClearAlpha();
            e.getClearColor(G);
            let M = (0,
            p.frameProfiler)(e);
            this.bakeScene.onAfterRender = () => e.shadowMap.render([v], t, this.bakeCamera),
            M.begin("shadow bake");
            try {
                e.autoClear = !1,
                e.render(this.bakeScene, this.bakeCamera)
            } finally {
                M.end(),
                e.autoClear = y,
                this.bakeScene.onAfterRender = () => {}
                ,
                e.setClearColor(G, x)
            }
            this.statics = n;
            let _ = {
                cpuMs: performance.now() - r,
                prepareMs: f - r,
                casters: c,
                draws: e.info.autoReset ? e.info.render.calls : e.info.render.calls - S,
                width: m.width,
                height: m.height,
                texel: m.texel,
                megabytes: m.bytes / 1048576
            };
            return this.bakes.push(_),
            this.bakes.length > 20 && this.bakes.shift(),
            _
        }
        setMovingSize(e, t) {
            let {mask: o} = this;
            (this.movingTarget?.width !== t || o.shadow.map !== this.movingTarget) && (o.shadow.map && o.shadow.map !== this.movingTarget && I(o.shadow.map),
            I(this.movingTarget),
            this.movingTarget = W(t, t, e.state.buffers.depth.getReversed()),
            o.shadow.map = this.movingTarget,
            o.shadow.mapSize.set(t, t))
        }
        beforeWorld(e, t) {
            let {mask: o} = this;
            for (let a of (t.focus ? H.fromArray(t.focus) : (e.getWorldPosition(H),
            e.getWorldDirection(j).setY(0),
            H.addScaledVector(j, t.ahead)),
            (0,
            d.snapShadowFocus)(o.target.position, H, t.basis, t.texel),
            o.position.copy(o.target.position).addScaledVector(t.basis.z, t.depth),
            o.updateMatrixWorld(),
            o.target.updateMatrixWorld(),
            this.statics))
                a.castShadow && (a.castShadow = !1,
                this.switched.push(a))
        }
        afterWorld() {
            for (let e of this.switched)
                e.castShadow = !0;
            this.switched.length = 0
        }
        watchShadowPass(e) {
            let t = e.shadowMap
              , o = t.render
              , {mask: a, tiles: i} = this
              , r = function(t, r, n) {
                let s = this.enabled && (this.autoUpdate || this.needsUpdate) && t.includes(a) && (a.shadow.autoUpdate || a.shadow.needsUpdate);
                o.call(this, t, r, n),
                s && i.draw(e, a)
            };
            return t.render = r,
            () => {
                t.render === r && (t.render = o)
            }
        }
        releaseMoving() {
            this.mask.shadow.map === this.movingTarget && (this.mask.shadow.map = null),
            I(this.movingTarget),
            this.movingTarget = null
        }
        dispose() {
            this.afterWorld(),
            this.sun.shadow.map === this.staticTarget && (this.sun.shadow.map = null),
            this.releaseMoving(),
            I(this.staticTarget),
            this.tiles.dispose(),
            this.staticTarget = null,
            this.statics = [],
            this.invalidate()
        }
    }
    var K = e.i(216339)
      , $ = e.i(251441)
      , X = e.i(998494)
      , q = e.i(536202)
      , Z = e.i(589109);
    let Y = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    // Real world translation, fixed orientation; far-plane depth keeps these behind the map.
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    ${h.FAR_PLANE_VERTEX}
  }
`
      , J = `
  uniform sampler2D cloudMap;
  uniform vec3 tint;
  uniform float opacity;
  uniform bool monochrome;
  varying vec2 vUv;
  ${Z.WORLD_DITHER_GLSL}
  void main() {
    // Stop before a mip can mix adjacent padded cells. No atlas neighbour reaches the visible cutout.
    vec2 dx = dFdx(vUv) * vec2(512.0, 256.0), dy = dFdy(vUv) * vec2(512.0, 256.0);
    float lod = clamp(log2(max(max(length(dx), length(dy)), 1.0)), 0.0, 2.0);
    vec4 cloud = textureLod(cloudMap, vUv, lod);
    vec3 color = cloud.rgb * tint;
    if (monochrome) color = vec3(dot(color, vec3(0.2126, 0.7152, 0.0722)));
    gl_FragColor = vec4(color, cloud.a * opacity);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    ${Z.SCREEN_DITHER_FRAGMENT}
  }
`;
    function Q({settings: e, quality: t, bounds: o}) {
        let r = (0,
        q.useOwnedSkyTexture)($.SKY_ATLAS.url)
          , n = (0,
        i.useMemo)( () => (function(e, t) {
            let o = (0,
            X.wallDistances)(e)
              , a = Math.max(16e3, 40 * Math.hypot(Math.max(o.negativeX, o.positiveX), Math.max(o.negativeZ, o.positiveZ), e.ceiling))
              , i = []
              , r = []
              , n = []
              , s = new l.Vector3(0,1,0)
              , d = new l.Vector3
              , c = [0, 1, 3, 4, 0, 3, 1, 2];
            for (let e = 0; e < $.FINITE_CLOUD_LIMIT[t]; e++) {
                let t = 2.399963229728653 * e + 1.1
                  , o = new l.Vector3(Math.cos(t) * a,a * (.5 + e % 3 * .09),Math.sin(t) * a)
                  , u = o.clone().normalize().negate()
                  , h = new l.Vector3().crossVectors(s, u).normalize()
                  , m = new l.Vector3().crossVectors(u, h).normalize()
                  , f = a * (.16 + e % 3 * .025)
                  , p = c[e]
                  , g = i.length / 3;
                for (let[e,t] of [[0, 0], [1, 0], [1, 1], [0, 1]])
                    d.copy(o).addScaledVector(h, (e - .5) * f).addScaledVector(m, (t - .5) * f),
                    i.push(d.x, d.y, d.z),
                    r.push((p % 4 * 128 + .5 + 127 * e) / 512, 1 - (128 * Math.floor(p / 4) + .5 + (1 - t) * 127) / 256);
                n.push(g, g + 1, g + 2, g, g + 2, g + 3)
            }
            let u = new l.BufferGeometry;
            return u.setAttribute("position", new l.Float32BufferAttribute(i,3)),
            u.setAttribute("uv", new l.Float32BufferAttribute(r,2)),
            u.setIndex(n),
            u
        }
        )(o, t), [o, t]);
        (0,
        i.useEffect)( () => () => n.dispose(), [n]);
        let s = (0,
        i.useMemo)( () => ({
            cloudMap: {
                value: r
            },
            tint: {
                value: new l.Color(e.color)
            },
            opacity: {
                value: .62 * e.opacity
            },
            monochrome: {
                value: e.monochrome ?? !1
            }
        }), [r, e.color, e.opacity, e.monochrome]);
        return (0,
        a.jsx)("mesh", {
            name: "Finite sky clouds",
            geometry: n,
            frustumCulled: !1,
            renderOrder: -900,
            children: (0,
            a.jsx)("shaderMaterial", {
                uniforms: s,
                vertexShader: Y,
                fragmentShader: J,
                transparent: !0,
                depthWrite: !1,
                toneMapped: !0
            })
        })
    }
    e.s(["FiniteSkyClouds", 0, Q], 837994);
    var ee = e.i(61607);
    function et(e, t) {
        e.toneMappingExposure = t
    }
    function eo({sky: e, ground: t, clouds: o, quality: i}) {
        return e.palette ? (0,
        a.jsx)(u.DaylightSky, {
            sky: e,
            palette: e.palette,
            ground: t,
            clouds: o,
            quality: i
        }) : (0,
        a.jsx)(ei, {
            sky: e
        })
    }
    function ea({environment: e}) {
        let {probeGround: t} = (0,
        K.useWorldLook)()
          , o = t ? e.ambient.groundColor : void 0;
        return (0,
        a.jsx)(r.Environment, {
            frames: 1,
            resolution: 256,
            environmentIntensity: e.environmentIntensity,
            children: (0,
            a.jsx)(eo, {
                sky: e.sky,
                ground: o
            })
        }, JSON.stringify([e.sky, o]))
    }
    function ei({sky: e}) {
        let t = (0,
        i.useRef)(null)
          , o = e.intensity ?? 1;
        return (0,
        i.useLayoutEffect)( () => {
            t.current && (t.current.name = "Sky",
            t.current.renderOrder = -1e3,
            t.current.frustumCulled = !1);
            let e = t.current?.material;
            if (!e?.uniforms || (e.uniforms.skyIntensity ??= {
                value: o
            },
            e.uniforms.skyIntensity.value = o,
            e.userData.skyPatched))
                return;
            let a = e.onBeforeCompile;
            e.onBeforeCompile = (t, o) => {
                a?.(t, o),
                t.uniforms.skyIntensity = e.uniforms.skyIntensity,
                t.vertexShader = t.vertexShader.replace("gl_Position.z = gl_Position.w;", h.FAR_PLANE_VERTEX),
                t.fragmentShader = t.fragmentShader.replace("void main() {", "uniform float skyIntensity;\nvoid main() {").replace("gl_FragColor = vec4( retColor, 1.0 );", "gl_FragColor = vec4( retColor * skyIntensity, 1.0 );")
            }
            ,
            e.userData.skyPatched = !0,
            e.needsUpdate = !0
        }
        , [o]),
        (0,
        a.jsx)(n.Sky, {
            ref: t,
            sunPosition: e.sunDirection,
            turbidity: e.turbidity,
            rayleigh: e.rayleigh,
            mieCoefficient: e.mieCoefficient,
            mieDirectionalG: e.mieDirectionalG
        })
    }
    function er({skyColor: e, groundColor: t, intensity: o}) {
        let r = (0,
        i.useRef)(null);
        return (0,
        i.useEffect)( () => {
            r.current?.layers.enableAll()
        }
        , []),
        (0,
        a.jsx)("hemisphereLight", {
            ref: r,
            args: [e, t, o]
        })
    }
    function en({direction: e, color: t, intensity: o, shadows: r, quality: n, focus: c, settings: u, bounds: f, movingShadows: g}) {
        let v = (0,
        i.useMemo)( () => new l.Vector3(e[0],Math.max(e[1], .26),e[2]), [e])
          , w = r && (g ?? (0,
        d.castsMovingShadows)(n))
          , {sun: S, mask: y} = function({enabled: e, moving: t=!0, quality: o, settings: a, direction: r, bounds: n, focus: c}) {
            let u = (0,
            s.useThree)(e => e.gl)
              , f = (0,
            s.useThree)(e => e.scene)
              , g = (0,
            s.useThree)(e => e.gl.capabilities.maxTextureSize)
              , v = (0,
            i.useMemo)( () => {
                let e = new l.DirectionalLight
                  , t = new l.DirectionalLight(0,0);
                for (let o of (e.name = "sun",
                t.name = "sun shadow mask",
                [e, t]))
                    o.layers.enableAll();
                return {
                    sun: e,
                    mask: t
                }
            }
            , [])
              , w = (0,
            i.useMemo)( () => new N(v.sun,v.mask), [v]);
            (0,
            i.useEffect)( () => () => {
                w.dispose(),
                v.sun.dispose(),
                v.mask.dispose()
            }
            , [w, v]);
            let S = (0,
            d.movingShadowSettings)(o, a, g, c?.radius)
              , y = (0,
            i.useMemo)( () => (0,
            d.shadowBasis)(r), [r])
              , x = `${o}|${g}|${r.toArray().join(",")}|${JSON.stringify(n ?? null)}`;
            (0,
            i.useLayoutEffect)( () => (f.add(v.sun.target, v.mask.target),
            () => {
                f.remove(v.sun.target, v.mask.target)
            }
            ), [f, v]),
            (0,
            i.useLayoutEffect)( () => {
                let {sun: e} = v;
                e.target.position.set(0, 0, 0),
                e.position.copy(y.z).multiplyScalar(100),
                e.updateMatrixWorld(),
                e.target.updateMatrixWorld(),
                w.invalidate()
            }
            , [v, w, y]),
            (0,
            i.useEffect)( () => {
                if (!e || !t)
                    return;
                let o = v.mask.shadow.camera;
                Object.assign(o, {
                    left: -S.extent,
                    right: S.extent,
                    top: S.extent,
                    bottom: -S.extent,
                    near: 1,
                    far: 2 * S.depth
                }),
                o.up.copy(y.up),
                (0,
                h.prepareCamera)(u, o),
                o.updateProjectionMatrix(),
                v.mask.shadow.bias = S.bias,
                v.mask.shadow.normalBias = S.normalBias,
                w.setMovingSize(u, S.size)
            }
            , [e, t, u, v, w, y, S.size, S.extent, S.depth, S.bias, S.normalBias]),
            (0,
            i.useEffect)( () => {
                e && !t && w.releaseMoving()
            }
            , [e, t, w]),
            (0,
            i.useEffect)( () => e ? () => w.dispose() : void 0, [e, w]),
            (0,
            m.useFrame)( () => {
                !e || !u.shadowMap.enabled || w.update(u, f, x, {
                    direction: r,
                    bounds: n,
                    quality: o
                }) && (0,
                p.perfModeRequested)() && (window.__sunShadows = {
                    bakes: w.bakes,
                    moving: t ? {
                        size: S.size,
                        extent: S.extent,
                        texel: S.texel
                    } : null
                })
            }
            , -40);
            let M = (0,
            i.useMemo)( () => ({
                basis: y,
                texel: S.texel,
                depth: S.depth,
                ahead: S.ahead,
                focus: c?.at
            }), [y, S.texel, S.depth, S.ahead, c?.at]);
            return (0,
            i.useEffect)( () => {
                if (!e || !t)
                    return;
                let o = f.onBeforeRender
                  , a = f.onAfterRender
                  , i = function(e, t, a, ...i) {
                    o.call(this, e, t, a, ...i),
                    e.shadowMap.enabled && e.shadowMap.autoUpdate && w.beforeWorld(a, M)
                }
                  , r = function(e, t, o, ...i) {
                    a.call(this, e, t, o, ...i),
                    w.afterWorld()
                };
                return f.onBeforeRender = i,
                f.onAfterRender = r,
                () => {
                    w.afterWorld(),
                    f.onBeforeRender === i && (f.onBeforeRender = o),
                    f.onAfterRender === r && (f.onAfterRender = a)
                }
            }
            , [e, t, f, w, M]),
            (0,
            i.useEffect)( () => e && t ? w.watchShadowPass(u) : void 0, [e, t, u, w]),
            v
        }({
            enabled: r,
            moving: w,
            quality: n,
            settings: u,
            direction: v,
            bounds: f,
            focus: c
        })
          , x = "low" === n ? 1 : 1.5;
        return (0,
        a.jsxs)(a.Fragment, {
            children: [(0,
            a.jsx)("primitive", {
                object: S,
                color: t,
                intensity: o,
                castShadow: r,
                "shadow-radius": x
            }), w ? (0,
            a.jsx)("primitive", {
                object: y,
                castShadow: !0,
                "shadow-radius": x
            }) : null]
        })
    }
    function es({lights: e, quality: t}) {
        return e && 0 !== e.length && "low" !== t ? (0,
        a.jsx)(a.Fragment, {
            children: e.map( (e, t) => (0,
            a.jsx)(el, {
                light: e
            }, t))
        }) : null
    }
    function el({light: e}) {
        let t = (0,
        i.useRef)(null);
        return (0,
        i.useEffect)( () => {
            t.current?.layers.enableAll()
        }
        , []),
        (0,
        a.jsx)("pointLight", {
            ref: t,
            position: e.position,
            color: e.color,
            intensity: e.intensity,
            distance: e.distance,
            decay: e.decay ?? 2,
            castShadow: !1
        })
    }
    e.s(["Atmosphere", 0, function({environment: e, quality: t, shadows: o, drawDistance: r, focus: n, bounds: l, movingShadows: d}) {
        let u = (0,
        s.useThree)(e => e.gl)
          , h = (0,
        s.useThree)(e => e.scene)
          , {sky: m, sun: f, ambient: p, fog: g} = e
          , v = (0,
        ee.useSkyParallax)();
        (0,
        i.useEffect)( () => {}
        , [u, h]),
        (0,
        i.useEffect)( () => {
            et(u, e.exposure)
        }
        , [u, e.exposure]);
        let w = g.densityScale / r;
        return (0,
        a.jsxs)(a.Fragment, {
            children: [(0,
            a.jsx)("fogExp2", {
                attach: "fog",
                args: [g.color, w]
            }), e.backgroundColor ? (0,
            a.jsx)("color", {
                attach: "background",
                args: [e.backgroundColor]
            }) : (0,
            a.jsx)(eo, {
                sky: m,
                clouds: (0,
                $.selectedSkyClouds)(e) ? e.clouds : void 0,
                quality: t
            }), (0,
            a.jsx)(ea, {
                environment: e
            }), (0,
            a.jsx)(er, {
                skyColor: p.skyColor,
                groundColor: p.groundColor,
                intensity: p.intensity
            }), (0,
            a.jsx)(en, {
                settings: f.shadows,
                direction: f.direction ?? m.sunDirection,
                color: f.color,
                intensity: f.intensity,
                shadows: o,
                quality: t,
                focus: n,
                bounds: l,
                movingShadows: d
            }), (0,
            a.jsx)(es, {
                lights: e.localLights,
                quality: t
            }), e.clouds && !(0,
            $.selectedSkyClouds)(e) && e.clouds.count > 0 && e.clouds.opacity > 0 ? (0,
            a.jsx)(c.SimClouds, {
                settings: e.clouds,
                quality: t
            }) : null, (0,
            $.selectedSkyClouds)(e) && v && l && $.FINITE_CLOUD_LIMIT[t] > 0 ? (0,
            a.jsx)(Q, {
                settings: e.clouds,
                quality: t,
                bounds: l
            }) : null]
        })
    }
    , "HemisphereFill", 0, er, "ReflectionProbe", 0, ea, "applyExposure", 0, et], 522932);
    var ed = e.i(378423)
      , ec = e.i(225228);
    e.s(["WorldGrade", 0, function({environment: e}) {
        let t = (0,
        s.useThree)(e => e.gl)
          , o = (0,
        K.useWorldLook)()
          , a = (0,
        ed.gradeLutUrl)(o, e)
          , {lut: r, failed: n} = (0,
        Z.loadGradeLut)(a, t)
          , l = (0,
        i.useContext)(ec.SceneAssetFailures)
          , d = e.grade?.vignette ?? Z.DEFAULT_VIGNETTE;
        return (0,
        i.useLayoutEffect)( () => (0,
        Z.setWorldGrade)(t, {
            toneMapping: o.toneMapping,
            lut: r,
            vignette: d
        }), [t, o.toneMapping, r, d]),
        (0,
        i.useLayoutEffect)( () => {
            n && l?.add(a)
        }
        , [n, l, a]),
        null
    }
    ], 838152);
    var eu = e.i(569638)
      , eh = e.i(244050)
      , em = e.i(167431);
    let ef = "#747e85"
      , ep = "#475662";
    e.s(["GridworksOutskirts", 0, function({bounds: e, fogColor: t, drawDistance: o}) {
        let r = (0,
        eh.useSceneEnvironmentPalette)()
          , n = (0,
        i.useRef)(null)
          , s = (0,
        i.useMemo)( () => (function(e) {
            let t = (0,
            X.wallDistances)(e)
              , o = (t.positiveX - t.negativeX) / 2
              , a = (t.positiveZ - t.negativeZ) / 2
              , i = (t.positiveX + t.negativeX) / 2
              , r = (t.positiveZ + t.negativeZ) / 2
              , n = [];
            for (let e = 0; e < 4; e++) {
                let t = e < 2
                  , s = e % 2 == 0 ? 1 : -1
                  , l = t ? r : i
                  , d = t ? i : r
                  , c = (e, i, r, d, c, u, h=ef) => {
                    n.push({
                        position: t ? [o + e, r + u / 2, a + s * (l + i)] : [o + s * (l + i), r + u / 2, a + e],
                        size: t ? [d, u, c] : [c, u, d],
                        color: h
                    })
                }
                ;
                c(0, 19, .025, 2 * d, 10, .035, ep),
                c(0, 239, .025, 10, 430, .035, ep);
                for (let e = 0; e < 18; e++)
                    c(0, 32 + 23 * e, .075, .25, 8, .015, "#b4b3a4");
                for (let t = 0; t < 3; t++) {
                    let o = 6 - t
                      , a = [58, 168, 325][t];
                    for (let i = 0; i < o; i++) {
                        let r = ((i + .5) / o * 2 - 1) * (d + 90 * t);
                        if (22 > Math.abs(r))
                            continue;
                        let n = a + (17 * i + 11 * e) % 29
                          , s = (7 * i + 13 * e) % 19
                          , l = t > 0 && (i + e) % 3 != 0
                          , u = l ? 20 + s : 30 + 12 * t
                          , h = l ? 24 + 8 * t : 32 + 14 * t
                          , m = l ? 30 + 24 * t + s : 10 + .4 * s;
                        c(r, n, 0, u, h, m, (i + e) % 3 == 0 ? ep : ef),
                        l || 0 !== t || (i + e) % 3 != 0 || c(r, n - h / 2 - .15, .7 * m, .7 * u, .2, .8, "#c96930")
                    }
                }
                let u = (e % 2 ? -1 : 1) * (d + 70);
                c(u, 290, 0, 38, 42, 130 + 9 * e, ep),
                c(u + 55, 315, 0, 28, 34, 88 + 7 * e)
            }
            return n
        }
        )(e), [e])
          , d = (0,
        i.useMemo)( () => {
            let a = (0,
            X.wallDistances)(e)
              , i = new l.MeshStandardMaterial({
                roughness: 1,
                metalness: 0
            });
            return i.onBeforeCompile = e => {
                e.uniforms.sectorBounds = {
                    value: new l.Vector4(-a.negativeX,a.positiveX,-a.negativeZ,a.positiveZ)
                },
                e.uniforms.outskirtsHaze = {
                    value: new l.Color(t)
                },
                e.uniforms.outskirtsFar = {
                    value: o
                },
                e.vertexShader = e.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vOutskirtsWorld;").replace("#include <project_vertex>", `#include <project_vertex>
          vOutskirtsWorld = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`),
                e.fragmentShader = e.fragmentShader.replace("#include <common>", `#include <common>
        varying vec3 vOutskirtsWorld;
        uniform vec4 sectorBounds;
        uniform vec3 outskirtsHaze;
        uniform float outskirtsFar;`).replace("#include <fog_fragment>", `#include <fog_fragment>
          float outward = max(max(sectorBounds.x - vOutskirtsWorld.x, vOutskirtsWorld.x - sectorBounds.y), max(sectorBounds.z - vOutskirtsWorld.z, vOutskirtsWorld.z - sectorBounds.w));
          float distanceHaze = smoothstep(outskirtsFar * 0.65, outskirtsFar * 0.94, distance(cameraPosition, vOutskirtsWorld));
          float haze = max(smoothstep(80.0, 480.0, outward), distanceHaze);
          ${em.OUTSKIRTS_TINT}
          gl_FragColor.rgb = mix(gl_FragColor.rgb, outskirtsTint, haze);`)
            }
            ,
            i.customProgramCacheKey = () => "gridworks-outskirts-v2",
            i
        }
        , [e, t, o]);
        return (0,
        i.useEffect)( () => () => d.dispose(), [d]),
        (0,
        i.useLayoutEffect)( () => {
            if (!n.current)
                return;
            let e = new l.Object3D
              , t = new l.Color;
            s.forEach( (o, a) => {
                e.position.set(...o.position),
                e.scale.set(...o.size),
                e.updateMatrix(),
                n.current.setMatrixAt(a, e.matrix),
                n.current.setColorAt(a, t.set((0,
                eu.environmentColor)(o.color, r)))
            }
            ),
            n.current.instanceMatrix.needsUpdate = !0,
            n.current.instanceColor && (n.current.instanceColor.needsUpdate = !0),
            n.current.computeBoundingSphere()
        }
        , [s, r]),
        (0,
        a.jsx)("instancedMesh", {
            ref: n,
            args: [void 0, void 0, s.length],
            material: d,
            name: "Gridworks industrial outskirts",
            raycast: () => {}
            ,
            children: (0,
            a.jsx)("boxGeometry", {
                args: [1, 1, 1]
            })
        })
    }
    ], 880400);
    var eg = e.i(223371)
      , ev = e.i(694835)
      , ew = e.i(202771)
      , eS = e.i(85058)
      , ey = e.i(268795);
    e.s(["GridworksTrack", 0, function({shadows: e, quality: t}) {
        let o = (0,
        eh.useSceneEnvironmentPalette)();
        (0,
        ew.useSurfaceDetail)(!!t);
        let r = (0,
        i.useMemo)( () => ({
            ...(0,
            eg.buildTrack)(o),
            roadMaterial: (0,
            eS.applyDepthLayer)((0,
            ev.gridMaterial)({
                mapping: "world-xz",
                style: (0,
                ey.environmentGridStyle)(o),
                finish: t ? {
                    kind: "asphalt",
                    quality: t
                } : void 0
            }), 1),
            paintMaterial: (0,
            eS.applyDepthLayer)(new l.MeshStandardMaterial({
                vertexColors: !0,
                roughness: 1,
                metalness: 0
            }), 2)
        }), [o, t]);
        return (0,
        i.useEffect)( () => () => {
            r.road.dispose(),
            r.paint.dispose(),
            r.roadMaterial.dispose(),
            r.paintMaterial.dispose()
        }
        , [r]),
        (0,
        a.jsxs)("group", {
            name: "Gridworks club circuit",
            children: [(0,
            a.jsx)("mesh", {
                geometry: r.road,
                material: r.roadMaterial,
                receiveShadow: e
            }), (0,
            a.jsx)("mesh", {
                geometry: r.paint,
                material: r.paintMaterial,
                receiveShadow: e
            })]
        })
    }
    ], 702404)
}
, 524001, e => {
    "use strict";
    var t = e.i(843476)
      , o = e.i(271645)
      , a = e.i(190072)
      , i = e.i(589109)
      , r = e.i(80630)
      , n = e.i(536202);
    let s = `
  varying vec3 vDirection;
  #ifdef SKY_CLOUDS
  varying vec2 vCloudUv;
  #endif
  void main() {
    vDirection = position;
    #ifdef SKY_CLOUDS
    // Three's sphere longitude runs in the opposite direction to the bake.
    // Interpolate its seam-duplicated UVs instead of doing atan/asin per pixel.
    vCloudUv = vec2(1.0 - uv.x, uv.y);
    #endif
    // An infinite sky: camera rotation applies, translation and far plane do not.
    gl_Position = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0);
    ${r.FAR_PLANE_VERTEX}
  }
`
      , l = `
  uniform vec3 zenith;
  uniform vec3 horizon;
  uniform vec3 sunDirection;
  uniform vec3 sunHalo;
  uniform vec3 sunDisc;
  uniform vec3 ground;
  #ifdef SKY_CLOUDS
  uniform sampler2D cloudPanorama;
  uniform vec3 cloudTint;
  uniform float cloudOpacity;
  uniform bool cloudMonochrome;
  varying vec2 vCloudUv;
  #endif
  varying vec3 vDirection;
  ${i.WORLD_DITHER_GLSL}
  void main() {
    vec3 direction = normalize(vDirection);
    float elevation = pow(max(direction.y, 0.0), 0.45);
    vec3 color = mix(horizon, zenith, elevation);
    float sun = max(dot(direction, sunDirection), 0.0);
    // A restrained warm halo and a small HDR sun disc, not full-screen bloom.
    color += sunHalo * pow(sun, 64.0) * 0.22;
    float edge = max(fwidth(sun), 0.00001);
    color += sunDisc * smoothstep(0.99985 - edge, 0.99985 + edge, sun);
    #ifdef SKY_CLOUDS
    vec2 cloudUv = vCloudUv;
    // Correct derivatives at the longitude branch cut: wrapping must not choose the coarsest mip.
    vec2 dx = dFdx(cloudUv), dy = dFdy(cloudUv);
    dx.x -= floor(dx.x + 0.5);
    dy.x -= floor(dy.x + 0.5);
    vec4 cloud = textureGrad(cloudPanorama, cloudUv, dx, dy);
    vec3 cloudColor = cloud.rgb * cloudTint;
    if (cloudMonochrome) cloudColor = vec3(dot(cloudColor, vec3(0.2126, 0.7152, 0.0722)));
    // The artwork already carries cool bases and white crowns; never shade it twice.
    color = mix(color, cloudColor, cloud.a * cloudOpacity);
    #endif
    #ifdef PROBE_GROUND
    // A reflection probe's lower half is the ground the world bounces light from.
    color = mix(color, ground, 1.0 - smoothstep(-0.06, 0.0, direction.y));
    #endif
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    ${i.SCREEN_DITHER_FRAGMENT}
  }
`;
    e.s(["DaylightSky", 0, function({sky: e, palette: i, ground: r, clouds: d, quality: c="low"}) {
        let u = (0,
        n.useSkyTexture)(d ? c : void 0)
          , h = d?.color
          , m = (0,
        o.useMemo)( () => ({
            zenith: {
                value: new a.Color(i.zenith)
            },
            horizon: {
                value: new a.Color(i.horizon)
            },
            sunDirection: {
                value: new a.Vector3(...e.sunDirection).normalize()
            },
            sunHalo: {
                value: i.sunTint ? new a.Color(i.sunTint).multiplyScalar(i.sunStrength ?? 1) : new a.Vector3(1,.83,.6)
            },
            sunDisc: {
                value: i.sunTint ? new a.Color(i.sunTint).multiplyScalar(5 * (i.sunStrength ?? 1)) : new a.Vector3(5,4.3,3.3)
            },
            ground: {
                value: new a.Color(r ?? i.horizon)
            },
            cloudPanorama: {
                value: u
            },
            cloudTint: {
                value: h ? new a.Color(h) : new a.Color
            },
            cloudOpacity: {
                value: d?.opacity ?? 0
            },
            cloudMonochrome: {
                value: d?.monochrome ?? !1
            }
        }), [i.zenith, i.horizon, i.sunTint, i.sunStrength, e.sunDirection, r, u, h, d?.opacity, d?.monochrome])
          , f = (0,
        o.useMemo)( () => ({
            ...r ? {
                PROBE_GROUND: ""
            } : {},
            ...u ? {
                SKY_CLOUDS: ""
            } : {}
        }), [r, u]);
        return (0,
        t.jsxs)("mesh", {
            name: "Daylight sky",
            frustumCulled: !1,
            renderOrder: u ? 5 : -1e3,
            children: [u ? (0,
            t.jsx)("sphereGeometry", {
                args: [1, 64, 32]
            }) : (0,
            t.jsx)("boxGeometry", {
                args: [2, 2, 2]
            }), (0,
            t.jsx)("shaderMaterial", {
                uniforms: m,
                defines: f,
                vertexShader: s,
                fragmentShader: l,
                side: a.BackSide,
                depthWrite: !1,
                toneMapped: !0
            }, `${r ? "probe" : "sky"}-${!!u}`)]
        })
    }
    ])
}
, 536202, 251441, 61607, e => {
    "use strict";
    var t = e.i(271645)
      , o = e.i(190072);
    let a = {
        low: {
            url: "/sim/textures/sky-clouds-low.png",
            width: 1024,
            height: 512,
            maxBytes: 153600
        },
        medium: {
            url: "/sim/textures/sky-clouds-detail.png",
            width: 2048,
            height: 1024,
            maxBytes: 512e3
        },
        high: {
            url: "/sim/textures/sky-clouds-detail.png",
            width: 2048,
            height: 1024,
            maxBytes: 819200
        }
    };
    function i(e) {
        return a["ultra" === e ? "high" : e]
    }
    let r = {
        url: "/sim/textures/sky-clouds-atlas.png",
        width: 512,
        height: 256
    }
      , n = {
        low: 0,
        medium: 4,
        high: 8,
        ultra: 8
    };
    function s(e) {
        return !e.backgroundColor && !!e.sky.palette && (e.sky.palette.sunStrength ?? 1) > .3 && !!e.clouds && e.clouds.count > 0 && e.clouds.opacity > 0
    }
    e.s(["FINITE_CLOUD_LIMIT", 0, n, "SKY_ATLAS", 0, r, "imageMipBytes", 0, function(e, t) {
        let o = 0;
        for (; ; ) {
            if (o += e * t * 4,
            1 === e && 1 === t)
                return o;
            e = Math.max(1, Math.floor(e / 2)),
            t = Math.max(1, Math.floor(t / 2))
        }
    }
    , "selectedSkyClouds", 0, s, "skyAsset", 0, i, "skyTextureUrls", 0, function(e, t, o=!0) {
        return s(e) ? [i(t).url, ...o && n[t] ? [r.url] : []] : e.clouds && e.clouds.count > 0 && e.clouds.opacity > 0 ? ["/sim/textures/cloud.png"] : []
    }
    ], 251441);
    var l = e.i(125002);
    let d = (0,
    t.createContext)(!0);
    e.s(["SkyParallaxContext", 0, d, "useSkyParallax", 0, () => (0,
    t.useContext)(d)], 61607);
    let c = new Map;
    function u(e, a=!1) {
        let i = e ? (0,
        l.loadTextures)([e])[0] : null;
        return i && i.colorSpace !== o.SRGBColorSpace && (i.colorSpace = o.SRGBColorSpace,
        i.wrapS = a ? o.RepeatWrapping : o.ClampToEdgeWrapping,
        i.wrapT = o.ClampToEdgeWrapping,
        i.needsUpdate = !0),
        (0,
        t.useEffect)( () => i && e ? (c.set(i, (c.get(i) ?? 0) + 1),
        () => {
            c.set(i, Math.max(0, (c.get(i) ?? 1) - 1)),
            queueMicrotask( () => {
                0 === c.get(i) && (c.delete(i),
                (0,
                l.releaseLoadedTexture)(e, i))
            }
            )
        }
        ) : void 0, [i, e]),
        i
    }
    e.s(["useOwnedSkyTexture", 0, u, "useSkyTexture", 0, function(e) {
        return u(e ? i(e).url : void 0, !0)
    }
    ], 536202)
}
, 730624, 55428, 348029, e => {
    "use strict";
    var t = e.i(931067)
      , o = e.i(271645)
      , a = e.i(190072)
      , i = e.i(131497)
      , r = Object.defineProperty
      , n = (e, t, o) => {
        let a;
        return (a = "symbol" != typeof t ? t + "" : t) in e ? r(e, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[a] = o,
        o
    }
    ;
    let s = ( () => {
        let e = {
            uniforms: {
                turbidity: {
                    value: 2
                },
                rayleigh: {
                    value: 1
                },
                mieCoefficient: {
                    value: .005
                },
                mieDirectionalG: {
                    value: .8
                },
                sunPosition: {
                    value: new a.Vector3
                },
                up: {
                    value: new a.Vector3(0,1,0)
                }
            },
            vertexShader: `
      uniform vec3 sunPosition;
      uniform float rayleigh;
      uniform float turbidity;
      uniform float mieCoefficient;
      uniform vec3 up;

      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      // constants for atmospheric scattering
      const float e = 2.71828182845904523536028747135266249775724709369995957;
      const float pi = 3.141592653589793238462643383279502884197169;

      // wavelength of used primaries, according to preetham
      const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
      // this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
      // (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
      const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

      // mie stuff
      // K coefficient for the primaries
      const float v = 4.0;
      const vec3 K = vec3( 0.686, 0.678, 0.666 );
      // MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
      const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

      // earth shadow hack
      // cutoffAngle = pi / 1.95;
      const float cutoffAngle = 1.6110731556870734;
      const float steepness = 1.5;
      const float EE = 1000.0;

      float sunIntensity( float zenithAngleCos ) {
        zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
        return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
      }

      vec3 totalMie( float T ) {
        float c = ( 0.2 * T ) * 10E-18;
        return 0.434 * c * MieConst;
      }

      void main() {

        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        vWorldPosition = worldPosition.xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        gl_Position.z = gl_Position.w; // set z to camera.far

        vSunDirection = normalize( sunPosition );

        vSunE = sunIntensity( dot( vSunDirection, up ) );

        vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

        float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

      // extinction (absorbtion + out scattering)
      // rayleigh coefficients
        vBetaR = totalRayleigh * rayleighCoefficient;

      // mie coefficients
        vBetaM = totalMie( turbidity ) * mieCoefficient;

      }
    `,
            fragmentShader: `
      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      uniform float mieDirectionalG;
      uniform vec3 up;

      const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

      // constants for atmospheric scattering
      const float pi = 3.141592653589793238462643383279502884197169;

      const float n = 1.0003; // refractive index of air
      const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

      // optical length at zenith for molecules
      const float rayleighZenithLength = 8.4E3;
      const float mieZenithLength = 1.25E3;
      // 66 arc seconds -> degrees, and the cosine of that
      const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

      // 3.0 / ( 16.0 * pi )
      const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
      // 1.0 / ( 4.0 * pi )
      const float ONE_OVER_FOURPI = 0.07957747154594767;

      float rayleighPhase( float cosTheta ) {
        return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
      }

      float hgPhase( float cosTheta, float g ) {
        float g2 = pow( g, 2.0 );
        float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
        return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
      }

      void main() {

        vec3 direction = normalize( vWorldPosition - cameraPos );

      // optical length
      // cutoff angle at 90 to avoid singularity in next formula.
        float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
        float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
        float sR = rayleighZenithLength * inverse;
        float sM = mieZenithLength * inverse;

      // combined extinction factor
        vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

      // in scattering
        float cosTheta = dot( direction, vSunDirection );

        float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
        vec3 betaRTheta = vBetaR * rPhase;

        float mPhase = hgPhase( cosTheta, mieDirectionalG );
        vec3 betaMTheta = vBetaM * mPhase;

        vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
        Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

      // nightsky
        float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
        float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
        vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
        vec3 L0 = vec3( 0.1 ) * Fex;

      // composition + solar disc
        float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
        L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

        vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

        vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

        gl_FragColor = vec4( retColor, 1.0 );

      #include <tonemapping_fragment>
      #include <${i.version >= 154 ? "colorspace_fragment" : "encodings_fragment"}>

      }
    `
        }
          , t = new a.ShaderMaterial({
            name: "SkyShader",
            fragmentShader: e.fragmentShader,
            vertexShader: e.vertexShader,
            uniforms: a.UniformsUtils.clone(e.uniforms),
            side: a.BackSide,
            depthWrite: !1
        });
        class o extends a.Mesh {
            constructor() {
                super(new a.BoxGeometry(1,1,1), t)
            }
        }
        return n(o, "SkyShader", e),
        n(o, "material", t),
        o
    }
    )();
    function l(e, t, o=new a.Vector3) {
        let i = Math.PI * (e - .5)
          , r = 2 * Math.PI * (t - .5);
        return o.x = Math.cos(r),
        o.y = Math.sin(i),
        o.z = Math.sin(r),
        o
    }
    let d = o.forwardRef( ({inclination: e=.6, azimuth: i=.1, distance: r=1e3, mieCoefficient: n=.005, mieDirectionalG: d=.8, rayleigh: c=.5, turbidity: u=10, sunPosition: h=l(e, i), ...m}, f) => {
        let p = o.useMemo( () => new a.Vector3().setScalar(r), [r])
          , [g] = o.useState( () => new s);
        return o.createElement("primitive", (0,
        t.default)({
            object: g,
            ref: f,
            "material-uniforms-mieCoefficient-value": n,
            "material-uniforms-mieDirectionalG-value": d,
            "material-uniforms-rayleigh-value": c,
            "material-uniforms-sunPosition-value": h,
            "material-uniforms-turbidity-value": u,
            scale: p
        }, m))
    }
    );
    e.s(["Sky", 0, d], 730624);
    var c = e.i(998494);
    let u = {
        low: 110 / 1024,
        medium: 176 / 2048,
        high: 250 / 4096,
        ultra: 250 / 4096
    }
      , h = {
        low: 0x2000000,
        medium: 0x4000000,
        high: 0x8000000,
        ultra: 0x8000000
    }
      , m = -2 / 65535
      , f = (e, t) => Math.max(1, Math.ceil(e / t - 1e-6));
    function p(e) {
        let t = e.clone().normalize()
          , o = Math.abs(t.y) > .999 ? new a.Vector3(0,0,1) : new a.Vector3(0,1,0)
          , i = new a.Vector3().crossVectors(o, t).normalize()
          , r = new a.Vector3().crossVectors(t, i).normalize();
        return {
            x: i,
            y: r,
            z: t,
            up: o
        }
    }
    function g(e) {
        let {min: t, max: o} = e;
        return [0, 1, 2, 3, 4, 5, 6, 7].map(e => new a.Vector3(1 & e ? o.x : t.x,2 & e ? o.y : t.y,4 & e ? o.z : t.z))
    }
    e.s(["SHADOW_BYTES_PER_TEXEL", 0, 3, "castsMovingShadows", 0, function(e) {
        return "medium" !== e
    }
    , "movingShadowSettings", 0, function(e, t, o=4096, a=0) {
        let i = Math.max(t?.extent?.[e] ?? ("low" === e ? 55 : 88), a)
          , r = Math.min(f(2 * i, u[e]), o)
          , n = 2 * i / r
          , s = Math.max(t?.depth ?? 250, 2 * i);
        return {
            size: r,
            extent: i,
            depth: s,
            texel: n,
            ahead: i / 2,
            normalBias: Math.min(.015, .1 * n),
            bias: m
        }
    }
    , "shadowBasis", 0, p, "snapShadowFocus", 0, function(e, t, o, a) {
        return e.copy(o.x).multiplyScalar(Math.round(t.dot(o.x) / a) * a).addScaledVector(o.y, Math.round(t.dot(o.y) / a) * a).addScaledVector(o.z, t.dot(o.z))
    }
    , "staticShadowFrame", 0, function({direction: e, casters: t, bounds: o, quality: i, maxTextureSize: r=4096}) {
        if (t.isEmpty())
            return null;
        let {x: n, y: s, z: l} = p(e)
          , d = Math.min(0, t.min.y)
          , v = Math.min(t.max.y, o?.ceiling ?? 1 / 0)
          , w = o && (0,
        c.wallDistances)(o)
          , S = w ? new a.Box3(new a.Vector3(-w.negativeX - 2,d,-w.negativeZ - 2),new a.Vector3(w.positiveX + 2,v,w.positiveZ + 2)) : new a.Box3(new a.Vector3(t.min.x,d,t.min.z),new a.Vector3(t.max.x,v,t.max.z))
          , y = (t.max.y - d) * Math.hypot(l.x, l.z) / Math.max(l.y, .001)
          , x = t.clone().intersect(S.clone().expandByVector(new a.Vector3(y,1 / 0,y)));
        if (x.isEmpty() || S.isEmpty())
            return null;
        let M = g(S)
          , _ = g(x)
          , b = function(e) {
            let t, o, a, i, r, n = (t = [...e].sort( (e, t) => e[0] - t[0] || e[1] - t[1]),
            o = (e, t, o) => (t[0] - e[0]) * (o[1] - e[1]) - (t[1] - e[1]) * (o[0] - e[0]),
            i = (a = e => {
                let t = [];
                for (let a of e) {
                    for (; t.length >= 2 && 1e-9 >= o(t[t.length - 2], t[t.length - 1], a); )
                        t.pop();
                    t.push(a)
                }
                return t
            }
            )(t),
            r = a([...t].reverse()),
            [...i.slice(0, -1), ...r.slice(0, -1)]), s = [1, 0], l = 1 / 0;
            for (let e = 0; e < n.length; e++) {
                let t = n[e]
                  , o = n[(e + 1) % n.length]
                  , a = Math.hypot(o[0] - t[0], o[1] - t[1]);
                if (a < 1e-9)
                    continue;
                let i = [(o[0] - t[0]) / a, (o[1] - t[1]) / a]
                  , r = 1 / 0
                  , d = -1 / 0
                  , c = 1 / 0
                  , u = -1 / 0;
                for (let e of n) {
                    let t = e[0] * i[0] + e[1] * i[1]
                      , o = e[1] * i[0] - e[0] * i[1];
                    r = Math.min(r, t),
                    d = Math.max(d, t),
                    c = Math.min(c, o),
                    u = Math.max(u, o)
                }
                let h = (d - r) * (u - c);
                h < l - 1e-6 && (l = h,
                s = i)
            }
            return s
        }(M.map(e => [e.dot(n), e.dot(s)]))
          , C = n.clone().multiplyScalar(b[0]).addScaledVector(s, b[1])
          , T = new a.Vector3().crossVectors(l, C)
          , k = (e, t) => {
            let o = 1 / 0
              , a = -1 / 0;
            for (let i of e) {
                let e = i.dot(t);
                o = Math.min(o, e),
                a = Math.max(a, e)
            }
            return [o, a]
        }
          , [E,D] = k(M, C)
          , [R,A] = k(M, T)
          , [L,O] = k(_, C)
          , [z,B] = k(_, T)
          , F = Math.max(E, L)
          , P = Math.min(D, O)
          , W = Math.max(R, z)
          , I = Math.min(A, B);
        if (P <= F || I <= W)
            return null;
        let V = k(_, l)[1]
          , U = k(M, l)[0]
          , H = P - F
          , j = I - W
          , G = h[i] / 3
          , N = Math.max(u[i], Math.sqrt(H * j / G), H / r, j / r);
        for (; f(H, N) * f(j, N) > G; )
            N *= 1.001;
        let K = Math.min(f(H, N), r)
          , $ = Math.min(f(j, N), r)
          , X = C.clone().multiplyScalar((F + P) / 2).addScaledVector(T, (W + I) / 2)
          , q = V + 2;
        return {
            position: X.clone().addScaledVector(l, q),
            target: X.clone().addScaledVector(l, U),
            up: T,
            halfWidth: K * N / 2,
            halfHeight: $ * N / 2,
            near: 1,
            far: q - U + 2,
            width: K,
            height: $,
            texel: N,
            bytes: K * $ * 3,
            bias: m,
            normalBias: Math.min(.015, .1 * N)
        }
    }
    ], 55428);
    var v = e.i(843476);
    let w = {
        low: 3,
        medium: 5,
        high: 8,
        ultra: 8
    };
    function S(e) {
        let t = 43758.5453 * Math.sin(127.1 * e + 311.7);
        return t - Math.floor(t)
    }
    var y = e.i(125002)
      , x = e.i(589109)
      , M = e.i(80630);
    let _ = `
  attribute float cloudOpacity;
  varying vec2 vUv;
  varying float vOpacity;
  void main() {
    vUv = uv;
    vOpacity = cloudOpacity;
    // Fixed world directions preserve roll. Translation is intentionally
    // ignored: these distant clouds stay beyond the playable ceiling.
    vec3 direction = mat3(viewMatrix) * position;
    gl_Position = projectionMatrix * vec4(direction, 1.0);
    ${M.FAR_PLANE_VERTEX}
  }
`
      , b = `
  uniform sampler2D cloudMap;
  uniform vec3 tint;
  uniform bool monochrome;
  varying vec2 vUv;
  varying float vOpacity;
  ${x.WORLD_DITHER_GLSL}
  void main() {
    vec4 texel = texture2D(cloudMap, vUv);
    float alpha = texel.a * vOpacity;
    if (alpha < 0.015) discard;
    // Cool bases and sunlit ivory crowns without per-puff lights/shadows.
    vec3 shade = mix(vec3(0.64, 0.74, 0.86), vec3(1.35, 1.32, 1.25),
                     smoothstep(0.12, 0.85, vUv.y));
    vec3 color = texel.rgb * tint * shade;
    if (monochrome) color = vec3(dot(color, vec3(0.2126, 0.7152, 0.0722)));
    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    ${x.SCREEN_DITHER_FRAGMENT}
  }
`;
    e.s(["SimClouds", 0, function({settings: e, quality: t}) {
        let[i] = (0,
        y.loadTextures)([y.CLOUD_TEXTURE_URL])
          , r = (0,
        o.useMemo)( () => (function(e, t) {
            let o = []
              , i = []
              , r = []
              , n = []
              , s = Math.max(0, Math.min(Math.floor(e.count), w[t]))
              , l = new a.Vector3(0,1,0)
              , d = new a.Vector3
              , c = [[-.4, -.08, .78, .42], [.38, -.06, .8, .44], [.05, -.1, 1, .42], [-.22, .1, .64, .65], [.18, .09, .58, .56]];
            for (let t = 0; t < s; t++) {
                let s = 2.399963229728653 * t + .4
                  , u = e.spread * (.85 + .3 * S(t + 7))
                  , h = new a.Vector3(Math.cos(s) * u,e.height * (.7 + .8 * S(t + 19)),Math.sin(s) * u)
                  , m = h.clone().normalize().negate()
                  , f = new a.Vector3().crossVectors(l, m).normalize()
                  , p = new a.Vector3().crossVectors(m, f).normalize()
                  , g = e.spread * (.18 + .16 * S(t + 31));
                for (let a = 0; a < c.length; a++) {
                    let[s,l,u,m] = c[a]
                      , v = .85 + .3 * S(13 * t + a + 43)
                      , w = o.length / 3;
                    for (let[a,n] of [[0, 0], [1, 0], [1, 1], [0, 1]])
                        d.copy(h).addScaledVector(f, (s + (a - .5) * u * v) * g).addScaledVector(p, (l + (n - .5) * m * v) * g),
                        o.push(d.x, d.y, d.z),
                        i.push(a, n),
                        r.push(e.opacity * (.86 + .14 * S(t + 59)));
                    n.push(w, w + 1, w + 2, w, w + 2, w + 3)
                }
            }
            let u = new a.BufferGeometry;
            return u.setAttribute("position", new a.Float32BufferAttribute(o,3)),
            u.setAttribute("uv", new a.Float32BufferAttribute(i,2)),
            u.setAttribute("cloudOpacity", new a.Float32BufferAttribute(r,1)),
            u.setIndex(n),
            u
        }
        )(e, t), [e, t])
          , n = (0,
        o.useMemo)( () => ({
            cloudMap: {
                value: i
            },
            tint: {
                value: new a.Color(e.color)
            },
            monochrome: {
                value: e.monochrome ?? !1
            }
        }), [i, e.color, e.monochrome]);
        return (0,
        o.useEffect)( () => {
            i.colorSpace = a.SRGBColorSpace,
            i.needsUpdate = !0
        }
        , [i]),
        (0,
        o.useEffect)( () => () => r.dispose(), [r]),
        (0,
        v.jsx)("mesh", {
            name: "Distant clouds",
            geometry: r,
            frustumCulled: !1,
            renderOrder: -900,
            children: (0,
            v.jsx)("shaderMaterial", {
                uniforms: n,
                vertexShader: _,
                fragmentShader: b,
                transparent: !0,
                depthWrite: !1,
                toneMapped: !0
            })
        })
    }
    ], 348029)
}
]);
