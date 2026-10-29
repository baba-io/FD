(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 763123, e => {
    "use strict";
    var t = e.i(843476)
      , n = e.i(522016)
      , r = e.i(618566)
      , s = e.i(271645);
    let a = (0,
    e.i(475254).default)("menu", [["path", {
        d: "M4 5h16",
        key: "1tepv9"
    }], ["path", {
        d: "M4 12h16",
        key: "1lakjw"
    }], ["path", {
        d: "M4 19h16",
        key: "1djgab"
    }]]);
    var i = e.i(37727)
      , c = e.i(801583);
    let l = [{
        label: "Changelog",
        href: "/changelog"
    }, {
        label: "Contact",
        href: "/contact"
    }];
    function u({href: e, className: s, children: a}) {
        let i = (0,
        r.usePathname)();
        return (0,
        t.jsx)(n.default, {
            href: e,
            "aria-current": i === e || i.startsWith(`${e}/`) ? "page" : void 0,
            className: s,
            children: a
        })
    }
    c.DISCORD_INVITE_URL,
    e.s(["HeaderActions", 0, function({prefetchCta: e=!0}) {
        let c = (0,
        r.usePathname)()
          , [o,d] = (0,
        s.useState)(null)
          , f = o === c;
        return (0,
        s.useEffect)( () => {
            if (f)
                return window.addEventListener("keydown", e),
                () => window.removeEventListener("keydown", e);
            function e(e) {
                "Escape" === e.key && d(null)
            }
        }
        , [f]),
        (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsxs)("div", {
                className: "site-header__actions",
                children: [(0,
                t.jsxs)(n.default, {
                    href: "/sim",
                    className: "site-header__cta",
                    prefetch: e,
                    onClick: () => d(null),
                    children: [(0,
                    t.jsx)("span", {
                        className: "site-header__cta-short",
                        children: "Fly free"
                    }), (0,
                    t.jsx)("span", {
                        className: "site-header__cta-full",
                        children: "Start flying free"
                    })]
                }), (0,
                t.jsx)("button", {
                    type: "button",
                    className: "site-header__menu-btn",
                    onClick: () => d(e => e === c ? null : c),
                    "aria-label": f ? "Close menu" : "Open menu",
                    "aria-expanded": f,
                    "aria-controls": "site-mobile-navigation",
                    children: f ? (0,
                    t.jsx)(i.X, {
                        className: "h-5 w-5"
                    }) : (0,
                    t.jsx)(a, {
                        className: "h-5 w-5"
                    })
                })]
            }), f ? (0,
            t.jsxs)("div", {
                id: "site-mobile-navigation",
                className: "site-header__mobile",
                onClick: () => d(null),
                children: [l.map(e => (0,
                t.jsx)(u, {
                    href: e.href,
                    className: "site-header__mobile-link",
                    children: e.label
                }, e.href)), (0,
                t.jsx)(u, {
                    href: "/about",
                    className: "site-header__mobile-link",
                    children: "About"
                })]
            }) : null]
        })
    }
    , "HeaderNavLink", 0, u], 763123)
}
, 315195, e => {
    "use strict";
    var t = e.i(843476)
      , n = e.i(770703)
      , r = e.i(271645);
    let s = (0,
    n.default)( () => e.A(591249), {
        loadableGenerated: {
            modules: [600038]
        },
        ssr: !1
    })
      , a = null;
    function i() {
        if (null === a)
            try {
                a = !!document.createElement("canvas").getContext("webgl2")
            } catch {
                a = !1
            }
        return a
    }
    let c = () => () => {}
    ;
    function l() {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }
    function u(e) {
        let t = window.matchMedia("(prefers-reduced-motion: reduce)");
        return t.addEventListener("change", e),
        () => t.removeEventListener("change", e)
    }
    function o() {
        return window.matchMedia("(pointer: coarse) and (max-width: 900px)").matches
    }
    function d(e) {
        let t = window.matchMedia("(pointer: coarse) and (max-width: 900px)");
        return t.addEventListener("change", e),
        () => t.removeEventListener("change", e)
    }
    e.s(["LandingShowcase", 0, function({showcase: e}) {
        let n = (0,
        r.useRef)(null)
          , [a,f] = (0,
        r.useState)(!0)
          , [h,m] = (0,
        r.useState)(!1)
          , p = (0,
        r.useSyncExternalStore)(c, i, () => null)
          , j = (0,
        r.useSyncExternalStore)(u, l, () => !0)
          , w = (0,
        r.useSyncExternalStore)(d, o, () => !0);
        (0,
        r.useEffect)( () => (function(e) {
            let t = window.requestIdleCallback;
            if (t) {
                let n = t(e, {
                    timeout: 400
                });
                return () => window.cancelIdleCallback?.(n)
            }
            let n = window.requestAnimationFrame( () => {
                window.requestAnimationFrame(e)
            }
            );
            return () => window.cancelAnimationFrame(n)
        }
        )( () => m(!0)), []),
        (0,
        r.useEffect)( () => {
            let e = n.current;
            if (!e)
                return;
            let t = new IntersectionObserver( ([e]) => {
                f(e.isIntersecting)
            }
            ,{
                rootMargin: "10% 0px",
                threshold: 0
            });
            return t.observe(e),
            () => t.disconnect()
        }
        , []);
        let b = h && !0 === p && !j && !w && null != e;
        return (0,
        t.jsx)("div", {
            ref: n,
            className: "landing-showcase",
            "aria-hidden": "true",
            children: b && e ? (0,
            t.jsx)(s, {
                active: a,
                showcase: e
            }) : null
        })
    }
    ])
}
, 591249, e => {
    e.v(t => Promise.all(["static/chunks/2o7ndwdafyhm-.js", "static/chunks/292gy-80e6vcc.js", "static/chunks/1i2y_r19iq42z.js", "static/chunks/15otzg6kr756f.js", "static/chunks/3lp5p0wicseud.js", "static/chunks/3t2mjbk5qrt6-.js", "static/chunks/2u0-g4yf82e67.js", "static/chunks/0-le19uhefcvu.js", "static/chunks/2uuhahz-1o_xz.js", "static/chunks/3z4c4pqi9nvpy.js", "static/chunks/2aox7liui1njz.js", "static/chunks/0e0ny7a55jco0.js", "static/chunks/1wp9qzvd0_p8z.js", "static/chunks/1kmpkrpm5ipsy.js", "static/chunks/2-c1qopg3qsg9.js", "static/chunks/3vu7vzc2-ncsm.js", "static/chunks/25_61n7-f7wp7.js", "static/chunks/2etrw2ddded7q.js", "static/chunks/2f7u1xea09rp1.js", "static/chunks/33xbnrorohkqa.js", "static/chunks/1uw9kw19zwdl2.js", "static/chunks/0h4a5pq-ztr7u.js", "static/chunks/00fbh8f5_eg82.js", "static/chunks/43asqi0__6iaf.js", "static/chunks/2mu2xdha71gdz.js", "static/chunks/1koxwe80urwfg.js", "static/chunks/1u420jdie5nf7.js", "static/chunks/0tzm_5mpm4qpv.js", "static/chunks/04mpwrsfcmhjv.js", "static/chunks/1t8ptpelfyxob.js"].map(t => e.l(t))).then( () => t(600038)))
}
, 24712, e => {
    "use strict";
    var t = e.i(271645);
    let n = new Set
      , r = null;
    function s(e, t, n, r, s) {
        let a = new URLSearchParams(n.search)
          , i = "";
        if (s)
            i = n.host;
        else
            try {
                i = r ? new URL(r).host : ""
            } catch {
                i = ""
            }
        return {
            path: e,
            screen: t,
            referrer: i.slice(0, 300),
            utm_source: (a.get("utm_source") ?? "").slice(0, 500),
            utm_medium: (a.get("utm_medium") ?? "").slice(0, 500),
            utm_campaign: (a.get("utm_campaign") ?? "").slice(0, 500)
        }
    }
    e.s(["SiteView", 0, function({path: e, screen: a}) {
        return (0,
        t.useEffect)( () => {
            window.location.pathname === e && function(e, t) {
                let a = `${e}:${t}`;
                if (n.has(a))
                    return;
                n.add(a);
                let i = JSON.stringify(s(e, t, window.location, document.referrer, r));
                r = e;
                let c = () => {
                    try {
                        fetch("/api/site/view", {
                            method: "POST",
                            body: i,
                            keepalive: !0,
                            credentials: "omit",
                            headers: {
                                "content-type": "application/json"
                            }
                        }).catch( () => {}
                        )
                    } catch {}
                }
                ;
                "function" == typeof window.requestIdleCallback ? window.requestIdleCallback(c, {
                    timeout: 5e3
                }) : window.setTimeout(c, 1e3)
            }(e, a)
        }
        , [e, a]),
        null
    }
    , "siteViewBody", 0, s])
}
, 90317, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        bindSnapshot: function() {
            return u
        },
        createAsyncLocalStorage: function() {
            return l
        },
        createSnapshot: function() {
            return o
        }
    };
    for (var s in r)
        Object.defineProperty(n, s, {
            enumerable: !0,
            get: r[s]
        });
    let a = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
        value: "E504",
        enumerable: !1,
        configurable: !0
    });
    class i {
        disable() {
            throw a
        }
        getStore() {}
        run() {
            throw a
        }
        exit() {
            throw a
        }
        enterWith() {
            throw a
        }
        static bind(e) {
            return e
        }
    }
    let c = "u" > typeof globalThis && globalThis.AsyncLocalStorage;
    function l() {
        return c ? new c : new i
    }
    function u(e) {
        return c ? c.bind(e) : i.bind(e)
    }
    function o() {
        return c ? c.snapshot() : function(e, ...t) {
            return e(...t)
        }
    }
}
, 242344, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "workAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = (0,
    e.r(90317).createAsyncLocalStorage)()
}
, 563599, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "workAsyncStorage", {
        enumerable: !0,
        get: function() {
            return r.workAsyncStorageInstance
        }
    });
    let r = e.r(242344)
}
, 309885, (e, t, n) => {
    "use strict";
    function r(e) {
        return e.split("/").map(e => encodeURIComponent(e)).join("/")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return r
        }
    })
}
, 667585, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let r = e.r(132061);
    function s({reason: e, children: t}) {
        if ("u" < typeof window)
            throw Object.defineProperty(new r.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: !1,
                configurable: !0
            });
        return t
    }
}
, 652157, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let r = e.r(843476)
      , s = e.r(174080)
      , a = e.r(563599)
      , i = e.r(309885)
      , c = e.r(543369);
    function l({moduleIds: e}) {
        if ("u" > typeof window)
            return null;
        let t = a.workAsyncStorage.getStore();
        if (void 0 === t)
            return null;
        let n = [];
        if (t.reactLoadableManifest && e) {
            let r = t.reactLoadableManifest;
            for (let t of e) {
                if (!r[t])
                    continue;
                let e = r[t].files;
                n.push(...e)
            }
        }
        if (0 === n.length)
            return null;
        let u = (0,
        c.getAssetTokenQuery)();
        return (0,
        r.jsx)(r.Fragment, {
            children: n.map(e => {
                let n = `${t.assetPrefix}/_next/${(0,
                i.encodeURIPath)(e)}${u}`;
                return e.endsWith(".css") ? (0,
                r.jsx)("link", {
                    precedence: "dynamic",
                    href: n,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce
                }, e) : ((0,
                s.preload)(n, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce
                }),
                null)
            }
            )
        })
    }
}
, 869093, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let r = e.r(843476)
      , s = e.r(271645)
      , a = e.r(667585)
      , i = e.r(652157);
    function c(e) {
        return {
            default: e && "default" in e ? e.default : e
        }
    }
    let l = {
        loader: () => Promise.resolve(c( () => null)),
        loading: null,
        ssr: !0
    }
      , u = function(e) {
        let t = {
            ...l,
            ...e
        }
          , n = (0,
        s.lazy)( () => t.loader().then(c))
          , u = t.loading;
        function o(e) {
            let c = u ? (0,
            r.jsx)(u, {
                isLoading: !0,
                pastDelay: !0,
                error: null
            }) : null
              , l = !t.ssr || !!t.loading
              , o = l ? s.Suspense : s.Fragment
              , d = t.ssr ? (0,
            r.jsxs)(r.Fragment, {
                children: ["u" < typeof window ? (0,
                r.jsx)(i.PreloadChunks, {
                    moduleIds: t.modules
                }) : null, (0,
                r.jsx)(n, {
                    ...e
                })]
            }) : (0,
            r.jsx)(a.BailoutToCSR, {
                reason: "next/dynamic",
                children: (0,
                r.jsx)(n, {
                    ...e
                })
            });
            return (0,
            r.jsx)(o, {
                ...l ? {
                    fallback: c
                } : {},
                children: d
            })
        }
        return o.displayName = "LoadableComponent",
        o
    }
}
, 770703, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let r = e.r(555682)._(e.r(869093));
    function s(e, t) {
        let n = {};
        "function" == typeof e && (n.loader = e);
        let s = {
            ...n,
            ...t
        };
        return (0,
        r.default)({
            ...s,
            modules: s.loadableGenerated?.modules
        })
    }
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }),
    Object.assign(n.default, n),
    t.exports = n.default)
}
]);
