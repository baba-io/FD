(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 298421, 240155, e => {
    "use strict";
    var t = e.i(843476)
      , n = e.i(271645)
      , a = e.i(882902)
      , l = e.i(105524)
      , r = e.i(246176)
      , s = e.i(106258)
      , i = e.i(233783)
      , o = e.i(418355)
      , c = e.i(762815)
      , d = e.i(579832)
      , u = e.i(720996)
      , m = e.i(870895);
    function h(e) {
        let t = e.after - e.before;
        if (t <= 0)
            return [];
        let n = []
          , a = e.before
          , l = (0,
        m.levelProgress)(a).level;
        for (; ; ) {
            let r = (0,
            m.xpRequiredForLevel)(l + 1)
              , s = Math.min(e.after, r);
            if (n.push({
                from: a,
                to: s,
                ms: 1100 * (s - a) / t,
                levelUp: s === r
            }),
            s >= e.after)
                break;
            a = s,
            l++
        }
        return n
    }
    let f = e => Math.min(1, Math.max(0, e))
      , p = e => e * e;
    function x(e, t, n) {
        let a = {
            stamp: {
                scale: 0,
                landed: !1
            },
            shake: 0,
            offset: [0, 0],
            lines: e.lines.map( () => 0),
            revealed: e.lines.map( () => !1),
            xp: e.xp ? e.xp.before : null,
            level: e.xp ? (0,
            m.levelProgress)(e.xp.before).level : null,
            punch: null,
            rpm: 230,
            lift: 0,
            done: t.every(e => n >= e.end)
        };
        for (let l of t) {
            let t = f((n - l.start) / (l.end - l.start));
            if ("stamp" === l.kind) {
                a.stamp = {
                    scale: t <= 0 ? 0 : t < .45 ? 1.9 - t / .45 * 1.02 : t < .75 ? .88 + (t - .45) / .3 * (1.06 - .88) : 1.06 - .06 * Math.min(1, (t - .75) / .25),
                    landed: t >= .45
                };
                let e = n - (l.start + .45 * (l.end - l.start));
                a.shake = e >= 0 && e < 220 ? 1 - e / 220 : 0
            } else if ("line" === l.kind) {
                let r = e.lines[l.line].amount;
                a.lines[l.line] = Math.round(r * p(t)),
                a.revealed[l.line] = n >= l.start
            } else if (e.xp && n >= l.start) {
                let t = l.start
                  , r = e.xp.before;
                for (let l of h(e.xp)) {
                    if (n < t + l.ms) {
                        r = l.from + (l.to - l.from) * f((n - t) / l.ms);
                        break
                    }
                    if (r = l.to,
                    t += l.ms,
                    l.levelUp) {
                        if (n < t + 900 && (a.punch = n - t),
                        n < t + 650) {
                            r = l.to - 1e-6;
                            break
                        }
                        t += 650
                    }
                }
                a.xp = Math.min(r, e.xp.after),
                a.level = (0,
                m.levelProgress)(Math.floor(a.xp)).level,
                null !== a.punch && a.punch < 650 && (a.level = (0,
                m.levelProgress)(Math.floor(a.xp) + 1).level);
                let s = n < l.end ? (0,
                m.levelProgress)(a.xp).fraction : 0;
                a.rpm = 230 + 100 * s
            }
        }
        return a.shake > 0 && (a.offset = [7 * Math.sin(n / 11) * a.shake, 4 * Math.cos(n / 13) * a.shake]),
        null !== a.punch && (a.rpm += (440 - a.rpm) * Math.max(0, 1 - a.punch / 500),
        a.lift = function(e) {
            if (e < 0 || e >= 900)
                return 0;
            if (e < 140)
                return e / 140 * .3;
            let t = (e - 140) / 760;
            return .3 * (1 - t) * (1 - t)
        }(a.punch)),
        a
    }
    function g(e) {
        let t = (0,
        u.useReducedMotion)()
          , a = (0,
        n.useMemo)( () => (function(e) {
            let t = []
              , n = 250;
            if (e.stamp && (t.push({
                kind: "stamp",
                start: n,
                end: n + 380
            }),
            n += 490),
            e.lines.forEach( (e, a) => {
                let l = Math.min(700, 400 + 2.5 * Math.max(0, e.amount));
                t.push({
                    kind: "line",
                    line: a,
                    start: n,
                    end: n + l
                }),
                n += l + 110
            }
            ),
            e.xp) {
                let a = h(e.xp).reduce( (e, t) => e + t.ms + 650 * !!t.levelUp, 0);
                a > 0 && t.push({
                    kind: "xp",
                    start: n,
                    end: n + a
                })
            }
            return t
        }
        )(e), [e])
          , l = (0,
        n.useMemo)( () => x(e, a, 1 / 0), [e, a])
          , [r,s] = (0,
        n.useState)(null)
          , i = (0,
        n.useRef)({
            started: null,
            skip: 0,
            last: null,
            filling: !1
        })
          , [c,m] = (0,
        n.useState)(!1)
          , f = !e.pending || c;
        return (0,
        n.useEffect)( () => {
            if (f)
                return;
            let e = window.setTimeout( () => m(!0), o.REWARDS_WAIT_MS);
            return () => window.clearTimeout(e)
        }
        , [f]),
        (0,
        n.useEffect)( () => {
            if (t || !f)
                return;
            let n = i.current;
            n.started ??= performance.now();
            let l = 0
              , r = a.find(e => "xp" === e.kind)
              , o = e => {
                document.hidden || (0,
                d.getDroneAudio)()?.play(e)
            }
              , c = () => {
                let t = performance.now() - n.started + n.skip
                  , i = x(e, a, t)
                  , d = n.last;
                i.stamp.landed && !d?.stamp.landed && o("xp.stamp"),
                r && !n.filling && t >= r.start && !i.done && (n.filling = !0,
                o("xp.fill")),
                null !== i.punch && (d?.punch ?? null) === null && o("xp.levelup"),
                i.done && d && !d.done && a.length > 0 && o("xp.land"),
                n.last = i,
                s({
                    rewards: e,
                    frame: i
                }),
                (!i.done || null !== i.punch || i.shake > 0) && (l = requestAnimationFrame(c))
            }
              , u = e => {
                let t;
                if (e instanceof KeyboardEvent && e.repeat)
                    return;
                let r = performance.now() - n.started + n.skip;
                n.skip += ((t = a.find(e => r < e.end)) && r >= t.start - 110 ? Math.max(r, t.end) : r) - r,
                cancelAnimationFrame(l),
                l = requestAnimationFrame(c)
            }
            ;
            return window.addEventListener("keydown", u),
            window.addEventListener("pointerdown", u),
            l = requestAnimationFrame(c),
            () => {
                cancelAnimationFrame(l),
                window.removeEventListener("keydown", u),
                window.removeEventListener("pointerdown", u)
            }
        }
        , [e, a, t, f]),
        {
            frame: t ? l : r ? r.frame : x(e, a, 0)
        }
    }
    function v({icon: e}) {
        let n = {
            width: 26,
            height: 26,
            viewBox: "0 0 24 24",
            "aria-hidden": !0
        };
        switch (e) {
        case "finish":
            return (0,
            t.jsxs)("svg", {
                ...n,
                fill: "currentColor",
                children: [(0,
                t.jsx)("path", {
                    d: "M4 2.5h2v19H4z"
                }), (0,
                t.jsx)("path", {
                    d: "M6 3.5h3.5v3.7H6zM13 3.5h3.5v3.7H13zM9.5 7.2H13v3.6H9.5zM16.5 7.2H20v3.6h-3.5zM6 10.8h3.5v3.7H6zM13 10.8h3.5v3.7H13z"
                })]
            });
        case "best":
            return (0,
            t.jsx)("svg", {
                ...n,
                fill: "currentColor",
                children: (0,
                t.jsx)("path", {
                    d: "M12 2.5l2.9 6.2 6.6.7-5 4.5 1.4 6.6L12 17.2l-5.9 3.3 1.4-6.6-5-4.5 6.6-.7z"
                })
            });
        case "placement":
            return (0,
            t.jsx)("svg", {
                ...n,
                fill: "currentColor",
                children: (0,
                t.jsx)("path", {
                    d: "M6 3h12v5a6 6 0 0 1-12 0zM3 4h3v3H5a2 2 0 0 1-2-2zM21 4h-3v3h1a2 2 0 0 0 2-2zM10.5 13.5h3V17h3v3.5h-9V17h3z"
                })
            });
        case "parts":
            return (0,
            t.jsxs)("svg", {
                ...n,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2.2,
                strokeLinejoin: "round",
                children: [(0,
                t.jsx)("path", {
                    d: "M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4z"
                }), (0,
                t.jsx)("path", {
                    d: "M4 7.4l8 4.6 8-4.6M12 12v9.2"
                })]
            });
        case "ko":
            return (0,
            t.jsxs)("svg", {
                ...n,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2.2,
                children: [(0,
                t.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "7.5"
                }), (0,
                t.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "2.2",
                    fill: "currentColor"
                }), (0,
                t.jsx)("path", {
                    d: "M12 1.8v5M12 17.2v5M1.8 12h5M17.2 12h5"
                })]
            });
        case "assist":
            return (0,
            t.jsx)("svg", {
                ...n,
                fill: "currentColor",
                children: (0,
                t.jsx)("path", {
                    d: "M2 9.5 6.5 5l4 2.5h3l4-2.5L22 9.5l-3 3.2-4.6-3.4-3.2 2.9a1.6 1.6 0 0 1-2.3-2.2l1.3-1.3H9L6 12.6zM5.4 14.2l1.4-1.5 2.5 2.4 2.9 2.7a1.4 1.4 0 0 1-2 2zm5 0 1.6-1.4 4.4 4.1a1.4 1.4 0 0 1-2 2zm3.3-2.8 1.6-1.4 3.4 3.2a1.4 1.4 0 0 1-2 2z"
                })
            });
        case "credits":
            return (0,
            t.jsxs)("svg", {
                ...n,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2.2,
                children: [(0,
                t.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "8.5"
                }), (0,
                t.jsx)("path", {
                    d: "M14.6 8.8c-.6-.9-1.6-1.3-2.7-1.3-1.6 0-2.8.9-2.8 2.2 0 3 5.9 1.6 5.9 4.6 0 1.4-1.3 2.3-3 2.3-1.2 0-2.3-.5-2.9-1.4M12 5.8v1.7M12 16.6v1.6"
                })]
            });
        default:
            return (0,
            t.jsx)("svg", {
                ...n,
                fill: "currentColor",
                children: (0,
                t.jsx)("path", {
                    d: "M13 2L4.5 13.5h6L9.5 22 19 9.5h-6z"
                })
            })
        }
    }
    function b({frame: e, punchPop: n}) {
        if (null === e.xp || null === e.level)
            return null;
        let a = (0,
        m.levelProgress)(e.xp)
          , l = e.level
          , r = l > a.level
          , s = r ? a.xpForNext : Math.floor(a.xpIntoLevel)
          , i = r ? 100 : Math.min(100, 100 * a.fraction);
        return (0,
        t.jsxs)("div", {
            className: "fd-after__level",
            children: [(0,
            t.jsxs)("div", {
                className: "fd-after__badge",
                "data-pop": n || void 0,
                children: [(0,
                t.jsx)("small", {
                    children: "LVL"
                }), (0,
                t.jsx)("b", {
                    children: l
                })]
            }), (0,
            t.jsxs)("div", {
                className: "fd-after__progress",
                children: [(0,
                t.jsxs)("span", {
                    className: "fd-after__xp",
                    children: [s.toLocaleString("en-US"), " / ", a.xpForNext.toLocaleString("en-US"), " XP"]
                }), (0,
                t.jsx)("div", {
                    className: "fd-after__bar",
                    role: "progressbar",
                    "aria-label": "Pilot level XP",
                    "aria-valuemin": 0,
                    "aria-valuemax": a.xpForNext,
                    "aria-valuenow": s,
                    children: (0,
                    t.jsx)("i", {
                        style: {
                            width: `${i}%`
                        }
                    })
                })]
            })]
        })
    }
    function y({mode: e, rewards: n, frame: a, compact: l}) {
        let r = o.AFTER_MATCH_COPY[e]
          , s = a.shake > 0 ? {
            translate: `${a.offset[0].toFixed(2)}px ${a.offset[1].toFixed(2)}px`
        } : void 0
          , i = n.lines.reduce( (e, t, n) => e + ("xp" === t.unit ? a.lines[n] ?? 0 : 0), 0)
          , c = n.lines.map(e => `${e.label} ${(0,
        o.formatReward)(e, e.amount)}`).join(", ");
        return (0,
        t.jsxs)("section", {
            className: "fd-after",
            "data-compact": l || void 0,
            "aria-label": r.title,
            children: [(0,
            t.jsxs)("h2", {
                className: "fd-after__title",
                children: [(0,
                t.jsx)("span", {
                    children: r.title
                }), (0,
                t.jsx)("i", {
                    "aria-hidden": !0
                })]
            }), (0,
            t.jsxs)("div", {
                className: "fd-after__panel",
                style: s,
                children: [n.stamp && (0,
                t.jsx)("div", {
                    className: "fd-after__stamp",
                    style: {
                        transform: `scale(${a.stamp.scale})`,
                        opacity: +(a.stamp.scale > 0)
                    },
                    children: (0,
                    t.jsx)("span", {
                        children: n.stamp.text
                    })
                }), l ? i > 0 ? (0,
                t.jsx)("p", {
                    className: "fd-after__total",
                    children: (0,
                    o.formatReward)({
                        unit: "xp"
                    }, i)
                }) : null : n.lines.length > 0 && (0,
                t.jsx)("ul", {
                    className: "fd-after__lines",
                    children: n.lines.map( (e, n) => (0,
                    t.jsxs)("li", {
                        "data-shown": a.revealed[n] || void 0,
                        "data-counting": a.lines[n] > 0 && a.lines[n] < e.amount || void 0,
                        children: [(0,
                        t.jsx)("span", {
                            className: "fd-after__icon",
                            children: (0,
                            t.jsx)(v, {
                                icon: e.icon
                            })
                        }), (0,
                        t.jsx)("span", {
                            className: "fd-after__label",
                            children: e.label
                        }), (0,
                        t.jsx)("b", {
                            className: "fd-after__amount",
                            children: (0,
                            o.formatReward)(e, a.lines[n] ?? 0)
                        })]
                    }, e.id))
                }), (0,
                t.jsx)(b, {
                    frame: a,
                    punchPop: null !== a.punch && a.punch < 260
                }), (0,
                t.jsx)("span", {
                    className: "sr-only",
                    role: "status",
                    children: [n.stamp?.text, c].filter(Boolean).join(". ")
                })]
            })]
        })
    }
    var j = e.i(572219);
    e.i(573798);
    var _ = e.i(568204)
      , w = e.i(498475)
      , S = e.i(244144)
      , M = e.i(734524)
      , k = e.i(28276)
      , C = e.i(353198)
      , N = e.i(404961)
      , A = e.i(998494);
    let L = {
        [A.DRIFT_PARK_MAP_ID]: "drift-park",
        [A.WHOOP_WORLD_MAP_ID]: "whoop-world"
    };
    function E({label: e, mode: n, children: a}) {
        return (0,
        t.jsx)("section", {
            className: "fd-end fdk-on-ink",
            "aria-label": e,
            "data-mode": n,
            children: (0,
            t.jsx)("div", {
                className: "fd-end__panel",
                children: a
            })
        })
    }
    let T = {
        xp: "XP",
        credits: "Credits",
        parts: "Parts"
    };
    function z({frame: e}) {
        if (null === e.xp || null === e.level)
            return null;
        let n = (0,
        m.levelProgress)(e.xp)
          , a = e.level > n.level
          , l = a ? n.xpForNext : Math.floor(n.xpIntoLevel)
          , r = a ? 100 : Math.min(100, 100 * n.fraction);
        return (0,
        t.jsxs)("div", {
            className: "fd-end__level",
            children: [(0,
            t.jsxs)("b", {
                className: "fd-end__badge",
                "data-pop": null !== e.punch && e.punch < 260 || void 0,
                children: [(0,
                t.jsx)("small", {
                    children: "LVL"
                }), e.level]
            }), (0,
            t.jsx)("span", {
                className: "fd-end__bar",
                role: "progressbar",
                "aria-label": "Pilot level XP",
                "aria-valuemin": 0,
                "aria-valuemax": n.xpForNext,
                "aria-valuenow": l,
                children: (0,
                t.jsx)("i", {
                    style: {
                        width: `${r}%`
                    }
                })
            }), (0,
            t.jsxs)("span", {
                className: "fd-end__xp",
                children: [l.toLocaleString("en-US"), " / ", n.xpForNext.toLocaleString("en-US"), " XP"]
            })]
        })
    }
    function P({rewards: e, frame: n, collapsed: a, stamp: l=!0}) {
        let r = e.lines.map(e => `${e.label} ${(0,
        o.formatReward)(e, e.amount)}`).join(", ")
          , s = n.shake > 0 ? {
            translate: `${n.offset[0].toFixed(2)}px ${n.offset[1].toFixed(2)}px`
        } : void 0;
        if (a) {
            let n = function(e) {
                let t = new Map;
                for (let n of e.lines)
                    t.set(n.unit, (t.get(n.unit) ?? 0) + n.amount);
                return ["xp", "credits", "parts"].flatMap(e => t.has(e) ? [{
                    unit: e,
                    amount: t.get(e)
                }] : [])
            }(e);
            return n.length ? (0,
            t.jsx)("p", {
                className: "fd-end__totals",
                children: n.map(e => (0,
                t.jsxs)("b", {
                    children: ["+", e.amount.toLocaleString("en-US"), " ", T[e.unit]]
                }, e.unit))
            }) : null
        }
        return (0,
        t.jsxs)("div", {
            className: "fd-end__rewards",
            style: s,
            children: [l && e.stamp && (0,
            t.jsx)(_.Stamp, {
                className: "fd-end__stamp",
                style: {
                    transform: `scale(${n.stamp.scale})`,
                    opacity: +(n.stamp.scale > 0)
                },
                children: e.stamp.text
            }), e.lines.length > 0 && (0,
            t.jsx)("ul", {
                className: "fd-end__lines",
                children: e.lines.map( (e, a) => (0,
                t.jsx)("li", {
                    "data-shown": n.revealed[a] || void 0,
                    "data-counting": n.lines[a] > 0 && n.lines[a] < e.amount || void 0,
                    children: (0,
                    t.jsx)(_.BigNumber, {
                        row: !0,
                        label: e.label,
                        value: (0,
                        o.formatReward)(e, n.lines[a] ?? 0),
                        tone: n.lines[a] > 0 && n.lines[a] < e.amount ? "plain" : "acid"
                    })
                }, e.id))
            }), (0,
            t.jsx)(z, {
                frame: n
            }), (0,
            t.jsx)("span", {
                className: "sr-only",
                role: "status",
                children: [l ? e.stamp?.text : null, r].filter(Boolean).join(". ")
            })]
        })
    }
    function R(e) {
        return (0,
        j.isTypingTarget)(e) || !!e?.closest(".fd-chat")
    }
    function F(e, t=null) {
        let a = (0,
        n.useRef)(!0);
        (0,
        n.useEffect)( () => {
            let t = a.current;
            a.current = !1;
            let n = () => e()?.focus({
                preventScroll: !0
            })
              , l = document.activeElement;
            if (!R(l)) {
                (t || null === l || l === document.body) && n();
                return
            }
            let r = !0
              , s = 0
              , i = () => {
                window.clearTimeout(s),
                s = window.setTimeout( () => {
                    if (!r)
                        return;
                    let e = document.activeElement;
                    if (null === e || e === document.body)
                        n();
                    else if (R(e))
                        return;
                    o()
                }
                , 0)
            }
              , o = () => {
                r = !1,
                window.clearTimeout(s),
                document.removeEventListener("focusout", i)
            }
            ;
            return document.addEventListener("focusout", i),
            o
        }
        , [t])
    }
    function I(e) {
        let t = (0,
        n.useRef)(e);
        (0,
        n.useEffect)( () => {
            t.current = e
        }
        , [e]),
        (0,
        n.useEffect)( () => {
            let e = e => {
                e.target instanceof HTMLElement && e.target.closest(".fd-end") && (" " === e.key || "Enter" === e.key && (e.repeat || t.current)) && e.preventDefault()
            }
            ;
            return window.addEventListener("keydown", e, !0),
            window.addEventListener("keyup", e, !0),
            () => {
                window.removeEventListener("keydown", e, !0),
                window.removeEventListener("keyup", e, !0)
            }
        }
        , [])
    }
    let $ = {
        leader: {
            title: "Your squad leader picks the next match",
            note: "Leader picks"
        },
        launching: {
            title: "The next round is starting",
            note: "Starting"
        }
    };
    function D({again: e, onAgain: a, onNewMatch: l, onFlyFree: r, onTimeAttack: s, newMatchLocked: i, holdKeys: o}) {
        let c = (0,
        n.useRef)(null);
        F( () => c.current),
        I(o);
        let d = i ? $[i] : null;
        return (0,
        t.jsxs)("div", {
            className: "fd-end__actions",
            "data-count": l ? 3 : 2,
            children: [(0,
            t.jsx)(w.Button, {
                ref: c,
                tone: "primary",
                icon: (0,
                t.jsx)(S.Icon, {
                    name: "race-again"
                }),
                onClick: a,
                children: e
            }), l && (0,
            t.jsxs)(w.Button, {
                icon: (0,
                t.jsx)(S.Icon, {
                    name: "new-match"
                }),
                onClick: l,
                disabled: !!d,
                title: d?.title,
                children: [(0,
                t.jsx)("span", {
                    children: "New match"
                }), d && (0,
                t.jsx)("small", {
                    children: d.note
                })]
            }), (0,
            t.jsx)(w.Button, {
                icon: (0,
                t.jsx)(S.Icon, {
                    name: "fly-free"
                }),
                onClick: r,
                children: "Fly free"
            }), s && (0,
            t.jsx)(w.Button, {
                className: "fd-end__time-attack",
                icon: (0,
                t.jsx)(S.Icon, {
                    name: "time-attack"
                }),
                onClick: s,
                children: "Time attack on this circuit"
            })]
        })
    }
    function O({mode: e, vote: a, drawn: l, starting: r, onVote: s, onNewMatch: i, onFlyFree: c, newMatchLocked: d}) {
        let u, m = function(e) {
            let[t,a] = (0,
            n.useState)( () => Date.now());
            return (0,
            n.useEffect)( () => {
                if (!e)
                    return;
                let t = window.setInterval( () => a(Date.now()), 250);
                return () => window.clearInterval(t)
            }
            , [e]),
            t
        }(!!a && null === l), h = (0,
        n.useRef)(null);
        F( () => {
            let e = e => h.current?.querySelector(e);
            return e("button.fd-end__option[data-mine]:not(:disabled)") ?? e("button.fd-end__option:not(:disabled)") ?? (null !== l ? e(".fd-end__leave button:not(:disabled)") : null)
        }
        , `${!!a}:${l}`),
        I(!1);
        let f = d ?? (null !== l ? "launching" : null)
          , p = o.AFTER_MATCH_COPY[e]
          , x = null !== l ? null !== r ? `Starting in ${Math.max(1, Math.ceil(r / 1e3))}` : "Up next" : a ? null === a.vote ? "No pick yet: a random one counts for you" : "One ballot is drawn at random" : "Gathering the options";
        return (0,
        t.jsxs)("div", {
            ref: h,
            className: "fd-end__vote",
            "data-drawn": null !== l || void 0,
            children: [(0,
            t.jsxs)("h2", {
                className: "fd-end__next",
                children: [(0,
                t.jsx)("span", {
                    children: p.next
                }), a && (0,
                t.jsx)("time", {
                    role: "timer",
                    "aria-live": "off",
                    children: (u = Math.max(0, Math.ceil((a.endsAt - (null === l ? m : a.endsAt)) / 1e3)),
                    `${Math.floor(u / 60)}:${String(u % 60).padStart(2, "0")}`)
                })]
            }), (0,
            t.jsx)("p", {
                className: "fd-end__rule",
                role: "status",
                children: x
            }), (0,
            t.jsxs)("div", {
                className: "fd-end__options",
                children: [(0,
                t.jsx)("ol", {
                    children: (a?.options ?? [null, null, null]).map( (n, r) => {
                        let i, o, c;
                        if (!n)
                            return (0,
                            t.jsx)("li", {
                                children: (0,
                                t.jsx)("span", {
                                    className: "fd-end__option",
                                    "data-waiting": !0,
                                    "aria-hidden": !0
                                })
                            }, r);
                        let d = (i = function(e) {
                            for (let t of [e, L[e]])
                                if (t)
                                    try {
                                        let e = (0,
                                        N.resolveMap)(t);
                                        if (e.id === t)
                                            return e.name
                                    } catch {}
                            return null
                        }(n.map),
                        o = n.course ? (0,
                        k.listTimeAttacks)().find(e => e.id === n.course)?.name ?? null : null,
                        c = n.drone && (0,
                        C.isNormalDrone)(n.drone) ? C.DRONES[n.drone].name : null,
                        n.course ? {
                            title: o ?? "Race",
                            map: i,
                            drone: c
                        } : {
                            title: i ?? "Arena",
                            map: null,
                            drone: c
                        })
                          , u = a.vote === r
                          , m = a.votes[r] ?? 0;
                        return (0,
                        t.jsx)("li", {
                            children: (0,
                            t.jsxs)("button", {
                                type: "button",
                                className: "fd-end__option sim-focus",
                                "aria-pressed": u,
                                "data-mine": u || void 0,
                                "data-drawn": l === r || void 0,
                                "data-out": null !== l && l !== r || void 0,
                                disabled: null !== l,
                                onClick: () => s(r),
                                children: [(0,
                                t.jsxs)("span", {
                                    className: "fd-end__art",
                                    "aria-hidden": !0,
                                    children: [(0,
                                    t.jsx)(M.ModeIcon, {
                                        mode: "race" === e ? "race" : "tdm",
                                        size: 34
                                    }), m > 0 && (0,
                                    t.jsx)("b", {
                                        className: "fd-end__ballots",
                                        children: m
                                    })]
                                }), (0,
                                t.jsx)("span", {
                                    className: "fd-end__name",
                                    children: d.title
                                }), (0,
                                t.jsx)("span", {
                                    className: "fd-end__meta",
                                    children: [d.map, d.drone].filter(Boolean).join(" · ")
                                }), l === r ? (0,
                                t.jsx)("span", {
                                    className: "fd-end__tag",
                                    "data-kind": "next",
                                    children: "Up next"
                                }) : u ? (0,
                                t.jsx)("span", {
                                    className: "fd-end__tag",
                                    children: "Your pick"
                                }) : null, (0,
                                t.jsxs)("span", {
                                    className: "sr-only",
                                    children: [", ", m, " ", 1 === m ? "vote" : "votes"]
                                })]
                            })
                        }, `${n.map}:${n.course ?? ""}`)
                    }
                    )
                }), (0,
                t.jsxs)("div", {
                    className: "fd-end__leave",
                    children: [(0,
                    t.jsx)("button", {
                        type: "button",
                        className: "sim-focus",
                        onClick: i,
                        disabled: !!f,
                        title: f ? $[f].title : void 0,
                        children: "New match"
                    }), (0,
                    t.jsx)("button", {
                        type: "button",
                        className: "sim-focus",
                        onClick: c,
                        children: "Fly free"
                    })]
                })]
            })]
        })
    }
    e.s(["EndActions", 0, D, "EndRewards", 0, P, "EndScreen", 0, E, "EndVote", 0, O], 240155),
    e.i(671112);
    var B = e.i(410484)
      , H = e.i(624834);
    let U = (0,
    e.i(768834).create)( () => ({
        notice: null
    }));
    function q(e) {
        U.setState({
            notice: e
        })
    }
    function W(e) {
        let {notice: t} = U.getState();
        !t || e?.tone && t.tone !== e.tone || e?.where && t.where !== e.where || U.setState({
            notice: null
        })
    }
    var K = e.i(245433)
      , Y = e.i(814022);
    function V() {
        W(),
        (0,
        i.pressAfter)("again"),
        l.useMatchmaking.getState().chooseAfter("again")
    }
    function G() {
        let e = i.useAfterMatch.getState().mode;
        e && l.useMatchmaking.getState().requestMatch((0,
        l.playMode)(e)) && (W(),
        (0,
        i.pressAfter)("newMatch"))
    }
    function X() {
        W(),
        (0,
        i.pressAfter)("flyFree");
        let e = l.useMatchmaking.getState();
        e.chooseAfter("flyFree"),
        e.launch && e.backOut();
        let {squad: t} = r.useLobbySocial.getState()
          , n = s.useSimStore.getState().playerAccountId;
        t && n && t.leaderId !== n && c.useSitOut.getState().set(t.id, !0),
        (0,
        a.leaveMatch)()
    }
    async function J() {
        let e = s.useSimStore.getState()
          , t = e.raceRun?.course;
        if (!t)
            return !1;
        let n = {
            accountId: e.playerAccountId,
            timeAttackId: t.id,
            courseRevision: t.competitiveRevision ?? 1,
            droneId: (0,
            Y.flownDrone)(e)
        }
          , a = (0,
        B.soloRefusal)(n);
        if (a)
            return q({
                tone: "error",
                line: "race" === a.reason ? "Time attack is not available on this circuit right now." : a.line,
                where: "end"
            }),
            !1;
        X(),
        q({
            tone: "progress",
            line: "Starting Time attack on this circuit",
            where: "flight"
        });
        let l = () => q({
            tone: "error",
            line: "Time attack did not start. You are flying free instead.",
            where: "flight"
        });
        try {
            if (!await (0,
            B.startSolo)(n, {
                boards: K.fetchRaceBoards,
                ghost: K.fetchRaceGhost
            }, void 0, l))
                return l(),
                !1;
            return W({
                tone: "progress"
            }),
            !0
        } catch {
            return l(),
            !1
        }
    }
    function Q(e, t) {
        let a = (0,
        s.useSimStore)(e => e.xp)
          , l = (0,
        n.useMemo)( () => ({
            stamp: null,
            lines: [],
            xp: {
                before: a,
                after: a
            },
            pending: !0
        }), [e]);
        return t ?? l
    }
    function Z({notice: e}) {
        return (0,
        n.useEffect)( () => {
            if ("error" !== e.tone)
                return;
            let t = window.setTimeout( () => W({
                tone: "error",
                where: "flight"
            }), 8e3);
            return () => window.clearTimeout(t)
        }
        , [e]),
        (0,
        t.jsx)("div", {
            className: "fd-after-host fdk-screen",
            "data-notice": !0,
            children: (0,
            t.jsx)(H.Toast, {
                className: "fd-after-toast",
                tone: e.tone,
                title: e.line
            })
        })
    }
    function ee(e, t) {
        return !!e.match && !!e.mode && !e.cornerDone && ("flyFree" === e.pressed || "newMatch" === e.pressed && t === e.match)
    }
    function et({match: e, mode: a, rewards: l, leaving: r=!1, belowScore: s=!1}) {
        let i, o = Q(e, l), {frame: c} = g(o), d = (i = (0,
        n.useRef)(null),
        (0,
        n.useLayoutEffect)( () => {
            let e = i.current
              , t = e?.querySelector(".fd-after")
              , n = e?.closest(".sim-shell") ?? document
              , a = s ? n.querySelector(".fd-combat-score") : null;
            if (!e || !t || !a)
                return;
            let l = n.querySelector(".fd-queue-chip[data-placement='match']")
              , r = () => {
                let t = Math.max(a.getBoundingClientRect().bottom, l?.isConnected ? l.getBoundingClientRect().bottom : 0);
                e.style.setProperty("--after-top", `${Math.round(t - e.getBoundingClientRect().top)}px`)
            }
            ;
            r(),
            t.dataset.placement = "score";
            let o = new ResizeObserver(r);
            for (let t of [a, e, l])
                t && o.observe(t);
            return () => {
                o.disconnect(),
                delete t.dataset.placement,
                e.style.removeProperty("--after-top")
            }
        }
        , [s]),
        i);
        return (0,
        t.jsx)("div", {
            ref: d,
            className: "fd-after-host fdk-screen",
            "data-compact": !0,
            "data-leaving": r || void 0,
            children: (0,
            t.jsx)(y, {
                mode: a,
                rewards: o,
                frame: c,
                compact: !0
            })
        })
    }
    e.s(["AfterMatchHost", 0, function({hidden: e, belowScore: l=!1}) {
        let r = (0,
        i.useAfterMatch)()
          , s = (0,
        a.useMatchLaunch)(e => e.active)
          , o = r.pressed
          , c = "flyFree" === o || "newMatch" === o
          , [d,u] = (0,
        n.useState)(null);
        (0,
        n.useEffect)( () => {
            if (!r.match || !c)
                return;
            let e = r.pressedAt
              , t = 0
              , n = window.setTimeout( () => {
                u(e),
                t = window.setTimeout(i.endCorner, 160)
            }
            , Math.max(0, e + 5e3 - 160 - Date.now()));
            return () => {
                window.clearTimeout(n),
                window.clearTimeout(t)
            }
        }
        , [r.match, c, r.pressedAt]),
        (0,
        n.useEffect)( () => {
            r.match && c && r.cornerDone && s?.match !== r.match && (0,
            i.clearAfterMatch)()
        }
        , [r.match, c, r.cornerDone, s]);
        let m = U(e => e.notice?.where === "flight" ? e.notice : null);
        if (e)
            return null;
        let h = ee(r, s?.match ?? null) ? (0,
        t.jsx)(et, {
            match: r.match,
            mode: r.mode,
            rewards: r.rewards[r.match],
            leaving: d === r.pressedAt,
            belowScore: l
        }, r.match) : null;
        return h || m ? (0,
        t.jsxs)(t.Fragment, {
            children: [m && (0,
            t.jsx)(Z, {
                notice: m
            }), h]
        }) : null
    }
    , "MatchEnd", 0, function({match: e, mode: a, label: c, table: d, stamp: u=!0}) {
        let m, h, f, p = (0,
        i.useAfterMatch)(t => t.rewards[e]), x = (0,
        i.useAfterMatch)(t => t.match === e ? t.pressed : null), v = (0,
        i.useAfterMatch)(t => t.match === e ? t.shownAt : 0), b = (0,
        i.useAfterMatch)(t => t.match === e ? t.vote : null), y = (0,
        i.useAfterMatch)(t => t.match === e ? t.next : null), j = (m = (0,
        s.useSimStore)(e => e.playerAccountId),
        (0,
        r.useLobbySocial)(e => !!e.squad && !!m && e.squad.leaderId !== m)), _ = (h = (0,
        l.useMatchmaking)(e => e.launch),
        f = (0,
        i.useAfterMatch)(),
        h && (0,
        i.nextRoundLaunch)(f, e, h) ? {
            endsAt: h.endsAt
        } : null), w = (0,
        l.useMatchmaking)(e => !!e.launch), S = (0,
        i.drawnOption)(b, y), M = j ? "leader" : w || null !== S ? "launching" : null, k = (0,
        l.useMatchmaking)(t => t.after?.match === e ? t.after : null), C = Q(e, p), {frame: N} = g(C), [A,L] = (0,
        n.useState)( () => Date.now()), T = null === x || !!_;
        (0,
        n.useEffect)( () => {
            if (!T)
                return;
            let e = window.setInterval( () => L(Date.now()), 250);
            return () => window.clearInterval(e)
        }
        , [T]);
        let z = "again" === x && !!k && null === k.choice;
        (0,
        n.useEffect)( () => {
            z && l.useMatchmaking.getState().chooseAfter("again")
        }
        , [z]);
        let R = (0,
        i.voteOpensAt)(a, v, b)
          , F = "vote" === (0,
        i.endShows)(x, b, A, R) && ("again" === x || N.done)
          , I = F && N.done
          , $ = o.AFTER_MATCH_COPY[a]
          , B = U(e => e.notice?.where === "end" ? e.notice : null);
        return (0,
        n.useEffect)( () => () => W({
            where: "end"
        }), [e]),
        (0,
        t.jsxs)(E, {
            label: c,
            mode: a,
            children: [d, (0,
            t.jsx)(P, {
                rewards: C,
                frame: N,
                collapsed: I,
                stamp: u
            }), B && !F && null === x && (0,
            t.jsx)(H.Toast, {
                className: "fd-end__notice",
                tone: "error",
                title: B.line
            }), !F && null === x && (0,
            t.jsxs)("p", {
                className: "fd-end__rule",
                role: "timer",
                "aria-live": "off",
                children: [$.next, " vote in ", Math.max(1, Math.ceil((R - A) / 1e3)), " s"]
            }), F ? (0,
            t.jsx)(O, {
                mode: a,
                vote: b,
                drawn: S,
                starting: _?.endsAt ? _.endsAt - A : null,
                onVote: e => {
                    (0,
                    i.pressAfter)("again"),
                    l.useMatchmaking.getState().voteNext(e)
                }
                ,
                onNewMatch: G,
                onFlyFree: X,
                newMatchLocked: M
            }) : (0,
            t.jsx)(D, {
                again: $.again,
                onAgain: V,
                onNewMatch: G,
                onFlyFree: X,
                onTimeAttack: "race" === a ? J : void 0,
                newMatchLocked: M,
                holdKeys: !N.done
            })]
        })
    }
    , "useCornerCardShown", 0, function() {
        let e = (0,
        a.useMatchLaunch)(e => e.active?.match ?? null);
        return (0,
        i.useAfterMatch)(t => ee(t, e))
    }
    ], 298421)
}
, 417135, e => {
    "use strict";
    var t = e.i(843476)
      , n = e.i(271645)
      , a = e.i(196121);
    let l = (0,
    n.memo)(function({text: e}) {
        return (0,
        t.jsx)(a.SafeMarkdown, {
            text: e,
            variant: "chat"
        })
    });
    e.s(["ChatMarkdown", 0, l])
}
, 238967, e => {
    "use strict";
    var t = e.i(843476)
      , n = e.i(271645)
      , a = e.i(907462)
      , l = e.i(866614)
      , r = e.i(351780)
      , s = e.i(552696)
      , i = e.i(572219)
      , o = e.i(870895)
      , c = e.i(106258)
      , d = e.i(796856)
      , u = e.i(871737)
      , m = e.i(174637)
      , h = e.i(672390)
      , f = e.i(417135);
    e.i(671112);
    var p = e.i(523895)
      , x = e.i(146617);
    e.i(573798);
    var g = e.i(244144)
      , v = e.i(509381);
    function b({visible: e, anonymous: l, chat: r, channel: y="World", onChannel: j, open: _, onOpenChange: w, defaultOpen: S=!1, defaultLocal: M}) {
        let k = (0,
        d.useMatchState)(e => e.match?.phase === "warmup")
          , C = (0,
        d.useMatchScreens)(e => !0 === e.picking)
          , N = e && !k && !C
          , A = (0,
        d.useMatchScreens)(e => "end" === e.stage ? e.match : null)
          , [L,E] = (0,
        n.useState)(null)
          , T = null !== A && L !== A
          , z = (0,
        n.useCallback)( () => E(A), [A])
          , {messages: P, error: R, sending: F, send: I, remove: $} = r
          , D = (0,
        c.useSimStore)(e => e.isAdmin)
          , O = (0,
        c.useSimStore)(e => e.isMod)
          , B = (0,
        c.useSimStore)(e => e.chatMute)
          , [H,U] = (0,
        n.useState)(S)
          , q = _ ?? H
          , [W,K] = (0,
        n.useState)(null)
          , [Y,V] = (0,
        n.useState)(!1)
          , G = (0,
        n.useRef)(!0)
          , [X,J] = (0,
        n.useState)("")
          , [Q,Z] = (0,
        n.useState)(!1)
          , [ee,et] = (0,
        n.useState)(!0)
          , [en,ea] = (0,
        n.useState)(M ?? [])
          , el = (0,
        n.useRef)(0)
          , er = (0,
        n.useRef)(new Set)
          , es = (0,
        c.useSimStore)(e => e.username) ?? "Pilot"
          , ei = (0,
        c.useSimStore)(e => e.xp);
        (0,
        n.useEffect)( () => {
            let e = er.current;
            return () => {
                for (let t of e)
                    clearTimeout(t);
                e.clear()
            }
        }
        , []);
        let eo = (0,
        n.useRef)(null)
          , ec = (0,
        n.useRef)(null)
          , ed = (0,
        n.useRef)(null)
          , eu = P.at(-1)?.id
          , [em,eh] = (0,
        n.useState)(void 0);
        (0,
        n.useEffect)( () => {
            T ? eh(e => e ?? eu) : eh(void 0)
        }
        , [T]);
        let ef = T && void 0 !== eu && eu !== em
          , ep = (0,
        n.useCallback)(e => {
            void 0 === _ && U(e),
            w?.(e)
        }
        , [_, w]);
        (0,
        n.useEffect)( () => {
            let e = requestAnimationFrame( () => {
                et(!0),
                N || Z(!1)
            }
            )
              , t = setTimeout( () => et(!1), 12e3);
            return () => {
                cancelAnimationFrame(e),
                clearTimeout(t)
            }
        }
        , [eu, en, R, Q, q, N]);
        let ex = (0,
        n.useCallback)( () => {
            l || B ? ed.current?.focus({
                preventScroll: !0
            }) : eo.current?.focus({
                preventScroll: !0
            })
        }
        , [l, B]);
        (0,
        n.useLayoutEffect)( () => {
            q && N && ex();
            let e = ec.current;
            return () => {
                e?.contains(document.activeElement) && document.activeElement?.blur()
            }
        }
        , [q, N, ex]);
        let eg = e => {
            q ? ex() : e.blur()
        }
        ;
        async function ev(e) {
            if (e.preventDefault(),
            d.useMatchState.getState().match?.phase === "warmup" || d.useMatchScreens.getState().picking || !N || !X.trim() || F)
                return;
            document.activeElement?.blur(),
            ep(!1);
            let t = await I(X);
            if ("failed" !== t) {
                var n;
                let e, a;
                J(e => e === X ? "" : e),
                "blocked" === t && (n = X.trim(),
                e = `local-${++el.current}`,
                ea(t => [...t, {
                    id: e,
                    at: new Date().toISOString(),
                    body: n,
                    dummy: !1
                }]),
                a = setTimeout( () => {
                    er.current.delete(a),
                    ea(t => {
                        var n;
                        return n = s.BLOCKED_CHAT_LINE,
                        t.map(t => t.id !== e || t.dummy ? t : {
                            ...t,
                            body: n,
                            dummy: !0
                        })
                    }
                    )
                }
                , s.BLOCKED_CHAT_HOLD_MS),
                er.current.add(a))
            }
        }
        return ((0,
        n.useLayoutEffect)( () => {
            N || (ep(!1),
            Z(!1))
        }
        , [N, ep]),
        (0,
        n.useLayoutEffect)( () => {
            let e = ec.current
              , t = e?.closest(".sim-shell");
            if (!N || !e || !t)
                return;
            let n = () => t.style.setProperty("--chat-top", `${Math.floor(e.getBoundingClientRect().top - t.getBoundingClientRect().top)}px`);
            n();
            let a = new ResizeObserver(n);
            return a.observe(e),
            a.observe(t),
            () => {
                a.disconnect(),
                t.style.removeProperty("--chat-top")
            }
        }
        , [N]),
        (0,
        n.useLayoutEffect)( () => {
            if (!N || !ed.current)
                return;
            let e = () => {
                ed.current && (ed.current.scrollTop = ed.current.scrollHeight)
            }
            ;
            if (!G.current)
                return void V(!0);
            e();
            let t = requestAnimationFrame(e);
            return () => cancelAnimationFrame(t)
        }
        , [P, en, N]),
        (0,
        n.useEffect)( () => {
            if (!N)
                return;
            let e = e => {
                var t, n;
                if (d.useMatchState.getState().match?.phase === "warmup" || d.useMatchScreens.getState().picking || e.isComposing || e.repeat || e.ctrlKey || e.altKey || e.metaKey)
                    return;
                let a = (t = e.key,
                n = {
                    anonymous: l,
                    inside: !!ec.current?.contains(document.activeElement),
                    fromFlight: !(0,
                    i.isTypingTarget)(e.target) && (e.target === document.body || e.target instanceof HTMLCanvasElement)
                },
                "Escape" === t ? n.inside ? "close" : null : "Enter" === t ? n.inside || n.anonymous || !n.fromFlight ? null : "open" : null);
                a && (e.preventDefault(),
                e.stopImmediatePropagation(),
                "close" === a ? document.activeElement?.blur() : ex(),
                ep("open" === a))
            }
            ;
            return window.addEventListener("keydown", e, !0),
            () => window.removeEventListener("keydown", e, !0)
        }
        , [N, l, ep, ex]),
        (0,
        n.useEffect)( () => {
            let e = B?.until ? Date.parse(B.until) - Date.now() : 1 / 0;
            if (e > 0x7fffffff)
                return;
            let t = setTimeout( () => c.useSimStore.getState().applyPlayerProfile({
                chatMute: null
            }), Math.max(0, e));
            return () => clearTimeout(t)
        }
        , [B]),
        N) ? (0,
        t.jsxs)("section", {
            ref: ec,
            className: "fd-chat",
            "aria-label": `${y} chat`,
            "data-open": q,
            "data-awake": ee || Q || q || !!R,
            "data-collapsed": T || void 0,
            onFocus: () => Z(!0),
            onBlur: e => {
                !e.currentTarget.contains(e.relatedTarget) && (Z(!1),
                q && ep(!1))
            }
            ,
            children: [(D || O) && (0,
            t.jsx)(x.ModerationTools, {}), (0,
            t.jsxs)("div", {
                className: "fd-chat__content",
                children: [(0,
                t.jsxs)("h2", {
                    className: "fd-chat__header",
                    children: [y, j && (0,
                    t.jsx)("button", {
                        type: "button",
                        onClick: j,
                        "aria-label": `Switch to ${"World" === y ? "Lobby" : "World"} chat`,
                        children: "⇄"
                    }), T && (0,
                    t.jsx)(v.TextLink, {
                        className: "fd-chat__expand",
                        onClick: e => {
                            eg(e.currentTarget),
                            z()
                        }
                        ,
                        "aria-expanded": !1,
                        "aria-controls": "global-chat-log",
                        children: "Show"
                    })]
                }), (0,
                t.jsxs)("div", {
                    ref: ed,
                    id: "global-chat-log",
                    className: "fd-chat__log",
                    role: "log",
                    "aria-label": `${y} chat messages`,
                    "aria-live": "polite",
                    "aria-relevant": "additions",
                    tabIndex: 0,
                    hidden: T,
                    onScroll: () => {
                        let e = ed.current;
                        G.current = e.scrollHeight - e.scrollTop - e.clientHeight < 24,
                        G.current && V(!1)
                    }
                    ,
                    children: [P.map(e => (0,
                    t.jsxs)("div", {
                        className: `fd-chat__message${e.system ? " fd-chat__system" : ""}`,
                        children: [(0,
                        t.jsx)("time", {
                            dateTime: e.created_at,
                            children: new Date(e.created_at).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: !1
                            })
                        }), " ", e.system ? (0,
                        t.jsxs)(t.Fragment, {
                            children: [(0,
                            t.jsx)("strong", {
                                children: "[System]"
                            }), " ", (0,
                            t.jsx)(f.ChatMarkdown, {
                                text: e.body
                            })]
                        }) : (0,
                        t.jsxs)(t.Fragment, {
                            children: [(0,
                            t.jsxs)("span", {
                                className: "fd-chat__identity",
                                style: {
                                    "--pilot-color": e.admin || e.mod ? p.PALETTE.chalk : (0,
                                    a.pilotIdentityColor)(e.name)
                                },
                                children: [(0,
                                t.jsxs)("span", {
                                    className: "fd-chat__level",
                                    "aria-label": `Level ${(0,
                                    o.xpToLevel)(e.xp)}`,
                                    children: ["[", (0,
                                    o.xpToLevel)(e.xp), "]"]
                                }), " ", (0,
                                t.jsx)("button", {
                                    type: "button",
                                    className: "fd-chat__name",
                                    disabled: !e.userId,
                                    onClick: () => e.userId && u.usePilotProfile.getState().open(e.userId),
                                    "aria-label": `View ${e.name}'s profile`,
                                    children: e.name
                                }), (0,
                                t.jsx)(h.PilotBadge, {
                                    admin: e.admin,
                                    mod: e.mod
                                }), (0,
                                t.jsx)(h.EquippedPilotBadges, {
                                    badges: e.badges
                                })]
                            }), ": ", e.body]
                        }), (D || O && !e.system && !e.admin && !e.mod) && (0,
                        t.jsx)("button", {
                            type: "button",
                            className: "fd-chat__remove",
                            disabled: !!W,
                            "aria-label": `Remove message from ${e.name}`,
                            title: "Remove message",
                            onClick: async t => {
                                eg(t.currentTarget),
                                K(e.id);
                                try {
                                    await $(e.id)
                                } finally {
                                    K(null)
                                }
                            }
                            ,
                            children: (0,
                            t.jsx)(g.Icon, {
                                name: "trash",
                                size: 12
                            })
                        })]
                    }, e.id)), en.map(e => (0,
                    t.jsxs)("div", {
                        className: `fd-chat__message${e.dummy ? " fd-chat__dummy" : " fd-chat__taken"}`,
                        "data-local": e.dummy ? "dummy" : "blocked",
                        children: [(0,
                        t.jsx)("time", {
                            dateTime: e.at,
                            children: new Date(e.at).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: !1
                            })
                        }), " ", e.dummy ? (0,
                        t.jsxs)(t.Fragment, {
                            children: [(0,
                            t.jsx)("strong", {
                                children: "Dummy"
                            }), ": ", e.body]
                        }) : (0,
                        t.jsxs)(t.Fragment, {
                            children: [(0,
                            t.jsxs)("span", {
                                className: "fd-chat__identity",
                                style: {
                                    "--pilot-color": D || O ? p.PALETTE.chalk : (0,
                                    a.pilotIdentityColor)(es)
                                },
                                children: [(0,
                                t.jsxs)("span", {
                                    className: "fd-chat__level",
                                    "aria-label": `Level ${(0,
                                    o.xpToLevel)(ei)}`,
                                    children: ["[", (0,
                                    o.xpToLevel)(ei), "]"]
                                }), " ", (0,
                                t.jsx)("span", {
                                    className: "fd-chat__name",
                                    children: es
                                }), (0,
                                t.jsx)(h.PilotBadge, {
                                    admin: D,
                                    mod: O
                                })]
                            }), ": ", e.body]
                        })]
                    }, e.id))]
                })]
            }), (Y || ef) && (0,
            t.jsx)("button", {
                className: "fd-chat__latest",
                onClick: e => {
                    eg(e.currentTarget),
                    T && z(),
                    ed.current && (ed.current.scrollTop = ed.current.scrollHeight),
                    G.current = !0,
                    V(!1)
                }
                ,
                children: "New messages ↓"
            }), R && !(B && "You are silenced in chat." === R) && (0,
            t.jsx)("p", {
                role: "alert",
                className: "fd-chat__error",
                children: R
            }), B && !l ? (0,
            t.jsx)("p", {
                role: "status",
                className: "fd-chat__muted",
                children: (0,
                m.restrictionMessage)("Muted", B)
            }) : (0,
            t.jsxs)("form", {
                onSubmit: ev,
                className: "fd-chat__form",
                children: [(0,
                t.jsx)("label", {
                    className: "sr-only",
                    htmlFor: "global-chat-input",
                    children: "Lobby" === y ? "Message this lobby" : "Message all pilots"
                }), (0,
                t.jsx)("input", {
                    id: "global-chat-input",
                    ref: eo,
                    value: X,
                    maxLength: 400,
                    autoComplete: "off",
                    spellCheck: !0,
                    disabled: l || F,
                    placeholder: l ? "Sign in to chat" : q ? "Lobby" === y ? "Message this lobby" : "Message all pilots" : "Enter to chat",
                    onFocus: () => {
                        q || ep(!0)
                    }
                    ,
                    onChange: e => J(e.target.value),
                    onKeyDown: e => {
                        e.nativeEvent.isComposing && "Enter" === e.key && e.preventDefault()
                    }
                }), (0,
                t.jsx)("button", {
                    type: "submit",
                    disabled: l || F || !X.trim(),
                    "aria-label": `Send ${y.toLowerCase()} message`,
                    children: F ? "…" : (0,
                    t.jsx)(g.Icon, {
                        name: "send",
                        size: 14
                    })
                })]
            })]
        }) : null
    }
    e.s(["GlobalChat", 0, function({visible: e}) {
        let s = (0,
        c.useSimStore)(e => e.settings.graphics.showChat)
          , i = (0,
        c.useSimStore)(e => e.playerReady)
          , o = (0,
        c.useSimStore)(e => e.isAnonymous)
          , [d,u] = (0,
        n.useState)("World")
          , [m,h] = (0,
        n.useState)(!1)
          , f = e && s && i
          , p = (0,
        r.useGlobalChat)(f && "World" === d)
          , x = function(e) {
            let[t,r] = (0,
            n.useState)([])
              , [s,i] = (0,
            n.useState)()
              , [o,c] = (0,
            n.useState)("")
              , [d,u] = (0,
            n.useState)(!1);
            async function m(e, t) {
                u(!0),
                c("");
                try {
                    let n = a.navigationRuntime.multiplayer?.current.sendChat
                      , r = n ? await n(e, t) : {
                        ok: !1,
                        error: "Join a lobby to chat."
                    };
                    if (r.ok)
                        return "sent";
                    if ("blocked" in r)
                        return "blocked";
                    return c(r.error),
                    "You are silenced in chat." === r.error && (0,
                    l.loadChatMute)(),
                    "failed"
                } finally {
                    u(!1)
                }
            }
            return (0,
            n.useEffect)( () => {
                if (!e)
                    return;
                let t = () => {
                    let e = a.navigationRuntime.multiplayer?.current;
                    i(e?.lobbyId),
                    r(e?.lobbyId ? e.chat ?? [] : [])
                }
                ;
                t();
                let n = setInterval(t, 1e3);
                return () => clearInterval(n)
            }
            , [e]),
            {
                messages: t,
                connected: !!s,
                error: o,
                sending: d,
                send: m,
                remove: async e => await m("", e) === "sent"
            }
        }(f && "Lobby" === d)
          , [g,v] = (0,
        n.useState)(f);
        return g !== f && (v(f),
        f || h(!1)),
        (0,
        t.jsx)(b, {
            visible: f,
            anonymous: o,
            chat: "World" === d ? p : x,
            channel: d,
            onChannel: () => u("World" === d ? "Lobby" : "World"),
            open: m,
            onOpenChange: h
        }, d)
    }
    , "GlobalChatPanel", 0, b], 238967)
}
, 146617, e => {
    "use strict";
    var t = e.i(843476)
      , n = e.i(271645)
      , a = e.i(127923)
      , l = e.i(98919)
      , r = e.i(37727)
      , s = e.i(50270)
      , i = e.i(920755)
      , o = e.i(871737)
      , c = e.i(463946);
    e.i(671112);
    let d = s.z.object({
        id: s.z.string(),
        name: s.z.string(),
        admin: s.z.boolean(),
        mod: s.z.boolean(),
        online: s.z.boolean(),
        banned: s.z.boolean(),
        silenced: s.z.boolean(),
        bannedUntil: s.z.string().nullable(),
        silencedUntil: s.z.string().nullable(),
        canModerate: s.z.boolean()
    })
      , u = s.z.object({
        onlineCount: s.z.number(),
        total: s.z.number(),
        players: s.z.array(d)
    })
      , m = s.z.array(s.z.object({
        id: s.z.string(),
        created_at: s.z.string(),
        actor_name: s.z.string(),
        player_name: s.z.string(),
        action: s.z.string(),
        reason: s.z.string(),
        expires_at: s.z.string().nullable()
    }));
    function h() {
        let[e,a] = (0,
        n.useState)("players")
          , [l,r] = (0,
        n.useState)("")
          , [s,d] = (0,
        n.useState)(!0)
          , [h,p] = (0,
        n.useState)(0)
          , [x,g] = (0,
        n.useState)(null)
          , [v,b] = (0,
        n.useState)([])
          , [y,j] = (0,
        n.useState)(null)
          , [_,w] = (0,
        n.useState)([])
          , [S,M] = (0,
        n.useState)(null)
          , [k,C] = (0,
        n.useState)("")
          , [N,A] = (0,
        n.useState)("")
          , [L,E] = (0,
        n.useState)(!0)
          , [T,z] = (0,
        n.useState)(!1)
          , [P,R] = (0,
        n.useState)(0)
          , F = (0,
        n.useRef)(!1)
          , I = (0,
        n.useCallback)( () => R(e => e + 1), []);
        async function $(e) {
            if (!S || F.current)
                return !1;
            F.current = !0,
            z(!0),
            C(""),
            A("");
            try {
                let {error: t} = await (0,
                i.createClient)().rpc("moderate_pilot_with_reason", {
                    p_id: S.id,
                    p_action: e.action,
                    p_enabled: e.enabled,
                    p_reason: e.reason,
                    p_hours: e.hours
                }).abortSignal(AbortSignal.timeout(1e4));
                if (t)
                    throw t;
                return M(null),
                A("Moderation action saved."),
                I(),
                !0
            } catch {
                return C("Could not save this action. Refresh to check the current status before trying again."),
                !1
            } finally {
                F.current = !1,
                z(!1)
            }
        }
        return (0,
        n.useEffect)( () => {
            let t = new AbortController;
            async function n() {
                E(!0);
                try {
                    let n = (0,
                    i.createClient)()
                      , a = "players" === e ? n.rpc("get_moderation_players", {
                        p_search: l,
                        p_online_only: s,
                        p_page: h
                    }) : n.rpc("get_moderation_history", {
                        p_before: y
                    })
                      , {data: r, error: o} = await a.abortSignal(AbortSignal.any([t.signal, AbortSignal.timeout(1e4)]));
                    if (o)
                        throw o;
                    if (t.signal.aborted)
                        return;
                    if ("players" === e) {
                        let e = u.parse(r);
                        g(e),
                        M(t => t ? e.players.find(e => e.id === t.id) ?? null : null)
                    } else
                        b(m.parse(r));
                    C("")
                } catch {
                    t.signal.aborted || C("Could not load moderation tools. Check your connection and permissions, then retry.")
                } finally {
                    t.signal.aborted || E(!1)
                }
            }
            let a = setTimeout( () => void n(), 250)
              , r = setInterval( () => {
                F.current || n()
            }
            , 15e3);
            return () => {
                t.abort(),
                clearTimeout(a),
                clearInterval(r)
            }
        }
        , [e, l, s, h, y, P]),
        (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsxs)("nav", {
                "aria-label": "Moderation views",
                children: [(0,
                t.jsx)("button", {
                    "aria-pressed": "players" === e,
                    onClick: () => a("players"),
                    children: "Players"
                }), (0,
                t.jsx)("button", {
                    "aria-pressed": "history" === e,
                    onClick: () => a("history"),
                    children: "Action history"
                }), (0,
                t.jsx)("button", {
                    disabled: L || T,
                    onClick: I,
                    children: "Refresh"
                })]
            }), k && (0,
            t.jsx)("p", {
                role: "alert",
                className: "fd-mod-error",
                children: k
            }), N && (0,
            t.jsx)("p", {
                role: "status",
                children: N
            }), "players" === e ? (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsxs)("div", {
                    className: "fd-mod-search",
                    children: [(0,
                    t.jsx)("strong", {
                        children: x ? `${x.onlineCount} online` : "Players online"
                    }), (0,
                    t.jsx)("span", {
                        children: "Updated every 15s"
                    }), (0,
                    t.jsx)("input", {
                        "aria-label": "Search players by name",
                        type: "search",
                        maxLength: 100,
                        value: l,
                        onChange: e => {
                            r(e.target.value),
                            p(0),
                            M(null)
                        }
                        ,
                        placeholder: "Search players by name…"
                    }), (0,
                    t.jsxs)("label", {
                        children: [(0,
                        t.jsx)("input", {
                            type: "checkbox",
                            checked: s,
                            onChange: e => {
                                d(e.target.checked),
                                p(0),
                                M(null)
                            }
                        }), " Online only"]
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "fd-mod-scroll",
                    "aria-busy": L,
                    children: L && !x ? (0,
                    t.jsx)("p", {
                        role: "status",
                        children: "Loading players…"
                    }) : x?.players.length ? (0,
                    t.jsx)("ul", {
                        children: x.players.map(e => (0,
                        t.jsxs)("li", {
                            children: [(0,
                            t.jsxs)("div", {
                                children: [(0,
                                t.jsx)("button", {
                                    className: "fd-mod-name",
                                    onClick: () => o.usePilotProfile.getState().open(e.id, {
                                        pause: !1
                                    }),
                                    children: e.name
                                }), (0,
                                t.jsxs)("small", {
                                    children: [e.online ? "Online" : "Offline", e.admin ? " · Admin" : e.mod ? " · Mod" : "", e.banned && ` \xb7 Banned ${f(e.bannedUntil)}`, e.silenced && ` \xb7 Silenced ${f(e.silencedUntil)}`]
                                })]
                            }), e.canModerate && (0,
                            t.jsx)("button", {
                                disabled: T || L,
                                onClick: () => {
                                    M(e),
                                    A("")
                                }
                                ,
                                children: "Moderate"
                            })]
                        }, e.id))
                    }) : (0,
                    t.jsx)("p", {
                        children: "No players found."
                    })
                }), (0,
                t.jsxs)("footer", {
                    children: [(0,
                    t.jsx)("button", {
                        disabled: !h || T,
                        onClick: () => {
                            p(e => e - 1),
                            M(null)
                        }
                        ,
                        children: "Previous"
                    }), (0,
                    t.jsxs)("span", {
                        children: ["Page ", h + 1, " · ", x?.total ?? 0, " results"]
                    }), (0,
                    t.jsx)("button", {
                        disabled: T || !x || (h + 1) * 25 >= x.total,
                        onClick: () => {
                            p(e => e + 1),
                            M(null)
                        }
                        ,
                        children: "Next"
                    })]
                }), S && (0,
                t.jsxs)("div", {
                    className: "fd-mod-selection",
                    children: [(0,
                    t.jsx)("button", {
                        disabled: T,
                        onClick: () => M(null),
                        children: "Cancel"
                    }), (0,
                    t.jsx)(c.ModerationActionForm, {
                        name: S.name,
                        banned: S.banned,
                        silenced: S.silenced,
                        busy: T,
                        onSubmit: $
                    }, S.id)]
                })]
            }) : (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("div", {
                    className: "fd-mod-scroll fd-mod-history",
                    "aria-busy": L,
                    children: L ? (0,
                    t.jsx)("p", {
                        role: "status",
                        children: "Loading history…"
                    }) : v.length ? (0,
                    t.jsx)("ul", {
                        children: v.map(e => (0,
                        t.jsxs)("li", {
                            children: [(0,
                            t.jsxs)("strong", {
                                children: [e.actor_name, " → ", e.player_name]
                            }), (0,
                            t.jsxs)("span", {
                                children: [e.action.replaceAll("_", " "), ["ban", "silence"].includes(e.action) ? ` \xb7 ${f(e.expires_at)}` : ""]
                            }), (0,
                            t.jsx)("p", {
                                children: e.reason
                            }), (0,
                            t.jsx)("time", {
                                dateTime: e.created_at,
                                children: new Date(e.created_at).toLocaleString()
                            })]
                        }, e.id))
                    }) : (0,
                    t.jsx)("p", {
                        children: "No moderation actions recorded."
                    })
                }), (0,
                t.jsxs)("footer", {
                    children: [(0,
                    t.jsx)("button", {
                        disabled: !_.length || L,
                        onClick: () => {
                            j(_.at(-1) ?? null),
                            w(e => e.slice(0, -1))
                        }
                        ,
                        children: "Newer"
                    }), (0,
                    t.jsx)("button", {
                        disabled: v.length < 50 || L,
                        onClick: () => {
                            w(e => [...e, y]),
                            j(v.at(-1).id)
                        }
                        ,
                        children: "Older"
                    })]
                })]
            })]
        })
    }
    function f(e) {
        return e ? `until ${new Date(e).toLocaleString()}` : "permanently"
    }
    e.s(["ModerationTools", 0, function() {
        let[e,s] = (0,
        n.useState)(!1);
        return (0,
        t.jsxs)(a.Popover.Root, {
            open: e,
            onOpenChange: s,
            modal: !1,
            children: [(0,
            t.jsxs)(a.Popover.Trigger, {
                className: "fd-mod-trigger",
                "aria-label": "Moderator tools",
                children: [(0,
                t.jsx)(l.Shield, {
                    size: 13
                }), " Mod tools"]
            }), (0,
            t.jsx)(a.Popover.Portal, {
                children: (0,
                t.jsxs)(a.Popover.Content, {
                    className: "fd-mod-popover",
                    side: "top",
                    align: "start",
                    sideOffset: 8,
                    collisionPadding: 16,
                    "aria-label": "Moderator tools",
                    onKeyDown: e => e.stopPropagation(),
                    onKeyUp: e => e.stopPropagation(),
                    onEscapeKeyDown: e => e.stopPropagation(),
                    children: [(0,
                    t.jsxs)("header", {
                        children: [(0,
                        t.jsxs)("strong", {
                            children: [(0,
                            t.jsx)(l.Shield, {
                                size: 15
                            }), " Moderator tools"]
                        }), (0,
                        t.jsx)(a.Popover.Close, {
                            "aria-label": "Close moderator tools",
                            children: (0,
                            t.jsx)(r.X, {
                                size: 16
                            })
                        })]
                    }), (0,
                    t.jsx)(h, {})]
                })
            })]
        })
    }
    ])
}
, 351780, 866614, e => {
    "use strict";
    var t = e.i(271645)
      , n = e.i(920755)
      , a = e.i(579612)
      , l = e.i(106258);
    async function r() {
        try {
            let {data: e, error: t} = await (0,
            n.createClient)().rpc("my_standing").abortSignal(AbortSignal.timeout(8e3));
            if (t || !e)
                return;
            let a = e.mute ?? null;
            l.useSimStore.getState().applyPlayerProfile({
                chatMute: a
            })
        } catch {}
    }
    e.s(["loadChatMute", 0, r], 866614);
    var s = e.i(50270);
    let i = s.z.object({
        id: s.z.string().regex(/^\d+$/),
        created_at: s.z.string(),
        name: s.z.string(),
        admin: s.z.boolean(),
        mod: s.z.boolean().optional(),
        badges: s.z.array(s.z.string().min(1).max(40)).optional(),
        userId: s.z.string().uuid().nullable().optional(),
        xp: s.z.number().nonnegative(),
        body: s.z.string().max(2e3),
        system: s.z.boolean()
    })
      , o = s.z.array(i).max(100)
      , c = s.z.object({
        revision: s.z.string().min(1),
        messages: o.nullable()
    });
    s.z.object({
        messages: s.z.array(s.z.string().trim().min(1).max(2e3)).max(20),
        interval_seconds: s.z.number().int().min(10).max(86400),
        enabled: s.z.boolean()
    }).refine(e => !e.enabled || e.messages.length > 0, "Add a message before enabling the rotation."),
    s.z.array(i.extend({
        deleted_at: s.z.string().nullable()
    })).max(50),
    e.s(["useGlobalChat", 0, function(e) {
        let[l,s] = (0,
        t.useState)([])
          , [i,o] = (0,
        t.useState)(!1)
          , [d,u] = (0,
        t.useState)("")
          , [m,h] = (0,
        t.useState)(!1)
          , f = (0,
        t.useRef)(null)
          , p = (0,
        t.useRef)(!1)
          , x = (0,
        t.useRef)( () => {}
        );
        return (0,
        t.useEffect)( () => {
            let t;
            if (!e)
                return;
            let a = (0,
            n.createClient)()
              , l = !1
              , r = 0
              , i = !1
              , d = !1
              , u = null
              , m = null
              , h = () => !l && !document.hidden && !1 !== navigator.onLine
              , f = async () => {
                if (clearTimeout(t),
                h() && !m) {
                    m = new AbortController,
                    d = !1;
                    try {
                        let {data: e, error: t} = await a.rpc("read_global_chat_v2", {
                            p_revision: u
                        }).abortSignal(AbortSignal.any([m.signal, AbortSignal.timeout(8e3)]));
                        if (t)
                            throw t;
                        let n = c.parse(e);
                        if (l)
                            return;
                        u = n.revision,
                        i = null === n.messages,
                        null !== n.messages && s(n.messages),
                        o(!0),
                        r = 0
                    } catch {
                        h() && (o(!1),
                        r = Math.min(r + 1, 4))
                    } finally {
                        m = null,
                        h() && (t = setTimeout(f, d ? 0 : r ? Math.min(6e4, 5e3 * 2 ** r) : i ? 1e4 : 5e3))
                    }
                }
            }
            ;
            x.current = () => {
                d = !0,
                m || f()
            }
            ;
            let p = () => {
                if (!h()) {
                    o(!1),
                    clearTimeout(t),
                    m?.abort();
                    return
                }
                d = !0,
                m || f()
            }
            ;
            return document.addEventListener("visibilitychange", p),
            window.addEventListener("online", p),
            window.addEventListener("offline", p),
            f(),
            () => {
                l = !0,
                m?.abort(),
                clearTimeout(t),
                x.current = () => {}
                ,
                document.removeEventListener("visibilitychange", p),
                window.removeEventListener("online", p),
                window.removeEventListener("offline", p)
            }
        }
        , [e]),
        {
            messages: l,
            connected: i,
            error: d,
            sending: m,
            send: (0,
            t.useCallback)(async e => {
                if (p.current || !e.trim())
                    return "failed";
                p.current = !0,
                h(!0),
                u(""),
                f.current?.body !== e && (f.current = {
                    body: e,
                    nonce: crypto.randomUUID()
                });
                try {
                    let t = await (0,
                    a.postJson)("/api/chat/send", {
                        body: e,
                        nonce: f.current.nonce
                    }, "Could not send. Try again.", 8e3);
                    if (f.current = null,
                    t.blocked)
                        return "blocked";
                    return x.current(),
                    "sent"
                } catch (t) {
                    let e = t instanceof a.ApiError ? t.message : "";
                    return u(["Use 1–400 characters.", "Use a single line of text.", "Links are not allowed in player chat.", "You are silenced in chat.", "Please wait a moment before sending again.", "Sign in to chat."].includes(e) ? e : "Could not send. Try again."),
                    "You are silenced in chat." === e && r(),
                    "failed"
                } finally {
                    p.current = !1,
                    h(!1)
                }
            }
            , []),
            remove: (0,
            t.useCallback)(async e => {
                u("");
                try {
                    let {error: t} = await (0,
                    n.createClient)().rpc("admin_remove_chat_message", {
                        p_id: e
                    }).abortSignal(AbortSignal.timeout(8e3));
                    if (t)
                        throw t;
                    return s(t => t.filter(t => t.id !== e)),
                    x.current(),
                    !0
                } catch {
                    return u("Could not remove this message. Check your permissions and try again."),
                    !1
                }
            }
            , [])
        }
    }
    ], 351780)
}
, 98919, e => {
    "use strict";
    let t = (0,
    e.i(475254).default)("shield", [["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]]);
    e.s(["Shield", 0, t], 98919)
}
]);
