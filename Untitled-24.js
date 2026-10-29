(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 543689, t => {
    "use strict";
    t.s(["isReplayId", 0, function(t) {
        return "string" == typeof t && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(t)
    }
    ])
}
, 937769, t => {
    "use strict";
    var e = t.i(738073)
      , r = t.i(998494)
      , i = t.i(593922)
      , n = t.i(543689)
      , a = t.i(284853);
    function o(t) {
        return t?.code === "42703"
    }
    async function s(t) {
        let e = await t("id, name, lesson_ids, is_draft, sort_order, try_it");
        return o(e.error) ? await t("id, name, lesson_ids, is_draft, sort_order") : e
    }
    async function l(t) {
        return await t("id,name,map_id,spawn,gates,sort_order,competitive_revision,race_marker,race_exit_spawn")
    }
    function u(t) {
        if (!(0,
        n.isReplayId)(t.id) || !(0,
        e.isMapId)(t.map_id) || !Array.isArray(t.frames) || 0 === t.frames.length || !t.frames.every(e.isReplayFrame) || !(0,
        e.isCamera)(t.camera))
            return null;
        let r = Number(t.duration);
        return !Number.isFinite(r) || r <= 0 ? null : {
            id: t.id,
            mapId: t.map_id,
            duration: r,
            frames: (0,
            a.transformMapReplayFrames)(t.map_id, t.frames, "from-storage"),
            camera: (0,
            a.transformMapCamera)(t.map_id, t.camera, "from-storage"),
            name: "string" == typeof t.name ? t.name : "",
            ownerId: t.owner_id
        }
    }
    let c = /^user:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    function d(t) {
        if (!(0,
        e.isMapId)(t.map_id) && !c.test(t.map_id) || "string" != typeof t.id || "string" != typeof t.name)
            return null;
        let r = (0,
        e.parseSpawn)(t.spawn)
          , n = (0,
        e.parseGateObjectives)(t.gates);
        if (!r || !n)
            return null;
        let o = t.race_marker
          , s = null == t.race_exit_spawn ? void 0 : (0,
        e.parseSpawn)(t.race_exit_spawn);
        return null !== s && (null == o || (0,
        i.isRaceMarker)(o)) ? (0,
        a.transformMapTimeAttack)({
            id: t.id,
            name: t.name,
            mapId: t.map_id,
            spawn: r,
            gates: n,
            competitiveRevision: Math.max(1, t.competitive_revision ?? 1),
            ...o ? {
                raceMarker: o
            } : {},
            ...s ? {
                raceExitSpawn: s
            } : {}
        }, "from-storage") : null
    }
    t.s(["assemblePayload", 0, function(t) {
        let i = t.courseRows.slice().sort( (t, e) => (t.sort_order ?? 0) - (e.sort_order ?? 0)).map(t => {
            let e = function(t) {
                var e;
                if ("string" != typeof t.id || "string" != typeof t.name)
                    return null;
                let r = Array.isArray(t.lesson_ids) ? t.lesson_ids.filter(t => "string" == typeof t) : [];
                return {
                    id: t.id,
                    name: t.name,
                    lessonIds: r,
                    isDraft: !0 === t.is_draft,
                    tryIt: (e = t.try_it) && "object" == typeof e ? "race" === e.kind && "string" == typeof e.timeAttackId && e.timeAttackId ? {
                        kind: "race",
                        timeAttackId: e.timeAttackId
                    } : "place" === e.kind && "string" == typeof e.mapId && e.mapId ? "string" == typeof e.spawnId && e.spawnId ? {
                        kind: "place",
                        mapId: e.mapId,
                        spawnId: e.spawnId
                    } : {
                        kind: "place",
                        mapId: e.mapId
                    } : null : null
                }
            }(t);
            if (!e)
                throw Error(`Invalid course row "${t.id}".`);
            return e
        }
        )
          , o = t.lessonRows.slice().sort( (t, e) => (t.sort_order ?? 0) - (e.sort_order ?? 0)).map(t => {
            let i = function(t) {
                var i;
                if (!(0,
                e.isMapId)(t.map_id))
                    return null;
                let n = (0,
                e.parseSpawn)(t.spawn)
                  , o = (0,
                e.parseSteps)(t.steps)
                  , s = (0,
                e.parsePractice)(t.practice);
                return n && o && s && "string" == typeof t.id && "string" == typeof t.name ? (0,
                a.transformMapLesson)({
                    id: t.id,
                    name: t.name,
                    mapId: "gridworks" === (i = t.map_id) ? r.LESSON_MAP_ID : i,
                    spawn: n,
                    steps: o,
                    practice: s,
                    hideMapGates: !1 !== t.hide_map_gates,
                    isDraft: !0 === t.is_draft
                }, "from-storage") : null
            }(t);
            if (!i)
                throw Error(`Invalid lesson row "${t.id}".`);
            return i
        }
        )
          , s = t.replayRows.flatMap(t => {
            if (!(0,
            e.isMapId)(t.map_id))
                return [];
            let r = u(t);
            if (!r)
                throw Error(`Invalid replay row "${t.id}".`);
            return [r]
        }
        );
        return {
            courses: i,
            lessons: o,
            timeAttacks: (t.timeAttackRows ?? []).slice().sort( (t, e) => (t.sort_order ?? 0) - (e.sort_order ?? 0)).flatMap(t => {
                if (!(0,
                e.isMapId)(t.map_id))
                    return [];
                let r = d(t);
                if (!r)
                    throw Error(`Invalid time attack row "${t.id}".`);
                return [r]
            }
            ),
            replays: s,
            menuReplayId: (0,
            n.isReplayId)(t.config?.menu_replay_id) ? t.config.menu_replay_id : null
        }
    }
    , "missingColumn", 0, o, "parseMapSpawnRow", 0, function(t) {
        if (!(0,
        e.isMapId)(t.map_id))
            return null;
        let r = (0,
        e.parseMapSpawns)(t.spawns);
        return r ? {
            mapId: t.map_id,
            spawns: r.map(e => (0,
            a.transformMapSpawn)(t.map_id, e, "from-storage"))
        } : null
    }
    , "parseReplayRow", 0, u, "parseTimeAttackRow", 0, d, "selectCourses", 0, s, "selectRaces", 0, l])
}
, 738073, t => {
    "use strict";
    var e = t.i(998494)
      , r = t.i(353198)
      , i = t.i(826845)
      , n = t.i(202010)
      , a = t.i(543689)
      , o = t.i(483359);
    function s(t) {
        return !!t && "object" == typeof t && ("fpv" === t.view || ("chase" === t.view || void 0 === t.view) && Array.isArray(t.offset) && 3 === t.offset.length)
    }
    function l(t) {
        return !!t && "object" == typeof t && "number" == typeof t.seconds
    }
    function u(t) {
        return Array.isArray(t) && 3 === t.length && t.every(t => "number" == typeof t)
    }
    function c(t) {
        return !!t && "object" == typeof t && "string" == typeof t.id && "string" == typeof t.label && u(t.position) && "number" == typeof t.yaw
    }
    function d(t) {
        if (!t || "object" != typeof t || "string" != typeof t.id || !(0,
        i.isSafeId)(t.id) || "string" != typeof t.color)
            return null;
        if ("gate" === t.kind) {
            if (!u(t.position) || !Array.isArray(t.size) || 2 !== t.size.length || "number" != typeof t.size[0] || "number" != typeof t.size[1])
                return null;
            let e = void 0 !== t.rotation ? u(t.rotation) ? t.rotation : null : "number" == typeof t.rotationY && Number.isFinite(t.rotationY) && ("vertical" === t.axis || "horizontal" === t.axis) && (void 0 === t.incoming || "top" === t.incoming || "bottom" === t.incoming) ? (0,
            o.legacyGateRotation)({
                rotationY: t.rotationY,
                axis: t.axis,
                incoming: t.incoming
            }) : null;
            return e ? {
                kind: "gate",
                id: t.id,
                color: t.color,
                position: t.position,
                rotation: e,
                size: t.size
            } : null
        }
        return "land" === t.kind ? u(t.position) && "number" == typeof t.radius ? {
            kind: "land",
            id: t.id,
            color: t.color,
            position: t.position,
            radius: t.radius
        } : null : null
    }
    function p(t) {
        return c(t) ? {
            ...t,
            position: [t.position[0], t.position[1], t.position[2]],
            pad: !1 !== t.pad
        } : null
    }
    t.s(["isCamera", 0, s, "isMapId", 0, function(t) {
        return "string" == typeof t && (e.MAP_IDS.includes(t) || (0,
        e.isOfficialMapId)(t))
    }
    , "isReplayFrame", 0, function(t) {
        return !!t && "object" == typeof t && (void 0 !== t.droneId && !r.DRONE_IDS.includes(t.droneId) && (0,
        r.replayCraft)(t.droneId) && (t.droneId = "freestyle",
        t.droneSkin = "factory"),
        (void 0 === t.droneId || r.DRONE_IDS.includes(t.droneId)) && (void 0 === t.droneSkin || r.DRONE_SKIN_IDS.some(e => e === t.droneSkin) || /^shop:[0-9a-f-]{36}$/i.test(t.droneSkin)) && (void 0 === t.voltageFactor || Number.isFinite(t.voltageFactor) && t.voltageFactor >= 0 && t.voltageFactor <= 2) && "number" == typeof t.t && (void 0 === t.segment || Number.isSafeInteger(t.segment) && t.segment >= 0) && (void 0 === t.crowdTime || Number.isFinite(t.crowdTime) && t.crowdTime >= 0) && (void 0 === t.crowdRoutes || Array.isArray(t.crowdRoutes) && t.crowdRoutes.length <= 40 && t.crowdRoutes.every(t => t && Number.isSafeInteger(t.id) && t.id >= 0 && Number.isFinite(t.offset) && u(t.a) && t.a.every(Number.isFinite) && u(t.b) && t.b.every(Number.isFinite) && Math.hypot(t.b[0] - t.a[0], t.b[2] - t.a[2]) > .01)) && (void 0 === t.driftTime || "number" == typeof t.driftTime && Number.isFinite(t.driftTime) && t.driftTime >= 0) && (void 0 === t.prefabTime || "number" == typeof t.prefabTime && Number.isFinite(t.prefabTime) && t.prefabTime >= 0) && Array.isArray(t.position) && 3 === t.position.length && t.position.every(t => "number" == typeof t) && Array.isArray(t.rotation) && 4 === t.rotation.length && t.rotation.every(t => "number" == typeof t))
    }
    , "parseGateObjectives", 0, function(t) {
        if (!Array.isArray(t))
            return null;
        let e = []
          , r = new Set;
        for (let i of t) {
            let t = d(i);
            if (!t || "gate" !== t.kind || r.has(t.id))
                return null;
            r.add(t.id),
            e.push(t)
        }
        return e
    }
    , "parseMapSpawns", 0, function(t) {
        if (!Array.isArray(t))
            return null;
        let e = []
          , r = new Set;
        for (let i of t) {
            let t = p(i);
            if (!t || r.has(t.id))
                return null;
            r.add(t.id),
            e.push(t)
        }
        return e
    }
    , "parsePractice", 0, function(t) {
        if (!t || "object" != typeof t || "string" != typeof t.instruction || !Array.isArray(t.objectives) || 0 === t.objectives.length)
            return null;
        let e = [];
        for (let r of t.objectives) {
            let t = d(r);
            if (!t)
                return null;
            e.push(t)
        }
        return {
            instruction: t.instruction,
            objectives: e
        }
    }
    , "parseSpawn", 0, p, "parseSteps", 0, function(t) {
        if (!Array.isArray(t))
            return null;
        let e = []
          , r = new Set;
        for (let o of t) {
            let t = function(t) {
                if (!t || "object" != typeof t || "string" != typeof t.id || !(0,
                i.isSafeId)(t.id))
                    return null;
                let e = function(t) {
                    if (!Array.isArray(t))
                        return null;
                    let e = [];
                    for (let r of t) {
                        if (!r || "object" != typeof r)
                            return null;
                        let t = "string" == typeof r.text ? r.text.trim() : "";
                        if (!t)
                            continue;
                        let i = r.sprite
                          , a = (0,
                        n.isInstructorSprite)(i) ? i : n.DEFAULT_INSTRUCTOR_SPRITE;
                        e.push({
                            text: t,
                            sprite: a
                        })
                    }
                    return e
                }(t.dialog);
                if (!e || 0 === e.length || !t.demo || "object" != typeof t.demo || !c(t.demo.spawn) || !Array.isArray(t.demo.segments) || 0 === t.demo.segments.length || !t.demo.segments.every(l) || !s(t.demo.camera))
                    return null;
                let r = (0,
                a.isReplayId)(t.replayId) ? t.replayId : void 0;
                return {
                    id: t.id,
                    dialog: e,
                    demo: {
                        spawn: t.demo.spawn,
                        segments: t.demo.segments,
                        restMs: t.demo.restMs,
                        camera: t.demo.camera
                    },
                    ...r ? {
                        replayId: r
                    } : {}
                }
            }(o);
            if (!t || r.has(t.id))
                return null;
            r.add(t.id),
            e.push(t)
        }
        return e
    }
    ])
}
, 483359, t => {
    "use strict";
    var e = t.i(475127);
    function r(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }
    function i(t) {
        let r = e.cos(t)
          , i = e.sin(t);
        return [1e-15 > Math.abs(r) ? 0 : r, 1e-15 > Math.abs(i) ? 0 : i]
    }
    function n([t,e,r]) {
        let[a,o] = i(t)
          , [s,l] = i(e)
          , [u,c] = i(r);
        return [s * u, -s * c, l, a * c + o * l * u, a * u - o * l * c, -o * s, o * c - a * l * u, o * u + a * l * c, a * s]
    }
    function a(t) {
        let e = n(t.rotation);
        return {
            right: [e[0], e[3], e[6]],
            up: [e[1], e[4], e[7]],
            normal: [e[2], e[5], e[8]],
            euler: t.rotation
        }
    }
    function o(t, e) {
        return t + Math.round((e - t) / (2 * Math.PI)) * Math.PI * 2
    }
    function s(t, r) {
        let i = e.asin(Math.max(-1, Math.min(1, t[2])));
        if (Math.abs(t[2]) > .9999999)
            return [o(e.atan2(t[7], t[4]), r[0]), o(i, r[1]), 0];
        let n = e.atan2(-t[5], t[8])
          , a = e.atan2(-t[1], t[0])
          , s = [[n, i, a], [n + Math.PI, Math.PI - i, a + Math.PI]].map(t => t.map( (t, e) => o(t, r[e])))
          , l = t => t.reduce( (t, e, i) => t + Math.abs(e - r[i]), 0);
        return l(s[0]) <= l(s[1]) ? s[0] : s[1]
    }
    function l(t) {
        let e = Math.round(t / (Math.PI / 2));
        return 1e-12 > Math.abs(t - Math.PI / 2 * e) ? Math.PI / 2 * e || 0 : t
    }
    function u(t, r, a) {
        if (0 === t[0] && 0 === t[2] && 0 === r[0] && 0 === r[2])
            return [0, t[1] + a * Math.sign(r[1]), 0];
        let o = e.hypot(...r)
          , [l,u,c] = r.map(t => t / o)
          , [d,p] = i(a)
          , m = 1 - d
          , f = [m * l * l + d, m * l * u - p * c, m * l * c + p * u, m * l * u + p * c, m * u * u + d, m * u * c - p * l, m * l * c - p * u, m * u * c + p * l, m * c * c + d]
          , h = n(t);
        return s(Array.from({
            length: 9
        }, (t, e) => {
            let r = Math.floor(e / 3)
              , i = e % 3;
            return f[3 * r] * h[i] + f[3 * r + 1] * h[3 + i] + f[3 * r + 2] * h[6 + i]
        }
        ), t)
    }
    function c(t, e, i) {
        let {right: n, up: o, normal: s} = a(t)
          , [l,u,c] = t.position
          , d = [e.x - l, e.y - u, e.z - c]
          , p = [i.x - l, i.y - u, i.z - c]
          , m = r(d, s)
          , f = r(p, s);
        if (m <= 0 || f > 0)
            return null;
        let h = m / (m - f)
          , y = [e.x + (i.x - e.x) * h - l, e.y + (i.y - e.y) * h - u, e.z + (i.z - e.z) * h - c]
          , g = r(y, n)
          , w = r(y, o)
          , [b,v] = t.size;
        return Math.abs(g) <= b / 2 && Math.abs(w) <= v / 2 ? h : null
    }
    t.s(["crossedGate", 0, function(t, e, r) {
        return null !== c(t, e, r)
    }
    , "eulerMatrix", 0, n, "flipGate", 0, function(t) {
        return u(t, a({
            rotation: t
        }).up, Math.PI)
    }
    , "gateBasis", 0, a, "gateCrossingFraction", 0, c, "gateMountYaw", 0, function({right: t, normal: r}) {
        return .999 > Math.abs(t[1]) ? e.atan2(-t[2], t[0]) : e.atan2(r[0], r[2])
    }
    , "gateRotationFromBasis", 0, function(t, e, r, i=[0, 0, 0]) {
        return s([t[0], e[0], r[0], t[1], e[1], r[1], t[2], e[2], r[2]], i).map(l)
    }
    , "legacyGateRotation", 0, function(t) {
        return "vertical" === t.axis ? [0, t.rotationY, 0] : "bottom" === t.incoming ? [Math.PI / 2, 0, -t.rotationY] : [-Math.PI / 2, 0, t.rotationY]
    }
    , "rotateGate", 0, u])
}
, 826845, t => {
    "use strict";
    t.s(["isSafeId", 0, function(t) {
        return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(t)
    }
    ])
}
, 202010, t => {
    "use strict";
    let e = ["LeadInstructor1", "LeadInstructor2", "LeadInstructor3", "LeadInstructor4"];
    t.s(["DEFAULT_INSTRUCTOR_SPRITE", 0, "LeadInstructor1", "INSTRUCTOR_SPRITES", 0, e, "instructorSpriteSrc", 0, function(t) {
        return `/sim/characters/lead-instructor/${t}.webp`
    }
    , "isInstructorSprite", 0, function(t) {
        return "string" == typeof t && e.includes(t)
    }
    ])
}
, 284853, t => {
    "use strict";
    let e = new Set(["gridworks", "flight-school"]);
    function r(t, r) {
        return e.has(t) ? "from-storage" === r ? .6 : 1.6666666666666667 : 1
    }
    function i(t, e, r=!1) {
        let n = .2 * !!r
          , a = r && t[1] <= n ? t[1] : n + (t[1] - n) * e;
        return [t[0] * e, a, t[2] * e]
    }
    function n(t, e, n) {
        let a = r(t, n);
        return 1 === a ? e : {
            ...e,
            position: i(e.position, a, !0)
        }
    }
    function a(t, e, n) {
        let a = r(t, n);
        return 1 === a || "fpv" === e.view ? e : {
            ...e,
            offset: i(e.offset, a)
        }
    }
    function o(t, e) {
        return {
            ...t,
            position: i(t.position, e),
            size: [t.size[0] * e, t.size[1] * e]
        }
    }
    t.s(["GRIDWORKS_WORLD_SCALE", 0, .6, "transformMapCamera", 0, a, "transformMapLesson", 0, function(t, e) {
        let s = r(t.mapId, e);
        return 1 === s ? t : {
            ...t,
            spawn: n(t.mapId, t.spawn, e),
            steps: t.steps.map(r => ({
                ...r,
                demo: {
                    ...r.demo,
                    spawn: n(t.mapId, r.demo.spawn, e),
                    camera: a(t.mapId, r.demo.camera, e)
                }
            })),
            practice: {
                ...t.practice,
                objectives: t.practice.objectives.map(t => "gate" === t.kind ? o(t, s) : {
                    ...t,
                    position: i(t.position, s),
                    radius: t.radius * s
                })
            }
        }
    }
    , "transformMapPathSamples", 0, function(t, e, n) {
        let a = r(t, n);
        return 1 === a ? e : e.map(t => {
            let[e,r,n] = i([t.x, t.y, t.z], a, !0);
            return {
                ...t,
                x: e,
                y: r,
                z: n
            }
        }
        )
    }
    , "transformMapReplayFrames", 0, function(t, e, n) {
        let a = r(t, n);
        return 1 === a ? e : e.map(t => ({
            ...t,
            position: i(t.position, a, !0),
            ...t.crowdRoutes ? {
                crowdRoutes: t.crowdRoutes.map(t => ({
                    ...t,
                    a: i(t.a, a),
                    b: i(t.b, a)
                }))
            } : {}
        }))
    }
    , "transformMapSpawn", 0, n, "transformMapTimeAttack", 0, function(t, e) {
        let a = r(t.mapId, e);
        return 1 === a ? t : {
            ...t,
            spawn: n(t.mapId, t.spawn, e),
            gates: t.gates.map(t => o(t, a)),
            ...t.raceExitSpawn ? {
                raceExitSpawn: n(t.mapId, t.raceExitSpawn, e)
            } : {},
            ...t.raceMarker ? {
                raceMarker: {
                    position: i(t.raceMarker.position, a),
                    radius: t.raceMarker.radius * a,
                    height: t.raceMarker.height * a
                }
            } : {}
        }
    }
    ])
}
, 998494, t => {
    "use strict";
    let e = ["gridworks", "drift-park", "whoop-world", "flight-school"]
      , r = t => "gridworks" === t || /^official:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(t ?? "")
      , i = "official:fd000000-0000-4000-8000-000000000302"
      , n = "official:fd000000-0000-4000-8000-000000000301"
      , a = /^user:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
      , o = {
        "whoop-world": i,
        "drift-park": n
    };
    function s(t) {
        let e = t.size / 2;
        return t.walls ?? {
            negativeX: e,
            positiveX: e,
            negativeZ: e,
            positiveZ: e
        }
    }
    t.s(["DEFAULT_MAP_ID", 0, i, "DRIFT_PARK_MAP_ID", 0, n, "LESSON_MAP_ID", 0, "flight-school", "MAP_IDS", 0, e, "WHOOP_WORLD_MAP_ID", 0, i, "isOfficialMapId", 0, r, "isPersonalMapId", 0, t => !!t?.startsWith("user:"), "parseLayoutRevision", 0, function(t) {
        return Number.isSafeInteger(t) && t > 0 ? t : null
    }
    , "recordingMapId", 0, function(t) {
        return "string" != typeof t ? null : o[t] ? o[t] : e.includes(t) || r(t) || a.test(t) ? t : null
    }
    , "wallDistances", 0, s, "worldBound", 0, function(t) {
        return Math.max(...Object.values(s(t)))
    }
    ])
}
, 381842, t => {
    "use strict";
    t.s(["REPLAY_BUCKET", 0, "sim-replay-payloads", "REPLAY_OBJECT_LIMIT", 0, 2e7, "replayStoragePayloads", 0, function(t) {
        let e = (t, e) => Number(t.toFixed(e))
          , r = t.map(t => [e(t.t, 6), t.segment ?? 0, ...t.position.map(t => e(t, 4)), ...t.rotation.map(t => e(t, 6)), void 0 === t.throttle ? null : [t.throttle, t.roll ?? 0, t.pitch ?? 0, t.yaw ?? 0].map(t => e(t, 4)), t.motors ? t.motors.map(t => e(t, 4)) : null, ...t.droneId ? [t.droneId, t.droneSkin ?? "factory"] : []])
          , i = [];
        for (let e of t)
            (!i.length || e.t - i[i.length - 1].t >= 2) && i.push({
                t: e.t,
                x: e.position[0],
                y: e.position[1],
                z: e.position[2]
            });
        let n = t.at(-1);
        return n && (!i.length || i.at(-1).t < n.t) && i.push({
            t: n.t,
            x: n.position[0],
            y: n.position[1],
            z: n.position[2]
        }),
        {
            original: JSON.stringify({
                format: 1,
                frames: t
            }),
            ambient: JSON.stringify({
                format: 1,
                frames: r
            }),
            samples: i
        }
    }
    ])
}
, 290840, 840390, 502478, t => {
    "use strict";
    let e, r;
    var i = t.i(920755)
      , n = t.i(738073)
      , a = t.i(543689)
      , o = t.i(381842);
    let s = new WeakMap;
    function l(t, e) {
        return t && "object" == typeof t && s.set(t, e),
        t
    }
    function u(t) {
        return t && "object" == typeof t ? s.get(t) : void 0
    }
    function c() {
        return e ??= new Promise( (t, e) => {
            let r = indexedDB.open("flightdivision-replays-v1", 1);
            r.onupgradeneeded = () => {
                let t = r.result.createObjectStore("clips", {
                    keyPath: "key"
                });
                t.createIndex("used", "used"),
                t.createIndex("id", "id")
            }
            ,
            r.onsuccess = () => t(r.result),
            r.onerror = () => e(r.error),
            r.onblocked = () => e(Error("Replay cache unavailable"))
        }
        )
    }
    let d = {
        async read(t) {
            let e = await c();
            return new Promise( (r, i) => {
                let n = e.transaction("clips", "readonly").objectStore("clips").get(t);
                n.onsuccess = () => r(n.result),
                n.onerror = () => i(n.error)
            }
            )
        },
        async write(t) {
            if (t.bytes > 0x4000000)
                return;
            let e = await c();
            await new Promise( (r, i) => {
                let n = e.transaction("clips", "readwrite")
                  , a = n.objectStore("clips");
                a.put(t);
                let o = 0
                  , s = a.index("used").openCursor(null, "prev");
                s.onsuccess = () => {
                    let t = s.result;
                    t && ((o += t.value.bytes) > 0x4000000 && t.delete(),
                    t.continue())
                }
                ,
                n.oncomplete = () => r(),
                n.onerror = () => i(n.error),
                n.onabort = () => i(n.error)
            }
            )
        },
        async remove(t) {
            let e = await c();
            await new Promise( (r, i) => {
                let n = e.transaction("clips", "readwrite")
                  , a = n.objectStore("clips").index("id").openCursor(t);
                a.onsuccess = () => {
                    let t = a.result;
                    t && (t.delete(),
                    t.continue())
                }
                ,
                n.oncomplete = () => r(),
                n.onerror = () => i(n.error),
                n.onabort = () => i(n.error)
            }
            )
        }
    }
      , p = new class {
        persistence;
        maxBytes;
        listeners;
        memory;
        pending;
        epochs;
        writes;
        constructor(t=d, e=0x1000000) {
            this.persistence = t,
            this.maxBytes = e,
            this.listeners = new Set,
            this.memory = new Map,
            this.pending = new Map,
            this.epochs = new Map,
            this.writes = Promise.resolve()
        }
        onInvalidate(t) {
            this.listeners.add(t)
        }
        remember(t) {
            this.memory.delete(t.key),
            this.memory.set(t.key, t);
            let e = [...this.memory.values()].reduce( (t, e) => t + e.bytes, 0);
            for (let[t,r] of this.memory) {
                if (e <= this.maxBytes)
                    break;
                this.memory.delete(t),
                e -= r.bytes
            }
        }
        persist(t) {
            this.writes = this.writes.then(t, t).catch( () => {}
            )
        }
        invalidate(t) {
            for (let e of this.listeners)
                e(t);
            for (let[e,r] of (this.epochs.set(t, (this.epochs.get(t) ?? 0) + 1),
            this.memory))
                r.id === t && this.memory.delete(e);
            for (let e of this.pending.keys())
                JSON.parse(e)[1] === t && this.pending.delete(e);
            this.persist( () => this.persistence.remove(t))
        }
        async load(t, e, r, i, n) {
            let a = JSON.stringify([t, e, r])
              , o = this.pending.get(a);
            if (o)
                return o;
            let s = this.epochs.get(e) ?? 0
              , l = (async () => {
                await this.writes;
                let t = this.memory.get(a);
                if (!t)
                    try {
                        t = await this.persistence.read(a)
                    } catch {}
                let r = null;
                if (t)
                    try {
                        r = i(JSON.parse(t.json), t.bytes)
                    } catch {}
                if (!r) {
                    let o = await n()
                      , s = JSON.stringify(o)
                      , l = u(o) ?? new TextEncoder().encode(s).length;
                    if (!(r = i(o, l)))
                        throw Error("Recording is unavailable or invalid. Please retry.");
                    t = {
                        key: a,
                        id: e,
                        json: s,
                        bytes: l,
                        used: Date.now()
                    }
                }
                if ((this.epochs.get(e) ?? 0) !== s)
                    throw Error("Recording changed. Please retry.");
                return t = {
                    ...t,
                    used: Date.now()
                },
                this.remember(t),
                this.persist( () => this.persistence.write(t)),
                r
            }
            )();
            this.pending.set(a, l);
            try {
                return await l
            } finally {
                this.pending.get(a) === l && this.pending.delete(a)
            }
        }
    }
    ;
    t.s(["downloadedBytes", 0, u, "markDownloadedBytes", 0, l, "replayCache", 0, p], 840390);
    let m = "fd.ambient-download-budget.v1";
    class f extends Error {
        constructor() {
            super("Ambient recording download budget reached")
        }
    }
    class h {
        now;
        persistence;
        bytes;
        at;
        constructor(t=Date.now, e) {
            this.now = t,
            this.persistence = e,
            this.bytes = 8388608,
            this.at = t();
            try {
                const t = JSON.parse(e?.getItem(m) ?? "null");
                t && Number.isFinite(t.bytes) && Number.isFinite(t.at) && (this.bytes = Math.max(0, Math.min(8388608, t.bytes)),
                this.at = Math.min(this.at, t.at))
            } catch {}
        }
        remaining() {
            let t = this.now();
            return this.bytes = Math.min(8388608, this.bytes + 2097152 * Math.max(0, t - this.at) / 36e5),
            this.at = t,
            this.bytes
        }
        consume(t) {
            let e = this.remaining();
            this.bytes = Math.max(0, e - t);
            try {
                this.persistence?.setItem(m, JSON.stringify({
                    bytes: this.bytes,
                    at: this.at
                }))
            } catch {}
            if (t > e)
                throw new f
        }
    }
    function y() {
        if (!r) {
            let t;
            try {
                t = "u" < typeof sessionStorage ? void 0 : sessionStorage
            } catch {}
            r = new h(Date.now,t)
        }
        return r
    }
    let g = () => y().remaining() >= 262144;
    async function w(t, e) {
        if (!(0,
        a.isReplayId)(t) || !e.length || !e.every(n.isReplayFrame))
            throw Error("Invalid replay.");
        let r = (0,
        i.createClient)()
          , {data: {user: s}, error: l} = await r.auth.getUser();
        if (l || !s)
            throw Error("Not signed in.");
        let u = (0,
        o.replayStoragePayloads)(e)
          , c = `${t}/${crypto.randomUUID()}`
          , d = `${c}.json`
          , p = `${c}.ambient.json`
          , m = r.storage.from(o.REPLAY_BUCKET);
        for (let[t,e] of [[d, u.original], [p, u.ambient]]) {
            let r = new Blob([e],{
                type: "application/json"
            });
            if (r.size > o.REPLAY_OBJECT_LIMIT)
                throw Error("This clip is too long to save. Trim it shorter.");
            let {error: i} = await m.upload(t, r, {
                contentType: "application/json",
                cacheControl: "3600",
                upsert: !1
            });
            if (i)
                throw i
        }
        return {
            frames: null,
            storage_path: d,
            ambient_storage_path: p,
            path_samples: u.samples
        }
    }
    async function b(t, e, r) {
        let i;
        if ("ambient" === e && !g())
            throw new f;
        let n = new URLSearchParams({
            kind: e,
            ...r ? {
                revision: r
            } : {}
        })
          , a = await fetch(`/api/sim/replays/${encodeURIComponent(t)}?${n}`, {
            cache: "no-store",
            signal: AbortSignal.timeout(15e3)
        });
        if (404 === a.status)
            return null;
        if (!a.ok)
            throw Error("Recording is unavailable. Please retry.");
        let o = await a.json()
          , s = t => t && "object" == typeof t && 1 === t.format && Array.isArray(t.frames) ? {
            format: 1,
            frames: t.frames
        } : null
          , c = async () => {
            if ("ambient" === e && !g())
                throw new f;
            let t = await fetch(o.url, {
                signal: AbortSignal.timeout(3e4)
            });
            if (!t.ok)
                throw Error("Recording download failed. Please retry.");
            let r = await v(t, "ambient" === e);
            return i = u(r),
            r
        }
          , d = o.metadata?.updated_at
          , m = r || "string" != typeof d ? s(await c()) : await p.load(`payload-${e}-v1`, t, d, s, c);
        if (!m)
            throw Error("Invalid recording.");
        let h = {
            ...o.metadata,
            frames: m.frames,
            format: 1
        };
        return void 0 === i ? h : l(h, i)
    }
    async function v(t, e) {
        let r = e ? y() : void 0
          , i = Number(t.headers.get("content-length"))
          , n = t.body?.getReader();
        if (!n)
            throw Error("Invalid recording.");
        let a = !1;
        try {
            if (i > o.REPLAY_OBJECT_LIMIT)
                throw Error("Recording exceeds the download limit.");
            r && i > r.remaining() && r.consume(i);
            let t = []
              , e = 0;
            for (; ; ) {
                let i = await n.read();
                if (i.done)
                    break;
                if (e += i.value.byteLength,
                r?.consume(i.value.byteLength),
                e > o.REPLAY_OBJECT_LIMIT)
                    throw Error("Recording exceeds the download limit.");
                t.push(i.value)
            }
            a = !0;
            let s = new Uint8Array(e)
              , u = 0;
            for (let e of t)
                s.set(e, u),
                u += e.byteLength;
            return l(JSON.parse(new TextDecoder().decode(s)), e)
        } finally {
            a || await n.cancel().catch( () => {}
            ),
            n.releaseLock()
        }
    }
    t.s(["AmbientDownloadBudgetError", 0, f, "ambientDownloadBudget", 0, y, "canDownloadAmbientReplay", 0, g], 502478),
    t.s(["downloadReplayPayload", 0, b, "uploadReplayPayloads", 0, w], 290840)
}
, 983040, t => {
    "use strict";
    let e, r;
    class i {
        capacity;
        items;
        start;
        length;
        constructor(t) {
            if (this.capacity = t,
            this.start = 0,
            this.length = 0,
            !Number.isInteger(t) || t < 1)
                throw Error("Invalid ring capacity");
            this.items = Array(t)
        }
        at(t) {
            return t < 0 && (t += this.length),
            t < 0 || t >= this.length ? void 0 : this.items[(this.start + t) % this.capacity]
        }
        shift() {
            if (!this.length)
                return;
            let t = this.items[this.start];
            return this.items[this.start] = void 0,
            this.start = (this.start + 1) % this.capacity,
            this.length--,
            t
        }
        push(t) {
            let e = this.length === this.capacity ? this.shift() : void 0;
            return this.items[(this.start + this.length) % this.capacity] = t,
            this.length++,
            e
        }
        toArray() {
            return Array.from({
                length: this.length
            }, (t, e) => this.at(e))
        }
    }
    var n = t.i(190072)
      , a = t.i(12746);
    function o(t, e, r, i) {
        return [t - e + r - i, t + e + r + i, t - e - r + i, t + e - r - i]
    }
    let s = 1 / 30
      , l = {
        current: void 0
    }
      , u = {
        current: void 0
    }
      , c = new i(2e4)
      , d = 0
      , p = !1
      , m = s
      , f = 0
      , h = 0
      , y = 0
      , g = new i(512)
      , w = 0
      , b = {
        current: void 0
    };
    function v(t, e, r) {
        if (0 === t.length)
            return {
                frames: [],
                duration: 0
            };
        let i = Math.max(0, Math.min(e, r))
          , a = Math.max(i, r)
          , o = a - i
          , s = 0;
        for (; s < t.length - 1 && t[s + 1].t < i; )
            s++;
        let l = t.length - 1;
        for (; l > s && t[l - 1].t > a; )
            l--;
        let u = e => {
            let r = I(t, e, 0)
              , i = t[r]
              , a = t[r + 1] ?? i
              , o = R(t, e, r)
              , s = M(i);
            s.t = e,
            s.crowdRoutes = (function(t, e) {
                for (let r = e; r >= 0; r--)
                    if (void 0 !== t[r].crowdRoutes)
                        return t[r].crowdRoutes
            }
            )(t, r)?.map(t => ({
                ...t,
                a: [...t.a],
                b: [...t.b]
            })),
            void 0 !== i.crowdTime && (s.crowdTime = i.crowdTime + ((a.crowdTime ?? i.crowdTime) - i.crowdTime) * o),
            s.position = i.position.map( (t, e) => t + (a.position[e] - t) * o),
            s.rotation = new n.Quaternion(...i.rotation).slerp(new n.Quaternion(...a.rotation), o).toArray();
            let l = _(t, e, r);
            l && Object.assign(s, l),
            i.motors && (s.motors = S(t, e, r, 0));
            let u = A(t, e, r);
            void 0 !== u && (s.driftTime = u);
            let c = k(t, e, r);
            return void 0 !== c && (s.prefabTime = c),
            s
        }
          , c = [u(i), ...t.slice(s, l + 1).filter(t => t.t > i && t.t < a).map(M)];
        a > i && c.push(u(a));
        let d = c.map(t => ({
            ...t,
            t: t.t - i
        }));
        return 0 === d.length ? {
            frames: [],
            duration: 0
        } : {
            frames: d,
            duration: o
        }
    }
    function M(t) {
        return {
            ...t.droneId ? {
                droneId: t.droneId,
                droneSkin: t.droneSkin,
                voltageFactor: t.voltageFactor
            } : {},
            t: t.t,
            ...void 0 !== t.segment ? {
                segment: t.segment
            } : {},
            ...void 0 !== t.crowdTime ? {
                crowdTime: t.crowdTime
            } : {},
            ...void 0 !== t.crowdRoutes ? {
                crowdRoutes: t.crowdRoutes.map(t => ({
                    ...t,
                    a: [...t.a],
                    b: [...t.b]
                }))
            } : {},
            ...void 0 !== t.driftTime ? {
                driftTime: t.driftTime
            } : {},
            ...void 0 !== t.prefabTime ? {
                prefabTime: t.prefabTime
            } : {},
            position: [t.position[0], t.position[1], t.position[2]],
            rotation: [t.rotation[0], t.rotation[1], t.rotation[2], t.rotation[3]],
            ...void 0 !== t.throttle ? {
                throttle: t.throttle,
                roll: t.roll,
                pitch: t.pitch,
                yaw: t.yaw
            } : {},
            ...t.motors ? {
                motors: [t.motors[0], t.motors[1], t.motors[2], t.motors[3]]
            } : {}
        }
    }
    function I(t, e, r) {
        if (t.length < 2)
            return 0;
        let i = Math.min(Math.max(r, 0), t.length - 2);
        for (; i > 0 && t[i].t > e; )
            i--;
        for (; i < t.length - 2 && t[i + 1].t <= e; )
            i++;
        return i
    }
    function R(t, e, r) {
        let i = t[r]
          , n = t[r + 1] ?? i;
        if (!i || i.segment !== n.segment)
            return 0;
        let a = n.t - i.t;
        return a > 0 ? Math.min(1, Math.max(0, (e - i.t) / a)) : 0
    }
    function _(t, e, r) {
        let i = t[r];
        if (!i || void 0 === i.throttle)
            return null;
        let n = t[r + 1] ?? i
          , a = n.t - i.t
          , o = a > 0 ? Math.min(1, Math.max(0, (e - i.t) / a)) : 0
          , s = (t, e) => (t ?? 0) + ((e ?? t ?? 0) - (t ?? 0)) * o;
        return {
            throttle: s(i.throttle, n.throttle),
            roll: s(i.roll, n.roll),
            pitch: s(i.pitch, n.pitch),
            yaw: s(i.yaw, n.yaw)
        }
    }
    function S(t, e, r, i) {
        let n = t[r]
          , s = t[r + 1] ?? n;
        if (!n)
            return [i, i, i, i];
        let l = s.t - n.t
          , u = l > 0 ? Math.min(1, Math.max(0, (e - n.t) / l)) : 0;
        if (n.motors && s.motors) {
            var c, d, p, m;
            return [(c = n.motors[0],
            c + (s.motors[0] - c) * u), (d = n.motors[1],
            d + (s.motors[1] - d) * u), (p = n.motors[2],
            p + (s.motors[2] - p) * u), (m = n.motors[3],
            m + (s.motors[3] - m) * u)]
        }
        if (n.motors)
            return [n.motors[0], n.motors[1], n.motors[2], n.motors[3]];
        let f = _(t, e, r);
        return f ? function(t) {
            let e = (0,
            a.clamp01)(t.throttle)
              , r = t.roll
              , i = t.pitch
              , n = t.yaw;
            if (t.airMode) {
                let t = o(0, r, i, n)
                  , s = Math.max(t[0], t[1], t[2], t[3])
                  , l = Math.min(t[0], t[1], t[2], t[3])
                  , u = s - l;
                if (u > 1) {
                    let e = 1 / u;
                    r *= e,
                    i *= e,
                    n *= e,
                    s = Math.max((t = o(0, r, i, n))[0], t[1], t[2], t[3]),
                    l = Math.min(t[0], t[1], t[2], t[3])
                }
                let c = (0,
                a.clamp)(e, -l, 1 - s);
                return [(0,
                a.clamp01)(c + t[0]), (0,
                a.clamp01)(c + t[1]), (0,
                a.clamp01)(c + t[2]), (0,
                a.clamp01)(c + t[3])]
            }
            let s = Math.min(e, 1 - .12 * Math.max(Math.abs(r), Math.abs(i), Math.abs(n)))
              , l = o(s, r, i, n)
              , u = Math.max(l[0], l[1], l[2], l[3])
              , c = Math.min(l[0], l[1], l[2], l[3]);
            if (u > 1 && u > s + 1e-6) {
                let t = (1 - s) / (u - s);
                r *= t,
                i *= t,
                n *= t,
                u = Math.max((l = o(s, r, i, n))[0], l[1], l[2], l[3]),
                c = Math.min(l[0], l[1], l[2], l[3])
            }
            if (c < 0 && s > 1e-6) {
                let t = s / (s - c);
                r *= t,
                i *= t,
                n *= t,
                l = o(s, r, i, n)
            }
            return [(0,
            a.clamp01)(l[0]), (0,
            a.clamp01)(l[1]), (0,
            a.clamp01)(l[2]), (0,
            a.clamp01)(l[3])]
        }({
            ...f,
            airMode: !0
        }) : [i, i, i, i]
    }
    let T = {
        t: 0,
        trimStart: 0,
        trimEnd: 0,
        playing: !0,
        scrubbing: !1
    };
    function A(t, e, r) {
        let i = t[r]
          , n = t[r + 1] ?? i;
        if (i?.driftTime !== void 0)
            return void 0 === n.driftTime || n.driftTime < i.driftTime ? i.driftTime : i.driftTime + (n.driftTime - i.driftTime) * R(t, e, r)
    }
    function k(t, e, r) {
        let i = t[r]
          , n = t[r + 1] ?? i;
        if (i?.prefabTime !== void 0)
            return void 0 === n.prefabTime || n.prefabTime < i.prefabTime ? i.prefabTime : i.prefabTime + (n.prefabTime - i.prefabTime) * R(t, e, r)
    }
    t.s(["SESSION_REPLAY_MAX_DURATION", 0, 300, "advanceReplayClock", 0, function(t) {
        p && Number.isFinite(t) && !(t <= 0) && (!(h <= 0) || !(c.length >= 2e4)) && (f += t,
        m += t,
        w += t)
    }
    , "clearReplay", 0, function() {
        c = new i(2e4),
        d = 0,
        e = void 0,
        p = !1,
        f = 0,
        h = 0,
        g = new i(512),
        w = 0,
        y = 0,
        r = void 0,
        m = s
    }
    , "cloneFrames", 0, function(t) {
        return t.map(M)
    }
    , "findReplayIndex", 0, I, "getImpactApproach", 0, function(t, e=1.5) {
        let r = g.length ? g.toArray() : c.toArray().filter(t => t.segment === y)
          , i = r.at(-1)?.t ?? f
          , n = {
            ...r.at(-1),
            ...t,
            t: i + 1 / 240,
            segment: y,
            crowdRoutes: b.current?.routes
        }
          , a = [...r, n]
          , o = v(a, Math.max(a[0]?.t ?? 0, n.t - e), n.t);
        return o.frames[0] && (o.frames[0].crowdRoutes = b.current?.routes.map(t => ({
            ...t,
            a: [...t.a],
            b: [...t.b]
        }))),
        o
    }
    , "getReplay", 0, function() {
        let t = c.toArray().map(t => ({
            ...M(t),
            t: t.t - d
        }));
        return t[0] && void 0 === t[0].crowdRoutes && void 0 !== e && (t[0].crowdRoutes = e.map(t => ({
            ...t,
            a: [...t.a],
            b: [...t.b]
        }))),
        {
            frames: t,
            duration: t.at(-1)?.t ?? 0
        }
    }
    , "liveCrowdTrack", 0, b, "liveDriftClock", 0, l, "livePrefabClock", 0, u, "markReplayDiscontinuity", 0, function() {
        y++,
        g = new i(512),
        w = 0,
        r = void 0
    }
    , "recordReplayFrame", 0, function(t, i, n, a, o, v, M) {
        if (!p)
            return;
        let I = h <= 0 && c.length >= 2e4;
        I || (f += i,
        m += i,
        w += i);
        let R = {
            ...M,
            t: f,
            segment: y,
            ...b.current ? {
                crowdTime: b.current.time
            } : {},
            ...void 0 !== l.current ? {
                driftTime: l.current
            } : {},
            ...void 0 !== u.current ? {
                prefabTime: u.current
            } : {},
            position: [n.x, n.y, n.z],
            rotation: [a.x, a.y, a.z, a.w],
            ...o ? {
                throttle: o.throttle,
                roll: o.roll,
                pitch: o.pitch,
                yaw: o.yaw
            } : {},
            ...v ? {
                motors: [v[0], v[1], v[2], v[3]]
            } : {}
        };
        if (I)
            return;
        if (w + 1e-9 >= 1 / 120)
            for (w = 0,
            g.push(R); g.length && g.at(0).t < f - 2.5; )
                g.shift();
        if (m + 1e-9 < s)
            return;
        m = 0;
        let _ = b.current?.routes;
        _ !== r && (R.crowdRoutes = _ ?? [],
        r = _);
        let S = c.push(R);
        if (S && (e = S.crowdRoutes ?? e,
        d = c.at(0).t),
        h > 0) {
            let t = f - h;
            for (; c.length > 1 && c.at(0).t < t; )
                e = c.shift().crowdRoutes ?? e,
                d = c.at(0).t
        }
    }
    , "replayEquipment", 0, function(t) {
        return {
            id: t?.droneId ?? "freestyle",
            skin: t?.droneSkin ?? "factory",
            voltageFactor: t?.voltageFactor ?? 1
        }
    }
    , "replayFlightEnd", 0, function(t, e) {
        let r = Math.min(Math.max(e, 0), t.length - 1);
        for (; r + 1 < t.length && !function(t, e) {
            if (t.segment !== e.segment)
                return !0;
            let[r,i,n] = t.position
              , [a,o,s] = e.position;
            return Math.hypot(a - r, o - i, s - n) > 20
        }(t[r], t[r + 1]); )
            r++;
        return r
    }
    , "replayPlayback", 0, T, "replaySampleBlend", 0, R, "resetReplayPlayback", 0, function(t) {
        T.t = t.t ?? t.trimStart,
        T.trimStart = t.trimStart,
        T.trimEnd = t.trimEnd,
        T.playing = t.playing ?? !0,
        T.scrubbing = !1
    }
    , "resolveReplayMotors", 0, S, "sampleReplayDriftTime", 0, A, "sampleReplayPrefabTime", 0, k, "sampleReplaySticks", 0, _, "startReplayRecording", 0, function(t) {
        t?.clear !== !1 && (c = new i(2e4),
        d = 0,
        e = void 0,
        f = 0,
        y = 0,
        g = new i(512),
        w = 0,
        r = void 0),
        h = t?.maxDuration ?? 0,
        p = !0,
        m = s
    }
    , "stopReplayRecording", 0, function() {
        p = !1
    }
    , "trimReplay", 0, v], 983040)
}
, 593922, t => {
    "use strict";
    var e = t.i(11871)
      , r = t.i(475127);
    t.s(["droneEntryRadius", 0, function(t) {
        let i = e.DRONE_PROFILES[t];
        return Math.max(r.hypot(i.reachX, i.reachZ) + i.propRadius, r.hypot(...i.halfExtents)) + .015
    }
    , "entersRaceMarker", 0, function(t, e, r, i) {
        let n = t.radius - i
          , a = t.position[1] + i
          , o = t.position[1] + t.height - i;
        if (n <= 1e-9 || o - a <= 1e-9)
            return !1;
        let s = 0
          , l = 1
          , u = r.y - e.y;
        if (1e-9 > Math.abs(u)) {
            if (e.y < a || e.y > o)
                return !1
        } else {
            let t = (a - e.y) / u
              , r = (o - e.y) / u;
            if ((s = Math.max(s, Math.min(t, r))) > (l = Math.min(l, Math.max(t, r))))
                return !1
        }
        let c = e.x - t.position[0]
          , d = e.z - t.position[2]
          , p = r.x - e.x
          , m = r.z - e.z
          , f = p * p + m * m
          , h = f > 1e-12 ? Math.max(s, Math.min(l, -(c * p + d * m) / f)) : s
          , y = c + p * h
          , g = d + m * h;
        return y * y + g * g <= n * n
    }
    , "isRaceMarker", 0, function(t) {
        return !(!t || "object" != typeof t || Array.isArray(t)) && Object.keys(t).every(t => ["position", "radius", "height"].includes(t)) && Array.isArray(t.position) && 3 === t.position.length && t.position.every(t => Number.isFinite(t) && 1e5 >= Math.abs(t)) && Number.isFinite(t.radius) && t.radius >= .8 && t.radius <= 1e4 && Number.isFinite(t.height) && t.height >= .8 && t.height <= 1e4
    }
    , "markerForCourse", 0, function(t) {
        if (t.raceMarker)
            return t.raceMarker;
        let[e,i,n] = t.spawn.position
          , a = t.spawn.yaw ?? 0;
        return {
            position: [e + 5 * r.cos(a), Math.max(0, i - .2), n - 5 * r.sin(a)],
            radius: 3.5,
            height: 3
        }
    }
    , "outsideRaceMarker", 0, function(t, e, i, n=.5) {
        let a = i + n;
        return r.hypot(e.x - t.position[0], e.z - t.position[2]) > t.radius + a + 1e-9 || e.y < t.position[1] - a - 1e-9 || e.y > t.position[1] + t.height + a + 1e-9
    }
    ])
}
]);
