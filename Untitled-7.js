(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 234362, e => {
    e.v({
        account: "menu-header-module__0Lnd5q__account",
        addCredits: "menu-header-module__0Lnd5q__addCredits",
        avatar: "menu-header-module__0Lnd5q__avatar",
        badges: "menu-header-module__0Lnd5q__badges",
        brand: "menu-header-module__0Lnd5q__brand",
        corner: "menu-header-module__0Lnd5q__corner",
        currencyText: "menu-header-module__0Lnd5q__currencyText",
        divider: "menu-header-module__0Lnd5q__divider",
        header: "menu-header-module__0Lnd5q__header",
        identity: "menu-header-module__0Lnd5q__identity",
        level: "menu-header-module__0Lnd5q__level",
        meter: "menu-header-module__0Lnd5q__meter",
        name: "menu-header-module__0Lnd5q__name",
        nav: "menu-header-module__0Lnd5q__nav",
        offline: "menu-header-module__0Lnd5q__offline",
        profile: "menu-header-module__0Lnd5q__profile",
        resources: "menu-header-module__0Lnd5q__resources",
        retry: "menu-header-module__0Lnd5q__retry",
        settings: "menu-header-module__0Lnd5q__settings",
        wallet: "menu-header-module__0Lnd5q__wallet",
        xp: "menu-header-module__0Lnd5q__xp"
    })
}
, 468630, 497590, 123573, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(613105)
      , a = e.i(271645)
      , s = e.i(894969)
      , i = e.i(920755)
      , n = e.i(834469)
      , d = e.i(619455)
      , l = e.i(572349)
      , o = e.i(71008);
    e.i(573798);
    var c = e.i(568204)
      , u = e.i(498475)
      , h = e.i(883620)
      , m = e.i(624834)
      , p = e.i(509381)
      , f = e.i(244144)
      , x = e.i(4853)
      , g = e.i(537239)
      , j = e.i(326999)
      , y = e.i(108354)
      , k = e.i(439759)
      , w = e.i(650485);
    function b(e, t) {
        return e?.eligible ? Math.min(Math.floor(t * e.share), e.max) : 0
    }
    function _({item: e, required: d, goalLabel: j, packsOnly: y=!1, featured: k=!1, compactPacks: w=!1, initialConfig: v, heroPicker: S}) {
        let C = (0,
        s.useInventory)()
          , [N,I] = (0,
        a.useState)(v ?? null)
          , [P,L] = (0,
        a.useState)(!v)
          , [$,q] = (0,
        a.useState)("")
          , [T,E] = (0,
        a.useState)(0)
          , [R,U] = (0,
        a.useState)(null)
          , [A,z] = (0,
        a.useState)("")
          , [O,B] = (0,
        a.useState)(!1)
          , [D,M] = (0,
        a.useState)("")
          , [W,Y] = (0,
        a.useState)(!1)
          , F = (0,
        a.useId)()
          , G = "ready" === C.status && null !== C.balance
          , H = e?.price ?? d ?? 0
          , J = Math.max(0, H - (C.balance ?? 0))
          , V = e && C.items.some(t => t.id === e.id)
          , [K,X] = (0,
        a.useState)( () => String(Math.max(200, Math.min(6500, J || 200))))
          , Z = Number(K)
          , [Q,ee] = (0,
        a.useState)(null)
          , et = /^\d+$/.test(K) && Number.isSafeInteger(Z) && Z >= 200 && Z <= 6500
          , er = Math.max(J, 200)
          , ea = function(e, t, r= () => 0) {
            return t <= 0 ? null : e.filter(e => e.credits + r(e.credits) >= t).sort( (e, t) => e.price_cents - t.price_cents || e.credits - t.credits)[0]?.credits ?? null
        }(N?.creditPackages ?? [], J, e => b(Q, e));
        (0,
        a.useEffect)( () => {
            if (v)
                return;
            let e = new AbortController;
            return fetch("/api/shop/checkout", {
                cache: "no-store",
                signal: (0,
                r.withDeadline)(e.signal, 15e3)
            }).then(async t => {
                let r = await t.json();
                if (!t.ok)
                    throw Error(r.error ?? "Couldn’t load the offers.");
                e.signal.aborted || I(r)
            }
            ).catch(t => {
                e.signal.aborted || q(t instanceof Error ? t.message : "Couldn’t load the offers.")
            }
            ).finally( () => {
                e.signal.aborted || L(!1)
            }
            ),
            () => e.abort()
        }
        , [T, v]),
        (0,
        a.useEffect)( () => {
            y || N?.creditPackages?.forEach(e => (0,
            l.trackShopEvent)("offer_view", {
                kind: "credits",
                key: String(e.credits)
            }))
        }
        , [N, y]);
        let es = "ready" === C.status;
        function ei(e) {
            e.custom && (0,
            l.trackShopEvent)("offer_view", {
                kind: "credits",
                key: String(e.credits)
            }),
            U(e),
            B(!1),
            M("")
        }
        async function en() {
            if (R && N?.enabled && O && (N.worldwide || A) && !W) {
                Y(!0),
                M(""),
                (0,
                l.trackShopEvent)("purchase_attempt", {
                    kind: R.kind,
                    key: R.packId ?? R.itemId ?? String(R.credits)
                });
                try {
                    let t = crypto.randomUUID()
                      , r = N.worldwide ? {} : {
                        country: A
                    }
                      , a = JSON.stringify({
                        ...R,
                        ...r
                    });
                    try {
                        let e = JSON.parse(sessionStorage.getItem("fd-cash-checkout") ?? "null");
                        e?.key === a && "string" == typeof e.id && (t = e.id),
                        sessionStorage.setItem("fd-cash-checkout", JSON.stringify({
                            key: a,
                            id: t
                        }))
                    } catch {}
                    let s = await fetch("/api/shop/checkout", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            ...R,
                            ...r,
                            id: t,
                            purchaseAuthorized: O
                        }),
                        signal: AbortSignal.timeout(2e4)
                    })
                      , i = await s.json();
                    if (i.finished)
                        try {
                            sessionStorage.removeItem("fd-cash-checkout")
                        } catch {}
                    if (!s.ok || !i.url)
                        throw Error(i.error ?? "Checkout unavailable.");
                    try {
                        e || j ? sessionStorage.setItem("fd-credit-return", JSON.stringify({
                            order: t,
                            itemId: e?.id,
                            label: e?.name ?? j,
                            boosters: !e
                        })) : sessionStorage.removeItem("fd-credit-return")
                    } catch {}
                    window.location.assign(i.url)
                } catch (e) {
                    M(e instanceof Error && "TimeoutError" !== e.name ? e.message : "Checkout did not answer. Try again; you will not be charged twice."),
                    Y(!1)
                }
            }
        }
        (0,
        a.useEffect)( () => {
            if (y || !es)
                return;
            let e = !0;
            return (async () => {
                try {
                    let {data: t, error: r} = await (0,
                    i.createClient)().rpc("shop_first_bonus_offer");
                    e && !r && t && ee(t)
                } catch {}
            }
            )(),
            () => {
                e = !1
            }
        }
        , [y, es]),
        (0,
        a.useEffect)( () => {
            if (R) {
                let e = document.getElementById(F);
                e?.focus({
                    preventScroll: !0
                }),
                e?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                })
            }
        }
        , [R, F]);
        let ed = R ? (0,
        t.jsxs)("div", {
            id: F,
            className: "fd-cash-confirm",
            role: "region",
            tabIndex: -1,
            "aria-labelledby": `${F}-title`,
            children: [(0,
            t.jsx)("h3", {
                id: `${F}-title`,
                children: "Review purchase"
            }), (0,
            t.jsx)("p", {
                children: "pack" === R.kind ? `${N?.packs?.find(e => e.id === R.packId)?.name}: ${(0,
                n.money)(R.expectedAmount)} USD, including applicable tax.` : "item" === R.kind ? `${e?.name}: ${e?.price} Credits. Use up to ${Math.min(C.balance ?? 0, e?.price ?? 0)} existing Credits and buy ${er > J ? `${er} Credits (the ${J} you need, plus ${er - J} to keep)` : `the remaining ${J}`} for ${(0,
                n.money)(er)} USD, including applicable tax. Payment automatically unlocks this item.` : `${R.credits?.toLocaleString("en-US")} Credits for ${(0,
                n.money)(R.expectedAmount)} USD, including applicable tax.${!R.custom && b(Q, R.credits ?? 0) ? ` Your first purchase adds ${b(Q, R.credits ?? 0).toLocaleString("en-US")} bonus Credits.` : ""} This adds Credits to your wallet; choose your items after checkout.`
            }), !N?.worldwide && (0,
            t.jsxs)("label", {
                className: "fd-cash-country",
                children: ["Billing country ", (0,
                t.jsx)(h.Select, {
                    label: "Billing country",
                    value: A,
                    onChange: z,
                    options: [{
                        value: "",
                        label: "Choose country"
                    }, ...(N?.countries ?? []).map(e => ({
                        value: e,
                        label: new Intl.DisplayNames(["en"],{
                            type: "region"
                        }).of(e) ?? e
                    }))]
                })]
            }), (0,
            t.jsx)(h.Checkbox, {
                checked: O,
                onChange: B,
                label: "I am authorized to make this purchase, with parent or guardian permission when required."
            }), (0,
            t.jsxs)("p", {
                children: ["Review the final total in secure checkout. ", (0,
                t.jsx)("a", {
                    href: N?.terms,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Terms"
                }), " · ", (0,
                t.jsx)("a", {
                    href: N?.refunds,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Refund policy"
                })]
            }), D && (0,
            t.jsx)("p", {
                role: "alert",
                children: D
            }), (0,
            t.jsxs)("div", {
                className: "fd-cash-confirm-actions",
                children: [(0,
                t.jsx)(u.Button, {
                    tone: "primary",
                    disabled: !N?.enabled || !O || !N.worldwide && !A || W,
                    onClick: () => void en(),
                    children: W ? "Opening checkout…" : "Continue to secure checkout"
                }), (0,
                t.jsx)(p.TextLink, {
                    className: "fd-cash-confirm-cancel",
                    disabled: W,
                    onClick: () => U(null),
                    children: "Cancel"
                })]
            })]
        }) : null;
        if (P)
            return (0,
            t.jsx)(m.LoadingState, {
                title: `Loading ${y ? "packs" : "Credits"}…`
            });
        if ($)
            return (0,
            t.jsx)(m.EmptyState, {
                icon: "warning",
                title: "Offers couldn’t load",
                action: (0,
                t.jsx)(u.Button, {
                    size: "sm",
                    onClick: () => {
                        L(!0),
                        q(""),
                        E(e => e + 1)
                    }
                    ,
                    trailingIcon: (0,
                    t.jsx)(f.Icon, {
                        name: "arrow-up-right",
                        size: 24
                    }),
                    children: "Try again"
                }),
                children: (0,
                t.jsx)("span", {
                    role: "alert",
                    children: $
                })
            });
        let el = N?.packs?.filter(e => e.items.every(o.isCurrentItem))
          , eo = k ? x.StoreGrid : "div";
        return y ? el?.length ? (0,
        t.jsx)("section", {
            className: "fd-cash fd-cash--packs",
            children: (0,
            t.jsx)(eo, {
                ...!k ? {
                    className: "fd-pack-banners"
                } : {},
                children: el.map(e => (0,
                t.jsx)("div", {
                    className: (0,
                    g.isFounderPack)(e) ? "fd-pack-banners" : void 0,
                    style: {
                        display: "grid",
                        gridColumn: (0,
                        g.isFounderPack)(e) ? "1 / -1" : void 0
                    },
                    children: (0,
                    t.jsx)(g.PackBanner, {
                        heroPicker: S,
                        pack: e,
                        featured: k,
                        compact: w,
                        owned: C.packs.some(t => t.id === e.id),
                        checkoutEnabled: !!N?.enabled,
                        inventoryReady: G,
                        checkoutReview: R?.kind === "pack" && R.packId === e.id ? ed : null,
                        onClose: () => {
                            U(null),
                            M("")
                        }
                        ,
                        onChoose: () => ei({
                            kind: "pack",
                            packId: e.id,
                            expectedVersion: e.updated_at,
                            expectedAmount: e.price_cents
                        })
                    })
                }, e.id))
            })
        }) : k ? null : (0,
        t.jsx)(m.EmptyState, {
            icon: "package",
            title: "No packs available"
        }) : (0,
        t.jsxs)("div", {
            className: "fd-credit-store fdk-screen",
            children: [(0,
            t.jsxs)("header", {
                className: "fd-credit-heading",
                children: [(0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsxs)("h1", {
                        id: "credit-shop-heading",
                        children: ["Get ", (0,
                        t.jsx)("span", {
                            children: "Credits."
                        })]
                    }), (0,
                    t.jsx)("p", {
                        children: "A little more you. Choose your next look."
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "fd-credit-balance",
                    children: [(0,
                    t.jsx)("span", {
                        children: "Your balance"
                    }), (0,
                    t.jsxs)("strong", {
                        children: [(0,
                        t.jsx)("i", {
                            "aria-hidden": !0,
                            children: "C"
                        }), C.balance?.toLocaleString("en-US") ?? "–"]
                    })]
                })]
            }), (e || j) && (0,
            t.jsxs)("div", {
                className: "fd-credit-goal",
                children: [(0,
                t.jsxs)("span", {
                    children: [(0,
                    t.jsx)("strong", {
                        children: e?.name ?? j
                    }), (0,
                    t.jsx)("small", {
                        children: V ? "Already in your collection." : G ? J ? `${J.toLocaleString("en-US")} more Credits to unlock \xb7 ${H.toLocaleString("en-US")} total` : "You have enough Credits. Head back to unlock it." : "Loading your balance…"
                    })]
                }), (0,
                t.jsx)(f.Icon, {
                    name: "check",
                    size: 22
                })]
            }), !N?.enabled && (0,
            t.jsx)("p", {
                className: "fd-credit-notice",
                role: "status",
                children: "Credit purchases are not open yet."
            }), Q?.eligible && (0,
            t.jsxs)("section", {
                className: "fd-credit-welcome fdk-on-ink",
                "aria-label": "First purchase offer",
                children: [(0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsx)(c.Badge, {
                        tone: "acid",
                        children: "First purchase offer"
                    }), (0,
                    t.jsxs)("h2", {
                        children: [(0,
                        t.jsx)("span", {
                            children: "More"
                        }), " for your first pack."]
                    }), (0,
                    t.jsxs)("p", {
                        children: [Math.round(100 * Q.share), "% extra Credits, up to ", Q.max.toLocaleString("en-US"), " bonus Credits."]
                    })]
                }), (0,
                t.jsxs)("span", {
                    className: "fd-credit-scribble",
                    "aria-hidden": !0,
                    children: ["Make it", (0,
                    t.jsx)("br", {}), "yours. ", (0,
                    t.jsx)(f.Icon, {
                        name: "arrow-up-right",
                        size: 28
                    })]
                })]
            }), (0,
            t.jsx)("div", {
                className: "fd-credit-offers",
                children: N?.creditPackages?.map(e => {
                    let r = 100 * Math.floor(Math.max(0, e.credits - e.price_cents) / 100)
                      , a = J > 0 && ea === e.credits
                      , s = R?.kind === "credits" && !R.custom && R.credits === e.credits
                      , i = e.credits >= 6500 ? 3 : e.credits >= 2400 ? 2 : +(e.credits >= 1100)
                      , d = b(Q, e.credits)
                      , l = e.credits + d;
                    return (0,
                    t.jsxs)("article", {
                        className: `fd-credit-offer fdk-on-ink${s ? " is-selected" : ""}`,
                        children: [(0,
                        t.jsxs)("div", {
                            className: "fd-credit-offer-heading",
                            children: [(0,
                            t.jsx)("h2", {
                                children: e.name
                            }), (0,
                            t.jsx)("span", {
                                "aria-hidden": !0
                            }), s && (0,
                            t.jsx)(f.Icon, {
                                name: "check",
                                size: 17,
                                label: "Selected"
                            })]
                        }), (0,
                        t.jsx)("div", {
                            className: "fd-credit-art",
                            style: {
                                backgroundPositionX: `${100 * i / 3}%`
                            },
                            "aria-hidden": !0
                        }), (0,
                        t.jsxs)("div", {
                            className: "fd-credit-amount",
                            children: [(0,
                            t.jsx)("strong", {
                                children: l.toLocaleString("en-US")
                            }), (0,
                            t.jsxs)("span", {
                                children: ["Credits", d ? " total" : ""]
                            }), d > 0 ? (0,
                            t.jsxs)("p", {
                                className: "fd-credit-breakdown",
                                children: [e.credits.toLocaleString("en-US"), " ", (0,
                                t.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: "+"
                                }), " ", (0,
                                t.jsxs)("b", {
                                    children: [d.toLocaleString("en-US"), " bonus"]
                                })]
                            }) : (0,
                            t.jsx)("p", {
                                className: "fd-credit-value",
                                children: r >= 50 ? (0,
                                t.jsxs)(t.Fragment, {
                                    children: ["Includes ", (0,
                                    t.jsxs)("b", {
                                        children: ["+", r.toLocaleString("en-US"), " extra"]
                                    })]
                                }) : "Your next look starts here."
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "fd-credit-offer-action",
                            children: [a && (0,
                            t.jsxs)("span", {
                                className: "fd-credit-fit",
                                children: [(0,
                                t.jsx)(f.Icon, {
                                    name: "check",
                                    size: 13
                                }), " Covers your balance shortfall"]
                            }), (0,
                            t.jsx)(u.Button, {
                                tone: "primary",
                                block: !0,
                                "aria-label": `Get ${l.toLocaleString("en-US")} Credits${d ? ` including ${d.toLocaleString("en-US")} bonus` : ""} for ${(0,
                                n.money)(e.price_cents)}`,
                                "aria-pressed": s,
                                disabled: !N.enabled || !G || W,
                                onClick: () => ei({
                                    kind: "credits",
                                    credits: e.credits,
                                    expectedAmount: e.price_cents,
                                    expectedVersion: e.updated_at
                                }),
                                trailingIcon: s ? (0,
                                t.jsx)(f.Icon, {
                                    name: "check",
                                    size: 24
                                }) : (0,
                                t.jsx)(f.Icon, {
                                    name: "arrow-right",
                                    size: 24
                                }),
                                children: (0,
                                n.money)(e.price_cents)
                            })]
                        })]
                    }, e.credits)
                }
                )
            }), !N?.creditPackages?.length && (0,
            t.jsx)("p", {
                role: "status",
                children: "No Credit offers are available right now."
            }), (0,
            t.jsxs)("div", {
                className: "fd-credit-pricing",
                children: [(0,
                t.jsx)("p", {
                    children: "USD, including applicable tax. Extra Credits are included in totals."
                }), Q?.eligible && (0,
                t.jsx)("p", {
                    children: "Bonus applies when your first real-money purchase is a standard Credit pack. Any refund of that order removes its whole bonus."
                })]
            }), e && G && !V && J > 0 && (0,
            t.jsxs)("div", {
                className: "fd-credit-exact",
                children: [(0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsxs)("strong", {
                        children: ["Just want ", e.name, "?"]
                    }), (0,
                    t.jsx)("p", {
                        children: er > J ? (0,
                        t.jsxs)(t.Fragment, {
                            children: ["Card payments start at ", 200, " Credits. Buy ", 200, ", unlock it, and keep ", (er - J).toLocaleString("en-US"), " Credits."]
                        }) : (0,
                        t.jsxs)(t.Fragment, {
                            children: ["Buy exactly ", J.toLocaleString("en-US"), " Credits and unlock it with your current balance."]
                        })
                    })]
                }), (0,
                t.jsxs)(u.Button, {
                    tone: "primary",
                    size: "sm",
                    disabled: !N?.enabled || W,
                    onClick: () => ei({
                        kind: "item",
                        itemId: e.id,
                        expectedVersion: e.updated_at,
                        expectedAmount: er
                    }),
                    trailingIcon: (0,
                    t.jsx)(f.Icon, {
                        name: "arrow-right",
                        size: 24
                    }),
                    children: ["Top up & unlock · ", (0,
                    n.money)(er)]
                })]
            }), (0,
            t.jsxs)("form", {
                className: "fd-credit-custom",
                onSubmit: e => {
                    e.preventDefault(),
                    et && ei({
                        kind: "credits",
                        custom: !0,
                        credits: Z,
                        expectedAmount: Z
                    })
                }
                ,
                children: [(0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsx)("strong", {
                        children: "Need a different amount?"
                    }), (0,
                    t.jsxs)("p", {
                        children: [200, "–6,500 Credits · 100 Credits = $1.00", Q?.eligible && (0,
                        t.jsx)("span", {
                            children: "No first-purchase bonus on custom amounts."
                        })]
                    })]
                }), (0,
                t.jsxs)("label", {
                    children: ["Credits", (0,
                    t.jsx)(h.TextInput, {
                        label: "Credits",
                        type: "number",
                        inputMode: "numeric",
                        min: 200,
                        max: "6500",
                        step: "1",
                        value: K,
                        onChange: e => X(e.target.value),
                        required: !0
                    })]
                }), (0,
                t.jsxs)(u.Button, {
                    type: "submit",
                    size: "sm",
                    tone: "ghost",
                    disabled: !N?.enabled || !G || W || !et,
                    trailingIcon: (0,
                    t.jsx)(f.Icon, {
                        name: "arrow-right",
                        size: 24
                    }),
                    children: ["Get Credits · ", et ? (0,
                    n.money)(Z) : "–"]
                })]
            }), ed, (0,
            t.jsxs)("footer", {
                className: "fd-credit-trust",
                children: [(0,
                t.jsxs)("span", {
                    children: [(0,
                    t.jsx)(f.Icon, {
                        name: "shield-check",
                        size: 16
                    }), " Secure checkout with Stripe"]
                }), (0,
                t.jsx)("span", {
                    children: "Credits never expire"
                })]
            })]
        })
    }
    e.s(["PurchaseHistory", 0, function() {
        let {orders: e, otherWithdrawals: r, account: a, returnGoal: s, error: i, setError: l, loading: o, setLoading: x, cancelling: g, setReload: b, setCursor: _, nextCursor: v, review: S, setReview: C, customerName: N, setCustomerName: I, purchaseReference: P, setPurchaseReference: L, requestError: $, sending: q, refresh: T, cancelPending: E, openReview: R, openOtherReview: U, submitWithdrawal: A} = (0,
        w.usePurchaseHistory)();
        function z(e, r) {
            return (0,
            t.jsxs)("div", {
                className: "fd-withdrawal-status",
                role: "status",
                children: [(0,
                t.jsx)("strong", {
                    children: "Withdrawal recorded"
                }), (0,
                t.jsxs)("p", {
                    children: ["Received ", (0,
                    t.jsx)("time", {
                        dateTime: e.requested_at,
                        children: (0,
                        w.dateTime)(e.requested_at)
                    }), ". Reference ", e.id, "."]
                }), (0,
                t.jsx)("p", {
                    children: e.email_pending ? "Your request is saved. The acknowledgment email is pending; this does not change the time we received your withdrawal." : `An acknowledgment was sent to ${e.acknowledgment_email ?? a.email}.`
                }), (0,
                t.jsx)("p", {
                    children: "This records your withdrawal for review. A refund has not been issued automatically."
                }), e.email_pending && (0,
                t.jsx)(u.Button, {
                    size: "sm",
                    tone: "ghost",
                    disabled: q || !a.verified,
                    onClick: () => void A(r, e.customer_name ?? a.name, !0),
                    children: q ? "Sending…" : "Retry acknowledgment email"
                })]
            })
        }
        return (0,
        t.jsxs)("section", {
            className: "fd-purchase-history fdk-screen",
            "aria-labelledby": "purchase-history-heading",
            "aria-busy": o,
            children: [(0,
            t.jsxs)("header", {
                children: [(0,
                t.jsx)(p.SectionHeading, {
                    size: "lg",
                    id: "purchase-history-heading",
                    children: "Your orders"
                }), (0,
                t.jsx)(u.Button, {
                    size: "sm",
                    tone: "ghost",
                    disabled: o || g || q,
                    onClick: T,
                    children: o ? "Refreshing…" : "Refresh"
                })]
            }), (0,
            t.jsxs)("p", {
                children: ["Review your cash purchases and request a refund or withdraw from any purchase, even while the shop is closed. ", (0,
                t.jsx)("a", {
                    href: "/refunds",
                    children: "Refund Policy"
                }), " · ", (0,
                t.jsxs)("a", {
                    href: `mailto:${y.SUPPORT_EMAIL}`,
                    children: ["Contact ", y.COMPANY_NAME]
                })]
            }), (0,
            t.jsxs)("details", {
                className: "fd-withdrawal-other",
                children: [(0,
                t.jsx)("summary", {
                    children: "Other purchases / Credit purchases"
                }), (0,
                t.jsx)("p", {
                    children: "For an item bought with Credits or a purchase missing below, provide its name, date or receipt reference. No reason is required."
                }), (0,
                t.jsx)(p.TextLink, {
                    className: "fd-withdrawal-link",
                    disabled: o || q || !a.verified,
                    onClick: U,
                    children: "Request refund / withdraw for another purchase"
                })]
            }), i && (0,
            t.jsx)("p", {
                role: "alert",
                children: i
            }), o && 0 === e.length && (0,
            t.jsx)(m.LoadingState, {
                title: "Loading your purchases…"
            }), !o && !i && 0 === e.length && (0,
            t.jsx)(m.EmptyState, {
                icon: "package",
                title: "No purchases yet",
                children: "Your cash purchases will appear here after checkout."
            }), s && e.some(e => e.id === s.order) && (0,
            t.jsxs)(u.Button, {
                size: "sm",
                tone: "secondary",
                trailingIcon: (0,
                t.jsx)(f.Icon, {
                    name: "arrow-right",
                    size: 24
                }),
                onClick: () => d.useCreditShop.getState().returnToShop({
                    itemId: s.itemId,
                    boosters: s.boosters
                }),
                children: ["Back to ", s.label]
            }), e.length > 0 && (0,
            t.jsx)("ul", {
                className: "fd-purchase-orders",
                children: e.map(e => {
                    let r;
                    return (0,
                    t.jsxs)("li", {
                        children: [(0,
                        t.jsxs)("div", {
                            className: "fd-purchase-order-heading",
                            children: [(0,
                            t.jsx)("strong", {
                                children: (0,
                                w.orderName)(e)
                            }), (0,
                            t.jsx)(c.Badge, {
                                tone: "paid" === (r = e.status) ? "acid" : "pending" === r ? "sky" : "ink",
                                children: e.status.replaceAll("_", " ")
                            })]
                        }), (0,
                        t.jsxs)("p", {
                            children: [(0,
                            n.money)(e.total_cents ?? e.amount_cents), " USD ", null == e.total_cents ? "quoted price" : "total", " · ", (0,
                            t.jsx)("time", {
                                dateTime: e.created_at,
                                children: (0,
                                w.dateTime)(e.created_at)
                            })]
                        }), e.refunded_cents > 0 && (0,
                        t.jsxs)("p", {
                            children: [(0,
                            n.money)(e.refunded_total_cents || e.refunded_cents), " ", e.refunded_total_cents ? "USD refunded" : "USD of price reversed"]
                        }), (0,
                        t.jsxs)("small", {
                            children: ["Order ", e.id]
                        }), "pending" === e.status && (0,
                        t.jsxs)(t.Fragment, {
                            children: [(0,
                            t.jsxs)("p", {
                                children: [e.reserved, " existing Credits reserved until this checkout finishes or is cancelled."]
                            }), (0,
                            t.jsx)(u.Button, {
                                size: "sm",
                                tone: "ghost",
                                disabled: g || o || q,
                                onClick: () => void E(),
                                children: g ? "Cancelling…" : "Cancel pending checkout"
                            })]
                        }), e.withdrawal ? z(e.withdrawal, {
                            kind: "order",
                            order: e
                        }) : ["paid", "refunded"].includes(e.status) && (0,
                        t.jsxs)("details", {
                            className: "fd-withdrawal-action",
                            children: [(0,
                            t.jsx)("summary", {
                                children: "Refunds & withdrawal"
                            }), (0,
                            t.jsx)(p.TextLink, {
                                className: "fd-withdrawal-link",
                                disabled: o || q || g || !a.verified,
                                onClick: () => R(e),
                                children: "Request refund / withdraw"
                            }), !a.verified && (0,
                            t.jsxs)("p", {
                                children: ["Verify your account email to submit a request, or contact ", (0,
                                t.jsx)("a", {
                                    href: `mailto:${y.SUPPORT_EMAIL}`,
                                    children: y.SUPPORT_EMAIL
                                }), "."]
                            })]
                        })]
                    }, e.id)
                }
                )
            }), v && (0,
            t.jsx)(u.Button, {
                size: "sm",
                tone: "ghost",
                disabled: o || q || g,
                onClick: () => {
                    l(""),
                    x(!0),
                    _(v),
                    b(e => e + 1)
                }
                ,
                children: o ? "Loading…" : "Load older orders"
            }), r.length > 0 && (0,
            t.jsxs)("section", {
                className: "fd-other-withdrawals",
                "aria-labelledby": "other-withdrawals-heading",
                children: [(0,
                t.jsx)("h3", {
                    id: "other-withdrawals-heading",
                    children: "Other purchase requests"
                }), (0,
                t.jsx)("p", {
                    children: "Your 20 most recent requests for Credit purchases or purchases identified by reference."
                }), (0,
                t.jsx)("ul", {
                    className: "fd-purchase-orders",
                    children: r.map(e => (0,
                    t.jsxs)("li", {
                        children: [(0,
                        t.jsx)("strong", {
                            children: e.purchase_reference
                        }), z(e, {
                            kind: "other",
                            requestId: e.id,
                            withdrawal: e
                        })]
                    }, e.id))
                })]
            }), (0,
            t.jsx)(j.Root, {
                open: null !== S,
                onOpenChange: e => {
                    e || q || C(null)
                }
                ,
                children: (0,
                t.jsxs)(j.Portal, {
                    children: [(0,
                    t.jsx)(j.Overlay, {
                        className: "fd-withdrawal-overlay"
                    }), (0,
                    t.jsx)(j.Content, {
                        className: "fd-withdrawal-frame",
                        style: {
                            "--font-sim-display": "u" < typeof document ? void 0 : getComputedStyle(document.querySelector(".sim-shell") ?? document.documentElement).getPropertyValue("--font-sim-display") || void 0
                        },
                        onEscapeKeyDown: e => {
                            q && e.preventDefault()
                        }
                        ,
                        onPointerDownOutside: e => {
                            q && e.preventDefault()
                        }
                        ,
                        children: (0,
                        t.jsxs)(p.Panel, {
                            className: "fd-withdrawal-dialog",
                            children: [(0,
                            t.jsx)(j.Title, {
                                children: "Confirm withdrawal"
                            }), (0,
                            t.jsxs)(j.Description, {
                                children: ["Review your details before sending this withdrawal to ", y.COMPANY_NAME, "."]
                            }), S && (0,
                            t.jsxs)("form", {
                                onSubmit: e => {
                                    e.preventDefault(),
                                    A(S, N)
                                }
                                ,
                                children: [(0,
                                t.jsxs)("dl", {
                                    children: ["order" === S.kind && (0,
                                    t.jsxs)(t.Fragment, {
                                        children: [(0,
                                        t.jsxs)("div", {
                                            children: [(0,
                                            t.jsx)("dt", {
                                                children: "Purchase"
                                            }), (0,
                                            t.jsxs)("dd", {
                                                children: [(0,
                                                w.orderName)(S.order), " · ", (0,
                                                n.money)(S.order.total_cents ?? S.order.amount_cents), " USD", null == S.order.total_cents ? " quoted price" : ""]
                                            })]
                                        }), (0,
                                        t.jsxs)("div", {
                                            children: [(0,
                                            t.jsx)("dt", {
                                                children: "Order"
                                            }), (0,
                                            t.jsx)("dd", {
                                                children: S.order.id
                                            })]
                                        }), (0,
                                        t.jsxs)("div", {
                                            children: [(0,
                                            t.jsx)("dt", {
                                                children: "Purchased"
                                            }), (0,
                                            t.jsx)("dd", {
                                                children: (0,
                                                w.dateTime)(S.order.created_at)
                                            })]
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        children: [(0,
                                        t.jsx)("dt", {
                                            children: "Acknowledgment email"
                                        }), (0,
                                        t.jsx)("dd", {
                                            children: a.email
                                        })]
                                    })]
                                }), "other" === S.kind && (0,
                                t.jsxs)("label", {
                                    children: ["Purchase reference", (0,
                                    t.jsx)("textarea", {
                                        name: "purchaseReference",
                                        value: P,
                                        required: !0,
                                        maxLength: 1e3,
                                        rows: 3,
                                        placeholder: "Item name, purchase date, Credit amount or receipt reference",
                                        onChange: e => L(e.target.value),
                                        disabled: q
                                    }), (0,
                                    t.jsx)("small", {
                                        children: "Identify the purchase. You do not need to explain why you are withdrawing."
                                    })]
                                }), (0,
                                t.jsxs)("label", {
                                    children: ["Your name", (0,
                                    t.jsx)(h.TextInput, {
                                        label: "Your name",
                                        name: "customerName",
                                        autoComplete: "name",
                                        value: N,
                                        required: !0,
                                        maxLength: 200,
                                        onChange: e => I(e.target.value),
                                        disabled: q
                                    })]
                                }), (0,
                                t.jsx)("p", {
                                    className: "fd-withdrawal-declaration",
                                    children: k.WITHDRAWAL_DECLARATION
                                }), (0,
                                t.jsxs)("p", {
                                    children: ["By selecting Confirm withdrawal, you send this declaration for the purchase identified above. We will save the time received and email an acknowledgment. Your request will be reviewed under the ", (0,
                                    t.jsx)("a", {
                                        href: "/refunds",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Refund Policy"
                                    }), "; confirming does not immediately issue a refund."]
                                }), $ && (0,
                                t.jsx)("p", {
                                    role: "alert",
                                    children: $
                                }), (0,
                                t.jsxs)("div", {
                                    className: "fd-withdrawal-buttons",
                                    children: [(0,
                                    t.jsx)(u.Button, {
                                        type: "submit",
                                        size: "sm",
                                        tone: "primary",
                                        disabled: q || !N.trim() || "other" === S.kind && !P.trim() || !a.verified || !a.email,
                                        children: q ? "Recording withdrawal…" : "Confirm withdrawal"
                                    }), (0,
                                    t.jsx)(u.Button, {
                                        size: "sm",
                                        tone: "ghost",
                                        disabled: q,
                                        onClick: () => C(null),
                                        children: "Cancel"
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            })]
        })
    }
    ], 497590),
    e.s(["CashCheckout", 0, _, "CheckoutReturn", 0, function({orderId: e, cancelled: i, onDismiss: n}) {
        let[d,l] = (0,
        a.useState)(null)
          , [o,c] = (0,
        a.useState)("")
          , [h,m] = (0,
        a.useState)(!0)
          , [f,x] = (0,
        a.useState)(0);
        (0,
        a.useEffect)( () => {
            let t = new AbortController;
            return fetch("/api/shop/checkout/status", {
                cache: "no-store",
                signal: (0,
                r.withDeadline)(t.signal, 15e3)
            }).then(async r => {
                let a = await r.json();
                if (!r.ok)
                    throw Error(a.error ?? "Couldn’t check your purchase. Please try again.");
                if (t.signal.aborted)
                    return;
                let i = a.orders.find(t => t.id === e);
                if (l(i?.status ?? null),
                i && "pending" !== i.status)
                    try {
                        sessionStorage.removeItem("fd-cash-checkout")
                    } catch {}
                await s.useInventory.getState().refresh()
            }
            ).catch(e => {
                t.signal.aborted || c(e instanceof Error ? e.message : "Couldn’t check your purchase. Please try again.")
            }
            ).finally( () => {
                t.signal.aborted || m(!1)
            }
            ),
            () => t.abort()
        }
        , [e, f]);
        let g = "paid" === d
          , j = h ? "Checking your purchase…" : o || (g ? "Purchase complete." : "refunded" === d ? "This purchase has been refunded." : "expired" === d ? "This checkout has expired. You can start a new purchase." : i ? "Checkout wasn’t completed. You can retry your purchase or manage it in Your orders." : "Your payment is still being confirmed. Check again in a moment.");
        return (0,
        t.jsxs)("div", {
            className: `fd-checkout-return fdk-screen${o ? " is-error" : ""}`,
            children: [(0,
            t.jsx)("p", {
                role: o ? "alert" : "status",
                children: j
            }), !(g || "refunded" === d || "expired" === d) && (0,
            t.jsx)(u.Button, {
                size: "sm",
                tone: "ghost",
                disabled: h,
                onClick: () => {
                    c(""),
                    m(!0),
                    x(e => e + 1)
                }
                ,
                children: h ? "Checking…" : "Check again"
            }), (0,
            t.jsx)(p.TextLink, {
                onClick: n,
                "aria-label": "Dismiss checkout status",
                children: "Dismiss"
            })]
        })
    }
    , "CreditShopPage", 0, function() {
        let e = (0,
        d.useCreditShop)(e => e.context)
          , r = (0,
        d.useCreditShop)(e => e.close);
        return (0,
        t.jsxs)("section", {
            className: "fd-credit-page fdk-screen",
            "aria-labelledby": "credit-shop-heading",
            children: [(0,
            t.jsxs)(p.TextLink, {
                className: "fd-credit-back",
                onClick: r,
                children: [(0,
                t.jsx)(f.Icon, {
                    name: "arrow-left",
                    size: 16
                }), " Back"]
            }), (0,
            t.jsx)(_, {
                item: e?.item,
                required: e?.required,
                goalLabel: e?.label
            })]
        })
    }
    ], 468630);
    var v = e.i(466465)
      , S = e.i(13784)
      , C = e.i(157430)
      , N = e.i(33156)
      , I = e.i(516560)
      , P = e.i(870895)
      , L = e.i(106258)
      , $ = e.i(516727)
      , q = e.i(127923)
      , T = e.i(856821);
    function E({onShop: e}) {
        let[r,i] = (0,
        a.useState)()
          , n = (0,
        a.useCallback)(e => {
            i(e?.closest(".sim-shell") ?? void 0)
        }
        , [])
          , [d,l] = (0,
        a.useState)(!1)
          , o = (0,
        s.useInventory)()
          , [c,u] = (0,
        a.useState)("")
          , h = o.parts
          , m = null === h ? 0 : Math.max(0, o.parts_cap - h)
          , x = o.parts_pending
          , g = null !== h && h >= o.parts_warning
          , j = null === h ? "—" : h.toLocaleString("en-US");
        async function y() {
            u("");
            let e = await o.claimParts();
            u("error" in e ? e.error : e.moved > 0 ? `${e.moved.toLocaleString("en-US")} Parts moved into your wallet.` : "No room yet. Spend Parts first.")
        }
        return (0,
        t.jsxs)(q.Popover.Root, {
            open: d,
            onOpenChange: e => {
                l(e),
                e || u("")
            }
            ,
            children: [(0,
            t.jsx)(q.Popover.Trigger, {
                asChild: !0,
                children: (0,
                t.jsxs)("button", {
                    ref: n,
                    type: "button",
                    className: T.default.trigger,
                    "data-pending": x > 0 || void 0,
                    "aria-label": null === h ? "Parts unavailable" : `${j} Parts${x > 0 ? `, ${x.toLocaleString("en-US")} waiting to claim` : ""}. View Parts`,
                    children: [(0,
                    t.jsx)(N.PartsGlyph, {
                        size: 22
                    }), (0,
                    t.jsxs)("span", {
                        className: T.default.amount,
                        children: [(0,
                        t.jsx)("small", {
                            children: "Parts"
                        }), (0,
                        t.jsx)("strong", {
                            children: j
                        })]
                    }), x > 0 && (0,
                    t.jsx)("span", {
                        className: T.default.dot,
                        "aria-hidden": "true"
                    })]
                })
            }), (0,
            t.jsx)(q.Popover.Portal, {
                container: r,
                children: (0,
                t.jsxs)(q.Popover.Content, {
                    className: `${T.default.popover} fdk-screen`,
                    sideOffset: 10,
                    align: "end",
                    collisionPadding: 12,
                    "aria-label": "Parts",
                    onEscapeKeyDown: e => e.stopPropagation(),
                    onKeyDown: e => e.stopPropagation(),
                    children: [(0,
                    t.jsxs)("header", {
                        className: T.default.heading,
                        children: [(0,
                        t.jsx)(N.PartsGlyph, {
                            size: 26
                        }), (0,
                        t.jsx)("h2", {
                            children: "Parts"
                        }), (0,
                        t.jsx)(q.Popover.Close, {
                            className: T.default.close,
                            "aria-label": "Close Parts",
                            children: (0,
                            t.jsx)(f.Icon, {
                                name: "close",
                                size: 16
                            })
                        })]
                    }), (0,
                    t.jsxs)("dl", {
                        className: T.default.stats,
                        children: [(0,
                        t.jsxs)("div", {
                            children: [(0,
                            t.jsx)("dt", {
                                children: "Spendable"
                            }), (0,
                            t.jsxs)("dd", {
                                children: [j, (0,
                                t.jsxs)("small", {
                                    children: [" / ", o.parts_cap.toLocaleString("en-US")]
                                })]
                            })]
                        }), x > 0 && (0,
                        t.jsxs)("div", {
                            children: [(0,
                            t.jsx)("dt", {
                                children: "Waiting past the cap"
                            }), (0,
                            t.jsx)("dd", {
                                children: x.toLocaleString("en-US")
                            })]
                        })]
                    }), null !== h && (0,
                    t.jsx)("span", {
                        className: T.default.meter,
                        "aria-hidden": "true",
                        children: (0,
                        t.jsx)("span", {
                            style: {
                                width: `${100 * Math.min(1, h / o.parts_cap)}%`
                            },
                            "data-near": g || void 0
                        })
                    }), g && (0,
                    t.jsxs)("p", {
                        className: T.default.note,
                        children: ["Near the cap. Rewards past ", o.parts_cap.toLocaleString("en-US"), " wait here until you claim them."]
                    }), x > 0 && (0,
                    t.jsx)("button", {
                        type: "button",
                        className: T.default.claim,
                        disabled: o.purchasing || 0 === m,
                        onClick: () => void y(),
                        children: o.purchasing ? "Claiming…" : 0 === m ? "Spend Parts to make room" : `Claim ${Math.min(m, x).toLocaleString("en-US")} Parts`
                    }), c && (0,
                    t.jsx)("p", {
                        className: T.default.note,
                        role: "status",
                        children: c
                    }), (0,
                    t.jsxs)("p", {
                        className: T.default.rules,
                        children: ["Earned by playing. Spend them in the ", e ? (0,
                        t.jsx)(p.TextLink, {
                            className: T.default.shop,
                            onClick: () => {
                                l(!1),
                                u(""),
                                e()
                            }
                            ,
                            children: "Shop"
                        }) : "Shop", "."]
                    })]
                })
            })]
        })
    }
    var R = e.i(850321)
      , U = e.i(672390)
      , A = e.i(188548)
      , z = e.i(234362);
    let O = ["play", "gear", "record", "shop"];
    e.s(["MenuHeader", 0, function({active: e, onNavigate: r, onConsumables: a, onCredits: i, social: n, offline: d=!1}) {
        let l = (0,
        s.useInventory)()
          , o = (0,
        L.useSimStore)(e => e.username)
          , c = (0,
        L.useSimStore)(e => e.isAdmin)
          , u = (0,
        L.useSimStore)(e => e.isMod)
          , h = (0,
        L.useSimStore)(e => e.xp)
          , m = (0,
        P.levelProgress)(h)
          , p = i ? "button" : "div";
        return (0,
        t.jsxs)("header", {
            className: `fd-menu-header fdk-screen ${z.default.header}`,
            children: [(0,
            t.jsxs)("div", {
                className: `fd-menu-brand ${C.default.lockup}`,
                children: [(0,
                t.jsx)(v.BrandLogo, {
                    on: "light",
                    priority: !0
                }), (0,
                t.jsx)(S.EarlyAccessBadge, {}), (0,
                t.jsx)("button", {
                    type: "button",
                    className: z.default.brand,
                    "aria-label": "Back to Play",
                    onClick: () => r("play")
                })]
            }), (0,
            t.jsx)(I.TopNav, {
                label: "Main navigation",
                className: z.default.nav,
                current: "community" === e || "editor" === e ? "play" : O.find(t => t === e) ?? null,
                onNavigate: e => {
                    ("shop" === e || "gear" === e) && (0,
                    A.markMenuOpen)(e, "header"),
                    r(e)
                }
                ,
                items: O.map(e => {
                    let r = "shop" === e && !l.shop_enabled;
                    return {
                        value: e,
                        label: "record" === e ? "challenges" : e,
                        name: "record" === e ? "Challenges" : void 0,
                        className: `fd-nav-${e}`,
                        disabled: r,
                        title: r ? "Coming Soon!" : void 0,
                        trailingIcon: r ? (0,
                        t.jsx)(f.Icon, {
                            name: "lock",
                            size: 14
                        }) : void 0
                    }
                }
                )
            }), (0,
            t.jsxs)("div", {
                className: z.default.corner,
                children: [d && (0,
                t.jsxs)("span", {
                    className: z.default.offline,
                    role: "status",
                    children: [(0,
                    t.jsx)(f.Icon, {
                        name: "offline",
                        size: 24
                    }), "Offline"]
                }), n, (0,
                t.jsx)(R.NotificationBell, {
                    placement: "header"
                }), (0,
                t.jsx)("button", {
                    type: "button",
                    className: z.default.settings,
                    "aria-label": "Settings",
                    "aria-current": "settings" === e ? "page" : void 0,
                    onClick: () => r("settings"),
                    children: (0,
                    t.jsx)(f.Icon, {
                        name: "settings",
                        size: 24
                    })
                }), (0,
                t.jsxs)("div", {
                    className: z.default.account,
                    children: [(0,
                    t.jsxs)("button", {
                        className: z.default.profile,
                        "aria-current": "profile" === e ? "page" : void 0,
                        onClick: () => r("profile"),
                        type: "button",
                        "aria-label": `Profile for ${o ?? "Pilot"}, level ${m.level}, ${m.xpIntoLevel} of ${m.xpForNext} XP toward level ${m.level + 1}`,
                        children: [(0,
                        t.jsx)("span", {
                            className: z.default.avatar,
                            "aria-hidden": "true",
                            children: (0,
                            t.jsx)(f.Icon, {
                                name: "smile",
                                size: 24
                            })
                        }), (0,
                        t.jsxs)("span", {
                            className: z.default.identity,
                            children: [(0,
                            t.jsxs)("span", {
                                className: z.default.name,
                                children: [(0,
                                t.jsx)("strong", {
                                    children: o ?? "Pilot"
                                }), (0,
                                t.jsxs)("span", {
                                    className: z.default.badges,
                                    children: [(0,
                                    t.jsx)(U.PilotBadge, {
                                        admin: c,
                                        mod: u
                                    }), (0,
                                    t.jsx)(U.EquippedPilotBadges, {
                                        badges: [...new Set(l.packs.filter(e => e.badge_label && e.badge_visible).map(e => e.badge_label))]
                                    })]
                                }), (0,
                                t.jsx)(f.Icon, {
                                    name: "chevron-right",
                                    size: 12
                                })]
                            }), (0,
                            t.jsx)("span", {
                                className: z.default.meter,
                                "aria-hidden": "true",
                                children: (0,
                                t.jsx)("span", {
                                    style: {
                                        width: `${100 * m.fraction}%`
                                    }
                                })
                            }), (0,
                            t.jsxs)("span", {
                                className: z.default.xp,
                                children: [(0,
                                t.jsx)("strong", {
                                    children: m.xpIntoLevel
                                }), " / ", m.xpForNext, " XP"]
                            })]
                        }), (0,
                        t.jsxs)("span", {
                            className: z.default.level,
                            "aria-hidden": "true",
                            children: [(0,
                            t.jsx)("small", {
                                children: "LVL"
                            }), (0,
                            t.jsx)("strong", {
                                children: m.level
                            })]
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: z.default.resources,
                        children: [(0,
                        t.jsx)(E, {
                            onShop: l.shop_enabled ? () => {
                                (0,
                                A.markMenuOpen)("shop", "parts_wallet"),
                                r("shop")
                            }
                            : void 0
                        }), (0,
                        t.jsx)("span", {
                            className: z.default.divider,
                            "aria-hidden": "true"
                        }), (0,
                        t.jsxs)(p, {
                            className: z.default.wallet,
                            type: i ? "button" : void 0,
                            onClick: i,
                            "aria-label": i ? "Get Credits" : void 0,
                            title: i ? "Get Credits" : void 0,
                            children: [(0,
                            t.jsx)(N.CreditsGlyph, {
                                size: 22
                            }), (0,
                            t.jsxs)("span", {
                                className: z.default.currencyText,
                                children: [(0,
                                t.jsx)("small", {
                                    children: "Credits"
                                }), (0,
                                t.jsx)("strong", {
                                    role: "status",
                                    "aria-label": null === l.balance ? "Credits unavailable" : `${l.balance} credits`,
                                    children: null === l.balance ? "—" : l.balance.toLocaleString("en-US")
                                })]
                            }), i && (0,
                            t.jsx)("span", {
                                className: z.default.addCredits,
                                "aria-hidden": "true",
                                children: (0,
                                t.jsx)(f.Icon, {
                                    name: "plus",
                                    size: 13
                                })
                            })]
                        }), "error" === l.status && (0,
                        t.jsx)("button", {
                            type: "button",
                            className: z.default.retry,
                            "aria-label": "Retry loading your wallet",
                            onClick: () => void l.refresh(),
                            children: "Retry"
                        }), (0,
                        t.jsx)($.ActiveBoosters, {
                            onOpen: a,
                            compact: !0
                        })]
                    })]
                })]
            })]
        })
    }
    ], 123573)
}
, 856821, e => {
    e.v({
        amount: "parts-wallet-module__9um-kW__amount",
        claim: "parts-wallet-module__9um-kW__claim",
        close: "parts-wallet-module__9um-kW__close",
        dot: "parts-wallet-module__9um-kW__dot",
        heading: "parts-wallet-module__9um-kW__heading",
        meter: "parts-wallet-module__9um-kW__meter",
        note: "parts-wallet-module__9um-kW__note",
        popover: "parts-wallet-module__9um-kW__popover",
        rules: "parts-wallet-module__9um-kW__rules",
        shop: "parts-wallet-module__9um-kW__shop",
        stats: "parts-wallet-module__9um-kW__stats",
        trigger: "parts-wallet-module__9um-kW__trigger"
    })
}
, 439759, 650485, e => {
    "use strict";
    e.s(["WITHDRAWAL_DECLARATION", 0, "I withdraw from the contract for this Flight Division purchase and request any refund due under applicable law and the Refund Policy."], 439759);
    var t = e.i(613105)
      , r = e.i(271645)
      , a = e.i(894969);
    e.s(["dateTime", 0, e => new Date(e).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short"
    }), "orderName", 0, e => "credits" === e.kind ? `${e.credits.toLocaleString("en-US")} Credits` : e.product_name ?? ("pack" === e.kind ? "Paid pack" : "Shop item"), "usePurchaseHistory", 0, function() {
        let[e,s] = (0,
        r.useState)([])
          , [i,n] = (0,
        r.useState)([])
          , [d,l] = (0,
        r.useState)({
            email: "",
            name: "",
            verified: !1
        })
          , [o] = (0,
        r.useState)( () => {
            try {
                let e = JSON.parse(sessionStorage.getItem("fd-credit-return") ?? "null");
                return e && "string" == typeof e.order && "string" == typeof e.label ? e : null
            } catch {
                return null
            }
        }
        )
          , [c,u] = (0,
        r.useState)("")
          , [h,m] = (0,
        r.useState)(!0)
          , [p,f] = (0,
        r.useState)(!1)
          , [x,g] = (0,
        r.useState)(0)
          , [j,y] = (0,
        r.useState)(null)
          , [k,w] = (0,
        r.useState)(null)
          , [b,_] = (0,
        r.useState)(null)
          , [v,S] = (0,
        r.useState)("")
          , [C,N] = (0,
        r.useState)("")
          , [I,P] = (0,
        r.useState)("")
          , [L,$] = (0,
        r.useState)(!1);
        function q() {
            u(""),
            m(!0),
            y(null),
            g(e => e + 1)
        }
        async function T() {
            f(!0),
            u("");
            try {
                let e = await fetch("/api/shop/checkout/status", {
                    method: "POST",
                    signal: AbortSignal.timeout(15e3)
                })
                  , t = await e.json();
                if (!e.ok)
                    throw Error(t.error ?? "Could not cancel checkout.");
                try {
                    sessionStorage.removeItem("fd-cash-checkout")
                } catch {}
                q()
            } catch (e) {
                u(e instanceof Error && "TimeoutError" !== e.name ? e.message : "Could not confirm the cancellation. Refresh to check its status.")
            } finally {
                f(!1)
            }
        }
        async function E(e, t, r=!1) {
            if (L)
                return;
            let a = t.trim();
            if (!a)
                return void P("Enter your name to confirm the withdrawal.");
            let i = "order" === e.kind ? e.order.withdrawal : e.withdrawal
              , l = "other" === e.kind ? e.withdrawal?.purchase_reference ?? C.trim() : "";
            if ("other" === e.kind && !l)
                return void P("Describe the purchase you want to withdraw from.");
            $(!0),
            P(""),
            u("");
            try {
                let t = await fetch("/api/shop/withdrawals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    signal: AbortSignal.timeout(25e3),
                    body: JSON.stringify("order" === e.kind ? {
                        orderId: e.order.id,
                        customerName: a
                    } : {
                        requestId: e.requestId,
                        purchaseReference: l,
                        customerName: a
                    })
                })
                  , r = await t.json();
                if (!t.ok || !r.withdrawal)
                    throw Error(r.error ?? "Could not confirm your request. Retry safely; this will not create a duplicate request.");
                let o = {
                    ...r.withdrawal,
                    customer_name: i?.customer_name ?? a,
                    acknowledgment_email: i?.acknowledgment_email ?? d.email
                };
                "order" === e.kind ? s(t => t.map(t => t.id === e.order.id ? {
                    ...t,
                    withdrawal: o
                } : t)) : n(e => [o, ...e.filter(e => e.id !== o.id)]),
                _(null)
            } catch (t) {
                let e = t instanceof Error && "TimeoutError" !== t.name ? t.message : "Could not confirm your request. Retry safely; this will not create a duplicate request.";
                r ? u(e) : P(e)
            } finally {
                $(!1)
            }
        }
        return (0,
        r.useEffect)( () => {
            let e = new AbortController
              , r = j ? `?${new URLSearchParams(j)}` : "";
            return fetch(`/api/shop/checkout/status${r}`, {
                cache: "no-store",
                signal: (0,
                t.withDeadline)(e.signal, 15e3)
            }).then(async t => {
                let r = await t.json();
                if (!t.ok)
                    throw Error(r.error ?? "Purchase history unavailable.");
                e.signal.aborted || (s(e => j ? [...e, ...r.orders.filter(t => !e.some(e => e.id === t.id))] : r.orders),
                l(r.account),
                j || n(r.other_withdrawals ?? []),
                w(r.next_cursor),
                a.useInventory.getState().refresh())
            }
            ).catch(t => {
                e.signal.aborted || u(t instanceof Error ? t.message : "Purchase history unavailable.")
            }
            ).finally( () => {
                e.signal.aborted || m(!1)
            }
            ),
            () => e.abort()
        }
        , [x, j]),
        {
            orders: e,
            otherWithdrawals: i,
            account: d,
            returnGoal: o,
            error: c,
            setError: u,
            loading: h,
            setLoading: m,
            cancelling: p,
            setReload: g,
            setCursor: y,
            nextCursor: k,
            review: b,
            setReview: _,
            customerName: v,
            setCustomerName: S,
            purchaseReference: C,
            setPurchaseReference: N,
            requestError: I,
            sending: L,
            refresh: q,
            cancelPending: T,
            openReview: function(e) {
                S(d.name),
                P(""),
                _({
                    kind: "order",
                    order: e
                })
            },
            openOtherReview: function() {
                S(d.name),
                N(""),
                P(""),
                _({
                    kind: "other",
                    requestId: crypto.randomUUID()
                })
            },
            submitWithdrawal: E
        }
    }
    ], 650485)
}
]);
