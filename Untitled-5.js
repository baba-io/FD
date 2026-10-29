(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 763123, e => {
    "use strict";
    var a = e.i(843476)
      , t = e.i(522016)
      , l = e.i(618566)
      , s = e.i(271645);
    let n = (0,
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
      , r = e.i(801583);
    let c = [{
        label: "Changelog",
        href: "/changelog"
    }, {
        label: "Contact",
        href: "/contact"
    }];
    function h({href: e, className: s, children: n}) {
        let i = (0,
        l.usePathname)();
        return (0,
        a.jsx)(t.default, {
            href: e,
            "aria-current": i === e || i.startsWith(`${e}/`) ? "page" : void 0,
            className: s,
            children: n
        })
    }
    r.DISCORD_INVITE_URL,
    e.s(["HeaderActions", 0, function({prefetchCta: e=!0}) {
        let r = (0,
        l.usePathname)()
          , [d,o] = (0,
        s.useState)(null)
          , u = d === r;
        return (0,
        s.useEffect)( () => {
            if (u)
                return window.addEventListener("keydown", e),
                () => window.removeEventListener("keydown", e);
            function e(e) {
                "Escape" === e.key && o(null)
            }
        }
        , [u]),
        (0,
        a.jsxs)(a.Fragment, {
            children: [(0,
            a.jsxs)("div", {
                className: "site-header__actions",
                children: [(0,
                a.jsxs)(t.default, {
                    href: "/sim",
                    className: "site-header__cta",
                    prefetch: e,
                    onClick: () => o(null),
                    children: [(0,
                    a.jsx)("span", {
                        className: "site-header__cta-short",
                        children: "Fly free"
                    }), (0,
                    a.jsx)("span", {
                        className: "site-header__cta-full",
                        children: "Start flying free"
                    })]
                }), (0,
                a.jsx)("button", {
                    type: "button",
                    className: "site-header__menu-btn",
                    onClick: () => o(e => e === r ? null : r),
                    "aria-label": u ? "Close menu" : "Open menu",
                    "aria-expanded": u,
                    "aria-controls": "site-mobile-navigation",
                    children: u ? (0,
                    a.jsx)(i.X, {
                        className: "h-5 w-5"
                    }) : (0,
                    a.jsx)(n, {
                        className: "h-5 w-5"
                    })
                })]
            }), u ? (0,
            a.jsxs)("div", {
                id: "site-mobile-navigation",
                className: "site-header__mobile",
                onClick: () => o(null),
                children: [c.map(e => (0,
                a.jsx)(h, {
                    href: e.href,
                    className: "site-header__mobile-link",
                    children: e.label
                }, e.href)), (0,
                a.jsx)(h, {
                    href: "/about",
                    className: "site-header__mobile-link",
                    children: "About"
                })]
            }) : null]
        })
    }
    , "HeaderNavLink", 0, h], 763123)
}
]);
