(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 664311, e => {
    "use strict";
    function t(e) {
        return {
            count: e.length,
            p50: i(e, .5),
            p95: i(e, .95),
            p99: i(e, .99),
            min: e.length ? Math.min(...e) : null,
            max: e.length ? Math.max(...e) : null
        }
    }
    function i(e, t) {
        if (0 === e.length)
            return null;
        let i = [...e].sort( (e, t) => e - t);
        return i[Math.min(i.length - 1, Math.floor(i.length * t))]
    }
    class r {
        renderer;
        enabled;
        gpuTiming;
        ext;
        context;
        pending;
        active;
        frameValidity;
        frameStart;
        lastFrame;
        frame;
        groupFrame;
        since;
        frames;
        cpu;
        gpu;
        gpuTotals;
        acceptedQueries;
        rejectedDisjointQueries;
        discardedBeforeWindow;
        disjointEvents;
        rejectedIncompleteQueries;
        incompleteFrames;
        frameQueryCount;
        frameGpu;
        calls;
        triangles;
        width;
        height;
        pixelRatio;
        constructor(e) {
            this.renderer = e,
            this.enabled = !1,
            this.gpuTiming = !0,
            this.context = null,
            this.pending = [],
            this.active = null,
            this.frameValidity = null,
            this.frameStart = 0,
            this.lastFrame = 0,
            this.frame = 0,
            this.groupFrame = -1,
            this.since = 0,
            this.frames = [],
            this.cpu = [],
            this.gpu = new Map,
            this.gpuTotals = [],
            this.acceptedQueries = 0,
            this.rejectedDisjointQueries = 0,
            this.discardedBeforeWindow = 0,
            this.disjointEvents = 0,
            this.rejectedIncompleteQueries = 0,
            this.incompleteFrames = 0,
            this.frameQueryCount = 0,
            this.frameGpu = new Map,
            this.calls = 0,
            this.triangles = 0,
            this.width = 0,
            this.height = 0,
            this.pixelRatio = 1
        }
        setEnabled(e, t=!0) {
            this.enabled = e,
            this.gpuTiming = t,
            e || (this.renderer.info.autoReset = !0)
        }
        beginFrame() {
            if (!this.enabled)
                return;
            let e = performance.now();
            this.lastFrame > 0 && this.push(this.frames, e - this.lastFrame),
            this.lastFrame = e,
            this.frameStart = e,
            this.frame++,
            this.frameValidity = null,
            this.renderer.info.autoReset = !1,
            this.renderer.info.reset(),
            this.collect()
        }
        begin(e) {
            if (!this.enabled || !this.gpuTiming || this.active)
                return;
            let t = this.frameValidity ??= {
                complete: !0
            };
            if (!t.complete)
                return;
            if (this.pending.length > 32)
                return void this.rejectFrame(t);
            let i = this.extension()
              , r = i && this.context?.createQuery();
            if (i) {
                if (!r)
                    return void this.rejectFrame(t);
                this.active = {
                    frame: this.frame,
                    validity: t,
                    label: e,
                    query: r
                },
                this.context.beginQuery(i.TIME_ELAPSED_EXT, r)
            }
        }
        end() {
            this.active && this.ext && this.context && (this.context.endQuery(this.ext.TIME_ELAPSED_EXT),
            this.pending.push(this.active),
            this.active = null)
        }
        relabel(e, t) {
            this.active && this.active.label !== e && t(this.active.label) && (this.end(),
            this.begin(e))
        }
        endFrame() {
            this.enabled && (this.push(this.cpu, performance.now() - this.frameStart),
            this.calls = this.renderer.info.render.calls,
            this.triangles = this.renderer.info.render.triangles,
            this.width = this.renderer.domElement.width,
            this.height = this.renderer.domElement.height,
            this.pixelRatio = this.renderer.getPixelRatio())
        }
        snapshot() {
            let e = {}
              , r = {}
              , n = null;
            for (let[s,a] of this.gpu) {
                let o = i(a, .5);
                null !== o && (e[s] = o,
                r[s] = t(a),
                n = (n ?? 0) + o)
            }
            return {
                frameP50: i(this.frames, .5),
                frameP95: i(this.frames, .95),
                frameP99: i(this.frames, .99),
                longFrames: this.frames.filter(e => e > 34).length,
                stalls: this.frames.filter(e => e > 100).length,
                cpuP50: i(this.cpu, .5),
                cpuP95: i(this.cpu, .95),
                gpu: e,
                gpuTotal: n,
                gpuStats: r,
                gpuFrameTotal: t(this.gpuTotals),
                gpuQueries: {
                    accepted: this.acceptedQueries,
                    rejectedDisjoint: this.rejectedDisjointQueries,
                    discardedBeforeWindow: this.discardedBeforeWindow,
                    disjointEvents: this.disjointEvents,
                    rejectedIncomplete: this.rejectedIncompleteQueries,
                    incompleteFrames: this.incompleteFrames
                },
                frameSamples: this.frames.length,
                cpuSamples: this.cpu.length,
                calls: this.calls,
                triangles: this.triangles,
                width: this.width,
                height: this.height,
                pixelRatio: this.pixelRatio
            }
        }
        reset() {
            this.frames.length = 0,
            this.cpu.length = 0,
            this.gpu.clear(),
            this.gpuTotals.length = 0,
            this.acceptedQueries = this.rejectedDisjointQueries = this.disjointEvents = 0,
            this.rejectedIncompleteQueries = this.incompleteFrames = 0,
            this.discardedBeforeWindow = this.frameQueryCount,
            this.frameQueryCount = 0,
            this.frameGpu.clear(),
            this.lastFrame = 0,
            this.since = this.frame + 1
        }
        dispose() {
            let e = this.context;
            if (e)
                for (let {query: t} of this.pending)
                    e.deleteQuery(t);
            this.pending = [],
            this.frameGpu.clear(),
            this.frameQueryCount = 0,
            this.frameValidity = null,
            this.renderer.info.autoReset = !0
        }
        extension() {
            if (void 0 !== this.ext)
                return this.ext;
            let e = this.renderer.getContext();
            return !("u" < typeof WebGL2RenderingContext) && e instanceof WebGL2RenderingContext ? (this.context = e,
            this.ext = e.getExtension("EXT_disjoint_timer_query_webgl2"),
            this.ext) : (this.ext = null,
            null)
        }
        collect() {
            let e = this.ext
              , t = this.context;
            if (e && t && 0 !== this.pending.length) {
                if (t.getParameter(e.GPU_DISJOINT_EXT)) {
                    let e = this.frameQueryCount;
                    for (let {query: i, frame: r} of this.pending)
                        r >= this.since ? e++ : this.discardedBeforeWindow++,
                        t.deleteQuery(i);
                    e && this.disjointEvents++,
                    this.rejectedDisjointQueries += e,
                    this.pending = [],
                    this.frameGpu.clear(),
                    this.frameQueryCount = 0;
                    return
                }
                for (; this.pending.length > 0 && t.getQueryParameter(this.pending[0].query, t.QUERY_RESULT_AVAILABLE); ) {
                    let {frame: e, validity: i, label: r, query: n} = this.pending.shift();
                    if (e < this.since) {
                        this.discardedBeforeWindow++,
                        t.deleteQuery(n);
                        continue
                    }
                    if (!i.complete) {
                        this.rejectedIncompleteQueries++,
                        t.deleteQuery(n);
                        continue
                    }
                    e !== this.groupFrame && (this.flushFrame(),
                    this.groupFrame = e);
                    let s = t.getQueryParameter(n, t.QUERY_RESULT) / 1e6;
                    this.frameQueryCount++,
                    this.frameGpu.set(r, (this.frameGpu.get(r) ?? 0) + s),
                    t.deleteQuery(n)
                }
                (0 === this.pending.length || this.pending[0].frame !== this.groupFrame) && this.flushFrame()
            }
        }
        flushFrame() {
            let e = 0;
            for (let[t,i] of this.frameGpu) {
                e += i;
                let r = this.gpu.get(t);
                r || this.gpu.set(t, r = []),
                this.push(r, i)
            }
            this.frameGpu.size && this.push(this.gpuTotals, e),
            this.acceptedQueries += this.frameQueryCount,
            this.frameQueryCount = 0,
            this.frameGpu.clear()
        }
        rejectFrame(e) {
            e.complete = !1,
            this.frame >= this.since && this.incompleteFrames++
        }
        push(e, t) {
            e.push(t);
            e.length > 960 && e.splice(0, e.length - 960)
        }
    }
    let n = new WeakMap;
    e.s(["frameProfiler", 0, function(e) {
        let t = n.get(e);
        return t || n.set(e, t = new r(e)),
        t
    }
    , "gpuTimingRequested", 0, function() {
        return "gpu" === new URLSearchParams(window.location.search).get("perf")
    }
    , "perfModeRequested", 0, function() {
        return new URLSearchParams(window.location.search).has("perf")
    }
    , "watchFrames", 0, function(e, t=!0) {
        e.setEnabled(!0, t);
        let i = {
            snapshot: () => e.snapshot(),
            reset: () => e.reset()
        };
        return window.__simFrame = i,
        () => {
            e.setEnabled(!1),
            window.__simFrame === i && delete window.__simFrame
        }
    }
    ])
}
, 170341, 406873, e => {
    "use strict";
    var t = e.i(271645)
      , i = e.i(94800)
      , r = e.i(848546)
      , n = e.i(807375)
      , s = e.i(720996)
      , a = e.i(179883)
      , o = e.i(744666)
      , l = e.i(818227)
      , u = e.i(106258)
      , h = e.i(664311)
      , d = e.i(70460)
      , m = e.i(190072)
      , c = e.i(133968)
      , p = e.i(80630);
    let f = new WeakMap
      , g = {
        drawing: !1,
        start: null
    }
      , v = `#include <common>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( 0.0 );
}`
      , x = new WeakMap;
    class w extends m.Mesh {
        armed = !1;
        constructor() {
            super(new m.BufferGeometry, new m.MeshBasicMaterial({
                colorWrite: !1,
                depthWrite: !1,
                depthTest: !1
            })),
            this.name = "Depth prepass",
            this.frustumCulled = !1,
            this.renderOrder = -1e9
        }
        onBeforeRender(e, t, i) {
            if (this.armed && !t.overrideMaterial) {
                this.armed = !1,
                g.start?.(),
                g.drawing = !0;
                try {
                    for (let r of e.renderLists.get(t, 0).opaque)
                        !function(e, t, i, r) {
                            let {object: n, geometry: s} = r
                              , a = r.material
                              , o = r.group;
                            if (n instanceof w || !n.layers.test(i.layers) || !0 !== n.isMesh || !0 === n.isSkinnedMesh || a instanceof m.ShaderMaterial || a.transparent || 0 !== a.alphaTest || a.alphaHash || a.alphaToCoverage || !a.colorWrite || !a.depthWrite || !a.depthTest || a.stencilWrite || a.polygonOffset || a.userData.noDepthPrepass)
                                return;
                            let l = function(e) {
                                let t, i = x.get(e);
                                if (null === i)
                                    return null;
                                if (i && i.version === e.version)
                                    return i.material;
                                i?.material.dispose();
                                let r = e.userData;
                                e.userData = {};
                                try {
                                    t = e.clone()
                                } finally {
                                    e.userData = r
                                }
                                let n = e.defines;
                                t.defines = n ? {
                                    ...n
                                } : void 0,
                                t.colorWrite = !1,
                                t.name = `${e.name} (depth prepass)`;
                                let s = e.onBeforeCompile;
                                t.onBeforeCompile = (t, i) => {
                                    if (s.call(e, t, i),
                                    /\bdiscard\b|gl_FragDepth/.test(t.fragmentShader)) {
                                        x.set(e, null),
                                        t.fragmentShader = "void main() { discard; }";
                                        return
                                    }
                                    t.fragmentShader = v
                                }
                                ;
                                let a = e.customProgramCacheKey();
                                return t.customProgramCacheKey = () => `${a}|depth-prepass`,
                                x.set(e, {
                                    material: t,
                                    version: e.version
                                }),
                                t
                            }(a);
                            l && s && (n.onBeforeRender(e, t, i, s, l, o),
                            n.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, n.matrixWorld),
                            n.normalMatrix.getNormalMatrix(n.modelViewMatrix),
                            a.onBeforeRender(e, t, i, s, n, o),
                            e.renderBufferDirect(i, t, s, l, n, o))
                        }(e, t, i, r)
                } finally {
                    g.drawing = !1
                }
            }
        }
    }
    let S = new WeakMap;
    function y(e, t, i) {
        let r = S.get(t);
        if (!((f.get(e) ?? (0,
        c.integratedGpu)()) && (0,
        p.reversedDepth)(e))) {
            r?.parent && r.removeFromParent(),
            i();
            return
        }
        r || S.set(t, r = new w),
        r.parent !== t && t.add(r),
        r.armed = !0;
        try {
            i()
        } finally {
            r.armed = !1
        }
    }
    e.s(["depthPrepassHooks", 0, g, "setDepthPrepass", 0, function(e, t) {
        null === t ? f.delete(e) : f.set(e, t)
    }
    , "withDepthPrepass", 0, y], 406873);
    var E = e.i(879774);
    class b {
        target = null;
        copy = (0,
        E.copyMaterial)();
        fullscreen = new E.FullscreenPass;
        begin(e) {
            var t;
            let i, r, n = e.getContextAttributes().antialias ? Math.min(4, e.capabilities.maxSamples) : 0;
            this.target?.samples !== n && (this.disposeTarget(),
            this.target = (t = n,
            (i = new m.DepthTexture(1,1,m.FloatType)).format = m.DepthStencilFormat,
            (r = new m.WebGLRenderTarget(1,1,{
                format: m.RGBAFormat,
                type: m.UnsignedByteType,
                minFilter: m.LinearFilter,
                magFilter: m.LinearFilter,
                depthBuffer: !0,
                stencilBuffer: !0,
                depthTexture: i,
                samples: t
            })).resolveDepthBuffer = !1,
            r.resolveStencilBuffer = !1,
            r.isXRRenderTarget = !0,
            r.texture.name = "ScreenTarget",
            r));
            let s = e.domElement;
            this.target.setSize(Math.max(1, s.width), Math.max(1, s.height)),
            this.target.texture.colorSpace = e.outputColorSpace,
            e.setRenderTarget(this.target)
        }
        end(e) {
            this.target && (this.copy.uniforms.tSource.value = this.target.texture,
            this.fullscreen.draw(e, this.copy, null))
        }
        disposeTarget() {
            this.target?.depthTexture?.dispose(),
            this.target?.dispose(),
            this.target = null
        }
        dispose() {
            this.disposeTarget(),
            this.copy.dispose(),
            this.fullscreen.dispose()
        }
    }
    var M = e.i(916189)
      , D = e.i(589109);
    let T = new WeakMap
      , L = {
        camera: null,
        lens: 0,
        at: -1 / 0,
        canvas: null
    }
      , F = new Set
      , _ = new WeakSet;
    e.s(["SimFrameRenderer", 0, function({quality: e, post: m, effects: c=d.NO_POST_EFFECTS, profile: f=!1, report: g=!1}) {
        let v = (0,
        r.useThree)(e => e.gl)
          , x = (0,
        u.useSimStore)(t => t.settings.graphics.postProcessing ?? "low" !== e)
          , w = m ?? x
          , S = (0,
        t.useMemo)( () => new d.SimPostFx, [])
          , P = (0,
        t.useMemo)( () => new b, [])
          , A = (0,
        t.useRef)({
            id: 0,
            at: -1 / 0,
            heldAt: -1 / 0,
            scale: 1
        })
          , R = (0,
        t.useRef)(!1)
          , G = (0,
        t.useRef)(!1)
          , C = (0,
        t.useMemo)( () => (0,
        h.frameProfiler)(v), [v])
          , B = (0,
        t.useMemo)( () => (0,
        E.floatColorTargets)(v), [v]);
        return (0,
        t.useEffect)( () => () => S.dispose(), [S]),
        (0,
        t.useEffect)( () => () => P.dispose(), [P]),
        (0,
        t.useEffect)( () => () => {
            v.domElement.style.transform = ""
        }
        , [v]),
        (0,
        t.useEffect)( () => {
            let e = (0,
            o.combatPresentationAllowed)(u.useSimStore.getState())
              , t = () => {
                let t = (0,
                o.combatPresentationAllowed)(u.useSimStore.getState())
                  , i = !t || !e;
                e = t,
                i && (1 !== A.current.scale && (v.domElement.style.transform = ""),
                Object.assign(A.current, {
                    id: n.combatHud.koMark.id,
                    at: -1 / 0,
                    heldAt: -1 / 0,
                    scale: 1
                }))
            }
              , i = u.useSimStore.subscribe(t);
            return "u" > typeof document && document.addEventListener("visibilitychange", t),
            t(),
            () => {
                i(),
                "u" > typeof document && document.removeEventListener("visibilitychange", t)
            }
        }
        , [v]),
        (0,
        t.useEffect)( () => f || (0,
        h.perfModeRequested)() ? (0,
        h.watchFrames)(C, f || (0,
        h.gpuTimingRequested)()) : void 0, [C, f]),
        (0,
        i.useFrame)( () => C.beginFrame(), -1e3),
        (0,
        i.useFrame)( ({scene: e, camera: t}, i) => {
            let r = T.get(v)
              , h = r?.reduce( (e, t) => !e || (t.priority ?? 0) >= (e.priority ?? 0) ? t : e, void 0)
              , m = performance.now()
              , f = n.combatHud.koMark
              , x = u.useSimStore.getState()
              , E = n.combatHud.active && (0,
            o.combatPresentationAllowed)(x) && !(0,
            s.motionReduced)() ? x.settings.camera.shake : 0
              , b = f.id !== A.current.id;
            (b || E <= 0) && (A.current.id = f.id,
            A.current.at = E > 0 ? f.at : -1 / 0,
            A.current.heldAt = E > 0 && m >= f.at && m - f.at < 130 ? m : -1 / 0);
            let N = (0,
            a.koPunch)(m - A.current.at, E);
            if (N !== A.current.scale && (v.domElement.style.transform = 1 === N ? "" : `scale(${N})`,
            A.current.scale = N),
            h?.ready && !h.ready())
                return;
            if (!b && N > 1 && m - A.current.heldAt < 25)
                return void C.endFrame();
            let O = h?.camera?.() ?? t;
            (0,
            p.prepareCamera)(v, O);
            let I = h?.lens?.() ?? 0
              , U = B && (w || h?.forcePost === !0 || I > 0);
            !U && R.current && S.dispose(),
            R.current = U;
            let z = (0,
            M.applyUnderwater)(e, O, !U);
            U && S.setTint(z ? M.UNDERWATER_TINT : null);
            let W = !U && (0,
            p.reversedDepth)(v);
            !W && G.current && P.dispose(),
            G.current = W;
            let j = (0,
            D.worldGrade)(v);
            if (v.toneMapping = D.THREE_TONE_MAPPING[j.toneMapping],
            U) {
                let t = S.configure(v, w ? c : d.NO_POST_EFFECTS)
                  , r = v.domElement;
                S.setSize(r.width, r.height),
                v.setRenderTarget(S.target),
                v.clear(),
                C.begin("world");
                let n = h?.beforeWorld?.();
                try {
                    y(v, e, () => v.render(e, O))
                } finally {
                    n?.()
                }
                C.end(),
                t.msaa && C.begin("msaa copy"),
                S.afterWorld(v),
                t.msaa && C.end(),
                h?.overlay && (C.begin("overlay"),
                h.overlay(v, e),
                C.end()),
                S.updateMotion(O, i, h?.motionBlur?.() ?? !1),
                t.bloom && (C.begin("bloom"),
                S.renderBloom(v),
                C.end()),
                C.begin("post"),
                S.setLens(I, O),
                S.blit(v, w ? j : (0,
                D.toneCurveOnly)(j)),
                C.end()
            } else {
                W ? P.begin(v) : v.setRenderTarget(null),
                C.begin("world");
                let t = h?.beforeWorld?.();
                try {
                    y(v, e, () => v.render(e, O))
                } finally {
                    t?.()
                }
                C.end(),
                h?.overlay && (C.begin("overlay"),
                h.overlay(v, e),
                C.end()),
                z && (0,
                M.drawUnderwaterVeil)(v, e, O),
                W && (C.begin("screen copy"),
                P.end(v),
                C.end())
            }
            for (let e of (h?.afterBlit?.(v),
            C.endFrame(),
            g && l.flightFrames.canvas(v.domElement.width, v.domElement.height, v.getPixelRatio()),
            L.camera = O,
            L.lens = U && I > 0 && !0 === O.isPerspectiveCamera ? Math.min(1, I) : 0,
            L.at = performance.now(),
            L.canvas = v.domElement,
            F))
                try {
                    e()
                } catch (t) {
                    if (_.has(e))
                        continue;
                    _.add(e),
                    console.error("A drawn-frame listener failed", t)
                }
        }
        , 1),
        null
    }
    , "drawnView", 0, L, "onFrameDrawn", 0, function(e) {
        return F.add(e),
        () => {
            F.delete(e)
        }
    }
    , "recentDrawnView", 0, function(e=performance.now()) {
        return L.camera && e - L.at < 250 ? L : null
    }
    , "useFrameHooks", 0, function(e) {
        let i = (0,
        r.useThree)(e => e.gl);
        (0,
        t.useEffect)( () => {
            let t = T.get(i);
            return t || T.set(i, t = []),
            t.push(e),
            () => {
                let t = T.get(i)
                  , r = t?.lastIndexOf(e) ?? -1;
                t && r >= 0 && t.splice(r, 1)
            }
        }
        , [i, e])
    }
    ], 170341)
}
, 70460, e => {
    "use strict";
    var t = e.i(190072)
      , i = e.i(879774)
      , r = e.i(80630);
    class n {
        reprojection = new t.Matrix4;
        depth = 0;
        shutter = 0;
        previousViewProjection = new t.Matrix4;
        previousProjection = new t.Matrix4;
        previousPosition = new t.Vector3;
        position = new t.Vector3;
        primed = !1;
        update(e, t, i) {
            if (this.shutter = 0,
            !i || t <= 0 || t > .1) {
                this.primed = !1;
                return
            }
            this.position.setFromMatrixPosition(e.matrixWorld),
            this.primed && this.previousProjection.equals(e.projectionMatrix) && 64 > this.position.distanceToSquared(this.previousPosition) && (this.reprojection.copy(this.previousViewProjection).multiply(e.matrixWorld).multiply(e.projectionMatrixInverse),
            this.shutter = Math.min(.5, 1 / (240 * t)));
            let r = e.projectionMatrix.elements;
            this.depth = (-20 * r[10] + r[14]) / 20,
            this.previousViewProjection.copy(e.projectionMatrix).multiply(e.matrixWorldInverse),
            this.previousProjection.copy(e.projectionMatrix),
            this.previousPosition.copy(this.position),
            this.primed = !0
        }
    }
    var s = e.i(378423)
      , a = e.i(589109);
    let o = `
uniform sampler2D tDiffuse;
uniform vec2 resolution;
uniform float vignette;
uniform mat4 motionReprojection;
uniform float motionDepth;
uniform float motionShutter;
uniform sampler2D tBloom;
uniform float bloomStrength;
uniform vec3 tint;
// FPV lens: 0 draws the flat render as is.
uniform float lensStrength;
// Edge restore where the lens magnifies the render (0 is off).
uniform float lensSharpen;
uniform vec2 lensAspect;
uniform float lensCorner;
uniform float lensTanCorner;
// Three's own tone curves, as materials use them when they draw to the screen.
#include <tonemapping_pars_fragment>
${a.WORLD_DISPLAY_GLSL}
varying vec2 vUv;

// Four search steps and a longer guess (the tutorial's low step preset): on
// display luma FXAA finds edges in shade too, and the shorter search keeps the
// pass at its old cost.
#define EDGE_STEP_COUNT 4
#define EDGE_GUESS 12.0
const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT](1.0, 1.5, 2.0, 4.0);

// FXAA's high quality thresholds, meant for gamma-encoded luma. The 0.0312 and
// 0.063 used on linear luma before skipped edges in shade; on display luma they
// would soften texture detail.
float contrastThreshold = 0.0625;
float relativeThreshold = 0.125;
float subpixelBlending = 1.0;

// Level 0 explicitly: the target has no mipmaps, and the edge search loops.
float SampleLuminance(sampler2D tex, vec2 uv) {
  return worldDisplayLuma(textureLod(tex, uv, 0.0).rgb);
}

float SampleLuminance(sampler2D tex, vec2 texSize, vec2 uv, float uOffset, float vOffset) {
  return SampleLuminance(tex, uv + texSize * vec2(uOffset, vOffset));
}

struct LuminanceData {
  float m, n, e, s, w;
  float ne, nw, se, sw;
  float highest, lowest, contrast;
};

// The centre and its four neighbours: all the skip test reads, so most
// pixels (no edge) stop after five taps, as in FXAA 3.11.
LuminanceData SampleLuminanceCross(sampler2D tex, vec2 texSize, vec2 uv, vec3 centre) {
  LuminanceData l;
  l.m = worldDisplayLuma(centre);
  l.n = SampleLuminance(tex, texSize, uv, 0.0, 1.0);
  l.e = SampleLuminance(tex, texSize, uv, 1.0, 0.0);
  l.s = SampleLuminance(tex, texSize, uv, 0.0, -1.0);
  l.w = SampleLuminance(tex, texSize, uv, -1.0, 0.0);
  l.highest = max(max(max(max(l.n, l.e), l.s), l.w), l.m);
  l.lowest = min(min(min(min(l.n, l.e), l.s), l.w), l.m);
  l.contrast = l.highest - l.lowest;
  return l;
}

// The diagonals, for pixels on an edge.
void SampleLuminanceCorners(inout LuminanceData l, sampler2D tex, vec2 texSize, vec2 uv) {
  l.ne = SampleLuminance(tex, texSize, uv, 1.0, 1.0);
  l.nw = SampleLuminance(tex, texSize, uv, -1.0, 1.0);
  l.se = SampleLuminance(tex, texSize, uv, 1.0, -1.0);
  l.sw = SampleLuminance(tex, texSize, uv, -1.0, -1.0);
}

bool ShouldSkipPixel(LuminanceData l) {
  float threshold = max(contrastThreshold, relativeThreshold * l.highest);
  return l.contrast < threshold;
}

float DeterminePixelBlendFactor(LuminanceData l) {
  float f = 2.0 * (l.n + l.e + l.s + l.w);
  f += l.ne + l.nw + l.se + l.sw;
  f *= 1.0 / 12.0;
  f = abs(f - l.m);
  f = clamp(f / l.contrast, 0.0, 1.0);
  float blendFactor = smoothstep(0.0, 1.0, f);
  return blendFactor * blendFactor * subpixelBlending;
}

struct EdgeData {
  bool isHorizontal;
  float pixelStep;
  float oppositeLuminance;
  float gradient;
};

EdgeData DetermineEdge(LuminanceData l, vec2 texSize) {
  EdgeData e;
  float horizontal =
    abs(l.n + l.s - 2.0 * l.m) * 2.0 +
    abs(l.ne + l.se - 2.0 * l.e) +
    abs(l.nw + l.sw - 2.0 * l.w);
  float vertical =
    abs(l.e + l.w - 2.0 * l.m) * 2.0 +
    abs(l.ne + l.nw - 2.0 * l.n) +
    abs(l.se + l.sw - 2.0 * l.s);
  e.isHorizontal = horizontal >= vertical;
  float pLuminance = e.isHorizontal ? l.n : l.e;
  float nLuminance = e.isHorizontal ? l.s : l.w;
  float pGradient = abs(pLuminance - l.m);
  float nGradient = abs(nLuminance - l.m);
  e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
  if (pGradient < nGradient) {
    e.pixelStep = -e.pixelStep;
    e.oppositeLuminance = nLuminance;
    e.gradient = nGradient;
  } else {
    e.oppositeLuminance = pLuminance;
    e.gradient = pGradient;
  }
  return e;
}

float DetermineEdgeBlendFactor(sampler2D tex, LuminanceData l, EdgeData e, vec2 texSize, vec2 uv) {
  vec2 uvEdge = uv;
  vec2 edgeStep;
  if (e.isHorizontal) {
    uvEdge.y += e.pixelStep * 0.5;
    edgeStep = vec2(texSize.x, 0.0);
  } else {
    uvEdge.x += e.pixelStep * 0.5;
    edgeStep = vec2(0.0, texSize.y);
  }
  float edgeLuminance = (l.m + e.oppositeLuminance) * 0.5;
  float gradientThreshold = e.gradient * 0.25;
  vec2 puv = uvEdge + edgeStep;
  float pLuminanceDelta = SampleLuminance(tex, puv) - edgeLuminance;
  bool pAtEnd = abs(pLuminanceDelta) >= gradientThreshold;
  for (int i = 0; i < EDGE_STEP_COUNT && !pAtEnd; i++) {
    puv += edgeStep * edgeSteps[i];
    pLuminanceDelta = SampleLuminance(tex, puv) - edgeLuminance;
    pAtEnd = abs(pLuminanceDelta) >= gradientThreshold;
  }
  if (!pAtEnd) puv += edgeStep * EDGE_GUESS;

  vec2 nuv = uvEdge - edgeStep;
  float nLuminanceDelta = SampleLuminance(tex, nuv) - edgeLuminance;
  bool nAtEnd = abs(nLuminanceDelta) >= gradientThreshold;
  for (int i = 0; i < EDGE_STEP_COUNT && !nAtEnd; i++) {
    nuv -= edgeStep * edgeSteps[i];
    nLuminanceDelta = SampleLuminance(tex, nuv) - edgeLuminance;
    nAtEnd = abs(nLuminanceDelta) >= gradientThreshold;
  }
  if (!nAtEnd) nuv -= edgeStep * EDGE_GUESS;

  float pDistance, nDistance;
  if (e.isHorizontal) {
    pDistance = puv.x - uv.x;
    nDistance = uv.x - nuv.x;
  } else {
    pDistance = puv.y - uv.y;
    nDistance = uv.y - nuv.y;
  }
  float shortestDistance;
  bool deltaSign;
  if (pDistance <= nDistance) {
    shortestDistance = pDistance;
    deltaSign = pLuminanceDelta >= 0.0;
  } else {
    shortestDistance = nDistance;
    deltaSign = nLuminanceDelta >= 0.0;
  }
  if (deltaSign == (l.m - edgeLuminance >= 0.0)) return 0.0;
  return 0.5 - shortestDistance / (pDistance + nDistance);
}

/**
 * Where a screen pixel reads the flat (rectilinear) render through an FPV
 * fisheye. An equidistant lens puts view angle linear in radius; the render's
 * corners stay where they are, so coverage is unchanged and the middle grows
 * by up to tan(corner) / corner. Radii are in half-heights of the screen.
 */
vec2 lensUv(vec2 uv) {
  if (lensStrength <= 0.0) return uv;
  vec2 p = (uv - 0.5) * 2.0 * lensAspect;
  float rho = length(p);
  if (rho < 1e-5) return uv;
  float theta = atan(lensTanCorner) * rho / lensCorner;
  float fisheye = lensCorner * tan(theta) / lensTanCorner;
  float source = mix(rho, fisheye, lensStrength);
  return p * (source / rho) / (2.0 * lensAspect) + 0.5;
}

vec3 ApplyFxaa(sampler2D tex, vec2 texSize, vec2 uv) {
  vec3 centre = texture2D(tex, uv).rgb;
  LuminanceData l = SampleLuminanceCross(tex, texSize, uv, centre);
  if (ShouldSkipPixel(l)) return centre;
  SampleLuminanceCorners(l, tex, texSize, uv);
  float pixelBlend = DeterminePixelBlendFactor(l);
  EdgeData e = DetermineEdge(l, texSize);
  float edgeBlend = DetermineEdgeBlendFactor(tex, l, e, texSize, uv);
  float finalBlend = max(pixelBlend, edgeBlend);
  if (e.isHorizontal) uv.y += e.pixelStep * finalBlend;
  else uv.x += e.pixelStep * finalBlend;
  return texture2D(tex, uv).rgb;
}

void main() {
  // Everything that reads the render does so through the lens; the grade and
  // vignette below stay in screen space.
  vec2 uv = lensUv(vUv);
#if SIM_FXAA
  vec3 color = ApplyFxaa(tDiffuse, resolution, uv);
#else
  // Multisampled edges are already resolved; FXAA would only soften them.
  vec3 color = texture2D(tDiffuse, uv).rgb;
#endif
  // Where the lens magnifies, each render pixel spreads over more than one on
  // screen and edges blur. Give back some edge contrast, never past the
  // neighbourhood's own range (no halos), and nothing where it does not magnify.
  if (lensSharpen > 0.0 && lensStrength > 0.0) {
    float magnify = length(fwidth(vUv)) / max(length(fwidth(uv)), 1e-9);
    float amount = lensSharpen * clamp((magnify - 1.0) * 2.5, 0.0, 1.0);
    if (amount > 0.001) {
      vec3 n = texture2D(tDiffuse, uv + vec2(0.0, resolution.y)).rgb;
      vec3 s = texture2D(tDiffuse, uv - vec2(0.0, resolution.y)).rgb;
      vec3 e = texture2D(tDiffuse, uv + vec2(resolution.x, 0.0)).rgb;
      vec3 w = texture2D(tDiffuse, uv - vec2(resolution.x, 0.0)).rgb;
      vec3 low = min(min(min(n, s), min(e, w)), color);
      vec3 high = max(max(max(n, s), max(e, w)), color);
      color = clamp(color + (color - (n + s + e + w) * 0.25) * amount, low, high);
    }
  }
  // Four extra colour taps inside the existing pass, only for moving pixels.
  // No velocity/depth buffer, history texture, or additional scene render.
  if (motionShutter > 0.0) {
    vec4 previous = motionReprojection * vec4(uv * 2.0 - 1.0, motionDepth, 1.0);
    if (previous.w > 0.0) {
      vec2 velocity = (uv - (previous.xy / previous.w * 0.5 + 0.5)) * motionShutter;
      vec2 pixels = velocity / resolution;
      float span = length(pixels);
      velocity *= min(1.0, 10.0 / max(span, 0.001));
      if (span > 0.5) {
        vec2 lo = resolution * 0.5;
        vec2 hi = vec2(1.0) - lo;
        vec3 blurred = color * 0.4;
        blurred += texture2D(tDiffuse, clamp(uv - velocity * 0.5, lo, hi)).rgb * 0.15;
        blurred += texture2D(tDiffuse, clamp(uv - velocity * 0.25, lo, hi)).rgb * 0.15;
        blurred += texture2D(tDiffuse, clamp(uv + velocity * 0.25, lo, hi)).rgb * 0.15;
        blurred += texture2D(tDiffuse, clamp(uv + velocity * 0.5, lo, hi)).rgb * 0.15;
        color = mix(color, blurred, smoothstep(0.5, 2.0, span));
      }
    }
  }
#if SIM_BLOOM
  color += texture2D(tBloom, uv).rgb * bloomStrength;
#endif
  // The underwater view's tint (white in the air).
  color *= tint;
  color = worldToneMap(color);

  vec2 q = vUv - 0.5;
  float r = dot(q, q);
  color *= 1.0 - vignette * smoothstep(0.18, 0.92, r);

  gl_FragColor = vec4(worldDither(worldGrade(color), gl_FragCoord.xy), 1.0);
}
`
      , l = {
        bloom: !1,
        msaa: !1
    }
      , u = new URLSearchParams(window.location.search).has("sharpen") ? Number(new URLSearchParams(window.location.search).get("sharpen")) || 0 : .7;
    function h(e, i) {
        let r = new t.WebGLRenderTarget(1,1,{
            format: t.RGBAFormat,
            type: t.HalfFloatType,
            minFilter: t.LinearFilter,
            magFilter: t.LinearFilter,
            depthBuffer: !0,
            stencilBuffer: !0,
            samples: e
        });
        return i && (r.depthTexture = new t.DepthTexture(1,1,i ? t.FloatType : t.UnsignedInt248Type),
        r.depthTexture.format = t.DepthStencilFormat),
        r.resolveDepthBuffer = !1,
        r.resolveStencilBuffer = !1,
        r.texture.name = "SimPostFx",
        r
    }
    class d {
        motion = new n;
        world = h(0, !1);
        composite = null;
        output = this.world;
        bloom = null;
        effects = l;
        floatDepth = !1;
        copy = (0,
        i.copyMaterial)();
        fullscreen = new i.FullscreenPass;
        material;
        width = 1;
        height = 1;
        constructor() {
            this.material = new t.ShaderMaterial({
                uniforms: {
                    tDiffuse: {
                        value: this.world.texture
                    },
                    resolution: {
                        value: new t.Vector2(1,1)
                    },
                    vignette: {
                        value: a.DEFAULT_VIGNETTE
                    },
                    ...(0,
                    a.gradeUniforms)(),
                    motionReprojection: {
                        value: this.motion.reprojection
                    },
                    motionDepth: {
                        value: 0
                    },
                    motionShutter: {
                        value: 0
                    },
                    tBloom: {
                        value: null
                    },
                    bloomStrength: {
                        value: .07
                    },
                    tint: {
                        value: new t.Vector3(1,1,1)
                    },
                    toneMappingExposure: {
                        value: 1
                    },
                    lensStrength: {
                        value: 0
                    },
                    lensSharpen: {
                        value: u
                    },
                    lensAspect: {
                        value: new t.Vector2(1,1)
                    },
                    lensCorner: {
                        value: Math.SQRT2
                    },
                    lensTanCorner: {
                        value: 1
                    }
                },
                defines: {
                    SIM_FXAA: 1,
                    SIM_BLOOM: 0,
                    SIM_TONE_MAPPING: a.TONE_MAPPING_DEFINE[s.WORLD_LOOK.toneMapping]
                },
                vertexShader: i.QUAD_VERTEX,
                fragmentShader: o,
                depthTest: !1,
                depthWrite: !1,
                toneMapped: !1
            })
        }
        get target() {
            return this.world
        }
        configure(e, n) {
            var s, a, o;
            let l = n.msaa && (s = e).extensions.has("EXT_color_buffer_float") ? Math.min(4, s.capabilities.maxSamples) : 0
              , u = {
                bloom: n.bloom,
                msaa: l > 0
            }
              , d = this.effects
              , m = (0,
            r.reversedDepth)(e);
            return u.bloom === d.bloom && u.msaa === d.msaa && m === this.floatDepth ? d : (((u.msaa !== d.msaa || m !== this.floatDepth) && (this.world.dispose(),
            this.world.depthTexture?.dispose(),
            this.world = h(l, m),
            this.world.setSize(this.width, this.height)),
            u.msaa && !this.composite) ? this.composite = (a = this.width,
            o = this.height,
            new t.WebGLRenderTarget(a,o,{
                format: t.RGBAFormat,
                type: t.HalfFloatType,
                minFilter: t.LinearFilter,
                magFilter: t.LinearFilter,
                depthBuffer: !0
            })) : !u.msaa && this.composite && (this.composite.dispose(),
            this.composite = null),
            u.bloom && !this.bloom ? (this.bloom = new i.BloomPass,
            this.bloom.setSize(this.width, this.height),
            this.material.uniforms.tBloom.value = this.bloom.texture) : !u.bloom && this.bloom && (this.bloom.dispose(),
            this.bloom = null,
            this.material.uniforms.tBloom.value = null),
            (u.msaa !== d.msaa || u.bloom !== d.bloom) && (this.material.defines.SIM_FXAA = +!u.msaa,
            this.material.defines.SIM_BLOOM = +!!u.bloom,
            this.material.needsUpdate = !0),
            this.output = this.world,
            this.effects = u,
            this.floatDepth = m,
            u)
        }
        setSize(e, t) {
            let i = Math.max(1, Math.floor(e))
              , r = Math.max(1, Math.floor(t));
            (i !== this.width || r !== this.height) && (this.width = i,
            this.height = r,
            this.world.setSize(i, r),
            this.composite?.setSize(i, r),
            this.bloom?.setSize(i, r),
            this.material.uniforms.resolution.value.set(1 / i, 1 / r))
        }
        afterWorld(e) {
            this.output = this.world,
            this.composite && (this.copy.uniforms.tSource.value = this.world.texture,
            this.fullscreen.draw(e, this.copy, this.composite),
            this.output = this.composite),
            e.setRenderTarget(this.output)
        }
        renderBloom(e) {
            this.bloom?.render(e, this.fullscreen, this.output.texture, this.width, this.height)
        }
        updateMotion(e, t, i) {
            this.motion.update(e, t, i),
            this.material.uniforms.motionDepth.value = this.motion.depth,
            this.material.uniforms.motionShutter.value = this.motion.shutter
        }
        setLens(e, t) {
            let i = e > 0 && !0 === t.isPerspectiveCamera;
            if (this.material.uniforms.lensStrength.value = i ? Math.min(1, e) : 0,
            !i)
                return;
            let r = t.aspect
              , n = Math.sqrt(r * r + 1);
            this.material.uniforms.lensAspect.value.set(r, 1),
            this.material.uniforms.lensCorner.value = n,
            this.material.uniforms.lensTanCorner.value = Math.tan(t.fov * Math.PI / 360) * n
        }
        setTint(e) {
            let t = this.material.uniforms.tint.value;
            e ? t.set(e.r, e.g, e.b) : t.set(1, 1, 1)
        }
        blit(e, i) {
            let r = this.material.uniforms;
            r.tDiffuse.value = this.output.texture,
            r.toneMappingExposure.value = e.toneMappingExposure,
            r.vignette.value = i.vignette,
            (0,
            a.setGradeUniforms)(r, i.lut);
            let n = a.TONE_MAPPING_DEFINE[i.toneMapping];
            this.material.defines.SIM_TONE_MAPPING !== n && (this.material.defines.SIM_TONE_MAPPING = n,
            this.material.needsUpdate = !0);
            let s = e.toneMapping;
            e.toneMapping = t.NoToneMapping,
            this.fullscreen.draw(e, this.material, null, !0),
            e.toneMapping = s
        }
        dispose() {
            this.world.dispose(),
            this.world.depthTexture?.dispose(),
            this.composite?.dispose(),
            this.bloom?.dispose(),
            this.copy.dispose(),
            this.fullscreen.dispose(),
            this.material.dispose()
        }
    }
    e.s(["NO_POST_EFFECTS", 0, l, "SimPostFx", 0, d], 70460)
}
, 589109, e => {
    "use strict";
    var t = e.i(190072)
      , i = e.i(378423);
    let r = {
        aces: t.ACESFilmicToneMapping,
        neutral: t.NeutralToneMapping,
        agx: t.AgXToneMapping
    }
      , n = `
vec3 worldDither(vec3 encoded, vec2 pixel) {
  float a = fract(52.9829189 * fract(dot(pixel, vec2(0.06711056, 0.00583715))));
  return encoded + (a - 0.5) / 255.0;
}
`
      , s = `
#ifdef TONE_MAPPING
  gl_FragColor.rgb = worldDither(gl_FragColor.rgb, gl_FragCoord.xy);
#endif
`
      , a = `
uniform sampler3D gradeLut;
uniform float gradeLutScale;
uniform float gradeLutOffset;

vec3 worldToneMap(vec3 color) {
#if SIM_TONE_MAPPING == 1
  return NeutralToneMapping(color);
#elif SIM_TONE_MAPPING == 2
  return AgXToneMapping(color);
#else
  return ACESFilmicToneMapping(color);
#endif
}

// Display-referred luma for FXAA, cheap enough for every tap of its edge
// search: exposed luminance, gamma encoded. On Neutral, the shipped curve, that
// is the screen value but for the toe below 0.08 and the shoulder above 0.8.
// Following the toe too made far more deep-shade pixels edges, and the pass cost
// more than before #186 on an integrated GPU.
float worldDisplayLuma(vec3 hdr) {
  return sqrt(clamp(dot(hdr, vec3(0.2126, 0.7152, 0.0722)) * toneMappingExposure, 0.0, 1.0));
}

// Tone-mapped linear colour to the graded colour, sRGB encoded.
vec3 worldGrade(vec3 color) {
  vec3 encoded = sRGBTransferOETF(vec4(clamp(color, 0.0, 1.0), 1.0)).rgb;
  return texture(gradeLut, encoded * gradeLutScale + gradeLutOffset).rgb;
}

${n}
`;
    function o(e) {
        let i = e.size ** 3
          , r = new Uint8Array(4 * i);
        for (let t = 0; t < i; t++) {
            for (let i = 0; i < 3; i++)
                r[4 * t + i] = Math.round(255 * Math.min(1, Math.max(0, e.data[3 * t + i])));
            r[4 * t + 3] = 255
        }
        let n = new t.Data3DTexture(r,e.size,e.size,e.size);
        return n.format = t.RGBAFormat,
        n.type = t.UnsignedByteType,
        n.minFilter = n.magFilter = t.LinearFilter,
        n.wrapS = n.wrapT = n.wrapR = t.ClampToEdgeWrapping,
        n.generateMipmaps = !1,
        n.unpackAlignment = 1,
        n.name = e.title ?? "Grade",
        n.needsUpdate = !0,
        n
    }
    let l = o(function(e=2) {
        let t = new Float32Array(e * e * e * 3)
          , i = 0;
        for (let r = 0; r < e; r++)
            for (let n = 0; n < e; n++)
                for (let s = 0; s < e; s++)
                    t[i++] = s / (e - 1),
                    t[i++] = n / (e - 1),
                    t[i++] = r / (e - 1);
        return {
            title: "Identity",
            size: e,
            data: t
        }
    }())
      , u = {
        toneMapping: i.WORLD_LOOK.toneMapping,
        lut: l,
        vignette: .1
    }
      , h = new WeakMap
      , d = {
        aces: {
            toneMapping: "aces",
            lut: l,
            vignette: 0
        },
        neutral: {
            toneMapping: "neutral",
            lut: l,
            vignette: 0
        },
        agx: {
            toneMapping: "agx",
            lut: l,
            vignette: 0
        }
    }
      , m = new Map
      , c = new WeakMap;
    function p(e, t) {
        let i = c.get(t);
        i || c.set(t, i = new Map);
        let r = i.get(e);
        if (!r) {
            let t = function(e) {
                let t = m.get(e);
                if (!t) {
                    let i = {
                        promise: fetch(e).then(e => {
                            if (!e.ok)
                                throw Error(`HTTP ${e.status}`);
                            return e.text()
                        }
                        ).then(e => {
                            i.texture = o(function(e) {
                                let t = null
                                  , i = 0
                                  , r = [];
                                for (let n of e.split(/\r?\n|\r/)) {
                                    let e = n.trim();
                                    if (!e || e.startsWith("#"))
                                        continue;
                                    let[s,...a] = e.split(/\s+/);
                                    if ("TITLE" === s)
                                        t = e.slice(5).trim().replace(/^"(.*)"$/, "$1");
                                    else if ("LUT_3D_SIZE" === s)
                                        i = Number(a[0]);
                                    else if ("LUT_1D_SIZE" === s)
                                        throw Error("1D .cube LUTs are not supported; export a 3D LUT");
                                    else if ("DOMAIN_MIN" === s || "DOMAIN_MAX" === s) {
                                        let e = +("DOMAIN_MIN" !== s);
                                        if (3 !== a.length || a.some(t => Number(t) !== e))
                                            throw Error(`${s} must be ${e} ${e} ${e}`)
                                    } else if ("LUT_3D_INPUT_RANGE" === s || "LUT_1D_INPUT_RANGE" === s) {
                                        if (0 !== Number(a[0]) || 1 !== Number(a[1]))
                                            throw Error(`${s} must be 0 1`)
                                    } else if (/^[-+.\d]/.test(s)) {
                                        if (2 !== a.length)
                                            throw Error(`Malformed .cube data line: ${e}`);
                                        for (let t of [s, ...a]) {
                                            let i = Number(t);
                                            if (!Number.isFinite(i))
                                                throw Error(`Malformed .cube data line: ${e}`);
                                            r.push(i)
                                        }
                                    }
                                }
                                if (!Number.isInteger(i) || i < 2 || i > 65)
                                    throw Error(`LUT_3D_SIZE must be 2 to 65, not ${i}`);
                                if (r.length !== i * i * i * 3)
                                    throw Error(`Expected ${i ** 3} .cube entries, found ${r.length / 3}`);
                                return {
                                    title: t,
                                    size: i,
                                    data: Float32Array.from(r)
                                }
                            }(e))
                        }
                        ).catch(t => {
                            console.error(`Could not load the colour grade ${e}`, t),
                            m.delete(e)
                        }
                        )
                    };
                    m.set(e, t = i)
                }
                return t
            }(e)
              , n = t.texture ? t : {
                promise: t.promise.then( () => {
                    n.texture = t.texture ?? l,
                    n.failed = !t.texture
                }
                )
            };
            i.set(e, r = n)
        }
        return r
    }
    e.s(["DEFAULT_VIGNETTE", 0, .1, "SCREEN_DITHER_FRAGMENT", 0, s, "THREE_TONE_MAPPING", 0, r, "TONE_MAPPING_DEFINE", 0, {
        aces: 0,
        neutral: 1,
        agx: 2
    }, "WORLD_DISPLAY_GLSL", 0, a, "WORLD_DITHER_GLSL", 0, n, "gradeUniforms", 0, function() {
        return {
            gradeLut: {
                value: l
            },
            gradeLutScale: {
                value: .5
            },
            gradeLutOffset: {
                value: .25
            }
        }
    }
    , "loadGradeLut", 0, function(e, t) {
        let i = p(e, t);
        if (!i.texture)
            throw i.promise;
        return {
            lut: i.texture,
            failed: !0 === i.failed
        }
    }
    , "preloadGradeLut", 0, p, "setGradeUniforms", 0, function(e, t) {
        let i = t.image.width;
        e.gradeLut.value = t,
        e.gradeLutScale.value = (i - 1) / i,
        e.gradeLutOffset.value = .5 / i
    }
    , "setWorldGrade", 0, function(e, t) {
        return h.set(e, t),
        () => {
            h.get(e) === t && h.delete(e)
        }
    }
    , "toneCurveOnly", 0, function(e) {
        return d[e.toneMapping]
    }
    , "worldGrade", 0, function(e) {
        return h.get(e) ?? u
    }
    ], 589109)
}
, 179883, 228486, 818227, e => {
    "use strict";
    e.s(["koPunch", 0, function(e, t) {
        return !(e >= 0) || e >= 130 || t <= 0 ? 1 : 1 + .045 * Math.min(1, t) * (e < 18 ? e / 18 : e < 45 ? 1 : (1 - (e - 45) / 85) ** 2)
    }
    ], 179883);
    let t = [12, 17.5, 21, 25, 34, 50, 100, 250]
      , i = t.length + 1;
    function r(e) {
        return Array(e).fill(0)
    }
    function n(e, t, i) {
        let r = 0;
        for (; r < t.length && i > t[r]; )
            r++;
        e[r]++
    }
    function s(e, t) {
        if (t)
            for (let i = 0; i < Math.min(e.length, t.length); i++)
                e[i] += t[i]
    }
    function a(e) {
        return /Edg\//.test(e) ? "edge" : /Firefox\//.test(e) ? "firefox" : /Chrome\/|CriOS\//.test(e) ? "chrome" : /Safari\//.test(e) ? "safari" : "other"
    }
    t.indexOf(34),
    t.indexOf(100),
    e.s(["BROWSERS", 0, ["chrome", "safari", "firefox", "edge", "other"], "FRAME_BUCKETS", 0, i, "FRAME_EDGES_MS", 0, t, "REFLY_BUCKETS", 0, 8, "addCounts", 0, s, "browserFamily", 0, a, "count", 0, n, "histogram", 0, r], 228486);
    class o {
        frames = r(i);
        flyingMs = 0;
        sampledMs = 0;
        taken = {
            frames: r(i),
            flyingMs: 0,
            sampledMs: 0
        };
        flying = !1;
        steadyAt = 1 / 0;
        browser = null;
        quality;
        lens = 0;
        post = !0;
        pixelRatio = 1;
        resizes = 0;
        width = 0;
        height = 0;
        frame(e, i, r) {
            if (i !== this.flying) {
                this.flying = i,
                this.steadyAt = i ? r + 2e3 : 1 / 0;
                return
            }
            i && e > 0 && (this.flyingMs += 1e3 * e,
            r < this.steadyAt || (n(this.frames, t, 1e3 * e),
            this.sampledMs += 1e3 * e))
        }
        view(e, t, i) {
            this.quality = e,
            this.lens = t,
            this.post = i
        }
        canvas(e, t, i) {
            (e !== this.width || t !== this.height) && this.width > 0 && this.resizes++,
            this.width = e,
            this.height = t,
            this.pixelRatio = i
        }
        take() {
            let e = this.frames
              , t = Math.round(this.flyingMs)
              , n = Math.round(this.sampledMs);
            s(this.taken.frames, e),
            this.taken.flyingMs += this.flyingMs,
            this.taken.sampledMs += this.sampledMs,
            this.frames = r(i),
            this.flyingMs = this.sampledMs = 0;
            let o = this.resizes;
            return this.resizes = 0,
            this.browser ??= "u" < typeof navigator ? "other" : a(navigator.userAgent),
            {
                frames: e,
                flyingMs: t,
                sampledMs: n,
                browser: this.browser,
                quality: this.quality,
                pixelRatio: Math.round(100 * this.pixelRatio) / 100,
                resizes: o,
                lens: Math.round(100 * this.lens) / 100,
                post: this.post
            }
        }
        session() {
            let e = [...this.taken.frames];
            return s(e, this.frames),
            {
                frames: e,
                flyingMs: Math.round(this.taken.flyingMs + this.flyingMs),
                sampledMs: Math.round(this.taken.sampledMs + this.sampledMs)
            }
        }
    }
    let l = new o;
    e.s(["flightFrames", 0, l], 818227)
}
]);
