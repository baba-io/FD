(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 70399, 873724, 684680, 72606, 854693, 929618, 198132, 460470, 306605, 54893, 598558, 418879, 35230, e => {
    "use strict";
    var t = e.i(843476);
    e.s(["DiscordMark", 0, function({className: e}) {
        return (0,
        t.jsx)("svg", {
            className: e,
            viewBox: "0 0 127.14 96.36",
            fill: "currentColor",
            "aria-hidden": !0,
            children: (0,
            t.jsx)("path", {
                d: "M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.06 72.06 0 0 0 45.64 0 105.19 105.19 0 0 0 19.39 8.09C2.79 32.65-1.71 56.6.54 80.21h0A105.73 105.73 0 0 0 32.71 96.36 77.7 77.7 0 0 0 39.6 85.25a68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1A105.25 105.25 0 0 0 126.6 80.22h0C129.24 52.84 122.09 29.11 107.7 8.07ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53 48.84 65.69 42.45 65.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53 91.08 65.69 84.69 65.69Z"
            })
        })
    }
    ], 70399),
    e.s(["TikTokMark", 0, function({className: e}) {
        return (0,
        t.jsx)("svg", {
            className: e,
            viewBox: "0 0 24 24",
            fill: "currentColor",
            "aria-hidden": !0,
            children: (0,
            t.jsx)("path", {
                d: "M16.6 2h-3.3v13.5a3.15 3.15 0 1 1-2.2-3V9.1a6.5 6.5 0 1 0 5.5 6.4V8.7a8.3 8.3 0 0 0 4.9 1.6V7a4.9 4.9 0 0 1-4.9-5Z"
            })
        })
    }
    ], 873724),
    e.s(["YouTubeMark", 0, function({className: e}) {
        return (0,
        t.jsx)("svg", {
            className: e,
            viewBox: "0 0 24 24",
            fill: "currentColor",
            "aria-hidden": !0,
            children: (0,
            t.jsx)("path", {
                fillRule: "evenodd",
                d: "M23.5 6.2a3 3 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3 3 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3 3 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3 3 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z"
            })
        })
    }
    ], 684680);
    var s = e.i(271645)
      , a = e.i(321390)
      , i = e.i(710534)
      , n = e.i(28276)
      , r = e.i(353198)
      , l = e.i(106258)
      , o = e.i(814022)
      , d = e.i(105524);
    e.i(573798);
    var c = e.i(498475)
      , u = e.i(516560)
      , h = e.i(509381)
      , m = e.i(244144)
      , p = e.i(523895);
    let x = p.PALETTE.ink
      , f = p.PALETTE.paper
      , g = p.PALETTE.orange
      , j = p.PALETTE.muted;
    function b({x: e=120, y: s=120, angle: a=0, scale: i=1}) {
        return (0,
        t.jsxs)("g", {
            transform: `translate(${e} ${s}) rotate(${a}) scale(${i})`,
            stroke: x,
            fill: f,
            strokeWidth: "3",
            children: [(0,
            t.jsx)("path", {
                d: "M-24-16 24 16M-24 16 24-16"
            }), [-1, 1].flatMap(e => [-1, 1].map(s => (0,
            t.jsx)("ellipse", {
                cx: 27 * e,
                cy: 18 * s,
                rx: "15",
                ry: "7"
            }, `${e},${s}`))), (0,
            t.jsx)("rect", {
                x: "-10",
                y: "-14",
                width: "20",
                height: "28",
                rx: "6"
            }), (0,
            t.jsx)("path", {
                d: "m-4-3 4-5 4 5",
                stroke: g,
                fill: "none"
            })]
        })
    }
    function v({d: e, head: s}) {
        return (0,
        t.jsxs)("g", {
            stroke: g,
            strokeWidth: "4",
            children: [(0,
            t.jsx)("path", {
                d: e
            }), (0,
            t.jsx)("path", {
                d: s
            })]
        })
    }
    function S({d: e}) {
        return (0,
        t.jsx)("path", {
            d: e,
            stroke: j,
            strokeOpacity: ".5",
            strokeWidth: "2",
            strokeDasharray: "3 7"
        })
    }
    function y({x: e, y: s}) {
        return (0,
        t.jsx)("rect", {
            x: e - 13,
            y: s - 23,
            width: "26",
            height: "46",
            rx: "3",
            stroke: j,
            strokeWidth: "3",
            fill: g
        })
    }
    let k = {
        "take-off": (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)("ellipse", {
                cx: "120",
                cy: "191",
                rx: "57",
                ry: "15",
                stroke: j,
                strokeWidth: "2"
            }), (0,
            t.jsx)("path", {
                d: "M108 191h24m-24-6v12m24-12v12",
                stroke: j,
                strokeWidth: "2"
            }), (0,
            t.jsx)(S, {
                d: "M95 164v-20m50 20v-20"
            }), (0,
            t.jsx)(b, {
                y: 120
            }), (0,
            t.jsx)(v, {
                d: "M120 82V38",
                head: "m108 50 12-12 12 12"
            })]
        }),
        "first-flight-going-forward": (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(S, {
                d: "M37 178H203"
            }), (0,
            t.jsx)(y, {
                x: 184,
                y: 102
            }), (0,
            t.jsx)(b, {
                x: 92,
                y: 127,
                angle: 16
            }), (0,
            t.jsx)(v, {
                d: "M112 70h68",
                head: "m168 58 12 12-12 12"
            }), (0,
            t.jsx)("path", {
                d: "M38 115h17m-25 15h20m-12 15h17",
                stroke: j,
                strokeWidth: "2"
            })]
        }),
        "set-the-angle": (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(S, {
                d: "M37 130h166"
            }), (0,
            t.jsx)("path", {
                d: "M55 108 185 150",
                stroke: g,
                strokeWidth: "2"
            }), (0,
            t.jsx)("path", {
                d: "M181 130a61 61 0 0 1-3 19",
                stroke: g,
                strokeWidth: "4"
            }), (0,
            t.jsx)(b, {
                y: 119,
                angle: 18
            }), (0,
            t.jsx)(v, {
                d: "M85 64q42-18 70 11",
                head: "m155 59 0 16-16-1"
            })]
        }),
        "hold-the-line": (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(S, {
                d: "M79 40v160M161 40v160"
            }), (0,
            t.jsx)(v, {
                d: "M120 102V40",
                head: "m108 52 12-12 12 12"
            }), (0,
            t.jsx)("path", {
                d: "M120 168v30",
                stroke: g,
                strokeWidth: "4"
            }), (0,
            t.jsx)(b, {
                y: 138
            })]
        }),
        "keep-your-height": (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(S, {
                d: "M34 77h172M34 165h172"
            }), (0,
            t.jsx)("path", {
                d: "M35 77v88m-7-88h14m-14 88h14",
                stroke: j,
                strokeWidth: "2"
            }), (0,
            t.jsx)(b, {
                x: 104
            }), (0,
            t.jsx)(v, {
                d: "M158 120h45",
                head: "m191 108 12 12-12 12"
            })]
        }),
        "change-your-height": (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(S, {
                d: "M35 180h170M35 62h170"
            }), (0,
            t.jsx)(b, {
                x: 76,
                y: 151,
                scale: .8
            }), (0,
            t.jsx)(v, {
                d: "M117 154h13q20 0 20-20V84q0-20 20-20h27",
                head: "m185 52 12 12-12 12"
            })]
        }),
        "first-flight-run": (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)("path", {
                d: "M36 185h40",
                stroke: j,
                strokeWidth: "3"
            }), (0,
            t.jsx)(y, {
                x: 167,
                y: 73
            }), (0,
            t.jsx)(v, {
                d: "M56 171v-66q0-32 32-32h105",
                head: "m181 61 12 12-12 12"
            }), (0,
            t.jsx)(b, {
                x: 123,
                y: 151,
                scale: .85
            })]
        }),
        "banking-meet-roll": (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(S, {
                d: "M39 130h162"
            }), (0,
            t.jsx)(b, {
                angle: -23
            }), (0,
            t.jsx)(v, {
                d: "M65 70q55-44 110 0",
                head: "m174 53 1 17-17-1"
            }), (0,
            t.jsx)(v, {
                d: "M79 182H40",
                head: "m52 170-12 12 12 12"
            }), (0,
            t.jsx)(v, {
                d: "M161 182h39",
                head: "m188 170 12 12-12 12"
            })]
        }),
        "banking-bank-and-level": (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(b, {
                x: 68,
                y: 93,
                angle: -28,
                scale: .8
            }), (0,
            t.jsx)(b, {
                x: 169,
                y: 158,
                scale: .8
            }), (0,
            t.jsx)(S, {
                d: "M125 188h83"
            }), (0,
            t.jsx)(v, {
                d: "M62 148q10 40 52 26",
                head: "m99 168 15 6-7 14"
            })]
        }),
        "banking-bigger-banks": (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(S, {
                d: "M36 137h168"
            }), (0,
            t.jsx)(b, {
                y: 135,
                angle: -42
            }), (0,
            t.jsx)(v, {
                d: "M50 106a76 76 0 0 1 142-5",
                head: "m194 82-2 19-18-5"
            }), (0,
            t.jsx)("path", {
                d: "m101 189 19 9 19-9",
                stroke: j,
                strokeWidth: "2"
            })]
        }),
        "banking-change-your-line": (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(S, {
                d: "M64 37v168M176 37v168"
            }), (0,
            t.jsx)(v, {
                d: "M64 166v-23c0-36 112-10 112-58V39",
                head: "m164 51 12-12 12 12"
            }), (0,
            t.jsx)(b, {
                x: 64,
                y: 175,
                scale: .7
            })]
        }),
        "banking-add-some-height": (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(S, {
                d: "M30 183h180M30 57h180"
            }), (0,
            t.jsx)(b, {
                x: 76,
                y: 157,
                angle: -25,
                scale: .8
            }), (0,
            t.jsx)(v, {
                d: "M104 136c65 0 9-68 82-68",
                head: "m174 56 12 12-12 12"
            }), (0,
            t.jsx)("path", {
                d: "M205 174V111m-7 8 7-8 7 8",
                stroke: j,
                strokeWidth: "2"
            })]
        }),
        "banking-slalom": (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)("path", {
                d: "M101 62h38m-38 57h38m-38 57h38",
                stroke: j,
                strokeWidth: "3"
            }), (0,
            t.jsx)(v, {
                d: "M95 207c-88-39 135-61 43-103S75 55 144 30",
                head: "m128 26 16 4-6 16"
            }), (0,
            t.jsx)(b, {
                x: 158,
                y: 161,
                angle: 24,
                scale: .65
            })]
        }),
        "banking-run": (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(y, {
                x: 62,
                y: 141
            }), (0,
            t.jsx)(y, {
                x: 177,
                y: 86
            }), (0,
            t.jsx)(v, {
                d: "M41 194c92-19 141-33 78-72S88 49 175 40",
                head: "m161 31 14 9-11 12"
            }), (0,
            t.jsx)(b, {
                x: 166,
                y: 176,
                angle: -24,
                scale: .65
            }), (0,
            t.jsx)("path", {
                d: "M172 34V18h28v16h-28m0-8h28m-18-8v16m9-16v16",
                stroke: j,
                strokeWidth: "2"
            })]
        })
    };
    function w({lessonId: e, name: s, className: a, decorative: i=!1}) {
        return (0,
        t.jsx)("svg", {
            viewBox: "0 0 240 240",
            className: a,
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            role: i ? void 0 : "img",
            "aria-hidden": i || void 0,
            "aria-label": i ? void 0 : `${s} lesson illustration`,
            children: k[e] ?? (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)(b, {}), (0,
                t.jsx)(v, {
                    d: "M120 73V35",
                    head: "m108 47 12-12 12 12"
                }), (0,
                t.jsx)(S, {
                    d: "M61 185h118"
                })]
            })
        })
    }
    e.s(["LessonSelect", 0, function({onBack: e}={}) {
        let p = (0,
        l.useSimStore)(e => e.startLesson)
          , x = (0,
        l.useSimStore)(e => e.closeLessons)
          , f = (0,
        l.useSimStore)(e => e.completedLessonIds)
          , g = (0,
        l.useSimStore)(o.lentSquadDrone)
          , j = (0,
        l.useSimStore)(o.ownDrone)
          , b = (0,
        d.useMatchmaking)(d.queueLockLine);
        (0,
        l.useSimStore)(e => e.isAdmin),
        (0,
        l.useSimStore)(e => e.lessonAuthoringEpoch);
        let v = new Set(f)
          , S = (0,
        n.listCourses)().filter(e => (0,
        a.isVisibleToViewer)(e.isDraft)).map(e => ({
            ...e,
            lessons: e.lessonIds.map(i.lessonById).filter(e => null !== e)
        })).filter(e => e.lessons.length > 0)
          , y = S.flatMap(e => e.lessons).find(e => !v.has(e.id))
          , [k,C] = (0,
        s.useState)( () => y?.id ?? S[0]?.lessons[0]?.id)
          , N = S.find(e => e.lessons.some(e => e.id === k)) ?? S[0]
          , A = N?.lessons.find(e => e.id === k) ?? N?.lessons[0]
          , E = (0,
        s.useId)();
        return (0,
        t.jsxs)("section", {
            className: "fd-page fd-lessons fdk-screen fdk-on-chalk",
            "aria-labelledby": `${E}-title`,
            children: [(0,
            t.jsxs)(h.TextLink, {
                autoFocus: !0,
                className: "fd-lessons-back",
                onClick: e ?? x,
                children: [(0,
                t.jsx)(m.Icon, {
                    name: "arrow-left",
                    size: 24
                }), " Back to Play"]
            }), (0,
            t.jsx)("h1", {
                id: `${E}-title`,
                className: "fd-lessons-title",
                children: "Lessons"
            }), N && (0,
            t.jsx)(u.Tabs, {
                label: "Lesson chapters",
                idBase: `${E}-chapter`,
                className: "fd-lessons-chapters",
                value: N.id,
                onChange: e => {
                    let t = S.find(t => t.id === e);
                    t && C((t.lessons.find(e => !v.has(e.id)) ?? t.lessons[0]).id)
                }
                ,
                items: S.map(e => ({
                    value: e.id,
                    label: e.name,
                    count: (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                        t.jsx)("span", {
                            className: "fdk-sr",
                            children: "Completed "
                        }), e.lessons.filter(e => v.has(e.id)).length, "/", e.lessons.length]
                    })
                }))
            }), A && N ? (0,
            t.jsx)(u.TabPanel, {
                idBase: `${E}-chapter`,
                value: N.id,
                children: (0,
                t.jsx)("ol", {
                    className: "fd-lessons-list",
                    children: N.lessons.map( (e, s) => {
                        let a = e.id === A.id
                          , i = v.has(e.id);
                        return (0,
                        t.jsxs)("li", {
                            className: `fd-lessons-row${a ? " fdk-on-ink" : ""}`,
                            "data-selected": a,
                            children: [(0,
                            t.jsxs)("button", {
                                type: "button",
                                className: "fd-lessons-select",
                                "aria-expanded": a,
                                "aria-controls": a ? `${E}-detail-${e.id}` : void 0,
                                onClick: () => C(e.id),
                                children: [(0,
                                t.jsx)("span", {
                                    className: "fd-lessons-number",
                                    "aria-hidden": !0,
                                    children: String(s + 1).padStart(2, "0")
                                }), (0,
                                t.jsx)("span", {
                                    className: "fd-lessons-name",
                                    children: e.name
                                }), i && (0,
                                t.jsxs)("span", {
                                    className: "fd-lessons-check",
                                    children: [(0,
                                    t.jsx)(m.Icon, {
                                        name: "check",
                                        size: 24
                                    }), (0,
                                    t.jsx)("span", {
                                        className: "sr-only",
                                        children: "Completed"
                                    })]
                                }), (0,
                                t.jsx)(m.Icon, {
                                    name: "chevron-right",
                                    className: "fd-lessons-chevron",
                                    size: 24
                                })]
                            }), a && (0,
                            t.jsxs)("div", {
                                id: `${E}-detail-${e.id}`,
                                className: "fd-lessons-detail",
                                children: [(0,
                                t.jsxs)("div", {
                                    className: "fd-lessons-detail-copy",
                                    children: [(0,
                                    t.jsx)("p", {
                                        children: e.practice.instruction
                                    }), g && (0,
                                    t.jsxs)("p", {
                                        className: "fd-lessons-drone",
                                        role: "note",
                                        children: ["Lessons fly your own drone: the ", r.DRONES[j].name, ". The squad's ", r.DRONES[g].name, " is lent in its lobby."]
                                    }), b && (0,
                                    t.jsx)("p", {
                                        className: "fd-lessons-drone",
                                        role: "status",
                                        children: b
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "fd-lessons-actions",
                                        children: [(0,
                                        t.jsx)(c.Button, {
                                            tone: "primary",
                                            className: "fd-lessons-start",
                                            disabled: !!b,
                                            title: b ?? void 0,
                                            trailingIcon: (0,
                                            t.jsx)(m.Icon, {
                                                name: "arrow-right",
                                                size: 24
                                            }),
                                            onClick: () => p(e.id),
                                            children: i ? "Replay lesson" : "Start lesson"
                                        }), i && (0,
                                        t.jsx)(h.TextLink, {
                                            className: "fd-lessons-practice",
                                            disabled: !!b,
                                            title: b ?? void 0,
                                            onClick: async () => {
                                                await p(e.id) && l.useSimStore.getState().startLessonPractice()
                                            }
                                            ,
                                            children: "Practice only"
                                        })]
                                    })]
                                }), (0,
                                t.jsx)(w, {
                                    lessonId: e.id,
                                    name: e.name,
                                    decorative: !0,
                                    className: "fd-lessons-art"
                                })]
                            })]
                        }, e.id)
                    }
                    )
                })
            }) : (0,
            t.jsx)("p", {
                className: "fd-page-status",
                children: "No lessons available."
            })]
        })
    }
    ], 72606);
    var C = e.i(849022);
    e.s(["ProfilePanel", 0, function({embedded: e=!1, onBack: s, onChallenges: a}={}) {
        let i = (0,
        l.useSimStore)(e => e.playerAccountId)
          , n = (0,
        l.useSimStore)(e => e.closeProfile);
        return e ? (0,
        t.jsxs)("div", {
            className: "fd-profile-page",
            children: [(0,
            t.jsx)(C.PilotProfileDialog, {
                id: i,
                ownProfile: !0,
                embedded: !0,
                onClose: s ?? n
            }, i ?? "local"), (0,
            t.jsxs)("footer", {
                className: "fd-profile-page-footer",
                children: [(0,
                t.jsx)(c.Button, {
                    size: "sm",
                    tone: "ghost",
                    icon: (0,
                    t.jsx)(m.Icon, {
                        name: "arrow-left",
                        size: 18
                    }),
                    onClick: s ?? n,
                    children: "Back to Play"
                }), a && (0,
                t.jsx)(c.Button, {
                    size: "sm",
                    tone: "ghost",
                    icon: (0,
                    t.jsx)(m.Icon, {
                        name: "trophy",
                        size: 18
                    }),
                    onClick: a,
                    children: "Challenges"
                })]
            })]
        }) : (0,
        t.jsx)(C.PilotProfileDialog, {
            id: i,
            ownProfile: !0,
            onClose: s ?? n
        }, i ?? "local")
    }
    ], 854693);
    var N = e.i(761321);
    let A = {
        shell: .3,
        accent: .5,
        props: .2
    };
    function E(e) {
        return e && /^#[\da-f]{6}$/i.test(e) ? [1, 3, 5].map(t => parseInt(e.slice(t, t + 2), 16) / 255) : null
    }
    function L(e, t=4) {
        let s = Math.max(0, Math.floor(t));
        if (!s)
            return [];
        let a = new Set
          , i = e.filter(e => !a.has(e.item.id) && (a.add(e.item.id),
        !0))
          , n = [...i.filter(e => e.item.featured), ...i.filter(e => !e.item.featured)]
          , r = new Set;
        for (let e of n) {
            if (r.size >= s)
                break;
            [...r].some(t => (function(e, t) {
                if (e.category !== t.category)
                    return !1;
                let s = "colorways" === e.category ? A : Object.fromEntries([...new Set([...Object.keys(e.colors), ...Object.keys(t.colors)])].filter(e => "background" !== e).map(e => [e, 1]))
                  , a = 0
                  , i = 0;
                for (let[n,r] of Object.entries(s)) {
                    let s = E(e.colors[n])
                      , l = E(t.colors[n]);
                    if (!s || !l)
                        return !1;
                    a += Math.hypot(...s.map( (e, t) => e - l[t])) / Math.sqrt(3) * r,
                    i += r
                }
                return i > 0 && a / i < .18
            }
            )(e.item, t.item)) || r.add(e)
        }
        for (let e of n) {
            if (r.size >= s)
                break;
            r.add(e)
        }
        return n.filter(e => r.has(e))
    }
    var M = e.i(282524)
      , I = e.i(516727)
      , R = e.i(619455)
      , T = e.i(572349)
      , B = e.i(468630)
      , P = e.i(497590)
      , $ = e.i(624834)
      , D = e.i(4853);
    function z({title: e="Storefront", featured: s=!1}) {
        return (0,
        t.jsxs)("div", {
            className: "fd-shop-loading fdk-screen",
            children: [!s && (0,
            t.jsx)("header", {
                className: "fd-store-collection-heading",
                children: (0,
                t.jsx)(h.SectionHeading, {
                    size: "lg",
                    children: e
                })
            }), (0,
            t.jsx)($.LoadingState, {
                title: (0,
                t.jsxs)(t.Fragment, {
                    children: ["Getting the shop ready", (0,
                    t.jsx)("span", {
                        "aria-hidden": "true",
                        children: "…"
                    })]
                })
            }), (0,
            t.jsxs)("div", {
                className: "fd-shop-skeleton",
                "aria-hidden": "true",
                children: [s && (0,
                t.jsxs)("div", {
                    className: "fd-shop-skeleton-feature",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "fd-shop-skeleton-copy",
                        children: [(0,
                        t.jsx)("i", {}), (0,
                        t.jsx)("i", {})]
                    }), (0,
                    t.jsxs)("div", {
                        className: "fd-shop-skeleton-orbit",
                        children: [(0,
                        t.jsx)("span", {}), (0,
                        t.jsx)("span", {})]
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "fd-shop-skeleton-heading"
                }), (0,
                t.jsx)(D.StoreGrid, {
                    children: Array.from({
                        length: 4
                    }, (e, s) => (0,
                    t.jsxs)("div", {
                        className: "fd-shop-skeleton-card",
                        children: [(0,
                        t.jsx)("div", {
                            className: "fd-shop-skeleton-art"
                        }), (0,
                        t.jsxs)("div", {
                            className: "fd-shop-skeleton-label",
                            children: [(0,
                            t.jsx)("i", {}), (0,
                            t.jsx)("i", {})]
                        })]
                    }, s))
                })]
            })]
        })
    }
    function F({onRetry: e}) {
        return (0,
        t.jsxs)("div", {
            className: "fd-shop-load-error fdk-screen",
            children: [(0,
            t.jsx)("span", {
                className: "fd-shop-load-error-mark",
                "aria-hidden": "true",
                children: (0,
                t.jsx)(m.Icon, {
                    name: "rotate",
                    size: 25
                })
            }), (0,
            t.jsxs)("div", {
                role: "alert",
                children: [(0,
                t.jsx)("h2", {
                    children: "Shop unavailable"
                }), (0,
                t.jsx)("p", {
                    children: "We couldn’t load the shop. Try again."
                })]
            }), (0,
            t.jsx)(c.Button, {
                tone: "primary",
                size: "sm",
                onClick: e,
                trailingIcon: (0,
                t.jsx)(m.Icon, {
                    name: "arrow-right",
                    size: 24
                }),
                children: "Try again"
            })]
        })
    }
    var _ = e.i(326999)
      , O = e.i(71008)
      , H = e.i(894969)
      , G = e.i(468136)
      , q = e.i(33156)
      , U = e.i(664384)
      , K = e.i(209003)
      , W = e.i(995040)
      , V = e.i(15221)
      , Y = e.i(322543)
      , Q = e.i(993287);
    let Z = [{
        id: "featured",
        name: "Storefront",
        icon: "sparkles"
    }, {
        id: "colorways",
        name: "Drone skins",
        icon: "paintbrush"
    }, {
        id: "environments",
        name: "World themes",
        icon: "mountain"
    }, {
        id: "boosters",
        name: "Boosters",
        icon: "zap"
    }]
      , X = {
        colorways: {
            title: "Drone skins"
        },
        environments: {
            title: "World themes"
        }
    };
    function J(e) {
        return {
            item: e,
            id: e.id,
            name: "colorways" === e.category ? `${e.name} Pack` : e.name,
            category: e.category,
            label: "colorways" === e.category ? `All ${r.DRONE_IDS.length} flight drones` : O.CATEGORY_LABELS[e.category],
            price: e.price,
            color: e.colors.accent ?? e.colors.glow ?? e.colors.body ?? p.PALETTE.orange,
            description: e.description,
            detail: e.description,
            tag: e.featured ? "Featured" : void 0
        }
    }
    function ee({amount: e}) {
        return (0,
        t.jsxs)("span", {
            className: "fd-store-price",
            "aria-label": `${e.toLocaleString("en-US")} credits`,
            children: [(0,
            t.jsx)(q.CreditsGlyph, {
                size: 24
            }), e.toLocaleString("en-US")]
        })
    }
    function et(e) {
        return [...e.parts_price ? [{
            currency: "parts",
            amount: e.parts_price
        }] : [], ..."credits" === e.access_type ? [{
            currency: "credits",
            amount: e.price
        }] : []]
    }
    function es({product: e, hero: a=!1, previewDrone: i}) {
        let n = (0,
        s.useRef)(null)
          , [r,l] = (0,
        s.useState)(!1);
        return (0,
        s.useEffect)( () => {
            let e = new IntersectionObserver(t => {
                t.some(e => e.isIntersecting) && (l(!0),
                e.disconnect())
            }
            ,{
                rootMargin: "100px"
            });
            return n.current && e.observe(n.current),
            () => e.disconnect()
        }
        , []),
        (0,
        t.jsx)("div", {
            ref: n,
            style: {
                position: "absolute",
                inset: 0
            },
            children: r || a ? (0,
            t.jsx)(Q.default, {
                item: e.item,
                subduedLighting: "colorways" === e.category && "og" === e.item.name.trim().toLowerCase(),
                interactive: a,
                cardArt: !a && "colorways" === e.category,
                presentation: "studio",
                previewDrone: i
            }) : null
        })
    }
    function ea({product: e, onSelect: s, heroDrone: a}) {
        let i = (0,
        H.useInventory)(t => t.items.some(t => t.id === e.id))
          , n = et(e.item)
          , r = (0,
        N.editorialArtwork)(e.item, "environments" === e.category ? "world" : "fleet")
          , l = r ? r.width / r.height : 1.5;
        return (0,
        t.jsx)(D.StoreCard, {
            artAspectRatio: l,
            className: "fd-store-product-card",
            name: e.name,
            label: e.label,
            rarity: e.item.rarity ?? "uncommon",
            "aria-label": `Preview ${e.name}, ${V.RARITY_LABELS[e.item.rarity ?? "uncommon"]}, ${e.label}, ${"included" === e.item.access_type ? "included" : i ? "owned" : n.map(e => `${e.amount} ${"parts" === e.currency ? "Parts" : "credits"}`).join(" or ")}`,
            onClick: s,
            art: (0,
            t.jsx)(es, {
                product: e,
                previewDrone: a
            }),
            price: "included" === e.item.access_type ? "Included" : i ? null : (0,
            t.jsx)(G.CardPrice, {
                options: n
            })
        })
    }
    function ei({product: e, currency: s, onCurrency: a, owned: i, onError: n, onClose: r}) {
        let l = (0,
        H.useInventory)()
          , o = e.item
          , d = et(o)
          , u = d.find(e => e.currency === s) ?? d[0]
          , h = u?.currency === "parts" ? l.parts : l.balance
          , p = u && null !== h ? Math.max(0, u.amount - h) : 0
          , x = u?.currency === "parts" ? "Parts" : "credits"
          , f = d.length > 1;
        async function g() {
            if (u) {
                if (n(""),
                (0,
                T.trackShopEvent)("purchase_attempt", {
                    kind: "item",
                    key: e.id
                }),
                p > 0 && "credits" === u.currency) {
                    (0,
                    T.trackShopEvent)("insufficient_credits", {
                        kind: "item",
                        key: e.id
                    }),
                    R.useCreditShop.getState().open({
                        item: o
                    }),
                    r();
                    return
                }
                n(await l.purchase(o, u.currency) ?? "")
            }
        }
        let j = i ? "Ready to equip in Gear." : "ready" !== l.status ? "Your balance is unavailable. Try again." : p > 0 ? `You need ${p.toLocaleString("en-US")} more ${x}.${u?.currency === "parts" ? " Parts are earned by playing." : ""}` : u?.currency === "parts" ? "Parts are earned by playing." : "";
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsxs)("div", {
                className: `fd-store-modal-purchase${f ? " fd-store-modal-purchase--choice" : ""}`,
                children: [(0,
                t.jsxs)("div", {
                    children: ["colorways" === e.category && (0,
                    t.jsx)("span", {
                        className: "fd-store-purchase-eyebrow",
                        children: "Unlocks the colorway for every drone"
                    }), "included" === o.access_type ? (0,
                    t.jsx)("span", {
                        className: "fd-store-price",
                        children: "Included by default"
                    }) : f && !i ? (0,
                    t.jsx)(U.PaymentChoice, {
                        name: `currency-${o.id}`,
                        options: d,
                        value: u.currency,
                        onChange: a,
                        disabled: l.purchasing
                    }) : u && (0,
                    t.jsx)(ee, {
                        amount: u.amount
                    })]
                }), u && "included" !== o.access_type && (0,
                t.jsx)(c.Button, {
                    tone: "primary",
                    size: f ? "lg" : "md",
                    block: f,
                    className: "fd-store-buy",
                    onClick: () => void g(),
                    disabled: i || "ready" !== l.status || l.purchasing || p > 0 && "parts" === u.currency,
                    trailingIcon: (0,
                    t.jsx)(m.Icon, {
                        name: "arrow-right",
                        size: 24
                    }),
                    children: i ? "Owned" : l.purchasing ? "Purchasing…" : "ready" !== l.status ? "Balance unavailable" : p > 0 && "credits" === u.currency ? "Get Credits" : 0 === u.amount ? "Claim free" : f ? (0,
                    U.buyLabel)(u) : "Unlock"
                })]
            }), (0,
            t.jsx)("small", {
                role: "status",
                children: j
            }), "error" === l.status && (0,
            t.jsx)(c.Button, {
                size: "sm",
                tone: "ghost",
                onClick: () => void l.refresh(),
                children: "Retry balance"
            })]
        })
    }
    e.s(["ShopPanel", 0, function({onGear: e, initialCategory: a="featured", initialItemId: i, initialBooster: n, initialPreviewDrone: l}) {
        let o = (0,
        H.useInventory)()
          , [d,p] = (0,
        s.useState)("")
          , x = e => "included" === e.item.access_type || o.items.some(t => t.id === e.id)
          , [f,g] = (0,
        s.useState)([])
          , [j,b] = (0,
        s.useState)("loading")
          , [v,S] = (0,
        s.useState)()
          , [y,k] = (0,
        s.useState)(0)
          , [w,C] = (0,
        s.useState)(a)
          , [N,A] = (0,
        s.useState)(null)
          , [E,G] = (0,
        s.useState)(!1)
          , [q,U] = (0,
        s.useState)("freestyle")
          , [Q,ee] = (0,
        s.useState)("parts")
          , et = (0,
        Y.useSkinHeroVisit)();
        (0,
        s.useEffect)( () => {
            let e = new AbortController
              , t = AbortSignal.any([e.signal, AbortSignal.timeout(15e3)]);
            async function s(e) {
                let s = await fetch(e, {
                    signal: t,
                    cache: "no-store"
                });
                if (!s.ok)
                    throw Error("Shop unavailable");
                return s.json()
            }
            return Promise.all([s("/api/shop"), s("/api/shop/checkout")]).then( ([t,s]) => {
                if (e.signal.aborted)
                    return;
                let a = t.items.filter(e => "credits" === e.access_type).map(J);
                if (g(a),
                S(s),
                i) {
                    let e = a.find(e => e.id === i);
                    e && (eo(e, document.querySelector(".sim-shell"), !0),
                    U(l ?? e.item.drone ?? "freestyle"))
                }
                b("ready")
            }
            ).catch( () => {
                e.signal.aborted || (b("error"),
                e.abort())
            }
            ),
            () => e.abort()
        }
        , [y, i, l]);
        let en = (0,
        s.useRef)(null)
          , [er,el] = (0,
        s.useState)("Impact");
        function eo(e, t, s=!1) {
            x(e) || "credits" !== e.item.access_type || (0,
            T.trackShopEvent)("offer_view", {
                kind: "item",
                key: e.id
            }),
            en.current = s ? null : t,
            t && el(getComputedStyle(t).getPropertyValue("--font-sim-display") || "Impact"),
            p(""),
            U(e.item.drone ?? "freestyle"),
            ee(e.item.parts_price ? "parts" : "credits"),
            A(e)
        }
        function ed(e) {
            eo(e, document.activeElement)
        }
        let ec = [...f].sort( (e, t) => {
            let s = V.ALL_RARITIES.indexOf(e.item.rarity ?? "uncommon") - V.ALL_RARITIES.indexOf(t.item.rarity ?? "uncommon");
            return (E ? -s : s) || (0,
            O.compareGearOrder)(e.item, t.item)
        }
        )
          , eu = ec.filter(e => e.category === w)
          , eh = ec.filter(e => "colorways" === e.category)
          , em = L(eh, 4)
          , ep = ec.filter(e => "environments" === e.category)
          , ex = (0,
        t.jsx)(c.IconButton, {
            label: E ? "Rarity: highest first. Switch to lowest first" : "Rarity: lowest first. Switch to highest first",
            pressed: E,
            tone: E ? "secondary" : "plain",
            onClick: () => G(e => !e),
            icon: E ? (0,
            t.jsx)(m.Icon, {
                name: "sort-down",
                size: 20
            }) : (0,
            t.jsx)(m.Icon, {
                name: "sort-up",
                size: 20
            })
        });
        function ef(e) {
            C(e),
            document.querySelector(".fd-menu-content")?.scrollTo({
                top: 0
            })
        }
        let eg = "history" !== w;
        return (0,
        t.jsxs)("section", {
            className: "fd-store fdk-screen",
            "aria-labelledby": "shop-heading",
            children: [(0,
            t.jsx)(W.Banner, {
                className: "fd-store-banner",
                children: "All purchases carry over to Steam and support the development of Flight Division."
            }), (0,
            t.jsxs)("aside", {
                className: "fd-store-sidebar",
                children: [(0,
                t.jsx)(h.SectionHeading, {
                    as: "h1",
                    size: "lg",
                    id: "shop-heading",
                    className: "fd-store-title",
                    children: "Shop"
                }), (0,
                t.jsx)(u.SideRail, {
                    label: "Shop categories",
                    plain: !0,
                    idBase: "fd-store",
                    activation: "manual",
                    className: "fd-store-categories",
                    value: w,
                    onChange: ef,
                    items: Z.map( ({id: e, name: s, icon: a}) => ({
                        value: e,
                        label: s,
                        icon: (0,
                        t.jsx)(m.Icon, {
                            name: a,
                            size: 20,
                            strokeWidth: 1.7
                        })
                    }))
                }), (0,
                t.jsx)(c.Button, {
                    size: "sm",
                    tone: "secondary",
                    className: "fd-store-credits",
                    icon: (0,
                    t.jsx)(m.Icon, {
                        name: "plus",
                        size: 15
                    }),
                    onClick: () => R.useCreditShop.getState().open(),
                    children: "Get Credits"
                }), (0,
                t.jsxs)(h.TextLink, {
                    className: "fd-store-orders",
                    "aria-pressed": "history" === w,
                    onClick: () => ef("history"),
                    children: [(0,
                    t.jsx)(m.Icon, {
                        name: "receipt",
                        size: 15
                    }), " Your orders"]
                })]
            }), (0,
            t.jsx)("div", {
                className: "fd-store-content",
                "aria-busy": "history" !== w && "loading" === j,
                ...eg ? {
                    id: (0,
                    u.panelId)("fd-store", w),
                    role: "tabpanel",
                    "aria-labelledby": (0,
                    u.tabId)("fd-store", w)
                } : {},
                children: "history" === w ? (0,
                t.jsx)(P.PurchaseHistory, {}) : "loading" === j ? (0,
                t.jsx)(z, {
                    title: "boosters" === w ? "Boosters" : X[w]?.title.replace(/\.$/, "") ?? "Storefront",
                    featured: "featured" === w
                }) : "error" === j ? (0,
                t.jsx)(F, {
                    onRetry: () => {
                        b("loading"),
                        k(e => e + 1)
                    }
                }) : "boosters" === w ? (0,
                t.jsx)(I.BoosterPanel, {
                    mode: "shop",
                    onGear: e,
                    initialBooster: n
                }) : (0,
                t.jsxs)(t.Fragment, {
                    children: ["featured" === w && (0,
                    t.jsx)(B.CashCheckout, {
                        heroPicker: et,
                        packsOnly: !0,
                        featured: !0,
                        compactPacks: !0,
                        initialConfig: v
                    }), "featured" !== w && (0,
                    t.jsx)("header", {
                        className: "fd-store-collection-heading",
                        children: (0,
                        t.jsx)(h.SectionHeading, {
                            size: "lg",
                            action: ex,
                            children: X[w]?.title.replace(/\.$/, "")
                        })
                    }), "ready" === j && "featured" !== w && !eu.length && (0,
                    t.jsx)($.EmptyState, {
                        title: "Nothing here yet.",
                        children: "Check back for the next drop."
                    }), "featured" !== w && (0,
                    t.jsx)("section", {
                        className: "fd-store-shelf",
                        "aria-label": Z.find(e => e.id === w)?.name,
                        children: (0,
                        t.jsx)(D.StoreGrid, {
                            children: eu.map(e => (0,
                            t.jsx)(ea, {
                                product: e,
                                heroDrone: et(e.id, e.price),
                                onSelect: () => ed(e)
                            }, e.id))
                        })
                    }), "featured" === w && eh.length > 0 && (0,
                    t.jsxs)("section", {
                        className: "fd-store-shelf",
                        "aria-labelledby": "store-skins-heading",
                        children: [(0,
                        t.jsxs)("header", {
                            children: [(0,
                            t.jsxs)("div", {
                                className: "fd-store-shelf-title",
                                children: [(0,
                                t.jsx)(h.SectionHeading, {
                                    id: "store-skins-heading",
                                    children: "Drone skins"
                                }), (0,
                                t.jsx)("span", {
                                    children: "One colourway. All 5 flight drones."
                                })]
                            }), (0,
                            t.jsx)(h.TextLink, {
                                trailingIcon: (0,
                                t.jsx)(m.Icon, {
                                    name: "arrow-right",
                                    size: 24
                                }),
                                onClick: () => ef("colorways"),
                                children: "All drone skins"
                            })]
                        }), (0,
                        t.jsx)(D.StoreGrid, {
                            showcase: !0,
                            children: em.map(e => (0,
                            t.jsx)(ea, {
                                product: e,
                                heroDrone: et(e.id, e.price),
                                onSelect: () => ed(e)
                            }, e.id))
                        })]
                    }), "featured" === w && ep.length > 0 && (0,
                    t.jsxs)("section", {
                        className: "fd-store-shelf fd-store-palette-shelf",
                        "aria-labelledby": "store-palettes-heading",
                        children: [(0,
                        t.jsxs)("header", {
                            children: [(0,
                            t.jsxs)("div", {
                                className: "fd-store-shelf-title",
                                children: [(0,
                                t.jsx)(h.SectionHeading, {
                                    id: "store-palettes-heading",
                                    children: "World themes"
                                }), (0,
                                t.jsx)("span", {
                                    children: "Same world. A new atmosphere."
                                })]
                            }), (0,
                            t.jsx)(h.TextLink, {
                                trailingIcon: (0,
                                t.jsx)(m.Icon, {
                                    name: "arrow-right",
                                    size: 24
                                }),
                                onClick: () => ef("environments"),
                                children: "Explore themes"
                            })]
                        }), (0,
                        t.jsx)(D.StoreGrid, {
                            showcase: !0,
                            children: L(ep, 4).map(e => (0,
                            t.jsx)(ea, {
                                product: e,
                                heroDrone: et(e.id, e.price),
                                onSelect: () => ed(e)
                            }, e.id))
                        })]
                    }), "featured" === w && (0,
                    t.jsx)(I.BoosterPanel, {
                        mode: "shop",
                        onGear: e,
                        compact: !0
                    })]
                })
            }), (0,
            t.jsx)(_.Root, {
                open: null !== N,
                onOpenChange: e => {
                    e || A(null)
                }
                ,
                children: (0,
                t.jsxs)(_.Portal, {
                    children: [(0,
                    t.jsx)(_.Overlay, {
                        className: "fd-store-modal-overlay"
                    }), (0,
                    t.jsx)(_.Content, {
                        className: "fd-store-modal-frame",
                        onCloseAutoFocus: e => {
                            e.preventDefault(),
                            function() {
                                if (en.current)
                                    return en.current.focus();
                                let e = document.getElementById("shop-heading");
                                e?.setAttribute("tabindex", "-1"),
                                e?.focus()
                            }()
                        }
                        ,
                        style: N ? {
                            "--product-color": N.color,
                            "--font-sim-display": er
                        } : void 0,
                        children: (0,
                        t.jsx)(h.Panel, {
                            flush: !0,
                            className: `fd-store-modal${N?.category === "environments" ? " fd-store-modal--world" : ""}`,
                            children: N && (0,
                            t.jsxs)(t.Fragment, {
                                children: [(0,
                                t.jsxs)("div", {
                                    className: `fd-store-modal-art fd-store-modal-art--${N.category} fdk-on-ink`,
                                    children: [(0,
                                    t.jsx)(es, {
                                        product: N,
                                        hero: !0,
                                        previewDrone: q
                                    }), "environments" !== N.category && (0,
                                    t.jsx)(M.OrbitHint, {
                                        placement: "bottom-right-above-overlay"
                                    }), "colorways" === N.category && (0,
                                    t.jsx)(u.Segmented, {
                                        label: "Preview on a drone",
                                        size: "sm",
                                        className: "fd-store-airframes",
                                        value: q,
                                        onChange: U,
                                        options: r.DRONE_IDS.map(e => ({
                                            value: e,
                                            label: r.DRONES[e].name
                                        }))
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "fd-store-modal-copy",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "fd-store-modal-rarity",
                                        children: (0,
                                        t.jsx)(K.RarityBadge, {
                                            rarity: N.item.rarity
                                        })
                                    }), (0,
                                    t.jsx)(_.Title, {
                                        children: N.name
                                    }), (0,
                                    t.jsx)(_.Description, {
                                        className: N.detail ? void 0 : "sr-only",
                                        children: N.detail || N.label
                                    }), "environments" === N.category && (0,
                                    t.jsx)("div", {
                                        className: "fd-world-palette",
                                        "aria-label": "Theme palette",
                                        children: Object.entries(O.COLOR_FIELDS.environments).filter( ([e]) => "sky" !== e).map( ([e,s]) => (0,
                                        t.jsxs)("span", {
                                            children: [(0,
                                            t.jsx)("i", {
                                                style: {
                                                    background: N.item.colors[e]
                                                }
                                            }), (0,
                                            t.jsx)("small", {
                                                children: s
                                            })]
                                        }, e))
                                    }), (0,
                                    t.jsx)(ei, {
                                        product: N,
                                        currency: Q,
                                        onCurrency: ee,
                                        owned: x(N),
                                        onError: p,
                                        onClose: () => A(null)
                                    }), d && (0,
                                    t.jsx)("p", {
                                        role: "alert",
                                        children: d
                                    })]
                                }), (0,
                                t.jsx)("span", {
                                    className: "fd-store-modal-close",
                                    children: (0,
                                    t.jsx)(c.IconButton, {
                                        label: "Close item",
                                        icon: (0,
                                        t.jsx)(m.Icon, {
                                            name: "close",
                                            size: 20
                                        }),
                                        onClick: () => A(null)
                                    })
                                })]
                            })
                        })
                    })]
                })
            })]
        })
    }
    ], 929618);
    var en = e.i(920755);
    e.s(["LivePlayerCount", 0, function() {
        let[e,a] = (0,
        s.useState)(null)
          , [i,n] = (0,
        s.useState)(!1);
        return (0,
        s.useEffect)( () => {
            let e = (0,
            en.createClient)()
              , t = !1
              , s = !1
              , i = async () => {
                if (!s && "visible" === document.visibilityState) {
                    s = !0;
                    try {
                        let {data: s, error: i} = await e.rpc("sim_live_player_count")
                          , r = !i && "number" == typeof s && Number.isSafeInteger(s) && s >= 0;
                        t || (n(!r),
                        a(r ? s : null))
                    } catch {
                        t || (n(!0),
                        a(null))
                    } finally {
                        s = !1
                    }
                }
            }
            ;
            i();
            let r = window.setInterval(i, 3e4);
            return document.addEventListener("visibilitychange", i),
            () => {
                t = !0,
                window.clearInterval(r),
                document.removeEventListener("visibilitychange", i)
            }
        }
        , []),
        (0,
        t.jsxs)("span", {
            className: `fd-live-players${null !== e && e > 0 ? " is-live" : ""}`,
            role: "status",
            title: "Players in the simulator, including menus, seen in the last 90 seconds. Refreshes every 30 seconds.",
            children: [(0,
            t.jsx)("span", {
                className: "fd-live-players-dot",
                "aria-hidden": "true"
            }), (0,
            t.jsx)("span", {
                children: i ? "Live count unavailable" : null === e ? "Checking live players…" : `${e.toLocaleString()} ${1 === e ? "player" : "players"} flying now`
            })]
        })
    }
    ], 198132);
    var er = e.i(720996)
      , el = e.i(953528)
      , eo = e.i(883620)
      , ed = e.i(346944)
      , ec = e.i(532116)
      , eu = e.i(811113);
    let eh = [{
        id: "controls",
        label: "Controls"
    }, {
        id: "rates",
        label: "Rates"
    }, {
        id: "camera",
        label: "Camera & HUD"
    }, {
        id: "video",
        label: "Video"
    }, {
        id: "audio",
        label: "Audio"
    }, {
        id: "accessibility",
        label: "Accessibility"
    }];
    function em(e) {
        return eh.find(t => t.id === e)?.label ?? "Settings"
    }
    let ep = [{
        tab: "controls",
        label: "Input device",
        description: "Choose the controller or keyboard you fly with.",
        target: "set-device",
        terms: ["controller", "gamepad", "radio", "transmitter", "joystick", "keyboard", "xbox", "playstation", "usb"]
    }, {
        tab: "controls",
        label: "Calibrate",
        description: "Teach the sim your sticks and their range.",
        target: "set-calibrate",
        action: "calibrate",
        terms: ["calibration", "endpoints", "center", "range", "setup"]
    }, {
        tab: "controls",
        label: "Stick layout",
        description: "Which stick controls each movement.",
        target: "set-stick-layout",
        terms: ["mode", "mode 1", "mode 2", "mode 3", "mode 4", "gimbal", "layout", "throttle left", "throttle right"]
    }, {
        tab: "controls",
        label: "Live input",
        description: "Test your sticks without flying.",
        target: "set-live-input",
        terms: ["test", "meter", "channels", "input"]
    }, {
        tab: "controls",
        label: "Arm / disarm button",
        description: "Bind and choose toggle or switch arming.",
        target: "set-bind-arm",
        terms: ["arm", "disarm", "rt", "r2", "trigger", "switch", "toggle", "bind", "keyboard", "key", "space"]
    }, {
        tab: "controls",
        label: "Respawn button",
        description: "Reset your drone at the last checkpoint.",
        target: "set-bind-respawn",
        terms: ["respawn", "reset", "restart", "r", "bind", "keyboard", "key"]
    }, {
        tab: "controls",
        label: "Drone wheel button",
        description: "Open drone selection.",
        target: "set-bind-droneWheel",
        terms: ["drone wheel", "wheel", "lb", "tab", "swap drone", "keyboard", "key"]
    }, {
        tab: "controls",
        label: "Interact button",
        description: "Fire the gun in Team Deathmatch.",
        target: "set-bind-interact",
        terms: ["interact", "fire", "shoot", "gun", "trigger", "team deathmatch", "e", "switch", "keyboard", "key"]
    }, {
        tab: "controls",
        label: "Controller rumble",
        description: "Feedback for shots, hits and KOs.",
        target: "set-rumble-switch",
        terms: ["rumble", "haptics", "vibration", "feedback"]
    }, {
        tab: "controls",
        label: "Auto-arm at flight start",
        description: "Arm when a new flight starts.",
        target: "set-auto-arm",
        terms: ["arm", "auto arm", "armed", "start", "flight"]
    }, {
        tab: "controls",
        label: "Invert axes",
        description: "Reverse an axis that moves the wrong way.",
        target: "set-invert",
        terms: ["invert", "reverse", "swap", "direction", "inverted"]
    }, {
        tab: "controls",
        label: "Dead zone",
        description: "Ignore small movements around center.",
        target: "set-deadzone",
        terms: ["deadband", "dead zone", "deadzone", "drift"]
    }, {
        tab: "controls",
        label: "Throttle travel",
        description: "Full stick or center to top.",
        target: "set-throttle-travel",
        terms: ["throttle", "half throttle", "center to top", "travel"]
    }, {
        tab: "controls",
        label: "Physical throttle stick",
        description: "Stays where released or springs to center.",
        target: "set-throttle-stick",
        terms: ["springs", "self centering", "spring", "ratchet"]
    }, {
        tab: "controls",
        label: "Movement keys",
        description: "The fixed keyboard flight keys.",
        target: "set-keyboard",
        terms: ["keyboard", "keys", "wasd", "arrows", "movement"]
    }, {
        tab: "rates",
        label: "Axis rates",
        description: "Center sensitivity, max rate and expo per axis.",
        target: "set-axis-rates",
        terms: ["rates", "center", "sensitivity", "max rate", "expo", "deg/s", "actual", "betaflight", "roll", "pitch", "yaw"]
    }, {
        tab: "rates",
        label: "Link roll and pitch",
        description: "Edit both axes together.",
        target: "set-link-rates",
        terms: ["link", "same", "roll pitch"]
    }, {
        tab: "rates",
        label: "Stick response",
        description: "The curve your rates make.",
        target: "set-rate-curve",
        terms: ["curve", "graph", "response"]
    }, {
        tab: "rates",
        label: "Throttle response",
        description: "Throttle midpoint and expo.",
        target: "set-throttle-response",
        terms: ["throttle mid", "midpoint", "throttle expo", "hover"]
    }, {
        tab: "rates",
        subview: "presets",
        label: "Rate presets",
        description: "Built-in and saved rates, import and export.",
        target: "set-presets",
        terms: ["preset", "presets", "cinematic", "freestyle", "racing", "import", "export", "library", "save rates"]
    }, {
        tab: "camera",
        label: "Field of view",
        description: "Wider view shows more of the world.",
        target: "set-fov",
        terms: ["fov", "field of view", "zoom", "wide"]
    }, {
        tab: "camera",
        label: "Camera uptilt",
        description: "Tilt the camera up.",
        target: "set-tilt",
        terms: ["tilt", "uptilt", "angle", "camera angle"]
    }, {
        tab: "camera",
        label: "Lens",
        description: "How fisheye the FPV camera is.",
        target: "set-lens",
        terms: ["fisheye", "lens", "distortion"]
    }, {
        tab: "camera",
        label: "Stick overlay",
        description: "Show stick positions while flying.",
        target: "set-hud-sticks",
        terms: ["sticks", "overlay", "hud", "osd"]
    }, {
        tab: "camera",
        label: "Racing line",
        description: "The route through race gates.",
        target: "set-hud-racing-line",
        terms: ["racing line", "route", "path", "gates"]
    }, {
        tab: "camera",
        label: "Player markers",
        description: "Names, distances and direction.",
        target: "set-hud-players",
        terms: ["players", "names", "markers", "overlay"]
    }, {
        tab: "camera",
        label: "Activity markers",
        description: "Races and Team Deathmatch arenas.",
        target: "set-hud-activities",
        terms: ["activities", "races", "markers", "arenas", "team deathmatch"]
    }, {
        tab: "camera",
        label: "Global chat",
        description: "Show the chat panel.",
        target: "set-hud-chat",
        terms: ["chat", "messages"]
    }, {
        tab: "camera",
        label: "Skill-chain feedback",
        description: "Scores, tricks and multipliers.",
        target: "set-hud-chain",
        terms: ["combo", "score", "chain", "tricks", "multiplier"]
    }, {
        tab: "video",
        label: "Quality preset",
        description: "Adjust many settings at once.",
        target: "set-quality",
        terms: ["graphics", "quality", "low", "medium", "high", "ultra", "preset"]
    }, {
        tab: "video",
        label: "Render scale",
        description: "Internal rendering scale.",
        target: "set-render-scale",
        terms: ["render scale", "resolution", "scale", "pixels", "sharpness", "fps", "performance"]
    }, {
        tab: "video",
        label: "Draw distance",
        description: "How far the world is drawn.",
        target: "set-draw-distance",
        terms: ["draw distance", "fog", "view distance", "far"]
    }, {
        tab: "video",
        label: "Shadows",
        description: "Dynamic shadows.",
        target: "set-shadows",
        terms: ["shadows", "performance"]
    }, {
        tab: "video",
        label: "Post-processing",
        description: "Smooth edges and color grading.",
        target: "set-post",
        terms: ["post processing", "post", "fxaa", "color grading"]
    }, {
        tab: "video",
        label: "Bloom",
        description: "Light glow on gates and the sun.",
        target: "set-bloom",
        terms: ["bloom", "glow"]
    }, {
        tab: "video",
        label: "Anti-aliasing",
        description: "Multisampled edges.",
        target: "set-msaa",
        terms: ["msaa", "anti aliasing", "aa", "jaggies", "edges"]
    }, {
        tab: "video",
        label: "Traffic detail",
        description: "Reduce car effects to improve performance.",
        target: "set-traffic",
        terms: ["cars", "traffic", "vehicles", "performance", "smoke"]
    }, {
        tab: "audio",
        label: "Master volume",
        description: "Overall game volume.",
        target: "set-master-volume",
        terms: ["volume", "sound", "master", "loud", "quiet", "mute"]
    }, {
        tab: "audio",
        label: "Sound mix",
        description: "Motors, wind, world and alerts.",
        target: "set-sound-mix",
        terms: ["mix", "volume", "sound", "balance"]
    }, {
        tab: "audio",
        label: "Drone motors",
        description: "Motor tones and rotor noise.",
        target: "set-audio-motors",
        terms: ["motors", "props", "drone sound", "whine"]
    }, {
        tab: "audio",
        label: "Wind",
        description: "Airspeed and turbulence.",
        target: "set-audio-wind",
        terms: ["wind", "air"]
    }, {
        tab: "audio",
        label: "World & impacts",
        description: "Traffic, rides and collisions.",
        target: "set-audio-world",
        terms: ["cars", "traffic", "crash", "impacts", "coaster"]
    }, {
        tab: "audio",
        label: "Interface & rewards",
        description: "Menu and reward cues.",
        target: "set-audio-interface",
        terms: ["ui", "xp", "rewards", "menu", "combo"]
    }, {
        tab: "audio",
        label: "Race alerts",
        description: "Race warnings and countdowns.",
        target: "set-audio-race",
        terms: ["race", "countdown", "warning", "alerts"]
    }, {
        tab: "audio",
        label: "Mute when in background",
        description: "Quiet when you switch away.",
        target: "set-background-mute",
        terms: ["background", "tab", "mute", "focus"]
    }, {
        tab: "accessibility",
        label: "Motion preference",
        description: "System, reduced or full motion.",
        target: "set-motion",
        terms: ["reduce motion", "reduced motion", "motion", "comfort", "motion sickness", "nausea"]
    }, {
        tab: "accessibility",
        label: "Camera motion",
        description: "How much the camera moves with the drone.",
        target: "set-shake",
        terms: ["shake", "camera shake", "vibration", "motion"]
    }, {
        tab: "accessibility",
        label: "Speed lines",
        description: "Speed lines at high speed.",
        target: "set-speed-lines",
        terms: ["speed lines", "wind strokes", "lines"]
    }, {
        tab: "accessibility",
        label: "Motion blur",
        description: "Subtle blur at high speed.",
        target: "set-motion-blur",
        terms: ["blur", "motion blur"]
    }];
    var ex = e.i(294641)
      , ef = e.i(324280);
    let eg = {
        sky: p.PALETTE.skyEdge,
        orange: p.PALETTE.orange,
        acid: p.PALETTE.acid,
        ink: p.PALETTE.ink
    }
      , ej = {
        throttle: p.PALETTE.chalk,
        roll: p.PALETTE.orange,
        pitch: p.PALETTE.sky,
        yaw: p.PALETTE.acid
    };
    function eb({title: e, info: s, actions: a, children: i, className: n, id: r, tone: l}) {
        return (0,
        t.jsxs)(h.Panel, {
            id: r,
            tone: "dark" === l ? "ink" : "chalk",
            cut: "md",
            className: (0,
            ex.cx)("fd-set-card", n),
            children: [(e || a) && (0,
            t.jsxs)("header", {
                className: "fd-set-card-head",
                children: [(0,
                t.jsxs)("div", {
                    className: "fd-set-card-title",
                    children: [e && (0,
                    t.jsx)(h.SectionHeading, {
                        as: "h3",
                        children: e
                    }), s && "string" == typeof e && (0,
                    t.jsx)(ef.InfoTip, {
                        topic: e,
                        children: s
                    })]
                }), a && (0,
                t.jsx)("div", {
                    className: "fd-set-card-actions",
                    children: a
                })]
            }), i]
        })
    }
    function ev({label: e, info: a, value: i, min: n, max: r, step: l, onChange: o, format: d, id: c, disabled: u}) {
        let h = (0,
        s.useId)()
          , m = c ?? h;
        return (0,
        t.jsx)(eo.SettingRow, {
            label: e,
            info: a,
            htmlFor: m,
            disabled: u,
            className: "fd-set-slider-row",
            children: (0,
            t.jsxs)("span", {
                className: "fd-set-slider-control",
                children: [(0,
                t.jsx)(eo.Slider, {
                    id: m,
                    value: i,
                    min: n,
                    max: r,
                    step: l,
                    onChange: o,
                    label: e,
                    disabled: u,
                    valueText: d(i)
                }), (0,
                t.jsx)("output", {
                    htmlFor: m,
                    className: "fd-set-slider-value",
                    children: d(i)
                })]
            })
        })
    }
    function eS(e, t) {
        let s = URL.createObjectURL(new Blob([t],{
            type: "application/json"
        }))
          , a = document.createElement("a");
        a.href = s,
        a.download = e,
        document.body.append(a),
        a.click(),
        a.remove(),
        setTimeout( () => URL.revokeObjectURL(s), 1e3)
    }
    e.s(["CHANNEL_COLOR", 0, {
        throttle: "ink",
        roll: "orange",
        pitch: "sky",
        yaw: "acid"
    }, "CHANNEL_LABEL", 0, {
        throttle: "Throttle",
        roll: "Roll",
        pitch: "Pitch",
        yaw: "Yaw"
    }, "CHANNEL_PALETTE", 0, eg, "DARK_CHANNEL_COLOR", 0, ej], 460470),
    e.s(["Card", 0, eb, "Gimbal", 0, function({vertical: e, horizontal: s, x: a=0, y: i=0, label: n}) {
        let r = 60 + 26 * Math.max(-1, Math.min(1, a))
          , l = 60 - 26 * Math.max(-1, Math.min(1, i));
        return (0,
        t.jsxs)("figure", {
            className: "fd-set-gimbal",
            "aria-label": n ?? `${e} up and down, ${s} left and right`,
            children: [(0,
            t.jsx)("figcaption", {
                className: "fd-set-gimbal-top",
                children: e
            }), (0,
            t.jsxs)("svg", {
                viewBox: "0 0 120 120",
                "aria-hidden": !0,
                children: [(0,
                t.jsx)("circle", {
                    cx: "60",
                    cy: "60",
                    r: "52",
                    className: "fd-set-gimbal-ring"
                }), (0,
                t.jsx)("circle", {
                    cx: "60",
                    cy: "60",
                    r: "30",
                    className: "fd-set-gimbal-inner"
                }), (0,
                t.jsx)("path", {
                    d: "M60 18v22M60 80v22M52 26l8-9 8 9M52 94l8 9 8-9",
                    className: "fd-set-gimbal-arrow"
                }), (0,
                t.jsx)("path", {
                    d: "M18 60h22M80 60h22M26 52l-9 8 9 8M94 52l9 8-9 8",
                    className: "fd-set-gimbal-arrow fd-set-gimbal-arrow--h"
                }), (0,
                t.jsx)("circle", {
                    cx: r,
                    cy: l,
                    r: "12",
                    className: "fd-set-gimbal-stick"
                })]
            }), (0,
            t.jsx)("span", {
                className: "fd-set-gimbal-bottom",
                children: s
            })]
        })
    }
    , "Meter", 0, function({label: e, value: s, unipolar: a, color: i="sky", bound: n=!0, readout: r}) {
        let l = Math.max(a ? 0 : -1, Math.min(1, Number.isFinite(s) ? s : 0))
          , o = a ? 100 * l : 50 * Math.abs(l)
          , d = r ?? (n ? `${Math.round(100 * l)}%` : "Unbound");
        return (0,
        t.jsxs)("div", {
            className: "fd-set-meter",
            role: "meter",
            "aria-label": e,
            "aria-valuemin": a ? 0 : -100,
            "aria-valuemax": 100,
            "aria-valuenow": Math.round(100 * l),
            "aria-valuetext": d,
            children: [(0,
            t.jsx)("span", {
                className: "fd-set-meter-label",
                children: e
            }), (0,
            t.jsxs)("span", {
                className: "fd-set-meter-track",
                children: [!a && (0,
                t.jsx)("span", {
                    className: "fd-set-meter-zero"
                }), (0,
                t.jsx)("span", {
                    className: "fd-set-meter-fill",
                    style: {
                        left: `${a ? 0 : l >= 0 ? 50 : 50 - o}%`,
                        width: `${o}%`,
                        background: eg[i]
                    }
                }), (0,
                t.jsx)("span", {
                    className: "fd-set-meter-tick",
                    style: {
                        left: `${a ? 100 * l : 50 + 50 * l}%`
                    }
                })]
            }), (0,
            t.jsx)("span", {
                className: (0,
                ex.cx)("fd-set-meter-value", !n && "is-unbound"),
                children: d
            })]
        })
    }
    , "SliderField", 0, ev, "downloadText", 0, eS], 306605);
    var ey = e.i(174080)
      , ek = e.i(522016)
      , ew = e.i(618566);
    function eC({menu: e=!1}) {
        let s = (0,
        ew.useRouter)()
          , a = (0,
        l.useSimStore)(e => e.isAnonymous);
        return (0,
        t.jsxs)("details", {
            className: "fd-set-support",
            children: [(0,
            t.jsxs)("summary", {
                children: ["Account & support ", (0,
                t.jsx)(m.Icon, {
                    name: "chevron-down",
                    size: 24
                })]
            }), (0,
            t.jsxs)(ek.default, {
                href: "/purchases",
                onNavigate: e => {
                    e.preventDefault();
                    let t = l.useSimStore.getState();
                    t.guardSettings( () => {
                        t.closeSettings(),
                        s.push("/purchases")
                    }
                    )
                }
                ,
                children: ["Purchases & refunds ", (0,
                t.jsx)(m.Icon, {
                    name: "arrow-up-right",
                    size: 24
                })]
            }), e && !a ? (0,
            t.jsx)(eN, {}) : null]
        })
    }
    function eN() {
        let e = (0,
        s.useRef)(null)
          , [a,i] = (0,
        s.useState)(!1)
          , [n,r] = (0,
        s.useState)(null)
          , [o,d] = (0,
        s.useState)(!1)
          , [u,p] = (0,
        s.useState)(!1)
          , x = () => {
            o || (i(!1),
            p(!1))
        }
          , f = async () => {
            d(!0),
            p(!1);
            let {error: e} = await (0,
            en.createClient)().auth.signOut({
                scope: "local"
            });
            e && (console.error("[sim] sign-out failed", e),
            d(!1),
            p(!0))
        }
        ;
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsxs)(h.TextLink, {
                ref: e,
                className: "fd-set-support-action",
                onClick: () => {
                    l.useSimStore.getState().guardSettings( () => {
                        r(e.current?.closest(".fd-set") ?? null),
                        i(!0)
                    }
                    )
                }
                ,
                children: ["Sign out ", (0,
                t.jsx)(m.Icon, {
                    name: "log-out",
                    size: 24
                })]
            }), eA((0,
            t.jsx)($.DialogShell, {
                open: a,
                title: "Sign out?",
                size: "sm",
                busy: o,
                onClose: x,
                description: "This only signs out this device. You'll stay signed in everywhere else.",
                actions: (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)(c.Button, {
                        tone: "ghost",
                        size: "sm",
                        onClick: x,
                        disabled: o,
                        children: "Cancel"
                    }), (0,
                    t.jsx)(c.Button, {
                        tone: "primary",
                        size: "sm",
                        "data-autofocus": !0,
                        onClick: f,
                        disabled: o,
                        children: "Sign out"
                    })]
                }),
                children: u ? (0,
                t.jsx)("p", {
                    className: "fd-set-field-error",
                    role: "alert",
                    children: "Couldn't sign out. Check your connection and try again."
                }) : null
            }), n)]
        })
    }
    let eA = (e, t) => t ? (0,
    ey.createPortal)(e, t) : e
      , eE = {
        controls: "gamepad",
        rates: "chart",
        camera: "camera",
        video: "monitor",
        audio: "volume",
        accessibility: "accessibility"
    }
      , eL = "fd-set";
    function eM() {
        let[e,a] = (0,
        s.useState)("")
          , [i,n] = (0,
        s.useState)(0)
          , r = (0,
        s.useId)()
          , o = (0,
        l.useSimStore)(e => e.setSettingsTab)
          , d = function(e, t=6) {
            let s = e.toLowerCase().trim().split(/\s+/).filter(Boolean);
            if (!s.length)
                return [];
            let a = [];
            for (let e of ep) {
                let t = e.label.toLowerCase()
                  , i = [t, e.description.toLowerCase(), ...e.terms, em(e.tab).toLowerCase()]
                  , n = 0
                  , r = !0;
                for (let a of s) {
                    if (!i.some(e => e.includes(a))) {
                        r = !1;
                        break
                    }
                    n += t.startsWith(a) ? 4 : t.includes(a) ? 3 : e.terms.some(e => e === a) ? 2 : 1
                }
                r && a.push({
                    entry: e,
                    score: n
                })
            }
            return a.sort( (e, t) => t.score - e.score).slice(0, t).map( ({entry: e}) => e)
        }(e)
          , u = e.trim().length > 0
          , p = e => {
            let t = l.useSimStore.getState()
              , s = "calibrate" === e.action && !t.calibrating && !(0,
            el.editedSettings)(t).bindings.keyboardOnly && (0,
            ec.listGamepads)().length > 0;
            o(e.tab, e.subview ?? null, s ? null : e.target),
            s && l.useSimStore.getState().settingsTab === e.tab && l.useSimStore.getState().setCalibrating(!0),
            a("")
        }
        ;
        return (0,
        t.jsxs)("div", {
            className: "fd-set-search",
            children: [(0,
            t.jsxs)("span", {
                className: "fd-set-search-field",
                children: [(0,
                t.jsx)(m.Icon, {
                    name: "search",
                    className: "fd-set-search-icon",
                    size: 24
                }), (0,
                t.jsx)(eo.TextInput, {
                    type: "search",
                    placeholder: "Find a setting",
                    label: "Find a setting",
                    role: "combobox",
                    "aria-expanded": u,
                    "aria-controls": r,
                    "aria-autocomplete": "list",
                    "aria-activedescendant": u && d[i] ? `${r}-${i}` : void 0,
                    value: e,
                    onChange: e => {
                        a(e.target.value),
                        n(0)
                    }
                    ,
                    onKeyDown: t => {
                        "ArrowDown" === t.key ? (t.preventDefault(),
                        n(e => Math.min(d.length - 1, e + 1))) : "ArrowUp" === t.key ? (t.preventDefault(),
                        n(e => Math.max(0, e - 1))) : "Enter" === t.key && d[i] ? (t.preventDefault(),
                        p(d[i])) : "Escape" === t.key && e && (t.preventDefault(),
                        t.stopPropagation(),
                        a(""))
                    }
                }), e && (0,
                t.jsx)("span", {
                    className: "fd-set-search-clear",
                    children: (0,
                    t.jsx)(c.IconButton, {
                        label: "Clear search",
                        icon: (0,
                        t.jsx)(m.Icon, {
                            name: "close",
                            size: 24
                        }),
                        onClick: () => a("")
                    })
                })]
            }), u && (0,
            t.jsx)("div", {
                className: "fd-set-search-results",
                children: d.length ? (0,
                t.jsx)("ul", {
                    id: r,
                    role: "listbox",
                    "aria-label": "Settings found",
                    children: d.map( (e, s) => (0,
                    t.jsxs)("li", {
                        id: `${r}-${s}`,
                        role: "option",
                        "aria-selected": s === i,
                        onMouseDown: e => e.preventDefault(),
                        onMouseEnter: () => n(s),
                        onClick: () => p(e),
                        children: [(0,
                        t.jsx)(m.Icon, {
                            name: eE[e.tab],
                            size: 24
                        }), (0,
                        t.jsxs)("span", {
                            children: [em(e.tab), " / ", (0,
                            t.jsx)("strong", {
                                children: e.label
                            })]
                        }), (0,
                        t.jsx)(m.Icon, {
                            name: "arrow-right",
                            size: 24
                        })]
                    }, `${e.tab}-${e.target}`))
                }) : (0,
                t.jsxs)("div", {
                    id: r,
                    className: "fd-set-search-empty",
                    role: "status",
                    children: [(0,
                    t.jsx)("span", {
                        children: "No matches."
                    }), (0,
                    t.jsx)(h.TextLink, {
                        onClick: () => a(""),
                        children: "Clear"
                    })]
                })
            })]
        })
    }
    function eI() {
        let e = (0,
        l.useSimStore)(e => e.settingsTab)
          , s = (0,
        l.useSimStore)(e => e.setSettingsTab)
          , a = (0,
        l.useSimStore)((0,
        ed.useShallow)(el.dirtyCategories));
        return (0,
        t.jsx)(u.SideRail, {
            label: "Settings categories",
            idBase: eL,
            activation: "manual",
            plain: !0,
            className: "fd-set-tabs",
            value: e,
            onChange: s,
            items: eh.map(e => ({
                value: e.id,
                label: e.label,
                icon: (0,
                t.jsx)(m.Icon, {
                    name: eE[e.id],
                    size: 24
                }),
                note: a.includes(e.id) ? "Unsaved" : void 0
            }))
        })
    }
    function eR({title: e, back: s, badge: a, children: i}) {
        return (0,
        t.jsxs)("header", {
            className: "fd-set-page-head",
            children: [(0,
            t.jsxs)("div", {
                className: "fd-set-page-title",
                children: [s && (0,
                t.jsx)(c.Button, {
                    tone: "ghost",
                    size: "sm",
                    icon: (0,
                    t.jsx)(m.Icon, {
                        name: "arrow-left",
                        size: 24
                    }),
                    onClick: s.onClick,
                    "aria-label": `Back to ${s.label}`,
                    children: s.label
                }), (0,
                t.jsx)(h.SectionHeading, {
                    size: "lg",
                    children: e
                }), a]
            }), i && (0,
            t.jsx)("div", {
                className: "fd-set-page-tools",
                children: i
            })]
        })
    }
    let eT = {
        controls: "Reset controls?",
        rates: "Reset rates?",
        camera: "Reset camera & HUD?",
        video: "Reset video?",
        audio: "Reset audio?",
        accessibility: "Reset accessibility?"
    };
    function eB({tab: e, open: a, onClose: i}) {
        let n = (0,
        l.useSimStore)(e => e.resetSettingsCategory)
          , [r,o] = (0,
        s.useState)(!1)
          , [d,u] = (0,
        s.useState)(!1);
        return (0,
        t.jsx)($.DialogShell, {
            open: a,
            title: eT[e],
            description: "Back to defaults. Nothing changes until you save.",
            onClose: i,
            size: "sm",
            actions: (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)(c.Button, {
                    tone: "ghost",
                    size: "sm",
                    onClick: i,
                    "data-autofocus": !0,
                    children: "Cancel"
                }), (0,
                t.jsx)(c.Button, {
                    tone: "primary",
                    size: "sm",
                    onClick: () => {
                        n(e, {
                            calibration: r,
                            binds: d
                        }),
                        i()
                    }
                    ,
                    children: "Reset"
                })]
            }),
            children: "controls" === e && (0,
            t.jsxs)("div", {
                className: "fd-set-checks",
                children: [(0,
                t.jsx)(eo.Checkbox, {
                    label: "Also reset calibration",
                    checked: r,
                    onChange: o
                }), (0,
                t.jsx)(eo.Checkbox, {
                    label: "Also reset button and key binds",
                    checked: d,
                    onChange: u
                })]
            })
        })
    }
    e.s(["PageHeader", 0, eR, "SettingsFooter", 0, function() {
        let e = (0,
        l.useSimStore)(e => e.settingsTab)
          , a = (0,
        l.useSimStore)(el.settingsDirty)
          , i = (0,
        l.useSimStore)((0,
        ed.useShallow)(el.dirtyCategories))
          , n = (0,
        l.useSimStore)(e => e.settingsSave)
          , r = (0,
        l.useSimStore)(e => e.ratePresetsSave)
          , o = (0,
        l.useSimStore)(e => e.saveSettingsDraft)
          , d = (0,
        l.useSimStore)(e => e.discardSettingsDraft)
          , [u,p] = (0,
        s.useState)(!1);
        return (0,
        t.jsxs)("footer", {
            className: "fd-set-footer",
            children: [(0,
            t.jsxs)(h.TextLink, {
                className: "fd-set-reset",
                onClick: () => p(!0),
                children: [(0,
                t.jsx)(m.Icon, {
                    name: "rotate",
                    size: 24
                }), " Reset to defaults"]
            }), (0,
            t.jsxs)("span", {
                className: "fd-set-footer-end",
                children: ["error" === n || "error" === r ? (0,
                t.jsxs)("span", {
                    className: "fd-set-save is-error",
                    role: "alert",
                    children: [(0,
                    t.jsx)(m.Icon, {
                        name: "circle-alert",
                        size: 24
                    }), " Couldn’t save on this device.", (0,
                    t.jsx)(h.TextLink, {
                        onClick: () => {
                            let e = l.useSimStore.getState();
                            "error" === n && e.retrySettingsSave(),
                            "error" === r && e.retryRatePresetsSave()
                        }
                        ,
                        children: "Retry"
                    }), (0,
                    t.jsx)(h.TextLink, {
                        onClick: () => {
                            let e = l.useSimStore.getState();
                            eS("flight-division-settings.json", (0,
                            eu.settingsBackup)(e.settingsDraft?.settings ?? e.settings))
                        }
                        ,
                        children: "Export backup"
                    })]
                }) : a ? (0,
                t.jsxs)("span", {
                    className: "fd-set-save is-dirty",
                    role: "status",
                    children: [(0,
                    t.jsx)("span", {
                        "aria-hidden": !0
                    }), " ", i.length ? `Unsaved: ${i.map(em).join(", ")}` : "Unsaved changes"]
                }) : (0,
                t.jsxs)("span", {
                    className: "fd-set-save",
                    role: "status",
                    children: [(0,
                    t.jsx)(m.Icon, {
                        name: "check-circle",
                        size: 24
                    }), " Saved"]
                }), (0,
                t.jsx)(c.Button, {
                    tone: "ghost",
                    disabled: !a,
                    onClick: d,
                    children: "Cancel"
                }), (0,
                t.jsx)(c.Button, {
                    tone: "primary",
                    disabled: !a,
                    onClick: () => {
                        o()
                    }
                    ,
                    children: "Save"
                })]
            }), (0,
            t.jsx)(eB, {
                tab: e,
                open: u,
                onClose: () => p(!1)
            }, e)]
        })
    }
    , "SettingsRail", 0, function({menu: e=!1}) {
        return (0,
        t.jsxs)("nav", {
            className: "fd-set-rail",
            "aria-label": "Settings",
            children: [(0,
            t.jsx)(h.SectionHeading, {
                as: "h1",
                size: "lg",
                className: "fd-set-rail-title",
                children: "Settings"
            }), (0,
            t.jsx)(eM, {}), (0,
            t.jsx)(eI, {}), (0,
            t.jsx)(eC, {
                menu: e
            })]
        })
    }
    , "UnsavedPrompt", 0, function() {
        let e, s = (0,
        l.useSimStore)(e => e.settingsPrompt), a = (0,
        l.useSimStore)((0,
        ed.useShallow)(el.dirtyCategories)), i = (0,
        l.useSimStore)(e => e.resolveSettingsPrompt);
        return s?.kind === "calibration" ? (0,
        t.jsx)($.DialogShell, {
            open: !0,
            title: "Discard calibration?",
            description: "Your current calibration stays as it is.",
            size: "sm",
            onClose: () => i("cancel"),
            actions: (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)(c.Button, {
                    tone: "ghost",
                    size: "sm",
                    onClick: () => i("cancel"),
                    "data-autofocus": !0,
                    children: "Keep calibrating"
                }), (0,
                t.jsx)(c.Button, {
                    tone: "primary",
                    size: "sm",
                    onClick: () => i("discard"),
                    children: "Discard"
                })]
            })
        }) : (0,
        t.jsx)($.DialogShell, {
            open: !!s,
            title: "Unsaved changes",
            size: "sm",
            onClose: () => i("cancel"),
            description: a.length ? `Save changes to ${(e = a.map(em)).length < 2 ? e.join("") : `${e.slice(0, -1).join(", ")} and ${e.at(-1)}`}?` : "Save your changes?",
            actions: (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)(c.Button, {
                    tone: "ghost",
                    size: "sm",
                    onClick: () => i("cancel"),
                    children: "Keep editing"
                }), (0,
                t.jsx)(c.Button, {
                    tone: "ghost",
                    size: "sm",
                    onClick: () => i("discard"),
                    children: "Discard"
                }), (0,
                t.jsx)(c.Button, {
                    tone: "primary",
                    size: "sm",
                    "data-autofocus": !0,
                    onClick: () => i("save"),
                    children: "Save"
                })]
            })
        })
    }
    , "panelId", 0, e => (0,
    u.panelId)(eL, e), "tabId", 0, e => (0,
    u.tabId)(eL, e), "useSettingsFocus", 0, function(e) {
        let t = (0,
        l.useSimStore)(e => e.settingsFocus)
          , a = (0,
        l.useSimStore)(e => e.clearSettingsFocus);
        (0,
        s.useEffect)( () => {
            if (!t)
                return;
            let e = requestAnimationFrame( () => {
                e = requestAnimationFrame(s)
            }
            )
              , s = () => {
                let e = document.getElementById(t);
                if (e) {
                    e.scrollIntoView({
                        block: "center"
                    });
                    let t = e.matches("input,button,select,textarea") ? e : e.querySelector("[data-focus-first]:not([disabled])") ?? e.querySelector("input:not([disabled]),button:not([disabled]),select:not([disabled])");
                    t?.focus({
                        preventScroll: !0
                    }),
                    e.classList.add("is-found"),
                    setTimeout( () => e.classList.remove("is-found"), 1600)
                }
                a()
            }
            ;
            return () => cancelAnimationFrame(e)
        }
        , [t, a, e])
    }
    ], 54893),
    e.s(["AccessibilityPage", 0, function() {
        let e = (0,
        l.useSimStore)(e => (0,
        el.editedSettings)(e).accessibility.motion)
          , s = (0,
        l.useSimStore)(e => (0,
        el.editedSettings)(e).camera)
          , a = (0,
        l.useSimStore)(e => (0,
        el.editedSettings)(e).graphics)
          , i = (0,
        l.useSimStore)(e => e.updateAccessibility)
          , n = (0,
        l.useSimStore)(e => e.updateCamera)
          , r = (0,
        l.useSimStore)(e => e.updateGraphics)
          , o = (0,
        er.useSystemReducesMotion)()
          , d = (0,
        er.resolveReducedMotion)(e, o)
          , c = a.postProcessing ?? "low" !== a.quality;
        return (0,
        t.jsxs)("div", {
            className: "fd-set-page fd-set-page--accessibility",
            children: [(0,
            t.jsx)(eR, {
                title: "Accessibility"
            }), (0,
            t.jsxs)(eb, {
                id: "set-motion",
                children: [(0,
                t.jsx)(eo.SettingRow, {
                    label: "Motion",
                    info: "Reduce turns off camera shake, speed lines, motion blur and big menu animations. Flying stays exactly the same.",
                    children: (0,
                    t.jsx)(u.Segmented, {
                        label: "Motion",
                        value: e,
                        onChange: e => i({
                            motion: e
                        }),
                        options: [{
                            value: "system",
                            label: "Use system setting"
                        }, {
                            value: "reduce",
                            label: "Reduce"
                        }, {
                            value: "full",
                            label: "Full"
                        }]
                    })
                }), "system" === e && (0,
                t.jsxs)("p", {
                    className: "fd-set-muted",
                    children: ["Your system is set to ", o ? "reduce motion" : "full motion", "."]
                })]
            }), (0,
            t.jsxs)(eb, {
                title: "Camera effects",
                children: [d && (0,
                t.jsx)("p", {
                    className: "fd-set-muted",
                    children: "Off while motion is reduced. Your values are kept."
                }), (0,
                t.jsx)("div", {
                    id: "set-shake",
                    children: (0,
                    t.jsx)(ev, {
                        label: "Camera motion",
                        info: "Shake from the motors, throttle and impacts.",
                        value: s.shake,
                        min: 0,
                        max: 1,
                        step: .05,
                        format: e => `${Math.round(100 * e)}%`,
                        disabled: d,
                        onChange: e => n({
                            shake: e
                        })
                    })
                }), (0,
                t.jsx)("div", {
                    id: "set-speed-lines",
                    children: (0,
                    t.jsx)(ev, {
                        label: "Speed lines",
                        value: s.speedLines,
                        min: 0,
                        max: 1,
                        step: .05,
                        format: e => `${Math.round(100 * e)}%`,
                        disabled: d,
                        onChange: e => n({
                            speedLines: e
                        })
                    })
                }), (0,
                t.jsx)("div", {
                    id: "set-motion-blur",
                    children: (0,
                    t.jsx)(eo.SettingRow, {
                        label: "Motion blur",
                        info: c ? void 0 : "Needs post-processing, in Video.",
                        htmlFor: "set-motion-blur-switch",
                        children: (0,
                        t.jsx)(eo.Switch, {
                            id: "set-motion-blur-switch",
                            label: "Motion blur",
                            disabled: d || !c,
                            checked: a.motionBlur,
                            onChange: e => r({
                                motionBlur: e
                            })
                        })
                    })
                })]
            })]
        })
    }
    ], 598558);
    var eP = e.i(778534);
    function e$(e) {
        return e > 0 ? e >= 1 ? 1 : Math.pow(10, (-60 + 60 * e) / 20) : 0
    }
    function eD(e) {
        return e > .001 ? e >= 1 ? 1 : 1 + 20 * Math.log10(e) / 60 : 0
    }
    function ez(e) {
        if (!(e > 0))
            return "0%";
        let t = Math.round(100 * eD(e));
        return 0 === t ? "<1%" : `${t}%`
    }
    var eF = e.i(647163);
    let e_ = {
        motors: {
            label: "Drone motors"
        },
        wind: {
            label: "Wind"
        },
        world: {
            label: "World & impacts",
            info: "Traffic, rides and crashes."
        },
        interface: {
            label: "Interface & rewards",
            info: "Menu sounds, XP and combos."
        },
        race: {
            label: "Race alerts",
            info: "Race countdowns and warnings."
        }
    };
    function eO({id: e, label: s, channel: a, onChange: i}) {
        let n = eD(a.gain)
          , r = a.gain > 0 && a.gain <= .001;
        return (0,
        t.jsxs)("span", {
            className: (0,
            eF.cn)("fd-set-fader", a.muted && "is-muted"),
            children: [(0,
            t.jsx)(eo.Slider, {
                id: e,
                label: s,
                value: n,
                min: 0,
                max: 1,
                step: .01,
                valueText: a.muted ? `Muted (${ez(a.gain)})` : ez(a.gain),
                onChange: e => i({
                    gain: e$(e),
                    muted: !1
                })
            }), (0,
            t.jsx)(eo.NumberStepper, {
                label: `${s} percent`,
                value: Math.round(100 * n),
                min: 0,
                max: 100,
                step: 1,
                unit: "%",
                className: "fd-set-fader-number",
                onCommit: e => e < 0 || e > 100 ? "Use 0 to 100%." : (i({
                    gain: e$(e / 100),
                    muted: !1
                }),
                null)
            }), r && (0,
            t.jsx)("span", {
                className: "fd-set-floor",
                children: "<1%"
            }), (0,
            t.jsx)(c.IconButton, {
                tone: a.muted ? "secondary" : "plain",
                size: "sm",
                className: "fd-set-mute",
                pressed: a.muted,
                label: a.muted ? `Unmute ${s}` : `Mute ${s}`,
                icon: a.muted ? (0,
                t.jsx)(m.Icon, {
                    name: "volume-off",
                    size: 24
                }) : (0,
                t.jsx)(m.Icon, {
                    name: "volume",
                    size: 24
                }),
                onClick: () => i({
                    muted: !a.muted
                })
            })]
        })
    }
    e.s(["AudioPage", 0, function() {
        let e = (0,
        l.useSimStore)(e => (0,
        el.editedSettings)(e).audio)
          , s = (0,
        l.useSimStore)(e => e.setAudioChannel)
          , a = (0,
        l.useSimStore)(e => e.updateAudio);
        return (0,
        t.jsxs)("div", {
            className: "fd-set-page fd-set-page--audio",
            children: [(0,
            t.jsx)(eR, {
                title: "Audio"
            }), (0,
            t.jsxs)(eb, {
                className: "fd-set-master",
                id: "set-master-volume",
                children: [(0,
                t.jsx)(m.Icon, {
                    name: "volume",
                    className: "fd-set-master-icon",
                    size: 24
                }), (0,
                t.jsx)(h.SectionHeading, {
                    as: "h3",
                    className: "fd-set-master-title",
                    children: (0,
                    t.jsx)("label", {
                        htmlFor: "set-master-fader",
                        children: "Master volume"
                    })
                }), (0,
                t.jsx)(eO, {
                    id: "set-master-fader",
                    label: "Master volume",
                    channel: e.master,
                    onChange: e => s("master", e)
                })]
            }), (0,
            t.jsx)(eb, {
                title: "Sound mix",
                id: "set-sound-mix",
                children: (0,
                t.jsx)("div", {
                    className: "fd-set-mix",
                    children: eP.AUDIO_CATEGORIES.map(a => (0,
                    t.jsxs)("div", {
                        id: `set-audio-${a}`,
                        className: "fd-set-mix-row",
                        children: [(0,
                        t.jsxs)("span", {
                            className: "fd-set-mix-label",
                            children: [(0,
                            t.jsx)("label", {
                                htmlFor: `set-fader-${a}`,
                                children: e_[a].label
                            }), e_[a].info && (0,
                            t.jsx)(ef.InfoTip, {
                                topic: e_[a].label,
                                children: e_[a].info
                            })]
                        }), (0,
                        t.jsx)(eO, {
                            id: `set-fader-${a}`,
                            label: e_[a].label,
                            channel: e.categories[a],
                            onChange: e => s(a, e)
                        })]
                    }, a))
                })
            }), (0,
            t.jsx)(eb, {
                className: "fd-set-background",
                id: "set-background-mute",
                children: (0,
                t.jsx)(eo.SettingRow, {
                    label: "Mute when in background",
                    htmlFor: "set-background-switch",
                    children: (0,
                    t.jsx)(eo.Switch, {
                        id: "set-background-switch",
                        label: "Mute when in background",
                        checked: e.muteInBackground,
                        onChange: e => a({
                            muteInBackground: e
                        })
                    })
                })
            })]
        })
    }
    ], 418879);
    var eH = e.i(235199)
      , eG = e.i(514236);
    let eq = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "D-pad up", "D-pad down", "D-pad left", "D-pad right", "Guide"]
      , eU = ["Cross", "Circle", "Square", "Triangle", "L1", "R1", "L2", "R2", "Create", "Options", "L3", "R3", "D-pad up", "D-pad down", "D-pad left", "D-pad right", "PS"];
    e.s(["bindingLabel", 0, function(e, t, s, a) {
        if ("none" === e.kind)
            return "Unbound";
        if ("button" === e.kind && "radio" !== t && a)
            return (s && eG.PLAYSTATION_PATTERN.test(s) ? eU : eq)[e.buttonIndex] ?? (0,
            eH.describeSwitchBinding)(e);
        return "axis" === e.kind && "radio" === t ? `Switch ${e.axisIndex + 1} ${e.invert ? "low" : "high"}` : (0,
        eH.describeSwitchBinding)(e)
    }
    ], 35230)
}
, 783558, 698542, 681770, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(271645)
      , a = e.i(70399)
      , i = e.i(873724)
      , n = e.i(684680)
      , r = e.i(801583)
      , l = e.i(106258)
      , o = e.i(72606)
      , d = e.i(911017)
      , c = e.i(854693)
      , u = e.i(509415)
      , h = e.i(929618)
      , m = e.i(468630)
      , p = e.i(894969)
      , x = e.i(619455)
      , f = e.i(188548);
    e.i(573798);
    var g = e.i(244144);
    e.i(671112);
    var j = e.i(770703)
      , b = e.i(198132)
      , v = e.i(123573)
      , S = e.i(294641)
      , y = e.i(498475)
      , k = e.i(509381)
      , w = e.i(598558)
      , C = e.i(418879)
      , N = e.i(568204)
      , A = e.i(883620)
      , E = e.i(516560)
      , L = e.i(624834)
      , M = e.i(778534)
      , I = e.i(632997)
      , R = e.i(35230)
      , T = e.i(41595)
      , B = e.i(745010)
      , P = e.i(514236)
      , $ = e.i(532116)
      , D = e.i(953528)
      , z = e.i(647163)
      , F = e.i(383807)
      , _ = e.i(460470)
      , O = e.i(657688)
      , H = e.i(327168);
    let {width: G, height: q, outerRadius: U, innerRadius: K} = H.POCKET_GEOMETRY
      , W = U + 9
      , V = [4, 66, 201, 90]
      , Y = U + 3.2
      , Q = 2 * Math.PI * Y
      , Z = (U + K) / 2
      , X = e => Math.max(-1, Math.min(1, Number.isFinite(e) ? e : 0));
    function J({radio: e, wells: s, guides: a, label: i, className: n}) {
        let[r,l,o,d] = e ? [0, 0, G, q] : V
          , c = (e, t) => ({
            left: `${(e - r) / o * 100}%`,
            top: `${(t - l) / d * 100}%`
        });
        return (0,
        t.jsxs)("figure", {
            className: (0,
            z.cn)("fd-set-radio", !e && "fd-set-radio--wells", n),
            style: {
                aspectRatio: `${o} / ${d}`
            },
            role: "img",
            "aria-label": i,
            children: [e && (0,
            t.jsx)(O.default, {
                src: "/sim/radio/pocket.svg",
                alt: "",
                width: 2 * G,
                height: 2 * q,
                unoptimized: !0,
                draggable: !1,
                className: "fd-set-radio-body"
            }), (0,
            t.jsx)("svg", {
                viewBox: `${r} ${l} ${o} ${d}`,
                className: "fd-set-radio-overlay",
                "aria-hidden": !0,
                children: ["left", "right"].map(i => (0,
                t.jsx)(et, {
                    center: H.POCKET_GEOMETRY[i],
                    view: s[i],
                    guide: a?.[i],
                    bare: !e
                }, i))
            }), ["left", "right"].flatMap(e => {
                let {x: a, y: i} = H.POCKET_GEOMETRY[e]
                  , n = s[e];
                return [(0,
                t.jsx)(ee, {
                    channel: n.vertical,
                    style: c(a, i - W)
                }, `${e}-v`), (0,
                t.jsx)(ee, {
                    channel: n.horizontal,
                    style: c(a, i + W)
                }, `${e}-h`)]
            }
            )]
        })
    }
    function ee({channel: e, style: s}) {
        return (0,
        t.jsxs)("span", {
            className: (0,
            z.cn)("fd-set-radio-caption", !e && "is-unused"),
            style: s,
            "aria-hidden": !0,
            children: [e && (0,
            t.jsx)("i", {
                style: {
                    background: _.DARK_CHANNEL_COLOR[e]
                }
            }), e ? _.CHANNEL_LABEL[e] : "Unused"]
        })
    }
    function et({center: e, view: s, guide: a, bare: i}) {
        let {x: n, y: r} = e
          , l = (e, t) => [n + 14 * X(e), r - 14 * X(t)]
          , [o,d] = l(s.x, s.y)
          , c = a?.target
          , u = Math.max(0, Math.min(1, a?.hold ?? 0))
          , h = a?.edges
          , m = "up" === c ? {
            x: 0,
            y: -14
        } : "right" === c ? {
            x: 14,
            y: 0
        } : null;
        return (0,
        t.jsxs)("g", {
            className: (0,
            z.cn)("fd-set-radio-well", c && "is-target"),
            children: [i && (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("circle", {
                    cx: n,
                    cy: r,
                    r: U,
                    className: "fd-set-radio-rim"
                }), (0,
                t.jsx)("circle", {
                    cx: n,
                    cy: r,
                    r: K,
                    className: "fd-set-radio-rim fd-set-radio-rim--inner"
                })]
            }), c && (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("circle", {
                    cx: n,
                    cy: r,
                    r: U,
                    className: "fd-set-radio-focus"
                }), (0,
                t.jsx)("circle", {
                    cx: n,
                    cy: r,
                    r: Y,
                    className: "fd-set-radio-hold-track"
                }), (0,
                t.jsx)("circle", {
                    cx: n,
                    cy: r,
                    r: Y,
                    className: "fd-set-radio-hold",
                    transform: `rotate(-90 ${n} ${r})`,
                    strokeDasharray: Q,
                    strokeDashoffset: Q * (1 - u)
                })]
            }), a?.pulse ? (0,
            t.jsx)("circle", {
                cx: n,
                cy: r,
                r: U,
                className: "fd-set-radio-pulse"
            }, a.pulse) : null, h && (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("rect", {
                    x: n - 4,
                    y: r - Z - 1.3,
                    width: 8,
                    height: 2.6,
                    rx: 1.3,
                    className: (0,
                    z.cn)("fd-set-radio-edge", h.up && "is-lit")
                }), (0,
                t.jsx)("rect", {
                    x: n - 4,
                    y: r + Z - 1.3,
                    width: 8,
                    height: 2.6,
                    rx: 1.3,
                    className: (0,
                    z.cn)("fd-set-radio-edge", h.down && "is-lit")
                }), (0,
                t.jsx)("rect", {
                    x: n - Z - 1.3,
                    y: r - 4,
                    width: 2.6,
                    height: 8,
                    rx: 1.3,
                    className: (0,
                    z.cn)("fd-set-radio-edge", h.left && "is-lit")
                }), (0,
                t.jsx)("rect", {
                    x: n + Z - 1.3,
                    y: r - 4,
                    width: 2.6,
                    height: 8,
                    rx: 1.3,
                    className: (0,
                    z.cn)("fd-set-radio-edge", h.right && "is-lit")
                })]
            }), a?.trail && a.trail.length > 1 && (0,
            t.jsx)("polyline", {
                className: "fd-set-radio-trail",
                points: a.trail.map( ([e,t]) => l(e, t).map(e => e.toFixed(2)).join(",")).join(" ")
            }), m && (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("path", {
                    className: "fd-set-radio-arrow",
                    d: "up" === c ? `M${n - 3.2} ${r - 14 - 5.4} L${n} ${r - 14 - 8.6} L${n + 3.2} ${r - 14 - 5.4}` : `M${n + 14 + 5.4} ${r - 3.2} L${n + 14 + 8.6} ${r} L${n + 14 + 5.4} ${r + 3.2}`
                }), (0,
                t.jsx)("circle", {
                    cx: n,
                    cy: r,
                    r: 4.6,
                    className: "fd-set-radio-ghost",
                    style: {
                        "--ghost-x": `${m.x}px`,
                        "--ghost-y": `${m.y}px`
                    }
                })]
            }), (0,
            t.jsx)("circle", {
                cx: o,
                cy: d,
                r: 4.6,
                className: (0,
                z.cn)("fd-set-radio-dot", s.idle && "is-idle")
            })]
        })
    }
    function es(e, t, s) {
        let a = (0,
        I.stickAssignment)(e, s)
          , i = a => a ? "keyboard" === s ? "throttle" === a ? -1 : 0 : (0,
        I.stickPosition)(a, e, t) : 0
          , n = e => {
            let[t,s] = a[e];
            return {
                vertical: t,
                horizontal: s,
                x: i(s),
                y: i(t)
            }
        }
        ;
        return {
            left: n("left"),
            right: n("right")
        }
    }
    function ea(e) {
        let t = e => e ? _.CHANNEL_LABEL[e] : "Unused"
          , s = s => `${"left" === s ? "Left" : "Right"} stick: ${t(e[s].vertical)} up and down, ${t(e[s].horizontal)} left and right`;
        return `${s("left")}. ${s("right")}.`
    }
    function ei({bindings: e, axes: s, source: a, radio: i, className: n}) {
        let r = es(e, s, a);
        return (0,
        t.jsx)(J, {
            radio: i,
            wells: r,
            label: ea(r),
            className: n
        })
    }
    var en = e.i(324280)
      , er = e.i(235199)
      , el = e.i(54893)
      , eo = e.i(306605);
    let ed = ["mode2", "mode1", "mode4", "mode3"]
      , ec = [{
        value: "gamepad",
        label: "Gamepad"
    }, {
        value: "radio",
        label: "Radio"
    }];
    function eu() {
        return (0,
        l.useSimStore)(e => (0,
        D.editedSettings)(e).bindings)
    }
    let eh = (0,
    s.createContext)(null);
    function em({children: e}) {
        let a, i, n, r;
        return (0,
        t.jsx)(eh.Provider, {
            value: (a = eu(),
            i = (0,
            l.useSimStore)(D.editedPadIndex),
            n = (0,
            F.useGamepadList)(!0),
            r = (0,
            F.useGamepadReading)(a.deviceId, !a.keyboardOnly, i),
            (0,
            s.useMemo)( () => {
                let e = null !== r.id
                  , t = a.keyboardOnly || !a.deviceId && !e;
                return {
                    bindings: a,
                    padIndex: i,
                    pads: n,
                    reading: r,
                    connected: e,
                    keyboard: t,
                    axes: e ? r.axes : null,
                    standard: "standard" === r.mapping,
                    kind: t ? null : a.deviceKind ?? (0,
                    P.classifyDevice)(r.id ?? a.deviceId)
                }
            }
            , [a, i, n, r])),
            children: e
        })
    }
    function ep() {
        let e = (0,
        s.useContext)(eh);
        if (!e)
            throw Error("useActiveDevice needs an ActiveDeviceProvider");
        return e
    }
    function ex() {
        let {bindings: e, pads: s, connected: a, keyboard: i, reading: n, kind: r} = ep()
          , o = (0,
        l.useSimStore)(e => e.selectInputDevice)
          , d = (0,
        l.useSimStore)(e => e.updateBindings)
          , c = (0,
        l.useSimStore)(e => e.setDeviceKind)
          , u = (0,
        l.useSimStore)(e => e.setCalibrating)
          , h = e => s.filter(t => t.id === e).length > 1
          , m = [...s.map(e => ({
            value: `pad:${e.index}`,
            label: `${(0,
            $.friendlyGamepadName)(e.id)}${h(e.id) ? ` (${e.index + 1})` : ""}`
        })), ...e.deviceId && !s.some(t => t.id === e.deviceId) ? [{
            value: "remembered",
            label: `${(0,
            $.friendlyGamepadName)(e.deviceId)} (not connected)`
        }] : [], {
            value: "keyboard",
            label: "Keyboard"
        }]
          , p = e.keyboardOnly ? "keyboard" : a ? `pad:${n.index}` : e.deviceId ? "remembered" : s[0] ? `pad:${s[0].index}` : "keyboard"
          , x = e.keyboardOnly ? null : a ? "Connected" : e.deviceId ? "Not connected" : s.length ? null : "No controller found"
          , f = a && (0,
        B.needsCalibration)(e, r);
        return (0,
        t.jsxs)(eo.Card, {
            className: "fd-set-device",
            id: "set-device",
            children: [(0,
            t.jsx)(g.Icon, {
                name: i ? "keyboard" : "radio" === r ? "radio" : "gamepad",
                size: 24,
                className: "fd-set-device-icon"
            }), (0,
            t.jsxs)("div", {
                className: "fd-set-device-name",
                children: [(0,
                t.jsx)(A.Select, {
                    label: "Input device",
                    value: p,
                    options: m,
                    onChange: e => {
                        if ("keyboard" === e)
                            return void d({
                                keyboardOnly: !0
                            });
                        if ("remembered" === e)
                            return;
                        let t = s.find(t => `pad:${t.index}` === e);
                        t && o(t.id, h(t.id) ? t.index : null)
                    }
                }), x && (0,
                t.jsxs)("span", {
                    className: (0,
                    z.cn)("fd-set-status", a ? "is-ok" : "is-warn"),
                    children: [(0,
                    t.jsx)("span", {
                        "aria-hidden": !0
                    }), x]
                }), f && (0,
                t.jsx)(N.Badge, {
                    tone: "orange",
                    children: "Not calibrated"
                })]
            }), (0,
            t.jsxs)("div", {
                className: "fd-set-device-tools",
                children: [!i && (r ? (0,
                t.jsx)(A.Select, {
                    label: "Device type",
                    value: r,
                    options: ec,
                    onChange: c
                }) : (0,
                t.jsx)(E.Segmented, {
                    label: "Device type",
                    size: "sm",
                    value: null,
                    options: ec,
                    onChange: c
                })), (0,
                t.jsx)(y.Button, {
                    id: "set-calibrate",
                    tone: f ? "primary" : "ghost",
                    disabled: i || !a,
                    onClick: () => u(!0),
                    children: "Calibrate"
                })]
            })]
        })
    }
    function ef() {
        let {bindings: e, axes: a, keyboard: i, standard: n, kind: r} = ep()
          , o = (0,
        l.useSimStore)(e => e.applyStickMode)
          , d = (0,
        l.useSimStore)(e => e.updateBindings)
          , c = (0,
        l.useSimStore)(e => e.setDeviceKind)
          , [u,h] = (0,
        s.useState)(!1)
          , m = !i && "radio" === r
          , p = i ? "mode2" : m ? e.stickMode ?? "mode2" : (0,
        I.detectStickMode)(e)
          , x = M.CHANNEL_NAMES.some(t => {
            let s = e.channels[t];
            return !!s && (-1 !== s.min || 1 !== s.max || 0 !== s.center)
        }
        )
          , f = t => {
            m ? ("radio" !== e.deviceKind && c("radio"),
            d({
                stickMode: t
            })) : o(t)
        }
          , j = m && "radio" !== e.deviceKind ? {
            ...e,
            deviceKind: "radio"
        } : e;
        return (0,
        t.jsxs)(eo.Card, {
            title: "Sticks",
            tone: "dark",
            id: "set-stick-layout",
            className: "fd-set-sticks-card",
            info: m ? "Which stick does what. Pick the mode your radio is set to. Calibrate maps its channels." : "Which stick does what. Mode 2, throttle on the left, is the most common.",
            actions: (0,
            t.jsx)(A.Select, {
                label: "Stick layout",
                value: p ?? "custom",
                options: [...p ? [] : [{
                    value: "custom",
                    label: x ? "Custom (calibrated)" : "Custom"
                }], ...ed.map(e => ({
                    value: e,
                    label: I.STICK_MODE_LABELS[e]
                }))],
                disabled: i,
                onChange: e => {
                    "custom" !== e && f(e)
                }
            }),
            children: [(0,
            t.jsx)(ei, {
                bindings: j,
                axes: a,
                source: i ? "keyboard" : n ? "standard" : "other",
                radio: m
            }), (0,
            t.jsx)(k.TextLink, {
                className: "fd-set-all-layouts",
                trailingIcon: (0,
                t.jsx)(g.Icon, {
                    name: "arrow-right",
                    size: 24
                }),
                onClick: () => h(!0),
                children: "All layouts"
            }), (0,
            t.jsx)(L.DialogShell, {
                open: u,
                title: "Stick layouts",
                onClose: () => h(!1),
                size: "lg",
                actions: (0,
                t.jsx)(y.Button, {
                    tone: "ghost",
                    size: "sm",
                    onClick: () => h(!1),
                    "data-autofocus": !0,
                    children: "Close"
                }),
                children: (0,
                t.jsx)("div", {
                    className: "fd-set-layout-grid",
                    children: ["mode1", "mode2", "mode3", "mode4"].map(e => {
                        let s = I.STICK_MODE_ASSIGNMENTS[e];
                        return (0,
                        t.jsxs)("div", {
                            className: (0,
                            z.cn)("fd-set-layout-option", e === p && "is-current"),
                            children: [(0,
                            t.jsx)("strong", {
                                children: I.STICK_MODE_LABELS[e]
                            }), (0,
                            t.jsxs)("div", {
                                className: "fd-set-gimbals fd-set-gimbals--small",
                                children: [(0,
                                t.jsx)(eo.Gimbal, {
                                    vertical: _.CHANNEL_LABEL[s.left[0]],
                                    horizontal: _.CHANNEL_LABEL[s.left[1]]
                                }), (0,
                                t.jsx)(eo.Gimbal, {
                                    vertical: _.CHANNEL_LABEL[s.right[0]],
                                    horizontal: _.CHANNEL_LABEL[s.right[1]]
                                })]
                            }), !i && e !== p && (0,
                            t.jsx)(y.Button, {
                                tone: "ghost",
                                size: "sm",
                                onClick: () => {
                                    f(e),
                                    h(!1)
                                }
                                ,
                                children: "Use this layout"
                            })]
                        }, e)
                    }
                    )
                })
            })]
        })
    }
    function eg() {
        let e = (0,
        l.useSimStore)(e => e.updateBindings)
          , s = eu();
        return (0,
        t.jsx)("div", {
            className: "fd-set-empty",
            role: "status",
            children: (0,
            t.jsx)(L.EmptyState, {
                icon: "gamepad",
                title: s.deviceId ? `${(0,
                $.friendlyGamepadName)(s.deviceId)} isn't connected` : "No controller connected",
                action: s.keyboardOnly ? void 0 : (0,
                t.jsx)(y.Button, {
                    tone: "primary",
                    size: "sm",
                    onClick: () => e({
                        keyboardOnly: !0
                    }),
                    children: "Use keyboard"
                }),
                children: "Plug in a gamepad or radio and move a stick."
            })
        })
    }
    function ej({compact: e}) {
        return (0,
        t.jsxs)("div", {
            className: (0,
            z.cn)("fd-set-keys", e && "fd-set-keys--compact"),
            "aria-label": "Keyboard flight keys",
            children: [(0,
            t.jsxs)("span", {
                children: [(0,
                t.jsx)("kbd", {
                    children: "W"
                }), (0,
                t.jsx)("kbd", {
                    children: "S"
                }), " Throttle"]
            }), (0,
            t.jsxs)("span", {
                children: [(0,
                t.jsx)("kbd", {
                    children: "↑"
                }), (0,
                t.jsx)("kbd", {
                    children: "↓"
                }), " Pitch"]
            }), (0,
            t.jsxs)("span", {
                children: [(0,
                t.jsx)("kbd", {
                    children: "A"
                }), (0,
                t.jsx)("kbd", {
                    children: "D"
                }), " Yaw"]
            }), (0,
            t.jsxs)("span", {
                children: [(0,
                t.jsx)("kbd", {
                    children: "←"
                }), (0,
                t.jsx)("kbd", {
                    children: "→"
                }), " Roll"]
            })]
        })
    }
    function eb() {
        let {bindings: e, axes: s, connected: a, keyboard: i} = ep()
          , n = (0,
        l.useSimStore)(e => e.updateBindings);
        return (0,
        t.jsx)(eo.Card, {
            title: "Live input",
            id: "set-live-input",
            children: i ? e.keyboardOnly ? (0,
            t.jsx)(ej, {
                compact: !0
            }) : (0,
            t.jsx)(eg, {}) : (0,
            t.jsxs)(t.Fragment, {
                children: [!a && (0,
                t.jsx)(eg, {}), (0,
                t.jsxs)("div", {
                    className: "fd-set-direction",
                    role: "table",
                    "aria-label": "Live input",
                    id: "set-invert",
                    children: [(0,
                    t.jsxs)("div", {
                        role: "row",
                        className: "fd-set-direction-head",
                        children: [(0,
                        t.jsx)("span", {
                            role: "columnheader",
                            children: (0,
                            t.jsx)("span", {
                                className: "fdk-sr",
                                children: "Input"
                            })
                        }), (0,
                        t.jsx)("span", {
                            role: "columnheader",
                            children: (0,
                            t.jsx)("span", {
                                className: "fdk-sr",
                                children: "Live"
                            })
                        }), (0,
                        t.jsx)("span", {
                            role: "columnheader",
                            children: "Invert"
                        })]
                    }), M.CHANNEL_NAMES.map(i => (0,
                    t.jsxs)("div", {
                        role: "row",
                        className: "fd-set-direction-row",
                        children: [(0,
                        t.jsx)("span", {
                            role: "rowheader",
                            children: _.CHANNEL_LABEL[i]
                        }), (0,
                        t.jsx)("span", {
                            role: "cell",
                            children: (0,
                            t.jsx)(eo.Meter, {
                                label: `${_.CHANNEL_LABEL[i]} signal`,
                                value: (0,
                                I.radioSense)(i, (0,
                                I.channelValue)(i, e, s)),
                                unipolar: "throttle" === i,
                                color: _.CHANNEL_COLOR[i],
                                bound: !a || !!e.channels[i],
                                readout: a ? void 0 : "–"
                            })
                        }), (0,
                        t.jsx)("span", {
                            role: "cell",
                            children: (0,
                            t.jsx)(A.Checkbox, {
                                label: (0,
                                t.jsxs)("span", {
                                    className: "fdk-sr",
                                    children: ["Invert ", _.CHANNEL_LABEL[i]]
                                }),
                                checked: e.swappedAxes[i],
                                onChange: t => n({
                                    swappedAxes: {
                                        ...e.swappedAxes,
                                        [i]: t
                                    }
                                })
                            })
                        })]
                    }, i))]
                }), (0,
                t.jsxs)("div", {
                    className: "fd-set-deadzone",
                    id: "set-deadzone",
                    children: [(0,
                    t.jsxs)("span", {
                        className: "fd-set-deadzone-label",
                        children: [(0,
                        t.jsx)("label", {
                            htmlFor: "set-deadzone-slider",
                            children: "Dead zone"
                        }), (0,
                        t.jsx)(en.InfoTip, {
                            topic: "Dead zone",
                            children: "Stick movement near center that's ignored. Raise it if the drone drifts with the sticks centered."
                        })]
                    }), (0,
                    t.jsx)(A.Slider, {
                        id: "set-deadzone-slider",
                        label: "Dead zone",
                        value: e.deadband,
                        min: 0,
                        max: .4,
                        step: .005,
                        valueText: `${(100 * e.deadband).toFixed(1)}%`,
                        onChange: e => n({
                            deadband: e
                        })
                    }), (0,
                    t.jsxs)("output", {
                        htmlFor: "set-deadzone-slider",
                        children: [(100 * e.deadband).toFixed(1), "%"]
                    })]
                })]
            })
        })
    }
    function ev() {
        let {bindings: e, axes: s} = ep()
          , a = (0,
        l.useSimStore)(e => e.updateBindings);
        return (0,
        t.jsx)(eo.Card, {
            title: "Throttle",
            id: "set-throttle-travel",
            className: "fd-set-throttle-card",
            children: (0,
            t.jsxs)("div", {
                className: "fd-set-throttle",
                children: [(0,
                t.jsxs)("div", {
                    className: "fd-set-throttle-diagram",
                    "aria-hidden": !0,
                    children: [(0,
                    t.jsxs)("div", {
                        className: "fd-set-throttle-track",
                        children: [(0,
                        t.jsx)("span", {
                            className: "fd-set-throttle-zero",
                            style: {
                                height: e.halfThrottle ? "50%" : "0%"
                            }
                        }), (0,
                        t.jsx)("span", {
                            className: "fd-set-throttle-knob",
                            style: {
                                bottom: `${((0,
                                I.stickPosition)("throttle", e, s) + 1) * 50}%`
                            }
                        })]
                    }), (0,
                    t.jsxs)("ul", {
                        children: [(0,
                        t.jsx)("li", {
                            children: "100%"
                        }), (0,
                        t.jsx)("li", {
                            children: e.halfThrottle ? "0%" : "50%"
                        }), (0,
                        t.jsx)("li", {
                            children: "0%"
                        })]
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "fd-set-throttle-rows",
                    children: [(0,
                    t.jsx)(A.SettingRow, {
                        label: "Travel",
                        info: "Center to top is for sticks that spring back to the middle. The lower half stays at zero.",
                        children: (0,
                        t.jsx)(E.Segmented, {
                            label: "Throttle travel",
                            size: "sm",
                            value: e.halfThrottle ? "center" : "full",
                            onChange: e => a({
                                halfThrottle: "center" === e
                            }),
                            options: [{
                                value: "full",
                                label: "Full stick"
                            }, {
                                value: "center",
                                label: "Center to top"
                            }]
                        })
                    }), (0,
                    t.jsx)("div", {
                        id: "set-throttle-stick",
                        children: (0,
                        t.jsx)(A.SettingRow, {
                            label: "Physical stick",
                            htmlFor: "set-throttle-stick-select",
                            info: "Tells calibration where the throttle rests. Calibrate again after changing it.",
                            children: (0,
                            t.jsx)(A.Select, {
                                id: "set-throttle-stick-select",
                                label: "Physical throttle stick",
                                value: e.throttleSelfCentering ? "springs" : "stays",
                                onChange: e => a({
                                    throttleSelfCentering: "springs" === e
                                }),
                                options: [{
                                    value: "stays",
                                    label: "Stays where released"
                                }, {
                                    value: "springs",
                                    label: "Springs to center"
                                }]
                            })
                        })
                    })]
                })]
            })
        })
    }
    let eS = [{
        action: "arm",
        label: "Arm / disarm"
    }, {
        action: "respawn",
        label: "Respawn"
    }, {
        action: "droneWheel",
        label: "Drone wheel"
    }, {
        action: "interact",
        label: "Interact"
    }];
    function ey({label: e, listening: s, prompt: a, disabled: i, empty: n, live: r, onClick: l, name: o, focusFirst: d}) {
        return (0,
        t.jsx)(y.Button, {
            tone: s ? "primary" : r ? "secondary" : "ghost",
            size: "sm",
            block: !0,
            className: (0,
            z.cn)("fd-set-bindbox", n && "is-empty"),
            disabled: i,
            "aria-pressed": s,
            "aria-label": s ? `${o}: ${a}` : `${o}: ${e}. Click to change.`,
            onClick: l,
            "data-focus-first": d || void 0,
            children: s ? a : e
        })
    }
    function ek(e, t, a, i, n) {
        (0,
        s.useEffect)( () => {
            if (e?.device !== "controller")
                return;
            let s = e.action
              , r = 0
              , l = null
              , o = null
              , d = (0,
            er.occupiedStickAxes)(t)
              , c = () => {
                r = requestAnimationFrame(c);
                let e = (0,
                $.getRawGamepad)(t.deviceId, !1, a);
                if (!e)
                    return;
                if (!l || !o) {
                    l = Array.from(e.axes),
                    o = e.buttons.map(e => e.value || +!!e.pressed);
                    return
                }
                let u = e => {
                    let a = (0,
                    er.validateRadioBind)(e, s, t);
                    a ? n((0,
                    er.bindRejectMessage)(a)) : (cancelAnimationFrame(r),
                    i(s, e))
                }
                ;
                for (let t = 0; t < e.buttons.length; t++) {
                    let s = e.buttons[t].value || +!!e.buttons[t].pressed;
                    if (s >= T.TRIGGER_PRESS && o[t] < T.TRIGGER_RELEASE) {
                        o[t] = 1,
                        u({
                            kind: "button",
                            buttonIndex: t
                        });
                        return
                    }
                    s < T.TRIGGER_RELEASE && (o[t] = 0)
                }
                for (let t = 0; t < e.axes.length; t++) {
                    if (d.has(t))
                        continue;
                    let s = e.axes[t] - l[t];
                    if (.6 > Math.abs(s))
                        continue;
                    let a = {
                        kind: "axis",
                        axisIndex: t,
                        threshold: (e.axes[t] + l[t]) / 2,
                        invert: s < 0
                    };
                    l[t] = e.axes[t],
                    u(a);
                    return
                }
            }
            ;
            return r = requestAnimationFrame(c),
            () => cancelAnimationFrame(r)
        }
        , [e, t, a, i, n])
    }
    function ew() {
        var e;
        let {bindings: a, padIndex: i, connected: n, standard: r, reading: o} = ep()
          , d = (0,
        l.useSimStore)(e => !1 !== (0,
        D.editedSettings)(e).flight.rumble)
          , c = (0,
        l.useSimStore)(e => (0,
        D.editedSettings)(e).flight.autoArm)
          , u = (0,
        l.useSimStore)(e => e.updateBindings)
          , h = (0,
        l.useSimStore)(e => e.updateFlight)
          , [m,p] = (0,
        s.useState)(null)
          , [x,f] = (0,
        s.useState)(null)
          , j = n && !a.keyboardOnly
          , b = m?.device !== "controller" || j ? m : null
          , v = (0,
        s.useCallback)( () => p(null), [])
          , S = (0,
        s.useCallback)(e => f(e), [])
          , k = (0,
        s.useCallback)( (e, t) => {
            u({
                keyboard: {
                    ...a.keyboard,
                    [e]: t
                }
            }),
            f(null),
            p(null)
        }
        , [a.keyboard, u])
          , w = (0,
        s.useCallback)( (e, t) => {
            u({
                [e]: t
            }),
            f(null),
            p(null)
        }
        , [u]);
        e = a.keyboard,
        (0,
        s.useEffect)( () => {
            if (!b)
                return;
            let t = t => {
                if ("Escape" === t.code) {
                    t.preventDefault(),
                    t.stopImmediatePropagation(),
                    v();
                    return
                }
                if ("keyboard" !== b.device || (t.preventDefault(),
                t.stopImmediatePropagation(),
                t.repeat))
                    return;
                let s = (0,
                er.validateKeyboardBind)(t.code, b.action, e);
                s ? S((0,
                er.bindRejectMessage)(s)) : k(b.action, t.code)
            }
            ;
            return window.addEventListener("keydown", t, !0),
            () => window.removeEventListener("keydown", t, !0)
        }
        , [b, e, k, S, v]),
        ek(b, a, i, w, S);
        let C = e => {
            f(null),
            p(t => t?.device === e.device && t.action === e.action ? null : e)
        }
          , N = (0,
        s.useMemo)( () => {
            let e = {
                axes: o.axes,
                buttons: o.values.map( (e, t) => ({
                    value: e,
                    pressed: o.buttons[t]
                }))
            }
              , t = t => "none" !== t.kind && null !== o.id && !0 === (0,
            T.readArmPressed)(e, t, !1);
            return {
                arm: t(a.arm),
                interact: t(a.interact)
            }
        }
        , [a.arm, a.interact, o]);
        return (0,
        t.jsxs)(eo.Card, {
            title: "Buttons & switches",
            className: "fd-set-binds-card",
            children: [(0,
            t.jsxs)("div", {
                className: "fd-set-binds",
                role: "table",
                "aria-label": "Bindings",
                children: [(0,
                t.jsxs)("div", {
                    role: "row",
                    className: "fd-set-bind fd-set-bind--head",
                    children: [(0,
                    t.jsx)("span", {
                        role: "columnheader",
                        children: (0,
                        t.jsx)("span", {
                            className: "fdk-sr",
                            children: "Action"
                        })
                    }), (0,
                    t.jsx)("span", {
                        role: "columnheader",
                        children: "Keyboard"
                    }), (0,
                    t.jsx)("span", {
                        role: "columnheader",
                        children: "radio" === a.deviceKind ? "Radio" : "Controller"
                    }), (0,
                    t.jsx)("span", {
                        role: "columnheader",
                        children: (0,
                        t.jsx)("span", {
                            className: "fdk-sr",
                            children: "Behavior"
                        })
                    })]
                }), eS.map( ({action: e, label: s}) => {
                    let i = a[e]
                      , n = b?.device === "keyboard" && b.action === e
                      , l = b?.device === "controller" && b.action === e;
                    return (0,
                    t.jsxs)("div", {
                        role: "row",
                        className: "fd-set-bind",
                        id: `set-bind-${e}`,
                        children: [(0,
                        t.jsx)("span", {
                            role: "rowheader",
                            className: "fd-set-bind-name",
                            children: s
                        }), (0,
                        t.jsx)("span", {
                            role: "cell",
                            children: (0,
                            t.jsx)(ey, {
                                name: `${s} key`,
                                label: (0,
                                er.formatKeyCode)(a.keyboard[e]),
                                prompt: "Press a key",
                                listening: n,
                                onClick: () => C({
                                    device: "keyboard",
                                    action: e
                                })
                            })
                        }), (0,
                        t.jsxs)("span", {
                            role: "cell",
                            className: "fd-set-bind-control",
                            children: [(0,
                            t.jsx)(ey, {
                                name: `${s} control`,
                                prompt: "Press or flip",
                                label: "none" === i.kind ? j ? "Unbound" : "No controller" : (0,
                                R.bindingLabel)(i, a.deviceKind, a.deviceId, r),
                                empty: "none" === i.kind,
                                live: ("arm" === e || "interact" === e) && N[e],
                                disabled: !j,
                                focusFirst: j,
                                listening: l,
                                onClick: () => C({
                                    device: "controller",
                                    action: e
                                })
                            }), "none" !== i.kind && !l && (0,
                            t.jsx)("span", {
                                className: "fd-set-bind-clear",
                                children: (0,
                                t.jsx)(y.IconButton, {
                                    label: `Clear ${s} control`,
                                    icon: (0,
                                    t.jsx)(g.Icon, {
                                        name: "close",
                                        size: 24
                                    }),
                                    onClick: () => {
                                        f(null),
                                        u({
                                            [e]: er.UNBOUND_SWITCH
                                        })
                                    }
                                })
                            })]
                        }), (0,
                        t.jsx)("span", {
                            role: "cell",
                            className: "fd-set-bind-mode",
                            children: "arm" === e && (0,
                            t.jsxs)(t.Fragment, {
                                children: [(0,
                                t.jsx)(A.Select, {
                                    label: "Arm behavior",
                                    value: a.armBehavior,
                                    onChange: e => u({
                                        armBehavior: e
                                    }),
                                    options: [{
                                        value: "toggle",
                                        label: "Toggle on press"
                                    }, {
                                        value: "follow",
                                        label: "Follow switch"
                                    }]
                                }), (0,
                                t.jsx)(en.InfoTip, {
                                    topic: "Arm behavior",
                                    children: "Toggle: each press arms or disarms. Follow switch: armed while the switch is on, and the keyboard arm key is ignored."
                                })]
                            })
                        })]
                    }, e)
                }
                )]
            }), x && (0,
            t.jsx)("p", {
                className: "fd-set-field-error",
                role: "alert",
                children: x
            }), (0,
            t.jsx)(A.SettingRow, {
                label: "Controller rumble",
                htmlFor: "set-rumble-switch",
                info: "Feedback for shots, hits and KOs. Off while motion is reduced.",
                children: (0,
                t.jsx)(A.Switch, {
                    id: "set-rumble-switch",
                    label: "Controller rumble",
                    checked: d,
                    onChange: e => h({
                        rumble: e
                    })
                })
            }), (0,
            t.jsx)("div", {
                id: "set-auto-arm",
                className: "fd-set-auto-arm",
                children: (0,
                t.jsx)(A.SettingRow, {
                    label: "Auto-arm at flight start",
                    htmlFor: "set-auto-arm-switch",
                    info: "Arms when a new flight starts with the throttle low. Respawns keep whatever you chose. A radio arm switch always decides.",
                    children: (0,
                    t.jsx)(A.Switch, {
                        id: "set-auto-arm-switch",
                        label: "Auto-arm at flight start",
                        checked: c,
                        onChange: e => h({
                            autoArm: e
                        })
                    })
                })
            })]
        })
    }
    function eC() {
        return (0,
        t.jsx)(eo.Card, {
            title: "Movement keys",
            id: "set-keyboard",
            children: (0,
            t.jsx)(ej, {})
        })
    }
    let eN = ["mode2", "mode1", "mode4", "mode3"]
      , eA = {
        throttle: "Throttle all the way up",
        yaw: "Yaw all the way right",
        pitch: "Pitch all the way forward",
        roll: "Roll all the way right"
    }
      , eE = {
        throttle: !1,
        roll: !1,
        pitch: !1,
        yaw: !1
    }
      , eL = {
        device: "controller",
        action: "arm"
    };
    function eM(e, t, s) {
        if (e === t.deviceId || null === t.deviceId && !t.keyboardOnly)
            return t;
        let a = s[e];
        if (a)
            return {
                ...a,
                deviceId: e,
                keyboard: t.keyboard,
                keyboardOnly: !1
            };
        let i = (0,
        P.classifyDevice)(e);
        return {
            ...(0,
            I.bindingsForMode)("mode2", e),
            deviceKind: i,
            armBehavior: (0,
            P.defaultArmBehavior)(i),
            keyboard: t.keyboard
        }
    }
    function eI(e, t, s=null) {
        let a = t.deviceKind ?? (0,
        P.classifyDevice)(e) ?? s
          , i = (0,
        B.onTemplate)(t.channels);
        return {
            kind: a,
            mode: ("radio" === a ? t.stickMode : (0,
            I.detectStickMode)(t) ?? t.stickMode) ?? "mode2",
            springs: i ? "gamepad" === a : t.throttleSelfCentering,
            halfThrottle: t.halfThrottle
        }
    }
    function eR() {
        let e = (0,
        l.useSimStore)(e => (0,
        D.editedSettings)(e).bindings)
          , a = (0,
        l.useSimStore)(e => (0,
        D.editedSettings)(e).deviceProfiles)
          , i = (0,
        l.useSimStore)(e => e.commitCalibration)
          , n = (0,
        l.useSimStore)(e => e.setCalibrating)
          , r = (0,
        l.useSimStore)(e => e.setCalibrationDraft)
          , o = (0,
        l.useSimStore)(e => e.requestLeaveCalibration)
          , d = (0,
        l.useSimStore)(e => e.calibrationKindHint)
          , c = (0,
        F.useGamepadList)(!0)
          , [u] = (0,
        s.useState)( () => {
            let t = (0,
            $.listGamepads)()
              , s = (!e.keyboardOnly && e.deviceId && t.some(t => t.id === e.deviceId) ? e.deviceId : null) ?? (1 === t.length ? t[0].id : null);
            return {
                deviceId: s,
                choices: s ? eI(s, eM(s, e, a), d) : null
            }
        }
        )
          , [h,m] = (0,
        s.useState)(u.deviceId)
          , [p,x] = (0,
        s.useState)(u.deviceId ? "sticks" : "device")
          , [f,j] = (0,
        s.useState)(u.choices?.kind ?? d)
          , [b,v] = (0,
        s.useState)(u.choices?.mode ?? "mode2")
          , [S,w] = (0,
        s.useState)(u.choices?.springs ?? !1)
          , [C,O] = (0,
        s.useState)(u.choices?.halfThrottle ?? !1)
          , [H,G] = (0,
        s.useState)({})
          , [q,U] = (0,
        s.useState)(null)
          , [K,W] = (0,
        s.useState)(0)
          , [V,Y] = (0,
        s.useState)({
            left: 0,
            right: 0
        })
          , [Q,Z] = (0,
        s.useState)({
            ranges: [],
            trails: {
                left: [],
                right: []
            }
        })
          , [X,ee] = (0,
        s.useState)(!1)
          , [et,ei] = (0,
        s.useState)(!1)
          , [en,er] = (0,
        s.useState)([])
          , [ed,ec] = (0,
        s.useState)(null)
          , [eu,eh] = (0,
        s.useState)(eE)
          , [em,ep] = (0,
        s.useState)(null)
          , [ex,ef] = (0,
        s.useState)(!1)
          , [eg,ej] = (0,
        s.useState)(null)
          , eb = (0,
        s.useRef)([])
          , ev = (0,
        s.useMemo)( () => h ? eM(h, e, a) : e, [h, e, a])
          , eS = null !== h && c.some(e => e.id === h)
          , ey = "device" !== p && null !== h && !eS
          , ew = (0,
        F.useGamepadReading)(h, "device" !== p && null !== h)
          , eC = null !== ew.id && ew.id === h ? ew.axes : null
          , eR = "radio" === f
          , eT = q?.channel ?? B.GESTURE_ORDER.find(e => !H[e]) ?? null
          , eB = M.CHANNEL_NAMES.filter(e => H[e]).length
          , eP = eB > 0 || "range" === p || "check" === p;
        (0,
        s.useEffect)( () => {
            r(eP)
        }
        , [eP, r]);
        let e$ = t => {
            let s = eI(t, eM(t, e, a), d);
            m(t),
            j(s.kind),
            v(s.mode),
            w(s.springs),
            O(s.halfThrottle),
            x("sticks")
        }
        ;
        "device" !== p || h || 1 !== c.length || e$(c[0].id);
        let eD = (0,
        s.useCallback)( (e, t) => {
            G(s => ({
                ...s,
                [e]: t
            })),
            Y(t => {
                let s = (0,
                B.wellOf)(e, b).side;
                return {
                    ...t,
                    [s]: t[s] + 1
                }
            }
            ),
            W(0),
            q ? (U(null),
            x("check")) : B.GESTURE_ORDER.every(t => t === e || H[t]) && x("range")
        }
        , [H, b, q]);
        (0,
        s.useEffect)( () => {
            if ("sticks" !== p || !h || !eT)
                return;
            let e = (0,
            B.startGesture)()
              , t = (0,
            B.switchAxes)(ev);
            for (let e of M.CHANNEL_NAMES) {
                let s = H[e];
                s && e !== eT && t.add(s.axisIndex)
            }
            let s = 0
              , a = 0
              , i = n => {
                s = requestAnimationFrame(i);
                let r = (0,
                $.getRawGamepad)(h, !0);
                if (!r)
                    return;
                let l = (0,
                B.stepGesture)(e, r.axes, n, eT, t);
                if (l.learned) {
                    cancelAnimationFrame(s),
                    eD(eT, l.learned);
                    return
                }
                (Math.abs(l.progress - a) >= .05 || 0 === l.progress && 0 !== a) && (a = l.progress,
                W(l.progress))
            }
            ;
            return s = requestAnimationFrame(i),
            () => cancelAnimationFrame(s)
        }
        , [p, h, eT, H, ev, eD]);
        let ez = (0,
        s.useCallback)(e => ({
            ...ev,
            channels: e,
            swappedAxes: eE,
            deviceKind: "radio",
            stickMode: b,
            throttleSelfCentering: S,
            halfThrottle: C
        }), [ev, b, S, C]);
        (0,
        s.useEffect)( () => {
            if ("range" !== p || !h)
                return;
            let e = [];
            eb.current = e;
            let t = {
                left: [],
                right: []
            }
              , s = []
              , a = ez((0,
            B.provisionalChannels)(H))
              , i = 0
              , n = 0
              , r = 0
              , l = 0
              , o = d => {
                i = requestAnimationFrame(o);
                let c = (0,
                $.getRawGamepad)(h, !0);
                if (!c)
                    return;
                n ||= d;
                let u = Array.from(c.axes);
                for ((0,
                B.widenRanges)(e, u),
                s.push({
                    time: d,
                    axes: u
                }); s.length && d - s[0].time > 700; )
                    s.shift();
                let m = es(a, u, "other");
                for (let e of ["left", "right"])
                    t[e].push([m[e].x, m[e].y]),
                    t[e].length > 45 && t[e].shift();
                if (!r && d - n >= B.SWEEP_MIN_MS && (0,
                B.rangeComplete)(H, e) && (r = d,
                ee(!0)),
                r) {
                    let t = (0,
                    B.restingAxes)(s, H, e, S, d);
                    if (t)
                        return void (cancelAnimationFrame(i),
                        er(e.map(e => e && {
                            ...e
                        })),
                        ec(t),
                        ee(!1),
                        ei(!1),
                        x("check"));
                    d - r >= B.REST_FALLBACK_MS && ei(!0)
                }
                d - l >= 33 && (l = d,
                Z({
                    ranges: e.map(e => e && {
                        ...e
                    }),
                    trails: {
                        left: [...t.left],
                        right: [...t.right]
                    }
                }))
            }
            ;
            return i = requestAnimationFrame(o),
            () => cancelAnimationFrame(i)
        }
        , [p, h, H, S, ez]);
        let eF = (0,
        s.useMemo)( () => ed ? (0,
        B.buildChannels)(H, en, ed, {
            springs: S,
            flips: eu
        }) : (0,
        B.provisionalChannels)(H), [H, en, ed, S, eu])
          , e_ = em ?? ev.arm
          , eO = (0,
        s.useMemo)( () => ({
            ...ev,
            deviceId: h,
            deviceKind: f,
            channels: eF,
            swappedAxes: eE,
            halfThrottle: C,
            throttleSelfCentering: S,
            arm: e_
        }), [ev, h, f, eF, C, S, e_])
          , eH = "check" === p && eR && eS && ("none" === e_.kind || ex);
        ek(eH ? eL : null, eO, null, (0,
        s.useCallback)( (e, t) => {
            ep(t),
            ef(!1),
            ej(null)
        }
        , []), (0,
        s.useCallback)(e => ej(e), []));
        let eG = (0,
        s.useMemo)( () => {
            if ("none" === e_.kind || !eC)
                return !1;
            let e = {
                axes: ew.axes,
                buttons: ew.values.map( (e, t) => ({
                    value: e,
                    pressed: ew.buttons[t]
                }))
            };
            return !0 === (0,
            T.readArmPressed)(e, e_, !1)
        }
        , [e_, eC, ew])
          , eq = (0,
        s.useCallback)( () => {
            h && ed && (i(h, {
                channels: eF,
                swappedAxes: eE,
                halfThrottle: C,
                throttleSelfCentering: S,
                deviceKind: f,
                ...eR ? {
                    stickMode: b
                } : {},
                ...em ? {
                    arm: em,
                    ..."none" !== em.kind ? {
                        armBehavior: (0,
                        P.defaultArmBehavior)(f)
                    } : {}
                } : {}
            }),
            n(!1))
        }
        , [h, ed, i, eF, C, S, f, eR, b, em, n])
          , eU = (0,
        s.useRef)({
            phase: p,
            save: eq,
            leave: o
        });
        (0,
        s.useEffect)( () => {
            eU.current = {
                phase: p,
                save: eq,
                leave: o
            }
        }
        ),
        (0,
        s.useEffect)( () => {
            let e = e => {
                !l.useSimStore.getState().settingsPrompt && ("Escape" === e.key ? (e.preventDefault(),
                e.stopPropagation(),
                eU.current.leave()) : "Enter" !== e.key || "check" !== eU.current.phase || e.target instanceof HTMLElement && e.target.closest("button, input, select, textarea, a") || (e.preventDefault(),
                eU.current.save()))
            }
            ;
            return window.addEventListener("keydown", e, !0),
            () => window.removeEventListener("keydown", e, !0)
        }
        , []);
        let eK = es(ez(eF), eC, "other");
        if ("sticks" === p)
            for (let e of ["left", "right"]) {
                let t = [eK[e].vertical, eK[e].horizontal].some(e => e && H[e]);
                eK[e] = {
                    ...eK[e],
                    idle: !t
                }
            }
        let eW = {
            left: {
                pulse: V.left
            },
            right: {
                pulse: V.right
            }
        };
        if ("sticks" === p && eT) {
            let {side: e, axis: t} = (0,
            B.wellOf)(eT, b);
            eW[e] = {
                ...eW[e],
                target: "vertical" === t ? "up" : "right",
                hold: K
            }
        }
        let eV = 0;
        if ("range" === p)
            for (let e of ["left", "right"]) {
                let t = e => {
                    let t = e ? H[e] : void 0;
                    return e && t ? (0,
                    B.edgesReached)(e, t, Q.ranges[t.axisIndex]) : {
                        high: !1,
                        low: !1
                    }
                }
                  , s = t(eK[e].vertical)
                  , a = t(eK[e].horizontal)
                  , i = {
                    up: s.high,
                    down: s.low,
                    right: a.high,
                    left: a.low
                };
                eV += Object.values(i).filter(Boolean).length,
                eW[e] = {
                    ...eW[e],
                    trail: Q.trails[e],
                    edges: i
                }
            }
        let eY = "gamepad" === f ? "Calibrate gamepad" : "radio" === f ? "Calibrate radio" : "Calibrate controller"
          , eQ = {
            sticks: "sticks" === p ? eB / 4 : +("device" !== p),
            range: "range" === p ? X ? 1 : eV / 8 : +("check" === p),
            check: +("check" === p)
        };
        return (0,
        t.jsxs)("div", {
            className: "fd-set-page fd-set-page--calibration",
            children: [(0,
            t.jsx)(el.PageHeader, {
                title: eY,
                back: {
                    label: "Controls",
                    onClick: o
                },
                children: h && (0,
                t.jsxs)("span", {
                    className: "fd-set-device-pill",
                    children: [(0,
                    t.jsx)(g.Icon, {
                        name: eR ? "radio" : "gamepad",
                        size: 24
                    }), " ", (0,
                    $.friendlyGamepadName)(h), (0,
                    t.jsxs)("span", {
                        className: (0,
                        z.cn)("fd-set-status", eS ? "is-ok" : "is-warn"),
                        children: [(0,
                        t.jsx)("span", {
                            "aria-hidden": !0
                        }), eS ? "Connected" : "Not connected"]
                    })]
                })
            }), ey && (0,
            t.jsx)(L.Toast, {
                className: "fd-set-banner",
                tone: "error",
                icon: "circle-alert",
                title: "Controller disconnected. Reconnect it to continue."
            }), "device" === p ? (0,
            t.jsxs)(eo.Card, {
                title: "Choose your controller",
                children: [0 === c.length ? (0,
                t.jsxs)("p", {
                    className: "fd-set-instruction",
                    children: [(0,
                    t.jsx)(g.Icon, {
                        name: "gamepad",
                        className: "fd-set-inline-icon",
                        size: 24
                    }), " Plug in your controller and move a stick."]
                }) : (0,
                t.jsx)(k.List, {
                    label: "Controllers",
                    className: "fd-set-device-list",
                    children: c.map(e => (0,
                    t.jsx)(k.ListRow, {
                        lead: (0,
                        t.jsx)(g.Icon, {
                            name: "gamepad",
                            size: 24
                        }),
                        title: (0,
                        $.friendlyGamepadName)(e.id),
                        meta: `${e.axes.length} axes \xb7 ${e.buttonValues.length} buttons`,
                        onClick: () => e$(e.id)
                    }, `${e.id}-${e.index}`))
                }), (0,
                t.jsx)("div", {
                    className: "fd-set-cal-actions",
                    children: (0,
                    t.jsx)(y.Button, {
                        tone: "ghost",
                        onClick: o,
                        children: "Cancel"
                    })
                })]
            }) : (0,
            t.jsxs)("div", {
                className: "fd-set-cal",
                children: [(0,
                t.jsxs)(eo.Card, {
                    tone: "dark",
                    className: "fd-set-cal-stage",
                    children: ["range" !== p && (0,
                    t.jsxs)("label", {
                        className: "fd-set-cal-layout",
                        children: [(0,
                        t.jsx)("span", {
                            children: "Stick layout"
                        }), (0,
                        t.jsx)(A.Select, {
                            label: "Stick layout",
                            value: b,
                            onChange: v,
                            options: eN.map(e => ({
                                value: e,
                                label: I.STICK_MODE_LABELS[e]
                            }))
                        })]
                    }), (0,
                    t.jsx)(J, {
                        radio: eR,
                        wells: eK,
                        guides: eW,
                        label: ea(eK)
                    })]
                }), (0,
                t.jsxs)(eo.Card, {
                    className: "fd-set-cal-panel",
                    children: [(0,
                    t.jsx)("ol", {
                        className: "fd-set-cal-progress",
                        "aria-label": "Calibration progress",
                        children: ["sticks", "range", "check"].map(e => (0,
                        t.jsxs)("li", {
                            className: (0,
                            z.cn)(p === e && "is-current"),
                            "aria-current": p === e ? "step" : void 0,
                            children: [(0,
                            t.jsx)("span", {
                                className: "fd-set-cal-progress-bar",
                                children: (0,
                                t.jsx)("span", {
                                    style: {
                                        width: `${100 * eQ[e]}%`
                                    }
                                })
                            }), "sticks" === e ? "Sticks" : "range" === e ? "Range" : "Check"]
                        }, e))
                    }), "sticks" === p && eT && (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                        t.jsxs)("div", {
                            className: "fd-set-cal-say",
                            "aria-live": "polite",
                            children: [(0,
                            t.jsx)("h3", {
                                children: eA[eT]
                            }), (0,
                            t.jsx)("p", {
                                className: (0,
                                z.cn)("fd-set-cal-hint", K > 0 && "is-on"),
                                children: "Hold it"
                            })]
                        }), (0,
                        t.jsx)("div", {
                            className: "fd-set-chips",
                            role: "group",
                            "aria-label": "Sticks learned",
                            children: B.GESTURE_ORDER.map(e => {
                                let s = !!H[e];
                                return (0,
                                t.jsx)(N.Chip, {
                                    size: "sm",
                                    edge: s ? "acid" : e === eT ? "orange" : "none",
                                    icon: s ? (0,
                                    t.jsx)(g.Icon, {
                                        name: "check",
                                        size: 24
                                    }) : void 0,
                                    className: "fd-set-chip",
                                    disabled: !s || !!q,
                                    onClick: () => G(t => {
                                        let s = {
                                            ...t
                                        };
                                        return delete s[e],
                                        s
                                    }
                                    ),
                                    "aria-current": e === eT ? "step" : void 0,
                                    "aria-label": s ? `${_.CHANNEL_LABEL[e]} learned. Learn it again.` : _.CHANNEL_LABEL[e],
                                    children: _.CHANNEL_LABEL[e]
                                }, e)
                            }
                            )
                        })]
                    }), "range" === p && (0,
                    t.jsxs)("div", {
                        className: "fd-set-cal-say",
                        "aria-live": "polite",
                        children: [(0,
                        t.jsx)("h3", {
                            children: X ? "Let go of the sticks" : "Circle both sticks around the edges"
                        }), (0,
                        t.jsxs)("p", {
                            className: "fdk-sr",
                            children: [eV, " of 8 edges reached"]
                        }), et && (0,
                        t.jsx)(y.Button, {
                            tone: "ghost",
                            size: "sm",
                            onClick: () => {
                                let e = h ? (0,
                                $.getRawGamepad)(h, !0) : null;
                                e && (er(eb.current.map(e => e && {
                                    ...e
                                })),
                                ec(Array.from(e.axes)),
                                ee(!1),
                                ei(!1),
                                x("check"))
                            }
                            ,
                            children: "Use current position"
                        })]
                    }), "check" === p && (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                        t.jsx)("h3", {
                            className: "fd-set-cal-heading",
                            children: "Check your sticks"
                        }), (0,
                        t.jsxs)("div", {
                            className: "fd-set-cal-rows",
                            role: "table",
                            "aria-label": "Channel check",
                            children: [(0,
                            t.jsxs)("div", {
                                role: "row",
                                className: "fd-set-cal-row fd-set-cal-row--head",
                                children: [(0,
                                t.jsx)("span", {
                                    role: "columnheader",
                                    children: (0,
                                    t.jsx)("span", {
                                        className: "fdk-sr",
                                        children: "Channel"
                                    })
                                }), (0,
                                t.jsx)("span", {
                                    role: "columnheader",
                                    children: (0,
                                    t.jsx)("span", {
                                        className: "fdk-sr",
                                        children: "Live"
                                    })
                                }), (0,
                                t.jsx)("span", {
                                    role: "columnheader",
                                    children: "Invert"
                                }), (0,
                                t.jsx)("span", {
                                    role: "columnheader",
                                    children: (0,
                                    t.jsx)("span", {
                                        className: "fdk-sr",
                                        children: "Learn again"
                                    })
                                })]
                            }), M.CHANNEL_NAMES.map(e => (0,
                            t.jsxs)("div", {
                                role: "row",
                                className: "fd-set-cal-row",
                                children: [(0,
                                t.jsx)("span", {
                                    role: "rowheader",
                                    children: _.CHANNEL_LABEL[e]
                                }), (0,
                                t.jsx)("span", {
                                    role: "cell",
                                    children: (0,
                                    t.jsx)(eo.Meter, {
                                        label: `${_.CHANNEL_LABEL[e]} check`,
                                        value: (0,
                                        I.radioSense)(e, (0,
                                        I.channelValue)(e, eO, eC)),
                                        unipolar: "throttle" === e,
                                        color: _.CHANNEL_COLOR[e]
                                    })
                                }), (0,
                                t.jsx)("span", {
                                    role: "cell",
                                    children: (0,
                                    t.jsx)(A.Checkbox, {
                                        label: (0,
                                        t.jsxs)("span", {
                                            className: "fdk-sr",
                                            children: ["Invert ", _.CHANNEL_LABEL[e]]
                                        }),
                                        checked: eu[e],
                                        onChange: t => eh(s => ({
                                            ...s,
                                            [e]: t
                                        }))
                                    })
                                }), (0,
                                t.jsx)("span", {
                                    role: "cell",
                                    children: (0,
                                    t.jsx)(y.Button, {
                                        size: "sm",
                                        tone: "ghost",
                                        className: "fd-set-cal-redo",
                                        icon: (0,
                                        t.jsx)(g.Icon, {
                                            name: "rotate",
                                            size: 24
                                        }),
                                        onClick: () => {
                                            U({
                                                channel: e,
                                                previous: H[e]
                                            }),
                                            G(t => {
                                                let s = {
                                                    ...t
                                                };
                                                return delete s[e],
                                                s
                                            }
                                            ),
                                            W(0),
                                            x("sticks")
                                        }
                                        ,
                                        "aria-label": `Learn ${_.CHANNEL_LABEL[e]} again`,
                                        children: "Redo"
                                    })
                                })]
                            }, e))]
                        }), (0,
                        t.jsxs)("div", {
                            className: "fd-set-cal-throttle",
                            children: [(0,
                            t.jsx)("span", {
                                className: "fd-set-row-label",
                                children: "Throttle"
                            }), (0,
                            t.jsx)(E.Segmented, {
                                label: "Throttle travel",
                                size: "sm",
                                value: C ? "center" : "full",
                                onChange: e => O("center" === e),
                                options: [{
                                    value: "full",
                                    label: "Full stick"
                                }, {
                                    value: "center",
                                    label: "Center to top"
                                }]
                            }), (0,
                            t.jsx)(E.Segmented, {
                                label: "Physical throttle stick",
                                size: "sm",
                                value: S ? "springs" : "stays",
                                onChange: e => w("springs" === e),
                                options: [{
                                    value: "stays",
                                    label: "Stays where released"
                                }, {
                                    value: "springs",
                                    label: "Springs to center"
                                }]
                            })]
                        }), eR && (0,
                        t.jsxs)("div", {
                            className: "fd-set-cal-arm",
                            children: [(0,
                            t.jsx)("span", {
                                className: "fd-set-row-label",
                                children: "Arm switch"
                            }), (0,
                            t.jsxs)("span", {
                                className: "fd-set-bind-control",
                                children: [(0,
                                t.jsx)(y.Button, {
                                    tone: eH ? "primary" : eG ? "secondary" : "ghost",
                                    size: "sm",
                                    block: !0,
                                    className: (0,
                                    z.cn)("fd-set-bindbox", "none" === e_.kind && "is-empty"),
                                    disabled: !eS,
                                    "aria-pressed": eH,
                                    onClick: () => {
                                        ej(null),
                                        ef(!ex)
                                    }
                                    ,
                                    "aria-label": eH ? "Arm switch: flip the switch you arm with" : `Arm switch: ${(0,
                                    R.bindingLabel)(e_, "radio", h, !1)}. Click to change.`,
                                    children: eH ? "Flip to bind" : (0,
                                    R.bindingLabel)(e_, "radio", h, !1)
                                }), "none" !== e_.kind && !eH && (0,
                                t.jsx)("span", {
                                    className: "fd-set-bind-clear",
                                    children: (0,
                                    t.jsx)(y.IconButton, {
                                        label: "Clear arm switch",
                                        icon: (0,
                                        t.jsx)(g.Icon, {
                                            name: "close",
                                            size: 24
                                        }),
                                        onClick: () => {
                                            ej(null),
                                            ef(!1),
                                            ep({
                                                kind: "none"
                                            })
                                        }
                                    })
                                })]
                            }), "none" !== e_.kind && !eH && (0,
                            t.jsx)(N.Badge, {
                                tone: eG ? "acid" : "chalk",
                                children: eG ? "Armed position" : "Disarmed position"
                            }), eg && (0,
                            t.jsx)("p", {
                                className: "fd-set-field-error",
                                role: "alert",
                                children: eg
                            })]
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "fd-set-cal-actions",
                        children: [("sticks" === p || "range" === p) && eB > 0 && !q && (0,
                        t.jsx)(y.Button, {
                            tone: "ghost",
                            size: "sm",
                            icon: (0,
                            t.jsx)(g.Icon, {
                                name: "rotate",
                                size: 24
                            }),
                            onClick: () => {
                                G({}),
                                U(null),
                                eh(eE),
                                W(0),
                                ee(!1),
                                ei(!1),
                                Z({
                                    ranges: [],
                                    trails: {
                                        left: [],
                                        right: []
                                    }
                                }),
                                x("sticks")
                            }
                            ,
                            children: "Start over"
                        }), q && (0,
                        t.jsx)(y.Button, {
                            tone: "ghost",
                            onClick: () => {
                                if (!q)
                                    return;
                                let {channel: e, previous: t} = q;
                                t && G(s => ({
                                    ...s,
                                    [e]: t
                                })),
                                U(null),
                                x("check")
                            }
                            ,
                            children: "Back"
                        }), (0,
                        t.jsx)(y.Button, {
                            tone: "ghost",
                            onClick: o,
                            children: "Cancel"
                        }), "check" === p && (0,
                        t.jsx)(y.Button, {
                            tone: "primary",
                            onClick: eq,
                            disabled: !ed,
                            children: "Save calibration"
                        })]
                    })]
                })]
            })]
        })
    }
    var eT = e.i(811113);
    let eB = [{
        key: "showSticks",
        label: "Stick overlay",
        target: "set-hud-sticks"
    }, {
        key: "showActivityOverlays",
        label: "Activity markers",
        info: "Markers for races and Team Deathmatch arenas.",
        target: "set-hud-activities"
    }, {
        key: "showRacingLine",
        label: "Racing line",
        target: "set-hud-racing-line"
    }, {
        key: "showChat",
        label: "Global chat",
        target: "set-hud-chat"
    }, {
        key: "showPlayerOverlays",
        label: "Player markers",
        info: "Names and distances for other pilots.",
        target: "set-hud-players"
    }, {
        key: "showSkillChainHud",
        label: "Skill-chain feedback",
        info: "Trick scores and combo multipliers.",
        target: "set-hud-chain"
    }];
    var eP = e.i(12746)
      , e$ = e.i(55807)
      , eD = e.i(117532);
    let ez = ["roll", "pitch", "yaw"]
      , eF = _.CHANNEL_LABEL
      , e_ = e => _.DARK_CHANNEL_COLOR[e]
      , eO = {
        "builtin:cinematic": "video",
        "builtin:freestyle": "wind",
        "builtin:racing": "flag"
    }
      , eH = eD.BUILT_IN_RATE_PRESETS.find(e => "builtin:freestyle" === e.id);
    function eG(e) {
        (0,
        eo.downloadText)(`${e.name.replace(/[^\w-]+/g, "-").toLowerCase()}.json`, (0,
        eD.exportPreset)(e))
    }
    function eq() {
        let e = (0,
        l.useSimStore)(D.editedSettings)
          , t = (0,
        l.useSimStore)(e => e.ratePresets)
          , s = (0,
        l.useSimStore)(D.editedPresetId)
          , a = (0,
        eD.findPreset)(t, s)
          , i = a ?? (0,
        eD.allPresets)(t).find(t => (0,
        eD.snapshotsEqual)(t, e)) ?? null;
        return {
            library: t,
            selected: i,
            modified: !!a && !(0,
            eD.snapshotsEqual)(a, e)
        }
    }
    function eU({rates: e}) {
        var s;
        let a = (s = Math.max(...ez.flatMap(t => [e[t].maxRate, e[t].centerSensitivity])),
        [250, 500, 750, 1e3, 1250, 1500, 2e3].find(e => e >= s) ?? 2e3)
          , i = e => 46 + (e + 1) / 2 * 264
          , n = e => 12 + (1 - (e + a) / (2 * a)) * 178
          , r = ez.map(t => `${eF[t]} ${Math.round((0,
        eP.applyActualRates)(1, e[t]))} \xb0/s at full stick`).join(", ");
        return (0,
        t.jsx)("figure", {
            className: "fd-set-curve",
            children: (0,
            t.jsxs)("svg", {
                viewBox: "0 0 320 220",
                role: "img",
                "aria-label": `Stick response: ${r}.`,
                children: [[a, a / 2, 0, -a / 2, -a].map(e => (0,
                t.jsxs)("g", {
                    children: [(0,
                    t.jsx)("line", {
                        x1: 46,
                        x2: 310,
                        y1: n(e),
                        y2: n(e),
                        className: 0 === e ? "fd-set-curve-axis" : "fd-set-curve-grid"
                    }), (0,
                    t.jsx)("text", {
                        x: 40,
                        y: n(e) + 3.5,
                        textAnchor: "end",
                        children: Math.round(e)
                    })]
                }, e)), [-100, -50, 0, 50, 100].map(e => (0,
                t.jsxs)("g", {
                    children: [(0,
                    t.jsx)("line", {
                        y1: 12,
                        y2: 190,
                        x1: i(e / 100),
                        x2: i(e / 100),
                        className: 0 === e ? "fd-set-curve-axis" : "fd-set-curve-grid"
                    }), (0,
                    t.jsx)("text", {
                        x: i(e / 100),
                        y: 204,
                        textAnchor: "middle",
                        children: e
                    })]
                }, e)), ez.slice().reverse().map(s => (0,
                t.jsx)("polyline", {
                    points: Array.from({
                        length: 101
                    }, (t, a) => {
                        let r = a / 50 - 1;
                        return `${i(r).toFixed(1)},${n((0,
                        eP.applyActualRates)(r, e[s])).toFixed(1)}`
                    }
                    ).join(" "),
                    fill: "none",
                    stroke: e_(s),
                    strokeWidth: 2.4,
                    strokeLinejoin: "round"
                }, s)), ez.map(s => (0,
                t.jsx)("circle", {
                    cx: i(1),
                    cy: n((0,
                    eP.applyActualRates)(1, e[s])),
                    r: 3.2,
                    fill: e_(s)
                }, s)), (0,
                t.jsx)("text", {
                    x: i(0),
                    y: 218,
                    textAnchor: "middle",
                    className: "fd-set-curve-label",
                    children: "Stick (%)"
                }), (0,
                t.jsx)("text", {
                    transform: "translate(10 107) rotate(-90)",
                    textAnchor: "middle",
                    className: "fd-set-curve-label",
                    children: "°/s"
                })]
            })
        })
    }
    function eK({open: e, onClose: a}) {
        let {selected: i, modified: n} = eq()
          , r = (0,
        l.useSimStore)(e => e.savePresetAsNew)
          , o = (0,
        l.useSimStore)(e => e.updatePresetFromWorking)
          , d = i && !(0,
        eD.isBuiltIn)(i) ? i : null
          , [c,u] = (0,
        s.useState)(d ? `${d.name} 2` : "My rates")
          , [h,m] = (0,
        s.useState)(null)
          , p = (0,
        s.useId)()
          , x = () => {
            let e = r(c);
            m(e),
            e || a()
        }
        ;
        return (0,
        t.jsxs)(L.DialogShell, {
            open: e,
            title: "Save preset",
            onClose: a,
            actions: (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)(y.Button, {
                    tone: "ghost",
                    size: "sm",
                    onClick: a,
                    children: "Cancel"
                }), d && n && (0,
                t.jsxs)(y.Button, {
                    tone: "ghost",
                    size: "sm",
                    onClick: () => {
                        o(d.id),
                        a()
                    }
                    ,
                    children: ["Update “", d.name, "”"]
                }), (0,
                t.jsx)(y.Button, {
                    tone: "primary",
                    size: "sm",
                    onClick: x,
                    children: "Save preset"
                })]
            }),
            children: [(0,
            t.jsx)("label", {
                htmlFor: p,
                className: "fd-set-field-label",
                children: "Name"
            }), (0,
            t.jsx)(A.TextInput, {
                id: p,
                "data-autofocus": !0,
                error: h,
                value: c,
                maxLength: eD.PRESET_NAME_MAX,
                onChange: e => {
                    u(e.target.value),
                    m(null)
                }
                ,
                onKeyDown: e => {
                    "Enter" === e.key && (e.preventDefault(),
                    x())
                }
            })]
        })
    }
    function eW() {
        let {library: e, selected: s, modified: a} = eq()
          , i = (0,
        l.useSimStore)(e => e.applyPreset)
          , n = (e, t) => `${t}${e === s?.id && a ? " (edited)" : ""}`;
        return (0,
        t.jsx)(A.Select, {
            label: "Rate preset",
            className: "fd-set-preset-select",
            value: s?.id ?? "custom",
            options: [...s ? [] : [{
                value: "custom",
                label: "Custom"
            }], ...eD.BUILT_IN_RATE_PRESETS.map(e => ({
                value: e.id,
                label: n(e.id, e.name)
            })), ...e.presets.map(e => ({
                value: e.id,
                label: n(e.id, e.name)
            }))],
            onChange: e => {
                "custom" !== e && i(e)
            }
        })
    }
    function eV() {
        let e = (0,
        l.useSimStore)(e => (0,
        D.editedSettings)(e).rates)
          , a = (0,
        l.useSimStore)(e => e.ratesLinked)
          , i = (0,
        l.useSimStore)(e => e.setRatesLinked)
          , n = (0,
        l.useSimStore)(e => e.updateRates)
          , [r,o] = (0,
        s.useState)(!1)
          , d = e => a && "yaw" !== e ? ["roll", "pitch"] : e;
        return (0,
        t.jsxs)(eo.Card, {
            title: "Axis rates",
            id: "set-axis-rates",
            className: "fd-set-rates-card",
            children: [(0,
            t.jsxs)("div", {
                className: "fd-set-rates",
                role: "table",
                "aria-label": "Actual rates",
                children: [(0,
                t.jsxs)("div", {
                    role: "row",
                    className: "fd-set-rates-head",
                    children: [(0,
                    t.jsx)("span", {
                        role: "columnheader",
                        children: "Axis"
                    }), (0,
                    t.jsxs)("span", {
                        role: "columnheader",
                        children: ["Center °/s ", (0,
                        t.jsx)(en.InfoTip, {
                            topic: "Center",
                            children: "Turn rate near center stick. Higher feels twitchier around center. 10 to 2000."
                        })]
                    }), (0,
                    t.jsxs)("span", {
                        role: "columnheader",
                        children: ["Max °/s ", (0,
                        t.jsx)(en.InfoTip, {
                            topic: "Max",
                            children: "Turn rate at full stick. Can't be lower than Center. 50 to 2000."
                        })]
                    }), (0,
                    t.jsxs)("span", {
                        role: "columnheader",
                        children: ["Expo ", (0,
                        t.jsx)(en.InfoTip, {
                            topic: "Expo",
                            children: "Softens the middle of the stick without changing Center or Max. 0 to 1."
                        })]
                    })]
                }), ez.map(s => (0,
                t.jsxs)("div", {
                    role: "row",
                    className: (0,
                    z.cn)("fd-set-rates-row", a && "yaw" !== s && "is-linked"),
                    children: [(0,
                    t.jsxs)("span", {
                        role: "rowheader",
                        className: "fd-set-rates-axis",
                        children: [(0,
                        t.jsx)("i", {
                            style: {
                                background: _.CHANNEL_PALETTE[_.CHANNEL_COLOR[s]]
                            },
                            "aria-hidden": !0
                        }), eF[s]]
                    }), (0,
                    t.jsx)("span", {
                        role: "cell",
                        "data-label": "Center °/s",
                        children: (0,
                        t.jsx)(A.NumberStepper, {
                            label: `${eF[s]} center`,
                            value: e[s].centerSensitivity,
                            min: e$.RATE_LIMITS.centerSensitivity.min,
                            max: e$.RATE_LIMITS.centerSensitivity.max,
                            step: 5,
                            decimals: 0,
                            onCommit: e => n(d(s), {
                                centerSensitivity: e
                            })
                        })
                    }), (0,
                    t.jsx)("span", {
                        role: "cell",
                        "data-label": "Max °/s",
                        children: (0,
                        t.jsx)(A.NumberStepper, {
                            label: `${eF[s]} max`,
                            value: e[s].maxRate,
                            min: e$.RATE_LIMITS.maxRate.min,
                            max: e$.RATE_LIMITS.maxRate.max,
                            step: 10,
                            decimals: 0,
                            onCommit: e => n(d(s), {
                                maxRate: e
                            })
                        })
                    }), (0,
                    t.jsx)("span", {
                        role: "cell",
                        "data-label": "Expo",
                        children: (0,
                        t.jsx)(A.NumberStepper, {
                            label: `${eF[s]} expo`,
                            value: e[s].expo,
                            min: e$.RATE_LIMITS.expo.min,
                            max: e$.RATE_LIMITS.expo.max,
                            step: .01,
                            decimals: 2,
                            onCommit: e => n(d(s), {
                                expo: e
                            })
                        })
                    })]
                }, s))]
            }), (0,
            t.jsx)("span", {
                className: "fd-set-link-rates",
                id: "set-link-rates",
                children: (0,
                t.jsx)(A.Checkbox, {
                    label: "Link Roll & Pitch",
                    checked: a,
                    onChange: t => {
                        if (t) {
                            let t, s;
                            (t = e.roll,
                            s = e.pitch,
                            t.centerSensitivity === s.centerSensitivity && t.maxRate === s.maxRate && t.expo === s.expo) ? i(!0) : o(!0)
                        } else
                            i(!1)
                    }
                })
            }), (0,
            t.jsx)(L.DialogShell, {
                open: r,
                title: "Link Roll & Pitch",
                description: "Roll and Pitch are different. Which values should both use?",
                size: "sm",
                onClose: () => o(!1),
                actions: (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)(y.Button, {
                        tone: "ghost",
                        size: "sm",
                        onClick: () => o(!1),
                        children: "Cancel"
                    }), (0,
                    t.jsx)(y.Button, {
                        tone: "ghost",
                        size: "sm",
                        onClick: () => {
                            i(!0, "pitch"),
                            o(!1)
                        }
                        ,
                        children: "Use Pitch"
                    }), (0,
                    t.jsx)(y.Button, {
                        tone: "primary",
                        size: "sm",
                        onClick: () => {
                            i(!0, "roll"),
                            o(!1)
                        }
                        ,
                        children: "Use Roll"
                    })]
                })
            })]
        })
    }
    function eY() {
        let e = (0,
        l.useSimStore)(e => (0,
        D.editedSettings)(e).throttle)
          , s = (0,
        l.useSimStore)(e => e.updateThrottle);
        return (0,
        t.jsx)(eo.Card, {
            title: "Throttle response",
            id: "set-throttle-response",
            className: "fd-set-throttle-card",
            children: (0,
            t.jsxs)("div", {
                className: "fd-set-grid fd-set-grid--2 fd-set-grid--tight",
                children: [(0,
                t.jsx)(eo.SliderField, {
                    label: "Midpoint",
                    info: "The stick position where expo gives the finest control. Try your hover throttle.",
                    value: e.mid,
                    min: 0,
                    max: 1,
                    step: .01,
                    format: e => `${Math.round(100 * e)}%`,
                    onChange: e => s({
                        mid: e
                    })
                }), (0,
                t.jsx)(eo.SliderField, {
                    label: "Expo",
                    info: "Softens throttle around the midpoint. Full throttle is still there.",
                    value: e.expo,
                    min: 0,
                    max: 1,
                    step: .01,
                    format: e => `${Math.round(100 * e)}%`,
                    onChange: e => s({
                        expo: e
                    })
                })]
            })
        })
    }
    function eQ({preset: e, onRename: a, onDelete: i}) {
        let[n,r] = (0,
        s.useState)(!1)
          , [o,d] = (0,
        s.useState)(null)
          , c = (0,
        l.useSimStore)(e => e.duplicatePreset)
          , u = (0,
        s.useRef)(null)
          , h = (0,
        s.useRef)(null);
        (0,
        s.useEffect)( () => {
            let e = h.current;
            if (n && e)
                return e.showPopover?.(),
                e.querySelector('[role="menuitem"]')?.focus(),
                () => {
                    e.isConnected && e.matches(":popover-open") && e.hidePopover()
                }
        }
        , [n]);
        let m = [...(0,
        eD.isBuiltIn)(e) ? [] : [{
            label: "Rename",
            icon: "pencil",
            run: a
        }], {
            label: "Duplicate",
            icon: "copy",
            run: () => c(e.id)
        }, {
            label: "Export",
            icon: "upload",
            run: () => eG(e)
        }, ...(0,
        eD.isBuiltIn)(e) ? [] : [{
            label: "Delete",
            icon: "trash",
            run: i
        }]];
        return (0,
        t.jsxs)("span", {
            className: "fd-set-menu",
            onKeyDown: e => {
                "Escape" === e.key && n && (e.stopPropagation(),
                r(!1),
                u.current?.focus())
            }
            ,
            children: [(0,
            t.jsx)(y.IconButton, {
                ref: u,
                label: `${e.name} actions`,
                icon: (0,
                t.jsx)(g.Icon, {
                    name: "ellipsis",
                    size: 24
                }),
                "aria-haspopup": "menu",
                "aria-expanded": n,
                onClick: e => {
                    let t;
                    e.stopPropagation(),
                    t = u.current?.getBoundingClientRect(),
                    !n && t && d({
                        top: t.bottom + 4,
                        right: window.innerWidth - t.right
                    }),
                    r(!n)
                }
            }), n && (0,
            t.jsxs)("span", {
                ref: h,
                popover: "manual",
                className: "fd-set-menu-layer",
                children: [(0,
                t.jsx)("span", {
                    className: "fd-set-menu-scrim",
                    onClick: e => {
                        e.stopPropagation(),
                        r(!1)
                    }
                }), (0,
                t.jsx)("span", {
                    role: "menu",
                    className: "fd-set-menu-list",
                    style: o ?? void 0,
                    children: m.map(e => (0,
                    t.jsx)(y.Button, {
                        tone: "ghost",
                        size: "sm",
                        block: !0,
                        role: "menuitem",
                        icon: (0,
                        t.jsx)(g.Icon, {
                            name: e.icon,
                            size: 24
                        }),
                        onClick: t => {
                            t.stopPropagation(),
                            r(!1),
                            e.run()
                        }
                        ,
                        children: e.label
                    }, e.label))
                })]
            })]
        })
    }
    function eZ({title: e, presets: s, inspected: a, onInspect: i, onRename: n, onDelete: r, empty: o}) {
        let d = (0,
        l.useSimStore)(D.editedPresetId);
        return (0,
        t.jsxs)(eo.Card, {
            title: e,
            className: "fd-set-preset-list",
            children: [0 === s.length && o && (0,
            t.jsx)("p", {
                className: "fd-set-muted",
                children: o
            }), (0,
            t.jsx)("ul", {
                children: s.map(e => {
                    let s = (0,
                    eD.isBuiltIn)(e) ? eO[e.id] ?? "star" : "star";
                    return (0,
                    t.jsxs)("li", {
                        className: (0,
                        z.cn)("fd-set-preset", a === e.id && "is-inspected"),
                        children: [(0,
                        t.jsxs)(y.Button, {
                            tone: a === e.id ? "secondary" : "ghost",
                            size: "sm",
                            block: !0,
                            className: "fd-set-preset-main",
                            icon: (0,
                            t.jsx)(g.Icon, {
                                name: s,
                                size: 24
                            }),
                            "aria-pressed": a === e.id,
                            onClick: () => i(e.id),
                            children: [e.name, d === e.id && (0,
                            t.jsx)(N.Badge, {
                                tone: "acid",
                                children: "In use"
                            })]
                        }), (0,
                        eD.isBuiltIn)(e) && (0,
                        t.jsx)(g.Icon, {
                            name: "padlock",
                            label: "Built-in",
                            className: "fd-set-lock",
                            size: 24
                        }), (0,
                        t.jsx)(eQ, {
                            preset: e,
                            onRename: () => n(e.id),
                            onDelete: () => r(e.id)
                        })]
                    }, e.id)
                }
                )
            })]
        })
    }
    function eX({id: e, onClose: a}) {
        let i = (0,
        l.useSimStore)(e => e.ratePresets)
          , n = (0,
        l.useSimStore)(e => e.renamePreset)
          , r = (0,
        eD.findPreset)(i, e)
          , [o,d] = (0,
        s.useState)(r?.name ?? "")
          , [c,u] = (0,
        s.useState)(null)
          , h = (0,
        s.useId)()
          , m = () => {
            if (!e)
                return;
            let t = n(e, o);
            u(t),
            t || a()
        }
        ;
        return (0,
        t.jsxs)(L.DialogShell, {
            open: !!r,
            title: "Rename preset",
            onClose: a,
            actions: (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)(y.Button, {
                    tone: "ghost",
                    size: "sm",
                    onClick: a,
                    children: "Cancel"
                }), (0,
                t.jsx)(y.Button, {
                    tone: "primary",
                    size: "sm",
                    onClick: m,
                    children: "Rename"
                })]
            }),
            children: [(0,
            t.jsx)("label", {
                htmlFor: h,
                className: "fd-set-field-label",
                children: "Name"
            }), (0,
            t.jsx)(A.TextInput, {
                id: h,
                "data-autofocus": !0,
                error: c,
                value: o,
                maxLength: eD.PRESET_NAME_MAX,
                onChange: e => {
                    d(e.target.value),
                    u(null)
                }
                ,
                onKeyDown: e => {
                    "Enter" === e.key && (e.preventDefault(),
                    m())
                }
            })]
        })
    }
    function eJ({preset: e, onRename: s, onDelete: a, onUse: i}) {
        let n = (0,
        l.useSimStore)(e => e.duplicatePreset)
          , r = (0,
        eD.isBuiltIn)(e);
        return (0,
        t.jsxs)(eo.Card, {
            className: "fd-set-preset-detail",
            children: [(0,
            t.jsxs)("div", {
                className: "fd-set-preset-detail-head",
                children: [(0,
                t.jsx)(k.SectionHeading, {
                    as: "h3",
                    size: "lg",
                    children: e.name
                }), r ? (0,
                t.jsx)(g.Icon, {
                    name: "padlock",
                    label: "Built-in",
                    className: "fd-set-lock",
                    size: 24
                }) : (0,
                t.jsx)(y.IconButton, {
                    label: `Rename ${e.name}`,
                    icon: (0,
                    t.jsx)(g.Icon, {
                        name: "pencil",
                        size: 24
                    }),
                    onClick: s
                })]
            }), (0,
            t.jsxs)("table", {
                className: "fd-set-preset-table",
                children: [(0,
                t.jsx)("thead", {
                    children: (0,
                    t.jsxs)("tr", {
                        children: [(0,
                        t.jsx)("th", {
                            scope: "col",
                            children: "Axis"
                        }), (0,
                        t.jsx)("th", {
                            scope: "col",
                            children: "Center °/s"
                        }), (0,
                        t.jsx)("th", {
                            scope: "col",
                            children: "Max °/s"
                        }), (0,
                        t.jsx)("th", {
                            scope: "col",
                            children: "Expo"
                        })]
                    })
                }), (0,
                t.jsx)("tbody", {
                    children: ez.map(s => (0,
                    t.jsxs)("tr", {
                        children: [(0,
                        t.jsx)("th", {
                            scope: "row",
                            children: eF[s]
                        }), (0,
                        t.jsx)("td", {
                            children: Math.round(e.rates[s].centerSensitivity)
                        }), (0,
                        t.jsx)("td", {
                            children: Math.round(e.rates[s].maxRate)
                        }), (0,
                        t.jsx)("td", {
                            children: e.rates[s].expo.toFixed(2)
                        })]
                    }, s))
                }), (0,
                t.jsx)("tfoot", {
                    children: (0,
                    t.jsxs)("tr", {
                        children: [(0,
                        t.jsx)("th", {
                            scope: "row",
                            children: "Throttle"
                        }), (0,
                        t.jsxs)("td", {
                            colSpan: 3,
                            children: ["Midpoint ", Math.round(100 * e.throttle.mid), "% · Expo ", Math.round(100 * e.throttle.expo), "%"]
                        })]
                    })
                })]
            }), (0,
            t.jsxs)("div", {
                className: "fd-set-preset-actions",
                children: [!r && (0,
                t.jsx)(y.Button, {
                    tone: "ghost",
                    size: "sm",
                    icon: (0,
                    t.jsx)(g.Icon, {
                        name: "pencil",
                        size: 24
                    }),
                    onClick: s,
                    children: "Rename"
                }), (0,
                t.jsx)(y.Button, {
                    tone: "ghost",
                    size: "sm",
                    icon: (0,
                    t.jsx)(g.Icon, {
                        name: "copy",
                        size: 24
                    }),
                    onClick: () => n(e.id),
                    children: "Duplicate"
                }), (0,
                t.jsx)(y.Button, {
                    tone: "ghost",
                    size: "sm",
                    icon: (0,
                    t.jsx)(g.Icon, {
                        name: "upload",
                        size: 24
                    }),
                    onClick: () => eG(e),
                    children: "Export"
                }), !r && (0,
                t.jsx)(y.Button, {
                    tone: "destructive",
                    size: "sm",
                    icon: (0,
                    t.jsx)(g.Icon, {
                        name: "trash",
                        size: 24
                    }),
                    onClick: a,
                    children: "Delete"
                })]
            }), (0,
            t.jsx)(y.Button, {
                tone: "primary",
                size: "lg",
                block: !0,
                icon: (0,
                t.jsx)(g.Icon, {
                    name: "play",
                    size: 24
                }),
                onClick: i,
                children: "Use preset"
            })]
        })
    }
    function e0() {
        let e = (0,
        l.useSimStore)(e => e.setSettingsSubview)
          , a = (0,
        l.useSimStore)(e => e.applyPreset)
          , i = (0,
        l.useSimStore)(e => e.deletePreset)
          , n = (0,
        l.useSimStore)(e => e.restorePreset)
          , r = (0,
        l.useSimStore)(e => e.importRatePresets)
          , {library: o, selected: d} = eq()
          , [c,u] = (0,
        s.useState)(d?.id ?? eH.id)
          , [h,m] = (0,
        s.useState)(!1)
          , [p,x] = (0,
        s.useState)(null)
          , [f,j] = (0,
        s.useState)(null)
          , [b,v] = (0,
        s.useState)(null)
          , [S,k] = (0,
        s.useState)(null)
          , w = (0,
        s.useRef)(null)
          , C = (0,
        eD.findPreset)(o, c) ?? eH
          , N = (0,
        eD.findPreset)(o, f)
          , A = async e => {
            if (!e)
                return;
            let t = r(await e.text());
            k(t.added ? {
                ok: !t.errors.length,
                text: `Imported ${t.added} preset${t.added > 1 ? "s" : ""}.${t.errors.length ? ` ${t.errors.join(" ")}` : ""}`
            } : {
                ok: !1,
                text: t.errors.join(" ") || "Nothing to import."
            }),
            w.current && (w.current.value = "")
        }
        ;
        return (0,
        t.jsxs)("div", {
            className: "fd-set-page fd-set-page--presets",
            id: "set-presets",
            children: [(0,
            t.jsxs)(el.PageHeader, {
                title: "Presets",
                back: {
                    label: "Rates",
                    onClick: () => e(null)
                },
                children: [(0,
                t.jsx)(y.Button, {
                    tone: "ghost",
                    size: "sm",
                    onClick: () => m(!0),
                    children: "Save as preset"
                }), (0,
                t.jsx)(y.Button, {
                    tone: "ghost",
                    size: "sm",
                    icon: (0,
                    t.jsx)(g.Icon, {
                        name: "download",
                        size: 24
                    }),
                    onClick: () => w.current?.click(),
                    children: "Import"
                }), (0,
                t.jsx)("input", {
                    ref: w,
                    type: "file",
                    accept: ".json,application/json",
                    hidden: !0,
                    onChange: e => void A(e.target.files?.[0])
                })]
            }), S && (0,
            t.jsx)(L.Toast, {
                className: "fd-set-banner",
                tone: S.ok ? "success" : "error",
                title: S.text,
                action: {
                    label: "Dismiss",
                    onClick: () => k(null)
                }
            }), b && (0,
            t.jsx)(L.Toast, {
                className: "fd-set-banner",
                title: (0,
                t.jsxs)(t.Fragment, {
                    children: ["Deleted “", b.preset.name, "”."]
                }),
                action: {
                    label: "Undo",
                    onClick: () => {
                        n(b),
                        u(b.preset.id),
                        v(null)
                    }
                }
            }), (0,
            t.jsxs)("div", {
                className: "fd-set-grid fd-set-grid--presets",
                children: [(0,
                t.jsxs)("div", {
                    className: "fd-set-stack",
                    children: [(0,
                    t.jsx)(eZ, {
                        title: "Built-in",
                        presets: eD.BUILT_IN_RATE_PRESETS,
                        inspected: C.id,
                        onInspect: u,
                        onRename: x,
                        onDelete: j
                    }), (0,
                    t.jsx)(eZ, {
                        title: "My presets",
                        presets: o.presets,
                        empty: "No saved presets yet.",
                        inspected: C.id,
                        onInspect: u,
                        onRename: x,
                        onDelete: j
                    })]
                }), (0,
                t.jsx)(eJ, {
                    preset: C,
                    onRename: () => x(C.id),
                    onDelete: () => j(C.id),
                    onUse: () => {
                        a(C.id),
                        e(null)
                    }
                })]
            }), (0,
            t.jsx)(eK, {
                open: h,
                onClose: () => m(!1)
            }, String(h)), (0,
            t.jsx)(eX, {
                id: p,
                onClose: () => x(null)
            }, p ?? "none"), (0,
            t.jsx)(L.ConfirmDialog, {
                open: !!N,
                title: "Delete preset?",
                destructive: !0,
                confirmLabel: "Delete",
                description: (0,
                t.jsxs)(t.Fragment, {
                    children: ["“", N?.name, "” is removed from this device. Your current rates don’t change."]
                }),
                onCancel: () => j(null),
                onConfirm: () => {
                    if (!f)
                        return;
                    let e = i(f);
                    v(e),
                    e && c === f && u(eH.id),
                    j(null)
                }
            })]
        })
    }
    var e1 = e.i(166636)
      , e2 = e.i(133968);
    let e4 = {
        controls: function() {
            return (0,
            t.jsx)(em, {
                children: (0,
                t.jsxs)("div", {
                    className: "fd-set-page fd-set-page--controls",
                    children: [(0,
                    t.jsx)(el.PageHeader, {
                        title: "Controls"
                    }), (0,
                    t.jsx)(ex, {}), (0,
                    t.jsxs)("div", {
                        className: "fd-set-grid fd-set-grid--2 fd-set-grid--sticks",
                        children: [(0,
                        t.jsx)(ef, {}), (0,
                        t.jsx)(eb, {})]
                    }), (0,
                    t.jsx)(ev, {}), (0,
                    t.jsx)(ew, {}), (0,
                    t.jsx)(eC, {})]
                })
            })
        },
        rates: function() {
            let e = (0,
            l.useSimStore)(e => (0,
            D.editedSettings)(e).rates)
              , a = (0,
            l.useSimStore)(e => e.setSettingsSubview)
              , [i,n] = (0,
            s.useState)(!1);
            return (0,
            t.jsxs)("div", {
                className: "fd-set-page fd-set-page--rates",
                children: [(0,
                t.jsxs)(el.PageHeader, {
                    title: "Rates",
                    badge: (0,
                    t.jsxs)("span", {
                        className: "fd-set-badge",
                        children: [(0,
                        t.jsx)(N.Badge, {
                            children: "Actual"
                        }), (0,
                        t.jsx)(en.InfoTip, {
                            topic: "Actual rates",
                            children: "Betaflight Actual rates in degrees per second. Copy the numbers from your quad and it flies the same."
                        })]
                    }),
                    children: [(0,
                    t.jsx)(eW, {}), (0,
                    t.jsx)(y.Button, {
                        tone: "ghost",
                        size: "sm",
                        onClick: () => a("presets"),
                        children: "Presets"
                    }), (0,
                    t.jsx)(y.Button, {
                        tone: "ghost",
                        size: "sm",
                        onClick: () => n(!0),
                        children: "Save as preset"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "fd-set-grid fd-set-grid--rates",
                    children: [(0,
                    t.jsx)(eV, {}), (0,
                    t.jsx)(eo.Card, {
                        title: "Stick response",
                        tone: "dark",
                        id: "set-rate-curve",
                        className: "fd-set-curve-card",
                        actions: (0,
                        t.jsx)("ul", {
                            className: "fd-set-legend",
                            children: ez.map(e => (0,
                            t.jsxs)("li", {
                                children: [(0,
                                t.jsx)("i", {
                                    style: {
                                        background: e_(e)
                                    }
                                }), eF[e]]
                            }, e))
                        }),
                        children: (0,
                        t.jsx)(eU, {
                            rates: e
                        })
                    })]
                }), (0,
                t.jsx)(eY, {}), (0,
                t.jsx)(eK, {
                    open: i,
                    onClose: () => n(!1)
                }, String(i))]
            })
        },
        camera: function() {
            let e = (0,
            l.useSimStore)(e => (0,
            D.editedSettings)(e).camera)
              , s = (0,
            l.useSimStore)(e => (0,
            D.editedSettings)(e).graphics)
              , a = (0,
            l.useSimStore)(e => (0,
            eT.lensStrength)((0,
            D.editedSettings)(e)))
              , i = (0,
            l.useSimStore)(e => e.updateCamera)
              , n = (0,
            l.useSimStore)(e => e.updateGraphics);
            return (0,
            t.jsxs)("div", {
                className: "fd-set-page fd-set-page--camera",
                children: [(0,
                t.jsx)(el.PageHeader, {
                    title: "Camera & HUD"
                }), (0,
                t.jsxs)(eo.Card, {
                    title: "Camera",
                    children: [(0,
                    t.jsx)("div", {
                        id: "set-fov",
                        children: (0,
                        t.jsx)(eo.SliderField, {
                            label: "Field of view",
                            value: e.fov,
                            min: 50,
                            max: 150,
                            step: 1,
                            format: e => `${Math.round(e)}\xb0`,
                            onChange: e => i({
                                fov: e
                            })
                        })
                    }), (0,
                    t.jsx)("div", {
                        id: "set-tilt",
                        children: (0,
                        t.jsx)(eo.SliderField, {
                            label: "Camera uptilt",
                            info: "How far the camera points up. Flying fast usually needs more.",
                            value: e.tiltDeg,
                            min: 0,
                            max: 60,
                            step: 1,
                            format: e => `${Math.round(e)}\xb0`,
                            onChange: e => i({
                                tiltDeg: e
                            })
                        })
                    }), (0,
                    t.jsx)("div", {
                        id: "set-lens",
                        children: (0,
                        t.jsx)(eo.SliderField, {
                            label: "Lens",
                            info: "FPV cameras use a fisheye lens. Flat is no fisheye.",
                            value: a,
                            min: 0,
                            max: 1,
                            step: .05,
                            format: e => 0 === e ? "Flat" : `${Math.round(100 * e)}%`,
                            onChange: e => i({
                                fisheye: e
                            })
                        })
                    })]
                }), (0,
                t.jsx)(eo.Card, {
                    title: "On-screen information",
                    children: (0,
                    t.jsx)("div", {
                        className: "fd-set-toggle-grid",
                        children: eB.map(e => (0,
                        t.jsx)("div", {
                            id: e.target,
                            className: "fd-set-toggle-tile",
                            children: (0,
                            t.jsx)(A.SettingRow, {
                                label: e.label,
                                info: e.info,
                                htmlFor: `${e.target}-switch`,
                                children: (0,
                                t.jsx)(A.Switch, {
                                    id: `${e.target}-switch`,
                                    label: e.label,
                                    checked: s[e.key],
                                    onChange: t => n({
                                        [e.key]: t
                                    })
                                })
                            })
                        }, e.key))
                    })
                })]
            })
        },
        video: function() {
            let e = (0,
            l.useSimStore)(e => (0,
            D.editedSettings)(e).graphics)
              , s = (0,
            l.useSimStore)(e => e.updateGraphics)
              , a = (0,
            l.useSimStore)(e => e.applyGraphicsQuality)
              , i = e.postProcessing ?? "low" !== e.quality
              , n = (0,
            e1.isCustomGraphics)(e)
              , r = (0,
            e2.ultraAvailable)();
            return (0,
            t.jsxs)("div", {
                className: "fd-set-page fd-set-page--video",
                children: [(0,
                t.jsx)(el.PageHeader, {
                    title: "Video"
                }), (0,
                t.jsx)(eo.Card, {
                    className: "fd-set-quality",
                    id: "set-quality",
                    children: (0,
                    t.jsx)(A.SettingRow, {
                        label: "Quality",
                        info: "Sets everything below at once. Change any option and it shows Custom.",
                        hint: r ? void 0 : "Ultra needs a dedicated graphics card.",
                        children: (0,
                        t.jsx)(E.Segmented, {
                            label: "Quality",
                            value: n ? "custom" : e.quality,
                            onChange: e => {
                                "custom" !== e && a(e)
                            }
                            ,
                            options: [{
                                value: "low",
                                label: "Low"
                            }, {
                                value: "medium",
                                label: "Medium"
                            }, {
                                value: "high",
                                label: "High"
                            }, {
                                value: "ultra",
                                label: "Ultra",
                                disabled: !r
                            }, {
                                value: "custom",
                                label: "Custom",
                                disabled: !n
                            }]
                        })
                    })
                }), (0,
                t.jsxs)("div", {
                    className: "fd-set-grid fd-set-grid--2",
                    children: [(0,
                    t.jsxs)(eo.Card, {
                        title: "Performance",
                        children: [(0,
                        t.jsx)("div", {
                            id: "set-draw-distance",
                            children: (0,
                            t.jsx)(eo.SliderField, {
                                label: "Draw distance",
                                value: e.drawDistance,
                                min: 100,
                                max: 1200,
                                step: 25,
                                format: e => `${Math.round(e)} m`,
                                onChange: e => s({
                                    drawDistance: e
                                })
                            })
                        }), (0,
                        t.jsx)(A.SettingRow, {
                            label: "Shadows",
                            info: "The most expensive effect. Turn it off first if the frame rate drops.",
                            id: "set-shadows",
                            htmlFor: "set-shadows-switch",
                            children: (0,
                            t.jsx)(A.Switch, {
                                id: "set-shadows-switch",
                                label: "Shadows",
                                checked: e.shadows,
                                onChange: e => s({
                                    shadows: e
                                })
                            })
                        })]
                    }), (0,
                    t.jsxs)(eo.Card, {
                        title: "Effects",
                        children: [(0,
                        t.jsx)(A.SettingRow, {
                            label: "Post-processing",
                            info: "Smooths edges and finishes the world's colours. Bloom and MSAA need it.",
                            id: "set-post",
                            htmlFor: "set-post-switch",
                            children: (0,
                            t.jsx)(A.Switch, {
                                id: "set-post-switch",
                                label: "Post-processing",
                                checked: i,
                                onChange: e => s({
                                    postProcessing: e
                                })
                            })
                        }), (0,
                        t.jsx)(A.SettingRow, {
                            label: "Bloom",
                            info: "Glow around lights, gates and the sun.",
                            id: "set-bloom",
                            htmlFor: "set-bloom-switch",
                            children: (0,
                            t.jsx)(A.Switch, {
                                id: "set-bloom-switch",
                                label: "Bloom",
                                disabled: !i,
                                checked: e.bloom ?? !1,
                                onChange: e => s({
                                    bloom: e
                                })
                            })
                        }), (0,
                        t.jsx)(A.SettingRow, {
                            label: "Anti-aliasing (MSAA)",
                            info: "Smoother edges. Uses more graphics memory.",
                            id: "set-msaa",
                            htmlFor: "set-msaa-switch",
                            children: (0,
                            t.jsx)(A.Switch, {
                                id: "set-msaa-switch",
                                label: "Anti-aliasing (MSAA)",
                                disabled: !i,
                                checked: e.msaa ?? !1,
                                onChange: e => s({
                                    msaa: e
                                })
                            })
                        })]
                    })]
                }), (0,
                t.jsx)(eo.Card, {
                    className: "fd-set-traffic",
                    id: "set-traffic",
                    children: (0,
                    t.jsx)(A.SettingRow, {
                        label: "Traffic detail",
                        info: "Reduced keeps every car where it is, but drops smoke, skid marks and close-up detail.",
                        children: (0,
                        t.jsx)(E.Segmented, {
                            label: "Traffic detail",
                            value: e.trafficDetail,
                            onChange: e => s({
                                trafficDetail: e
                            }),
                            options: [{
                                value: "full",
                                label: "Full"
                            }, {
                                value: "reduced",
                                label: "Reduced"
                            }]
                        })
                    })
                }), (0,
                t.jsx)(eo.Card, {
                    title: "Advanced",
                    children: (0,
                    t.jsx)("div", {
                        id: "set-render-scale",
                        children: (0,
                        t.jsx)(eo.SliderField, {
                            label: "Render scale",
                            info: "Share of the quality's resolution to render. Lower is faster but softer. The HUD stays sharp.",
                            value: e.renderScale ?? 1,
                            min: .5,
                            max: 1,
                            step: .05,
                            format: e => `${Math.round(100 * e)}%`,
                            onChange: e => s({
                                renderScale: e
                            })
                        })
                    })
                })]
            })
        },
        audio: C.AudioPage,
        accessibility: w.AccessibilityPage
    };
    function e5() {
        let e = (0,
        l.useSimStore)(e => e.settingsTab)
          , a = (0,
        l.useSimStore)(e => e.settingsSubview)
          , i = (0,
        l.useSimStore)(e => e.calibrating)
          , n = (0,
        l.useSimStore)(e => e.setSettingsSubview)
          , r = (0,
        s.useRef)(null)
          , o = e4[e]
          , d = i ? "calibration" : a ?? e;
        return (0,
        el.useSettingsFocus)(d),
        (0,
        s.useEffect)( () => {
            r.current?.scrollTo({
                top: 0
            })
        }
        , [d]),
        (0,
        t.jsx)("div", {
            ref: r,
            className: "fd-set-body",
            id: (0,
            el.panelId)(e),
            role: "tabpanel",
            "aria-labelledby": (0,
            el.tabId)(e),
            tabIndex: -1,
            onKeyDown: e => {
                "Escape" !== e.key || !a || i || e.defaultPrevented || (e.preventDefault(),
                e.stopPropagation(),
                n(null))
            }
            ,
            children: i ? (0,
            t.jsx)(eR, {}) : "presets" === a ? (0,
            t.jsx)(e0, {}) : (0,
            t.jsx)(o, {})
        })
    }
    function e6({embedded: e=!1}) {
        let a = (0,
        l.useSimStore)(e => e.requestCloseSettings)
          , i = (0,
        l.useSimStore)(e => e.calibrating)
          , n = (0,
        s.useRef)(null);
        (0,
        s.useEffect)( () => {
            if (e)
                return;
            let t = document.activeElement;
            return n.current?.focus(),
            () => t?.focus?.()
        }
        , [e]);
        let r = (0,
        t.jsxs)("div", {
            className: (0,
            S.cx)("fd-set", "fdk-screen", "fdk", e ? "fd-set--menu" : "fd-set--flight", i && "is-calibrating"),
            children: [(0,
            t.jsx)(el.SettingsRail, {
                menu: e
            }), (0,
            t.jsxs)("section", {
                className: "fd-set-main",
                "aria-label": "Settings page",
                children: [(0,
                t.jsx)(e5, {}), !i && (0,
                t.jsx)(el.SettingsFooter, {})]
            }), (0,
            t.jsx)(el.UnsavedPrompt, {})]
        });
        return e ? (0,
        t.jsx)("div", {
            className: "fd-menu-settings fdk-on-chalk",
            children: r
        }) : (0,
        t.jsx)("div", {
            className: "fd-set-wash pointer-events-auto absolute inset-0 z-40 flex items-center justify-center p-8",
            children: (0,
            t.jsxs)(k.Panel, {
                ref: n,
                className: "fd-set-dialog-frame",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Settings",
                tabIndex: -1,
                children: [(0,
                t.jsxs)("header", {
                    className: "fd-set-flight-head",
                    children: [(0,
                    t.jsx)(k.SectionHeading, {
                        children: "Settings"
                    }), (0,
                    t.jsx)(y.IconButton, {
                        tone: "secondary",
                        size: "md",
                        label: "Close settings",
                        icon: (0,
                        t.jsx)(g.Icon, {
                            name: "close",
                            size: 24
                        }),
                        onClick: a
                    })]
                }), r]
            })
        })
    }
    e.s(["SettingsPanel", 0, e6], 698542);
    var e8 = e.i(854514)
      , e3 = e.i(743492)
      , e7 = e.i(410484)
      , e9 = e.i(105524)
      , te = e.i(37220)
      , tt = e.i(954646)
      , ts = e.i(793273)
      , ta = e.i(439225)
      , ti = e.i(768834)
      , tn = e.i(920755);
    let tr = (0,
    ti.create)( (e, t) => ({
        account: null,
        status: "idle",
        saving: null,
        error: null,
        load: async s => {
            if (t().account === s && "idle" !== t().status)
                return;
            e({
                account: s,
                status: "loading",
                saving: null,
                error: null
            });
            let {data: a, error: i} = await (0,
            tn.createClient)().rpc("email_updates_menu_ask");
            t().account === s && e({
                status: i || !0 !== a ? "done" : "ask"
            })
        }
        ,
        answer: async s => {
            let {account: a, saving: i} = t();
            if (!a || i)
                return;
            e({
                saving: s ? "yes" : "no",
                error: null
            });
            let {error: n} = await (0,
            tn.createClient)().rpc("email_updates_menu_answer", {
                p_yes: s
            });
            t().account === a && (n && s ? e({
                saving: null,
                error: "Couldn’t save that. Try again."
            }) : e({
                saving: null,
                status: "done"
            }))
        }
    }));
    function tl() {
        let e = (0,
        l.useSimStore)(e => e.playerAccountId)
          , a = (0,
        l.useSimStore)(e => e.isAnonymous)
          , i = (0,
        l.useSimStore)(e => "menu" === e.phase)
          , n = tr(e => e.status)
          , r = tr(e => e.account)
          , o = tr(e => e.saving)
          , d = tr(e => e.error);
        if ((0,
        s.useEffect)( () => {
            e && !a && tr.getState().load(e)
        }
        , [e, a]),
        !i || !e || a || r !== e || "ask" !== n)
            return null;
        let c = tr.getState().answer;
        return (0,
        t.jsxs)("section", {
            className: "fd-email-ask fdk-screen",
            "aria-labelledby": "fd-email-ask-title",
            children: [(0,
            t.jsx)("h2", {
                id: "fd-email-ask-title",
                className: "fd-email-ask__title",
                children: ta.EMAIL_ASK_TITLE
            }), (0,
            t.jsx)("p", {
                className: "fd-email-ask__body",
                children: ta.EMAIL_ASK_BODY
            }), (0,
            t.jsxs)("div", {
                className: "fd-email-ask__actions",
                children: [(0,
                t.jsx)(y.Button, {
                    tone: "secondary",
                    busy: "yes" === o,
                    disabled: "no" === o,
                    onClick: () => void c(!0),
                    children: "yes" === o ? "Saving…" : "Email me"
                }), (0,
                t.jsx)(y.Button, {
                    tone: "ghost",
                    disabled: null !== o,
                    onClick: () => void c(!1),
                    children: "No thanks"
                }), d && (0,
                t.jsx)("p", {
                    className: "fd-email-ask__error",
                    role: "alert",
                    children: d
                })]
            })]
        })
    }
    e.s(["useEmailAsk", 0, tr], 681770);
    var to = e.i(389110);
    let td = (0,
    j.default)( () => e.A(526398).then(e => e.MapBrowser), {
        loadableGenerated: {
            modules: [527210]
        },
        loading: () => (0,
        t.jsxs)("div", {
            className: "fd-community-loading",
            role: "status",
            children: [(0,
            t.jsx)("span", {
                children: "Loading maps…"
            }), (0,
            t.jsxs)("div", {
                "aria-hidden": "true",
                children: [(0,
                t.jsx)("i", {}), (0,
                t.jsx)("i", {}), (0,
                t.jsx)("i", {})]
            })]
        })
    })
      , tc = (0,
    j.default)( () => e.A(23892).then(e => e.EditorLibrary), {
        loadableGenerated: {
            modules: [232571]
        },
        loading: () => (0,
        t.jsx)("div", {
            role: "status",
            className: "sim-ui-surface p-6",
            children: "Loading your maps…"
        })
    })
      , tu = (0,
    j.default)( () => e.A(251746).then(e => e.ReplaySelect), {
        loadableGenerated: {
            modules: [42227]
        },
        loading: () => (0,
        t.jsx)("p", {
            role: "status",
            children: "Loading your replays…"
        })
    });
    e.s(["MainMenu", 0, function({initialDestination: e="play", editorPreviewMaps: j, communityPreview: S, hushed: y=!1, modePickerOpen: k=!1, initialGearCategory: w="drone"}) {
        let C = (0,
        s.useRef)(null)
          , N = (0,
        s.useContext)(to.MenuVisibility)
          , A = (0,
        p.useInventory)(e => e.shop_enabled)
          , E = (0,
        x.useCreditShop)(e => e.context)
          , L = (0,
        x.useCreditShop)(e => e.destination)
          , M = (0,
        x.useCreditShop)(e => e.close)
          , [I,R] = (0,
        s.useState)( () => {
            let e = new URLSearchParams(window.location.search)
              , t = e.get("checkout");
            return t && (0,
            f.markMenuOpen)("shop", "checkout"),
            t ? {
                orderId: t,
                cancelled: e.has("cancelled")
            } : null
        }
        )
          , T = (0,
        l.useSimStore)(e => e.phase)
          , B = (0,
        e9.useMatchmaking)(e => e.online)
          , P = (0,
        te.useMenuScene)(e => e.pendingMapId)
          , [$,D] = (0,
        s.useState)(!1)
          , z = (0,
        l.useSimStore)(e => e.editorLibraryOpen)
          , F = (0,
        l.useSimStore)(e => e.openEditorLibrary)
          , _ = (0,
        l.useSimStore)(e => e.openLessons)
          , O = (0,
        l.useSimStore)(e => e.openReplays)
          , H = (0,
        l.useSimStore)(e => e.openSettings)
          , G = (0,
        l.useSimStore)(e => e.settingsOpen)
          , q = (0,
        l.useSimStore)(e => e.calibrating)
          , U = (0,
        l.useSimStore)(e => e.closeSettings)
          , [K,W] = (0,
        s.useState)(I ? "shop" : e)
          , [V,Y] = (0,
        s.useState)(!1)
          , [Q,Z] = (0,
        s.useState)(!1)
          , [X,J] = (0,
        s.useState)()
          , [ee,et] = (0,
        s.useState)()
          , [es,ea] = (0,
        s.useState)()
          , [ei,en] = (0,
        s.useState)("featured")
          , er = () => {
            let e = l.useSimStore.getState();
            "lessonSelect" === e.phase && e.closeLessons(),
            "replaySelect" === e.phase && e.closeReplays(),
            e.editorLibraryOpen && l.useSimStore.setState({
                editorLibraryOpen: !1
            })
        }
          , el = e => l.useSimStore.getState().guardSettings(e)
          , eo = () => {
            el( () => (0,
            tt.requestHomeExit)( () => {
                er(),
                M(),
                U(),
                Y(!0),
                W("gear")
            }
            ))
        }
          , ed = G || q ? "settings" : (E || L) && A ? "shop" : "lessonSelect" === T ? "lessons" : "replaySelect" === T ? "replays" : z ? "editor" : P ? "maps" : "shop" !== K || A ? K : "play";
        (0,
        s.useEffect)( () => (te.useMenuScene.getState().setDestination(ed),
        () => te.useMenuScene.getState().setDestination(null)), [ed]),
        (0,
        f.useMenuOpens)(ed),
        (0,
        s.useEffect)( () => {
            C.current?.scrollTo({
                top: 0
            })
        }
        , [ed, E]);
        let ec = e => {
            ("shop" !== e || A) && ("play" !== e || "play" !== ed) && ("settings" !== e || "settings" !== ed) && el( () => (0,
            tt.requestHomeExit)( () => {
                (te.useMenuScene.getState().stageMapSelection(null),
                er(),
                M(),
                "settings" === e) ? H() : (U(),
                "gear" === e && Y(!1),
                "shop" === e && (Z(!1),
                en("featured"),
                et(void 0),
                J(void 0)),
                W(e))
            }
            ))
        }
        ;
        return (0,
        t.jsx)(to.MenuVisibility, {
            value: N && !y,
            children: (0,
            t.jsx)(ts.DroneHeroHost, {
                children: (0,
                t.jsxs)("main", {
                    className: `fd-menu fd-deck fd-menu--${ed} sim-ui-surface${y ? " is-hushed" : ""}`,
                    "aria-label": "Flight Division main menu",
                    "aria-hidden": y || void 0,
                    inert: y,
                    children: [(0,
                    t.jsx)("div", {
                        className: "fd-menu-header-slot",
                        inert: $,
                        children: (0,
                        t.jsx)(v.MenuHeader, {
                            active: "lessons" === ed || "replays" === ed || "maps" === ed ? "play" : ed,
                            onNavigate: ec,
                            social: (0,
                            t.jsx)(e8.LobbyFriends, {}),
                            offline: !B,
                            onConsumables: eo,
                            onCredits: A ? () => {
                                (0,
                                f.markMenuOpen)("shop", "wallet"),
                                el( () => (0,
                                tt.requestHomeExit)( () => {
                                    er(),
                                    U(),
                                    x.useCreditShop.getState().open()
                                }
                                ))
                            }
                            : void 0
                        })
                    }), (0,
                    t.jsxs)("div", {
                        ref: C,
                        className: "fd-menu-content",
                        children: [I && (0,
                        t.jsx)(m.CheckoutReturn, {
                            ...I,
                            onDismiss: () => R(null)
                        }), "settings" === ed ? (0,
                        t.jsx)(e6, {
                            embedded: !0
                        }) : E && A ? (0,
                        t.jsx)(m.CreditShopPage, {}) : L && A ? (0,
                        t.jsx)(h.ShopPanel, {
                            initialCategory: L.boosters ? "boosters" : "featured",
                            initialItemId: L.itemId,
                            onGear: eo
                        }, L.itemId ?? "boosters") : "lessons" === ed ? (0,
                        t.jsx)(o.LessonSelect, {
                            onBack: () => ec("play")
                        }) : "replays" === ed ? (0,
                        t.jsx)(tu, {
                            onBack: () => ec("play")
                        }) : "community" === ed || "maps" === ed ? (0,
                        t.jsx)(td, {
                            initialCategory: "community" === ed ? "community" : "official",
                            initialMapId: P,
                            communityPreview: S,
                            onBack: () => ec("play"),
                            onMyMaps: F,
                            onDialogOpenChange: D
                        }, `${ed}:${P ?? "browse"}`) : "editor" === ed ? (0,
                        t.jsx)(tc, {
                            backLabel: "Back to Community",
                            previewMaps: j,
                            previewAnalytics: j ? S?.analytics : void 0,
                            onDialogOpenChange: D,
                            onClose: () => {
                                ec("community"),
                                requestAnimationFrame( () => C.current?.querySelector(".cm-my-map")?.focus())
                            }
                        }) : "gear" === K ? (0,
                        t.jsx)(d.GearPanel, {
                            embedded: !0,
                            initialCategory: V ? "consumables" : w,
                            onShop: A ? e => (0,
                            tt.requestHomeExit)( () => {
                                (0,
                                f.markMenuOpen)("shop", "gear"),
                                J(e),
                                Z(!0),
                                et(void 0),
                                W("shop")
                            }
                            ) : void 0,
                            onBuy: (e, t) => (0,
                            tt.requestHomeExit)( () => {
                                (0,
                                f.markMenuOpen)("shop", "gear"),
                                ea(t),
                                R(null),
                                M(),
                                Z(!1),
                                J(void 0),
                                en("environments" === e.category ? "environments" : "colorways"),
                                et(e.id),
                                W("shop")
                            }
                            ),
                            onShopHome: A ? (e="featured") => (0,
                            tt.requestHomeExit)( () => {
                                (0,
                                f.markMenuOpen)("shop", "gear"),
                                R(null),
                                M(),
                                Z(!1),
                                en(e),
                                et(void 0),
                                J(void 0),
                                W("shop")
                            }
                            ) : void 0
                        }, String(V)) : "shop" === ed ? (0,
                        t.jsx)(h.ShopPanel, {
                            initialCategory: Q ? "boosters" : ei,
                            initialItemId: ee,
                            initialPreviewDrone: es,
                            initialBooster: X,
                            onGear: eo
                        }, String(Q)) : "profile" === K ? (0,
                        t.jsx)(c.ProfilePanel, {
                            embedded: !0,
                            onBack: () => ec("play"),
                            onChallenges: () => ec("record")
                        }) : "record" === K ? (0,
                        t.jsx)(u.PilotRecord, {
                            onBack: () => ec("play"),
                            onShop: A ? () => {
                                (0,
                                f.markMenuOpen)("shop", "challenges"),
                                ec("shop")
                            }
                            : void 0
                        }) : (0,
                        t.jsxs)(t.Fragment, {
                            children: [(0,
                            t.jsx)(e8.FlightLobby, {
                                onGear: () => {
                                    (0,
                                    f.markMenuOpen)("gear", "lobby"),
                                    ec("gear")
                                }
                                ,
                                onMaps: () => W("maps"),
                                onLessons: () => (0,
                                tt.requestHomeExit)(_),
                                onReplays: () => (0,
                                tt.requestHomeExit)(O),
                                onCommunity: () => ec("community"),
                                onEditor: () => (0,
                                tt.requestHomeExit)(F),
                                onChallenges: () => ec("record"),
                                pickerOpen: k
                            }), (0,
                            t.jsx)(e7.ModePanelHost, {
                                inFlight: !1
                            }), !y && (0,
                            t.jsx)(tl, {}), (0,
                            t.jsxs)("footer", {
                                className: "fd-menu-footer",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "fd-menu-footer-center",
                                    children: (0,
                                    t.jsx)(b.LivePlayerCount, {})
                                }), (0,
                                t.jsxs)("div", {
                                    className: "fd-menu-socials",
                                    children: [(0,
                                    t.jsx)("a", {
                                        href: r.DISCORD_INVITE_URL,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": "Join Flight Division on Discord",
                                        title: "Discord",
                                        children: (0,
                                        t.jsx)(a.DiscordMark, {})
                                    }), (0,
                                    t.jsx)("a", {
                                        href: "https://www.instagram.com/flightdivision.fpv/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": "Flight Division on Instagram (@flightdivision.fpv)",
                                        title: "Instagram · @flightdivision.fpv",
                                        children: (0,
                                        t.jsx)(g.Icon, {
                                            name: "instagram",
                                            size: 24
                                        })
                                    }), (0,
                                    t.jsx)("a", {
                                        href: "https://www.tiktok.com/@flightdivision",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": "Flight Division on TikTok (@flightdivision)",
                                        title: "TikTok · @flightdivision",
                                        children: (0,
                                        t.jsx)(i.TikTokMark, {})
                                    }), (0,
                                    t.jsx)("a", {
                                        href: "https://www.youtube.com/@flightdivision_fpv",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        "aria-label": "Flight Division on YouTube (@flightdivision_fpv)",
                                        title: "YouTube · @flightdivision_fpv",
                                        children: (0,
                                        t.jsx)(n.YouTubeMark, {})
                                    })]
                                })]
                            })]
                        })]
                    }), "play" !== ed && (0,
                    t.jsx)(e3.MenuQueueDock, {})]
                })
            })
        })
    }
    ], 783558)
}
, 383807, e => {
    "use strict";
    var t = e.i(271645)
      , s = e.i(532116);
    let a = {
        id: null,
        index: -1,
        mapping: "",
        axes: [],
        buttons: [],
        values: []
    };
    function i(e, t) {
        return e.length === t.length && e.every( (e, s) => e === t[s])
    }
    e.s(["useGamepadList", 0, function(e) {
        let[a,i] = (0,
        t.useState)([]);
        return (0,
        t.useEffect)( () => {
            if (!e)
                return;
            let t = () => {
                let e = (0,
                s.listGamepads)();
                i(t => t.length === e.length && t.every( (t, s) => t.id === e[s].id && t.index === e[s].index && t.axes.length === e[s].axes.length && t.buttonValues.length === e[s].buttonValues.length) ? t : e)
            }
            ;
            t();
            let a = (0,
            s.onGamepadChange)(t)
              , n = window.setInterval(t, 700);
            return () => {
                a(),
                window.clearInterval(n)
            }
        }
        , [e]),
        a
    }
    , "useGamepadReading", 0, function(e, n, r) {
        let[l,o] = (0,
        t.useState)(a);
        return (0,
        t.useEffect)( () => {
            if (!n)
                return;
            let t = 0
              , l = 0
              , d = n => {
                if (t = requestAnimationFrame(d),
                n - l < 33)
                    return;
                l = n;
                let c = void 0 === r ? (0,
                s.getRawGamepad)(e) : (0,
                s.getRawGamepad)(e, !1, r)
                  , u = c ? {
                    id: c.id,
                    index: c.index,
                    mapping: c.mapping,
                    axes: Array.from(c.axes),
                    buttons: c.buttons.map(e => e.pressed),
                    values: c.buttons.map(e => e.value)
                } : a;
                o(e => e.id === u.id && e.index === u.index && e.mapping === u.mapping && i(e.axes, u.axes) && i(e.values, u.values) && i(e.buttons, u.buttons) ? e : u)
            }
            ;
            return t = requestAnimationFrame(d),
            () => cancelAnimationFrame(t)
        }
        , [e, n, r]),
        n ? l : a
    }
    ])
}
, 327168, e => {
    "use strict";
    var t = e.i(843476)
      , s = e.i(657688)
      , a = e.i(271645)
      , i = e.i(247638)
      , n = e.i(580114);
    let r = {
        x: 49.68,
        y: 110.49
    }
      , l = {
        x: 158.71,
        y: 110.49
    };
    function o({dotRef: e, cx: s, cy: a, size: i, dot: r, travel: l, restBottom: d=!1}) {
        return (0,
        t.jsx)("div", {
            className: "absolute",
            style: {
                left: s,
                top: a,
                width: i,
                height: i,
                translate: "-50% -50%"
            },
            children: (0,
            t.jsx)("div", {
                ref: e,
                className: "sim-stick-dot sim-stick-dot--round absolute top-1/2 left-1/2 bg-(--fdk-orange)",
                style: {
                    width: r,
                    height: r,
                    translate: (0,
                    n.stickDotTranslate)(0, +!!d, l)
                }
            })
        })
    }
    e.s(["LessonRadioSticks", 0, function() {
        let e = (0,
        a.useRef)(null)
          , d = (0,
        a.useRef)(null)
          , c = Math.max(12, Math.round(12.934524707275889))
          , u = 33.62976423891731 - c / 2 - 1;
        return (0,
        a.useEffect)( () => {
            let t = 0
              , s = () => {
                t = requestAnimationFrame(s),
                (0,
                n.writeStickDots)(e.current, d.current, i.live.input, u)
            }
            ;
            return t = requestAnimationFrame(s),
            () => cancelAnimationFrame(t)
        }
        , [u]),
        (0,
        t.jsxs)("div", {
            className: "pointer-events-none relative shrink-0 select-none",
            style: {
                width: 268,
                height: 271.24250394529196
            },
            children: [(0,
            t.jsx)(s.default, {
                src: "/sim/radio/pocket.svg",
                alt: "",
                width: 268,
                height: Math.round(271.24250394529196),
                draggable: !1,
                unoptimized: !0,
                className: "h-full w-full opacity-80"
            }), (0,
            t.jsx)(o, {
                dotRef: e,
                cx: 1.2816221127636171 * r.x,
                cy: 1.2816221127636171 * r.y,
                size: 67.25952847783462,
                dot: c,
                travel: u,
                restBottom: !0
            }), (0,
            t.jsx)(o, {
                dotRef: d,
                cx: 1.2816221127636171 * l.x,
                cy: 1.2816221127636171 * l.y,
                size: 67.25952847783462,
                dot: c,
                travel: u
            })]
        })
    }
    , "POCKET_GEOMETRY", 0, {
        width: 209.11,
        height: 211.64,
        left: r,
        right: l,
        outerRadius: 26.24,
        innerRadius: 22.15
    }])
}
]);
