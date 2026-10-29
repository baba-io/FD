(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 91728, e => {
    e.v({
        emulsion: "drone-photo-finish-module__tmNL_G__emulsion",
        frame: "drone-photo-finish-module__tmNL_G__frame",
        image: "drone-photo-finish-module__tmNL_G__image"
    })
}
, 1635, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(91728);
    e.s(["DronePhotoFinish", 0, function({children: e, enabled: a, transparent: n=!1}) {
        return a ? (0,
        t.jsxs)("div", {
            className: r.default.frame,
            children: [(0,
            t.jsx)("div", {
                className: r.default.image,
                children: e
            }), !n && (0,
            t.jsx)("div", {
                className: r.default.emulsion,
                "aria-hidden": "true"
            })]
        }) : e
    }
    ])
}
, 537239, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(572349)
      , a = e.i(282524)
      , n = e.i(271645)
      , s = e.i(326999)
      , i = e.i(834469)
      , l = e.i(353198);
    e.i(573798);
    var o = e.i(498475)
      , d = e.i(354059)
      , c = e.i(509381)
      , f = e.i(516560)
      , u = e.i(244144)
      , h = e.i(15221)
      , m = e.i(683050)
      , p = e.i(322543)
      , b = e.i(4853)
      , g = e.i(993287);
    let x = {
        colorways: "Drone skin · Flight drones",
        trails: "Flight trail",
        environments: "World theme"
    };
    function w(e) {
        return /\bfounder(?:['’]s|s)?\b/i.test(e.name)
    }
    function v({pack: e}) {
        return w(e) ? (0,
        t.jsxs)(t.Fragment, {
            children: ["Founder’s", (0,
            t.jsx)("br", {}), (0,
            t.jsx)("span", {
                children: "Pack."
            })]
        }) : (0,
        t.jsx)(t.Fragment, {
            children: e.name
        })
    }
    function j({item: e, interactive: r=!1, transparent: a=!1, drone: n="freestyle"}) {
        return (0,
        t.jsx)(g.default, {
            item: e,
            interactive: r,
            presentation: "studio",
            subduedLighting: "colorways" === e.category,
            previewDrone: n,
            transparent: a && "environments" !== e.category,
            cardArt: !r && a && "colorways" === e.category
        })
    }
    function y({label: e}) {
        return (0,
        t.jsxs)("div", {
            className: "fd-founder-badge-art",
            children: [(0,
            t.jsx)("strong", {
                className: "fd-founder-og-pill",
                children: e
            }), (0,
            t.jsx)("span", {
                children: "In chat & player lists"
            })]
        })
    }
    function k({pack: e, owned: r, hero: a}) {
        let n = e.items.filter(e => "colorways" === e.category)
          , s = n[0]
          , l = e.items.find(e => "environments" === e.category);
        return (0,
        t.jsxs)("span", {
            className: "fd-founder-campaign",
            children: [(0,
            t.jsxs)("span", {
                className: "fd-founder-campaign-copy",
                children: [(0,
                t.jsxs)("span", {
                    className: "fd-founder-drop",
                    children: [(0,
                    t.jsx)("span", {
                        "aria-hidden": "true"
                    }), "Early access only"]
                }), (0,
                t.jsxs)("strong", {
                    className: "fd-founder-campaign-title",
                    children: ["Founder’s", (0,
                    t.jsx)("br", {}), (0,
                    t.jsx)("em", {
                        children: "Pack."
                    })]
                }), (0,
                t.jsx)("span", {
                    className: "fd-founder-campaign-hook",
                    children: "Help make free flight possible"
                }), (0,
                t.jsx)("span", {
                    className: "fd-founder-campaign-description",
                    children: "Built by one solo developer. Your support helps bring Flight Division to Steam, free for everyone."
                }), (0,
                t.jsxs)("span", {
                    className: "fd-founder-campaign-offer",
                    children: [(0,
                    t.jsx)("strong", {
                        children: (0,
                        i.money)(e.price_cents)
                    }), (0,
                    t.jsxs)("span", {
                        children: ["One-time purchase", (0,
                        t.jsx)("br", {}), "USD, tax included"]
                    })]
                }), (0,
                t.jsxs)("span", {
                    className: "fd-founder-campaign-cta",
                    children: [r ? "In your collection" : "Explore the pack", r ? (0,
                    t.jsx)(u.Icon, {
                        name: "check",
                        size: 22
                    }) : (0,
                    t.jsx)(u.Icon, {
                        name: "arrow-right",
                        size: 22
                    })]
                })]
            }), (0,
            t.jsxs)("span", {
                className: "fd-founder-campaign-showcase",
                children: [s && (0,
                t.jsxs)("span", {
                    className: "fd-founder-fleet",
                    children: [(0,
                    t.jsx)("span", {
                        className: "fd-founder-fleet-word",
                        "aria-hidden": "true",
                        children: "OG"
                    }), (0,
                    t.jsx)("span", {
                        className: "fd-founder-fleet-streak",
                        "aria-hidden": "true"
                    }), (0,
                    t.jsx)(m.PackCardArt, {
                        skins: n,
                        hero: a
                    })]
                }), (0,
                t.jsxs)("span", {
                    className: "fd-founder-campaign-extras",
                    children: [l && (0,
                    t.jsxs)("span", {
                        className: "fd-founder-world-reward",
                        children: [(0,
                        t.jsx)("span", {
                            className: "fd-founder-world-photo",
                            "aria-hidden": "true",
                            children: (0,
                            t.jsx)(j, {
                                item: l
                            })
                        }), (0,
                        t.jsxs)("span", {
                            className: "fd-founder-reward-caption",
                            children: [(0,
                            t.jsx)("small", {
                                children: "Own the scenery"
                            }), (0,
                            t.jsxs)("strong", {
                                children: [l.name, " world theme ", (0,
                                t.jsx)(u.Icon, {
                                    name: "arrow-right",
                                    size: 13
                                })]
                            })]
                        })]
                    }), e.badge_label && (0,
                    t.jsxs)("span", {
                        className: "fd-founder-badge-reward",
                        children: [(0,
                        t.jsxs)("span", {
                            className: `fd-founder-badge-lockup${e.badge_label.length > 5 ? " is-long" : ""}`,
                            "aria-hidden": "true",
                            children: [(0,
                            t.jsx)("span", {
                                children: "★"
                            }), (0,
                            t.jsx)("b", {
                                children: e.badge_label
                            }), (0,
                            t.jsx)("span", {
                                children: "★"
                            })]
                        }), (0,
                        t.jsxs)("strong", {
                            children: ["In-game ", e.badge_label, " badge"]
                        }), (0,
                        t.jsx)("small", {
                            children: "Stand out in chat & player lists."
                        })]
                    })]
                })]
            })]
        })
    }
    function N({pack: e, owned: r, hero: a}) {
        let n = e.items.filter(e => "colorways" === e.category)
          , s = n[0]
          , o = e.items.find(e => "environments" === e.category);
        return (0,
        t.jsxs)("span", {
            className: "fd-founder-compact",
            children: [(0,
            t.jsxs)("span", {
                className: "fd-founder-compact-copy",
                children: [(0,
                t.jsx)("span", {
                    className: "fd-founder-hero-eyebrow",
                    children: "Be part of the beginning"
                }), (0,
                t.jsxs)("strong", {
                    children: ["Founder’s", (0,
                    t.jsx)("br", {}), (0,
                    t.jsx)("em", {
                        children: "Pack."
                    })]
                }), (0,
                t.jsxs)("span", {
                    className: "fd-founder-hero-story",
                    children: ["Built by one solo developer. Your support helps bring Flight Division to Steam, ", (0,
                    t.jsx)("b", {
                        children: "free for everyone."
                    })]
                }), (0,
                t.jsxs)("span", {
                    className: "fd-founder-compact-purchase",
                    children: [(0,
                    t.jsxs)("span", {
                        className: "fd-founder-compact-offer",
                        children: [(0,
                        t.jsx)("b", {
                            children: (0,
                            i.money)(e.price_cents)
                        }), (0,
                        t.jsxs)("small", {
                            children: ["USD · tax included", (0,
                            t.jsx)("br", {}), "One-time purchase"]
                        })]
                    }), (0,
                    t.jsxs)("span", {
                        className: "fd-founder-compact-action",
                        children: [r ? "In your collection" : "Explore the pack", r ? (0,
                        t.jsx)(u.Icon, {
                            name: "check",
                            size: 21
                        }) : (0,
                        t.jsx)(u.Icon, {
                            name: "arrow-right",
                            size: 23
                        })]
                    })]
                })]
            }), (0,
            t.jsxs)("span", {
                className: "fd-founder-compact-showcase",
                children: [s && (0,
                t.jsxs)("span", {
                    className: "fd-founder-compact-art",
                    children: [(0,
                    t.jsx)("span", {
                        className: "fd-founder-hero-fleet",
                        "aria-hidden": "true",
                        children: (0,
                        t.jsx)(m.PackCardArt, {
                            skins: n,
                            hero: a
                        })
                    }), (0,
                    t.jsxs)("span", {
                        className: "fd-founder-hero-fleet-caption",
                        children: [(0,
                        t.jsxs)("b", {
                            children: [s.name, " flight collection"]
                        }), (0,
                        t.jsxs)("small", {
                            children: ["One exclusive colourway · All ", l.DRONE_IDS.length, " flight drones"]
                        })]
                    })]
                }), (0,
                t.jsxs)("span", {
                    className: "fd-founder-compact-rewards",
                    children: [o && (0,
                    t.jsxs)("span", {
                        className: "fd-founder-hero-world",
                        children: [(0,
                        t.jsx)("span", {
                            className: "fd-founder-hero-world-art",
                            "aria-hidden": "true",
                            children: (0,
                            t.jsx)(j, {
                                item: o
                            })
                        }), (0,
                        t.jsxs)("span", {
                            children: [(0,
                            t.jsx)("small", {
                                children: "Make the world yours"
                            }), (0,
                            t.jsxs)("strong", {
                                children: [o.name, " world theme"]
                            })]
                        })]
                    }), e.badge_label && (0,
                    t.jsxs)("span", {
                        className: "fd-founder-hero-badge",
                        children: [(0,
                        t.jsx)("b", {
                            children: e.badge_label
                        }), (0,
                        t.jsxs)("span", {
                            children: [(0,
                            t.jsx)("strong", {
                                children: "Founder badge"
                            }), (0,
                            t.jsx)("small", {
                                children: "Stand out in chat & player lists"
                            })]
                        })]
                    })]
                })]
            })]
        })
    }
    function _({pack: e, owned: r, checkoutEnabled: a, inventoryReady: n, onChoose: s}) {
        return (0,
        t.jsxs)("div", {
            className: "fd-founder-offer",
            children: [e.closes_at && (0,
            t.jsxs)("p", {
                className: "fd-founder-closes",
                children: ["Available until", " ", (0,
                t.jsx)("time", {
                    dateTime: e.closes_at,
                    children: new Date(e.closes_at).toLocaleDateString(void 0, {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    })
                })]
            }), (0,
            t.jsxs)("div", {
                className: "fd-founder-price",
                children: [(0,
                t.jsx)("strong", {
                    children: (0,
                    i.money)(e.price_cents)
                }), (0,
                t.jsxs)("span", {
                    children: ["One-time purchase", (0,
                    t.jsx)("br", {}), "USD, tax included"]
                })]
            }), (0,
            t.jsx)(o.Button, {
                tone: "primary",
                size: "lg",
                block: !0,
                disabled: r || !a || !n,
                onClick: s,
                trailingIcon: r ? (0,
                t.jsx)(u.Icon, {
                    name: "check",
                    size: 24
                }) : (0,
                t.jsx)(u.Icon, {
                    name: "arrow-right",
                    size: 24
                }),
                children: r ? "In your collection" : n ? `Buy ${e.name}` : "Loading your collection…"
            }), !a && !r && (0,
            t.jsx)("p", {
                className: "fd-founder-checkout-status",
                role: "status",
                children: "Purchases are currently unavailable."
            })]
        })
    }
    e.s(["PackBanner", 0, function({pack: e, owned: S, checkoutEnabled: R, inventoryReady: E, onChoose: D, checkoutReview: I, onClose: P, featured: L=!1, compact: $=!1, heroPicker: C}) {
        let[W,O] = (0,
        n.useState)(!1)
          , A = e.items.find(e => "colorways" === e.category) ?? e.items[0]
          , F = e.items.filter(e => "colorways" === e.category)
          , [z,q] = (0,
        n.useState)("freestyle")
          , T = A ? [A, ...e.items.filter(e => e.id !== A.id)] : e.items
          , [U,M] = (0,
        n.useState)(A?.id ?? "badge")
          , [B,G] = (0,
        n.useState)("Impact")
          , H = (0,
        n.useRef)(null)
          , K = e.items.find(e => e.id === U)
          , V = w(e)
          , Y = (0,
        p.useSkinHeroVisit)()
          , J = (C ?? Y)(e.id, e.price_cents)
          , X = K?.name ?? e.badge_label;
        return (0,
        t.jsxs)(s.Root, {
            open: W,
            onOpenChange: t => {
                O(t),
                t && !S && (0,
                r.trackShopEvent)("offer_view", {
                    kind: "pack",
                    key: e.id
                }),
                t || P?.()
            }
            ,
            children: [(0,
            t.jsx)(s.Trigger, {
                asChild: !0,
                children: L && !V ? (0,
                t.jsx)(b.StoreCard, {
                    ref: H,
                    name: e.name,
                    label: "Pack",
                    artAspectRatio: 1.5,
                    "aria-label": `Explore ${e.name}, ${(0,
                    i.money)(e.price_cents)} USD`,
                    art: A ? F.length ? (0,
                    t.jsx)(m.PackCardArt, {
                        skins: F,
                        hero: J
                    }) : (0,
                    t.jsx)(g.default, {
                        item: A,
                        presentation: "studio",
                        interactive: !1
                    }) : null,
                    price: S ? "Owned" : `${(0,
                    i.money)(e.price_cents)} USD`,
                    onClick: () => {
                        G(getComputedStyle(H.current).getPropertyValue("--font-sim-display").trim() || "Impact"),
                        M(A?.id ?? "badge"),
                        q("freestyle")
                    }
                }) : (0,
                t.jsx)("button", {
                    ref: H,
                    type: "button",
                    className: `fd-founder-banner${L ? " is-featured" : ""}${V ? " is-og" : ""}${$ ? " is-compact" : ""}`,
                    "aria-label": `Explore ${e.name}, ${(0,
                    i.money)(e.price_cents)} USD`,
                    onClick: () => {
                        G(getComputedStyle(H.current).getPropertyValue("--font-sim-display").trim() || "Impact"),
                        M(A?.id ?? "badge"),
                        q("freestyle")
                    }
                    ,
                    children: V && $ ? (0,
                    t.jsx)(N, {
                        pack: e,
                        owned: S,
                        hero: J
                    }) : V ? (0,
                    t.jsx)(k, {
                        pack: e,
                        owned: S,
                        hero: J
                    }) : (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                        t.jsxs)("span", {
                            className: "fd-founder-banner-copy",
                            children: [(0,
                            t.jsx)("strong", {
                                children: e.name
                            }), (0,
                            t.jsx)("span", {
                                children: e.description
                            }), (0,
                            t.jsxs)("span", {
                                className: "fd-founder-banner-bottom",
                                children: [(0,
                                t.jsx)("b", {
                                    children: (0,
                                    i.money)(e.price_cents)
                                }), (0,
                                t.jsxs)("span", {
                                    children: [S ? "In your collection" : "Explore the pack", " ", (0,
                                    t.jsx)(u.Icon, {
                                        name: "arrow-right",
                                        size: 18
                                    })]
                                })]
                            })]
                        }), (0,
                        t.jsx)("span", {
                            className: "fd-founder-banner-art",
                            "aria-hidden": "true",
                            children: F.length ? (0,
                            t.jsx)(m.PackCardArt, {
                                skins: F,
                                hero: J
                            }) : A && (0,
                            t.jsx)(j, {
                                item: A,
                                transparent: !0
                            })
                        })]
                    })
                })
            }), (0,
            t.jsxs)(s.Portal, {
                children: [(0,
                t.jsx)(s.Overlay, {
                    className: "fd-founder-overlay"
                }), (0,
                t.jsx)(s.Content, {
                    className: "fd-founder-frame",
                    style: {
                        "--font-sim-display": B
                    },
                    onCloseAutoFocus: e => {
                        e.preventDefault(),
                        H.current?.focus()
                    }
                    ,
                    children: (0,
                    t.jsxs)(c.Panel, {
                        tone: V ? "ink" : "chalk",
                        flush: !0,
                        className: `fd-founder-modal${V ? " is-og" : ""}`,
                        children: [(0,
                        t.jsxs)("div", {
                            className: "fd-founder-gallery fdk-on-ink",
                            children: [(0,
                            t.jsxs)("div", {
                                className: `fd-founder-stage${K?.category === "environments" ? " is-world" : ""}`,
                                children: [(0,
                                t.jsx)("span", {
                                    className: "fd-founder-watermark",
                                    "aria-hidden": "true",
                                    children: V ? "FOUNDERS" : "FLIGHT"
                                }), (0,
                                t.jsx)("div", {
                                    className: "fd-founder-product",
                                    children: K ? (0,
                                    t.jsx)(j, {
                                        item: K,
                                        interactive: !0,
                                        transparent: !0,
                                        drone: z
                                    }) : e.badge_label ? (0,
                                    t.jsx)(y, {
                                        label: e.badge_label
                                    }) : null
                                }, U), K?.category !== "colorways" && (0,
                                t.jsxs)("div", {
                                    className: "fd-founder-caption",
                                    children: [(0,
                                    t.jsx)("strong", {
                                        children: X
                                    }), (0,
                                    t.jsx)("span", {
                                        children: K ? x[K.category] : "Chat & player list badge"
                                    })]
                                }), K && "environments" !== K.category && (0,
                                t.jsx)(a.OrbitHint, {
                                    placement: "bottom-right"
                                })]
                            }), K?.category === "colorways" && (0,
                            t.jsx)(f.Segmented, {
                                label: "Preview skin on a drone",
                                size: "sm",
                                className: "fd-founder-airframes",
                                value: z,
                                onChange: q,
                                options: l.DRONE_IDS.map(e => ({
                                    value: e,
                                    label: l.DRONES[e].name
                                }))
                            }), (0,
                            t.jsxs)("div", {
                                className: "fd-founder-contents",
                                "aria-label": "Pack contents",
                                children: [T.map(e => (0,
                                t.jsx)(d.RarityCard, {
                                    className: "fd-founder-content",
                                    name: e.name,
                                    meta: x[e.category],
                                    rarity: (0,
                                    h.hasRarity)(e.category) ? e.rarity : void 0,
                                    art: (0,
                                    t.jsx)("span", {
                                        className: "fd-founder-thumb",
                                        children: (0,
                                        t.jsx)(j, {
                                            item: e,
                                            transparent: !0,
                                            drone: (C ?? Y)(e.id, e.price)
                                        })
                                    }),
                                    artRatio: 1.5,
                                    selected: U === e.id,
                                    onSelect: () => M(e.id),
                                    "aria-label": `Preview ${e.name}, ${x[e.category]}`
                                }, e.id)), e.badge_label && (0,
                                t.jsx)(d.RarityCard, {
                                    className: "fd-founder-content",
                                    name: e.badge_label,
                                    meta: "Chat & player list badge",
                                    rarity: V ? "legendary" : void 0,
                                    art: (0,
                                    t.jsx)("span", {
                                        className: "fd-founder-thumb fd-founder-thumb--badge",
                                        children: (0,
                                        t.jsx)("span", {
                                            className: "fd-founder-og-pill",
                                            children: e.badge_label
                                        })
                                    }),
                                    artRatio: 2,
                                    selected: "badge" === U,
                                    onSelect: () => M("badge"),
                                    "aria-label": `Preview ${e.badge_label}, chat & player list badge`
                                })]
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "fd-founder-story",
                            children: [V && (0,
                            t.jsxs)("p", {
                                className: "fd-founder-drop",
                                children: [(0,
                                t.jsx)("span", {
                                    "aria-hidden": "true"
                                }), "Early access only"]
                            }), (0,
                            t.jsx)(s.Title, {
                                children: (0,
                                t.jsx)(v, {
                                    pack: e
                                })
                            }), (0,
                            t.jsx)(s.Description, {
                                className: V ? "fd-founder-dedication" : "fd-founder-description",
                                children: V ? "Be part of the beginning." : e.description || `${e.items.length} items for your collection.`
                            }), I ? (0,
                            t.jsx)("div", {
                                className: "fd-founder-review",
                                children: I
                            }) : (0,
                            t.jsxs)(t.Fragment, {
                                children: [V && (0,
                                t.jsxs)("div", {
                                    className: "fd-founder-letter",
                                    children: [(0,
                                    t.jsxs)("p", {
                                        children: ["Built by one solo developer. Your support helps bring Flight Division to Steam, ", (0,
                                        t.jsx)("strong", {
                                            children: "free for everyone."
                                        })]
                                    }), e.description && (0,
                                    t.jsx)("p", {
                                        children: e.description
                                    })]
                                }), (0,
                                t.jsx)(_, {
                                    pack: e,
                                    owned: S,
                                    checkoutEnabled: R,
                                    inventoryReady: E,
                                    onChoose: D
                                })]
                            })]
                        }), (0,
                        t.jsx)("span", {
                            className: "fd-founder-close",
                            children: (0,
                            t.jsx)(o.IconButton, {
                                label: "Close pack",
                                icon: (0,
                                t.jsx)(u.Icon, {
                                    name: "close",
                                    size: 21
                                }),
                                onClick: () => {
                                    O(!1),
                                    P?.()
                                }
                            })
                        })]
                    })
                })]
            })]
        })
    }
    , "isFounderPack", 0, w])
}
, 445249, e => {
    e.v({
        art: "pack-card-art-module__i7qIeq__art",
        dots: "pack-card-art-module__i7qIeq__dots",
        drone: "pack-card-art-module__i7qIeq__drone",
        preload: "pack-card-art-module__i7qIeq__preload"
    })
}
, 683050, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(271645)
      , a = e.i(798052)
      , n = e.i(993287)
      , s = e.i(445249);
    e.s(["PackCardArt", 0, function({skins: e, hero: i}) {
        let l = (0,
        r.useRef)(null)
          , o = (0,
        a.usePackCycle)(l, e.length)
          , d = e[o % e.length];
        return d ? (0,
        t.jsxs)("span", {
            ref: l,
            className: s.default.art,
            "data-pack-skin": d.id,
            children: [(0,
            t.jsx)("span", {
                className: s.default.drone,
                children: (0,
                t.jsx)(n.default, {
                    item: d,
                    previewDrone: i,
                    presentation: "studio",
                    interactive: !1,
                    cardArt: !0
                })
            }), e.length > 1 && (0,
            t.jsx)("span", {
                className: s.default.preload,
                "aria-hidden": "true",
                children: (0,
                t.jsx)(n.default, {
                    item: e[(o + 1) % e.length],
                    previewDrone: i,
                    presentation: "studio",
                    interactive: !1,
                    cardArt: !0
                })
            }), (0,
            t.jsx)("span", {
                className: s.default.dots,
                children: e.map( (e, r) => (0,
                t.jsx)("span", {
                    title: e.name,
                    "data-current": r === o || void 0,
                    style: {
                        "--skin-colour": e.colors.shell
                    }
                }, e.id))
            })]
        }) : null
    }
    ])
}
, 234765, e => {
    "use strict";
    var t = e.i(843476);
    e.i(671112),
    e.s(["ShopPreviewLoading", 0, function({transparent: e=!1}) {
        return (0,
        t.jsxs)("div", {
            className: `fd-preview-loading${e ? " is-transparent" : ""}`,
            role: "status",
            "aria-live": "polite",
            children: [(0,
            t.jsx)("span", {
                className: "fd-preview-loading-ring",
                "aria-hidden": "true"
            }), (0,
            t.jsx)("span", {
                children: "Loading preview…"
            })]
        })
    }
    ])
}
, 993287, 761321, e => {
    "use strict";
    let t, r, a, n, s, i, l;
    var o = e.i(843476)
      , d = e.i(770703)
      , c = e.i(271645)
      , f = e.i(899257)
      , u = e.i(826658);
    let h = () => void 0
      , m = () => () => {}
      , p = (a = null,
    n = new Set,
    s = e => {
        t !== e && (t = e,
        n.forEach(e => e()))
    }
    ,
    i = async () => {
        if (a || !n.size)
            return;
        let e = new AbortController
          , t = {
            controller: e,
            timeout: setTimeout( () => {
                a === t && (a = null,
                e.abort(),
                s(null))
            }
            , 8e3)
        };
        a = t;
        try {
            let r = await fetch("/api/shop/world-revision", {
                signal: e.signal,
                cache: "no-store"
            });
            if (!r.ok)
                throw Error("Revision unavailable");
            let n = await r.json()
              , i = n && "object" == typeof n && "revision" in n ? n.revision : null;
            a === t && s("number" == typeof i && Number.isSafeInteger(i) && i >= 0 ? i : null)
        } catch {
            a === t && s(null)
        } finally {
            clearTimeout(t.timeout),
            a === t && (a = null)
        }
    }
    ,
    l = () => {
        i()
    }
    ,
    {
        getSnapshot: () => t,
        subscribe: e => (n.add(e),
        1 === n.size && (i(),
        window.addEventListener("focus", l),
        r = setInterval(l, 6e4)),
        () => {
            if (n.delete(e),
            !n.size) {
                if (window.removeEventListener("focus", l),
                clearInterval(r),
                a) {
                    let e = a;
                    a = null,
                    clearTimeout(e.timeout),
                    e.controller.abort()
                }
                t = void 0
            }
        }
        )
    });
    var b = e.i(140842)
      , g = e.i(354123)
      , x = e.i(543016);
    let w = g.default.modelRevision;
    function v(e, t, r=b.default) {
        return !!(e.id && r[e.id]?.[t])
    }
    function j(e, t, r=b.default) {
        if (!e.id)
            return null;
        let a = r[e.id]?.[t];
        return a && a.modelRevision === w && a.signature === (0,
        x.artworkSignature)(e) ? a : null
    }
    e.s(["editorialArtwork", 0, j, "hasEditorialArtwork", 0, v], 761321);
    var y = e.i(234765)
      , k = e.i(1635);
    let N = (0,
    d.default)( () => e.A(68984), {
        loadableGenerated: {
            modules: [889030]
        },
        ssr: !1,
        loading: () => (0,
        o.jsx)(y.ShopPreviewLoading, {})
    });
    function _(e) {
        let t = function(e=!0) {
            return (0,
            c.useSyncExternalStore)(e ? p.subscribe : m, e ? p.getSnapshot : h, h)
        }(!e.worldSnapshot)
          , r = e.worldSnapshot ? e.worldSnapshot.revision : t;
        return void 0 === r ? (0,
        o.jsx)(y.ShopPreviewLoading, {}) : null === r || e.art.mapRevision !== r ? (0,
        o.jsx)(R, {
            ...e,
            item: {
                ...e.item,
                preview_images: null
            }
        }) : (0,
        o.jsx)(S, {
            ...e
        })
    }
    function S({art: e, ...t}) {
        let[r,a] = (0,
        c.useState)(!1)
          , n = "campaign" === t.fleetLayout ? "(max-width: 660px) 100vw, 70vw" : "environments" === t.item.category ? "(max-width: 850px) 50vw, 33vw" : "(max-width: 560px) 50vw, (max-width: 1150px) 45vw, (max-width: 1699px) 25vw, 20vw";
        return r ? (0,
        o.jsx)(R, {
            ...t
        }) : (0,
        o.jsx)("div", {
            className: "fd-editorial-product-art",
            style: {
                position: "absolute",
                inset: 0,
                overflow: "hidden"
            },
            children: (0,
            o.jsx)("img", {
                src: e.src,
                srcSet: e.smallSrc && e.smallWidth ? `${e.smallSrc} ${e.smallWidth}w, ${e.src} ${e.width}w` : void 0,
                sizes: n,
                width: e.width,
                height: e.height,
                alt: t.item.name,
                decoding: "async",
                style: {
                    width: "100%",
                    height: "100%",
                    objectFit: t.fleet ? "contain" : "cover",
                    objectPosition: "campaign" === t.fleetLayout ? "center" : "center top"
                },
                onError: () => a(!0)
            })
        })
    }
    function R(e) {
        if (e.subduedLighting)
            return (0,
            o.jsx)(N, {
                ...e
            });
        let t = e.item.preview_images;
        if (!t || "editor" === e.presentation)
            return (0,
            o.jsx)(N, {
                ...e
            });
        let r = e.fleet && "colorways" === e.item.category;
        return (r || "environments" === e.item.category) && t.version !== u.previewSpec.version || r && t.fleetRevision !== u.previewSpec.fleetRevision ? (0,
        o.jsx)(N, {
            ...e
        }) : e.interactive ? (0,
        o.jsx)(E, {
            ...e,
            manifest: t
        }, `${t.request}:${(0,
        f.previewKey)(e.item, e.previewDrone, e.transparent, e.fleet, e.fleetLayout)}`) : (0,
        o.jsx)(D, {
            ...e,
            manifest: t
        }, `${t.request}:${(0,
        f.previewKey)(e.item, e.previewDrone, e.transparent, e.fleet, e.fleetLayout)}`)
    }
    function E({manifest: e, ...t}) {
        let[r,a] = (0,
        c.useState)(!1)
          , n = (0,
        c.useCallback)( () => a(!0), []);
        return (0,
        o.jsxs)(o.Fragment, {
            children: [(0,
            o.jsx)(N, {
                ...t,
                onSceneReady: n,
                onSceneError: n
            }), !r && (0,
            o.jsx)("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    pointerEvents: "none"
                },
                "aria-label": "Loading interactive preview",
                children: (0,
                o.jsx)(D, {
                    ...t,
                    interactive: !1,
                    manifest: e,
                    poster: !0
                })
            })]
        })
    }
    function D({manifest: e, poster: t=!1, ...r}) {
        let a = (0,
        c.useRef)(null)
          , [n,s] = (0,
        c.useState)(null)
          , [i,l] = (0,
        c.useState)(!1);
        (0,
        c.useEffect)( () => {
            let e = new ResizeObserver( ([e]) => {
                e.contentRect.height && s({
                    width: e.contentRect.width,
                    aspect: e.contentRect.width / e.contentRect.height
                })
            }
            );
            return a.current && e.observe(a.current),
            () => e.disconnect()
        }
        , []);
        let d = "environments" === r.item.category ? null === n ? null : n.aspect < 1 ? "portrait" : n.aspect < 1.5 ? "card" : "wide" : (0,
        f.previewKey)(r.item, r.previewDrone, r.transparent, r.fleet, r.fleetLayout)
          , u = d ? e.images[d] : null
          , h = u ? (0,
        f.previewUrl)(u) : null;
        return i || d && !h ? t ? (0,
        o.jsx)(y.ShopPreviewLoading, {}) : (0,
        o.jsx)(N, {
            ...r
        }) : (0,
        o.jsx)("div", {
            ref: a,
            style: {
                position: "absolute",
                inset: 0
            },
            children: (0,
            o.jsx)(k.DronePhotoFinish, {
                enabled: "colorways" === r.item.category && "studio" === r.presentation,
                transparent: r.transparent,
                children: h && u && (0,
                o.jsx)(I, {
                    src: h,
                    sizes: `${Math.ceil(n?.width ?? u.width)}px`,
                    srcSet: u.smallPath && u.smallWidth ? `${(0,
                    f.previewUrl)({
                        ...u,
                        path: u.smallPath
                    })} ${u.smallWidth}w, ${h} ${u.width}w` : void 0,
                    width: u.width,
                    height: u.height,
                    name: r.item.name,
                    contain: r.fleet || r.transparent && "environments" !== r.item.category || t && "colorways" === r.item.category,
                    onError: () => l(!0)
                }, h)
            })
        })
    }
    function I({src: e, srcSet: t, sizes: r, width: a, height: n, name: s, contain: i, onError: l}) {
        return (0,
        o.jsx)("div", {
            style: {
                position: "absolute",
                inset: 0
            },
            children: (0,
            o.jsx)("img", {
                src: e,
                srcSet: t,
                sizes: r,
                width: a,
                height: n,
                alt: s,
                decoding: "async",
                onError: l,
                style: {
                    width: "100%",
                    height: "100%",
                    objectFit: i ? "contain" : "cover"
                }
            })
        })
    }
    e.s(["default", 0, function(e) {
        if (e.cardArt)
            return (0,
            o.jsx)(N, {
                ...e,
                transparent: !0
            });
        let t = "environments" === e.item.category ? "world" : "campaign" === e.fleetLayout ? "campaign" : e.fleet ? "fleet" : null
          , r = t && "studio" === e.presentation && !e.interactive && !e.transparent && !e.renderCapture
          , a = r ? j(e.item, t) : null;
        return r && !a && v(e.item, t) ? (0,
        o.jsx)(N, {
            ...e
        }) : a && "world" === t ? (0,
        o.jsx)(_, {
            ...e,
            art: a
        }, a.src) : a ? (0,
        o.jsx)(S, {
            ...e,
            art: a
        }, a.src) : (0,
        o.jsx)(R, {
            ...e
        })
    }
    ], 993287)
}
, 322543, e => {
    "use strict";
    var t = e.i(271645)
      , r = e.i(106258)
      , a = e.i(771607)
      , n = e.i(353198);
    e.s(["useSkinHeroVisit", 0, function() {
        return (0,
        t.useState)( () => {
            let e = r.useSimStore.getState()
              , t = (0,
            a.confirmedXp)(e);
            return function(e, t=Math.random) {
                let r = Math.floor(0x100000000 * t()) >>> 0;
                return (t, a) => {
                    let s = 0x811c9dc5 ^ r;
                    for (let e = 0; e < t.length; e++)
                        s = Math.imul(s ^ t.charCodeAt(e), 0x1000193);
                    return function(e, t, r) {
                        let a = n.DRONE_LADDER.filter(t => e.unlocked.includes(t))
                          , s = a.includes(n.DEFAULT_DRONE) ? n.DEFAULT_DRONE : a[0] ?? n.DEFAULT_DRONE
                          , i = function(e) {
                            if (!e.signedIn)
                                return null;
                            if (e.usage)
                                return e.usage;
                            let t = n.DRONE_LADDER.filter(t => e.unlocked.includes(t))
                              , r = t.includes(e.equipped) ? e.equipped : t[0];
                            return Object.fromEntries(t.map(e => [e, 1 === t.length ? 1 : e === r ? .6 : .4 / (t.length - 1)]))
                        }(e);
                        if (!e.signedIn || !i || !a.length)
                            return s;
                        let l = a.map(e => Number.isFinite(i[e]) ? Math.max(0, i[e]) : 0)
                          , o = l.reduce( (e, t) => e + t, 0);
                        if (!o)
                            return s;
                        let d = .6 + 2.4 * Math.min(1, Math.max(0, Number.isFinite(t) ? t : 0) / 2e3)
                          , c = l.map(e => (e / o + .025) ** d)
                          , f = Math.min(1, Math.max(0, Number.isFinite(r) ? r : 0)) * c.reduce( (e, t) => e + t, 0);
                        for (let e = 0; e < a.length; e++)
                            if ((f -= c[e]) < 0)
                                return a[e];
                        return a.at(-1)
                    }(e, a, (((s = Math.imul((s = Math.imul(s ^ s >>> 16, 0x85ebca6b)) ^ s >>> 13, 0xc2b2ae35)) ^ s >>> 16) >>> 0) / 0x100000000)
                }
            }({
                signedIn: !!e.playerAccountId && !e.isAnonymous,
                unlocked: n.DRONE_LADDER.filter(r => (0,
                n.isDroneUnlocked)(r, t, e.droneGifts)),
                equipped: (0,
                n.equippedDrone)(e.settings.drone, t, e.droneGifts)
            })
        }
        )[0]
    }
    ], 322543)
}
, 526497, e => {
    e.v({
        "bottom-left": "orbit-hint-module__35qPgW__bottom-left",
        "bottom-right": "orbit-hint-module__35qPgW__bottom-right",
        "bottom-right-above-overlay": "orbit-hint-module__35qPgW__bottom-right-above-overlay",
        hint: "orbit-hint-module__35qPgW__hint",
        "top-left": "orbit-hint-module__35qPgW__top-left",
        wiggle: "orbit-hint-module__35qPgW__wiggle"
    })
}
, 282524, e => {
    "use strict";
    var t = e.i(843476);
    e.i(573798);
    var r = e.i(244144)
      , a = e.i(526497);
    e.s(["OrbitHint", 0, function({placement: e="bottom-left"}) {
        return (0,
        t.jsx)("span", {
            className: `${a.default.hint} ${a.default[e]}`,
            role: "img",
            "aria-label": "Drag to rotate the 3D view",
            children: (0,
            t.jsx)(r.Icon, {
                name: "hand",
                size: 22,
                strokeWidth: 1.5
            })
        })
    }
    ])
}
, 140842, (e, t, r) => {
    t.exports = {
        "4a77f80c-31c7-41bb-aa3a-8f61d94a4e1a": {
            fleet: {
                src: "/shop/editorial/4a77f80c-31c7-41bb-aa3a-8f61d94a4e1a-fleet-d277427695e7.webp",
                width: 1280,
                height: 801,
                smallSrc: "/shop/editorial/4a77f80c-31c7-41bb-aa3a-8f61d94a4e1a-fleet-d277427695e7-640.webp",
                smallWidth: 640,
                signature: '["colorways","freestyle",null,null,"translucent",[["accent","#757575"],["background","#292947"],["props","#ffffff"],["shell","#292929"]]]',
                modelRevision: "flight-october-2026"
            }
        },
        "6cb5f98d-d646-4106-9bfd-df796f0aed09": {
            fleet: {
                src: "/shop/editorial/6cb5f98d-d646-4106-9bfd-df796f0aed09-fleet-7f19756b15cb.webp",
                width: 1280,
                height: 801,
                smallSrc: "/shop/editorial/6cb5f98d-d646-4106-9bfd-df796f0aed09-fleet-7f19756b15cb-640.webp",
                smallWidth: 640,
                signature: '["colorways","freestyle",null,null,"translucent",[["accent","#21e4f2"],["background","#ffffff"],["props","#fb00ff"],["shell","#e2eeee"]]]',
                modelRevision: "flight-october-2026"
            }
        },
        "73960613-654d-4e77-b82f-159b0b333adf": {
            fleet: {
                src: "/shop/editorial/73960613-654d-4e77-b82f-159b0b333adf-fleet-f876ac8881fe.webp",
                width: 1280,
                height: 801,
                smallSrc: "/shop/editorial/73960613-654d-4e77-b82f-159b0b333adf-fleet-f876ac8881fe-640.webp",
                smallWidth: 640,
                signature: '["colorways","freestyle",null,null,"translucent",[["accent","#b8aa7a"],["background","#ffa200"],["props","#ff9500"],["shell","#4b5320"]]]',
                modelRevision: "flight-october-2026"
            }
        },
        "8875acad-004f-48eb-b4fb-5fc0488602ec": {
            world: {
                src: "/shop/editorial/8875acad-004f-48eb-b4fb-5fc0488602ec-world-e692669d84e0.webp",
                width: 1280,
                height: 853,
                smallSrc: "/shop/editorial/8875acad-004f-48eb-b4fb-5fc0488602ec-world-e692669d84e0-640.webp",
                smallWidth: 640,
                signature: '["environments",null,null,null,"normal",[["accent","#d6c2d3"],["dark","#997597"],["ground","#e0ccdd"],["light","#d2bbd3"],["sky","#e6b6ed"]]]',
                modelRevision: "flight-october-2026",
                mapRevision: 44
            }
        },
        "a68d8673-86ae-4ed2-b750-3c4076b30e12": {
            fleet: {
                src: "/shop/editorial/a68d8673-86ae-4ed2-b750-3c4076b30e12-fleet-6443335d45f3.webp",
                width: 1280,
                height: 801,
                smallSrc: "/shop/editorial/a68d8673-86ae-4ed2-b750-3c4076b30e12-fleet-6443335d45f3-640.webp",
                smallWidth: 640,
                signature: '["colorways","cinewhoop",null,null,"normal",[["accent","#5eb6e8"],["props","#eeeae1"],["shell","#737373"]]]',
                modelRevision: "flight-october-2026"
            }
        },
        "dc329aa4-574b-4e57-85ea-3c95847deae7": {
            world: {
                src: "/shop/editorial/dc329aa4-574b-4e57-85ea-3c95847deae7-world-81e7545b6ea0.webp",
                width: 1280,
                height: 853,
                smallSrc: "/shop/editorial/dc329aa4-574b-4e57-85ea-3c95847deae7-world-81e7545b6ea0-640.webp",
                smallWidth: 640,
                signature: '["environments",null,null,null,"normal",[["accent","#8014c8"],["dark","#484b50"],["ground","#86888d"],["light","#aeb3bb"],["sky","#b6dced"]]]',
                modelRevision: "flight-october-2026",
                mapRevision: 44
            }
        },
        "fd000000-0000-4000-8000-000000000001": {
            fleet: {
                src: "/shop/editorial/fd000000-0000-4000-8000-000000000001-fleet-64ddff6f0ab4.webp",
                width: 1280,
                height: 801,
                smallSrc: "/shop/editorial/fd000000-0000-4000-8000-000000000001-fleet-64ddff6f0ab4-640.webp",
                smallWidth: 640,
                signature: '["colorways","racer",null,null,"normal",[["accent","#737373"],["props","#ff7900"],["shell","#eeeae1"]]]',
                modelRevision: "flight-october-2026"
            }
        },
        "fd000000-0000-4000-8000-000000000013": {
            campaign: {
                src: "/shop/editorial/fd000000-0000-4000-8000-000000000013-campaign-fdf4bc031b93.webp",
                width: 1920,
                height: 640,
                smallSrc: "/shop/editorial/fd000000-0000-4000-8000-000000000013-campaign-fdf4bc031b93-640.webp",
                smallWidth: 640,
                signature: '["colorways","freestyle",null,null,"translucent",[["accent","#ffe500"],["props","#ffe500"],["shell","#272726"]]]',
                modelRevision: "flight-october-2026"
            }
        },
        "fd000000-0000-4000-8000-000000000016": {
            world: {
                src: "/shop/editorial/fd000000-0000-4000-8000-000000000016-world-c065fb039550.webp",
                width: 1280,
                height: 853,
                smallSrc: "/shop/editorial/fd000000-0000-4000-8000-000000000016-world-c065fb039550-640.webp",
                smallWidth: 640,
                signature: '["environments",null,null,null,"normal",[["accent","#ead451"],["dark","#343638"],["ground","#85868a"],["light","#b9b9b3"],["sky","#e7b59a"]]]',
                modelRevision: "flight-october-2026",
                mapRevision: 44
            }
        },
        "fd000000-0000-4000-8000-000000000201": {
            fleet: {
                src: "/shop/editorial/fd000000-0000-4000-8000-000000000201-fleet-02ffdf4a4f71.webp",
                width: 1280,
                height: 801,
                smallSrc: "/shop/editorial/fd000000-0000-4000-8000-000000000201-fleet-02ffdf4a4f71-640.webp",
                smallWidth: 640,
                signature: '["colorways","freestyle",null,null,"translucent",[["accent","#b717d3"],["background","#b034ea"],["props","#8eff16"],["shell","#c2ff16"]]]',
                modelRevision: "flight-october-2026"
            }
        },
        "fd000000-0000-4000-8000-000000000202": {
            fleet: {
                src: "/shop/editorial/fd000000-0000-4000-8000-000000000202-fleet-c90270c38f78.webp",
                width: 1280,
                height: 801,
                smallSrc: "/shop/editorial/fd000000-0000-4000-8000-000000000202-fleet-c90270c38f78-640.webp",
                smallWidth: 640,
                signature: '["colorways","freestyle",null,null,"normal",[["accent","#ffab1a"],["background","#ff9b0f"],["props","#25a4f4"],["shell","#045b81"]]]',
                modelRevision: "flight-october-2026"
            }
        },
        "fd000000-0000-4000-8000-000000000203": {
            fleet: {
                src: "/shop/editorial/fd000000-0000-4000-8000-000000000203-fleet-5ed27f4a9e07.webp",
                width: 1280,
                height: 801,
                smallSrc: "/shop/editorial/fd000000-0000-4000-8000-000000000203-fleet-5ed27f4a9e07-640.webp",
                smallWidth: 640,
                signature: '["colorways","freestyle",null,null,"normal",[["accent","#b97d10"],["background","#ff0000"],["props","#fbca03"],["shell","#6a0c0b"]]]',
                modelRevision: "flight-october-2026"
            }
        },
        "fd000000-0000-4000-8000-000000000211": {
            world: {
                src: "/shop/editorial/fd000000-0000-4000-8000-000000000211-world-4dd1dc739b5d.webp",
                width: 1280,
                height: 853,
                smallSrc: "/shop/editorial/fd000000-0000-4000-8000-000000000211-world-4dd1dc739b5d-640.webp",
                smallWidth: 640,
                signature: '["environments",null,null,null,"normal",[["accent","#f0cc19"],["dark","#29358e"],["ground","#cccccc"],["light","#d50707"],["sky","#c6dbe3"]]]',
                modelRevision: "flight-october-2026",
                mapRevision: 44
            }
        },
        "fd000000-0000-4000-8000-000000000212": {
            world: {
                src: "/shop/editorial/fd000000-0000-4000-8000-000000000212-world-6be031d2df1f.webp",
                width: 1280,
                height: 853,
                smallSrc: "/shop/editorial/fd000000-0000-4000-8000-000000000212-world-6be031d2df1f-640.webp",
                smallWidth: 640,
                signature: '["environments",null,null,null,"normal",[["accent","#ff454f"],["dark","#456391"],["ground","#bfdbea"],["light","#f1ffff"],["sky","#274db5"]]]',
                modelRevision: "flight-october-2026",
                mapRevision: 44
            }
        },
        "fd000000-0000-4000-8000-000000000213": {
            world: {
                src: "/shop/editorial/fd000000-0000-4000-8000-000000000213-world-7c7a20674a97.webp",
                width: 1280,
                height: 853,
                smallSrc: "/shop/editorial/fd000000-0000-4000-8000-000000000213-world-7c7a20674a97-640.webp",
                smallWidth: 640,
                signature: '["environments",null,null,null,"normal",[["accent","#c478ba"],["dark","#555558"],["ground","#c6c6c7"],["light","#50d1e2"],["sky","#ffd7c2"]]]',
                modelRevision: "flight-october-2026",
                mapRevision: 44
            }
        },
        "fd000000-0000-4000-8000-000000000214": {
            world: {
                src: "/shop/editorial/fd000000-0000-4000-8000-000000000214-world-709d870e8cdd.webp",
                width: 1280,
                height: 853,
                smallSrc: "/shop/editorial/fd000000-0000-4000-8000-000000000214-world-709d870e8cdd-640.webp",
                smallWidth: 640,
                signature: '["environments",null,null,null,"normal",[["accent","#303030"],["dark","#303030"],["ground","#8a8a8a"],["light","#ffffff"],["sky","#858585"]]]',
                modelRevision: "flight-october-2026",
                mapRevision: 44
            }
        },
        "fd000000-0000-4000-8000-000000000215": {
            world: {
                src: "/shop/editorial/fd000000-0000-4000-8000-000000000215-world-4ee4df67da77.webp",
                width: 1280,
                height: 853,
                smallSrc: "/shop/editorial/fd000000-0000-4000-8000-000000000215-world-4ee4df67da77-640.webp",
                smallWidth: 640,
                signature: '["environments",null,null,null,"normal",[["accent","#ff9b36"],["dark","#e8f5ee"],["ground","#6750ab"],["light","#302151"],["sky","#090712"]]]',
                modelRevision: "flight-october-2026",
                mapRevision: 44
            }
        },
        "ff3d5665-1303-4aa4-8686-0b9ef17e9fe5": {
            world: {
                src: "/shop/editorial/ff3d5665-1303-4aa4-8686-0b9ef17e9fe5-world-5312e5fde42c.webp",
                width: 1280,
                height: 853,
                smallSrc: "/shop/editorial/ff3d5665-1303-4aa4-8686-0b9ef17e9fe5-world-5312e5fde42c-640.webp",
                smallWidth: 640,
                signature: '["environments",null,null,null,"normal",[["accent","#cf3030"],["dark","#1f2123"],["ground","#cccfd6"],["light","#aeb3bb"],["sky","#e7eff3"]]]',
                modelRevision: "flight-october-2026",
                mapRevision: 44
            }
        }
    }
}
, 543016, e => {
    "use strict";
    e.s(["artworkSignature", 0, function(e) {
        return JSON.stringify([e.category, e.drone ?? null, e.chassis ?? null, e.finish ?? null, e.prop_material ?? "normal", Object.entries(e.colors).sort( ([e], [t]) => e.localeCompare(t)).map( ([e,t]) => [e, t.toLowerCase()])])
    }
    ])
}
, 354123, (e, t, r) => {
    t.exports = {
        modelRevision: "flight-october-2026"
    }
}
, 826658, e => {
    "use strict";
    var t = e.i(949636);
    e.s(["previewSpec", () => t.default])
}
, 572349, 798052, e => {
    "use strict";
    let t = new Map;
    e.s(["trackShopEvent", 0, function(e, r) {
        let a = `${e}:${r.kind}:${r.key}`
          , n = Date.now();
        n - (t.get(a) ?? 0) < 6e4 || (t.set(a, n),
        t.size > 500 && t.delete(t.keys().next().value),
        fetch("/api/shop/events", {
            method: "POST",
            credentials: "same-origin",
            keepalive: !0,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: crypto.randomUUID(),
                event: e,
                offer: r
            })
        }).then(e => {
            e.ok || t.delete(a)
        }
        ).catch( () => {
            t.delete(a)
        }
        ))
    }
    ], 572349);
    var r = e.i(271645);
    e.s(["usePackCycle", 0, function(e, t) {
        let[a,n] = (0,
        r.useState)(0);
        return (0,
        r.useEffect)( () => {
            let r, a = e.current?.closest("button");
            if (!a || t < 2)
                return;
            let s = window.matchMedia("(prefers-reduced-motion: reduce)")
              , i = a.matches(":hover")
              , l = a.contains(document.activeElement)
              , o = () => {
                clearInterval(r),
                (i || l) && !s.matches ? r = setInterval( () => n(e => (e + 1) % t), 2e3) : n(0)
            }
              , d = () => {
                i = !0,
                o()
            }
              , c = () => {
                i = !1,
                o()
            }
              , f = () => {
                l = !0,
                o()
            }
              , u = e => {
                l = a.contains(e.relatedTarget),
                o()
            }
            ;
            return a.addEventListener("mouseenter", d),
            a.addEventListener("mouseleave", c),
            a.addEventListener("focusin", f),
            a.addEventListener("focusout", u),
            s.addEventListener("change", o),
            o(),
            () => {
                clearInterval(r),
                a.removeEventListener("mouseenter", d),
                a.removeEventListener("mouseleave", c),
                a.removeEventListener("focusin", f),
                a.removeEventListener("focusout", u),
                s.removeEventListener("change", o)
            }
        }
        , [t, e]),
        a
    }
    ], 798052)
}
]);
