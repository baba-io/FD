(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 335943, e => {
    e.v({
        accessibleLabel: "card-price-module__-fBIda__accessibleLabel",
        option: "card-price-module__-fBIda__option",
        or: "card-price-module__-fBIda__or",
        parts: "card-price-module__-fBIda__parts",
        price: "card-price-module__-fBIda__price",
        value: "card-price-module__-fBIda__value"
    })
}
, 664384, 468136, e => {
    "use strict";
    var a = e.i(843476)
      , t = e.i(33156);
    e.i(671112);
    var s = e.i(910167);
    e.s(["PaymentChoice", 0, function({name: e, options: n, value: r, onChange: i, disabled: l=!1}) {
        return (0,
        a.jsxs)("fieldset", {
            className: s.default.choice,
            disabled: l,
            children: [(0,
            a.jsx)("legend", {
                children: "Choose payment method"
            }), (0,
            a.jsx)("div", {
                className: s.default.options,
                children: n.map(n => (0,
                a.jsxs)("label", {
                    className: s.default.option,
                    "data-selected": r === n.currency || void 0,
                    children: [(0,
                    a.jsx)("input", {
                        type: "radio",
                        name: e,
                        value: n.currency,
                        checked: r === n.currency,
                        onChange: () => i(n.currency)
                    }), (0,
                    a.jsx)("span", {
                        className: s.default.radio,
                        "aria-hidden": "true"
                    }), "parts" === n.currency ? (0,
                    a.jsx)(t.PartsGlyph, {
                        size: 24
                    }) : (0,
                    a.jsx)(t.CreditsGlyph, {
                        size: 24
                    }), (0,
                    a.jsx)("span", {
                        className: s.default.amount,
                        children: (0,
                        a.jsxs)("strong", {
                            children: [n.amount.toLocaleString("en-US"), " ", "parts" === n.currency ? "Parts" : "Credits"]
                        })
                    })]
                }, n.currency))
            })]
        })
    }
    , "buyLabel", 0, function(e) {
        return `Buy for ${e.amount.toLocaleString("en-US")} ${"parts" === e.currency ? "Parts" : "Credits"}`
    }
    ], 664384);
    var n = e.i(335943);
    e.s(["CardPrice", 0, function({options: e}) {
        if (!e.length)
            return null;
        let s = e.map( ({amount: e, currency: a}) => `${e.toLocaleString("en-US")} ${"parts" === a ? "Parts" : "Credits"}`).join(" or ");
        return (0,
        a.jsxs)("span", {
            className: n.default.price,
            "data-dual": e.length > 1 || void 0,
            children: [(0,
            a.jsx)("span", {
                className: n.default.accessibleLabel,
                children: s
            }), e.map( ({amount: e, currency: s}) => (0,
            a.jsxs)("span", {
                className: n.default.option,
                "data-currency": s,
                "aria-hidden": "true",
                children: ["parts" === s ? (0,
                a.jsx)(t.PartsGlyph, {
                    size: 22,
                    className: n.default.parts
                }) : (0,
                a.jsx)(t.CreditsGlyph, {}), (0,
                a.jsxs)("span", {
                    className: n.default.value,
                    children: [(0,
                    a.jsx)("strong", {
                        children: e.toLocaleString("en-US")
                    }), (0,
                    a.jsx)("small", {
                        children: "parts" === s ? "Parts" : "Credits"
                    })]
                })]
            }, s)), e.length > 1 && (0,
            a.jsx)("span", {
                className: n.default.or,
                "aria-hidden": "true",
                children: "or"
            })]
        })
    }
    ], 468136)
}
, 910167, e => {
    e.v({
        amount: "payment-choice-module__A_efoW__amount",
        choice: "payment-choice-module__A_efoW__choice",
        option: "payment-choice-module__A_efoW__option",
        options: "payment-choice-module__A_efoW__options",
        radio: "payment-choice-module__A_efoW__radio"
    })
}
, 516727, e => {
    "use strict";
    var a = e.i(843476)
      , t = e.i(271645)
      , s = e.i(809102)
      , n = e.i(894969)
      , r = e.i(664384)
      , i = e.i(468136)
      , l = e.i(127923)
      , o = e.i(619455)
      , d = e.i(188548);
    e.i(573798);
    var c = e.i(568204)
      , u = e.i(498475)
      , m = e.i(624834)
      , h = e.i(24168)
      , p = e.i(509381)
      , f = e.i(244144)
      , b = e.i(4853)
      , g = e.i(657688);
    function x({id: e}) {
        return (0,
        a.jsx)(g.default, {
            className: "fd-booster-art",
            src: `/images/shop/booster-${e}.webp`,
            alt: "",
            fill: !0,
            sizes: "(max-width: 760px) 85vw, (max-width: 1400px) 38vw, 560px",
            unoptimized: !0
        })
    }
    function j() {
        let[e,a] = (0,
        t.useState)(n.inventoryNow)
          , s = (0,
        n.useInventory)(e => e.serverTime);
        return (0,
        t.useEffect)( () => {
            let e = () => a((0,
            n.inventoryNow)());
            e();
            let t = window.setInterval(e, 1e3);
            return document.addEventListener("visibilitychange", e),
            () => {
                window.clearInterval(t),
                document.removeEventListener("visibilitychange", e)
            }
        }
        , [s]),
        e
    }
    e.i(671112);
    let v = {
        "dummy-launch": "orange",
        "double-xp": "acid"
    };
    function y({booster: e, remaining: n, onOpen: r, compact: i}) {
        let[o,m] = (0,
        t.useState)(!1)
          , h = "dummy-launch" === e.id ? "rocket" : "zap"
          , p = s.BOOSTERS[e.id];
        return (0,
        a.jsxs)(l.Popover.Root, {
            open: o,
            onOpenChange: m,
            children: [(0,
            a.jsx)(l.Popover.Trigger, {
                asChild: !0,
                children: (0,
                a.jsxs)(c.Chip, {
                    size: "sm",
                    edge: v[e.id],
                    icon: (0,
                    a.jsx)(f.Icon, {
                        name: h,
                        size: 24
                    }),
                    className: `fd-active-booster fd-active-booster--${e.id}`,
                    "aria-label": `${p.label} active. View details`,
                    children: [i && (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("span", {
                            className: "fd-active-booster-effect",
                            "aria-hidden": "true",
                            children: "double-xp" === e.id ? "2× XP" : "6×"
                        }), (0,
                        a.jsx)(c.Chip.Dot, {})]
                    }), (0,
                    a.jsx)("span", {
                        role: "timer",
                        "aria-label": `${p.label} time remaining`,
                        children: (0,
                        s.boosterTime)(n)
                    })]
                })
            }), (0,
            a.jsx)(l.Popover.Portal, {
                children: (0,
                a.jsxs)(l.Popover.Content, {
                    className: `fd-booster-popover fdk-on-chalk fd-booster-popover--${e.id}`,
                    sideOffset: 10,
                    align: "end",
                    collisionPadding: 12,
                    "aria-label": p.label,
                    onEscapeKeyDown: e => e.stopPropagation(),
                    onKeyDown: e => e.stopPropagation(),
                    children: [(0,
                    a.jsxs)("div", {
                        className: "fd-booster-popover-heading",
                        children: [(0,
                        a.jsx)(c.Badge, {
                            tone: v[e.id],
                            icon: (0,
                            a.jsx)(f.Icon, {
                                name: h,
                                size: 24
                            }),
                            children: "Booster active"
                        }), (0,
                        a.jsx)("span", {
                            className: "fd-booster-popover-close",
                            children: (0,
                            a.jsx)(u.IconButton, {
                                label: "Close booster details",
                                icon: (0,
                                a.jsx)(f.Icon, {
                                    name: "close",
                                    size: 24
                                }),
                                onClick: () => m(!1)
                            })
                        })]
                    }), (0,
                    a.jsx)("h2", {
                        children: p.name
                    }), (0,
                    a.jsx)("strong", {
                        className: "fd-booster-popover-effect",
                        children: p.effect
                    }), (0,
                    a.jsx)("p", {
                        children: p.description
                    }), (0,
                    a.jsxs)("dl", {
                        className: "fd-booster-popover-stats",
                        children: [(0,
                        a.jsxs)("div", {
                            children: [(0,
                            a.jsx)("dt", {
                                children: "Time remaining"
                            }), (0,
                            a.jsx)("dd", {
                                role: "timer",
                                children: (0,
                                s.boosterTime)(n)
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            children: [(0,
                            a.jsx)("dt", {
                                children: "In your kit"
                            }), (0,
                            a.jsx)("dd", {
                                children: e.quantity
                            })]
                        })]
                    }), (0,
                    a.jsxs)("p", {
                        className: "fd-booster-popover-rules",
                        children: ["Time keeps running in menus, while paused and offline. Each use adds 15 minutes; the effect stays the same.", "double-xp" === e.id && " Credits are not multiplied."]
                    }), r && (0,
                    a.jsx)(u.Button, {
                        tone: "secondary",
                        size: "sm",
                        block: !0,
                        className: "fd-booster-popover-link",
                        trailingIcon: (0,
                        a.jsx)(f.Icon, {
                            name: "arrow-right",
                            size: 24
                        }),
                        onClick: () => {
                            m(!1),
                            (0,
                            d.markMenuOpen)("gear", "booster_chip"),
                            r()
                        }
                        ,
                        children: "Open consumables"
                    })]
                })
            })]
        })
    }
    e.s(["ActiveBoosters", 0, function({onOpen: e, compact: t=!1}) {
        let r = (0,
        n.useInventory)(e => e.boosters)
          , i = j()
          , l = r.filter(e => (0,
        s.boosterRemaining)(e, i) > 0);
        return l.length ? (0,
        a.jsx)("aside", {
            className: "fd-active-boosters",
            "aria-label": "Active boosters",
            children: l.map(n => (0,
            a.jsx)(y, {
                booster: n,
                remaining: (0,
                s.boosterRemaining)(n, i),
                onOpen: e,
                compact: t
            }, n.id))
        }) : null
    }
    , "BoosterPanel", 0, function({mode: e, onGear: l, onShop: c, compact: g=!1, initialBooster: v}) {
        let y, S, k, N, C, _, I, w, $, M, L, q = (0,
        n.useInventory)(), P = j(), [E,R] = (0,
        t.useState)({
            "dummy-launch": 1,
            "double-xp": 1
        }), [O,A] = (0,
        t.useState)(""), [B,T] = (0,
        t.useState)(""), [z,D] = (0,
        t.useState)(v ?? null), [F,U] = (0,
        t.useState)(null), [G,Y] = (0,
        t.useState)("parts"), V = "shop" === e;
        async function H(e) {
            T(""),
            A("");
            let a = await q.useBooster(e);
            if (a)
                T(a);
            else {
                if ("purchase" === e.kind && (D(null),
                V && l)) {
                    (0,
                    d.markMenuOpen)("gear", "purchase"),
                    l();
                    return
                }
                A("purchase" === e.kind ? `${e.quantity} \xd7 ${s.BOOSTERS[e.booster].label} added to Consumables.` : `${s.BOOSTERS[e.booster].label}: 15 minutes added. Ready to fly!`)
            }
        }
        let J = e => q.boosters.find(a => a.id === e)
          , W = F ?? s.BOOSTER_IDS.find(e => (J(e)?.quantity ?? 0) > 0 || (0,
        s.boosterRemaining)(J(e), P) > 0) ?? s.BOOSTER_IDS[0]
          , K = J(W)
          , Q = (0,
        s.boosterRemaining)(K, P) > 0
          , X = "ready" === q.status && K ? q.pendingBooster ? "Your last booster request needs checking" : void 0 : "loading" === q.status ? "Loading your consumables" : "Boosters are unavailable right now";
        return (0,
        a.jsxs)("section", {
            className: `fd-boosters fdk-screen fd-boosters--${e}${g ? " fd-boosters--shelf" : ""}`,
            "aria-label": V ? "Booster shop" : "Your consumables",
            children: [V ? (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)("header", {
                    className: "fd-boosters-heading",
                    children: [(0,
                    a.jsx)("div", {
                        children: (0,
                        a.jsxs)("h2", {
                            children: ["Boosters", (0,
                            a.jsx)("span", {
                                children: "."
                            })]
                        })
                    }), l && (0,
                    a.jsx)(p.TextLink, {
                        onClick: () => {
                            (0,
                            d.markMenuOpen)("gear", "shop"),
                            l()
                        }
                        ,
                        trailingIcon: (0,
                        a.jsx)(f.Icon, {
                            name: "arrow-right",
                            size: 24
                        }),
                        children: "My consumables"
                    })]
                }), (0,
                a.jsx)(b.StoreGrid, {
                    children: s.BOOSTER_IDS.map(e => {
                        let t = s.BOOSTERS[e];
                        return (0,
                        a.jsx)(b.StoreCard, {
                            name: t.name,
                            label: t.effect,
                            "aria-label": `View ${t.name}, from ${t.partsPrice} Parts or ${t.price} Credits`,
                            onClick: () => {
                                T(""),
                                A(""),
                                D(e)
                            }
                            ,
                            art: (0,
                            a.jsx)(x, {
                                id: e
                            }),
                            badge: "15 MIN",
                            price: (0,
                            a.jsx)(i.CardPrice, {
                                options: [{
                                    currency: "parts",
                                    amount: t.partsPrice
                                }, {
                                    currency: "credits",
                                    amount: t.price
                                }]
                            })
                        }, e)
                    }
                    )
                })]
            }) : (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("div", {
                    className: "fd-gear-catalog fd-gear-catalog--rows",
                    role: "group",
                    "aria-label": "Boosters",
                    children: s.BOOSTER_IDS.map(e => {
                        let t = s.BOOSTERS[e]
                          , n = J(e)
                          , r = "ready" === q.status && !!n
                          , i = (0,
                        s.boosterRemaining)(n, P);
                        return (0,
                        a.jsx)(h.RowCard, {
                            size: "wide",
                            layout: "side",
                            className: `fd-booster-card fd-booster-card--${e}`,
                            name: t.name,
                            art: (0,
                            a.jsx)(x, {
                                id: e
                            }),
                            selected: W === e,
                            label: `${t.name}, ${t.effect}${r ? ", " + n.quantity + " in your kit" : ", inventory unavailable"}${i > 0 && r ? ", active" : ""}`,
                            meta: (0,
                            a.jsxs)(a.Fragment, {
                                children: [(0,
                                a.jsx)("span", {
                                    children: t.effect
                                }), r && (0,
                                a.jsxs)("span", {
                                    children: [n.quantity, " owned", i > 0 ? " · Active" : ""]
                                })]
                            }),
                            onSelect: () => {
                                U(e),
                                T(""),
                                A("")
                            }
                        }, e)
                    }
                    )
                }), (0,
                a.jsxs)("footer", {
                    className: "fd-gear-footer",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "fd-gear-selected",
                        children: [(0,
                        a.jsxs)("div", {
                            children: [(0,
                            a.jsx)("h2", {
                                children: s.BOOSTERS[W].name
                            }), "ready" === q.status && K && (0,
                            a.jsx)("small", {
                                children: K.quantity ? Q ? "+15 min · uses 1" : "15 min · uses 1" : "Not owned"
                            })]
                        }), X ? (0,
                        a.jsx)(u.PlayButton, {
                            className: "fd-gear-action",
                            label: "Unavailable",
                            detail: X,
                            disabledReason: X
                        }) : K?.quantity ? (0,
                        a.jsx)(u.PlayButton, {
                            className: "fd-gear-action",
                            label: q.purchasing ? "Working…" : "Activate",
                            busy: q.purchasing,
                            onClick: () => void H({
                                kind: "activate",
                                booster: W,
                                quantity: 1,
                                expectedPrice: 0,
                                currency: "credits"
                            })
                        }) : (0,
                        a.jsx)(u.PlayButton, {
                            className: "fd-gear-action",
                            label: "Buy",
                            "aria-haspopup": "dialog",
                            busy: q.purchasing,
                            disabledReason: c ? void 0 : "Shop unavailable",
                            onClick: () => c?.(W)
                        })]
                    }), c && (0,
                    a.jsx)(p.TextLink, {
                        className: "fd-gear-shop-link",
                        onClick: () => c?.(),
                        children: "Shop boosters"
                    })]
                })]
            }), (0,
            a.jsx)(m.DialogShell, {
                open: null !== z,
                size: "sm",
                className: "fd-booster-modal",
                closeLabel: "Close purchase",
                title: z ? s.BOOSTERS[z].name : "",
                description: z ? `${s.BOOSTERS[z].effect} \xb7 15 minutes each` : void 0,
                onClose: () => D(null),
                children: z && (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)("div", {
                        className: "fd-booster-modal-art",
                        children: (0,
                        a.jsx)(x, {
                            id: z
                        })
                    }), (0,
                    a.jsx)("p", {
                        className: "fd-booster-modal-rules",
                        children: "Starts when activated. Runs while offline. Additional boosters extend the timer."
                    }), (0,
                    a.jsxs)("p", {
                        className: "fd-booster-modal-balance",
                        children: ["Balance: ", q.parts?.toLocaleString("en-US") ?? "…", " Parts · ", q.balance?.toLocaleString("en-US") ?? "…", " Credits"]
                    }), (y = s.BOOSTERS[z],
                    S = q.boosters.find(e => e.id === z),
                    k = E[z],
                    C = (N = (e, a) => "parts" === e ? 3 === a ? y.partsPackPrice : y.partsPrice : 3 === a ? y.packPrice : y.price)(G, k),
                    _ = "parts" === G ? "Parts" : "Credits",
                    I = "ready" === q.status && !!S,
                    $ = (w = "parts" === G ? q.parts ?? 0 : q.balance ?? 0) < C,
                    M = "credits" === G && q.refund_debt > 0,
                    L = !I || q.purchasing || !!q.pendingBooster,
                    (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)(r.PaymentChoice, {
                            name: `booster-currency-${z}`,
                            value: G,
                            onChange: Y,
                            disabled: L,
                            options: [{
                                currency: "parts",
                                amount: N("parts", k)
                            }, {
                                currency: "credits",
                                amount: N("credits", k)
                            }]
                        }), (0,
                        a.jsxs)("fieldset", {
                            className: "fd-booster-options",
                            children: [(0,
                            a.jsx)("legend", {
                                children: "Quantity"
                            }), [1, 3].map(e => (0,
                            a.jsxs)("label", {
                                className: k === e ? "is-selected" : "",
                                children: [(0,
                                a.jsx)("input", {
                                    type: "radio",
                                    name: `pack-${z}`,
                                    value: e,
                                    checked: k === e,
                                    onChange: () => R(a => ({
                                        ...a,
                                        [z]: e
                                    }))
                                }), (0,
                                a.jsxs)("span", {
                                    children: [(0,
                                    a.jsx)("strong", {
                                        children: 1 === e ? "1 booster" : "3 boosters"
                                    }), 3 === e && (0,
                                    a.jsxs)("small", {
                                        className: "fd-booster-saving",
                                        children: ["Save ", (3 * N(G, 1) - N(G, 3)).toLocaleString("en-US"), " ", _]
                                    })]
                                }), (0,
                                a.jsxs)("span", {
                                    className: "fd-booster-option-price",
                                    children: [3 === e && (0,
                                    a.jsx)("s", {
                                        children: (3 * N(G, 1)).toLocaleString("en-US")
                                    }), (0,
                                    a.jsxs)("b", {
                                        children: [N(G, e).toLocaleString("en-US"), " ", (0,
                                        a.jsx)("small", {
                                            children: _
                                        })]
                                    })]
                                })]
                            }, e))]
                        }), (0,
                        a.jsx)(u.Button, {
                            tone: "primary",
                            size: "md",
                            block: !0,
                            className: "fd-booster-confirm",
                            trailingIcon: (0,
                            a.jsx)(f.Icon, {
                                name: "arrow-right",
                                size: 24
                            }),
                            disabled: L || M || "parts" === G && $,
                            onClick: () => {
                                $ && "credits" === G ? (D(null),
                                (0,
                                d.markMenuOpen)("shop", "credits_prompt"),
                                o.useCreditShop.getState().open({
                                    required: C,
                                    label: `${k} \xd7 ${y.label}`
                                })) : H({
                                    kind: "purchase",
                                    booster: z,
                                    quantity: k,
                                    expectedPrice: C,
                                    currency: G
                                })
                            }
                            ,
                            children: q.purchasing ? "Purchasing…" : $ && "credits" === G ? "Get Credits" : `Buy ${1 === k ? "booster" : "3 boosters"} \xb7 ${C.toLocaleString("en-US")} ${_}`
                        }), $ && I && (0,
                        a.jsxs)("small", {
                            className: "fd-booster-footnote",
                            children: [(C - w).toLocaleString("en-US"), " more ", _, " needed.", "parts" === G ? " Parts are earned by playing." : ""]
                        }), M && (0,
                        a.jsx)("p", {
                            className: "fd-booster-notice fd-booster-notice--error",
                            role: "alert",
                            children: "Contact support about your refunded purchase before spending Credits."
                        })]
                    })), B && (0,
                    a.jsx)("p", {
                        className: "fd-booster-notice fd-booster-notice--error",
                        role: "alert",
                        children: B
                    }), q.pendingBooster && !q.purchasing && (0,
                    a.jsxs)("p", {
                        className: "fd-booster-notice",
                        role: "status",
                        children: ["Your last request needs checking. ", (0,
                        a.jsx)(p.TextLink, {
                            onClick: () => void H(q.pendingBooster),
                            children: "Retry safely"
                        })]
                    }), "ready" !== q.status && (0,
                    a.jsx)("p", {
                        className: "fd-booster-notice",
                        role: "status",
                        children: "loading" === q.status ? "Loading your balance…" : q.error
                    }), "ready" === q.status && !q.boosters.some(e => e.id === z) && (0,
                    a.jsx)("p", {
                        className: "fd-booster-notice",
                        role: "status",
                        children: "This booster is temporarily unavailable."
                    })]
                })
            }), O && (0,
            a.jsx)(m.Toast, {
                className: "fd-booster-toast",
                tone: "success",
                title: O,
                action: V && l ? {
                    label: "Open consumables",
                    onClick: () => {
                        (0,
                        d.markMenuOpen)("gear", "purchase"),
                        l()
                    }
                } : void 0
            }), B && (0,
            a.jsx)(m.Toast, {
                className: "fd-booster-toast",
                tone: "error",
                title: B
            }), q.pendingBooster && !q.purchasing && (0,
            a.jsx)(m.Toast, {
                className: "fd-booster-toast",
                tone: "info",
                title: "Your last booster request needs checking.",
                action: {
                    label: "Retry safely",
                    onClick: () => void H(q.pendingBooster)
                }
            }), "loading" === q.status && (0,
            a.jsx)(m.LoadingState, {
                className: "fd-boosters-state",
                title: "Loading your consumables…"
            }), "error" === q.status && (0,
            a.jsx)(m.Toast, {
                className: "fd-booster-toast",
                tone: "error",
                title: q.error,
                action: {
                    label: "Try again",
                    onClick: () => void q.refresh()
                }
            }), "ready" === q.status && !q.boosters.length && (0,
            a.jsx)(m.Toast, {
                className: "fd-booster-toast",
                tone: "info",
                title: "Boosters are temporarily unavailable.",
                action: {
                    label: "Refresh",
                    onClick: () => void q.refresh()
                }
            }), V && q.refund_debt > 0 && (0,
            a.jsx)(m.Toast, {
                className: "fd-booster-toast",
                tone: "error",
                title: "Contact support about your refunded purchase before spending Credits."
            })]
        })
    }
    ], 516727)
}
, 854514, 647516, 743492, e => {
    "use strict";
    var a = e.i(843476)
      , t = e.i(794850)
      , s = e.i(271645)
      , n = e.i(295692)
      , r = e.i(127923);
    e.i(573798);
    var i = e.i(568204)
      , l = e.i(244144)
      , o = e.i(106258)
      , d = e.i(814022)
      , c = e.i(809886)
      , u = e.i(37220)
      , m = e.i(246176)
      , h = e.i(686410)
      , p = e.i(404961)
      , f = e.i(353198)
      , b = e.i(287405)
      , g = e.i(771607)
      , x = e.i(870895)
      , j = e.i(118274)
      , v = e.i(105524)
      , y = e.i(514152)
      , S = e.i(28276)
      , k = e.i(609223)
      , N = e.i(954646)
      , C = e.i(498475)
      , _ = e.i(509381)
      , I = e.i(516560)
      , w = e.i(883620)
      , $ = e.i(451598)
      , M = e.i(521201)
      , L = e.i(710534)
      , q = e.i(715793)
      , P = e.i(838740)
      , E = e.i(71901)
      , R = e.i(768834)
      , O = e.i(920755)
      , A = e.i(613105);
    let B = (0,
    R.create)( (e, a) => ({
        account: null,
        cleared: !1,
        load: async t => {
            if (!t)
                return void e({
                    account: null,
                    cleared: !1
                });
            if (a().account !== t && e({
                account: t,
                cleared: !1
            }),
            !a().cleared)
                try {
                    let {data: s, error: n} = await (0,
                    O.createClient)().from("race_clears").select("time_attack_id").limit(1).abortSignal((0,
                    A.withDeadline)(null, 8e3));
                    n || a().account !== t || e({
                        cleared: (s ?? []).length > 0
                    })
                } catch {}
        }
    }));
    var T = e.i(734524)
      , z = e.i(762815)
      , D = e.i(243402)
      , F = e.i(269778)
      , U = e.i(673378)
      , G = e.i(245433);
    let Y = (0,
    s.createContext)({
        nearby: G.fetchRaceNearby,
        solo: {
            boards: G.fetchRaceBoards,
            ghost: G.fetchRaceGhost
        }
    })
      , V = () => (0,
    s.useContext)(Y);
    function H() {
        (0,
        l.preloadRaceIcons)();
        let e = (0,
        F.useRacePick)()
          , [t,n] = (0,
        s.useState)(!1);
        (0,
        o.useSimStore)(e => e.lessonAuthoringEpoch);
        let r = (0,
        o.useSimStore)(d.flownDrone)
          , i = (0,
        o.useSimStore)(e => e.playerAccountId)
          , c = V()
          , [u,m] = (0,
        s.useState)({})
          , h = (0,
        S.listTimeAttacks)().filter(e => e.gates.length >= 2)
          , b = "time-attack" === e.mode ? (0,
        F.racePickCourse)(e, h) : null
          , g = (0,
        s.useRef)(null);
        (0,
        s.useLayoutEffect)( () => {
            let e = g.current;
            if (!t || !e)
                return;
            let a = e.querySelector('[aria-pressed="true"]')
              , s = a?.closest("section")?.querySelector("h3");
            if (!a || !s) {
                e.scrollTop = 0;
                return
            }
            e.scrollTop += s.getBoundingClientRect().top - e.getBoundingClientRect().top;
            let n = a.getBoundingClientRect().bottom - e.getBoundingClientRect().bottom;
            n > 0 && (e.scrollTop += n)
        }
        , [t, b?.id]);
        let x = [...new Set(h.map(e => e.mapId))]
          , j = JSON.stringify(x)
          , [v,y] = (0,
        s.useState)(new Map);
        (0,
        s.useEffect)( () => {
            let e = !0;
            return (0,
            D.loadMapNames)(JSON.parse(j)).then(a => {
                e && y(a)
            }
            ),
            () => {
                e = !1
            }
        }
        , [j]);
        let N = e => (0,
        p.hasMap)(e) ? (0,
        p.mapById)(e).name : v.get(e) ?? "Map unavailable"
          , _ = JSON.stringify([i, r, h.map(e => [e.id, e.competitiveRevision ?? 1])])
          , w = JSON.stringify((t ? h : b ? [b] : []).map(e => ({
            id: e.id,
            revision: e.competitiveRevision ?? 1
        })));
        (0,
        s.useEffect)( () => {
            let e = new AbortController;
            for (let a of JSON.parse(w))
                c.nearby({
                    timeAttackId: a.id,
                    courseRevision: a.revision,
                    droneId: r,
                    signal: e.signal
                }).then(t => {
                    e.signal.aborted || m(e => ({
                        ...e,
                        [`${_}:${a.id}`]: (t.around.find(e => e.you) ?? t.friends.find(e => e.you))?.timeMs ?? null
                    }))
                }
                ).catch( () => {}
                );
            return () => e.abort()
        }
        , [_, w, r, c]);
        let $ = e => {
            let a = u[`${_}:${e}`];
            return void 0 === a ? "Best unavailable" : null === a ? "No time yet" : (0,
            U.formatCircuitTime)(a)
        }
        ;
        return (0,
        a.jsxs)("section", {
            className: "fd-race-plate",
            "aria-label": "Race options",
            children: [(0,
            a.jsx)(I.Segmented, {
                typography: "body",
                label: "Race mode",
                value: e.mode,
                options: [{
                    value: "online",
                    label: "Online race"
                }, {
                    value: "time-attack",
                    label: "Time attack"
                }],
                onChange: e => {
                    F.useRacePick.setState({
                        mode: e
                    }),
                    n(!1)
                }
            }), "online" === e.mode && (0,
            a.jsx)("p", {
                className: "fd-race-plate__queue",
                children: k.ONLINE_RACE_QUEUE_LINE
            }), "time-attack" === e.mode && (0,
            a.jsx)(C.Button, {
                className: "fd-race-plate__circuit",
                tone: "ghost",
                size: "sm",
                block: !0,
                trailingIcon: (0,
                a.jsx)(l.Icon, {
                    name: t ? "chevron-up" : "chevron-right"
                }),
                "aria-expanded": t,
                onClick: () => n(!t),
                children: b?.name ?? "No circuits available"
            }), b && !t && (0,
            a.jsxs)("p", {
                children: [N(b.mapId), (0,
                a.jsx)("br", {}), "Your best · ", f.DRONES[r].name, " · ", $(b.id)]
            }), "time-attack" === e.mode && t && (0,
            a.jsx)("div", {
                ref: g,
                className: "fd-race-plate__circuits",
                "aria-label": "Circuits",
                children: x.map(e => (0,
                a.jsxs)("section", {
                    children: [(0,
                    a.jsx)("h3", {
                        children: N(e)
                    }), h.filter(a => a.mapId === e).map(e => (0,
                    a.jsxs)(C.Button, {
                        size: "sm",
                        "aria-pressed": b?.id === e.id,
                        tone: b?.id === e.id ? "secondary" : "ghost",
                        block: !0,
                        onClick: () => {
                            F.useRacePick.setState({
                                course: e.id
                            }),
                            n(!1)
                        }
                        ,
                        children: [(0,
                        a.jsx)("span", {
                            children: e.name
                        }), (0,
                        a.jsx)("small", {
                            "data-time": "number" == typeof u[`${_}:${e.id}`] || void 0,
                            children: $(e.id)
                        })]
                    }, e.id))]
                }, e))
            })]
        })
    }
    function J(e) {
        j.useModePanel.getState().open({
            mode: e,
            origin: "menu"
        })
    }
    e.s(["RaceDataContext", 0, Y, "useRaceData", 0, V], 647516);
    let W = "Fly while you wait";
    function K(e, a) {
        return a ? `4 pilots \xb7 ${f.DRONES[e].name} races` : k.NO_RACES_FOR_DRONE
    }
    let Q = "Getting ready…";
    function X({race: e, races: a, online: t, busy: s}) {
        let n = e && !a ? k.NO_RACES_FOR_DRONE : s ? Q : null;
        return {
            reason: n,
            disabled: !n && !t
        }
    }
    function Z({cards: e, selected: t, queued: n=null, onFlyFree: r, pick: i, member: o, onSelect: d, initialOpen: c=!1}) {
        let[u,m] = (0,
        s.useState)(c)
          , h = (0,
        s.useRef)(null)
          , p = (0,
        s.useRef)(null)
          , f = (0,
        s.useRef)(!1)
          , b = (0,
        s.useRef)(!1)
          , g = (0,
        s.useCallback)( (e, a=!1) => {
            b.current = e,
            m(e),
            !e && a && requestAnimationFrame( () => p.current?.focus())
        }
        , [])
          , [x,v] = (0,
        s.useState)({
            member: o,
            queued: n
        });
        (x.member !== o || x.queued !== n) && (v({
            member: o,
            queued: n
        }),
        u && m(!1));
        let y = u && !o;
        (0,
        s.useEffect)( () => {
            let e;
            if (!y)
                return;
            let a = () => {
                void 0 !== e && clearTimeout(e),
                e = void 0
            }
              , t = e => {
                f.current = !h.current?.contains(e.target)
            }
              , s = e => {
                let t = f.current;
                a(),
                f.current = !1,
                t && !h.current?.contains(e.target) && g(!1)
            }
              , n = () => {
                f.current && (e = setTimeout( () => {
                    f.current = !1,
                    g(!1)
                }
                , 0))
            }
              , r = () => {
                a(),
                f.current && g(!1),
                f.current = !1
            }
              , i = e => {
                "Escape" === e.key && (e.stopPropagation(),
                g(!1, !0))
            }
            ;
            return document.addEventListener("pointerdown", t, !0),
            document.addEventListener("pointerup", n, !0),
            document.addEventListener("pointercancel", r, !0),
            document.addEventListener("click", s),
            document.addEventListener("keydown", i, !0),
            b.current && h.current?.querySelector("[data-selected] .fdk-mode-plate-main")?.focus(),
            () => {
                a(),
                f.current = !1,
                document.removeEventListener("pointerdown", t, !0),
                document.removeEventListener("pointerup", n, !0),
                document.removeEventListener("pointercancel", r, !0),
                document.removeEventListener("click", s),
                document.removeEventListener("keydown", i, !0)
            }
        }
        , [y, g]);
        let S = n ?? (o ? i?.mode ?? t : t)
          , k = e.find(e => e.mode === S) ?? e[0];
        if (!y) {
            let e = o && i ? (0,
            a.jsxs)(a.Fragment, {
                children: [i.leader, "’s pick"]
            }) : "free" === S ? k.detail : void 0;
            return o ? (0,
            a.jsx)("div", {
                className: "fd-mode-chooser",
                ref: h,
                children: (0,
                a.jsx)(_.ModePlate, {
                    size: "lg",
                    title: j.PLAY_MODE_NAMES[S],
                    meta: e,
                    selected: !0,
                    onSelect: "free" === S ? void 0 : () => J(S),
                    label: `${j.PLAY_MODE_NAMES[S]}, ${i?.leader ?? "your leader"}'s pick`
                })
            }) : "race" !== S || n ? (0,
            a.jsx)("div", {
                className: "fd-mode-chooser",
                ref: h,
                children: (0,
                a.jsx)(_.ModePlate, {
                    size: "lg",
                    buttonRef: p,
                    title: j.PLAY_MODE_NAMES[S],
                    meta: e,
                    selected: !0,
                    opens: !0,
                    onSelect: () => g(!0),
                    label: `Mode: ${j.PLAY_MODE_NAMES[S]}${"free" === S && "string" == typeof k.detail ? `, ${k.detail}` : ""}. Change mode`
                })
            }) : (0,
            a.jsxs)("div", {
                className: "fd-mode-chooser fd-race-picker",
                ref: h,
                children: [(0,
                a.jsx)(C.Button, {
                    ref: p,
                    className: "fd-race-picker__heading",
                    tone: "ghost",
                    icon: (0,
                    a.jsx)(l.Icon, {
                        name: "mode-race",
                        size: 30
                    }),
                    trailingIcon: (0,
                    a.jsx)(l.Icon, {
                        name: "chevron-down"
                    }),
                    onClick: () => g(!0),
                    "aria-label": "Mode: Race. Change mode",
                    children: "Race"
                }), (0,
                a.jsx)(H, {})]
            })
        }
        return (0,
        a.jsx)("div", {
            className: "fd-mode-chooser",
            ref: h,
            "data-open": !0,
            onBlur: e => {
                f.current || !e.relatedTarget || e.currentTarget.contains(e.relatedTarget) || g(!1)
            }
            ,
            children: (0,
            a.jsx)(ee, {
                cards: e,
                current: S,
                queued: n,
                onFlyFree: r,
                onClose: () => g(!1),
                onSelect: e => {
                    d(e),
                    g(!1, !0)
                }
            })
        })
    }
    function ee({cards: e, current: t, queued: s=null, onFlyFree: n, onSelect: r, onClose: o}) {
        return (0,
        a.jsx)("div", {
            className: "fd-mode-picker",
            role: "group",
            "aria-label": "Modes",
            children: e.map( ({mode: e, detail: d, availability: c}) => {
                let u = "free" !== e
                  , m = !c.open && "level" === c.reason
                  , h = !c.open && "offline" === c.reason
                  , p = "free" === e && !!s && !!n
                  , f = !!s && e !== s && !p;
                return (0,
                a.jsx)(_.ModePlate, {
                    icon: (0,
                    a.jsx)(T.ModeIcon, {
                        mode: e,
                        size: 40
                    }),
                    title: j.PLAY_MODE_NAMES[e],
                    meta: c.open && !f ? p ? W : d : void 0,
                    end: c.open ? f ? (0,
                    a.jsx)(l.Icon, {
                        name: "lock",
                        size: 20
                    }) : void 0 : "level" === c.reason ? (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)(l.Icon, {
                            name: "lock",
                            size: 20
                        }), "LVL ", c.level]
                    }) : (0,
                    a.jsx)(i.Badge, {
                        icon: (0,
                        a.jsx)(l.Icon, {
                            name: "offline"
                        }),
                        children: "Offline"
                    }),
                    selected: t === e,
                    locked: m || f,
                    dim: h,
                    onSelect: () => {
                        if (!m && !f) {
                            if (p) {
                                o(),
                                n?.();
                                return
                            }
                            if (u && h) {
                                o(),
                                J(e);
                                return
                            }
                            r(e)
                        }
                    }
                    ,
                    hint: f ? v.QUEUE_HELD : void 0,
                    label: `${j.PLAY_MODE_NAMES[e]}${f ? `, ${v.QUEUE_HELD}` : p ? `, ${W}` : !c.open ? `, ${c.label}` : ""}`,
                    more: u && c.open && !f ? {
                        label: `${j.PLAY_MODE_NAMES[e]}: ${"race" === e ? "Time attack, circuits and boards" : "Online match details"}`,
                        onClick: () => {
                            o(),
                            J(e)
                        }
                    } : void 0
                }, e)
            }
            )
        })
    }
    function ea({member: e}) {
        return (0,
        a.jsxs)("span", {
            className: "fd-sit-out",
            children: [(0,
            a.jsx)("span", {
                "aria-hidden": !0,
                children: "Sit out"
            }), (0,
            a.jsx)(w.Switch, {
                label: "Sit out",
                checked: e.sittingOut,
                disabled: e.busy,
                onChange: e.onSitOut,
                showState: !1
            })]
        })
    }
    function et({member: e, size: t, block: s}) {
        let n, r = (0,
        y.useQueueView)();
        return r ? "found" === r.state ? (0,
        a.jsx)(C.PlayStatus, {
            state: "found",
            size: t,
            stacked: s,
            title: s ? "Match found" : (0,
            a.jsxs)(a.Fragment, {
                children: ["Match found", (0,
                a.jsx)(C.PlayStatus.Dot, {}), r.mode]
            }),
            detail: r.line,
            actions: s ? (0,
            a.jsx)(C.Button, {
                onClick: () => v.useMatchmaking.getState().backOut(),
                children: "Back out"
            }) : (0,
            a.jsx)("button", {
                type: "button",
                className: "fd-play-slot__line",
                onClick: () => v.useMatchmaking.getState().backOut(),
                children: "Back out"
            })
        }) : (0,
        a.jsx)(C.PlayStatus, {
            state: "searching",
            size: t,
            stacked: s && r.lead,
            title: (n = (0,
            a.jsxs)(a.Fragment, {
                children: ["Searching ", (0,
                a.jsx)("time", {
                    children: r.time
                })]
            }),
            s ? n : (0,
            a.jsxs)(a.Fragment, {
                children: [r.mode, (0,
                a.jsx)(C.PlayStatus.Dot, {}), n]
            })),
            detail: (0,
            a.jsx)("span", {
                "aria-live": "polite",
                children: r.lead ? r.fill : e?.sittingOut ? "You're sitting out" : `${e?.leader ?? r.leader} leads \xb7 ${r.fill}`
            }),
            actions: r.lead ? s ? (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(C.Button, {
                    onClick: () => v.useMatchmaking.getState().startNow(),
                    children: "Start now"
                }), (0,
                a.jsx)("span", {
                    className: "fdk-on-ink",
                    children: (0,
                    a.jsx)(C.Button, {
                        onClick: () => v.useMatchmaking.getState().cancel(),
                        children: "Cancel"
                    })
                })]
            }) : (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("button", {
                    type: "button",
                    className: "fd-play-slot__light",
                    onClick: () => v.useMatchmaking.getState().startNow(),
                    children: "Start now"
                }), (0,
                a.jsx)("button", {
                    type: "button",
                    className: "fd-play-slot__line",
                    onClick: () => v.useMatchmaking.getState().cancel(),
                    children: "Cancel"
                })]
            }) : e && (0,
            a.jsx)(ea, {
                member: e
            })
        }) : null
    }
    function es({notice: e, online: t}) {
        return e ? (0,
        a.jsxs)("p", {
            role: "alert",
            className: "fd-lobby-error",
            "data-match-error": !0,
            children: [e.line, e.retry && (0,
            a.jsx)(_.TextLink, {
                disabled: !t,
                onClick: () => (0,
                v.retryMatch)(),
                children: "Try again"
            })]
        }) : null
    }
    function en(e) {
        if ("member" === e.kind)
            return (0,
            a.jsx)(C.PlayStatus, {
                state: "member",
                live: !1,
                title: (0,
                a.jsxs)(a.Fragment, {
                    children: [e.leader, " leads"]
                }),
                detail: (0,
                a.jsx)("span", {
                    className: "fdk-sr",
                    "aria-live": "polite",
                    children: e.sittingOut ? "You're sitting out" : e.detail
                }),
                actions: (0,
                a.jsx)(ea, {
                    member: e
                })
            });
        let t = e.reason ?? void 0;
        return (0,
        a.jsx)(C.PlayButton, {
            label: e.label,
            launchIcon: !0,
            detail: t,
            disabledReason: t,
            "data-mode-primary": !0,
            disabled: !t && e.disabled,
            onClick: e.onPlay
        })
    }
    function er({onLessons: e, onReplays: t, onCommunity: s, onEditor: n}) {
        let r = {
            lessons: e,
            replays: t,
            community: s,
            editor: n
        };
        return (0,
        a.jsx)(I.SideRail, {
            label: "More",
            plain: !0,
            className: "fd-lobby-list",
            onChange: e => r[e](),
            items: [{
                value: "lessons",
                label: "Lessons"
            }, {
                value: "replays",
                label: "Replays"
            }, {
                value: "community",
                label: "Community"
            }, {
                value: "editor",
                label: "Editor"
            }]
        })
    }
    async function ei(e) {
        let a = (0,
        q.featuredMapId)(e);
        if (e.current) {
            if (await (0,
            E.selectLobbyMap)(a).catch( () => !1) && (0,
            p.resolveMap)(a).revision === e.version) {
                if (m.useLobbySocial.getState().squad)
                    return;
                (0,
                N.requestHomeExit)( () => {
                    (0,
                    v.queueBusy)(v.useMatchmaking.getState()) || m.useLobbySocial.getState().squad || (o.useSimStore.getState().playPersonalMap(a),
                    o.useSimStore.setState({
                        editorLibraryOpen: !1
                    }),
                    (0,
                    q.markFeaturedFlown)(e))
                }
                );
                return
            }
            if (m.useLobbySocial.getState().squad)
                return
        }
        let t = await (0,
        q.loadFeaturedSnapshot)().catch( () => null);
        t && t.id === e.mapId && t.revision === e.version && (0,
        N.requestHomeExit)( () => {
            (0,
            v.queueBusy)(v.useMatchmaking.getState()) || m.useLobbySocial.getState().squad || ((0,
            p.registerPersonalMap)((0,
            P.personalMapDefinition)(t)),
            o.useSimStore.getState().playPersonalMap(a, {
                offline: !0
            }),
            o.useSimStore.setState({
                editorLibraryOpen: !1
            }),
            (0,
            q.markFeaturedFlown)(e))
        }
        )
    }
    function el({kind: e, title: t, line: s, bar: n, action: r, label: l, disabled: o, hint: d, onClick: c}) {
        return (0,
        a.jsxs)("button", {
            type: "button",
            className: `fd-lobby-progress__card fd-lobby-progress__${"first-flight" === e ? "first" : e}`,
            disabled: o,
            title: d ?? void 0,
            "aria-label": l,
            "data-goal": e,
            onClick: c,
            children: [(0,
            a.jsxs)("span", {
                className: "fd-lobby-progress__head",
                children: [(0,
                a.jsx)("strong", {
                    children: t
                }), r && (0,
                a.jsx)("span", {
                    className: "fd-lobby-progress__go",
                    "aria-hidden": !0,
                    children: r
                })]
            }), s && (0,
            a.jsx)("span", {
                className: "fd-lobby-progress__line",
                children: s
            }), n && (0,
            a.jsx)(i.ProgressBar, {
                value: n.value,
                max: n.max,
                label: t,
                valueText: n.text
            }), d && (0,
            a.jsx)("span", {
                children: d
            })]
        })
    }
    function eo(e) {
        return `Featured map \xb7 by ${e.creator}${e.current ? "" : " · Solo"}`
    }
    let ed = e => `Featured map: ${e.name} by ${e.creator}${e.current ? "" : ", the picked version, solo"}. Fly`;
    function ec({map: e, hint: t}) {
        return (0,
        a.jsxs)("button", {
            type: "button",
            className: "fd-lobby-progress__card fd-lobby-featured",
            disabled: !!t,
            title: t ?? void 0,
            "aria-label": ed(e),
            "data-goal": "featured-plate",
            onClick: () => void ei(e),
            children: [(0,
            a.jsxs)("span", {
                className: "fd-lobby-progress__head",
                children: [(0,
                a.jsx)("strong", {
                    children: e.name
                }), (0,
                a.jsxs)("span", {
                    className: "fd-lobby-progress__go",
                    "aria-hidden": !0,
                    children: ["Fly", (0,
                    a.jsx)(l.Icon, {
                        name: "arrow-right",
                        size: 20
                    })]
                })]
            }), (0,
            a.jsx)("span", {
                className: "fd-lobby-progress__line",
                children: eo(e)
            }), t && (0,
            a.jsx)("span", {
                children: t
            })]
        })
    }
    function eu({onChallenges: e, onGear: t}) {
        let n = (0,
        o.useSimStore)(g.confirmedXp)
          , r = (0,
        o.useSimStore)(e => e.completedLessonIds)
          , i = (0,
        o.useSimStore)(e => e.timeAttackPrs)
          , l = (0,
        o.useSimStore)(e => e.droneGifts);
        (0,
        o.useSimStore)(e => e.lessonAuthoringEpoch);
        let d = (0,
        $.useCreditRecord)(e => e.record)
          , c = (0,
        q.useFeaturedMap)(e => e.featured)
          , h = (0,
        q.useFeaturedMap)(e => e.flown)
          , p = (0,
        u.useMenuScene)(e => e.selectedMap)
          , b = (0,
        o.useSimStore)(e => e.isAnonymous ? null : e.playerAccountId)
          , j = (0,
        m.useLobbySocial)(e => e.squad)
          , y = (0,
        v.useMatchmaking)(v.queueLockLine)
          , k = B(e => e.cleared && e.account === b);
        (0,
        s.useEffect)( () => {
            "idle" === q.useFeaturedMap.getState().status && q.useFeaturedMap.getState().load()
        }
        , []),
        (0,
        s.useEffect)( () => {
            B.getState().load(b)
        }
        , [b]);
        let N = function(e) {
            let a = (0,
            x.levelProgress)(e.xp)
              , t = e.firstCourse;
            if (a.level <= 1 && t) {
                let a = t.lessons.findIndex(a => !e.completedLessonIds.includes(a.id));
                if (a >= 0)
                    return {
                        kind: "first-flight",
                        course: t.course,
                        lessons: t.lessons,
                        index: a,
                        next: t.lessons[a],
                        done: t.lessons.filter(a => e.completedLessonIds.includes(a.id)).length
                    }
            }
            if (a.level >= 2 && !e.raceFinished && e.race)
                return {
                    kind: "race",
                    race: e.race
                };
            if (e.featured && !e.featured.flown)
                return {
                    kind: "featured",
                    map: e.featured.map
                };
            if (e.challenge)
                return {
                    kind: "challenge",
                    challenge: e.challenge
                };
            let s = e.gifts ?? []
              , n = f.DRONE_IDS.filter(e => !s.includes(e) && f.DRONES[e].unlockLevel > a.level).sort( (e, a) => f.DRONES[e].unlockLevel - f.DRONES[a].unlockLevel)[0];
            if (n) {
                let t = f.DRONES[n].unlockLevel
                  , s = (0,
                x.xpRequiredForLevel)(a.level)
                  , r = (0,
                x.xpRequiredForLevel)(t) - s
                  , i = Math.max(0, Math.min(r, e.xp - s));
                return {
                    kind: "drone",
                    drone: n,
                    level: t,
                    xpToGo: r - i,
                    value: i,
                    target: r
                }
            }
            return {
                kind: "level",
                level: a.level + 1,
                xpToGo: Math.max(0, a.xpForNext - a.xpIntoLevel),
                value: a.xpIntoLevel,
                target: a.xpForNext
            }
        }({
            xp: n,
            gifts: l,
            firstCourse: (0,
            S.listCourses)().map(e => ({
                course: e,
                lessons: e.lessonIds.map(L.lessonById).filter(e => null !== e)
            })).find(e => e.lessons.length > 0) ?? null,
            completedLessonIds: r,
            raceFinished: k || Object.keys(i).length > 0,
            race: function(e, a=(0,
            S.listTimeAttacks)()) {
                let t = a.filter(e => e.gates.length >= 2);
                return t.find(a => a.mapId === e) ?? t.find(e => !e.mapId.startsWith("user:")) ?? null
            }(p),
            featured: c ? {
                map: c,
                flown: h
            } : null,
            challenge: function(e) {
                let a = e?.challenges_unlocked ? e.challenge : null
                  , t = a && M.CHALLENGE_TIERS.find(e => !a.paid.includes(e.id));
                if (!a || !t)
                    return null;
                let s = [{
                    label: "Official races",
                    value: a.counters.racing ?? 0,
                    target: t.racing
                }, {
                    label: "First Flight and banking runs",
                    value: a.counters.school ?? 0,
                    target: t.school
                }, {
                    label: "1,000-point banks",
                    value: a.counters.freestyle ?? 0,
                    target: t.freestyle
                }].reduce( (e, a) => a.value / a.target > e.value / e.target ? a : e);
                return {
                    name: t.name,
                    label: s.label,
                    value: Math.min(s.value, s.target),
                    target: s.target
                }
            }(d)
        })
          , C = c ? function(e, {queueLock: a, squad: t, leader: s}) {
            return a ?? (t && !s ? "Only the squad leader can change the map" : t && !e.current ? "The picked version flies solo" : null)
        }(c, {
            queueLock: y,
            squad: !!j,
            leader: !j || j.leaderId === b
        }) : null;
        return (0,
        a.jsxs)("aside", {
            className: "fd-lobby-progress",
            "aria-label": "Progress",
            children: [(0,
            a.jsx)(em, {
                goal: N,
                queueLock: y,
                flyBlock: C,
                onChallenges: e,
                onGear: t
            }), c && "featured" !== N.kind && (0,
            a.jsx)(ec, {
                map: c,
                hint: C
            })]
        })
    }
    function em({goal: e, queueLock: t, flyBlock: s, onChallenges: n, onGear: r}) {
        let i = (0,
        a.jsx)(l.Icon, {
            name: "arrow-right",
            size: 20
        })
          , d = e => `${e.toLocaleString("en-US")} XP to go`;
        switch (e.kind) {
        case "first-flight":
            return (0,
            a.jsx)(el, {
                kind: e.kind,
                title: e.course.name,
                disabled: !!t,
                hint: t,
                bar: {
                    value: e.done,
                    max: e.lessons.length,
                    text: `${e.done}/${e.lessons.length}`
                },
                label: `${e.course.name}: ${e.done} of ${e.lessons.length} lessons. Start lesson ${e.index + 1}`,
                onClick: () => (0,
                N.requestHomeExit)( () => {
                    (0,
                    v.queueBusy)(v.useMatchmaking.getState()) || o.useSimStore.getState().startLesson(e.next.id)
                }
                )
            });
        case "race":
            return (0,
            a.jsx)(el, {
                kind: e.kind,
                title: "Races are open",
                line: `${e.race.name} \xb7 ${(0,
                p.resolveMap)(e.race.mapId).name}`,
                action: i,
                label: `Races are open. Open ${e.race.name}`,
                onClick: () => j.useModePanel.getState().open({
                    mode: "race",
                    origin: "menu",
                    courseId: e.race.id
                })
            });
        case "featured":
            return (0,
            a.jsx)(el, {
                kind: e.kind,
                title: e.map.name,
                line: eo(e.map),
                action: (0,
                a.jsxs)(a.Fragment, {
                    children: ["Fly", i]
                }),
                disabled: !!s,
                hint: s,
                label: ed(e.map),
                onClick: () => void ei(e.map)
            });
        case "challenge":
            return (0,
            a.jsx)(el, {
                kind: e.kind,
                title: e.challenge.name,
                bar: {
                    value: e.challenge.value,
                    max: e.challenge.target,
                    text: `${e.challenge.value}/${e.challenge.target}`
                },
                label: `Challenge ${e.challenge.name}: ${e.challenge.label}, ${e.challenge.value} of ${e.challenge.target}`,
                onClick: n
            });
        case "drone":
            return (0,
            a.jsx)(el, {
                kind: e.kind,
                title: `Next: ${f.DRONES[e.drone].name}`,
                line: `Opens at level ${e.level}`,
                bar: {
                    value: e.value,
                    max: e.target,
                    text: d(e.xpToGo)
                },
                label: `Next drone: ${f.DRONES[e.drone].name} at level ${e.level}, ${d(e.xpToGo)}`,
                onClick: () => r?.()
            });
        case "level":
            return (0,
            a.jsx)(el, {
                kind: e.kind,
                title: `Level ${e.level}`,
                bar: {
                    value: e.value,
                    max: e.target,
                    text: d(e.xpToGo)
                },
                label: `Level ${e.level}: ${d(e.xpToGo)}`,
                onClick: n
            })
        }
    }
    e.s(["GETTING_READY", 0, Q, "LobbyList", 0, er, "LobbyProgress", 0, eu, "MatchNoticeLine", 0, es, "MenuQueueDock", 0, function() {
        let e = (0,
        v.useMatchmaking)(v.queueBusy)
          , t = (0,
        o.useSimStore)(e => e.isAnonymous ? null : e.playerAccountId)
          , s = (0,
        m.useLobbySocial)(e => e.squad)
          , n = (0,
        m.useLobbySocial)(e => e.busy)
          , r = (0,
        z.useSitOut)();
        if (!e)
            return null;
        let i = s?.members.find(e => e.id === s.leaderId)?.username ?? "Your leader"
          , l = s && s.leaderId !== t ? {
            leader: i,
            sittingOut: (0,
            z.sittingOutOf)(r, s),
            busy: n,
            onSitOut: e => r.set(s.id, e)
        } : void 0;
        return (0,
        a.jsx)("div", {
            className: "fd-menu-queue",
            children: (0,
            a.jsx)(et, {
                member: l,
                size: "sm"
            })
        })
    }
    , "ModeChooser", 0, Z, "PlaySlot", 0, en, "QueueSlot", 0, et, "playBlock", 0, X, "raceCardDetail", 0, K], 743492);
    var eh = e.i(410484);
    function ep({id: e, username: t, container: r}) {
        let i = (0,
        m.useLobbySocial)()
          , o = (0,
        s.useRef)(!1);
        return (0,
        a.jsxs)(n.DropdownMenu.Root, {
            onOpenChange: e => {
                e && (o.current = !1)
            }
            ,
            children: [(0,
            a.jsx)(n.DropdownMenu.Trigger, {
                asChild: !0,
                children: (0,
                a.jsx)("button", {
                    type: "button",
                    disabled: i.busy,
                    "aria-label": `Manage ${t}`,
                    title: `Manage ${t}`,
                    children: (0,
                    a.jsx)(l.Icon, {
                        name: "ellipsis",
                        size: 19
                    })
                })
            }), (0,
            a.jsx)(n.DropdownMenu.Portal, {
                container: r,
                children: (0,
                a.jsxs)(n.DropdownMenu.Content, {
                    className: "fd-member-menu fdk-screen",
                    align: "end",
                    sideOffset: 5,
                    onCloseAutoFocus: e => {
                        o.current && (e.preventDefault(),
                        r?.querySelector('[aria-label="Close friends"]')?.focus())
                    }
                    ,
                    onKeyDown: e => e.stopPropagation(),
                    children: [(0,
                    a.jsxs)(n.DropdownMenu.Item, {
                        onSelect: () => {
                            o.current = !0,
                            i.act("promote", e)
                        }
                        ,
                        children: [(0,
                        a.jsx)(l.Icon, {
                            name: "crown",
                            size: 16
                        }), "Make leader"]
                    }), (0,
                    a.jsxs)(n.DropdownMenu.Item, {
                        className: "fd-member-remove",
                        onSelect: () => {
                            o.current = !0,
                            i.act("kick", e)
                        }
                        ,
                        children: [(0,
                        a.jsx)(l.Icon, {
                            name: "user-minus",
                            size: 16
                        }), "Remove from squad"]
                    })]
                })
            })]
        })
    }
    function ef({account: e, container: t}) {
        let s = (0,
        m.useLobbySocial)().squad;
        if (!s)
            return null;
        let n = s.leaderId === e;
        return (0,
        a.jsx)("div", {
            className: "fd-social-squad-roster",
            children: s.members.map(r => (0,
            a.jsxs)("div", {
                className: "fd-friend-row fd-squad-row",
                "data-own": r.id === e || void 0,
                children: [(0,
                a.jsx)("span", {
                    className: "fd-social-level",
                    "aria-label": `Level ${(0,
                    x.xpToLevel)(r.xp)}`,
                    children: (0,
                    x.xpToLevel)(r.xp)
                }), (0,
                a.jsxs)("span", {
                    children: [(0,
                    a.jsxs)("strong", {
                        children: [r.username, r.id === e && (0,
                        a.jsx)("small", {
                            className: "fd-social-you",
                            children: "You"
                        }), r.id === s.leaderId && (0,
                        a.jsx)(l.Icon, {
                            name: "crown",
                            size: 14,
                            label: "Squad leader"
                        })]
                    }), (0,
                    a.jsx)("small", {
                        className: "fd-social-state",
                        "data-ready": r.online && (r.ready || r.id === s.leaderId) || void 0,
                        children: "Ready" === (0,
                        m.squadMemberStatus)(r, s.leaderId) ? (0,
                        a.jsxs)(a.Fragment, {
                            children: [(0,
                            a.jsx)(l.Icon, {
                                name: "check",
                                size: 12
                            }), "Ready"]
                        }) : (0,
                        m.squadMemberStatus)(r, s.leaderId)
                    })]
                }), n && r.id !== e && (0,
                a.jsx)(ep, {
                    id: r.id,
                    username: r.username,
                    container: t
                })]
            }, r.id))
        })
    }
    function eb() {
        let e = (0,
        m.useLobbySocial)()
          , t = new Set(e.squad?.members.map(e => e.id));
        return (0,
        a.jsxs)("div", {
            className: "fd-friends-list",
            children: [[...e.friends].sort( (e, a) => Number(a.online) - Number(e.online) || e.username.localeCompare(a.username)).map(s => {
                let n = t.has(s.id)
                  , r = e.sentInvitations?.includes(s.id)
                  , i = (e.squad?.members.length ?? 1) >= 4;
                return (0,
                a.jsxs)("div", {
                    className: "fd-friend-row",
                    children: [(0,
                    a.jsx)("i", {
                        className: "fd-friend-avatar",
                        "data-online": s.online,
                        children: (0,
                        a.jsx)(l.Icon, {
                            name: "smile",
                            size: 25
                        })
                    }), (0,
                    a.jsxs)("span", {
                        children: [(0,
                        a.jsx)("strong", {
                            children: s.username
                        }), (0,
                        a.jsx)("small", {
                            children: n ? "In squad" : r ? "Invited" : "flying" === s.status ? "In flight" : s.online ? "Online" : "Offline"
                        })]
                    }), n ? (0,
                    a.jsx)(l.Icon, {
                        name: "check",
                        className: "fd-in-squad",
                        size: 20,
                        label: "In squad"
                    }) : r ? (0,
                    a.jsx)(l.Icon, {
                        name: "clock-3",
                        size: 18,
                        label: "Invitation sent"
                    }) : s.online && (0,
                    a.jsx)("button", {
                        type: "button",
                        disabled: e.busy || i,
                        title: i ? "Squad full" : `Invite ${s.username}`,
                        onClick: () => void e.act("invite", s.id),
                        "aria-label": `Invite ${s.username} to squad`,
                        children: (0,
                        a.jsx)(l.Icon, {
                            name: "plus",
                            size: 18
                        })
                    })]
                }, s.id)
            }
            ), "ready" === e.status && 0 === e.friends.length && (0,
            a.jsx)("p", {
                children: "No friends added."
            }), ("idle" === e.status || "loading" === e.status) && (0,
            a.jsx)("p", {
                role: "status",
                children: "Connecting to friends…"
            })]
        })
    }
    function eg({pick: e}) {
        let t = f.DRONES[e.drone].name
          , s = e.choices.indexOf(e.drone)
          , n = e.away ? `Your drone here. ${e.leader}'s drone is lent in the squad's lobby` : e.spent ? `Back on your drone. ${e.leader}'s drone returns at the next launch` : `${e.leader}'s drone`;
        return e.leader ? (0,
        a.jsx)("span", {
            className: "fd-squad-caption",
            "data-spent": e.spent || e.away || void 0,
            "aria-label": `${t}. ${n}`,
            "aria-live": "polite",
            children: e.spent || e.away ? (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("b", {
                    children: t
                }), (0,
                a.jsx)("span", {
                    children: n
                })]
            }) : (0,
            a.jsx)("b", {
                children: n
            })
        }) : (0,
        a.jsx)("span", {
            className: "fd-squad-caption",
            "aria-label": s >= 0 ? `${t}, drone ${s + 1} of ${e.choices.length}` : t,
            "aria-live": "polite",
            children: (0,
            a.jsx)("b", {
                children: t
            })
        })
    }
    function ex(e) {
        let a = e.appearance?.skinId === e.skin ? e.appearance.skin : (0,
        f.droneSkin)(e.drone, e.skin);
        b.useDroneInspect.getState().open({
            pilot: e.username,
            drone: e.drone,
            skinId: e.skin,
            skin: a
        })
    }
    function ej({members: e, account: t, solo: n, leaderId: r, pick: o, onGear: d}) {
        let c = (0,
        u.useMenuScene)(e => e.slotAnchors)
          , h = (0,
        u.useMenuScene)(e => e.setHoveredSlot);
        (0,
        s.useEffect)( () => () => h(null), [h]);
        let p = c?.[0]
          , b = o.choices.length > 1 ? o.onRotate : void 0
          , g = c && c.length > 1 ? Math.min(...c.slice(1).map(e => e.top)) : null
          , j = e.findIndex(e => e.id === t || !t);
        return (0,
        a.jsxs)("div", {
            className: "fd-squad-slots",
            "data-anchored": c ? "" : void 0,
            "aria-label": "Squad members",
            onPointerLeave: () => h(null),
            style: null !== g ? {
                "--invite-top": `${100 * g}%`
            } : void 0,
            children: [Array.from({
                length: 4
            }, (s, o) => {
                let p = e[o]
                  , b = c?.[o]
                  , g = b ? {
                    "--slot-x": `${100 * b.x}%`,
                    "--slot-y": `${100 * b.y}%`,
                    "--slot-top": `${100 * b.top}%`,
                    "--slot-w": `${100 * b.width}%`
                } : void 0
                  , j = {
                    onPointerEnter: () => h(o),
                    onPointerLeave: () => h(null),
                    onFocus: () => h(o),
                    onBlur: () => h(null)
                };
                if (!p)
                    return (0,
                    a.jsx)("div", {
                        className: "fd-squad-slot fd-squad-slot--empty",
                        style: g,
                        children: (0,
                        a.jsxs)("button", {
                            type: "button",
                            className: "fd-squad-invite",
                            ...j,
                            onClick: () => u.useMenuScene.getState().setSocialOpen(!0),
                            "aria-label": `Invite friend to squad slot ${o + 1}`,
                            children: [(0,
                            a.jsx)(l.Icon, {
                                name: "plus",
                                size: 18
                            }), "Invite"]
                        })
                    }, `empty-${o}`);
                let v = p.id === t || !t
                  , y = !n && p.id === r
                  , S = n ? null : (0,
                m.squadMemberStatus)(p, r ?? "")
                  , k = (0,
                x.xpToLevel)(p.xp);
                return (0,
                a.jsx)("div", {
                    className: "fd-squad-slot",
                    style: g,
                    children: (0,
                    a.jsx)(i.NameTag, {
                        name: p.username,
                        status: (!v && S && "Leader" !== S && "Ready" !== S ? S : null) ?? void 0,
                        leader: y,
                        ...j,
                        onClick: v ? d : () => ex(p),
                        label: v ? `${p.username}, level ${k}${y ? ", squad leader" : ""}. Customize ${f.DRONES[p.drone].category}` : `${p.username}, level ${k}${y ? ", squad leader" : ""}, ${S ?? "You"}. Inspect drone`
                    })
                }, p.id)
            }
            ), p && 0 === j && (0,
            a.jsxs)("div", {
                className: "fd-drone-pick",
                role: "group",
                "aria-label": "Your drone",
                style: {
                    "--slot-x": `${100 * p.x}%`,
                    "--slot-y": `${100 * p.y}%`
                },
                children: [b && (0,
                a.jsx)("button", {
                    type: "button",
                    className: "fd-drone-arrow",
                    "data-side": "previous",
                    disabled: o.busy,
                    onClick: () => b(-1),
                    "aria-label": "Previous drone",
                    title: "Previous drone",
                    children: (0,
                    a.jsx)(l.Icon, {
                        name: "chevron-left",
                        size: 24
                    })
                }), (0,
                a.jsx)(eg, {
                    pick: o
                }), b && (0,
                a.jsx)("button", {
                    type: "button",
                    className: "fd-drone-arrow",
                    "data-side": "next",
                    disabled: o.busy,
                    onClick: () => b(1),
                    "aria-label": "Next drone",
                    title: "Next drone",
                    children: (0,
                    a.jsx)(l.Icon, {
                        name: "chevron-right",
                        size: 24
                    })
                })]
            })]
        })
    }
    e.s(["FlightLobby", 0, function({onGear: e, onMaps: n, onLessons: r, onReplays: i, onCommunity: f, onEditor: b, onChallenges: x, pickerOpen: C=!1}) {
        let I = (0,
        o.useSimStore)(e => e.username);
        (0,
        l.preloadRaceIcons)();
        let w = (0,
        o.useSimStore)(e => e.isAnonymous ? null : e.playerAccountId)
          , $ = (0,
        o.useSimStore)(g.confirmedXp)
          , M = (0,
        o.useSimStore)(e => e.droneGifts)
          , L = (0,
        o.useSimStore)(d.flownDrone)
          , q = (0,
        F.useRacePick)()
          , P = V()
          , [E,R] = (0,
        s.useState)(!1)
          , [O,A] = (0,
        s.useState)(null)
          , B = (0,
        s.useRef)(null)
          , T = JSON.stringify([L, w, q.mode, q.course])
          , [D,U] = (0,
        s.useState)(T);
        D !== T && (U(T),
        R(!1),
        A(null)),
        (0,
        s.useEffect)( () => () => B.current?.abort(), [T]);
        let G = (0,
        o.useSimStore)(d.lendSpent)
          , Y = (0,
        o.useSimStore)(d.lendAway)
          , H = (0,
        u.useMenuScene)(e => e.selectedMap)
          , J = (0,
        u.useMenuScene)(e => e.contentVersion)
          , W = (0,
        u.useMenuScene)(e => e.mapLoading)
          , ee = (0,
        u.useMenuScene)(e => e.mapError)
          , ea = (0,
        m.useLobbySocial)()
          , ei = (0,
        v.useMatchmaking)(e => e.online)
          , el = (0,
        v.useMatchmaking)(e => (0,
        v.queueMode)(e))
          , eo = (0,
        v.useMatchmaking)(e => (0,
        v.queueBusy)(e))
          , ed = (0,
        y.useMatchNotice)()
          , ec = (0,
        v.useMatchmaking)(e => !!e.search && !e.launch)
          , em = (0,
        j.useSelectedMode)(e => e.mode)
          , ep = (0,
        z.useSitOut)()
          , ef = (0,
        p.mapById)(H)
          , eb = ea.squad?.mapId ?? H
          , eg = ea.squad?.mapName ?? ef.name
          , ex = !W && !ee && (!ea.squad || (0,
        z.squadMapReady)(ea.squad, {
            selectedMap: H,
            mapLoading: W,
            mapError: ee
        }))
          , ev = !!w && "ready" !== ea.status && !("error" === ea.status && !ea.squad)
          , ey = ea.busy || ea.presenceSyncing || ev || !ex
          , eS = (0,
        t.lobbyMembers)(ea.squad?.members ?? [{
            id: w ?? "local",
            username: I ?? "Pilot",
            xp: $,
            ready: !0,
            drone: L,
            online: !0,
            status: "lobby",
            skin: "factory"
        }], w ?? "local")
          , ek = !ea.squad
          , eN = ek || ea.squad?.leaderId === w
          , eC = ea.squad?.members.find(e => e.id === ea.squad?.leaderId)?.username ?? "Your leader"
          , e_ = eN ? eo ? (0,
        v.queueLockLine)(v.useMatchmaking.getState()) ?? void 0 : void 0 : "Only the squad leader can change the map"
          , eI = {
            drone: L,
            choices: (0,
            h.droneChoices)(ea.squad, $, M),
            busy: ea.busy,
            leader: eN ? void 0 : eC,
            spent: !eN && G,
            away: !eN && Y,
            onRotate: eN && !eo ? e => void (0,
            h.rotateDrone)(e) : void 0
        };
        (0,
        o.useSimStore)(e => e.lessonAuthoringEpoch);
        let ew = (0,
        k.matchRaces)(L, (0,
        S.listTimeAttacks)()).length
          , e$ = j.PLAY_MODES.map(e => ({
            mode: e,
            availability: (0,
            j.modeAvailability)(e, $, "race" === e || ei),
            detail: "free" === e ? eg : "race" === e ? K(L, ew) : "4v4"
        }));
        (0,
        s.useEffect)( () => {
            null === j.useSelectedMode.getState().mode && j.useSelectedMode.setState({
                mode: (0,
                j.readLastPlayMode)()
            })
        }
        , []);
        let eM = em ?? "free"
          , eL = el ?? (e$.find(e => e.mode === eM)?.availability.open ? eM : "free")
          , eq = (eN ? null : el) ?? ea.squad?.mode ?? "free";
        async function eP() {
            await ea.act("join_flight") && m.useLobbySocial.getState().retryLaunch()
        }
        function eE() {
            if (!ey) {
                if ((0,
                j.writeLastPlayMode)("free"),
                ea.squad)
                    return void ea.act("launch", eb);
                (0,
                N.requestHomeExit)( () => {
                    let e = o.useSimStore.getState()
                      , a = u.useMenuScene.getState();
                    !(0,
                    c.isMenuReplayBackdrop)(e.phase) || (e.isAnonymous ? null : e.playerAccountId) !== w || m.useLobbySocial.getState().squad || a.selectedMap !== H || a.contentVersion !== J || a.mapLoading || a.mapError || (H.startsWith("user:") ? (o.useSimStore.getState().playPersonalMap(H),
                    o.useSimStore.setState({
                        editorLibraryOpen: !1
                    })) : o.useSimStore.getState().startFlight(H))
                }
                )
            }
        }
        let eR = ev ? "Connecting…" : W ? "Loading map…" : ea.busy || ea.presenceSyncing ? Q : null
          , eO = eN ? void 0 : {
            leader: eC,
            sittingOut: (0,
            z.sittingOutOf)(ep, ea.squad),
            busy: ea.busy,
            onSitOut: e => {
                ea.squad && ep.set(ea.squad.id, e)
            }
        }
          , eA = eo ? (0,
        a.jsx)(et, {
            member: eO,
            block: !0
        }) : ea.squad?.flightActive ? (0,
        a.jsx)(en, {
            kind: "play",
            label: "Join flight",
            reason: ea.busy ? "Joining…" : null,
            disabled: ey,
            onPlay: () => void eP()
        }) : eO ? (0,
        a.jsx)(en, {
            kind: "member",
            detail: "free" === eq ? "You'll join the flight" : "race" === eq ? "You'll join the race" : "You'll join the match",
            ...eO
        }) : (0,
        a.jsx)(en, {
            kind: "play",
            label: "Play",
            onPlay: function() {
                if (!(0,
                v.queueBusy)(v.useMatchmaking.getState())) {
                    if ("free" === eL)
                        return eE();
                    if ("race" === eL) {
                        let e = F.useRacePick.getState();
                        if ("time-attack" === e.mode) {
                            let a = (0,
                            F.racePickCourse)(e, (0,
                            S.listTimeAttacks)().filter(e => e.gates.length >= 2));
                            if (!a || E)
                                return;
                            let t = new AbortController;
                            B.current = t,
                            R(!0),
                            A(null);
                            let s = () => {
                                t.signal.aborted || A("Race unavailable. Choose another circuit.")
                            }
                            ;
                            (0,
                            eh.startSolo)({
                                accountId: o.useSimStore.getState().playerAccountId,
                                timeAttackId: a.id,
                                courseRevision: a.competitiveRevision ?? 1,
                                droneId: L
                            }, P.solo, t.signal, s).then(e => {
                                e || s()
                            }
                            ).catch(s).finally( () => {
                                t.signal.aborted || R(!1)
                            }
                            );
                            return
                        }
                        v.useMatchmaking.getState().requestMatch("race") && (0,
                        j.writeLastPlayMode)("race");
                        return
                    }
                    v.useMatchmaking.getState().requestMatch(eL) && (0,
                    j.writeLastPlayMode)(eL)
                }
            },
            ..."race" === eL && "time-attack" === q.mode ? {
                reason: E ? "Starting" : (0,
                S.listTimeAttacks)().some(e => e.gates.length >= 2) ? null : "No circuits available",
                disabled: E
            } : "free" === eL ? {
                reason: eR,
                disabled: ey
            } : X({
                race: "race" === eL,
                races: ew,
                online: ei,
                busy: ea.busy
            })
        });
        return (0,
        a.jsxs)("section", {
            className: "fd-flight-lobby fdk-screen",
            "aria-label": "Squad lobby",
            children: [(0,
            a.jsx)(ej, {
                members: eS,
                account: w,
                solo: ek,
                leaderId: ea.squad?.leaderId,
                pick: eI,
                onGear: e
            }), (0,
            a.jsx)(er, {
                onLessons: r,
                onReplays: i,
                onCommunity: f,
                onEditor: b
            }), (0,
            a.jsx)(eu, {
                onChallenges: x,
                onGear: e
            }), (0,
            a.jsxs)("div", {
                className: "fd-lobby-play",
                children: [(0,
                a.jsx)(_.MapPlate, {
                    name: eg,
                    onOpen: function() {
                        let e = o.useSimStore.getState()
                          , a = m.useLobbySocial.getState().squad;
                        a && a.leaderId !== (e.isAnonymous ? null : e.playerAccountId) || (0,
                        v.queueBusy)(v.useMatchmaking.getState()) || n()
                    },
                    disabledReason: e_,
                    disabledLabel: eN ? ec ? "Searching" : "Match launching" : "Leader picks map"
                }), (0,
                a.jsx)(Z, {
                    cards: e$,
                    selected: eL,
                    queued: el,
                    onFlyFree: ec ? eN ? eE : ea.squad?.flightActive ? () => void eP() : void 0 : void 0,
                    member: !eN,
                    pick: eN ? void 0 : {
                        mode: eq,
                        leader: eC
                    },
                    onSelect: e => j.useSelectedMode.setState({
                        mode: e
                    }),
                    initialOpen: C
                }), eA, O && (0,
                a.jsx)("p", {
                    role: "alert",
                    className: "fd-lobby-error",
                    children: O
                }), (0,
                a.jsx)(es, {
                    notice: ed,
                    online: ei
                }), ee && (0,
                a.jsxs)("p", {
                    role: "alert",
                    className: "fd-lobby-error",
                    children: [ee, (0,
                    a.jsx)("button", {
                        type: "button",
                        onClick: u.useMenuScene.getState().retryMap,
                        children: "Retry map"
                    })]
                }), ea.error && (0,
                a.jsxs)("p", {
                    role: "alert",
                    className: "fd-lobby-error",
                    children: [ea.error, ea.launchError && (0,
                    a.jsx)("button", {
                        type: "button",
                        onClick: ea.retryLaunch,
                        children: "Retry joining flight"
                    })]
                })]
            })]
        })
    }
    , "LobbyFriends", 0, function() {
        let[e,t] = (0,
        s.useState)()
          , n = (0,
        s.useCallback)(e => {
            t(e?.closest(".sim-shell") ?? void 0)
        }
        , [])
          , i = (0,
        m.useLobbySocial)()
          , d = (0,
        o.useSimStore)(e => e.isAnonymous ? null : e.playerAccountId)
          , c = (0,
        u.useMenuScene)(e => e.socialOpen)
          , h = (0,
        u.useMenuScene)(e => e.setSocialOpen)
          , [p,f] = (0,
        s.useState)("")
          , [b,g] = (0,
        s.useState)("")
          , x = i.friends.filter(e => e.online).length
          , j = d ? i.requests.filter(e => "incoming" === e.direction) : []
          , v = d ? i.requests.filter(e => "outgoing" === e.direction) : []
          , y = d ? i.invitations : [];
        async function S() {
            g("");
            let e = await (0,
            m.squadLinkCode)();
            if (!e)
                return;
            let a = new URL("/sim",window.location.origin);
            a.searchParams.set("squad", e);
            try {
                await navigator.clipboard.writeText(a.href),
                g("Invite link copied.")
            } catch {
                g(`Invite link: ${a.href}`)
            }
        }
        return (0,
        a.jsxs)(r.Popover.Root, {
            open: c,
            onOpenChange: h,
            children: [(0,
            a.jsx)(r.Popover.Trigger, {
                asChild: !0,
                children: (0,
                a.jsxs)("button", {
                    ref: n,
                    type: "button",
                    className: "fd-friends-trigger",
                    "aria-label": `Friends and squad: ${x} online, squad ${i.squad?.members.length ?? 1} of 4${j.length ? `, ${j.length} pending friend ${1 === j.length ? "request" : "requests"}` : ""}${y.length ? `, ${y.length} squad invitations` : ""}`,
                    title: "Friends and squad",
                    children: [(0,
                    a.jsxs)("span", {
                        className: "fd-friends-trigger__icon",
                        children: [(0,
                        a.jsx)(l.Icon, {
                            name: "users",
                            size: 18
                        }), (j.length > 0 || y.length > 0) && (0,
                        a.jsx)("i", {
                            className: "fd-friends-trigger__dot",
                            "aria-hidden": !0
                        })]
                    }), (0,
                    a.jsxs)("span", {
                        children: [i.squad?.members.length ?? 1, "/4"]
                    }), x > 0 && (0,
                    a.jsxs)("small", {
                        children: [(0,
                        a.jsx)("i", {
                            "aria-hidden": !0
                        }), x]
                    }), (0,
                    a.jsx)(l.Icon, {
                        name: "chevron-down",
                        size: 13
                    })]
                })
            }), (0,
            a.jsx)(r.Popover.Portal, {
                container: e,
                children: (0,
                a.jsxs)(r.Popover.Content, {
                    className: "fd-friends-panel fdk-screen",
                    align: "end",
                    sideOffset: 10,
                    collisionPadding: 16,
                    onEscapeKeyDown: e => e.stopPropagation(),
                    onKeyDown: e => e.stopPropagation(),
                    children: [(0,
                    a.jsxs)("header", {
                        children: [(0,
                        a.jsx)(l.Icon, {
                            name: "users",
                            size: 24
                        }), (0,
                        a.jsx)("h2", {
                            children: "Friends"
                        }), (0,
                        a.jsxs)("small", {
                            children: [x, " online"]
                        }), (0,
                        a.jsx)(r.Popover.Close, {
                            "aria-label": "Close friends",
                            children: (0,
                            a.jsx)(l.Icon, {
                                name: "close",
                                size: 19
                            })
                        })]
                    }), d ? (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsxs)("div", {
                            className: "fd-social-scroll",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "fd-friends-squad",
                                children: [(0,
                                a.jsx)("strong", {
                                    children: "Squad"
                                }), (0,
                                a.jsx)("span", {
                                    "aria-label": `${i.squad?.members.length ?? 1} of 4 squad slots filled`,
                                    children: Array.from({
                                        length: 4
                                    }, (e, t) => (0,
                                    a.jsx)("i", {
                                        "data-filled": t < (i.squad?.members.length ?? 1),
                                        "aria-hidden": !0
                                    }, t))
                                }), (0,
                                a.jsxs)("b", {
                                    children: [i.squad?.members.length ?? 1, "/4"]
                                })]
                            }), (0,
                            a.jsx)(ef, {
                                account: d,
                                container: e
                            }), y.length > 0 && (0,
                            a.jsxs)("section", {
                                "aria-label": "Squad invitations",
                                children: [(0,
                                a.jsx)("h3", {
                                    className: "fd-social-heading",
                                    children: "Invitations"
                                }), y.map(e => (0,
                                a.jsxs)("div", {
                                    className: "fd-friend-row",
                                    children: [(0,
                                    a.jsxs)("span", {
                                        children: [(0,
                                        a.jsx)("strong", {
                                            children: e.username
                                        }), (0,
                                        a.jsx)("small", {
                                            children: "Squad invite"
                                        })]
                                    }), (0,
                                    a.jsx)("button", {
                                        type: "button",
                                        disabled: i.busy,
                                        onClick: () => void i.act("join", e.inviteCode),
                                        children: "Join"
                                    }), (0,
                                    a.jsx)("button", {
                                        type: "button",
                                        disabled: i.busy,
                                        onClick: () => void i.act("decline", e.id),
                                        "aria-label": `Decline invitation from ${e.username}`,
                                        children: (0,
                                        a.jsx)(l.Icon, {
                                            name: "close",
                                            size: 17
                                        })
                                    })]
                                }, e.id))]
                            }), j.length > 0 && (0,
                            a.jsxs)("section", {
                                "aria-label": "Friend requests",
                                children: [(0,
                                a.jsxs)("h3", {
                                    className: "fd-social-heading",
                                    children: ["Requests ", (0,
                                    a.jsx)("span", {
                                        children: j.length
                                    })]
                                }), j.map(e => (0,
                                a.jsxs)("div", {
                                    className: "fd-friend-row",
                                    children: [(0,
                                    a.jsx)("span", {
                                        children: (0,
                                        a.jsx)("strong", {
                                            children: e.username
                                        })
                                    }), (0,
                                    a.jsx)("button", {
                                        type: "button",
                                        disabled: i.busy,
                                        onClick: () => void i.act("accept", e.id),
                                        "aria-label": `Accept ${e.username}`,
                                        title: "Accept",
                                        children: (0,
                                        a.jsx)(l.Icon, {
                                            name: "check",
                                            size: 18
                                        })
                                    }), (0,
                                    a.jsx)("button", {
                                        type: "button",
                                        disabled: i.busy,
                                        onClick: () => void i.act("reject", e.id),
                                        "aria-label": `Decline ${e.username}`,
                                        title: "Decline",
                                        children: (0,
                                        a.jsx)(l.Icon, {
                                            name: "close",
                                            size: 17
                                        })
                                    })]
                                }, e.id))]
                            }), (0,
                            a.jsx)("h3", {
                                className: "fd-social-heading",
                                children: "Friends"
                            }), (0,
                            a.jsxs)("form", {
                                onSubmit: async e => {
                                    e.preventDefault(),
                                    await i.act("request", p.trim()) && (f(""),
                                    g("Friend request sent."))
                                }
                                ,
                                children: [(0,
                                a.jsx)("label", {
                                    className: "sr-only",
                                    htmlFor: "fd-add-friend",
                                    children: "Pilot username"
                                }), (0,
                                a.jsx)("input", {
                                    id: "fd-add-friend",
                                    placeholder: "Add by username",
                                    maxLength: 32,
                                    value: p,
                                    onChange: e => f(e.target.value)
                                }), (0,
                                a.jsx)("button", {
                                    type: "submit",
                                    disabled: !p.trim() || i.busy,
                                    "aria-label": "Send friend request",
                                    children: (0,
                                    a.jsx)(l.Icon, {
                                        name: "plus",
                                        size: 20
                                    })
                                })]
                            }), (0,
                            a.jsx)(eb, {}), v.length > 0 && (0,
                            a.jsxs)("details", {
                                className: "fd-social-sent",
                                children: [(0,
                                a.jsxs)("summary", {
                                    children: ["Sent requests (", v.length, ")"]
                                }), v.map(e => (0,
                                a.jsxs)("div", {
                                    className: "fd-friend-row",
                                    children: [(0,
                                    a.jsxs)("span", {
                                        children: [(0,
                                        a.jsx)("strong", {
                                            children: e.username
                                        }), (0,
                                        a.jsx)("small", {
                                            children: "Pending"
                                        })]
                                    }), (0,
                                    a.jsx)("button", {
                                        type: "button",
                                        disabled: i.busy,
                                        onClick: () => void i.act("reject", e.id),
                                        "aria-label": `Cancel request to ${e.username}`,
                                        children: (0,
                                        a.jsx)(l.Icon, {
                                            name: "close",
                                            size: 17
                                        })
                                    })]
                                }, e.id))]
                            })]
                        }), (0,
                        a.jsxs)("footer", {
                            className: "fd-social-footer",
                            children: [(0,
                            a.jsxs)("button", {
                                type: "button",
                                className: "fd-invite-link",
                                disabled: i.busy || (i.squad?.members.length ?? 1) >= 4,
                                onClick: () => void S(),
                                children: [(0,
                                a.jsx)(l.Icon, {
                                    name: "copy",
                                    size: 15
                                }), "Copy invite link"]
                            }), i.squad && (0,
                            a.jsxs)("button", {
                                type: "button",
                                className: "fd-leave-squad",
                                disabled: i.busy,
                                onClick: () => void i.act("leave"),
                                children: [(0,
                                a.jsx)(l.Icon, {
                                    name: "log-out",
                                    size: 15
                                }), "Leave squad"]
                            })]
                        })]
                    }) : (0,
                    a.jsx)("p", {
                        children: "Sign in to add friends and fly together."
                    }), i.error && (0,
                    a.jsx)("p", {
                        role: "alert",
                        children: i.error
                    }), b && (0,
                    a.jsx)("p", {
                        role: "status",
                        children: b
                    })]
                })
            })]
        })
    }
    , "inspectMember", 0, ex], 854514)
}
, 509415, e => {
    "use strict";
    var a = e.i(843476)
      , t = e.i(613105)
      , s = e.i(809102)
      , n = e.i(33156);
    e.i(573798);
    var r = e.i(244144);
    function i({reward: e}) {
        let t = "dummy-launch" === e.booster ? "rocket" : "zap";
        return (0,
        a.jsxs)("span", {
            className: "fd-booster-reward",
            children: [e.credits > 0 && (0,
            a.jsxs)("span", {
                className: "fd-record-reward",
                "aria-label": `${e.credits} Credits`,
                children: [(0,
                a.jsx)("span", {
                    className: "fd-record-coin",
                    "aria-hidden": "true",
                    children: "C"
                }), (0,
                a.jsx)("span", {
                    className: "fd-record-amount",
                    children: e.credits
                })]
            }), (e.parts ?? 0) > 0 && (0,
            a.jsxs)("span", {
                className: "fd-record-reward fd-record-reward--parts",
                "aria-label": `${e.parts} Parts`,
                children: [(0,
                a.jsx)(n.PartsGlyph, {
                    className: "fd-record-parts"
                }), (0,
                a.jsx)("span", {
                    className: "fd-record-amount",
                    children: e.parts.toLocaleString("en-US")
                })]
            }), e.booster && (0,
            a.jsxs)("span", {
                className: `fd-booster-reward-item fd-booster-reward-item--${e.booster}`,
                title: `${s.BOOSTERS[e.booster].label} \xb7 15 minutes each`,
                children: [(0,
                a.jsx)(r.Icon, {
                    name: t,
                    size: 16
                }), (0,
                a.jsxs)("span", {
                    children: [e.quantity, " × ", "dummy-launch" === e.booster ? "Dummy boost" : "Double XP"]
                })]
            })]
        })
    }
    e.i(671112);
    var l = e.i(271645)
      , o = e.i(920755)
      , d = e.i(521201)
      , c = e.i(451598)
      , u = e.i(894969)
      , m = e.i(498475)
      , h = e.i(883620)
      , p = e.i(624834)
      , f = e.i(568204)
      , b = e.i(516560)
      , g = e.i(509381);
    let x = [...new Set(d.ACHIEVEMENTS.map(e => e.collection))]
      , j = {
        "Flight School": "takeoff",
        Racing: "flag",
        Freestyle: "zap",
        "Flight Log": "route",
        Versatility: "sparkles",
        "Pilot Record": "trophy"
    }
      , v = {
        L15: "Complete all seven First Flight practices.",
        L16: "Complete all seven Banking practices.",
        P01: "Complete 10 lifetime achievements outside Pilot Record.",
        P02: "Complete 25 lifetime achievements outside Pilot Record.",
        P03: "Complete 40 lifetime achievements outside Pilot Record.",
        P04: "Complete all 44 lifetime achievements outside Pilot Record."
    }
      , y = ["school", "racing", "freestyle", "distance"]
      , S = {
        school: "First Flight / Banking runs",
        racing: "Official races finished",
        freestyle: "1,000-point banks",
        distance: "Distance (m)"
    }
      , k = e => e.toLocaleString(void 0, {
        maximumFractionDigits: 0
    })
      , N = e => e.toLowerCase().replaceAll(" ", "-")
      , C = [{
        value: "challenges",
        label: "Challenges"
    }, {
        value: "achievements",
        label: "Achievements"
    }];
    e.s(["PilotRecord", 0, function({onBack: e, onShop: n}) {
        let {record: _, error: I, refresh: w} = (0,
        c.useCreditRecord)()
          , $ = (0,
        u.useInventory)()
          , M = (0,
        l.useRef)(null)
          , [L,q] = (0,
        l.useState)("challenges")
          , [P,E] = (0,
        l.useState)("Flight School")
          , [R,O] = (0,
        l.useState)("")
          , [A,B] = (0,
        l.useState)(null);
        (0,
        l.useEffect)( () => {
            w();
            let e = window.setInterval( () => void w(), 6e4);
            return () => window.clearInterval(e)
        }
        , [w]),
        (0,
        l.useEffect)( () => {
            if (!_?.pinned_item_id)
                return;
            let e = new AbortController;
            return fetch("/api/shop", {
                signal: (0,
                t.withDeadline)(e.signal, 1e4)
            }).then(e => e.json()).then(e => B((e.items ?? []).find(e => e.id === _.pinned_item_id) ?? null)).catch( () => {}
            ),
            () => e.abort()
        }
        , [_?.pinned_item_id]);
        let T = new Set(_?.completed ?? [])
          , z = d.ACHIEVEMENTS.filter(e => T.has(e.id)).length
          , D = d.ACHIEVEMENTS.filter(e => e.collection === P)
          , F = D.find(e => e.id === R) ?? D.find(e => !T.has(e.id)) ?? D[0]
          , U = T.has(F.id)
          , G = e => T.has(e.id) ? e.target : Math.max(0, Math.min(e.target, _?.stats[e.metric] ?? 0))
          , Y = j[P] ?? "award"
          , V = _?.challenge
          , H = $.balance ?? _?.balance
          , J = $.parts ?? _?.parts;
        return (0,
        a.jsxs)("section", {
            className: "fd-record fdk-screen",
            "aria-label": "Challenges",
            children: [e && (0,
            a.jsxs)(g.TextLink, {
                className: "fd-record-back",
                onClick: e,
                children: [(0,
                a.jsx)(r.Icon, {
                    name: "arrow-left",
                    size: 24
                }), " Back to Play"]
            }), (0,
            a.jsx)("header", {
                className: "fd-record-hero",
                children: (0,
                a.jsxs)("div", {
                    className: "fd-record-hero-copy",
                    children: [(0,
                    a.jsxs)("h1", {
                        children: ["Challenges", (0,
                        a.jsx)("span", {
                            children: "."
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "fd-record-hero-actions",
                        children: [n && (0,
                        a.jsx)(m.Button, {
                            tone: "primary",
                            trailingIcon: (0,
                            a.jsx)(r.Icon, {
                                name: "arrow-right",
                                size: 24
                            }),
                            onClick: n,
                            children: "Visit the shop"
                        }), _ && (0,
                        a.jsx)(f.ProgressBar, {
                            className: "fd-record-total",
                            size: "lg",
                            max: d.ACHIEVEMENTS.length,
                            value: z,
                            valueText: `${z} / ${d.ACHIEVEMENTS.length}`,
                            label: `${z} of ${d.ACHIEVEMENTS.length} lifetime achievements completed`
                        })]
                    })]
                })
            }), (0,
            a.jsx)(b.Tabs, {
                className: "fd-record-pages",
                label: "Progression pages",
                idBase: "record",
                items: C,
                value: L,
                onChange: q
            }), _ && I && (0,
            a.jsx)("p", {
                className: "fd-record-status",
                role: "status",
                children: I
            }), !_ && (I ? (0,
            a.jsx)("p", {
                className: "fd-record-status",
                role: "status",
                children: "Your Challenges are temporarily unavailable. They’ll appear when the connection returns."
            }) : (0,
            a.jsx)(p.LoadingState, {
                className: "fd-record-loading",
                title: "Loading your record…"
            })), _ && (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)("div", {
                    id: "record-panel-challenges",
                    role: "tabpanel",
                    "aria-labelledby": "record-tab-challenges",
                    hidden: "challenges" !== L,
                    children: [!_.challenges_unlocked && (0,
                    a.jsxs)("aside", {
                        className: "fd-record-unlock",
                        children: [(0,
                        a.jsx)(r.Icon, {
                            name: "lock",
                            size: 24
                        }), (0,
                        a.jsxs)("p", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Unlock Challenges."
                            }), " Finish all seven First Flight practices to unlock Challenges. Parts still to earn from First Flight:"]
                        }), (0,
                        a.jsx)(i, {
                            reward: (0,
                            d.firstFlightReward)(_.parts_ratio, _.completed)
                        })]
                    }), _.challenges_unlocked && V && (0,
                    a.jsxs)("section", {
                        className: "fd-record-challenge",
                        "aria-labelledby": "fd-record-challenge-title",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "fd-record-section-heading",
                            children: [(0,
                            a.jsx)("h2", {
                                id: "fd-record-challenge-title",
                                children: "Challenges"
                            }), (0,
                            a.jsx)("p", {
                                children: "Complete any one route per tier. Unfinished progress carries over."
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "fd-record-tiers",
                            children: d.CHALLENGE_TIERS.map(e => {
                                let t = V.paid.includes(e.id);
                                return (0,
                                a.jsxs)("article", {
                                    className: `fd-record-tier fd-record-tier--${e.id.toLowerCase()}${t ? " is-complete" : ""}`,
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "fd-record-tier-heading",
                                        children: [(0,
                                        a.jsx)("span", {
                                            className: "fd-record-tier-medal",
                                            "aria-hidden": "true",
                                            children: t ? (0,
                                            a.jsx)(r.Icon, {
                                                name: "check",
                                                size: 24
                                            }) : (0,
                                            a.jsx)(r.Icon, {
                                                name: "medal",
                                                size: 24
                                            })
                                        }), (0,
                                        a.jsx)("h3", {
                                            children: e.name
                                        }), (0,
                                        a.jsx)(i, {
                                            reward: (0,
                                            d.challengeReward)(e, V, _?.parts_ratio)
                                        })]
                                    }), t ? (0,
                                    a.jsxs)("p", {
                                        className: "fd-record-tier-done",
                                        children: [(0,
                                        a.jsx)(r.Icon, {
                                            name: "medal",
                                            size: 24
                                        }), " Completed."]
                                    }) : (0,
                                    a.jsx)("ul", {
                                        children: y.map(t => {
                                            let s = Math.min(V.counters[t] ?? 0, e[t]);
                                            return (0,
                                            a.jsxs)("li", {
                                                children: [(0,
                                                a.jsx)("span", {
                                                    children: S[t]
                                                }), (0,
                                                a.jsx)(f.ProgressBar, {
                                                    label: `${e.name}: ${t} progress`,
                                                    max: e[t],
                                                    value: s,
                                                    valueText: `${k(Math.floor(s))} / ${k(e[t])}`
                                                })]
                                            }, t)
                                        }
                                        )
                                    })]
                                }, e.id)
                            }
                            )
                        }), V.next_available_at && (0,
                        a.jsxs)("p", {
                            className: "fd-record-reset",
                            children: ["All done! New challenges arrive", " ", new Date(V.next_available_at).toLocaleString(), "."]
                        })]
                    })]
                }), (0,
                a.jsxs)("section", {
                    className: "fd-record-collection",
                    id: "record-panel-achievements",
                    role: "tabpanel",
                    "aria-labelledby": "record-tab-achievements",
                    hidden: "achievements" !== L,
                    children: [(0,
                    a.jsx)("div", {
                        className: "fd-record-section-heading",
                        children: (0,
                        a.jsx)("h2", {
                            id: "fd-record-collection-title",
                            children: "Achievements"
                        })
                    }), (0,
                    a.jsx)(b.Tabs, {
                        className: "fd-record-collections",
                        label: "Achievement collections",
                        idBase: "record-collection",
                        value: N(P),
                        onChange: e => {
                            E(x.find(a => N(a) === e) ?? P),
                            O("")
                        }
                        ,
                        items: x.map(e => {
                            let a = d.ACHIEVEMENTS.filter(a => a.collection === e);
                            return {
                                value: N(e),
                                label: e,
                                count: `${a.filter(e => T.has(e.id)).length}/${a.length}`
                            }
                        }
                        )
                    }), (0,
                    a.jsxs)("div", {
                        className: "fd-record-browser",
                        role: "tabpanel",
                        id: (0,
                        b.panelId)("record-collection", N(P)),
                        "aria-labelledby": (0,
                        b.tabId)("record-collection", N(P)),
                        children: [(0,
                        a.jsxs)("aside", {
                            ref: M,
                            className: `fd-record-detail fdk-on-ink${U ? " is-complete" : ""}`,
                            "aria-label": "Selected achievement",
                            "aria-live": "polite",
                            "aria-atomic": "true",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "fd-record-detail-heading",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "fd-record-detail-emblem",
                                    "aria-hidden": "true",
                                    children: [(0,
                                    a.jsx)(r.Icon, {
                                        name: Y,
                                        size: 24
                                    }), (0,
                                    a.jsx)("span", {
                                        children: (0,
                                        a.jsx)(r.Icon, {
                                            name: "check",
                                            size: 24
                                        })
                                    })]
                                }), (0,
                                a.jsx)("h3", {
                                    children: F.name
                                })]
                            }), (0,
                            a.jsx)("p", {
                                children: v[F.id] ?? F.description
                            }), (0,
                            a.jsxs)("div", {
                                className: "fd-record-detail-progress",
                                children: [(0,
                                a.jsx)("span", {
                                    children: U ? "Completed" : "Progress"
                                }), (0,
                                a.jsx)(f.ProgressBar, {
                                    size: "lg",
                                    max: F.target,
                                    value: G(F),
                                    valueText: `${k(G(F))} / ${k(F.target)}`,
                                    label: `${F.name} progress`
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "fd-record-detail-reward",
                                children: [(0,
                                a.jsx)(i, {
                                    reward: (0,
                                    d.achievementReward)(F, _)
                                }), (0,
                                a.jsx)("span", {
                                    children: U && "Reward earned"
                                })]
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "fd-record-achievements",
                            "aria-label": `${P} achievements`,
                            children: D.map(e => {
                                let t = T.has(e.id);
                                return (0,
                                a.jsx)(g.Tile, {
                                    className: "fd-record-achievement",
                                    selected: F.id === e.id,
                                    done: t,
                                    label: `${e.name}, ${t ? "completed, " : `${k(G(e))} of ${k(e.target)}, `}${(0,
                                    s.rewardLabel)((0,
                                    d.achievementReward)(e, _))}`,
                                    onSelect: () => {
                                        O(e.id),
                                        (M.current?.closest(".fd-record")?.clientWidth ?? 0) <= 580 && M.current?.scrollIntoView({
                                            block: "nearest"
                                        })
                                    }
                                    ,
                                    corner: (0,
                                    a.jsx)(i, {
                                        reward: (0,
                                        d.achievementReward)(e, _)
                                    }),
                                    art: (0,
                                    a.jsxs)("span", {
                                        className: "fd-record-badge",
                                        children: [(0,
                                        a.jsx)(r.Icon, {
                                            name: Y,
                                            size: 24
                                        }), t && (0,
                                        a.jsx)("span", {
                                            children: (0,
                                            a.jsx)(r.Icon, {
                                                name: "check",
                                                size: 24
                                            })
                                        })]
                                    }),
                                    title: e.name,
                                    progress: {
                                        value: G(e),
                                        max: e.target,
                                        valueText: `${k(G(e))} / ${k(e.target)}`
                                    }
                                }, e.id)
                            }
                            )
                        })]
                    })]
                }), _.pinned_item_id && (0,
                a.jsxs)("aside", {
                    className: "fd-record-goal",
                    children: [(0,
                    a.jsx)(r.Icon, {
                        name: "trophy",
                        size: 24
                    }), (0,
                    a.jsxs)("div", {
                        children: [(0,
                        a.jsx)("strong", {
                            children: A?.id === _.pinned_item_id ? A.name : "Pinned cosmetic"
                        }), (0,
                        a.jsx)("p", {
                            children: A?.id === _.pinned_item_id ? $.items.some(e => e.id === A.id) ? "Owned. Ready in Gear." : function(e, a) {
                                if ("pack" === e.access_type)
                                    return "Available through its pack.";
                                if ("included" === e.access_type)
                                    return "Included in your collection.";
                                let t = (e.parts_price ?? 0) > 0 ? "Parts" : "Credits"
                                  , s = "Parts" === t ? a.parts : a.credits;
                                if (void 0 === s)
                                    return `Loading your ${t} balance…`;
                                let n = Math.max(0, ("Parts" === t ? e.parts_price : e.price) - s);
                                return n > 0 ? `${n.toLocaleString("en-US")} ${t} to go.${"Credits" === t ? " Credits only." : ""}` : `${t} price covered. View the item in the shop.`
                            }(A, {
                                credits: H,
                                parts: J
                            }) : "This item is outside the active selection. It may return; no return date is guaranteed."
                        })]
                    }), n && (0,
                    a.jsx)(m.Button, {
                        size: "sm",
                        trailingIcon: (0,
                        a.jsx)(r.Icon, {
                            name: "arrow-right",
                            size: 24
                        }),
                        onClick: n,
                        children: "View shop"
                    })]
                })]
            }), $.packs.filter(e => e.badge_label).map(e => (0,
            a.jsx)(h.Checkbox, {
                className: "fd-record-pack-badge",
                checked: e.badge_visible,
                onChange: async a => {
                    let {error: t} = await (0,
                    o.createClient)().rpc("set_pack_badge", {
                        p_checkout: e.checkout_id,
                        p_visible: a
                    });
                    t || $.refresh()
                }
                ,
                label: (0,
                a.jsxs)(a.Fragment, {
                    children: ["Show ", e.badge_label, " badge"]
                })
            }, e.checkout_id)), $.refund_debt > 0 && (0,
            a.jsx)("p", {
                className: "fd-record-status",
                role: "alert",
                children: "Spending is paused while support resolves a refunded Credit purchase. Your balance remains available in your account."
            })]
        })
    }
    ], 509415)
}
, 55716, e => {
    e.v({
        grid: "store-card-module__7skIda__grid"
    })
}
, 4853, e => {
    "use strict";
    var a = e.i(843476);
    e.i(573798);
    var t = e.i(568204)
      , s = e.i(354059)
      , n = e.i(55716);
    e.s(["StoreCard", 0, function({name: e, label: n, art: r, artAspectRatio: i, price: l, badge: o, rarity: d, ...c}) {
        return (0,
        a.jsx)(s.RarityCard, {
            "aria-haspopup": "dialog",
            ...c,
            name: e,
            meta: n,
            rarity: d,
            art: r,
            artRatio: i ?? 1.25,
            flag: o ? (0,
            a.jsx)(t.Badge, {
                tone: "acid",
                children: o
            }) : void 0,
            footer: l
        })
    }
    , "StoreGrid", 0, function({children: e, columns: t=4, showcase: s=!1}) {
        return (0,
        a.jsx)("div", {
            className: n.default.grid,
            "data-columns": t,
            "data-showcase": s || void 0,
            children: e
        })
    }
    ])
}
, 619455, e => {
    "use strict";
    let a = (0,
    e.i(768834).create)(e => ({
        context: null,
        destination: null,
        returnToShop: a => e({
            context: null,
            destination: a
        }),
        open: (a={}) => e({
            context: a
        }),
        close: () => e({
            context: null,
            destination: null
        })
    }));
    e.s(["useCreditShop", 0, a])
}
, 715793, e => {
    "use strict";
    var a = e.i(50270)
      , t = e.i(768834)
      , s = e.i(920755)
      , n = e.i(613105)
      , r = e.i(838740);
    let i = a.z.object({
        mapId: a.z.string().uuid(),
        version: a.z.number().int().positive(),
        name: a.z.string(),
        creator: a.z.string(),
        creatorId: a.z.string().uuid(),
        featuredAt: a.z.string(),
        current: a.z.boolean().default(!0)
    })
      , l = a.z.object({
        featured: i.nullable(),
        flown: a.z.boolean()
    })
      , o = (0,
    t.create)( (e, a) => ({
        status: "idle",
        featured: null,
        flown: !1,
        load: async () => {
            if ("loading" !== a().status) {
                e({
                    status: "loading"
                });
                try {
                    let {data: a, error: t} = await (0,
                    s.createClient)().rpc("get_featured_community_map").abortSignal((0,
                    n.withDeadline)(null, 8e3));
                    if (t)
                        throw t;
                    let r = l.parse(a);
                    e({
                        status: "ready",
                        featured: r.featured,
                        flown: r.flown || !!r.featured && function(e) {
                            try {
                                return window.localStorage.getItem(c) === d(e)
                            } catch {
                                return !1
                            }
                        }(r.featured)
                    })
                } catch {
                    e({
                        status: "error",
                        featured: null,
                        flown: !1
                    })
                }
            }
        }
    }))
      , d = e => `${e.mapId}:${e.version}:${e.featuredAt}`
      , c = "fd-featured-flown";
    async function u() {
        let {data: e, error: a} = await (0,
        s.createClient)().rpc("get_featured_community_map_document").abortSignal((0,
        n.withDeadline)(null, 15e3));
        if (a)
            throw Error(a.message);
        return e ? (0,
        r.parseMap)(e) : null
    }
    async function m(e, a=!1) {
        if (a) {
            let a = {
                mapId: e.id,
                version: 1,
                name: e.name,
                creator: e.creator,
                creatorId: e.ownerId,
                featuredAt: new Date().toISOString(),
                current: !0
            };
            return o.setState({
                status: "ready",
                featured: a,
                flown: !1
            }),
            a
        }
        let {data: t, error: r} = await (0,
        s.createClient)().rpc("admin_feature_community_map", {
            p_map_id: e.id
        }).abortSignal((0,
        n.withDeadline)(null, 1e4));
        if (r)
            throw Error(r.message);
        let l = i.parse(t);
        return o.setState({
            status: "ready",
            featured: l,
            flown: !1
        }),
        l
    }
    e.s(["featureCommunityMap", 0, m, "featuredMapId", 0, function(e) {
        return `user:${e.mapId}`
    }
    , "loadFeaturedSnapshot", 0, u, "markFeaturedFlown", 0, function(e) {
        let a = o.getState().featured;
        a && d(a) === d(e) && o.setState({
            flown: !0
        });
        try {
            window.localStorage.setItem(c, d(e))
        } catch {}
    }
    , "useFeaturedMap", 0, o])
}
, 243402, e => {
    "use strict";
    var a = e.i(920755)
      , t = e.i(58849)
      , s = e.i(404961)
      , n = e.i(998494);
    let r = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    async function i(e) {
        let a = new Map
          , t = []
          , i = [];
        for (let l of new Set(e))
            (0,
            s.hasMap)(l) ? a.set(l, (0,
            s.resolveMap)(l).name) : (0,
            n.isOfficialMapId)(l) ? t.push(l) : (0,
            n.isPersonalMapId)(l) && r.test(l.slice(5)) && i.push(l);
        return await Promise.all([l(t, a), o(i, a)]),
        a
    }
    async function l(e, a) {
        if (e.length) {
            try {
                for (let s of (await (0,
                t.listPublishedOfficialMaps)()))
                    e.includes(s.id) && a.set(s.id, s.name)
            } catch (e) {
                console.warn("[sim] official map names unavailable", e)
            }
            await Promise.all(e.filter(e => !a.has(e)).map(async e => {
                try {
                    a.set(e, (await (0,
                    t.loadOfficialMap)(e)).map.name)
                } catch (t) {
                    t instanceof s.MapUnavailableError && a.set(e, null)
                }
            }
            ))
        }
    }
    async function o(e, t) {
        if (!e.length)
            return;
        let {data: s, error: n} = await (0,
        a.createClient)().from("sim_personal_maps").select("id,name").in("id", e.map(e => e.slice(5)));
        if (n)
            return void console.warn("[sim] personal map names unavailable", n);
        for (let a of e) {
            let e = s?.find(e => `user:${e.id}` === a);
            t.set(a, "string" == typeof e?.name ? e.name : null)
        }
    }
    e.s(["loadMapNames", 0, i])
}
, 188548, e => {
    "use strict";
    var a = e.i(271645)
      , t = e.i(920755);
    let s = null;
    e.s(["markMenuOpen", 0, function(e, a) {
        s = {
            screen: e,
            source: a,
            at: Date.now()
        }
    }
    , "useMenuOpens", 0, function(e) {
        let n = "shop" === e || "gear" === e ? e : null
          , r = (0,
        a.useRef)(null);
        (0,
        a.useEffect)( () => {
            n && r.current !== n && function(e) {
                let a = function(e, a=Date.now()) {
                    let t = s;
                    return s = null,
                    t && t.screen === e && a - t.at <= 1e4 ? t.source : "other"
                }(e);
                try {
                    (0,
                    t.createClient)().rpc("record_menu_open", {
                        p_screen: e,
                        p_source: a
                    }).then( () => {}
                    , () => {}
                    )
                } catch {}
            }(n),
            r.current = n
        }
        , [n])
    }
    ])
}
, 686410, e => {
    "use strict";
    var a = e.i(353198)
      , t = e.i(353937)
      , s = e.i(246176)
      , n = e.i(106258)
      , r = e.i(814022);
    function i(e, t, n) {
        return e ? (0,
        s.squadDroneChoices)(e) : a.DRONE_LADDER.filter(e => (0,
        a.isDroneUnlocked)(e, t, n))
    }
    async function l(e) {
        var a, l;
        let o, d, c = n.useSimStore.getState(), u = s.useLobbySocial.getState().squad, m = c.isAnonymous ? null : c.playerAccountId;
        if (u && u.leaderId !== m)
            return !1;
        let h = (a = i(u, c.xp, c.droneGifts),
        l = (0,
        r.flownDrone)(c),
        o = a.indexOf(l),
        (d = a[o < 0 ? e > 0 ? 0 : a.length - 1 : (o + e + a.length) % a.length]) && d !== l ? d : null);
        if (!h || u && !await s.useLobbySocial.getState().act("drone", h))
            return !1;
        let p = n.useSimStore.getState();
        return p.equipDrone(h, (0,
        t.equippedDroneSkin)(p.settings.drone.skins, h))
    }
    e.s(["droneChoices", 0, i, "lentDrones", 0, function(e, a) {
        return e && a && e.leaderId !== a ? (0,
        s.squadDroneChoices)(e) : []
    }
    , "rotateDrone", 0, l])
}
]);
