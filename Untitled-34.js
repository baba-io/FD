(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 466465, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(657688)
      , n = e.i(144851);
    let i = {
        src: e.i(600239).default,
        width: 2099,
        height: 403,
        blurWidth: 8,
        blurHeight: 2,
        blurDataURL: "data:image/webp;base64,UklGRtwAAABXRUJQVlA4TNAAAAAvB0AAEM1VICICHgggAQAAAIDBMAwADGBPAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAggEPAADAAxkmAAAAADj/XQAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAIAAAOAAAAAEPBASGgAAAIDzPwwAACAAAAIAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAA8h4IIAEAAADA+QfDAwADxj8AAAAAAAAAAAAAAAAAAADAAGAAAAAAAAwAEAA5+5+3y84putAwAQf+H31OoElF4KXsKKgB"
    };
    var o = e.i(801583)
      , a = e.i(647163);
    let l = {
        light: n.default,
        dark: i
    };
    e.s(["BrandLogo", 0, function({on: e, className: n, priority: i}) {
        let s = l[e];
        return (0,
        t.jsx)(r.default, {
            src: s,
            alt: o.SITE_NAME,
            className: (0,
            a.cn)("h-7 w-auto", n),
            loading: i ? "eager" : "lazy",
            fetchPriority: i ? "high" : "auto"
        })
    }
    ], 466465)
}
, 157430, e => {
    e.v({
        badge: "early-access-badge-module__2FgpXG__badge",
        lockup: "early-access-badge-module__2FgpXG__lockup"
    })
}
, 13784, e => {
    "use strict";
    var t = e.i(843476)
      , r = e.i(157430);
    e.s(["EarlyAccessBadge", 0, function() {
        return (0,
        t.jsx)("span", {
            className: r.default.badge,
            children: "EARLY ACCESS"
        })
    }
    ])
}
, 801583, e => {
    "use strict";
    e.s(["DISCORD_INVITE_URL", 0, "https://discord.gg/j5QzCzeC6d", "SITE_INITIALS", 0, "FD", "SITE_NAME", 0, "Flight Division"])
}
, 108354, e => {
    "use strict";
    e.s(["COMPANY_NAME", 0, "Logique Labs, Inc", "SUPPORT_EMAIL", 0, "contact@logique.io"])
}
, 439225, e => {
    "use strict";
    e.s(["EMAIL_ASK_BODY", 0, "We’ll email you when big updates land, and later when something happens to your records or your crew. Never more than two a week. Unsubscribe any time.", "EMAIL_ASK_TITLE", 0, "Get the news first."])
}
, 207670, e => {
    "use strict";
    function t() {
        for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
            (e = arguments[r]) && (t = function e(t) {
                var r, n, i = "";
                if ("string" == typeof t || "number" == typeof t)
                    i += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t)) {
                        var o = t.length;
                        for (r = 0; r < o; r++)
                            t[r] && (n = e(t[r])) && (i && (i += " "),
                            i += n)
                    } else
                        for (n in t)
                            t[n] && (i && (i += " "),
                            i += n);
                return i
            }(e)) && (n && (n += " "),
            n += t);
        return n
    }
    e.s(["clsx", 0, t, "default", 0, t])
}
, 475254, e => {
    "use strict";
    var t = e.i(271645);
    let r = (...e) => e.filter( (e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
      , n = e => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    ;
    var i = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let o = (0,
    t.forwardRef)( ({color: e="currentColor", size: n=24, strokeWidth: o=2, absoluteStrokeWidth: a, className: l="", children: s, iconNode: u, ...c}, d) => (0,
    t.createElement)("svg", {
        ref: d,
        ...i,
        width: n,
        height: n,
        stroke: e,
        strokeWidth: a ? 24 * Number(o) / Number(n) : o,
        className: r("lucide", l),
        ...!s && !(e => {
            for (let t in e)
                if (t.startsWith("aria-") || "role" === t || "title" === t)
                    return !0;
            return !1
        }
        )(c) && {
            "aria-hidden": "true"
        },
        ...c
    }, [...u.map( ([e,r]) => (0,
    t.createElement)(e, r)), ...Array.isArray(s) ? s : [s]]));
    e.s(["default", 0, (e, i) => {
        let a = (0,
        t.forwardRef)( ({className: a, ...l}, s) => (0,
        t.createElement)(o, {
            ref: s,
            iconNode: i,
            className: r(`lucide-${n(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, `lucide-${e}`, a),
            ...l
        }));
        return a.displayName = n(e),
        a
    }
    ], 475254)
}
, 299023, e => {
    "use strict";
    let t = (0,
    e.i(475254).default)("minus", [["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }]]);
    e.s(["Minus", 0, t], 299023)
}
, 522016, (e, t, r) => {
    "use strict";
    e.i(247167),
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return m
        },
        useLinkStatus: function() {
            return b
        }
    };
    for (var i in n)
        Object.defineProperty(r, i, {
            enumerable: !0,
            get: n[i]
        });
    let o = e.r(190809)
      , a = e.r(843476)
      , l = o._(e.r(271645))
      , s = e.r(195057)
      , u = e.r(8372)
      , c = e.r(818581)
      , d = e.r(718967)
      , f = e.r(405550)
      , A = e.r(388540)
      , p = e.r(91949)
      , g = e.r(573668)
      , h = e.r(509396);
    function m(t) {
        var r;
        let n, i, o, [m,b] = (0,
        l.useOptimistic)(p.IDLE_LINK_STATUS), v = (0,
        l.useRef)(null), {href: _, as: w, children: E, prefetch: P=null, passHref: S, replace: C, shallow: O, scroll: j, onClick: x, onMouseEnter: R, onTouchStart: I, legacyBehavior: M=!1, onNavigate: T, transitionTypes: D, ref: L, unstable_dynamicOnHover: k, ...N} = t;
        n = E,
        M && ("string" == typeof n || "number" == typeof n) && (n = (0,
        a.jsx)("a", {
            children: n
        }));
        let $ = l.default.useContext(u.AppRouterContext)
          , z = !1 !== P
          , U = !1 === P ? "none" : !0 === P ? "full" : "auto"
          , B = "none" !== U ? "auto" === U ? h.FetchStrategy.PPR : h.FetchStrategy.Full : h.FetchStrategy.PPR
          , F = "string" == typeof (r = w || _) ? r : (0,
        s.formatUrl)(r);
        if (M) {
            if (n?.$$typeof === Symbol.for("react.lazy"))
                throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                    value: "E863",
                    enumerable: !1,
                    configurable: !0
                });
            i = l.default.Children.only(n)
        }
        let W = M ? i && "object" == typeof i && i.ref : L, q, G = l.default.useCallback(e => (null !== $ && (v.current = (0,
        p.mountLinkInstance)(e, F, $, B, z, b, q)),
        () => {
            v.current && ((0,
            p.unmountLinkForCurrentNavigation)(v.current),
            v.current = null),
            (0,
            p.unmountPrefetchableInstance)(e)
        }
        ), [z, F, $, B, b, q]), Q = {
            ref: (0,
            c.useMergedRef)(G, W),
            onClick(t) {
                M || "function" != typeof x || x(t),
                M && i.props && "function" == typeof i.props.onClick && i.props.onClick(t),
                !$ || t.defaultPrevented || function(t, r, n, i, o, a, s, u="none") {
                    if ("u" > typeof window) {
                        let c, {nodeName: d} = t.currentTarget;
                        if ("A" === d.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download"))
                            return;
                        if (!(0,
                        g.isLocalURL)(r)) {
                            i && (t.preventDefault(),
                            location.replace(r));
                            return
                        }
                        if (t.preventDefault(),
                        a) {
                            let e = !1;
                            if (a({
                                preventDefault: () => {
                                    e = !0
                                }
                            }),
                            e)
                                return
                        }
                        let {dispatchNavigateAction: f} = e.r(699781);
                        l.default.startTransition( () => {
                            f(r, i ? "replace" : "push", !1 === o ? A.ScrollBehavior.NoScroll : A.ScrollBehavior.Default, n.current, s, u)
                        }
                        )
                    }
                }(t, F, v, C, j, T, D, U)
            },
            onMouseEnter(e) {
                M || "function" != typeof R || R(e),
                M && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(e),
                $ && z && (0,
                p.onNavigationIntent)(e.currentTarget, !0 === k)
            },
            onTouchStart: function(e) {
                M || "function" != typeof I || I(e),
                M && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(e),
                $ && z && (0,
                p.onNavigationIntent)(e.currentTarget, !0 === k)
            }
        };
        return (0,
        d.isAbsoluteUrl)(F) ? Q.href = F : M && !S && ("a" !== i.type || "href" in i.props) || (Q.href = (0,
        f.addBasePath)(F)),
        o = M ? l.default.cloneElement(i, Q) : (0,
        a.jsx)("a", {
            ...N,
            ...Q,
            children: n
        }),
        (0,
        a.jsx)(y.Provider, {
            value: m,
            children: o
        })
    }
    let y = (0,
    l.createContext)(p.IDLE_LINK_STATUS)
      , b = () => (0,
    l.useContext)(y);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 605500, (e, t, r) => {
    "use strict";
    e.i(247167),
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return _
        }
    });
    let n = e.r(555682)
      , i = e.r(190809)
      , o = e.r(843476)
      , a = i._(e.r(271645))
      , l = n._(e.r(174080))
      , s = n._(e.r(325633))
      , u = e.r(908927)
      , c = e.r(987690)
      , d = e.r(918556)
      , f = e.r(65856)
      , A = n._(e.r(1948))
      , p = e.r(818581)
      , g = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1
    };
    function h(e, t, r, n, i, o, a) {
        let l = e?.src;
        e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l,
        ("decode" in e ? e.decode() : Promise.resolve()).catch( () => {}
        ).then( () => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && i(!0),
                r?.current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let n = !1
                      , i = !1;
                    r.current({
                        ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => n,
                        isPropagationStopped: () => i,
                        persist: () => {}
                        ,
                        preventDefault: () => {
                            n = !0,
                            t.preventDefault()
                        }
                        ,
                        stopPropagation: () => {
                            i = !0,
                            t.stopPropagation()
                        }
                    })
                }
                n?.current && n.current(e)
            }
        }
        ))
    }
    function m(e) {
        return a.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let y = "u" < typeof window ? a.useEffect : a.useLayoutEffect
      , b = (0,
    a.forwardRef)( ({src: e, srcSet: t, sizes: r, height: n, width: i, decoding: l, className: s, style: u, fetchPriority: c, placeholder: d, loading: f, unoptimized: A, fill: g, onLoadRef: b, onLoadingCompleteRef: v, setBlurComplete: _, setShowAltText: w, sizesInput: E, onLoad: P, onError: S, ...C}, O) => {
        let j = (0,
        a.useRef)(!1)
          , x = (0,
        a.useRef)(null);
        y( () => {
            let {current: e} = j
              , {current: t} = x;
            e || null === t || (S && (t.src = t.src),
            t.complete && h(t, d, b, v, _, A, E),
            j.current = !0)
        }
        , [e, d, b, v, S, A, E]);
        let R = (0,
        p.useMergedRef)(O, x);
        return (0,
        o.jsx)("img", {
            ...C,
            ...m(c),
            loading: f,
            width: i,
            height: n,
            decoding: l,
            "data-nimg": g ? "fill" : "1",
            className: s,
            style: u,
            sizes: r,
            srcSet: t,
            src: e,
            ref: R,
            onLoad: e => {
                h(e.currentTarget, d, b, v, _, A, E)
            }
            ,
            onError: e => {
                w(!0),
                "empty" !== d && _(!0),
                S && S(e)
            }
        })
    }
    );
    function v({isAppRouter: e, imgAttributes: t}) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...m(t.fetchPriority)
        };
        return e && l.default.preload ? (l.default.preload(t.src, r),
        null) : (0,
        o.jsx)(s.default, {
            children: (0,
            o.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let _ = (0,
    a.forwardRef)( (e, t) => {
        let r = (0,
        a.useContext)(f.RouterContext)
          , n = (0,
        a.useContext)(d.ImageConfigContext)
          , i = (0,
        a.useMemo)( () => {
            let e = g || n || c.imageConfigDefault
              , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
              , r = e.deviceSizes.sort( (e, t) => e - t)
              , i = e.qualities?.sort( (e, t) => e - t);
            return {
                ...e,
                allSizes: t,
                deviceSizes: r,
                qualities: i,
                localPatterns: "u" < typeof window ? n?.localPatterns : e.localPatterns
            }
        }
        , [n])
          , {onLoad: l, onLoadingComplete: s} = e
          , p = (0,
        a.useRef)(l);
        (0,
        a.useEffect)( () => {
            p.current = l
        }
        , [l]);
        let h = (0,
        a.useRef)(s);
        (0,
        a.useEffect)( () => {
            h.current = s
        }
        , [s]);
        let[m,y] = (0,
        a.useState)(!1)
          , [_,w] = (0,
        a.useState)(!1)
          , {props: E, meta: P} = (0,
        u.getImgProps)(e, {
            defaultLoader: A.default,
            imgConf: i,
            blurComplete: m,
            showAltText: _
        });
        return (0,
        o.jsxs)(o.Fragment, {
            children: [(0,
            o.jsx)(b, {
                ...E,
                unoptimized: P.unoptimized,
                placeholder: P.placeholder,
                fill: P.fill,
                onLoadRef: p,
                onLoadingCompleteRef: h,
                setBlurComplete: y,
                setShowAltText: w,
                sizesInput: e.sizes,
                ref: t
            }), P.preload ? (0,
            o.jsx)(v, {
                isAppRouter: !r,
                imgAttributes: E
            }) : null]
        })
    }
    );
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 818581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(271645);
    function i(e, t) {
        let r = (0,
        n.useRef)(null)
          , i = (0,
        n.useRef)(null);
        return (0,
        n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null,
                e());
                let t = i.current;
                t && (i.current = null,
                t())
            } else
                e && (r.current = o(e, n)),
                t && (i.current = o(t, n))
        }
        , [e, t])
    }
    function o(e, t) {
        if ("function" != typeof e)
            return e.current = t,
            () => {
                e.current = null
            }
            ;
        {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 670965, (e, t, r) => {
    "use strict";
    function n(e, t) {
        let r = e || 75;
        return t?.qualities?.length ? t.qualities.reduce( (e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, t.qualities[0]) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}
, 908927, (e, t, r) => {
    "use strict";
    e.i(247167),
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(543369)
      , i = e.r(488143)
      , o = e.r(987690)
      , a = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function l(e) {
        return void 0 !== e.default
    }
    function s(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }
    function u({src: e, sizes: t, unoptimized: r=!1, priority: c=!1, preload: d=!1, loading: f, className: A, quality: p, width: g, height: h, fill: m=!1, style: y, overrideSrc: b, onLoad: v, onLoadingComplete: _, placeholder: w="empty", blurDataURL: E, fetchPriority: P, decoding: S="async", layout: C, objectFit: O, objectPosition: j, lazyBoundary: x, lazyRoot: R, ...I}, M) {
        var T;
        let D, L, k, {imgConf: N, showAltText: $, blurComplete: z, defaultLoader: U} = M, B = N || o.imageConfigDefault;
        if ("allSizes" in B)
            D = B;
        else {
            let e = [...B.deviceSizes, ...B.imageSizes].sort( (e, t) => e - t)
              , t = B.deviceSizes.sort( (e, t) => e - t)
              , r = B.qualities?.sort( (e, t) => e - t);
            D = {
                ...B,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === U)
            throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                value: "E163",
                enumerable: !1,
                configurable: !0
            });
        let F = I.loader || U;
        delete I.loader,
        delete I.srcSet;
        let W = "__next_img_default" in F;
        if (W) {
            if ("custom" === D.loader)
                throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                    value: "E252",
                    enumerable: !1,
                    configurable: !0
                })
        } else {
            let e = F;
            F = t => {
                let {config: r, ...n} = t;
                return e(n)
            }
        }
        if (C) {
            "fill" === C && (m = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[C];
            e && (y = {
                ...y,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[C];
            r && !t && (t = r)
        }
        let q = ""
          , G = s(g)
          , Q = s(h);
        if ((T = e) && "object" == typeof T && (l(T) || void 0 !== T.src)) {
            let t = l(e) ? e.default : e;
            if (!t.src)
                throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                    value: "E460",
                    enumerable: !1,
                    configurable: !0
                });
            if (!t.height || !t.width)
                throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                    value: "E48",
                    enumerable: !1,
                    configurable: !0
                });
            if (L = t.blurWidth,
            k = t.blurHeight,
            E = E || t.blurDataURL,
            q = t.src,
            !m)
                if (G || Q) {
                    if (G && !Q) {
                        let e = G / t.width;
                        Q = Math.round(t.height * e)
                    } else if (!G && Q) {
                        let e = Q / t.height;
                        G = Math.round(t.width * e)
                    }
                } else
                    G = t.width,
                    Q = t.height
        }
        let X = !c && !d && ("lazy" === f || void 0 === f);
        (!(e = "string" == typeof e ? e : q) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0,
        X = !1),
        D.unoptimized && (r = !0),
        W && !D.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let K = s(p)
          , V = Object.assign(m ? {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: O,
            objectPosition: j
        } : {}, $ ? {} : {
            color: "transparent"
        }, y)
          , H = z || "empty" === w ? null : "blur" === w ? `url("data:image/svg+xml;charset=utf-8,${(0,
        i.getImageBlurSvg)({
            widthInt: G,
            heightInt: Q,
            blurWidth: L,
            blurHeight: k,
            blurDataURL: E || "",
            objectFit: V.objectFit
        })}")` : `url("${w}")`
          , J = a.includes(V.objectFit) ? "fill" === V.objectFit ? "100% 100%" : "cover" : V.objectFit
          , Y = H ? {
            backgroundSize: J,
            backgroundPosition: V.objectPosition || "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundImage: H
        } : {}
          , Z = function({config: e, src: t, unoptimized: r, width: i, quality: o, sizes: a, loader: l}) {
            if (r) {
                if (t.startsWith("/") && !t.startsWith("//")) {
                    let e = (0,
                    n.getDeploymentId)();
                    if (t.includes("/_next/static/immutable") && !(0,
                    n.getAssetToken)())
                        e = void 0;
                    else if (e) {
                        let r = t.indexOf("?");
                        if (-1 !== r) {
                            let n = new URLSearchParams(t.slice(r + 1));
                            n.get("dpl") || (n.append("dpl", e),
                            t = t.slice(0, r) + "?" + n.toString())
                        } else
                            t += `?dpl=${e}`
                    }
                }
                return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                }
            }
            let {widths: s, kind: u} = function({deviceSizes: e, allSizes: t}, r, n) {
                if (n) {
                    let r = /(^|\s)(1?\d?\d)vw/g
                      , i = [];
                    for (let e; e = r.exec(n); )
                        i.push(parseInt(e[2]));
                    if (i.length) {
                        let r = .01 * Math.min(...i);
                        return {
                            widths: t.filter(t => t >= e[0] * r),
                            kind: "w"
                        }
                    }
                    return {
                        widths: t,
                        kind: "w"
                    }
                }
                return "number" != typeof r ? {
                    widths: e,
                    kind: "w"
                } : {
                    widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                    kind: "x"
                }
            }(e, i, a)
              , c = s.length - 1;
            return {
                sizes: a || "w" !== u ? a : "100vw",
                srcSet: s.map( (r, n) => `${l({
                    config: e,
                    src: t,
                    quality: o,
                    width: r
                })} ${"w" === u ? r : n + 1}${u}`).join(", "),
                src: l({
                    config: e,
                    src: t,
                    quality: o,
                    width: s[c]
                })
            }
        }({
            config: D,
            src: e,
            unoptimized: r,
            width: G,
            quality: K,
            sizes: t,
            loader: F
        })
          , ee = X ? "lazy" : f;
        return {
            props: {
                ...I,
                loading: ee,
                fetchPriority: P,
                width: G,
                height: Q,
                decoding: S,
                className: A,
                style: {
                    ...V,
                    ...Y
                },
                sizes: Z.sizes,
                srcSet: Z.srcSet,
                src: b || Z.src
            },
            meta: {
                unoptimized: r,
                preload: d || c,
                placeholder: w,
                fill: m
            }
        }
    }
}
, 325633, (e, t, r) => {
    "use strict";
    e.i(247167),
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return g
        },
        defaultHead: function() {
            return d
        }
    };
    for (var i in n)
        Object.defineProperty(r, i, {
            enumerable: !0,
            get: n[i]
        });
    let o = e.r(555682)
      , a = e.r(190809)
      , l = e.r(843476)
      , s = a._(e.r(271645))
      , u = o._(e.r(898879))
      , c = e.r(742732);
    function d() {
        return [(0,
        l.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0,
        l.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }
    function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === s.default.Fragment ? e.concat(s.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    let A = ["name", "httpEquiv", "charSet", "itemProp"];
    function p(e) {
        let t, r, n, i;
        return e.reduce(f, []).reverse().concat(d().reverse()).filter((t = new Set,
        r = new Set,
        n = new Set,
        i = {},
        e => {
            let o = !0
              , a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                a = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? o = !1 : t.add(r)
            }
            switch (e.type) {
            case "title":
            case "base":
                r.has(e.type) ? o = !1 : r.add(e.type);
                break;
            case "meta":
                for (let t = 0, r = A.length; t < r; t++) {
                    let r = A[t];
                    if (e.props.hasOwnProperty(r))
                        if ("charSet" === r)
                            n.has(r) ? o = !1 : n.add(r);
                        else {
                            let t = e.props[r]
                              , n = i[r] || new Set;
                            ("name" !== r || !a) && n.has(t) ? o = !1 : (n.add(t),
                            i[r] = n)
                        }
                }
            }
            return o
        }
        )).reverse().map( (e, t) => {
            let r = e.key || t;
            return s.default.cloneElement(e, {
                key: r
            })
        }
        )
    }
    let g = function({children: e}) {
        let t = (0,
        s.useContext)(c.HeadManagerContext);
        return (0,
        l.jsx)(u.default, {
            reduceComponentsToState: p,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 488143, (e, t, r) => {
    "use strict";
    function n({widthInt: e, heightInt: t, blurWidth: r, blurHeight: i, blurDataURL: o, objectFit: a}) {
        let l = r ? 40 * r : e
          , s = i ? 40 * i : t
          , u = l && s ? `viewBox='0 0 ${l} ${s}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}
, 918556, (e, t, r) => {
    "use strict";
    e.i(247167),
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(555682)._(e.r(271645))
      , i = e.r(987690)
      , o = n.default.createContext(i.imageConfigDefault)
}
, 65856, (e, t, r) => {
    "use strict";
    e.i(247167),
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(555682)._(e.r(271645)).default.createContext(null)
}
, 987690, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        VALID_LOADERS: function() {
            return o
        },
        imageConfigDefault: function() {
            return a
        }
    };
    for (var i in n)
        Object.defineProperty(r, i, {
            enumerable: !0,
            get: n[i]
        });
    let o = ["default", "imgix", "cloudinary", "akamai", "custom"]
      , a = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1
    }
}
, 794909, (e, t, r) => {
    "use strict";
    e.i(247167),
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return u
        }
    };
    for (var i in n)
        Object.defineProperty(r, i, {
            enumerable: !0,
            get: n[i]
        });
    let o = e.r(555682)
      , a = e.r(908927)
      , l = e.r(605500)
      , s = o._(e.r(1948));
    function u(e) {
        let {props: t} = (0,
        a.getImgProps)(e, {
            defaultLoader: s.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let[e,r] of Object.entries(t))
            void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let c = l.Image
}
, 657688, (e, t, r) => {
    t.exports = e.r(794909)
}
, 1948, (e, t, r) => {
    "use strict";
    e.i(247167),
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(670965)
      , i = e.r(543369);
    function o({config: e, src: t, width: r, quality: a}) {
        let l = (0,
        i.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//"))
            if (t.includes("/_next/static/immutable") && !(0,
            i.getAssetToken)())
                l = void 0;
            else {
                let e = t.indexOf("?");
                if (-1 !== e) {
                    let r = new URLSearchParams(t.slice(e + 1))
                      , n = r.get("dpl");
                    if (n) {
                        l = n,
                        r.delete("dpl");
                        let i = r.toString();
                        t = t.slice(0, e) + (i ? "?" + i : "")
                    }
                }
            }
        if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search)
            throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                value: "E871",
                enumerable: !1,
                configurable: !0
            });
        let s = (0,
        n.findClosestQuality)(a, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/") && l ? `&dpl=${l}` : ""}`
    }
    o.__next_img_default = !0;
    let a = o
}
, 573668, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(718967)
      , i = e.r(652817);
    function o(e) {
        if (!(0,
        n.isAbsoluteUrl)(e))
            return !0;
        try {
            let t = (0,
            n.getLocationOrigin)()
              , r = new URL(e,t);
            return r.origin === t && (0,
            i.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}
, 998183, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        assign: function() {
            return s
        },
        searchParamsToUrlQuery: function() {
            return o
        },
        urlQueryToSearchParams: function() {
            return l
        }
    };
    for (var i in n)
        Object.defineProperty(r, i, {
            enumerable: !0,
            get: n[i]
        });
    function o(e) {
        let t = {};
        for (let[r,n] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
        }
        return t
    }
    function a(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }
    function l(e) {
        let t = new URLSearchParams;
        for (let[r,n] of Object.entries(e))
            if (Array.isArray(n))
                for (let e of n)
                    t.append(r, a(e));
            else
                t.set(r, a(n));
        return t
    }
    function s(e, ...t) {
        for (let r of t) {
            for (let t of r.keys())
                e.delete(t);
            for (let[t,n] of r.entries())
                e.append(t, n)
        }
        return e
    }
}
, 195057, (e, t, r) => {
    "use strict";
    e.i(247167),
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function() {
            return l
        },
        formatWithValidation: function() {
            return u
        },
        urlObjectKeys: function() {
            return s
        }
    };
    for (var i in n)
        Object.defineProperty(r, i, {
            enumerable: !0,
            get: n[i]
        });
    let o = e.r(190809)._(e.r(998183))
      , a = /https?|ftp|gopher|file/;
    function l(e) {
        let {auth: t, hostname: r} = e
          , n = e.protocol || ""
          , i = e.pathname || ""
          , l = e.hash || ""
          , s = e.query || ""
          , u = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "",
        e.host ? u = t + e.host : r && (u = t + (~r.indexOf(":") ? `[${r}]` : r),
        e.port && (u += ":" + e.port)),
        s && "object" == typeof s && (s = String(o.urlQueryToSearchParams(s)));
        let c = e.search || s && `?${s}` || "";
        return n && !n.endsWith(":") && (n += ":"),
        e.slashes || (!n || a.test(n)) && !1 !== u ? (u = "//" + (u || ""),
        i && "/" !== i[0] && (i = "/" + i)) : u || (u = ""),
        l && "#" !== l[0] && (l = "#" + l),
        c && "?" !== c[0] && (c = "?" + c),
        i = i.replace(/[?#]/g, encodeURIComponent),
        c = c.replace("#", "%23"),
        `${n}${u}${i}${c}${l}`
    }
    let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
    function u(e) {
        return l(e)
    }
}
, 898879, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(271645)
      , i = "u" < typeof window
      , o = i ? () => {}
    : n.useLayoutEffect
      , a = i ? () => {}
    : n.useEffect;
    function l(e) {
        let {headManager: t, reduceComponentsToState: r} = e;
        function l() {
            if (t && t.mountedInstances) {
                let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return i && (t?.mountedInstances?.add(e.children),
        l()),
        o( () => (t?.mountedInstances?.add(e.children),
        () => {
            t?.mountedInstances?.delete(e.children)
        }
        )),
        o( () => (t && (t._pendingUpdate = l),
        () => {
            t && (t._pendingUpdate = l)
        }
        )),
        a( () => (t && t._pendingUpdate && (t._pendingUpdate(),
        t._pendingUpdate = null),
        () => {
            t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null)
        }
        )),
        null
    }
}
, 718967, (e, t, r) => {
    "use strict";
    e.i(247167),
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        DecodeError: function() {
            return m
        },
        MiddlewareNotFoundError: function() {
            return _
        },
        MissingStaticPage: function() {
            return v
        },
        NormalizeError: function() {
            return y
        },
        PageNotFoundError: function() {
            return b
        },
        SP: function() {
            return g
        },
        ST: function() {
            return h
        },
        WEB_VITALS: function() {
            return o
        },
        execOnce: function() {
            return a
        },
        getDisplayName: function() {
            return d
        },
        getLocationOrigin: function() {
            return u
        },
        getURL: function() {
            return c
        },
        isAbsoluteUrl: function() {
            return s
        },
        isResSent: function() {
            return f
        },
        loadGetInitialProps: function() {
            return p
        },
        normalizeRepeatedSlashes: function() {
            return A
        },
        stringifyError: function() {
            return w
        }
    };
    for (var i in n)
        Object.defineProperty(r, i, {
            enumerable: !0,
            get: n[i]
        });
    let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function a(e) {
        let t, r = !1;
        return (...n) => (r || (r = !0,
        t = e(...n)),
        t)
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
      , s = e => {
        let t = e.charCodeAt(0);
        return !!(t >= 65 && t <= 90 || t >= 97 && t <= 122) && l.test(e)
    }
    ;
    function u() {
        let {protocol: e, hostname: t, port: r} = window.location;
        return `${e}//${t}${r ? ":" + r : ""}`
    }
    function c() {
        let {href: e} = window.location
          , t = u();
        return e.substring(t.length)
    }
    function d(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }
    function f(e) {
        return e.finished || e.headersSent
    }
    function A(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function p(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps)
            return t.ctx && t.Component ? {
                pageProps: await p(t.Component, t.ctx)
            } : {};
        let n = await e.getInitialProps(t);
        if (r && f(r))
            return n;
        if (!n)
            throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
                value: "E1025",
                enumerable: !1,
                configurable: !0
            });
        return n
    }
    let g = "u" > typeof performance
      , h = g && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class m extends Error {
    }
    class y extends Error {
    }
    class b extends Error {
        constructor(e) {
            super(),
            this.code = "ENOENT",
            this.name = "PageNotFoundError",
            this.message = `Cannot find module for page: ${e}`
        }
    }
    class v extends Error {
        constructor(e, t) {
            super(),
            this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class _ extends Error {
        constructor() {
            super(),
            this.code = "ENOENT",
            this.message = "Cannot find the middleware module"
        }
    }
    function w(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}
, 618566, (e, t, r) => {
    t.exports = e.r(976562)
}
, 671499, e => {
    e.q("/_next/static/media/logo-dark.19ofzlu-7nmkf.webp")
}
, 144851, e => {
    "use strict";
    let t = {
        src: e.i(671499).default,
        width: 2098,
        height: 387,
        blurWidth: 8,
        blurHeight: 1,
        blurDataURL: "data:image/webp;base64,UklGRsgAAABXRUJQVlA4TLwAAAAvBwAAEM1VICICHggQAAAAAIADAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAABAAAQAAoAAAAA9kEwAAAADg/AcAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAABAAHAAAAAA9kEwAAAADg/AcAAAAIAAIAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAA8EEgAAAADg/A0MMAAAAAAAAAAAAAAAAAAAAAAAAACAAADAAAAABgADAOm1/LSVeFwE6A=="
    };
    e.s(["default", 0, t])
}
, 600239, e => {
    e.q("/_next/static/media/logo-white.06srycu6iah52.webp")
}
]);
