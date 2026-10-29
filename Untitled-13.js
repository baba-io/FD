(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 922557, e => {
    "use strict";
    var t = e.i(843476)
      , n = e.i(271645)
      , i = Object.defineProperty
      , r = Object.defineProperties
      , a = Object.getOwnPropertyDescriptors
      , l = Object.getOwnPropertySymbols
      , o = Object.prototype.hasOwnProperty
      , s = Object.prototype.propertyIsEnumerable
      , c = (e, t, n) => t in e ? i(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n;
    function u(e) {
        let t = e.getBoundingClientRect().right
          , n = e;
        for (; n; ) {
            if ("visible" !== getComputedStyle(n).overflowX)
                return n.getBoundingClientRect().left + n.clientLeft + n.clientWidth - t;
            n = n.parentElement
        }
        return document.documentElement.clientWidth - t
    }
    var d = n.createContext({})
      , m = n.forwardRef( (e, t) => {
        let i;
        var m, f, g, v, b, {value: y, onChange: w, maxLength: S, textAlign: x="left", pattern: _, placeholder: E, inputMode: j="numeric", onComplete: C, pushPasswordManagerStrategy: k="increase-width", pasteTransformer: N, containerClassName: P, noScriptCSSFallback: T=h, nonce: M, render: R, children: I} = e, O = ( (e, t) => {
            var n = {};
            for (var i in e)
                o.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
            if (null != e && l)
                for (var i of l(e))
                    0 > t.indexOf(i) && s.call(e, i) && (n[i] = e[i]);
            return n
        }
        )(e, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "nonce", "render", "children"]);
        let[A,D] = n.useState("string" == typeof O.defaultValue ? O.defaultValue : "")
          , B = null != y ? y : A
          , L = (i = n.useRef(),
        n.useEffect( () => {
            i.current = B
        }
        ),
        i.current)
          , W = n.useCallback(e => {
            null == w || w(e),
            D(e)
        }
        , [w])
          , F = n.useMemo( () => _ ? "string" == typeof _ ? new RegExp(_) : _ : null, [_])
          , $ = n.useRef(null)
          , q = n.useRef(null)
          , G = n.useRef({
            value: B,
            onChange: W,
            isIOS: "u" > typeof window && (null == (f = null == (m = null == window ? void 0 : window.CSS) ? void 0 : m.supports) ? void 0 : f.call(m, "-webkit-touch-callout", "none"))
        })
          , H = n.useRef({
            prev: [null == (g = $.current) ? void 0 : g.selectionStart, null == (v = $.current) ? void 0 : v.selectionEnd, null == (b = $.current) ? void 0 : b.selectionDirection]
        });
        n.useImperativeHandle(t, () => $.current, []),
        n.useEffect( () => {
            let e = $.current
              , t = q.current;
            if (!e || !t)
                return;
            function n() {
                if (document.activeElement !== e) {
                    X(null),
                    Q(null);
                    return
                }
                let t = e.selectionStart, n = e.selectionEnd, i = e.selectionDirection, r = e.maxLength, a = e.value, l = H.current.prev, o = -1, s = -1, c;
                if (0 !== a.length && null !== t && null !== n) {
                    let i = t === n
                      , u = t === a.length && a.length < r;
                    if (i && !u) {
                        if (0 === t)
                            o = 0,
                            s = 1,
                            c = "forward";
                        else if (t === r)
                            o = t - 1,
                            s = t,
                            c = "backward";
                        else if (r > 1 && a.length > 1) {
                            let e = 0;
                            if (null !== l[0] && null !== l[1]) {
                                c = t < l[1] ? "backward" : "forward";
                                let n = l[0] === l[1] && l[0] < r;
                                "backward" !== c || n || (e = -1)
                            }
                            o = e + t,
                            s = e + t + 1
                        }
                    }
                    -1 !== o && -1 !== s && o !== s && e.setSelectionRange(o, s, c)
                }
                let u = -1 !== o ? o : t
                  , d = -1 !== s ? s : n
                  , m = null != c ? c : i;
                X(u),
                Q(d),
                H.current.prev = [u, d, m]
            }
            if (G.current.value !== e.value && G.current.onChange(e.value),
            H.current.prev = [e.selectionStart, e.selectionEnd, e.selectionDirection],
            document.addEventListener("selectionchange", n, {
                capture: !0
            }),
            n(),
            document.activeElement === e && J(!0),
            !document.getElementById("input-otp-style")) {
                let e = document.createElement("style");
                if (e.id = "input-otp-style",
                M && e.setAttribute("nonce", M),
                document.head.appendChild(e),
                e.sheet) {
                    let t = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
                    p(e.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),
                    p(e.sheet, `[data-input-otp]:autofill { ${t} }`),
                    p(e.sheet, `[data-input-otp]:-webkit-autofill { ${t} }`),
                    p(e.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),
                    p(e.sheet, "[data-input-otp] + * { pointer-events: all !important; }")
                }
            }
            let i = () => {
                t && t.style.setProperty("--root-height", `${e.clientHeight}px`)
            }
            ;
            i();
            let r = "u" < typeof ResizeObserver ? null : new ResizeObserver(i);
            return null == r || r.observe(e),
            () => {
                document.removeEventListener("selectionchange", n, {
                    capture: !0
                }),
                null == r || r.disconnect()
            }
        }
        , []);
        let[U,V] = n.useState(!1)
          , [z,J] = n.useState(!1)
          , [K,X] = n.useState(null)
          , [Y,Q] = n.useState(null);
        n.useEffect( () => {
            var e;
            let t = [setTimeout(e = () => {
                var e, t, n, i;
                null == (e = $.current) || e.dispatchEvent(new Event("input"));
                let r = null == (t = $.current) ? void 0 : t.selectionStart
                  , a = null == (n = $.current) ? void 0 : n.selectionEnd
                  , l = null == (i = $.current) ? void 0 : i.selectionDirection;
                null !== r && null !== a && (X(r),
                Q(a),
                H.current.prev = [r, a, l])
            }
            , 0), setTimeout(e, 10), setTimeout(e, 50)];
            return () => {
                t.forEach(e => clearTimeout(e))
            }
        }
        , [B, z]),
        n.useEffect( () => {
            void 0 !== L && B !== L && L.length < S && B.length === S && (null == C || C(B))
        }
        , [S, C, L, B]);
        let Z = function({containerRef: e, inputRef: t, pushPasswordManagerStrategy: i, isFocused: r}) {
            let[a,l] = n.useState(!1)
              , [o,s] = n.useState(!1)
              , [c,d] = n.useState(!1)
              , m = n.useMemo( () => "none" !== i && ("increase-width" === i || "experimental-no-flickering" === i) && a && o, [a, o, i])
              , p = n.useCallback( () => {
                let n = e.current
                  , r = t.current;
                if (!n || !r || c || "none" === i)
                    return;
                let a = n.getBoundingClientRect().left + n.offsetWidth
                  , o = n.getBoundingClientRect().top + n.offsetHeight / 2;
                0 === document.querySelectorAll('[data-lastpass-icon-root],com-1password-button,[data-dashlanecreated],[style$="2147483647 !important;"]').length && document.elementFromPoint(a - 18, o) === n || (s(u(n) >= 40),
                l(!0),
                d(!0))
            }
            , [e, t, c, i]);
            return n.useEffect( () => {
                let t = e.current;
                if (!t || "none" === i)
                    return;
                function n() {
                    s(u(t) >= 40)
                }
                n();
                let r = setInterval(n, 1e3);
                return () => {
                    clearInterval(r)
                }
            }
            , [e, i]),
            n.useEffect( () => {
                let e = r || document.activeElement === t.current;
                if ("none" === i || !e)
                    return;
                let n = setTimeout(p, 0)
                  , a = setTimeout(p, 2e3)
                  , l = setTimeout(p, 5e3)
                  , o = setTimeout( () => {
                    d(!0)
                }
                , 6e3);
                return () => {
                    clearTimeout(n),
                    clearTimeout(a),
                    clearTimeout(l),
                    clearTimeout(o)
                }
            }
            , [t, r, i, p]),
            {
                hasPWMBadge: a,
                willPushPWMBadge: m,
                PWM_BADGE_SPACE_WIDTH: "40px"
            }
        }({
            containerRef: q,
            inputRef: $,
            pushPasswordManagerStrategy: k,
            isFocused: z
        })
          , ee = n.useCallback(e => {
            let t = e.currentTarget.value.slice(0, S);
            t.length > 0 && F && !F.test(t) ? e.preventDefault() : ("string" == typeof L && t.length < L.length && document.dispatchEvent(new Event("selectionchange")),
            W(t))
        }
        , [S, W, L, F])
          , et = n.useCallback( () => {
            var e;
            if ($.current) {
                let t = Math.min($.current.value.length, S - 1)
                  , n = $.current.value.length;
                null == (e = $.current) || e.setSelectionRange(t, n),
                X(t),
                Q(n)
            }
            J(!0)
        }
        , [S])
          , en = n.useCallback(e => {
            var t, n;
            let i = $.current;
            if (!N && (!G.current.isIOS || !e.clipboardData || !i))
                return;
            let r = e.clipboardData.getData("text/plain")
              , a = N ? N(r) : r;
            e.preventDefault();
            let l = null == (t = $.current) ? void 0 : t.selectionStart
              , o = null == (n = $.current) ? void 0 : n.selectionEnd
              , s = (l !== o ? B.slice(0, l) + a + B.slice(o) : B.slice(0, l) + a + B.slice(l)).slice(0, S);
            if (s.length > 0 && F && !F.test(s))
                return;
            i.value = s,
            W(s);
            let c = Math.min(s.length, S - 1)
              , u = s.length;
            i.setSelectionRange(c, u),
            X(c),
            Q(u)
        }
        , [S, W, N, F, B])
          , ei = n.useMemo( () => ({
            position: "relative",
            cursor: O.disabled ? "default" : "text",
            userSelect: "none",
            WebkitUserSelect: "none",
            pointerEvents: "none"
        }), [O.disabled])
          , er = n.useMemo( () => ({
            position: "absolute",
            inset: 0,
            width: Z.willPushPWMBadge ? `calc(100% + ${Z.PWM_BADGE_SPACE_WIDTH})` : "100%",
            clipPath: Z.willPushPWMBadge ? `inset(0 ${Z.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
            height: "100%",
            display: "flex",
            textAlign: x,
            opacity: "1",
            color: "transparent",
            pointerEvents: "all",
            background: "transparent",
            caretColor: "transparent",
            border: "0 solid transparent",
            outline: "0 solid transparent",
            boxShadow: "none",
            lineHeight: "1",
            letterSpacing: "-.5em",
            fontSize: "var(--root-height, 16px)",
            fontFamily: "monospace",
            fontVariantNumeric: "tabular-nums"
        }), [Z.PWM_BADGE_SPACE_WIDTH, Z.willPushPWMBadge, x])
          , ea = n.useMemo( () => {
            var e;
            return n.createElement("input", r(( (e, t) => {
                for (var n in t || (t = {}))
                    o.call(t, n) && c(e, n, t[n]);
                if (l)
                    for (var n of l(t))
                        s.call(t, n) && c(e, n, t[n]);
                return e
            }
            )({
                autoComplete: O.autoComplete || "one-time-code"
            }, O), a({
                "data-input-otp": !0,
                "data-input-otp-placeholder-shown": 0 === B.length || void 0,
                "data-input-otp-mss": K,
                "data-input-otp-mse": Y,
                inputMode: j,
                pattern: null == F ? void 0 : F.source,
                "aria-placeholder": E,
                style: er,
                maxLength: S,
                value: B,
                ref: $,
                spellCheck: null != (e = O.spellCheck) && e,
                onPaste: e => {
                    var t;
                    en(e),
                    null == (t = O.onPaste) || t.call(O, e)
                }
                ,
                onChange: ee,
                onMouseOver: e => {
                    var t;
                    V(!0),
                    null == (t = O.onMouseOver) || t.call(O, e)
                }
                ,
                onMouseLeave: e => {
                    var t;
                    V(!1),
                    null == (t = O.onMouseLeave) || t.call(O, e)
                }
                ,
                onFocus: e => {
                    var t;
                    et(),
                    null == (t = O.onFocus) || t.call(O, e)
                }
                ,
                onBlur: e => {
                    var t;
                    J(!1),
                    null == (t = O.onBlur) || t.call(O, e)
                }
            })))
        }
        , [ee, et, en, j, er, S, Y, K, E, O, null == F ? void 0 : F.source, B])
          , el = n.useMemo( () => ({
            slots: Array.from({
                length: S
            }).map( (e, t) => {
                var n;
                let i = z && null !== K && null !== Y && (K === Y && t === K || t >= K && t < Y)
                  , r = void 0 !== B[t] ? B[t] : null;
                return {
                    char: r,
                    placeholderChar: void 0 !== B[0] ? null : null != (n = null == E ? void 0 : E[t]) ? n : null,
                    isActive: i,
                    hasFakeCaret: i && null === r
                }
            }
            ),
            isFocused: z,
            isHovering: !O.disabled && U
        }), [z, U, S, Y, K, E, O.disabled, B])
          , eo = n.useMemo( () => R ? R(el) : n.createElement(d.Provider, {
            value: el
        }, I), [I, el, R]);
        return n.createElement(n.Fragment, null, null !== T && n.createElement("noscript", null, n.createElement("style", null, T)), n.createElement("div", {
            ref: q,
            "data-input-otp-container": !0,
            translate: "no",
            style: ei,
            className: P
        }, eo, n.createElement("div", {
            style: {
                position: "absolute",
                inset: 0,
                pointerEvents: "none"
            }
        }, ea)))
    }
    );
    function p(e, t) {
        try {
            e.insertRule(t)
        } catch (e) {
            console.warn("input-otp could not insert CSS rule:", t)
        }
    }
    m.displayName = "Input";
    var h = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`
      , f = e.i(224772)
      , g = e.i(439225)
      , v = e.i(718284)
      , b = e.i(299023)
      , y = e.i(647163);
    let w = n.forwardRef( ({className: e, containerClassName: n, ...i}, r) => (0,
    t.jsx)(m, {
        ref: r,
        containerClassName: (0,
        y.cn)("flex items-center gap-2 has-[:disabled]:opacity-50", n),
        className: (0,
        y.cn)("disabled:cursor-not-allowed", e),
        ...i
    }));
    w.displayName = "InputOTP";
    let S = n.forwardRef( ({className: e, ...n}, i) => (0,
    t.jsx)("div", {
        ref: i,
        className: (0,
        y.cn)("flex items-center", e),
        ...n
    }));
    S.displayName = "InputOTPGroup";
    let x = n.forwardRef( ({index: e, className: i, ...r}, a) => {
        let {char: l, hasFakeCaret: o, isActive: s} = n.useContext(d).slots[e];
        return (0,
        t.jsxs)("div", {
            ref: a,
            className: (0,
            y.cn)("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", s && "z-10 ring-1 ring-ring", i),
            ...r,
            children: [l, o && (0,
            t.jsx)("div", {
                className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                children: (0,
                t.jsx)("div", {
                    className: "h-4 w-px animate-caret-blink bg-foreground duration-1000"
                })
            })]
        })
    }
    );
    x.displayName = "InputOTPSlot",
    n.forwardRef( ({...e}, n) => (0,
    t.jsx)("div", {
        ref: n,
        role: "separator",
        ...e,
        children: (0,
        t.jsx)(b.Minus, {})
    })).displayName = "InputOTPSeparator",
    e.s(["LoginForm", 0, function({nextPath: e, authError: i, sim: r=!1}) {
        let[a,l] = (0,
        n.useState)("")
          , [o,s] = (0,
        n.useState)(!1)
          , [c,u] = (0,
        n.useState)("")
          , [d,m] = (0,
        n.useState)(null)
          , [p,h] = (0,
        n.useState)(null)
          , [b,y] = (0,
        n.useState)(0)
          , [_,E] = (0,
        n.useState)("")
          , [j,C] = (0,
        n.useState)(null);
        async function k() {
            if (!d && !(b > 0)) {
                m("send"),
                C(null),
                E("");
                try {
                    let t = await fetch("/auth/start", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: a.trim(),
                            next: e,
                            updates: o,
                            ...r ? {
                                sim: r
                            } : {}
                        })
                    })
                      , n = await t.json();
                    if (!t.ok)
                        throw 429 === t.status && y(60),
                        Error(n.error || "Please try again.");
                    if (n.redirect)
                        return void window.location.assign(n.redirect);
                    r && (0,
                    v.markCodeRequested)(),
                    l(a.trim()),
                    u(""),
                    h("email_change" === n.verificationType ? "email_change" : "email"),
                    y(60),
                    E("Check your inbox and spam folder.")
                } catch (e) {
                    C(e instanceof Error ? e.message : "Couldn’t connect to sign-in. Check your connection and try again.")
                } finally {
                    m(null)
                }
            }
        }
        async function N(t) {
            if (t.preventDefault(),
            !d && /^\d{6}$/.test(c)) {
                m("verify"),
                C(null),
                E("");
                try {
                    let t = await fetch("/auth/verify", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: a,
                            token: c,
                            type: p,
                            next: e,
                            updates: o,
                            ...r ? {
                                sim: r,
                                steps: (0,
                                v.preSignInAges)()
                            } : {}
                        })
                    })
                      , n = await t.json();
                    if (!t.ok)
                        throw Error(n.error || "We couldn’t verify that code. Please try again.");
                    window.location.assign(n.redirect)
                } catch (e) {
                    C(e instanceof Error ? e.message : "Couldn’t connect to sign-in. Check your connection and try again.")
                } finally {
                    m(null)
                }
            }
        }
        return ((0,
        n.useEffect)( () => {
            r && (0,
            v.markSignInShown)()
        }
        , [r]),
        (0,
        n.useEffect)( () => {
            if (0 === b)
                return;
            let e = window.setTimeout( () => y(b - 1), 1e3);
            return () => window.clearTimeout(e)
        }
        , [b]),
        p) ? (0,
        t.jsx)("div", {
            className: "site-panel",
            children: (0,
            t.jsxs)("form", {
                className: "site-form",
                onSubmit: N,
                children: [(0,
                t.jsx)("h2", {
                    className: "site-panel-title",
                    children: "Check your email"
                }), (0,
                t.jsxs)("p", {
                    className: "site-form__hint",
                    id: "code-description",
                    children: ["If ", (0,
                    t.jsx)("strong", {
                        className: "sign-in-screen__email",
                        children: a
                    }), " has an account, a code is on its way. Enter the six-digit code or use the sign-in link in the email. Check the address for typos if it doesn’t arrive."]
                }), (0,
                t.jsxs)("div", {
                    className: "site-form__field",
                    children: [(0,
                    t.jsx)("label", {
                        htmlFor: "sign-in-code",
                        className: "site-form__label",
                        children: "Sign-in code"
                    }), (0,
                    t.jsx)(w, {
                        id: "sign-in-code",
                        name: "code",
                        maxLength: 6,
                        pattern: "^\\d+$",
                        inputMode: "numeric",
                        autoComplete: "one-time-code",
                        autoFocus: !0,
                        required: !0,
                        value: c,
                        onChange: u,
                        pasteTransformer: e => e.replace(/\D/g, ""),
                        disabled: null !== d,
                        "aria-describedby": j ? "code-description code-error" : "code-description",
                        "aria-invalid": !!j,
                        containerClassName: "w-full",
                        children: (0,
                        t.jsx)(S, {
                            className: "grid w-full grid-cols-6 gap-2",
                            children: Array.from({
                                length: 6
                            }, (e, n) => (0,
                            t.jsx)(x, {
                                index: n,
                                className: "h-12 w-full rounded-md border border-[#17191d] bg-white text-xl font-semibold first:rounded-md last:rounded-md aria-invalid:border-destructive",
                                "aria-invalid": !!j
                            }, n))
                        })
                    })]
                }), j ? (0,
                t.jsx)("p", {
                    id: "code-error",
                    className: "site-form__hint",
                    role: "alert",
                    children: j
                }) : null, _ ? (0,
                t.jsx)("p", {
                    className: "site-form__hint",
                    role: "status",
                    children: _
                }) : null, (0,
                t.jsx)("button", {
                    type: "submit",
                    disabled: null !== d || 6 !== c.length,
                    className: "site-cta",
                    children: "verify" === d ? "Verifying…" : "Verify and continue"
                }), (0,
                t.jsxs)("div", {
                    className: "sign-in-screen__actions",
                    children: [(0,
                    t.jsx)("button", {
                        type: "button",
                        className: "site-cta-secondary",
                        disabled: null !== d || b > 0,
                        onClick: () => void k(),
                        children: "send" === d ? "Sending…" : b > 0 ? `Resend code in ${b}s` : "Resend code"
                    }), (0,
                    t.jsx)("button", {
                        type: "button",
                        className: "site-cta-secondary",
                        disabled: null !== d,
                        onClick: () => {
                            h(null),
                            u(""),
                            C(null),
                            E(""),
                            y(0)
                        }
                        ,
                        children: "Change email"
                    })]
                })]
            })
        }) : (0,
        t.jsx)("div", {
            className: "site-panel",
            children: (0,
            t.jsxs)("form", {
                className: "site-form",
                onSubmit: e => {
                    e.preventDefault(),
                    k()
                }
                ,
                children: [j || i ? (0,
                t.jsx)("p", {
                    className: "site-form__hint",
                    role: "alert",
                    children: j || ("banned" === i ? f.BANNED_SIGN_IN_MESSAGE : "This sign-in link has expired or couldn’t be verified. Request a code below to sign in.")
                }) : null, (0,
                t.jsxs)("div", {
                    className: "site-form__field",
                    children: [(0,
                    t.jsx)("label", {
                        htmlFor: "email",
                        className: "site-form__label",
                        children: "Email"
                    }), (0,
                    t.jsx)("input", {
                        id: "email",
                        type: "email",
                        name: "email",
                        autoComplete: "email",
                        required: !0,
                        value: a,
                        onChange: e => l(e.target.value),
                        placeholder: "you@example.com",
                        disabled: null !== d,
                        className: "site-form__input"
                    })]
                }), (0,
                t.jsxs)("label", {
                    className: "sign-in-screen__updates",
                    children: [(0,
                    t.jsx)("input", {
                        type: "checkbox",
                        name: "updates",
                        checked: o,
                        onChange: e => s(e.target.checked),
                        disabled: null !== d
                    }), (0,
                    t.jsxs)("span", {
                        children: [g.EMAIL_ASK_TITLE, " ", g.EMAIL_ASK_BODY]
                    })]
                }), (0,
                t.jsx)("button", {
                    type: "submit",
                    disabled: null !== d || !a.trim() || b > 0,
                    className: "site-cta",
                    children: "send" === d ? "Sending…" : b > 0 ? `Try again in ${b}s` : "Continue"
                })]
            })
        })
    }
    ], 922557)
}
, 634556, e => {
    "use strict";
    var t = e.i(843476)
      , n = e.i(618566)
      , i = e.i(522016)
      , r = e.i(466465)
      , a = e.i(13784)
      , l = e.i(157430)
      , o = e.i(922557);
    function s({nextPath: e="/sim", authError: n=!1, sim: c=!1}) {
        return (0,
        t.jsx)("main", {
            className: "site-shell sign-in-screen",
            children: (0,
            t.jsxs)("div", {
                className: "sign-in-screen__content",
                children: [(0,
                t.jsxs)(i.default, {
                    href: "/",
                    className: `sign-in-screen__logo ${l.default.lockup}`,
                    "aria-label": "Flight Division home",
                    children: [(0,
                    t.jsx)(r.BrandLogo, {
                        on: "light",
                        className: "h-auto w-full",
                        priority: !0
                    }), (0,
                    t.jsx)(a.EarlyAccessBadge, {})]
                }), (0,
                t.jsx)("h1", {
                    className: "site-page-title",
                    children: "Sign in to fly"
                }), (0,
                t.jsx)("div", {
                    className: "sign-in-screen__form",
                    children: (0,
                    t.jsx)(o.LoginForm, {
                        nextPath: e,
                        authError: n,
                        sim: c
                    })
                })]
            })
        })
    }
    e.s(["SimSignIn", 0, function() {
        let e = (0,
        n.usePathname)()
          , i = (0,
        n.useSearchParams)().toString();
        return (0,
        t.jsx)(s, {
            sim: !0,
            nextPath: `${e}${i ? `?${i}` : ""}`
        })
    }
    ], 634556)
}
, 24712, e => {
    "use strict";
    var t = e.i(271645);
    let n = new Set
      , i = null;
    function r(e, t, n, i, r) {
        let a = new URLSearchParams(n.search)
          , l = "";
        if (r)
            l = n.host;
        else
            try {
                l = i ? new URL(i).host : ""
            } catch {
                l = ""
            }
        return {
            path: e,
            screen: t,
            referrer: l.slice(0, 300),
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
                let l = JSON.stringify(r(e, t, window.location, document.referrer, i));
                i = e;
                let o = () => {
                    try {
                        fetch("/api/site/view", {
                            method: "POST",
                            body: l,
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
                "function" == typeof window.requestIdleCallback ? window.requestIdleCallback(o, {
                    timeout: 5e3
                }) : window.setTimeout(o, 1e3)
            }(e, a)
        }
        , [e, a]),
        null
    }
    , "siteViewBody", 0, r])
}
, 224772, e => {
    "use strict";
    var t = e.i(108354);
    let n = `This account is banned from Flight Division. Email ${t.SUPPORT_EMAIL} for help.`;
    e.s(["BANNED_SIGN_IN_MESSAGE", 0, n, "signInError", 0, function(e) {
        if (e && "object" == typeof e && "code" in e && "user_banned" === e.code)
            return {
                message: n,
                status: 403
            };
        let t = e && "object" == typeof e ? e : {};
        return 429 === t.status || "over_email_send_rate_limit" === t.code || "over_request_rate_limit" === t.code ? {
            message: "Too many sign-in attempts. Wait a minute before trying again, and check your inbox for the latest code.",
            status: 429
        } : "email_address_invalid" === t.code || "validation_failed" === t.code ? {
            message: "That email address couldn’t be accepted. Check the spelling and try again.",
            status: 400
        } : "email_address_not_authorized" === t.code ? {
            message: "We can’t send a sign-in code to this address yet. Contact us to get access.",
            status: 403
        } : "email_provider_disabled" === t.code || "signup_disabled" === t.code ? {
            message: "Email sign-in isn’t available right now. Please try again later or contact us if this continues.",
            status: 503
        } : "otp_expired" === t.code ? {
            message: "That code is incorrect or has expired. Try the code from your latest email, or request a new one.",
            status: 400
        } : {
            message: "The sign-in service is having trouble. Please try again shortly. If it keeps happening, contact us.",
            status: 503
        }
    }
    ])
}
, 718284, e => {
    "use strict";
    let t = ["sim_opened", "sign_in_shown", "code_requested"]
      , n = ["controls_answered", "menu_reached", "first_takeoff"];
    function i(e) {
        "u" > typeof fetch && fetch("/api/sim/first-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e),
            keepalive: !0
        }).catch( () => {}
        )
    }
    let r = {}
      , a = !1
      , l = {}
      , o = new Set
      , s = null;
    function c() {
        null !== s && clearTimeout(s),
        s = null;
        let e = performance.now()
          , t = {};
        for (let i of n) {
            let n = l[i];
            void 0 !== n && (t[i] = Math.max(0, Math.round(e - n)),
            delete l[i],
            o.add(i))
        }
        Object.keys(t).length && i({
            steps: t
        })
    }
    e.s(["firstSessionStepSeen", 0, function(e) {
        return o.has(e) || void 0 !== l[e]
    }
    , "markCodeRequested", 0, function() {
        r.code_requested ??= performance.now()
    }
    , "markSignInShown", 0, function() {
        if (void 0 !== r.sign_in_shown)
            return;
        let e = performance.now()
          , t = performance.getEntriesByType?.("navigation")[0];
        r.sim_opened = !t || new URL(t.name,location.href).pathname.startsWith("/sim") ? 0 : e,
        r.sign_in_shown = e,
        i({
            visit: "sign_in_shown"
        })
    }
    , "preSignInAges", 0, function(e=performance.now()) {
        let n = {};
        for (let i of t) {
            let t = r[i];
            void 0 !== t && (n[i] = Math.max(0, Math.round(e - t)))
        }
        return n
    }
    , "recordFirstSessionStep", 0, function(e) {
        !a || o.has(e) || void 0 !== l[e] || (l[e] = performance.now(),
        s ??= setTimeout(c, 2e3))
    }
    , "trackFirstSession", 0, function() {
        return a = !0,
        window.addEventListener("pagehide", c),
        () => {
            c(),
            a = !1,
            window.removeEventListener("pagehide", c)
        }
    }
    ])
}
]);
