(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 879774, e => {
    "use strict";
    var r = e.i(190072);
    let t = `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`
      , n = `
float viewDistanceFromLogDepth(float depth, float logFar) {
  return exp2(depth * logFar) - 1.0;
}`;
    function o(e, n, a={}) {
        return new r.ShaderMaterial({
            uniforms: n,
            defines: a,
            vertexShader: t,
            fragmentShader: e,
            depthTest: !1,
            depthWrite: !1,
            blending: r.NoBlending,
            toneMapped: !1
        })
    }
    class a {
        scene = new r.Scene;
        camera = new r.OrthographicCamera(-1,1,1,-1,0,1);
        mesh = new r.Mesh(new r.PlaneGeometry(2,2));
        constructor() {
            this.mesh.frustumCulled = !1,
            this.scene.add(this.mesh)
        }
        draw(e, r, t, n=!1) {
            this.mesh.material = r;
            let o = e.autoClear;
            e.autoClear = n,
            e.setRenderTarget(t),
            e.render(this.scene, this.camera),
            e.autoClear = o
        }
        dispose() {
            this.mesh.geometry.dispose()
        }
    }
    let i = `
uniform sampler2D tSource;
uniform vec2 texel;
varying vec2 vUv;
// The chain spreads every input pixel across mip-sized blocks, so one NaN or
// infinite pixel would black out a rectangle: drop those, and cap highlights.
vec3 safe(vec3 c) { return any(isnan(c)) || any(isinf(c)) ? vec3(0.0) : min(c, vec3(256.0)); }
void main() {
  vec3 a = safe(texture2D(tSource, vUv + texel * vec2(-0.5, -0.5)).rgb);
  vec3 b = safe(texture2D(tSource, vUv + texel * vec2(0.5, -0.5)).rgb);
  vec3 c = safe(texture2D(tSource, vUv + texel * vec2(-0.5, 0.5)).rgb);
  vec3 d = safe(texture2D(tSource, vUv + texel * vec2(0.5, 0.5)).rgb);
  float ka = 1.0 / (1.0 + max(a.r, max(a.g, a.b))), kb = 1.0 / (1.0 + max(b.r, max(b.g, b.b)));
  float kc = 1.0 / (1.0 + max(c.r, max(c.g, c.b))), kd = 1.0 / (1.0 + max(d.r, max(d.g, d.b)));
  vec3 color = (a * ka + b * kb + c * kc + d * kd) / (ka + kb + kc + kd);
  // Luminance, not the brightest channel: a saturated blue sky sits near 1.0 in blue.
  float bright = dot(color, vec3(0.2126, 0.7152, 0.0722));
  float soft = clamp(bright - THRESHOLD + KNEE, 0.0, 2.0 * KNEE);
  soft = soft * soft / (4.0 * KNEE + 1e-5);
  gl_FragColor = vec4(color * max(soft, bright - THRESHOLD) / max(bright, 1e-5), 1.0);
}`
      , s = `
uniform sampler2D tSource;
uniform vec2 texel;
varying vec2 vUv;
vec3 at(float x, float y) { return texture2D(tSource, vUv + texel * vec2(x, y)).rgb; }
void main() {
  vec3 color = at(0.0, 0.0) * 0.125;
  color += (at(-2.0, 2.0) + at(2.0, 2.0) + at(-2.0, -2.0) + at(2.0, -2.0)) * 0.03125;
  color += (at(0.0, 2.0) + at(-2.0, 0.0) + at(2.0, 0.0) + at(0.0, -2.0)) * 0.0625;
  color += (at(-1.0, 1.0) + at(1.0, 1.0) + at(-1.0, -1.0) + at(1.0, -1.0)) * 0.125;
  gl_FragColor = vec4(color, 1.0);
}`
      , l = `
uniform sampler2D tSource;
uniform vec2 texel;
varying vec2 vUv;
vec3 at(float x, float y) { return texture2D(tSource, vUv + texel * vec2(x, y)).rgb; }
void main() {
  vec3 color = at(0.0, 0.0) * 4.0;
  color += (at(0.0, 1.0) + at(-1.0, 0.0) + at(1.0, 0.0) + at(0.0, -1.0)) * 2.0;
  color += at(-1.0, 1.0) + at(1.0, 1.0) + at(-1.0, -1.0) + at(1.0, -1.0);
  gl_FragColor = vec4(color / 16.0, 1.0);
}`;
    class c {
        levels = Array.from({
            length: 5
        }, () => (function(e=!1) {
            return new r.WebGLRenderTarget(1,1,{
                type: r.HalfFloatType,
                format: r.RGBAFormat,
                minFilter: r.LinearFilter,
                magFilter: r.LinearFilter,
                depthBuffer: e
            })
        }
        )());
        prefilter = o(i, {
            tSource: {
                value: null
            },
            texel: {
                value: new r.Vector2
            }
        }, {
            THRESHOLD: "1.000",
            KNEE: "0.200"
        });
        downsample = o(s, {
            tSource: {
                value: null
            },
            texel: {
                value: new r.Vector2
            }
        });
        upsample = o(l, {
            tSource: {
                value: null
            },
            texel: {
                value: new r.Vector2
            }
        });
        constructor() {
            this.upsample.blending = r.AdditiveBlending,
            this.upsample.transparent = !0
        }
        get texture() {
            return this.levels[0].texture
        }
        setSize(e, r) {
            this.levels.forEach( (t, n) => t.setSize(Math.max(1, Math.round(e / 2 ** (n + 1))), Math.max(1, Math.round(r / 2 ** (n + 1)))))
        }
        render(e, r, t, n, o) {
            this.prefilter.uniforms.tSource.value = t,
            this.prefilter.uniforms.texel.value.set(1 / n, 1 / o),
            r.draw(e, this.prefilter, this.levels[0]);
            for (let t = 1; t < this.levels.length; t++) {
                let n = this.levels[t - 1];
                this.downsample.uniforms.tSource.value = n.texture,
                this.downsample.uniforms.texel.value.set(1 / n.width, 1 / n.height),
                r.draw(e, this.downsample, this.levels[t])
            }
            for (let t = this.levels.length - 1; t > 0; t--) {
                let n = this.levels[t];
                this.upsample.uniforms.tSource.value = n.texture,
                this.upsample.uniforms.texel.value.set(1 / n.width, 1 / n.height),
                r.draw(e, this.upsample, this.levels[t - 1])
            }
        }
        dispose() {
            for (let e of this.levels)
                e.dispose();
            this.prefilter.dispose(),
            this.downsample.dispose(),
            this.upsample.dispose()
        }
    }
    e.s(["BloomPass", 0, c, "FullscreenPass", 0, a, "LOG_DEPTH_GLSL", 0, n, "QUAD_VERTEX", 0, t, "copyMaterial", 0, function() {
        return o(`
uniform sampler2D tSource;
varying vec2 vUv;
void main() { gl_FragColor = texture2D(tSource, vUv); }`, {
            tSource: {
                value: null
            }
        })
    }
    , "floatColorTargets", 0, function(e) {
        return e.extensions.has("EXT_color_buffer_float") || e.extensions.has("EXT_color_buffer_half_float")
    }
    ])
}
, 80630, e => {
    "use strict";
    let r = `#ifdef USE_REVERSED_DEPTH_BUFFER
    gl_Position.z = 0.0;
    #else
    gl_Position.z = gl_Position.w;
    #endif`;
    function t(e) {
        return e.capabilities.reversedDepthBuffer
    }
    function n(e, r) {
        if (e.groupOrder !== r.groupOrder)
            return r.groupOrder - e.groupOrder;
        if (e.renderOrder !== r.renderOrder)
            return r.renderOrder - e.renderOrder;
        let t = e.material.id
          , n = r.material.id;
        return t !== n ? n - t : e.materialVariant !== r.materialVariant ? r.materialVariant - e.materialVariant : e.z !== r.z ? e.z - r.z : r.id - e.id
    }
    function o(e, r) {
        return e.groupOrder !== r.groupOrder ? r.groupOrder - e.groupOrder : e.renderOrder !== r.renderOrder ? r.renderOrder - e.renderOrder : e.z !== r.z ? r.z - e.z : r.id - e.id
    }
    e.s(["FAR_PLANE_VERTEX", 0, r, "keepDrawOrder", 0, function(e) {
        t(e) && (e.setOpaqueSort(n),
        e.setTransparentSort(o))
    }
    , "prepareCamera", 0, function(e, r) {
        !r.reversedDepth && t(e) && (r._reversedDepth = !0,
        r.updateProjectionMatrix?.())
    }
    , "reversedDepth", 0, t, "reversedOpaqueSort", 0, n])
}
, 916189, e => {
    "use strict";
    var r = e.i(271645)
      , t = e.i(848546)
      , n = e.i(190072)
      , o = e.i(171683);
    let a = "#62cdc8"
      , i = new n.Color(a)
      , s = new WeakMap
      , l = new WeakMap
      , c = new n.Vector3
      , u = new n.Color("#178f9c");
    e.s(["UNDERWATER_TINT", 0, i, "applyUnderwater", 0, function(e, r, t=!0) {
        let i = function(e, r) {
            let t = s.get(e);
            if (!t?.size)
                return !1;
            for (let e of (r.updateWorldMatrix(!0, !1),
            c.setFromMatrixPosition(r.matrixWorld),
            t))
                for (let r of e)
                    if ((0,
                    o.inWater)(r, c.x, c.y, c.z))
                        return !0;
            return !1
        }(e, r)
          , d = l.get(e);
        if (!i && !d?.fog && !d?.veil.visible)
            return !1;
        if (!d) {
            let r, t, o, i = ((r = new n.BufferGeometry).setAttribute("position", new n.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),3)),
            (t = new n.MeshBasicMaterial({
                color: a,
                transparent: !0,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
                toneMapped: !1,
                blending: n.CustomBlending,
                blendSrc: n.DstColorFactor,
                blendDst: n.ZeroFactor
            })).onBeforeCompile = e => {
                e.vertexShader = e.vertexShader.replace("#include <project_vertex>", "gl_Position = vec4( position.xy, 0.0, 1.0 );")
            }
            ,
            t.customProgramCacheKey = () => "underwater-veil",
            (o = new n.Mesh(r,t)).frustumCulled = !1,
            o.visible = !1,
            o.name = "Underwater veil",
            o), s = new n.Scene;
            s.add(i),
            l.set(e, d = {
                veil: i,
                veilScene: s,
                fog: null,
                color: new n.Color,
                density: 0
            })
        }
        if (i) {
            let r = e.fog;
            r !== d.fog && (d.fog = r,
            r && (d.color.copy(r.color),
            r instanceof n.FogExp2 && (d.density = r.density))),
            r && (r.color.copy(u),
            r instanceof n.FogExp2 && (r.density = .32))
        } else
            d.fog && (d.fog.color.copy(d.color),
            d.fog instanceof n.FogExp2 && (d.fog.density = d.density),
            d.fog = null);
        return d.veil.visible = i && t,
        i
    }
    , "drawUnderwaterVeil", 0, function(e, r, t) {
        let n = l.get(r);
        if (!n?.veil.visible)
            return;
        let o = e.autoClear;
        e.autoClear = !1,
        e.render(n.veilScene, t),
        e.autoClear = o
    }
    , "useSceneWater", 0, function(e) {
        let n = (0,
        t.useThree)(e => e.scene);
        (0,
        r.useEffect)( () => {
            let r;
            return e.length ? ((r = s.get(n)) || s.set(n, r = new Set),
            r.add(e),
            () => {
                r.delete(e)
            }
            ) : void 0
        }
        , [n, e])
    }
    ])
}
, 613105, e => {
    "use strict";
    e.s(["withDeadline", 0, function(e, r) {
        let t = AbortSignal.timeout(r);
        if (!e)
            return t;
        if ("function" == typeof AbortSignal.any)
            return AbortSignal.any([e, t]);
        let n = new AbortController
          , o = e => {
            e.aborted ? n.abort(e.reason) : e.addEventListener("abort", () => n.abort(e.reason), {
                once: !0
            })
        }
        ;
        return o(e),
        o(t),
        n.signal
    }
    ])
}
, 71008, e => {
    "use strict";
    var r = e.i(50270)
      , t = e.i(353198)
      , n = e.i(15221);
    let o = ["colorways", "trails", "environments"]
      , a = {
        colorways: {
            shell: "Body",
            accent: "Accent",
            props: "Propellers"
        },
        trails: {
            core: "Core",
            glow: "Glow"
        },
        environments: {
            light: "Light surfaces",
            dark: "Dark surfaces",
            accent: "Accent",
            ground: "Ground",
            sky: "Sky"
        }
    }
      , i = {
        colorways: {
            shell: "#eeeae1",
            accent: "#ff7900",
            props: "#ff7900"
        },
        trails: {
            core: "#fff0cf",
            glow: "#ff7900"
        },
        environments: {
            light: "#aeb3bb",
            dark: "#484b50",
            accent: "#c65c13",
            ground: "#86888d",
            sky: "#b6dced"
        }
    }
      , s = r.z.object({
        name: r.z.string().trim().min(1, "Give this item a name.").max(80),
        description: r.z.string().trim().max(500),
        category: r.z.enum(o),
        drone: r.z.enum(t.DRONE_IDS).nullable(),
        colors: r.z.record(r.z.string(), r.z.string().regex(/^#[0-9a-f]{6}$/i, "Use six-digit hex colors.")),
        prop_material: r.z.enum(["normal", "translucent"]).default("normal"),
        display_order: r.z.number().int().min(0).max(1e6).default(0),
        price: r.z.number().int().min(0).max(1e8),
        rarity: r.z.enum(n.ALL_RARITIES).default("uncommon"),
        access_type: r.z.enum(["included", "credits", "pack"]),
        featured: r.z.boolean(),
        published: r.z.boolean()
    }).transform(e => ({
        ...e,
        rarity: (0,
        n.hasRarity)(e.category) && "included" === e.access_type ? "common" : e.rarity
    })).superRefine( (e, r) => {
        (0,
        n.hasRarity)(e.category) && "included" !== e.access_type && "common" === e.rarity && r.addIssue({
            code: "custom",
            path: ["rarity"],
            message: "Choose Uncommon, Rare, Epic or Legendary for a purchasable item."
        }),
        "colorways" !== e.category || e.drone || r.addIssue({
            code: "custom",
            path: ["drone"],
            message: "Choose a preview drone."
        }),
        "colorways" !== e.category && "normal" !== e.prop_material && r.addIssue({
            code: "custom",
            path: ["prop_material"],
            message: "Only drone colorways have propeller materials."
        });
        let t = Object.keys(a[e.category]);
        (t.some(r => !e.colors[r]) || Object.keys(e.colors).some(r => !(t.includes(r) || "colorways" === e.category && "background" === r))) && r.addIssue({
            code: "custom",
            path: ["colors"],
            message: "The palette must match this item type."
        }),
        "credits" !== e.access_type && 0 !== e.price && r.addIssue({
            code: "custom",
            path: ["price"],
            message: "Only credit-priced items have an individual price."
        }),
        "colorways" !== e.category && null !== e.drone && r.addIssue({
            code: "custom",
            path: ["drone"],
            message: "Only drone colorways have a drone model."
        })
    }
    );
    e.s(["CATEGORY_LABELS", 0, {
        colorways: "Drone skins",
        trails: "Trails",
        environments: "World themes"
    }, "COLOR_FIELDS", 0, a, "SHOP_CATEGORIES", 0, o, "compareGearOrder", 0, function(e, r) {
        return n.ALL_RARITIES.indexOf(e.rarity ?? ("included" === e.access_type ? "common" : "uncommon")) - n.ALL_RARITIES.indexOf(r.rarity ?? ("included" === r.access_type ? "common" : "uncommon")) || (e.display_order ?? 0) - (r.display_order ?? 0) || e.created_at.localeCompare(r.created_at) || e.id.localeCompare(r.id)
    }
    , "fillShopDays", 0, function(e, r, t=new Date) {
        let n = new Map(e.map(e => [e.date, e]));
        return Array.from({
            length: r
        }, (e, o) => {
            let a = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() - r + o + 1)).toISOString().slice(0, 10);
            return n.get(a) ?? {
                date: a,
                purchases: 0,
                revenue: 0
            }
        }
        )
    }
    , "isCurrentItem", 0, function(e) {
        return o.includes(e.category) && !e.chassis
    }
    , "newShopItem", 0, function(e) {
        return {
            name: "",
            description: "",
            category: e,
            drone: "colorways" === e ? "freestyle" : null,
            colors: {
                ...i[e]
            },
            prop_material: "normal",
            price: 300,
            rarity: "uncommon",
            display_order: 0,
            access_type: "credits",
            featured: !1,
            published: !1
        }
    }
    , "shopItemSchema", 0, s], 71008)
}
, 894969, e => {
    "use strict";
    var r = e.i(768834)
      , t = e.i(920755)
      , n = e.i(71008)
      , o = e.i(277873);
    let a = {
        parts: null,
        parts_pending: 0,
        parts_cap: 1e4,
        parts_warning: 8e3,
        policy_version: null
    }
      , i = null
      , s = 0
      , l = null
      , c = null;
    function u(e) {
        try {
            c && (e ? sessionStorage.setItem(c, JSON.stringify(e)) : sessionStorage.removeItem(c))
        } catch {}
    }
    let d = (0,
    r.create)( (e, r) => {
        let d = r => {
            let t = {
                ...r,
                items: r.items.filter(n.isCurrentItem)
            };
            (0,
            o.setOwnedCatalog)(t.items),
            e({
                ...t,
                ...p(t),
                shop_enabled: !0 === t.shop_enabled,
                boosters: t.boosters ?? [],
                serverTime: Date.parse(t.server_now ?? "") || 0,
                receivedAt: performance.now(),
                packs: t.packs ?? [],
                status: "ready",
                error: ""
            })
        }
        ;
        return {
            shop_enabled: !1,
            packs: [],
            refund_debt: 0,
            balance: null,
            items: [],
            ...a,
            boosters: [],
            serverTime: 0,
            receivedAt: 0,
            pendingBooster: null,
            status: "loading",
            error: "",
            purchasing: !1,
            inventory_revision: null,
            observeRevision: e => {
                let t = r().inventory_revision;
                "number" == typeof e && null !== t && e > t && r().refresh()
            }
            ,
            reset: (r=null) => {
                s++,
                l = null,
                i = null,
                (0,
                o.setOwnedCatalog)([]),
                c = r ? `fd-booster-request:${r}` : null;
                let t = null;
                try {
                    c && (t = JSON.parse(sessionStorage.getItem(c) ?? "null"))
                } catch {}
                e({
                    shop_enabled: !1,
                    packs: [],
                    refund_debt: 0,
                    balance: null,
                    items: [],
                    ...a,
                    boosters: [],
                    serverTime: 0,
                    receivedAt: 0,
                    pendingBooster: t,
                    status: "loading",
                    error: "",
                    purchasing: !1,
                    inventory_revision: null
                })
            }
            ,
            setBadgeVisible: async (n, o) => {
                if (r().purchasing)
                    return "Another update is in progress. Please try again.";
                if ("ready" !== r().status || !r().packs.some(e => e.checkout_id === n && e.badge_label))
                    return "Reload your collection to equip this badge.";
                let a = ++s;
                l = null,
                e({
                    purchasing: !0
                });
                try {
                    let {error: i} = await (0,
                    t.createClient)().rpc("set_pack_badge", {
                        p_checkout: n,
                        p_visible: o
                    }).abortSignal(AbortSignal.timeout(15e3));
                    if (i)
                        throw i;
                    if (a !== s)
                        return "Your account changed. Reload your collection.";
                    return e({
                        packs: r().packs.map(e => e.checkout_id === n ? {
                            ...e,
                            badge_visible: o
                        } : e)
                    }),
                    null
                } catch {
                    return "Couldn’t save your badge. Please try again."
                } finally {
                    a === s && (e({
                        purchasing: !1
                    }),
                    r().refresh())
                }
            }
            ,
            useBooster: async t => {
                if (r().purchasing)
                    return "Another purchase is in progress.";
                let n = r().pendingBooster;
                if (n && (n.kind !== t.kind || n.booster !== t.booster || n.quantity !== t.quantity || n.expectedPrice !== t.expectedPrice || (n.currency ?? "credits") !== t.currency))
                    return "Retry your previous booster request first.";
                let o = n ? {
                    ...n,
                    currency: n.currency ?? "credits"
                } : {
                    ...t,
                    id: crypto.randomUUID()
                }
                  , a = ++s;
                l = null,
                u(o),
                e({
                    purchasing: !0,
                    pendingBooster: o
                });
                try {
                    let r = await fetch("/api/shop/boosters", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(o),
                        signal: AbortSignal.timeout(15e3)
                    })
                      , t = await r.json();
                    if (a !== s)
                        return "Your account changed. Reload your collection.";
                    if ((r.ok || [400, 401, 403, 409].includes(r.status)) && (u(null),
                    e({
                        pendingBooster: null
                    })),
                    !r.ok)
                        throw Error(t.error);
                    return d(t),
                    null
                } catch (e) {
                    return e instanceof Error && "TimeoutError" !== e.name ? e.message : "Connection interrupted. Retry to check your booster request."
                } finally {
                    a === s && (e({
                        purchasing: !1
                    }),
                    r().refresh())
                }
            }
            ,
            adopt: e => !r().purchasing && (s++,
            l = null,
            d(e),
            !0),
            refresh: () => {
                if (r().purchasing)
                    return Promise.resolve();
                if (l)
                    return l;
                let t = s;
                return l = (async () => {
                    try {
                        let e = await fetch("/api/shop/inventory", {
                            cache: "no-store",
                            signal: AbortSignal.timeout(1e4)
                        })
                          , r = await e.json();
                        if (!e.ok)
                            throw Error(r.error);
                        t === s && d(r)
                    } catch {
                        t === s && e({
                            status: "error",
                            error: "Couldn’t load your collection. Try again."
                        })
                    } finally {
                        t === s && (l = null)
                    }
                }
                )()
            }
            ,
            purchase: async (t, n="credits") => {
                if (r().purchasing)
                    return "A purchase is already in progress.";
                let o = r().policy_version
                  , a = "parts" === n ? t.parts_price : t.price;
                if (null === o || null == a)
                    return "Prices are still loading. Try again.";
                let c = i
                  , u = c && c.itemId === t.id && c.currency === n && c.expectedPrice === a ? c : {
                    id: crypto.randomUUID(),
                    itemId: t.id,
                    currency: n,
                    expectedPrice: a
                };
                i = u;
                let p = ++s;
                l = null,
                e({
                    purchasing: !0
                });
                try {
                    let e = await fetch("/api/shop/purchase", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        signal: AbortSignal.timeout(15e3),
                        body: JSON.stringify({
                            requestId: u.id,
                            itemId: t.id,
                            currency: n,
                            expectedPrice: a,
                            policyVersion: o
                        })
                    })
                      , r = await e.json();
                    if (i === u && (i = null),
                    !e.ok)
                        throw Error(r.error);
                    return p === s && d(r),
                    null
                } catch (e) {
                    return e instanceof Error && "TimeoutError" !== e.name ? e.message : "Connection interrupted. Retry to check your purchase."
                } finally {
                    p === s && (e({
                        purchasing: !1
                    }),
                    r().refresh())
                }
            }
            ,
            claimParts: async () => {
                if (r().purchasing)
                    return {
                        error: "Another update is in progress. Please try again."
                    };
                let n = ++s;
                l = null,
                e({
                    purchasing: !0
                });
                try {
                    let {data: r, error: o} = await (0,
                    t.createClient)().rpc("claim_parts", {
                        p_request: crypto.randomUUID()
                    }).abortSignal(AbortSignal.timeout(15e3));
                    if (o)
                        throw o;
                    if (n !== s)
                        return {
                            error: "Your account changed. Reload your collection."
                        };
                    return e(p(r)),
                    {
                        moved: r.moved
                    }
                } catch {
                    return {
                        error: "Couldn’t claim your Parts. Please try again."
                    }
                } finally {
                    n === s && (e({
                        purchasing: !1
                    }),
                    r().refresh())
                }
            }
        }
    }
    );
    function p(e) {
        return "number" == typeof e.parts ? {
            parts: e.parts,
            parts_pending: e.parts_pending ?? 0,
            parts_cap: e.parts_cap ?? a.parts_cap,
            parts_warning: e.parts_warning ?? a.parts_warning,
            policy_version: e.policy_version ?? null
        } : a
    }
    e.s(["SIGN_IN_TO_LOAD", 0, "Sign in to load your collection.", "inventoryNow", 0, function() {
        let e = d.getState();
        return e.serverTime ? e.serverTime + performance.now() - e.receivedAt : Date.now()
    }
    , "useInventory", 0, d])
}
, 15221, e => {
    "use strict";
    var r = e.i(50270);
    let t = ["uncommon", "rare", "epic", "legendary"]
      , n = ["common", ...t]
      , o = r.z.number().int().min(0).max(1e8)
      , a = r.z.object({
        uncommon: o,
        rare: o,
        epic: o,
        legendary: o
    });
    e.s(["ALL_RARITIES", 0, n, "RARITY_LABELS", 0, {
        common: "Common",
        uncommon: "Uncommon",
        rare: "Rare",
        epic: "Epic",
        legendary: "Legendary"
    }, "SHOP_RARITIES", 0, t, "hasRarity", 0, function(e) {
        return "colorways" === e || "environments" === e
    }
    , "rarityPricesSchema", 0, a])
}
, 353198, 277873, e => {
    "use strict";
    let r = [];
    function t(e) {
        return `shop:${e.id}`
    }
    function n(e) {
        return r.find(r => t(r) === e)
    }
    e.s(["ownedCatalog", 0, function() {
        return r
    }
    , "ownedItem", 0, n, "ownsGear", 0, function(e, r) {
        let t = n(r);
        return !!t && t.category === e
    }
    , "setOwnedCatalog", 0, function(e) {
        r = e
    }
    , "shopGearId", 0, t], 277873);
    var o = e.i(870895);
    let a = ["freestyle", "whoop", "cinewhoop", "long-range", "racer"]
      , i = ["whoop", "cinewhoop", "freestyle", "long-range", "racer"]
      , s = "whoop";
    function l(e) {
        return a.includes(e)
    }
    let c = {
        freestyle: {
            id: "freestyle",
            name: "5 inch",
            category: "Freestyle",
            tagline: "Freestyle and everyday flying.",
            description: "A 5-inch drone for tricks, gaps and general flying.",
            size: "5″",
            unlockLevel: 5,
            skins: [{
                id: "factory",
                name: "",
                shell: "#b7b9bc",
                accent: "#555960",
                props: "#555960"
            }, {
                id: "glacier",
                name: "Glacier",
                shell: "#e8f3f5",
                accent: "#36a9d0",
                props: "#73d4f2"
            }, {
                id: "acid",
                name: "After Hours",
                shell: "#353840",
                accent: "#d7f542",
                props: "#d7f542"
            }]
        },
        whoop: {
            id: "whoop",
            name: "Tiny Whoop",
            category: "Micro",
            tagline: "For small spaces.",
            description: "A small, light drone for indoor flying and tight gaps. A good place to start.",
            size: "65 mm",
            unlockLevel: 1,
            skins: [{
                id: "factory",
                name: "",
                shell: "#b7b9bc",
                accent: "#555960",
                props: "#555960"
            }, {
                id: "glacier",
                name: "Poolside",
                shell: "#bdeaff",
                accent: "#2285a8",
                props: "#e9faff"
            }, {
                id: "acid",
                name: "Sour Candy",
                shell: "#e5ff54",
                accent: "#613daf",
                props: "#a889ee"
            }]
        },
        cinewhoop: {
            id: "cinewhoop",
            name: "3 inch",
            category: "Cinewhoop",
            tagline: "Smooth, steady flying.",
            description: "A 3-inch drone with prop guards and a steady feel. Suited to slower, smoother flying.",
            size: "3″",
            unlockLevel: 3,
            skins: [{
                id: "factory",
                name: "",
                shell: "#b7b9bc",
                accent: "#555960",
                props: "#555960"
            }, {
                id: "glacier",
                name: "Blue Hour",
                shell: "#bdeaff",
                accent: "#3796c7",
                props: "#8edafb"
            }, {
                id: "acid",
                name: "Highlighter",
                shell: "#42464b",
                accent: "#e5ff54",
                props: "#e5ff54"
            }]
        },
        "long-range": {
            id: "long-range",
            name: "7 inch",
            category: "Long range",
            tagline: "For longer flights.",
            description: "A larger 7-inch drone for cruising and wide turns in open spaces.",
            size: "7″",
            unlockLevel: 7,
            skins: [{
                id: "factory",
                name: "",
                shell: "#b7b9bc",
                accent: "#555960",
                props: "#555960"
            }, {
                id: "glacier",
                name: "Alpine",
                shell: "#aee8f3",
                accent: "#176d97",
                props: "#e7faff"
            }, {
                id: "acid",
                name: "Sandstorm",
                shell: "#e5c77e",
                accent: "#75416a",
                props: "#bf88be"
            }]
        },
        racer: {
            id: "racer",
            name: "5 inch R",
            category: "Racing",
            tagline: "Built for racing.",
            description: "A 5-inch racing drone with quick acceleration and sharp turns for flying through gates.",
            size: "5″ R",
            unlockLevel: 11,
            skins: [{
                id: "factory",
                name: "",
                shell: "#b7b9bc",
                accent: "#555960",
                props: "#555960"
            }, {
                id: "glacier",
                name: "Slipstream",
                shell: "#b9eff0",
                accent: "#176887",
                props: "#e9ffff"
            }, {
                id: "acid",
                name: "Voltage",
                shell: "#ddf34e",
                accent: "#6542a6",
                props: "#af8ae8"
            }]
        }
    };
    function u(e, r, t) {
        return t.includes(e) || (0,
        o.xpToLevel)(Number.isFinite(r) ? r : 0) >= c[e].unlockLevel
    }
    function d(e, r) {
        let t = (0,
        o.xpRequiredForLevel)(c[e].unlockLevel)
          , n = Math.max(0, t - Math.floor(r));
        return {
            required: t,
            remaining: n,
            minutes: Math.ceil(n / o.FLIGHT_XP_PER_MINUTE),
            fraction: t > 0 ? Math.min(1, Math.max(0, r) / t) : 1
        }
    }
    e.s(["DEFAULT_DRONE", 0, s, "DRONES", 0, c, "DRONE_IDS", 0, a, "DRONE_LADDER", 0, i, "DRONE_SKIN_IDS", 0, ["factory", "glacier", "acid"], "defaultDroneLoadout", 0, function() {
        return {
            archetype: s,
            skins: {
                freestyle: "factory",
                whoop: "factory",
                cinewhoop: "factory",
                "long-range": "factory",
                racer: "factory"
            }
        }
    }
    , "droneSkin", 0, function(e, r) {
        let t = n(r);
        return t?.category === "colorways" ? {
            id: r,
            name: t.name,
            shell: t.colors.shell,
            accent: t.colors.accent,
            props: t.colors.props,
            propMaterial: t.prop_material ?? "normal"
        } : c[e].skins.find(e => e.id === r) ?? c[e].skins[0]
    }
    , "droneUnlockProgress", 0, d, "equippedDrone", 0, function(e, r, t) {
        return u(e.archetype, r, t) ? e.archetype : s
    }
    , "isDroneUnlocked", 0, u, "isNormalDrone", 0, l, "newlyUnlockedDrones", 0, function(e, r, t) {
        return i.filter(n => !u(n, e, t) && u(n, r, t))
    }
    , "nextDroneUnlock", 0, function(e, r) {
        let t = i.find(t => !u(t, e, r));
        return t ? {
            drone: c[t],
            ...d(t, e)
        } : null
    }
    , "parseDroneGifts", 0, function(e) {
        return Array.isArray(e) ? [...new Set(e.filter(l))] : []
    }
    , "replayCraft", 0, function(e) {
        return l(e) ? e : "string" == typeof e && /^[a-z][a-z0-9-]{0,31}$/.test(e) ? "freestyle" : null
    }
    ], 353198)
}
, 940072, e => {
    "use strict";
    let r = 1 / 240;
    e.s(["FLIGHT_TIMESTEP", 0, r, "FixedStepClock", 0, class {
        accumulator = 0;
        reset() {
            this.accumulator = 0
        }
        advance(e, t=16) {
            let n = t * r;
            if (!Number.isFinite(e) || e > .25)
                return this.reset(),
                {
                    steps: 0,
                    alpha: 1,
                    dropped: Math.max(0, e),
                    interrupted: !0
                };
            let o = Math.min(Math.max(e, 0), n);
            this.accumulator += o;
            let a = Math.min(t, Math.floor((this.accumulator + 1e-10) / r));
            return this.accumulator = Math.max(0, this.accumulator - a * r),
            {
                steps: a,
                alpha: Math.min(1, this.accumulator / r),
                dropped: Math.max(0, e - o),
                interrupted: !1
            }
        }
    }
    ])
}
, 247638, e => {
    "use strict";
    var r = e.i(632997);
    let t = {
        droneId: "freestyle",
        droneSkin: "factory",
        voltageFactor: 1,
        input: (0,
        r.emptyControlInput)(),
        position: {
            x: 0,
            y: 0,
            z: 0
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
            w: 1
        },
        telemetry: {
            speed: 0,
            altitude: 0,
            distance: 0,
            rollDeg: 0,
            pitchDeg: 0,
            headingDeg: 0,
            throttle: 0,
            armed: !1,
            flightTimeMs: 0
        },
        armBlockedByThrottle: !1,
        impactShake: 0,
        hitJolt: {
            id: 0,
            from: null,
            weight: 0
        },
        grounded: !1,
        upDot: 1,
        invertedSeconds: 0,
        drowned: !1,
        motors: [0, 0, 0, 0],
        hoverLocked: !1,
        markerHeld: !1
    };
    e.s(["live", 0, t, "resetLive", 0, function() {
        t.droneId = "freestyle",
        t.droneSkin = "factory",
        t.voltageFactor = 1,
        Object.assign(t.input, (0,
        r.emptyControlInput)()),
        Object.assign(t.position, {
            x: 0,
            y: 0,
            z: 0
        }),
        Object.assign(t.rotation, {
            x: 0,
            y: 0,
            z: 0,
            w: 1
        }),
        Object.assign(t.telemetry, {
            speed: 0,
            altitude: 0,
            distance: 0,
            rollDeg: 0,
            pitchDeg: 0,
            headingDeg: 0,
            throttle: 0,
            armed: !1,
            flightTimeMs: 0
        }),
        t.armBlockedByThrottle = !1,
        t.impactShake = 0,
        t.grounded = !1,
        t.upDot = 1,
        t.invertedSeconds = 0,
        t.drowned = !1,
        t.motors[0] = 0,
        t.motors[1] = 0,
        t.motors[2] = 0,
        t.motors[3] = 0,
        t.hoverLocked = !1,
        t.markerHeld = !1
    }
    ])
}
, 171683, e => {
    "use strict";
    var r = e.i(190072)
      , t = e.i(930215);
    let n = new r.Vector3
      , o = new r.Vector3;
    function a(e, r) {
        if (!e.water || !e.geometry)
            return null;
        let t = function(e) {
            switch (e.kind) {
            case "box":
                return {
                    min: [-.5, -.5, -.5],
                    max: [.5, .5, .5],
                    round: !1
                };
            case "cylinder":
                return {
                    min: [-.5, -.5, -.5],
                    max: [.5, .5, .5],
                    round: !0
                };
            case "lathe":
                {
                    let r = Math.max(...e.profile.map( ([e]) => e))
                      , t = e.profile.map( ([,e]) => e);
                    return {
                        min: [-r, Math.min(...t), -r],
                        max: [r, Math.max(...t), r],
                        round: !0,
                        inner: Math.min(...e.profile.map( ([e]) => e))
                    }
                }
            case "prism":
                {
                    let r = e.points.map( ([e]) => e)
                      , t = e.points.map( ([,e]) => e);
                    return {
                        min: [Math.min(...r), Math.min(...t), -e.depth / 2],
                        max: [Math.max(...r), Math.max(...t), e.depth / 2],
                        round: e.points.length > 4
                    }
                }
            default:
                return null
            }
        }(e.geometry);
        if (!t)
            return null;
        let a = r.elements
          , i = [0, 1, 2].map(e => o.set(a[4 * e], a[4 * e + 1], a[4 * e + 2]).normalize().toArray())
          , s = i[+(0 === [0, 1, 2].reduce( (e, r) => Math.abs(i[r][1]) > Math.abs(i[e][1]) ? r : e, 0))]
          , l = Math.sqrt(s[0] * s[0] + s[2] * s[2])
          , c = [s[0] / l, s[2] / l]
          , u = 1 / 0
          , d = -1 / 0
          , p = 1 / 0
          , m = -1 / 0
          , f = 1 / 0
          , h = -1 / 0;
        for (let e = 0; e < 8; e++) {
            n.set(1 & e ? t.max[0] : t.min[0], 2 & e ? t.max[1] : t.min[1], 4 & e ? t.max[2] : t.min[2]).applyMatrix4(r);
            let o = n.x * c[0] + n.z * c[1]
              , a = -n.x * c[1] + n.z * c[0];
            u = Math.min(u, o),
            d = Math.max(d, o),
            p = Math.min(p, a),
            m = Math.max(m, a),
            f = Math.min(f, n.y),
            h = Math.max(h, n.y)
        }
        let g = (u + d) / 2
          , y = (p + m) / 2;
        return {
            shape: t.round ? "disc" : "box",
            center: [g * c[0] - y * c[1], g * c[1] + y * c[0]],
            axis: c,
            half: [(d - u) / 2, (m - p) / 2],
            inner: (t.inner ?? 0) * (d - u) / (t.max[0] - t.min[0]),
            surface: h,
            floor: h - (e.water.depth ?? h - f),
            ...e.water.tone ? {
                tone: e.water.tone
            } : {}
        }
    }
    let i = new WeakMap;
    function s(e, r, t) {
        let n = r - e.center[0]
          , o = t - e.center[1];
        return [n * e.axis[0] + o * e.axis[1], -n * e.axis[1] + o * e.axis[0]]
    }
    function l(e, r, t, n=0) {
        let[o,a] = s(e, r, t)
          , i = e.half[0] + n
          , c = e.half[1] + n;
        if ("box" === e.shape)
            return Math.abs(o) <= i && Math.abs(a) <= c;
        let u = Math.max(0, e.inner - n);
        return o * o / (i * i) + a * a / (c * c) <= 1 && o * o + a * a >= u * u
    }
    e.s(["footprintPlace", 0, s, "inWater", 0, function(e, r, t, n) {
        return t >= e.floor && t < e.surface && l(e, r, n)
    }
    , "submersion", 0, function(e, r, t, n, o) {
        let a = 0
          , i = t - o;
        for (let s of e) {
            if (t + o <= s.floor || i >= s.surface || !l(s, r, n))
                continue;
            let e = Math.min(1, (s.surface - i) / (2 * o));
            e > a && (a = e)
        }
        return a
    }
    , "waterRespawnExclusion", 0, function(e) {
        return 0 === e.length ? null : (r, t, n, o) => {
            let a = o * Math.SQRT2;
            for (let o of e)
                if (t >= o.floor - .05 && t < o.surface + .5 && l(o, r, n, a))
                    return !0;
            return !1
        }
    }
    , "waterVolume", 0, a, "waterVolumes", 0, function(e) {
        let n = i.get(e);
        if (n)
            return n;
        let o = (0,
        t.resolveDocument)(e)
          , s = o.nodes.filter(e => e.water)
          , l = [];
        if (s.length) {
            let e = new Map(o.nodes.map(e => [e.id, e]))
              , t = n => {
                let o = new r.Matrix4().fromArray(n.matrix)
                  , a = n.parentId ? e.get(n.parentId) : void 0;
                return a ? o.premultiply(t(a)) : o
            }
            ;
            l = s.flatMap(e => {
                let r = a(e, t(e));
                return r ? [r] : []
            }
            )
        }
        return i.set(e, l),
        l
    }
    ])
}
, 720996, e => {
    "use strict";
    var r = e.i(271645)
      , t = e.i(106258);
    let n = null;
    function o() {
        return window.matchMedia ? n ??= window.matchMedia("(prefers-reduced-motion: reduce)") : null
    }
    function a() {
        return o()?.matches ?? !1
    }
    function i(e, r) {
        return "reduce" === e || "system" === e && r
    }
    function s() {
        return i(t.useSimStore.getState().settings.accessibility.motion, a())
    }
    function l(e) {
        let r = o();
        return r?.addEventListener("change", e),
        () => r?.removeEventListener("change", e)
    }
    function c() {
        return (0,
        r.useSyncExternalStore)(l, a, () => !1)
    }
    e.s(["applyMotionAttribute", 0, function(e) {
        "u" > typeof document && (document.documentElement.dataset.motion = e)
    }
    , "motionReduced", 0, s, "onMotionChange", 0, function(e) {
        let r = t.useSimStore.subscribe( (r, t) => {
            r.settings.accessibility.motion !== t.settings.accessibility.motion && e()
        }
        )
          , n = l(e);
        return () => {
            r(),
            n()
        }
    }
    , "reducedMotionQuery", 0, {
        get matches() {
            return s()
        }
    }, "resolveReducedMotion", 0, i, "useReducedMotion", 0, function() {
        return i((0,
        t.useSimStore)(e => e.settings.accessibility.motion), c())
    }
    , "useSystemReducesMotion", 0, c])
}
, 51858, e => {
    "use strict";
    e.s(["ghostLaunchSteps", 0, function(e, r) {
        return e > 0 ? Math.min(2400, Math.ceil(2 * e / Math.max(1, r > 0 ? r : 0) * 240)) : 0
    }
    , "racersBeaten", 0, function(e, r) {
        let t = e.seats.find(e => e.seat === r);
        if (!t || "finished" !== t.outcome || null === t.place)
            return 0;
        let n = t.place;
        return e.seats.filter(e => e.seat !== r && ("dnf" === e.outcome || null !== e.place && e.place > n)).length
    }
    ])
}
, 870895, e => {
    "use strict";
    let r = [0, 0, 100, 300, 600];
    function t(e) {
        let t = Math.max(1, Math.floor(e));
        return t <= 4 ? r[t] ?? 0 : r[4] + (t - 4) * 600
    }
    function n(e) {
        let t = Math.max(0, Math.floor(e));
        return t < r[2] ? 1 : t < r[3] ? 2 : t < r[4] ? 3 : 4 + Math.floor((t - r[4]) / 600)
    }
    e.s(["COURSE_XP", 0, 50, "FLIGHT_XP_PER_MINUTE", 0, 20, "LESSON_XP", 0, 30, "RACE_UNLOCK_LEVEL", 0, 2, "TDM_UNLOCK_LEVEL", 0, 3, "levelProgress", 0, function(e) {
        let r = Math.max(0, Math.floor(e))
          , o = n(r)
          , a = t(o)
          , i = Math.max(1, t(o + 1) - a)
          , s = Math.min(i, Math.max(0, r - a));
        return {
            level: o,
            xpIntoLevel: s,
            xpForNext: i,
            fraction: s / i
        }
    }
    , "racesUnlocked", 0, function(e) {
        return n(Number.isFinite(e) ? e : 0) >= 2
    }
    , "tdmUnlocked", 0, function(e) {
        return n(Number.isFinite(e) ? e : 0) >= 3
    }
    , "xpRequiredForLevel", 0, t, "xpToLevel", 0, n], 870895)
}
, 609223, e => {
    "use strict";
    var r = e.i(998494);
    let t = () => null;
    e.s(["NO_RACES_FOR_DRONE", 0, "No races for this drone yet", "ONLINE_RACE_QUEUE_LINE", 0, "One queue for every map. The race starts on a random circuit, on your drone.", "hudRaces", 0, function(e, r, n, o) {
        return e.filter(e => e.mapId === r && e.gates.length >= 2 && !t())
    }
    , "matchRaces", 0, function(e, t) {
        return t.filter(e => e.gates.length >= 2 && (0,
        r.isOfficialMapId)(e.mapId) && "gridworks" !== e.mapId)
    }
    , "raceDroneLock", 0, t, "raceLockLabel", 0, function(e, r) {
        return `Unlocks at level ${Math.max(e.level, r ?? 0)}`
    }
    ])
}
, 378423, e => {
    "use strict";
    let r = {
        label: "Neutral vivid (#186)",
        probeGround: !0,
        paintRoughness: .7,
        metal: {
            roughness: .5,
            metalness: .35
        },
        toneMapping: "neutral",
        grade: "/sim/grades/neutral-vivid.cube",
        contact: "height",
        cover: !1,
        indoor: !1
    }
      , t = {
        ...r,
        label: "#187 contact shading",
        contact: "surface"
    }
      , n = {
        ...t,
        label: "#187 contact shading and cover",
        cover: !0
    }
      , o = {
        ...n,
        label: "#291 indoor light",
        indoor: !0
    };
    e.s(["WORLD_LOOK", 0, o, "WORLD_LOOKS", 0, {
        current: {
            label: "Current",
            environment: e => ({
                ...e,
                sky: {
                    ...e.sky,
                    palette: e.sky.palette && {
                        ...e.sky.palette,
                        horizon: "#bdeaff"
                    }
                },
                sun: {
                    ...e.sun,
                    color: "#fff3e5",
                    intensity: 2.6
                },
                ambient: {
                    skyColor: "#bbd7ef",
                    groundColor: "#818793",
                    intensity: .8
                },
                environmentIntensity: 1,
                fog: {
                    ...e.fog,
                    color: "#b9dded"
                },
                exposure: .8
            }),
            probeGround: !1,
            paintRoughness: .46,
            metal: {
                roughness: .35,
                metalness: .6
            },
            contact: "height",
            cover: !1,
            indoor: !1,
            toneMapping: "aces",
            grade: "/sim/grades/legacy.cube"
        },
        183: {
            label: "#183 lighting",
            environment: e => ({
                ...e,
                exposure: .9
            }),
            probeGround: !0,
            paintRoughness: .7,
            metal: {
                roughness: .5,
                metalness: .35
            },
            contact: "height",
            cover: !1,
            indoor: !1,
            toneMapping: "aces",
            grade: "/sim/grades/legacy.cube"
        },
        186: r,
        "187-contact": t,
        187: n,
        291: o
    }, "gradeLutUrl", 0, function(e, r) {
        return r?.grade?.lut ?? e.grade
    }
    , "lookEnvironment", 0, function(e, r) {
        return e.environment ? e.environment(r) : r
    }
    , "lookIndoor", 0, function(e, r) {
        return e.indoor && e.cover && "surface" === e.contact && !!r.indoorLight
    }
    ])
}
]);
