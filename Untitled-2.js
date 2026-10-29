(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 323980, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , s = e.i(190072)
      , i = e.i(807375)
      , r = e.i(789788)
      , n = e.i(247800)
      , l = e.i(353198)
      , o = e.i(11871)
      , c = e.i(179883)
      , d = e.i(720996)
      , h = e.i(635525)
      , m = e.i(907462)
      , u = e.i(601060)
      , f = e.i(106258)
      , p = e.i(170341);
    e.i(573798);
    var x = e.i(244144);
    e.i(671112);
    var g = e.i(523895);
    let y = [[-.56, -.84], [.56, -.84]];
    function b(e) {
        let t = Math.imul(0x5bd1e995 ^ e, 0x27d4eb2d);
        return t = 0x7fffffff & Math.imul(t ^ t >>> 15, 0x2c1b3c6d) || 1,
        () => (t = Math.imul(t, 0x41c64e6d) + 12345 & 0x7fffffff) / 0x7fffffff
    }
    function j(e, t, a, s, i, r, n, l) {
        e.globalAlpha = .6 * r,
        e.strokeStyle = n,
        e.lineWidth = 2.4 * l,
        e.beginPath(),
        e.moveTo(t, a),
        e.lineTo(s, i),
        e.stroke(),
        e.globalAlpha = r,
        e.strokeStyle = g.PALETTE.chalk,
        e.lineWidth = l,
        e.beginPath(),
        e.moveTo(t, a),
        e.lineTo(s, i),
        e.stroke()
    }
    e.s(["CombatHud", 0, function({hidden: e=!1}) {
        let k = (0,
        a.useRef)(null)
          , S = (0,
        a.useRef)(e);
        return (0,
        a.useEffect)( () => {
            S.current = e
        }
        , [e]),
        (0,
        a.useEffect)( () => {
            let e = k.current;
            if (!e)
                return;
            let t = t => [...e.querySelectorAll(t)]
              , a = {
                blue: e.querySelector(".fd-combat-team[data-team='0'] strong"),
                red: e.querySelector(".fd-combat-team[data-team='1'] strong")
            }
              , x = [t(".fd-combat-cells[data-team='0'] i"), t(".fd-combat-cells[data-team='1'] i")]
              , v = t(".fd-combat-team")
              , M = e.querySelector(".fd-combat-clock strong")
              , _ = e.querySelector(".fd-combat-clock small")
              , w = t(".fd-combat-feed li")
              , N = t(".fd-combat-tag").map(e => ({
                root: e,
                fill: e.querySelector(".fd-combat-tag__hp i"),
                name: e.querySelector(".fd-combat-tag__name strong"),
                label: e.querySelector(".fd-combat-tag__label"),
                distance: e.querySelector(".fd-combat-tag__distance")
            }))
              , E = t(".fd-combat-mate")
              , A = t(".fd-combat-damage")
              , P = e.querySelector(".fd-combat-reticle")
              , T = e.querySelector(".fd-combat-hitmarker")
              , C = e.querySelector(".fd-combat-komarker")
              , R = e.querySelector(".fd-combat-world")
              , D = e.querySelector(".fd-combat-cooldown circle")
              , L = t(".fd-combat-emitter")
              , I = e.querySelector(".fd-combat-hp")
              , F = e.querySelector(".fd-combat-hp__fill")
              , O = e.querySelector(".fd-combat-hp strong")
              , $ = e.querySelector(".fd-combat-hp small")
              , K = e.querySelector(".fd-combat-ripple")
              , q = e.querySelector(".fd-combat-flash")
              , H = e.querySelector(".fd-combat-breakup")
              , B = e.querySelector(".fd-combat-bolts")
              , W = e.querySelector(".fd-combat-static")
              , z = new s.Vector3
              , G = new s.Vector3
              , V = new s.Vector3
              , U = [0, 0, 0]
              , X = [0, 0, 0]
              , Y = [0, 0, 0]
              , J = new i.SightFade
              , Q = new Map
              , Z = new Map
              , ee = -1
              , et = 0
              , ea = 0
              , es = -1 / 0
              , ei = 0
              , er = 0
              , en = -1 / 0
              , el = null
              , eo = {
                at: -1 / 0,
                x: 0,
                y: 0,
                drawn: -1
            }
              , ec = (e, t) => {
                e.textContent !== t && (e.textContent = t)
            }
              , ed = (e, t) => {
                e.hidden !== t && (e.hidden = t)
            }
              , eh = (e, t, a) => {
                e.dataset[t] !== a && (e.dataset[t] = a)
            }
              , em = (e, t, a, s, i) => {
                let r = (0,
                m.viewPoint)([e[0], e[1], e[2]], t, a, s, i);
                return r.front ? {
                    x: a / 2 + r.x,
                    y: s / 2 + r.y
                } : null
            }
              , eu = e => {
                if (null === e)
                    return "";
                if (e === i.combatHud.seat)
                    return f.useSimStore.getState().username ?? "You";
                let t = m.navigationRuntime.multiplayer?.current;
                return t?.roster?.find(t => t.seat === e)?.name ?? t?.peers.find(t => t.seat === e)?.name ?? `Seat ${e + 1}`
            }
              , ef = e => {
                if (null === e)
                    return null;
                if (e === i.combatHud.seat)
                    return i.combatHud.team;
                let t = m.navigationRuntime.multiplayer?.current;
                return t?.roster?.find(t => t.seat === e)?.team ?? t?.peers.find(t => t.seat === e)?.team ?? null
            }
              , ep = t => {
                let s = i.combatHud
                  , k = s.active && !S.current;
                if (ed(e, !k),
                !k)
                    return;
                (0,
                i.combatArrival)(t);
                let er = (0,
                d.motionReduced)()
                  , en = er ? 0 : f.useSimStore.getState().settings.camera.shake
                  , ep = (0,
                c.koPunch)(t - s.koMark.at, en);
                R.style.transform = B.style.transform = 1 === ep ? "" : `scale(${ep})`,
                eh(e, "motion", er ? "reduce" : "full");
                let ex = e.clientWidth
                  , eg = e.clientHeight
                  , ey = (0,
                p.recentDrawnView)(t)
                  , eb = ey?.camera ?? m.navigationRuntime.camera;
                eb && (eb.getWorldPosition(V),
                z.setFromMatrixColumn(eb.matrixWorld, 1).normalize(),
                G.setFromMatrixColumn(eb.matrixWorld, 0).normalize(),
                V.toArray(U),
                G.toArray(X),
                z.toArray(Y));
                let ej = ey?.lens ?? 0
                  , ek = s.team ?? 0;
                e.style.setProperty("--combat-own", (0,
                i.teamColor)(ek));
                let eS = s.self
                  , ev = "alive" === eS.phase;
                eh(e, "phase", eS.phase);
                let eM = s.match;
                if (eM) {
                    ec(a.blue, String(eM.batteries[0] ?? 0)),
                    ec(a.red, String(eM.batteries[1] ?? 0));
                    let e = (eM.batteries[0] ?? 0) * 100 + (eM.batteries[1] ?? 0);
                    e !== ee && (ee = e,
                    x.forEach( (e, t) => e.forEach( (e, a) => {
                        e.dataset.on = String(a < (eM.batteries[t] ?? 0))
                    }
                    )));
                    let r = s.tick + Math.max(0, t - s.tickAt) * n.TICK_RATE / 1e3
                      , l = (0,
                    i.matchClock)(eM, r);
                    ec(M, l.time),
                    ec(_, l.label ?? ""),
                    ed(_, !l.label)
                }
                v.forEach(e => {
                    eh(e, "own", String(Number(e.dataset.team) === ek))
                }
                ),
                w.forEach( (e, a) => {
                    let r = s.feed[s.feed.length - 1 - a]
                      , n = r ? t - r.at : 1 / 0;
                    if (ed(e, !r || n > i.FEED_MS),
                    e.hidden || !r)
                        return;
                    let[l,,o] = [...e.children];
                    ec(l, eu(r.credit)),
                    ed(l, null === r.credit),
                    ec(o, eu(r.victim)),
                    e.style.setProperty("--credit", (0,
                    i.teamColor)(ef(r.credit))),
                    e.style.setProperty("--victim", (0,
                    i.teamColor)(ef(r.victim))),
                    eh(e, "you", String(r.credit === s.seat || r.victim === s.seat)),
                    e.style.opacity = n > i.FEED_MS - 400 ? String((i.FEED_MS - n) / 400) : "1"
                }
                );
                let e_ = Math.max(0, eS.hp);
                ec(O, String(e_)),
                ec($, `/ ${eS.health}`),
                F.style.transform = `scaleX(${Math.max(0, Math.min(1, e_ / Math.max(1, eS.health)))})`;
                let ew = (0,
                i.oneHitFromKo)(e_, eS.phase);
                if (eh(I, "low", String(ew)),
                eh(I, "shield", String(eS.shield > 0)),
                s.ripple.at !== es && t - s.ripple.at < i.RIPPLE_MS) {
                    es = s.ripple.at,
                    K.dataset.run = "a" === K.dataset.run ? "b" : "a";
                    let e = s.ripple.from;
                    if (eh(K, "side", String(!!(e && eb))),
                    e && eb) {
                        eb.getWorldPosition(V);
                        let t = (0,
                        m.viewPoint)([V.x + 10 * e[0], V.y + 10 * e[1], V.z + 10 * e[2]], eb, ex, eg, ej)
                          , a = Math.atan2(t.dy, t.dx)
                          , s = (0,
                        m.placeEdgeCue)(a, ex, eg, [], [], 0);
                        K.style.setProperty("--x", `${s.x.toFixed(1)}px`),
                        K.style.setProperty("--y", `${s.y.toFixed(1)}px`),
                        K.style.setProperty("--bearing", `${(180 * a / Math.PI + 90).toFixed(1)}deg`),
                        Object.assign(eo, {
                            x: s.x,
                            y: s.y
                        })
                    } else
                        Object.assign(eo, {
                            x: ex / 2,
                            y: eg / 2
                        })
                }
                ed(K, t - s.ripple.at >= i.RIPPLE_MS);
                let eN = t - s.burst.at
                  , eE = eN >= 0 && eN < i.HIT_BURST_MS;
                if (ed(q, !eE),
                ed(H, !eE),
                eE) {
                    let e = s.burst.weight
                      , t = 1 - eN / i.HIT_BURST_MS;
                    eo.at !== s.burst.at && (eo.at = s.burst.at,
                    eo.drawn = -1),
                    q.style.setProperty("--fx", `${(eo.x / Math.max(1, ex) * 100).toFixed(1)}%`),
                    q.style.setProperty("--fy", `${(eo.y / Math.max(1, eg) * 100).toFixed(1)}%`),
                    q.style.opacity = ((.3 + .35 * e) * t * t).toFixed(3);
                    let a = er ? 0 : Math.floor(eN / 33);
                    a !== eo.drawn && (eo.drawn = a,
                    function(e, t, a, s, i, r, n, l) {
                        let o = Math.max(1, Math.ceil(a / 2))
                          , c = Math.max(1, Math.ceil(s / 2));
                        (e.width !== o || e.height !== c) && (e.width = o,
                        e.height = c);
                        let d = e.getContext("2d");
                        if (!d)
                            return;
                        d.clearRect(0, 0, o, c);
                        let h = b(n)
                          , m = t?.width ?? 0
                          , u = t?.height ?? 0
                          , f = u / c
                          , p = (e, a, s, i=e) => {
                            if (t && m && u)
                                try {
                                    d.drawImage(t, 0, e * f, m, a * f, s, i, o, a)
                                } catch {}
                        }
                        ;
                        if (i > .5 && r > .2 && r < .65) {
                            let e = Math.round((.08 + .16 * i) * c * (.6 + .4 * h()));
                            p(0, c - e, 0, e),
                            p(c - e, e, 0, 0),
                            d.fillStyle = g.PALETTE.ink,
                            d.fillRect(0, e - Math.max(2, .025 * c), o, Math.max(2, .025 * c))
                        }
                        let x = 2 + Math.round(5 * i);
                        for (let e = 0; e < x; e++) {
                            let e = Math.floor(h() * c)
                              , t = Math.max(2, Math.floor((.015 + .07 * h()) * c * (.6 + i)))
                              , a = (h() - .5) * 2 * (.02 + .07 * i) * o;
                            p(e, t, a),
                            d.globalCompositeOperation = "lighter",
                            d.globalAlpha = .35 + .3 * i,
                            d.fillStyle = .5 > h() ? l : g.PALETTE.sky,
                            d.fillRect(a > 0 ? a - 3 : o + a, e, 3, t),
                            d.globalAlpha = 1,
                            d.globalCompositeOperation = "source-over"
                        }
                        let y = (1.3 * r - .15) * c
                          , j = c * (.05 + .05 * i)
                          , k = d.createLinearGradient(0, y - j, 0, y + j);
                        k.addColorStop(0, (0,
                        g.withAlpha)(g.PALETTE.chalk, 0)),
                        k.addColorStop(.5, (0,
                        g.withAlpha)(g.PALETTE.chalk, .18 + .22 * i)),
                        k.addColorStop(1, (0,
                        g.withAlpha)(g.PALETTE.chalk, 0)),
                        d.fillStyle = k,
                        d.fillRect(0, y - j, o, 2 * j);
                        let S = 10 + Math.round(30 * i);
                        for (let e = 0; e < S; e++) {
                            d.fillStyle = .7 > h() ? (0,
                            g.withAlpha)(g.PALETTE.chalk, .25 + .5 * h()) : (0,
                            g.withAlpha)(g.PALETTE.ink, .55);
                            let e = h() * o
                              , t = (.05 + .4 * h()) * o;
                            d.fillRect(e, Math.floor(h() * c), t, 1)
                        }
                    }(H, ey?.canvas ?? null, ex, eg, e, er ? .35 : eN / i.HIT_BURST_MS, (7 * s.burst.at | 0) + 131 * a, (0,
                    i.teamColor)(ek))),
                    H.style.opacity = (er ? .85 * t : Math.min(1, .55 + .6 * e) * Math.sqrt(t)).toFixed(3)
                }
                ed(W, !ew),
                ew && (!er || !el) && t - ei > 66 && (ei = t,
                el = function(e, t, a) {
                    (192 !== e.width || 108 !== e.height) && (e.width = 192,
                    e.height = 108,
                    t = null);
                    let s = e.getContext("2d");
                    if (!s)
                        return t;
                    let i = (t ??= s.createImageData(192, 108)).data
                      , r = a ? a / 900 % 1 * 108 : -100
                      , n = 7919 * a | 0 || 1;
                    for (let e = 0; e < 108; e++) {
                        let t = Math.max(0, 1 - Math.abs(e - r) / 9)
                          , a = .55 + .45 * Math.sin(2.1 * e);
                        for (let s = 0; s < 192; s++) {
                            let r = (n = 0x41c64e6d * n + 12345 & 0x7fffffff) >> 16 & 255
                              , l = (192 * e + s) * 4;
                            i[l] = i[l + 1] = i[l + 2] = Math.min(255, r * a + 120 * t),
                            i[l + 3] = Math.min(255, 90 + .5 * r + 80 * t)
                        }
                    }
                    return s.putImageData(t, 0, 0),
                    t
                }(W, el, er ? 0 : t)),
                ed(P, !ev);
                let eA = (0,
                i.combatCooldown)(t);
                D.style.strokeDashoffset = String(100 * eA),
                eh(D.parentElement, "busy", String(eA > 0));
                let eP = t - s.mark.at;
                eh(P, "snap", String(en > 0 && eP >= 0 && eP < 120)),
                P.style.setProperty("--snap", String(eP >= 0 && eP < 120 ? 1 + .24 * en * (1 - eP / 120) ** 2 : 1)),
                s.mark.id !== et && t >= s.mark.at && t - s.mark.at < 260 && (et = s.mark.id,
                T.dataset.run = "a" === T.dataset.run ? "b" : "a"),
                s.koMark.id !== ea && t - s.koMark.at < i.KO_MARK_MS && (ea = s.koMark.id,
                C.dataset.run = "a" === C.dataset.run ? "b" : "a"),
                L.forEach( (e, a) => {
                    if (ed(e, !ev || !eb),
                    e.hidden || !eb)
                        return;
                    let i = em(( (e, t, a) => {
                        let s = Math.tan((t.fov ?? 75) * Math.PI / 360)
                          , [i,r] = y[e];
                        return a.set(.4 * i * s * (t.aspect ?? 16 / 9), .4 * r * s, -.4).applyMatrix4(t.matrixWorld)
                    }
                    )(a, eb, V).toArray(), eb, ex, eg, ej);
                    i && (e.style.transform = `translate3d(${i.x.toFixed(1)}px,${i.y.toFixed(1)}px,0)`);
                    let r = s.bolts.findLast(e => e.id % 2 === a)
                      , n = r ? t - r.at : 1 / 0
                      , l = n >= 0 && n < 75 && en > 0;
                    eh(e, "fired", String(l)),
                    e.style.setProperty("--flash", String(l ? (1 - n / 75) * en : 0)),
                    e.style.setProperty("--flash-scale", String(1 + 1.8 * Math.min(1, n / 75))),
                    e.style.setProperty("--recoil", `${l ? 5 * en * Math.sin(n / 75 * Math.PI) : 0}px`)
                }
                );
                let eT = m.navigationRuntime.multiplayer?.current ?? null
                  , eC = 0
                  , eR = 0
                  , eD = !1
                  , eL = t >= s.mark.at && t - s.mark.at < 260 ? s.bolts.find(e => e.id === s.mark.id)?.hit : null
                  , eI = t - s.attacker.at < i.ATTACKER_MS ? s.attacker.seat : null
                  , eF = new Map
                  , eO = new Map;
                if (eT && eb)
                    for (let e of eT.peers) {
                        if (void 0 === e.seat || void 0 === e.team || null !== e.leavingAt || t - e.receivedAt >= h.STALE_MS)
                            continue;
                        let a = (0,
                        h.shownPilot)(eT, e, t)?.pose;
                        if (!a)
                            continue;
                        let s = [a.p[0], a.p[1], a.p[2]]
                          , n = (0,
                        i.knockedOut)(e.seat, a.life);
                        if (n) {
                            let t = `${e.seat}:${n.life}`;
                            s = Q.get(t) ?? s,
                            Q.has(t) || Q.set(t, s),
                            Q.size > 32 && Q.delete(Q.keys().next().value)
                        }
                        eF.set(e.seat, s);
                        let c = Math.hypot(s[0] - U[0], s[1] - U[1], s[2] - U[2])
                          , d = (0,
                        m.viewPoint)(s, eb, ex, eg, ej)
                          , f = d.front && Math.abs(d.x) < ex / 2 - 8 && Math.abs(d.y) < eg / 2 - 8;
                        if (e.team === ek) {
                            let t = E[eR];
                            if (!t || !f || n)
                                continue;
                            eR++,
                            ed(t, !1);
                            let a = Math.max(14, .3 * eb.projectionMatrix.elements[5] * eg / (2 * Math.max(.5, c)));
                            t.style.transform = `translate3d(${(ex / 2 + d.x).toFixed(1)}px,${(eg / 2 + d.y - a).toFixed(1)}px,0)`,
                            t.style.setProperty("--team", (0,
                            i.teamColor)(e.team)),
                            t.title !== e.name && (t.title = e.name);
                            continue
                        }
                        if (!f || c > i.BRACKET_RANGE)
                            continue;
                        let p = (0,
                        r.boundingRadius)(o.DRONE_PROFILES[a.droneId ?? l.DEFAULT_DRONE].halfExtents)
                          , x = (0,
                        i.bracketRadius)(c, p)
                          , g = (0,
                        m.viewPoint)([s[0] + z.x * x, s[1] + z.y * x, s[2] + z.z * x], eb, ex, eg, ej)
                          , y = Math.max(14, Math.hypot(g.x - d.x, g.y - d.y))
                          , b = ex / 2 + d.x
                          , j = eg / 2 + d.y;
                        if (eO.set(e.seat, {
                            x: b,
                            y: j - y - 22
                        }),
                        n)
                            continue;
                        let k = (0,
                        u.inSight)(U, s, p, X, Y)
                          , S = J.update(e.seat, k, t);
                        if (S <= 0)
                            continue;
                        let v = N[eC];
                        if (!v)
                            continue;
                        eC++,
                        k && Math.abs(d.x) <= y && Math.abs(d.y) <= y && (eD = !0);
                        let {hp: M, health: _} = (0,
                        i.seatHealth)(e.seat, e.frames.at(-1)?.life, t);
                        ed(v.root, !1),
                        v.root.style.setProperty("--team", (0,
                        i.teamColor)(e.team)),
                        v.root.style.setProperty("--sight", S.toFixed(3)),
                        v.root.style.setProperty("--half", `${y.toFixed(1)}px`),
                        v.root.style.transform = `translate3d(${b.toFixed(1)}px,${j.toFixed(1)}px,0)`,
                        eh(v.root, "hit", String(eL === e.seat)),
                        eh(v.root, "attacker", String(e.seat === eI)),
                        eh(v.root, "down", String(M <= 0)),
                        v.fill.style.transform = `scaleX(${Math.max(0, Math.min(1, M / Math.max(1, _)))})`,
                        ec(v.name, e.name),
                        ec(v.label, e.label ?? ""),
                        ed(v.label, !e.label),
                        ec(v.distance, c > i.DISTANCE_FROM ? (0,
                        m.navigationDistance)(c) : ""),
                        ed(v.distance, c <= i.DISTANCE_FROM)
                    }
                for (let e = eC; e < N.length; e++)
                    ed(N[e].root, !0);
                for (let e = eR; e < E.length; e++)
                    ed(E[e], !0);
                eh(P, "on", String(eD && ev)),
                A.forEach( (e, a) => {
                    let r = s.damage[s.damage.length - 1 - a]
                      , n = r ? t - r.at : 1 / 0;
                    if (!r || !eb || n >= i.DAMAGE_MS)
                        return void ed(e, !0);
                    let l = eF.get(r.seat);
                    if (l && (r.position = l),
                    !r.position)
                        return void ed(e, !0);
                    e.dataset.id !== String(r.id) && (e.dataset.id = String(r.id),
                    ec(e.children[0], String(r.damage)),
                    e.children[1].hidden = !r.ko,
                    e.style.setProperty("--damage", String((0,
                    i.damageWeight)(r.damage))),
                    e.style.setProperty("--team", (0,
                    i.teamColor)(ef(r.seat))));
                    let o = r.position
                      , c = n / 1e3
                      , d = eO.get(r.seat)
                      , h = er ? 0 : 28 * c
                      , u = d ? {
                        x: d.x,
                        y: d.y - h,
                        edge: !1,
                        angle: 0
                    } : (0,
                    m.projectMarker)([o[0], o[1] + .6, o[2]], eb, ex, eg, {
                        lens: ej,
                        inset: {
                            x: 70,
                            y: 70
                        }
                    })
                      , f = 1 + en * (c < .045 ? -.2 + c / .045 * .52 : c < .16 ? .32 * (1 - (c - .045) / .115) : 0);
                    ed(e, !1),
                    eh(e, "edge", String(u.edge)),
                    e.style.setProperty("--angle", `${u.angle}deg`),
                    e.style.transform = `translate3d(${u.x.toFixed(1)}px,${u.y.toFixed(1)}px,0) translate(-50%,-100%) scale(${(u.edge ? .75 * f : f).toFixed(3)})`,
                    e.style.opacity = String(n < i.DAMAGE_MS - 300 ? 1 : (i.DAMAGE_MS - n) / 300)
                }
                ),
                (B.width !== ex || B.height !== eg) && (B.width = ex,
                B.height = eg),
                B.getContext("2d")?.clearRect(0, 0, ex, eg);
                let e$ = B.getContext("2d");
                if (e$ && (eN >= 0 && eN < i.SPARK_MS && function(e, t, a, s, r, n, l, o, c, d) {
                    let h = b(o)
                      , m = Math.atan2(r / 2 - a, s / 2 - t)
                      , u = 10 + Math.round(10 * l)
                      , f = Math.min(s, r) / 900;
                    e.lineCap = "round";
                    for (let s = 0; s < u; s++) {
                        let s = i.SPARK_MS * (.45 + .55 * h())
                          , r = m + (h() - .5) * 2.2
                          , l = (500 + 1300 * h()) * f;
                        if (n >= s)
                            continue;
                        let o = (d ? Math.min(n, 60) : n) / 1e3
                          , u = Math.max(0, o - .03)
                          , p = e => t + Math.cos(r) * l * e
                          , x = e => a + Math.sin(r) * l * e + 900 * f * e * e;
                        j(e, p(u), x(u), p(o), x(o), 1 - n / s, c, 2)
                    }
                    e.globalAlpha = 1
                }(e$, eo.x, eo.y, ex, eg, eN, s.burst.weight, 0 | s.burst.at, (0,
                i.teamColor)(ek), er),
                eb))
                    for (let e of s.sparks) {
                        let a = t - e.at;
                        if (!(a < 0) && !(a >= i.SPARK_MS) && (e.origin || null === e.seat || (e.origin = eF.get(e.seat) ?? null),
                        e.origin && function(e, t, a, s, r, n, l, o, c) {
                            let d = t.origin
                              , h = b(7919 * t.id);
                            e.lineCap = "round";
                            for (let u = 0; u < 14; u++) {
                                let u = 2 * h() - 1
                                  , f = 2 * h() - 1
                                  , p = 2 * h() - 1;
                                t.dir && (u -= 1.2 * t.dir[0],
                                f -= 1.2 * t.dir[1],
                                p -= 1.2 * t.dir[2]);
                                let x = Math.hypot(u, f, p) || 1
                                  , g = 3 + 7 * h()
                                  , y = i.SPARK_MS * (.4 + .6 * h());
                                if (a >= y)
                                    continue;
                                let b = (c ? Math.min(a, 60) : a) / 1e3
                                  , k = Math.max(0, b - .025)
                                  , S = e => [d[0] + u / x * g * e, d[1] + f / x * g * e - 4.9 * e * e, d[2] + p / x * g * e]
                                  , v = (0,
                                m.viewPoint)(S(k), s, r, n, l)
                                  , M = (0,
                                m.viewPoint)(S(b), s, r, n, l);
                                v.front && M.front && j(e, r / 2 + v.x, n / 2 + v.y, r / 2 + M.x, n / 2 + M.y, 1 - a / y, o, 1.6)
                            }
                            e.globalAlpha = 1
                        }(e$, e, a, eb, ex, eg, ej, (0,
                        i.teamColor)(ef(e.seat)), er),
                        e.origin && a < 150 && en > 0)) {
                            let t = null !== e.seat ? eF.get(e.seat) : null;
                            if (!t)
                                continue;
                            let s = Z.get(e.id);
                            !s && (s = [e.origin[0] - t[0], e.origin[1] - t[1], e.origin[2] - t[2]],
                            Z.set(e.id, s),
                            Z.size > 8 && Z.delete(Z.keys().next().value));
                            let r = [t[0] + s[0], t[1] + s[1], t[2] + s[2]]
                              , n = em(r, eb, ex, eg, ej);
                            if (n && (0,
                            u.inSight)(U, r, .1, X, Y)) {
                                let t = a / 150
                                  , s = 9 + 18 * t;
                                e$.save(),
                                e$.globalCompositeOperation = "lighter",
                                e$.globalAlpha = (1 - t) * en * .8,
                                e$.strokeStyle = (0,
                                i.teamColor)(ef(e.seat)),
                                e$.lineWidth = 3 * (1 - t) + 1,
                                e$.beginPath(),
                                e$.ellipse(n.x, n.y, s, .65 * s, 0, 0, 2 * Math.PI),
                                e$.stroke(),
                                e$.restore()
                            }
                        }
                    }
            }
              , ex = e => {
                er = requestAnimationFrame(ex),
                e - en > 100 && ep(e)
            }
            ;
            er = requestAnimationFrame(ex);
            let eg = (0,
            p.onFrameDrawn)( () => {
                ep(en = performance.now())
            }
            );
            return () => {
                cancelAnimationFrame(er),
                eg()
            }
        }
        , []),
        (0,
        t.jsxs)("div", {
            ref: k,
            className: "fd-combat sim-flight-ui",
            hidden: !0,
            "aria-label": "Team Deathmatch",
            children: [(0,
            t.jsx)("canvas", {
                className: "fd-combat-static",
                "aria-hidden": "true",
                hidden: !0
            }), (0,
            t.jsx)("canvas", {
                className: "fd-combat-breakup",
                "aria-hidden": "true",
                hidden: !0
            }), (0,
            t.jsx)("div", {
                className: "fd-combat-flash",
                "aria-hidden": "true",
                hidden: !0
            }), (0,
            t.jsxs)("div", {
                className: "fd-combat-ripple",
                "aria-hidden": "true",
                hidden: !0,
                children: [(0,
                t.jsx)("i", {}), (0,
                t.jsx)("i", {})]
            }), (0,
            t.jsx)("canvas", {
                className: "fd-combat-bolts",
                "aria-hidden": "true"
            }), (0,
            t.jsxs)("div", {
                className: "fd-combat-score",
                role: "group",
                "aria-label": "Batteries and match clock",
                children: [(0,
                t.jsxs)("div", {
                    className: "fd-combat-team",
                    "data-team": "0",
                    "aria-label": "Blue batteries",
                    children: [(0,
                    t.jsx)("span", {
                        children: "Blue"
                    }), (0,
                    t.jsx)(x.Icon, {
                        name: "battery"
                    }), (0,
                    t.jsx)("strong", {
                        children: "20"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "fd-combat-clock",
                    children: [(0,
                    t.jsx)("strong", {
                        children: "8:00"
                    }), (0,
                    t.jsx)("small", {
                        hidden: !0
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "fd-combat-team",
                    "data-team": "1",
                    "aria-label": "Red batteries",
                    children: [(0,
                    t.jsx)("strong", {
                        children: "20"
                    }), (0,
                    t.jsx)(x.Icon, {
                        name: "battery"
                    }), (0,
                    t.jsx)("span", {
                        children: "Red"
                    })]
                }), [0, 1].map(e => (0,
                t.jsx)("div", {
                    className: "fd-combat-cells",
                    "data-team": e,
                    "aria-hidden": "true",
                    children: Array.from({
                        length: 20
                    }, (e, a) => (0,
                    t.jsx)("i", {
                        "data-on": "true"
                    }, a))
                }, e))]
            }), (0,
            t.jsx)("ol", {
                className: "fd-combat-feed",
                "aria-label": "Knockouts",
                children: Array.from({
                    length: i.FEED_LINES
                }, (e, a) => (0,
                t.jsxs)("li", {
                    hidden: !0,
                    children: [(0,
                    t.jsx)("span", {
                        className: "fd-combat-feed__credit"
                    }), (0,
                    t.jsx)("b", {
                        children: "KO"
                    }), (0,
                    t.jsx)("span", {
                        className: "fd-combat-feed__victim"
                    })]
                }, a))
            }), (0,
            t.jsxs)("div", {
                className: "fd-combat-world",
                "aria-hidden": "true",
                children: [Array.from({
                    length: 3
                }, (e, a) => (0,
                t.jsx)("div", {
                    className: "fd-combat-mate",
                    hidden: !0
                }, `m${a}`)), Array.from({
                    length: 4
                }, (e, a) => (0,
                t.jsxs)("div", {
                    className: "fd-combat-tag",
                    hidden: !0,
                    children: [(0,
                    t.jsx)("div", {
                        className: "fd-combat-tag__hp",
                        children: (0,
                        t.jsx)("i", {})
                    }), (0,
                    t.jsxs)("div", {
                        className: "fd-combat-tag__box",
                        children: [(0,
                        t.jsx)("i", {}), (0,
                        t.jsx)("i", {}), (0,
                        t.jsx)("i", {}), (0,
                        t.jsx)("i", {})]
                    }), (0,
                    t.jsxs)("div", {
                        className: "fd-combat-tag__name",
                        children: [(0,
                        t.jsx)("strong", {}), (0,
                        t.jsx)("span", {
                            className: "fd-combat-tag__label",
                            hidden: !0
                        }), (0,
                        t.jsx)("span", {
                            className: "fd-combat-tag__distance",
                            hidden: !0
                        })]
                    })]
                }, `e${a}`)), Array.from({
                    length: i.DAMAGE_LABELS
                }, (e, a) => (0,
                t.jsxs)("div", {
                    className: "fd-combat-damage",
                    hidden: !0,
                    children: [(0,
                    t.jsx)("span", {}), (0,
                    t.jsx)("small", {
                        hidden: !0,
                        children: "KO"
                    }), (0,
                    t.jsx)("i", {
                        className: "fd-combat-damage__arrow"
                    })]
                }, `d${a}`))]
            }), (0,
            t.jsxs)("div", {
                className: "fd-combat-reticle",
                "aria-hidden": "true",
                children: [(0,
                t.jsx)("svg", {
                    className: "fd-combat-cooldown",
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    children: (0,
                    t.jsx)("circle", {
                        cx: "20",
                        cy: "20",
                        r: "18",
                        pathLength: "100"
                    })
                }), (0,
                t.jsxs)("svg", {
                    className: "fd-combat-aim",
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    children: [(0,
                    t.jsx)("circle", {
                        className: "fd-combat-edge",
                        cx: "20",
                        cy: "20",
                        r: "11"
                    }), (0,
                    t.jsx)("circle", {
                        cx: "20",
                        cy: "20",
                        r: "11"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "fd-combat-hitmarker",
                    children: [(0,
                    t.jsx)("i", {}), (0,
                    t.jsx)("i", {}), (0,
                    t.jsx)("i", {}), (0,
                    t.jsx)("i", {})]
                }), (0,
                t.jsxs)("div", {
                    className: "fd-combat-komarker",
                    children: [(0,
                    t.jsx)("i", {}), (0,
                    t.jsx)("i", {}), (0,
                    t.jsx)("i", {}), (0,
                    t.jsx)("i", {})]
                })]
            }), (0,
            t.jsxs)("div", {
                className: "fd-combat-emitter",
                "data-side": "left",
                "aria-hidden": "true",
                hidden: !0,
                children: [(0,
                t.jsx)("i", {}), (0,
                t.jsx)("b", {})]
            }), (0,
            t.jsxs)("div", {
                className: "fd-combat-emitter",
                "data-side": "right",
                "aria-hidden": "true",
                hidden: !0,
                children: [(0,
                t.jsx)("i", {}), (0,
                t.jsx)("b", {})]
            }), (0,
            t.jsxs)("div", {
                className: "fd-combat-hp",
                role: "group",
                "aria-label": "Your HP",
                children: [(0,
                t.jsx)("span", {
                    children: "HP"
                }), (0,
                t.jsx)("div", {
                    className: "fd-combat-hp__bar",
                    children: (0,
                    t.jsx)("i", {
                        className: "fd-combat-hp__fill"
                    })
                }), (0,
                t.jsx)("strong", {
                    children: "100"
                }), (0,
                t.jsx)("small", {
                    children: "/ 100"
                })]
            })]
        })
    }
    ])
}
, 541964, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , s = e.i(101060)
      , i = e.i(247800)
      , r = e.i(706079)
      , n = e.i(246176)
      , l = e.i(73798)
      , o = e.i(60650)
      , c = e.i(869488);
    e.i(573798);
    var d = e.i(568204)
      , h = e.i(796856)
      , m = e.i(26186)
      , u = e.i(686410)
      , f = e.i(106258)
      , p = e.i(966841);
    function x() {
        let e = m.roomControl.session
          , t = e?.room.view(e.pilotId)
          , a = t?.combat;
        if (!e || !t || !a)
            return null;
        let i = e.room.tick;
        return {
            tick: i,
            drone: t.normalDrone,
            phase: a.state.phase,
            lineup: a.setup.lineup,
            koTicks: a.state.koTicks,
            open: (0,
            s.canPickDrone)(a.state, a.setup, i)
        }
    }
    function g() {
        let e = (0,
        f.useSimStore)(e => e.isAnonymous ? null : e.playerAccountId)
          , t = (0,
        n.useLobbySocial)(e => e.squad);
        return (0,
        a.useMemo)( () => (0,
        u.lentDrones)(t, e), [t, e])
    }
    e.s(["DronePickHost", 0, function({hidden: e}) {
        let n = (0,
        h.useMatchState)(e => e.match)
          , u = (0,
        h.useMatchSeats)(e => e.roster)
          , y = (0,
        h.useMatchSeats)(e => e.self)
          , b = (0,
        f.useSimStore)(e => e.xp)
          , j = (0,
        f.useSimStore)(e => e.droneGifts)
          , k = (0,
        f.useSimStore)(e => e.settings.drone.skins)
          , S = (0,
        f.useSimStore)(e => e.playerAccountId)
          , v = g()
          , [M,_] = (0,
        a.useState)(null);
        (0,
        a.useEffect)( () => {
            if (!n)
                return;
            let e = setInterval( () => _(e => {
                let t = x();
                return e === t || e && t && e.drone === t.drone && e.phase === t.phase && e.open === t.open && Math.ceil((e.lineup - e.tick) / i.TICK_RATE) === Math.ceil((t.lineup - t.tick) / i.TICK_RATE) && Math.ceil(e.koTicks / i.TICK_RATE) === Math.ceil(t.koTicks / i.TICK_RATE) ? e : t
            }
            ), 100);
            return () => clearInterval(e)
        }
        , [n]);
        let w = !e && !!n && !!M?.open && M.phase === s.PHASE.alive
          , N = (0,
        a.useMemo)( () => {
            if (!w || !n)
                return null;
            let e = (0,
            l.scoreRows)(n, u, y)
              , a = e.find(e => e.you)
              , s = a?.team ?? 0;
            return {
                layout: "selection",
                entries: e.filter(e => e.team === s).sort( (e, t) => Number(t.you) - Number(e.you)).map(e => ({
                    key: `seat-${e.seat}`,
                    drone: e.drone,
                    skin: e.skin,
                    skinOverride: (0,
                    o.seatSkin)(e.drone, e.skin, e.paint),
                    self: e.you,
                    team: e.team,
                    tag: (0,
                    t.jsx)(d.NameTag, {
                        name: e.name,
                        status: e.label ?? void 0,
                        you: e.you
                    })
                }))
            }
        }
        , [w, n, u, y]);
        (0,
        a.useLayoutEffect)( () => {
            if (N)
                return c.useActivityDisplay.setState({
                    display: N
                }),
                () => {
                    c.useActivityDisplay.getState().display === N && c.useActivityDisplay.setState({
                        display: null
                    })
                }
        }
        , [N]);
        let E = u.find(e => e.userId === y)?.drone;
        return ((0,
        a.useEffect)( () => {
            w && E && (0,
            r.rememberPick)(S, E)
        }
        , [w, E, S]),
        w && n && M) ? (0,
        t.jsxs)("div", {
            className: "fd-pick-host",
            children: [(0,
            t.jsx)(p.DronePickBanner, {
                seconds: (M.lineup - M.tick) / i.TICK_RATE,
                action: "Pick your drone"
            }), (0,
            t.jsx)(p.DronePick, {
                drones: (0,
                r.offeredDrones)(n.drones),
                selected: E ?? null,
                xp: b,
                gifts: j,
                lent: v,
                skins: k,
                onPick: e => {
                    (0,
                    m.roomCommand)({
                        type: "pickDrone",
                        drone: e
                    })
                }
            })]
        }) : null
    }
    , "standing", 0, x, "useLentDrones", 0, g])
}
, 966841, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(655861)
      , s = e.i(271645)
      , i = e.i(392436)
      , r = e.i(353198)
      , n = e.i(353937)
      , l = e.i(894969)
      , o = e.i(706079);
    e.i(573798);
    var c = e.i(244144);
    e.i(671112);
    let d = () => {}
      , h = [["health", "Health"], ["damage", "Damage"], ["agility", "Agility"]];
    e.s(["DronePick", 0, function({drones: e, selected: m, xp: u, gifts: f, lent: p=[], skins: x, onPick: g, compact: y=!1, disabled: b=!1}) {
        let j = (0,
        s.useRef)(null);
        return (0,
        i.useRaceMenuInput)(j, d),
        (0,
        l.useInventory)(e => e.items),
        (0,
        t.jsx)("div", {
            ref: j,
            onKeyDown: e => {
                if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key))
                    return;
                let t = [...e.currentTarget.querySelectorAll("button:not(:disabled)")];
                if (!t.length)
                    return;
                e.preventDefault(),
                e.stopPropagation();
                let a = t.indexOf(document.activeElement)
                  , s = "Home" === e.key ? 0 : "End" === e.key ? t.length - 1 : (a + ("ArrowLeft" === e.key ? -1 : 1) + t.length) % t.length;
                t[s].focus(),
                t[s].click()
            }
            ,
            className: "fd-pick fdk-screen",
            "data-compact": y || void 0,
            role: "radiogroup",
            "aria-label": "Pick your drone",
            children: e.map(e => {
                let s = (0,
                o.pickCard)(e)
                  , i = (0,
                o.pickLock)(e, u, f, p)
                  , l = m === e;
                return (0,
                t.jsx)("button", {
                    type: "button",
                    role: "radio",
                    className: "fd-pick__card",
                    "aria-checked": l,
                    "data-race-primary": l || void 0,
                    "aria-label": r.DRONES[e].name,
                    "data-locked": null !== i || void 0,
                    disabled: b || null !== i,
                    onClick: () => g(e),
                    children: (0,
                    t.jsxs)("span", {
                        className: "fd-pick__face",
                        children: [(0,
                        t.jsx)("span", {
                            className: "fd-pick__head",
                            children: (0,
                            t.jsx)("strong", {
                                children: r.DRONES[e].name
                            })
                        }), null !== i && (0,
                        t.jsx)(c.Icon, {
                            name: "lock",
                            className: "fd-pick__lock",
                            size: 24
                        }), (0,
                        t.jsx)("span", {
                            className: "fd-pick__art",
                            "aria-hidden": "true",
                            children: (0,
                            t.jsx)(a.ActivityThumbnail, {
                                archetype: e,
                                skin: (0,
                                n.equippedDroneSkin)(x, e)
                            })
                        }), null !== i && (0,
                        t.jsxs)("span", {
                            className: "fd-pick__unlock",
                            children: ["Unlocks at level ", i]
                        }), (0,
                        t.jsx)("span", {
                            className: "fd-pick__bars",
                            children: h.map( ([e,a]) => (0,
                            t.jsxs)("span", {
                                className: "fd-pick__bar",
                                children: [(0,
                                t.jsx)("span", {
                                    children: a
                                }), (0,
                                t.jsx)("span", {
                                    className: "fd-pick__pills",
                                    role: "img",
                                    "aria-label": `${a} ${s.bars[e]} of ${o.PICK_PILLS}`,
                                    children: Array.from({
                                        length: o.PICK_PILLS
                                    }, (a, i) => (0,
                                    t.jsx)("i", {
                                        "data-on": i < s.bars[e] || void 0
                                    }, i))
                                })]
                            }, e))
                        })]
                    })
                }, e)
            }
            )
        })
    }
    , "DronePickBanner", 0, function({label: e, seconds: a, action: s}) {
        let i;
        return (0,
        t.jsxs)("h2", {
            className: "fd-pick-banner fdk-screen",
            "aria-live": "off",
            children: [(0,
            t.jsx)("i", {
                "aria-hidden": "true"
            }), (0,
            t.jsxs)("span", {
                children: [e && (0,
                t.jsxs)(t.Fragment, {
                    children: [e, " "]
                }), (0,
                t.jsx)("b", {
                    children: (i = Math.max(0, Math.ceil(a)),
                    `${Math.floor(i / 60)}:${String(i % 60).padStart(2, "0")}`)
                }), " · ", s]
            })]
        })
    }
    ])
}
, 117751, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , s = e.i(807375)
      , i = e.i(101060)
      , r = e.i(247800)
      , n = e.i(706079)
      , l = e.i(572219)
      , o = e.i(907462)
      , c = e.i(632997)
      , d = e.i(532116)
      , h = e.i(882902)
      , m = e.i(73798)
      , u = e.i(796856)
      , f = e.i(233783)
      , p = e.i(884316)
      , x = e.i(298421)
      , g = e.i(240155)
      , y = e.i(720996)
      , b = e.i(26186)
      , j = e.i(106258)
      , k = e.i(966841)
      , S = e.i(541964)
      , v = e.i(683293)
      , M = e.i(206527)
      , _ = e.i(770703)
      , w = e.i(353198)
      , N = e.i(60650);
    e.i(573798);
    var E = e.i(244144)
      , A = e.i(568204)
      , P = e.i(523895)
      , T = e.i(655861)
      , C = e.i(625965);
    e.i(671112);
    let R = (0,
    _.default)( () => e.A(637918).then(e => e.MatchStage), {
        loadableGenerated: {
            modules: [638284]
        },
        ssr: !1
    });
    function D({row: e}) {
        return (0,
        t.jsxs)("span", {
            className: "fd-match-name",
            children: [e.label && (0,
            t.jsx)("b", {
                className: "fd-match-name__label",
                children: e.label
            }), (0,
            t.jsx)("span", {
                className: "fd-match-name__text",
                children: e.name
            })]
        })
    }
    function L({accolade: e}) {
        let a = {
            width: 22,
            height: 22,
            viewBox: "0 0 24 24",
            "aria-hidden": !0
        };
        switch (e) {
        case "mostKos":
            return (0,
            t.jsxs)("svg", {
                ...a,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2.4,
                children: [(0,
                t.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "7.5"
                }), (0,
                t.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "2",
                    fill: "currentColor"
                }), (0,
                t.jsx)("path", {
                    d: "M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5"
                })]
            });
        case "topAssist":
            return (0,
            t.jsx)("svg", {
                ...a,
                fill: "currentColor",
                children: (0,
                t.jsx)("path", {
                    d: "M2 9.5 6.5 5l4 2.5h3l4-2.5L22 9.5l-3 3.2-4.6-3.4-3.2 2.9a1.6 1.6 0 0 1-2.3-2.2l1.3-1.3H9L6 12.6zM5.4 14.2l1.4-1.5 5.4 5.1a1.4 1.4 0 0 1-2 2zm5 0 1.6-1.4 4.4 4.1a1.4 1.4 0 0 1-2 2zm3.3-2.8 1.6-1.4 3.4 3.2a1.4 1.4 0 0 1-2 2z"
                })
            });
        case "sharpshooter":
            return (0,
            t.jsxs)("svg", {
                ...a,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2.4,
                children: [(0,
                t.jsx)("path", {
                    d: "M12 3v6M12 15v6M3 12h6M15 12h6"
                }), (0,
                t.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "1.6",
                    fill: "currentColor"
                })]
            });
        case "heavyHitter":
            return (0,
            t.jsx)("svg", {
                ...a,
                fill: "currentColor",
                children: (0,
                t.jsx)("path", {
                    d: "M13 2 4.5 13.5h6L9.5 22 19 9.5h-6z"
                })
            });
        default:
            return (0,
            t.jsx)("svg", {
                ...a,
                fill: "currentColor",
                children: (0,
                t.jsx)("path", {
                    d: "M6 3h12v5a6 6 0 0 1-12 0zM3 4h3v3H5a2 2 0 0 1-2-2zM21 4h-3v3h1a2 2 0 0 0 2-2zM10.5 13.5h3V17h3v3.5h-9V17h3z"
                })
            })
        }
    }
    function I({accolade: e}) {
        return (0,
        t.jsxs)("span", {
            className: "fd-match-accolade",
            children: [(0,
            t.jsx)(L, {
                accolade: e
            }), (0,
            t.jsx)("span", {
                children: m.ACCOLADE_LABELS[e]
            })]
        })
    }
    let F = (e, t) => ({
        key: `seat-${e.seat}`,
        drone: e.drone,
        skin: e.skin,
        paint: e.paint,
        color: (0,
        s.teamColor)(e.team),
        team: e.team,
        self: e.you,
        ...t
    });
    function O({rows: e, countdown: a}) {
        return (0,
        t.jsxs)("section", {
            className: "fd-match fd-match-start",
            "aria-label": "Match start",
            children: ["go" !== a && (0,
            t.jsx)("div", {
                className: "fd-match-start__teams",
                "aria-label": "Teams",
                children: [0, 1].map(a => (0,
                t.jsx)("ol", {
                    "data-team": a,
                    "aria-label": (0,
                    m.teamName)(a),
                    children: e.filter(e => e.team === a).slice(0, 4).map(e => (0,
                    t.jsx)("li", {
                        "data-you": e.you || void 0,
                        children: (0,
                        t.jsx)(D, {
                            row: e
                        })
                    }, e.seat))
                }, a))
            }), (0,
            t.jsx)(C.Countdown, {
                value: a,
                hint: "go" === a ? void 0 : "READY"
            })]
        })
    }
    function $({attacker: e, self: a, hp: s, seconds: i, still: r, picking: n, onSwitch: l, pick: o}) {
        let c = e ?? a
          , d = c ? [F(c, {
            position: [0, 0, 0],
            yaw: Math.PI,
            span: 1.2,
            trail: "orbit",
            pad: !0
        })] : [];
        return (0,
        t.jsxs)("section", {
            className: "fd-match fd-ko",
            "aria-label": e ? `KO'd by ${e.name}` : "KO'd",
            "data-picking": n || void 0,
            children: [(0,
            t.jsx)("div", {
                className: "fd-ko__feed",
                "aria-hidden": !0
            }), !n && (0,
            t.jsx)(R, {
                drones: d,
                still: r,
                className: "fd-ko__stage",
                camera: {
                    position: [0, 1.25, 5.2],
                    look: [0, -.12, 0],
                    fov: 30
                }
            }), (0,
            t.jsx)("h2", {
                className: "fd-ko__title",
                children: (0,
                t.jsxs)("span", {
                    children: ["KO'd", e && (0,
                    t.jsxs)(t.Fragment, {
                        children: [" by ", (0,
                        t.jsxs)("em", {
                            children: [e.label ? `${e.label} \xb7 ` : "", e.name]
                        })]
                    })]
                })
            }), (0,
            t.jsxs)("div", {
                className: "fd-ko__summary",
                children: [(0,
                t.jsx)("div", {
                    className: "fd-ko__plate",
                    children: (0,
                    t.jsx)("p", {
                        className: "fd-ko__who",
                        children: e ? (0,
                        t.jsxs)(t.Fragment, {
                            children: [e.name, s && (0,
                            t.jsxs)(t.Fragment, {
                                children: [" · ", (0,
                                t.jsxs)("b", {
                                    children: [s.hp, " HP left"]
                                })]
                            })]
                        }) : "No enemy credited"
                    })
                }), (0,
                t.jsxs)("div", {
                    className: "fd-ko__relaunch",
                    children: [(0,
                    t.jsxs)("p", {
                        role: "status",
                        children: ["Relaunch in ", (0,
                        t.jsx)("b", {
                            children: Math.max(0, Math.ceil(i))
                        })]
                    }), l && (0,
                    t.jsxs)("button", {
                        type: "button",
                        className: "fd-ko__switch sim-focus",
                        onClick: l,
                        "aria-expanded": n,
                        children: [(0,
                        t.jsx)("svg", {
                            width: "22",
                            height: "22",
                            viewBox: "0 0 24 24",
                            "aria-hidden": !0,
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.6",
                            children: (0,
                            t.jsx)("path", {
                                d: "M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5"
                            })
                        }), (0,
                        t.jsx)("span", {
                            children: n ? "Keep drone" : "Switch drone"
                        })]
                    })]
                })]
            }), n && o && (0,
            t.jsx)("div", {
                className: "fd-ko__pick",
                children: o
            })]
        })
    }
    let K = {
        connection: {
            title: "Connection lost",
            line: "A bot is flying your seat until you're back."
        },
        resync: {
            title: "Re-syncing",
            line: null
        },
        removed: {
            title: "Removed from the match",
            line: "Your flight did not check out on the server."
        },
        joining: {
            title: "Joining the match",
            line: "A bot is flying your seat until you take it."
        }
    }
      , q = {
        title: "Back in",
        line: "Relaunching at your pit."
    };
    function H({cause: e, self: a, seconds: s, still: i}) {
        let r = "connection" === e && null !== s ? q : K[e ?? "joining"]
          , n = a ? [F(a, {
            position: [0, 0, 0],
            yaw: Math.PI,
            span: 1.2,
            trail: "orbit",
            pad: !0
        })] : [];
        return (0,
        t.jsxs)("section", {
            className: "fd-match fd-ko fd-away",
            "aria-label": r.title,
            "data-cause": e ?? "joining",
            children: [(0,
            t.jsx)("div", {
                className: "fd-ko__feed",
                "aria-hidden": !0
            }), (0,
            t.jsx)(R, {
                drones: n,
                still: i,
                className: "fd-ko__stage",
                camera: {
                    position: [0, 1.25, 5.2],
                    look: [0, -.12, 0],
                    fov: 30
                }
            }), (0,
            t.jsx)("h2", {
                className: "fd-ko__title",
                children: (0,
                t.jsx)("span", {
                    children: r.title
                })
            }), r.line && (0,
            t.jsx)("div", {
                className: "fd-away__slot",
                children: (0,
                t.jsx)("div", {
                    className: "fd-ko__plate",
                    children: (0,
                    t.jsx)("p", {
                        className: "fd-ko__who",
                        children: r.line
                    })
                })
            }), (0,
            t.jsx)("div", {
                className: "fd-ko__relaunch",
                children: (0,
                t.jsx)("p", {
                    role: "status",
                    children: null === s ? "Waiting for your connection" : (0,
                    t.jsxs)(t.Fragment, {
                        children: ["Relaunch in ", (0,
                        t.jsx)("b", {
                            children: Math.max(0, Math.ceil(s))
                        })]
                    })
                })
            })]
        })
    }
    let B = ({team: e}) => (0,
    t.jsx)("i", {
        className: "fd-score__battery",
        "data-team": e,
        children: (0,
        t.jsx)(E.Icon, {
            name: "battery",
            label: `${(0,
            m.teamName)(e)} batteries`
        })
    });
    function W({outcome: e, rows: a, ownTeam: s, still: i, children: r}) {
        let n = e.winner ?? s
          , l = (0,
        m.teamRows)(a, n).slice(0, 4)
          , o = l[0] ?? null
          , c = [[-2.7, .35, -1], [0, .75, -2.1], [2.7, .35, -1]]
          , d = l.map( (e, a) => F(e, {
            position: 0 === a ? [0, -.25, 1.15] : [...c[a - 1]],
            yaw: Math.PI + (1 === a ? .3 : 3 === a ? -.3 : 0),
            span: 0 === a ? 1.65 : 1.35,
            trail: "stream",
            pad: !0,
            tag: (0,
            t.jsxs)("span", {
                className: "fd-win__tag",
                "data-mvp": 0 === a || void 0,
                children: [(0,
                t.jsx)(A.NameTag, {
                    name: e.name,
                    you: e.you,
                    status: e.label ?? (0 === a ? "MVP" : void 0)
                }), e.accolade && (0,
                t.jsx)(I, {
                    accolade: e.accolade
                })]
            })
        }));
        return (0,
        t.jsxs)("section", {
            className: "fd-match fd-win",
            "aria-label": (0,
            m.outcomeTitle)(e),
            children: [(0,
            t.jsx)(R, {
                drones: d,
                still: i,
                className: "fd-win__stage",
                camera: {
                    position: [0, 1.8, 7.6],
                    look: [0, .25, 0],
                    fov: 38
                }
            }), (0,
            t.jsxs)("header", {
                className: "fd-win__head",
                "data-team": e.winner ?? void 0,
                children: [(0,
                t.jsx)("h2", {
                    className: "fd-win__title",
                    children: (0,
                    t.jsx)("span", {
                        children: (0,
                        m.outcomeTitle)(e)
                    })
                }), (0,
                t.jsx)("p", {
                    className: "fd-win__sub",
                    children: (0,
                    t.jsxs)("span", {
                        children: [(0,
                        m.batteriesText)(e.batteries), " ", (0,
                        t.jsx)(E.Icon, {
                            name: "battery",
                            inline: !0,
                            label: "batteries"
                        }), " left"]
                    })
                })]
            }), o && (0,
            t.jsxs)("span", {
                className: "sr-only",
                children: ["MVP: ", o.name]
            }), r]
        })
    }
    function z({rows: e}) {
        return (0,
        t.jsx)("div", {
            className: "fd-endboard",
            children: [0, 1].map(a => (0,
            t.jsxs)("table", {
                className: "fd-endboard__team",
                "data-team": a,
                children: [(0,
                t.jsx)("caption", {
                    className: "sr-only",
                    children: (0,
                    m.teamName)(a)
                }), (0,
                t.jsx)("thead", {
                    children: (0,
                    t.jsxs)("tr", {
                        children: [(0,
                        t.jsx)("th", {
                            scope: "col",
                            children: "Pilot"
                        }), (0,
                        t.jsx)("th", {
                            scope: "col",
                            children: "KO"
                        }), (0,
                        t.jsx)("th", {
                            scope: "col",
                            children: (0,
                            t.jsx)("abbr", {
                                title: "Assists",
                                children: "A"
                            })
                        }), (0,
                        t.jsx)("th", {
                            scope: "col",
                            children: "KO'd"
                        })]
                    })
                }), (0,
                t.jsx)("tbody", {
                    children: (0,
                    m.teamRows)(e, a).map(e => (0,
                    t.jsxs)("tr", {
                        "data-you": e.you || void 0,
                        children: [(0,
                        t.jsx)("th", {
                            scope: "row",
                            children: (0,
                            t.jsx)(D, {
                                row: e
                            })
                        }), (0,
                        t.jsx)("td", {
                            children: e.kos
                        }), (0,
                        t.jsx)("td", {
                            children: e.assists
                        }), (0,
                        t.jsx)("td", {
                            children: e.kod
                        })]
                    }, e.seat))
                })]
            }, a))
        })
    }
    function G({batteries: e, time: a, ownTeam: s}) {
        return (0,
        t.jsxs)("div", {
            className: "fd-score",
            children: [(0,
            t.jsxs)("div", {
                className: "fd-score__bar",
                children: [(0,
                t.jsx)(B, {
                    team: 0
                }), (0,
                t.jsx)("span", {
                    className: "fd-score__team",
                    "data-team": "0",
                    "data-own": 0 === s || void 0,
                    children: "Blue"
                }), (0,
                t.jsx)("b", {
                    className: "fd-score__count",
                    children: e[0] ?? 0
                }), (0,
                t.jsx)("i", {
                    className: "fd-score__dot",
                    "aria-hidden": !0,
                    children: "·"
                }), (0,
                t.jsx)("b", {
                    className: "fd-score__count",
                    children: e[1] ?? 0
                }), (0,
                t.jsx)("span", {
                    className: "fd-score__team",
                    "data-team": "1",
                    "data-own": 1 === s || void 0,
                    children: "Red"
                }), (0,
                t.jsx)(B, {
                    team: 1
                })]
            }), a && (0,
            t.jsxs)("p", {
                className: "fd-score__clock",
                children: [(0,
                t.jsxs)("svg", {
                    width: "34",
                    height: "34",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0,
                    t.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10.5",
                        fill: P.PALETTE.orange,
                        stroke: P.PALETTE.ink,
                        strokeWidth: "1.6"
                    }), (0,
                    t.jsx)("circle", {
                        cx: "8.6",
                        cy: "10",
                        r: "1.3",
                        fill: P.PALETTE.ink
                    }), (0,
                    t.jsx)("circle", {
                        cx: "15.4",
                        cy: "10",
                        r: "1.3",
                        fill: P.PALETTE.ink
                    }), (0,
                    t.jsx)("path", {
                        d: "M7.4 13.6a5 5 0 0 0 9.2 0",
                        fill: "none",
                        stroke: P.PALETTE.ink,
                        strokeWidth: "1.8",
                        strokeLinecap: "round"
                    })]
                }), (0,
                t.jsx)("b", {
                    children: a
                })]
            })]
        })
    }
    function V({rows: e, batteries: a, time: s, final: i, ownTeam: r, children: n}) {
        return (0,
        t.jsxs)("section", {
            className: "fd-match fd-board",
            "aria-label": "Scoreboard",
            "data-final": i || void 0,
            children: [(0,
            t.jsx)(G, {
                batteries: a,
                time: s,
                ownTeam: r
            }), (0,
            t.jsx)("div", {
                className: "fd-board__teams",
                children: [0, 1].map(a => (0,
                t.jsxs)("div", {
                    className: "fd-board__team",
                    "data-team": a,
                    children: [(0,
                    t.jsxs)("h3", {
                        className: "fd-board__head",
                        children: [(0,
                        t.jsxs)("span", {
                            className: "fd-board__name",
                            children: [(0,
                            t.jsx)("i", {
                                "aria-hidden": !0,
                                className: "fd-board__logo"
                            }), (0,
                            m.teamName)(a)]
                        }), (0,
                        t.jsxs)("span", {
                            className: "fd-board__cols",
                            "aria-hidden": !0,
                            children: [(0,
                            t.jsx)("span", {
                                children: "KO"
                            }), (0,
                            t.jsx)("span", {
                                children: "Assists"
                            }), (0,
                            t.jsx)("span", {
                                children: "KO'd"
                            }), i && (0,
                            t.jsxs)(t.Fragment, {
                                children: [(0,
                                t.jsx)("span", {
                                    children: "Acc"
                                }), (0,
                                t.jsx)("span", {
                                    children: "Score"
                                }), (0,
                                t.jsx)("span", {
                                    children: "XP"
                                })]
                            })]
                        })]
                    }), (0,
                    t.jsxs)("table", {
                        className: "fd-board__table",
                        children: [(0,
                        t.jsx)("thead", {
                            className: "sr-only",
                            children: (0,
                            t.jsxs)("tr", {
                                children: [(0,
                                t.jsx)("th", {
                                    children: "Pilot"
                                }), (0,
                                t.jsx)("th", {
                                    children: "KO"
                                }), (0,
                                t.jsx)("th", {
                                    children: "Assists"
                                }), (0,
                                t.jsx)("th", {
                                    children: "KO'd"
                                }), i && (0,
                                t.jsxs)(t.Fragment, {
                                    children: [(0,
                                    t.jsx)("th", {
                                        children: "Accuracy"
                                    }), (0,
                                    t.jsx)("th", {
                                        children: "Score"
                                    }), (0,
                                    t.jsx)("th", {
                                        children: "XP"
                                    })]
                                })]
                            })
                        }), (0,
                        t.jsx)("tbody", {
                            children: (0,
                            m.teamRows)(e, a).map(e => (0,
                            t.jsxs)("tr", {
                                "data-you": e.you || void 0,
                                children: [(0,
                                t.jsxs)("th", {
                                    scope: "row",
                                    className: "fd-board__pilot",
                                    children: [(0,
                                    t.jsx)("span", {
                                        className: "fd-board__art",
                                        "aria-hidden": !0,
                                        children: (0,
                                        t.jsx)(T.ActivityThumbnail, {
                                            archetype: e.drone,
                                            skin: e.skin,
                                            skinOverride: (0,
                                            N.seatSkin)(e.drone, e.skin, e.paint)
                                        })
                                    }), (0,
                                    t.jsxs)("span", {
                                        className: "fd-board__who",
                                        children: [(0,
                                        t.jsx)(D, {
                                            row: e
                                        }), i && e.accolade && (0,
                                        t.jsx)(I, {
                                            accolade: e.accolade
                                        }), (0,
                                        t.jsxs)("span", {
                                            className: "sr-only",
                                            children: [", ", w.DRONES[e.drone]?.name ?? e.drone]
                                        })]
                                    })]
                                }), (0,
                                t.jsx)("td", {
                                    children: e.kos
                                }), (0,
                                t.jsx)("td", {
                                    children: e.assists
                                }), (0,
                                t.jsx)("td", {
                                    children: e.kod
                                }), i && (0,
                                t.jsxs)(t.Fragment, {
                                    children: [(0,
                                    t.jsx)("td", {
                                        children: (0,
                                        m.accuracyText)(e.accuracy)
                                    }), (0,
                                    t.jsx)("td", {
                                        children: e.score ?? "–"
                                    }), (0,
                                    t.jsx)("td", {
                                        children: null === e.xp ? "–" : `+${e.xp}`
                                    })]
                                })]
                            }, e.seat))
                        })]
                    })]
                }, a))
            }), n]
        })
    }
    function U() {
        return (0,
        t.jsxs)("p", {
            className: "fd-match fd-deciding",
            role: "status",
            children: [(0,
            t.jsx)("b", {
                children: "Deciding"
            }), (0,
            t.jsx)("span", {
                children: "Checking the last hits"
            })]
        })
    }
    let X = ["start"];
    function Y() {
        let e = p.usePracticeLaunch.getState().active;
        e && (0,
        p.enterPractice)(e.arena, e.difficulty)
    }
    function J() {
        let e = p.usePracticeLaunch.getState().active;
        (0,
        p.leavePractice)(),
        e && j.useSimStore.getState().startFlight(e.arena.mapId)
    }
    function Q({table: e}) {
        return (0,
        t.jsxs)(g.EndScreen, {
            label: "Practice results",
            mode: "teamDeathmatch",
            children: [e, (0,
            t.jsx)("p", {
                className: "fd-end__note",
                children: "Practice pays nothing"
            }), (0,
            t.jsx)(g.EndActions, {
                again: "Play again",
                onAgain: Y,
                onNewMatch: null,
                onFlyFree: J,
                newMatchLocked: null,
                holdKeys: !1
            })]
        })
    }
    e.s(["MatchResultsHost", 0, function({hidden: e, forceBoard: p=!1}) {
        let g = (0,
        u.useMatchState)(e => e.match)
          , _ = (0,
        u.useMatchSeats)(e => e.roster)
          , w = (0,
        u.useMatchSeats)(e => e.self)
          , N = (0,
        h.useMatchLaunch)(e => e.active)
          , E = (0,
        f.useAfterMatch)(e => e.pressed)
          , A = (0,
        u.useMatchScreens)()
          , P = (0,
        y.useReducedMotion)()
          , T = (0,
        j.useSimStore)(e => e.xp)
          , C = (0,
        j.useSimStore)(e => e.droneGifts)
          , R = (0,
        j.useSimStore)(e => e.settings.drone.skins)
          , D = (0,
        j.useSimStore)(e => e.playerAccountId)
          , L = (0,
        S.useLentDrones)()
          , [I,F] = (0,
        a.useState)(null)
          , [K,q] = (0,
        a.useState)(!1)
          , B = function(e) {
            let[t,s] = (0,
            a.useState)(!1)
              , [i,r] = (0,
            a.useState)(!1);
            return (0,
            a.useEffect)( () => {
                if (!e)
                    return;
                let t = () => j.useSimStore.getState().settings.bindings.keyboard.droneWheel
                  , a = e => {
                    e.code !== t() || (0,
                    l.isTypingTarget)(e.target) || (e.preventDefault(),
                    s(!0))
                }
                  , i = e => {
                    e.code === t() && s(!1)
                }
                  , n = () => {
                    s(!1),
                    r(!1)
                }
                  , o = requestAnimationFrame(function e() {
                    o = requestAnimationFrame(e);
                    let t = j.useSimStore.getState().settings.bindings
                      , a = t.keyboardOnly || "none" === t.droneWheel.kind || document.hidden ? null : (0,
                    d.getRawGamepad)(t.deviceId)
                      , s = !!a && !0 === (0,
                    c.readArmBinding)(a, t.droneWheel);
                    r(e => e === s ? e : s)
                });
                return window.addEventListener("keydown", a),
                window.addEventListener("keyup", i),
                window.addEventListener("blur", n),
                () => {
                    cancelAnimationFrame(o),
                    window.removeEventListener("keydown", a),
                    window.removeEventListener("keyup", i),
                    window.removeEventListener("blur", n),
                    s(!1),
                    r(!1)
                }
            }
            , [e]),
            e && (t || i)
        }(!!g && !g.outcome && "warmup" !== g.phase) || p;
        (0,
        a.useEffect)( () => {
            if (!g)
                return;
            let e = setInterval( () => {
                let e, t, a, i;
                return F((e = performance.now(),
                t = s.combatHud.tick + Math.max(0, e - s.combatHud.tickAt) * r.TICK_RATE / 1e3,
                i = null === (a = s.combatHud.knockout?.by ?? null) ? void 0 : o.navigationRuntime.multiplayer?.current?.peers.find(e => e.seat === a)?.frames.at(-1)?.life,
                {
                    tick: t,
                    phase: s.combatHud.self.phase,
                    koTicks: s.combatHud.self.koTicks,
                    knockout: s.combatHud.knockout,
                    seat: s.combatHud.seat,
                    team: s.combatHud.team,
                    drone: (0,
                    S.standing)()?.drone ?? null,
                    at: e,
                    attackerLife: i,
                    away: {
                        ...s.combatHud.away
                    }
                }))
            }
            , 100);
            return () => clearInterval(e)
        }
        , [g]);
        let G = (0,
        a.useMemo)( () => g ? (0,
        m.scoreRows)(g, _, w) : [], [g, _, w])
          , Y = N?.mode === "teamDeathmatch" ? N.match : null
          , J = g?.outcome ?? null
          , Z = J ? Y ?? "practice" : null;
        (0,
        a.useEffect)( () => {
            Z && (u.useMatchScreens.getState().match !== Z && u.useMatchScreens.setState({
                match: Z,
                stage: "end"
            }),
            Y && (0,
            f.roundOver)(Y, "teamDeathmatch"))
        }
        , [Z, Y]),
        (0,
        a.useEffect)( () => {
            if (!Z || A.match !== Z || !A.stage)
                return;
            let e = (0,
            m.resultsStage)(E);
            e !== A.stage && u.useMatchScreens.setState({
                stage: e
            })
        }
        , [Z, A.match, A.stage, E]),
        (0,
        a.useEffect)( () => {
            g || u.useMatchScreens.setState({
                screen: null,
                match: null,
                stage: null
            })
        }
        , [g]);
        let ee = !!I && "ko" === I.phase && !J
          , et = !!I && "out" === I.phase && !J
          , [ea,es] = (0,
        a.useState)(ee);
        ee !== ea && (es(ee),
        ee || q(!1)),
        (0,
        a.useLayoutEffect)( () => (u.useMatchScreens.setState({
            picking: !e && ee && K
        }),
        () => {
            u.useMatchScreens.setState({
                picking: !1
            })
        }
        ), [e, ee, K]);
        let ei = _.find(e => e.userId === w)?.drone;
        (0,
        a.useEffect)( () => {
            K && ei && (0,
            n.rememberPick)(D, ei)
        }
        , [K, ei, D]);
        let er = I?.team ?? G.find(e => e.you)?.team ?? 0
          , en = g && I && ("lineup" === g.phase || "playing" === g.phase) ? (0,
        v.countdownValue)((g.start - I.tick) / r.TICK_RATE) : null
          , el = null;
        if (g && I && (J && A.match === Z && "done" !== A.stage && A.stage ? el = A.stage : "lineup" === g.phase || "go" === en ? el = "start" : ee ? el = "ko" : et ? el = "away" : B ? el = "board" : "deciding" === g.phase && (el = "deciding")),
        (0,
        a.useEffect)( () => {
            u.useMatchScreens.getState().screen !== el && u.useMatchScreens.setState({
                screen: el
            })
        }
        , [el]),
        (0,
        M.useCountdownCues)((0,
        M.startCountdownCue)(el, en, X, e)),
        e || !g || !I || !el)
            return null;
        switch (el) {
        case "start":
            return (0,
            t.jsx)("div", {
                className: "fd-match-host fdk-screen",
                children: (0,
                t.jsx)(O, {
                    rows: G,
                    countdown: en
                })
            });
        case "ko":
            {
                let e = I.knockout?.by ?? null
                  , a = null === e ? null : G.find(t => t.seat === e) ?? null
                  , l = G.find(e => e.seat === I.seat) ?? null;
                return (0,
                t.jsx)("div", {
                    className: "fd-match-host fdk-screen",
                    children: (0,
                    t.jsx)($, {
                        attacker: a,
                        self: l,
                        hp: null === e ? null : (0,
                        s.attackerHealth)(e, I.attackerLife, a?.drone ?? null, I.at),
                        seconds: (i.RELAUNCH_TICKS - I.koTicks) / r.TICK_RATE,
                        still: P,
                        picking: K,
                        onSwitch: () => q(e => !e),
                        pick: (0,
                        t.jsx)(k.DronePick, {
                            drones: (0,
                            n.offeredDrones)(g.drones),
                            selected: ei ?? null,
                            xp: T,
                            gifts: C,
                            lent: L,
                            skins: R,
                            onPick: e => {
                                (0,
                                b.roomCommand)({
                                    type: "pickDrone",
                                    drone: e
                                })
                            }
                            ,
                            compact: !0
                        })
                    })
                })
            }
        case "away":
            {
                let e = G.find(e => e.seat === I.seat) ?? null;
                return (0,
                t.jsx)("div", {
                    className: "fd-match-host fdk-screen",
                    children: (0,
                    t.jsx)(H, {
                        cause: I.away.cause,
                        self: e,
                        still: P,
                        seconds: null === I.away.back ? null : (I.away.back - I.tick) / r.TICK_RATE
                    })
                })
            }
        case "deciding":
            return (0,
            t.jsx)("div", {
                className: "fd-match-host fdk-screen",
                children: (0,
                t.jsx)(U, {})
            });
        case "board":
            return (0,
            t.jsx)("div", {
                className: "fd-match-host fdk-screen",
                children: (0,
                t.jsx)(V, {
                    rows: G,
                    batteries: g.batteries,
                    time: (0,
                    s.matchClock)(g, Math.floor(I.tick)).time,
                    final: !1,
                    ownTeam: er
                })
            });
        default:
            {
                let e = (0,
                t.jsx)(z, {
                    rows: G
                });
                return (0,
                t.jsx)("div", {
                    className: "fd-match-host fdk-screen",
                    children: (0,
                    t.jsx)(W, {
                        outcome: J,
                        rows: G,
                        ownTeam: er,
                        still: P,
                        children: Y ? (0,
                        t.jsx)(x.MatchEnd, {
                            match: Y,
                            mode: "teamDeathmatch",
                            label: "Match results",
                            table: e,
                            stamp: !1
                        }) : (0,
                        t.jsx)(Q, {
                            table: e
                        })
                    })
                })
            }
        }
    }
    ], 117751)
}
, 655861, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , s = e.i(733088)
      , i = e.i(94800)
      , r = e.i(848546)
      , n = e.i(190072)
      , l = e.i(768834)
      , o = e.i(353198)
      , c = e.i(702329)
      , d = e.i(80630)
      , h = e.i(603141);
    let m = (0,
    l.create)( () => ({
        pending: new Map,
        images: new Map
    }))
      , u = new Map;
    function f({photo: e}) {
        let {gl: t, scene: s, camera: l, invalidate: o} = (0,
        r.useThree)()
          , c = (0,
        a.useMemo)( () => {
            let e = new n.WebGLRenderTarget(640,420);
            return e.texture.colorSpace = n.SRGBColorSpace,
            e
        }
        , [])
          , h = (0,
        a.useRef)(0)
          , u = (0,
        a.useRef)(!1);
        return (0,
        a.useEffect)( () => () => c.dispose(), [c]),
        (0,
        i.useFrame)( () => {
            if (u.current)
                return;
            if (++h.current < 4)
                return void o();
            u.current = !0;
            let a = {
                target: t.getRenderTarget(),
                viewport: t.getViewport(new n.Vector4),
                scissor: t.getScissor(new n.Vector4),
                scissorTest: t.getScissorTest(),
                clear: t.getClearColor(new n.Color),
                alpha: t.getClearAlpha(),
                autoClear: t.autoClear,
                toneMapping: t.toneMapping
            };
            try {
                (0,
                d.prepareCamera)(t, l),
                t.autoClear = !0,
                t.toneMapping = n.ACESFilmicToneMapping,
                t.setRenderTarget(c),
                t.setScissorTest(!1),
                t.setClearColor(0, 0),
                t.clear(),
                t.render(s, l);
                let a = new Uint8Array(1075200);
                t.readRenderTargetPixels(c, 0, 0, 640, 420, a);
                let i = document.createElement("canvas");
                i.width = 640,
                i.height = 420;
                let r = i.getContext("2d")
                  , o = r.createImageData(640, 420);
                for (let e = 0; e < 420; e++)
                    o.data.set(a.subarray((420 - e - 1) * 2560, (420 - e) * 2560), 640 * e * 4);
                r.putImageData(o, 0, 0);
                let h = i.toDataURL("image/png");
                m.setState(t => {
                    let a = new Map(t.images)
                      , s = new Map(t.pending);
                    return a.size >= 80 && a.delete(a.keys().next().value),
                    a.set(e.key, h),
                    s.delete(e.key),
                    {
                        images: a,
                        pending: s
                    }
                }
                )
            } finally {
                t.setRenderTarget(a.target),
                t.setViewport(a.viewport),
                t.setScissor(a.scissor),
                t.setScissorTest(a.scissorTest),
                t.setClearColor(a.clear, a.alpha),
                t.autoClear = a.autoClear,
                t.toneMapping = a.toneMapping
            }
        }
        , 2),
        null
    }
    e.s(["ActivityThumbnail", 0, function({archetype: e, skin: s, skinOverride: i}) {
        let r = JSON.stringify(i ?? (0,
        o.droneSkin)(e, s))
          , n = (0,
        a.useMemo)( () => ({
            key: `${e}:${s}:${r}`,
            archetype: e,
            skin: s,
            skinOverride: JSON.parse(r)
        }), [e, s, r])
          , l = m(e => e.images.get(n.key));
        return (0,
        a.useEffect)( () => {
            let e = n.key;
            return u.set(e, (u.get(e) ?? 0) + 1),
            m.getState().images.has(e) || m.setState(t => ({
                pending: new Map(t.pending).set(e, n)
            })),
            () => {
                let t = (u.get(e) ?? 1) - 1;
                t ? u.set(e, t) : (u.delete(e),
                m.setState(t => {
                    let a = new Map(t.pending);
                    return a.delete(e),
                    {
                        pending: a
                    }
                }
                ))
            }
        }
        , [n]),
        l ? (0,
        t.jsx)("img", {
            src: l,
            alt: "",
            draggable: !1,
            style: {
                width: "100%",
                height: "100%",
                objectFit: "contain"
            }
        }) : null
    }
    , "ActivityThumbnails", 0, function() {
        let e = m(e => e.pending.values().next().value)
          , i = (0,
        a.useMemo)( () => {
            let e = new n.Scene;
            return e.name = "activity-thumbnail",
            e
        }
        , [])
          , r = (0,
        a.useMemo)( () => {
            let e = new n.PerspectiveCamera(33,640 / 420,.005,10);
            return e.position.set(.21, .23, -.39),
            e.lookAt(0, .01, 0),
            e
        }
        , []);
        return e ? (0,
        s.createPortal)((0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(h.DroneStudioLighting, {}), (0,
            t.jsx)(c.DroneAirframe, {
                archetype: e.archetype,
                skin: e.skin,
                skinOverride: e.skinOverride,
                castShadow: !1
            }), (0,
            t.jsx)(f, {
                photo: e
            }, e.key)]
        }), i, {
            camera: r,
            size: {
                width: 640,
                height: 420,
                top: 0,
                left: 0
            }
        }) : null
    }
    ])
}
, 603141, 48455, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , s = e.i(848546)
      , i = e.i(243257)
      , r = e.i(931067)
      , n = e.i(520381)
      , l = e.i(190072);
    let o = a.forwardRef( ({light: e, args: t, map: s, toneMapped: i=!1, color: o="white", form: c="rect", intensity: d=1, scale: h=1, target: m=[0, 0, 0], children: u, ...f}, p) => {
        let x = a.useRef(null);
        return a.useImperativeHandle(p, () => x.current, []),
        a.useLayoutEffect( () => {
            u || f.material || ((0,
            n.applyProps)(x.current.material, {
                color: o
            }),
            x.current.material.color.multiplyScalar(d))
        }
        , [o, d, u, f.material]),
        a.useLayoutEffect( () => {
            f.rotation || x.current.quaternion.identity(),
            m && !f.rotation && ("boolean" == typeof m ? x.current.lookAt(0, 0, 0) : x.current.lookAt(Array.isArray(m) ? new l.Vector3(...m) : m))
        }
        , [m, f.rotation]),
        h = Array.isArray(h) && 2 === h.length ? [h[0], h[1], 1] : h,
        a.createElement("mesh", (0,
        r.default)({
            ref: x,
            scale: h
        }, f), "circle" === c ? a.createElement("ringGeometry", {
            args: t || [0, .5, 64]
        }) : "ring" === c ? a.createElement("ringGeometry", {
            args: t || [.25, .5, 64]
        }) : "rect" === c || "plane" === c ? a.createElement("planeGeometry", {
            args: t || [1, 1]
        }) : "box" === c ? a.createElement("boxGeometry", {
            args: t || [1, 1, 1]
        }) : a.createElement(c, {
            args: t
        }), u || a.createElement("meshBasicMaterial", {
            toneMapped: i,
            map: s,
            side: l.DoubleSide
        }), e && a.createElement("pointLight", (0,
        r.default)({
            castShadow: !0
        }, e)))
    }
    );
    e.s(["Lightformer", 0, o], 48455),
    e.s(["DroneStudioCameraFit", 0, function({fov: e, aspect: t=1.5}) {
        let {get: i, size: r, invalidate: n} = (0,
        s.useThree)();
        return (0,
        a.useLayoutEffect)( () => {
            let a = i().camera;
            a.isPerspectiveCamera && r.width && r.height && (a.fov = 2 * Math.atan(Math.tan(e * Math.PI / 360) * Math.max(1, t / (r.width / r.height))) * 180 / Math.PI,
            a.updateProjectionMatrix(),
            n())
        }
        , [i, r.width, r.height, e, t, n]),
        null
    }
    , "DroneStudioLighting", 0, function({fill: e="#e9f1ff", rim: a="#dbe8ff", shadows: s=!1, subdued: r=!1, shadowExtent: n=.4}) {
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)("ambientLight", {
                intensity: .3
            }), (0,
            t.jsx)("hemisphereLight", {
                args: ["#edf4ff", "#292c35", .65]
            }), (0,
            t.jsx)("directionalLight", {
                position: [-3, 5, -4],
                color: "#fffaf2",
                intensity: r ? 1.5 : 2.7,
                castShadow: s,
                "shadow-mapSize": [1024, 1024],
                "shadow-camera-left": -n,
                "shadow-camera-right": n,
                "shadow-camera-top": n,
                "shadow-camera-bottom": -n,
                "shadow-camera-near": .1,
                "shadow-camera-far": 10,
                "shadow-bias": -3e-5,
                "shadow-normalBias": 3e-4
            }, n), (0,
            t.jsx)("directionalLight", {
                position: [4, 2, -1],
                color: e,
                intensity: r ? .45 : 1.1
            }), (0,
            t.jsx)("directionalLight", {
                position: [1, 3, 4],
                color: a,
                intensity: r ? .7 : 1.8
            }), (0,
            t.jsxs)(i.Environment, {
                resolution: 128,
                frames: 1,
                environmentIntensity: r ? .12 : .7,
                children: [(0,
                t.jsx)(o, {
                    form: "rect",
                    position: [-3, 4, -4],
                    target: [0, 0, 0],
                    scale: [4, 5],
                    intensity: 2.5,
                    color: "#fffaf4"
                }), (0,
                t.jsx)(o, {
                    form: "rect",
                    position: [4, 2, -2],
                    target: [0, 0, 0],
                    scale: [1.3, 5],
                    intensity: 1.8,
                    color: e
                }), (0,
                t.jsx)(o, {
                    form: "rect",
                    position: [0, 4, 4],
                    target: [0, 0, 0],
                    scale: [5, 1.4],
                    intensity: 2.7,
                    color: a
                }), (0,
                t.jsx)(o, {
                    form: "rect",
                    position: [0, -3, -2],
                    target: [0, 0, 0],
                    scale: [3, 2],
                    intensity: .45,
                    color: "#e8ecff"
                })]
            })]
        })
    }
    ], 603141)
}
, 392436, 405424, e => {
    "use strict";
    var t = e.i(271645)
      , a = e.i(632997)
      , s = e.i(532116);
    let i = {
        respawn: !1,
        droneWheel: !1
    };
    function r() {
        i.respawn = !0,
        i.droneWheel = !0
    }
    e.s(["raceMenuFlightActionSuppressed", 0, function(e, t) {
        return !!i[e] && (t || (i[e] = !1),
        !0)
    }
    , "suppressRaceMenuFlightActions", 0, r], 405424);
    var n = e.i(106258);
    e.s(["useRaceMenuInput", 0, function(e, i) {
        (0,
        t.useEffect)( () => {
            let t = 0
              , l = ""
              , o = ""
              , c = 0
              , d = null
              , h = m => {
                t = requestAnimationFrame(h);
                let u = n.useSimStore.getState()
                  , f = u.settings.bindings
                  , p = document.hidden || f.keyboardOnly || u.settingsOpen ? null : (0,
                s.getRawGamepad)(f.deviceId);
                if (!p) {
                    d = null,
                    l = "",
                    o = "";
                    return
                }
                let x = "standard" === p.mapping
                  , g = x ? !!p.buttons[0]?.pressed : !0 === (0,
                a.readArmBinding)(p, f.respawn)
                  , y = x ? !!p.buttons[1]?.pressed : !0 === (0,
                a.readArmBinding)(p, f.droneWheel)
                  , b = `${p.index}:${p.id}`;
                if (!d || b !== l) {
                    d = {
                        activate: g,
                        exit: y
                    },
                    l = b;
                    return
                }
                let j = e.current ? [...e.current.querySelectorAll('[role="dialog"][aria-modal="true"]')].at(-1) ?? null : null
                  , k = j ?? e.current;
                if (y && !d.exit)
                    r(),
                    j ? j.dispatchEvent(new KeyboardEvent("keydown",{
                        key: "Escape",
                        bubbles: !0
                    })) : i();
                else if (g && !d.activate) {
                    let e = x && document.activeElement instanceof HTMLElement && k?.contains(document.activeElement) ? document.activeElement : k?.querySelector("[data-race-primary]:not(:disabled)");
                    e && (r(),
                    e.click())
                }
                if (d = {
                    activate: g,
                    exit: y
                },
                !x)
                    return;
                let S = p.buttons[12]?.pressed || p.axes[1] < -.6 ? "up" : p.buttons[13]?.pressed || p.axes[1] > .6 ? "down" : p.buttons[14]?.pressed || p.axes[0] < -.6 ? "left" : p.buttons[15]?.pressed || p.axes[0] > .6 ? "right" : "";
                if (S && (S !== o || m >= c)) {
                    let e = [...k?.querySelectorAll("button:not(:disabled), input:not(:disabled)") ?? []].filter(e => e.getClientRects().length > 0)
                      , t = e.find(e => e === document.activeElement)
                      , a = t?.getBoundingClientRect();
                    if (a) {
                        let s = a.left + a.width / 2
                          , i = a.top + a.height / 2
                          , r = "left" === S || "up" === S ? -1 : 1
                          , n = "up" === S || "down" === S
                          , l = e.filter(e => e !== t).map(e => {
                            let t = e.getBoundingClientRect()
                              , a = t.left + t.width / 2 - s
                              , l = t.top + t.height / 2 - i
                              , o = (n ? l : a) * r;
                            return {
                                node: e,
                                ahead: o,
                                score: o + 2.5 * Math.abs(n ? a : l)
                            }
                        }
                        ).filter(e => e.ahead > 5).sort( (e, t) => e.score - t.score);
                        l[0]?.node.focus(),
                        l[0]?.node.scrollIntoView?.({
                            block: "nearest",
                            inline: "nearest"
                        })
                    } else
                        e[0]?.focus();
                    c = m + (S === o ? 140 : 400)
                }
                o = S
            }
            ;
            return t = requestAnimationFrame(h),
            () => cancelAnimationFrame(t)
        }
        , [e, i])
    }
    ], 392436)
}
, 706079, e => {
    "use strict";
    var t = e.i(353198)
      , a = e.i(11871)
      , s = e.i(121645)
      , i = e.i(739011)
      , r = e.i(534306);
    function n(e) {
        let t = a.DRONE_PROFILES[e]
          , s = (0,
        r.flightHardware)(t.flight).mass;
        return t.quad.thrustToWeight * s.mass * 9.81 * t.reachX / (2 * s.inertia[2])
    }
    let l = null
      , o = e => Math.min(5, Math.max(1, Math.round(5 * e)))
      , c = Math.max(...t.DRONE_IDS.map(e => (0,
    s.droneCombat)(e).health))
      , d = Math.max(...t.DRONE_IDS.map(e => (0,
    s.droneCombat)(e).damage))
      , h = "fd.tdm.pick.";
    e.s(["PICK_PILLS", 0, 5, "defaultPick", 0, function(e, a, s, i) {
        let r = a => e.includes(a) && (0,
        t.isDroneUnlocked)(a, s, i);
        return a && t.DRONE_IDS.includes(a) && r(a) ? a : e.find(r) ?? null
    }
    , "lastPick", 0, function(e) {
        if (!e)
            return null;
        try {
            let a = globalThis.localStorage?.getItem(h + e) ?? null;
            return a && t.DRONE_IDS.includes(a) ? a : null
        } catch {
            return null
        }
    }
    , "offeredDrones", 0, function(e) {
        return t.DRONE_LADDER.filter(t => !e?.length || e.includes(t))
    }
    , "pickCard", 0, function(e, r=i.STANDARD_GUN) {
        let h = (0,
        s.droneCombat)(e);
        return {
            id: e,
            health: h.health,
            hits: Math.ceil(h.health / (0,
            i.hitDamage)(r)),
            bars: {
                health: o(h.health / c),
                damage: o(h.damage / d),
                agility: o((l ??= {
                    roll: Math.max(...t.DRONE_IDS.map(n)),
                    thrust: Math.max(...t.DRONE_IDS.map(e => a.DRONE_PROFILES[e].quad.thrustToWeight))
                },
                Math.sqrt(n(e) / l.roll * (a.DRONE_PROFILES[e].quad.thrustToWeight / l.thrust))))
            }
        }
    }
    , "pickLock", 0, function(e, a, s, i=[]) {
        return (0,
        t.isDroneUnlocked)(e, a, s) || i.includes(e) ? null : t.DRONES[e].unlockLevel
    }
    , "rememberPick", 0, function(e, t) {
        if (e)
            try {
                globalThis.localStorage?.setItem(h + e, t)
            } catch {}
    }
    ])
}
, 683293, 206527, e => {
    "use strict";
    e.s(["countdownValue", 0, function(e) {
        return null !== e && Number.isFinite(e) ? e > 0 ? e <= 6 ? Math.min(5, Math.ceil(e)) : null : 800 > -(1e3 * e) ? "go" : null : null
    }
    ], 683293);
    var t = e.i(271645)
      , a = e.i(584042)
      , s = e.i(579832);
    e.s(["startCountdownCue", 0, function(e, t, a, s=!1) {
        return !s && null !== e && a.includes(e) ? t : null
    }
    , "useCountdownCues", 0, function(e) {
        let i = (0,
        t.useRef)(null);
        (0,
        t.useEffect)( () => {
            null !== e && e !== i.current && (0,
            a.playCues)((0,
            s.getDroneAudio)(), [(0,
            a.countdownCue)(e)]),
            i.current = e
        }
        , [e])
    }
    ], 206527)
}
]);
