(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 436007, e => {
    "use strict";
    var t = e.i(266246)
      , r = e.i(94800)
      , l = e.i(848546)
      , n = e.i(271645)
      , o = e.i(190072)
      , i = e.i(620284)
      , a = e.i(268911);
    function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            t && (l = l.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, l)
        }
        return r
    }
    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(r), !0).forEach(function(t) {
                !function(e, t, r) {
                    var l;
                    (t = "symbol" == typeof (l = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var l = r.call(e, t || "default");
                            if ("object" != typeof l)
                                return l;
                            throw TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(t, "string")) ? l : l + "") in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                }(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    let u = new o.Quaternion;
    new o.Euler;
    let d = new o.Vector3;
    new o.Object3D;
    let f = new o.Matrix4
      , p = new o.Vector3
      , m = new o.Quaternion
      , y = new o.Vector3
      , g = ({x: e, y: t, z: r, w: l}) => u.set(e, t, r, l)
      , v = {
        fixed: 1,
        dynamic: 0,
        kinematicPosition: 2,
        kinematicVelocity: 3
    }
      , b = e => v[e]
      , E = e => e ? e instanceof o.Quaternion ? [e.x, e.y, e.z, e.w] : e instanceof o.Vector3 || e instanceof o.Euler ? [e.x, e.y, e.z] : Array.isArray(e) ? e : [e] : [0];
    function h(e) {
        let t = (0,
        n.useRef)(void 0);
        return void 0 === t.current && (t.current = {
            value: "function" == typeof e ? e() : e
        }),
        t.current.value
    }
    let x = ({onStep: e, updatePriority: t}) => ((0,
    r.useFrame)( (t, r) => {
        e(r)
    }
    , t),
    null)
      , C = ({onStep: e}) => {
        var t;
        let r, l, o;
        return t = t => {
            e(t)
        }
        ,
        r = (0,
        n.useRef)(t),
        l = (0,
        n.useRef)(0),
        o = (0,
        n.useRef)(0),
        (0,
        n.useEffect)( () => {
            r.current = t
        }
        , [t]),
        (0,
        n.useEffect)( () => {
            let e = () => {
                let t = performance.now()
                  , n = t - o.current;
                l.current = requestAnimationFrame(e),
                r.current(n / 1e3),
                o.current = t
            }
            ;
            return l.current = requestAnimationFrame(e),
            () => cancelAnimationFrame(l.current)
        }
        , []),
        null
    }
    ;
    var w = (0,
    n.memo)( ({onStep: e, type: t, updatePriority: r}) => "independent" === t ? n.default.createElement(C, {
        onStep: e
    }) : n.default.createElement(x, {
        onStep: e,
        updatePriority: r
    }));
    function j(e, t) {
        if (null == e)
            return {};
        var r, l, n = function(e, t) {
            if (null == e)
                return {};
            var r = {};
            for (var l in e)
                if (({}).hasOwnProperty.call(e, l)) {
                    if (-1 !== t.indexOf(l))
                        continue;
                    r[l] = e[l]
                }
            return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (l = 0; l < o.length; l++)
                r = o[l],
                -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (n[r] = e[r])
        }
        return n
    }
    let S = ["mass", "linearDamping", "angularDamping", "type", "onCollisionEnter", "onCollisionExit", "onIntersectionEnter", "onIntersectionExit", "onContactForce", "children", "canSleep", "ccd", "gravityScale", "softCcdPrediction", "ref"]
      , M = ["shape", "args"]
      , R = "Please pick ONLY ONE of the `density`, `mass` and `massProperties` options."
      , P = {
        sensor: (e, t) => {
            e.setSensor(t)
        }
        ,
        collisionGroups: (e, t) => {
            e.setCollisionGroups(t)
        }
        ,
        solverGroups: (e, t) => {
            e.setSolverGroups(t)
        }
        ,
        friction: (e, t) => {
            e.setFriction(t)
        }
        ,
        frictionCombineRule: (e, t) => {
            e.setFrictionCombineRule(t)
        }
        ,
        restitution: (e, t) => {
            e.setRestitution(t)
        }
        ,
        restitutionCombineRule: (e, t) => {
            e.setRestitutionCombineRule(t)
        }
        ,
        activeCollisionTypes: (e, t) => {
            e.setActiveCollisionTypes(t)
        }
        ,
        contactSkin: (e, t) => {
            e.setContactSkin(t)
        }
        ,
        quaternion: () => {}
        ,
        position: () => {}
        ,
        rotation: () => {}
        ,
        scale: () => {}
    }
      , F = Object.keys(P)
      , B = {
        cuboid: "cuboid",
        ball: "ball",
        hull: "convexHull",
        trimesh: "trimesh"
    }
      , O = e => ({
        collision: !!(null != e && e.onCollisionEnter || null != e && e.onCollisionExit || null != e && e.onIntersectionEnter || null != e && e.onIntersectionExit),
        contactForce: !!(null != e && e.onContactForce)
    })
      , A = e => {
        let t = (0,
        n.useRef)(e);
        return (0,
        n.useEffect)( () => {
            t.current = e
        }
        , [e]),
        t
    }
      , D = () => {
        let e = (0,
        n.useContext)(N);
        if (!e)
            throw Error("react-three-rapier: useRapier must be used within <Physics />!");
        return e
    }
      , I = (e, t, r=!0) => {
        let[l,i] = (0,
        n.useState)([]);
        return (0,
        n.useEffect)( () => {
            e.current && !1 !== t.colliders && i(( ({object: e, ignoreMeshColliders: t=!0, options: r}) => {
                let l = [];
                e.updateWorldMatrix(!0, !1);
                let n = e.matrixWorld.clone().invert()
                  , i = e => {
                    if ("isMesh" in e) {
                        let i;
                        if (t && (i = !1,
                        e.traverseAncestors(e => {
                            "MeshCollider" === e.userData.r3RapierType && (i = !0)
                        }
                        ),
                        i))
                            return;
                        let c = e.getWorldScale(y)
                          , u = B[r.colliders || "cuboid"];
                        e.updateWorldMatrix(!0, !1),
                        f.copy(e.matrixWorld).premultiply(n).decompose(p, m, y);
                        let d = new o.Euler().setFromQuaternion(m, "XYZ")
                          , {geometry: g} = e
                          , {args: v, offset: b} = ( (e, t) => {
                            switch (t) {
                            case "cuboid":
                                {
                                    e.computeBoundingBox();
                                    let {boundingBox: t} = e
                                      , r = t.getSize(new o.Vector3);
                                    return {
                                        args: [r.x / 2, r.y / 2, r.z / 2],
                                        offset: t.getCenter(new o.Vector3)
                                    }
                                }
                            case "ball":
                                {
                                    e.computeBoundingSphere();
                                    let {boundingSphere: t} = e;
                                    return {
                                        args: [t.radius],
                                        offset: t.center
                                    }
                                }
                            case "trimesh":
                                {
                                    var r;
                                    let t = e.index ? e.clone() : (0,
                                    a.mergeVertices)(e);
                                    return {
                                        args: [t.attributes.position.array, null == (r = t.index) ? void 0 : r.array],
                                        offset: new o.Vector3
                                    }
                                }
                            case "hull":
                                return {
                                    args: [e.clone().attributes.position.array],
                                    offset: new o.Vector3
                                }
                            }
                            return {
                                args: [],
                                offset: new o.Vector3
                            }
                        }
                        )(g, r.colliders || "cuboid")
                          , E = s(s({}, ( (e={}) => j(e, S))(r)), {}, {
                            args: v,
                            shape: u,
                            rotation: [d.x, d.y, d.z],
                            position: [p.x + b.x * c.x, p.y + b.y * c.y, p.z + b.z * c.z],
                            scale: [c.x, c.y, c.z]
                        });
                        l.push(E)
                    }
                }
                ;
                return r.includeInvisible ? e.traverse(i) : e.traverseVisible(i),
                l
            }
            )({
                object: e.current,
                options: t,
                ignoreMeshColliders: r
            }))
        }
        , [t.colliders]),
        l
    }
      , T = (0,
    n.memo)( () => {
        let {world: e} = D()
          , t = (0,
        n.useRef)(null);
        return (0,
        r.useFrame)( () => {
            let r = t.current;
            if (!r)
                return;
            let l = e.debugRender()
              , n = new o.BufferGeometry;
            n.setAttribute("position", new o.BufferAttribute(l.vertices,3)),
            n.setAttribute("color", new o.BufferAttribute(l.colors,4)),
            r.geometry.dispose(),
            r.geometry = n
        }
        ),
        n.default.createElement("group", null, n.default.createElement("lineSegments", {
            ref: t,
            frustumCulled: !1
        }, n.default.createElement("lineBasicMaterial", {
            color: 0xffffff,
            vertexColors: !0
        }), n.default.createElement("bufferGeometry", null)))
    }
    )
      , N = (0,
    n.createContext)(void 0)
      , z = (e, t) => {
        var r, l, n, o, i, a;
        return {
            target: {
                rigidBody: e.rigidBody.object,
                collider: e.collider.object,
                colliderObject: null == (r = e.collider.state) ? void 0 : r.object,
                rigidBodyObject: null == (l = e.rigidBody.state) ? void 0 : l.object
            },
            other: {
                rigidBody: t.rigidBody.object,
                collider: t.collider.object,
                colliderObject: null == (n = t.collider.state) ? void 0 : n.object,
                rigidBodyObject: null == (o = t.rigidBody.state) ? void 0 : o.object
            },
            rigidBody: t.rigidBody.object,
            collider: t.collider.object,
            colliderObject: null == (i = t.collider.state) ? void 0 : i.object,
            rigidBodyObject: null == (a = t.rigidBody.state) ? void 0 : a.object
        }
    }
      , V = async () => {
        let t = await e.A(916354);
        return await t.init(),
        t
    }
    ;
    function W() {
        return (W = Object.assign.bind()).apply(null, arguments)
    }
    let k = (e, t=null) => {
        let r = (0,
        n.useRef)(t);
        return e && "function" != typeof e ? (e.current || (e.current = r.current),
        e) : r
    }
      , q = (e, t, r) => {
        let l = (0,
        n.useRef)(void 0)
          , o = (0,
        n.useCallback)( () => (l.current || (l.current = e()),
        l.current), r);
        return (0,
        n.useEffect)( () => {
            let e = o();
            return () => {
                t(e),
                l.current = void 0
            }
        }
        , [o]),
        o
    }
      , G = ["args", "colliders", "canSleep"]
      , L = {
        gravityScale: (e, t) => {
            e.setGravityScale(t, !0)
        }
        ,
        additionalSolverIterations(e, t) {
            e.setAdditionalSolverIterations(t)
        },
        linearDamping: (e, t) => {
            e.setLinearDamping(t)
        }
        ,
        angularDamping: (e, t) => {
            e.setAngularDamping(t)
        }
        ,
        dominanceGroup: (e, t) => {
            e.setDominanceGroup(t)
        }
        ,
        enabledRotations: (e, [t,r,l]) => {
            e.setEnabledRotations(t, r, l, !0)
        }
        ,
        enabledTranslations: (e, [t,r,l]) => {
            e.setEnabledTranslations(t, r, l, !0)
        }
        ,
        lockRotations: (e, t) => {
            e.lockRotations(t, !0)
        }
        ,
        lockTranslations: (e, t) => {
            e.lockTranslations(t, !0)
        }
        ,
        angularVelocity: (e, [t,r,l]) => {
            e.setAngvel({
                x: t,
                y: r,
                z: l
            }, !0)
        }
        ,
        linearVelocity: (e, [t,r,l]) => {
            e.setLinvel({
                x: t,
                y: r,
                z: l
            }, !0)
        }
        ,
        ccd: (e, t) => {
            e.enableCcd(t)
        }
        ,
        softCcdPrediction: (e, t) => {
            e.setSoftCcdPrediction(t)
        }
        ,
        userData: (e, t) => {
            e.userData = t
        }
        ,
        type(e, t) {
            e.setBodyType(b(t), !0)
        },
        position: () => {}
        ,
        rotation: () => {}
        ,
        quaternion: () => {}
        ,
        scale: () => {}
    }
      , _ = Object.keys(L)
      , U = (0,
    n.memo)(e => {
        let r, {children: l, position: i, rotation: a, quaternion: c, scale: u, name: g} = e, {world: v, colliderEvents: b, colliderStates: h} = D(), x = Z(), C = k(e.ref), w = (0,
        n.useRef)(null), B = q( () => {
            var r;
            let l, n, i = w.current.getWorldScale(( ({x: e, y: t, z: r}={
                x: 0,
                y: 0,
                z: 0
            }) => new o.Vector3(e,t,r))()), a = (r = null == x ? void 0 : x.getRigidBody,
            l = ( (e, t, r) => {
                let l = t.slice();
                if ("heightfield" === e) {
                    let e = l[3];
                    return e.x *= r.x,
                    e.x *= r.y,
                    e.x *= r.z,
                    l
                }
                if ("trimesh" === e || "convexHull" === e)
                    return l[0] = ( (e, t) => {
                        let r = Array.from(e);
                        for (let l = 0; l < e.length / 3; l++)
                            r[3 * l] *= t.x,
                            r[3 * l + 1] *= t.y,
                            r[3 * l + 2] *= t.z;
                        return r
                    }
                    )(l[0], r),
                    l;
                let n = [r.x, r.y, r.z, r.x, r.x];
                return l.map( (e, t) => n[t] * e)
            }
            )(e.shape, e.args, i),
            n = t.ColliderDesc[e.shape](...l),
            v.createCollider(n, null == r ? void 0 : r()));
            return "function" == typeof e.ref && e.ref(a),
            C.current = a,
            a
        }
        , e => {
            v.getCollider(e.handle) && v.removeCollider(e, !0)
        }
        , [...M.flatMap(t => Array.isArray(e[t]) ? e[t] : [e[t]]), x]);
        (0,
        n.useEffect)( () => {
            let e, t = B();
            return h.set(t.handle, (e = w.current,
            {
                collider: t,
                worldParent: (null == x ? void 0 : x.ref.current) || void 0,
                object: e
            })),
            () => {
                h.delete(t.handle)
            }
        }
        , [B]);
        let A = (0,
        n.useMemo)( () => s(s({}, ( (e={}) => j(e, S))(null == x ? void 0 : x.options)), e), [e, null == x ? void 0 : x.options]);
        return r = (0,
        n.useMemo)( () => F.flatMap(e => E(A[e])), [A]),
        (0,
        n.useEffect)( () => {
            var e, t = B();
            let r = h.get(t.handle);
            if (r) {
                let l = r.object.parent.getWorldScale(d)
                  , n = null == (e = r.worldParent) ? void 0 : e.matrixWorld.clone().invert();
                r.object.updateWorldMatrix(!0, !1),
                f.copy(r.object.matrixWorld),
                n && f.premultiply(n),
                f.decompose(p, m, y),
                t.parent() ? (t.setTranslationWrtParent({
                    x: p.x * l.x,
                    y: p.y * l.y,
                    z: p.z * l.z
                }),
                t.setRotationWrtParent(m)) : (t.setTranslation({
                    x: p.x * l.x,
                    y: p.y * l.y,
                    z: p.z * l.z
                }),
                t.setRotation(m)),
                F.forEach(e => {
                    if (e in A) {
                        let r = A[e];
                        P[e](t, r, A)
                    }
                }
                ),
                ( (e, t) => {
                    if (void 0 !== t.density) {
                        if (void 0 !== t.mass || void 0 !== t.massProperties)
                            throw Error(R);
                        e.setDensity(t.density);
                        return
                    }
                    if (void 0 !== t.mass) {
                        if (void 0 !== t.massProperties)
                            throw Error(R);
                        e.setMass(t.mass);
                        return
                    }
                    void 0 !== t.massProperties && e.setMassProperties(t.massProperties.mass, t.massProperties.centerOfMass, t.massProperties.principalAngularInertia, t.massProperties.angularInertiaLocalFrame)
                }
                )(t, A)
            }
        }
        , [...r, B]),
        ( (e, r, l, o={}) => {
            let {onCollisionEnter: i, onCollisionExit: a, onIntersectionEnter: c, onIntersectionExit: s, onContactForce: u} = r;
            (0,
            n.useEffect)( () => {
                let n = e();
                if (n) {
                    let {collision: e, contactForce: d} = O(r)
                      , f = e || o.collision
                      , p = d || o.contactForce;
                    f && p ? n.setActiveEvents(t.ActiveEvents.COLLISION_EVENTS | t.ActiveEvents.CONTACT_FORCE_EVENTS) : f ? n.setActiveEvents(t.ActiveEvents.COLLISION_EVENTS) : p && n.setActiveEvents(t.ActiveEvents.CONTACT_FORCE_EVENTS),
                    l.set(n.handle, {
                        onCollisionEnter: i,
                        onCollisionExit: a,
                        onIntersectionEnter: c,
                        onIntersectionExit: s,
                        onContactForce: u
                    })
                }
                return () => {
                    n && l.delete(n.handle)
                }
            }
            , [i, a, c, s, u, o])
        }
        )(B, A, b, O(null == x ? void 0 : x.options)),
        n.default.createElement("object3D", {
            position: i,
            rotation: a,
            quaternion: c,
            scale: u,
            ref: w,
            name: g
        }, l)
    }
    )
      , H = n.default.forwardRef( (e, t) => n.default.createElement(U, W({}, e, {
        shape: "cuboid",
        ref: t
    })));
    H.displayName = "CuboidCollider",
    n.default.forwardRef( (e, t) => n.default.createElement(U, W({}, e, {
        shape: "roundCuboid",
        ref: t
    }))).displayName = "RoundCuboidCollider";
    let Q = n.default.forwardRef( (e, t) => n.default.createElement(U, W({}, e, {
        shape: "ball",
        ref: t
    })));
    Q.displayName = "BallCollider",
    n.default.forwardRef( (e, t) => n.default.createElement(U, W({}, e, {
        shape: "capsule",
        ref: t
    }))).displayName = "CapsuleCollider",
    n.default.forwardRef( (e, t) => n.default.createElement(U, W({}, e, {
        shape: "heightfield",
        ref: t
    }))).displayName = "HeightfieldCollider",
    n.default.forwardRef( (e, t) => n.default.createElement(U, W({}, e, {
        shape: "trimesh",
        ref: t
    }))).displayName = "TrimeshCollider",
    n.default.forwardRef( (e, t) => n.default.createElement(U, W({}, e, {
        shape: "cone",
        ref: t
    }))).displayName = "ConeCollider",
    n.default.forwardRef( (e, t) => n.default.createElement(U, W({}, e, {
        shape: "roundCone",
        ref: t
    }))).displayName = "RoundConeCollider";
    let K = n.default.forwardRef( (e, t) => n.default.createElement(U, W({}, e, {
        shape: "cylinder",
        ref: t
    })));
    K.displayName = "CylinderCollider",
    K.displayName = "RoundCylinderCollider",
    n.default.forwardRef( (e, t) => n.default.createElement(U, W({}, e, {
        shape: "convexHull",
        ref: t
    }))).displayName = "ConvexHullCollider";
    let Y = ["ref", "children", "type", "position", "rotation", "scale", "quaternion", "transformState"]
      , X = (0,
    n.createContext)(void 0)
      , Z = () => (0,
    n.useContext)(X)
      , J = (0,
    n.memo)(e => {
        let {ref: r, children: l, type: o, position: i, rotation: a, scale: c, quaternion: u, transformState: d} = e
          , g = j(e, Y)
          , v = (0,
        n.useRef)(null)
          , h = k(r)
          , {world: x, rigidBodyStates: C, physicsOptions: w, rigidBodyEvents: S} = D()
          , M = (0,
        n.useMemo)( () => s(s(s({}, w), e), {}, {
            children: void 0
        }), [w, e])
          , R = G.flatMap(e => Array.isArray(M[e]) ? [...M[e]] : M[e])
          , P = I(v, M)
          , F = q( () => {
            var e;
            let l, n, o = (l = b((null == M ? void 0 : M.type) || "dynamic"),
            (n = new t.RigidBodyDesc(l)).canSleep = null == (e = null == M ? void 0 : M.canSleep) || e,
            n), i = x.createRigidBody(o);
            return "function" == typeof r && r(i),
            h.current = i,
            i
        }
        , e => {
            x.getRigidBody(e.handle) && x.removeRigidBody(e)
        }
        , R);
        (0,
        n.useEffect)( () => {
            let t = F()
              , r = ( ({rigidBody: e, object: t, setMatrix: r, getMatrix: l, worldScale: n, meshType: o="mesh"}) => {
                t.updateWorldMatrix(!0, !1);
                let i = t.parent.matrixWorld.clone().invert();
                return {
                    object: t,
                    rigidBody: e,
                    invertedWorldMatrix: i,
                    setMatrix: r || (e => {
                        t.matrix.copy(e)
                    }
                    ),
                    getMatrix: l || (e => e.copy(t.matrix)),
                    scale: n || t.getWorldScale(y).clone(),
                    isSleeping: !1,
                    meshType: o
                }
            }
            )({
                rigidBody: t,
                object: v.current
            });
            return C.set(t.handle, e.transformState ? e.transformState(r) : r),
            () => {
                C.delete(t.handle)
            }
        }
        , [F]),
        ( (e, t, r, l=!0) => {
            let o = (0,
            n.useMemo)( () => _.flatMap(e => E(t[e])), [t]);
            (0,
            n.useEffect)( () => {
                ( (e, t, r, l=!0) => {
                    if (!e)
                        return;
                    let n = r.get(e.handle);
                    n && (l && (n.object.updateWorldMatrix(!0, !1),
                    f.copy(n.object.matrixWorld).decompose(p, m, y),
                    e.setTranslation(p, !1),
                    e.setRotation(m, !1)),
                    _.forEach(r => {
                        r in t && L[r](e, t[r])
                    }
                    ))
                }
                )(e(), t, r, l)
            }
            , o)
        }
        )(F, M, C),
        ( (e, t, r) => {
            let {onWake: l, onSleep: o, onCollisionEnter: i, onCollisionExit: a, onIntersectionEnter: c, onIntersectionExit: s, onContactForce: u} = t
              , d = {
                onWake: l,
                onSleep: o,
                onCollisionEnter: i,
                onCollisionExit: a,
                onIntersectionEnter: c,
                onIntersectionExit: s,
                onContactForce: u
            };
            (0,
            n.useEffect)( () => {
                let t = e();
                return r.set(t.handle, d),
                () => {
                    r.delete(t.handle)
                }
            }
            , [l, o, i, a, c, s, u])
        }
        )(F, M, S);
        let B = (0,
        n.useMemo)( () => ({
            ref: v,
            getRigidBody: F,
            options: M
        }), [F]);
        return n.default.createElement(X.Provider, {
            value: B
        }, n.default.createElement("object3D", W({
            ref: v
        }, g, {
            position: i,
            rotation: a,
            quaternion: u,
            scale: c
        }), l, P.map( (e, t) => n.default.createElement(U, W({
            key: t
        }, e)))))
    }
    );
    J.displayName = "RigidBody",
    (0,
    n.memo)(e => {
        let {children: t, type: r} = e
          , {physicsOptions: l} = D()
          , o = (0,
        n.useRef)(null)
          , {options: i} = Z()
          , a = I(o, (0,
        n.useMemo)( () => s(s(s({}, l), i), {}, {
            children: void 0,
            colliders: r
        }), [l, i]), !1);
        return n.default.createElement("object3D", {
            ref: o,
            userData: {
                r3RapierType: "MeshCollider"
            }
        }, t, a.map( (e, t) => n.default.createElement(U, W({
            key: t
        }, e))))
    }
    ).displayName = "MeshCollider";
    let $ = ["ref"]
      , ee = ["children", "instances", "colliderNodes", "position", "rotation", "quaternion", "scale"];
    (0,
    n.memo)(e => {
        let {ref: t} = e
          , r = j(e, $)
          , l = k(t, [])
          , i = (0,
        n.useRef)(null)
          , a = (0,
        n.useRef)(null)
          , {children: c, instances: u, colliderNodes: d=[], position: f, rotation: p, quaternion: m, scale: y} = r
          , g = j(r, ee)
          , v = I(i, s(s({}, r), {}, {
            children: void 0
        }))
          , b = () => {
            let e = a.current.children[0];
            if (e && "isInstancedMesh" in e)
                return e
        }
        ;
        return (0,
        n.useEffect)( () => {
            let e = b();
            e ? e.instanceMatrix.setUsage(o.DynamicDrawUsage) : console.warn("InstancedRigidBodies expects exactly one child, which must be an InstancedMesh")
        }
        , []),
        n.default.createElement("object3D", W({
            ref: i
        }, g, {
            position: f,
            rotation: p,
            quaternion: m,
            scale: y
        }), n.default.createElement("object3D", {
            ref: a
        }, c), null == u ? void 0 : u.map( (e, t) => n.default.createElement(J, W({}, g, e, {
            ref: e => {
                l.current[t] = e
            }
            ,
            transformState: e => {
                let r;
                return (r = b()) ? s(s({}, e), {}, {
                    getMatrix: e => (r.getMatrixAt(t, e),
                    e),
                    setMatrix: e => {
                        r.setMatrixAt(t, e),
                        r.instanceMatrix.needsUpdate = !0
                    }
                    ,
                    meshType: "instancedMesh"
                }) : e
            }
        }), n.default.createElement(n.default.Fragment, null, d.map( (e, t) => n.default.createElement(n.Fragment, {
            key: t
        }, e)), v.map( (e, t) => n.default.createElement(U, W({
            key: t
        }, e)))))))
    }
    ).displayName = "InstancedRigidBodies",
    e.s(["BallCollider", 0, Q, "CuboidCollider", 0, H, "Physics", 0, e => {
        let {colliders: r="cuboid", children: a, timeStep: c=1 / 60, paused: u=!1, interpolate: d=!0, updatePriority: v, updateLoop: b="follow", debug: E=!1, gravity: x=[0, -9.81, 0], allowedLinearError: C=.001, predictionDistance: j=.002, numSolverIterations: S=4, numInternalPgsIterations: M=1, minIslandSize: R=128, maxCcdSubsteps: P=1, contactNaturalFrequency: F=30, lengthUnit: B=1} = e
          , O = (0,
        i.suspend)(V, ["@react-thee/rapier", V])
          , {invalidate: A} = (0,
        l.useThree)()
          , D = h( () => new Map)
          , I = h( () => new Map)
          , W = h( () => new Map)
          , k = h( () => new Map)
          , q = h( () => new t.EventQueue(!1))
          , G = h( () => new Set)
          , L = h( () => new Set)
          , _ = h( () => ({
            filterContactPair: (...e) => {
                for (let t of G) {
                    let r = t.current(...e);
                    if (null !== r)
                        return r
                }
                return null
            }
            ,
            filterIntersectionPair: (...e) => {
                for (let t of L)
                    if (!1 === t.current(...e))
                        return !1;
                return !0
            }
        }))
          , U = h( () => new Set)
          , H = h( () => new Set)
          , {proxy: Q, reset: K, set: Y} = h( () => {
            var e;
            let t;
            return e = () => new O.World((e => {
                let[t,r,l] = e;
                return new o.Vector3(t,r,l)
            }
            )(x)),
            {
                proxy: new Proxy({},{
                    get: (r, l) => (t || (t = e()),
                    Reflect.get(t, l)),
                    set: (r, l, n) => (t || (t = e()),
                    Reflect.set(t, l, n))
                }),
                reset: () => {
                    t = void 0
                }
                ,
                set: e => {
                    t = e
                }
            }
        }
        );
        (0,
        n.useEffect)( () => () => {
            Q.free(),
            K()
        }
        , []),
        (0,
        n.useEffect)( () => {
            Q.gravity = Array.isArray(x) ? new t.Vector3(x[0],x[1],x[2]) : "number" == typeof x ? new t.Vector3(x,x,x) : new t.Vector3(x.x,x.y,x.z),
            Q.integrationParameters.numSolverIterations = S,
            Q.integrationParameters.numInternalPgsIterations = M,
            Q.integrationParameters.normalizedAllowedLinearError = C,
            Q.integrationParameters.minIslandSize = R,
            Q.integrationParameters.maxCcdSubsteps = P,
            Q.integrationParameters.normalizedPredictionDistance = j,
            Q.lengthUnit = B,
            Q.integrationParameters.contact_natural_frequency = F
        }
        , [Q, ...x, S, M, C, R, P, j, B, F]);
        let X = (0,
        n.useCallback)(e => {
            var t;
            let r = Q.getCollider(e)
              , l = k.get(e)
              , n = I.get(e)
              , o = null == r || null == (t = r.parent()) ? void 0 : t.handle
              , i = void 0 !== o ? Q.getRigidBody(o) : void 0
              , a = i && void 0 !== o ? W.get(o) : void 0;
            return {
                collider: {
                    object: r,
                    events: l,
                    state: n
                },
                rigidBody: {
                    object: i,
                    events: a,
                    state: void 0 !== o ? D.get(o) : void 0
                }
            }
        }
        , [])
          , [Z] = (0,
        n.useState)({
            previousState: {},
            accumulator: 0
        })
          , J = (0,
        n.useCallback)(e => {
            let t = "vary" === c
              , r = o.MathUtils.clamp(e, 0, .5)
              , l = e => {
                U.forEach(e => {
                    e.current(Q)
                }
                ),
                Q.timestep = e;
                let t = G.size > 0 || L.size > 0;
                Q.step(q, t ? _ : void 0),
                H.forEach(e => {
                    e.current(Q)
                }
                )
            }
            ;
            if (t)
                l(r);
            else
                for (Z.accumulator += r; Z.accumulator >= c; )
                    d && (Z.previousState = {},
                    Q.forEachRigidBody(e => {
                        Z.previousState[e.handle] = {
                            position: e.translation(),
                            rotation: e.rotation()
                        }
                    }
                    )),
                    l(c),
                    Z.accumulator -= c;
            let n = t || !d || u ? 1 : Z.accumulator / c;
            D.forEach( (e, t) => {
                let r = Q.getRigidBody(t)
                  , l = W.get(t);
                if (null != l && l.onSleep || null != l && l.onWake) {
                    var o, i;
                    r.isSleeping() && !e.isSleeping && (null == l || null == (o = l.onSleep) || o.call(l)),
                    !r.isSleeping() && e.isSleeping && (null == l || null == (i = l.onWake) || i.call(l)),
                    e.isSleeping = r.isSleeping()
                }
                if (!r || r.isSleeping() && !("isInstancedMesh" in e.object) || !e.setMatrix)
                    return;
                let a = r.translation()
                  , c = r.rotation()
                  , s = Z.previousState[t];
                s && (f.compose(s.position, g(s.rotation), e.scale).premultiply(e.invertedWorldMatrix).decompose(p, m, y),
                "mesh" == e.meshType && (e.object.position.copy(p),
                e.object.quaternion.copy(m))),
                f.compose(a, g(c), e.scale).premultiply(e.invertedWorldMatrix).decompose(p, m, y),
                "instancedMesh" == e.meshType ? e.setMatrix(f) : (e.object.position.lerp(p, n),
                e.object.quaternion.slerp(m, n))
            }
            ),
            q.drainCollisionEvents( (e, t, r) => {
                var l, n, o, i, a, c, u, d, f, p, m, y, g, v, b, E, h, x, C, w, j, S, M, R;
                let P = X(e)
                  , F = X(t);
                if (!(null != P && P.collider.object) || !(null != F && F.collider.object))
                    return;
                let B = z(P, F)
                  , O = z(F, P);
                r ? Q.contactPair(P.collider.object, F.collider.object, (e, t) => {
                    var r, l, n, o, i, a, c, u;
                    null == (r = P.rigidBody.events) || null == (l = r.onCollisionEnter) || l.call(r, s(s({}, B), {}, {
                        manifold: e,
                        flipped: t
                    })),
                    null == (n = F.rigidBody.events) || null == (o = n.onCollisionEnter) || o.call(n, s(s({}, O), {}, {
                        manifold: e,
                        flipped: t
                    })),
                    null == (i = P.collider.events) || null == (a = i.onCollisionEnter) || a.call(i, s(s({}, B), {}, {
                        manifold: e,
                        flipped: t
                    })),
                    null == (c = F.collider.events) || null == (u = c.onCollisionEnter) || u.call(c, s(s({}, O), {}, {
                        manifold: e,
                        flipped: t
                    }))
                }
                ) : (null == (l = P.rigidBody.events) || null == (n = l.onCollisionExit) || n.call(l, B),
                null == (o = F.rigidBody.events) || null == (i = o.onCollisionExit) || i.call(o, O),
                null == (a = P.collider.events) || null == (c = a.onCollisionExit) || c.call(a, B),
                null == (u = F.collider.events) || null == (d = u.onCollisionExit) || d.call(u, O)),
                r ? Q.intersectionPair(P.collider.object, F.collider.object) && (null == (f = P.rigidBody.events) || null == (p = f.onIntersectionEnter) || p.call(f, B),
                null == (m = F.rigidBody.events) || null == (y = m.onIntersectionEnter) || y.call(m, O),
                null == (g = P.collider.events) || null == (v = g.onIntersectionEnter) || v.call(g, B),
                null == (b = F.collider.events) || null == (E = b.onIntersectionEnter) || E.call(b, O)) : (null == (h = P.rigidBody.events) || null == (x = h.onIntersectionExit) || x.call(h, B),
                null == (C = F.rigidBody.events) || null == (w = C.onIntersectionExit) || w.call(C, O),
                null == (j = P.collider.events) || null == (S = j.onIntersectionExit) || S.call(j, B),
                null == (M = F.collider.events) || null == (R = M.onIntersectionExit) || R.call(M, O))
            }
            ),
            q.drainContactForceEvents(e => {
                var t, r, l, n, o, i, a, c;
                let u = X(e.collider1())
                  , d = X(e.collider2());
                if (!(null != u && u.collider.object) || !(null != d && d.collider.object))
                    return;
                let f = z(u, d)
                  , p = z(d, u);
                null == (t = u.rigidBody.events) || null == (r = t.onContactForce) || r.call(t, s(s({}, f), {}, {
                    totalForce: e.totalForce(),
                    totalForceMagnitude: e.totalForceMagnitude(),
                    maxForceDirection: e.maxForceDirection(),
                    maxForceMagnitude: e.maxForceMagnitude()
                })),
                null == (l = d.rigidBody.events) || null == (n = l.onContactForce) || n.call(l, s(s({}, p), {}, {
                    totalForce: e.totalForce(),
                    totalForceMagnitude: e.totalForceMagnitude(),
                    maxForceDirection: e.maxForceDirection(),
                    maxForceMagnitude: e.maxForceMagnitude()
                })),
                null == (o = u.collider.events) || null == (i = o.onContactForce) || i.call(o, s(s({}, f), {}, {
                    totalForce: e.totalForce(),
                    totalForceMagnitude: e.totalForceMagnitude(),
                    maxForceDirection: e.maxForceDirection(),
                    maxForceMagnitude: e.maxForceMagnitude()
                })),
                null == (a = d.collider.events) || null == (c = a.onContactForce) || c.call(a, s(s({}, p), {}, {
                    totalForce: e.totalForce(),
                    totalForceMagnitude: e.totalForceMagnitude(),
                    maxForceDirection: e.maxForceDirection(),
                    maxForceMagnitude: e.maxForceMagnitude()
                }))
            }
            ),
            Q.forEachActiveRigidBody( () => {
                A()
            }
            )
        }
        , [u, c, d, Q])
          , $ = (0,
        n.useMemo)( () => ({
            rapier: O,
            world: Q,
            setWorld: e => {
                Y(e)
            }
            ,
            physicsOptions: {
                colliders: r,
                gravity: x
            },
            rigidBodyStates: D,
            colliderStates: I,
            rigidBodyEvents: W,
            colliderEvents: k,
            beforeStepCallbacks: U,
            afterStepCallbacks: H,
            isPaused: u,
            isDebug: E,
            step: J,
            filterContactPairHooks: G,
            filterIntersectionPairHooks: L
        }), [u, J, E, r, x])
          , ee = (0,
        n.useCallback)(e => {
            u || J(e)
        }
        , [u, J]);
        return n.default.createElement(N.Provider, {
            value: $
        }, n.default.createElement(w, {
            onStep: ee,
            type: b,
            updatePriority: v
        }), E && n.default.createElement(T, null), a)
    }
    , "RigidBody", 0, J, "useAfterPhysicsStep", 0, e => {
        let {afterStepCallbacks: t} = D()
          , r = A(e);
        (0,
        n.useEffect)( () => (t.add(r),
        () => {
            t.delete(r)
        }
        ), [])
    }
    , "useBeforePhysicsStep", 0, e => {
        let {beforeStepCallbacks: t} = D()
          , r = A(e);
        (0,
        n.useEffect)( () => (t.add(r),
        () => {
            t.delete(r)
        }
        ), [])
    }
    , "useRapier", 0, D])
}
]);
