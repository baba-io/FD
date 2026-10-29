(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 475127, t => {
    "use strict";
    let e = new Float64Array(1)
      , r = new Uint32Array(e.buffer)
      , n = 1 === new Uint8Array(new Uint16Array([1]).buffer)[0]
      , i = +!!n
      , o = +!n;
    function a(t) {
        return e[0] = t,
        0 | r[i]
    }
    function f(t) {
        return e[0] = t,
        r[o]
    }
    function s(t, n) {
        return e[0] = t,
        r[i] = n >>> 0,
        e[0]
    }
    function u(t, n) {
        return r[i] = t >>> 0,
        r[o] = n >>> 0,
        e[0]
    }
    function h(t) {
        let e = a(t)
          , r = e >>> 31;
        if ((e &= 0x7fffffff) >= 0x40862e42) {
            if (e >= 0x7ff00000)
                return (1048575 & e | f(t)) != 0 ? t + t : 0 === r ? t : 0;
            if (t > 709.782712893384)
                return Infinity;
            if (t < -745.1332191019411)
                return 0
        }
        let n = 0
          , i = 0
          , o = 0;
        if (e > 0x3fd62e42)
            e < 0x3ff0a2b2 ? (n = r ? t + .6931471803691238 : t - .6931471803691238,
            i = r ? -19082149292705877e-26 : 19082149292705877e-26,
            o = r ? -1 : 1) : (o = Math.trunc(1.4426950408889634 * t + (r ? -.5 : .5)),
            n = t - .6931471803691238 * o,
            i = 19082149292705877e-26 * o),
            t = n - i;
        else if (e < 0x3e300000)
            return 1 + t;
        let u = t * t
          , h = t - u * (.16666666666666602 + u * (-.0027777777777015593 + u * (6613756321437934e-20 + u * (-16533902205465252e-22 + 41381367970572385e-24 * u))));
        if (0 === o)
            return 1 - (t * h / (h - 2) - t);
        let l = 1 - (i - t * h / (2 - h) - n);
        return o >= -1021 ? s(l, a(l) + (o << 20)) : 9332636185032189e-317 * s(l, a(l) + (o + 1e3 << 20))
    }
    function l(t, e, r) {
        if ((0x7fffffff & a(t)) < 0x3e400000)
            return t;
        let n = t * t
          , i = n * t
          , o = .00833333333332249 + n * (-1984126982985795e-19 + n * (27557313707070068e-22 + n * (-25050760253406863e-24 + 158969099521155e-24 * n)));
        return 0 === r ? t + i * (-.16666666666666632 + n * o) : t - (n * (.5 * e - i * o) - e - -.16666666666666632 * i)
    }
    function c(t, e) {
        let r = 0x7fffffff & a(t);
        if (r < 0x3e400000)
            return 1;
        let n = t * t
          , i = n * (.0416666666666666 + n * (-.001388888888887411 + n * (2480158728947673e-20 + n * (-27557314351390663e-23 + n * (2087572321298175e-24 + -11359647557788195e-27 * n)))));
        if (r < 0x3fd33333)
            return 1 - (.5 * n - (n * i - t * e));
        let o = r > 0x3fe90000 ? .28125 : u(r - 2097152, 0);
        return 1 - o - (.5 * n - o - (n * i - t * e))
    }
    let p = {
        n: 0,
        y0: 0,
        y1: 0
    };
    function d(t) {
        let e = a(t)
          , r = 0x7fffffff & e;
        if (r < 0x4002d97c) {
            if (e > 0) {
                let e = t - 1.5707963267341256;
                0x3ff921fb !== r ? (p.y0 = e - 6077100506506192e-26,
                p.y1 = e - p.y0 - 6077100506506192e-26) : (p.y0 = (e -= 6077100506303966e-26) - 20222662487959506e-37,
                p.y1 = e - p.y0 - 20222662487959506e-37),
                p.n = 1
            } else {
                let e = t + 1.5707963267341256;
                0x3ff921fb !== r ? (p.y0 = e + 6077100506506192e-26,
                p.y1 = e - p.y0 + 6077100506506192e-26) : (p.y0 = (e += 6077100506303966e-26) + 20222662487959506e-37,
                p.y1 = e - p.y0 + 20222662487959506e-37),
                p.n = -1
            }
            return
        }
        let n = Math.abs(t)
          , i = Math.trunc(.6366197723675814 * n + .5)
          , o = n - 1.5707963267341256 * i
          , f = 6077100506506192e-26 * i
          , s = r >> 20
          , u = o - f
          , h = s - (a(u) >> 20 & 2047);
        h > 16 && (o = (n = o) - (f = 6077100506303966e-26 * i),
        f = 20222662487959506e-37 * i - (n - o - f),
        (h = s - (a(u = o - f) >> 20 & 2047)) > 49 && (o = (n = o) - (f = 20222662487111665e-37 * i),
        f = 84784276603689e-45 * i - (n - o - f),
        u = o - f));
        let l = o - u - f;
        e < 0 ? (p.n = -i,
        p.y0 = -u,
        p.y1 = -l) : (p.n = i,
        p.y0 = u,
        p.y1 = l)
    }
    let y = [.4636476090008061, .7853981633974483, .982793723247329, 1.5707963267948966]
      , m = [22698777452961687e-33, 3061616997868383e-32, 13903311031230998e-33, 6123233995736766e-32];
    function g(t) {
        let e, r = a(t), n = 0x7fffffff & r;
        if (n >= 0x44100000)
            return Number.isNaN(t) ? t + t : r > 0 ? y[3] + m[3] : -y[3] - m[3];
        if (n < 0x3fdc0000) {
            if (n < 0x3e200000)
                return t;
            e = -1
        } else
            t = Math.abs(t),
            n < 0x3ff30000 ? n < 0x3fe60000 ? (e = 0,
            t = (2 * t - 1) / (2 + t)) : (e = 1,
            t = (t - 1) / (t + 1)) : n < 0x40038000 ? (e = 2,
            t = (t - 1.5) / (1 + 1.5 * t)) : (e = 3,
            t = -1 / t);
        let i = t * t
          , o = i * i
          , f = i * (.3333333333333293 + o * (.14285714272503466 + o * (.09090887133436507 + o * (.06661073137387531 + o * (.049768779946159324 + .016285820115365782 * o)))))
          , s = o * (-.19999999999876483 + o * (-.11111110405462356 + o * (-.0769187620504483 + o * (-.058335701337905735 + -.036531572744216916 * o))));
        if (e < 0)
            return t - t * (f + s);
        let u = y[e] - (t * (f + s) - m[e] - t);
        return r < 0 ? -u : u
    }
    t.s(["acos", 0, function(t) {
        let e = a(t)
          , r = 0x7fffffff & e;
        if (r >= 0x3ff00000)
            return (r - 0x3ff00000 | f(t)) == 0 ? e > 0 ? 0 : 3.141592653589793 : NaN;
        if (r < 0x3fe00000) {
            if (r <= 0x3c600000)
                return 1.5707963267948966;
            let e = t * t;
            return 1.5707963267948966 - (t - (6123233995736766e-32 - e * (.16666666666666666 + e * (-.3255658186224009 + e * (.20121253213486293 + e * (-.04005553450067941 + e * (7915349942898145e-19 + 3479331075960212e-20 * e))))) / (1 + e * (-2.403394911734414 + e * (2.0209457602335057 + e * (-.6882839716054533 + .07703815055590194 * e)))) * t))
        }
        if (e < 0) {
            let e = (1 + t) * .5
              , r = e * (.16666666666666666 + e * (-.3255658186224009 + e * (.20121253213486293 + e * (-.04005553450067941 + e * (7915349942898145e-19 + 3479331075960212e-20 * e)))))
              , n = 1 + e * (-2.403394911734414 + e * (2.0209457602335057 + e * (-.6882839716054533 + .07703815055590194 * e)))
              , i = Math.sqrt(e);
            return 3.141592653589793 - 2 * (i + (r / n * i - 6123233995736766e-32))
        }
        let n = (1 - t) * .5
          , i = Math.sqrt(n)
          , o = u(a(i), 0)
          , s = (n - o * o) / (i + o);
        return 2 * (o + (n * (.16666666666666666 + n * (-.3255658186224009 + n * (.20121253213486293 + n * (-.04005553450067941 + n * (7915349942898145e-19 + 3479331075960212e-20 * n))))) / (1 + n * (-2.403394911734414 + n * (2.0209457602335057 + n * (-.6882839716054533 + .07703815055590194 * n)))) * i + s))
    }
    , "asin", 0, function(t) {
        let e = a(t)
          , r = 0x7fffffff & e;
        if (r >= 0x3ff00000)
            return (r - 0x3ff00000 | f(t)) == 0 ? 1.5707963267948966 * t + 6123233995736766e-32 * t : NaN;
        if (r < 0x3fe00000) {
            if (r < 0x3e400000)
                return t;
            let e = t * t;
            return t + e * (.16666666666666666 + e * (-.3255658186224009 + e * (.20121253213486293 + e * (-.04005553450067941 + e * (7915349942898145e-19 + 3479331075960212e-20 * e))))) / (1 + e * (-2.403394911734414 + e * (2.0209457602335057 + e * (-.6882839716054533 + .07703815055590194 * e)))) * t
        }
        let n = .5 * (1 - Math.abs(t))
          , i = n * (.16666666666666666 + n * (-.3255658186224009 + n * (.20121253213486293 + n * (-.04005553450067941 + n * (7915349942898145e-19 + 3479331075960212e-20 * n)))))
          , o = 1 + n * (-2.403394911734414 + n * (2.0209457602335057 + n * (-.6882839716054533 + .07703815055590194 * n)))
          , s = Math.sqrt(n);
        if (r >= 0x3fef3333)
            n = 1.5707963267948966 - (2 * (s + i / o * s) - 6123233995736766e-32);
        else {
            let t = u(a(s), 0)
              , e = (n - t * t) / (s + t);
            n = .7853981633974483 - ((i = 2 * s * (i / o) - (6123233995736766e-32 - 2 * e)) - (o = .7853981633974483 - 2 * t))
        }
        return e > 0 ? n : -n
    }
    , "atan", 0, g, "atan2", 0, function(t, e) {
        let r;
        if (Number.isNaN(e) || Number.isNaN(t))
            return e + t;
        if (1 === e)
            return g(t);
        let n = a(e)
          , i = 0x7fffffff & n
          , o = a(t)
          , f = 0x7fffffff & o
          , s = o >> 31 & 1 | n >> 30 & 2;
        if (0 === t)
            return s < 2 ? t : 2 === s ? 3.141592653589793 : -3.141592653589793;
        if (0 === e)
            return o < 0 ? -1.5707963267948966 : 1.5707963267948966;
        if (0x7ff00000 === i)
            return 0x7ff00000 === f ? [.7853981633974483, -.7853981633974483, 2.356194490192345, -2.356194490192345][s] : [0, -0, 3.141592653589793, -3.141592653589793][s];
        if (0x7ff00000 === f)
            return o < 0 ? -1.5707963267948966 : 1.5707963267948966;
        let u = f - i >> 20
          , h = s;
        switch (u > 60 ? (r = 1.5707963267948966,
        h &= 1) : r = n < 0 && u < -60 ? 0 : g(Math.abs(t / e)),
        h) {
        case 0:
            return r;
        case 1:
            return -r;
        case 2:
            return 3.141592653589793 - (r - 12246467991473532e-32);
        default:
            return r - 12246467991473532e-32 - 3.141592653589793
        }
    }
    , "cos", 0, function(t) {
        let e = 0x7fffffff & a(t);
        if (e <= 0x3fe921fb)
            return c(t, 0);
        if (e >= 0x7ff00000)
            return t - t;
        switch (d(t),
        3 & p.n) {
        case 0:
            return c(p.y0, p.y1);
        case 1:
            return -l(p.y0, p.y1, 1);
        case 2:
            return -c(p.y0, p.y1);
        default:
            return l(p.y0, p.y1, 1)
        }
    }
    , "exp", 0, h, "hypot", 0, function(t, e, r=0) {
        return Math.sqrt(t * t + e * e + r * r)
    }
    , "log", 0, function(t) {
        let e = a(t)
          , r = f(t)
          , n = 0;
        if (e < 1048576) {
            if ((0x7fffffff & e | r) == 0)
                return -1 / 0;
            if (e < 0)
                return NaN;
            n -= 54,
            t *= 0x40000000000000,
            e = a(t)
        }
        if (e >= 0x7ff00000)
            return t + t;
        n += (e >> 20) - 1023;
        let i = (e &= 1048575) + 614244 & 1048576;
        t = s(t, e | 0x3ff00000 ^ i),
        n += i >> 20;
        let o = t - 1;
        if ((1048575 & 2 + e) < 3) {
            if (0 === o)
                return 0 === n ? 0 : .6931471803691238 * n + 19082149292705877e-26 * n;
            let t = o * o * (.5 - .3333333333333333 * o);
            return 0 === n ? o - t : .6931471803691238 * n - (t - 19082149292705877e-26 * n - o)
        }
        let u = o / (2 + o)
          , h = n
          , l = u * u
          , c = e - 398458
          , p = l * l
          , d = l * (.6666666666666735 + p * (.2857142874366239 + p * (.1818357216161805 + .14798198605116586 * p))) + p * (.3999999999940942 + p * (.22222198432149784 + .15313837699209373 * p));
        if ((c |= 440401 - e) > 0) {
            let t = .5 * o * o;
            return 0 === n ? o - (t - u * (t + d)) : .6931471803691238 * h - (t - (u * (t + d) + 19082149292705877e-26 * h) - o)
        }
        return 0 === n ? o - u * (o - d) : .6931471803691238 * h - (u * (o - d) - 19082149292705877e-26 * h - o)
    }
    , "sin", 0, function(t) {
        let e = 0x7fffffff & a(t);
        if (e <= 0x3fe921fb)
            return l(t, 0, 0);
        if (e >= 0x7ff00000)
            return t - t;
        switch (d(t),
        3 & p.n) {
        case 0:
            return l(p.y0, p.y1, 1);
        case 1:
            return c(p.y0, p.y1);
        case 2:
            return -l(p.y0, p.y1, 1);
        default:
            return -c(p.y0, p.y1)
        }
    }
    , "tanh", 0, function(t) {
        if (t != t)
            return t;
        if (t > 22)
            return 1;
        if (t < -22)
            return -1;
        if (3725290298461914e-24 > Math.abs(t))
            return t;
        let e = h(2 * t);
        return (e - 1) / (e + 1)
    }
    ])
}
, 11871, t => {
    "use strict";
    var e = t.i(814022)
      , r = t.i(534306);
    function n(t) {
        let e = {
            mass: (0,
            r.flightHardware)(t).mass.mass,
            thrustToWeight: Math.round(10 * (0,
            r.thrustStand)(t).thrustToWeight) / 10,
            airMode: !0,
            idleThrottle: t.tune.motorIdle,
            throttleExpo: .1
        }
          , {reachX: n, reachZ: i, propY: o} = t.layout;
        return {
            quad: e,
            flight: t,
            reachX: n,
            reachZ: i,
            propRadius: t.prop.radius,
            propY: o,
            blades: t.prop.blades
        }
    }
    let i = {
        freestyle: {
            ...n(r.FLIGHT_SPECS.freestyle),
            halfExtents: [.151, .035, .151],
            camera: [0, .055, -.035],
            cameraGuard: .025,
            cameraNear: .01,
            sound: {
                maxRpm: 32e3,
                polePairs: 7,
                harmonics: [1, .45, .22, .1],
                gain: 1,
                noise: 1,
                whine: 1,
                ductQ: .75
            }
        },
        whoop: {
            ...n(r.FLIGHT_SPECS.whoop),
            halfExtents: [.042, .016, .042],
            camera: [0, .022, -.0193],
            cameraGuard: .008,
            cameraNear: .003,
            sound: {
                maxRpm: 60500,
                polePairs: 6,
                harmonics: [1, .32, .14, .05],
                gain: .48,
                noise: .65,
                whine: 1.4,
                ductQ: 1.6
            }
        },
        cinewhoop: {
            ...n(r.FLIGHT_SPECS.cinewhoop),
            halfExtents: [.11, .035, .099],
            camera: [0, .052, -.0435],
            cameraGuard: .022,
            cameraNear: .009,
            sound: {
                maxRpm: 50800,
                polePairs: 7,
                harmonics: [1, .6, .33, .18],
                gain: .85,
                noise: 1.45,
                whine: 1.1,
                ductQ: 2.2
            }
        },
        "long-range": {
            ...n(r.FLIGHT_SPECS["long-range"]),
            halfExtents: [.209, .045, .227],
            camera: [0, .055, -.0595],
            cameraGuard: .028,
            cameraNear: .011,
            sound: {
                maxRpm: 20800,
                polePairs: 7,
                harmonics: [1, .58, .3, .17],
                gain: 1.15,
                noise: 1.25,
                whine: .65,
                ductQ: .6
            }
        },
        racer: {
            ...n(r.FLIGHT_SPECS.racer),
            halfExtents: [.139, .041, .139],
            camera: [0, .06, -.049],
            cameraGuard: .02,
            cameraNear: .008,
            sound: {
                maxRpm: 32100,
                polePairs: 7,
                harmonics: [1, .52, .28, .12],
                gain: 1,
                noise: 1.1,
                whine: 1.25,
                ductQ: .7
            }
        }
    };
    function o(t, e) {
        let r = i[t].quad;
        return e ? {
            ...r,
            throttleMid: e.mid,
            throttleExpo: e.expo
        } : r
    }
    t.s(["DRONE_PROFILES", 0, i, "droneCameraNear", 0, function(t, e, r) {
        let n = i[t]
          , o = Math.sqrt(1 + Math.tan(e * Math.PI / 360) ** 2 * (1 + r ** 2));
        return Math.min(n.cameraNear, .65 * n.cameraGuard / o)
    }
    , "droneQuad", 0, o, "selectedQuad", 0, function(t) {
        return o((0,
        e.flownDrone)({
            ...t,
            squadDrone: t.squadDrone ?? null
        }))
    }
    ])
}
, 718598, t => {
    "use strict";
    t.s(["AIR_DENSITY", 0, 1.225, "bodyDrag", 0, function(t, e, r, n, i, o) {
        let a = -.6125 * i;
        t.x = a * o.dragArea[0] * e,
        t.y = a * o.dragArea[1] * r,
        t.z = a * o.dragArea[2] * n
    }
    , "massProperties", 0, function(t) {
        let e = 0
          , r = 0
          , n = 0
          , i = 0
          , o = 0
          , a = 0
          , f = 0;
        for (let s of t) {
            let t = s.mass;
            if (e += t,
            "rod" === s.kind) {
                let[e,u,h] = s.from
                  , [l,c,p] = s.to;
                r += t * (e + l) / 2,
                n += t * (u + c) / 2,
                i += t * (h + p) / 2,
                o += t * (e * e + e * l + l * l) / 3,
                a += t * (u * u + u * c + c * c) / 3,
                f += t * (h * h + h * p + p * p) / 3
            } else {
                let[e,u,h] = s.at;
                if (r += t * e,
                n += t * u,
                i += t * h,
                o += t * e * e,
                a += t * u * u,
                f += t * h * h,
                s.size) {
                    let[e,r,n] = s.size;
                    o += t * e * e / 12,
                    a += t * r * r / 12,
                    f += t * n * n / 12
                }
            }
        }
        let s = r / e
          , u = n / e
          , h = i / e;
        return o -= e * s * s,
        a -= e * u * u,
        f -= e * h * h,
        {
            mass: e,
            centre: [s, u, h],
            inertia: [a + f, o + f, o + a]
        }
    }
    , "quadParts", 0, function(t) {
        let {reachX: e, reachZ: r, motorY: n, propY: i, motor: o, prop: a, battery: f} = t
          , s = [];
        for (let[f,u] of [[1, -1], [-1, -1], [1, 1], [-1, 1]]) {
            let h = f * e
              , l = u * r;
            s.push({
                name: "motor",
                mass: o.mass,
                at: [h, n, l],
                size: [o.radius * Math.sqrt(3), o.height, o.radius * Math.sqrt(3)]
            }),
            s.push({
                name: "prop",
                mass: a.mass,
                at: [h, i, l],
                size: [1.1 * a.radius, 0, 1.1 * a.radius]
            }),
            s.push({
                kind: "rod",
                name: "arm",
                mass: t.arms / 4,
                from: [0, 0, 0],
                to: [h, 0, l]
            })
        }
        return s.push({
            name: "battery",
            mass: f.mass,
            at: f.at,
            size: f.size
        }),
        s.push(...t.other),
        s
    }
    ])
}
, 931038, t => {
    "use strict";
    let e = {
        p: [45, 47, 45],
        i: [80, 84, 80],
        d: [40, 46, 0],
        f: [120, 125, 120],
        dMin: [30, 32, 0],
        dMinGain: 37,
        dMinAdvance: 20,
        itermRelaxCutoff: 15,
        itermRelaxYaw: !1,
        itermLimit: 400,
        itermWindup: 85,
        antiGravityGain: 80,
        antiGravityCutoff: 5,
        tpaRate: .65,
        tpaBreakpoint: .35,
        pidSumLimit: 500,
        pidSumLimitYaw: 400,
        yawLowpass: 100,
        gyroLowpassMin: 250,
        gyroLowpassMax: 500,
        dtermLowpassMin: 75,
        dtermLowpassMax: 150,
        dtermLowpass2: 150,
        feedforwardBoost: 15,
        feedforwardMaxRateLimit: 90,
        rcSmoothingSetpoint: 40,
        rcSmoothingFeedforward: 40,
        rcSmoothingThrottle: 40,
        motorIdle: .055,
        dynIdleMinRpm: 0,
        dynIdleMaxIncrease: .15,
        airmodeStartThrottle: .25,
        motorOutputLimit: 1
    };
    t.s(["tune", 0, function(t) {
        return {
            ...e,
            ...t
        }
    }
    ])
}
, 145725, 93888, 685024, t => {
    "use strict";
    var e = t.i(475127);
    let r = {
        absolute: 1 / 0,
        relative: 0
    };
    t.s(["ANY_MEASURE", 0, r], 93888);
    let n = {
        absolute: 50,
        relative: .1
    }
      , i = [n, n, n, n, {
        absolute: .02,
        relative: 0
    }, r]
      , o = 2 * Math.PI / 60;
    function a(t) {
        return t.cells * t.cellVoltage
    }
    class f {
        omega = new Float64Array(4);
        drive = new Float64Array(4);
        current = new Float64Array(4);
        backEmf = new Float64Array(4);
        polarisation = 0;
        sag = 1;
        busCurrent = 0;
        reset() {
            this.omega.fill(0),
            this.drive.fill(0),
            this.polarisation = 0,
            this.sag = 1,
            this.busCurrent = 0
        }
        save(t, e) {
            for (let r = 0; r < 4; r++)
                t[e + r] = this.omega[r];
            t[e + 4] = this.polarisation,
            t[e + 5] = this.sag
        }
        load(t, e) {
            for (let r = 0; r < 4; r++)
                this.omega[r] = t[e + r];
            this.polarisation = t[e + 4],
            this.sag = t[e + 5]
        }
        step(t, r, n, i, f, s) {
            let {resistance: u, noLoadCurrent: h, currentLimit: l, brakeLimit: c, rotorInertia: p} = r
              , d = r.kv * o
              , y = 1 / d
              , m = a(n)
              , g = m - this.polarisation
              , b = 0
              , w = g;
            if (f) {
                let t = 0
                  , e = 0;
                for (let r = 0; r < 4; r++) {
                    let n = this.omega[r] / d;
                    this.backEmf[r] = n;
                    let o = i[r];
                    t += o * o / u,
                    e += o * n / u
                }
                let r = n.resistance;
                w = (g + r * e) / (1 + r * t);
                let o = !1;
                for (let t = 0; t < 4; t++) {
                    let e = (i[t] * w - this.backEmf[t]) / u;
                    e > l ? (e = l,
                    o = !0) : e < -c && (e = -c,
                    o = !0),
                    this.current[t] = e,
                    b += i[t] * e
                }
                o && (w = g - r * b)
            } else
                this.current.fill(0);
            this.sag = w / m,
            this.busCurrent = b,
            this.polarisation += (n.polarisation * b - this.polarisation) * (1 - (0,
            e.exp)(-t / n.polarisationTau));
            let v = y * h;
            for (let e = 0; e < 4; e++) {
                let r = this.omega[e]
                  , n = r > 50 ? 1 : r / 50
                  , i = this.current[e]
                  , o = y * i - v * n;
                this.drive[e] = o;
                let a = (f && i < l && i > -c ? y * y / u : 0) + (r > 1 ? 2 * Math.abs(s[e]) / r : 0)
                  , h = r + t * (o - s[e]) / (p + t * a);
                this.omega[e] = h > 0 ? h : 0
            }
        }
    }
    t.s(["POWERTRAIN_MEASURE_TOLERANCE", 0, i, "POWERTRAIN_STATE_LENGTH", 0, 6, "Powertrain", 0, f, "powertrainRanges", 0, function(t, e) {
        let r = [0, 2 * t.kv * o * a(e)];
        return [r, r, r, r, [-4 * t.brakeLimit * e.polarisation, 4 * t.currentLimit * e.polarisation], [0, 2]]
    }
    ], 145725);
    var s = t.i(718598);
    function u(t, e, r) {
        let n = r <= t ? 0 : r >= e ? 1 : (r - t) / (e - t);
        return n * n * (3 - 2 * n)
    }
    t.s(["groundEffect", 0, function(t, e) {
        if (!(t > 0) || t > 8 * e)
            return 1;
        let r = e / (4 * t);
        return 1 / (1 - Math.min(.2, 4 * r * r))
    }
    , "rotorLoads", 0, function(t, e, r, n, i, o, a, f) {
        let h = e.radius
          , l = r * h
          , c = Math.abs(i) / (l + .1)
          , p = c > .5 ? -.5 * s.AIR_DENSITY * e.bladeArea * 1.2 * Math.abs(i) * i * u(.5, 1.5, c) : 0;
        if (l < .5)
            return t.thrust = p,
            t.hx = 0,
            t.hz = 0,
            t.torque = 0,
            t.induced = 0,
            t.wake = 0,
            t;
        let d = Math.sqrt(n * n + o * o)
          , y = d / l
          , m = y * y
          , g = i / l
          , b = e.halfSigmaA * (e.theta0 * (1 / 3 + m / 2) + e.thetaTw * (1 / 4 + m / 4))
          , w = e.quarterSigmaA
          , v = a / l;
        for (let t = 0; t < 2; t++) {
            let t = g + v
              , e = Math.sqrt(m + t * t + 1e-6)
              , r = b - w * t
              , n = v - r / (2 * e);
            (v -= n / (1 + w / (2 * e) + r * t / (2 * e * e * e))) > 1 ? v = 1 : v < -1 && (v = -1)
        }
        let x = 0
          , E = b - w * (g + v);
        if (i < 0 && E > 0) {
            let t = l * Math.sqrt(E / 2);
            if (t > .25) {
                let e = i / t
                  , r = u(.4, 1.2, d / t)
                  , n = u(0, .4, -e) * (1 - r);
                n > 0 && (v += ((e >= -2 ? 1 + e * (-1.125 + e * (-1.372 + e * (-1.718 + -.655 * e))) : -e / 2 - Math.sqrt(e * e / 4 - 1)) * t / l - v) * n,
                x = n * u(.2, .7, -e) * (1 - u(1.4, 2.2, -e)))
            }
        }
        let A = g + v
          , M = b - w * A;
        M > e.ctMax ? M = e.ctMax : M < -e.ctMax && (M = -e.ctMax);
        let S = s.AIR_DENSITY * e.area * l * l
          , B = M * S * e.duct * f
          , I = B + p
          , L = ((e.sigmaCd0 * y / 4 + e.quarterSigmaA * A * y * (e.theta0 + e.thetaTw / 2)) * S + (B > 0 ? e.flapping * B * y : 0)) * u(.5, 2, l);
        d > 1e-9 ? (t.hx = -L * n / d,
        t.hz = -L * o / d) : (t.hx = 0,
        t.hz = 0);
        let T = e.kappa * v * M + g * M + e.sigmaCd0 * (1 + 3 * m) / 8;
        return t.thrust = I,
        t.torque = T * S * h,
        t.induced = v * l,
        t.wake = x,
        t
    }
    , "rotorModel", 0, function(t) {
        let r = t.blades * t.chord / (Math.PI * t.radius)
          , n = 0
          , i = 0
          , o = 0
          , a = 0
          , f = 0;
        for (let r = 0; r <= 14; r++) {
            let s = .3 + .05 * r
              , u = s * s
              , h = (0,
            e.atan)(t.pitch / (2 * Math.PI * t.radius * s)) + t.zeroLift;
            n += u,
            i += u * s,
            o += u * h,
            a += u * s * s,
            f += u * s * h
        }
        let s = (n * f - i * o) / (n * a - i * i)
          , u = (o - s * i) / n;
        return {
            radius: t.radius,
            area: Math.PI * t.radius * t.radius,
            sigma: r,
            theta0: u,
            thetaTw: s,
            halfSigmaA: r * t.liftSlope / 2,
            quarterSigmaA: r * t.liftSlope / 4,
            sigmaCd0: r * t.profileDrag,
            ctMax: r * t.maxLoading,
            flapping: t.flapping,
            kappa: t.inducedFactor,
            duct: t.duct,
            bladeArea: t.blades * t.chord * t.radius * .85
        }
    }
    ], 685024)
}
, 534306, t => {
    "use strict";
    var e = t.i(718598)
      , r = t.i(931038)
      , n = t.i(145725)
      , i = t.i(685024);
    let o = {
        zeroLift: .05,
        maxLoading: .2,
        flapping: 2,
        inducedFactor: 1.3,
        duct: 1,
        wakeNoise: .18
    }
      , a = {
        freestyle: {
            layout: {
                reachX: .087,
                reachZ: .087,
                motorY: .012,
                propY: .03,
                motor: {
                    mass: .033,
                    radius: .0135,
                    height: .022
                },
                prop: {
                    mass: .0045,
                    radius: .0635
                },
                battery: {
                    mass: .25,
                    size: [.038, .035, .075],
                    at: [0, .04, .005]
                },
                arms: .07,
                other: [{
                    name: "bottom plate",
                    mass: .03,
                    at: [0, -.002, 0],
                    size: [.06, .004, .13]
                }, {
                    name: "top plate",
                    mass: .015,
                    at: [0, .024, 0],
                    size: [.045, .002, .1]
                }, {
                    name: "stack",
                    mass: .022,
                    at: [0, .012, 0],
                    size: [.036, .015, .036]
                }, {
                    name: "camera",
                    mass: .012,
                    at: [0, .018, -.045],
                    size: [.019, .019, .02]
                }, {
                    name: "vtx and receiver",
                    mass: .03,
                    at: [0, .012, .035],
                    size: [.03, .01, .04]
                }, {
                    name: "mount, straps, hardware",
                    mass: .071,
                    at: [0, .018, -.005],
                    size: [.08, .03, .1]
                }]
            },
            aero: {
                dragArea: [.0095, .019, .0085],
                pressureCentre: [0, .012, 0]
            },
            prop: {
                ...o,
                radius: .0635,
                blades: 3,
                chord: .011,
                pitch: .1143,
                liftSlope: 2.56,
                profileDrag: .048
            },
            motor: {
                kv: 1950,
                resistance: .085,
                noLoadCurrent: 1.6,
                currentLimit: 70,
                brakeLimit: 50,
                rotorInertia: 55e-7
            },
            battery: {
                cells: 6,
                cellVoltage: 3.95,
                resistance: .026,
                polarisation: .012,
                polarisationTau: 2
            },
            tune: (0,
            r.tune)({
                d: [46, 52, 0],
                dMin: [42, 47, 0],
                f: [90, 93, 85],
                itermRelaxYaw: !0,
                tpaRate: .3,
                tpaBreakpoint: .5,
                dynIdleMinRpm: 30
            })
        },
        whoop: {
            layout: {
                reachX: .065 / Math.sqrt(8),
                reachZ: .065 / Math.sqrt(8),
                motorY: .004,
                propY: .007,
                motor: {
                    mass: .0021,
                    radius: .0045,
                    height: .008
                },
                prop: {
                    mass: 2e-4,
                    radius: .0155
                },
                battery: {
                    mass: .0072,
                    size: [.012, .007, .045],
                    at: [0, -.008, 0]
                },
                arms: 0,
                other: [{
                    name: "ducted frame",
                    mass: .0038,
                    at: [0, .003, 0],
                    size: [.075, .012, .075]
                }, {
                    name: "AIO board",
                    mass: .0025,
                    at: [0, .004, 0],
                    size: [.026, .004, .026]
                }, {
                    name: "camera",
                    mass: .0021,
                    at: [0, .01, -.018],
                    size: [.014, .012, .012]
                }, {
                    name: "canopy and hardware",
                    mass: .0012,
                    at: [0, .012, 0],
                    size: [.03, .01, .04]
                }]
            },
            aero: {
                dragArea: [.0012, .0035, .0012],
                pressureCentre: [0, .006, 0]
            },
            prop: {
                ...o,
                radius: .0155,
                blades: 3,
                chord: .0062,
                pitch: .022,
                liftSlope: 2.8,
                profileDrag: .094,
                flapping: 1,
                duct: 1.15,
                wakeNoise: .084
            },
            motor: {
                kv: 25e3,
                resistance: .2,
                noLoadCurrent: .15,
                currentLimit: 6,
                brakeLimit: 4,
                rotorInertia: 16e-9
            },
            battery: {
                cells: 1,
                cellVoltage: 3.85,
                resistance: .04,
                polarisation: .03,
                polarisationTau: 1.5
            },
            tune: (0,
            r.tune)({
                p: [70, 72, 80],
                d: [62, 66, 0],
                dMin: [56, 60, 0],
                f: [75, 78, 75],
                itermRelaxYaw: !0,
                tpaRate: .3,
                tpaBreakpoint: .5,
                dynIdleMinRpm: 80
            })
        },
        cinewhoop: {
            layout: {
                reachX: .064,
                reachZ: .05248,
                motorY: .01,
                propY: .02,
                motor: {
                    mass: .019,
                    radius: .0115,
                    height: .016
                },
                prop: {
                    mass: .002,
                    radius: .0381
                },
                battery: {
                    mass: .14,
                    size: [.034, .03, .07],
                    at: [0, .036, .004]
                },
                arms: 0,
                other: [{
                    name: "ducts and frame",
                    mass: .075,
                    at: [0, .008, 0],
                    size: [.21, .03, .18]
                }, {
                    name: "stack",
                    mass: .012,
                    at: [0, .012, 0],
                    size: [.03, .012, .03]
                }, {
                    name: "camera",
                    mass: .015,
                    at: [0, .02, -.05],
                    size: [.02, .02, .02]
                }, {
                    name: "vtx and hardware",
                    mass: .034,
                    at: [0, .016, .02],
                    size: [.04, .02, .06]
                }]
            },
            aero: {
                dragArea: [.01, .022, .008],
                pressureCentre: [0, .012, 0]
            },
            prop: {
                ...o,
                radius: .0381,
                blades: 3,
                chord: .0062,
                pitch: .076,
                liftSlope: 2.1,
                profileDrag: .1,
                flapping: 2,
                duct: 1.2,
                wakeNoise: .15
            },
            motor: {
                kv: 2450,
                resistance: .13,
                noLoadCurrent: .8,
                currentLimit: 30,
                brakeLimit: 20,
                rotorInertia: 11e-7
            },
            battery: {
                cells: 6,
                cellVoltage: 3.95,
                resistance: .035,
                polarisation: .02,
                polarisationTau: 2
            },
            tune: (0,
            r.tune)({
                p: [50, 52, 65],
                i: [70, 72, 75],
                d: [56, 62, 0],
                dMin: [52, 57, 0],
                f: [75, 78, 75],
                itermRelaxYaw: !0,
                tpaRate: .3,
                tpaBreakpoint: .5,
                dynIdleMinRpm: 60
            })
        },
        "long-range": {
            layout: {
                reachX: .119,
                reachZ: .119 * 1.15,
                motorY: .014,
                propY: .03,
                motor: {
                    mass: .058,
                    radius: .0175,
                    height: .026
                },
                prop: {
                    mass: .009,
                    radius: .0889
                },
                battery: {
                    mass: .42,
                    size: [.045, .04, .14],
                    at: [0, -.03, .01]
                },
                arms: .13,
                other: [{
                    name: "plates",
                    mass: .08,
                    at: [0, .005, 0],
                    size: [.07, .02, .2]
                }, {
                    name: "stack and GPS",
                    mass: .037,
                    at: [0, .02, .02],
                    size: [.04, .02, .05]
                }, {
                    name: "cameras",
                    mass: .14,
                    at: [0, .04, -.06],
                    size: [.06, .04, .05]
                }, {
                    name: "vtx, antennas, hardware",
                    mass: .175,
                    at: [0, .025, .04],
                    size: [.06, .03, .1]
                }]
            },
            aero: {
                dragArea: [.016, .034, .014],
                pressureCentre: [0, .01, -.01]
            },
            prop: {
                ...o,
                radius: .0889,
                blades: 3,
                chord: .018,
                pitch: .094,
                liftSlope: 3.65,
                profileDrag: .027
            },
            motor: {
                kv: 1450,
                resistance: .07,
                noLoadCurrent: 1.4,
                currentLimit: 60,
                brakeLimit: 40,
                rotorInertia: 22e-6
            },
            battery: {
                cells: 6,
                cellVoltage: 3.95,
                resistance: .029,
                polarisation: .04,
                polarisationTau: 3
            },
            tune: (0,
            r.tune)({
                p: [40, 42, 40],
                d: [44, 54, 0],
                dMin: [40, 49, 0],
                f: [70, 70, 80],
                itermRelaxYaw: !0,
                tpaRate: .3,
                tpaBreakpoint: .5,
                dynIdleMinRpm: 28
            })
        },
        racer: {
            layout: {
                reachX: .21 / Math.sqrt(8),
                reachZ: .21 / Math.sqrt(8),
                motorY: .012,
                propY: .03,
                motor: {
                    mass: .032,
                    radius: .0135,
                    height: .022
                },
                prop: {
                    mass: .004,
                    radius: .0635
                },
                battery: {
                    mass: .185,
                    size: [.035, .033, .07],
                    at: [0, .038, .006]
                },
                arms: .05,
                other: [{
                    name: "plates",
                    mass: .035,
                    at: [0, .004, 0],
                    size: [.05, .006, .12]
                }, {
                    name: "stack",
                    mass: .015,
                    at: [0, .012, 0],
                    size: [.03, .012, .03]
                }, {
                    name: "camera",
                    mass: .007,
                    at: [0, .018, -.042],
                    size: [.016, .016, .016]
                }, {
                    name: "vtx, receiver, hardware",
                    mass: .089,
                    at: [0, .016, .01],
                    size: [.06, .025, .09]
                }]
            },
            aero: {
                dragArea: [.008, .016, .0065],
                pressureCentre: [0, .012, 0]
            },
            prop: {
                ...o,
                radius: .0635,
                blades: 3,
                chord: .011,
                pitch: .1143,
                liftSlope: 2.56,
                profileDrag: .048
            },
            motor: {
                kv: 2100,
                resistance: .08,
                noLoadCurrent: 1.7,
                currentLimit: 70,
                brakeLimit: 50,
                rotorInertia: 52e-7
            },
            battery: {
                cells: 6,
                cellVoltage: 3.95,
                resistance: .03,
                polarisation: .014,
                polarisationTau: 2
            },
            tune: (0,
            r.tune)({
                p: [48, 50, 45],
                d: [50, 56, 0],
                dMin: [45, 50, 0],
                f: [90, 93, 55],
                itermRelaxYaw: !0,
                tpaRate: .3,
                tpaBreakpoint: .5,
                dynIdleMinRpm: 32
            })
        }
    }
      , f = new WeakMap;
    function s(t) {
        let r = f.get(t);
        if (!r) {
            let n = (0,
            e.quadParts)(t.layout)
              , o = (0,
            e.massProperties)(n)
              , [a,s,u] = o.centre
              , {reachX: h, reachZ: l, propY: c} = t.layout
              , p = [[1, -1], [-1, -1], [1, 1], [-1, 1]].map( ([t,e]) => [t * h - a, c - s, e * l - u])
              , [d,y,m] = t.aero.pressureCentre;
            r = {
                spec: t,
                parts: n,
                mass: o,
                rotor: (0,
                i.rotorModel)(t.prop),
                hubs: p,
                pressure: [d - a, y - s, m - u]
            },
            f.set(t, r)
        }
        return r
    }
    t.s(["FLIGHT_SPECS", 0, a, "flightHardware", 0, s, "thrustStand", 0, function(t) {
        let e = s(t)
          , r = new n.Powertrain
          , o = {
            thrust: 0,
            hx: 0,
            hz: 0,
            torque: 0,
            induced: 0,
            wake: 0
        }
          , a = [1, 1, 1, 1]
          , f = [0, 0, 0, 0]
          , u = 0;
        for (let n = 0; n < 480; n++)
            (0,
            i.rotorLoads)(o, e.rotor, r.omega[0], 0, 0, 0, u, 1),
            u = o.induced,
            f[0] = f[1] = f[2] = f[3] = o.torque,
            r.step(1 / 960, t.motor, t.battery, a, !0, f);
        return {
            thrustToWeight: 4 * o.thrust / (9.81 * e.mass.mass),
            rpm: 60 * r.omega[0] / (2 * Math.PI)
        }
    }
    ])
}
, 814022, 771607, t => {
    "use strict";
    var e = t.i(353198);
    let r = t => t.xp;
    t.s(["confirmedXp", 0, r], 771607),
    t.s(["flownDrone", 0, function(t) {
        let n = r(t)
          , i = t.squadDrone;
        return i && ((0,
        e.isDroneUnlocked)(i, n, t.droneGifts) || !1 !== t.lendHere && i !== t.lentSpent) ? i : (0,
        e.equippedDrone)(t.settings.drone, n, t.droneGifts)
    }
    , "lendAway", 0, function(t) {
        let n = t.squadDrone;
        return !!n && !1 === t.lendHere && !(0,
        e.isDroneUnlocked)(n, r(t), t.droneGifts)
    }
    , "lendHolds", 0, function(t, e=!1) {
        return !e && (!t || "match" === t.kind || "lobby" === t.kind && !!t.squadId && !t.lesson && !t.race)
    }
    , "lendSpent", 0, function(t) {
        let n = t.squadDrone;
        return !!n && n === t.lentSpent && !(0,
        e.isDroneUnlocked)(n, r(t), t.droneGifts)
    }
    , "lentSquadDrone", 0, function(t) {
        let n = t.squadDrone;
        return n && !(0,
        e.isDroneUnlocked)(n, r(t), t.droneGifts) ? n : null
    }
    , "ownDrone", 0, function(t) {
        return (0,
        e.equippedDrone)(t.settings.drone, r(t), t.droneGifts)
    }
    ], 814022)
}
, 467034, (t, e, r) => {
    var n = {
        872: function(t, e) {
            "use strict";
            e.byteLength = function(t) {
                var e = s(t)
                  , r = e[0]
                  , n = e[1];
                return (r + n) * 3 / 4 - n
            }
            ,
            e.toByteArray = function(t) {
                var e, r, o = s(t), a = o[0], f = o[1], u = new i((a + f) * 3 / 4 - f), h = 0, l = f > 0 ? a - 4 : a;
                for (r = 0; r < l; r += 4)
                    e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)],
                    u[h++] = e >> 16 & 255,
                    u[h++] = e >> 8 & 255,
                    u[h++] = 255 & e;
                return 2 === f && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4,
                u[h++] = 255 & e),
                1 === f && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2,
                u[h++] = e >> 8 & 255,
                u[h++] = 255 & e),
                u
            }
            ,
            e.fromByteArray = function(t) {
                for (var e, n = t.length, i = n % 3, o = [], a = 0, f = n - i; a < f; a += 16383)
                    o.push(function(t, e, n) {
                        for (var i, o = [], a = e; a < n; a += 3)
                            i = (t[a] << 16 & 0xff0000) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]),
                            o.push(r[i >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                        return o.join("")
                    }(t, a, a + 16383 > f ? f : a + 16383));
                return 1 === i ? o.push(r[(e = t[n - 1]) >> 2] + r[e << 4 & 63] + "==") : 2 === i && o.push(r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="),
                o.join("")
            }
            ;
            for (var r = [], n = [], i = "u" > typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, f = o.length; a < f; ++a)
                r[a] = o[a],
                n[o.charCodeAt(a)] = a;
            function s(t) {
                var e = t.length;
                if (e % 4 > 0)
                    throw Error("Invalid string. Length must be a multiple of 4");
                var r = t.indexOf("=");
                -1 === r && (r = e);
                var n = r === e ? 0 : 4 - r % 4;
                return [r, n]
            }
            n[45] = 62,
            n[95] = 63
        },
        230: function(t, e, r) {
            "use strict";
            var n = r(872)
              , i = r(321)
              , o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            function a(t) {
                if (t > 0x7fffffff)
                    throw RangeError('The value "' + t + '" is invalid for option "size"');
                var e = new Uint8Array(t);
                return Object.setPrototypeOf(e, f.prototype),
                e
            }
            function f(t, e, r) {
                if ("number" == typeof t) {
                    if ("string" == typeof e)
                        throw TypeError('The "string" argument must be of type string. Received type number');
                    return h(t)
                }
                return s(t, e, r)
            }
            function s(t, e, r) {
                if ("string" == typeof t) {
                    var n = t
                      , i = e;
                    if (("string" != typeof i || "" === i) && (i = "utf8"),
                    !f.isEncoding(i))
                        throw TypeError("Unknown encoding: " + i);
                    var o = 0 | p(n, i)
                      , s = a(o)
                      , u = s.write(n, i);
                    return u !== o && (s = s.slice(0, u)),
                    s
                }
                if (ArrayBuffer.isView(t))
                    return l(t);
                if (null == t)
                    throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (T(t, ArrayBuffer) || t && T(t.buffer, ArrayBuffer) || "u" > typeof SharedArrayBuffer && (T(t, SharedArrayBuffer) || t && T(t.buffer, SharedArrayBuffer)))
                    return function(t, e, r) {
                        var n;
                        if (e < 0 || t.byteLength < e)
                            throw RangeError('"offset" is outside of buffer bounds');
                        if (t.byteLength < e + (r || 0))
                            throw RangeError('"length" is outside of buffer bounds');
                        return Object.setPrototypeOf(n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t,e) : new Uint8Array(t,e,r), f.prototype),
                        n
                    }(t, e, r);
                if ("number" == typeof t)
                    throw TypeError('The "value" argument must not be of type number. Received type number');
                var h = t.valueOf && t.valueOf();
                if (null != h && h !== t)
                    return f.from(h, e, r);
                var d = function(t) {
                    if (f.isBuffer(t)) {
                        var e = 0 | c(t.length)
                          , r = a(e);
                        return 0 === r.length || t.copy(r, 0, 0, e),
                        r
                    }
                    return void 0 !== t.length ? "number" != typeof t.length || function(t) {
                        return t != t
                    }(t.length) ? a(0) : l(t) : "Buffer" === t.type && Array.isArray(t.data) ? l(t.data) : void 0
                }(t);
                if (d)
                    return d;
                if ("u" > typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive])
                    return f.from(t[Symbol.toPrimitive]("string"), e, r);
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
            }
            function u(t) {
                if ("number" != typeof t)
                    throw TypeError('"size" argument must be of type number');
                if (t < 0)
                    throw RangeError('The value "' + t + '" is invalid for option "size"')
            }
            function h(t) {
                return u(t),
                a(t < 0 ? 0 : 0 | c(t))
            }
            function l(t) {
                for (var e = t.length < 0 ? 0 : 0 | c(t.length), r = a(e), n = 0; n < e; n += 1)
                    r[n] = 255 & t[n];
                return r
            }
            e.Buffer = f,
            e.SlowBuffer = function(t) {
                return +t != t && (t = 0),
                f.alloc(+t)
            }
            ,
            e.INSPECT_MAX_BYTES = 50,
            e.kMaxLength = 0x7fffffff,
            f.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var t = new Uint8Array(1)
                      , e = {
                        foo: function() {
                            return 42
                        }
                    };
                    return Object.setPrototypeOf(e, Uint8Array.prototype),
                    Object.setPrototypeOf(t, e),
                    42 === t.foo()
                } catch (t) {
                    return !1
                }
            }(),
            !f.TYPED_ARRAY_SUPPORT && "u" > typeof console && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
            Object.defineProperty(f.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (f.isBuffer(this))
                        return this.buffer
                }
            }),
            Object.defineProperty(f.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (f.isBuffer(this))
                        return this.byteOffset
                }
            }),
            f.poolSize = 8192,
            f.from = function(t, e, r) {
                return s(t, e, r)
            }
            ,
            Object.setPrototypeOf(f.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(f, Uint8Array),
            f.alloc = function(t, e, r) {
                return (u(t),
                t <= 0) ? a(t) : void 0 !== e ? "string" == typeof r ? a(t).fill(e, r) : a(t).fill(e) : a(t)
            }
            ,
            f.allocUnsafe = function(t) {
                return h(t)
            }
            ,
            f.allocUnsafeSlow = function(t) {
                return h(t)
            }
            ;
            function c(t) {
                if (t >= 0x7fffffff)
                    throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                return 0 | t
            }
            function p(t, e) {
                if (f.isBuffer(t))
                    return t.length;
                if (ArrayBuffer.isView(t) || T(t, ArrayBuffer))
                    return t.byteLength;
                if ("string" != typeof t)
                    throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                var r = t.length
                  , n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r)
                    return 0;
                for (var i = !1; ; )
                    switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return S(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return I(t).length;
                    default:
                        if (i)
                            return n ? -1 : S(t).length;
                        e = ("" + e).toLowerCase(),
                        i = !0
                    }
            }
            function d(t, e, r) {
                var i, o, a, f = !1;
                if ((void 0 === e || e < 0) && (e = 0),
                e > this.length || ((void 0 === r || r > this.length) && (r = this.length),
                r <= 0 || (r >>>= 0) <= (e >>>= 0)))
                    return "";
                for (t || (t = "utf8"); ; )
                    switch (t) {
                    case "hex":
                        return function(t, e, r) {
                            var n = t.length;
                            (!e || e < 0) && (e = 0),
                            (!r || r < 0 || r > n) && (r = n);
                            for (var i = "", o = e; o < r; ++o)
                                i += R[t[o]];
                            return i
                        }(this, e, r);
                    case "utf8":
                    case "utf-8":
                        return b(this, e, r);
                    case "ascii":
                        return function(t, e, r) {
                            var n = "";
                            r = Math.min(t.length, r);
                            for (var i = e; i < r; ++i)
                                n += String.fromCharCode(127 & t[i]);
                            return n
                        }(this, e, r);
                    case "latin1":
                    case "binary":
                        return function(t, e, r) {
                            var n = "";
                            r = Math.min(t.length, r);
                            for (var i = e; i < r; ++i)
                                n += String.fromCharCode(t[i]);
                            return n
                        }(this, e, r);
                    case "base64":
                        return i = this,
                        o = e,
                        a = r,
                        0 === o && a === i.length ? n.fromByteArray(i) : n.fromByteArray(i.slice(o, a));
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return function(t, e, r) {
                            for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2)
                                i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                            return i
                        }(this, e, r);
                    default:
                        if (f)
                            throw TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(),
                        f = !0
                    }
            }
            function y(t, e, r) {
                var n = t[e];
                t[e] = t[r],
                t[r] = n
            }
            function m(t, e, r, n, i) {
                var o;
                if (0 === t.length)
                    return -1;
                if ("string" == typeof r ? (n = r,
                r = 0) : r > 0x7fffffff ? r = 0x7fffffff : r < -0x80000000 && (r = -0x80000000),
                (o = r *= 1) != o && (r = i ? 0 : t.length - 1),
                r < 0 && (r = t.length + r),
                r >= t.length)
                    if (i)
                        return -1;
                    else
                        r = t.length - 1;
                else if (r < 0)
                    if (!i)
                        return -1;
                    else
                        r = 0;
                if ("string" == typeof e && (e = f.from(e, n)),
                f.isBuffer(e))
                    return 0 === e.length ? -1 : g(t, e, r, n, i);
                if ("number" == typeof e) {
                    if (e &= 255,
                    "function" == typeof Uint8Array.prototype.indexOf)
                        if (i)
                            return Uint8Array.prototype.indexOf.call(t, e, r);
                        else
                            return Uint8Array.prototype.lastIndexOf.call(t, e, r);
                    return g(t, [e], r, n, i)
                }
                throw TypeError("val must be string, number or Buffer")
            }
            function g(t, e, r, n, i) {
                var o, a = 1, f = t.length, s = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2)
                        return -1;
                    a = 2,
                    f /= 2,
                    s /= 2,
                    r /= 2
                }
                function u(t, e) {
                    return 1 === a ? t[e] : t.readUInt16BE(e * a)
                }
                if (i) {
                    var h = -1;
                    for (o = r; o < f; o++)
                        if (u(t, o) === u(e, -1 === h ? 0 : o - h)) {
                            if (-1 === h && (h = o),
                            o - h + 1 === s)
                                return h * a
                        } else
                            -1 !== h && (o -= o - h),
                            h = -1
                } else
                    for (r + s > f && (r = f - s),
                    o = r; o >= 0; o--) {
                        for (var l = !0, c = 0; c < s; c++)
                            if (u(t, o + c) !== u(e, c)) {
                                l = !1;
                                break
                            }
                        if (l)
                            return o
                    }
                return -1
            }
            f.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== f.prototype
            }
            ,
            f.compare = function(t, e) {
                if (T(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)),
                T(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
                !f.isBuffer(t) || !f.isBuffer(e))
                    throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e)
                    return 0;
                for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (t[i] !== e[i]) {
                        r = t[i],
                        n = e[i];
                        break
                    }
                return r < n ? -1 : +(n < r)
            }
            ,
            f.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
                }
            }
            ,
            f.concat = function(t, e) {
                if (!Array.isArray(t))
                    throw TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length)
                    return f.alloc(0);
                if (void 0 === e)
                    for (r = 0,
                    e = 0; r < t.length; ++r)
                        e += t[r].length;
                var r, n = f.allocUnsafe(e), i = 0;
                for (r = 0; r < t.length; ++r) {
                    var o = t[r];
                    if (T(o, Uint8Array) && (o = f.from(o)),
                    !f.isBuffer(o))
                        throw TypeError('"list" argument must be an Array of Buffers');
                    o.copy(n, i),
                    i += o.length
                }
                return n
            }
            ,
            f.byteLength = p,
            f.prototype._isBuffer = !0,
            f.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 != 0)
                    throw RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2)
                    y(this, e, e + 1);
                return this
            }
            ,
            f.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 != 0)
                    throw RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4)
                    y(this, e, e + 3),
                    y(this, e + 1, e + 2);
                return this
            }
            ,
            f.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 != 0)
                    throw RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8)
                    y(this, e, e + 7),
                    y(this, e + 1, e + 6),
                    y(this, e + 2, e + 5),
                    y(this, e + 3, e + 4);
                return this
            }
            ,
            f.prototype.toString = function() {
                var t = this.length;
                return 0 === t ? "" : 0 == arguments.length ? b(this, 0, t) : d.apply(this, arguments)
            }
            ,
            f.prototype.toLocaleString = f.prototype.toString,
            f.prototype.equals = function(t) {
                if (!f.isBuffer(t))
                    throw TypeError("Argument must be a Buffer");
                return this === t || 0 === f.compare(this, t)
            }
            ,
            f.prototype.inspect = function() {
                var t = ""
                  , r = e.INSPECT_MAX_BYTES;
                return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(),
                this.length > r && (t += " ... "),
                "<Buffer " + t + ">"
            }
            ,
            o && (f.prototype[o] = f.prototype.inspect),
            f.prototype.compare = function(t, e, r, n, i) {
                if (T(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)),
                !f.isBuffer(t))
                    throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0),
                void 0 === r && (r = t ? t.length : 0),
                void 0 === n && (n = 0),
                void 0 === i && (i = this.length),
                e < 0 || r > t.length || n < 0 || i > this.length)
                    throw RangeError("out of range index");
                if (n >= i && e >= r)
                    return 0;
                if (n >= i)
                    return -1;
                if (e >= r)
                    return 1;
                if (e >>>= 0,
                r >>>= 0,
                n >>>= 0,
                i >>>= 0,
                this === t)
                    return 0;
                for (var o = i - n, a = r - e, s = Math.min(o, a), u = this.slice(n, i), h = t.slice(e, r), l = 0; l < s; ++l)
                    if (u[l] !== h[l]) {
                        o = u[l],
                        a = h[l];
                        break
                    }
                return o < a ? -1 : +(a < o)
            }
            ,
            f.prototype.includes = function(t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }
            ,
            f.prototype.indexOf = function(t, e, r) {
                return m(this, t, e, r, !0)
            }
            ,
            f.prototype.lastIndexOf = function(t, e, r) {
                return m(this, t, e, r, !1)
            }
            ;
            function b(t, e, r) {
                r = Math.min(t.length, r);
                for (var n = [], i = e; i < r; ) {
                    var o, a, f, s, u = t[i], h = null, l = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                    if (i + l <= r)
                        switch (l) {
                        case 1:
                            u < 128 && (h = u);
                            break;
                        case 2:
                            (192 & (o = t[i + 1])) == 128 && (s = (31 & u) << 6 | 63 & o) > 127 && (h = s);
                            break;
                        case 3:
                            o = t[i + 1],
                            a = t[i + 2],
                            (192 & o) == 128 && (192 & a) == 128 && (s = (15 & u) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (s < 55296 || s > 57343) && (h = s);
                            break;
                        case 4:
                            o = t[i + 1],
                            a = t[i + 2],
                            f = t[i + 3],
                            (192 & o) == 128 && (192 & a) == 128 && (192 & f) == 128 && (s = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & f) > 65535 && s < 1114112 && (h = s)
                        }
                    null === h ? (h = 65533,
                    l = 1) : h > 65535 && (h -= 65536,
                    n.push(h >>> 10 & 1023 | 55296),
                    h = 56320 | 1023 & h),
                    n.push(h),
                    i += l
                }
                var c = n
                  , p = c.length;
                if (p <= 4096)
                    return String.fromCharCode.apply(String, c);
                for (var d = "", y = 0; y < p; )
                    d += String.fromCharCode.apply(String, c.slice(y, y += 4096));
                return d
            }
            function w(t, e, r) {
                if (t % 1 != 0 || t < 0)
                    throw RangeError("offset is not uint");
                if (t + e > r)
                    throw RangeError("Trying to access beyond buffer length")
            }
            function v(t, e, r, n, i, o) {
                if (!f.isBuffer(t))
                    throw TypeError('"buffer" argument must be a Buffer instance');
                if (e > i || e < o)
                    throw RangeError('"value" argument is out of bounds');
                if (r + n > t.length)
                    throw RangeError("Index out of range")
            }
            function x(t, e, r, n, i, o) {
                if (r + n > t.length || r < 0)
                    throw RangeError("Index out of range")
            }
            function E(t, e, r, n, o) {
                return e *= 1,
                r >>>= 0,
                o || x(t, e, r, 4, 34028234663852886e22, -34028234663852886e22),
                i.write(t, e, r, n, 23, 4),
                r + 4
            }
            function A(t, e, r, n, o) {
                return e *= 1,
                r >>>= 0,
                o || x(t, e, r, 8, 17976931348623157e292, -17976931348623157e292),
                i.write(t, e, r, n, 52, 8),
                r + 8
            }
            f.prototype.write = function(t, e, r, n) {
                if (void 0 === e)
                    n = "utf8",
                    r = this.length,
                    e = 0;
                else if (void 0 === r && "string" == typeof e)
                    n = e,
                    r = this.length,
                    e = 0;
                else if (isFinite(e))
                    e >>>= 0,
                    isFinite(r) ? (r >>>= 0,
                    void 0 === n && (n = "utf8")) : (n = r,
                    r = void 0);
                else
                    throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                var i, o, a, f, s, u, h, l, c = this.length - e;
                if ((void 0 === r || r > c) && (r = c),
                t.length > 0 && (r < 0 || e < 0) || e > this.length)
                    throw RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var p = !1; ; )
                    switch (n) {
                    case "hex":
                        return function(t, e, r, n) {
                            r = Number(r) || 0;
                            var i = t.length - r;
                            n ? (n = Number(n)) > i && (n = i) : n = i;
                            var o = e.length;
                            n > o / 2 && (n = o / 2);
                            for (var a = 0; a < n; ++a) {
                                var f, s = parseInt(e.substr(2 * a, 2), 16);
                                if ((f = s) != f)
                                    break;
                                t[r + a] = s
                            }
                            return a
                        }(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                        return i = e,
                        o = r,
                        L(S(t, this.length - i), this, i, o);
                    case "ascii":
                        return a = e,
                        f = r,
                        L(B(t), this, a, f);
                    case "latin1":
                    case "binary":
                        return function(t, e, r, n) {
                            return L(B(e), t, r, n)
                        }(this, t, e, r);
                    case "base64":
                        return s = e,
                        u = r,
                        L(I(t), this, s, u);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return h = e,
                        l = r,
                        L(function(t, e) {
                            for (var r, n, i = [], o = 0; o < t.length && !((e -= 2) < 0); ++o)
                                n = (r = t.charCodeAt(o)) >> 8,
                                i.push(r % 256),
                                i.push(n);
                            return i
                        }(t, this.length - h), this, h, l);
                    default:
                        if (p)
                            throw TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(),
                        p = !0
                    }
            }
            ,
            f.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }
            ,
            f.prototype.slice = function(t, e) {
                var r = this.length;
                t = ~~t,
                e = void 0 === e ? r : ~~e,
                t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                e < t && (e = t);
                var n = this.subarray(t, e);
                return Object.setPrototypeOf(n, f.prototype),
                n
            }
            ,
            f.prototype.readUIntLE = function(t, e, r) {
                t >>>= 0,
                e >>>= 0,
                r || w(t, e, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                    n += this[t + o] * i;
                return n
            }
            ,
            f.prototype.readUIntBE = function(t, e, r) {
                t >>>= 0,
                e >>>= 0,
                r || w(t, e, this.length);
                for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
                    n += this[t + --e] * i;
                return n
            }
            ,
            f.prototype.readUInt8 = function(t, e) {
                return t >>>= 0,
                e || w(t, 1, this.length),
                this[t]
            }
            ,
            f.prototype.readUInt16LE = function(t, e) {
                return t >>>= 0,
                e || w(t, 2, this.length),
                this[t] | this[t + 1] << 8
            }
            ,
            f.prototype.readUInt16BE = function(t, e) {
                return t >>>= 0,
                e || w(t, 2, this.length),
                this[t] << 8 | this[t + 1]
            }
            ,
            f.prototype.readUInt32LE = function(t, e) {
                return t >>>= 0,
                e || w(t, 4, this.length),
                (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 0x1000000 * this[t + 3]
            }
            ,
            f.prototype.readUInt32BE = function(t, e) {
                return t >>>= 0,
                e || w(t, 4, this.length),
                0x1000000 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }
            ,
            f.prototype.readIntLE = function(t, e, r) {
                t >>>= 0,
                e >>>= 0,
                r || w(t, e, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                    n += this[t + o] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)),
                n
            }
            ,
            f.prototype.readIntBE = function(t, e, r) {
                t >>>= 0,
                e >>>= 0,
                r || w(t, e, this.length);
                for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
                    o += this[t + --n] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)),
                o
            }
            ,
            f.prototype.readInt8 = function(t, e) {
                return (t >>>= 0,
                e || w(t, 1, this.length),
                128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t]
            }
            ,
            f.prototype.readInt16LE = function(t, e) {
                t >>>= 0,
                e || w(t, 2, this.length);
                var r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 0xffff0000 | r : r
            }
            ,
            f.prototype.readInt16BE = function(t, e) {
                t >>>= 0,
                e || w(t, 2, this.length);
                var r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 0xffff0000 | r : r
            }
            ,
            f.prototype.readInt32LE = function(t, e) {
                return t >>>= 0,
                e || w(t, 4, this.length),
                this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }
            ,
            f.prototype.readInt32BE = function(t, e) {
                return t >>>= 0,
                e || w(t, 4, this.length),
                this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }
            ,
            f.prototype.readFloatLE = function(t, e) {
                return t >>>= 0,
                e || w(t, 4, this.length),
                i.read(this, t, !0, 23, 4)
            }
            ,
            f.prototype.readFloatBE = function(t, e) {
                return t >>>= 0,
                e || w(t, 4, this.length),
                i.read(this, t, !1, 23, 4)
            }
            ,
            f.prototype.readDoubleLE = function(t, e) {
                return t >>>= 0,
                e || w(t, 8, this.length),
                i.read(this, t, !0, 52, 8)
            }
            ,
            f.prototype.readDoubleBE = function(t, e) {
                return t >>>= 0,
                e || w(t, 8, this.length),
                i.read(this, t, !1, 52, 8)
            }
            ,
            f.prototype.writeUIntLE = function(t, e, r, n) {
                if (t *= 1,
                e >>>= 0,
                r >>>= 0,
                !n) {
                    var i = Math.pow(2, 8 * r) - 1;
                    v(this, t, e, r, i, 0)
                }
                var o = 1
                  , a = 0;
                for (this[e] = 255 & t; ++a < r && (o *= 256); )
                    this[e + a] = t / o & 255;
                return e + r
            }
            ,
            f.prototype.writeUIntBE = function(t, e, r, n) {
                if (t *= 1,
                e >>>= 0,
                r >>>= 0,
                !n) {
                    var i = Math.pow(2, 8 * r) - 1;
                    v(this, t, e, r, i, 0)
                }
                var o = r - 1
                  , a = 1;
                for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); )
                    this[e + o] = t / a & 255;
                return e + r
            }
            ,
            f.prototype.writeUInt8 = function(t, e, r) {
                return t *= 1,
                e >>>= 0,
                r || v(this, t, e, 1, 255, 0),
                this[e] = 255 & t,
                e + 1
            }
            ,
            f.prototype.writeUInt16LE = function(t, e, r) {
                return t *= 1,
                e >>>= 0,
                r || v(this, t, e, 2, 65535, 0),
                this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                e + 2
            }
            ,
            f.prototype.writeUInt16BE = function(t, e, r) {
                return t *= 1,
                e >>>= 0,
                r || v(this, t, e, 2, 65535, 0),
                this[e] = t >>> 8,
                this[e + 1] = 255 & t,
                e + 2
            }
            ,
            f.prototype.writeUInt32LE = function(t, e, r) {
                return t *= 1,
                e >>>= 0,
                r || v(this, t, e, 4, 0xffffffff, 0),
                this[e + 3] = t >>> 24,
                this[e + 2] = t >>> 16,
                this[e + 1] = t >>> 8,
                this[e] = 255 & t,
                e + 4
            }
            ,
            f.prototype.writeUInt32BE = function(t, e, r) {
                return t *= 1,
                e >>>= 0,
                r || v(this, t, e, 4, 0xffffffff, 0),
                this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t,
                e + 4
            }
            ,
            f.prototype.writeIntLE = function(t, e, r, n) {
                if (t *= 1,
                e >>>= 0,
                !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    v(this, t, e, r, i - 1, -i)
                }
                var o = 0
                  , a = 1
                  , f = 0;
                for (this[e] = 255 & t; ++o < r && (a *= 256); )
                    t < 0 && 0 === f && 0 !== this[e + o - 1] && (f = 1),
                    this[e + o] = (t / a | 0) - f & 255;
                return e + r
            }
            ,
            f.prototype.writeIntBE = function(t, e, r, n) {
                if (t *= 1,
                e >>>= 0,
                !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    v(this, t, e, r, i - 1, -i)
                }
                var o = r - 1
                  , a = 1
                  , f = 0;
                for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); )
                    t < 0 && 0 === f && 0 !== this[e + o + 1] && (f = 1),
                    this[e + o] = (t / a | 0) - f & 255;
                return e + r
            }
            ,
            f.prototype.writeInt8 = function(t, e, r) {
                return t *= 1,
                e >>>= 0,
                r || v(this, t, e, 1, 127, -128),
                t < 0 && (t = 255 + t + 1),
                this[e] = 255 & t,
                e + 1
            }
            ,
            f.prototype.writeInt16LE = function(t, e, r) {
                return t *= 1,
                e >>>= 0,
                r || v(this, t, e, 2, 32767, -32768),
                this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                e + 2
            }
            ,
            f.prototype.writeInt16BE = function(t, e, r) {
                return t *= 1,
                e >>>= 0,
                r || v(this, t, e, 2, 32767, -32768),
                this[e] = t >>> 8,
                this[e + 1] = 255 & t,
                e + 2
            }
            ,
            f.prototype.writeInt32LE = function(t, e, r) {
                return t *= 1,
                e >>>= 0,
                r || v(this, t, e, 4, 0x7fffffff, -0x80000000),
                this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                this[e + 2] = t >>> 16,
                this[e + 3] = t >>> 24,
                e + 4
            }
            ,
            f.prototype.writeInt32BE = function(t, e, r) {
                return t *= 1,
                e >>>= 0,
                r || v(this, t, e, 4, 0x7fffffff, -0x80000000),
                t < 0 && (t = 0xffffffff + t + 1),
                this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t,
                e + 4
            }
            ,
            f.prototype.writeFloatLE = function(t, e, r) {
                return E(this, t, e, !0, r)
            }
            ,
            f.prototype.writeFloatBE = function(t, e, r) {
                return E(this, t, e, !1, r)
            }
            ,
            f.prototype.writeDoubleLE = function(t, e, r) {
                return A(this, t, e, !0, r)
            }
            ,
            f.prototype.writeDoubleBE = function(t, e, r) {
                return A(this, t, e, !1, r)
            }
            ,
            f.prototype.copy = function(t, e, r, n) {
                if (!f.isBuffer(t))
                    throw TypeError("argument should be a Buffer");
                if (r || (r = 0),
                n || 0 === n || (n = this.length),
                e >= t.length && (e = t.length),
                e || (e = 0),
                n > 0 && n < r && (n = r),
                n === r || 0 === t.length || 0 === this.length)
                    return 0;
                if (e < 0)
                    throw RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length)
                    throw RangeError("Index out of range");
                if (n < 0)
                    throw RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length),
                t.length - e < n - r && (n = t.length - e + r);
                var i = n - r;
                if (this === t && "function" == typeof Uint8Array.prototype.copyWithin)
                    this.copyWithin(e, r, n);
                else if (this === t && r < e && e < n)
                    for (var o = i - 1; o >= 0; --o)
                        t[o + e] = this[o + r];
                else
                    Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
                return i
            }
            ,
            f.prototype.fill = function(t, e, r, n) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (n = e,
                    e = 0,
                    r = this.length) : "string" == typeof r && (n = r,
                    r = this.length),
                    void 0 !== n && "string" != typeof n)
                        throw TypeError("encoding must be a string");
                    if ("string" == typeof n && !f.isEncoding(n))
                        throw TypeError("Unknown encoding: " + n);
                    if (1 === t.length) {
                        var i, o = t.charCodeAt(0);
                        ("utf8" === n && o < 128 || "latin1" === n) && (t = o)
                    }
                } else
                    "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < r)
                    throw RangeError("Out of range index");
                if (r <= e)
                    return this;
                if (e >>>= 0,
                r = void 0 === r ? this.length : r >>> 0,
                t || (t = 0),
                "number" == typeof t)
                    for (i = e; i < r; ++i)
                        this[i] = t;
                else {
                    var a = f.isBuffer(t) ? t : f.from(t, n)
                      , s = a.length;
                    if (0 === s)
                        throw TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (i = 0; i < r - e; ++i)
                        this[i + e] = a[i % s]
                }
                return this
            }
            ;
            var M = /[^+/0-9A-Za-z-_]/g;
            function S(t, e) {
                e = e || 1 / 0;
                for (var r, n = t.length, i = null, o = [], a = 0; a < n; ++a) {
                    if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319 || a + 1 === n) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189),
                            i = r;
                            continue
                        }
                        r = (i - 55296 << 10 | r - 56320) + 65536
                    } else
                        i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null,
                    r < 128) {
                        if ((e -= 1) < 0)
                            break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0)
                            break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0)
                            break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else if (r < 1114112) {
                        if ((e -= 4) < 0)
                            break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    } else
                        throw Error("Invalid code point")
                }
                return o
            }
            function B(t) {
                for (var e = [], r = 0; r < t.length; ++r)
                    e.push(255 & t.charCodeAt(r));
                return e
            }
            function I(t) {
                return n.toByteArray(function(t) {
                    if ((t = (t = t.split("=")[0]).trim().replace(M, "")).length < 2)
                        return "";
                    for (; t.length % 4 != 0; )
                        t += "=";
                    return t
                }(t))
            }
            function L(t, e, r, n) {
                for (var i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i)
                    e[i + r] = t[i];
                return i
            }
            function T(t, e) {
                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
            }
            var R = function() {
                for (var t = "0123456789abcdef", e = Array(256), r = 0; r < 16; ++r)
                    for (var n = 16 * r, i = 0; i < 16; ++i)
                        e[n + i] = t[r] + t[i];
                return e
            }()
        },
        321: function(t, e) {
            e.read = function(t, e, r, n, i) {
                var o, a, f = 8 * i - n - 1, s = (1 << f) - 1, u = s >> 1, h = -7, l = r ? i - 1 : 0, c = r ? -1 : 1, p = t[e + l];
                for (l += c,
                o = p & (1 << -h) - 1,
                p >>= -h,
                h += f; h > 0; o = 256 * o + t[e + l],
                l += c,
                h -= 8)
                    ;
                for (a = o & (1 << -h) - 1,
                o >>= -h,
                h += n; h > 0; a = 256 * a + t[e + l],
                l += c,
                h -= 8)
                    ;
                if (0 === o)
                    o = 1 - u;
                else {
                    if (o === s)
                        return a ? NaN : 1 / 0 * (p ? -1 : 1);
                    a += Math.pow(2, n),
                    o -= u
                }
                return (p ? -1 : 1) * a * Math.pow(2, o - n)
            }
            ,
            e.write = function(t, e, r, n, i, o) {
                var a, f, s, u = 8 * o - i - 1, h = (1 << u) - 1, l = h >> 1, c = 5960464477539062e-23 * (23 === i), p = n ? 0 : o - 1, d = n ? 1 : -1, y = +(e < 0 || 0 === e && 1 / e < 0);
                for (isNaN(e = Math.abs(e)) || e === 1 / 0 ? (f = +!!isNaN(e),
                a = h) : (a = Math.floor(Math.log(e) / Math.LN2),
                e * (s = Math.pow(2, -a)) < 1 && (a--,
                s *= 2),
                a + l >= 1 ? e += c / s : e += c * Math.pow(2, 1 - l),
                e * s >= 2 && (a++,
                s /= 2),
                a + l >= h ? (f = 0,
                a = h) : a + l >= 1 ? (f = (e * s - 1) * Math.pow(2, i),
                a += l) : (f = e * Math.pow(2, l - 1) * Math.pow(2, i),
                a = 0)); i >= 8; t[r + p] = 255 & f,
                p += d,
                f /= 256,
                i -= 8)
                    ;
                for (a = a << i | f,
                u += i; u > 0; t[r + p] = 255 & a,
                p += d,
                a /= 256,
                u -= 8)
                    ;
                t[r + p - d] |= 128 * y
            }
        }
    }
      , i = {};
    function o(t) {
        var e = i[t];
        if (void 0 !== e)
            return e.exports;
        var r = i[t] = {
            exports: {}
        }
          , a = !0;
        try {
            n[t](r, r.exports, o),
            a = !1
        } finally {
            a && delete i[t]
        }
        return r.exports
    }
    o.ab = "/ROOT/node_modules/next/dist/compiled/buffer/",
    e.exports = o(230)
}
, 290571, t => {
    "use strict";
    var e = function() {
        return (e = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in e = arguments[r])
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }
        ).apply(this, arguments)
    };
    "function" == typeof SuppressedError && SuppressedError,
    t.s(["__assign", () => e, "__awaiter", 0, function(t, e, r, n) {
        return new (r || (r = Promise))(function(i, o) {
            function a(t) {
                try {
                    s(n.next(t))
                } catch (t) {
                    o(t)
                }
            }
            function f(t) {
                try {
                    s(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }
            function s(t) {
                var e;
                t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                    t(e)
                }
                )).then(a, f)
            }
            s((n = n.apply(t, e || [])).next())
        }
        )
    }
    , "__rest", 0, function(t, e) {
        var r = {};
        for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                0 > e.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
        return r
    }
    , "__spreadArray", 0, function(t, e, r) {
        if (r || 2 == arguments.length)
            for (var n, i = 0, o = e.length; i < o; i++)
                !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)),
                n[i] = e[i]);
        return t.concat(n || Array.prototype.slice.call(e))
    }
    ])
}
]);
