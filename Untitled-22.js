(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 702329, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(894969)
      , a = e.i(271645)
      , n = e.i(689330)
      , i = e.i(567692)
      , o = e.i(353198)
      , l = e.i(252497)
      , s = e.i(206062)
      , c = e.i(618151);
    let u = {
        armed: !1,
        motors: [0, 0, 0, 0]
    };
    e.s(["DroneAirframe", 0, function({archetype: e, skin: d, skinOverride: h, castShadow: m=!0, showroom: p=!1, drive: f=null, visualDrive: y}) {
        (0,
        r.useInventory)(e => e.items);
        let x = (0,
        a.useMemo)( () => (0,
        n.buildDroneGeometry)(e), [e])
          , M = h ?? (0,
        o.droneSkin)(e, d)
          , w = (0,
        i.airframeMaterials)(e, M);
        return (0,
        t.jsxs)("group", {
            dispose: null,
            children: [Object.entries(x.parts).map( ([e,r]) => (0,
            t.jsx)("mesh", {
                geometry: r,
                material: w[e],
                castShadow: m,
                receiveShadow: !0
            }, e)), x.motors.map( (e, r) => (0,
            t.jsx)("group", {
                position: e,
                rotation: [0, 1.1 * r, 0],
                scale: x.radius / c.PROP_RADIUS,
                children: (0,
                t.jsx)(s.Propeller, {
                    motorIndex: r,
                    spinSign: l.PROP_SPIN_SIGNS[r],
                    color: M.props,
                    material: M.propMaterial,
                    bladeCount: x.blades,
                    drive: p ? u : f,
                    visualDrive: y
                })
            }, r))]
        })
    }
    , "FpvAirframe", 0, function({archetype: e, skin: s}) {
        (0,
        r.useInventory)(e => e.items);
        let c = (0,
        a.useMemo)( () => (0,
        n.buildDroneGeometry)(e, "fpv"), [e])
          , u = (0,
        o.droneSkin)(e, s)
          , d = (0,
        i.airframeMaterials)(e, u);
        return (0,
        t.jsx)("group", {
            dispose: null,
            children: Object.entries(c.parts).map( ([e,r]) => (0,
            t.jsx)("mesh", {
                "layers-mask": 1 << l.FPV_PROP_LAYER,
                geometry: r,
                material: d[e]
            }, e))
        })
    }
    ])
}
, 869488, 625979, 914584, 981229, 332628, e => {
    "use strict";
    let t;
    var r = e.i(843476)
      , a = e.i(271645)
      , n = e.i(733088)
      , i = e.i(848546)
      , o = e.i(560099)
      , l = e.i(190072)
      , s = e.i(768834)
      , c = e.i(759366)
      , u = e.i(825586)
      , d = e.i(167614)
      , h = e.i(391090)
      , m = e.i(745109)
      , p = e.i(847511)
      , f = e.i(361073)
      , y = e.i(353198)
      , x = e.i(184866);
    function M(e, t, r, a) {
        let n = t.clone().add(new l.Vector3(0,r + .23 * a,0))
          , i = e.position.clone().sub(n)
          , o = Math.asin(-e.getWorldDirection(new l.Vector3).y) + .1;
        return {
            position: e.position.clone(),
            quaternion: e.quaternion.clone(),
            pivot: n,
            neutralElevation: o,
            neutralTurn: o - Math.atan2(i.y, Math.hypot(i.x, i.z)),
            right: new l.Vector3(1,0,0).applyQuaternion(e.quaternion),
            turn: new l.Quaternion
        }
    }
    function w(e, t, r, a=1) {
        let n = l.MathUtils.clamp(r, -1, 1);
        t.turn.setFromAxisAngle(t.right, -(t.neutralTurn + .13 * n)),
        e.position.copy(t.position).sub(t.pivot).applyQuaternion(t.turn).multiplyScalar(a * (1 - .06 * n)).add(t.pivot),
        e.quaternion.copy(t.quaternion).premultiply(t.turn),
        e.updateMatrixWorld()
    }
    function g(e, t, r) {
        let a;
        return r ? e * ((a = (0,
        h.lobbyCraftFraming)(t, 1, 0, h.STAND_SIZE_COMPRESSION).aircraftWidth) < .8 ? Math.min(1.8, .96 / a) : 1.8) / 1.285 : e
    }
    e.s(["applyGearInspectionView", 0, w, "createGearInspectionView", 0, M, "gearInspectionDistance", 0, function(e) {
        return (0,
        h.lobbyCraftFraming)(e, 1, 0).aircraftWidth ** .32
    }
    ], 625979);
    let S = new l.Vector3
      , v = new l.Vector3
      , b = new l.Vector3;
    function A(e, t, r, a="freestyle", n=!1) {
        S.setFromMatrixColumn(e.matrixWorld, 0).setY(0).normalize();
        let i = r.width * f.LOBBY_STAND_SHARE * m.LOBBY_STAND_TOP
          , o = (0,
        h.lobbyCraftFraming)(a, g(r.width, a, n), i, h.STAND_SIZE_COMPRESSION).aircraftWidth;
        b.copy(r.at).y += i + r.width * f.LOBBY_STAND_SHARE * .12;
        let l = r => (v.copy(b).addScaledVector(S, o / 2 * r).project(e).x + 1) * t.width / 2;
        return l(1) - l(-1)
    }
    e.s(["STAND_EMPHASIS", 0, 1.285, "craftWidthOn", 0, g, "drawnCraftWidth", 0, A], 914584);
    let O = [0, -1, 1, 1]
      , _ = new l.Vector3
      , R = new l.Vector3
      , P = new l.Vector3;
    function T(e) {
        return {
            right: new l.Vector3().setFromMatrixColumn(e.matrixWorld, 0).setY(0).normalize(),
            forward: e.getWorldDirection(new l.Vector3).setY(0).normalize()
        }
    }
    function B(e, t, r) {
        return (P.copy(r).project(e).x + 1) * t.width / 2
    }
    function Y(e, t, r, a) {
        let n = T(e);
        _.copy(n.right),
        R.copy(n.forward);
        let i = r.width * f.LOBBY_STAND_SHARE
          , o = r.at.clone().addScaledVector(R, .75 * i)
          , l = function(e, t, r, a) {
            let n = A(e, t, r)
              , i = r.width;
            for (let r = 0; r < 8; r++)
                i *= n / A(e, t, {
                    at: a,
                    width: i
                }) / 1.285;
            return i
        }(e, t, r, o)
          , s = B(e, t, o.clone().add(_)) - B(e, t, o)
          , c = B(e, t, o)
          , u = l * f.LOBBY_STAND_SHARE * s
          , d = .25 * u
          , h = B(e, t, r.at.clone().addScaledVector(_, -i / 2))
          , m = B(e, t, r.at.clone().addScaledVector(_, i / 2))
          , p = [r]
          , y = h
          , x = m;
        for (let e = 1; e < a; e++) {
            let t = O[Math.min(e, O.length - 1)]
              , r = t < 0 ? y - d - u / 2 : x + d + u / 2;
            t < 0 ? y = r - u / 2 : x = r + u / 2,
            p.push({
                at: o.clone().addScaledVector(_, (r - c) / s),
                width: l
            })
        }
        return p
    }
    function E(e, t, r) {
        let {right: a} = T(e)
          , n = r.map(r => ({
            pad: r,
            ...function(e, t, r) {
                let {right: a} = T(e)
                  , n = r.width * f.LOBBY_STAND_SHARE / 2;
                return {
                    left: B(e, t, r.at.clone().addScaledVector(a, -n)),
                    right: B(e, t, r.at.clone().addScaledVector(a, n))
                }
            }(e, t, r)
        }))
          , i = n.reduce( (e, t) => t.left < e.left ? t : e)
          , o = n.reduce( (e, t) => t.right > e.right ? t : e)
          , s = i.pad.at.clone().addScaledVector(a, -i.pad.width * f.LOBBY_STAND_SHARE / 2).add(o.pad.at.clone().addScaledVector(a, o.pad.width * f.LOBBY_STAND_SHARE / 2)).multiplyScalar(.5)
          , c = (r[1] ?? r[0]).width * f.LOBBY_STAND_SHARE;
        return {
            at: s,
            aim: s.clone().add(new l.Vector3(0,c * (m.LOBBY_STAND_TOP + .12),0))
        }
    }
    let D = new l.Vector3(0,1,0);
    function V(e, t) {
        1e-12 > t.distanceToSquared(e.position) || (e.up.copy(D),
        e.lookAt(t),
        e.updateMatrixWorld())
    }
    function L(e, t, r, a) {
        e.clearViewOffset(),
        e.updateProjectionMatrix(),
        e.updateMatrixWorld();
        let n = (r.point.clone().project(e).x + 1) * t.width / 2
          , i = (1 - a.point.clone().project(e).y) * t.height / 2;
        e.setViewOffset(t.width, t.height, n - r.px, i - a.px, t.width, t.height),
        e.updateMatrixWorld()
    }
    function C(e, t, r, a=[]) {
        let n = t.clone().project(e)
          , i = Math.min(e.fov, 32)
          , o = 1.2 * Math.tan(l.MathUtils.degToRad(e.fov / 2)) / Math.tan(l.MathUtils.degToRad(i / 2));
        e.position.sub(t).multiplyScalar(o).add(t),
        e.fov = i,
        L(e, r, {
            point: t,
            px: (n.x + 1) * r.width / 2
        }, {
            point: t,
            px: (1 - n.y) * r.height / 2
        }),
        j(e, r, a)
    }
    function j(e, t, r) {
        if (!r.length)
            return;
        let a = r.map(t => t.clone().project(e).x)
          , n = Math.min(...a)
          , i = Math.max(...a)
          , o = n < -.94 ? -.94 - n : i > .94 ? .94 - i : 0;
        if (o) {
            let r = e.view;
            e.setViewOffset(r.fullWidth, r.fullHeight, r.offsetX - o * t.width / 2, r.offsetY, r.width, r.height)
        }
    }
    function N(e, t, r, a, n=[]) {
        let i = a.left * t.width + 16
          , o = (a.left + a.width) * t.width - 16
          , s = a.top * t.height + 16
          , c = (a.top + a.height) * t.height - 16;
        if (!r.length || o <= i || c <= s)
            return;
        let u = e.position.clone()
          , d = e.getWorldDirection(new l.Vector3).negate()
          , h = {
            ...e.view
        }
          , m = a => {
            e.position.copy(u).addScaledVector(d, a),
            e.setViewOffset(h.fullWidth, h.fullHeight, h.offsetX, h.offsetY, h.width, h.height),
            e.updateMatrixWorld();
            let i = r => {
                let a = r.clone().project(e);
                return {
                    x: (a.x + 1) * t.width / 2,
                    y: (1 - a.y) * t.height / 2
                }
            }
              , o = r.map(e => {
                let t = i(e);
                return [t.x, t.x, t.y, t.y]
            }
            );
            for (let e of n) {
                let t = i(e.at);
                o.push([t.x - e.width / 2, t.x + e.width / 2, t.y, t.y + e.height])
            }
            return {
                minX: Math.min(...o.map(e => e[0])),
                maxX: Math.max(...o.map(e => e[1])),
                minY: Math.min(...o.map(e => e[2])),
                maxY: Math.max(...o.map(e => e[3]))
            }
        }
          , p = e => e.maxX - e.minX <= o - i && e.maxY - e.minY <= c - s
          , f = m(0);
        if (!p(f)) {
            let e = 0
              , t = 1;
            for (; !p(m(t)) && t < 1e9; )
                t *= 2;
            for (let r = 0; r < 40; r++) {
                let r = (e + t) / 2;
                p(m(r)) ? t = r : e = r
            }
            f = m(t)
        }
        let y = Math.max(i - f.minX, Math.min(0, o - f.maxX))
          , x = Math.max(s - f.minY, Math.min(0, c - f.maxY));
        e.setViewOffset(h.fullWidth, h.fullHeight, h.offsetX - y, h.offsetY - x, h.width, h.height)
    }
    e.s(["aimStandLens", 0, V, "fitStandRegion", 0, N, "flattenStandPerspective", 0, C, "holdStandAnchor", 0, L, "panStandPerspective", 0, j], 981229);
    let W = {
        back: 2.4,
        height: 1.05,
        aim: .8,
        fov: 44
    };
    function I(e, t) {
        let r = t ?? e.spawns.find(e => "arches" === e.id) ?? e.spawns[0]
          , a = new l.Vector3(...r?.position ?? [0, .2, 0]);
        t || (a.y = Math.max(0, a.y - .2));
        let n = r?.yaw ?? 0;
        return {
            base: a,
            yaw: n,
            forward: new l.Vector3(-Math.sin(n),0,-Math.cos(n)),
            lens: t?.lens ?? W
        }
    }
    function F(e, {base: t, forward: r, lens: a}, n) {
        e.position.copy(t).addScaledVector(r, -a.back).add(new l.Vector3(0,a.height,0)),
        e.lookAt(t.clone().add(new l.Vector3(0,a.aim,0))),
        e.fov = a.fov,
        e.aspect = n,
        e.updateProjectionMatrix(),
        e.updateMatrixWorld()
    }
    function k(e, t, r, a) {
        let n = new l.Raycaster
          , i = new l.Plane(new l.Vector3(0,1,0),-t.y)
          , o = (t, r) => {
            n.setFromCamera(new l.Vector2(2 * t - 1,1 - 2 * r), e);
            let a = new l.Vector3;
            return n.ray.intersectPlane(i, a),
            a
        }
          , s = r.width < 700 ? f.COMPACT_HERO : (0,
        f.heroSlot)( (t, r, a) => {
            let n = o(t, r)
              , i = o(t - a / 2, r).distanceTo(o(t + a / 2, r)) * f.LOBBY_STAND_SHARE;
            return (1 - n.addScaledVector(e.position.clone().sub(n).setY(0).normalize(), i / 2).project(e).y) / 2
        }
        , a, 10 / Math.max(1, r.height))
          , c = o(s.x, s.y);
        return {
            center: c,
            width: o(s.x - s.width / 2, s.y).distanceTo(o(s.x + s.width / 2, s.y)),
            right: new l.Vector3().setFromMatrixColumn(e.matrixWorld, 0).setY(0).normalize()
        }
    }
    function z(e, t, r, a, n=!0) {
        e.clearViewOffset(),
        F(e, t, r.width / Math.max(1, r.height));
        let i = k(e, t.base, r, a)
          , o = i.width * f.LOBBY_STAND_SHARE
          , s = M(e, i.center, m.LOBBY_STAND_TOP * o, o);
        w(e, s, 0);
        let c = e.quaternion.clone()
          , u = -.4
          , d = .9
          , p = i;
        for (let n = 0; n < 24; n++) {
            let n = (u + d) / 2;
            e.quaternion.copy(c).multiply(s.turn.setFromAxisAngle(new l.Vector3(1,0,0), -n)),
            e.updateMatrixWorld();
            let i = (p = k(e, t.base, r, a)).center.clone().add(new l.Vector3(0,p.width * f.LOBBY_STAND_SHARE * (m.LOBBY_STAND_TOP + .23),0))
              , o = e.position.clone().sub(i);
            Math.atan2(o.y, Math.hypot(o.x, o.z)) < s.neutralElevation ? u = n : d = n
        }
        let S = p.center.clone().project(e);
        e.quaternion.copy(s.quaternion),
        e.updateMatrixWorld();
        let v = p.center.clone().project(e);
        e.setViewOffset(r.width, r.height, (v.x - S.x) * r.width / 2, (S.y - v.y) * r.height / 2, r.width, r.height),
        p = k(e, t.base, r, a);
        let b = m.LOBBY_STAND_TOP * f.LOBBY_STAND_SHARE
          , A = new l.Vector3(0,1,0)
          , O = e => y.DRONE_IDS.flatMap(r => {
            let a = (0,
            h.lobbyCraftFraming)(r, g(1, r, e), b, h.STAND_SIZE_COMPRESSION);
            return [.09, .15].flatMap(e => (0,
            x.boxCorners)((0,
            x.rawHeroBounds)(r)).map(r => (r.multiplyScalar(a.scale).applyAxisAngle(A, t.yaw + Math.PI + h.LOBBY_CRAFT_TURN),
            r.y += a.restY + f.LOBBY_STAND_SHARE * e,
            r)))
        }
        )
          , _ = {
            peer: O(!1),
            hero: O(!0)
        }
          , R = p.center.clone().add(new l.Vector3(0,p.width * f.LOBBY_STAND_SHARE * (m.LOBBY_STAND_TOP + .23),0))
          , P = e.clone();
        C(P, R, r);
        let T = new l.Vector3
          , B = (p.center.clone().project(P).x + 1) * r.width / 2
          , D = (1 - p.center.clone().project(P).y) * r.height / 2
          , j = e => {
            let t = {
                at: p.center,
                width: e
            }
              , a = Y(P, r, t, f.STAGE_PADS);
            for (let e = 0; e < 3; e++)
                V(P, E(P, r, a).aim),
                L(P, r, {
                    point: p.center,
                    px: B
                }, {
                    point: p.center,
                    px: D
                }),
                a = Y(P, r, t, f.STAGE_PADS);
            return a
        }
          , N = e => j(e).every( (e, t) => (0 === t ? _.hero : _.peer).every(t => {
            T.copy(t).multiplyScalar(e.width).add(e.at).project(P);
            let r = (T.x + 1) / 2
              , n = (1 - T.y) / 2;
            return T.z < 1 && r >= .02 && r <= .98 && n >= .14 && n <= a
        }
        ))
          , W = p.width;
        if (!N(W)) {
            let e = 0
              , t = W;
            for (let r = 0; r < 22; r++) {
                let r = (e + t) / 2;
                N(r) ? e = r : t = r
            }
            W = e
        }
        let I = j(W)
          , H = e.clone();
        return n && e.copy(P),
        {
            positions: I.map(e => e.at),
            widths: I.map(e => e.width),
            center: p.center,
            right: p.right,
            worldCamera: H,
            viewOffset: {
                ...e.view
            }
        }
    }
    e.s(["gearWorldFraming", 0, function(e, r, a, n) {
        let i = new l.Raycaster
          , o = (a.left - r.left + a.width / 2) / r.width
          , s = (a.top - r.top + .64 * a.height) / r.height;
        i.setFromCamera(new l.Vector2(2 * o - 1,1 - 2 * s), e);
        let c = i.ray.intersectPlane(new l.Plane(new l.Vector3(0,1,0),-n.y), new l.Vector3) ?? n.clone()
          , u = function() {
            if (t)
                return t;
            let e = (0,
            h.lobbyCraftFraming)("freestyle", 1, 0).scale
              , r = []
              , a = (e, t, a) => {
                for (let n = 0; n < 32; n++) {
                    let i = n * Math.PI / 16;
                    for (let n of [t, a])
                        r.push(new l.Vector3(Math.cos(i) * e,n,Math.sin(i) * e))
                }
            }
            ;
            for (let t of (a(.45, 0, .9 * m.LOBBY_STAND_TOP),
            y.DRONE_IDS)) {
                let r = (0,
                x.rawHeroBounds)(t)
                  , n = Math.hypot(Math.max(Math.abs(r.min.x), Math.abs(r.max.x)), Math.max(Math.abs(r.min.z), Math.abs(r.max.z))) * e
                  , i = .9 * m.LOBBY_STAND_TOP + .081
                  , o = .9 * m.LOBBY_STAND_TOP + (r.max.y - r.min.y) * e + .12150000000000001 + .06 * n;
                a(n, i, o)
            }
            return t = r
        }()
          , d = new l.Vector3
          , p = .055 * a.width
          , f = .06 * a.height
          , M = t => u.every(n => {
            d.copy(n).multiplyScalar(t).add(c).project(e);
            let i = r.left + (d.x + 1) * r.width / 2
              , o = r.top + (1 - d.y) * r.height / 2;
            return d.z < 1 && i >= a.left + p && i <= a.left + a.width - p && o >= a.top + f && o <= a.top + a.height - f
        }
        )
          , w = 0
          , g = .25;
        for (; M(g) && g < 100; )
            g *= 2;
        for (let e = 0; e < 22; e++) {
            let e = (w + g) / 2;
            M(e) ? w = e : g = e
        }
        let S = w
          , v = .9 * S;
        return {
            position: c,
            referenceWidth: S,
            standWidth: v,
            deckY: m.LOBBY_STAND_TOP * v
        }
    }
    , "homeWorldFraming", 0, z, "lobbyStage", 0, I, "placeGearWorldCamera", 0, function(e, t, r, a) {
        let n = I(t, r);
        return e.clearViewOffset(),
        F(e, n, a),
        n
    }
    ], 332628);
    let H = (e, t, r) => Math.min(e * (0 === t ? .175 : "selection" === r ? .13 : .085), 0 === t ? 290 : "selection" === r ? 200 : 150)
      , X = [.5, .66, .25]
      , U = [.5, .47, .26]
      , G = [.5, .74, .4]
      , $ = (0,
    s.create)( () => ({
        display: null
    }));
    function q({entries: e, layout: t, bounds: s, clear: M, onReady: w, world: S, view: v}) {
        let {size: b, scene: A} = (0,
        i.useThree)()
          , O = (0,
        a.useMemo)( () => new l.PerspectiveCamera(44,1,.015,2e3), [])
          , _ = e.map(e => e.drone).join(" ")
          , R = (0,
        a.useMemo)( () => (function(e, t, r, a, n, i, o, s) {
            let c = "number" == typeof i ? i : i.length
              , u = I(t, r);
            z(e, u, a, "selection" === n ? .54 : .76, !1);
            let d = new l.Raycaster
              , p = new l.Plane(new l.Vector3(0,1,0),-u.base.y)
              , M = o ?? ("results" === n ? {
                left: 0,
                top: 0,
                width: 1 - Math.min(.38, 900 / a.width),
                height: 1
            } : {
                left: 0,
                top: 0,
                width: 1,
                height: 1
            })
              , w = (t, r) => (o && (t = o.left + t * o.width,
            r = o.top + r * o.height),
            d.setFromCamera(new l.Vector2(2 * t - 1,1 - 2 * r), e),
            d.ray.intersectPlane(p, new l.Vector3))
              , S = o ? 1 === c ? [.5, .63, .42] : G : "selection" === n ? U : "solo" === n ? [.5, .56, .28] : X
              , v = ([e,t,r]) => ({
                at: w(e, t),
                width: w(e - r / 2, t).distanceTo(w(e + r / 2, t))
            })
              , b = v(S)
              , A = b.at.clone().add(new l.Vector3(0,b.width * f.LOBBY_STAND_SHARE * (m.LOBBY_STAND_TOP + .23),0))
              , O = e.clone();
            C(e, A, a);
            let _ = v(S)
              , R = (1 - _.at.clone().project(e).y) * a.height / 2
              , P = () => {
                let t = Y(e, a, _, c);
                for (let r = 0; r < 3; r++) {
                    let r = E(e, a, t);
                    V(e, r.aim),
                    L(e, a, {
                        point: r.at,
                        px: (M.left + M.width / 2) * a.width
                    }, {
                        point: _.at,
                        px: R
                    }),
                    t = Y(e, a, _, c)
                }
                return t
            }
              , T = t => {
                let r = t.flatMap( (e, t) => ("number" == typeof i ? y.DRONE_IDS : [i[t]]).flatMap(r => {
                    let a = e.width * f.LOBBY_STAND_SHARE
                      , n = (0,
                    h.lobbyCraftFraming)(r, g(e.width, r, 0 === t && c > 1), a * m.LOBBY_STAND_TOP, h.STAND_SIZE_COMPRESSION);
                    return (0,
                    x.boxCorners)((0,
                    x.rawHeroBounds)(r).clone().expandByScalar(.04 * e.width / n.scale)).map(t => (t.multiplyScalar(n.scale).applyAxisAngle(new l.Vector3(0,1,0), u.yaw + Math.PI + h.LOBBY_CRAFT_TURN),
                    t.y += n.restY + .12 * a,
                    t.add(e.at)))
                }
                ))
                  , o = t.flatMap(e => {
                    let t = e.width * f.LOBBY_STAND_SHARE;
                    return (0,
                    x.boxCorners)(new l.Box3(new l.Vector3(-t / 2,0,-t / 2),new l.Vector3(t / 2,t * m.LOBBY_STAND_TOP,t / 2))).map(t => t.add(e.at))
                }
                )
                  , s = t => {
                    let r = t.clone().project(e);
                    return {
                        x: (r.x + 1) * a.width / 2,
                        y: (1 - r.y) * a.height / 2
                    }
                }
                  , d = r.length / t.length
                  , p = t.flatMap( (e, t) => {
                    let a = r.slice(t * d, (t + 1) * d);
                    return Array.from({
                        length: a.length / 8
                    }, (e, t) => {
                        let r, n, i;
                        return r = [...a.slice(8 * t, 8 * t + 8).map(s)].sort( (e, t) => e.x - t.x || e.y - t.y),
                        n = (e, t, r) => (t.x - e.x) * (r.y - e.y) - (t.y - e.y) * (r.x - e.x),
                        [...(i = e => {
                            let t = [];
                            for (let r of e) {
                                for (; t.length >= 2 && 0 >= n(t[t.length - 2], t[t.length - 1], r); )
                                    t.pop();
                                t.push(r)
                            }
                            return t.pop(),
                            t
                        }
                        )(r), ...i(r.reverse())]
                    }
                    )
                }
                )
                  , M = t.map( (t, r) => ({
                    pad: t,
                    width: H(a.width, r, n),
                    height: 96,
                    foot: t.at.clone().add(e.position.clone().sub(t.at).setY(0).normalize().multiplyScalar(t.width * f.LOBBY_STAND_SHARE * .55))
                }))
                  , w = (e, t) => {
                    let r = s(e.foot);
                    return !p.some(a => {
                        var n, i, o;
                        return function(e, t, r=0) {
                            if (e.length < 2 || t.length < 2)
                                return !1;
                            for (let a of [e, t])
                                for (let n = 0; n < a.length; n++) {
                                    let i = a[n]
                                      , o = a[(n + 1) % a.length]
                                      , l = {
                                        x: o.y - i.y,
                                        y: i.x - o.x
                                    }
                                      , s = Math.hypot(l.x, l.y) || 1
                                      , c = e => {
                                        let t = e.map(e => (e.x * l.x + e.y * l.y) / s);
                                        return [Math.min(...t), Math.max(...t)]
                                    }
                                      , [u,d] = c(e)
                                      , [h,m] = c(t);
                                    if (d + r <= h || m + r <= u)
                                        return !1
                                }
                            return !0
                        }((n = {
                            x: r.x,
                            y: r.y + t
                        },
                        i = e.width,
                        o = e.height,
                        [{
                            x: n.x - i / 2,
                            y: n.y
                        }, {
                            x: n.x + i / 2,
                            y: n.y
                        }, {
                            x: n.x + i / 2,
                            y: n.y + o
                        }, {
                            x: n.x - i / 2,
                            y: n.y + o
                        }]), a, 4)
                    }
                    )
                }
                  , S = M.map(e => {
                    if (w(e, 0))
                        return 0;
                    let t = 0
                      , r = 300;
                    for (let a = 0; a < 12; a++) {
                        let a = (t + r) / 2;
                        w(e, a) ? r = a : t = a
                    }
                    return r
                }
                )
                  , v = Math.max(0, ...S.slice(1));
                return {
                    fleet: r,
                    stands: o,
                    labels: M.map( (t, r) => {
                        let a = 0 === r ? S[0] : v
                          , n = e.position.clone().sub(t.pad.at).setY(0).normalize()
                          , i = s(t.foot).y
                          , o = t.foot;
                        if (a > 0) {
                            let e = 0
                              , r = 4 * t.pad.width;
                            for (let o = 0; o < 24; o++) {
                                let o = (e + r) / 2;
                                s(t.foot.clone().addScaledVector(n, o)).y - i < a ? e = o : r = o
                            }
                            o = t.foot.clone().addScaledVector(n, r)
                        }
                        return {
                            at: o,
                            width: t.width,
                            height: t.height
                        }
                    }
                    )
                }
            }
              , B = P()
              , D = T(B);
            j(e, a, D.fleet);
            let W = e.clone();
            for (let t = 0; t < 4; t++) {
                let t = e.position.clone();
                if (N(e, a, [...D.fleet, ...D.stands], M, D.labels),
                D = T(B = P()),
                1e-6 > e.position.distanceTo(t))
                    break
            }
            N(e, a, [...D.fleet, ...D.stands], M, D.labels),
            s && function(e, t, r, a, n) {
                if (!n.obstacles.length)
                    return;
                let i = r => {
                    let a = r.clone().project(e);
                    return {
                        x: (a.x + 1) * t.width / 2,
                        y: (1 - a.y) * t.height / 2
                    }
                }
                  , o = (e, t) => Array.from({
                    length: e.length / t
                }, (r, a) => {
                    let n;
                    return {
                        left: Math.min(...(n = e.slice(a * t, (a + 1) * t).map(i)).map(e => e.x)),
                        right: Math.max(...n.map(e => e.x)),
                        top: Math.min(...n.map(e => e.y)),
                        bottom: Math.max(...n.map(e => e.y))
                    }
                }
                )
                  , l = [...o(r.fleet, 8), ...o(r.stands, 8), ...r.labels.map(e => {
                    let t = i(e.at);
                    return {
                        left: t.x - e.width / 2,
                        right: t.x + e.width / 2,
                        top: t.y,
                        bottom: t.y + e.height
                    }
                }
                )]
                  , s = (e, t) => l.some(r => n.obstacles.some(a => r.left + e < a.right + 4 && r.right + e > a.left - 4 && r.top - t < a.bottom + 4 && r.bottom - t > a.top - 4));
                if (!s(0, 0))
                    return;
                let c = n.top * t.height
                  , u = (a.left + a.width) * t.width - 16
                  , d = Math.max(0, Math.min(...l.map(e => e.top)) - c)
                  , h = Math.max(0, u - Math.max(...l.map(e => e.right)))
                  , m = null;
                for (let e = 0; e <= d && (!m || !(e >= m.dx + m.dy)); e += 2)
                    for (let t = 0; t <= h && (!m || !(t + e >= m.dx + m.dy)); t += 2)
                        if (!s(t, e)) {
                            m = {
                                dx: t,
                                dy: e
                            };
                            break
                        }
                let p = m ?? {
                    dx: 0,
                    dy: d
                }
                  , f = e.view;
                e.setViewOffset(f.fullWidth, f.fullHeight, f.offsetX - p.dx, f.offsetY + p.dy, f.width, f.height),
                e.updateMatrixWorld()
            }(e, a, T(B), M, s);
            let {fleet: F, stands: k, labels: $} = T(B);
            return {
                stage: u,
                pads: B,
                worldCamera: O,
                flatCamera: W,
                fleet: F,
                stands: k,
                labels: $,
                region: M
            }
        }
        )(O, S, v, b, t, _.split(" "), s, M), [O, S, v, b, t, s, M, _])
          , P = (0,
        a.useMemo)( () => ({
            departAt: null
        }), [])
          , T = (0,
        a.useMemo)( () => {
            let e = new l.DirectionalLight("#fff3e2",1.15)
              , t = new l.DirectionalLight("#e4efff",2.4);
            for (let r of [e, t])
                r.layers.set(u.LOBBY_AIRCRAFT_LAYER);
            return {
                key: e,
                rim: t
            }
        }
        , []);
        return (0,
        a.useLayoutEffect)( () => {
            for (let e of (T.key.position.copy(O.position).add(new l.Vector3(-2.4,2.6,0)),
            T.rim.position.copy(R.stage.base).addScaledVector(R.stage.forward, 3.2).add(new l.Vector3(1.4,2.2,0)),
            [T.key, T.rim]))
                e.target.position.copy(R.pads[0].at),
                e.target.updateMatrixWorld()
        }
        , [O, R, T]),
        (0,
        a.useEffect)( () => () => {
            T.key.dispose(),
            T.rim.dispose()
        }
        , [T]),
        (0,
        n.createPortal)((0,
        r.jsx)(r.Fragment, {
            children: (0,
            r.jsxs)(c.LobbyComposite, {
                cameraOverride: O,
                worldCamera: R.worldCamera,
                children: [w && (0,
                r.jsx)(p.SceneReady, {
                    onReady: w
                }), (0,
                r.jsx)("primitive", {
                    object: T.key
                }), (0,
                r.jsx)("primitive", {
                    object: T.rim
                }), e.slice(0, R.pads.length).map( (a, n) => {
                    let i = R.pads[n]
                      , l = i.width * f.LOBBY_STAND_SHARE
                      , s = l * m.LOBBY_STAND_TOP
                      , c = R.labels[n].at;
                    return (0,
                    r.jsxs)("group", {
                        position: i.at,
                        children: [(0,
                        r.jsx)(m.LobbyStand, {
                            width: l,
                            yaw: R.stage.yaw,
                            state: a.self ? "you" : "pilot"
                        }), (0,
                        r.jsx)(d.LobbyCraft, {
                            archetype: a.drone,
                            skin: a.skin,
                            skinOverride: a.skinOverride,
                            ...(0,
                            h.lobbyCraftFraming)(a.drone, g(i.width, a.drone, 0 === n && e.length > 1), s, h.STAND_SIZE_COMPRESSION),
                            deckY: s,
                            yaw: R.stage.yaw + Math.PI + h.LOBBY_CRAFT_TURN,
                            footprint: l,
                            hover: !0,
                            delayMs: 0,
                            launch: P,
                            voice: 0
                        }), a.tag && (0,
                        r.jsx)(o.Html, {
                            position: [c.x - i.at.x, 0, c.z - i.at.z],
                            zIndexRange: [8, 0],
                            pointerEvents: "none",
                            children: (0,
                            r.jsx)("div", {
                                className: "fd-activity-tag fdk-screen",
                                "data-team": a.team,
                                "data-hero": 0 === n || void 0,
                                style: {
                                    width: `${H(b.width, n, t)}px`,
                                    transform: "translateX(-50%)"
                                },
                                children: a.tag
                            })
                        })]
                    }, a.key)
                }
                )]
            })
        }), A, {
            camera: O
        })
    }
    e.s(["ActivityDisplayStage", 0, function({world: e, view: t}) {
        let a = $(e => e.display);
        return a ? (0,
        r.jsx)(q, {
            ...a,
            world: e,
            view: t
        }) : null
    }
    , "ActivityStage", 0, q, "useActivityDisplay", 0, $], 869488)
}
, 343627, e => {
    "use strict";
    var t = e.i(579832)
      , r = e.i(13050)
      , a = e.i(396091)
      , n = e.i(189004);
    let i = {
        points: [[0, 0], [7, .06], [230, .34], [280, .4], [340, .8]]
    }
      , o = [];
    e.s(["playHomeDroneAudio", 0, function(e, l=1, s={}) {
        let c = () => {}
        ;
        if (document.hidden || !navigator.userActivation?.hasBeenActive || !Number.isFinite(l) || l <= 0)
            return c;
        let u = (0,
        t.getDroneAudio)();
        if (!u)
            return c;
        (0,
        r.ensureAudioMix)();
        let d = u.context
          , h = "arrival" === e ? a.ARRIVAL_MS : a.DEPARTURE_MS
          , m = Math.max(0, s.elapsedMs ?? 0)
          , p = performance.now()
          , f = Math.max(0, s.fromRotorSpeed ?? 0)
          , y = Math.min(1, l)
          , x = !1
          , M = !1
          , w = 0
          , g = null
          , S = []
          , v = () => {
            if (M)
                return;
            M = !0,
            cancelAnimationFrame(w),
            document.removeEventListener("visibilitychange", A);
            let e = g;
            g = null;
            let t = o.indexOf(v);
            t >= 0 && o.splice(t, 1),
            e && (e.setLevel(0),
            setTimeout( () => e.release(), 180))
        }
          , b = () => {
            if (!x && !M) {
                for (let e of (x = !0,
                S))
                    e.stop(.003, .016);
                v()
            }
        }
          , A = () => {
            document.hidden && b()
        }
          , O = () => {
            if (M || !g)
                return;
            let t = m + performance.now() - p;
            if (t >= h)
                return void v();
            let {share: r, inflow: o} = function(e, t, r=0) {
                let o = {
                    ...a.REST_POSE,
                    rotorSpeed: r,
                    blur: Math.min(1, r / 160)
                }
                  , l = "arrival" === e ? (0,
                a.sampleArrival)(t, 700) : (0,
                a.sampleDeparture)(t, o, -700)
                  , s = (0,
                n.evaluateCurve)(i, l.rotorSpeed);
                return {
                    share: s,
                    inflow: "arrival" === e ? -6 * l.wash : 12 * Math.max(0, s - .34)
                }
            }(e, t, f);
            g.update({
                motors: [r, r, r, r],
                armed: r > 0,
                doppler: 1,
                inflow: o
            }),
            w = requestAnimationFrame(O)
        }
          , _ = () => {
            if (x || document.hidden || "running" !== d.state)
                return;
            let t = m + performance.now() - p;
            if (!((h - t) / 1e3 < .02)) {
                for (document.addEventListener("visibilitychange", A); o.length >= 2; )
                    o[0]();
                if (o.push(v),
                (g = u.createMotorVoice(s.craft ?? "freestyle", "interface")).setPerspective(2, 0),
                g.setLevel(.044 * y),
                O(),
                "arrival" === e && t <= a.TOUCHDOWN_MS) {
                    let e = u.play("menu.touchdown", {
                        level: y,
                        delay: (a.TOUCHDOWN_MS - t) / 1e3
                    });
                    e && S.push(e)
                }
            }
        }
        ;
        return "running" === d.state ? _() : (u.resume(),
        d.resume().then(_).catch(c)),
        b
    }
    ], 343627)
}
, 184866, e => {
    "use strict";
    let t;
    var r = e.i(190072)
      , a = e.i(689330)
      , n = e.i(353198);
    let i = new r.Vector3(.21,.22,-.39)
      , o = i.length()
      , l = [.45, Math.PI / 2.1]
      , s = new Map
      , c = new Map
      , u = new Map;
    function d(e) {
        let t = s.get(e);
        if (t)
            return t;
        let n = (0,
        a.buildDroneGeometry)(e)
          , i = new r.Box3;
        for (let e of Object.values(n.parts))
            e.boundingBox || e.computeBoundingBox(),
            i.union(e.boundingBox);
        for (let[e,t,a] of n.motors)
            i.expandByPoint(new r.Vector3(e - n.radius,t - .005,a - n.radius)),
            i.expandByPoint(new r.Vector3(e + n.radius,t + .005,a + n.radius));
        return s.set(e, i),
        i
    }
    function h(e) {
        let t = d(e).getSize(new r.Vector3)
          , a = d("long-range").getSize(new r.Vector3);
        return (Math.max(a.x, a.z) / Math.max(t.x, t.z)) ** .7 * ({
            whoop: 1.05,
            cinewhoop: .96,
            freestyle: .94,
            racer: .94,
            "long-range": 1
        })[e]
    }
    function m(e) {
        let t = d(e).clone()
          , r = h(e);
        return t.min.multiplyScalar(r),
        t.max.multiplyScalar(r),
        t
    }
    function p(e, t=new r.Vector3) {
        return m(e).getCenter(t)
    }
    function f(e) {
        return [e.min.x, e.max.x].flatMap(t => [e.min.y, e.max.y].flatMap(a => [e.min.z, e.max.z].map(e => new r.Vector3(t,a,e))))
    }
    function y(e, t, r) {
        let a = p(e);
        x(e, t, e => r(e.sub(a)))
    }
    function x(e, t, n) {
        let i = (0,
        a.buildDroneGeometry)(e)
          , o = h(e)
          , l = new r.Vector3
          , s = () => n(l.multiplyScalar(o));
        for (let e of Object.values(i.parts)) {
            let r = e.getAttribute("position");
            for (let e = 0; e < r.count; e += t)
                l.fromBufferAttribute(r, e),
                s()
        }
        let c = 1 === t ? 64 : 24;
        for (let[e,t,r] of i.motors)
            for (let a = 0; a < c; a++) {
                let n = 2 * a * Math.PI / c;
                l.set(e + Math.cos(n) * i.radius, t, r + Math.sin(n) * i.radius),
                s()
            }
    }
    function M(e) {
        let t = new r.PerspectiveCamera;
        return t.position.copy(e),
        t.lookAt(0, 0, 0),
        t.updateMatrixWorld(),
        t.matrixWorldInverse
    }
    function w(e) {
        let t = c.get(e);
        if (t)
            return t;
        let a = M(i)
          , n = new r.Vector3
          , o = {
            minX: 1 / 0,
            maxX: -1 / 0,
            minY: 1 / 0,
            maxY: -1 / 0
        };
        return y(e, 1, e => {
            n.copy(e).applyMatrix4(a);
            let t = -(n.x / n.z)
              , r = -(n.y / n.z);
            o.minX = Math.min(o.minX, t),
            o.maxX = Math.max(o.maxX, t),
            o.minY = Math.min(o.minY, r),
            o.maxY = Math.max(o.maxY, r)
        }
        ),
        c.set(e, o),
        o
    }
    function g(e, t, r, a, n, i, l=o) {
        let {width: s, height: c} = t
          , u = c / 2 / a;
        return e.fov = 2 * Math.atan(a) * 180 / Math.PI,
        e.aspect = s / c,
        e.setViewOffset(s, c, -t.left + n * u, -t.top - i * u, r.width, r.height),
        2 * l * a / c
    }
    function S(e, t=new r.Vector3) {
        return t.set(e.position[0], -.052 * (1 - e.scale), e.position[1])
    }
    function v(e) {
        let t = m(e.archetype);
        return t.min.multiplyScalar(e.scale),
        t.max.multiplyScalar(e.scale),
        t
    }
    function b(e) {
        let t = new r.Box3
          , a = new r.Vector3;
        for (let r of e)
            t.union(v(r).translate(S(r, a)));
        return t
    }
    function A(e, t=new r.Vector3) {
        return b(e).getCenter(t)
    }
    function O(e) {
        let t = b(e).getSize(new r.Vector3)
          , a = m("long-range").getSize(new r.Vector3);
        return i.clone().multiplyScalar(Math.max(1, Math.hypot(t.x, t.z) / Math.hypot(a.x, a.z)))
    }
    function _(e) {
        let t = M(O(e))
          , a = new r.Vector3
          , n = new r.Vector3
          , i = A(e)
          , o = {
            minX: 1 / 0,
            maxX: -1 / 0,
            minY: 1 / 0,
            maxY: -1 / 0
        };
        for (let r of e)
            S(r, n),
            x(r.archetype, 2, e => {
                a.copy(e).multiplyScalar(r.scale).add(n).sub(i).applyMatrix4(t);
                let l = -(a.x / a.z)
                  , s = -(a.y / a.z);
                o.minX = Math.min(o.minX, l),
                o.maxX = Math.max(o.maxX, l),
                o.minY = Math.min(o.minY, s),
                o.maxY = Math.max(o.maxY, s)
            }
            );
        return o
    }
    e.s(["HERO_GROUND", 0, -.052, "ORBIT_POLAR", 0, l, "boxCorners", 0, f, "fitFormationCamera", 0, function(e, t, r, a, n=_(a)) {
        let {width: i, height: o} = t
          , l = Math.max((n.maxY - n.minY) / 1.6, (n.maxX - n.minX) * o / (1.88 * i))
          , s = .09999999999999998 * l;
        return g(e, t, r, l, (n.minX + n.maxX) / 2, (n.minY + n.maxY) / 2 - s, O(a).length())
    }
    , "fitHeroCamera", 0, function(e, i, s, c, d) {
        let {width: h, height: m} = i, p, f = 0, x = 0;
        if (void 0 !== d) {
            let e, t, n, i, s, f = (e = function(e) {
                let t = u.get(e);
                if (t)
                    return t;
                let n = Array.from({
                    length: 13
                }, (e, t) => {
                    let a = l[0] + (l[1] - l[0]) * t / 12;
                    return Array.from({
                        length: 24
                    }, (e, t) => M(new r.Vector3().setFromSphericalCoords(o, a, t * Math.PI / 12)).clone())
                }
                )
                  , i = n.map( () => ({
                    x: 0,
                    minY: 0,
                    maxY: 0
                }))
                  , s = new r.Vector3
                  , c = Object.values((0,
                a.buildDroneGeometry)(e).parts).reduce( (e, t) => e + t.getAttribute("position").count, 0);
                return y(e, Math.max(1, Math.ceil(c / 1500)), e => {
                    n.forEach( (t, r) => {
                        for (let a of t) {
                            s.copy(e).applyMatrix4(a);
                            let t = -(s.y / s.z);
                            i[r].x = Math.max(i[r].x, Math.abs(-(s.x / s.z))),
                            i[r].minY = Math.min(i[r].minY, t),
                            i[r].maxY = Math.max(i[r].maxY, t)
                        }
                    }
                    )
                }
                ),
                u.set(e, i),
                i
            }(c),
            n = Math.min(11, Math.floor(t = 12 * Math.max(0, Math.min(1, (d - l[0]) / (l[1] - l[0]))))),
            i = t - n,
            {
                x: (s = t => e[n][t] + (e[n + 1][t] - e[n][t]) * i)("x"),
                minY: s("minY"),
                maxY: s("maxY")
            });
            p = Math.max((f.maxY - f.minY) / 1.8, f.x * m / (.92 * h)),
            x = (f.minY + f.maxY) / 2
        } else {
            let e = function() {
                if (t)
                    return t;
                for (let e of (t = {
                    x: 0,
                    y: 0
                },
                n.DRONE_IDS)) {
                    let r = w(e);
                    t.x = Math.max(t.x, r.maxX - r.minX),
                    t.y = Math.max(t.y, r.maxY - r.minY)
                }
                return t
            }()
              , r = w(c);
            p = Math.max(e.y / 1.8, e.x * m / (1.92 * h)),
            f = (r.minX + r.maxX) / 2,
            x = (r.minY + r.maxY) / 2
        }
        return g(e, i, s, p, f, x)
    }
    , "formationBounds", 0, b, "formationCenter", 0, A, "formationExtents", 0, _, "heroCenter", 0, p, "heroExitOffset", 0, function(e, t, a, n, i=0, o) {
        let l = Math.max(...f(t).map(e => e.length()))
          , s = new r.Box3(new r.Vector3(-l,-l,-l),new r.Vector3(l,l,l))
          , c = new r.Vector3(0,1,0).applyQuaternion(e.quaternion)
          , u = 0;
        for (let t of f(s)) {
            t.applyQuaternion(e.quaternion),
            o && t.add(o);
            let r = (1 - t.clone().project(e).y) * a / 2;
            u = Math.min(u, -(r - i + 24) / Math.max(.01, r - (1 - t.clone().addScaledVector(c, n).project(e).y) * a / 2))
        }
        return u
    }
    , "heroModelScale", 0, h, "orbitPolar", 0, function(e, t) {
        let r = e.position.clone().sub(p(t));
        return Math.acos(Math.max(-1, Math.min(1, r.y / r.length())))
    }
    , "placeFormationCamera", 0, function(e, t) {
        let r = A(t);
        e.position.copy(r).add(O(t)),
        e.lookAt(r),
        e.updateMatrixWorld()
    }
    , "placeStudioCamera", 0, function(e, t) {
        let r = p(t);
        e.position.copy(r).add(i),
        e.lookAt(r),
        e.updateMatrixWorld()
    }
    , "rawHeroBounds", 0, d, "slotBounds", 0, v, "slotOrigin", 0, S, "studioGroundAxes", 0, function() {
        let e = new r.PerspectiveCamera;
        e.position.copy(i),
        e.lookAt(0, 0, 0),
        e.updateMatrixWorld();
        let t = new r.Vector3().setFromMatrixColumn(e.matrixWorld, 0).setY(0).normalize()
          , a = new r.Vector3().setFromMatrixColumn(e.matrixWorld, 2).negate().setY(0).normalize();
        return {
            right: [t.x, t.z],
            back: [a.x, a.z]
        }
    }
    ])
}
, 396091, e => {
    "use strict";
    let t = Object.freeze({
        y: 0,
        velocityY: 0,
        pitch: 0,
        roll: 0,
        rotorSpeed: 7,
        blur: 0,
        impact: 0,
        wash: 0
    })
      , r = e => Math.max(0, Math.min(1, e))
      , a = e => {
        let t = r(e);
        return t * t * (3 - 2 * t)
    }
      , n = (e, t, r) => e + (t - e) * r
      , i = e => r((e - 7) / 150);
    function o(e, t, a, n, i, o) {
        let l = r(e / t)
          , s = l * l
          , c = s * l;
        return {
            y: (2 * c - 3 * s + 1) * a + (c - 2 * s + l) * t * i + (-2 * c + 3 * s) * n + (c - s) * t * o,
            velocityY: ((6 * s - 6 * l) * a + (3 * s - 4 * l + 1) * t * i + (-6 * s + 6 * l) * n + (3 * s - 2 * l) * t * o) / t
        }
    }
    e.s(["ARRIVAL_MS", 0, 450, "DEPARTURE_MS", 0, 250, "IDLE_ROTOR_SPEED", 0, 7, "REST_POSE", 0, t, "TOUCHDOWN_MS", 0, 260, "sampleArrival", 0, function(e, r) {
        let l = Math.max(0, e)
          , s = Math.max(0, r);
        if (l >= 450)
            return {
                ...t
            };
        if (l < 260) {
            let e = l < 190 ? o(l, 190, -s, -.17 * s, .002 * s, .0042 * s) : o(l - 190, 70, -.17 * s, 0, .0042 * s, 75e-5 * s)
              , t = a(l / 260)
              , r = n(180, 280, a((l - 145) / 115));
            return {
                ...e,
                pitch: n(.095, -.065, t),
                roll: -.035 * (1 - t) + .018 * Math.sin(Math.PI * t),
                rotorSpeed: r,
                blur: i(r),
                impact: 0,
                wash: .6 * a((l - 160) / 100)
            }
        }
        let c = (l - 260) / 190
          , u = 1 - c
          , d = -11 * Math.sin(Math.PI * c) * u * u
          , h = -11 * (Math.PI * Math.cos(Math.PI * c) * u * u - 2 * Math.sin(Math.PI * c) * u) / 190
          , m = 7 + 273 * (1 - a(c)) ** 2;
        return {
            y: d,
            velocityY: h,
            pitch: -.065 * Math.exp(-7 * c) * Math.cos(2.1 * Math.PI * c) * u * u,
            roll: .022 * Math.sin(1.6 * Math.PI * c) * Math.exp(-6 * c) * u * u,
            rotorSpeed: m,
            blur: i(m),
            impact: Math.exp(-16 * c) * u * u,
            wash: .6 * (1 - a(c))
        }
    }
    , "sampleDeparture", 0, function(e, t, i) {
        let o, l, s = Math.max(0, e);
        if (0 === s)
            return {
                ...t
            };
        let c = t.velocityY > 0 ? Math.min(32, 1.8 * Math.max(0, -t.y) / t.velocityY) : 32
          , u = t.y + t.velocityY * c / 2
          , d = Math.min(i, u - 24);
        if (s < c)
            o = t.y + t.velocityY * (s - s * s / (2 * c)),
            l = t.velocityY * (1 - s / c);
        else {
            let e = 250 - c
              , t = r((s - c) / e);
            o = n(u, d, t ** 2.4),
            l = (d - u) * 2.4 * t ** 1.4 / e
        }
        let h = a(s / 65)
          , m = a((s - 65) / 185);
        return {
            y: o,
            velocityY: l,
            pitch: n(n(t.pitch, -.105, h), -.025, m),
            roll: n(n(t.roll, -.025, h), .012, m),
            rotorSpeed: n(t.rotorSpeed, 340, h),
            blur: n(t.blur, 1, a(s / 45)),
            impact: t.impact * (1 - a(s / 45)),
            wash: n(t.wash, 1, a(s / 45)) * (1 - a((s - 45) / 110))
        }
    }
    ])
}
, 759366, 825586, 167614, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , a = e.i(94800)
      , n = e.i(848546)
      , i = e.i(190072)
      , o = e.i(170341)
      , l = e.i(80630);
    let s = {
        contact: -3,
        landing: -2,
        aircraftShadow: -1
    };
    function c(e) {
        e.traverse(e => {
            e.layers.enable(29),
            e instanceof i.Mesh && ((Array.isArray(e.material) ? e.material : [e.material]).every(e => e.transparent && e.opacity < 1 && !e.depthWrite) ? e.layers.disable(0) : e.layers.enable(0))
        }
        )
    }
    e.s(["LOBBY_AIRCRAFT_LAYER", 0, 29, "LOBBY_GROUND_ORDER", 0, s, "syncLobbyAircraftLayers", 0, c], 825586),
    e.s(["LobbyComposite", 0, function({children: e, cameraOverride: s, worldCamera: u}) {
        let {scene: d, camera: h, size: m} = (0,
        n.useThree)()
          , p = s ?? h
          , f = (0,
        r.useRef)(null)
          , y = (0,
        r.useMemo)( () => {
            let e = new i.ShaderMaterial({
                transparent: !0,
                depthTest: !1,
                depthWrite: !1,
                uniforms: {
                    aspect: {
                        value: 1
                    }
                },
                vertexShader: "varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",
                fragmentShader: `uniform float aspect; varying vec2 vUv;
        void main(){
          float top=smoothstep(.84,1.,vUv.y)*.42;
          float corner=(1.-smoothstep(.26,.8,length(vec2(vUv.x*aspect*.82,vUv.y*1.08))))*.5;
          gl_FragColor=vec4(.965,.955,.93,max(top,corner));
        }`
            })
              , t = new i.PlaneGeometry(2,2)
              , r = new i.Scene;
            return r.add(new i.Mesh(t,e)),
            {
                scene: r,
                camera: new i.OrthographicCamera(-1,1,1,-1,0,1),
                material: e,
                geometry: t
            }
        }
        , []);
        (0,
        r.useEffect)( () => () => {
            y.material.dispose(),
            y.geometry.dispose()
        }
        , [y]),
        (0,
        r.useEffect)( () => {
            y.material.uniforms.aspect.value = m.width / Math.max(1, m.height)
        }
        , [y, m.width, m.height]),
        (0,
        a.useFrame)( () => {
            f.current && c(f.current)
        }
        , .5),
        (0,
        r.useLayoutEffect)( () => {
            let e = [];
            return d.traverse(t => {
                t instanceof i.Light && (e.push({
                    light: t,
                    mask: t.layers.mask,
                    shadowMask: t.shadow?.camera.layers.mask
                }),
                t.layers.enable(29),
                t.shadow?.camera.layers.enable(29))
            }
            ),
            () => {
                for (let {light: t, mask: r, shadowMask: a} of e) {
                    t.layers.mask = r;
                    let e = t.shadow;
                    e && void 0 !== a && (e.camera.layers.mask = a)
                }
            }
        }
        , [e, d]);
        let x = (0,
        r.useMemo)( () => ({
            priority: 10,
            lens: () => 0,
            ...u ?? s ? {
                camera: () => u ?? s
            } : {},
            beforeWorld() {
                let e = new Map;
                return f.current?.traverse(t => {
                    if (t instanceof i.Mesh)
                        for (let r of Array.isArray(t.material) ? t.material : [t.material])
                            e.has(r) || e.set(r, {
                                colorWrite: r.colorWrite,
                                depthWrite: r.depthWrite
                            }),
                            r.colorWrite = r.depthWrite = !1
                }
                ),
                () => {
                    for (let[t,r] of e)
                        Object.assign(t, r)
                }
            },
            afterBlit(e) {
                let t = e.autoClear
                  , r = d.background
                  , a = d.fog
                  , n = p.layers.mask
                  , i = e.shadowMap.autoUpdate;
                try {
                    e.autoClear = !1,
                    e.shadowMap.autoUpdate = !1,
                    e.render(y.scene, y.camera),
                    d.background = null,
                    d.fog = null,
                    (0,
                    l.prepareCamera)(e, p),
                    p.layers.set(29),
                    e.clearDepth(),
                    e.render(d, p)
                } finally {
                    p.layers.mask = n,
                    d.background = r,
                    d.fog = a,
                    e.shadowMap.autoUpdate = i,
                    e.autoClear = t
                }
            }
        }), [p, s, u, d, y]);
        return (0,
        o.useFrameHooks)(x),
        (0,
        t.jsx)("group", {
            ref: f,
            children: e
        })
    }
    ], 759366);
    var u = e.i(720996)
      , d = e.i(702329)
      , h = e.i(396091)
      , m = e.i(343627);
    let p = new Map;
    function f(e=0) {
        let t = p.get(e);
        if (t)
            return t;
        let r = new Uint8Array(16384);
        for (let t = 0; t < 64; t++)
            for (let a = 0; a < 64; a++) {
                let n = Math.max(0, Math.min(1, (Math.min(1, Math.hypot(a + .5 - 32, t + .5 - 32) / 32) - e) / (1 - e)))
                  , i = (1 - n * n * (3 - 2 * n)) ** 1.6;
                r.set([10, 12, 16, Math.round(255 * i)], (64 * t + a) * 4)
            }
        let a = new i.DataTexture(r,64,64,i.RGBAFormat);
        return a.magFilter = a.minFilter = i.LinearFilter,
        a.needsUpdate = !0,
        p.set(e, a),
        a
    }
    e.s(["LobbyCraft", 0, function({archetype: e, skin: n, skinOverride: o, scale: l, deckY: c, restY: p, yaw: y, footprint: x, aircraftWidth: M, hover: w, delayMs: g, launch: S, voice: v}) {
        let b = (0,
        r.useRef)(null)
          , A = (0,
        r.useRef)(null)
          , O = (0,
        r.useMemo)( () => ({
            speed: h.IDLE_ROTOR_SPEED,
            blur: 0
        }), [])
          , _ = (0,
        r.useMemo)( () => new i.MeshBasicMaterial({
            map: f(),
            transparent: !0,
            depthWrite: !1,
            opacity: .5
        }), [])
          , R = (0,
        r.useMemo)( () => new i.PlaneGeometry(1,1).rotateX(-Math.PI / 2), []);
        (0,
        r.useEffect)( () => () => {
            _.dispose(),
            R.dispose()
        }
        , [_, R]);
        let P = (0,
        r.useRef)({
            mounted: 0,
            lift: +!!w,
            phase: 0,
            cued: !1,
            voices: [],
            lastY: null,
            pose: {
                ...h.REST_POSE
            },
            departure: null
        });
        return (0,
        r.useEffect)( () => {
            let e = P.current;
            return e.mounted = performance.now(),
            e.phase = Math.random() * Math.PI * 2,
            e.cued = !1,
            () => {
                for (let t of e.voices.splice(0))
                    t()
            }
        }
        , []),
        (0,
        a.useFrame)( ({clock: t}, r) => {
            let a = b.current;
            if (!a)
                return;
            let n = P.current
              , i = performance.now()
              , o = t.elapsedTime
              , l = (0,
            u.motionReduced)()
              , s = +!!w;
            n.lift = l ? s : n.lift + (s - n.lift) * (1 - Math.exp(-(3 * Math.min(r, .1))));
            let c = n.lift
              , d = c * x * .11
              , f = 0
              , y = 0
              , R = 0
              , T = h.IDLE_ROTOR_SPEED + (230 - h.IDLE_ROTOR_SPEED) * c
              , B = .5 * c;
            l ? T = w ? T : 0 : (d += c * x * .011 * (.7 * Math.sin(1.7 * o + n.phase) + .3 * Math.sin(.63 * o + 1.7 * n.phase)),
            f += .03 * c * Math.sin(1.13 * o + 2.1 * n.phase),
            y += .026 * c * Math.sin(.91 * o + 1.3 * n.phase),
            R += .045 * c * Math.sin(.27 * o + n.phase));
            let Y = i - n.mounted - g;
            if (a.visible = l || Y >= 0 || null !== S.departAt,
            !l && Y < h.ARRIVAL_MS) {
                Y >= 0 && !n.cued && (n.cued = !0,
                v > 0 && n.voices.push((0,
                m.playHomeDroneAudio)("arrival", v, {
                    elapsedMs: Y,
                    craft: e
                })));
                let t = (0,
                h.sampleArrival)(Math.max(0, Y), 1e3);
                d += -t.y / 1e3 * x * 2.2,
                f += t.pitch,
                y += t.roll,
                T = Math.max(T, t.rotorSpeed),
                B = Math.max(B, t.blur)
            }
            if (null === S.departAt || l)
                n.departure = null;
            else {
                n.departure?.at !== S.departAt && (n.departure = {
                    at: S.departAt,
                    from: {
                        ...n.pose
                    }
                });
                let e = (0,
                h.sampleDeparture)(i - S.departAt, n.departure.from, -1e3);
                d = -e.y / 1e3 * x * 6,
                f = e.pitch,
                y = e.roll,
                T = e.rotorSpeed,
                B = e.blur
            }
            let E = Math.max(1e-6, 6 * x / 1e3);
            n.pose = {
                ...h.REST_POSE,
                y: -d / E,
                velocityY: null === n.lastY ? 0 : -(d - n.lastY) / E / Math.max(1, 1e3 * r),
                pitch: f,
                roll: y,
                rotorSpeed: T,
                blur: B
            },
            n.lastY = d,
            a.position.y = p + d,
            a.rotation.set(f, R, y),
            O.speed = T,
            O.blur = B;
            let D = Math.max(0, d) / x
              , V = .51 * M + 1.6 * Math.max(0, d);
            A.current?.scale.set(V, 1, V),
            _.opacity = .85 * Math.exp(-(3 * D)) * !!a.visible
        }
        ),
        (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)("group", {
                ref: A,
                position: [0, c + .004 * x, 0],
                children: (0,
                t.jsx)("mesh", {
                    geometry: R,
                    material: _,
                    renderOrder: s.aircraftShadow
                })
            }), (0,
            t.jsx)("group", {
                rotation: [0, y, 0],
                children: (0,
                t.jsx)("group", {
                    ref: b,
                    position: [0, p, 0],
                    children: (0,
                    t.jsx)("group", {
                        scale: l,
                        children: (0,
                        t.jsx)(d.DroneAirframe, {
                            archetype: e,
                            skin: n,
                            skinOverride: o,
                            showroom: !0,
                            visualDrive: O
                        })
                    })
                })
            })]
        })
    }
    , "contactShadowTexture", 0, f], 167614)
}
, 391090, e => {
    "use strict";
    var t = e.i(184866);
    function r(e) {
        let {min: r, max: a} = (0,
        t.rawHeroBounds)(e);
        return Math.abs(.955336489125606) * (a.x - r.x) + Math.abs(.29552020666133955) * (a.z - r.z)
    }
    e.s(["LOBBY_CRAFT_TURN", 0, .3, "STAND_SIZE_COMPRESSION", 0, .15, "lobbyCraftFraming", 0, function(e, a, n, i=0) {
        let o = r("freestyle")
          , l = a / o * (i ? Math.pow(o / r(e), i) : 1);
        return {
            scale: l,
            restY: n - (0,
            t.rawHeroBounds)(e).min.y * l + .001,
            aircraftWidth: r(e) * l
        }
    }
    ])
}
, 361073, e => {
    "use strict";
    let t = {
        x: .5,
        width: .3
    };
    e.s(["COMPACT_HERO", 0, {
        x: .5,
        y: .52,
        width: .42
    }, "DEFAULT_STAGE_FLOOR", 0, .72, "LOBBY_STAND_SHARE", 0, .94, "STAGE_PADS", 0, 4, "heroSlot", 0, function(e, r, a) {
        let n = .5
          , i = .64;
        if (e(t.x, i, t.width) <= r - a)
            n = i;
        else
            for (let o = 0; o < 24; o++) {
                let o = (n + i) / 2;
                e(t.x, o, t.width) > r - a ? i = o : n = o
            }
        return {
            ...t,
            y: n
        }
    }
    ])
}
, 745109, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , a = e.i(94800)
      , n = e.i(190072)
      , i = e.i(552260)
      , o = e.i(167614)
      , l = e.i(825586);
    let s = null
      , c = {
        you: "#ff7a00",
        pilot: "#ffc78f",
        empty: "#e8e4da"
    };
    e.s(["LOBBY_STAND_TOP", 0, .114, "LobbyStand", 0, function({width: e, yaw: u, state: d, highlight: h=!1}) {
        let m = s ??= {
            geometry: function() {
                let e = {
                    shell: [],
                    base: [],
                    deck: [],
                    metal: [],
                    led: []
                }
                  , t = (t, r, a, i, o) => {
                    let l = new n.CylinderGeometry(r,a,i,8);
                    l.rotateY(Math.PI / 8).translate(0, o, 0),
                    e[t].push(l)
                }
                ;
                t("base", .488, .5, .022, .011),
                t("shell", .474, .486, .056, .05),
                t("base", .461, .461, .008, .082),
                t("led", .466, .466, .01, .091),
                t("metal", .452, .47, .014, .103),
                t("deck", .44, .44, .004, .112);
                for (let t = 0; t < 8; t++) {
                    let r = Math.PI / 8 + t * Math.PI / 4;
                    e.metal.push(new n.CylinderGeometry(.011,.011,.003,6).translate(.4 * Math.cos(r), .1135, .4 * Math.sin(r)))
                }
                return Object.fromEntries(Object.entries(e).map( ([e,t]) => {
                    let r = (0,
                    i.mergeGeometries)(t, !1);
                    return t.forEach(e => e.dispose()),
                    [e, r]
                }
                ))
            }(),
            landing: new n.RingGeometry(.3,.322,64).rotateX(-Math.PI / 2).translate(0, .114 + .0016, 0),
            contact: new n.PlaneGeometry(1.36,1.36).rotateX(-Math.PI / 2).translate(0, .002, 0),
            contactMaterial: new n.MeshBasicMaterial({
                map: (0,
                o.contactShadowTexture)(.66),
                transparent: !0,
                depthWrite: !1,
                opacity: .5
            }),
            shell: new n.MeshStandardMaterial({
                color: "#ebe6da",
                roughness: .62,
                metalness: .04
            }),
            base: new n.MeshStandardMaterial({
                color: "#23272c",
                roughness: .82,
                metalness: .12
            }),
            deck: new n.MeshStandardMaterial({
                color: "#5f666a",
                roughness: .92,
                metalness: 0
            }),
            metal: new n.MeshStandardMaterial({
                color: "#c3c6c2",
                roughness: .36,
                metalness: .62
            })
        }
          , p = (0,
        r.useMemo)( () => new n.MeshStandardMaterial({
            color: "#000000",
            roughness: .4,
            toneMapped: !1
        }), [])
          , f = (0,
        r.useMemo)( () => new n.MeshBasicMaterial({
            transparent: !0,
            depthWrite: !1,
            opacity: .95
        }), []);
        return (0,
        r.useEffect)( () => () => {
            p.dispose(),
            f.dispose()
        }
        , [p, f]),
        (0,
        a.useFrame)( ({clock: e}) => {
            let t = h ? "#ff7a00" : c[d]
              , r = h ? 1.15 + .35 * Math.sin(5 * e.elapsedTime) : "empty" === d ? .38 : "you" === d ? 1.25 : .8;
            p.emissive.set(t),
            p.emissiveIntensity = r,
            f.color.set("empty" !== d || h ? "#ff7a00" : "#9ca19b"),
            f.opacity = "empty" !== d || h ? .95 : .45
        }
        ),
        (0,
        t.jsxs)("group", {
            scale: e,
            rotation: [0, u, 0],
            children: [(0,
            t.jsx)("mesh", {
                geometry: m.geometry.shell,
                material: m.shell,
                castShadow: !0
            }), (0,
            t.jsx)("mesh", {
                geometry: m.geometry.base,
                material: m.base,
                castShadow: !0
            }), (0,
            t.jsx)("mesh", {
                geometry: m.geometry.deck,
                material: m.deck
            }), (0,
            t.jsx)("mesh", {
                geometry: m.geometry.metal,
                material: m.metal,
                castShadow: !0
            }), (0,
            t.jsx)("mesh", {
                geometry: m.geometry.led,
                material: p
            }), (0,
            t.jsx)("mesh", {
                geometry: m.landing,
                material: f,
                renderOrder: l.LOBBY_GROUND_ORDER.landing
            }), (0,
            t.jsx)("mesh", {
                geometry: m.contact,
                material: m.contactMaterial,
                renderOrder: l.LOBBY_GROUND_ORDER.contact
            })]
        })
    }
    ])
}
, 847511, e => {
    "use strict";
    var t = e.i(94800)
      , r = e.i(271645)
      , a = e.i(225228);
    e.s(["SceneReady", 0, function({onReady: e}) {
        let n = (0,
        r.useContext)(a.SceneAssetReadiness)
          , i = (0,
        r.useRef)(0)
          , o = (0,
        r.useRef)(null)
          , l = (0,
        r.useRef)(!1);
        return (0,
        t.useFrame)( () => {
            if (!l.current) {
                if (o.current ??= performance.now(),
                n?.size && performance.now() - o.current < 1e4) {
                    i.current = 0;
                    return
                }
                ++i.current < 3 || (l.current = !0,
                e())
            }
        }
        ),
        null
    }
    ])
}
, 13050, e => {
    "use strict";
    var t = e.i(106258)
      , r = e.i(579832);
    let a = !1
      , n = 1;
    function i(e=n) {
        n = e,
        (0,
        r.getDroneAudio)()?.setMixState(function(e, t=1) {
            switch (e) {
            case "raceFinishing":
            case "raceResults":
            case "lessonDone":
            case "courseDone":
                return "results";
            case "impactCinematic":
                return "cinematic";
            case "menu":
            case "paused":
            case "droneWheel":
            case "raceLobby":
            case "lessonSelect":
            case "lessonLoading":
            case "replaySelect":
            case "practiceEditor":
            case "spawnEditor":
                return "menu";
            default:
                return t < 1 ? "cinematic" : "flight"
            }
        }(t.useSimStore.getState().phase, e))
    }
    e.s(["ensureAudioMix", 0, function() {
        if (a)
            return;
        let e = (0,
        r.getDroneAudio)();
        if (!e)
            return;
        a = !0,
        e.setMix(t.useSimStore.getState().settings.audio),
        i(),
        t.useSimStore.subscribe( (t, r) => {
            t.settings.audio !== r.settings.audio && e.setMix(t.settings.audio),
            t.phase !== r.phase && i()
        }
        );
        let n = () => {
            e.setVisible(!document.hidden),
            document.hidden && e.mutesInBackground && e.suspend()
        }
        ;
        n(),
        document.addEventListener("visibilitychange", n)
    }
    , "updateMixState", 0, i])
}
, 560099, e => {
    "use strict";
    let t, r;
    var a = e.i(931067)
      , n = e.i(271645)
      , i = e.i(88014)
      , o = e.i(190072)
      , l = e.i(848546)
      , s = e.i(94800);
    let c = new o.Vector3
      , u = new o.Vector3
      , d = new o.Vector3
      , h = new o.Vector2;
    function m(e, t, r) {
        let a = c.setFromMatrixPosition(e.matrixWorld);
        a.project(t);
        let n = r.width / 2
          , i = r.height / 2;
        return [a.x * n + n, -(a.y * i) + i]
    }
    let p = e => 1e-10 > Math.abs(e) ? 0 : e;
    function f(e, t, r="") {
        let a = "matrix3d(";
        for (let r = 0; 16 !== r; r++)
            a += p(t[r] * e.elements[r]) + (15 !== r ? "," : ")");
        return r + a
    }
    let y = (t = [1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1],
    e => f(e, t))
      , x = (r = e => [1 / e, 1 / e, 1 / e, 1, -1 / e, -1 / e, -1 / e, -1, 1 / e, 1 / e, 1 / e, 1, 1, 1, 1, 1],
    (e, t) => f(e, r(t), "translate(-50%,-50%)"))
      , M = n.forwardRef( ({children: e, eps: t=.001, style: r, className: f, prepend: M, center: w, fullscreen: g, portal: S, distanceFactor: v, sprite: b=!1, transform: A=!1, occlude: O, onOcclude: _, castShadow: R, receiveShadow: P, material: T, geometry: B, zIndexRange: Y=[0x1000037, 0], calculatePosition: E=m, as: D="div", wrapperClass: V, pointerEvents: L="auto", ...C}, j) => {
        let {gl: N, camera: W, scene: I, size: F, raycaster: k, events: z, viewport: H} = (0,
        l.useThree)()
          , [X] = n.useState( () => document.createElement(D))
          , U = n.useRef(null)
          , G = n.useRef(null)
          , $ = n.useRef(0)
          , q = n.useRef([0, 0])
          , Z = n.useRef(null)
          , Q = n.useRef(null)
          , K = (null == S ? void 0 : S.current) || z.connected || N.domElement.parentNode
          , J = n.useRef(null)
          , ee = n.useRef(!1)
          , et = n.useMemo( () => {
            var e;
            return O && "blending" !== O || Array.isArray(O) && O.length && (e = O[0]) && "object" == typeof e && "current" in e
        }
        , [O]);
        n.useLayoutEffect( () => {
            let e = N.domElement;
            O && "blending" === O ? (e.style.zIndex = `${Math.floor(Y[0] / 2)}`,
            e.style.position = "absolute",
            e.style.pointerEvents = "none") : (e.style.zIndex = null,
            e.style.position = null,
            e.style.pointerEvents = null)
        }
        , [O]),
        n.useLayoutEffect( () => {
            if (G.current) {
                let e = U.current = i.createRoot(X);
                if (I.updateMatrixWorld(),
                A)
                    X.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
                else {
                    let e = E(G.current, W, F);
                    X.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`
                }
                return K && (M ? K.prepend(X) : K.appendChild(X)),
                () => {
                    K && K.removeChild(X),
                    e.unmount()
                }
            }
        }
        , [K, A]),
        n.useLayoutEffect( () => {
            V && (X.className = V)
        }
        , [V]);
        let er = n.useMemo( () => A ? {
            position: "absolute",
            top: 0,
            left: 0,
            width: F.width,
            height: F.height,
            transformStyle: "preserve-3d",
            pointerEvents: "none"
        } : {
            position: "absolute",
            transform: w ? "translate3d(-50%,-50%,0)" : "none",
            ...g && {
                top: -F.height / 2,
                left: -F.width / 2,
                width: F.width,
                height: F.height
            },
            ...r
        }, [r, w, g, F, A])
          , ea = n.useMemo( () => ({
            position: "absolute",
            pointerEvents: L
        }), [L]);
        n.useLayoutEffect( () => {
            var t, a;
            ee.current = !1,
            A ? null == (t = U.current) || t.render(n.createElement("div", {
                ref: Z,
                style: er
            }, n.createElement("div", {
                ref: Q,
                style: ea
            }, n.createElement("div", {
                ref: j,
                className: f,
                style: r,
                children: e
            })))) : null == (a = U.current) || a.render(n.createElement("div", {
                ref: j,
                style: er,
                className: f,
                children: e
            }))
        }
        );
        let en = n.useRef(!0);
        (0,
        s.useFrame)(e => {
            if (G.current) {
                W.updateMatrixWorld(),
                G.current.updateWorldMatrix(!0, !1);
                let e = A ? q.current : E(G.current, W, F);
                if (A || Math.abs($.current - W.zoom) > t || Math.abs(q.current[0] - e[0]) > t || Math.abs(q.current[1] - e[1]) > t) {
                    var r;
                    let t, a, n, i, l = (r = G.current,
                    t = c.setFromMatrixPosition(r.matrixWorld),
                    a = u.setFromMatrixPosition(W.matrixWorld),
                    n = t.sub(a),
                    i = W.getWorldDirection(d),
                    n.angleTo(i) > Math.PI / 2), s = !1;
                    et && (Array.isArray(O) ? s = O.map(e => e.current) : "blending" !== O && (s = [I]));
                    let m = en.current;
                    s ? en.current = function(e, t, r, a) {
                        let n = c.setFromMatrixPosition(e.matrixWorld)
                          , i = n.clone();
                        i.project(t),
                        h.set(i.x, i.y),
                        r.setFromCamera(h, t);
                        let o = r.intersectObjects(a, !0);
                        if (o.length) {
                            let e = o[0].distance;
                            return n.distanceTo(r.ray.origin) < e
                        }
                        return !0
                    }(G.current, W, k, s) && !l : en.current = !l,
                    m !== en.current && (_ ? _(!en.current) : X.style.display = en.current ? "block" : "none");
                    let f = Math.floor(Y[0] / 2)
                      , M = O ? et ? [Y[0], f] : [f - 1, 0] : Y;
                    if (X.style.zIndex = `${function(e, t, r) {
                        if (t instanceof o.PerspectiveCamera || t instanceof o.OrthographicCamera) {
                            let a = c.setFromMatrixPosition(e.matrixWorld)
                              , n = u.setFromMatrixPosition(t.matrixWorld)
                              , i = a.distanceTo(n)
                              , o = (r[1] - r[0]) / (t.far - t.near)
                              , l = r[1] - o * t.far;
                            return Math.round(o * i + l)
                        }
                    }(G.current, W, M)}`,
                    A) {
                        let[e,t] = [F.width / 2, F.height / 2]
                          , r = W.projectionMatrix.elements[5] * t
                          , {isOrthographicCamera: a, top: n, left: i, bottom: o, right: l} = W
                          , s = y(W.matrixWorldInverse)
                          , c = a ? `scale(${r})translate(${p(-(l + i) / 2)}px,${p((n + o) / 2)}px)` : `translateZ(${r}px)`
                          , u = G.current.matrixWorld;
                        b && ((u = W.matrixWorldInverse.clone().transpose().copyPosition(u).scale(G.current.scale)).elements[3] = u.elements[7] = u.elements[11] = 0,
                        u.elements[15] = 1),
                        X.style.width = F.width + "px",
                        X.style.height = F.height + "px",
                        X.style.perspective = a ? "" : `${r}px`,
                        Z.current && Q.current && (Z.current.style.transform = `${c}${s}translate(${e}px,${t}px)`,
                        Q.current.style.transform = x(u, 1 / ((v || 10) / 400)))
                    } else {
                        let t = void 0 === v ? 1 : function(e, t) {
                            if (t instanceof o.OrthographicCamera)
                                return t.zoom;
                            if (!(t instanceof o.PerspectiveCamera))
                                return 1;
                            {
                                let r = c.setFromMatrixPosition(e.matrixWorld)
                                  , a = u.setFromMatrixPosition(t.matrixWorld);
                                return 1 / (2 * Math.tan(t.fov * Math.PI / 180 / 2) * r.distanceTo(a))
                            }
                        }(G.current, W) * v;
                        X.style.transform = `translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`
                    }
                    q.current = e,
                    $.current = W.zoom
                }
            }
            if (!et && J.current && !ee.current)
                if (A) {
                    if (Z.current) {
                        let e = Z.current.children[0];
                        if (null != e && e.clientWidth && null != e && e.clientHeight) {
                            let {isOrthographicCamera: t} = W;
                            if (t || B)
                                C.scale && (Array.isArray(C.scale) ? C.scale instanceof o.Vector3 ? J.current.scale.copy(C.scale.clone().divideScalar(1)) : J.current.scale.set(1 / C.scale[0], 1 / C.scale[1], 1 / C.scale[2]) : J.current.scale.setScalar(1 / C.scale));
                            else {
                                let t = (v || 10) / 400
                                  , r = e.clientWidth * t
                                  , a = e.clientHeight * t;
                                J.current.scale.set(r, a, 1)
                            }
                            ee.current = !0
                        }
                    }
                } else {
                    let t = X.children[0];
                    if (null != t && t.clientWidth && null != t && t.clientHeight) {
                        let e = 1 / H.factor
                          , r = t.clientWidth * e
                          , a = t.clientHeight * e;
                        J.current.scale.set(r, a, 1),
                        ee.current = !0
                    }
                    J.current.lookAt(e.camera.position)
                }
        }
        );
        let ei = n.useMemo( () => ({
            vertexShader: A ? void 0 : `
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,
            fragmentShader: `
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `
        }), [A]);
        return n.createElement("group", (0,
        a.default)({}, C, {
            ref: G
        }), O && !et && n.createElement("mesh", {
            castShadow: R,
            receiveShadow: P,
            ref: J
        }, B || n.createElement("planeGeometry", null), T || n.createElement("shaderMaterial", {
            side: o.DoubleSide,
            vertexShader: ei.vertexShader,
            fragmentShader: ei.fragmentShader
        })))
    }
    );
    e.s(["Html", 0, M])
}
]);
