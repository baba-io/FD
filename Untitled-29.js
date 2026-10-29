(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 325865, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645);
    e.i(671112);
    var n = e.i(523895)
      , i = e.i(106258)
      , s = e.i(273726)
      , r = e.i(247638)
      , l = e.i(580114);
    function o({label: e, title: a=e, valueRef: n, unit: i}) {
        return (0,
        t.jsxs)("div", {
            className: "sim-hud-reading",
            title: a,
            children: [(0,
            t.jsx)("span", {
                className: "sim-hud-reading__label",
                "aria-label": a,
                children: e
            }), (0,
            t.jsxs)("span", {
                className: "sim-hud-reading__measurement",
                children: [(0,
                t.jsx)("span", {
                    ref: n,
                    className: "sim-hud-reading__value",
                    children: "0"
                }), (0,
                t.jsx)("span", {
                    className: "sim-hud-reading__unit",
                    children: i
                })]
            })]
        })
    }
    function d() {
        return (0,
        t.jsx)("div", {
            className: "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            children: (0,
            t.jsxs)("svg", {
                className: "sim-osd-reticle",
                width: "64",
                height: "64",
                viewBox: "0 0 64 64",
                "aria-hidden": "true",
                children: [(0,
                t.jsxs)("g", {
                    fill: "none",
                    stroke: (0,
                    n.withAlpha)(n.PALETTE.ink, .6),
                    strokeWidth: "3.5",
                    children: [(0,
                    t.jsx)("circle", {
                        cx: "32",
                        cy: "32",
                        r: "19"
                    }), (0,
                    t.jsx)("path", {
                        d: "M32 2v7m0 46v7M2 32h7m46 0h7"
                    })]
                }), (0,
                t.jsxs)("g", {
                    fill: "none",
                    stroke: n.PALETTE.chalk,
                    strokeWidth: "1.5",
                    children: [(0,
                    t.jsx)("circle", {
                        cx: "32",
                        cy: "32",
                        r: "19"
                    }), (0,
                    t.jsx)("path", {
                        d: "M32 2v7m0 46v7M2 32h7m46 0h7"
                    })]
                })]
            })
        })
    }
    e.s(["Hud", 0, function({showSticks: e, combat: n=!1}) {
        let c = (0,
        a.useRef)(null)
          , u = (0,
        a.useRef)(null)
          , m = (0,
        a.useRef)(null)
          , h = (0,
        a.useRef)(null)
          , f = (0,
        a.useRef)(null)
          , p = (0,
        a.useRef)(null)
          , g = (0,
        a.useRef)(null)
          , x = (0,
        a.useRef)(null)
          , v = (0,
        a.useRef)(null)
          , b = (0,
        a.useRef)(0)
          , y = (0,
        a.useRef)(null)
          , _ = (0,
        a.useRef)(null);
        return (0,
        a.useEffect)( () => {
            let t = 0
              , a = (0,
            l.stickTravel)(112)
              , n = () => {
                t = requestAnimationFrame(n);
                let {telemetry: o, input: d} = r.live
                  , S = performance.now();
                if (c.current) {
                    let e = i.useSimStore.getState()
                      , t = "flying" === e.phase && !e.settingsOpen && !e.calibrating && !e.adminOpen && !e.profileOpen && (r.live.invertedSeconds >= s.INVERTED_PROMPT_SECONDS || r.live.drowned);
                    c.current.hidden === t && (c.current.hidden = !t);
                    let a = (0,
                    s.respawnBindingLabel)(e.settings.bindings, d.source);
                    u.current && u.current.textContent !== a && (u.current.textContent = a);
                    let n = (0,
                    s.respawnAction)(e);
                    m.current && m.current.textContent !== n && (m.current.textContent = n)
                }
                let M = o.altitude.toFixed(1);
                h.current && h.current.textContent !== M && (h.current.textContent = M);
                let j = String(Math.round(3.6 * o.speed));
                if (f.current && f.current.textContent !== j && (f.current.textContent = j),
                e && (0,
                l.writeStickDots)(p.current, g.current, d, a),
                o.armed !== y.current && (!1 === y.current && o.armed && (b.current = S + 1400),
                y.current = o.armed),
                x.current) {
                    let e = S < b.current;
                    x.current.style.opacity = e ? "1" : "0"
                }
                v.current && r.live.armBlockedByThrottle !== _.current && (_.current = r.live.armBlockedByThrottle,
                v.current.style.opacity = r.live.armBlockedByThrottle ? "1" : "0")
            }
            ;
            return t = requestAnimationFrame(n),
            () => cancelAnimationFrame(t)
        }
        , [e]),
        (0,
        t.jsxs)("div", {
            className: "sim-flight-ui pointer-events-none absolute inset-0 select-none",
            "data-combat": n || void 0,
            children: [(0,
            t.jsx)("div", {
                className: "sim-hud-scrim-top absolute inset-x-0 top-0 h-36 sm:h-40"
            }), (0,
            t.jsx)("div", {
                className: "sim-hud-scrim-bottom absolute inset-x-0 bottom-0 h-44 sm:h-52"
            }), (0,
            t.jsxs)("div", {
                className: "sim-hud-telemetry absolute",
                children: [(0,
                t.jsx)(o, {
                    label: "Speed",
                    valueRef: f,
                    unit: "km/h"
                }), (0,
                t.jsx)(o, {
                    label: "Alt",
                    title: "Altitude",
                    valueRef: h,
                    unit: "m"
                })]
            }), n ? null : (0,
            t.jsx)(d, {}), (0,
            t.jsxs)("div", {
                ref: c,
                role: "status",
                "aria-live": "polite",
                hidden: !0,
                "aria-atomic": "true",
                className: "fd-respawn-prompt",
                children: [(0,
                t.jsxs)("span", {
                    className: "fd-respawn-prompt__instruction",
                    children: [(0,
                    t.jsx)("kbd", {
                        ref: u,
                        className: "fd-respawn-prompt__binding",
                        children: "R"
                    }), " ·"]
                }), (0,
                t.jsx)("span", {
                    ref: m,
                    className: "fd-respawn-prompt__action",
                    children: "Respawn"
                })]
            }), (0,
            t.jsx)("div", {
                ref: x,
                className: "sim-hud-arm absolute right-8 bottom-[calc(2rem+var(--admin-bar-h))] font-display text-[14px] font-semibold tracking-[0.18em] uppercase opacity-0 sm:right-12 sm:bottom-[calc(2.5rem+var(--admin-bar-h))] sm:text-[15px]",
                style: {
                    transition: "opacity 140ms var(--fdk-ease)"
                },
                children: "Armed"
            }), (0,
            t.jsx)("div", {
                className: "sim-hud-sticks absolute inset-x-0 bottom-[calc(2rem+var(--admin-bar-h))] flex flex-col items-center sm:bottom-[calc(2.5rem+var(--admin-bar-h))]",
                children: (0,
                t.jsx)("div", {
                    className: "flex items-center",
                    children: e ? (0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-5 pb-[18px] sm:gap-6",
                        children: [(0,
                        t.jsx)(l.StickBox, {
                            label: "Thr / Yaw",
                            dotRef: p,
                            size: 112,
                            restBottom: !0
                        }), (0,
                        t.jsx)(l.StickBox, {
                            label: "Pit / Rol",
                            dotRef: g,
                            size: 112
                        })]
                    }) : (0,
                    t.jsx)("span", {
                        className: "font-tech text-[12px] text-(--fdk-orange)",
                        children: "+"
                    })
                })
            }), (0,
            t.jsx)("div", {
                ref: v,
                className: "sim-hud-warning absolute top-[28%] left-1/2 -translate-x-1/2 font-display text-[15px] font-medium tracking-[0.14em] uppercase opacity-0 sm:text-[16px]",
                style: {
                    transition: "opacity 140ms var(--fdk-ease)"
                },
                children: "Throttle high. Lower to arm"
            })]
        })
    }
    , "HudReticle", 0, d])
}
, 757930, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , n = e.i(28276)
      , i = e.i(135933)
      , s = e.i(593922)
      , r = e.i(617317)
      , l = e.i(905289)
      , o = e.i(609223)
      , d = e.i(771607)
      , c = e.i(333772)
      , u = e.i(247638)
      , m = e.i(907462)
      , h = e.i(106258)
      , f = e.i(809886)
      , p = e.i(331536)
      , g = e.i(967226)
      , x = e.i(514722)
      , v = e.i(170341);
    e.i(671112);
    var b = e.i(523895)
      , y = e.i(894969)
      , _ = e.i(871737)
      , S = e.i(870895)
      , M = e.i(246176);
    function j(e, t) {
        let a = !!e.userId && !!t?.members.some(t => t.id === e.userId);
        return {
            ...e,
            squad: a,
            squadLeader: a && t.leaderId === e.userId
        }
    }
    var k = e.i(807375)
      , w = e.i(796856)
      , N = e.i(73798)
      , A = e.i(890128)
      , I = e.i(511590);
    let T = b.PALETTE.sky
      , E = Array.from({
        length: 2
    }, (e, t) => t)
      , P = p.POI_ANCHOR_HEIGHT
      , L = e => (0,
    A.seatName)(e.name, e.label)
      , R = "800 10px Arial, Helvetica, sans-serif"
      , q = "700 9px Arial, Helvetica, sans-serif"
      , O = null;
    function C(e, t) {
        if ("function" == typeof OffscreenCanvas) {
            let a = new OffscreenCanvas(e,t);
            return {
                image: a,
                context: a.getContext("2d")
            }
        }
        let a = Object.assign(document.createElement("canvas"), {
            width: e,
            height: t
        });
        return {
            image: a,
            context: a.getContext("2d")
        }
    }
    let D = null
      , $ = new Map;
    function B(e, t, a) {
        let n = `${t}|${a}|${e}`
          , i = $.get(n);
        if (!i) {
            (D ??= C(1, 1).context).font = t;
            let s = e
              , r = D.measureText(s).width;
            for (; r > a && s.length > 1; )
                s = s.slice(0, -1),
                r = D.measureText(s + "…").width;
            i = {
                text: s === e ? e : s + "…",
                width: r
            },
            $.size > 512 && $.clear(),
            $.set(n, i)
        }
        return i
    }
    let H = new Map
      , F = new WeakMap;
    function W(e, t, a) {
        let n = F.get(e);
        n || F.set(e, n = new Map),
        n.get(t) !== a && (n.set(t, a),
        "text" === t ? e.textContent = a : "hidden" === t ? e.hidden = "true" === a : "disabled" === t ? e.disabled = "true" === a : "transform" === t || "opacity" === t || "zIndex" === t ? e.style[t] = a : t.startsWith("--") ? e.style.setProperty(t, a) : t.startsWith("attr:") ? e.setAttribute(t.slice(5), a) : t.startsWith("class:") ? e.classList.toggle(t.slice(6), "true" === a) : e.dataset[t] = a)
    }
    function z({activities: e, showPlayers: n=!0}) {
        let i = (0,
        a.useRef)(null);
        return (0,
        a.useEffect)( () => {
            let t = i.current;
            if (!t)
                return;
            let a = g.poiOverlayRegistry.register()
              , n = t.querySelector(".fd-navigation__tags")
              , s = n.getContext("2d")
              , o = ""
              , d = 1
              , c = e => {
                let t = e.map(e => `${e.x},${e.y},${e.name},${e.color},${e.squad},${e.compact},${e.edge},${e.bearing},${e.distance}`).join("|");
                if (t !== o && s) {
                    o = t;
                    var a = ec
                      , i = eu
                      , r = d;
                    for (let t of (s.setTransform(r, 0, 0, r, 0, 0),
                    s.clearRect(0, 0, a, i),
                    s.lineJoin = "round",
                    s.lineCap = "round",
                    e)) {
                        t.edge && (s.save(),
                        s.translate(t.x, t.y - 15),
                        s.rotate(t.bearing * Math.PI / 180),
                        s.beginPath(),
                        s.moveTo(-3, -14),
                        s.lineTo(0, -17),
                        s.lineTo(3, -14),
                        s.strokeStyle = b.PALETTE.ink,
                        s.lineWidth = 4.5,
                        s.stroke(),
                        s.strokeStyle = t.color,
                        s.lineWidth = 2.5,
                        s.stroke(),
                        s.restore());
                        let e = function(e, t) {
                            let a = `${t}|${e.name}|${e.color}|${e.squad}|${e.compact}|${e.distance}`
                              , n = H.get(a);
                            if (n)
                                return n;
                            let {pilot: i, squad: s} = O ??= {
                                pilot: new Path2D("M7 3a2 2 0 1 1-4 0 2 2 0 1 1 4 0ZM1 12v-1a4 4 0 0 1 8 0v1Z"),
                                squad: new Path2D("M4.5.8 8.2 4.5 4.5 8.2.8 4.5Z")
                            }
                              , r = e.squad ? 11 : 9
                              , l = e.compact ? 4 : 5
                              , o = e.squad && !e.compact && e.distance ? B(e.distance, q, 1 / 0) : null
                              , d = e.compact ? null : B(e.name, R, (e.squad ? 200 : 160) - 8 - r - l - (o ? l + o.width : 0))
                              , c = Math.ceil(8 + r + (d ? l + d.width : 0) + (o ? l + o.width : 0))
                              , {image: u, context: m} = C(Math.ceil(c * t), Math.ceil(20 * t));
                            m.scale(t, t),
                            m.lineJoin = "round",
                            m.strokeStyle = b.PALETTE.ink,
                            m.save(),
                            e.squad ? (m.translate(5, 5.5),
                            m.fillStyle = b.PALETTE.sky,
                            m.lineWidth = 1.6,
                            m.stroke(s),
                            m.fill(s)) : (m.translate(4, 4.5),
                            m.scale(.9, .9),
                            m.fillStyle = e.color,
                            m.lineWidth = 2,
                            m.stroke(i),
                            m.fill(i)),
                            m.restore(),
                            m.textBaseline = "middle",
                            m.lineWidth = 2;
                            let h = 4 + r + l;
                            for (let[t,a,n] of [[d, R, e.squad ? b.PALETTE.sky : b.PALETTE.chalk], [o, q, b.PALETTE.chalk]])
                                t && (m.font = a,
                                m.strokeText(t.text, h, 10),
                                m.fillStyle = n,
                                m.fillText(t.text, h, 10),
                                h += t.width + l);
                            H.size > 256 && H.clear();
                            let f = {
                                image: u,
                                width: c
                            };
                            return H.set(a, f),
                            f
                        }(t, r);
                        s.drawImage(e.image, Math.round(t.x - e.width / 2), t.y - 20, e.width, 20)
                    }
                    W(n, "pilots", e.map(e => e.name).join("|"))
                }
            }
              , f = () => {
                d = window.devicePixelRatio || 1,
                n.width = Math.max(1, Math.round(ec * d)),
                n.height = Math.max(1, Math.round(eu * d)),
                o = ""
            }
              , x = Array.from(t.querySelectorAll(".fd-poi")).map(e => ({
                element: e,
                badge: e.querySelector(".fd-poi__badge"),
                label: e.querySelector(".fd-poi__label"),
                mode: e.querySelector(".fd-poi__mode"),
                name: e.querySelector(".fd-poi__name"),
                distance: e.querySelector(".fd-poi__distance"),
                id: null,
                distanceAt: 0,
                labelWidth: 0,
                labelHeight: 0
            }))
              , I = new ResizeObserver(e => {
                for (let t of e) {
                    let e = x.find(e => e.label === t.target)
                      , a = t.borderBoxSize?.[0];
                    e && a && (e.labelWidth = a.inlineSize,
                    e.labelHeight = a.blockSize)
                }
            }
            );
            for (let e of x)
                I.observe(e.label);
            let E = new Map
              , P = null
              , D = t.querySelector(".fd-session__list")
              , $ = t.querySelector(".fd-session__squad-list")
              , F = t.querySelector(".fd-session__squad")
              , z = t.querySelector(".fd-session__squad-count")
              , K = new Map
              , J = e => {
                let t = document.createElement("li");
                t.className = "fd-session__pilot";
                let a = e => {
                    let t = document.createElement("span");
                    return t.className = e,
                    t
                }
                  , n = a("fd-session__level")
                  , i = document.createElement("span");
                n.append(i);
                let s = a("fd-session__squad-mark");
                s.setAttribute("aria-hidden", "true");
                let r = a("fd-session__team");
                r.setAttribute("role", "img");
                let l = document.createElement("button");
                l.type = "button",
                l.onclick = () => {
                    l.dataset.userId && _.usePilotProfile.getState().open(l.dataset.userId)
                }
                ,
                l.className = "fd-session__name";
                let o = a("fd-session__tag")
                  , d = a("fd-session__distance")
                  , c = a("fd-session__admin fd-pilot-badge");
                c.textContent = "DEV",
                c.setAttribute("aria-label", "Dev");
                let u = a("fd-session__badges")
                  , m = a("fd-session__leader");
                m.setAttribute("aria-label", "Squad leader");
                let h = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                h.setAttribute("viewBox", "0 0 24 24"),
                h.setAttribute("aria-hidden", "true");
                let f = document.createElementNS("http://www.w3.org/2000/svg", "path");
                f.setAttribute("d", "m3 6 5 4 4-7 4 7 5-4-2 12H5L3 6Zm2 15h14"),
                h.append(f),
                m.append(h);
                let p = a("fd-session__score");
                p.setAttribute("role", "img");
                let g = a("")
                  , x = a("")
                  , v = a("");
                p.append(g, x, v),
                t.append(s, r, n, l, o, m, u, c, d, p);
                let b = {
                    element: t,
                    name: l,
                    distance: d,
                    level: i,
                    admin: c,
                    badges: u,
                    badgeKey: "",
                    team: r,
                    tag: o,
                    score: p,
                    kos: g,
                    kod: x,
                    assists: v
                };
                return K.set(e, b),
                b
            }
              , G = null
              , U = t.querySelector(".fd-session > h2 .fd-session__count")
              , Y = t.querySelector(".fd-session__title")
              , V = t.querySelector(".fd-session")
              , Z = t.querySelector(".fd-session__status")
              , Q = t.querySelector(".fd-session__empty")
              , X = t.closest(".sim-shell") ?? t.parentElement ?? t
              , ee = ".fd-skill-hud, .fd-combo__callout, .fd-chain-xp-position, .fd-chat, .fd-respawn-prompt, .fd-after-host[data-compact] .fd-after"
              , et = new Map
              , ea = []
              , en = 0
              , ei = new ResizeObserver(e => {
                let a = t.getBoundingClientRect();
                for (let {target: t} of e) {
                    if (t === V) {
                        en = V.offsetTop + V.offsetHeight + 12;
                        continue
                    }
                    et.has(t) && et.set(t, (0,
                    m.hudReservationRect)(t.getBoundingClientRect(), a, t.classList.contains("fd-chat") ? 8 : 18))
                }
                ea = [...et.values()].filter(e => null !== e)
            }
            )
              , es = e => {
                ei.unobserve(e),
                ei.observe(e)
            }
              , er = () => {
                for (let e of et.keys())
                    es(e);
                es(V)
            }
              , el = () => {
                let e = new Set(X.querySelectorAll(ee));
                for (let t of et.keys())
                    e.has(t) || (ei.unobserve(t),
                    et.delete(t));
                for (let t of e)
                    et.has(t) || et.set(t, null);
                er()
            }
              , eo = new MutationObserver(e => {
                e.some(e => "childList" === e.type && [...e.addedNodes, ...e.removedNodes].some(e => e instanceof Element && (e.matches(ee) || e.querySelector(ee)))) ? el() : e.some(e => "attributes" === e.type) && er()
            }
            );
            eo.observe(X, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                attributeFilter: ["data-cinematic", "data-placement"]
            });
            let ed = new MutationObserver(er);
            X instanceof HTMLElement && ed.observe(X, {
                attributes: !0,
                attributeFilter: ["style"]
            }),
            el();
            let ec = t.clientWidth
              , eu = t.clientHeight;
            f();
            let em = new ResizeObserver( ([e]) => {
                ec = e.contentRect.width,
                eu = e.contentRect.height,
                f(),
                ef = 0,
                er()
            }
            );
            em.observe(t);
            let eh = 0
              , ef = 0
              , ep = performance.now()
              , eg = -1 / 0
              , ex = 15
              , ev = 0
              , eb = () => {
                D.children.length < ex || ex >= ev || (0,
                m.rosterScrollNearEnd)(ec, D, V) && (ex += 15,
                ef = 0)
            }
            ;
            D.scrollTop = 0,
            V.scrollTop = 0,
            D.addEventListener("scroll", eb, {
                passive: !0
            }),
            V.addEventListener("scroll", eb, {
                passive: !0
            });
            let ey = (e, t) => W(e, "text", t)
              , e_ = (e, t) => e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
              , eS = t => {
                var n, i;
                let s = Math.min(.1, Math.max(0, (t - ep) / 1e3));
                ep = t;
                let o = (0,
                v.recentDrawnView)(t)
                  , d = o?.camera ?? m.navigationRuntime.camera
                  , f = o?.lens ?? 0
                  , g = (0,
                m.seatedFeed)(m.navigationRuntime.multiplayer?.current ?? null, k.combatHud.active ? w.useMatchSeats.getState() : null)
                  , b = g?.selfSessionId ?? "local-pilot"
                  , _ = h.useSimStore.getState()
                  , I = (n = M.useLobbySocial.getState().squad,
                (i = _.isAnonymous ? null : _.playerAccountId) && n?.members.some(e => e.id === i) ? n : null)
                  , R = (0,
                m.pilotTargets)(g, t).map(e => j(e, I))
                  , q = null !== r.useMatchRace.getState().match
                  , O = e => q && void 0 !== e.seat ? (0,
                l.racerColor)(e.seat) : null
                  , C = e => O(e) ?? (e.squad ? T : (0,
                m.pilotIdentityColor)(e.name))
                  , {showPlayerOverlays: B, showActivityOverlays: H} = _.settings.graphics
                  , X = B && !k.combatHud.active ? (0,
                m.nearbyPilots)(R, u.live.position, {
                    everyone: q
                }) : []
                  , ee = H ? (0,
                m.nearbyEntrances)(e, u.live.position) : []
                  , et = k.combatHud.active && null !== k.combatHud.team
                  , ei = et ? w.useMatchState.getState().match?.scores : null;
                if (ei !== G && (G = ei,
                ef = 0),
                t >= ef && et) {
                    ef = t + 1e3;
                    let e = (0,
                    m.teamListRows)(g?.roster ?? [], {
                        key: b,
                        seat: k.combatHud.seat,
                        team: k.combatHud.team,
                        userId: _.isAnonymous ? null : _.playerAccountId
                    }, ei ?? void 0);
                    W(V, "match", "true"),
                    W(V, "squad", "false"),
                    W(F, "hidden", "true"),
                    ey(Y, "Teams"),
                    W(V, "attr:aria-label", "Teams"),
                    W(D, "attr:aria-label", "Pilots in this match"),
                    W(Z, "hidden", String(g?.status === "connected")),
                    ey(Z, g?.status === "connected" ? "" : g?.notice ?? (g?.status === "reconnecting" ? "Offline" : "Connecting…")),
                    W(Q, "hidden", "true");
                    let a = new Set(e.map(e => e.key));
                    for (let[e,t] of K)
                        a.has(e) || (t.element.remove(),
                        K.delete(e));
                    e.forEach( (t, a) => {
                        let n = K.get(t.key) ?? J(t.key);
                        for (let[e,i] of (D.children[a] !== n.element && D.insertBefore(n.element, D.children[a] ?? null),
                        ey(n.name, t.name),
                        W(n.name, "attr:title", t.you ? "You" : (0,
                        A.seatName)(t.name, t.label ?? void 0)),
                        W(n.name, "userId", t.label ? "" : t.userId ?? ""),
                        W(n.name, "disabled", String(!!t.label || !t.userId)),
                        W(n.name, "attr:aria-label", t.you ? "You" : `View ${t.name}'s profile`),
                        W(n.team, "attr:aria-label", `${(0,
                        N.teamName)(t.team)} team`),
                        ey(n.tag, t.label ?? ""),
                        ey(n.kos, String(t.kos)),
                        ey(n.kod, String(t.kod)),
                        ey(n.assists, String(t.assists)),
                        W(n.score, "attr:aria-label", `${t.kos} ${1 === t.kos ? "KO" : "KOs"}, ${t.kod ? `KO'd ${1 === t.kod ? "once" : `${t.kod} times`}` : "never KO'd"}, ${t.assists} ${1 === t.assists ? "assist" : "assists"}`),
                        Object.entries({
                            team: String(t.team),
                            split: String(t.split),
                            self: String(t.you),
                            label: t.label ?? "",
                            squad: "false",
                            leader: "false",
                            presence: "present",
                            admin: "false",
                            mod: "false"
                        })))
                            W(n.element, e, i);
                        W(n.element, "attr:aria-setsize", String(e.length)),
                        W(n.element, "attr:aria-posinset", String(a + 1))
                    }
                    )
                } else if (t >= ef) {
                    ef = t + 1e3;
                    let e = function(e, t) {
                        let a = e.map(e => j(e, t));
                        if (!t)
                            return a;
                        let n = new Set(e.map(e => e.userId).filter(Boolean));
                        for (let e of t.members)
                            n.has(e.id) || a.push({
                                id: `squad:${e.id}`,
                                userId: e.id,
                                kind: "pilot",
                                name: e.username,
                                level: (0,
                                S.xpToLevel)(e.xp),
                                position: null,
                                squad: !0,
                                squadLeader: e.id === t.leaderId,
                                presence: e.online ? "elsewhere" : "offline",
                                activity: (0,
                                M.squadActivityLabel)(e)
                            });
                        return a
                    }((0,
                    m.lobbyTargets)(g, R, {
                        id: b,
                        kind: "pilot",
                        name: _.username ?? "You",
                        userId: _.isAnonymous ? null : _.playerAccountId,
                        badges: y.useInventory.getState().packs.filter(e => e.badge_visible && e.badge_label).map(e => e.badge_label),
                        admin: _.isAdmin,
                        mod: _.isMod,
                        level: (0,
                        S.xpToLevel)(_.xp),
                        position: [u.live.position.x, u.live.position.y, u.live.position.z]
                    }), I);
                    W(V, "match", "false"),
                    W(D, "attr:aria-label", "Pilots in this lobby");
                    let a = (0,
                    m.sortRosterContacts)((0,
                    m.lobbyContacts)(e, u.live.position), b)
                      , n = a.filter(e => e.squad)
                      , i = a.filter(e => !e.squad);
                    ev = i.length,
                    ex = Math.max(15, Math.min(ex, ev));
                    let s = [...n, ...i.slice(0, ex)];
                    ey(U, String(i.length)),
                    ey(z, String(n.length)),
                    W(F, "hidden", String(!n.length)),
                    W(V, "squad", String(!!n.length));
                    let r = "Lobby";
                    ey(Y, r),
                    W(V, "attr:aria-label", r),
                    W(Z, "hidden", String(g?.status === "connected")),
                    ey(Z, g?.status === "connected" ? "" : g?.notice ?? (g?.status === "reconnecting" ? "Offline" : "Connecting…")),
                    W(Q, "hidden", String(i.length > 0 || g?.status !== "connected")),
                    ey(Q, n.length ? "No other pilots" : "No pilots in this lobby");
                    let l = new Set(s.map(e => e.id));
                    for (let[e,t] of K)
                        l.has(e) || (t.element.remove(),
                        K.delete(e));
                    s.forEach( (e, t) => {
                        let a = K.get(e.id) ?? J(e.id)
                          , s = e.squad ? $ : D
                          , r = e.squad ? t : t - n.length;
                        s.children[r] !== a.element && s.insertBefore(a.element, s.children[r] ?? null);
                        let l = e.id === b;
                        ey(a.name, l ? "You" : e.name),
                        ey(a.level, e.label ?? (null == e.level ? "–" : String(e.level))),
                        W(a.level.parentElement, "attr:aria-label", e.label ?? (null == e.level ? "Level unavailable" : `Level ${e.level}`)),
                        W(a.element, "label", e.label ?? ""),
                        W(a.name, "attr:title", l ? "You" : e.admin ? `${e.name} \xb7 Dev` : e.name),
                        W(a.name, "userId", e.userId ?? ""),
                        W(a.name, "disabled", String(!e.userId)),
                        W(a.name, "attr:aria-label", `View ${e.name}'s profile${e.squad ? ", squad member" : ""}`),
                        W(a.element, "squad", String(!!e.squad)),
                        W(a.element, "self", String(l)),
                        W(a.element, "leader", String(!!e.squadLeader)),
                        W(a.element, "presence", e.presence ?? "present"),
                        ey(a.admin, e.admin ? "DEV" : "MOD"),
                        W(a.admin, "class:fd-pilot-badge--dev", String(!!e.admin)),
                        W(a.admin, "class:fd-pilot-badge--mod", String(!e.admin && !!e.mod)),
                        W(a.admin, "attr:aria-label", e.admin ? "Developer" : "Moderator"),
                        W(a.element, "mod", String(!e.admin && !!e.mod));
                        let o = [...new Set(e.badges ?? [])]
                          , d = JSON.stringify(o);
                        a.badgeKey !== d && (a.badges.replaceChildren(...o.map(e => {
                            let t = document.createElement("span");
                            return t.className = "fd-pilot-badge fd-pilot-badge--cosmetic",
                            t.textContent = e,
                            t.setAttribute("aria-label", `${e} badge`),
                            t
                        }
                        )),
                        a.badgeKey = d);
                        let c = l ? null : e.distance;
                        W(a.distance, "hidden", String(null === c && !e.presence && !l)),
                        ey(a.distance, "offline" === e.presence ? "Offline" : "elsewhere" === e.presence ? e.activity ?? "Not in lobby" : l ? "–" : null === c ? "" : (0,
                        m.navigationDistance)(c)),
                        W(a.element, "--pilot-color", O(e) ?? (0,
                        m.pilotIdentityColor)(e.name)),
                        W(a.element, "team", ""),
                        W(a.element, "split", "false"),
                        W(a.element, "admin", String(e.admin)),
                        W(a.element, "attr:aria-setsize", String(e.squad ? n.length : i.length)),
                        W(a.element, "attr:aria-posinset", String(r + 1))
                    }
                    )
                }
                if (!d) {
                    c([]),
                    x.forEach(e => {
                        W(e.element, "hidden", "true"),
                        e.id = null
                    }
                    ),
                    a.update([]);
                    return
                }
                let es = ec <= 700 || eu <= 600;
                W(V, "attr:tabindex", ec <= 700 ? "0" : "-1");
                let er = es ? 16 : ec < 1100 ? 32 : 40
                  , el = es || ec < 1100 ? 210 : 286
                  , eo = {
                    left: ec - er - (es ? 202 : 316),
                    top: 0,
                    right: ec,
                    bottom: es ? 100 : 142
                }
                  , ed = [V.hidden ? {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                } : {
                    left: 0,
                    top: 0,
                    right: er + el,
                    bottom: en
                }, eo, ...ea]
                  , em = new Set(ee.map(e => e.id));
                for (let e of E.keys())
                    em.has(e) || E.delete(e);
                for (let e of x)
                    null === e.id || em.has(e.id) || (e.id = null);
                let eh = 1 - Math.exp(-s / .1)
                  , eg = []
                  , eb = null
                  , eS = ee.map(e => {
                    let t = E.get(e.id);
                    t || E.set(e.id, t = {
                        edge: !1,
                        angle: null
                    });
                    let a = (0,
                    m.viewPoint)(e.position, d, ec, eu, f);
                    if (t.edge = !(0,
                    m.pinOnScreen)(a, ec, eu, 32, t.edge),
                    !t.edge) {
                        t.angle = null;
                        let n = ec / 2 + a.x
                          , i = eu / 2 + a.y;
                        return {
                            entrance: e,
                            x: n,
                            y: i,
                            edge: !1,
                            bearing: 0,
                            dim: (0,
                            m.insideHud)({
                                x: n,
                                y: i
                            }, ed, 6)
                        }
                    }
                    if (!e.edgeEligible)
                        return t.angle = null,
                        null;
                    let n = Math.atan2(a.dy, a.dx);
                    null === t.angle ? t.angle = n : t.angle += Math.atan2(Math.sin(n - t.angle), Math.cos(n - t.angle)) * eh;
                    let i = (0,
                    m.placeEdgeCue)(t.angle, ec, eu, ed, eg);
                    return eg.push(i),
                    {
                        entrance: e,
                        ...i,
                        edge: !0,
                        bearing: 180 * t.angle / Math.PI + 90,
                        dim: !1
                    }
                }
                ).filter(e => null !== e);
                for (let e of (P = (0,
                m.pickFocus)(eS.filter(e => !e.edge && !e.dim && e.entrance.fade > .5).map(e => ({
                    id: e.entrance.id,
                    x: e.x,
                    y: e.y
                })), {
                    x: ec / 2,
                    y: eu / 2
                }, P, .12 * eu, .18 * eu),
                eS)) {
                    if (x.some(t => t.id === e.entrance.id))
                        continue;
                    let t = x.find(e => null === e.id || !eS.some(t => t.entrance.id === e.id));
                    t && (t.id = e.entrance.id,
                    t.distanceAt = 0)
                }
                let eM = [];
                for (let e of x) {
                    let a = eS.findIndex(t => t.entrance.id === e.id)
                      , n = eS[a];
                    if (W(e.element, "hidden", String(!n)),
                    !n)
                        continue;
                    let {entrance: i} = n
                      , s = Math.min(1, Math.max(0, (i.distance - 40) / 120))
                      , r = (0,
                    p.poiBadgeSize)(n.edge ? 0 : (0,
                    m.projectPoiSize)(i.position, d, ec, eu, f), n.edge)
                      , l = (1 - .15 * s) * (n.dim ? .35 : 1)
                      , o = i.id === P || !n.edge && i.distance < 14
                      , c = i.kind
                      , u = p.POI_IDENTITIES[c]
                      , h = i.locked ?? (0,
                    S.xpToLevel)(_.xp) < u.unlockLevel;
                    W(e.element, "kind", c),
                    W(e.element, "locked", String(h)),
                    W(e.element, "--poi-color", h ? p.POI_LOCKED_COLOR : p.POI_IDENTITIES[c].color),
                    W(e.element, "--poi-size", `${r.toFixed(1)}px`),
                    ey(e.mode, h ? `Level ${u.unlockLevel}` : "");
                    let g = o && !n.edge ? e.label : e.element;
                    e.distance.parentElement !== g && g.append(e.distance),
                    ey(e.name, i.name),
                    t >= e.distanceAt && (e.distanceAt = t + 250,
                    ey(e.distance, (0,
                    m.entranceDistance)(i.distance)));
                    let x = r / 2 + 6
                      , v = {
                        left: n.x + x,
                        right: n.x + x + e.labelWidth,
                        top: n.y - e.labelHeight / 2,
                        bottom: n.y + e.labelHeight / 2
                    }
                      , b = o && (v.right > ec - 16 || ed.some(e => e_(v, e)));
                    if (W(e.element, "flip", String(b)),
                    W(e.element, "edge", String(n.edge)),
                    W(e.element, "focus", String(o)),
                    W(e.element, "zIndex", String(2 - a)),
                    W(e.element, "opacity", l.toFixed(2)),
                    W(e.element, "transform", `translate(${Math.round(n.x)}px,${Math.round(n.y)}px)`),
                    n.edge && W(e.element, "--bearing", `${n.bearing.toFixed(1)}deg`),
                    eM.push(i.id),
                    o) {
                        let t = Math.max(r, e.labelHeight) / 2;
                        eb = {
                            left: b ? n.x - x - e.labelWidth : n.x - r / 2,
                            right: b ? n.x + r / 2 : n.x + x + e.labelWidth,
                            top: n.y - t,
                            bottom: n.y + t
                        }
                    }
                }
                a.update(eM);
                let ej = X.map(e => (0,
                m.projectMarker)(e.position, d, ec, eu, {
                    lens: f
                })).flatMap(e => e.edge ? [] : [{
                    left: e.x - 10,
                    right: e.x + 10,
                    top: e.y - 10,
                    bottom: e.y + 10
                }])
                  , ek = eb ? [eb] : []
                  , ew = []
                  , eN = [];
                for (let e of (0,
                m.sortPilotLabelContacts)(X)) {
                    let t = (0,
                    m.projectPilotLabel)(e.position, d, ec, eu, f);
                    if ((0,
                    m.insideHud)(t, ed, 12)) {
                        let e = t.x > ec / 2;
                        t = {
                            ...t,
                            edge: !0,
                            angle: 180 * Math.atan2(t.y - eu / 2, t.x - ec / 2) / Math.PI + 90,
                            x: e ? eo.left - 18 : ed[0].right + 18
                        }
                    }
                    t.edge && (t = (0,
                    m.separateEdgeMarker)(t, ew, ec, eu, ed),
                    ew.push(t));
                    let a = t.edge;
                    if (!t.edge) {
                        let n = Math.min(e.squad ? 200 : 160, (e.squad ? 62 : 22) + 6.4 * L(e).length)
                          , i = !1;
                        for (let e = 0; e < 3; e++) {
                            let a = t.y - 32 * e
                              , s = {
                                left: t.x - n / 2 - 4,
                                right: t.x + n / 2 + 4,
                                top: a - 32,
                                bottom: a + 3
                            };
                            if (!(s.top < 16 || [...ed, ...ek, ...ej].some(e => e_(s, e)))) {
                                t.y = a,
                                ek.push(s),
                                i = !0;
                                break
                            }
                        }
                        a = !i
                    }
                    eN.push({
                        x: Math.round(t.x),
                        y: Math.round(t.y),
                        name: L(e),
                        color: C(e),
                        squad: !!e.squad,
                        compact: a,
                        edge: t.edge,
                        bearing: t.edge ? Math.round(t.angle) : 0,
                        distance: e.squad ? (0,
                        m.navigationDistance)(e.distance) : ""
                    })
                }
                c([...eN.filter(e => !e.squad), ...eN.filter(e => e.squad)])
            }
              , eM = e => {
                eh = requestAnimationFrame(eM),
                e - eg > 100 && eS(e)
            }
            ;
            eh = requestAnimationFrame(eM);
            let ej = (0,
            v.onFrameDrawn)( () => {
                eS(eg = performance.now())
            }
            );
            return () => {
                cancelAnimationFrame(eh),
                ej(),
                em.disconnect(),
                ei.disconnect(),
                I.disconnect(),
                eo.disconnect(),
                ed.disconnect(),
                a.release(),
                D.removeEventListener("scroll", eb),
                V.removeEventListener("scroll", eb),
                D.replaceChildren(),
                $.replaceChildren()
            }
        }
        , [e]),
        (0,
        t.jsxs)("div", {
            ref: i,
            className: "fd-navigation sim-flight-ui",
            "aria-label": "Free flight navigation",
            children: [(0,
            t.jsxs)("section", {
                className: "fd-session",
                "aria-label": "Lobby",
                hidden: !n,
                children: [(0,
                t.jsxs)("div", {
                    className: "fd-session__squad",
                    hidden: !0,
                    children: [(0,
                    t.jsxs)("h2", {
                        children: [(0,
                        t.jsx)("span", {
                            children: "Squad"
                        }), (0,
                        t.jsx)("span", {
                            className: "fd-session__count fd-session__squad-count",
                            children: "0"
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: "fd-session__panel",
                        children: (0,
                        t.jsx)("ul", {
                            className: "fd-session__squad-list",
                            "aria-label": "Your squad"
                        })
                    })]
                }), (0,
                t.jsxs)("h2", {
                    children: [(0,
                    t.jsx)("span", {
                        className: "fd-session__title",
                        children: "Lobby"
                    }), (0,
                    t.jsx)("span", {
                        className: "fd-session__count",
                        children: "0"
                    })]
                }), (0,
                t.jsxs)("span", {
                    className: "fd-session__columns",
                    "aria-hidden": "true",
                    children: [(0,
                    t.jsx)("span", {
                        children: "K"
                    }), (0,
                    t.jsx)("span", {
                        children: "D"
                    }), (0,
                    t.jsx)("span", {
                        children: "A"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "fd-session__panel",
                    children: [(0,
                    t.jsx)("p", {
                        className: "fd-session__status",
                        role: "status",
                        children: "Connecting…"
                    }), (0,
                    t.jsx)("ul", {
                        className: "fd-session__list",
                        tabIndex: 0,
                        "aria-label": "Pilots in this lobby"
                    }), (0,
                    t.jsx)("p", {
                        className: "fd-session__empty",
                        hidden: !0,
                        children: "No pilots in this lobby"
                    })]
                })]
            }), (0,
            t.jsxs)("div", {
                className: "fd-navigation__markers",
                "aria-hidden": "true",
                children: [(0,
                t.jsx)("canvas", {
                    className: "fd-navigation__tags"
                }), E.map(e => (0,
                t.jsxs)("div", {
                    className: "fd-poi",
                    hidden: !0,
                    children: [(0,
                    t.jsx)("span", {
                        className: "fd-poi__chevron",
                        children: (0,
                        t.jsxs)("svg", {
                            width: "9",
                            height: "6",
                            viewBox: "0 0 12 8",
                            children: [(0,
                            t.jsx)("path", {
                                className: "fd-hud-outline",
                                d: "m1.5 6.5 4.5-5 4.5 5"
                            }), (0,
                            t.jsx)("path", {
                                d: "m1.5 6.5 4.5-5 4.5 5"
                            })]
                        })
                    }), (0,
                    t.jsx)("span", {
                        className: "fd-poi__badge",
                        children: (0,
                        t.jsx)(x.PoiIcon, {})
                    }), (0,
                    t.jsx)("span", {
                        className: "fd-poi__distance"
                    }), (0,
                    t.jsxs)("span", {
                        className: "fd-poi__label",
                        children: [(0,
                        t.jsx)("span", {
                            className: "fd-poi__mode"
                        }), (0,
                        t.jsx)("strong", {
                            className: "fd-poi__name"
                        })]
                    })]
                }, `pin-${e}`))]
            })]
        })
    }
    e.s(["NavigationHud", 0, z, "WorldNavigationHud", 0, function({showPlayers: e=!0, pois: r=!0}) {
        let l = (0,
        I.useActivityEntrances)()
          , u = (0,
        h.useSimStore)(f.activeMapId)
          , m = (0,
        h.useSimStore)(e => e.lessonAuthoringEpoch)
          , p = (0,
        h.useSimStore)(d.confirmedXp)
          , g = (0,
        h.useSimStore)(e => e.droneGifts)
          , x = (0,
        a.useMemo)( () => {
            if (!c.RACE_LOBBY_ENABLED || !r || !l)
                return [];
            let e = e => [e[0], e[1] + P, e[2]];
            return [...(0,
            o.hudRaces)((0,
            n.listTimeAttacks)(), u, p, g).map(t => ({
                id: `race:${t.id}`,
                kind: "race",
                name: t.name,
                position: e((0,
                s.markerForCourse)(t).position)
            })), ...(0,
            n.listArenas)().filter(e => e.mapId === u).map(t => ({
                id: `arena:${t.id}`,
                kind: "tdm",
                name: t.name,
                position: e((0,
                s.markerForCourse)((0,
                i.arenaEntrance)(t)).position)
            }))]
        }
        , [u, m, p, g, r, l]);
        return (0,
        t.jsx)(z, {
            activities: x,
            showPlayers: e
        })
    }
    ], 757930)
}
, 383068, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(720996)
      , n = e.i(271645)
      , i = e.i(907462)
      , s = e.i(247638)
      , r = e.i(106258)
      , l = e.i(49159)
      , o = e.i(497710)
      , d = e.i(170341);
    e.i(671112),
    e.s(["RaceLeaveWarning", 0, function() {
        let e = (0,
        n.useRef)(null);
        return (0,
        n.useEffect)( () => {
            let t, n = e.current, c = n.querySelector(".fd-race-leave__title"), u = n.querySelector(".fd-race-leave__count"), m = n.querySelector(".fd-race-leave__hint"), h = n.querySelector(".fd-race-leave__arrow"), f = n.querySelector(".fd-race-leave__arrow-label"), p = n.querySelector(".fd-race-leave__arrow-distance"), g = n.querySelector(".fd-race-leave__gone"), x = a.reducedMotionQuery, v = 0, b = performance.now(), y = 0, _ = 0, S = "idle", M = -1, j = "", k = 0, w = e => {
                e !== S && (S = e,
                n.dataset.state = e)
            }
            , N = e => {
                v = requestAnimationFrame(N);
                let a = Math.min(.1, (e - b) / 1e3);
                b = e;
                let A = x.matches ? "reduce" : "full";
                n.dataset.motion !== A && (n.dataset.motion = A),
                x.matches && t && (t.cancel(),
                t = void 0);
                let I = r.useSimStore.getState()
                  , T = !!I.raceRun && "flying" === I.phase
                  , E = "flying" === I.phase && l.mapReturnWarning.warning
                  , P = E ? l.mapReturnWarning : o.timeAttackLeave
                  , L = E || T && o.timeAttackLeave.warning
                  , R = L ? P.level : 0;
                (y += (R - y) * (1 - Math.exp(-a * (R > y ? 12 : 14)))) < .002 && (y = 0),
                o.timeAttackLeave.leftAt && o.timeAttackLeave.leftAt !== k && (k = o.timeAttackLeave.leftAt,
                n.dataset.stagedExit = String(o.timeAttackLeave.leftStaged),
                g.textContent = !o.timeAttackLeave.leftRestaged || o.timeAttackLeave.leftStaged || o.timeAttackLeave.solo ? o.timeAttackLeave.leftRestaged ? "Back to the start" : "Back to free flight" : "Back to the last gate",
                w("idle"),
                n.offsetWidth,
                w("poof")),
                E && "poof" === S && w("warning");
                let q = "poof" === S && e - k < 1600;
                if (q || w(L ? "warning" : "idle"),
                n.style.display = y > 0 || q ? "" : "none",
                "none" === n.style.display)
                    return;
                _ = (_ + a * (1.1 + 1.3 * y)) % 1;
                let O = x.matches ? .5 : .5 - .5 * Math.cos(_ * Math.PI * 2);
                if (n.style.setProperty("--leave", y.toFixed(3)),
                n.style.setProperty("--leave-pulse", O.toFixed(3)),
                n.style.setProperty("--leave-shake", x.matches ? "0px" : `${(Math.sin(.05 * e) * y * y * 1.25).toFixed(2)}px`),
                !L) {
                    h.style.display = "none";
                    return
                }
                let C = Math.ceil(P.secondsLeft);
                C !== M && (M = C,
                u.textContent = String(C),
                n.dataset.final = String(C <= 1),
                t?.cancel(),
                x.matches || (t = u.animate([{
                    transform: "scale(1.18)"
                }, {
                    transform: "scale(1)"
                }], {
                    duration: 220,
                    easing: "cubic-bezier(.2,.8,.25,1)"
                })));
                let D = E ? "map" : o.timeAttackLeave.staged ? "start" : "course"
                  , $ = !E && o.timeAttackLeave.solo;
                D + $ !== j && (j = D + $,
                n.dataset.kind = D,
                c.textContent = E ? "Leaving the map" : $ ? "Leaving the race" : "Off course",
                m.textContent = E ? "Turn back or respawn" : "start" === D ? "Head for the start gate" : $ ? "Turn back or the run restarts" : "Turn back or you go back to the last gate",
                f.textContent = E ? "Return to map" : "start" === D ? "Start gate" : "Next gate");
                let B = (0,
                d.recentDrawnView)()
                  , H = B?.camera ?? i.navigationRuntime.camera;
                if (!H) {
                    h.style.display = "none";
                    return
                }
                let F = n.clientWidth
                  , W = n.clientHeight
                  , z = (0,
                i.projectMarker)(P.target, H, F, W, {
                    lens: B?.lens ?? 0
                });
                h.style.display = "",
                h.dataset.edge = String(z.edge),
                h.style.transform = `translate(${z.x.toFixed(1)}px, ${z.y.toFixed(1)}px)`,
                h.style.setProperty("--bearing", `${(z.edge ? z.angle : 180 * !E).toFixed(1)}deg`);
                let[K,J,G] = P.target;
                p.textContent = (0,
                i.navigationDistance)(Math.hypot(s.live.position.x - K, s.live.position.y - J, s.live.position.z - G))
            }
            ;
            return v = requestAnimationFrame(N),
            () => {
                cancelAnimationFrame(v),
                t?.cancel()
            }
        }
        , []),
        (0,
        t.jsxs)("div", {
            ref: e,
            className: "fd-race-leave fdk-screen",
            "data-state": "idle",
            style: {
                display: "none"
            },
            children: [(0,
            t.jsx)("div", {
                className: "fd-race-leave__grade",
                "aria-hidden": !0
            }), (0,
            t.jsx)("div", {
                className: "fd-race-leave__edge",
                "aria-hidden": !0
            }), (0,
            t.jsxs)("div", {
                className: "fd-race-leave__arrow",
                "aria-hidden": !0,
                children: [(0,
                t.jsx)("svg", {
                    className: "fd-race-leave__chevron",
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    children: (0,
                    t.jsx)("path", {
                        d: "M8 26 20 12l12 14"
                    })
                }), (0,
                t.jsxs)("span", {
                    className: "fd-race-leave__tag",
                    children: [(0,
                    t.jsx)("span", {
                        className: "fd-race-leave__arrow-label",
                        children: "Next gate"
                    }), " ", (0,
                    t.jsx)("b", {
                        className: "fd-race-leave__arrow-distance"
                    })]
                })]
            }), (0,
            t.jsxs)("div", {
                className: "fd-race-leave__card",
                role: "status",
                children: [(0,
                t.jsx)("p", {
                    className: "fd-race-leave__banner",
                    children: (0,
                    t.jsx)("span", {
                        className: "fd-race-leave__title",
                        children: "Leaving the race"
                    })
                }), (0,
                t.jsx)("span", {
                    className: "fd-race-leave__count",
                    "aria-hidden": !0,
                    children: "5"
                }), (0,
                t.jsx)("p", {
                    className: "fd-race-leave__hint",
                    children: "Turn back to the course"
                })]
            }), (0,
            t.jsx)("div", {
                className: "fd-race-leave__poof",
                "aria-hidden": !0,
                children: (0,
                t.jsx)("p", {
                    className: "fd-race-leave__gone",
                    children: "Back to free flight"
                })
            })]
        })
    }
    ])
}
, 625965, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(418355)
      , n = e.i(617317)
      , i = e.i(388365)
      , s = e.i(905289);
    function r({seat: e}) {
        return (0,
        t.jsx)("i", {
            className: "fd-race-seat",
            style: {
                "--seat-color": (0,
                s.racerColor)(e)
            },
            "aria-hidden": !0
        })
    }
    function l({value: e, hint: a}) {
        return null === e ? null : (0,
        t.jsxs)("div", {
            className: "fd-race-countdown fdk-screen",
            "data-go": "go" === e || void 0,
            role: "timer",
            "aria-live": "assertive",
            children: [(0,
            t.jsx)("span", {
                children: "go" === e ? "GO" : e
            }, String(e)), a && (0,
            t.jsx)("small", {
                children: a
            })]
        })
    }
    function o(e) {
        return "lost" === e ? "Lag" : "resync" === e ? "Re-sync" : null
    }
    function d({rows: e}) {
        return (0,
        t.jsx)("ol", {
            className: "fd-race-standings",
            "aria-label": "Standings",
            children: e.map(e => (0,
            t.jsxs)("li", {
                "data-self": e.self || void 0,
                "data-ghost": e.ghost || void 0,
                "data-out": "dnf" === e.outcome || void 0,
                children: [(0,
                t.jsx)(r, {
                    seat: e.seat
                }), (0,
                t.jsx)("b", {
                    children: e.position
                }), (0,
                t.jsx)("span", {
                    children: e.name
                }), (0,
                t.jsx)("time", {
                    children: "dnf" === e.outcome ? o(e.reason) ? `DNF \xb7 ${o(e.reason)}` : "DNF" : 1 === e.position || e.self ? null !== e.split ? (0,
                    n.formatMatchTime)(e.split) : "" : null !== e.gap ? (0,
                    n.formatGap)(e.gap) : ""
                })]
            }, e.seat))
        })
    }
    e.i(671112),
    e.s(["Countdown", 0, l, "FinishStamp", 0, function({place: e, final: i, timeMs: s, best: r, closesInMs: l}) {
        return (0,
        t.jsxs)("div", {
            className: "fd-race-finished fdk-screen sim-flight-ui",
            role: "status",
            children: [(0,
            t.jsx)("div", {
                className: "fd-race-finished__stamp",
                children: (0,
                t.jsx)("span", {
                    children: e ? (0,
                    a.placementText)(e) : "Finished"
                })
            }), (0,
            t.jsx)("p", {
                className: "fd-race-finished__time",
                children: (0,
                n.formatMatchTime)(s)
            }), r && (0,
            t.jsx)("p", {
                className: "fd-race-finished__best",
                children: "New personal best"
            }), !i && null !== l && l > 0 && (0,
            t.jsxs)("p", {
                className: "fd-race-finished__window",
                children: ["Race closes in ", Math.ceil(l / 1e3), " s"]
            })]
        })
    }
    , "GateResetHint", 0, function() {
        return (0,
        t.jsx)("div", {
            className: "fd-race-countdown fdk-screen",
            role: "status",
            children: (0,
            t.jsx)("small", {
                children: "Throttle up to go"
            })
        })
    }
    , "LagHold", 0, function({state: e, start: a=!1}) {
        return (0,
        t.jsxs)("div", {
            className: "fd-race-wait fdk-screen",
            role: "status",
            "data-lag": e,
            children: [(0,
            t.jsx)("p", {
                children: "lost" === e ? "Connection lost" : "resync" === e ? "Re-syncing" : "Back in"
            }), (0,
            t.jsx)("small", {
                children: "back" === e ? a ? "Back to the start" : "Back to your last gate" : "Your clock is still running"
            }), "back" === e && (0,
            t.jsx)("small", {
                "data-hint": !0,
                children: "Throttle up to go"
            })]
        })
    }
    , "OutOfRace", 0, function({reason: e}) {
        return (0,
        t.jsxs)("div", {
            className: "fd-race-wait fdk-screen",
            role: "status",
            "data-out": !0,
            children: [(0,
            t.jsx)("p", {
                children: "Out of the race"
            }), (0,
            t.jsx)("small", {
                children: "lost" === e ? "Connection lost" : "resync" === e ? "Held for a re-sync" : ""
            })]
        })
    }
    , "PodiumTag", 0, function({place: e, name: a, self: n, seat: i}) {
        return (0,
        t.jsxs)("div", {
            className: "fd-race-podium-tag fdk-screen",
            "data-self": n || void 0,
            children: [void 0 !== i && (0,
            t.jsx)(r, {
                seat: i
            }), (0,
            t.jsx)("b", {
                children: e
            }), (0,
            t.jsx)("span", {
                children: a
            })]
        })
    }
    , "RaceEndTable", 0, function({rows: e}) {
        return (0,
        t.jsxs)("div", {
            className: "fd-end__standings",
            "data-podium": !0,
            children: [(0,
            t.jsxs)("p", {
                className: "fd-end__head",
                "aria-hidden": !0,
                children: [(0,
                t.jsx)("span", {
                    children: "Pos"
                }), (0,
                t.jsx)("span", {
                    children: "Pilot"
                }), (0,
                t.jsx)("span", {
                    children: "Drone"
                })]
            }), (0,
            t.jsx)("ol", {
                className: "fd-end__table",
                "aria-label": "Standings",
                children: e.map(e => (0,
                t.jsxs)("li", {
                    "data-self": e.self || void 0,
                    "data-out": "dnf" === e.outcome || void 0,
                    children: [(0,
                    t.jsx)(r, {
                        seat: e.seat
                    }), (0,
                    t.jsx)("b", {
                        className: "fd-end__place",
                        children: e.place ?? e.position
                    }), (0,
                    t.jsx)("span", {
                        className: "fd-end__pilot",
                        children: e.name
                    }), (0,
                    t.jsxs)("span", {
                        className: "fd-end__drone",
                        children: [i.RACE_DRONE_NAMES[e.drone] ?? e.drone, "dnf" === e.outcome ? " · DNF" : ""]
                    })]
                }, e.seat))
            })]
        })
    }
    , "RaceHud", 0, function({view: e, clock: i, timeMs: s}) {
        let r;
        return (0,
        t.jsxs)("div", {
            className: "fd-race-hud sim-flight-ui",
            "aria-label": "Race",
            children: [(0,
            t.jsxs)("section", {
                className: "fd-race-hud__place",
                "aria-label": "Position",
                children: [(0,
                t.jsxs)("strong", {
                    children: [(0,
                    t.jsx)("span", {
                        children: e.position
                    }), "/", e.field]
                }), (null !== e.toLeader || e.ahead) && (0,
                t.jsxs)("dl", {
                    children: [null !== e.toLeader && (0,
                    t.jsxs)("div", {
                        "data-lead": !0,
                        children: [(0,
                        t.jsx)("dt", {
                            children: "to leader"
                        }), (0,
                        t.jsx)("dd", {
                            children: (0,
                            n.formatGap)(e.toLeader)
                        })]
                    }), e.ahead && (0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsxs)("dt", {
                            children: ["to ", (r = e.ahead.place,
                            (0,
                            a.placementText)(r).toUpperCase())]
                        }), (0,
                        t.jsx)("dd", {
                            children: (0,
                            n.formatGap)(-e.ahead.gap)
                        })]
                    })]
                })]
            }), (0,
            t.jsxs)("section", {
                className: "fd-race-hud__gate",
                "aria-label": "Gate",
                children: [(0,
                t.jsx)("small", {
                    children: "Gate"
                }), (0,
                t.jsxs)("b", {
                    children: [Math.min(e.gate, e.gates), "/", e.gates]
                })]
            }), (0,
            t.jsx)("div", {
                className: "fd-race-hud__clock",
                "aria-label": "Race time",
                children: (0,
                t.jsx)("span", {
                    ref: i,
                    children: (0,
                    n.formatMatchTime)(s ?? 0)
                })
            }), (0,
            t.jsx)(d, {
                rows: e.rows
            })]
        })
    }
    , "StartCall", 0, function({wait: e, countdown: a}) {
        if (null !== a)
            return (0,
            t.jsx)(l, {
                value: a,
                hint: "go" === a ? void 0 : "READY"
            });
        if (!e)
            return null;
        let n = Math.max(0, e.seats)
          , i = Math.min(n, Math.max(0, e.joined));
        return (0,
        t.jsxs)("div", {
            className: "fd-race-wait fdk-screen",
            role: "status",
            children: [(0,
            t.jsxs)("p", {
                children: ["Waiting for pilots", n > 0 && (0,
                t.jsxs)(t.Fragment, {
                    children: [" ", (0,
                    t.jsxs)("b", {
                        children: [i, "/", n]
                    })]
                })]
            }), n > 0 && (0,
            t.jsx)("span", {
                "aria-hidden": !0,
                children: Array.from({
                    length: n
                }, (e, a) => (0,
                t.jsx)("i", {
                    "data-in": a < i || void 0
                }, a))
            })]
        })
    }
    , "StartStrip", 0, function({race: e, drone: a, racers: n}) {
        return (0,
        t.jsxs)("header", {
            className: "fd-race-start fdk-screen sim-flight-ui",
            "aria-label": "Race start",
            children: [(0,
            t.jsxs)("h1", {
                className: "fd-race-start__race",
                children: [(0,
                t.jsx)("span", {
                    children: e
                }), a && (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)("i", {
                        "aria-hidden": !0,
                        children: "·"
                    }), (0,
                    t.jsx)("span", {
                        children: a
                    })]
                })]
            }), (0,
            t.jsx)("ol", {
                className: "fd-race-start__racers",
                children: n.map(e => (0,
                t.jsxs)("li", {
                    "data-self": e.self || void 0,
                    "data-joining": null === e.name || void 0,
                    children: [(0,
                    t.jsx)(r, {
                        seat: e.seat
                    }), (0,
                    t.jsxs)("b", {
                        children: ["P", e.slot]
                    }), (0,
                    t.jsxs)("span", {
                        children: [e.name ?? "Joining", null !== e.level && (0,
                        t.jsxs)(t.Fragment, {
                            children: [" · ", e.level]
                        })]
                    })]
                }, e.slot))
            })]
        })
    }
    , "WindowChip", 0, function({closesInMs: e}) {
        return (0,
        t.jsxs)("p", {
            className: "fd-race-window sim-flight-ui",
            role: "timer",
            children: ["Finish in ", (0,
            t.jsxs)("b", {
                children: [Math.max(0, Math.ceil(e / 1e3)), " s"]
            })]
        })
    }
    ])
}
, 511590, e => {
    "use strict";
    var t = e.i(386130)
      , a = e.i(882902)
      , n = e.i(884316)
      , i = e.i(106258);
    e.s(["useActivityEntrances", 0, function() {
        let e = (0,
        a.useMatchLaunch)(e => e.active)
          , s = (0,
        n.usePracticeLaunch)(e => e.active);
        return (0,
        i.useSimStore)(a => (0,
        t.activityEntrancesEligible)(a, e, s))
    }
    ])
}
, 386130, e => {
    "use strict";
    e.s(["activityEntrancesEligible", 0, function(e, ...t) {
        return !e.activeLessonId && !e.activeTimeAttackId && !t.some(Boolean)
    }
    ])
}
, 882902, e => {
    "use strict";
    var t = e.i(768834)
      , a = e.i(105524)
      , n = e.i(288461);
    e.i(71901);
    var i = e.i(333794)
      , s = e.i(37220)
      , r = e.i(106258)
      , l = e.i(617317);
    let o = (0,
    t.create)( () => ({
        active: null,
        ended: null,
        yielded: null
    }));
    function d(e, t, a, n) {
        return !e || a || e.map !== t ? null : {
            kind: "match",
            match: e.match,
            map: t,
            lesson: null,
            revision: n,
            still: !0
        }
    }
    class c extends Error {
        constructor() {
            super("The pilot left the match before its flight began.")
        }
    }
    async function u(e, t= () => !0) {
        if (o.getState().active?.match === e.match || !await new Promise(e => {
            let t = !1;
            if (r.useSimStore.getState().guardSettings( () => {
                t = !0,
                e(!0)
            }
            ),
            t)
                return;
            let a = r.useSimStore.getState().settingsPrompt;
            if (!a)
                return e(!1);
            let n = r.useSimStore.subscribe(i => {
                i.settingsPrompt !== a && (n(),
                t || e(!1))
            }
            )
        }
        ) || !t())
            return;
        let a = "idle" === n.useMapJoin.getState().status ? (0,
        n.openMapJoin)(e.map) : null
          , l = null === a ? null : (0,
        n.watchMapJoinEnd)(a);
        try {
            let d, u = (0,
            i.prepareLobbyMap)(e.map);
            u.catch( () => {}
            );
            let m = u.then(e => ({
                mapId: e
            }))
              , h = Date.now()
              , f = await (l ? Promise.race([m, l.ended.then(e => ({
                end: e
            }))]) : Promise.race([m, new Promise(e => {
                d = setTimeout( () => e({
                    end: "failed"
                }), n.JOIN_BUDGET_MS)
            }
            )])).finally( () => clearTimeout(d));
            if ("end" in f) {
                if ("failed" === f.end)
                    throw Error("The match map took too long to load.");
                throw new c
            }
            let {mapId: p} = f;
            if (!t())
                return null === a ? void 0 : (0,
                n.closeMapJoin)(a);
            if (null !== a && !(0,
            n.mapJoinLive)(a))
                throw new c;
            s.useMenuScene.getState().selectMap(p),
            null !== a && p !== e.map && n.useMapJoin.setState({
                mapId: p
            }),
            o.setState({
                active: {
                    ...e,
                    map: p
                },
                ended: null
            }),
            null === a && (0,
            n.carryJoinBudget)(p, h),
            r.useSimStore.getState().startFlight(p, {
                squad: !0
            })
        } catch (e) {
            throw null !== a && (0,
            n.closeMapJoin)(a),
            (0,
            n.dropJoinBudget)(),
            e
        } finally {
            l?.release()
        }
    }
    function m(e=null, t=!1) {
        o.setState(a => ({
            active: null,
            ended: e,
            yielded: t ? a.active?.match ?? a.yielded : a.yielded
        })),
        (0,
        l.leaveMatchRace)(),
        r.useSimStore.getState().endMatchRace()
    }
    e.s(["MatchLaunchAbandoned", 0, c, "enterMatch", 0, u, "flyingElsewhere", 0, function() {
        m(null, !0),
        r.useSimStore.getState().returnToMenu(),
        a.useMatchmaking.setState({
            error: "elsewhere"
        })
    }
    , "followMatchStatus", 0, function(e) {
        "offline" !== e.state || "room_closed" !== e.code && "build_unavailable" !== e.code || (o.getState().active?.resumed ? (m(),
        r.useSimStore.getState().returnToMenu(),
        a.useMatchmaking.setState({
            error: "room_closed" === e.code ? "match_closed" : "build_unavailable"
        })) : "room_closed" === e.code && m(e.message))
    }
    , "inTimedRun", 0, function(e) {
        return !!e.raceRun && !e.raceRun.match || !!e.activeLessonId
    }
    , "leaveMatch", 0, m, "matchRoomRequest", 0, d, "stillFlight", 0, function(e, t, a) {
        return null !== d(e, t, a, null)
    }
    , "useMatchLaunch", 0, o])
}
, 907462, e => {
    "use strict";
    var t = e.i(190072)
      , a = e.i(870895)
      , n = e.i(635525)
      , i = e.i(331536);
    let s = ["race", "tdm"]
      , r = {
        range: 100,
        squadRange: 500,
        count: 8
    }
      , l = {
        range: 400
    }
      , o = (e, t) => e ? {
        label: e
    } : {
        level: null == t ? void 0 : (0,
        a.xpToLevel)(t)
    };
    function d(e, t) {
        return e.map(e => ({
            ...e,
            distance: Math.hypot(e.position[0] - t.x, e.position[1] - t.y, e.position[2] - t.z)
        }))
    }
    function c(e, t, a=0) {
        return t.some(t => e.x >= t.left - a && e.x <= t.right + a && e.y >= t.top - a && e.y <= t.bottom + a)
    }
    let u = new t.Vector3
      , m = new t.Vector3;
    function h(e, t, a, n, i=0) {
        u.fromArray(e).applyMatrix4(t.matrixWorldInverse),
        m.copy(u).applyMatrix4(t.projectionMatrix);
        let s = a / 2
          , r = n / 2
          , l = m.x * s
          , o = -m.y * r
          , d = u.z < -.05;
        if (d && i > 0 && t.isPerspectiveCamera) {
            let e = t.aspect ?? a / Math.max(1, n)
              , s = Math.hypot(m.x * e, m.y);
            if (s > 1e-9) {
                let a = function(e, t, a, n) {
                    if (!(t > 0) || !(e > 0))
                        return e;
                    let i = Math.min(1, t)
                      , s = Math.hypot(a, 1)
                      , r = Math.tan(n * Math.PI / 360) * s
                      , l = Math.atan(r) / s
                      , o = e => (1 - i) * e + i * s * Math.tan(l * e) / r
                      , d = 0
                      , c = Math.PI / 2 / l;
                    for (let t = 0; t < 40; t++) {
                        let t = (d + c) / 2;
                        o(t) < e ? d = t : c = t
                    }
                    return (d + c) / 2
                }(s, i, e, t.fov ?? 75) / s;
                l *= a,
                o *= a
            }
        }
        let c = u.x * t.projectionMatrix.elements[0] * s
          , f = -u.y * t.projectionMatrix.elements[5] * r;
        return Math.abs(c) + Math.abs(f) < .001 && (c = 0,
        f = 1),
        {
            x: l,
            y: o,
            front: d,
            dx: c,
            dy: f
        }
    }
    let f = new t.Vector3;
    function p(e, t, a, n, {lens: i=0, inset: s}={}) {
        let r = h(e, t, a, n, i)
          , l = a / 2
          , o = n / 2
          , d = Math.max(20, l - (s?.x ?? Math.min(130, .24 * a)))
          , c = Math.max(20, o - (s?.y ?? Math.min(150, .29 * n)));
        if (r.front && Math.abs(r.x) <= d && Math.abs(r.y) <= c)
            return {
                x: l + r.x,
                y: o + r.y,
                angle: 0,
                edge: !1
            };
        let {dx: u, dy: m} = r
          , f = 1 / Math.max(Math.abs(u) / d, Math.abs(m) / c);
        return {
            x: l + u * f,
            y: o + m * f,
            angle: 180 * Math.atan2(m, u) / Math.PI + 90,
            edge: !0
        }
    }
    let g = ["#bdeaff", "#ffc49b", "#c7b6ed", "#a8dcc0", "#f0c4d9", "#e4d69e", "#99d5d8", "#b9c6ff", "#e0bc9e", "#c9df9e"]
      , x = new Map;
    e.s(["entranceDistance", 0, function(e) {
        return (0,
        i.poiDistance)(e)
    }
    , "hudReservationRect", 0, function(e, t, a=12) {
        return e.right <= e.left || e.bottom <= e.top ? null : {
            left: e.left - t.left - a,
            top: e.top - t.top - a,
            right: e.right - t.left + a,
            bottom: e.bottom - t.top + a
        }
    }
    , "insideHud", 0, c, "lobbyContacts", 0, function(e, t) {
        return e.map(e => ({
            ...e,
            distance: e.position ? Math.hypot(e.position[0] - t.x, e.position[1] - t.y, e.position[2] - t.z) : null
        }))
    }
    , "lobbyTargets", 0, function(e, t, a) {
        let n = function(e, t) {
            if (!e?.roster)
                return [];
            let a = new Map(t.map(e => [e.id, e.position]));
            return e.roster.map(e => ({
                id: e.id,
                kind: "pilot",
                name: e.name,
                admin: e.admin,
                mod: e.mod,
                badges: e.badges,
                userId: e.userId,
                ...o(e.label, e.xp),
                ...void 0 === e.team ? {} : {
                    team: e.team
                },
                position: a.get(e.id) ?? null
            }))
        }(e, t);
        return [{
            ...n.find(e => e.id === a.id),
            ...a
        }, ...n.filter(e => e.id !== a.id)]
    }
    , "navigationDistance", 0, function(e) {
        return e >= 1e3 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e)} m`
    }
    , "navigationRuntime", 0, {
        camera: null,
        multiplayer: null
    }, "nearbyEntrances", 0, function(e, t) {
        let {range: a} = l
          , n = d(e, t).filter(e => "pilot" !== e.kind && e.distance <= a).sort( (e, t) => e.distance - t.distance || e.id.localeCompare(t.id));
        return s.flatMap(e => n.find(t => t.kind === e) ?? []).sort( (e, t) => e.distance - t.distance || e.id.localeCompare(t.id)).map(e => ({
            ...e,
            fade: 1,
            edgeEligible: !0
        }))
    }
    , "nearbyPilots", 0, function(e, t, {everyone: a=!1}={}) {
        let {range: n, squadRange: i, count: s} = r
          , l = d(e.filter(e => "pilot" === e.kind), t).filter(e => e.distance <= (e.squad ? i : n))
          , o = l.filter(e => !e.squad);
        if (a || o.length <= s)
            return l;
        let c = new Set([...o].sort( (e, t) => e.distance - t.distance || e.id.localeCompare(t.id)).slice(0, s));
        return l.filter(e => e.squad || c.has(e))
    }
    , "pickFocus", 0, function(e, t, a, n, i) {
        let s = e => Math.hypot(e.x - t.x, e.y - t.y)
          , r = null === a ? void 0 : e.find(e => e.id === a);
        if (r && s(r) <= i)
            return r.id;
        let l = null
          , o = n;
        for (let t of e) {
            let e = s(t);
            e <= o && (l = t.id,
            o = e)
        }
        return l
    }
    , "pilotIdentityColor", 0, function(e) {
        let t = e.toLowerCase()
          , a = x.get(t);
        if (!a) {
            let e = x.size;
            a = g[e] ?? `hsl(${(137.508 * e % 360).toFixed(3)} 55% 75%)`,
            x.set(t, a)
        }
        return a
    }
    , "pilotTargets", 0, function(e, t) {
        return e ? e.peers.flatMap(a => {
            let i = null !== a.leavingAt || t - a.receivedAt >= n.STALE_MS ? null : (0,
            n.shownPilot)(e, a, t)?.pose;
            return i ? [{
                id: a.id,
                kind: "pilot",
                name: a.name,
                admin: a.admin,
                mod: a.mod,
                badges: a.badges,
                userId: a.userId,
                ...o(a.label, a.xp),
                ...void 0 === a.seat ? {} : {
                    seat: a.seat
                },
                position: [...i.p]
            }] : []
        }
        ) : []
    }
    , "pinOnScreen", 0, function(e, t, a, n, i) {
        let s = 24 * !!i;
        return e.front && Math.abs(e.x) <= t / 2 - n - s && Math.abs(e.y) <= a / 2 - n - s
    }
    , "placeEdgeCue", 0, function(e, t, a, n, i, s=34) {
        let r = Math.max(40, .07 * Math.min(t, a))
          , l = Math.max(10, t / 2 - r)
          , o = Math.max(10, a / 2 - r)
          , d = e => {
            let n = Math.cos(e)
              , i = Math.sin(e)
              , s = 1 / Math.hypot(n / l, i / o);
            return {
                x: t / 2 + n * s,
                y: a / 2 + i * s
            }
        }
        ;
        for (let t = 0; t < 46; t++) {
            let a = d(e + Math.ceil(t / 2) * (t % 2 ? 1 : -1) * 4 * Math.PI / 180);
            if (!c(a, n, 16) && !i.some(e => Math.hypot(e.x - a.x, e.y - a.y) < s))
                return a
        }
        return d(e)
    }
    , "projectMarker", 0, p, "projectPilotLabel", 0, function(e, t, a, n, i=0) {
        let s = p(e, t, a, n, {
            lens: i
        });
        if (s.edge)
            return s;
        u.fromArray(e).applyMatrix4(t.matrixWorldInverse);
        let r = Math.max(20, .34 * t.projectionMatrix.elements[5] * n / (2 * Math.max(.05, -u.z)));
        return {
            ...s,
            y: Math.max(28, s.y - r)
        }
    }
    , "projectPoiSize", 0, function(e, t, a, n, s=0) {
        let r = t.matrixWorld.elements
          , l = i.POI_WORLD_SIZE / 2
          , o = h([e[0] + r[4] * l, e[1] + r[5] * l, e[2] + r[6] * l], t, a, n, s)
          , d = h([e[0] - r[4] * l, e[1] - r[5] * l, e[2] - r[6] * l], t, a, n, s);
        return Math.hypot(o.x - d.x, o.y - d.y)
    }
    , "rosterScrollNearEnd", 0, function(e, t, a) {
        let n = e <= 700 ? a : t;
        return n.scrollTop > 0 && n.scrollHeight - n.scrollTop - n.clientHeight <= 84
    }
    , "seatedFeed", 0, function(e, t) {
        if (!t?.self || !t.roster.length || e?.roster?.length)
            return e;
        let a = t.roster.filter(e => e.userId !== t.self).map(e => ({
            id: e.userId,
            userId: e.userId,
            name: e.name,
            admin: e.admin,
            mod: e.mod,
            badges: e.badges,
            xp: e.xp,
            ...e.label ? {
                label: e.label
            } : {},
            ...void 0 === e.seat ? {} : {
                seat: e.seat
            },
            ...void 0 === e.team ? {} : {
                team: e.team
            }
        }));
        return {
            ...e ?? {
                peers: [],
                serverTime: 0,
                localTime: 0
            },
            roster: a,
            selfSessionId: e?.selfSessionId ?? t.self,
            status: "connected"
        }
    }
    , "separateEdgeMarker", 0, function(e, t, a, n, i, s=24) {
        if (!e.edge)
            return e;
        let r = Math.abs(e.x - a / 2) / (a / 2) > Math.abs(e.y - n / 2) / (n / 2);
        for (let l = 0; l < 40; l++) {
            let o = Math.ceil(l / 2) * (l % 2 ? 1 : -1)
              , d = {
                ...e,
                x: e.x + (r ? 0 : o * s),
                y: e.y + (r ? o * s : 0)
            };
            if (!(d.x < 45 || d.x > a - 45 || d.y < 100 || d.y > n - 100 || c(d, i, 12)) && !t.some(e => Math.abs(e.x - d.x) < s - 1 && Math.abs(e.y - d.y) < s - 1))
                return d
        }
        return e
    }
    , "sortPilotLabelContacts", 0, function(e) {
        return [...e].sort( (e, t) => Number(!!t.squad) - Number(!!e.squad) || e.distance - t.distance)
    }
    , "sortRosterContacts", 0, function(e, t) {
        return [...e].sort( (e, a) => {
            let n = Number(a.id === t) - Number(e.id === t);
            if (n)
                return n;
            let i = Number(!!a.squad) - Number(!!e.squad);
            if (i)
                return i;
            if (e.squad && a.squad) {
                let t = Number(!!a.squadLeader) - Number(!!e.squadLeader);
                if (t)
                    return t;
                let n = Number("offline" === e.presence) - Number("offline" === a.presence);
                return n || e.name.localeCompare(a.name) || e.id.localeCompare(a.id)
            }
            let s = Number(!!a.admin) - Number(!!e.admin);
            if (s)
                return s;
            let r = Number(!!a.mod) - Number(!!e.mod);
            return r || e.name.localeCompare(a.name) || e.id.localeCompare(a.id)
        }
        )
    }
    , "surfaceBearing", 0, function(e, t, a, n, i, s=0, r=24) {
        let l, o;
        if (t) {
            t.getWorldPosition(f).add(e);
            let i = p([f.x, f.y, f.z], t, a, n, {
                lens: s,
                inset: {
                    x: 0,
                    y: 0
                }
            });
            l = i.x,
            o = i.y
        } else
            l = a / 2 + e.x * a,
            o = n / 2 - e.y * n;
        let d = l - i.x
          , c = o - i.y;
        return Math.hypot(d, c) > r ? 180 * Math.atan2(d, -c) / Math.PI : null
    }
    , "teamListRows", 0, function(e, t, a) {
        let n = new Map((a ?? []).map(e => [e.seat, e]))
          , i = e => {
            let {kos: t=0, kod: a=0, assists: i=0} = (null === e ? void 0 : n.get(e)) ?? {};
            return {
                kos: t,
                kod: a,
                assists: i
            }
        }
          , s = new Map;
        for (let a of e) {
            if (void 0 === a.seat || a.seat === t.seat)
                continue;
            let e = s.get(a.seat);
            e && (!e.label || a.label) || s.set(a.seat, a)
        }
        let r = [...s].sort( ([e], [t]) => e - t).map( ([e,t]) => ({
            key: `seat:${e}`,
            seat: e,
            team: t.team ?? (e < 4 ? 0 : 1),
            name: t.name,
            label: t.label ?? null,
            userId: t.userId ?? null,
            you: !1,
            ...i(e),
            split: !1
        }))
          , l = {
            key: null === t.seat ? t.key : `seat:${t.seat}`,
            seat: t.seat,
            team: t.team,
            name: "You",
            label: null,
            userId: t.userId,
            you: !0,
            ...i(t.seat),
            split: !1
        }
          , o = r.filter(e => e.team !== t.team);
        return [l, ...r.filter(e => e.team === t.team), ...o.map( (e, t) => t ? e : {
            ...e,
            split: !0
        })]
    }
    , "viewPoint", 0, h])
}
, 331536, e => {
    "use strict";
    var t = e.i(870895);
    let a = {
        race: {
            label: "Race",
            color: "#bdeaff",
            emission: "#00baff",
            tint: "#e4f7ff",
            unlockLevel: t.RACE_UNLOCK_LEVEL,
            fill: "M9 8h5v5H9Zm10 0h5v5h-5Zm-5 5h5v5h-5ZM9 18h5v5H9Zm10 0h5v5h-5Z"
        },
        tdm: {
            label: "Team Deathmatch",
            color: "#e5ff54",
            emission: "#c9ff12",
            tint: "#f1ffa3",
            unlockLevel: t.TDM_UNLOCK_LEVEL,
            fill: "M14.2 16a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 1 0-3.6 0",
            stroke: "M8.5 16a7.5 7.5 0 1 0 15 0 7.5 7.5 0 1 0-15 0M16 6v6m0 8v6M6 16h6m8 0h6"
        }
    }
      , n = {
        min: 28,
        max: 64,
        edge: 18
    };
    e.s(["POI_ANCHOR_HEIGHT", 0, 4, "POI_BADGE_PATH", 0, "M9 2h14a7 7 0 0 1 7 7v14a7 7 0 0 1-7 7H9a7 7 0 0 1-7-7V9a7 7 0 0 1 7-7Z", "POI_IDENTITIES", 0, a, "POI_INK", 0, "#17191d", "POI_INNER_PATH", 0, "M9 5h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z", "POI_LOCKED_COLOR", 0, "#adb3b5", "POI_LOCK_PATH", 0, "M11 15v-4a5 5 0 0 1 10 0v4M10 15h12v10H10ZM16 19v3", "POI_WORLD_SIZE", 0, 1.5, "poiBadgeSize", 0, function(e, t=!1) {
        let {min: a, max: i, edge: s} = n;
        if (t)
            return s;
        let r = Math.hypot(i * Math.atanh(a / i), Number.isFinite(e) ? Math.max(0, e) : 0);
        return i * Math.tanh(r / i)
    }
    , "poiDistance", 0, function(e) {
        return e >= 1e3 ? `${(e / 1e3).toFixed(1)} km` : `${e < 25 ? Math.max(0, Math.round(e)) : 5 * Math.round(e / 5)} m`
    }
    ])
}
, 967226, 514722, e => {
    "use strict";
    let t, a = (t = new Map,
    {
        owns(e) {
            for (let a of t.values())
                if (a.has(e))
                    return !0;
            return !1
        },
        register() {
            let e = Symbol("poi-overlay");
            t.set(e, new Set);
            let a = !1;
            return {
                update(n) {
                    a || t.set(e, new Set(n))
                },
                release() {
                    a = !0,
                    t.delete(e)
                }
            }
        }
    });
    e.s(["poiOverlayRegistry", 0, a], 967226);
    var n = e.i(843476)
      , i = e.i(331536);
    function s({kind: e}) {
        let t = i.POI_IDENTITIES[e];
        return (0,
        n.jsxs)("g", {
            className: `fd-poi__glyph fd-poi__${e}`,
            children: [(0,
            n.jsx)("path", {
                d: t.fill,
                className: "fd-poi__ink"
            }), t.stroke && (0,
            n.jsx)("path", {
                d: t.stroke,
                className: "fd-poi__line"
            })]
        })
    }
    e.s(["PoiIcon", 0, function() {
        return (0,
        n.jsxs)("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            "aria-hidden": "true",
            children: [(0,
            n.jsx)("path", {
                d: i.POI_BADGE_PATH,
                className: "fd-poi__shape"
            }), (0,
            n.jsx)("path", {
                d: i.POI_INNER_PATH,
                className: "fd-poi__frame"
            }), (0,
            n.jsx)(s, {
                kind: "race"
            }), (0,
            n.jsx)(s, {
                kind: "tdm"
            }), (0,
            n.jsx)("path", {
                d: i.POI_LOCK_PATH,
                className: "fd-poi__lock fd-poi__line"
            })]
        })
    }
    , "drawPoiIcon", 0, function(e, t, a, n) {
        let s = i.POI_IDENTITIES[t];
        e.save(),
        e.scale(n / 32, n / 32),
        e.lineJoin = "round",
        e.lineCap = "round",
        e.fillStyle = a ? i.POI_LOCKED_COLOR : s.color,
        e.strokeStyle = i.POI_INK,
        e.lineWidth = 1.4,
        e.fill(new Path2D(i.POI_BADGE_PATH)),
        e.stroke(new Path2D(i.POI_BADGE_PATH)),
        e.lineWidth = 1.1,
        e.stroke(new Path2D(i.POI_INNER_PATH)),
        e.fillStyle = i.POI_INK,
        e.lineWidth = 2,
        a ? e.stroke(new Path2D(i.POI_LOCK_PATH)) : (e.fill(new Path2D(s.fill)),
        s.stroke && e.stroke(new Path2D(s.stroke))),
        e.restore()
    }
    ], 514722)
}
, 884316, e => {
    "use strict";
    var t = e.i(768834)
      , a = e.i(920755)
      , n = e.i(698072)
      , i = e.i(353198);
    e.i(71901);
    var s = e.i(333794)
      , r = e.i(37220)
      , l = e.i(106258)
      , o = e.i(771607)
      , d = e.i(814022);
    let c = (0,
    t.create)( () => ({
        active: null
    }));
    async function u() {
        let {data: e, error: t} = await (0,
        n.selectArenas)(e => (0,
        a.createClient)().from("sim_arenas").select(e).order("map_id").order("sort_order").order("id"));
        if (t)
            throw Error("Arenas could not be read.");
        return (e ?? []).flatMap(e => (0,
        n.parseArenaRow)(e) ?? [])
    }
    async function m(e, t, a= () => !0) {
        var n, u, h;
        let f = l.useSimStore.getState()
          , p = (n = (0,
        d.flownDrone)(f),
        u = (0,
        o.confirmedXp)(f),
        h = f.droneGifts,
        e.drones.includes(n) && (0,
        i.isDroneUnlocked)(n, u, h) ? n : e.drones.find(e => (0,
        i.isDroneUnlocked)(e, u, h)) ?? null);
        if (!p)
            return !1;
        let g = await (0,
        s.prepareLobbyMap)(e.mapId);
        return !!a() && (r.useMenuScene.getState().selectMap(g),
        l.useSimStore.getState().guardSettings( () => {
            a() && (c.setState({
                active: {
                    arena: e,
                    difficulty: t,
                    drone: p,
                    seed: (0x7fffffff & Date.now()) >>> 0
                }
            }),
            l.useSimStore.getState().startFlight(g, {}))
        }
        ),
        !0)
    }
    (0,
    t.create)( (e, t) => ({
        arenas: null,
        async load() {
            if (null === t().arenas)
                try {
                    e({
                        arenas: await u()
                    })
                } catch {
                    e({
                        arenas: []
                    })
                }
        }
    })),
    e.s(["enterPractice", 0, m, "leavePractice", 0, function() {
        c.setState({
            active: null
        })
    }
    , "usePracticeLaunch", 0, c])
}
, 174637, e => {
    "use strict";
    e.i(247167);
    var t = e.i(613105);
    let a = "ec46766b3fc3"
      , n = "u" > typeof crypto && "randomUUID" in crypto ? crypto.randomUUID() : "00000000-0000-4000-8000-000000000000"
      , i = RegExp("^((Europe|Africa|Indian)/|Atlantic/(Canary|Madeira|Azores|Faroe|Reykjavik)$|Asia/(Dubai|Tehran|Baghdad|Riyadh|Qatar|Kuwait|Bahrain|Muscat|Aden|Jerusalem|Tel_Aviv|Beirut|Damascus|Amman|Gaza|Hebron|Nicosia|Famagusta|Istanbul|Tbilisi|Yerevan|Baku|Kabul|Karachi|Kolkata|Calcutta|Kathmandu|Katmandu|Colombo|Dhaka|Dacca|Thimphu|Thimbu|Tashkent|Samarkand|Almaty|Qostanay|Qyzylorda|Aqtobe|Aqtau|Atyrau|Oral|Bishkek|Dushanbe|Ashgabat|Ashkhabad|Yekaterinburg|Omsk|Novosibirsk|Barnaul|Tomsk|Novokuznetsk|Krasnoyarsk|Irkutsk|Chita|Yakutsk|Khandyga|Vladivostok|Ust-Nera|Sakhalin|Magadan|Srednekolymsk|Kamchatka|Anadyr|Yangon|Rangoon|Bangkok|Vientiane|Phnom_Penh|Ho_Chi_Minh|Saigon|Kuala_Lumpur|Kuching|Singapore|Brunei|Jakarta|Pontianak|Makassar|Ujung_Pandang)$)");
    function s(e=Intl.DateTimeFormat().resolvedOptions().timeZone ?? "") {
        return i.test(e) ? "eu-central-1" : "us-east-1"
    }
    class r extends Error {
        code;
        ban;
        constructor(e, t) {
            super(e),
            this.code = e,
            t && (this.ban = t)
        }
    }
    async function l(e, i, o, d={}) {
        let c;
        try {
            c = await fetch(`${e}/rooms`, {
                method: "POST",
                signal: (0,
                t.withDeadline)(d.signal, 1e4),
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${i}`
                },
                body: JSON.stringify({
                    ...o,
                    region: s(),
                    build: a,
                    tab: n,
                    takeover: !!d.takeover,
                    rejoin: d.rejoin ?? null,
                    ...d.avoid ? {
                        avoid: d.avoid
                    } : {}
                })
            })
        } catch (e) {
            if (e?.name === "AbortError" && d.signal?.aborted)
                throw e;
            throw new r("unavailable")
        }
        let u = await c.json().catch( () => null);
        if (u?.error === "banned")
            throw new r("banned",{
                until: u.until ?? null,
                reason: u.reason ?? ""
            });
        if (!c.ok)
            throw new r(u?.error ?? "unavailable");
        if (!u?.ticket || !u.url || !u.room)
            throw new r("unavailable");
        return u
    }
    function o(e) {
        switch (e) {
        case "unauthorized":
        case "offline":
            return "Offline practice: sign in to save progress.";
        case "forbidden":
            return "Offline practice: verify your email to save progress.";
        case "banned":
            return "This account is banned.";
        case "squad_unavailable":
            return "This squad launch has ended. Return to the lobby and launch together again.";
        case "squad_full":
            return "Squad lobby is full. Waiting for a seat…";
        case "session_active":
            return "Flying in another tab.";
        case "build_unavailable":
            return "Servers are updating. Reload to fly online.";
        case "rate_limited":
            return "Offline practice: too many attempts, trying again shortly.";
        case "map_changed":
            return "The map was updated. Reload to fly online.";
        case "room_closed":
            return "This match has ended.";
        case "place_refused":
            return "Offline practice: this flight could not join the server here. Trying again shortly.";
        case "disconnected":
            return "Offline";
        default:
            return "Offline practice: nothing is saved."
        }
    }
    e.s(["AdmissionError", 0, r, "SIM_BUILD", 0, a, "admissionMessage", 0, o, "matchEndedMessage", 0, function(e) {
        switch (e) {
        case "shutdown":
            return "This match ended: the server closed it.";
        case "draining":
            return "This match ended: the server is restarting.";
        case "overloaded":
            return "This match ended: the server fell too far behind.";
        case "offline":
            return "This match ended while you were offline.";
        case "moved":
            return "This match ended for you: the server took you out of it.";
        case "removed":
            return "Removed from the match: your flight did not check out on the server.";
        default:
            return o("room_closed")
        }
    }
    , "nearestRegion", 0, s, "requestRoom", 0, l, "restrictionMessage", 0, function(e, t) {
        let a = t.until ? `${e} until ${new Date(t.until).toLocaleString(void 0, {
            dateStyle: "medium",
            timeStyle: "short"
        })}.` : `${e} permanently.`;
        return t.reason.trim() ? `${a} Reason: ${t.reason.trim()}` : a
    }
    , "sessionServiceUrl", 0, function() {
        return "https://mp.flightdivision.com".replace(/\/$/, "")
    }
    ])
}
, 333772, e => {
    "use strict";
    let t = "false" !== e.i(247167).default.env.NEXT_PUBLIC_RACE_LOBBY_ENABLED;
    e.s(["RACE_LOBBY_ENABLED", 0, t])
}
]);
