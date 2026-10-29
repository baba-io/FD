(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 632997, 778534, 235199, t => {
    "use strict";
    var e = t.i(12746);
    let r = ["throttle", "roll", "pitch", "yaw"];
    t.s(["AUDIO_CATEGORIES", 0, ["motors", "wind", "world", "interface", "race"], "CHANNEL_NAMES", 0, r], 778534);
    let o = {
        droneWheel: "Tab",
        arm: "Space",
        respawn: "KeyR",
        interact: "KeyE"
    }
      , n = {
        kind: "none"
    }
      , i = new Set(["KeyW", "KeyS", "KeyA", "KeyD", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Escape", "Enter", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "ContextMenu"])
      , l = {
        Minus: "-",
        Equal: "=",
        BracketLeft: "[",
        BracketRight: "]",
        Backslash: "\\",
        Semicolon: ";",
        Quote: "'",
        Backquote: "`",
        Comma: ",",
        Period: ".",
        Slash: "/"
    };
    t.s(["DEFAULT_KEYBOARD_BINDS", 0, o, "UNBOUND_SWITCH", 0, n, "bindRejectMessage", 0, function(t) {
        switch (t) {
        case "reserved":
            return "That key is already used for sticks or menus.";
        case "keyboard-collision":
            return "That key is already bound to another action.";
        case "radio-collision":
            return "That control is already bound to another action."
        }
    }
    , "describeSwitchBinding", 0, function(t) {
        switch (t.kind) {
        case "button":
            return `Button ${t.buttonIndex}`;
        case "axis":
            return `Axis ${t.axisIndex} ${t.invert ? "low" : "high"}`;
        default:
            return "Unbound"
        }
    }
    , "formatKeyCode", 0, function(t) {
        return "Space" === t ? "Space" : t.startsWith("Key") && 4 === t.length ? t.slice(3) : t.startsWith("Digit") && 6 === t.length ? t.slice(5) : t.startsWith("Numpad") ? `Num ${t.slice(6)}` : l[t] ?? t
    }
    , "occupiedStickAxes", 0, function(t) {
        let e = new Set;
        for (let o of r) {
            let r = t.channels[o];
            r && e.add(r.axisIndex)
        }
        return e
    }
    , "validateKeyboardBind", 0, function(t, e, r) {
        return i.has(t) || "Tab" === t && "droneWheel" !== e ? "reserved" : Object.entries(r).some( ([r,o]) => r !== e && o === t) ? "keyboard-collision" : null
    }
    , "validateRadioBind", 0, function(t, e, r) {
        return ["arm", "respawn", "droneWheel", "interact"].some(o => {
            var n;
            return o !== e && (n = r[o],
            "none" !== t.kind && "none" !== n.kind && ("button" === t.kind && "button" === n.kind ? t.buttonIndex === n.buttonIndex : "axis" === t.kind && "axis" === n.kind && t.axisIndex === n.axisIndex))
        }
        ) ? "radio-collision" : null
    }
    ], 235199);
    let a = {
        mode1: {
            throttle: {
                axisIndex: 3,
                invert: !0
            },
            yaw: {
                axisIndex: 0,
                invert: !1
            },
            pitch: {
                axisIndex: 1,
                invert: !1
            },
            roll: {
                axisIndex: 2,
                invert: !1
            }
        },
        mode2: {
            throttle: {
                axisIndex: 1,
                invert: !0
            },
            yaw: {
                axisIndex: 0,
                invert: !1
            },
            pitch: {
                axisIndex: 3,
                invert: !1
            },
            roll: {
                axisIndex: 2,
                invert: !1
            }
        },
        mode3: {
            throttle: {
                axisIndex: 3,
                invert: !0
            },
            yaw: {
                axisIndex: 2,
                invert: !1
            },
            pitch: {
                axisIndex: 1,
                invert: !1
            },
            roll: {
                axisIndex: 0,
                invert: !1
            }
        },
        mode4: {
            throttle: {
                axisIndex: 1,
                invert: !0
            },
            yaw: {
                axisIndex: 2,
                invert: !1
            },
            pitch: {
                axisIndex: 3,
                invert: !1
            },
            roll: {
                axisIndex: 0,
                invert: !1
            }
        }
    }
      , s = {
        mode1: {
            left: ["pitch", "yaw"],
            right: ["throttle", "roll"]
        },
        mode2: {
            left: ["throttle", "yaw"],
            right: ["pitch", "roll"]
        },
        mode3: {
            left: ["pitch", "roll"],
            right: ["throttle", "yaw"]
        },
        mode4: {
            left: ["throttle", "roll"],
            right: ["pitch", "yaw"]
        }
    };
    function u(t) {
        for (let e of Object.keys(a)) {
            let r = a[e];
            if (Object.keys(r).every(e => {
                let o = t.channels[e];
                return null !== o && o.axisIndex === r[e].axisIndex && o.invert === r[e].invert
            }
            ))
                return e
        }
        return null
    }
    function f(t) {
        return {
            axisIndex: t.axisIndex,
            invert: t.invert,
            min: -1,
            center: 0,
            max: 1
        }
    }
    function c(t, e=null) {
        let r = a[t];
        return {
            deviceId: e,
            channels: {
                throttle: f(r.throttle),
                roll: f(r.roll),
                pitch: f(r.pitch),
                yaw: f(r.yaw)
            },
            swappedAxes: {
                throttle: !1,
                roll: !1,
                pitch: !1,
                yaw: !1
            },
            deadband: .03,
            throttleSelfCentering: !1,
            halfThrottle: !1,
            arm: n,
            armBehavior: "toggle",
            deviceKind: null,
            stickMode: null,
            keyboardOnly: !1,
            respawn: n,
            droneWheel: n,
            interact: {
                kind: "button",
                buttonIndex: 5
            },
            keyboard: {
                ...o
            }
        }
    }
    function h(t, r, o, n=!1) {
        let {center: i, min: l, max: a, invert: s} = r
          , u = t >= i ? a - i : i - l
          , f = u > 1e-4 ? (t - i) / u : 0;
        f = (0,
        e.clamp)(f, -1, 1),
        s !== n && (f = -f);
        var c = f;
        let d = (0,
        e.clamp)(o, 0, .4);
        if (d <= 0)
            return c;
        let p = Math.abs(c);
        return p <= d ? 0 : (p - d) / (1 - d) * Math.sign(c)
    }
    function d(t, r, o) {
        let n = h(t, r, o.throttleSelfCentering || o.halfThrottle ? o.deadband : 0, o.swappedAxes.throttle);
        return (0,
        e.clamp)(o.halfThrottle ? n : (n + 1) / 2, 0, 1)
    }
    function p(t, e) {
        return "pitch" === t ? -e : e
    }
    function m(t, e) {
        let r = t.axes[e];
        return "number" == typeof r ? r : 0
    }
    function x(t, e, r, o=!1) {
        return e ? h(m(t, e.axisIndex), e, r, o) : 0
    }
    t.s(["STICK_MODE_ASSIGNMENTS", 0, s, "STICK_MODE_LABELS", 0, {
        mode1: "Throttle right · Mode 1",
        mode2: "Throttle left · Mode 2",
        mode3: "Throttle right · Mode 3",
        mode4: "Throttle left · Mode 4"
    }, "STICK_MODE_LAYOUTS", 0, a, "bindingsForMode", 0, c, "channelValue", 0, function(t, e, r) {
        let o = e.channels[t];
        if (!o || !r)
            return 0;
        let n = r[o.axisIndex] ?? 0;
        return "throttle" === t ? d(n, o, e) : h(n, o, e.deadband, e.swappedAxes[t])
    }
    , "defaultBindings", 0, function() {
        return c("mode2")
    }
    , "detectStickMode", 0, u, "emptyControlInput", 0, function() {
        return {
            throttle: 0,
            roll: 0,
            pitch: 0,
            yaw: 0,
            armRequested: !1,
            interact: !1,
            source: "none"
        }
    }
    , "isFullyBound", 0, function(t) {
        return null !== t.channels.throttle && null !== t.channels.roll && null !== t.channels.pitch && null !== t.channels.yaw
    }
    , "neutralCalibration", 0, f, "radioSense", 0, p, "readArmBinding", 0, function(t, e) {
        switch (e.kind) {
        case "button":
            {
                let r = t.buttons[e.buttonIndex];
                return !!r && r.pressed
            }
        case "axis":
            {
                let r = m(t, e.axisIndex);
                return e.invert ? r < e.threshold : r > e.threshold
            }
        default:
            return null
        }
    }
    , "readControlInput", 0, function(t, e, r) {
        if (!t)
            return !1;
        let {channels: o, deadband: n} = e;
        return r.throttle = o.throttle ? d(m(t, o.throttle.axisIndex), o.throttle, e) : 0,
        r.roll = x(t, o.roll, n, e.swappedAxes.roll),
        r.pitch = x(t, o.pitch, n, e.swappedAxes.pitch),
        r.yaw = x(t, o.yaw, n, e.swappedAxes.yaw),
        r.source = "gamepad",
        !0
    }
    , "stickAssignment", 0, function(t, e) {
        if ("keyboard" === e)
            return s.mode2;
        if ("radio" === t.deviceKind)
            return s[t.stickMode ?? "mode2"];
        if ("standard" === e) {
            let e = e => Object.keys(t.channels).find(r => t.channels[r]?.axisIndex === e) ?? null;
            return {
                left: [e(1), e(0)],
                right: [e(3), e(2)]
            }
        }
        return s[u(t) ?? "mode2"]
    }
    , "stickPosition", 0, function(t, e, r) {
        let o = e.channels[t];
        return o && r ? p(t, h(r[o.axisIndex] ?? 0, o, 0, e.swappedAxes[t])) : "throttle" !== t || e.throttleSelfCentering || e.halfThrottle ? 0 : -1
    }
    ], 632997)
}
, 12746, t => {
    "use strict";
    function e(t, e, r) {
        return t < e ? e : t > r ? r : t
    }
    function r(t) {
        return e(t, 0, 1)
    }
    t.s(["RATE_PRESETS", 0, {
        cinematic: {
            roll: {
                centerSensitivity: 65,
                maxRate: 430,
                expo: .1
            },
            pitch: {
                centerSensitivity: 60,
                maxRate: 400,
                expo: .1
            },
            yaw: {
                centerSensitivity: 60,
                maxRate: 350,
                expo: .1
            }
        },
        freestyle: {
            roll: {
                centerSensitivity: 108,
                maxRate: 810,
                expo: .15
            },
            pitch: {
                centerSensitivity: 100,
                maxRate: 750,
                expo: .15
            },
            yaw: {
                centerSensitivity: 90,
                maxRate: 600,
                expo: .15
            }
        },
        racing: {
            roll: {
                centerSensitivity: 150,
                maxRate: 1030,
                expo: .05
            },
            pitch: {
                centerSensitivity: 140,
                maxRate: 950,
                expo: .05
            },
            yaw: {
                centerSensitivity: 120,
                maxRate: 800,
                expo: .05
            }
        }
    }, "applyActualRates", 0, function(t, o) {
        let n = e(t, -1, 1)
          , i = Math.abs(n)
          , l = r(o.expo)
          , a = i * (n * n * n * n * n * l + n * (1 - l))
          , s = o.centerSensitivity
          , u = Math.max(0, o.maxRate - s);
        return n * s + u * a
    }
    , "applyThrottleCurve", 0, function(t, e, o=0) {
        let n = r(t)
          , i = r(e)
          , l = r(o)
          , a = n - l
          , s = a > 0 ? 1 - l : l;
        if (0 === s)
            return n;
        let u = a / s;
        return l + a * (1 - i + i * u * u)
    }
    , "clamp", 0, e, "clamp01", 0, r])
}
, 425723, 471646, t => {
    "use strict";
    var e = t.i(475127);
    let r = () => 0;
    function o(t, e, r) {
        let o = Math.imul(0 | t, 0x27d4eb2d) ^ Math.imul(0 | e, 0x165667b1) ^ Math.imul(0 | r, 0x9e3779b1);
        return (((o = Math.imul((o = Math.imul(o ^ o >>> 15, 0x85ebca6b)) ^ o >>> 13, 0xc2b2ae35)) ^ o >>> 16) >>> 0) / 0x100000000
    }
    function n(t) {
        let e = t < 0 ? 0 : t > 1 ? 1 : t;
        return e * e * (3 - 2 * e)
    }
    function i(t, e, r) {
        let i = Math.floor(t)
          , l = Math.floor(e)
          , a = n(t - i)
          , s = n(e - l)
          , u = o(i, l, r)
          , f = o(i + 1, l, r)
          , c = o(i, l + 1, r)
          , h = o(i + 1, l + 1, r)
          , d = u + (f - u) * a;
        return d + (c + (h - c) * a - d) * s
    }
    function l(t, r, o) {
        let n = r - t.at[0]
          , i = o - t.at[1]
          , l = n
          , a = i
          , s = t.rotationY ?? 0;
        if (0 !== s) {
            let t = e.cos(s)
              , r = e.sin(s);
            l = n * t - i * r,
            a = n * r + i * t
        }
        let u = Math.abs(l) - t.halfExtents[0]
          , f = Math.abs(a) - t.halfExtents[1];
        return "ellipse" === t.shape ? (e.hypot(l / t.halfExtents[0], a / t.halfExtents[1]) - 1) * Math.min(...t.halfExtents) : e.hypot(Math.max(u, 0), Math.max(f, 0)) + Math.min(Math.max(u, f), 0)
    }
    function a(t, r, o) {
        let a = t.base + function(t, e, r, o) {
            let n = 1
              , l = 1 / r.scale
              , a = 0
              , s = 0;
            for (let u = 0; u < r.octaves; u++)
                a += i(t * l, e * l, o + 1013 * u) * n,
                s += n,
                n *= r.gain,
                l *= r.lacunarity;
            return s > 0 ? a / s * r.amplitude : 0
        }(r, o, t.noise, t.seed);
        for (let l of t.landforms)
            a += function(t, r, o, l) {
                if ("alpine" === t.profile && t.warp) {
                    let e = r;
                    r += (i(r / 55, o / 55, l + 31) - .5) * t.warp,
                    o += (i(e / 55, o / 55, l + 71) - .5) * t.warp
                }
                let a = 0
                  , s = t.radius;
                if (t.to) {
                    let {t: i, distance: l} = function(t, r, o, n, i, l) {
                        let a = i - o
                          , s = l - n
                          , u = a * a + s * s;
                        if (u < 1e-6)
                            return {
                                t: 0,
                                distance: e.hypot(t - o, r - n)
                            };
                        let f = ((t - o) * a + (r - n) * s) / u;
                        return {
                            t: f = f < 0 ? 0 : f > 1 ? 1 : f,
                            distance: e.hypot(t - (o + a * f), r - (n + s * f))
                        }
                    }(r, o, t.at[0], t.at[1], t.to[0], t.to[1]);
                    if ((s = t.radius + ((t.radiusEnd ?? t.radius) - t.radius) * i) <= 1e-6 || l >= s)
                        return 0;
                    a = "alpine" === t.profile ? 1 - l / s : n(1 - l / s)
                } else {
                    let i = t.radiusZ ?? t.radius
                      , l = r - t.at[0]
                      , u = o - t.at[1]
                      , f = l
                      , c = u
                      , h = t.rotationY ?? 0;
                    if (0 !== h) {
                        let t = e.cos(h)
                          , r = e.sin(h);
                        f = l * t - u * r,
                        c = l * r + u * t
                    }
                    let d = f / t.radius
                      , p = c / i
                      , m = e.hypot(d, p);
                    if (m >= 1)
                        return 0;
                    a = "alpine" === t.profile ? 1 - m : n(1 - m),
                    s = Math.max(t.radius, i)
                }
                let u = t.power ?? 1
                  , f = t.height * (1 === u ? a : a > 0 ? e.exp(u * e.log(a)) : 0);
                if (t.noiseAmp && a > 0) {
                    let e = t.noiseScale ?? .35 * s
                      , n = 2 * i(r / e, o / e, l) - 1;
                    f += t.noiseAmp * n * a
                }
                return f
            }(l, r, o, t.seed + 17);
        for (let e of t.plateaus) {
            let t = function(t, e, r) {
                let o = l(t, e, r);
                if (o <= 0)
                    return 1;
                if (o >= t.blend)
                    return 0;
                let i = 1 - o / t.blend
                  , a = t.terraces ?? 0;
                if (a <= 0)
                    return n(i);
                let s = i * a
                  , u = Math.floor(s)
                  , f = n(Math.min(1, (s - u) / .22));
                return (u + f) / a
            }(e, r, o);
            t > 0 && (a += (e.height - a) * t)
        }
        return a < t.floor ? t.floor : a
    }
    let s = new WeakMap
      , u = new WeakMap;
    function f(t, r, o) {
        let n = e.cos(r)
          , i = e.sin(r);
        return [t[0] + o[0] * n + o[2] * i, t[1] + o[1], t[2] - o[0] * i + o[2] * n]
    }
    function c(t, e) {
        let r = t / 2
          , o = [...e].sort( (t, e) => t.center - e.center)
          , n = []
          , i = -r;
        for (let t of o) {
            let e = Math.max(-r, t.center - t.width / 2)
              , o = Math.min(r, t.center + t.width / 2);
            e > i && n.push({
                center: (i + e) / 2,
                width: e - i
            }),
            i = Math.max(i, o)
        }
        return i < r && n.push({
            center: (i + r) / 2,
            width: r - i
        }),
        n.filter(t => t.width > .05)
    }
    t.s(["FLAT_GROUND", 0, r, "createHeightSampler", 0, function(t) {
        if (!t)
            return r;
        let e = s.get(t);
        if (e)
            return e;
        let o = (e, r) => a(t, e, r);
        return s.set(t, o),
        o
    }
    , "heightGrid", 0, function(t) {
        let e = u.get(t);
        if (e)
            return e;
        let r = 2 * t.extent
          , o = Math.max(2, Math.round(r / t.resolution))
          , n = o + 1
          , i = new Float32Array(n * n);
        for (let e = 0; e < n; e++) {
            let l = (e / o - .5) * r;
            for (let s = 0; s < n; s++) {
                let u = (s / o - .5) * r;
                i[e * n + s] = a(t, l, u)
            }
        }
        let l = {
            segments: o,
            size: r,
            heights: i
        };
        return u.set(t, l),
        l
    }
    , "nearestShoulderDistance", 0, function(t, e, r) {
        let o = 1 / 0;
        for (let n of t) {
            if (!n.shoulder)
                continue;
            let t = Math.max(0, l(n, e, r));
            t < o && (o = t)
        }
        return o
    }
    , "terrainHeight", 0, a, "terrainSlope", 0, function(t, r, o, n=1.5) {
        let i = (t(r + n, o) - t(r - n, o)) / (2 * n)
          , l = (t(r, o + n) - t(r, o - n)) / (2 * n)
          , a = e.hypot(i, l);
        return 1 - 1 / Math.sqrt(1 + a * a)
    }
    ], 471646);
    let h = [3.05, 1.3, 1.22]
      , d = "#9aa0a6";
    t.s(["CONTAINER_HALF", 0, h, "buildingBoxes", 0, function(t) {
        let {position: e, rotationY: r, width: o, depth: n, height: i, surface: l, color: a, trimColor: s, storeyHeight: u, clutter: c, random: h} = t
          , d = []
          , p = [0, r, 0]
          , m = o / 2
          , x = n / 2
          , g = t => f([e[0], e[1], e[2]], r, t);
        d.push({
            position: [e[0], e[1] + i / 2, e[2]],
            halfExtents: [m, i / 2, x],
            rotation: p,
            color: a,
            surface: l,
            kind: "building",
            uvScale: "windows" === l ? u : void 0
        }),
        d.push({
            position: [e[0], e[1] + .15, e[2]],
            halfExtents: [m + .3, .85, x + .3],
            rotation: p,
            color: s,
            surface: "concrete",
            kind: "wall"
        }),
        d.push({
            position: [e[0], e[1] + 1.06, e[2]],
            halfExtents: [m + .16, .12, x + .16],
            rotation: p,
            color: s,
            surface: "concrete",
            kind: "trim",
            ghost: !0
        });
        let b = Math.min(.5, Math.max(.22, .05 * Math.min(o, n)))
          , y = i - .52;
        if (y > 1.22 + 1)
            for (let t of [-1, 1])
                for (let e of [-1, 1])
                    d.push({
                        position: g([t * (m + .05), (1.22 + y) / 2, e * (x + .05)]),
                        halfExtents: [b, (y - 1.22) / 2, b],
                        rotation: p,
                        color: s,
                        surface: "concrete",
                        kind: "trim",
                        ghost: !0
                    });
        if (i > 14)
            for (let t of [-1, 1])
                d.push({
                    position: g([0, .52 * i, t * (x + .07)]),
                    halfExtents: [m + .15, .22, .13],
                    rotation: p,
                    color: s,
                    surface: "concrete",
                    kind: "trim",
                    ghost: !0
                }),
                d.push({
                    position: g([t * (m + .07), .52 * i, 0]),
                    halfExtents: [.13, .22, x - .24],
                    rotation: p,
                    color: s,
                    surface: "concrete",
                    kind: "trim",
                    ghost: !0
                });
        let E = e[1] + i;
        d.push({
            position: [e[0], E - .26, e[2]],
            halfExtents: [m + .34, .22, x + .34],
            rotation: p,
            color: s,
            surface: "concrete",
            kind: "trim",
            ghost: !0
        }),
        c > 0 && d.push({
            position: [e[0], E + .07, e[2]],
            halfExtents: [m - .2, .06, x - .2],
            rotation: p,
            color: s,
            surface: "roof",
            kind: "roof",
            ghost: !0
        });
        let w = [e[0], E, e[2]]
          , k = (t, e, o) => {
            d.push({
                position: f(w, r, t),
                halfExtents: e,
                rotation: p,
                color: s,
                surface: "concrete",
                kind: "wall"
            }),
            d.push({
                position: f(w, r, [t[0], .62 + .06, t[2]]),
                halfExtents: [o[0], .06, o[1]],
                rotation: p,
                color: "#9ea3a6",
                surface: "concrete",
                kind: "trim",
                ghost: !0
            })
        }
          , M = Math.max(.1, x - .24);
        for (let t of [-1, 1])
            k([0, .31, t * (x - .12)], [m, .31, .12], [m + .08, .2]),
            k([t * (m - .12), .31, 0], [.12, .31, M], [.2, Math.max(.05, M - .08)]);
        let v = [Math.max(0, m - 2), Math.max(0, x - 2)];
        for (let t = 0; t < c; t++) {
            let t = h()
              , e = (2 * h() - 1) * v[0]
              , o = (2 * h() - 1) * v[1]
              , n = r + (h() - .5) * .7
              , i = [0, n, 0]
              , l = t => f(w, r, t);
            if (t < .35) {
                let t = 1.4 + 1.4 * h()
                  , r = 2.4 + 1.4 * h();
                d.push({
                    position: l([e, r / 2, o]),
                    halfExtents: [t, r / 2, .8 * t],
                    rotation: p,
                    color: s,
                    surface: "concrete",
                    kind: "clutter"
                }),
                d.push({
                    position: l([e, r + .09, o]),
                    halfExtents: [t + .14, .09, .8 * t + .14],
                    rotation: p,
                    color: "#8d9297",
                    surface: "metal",
                    kind: "roof",
                    ghost: !0
                }),
                d.push({
                    position: l([e, 1.05, o + .8 * t + .04]),
                    halfExtents: [.55, 1.05, .06],
                    rotation: p,
                    color: "#3a4249",
                    surface: "metal",
                    kind: "trim",
                    ghost: !0
                }),
                d.push({
                    position: l([e, 2.2, o + .8 * t + .09]),
                    halfExtents: [.75, .07, .11],
                    rotation: p,
                    color: "#6f767c",
                    surface: "metal",
                    kind: "trim",
                    ghost: !0
                })
            } else if (t < .72) {
                let t = .9 + .6 * h()
                  , r = .7 + .5 * h()
                  , a = .8 + .6 * h();
                d.push({
                    position: l([e, .09, o]),
                    halfExtents: [t + .1, .09, r + .1],
                    rotation: i,
                    color: "#4c5158",
                    surface: "metal",
                    kind: "clutter"
                }),
                d.push({
                    position: l([e, .18 + a / 2, o]),
                    halfExtents: [t, a / 2, r],
                    rotation: i,
                    color: "#8e9399",
                    surface: "metal",
                    kind: "clutter"
                }),
                d.push({
                    position: l([e, .18 + a + .1, o]),
                    halfExtents: [.55 * t, .1, .55 * r],
                    rotation: i,
                    color: "#5d646b",
                    surface: "metal",
                    kind: "trim",
                    ghost: !0
                });
                for (let a = 0; a < 3; a++)
                    d.push({
                        position: f(l([e, 0, o]), n, [0, .4 + .22 * a, r + .05]),
                        halfExtents: [.8 * t, .06, .05],
                        rotation: i,
                        color: "#6b7278",
                        surface: "metal",
                        kind: "trim",
                        ghost: !0
                    })
            } else {
                let t = 1.6 + 2.4 * h();
                d.push({
                    position: l([e, t / 2, o]),
                    halfExtents: [.13, t / 2, .13],
                    rotation: p,
                    color: "#4c5158",
                    surface: "metal",
                    kind: "clutter"
                }),
                d.push({
                    position: l([e, t + .11, o]),
                    halfExtents: [.3, .11, .3],
                    rotation: [0, n + .5, 0],
                    color: "#6b7278",
                    surface: "metal",
                    kind: "trim",
                    ghost: !0
                }),
                d.push({
                    position: l([e, .12, o]),
                    halfExtents: [.3, .12, .3],
                    rotation: i,
                    color: "#5d646b",
                    surface: "metal",
                    kind: "trim",
                    ghost: !0
                })
            }
        }
        return d
    }
    , "containerBoxes", 0, function(t) {
        let {position: e, rotationY: r, color: o} = t
          , n = [0, r, 0]
          , [i,l,a] = h
          , s = "#3c3f42"
          , u = "#54585c"
          , c = [{
            position: e,
            halfExtents: h,
            rotation: n,
            color: o,
            surface: "corrugated",
            kind: "container"
        }]
          , d = (t, o, i, l="metal") => {
            c.push({
                position: f(e, r, t),
                halfExtents: o,
                rotation: n,
                color: i,
                surface: l,
                kind: "trim",
                ghost: !0
            })
        }
        ;
        for (let t of [-1, 1]) {
            for (let e of (d([t * (i + .03), 0, 0], [.03, l - .09, a - .07], o),
            [-.78, -.3, .3, .78]))
                d([t * (i + .075), 0, e], [.045, l - .14, .045], s);
            for (let e of (d([t * (i + .07), 0, 0], [.04, l - .12, .035], s),
            [-1, 1]))
                for (let r of [-.85, 0, .85])
                    d([t * (i + .06), r, e * (a - .14)], [.05, .11, .07], u)
        }
        for (let t of [-1, 1]) {
            for (let e of [-1, 1])
                d([e * (i - .11), 0, t * (a + .035)], [.11, l, .04], s);
            for (let e of [-1, 1])
                d([0, e * (l - .09), t * (a + .035)], [i - .22, .09, .04], s)
        }
        for (let t of [-1, 1])
            for (let e of [-1, 1])
                d([t * (i + .02), e * (l - .09), 0], [.03, .09, a - .09], s);
        for (let t of [-1, 1])
            for (let e of [-1, 1])
                for (let r of [-1, 1])
                    d([t * (i - .16), e * (l - .14), r * (a + .045)], [.17, .15, .05], u);
        return c
    }
    , "gateBoxes", 0, function(t, e=r) {
        let[o,n] = t.size
          , i = o / 2
          , l = n / 2
          , a = [0, t.rotationY, 0]
          , s = (e, r, o=0) => f(t.position, t.rotationY, [e, r, o])
          , u = []
          , c = i + .08
          , h = l + .08;
        for (let t of [-1, 1])
            u.push({
                position: s(t * c, 0),
                halfExtents: [.08, l + .16, .08],
                rotation: a,
                color: d,
                surface: "plastic",
                kind: "gate"
            });
        for (let t of [-1, 1])
            u.push({
                position: s(0, t * h),
                halfExtents: [i, .08, .08],
                rotation: a,
                color: d,
                surface: "plastic",
                kind: "gate"
            });
        for (let t of [-1, 1])
            for (let e of [-1, 1])
                u.push({
                    position: s(t * c, e * h),
                    halfExtents: [.12400000000000001, .12400000000000001, .12400000000000001],
                    rotation: a,
                    color: "#7a8086",
                    surface: "plastic",
                    kind: "gate",
                    ghost: !0
                });
        let p = .46 * n;
        for (let e of [-1, 1])
            u.push({
                position: s(e * (c + .08 + .21), 0),
                halfExtents: [.21, p, .025],
                rotation: a,
                color: t.color,
                surface: "plastic",
                kind: "gate",
                ghost: !0
            });
        u.push({
            position: s(0, h + .08 + .14),
            halfExtents: [i + .08, .14, .025],
            rotation: a,
            color: t.color,
            surface: "plastic",
            kind: "gate",
            ghost: !0
        });
        for (let e of [-1, 1])
            for (let r of [-1, 1])
                u.push({
                    position: s(r * c, 0, .095 * e),
                    halfExtents: [.055999999999999994, l + .068, .012],
                    rotation: a,
                    color: t.color,
                    surface: "emissive",
                    kind: "gate",
                    ghost: !0
                }),
                u.push({
                    position: s(0, r * h, .095 * e),
                    halfExtents: [i + .04, .055999999999999994, .012],
                    rotation: a,
                    color: t.color,
                    surface: "emissive",
                    kind: "gate",
                    ghost: !0
                });
        let m = t.position[1] + -(l + .16);
        for (let r of [-1, 1]) {
            let[o,,n] = s(r * c, 0)
              , i = e(o, n)
              , l = m - i;
            if (l > 6)
                continue;
            l > .25 && u.push({
                position: [o, i + l / 2, n],
                halfExtents: [.068, l / 2, .068],
                rotation: a,
                color: "#6a7076",
                surface: "metal",
                kind: "gate"
            });
            let h = l > .25 ? i + .06 : Math.max(i + .06, m)
              , p = i + .045
              , x = [.27 * r, 0, 0];
            u.push({
                position: f([o, h, n], t.rotationY, x),
                halfExtents: [.19, .06, .06],
                rotation: a,
                color: d,
                surface: "plastic",
                kind: "gate",
                ghost: !0
            }),
            u.push({
                position: f([o, p, n], t.rotationY, x),
                halfExtents: [.27, .035, .22],
                rotation: a,
                color: "#5a6066",
                surface: "metal",
                kind: "gate",
                ghost: !0
            })
        }
        return u
    }
    , "launchPadBoxes", 0, function(t, e) {
        let[r,o,n] = t.position
          , i = o - .2
          , l = i + .01
          , a = l + .14
          , s = [r, i, n]
          , u = [0, t.yaw, 0]
          , c = [{
            position: [r, l + .07, n],
            halfExtents: [2.6, .07, 2.6],
            rotation: u,
            color: "#3d4249",
            surface: "asphalt",
            kind: "platform",
            uvScale: 1.3
        }]
          , h = a - i + .015;
        for (let e of [-1, 1])
            c.push({
                position: f(s, t.yaw, [0, h, 2.4 * e]),
                halfExtents: [2.56, .01, .16],
                rotation: u,
                color: "#d6dde4",
                surface: "plastic",
                kind: "trim",
                ghost: !0
            }),
            c.push({
                position: f(s, t.yaw, [2.4 * e, h, 0]),
                halfExtents: [.16, .01, 2.24],
                rotation: u,
                color: "#d6dde4",
                surface: "plastic",
                kind: "trim",
                ghost: !0
            });
        let d = a - i + .03 + .005;
        for (let r of [-1, 1])
            for (let o of [-1, 1])
                c.push({
                    position: f(s, t.yaw, [2.42 * r, d, 2.42 * o]),
                    halfExtents: [.22, .03, .22],
                    rotation: u,
                    color: e,
                    surface: "emissive",
                    kind: "trim",
                    ghost: !0
                });
        let p = a - i + .012;
        for (let e of [-1, 1])
            c.push({
                position: f(s, t.yaw, [.62 * e, p, 0]),
                halfExtents: [.17, .008, .85],
                rotation: u,
                color: "#e4eaee",
                surface: "plastic",
                kind: "trim",
                ghost: !0
            });
        for (let e of (c.push({
            position: f(s, t.yaw, [0, p, 0]),
            halfExtents: [.45, .008, .17],
            rotation: u,
            color: "#e4eaee",
            surface: "plastic",
            kind: "trim",
            ghost: !0
        }),
        [0, 1]))
            for (let r of [-1, 1]) {
                let o = l - i + .07 - .02
                  , n = 0 === e ? [2.65 * r, o, 0] : [0, o, 2.65 * r];
                c.push({
                    position: f(s, t.yaw, n),
                    halfExtents: 0 === e ? [.12, .07 + .02, 2.54] : [2.77, .07 + .02, .12],
                    rotation: u,
                    color: "#7f858a",
                    surface: "concrete",
                    kind: "trim",
                    ghost: !0
                })
            }
        for (let e of [-1, 1])
            for (let r of [-1, 1])
                c.push({
                    position: f(s, t.yaw, [2.05 * e, a - i + .045, 2.05 * r]),
                    halfExtents: [.11, .045, .11],
                    rotation: [0, t.yaw + .7, 0],
                    color: "#5f666c",
                    surface: "metal",
                    kind: "trim",
                    ghost: !0
                });
        return c
    }
    , "localToWorld", 0, f, "mulberry32", 0, function(t) {
        let e = t >>> 0;
        return () => {
            let t = Math.imul((e = e + 0x6d2b79f5 >>> 0) ^ e >>> 15, 1 | e);
            return (((t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t) ^ t >>> 14) >>> 0) / 0x100000000
        }
    }
    , "shellBoxes", 0, function(t) {
        let {position: e, rotationY: r, width: o, depth: n, height: i, color: l, trimColor: a, random: s} = t
          , u = []
          , h = []
          , d = o / 2
          , p = n / 2
          , m = i > 4.2 ? [1.5, i - 1.2] : [1.2, i - .8];
        [{
            local: [0, 0, p - .16],
            rotation: r,
            length: o
        }, {
            local: [0, 0, -(p - .16)],
            rotation: r,
            length: o
        }, {
            local: [d - .16, 0, 0],
            rotation: r + Math.PI / 2,
            length: n - .64,
            courseInset: .4
        }, {
            local: [-(d - .16), 0, 0],
            rotation: r + Math.PI / 2,
            length: n - .64,
            courseInset: .4
        }].forEach( (t, o) => {
            let n = 2.6 + 2.2 * s();
            u.push(...function(t) {
                let {center: e, rotationY: r, length: o, thickness: n, height: i, color: l, surface: a, doorway: s, windowBand: u, pierWidth: h=.7, bay: d=3.4, trimColor: p=l, noPlinth: m=!1, courseInset: x=0} = t
                  , g = []
                  , b = n / 2
                  , y = s ? [s] : []
                  , E = (t, n, i, l=p) => {
                    let a = o / 2 + i - x;
                    if (!(a <= .1))
                        for (let o of [-1, 1])
                            g.push({
                                position: f(e, r, [0, t, o * (b + i / 2)]),
                                halfExtents: [a, n / 2, i / 2],
                                rotation: [0, r, 0],
                                color: l,
                                surface: "concrete",
                                kind: "trim",
                                ghost: !0
                            })
                }
                  , w = (t, n, i) => {
                    let s = n - t;
                    if (!(s <= .05))
                        for (let n of c(o, i))
                            g.push({
                                position: f(e, r, [n.center, t + s / 2, 0]),
                                halfExtents: [n.width / 2, s / 2, b],
                                rotation: [0, r, 0],
                                color: l,
                                surface: a,
                                kind: "wall"
                            })
                }
                ;
                if (m || E(.35, .7, .14),
                !u || u[1] >= i - .2)
                    return w(0, i, y),
                    g;
                let[k,M] = u;
                w(0, k, y),
                w(M, i, []),
                E(k, .18, .12),
                E(M, .28, .16);
                let v = Math.max(1, Math.round(o / d))
                  , S = [];
                for (let t = 0; t <= v; t++) {
                    let e = -o / 2 + t / v * o
                      , r = Math.min(o / 2 - h / 2, Math.max(-o / 2 + h / 2, e));
                    S.push({
                        center: r,
                        width: h
                    })
                }
                let A = c(o, S);
                w(k, M, A);
                let I = M - k;
                for (let t of A)
                    t.width < 1.2 || g.push({
                        position: f(e, r, [t.center, k + I / 2, 0]),
                        halfExtents: [.055, I / 2, .55 * b],
                        rotation: [0, r, 0],
                        color: p,
                        surface: "metal",
                        kind: "trim",
                        ghost: !0
                    });
                return g
            }({
                center: f(e, r, t.local),
                rotationY: t.rotation,
                length: t.length,
                thickness: .32,
                height: i,
                color: o % 2 == 0 ? l : a,
                trimColor: o % 2 == 0 ? a : l,
                courseInset: t.courseInset,
                surface: "brick",
                doorway: .75 > s() ? {
                    center: (2 * s() - 1) * (t.length / 2 - n),
                    width: n
                } : void 0,
                windowBand: m,
                bay: 3.2
            }));
            let h = -t.length / 2;
            for (; h < t.length / 2 - .4; ) {
                let n = 1.2 + 2.6 * s()
                  , c = Math.min(t.length / 2, h + n);
                if (.72 > s()) {
                    let n = .18 + .5 * s();
                    u.push({
                        position: f(f(e, r, t.local), t.rotation, [(h + c) / 2, i + n / 2, 0]),
                        halfExtents: [(c - h) / 2, n / 2, .16 + .05],
                        rotation: [0, t.rotation, 0],
                        color: o % 2 == 0 ? a : l,
                        surface: "brick",
                        kind: "wall"
                    })
                }
                h = c + .3 + 1.4 * s()
            }
        }
        );
        let x = Math.max(2, Math.round(o / 4));
        for (let t = 1; t < x; t++) {
            let l = -d + t / x * o
              , c = (t, o) => {
                u.push({
                    position: f(e, r, [l, t, 0]),
                    halfExtents: [.13, o, p],
                    rotation: [0, r, 0],
                    color: a,
                    surface: "metal",
                    kind: "roof"
                })
            }
            ;
            c(i - .16, .13),
            c(i - .78, .11);
            let h = Math.max(3, Math.round(n / 1.6));
            for (let t = 0; t < h; t++) {
                let o = -p + (t + .5) / h * n;
                u.push({
                    position: f(e, r, [l, i - .47, o]),
                    halfExtents: [.06, .36, .06],
                    rotation: [t % 2 == 0 ? .72 : -.72, r, 0],
                    color: a,
                    surface: "metal",
                    kind: "trim",
                    ghost: !0
                })
            }
            if (.45 > s())
                continue;
            let m = o / x / 2;
            u.push({
                position: f(e, r, [l + m, i + .05, (2 * s() - 1) * p * .3]),
                halfExtents: [m, .06, p * (.4 + .5 * s())],
                rotation: [0, r, 0],
                color: a,
                surface: "corrugated",
                kind: "roof"
            })
        }
        let g = Math.max(2, Math.round(o / 9));
        for (let t = 0; t < g; t++) {
            let n = -d + (t + .5) / g * o;
            u.push({
                position: f(e, r, [n, i / 2, 0]),
                halfExtents: [.26, i / 2, .26],
                rotation: [0, r, 0],
                color: l,
                surface: "concrete",
                kind: "pillar"
            }),
            u.push({
                position: f(e, r, [n, .3, 0]),
                halfExtents: [.42, .3, .42],
                rotation: [0, r, 0],
                color: l,
                surface: "concrete",
                kind: "trim",
                ghost: !0
            }),
            u.push({
                position: f(e, r, [n, i - .94, 0]),
                halfExtents: [.4, .12, .4],
                rotation: [0, r, 0],
                color: a,
                surface: "concrete",
                kind: "trim",
                ghost: !0
            })
        }
        let b = 2 + Math.floor(3 * s());
        for (let t = 0; t < b; t++)
            u.push({
                position: f(e, r, [(2 * s() - 1) * (d - 1.5), .35 + .5 * s(), (2 * s() - 1) * (p - 1.5)]),
                halfExtents: [1 + 1.6 * s(), .07, .8 + 1.2 * s()],
                rotation: [.5 * s() - .25, s() * Math.PI, .5 * s() - .25],
                color: a,
                surface: "corrugated",
                kind: "clutter"
            });
        for (let t = 0; t < 4; t++)
            h.push({
                kind: .5 > s() ? "barrel" : "tyre",
                position: f(e, r, [(2 * s() - 1) * (d - 1), 0, (2 * s() - 1) * (p - 1)]),
                rotationY: s() * Math.PI * 2,
                scale: .85 + .4 * s()
            });
        return {
            boxes: u,
            props: h
        }
    }
    ], 425723)
}
, 552260, t => {
    "use strict";
    var e = t.i(190072);
    function r(t) {
        let r, o, n, i = -1, l = 0;
        for (let e = 0; e < t.length; ++e) {
            let a = t[e];
            if (void 0 === r && (r = a.array.constructor),
            r !== a.array.constructor)
                return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),
                null;
            if (void 0 === o && (o = a.itemSize),
            o !== a.itemSize)
                return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),
                null;
            if (void 0 === n && (n = a.normalized),
            n !== a.normalized)
                return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),
                null;
            if (-1 === i && (i = a.gpuType),
            i !== a.gpuType)
                return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),
                null;
            l += a.count * o
        }
        let a = new r(l)
          , s = new e.BufferAttribute(a,o,n)
          , u = 0;
        for (let e = 0; e < t.length; ++e) {
            let r = t[e];
            if (r.isInterleavedBufferAttribute) {
                let t = u / o;
                for (let e = 0, n = r.count; e < n; e++)
                    for (let n = 0; n < o; n++) {
                        let o = r.getComponent(e, n);
                        s.setComponent(e + t, n, o)
                    }
            } else
                a.set(r.array, u);
            u += r.count * o
        }
        return void 0 !== i && (s.gpuType = i),
        s
    }
    t.s(["mergeGeometries", 0, function(t, o=!1) {
        let n = null !== t[0].index
          , i = new Set(Object.keys(t[0].attributes))
          , l = new Set(Object.keys(t[0].morphAttributes))
          , a = {}
          , s = {}
          , u = t[0].morphTargetsRelative
          , f = new e.BufferGeometry
          , c = 0;
        for (let e = 0; e < t.length; ++e) {
            let r = t[e]
              , h = 0;
            if (n !== (null !== r.index))
                return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + e + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),
                null;
            for (let t in r.attributes) {
                if (!i.has(t))
                    return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + e + '. All geometries must have compatible attributes; make sure "' + t + '" attribute exists among all geometries, or in none of them.'),
                    null;
                void 0 === a[t] && (a[t] = []),
                a[t].push(r.attributes[t]),
                h++
            }
            if (h !== i.size)
                return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + e + ". Make sure all geometries have the same number of attributes."),
                null;
            if (u !== r.morphTargetsRelative)
                return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + e + ". .morphTargetsRelative must be consistent throughout all geometries."),
                null;
            for (let t in r.morphAttributes) {
                if (!l.has(t))
                    return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + e + ".  .morphAttributes must be consistent throughout all geometries."),
                    null;
                void 0 === s[t] && (s[t] = []),
                s[t].push(r.morphAttributes[t])
            }
            if (o) {
                let t;
                if (n)
                    t = r.index.count;
                else {
                    if (void 0 === r.attributes.position)
                        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + e + ". The geometry must have either an index or a position attribute"),
                        null;
                    t = r.attributes.position.count
                }
                f.addGroup(c, t, e),
                c += t
            }
        }
        if (n) {
            let e = 0
              , r = [];
            for (let o = 0; o < t.length; ++o) {
                let n = t[o].index;
                for (let t = 0; t < n.count; ++t)
                    r.push(n.getX(t) + e);
                e += t[o].attributes.position.count
            }
            f.setIndex(r)
        }
        for (let t in a) {
            let e = r(a[t]);
            if (!e)
                return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + t + " attribute."),
                null;
            f.setAttribute(t, e)
        }
        for (let t in s) {
            let e = s[t][0].length;
            if (0 !== e) {
                f.morphAttributes = f.morphAttributes || {},
                f.morphAttributes[t] = [];
                for (let o = 0; o < e; ++o) {
                    let e = [];
                    for (let r = 0; r < s[t].length; ++r)
                        e.push(s[t][r][o]);
                    let n = r(e);
                    if (!n)
                        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + t + " morphAttribute."),
                        null;
                    f.morphAttributes[t].push(n)
                }
            }
        }
        return f
    }
    , "mergeVertices", 0, function(t, e=1e-4) {
        e = Math.max(e, Number.EPSILON);
        let r = {}
          , o = t.getIndex()
          , n = t.getAttribute("position")
          , i = o ? o.count : n.count
          , l = 0
          , a = Object.keys(t.attributes)
          , s = {}
          , u = {}
          , f = []
          , c = ["getX", "getY", "getZ", "getW"]
          , h = ["setX", "setY", "setZ", "setW"];
        for (let e = 0, r = a.length; e < r; e++) {
            let r = a[e]
              , o = t.attributes[r];
            s[r] = new o.constructor(new o.array.constructor(o.count * o.itemSize),o.itemSize,o.normalized);
            let n = t.morphAttributes[r];
            n && (u[r] || (u[r] = []),
            n.forEach( (t, e) => {
                let o = new t.array.constructor(t.count * t.itemSize);
                u[r][e] = new t.constructor(o,t.itemSize,t.normalized)
            }
            ))
        }
        let d = .5 * e
          , p = Math.pow(10, Math.log10(1 / e))
          , m = d * p;
        for (let e = 0; e < i; e++) {
            let n = o ? o.getX(e) : e
              , i = "";
            for (let e = 0, r = a.length; e < r; e++) {
                let r = a[e]
                  , o = t.getAttribute(r)
                  , l = o.itemSize;
                for (let t = 0; t < l; t++)
                    i += `${~~(o[c[t]](n) * p + m)},`
            }
            if (i in r)
                f.push(r[i]);
            else {
                for (let e = 0, r = a.length; e < r; e++) {
                    let r = a[e]
                      , o = t.getAttribute(r)
                      , i = t.morphAttributes[r]
                      , f = o.itemSize
                      , d = s[r]
                      , p = u[r];
                    for (let t = 0; t < f; t++) {
                        let e = c[t]
                          , r = h[t];
                        if (d[r](l, o[e](n)),
                        i)
                            for (let t = 0, o = i.length; t < o; t++)
                                p[t][r](l, i[t][e](n))
                    }
                }
                r[i] = l,
                f.push(l),
                l++
            }
        }
        let x = t.clone();
        for (let e in t.attributes) {
            let t = s[e];
            if (x.setAttribute(e, new t.constructor(t.array.slice(0, l * t.itemSize),t.itemSize,t.normalized)),
            e in u)
                for (let t = 0; t < u[e].length; t++) {
                    let r = u[e][t];
                    x.morphAttributes[e][t] = new r.constructor(r.array.slice(0, l * r.itemSize),r.itemSize,r.normalized)
                }
        }
        return x.setIndex(f),
        x
    }
    , "toTrianglesDrawMode", 0, function(t, r) {
        if (r === e.TrianglesDrawMode)
            return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),
            t;
        if (r !== e.TriangleFanDrawMode && r !== e.TriangleStripDrawMode)
            return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", r),
            t;
        {
            let o = t.getIndex();
            if (null === o) {
                let e = []
                  , r = t.getAttribute("position");
                if (void 0 === r)
                    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),
                    t;
                for (let t = 0; t < r.count; t++)
                    e.push(t);
                t.setIndex(e),
                o = t.getIndex()
            }
            let n = o.count - 2
              , i = [];
            if (r === e.TriangleFanDrawMode)
                for (let t = 1; t <= n; t++)
                    i.push(o.getX(0)),
                    i.push(o.getX(t)),
                    i.push(o.getX(t + 1));
            else
                for (let t = 0; t < n; t++)
                    t % 2 == 0 ? (i.push(o.getX(t)),
                    i.push(o.getX(t + 1)),
                    i.push(o.getX(t + 2))) : (i.push(o.getX(t + 2)),
                    i.push(o.getX(t + 1)),
                    i.push(o.getX(t)));
            i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
            let l = t.clone();
            return l.setIndex(i),
            l.clearGroups(),
            l
        }
    }
    ])
}
, 768834, t => {
    "use strict";
    var e = t.i(271645);
    let r = t => {
        let e, r = new Set, o = (t, o) => {
            let n = "function" == typeof t ? t(e) : t;
            if (!Object.is(n, e)) {
                let t = e;
                e = (null != o ? o : "object" != typeof n || null === n) ? n : Object.assign({}, e, n),
                r.forEach(r => r(e, t))
            }
        }
        , n = () => e, i = {
            setState: o,
            getState: n,
            getInitialState: () => l,
            subscribe: t => (r.add(t),
            () => r.delete(t))
        }, l = e = t(o, n, i);
        return i
    }
      , o = t => {
        let o = t ? r(t) : r
          , n = t => (function(t, r=t => t) {
            let o = e.default.useSyncExternalStore(t.subscribe, e.default.useCallback( () => r(t.getState()), [t, r]), e.default.useCallback( () => r(t.getInitialState()), [t, r]));
            return e.default.useDebugValue(o),
            o
        }
        )(o, t);
        return Object.assign(n, o),
        n
    }
    ;
    t.s(["create", 0, t => t ? o(t) : o], 768834)
}
]);
