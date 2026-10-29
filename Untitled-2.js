(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 452358, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , i = e.i(106258)
      , s = e.i(451598)
      , r = e.i(809102);
    e.i(573798);
    var n = e.i(244144);
    function l({award: e, placement: a="flight"}) {
        let i = e.names.length > 1 ? `${e.names.length} rewards unlocked` : e.achievements ? "Achievement unlocked" : "Challenge tier complete";
        return (0,
        t.jsxs)("aside", {
            className: "fd-achievement-reward",
            "data-placement": a,
            role: "status",
            "aria-live": "polite",
            "aria-atomic": "true",
            children: [(0,
            t.jsx)("span", {
                className: "fd-achievement-reward__icon",
                "aria-hidden": "true",
                children: (0,
                t.jsx)(n.Icon, {
                    name: "trophy",
                    size: 24
                })
            }), (0,
            t.jsxs)("div", {
                className: "fd-achievement-reward__copy",
                children: [(0,
                t.jsx)("small", {
                    children: i
                }), (0,
                t.jsxs)("strong", {
                    children: [e.names[0], e.names.length > 1 ? ` + ${e.names.length - 1} more` : ""]
                }), (0,
                t.jsxs)("div", {
                    className: "fd-achievement-reward__meta",
                    children: [e.credits > 0 && (0,
                    t.jsxs)("span", {
                        className: "fd-achievement-reward__credits",
                        children: ["+", e.credits.toLocaleString(), " Credits"]
                    }), (e.parts ?? 0) > 0 && (0,
                    t.jsxs)("span", {
                        className: "fd-achievement-reward__credits",
                        children: ["+", e.parts.toLocaleString(), " Parts"]
                    }), e.boosters?.map( (e, a) => (0,
                    t.jsx)("span", {
                        children: (0,
                        r.rewardLabel)({
                            ...e,
                            credits: 0,
                            parts: 0
                        })
                    }, a)), (e.pending ?? 0) > 0 ? (0,
                    t.jsxs)("span", {
                        children: [e.pending.toLocaleString(), " Parts wait past your cap. Claim them from the Parts counter in the header."]
                    }) : (0,
                    t.jsx)("span", {
                        children: e.boosters?.length ? "Boosters saved to Gear → Consumables" : "Saved to Challenges"
                    })]
                }), e.names.length > 1 && (0,
                t.jsx)("span", {
                    className: "sr-only",
                    children: e.names.slice(1).join(", ")
                })]
            })]
        }, e.id)
    }
    e.i(671112),
    e.s(["AchievementBanner", 0, l, "AchievementReward", 0, function({visible: e, resultScreen: r=!1}) {
        let n = (0,
        i.useSimStore)(e => e.unlockedDroneQueue.length > 0)
          , c = e && !n
          , o = (0,
        s.useCreditRecord)(e => e.notifications[0])
          , [d,u] = (0,
        a.useState)(!0);
        return ((0,
        a.useEffect)( () => {
            let e = () => u(!document.hidden);
            return e(),
            document.addEventListener("visibilitychange", e),
            () => document.removeEventListener("visibilitychange", e)
        }
        , []),
        (0,
        a.useEffect)( () => {
            if (!o || !c || !d || document.hidden)
                return;
            let e = window.setTimeout( () => {
                s.useCreditRecord.getState().dismissNotification(o.id)
            }
            , 6500);
            return () => window.clearTimeout(e)
        }
        , [o, c, d]),
        o && c && d) ? (0,
        t.jsx)(l, {
            award: o,
            placement: r ? "result" : "flight"
        }) : null
    }
    ])
}
, 271780, 735995, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(720996)
      , i = e.i(271645)
      , s = e.i(579832)
      , r = e.i(106258)
      , n = e.i(870895);
    let l = e => new Intl.NumberFormat("en-US",{
        maximumFractionDigits: 0
    }).format(Math.floor(e));
    function c({award: e}) {
        let r = (0,
        i.useRef)(null);
        return (0,
        i.useEffect)( () => {
            let t = r.current;
            if (!t || "saved" !== e.status)
                return;
            let i = a.reducedMotionQuery
              , c = t.querySelector("[data-fill]")
              , o = t.querySelector("[data-owned]")
              , d = t.querySelector("[data-level]")
              , u = t.querySelector("[data-counter]")
              , h = t.querySelector("[data-label]")
              , m = t.querySelector("[role=progressbar]");
            if (!c || !o || !d || !u || !h || !m)
                return;
            let p = (0,
            n.levelProgress)(e.xpBefore)
              , f = (0,
            n.levelProgress)(e.xpAfter)
              , x = f.level > p.level
              , g = (0,
            n.xpRequiredForLevel)(p.level + 1)
              , v = performance.now() - Math.max(0, Date.now() - e.createdAt)
              , S = 0
              , b = ""
              , j = a => {
                let r = a - v
                  , y = e.xpBefore
                  , k = "stamp";
                if (r >= 400 && (k = "reveal"),
                r >= 720) {
                    k = "fill";
                    let t = Math.min(1, (r - 720) / 1e3);
                    y += ((x ? g : e.xpAfter) - e.xpBefore) * (1 - Math.pow(1 - t, 3))
                }
                if (r >= 1720 && (k = x ? "levelup" : "land",
                y = x && r < 2120 ? g - 1e-5 : x ? g : e.xpAfter),
                x && r >= 2120) {
                    let t = Math.min(1, (r - 2120) / 520);
                    y = g + (e.xpAfter - g) * (1 - Math.pow(1 - t, 3)),
                    k = r < 2640 ? "carry" : "land"
                }
                if (i.matches && (y = e.xpAfter,
                k = "land"),
                r > (x ? 4300 : 3300) && (k = "exit"),
                r > (x ? 4650 : 3650)) {
                    t.hidden = !0;
                    return
                }
                k !== b && (t.dataset.beat = k,
                !document.hidden && e.xpAwarded > 0 && ("stamp" === k || "fill" === k || "levelup" === k || "land" === k) && (0,
                s.getDroneAudio)()?.play(`xp.${k}`),
                b = k);
                let w = (0,
                n.levelProgress)(y)
                  , M = y - (0,
                n.xpRequiredForLevel)(w.level)
                  , _ = w.level === p.level ? e.xpBefore - (0,
                n.xpRequiredForLevel)(p.level) : 0;
                c.style.width = `${Math.min(100, M / w.xpForNext * 100)}%`,
                o.style.width = `${_ / w.xpForNext * 100}%`,
                d.textContent = String("levelup" === k ? f.level : w.level),
                h.textContent = x && ("levelup" === k || "carry" === k || "land" === k) ? "LEVEL UP" : "LEVEL",
                u.textContent = `${l(M)} / ${w.xpForNext}`,
                m.setAttribute("aria-valuenow", String(Math.min(w.xpForNext, M))),
                m.setAttribute("aria-valuemax", String(w.xpForNext)),
                S = requestAnimationFrame(j)
            }
            ;
            return S = requestAnimationFrame(j),
            () => cancelAnimationFrame(S)
        }
        , [e]),
        (0,
        t.jsxs)("div", {
            ref: r,
            className: "fd-chain-xp fdk-screen",
            "data-beat": "stamp",
            "data-status": e.status,
            children: [(0,
            t.jsxs)("div", {
                className: "fd-chain-xp__stamp",
                children: [e.label ? (0,
                t.jsx)("span", {
                    className: "fd-chain-xp__eyebrow",
                    children: e.label
                }) : null, (0,
                t.jsxs)("strong", {
                    children: ["+", l(e.xpAwarded), " ", (0,
                    t.jsx)("small", {
                        children: "XP"
                    })]
                })]
            }), (0,
            t.jsxs)("div", {
                className: "fd-chain-xp__progress",
                children: [(0,
                t.jsxs)("div", {
                    className: "fd-chain-xp__level",
                    children: [(0,
                    t.jsx)("span", {
                        "data-label": !0,
                        children: "LEVEL"
                    }), (0,
                    t.jsx)("b", {
                        "data-level": !0,
                        children: (0,
                        n.levelProgress)(e.xpBefore).level
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "fd-chain-xp__body",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "fd-chain-xp__track",
                        role: "progressbar",
                        "aria-label": "Pilot level XP",
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": 0,
                        children: [(0,
                        t.jsx)("i", {
                            "data-fill": !0
                        }), (0,
                        t.jsx)("i", {
                            "data-owned": !0
                        }), (0,
                        t.jsx)("span", {
                            className: "fd-chain-xp__ticks"
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "fd-chain-xp__caption",
                        children: [(0,
                        t.jsx)("span", {
                            children: "BONUS XP"
                        }), (0,
                        t.jsx)("span", {
                            "data-counter": !0
                        })]
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "fd-chain-xp__sparks",
                    "aria-hidden": "true",
                    children: Array.from({
                        length: 8
                    }, (e, a) => (0,
                    t.jsx)("i", {
                        style: {
                            rotate: `${45 * a}deg`
                        }
                    }, a))
                })]
            }), (0,
            t.jsx)("span", {
                className: "sr-only",
                role: "status",
                "aria-live": "polite",
                children: `${e.label ?? "Skill chain"} earned ${l(e.xpAwarded)} XP.${(0,
                n.levelProgress)(e.xpAfter).level > (0,
                n.levelProgress)(e.xpBefore).level ? ` Level up! Level ${(0,
                n.levelProgress)(e.xpAfter).level}.` : ""}`
            })]
        })
    }
    function o({createdAt: e}) {
        let a = (0,
        i.useRef)(null);
        return (0,
        i.useEffect)( () => {
            let t = window.setTimeout( () => {
                a.current && (a.current.hidden = !0)
            }
            , Math.max(0, 4500 - (Date.now() - e)));
            return () => window.clearTimeout(t)
        }
        , [e]),
        (0,
        t.jsx)("div", {
            ref: a,
            className: "fd-chain-xp-error",
            role: "status",
            children: "Couldn’t save XP"
        })
    }
    e.i(671112),
    e.s(["ChainXpReward", 0, function() {
        let e = (0,
        r.useSimStore)(e => e.chainXpAward);
        return ((0,
        i.useEffect)( () => {
            e?.deferred && r.useSimStore.setState(t => {
                var a, i;
                return t.chainXpAward?.id === e.id ? {
                    chainXpAward: (a = t.chainXpAward,
                    i = Date.now(),
                    a.deferred ? {
                        ...a,
                        deferred: !1,
                        createdAt: i
                    } : a)
                } : t
            }
            )
        }
        , [e]),
        !e || e.deferred || "saving" === e.status || "saved" === e.status && e.xpAwarded < 1) ? null : (0,
        t.jsx)("div", {
            className: "fd-chain-xp-anchor",
            children: "error" === e.status ? (0,
            t.jsx)(o, {
                createdAt: e.createdAt
            }, e.id) : (0,
            t.jsx)(c, {
                award: e
            }, e.id)
        })
    }
    ], 271780);
    var d = e.i(349894)
      , u = e.i(907462)
      , h = e.i(170341)
      , m = e.i(523895);
    let p = new Intl.NumberFormat("en-US")
      , f = ["above", "right", "below", "left"]
      , x = [0, 1, 2, 3, 4]
      , g = [{
        pop: 1.16,
        popGlow: 1.5,
        flash: 1.6,
        rowScale: 1.3,
        kick: 1.28,
        burst: 1.3,
        ms: 420,
        shake: 0,
        hz: 0,
        impulse: 0
    }, {
        pop: 1.2,
        popGlow: 1.7,
        flash: 1.8,
        rowScale: 1.4,
        kick: 1.32,
        burst: 1.45,
        ms: 440,
        shake: .5,
        hz: 7,
        impulse: 2.5
    }, {
        pop: 1.24,
        popGlow: 1.9,
        flash: 2,
        rowScale: 1.5,
        kick: 1.36,
        burst: 1.6,
        ms: 480,
        shake: 1,
        hz: 9,
        impulse: 3.5
    }, {
        pop: 1.28,
        popGlow: 2.1,
        flash: 2.2,
        rowScale: 1.6,
        kick: 1.4,
        burst: 1.75,
        ms: 520,
        shake: 1.75,
        hz: 12,
        impulse: 4.5
    }, {
        pop: 1.3,
        popGlow: 2.2,
        flash: 2.5,
        rowScale: 1.75,
        kick: 1.46,
        burst: 2,
        ms: 580,
        shake: 2.5,
        hz: 15,
        impulse: 6
    }];
    function v(e, t) {
        return ("gap" === e && t ? d.GAP_NAMES[t] : d.SKILL_NAMES[e]).replace(/!$/, "")
    }
    e.s(["ComboHud", 0, function({cinematic: e=!1}) {
        let s = (0,
        r.useSimStore)(e => e.settings.graphics.showSkillChainHud)
          , n = (0,
        i.useRef)(null);
        return ((0,
        i.useEffect)( () => {
            let e, t, i, s, r, l, c = n.current;
            if (!c)
                return;
            let o = e => c.querySelector(`[data-part="${e}"]`)
              , S = (e, t) => {
                e.textContent !== t && (e.textContent = t)
            }
              , b = (e, t) => {
                e.hidden !== t && (e.hidden = t)
            }
              , j = (e, t, a) => {
                e.dataset[t] !== a && (e.dataset[t] = a)
            }
              , y = o("score")
              , k = o("multiplier")
              , w = o("score-motion")
              , M = o("banked")
              , _ = o("trick")
              , N = o("points")
              , A = o("progress")
              , L = o("direction")
              , P = o("callout")
              , C = o("detail")
              , E = o("announcement")
              , $ = a.reducedMotionQuery
              , F = 0
              , q = 0
              , R = 0
              , T = -1
              , B = d.combo.state.multiplier
              , O = 0
              , D = 0
              , z = -1 / 0
              , U = ""
              , X = ""
              , I = ""
              , H = ""
              , G = 1
              , K = 0
              , Y = d.combo.state.event
              , Q = d.combo.state.eventAge
              , V = -1 / 0
              , W = 0
              , Z = ""
              , J = [...c.querySelectorAll(".fd-combo__segment")]
              , ee = []
              , et = -1 / 0
              , ea = !1
              , ei = ""
              , es = 0
              , er = {
                x: 0,
                y: -1,
                z: 0
            }
              , en = !1
              , el = 180
              , ec = !1
              , eo = ""
              , ed = $.matches
              , eu = () => {
                e?.cancel(),
                t?.cancel(),
                i?.cancel(),
                s?.cancel(),
                r?.cancel(),
                l?.cancel(),
                ee.forEach(e => e?.cancel())
            }
              , eh = a => {
                F = requestAnimationFrame(eh);
                let n = d.combo.state
                  , em = Math.min((a - (q || a)) / 1e3, .1);
                q = a;
                let ep = "finished" === n.phase;
                if ("active" !== n.phase)
                    et = -1 / 0;
                else if (n.proximityRate > 0) {
                    et = a,
                    ei = n.proximityTier ?? "",
                    es = Math.round(n.proximityRate);
                    let e = n.proximityVector;
                    en = !!e,
                    e && (er.x = e.x,
                    er.y = e.y,
                    er.z = e.z)
                }
                let ef = n.chaseSkill && ("proximity" === n.skill || "proximityDive" === n.skill || n.skill && d.CHASE_SKILLS.has(n.skill)) ? n.chaseSkill : n.skill
                  , ex = !!ef && d.CHASE_SKILLS.has(ef) && ef === n.chaseSkill
                  , eg = "proximity" === ef || "proximityDive" === ef
                  , ev = !!ef && d.CHASE_SKILLS.has(ef) || eg || "dive" === ef
                  , eS = eg ? a - et < 150 : "dive" === ef ? n.diveScoring : ex
                  , eb = ef && n.eventAge < 2.5 && !ep && (!ev || eS)
                  , ej = eb && eg
                  , ey = ej && en
                  , ek = ey ? (L.hidden ? P : L).getBoundingClientRect() : null;
                b(c, "idle" === n.phase),
                j(c, "phase", n.phase),
                j(c, "motion", $.matches ? "reduce" : "full"),
                $.matches && !ed && eu(),
                ed = $.matches,
                j(c, "long", String((ep ? n.total : n.points) >= 1e6));
                let ew = Math.max(0, n.inactivitySeconds - d.COMBO_RULES.inactivityGrace)
                  , eM = "active" === n.phase ? Math.min(1, ew / (d.COMBO_RULES.inactivityTimeout - d.COMBO_RULES.inactivityGrace)) : 0
                  , e_ = eM > 0
                  , eN = ea && !e_ && "active" === n.phase;
                j(c, "warning", e_ ? eM >= .75 ? "urgent" : "warming" : "none"),
                c.style.setProperty("--combo-urgency", String(eM));
                let eA = eM * eM
                  , eL = 2 * Math.PI * (5 * ew + ew * ew);
                w.style.transform = e_ && !$.matches ? `translate(${1.4 * Math.sin(eL) * eA}px, ${.7 * Math.sin(1.37 * eL) * eA}px) scale(${1 + .018 * eA})` : "",
                e_ && !ea && (E.textContent = "Skill chain banking soon. Earn another skill to keep it going."),
                eN && (E.textContent = "Chain extended.",
                $.matches || (i?.cancel(),
                i = y.animate([{
                    transform: "scale(1.08)"
                }, {
                    transform: "scale(1)"
                }], {
                    duration: 180,
                    easing: "ease-out"
                }))),
                ea = e_;
                let eP = ep ? n.total : Math.floor(n.points + 1e-7);
                eP < R || $.matches || .5 > Math.abs(eP - R) ? R = eP : R += (eP - R) * (1 - Math.exp(-em * (ep ? 24 : 18))),
                S(y, p.format(Math.round(R))),
                S(k, `\xd7${n.multiplier.toFixed(1)}`),
                b(M, !ep),
                j(M, "best", String(n.newBest));
                let eC = n.newBest ? "Session best" : "Skill chain banked";
                M.title !== eC && (M.title = eC);
                let eE = "active" === n.phase
                  , e$ = eE && n.multiplier > B
                  , eF = n.multiplier >= d.COMBO_RULES.maxMultiplier
                  , eq = (n.points + 1e-7) / d.COMBO_RULES.multiplierStep
                  , eR = Math.min(Math.floor(d.COMBO_RULES.maxMultiplier), 1 + Math.floor(Math.floor(eq) / x.length))
                  , eT = e$ && eR > G
                  , eB = eE ? eF ? x.length : eq - (eR - 1) * x.length : 0;
                eT ? (O = x.length,
                D = a + 180) : e$ && (O = Math.max(O, Math.floor(eB))),
                !eE || $.matches || .002 > Math.abs(eB - O) ? O = eB : a >= D && (O += (eB - O) * (1 - Math.exp(-em * (eB < O ? 12 : 18)))),
                A.style.setProperty("--chain-fill", O.toFixed(4));
                let eO = O > 0 && O < x.length && O % 1 > .01 ? String(Math.floor(O)) : "";
                eO !== U && (A.dataset.lead = U = eO),
                String(eR) !== X && (c.dataset.tier = X = String(eR)),
                String(eF) !== I && (A.dataset.max = I = String(eF));
                let eD = String(eE && n.inactivitySeconds < 1);
                eD !== H && (A.dataset.scoring = H = eD),
                K += Math.max(0, n.event !== Y ? n.eventAge : n.eventAge - Q),
                Y = n.event,
                Q = n.eventAge,
                eT && (V = K,
                W = g[eR - 1].impulse);
                let ez = 0
                  , eU = 0;
                if (!$.matches && eE) {
                    let {shake: e, hz: t} = g[eR - 1]
                      , a = e * Math.min(1, Math.max(0, (1 - n.inactivitySeconds) / .25))
                      , i = 2 * Math.PI * t * K;
                    ez = a * (.7 * Math.sin(i) + .3 * Math.sin(1.37 * i + 1.7)),
                    eU = .6 * a * Math.sin(1.13 * i + .6);
                    let s = K - V;
                    if (s < .35) {
                        let e = W * Math.exp(-(10 * s));
                        ez += e * Math.cos(2 * Math.PI * 16 * s),
                        eU += .5 * e * Math.sin(2 * Math.PI * 13 * s + 1)
                    }
                }
                let eX = ez || eU ? `${ez.toFixed(2)}px ${eU.toFixed(2)}px` : "";
                eX !== Z && (A.style.translate = Z = eX),
                j(c, "continuous", String(ev && !ep)),
                S(_, eb ? v(eg ? n.diveScoring ? "proximityDive" : "proximity" : ef, n.trickTier) : ""),
                b(P, !eb);
                let eI = ex ? Math.round(n.chaseRate) : ej ? es : n.skillPoints;
                S(N, eb ? `+${p.format(eI)}${ev ? "/s" : ""}` : "");
                let eH = eb && "gap" === ef && null !== n.gapSpare;
                if (b(C, !eH),
                eH && S(C, `${Math.max(1, Math.round(100 * n.gapSpare))} cm`),
                j(P, "tier", ex ? n.chaseTier ?? "" : ej ? ei : "gap" === ef && eb ? n.trickTier ?? "" : ""),
                b(L, !ey),
                ek) {
                    let e = (0,
                    h.recentDrawnView)()
                      , t = (0,
                    u.surfaceBearing)(er, e?.camera ?? u.navigationRuntime.camera, window.innerWidth, window.innerHeight, {
                        x: ek.left + ek.width / 2,
                        y: ek.top + ek.height / 2
                    }, e?.lens ?? 0);
                    if (null !== t) {
                        let e = ((t - el) % 360 + 540) % 360 - 180;
                        el = ec && !$.matches ? el + e * (1 - Math.exp(-em / .08)) : t,
                        ec = !0
                    }
                    L.style.setProperty("--bearing", `${el.toFixed(1)}deg`);
                    let a = f[Math.round((el % 360 + 360) % 360 / 90) % 4];
                    a !== eo && (eo = a,
                    L.setAttribute("aria-label", `Surface ${eo}`),
                    L.title = `Surface ${eo}`)
                } else
                    ec = !1;
                let eG = ev && !ep;
                eG && (e?.cancel(),
                e = void 0);
                let eK = (1 - Math.cos(a * Math.PI * 2 / 1400)) / 2;
                P.style.transform = "",
                P.style.opacity = eG && !$.matches ? String(.94 + .06 * eK) : "";
                let eY = n.event !== T;
                if (eY ? (T = n.event,
                "idle" !== n.phase && (c.dataset.feedback = ep ? "bank" : e$ ? "level" : ev ? "sustain" : "skill",
                $.matches || ev || ep || (e?.cancel(),
                e = P.animate([{
                    transform: "translateY(7px) scale(.88)",
                    opacity: .3
                }, {
                    transform: "translateY(-2px) scale(1.08)",
                    opacity: 1,
                    offset: .38
                }, {
                    transform: "translateY(1px) scale(.99)",
                    opacity: 1,
                    offset: .7
                }, {
                    transform: "translateY(0) scale(1)",
                    opacity: 1
                }], {
                    duration: 300,
                    easing: "cubic-bezier(.2,.8,.25,1)"
                })),
                ep && !$.matches && (r?.cancel(),
                r = M.animate([{
                    opacity: 0,
                    transform: "translateY(8px) scale(1.2)"
                }, {
                    opacity: 1,
                    transform: "translateY(-1px) scale(.96)",
                    offset: .55
                }, {
                    opacity: 1,
                    transform: "translateY(0) scale(1)"
                }], {
                    duration: 430,
                    easing: "cubic-bezier(.2,.8,.25,1)"
                })),
                ep ? E.textContent = `Combo complete. ${p.format(n.total)} points.${n.newBest ? " Session best!" : ""}` : !ev && n.skill && (E.textContent = `${v(n.skill, n.trickTier)} ${n.skillPoints} points. Multiplier ${n.multiplier.toFixed(1)}.`))) : e$ && (c.dataset.feedback = "level"),
                !$.matches && (eY && "idle" !== n.phase && (!ev || ep) || e$) && (i?.cancel(),
                i = y.animate([{
                    transform: ep ? "scale(.9,1.08)" : "scale(.97,1.03)"
                }, {
                    transform: ep ? "scale(1.12,.96)" : "scale(1.065)",
                    color: ep ? m.PALETTE.acid : m.PALETTE.chalk,
                    offset: .3
                }, {
                    transform: "scale(.99,1.015)",
                    offset: .65
                }, {
                    transform: "scale(1)"
                }], {
                    duration: ep ? 480 : 280,
                    easing: "cubic-bezier(.2,.8,.25,1)"
                })),
                e$ && !$.matches) {
                    let e = g[eR - 1]
                      , i = eT || a - z >= 600;
                    i && (z = a);
                    let r = eT ? e.kick : i ? 1.1 : 1.05;
                    if (t?.cancel(),
                    t = o("badge").animate(eT ? [{
                        transform: "scale(.9)"
                    }, {
                        transform: `scale(${r})`,
                        offset: .3
                    }, {
                        transform: "scale(.97)",
                        offset: .65
                    }, {
                        transform: "scale(1)"
                    }] : [{
                        transform: "scale(1)"
                    }, {
                        transform: `scale(${r})`,
                        offset: .35
                    }, {
                        transform: "scale(1)"
                    }], {
                        duration: eT ? e.ms : i ? 200 : 140,
                        easing: "cubic-bezier(.2,.8,.25,1)"
                    }),
                    eT)
                        s?.cancel(),
                        s = o("burst").animate([{
                            opacity: 0,
                            transform: "scale(.75)"
                        }, {
                            opacity: 1,
                            transform: "scale(1)",
                            offset: .2
                        }, {
                            opacity: 0,
                            transform: `scale(${e.burst})`
                        }], {
                            duration: e.ms,
                            easing: "ease-out"
                        }),
                        l?.cancel(),
                        l = A.animate([{
                            transform: `scale(1.05, ${e.rowScale})`,
                            filter: `brightness(${e.flash}) saturate(.7)`
                        }, {
                            transform: `scale(1.02, ${1 + (e.rowScale - 1) * .3})`,
                            filter: `brightness(${1 + (e.flash - 1) * .4})`,
                            offset: .35
                        }, {
                            transform: "none",
                            filter: "none"
                        }], {
                            duration: e.ms,
                            easing: "cubic-bezier(.2,.8,.2,1)"
                        });
                    else {
                        let t = Math.floor(eB) - 1
                          , a = J[t];
                        a && (ee[t]?.cancel(),
                        ee[t] = a.animate(i ? [{
                            scale: "1",
                            filter: "none"
                        }, {
                            scale: String(e.pop),
                            filter: `brightness(${e.popGlow})`,
                            offset: .3
                        }, {
                            scale: "1",
                            filter: "none"
                        }] : [{
                            scale: "1"
                        }, {
                            scale: "1.07",
                            offset: .4
                        }, {
                            scale: "1"
                        }], {
                            duration: i ? 200 : 140,
                            easing: "cubic-bezier(.2,.8,.2,1)"
                        }))
                    }
                }
                B = n.multiplier,
                G = eR
            }
            ;
            return F = requestAnimationFrame(eh),
            () => {
                cancelAnimationFrame(F),
                eu()
            }
        }
        , [s]),
        s) ? (0,
        t.jsx)("div", {
            className: "fd-skill-hud fdk-screen",
            "data-cinematic": e,
            children: (0,
            t.jsxs)("div", {
                ref: n,
                className: "fd-combo",
                "data-cinematic": e,
                hidden: !0,
                children: [(0,
                t.jsxs)("div", {
                    className: "fd-combo__numbers",
                    children: [(0,
                    t.jsx)("span", {
                        className: "fd-combo__score-motion",
                        "data-part": "score-motion",
                        children: (0,
                        t.jsx)("span", {
                            className: "fd-combo__score",
                            "data-part": "score",
                            children: "0"
                        })
                    }), (0,
                    t.jsxs)("span", {
                        className: "fd-combo__badge",
                        "data-part": "badge",
                        children: [(0,
                        t.jsx)("span", {
                            "data-part": "multiplier",
                            children: "×1.0"
                        }), (0,
                        t.jsx)("svg", {
                            "data-part": "burst",
                            viewBox: "0 0 100 76",
                            "aria-hidden": "true",
                            children: (0,
                            t.jsx)("path", {
                                d: "m14 17-7-8m36 0V0m37 15 7-9m5 32h8m-17 23 8 8"
                            })
                        })]
                    }), (0,
                    t.jsxs)("span", {
                        className: "fd-combo__banked",
                        "data-part": "banked",
                        hidden: !0,
                        children: [(0,
                        t.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            children: (0,
                            t.jsx)("path", {
                                d: "m3 7 5 4 4-7 4 7 5-4-2 13H5Z"
                            })
                        }), "Banked"]
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "fd-combo__meter",
                    "data-part": "progress",
                    "aria-hidden": "true",
                    title: "Fill the pills to raise your multiplier",
                    children: x.map(e => (0,
                    t.jsx)("span", {
                        className: "fd-combo__segment",
                        style: {
                            "--segment": e
                        },
                        children: (0,
                        t.jsx)("i", {})
                    }, e))
                }), (0,
                t.jsxs)("div", {
                    className: "fd-combo__callout",
                    "data-part": "callout",
                    children: [(0,
                    t.jsx)("span", {
                        className: "fd-combo__direction",
                        "data-part": "direction",
                        role: "img",
                        hidden: !0,
                        children: (0,
                        t.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            children: (0,
                            t.jsx)("path", {
                                d: "M12 3 20.5 14H15v7H9v-7H3.5z"
                            })
                        })
                    }), (0,
                    t.jsx)("span", {
                        "data-part": "trick"
                    }), (0,
                    t.jsx)("b", {
                        "data-part": "points"
                    }), (0,
                    t.jsx)("small", {
                        className: "fd-combo__detail",
                        "data-part": "detail",
                        hidden: !0
                    })]
                }), (0,
                t.jsx)("span", {
                    className: "sr-only",
                    "data-part": "announcement",
                    role: "status",
                    "aria-live": "polite",
                    "aria-atomic": "true"
                })]
            })
        }) : null
    }
    ], 735995)
}
, 850274, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , i = e.i(353198)
      , s = e.i(870895)
      , r = e.i(106258)
      , n = e.i(579832);
    function l() {
        let e = (0,
        r.useSimStore)(e => e.xp)
          , a = (0,
        r.useSimStore)(e => e.droneGifts)
          , s = (0,
        i.nextDroneUnlock)(e, a);
        return s ? (0,
        t.jsxs)("div", {
            className: "fd-next-ride",
            children: [(0,
            t.jsxs)("div", {
                children: [(0,
                t.jsx)("span", {
                    children: "Next ride"
                }), (0,
                t.jsxs)("strong", {
                    children: [s.drone.name, " ", (0,
                    t.jsx)("small", {
                        children: s.drone.category
                    })]
                })]
            }), (0,
            t.jsx)("div", {
                className: "fd-next-ride__track",
                role: "progressbar",
                "aria-label": `${s.drone.name} unlock`,
                "aria-valuemin": 0,
                "aria-valuemax": s.required,
                "aria-valuenow": Math.min(s.required, Math.floor(e)),
                children: (0,
                t.jsx)("i", {
                    style: {
                        transform: `scaleX(${s.fraction})`
                    }
                })
            }), (0,
            t.jsxs)("p", {
                children: [s.remaining.toLocaleString("en-US"), " XP to unlock"]
            })]
        }) : (0,
        t.jsx)("p", {
            className: "fd-next-ride fd-next-ride--complete",
            children: "Full fleet."
        })
    }
    e.i(671112),
    e.s(["DroneUnlockReward", 0, function({visible: e}) {
        let s = (0,
        r.useSimStore)(e => e.unlockedDroneQueue[0])
          , [l,c] = (0,
        a.useState)(!0);
        if ((0,
        a.useEffect)( () => {
            let e = () => c(!document.hidden);
            return e(),
            document.addEventListener("visibilitychange", e),
            () => document.removeEventListener("visibilitychange", e)
        }
        , []),
        (0,
        a.useEffect)( () => {
            if (!s || !e || !l || document.hidden)
                return;
            document.hidden || (0,
            n.getDroneAudio)()?.play("xp.unlock");
            let t = window.setTimeout( () => {
                r.useSimStore.setState(e => ({
                    unlockedDroneQueue: e.unlockedDroneQueue.slice(1)
                }))
            }
            , 6500);
            return () => window.clearTimeout(t)
        }
        , [s, e, l]),
        !s || !e || !l)
            return null;
        let o = i.DRONES[s];
        return (0,
        t.jsxs)("aside", {
            className: "fd-drone-unlock",
            role: "status",
            "aria-live": "polite",
            children: [(0,
            t.jsx)("span", {
                className: "fd-drone-unlock__sticker",
                children: "Unlocked"
            }), (0,
            t.jsx)("span", {
                className: "fd-drone-unlock__size",
                "aria-hidden": "true",
                children: o.size
            }), (0,
            t.jsx)("strong", {
                children: o.name
            }), (0,
            t.jsxs)("span", {
                children: [o.category, " · Ready in Gear"]
            }), (0,
            t.jsx)("div", {
                className: "fd-drone-unlock__confetti",
                "aria-hidden": "true",
                children: Array.from({
                    length: 8
                }, (e, a) => (0,
                t.jsx)("i", {
                    style: {
                        "--piece": a
                    }
                }, a))
            })]
        }, s)
    }
    , "PilotFlightProgress", 0, function() {
        let e = (0,
        r.useSimStore)(e => e.xp)
          , l = (0,
        r.useSimStore)(e => e.flightXpToast)
          , c = (0,
        r.useSimStore)(e => !!e.timeAttackResult)
          , o = (0,
        s.levelProgress)(e)
          , d = (0,
        a.useRef)(null);
        (0,
        a.useEffect)( () => {
            let e = d.current;
            if (!e || !l || Date.now() - l.createdAt > 4e3)
                return;
            let t = l.leveledUp ?? (0,
            s.levelProgress)(l.xpAfter).level > (0,
            s.levelProgress)(l.xpBefore).level;
            e.dataset.reward = t ? "level" : "flight",
            document.hidden || t && 0 !== (0,
            i.newlyUnlockedDrones)(l.xpBefore, l.xpAfter, r.useSimStore.getState().droneGifts).length || (0,
            n.getDroneAudio)()?.play(t ? "xp.levelup" : "xp.tick");
            let a = window.setTimeout( () => {
                delete e.dataset.reward
            }
            , t ? 4e3 : 2200);
            return () => window.clearTimeout(a)
        }
        , [l]);
        let u = l && (l.leveledUp ?? (0,
        s.levelProgress)(l.xpAfter).level > (0,
        s.levelProgress)(l.xpBefore).level);
        return (0,
        t.jsx)("aside", {
            ref: d,
            className: "fd-pilot-progress",
            "data-race-result": c,
            "aria-label": "Flight progress",
            children: (0,
            t.jsx)("div", {
                className: "fd-pilot-progress__gain",
                role: "status",
                children: l ? u ? `LEVEL ${o.level}` : `+${l.xpAwarded} FLIGHT XP` : ""
            }, l?.id)
        })
    }
    , "SessionXpSummary", 0, function() {
        let e = (0,
        r.useSimStore)(e => e.flightXpEarned)
          , a = (0,
        r.useSimStore)(e => e.bonusXpEarned)
          , i = (0,
        r.useSimStore)(e => e.xpSyncStatus);
        return (0,
        t.jsxs)("div", {
            className: "fd-session-xp",
            children: [e + a > 0 ? (0,
            t.jsxs)("p", {
                children: [(0,
                t.jsx)("span", {
                    children: "This visit"
                }), (0,
                t.jsxs)("strong", {
                    children: ["+", e + a, " XP"]
                }), (0,
                t.jsxs)("small", {
                    children: [e, " flight · ", a, " bonus"]
                })]
            }) : null, "error" === i ? (0,
            t.jsx)("p", {
                role: "status",
                children: "Progress waiting to save. Retrying…"
            }) : null, (0,
            t.jsx)(l, {})]
        })
    }
    ])
}
, 856298, 350737, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , i = e.i(233783)
      , s = e.i(246176)
      , r = e.i(882902)
      , n = e.i(105524);
    e.i(573798);
    var l = e.i(509381)
      , c = e.i(884316)
      , o = e.i(106258)
      , d = e.i(118274)
      , u = e.i(410484)
      , h = e.i(386130);
    let m = "KeyM";
    function p(e, t=!!r.useMatchLaunch.getState().active, a=!!c.usePracticeLaunch.getState().active) {
        return "flying" === e.phase && (0,
        h.activityEntrancesEligible)(e, t, a) && !e.adminDraftMapId
    }
    function f() {
        if (!p(o.useSimStore.getState()))
            return !1;
        let e = d.useModePanel.getState();
        if (e.request)
            return e.close(),
            !0;
        let t = (0,
        n.queueMode)(n.useMatchmaking.getState());
        return e.open({
            mode: t ?? ("tdm" === (0,
            d.readLastPlayMode)() ? "tdm" : "race"),
            origin: "launcher"
        }),
        "u" > typeof document && document.pointerLockElement && document.exitPointerLock(),
        !0
    }
    e.s(["LAUNCHER_KEY", 0, m, "PlayLauncher", 0, function({visible: e, soloLoad: i}) {
        let s = (0,
        r.useMatchLaunch)(e => !!e.active)
          , n = (0,
        c.usePracticeLaunch)(e => !!e.active)
          , l = (0,
        o.useSimStore)(e => p(e, s, n)) && e
          , d = !Object.values((0,
        o.useSimStore)(e => e.settings.bindings.keyboard)).includes(m);
        return (0,
        a.useEffect)( () => {
            if (!l || !d)
                return;
            let e = e => {
                if (e.code !== m || e.repeat || e.ctrlKey || e.metaKey || e.altKey)
                    return;
                let t = e.target;
                !t?.closest("input, textarea, select, [contenteditable=true]") && f() && e.preventDefault()
            }
            ;
            return window.addEventListener("keydown", e),
            () => window.removeEventListener("keydown", e)
        }
        , [l, d]),
        (0,
        t.jsx)(u.ModePanelHost, {
            inFlight: !0,
            soloLoad: i
        })
    }
    , "launcherAvailable", 0, p, "toggleLauncher", 0, f], 350737);
    var x = e.i(734524)
      , g = e.i(762815)
      , v = e.i(514152);
    function S({view: e, notice: i=null, launcher: s, keyHint: r, member: n, placement: c="edge", onOpen: o, onStartNow: d, onCancel: u, onBackOut: h}) {
        let m = s && r ? (0,
        t.jsx)("kbd", {
            "aria-hidden": !0,
            children: "M"
        }) : null
          , p = "edge" === c && e ? "top" : c
          , f = function(e) {
            let[t,i] = (0,
            a.useState)(null);
            return (0,
            a.useLayoutEffect)( () => {
                let a = t?.closest(".sim-shell");
                if (!e || !t || !a)
                    return;
                let i = () => {
                    let e = t.getBoundingClientRect();
                    a.style.setProperty("--queue-chip-bottom", `${Math.ceil(e.bottom - a.getBoundingClientRect().top)}px`),
                    a.style.setProperty("--queue-chip-height", `${Math.ceil(e.height)}px`)
                }
                ;
                i();
                let s = new ResizeObserver(i);
                return s.observe(t),
                () => {
                    s.disconnect(),
                    a.style.removeProperty("--queue-chip-bottom"),
                    a.style.removeProperty("--queue-chip-height")
                }
            }
            , [e, t]),
            i
        }("edge" === c && (!!e || s || !!i));
        if (!e)
            return s || i ? (0,
            t.jsxs)("div", {
                ref: f,
                className: "fd-queue-chip fdk-screen",
                "data-state": "idle",
                "data-placement": c,
                children: [s && (0,
                t.jsxs)("button", {
                    type: "button",
                    className: "fd-queue-chip__tab fd-queue-chip__play sim-focus",
                    onClick: o,
                    "aria-keyshortcuts": r ? "M" : void 0,
                    children: [(0,
                    t.jsx)(x.ModeIcon, {
                        mode: "race",
                        size: 20
                    }), (0,
                    t.jsx)("strong", {
                        children: "Play"
                    }), m]
                }), i && (0,
                t.jsxs)("div", {
                    className: "fd-queue-chip__line",
                    role: "alert",
                    "data-match-error": !0,
                    children: [(0,
                    t.jsx)("span", {
                        children: i.line
                    }), i.retry && (0,
                    t.jsx)(l.TextLink, {
                        onClick: i.retry,
                        children: "Try again"
                    })]
                })]
            }) : null;
        let g = "found" === e.state ? (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsxs)("span", {
                children: [(0,
                t.jsx)("strong", {
                    children: "Match found"
                }), (0,
                t.jsx)("i", {
                    "aria-hidden": !0,
                    children: "·"
                })]
            }), (0,
            t.jsx)("span", {
                children: (0,
                t.jsx)("strong", {
                    children: e.mode
                })
            })]
        }) : (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsxs)("span", {
                children: [(0,
                t.jsx)("strong", {
                    children: e.mode
                }), (0,
                t.jsx)("i", {
                    "aria-hidden": !0,
                    children: "·"
                })]
            }), (0,
            t.jsxs)("span", {
                children: [(0,
                t.jsx)("strong", {
                    children: "Searching"
                }), (0,
                t.jsx)("time", {
                    children: e.time
                })]
            })]
        })
          , v = "found" === e.state ? `Match found, ${e.mode}. ${e.line}` : `${e.mode}, searching ${e.time}`;
        return (0,
        t.jsxs)("div", {
            ref: f,
            className: "fd-queue-chip fdk-screen",
            "data-state": e.state,
            "data-placement": p,
            role: "status",
            "aria-label": v,
            children: [s ? (0,
            t.jsx)("button", {
                type: "button",
                className: "fd-queue-chip__tab sim-focus",
                onClick: o,
                "aria-keyshortcuts": r ? "M" : void 0,
                title: "Open Play",
                children: g
            }) : (0,
            t.jsx)("div", {
                className: "fd-queue-chip__tab",
                children: g
            }), (0,
            t.jsxs)("div", {
                className: "fd-queue-chip__line",
                children: ["found" === e.state ? (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)("span", {
                        "aria-live": "polite",
                        children: e.line
                    }), (0,
                    t.jsx)("button", {
                        type: "button",
                        className: "fd-queue-chip__line-button sim-focus",
                        onClick: h,
                        children: "Back out"
                    })]
                }) : e.lead ? (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)("span", {
                        children: e.chipFill
                    }), (0,
                    t.jsx)("button", {
                        type: "button",
                        className: "fd-queue-chip__start sim-focus",
                        onClick: d,
                        children: "Start now"
                    }), (0,
                    t.jsx)("button", {
                        type: "button",
                        className: "fd-queue-chip__line-button sim-focus",
                        onClick: u,
                        children: "Cancel"
                    })]
                }) : (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)("span", {
                        "aria-live": "polite",
                        children: n?.sittingOut ? "You're sitting out" : `${e.leader} leads \xb7 ${e.chipFill}`
                    }), n && (0,
                    t.jsxs)("label", {
                        className: "fd-queue-chip__sit-out",
                        children: [(0,
                        t.jsx)("input", {
                            type: "checkbox",
                            role: "switch",
                            checked: n.sittingOut,
                            onChange: e => n.onSitOut(e.target.checked)
                        }), (0,
                        t.jsx)("span", {
                            "aria-hidden": !0
                        }), "Sit out"]
                    })]
                }), m]
            })]
        })
    }
    e.i(671112),
    e.s(["QueueChipHost", 0, function({hidden: e, launcher: a=!1}) {
        let l = (0,
        v.useQueueView)()
          , d = (0,
        v.useMatchNotice)()
          , u = (0,
        n.useMatchmaking)(e => e.online)
          , h = (0,
        r.useMatchLaunch)(e => !!e.active)
          , x = (0,
        r.useMatchLaunch)(e => e.active?.match ?? null)
          , b = (0,
        n.useMatchmaking)(e => e.launch)
          , j = (0,
        i.useAfterMatch)()
          , y = (0,
        c.usePracticeLaunch)(e => !!e.active)
          , k = (0,
        o.useSimStore)(e => p(e, h, y)) && a
          , w = (0,
        o.useSimStore)(e => !Object.values(e.settings.bindings.keyboard).includes(m))
          , M = (0,
        s.useLobbySocial)(e => e.squad)
          , _ = (0,
        g.useSitOut)();
        if (e || (0,
        i.nextRoundLaunch)(j, x, b))
            return null;
        let N = M ? {
            sittingOut: (0,
            g.sittingOutOf)(_, M),
            onSitOut: e => {
                _.set(M.id, e),
                (0,
                n.pollMatchmaking)()
            }
        } : void 0
          , A = n.useMatchmaking.getState;
        return (0,
        t.jsx)(S, {
            view: l,
            notice: d && {
                line: d.line,
                ...d.retry && u ? {
                    retry: () => {
                        (0,
                        n.retryMatch)()
                    }
                } : {}
            },
            launcher: k,
            keyHint: w,
            member: N,
            placement: h || y ? "match" : "edge",
            onOpen: () => {
                f()
            }
            ,
            onStartNow: () => A().startNow(),
            onCancel: () => A().cancel(),
            onBackOut: () => A().backOut()
        })
    }
    ], 856298)
}
, 914589, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , i = e.i(987808)
      , s = e.i(28276)
      , r = e.i(247638)
      , n = e.i(106258);
    function l() {
        return r.live.hoverLocked ? "Throttle up to launch" : "Cross the start gate"
    }
    e.i(671112),
    e.s(["TimeAttackTimer", 0, function() {
        let e = (0,
        n.useSimStore)(e => e.activeTimeAttackId)
          , r = (0,
        n.useSimStore)(e => e.timeAttackRunning)
          , c = (0,
        n.useSimStore)(e => e.raceRun)
          , o = (0,
        a.useRef)(null)
          , d = (0,
        a.useRef)(null)
          , u = e ? (0,
        s.getTimeAttackDoc)(e) : null
          , h = c?.priorPbMs;
        return ((0,
        a.useEffect)( () => {
            let e = 0
              , t = () => {
                if (e = requestAnimationFrame(t),
                o.current && (o.current.textContent = (0,
                i.formatTimeAttack)(i.timeAttackClock.elapsedMs)),
                d.current) {
                    let e = l();
                    d.current.textContent !== e && (d.current.textContent = e)
                }
            }
            ;
            return e = requestAnimationFrame(t),
            () => cancelAnimationFrame(e)
        }
        , [e]),
        u) ? r ? (0,
        t.jsxs)("div", {
            className: "sim-flight-ui fd-race-clock fdk-screen",
            children: [(0,
            t.jsx)("p", {
                className: "fd-race-course",
                children: (0,
                t.jsx)("span", {
                    children: u.name
                })
            }), (0,
            t.jsx)("span", {
                ref: o,
                className: "fd-race-time",
                children: (0,
                i.formatTimeAttack)(i.timeAttackClock.elapsedMs)
            }), null != h ? (0,
            t.jsxs)("p", {
                className: "fd-race-best",
                children: ["Personal best ", (0,
                t.jsx)("b", {
                    children: (0,
                    i.formatTimeAttack)(h)
                })]
            }) : null]
        }) : (0,
        t.jsxs)("div", {
            className: "sim-flight-ui fd-race-clock fdk-screen",
            children: [(0,
            t.jsx)("p", {
                className: "fd-race-course",
                children: (0,
                t.jsx)("span", {
                    children: u.name
                })
            }), (0,
            t.jsx)("p", {
                ref: d,
                className: "fd-race-best",
                children: l()
            })]
        }) : null
    }
    ])
}
]);
