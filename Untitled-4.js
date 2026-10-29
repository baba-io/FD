(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 579612, e => {
    "use strict";
    class i extends Error {
        status;
        payload;
        constructor(e, i, t) {
            super(e),
            this.status = i,
            this.payload = t,
            this.name = "ApiError"
        }
        text(e) {
            let i = this.payload[e];
            return "string" == typeof i ? i : null
        }
    }
    async function t(e, a, n, s=2e4) {
        let r;
        try {
            r = await fetch(e, {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(a),
                signal: AbortSignal.timeout(s)
            })
        } catch {
            throw new i(n,0,{})
        }
        let o = await r.json().catch( () => null);
        if (!r.ok)
            throw new i("string" == typeof o?.error ? o.error : n,r.status,o ?? {});
        return o
    }
    e.s(["ApiError", 0, i, "postJson", 0, t])
}
, 552696, e => {
    "use strict";
    e.s(["BLOCKED_CHAT_HOLD_MS", 0, 3e3, "BLOCKED_CHAT_LINE", 0, "Easy. That kind of word doesn't fly here.", "CHAT_LENGTH_MESSAGE", 0, "Use 1–400 characters.", "CHAT_LINE_MESSAGE", 0, "Use a single line of text.", "CHAT_LINKS_MESSAGE", 0, "Links are not allowed in player chat.", "CHAT_MAX_LENGTH", 0, 400, "MAP_NAME_LENGTH_MESSAGE", 0, "Map names must be between 1 and 80 characters.", "MAP_NAME_MAX_LENGTH", 0, 80, "NAME_REFUSED", 0, "That name isn't allowed. Try another."])
}
, 698072, e => {
    "use strict";
    var i = e.i(353198)
      , t = e.i(593922)
      , a = e.i(937769)
      , n = e.i(629601)
      , s = e.i(483242);
    let r = "id,name,map_id,bounds,pits,drones,sort_order,competitive_revision"
      , o = `${r},entrance`;
    async function l(e) {
        let i = await e(o);
        return (0,
        a.missingColumn)(i.error) ? await e(r) : i
    }
    let d = e => Array.isArray(e) && 3 === e.length && e.every(Number.isFinite)
      , p = e => !!e && "object" == typeof e && !Array.isArray(e);
    e.s(["parseArenaRow", 0, function(e) {
        var a;
        if (!p(e) || "string" != typeof e.id || "string" != typeof e.name || "string" != typeof e.map_id || !e.map_id.startsWith("official:") || null != e.entrance && !(0,
        t.isRaceMarker)(e.entrance))
            return null;
        let r = p(a = e.bounds) && d(a.position) && Number.isFinite(a.yaw) && d(a.size) ? {
            position: a.position,
            yaw: a.yaw,
            size: a.size
        } : null
          , o = Array.isArray(e.pits) && e.pits.length === s.ARENA_TEAMS.length ? s.ARENA_TEAMS.map( (i, t) => {
            var a;
            return a = e.pits[t],
            p(a) && a.team === i && d(a.position) && Number.isFinite(a.yaw) ? {
                team: i,
                position: a.position,
                yaw: a.yaw
            } : null
        }
        ) : []
          , l = Array.isArray(e.drones) ? e.drones : [];
        if (!r || 2 !== o.length || o.some(e => !e) || !l.every(e => i.DRONE_IDS.includes(e)) || new Set(l).size !== l.length)
            return null;
        let m = {
            id: e.id,
            name: e.name,
            mapId: e.map_id,
            bounds: r,
            pits: o,
            drones: l,
            competitiveRevision: Math.max(1, e.competitive_revision ?? 1),
            ...e.entrance ? {
                entrance: e.entrance
            } : {}
        };
        return (0,
        n.storedArenaIssues)(m).length ? null : m
    }
    , "selectArenas", 0, l])
}
, 28276, e => {
    "use strict";
    var i = e.i(269176)
      , t = e.i(760974)
      , a = e.i(404961)
      , n = e.i(998494)
      , s = e.i(424028)
      , r = e.i(321390);
    let o = {
        mapId: "gridworks",
        frames: [{
            t: 0,
            position: [48, .2, 60],
            rotation: [0, 0, 0, 1]
        }, {
            t: 1,
            position: [48, .2, 60],
            rotation: [0, 0, 0, 1]
        }],
        duration: 1,
        camera: i.DEFAULT_CHASE_CAMERA
    }
      , l = []
      , d = []
      , p = []
      , m = []
      , c = new Map
      , f = null
      , u = new Map;
    function g(e) {
        return e.map(e => (0,
        t.cloneSpawn)(e))
    }
    function h(e) {
        return e ? d.find(i => i.id === e) ?? null : null
    }
    e.s(["getArenaDoc", 0, function(e) {
        return e ? m.find(i => i.id === e) ?? null : null
    }
    , "getCatalog", 0, function() {
        return {
            courseOrder: l.map(e => e.id),
            lessonOrder: d.map(e => e.id),
            timeAttackOrder: p.filter(e => !(0,
            n.isPersonalMapId)(e.mapId)).map(e => e.id)
        }
    }
    , "getCourseDoc", 0, function(e) {
        return e ? l.find(i => i.id === e) ?? null : null
    }
    , "getLessonDoc", 0, h, "getMenuReplayId", 0, function() {
        return f
    }
    , "getMenuShowcase", 0, function() {
        let e = f ? c.get(f) : null;
        return e ? {
            mapId: e.mapId,
            frames: e.frames,
            duration: e.duration,
            camera: e.camera
        } : o
    }
    , "getReplayById", 0, function(e) {
        return e ? c.get(e) ?? null : null
    }
    , "getTimeAttackDoc", 0, function(e) {
        return e ? p.find(i => i.id === e) ?? null : null
    }
    , "hydrateCurriculum", 0, function(e) {
        l = e.courses.slice(),
        d = e.lessons.slice(),
        p = (e.timeAttacks ?? []).slice(),
        c = new Map(e.replays.map(e => [e.id, e])),
        f = e.menuReplayId,
        (0,
        s.invalidateLessonWorldCache)()
    }
    , "hydrateMapSpawns", 0, function(e) {
        for (let i of (u = new Map,
        e))
            u.set(i.mapId, g(i.spawns))
    }
    , "knownMapSpawns", 0, function(e) {
        let i = u.get(e);
        return i ? g(i) : (0,
        a.hasMap)(e) ? g((0,
        a.mapById)(e).spawns) : null
    }
    , "listArenas", 0, function() {
        return m
    }
    , "listCourses", 0, function() {
        return l
    }
    , "listLessons", 0, function() {
        return d
    }
    , "listMapSpawns", 0, function(e) {
        let i = u.get(e);
        return i ? g(i) : g((0,
        a.mapById)(e).spawns)
    }
    , "listTimeAttacks", 0, function() {
        return p
    }
    , "patchArenaDoc", 0, function(e) {
        let i = m.findIndex(i => i.id === e.id);
        m = i >= 0 ? m.map( (t, a) => a === i ? e : t) : [...m, e]
    }
    , "patchCourseDoc", 0, function(e) {
        let i = l.findIndex(i => i.id === e.id);
        l = i >= 0 ? l.map( (t, a) => a === i ? e : t) : [...l, e]
    }
    , "patchLessonDoc", 0, function(e) {
        let i = d.findIndex(i => i.id === e.id);
        d = i >= 0 ? d.map( (t, a) => a === i ? e : t) : [...d, e],
        (0,
        s.invalidateLessonWorldCache)(e.id)
    }
    , "patchMapSpawns", 0, function(e, i) {
        (u = new Map(u)).set(e, g(i))
    }
    , "patchReplay", 0, function(e) {
        (c = new Map(c)).set(e.id, e)
    }
    , "patchTimeAttackDoc", 0, function(e) {
        let i = p.findIndex(i => i.id === e.id);
        p = i >= 0 ? p.map( (t, a) => a === i ? e : t) : [...p, e]
    }
    , "removeArenaDoc", 0, function(e) {
        m = m.filter(i => i.id !== e)
    }
    , "removeCourseDoc", 0, function(e) {
        l = l.filter(i => i.id !== e)
    }
    , "removeLessonDoc", 0, function(e) {
        d = d.filter(i => i.id !== e),
        l = l.map(i => ({
            ...i,
            lessonIds: i.lessonIds.filter(i => i !== e)
        })),
        (0,
        s.invalidateLessonWorldCache)(e)
    }
    , "removeReplay", 0, function(e) {
        c.has(e) && ((c = new Map(c)).delete(e),
        f === e && (f = null))
    }
    , "removeTimeAttackDoc", 0, function(e) {
        p = p.filter(i => i.id !== e)
    }
    , "resetCurriculum", 0, function() {
        l = [],
        d = [],
        p = [],
        m = [],
        c = new Map,
        f = null,
        u = new Map,
        (0,
        r.setCurriculumViewerIsAdmin)(!1)
    }
    , "setCatalogOrder", 0, function(e) {
        let i = new Map(l.map(e => [e.id, e]))
          , t = new Map(d.map(e => [e.id, e]))
          , a = []
          , n = new Set;
        for (let t of e.courseOrder) {
            let e = i.get(t);
            !e || n.has(t) || (n.add(t),
            a.push(e))
        }
        for (let e of l)
            n.has(e.id) || a.push(e);
        let s = []
          , r = new Set;
        for (let i of e.lessonOrder) {
            let e = t.get(i);
            !e || r.has(i) || (r.add(i),
            s.push(e))
        }
        for (let e of d)
            r.has(e.id) || s.push(e);
        let o = new Map(p.map(e => [e.id, e]))
          , m = []
          , c = new Set;
        for (let i of e.timeAttackOrder ?? []) {
            let e = o.get(i);
            !e || c.has(i) || (c.add(i),
            m.push(e))
        }
        for (let e of p)
            c.has(e.id) || m.push(e);
        l = a,
        d = s,
        p = m
    }
    , "setMenuReplayId", 0, function(e) {
        f = e
    }
    , "stepRecordingFor", 0, function(e, i) {
        let t = h(e)
          , a = t?.steps.find(e => e.id === i)
          , n = a?.replayId ? c.get(a.replayId) : null;
        return n ? {
            frames: n.frames,
            duration: n.duration
        } : null
    }
    ])
}
, 760974, e => {
    "use strict";
    var i = e.i(483359);
    let t = ["#ff4f45", "#37c8dd", "#ffb52e", "#74d94f"]
      , a = [5, 3.4];
    function n(e) {
        return t[e % t.length]
    }
    function s(e, i) {
        let t = i.filter(i => i.id.startsWith(e)).length + 1
          , a = `${e}${t}`
          , n = new Set(i.map(e => e.id));
        for (; n.has(a); )
            t += 1,
            a = `${e}${t}`;
        return a
    }
    e.s(["DEFAULT_GATE_SIZE", 0, a, "DEFAULT_LAND_RADIUS", 0, 4, "DUPLICATE_OFFSET_M", 0, 2, "EDITOR_SPAWN_ID", 0, "spawn", "PRACTICE_OBJECTIVE_COLORS", 0, t, "clonePractice", 0, function(e) {
        return {
            instruction: e.instruction,
            objectives: e.objectives.map(e => "gate" === e.kind ? {
                ...e,
                position: [...e.position],
                rotation: [...e.rotation],
                size: [...e.size]
            } : {
                ...e,
                position: [...e.position]
            })
        }
    }
    , "cloneSpawn", 0, function(e) {
        return {
            ...e,
            position: [...e.position]
        }
    }
    , "duplicatePracticeObjective", 0, function(e) {
        let t = function(e) {
            if ("gate" !== e.kind)
                return [2, 0, 0];
            let {normal: t} = (0,
            i.gateBasis)(e);
            return [-(2 * t[0]), -(2 * t[1]), -(2 * t[2])]
        }(e.source)
          , a = [e.source.position[0] + t[0], e.source.position[1] + t[1], e.source.position[2] + t[2]];
        return "gate" === e.source.kind ? {
            ...e.source,
            id: s("gate-", e.objectives),
            position: a,
            rotation: [...e.source.rotation],
            size: [...e.source.size]
        } : {
            ...e.source,
            id: s("land-", e.objectives),
            position: a
        }
    }
    , "makeGateObjective", 0, function(e) {
        return {
            kind: "gate",
            id: s("gate-", e.objectives),
            color: n(e.objectives.length),
            position: [...e.position],
            rotation: e.rotation ? [...e.rotation] : [0, 0, 0],
            size: [...a]
        }
    }
    , "makeLandObjective", 0, function(e) {
        return {
            kind: "land",
            id: s("land-", e.objectives),
            color: n(e.objectives.length),
            position: [...e.position],
            radius: 4
        }
    }
    , "objectiveTitle", 0, function(e) {
        return "land" === e.kind ? "Landing" : "Gate"
    }
    ])
}
, 424028, e => {
    "use strict";
    var i = e.i(632526)
      , t = e.i(404961);
    let a = new Map;
    e.s(["invalidateLessonWorldCache", 0, function(e) {
        e ? a.delete(e) : a.clear()
    }
    , "lessonFlightWorld", 0, function(e) {
        return {
            ...e,
            boxes: [],
            prisms: [],
            gates: [],
            props: [],
            editorDocument: void 0
        }
    }
    , "worldForLesson", 0, function(e) {
        let n = a.get(e.id);
        if (n)
            return n;
        let s = (0,
        i.worldForMap)((0,
        t.resolveMap)(e.mapId))
          , r = e.hideMapGates ?? !0
          , o = r ? s.boxes.filter(e => "gate" !== e.kind) : [...s.boxes]
          , l = r ? [] : [...s.gates]
          , d = {
            ...s,
            boxes: o,
            gates: l,
            spawns: [e.spawn, ...s.spawns]
        };
        return a.set(e.id, d),
        d
    }
    ])
}
, 49925, e => {
    "use strict";
    var i = e.i(920755)
      , t = e.i(424028)
      , a = e.i(622803)
      , n = e.i(373636)
      , s = e.i(35680)
      , r = e.i(391775)
      , o = e.i(937769)
      , l = e.i(28276)
      , d = e.i(284853);
    let p = null
      , m = 0
      , c = null
      , f = null;
    function u(e) {
        (0,
        l.patchMapSpawns)("gridworks", e.spawns);
        let i = new Set(e.attacks.map(e => e.id));
        for (let e of (0,
        l.listTimeAttacks)())
            "gridworks" !== e.mapId || i.has(e.id) || (0,
            l.removeTimeAttackDoc)(e.id);
        e.attacks.forEach(l.patchTimeAttackDoc)
    }
    function g() {
        f && u(f),
        f = null,
        n.usePublishedGridworks.setState({
            draftRevision: null
        }),
        w(c)
    }
    async function h(e) {
        if ("gridworks" !== e.mapId)
            throw Error("Only the canonical map supports admin drafts.");
        let t = a.documentSchema.parse(e)
          , o = (0,
        s.personalMapLimitError)(t);
        if (o)
            throw Error(o);
        let {data: d, error: m} = await (0,
        i.createClient)().rpc("save_gridworks_draft", {
            p_document: t,
            p_revision: n.usePublishedGridworks.getState().draftRevision,
            p_base_revision: p
        });
        if (m)
            throw Error("23505" === m.code ? "Another admin saved a draft. Reload before saving; your local work is preserved." : m.message);
        if ("number" != typeof d)
            throw Error("Draft could not be saved.");
        f ??= {
            spawns: (0,
            l.listMapSpawns)("gridworks"),
            attacks: (0,
            l.listTimeAttacks)().filter(e => "gridworks" === e.mapId),
            arenas: []
        },
        t.nodes.some(e => e.entity?.kind === "folder") && u((0,
        r.gameplayPayload)(t)),
        n.usePublishedGridworks.setState({
            draftRevision: d
        }),
        w(t)
    }
    async function v() {
        let {data: e, error: t} = await (0,
        i.createClient)().rpc("discard_gridworks_draft", {
            p_revision: n.usePublishedGridworks.getState().draftRevision
        });
        if (t)
            throw Error(t.message);
        if (!0 !== e)
            throw Error("Draft could not be discarded.");
        g();
        try {
            localStorage.removeItem("fd.gridworks-editor.draft.v1")
        } catch {}
        await b(),
        c?.nodes.some(e => e.entity?.kind === "folder") && u((0,
        r.gameplayPayload)(c))
    }
    function w(e) {
        (0,
        t.invalidateLessonWorldCache)(),
        n.usePublishedGridworks.setState(i => ({
            document: e,
            revision: i.revision + 1
        }))
    }
    function y(e, i) {
        m++,
        p = i,
        c = e,
        f = null,
        n.usePublishedGridworks.setState({
            draftRevision: null
        }),
        w(c)
    }
    async function b(e= () => !0) {
        let t = ++m
          , {data: n, error: s} = await (0,
        i.createClient)().from("sim_map_layouts").select("document, revision").eq("map_id", "gridworks").abortSignal(AbortSignal.timeout(15e3)).maybeSingle();
        if (e() && t === m) {
            if (s) {
                if ("PGRST205" === s.code || "42P01" === s.code)
                    return;
                throw Error(`Gridworks could not load: ${s.message}`)
            }
            y(n ? a.documentSchema.parse(n.document) : null, n?.revision ?? null)
        }
    }
    async function M(e) {
        if ("gridworks" !== e.mapId)
            throw Error("Only Gridworks can be saved here.");
        let t = a.documentSchema.parse(null === n.usePublishedGridworks.getState().draftRevision ? e : (0,
        r.withGameplay)(e, (0,
        l.listMapSpawns)("gridworks"), (0,
        l.listTimeAttacks)()))
          , m = (0,
        i.createClient)()
          , g = (0,
        s.personalMapLimitError)(t);
        if (g)
            throw Error(g);
        if (t.nodes.some(e => e.entity?.kind === "folder")) {
            let e = (0,
            r.gameplayPayload)(t)
              , i = n.usePublishedGridworks.getState().draftRevision
              , {data: a, error: s} = await m.rpc(null === i ? "save_gridworks_editor" : "publish_gridworks_draft", {
                p_document: t,
                ...null === i ? {
                    p_revision: p
                } : {
                    p_draft_revision: i
                },
                p_spawns: e.spawns.map(e => (0,
                d.transformMapSpawn)("gridworks", e, "to-storage")),
                p_attacks: e.attacks.map(e => {
                    let i = (0,
                    d.transformMapTimeAttack)(e, "to-storage");
                    return t.nodes.some(i => i.entity?.kind === "attack" && i.entity.sourceId === e.id && 1 === i.entity.raceMetadataVersion) ? {
                        ...i,
                        raceMarker: i.raceMarker ?? null,
                        raceExitSpawn: i.raceExitSpawn ?? null
                    } : i
                }
                )
            });
            if (s)
                throw Error("23505" === s.code ? "Another admin saved a layout. Your draft is preserved locally. Reload and recover it to review the newer saved layout before replacing it." : s.message);
            if ("number" != typeof a)
                throw Error("Save failed. Your draft is still here.");
            p = a,
            c = t,
            f = null,
            n.usePublishedGridworks.setState({
                draftRevision: null
            }),
            u(e),
            w(t),
            await Promise.all(e.attacks.map(async e => {
                let {data: i, error: t} = await (0,
                o.selectRaces)(i => m.from("sim_time_attacks").select(i).eq("id", e.id).maybeSingle());
                if (t)
                    return void console.warn("[sim] Reload the course before racing after publication.");
                let a = i && (0,
                o.parseTimeAttackRow)(i);
                a && (0,
                l.patchTimeAttackDoc)(a)
            }
            ));
            return
        }
        let h = null === p ? await m.from("sim_map_layouts").insert({
            map_id: "gridworks",
            document: t,
            revision: 1
        }).select("revision").maybeSingle() : await m.from("sim_map_layouts").update({
            document: t,
            revision: p + 1
        }).eq("map_id", "gridworks").eq("revision", p).select("revision").maybeSingle();
        if (h.error)
            throw Error("23505" === h.error.code ? "Another admin saved a layout. Your draft is preserved locally. Reload and recover it to review the newer saved layout before replacing it." : h.error.message);
        if (!h.data)
            throw Error("Layout changed on the server or write access was denied. Your draft is preserved locally. Reload and recover it to review the newer saved layout before replacing it.");
        p = h.data.revision,
        c = t,
        w(t)
    }
    e.s(["discardGridworksDraft", 0, v, "gridworksLayoutRevision", 0, () => {
        let e = n.usePublishedGridworks.getState().draftRevision;
        return null === e ? p : -e
    }
    , "installPublishedGridworks", 0, y, "loadGridworksLayout", 0, b, "publishedGridworksSnapshot", 0, () => ({
        document: c,
        revision: p
    }), "resetGridworksDraft", 0, g, "saveGridworksDraft", 0, h, "saveGridworksLayout", 0, M])
}
, 905387, (e, i, t) => {
    i.exports = JSON.parse('{"prefabs":{"foundry-bando:default":{"points":1577,"moving":false,"meshes":1397,"triangles":17940},"wind-turbine:default":{"points":40,"moving":true,"meshes":14,"triangles":564},"chimney-tall:default":{"points":90,"moving":false,"meshes":80,"triangles":960},"warehouse-sawtooth:default":{"points":278,"moving":false,"meshes":248,"triangles":2952},"road-straight:default":{"points":23,"moving":false,"meshes":20,"triangles":240},"road-90:default":{"points":22,"moving":false,"meshes":19,"triangles":228},"road-t:default":{"points":28,"moving":false,"meshes":25,"triangles":300},"road-cross:default":{"points":35,"moving":false,"meshes":31,"triangles":372},"house-1:default":{"points":9,"moving":false,"meshes":8,"triangles":92},"house-1:terrace":{"points":21,"moving":false,"meshes":18,"triangles":216},"house-1:porch":{"points":13,"moving":false,"meshes":11,"triangles":128},"house-2:default":{"points":14,"moving":false,"meshes":12,"triangles":140},"house-2:terrace":{"points":25,"moving":false,"meshes":22,"triangles":264},"house-2:porch":{"points":17,"moving":false,"meshes":15,"triangles":176},"skyscraper-10:default":{"points":21,"moving":false,"meshes":18,"triangles":216},"skyscraper-10:arcade":{"points":22,"moving":false,"meshes":19,"triangles":228},"skyscraper-10:skydeck":{"points":21,"moving":false,"meshes":18,"triangles":216},"skyscraper-20:default":{"points":32,"moving":false,"meshes":28,"triangles":336},"skyscraper-20:arcade":{"points":33,"moving":false,"meshes":29,"triangles":348},"skyscraper-20:skydeck":{"points":32,"moving":false,"meshes":28,"triangles":336},"street-light:default":{"points":6,"moving":false,"meshes":5,"triangles":60},"street-light:double":{"points":9,"moving":false,"meshes":8,"triangles":96},"bus-stop:default":{"points":11,"moving":false,"meshes":9,"triangles":108},"bus-stop:open":{"points":9,"moving":false,"meshes":8,"triangles":96},"bus-stop:double":{"points":18,"moving":false,"meshes":16,"triangles":192},"bike-rack:default":{"points":11,"moving":false,"meshes":9,"triangles":108},"bike-rack:five":{"points":17,"moving":false,"meshes":15,"triangles":180},"city-grandstand:covered":{"points":114,"moving":false,"meshes":101,"triangles":1212},"city-grandstand:open":{"points":108,"moving":false,"meshes":96,"triangles":1152},"city-plaza:default":{"points":5,"moving":false,"meshes":4,"triangles":48},"city-crane:hammerhead":{"points":149,"moving":false,"meshes":133,"triangles":1596},"city-crane:luffing":{"points":149,"moving":false,"meshes":133,"triangles":1596},"city-bando:shell":{"points":324,"moving":false,"meshes":289,"triangles":3468},"city-bando:ruin":{"points":322,"moving":false,"meshes":287,"triangles":3444},"city-bando-bridges:single":{"points":576,"moving":false,"meshes":514,"triangles":6168},"city-bando-bridges:double":{"points":587,"moving":false,"meshes":524,"triangles":6288},"ferris-wheel:canopied":{"points":353,"moving":true,"meshes":154,"triangles":1848},"ferris-wheel:open":{"points":270,"moving":true,"meshes":116,"triangles":1392},"city-garage:two":{"points":39,"moving":false,"meshes":34,"triangles":408},"city-garage:four":{"points":70,"moving":false,"meshes":62,"triangles":744},"city-market:skylight":{"points":21,"moving":false,"meshes":18,"triangles":216},"city-market:covered":{"points":17,"moving":false,"meshes":15,"triangles":180},"city-courtyard:arcade":{"points":41,"moving":false,"meshes":36,"triangles":432},"city-courtyard:skywalk":{"points":42,"moving":false,"meshes":37,"triangles":444},"tree-broadleaf:oak":{"points":11,"moving":false,"meshes":7,"triangles":400},"tree-broadleaf:birch":{"points":13,"moving":false,"meshes":8,"triangles":404},"tree-broadleaf:autumn":{"points":11,"moving":false,"meshes":7,"triangles":400,"shape":"oak"},"tree-conifer:fir":{"points":6,"moving":false,"meshes":2,"triangles":369},"tree-conifer:pine":{"points":11,"moving":false,"meshes":7,"triangles":377},"tree-conifer:cypress":{"points":6,"moving":false,"meshes":2,"triangles":328},"tree-palm:single":{"points":5,"moving":false,"meshes":2,"triangles":280},"tree-palm:twin":{"points":10,"moving":false,"meshes":4,"triangles":560},"tree-dead:bare":{"points":10,"moving":false,"meshes":7,"triangles":295},"tree-dead:snapped":{"points":5,"moving":false,"meshes":4,"triangles":99},"street-bench:back":{"points":5,"moving":false,"meshes":4,"triangles":48},"street-bench:flat":{"points":4,"moving":false,"meshes":3,"triangles":36},"street-bollards:posts":{"points":6,"moving":false,"meshes":3,"triangles":288},"street-bollards:rail":{"points":7,"moving":false,"meshes":4,"triangles":300},"street-signal:post":{"points":28,"moving":false,"meshes":6,"triangles":2196},"street-signal:mast":{"points":30,"moving":false,"meshes":7,"triangles":2208},"street-utility:cabinet":{"points":4,"moving":false,"meshes":3,"triangles":36},"street-utility:transformer":{"points":18,"moving":false,"meshes":13,"triangles":408},"street-planter:square":{"points":9,"moving":false,"meshes":7,"triangles":136},"street-planter:long":{"points":12,"moving":false,"meshes":9,"triangles":264},"whoop-park:default":{"points":463,"moving":false,"meshes":389,"triangles":7378},"whoop-supermarket:default":{"points":1054,"moving":false,"meshes":929,"triangles":12444},"box:white":{"points":2,"moving":false,"meshes":1,"triangles":12},"box:grey":{"points":2,"moving":false,"meshes":1,"triangles":12,"shape":"white"},"box:orange":{"points":2,"moving":false,"meshes":1,"triangles":12,"shape":"white"},"sphere:white":{"points":9,"moving":false,"meshes":1,"triangles":720},"sphere:grey":{"points":9,"moving":false,"meshes":1,"triangles":720,"shape":"white"},"sphere:orange":{"points":9,"moving":false,"meshes":1,"triangles":720,"shape":"white"},"cylinder:white":{"points":2,"moving":false,"meshes":1,"triangles":96},"cylinder:grey":{"points":2,"moving":false,"meshes":1,"triangles":96,"shape":"white"},"cylinder:orange":{"points":2,"moving":false,"meshes":1,"triangles":96,"shape":"white"},"cone:white":{"points":2,"moving":false,"meshes":1,"triangles":48},"cone:grey":{"points":2,"moving":false,"meshes":1,"triangles":48,"shape":"white"},"cone:orange":{"points":2,"moving":false,"meshes":1,"triangles":48,"shape":"white"},"pyramid:white":{"points":2,"moving":false,"meshes":1,"triangles":8},"pyramid:grey":{"points":2,"moving":false,"meshes":1,"triangles":8,"shape":"white"},"pyramid:orange":{"points":2,"moving":false,"meshes":1,"triangles":8,"shape":"white"},"torus:white":{"points":9,"moving":false,"meshes":1,"triangles":768},"torus:grey":{"points":9,"moving":false,"meshes":1,"triangles":768,"shape":"white"},"torus:orange":{"points":9,"moving":false,"meshes":1,"triangles":768,"shape":"white"},"slab:white":{"points":2,"moving":false,"meshes":1,"triangles":12},"slab:grey":{"points":2,"moving":false,"meshes":1,"triangles":12,"shape":"white"},"slab:orange":{"points":2,"moving":false,"meshes":1,"triangles":12,"shape":"white"},"wall:white":{"points":2,"moving":false,"meshes":1,"triangles":12},"wall:grey":{"points":2,"moving":false,"meshes":1,"triangles":12,"shape":"white"},"wall:orange":{"points":2,"moving":false,"meshes":1,"triangles":12,"shape":"white"},"wedge:white":{"points":2,"moving":false,"meshes":1,"triangles":8},"wedge:grey":{"points":2,"moving":false,"meshes":1,"triangles":8,"shape":"white"},"wedge:orange":{"points":2,"moving":false,"meshes":1,"triangles":8,"shape":"white"},"chimney:default":{"points":27,"moving":false,"meshes":24,"triangles":288},"tower:default":{"points":23,"moving":false,"meshes":20,"triangles":240},"arch:default":{"points":16,"moving":false,"meshes":14,"triangles":168},"gate:default":{"points":4,"moving":false,"meshes":3,"triangles":36},"loop:default":{"points":4,"moving":false,"meshes":3,"triangles":36},"tunnel:default":{"points":4,"moving":false,"meshes":3,"triangles":36},"slalom:default":{"points":10,"moving":false,"meshes":5,"triangles":480},"container:default":{"points":26,"moving":false,"meshes":23,"triangles":276},"container:open":{"points":30,"moving":false,"meshes":26,"triangles":312},"silo:default":{"points":4,"moving":false,"meshes":2,"triangles":144},"gantry:default":{"points":5,"moving":false,"meshes":4,"triangles":48},"gantry:double":{"points":12,"moving":false,"meshes":10,"triangles":120},"bridge:default":{"points":6,"moving":false,"meshes":5,"triangles":60},"bridge:covered":{"points":14,"moving":false,"meshes":12,"triangles":144},"tower-1:default":{"points":9,"moving":false,"meshes":8,"triangles":96},"tower-2:default":{"points":14,"moving":false,"meshes":12,"triangles":144},"tower-3:default":{"points":18,"moving":false,"meshes":16,"triangles":192},"tower-6:default":{"points":32,"moving":false,"meshes":28,"triangles":336},"tower-8:default":{"points":41,"moving":false,"meshes":36,"triangles":432},"tower-wide:default":{"points":23,"moving":false,"meshes":20,"triangles":240},"gate-micro:default":{"points":4,"moving":false,"meshes":3,"triangles":36},"gate-small:default":{"points":4,"moving":false,"meshes":3,"triangles":36},"gate-wide:default":{"points":4,"moving":false,"meshes":3,"triangles":36},"gate-mega:default":{"points":4,"moving":false,"meshes":3,"triangles":36},"gate-stack-2:default":{"points":5,"moving":false,"meshes":4,"triangles":48},"gate-stack-3:default":{"points":6,"moving":false,"meshes":5,"triangles":60},"gate-stack-4:default":{"points":7,"moving":false,"meshes":6,"triangles":72},"gate-stack-6:default":{"points":9,"moving":false,"meshes":8,"triangles":96},"gate-stack-wide:default":{"points":6,"moving":false,"meshes":5,"triangles":60},"pipe-small:default":{"points":18,"moving":false,"meshes":16,"triangles":192},"pipe-large:default":{"points":18,"moving":false,"meshes":16,"triangles":192},"pipe-long:default":{"points":18,"moving":false,"meshes":16,"triangles":192},"pipe-ring:default":{"points":18,"moving":false,"meshes":16,"triangles":192},"pipe-dive-short:default":{"points":18,"moving":false,"meshes":16,"triangles":192},"pipe-dive-tall:default":{"points":18,"moving":false,"meshes":16,"triangles":192},"pipe-stack:default":{"points":54,"moving":false,"meshes":48,"triangles":576},"bando-small:default":{"points":23,"moving":false,"meshes":20,"triangles":240},"bando-small:city-lot":{"points":23,"moving":false,"meshes":20,"triangles":240},"bando-small:skeleton":{"points":18,"moving":false,"meshes":16,"triangles":192},"bando-small:broken":{"points":22,"moving":false,"meshes":19,"triangles":228},"bando-medium:default":{"points":30,"moving":false,"meshes":26,"triangles":312},"bando-medium:city-lot":{"points":30,"moving":false,"meshes":26,"triangles":312},"bando-medium:skeleton":{"points":23,"moving":false,"meshes":20,"triangles":240},"bando-medium:broken":{"points":26,"moving":false,"meshes":23,"triangles":276},"bando-large:default":{"points":43,"moving":false,"meshes":38,"triangles":456},"bando-large:city-lot":{"points":43,"moving":false,"meshes":38,"triangles":456},"bando-large:skeleton":{"points":32,"moving":false,"meshes":28,"triangles":336},"bando-large:broken":{"points":39,"moving":false,"meshes":34,"triangles":408},"bando-twins:default":{"points":76,"moving":false,"meshes":67,"triangles":804},"bando-twins:city-lot":{"points":76,"moving":false,"meshes":67,"triangles":804},"bando-twins:skeleton":{"points":58,"moving":false,"meshes":51,"triangles":612},"bando-twins:broken":{"points":67,"moving":false,"meshes":59,"triangles":708},"ring-run:default":{"points":90,"moving":false,"meshes":80,"triangles":960},"offset-gates:default":{"points":17,"moving":false,"meshes":15,"triangles":180},"triple-window:default":{"points":11,"moving":false,"meshes":9,"triangles":108},"split-s-deck:default":{"points":6,"moving":false,"meshes":5,"triangles":60},"ladder-bars:default":{"points":14,"moving":false,"meshes":12,"triangles":144}},"primitives":{"box":2,"sphere":9,"cylinder":2,"cone":2,"torus":9,"pyramid":2}}')
}
, 391775, e => {
    "use strict";
    var i = e.i(792558)
      , t = e.i(483359)
      , a = e.i(190072)
      , n = e.i(622803)
      , s = e.i(773915)
      , r = e.i(475127)
      , o = e.i(353198)
      , l = e.i(629601)
      , d = e.i(483242);
    function p(e) {
        return {
            position: new a.Vector3().setFromMatrixPosition(e).toArray(),
            yaw: r.atan2(e.elements[8], e.elements[10])
        }
    }
    function m(e, i=new a.Matrix4) {
        return {
            ...void 0 !== e.competitiveRevision ? {
                competitiveRevision: e.competitiveRevision
            } : {},
            ...e.raceMarker ? {
                raceMarker: {
                    ...e.raceMarker,
                    position: new a.Vector3(...e.raceMarker.position).applyMatrix4(i).toArray()
                }
            } : {},
            ...e.raceExitSpawn ? {
                raceExitSpawn: {
                    ...e.raceExitSpawn,
                    ...p(i.clone().multiply(new a.Matrix4().fromArray((0,
                    s.compose)(e.raceExitSpawn.position, [0, e.raceExitSpawn.yaw, 0]))))
                }
            } : {}
        }
    }
    function c(e, i, t, a=[0, 0, 0], n=[0, 0, 0]) {
        return {
            id: crypto.randomUUID(),
            name: e,
            parentId: i,
            entity: t,
            matrix: (0,
            s.compose)(a, n),
            color: "#56d5ed",
            surface: "flat",
            ghost: !0
        }
    }
    function f(e, i) {
        return c(e.label, i, {
            kind: "spawn",
            sourceId: e.id,
            pad: e.pad
        }, e.position, [0, e.yaw, 0])
    }
    function u(e, t) {
        let a = c(e.name, t, {
            kind: "attack",
            sourceId: e.id,
            raceMetadataVersion: 1,
            ...m(e)
        });
        return [a, f(e.spawn, a.id), ...e.gates.map( (t, n) => ({
            ...c(`Gate ${n + 1}`, a.id, {
                kind: "gate",
                sourceId: t.id,
                size: t.size
            }, t.position, t.rotation),
            color: (0,
            i.timeAttackGateColor)(n, e.gates.length)
        }))]
    }
    let g = {
        spawns: "Spawn points",
        attacks: "Time attacks",
        arenas: "Arenas"
    }
      , h = e => c(g[e], null, {
        kind: "folder",
        folder: e
    })
      , v = {
        blue: "Blue pit",
        red: "Red pit"
    };
    function w(e, i) {
        let t = {
            ...c(e.name, i, {
                kind: "arena",
                sourceId: e.id,
                size: [...e.bounds.size],
                drones: [...e.drones],
                entranceMetadataVersion: 1,
                ...e.entrance ? {
                    entrance: {
                        ...e.entrance,
                        position: new a.Vector3(...e.entrance.position).applyMatrix4(new a.Matrix4().fromArray((0,
                        s.compose)(e.bounds.position, [0, e.bounds.yaw, 0])).invert()).toArray()
                    }
                } : {}
            }, e.bounds.position, [0, e.bounds.yaw, 0]),
            color: "#f2c84b"
        }
          , n = new a.Matrix4().fromArray(t.matrix).invert();
        return [t, ...e.pits.map(e => {
            let i = p(n.clone().multiply(new a.Matrix4().fromArray((0,
            s.compose)(e.position, [0, e.yaw, 0]))));
            return {
                ...c(v[e.team], t.id, {
                    kind: "pit",
                    sourceId: e.team,
                    team: e.team
                }, i.position, [0, i.yaw, 0]),
                color: d.TEAM_COLORS[e.team]
            }
        }
        )]
    }
    function y(e) {
        return !e.mapId.startsWith("official:") || e.nodes.some(e => e.entity?.kind === "folder" && "arenas" === e.entity.folder) ? e : {
            ...e,
            nodes: [...e.nodes, h("arenas")]
        }
    }
    e.s(["arenaNodes", 0, w, "attackNodes", 0, u, "editorGateColor", 0, function(e, t) {
        let a = e.nodes.filter(e => e.parentId === t.parentId && e.entity?.kind === "gate");
        return (0,
        i.timeAttackGateColor)(a.findIndex(e => e.id === t.id), a.length)
    }
    , "flipGateMatrix", 0, function(e) {
        return e.map( (e, i) => i < 3 || i >= 8 && i < 11 ? -e : e)
    }
    , "gameplayNode", 0, c, "gameplayPayload", 0, function(e) {
        let s = (0,
        n.worldMatrices)(e);
        function r(e) {
            return p(s.get(e.id))
        }
        function o(e) {
            if (e.entity?.kind !== "spawn")
                throw Error("Expected a spawn");
            return {
                id: e.entity.sourceId,
                label: e.name,
                ...r(e),
                pad: e.entity.pad
            }
        }
        return {
            spawns: e.nodes.filter(i => i.entity?.kind === "spawn" && e.nodes.find(e => e.id === i.parentId)?.entity?.kind === "folder").map(o),
            attacks: e.nodes.filter(e => e.entity?.kind === "attack").map(a => {
                let n = a.entity;
                if (n?.kind !== "attack")
                    throw Error("Expected a time attack");
                let r = s.get(a.id);
                return {
                    id: n.sourceId,
                    name: a.name,
                    mapId: e.mapId,
                    ...m(n, r),
                    spawn: o(e.nodes.find(e => e.parentId === a.id && e.entity?.kind === "spawn")),
                    gates: e.nodes.filter(e => e.parentId === a.id && e.entity?.kind === "gate").map( (e, a, n) => {
                        if (e.entity?.kind !== "gate")
                            throw Error("Expected a gate");
                        let r = s.get(e.id).elements;
                        return {
                            id: e.entity.sourceId,
                            kind: "gate",
                            position: [r[12], r[13], r[14]],
                            rotation: (0,
                            t.gateRotationFromBasis)([r[0], r[1], r[2]], [r[4], r[5], r[6]], [r[8], r[9], r[10]]),
                            color: (0,
                            i.timeAttackGateColor)(a, n.length),
                            size: e.entity.size
                        }
                    }
                    )
                }
            }
            ),
            arenas: e.mapId.startsWith("official:") ? e.nodes.flatMap(i => {
                let t = i.entity;
                if (t?.kind !== "arena")
                    return [];
                let n = d.ARENA_TEAMS.map(t => {
                    let a = e.nodes.find(e => e.parentId === i.id && e.entity?.kind === "pit" && e.entity.team === t);
                    return {
                        team: t,
                        ...r(a)
                    }
                }
                );
                return [{
                    id: t.sourceId,
                    name: i.name,
                    mapId: e.mapId,
                    bounds: {
                        ...r(i),
                        size: [...t.size]
                    },
                    pits: n,
                    drones: [...t.drones],
                    ...t.entrance ? {
                        entrance: {
                            ...t.entrance,
                            position: new a.Vector3(...t.entrance.position).applyMatrix4(s.get(i.id)).toArray()
                        }
                    } : {}
                }]
            }
            ) : []
        }
    }
    , "newArena", 0, function(e) {
        let[,,i] = l.DEFAULT_ARENA_SIZE
          , t = i / 2 - 5;
        return w({
            id: crypto.randomUUID(),
            name: "New arena",
            bounds: {
                position: [0, 0, 0],
                yaw: 0,
                size: l.DEFAULT_ARENA_SIZE
            },
            pits: [{
                team: "blue",
                position: [0, .2, t],
                yaw: 0
            }, {
                team: "red",
                position: [0, .2, -t],
                yaw: Math.PI
            }],
            drones: [...o.DRONE_LADDER]
        }, e)
    }
    , "newAttack", 0, function(e, i="gridworks") {
        return u({
            id: crypto.randomUUID(),
            name: "New time attack",
            mapId: i,
            spawn: {
                id: "restart",
                label: "Restart spawn",
                position: [0, .2, 5],
                yaw: 0,
                pad: !0
            },
            gates: [0, 1].map(e => ({
                id: `gate-${e + 1}`,
                kind: "gate",
                position: [0, 3, -(10 * e)],
                rotation: [0, 0, 0],
                size: [4, 4],
                color: "#56d5ed"
            }))
        }, e)
    }
    , "renumberGates", 0, function(e) {
        let i = new Map
          , t = !1
          , a = e.nodes.map(e => {
            if (e.entity?.kind !== "gate")
                return e;
            let a = (i.get(e.parentId) ?? 0) + 1;
            i.set(e.parentId, a);
            let n = `Gate ${a}`;
            return e.name === n ? e : (t = !0,
            {
                ...e,
                name: n
            })
        }
        );
        return t ? {
            ...e,
            nodes: a
        } : e
    }
    , "spawnNode", 0, f, "withGameplay", 0, function(e, i, t, s=[]) {
        if (e.nodes.some(e => e.entity)) {
            var r, o, l, d;
            let i, p, c, f, u, g;
            return y((l = (r = e,
            o = t,
            i = (0,
            n.worldMatrices)(r),
            p = !1,
            c = r.nodes.map(e => {
                let t = e.entity;
                if (t?.kind !== "attack" || 1 === t.raceMetadataVersion)
                    return e;
                let a = o.find(e => e.id === t.sourceId && e.mapId === r.mapId);
                if (!a)
                    return e;
                let n = m(a, i.get(e.id).clone().invert());
                if (void 0 === n.competitiveRevision && !n.raceMarker && !n.raceExitSpawn)
                    return e;
                let s = {
                    raceMetadataVersion: 1,
                    ...void 0 === t.competitiveRevision && void 0 !== n.competitiveRevision ? {
                        competitiveRevision: n.competitiveRevision
                    } : {},
                    ...!t.raceMarker && n.raceMarker ? {
                        raceMarker: n.raceMarker
                    } : {},
                    ...!t.raceExitSpawn && n.raceExitSpawn ? {
                        raceExitSpawn: n.raceExitSpawn
                    } : {}
                };
                return p = !0,
                {
                    ...e,
                    entity: {
                        ...t,
                        ...s
                    }
                }
            }
            ),
            p ? {
                ...r,
                nodes: c
            } : r),
            d = s,
            f = (0,
            n.worldMatrices)(l),
            u = !1,
            g = l.nodes.map(e => {
                let i = e.entity;
                if (i?.kind !== "arena" || 1 === i.entranceMetadataVersion || i.entrance)
                    return e;
                let t = d.find(e => e.id === i.sourceId && e.mapId === l.mapId);
                return t?.entrance ? (u = !0,
                {
                    ...e,
                    entity: {
                        ...i,
                        entranceMetadataVersion: 1,
                        entrance: {
                            ...t.entrance,
                            position: new a.Vector3(...t.entrance.position).applyMatrix4(f.get(e.id).clone().invert()).toArray()
                        }
                    }
                }) : e
            }
            ),
            u ? {
                ...l,
                nodes: g
            } : l))
        }
        let p = h("spawns")
          , c = h("attacks");
        return y({
            ...e,
            nodes: [...e.nodes, p, ...i.map(e => f(e, p.id)), c, ...t.filter(i => i.mapId === e.mapId).flatMap(e => u(e, c.id))]
        })
    }
    ])
}
, 29921, e => {
    "use strict";
    class i extends Error {
        raceIds;
        constructor(e) {
            super("Saving these changes would wipe a published race's leaderboards. Confirm to continue."),
            this.raceIds = e,
            this.name = "LeaderboardWipeRequiredError"
        }
    }
    e.s(["LeaderboardWipeRequiredError", 0, i, "wipeRequired", 0, function(e) {
        return e.message.includes("LEADERBOARD_WIPE_REQUIRED") ? new i((e.details ?? "").split(",").filter(Boolean)) : null
    }
    ])
}
, 35680, 772671, e => {
    "use strict";
    var i = e.i(190072)
      , t = e.i(998494)
      , a = e.i(905387)
      , n = e.i(622803)
      , s = e.i(379494);
    function r(e) {
        let i = JSON.stringify(e)
          , t = new TextEncoder().encode(i).length;
        for (let e of i.matchAll(/"(?:[^"\\]|\\.)*"|(-?\d+(?:\.\d+)?[eE][+-]?\d+)|[:,]/g))
            if (e[1]) {
                let[i,a] = e[1].toLowerCase().split("e")
                  , n = +!!i.startsWith("-")
                  , s = i.slice(n)
                  , r = (s.includes(".") ? s.indexOf(".") : s.length) + Number(a)
                  , o = s.replace(".", "").length;
                t += n + (r <= 0 ? 2 - r + o : r >= o ? r : o + 1) - e[1].length
            } else
                (":" === e[0] || "," === e[0]) && t++;
        return t
    }
    e.s(["jsonbBytes", 0, r], 772671);
    let o = new Set(["roller-coaster", "drift-track", "drift-park", "whoop-world", "billboard-standing", "billboard-floating"])
      , l = "Remove roller coasters, drift tracks, and billboards from this map to save, play, or share it.";
    function d(e) {
        return !(0,
        t.isOfficialMapId)(e.mapId) && e.nodes.some(e => e.prefab && o.has(e.prefab.id) || e.geometry?.kind === "coaster" || e.geometry?.kind === "drift-track" || e.geometry?.kind === "lathe" || e.geometry?.kind === "plant")
    }
    let p = "Player maps allow at most 2 time attacks."
      , m = "A time attack can have at most 20 gates.";
    function c(e) {
        let i = new Map
          , t = 0;
        for (let a of e.nodes)
            a.entity?.kind === "attack" ? t++ : a.entity?.kind === "gate" && a.parentId && i.set(a.parentId, (i.get(a.parentId) ?? 0) + 1);
        return {
            races: t,
            gates: Math.max(0, ...i.values())
        }
    }
    function f(e, i) {
        let t = e => r((0,
        n.withoutEntryHandles)(e));
        return t(e) > g && (!i || t(e) > t(i)) ? `Map document exceeds ${g / 1024} KB. Remove unnecessary groups or objects.` : null
    }
    let u = s.default.points
      , g = s.default.bytes;
    function h(e) {
        let t = 0
          , n = 0
          , s = 0
          , r = new Map(e.nodes.map(e => [e.id, e]));
        for (let o of e.nodes)
            if (o.prefab) {
                let e = a.default.prefabs[`${o.prefab.id}:${o.prefab.variant}`];
                if (t += e?.points ?? u + 1,
                v(o)) {
                    n++;
                    let e = o
                      , t = 0
                      , a = !1;
                    for (; e && t++ <= 32; ) {
                        let t = new i.Matrix4().fromArray(e.matrix).elements
                          , n = [new i.Vector3(t[0],t[1],t[2]), new i.Vector3(t[4],t[5],t[6]), new i.Vector3(t[8],t[9],t[10])]
                          , s = n[0].lengthSq()
                          , o = Math.max(1e-10, 1e-6 * s);
                        (!Number.isFinite(s) || s < 1e-10 || n.some(e => Math.abs(e.lengthSq() - s) > o) || Math.abs(n[0].dot(n[1])) > o || Math.abs(n[0].dot(n[2])) > o || Math.abs(n[1].dot(n[2])) > o) && (a = !0),
                        e = e.parentId ? r.get(e.parentId) : void 0
                    }
                    a && s++
                }
            } else
                o.geometry ? t += "prism" === o.geometry.kind ? 1 + Math.ceil((4 * o.geometry.points.length - 4) / 100) : a.default.primitives[o.geometry.kind] ?? u + 1 : o.entity && "folder" !== o.entity.kind && (t += 1);
        return {
            points: t,
            animated: n,
            invalidAnimatedTransforms: s
        }
    }
    function v(e) {
        return e.prefab?.id === "roller-coaster" || !!(e.prefab && a.default.prefabs[`${e.prefab.id}:${e.prefab.variant}`]?.moving)
    }
    e.s(["GATE_LIMIT_MESSAGE", 0, m, "MAIN_SIM_ONLY_PRESETS", 0, o, "PERSONAL_MAP_ANIMATION_LIMIT", 0, 2, "PERSONAL_MAP_BYTE_LIMIT", 0, g, "PERSONAL_MAP_COMPLEXITY_LIMIT", 0, u, "PERSONAL_MAP_RACE_LIMIT", 0, 2, "PERSONAL_RACE_GATE_LIMIT", 0, 20, "RACE_LIMIT_MESSAGE", 0, p, "RESTRICTED_MAP_MESSAGE", 0, l, "assertPersonalMapObjects", 0, function(e) {
        if (d(e))
            throw Error(l)
    }
    , "canUseMapPreset", 0, function(e, i) {
        return (0,
        t.isOfficialMapId)(e) || !o.has(i)
    }
    , "clampPersonalMapBounds", 0, function(e, i=!1) {
        if ((0,
        t.isOfficialMapId)(e.mapId) || i)
            return e;
        let a = e.bounds ?? {
            size: 200,
            ceiling: 100
        };
        return {
            ...e,
            bounds: {
                ...a,
                size: Math.min(a.size, 200),
                ceiling: Math.min(a.ceiling, 100),
                ...a.walls ? {
                    walls: {
                        negativeX: Math.min(a.walls.negativeX, 100),
                        positiveX: Math.min(a.walls.positiveX, 100),
                        negativeZ: Math.min(a.walls.negativeZ, 100),
                        positiveZ: Math.min(a.walls.positiveZ, 100)
                    }
                } : {}
            }
        }
    }
    , "hasRestrictedMapObjects", 0, d, "isAnimatedNode", 0, v, "mapComplexity", 0, h, "personalMapLimitError", 0, function(e, i, a=!1) {
        var n, s;
        let r, o, l = h(e), d = i ? h(i) : null;
        if (l.invalidAnimatedTransforms && (!d || l.invalidAnimatedTransforms > d.invalidAnimatedTransforms))
            return "Animated objects require uniform scale and no shear, including their parent groups.";
        if ((0,
        t.isOfficialMapId)(e.mapId))
            return null;
        if (a)
            return f(e, i);
        if (l.points > u && (!d || l.points > d.points))
            return "Map capacity exceeded. Remove objects before saving or playing.";
        if (l.animated > 2 && (!d || l.animated > d.animated))
            return "Player maps allow at most 2 animated objects.";
        let g = (n = e,
        s = i,
        r = c(n),
        o = s ? c(s) : null,
        r.races > 2 && (!o || r.races > o.races) ? p : r.gates > 20 && (!o || r.gates > o.gates) ? m : null);
        if (g)
            return g;
        let v = f(e, i);
        if (v)
            return v;
        let w = e.bounds;
        return (w?.walls ? Object.values(w.walls) : [(w?.size ?? 200) / 2]).some(e => e > 100) || (w?.ceiling ?? 100) > 100 ? "Player map boundaries cannot exceed 100 m." : null
    }
    , "raceCounts", 0, c], 35680)
}
, 412864, 838740, e => {
    "use strict";
    var i = e.i(35680)
      , t = e.i(920755)
      , a = e.i(579612)
      , n = e.i(552696)
      , s = e.i(613105)
      , r = e.i(404961)
      , o = e.i(622803)
      , l = e.i(29921)
      , d = e.i(635877)
      , p = e.i(28276)
      , m = e.i(971057)
      , c = e.i(391775)
      , f = e.i(937769);
    function u(e) {
        if (e.aliasOf)
            throw Error("This map flies as an official map.");
        (0,
        i.assertPersonalMapObjects)(e.document);
        let t = (0,
        i.personalMapLimitError)(e.document, void 0, e.unlimited);
        if (t)
            throw Error(t);
        let a = (0,
        c.gameplayPayload)(e.document).spawns;
        return {
            id: e.document.mapId,
            name: e.name,
            tagline: "Your playground",
            description: "A personal map.",
            accent: "#e5ff54",
            bounds: e.document.bounds ?? {
                size: 200,
                ceiling: 100
            },
            environment: {
                ...m.GRIDWORKS.environment,
                ground: {
                    ...m.GRIDWORKS.environment.ground,
                    gridAxes: void 0
                }
            },
            views: {
                ...m.GRIDWORKS.views,
                lobby: void 0
            },
            spawns: a.length ? a : [{
                id: "origin",
                label: "Origin",
                position: [0, .2, 0],
                yaw: 0,
                pad: !1
            }],
            layout: {},
            editorDocument: e.document,
            revision: e.revision
        }
    }
    function g(e) {
        let i = o.documentSchema.parse(e.document);
        if (i.mapId !== `user:${e.id}`)
            throw Error("Map identity does not match its layout.");
        return {
            id: e.id,
            ownerId: e.owner_id,
            name: e.name,
            document: i,
            revision: e.revision,
            updatedAt: e.updated_at,
            unlimited: !0 === e.owner_unlimited,
            ...e.alias_of ? {
                aliasOf: e.alias_of
            } : {}
        }
    }
    function h(e) {
        return (Array.isArray(e) ? e : []).flatMap(e => (0,
        f.parseTimeAttackRow)(e) ?? [])
    }
    function v(e) {
        return "23505" === e.code || e.message.includes("one personal map") ? Error("You can create one map. Edit or delete your existing map first.") : Error(["PGRST202", "PGRST205", "42P01", "42883"].includes(e.code ?? "") ? "Maps are temporarily unavailable. Try again later." : e.message)
    }
    function w(e) {
        let i = e.trim();
        if (!i || [...i].length > n.MAP_NAME_MAX_LENGTH)
            throw Error(n.MAP_NAME_LENGTH_MESSAGE);
        return i
    }
    async function y(e) {
        let i = crypto.randomUUID();
        return g(await (0,
        a.postJson)("/api/maps", {
            id: i,
            name: w(e)
        }, "Maps are temporarily unavailable. Try again later."))
    }
    e.s(["emptyMapDocument", 0, function(e) {
        return {
            version: 2,
            mapId: `user:${e}`,
            nodes: [],
            bounds: {
                size: 200,
                ceiling: 100
            }
        }
    }
    , "parseMap", 0, g, "parseRaces", 0, h, "personalMapDefinition", 0, u], 838740);
    class b extends Error {
        constructor() {
            super("This map changed in another session or is no longer available. Keep this editor open to preserve your draft."),
            this.name = "MapRevisionConflictError"
        }
    }
    async function M(e, t, n={}) {
        let s, r = o.documentSchema.parse(t);
        (0,
        i.assertPersonalMapObjects)(r);
        let p = (0,
        i.personalMapLimitError)(r, void 0, e.unlimited);
        if (p)
            throw Error(p);
        if (r.mapId !== `user:${e.id}`)
            throw Error("Cannot save a different map into this one.");
        let m = (0,
        d.racesToPublish)(r, n.published ?? {}, n.publish).map(e => (0,
        d.racePublicationMetadata)(r, e));
        try {
            s = await (0,
            a.postJson)(`/api/maps/${encodeURIComponent(e.id)}/save`, {
                revision: e.revision,
                document: r,
                races: m,
                wipe: [...n.wipe ?? []]
            }, "Save failed. Your draft is still here.")
        } catch (i) {
            if (!(i instanceof a.ApiError))
                throw i;
            let e = (0,
            l.wipeRequired)({
                message: i.message,
                details: i.text("details")
            });
            if (e)
                throw e;
            if (i.message.includes("MAP_REVISION_CONFLICT"))
                throw new b;
            throw v({
                message: i.message
            })
        }
        let c = s;
        if (!c?.map)
            throw Error("Save failed. Your draft is still here.");
        return {
            map: g(c.map),
            races: h(c.races)
        }
    }
    async function k(e) {
        let i = (0,
        s.withDeadline)(null, r.MAP_READ_MS)
          , {data: a, error: n} = await (0,
        f.selectRaces)(a => (0,
        t.createClient)().from("sim_time_attacks").select(a).eq("personal_map_id", e).abortSignal(i).order("sort_order"));
        if (n)
            throw i.aborted ? Error(r.MAP_READ_TIMEOUT) : v(n);
        return h(a)
    }
    function _(e, i) {
        let t = new Set(i.map(e => e.id));
        for (let i of (0,
        p.listTimeAttacks)())
            i.mapId !== e || t.has(i.id) || (0,
            p.removeTimeAttackDoc)(i.id);
        i.forEach(p.patchTimeAttackDoc)
    }
    async function A(e) {
        let {data: i, error: a} = await (0,
        t.createClient)().from("sim_personal_maps").delete().eq("id", e.id).eq("owner_id", e.ownerId).eq("revision", e.revision).select("id").maybeSingle();
        if (a)
            throw v(a);
        if (!i)
            throw Error("This map changed in another session. Refresh your library before deleting it.")
    }
    async function E(e, i) {
        let t = w(i);
        return (0,
        a.postJson)(`/api/maps/${encodeURIComponent(e.id)}/name`, {
            revision: e.revision,
            name: t
        }, "Maps are temporarily unavailable. Try again later.")
    }
    function I(e) {
        let i = (0,
        r.resolveMap)(e.document.mapId);
        return i.id === e.document.mapId && (i.revision ?? 0) > e.revision
    }
    async function S(e, i=0) {
        let t = u(e)
          , a = t.id;
        if (I(e))
            return a;
        let n = await k(e.id);
        if (I(e))
            return a;
        let s = await R(e.id);
        if (s.revision !== e.revision) {
            if (i < 2)
                return S(s, i + 1);
            throw new r.MapUnavailableError("This map was updated while loading. Try again.")
        }
        return I(e) || ((0,
        r.registerPersonalMap)(t),
        _(a, n)),
        a
    }
    async function R(e) {
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e))
            throw new r.MapUnavailableError("This map link is invalid.");
        let a = (0,
        s.withDeadline)(null, r.MAP_READ_MS)
          , {data: n, error: o} = await (0,
        t.createClient)().from("sim_personal_maps").select("*").eq("id", e).abortSignal(a).maybeSingle();
        if (o)
            throw a.aborted ? Error(r.MAP_READ_TIMEOUT) : v(o);
        if (!n)
            throw new r.MapDeletedError;
        let l = g(n);
        if ((0,
        i.hasRestrictedMapObjects)(l.document) || (0,
        i.personalMapLimitError)(l.document, void 0, l.unlimited))
            throw new r.MapUnavailableError("This map needs an update from its owner before it can be played.");
        return l
    }
    async function O(e, i) {
        let {data: a, error: n} = await (0,
        t.createClient)().from("sim_personal_maps").select("*").eq("id", e).eq("owner_id", i).maybeSingle();
        if (n)
            throw v(n);
        if (!a)
            throw Error("This map is no longer available.");
        return g(a)
    }
    e.s(["MapRevisionConflictError", 0, b, "createPersonalMap", 0, y, "deletePersonalMap", 0, A, "loadPersonalMap", 0, O, "loadPersonalMapRaces", 0, k, "loadSharedMap", 0, R, "personalMapPath", 0, function(e) {
        return `/sim?map=${encodeURIComponent(e)}`
    }
    , "preparePersonalMapForPlay", 0, S, "registerMapForPlay", 0, function(e) {
        let i = u(e);
        return I(e) || (0,
        r.registerPersonalMap)(i),
        i.id
    }
    , "renamePersonalMap", 0, E, "savePersonalMap", 0, M, "syncPersonalMapRaces", 0, _], 412864)
}
, 635877, e => {
    "use strict";
    var i = e.i(483359)
      , t = e.i(391775);
    let a = (e, i, t) => Math.abs(e - i) <= t;
    e.s(["publishedRaceChanges", 0, function(e, n) {
        let s, r = Object.values(n);
        if (!r.length)
            return [];
        try {
            s = (0,
            t.gameplayPayload)(e).attacks
        } catch {
            return []
        }
        let o = new Map(s.map(e => [e.id, e]));
        return r.flatMap(e => {
            var t, n, s, r;
            let l = o.get(e.id);
            return l ? (t = e.gates,
            n = l.gates,
            t.length === n.length && t.every( (e, t) => {
                let s = n[t];
                if (e.id !== s.id || e.kind !== s.kind || !e.position.every( (e, i) => a(e, s.position[i], 1e-6)) || !e.size.every( (e, i) => a(e, s.size[i], 1e-6)))
                    return !1;
                let r = (0,
                i.eulerMatrix)(e.rotation)
                  , o = (0,
                i.eulerMatrix)(s.rotation);
                return r.every( (e, i) => a(e, o[i], 1e-9))
            }
            ) && (s = e.spawn,
            r = l.spawn,
            s.position.every( (e, i) => a(e, r.position[i], 1e-6)) && a(s.yaw, r.yaw, 1e-6) && !!s.pad == !!r.pad)) ? [] : [{
                id: e.id,
                name: l.name,
                deleted: !1
            }] : [{
                id: e.id,
                name: e.name,
                deleted: !0
            }]
        }
        )
    }
    , "racePublicationMetadata", 0, function(e, i) {
        return e.nodes.some(e => e.entity?.kind === "attack" && e.entity.sourceId === i.id && 1 === e.entity.raceMetadataVersion) ? {
            ...i,
            raceMarker: i.raceMarker ?? null,
            raceExitSpawn: i.raceExitSpawn ?? null
        } : i
    }
    , "racesToPublish", 0, function(e, i, a=[]) {
        let n = new Set([...Object.keys(i), ...a]);
        return (0,
        t.gameplayPayload)(e).attacks.filter(e => n.has(e.id))
    }
    ])
}
, 927268, 74663, e => {
    "use strict";
    var i = e.i(773915)
      , t = e.i(214658)
      , a = e.i(971057);
    let n = {
        id: "drift-park",
        name: "Drift Park",
        tagline: "Chase the pack. Dive the Spire. Thread the skyline.",
        description: "Eight drift cars on a 1.2 km circuit at the heart of a harbor festival. Dive the 90-metre Spire's open shaft, thread the Skyline Yard's floors and skybridges, run the container maze, chase the freight train along the west viaduct and drop through the cooling tower, with the stage and the turbines turning over the quay.",
        accent: "#c65c13",
        bounds: {
            size: 360,
            ceiling: 100,
            walls: {
                negativeX: 160,
                positiveX: 160,
                negativeZ: 212,
                positiveZ: 180
            }
        },
        environment: {
            ...a.GRIDWORKS.environment,
            fog: {
                ...a.GRIDWORKS.environment.fog,
                densityScale: .16
            },
            ground: {
                ...a.GRIDWORKS.environment.ground,
                gridAxes: void 0
            },
            indoorLight: {
                color: "#ffffff",
                intensity: 1.2
            }
        },
        horizon: "forest",
        views: {
            menu: {
                center: [50, 0, -17],
                radius: 78,
                height: 36,
                fov: 58,
                speed: .035,
                startAngle: 2.4,
                lookAtHeight: 26
            },
            overview: {
                center: [0, 0, 0],
                radius: 300,
                height: 190,
                fov: 53,
                speed: .025,
                startAngle: .9,
                lookAtHeight: 8
            },
            lobby: {
                position: [114, 0, 149],
                yaw: .36
            }
        },
        spawns: (0,
        t.driftParkSpawns)(),
        pedestrians: {
            count: 14,
            zones: [{
                minX: 92,
                maxX: 121,
                minZ: 140,
                maxZ: 162
            }, {
                minX: 64,
                maxX: 92,
                minZ: 141,
                maxZ: 163
            }, {
                minX: -20,
                maxX: 44,
                minZ: 155,
                maxZ: 168
            }, {
                minX: -20,
                maxX: 10,
                minZ: -140.8,
                maxZ: -137
            }, {
                minX: 25,
                maxX: 44,
                minZ: -142,
                maxZ: -137
            }, {
                minX: 97.5,
                maxX: 99.6,
                minZ: 58,
                maxZ: 95
            }, {
                minX: 81.5,
                maxX: 87.5,
                minZ: 53,
                maxZ: 95
            }, {
                minX: -88,
                maxX: -48,
                minZ: 155,
                maxZ: 168
            }, {
                minX: -129,
                maxX: -122.5,
                minZ: -54,
                maxZ: 2
            }, {
                minX: -140.6,
                maxX: -139.4,
                minZ: -55,
                maxZ: 12
            }]
        },
        layout: {},
        editorDocument: {
            version: 2,
            mapId: "drift-park",
            bounds: {
                size: 360,
                ceiling: 100,
                walls: {
                    negativeX: 160,
                    positiveX: 160,
                    negativeZ: 212,
                    positiveZ: 180
                }
            },
            nodes: [{
                id: "drift-park",
                name: "Drift Park",
                parentId: null,
                matrix: (0,
                i.compose)([0, 0, 0]),
                prefab: {
                    id: "drift-park",
                    variant: "default"
                },
                color: "#c65c13",
                surface: "grid",
                ghost: !1
            }]
        }
    };
    e.s(["DRIFT_PARK", 0, n], 927268);
    var s = e.i(261930);
    let r = {
        size: 400,
        ceiling: 100,
        walls: {
            negativeX: 155,
            positiveX: 205,
            negativeZ: 100,
            positiveZ: 170
        }
    }
      , o = {
        id: "whoop-world",
        name: "Whoop World",
        tagline: "Dive the atrium. Chase the karts. Ride the roof.",
        description: "A four-level shopping centre built for flying. Dive the Grand Atrium from the dome's oculus through the turning Whoop Orb, weave the galleria's escalators and bridges, chase dummy-driven karts round the Speedway, thread the Funplex and climb out to the Sky Park rides on the roof.",
        accent: "#c65c13",
        bounds: r,
        environment: {
            ...a.GRIDWORKS.environment,
            fog: {
                ...a.GRIDWORKS.environment.fog,
                densityScale: .16
            },
            ground: {
                ...a.GRIDWORKS.environment.ground,
                gridAxes: void 0
            },
            indoorLight: {
                color: "#ffffff",
                intensity: 1.2
            }
        },
        horizon: "sea",
        views: {
            menu: {
                center: [0, 0, 40],
                radius: 92,
                height: 38,
                fov: 58,
                speed: .035,
                startAngle: 1.2,
                lookAtHeight: 22
            },
            overview: {
                center: [20, 0, 20],
                radius: 300,
                height: 190,
                fov: 53,
                speed: .025,
                startAngle: .9,
                lookAtHeight: 8
            },
            lobby: {
                position: [0, 0, 130.6],
                yaw: 0,
                lens: {
                    back: 2.4,
                    height: .33,
                    aim: .14,
                    fov: 72
                }
            }
        },
        spawns: (0,
        s.whoopWorldSpawns)(),
        pedestrians: {
            count: 14,
            indoor: !0,
            zones: (0,
            s.whoopWorldWalkways)()
        },
        layout: {},
        editorDocument: {
            version: 2,
            mapId: "whoop-world",
            bounds: r,
            nodes: [{
                id: "whoop-world",
                name: "Whoop World",
                parentId: null,
                matrix: (0,
                i.compose)([0, 0, 0]),
                prefab: {
                    id: "whoop-world",
                    variant: "default"
                },
                color: "#c65c13",
                surface: "grid",
                ghost: !1
            }]
        }
    };
    e.s(["WHOOP_WORLD", 0, o], 74663)
}
, 425798, e => {
    "use strict";
    let i = {
        id: e.i(998494).LESSON_MAP_ID,
        name: "Flight School",
        tagline: "An open grid for lessons.",
        description: "The flat, open grid where flight school lessons and their practice courses are flown.",
        accent: "#c65c13",
        bounds: {
            size: 210,
            walls: {
                negativeX: 210,
                positiveX: 145,
                negativeZ: 200,
                positiveZ: 120
            },
            ceiling: 100
        },
        environment: {
            sky: {
                sunDirection: [-.6, .8, .5],
                turbidity: 1.8,
                rayleigh: 2.2,
                mieCoefficient: .002,
                mieDirectionalG: .8,
                palette: {
                    zenith: "#268fed",
                    horizon: "#addfff"
                }
            },
            sun: {
                color: "#ffefdc",
                intensity: 3.4,
                direction: [-.6, .85, .5],
                shadows: {
                    depth: 210
                }
            },
            ambient: {
                skyColor: "#c8d4e0",
                groundColor: "#c2b9ab",
                intensity: 1.1
            },
            environmentIntensity: .45,
            fog: {
                color: "#a7d4f0",
                densityScale: .24,
                skirt: {
                    opacity: .3,
                    fadeMeters: 7.2,
                    color: "#ba3534"
                }
            },
            clouds: {
                color: "#ffffff",
                opacity: .94,
                spread: 800,
                height: 240,
                count: 8
            },
            ground: {
                surface: "grid",
                baseColor: "#86888d",
                patchColor: "#86888d",
                jointColor: "#79818b",
                markings: !1,
                tileSize: 5
            },
            exposure: 1.44,
            windowGlow: 0,
            grade: {
                vignette: .1
            }
        },
        views: {
            menu: {
                center: [48, 0, 0],
                radius: 40,
                height: 14,
                fov: 58,
                speed: .035,
                startAngle: .75,
                lookAtHeight: 5
            },
            overview: {
                center: [0, 0, 0],
                radius: 177,
                height: 120,
                fov: 53,
                speed: .025,
                startAngle: .9,
                lookAtHeight: 6
            }
        },
        spawns: [{
            id: "lesson-court",
            label: "Lesson court",
            position: [48, .2, 60],
            yaw: 0,
            pad: !1
        }],
        layout: {}
    };
    e.s(["FLIGHT_SCHOOL", 0, i])
}
, 552627, e => {
    "use strict";
    var i = e.i(50270)
      , t = e.i(622803)
      , a = e.i(391775)
      , n = e.i(35680)
      , s = e.i(971057)
      , r = e.i(927268)
      , o = e.i(74663)
      , l = e.i(399900);
    let d = i.z.object({
        id: i.z.union([i.z.literal("gridworks"), i.z.string().regex(/^official:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/).transform(e => e)]),
        name: i.z.string().min(1).max(80),
        published: i.z.boolean(),
        revision: i.z.number().int().positive().nullable(),
        updatedAt: i.z.string(),
        hasDraft: i.z.boolean().optional(),
        unlockLevel: i.z.number().int().min(1).max(100).optional(),
        listed: i.z.boolean().optional(),
        archived: i.z.boolean().optional(),
        aliasId: i.z.string().uuid().nullable().optional()
    })
      , p = {
        "drift-park": r.DRIFT_PARK,
        "whoop-world": o.WHOOP_WORLD
    };
    function m(e) {
        let i = e.nodes.filter(e => !e.entity)
          , t = i[0]
          , a = t?.prefab && Object.hasOwn(p, t.prefab.id) ? p[t.prefab.id] : null;
        return 1 !== i.length || !a || "default" !== t.prefab.variant || null !== t.parentId || t.ghost || t.geometry || !t.matrix.every( (e, i) => e === +(i % 5 == 0)) ? null : a
    }
    function c(e) {
        let i = (0,
        a.gameplayPayload)(e)
          , t = m(e);
        return {
            ...i,
            spawns: i.spawns.length || !t ? i.spawns : t.spawns
        }
    }
    function f(e, i, r=e.revision ?? 0) {
        let o = null === i ? null : t.documentSchema.parse(i);
        if (o && o.mapId !== e.id)
            throw Error("Official map identity does not match its layout.");
        let l = e.unlockLevel ?? 1;
        if ("gridworks" === e.id) {
            let i = o ? (0,
            a.gameplayPayload)(o).spawns : [];
            return {
                ...s.GRIDWORKS,
                name: e.name,
                unlockLevel: l,
                spawns: i.length ? i : s.GRIDWORKS.spawns,
                editorDocument: o ?? void 0,
                revision: r
            }
        }
        if (!o)
            throw Error("Official map has no published layout.");
        let d = (0,
        n.personalMapLimitError)(o);
        if (d)
            throw Error(d);
        let p = c(o).spawns
          , u = m(o);
        return u ? {
            ...u,
            id: e.id,
            name: e.name,
            revision: r,
            unlockLevel: l,
            bounds: o.bounds ?? u.bounds,
            spawns: p,
            editorDocument: o
        } : {
            id: e.id,
            name: e.name,
            tagline: "",
            description: "",
            accent: "#ff7a00",
            revision: r,
            unlockLevel: l,
            bounds: o.bounds ?? {
                size: 200,
                ceiling: 100
            },
            environment: {
                ...s.GRIDWORKS.environment,
                ground: {
                    ...s.GRIDWORKS.environment.ground,
                    gridAxes: void 0
                }
            },
            views: {
                ...s.GRIDWORKS.views,
                lobby: void 0
            },
            spawns: p.length ? p : [{
                id: "origin",
                label: "Origin",
                position: [0, .2, 0],
                yaw: 0,
                pad: !1
            }],
            layout: {},
            editorDocument: o
        }
    }
    e.s(["officialMapDefinition", 0, f, "officialMapGameplay", 0, c, "officialMapHorizon", 0, function(e) {
        return e.horizon ?? m(e)?.horizon ?? l.DEFAULT_HORIZON
    }
    , "officialMapSchema", 0, d, "parseOfficialMap", 0, function(e) {
        let a = i.z.object({
            map: d,
            document: i.z.unknown().nullable()
        }).parse(e);
        if (!a.map.published)
            throw Error("This official map is not published.");
        let n = null == a.document ? null : t.documentSchema.parse(a.document);
        return {
            map: a.map,
            document: n,
            definition: f(a.map, n)
        }
    }
    ])
}
, 58849, e => {
    "use strict";
    var i = e.i(50270)
      , t = e.i(613105)
      , a = e.i(920755)
      , n = e.i(622803)
      , s = e.i(391775)
      , r = e.i(29921)
      , o = e.i(49925)
      , l = e.i(28276)
      , d = e.i(937769)
      , p = e.i(698072)
      , m = e.i(635877)
      , c = e.i(284853)
      , f = e.i(404961)
      , u = e.i(552627);
    async function g(e, i, t) {
        let n = (0,
        a.createClient)().rpc(e, i)
          , {data: s, error: o} = await (t ? n.abortSignal(t) : n);
        if (o && t?.aborted)
            throw Error(f.MAP_READ_TIMEOUT);
        let l = o && (0,
        r.wipeRequired)(o);
        if (l)
            throw l;
        if (o)
            throw Error(["PGRST202", "PGRST205", "42P01", "42883"].includes(o.code) ? "Official maps are temporarily unavailable. Try again." : "23505" === o.code ? "Another admin saved a draft. Reload before saving; your work is preserved." : o.message);
        return s
    }
    async function h() {
        return i.z.array(u.officialMapSchema).parse(await g("official_maps_catalog_v2", {
            p_admin: !1
        }))
    }
    async function v() {
        return i.z.array(u.officialMapSchema).parse(await g("official_maps_catalog_v2", {
            p_admin: !0
        }))
    }
    async function w(e, i) {
        let t = await g("get_official_map", {
            p_id: e
        }, i);
        if (!t)
            throw new f.MapUnavailableError("This official map is no longer available.");
        return (0,
        u.parseOfficialMap)(t)
    }
    let y = new Map;
    async function b(e) {
        let i = y.get(e);
        if (i)
            return i;
        let t = M(e);
        y.set(e, t);
        try {
            return await t
        } finally {
            y.get(e) === t && y.delete(e)
        }
    }
    async function M(e, i=0) {
        let n = (0,
        t.withDeadline)(null, f.MAP_READ_MS)
          , s = await w(e, n)
          , r = (0,
        a.createClient)()
          , [m,c,u] = await Promise.all([r.from("sim_map_spawns").select("map_id,spawns").eq("map_id", e).abortSignal(n).maybeSingle(), (0,
        d.selectRaces)(i => r.from("sim_time_attacks").select(i).eq("map_id", e).abortSignal(n)), (0,
        p.selectArenas)(i => r.from("sim_arenas").select(i).eq("map_id", e).order("sort_order").order("id").abortSignal(n))]);
        for (let e of [m, c, u])
            if (e.error)
                throw Error(n.aborted ? f.MAP_READ_TIMEOUT : e.error.message);
        if ((await w(e, n)).map.revision !== s.map.revision) {
            if (i < 2)
                return M(e, i + 1);
            throw Error("This map was updated while loading. Try again.")
        }
        let g = m.data && (0,
        d.parseMapSpawnRow)(m.data);
        g && (0,
        l.patchMapSpawns)(e, g.spawns);
        let h = (c.data ?? []).flatMap(e => (0,
        d.parseTimeAttackRow)(e) ?? [])
          , v = (u.data ?? []).flatMap(e => (0,
        p.parseArenaRow)(e) ?? []);
        for (let i of (0,
        l.listTimeAttacks)())
            i.mapId !== e || h.some(e => e.id === i.id) || (0,
            l.removeTimeAttackDoc)(i.id);
        for (let i of (0,
        l.listArenas)())
            i.mapId !== e || v.some(e => e.id === i.id) || (0,
            l.removeArenaDoc)(i.id);
        return h.forEach(l.patchTimeAttackDoc),
        v.forEach(l.patchArenaDoc),
        (0,
        f.registerOfficialMap)(s.definition),
        "gridworks" === e && (0,
        o.installPublishedGridworks)(s.document, s.map.revision),
        e
    }
    function k(e) {
        let t = i.z.object({
            map: u.officialMapSchema,
            name: i.z.string().min(1).max(80),
            document: i.z.unknown().nullable(),
            revision: i.z.number().int().positive().nullable(),
            baseRevision: i.z.number().int().positive().nullable()
        }).parse(e)
          , a = null == t.document ? "gridworks" === t.map.id ? (0,
        s.withGameplay)((0,
        n.seedDocument)(), (0,
        l.listMapSpawns)("gridworks"), (0,
        l.listTimeAttacks)()) : {
            version: 2,
            mapId: t.map.id,
            nodes: [],
            bounds: {
                size: 200,
                ceiling: 100
            }
        } : n.documentSchema.parse(t.document);
        if (a.mapId !== t.map.id)
            throw Error("Draft identity does not match its map.");
        return {
            ...t,
            document: a
        }
    }
    async function _(e) {
        return k(await g("create_official_map", {
            p_name: e.trim()
        }))
    }
    async function A(e) {
        let i = await g("official_map_draft", {
            p_id: e
        });
        if (!i)
            throw Error("Official map not found.");
        return k(i)
    }
    async function E(e, t, a=e.name) {
        let s = n.documentSchema.parse(t);
        if (s.mapId !== e.map.id)
            throw Error("Cannot save a different map into this draft.");
        let r = i.z.number().int().positive().parse(await g("save_official_map_draft", {
            p_id: e.map.id,
            p_document: s,
            p_revision: e.revision,
            p_base_revision: e.baseRevision,
            p_name: a.trim()
        }));
        return {
            ...e,
            name: a.trim(),
            document: s,
            revision: r
        }
    }
    async function I(e, t=e.document, a=[]) {
        let s = null === e.revision ? await E(e, t) : e
          , r = n.documentSchema.parse(t)
          , o = (0,
        u.officialMapGameplay)(r)
          , l = i.z.number().int().positive().parse(await g("publish_official_map_draft", {
            p_id: s.map.id,
            p_document: r,
            p_draft_revision: s.revision,
            p_name: s.name,
            p_wipe: [...a],
            p_spawns: o.spawns.map(e => (0,
            c.transformMapSpawn)(s.map.id, e, "to-storage")),
            p_attacks: o.attacks.map(e => (0,
            m.racePublicationMetadata)(r, (0,
            c.transformMapTimeAttack)(e, "to-storage"))),
            p_arenas: o.arenas.map(e => r.nodes.some(i => i.entity?.kind === "arena" && i.entity.sourceId === e.id && 1 === i.entity.entranceMetadataVersion) ? {
                ...e,
                entrance: e.entrance ?? null
            } : e)
        }));
        return {
            ...s.map,
            name: s.name,
            published: !0,
            revision: l,
            updatedAt: new Date().toISOString(),
            hasDraft: !1
        }
    }
    async function S(e) {
        if (null !== e.revision && await g("discard_official_map_draft", {
            p_id: e.map.id,
            p_revision: e.revision
        }) !== !0)
            throw Error("Draft could not be discarded.")
    }
    e.s(["createOfficialMap", 0, _, "discardOfficialMapDraft", 0, S, "listAdminOfficialMaps", 0, v, "listPublishedOfficialMaps", 0, h, "loadOfficialMap", 0, w, "loadOfficialMapDraft", 0, A, "prepareOfficialMapForPlay", 0, b, "publishOfficialMapDraft", 0, I, "saveOfficialMapDraft", 0, E])
}
, 333794, e => {
    "use strict";
    var i = e.i(412864)
      , t = e.i(58849)
      , a = e.i(404961)
      , n = e.i(998494);
    async function s(e) {
        if ((0,
        n.isPersonalMapId)(e)) {
            let s = await (0,
            i.loadSharedMap)(e.slice(5));
            if (s.aliasOf) {
                if (!(0,
                n.isOfficialMapId)(s.aliasOf))
                    throw new a.MapUnavailableError("This map is not available.");
                return (0,
                t.prepareOfficialMapForPlay)(s.aliasOf)
            }
            return (0,
            i.preparePersonalMapForPlay)(s)
        }
        if ((0,
        n.isOfficialMapId)(e))
            return (0,
            t.prepareOfficialMapForPlay)(e);
        throw new a.MapUnavailableError("This map is not available.")
    }
    async function r(e) {
        if ((0,
        n.isPersonalMapId)(e) || (0,
        n.isOfficialMapId)(e)) {
            if (await s(e) !== e)
                throw new a.MapUnavailableError("This map is not available.");
            return e
        }
        if (n.MAP_IDS.includes(e))
            return e;
        throw new a.MapUnavailableError("This map is not available.")
    }
    async function o(e) {
        return (0,
        a.hasMap)(e) ? e : r(e)
    }
    e.s(["ensureReplayMap", 0, o, "prepareLobbyMap", 0, s, "prepareReplayMap", 0, r, "replayMapErrorMessage", 0, function(e) {
        return e instanceof a.MapDeletedError ? "This replay can't play because its map has been deleted." : e instanceof a.MapUnavailableError ? `This replay can't play. ${e.message}` : "Could not load this replay's map. Check your connection and try again."
    }
    ])
}
, 29394, 321390, e => {
    "use strict";
    let i = !1;
    function t() {
        return !!i
    }
    e.s(["canSeeDrafts", 0, t, "isVisibleToViewer", 0, function(e) {
        return !e || t()
    }
    , "setCurriculumViewerIsAdmin", 0, function(e) {
        i = e
    }
    ], 321390);
    var a = e.i(998494)
      , n = e.i(304661);
    let s = new Set;
    function r(e) {
        return (0,
        a.isOfficialMapId)(e) && "gridworks" !== e ? s.has(e) : !n.UNPUBLISHED_MAP_IDS.has(e)
    }
    e.s(["canAccessMap", 0, function(e) {
        return (0,
        a.isOfficialMapId)(e) ? r(e) : !!r(e) || t()
    }
    , "isLessonMap", 0, function(e) {
        return n.LESSON_MAP_IDS.has(e ?? "")
    }
    , "markOfficialMapPublished", 0, function(e) {
        s.add(e)
    }
    ], 29394)
}
, 404961, e => {
    "use strict";
    var i = e.i(971057)
      , t = e.i(927268)
      , a = e.i(74663)
      , n = e.i(425798)
      , s = e.i(29394)
      , r = e.i(998494);
    let o = [i.GRIDWORKS, t.DRIFT_PARK, a.WHOOP_WORLD, n.FLIGHT_SCHOOL];
    o.filter(e => (0,
    s.canAccessMap)(e.id) && !(0,
    s.isLessonMap)(e.id));
    let l = new Map(o.map(e => [e.id, e]));
    function d(e) {
        let i = l.get(e);
        if (!i)
            throw Error(`Unknown map "${e}"`);
        return i
    }
    l.set(r.WHOOP_WORLD_MAP_ID, {
        ...a.WHOOP_WORLD,
        id: r.WHOOP_WORLD_MAP_ID,
        revision: 0,
        unlockLevel: 1,
        ...a.WHOOP_WORLD.editorDocument ? {
            editorDocument: {
                ...a.WHOOP_WORLD.editorDocument,
                mapId: r.WHOOP_WORLD_MAP_ID
            }
        } : {}
    });
    class p extends Error {
        constructor(e) {
            super(e),
            this.name = "MapUnavailableError"
        }
    }
    function m(e) {
        let i = l.get(e);
        if (!i)
            throw new p("This map is not available.");
        return i
    }
    e.s(["ALL_MAPS", 0, o, "MAP_READ_MS", 0, 15e3, "MAP_READ_TIMEOUT", 0, "The map took too long to load. Try again.", "MapDeletedError", 0, class extends p {
        constructor(e="This map is no longer available.") {
            super(e),
            this.name = "MapDeletedError"
        }
    }
    , "MapUnavailableError", 0, p, "accessibleMapId", 0, function(e) {
        return (0,
        s.canAccessMap)(e) && !(0,
        s.isLessonMap)(e) ? e : r.DEFAULT_MAP_ID
    }
    , "hasMap", 0, function(e) {
        return l.has(e)
    }
    , "listOfficialPlaces", 0, function() {
        return [...l.values()].filter(e => ("gridworks" === e.id || (0,
        r.isOfficialMapId)(e.id)) && !(0,
        s.isLessonMap)(e.id))
    }
    , "mapById", 0, d, "recordingMapRevision", 0, function(e) {
        let i = l.get(e)?.revision;
        return i && i > 0 ? i : null
    }
    , "registerOfficialMap", 0, function(e) {
        if (!(0,
        r.isOfficialMapId)(e.id))
            throw Error("Invalid official map identity.");
        l.set(e.id, e),
        (0,
        s.markOfficialMapPublished)(e.id)
    }
    , "registerPersonalMap", 0, function(e) {
        if ("gridworks" === e.id)
            throw Error("Cannot replace the canonical map.");
        l.set(e.id, e)
    }
    , "replayMap", 0, m, "replayMapChanged", 0, function(e, i) {
        return null !== i && m(e).revision !== i
    }
    , "resolveMap", 0, function(e) {
        return l.has(e) ? d(e) : d(r.DEFAULT_MAP_ID)
    }
    ])
}
, 792558, e => {
    "use strict";
    e.s(["timeAttackGateColor", 0, function(e, i) {
        return 0 === e ? "#37c8dd" : e === i - 1 ? "#74d94f" : "#ffb52e"
    }
    ])
}
]);
