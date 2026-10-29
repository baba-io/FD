(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 225228, t => {
    "use strict";
    var e = t.i(271645);
    let r = (0,
    e.createContext)(null)
      , l = (0,
    e.createContext)(null);
    t.s(["SceneAssetFailures", 0, l, "SceneAssetReadiness", 0, r])
}
, 128921, 125002, t => {
    "use strict";
    var e = t.i(190072)
      , r = t.i(425723);
    let l = {
        grassDiff: "/sim/textures/grass_diff.jpg",
        grassRough: "/sim/textures/grass_rough.jpg",
        dirtDiff: "/sim/textures/dirt_diff.jpg",
        dirtRough: "/sim/textures/dirt_rough.jpg",
        dirtNor: "/sim/textures/dirt_nor.jpg",
        asphaltDiff: "/sim/textures/asphalt_diff.jpg",
        asphaltRough: "/sim/textures/asphalt_rough.jpg",
        asphaltNor: "/sim/textures/asphalt_nor.jpg",
        gravelDiff: "/sim/textures/gravel_diff.jpg",
        gravelRough: "/sim/textures/gravel_rough.jpg"
    }
      , a = Object.keys(l)
      , o = {
        grass: 15,
        dirt: 20,
        asphalt: 30,
        gravel: 3
    }
      , i = {
        asphalt: ["asphaltDiff", "asphaltRough", "asphaltNor"],
        dirt: ["dirtDiff", "dirtRough", "dirtNor"],
        gravel: ["gravelDiff", "gravelRough"]
    }
      , n = ["grassDiff", "dirtDiff", "gravelDiff"];
    function s(t) {
        return "grass" === t.surface && !t.proceduralColors
    }
    let u = {}
      , f = new WeakSet;
    function h(t) {
        return t.every(t => u[t]) ? u : null
    }
    let c = new Map
      , d = null;
    function p(t) {
        let r = c.get(t);
        if (r)
            return r;
        let l = {
            promise: (d ??= new e.TextureLoader).loadAsync(t).then(t => {
                l.texture = t
            }
            , e => {
                l.error = e ?? Error(`Could not load ${t}`)
            }
            )
        };
        return c.set(t, l),
        l
    }
    function g(t, e, l=256) {
        if ("u" < typeof document)
            return null;
        let a = document.createElement("canvas");
        a.width = l,
        a.height = l;
        let o = a.getContext("2d");
        return o ? (e(o, (0,
        r.mulberry32)(t)),
        a) : null
    }
    function m(t, r) {
        if (!t)
            return null;
        let l = new e.CanvasTexture(t);
        return l.wrapS = e.RepeatWrapping,
        l.wrapT = e.RepeatWrapping,
        l.colorSpace = r ? e.SRGBColorSpace : e.LinearSRGBColorSpace,
        l.anisotropy = 8,
        l
    }
    function b(t, e, r, l, a) {
        let o = [e];
        e < l && o.push(e + t),
        e > t - l && o.push(e - t);
        let i = [r];
        for (let e of (r < l && i.push(r + t),
        r > t - l && i.push(r - t),
        o))
            for (let t of i)
                a(e, t)
    }
    function y(t, e, r) {
        let l = t.canvas.width
          , a = t.getImageData(0, 0, l, l)
          , {data: o} = a;
        for (let t = 0; t < o.length; t += 4) {
            let l = (r() - .5) * e;
            o[t] = Math.max(0, Math.min(255, o[t] + l)),
            o[t + 1] = Math.max(0, Math.min(255, o[t + 1] + l)),
            o[t + 2] = Math.max(0, Math.min(255, o[t + 2] + l))
        }
        t.putImageData(a, 0, 0)
    }
    function M(t, e, r, l, a) {
        let o = t.canvas.width;
        for (let i = 0; i < r; i++) {
            let r = a * (.35 + .65 * e())
              , i = e() * o
              , n = e() * o;
            b(o, i, n, r, (e, a) => {
                let o = t.createRadialGradient(e, a, 0, e, a, r);
                o.addColorStop(0, l),
                o.addColorStop(1, "rgba(0,0,0,0)"),
                t.fillStyle = o,
                t.beginPath(),
                t.arc(e, a, r, 0, 2 * Math.PI),
                t.fill()
            }
            )
        }
    }
    function S(t, e) {
        t.fillStyle = e,
        t.fillRect(0, 0, t.canvas.width, t.canvas.height)
    }
    t.s(["CLOUD_TEXTURE_URL", 0, "/sim/textures/cloud.png", "GRASS_GROUND_TEXTURE_KEYS", 0, n, "SURFACE_TEXTURE_KEYS", 0, i, "TEXTURE_KEYS", 0, a, "TEXTURE_TILE_METRES", 0, o, "TEXTURE_URLS", 0, l, "groundUsesTexturePack", 0, s, "installTextures", 0, function(t, r=8) {
        let l = Math.max(1, Math.min(8, Math.floor(r)));
        for (let r of a) {
            let a = t[r];
            a && (u[r] = function(t, r, l) {
                let a = t.wrapS !== e.RepeatWrapping || t.wrapT !== e.RepeatWrapping
                  , o = r ? e.SRGBColorSpace : e.LinearSRGBColorSpace
                  , i = t.colorSpace !== o
                  , n = t.anisotropy !== l
                  , s = !f.has(t);
                return t.wrapS = e.RepeatWrapping,
                t.wrapT = e.RepeatWrapping,
                t.colorSpace = o,
                t.anisotropy = l,
                (s || a || i || n) && (t.needsUpdate = !0,
                f.add(t)),
                t
            }(a, r.endsWith("Diff"), l))
        }
    }
    , "installedTextures", 0, h, "loadTextures", 0, function(t) {
        let e = t.map(p)
          , r = e.find(t => void 0 !== t.error);
        if (r)
            throw r.error;
        let l = e.filter(t => !t.texture);
        if (l.length > 0)
            throw Promise.all(l.map(t => t.promise));
        return e.map(t => t.texture)
    }
    , "releaseLoadedTexture", 0, function(t, e) {
        c.get(t)?.texture === e && (c.delete(t),
        e.dispose())
    }
    , "surfaceTexturesInstalled", 0, function(t) {
        let e = i[t];
        return !!e && null !== h(e)
    }
    , "textureKeysForWorld", 0, function(t) {
        let e = new Set;
        for (let r of [...t.boxes, ...t.prisms ?? []])
            for (let t of i[r.surface] ?? [])
                e.add(t);
        if (s(t.environment.ground))
            for (let t of n)
                e.add(t);
        return a.filter(t => e.has(t))
    }
    ], 125002);
    let R = t => ({
        map: null,
        roughnessMap: null,
        bumpMap: null,
        normalMap: null,
        emissiveMap: null,
        metalness: 0,
        bumpScale: 0,
        ...t
    })
      , x = null;
    t.s(["SURFACE_TEXTURES", 0, {
        concrete: function() {
            let t = g(1201, (t, e) => {
                S(t, "#ffffff");
                for (let r = 0; r < 2; r++)
                    for (let l = 0; l < 2; l++) {
                        let a = 226 + Math.round(26 * e());
                        t.fillStyle = `rgb(${a},${a},${a - 3})`,
                        t.fillRect(128 * l, 128 * r, 128, 128)
                    }
                M(t, e, 22, "rgba(120,120,112,0.18)", 56.32),
                M(t, e, 8, "rgba(255,255,255,0.16)", 76.8),
                t.lineWidth = 2;
                for (let r = 0; r < 26; r++) {
                    let r = 256 * e();
                    t.strokeStyle = `rgba(96,96,90,${.06 + .1 * e()})`,
                    t.beginPath(),
                    t.moveTo(r, 256 * e()),
                    t.lineTo(r + (e() - .5) * 3, 256),
                    t.stroke()
                }
                t.strokeStyle = "rgba(70,70,66,0.5)",
                t.lineWidth = 2;
                for (let e = 0; e <= 2; e++) {
                    let r = 128 * e;
                    t.beginPath(),
                    t.moveTo(r, 0),
                    t.lineTo(r, 256),
                    t.moveTo(0, r),
                    t.lineTo(256, r),
                    t.stroke()
                }
                y(t, 16, e)
            }
            )
              , e = g(1202, (t, e) => {
                S(t, "#8a8a8a");
                t.strokeStyle = "#3a3a3a",
                t.lineWidth = 3;
                for (let e = 0; e <= 2; e++) {
                    let r = 128 * e;
                    t.beginPath(),
                    t.moveTo(r, 0),
                    t.lineTo(r, 256),
                    t.moveTo(0, r),
                    t.lineTo(256, r),
                    t.stroke()
                }
                y(t, 26, e)
            }
            );
            return R({
                map: m(t, !0),
                bumpMap: m(e, !1),
                tile: 4,
                roughness: .92,
                bumpScale: .06
            })
        },
        brick: function() {
            let t = g(2301, (t, e) => {
                S(t, "#c9c2ba");
                let r = 256 / 26;
                for (let l = 0; l < 26; l++) {
                    let a = 16 * (l % 2 != 0);
                    for (let o = -1; o <= 8; o++) {
                        let i = .78 + .34 * e();
                        t.fillStyle = `rgb(${Math.round(232 * i)},${Math.round(212 * i)},${Math.round(198 * i)})`,
                        t.fillRect(32 * o + a + 1.5, l * r + 1.5, 29, r - 3)
                    }
                }
                M(t, e, 16, "rgba(90,86,78,0.24)", 66.56),
                y(t, 14, e)
            }
            )
              , e = g(2302, (t, e) => {
                S(t, "#2e2e2e");
                let r = 256 / 26;
                t.fillStyle = "#c8c8c8";
                for (let e = 0; e < 26; e++) {
                    let l = 16 * (e % 2 != 0);
                    for (let a = -1; a <= 8; a++)
                        t.fillRect(32 * a + l + 2, e * r + 2, 28, r - 4)
                }
                y(t, 18, e)
            }
            );
            return R({
                map: m(t, !0),
                bumpMap: m(e, !1),
                tile: 2.4,
                roughness: .95,
                bumpScale: .1
            })
        },
        windows: function() {
            let t = g(3401, (t, e) => {
                S(t, "#8c9aa8");
                for (let r = 0; r < 2; r++)
                    for (let l = 0; l < 4; l++) {
                        let a = .62 + .5 * e();
                        t.fillStyle = `rgb(${Math.round(150 * a)},${Math.round(172 * a)},${Math.round(190 * a)})`,
                        t.fillRect(64 * l, 128 * r, 64, 128);
                        let o = t.createLinearGradient(0, 128 * r, 0, 128 * r + 128);
                        o.addColorStop(0, "rgba(255,255,255,0.34)"),
                        o.addColorStop(.45, "rgba(255,255,255,0.04)"),
                        o.addColorStop(1, "rgba(10,16,24,0.22)"),
                        t.fillStyle = o,
                        t.fillRect(64 * l, 128 * r, 64, 128)
                    }
                t.fillStyle = "#2f3540";
                for (let e = 0; e <= 4; e++)
                    t.fillRect(64 * e - 3, 0, 6, 256);
                for (let e = 0; e <= 2; e++)
                    t.fillRect(0, 128 * e - 3, 256, 6);
                t.fillStyle = "#3b424d",
                t.fillRect(0, 235.52, 256, 20.48)
            }
            )
              , e = g(3402, (t, e) => {
                S(t, "#000000");
                for (let r = 0; r < 2; r++)
                    for (let l = 0; l < 4; l++) {
                        if (e() > .42)
                            continue;
                        let a = .6 + .4 * e();
                        t.fillStyle = `rgb(255,${Math.round(226 * a)},${Math.round(170 * a)})`,
                        t.fillRect(64 * l + 5, 128 * r + 5, 54, 118)
                    }
            }
            )
              , r = g(3403, t => {
                S(t, "#2b2b2b");
                t.fillStyle = "#d0d0d0";
                for (let e = 0; e <= 4; e++)
                    t.fillRect(64 * e - 3, 0, 6, 256);
                for (let e = 0; e <= 2; e++)
                    t.fillRect(0, 128 * e - 3, 256, 6)
            }
            );
            return R({
                map: m(t, !0),
                roughnessMap: m(r, !1),
                emissiveMap: m(e, !0),
                tile: 3.2,
                roughness: 1,
                metalness: .35
            })
        },
        metal: function() {
            return R({
                map: m(g(4501, (t, e) => {
                    S(t, "#e8ebee");
                    for (let r = 0; r < 60; r++) {
                        let r = 256 * e();
                        t.strokeStyle = `rgba(${140 + 80 * e()},${145 + 80 * e()},${150 + 80 * e()},0.2)`,
                        t.lineWidth = 1 + 2 * e(),
                        t.beginPath(),
                        t.moveTo(0, r),
                        t.lineTo(256, r + (e() - .5) * 4),
                        t.stroke()
                    }
                    M(t, e, 10, "rgba(120,100,80,0.18)", 46.08),
                    t.fillStyle = "rgba(90,95,100,0.5)";
                    for (let e = 0; e < 8; e++) {
                        let r = 32 * (e + .5);
                        for (let e = 0; e < 16; e++)
                            t.beginPath(),
                            t.arc(16 * (e + .5), r, 1.6, 0, 2 * Math.PI),
                            t.fill()
                    }
                    y(t, 10, e)
                }
                ), !0),
                tile: 1.6,
                roughness: .52,
                metalness: .55
            })
        },
        corrugated: function() {
            let t = g(5601, (t, e) => {
                S(t, "#dfe3e6");
                let r = 256 / 9;
                for (let e = 0; e < 9; e++) {
                    let l = t.createLinearGradient(e * r, 0, (e + 1) * r, 0);
                    l.addColorStop(0, "rgba(40,44,48,0.5)"),
                    l.addColorStop(.28, "rgba(255,255,255,0.28)"),
                    l.addColorStop(.6, "rgba(255,255,255,0.06)"),
                    l.addColorStop(1, "rgba(40,44,48,0.5)"),
                    t.fillStyle = l,
                    t.fillRect(e * r, 0, r, 256)
                }
                M(t, e, 18, "rgba(122,66,34,0.3)", 40.96),
                M(t, e, 8, "rgba(255,255,255,0.14)", 51.2),
                t.fillStyle = "rgba(30,34,38,0.55)",
                t.fillRect(0, 0, 256, 4),
                t.fillRect(0, 252, 256, 4),
                y(t, 12, e)
            }
            )
              , e = g(5602, t => {
                let e = 256 / 9;
                for (let r = 0; r < 9; r++) {
                    let l = t.createLinearGradient(r * e, 0, (r + 1) * e, 0);
                    l.addColorStop(0, "#101010"),
                    l.addColorStop(.5, "#f0f0f0"),
                    l.addColorStop(1, "#101010"),
                    t.fillStyle = l,
                    t.fillRect(r * e, 0, e, 256)
                }
            }
            );
            return R({
                map: m(t, !0),
                bumpMap: m(e, !1),
                tile: 1.4,
                roughness: .58,
                metalness: .45,
                bumpScale: .12
            })
        },
        chainlink: function() {
            return R({
                map: m(g(4471, t => {
                    t.lineCap = "round";
                    let e = 256 / 6;
                    for (let[r,l] of [[1, "rgba(232,236,238,0.98)"], [-1, "rgba(176,183,188,0.98)"]]) {
                        t.strokeStyle = l,
                        t.lineWidth = 3.4,
                        t.beginPath();
                        for (let l = -6; l <= 12; l++) {
                            let a = l * e;
                            t.moveTo(a, 0),
                            t.lineTo(a + 256 * r, 256)
                        }
                        t.stroke()
                    }
                }
                ), !0),
                tile: .42,
                roughness: .55,
                metalness: .4,
                alphaTest: .5
            })
        },
        roof: function() {
            return R({
                map: m(g(6701, (t, e) => {
                    S(t, "#b9b6ae");
                    for (let r = 0; r < 2600; r++) {
                        let r = 120 + Math.round(110 * e());
                        t.fillStyle = `rgba(${r},${r - 4},${r - 12},0.55)`,
                        t.fillRect(256 * e(), 256 * e(), 2, 2)
                    }
                    t.strokeStyle = "rgba(70,68,64,0.45)",
                    t.lineWidth = 3;
                    for (let e = 0; e < 4; e++) {
                        let r = 64 * (e + .5);
                        t.beginPath(),
                        t.moveTo(0, r),
                        t.lineTo(256, r),
                        t.stroke()
                    }
                    M(t, e, 12, "rgba(60,58,54,0.3)", 61.44),
                    y(t, 22, e)
                }
                ), !0),
                tile: 3,
                roughness: .96
            })
        },
        asphalt: function() {
            let t = h(i.asphalt);
            if (t) {
                let e = g(7801, (t, e) => {
                    t.clearRect(0, 0, 256, 256);
                    for (let r = 0; r < 5; r++) {
                        let r = 256 * (.14 + .26 * e())
                          , l = 256 * (.1 + .22 * e())
                          , a = 256 * e()
                          , o = 256 * e()
                          , i = .5 > e() ? 40 : 210;
                        b(256, a, o, Math.max(r, l), (a, o) => {
                            t.fillStyle = `rgba(${i},${i},${i},${.5 > e() ? .18 : .12})`,
                            t.fillRect(a - r / 2, o - l / 2, r, l)
                        }
                        )
                    }
                    M(t, e, 10, "rgba(20,20,18,0.28)", 46.08),
                    t.strokeStyle = "rgba(18,18,16,0.45)",
                    t.lineWidth = 1.3;
                    for (let r = 0; r < 12; r++) {
                        let r = 256 * e()
                          , l = 256 * e();
                        t.beginPath(),
                        t.moveTo(r, l);
                        for (let a = 0; a < 6; a++)
                            r += (e() - .5) * 40,
                            l += (e() - .5) * 40,
                            t.lineTo(r, l);
                        t.stroke()
                    }
                    for (let r = 0; r < 22; r++) {
                        let r = .55 + .5 * e();
                        t.fillStyle = `rgba(${Math.round(96 * r)},${Math.round(112 * r)},${Math.round(62 * r)},0.55)`;
                        let l = 256 * e()
                          , a = 256 * e();
                        t.beginPath(),
                        t.ellipse(l, a, 1.4 + 2.6 * e(), .9 + 1.8 * e(), e() * Math.PI, 0, 2 * Math.PI),
                        t.fill()
                    }
                }
                );
                return R({
                    map: function(t, e) {
                        if (!e || "u" < typeof document)
                            return t;
                        let r = t.image;
                        if (!r)
                            return t;
                        let l = document.createElement("canvas");
                        l.width = 256,
                        l.height = 256;
                        let a = l.getContext("2d");
                        return a ? (a.drawImage(r, 0, 0, 256, 256),
                        a.drawImage(e, 0, 0),
                        m(l, !0) ?? t) : t
                    }(t.asphaltDiff, e),
                    roughnessMap: t.asphaltRough,
                    normalMap: t.asphaltNor,
                    normalScale: .55,
                    tile: o.asphalt,
                    roughness: .9,
                    envMapIntensity: 1.05
                })
            }
            return R({
                map: m(g(7801, (t, e) => {
                    for (let r = 0; r < 4; r++)
                        for (let l = 0; l < 4; l++) {
                            let a = 196 + Math.round(44 * e());
                            t.fillStyle = `rgb(${a},${a + 2},${a - 4})`,
                            t.fillRect(64 * l, 64 * r, 64, 64)
                        }
                    for (let r = 0; r < 5; r++) {
                        let r = 256 * (.14 + .26 * e())
                          , l = 256 * (.1 + .22 * e())
                          , a = 256 * e()
                          , o = 256 * e()
                          , i = .5 > e() ? 168 + 22 * e() : 226 + 22 * e();
                        b(256, a, o, Math.max(r, l), (e, a) => {
                            t.fillStyle = `rgb(${i},${i + 2},${i - 3})`,
                            t.fillRect(e - r / 2, a - l / 2, r, l)
                        }
                        )
                    }
                    M(t, e, 14, "rgba(70,70,66,0.22)", 51.2),
                    t.strokeStyle = "rgba(48,48,45,0.55)",
                    t.lineWidth = 1.4;
                    for (let r = 0; r < 14; r++) {
                        let r = 256 * e()
                          , l = 256 * e();
                        t.beginPath(),
                        t.moveTo(r, l);
                        for (let a = 0; a < 6; a++)
                            r += (e() - .5) * 40,
                            l += (e() - .5) * 40,
                            t.lineTo(r, l);
                        t.stroke()
                    }
                    for (let r = 0; r < 26; r++) {
                        let r = .6 + .5 * e();
                        t.fillStyle = `rgba(${Math.round(96 * r)},${Math.round(112 * r)},${Math.round(62 * r)},0.75)`;
                        let l = 256 * e()
                          , a = 256 * e();
                        t.beginPath(),
                        t.ellipse(l, a, 1.6 + 3 * e(), 1 + 2 * e(), e() * Math.PI, 0, 2 * Math.PI),
                        t.fill()
                    }
                    t.strokeStyle = "rgba(38,39,36,0.75)",
                    t.lineWidth = 2.5;
                    for (let e = 0; e <= 4; e++) {
                        let r = 64 * e;
                        t.beginPath(),
                        t.moveTo(r, 0),
                        t.lineTo(r, 256),
                        t.moveTo(0, r),
                        t.lineTo(256, r),
                        t.stroke()
                    }
                    y(t, 26, e)
                }
                ), !0),
                tile: 4,
                roughness: .95
            })
        },
        rubber: function() {
            return R({
                map: m(g(8901, (t, e) => {
                    S(t, "#3c3c3e"),
                    t.fillStyle = "rgba(20,20,22,0.8)";
                    for (let e = 0; e < 12; e++)
                        t.fillRect(0, 256 / 12 * e, 256, 256 / 24);
                    y(t, 20, e)
                }
                ), !0),
                tile: .7,
                roughness: .95
            })
        },
        plastic: function() {
            return R({
                map: m(g(9101, (t, e) => {
                    S(t, "#f4f5f6"),
                    M(t, e, 12, "rgba(90,90,95,0.14)", 51.2);
                    for (let r = 0; r < 30; r++) {
                        t.strokeStyle = `rgba(60,60,64,${.05 + .08 * e()})`,
                        t.lineWidth = 1;
                        let r = 256 * e()
                          , l = 256 * e();
                        t.beginPath(),
                        t.moveTo(r, l),
                        t.lineTo(r + (e() - .5) * 30, l + (e() - .5) * 30),
                        t.stroke()
                    }
                    y(t, 8, e)
                }
                ), !0),
                tile: 1.2,
                roughness: .42,
                metalness: .05
            })
        },
        skid: function() {
            return R({
                map: m(g(8903, (t, e) => {
                    t.clearRect(0, 0, 256, 256);
                    for (let r = 0; r < 5; r++) {
                        let r = 256 * (.22 + .56 * e())
                          , l = 4 + 10 * e()
                          , a = .35 + .45 * e()
                          , o = t.createLinearGradient(0, 0, 0, 256);
                        o.addColorStop(0, "rgba(12,12,14,0)"),
                        o.addColorStop(.12, `rgba(18,18,20,${.7 * a})`),
                        o.addColorStop(.5, `rgba(10,10,12,${a})`),
                        o.addColorStop(.88, `rgba(18,18,20,${.65 * a})`),
                        o.addColorStop(1, "rgba(12,12,14,0)"),
                        t.fillStyle = o,
                        t.beginPath(),
                        t.ellipse(r, 128, l / 2, 122.88, 0, 0, 2 * Math.PI),
                        t.fill()
                    }
                    y(t, 10, e)
                }
                , 256), !0),
                tile: 1,
                roughness: .7,
                alphaTest: .12
            })
        },
        stain: function() {
            return R({
                map: m(g(8905, (t, e) => {
                    t.clearRect(0, 0, 256, 256);
                    for (let r = 0; r < 4; r++) {
                        let r = 256 * (.3 + .4 * e())
                          , l = 256 * (.3 + .4 * e())
                          , a = 256 * (.18 + .28 * e())
                          , o = 256 * (.14 + .22 * e())
                          , i = t.createRadialGradient(r, l, 0, r, l, Math.max(a, o));
                        i.addColorStop(0, `rgba(8,10,12,${.55 + .3 * e()})`),
                        i.addColorStop(.45, `rgba(22,28,18,${.28 + .2 * e()})`),
                        i.addColorStop(1, "rgba(0,0,0,0)"),
                        t.fillStyle = i,
                        t.beginPath(),
                        t.ellipse(r, l, a, o, e() * Math.PI, 0, 2 * Math.PI),
                        t.fill()
                    }
                    M(t, e, 3, "rgba(40,70,55,0.18)", 51.2)
                }
                , 256), !0),
                tile: 1,
                roughness: .35,
                metalness: .08,
                alphaTest: .08,
                envMapIntensity: 1.2
            })
        },
        wood: function() {
            return R({
                map: m(g(9201, (t, e) => {
                    S(t, "#d8c7ae");
                    for (let r = 0; r < 5; r++) {
                        let l = .78 + .34 * e();
                        t.fillStyle = `rgb(${Math.round(214 * l)},${Math.round(192 * l)},${Math.round(160 * l)})`,
                        t.fillRect(0, 51.2 * r, 256, 49.2);
                        for (let l = 0; l < 8; l++) {
                            t.strokeStyle = `rgba(120,96,68,${.1 + .16 * e()})`,
                            t.lineWidth = 1;
                            let l = 51.2 * r + 51.2 * e();
                            t.beginPath(),
                            t.moveTo(0, l),
                            t.bezierCurveTo(256 / 3, l + 2, 512 / 3, l - 2, 256, l),
                            t.stroke()
                        }
                    }
                    y(t, 14, e)
                }
                ), !0),
                tile: 1.4,
                roughness: .9
            })
        },
        foliage: function() {
            return R({
                map: m(g(9301, (t, e) => {
                    S(t, "#8fad68");
                    for (let r = 0; r < 900; r++) {
                        let r = .7 + .65 * e();
                        t.fillStyle = `rgba(${Math.round(130 * r)},${Math.round(168 * r)},${Math.round(90 * r)},0.8)`;
                        let l = 256 * e()
                          , a = 256 * e();
                        t.beginPath(),
                        t.ellipse(l, a, 3 + 5 * e(), 2 + 3 * e(), e() * Math.PI, 0, 2 * Math.PI),
                        t.fill()
                    }
                    y(t, 18, e)
                }
                ), !0),
                tile: 1,
                roughness: .82,
                envMapIntensity: 1.15
            })
        },
        dirt: function() {
            let t = h(i.dirt);
            return t ? R({
                map: t.dirtDiff,
                roughnessMap: t.dirtRough,
                normalMap: t.dirtNor,
                normalScale: .45,
                tile: o.dirt,
                roughness: .98
            }) : R({
                map: m(g(3307, (t, e) => {
                    S(t, "#a08765");
                    for (let r = 0; r < 4200; r++) {
                        let r = .62 + .62 * e();
                        t.fillStyle = `rgba(${Math.round(150 * r)},${Math.round(124 * r)},${Math.round(92 * r)},0.85)`,
                        t.fillRect(256 * e(), 256 * e(), 1 + 3 * e(), 1 + 3 * e())
                    }
                    M(t, e, 12, "rgba(84,66,46,0.3)", 61.44),
                    t.strokeStyle = "rgba(88,70,50,0.4)",
                    t.lineWidth = 2;
                    for (let r = 0; r < 14; r++) {
                        let r = 256 * e();
                        t.beginPath(),
                        t.moveTo(r, 0);
                        for (let l = 0; l <= 256; l += 256 / 6)
                            r += (e() - .5) * 16,
                            t.lineTo(r, l);
                        t.stroke()
                    }
                    y(t, 30, e)
                }
                ), !0),
                tile: 3,
                roughness: .98
            })
        },
        gravel: function() {
            let t = h(i.gravel);
            if (t)
                return R({
                    map: t.gravelDiff,
                    roughnessMap: t.gravelRough,
                    tile: o.gravel,
                    roughness: .94,
                    bumpScale: 0
                });
            let e = g(5119, (t, e) => {
                S(t, "#8d8b84");
                for (let r = 0; r < 2600; r++) {
                    let r = .55 + .75 * e()
                      , l = 2 + 5 * e();
                    t.fillStyle = `rgba(${Math.round(148 * r)},${Math.round(145 * r)},${Math.round(136 * r)},0.95)`;
                    let a = 256 * e()
                      , o = 256 * e();
                    t.beginPath(),
                    t.ellipse(a, o, l, l * (.6 + .5 * e()), e() * Math.PI, 0, 2 * Math.PI),
                    t.fill()
                }
                M(t, e, 8, "rgba(60,58,54,0.22)", 56.32),
                y(t, 34, e)
            }
            )
              , r = g(5120, (t, e) => {
                S(t, "#808080");
                for (let r = 0; r < 2600; r++) {
                    let r = Math.round(110 + 90 * e())
                      , l = 2 + 5 * e();
                    t.fillStyle = `rgb(${r},${r},${r})`,
                    t.beginPath(),
                    t.arc(256 * e(), 256 * e(), l, 0, 2 * Math.PI),
                    t.fill()
                }
            }
            );
            return R({
                map: m(e, !0),
                bumpMap: m(r, !1),
                bumpScale: .04,
                tile: 2,
                roughness: .94
            })
        },
        water: function() {
            let t = g(6607, (t, e) => {
                S(t, "#243536"),
                M(t, e, 10, "rgba(48,72,68,0.35)", 89.6),
                M(t, e, 6, "rgba(20,28,30,0.4)", 56.32),
                y(t, 6, e)
            }
            )
              , e = g(6608, (t, e) => {
                S(t, "#808080");
                for (let r = 0; r < 80; r++) {
                    let r = 256 * e()
                      , l = 256 * e()
                      , a = 110 + Math.floor(40 * e());
                    t.fillStyle = `rgb(${a},${a},${a})`,
                    t.beginPath(),
                    t.ellipse(r, l, 8 + 18 * e(), 3 + 6 * e(), e() * Math.PI, 0, 2 * Math.PI),
                    t.fill()
                }
            }
            );
            return R({
                map: m(t, !0),
                bumpMap: m(e, !1),
                bumpScale: .08,
                tile: 8,
                roughness: .1,
                metalness: .4,
                envMapIntensity: 1.6
            })
        }
    }, "createBladeTexture", 0, function() {
        return m(g(9401, (t, e) => {
            t.clearRect(0, 0, 256, 256);
            for (let r = 0; r < 26; r++) {
                let r = 256 * (.08 + .84 * e())
                  , l = 3 + 5 * e()
                  , a = r + (e() - .5) * 56.32
                  , o = 256 * (.04 + .42 * e())
                  , i = .62 + .5 * e();
                t.fillStyle = `rgb(${Math.round(150 * i)},${Math.round(190 * i)},${Math.round(104 * i)})`,
                t.beginPath(),
                t.moveTo(r - l, 256),
                t.quadraticCurveTo(r - .4 * l, 140.8, a, o),
                t.quadraticCurveTo(r + .4 * l, 140.8, r + l, 256),
                t.closePath(),
                t.fill()
            }
        }
        , 128), !0)
    }
    , "grain", 0, y, "propDiscTexture", 0, function() {
        return x ??= m(g(7103, (t, e) => {
            t.clearRect(0, 0, 256, 256);
            let r = t.createRadialGradient(128, 128, 0, 128, 128, 128);
            r.addColorStop(0, "rgba(70,76,84,0)"),
            r.addColorStop(.22, "rgba(70,76,84,0)"),
            r.addColorStop(.4, "rgba(80,86,94,0.06)"),
            r.addColorStop(.7, "rgba(90,96,104,0.12)"),
            r.addColorStop(.88, "rgba(110,118,128,0.2)"),
            r.addColorStop(.96, "rgba(120,128,136,0.12)"),
            r.addColorStop(1, "rgba(90,96,104,0)"),
            t.fillStyle = r,
            t.beginPath(),
            t.arc(128, 128, 128, 0, 2 * Math.PI),
            t.fill();
            for (let e = 0; e < 3; e++) {
                let r = e * Math.PI * 2 / 3 + .15
                  , l = 30.72
                  , a = 120.32;
                t.save(),
                t.translate(128, 128),
                t.rotate(r);
                let o = t.createLinearGradient(l, 0, a, 0);
                o.addColorStop(0, "rgba(90,96,104,0)"),
                o.addColorStop(.35, "rgba(90,96,104,0.08)"),
                o.addColorStop(.85, "rgba(110,118,128,0.12)"),
                o.addColorStop(1, "rgba(90,96,104,0)"),
                t.fillStyle = o,
                t.beginPath(),
                t.moveTo(l, -(.11 * l)),
                t.quadraticCurveTo(.55 * a, -(.11 * a * .7), a, -(.02 * a)),
                t.lineTo(a, .02 * a),
                t.quadraticCurveTo(.55 * a, .11 * a * .7, l, .11 * l),
                t.closePath(),
                t.fill(),
                t.restore()
            }
            for (let r = 0; r < 16; r++) {
                let r = 128 * (.28 + .64 * e())
                  , l = e() * Math.PI * 2
                  , a = .12 + .4 * e();
                t.strokeStyle = `rgba(140,148,156,${.02 + .05 * e()})`,
                t.lineWidth = .8 + 1.8 * e(),
                t.beginPath(),
                t.arc(128, 128, r, l, l + a),
                t.stroke()
            }
        }
        , 256), !0)
    }
    , "wrapped", 0, b], 128921)
}
, 789788, t => {
    "use strict";
    var e = t.i(475127)
      , r = t.i(646423)
      , l = t.i(247800)
      , a = t.i(11871)
      , o = t.i(739011);
    let i = l.STEPS_PER_TICK * l.TICK_RATE
      , n = (t=0) => (t > 0 ? Math.min(60, t) : 0) * Math.PI / 180;
    function s(t, e, r) {
        let l = t[0]
          , a = t[1]
          , o = t[2]
          , i = t[3]
          , n = e[0]
          , s = e[1]
          , u = e[2]
          , f = 2 * (a * u - o * s)
          , h = 2 * (o * n - l * u)
          , c = 2 * (l * s - a * n);
        return r[0] = n + i * f + (a * c - o * h),
        r[1] = s + i * h + (o * f - l * c),
        r[2] = u + i * c + (l * h - a * f),
        r
    }
    function u(t) {
        let e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        if (e > 0)
            for (let r = 0; r < 3; r++)
                t[r] /= e;
        return t
    }
    let f = (t, e) => t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
    function h(t, r, l, a, o) {
        s(r, l.offset, a);
        for (let e = 0; e < 3; e++)
            a[e] += t[e];
        u(s(r, [0, (0,
        e.sin)(l.tilt), -(0,
        e.cos)(l.tilt)], o))
    }
    let c = (t, e, r) => t.speed + f(e, r);
    function d(t, r, l, a, i, n) {
        let s = -1
          , h = 1 / 0
          , c = [0, 0, 0];
        for (let l = 0; l < i.length; l++) {
            let n = i[l];
            for (let e = 0; e < 3; e++)
                c[e] = n.position[e] - t[e];
            let u = Math.sqrt(f(c, c));
            if (u <= 0)
                continue;
            let d = (0,
            e.acos)(Math.min(1, Math.max(-1, f(r, c) / u)));
            d <= (0,
            e.atan)((0,
            o.boltRadius)(a, u) / u) + (0,
            e.atan)(n.bound / u) && d < h && (h = d,
            s = l)
        }
        if (n[0] = r[0],
        n[1] = r[1],
        n[2] = r[2],
        s < 0)
            return -1;
        let d = i[s]
          , p = d.velocity;
        for (let e = 0; e < 3; e++)
            c[e] = d.position[e] - t[e];
        let g = f(p, p) - l * l
          , m = 2 * f(c, p)
          , b = f(c, c)
          , y = -1;
        if (1e-9 > Math.abs(g))
            y = m < 0 ? -b / m : -1;
        else {
            let t = m * m - 4 * g * b;
            if (t >= 0) {
                let e = Math.sqrt(t)
                  , r = (-m - e) / (2 * g)
                  , l = (-m + e) / (2 * g);
                (y = Math.min(r > 0 ? r : 1 / 0, l > 0 ? l : 1 / 0)) === 1 / 0 && (y = -1)
            }
        }
        let M = y > 0 ? [c[0] + p[0] * y, c[1] + p[1] * y, c[2] + p[2] * y] : [c[0], c[1], c[2]];
        u(M);
        let S = (0,
        e.acos)(Math.min(1, Math.max(-1, f(r, M))))
          , R = a.aimHelpDeg * Math.PI / 180;
        if (S <= R)
            return n[0] = M[0],
            n[1] = M[1],
            n[2] = M[2],
            s;
        let x = f(r, M)
          , v = u([M[0] - r[0] * x, M[1] - r[1] * x, M[2] - r[2] * x])
          , T = (0,
        e.cos)(R)
          , w = (0,
        e.sin)(R);
        for (let t = 0; t < 3; t++)
            n[t] = r[t] * T + v[t] * w;
        return u(n),
        s
    }
    function p(t, e, r, l, a) {
        let o = t[0] - r[0]
          , i = t[1] - r[1]
          , n = t[2] - r[2]
          , s = e[0] - t[0] - (l[0] - r[0])
          , u = e[1] - t[1] - (l[1] - r[1])
          , f = e[2] - t[2] - (l[2] - r[2])
          , h = o * o + i * i + n * n - a * a;
        if (h <= 0)
            return 0;
        let c = s * s + u * u + f * f;
        if (c <= 0)
            return -1;
        let d = 2 * (o * s + i * u + n * f)
          , p = d * d - 4 * c * h;
        if (p < 0)
            return -1;
        let g = (-d - Math.sqrt(p)) / (2 * c);
        return g >= 0 && g <= 1 ? g : -1
    }
    t.s(["MAX_CAMERA_TILT_DEG", 0, 60, "STEPS_PER_SECOND", 0, i, "aimHelp", 0, d, "boltSpeed", 0, c, "boundingRadius", 0, t => (0,
    e.hypot)(t[0], t[1], t[2]), "muzzleOf", 0, (t, e=0) => ({
        offset: a.DRONE_PROFILES[t].camera,
        tilt: n(e)
    }), "muzzleRay", 0, h, "muzzleTilt", 0, n, "predictBolt", 0, function(t, e, r= (t, e, r) => r) {
        let a = [0, 0, 0]
          , n = [0, 0, 0]
          , s = [0, 0, 0];
        h(t.position, t.rotation, t.muzzle, a, n);
        let u = c(t.gun, t.velocity, n)
          , f = t.tick * l.STEPS_PER_TICK
          , g = [0, 0, 0]
          , m = [0, 0, 0]
          , b = [];
        for (let t of e)
            t.centre(f, g) && b.push({
                position: [...g],
                velocity: t.velocity,
                bound: t.bound
            });
        d(a, n, u, t.gun, b, s);
        let y = u > 0 ? Math.min(t.gun.range, r(a, s, t.gun.range)) : 0
          , M = u > 0 ? Math.ceil(y * i / u) : 0
          , S = [0, 0, 0]
          , R = [0, 0, 0]
          , x = u / i;
        for (let r = 0; r < M; r++) {
            let l = Math.min(y, x * r)
              , i = Math.min(y, x * (r + 1));
            for (let t = 0; t < 3; t++)
                S[t] = a[t] + s[t] * l,
                R[t] = a[t] + s[t] * i;
            let n = -1
              , h = 1 / 0;
            for (let l of e) {
                if (!l.centre(f + r, g) || !l.centre(f + r + 1, m))
                    continue;
                let e = p(S, R, g, m, (0,
                o.boltRadius)(t.gun, i) + l.bound);
                e >= 0 && e < h && (h = e,
                n = l.seat)
            }
            if (n >= 0)
                return {
                    origin: a,
                    dir: s,
                    speed: u,
                    length: y,
                    hit: {
                        seat: n,
                        step: f + r + h
                    }
                }
        }
        return {
            origin: a,
            dir: s,
            speed: u,
            length: y,
            hit: null
        }
    }
    , "rotate", 0, s, "segmentDistance", 0, function(t, e, r) {
        let l = r[0] - e[0]
          , a = r[1] - e[1]
          , o = r[2] - e[2]
          , i = t[0] - e[0]
          , n = t[1] - e[1]
          , s = t[2] - e[2]
          , u = l * l + a * a + o * o
          , f = u > 0 ? Math.min(1, Math.max(0, (i * l + n * a + s * o) / u)) : 0;
        return Math.sqrt((i - l * f) * (i - l * f) + (n - a * f) * (n - a * f) + (s - o * f) * (s - o * f))
    }
    , "sweptContact", 0, p, "wallDistance", 0, function(t, e, l, a, o) {
        let i = new t.Ray({
            x: l[0],
            y: l[1],
            z: l[2]
        },{
            x: a[0],
            y: a[1],
            z: a[2]
        })
          , n = e.castRay(i, o, !0, t.QueryFilterFlags.EXCLUDE_SENSORS, r.GAP_QUERY_GROUPS);
        return n ? Math.min(o, n.timeOfImpact) : o
    }
    ])
}
, 646423, t => {
    "use strict";
    var e = t.i(961731)
      , r = t.i(124241);
    let l = (t, e) => (t << 16 | e) >>> 0
      , a = l(2, 65)
      , o = l(4, 17)
      , i = l(64, 65535)
      , n = l(16, 36)
      , s = l(32, 1)
      , u = l(65535, 65535)
      , f = {
        raceGate: !0
    };
    t.s(["DRIFT_GROUPS", 0, i, "GAP_QUERY_GROUPS", 0, s, "GHOST_GROUPS", 0, o, "PILOT_GROUPS", 0, a, "RoomGates", 0, class {
        rapier;
        physics;
        owners;
        owned;
        boxes;
        pilots;
        probe;
        changes;
        hooks;
        constructor(t, e, r) {
            this.rapier = t,
            this.physics = e,
            this.owners = new Map,
            this.owned = new Map,
            this.boxes = new Map,
            this.changes = 0,
            this.pilots = r;
            const l = new t.Ray({
                x: 0,
                y: 0,
                z: 0
            },{
                x: 0,
                y: -1,
                z: 0
            })
              , a = t => {
                let e = t.parent();
                return !e || e.isFixed() && e.userData?.raceGate !== !0
            }
            ;
            this.probe = (r, o, i) => {
                l.origin.x = r,
                l.origin.y = i,
                l.origin.z = o;
                let n = e.castRay(l, 400, !0, t.QueryFilterFlags.EXCLUDE_SENSORS, void 0, void 0, void 0, a);
                return n ? i - n.timeOfImpact : null
            }
            ,
            this.hooks = {
                filterContactPair: (e, r, l, a) => {
                    let o = this.owners.get(e) ?? this.owners.get(r);
                    return void 0 === o || (this.pilots(l) ?? this.pilots(a)) === o ? t.SolverFlags.COMPUTE_IMPULSE : null
                }
                ,
                filterIntersectionPair: () => !0
            }
        }
        addOwned(t, e, r) {
            let l = `${t}\u0000${e}`;
            if (this.owned.has(l))
                return;
            let a = this.build(r, n);
            for (let e = 0; e < a.numColliders(); e++) {
                let r = a.collider(e);
                r.setActiveHooks(this.rapier.ActiveHooks.FILTER_CONTACT_PAIRS),
                this.owners.set(r.handle, t)
            }
            this.owned.set(l, {
                owner: t,
                body: a
            })
        }
        removeOwned(t, e) {
            let r = `${t}\u0000${e}`
              , l = this.owned.get(r);
            if (l) {
                for (let t = 0; t < l.body.numColliders(); t++)
                    this.owners.delete(l.body.collider(t).handle);
                this.physics.removeRigidBody(l.body),
                this.owned.delete(r),
                this.changes++
            }
        }
        clearOwner(t) {
            for (let[e,r] of [...this.owned])
                r.owner === t && this.removeOwned(t, e.slice(t.length + 1))
        }
        ownerOf(t) {
            return this.owners.get(t)
        }
        get ownedBodies() {
            return this.owned.size
        }
        get ownedParts() {
            return this.owners.size
        }
        ownedBy(t) {
            return e => {
                let r = this.owners.get(e.handle);
                return void 0 === r || r === t
            }
        }
        build(t, l) {
            let a = `${t.id}:${t.position.join(",")}:${t.rotation.join(",")}:${t.size.join(",")}`
              , o = this.boxes.get(a);
            o || (o = (0,
            e.raceGateColliders)(t, (0,
            e.raceGateKit)(t, t.color, this.probe)),
            this.boxes.set(a, o));
            let i = this.physics.createRigidBody(this.rapier.RigidBodyDesc.fixed());
            for (let t of (i.userData = f,
            this.changes++,
            o)) {
                let[e,a,o,n] = (0,
                r.eulerQuaternion)(t.rotation);
                this.physics.createCollider(this.rapier.ColliderDesc.cuboid(...t.halfExtents).setTranslation(...t.position).setRotation({
                    x: e,
                    y: a,
                    z: o,
                    w: n
                }).setCollisionGroups(l), i)
            }
            return i
        }
    }
    , "WALL_GROUPS", 0, u, "groupsInteract", 0, function(t, e) {
        return (65535 & e & t >>> 16) != 0 && (65535 & t & e >>> 16) != 0
    }
    , "queryGroups", 0, function(t) {
        return l(32, 1 | (t ? 16 : 64))
    }
    ])
}
, 273726, t => {
    "use strict";
    var e = t.i(235199);
    t.s(["INVERTED_PROMPT_SECONDS", 0, 3, "INVERTED_RESPAWN_SECONDS", 0, 20, "advanceInvertedRecovery", 0, function(t, e, r, l, a) {
        return !r || a >= -.25 ? 0 : l ? t + e : t
    }
    , "respawnAction", 0, function(t) {
        return t.activeTimeAttackId && t.raceRun ? t.raceRun.match ? t.timeAttackRunning ? "Back to last gate" : "Back to the start" : "Restart the run" : "Respawn"
    }
    , "respawnBindingLabel", 0, function(t, r) {
        return "gamepad" === r && "none" !== t.respawn.kind ? (0,
        e.describeSwitchBinding)(t.respawn) : (0,
        e.formatKeyCode)(t.keyboard.respawn)
    }
    ])
}
, 961731, t => {
    "use strict";
    var e = t.i(471646)
      , r = t.i(483359)
      , l = t.i(475127);
    let a = "#17191d"
      , o = "#f1eee6"
      , i = (t, e, r) => r >= 0 ? 0 : null;
    function n(t, e, r) {
        return Math.min(r, Math.max(e, t))
    }
    function s(t) {
        return Math.abs(t.normal[1]) > .7
    }
    function u(t) {
        return (0,
        r.gateBasis)(t).up[1] > .7
    }
    function f(t) {
        let e = n(.028 + .0065 * Math.max(t[0], t[1]), .048, .085)
          , r = 1.25 * e
          , l = r + Math.max(.02, .2 * e);
        return {
            t: e,
            d: r,
            cap: 1.05 * e,
            capDepth: l
        }
    }
    function h(t, e, r) {
        let[i,s] = t
          , u = i / 2
          , h = s / 2
          , {t: c, d, cap: p, capDepth: g} = f(t)
          , m = []
          , b = [];
        for (let t of [-1, 1])
            m.push({
                center: [t * (u + c), 0, 0],
                half: [c, h + 2 * c, d],
                color: o,
                layer: "body",
                solid: !0
            }),
            m.push({
                center: [0, t * (h + c), 0],
                half: [u, c, d],
                color: o,
                layer: "body",
                solid: !0
            });
        let y = .5 * c + p;
        for (let t of [-1, 1])
            for (let e of [-1, 1])
                m.push({
                    center: [t * (u + y), e * (h + y), 0],
                    half: [p, p, g],
                    color: a,
                    layer: "body",
                    solid: !0
                });
        let M = d + .012
          , S = .1 * c
          , R = .8 * c
          , x = (S + R) / 2
          , v = (R - S) / 2;
        for (let t of [-1, 1])
            for (let e of [-1, 1])
                m.push({
                    center: [e * (u + x), 0, t * M],
                    half: [v, h + S, .008],
                    color: r,
                    layer: "glow"
                }),
                m.push({
                    center: [0, e * (h + x), t * M],
                    half: [u + R, v, .008],
                    color: r,
                    layer: "glow"
                });
        let T = .4 * d;
        for (let t of [-1, 1])
            m.push({
                center: [t * (u - .006), 0, 0],
                half: [.006, h - .012, T],
                color: r,
                layer: "glow"
            }),
            m.push({
                center: [0, t * (h - .006), 0],
                half: [u - .012, .006, T],
                color: r,
                layer: "glow"
            });
        let w = .9 * c
          , P = 2 * c + Math.max(.015, .15 * c)
          , C = (w + P) / 2
          , E = (P - w) / 2
          , $ = Math.max(.05, .4 * c)
          , _ = d + Math.max(.015, .12 * c)
          , I = t => Math.max(0, Math.floor(t / 2.2) - 1)
          , z = I(2 * h);
        for (let t = 1; t <= z; t++) {
            let e = -h + 2 * h * t / (z + 1);
            for (let t of [-1, 1])
                m.push({
                    center: [t * (u + C), e, 0],
                    half: [E, $, _],
                    color: a,
                    layer: "body"
                })
        }
        let k = I(2 * u);
        for (let t = 1; t <= k; t++) {
            let e = -u + 2 * u * t / (k + 1);
            for (let t of [-1, 1])
                m.push({
                    center: [e, t * (h + C), 0],
                    half: [$, E, _],
                    color: a,
                    layer: "body"
                })
        }
        let D = g + .012;
        for (let t of [-1, 1])
            for (let e of [-1, 1])
                for (let r of [-1, 1])
                    b.push({
                        center: [t * (u + y), e * (h + y), r * D],
                        radius: .78 * p,
                        face: r
                    });
        if (e && i >= 2) {
            let t = n(.3 * u, .4, 1.1)
              , e = Math.max(.22, 3.6 * c)
              , o = h + 1.5 * c
              , i = h + 2 * c + e
              , s = .8 * d;
            m.push({
                center: [0, (o + i) / 2, 0],
                half: [t, (i - o) / 2, s],
                color: a,
                layer: "body"
            });
            let f = 2 * t / 3
              , p = Math.min(.42 * f, .55 * e)
              , g = Math.max(.018, .22 * c)
              , b = h + 2 * c + .26 * e;
            for (let e = 0; e < 3; e++) {
                let a = -t + f * (e + .5);
                for (let t of [-1, 1]) {
                    let e = l.cos(.7) * p * .5
                      , o = l.sin(.7) * p * .5;
                    m.push({
                        center: [a + t * e, b + o, s + .01],
                        half: [.5 * p, g, .006],
                        roll: .7 * t,
                        color: r,
                        layer: "glow"
                    })
                }
            }
        }
        return {
            frame: m,
            targets: b
        }
    }
    function c(t, e, r, a, o) {
        let i = l.cos(e)
          , n = l.sin(e);
        return [t.position[0] + r * i + o * n, t.position[1] + a, t.position[2] - r * n + o * i]
    }
    t.s(["FLAT_SURFACE", 0, i, "GATE_INK", 0, a, "GATE_TARGET_YELLOW", 0, "#ffc21a", "gateHasHeader", 0, u, "gateMetrics", 0, f, "raceGateColliders", 0, function(t, e) {
        let l = (0,
        r.gateBasis)(t)
          , {right: a, up: o, normal: i, euler: n} = l
          , s = (0,
        r.gateMountYaw)(l)
          , u = [];
        for (let r of e.frame) {
            if (!r.solid)
                continue;
            let[e,l,s] = r.center;
            u.push({
                position: [t.position[0] + e * a[0] + l * o[0] + s * i[0], t.position[1] + e * a[1] + l * o[1] + s * i[1], t.position[2] + e * a[2] + l * o[2] + s * i[2]],
                halfExtents: r.half,
                rotation: n,
                color: r.color,
                surface: "plastic",
                kind: "gate"
            })
        }
        for (let r of e.mount)
            r.solid && u.push({
                position: c(t, s, ...r.center),
                halfExtents: r.half,
                rotation: [0, s, 0],
                color: r.color,
                surface: "plastic",
                kind: "gate"
            });
        return u
    }
    , "raceGateFrame", 0, function(t, e, r) {
        return h(t, e, r)
    }
    , "raceGateKit", 0, function(t, e, n=i) {
        let {frame: d, targets: p} = h(t.size, u(t), e)
          , {stance: g, mount: m, thrusters: b} = function(t, e, i) {
            let {t: n, cap: u} = f(t.size)
              , h = (0,
            r.gateBasis)(t)
              , d = s(h)
              , p = (0,
            r.gateMountYaw)(h)
              , g = (function(t, e, r) {
                let[a,o] = t.size
                  , i = a / 2
                  , n = o / 2
                  , {t: u, cap: h, capDepth: c} = f(t.size)
                  , d = .5 * u + h
                  , {right: p, up: g, normal: m} = e
                  , b = (Math.abs(p[1]) + Math.abs(g[1])) * h + Math.abs(m[1]) * c
                  , y = l.cos(r)
                  , M = l.sin(r)
                  , S = [];
                for (let t of [-1, 1])
                    for (let e of [-1, 1]) {
                        let r = e * (i + d)
                          , l = t * (n + d)
                          , a = r * p[0] + l * g[0]
                          , o = r * p[1] + l * g[1]
                          , s = r * p[2] + l * g[2];
                        S.push({
                            x: a * y - s * M,
                            z: a * M + s * y,
                            bottom: o - b
                        })
                    }
                let R = S.map(t => t.bottom).sort( (t, e) => t - e)
                  , x = s(e) ? 1 / 0 : R[1] + 1e-6;
                return S.filter(t => t.bottom <= x).sort( (t, e) => Math.abs(t.z - e.z) > 1e-6 ? t.z - e.z : t.x - e.x)
            }
            )(t, h, p).map(e => {
                let[r,,l] = c(t, p, e.x, 0, e.z)
                  , a = t.position[1] + e.bottom;
                return {
                    ...e,
                    bottomY: a,
                    surface: i(r, l, a)
                }
            }
            )
              , m = g.every(t => null !== t.surface && t.bottomY - t.surface <= 3)
              , b = [];
            if (m) {
                let e = Math.max(.018, .42 * n)
                  , r = .9 * n
                  , l = d ? r : .06 + 1.6 * n
                  , i = .015 + .3 * n;
                for (let n of g) {
                    let s = n.surface - t.position[1] + .012
                      , f = s + 2 * i;
                    b.push({
                        center: [n.x, s + i, n.z],
                        half: [r, i, l],
                        color: a,
                        layer: "body",
                        solid: !0
                    }),
                    b.push({
                        center: [n.x, f + .008, n.z],
                        half: [r + .006, .008, l + .006],
                        color: "#ff7900",
                        layer: "body"
                    });
                    let h = f + .016
                      , c = n.bottom + .6 * u;
                    c - h > .04 && b.push({
                        center: [n.x, (h + c) / 2, n.z],
                        half: [e, (c - h) / 2, e],
                        color: o,
                        layer: "body",
                        solid: !0
                    })
                }
                return {
                    stance: "ground",
                    mount: b,
                    thrusters: []
                }
            }
            let y = Math.max(.04, .85 * n)
              , M = Math.max(.08, 1.5 * n)
              , S = [];
            for (let t of g) {
                let r = t.bottom + .3 * u
                  , l = r - M
                  , o = r - 2 * M;
                b.push({
                    center: [t.x, l, t.z],
                    half: [y, M, y],
                    color: a,
                    layer: "body",
                    solid: !0
                }),
                b.push({
                    center: [t.x, l, t.z],
                    half: [y + .006, .22 * M, y + .006],
                    color: e,
                    layer: "glow"
                }),
                b.push({
                    center: [t.x, o - .01, t.z],
                    half: [.7 * y, .008, .7 * y],
                    color: e,
                    layer: "glow"
                }),
                S.push({
                    center: [t.x, o - .02, t.z],
                    radius: .95 * y,
                    length: .7 + 5 * n
                })
            }
            return {
                stance: "float",
                mount: b,
                thrusters: S
            }
        }(t, e, n);
        return {
            stance: g,
            frame: d,
            targets: p,
            mount: m,
            thrusters: b
        }
    }
    , "worldSurfaceProbe", 0, function(t) {
        let a = t.boxes.filter(t => !t.ghost && "gate" !== t.kind && "trim" !== t.kind).map(t => ({
            box: t,
            matrix: (0,
            r.eulerMatrix)(t.rotation),
            reach: l.hypot(...t.halfExtents)
        }));
        return (r, l, o) => {
            let i = null
              , n = t.terrain ? (0,
            e.terrainHeight)(t.terrain, r, l) : 0;
            for (let {box: t, matrix: e, reach: s} of (n <= o + 1e-6 && (i = n),
            a)) {
                let[a,n,u] = t.position;
                if (Math.abs(a - r) > s || Math.abs(u - l) > s || n - s > o)
                    continue;
                let f = r - a
                  , h = o - n
                  , c = l - u
                  , d = [e[0] * f + e[3] * h + e[6] * c, e[1] * f + e[4] * h + e[7] * c, e[2] * f + e[5] * h + e[8] * c]
                  , p = [-e[3], -e[4], -e[5]]
                  , g = -1 / 0
                  , m = 1 / 0
                  , b = !1;
                for (let e = 0; e < 3; e++) {
                    let r = t.halfExtents[e];
                    if (1e-9 > Math.abs(p[e])) {
                        if (d[e] < -r || d[e] > r) {
                            b = !0;
                            break
                        }
                        continue
                    }
                    let l = (-r - d[e]) / p[e]
                      , a = (r - d[e]) / p[e];
                    l > a && ([l,a] = [a, l]),
                    g = Math.max(g, l),
                    m = Math.min(m, a)
                }
                if (b || g > m || g < 0)
                    continue;
                let y = o - g;
                (null === i || y > i) && (i = y)
            }
            return i
        }
    }
    ])
}
, 49159, t => {
    "use strict";
    var e = t.i(998494)
      , r = t.i(497710)
      , l = t.i(475127);
    let a = () => (0,
    r.createLeaveState)(10);
    function o(t, r, a) {
        let o = (0,
        e.wallDistances)(t);
        return l.atan2(r - (o.positiveX - o.negativeX) / 2, a - (o.positiveZ - o.negativeZ) / 2)
    }
    let i = {
        ...a(),
        target: [0, 0, 0]
    };
    t.s(["MAP_RETURN_MARGIN", 0, 5, "MAP_RETURN_SECONDS", 0, 10, "createMapLeaveState", 0, a, "mapCenterYaw", 0, o, "mapReturnWarning", 0, i, "mapReturnZone", 0, function(t, r, l=0) {
        let a = (0,
        e.wallDistances)(t);
        return {
            distance: Math.max(-a.negativeX - r.x, r.x - a.positiveX, -a.negativeZ - r.z, r.z - a.positiveZ, r.y - t.ceiling, l - r.y),
            warn: 0,
            clear: 0,
            full: 60,
            staged: !1,
            target: function(t, r, l=0) {
                let a = (0,
                e.wallDistances)(t)
                  , i = (t, e, r) => {
                    let l = Math.min(5, (r - e) / 2);
                    return Math.max(e + l, Math.min(r - l, t))
                }
                  , n = i(r.x, -a.negativeX, a.positiveX)
                  , s = i(r.y, l, t.ceiling)
                  , u = i(r.z, -a.negativeZ, a.positiveZ);
                return {
                    id: "map-return",
                    label: "Back inside the map",
                    pad: !1,
                    position: [n, s, u],
                    yaw: o(t, n, u)
                }
            }(t, r, l).position
        }
    }
    , "stepMapLeave", 0, (t, e, l) => (0,
    r.stepLeave)(t, e, l, 10, .2)])
}
, 601060, t => {
    "use strict";
    var e = t.i(646423);
    let r = {
        ray: null
    }
      , l = [0, -1, 0]
      , a = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]
      , o = [0, 0, 0]
      , i = [0, 0, 0];
    t.s(["groundBelow", 0, function(t, e=40) {
        if (!r.ray)
            return -1 / 0;
        let a = r.ray(t, l, e);
        return a < e ? t[1] - a : -1 / 0
    }
    , "inSight", 0, function(t, e, l, n, s, u=r.ray) {
        if (!u)
            return !0;
        for (let[r,f] of a) {
            for (let t = 0; t < 3; t++)
                o[t] = e[t] + (n[t] * r + s[t] * f) * l;
            let a = Math.hypot(o[0] - t[0], o[1] - t[1], o[2] - t[2]);
            if (a < .001)
                return !0;
            for (let e = 0; e < 3; e++)
                i[e] = (o[e] - t[e]) / a;
            if (u(t, i, a) >= a - .02)
                return !0
        }
        return !1
    }
    , "registerScenery", 0, function(t) {
        return r.ray = t,
        () => {
            r.ray === t && (r.ray = null)
        }
    }
    , "sceneryRay", 0, function(t, r) {
        let l = new t.Ray({
            x: 0,
            y: 0,
            z: 0
        },{
            x: 0,
            y: 0,
            z: 1
        })
          , a = t.QueryFilterFlags.EXCLUDE_SENSORS;
        return (t, o, i) => {
            l.origin.x = t[0],
            l.origin.y = t[1],
            l.origin.z = t[2],
            l.dir.x = o[0],
            l.dir.y = o[1],
            l.dir.z = o[2];
            let n = r.castRay(l, i, !0, a, e.GAP_QUERY_GROUPS);
            return n ? Math.min(i, n.timeOfImpact) : i
        }
    }
    ])
}
, 931067, t => {
    "use strict";
    function e() {
        return (e = Object.assign.bind()).apply(null, arguments)
    }
    t.s(["default", () => e])
}
, 94800, t => {
    "use strict";
    var e = t.i(270950);
    t.s(["useFrame", () => e.D])
}
, 131497, t => {
    "use strict";
    let e = parseInt(t.i(190072).REVISION.replace(/\D+/g, ""));
    t.s(["version", 0, e])
}
, 934297, t => {
    "use strict";
    var e = t.i(190072);
    let r = new e.Vector3;
    function l(t, e, l, a, o, i) {
        let n = 2 * Math.PI * o / 4
          , s = Math.max(i - 2 * o, 0)
          , u = Math.PI / 4;
        r.copy(e),
        r[a] = 0,
        r.normalize();
        let f = .5 * n / (n + s)
          , h = 1 - r.angleTo(t) / u;
        return 1 === Math.sign(r[l]) ? h * f : s / (n + s) + f + f * (1 - h)
    }
    class a extends e.BoxGeometry {
        constructor(t=1, r=1, a=1, o=2, i=.1) {
            const n = 2 * o + 1;
            if (i = Math.min(t / 2, r / 2, a / 2, i),
            super(1, 1, 1, n, n, n),
            this.type = "RoundedBoxGeometry",
            this.parameters = {
                width: t,
                height: r,
                depth: a,
                segments: o,
                radius: i
            },
            1 === n)
                return;
            const s = this.toNonIndexed();
            this.index = null,
            this.attributes.position = s.attributes.position,
            this.attributes.normal = s.attributes.normal,
            this.attributes.uv = s.attributes.uv;
            const u = new e.Vector3
              , f = new e.Vector3
              , h = new e.Vector3(t,r,a).divideScalar(2).subScalar(i)
              , c = this.attributes.position.array
              , d = this.attributes.normal.array
              , p = this.attributes.uv.array
              , g = c.length / 6
              , m = new e.Vector3
              , b = .5 / n;
            for (let e = 0, o = 0; e < c.length; e += 3,
            o += 2)
                switch (u.fromArray(c, e),
                f.copy(u),
                f.x -= Math.sign(f.x) * b,
                f.y -= Math.sign(f.y) * b,
                f.z -= Math.sign(f.z) * b,
                f.normalize(),
                c[e + 0] = h.x * Math.sign(u.x) + f.x * i,
                c[e + 1] = h.y * Math.sign(u.y) + f.y * i,
                c[e + 2] = h.z * Math.sign(u.z) + f.z * i,
                d[e + 0] = f.x,
                d[e + 1] = f.y,
                d[e + 2] = f.z,
                Math.floor(e / g)) {
                case 0:
                    m.set(1, 0, 0),
                    p[o + 0] = l(m, f, "z", "y", i, a),
                    p[o + 1] = 1 - l(m, f, "y", "z", i, r);
                    break;
                case 1:
                    m.set(-1, 0, 0),
                    p[o + 0] = 1 - l(m, f, "z", "y", i, a),
                    p[o + 1] = 1 - l(m, f, "y", "z", i, r);
                    break;
                case 2:
                    m.set(0, 1, 0),
                    p[o + 0] = 1 - l(m, f, "x", "z", i, t),
                    p[o + 1] = l(m, f, "z", "x", i, a);
                    break;
                case 3:
                    m.set(0, -1, 0),
                    p[o + 0] = 1 - l(m, f, "x", "z", i, t),
                    p[o + 1] = 1 - l(m, f, "z", "x", i, a);
                    break;
                case 4:
                    m.set(0, 0, 1),
                    p[o + 0] = 1 - l(m, f, "x", "y", i, t),
                    p[o + 1] = 1 - l(m, f, "y", "x", i, r);
                    break;
                case 5:
                    m.set(0, 0, -1),
                    p[o + 0] = l(m, f, "x", "y", i, t),
                    p[o + 1] = 1 - l(m, f, "y", "x", i, r)
                }
        }
        static fromJSON(t) {
            return new a(t.width,t.height,t.depth,t.segments,t.radius)
        }
    }
    t.s(["RoundedBoxGeometry", 0, a])
}
]);
