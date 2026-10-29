(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 331935, A => {
    "use strict";
    var e = A.i(190072);
    class a extends e.Scene {
        constructor() {
            super(),
            this.name = "RoomEnvironment",
            this.position.y = -3.5;
            const A = new e.BoxGeometry;
            A.deleteAttribute("uv");
            const a = new e.MeshStandardMaterial({
                side: e.BackSide
            })
              , t = new e.MeshStandardMaterial
              , s = new e.PointLight(0xffffff,900,28,2);
            s.position.set(.418, 16.199, .3),
            this.add(s);
            const g = new e.Mesh(A,a);
            g.position.set(-.757, 13.219, .717),
            g.scale.set(31.713, 28.305, 28.591),
            this.add(g);
            const r = new e.InstancedMesh(A,t,6)
              , o = new e.Object3D;
            o.position.set(-10.906, 2.009, 1.846),
            o.rotation.set(0, -.195, 0),
            o.scale.set(2.328, 7.905, 4.651),
            o.updateMatrix(),
            r.setMatrixAt(0, o.matrix),
            o.position.set(-5.607, -.754, -.758),
            o.rotation.set(0, .994, 0),
            o.scale.set(1.97, 1.534, 3.955),
            o.updateMatrix(),
            r.setMatrixAt(1, o.matrix),
            o.position.set(6.167, .857, 7.803),
            o.rotation.set(0, .561, 0),
            o.scale.set(3.927, 6.285, 3.687),
            o.updateMatrix(),
            r.setMatrixAt(2, o.matrix),
            o.position.set(-2.017, .018, 6.124),
            o.rotation.set(0, .333, 0),
            o.scale.set(2.002, 4.566, 2.064),
            o.updateMatrix(),
            r.setMatrixAt(3, o.matrix),
            o.position.set(2.291, -.756, -2.621),
            o.rotation.set(0, -.286, 0),
            o.scale.set(1.546, 1.552, 1.496),
            o.updateMatrix(),
            r.setMatrixAt(4, o.matrix),
            o.position.set(-2.193, -.369, -5.547),
            o.rotation.set(0, .516, 0),
            o.scale.set(3.875, 3.487, 2.986),
            o.updateMatrix(),
            r.setMatrixAt(5, o.matrix),
            this.add(r);
            const n = new e.Mesh(A,i(50));
            n.position.set(-16.116, 14.37, 8.208),
            n.scale.set(.1, 2.428, 2.739),
            this.add(n);
            const I = new e.Mesh(A,i(50));
            I.position.set(-16.109, 18.021, -8.207),
            I.scale.set(.1, 2.425, 2.751),
            this.add(I);
            const c = new e.Mesh(A,i(17));
            c.position.set(14.904, 12.198, -1.832),
            c.scale.set(.15, 4.265, 6.331),
            this.add(c);
            const B = new e.Mesh(A,i(43));
            B.position.set(-.462, 8.89, 14.52),
            B.scale.set(4.38, 5.441, .088),
            this.add(B);
            const C = new e.Mesh(A,i(20));
            C.position.set(3.235, 11.486, -12.541),
            C.scale.set(2.5, 2, .1),
            this.add(C);
            const E = new e.Mesh(A,i(100));
            E.position.set(0, 20, 0),
            E.scale.set(1, .1, 1),
            this.add(E)
        }
        dispose() {
            let A = new Set;
            for (let e of (this.traverse(e => {
                e.isMesh && (A.add(e.geometry),
                A.add(e.material))
            }
            ),
            A))
                e.dispose()
        }
    }
    function i(A) {
        return new e.MeshLambertMaterial({
            color: 0,
            emissive: 0xffffff,
            emissiveIntensity: A
        })
    }
    A.s(["RoomEnvironment", 0, a])
}
, 223490, A => {
    "use strict";
    var e = A.i(190072)
      , a = A.i(552260);
    class i extends e.Loader {
        constructor(A) {
            super(A),
            this.dracoLoader = null,
            this.ktx2Loader = null,
            this.meshoptDecoder = null,
            this.pluginCallbacks = [],
            this.register(function(A) {
                return new I(A)
            }),
            this.register(function(A) {
                return new c(A)
            }),
            this.register(function(A) {
                return new p(A)
            }),
            this.register(function(A) {
                return new f(A)
            }),
            this.register(function(A) {
                return new m(A)
            }),
            this.register(function(A) {
                return new C(A)
            }),
            this.register(function(A) {
                return new E(A)
            }),
            this.register(function(A) {
                return new b(A)
            }),
            this.register(function(A) {
                return new Q(A)
            }),
            this.register(function(A) {
                return new n(A)
            }),
            this.register(function(A) {
                return new h(A)
            }),
            this.register(function(A) {
                return new B(A)
            }),
            this.register(function(A) {
                return new d(A)
            }),
            this.register(function(A) {
                return new l(A)
            }),
            this.register(function(A) {
                return new r(A)
            }),
            this.register(function(A) {
                return new u(A,g.EXT_MESHOPT_COMPRESSION)
            }),
            this.register(function(A) {
                return new u(A,g.KHR_MESHOPT_COMPRESSION)
            }),
            this.register(function(A) {
                return new D(A)
            })
        }
        load(A, a, i, t) {
            let s, g = this;
            if ("" !== this.resourcePath)
                s = this.resourcePath;
            else if ("" !== this.path) {
                let a = e.LoaderUtils.extractUrlBase(A);
                s = e.LoaderUtils.resolveURL(a, this.path)
            } else
                s = e.LoaderUtils.extractUrlBase(A);
            this.manager.itemStart(A);
            let r = function(e) {
                t ? t(e) : console.error(e),
                g.manager.itemError(A),
                g.manager.itemEnd(A)
            }
              , o = new e.FileLoader(this.manager);
            o.setPath(this.path),
            o.setResponseType("arraybuffer"),
            o.setRequestHeader(this.requestHeader),
            o.setWithCredentials(this.withCredentials),
            o.load(A, function(e) {
                try {
                    g.parse(e, s, function(e) {
                        a(e),
                        g.manager.itemEnd(A)
                    }, r)
                } catch (A) {
                    r(A)
                }
            }, i, r)
        }
        setDRACOLoader(A) {
            return this.dracoLoader = A,
            this
        }
        setKTX2Loader(A) {
            return this.ktx2Loader = A,
            this
        }
        setMeshoptDecoder(A) {
            return this.meshoptDecoder = A,
            this
        }
        register(A) {
            return -1 === this.pluginCallbacks.indexOf(A) && this.pluginCallbacks.push(A),
            this
        }
        unregister(A) {
            return -1 !== this.pluginCallbacks.indexOf(A) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(A), 1),
            this
        }
        parse(A, e, a, i) {
            let t, s = {}, r = {}, n = new TextDecoder;
            if ("string" == typeof A)
                t = JSON.parse(A);
            else if (A instanceof ArrayBuffer)
                if (n.decode(new Uint8Array(A,0,4)) === F) {
                    try {
                        s[g.KHR_BINARY_GLTF] = new w(A)
                    } catch (A) {
                        i && i(A);
                        return
                    }
                    t = JSON.parse(s[g.KHR_BINARY_GLTF].content)
                } else
                    t = JSON.parse(n.decode(A));
            else
                t = A;
            if (void 0 === t.asset || t.asset.version[0] < 2) {
                i && i(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                return
            }
            let I = new O(t,{
                path: e || this.resourcePath || "",
                crossOrigin: this.crossOrigin,
                requestHeader: this.requestHeader,
                manager: this.manager,
                ktx2Loader: this.ktx2Loader,
                meshoptDecoder: this.meshoptDecoder
            });
            I.fileLoader.setRequestHeader(this.requestHeader);
            for (let A = 0; A < this.pluginCallbacks.length; A++) {
                let e = this.pluginCallbacks[A](I);
                e.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
                r[e.name] = e,
                s[e.name] = !0
            }
            if (t.extensionsUsed)
                for (let A = 0; A < t.extensionsUsed.length; ++A) {
                    let e = t.extensionsUsed[A]
                      , a = t.extensionsRequired || [];
                    switch (e) {
                    case g.KHR_MATERIALS_UNLIT:
                        s[e] = new o;
                        break;
                    case g.KHR_DRACO_MESH_COMPRESSION:
                        s[e] = new R(t,this.dracoLoader);
                        break;
                    case g.KHR_TEXTURE_TRANSFORM:
                        s[e] = new k;
                        break;
                    case g.KHR_MESH_QUANTIZATION:
                        s[e] = new G;
                        break;
                    default:
                        a.indexOf(e) >= 0 && void 0 === r[e] && console.warn('THREE.GLTFLoader: Unknown extension "' + e + '".')
                    }
                }
            I.setExtensions(s),
            I.setPlugins(r),
            I.parse(a, i)
        }
        parseAsync(A, e) {
            let a = this;
            return new Promise(function(i, t) {
                a.parse(A, e, i, t)
            }
            )
        }
    }
    function t() {
        let A = {};
        return {
            get: function(e) {
                return A[e]
            },
            add: function(e, a) {
                A[e] = a
            },
            remove: function(e) {
                delete A[e]
            },
            removeAll: function() {
                A = {}
            }
        }
    }
    function s(A, e, a) {
        let i = A.json.materials[e];
        return i.extensions && i.extensions[a] ? i.extensions[a] : null
    }
    let g = {
        KHR_BINARY_GLTF: "KHR_binary_glTF",
        KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
        KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
        KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
        KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
        KHR_MATERIALS_IOR: "KHR_materials_ior",
        KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
        KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
        KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
        KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
        KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
        KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
        KHR_MATERIALS_VOLUME: "KHR_materials_volume",
        KHR_TEXTURE_BASISU: "KHR_texture_basisu",
        KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
        KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
        KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
        EXT_MATERIALS_BUMP: "EXT_materials_bump",
        EXT_TEXTURE_WEBP: "EXT_texture_webp",
        EXT_TEXTURE_AVIF: "EXT_texture_avif",
        EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
        KHR_MESHOPT_COMPRESSION: "KHR_meshopt_compression",
        EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
    };
    class r {
        constructor(A) {
            this.parser = A,
            this.name = g.KHR_LIGHTS_PUNCTUAL,
            this.cache = {
                refs: {},
                uses: {}
            }
        }
        _markDefs() {
            let A = this.parser
              , e = this.parser.json.nodes || [];
            for (let a = 0, i = e.length; a < i; a++) {
                let i = e[a];
                i.extensions && i.extensions[this.name] && void 0 !== i.extensions[this.name].light && A._addNodeRef(this.cache, i.extensions[this.name].light)
            }
        }
        _loadLight(A) {
            let a, i = this.parser, t = "light:" + A, s = i.cache.get(t);
            if (s)
                return s;
            let g = i.json
              , r = ((g.extensions && g.extensions[this.name] || {}).lights || [])[A]
              , o = new e.Color(0xffffff);
            void 0 !== r.color && o.setRGB(r.color[0], r.color[1], r.color[2], e.LinearSRGBColorSpace);
            let n = void 0 !== r.range ? r.range : 0;
            switch (r.type) {
            case "directional":
                (a = new e.DirectionalLight(o)).target.position.set(0, 0, -1),
                a.add(a.target);
                break;
            case "point":
                (a = new e.PointLight(o)).distance = n;
                break;
            case "spot":
                (a = new e.SpotLight(o)).distance = n,
                r.spot = r.spot || {},
                r.spot.innerConeAngle = void 0 !== r.spot.innerConeAngle ? r.spot.innerConeAngle : 0,
                r.spot.outerConeAngle = void 0 !== r.spot.outerConeAngle ? r.spot.outerConeAngle : Math.PI / 4,
                a.angle = r.spot.outerConeAngle,
                a.penumbra = 1 - r.spot.innerConeAngle / r.spot.outerConeAngle,
                a.target.position.set(0, 0, -1),
                a.add(a.target);
                break;
            default:
                throw Error("THREE.GLTFLoader: Unexpected light type: " + r.type)
            }
            return a.position.set(0, 0, 0),
            H(a, r),
            void 0 !== r.intensity && (a.intensity = r.intensity),
            a.name = i.createUniqueName(r.name || "light_" + A),
            s = Promise.resolve(a),
            i.cache.add(t, s),
            s
        }
        getDependency(A, e) {
            if ("light" === A)
                return this._loadLight(e)
        }
        createNodeAttachment(A) {
            let e = this
              , a = this.parser
              , i = a.json.nodes[A]
              , t = (i.extensions && i.extensions[this.name] || {}).light;
            return void 0 === t ? null : this._loadLight(t).then(function(A) {
                return a._getNodeRef(e.cache, t, A)
            })
        }
    }
    class o {
        constructor() {
            this.name = g.KHR_MATERIALS_UNLIT
        }
        getMaterialType() {
            return e.MeshBasicMaterial
        }
        extendParams(A, a, i) {
            let t = [];
            A.color = new e.Color(1,1,1),
            A.opacity = 1;
            let s = a.pbrMetallicRoughness;
            if (s) {
                if (Array.isArray(s.baseColorFactor)) {
                    let a = s.baseColorFactor;
                    A.color.setRGB(a[0], a[1], a[2], e.LinearSRGBColorSpace),
                    A.opacity = a[3]
                }
                void 0 !== s.baseColorTexture && t.push(i.assignTexture(A, "map", s.baseColorTexture, e.SRGBColorSpace))
            }
            return Promise.all(t)
        }
    }
    class n {
        constructor(A) {
            this.parser = A,
            this.name = g.KHR_MATERIALS_EMISSIVE_STRENGTH
        }
        extendMaterialParams(A, e) {
            let a = s(this.parser, A, this.name);
            return null === a || void 0 !== a.emissiveStrength && (e.emissiveIntensity = a.emissiveStrength),
            Promise.resolve()
        }
    }
    class I {
        constructor(A) {
            this.parser = A,
            this.name = g.KHR_MATERIALS_CLEARCOAT
        }
        getMaterialType(A) {
            return null !== s(this.parser, A, this.name) ? e.MeshPhysicalMaterial : null
        }
        extendMaterialParams(A, a) {
            let i = s(this.parser, A, this.name);
            if (null === i)
                return Promise.resolve();
            let t = [];
            if (void 0 !== i.clearcoatFactor && (a.clearcoat = i.clearcoatFactor),
            void 0 !== i.clearcoatTexture && t.push(this.parser.assignTexture(a, "clearcoatMap", i.clearcoatTexture)),
            void 0 !== i.clearcoatRoughnessFactor && (a.clearcoatRoughness = i.clearcoatRoughnessFactor),
            void 0 !== i.clearcoatRoughnessTexture && t.push(this.parser.assignTexture(a, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)),
            void 0 !== i.clearcoatNormalTexture && (t.push(this.parser.assignTexture(a, "clearcoatNormalMap", i.clearcoatNormalTexture)),
            void 0 !== i.clearcoatNormalTexture.scale)) {
                let A = i.clearcoatNormalTexture.scale;
                a.clearcoatNormalScale = new e.Vector2(A,A)
            }
            return Promise.all(t)
        }
    }
    class c {
        constructor(A) {
            this.parser = A,
            this.name = g.KHR_MATERIALS_DISPERSION
        }
        getMaterialType(A) {
            return null !== s(this.parser, A, this.name) ? e.MeshPhysicalMaterial : null
        }
        extendMaterialParams(A, e) {
            let a = s(this.parser, A, this.name);
            return null === a || (e.dispersion = void 0 !== a.dispersion ? a.dispersion : 0),
            Promise.resolve()
        }
    }
    class B {
        constructor(A) {
            this.parser = A,
            this.name = g.KHR_MATERIALS_IRIDESCENCE
        }
        getMaterialType(A) {
            return null !== s(this.parser, A, this.name) ? e.MeshPhysicalMaterial : null
        }
        extendMaterialParams(A, e) {
            let a = s(this.parser, A, this.name);
            if (null === a)
                return Promise.resolve();
            let i = [];
            return void 0 !== a.iridescenceFactor && (e.iridescence = a.iridescenceFactor),
            void 0 !== a.iridescenceTexture && i.push(this.parser.assignTexture(e, "iridescenceMap", a.iridescenceTexture)),
            void 0 !== a.iridescenceIor && (e.iridescenceIOR = a.iridescenceIor),
            void 0 === e.iridescenceThicknessRange && (e.iridescenceThicknessRange = [100, 400]),
            void 0 !== a.iridescenceThicknessMinimum && (e.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum),
            void 0 !== a.iridescenceThicknessMaximum && (e.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum),
            void 0 !== a.iridescenceThicknessTexture && i.push(this.parser.assignTexture(e, "iridescenceThicknessMap", a.iridescenceThicknessTexture)),
            Promise.all(i)
        }
    }
    class C {
        constructor(A) {
            this.parser = A,
            this.name = g.KHR_MATERIALS_SHEEN
        }
        getMaterialType(A) {
            return null !== s(this.parser, A, this.name) ? e.MeshPhysicalMaterial : null
        }
        extendMaterialParams(A, a) {
            let i = s(this.parser, A, this.name);
            if (null === i)
                return Promise.resolve();
            let t = [];
            if (a.sheenColor = new e.Color(0,0,0),
            a.sheenRoughness = 0,
            a.sheen = 1,
            void 0 !== i.sheenColorFactor) {
                let A = i.sheenColorFactor;
                a.sheenColor.setRGB(A[0], A[1], A[2], e.LinearSRGBColorSpace)
            }
            return void 0 !== i.sheenRoughnessFactor && (a.sheenRoughness = i.sheenRoughnessFactor),
            void 0 !== i.sheenColorTexture && t.push(this.parser.assignTexture(a, "sheenColorMap", i.sheenColorTexture, e.SRGBColorSpace)),
            void 0 !== i.sheenRoughnessTexture && t.push(this.parser.assignTexture(a, "sheenRoughnessMap", i.sheenRoughnessTexture)),
            Promise.all(t)
        }
    }
    class E {
        constructor(A) {
            this.parser = A,
            this.name = g.KHR_MATERIALS_TRANSMISSION
        }
        getMaterialType(A) {
            return null !== s(this.parser, A, this.name) ? e.MeshPhysicalMaterial : null
        }
        extendMaterialParams(A, e) {
            let a = s(this.parser, A, this.name);
            if (null === a)
                return Promise.resolve();
            let i = [];
            return void 0 !== a.transmissionFactor && (e.transmission = a.transmissionFactor),
            void 0 !== a.transmissionTexture && i.push(this.parser.assignTexture(e, "transmissionMap", a.transmissionTexture)),
            Promise.all(i)
        }
    }
    class b {
        constructor(A) {
            this.parser = A,
            this.name = g.KHR_MATERIALS_VOLUME
        }
        getMaterialType(A) {
            return null !== s(this.parser, A, this.name) ? e.MeshPhysicalMaterial : null
        }
        extendMaterialParams(A, a) {
            let i = s(this.parser, A, this.name);
            if (null === i)
                return Promise.resolve();
            let t = [];
            a.thickness = void 0 !== i.thicknessFactor ? i.thicknessFactor : 0,
            void 0 !== i.thicknessTexture && t.push(this.parser.assignTexture(a, "thicknessMap", i.thicknessTexture)),
            a.attenuationDistance = i.attenuationDistance || 1 / 0;
            let g = i.attenuationColor || [1, 1, 1];
            return a.attenuationColor = new e.Color().setRGB(g[0], g[1], g[2], e.LinearSRGBColorSpace),
            Promise.all(t)
        }
    }
    class Q {
        constructor(A) {
            this.parser = A,
            this.name = g.KHR_MATERIALS_IOR
        }
        getMaterialType(A) {
            return null !== s(this.parser, A, this.name) ? e.MeshPhysicalMaterial : null
        }
        extendMaterialParams(A, e) {
            let a = s(this.parser, A, this.name);
            return null === a || (e.ior = void 0 !== a.ior ? a.ior : 1.5,
            0 === e.ior && (e.ior = 1e3)),
            Promise.resolve()
        }
    }
    class h {
        constructor(A) {
            this.parser = A,
            this.name = g.KHR_MATERIALS_SPECULAR
        }
        getMaterialType(A) {
            return null !== s(this.parser, A, this.name) ? e.MeshPhysicalMaterial : null
        }
        extendMaterialParams(A, a) {
            let i = s(this.parser, A, this.name);
            if (null === i)
                return Promise.resolve();
            let t = [];
            a.specularIntensity = void 0 !== i.specularFactor ? i.specularFactor : 1,
            void 0 !== i.specularTexture && t.push(this.parser.assignTexture(a, "specularIntensityMap", i.specularTexture));
            let g = i.specularColorFactor || [1, 1, 1];
            return a.specularColor = new e.Color().setRGB(g[0], g[1], g[2], e.LinearSRGBColorSpace),
            void 0 !== i.specularColorTexture && t.push(this.parser.assignTexture(a, "specularColorMap", i.specularColorTexture, e.SRGBColorSpace)),
            Promise.all(t)
        }
    }
    class l {
        constructor(A) {
            this.parser = A,
            this.name = g.EXT_MATERIALS_BUMP
        }
        getMaterialType(A) {
            return null !== s(this.parser, A, this.name) ? e.MeshPhysicalMaterial : null
        }
        extendMaterialParams(A, e) {
            let a = s(this.parser, A, this.name);
            if (null === a)
                return Promise.resolve();
            let i = [];
            return e.bumpScale = void 0 !== a.bumpFactor ? a.bumpFactor : 1,
            void 0 !== a.bumpTexture && i.push(this.parser.assignTexture(e, "bumpMap", a.bumpTexture)),
            Promise.all(i)
        }
    }
    class d {
        constructor(A) {
            this.parser = A,
            this.name = g.KHR_MATERIALS_ANISOTROPY
        }
        getMaterialType(A) {
            return null !== s(this.parser, A, this.name) ? e.MeshPhysicalMaterial : null
        }
        extendMaterialParams(A, e) {
            let a = s(this.parser, A, this.name);
            if (null === a)
                return Promise.resolve();
            let i = [];
            return void 0 !== a.anisotropyStrength && (e.anisotropy = a.anisotropyStrength),
            void 0 !== a.anisotropyRotation && (e.anisotropyRotation = a.anisotropyRotation),
            void 0 !== a.anisotropyTexture && i.push(this.parser.assignTexture(e, "anisotropyMap", a.anisotropyTexture)),
            Promise.all(i)
        }
    }
    class p {
        constructor(A) {
            this.parser = A,
            this.name = g.KHR_TEXTURE_BASISU
        }
        loadTexture(A) {
            let e = this.parser
              , a = e.json
              , i = a.textures[A];
            if (!i.extensions || !i.extensions[this.name])
                return null;
            let t = i.extensions[this.name]
              , s = e.options.ktx2Loader;
            if (!s)
                if (!(a.extensionsRequired && a.extensionsRequired.indexOf(this.name) >= 0))
                    return null;
                else
                    throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return e.loadTextureImage(A, t.source, s)
        }
    }
    class f {
        constructor(A) {
            this.parser = A,
            this.name = g.EXT_TEXTURE_WEBP
        }
        loadTexture(A) {
            let e = this.name
              , a = this.parser
              , i = a.json
              , t = i.textures[A];
            if (!t.extensions || !t.extensions[e])
                return null;
            let s = t.extensions[e]
              , g = i.images[s.source]
              , r = a.textureLoader;
            if (g.uri) {
                let A = a.options.manager.getHandler(g.uri);
                null !== A && (r = A)
            }
            return a.loadTextureImage(A, s.source, r)
        }
    }
    class m {
        constructor(A) {
            this.parser = A,
            this.name = g.EXT_TEXTURE_AVIF
        }
        loadTexture(A) {
            let e = this.name
              , a = this.parser
              , i = a.json
              , t = i.textures[A];
            if (!t.extensions || !t.extensions[e])
                return null;
            let s = t.extensions[e]
              , g = i.images[s.source]
              , r = a.textureLoader;
            if (g.uri) {
                let A = a.options.manager.getHandler(g.uri);
                null !== A && (r = A)
            }
            return a.loadTextureImage(A, s.source, r)
        }
    }
    class u {
        constructor(A, e) {
            this.name = e,
            this.parser = A
        }
        loadBufferView(A) {
            let e = this.parser.json
              , a = e.bufferViews[A];
            if (!a.extensions || !a.extensions[this.name])
                return null;
            {
                let A = a.extensions[this.name]
                  , i = this.parser.getDependency("buffer", A.buffer)
                  , t = this.parser.options.meshoptDecoder;
                if (!t || !t.supported)
                    if (!(e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0))
                        return null;
                    else
                        throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                return i.then(function(e) {
                    let a = A.byteOffset || 0
                      , i = A.byteLength || 0
                      , s = A.count
                      , g = A.byteStride
                      , r = new Uint8Array(e,a,i);
                    return t.decodeGltfBufferAsync ? t.decodeGltfBufferAsync(s, g, r, A.mode, A.filter).then(function(A) {
                        return A.buffer
                    }) : t.ready.then(function() {
                        let e = new ArrayBuffer(s * g);
                        return t.decodeGltfBuffer(new Uint8Array(e), s, g, r, A.mode, A.filter),
                        e
                    })
                })
            }
        }
    }
    class D {
        constructor(A) {
            this.name = g.EXT_MESH_GPU_INSTANCING,
            this.parser = A
        }
        createNodeMesh(A) {
            let a = this.parser.json
              , i = a.nodes[A];
            if (!i.extensions || !i.extensions[this.name] || void 0 === i.mesh)
                return null;
            for (let A of a.meshes[i.mesh].primitives)
                if (A.mode !== T.TRIANGLES && A.mode !== T.TRIANGLE_STRIP && A.mode !== T.TRIANGLE_FAN && void 0 !== A.mode)
                    return null;
            let t = i.extensions[this.name].attributes
              , s = []
              , g = {};
            for (let A in t)
                s.push(this.parser.getDependency("accessor", t[A]).then(e => (g[A] = e,
                g[A])));
            return s.length < 1 ? null : (s.push(this.parser.createNodeMesh(A)),
            Promise.all(s).then(A => {
                let a = A.pop()
                  , i = a.isGroup ? a.children : [a]
                  , t = A[0].count
                  , s = [];
                for (let A of i) {
                    let a = new e.Matrix4
                      , i = new e.Vector3
                      , r = new e.Quaternion
                      , o = new e.Vector3(1,1,1)
                      , n = new e.InstancedMesh(A.geometry,A.material,t);
                    for (let A = 0; A < t; A++)
                        g.TRANSLATION && i.fromBufferAttribute(g.TRANSLATION, A),
                        g.ROTATION && r.fromBufferAttribute(g.ROTATION, A),
                        g.SCALE && o.fromBufferAttribute(g.SCALE, A),
                        n.setMatrixAt(A, a.compose(i, r, o));
                    for (let a in g)
                        if ("_COLOR_0" === a) {
                            let A = g[a];
                            n.instanceColor = new e.InstancedBufferAttribute(A.array,A.itemSize,A.normalized)
                        } else
                            "TRANSLATION" !== a && "ROTATION" !== a && "SCALE" !== a && A.geometry.setAttribute(a, g[a]);
                    e.Object3D.prototype.copy.call(n, A),
                    this.parser.assignFinalMaterial(n),
                    s.push(n)
                }
                return a.isGroup ? (a.clear(),
                a.add(...s),
                a) : s[0]
            }
            ))
        }
    }
    let F = "glTF";
    class w {
        constructor(A) {
            this.name = g.KHR_BINARY_GLTF,
            this.content = null,
            this.body = null;
            const e = new DataView(A,0,12)
              , a = new TextDecoder;
            if (this.header = {
                magic: a.decode(new Uint8Array(A.slice(0, 4))),
                version: e.getUint32(4, !0),
                length: e.getUint32(8, !0)
            },
            this.header.magic !== F)
                throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
            if (this.header.version < 2)
                throw Error("THREE.GLTFLoader: Legacy binary file detected.");
            const i = this.header.length - 12
              , t = new DataView(A,12);
            let s = 0;
            for (; s < i; ) {
                const e = t.getUint32(s, !0);
                s += 4;
                const i = t.getUint32(s, !0);
                if (s += 4,
                0x4e4f534a === i) {
                    const i = new Uint8Array(A,12 + s,e);
                    this.content = a.decode(i)
                } else if (5130562 === i) {
                    const a = 12 + s;
                    this.body = A.slice(a, a + e)
                }
                s += e
            }
            if (null === this.content)
                throw Error("THREE.GLTFLoader: JSON content not found.")
        }
    }
    class R {
        constructor(A, e) {
            if (!e)
                throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
            this.name = g.KHR_DRACO_MESH_COMPRESSION,
            this.json = A,
            this.dracoLoader = e,
            this.dracoLoader.preload()
        }
        decodePrimitive(A, a) {
            let i = this.json
              , t = this.dracoLoader
              , s = A.extensions[this.name].bufferView
              , g = A.extensions[this.name].attributes
              , r = {}
              , o = {}
              , n = {};
            for (let A in g)
                r[q[A] || A.toLowerCase()] = g[A];
            for (let e in A.attributes) {
                let a = q[e] || e.toLowerCase();
                if (void 0 !== g[e]) {
                    let t = i.accessors[A.attributes[e]]
                      , s = L[t.componentType];
                    n[a] = s.name,
                    o[a] = !0 === t.normalized
                }
            }
            return a.getDependency("bufferView", s).then(function(A) {
                return new Promise(function(a, i) {
                    t.decodeDracoFile(A, function(A) {
                        for (let e in A.attributes) {
                            let a = A.attributes[e]
                              , i = o[e];
                            void 0 !== i && (a.normalized = i)
                        }
                        a(A)
                    }, r, n, e.LinearSRGBColorSpace, i)
                }
                )
            })
        }
    }
    class k {
        constructor() {
            this.name = g.KHR_TEXTURE_TRANSFORM
        }
        extendTexture(A, e) {
            return (void 0 === e.texCoord || e.texCoord === A.channel) && void 0 === e.offset && void 0 === e.rotation && void 0 === e.scale || (A = A.clone(),
            void 0 !== e.texCoord && (A.channel = e.texCoord),
            void 0 !== e.offset && A.offset.fromArray(e.offset),
            void 0 !== e.rotation && (A.rotation = e.rotation),
            void 0 !== e.scale && A.repeat.fromArray(e.scale),
            A.needsUpdate = !0),
            A
        }
    }
    class G {
        constructor() {
            this.name = g.KHR_MESH_QUANTIZATION
        }
    }
    class S extends e.Interpolant {
        constructor(A, e, a, i) {
            super(A, e, a, i)
        }
        copySampleValue_(A) {
            let e = this.resultBuffer
              , a = this.sampleValues
              , i = this.valueSize
              , t = A * i * 3 + i;
            for (let A = 0; A !== i; A++)
                e[A] = a[t + A];
            return e
        }
        interpolate_(A, e, a, i) {
            let t = this.resultBuffer
              , s = this.sampleValues
              , g = this.valueSize
              , r = 2 * g
              , o = 3 * g
              , n = i - e
              , I = (a - e) / n
              , c = I * I
              , B = c * I
              , C = A * o
              , E = C - o
              , b = -2 * B + 3 * c
              , Q = B - c
              , h = 1 - b
              , l = Q - c + I;
            for (let A = 0; A !== g; A++) {
                let e = s[E + A + g]
                  , a = s[E + A + r] * n
                  , i = s[C + A + g]
                  , o = s[C + A] * n;
                t[A] = h * e + l * a + b * i + Q * o
            }
            return t
        }
    }
    let y = new e.Quaternion;
    class x extends S {
        interpolate_(A, e, a, i) {
            let t = super.interpolate_(A, e, a, i);
            return y.fromArray(t).normalize().toArray(t),
            t
        }
    }
    let T = {
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6
    }
      , L = {
        5120: Int8Array,
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array
    }
      , U = {
        9728: e.NearestFilter,
        9729: e.LinearFilter,
        9984: e.NearestMipmapNearestFilter,
        9985: e.LinearMipmapNearestFilter,
        9986: e.NearestMipmapLinearFilter,
        9987: e.LinearMipmapLinearFilter
    }
      , M = {
        33071: e.ClampToEdgeWrapping,
        33648: e.MirroredRepeatWrapping,
        10497: e.RepeatWrapping
    }
      , N = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
    }
      , q = {
        POSITION: "position",
        NORMAL: "normal",
        TANGENT: "tangent",
        TEXCOORD_0: "uv",
        TEXCOORD_1: "uv1",
        TEXCOORD_2: "uv2",
        TEXCOORD_3: "uv3",
        COLOR_0: "color",
        WEIGHTS_0: "skinWeight",
        JOINTS_0: "skinIndex"
    }
      , v = {
        scale: "scale",
        translation: "position",
        rotation: "quaternion",
        weights: "morphTargetInfluences"
    }
      , _ = {
        CUBICSPLINE: void 0,
        LINEAR: e.InterpolateLinear,
        STEP: e.InterpolateDiscrete
    };
    function J(A, e, a) {
        for (let i in a.extensions)
            void 0 === A[i] && (e.userData.gltfExtensions = e.userData.gltfExtensions || {},
            e.userData.gltfExtensions[i] = a.extensions[i])
    }
    function H(A, e) {
        void 0 !== e.extras && ("object" == typeof e.extras ? Object.assign(A.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras))
    }
    function K(A) {
        let e = ""
          , a = Object.keys(A).sort();
        for (let i = 0, t = a.length; i < t; i++)
            e += a[i] + ":" + A[a[i]] + ";";
        return e
    }
    function j(A) {
        switch (A) {
        case Int8Array:
            return 1 / 127;
        case Uint8Array:
            return 1 / 255;
        case Int16Array:
            return 1 / 32767;
        case Uint16Array:
            return 1 / 65535;
        default:
            throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
        }
    }
    let P = new e.Matrix4;
    class O {
        constructor(A={}, a={}) {
            this.json = A,
            this.extensions = {},
            this.plugins = {},
            this.options = a,
            this.cache = new t,
            this.associations = new Map,
            this.primitiveCache = {},
            this.nodeCache = {},
            this.meshCache = {
                refs: {},
                uses: {}
            },
            this.cameraCache = {
                refs: {},
                uses: {}
            },
            this.lightCache = {
                refs: {},
                uses: {}
            },
            this.sourceCache = {},
            this.textureCache = {},
            this.nodeNamesUsed = {};
            let i = !1
              , s = -1
              , g = !1
              , r = -1;
            if ("u" > typeof navigator && void 0 !== navigator.userAgent) {
                const A = navigator.userAgent;
                i = !0 === /^((?!chrome|android).)*safari/i.test(A);
                const e = A.match(/Version\/(\d+)/);
                s = i && e ? parseInt(e[1], 10) : -1,
                r = (g = A.indexOf("Firefox") > -1) ? A.match(/Firefox\/([0-9]+)\./)[1] : -1
            }
            "u" < typeof createImageBitmap || i && s < 17 || g && r < 98 ? this.textureLoader = new e.TextureLoader(this.options.manager) : this.textureLoader = new e.ImageBitmapLoader(this.options.manager),
            this.textureLoader.setCrossOrigin(this.options.crossOrigin),
            this.textureLoader.setRequestHeader(this.options.requestHeader),
            this.fileLoader = new e.FileLoader(this.options.manager),
            this.fileLoader.setResponseType("arraybuffer"),
            "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
        }
        setExtensions(A) {
            this.extensions = A
        }
        setPlugins(A) {
            this.plugins = A
        }
        parse(A, e) {
            let a = this
              , i = this.json
              , t = this.extensions;
            this.cache.removeAll(),
            this.nodeCache = {},
            this._invokeAll(function(A) {
                return A._markDefs && A._markDefs()
            }),
            Promise.all(this._invokeAll(function(A) {
                return A.beforeRoot && A.beforeRoot()
            })).then(function() {
                return Promise.all([a.getDependencies("scene"), a.getDependencies("animation"), a.getDependencies("camera")])
            }).then(function(e) {
                let s = {
                    scene: e[0][i.scene || 0],
                    scenes: e[0],
                    animations: e[1],
                    cameras: e[2],
                    asset: i.asset,
                    parser: a,
                    userData: {}
                };
                return J(t, s, i),
                H(s, i),
                Promise.all(a._invokeAll(function(A) {
                    return A.afterRoot && A.afterRoot(s)
                })).then(function() {
                    for (let A of s.scenes)
                        A.updateMatrixWorld();
                    A(s)
                })
            }).catch(e)
        }
        _markDefs() {
            let A = this.json.nodes || []
              , e = this.json.skins || []
              , a = this.json.meshes || [];
            for (let a = 0, i = e.length; a < i; a++) {
                let i = e[a].joints;
                for (let e = 0, a = i.length; e < a; e++)
                    A[i[e]].isBone = !0
            }
            for (let e = 0, i = A.length; e < i; e++) {
                let i = A[e];
                void 0 !== i.mesh && (this._addNodeRef(this.meshCache, i.mesh),
                void 0 !== i.skin && (a[i.mesh].isSkinnedMesh = !0)),
                void 0 !== i.camera && this._addNodeRef(this.cameraCache, i.camera)
            }
        }
        _addNodeRef(A, e) {
            void 0 !== e && (void 0 === A.refs[e] && (A.refs[e] = A.uses[e] = 0),
            A.refs[e]++)
        }
        _getNodeRef(A, e, a) {
            if (A.refs[e] <= 1)
                return a;
            let i = a.clone()
              , t = (A, e) => {
                let a = this.associations.get(A);
                for (let[i,s] of (null != a && this.associations.set(e, a),
                A.children.entries()))
                    t(s, e.children[i])
            }
            ;
            return t(a, i),
            i.name += "_instance_" + A.uses[e]++,
            i
        }
        _invokeOne(A) {
            let e = Object.values(this.plugins);
            e.push(this);
            for (let a = 0; a < e.length; a++) {
                let i = A(e[a]);
                if (i)
                    return i
            }
            return null
        }
        _invokeAll(A) {
            let e = Object.values(this.plugins);
            e.unshift(this);
            let a = [];
            for (let i = 0; i < e.length; i++) {
                let t = A(e[i]);
                t && a.push(t)
            }
            return a
        }
        getDependency(A, e) {
            let a = A + ":" + e
              , i = this.cache.get(a);
            if (!i) {
                switch (A) {
                case "scene":
                    i = this.loadScene(e);
                    break;
                case "node":
                    i = this._invokeOne(function(A) {
                        return A.loadNode && A.loadNode(e)
                    });
                    break;
                case "mesh":
                    i = this._invokeOne(function(A) {
                        return A.loadMesh && A.loadMesh(e)
                    });
                    break;
                case "accessor":
                    i = this.loadAccessor(e);
                    break;
                case "bufferView":
                    i = this._invokeOne(function(A) {
                        return A.loadBufferView && A.loadBufferView(e)
                    });
                    break;
                case "buffer":
                    i = this.loadBuffer(e);
                    break;
                case "material":
                    i = this._invokeOne(function(A) {
                        return A.loadMaterial && A.loadMaterial(e)
                    });
                    break;
                case "texture":
                    i = this._invokeOne(function(A) {
                        return A.loadTexture && A.loadTexture(e)
                    });
                    break;
                case "skin":
                    i = this.loadSkin(e);
                    break;
                case "animation":
                    i = this._invokeOne(function(A) {
                        return A.loadAnimation && A.loadAnimation(e)
                    });
                    break;
                case "camera":
                    i = this.loadCamera(e);
                    break;
                default:
                    if (!(i = this._invokeOne(function(a) {
                        return a != this && a.getDependency && a.getDependency(A, e)
                    })))
                        throw Error("Unknown type: " + A)
                }
                this.cache.add(a, i)
            }
            return i
        }
        getDependencies(A) {
            let e = this.cache.get(A);
            if (!e) {
                let a = this;
                e = Promise.all((this.json[A + ("mesh" === A ? "es" : "s")] || []).map(function(e, i) {
                    return a.getDependency(A, i)
                })),
                this.cache.add(A, e)
            }
            return e
        }
        loadBuffer(A) {
            let a = this.json.buffers[A]
              , i = this.fileLoader;
            if (a.type && "arraybuffer" !== a.type)
                throw Error("THREE.GLTFLoader: " + a.type + " buffer type is not supported.");
            if (void 0 === a.uri && 0 === A)
                return Promise.resolve(this.extensions[g.KHR_BINARY_GLTF].body);
            let t = this.options;
            return new Promise(function(A, s) {
                i.load(e.LoaderUtils.resolveURL(a.uri, t.path), A, void 0, function() {
                    s(Error('THREE.GLTFLoader: Failed to load buffer "' + a.uri + '".'))
                })
            }
            )
        }
        loadBufferView(A) {
            let e = this.json.bufferViews[A];
            return this.getDependency("buffer", e.buffer).then(function(A) {
                let a = e.byteLength || 0
                  , i = e.byteOffset || 0;
                return A.slice(i, i + a)
            })
        }
        loadAccessor(A) {
            let a = this
              , i = this.json
              , t = this.json.accessors[A];
            if (void 0 === t.bufferView && void 0 === t.sparse) {
                let A = N[t.type]
                  , a = L[t.componentType]
                  , i = !0 === t.normalized
                  , s = new a(t.count * A);
                return Promise.resolve(new e.BufferAttribute(s,A,i))
            }
            let s = [];
            return void 0 !== t.bufferView ? s.push(this.getDependency("bufferView", t.bufferView)) : s.push(null),
            void 0 !== t.sparse && (s.push(this.getDependency("bufferView", t.sparse.indices.bufferView)),
            s.push(this.getDependency("bufferView", t.sparse.values.bufferView))),
            Promise.all(s).then(function(A) {
                let s, g, r = A[0], o = N[t.type], n = L[t.componentType], I = n.BYTES_PER_ELEMENT, c = I * o, B = t.byteOffset || 0, C = void 0 !== t.bufferView ? i.bufferViews[t.bufferView].byteStride : void 0, E = !0 === t.normalized;
                if (C && C !== c) {
                    let A = Math.floor(B / C)
                      , i = "InterleavedBuffer:" + t.bufferView + ":" + t.componentType + ":" + A + ":" + t.count
                      , c = a.cache.get(i);
                    c || (s = new n(r,A * C,t.count * C / I),
                    c = new e.InterleavedBuffer(s,C / I),
                    a.cache.add(i, c)),
                    g = new e.InterleavedBufferAttribute(c,o,B % C / I,E)
                } else
                    s = null === r ? new n(t.count * o) : new n(r,B,t.count * o),
                    g = new e.BufferAttribute(s,o,E);
                if (void 0 !== t.sparse) {
                    let a = N.SCALAR
                      , i = L[t.sparse.indices.componentType]
                      , s = t.sparse.indices.byteOffset || 0
                      , I = t.sparse.values.byteOffset || 0
                      , c = new i(A[1],s,t.sparse.count * a)
                      , B = new n(A[2],I,t.sparse.count * o);
                    null !== r && (g = new e.BufferAttribute(g.array.slice(),g.itemSize,g.normalized)),
                    g.normalized = !1;
                    for (let A = 0, e = c.length; A < e; A++) {
                        let e = c[A];
                        if (g.setX(e, B[A * o]),
                        o >= 2 && g.setY(e, B[A * o + 1]),
                        o >= 3 && g.setZ(e, B[A * o + 2]),
                        o >= 4 && g.setW(e, B[A * o + 3]),
                        o >= 5)
                            throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                    }
                    g.normalized = E
                }
                return g
            })
        }
        loadTexture(A) {
            let e = this.json
              , a = this.options
              , i = e.textures[A].source
              , t = e.images[i]
              , s = this.textureLoader;
            if (t.uri) {
                let A = a.manager.getHandler(t.uri);
                null !== A && (s = A)
            }
            return this.loadTextureImage(A, i, s)
        }
        loadTextureImage(A, a, i) {
            let t = this
              , s = this.json
              , g = s.textures[A]
              , r = s.images[a]
              , o = (r.uri || r.bufferView) + ":" + g.sampler;
            if (this.textureCache[o])
                return this.textureCache[o];
            let n = this.loadImageSource(a, i).then(function(a) {
                a.flipY = !1,
                a.name = g.name || r.name || "",
                "" === a.name && "string" == typeof r.uri && !1 === r.uri.startsWith("data:image/") && (a.name = r.uri);
                let i = (s.samplers || {})[g.sampler] || {};
                return a.magFilter = U[i.magFilter] || e.LinearFilter,
                a.minFilter = U[i.minFilter] || e.LinearMipmapLinearFilter,
                a.wrapS = M[i.wrapS] || e.RepeatWrapping,
                a.wrapT = M[i.wrapT] || e.RepeatWrapping,
                a.generateMipmaps = !a.isCompressedTexture && a.minFilter !== e.NearestFilter && a.minFilter !== e.LinearFilter,
                t.associations.set(a, {
                    textures: A
                }),
                a
            }).catch(function() {
                return null
            });
            return this.textureCache[o] = n,
            n
        }
        loadImageSource(A, a) {
            let i = this.json
              , t = this.options;
            if (void 0 !== this.sourceCache[A])
                return this.sourceCache[A].then(A => A.clone());
            let s = i.images[A]
              , g = self.URL || self.webkitURL
              , r = s.uri || ""
              , o = !1;
            if (void 0 !== s.bufferView)
                r = this.getDependency("bufferView", s.bufferView).then(function(A) {
                    o = !0;
                    let e = new Blob([A],{
                        type: s.mimeType
                    });
                    return r = g.createObjectURL(e)
                });
            else if (void 0 === s.uri)
                throw Error("THREE.GLTFLoader: Image " + A + " is missing URI and bufferView");
            let n = Promise.resolve(r).then(function(A) {
                return new Promise(function(i, s) {
                    let g = i;
                    !0 === a.isImageBitmapLoader && (g = function(A) {
                        let a = new e.Texture(A);
                        a.needsUpdate = !0,
                        i(a)
                    }
                    ),
                    a.load(e.LoaderUtils.resolveURL(A, t.path), g, void 0, s)
                }
                )
            }).then(function(A) {
                var e;
                return !0 === o && g.revokeObjectURL(r),
                H(A, s),
                A.userData.mimeType = s.mimeType || ((e = s.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === e.search(/^data\:image\/jpeg/) ? "image/jpeg" : e.search(/\.webp($|\?)/i) > 0 || 0 === e.search(/^data\:image\/webp/) ? "image/webp" : e.search(/\.ktx2($|\?)/i) > 0 || 0 === e.search(/^data\:image\/ktx2/) ? "image/ktx2" : "image/png"),
                A
            }).catch(function(A) {
                throw console.error("THREE.GLTFLoader: Couldn't load texture", r),
                A
            });
            return this.sourceCache[A] = n,
            n
        }
        assignTexture(A, e, a, i) {
            let t = this;
            return this.getDependency("texture", a.index).then(function(s) {
                if (!s)
                    return null;
                if (void 0 !== a.texCoord && a.texCoord > 0 && ((s = s.clone()).channel = a.texCoord),
                t.extensions[g.KHR_TEXTURE_TRANSFORM]) {
                    let A = void 0 !== a.extensions ? a.extensions[g.KHR_TEXTURE_TRANSFORM] : void 0;
                    if (A) {
                        let e = t.associations.get(s);
                        s = t.extensions[g.KHR_TEXTURE_TRANSFORM].extendTexture(s, A),
                        t.associations.set(s, e)
                    }
                }
                return void 0 !== i && (s.colorSpace = i),
                A[e] = s,
                s
            })
        }
        assignFinalMaterial(A) {
            let a = A.geometry
              , i = A.material
              , t = void 0 === a.attributes.tangent
              , s = void 0 !== a.attributes.color
              , g = void 0 === a.attributes.normal;
            if (A.isPoints) {
                let A = "PointsMaterial:" + i.uuid
                  , a = this.cache.get(A);
                a || (a = new e.PointsMaterial,
                e.Material.prototype.copy.call(a, i),
                a.color.copy(i.color),
                a.map = i.map,
                a.sizeAttenuation = !1,
                this.cache.add(A, a)),
                i = a
            } else if (A.isLine) {
                let A = "LineBasicMaterial:" + i.uuid
                  , a = this.cache.get(A);
                a || (a = new e.LineBasicMaterial,
                e.Material.prototype.copy.call(a, i),
                a.color.copy(i.color),
                a.map = i.map,
                this.cache.add(A, a)),
                i = a
            }
            if (t || s || g) {
                let A = "ClonedMaterial:" + i.uuid + ":";
                t && (A += "derivative-tangents:"),
                s && (A += "vertex-colors:"),
                g && (A += "flat-shading:");
                let e = this.cache.get(A);
                e || (e = i.clone(),
                s && (e.vertexColors = !0),
                g && (e.flatShading = !0),
                t && (e.normalScale && (e.normalScale.y *= -1),
                e.clearcoatNormalScale && (e.clearcoatNormalScale.y *= -1)),
                this.cache.add(A, e),
                this.associations.set(e, this.associations.get(i))),
                i = e
            }
            A.material = i
        }
        getMaterialType() {
            return e.MeshStandardMaterial
        }
        loadMaterial(A) {
            let a, i = this, t = this.json, s = this.extensions, r = t.materials[A], o = {}, n = r.extensions || {}, I = [];
            if (n[g.KHR_MATERIALS_UNLIT]) {
                let A = s[g.KHR_MATERIALS_UNLIT];
                a = A.getMaterialType(),
                I.push(A.extendParams(o, r, i))
            } else {
                let t = r.pbrMetallicRoughness || {};
                if (o.color = new e.Color(1,1,1),
                o.opacity = 1,
                Array.isArray(t.baseColorFactor)) {
                    let A = t.baseColorFactor;
                    o.color.setRGB(A[0], A[1], A[2], e.LinearSRGBColorSpace),
                    o.opacity = A[3]
                }
                void 0 !== t.baseColorTexture && I.push(i.assignTexture(o, "map", t.baseColorTexture, e.SRGBColorSpace)),
                o.metalness = void 0 !== t.metallicFactor ? t.metallicFactor : 1,
                o.roughness = void 0 !== t.roughnessFactor ? t.roughnessFactor : 1,
                void 0 !== t.metallicRoughnessTexture && (I.push(i.assignTexture(o, "metalnessMap", t.metallicRoughnessTexture)),
                I.push(i.assignTexture(o, "roughnessMap", t.metallicRoughnessTexture))),
                a = this._invokeOne(function(e) {
                    return e.getMaterialType && e.getMaterialType(A)
                }),
                I.push(Promise.all(this._invokeAll(function(e) {
                    return e.extendMaterialParams && e.extendMaterialParams(A, o)
                })))
            }
            !0 === r.doubleSided && (o.side = e.DoubleSide);
            let c = r.alphaMode || "OPAQUE";
            if ("BLEND" === c ? (o.transparent = !0,
            o.depthWrite = !1) : (o.transparent = !1,
            "MASK" === c && (o.alphaTest = void 0 !== r.alphaCutoff ? r.alphaCutoff : .5)),
            void 0 !== r.normalTexture && a !== e.MeshBasicMaterial && (I.push(i.assignTexture(o, "normalMap", r.normalTexture)),
            o.normalScale = new e.Vector2(1,1),
            void 0 !== r.normalTexture.scale)) {
                let A = r.normalTexture.scale;
                o.normalScale.set(A, A)
            }
            if (void 0 !== r.occlusionTexture && a !== e.MeshBasicMaterial && (I.push(i.assignTexture(o, "aoMap", r.occlusionTexture)),
            void 0 !== r.occlusionTexture.strength && (o.aoMapIntensity = r.occlusionTexture.strength)),
            void 0 !== r.emissiveFactor && a !== e.MeshBasicMaterial) {
                let A = r.emissiveFactor;
                o.emissive = new e.Color().setRGB(A[0], A[1], A[2], e.LinearSRGBColorSpace)
            }
            return void 0 !== r.emissiveTexture && a !== e.MeshBasicMaterial && I.push(i.assignTexture(o, "emissiveMap", r.emissiveTexture, e.SRGBColorSpace)),
            Promise.all(I).then(function() {
                let e = new a(o);
                return r.name && (e.name = r.name),
                H(e, r),
                i.associations.set(e, {
                    materials: A
                }),
                r.extensions && J(s, e, r),
                e
            })
        }
        createUniqueName(A) {
            let a = e.PropertyBinding.sanitizeNodeName(A || "");
            return a in this.nodeNamesUsed ? a + "_" + ++this.nodeNamesUsed[a] : (this.nodeNamesUsed[a] = 0,
            a)
        }
        loadGeometries(A) {
            let a = this
              , i = this.extensions
              , t = this.primitiveCache
              , s = [];
            for (let r = 0, o = A.length; r < o; r++) {
                let o = A[r]
                  , n = function(A) {
                    let e, a = A.extensions && A.extensions[g.KHR_DRACO_MESH_COMPRESSION];
                    if (e = a ? "draco:" + a.bufferView + ":" + a.indices + ":" + K(a.attributes) : A.indices + ":" + K(A.attributes) + ":" + A.mode,
                    void 0 !== A.targets)
                        for (let a = 0, i = A.targets.length; a < i; a++)
                            e += ":" + K(A.targets[a]);
                    return e
                }(o)
                  , I = t[n];
                if (I)
                    s.push(I.promise);
                else {
                    let A;
                    A = o.extensions && o.extensions[g.KHR_DRACO_MESH_COMPRESSION] ? function(A) {
                        return i[g.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(A, a).then(function(e) {
                            return Y(e, A, a)
                        })
                    }(o) : Y(new e.BufferGeometry, o, a),
                    t[n] = {
                        primitive: o,
                        promise: A
                    },
                    s.push(A)
                }
            }
            return Promise.all(s)
        }
        loadMesh(A) {
            let i = this
              , t = this.json
              , s = this.extensions
              , g = t.meshes[A]
              , r = g.primitives
              , o = [];
            for (let A = 0, a = r.length; A < a; A++) {
                var n;
                let a = void 0 === r[A].material ? (void 0 === (n = this.cache).DefaultMaterial && (n.DefaultMaterial = new e.MeshStandardMaterial({
                    color: 0xffffff,
                    emissive: 0,
                    metalness: 1,
                    roughness: 1,
                    transparent: !1,
                    depthTest: !0,
                    side: e.FrontSide
                })),
                n.DefaultMaterial) : this.getDependency("material", r[A].material);
                o.push(a)
            }
            return o.push(i.loadGeometries(r)),
            Promise.all(o).then(function(t) {
                let o = t.slice(0, t.length - 1)
                  , n = t[t.length - 1]
                  , I = [];
                for (let t = 0, c = n.length; t < c; t++) {
                    let c, B = n[t], C = r[t], E = o[t];
                    if (C.mode === T.TRIANGLES || C.mode === T.TRIANGLE_STRIP || C.mode === T.TRIANGLE_FAN || void 0 === C.mode)
                        !0 === (c = !0 === g.isSkinnedMesh ? new e.SkinnedMesh(B,E) : new e.Mesh(B,E)).isSkinnedMesh && c.normalizeSkinWeights(),
                        C.mode === T.TRIANGLE_STRIP ? c.geometry = (0,
                        a.toTrianglesDrawMode)(c.geometry, e.TriangleStripDrawMode) : C.mode === T.TRIANGLE_FAN && (c.geometry = (0,
                        a.toTrianglesDrawMode)(c.geometry, e.TriangleFanDrawMode));
                    else if (C.mode === T.LINES)
                        c = new e.LineSegments(B,E);
                    else if (C.mode === T.LINE_STRIP)
                        c = new e.Line(B,E);
                    else if (C.mode === T.LINE_LOOP)
                        c = new e.LineLoop(B,E);
                    else if (C.mode === T.POINTS)
                        c = new e.Points(B,E);
                    else
                        throw Error("THREE.GLTFLoader: Primitive mode unsupported: " + C.mode);
                    Object.keys(c.geometry.morphAttributes).length > 0 && function(A, e) {
                        if (A.updateMorphTargets(),
                        void 0 !== e.weights)
                            for (let a = 0, i = e.weights.length; a < i; a++)
                                A.morphTargetInfluences[a] = e.weights[a];
                        if (e.extras && Array.isArray(e.extras.targetNames)) {
                            let a = e.extras.targetNames;
                            if (A.morphTargetInfluences.length === a.length) {
                                A.morphTargetDictionary = {};
                                for (let e = 0, i = a.length; e < i; e++)
                                    A.morphTargetDictionary[a[e]] = e
                            } else
                                console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
                        }
                    }(c, g),
                    c.name = i.createUniqueName(g.name || "mesh_" + A),
                    H(c, g),
                    C.extensions && J(s, c, C),
                    i.assignFinalMaterial(c),
                    I.push(c)
                }
                for (let e = 0, a = I.length; e < a; e++)
                    i.associations.set(I[e], {
                        meshes: A,
                        primitives: e
                    });
                if (1 === I.length)
                    return g.extensions && J(s, I[0], g),
                    I[0];
                let c = new e.Group;
                g.extensions && J(s, c, g),
                i.associations.set(c, {
                    meshes: A
                });
                for (let A = 0, e = I.length; A < e; A++)
                    c.add(I[A]);
                return c
            })
        }
        loadCamera(A) {
            let a, i = this.json.cameras[A], t = i[i.type];
            return t ? ("perspective" === i.type ? a = new e.PerspectiveCamera(e.MathUtils.radToDeg(t.yfov),t.aspectRatio || 1,t.znear || 1,t.zfar || 2e6) : "orthographic" === i.type && (a = new e.OrthographicCamera(-t.xmag,t.xmag,t.ymag,-t.ymag,t.znear,t.zfar)),
            i.name && (a.name = this.createUniqueName(i.name)),
            H(a, i),
            Promise.resolve(a)) : void console.warn("THREE.GLTFLoader: Missing camera parameters.")
        }
        loadSkin(A) {
            let a = this.json.skins[A]
              , i = [];
            for (let A = 0, e = a.joints.length; A < e; A++)
                i.push(this._loadNodeShallow(a.joints[A]));
            return void 0 !== a.inverseBindMatrices ? i.push(this.getDependency("accessor", a.inverseBindMatrices)) : i.push(null),
            Promise.all(i).then(function(A) {
                let i = A.pop()
                  , t = []
                  , s = [];
                for (let g = 0, r = A.length; g < r; g++) {
                    let r = A[g];
                    if (r) {
                        t.push(r);
                        let A = new e.Matrix4;
                        null !== i && A.fromArray(i.array, 16 * g),
                        s.push(A)
                    } else
                        console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', a.joints[g])
                }
                return new e.Skeleton(t,s)
            })
        }
        loadAnimation(A) {
            let a = this.json
              , i = this
              , t = a.animations[A]
              , s = t.name ? t.name : "animation_" + A
              , g = []
              , r = []
              , o = []
              , n = []
              , I = [];
            for (let A = 0, e = t.channels.length; A < e; A++) {
                let e = t.channels[A]
                  , a = t.samplers[e.sampler]
                  , i = e.target
                  , s = i.node
                  , c = void 0 !== t.parameters ? t.parameters[a.input] : a.input
                  , B = void 0 !== t.parameters ? t.parameters[a.output] : a.output;
                void 0 !== i.node && (g.push(this.getDependency("node", s)),
                r.push(this.getDependency("accessor", c)),
                o.push(this.getDependency("accessor", B)),
                n.push(a),
                I.push(i))
            }
            return Promise.all([Promise.all(g), Promise.all(r), Promise.all(o), Promise.all(n), Promise.all(I)]).then(function(A) {
                let a = A[0]
                  , g = A[1]
                  , r = A[2]
                  , o = A[3]
                  , n = A[4]
                  , I = [];
                for (let A = 0, e = a.length; A < e; A++) {
                    let e = a[A]
                      , t = g[A]
                      , s = r[A]
                      , c = o[A]
                      , B = n[A];
                    if (void 0 === e)
                        continue;
                    e.updateMatrix && e.updateMatrix();
                    let C = i._createAnimationTracks(e, t, s, c, B);
                    if (C)
                        for (let A = 0; A < C.length; A++)
                            I.push(C[A])
                }
                let c = new e.AnimationClip(s,void 0,I);
                return H(c, t),
                c
            })
        }
        createNodeMesh(A) {
            let e = this.json
              , a = this
              , i = e.nodes[A];
            return void 0 === i.mesh ? null : a.getDependency("mesh", i.mesh).then(function(A) {
                let e = a._getNodeRef(a.meshCache, i.mesh, A);
                return void 0 !== i.weights && e.traverse(function(A) {
                    if (A.isMesh)
                        for (let e = 0, a = i.weights.length; e < a; e++)
                            A.morphTargetInfluences[e] = i.weights[e]
                }),
                e
            })
        }
        loadNode(A) {
            let a = this.json.nodes[A]
              , i = this._loadNodeShallow(A)
              , t = []
              , s = a.children || [];
            for (let A = 0, e = s.length; A < e; A++)
                t.push(this.getDependency("node", s[A]));
            let g = void 0 === a.skin ? Promise.resolve(null) : this.getDependency("skin", a.skin);
            return Promise.all([i, Promise.all(t), g]).then(function(A) {
                let a = A[0]
                  , i = A[1]
                  , t = A[2];
                null !== t && a.traverse(function(A) {
                    A.isSkinnedMesh && A.bind(t, P)
                });
                for (let A = 0, e = i.length; A < e; A++)
                    a.add(i[A]);
                if (void 0 !== a.userData.pivot && i.length > 0) {
                    let A = a.userData.pivot
                      , t = i[0];
                    a.pivot = new e.Vector3().fromArray(A),
                    a.position.x -= A[0],
                    a.position.y -= A[1],
                    a.position.z -= A[2],
                    t.position.set(0, 0, 0),
                    delete a.userData.pivot
                }
                return a
            })
        }
        _loadNodeShallow(A) {
            let a = this.json
              , i = this.extensions
              , t = this;
            if (void 0 !== this.nodeCache[A])
                return this.nodeCache[A];
            let s = a.nodes[A]
              , g = s.name ? t.createUniqueName(s.name) : ""
              , r = []
              , o = t._invokeOne(function(e) {
                return e.createNodeMesh && e.createNodeMesh(A)
            });
            return o && r.push(o),
            void 0 !== s.camera && r.push(t.getDependency("camera", s.camera).then(function(A) {
                return t._getNodeRef(t.cameraCache, s.camera, A)
            })),
            t._invokeAll(function(e) {
                return e.createNodeAttachment && e.createNodeAttachment(A)
            }).forEach(function(A) {
                r.push(A)
            }),
            this.nodeCache[A] = Promise.all(r).then(function(a) {
                let r;
                if ((r = !0 === s.isBone ? new e.Bone : a.length > 1 ? new e.Group : 1 === a.length ? a[0] : new e.Object3D) !== a[0])
                    for (let A = 0, e = a.length; A < e; A++)
                        r.add(a[A]);
                if (s.name && (r.userData.name = s.name,
                r.name = g),
                H(r, s),
                s.extensions && J(i, r, s),
                void 0 !== s.matrix) {
                    let A = new e.Matrix4;
                    A.fromArray(s.matrix),
                    r.applyMatrix4(A)
                } else
                    void 0 !== s.translation && r.position.fromArray(s.translation),
                    void 0 !== s.rotation && r.quaternion.fromArray(s.rotation),
                    void 0 !== s.scale && r.scale.fromArray(s.scale);
                if (t.associations.has(r)) {
                    if (void 0 !== s.mesh && t.meshCache.refs[s.mesh] > 1) {
                        let A = t.associations.get(r);
                        t.associations.set(r, {
                            ...A
                        })
                    }
                } else
                    t.associations.set(r, {});
                return t.associations.get(r).nodes = A,
                r
            }),
            this.nodeCache[A]
        }
        loadScene(A) {
            let a = this.extensions
              , i = this.json.scenes[A]
              , t = this
              , s = new e.Group;
            i.name && (s.name = t.createUniqueName(i.name)),
            H(s, i),
            i.extensions && J(a, s, i);
            let g = i.nodes || []
              , r = [];
            for (let A = 0, e = g.length; A < e; A++)
                r.push(t.getDependency("node", g[A]));
            return Promise.all(r).then(function(A) {
                for (let e = 0, a = A.length; e < a; e++) {
                    let a = A[e];
                    null !== a.parent ? s.add(function(A) {
                        let e = new Map
                          , a = new Map
                          , i = A.clone();
                        return function A(e, a, i) {
                            i(e, a);
                            for (let t = 0; t < e.children.length; t++)
                                A(e.children[t], a.children[t], i)
                        }(A, i, function(A, i) {
                            e.set(i, A),
                            a.set(A, i)
                        }),
                        i.traverse(function(A) {
                            if (!A.isSkinnedMesh)
                                return;
                            let i = e.get(A)
                              , t = i.skeleton.bones;
                            A.skeleton = i.skeleton.clone(),
                            A.bindMatrix.copy(i.bindMatrix),
                            A.skeleton.bones = t.map(function(A) {
                                return a.get(A)
                            }),
                            A.bind(A.skeleton, A.bindMatrix)
                        }),
                        i
                    }(a)) : s.add(a)
                }
                return t.associations = (A => {
                    let a = new Map;
                    for (let[A,i] of t.associations)
                        (A instanceof e.Material || A instanceof e.Texture) && a.set(A, i);
                    return A.traverse(A => {
                        let e = t.associations.get(A);
                        null != e && a.set(A, e)
                    }
                    ),
                    a
                }
                )(s),
                s
            })
        }
        _createAnimationTracks(A, a, i, t, s) {
            let g, r = [], o = A.name ? A.name : A.uuid, n = [];
            function I(A) {
                A.morphTargetInfluences && n.push(A.name ? A.name : A.uuid)
            }
            switch (v[s.path] === v.weights ? (I(A),
            A.isGroup && A.children.forEach(I)) : n.push(o),
            v[s.path]) {
            case v.weights:
                g = e.NumberKeyframeTrack;
                break;
            case v.rotation:
                g = e.QuaternionKeyframeTrack;
                break;
            case v.translation:
            case v.scale:
                g = e.VectorKeyframeTrack;
                break;
            default:
                g = 1 === i.itemSize ? e.NumberKeyframeTrack : e.VectorKeyframeTrack
            }
            let c = void 0 !== t.interpolation ? _[t.interpolation] : e.InterpolateLinear
              , B = this._getArrayFromAccessor(i);
            for (let A = 0, e = n.length; A < e; A++) {
                let e = new g(n[A] + "." + v[s.path],a.array,B,c);
                "CUBICSPLINE" === t.interpolation && this._createCubicSplineTrackInterpolant(e),
                r.push(e)
            }
            return r
        }
        _getArrayFromAccessor(A) {
            let e = A.array;
            if (A.normalized) {
                let A = j(e.constructor)
                  , a = new Float32Array(e.length);
                for (let i = 0, t = e.length; i < t; i++)
                    a[i] = e[i] * A;
                e = a
            }
            return e
        }
        _createCubicSplineTrackInterpolant(A) {
            A.createInterpolant = function(A) {
                return new (this instanceof e.QuaternionKeyframeTrack ? x : S)(this.times,this.values,this.getValueSize() / 3,A)
            }
            ,
            A.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0
        }
    }
    function Y(A, a, i) {
        let t = a.attributes
          , s = [];
        for (let e in t) {
            let a = q[e] || e.toLowerCase();
            a in A.attributes || s.push(function(e, a) {
                return i.getDependency("accessor", e).then(function(e) {
                    A.setAttribute(a, e)
                })
            }(t[e], a))
        }
        if (void 0 !== a.indices && !A.index) {
            let e = i.getDependency("accessor", a.indices).then(function(e) {
                A.setIndex(e)
            });
            s.push(e)
        }
        return e.ColorManagement.workingColorSpace !== e.LinearSRGBColorSpace && "COLOR_0" in t && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${e.ColorManagement.workingColorSpace}" not supported.`),
        H(A, a),
        !function(A, a, i) {
            let t = a.attributes
              , s = new e.Box3;
            if (void 0 === t.POSITION)
                return;
            {
                let A = i.json.accessors[t.POSITION]
                  , a = A.min
                  , g = A.max;
                if (void 0 === a || void 0 === g)
                    return console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                if (s.set(new e.Vector3(a[0],a[1],a[2]), new e.Vector3(g[0],g[1],g[2])),
                A.normalized) {
                    let e = j(L[A.componentType]);
                    s.min.multiplyScalar(e),
                    s.max.multiplyScalar(e)
                }
            }
            let g = a.targets;
            if (void 0 !== g) {
                let A = new e.Vector3
                  , a = new e.Vector3;
                for (let e = 0, t = g.length; e < t; e++) {
                    let t = g[e];
                    if (void 0 !== t.POSITION) {
                        let e = i.json.accessors[t.POSITION]
                          , s = e.min
                          , g = e.max;
                        if (void 0 !== s && void 0 !== g) {
                            if (a.setX(Math.max(Math.abs(s[0]), Math.abs(g[0]))),
                            a.setY(Math.max(Math.abs(s[1]), Math.abs(g[1]))),
                            a.setZ(Math.max(Math.abs(s[2]), Math.abs(g[2]))),
                            e.normalized) {
                                let A = j(L[e.componentType]);
                                a.multiplyScalar(A)
                            }
                            A.max(a)
                        } else
                            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                    }
                }
                s.expandByVector(A)
            }
            A.boundingBox = s;
            let r = new e.Sphere;
            s.getCenter(r.center),
            r.radius = s.min.distanceTo(s.max) / 2,
            A.boundingSphere = r
        }(A, a, i),
        Promise.all(s).then(function() {
            return void 0 !== a.targets ? function(A, e, a) {
                let i = !1
                  , t = !1
                  , s = !1;
                for (let A = 0, a = e.length; A < a; A++) {
                    let a = e[A];
                    if (void 0 !== a.POSITION && (i = !0),
                    void 0 !== a.NORMAL && (t = !0),
                    void 0 !== a.COLOR_0 && (s = !0),
                    i && t && s)
                        break
                }
                if (!i && !t && !s)
                    return Promise.resolve(A);
                let g = []
                  , r = []
                  , o = [];
                for (let n = 0, I = e.length; n < I; n++) {
                    let I = e[n];
                    if (i) {
                        let e = void 0 !== I.POSITION ? a.getDependency("accessor", I.POSITION) : A.attributes.position;
                        g.push(e)
                    }
                    if (t) {
                        let e = void 0 !== I.NORMAL ? a.getDependency("accessor", I.NORMAL) : A.attributes.normal;
                        r.push(e)
                    }
                    if (s) {
                        let e = void 0 !== I.COLOR_0 ? a.getDependency("accessor", I.COLOR_0) : A.attributes.color;
                        o.push(e)
                    }
                }
                return Promise.all([Promise.all(g), Promise.all(r), Promise.all(o)]).then(function(e) {
                    let a = e[0]
                      , g = e[1]
                      , r = e[2];
                    return i && (A.morphAttributes.position = a),
                    t && (A.morphAttributes.normal = g),
                    s && (A.morphAttributes.color = r),
                    A.morphTargetsRelative = !0,
                    A
                })
            }(A, a.targets, i) : A
        })
    }
    A.s(["GLTFLoader", 0, i], 223490)
}
, 135702, 785110, A => {
    "use strict";
    let e, a, i, t;
    var s = A.i(190072);
    class g {
        constructor(A=4) {
            this.pool = A,
            this.queue = [],
            this.workers = [],
            this.workersResolve = [],
            this.workerStatus = 0,
            this.workerCreator = null
        }
        _initWorker(A) {
            if (!this.workers[A]) {
                let e = this.workerCreator();
                e.addEventListener("message", this._onMessage.bind(this, A)),
                this.workers[A] = e
            }
        }
        _getIdleWorker() {
            for (let A = 0; A < this.pool; A++)
                if (!(this.workerStatus & 1 << A))
                    return A;
            return -1
        }
        _onMessage(A, e) {
            let a = this.workersResolve[A];
            if (a && a(e),
            this.queue.length) {
                let {resolve: e, msg: a, transfer: i} = this.queue.shift();
                this.workersResolve[A] = e,
                this.workers[A].postMessage(a, i)
            } else
                this.workerStatus ^= 1 << A
        }
        setWorkerCreator(A) {
            this.workerCreator = A
        }
        setWorkerLimit(A) {
            this.pool = A
        }
        postMessage(A, e) {
            return new Promise(a => {
                let i = this._getIdleWorker();
                -1 !== i ? (this._initWorker(i),
                this.workerStatus |= 1 << i,
                this.workersResolve[i] = a,
                this.workers[i].postMessage(A, e)) : this.queue.push({
                    resolve: a,
                    msg: A,
                    transfer: e
                })
            }
            )
        }
        dispose() {
            this.workers.forEach(A => A.terminate()),
            this.workersResolve.length = 0,
            this.workers.length = 0,
            this.queue.length = 0,
            this.workerStatus = 0
        }
    }
    class r {
        constructor(A, e, a, i) {
            this._dataView = void 0,
            this._littleEndian = void 0,
            this._offset = void 0,
            this._dataView = new DataView(A.buffer,A.byteOffset + e,a),
            this._littleEndian = i,
            this._offset = 0
        }
        _nextUint8() {
            let A = this._dataView.getUint8(this._offset);
            return this._offset += 1,
            A
        }
        _nextUint16() {
            let A = this._dataView.getUint16(this._offset, this._littleEndian);
            return this._offset += 2,
            A
        }
        _nextUint32() {
            let A = this._dataView.getUint32(this._offset, this._littleEndian);
            return this._offset += 4,
            A
        }
        _nextUint64() {
            let A = this._dataView.getUint32(this._offset, this._littleEndian) + 0x100000000 * this._dataView.getUint32(this._offset + 4, this._littleEndian);
            return this._offset += 8,
            A
        }
        _nextInt32() {
            let A = this._dataView.getInt32(this._offset, this._littleEndian);
            return this._offset += 4,
            A
        }
        _nextUint8Array(A) {
            let e = new Uint8Array(this._dataView.buffer,this._dataView.byteOffset + this._offset,A);
            return this._offset += A,
            e
        }
        _skip(A) {
            return this._offset += A,
            this
        }
        _scan(A, e=0) {
            let a = this._offset
              , i = 0;
            for (; this._dataView.getUint8(this._offset) !== e && i < A; )
                i++,
                this._offset++;
            return i < A && this._offset++,
            new Uint8Array(this._dataView.buffer,this._dataView.byteOffset + a,i)
        }
    }
    new Uint8Array([0]);
    let o = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
    function n(A) {
        return (new TextDecoder).decode(A)
    }
    var I = A.i(467034);
    let c = {
        env: {
            emscripten_notify_memory_growth: function(A) {
                i = new Uint8Array(a.exports.memory.buffer)
            }
        }
    };
    class B {
        init() {
            return e || (e = "u" > typeof fetch ? fetch("data:application/wasm;base64," + C).then(A => A.arrayBuffer()).then(A => WebAssembly.instantiate(A, c)).then(this._init) : WebAssembly.instantiate(I.Buffer.from(C, "base64"), c).then(this._init))
        }
        _init(A) {
            a = A.instance,
            c.env.emscripten_notify_memory_growth(0)
        }
        decode(A, e=0) {
            if (!a)
                throw Error("ZSTDDecoder: Await .init() before decoding.");
            let t = A.byteLength
              , s = a.exports.malloc(t);
            i.set(A, s),
            e = e || Number(a.exports.ZSTD_findDecompressedSize(s, t));
            let g = a.exports.malloc(e)
              , r = a.exports.ZSTD_decompress(g, e, s, t)
              , o = i.slice(g, g + r);
            return a.exports.free(s),
            a.exports.free(g),
            o
        }
    }
    let C = "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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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";
    s.SRGBTransfer,
    s.LinearTransfer,
    s.LinearTransfer,
    s.ColorManagement.spaces[s.SRGBColorSpace],
    s.SRGBColorSpace;
    let E = new A.U(A.r(623564)).toString()
      , b = new A.U(A.r(777884)).toString()
      , Q = new WeakMap
      , h = 0;
    class l extends s.Loader {
        constructor(A) {
            super(A),
            this.transcoderPath = "",
            this.transcoderBinary = null,
            this.transcoderPending = null,
            this.workerPool = new g,
            this.workerSourceURL = "",
            this.workerConfig = null,
            "u" > typeof MSC_TRANSCODER && console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')
        }
        setTranscoderPath(A) {
            return this.transcoderPath = A,
            this
        }
        setWorkerLimit(A) {
            return this.workerPool.setWorkerLimit(A),
            this
        }
        async detectSupportAsync(A) {
            return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),
            await A.init(),
            this.detectSupport(A)
        }
        detectSupport(A) {
            return !0 === A.isWebGPURenderer ? this.workerConfig = {
                astcSupported: A.hasFeature("texture-compression-astc"),
                astcHDRSupported: !1,
                etc1Supported: A.hasFeature("texture-compression-etc1"),
                etc2Supported: A.hasFeature("texture-compression-etc2"),
                dxtSupported: A.hasFeature("texture-compression-s3tc"),
                bptcSupported: A.hasFeature("texture-compression-bc"),
                pvrtcSupported: A.hasFeature("texture-compression-pvrtc")
            } : (this.workerConfig = {
                astcSupported: A.extensions.has("WEBGL_compressed_texture_astc"),
                astcHDRSupported: A.extensions.has("WEBGL_compressed_texture_astc") && A.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),
                etc1Supported: A.extensions.has("WEBGL_compressed_texture_etc1"),
                etc2Supported: A.extensions.has("WEBGL_compressed_texture_etc"),
                dxtSupported: A.extensions.has("WEBGL_compressed_texture_s3tc"),
                bptcSupported: A.extensions.has("EXT_texture_compression_bptc"),
                pvrtcSupported: A.extensions.has("WEBGL_compressed_texture_pvrtc") || A.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")
            },
            "u" > typeof navigator && void 0 !== navigator.platform && void 0 !== navigator.userAgent && navigator.platform.indexOf("Linux") >= 0 && 0 > navigator.userAgent.indexOf("Android") && this.workerConfig.astcSupported && this.workerConfig.etc2Supported && this.workerConfig.bptcSupported && this.workerConfig.dxtSupported && (this.workerConfig.astcSupported = !1,
            this.workerConfig.etc1Supported = !1,
            this.workerConfig.etc2Supported = !1)),
            this
        }
        init() {
            if (!this.transcoderPending) {
                let A, e, a = new s.FileLoader(this.manager);
                a.setWithCredentials(this.withCredentials);
                let i = new s.FileLoader(this.manager);
                i.setWithCredentials(this.withCredentials),
                i.setResponseType("arraybuffer"),
                "" === this.transcoderPath ? (A = a.loadAsync(b),
                e = i.loadAsync(E)) : (a.setPath(this.transcoderPath),
                A = a.loadAsync("basis_transcoder.js"),
                i.setPath(this.transcoderPath),
                e = i.loadAsync("basis_transcoder.wasm")),
                this.transcoderPending = Promise.all([A, e]).then( ([A,e]) => {
                    let a = l.BasisWorker.toString()
                      , i = ["/* constants */", "let _EngineFormat = " + JSON.stringify(l.EngineFormat), "let _EngineType = " + JSON.stringify(l.EngineType), "let _TranscoderFormat = " + JSON.stringify(l.TranscoderFormat), "let _BasisFormat = " + JSON.stringify(l.BasisFormat), "/* basis_transcoder.js */", A, "/* worker */", a.substring(a.indexOf("{") + 1, a.lastIndexOf("}"))].join("\n");
                    this.workerSourceURL = URL.createObjectURL(new Blob([i])),
                    this.transcoderBinary = e,
                    this.workerPool.setWorkerCreator( () => {
                        let A = new Worker(this.workerSourceURL)
                          , e = this.transcoderBinary.slice(0);
                        return A.postMessage({
                            type: "init",
                            config: this.workerConfig,
                            transcoderBinary: e
                        }, [e]),
                        A
                    }
                    )
                }
                ),
                h > 0 && console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),
                h++
            }
            return this.transcoderPending
        }
        load(A, e, a, i) {
            if (null === this.workerConfig)
                throw Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
            let t = new s.FileLoader(this.manager);
            t.setPath(this.path),
            t.setCrossOrigin(this.crossOrigin),
            t.setWithCredentials(this.withCredentials),
            t.setRequestHeader(this.requestHeader),
            t.setResponseType("arraybuffer"),
            t.load(A, A => {
                this.parse(A, e, i)
            }
            , a, i)
        }
        parse(A, e, a) {
            if (null === this.workerConfig)
                throw Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
            if (Q.has(A))
                return Q.get(A).promise.then(e).catch(a);
            this._createTexture(A).then(A => e ? e(A) : null).catch(a)
        }
        _createTextureFrom(A, e) {
            let a, {type: i, error: t, data: {faces: g, width: r, height: o, format: n, type: I, dfdFlags: c}} = A;
            if ("error" === i)
                return Promise.reject(t);
            if (6 === e.faceCount)
                a = new s.CompressedCubeTexture(g,n,I);
            else {
                let A = g[0].mipmaps;
                a = e.layerCount > 1 ? new s.CompressedArrayTexture(A,r,o,e.layerCount,n,I) : new s.CompressedTexture(A,r,o,n,I)
            }
            return a.minFilter = 1 === g[0].mipmaps.length ? s.LinearFilter : s.LinearMipmapLinearFilter,
            a.magFilter = s.LinearFilter,
            a.generateMipmaps = !1,
            a.needsUpdate = !0,
            a.colorSpace = D(e),
            a.premultiplyAlpha = !!(1 & c),
            a
        }
        async _createTexture(A, e={}) {
            let a = function(A) {
                let e = new Uint8Array(A.buffer,A.byteOffset,o.length);
                if (e[0] !== o[0] || e[1] !== o[1] || e[2] !== o[2] || e[3] !== o[3] || e[4] !== o[4] || e[5] !== o[5] || e[6] !== o[6] || e[7] !== o[7] || e[8] !== o[8] || e[9] !== o[9] || e[10] !== o[10] || e[11] !== o[11])
                    throw Error("Missing KTX 2.0 identifier.");
                let a = {
                    vkFormat: 0,
                    typeSize: 1,
                    pixelWidth: 0,
                    pixelHeight: 0,
                    pixelDepth: 0,
                    layerCount: 0,
                    faceCount: 1,
                    levelCount: 0,
                    supercompressionScheme: 0,
                    levels: [],
                    dataFormatDescriptor: [{
                        vendorId: 0,
                        descriptorType: 0,
                        versionNumber: 2,
                        colorModel: 0,
                        colorPrimaries: 1,
                        transferFunction: 2,
                        flags: 0,
                        texelBlockDimension: [0, 0, 0, 0],
                        bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0],
                        samples: []
                    }],
                    keyValue: {},
                    globalData: null
                }
                  , i = 17 * Uint32Array.BYTES_PER_ELEMENT
                  , t = new r(A,o.length,i,!0);
                a.vkFormat = t._nextUint32(),
                a.typeSize = t._nextUint32(),
                a.pixelWidth = t._nextUint32(),
                a.pixelHeight = t._nextUint32(),
                a.pixelDepth = t._nextUint32(),
                a.layerCount = t._nextUint32(),
                a.faceCount = t._nextUint32(),
                a.levelCount = t._nextUint32(),
                a.supercompressionScheme = t._nextUint32();
                let s = t._nextUint32()
                  , g = t._nextUint32()
                  , I = t._nextUint32()
                  , c = t._nextUint32()
                  , B = t._nextUint64()
                  , C = t._nextUint64()
                  , E = 3 * Math.max(a.levelCount, 1) * 8
                  , b = new r(A,o.length + i,E,!0);
                for (let e = 0, i = Math.max(a.levelCount, 1); e < i; e++)
                    a.levels.push({
                        levelData: new Uint8Array(A.buffer,A.byteOffset + b._nextUint64(),b._nextUint64()),
                        uncompressedByteLength: b._nextUint64()
                    });
                let Q = new r(A,s,g,!0);
                Q._skip(4);
                let h = Q._nextUint16()
                  , l = Q._nextUint16()
                  , d = Q._nextUint16()
                  , p = Q._nextUint16()
                  , f = {
                    vendorId: h,
                    descriptorType: l,
                    versionNumber: d,
                    colorModel: Q._nextUint8(),
                    colorPrimaries: Q._nextUint8(),
                    transferFunction: Q._nextUint8(),
                    flags: Q._nextUint8(),
                    texelBlockDimension: [Q._nextUint8(), Q._nextUint8(), Q._nextUint8(), Q._nextUint8()],
                    bytesPlane: [Q._nextUint8(), Q._nextUint8(), Q._nextUint8(), Q._nextUint8(), Q._nextUint8(), Q._nextUint8(), Q._nextUint8(), Q._nextUint8()],
                    samples: []
                }
                  , m = (p / 4 - 6) / 4;
                for (let A = 0; A < m; A++) {
                    let e = {
                        bitOffset: Q._nextUint16(),
                        bitLength: Q._nextUint8(),
                        channelType: Q._nextUint8(),
                        samplePosition: [Q._nextUint8(), Q._nextUint8(), Q._nextUint8(), Q._nextUint8()],
                        sampleLower: -1 / 0,
                        sampleUpper: 1 / 0
                    };
                    64 & e.channelType ? (e.sampleLower = Q._nextInt32(),
                    e.sampleUpper = Q._nextInt32()) : (e.sampleLower = Q._nextUint32(),
                    e.sampleUpper = Q._nextUint32()),
                    f.samples[A] = e
                }
                a.dataFormatDescriptor.length = 0,
                a.dataFormatDescriptor.push(f);
                let u = new r(A,I,c,!0);
                for (; u._offset < c; ) {
                    let A = u._nextUint32()
                      , e = u._scan(A)
                      , i = n(e);
                    if (a.keyValue[i] = u._nextUint8Array(A - e.byteLength - 1),
                    i.match(/^ktx/i)) {
                        let A = n(a.keyValue[i]);
                        a.keyValue[i] = A.substring(0, A.lastIndexOf("\0"))
                    }
                    u._skip(A % 4 ? 4 - A % 4 : 0)
                }
                if (C <= 0)
                    return a;
                let D = new r(A,B,C,!0)
                  , F = D._nextUint16()
                  , w = D._nextUint16()
                  , R = D._nextUint32()
                  , k = D._nextUint32()
                  , G = D._nextUint32()
                  , S = D._nextUint32()
                  , y = [];
                for (let A = 0, e = Math.max(a.levelCount, 1); A < e; A++)
                    y.push({
                        imageFlags: D._nextUint32(),
                        rgbSliceByteOffset: D._nextUint32(),
                        rgbSliceByteLength: D._nextUint32(),
                        alphaSliceByteOffset: D._nextUint32(),
                        alphaSliceByteLength: D._nextUint32()
                    });
                let x = B + D._offset
                  , T = x + R
                  , L = T + k
                  , U = L + G;
                return a.globalData = {
                    endpointCount: F,
                    selectorCount: w,
                    imageDescs: y,
                    endpointsData: new Uint8Array(A.buffer,A.byteOffset + x,R),
                    selectorsData: new Uint8Array(A.buffer,A.byteOffset + T,k),
                    tablesData: new Uint8Array(A.buffer,A.byteOffset + L,G),
                    extendedData: new Uint8Array(A.buffer,A.byteOffset + U,S)
                },
                a
            }(new Uint8Array(A))
              , i = 1000066e3 === a.vkFormat && 167 === a.dataFormatDescriptor[0].colorModel;
            if (!(0 === a.vkFormat || i && !this.workerConfig.astcHDRSupported))
                return u(a);
            let t = this.init().then( () => this.workerPool.postMessage({
                type: "transcode",
                buffer: A,
                taskConfig: e
            }, [A])).then(A => this._createTextureFrom(A.data, a));
            return Q.set(A, {
                promise: t
            }),
            t
        }
        dispose() {
            this.workerPool.dispose(),
            this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL),
            h--
        }
    }
    l.BasisFormat = {
        ETC1S: 0,
        UASTC: 1,
        UASTC_HDR: 2
    },
    l.TranscoderFormat = {
        ETC1: 0,
        ETC2: 1,
        BC1: 2,
        BC3: 3,
        BC4: 4,
        BC5: 5,
        BC7_M6_OPAQUE_ONLY: 6,
        BC7_M5: 7,
        PVRTC1_4_RGB: 8,
        PVRTC1_4_RGBA: 9,
        ASTC_4x4: 10,
        ATC_RGB: 11,
        ATC_RGBA_INTERPOLATED_ALPHA: 12,
        RGBA32: 13,
        RGB565: 14,
        BGR565: 15,
        RGBA4444: 16,
        BC6H: 22,
        RGB_HALF: 24,
        RGBA_HALF: 25
    },
    l.EngineFormat = {
        RGBAFormat: s.RGBAFormat,
        RGBA_ASTC_4x4_Format: s.RGBA_ASTC_4x4_Format,
        RGB_BPTC_UNSIGNED_Format: s.RGB_BPTC_UNSIGNED_Format,
        RGBA_BPTC_Format: s.RGBA_BPTC_Format,
        RGBA_ETC2_EAC_Format: s.RGBA_ETC2_EAC_Format,
        RGBA_PVRTC_4BPPV1_Format: s.RGBA_PVRTC_4BPPV1_Format,
        RGBA_S3TC_DXT5_Format: s.RGBA_S3TC_DXT5_Format,
        RGB_ETC1_Format: s.RGB_ETC1_Format,
        RGB_ETC2_Format: s.RGB_ETC2_Format,
        RGB_PVRTC_4BPPV1_Format: s.RGB_PVRTC_4BPPV1_Format,
        RGBA_S3TC_DXT1_Format: s.RGBA_S3TC_DXT1_Format
    },
    l.EngineType = {
        UnsignedByteType: s.UnsignedByteType,
        HalfFloatType: s.HalfFloatType,
        FloatType: s.FloatType
    },
    l.BasisWorker = function() {
        let A, e, a, i = _EngineFormat, t = _EngineType, s = _TranscoderFormat, g = _BasisFormat;
        self.addEventListener("message", function(i) {
            let s = i.data;
            switch (s.type) {
            case "init":
                var r;
                A = s.config,
                r = s.transcoderBinary,
                e = new Promise(A => {
                    BASIS(a = {
                        wasmBinary: r,
                        onRuntimeInitialized: A
                    })
                }
                ).then( () => {
                    a.initializeBasis(),
                    void 0 === a.KTX2File && console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")
                }
                );
                break;
            case "transcode":
                e.then( () => {
                    try {
                        let {faces: e, buffers: i, width: r, height: I, hasAlpha: c, format: B, type: C, dfdFlags: E} = function(e) {
                            let i, s = new a.KTX2File(new Uint8Array(e));
                            function r() {
                                s.close(),
                                s.delete()
                            }
                            if (!s.isValid())
                                throw r(),
                                Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");
                            if (s.isUASTC())
                                i = g.UASTC;
                            else if (s.isETC1S())
                                i = g.ETC1S;
                            else if (s.isHDR())
                                i = g.UASTC_HDR;
                            else
                                throw Error("THREE.KTX2Loader: Unknown Basis encoding");
                            let I = s.getWidth()
                              , c = s.getHeight()
                              , B = s.getLayers() || 1
                              , C = s.getLevels()
                              , E = s.getFaces()
                              , b = s.getHasAlpha()
                              , Q = s.getDFDFlags()
                              , {transcoderFormat: h, engineFormat: l, engineType: d} = function(e, a, i, t) {
                                let s = o[e];
                                for (let g = 0; g < s.length; g++) {
                                    let r = s[g];
                                    if (r.if && !A[r.if] || !r.basisFormat.includes(e) || t && r.transcoderFormat.length < 2 || r.needsPowerOfTwo && !(n(a) && n(i)))
                                        continue;
                                    let o = r.transcoderFormat[+!!t]
                                      , I = r.engineFormat[+!!t];
                                    return {
                                        transcoderFormat: o,
                                        engineFormat: I,
                                        engineType: r.engineType[0]
                                    }
                                }
                                throw Error("THREE.KTX2Loader: Failed to identify transcoding target.")
                            }(i, I, c, b);
                            if (!I || !c || !C)
                                throw r(),
                                Error("THREE.KTX2Loader:	Invalid texture");
                            if (!s.startTranscoding())
                                throw r(),
                                Error("THREE.KTX2Loader: .startTranscoding failed");
                            let p = []
                              , f = [];
                            for (let A = 0; A < E; A++) {
                                let e = [];
                                for (let a = 0; a < C; a++) {
                                    let i, g, o = [];
                                    for (let e = 0; e < B; e++) {
                                        let n = s.getImageLevelInfo(a, e, A);
                                        0 === A && 0 === a && 0 === e && (n.origWidth % 4 != 0 || n.origHeight % 4 != 0) && console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),
                                        C > 1 ? (i = n.origWidth,
                                        g = n.origHeight) : (i = n.width,
                                        g = n.height);
                                        let I = new Uint8Array(s.getImageTranscodedSizeInBytes(a, e, 0, h))
                                          , c = s.transcodeImage(I, a, e, A, h, 0, -1, -1);
                                        if (d === t.HalfFloatType && (I = new Uint16Array(I.buffer,I.byteOffset,I.byteLength / Uint16Array.BYTES_PER_ELEMENT)),
                                        !c)
                                            throw r(),
                                            Error("THREE.KTX2Loader: .transcodeImage failed.");
                                        o.push(I)
                                    }
                                    let n = function(A) {
                                        if (1 === A.length)
                                            return A[0];
                                        let e = 0;
                                        for (let a = 0; a < A.length; a++)
                                            e += A[a].byteLength;
                                        let a = new Uint8Array(e)
                                          , i = 0;
                                        for (let e = 0; e < A.length; e++) {
                                            let t = A[e];
                                            a.set(t, i),
                                            i += t.byteLength
                                        }
                                        return a
                                    }(o);
                                    e.push({
                                        data: n,
                                        width: i,
                                        height: g
                                    }),
                                    f.push(n.buffer)
                                }
                                p.push({
                                    mipmaps: e,
                                    width: I,
                                    height: c,
                                    format: l,
                                    type: d
                                })
                            }
                            return r(),
                            {
                                faces: p,
                                buffers: f,
                                width: I,
                                height: c,
                                hasAlpha: b,
                                dfdFlags: Q,
                                format: l,
                                type: d
                            }
                        }(s.buffer);
                        self.postMessage({
                            type: "transcode",
                            id: s.id,
                            data: {
                                faces: e,
                                width: r,
                                height: I,
                                hasAlpha: c,
                                format: B,
                                type: C,
                                dfdFlags: E
                            }
                        }, i)
                    } catch (A) {
                        console.error(A),
                        self.postMessage({
                            type: "error",
                            id: s.id,
                            error: A.message
                        })
                    }
                }
                )
            }
        });
        let r = [{
            if: "astcSupported",
            basisFormat: [g.UASTC],
            transcoderFormat: [s.ASTC_4x4, s.ASTC_4x4],
            engineFormat: [i.RGBA_ASTC_4x4_Format, i.RGBA_ASTC_4x4_Format],
            engineType: [t.UnsignedByteType],
            priorityETC1S: 1 / 0,
            priorityUASTC: 1,
            needsPowerOfTwo: !1
        }, {
            if: "bptcSupported",
            basisFormat: [g.ETC1S, g.UASTC],
            transcoderFormat: [s.BC7_M5, s.BC7_M5],
            engineFormat: [i.RGBA_BPTC_Format, i.RGBA_BPTC_Format],
            engineType: [t.UnsignedByteType],
            priorityETC1S: 3,
            priorityUASTC: 2,
            needsPowerOfTwo: !1
        }, {
            if: "dxtSupported",
            basisFormat: [g.ETC1S, g.UASTC],
            transcoderFormat: [s.BC1, s.BC3],
            engineFormat: [i.RGBA_S3TC_DXT1_Format, i.RGBA_S3TC_DXT5_Format],
            engineType: [t.UnsignedByteType],
            priorityETC1S: 4,
            priorityUASTC: 5,
            needsPowerOfTwo: !1
        }, {
            if: "etc2Supported",
            basisFormat: [g.ETC1S, g.UASTC],
            transcoderFormat: [s.ETC1, s.ETC2],
            engineFormat: [i.RGB_ETC2_Format, i.RGBA_ETC2_EAC_Format],
            engineType: [t.UnsignedByteType],
            priorityETC1S: 1,
            priorityUASTC: 3,
            needsPowerOfTwo: !1
        }, {
            if: "etc1Supported",
            basisFormat: [g.ETC1S, g.UASTC],
            transcoderFormat: [s.ETC1],
            engineFormat: [i.RGB_ETC1_Format],
            engineType: [t.UnsignedByteType],
            priorityETC1S: 2,
            priorityUASTC: 4,
            needsPowerOfTwo: !1
        }, {
            if: "pvrtcSupported",
            basisFormat: [g.ETC1S, g.UASTC],
            transcoderFormat: [s.PVRTC1_4_RGB, s.PVRTC1_4_RGBA],
            engineFormat: [i.RGB_PVRTC_4BPPV1_Format, i.RGBA_PVRTC_4BPPV1_Format],
            engineType: [t.UnsignedByteType],
            priorityETC1S: 5,
            priorityUASTC: 6,
            needsPowerOfTwo: !0
        }, {
            if: "bptcSupported",
            basisFormat: [g.UASTC_HDR],
            transcoderFormat: [s.BC6H],
            engineFormat: [i.RGB_BPTC_UNSIGNED_Format],
            engineType: [t.HalfFloatType],
            priorityHDR: 1,
            needsPowerOfTwo: !1
        }, {
            basisFormat: [g.ETC1S, g.UASTC],
            transcoderFormat: [s.RGBA32, s.RGBA32],
            engineFormat: [i.RGBAFormat, i.RGBAFormat],
            engineType: [t.UnsignedByteType, t.UnsignedByteType],
            priorityETC1S: 100,
            priorityUASTC: 100,
            needsPowerOfTwo: !1
        }, {
            basisFormat: [g.UASTC_HDR],
            transcoderFormat: [s.RGBA_HALF],
            engineFormat: [i.RGBAFormat],
            engineType: [t.HalfFloatType],
            priorityHDR: 100,
            needsPowerOfTwo: !1
        }]
          , o = {
            [g.ETC1S]: r.filter(A => A.basisFormat.includes(g.ETC1S)).sort( (A, e) => A.priorityETC1S - e.priorityETC1S),
            [g.UASTC]: r.filter(A => A.basisFormat.includes(g.UASTC)).sort( (A, e) => A.priorityUASTC - e.priorityUASTC),
            [g.UASTC_HDR]: r.filter(A => A.basisFormat.includes(g.UASTC_HDR)).sort( (A, e) => A.priorityHDR - e.priorityHDR)
        };
        function n(A) {
            return A <= 2 || (A & A - 1) == 0 && 0 !== A
        }
    }
    ;
    let d = new Set([s.RGBAFormat, s.RGBFormat, s.RGFormat, s.RedFormat])
      , p = new Set([91])
      , f = {
        109: s.RGBAFormat,
        103: s.RGFormat,
        100: s.RedFormat,
        97: s.RGBAFormat,
        83: s.RGFormat,
        76: s.RedFormat,
        91: s.RGBAFormat,
        43: s.RGBAFormat,
        37: s.RGBAFormat,
        22: s.RGFormat,
        16: s.RGFormat,
        15: s.RedFormat,
        9: s.RedFormat,
        123: s.RGBFormat,
        122: s.RGBFormat,
        152: s.RGBA_ETC2_EAC_Format,
        148: s.RGB_ETC2_Format,
        153: s.R11_EAC_Format,
        154: s.SIGNED_R11_EAC_Format,
        155: s.RG11_EAC_Format,
        156: s.SIGNED_RG11_EAC_Format,
        1000066e3: s.RGBA_ASTC_4x4_Format,
        158: s.RGBA_ASTC_4x4_Format,
        157: s.RGBA_ASTC_4x4_Format,
        0x3b9bcbd4: s.RGBA_ASTC_6x6_Format,
        166: s.RGBA_ASTC_6x6_Format,
        165: s.RGBA_ASTC_6x6_Format,
        134: s.RGBA_S3TC_DXT1_Format,
        133: s.RGBA_S3TC_DXT1_Format,
        132: s.RGB_S3TC_DXT1_Format,
        131: s.RGB_S3TC_DXT1_Format,
        138: s.RGBA_S3TC_DXT5_Format,
        137: s.RGBA_S3TC_DXT5_Format,
        140: s.SIGNED_RED_RGTC1_Format,
        139: s.RED_RGTC1_Format,
        142: s.SIGNED_RED_GREEN_RGTC2_Format,
        141: s.RED_GREEN_RGTC2_Format,
        146: s.RGBA_BPTC_Format,
        145: s.RGBA_BPTC_Format,
        0x3b9b9cf5: s.RGBA_PVRTC_4BPPV1_Format,
        0x3b9b9cf1: s.RGBA_PVRTC_4BPPV1_Format,
        0x3b9b9cf4: s.RGBA_PVRTC_2BPPV1_Format,
        1000054e3: s.RGBA_PVRTC_2BPPV1_Format
    }
      , m = {
        109: s.FloatType,
        103: s.FloatType,
        100: s.FloatType,
        97: s.HalfFloatType,
        83: s.HalfFloatType,
        76: s.HalfFloatType,
        91: s.UnsignedShortType,
        43: s.UnsignedByteType,
        37: s.UnsignedByteType,
        22: s.UnsignedByteType,
        16: s.UnsignedByteType,
        15: s.UnsignedByteType,
        9: s.UnsignedByteType,
        123: s.UnsignedInt5999Type,
        122: s.UnsignedInt101111Type,
        152: s.UnsignedByteType,
        148: s.UnsignedByteType,
        153: s.UnsignedByteType,
        154: s.UnsignedByteType,
        155: s.UnsignedByteType,
        156: s.UnsignedByteType,
        1000066e3: s.HalfFloatType,
        158: s.UnsignedByteType,
        157: s.UnsignedByteType,
        0x3b9bcbd4: s.HalfFloatType,
        166: s.UnsignedByteType,
        165: s.UnsignedByteType,
        134: s.UnsignedByteType,
        133: s.UnsignedByteType,
        132: s.UnsignedByteType,
        131: s.UnsignedByteType,
        138: s.UnsignedByteType,
        137: s.UnsignedByteType,
        140: s.UnsignedByteType,
        139: s.UnsignedByteType,
        142: s.UnsignedByteType,
        141: s.UnsignedByteType,
        146: s.UnsignedByteType,
        145: s.UnsignedByteType,
        0x3b9b9cf5: s.UnsignedByteType,
        0x3b9b9cf1: s.UnsignedByteType,
        0x3b9b9cf4: s.UnsignedByteType,
        1000054e3: s.UnsignedByteType
    };
    async function u(A) {
        let e, a, {vkFormat: i} = A;
        if (void 0 === f[i])
            throw Error("THREE.KTX2Loader: Unsupported vkFormat: " + i);
        void 0 === m[i] && console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: ' + i),
        2 === A.supercompressionScheme && (t || (t = new Promise(async A => {
            let e = new B;
            await e.init(),
            A(e)
        }
        )),
        e = await t);
        let g = [];
        for (let a = 0; a < A.levels.length; a++) {
            let t, r, o = Math.max(1, A.pixelWidth >> a), n = Math.max(1, A.pixelHeight >> a), I = A.pixelDepth ? Math.max(1, A.pixelDepth >> a) : 0, c = A.levels[a];
            if (0 === A.supercompressionScheme)
                t = c.levelData;
            else if (2 === A.supercompressionScheme)
                t = e.decode(c.levelData, c.uncompressedByteLength);
            else
                throw Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
            r = m[i] === s.FloatType ? new Float32Array(t.buffer,t.byteOffset,t.byteLength / Float32Array.BYTES_PER_ELEMENT) : m[i] === s.HalfFloatType || m[i] === s.UnsignedShortType ? new Uint16Array(t.buffer,t.byteOffset,t.byteLength / Uint16Array.BYTES_PER_ELEMENT) : m[i] === s.UnsignedInt5999Type || m[i] === s.UnsignedInt101111Type ? new Uint32Array(t.buffer,t.byteOffset,t.byteLength / Uint32Array.BYTES_PER_ELEMENT) : t,
            g.push({
                data: r,
                width: o,
                height: n,
                depth: I
            })
        }
        let r = 0 === A.levelCount || g.length > 1;
        if (d.has(f[i]))
            (a = 0 === A.pixelDepth ? new s.DataTexture(g[0].data,A.pixelWidth,A.pixelHeight) : new s.Data3DTexture(g[0].data,A.pixelWidth,A.pixelHeight,A.pixelDepth)).minFilter = r ? s.NearestMipmapNearestFilter : s.NearestFilter,
            a.magFilter = s.NearestFilter,
            a.generateMipmaps = 0 === A.levelCount,
            a.normalized = p.has(i);
        else {
            if (A.pixelDepth > 0)
                throw Error("THREE.KTX2Loader: Unsupported pixelDepth.");
            (a = new s.CompressedTexture(g,A.pixelWidth,A.pixelHeight)).minFilter = r ? s.LinearMipmapLinearFilter : s.LinearFilter,
            a.magFilter = s.LinearFilter
        }
        return a.mipmaps = g,
        a.type = m[i],
        a.format = f[i],
        a.colorSpace = D(A),
        a.needsUpdate = !0,
        Promise.resolve(a)
    }
    function D(A) {
        let e = A.dataFormatDescriptor[0];
        return 1 === e.colorPrimaries ? 2 === e.transferFunction ? s.SRGBColorSpace : s.LinearSRGBColorSpace : 10 === e.colorPrimaries ? 2 === e.transferFunction ? "display-p3" : "display-p3-linear" : (0 === e.colorPrimaries || console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),
        s.NoColorSpace)
    }
    A.s(["KTX2Loader", 0, l], 135702);
    var F = function() {
        var A, e = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), a = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
        if ("object" != typeof WebAssembly)
            return {
                supported: !1
            };
        var i = WebAssembly.validate(e) ? s("b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb") : s("b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb")
          , t = WebAssembly.instantiate(i, {}).then(function(e) {
            (A = e.instance).exports.__wasm_call_ctors()
        });
        function s(A) {
            for (var e = new Uint8Array(A.length), i = 0; i < A.length; ++i) {
                var t = A.charCodeAt(i);
                e[i] = t > 96 ? t - 97 : t > 64 ? t - 39 : t + 4
            }
            for (var s = 0, i = 0; i < A.length; ++i)
                e[s++] = e[i] < 60 ? a[e[i]] : (e[i] - 60) * 64 + e[++i];
            return e.buffer.slice(0, s)
        }
        function g(A, e, a, i, t, s, g) {
            var r = A.exports.sbrk
              , o = i + 3 & -4
              , n = r(o * t)
              , I = r(s.length)
              , c = new Uint8Array(A.exports.memory.buffer);
            c.set(s, I);
            var B = e(n, i, t, I, s.length);
            if (0 == B && g && g(n, o, t),
            a.set(c.subarray(n, n + i * t)),
            r(n - r(0)),
            0 != B)
                throw Error("Malformed buffer data: " + B)
        }
        var r = {
            NONE: "",
            OCTAHEDRAL: "meshopt_decodeFilterOct",
            QUATERNION: "meshopt_decodeFilterQuat",
            EXPONENTIAL: "meshopt_decodeFilterExp",
            COLOR: "meshopt_decodeFilterColor"
        }
          , o = {
            ATTRIBUTES: "meshopt_decodeVertexBuffer",
            TRIANGLES: "meshopt_decodeIndexBuffer",
            INDICES: "meshopt_decodeIndexSequence"
        }
          , n = []
          , I = 0;
        function c(A) {
            var e = A.data;
            self.ready.then(function(A) {
                if (!e.id)
                    return self.close();
                try {
                    var a = new Uint8Array(e.count * e.size);
                    g(A, A.exports[e.mode], a, e.count, e.size, e.source, A.exports[e.filter]),
                    self.postMessage({
                        id: e.id,
                        count: e.count,
                        action: "resolve",
                        value: a
                    }, [a.buffer])
                } catch (A) {
                    self.postMessage({
                        id: e.id,
                        count: e.count,
                        action: "reject",
                        value: A
                    })
                }
            })
        }
        return {
            ready: t,
            supported: !0,
            useWorkers: function(A) {
                for (var e = new Blob(["self.ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(i) + "]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = " + c.name + ";" + g.toString() + c.toString()],{
                    type: "text/javascript"
                }), a = URL.createObjectURL(e), t = n.length; t < A; ++t)
                    n[t] = function(A) {
                        var e = {
                            object: new Worker(A),
                            pending: 0,
                            requests: {}
                        };
                        return e.object.onmessage = function(A) {
                            var a = A.data;
                            e.pending -= a.count,
                            e.requests[a.id][a.action](a.value),
                            delete e.requests[a.id]
                        }
                        ,
                        e
                    }(a);
                for (var t = A; t < n.length; ++t)
                    n[t].object.postMessage({});
                n.length = A,
                URL.revokeObjectURL(a)
            },
            decodeVertexBuffer: function(e, a, i, t, s) {
                g(A, A.exports.meshopt_decodeVertexBuffer, e, a, i, t, A.exports[r[s]])
            },
            decodeIndexBuffer: function(e, a, i, t) {
                g(A, A.exports.meshopt_decodeIndexBuffer, e, a, i, t)
            },
            decodeIndexSequence: function(e, a, i, t) {
                g(A, A.exports.meshopt_decodeIndexSequence, e, a, i, t)
            },
            decodeGltfBuffer: function(e, a, i, t, s, n) {
                g(A, A.exports[o[s]], e, a, i, t, A.exports[r[n]])
            },
            decodeGltfBufferAsync: function(e, a, i, s, c) {
                return n.length > 0 ? function(A, e, a, i, t) {
                    for (var s = n[0], g = 1; g < n.length; ++g)
                        n[g].pending < s.pending && (s = n[g]);
                    return new Promise(function(g, r) {
                        var o = new Uint8Array(a)
                          , n = ++I;
                        s.pending += A,
                        s.requests[n] = {
                            resolve: g,
                            reject: r
                        },
                        s.object.postMessage({
                            id: n,
                            count: A,
                            size: e,
                            source: o,
                            mode: i,
                            filter: t
                        }, [o.buffer])
                    }
                    )
                }(e, a, i, o[s], r[c]) : t.then(function() {
                    var t = new Uint8Array(e * a);
                    return g(A, A.exports[o[s]], t, e, a, i, A.exports[r[c]]),
                    t
                })
            }
        }
    }();
    A.s(["MeshoptDecoder", 0, F], 785110)
}
]);
