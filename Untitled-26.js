(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 770241, e => {
    e.v({
        amount: "currency-module__4Hxmgq__amount",
        credits: "currency-module__4Hxmgq__credits",
        parts: "currency-module__4Hxmgq__parts"
    })
}
, 33156, e => {
    "use strict";
    var t = e.i(843476);
    let i = (0,
    e.i(475254).default)("cog", [["path", {
        d: "M11 10.27 7 3.34",
        key: "16pf9h"
    }], ["path", {
        d: "m11 13.73-4 6.93",
        key: "794ttg"
    }], ["path", {
        d: "M12 22v-2",
        key: "1osdcq"
    }], ["path", {
        d: "M12 2v2",
        key: "tus03m"
    }], ["path", {
        d: "M14 12h8",
        key: "4f43i9"
    }], ["path", {
        d: "m17 20.66-1-1.73",
        key: "eq3orb"
    }], ["path", {
        d: "m17 3.34-1 1.73",
        key: "2wel8s"
    }], ["path", {
        d: "M2 12h2",
        key: "1t8f8n"
    }], ["path", {
        d: "m20.66 17-1.73-1",
        key: "sg0v6f"
    }], ["path", {
        d: "m20.66 7-1.73 1",
        key: "1ow05n"
    }], ["path", {
        d: "m3.34 17 1.73-1",
        key: "nuk764"
    }], ["path", {
        d: "m3.34 7 1.73 1",
        key: "1ulond"
    }], ["circle", {
        cx: "12",
        cy: "12",
        r: "2",
        key: "1c9p78"
    }], ["circle", {
        cx: "12",
        cy: "12",
        r: "8",
        key: "46899m"
    }]]);
    e.i(671112);
    var a = e.i(770241);
    e.s(["CreditsGlyph", 0, function({className: e, size: i=20}) {
        return (0,
        t.jsx)("span", {
            className: `${a.default.credits}${e ? ` ${e}` : ""}`,
            style: 20 === i ? void 0 : {
                "--coin": `${i}px`
            },
            "aria-hidden": "true",
            children: (0,
            t.jsx)("svg", {
                viewBox: "0 0 20 20",
                focusable: "false",
                children: (0,
                t.jsx)("path", {
                    d: "M14.8 7.1 A5.1 5.1 0 1 0 14.8 12.9",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "3.1",
                    strokeLinecap: "butt"
                })
            })
        })
    }
    , "PartsGlyph", 0, function({className: e, size: s=18}) {
        return (0,
        t.jsx)(i, {
            className: `${a.default.parts}${e ? ` ${e}` : ""}`,
            width: s,
            height: s,
            strokeWidth: 2.6,
            "aria-hidden": "true"
        })
    }
    ], 33156)
}
, 526810, 694539, e => {
    "use strict";
    var t = e.i(843476)
      , i = e.i(196121)
      , a = e.i(410351)
      , s = e.i(413873)
      , n = e.i(899257)
      , r = e.i(33156);
    e.i(573798);
    var l = e.i(568204)
      , o = e.i(244144);
    function d({kind: e, size: i="md"}) {
        return "parts" === e ? (0,
        t.jsx)(r.PartsGlyph, {
            size: "sm" === i ? 19 : 48,
            className: `fd-reward-token-parts fd-reward-token--${i}`
        }) : (0,
        t.jsx)("span", {
            className: `fd-reward-token fd-reward-token--${e} fd-reward-token--${i}`,
            "aria-hidden": "true",
            children: "C"
        })
    }
    function c({reward: e}) {
        let i = e.display.image
          , a = i ? (0,
        n.previewUrl)(i) : null;
        return (0,
        t.jsx)("span", {
            className: "fd-reward-thumb",
            "aria-hidden": "true",
            children: a ? (0,
            t.jsx)("img", {
                src: a,
                alt: "",
                width: i.width,
                height: i.height,
                loading: "lazy"
            }) : (0,
            t.jsx)(o.Icon, {
                name: "sparkles",
                size: 22
            })
        })
    }
    function u({rewards: e, claimed: i=!1}) {
        return (0,
        t.jsx)("ul", {
            className: "fd-gift-rows",
            children: e.map(e => (0,
            t.jsxs)("li", {
                className: "fd-gift-row",
                children: ["item" === e.kind ? (0,
                t.jsx)(c, {
                    reward: e
                }) : (0,
                t.jsx)(d, {
                    kind: e.kind
                }), (0,
                t.jsxs)("span", {
                    className: "fd-gift-row__name",
                    children: [(0,
                    t.jsx)("strong", {
                        children: (0,
                        s.rewardLabel)(e, e.display.name)
                    }), "item" === e.kind && (0,
                    t.jsx)("span", {
                        children: "1 item"
                    })]
                }), i && (0,
                t.jsx)("span", {
                    className: "fd-gift-row__check",
                    children: (0,
                    t.jsx)(o.Icon, {
                        name: "check",
                        size: 16,
                        strokeWidth: 3,
                        label: "Claimed"
                    })
                })]
            }, e.id))
        })
    }
    e.s(["GiftRows", 0, u, "RewardChips", 0, function({rewards: e}) {
        let i = e.filter(e => "item" === e.kind).length;
        return (0,
        t.jsxs)(t.Fragment, {
            children: [e.filter(e => "item" !== e.kind).map(e => (0,
            t.jsx)(l.Badge, {
                className: `fd-reward-chip fd-reward-chip--${e.kind}`,
                tone: "credits" === e.kind ? "ink" : "sky",
                icon: (0,
                t.jsx)(d, {
                    kind: e.kind,
                    size: "sm"
                }),
                children: (0,
                s.currencyLabel)(e.kind, e.amount ?? 0)
            }, e.kind)), i > 0 && (0,
            t.jsxs)(l.Badge, {
                className: "fd-reward-chip",
                tone: "chalk",
                icon: (0,
                t.jsx)(o.Icon, {
                    name: "package",
                    size: 24
                }),
                children: [i, " ", 1 === i ? "item" : "items"]
            })]
        })
    }
    ], 694539);
    var m = e.i(498475);
    function f({onBack: e, close: i}) {
        return (0,
        t.jsxs)("div", {
            className: "fd-inbox-detail__nav fdk-on-ink",
            children: [(0,
            t.jsx)(m.Button, {
                className: "fd-inbox-back",
                tone: "ghost",
                size: "md",
                icon: (0,
                t.jsx)(o.Icon, {
                    name: "arrow-left",
                    size: 24
                }),
                onClick: e,
                tabIndex: e ? void 0 : -1,
                children: "Notifications"
            }), i ?? (0,
            t.jsx)("span", {
                className: "fd-inbox-close",
                "aria-hidden": "true",
                children: (0,
                t.jsx)(o.Icon, {
                    name: "close",
                    size: 20
                })
            })]
        })
    }
    e.s(["InboxDetailNav", 0, f, "NotificationArticle", 0, function({title: e, sentAt: n, body: r, rewards: l, claimed: o, footer: d, onBack: c, close: m, titleRef: h}) {
        return (0,
        t.jsxs)("div", {
            className: "fd-inbox-detail fdk-screen fdk-on-chalk",
            children: [(0,
            t.jsx)(f, {
                onBack: c,
                close: m
            }), (0,
            t.jsxs)("div", {
                className: "fd-inbox-detail__scroll",
                children: [(0,
                t.jsx)("h2", {
                    className: "fd-inbox-detail__title",
                    ref: h,
                    tabIndex: -1,
                    children: e || "Untitled"
                }), (0,
                t.jsxs)("p", {
                    className: "fd-inbox-meta",
                    children: [a.NOTIFICATION_SENDER, n ? (0,
                    t.jsxs)(t.Fragment, {
                        children: [" · ", (0,
                        t.jsx)("time", {
                            dateTime: n,
                            children: (0,
                            s.relativeTime)(n)
                        })]
                    }) : (0,
                    t.jsx)(t.Fragment, {
                        children: " · Just now"
                    })]
                }), (0,
                t.jsx)(i.SafeMarkdown, {
                    text: r,
                    variant: "document",
                    className: "fd-inbox-markdown"
                }), l.length > 0 && (0,
                t.jsxs)("section", {
                    className: "fd-inbox-gift",
                    "aria-label": "Your gift",
                    children: [(0,
                    t.jsx)("h3", {
                        className: "fd-inbox-gift__heading",
                        "aria-hidden": "true",
                        children: "Your gift"
                    }), (0,
                    t.jsx)(u, {
                        rewards: l,
                        claimed: o
                    })]
                })]
            }), d && (0,
            t.jsx)("div", {
                className: "fd-inbox-detail__footer",
                children: d
            })]
        })
    }
    ], 526810)
}
, 850321, 795058, e => {
    "use strict";
    var t = e.i(843476)
      , i = e.i(271645)
      , a = e.i(127923)
      , s = e.i(37220)
      , n = e.i(263783)
      , r = e.i(413873)
      , l = e.i(410351)
      , o = e.i(526810)
      , d = e.i(106258)
      , c = e.i(694539);
    e.i(573798);
    var u = e.i(568204)
      , m = e.i(498475)
      , f = e.i(883620)
      , h = e.i(624834)
      , g = e.i(516560)
      , p = e.i(509381)
      , x = e.i(244144);
    let b = {
        all: "All",
        unread: "Unread",
        gifts: "Gifts"
    }
      , j = {
        all: "No notifications yet",
        unread: "No unread notifications",
        gifts: "No gifts waiting"
    };
    function y() {
        return (0,
        t.jsx)(a.Popover.Close, {
            asChild: !0,
            children: (0,
            t.jsx)(m.IconButton, {
                className: "fd-inbox-close",
                label: "Close notifications",
                icon: (0,
                t.jsx)(x.Icon, {
                    name: "close",
                    size: 24
                })
            })
        })
    }
    function k({item: e, onOpen: i}) {
        let a = e.gift && !e.gift.claimed;
        return (0,
        t.jsx)("li", {
            children: (0,
            t.jsxs)("button", {
                type: "button",
                className: "fd-inbox-row",
                "data-id": e.id,
                "data-unread": !e.read || void 0,
                "data-gift-ready": a || void 0,
                onClick: () => i(e.id),
                children: [(0,
                t.jsx)("span", {
                    className: "fd-inbox-row__dot",
                    "aria-hidden": "true"
                }), (0,
                t.jsx)("span", {
                    className: `fd-inbox-row__icon${e.gift ? " fd-inbox-row__icon--gift" : ""}`,
                    "aria-hidden": "true",
                    children: e.gift ? (0,
                    t.jsx)(x.Icon, {
                        name: "gift",
                        size: 24
                    }) : (0,
                    t.jsx)(x.Icon, {
                        name: "info",
                        size: 24
                    })
                }), (0,
                t.jsxs)("span", {
                    className: "fd-inbox-row__text",
                    children: [(0,
                    t.jsxs)("span", {
                        className: "fd-inbox-row__title",
                        children: [!e.read && (0,
                        t.jsx)("span", {
                            className: "sr-only",
                            children: "Unread. "
                        }), e.title]
                    }), (0,
                    t.jsxs)("span", {
                        className: "fd-inbox-meta",
                        children: [l.NOTIFICATION_SENDER, " · ", (0,
                        t.jsx)("time", {
                            dateTime: e.sent_at,
                            children: (0,
                            r.relativeTime)(e.sent_at)
                        })]
                    }), e.excerpt && (0,
                    t.jsx)("span", {
                        className: "fd-inbox-row__excerpt",
                        children: e.excerpt
                    }), e.gift && (0,
                    t.jsxs)("span", {
                        className: "fd-inbox-row__rewards",
                        children: [(0,
                        t.jsx)(c.RewardChips, {
                            rewards: e.gift.rewards
                        }), a ? (0,
                        t.jsx)(u.Badge, {
                            tone: "acid",
                            icon: (0,
                            t.jsx)(x.Icon, {
                                name: "gift",
                                size: 24
                            }),
                            children: "Gift ready"
                        }) : (0,
                        t.jsx)(u.Badge, {
                            tone: "chalk",
                            className: "fd-gift-received",
                            children: "Received"
                        })]
                    })]
                }), (0,
                t.jsx)(x.Icon, {
                    name: "chevron-right",
                    className: "fd-inbox-row__chevron",
                    size: 20
                })]
            })
        })
    }
    function _({saved: e, claim: a, askEmailUpdates: s=!1, onClaim: n, onRetryRefresh: l}) {
        let[o,d] = (0,
        i.useState)(!1)
          , c = a?.status === "claimed" ? a.receipt : e;
        if (c) {
            let e = a?.status === "claimed" ? a.refresh : "ok";
            return (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsxs)("div", {
                    className: "fd-claim-done",
                    role: "status",
                    children: [(0,
                    t.jsx)("span", {
                        className: "fd-claim-done__icon",
                        "aria-hidden": "true",
                        children: (0,
                        t.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            children: (0,
                            t.jsx)("path", {
                                d: "M6 12.5l4 4 8-9"
                            })
                        })
                    }), (0,
                    t.jsxs)("span", {
                        children: [(0,
                        t.jsx)("strong", {
                            children: c.automatic ? "Gift added automatically" : "Gift claimed"
                        }), "pending" === e ? (0,
                        t.jsx)("span", {
                            children: "Refreshing your collection…"
                        }) : "failed" === e ? (0,
                        t.jsxs)("span", {
                            children: ["Your collection didn’t refresh. ", (0,
                            t.jsx)(p.TextLink, {
                                className: "fd-inbox-link-button",
                                onClick: l,
                                children: "Retry refresh"
                            })]
                        }) : (0,
                        t.jsx)("span", {
                            children: c.automatic ? "These Credits were already added to your wallet. No claim is needed." : (0,
                            r.claimedSentence)(c.rewards)
                        })]
                    })]
                }), (0,
                t.jsx)(m.Button, {
                    className: "fd-claim-button",
                    tone: "primary",
                    size: "lg",
                    block: !0,
                    disabled: !0,
                    children: c.automatic ? "Added to wallet" : "Claimed"
                })]
            })
        }
        let u = a?.status === "pending" || a?.status === "checking"
          , h = a?.status === "error" && "UNCONFIRMED" === a.code;
        return (0,
        t.jsxs)(t.Fragment, {
            children: [s && (0,
            t.jsx)(f.Checkbox, {
                className: "fd-claim-consent",
                label: "Yes, email me game updates",
                checked: o,
                disabled: u,
                onChange: d
            }), a?.status === "error" && (0,
            t.jsx)("p", {
                className: "fd-claim-error",
                role: "alert",
                children: a.message
            }), a?.status === "checking" && (0,
            t.jsx)("p", {
                className: "fd-claim-note",
                role: "status",
                children: "Checking your claim…"
            }), (0,
            t.jsx)(m.Button, {
                className: "fd-claim-button",
                tone: "primary",
                size: "lg",
                block: !0,
                trailingIcon: (0,
                t.jsx)(x.Icon, {
                    name: "arrow-up-right",
                    size: 24
                }),
                busy: u,
                disabled: !u && s && !o,
                onClick: () => n(s && o),
                children: a?.status === "pending" ? "Claiming…" : u ? "Checking…" : h ? "Check claim" : "Claim gift"
            })]
        })
    }
    function N({id: e}) {
        let a = (0,
        d.useSimStore)(e => "menu" === e.phase)
          , r = (0,
        n.useNotifications)(t => t.details[e])
          , l = (0,
        n.useNotifications)(t => t.claims[e])
          , c = (0,
        n.useNotifications)(e => e.back)
          , u = (0,
        i.useRef)(null)
          , f = r?.status === "ready";
        if ((0,
        i.useEffect)( () => {
            f && u.current?.focus({
                preventScroll: !0
            })
        }
        , [f]),
        !r || "loading" === r.status)
            return (0,
            t.jsxs)("div", {
                className: "fd-inbox-detail",
                children: [(0,
                t.jsx)(o.InboxDetailNav, {
                    onBack: c,
                    close: (0,
                    t.jsx)(y, {})
                }), (0,
                t.jsx)("div", {
                    className: "fd-inbox-detail__scroll",
                    "aria-busy": "true",
                    children: (0,
                    t.jsx)(h.LoadingState, {
                        title: "Loading notification…"
                    })
                })]
            });
        if ("error" === r.status || !r.data)
            return (0,
            t.jsxs)("div", {
                className: "fd-inbox-detail",
                children: [(0,
                t.jsx)(o.InboxDetailNav, {
                    onBack: c,
                    close: (0,
                    t.jsx)(y, {})
                }), (0,
                t.jsxs)("div", {
                    className: "fd-inbox-state",
                    role: "alert",
                    children: [(0,
                    t.jsx)("p", {
                        children: "Couldn’t open this notification."
                    }), (0,
                    t.jsx)(m.Button, {
                        tone: "ghost",
                        size: "sm",
                        icon: (0,
                        t.jsx)(x.Icon, {
                            name: "rotate",
                            size: 24
                        }),
                        onClick: () => void n.useNotifications.getState().openDetail(e),
                        children: "Retry"
                    })]
                })]
            });
        let g = r.data
          , p = !!g.receipt || l?.status === "claimed";
        return (0,
        t.jsx)(o.NotificationArticle, {
            title: g.title,
            sentAt: g.sent_at,
            body: g.body,
            rewards: g.rewards,
            claimed: p,
            titleRef: u,
            onBack: c,
            close: (0,
            t.jsx)(y, {}),
            footer: g.rewards.length > 0 ? (0,
            t.jsx)(_, {
                saved: g.receipt,
                claim: l,
                askEmailUpdates: "email_updates" === g.claim_requires && !g.email_updates,
                onClaim: t => void n.useNotifications.getState().claim(e, {
                    acceptEmailUpdates: t
                }),
                onRetryRefresh: () => void n.useNotifications.getState().retryRefresh(e)
            }, e) : "friends" === g.action && a ? (0,
            t.jsx)(m.Button, {
                className: "fd-claim-button",
                tone: "primary",
                size: "lg",
                block: !0,
                trailingIcon: (0,
                t.jsx)(x.Icon, {
                    name: "arrow-up-right",
                    size: 24
                }),
                onClick: () => {
                    n.useNotifications.getState().setOpen(!1),
                    s.useMenuScene.getState().setSocialOpen(!0)
                }
                ,
                children: "Review request"
            }) : void 0
        })
    }
    function w({returnTo: e}) {
        let a = (0,
        n.useNotifications)(e => e.filter)
          , s = (0,
        n.useNotifications)(e => e.lists[e.filter])
          , l = (0,
        n.useNotifications)(e => e.summary)
          , o = (0,
        n.useNotifications)(e => e.markingAll)
          , d = (0,
        n.useNotifications)(e => e.scrollTop[e.filter])
          , c = (0,
        i.useRef)(null)
          , [f,_] = (0,
        i.useState)(null)
          , N = n.useNotifications.getState;
        (0,
        i.useLayoutEffect)( () => {
            c.current && (c.current.scrollTop = d),
            e && c.current?.querySelector(`[data-id="${e}"]`)?.focus({
                preventScroll: !0
            })
        }
        , [a, e]);
        let v = e => {
            N().rememberScroll(a, c.current?.scrollTop ?? 0),
            N().openDetail(e)
        }
          , z = l?.unread ?? 0;
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsxs)("div", {
                className: "fd-inbox__header fdk-on-ink",
                children: [(0,
                t.jsx)("span", {
                    className: "fd-inbox__insignia",
                    "aria-hidden": "true",
                    children: (0,
                    t.jsx)(x.Icon, {
                        name: "bell",
                        size: 24
                    })
                }), (0,
                t.jsx)("h2", {
                    className: "fd-inbox__title",
                    children: "Inbox"
                }), z > 0 && (0,
                t.jsx)("span", {
                    className: "fd-inbox__count",
                    "aria-label": `${z} unread`,
                    children: (0,
                    t.jsx)(u.Badge, {
                        tone: "orange",
                        display: !0,
                        children: (0,
                        r.badgeCount)(z)
                    })
                }), (0,
                t.jsx)(y, {})]
            }), (0,
            t.jsxs)("div", {
                className: "fd-inbox__toolbar",
                children: [(0,
                t.jsx)(g.Segmented, {
                    className: "fd-inbox__filters",
                    label: "Show",
                    size: "sm",
                    value: a,
                    options: n.NOTIFICATION_FILTERS.map(e => ({
                        value: e,
                        label: b[e],
                        count: "gifts" === e && (l?.unclaimed ?? 0) > 0 ? l.unclaimed : void 0
                    })),
                    onChange: e => {
                        _(null),
                        N().setFilter(e)
                    }
                }), (0,
                t.jsx)(p.TextLink, {
                    className: "fd-inbox__mark",
                    disabled: !z || o,
                    onClick: async () => _(await N().markAllRead()),
                    children: o ? "Marking…" : "Mark all read"
                })]
            }), f && (0,
            t.jsx)("p", {
                className: "fd-claim-error fd-inbox__error",
                role: "alert",
                children: f
            }), (0,
            t.jsxs)("div", {
                className: "fd-inbox__body",
                ref: c,
                children: ["error" === s.status && (0,
                t.jsxs)("div", {
                    className: `fd-inbox-state${s.items.length ? " fd-inbox-state--inline" : ""}`,
                    role: "alert",
                    children: [(0,
                    t.jsx)("p", {
                        children: s.items.length ? "Couldn’t refresh. These may be out of date." : "Couldn’t load notifications."
                    }), (0,
                    t.jsx)(m.Button, {
                        tone: "ghost",
                        size: "sm",
                        icon: (0,
                        t.jsx)(x.Icon, {
                            name: "rotate",
                            size: 24
                        }),
                        onClick: () => void N().loadList(a),
                        children: "Retry"
                    })]
                }), ("idle" === s.status || "loading" === s.status && !s.items.length) && (0,
                t.jsx)(h.LoadingState, {
                    className: "fd-inbox-loading",
                    title: "Loading notifications…"
                }), "ready" === s.status && !s.items.length && (0,
                t.jsx)(h.EmptyState, {
                    className: "fd-inbox-empty",
                    icon: "gifts" === a ? "gift" : "bell",
                    title: j[a]
                }), s.items.length > 0 && (0,
                t.jsx)("ul", {
                    className: "fd-inbox-list",
                    children: s.items.map(e => (0,
                    t.jsx)(k, {
                        item: e,
                        onOpen: v
                    }, e.id))
                }), s.more && (0,
                t.jsx)(m.Button, {
                    className: "fd-inbox-more",
                    tone: "ghost",
                    size: "sm",
                    block: !0,
                    disabled: s.loadingMore,
                    onClick: () => void N().loadList(a, !0),
                    children: s.loadingMore ? "Loading…" : "Show older"
                })]
            }), l && l.total > 0 && (0,
            t.jsxs)("p", {
                className: "fd-inbox__footer",
                children: [(0,
                t.jsx)(x.Icon, {
                    name: "bell",
                    size: 16
                }), l.total.toLocaleString("en-US"), " ", 1 === l.total ? "notification" : "notifications"]
            })]
        })
    }
    function v() {
        let e = (0,
        n.useNotifications)(e => e.view)
          , i = (0,
        n.useNotifications)(e => e.lastOpened);
        return (0,
        t.jsx)("div", {
            className: "fd-inbox fdk-screen fdk-on-chalk",
            children: "detail" === e.kind ? (0,
            t.jsx)(N, {
                id: e.id
            }) : (0,
            t.jsx)(w, {
                returnTo: i
            })
        })
    }
    function z() {
        let e = (0,
        n.useNotifications)(e => e.summary)
          , t = e?.unread ?? 0
          , i = e?.unclaimed ?? 0
          , a = e ? `Notifications, ${t} unread${i ? `, ${i} ${1 === i ? "gift" : "gifts"} to claim` : ""}` : "Notifications";
        return {
            summary: e,
            unread: t,
            gifts: i,
            label: a
        }
    }
    function S({unread: e, gifts: i}) {
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(x.Icon, {
                name: "bell",
                size: 22,
                strokeWidth: 2.2
            }), e > 0 && (0,
            t.jsx)("span", {
                className: "fd-bell__count",
                "aria-hidden": "true",
                children: (0,
                t.jsx)(u.Badge, {
                    tone: "orange",
                    children: (0,
                    r.badgeCount)(e)
                })
            }), i > 0 && 0 === e && (0,
            t.jsx)("span", {
                className: "fd-bell__gift",
                "aria-hidden": "true",
                children: (0,
                t.jsx)(x.Icon, {
                    name: "gift",
                    size: 11,
                    strokeWidth: 2.6
                })
            })]
        })
    }
    e.s(["NotificationPanel", 0, v], 795058),
    e.s(["FlightNotificationBadge", 0, function() {
        let {unread: e, gifts: i} = z();
        return e || i ? (0,
        t.jsx)("div", {
            className: "fd-flight-bell",
            "aria-hidden": "true",
            children: (0,
            t.jsx)(S, {
                unread: e,
                gifts: i
            })
        }) : null
    }
    , "NotificationBell", 0, function({placement: e}) {
        let {summary: r, unread: l, gifts: o, label: d} = z()
          , c = (0,
        n.useNotifications)(e => e.open)
          , u = (0,
        i.useRef)(null)
          , [m,f] = (0,
        i.useState)(null);
        return (0,
        i.useEffect)( () => () => n.useNotifications.getState().setOpen(!1), []),
        (0,
        i.useEffect)( () => {
            if (!c)
                return;
            let {lists: e, filter: t, loadList: i, view: a} = n.useNotifications.getState();
            "list" === a.kind && e[t].stale && i(t)
        }
        , [c, r]),
        (0,
        t.jsxs)(a.Popover.Root, {
            open: c,
            onOpenChange: e => {
                e && f(u.current?.closest(".sim-shell") ?? null);
                let t = n.useNotifications.getState();
                if (t.setOpen(e),
                !e)
                    return;
                t.refreshSummary();
                let i = t.lists[t.filter];
                ("idle" === i.status || i.stale || "error" === i.status) && t.loadList(t.filter)
            }
            ,
            modal: !0,
            children: [(0,
            t.jsx)(a.Popover.Trigger, {
                asChild: !0,
                children: (0,
                t.jsx)("button", {
                    ref: u,
                    type: "button",
                    className: `fd-bell fd-bell--${e}`,
                    "aria-label": d,
                    children: (0,
                    t.jsx)(S, {
                        unread: l,
                        gifts: o
                    })
                })
            }), (0,
            t.jsx)(a.Popover.Anchor, {
                className: "fd-bell-anchor"
            }), (0,
            t.jsx)(a.Popover.Portal, {
                container: m,
                children: (0,
                t.jsx)(a.Popover.Content, {
                    className: "fd-inbox-popover fdk-screen fdk-on-chalk",
                    side: "bottom",
                    align: "end",
                    sideOffset: 10,
                    collisionPadding: 12,
                    "aria-label": "Notifications",
                    onOpenAutoFocus: e => {
                        let t = e.currentTarget?.querySelector(".fd-inbox__filters [aria-checked=true]");
                        t && (e.preventDefault(),
                        t.focus())
                    }
                    ,
                    onCloseAutoFocus: e => {
                        s.useMenuScene.getState().socialOpen && e.preventDefault()
                    }
                    ,
                    onEscapeKeyDown: e => e.stopPropagation(),
                    onKeyDown: e => e.stopPropagation(),
                    children: (0,
                    t.jsx)(v, {})
                })
            })]
        })
    }
    ], 850321)
}
, 413873, e => {
    "use strict";
    function t(e, t) {
        let i = "credits" === e ? "Credit" : "Part";
        return `${t.toLocaleString("en-US")} ${1 === t ? i : `${i}s`}`
    }
    function i(e, i) {
        return "item" === e.kind ? i : t(e.kind, e.amount ?? 0)
    }
    e.s(["badgeCount", 0, function(e) {
        return e > 99 ? "99+" : String(e)
    }
    , "claimedSentence", 0, function(e) {
        let t = e.map(e => i(e, e.name));
        if (!t.length)
            return "Your gift is in your account.";
        let a = 1 === t.length ? t[0] : `${t.slice(0, -1).join(", ")} and ${t[t.length - 1]}`
          , s = 1 === t.length && ("item" === e[0].kind || 1 === e[0].amount)
          , n = e.reduce( (e, t) => e + ("parts" === t.kind ? t.balance?.pending ?? 0 : 0), 0);
        return `${a} ${s ? "is" : "are"} now in your account.${n > 0 ? ` ${n.toLocaleString("en-US")} Parts wait past your cap until you claim them.` : ""}`
    }
    , "currencyLabel", 0, t, "relativeTime", 0, function(e, t=Date.now()) {
        let i = Date.parse(e.replace(/(\.\d{3})\d+/, "$1"));
        if (!Number.isFinite(i))
            return "";
        let a = Math.floor((t - i) / 6e4);
        if (a < 1)
            return "Just now";
        if (a < 60)
            return `${a} min ago`;
        let s = Math.floor(a / 60);
        if (s < 24)
            return `${s} ${1 === s ? "hour" : "hours"} ago`;
        let n = new Date(i)
          , r = new Date(t)
          , l = Math.round((Date.UTC(r.getFullYear(), r.getMonth(), r.getDate()) - Date.UTC(n.getFullYear(), n.getMonth(), n.getDate())) / 864e5);
        return l <= 1 ? "Yesterday" : l < 7 ? `${l} days ago` : new Intl.DateTimeFormat("en-GB",{
            day: "numeric",
            month: "short",
            ...n.getFullYear() !== r.getFullYear() ? {
                year: "numeric"
            } : {}
        }).format(n)
    }
    , "rewardLabel", 0, i])
}
, 410351, e => {
    "use strict";
    e.s(["NOTIFICATION_LIMITS", 0, {
        title: 120,
        body: 2e4,
        excerpt: 140,
        rewards: 10,
        selected: 100,
        credits: 1e5,
        parts: 1e4
    }, "NOTIFICATION_SENDER", 0, "Flight Division"])
}
, 658342, e => {
    "use strict";
    var t = e.i(50270);
    let i = t.z.enum(["credits", "parts", "item"])
      , a = t.z.object({
        path: t.z.string(),
        width: t.z.number(),
        height: t.z.number(),
        smallPath: t.z.string().optional(),
        smallWidth: t.z.number().optional()
    })
      , s = t.z.object({
        name: t.z.string(),
        category: t.z.string().nullish(),
        rarity: t.z.string().nullish(),
        drone: t.z.string().nullish(),
        image: a.nullish()
    })
      , n = t.z.object({
        id: t.z.string().uuid(),
        kind: i,
        amount: t.z.number().int().nullable(),
        item_id: t.z.string().uuid().nullable(),
        display: s
    })
      , r = t.z.object({
        kind: i,
        amount: t.z.number().int().nullable(),
        name: t.z.string()
    })
      , l = t.z.object({
        unread: t.z.number().int().nonnegative(),
        unclaimed: t.z.number().int().nonnegative(),
        total: t.z.number().int().nonnegative(),
        boundary: t.z.string()
    })
      , o = t.z.object({
        id: t.z.string().uuid(),
        title: t.z.string(),
        excerpt: t.z.string(),
        sent_at: t.z.string(),
        read: t.z.boolean(),
        gift: t.z.object({
            claimed: t.z.boolean(),
            rewards: t.z.array(r)
        }).nullable()
    })
      , d = t.z.object({
        items: t.z.array(o),
        more: t.z.boolean(),
        summary: l
    })
      , c = t.z.object({
        claimed_at: t.z.string(),
        automatic: t.z.boolean().optional(),
        rewards: t.z.array(t.z.object({
            id: t.z.string().uuid(),
            kind: i,
            name: t.z.string(),
            amount: t.z.number().int().optional(),
            item_id: t.z.string().uuid().optional(),
            already_owned: t.z.boolean().optional(),
            balance: t.z.object({
                applied: t.z.number().int().optional(),
                pending: t.z.number().int().optional()
            }).passthrough().optional()
        })),
        credits: t.z.object({
            before: t.z.number().int(),
            after: t.z.number().int()
        }).nullish()
    })
      , u = t.z.object({
        action: t.z.literal("friends").nullish(),
        claim_requires: t.z.literal("email_updates").nullish(),
        email_updates: t.z.boolean().nullish(),
        id: t.z.string().uuid(),
        title: t.z.string(),
        body: t.z.string(),
        sent_at: t.z.string(),
        read_at: t.z.string().nullable(),
        claimed_at: t.z.string().nullable(),
        receipt: c.nullable(),
        rewards: t.z.array(n)
    })
      , m = t.z.object({
        receipt: c,
        inventory: t.z.object({
            balance: t.z.number(),
            items: t.z.array(t.z.unknown())
        }).passthrough(),
        repeat: t.z.boolean()
    });
    e.s(["claimResponseSchema", 0, m, "detailSchema", 0, u, "inboxPageSchema", 0, d, "rewardDisplaySchema", 0, s, "rewardSchema", 0, n, "summarySchema", 0, l])
}
, 263783, e => {
    "use strict";
    var t = e.i(768834)
      , i = e.i(920755)
      , a = e.i(894969)
      , s = e.i(451598)
      , n = e.i(658342);
    let r = () => ({
        items: [],
        more: !1,
        status: "idle",
        loadingMore: !1,
        stale: !1
    })
      , l = () => ({
        all: r(),
        unread: r(),
        gifts: r()
    })
      , o = 0
      , d = null
      , c = 0
      , u = 0
      , m = e => new Promise(t => setTimeout(t, e));
    async function f(e, t) {
        try {
            return await (0,
            i.createClient)().rpc(e, t).abortSignal(AbortSignal.timeout(15e3))
        } catch (e) {
            return {
                data: null,
                error: {
                    message: e instanceof Error ? e.message : "Network error"
                }
            }
        }
    }
    let h = new Set(["P0001", "P0002", "42501"]);
    function g(e, t) {
        return e?.code === "P0002" ? {
            message: "This notification isn’t available."
        } : e && h.has(e.code ?? "") ? {
            message: e.message,
            code: e.hint || void 0
        } : {
            message: t
        }
    }
    let p = (0,
    t.create)( (e, t) => {
        let i = (i, a) => {
            if (a < u)
                return;
            u = a;
            let {boundary: s, ...n} = i
              , r = t().summary;
            r && r.total === n.total && r.unread === n.unread && r.unclaimed === n.unclaimed ? e({
                boundary: s
            }) : e(e => ({
                summary: n,
                boundary: s,
                lists: Object.fromEntries(Object.entries(e.lists).map( ([e,t]) => [e, {
                    ...t,
                    stale: "idle" !== t.status
                }]))
            }))
        }
          , r = (t, i) => e(e => ({
            lists: Object.fromEntries(Object.entries(e.lists).map( ([e,a]) => [e, {
                ...a,
                items: a.items.flatMap(a => a.id === t ? i(a, e) ?? [] : [a])
            }]))
        }))
          , p = (t, i) => e(e => ({
            claims: {
                ...e.claims,
                [t]: i
            }
        }));
        async function x(e, i) {
            let n = o;
            if (i && a.useInventory.getState().adopt(i) || await a.useInventory.getState().refresh(),
            s.useCreditRecord.getState().refresh(),
            n !== o)
                return;
            let r = t().claims[e];
            r?.status === "claimed" && p(e, {
                ...r,
                refresh: "error" === a.useInventory.getState().status ? "failed" : "ok"
            })
        }
        return {
            open: !1,
            view: {
                kind: "list"
            },
            lastOpened: null,
            filter: "all",
            scrollTop: {
                all: 0,
                unread: 0,
                gifts: 0
            },
            summary: null,
            boundary: null,
            lists: l(),
            details: {},
            claims: {},
            markingAll: !1,
            setOpen: t => e(t ? {
                open: t,
                lastOpened: null
            } : {
                open: t,
                view: {
                    kind: "list"
                }
            }),
            setFilter: i => {
                e({
                    filter: i,
                    view: {
                        kind: "list"
                    }
                });
                let a = t().lists[i];
                ("idle" === a.status || a.stale) && t().loadList(i)
            }
            ,
            rememberScroll: (t, i) => e(e => ({
                scrollTop: {
                    ...e.scrollTop,
                    [t]: i
                }
            })),
            back: () => e({
                view: {
                    kind: "list"
                }
            }),
            reset: t => {
                o++,
                d = t,
                c = 0,
                u = 0,
                e({
                    open: !1,
                    view: {
                        kind: "list"
                    },
                    lastOpened: null,
                    filter: "all",
                    scrollTop: {
                        all: 0,
                        unread: 0,
                        gifts: 0
                    },
                    summary: null,
                    boundary: null,
                    lists: l(),
                    details: {},
                    claims: {},
                    markingAll: !1
                })
            }
            ,
            refreshSummary: async e => {
                if (!d)
                    return;
                let t = o
                  , a = ++c
                  , s = e ? await Promise.resolve(e).catch( () => null) : await f("notification_summary").then( ({data: e, error: t}) => t ? null : e);
                if (t !== o)
                    return;
                let r = n.summarySchema.safeParse(s);
                r.success && i(r.data, a)
            }
            ,
            loadList: async (a, s=!1) => {
                let r = t().lists[a];
                if (!d || r.loadingMore || "loading" === r.status && !s)
                    return;
                let l = o
                  , u = ++c
                  , m = s ? r.items[r.items.length - 1] : void 0;
                if (s && !m)
                    return;
                e(e => ({
                    lists: {
                        ...e.lists,
                        [a]: s ? {
                            ...r,
                            loadingMore: !0
                        } : {
                            ...r,
                            status: "loading"
                        }
                    }
                }));
                let {data: h, error: g} = await f("notification_inbox", {
                    p_filter: a,
                    p_before_sent: m?.sent_at ?? null,
                    p_before_id: m?.id ?? null
                });
                if (l !== o)
                    return;
                let p = n.inboxPageSchema.safeParse(h);
                g || !p.success ? e(e => ({
                    lists: {
                        ...e.lists,
                        [a]: {
                            ...e.lists[a],
                            status: "error",
                            loadingMore: !1
                        }
                    }
                })) : (e(e => ({
                    lists: {
                        ...e.lists,
                        [a]: {
                            items: s ? [...e.lists[a].items, ...p.data.items.filter(t => !e.lists[a].items.some(e => e.id === t.id))] : p.data.items,
                            more: p.data.more,
                            status: "ready",
                            loadingMore: !1,
                            stale: !1
                        }
                    }
                })),
                i(p.data.summary, u))
            }
            ,
            openDetail: async a => {
                if (e({
                    view: {
                        kind: "detail",
                        id: a
                    },
                    lastOpened: a
                }),
                t().details[a]?.status === "ready")
                    return;
                let s = o;
                e(e => ({
                    details: {
                        ...e.details,
                        [a]: {
                            status: "loading"
                        }
                    }
                }));
                let {data: l, error: d} = await f("notification_detail", {
                    p_id: a
                });
                if (s !== o)
                    return;
                let u = n.detailSchema.safeParse(l);
                if (d || !u.success)
                    return void e(e => ({
                        details: {
                            ...e.details,
                            [a]: {
                                status: "error"
                            }
                        }
                    }));
                if (e(e => ({
                    details: {
                        ...e.details,
                        [a]: {
                            status: "ready",
                            data: u.data
                        }
                    }
                })),
                u.data.read_at)
                    return;
                let m = ++c
                  , h = await f("notification_mark_read", {
                    p_id: a
                });
                if (s !== o || h.error)
                    return;
                r(a, e => ({
                    ...e,
                    read: !0
                }));
                let g = n.summarySchema.safeParse(h.data);
                g.success && i(g.data, m)
            }
            ,
            markAllRead: async () => {
                let a = t().boundary;
                if (!a || t().markingAll)
                    return null;
                let s = o
                  , r = ++c;
                e({
                    markingAll: !0
                });
                try {
                    let {data: e, error: l} = await f("notification_mark_all_read", {
                        p_boundary: a
                    });
                    if (s !== o)
                        return null;
                    let d = n.summarySchema.safeParse(e);
                    if (l || !d.success)
                        return g(l, "Couldn’t mark notifications read. Try again.").message;
                    return i(d.data, r),
                    t().loadList(t().filter),
                    null
                } finally {
                    s === o && e({
                        markingAll: !1
                    })
                }
            }
            ,
            claim: async (i, a) => {
                let s = t().claims[i];
                if (s && "error" !== s.status)
                    return;
                let l = o;
                p(i, {
                    status: "pending"
                });
                let d = t().details[i]?.data;
                if (d?.claim_requires === "email_updates" && !d.email_updates) {
                    if (!a?.acceptEmailUpdates)
                        return void p(i, {
                            status: "error",
                            code: "EMAIL_UPDATES_REQUIRED",
                            message: "Tick the email updates box to claim this gift."
                        });
                    let {error: t} = await f("email_updates_subscribe", {
                        p_source: "gift"
                    });
                    if (l !== o)
                        return;
                    if (t)
                        return void p(i, {
                            status: "error",
                            ...g(t, "Couldn’t turn on email updates. Try again.")
                        });
                    e(e => {
                        let t = e.details[i];
                        return {
                            details: t?.data ? {
                                ...e.details,
                                [i]: {
                                    ...t,
                                    data: {
                                        ...t.data,
                                        email_updates: !0
                                    }
                                }
                            } : e.details
                        }
                    }
                    )
                }
                for (let a = 0; a < 4; a++) {
                    if (a && await m(800 * 2 ** a),
                    l !== o)
                        return;
                    let {data: s, error: d} = await f("notification_claim", {
                        p_id: i
                    });
                    if (l !== o)
                        return;
                    if (d && !h.has(d.code ?? "")) {
                        p(i, {
                            status: "checking"
                        });
                        continue
                    }
                    let c = n.claimResponseSchema.safeParse(s);
                    if (d || !c.success) {
                        let t = g(d, "Couldn’t claim this gift. Try again.");
                        "EMAIL_UPDATES_REQUIRED" === t.code && e(e => {
                            let t = e.details[i];
                            return {
                                details: t?.data ? {
                                    ...e.details,
                                    [i]: {
                                        ...t,
                                        data: {
                                            ...t.data,
                                            email_updates: !1
                                        }
                                    }
                                } : e.details
                            }
                        }
                        ),
                        p(i, {
                            status: "error",
                            ...t
                        });
                        return
                    }
                    let {receipt: u, inventory: b} = c.data;
                    e(e => {
                        let t = e.details[i];
                        return {
                            details: t?.data ? {
                                ...e.details,
                                [i]: {
                                    ...t,
                                    data: {
                                        ...t.data,
                                        claimed_at: u.claimed_at,
                                        receipt: u,
                                        read_at: t.data.read_at ?? u.claimed_at
                                    }
                                }
                            } : e.details
                        }
                    }
                    ),
                    r(i, (e, t) => "gifts" === t ? null : {
                        ...e,
                        read: !0,
                        gift: e.gift ? {
                            ...e.gift,
                            claimed: !0
                        } : null
                    }),
                    p(i, {
                        status: "claimed",
                        receipt: u,
                        refresh: "pending"
                    }),
                    t().refreshSummary(),
                    await x(i, b);
                    return
                }
                l === o && p(i, {
                    status: "error",
                    code: "UNCONFIRMED",
                    message: "We couldn’t confirm your claim. Check your connection, then check again."
                })
            }
            ,
            retryRefresh: async e => {
                let i = t().claims[e];
                i?.status === "claimed" && (p(e, {
                    ...i,
                    refresh: "pending"
                }),
                await x(e, null))
            }
        }
    }
    );
    e.s(["NOTIFICATION_FILTERS", 0, ["all", "unread", "gifts"], "useNotifications", 0, p])
}
, 949636, (e, t, i) => {
    t.exports = {
        version: "shop-photos-v10",
        fleetRevision: "division-fleet-5",
        bucket: "shop-previews",
        environment: [{
            key: "wide",
            width: 1440,
            height: 810
        }, {
            key: "card",
            width: 960,
            height: 720
        }, {
            key: "portrait",
            width: 720,
            height: 900
        }],
        product: {
            width: 960,
            height: 640
        },
        campaign: {
            width: 1400,
            height: 560
        },
        drones: ["freestyle", "whoop", "cinewhoop", "long-range", "racer"]
    }
}
, 899257, e => {
    "use strict";
    var t = e.i(949636);
    e.s(["previewKey", 0, function(e, t, i=!1, a=!1, s="collection") {
        return "colorways" === e.category && a ? "campaign" === s ? "fleet-campaign" : "fleet" : "environments" === e.category ? "wide" : `${"colorways" === e.category ? t ?? e.drone ?? "freestyle" : "product"}${i ? "-transparent" : ""}`
    }
    , "previewUrl", 0, function(e) {
        return `https://flightdivision.com/storage/v1/object/public/${t.default.bucket}/${e.path}`
    }
    , "previewVariants", 0, function(e) {
        var i = t.default;
        if ("environments" === e.category)
            return i.environment;
        if ("colorways" === e.category)
            return [{
                key: "fleet",
                fleet: !0,
                ...i.product
            }, {
                key: "fleet-campaign",
                fleet: !0,
                fleetLayout: "campaign",
                ...i.campaign
            }, ...i.drones.flatMap(e => [{
                key: e,
                drone: e,
                ...i.product
            }, {
                key: `${e}-transparent`,
                drone: e,
                transparent: !0,
                ...i.product
            }])];
        if ("trails" === e.category)
            return [{
                key: "product",
                ...i.product
            }, {
                key: "product-transparent",
                transparent: !0,
                ...i.product
            }];
        throw Error(`Unsupported photograph category: ${e.category}`)
    }
    ], 899257)
}
]);
