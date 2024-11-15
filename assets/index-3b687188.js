function SA(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const l = Object.getOwnPropertyDescriptor(r, i);
                    l && Object.defineProperty(e, i, l.get ? l : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const l of i)
            if (l.type === "childList")
                for (const s of l.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const l = {};
        return i.integrity && (l.integrity = i.integrity), i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? l.credentials = "include" : i.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const l = n(i);
        fetch(i.href, l)
    }
})();
var Cu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function io(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var sS = {
        exports: {}
    },
    tf = {},
    aS = {
        exports: {}
    },
    Ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _s = Symbol.for("react.element"),
    EA = Symbol.for("react.portal"),
    CA = Symbol.for("react.fragment"),
    kA = Symbol.for("react.strict_mode"),
    _A = Symbol.for("react.profiler"),
    bA = Symbol.for("react.provider"),
    OA = Symbol.for("react.context"),
    TA = Symbol.for("react.forward_ref"),
    IA = Symbol.for("react.suspense"),
    RA = Symbol.for("react.memo"),
    PA = Symbol.for("react.lazy"),
    a1 = Symbol.iterator;

function AA(e) {
    return e === null || typeof e != "object" ? null : (e = a1 && e[a1] || e["@@iterator"], typeof e == "function" ? e : null)
}
var cS = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    fS = Object.assign,
    dS = {};

function Zl(e, t, n) {
    this.props = e, this.context = t, this.refs = dS, this.updater = n || cS
}
Zl.prototype.isReactComponent = {};
Zl.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Zl.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function pS() {}
pS.prototype = Zl.prototype;

function Fg(e, t, n) {
    this.props = e, this.context = t, this.refs = dS, this.updater = n || cS
}
var zg = Fg.prototype = new pS;
zg.constructor = Fg;
fS(zg, Zl.prototype);
zg.isPureReactComponent = !0;
var c1 = Array.isArray,
    hS = Object.prototype.hasOwnProperty,
    $g = {
        current: null
    },
    gS = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function mS(e, t, n) {
    var r, i = {},
        l = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (l = "" + t.key), t) hS.call(t, r) && !gS.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var f = Array(a), d = 0; d < a; d++) f[d] = arguments[d + 2];
        i.children = f
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: _s,
        type: e,
        key: l,
        ref: s,
        props: i,
        _owner: $g.current
    }
}

function DA(e, t) {
    return {
        $$typeof: _s,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Bg(e) {
    return typeof e == "object" && e !== null && e.$$typeof === _s
}

function NA(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var f1 = /\/+/g;

function fp(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? NA("" + e.key) : t.toString(36)
}

function Qa(e, t, n, r, i) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (l) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case _s:
                case EA:
                    s = !0
            }
    }
    if (s) return s = e, i = i(s), e = r === "" ? "." + fp(s, 0) : r, c1(i) ? (n = "", e != null && (n = e.replace(f1, "$&/") + "/"), Qa(i, t, n, "", function(d) {
        return d
    })) : i != null && (Bg(i) && (i = DA(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(f1, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", c1(e))
        for (var a = 0; a < e.length; a++) {
            l = e[a];
            var f = r + fp(l, a);
            s += Qa(l, t, n, f, i)
        } else if (f = AA(e), typeof f == "function")
            for (e = f.call(e), a = 0; !(l = e.next()).done;) l = l.value, f = r + fp(l, a++), s += Qa(l, t, n, f, i);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function ka(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return Qa(e, r, "", "", function(l) {
        return t.call(n, l, i++)
    }), r
}

function MA(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ln = {
        current: null
    },
    Ya = {
        transition: null
    },
    LA = {
        ReactCurrentDispatcher: ln,
        ReactCurrentBatchConfig: Ya,
        ReactCurrentOwner: $g
    };

function vS() {
    throw Error("act(...) is not supported in production builds of React.")
}
Ne.Children = {
    map: ka,
    forEach: function(e, t, n) {
        ka(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ka(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return ka(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Bg(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Ne.Component = Zl;
Ne.Fragment = CA;
Ne.Profiler = _A;
Ne.PureComponent = Fg;
Ne.StrictMode = kA;
Ne.Suspense = IA;
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = LA;
Ne.act = vS;
Ne.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = fS({}, e.props),
        i = e.key,
        l = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (l = t.ref, s = $g.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (f in t) hS.call(t, f) && !gS.hasOwnProperty(f) && (r[f] = t[f] === void 0 && a !== void 0 ? a[f] : t[f])
    }
    var f = arguments.length - 2;
    if (f === 1) r.children = n;
    else if (1 < f) {
        a = Array(f);
        for (var d = 0; d < f; d++) a[d] = arguments[d + 2];
        r.children = a
    }
    return {
        $$typeof: _s,
        type: e.type,
        key: i,
        ref: l,
        props: r,
        _owner: s
    }
};
Ne.createContext = function(e) {
    return e = {
        $$typeof: OA,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: bA,
        _context: e
    }, e.Consumer = e
};
Ne.createElement = mS;
Ne.createFactory = function(e) {
    var t = mS.bind(null, e);
    return t.type = e, t
};
Ne.createRef = function() {
    return {
        current: null
    }
};
Ne.forwardRef = function(e) {
    return {
        $$typeof: TA,
        render: e
    }
};
Ne.isValidElement = Bg;
Ne.lazy = function(e) {
    return {
        $$typeof: PA,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: MA
    }
};
Ne.memo = function(e, t) {
    return {
        $$typeof: RA,
        type: e,
        compare: t === void 0 ? null : t
    }
};
Ne.startTransition = function(e) {
    var t = Ya.transition;
    Ya.transition = {};
    try {
        e()
    } finally {
        Ya.transition = t
    }
};
Ne.unstable_act = vS;
Ne.useCallback = function(e, t) {
    return ln.current.useCallback(e, t)
};
Ne.useContext = function(e) {
    return ln.current.useContext(e)
};
Ne.useDebugValue = function() {};
Ne.useDeferredValue = function(e) {
    return ln.current.useDeferredValue(e)
};
Ne.useEffect = function(e, t) {
    return ln.current.useEffect(e, t)
};
Ne.useId = function() {
    return ln.current.useId()
};
Ne.useImperativeHandle = function(e, t, n) {
    return ln.current.useImperativeHandle(e, t, n)
};
Ne.useInsertionEffect = function(e, t) {
    return ln.current.useInsertionEffect(e, t)
};
Ne.useLayoutEffect = function(e, t) {
    return ln.current.useLayoutEffect(e, t)
};
Ne.useMemo = function(e, t) {
    return ln.current.useMemo(e, t)
};
Ne.useReducer = function(e, t, n) {
    return ln.current.useReducer(e, t, n)
};
Ne.useRef = function(e) {
    return ln.current.useRef(e)
};
Ne.useState = function(e) {
    return ln.current.useState(e)
};
Ne.useSyncExternalStore = function(e, t, n) {
    return ln.current.useSyncExternalStore(e, t, n)
};
Ne.useTransition = function() {
    return ln.current.useTransition()
};
Ne.version = "18.3.1";
aS.exports = Ne;
var I = aS.exports;
const Ve = io(I),
    yS = SA({
        __proto__: null,
        default: Ve
    }, [I]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var FA = I,
    zA = Symbol.for("react.element"),
    $A = Symbol.for("react.fragment"),
    BA = Object.prototype.hasOwnProperty,
    UA = FA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    HA = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function wS(e, t, n) {
    var r, i = {},
        l = null,
        s = null;
    n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) BA.call(t, r) && !HA.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: zA,
        type: e,
        key: l,
        ref: s,
        props: i,
        _owner: UA.current
    }
}
tf.Fragment = $A;
tf.jsx = wS;
tf.jsxs = wS;
sS.exports = tf;
var Ug = sS.exports;
const En = Ug.Fragment,
    W = Ug.jsx,
    we = Ug.jsxs;
var xS = {
        exports: {}
    },
    Un = {},
    SS = {
        exports: {}
    },
    ES = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(j, J) {
        var b = j.length;
        j.push(J);
        e: for (; 0 < b;) {
            var ne = b - 1 >>> 1,
                ae = j[ne];
            if (0 < i(ae, J)) j[ne] = J, j[b] = ae, b = ne;
            else break e
        }
    }

    function n(j) {
        return j.length === 0 ? null : j[0]
    }

    function r(j) {
        if (j.length === 0) return null;
        var J = j[0],
            b = j.pop();
        if (b !== J) {
            j[0] = b;
            e: for (var ne = 0, ae = j.length, O = ae >>> 1; ne < O;) {
                var de = 2 * (ne + 1) - 1,
                    Re = j[de],
                    me = de + 1,
                    Ae = j[me];
                if (0 > i(Re, b)) me < ae && 0 > i(Ae, Re) ? (j[ne] = Ae, j[me] = b, ne = me) : (j[ne] = Re, j[de] = b, ne = de);
                else if (me < ae && 0 > i(Ae, b)) j[ne] = Ae, j[me] = b, ne = me;
                else break e
            }
        }
        return J
    }

    function i(j, J) {
        var b = j.sortIndex - J.sortIndex;
        return b !== 0 ? b : j.id - J.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        e.unstable_now = function() {
            return l.now()
        }
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var f = [],
        d = [],
        p = 1,
        g = null,
        v = 3,
        m = !1,
        E = !1,
        S = !1,
        A = typeof setTimeout == "function" ? setTimeout : null,
        y = typeof clearTimeout == "function" ? clearTimeout : null,
        x = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function k(j) {
        for (var J = n(d); J !== null;) {
            if (J.callback === null) r(d);
            else if (J.startTime <= j) r(d), J.sortIndex = J.expirationTime, t(f, J);
            else break;
            J = n(d)
        }
    }

    function P(j) {
        if (S = !1, k(j), !E)
            if (n(f) !== null) E = !0, ue(N);
            else {
                var J = n(d);
                J !== null && oe(P, J.startTime - j)
            }
    }

    function N(j, J) {
        E = !1, S && (S = !1, y(z), z = -1), m = !0;
        var b = v;
        try {
            for (k(J), g = n(f); g !== null && (!(g.expirationTime > J) || j && !$());) {
                var ne = g.callback;
                if (typeof ne == "function") {
                    g.callback = null, v = g.priorityLevel;
                    var ae = ne(g.expirationTime <= J);
                    J = e.unstable_now(), typeof ae == "function" ? g.callback = ae : g === n(f) && r(f), k(J)
                } else r(f);
                g = n(f)
            }
            if (g !== null) var O = !0;
            else {
                var de = n(d);
                de !== null && oe(P, de.startTime - J), O = !1
            }
            return O
        } finally {
            g = null, v = b, m = !1
        }
    }
    var T = !1,
        F = null,
        z = -1,
        q = 5,
        Q = -1;

    function $() {
        return !(e.unstable_now() - Q < q)
    }

    function G() {
        if (F !== null) {
            var j = e.unstable_now();
            Q = j;
            var J = !0;
            try {
                J = F(!0, j)
            } finally {
                J ? B() : (T = !1, F = null)
            }
        } else T = !1
    }
    var B;
    if (typeof x == "function") B = function() {
        x(G)
    };
    else if (typeof MessageChannel < "u") {
        var U = new MessageChannel,
            Z = U.port2;
        U.port1.onmessage = G, B = function() {
            Z.postMessage(null)
        }
    } else B = function() {
        A(G, 0)
    };

    function ue(j) {
        F = j, T || (T = !0, B())
    }

    function oe(j, J) {
        z = A(function() {
            j(e.unstable_now())
        }, J)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
        j.callback = null
    }, e.unstable_continueExecution = function() {
        E || m || (E = !0, ue(N))
    }, e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : q = 0 < j ? Math.floor(1e3 / j) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return v
    }, e.unstable_getFirstCallbackNode = function() {
        return n(f)
    }, e.unstable_next = function(j) {
        switch (v) {
            case 1:
            case 2:
            case 3:
                var J = 3;
                break;
            default:
                J = v
        }
        var b = v;
        v = J;
        try {
            return j()
        } finally {
            v = b
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(j, J) {
        switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                j = 3
        }
        var b = v;
        v = j;
        try {
            return J()
        } finally {
            v = b
        }
    }, e.unstable_scheduleCallback = function(j, J, b) {
        var ne = e.unstable_now();
        switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? ne + b : ne) : b = ne, j) {
            case 1:
                var ae = -1;
                break;
            case 2:
                ae = 250;
                break;
            case 5:
                ae = 1073741823;
                break;
            case 4:
                ae = 1e4;
                break;
            default:
                ae = 5e3
        }
        return ae = b + ae, j = {
            id: p++,
            callback: J,
            priorityLevel: j,
            startTime: b,
            expirationTime: ae,
            sortIndex: -1
        }, b > ne ? (j.sortIndex = b, t(d, j), n(f) === null && j === n(d) && (S ? (y(z), z = -1) : S = !0, oe(P, b - ne))) : (j.sortIndex = ae, t(f, j), E || m || (E = !0, ue(N))), j
    }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(j) {
        var J = v;
        return function() {
            var b = v;
            v = J;
            try {
                return j.apply(this, arguments)
            } finally {
                v = b
            }
        }
    }
})(ES);
SS.exports = ES;
var jA = SS.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WA = I,
    $n = jA;

function te(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var CS = new Set,
    rs = {};

function jo(e, t) {
    zl(e, t), zl(e + "Capture", t)
}

function zl(e, t) {
    for (rs[e] = t, e = 0; e < t.length; e++) CS.add(t[e])
}
var si = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    vh = Object.prototype.hasOwnProperty,
    VA = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    d1 = {},
    p1 = {};

function qA(e) {
    return vh.call(p1, e) ? !0 : vh.call(d1, e) ? !1 : VA.test(e) ? p1[e] = !0 : (d1[e] = !0, !1)
}

function GA(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function KA(e, t, n, r) {
    if (t === null || typeof t > "u" || GA(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function un(e, t, n, r, i, l, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = s
}
var Ut = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ut[e] = new un(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Ut[t] = new un(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ut[e] = new un(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ut[e] = new un(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ut[e] = new un(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ut[e] = new un(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Ut[e] = new un(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ut[e] = new un(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Ut[e] = new un(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Hg = /[\-:]([a-z])/g;

function jg(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Hg, jg);
    Ut[t] = new un(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Hg, jg);
    Ut[t] = new un(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Hg, jg);
    Ut[t] = new un(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ut[e] = new un(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ut.xlinkHref = new un("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ut[e] = new un(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Wg(e, t, n, r) {
    var i = Ut.hasOwnProperty(t) ? Ut[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (KA(t, n, i, r) && (n = null), r || i === null ? qA(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var pi = WA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    _a = Symbol.for("react.element"),
    hl = Symbol.for("react.portal"),
    gl = Symbol.for("react.fragment"),
    Vg = Symbol.for("react.strict_mode"),
    yh = Symbol.for("react.profiler"),
    kS = Symbol.for("react.provider"),
    _S = Symbol.for("react.context"),
    qg = Symbol.for("react.forward_ref"),
    wh = Symbol.for("react.suspense"),
    xh = Symbol.for("react.suspense_list"),
    Gg = Symbol.for("react.memo"),
    Pi = Symbol.for("react.lazy"),
    bS = Symbol.for("react.offscreen"),
    h1 = Symbol.iterator;

function ku(e) {
    return e === null || typeof e != "object" ? null : (e = h1 && e[h1] || e["@@iterator"], typeof e == "function" ? e : null)
}
var vt = Object.assign,
    dp;

function Nu(e) {
    if (dp === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        dp = t && t[1] || ""
    }
    return `
` + dp + e
}
var pp = !1;

function hp(e, t) {
    if (!e || pp) return "";
    pp = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (d) {
                    var r = d
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (d) {
                    r = d
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                r = d
            }
            e()
        }
    } catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var i = d.stack.split(`
`), l = r.stack.split(`
`), s = i.length - 1, a = l.length - 1; 1 <= s && 0 <= a && i[s] !== l[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== l[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || i[s] !== l[a]) {
                                var f = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), f
                            } while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        pp = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Nu(e) : ""
}

function QA(e) {
    switch (e.tag) {
        case 5:
            return Nu(e.type);
        case 16:
            return Nu("Lazy");
        case 13:
            return Nu("Suspense");
        case 19:
            return Nu("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = hp(e.type, !1), e;
        case 11:
            return e = hp(e.type.render, !1), e;
        case 1:
            return e = hp(e.type, !0), e;
        default:
            return ""
    }
}

function Sh(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case gl:
            return "Fragment";
        case hl:
            return "Portal";
        case yh:
            return "Profiler";
        case Vg:
            return "StrictMode";
        case wh:
            return "Suspense";
        case xh:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case _S:
            return (e.displayName || "Context") + ".Consumer";
        case kS:
            return (e._context.displayName || "Context") + ".Provider";
        case qg:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Gg:
            return t = e.displayName || null, t !== null ? t : Sh(e.type) || "Memo";
        case Pi:
            t = e._payload, e = e._init;
            try {
                return Sh(e(t))
            } catch {}
    }
    return null
}

function YA(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Sh(t);
        case 8:
            return t === Vg ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Zi(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function OS(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function XA(e) {
    var t = OS(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            l = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s, l.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function ba(e) {
    e._valueTracker || (e._valueTracker = XA(e))
}

function TS(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = OS(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function dc(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Eh(e, t) {
    var n = t.checked;
    return vt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function g1(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Zi(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function IS(e, t) {
    t = t.checked, t != null && Wg(e, "checked", t, !1)
}

function Ch(e, t) {
    IS(e, t);
    var n = Zi(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? kh(e, t.type, n) : t.hasOwnProperty("defaultValue") && kh(e, t.type, Zi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function m1(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function kh(e, t, n) {
    (t !== "number" || dc(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Mu = Array.isArray;

function bl(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Zi(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function _h(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(te(91));
    return vt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function v1(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(te(92));
            if (Mu(n)) {
                if (1 < n.length) throw Error(te(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Zi(n)
    }
}

function RS(e, t) {
    var n = Zi(t.value),
        r = Zi(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function y1(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function PS(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function bh(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? PS(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Oa, AS = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Oa = Oa || document.createElement("div"), Oa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Oa.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function is(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Uu = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    ZA = ["Webkit", "ms", "Moz", "O"];
Object.keys(Uu).forEach(function(e) {
    ZA.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Uu[t] = Uu[e]
    })
});

function DS(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Uu.hasOwnProperty(e) && Uu[e] ? ("" + t).trim() : t + "px"
}

function NS(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = DS(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var JA = vt({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Oh(e, t) {
    if (t) {
        if (JA[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(te(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(te(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(te(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(te(62))
    }
}

function Th(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Ih = null;

function Kg(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Rh = null,
    Ol = null,
    Tl = null;

function w1(e) {
    if (e = Ts(e)) {
        if (typeof Rh != "function") throw Error(te(280));
        var t = e.stateNode;
        t && (t = uf(t), Rh(e.stateNode, e.type, t))
    }
}

function MS(e) {
    Ol ? Tl ? Tl.push(e) : Tl = [e] : Ol = e
}

function LS() {
    if (Ol) {
        var e = Ol,
            t = Tl;
        if (Tl = Ol = null, w1(e), t)
            for (e = 0; e < t.length; e++) w1(t[e])
    }
}

function FS(e, t) {
    return e(t)
}

function zS() {}
var gp = !1;

function $S(e, t, n) {
    if (gp) return e(t, n);
    gp = !0;
    try {
        return FS(e, t, n)
    } finally {
        gp = !1, (Ol !== null || Tl !== null) && (zS(), LS())
    }
}

function os(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = uf(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(te(231, t, typeof n));
    return n
}
var Ph = !1;
if (si) try {
    var _u = {};
    Object.defineProperty(_u, "passive", {
        get: function() {
            Ph = !0
        }
    }), window.addEventListener("test", _u, _u), window.removeEventListener("test", _u, _u)
} catch {
    Ph = !1
}

function eD(e, t, n, r, i, l, s, a, f) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, d)
    } catch (p) {
        this.onError(p)
    }
}
var Hu = !1,
    pc = null,
    hc = !1,
    Ah = null,
    tD = {
        onError: function(e) {
            Hu = !0, pc = e
        }
    };

function nD(e, t, n, r, i, l, s, a, f) {
    Hu = !1, pc = null, eD.apply(tD, arguments)
}

function rD(e, t, n, r, i, l, s, a, f) {
    if (nD.apply(this, arguments), Hu) {
        if (Hu) {
            var d = pc;
            Hu = !1, pc = null
        } else throw Error(te(198));
        hc || (hc = !0, Ah = d)
    }
}

function Wo(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function BS(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function x1(e) {
    if (Wo(e) !== e) throw Error(te(188))
}

function iD(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Wo(e), t === null) throw Error(te(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var l = i.alternate;
        if (l === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === l.child) {
            for (l = i.child; l;) {
                if (l === n) return x1(i), e;
                if (l === r) return x1(i), t;
                l = l.sibling
            }
            throw Error(te(188))
        }
        if (n.return !== r.return) n = i, r = l;
        else {
            for (var s = !1, a = i.child; a;) {
                if (a === n) {
                    s = !0, n = i, r = l;
                    break
                }
                if (a === r) {
                    s = !0, r = i, n = l;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = l.child; a;) {
                    if (a === n) {
                        s = !0, n = l, r = i;
                        break
                    }
                    if (a === r) {
                        s = !0, r = l, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(te(189))
            }
        }
        if (n.alternate !== r) throw Error(te(190))
    }
    if (n.tag !== 3) throw Error(te(188));
    return n.stateNode.current === n ? e : t
}

function US(e) {
    return e = iD(e), e !== null ? HS(e) : null
}

function HS(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = HS(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var jS = $n.unstable_scheduleCallback,
    S1 = $n.unstable_cancelCallback,
    oD = $n.unstable_shouldYield,
    lD = $n.unstable_requestPaint,
    Ct = $n.unstable_now,
    uD = $n.unstable_getCurrentPriorityLevel,
    Qg = $n.unstable_ImmediatePriority,
    WS = $n.unstable_UserBlockingPriority,
    gc = $n.unstable_NormalPriority,
    sD = $n.unstable_LowPriority,
    VS = $n.unstable_IdlePriority,
    nf = null,
    zr = null;

function aD(e) {
    if (zr && typeof zr.onCommitFiberRoot == "function") try {
        zr.onCommitFiberRoot(nf, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Cr = Math.clz32 ? Math.clz32 : dD,
    cD = Math.log,
    fD = Math.LN2;

function dD(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (cD(e) / fD | 0) | 0
}
var Ta = 64,
    Ia = 4194304;

function Lu(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function mc(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        l = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = Lu(a) : (l &= s, l !== 0 && (r = Lu(l)))
    } else s = n & ~i, s !== 0 ? r = Lu(s) : l !== 0 && (r = Lu(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, l = t & -t, i >= l || i === 16 && (l & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Cr(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function pD(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function hD(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
        var s = 31 - Cr(l),
            a = 1 << s,
            f = i[s];
        f === -1 ? (!(a & n) || a & r) && (i[s] = pD(a, t)) : f <= t && (e.expiredLanes |= a), l &= ~a
    }
}

function Dh(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function qS() {
    var e = Ta;
    return Ta <<= 1, !(Ta & 4194240) && (Ta = 64), e
}

function mp(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function bs(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Cr(t), e[t] = n
}

function gD(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Cr(n),
            l = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~l
    }
}

function Yg(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Cr(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var Ye = 0;

function GS(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var KS, Xg, QS, YS, XS, Nh = !1,
    Ra = [],
    $i = null,
    Bi = null,
    Ui = null,
    ls = new Map,
    us = new Map,
    Di = [],
    mD = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function E1(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            $i = null;
            break;
        case "dragenter":
        case "dragleave":
            Bi = null;
            break;
        case "mouseover":
        case "mouseout":
            Ui = null;
            break;
        case "pointerover":
        case "pointerout":
            ls.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            us.delete(t.pointerId)
    }
}

function bu(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i]
    }, t !== null && (t = Ts(t), t !== null && Xg(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function vD(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return $i = bu($i, e, t, n, r, i), !0;
        case "dragenter":
            return Bi = bu(Bi, e, t, n, r, i), !0;
        case "mouseover":
            return Ui = bu(Ui, e, t, n, r, i), !0;
        case "pointerover":
            var l = i.pointerId;
            return ls.set(l, bu(ls.get(l) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return l = i.pointerId, us.set(l, bu(us.get(l) || null, e, t, n, r, i)), !0
    }
    return !1
}

function ZS(e) {
    var t = bo(e.target);
    if (t !== null) {
        var n = Wo(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = BS(n), t !== null) {
                    e.blockedOn = t, XS(e.priority, function() {
                        QS(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Xa(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Mh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Ih = r, n.target.dispatchEvent(r), Ih = null
        } else return t = Ts(n), t !== null && Xg(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function C1(e, t, n) {
    Xa(e) && n.delete(t)
}

function yD() {
    Nh = !1, $i !== null && Xa($i) && ($i = null), Bi !== null && Xa(Bi) && (Bi = null), Ui !== null && Xa(Ui) && (Ui = null), ls.forEach(C1), us.forEach(C1)
}

function Ou(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Nh || (Nh = !0, $n.unstable_scheduleCallback($n.unstable_NormalPriority, yD)))
}

function ss(e) {
    function t(i) {
        return Ou(i, e)
    }
    if (0 < Ra.length) {
        Ou(Ra[0], e);
        for (var n = 1; n < Ra.length; n++) {
            var r = Ra[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for ($i !== null && Ou($i, e), Bi !== null && Ou(Bi, e), Ui !== null && Ou(Ui, e), ls.forEach(t), us.forEach(t), n = 0; n < Di.length; n++) r = Di[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Di.length && (n = Di[0], n.blockedOn === null);) ZS(n), n.blockedOn === null && Di.shift()
}
var Il = pi.ReactCurrentBatchConfig,
    vc = !0;

function wD(e, t, n, r) {
    var i = Ye,
        l = Il.transition;
    Il.transition = null;
    try {
        Ye = 1, Zg(e, t, n, r)
    } finally {
        Ye = i, Il.transition = l
    }
}

function xD(e, t, n, r) {
    var i = Ye,
        l = Il.transition;
    Il.transition = null;
    try {
        Ye = 4, Zg(e, t, n, r)
    } finally {
        Ye = i, Il.transition = l
    }
}

function Zg(e, t, n, r) {
    if (vc) {
        var i = Mh(e, t, n, r);
        if (i === null) bp(e, t, r, yc, n), E1(e, r);
        else if (vD(i, e, t, n, r)) r.stopPropagation();
        else if (E1(e, r), t & 4 && -1 < mD.indexOf(e)) {
            for (; i !== null;) {
                var l = Ts(i);
                if (l !== null && KS(l), l = Mh(e, t, n, r), l === null && bp(e, t, r, yc, n), l === i) break;
                i = l
            }
            i !== null && r.stopPropagation()
        } else bp(e, t, r, null, n)
    }
}
var yc = null;

function Mh(e, t, n, r) {
    if (yc = null, e = Kg(r), e = bo(e), e !== null)
        if (t = Wo(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = BS(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return yc = e, null
}

function JS(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (uD()) {
                case Qg:
                    return 1;
                case WS:
                    return 4;
                case gc:
                case sD:
                    return 16;
                case VS:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Fi = null,
    Jg = null,
    Za = null;

function eE() {
    if (Za) return Za;
    var e, t = Jg,
        n = t.length,
        r, i = "value" in Fi ? Fi.value : Fi.textContent,
        l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
    return Za = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Ja(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Pa() {
    return !0
}

function k1() {
    return !1
}

function Hn(e) {
    function t(n, r, i, l, s) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = l, this.target = s, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(l) : l[a]);
        return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Pa : k1, this.isPropagationStopped = k1, this
    }
    return vt(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pa)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pa)
        },
        persist: function() {},
        isPersistent: Pa
    }), t
}
var Jl = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    em = Hn(Jl),
    Os = vt({}, Jl, {
        view: 0,
        detail: 0
    }),
    SD = Hn(Os),
    vp, yp, Tu, rf = vt({}, Os, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: tm,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Tu && (Tu && e.type === "mousemove" ? (vp = e.screenX - Tu.screenX, yp = e.screenY - Tu.screenY) : yp = vp = 0, Tu = e), vp)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : yp
        }
    }),
    _1 = Hn(rf),
    ED = vt({}, rf, {
        dataTransfer: 0
    }),
    CD = Hn(ED),
    kD = vt({}, Os, {
        relatedTarget: 0
    }),
    wp = Hn(kD),
    _D = vt({}, Jl, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    bD = Hn(_D),
    OD = vt({}, Jl, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    TD = Hn(OD),
    ID = vt({}, Jl, {
        data: 0
    }),
    b1 = Hn(ID),
    RD = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    PD = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    AD = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function DD(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = AD[e]) ? !!t[e] : !1
}

function tm() {
    return DD
}
var ND = vt({}, Os, {
        key: function(e) {
            if (e.key) {
                var t = RD[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Ja(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? PD[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: tm,
        charCode: function(e) {
            return e.type === "keypress" ? Ja(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Ja(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    MD = Hn(ND),
    LD = vt({}, rf, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    O1 = Hn(LD),
    FD = vt({}, Os, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: tm
    }),
    zD = Hn(FD),
    $D = vt({}, Jl, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    BD = Hn($D),
    UD = vt({}, rf, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    HD = Hn(UD),
    jD = [9, 13, 27, 32],
    nm = si && "CompositionEvent" in window,
    ju = null;
si && "documentMode" in document && (ju = document.documentMode);
var WD = si && "TextEvent" in window && !ju,
    tE = si && (!nm || ju && 8 < ju && 11 >= ju),
    T1 = String.fromCharCode(32),
    I1 = !1;

function nE(e, t) {
    switch (e) {
        case "keyup":
            return jD.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function rE(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var ml = !1;

function VD(e, t) {
    switch (e) {
        case "compositionend":
            return rE(t);
        case "keypress":
            return t.which !== 32 ? null : (I1 = !0, T1);
        case "textInput":
            return e = t.data, e === T1 && I1 ? null : e;
        default:
            return null
    }
}

function qD(e, t) {
    if (ml) return e === "compositionend" || !nm && nE(e, t) ? (e = eE(), Za = Jg = Fi = null, ml = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return tE && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var GD = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function R1(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!GD[e.type] : t === "textarea"
}

function iE(e, t, n, r) {
    MS(r), t = wc(t, "onChange"), 0 < t.length && (n = new em("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Wu = null,
    as = null;

function KD(e) {
    gE(e, 0)
}

function of(e) {
    var t = wl(e);
    if (TS(t)) return e
}

function QD(e, t) {
    if (e === "change") return t
}
var oE = !1;
if (si) {
    var xp;
    if (si) {
        var Sp = "oninput" in document;
        if (!Sp) {
            var P1 = document.createElement("div");
            P1.setAttribute("oninput", "return;"), Sp = typeof P1.oninput == "function"
        }
        xp = Sp
    } else xp = !1;
    oE = xp && (!document.documentMode || 9 < document.documentMode)
}

function A1() {
    Wu && (Wu.detachEvent("onpropertychange", lE), as = Wu = null)
}

function lE(e) {
    if (e.propertyName === "value" && of(as)) {
        var t = [];
        iE(t, as, e, Kg(e)), $S(KD, t)
    }
}

function YD(e, t, n) {
    e === "focusin" ? (A1(), Wu = t, as = n, Wu.attachEvent("onpropertychange", lE)) : e === "focusout" && A1()
}

function XD(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return of(as)
}

function ZD(e, t) {
    if (e === "click") return of(t)
}

function JD(e, t) {
    if (e === "input" || e === "change") return of(t)
}

function eN(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var _r = typeof Object.is == "function" ? Object.is : eN;

function cs(e, t) {
    if (_r(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!vh.call(t, i) || !_r(e[i], t[i])) return !1
    }
    return !0
}

function D1(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function N1(e, t) {
    var n = D1(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = D1(n)
    }
}

function uE(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? uE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function sE() {
    for (var e = window, t = dc(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = dc(e.document)
    }
    return t
}

function rm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function tN(e) {
    var t = sE(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && uE(n.ownerDocument.documentElement, n)) {
        if (r !== null && rm(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    l = Math.min(r.start, i);
                r = r.end === void 0 ? l : Math.min(r.end, i), !e.extend && l > r && (i = r, r = l, l = i), i = N1(n, l);
                var s = N1(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var nN = si && "documentMode" in document && 11 >= document.documentMode,
    vl = null,
    Lh = null,
    Vu = null,
    Fh = !1;

function M1(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Fh || vl == null || vl !== dc(r) || (r = vl, "selectionStart" in r && rm(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Vu && cs(Vu, r) || (Vu = r, r = wc(Lh, "onSelect"), 0 < r.length && (t = new em("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = vl)))
}

function Aa(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var yl = {
        animationend: Aa("Animation", "AnimationEnd"),
        animationiteration: Aa("Animation", "AnimationIteration"),
        animationstart: Aa("Animation", "AnimationStart"),
        transitionend: Aa("Transition", "TransitionEnd")
    },
    Ep = {},
    aE = {};
si && (aE = document.createElement("div").style, "AnimationEvent" in window || (delete yl.animationend.animation, delete yl.animationiteration.animation, delete yl.animationstart.animation), "TransitionEvent" in window || delete yl.transitionend.transition);

function lf(e) {
    if (Ep[e]) return Ep[e];
    if (!yl[e]) return e;
    var t = yl[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in aE) return Ep[e] = t[n];
    return e
}
var cE = lf("animationend"),
    fE = lf("animationiteration"),
    dE = lf("animationstart"),
    pE = lf("transitionend"),
    hE = new Map,
    L1 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function oo(e, t) {
    hE.set(e, t), jo(t, [e])
}
for (var Cp = 0; Cp < L1.length; Cp++) {
    var kp = L1[Cp],
        rN = kp.toLowerCase(),
        iN = kp[0].toUpperCase() + kp.slice(1);
    oo(rN, "on" + iN)
}
oo(cE, "onAnimationEnd");
oo(fE, "onAnimationIteration");
oo(dE, "onAnimationStart");
oo("dblclick", "onDoubleClick");
oo("focusin", "onFocus");
oo("focusout", "onBlur");
oo(pE, "onTransitionEnd");
zl("onMouseEnter", ["mouseout", "mouseover"]);
zl("onMouseLeave", ["mouseout", "mouseover"]);
zl("onPointerEnter", ["pointerout", "pointerover"]);
zl("onPointerLeave", ["pointerout", "pointerover"]);
jo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
jo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
jo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
jo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
jo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Fu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    oN = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fu));

function F1(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, rD(r, t, void 0, e), e.currentTarget = null
}

function gE(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        f = a.instance,
                        d = a.currentTarget;
                    if (a = a.listener, f !== l && i.isPropagationStopped()) break e;
                    F1(i, a, d), l = f
                } else
                    for (s = 0; s < r.length; s++) {
                        if (a = r[s], f = a.instance, d = a.currentTarget, a = a.listener, f !== l && i.isPropagationStopped()) break e;
                        F1(i, a, d), l = f
                    }
        }
    }
    if (hc) throw e = Ah, hc = !1, Ah = null, e
}

function lt(e, t) {
    var n = t[Hh];
    n === void 0 && (n = t[Hh] = new Set);
    var r = e + "__bubble";
    n.has(r) || (mE(t, e, 2, !1), n.add(r))
}

function _p(e, t, n) {
    var r = 0;
    t && (r |= 4), mE(n, e, r, t)
}
var Da = "_reactListening" + Math.random().toString(36).slice(2);

function fs(e) {
    if (!e[Da]) {
        e[Da] = !0, CS.forEach(function(n) {
            n !== "selectionchange" && (oN.has(n) || _p(n, !1, e), _p(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Da] || (t[Da] = !0, _p("selectionchange", !1, t))
    }
}

function mE(e, t, n, r) {
    switch (JS(t)) {
        case 1:
            var i = wD;
            break;
        case 4:
            i = xD;
            break;
        default:
            i = Zg
    }
    n = i.bind(null, t, n, e), i = void 0, !Ph || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function bp(e, t, n, r, i) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var f = s.tag;
                    if ((f === 3 || f === 4) && (f = s.stateNode.containerInfo, f === i || f.nodeType === 8 && f.parentNode === i)) return;
                    s = s.return
                }
            for (; a !== null;) {
                if (s = bo(a), s === null) return;
                if (f = s.tag, f === 5 || f === 6) {
                    r = l = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    $S(function() {
        var d = l,
            p = Kg(n),
            g = [];
        e: {
            var v = hE.get(e);
            if (v !== void 0) {
                var m = em,
                    E = e;
                switch (e) {
                    case "keypress":
                        if (Ja(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        m = MD;
                        break;
                    case "focusin":
                        E = "focus", m = wp;
                        break;
                    case "focusout":
                        E = "blur", m = wp;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        m = wp;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        m = _1;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        m = CD;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        m = zD;
                        break;
                    case cE:
                    case fE:
                    case dE:
                        m = bD;
                        break;
                    case pE:
                        m = BD;
                        break;
                    case "scroll":
                        m = SD;
                        break;
                    case "wheel":
                        m = HD;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        m = TD;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        m = O1
                }
                var S = (t & 4) !== 0,
                    A = !S && e === "scroll",
                    y = S ? v !== null ? v + "Capture" : null : v;
                S = [];
                for (var x = d, k; x !== null;) {
                    k = x;
                    var P = k.stateNode;
                    if (k.tag === 5 && P !== null && (k = P, y !== null && (P = os(x, y), P != null && S.push(ds(x, P, k)))), A) break;
                    x = x.return
                }
                0 < S.length && (v = new m(v, E, null, n, p), g.push({
                    event: v,
                    listeners: S
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (v = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", v && n !== Ih && (E = n.relatedTarget || n.fromElement) && (bo(E) || E[ai])) break e;
                if ((m || v) && (v = p.window === p ? p : (v = p.ownerDocument) ? v.defaultView || v.parentWindow : window, m ? (E = n.relatedTarget || n.toElement, m = d, E = E ? bo(E) : null, E !== null && (A = Wo(E), E !== A || E.tag !== 5 && E.tag !== 6) && (E = null)) : (m = null, E = d), m !== E)) {
                    if (S = _1, P = "onMouseLeave", y = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (S = O1, P = "onPointerLeave", y = "onPointerEnter", x = "pointer"), A = m == null ? v : wl(m), k = E == null ? v : wl(E), v = new S(P, x + "leave", m, n, p), v.target = A, v.relatedTarget = k, P = null, bo(p) === d && (S = new S(y, x + "enter", E, n, p), S.target = k, S.relatedTarget = A, P = S), A = P, m && E) t: {
                        for (S = m, y = E, x = 0, k = S; k; k = sl(k)) x++;
                        for (k = 0, P = y; P; P = sl(P)) k++;
                        for (; 0 < x - k;) S = sl(S),
                        x--;
                        for (; 0 < k - x;) y = sl(y),
                        k--;
                        for (; x--;) {
                            if (S === y || y !== null && S === y.alternate) break t;
                            S = sl(S), y = sl(y)
                        }
                        S = null
                    }
                    else S = null;
                    m !== null && z1(g, v, m, S, !1), E !== null && A !== null && z1(g, A, E, S, !0)
                }
            }
            e: {
                if (v = d ? wl(d) : window, m = v.nodeName && v.nodeName.toLowerCase(), m === "select" || m === "input" && v.type === "file") var N = QD;
                else if (R1(v))
                    if (oE) N = JD;
                    else {
                        N = XD;
                        var T = YD
                    }
                else(m = v.nodeName) && m.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (N = ZD);
                if (N && (N = N(e, d))) {
                    iE(g, N, n, p);
                    break e
                }
                T && T(e, v, d),
                e === "focusout" && (T = v._wrapperState) && T.controlled && v.type === "number" && kh(v, "number", v.value)
            }
            switch (T = d ? wl(d) : window, e) {
                case "focusin":
                    (R1(T) || T.contentEditable === "true") && (vl = T, Lh = d, Vu = null);
                    break;
                case "focusout":
                    Vu = Lh = vl = null;
                    break;
                case "mousedown":
                    Fh = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Fh = !1, M1(g, n, p);
                    break;
                case "selectionchange":
                    if (nN) break;
                case "keydown":
                case "keyup":
                    M1(g, n, p)
            }
            var F;
            if (nm) e: {
                switch (e) {
                    case "compositionstart":
                        var z = "onCompositionStart";
                        break e;
                    case "compositionend":
                        z = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        z = "onCompositionUpdate";
                        break e
                }
                z = void 0
            }
            else ml ? nE(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");z && (tE && n.locale !== "ko" && (ml || z !== "onCompositionStart" ? z === "onCompositionEnd" && ml && (F = eE()) : (Fi = p, Jg = "value" in Fi ? Fi.value : Fi.textContent, ml = !0)), T = wc(d, z), 0 < T.length && (z = new b1(z, e, null, n, p), g.push({
                event: z,
                listeners: T
            }), F ? z.data = F : (F = rE(n), F !== null && (z.data = F)))),
            (F = WD ? VD(e, n) : qD(e, n)) && (d = wc(d, "onBeforeInput"), 0 < d.length && (p = new b1("onBeforeInput", "beforeinput", null, n, p), g.push({
                event: p,
                listeners: d
            }), p.data = F))
        }
        gE(g, t)
    })
}

function ds(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function wc(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            l = i.stateNode;
        i.tag === 5 && l !== null && (i = l, l = os(e, n), l != null && r.unshift(ds(e, l, i)), l = os(e, t), l != null && r.push(ds(e, l, i))), e = e.return
    }
    return r
}

function sl(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function z1(e, t, n, r, i) {
    for (var l = t._reactName, s = []; n !== null && n !== r;) {
        var a = n,
            f = a.alternate,
            d = a.stateNode;
        if (f !== null && f === r) break;
        a.tag === 5 && d !== null && (a = d, i ? (f = os(n, l), f != null && s.unshift(ds(n, f, a))) : i || (f = os(n, l), f != null && s.push(ds(n, f, a)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var lN = /\r\n?/g,
    uN = /\u0000|\uFFFD/g;

function $1(e) {
    return (typeof e == "string" ? e : "" + e).replace(lN, `
`).replace(uN, "")
}

function Na(e, t, n) {
    if (t = $1(t), $1(e) !== t && n) throw Error(te(425))
}

function xc() {}
var zh = null,
    $h = null;

function Bh(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Uh = typeof setTimeout == "function" ? setTimeout : void 0,
    sN = typeof clearTimeout == "function" ? clearTimeout : void 0,
    B1 = typeof Promise == "function" ? Promise : void 0,
    aN = typeof queueMicrotask == "function" ? queueMicrotask : typeof B1 < "u" ? function(e) {
        return B1.resolve(null).then(e).catch(cN)
    } : Uh;

function cN(e) {
    setTimeout(function() {
        throw e
    })
}

function Op(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), ss(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    ss(t)
}

function Hi(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function U1(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var eu = Math.random().toString(36).slice(2),
    Mr = "__reactFiber$" + eu,
    ps = "__reactProps$" + eu,
    ai = "__reactContainer$" + eu,
    Hh = "__reactEvents$" + eu,
    fN = "__reactListeners$" + eu,
    dN = "__reactHandles$" + eu;

function bo(e) {
    var t = e[Mr];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[ai] || n[Mr]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = U1(e); e !== null;) {
                    if (n = e[Mr]) return n;
                    e = U1(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Ts(e) {
    return e = e[Mr] || e[ai], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function wl(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(te(33))
}

function uf(e) {
    return e[ps] || null
}
var jh = [],
    xl = -1;

function lo(e) {
    return {
        current: e
    }
}

function st(e) {
    0 > xl || (e.current = jh[xl], jh[xl] = null, xl--)
}

function nt(e, t) {
    xl++, jh[xl] = e.current, e.current = t
}
var Ji = {},
    Xt = lo(Ji),
    yn = lo(!1),
    No = Ji;

function $l(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ji;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        l;
    for (l in n) i[l] = t[l];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function wn(e) {
    return e = e.childContextTypes, e != null
}

function Sc() {
    st(yn), st(Xt)
}

function H1(e, t, n) {
    if (Xt.current !== Ji) throw Error(te(168));
    nt(Xt, t), nt(yn, n)
}

function vE(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(te(108, YA(e) || "Unknown", i));
    return vt({}, n, r)
}

function Ec(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ji, No = Xt.current, nt(Xt, e), nt(yn, yn.current), !0
}

function j1(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(te(169));
    n ? (e = vE(e, t, No), r.__reactInternalMemoizedMergedChildContext = e, st(yn), st(Xt), nt(Xt, e)) : st(yn), nt(yn, n)
}
var ii = null,
    sf = !1,
    Tp = !1;

function yE(e) {
    ii === null ? ii = [e] : ii.push(e)
}

function pN(e) {
    sf = !0, yE(e)
}

function uo() {
    if (!Tp && ii !== null) {
        Tp = !0;
        var e = 0,
            t = Ye;
        try {
            var n = ii;
            for (Ye = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            ii = null, sf = !1
        } catch (i) {
            throw ii !== null && (ii = ii.slice(e + 1)), jS(Qg, uo), i
        } finally {
            Ye = t, Tp = !1
        }
    }
    return null
}
var Sl = [],
    El = 0,
    Cc = null,
    kc = 0,
    tr = [],
    nr = 0,
    Mo = null,
    oi = 1,
    li = "";

function xo(e, t) {
    Sl[El++] = kc, Sl[El++] = Cc, Cc = e, kc = t
}

function wE(e, t, n) {
    tr[nr++] = oi, tr[nr++] = li, tr[nr++] = Mo, Mo = e;
    var r = oi;
    e = li;
    var i = 32 - Cr(r) - 1;
    r &= ~(1 << i), n += 1;
    var l = 32 - Cr(t) + i;
    if (30 < l) {
        var s = i - i % 5;
        l = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, oi = 1 << 32 - Cr(t) + i | n << i | r, li = l + e
    } else oi = 1 << l | n << i | r, li = e
}

function im(e) {
    e.return !== null && (xo(e, 1), wE(e, 1, 0))
}

function om(e) {
    for (; e === Cc;) Cc = Sl[--El], Sl[El] = null, kc = Sl[--El], Sl[El] = null;
    for (; e === Mo;) Mo = tr[--nr], tr[nr] = null, li = tr[--nr], tr[nr] = null, oi = tr[--nr], tr[nr] = null
}
var Fn = null,
    Mn = null,
    pt = !1,
    Sr = null;

function xE(e, t) {
    var n = or(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function W1(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Fn = e, Mn = Hi(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Fn = e, Mn = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Mo !== null ? {
                id: oi,
                overflow: li
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = or(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Fn = e, Mn = null, !0) : !1;
        default:
            return !1
    }
}

function Wh(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Vh(e) {
    if (pt) {
        var t = Mn;
        if (t) {
            var n = t;
            if (!W1(e, t)) {
                if (Wh(e)) throw Error(te(418));
                t = Hi(n.nextSibling);
                var r = Fn;
                t && W1(e, t) ? xE(r, n) : (e.flags = e.flags & -4097 | 2, pt = !1, Fn = e)
            }
        } else {
            if (Wh(e)) throw Error(te(418));
            e.flags = e.flags & -4097 | 2, pt = !1, Fn = e
        }
    }
}

function V1(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Fn = e
}

function Ma(e) {
    if (e !== Fn) return !1;
    if (!pt) return V1(e), pt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Bh(e.type, e.memoizedProps)), t && (t = Mn)) {
        if (Wh(e)) throw SE(), Error(te(418));
        for (; t;) xE(e, t), t = Hi(t.nextSibling)
    }
    if (V1(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(te(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Mn = Hi(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Mn = null
        }
    } else Mn = Fn ? Hi(e.stateNode.nextSibling) : null;
    return !0
}

function SE() {
    for (var e = Mn; e;) e = Hi(e.nextSibling)
}

function Bl() {
    Mn = Fn = null, pt = !1
}

function lm(e) {
    Sr === null ? Sr = [e] : Sr.push(e)
}
var hN = pi.ReactCurrentBatchConfig;

function Iu(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(te(309));
                var r = n.stateNode
            }
            if (!r) throw Error(te(147, e));
            var i = r,
                l = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(s) {
                var a = i.refs;
                s === null ? delete a[l] : a[l] = s
            }, t._stringRef = l, t)
        }
        if (typeof e != "string") throw Error(te(284));
        if (!n._owner) throw Error(te(290, e))
    }
    return e
}

function La(e, t) {
    throw e = Object.prototype.toString.call(t), Error(te(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function q1(e) {
    var t = e._init;
    return t(e._payload)
}

function EE(e) {
    function t(y, x) {
        if (e) {
            var k = y.deletions;
            k === null ? (y.deletions = [x], y.flags |= 16) : k.push(x)
        }
    }

    function n(y, x) {
        if (!e) return null;
        for (; x !== null;) t(y, x), x = x.sibling;
        return null
    }

    function r(y, x) {
        for (y = new Map; x !== null;) x.key !== null ? y.set(x.key, x) : y.set(x.index, x), x = x.sibling;
        return y
    }

    function i(y, x) {
        return y = qi(y, x), y.index = 0, y.sibling = null, y
    }

    function l(y, x, k) {
        return y.index = k, e ? (k = y.alternate, k !== null ? (k = k.index, k < x ? (y.flags |= 2, x) : k) : (y.flags |= 2, x)) : (y.flags |= 1048576, x)
    }

    function s(y) {
        return e && y.alternate === null && (y.flags |= 2), y
    }

    function a(y, x, k, P) {
        return x === null || x.tag !== 6 ? (x = Mp(k, y.mode, P), x.return = y, x) : (x = i(x, k), x.return = y, x)
    }

    function f(y, x, k, P) {
        var N = k.type;
        return N === gl ? p(y, x, k.props.children, P, k.key) : x !== null && (x.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Pi && q1(N) === x.type) ? (P = i(x, k.props), P.ref = Iu(y, x, k), P.return = y, P) : (P = lc(k.type, k.key, k.props, null, y.mode, P), P.ref = Iu(y, x, k), P.return = y, P)
    }

    function d(y, x, k, P) {
        return x === null || x.tag !== 4 || x.stateNode.containerInfo !== k.containerInfo || x.stateNode.implementation !== k.implementation ? (x = Lp(k, y.mode, P), x.return = y, x) : (x = i(x, k.children || []), x.return = y, x)
    }

    function p(y, x, k, P, N) {
        return x === null || x.tag !== 7 ? (x = Po(k, y.mode, P, N), x.return = y, x) : (x = i(x, k), x.return = y, x)
    }

    function g(y, x, k) {
        if (typeof x == "string" && x !== "" || typeof x == "number") return x = Mp("" + x, y.mode, k), x.return = y, x;
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case _a:
                    return k = lc(x.type, x.key, x.props, null, y.mode, k), k.ref = Iu(y, null, x), k.return = y, k;
                case hl:
                    return x = Lp(x, y.mode, k), x.return = y, x;
                case Pi:
                    var P = x._init;
                    return g(y, P(x._payload), k)
            }
            if (Mu(x) || ku(x)) return x = Po(x, y.mode, k, null), x.return = y, x;
            La(y, x)
        }
        return null
    }

    function v(y, x, k, P) {
        var N = x !== null ? x.key : null;
        if (typeof k == "string" && k !== "" || typeof k == "number") return N !== null ? null : a(y, x, "" + k, P);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case _a:
                    return k.key === N ? f(y, x, k, P) : null;
                case hl:
                    return k.key === N ? d(y, x, k, P) : null;
                case Pi:
                    return N = k._init, v(y, x, N(k._payload), P)
            }
            if (Mu(k) || ku(k)) return N !== null ? null : p(y, x, k, P, null);
            La(y, k)
        }
        return null
    }

    function m(y, x, k, P, N) {
        if (typeof P == "string" && P !== "" || typeof P == "number") return y = y.get(k) || null, a(x, y, "" + P, N);
        if (typeof P == "object" && P !== null) {
            switch (P.$$typeof) {
                case _a:
                    return y = y.get(P.key === null ? k : P.key) || null, f(x, y, P, N);
                case hl:
                    return y = y.get(P.key === null ? k : P.key) || null, d(x, y, P, N);
                case Pi:
                    var T = P._init;
                    return m(y, x, k, T(P._payload), N)
            }
            if (Mu(P) || ku(P)) return y = y.get(k) || null, p(x, y, P, N, null);
            La(x, P)
        }
        return null
    }

    function E(y, x, k, P) {
        for (var N = null, T = null, F = x, z = x = 0, q = null; F !== null && z < k.length; z++) {
            F.index > z ? (q = F, F = null) : q = F.sibling;
            var Q = v(y, F, k[z], P);
            if (Q === null) {
                F === null && (F = q);
                break
            }
            e && F && Q.alternate === null && t(y, F), x = l(Q, x, z), T === null ? N = Q : T.sibling = Q, T = Q, F = q
        }
        if (z === k.length) return n(y, F), pt && xo(y, z), N;
        if (F === null) {
            for (; z < k.length; z++) F = g(y, k[z], P), F !== null && (x = l(F, x, z), T === null ? N = F : T.sibling = F, T = F);
            return pt && xo(y, z), N
        }
        for (F = r(y, F); z < k.length; z++) q = m(F, y, z, k[z], P), q !== null && (e && q.alternate !== null && F.delete(q.key === null ? z : q.key), x = l(q, x, z), T === null ? N = q : T.sibling = q, T = q);
        return e && F.forEach(function($) {
            return t(y, $)
        }), pt && xo(y, z), N
    }

    function S(y, x, k, P) {
        var N = ku(k);
        if (typeof N != "function") throw Error(te(150));
        if (k = N.call(k), k == null) throw Error(te(151));
        for (var T = N = null, F = x, z = x = 0, q = null, Q = k.next(); F !== null && !Q.done; z++, Q = k.next()) {
            F.index > z ? (q = F, F = null) : q = F.sibling;
            var $ = v(y, F, Q.value, P);
            if ($ === null) {
                F === null && (F = q);
                break
            }
            e && F && $.alternate === null && t(y, F), x = l($, x, z), T === null ? N = $ : T.sibling = $, T = $, F = q
        }
        if (Q.done) return n(y, F), pt && xo(y, z), N;
        if (F === null) {
            for (; !Q.done; z++, Q = k.next()) Q = g(y, Q.value, P), Q !== null && (x = l(Q, x, z), T === null ? N = Q : T.sibling = Q, T = Q);
            return pt && xo(y, z), N
        }
        for (F = r(y, F); !Q.done; z++, Q = k.next()) Q = m(F, y, z, Q.value, P), Q !== null && (e && Q.alternate !== null && F.delete(Q.key === null ? z : Q.key), x = l(Q, x, z), T === null ? N = Q : T.sibling = Q, T = Q);
        return e && F.forEach(function(G) {
            return t(y, G)
        }), pt && xo(y, z), N
    }

    function A(y, x, k, P) {
        if (typeof k == "object" && k !== null && k.type === gl && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case _a:
                    e: {
                        for (var N = k.key, T = x; T !== null;) {
                            if (T.key === N) {
                                if (N = k.type, N === gl) {
                                    if (T.tag === 7) {
                                        n(y, T.sibling), x = i(T, k.props.children), x.return = y, y = x;
                                        break e
                                    }
                                } else if (T.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Pi && q1(N) === T.type) {
                                    n(y, T.sibling), x = i(T, k.props), x.ref = Iu(y, T, k), x.return = y, y = x;
                                    break e
                                }
                                n(y, T);
                                break
                            } else t(y, T);
                            T = T.sibling
                        }
                        k.type === gl ? (x = Po(k.props.children, y.mode, P, k.key), x.return = y, y = x) : (P = lc(k.type, k.key, k.props, null, y.mode, P), P.ref = Iu(y, x, k), P.return = y, y = P)
                    }
                    return s(y);
                case hl:
                    e: {
                        for (T = k.key; x !== null;) {
                            if (x.key === T)
                                if (x.tag === 4 && x.stateNode.containerInfo === k.containerInfo && x.stateNode.implementation === k.implementation) {
                                    n(y, x.sibling), x = i(x, k.children || []), x.return = y, y = x;
                                    break e
                                } else {
                                    n(y, x);
                                    break
                                }
                            else t(y, x);
                            x = x.sibling
                        }
                        x = Lp(k, y.mode, P),
                        x.return = y,
                        y = x
                    }
                    return s(y);
                case Pi:
                    return T = k._init, A(y, x, T(k._payload), P)
            }
            if (Mu(k)) return E(y, x, k, P);
            if (ku(k)) return S(y, x, k, P);
            La(y, k)
        }
        return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, x !== null && x.tag === 6 ? (n(y, x.sibling), x = i(x, k), x.return = y, y = x) : (n(y, x), x = Mp(k, y.mode, P), x.return = y, y = x), s(y)) : n(y, x)
    }
    return A
}
var Ul = EE(!0),
    CE = EE(!1),
    _c = lo(null),
    bc = null,
    Cl = null,
    um = null;

function sm() {
    um = Cl = bc = null
}

function am(e) {
    var t = _c.current;
    st(_c), e._currentValue = t
}

function qh(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Rl(e, t) {
    bc = e, um = Cl = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (mn = !0), e.firstContext = null)
}

function sr(e) {
    var t = e._currentValue;
    if (um !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Cl === null) {
            if (bc === null) throw Error(te(308));
            Cl = e, bc.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Cl = Cl.next = e;
    return t
}
var Oo = null;

function cm(e) {
    Oo === null ? Oo = [e] : Oo.push(e)
}

function kE(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, cm(t)) : (n.next = i.next, i.next = n), t.interleaved = n, ci(e, r)
}

function ci(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ai = !1;

function fm(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function _E(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function ui(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function ji(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, $e & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, ci(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, cm(r)) : (t.next = i.next, i.next = t), r.interleaved = t, ci(e, n)
}

function ec(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Yg(e, n)
    }
}

function G1(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            l = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                l === null ? i = l = s : l = l.next = s, n = n.next
            } while (n !== null);
            l === null ? i = l = t : l = l.next = t
        } else i = l = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: l,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Oc(e, t, n, r) {
    var i = e.updateQueue;
    Ai = !1;
    var l = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var f = a,
            d = f.next;
        f.next = null, s === null ? l = d : s.next = d, s = f;
        var p = e.alternate;
        p !== null && (p = p.updateQueue, a = p.lastBaseUpdate, a !== s && (a === null ? p.firstBaseUpdate = d : a.next = d, p.lastBaseUpdate = f))
    }
    if (l !== null) {
        var g = i.baseState;
        s = 0, p = d = f = null, a = l;
        do {
            var v = a.lane,
                m = a.eventTime;
            if ((r & v) === v) {
                p !== null && (p = p.next = {
                    eventTime: m,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var E = e,
                        S = a;
                    switch (v = t, m = n, S.tag) {
                        case 1:
                            if (E = S.payload, typeof E == "function") {
                                g = E.call(m, g, v);
                                break e
                            }
                            g = E;
                            break e;
                        case 3:
                            E.flags = E.flags & -65537 | 128;
                        case 0:
                            if (E = S.payload, v = typeof E == "function" ? E.call(m, g, v) : E, v == null) break e;
                            g = vt({}, g, v);
                            break e;
                        case 2:
                            Ai = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, v = i.effects, v === null ? i.effects = [a] : v.push(a))
            } else m = {
                eventTime: m,
                lane: v,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, p === null ? (d = p = m, f = g) : p = p.next = m, s |= v;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                v = a, a = v.next, v.next = null, i.lastBaseUpdate = v, i.shared.pending = null
            }
        } while (1);
        if (p === null && (f = g), i.baseState = f, i.firstBaseUpdate = d, i.lastBaseUpdate = p, t = i.shared.interleaved, t !== null) {
            i = t;
            do s |= i.lane, i = i.next; while (i !== t)
        } else l === null && (i.shared.lanes = 0);
        Fo |= s, e.lanes = s, e.memoizedState = g
    }
}

function K1(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(te(191, i));
                i.call(r)
            }
        }
}
var Is = {},
    $r = lo(Is),
    hs = lo(Is),
    gs = lo(Is);

function To(e) {
    if (e === Is) throw Error(te(174));
    return e
}

function dm(e, t) {
    switch (nt(gs, t), nt(hs, e), nt($r, Is), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : bh(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = bh(t, e)
    }
    st($r), nt($r, t)
}

function Hl() {
    st($r), st(hs), st(gs)
}

function bE(e) {
    To(gs.current);
    var t = To($r.current),
        n = bh(t, e.type);
    t !== n && (nt(hs, e), nt($r, n))
}

function pm(e) {
    hs.current === e && (st($r), st(hs))
}
var gt = lo(0);

function Tc(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ip = [];

function hm() {
    for (var e = 0; e < Ip.length; e++) Ip[e]._workInProgressVersionPrimary = null;
    Ip.length = 0
}
var tc = pi.ReactCurrentDispatcher,
    Rp = pi.ReactCurrentBatchConfig,
    Lo = 0,
    mt = null,
    Tt = null,
    At = null,
    Ic = !1,
    qu = !1,
    ms = 0,
    gN = 0;

function Vt() {
    throw Error(te(321))
}

function gm(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!_r(e[n], t[n])) return !1;
    return !0
}

function mm(e, t, n, r, i, l) {
    if (Lo = l, mt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, tc.current = e === null || e.memoizedState === null ? wN : xN, e = n(r, i), qu) {
        l = 0;
        do {
            if (qu = !1, ms = 0, 25 <= l) throw Error(te(301));
            l += 1, At = Tt = null, t.updateQueue = null, tc.current = SN, e = n(r, i)
        } while (qu)
    }
    if (tc.current = Rc, t = Tt !== null && Tt.next !== null, Lo = 0, At = Tt = mt = null, Ic = !1, t) throw Error(te(300));
    return e
}

function vm() {
    var e = ms !== 0;
    return ms = 0, e
}

function Dr() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return At === null ? mt.memoizedState = At = e : At = At.next = e, At
}

function ar() {
    if (Tt === null) {
        var e = mt.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Tt.next;
    var t = At === null ? mt.memoizedState : At.next;
    if (t !== null) At = t, Tt = e;
    else {
        if (e === null) throw Error(te(310));
        Tt = e, e = {
            memoizedState: Tt.memoizedState,
            baseState: Tt.baseState,
            baseQueue: Tt.baseQueue,
            queue: Tt.queue,
            next: null
        }, At === null ? mt.memoizedState = At = e : At = At.next = e
    }
    return At
}

function vs(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Pp(e) {
    var t = ar(),
        n = t.queue;
    if (n === null) throw Error(te(311));
    n.lastRenderedReducer = e;
    var r = Tt,
        i = r.baseQueue,
        l = n.pending;
    if (l !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = l.next, l.next = s
        }
        r.baseQueue = i = l, n.pending = null
    }
    if (i !== null) {
        l = i.next, r = r.baseState;
        var a = s = null,
            f = null,
            d = l;
        do {
            var p = d.lane;
            if ((Lo & p) === p) f !== null && (f = f.next = {
                lane: 0,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null
            }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
                var g = {
                    lane: p,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                f === null ? (a = f = g, s = r) : f = f.next = g, mt.lanes |= p, Fo |= p
            }
            d = d.next
        } while (d !== null && d !== l);
        f === null ? s = r : f.next = a, _r(r, t.memoizedState) || (mn = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = f, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do l = i.lane, mt.lanes |= l, Fo |= l, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Ap(e) {
    var t = ar(),
        n = t.queue;
    if (n === null) throw Error(te(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        l = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do l = e(l, s.action), s = s.next; while (s !== i);
        _r(l, t.memoizedState) || (mn = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l
    }
    return [l, r]
}

function OE() {}

function TE(e, t) {
    var n = mt,
        r = ar(),
        i = t(),
        l = !_r(r.memoizedState, i);
    if (l && (r.memoizedState = i, mn = !0), r = r.queue, ym(PE.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || At !== null && At.memoizedState.tag & 1) {
        if (n.flags |= 2048, ys(9, RE.bind(null, n, r, i, t), void 0, null), Dt === null) throw Error(te(349));
        Lo & 30 || IE(n, t, i)
    }
    return i
}

function IE(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = mt.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, mt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function RE(e, t, n, r) {
    t.value = n, t.getSnapshot = r, AE(t) && DE(e)
}

function PE(e, t, n) {
    return n(function() {
        AE(t) && DE(e)
    })
}

function AE(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !_r(e, n)
    } catch {
        return !0
    }
}

function DE(e) {
    var t = ci(e, 1);
    t !== null && kr(t, e, 1, -1)
}

function Q1(e) {
    var t = Dr();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vs,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = yN.bind(null, mt, e), [t.memoizedState, e]
}

function ys(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = mt.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, mt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function NE() {
    return ar().memoizedState
}

function nc(e, t, n, r) {
    var i = Dr();
    mt.flags |= e, i.memoizedState = ys(1 | t, n, void 0, r === void 0 ? null : r)
}

function af(e, t, n, r) {
    var i = ar();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (Tt !== null) {
        var s = Tt.memoizedState;
        if (l = s.destroy, r !== null && gm(r, s.deps)) {
            i.memoizedState = ys(t, n, l, r);
            return
        }
    }
    mt.flags |= e, i.memoizedState = ys(1 | t, n, l, r)
}

function Y1(e, t) {
    return nc(8390656, 8, e, t)
}

function ym(e, t) {
    return af(2048, 8, e, t)
}

function ME(e, t) {
    return af(4, 2, e, t)
}

function LE(e, t) {
    return af(4, 4, e, t)
}

function FE(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function zE(e, t, n) {
    return n = n != null ? n.concat([e]) : null, af(4, 4, FE.bind(null, t, e), n)
}

function wm() {}

function $E(e, t) {
    var n = ar();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function BE(e, t) {
    var n = ar();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function UE(e, t, n) {
    return Lo & 21 ? (_r(n, t) || (n = qS(), mt.lanes |= n, Fo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, mn = !0), e.memoizedState = n)
}

function mN(e, t) {
    var n = Ye;
    Ye = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Rp.transition;
    Rp.transition = {};
    try {
        e(!1), t()
    } finally {
        Ye = n, Rp.transition = r
    }
}

function HE() {
    return ar().memoizedState
}

function vN(e, t, n) {
    var r = Vi(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, jE(e)) WE(t, n);
    else if (n = kE(e, t, n, r), n !== null) {
        var i = on();
        kr(n, e, r, i), VE(n, t, r)
    }
}

function yN(e, t, n) {
    var r = Vi(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (jE(e)) WE(t, i);
    else {
        var l = e.alternate;
        if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
            var s = t.lastRenderedState,
                a = l(s, n);
            if (i.hasEagerState = !0, i.eagerState = a, _r(a, s)) {
                var f = t.interleaved;
                f === null ? (i.next = i, cm(t)) : (i.next = f.next, f.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = kE(e, t, i, r), n !== null && (i = on(), kr(n, e, r, i), VE(n, t, r))
    }
}

function jE(e) {
    var t = e.alternate;
    return e === mt || t !== null && t === mt
}

function WE(e, t) {
    qu = Ic = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function VE(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Yg(e, n)
    }
}
var Rc = {
        readContext: sr,
        useCallback: Vt,
        useContext: Vt,
        useEffect: Vt,
        useImperativeHandle: Vt,
        useInsertionEffect: Vt,
        useLayoutEffect: Vt,
        useMemo: Vt,
        useReducer: Vt,
        useRef: Vt,
        useState: Vt,
        useDebugValue: Vt,
        useDeferredValue: Vt,
        useTransition: Vt,
        useMutableSource: Vt,
        useSyncExternalStore: Vt,
        useId: Vt,
        unstable_isNewReconciler: !1
    },
    wN = {
        readContext: sr,
        useCallback: function(e, t) {
            return Dr().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: sr,
        useEffect: Y1,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, nc(4194308, 4, FE.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return nc(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return nc(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Dr();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Dr();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = vN.bind(null, mt, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Dr();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Q1,
        useDebugValue: wm,
        useDeferredValue: function(e) {
            return Dr().memoizedState = e
        },
        useTransition: function() {
            var e = Q1(!1),
                t = e[0];
            return e = mN.bind(null, e[1]), Dr().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = mt,
                i = Dr();
            if (pt) {
                if (n === void 0) throw Error(te(407));
                n = n()
            } else {
                if (n = t(), Dt === null) throw Error(te(349));
                Lo & 30 || IE(r, t, n)
            }
            i.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return i.queue = l, Y1(PE.bind(null, r, l, e), [e]), r.flags |= 2048, ys(9, RE.bind(null, r, l, n, t), void 0, null), n
        },
        useId: function() {
            var e = Dr(),
                t = Dt.identifierPrefix;
            if (pt) {
                var n = li,
                    r = oi;
                n = (r & ~(1 << 32 - Cr(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ms++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = gN++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    xN = {
        readContext: sr,
        useCallback: $E,
        useContext: sr,
        useEffect: ym,
        useImperativeHandle: zE,
        useInsertionEffect: ME,
        useLayoutEffect: LE,
        useMemo: BE,
        useReducer: Pp,
        useRef: NE,
        useState: function() {
            return Pp(vs)
        },
        useDebugValue: wm,
        useDeferredValue: function(e) {
            var t = ar();
            return UE(t, Tt.memoizedState, e)
        },
        useTransition: function() {
            var e = Pp(vs)[0],
                t = ar().memoizedState;
            return [e, t]
        },
        useMutableSource: OE,
        useSyncExternalStore: TE,
        useId: HE,
        unstable_isNewReconciler: !1
    },
    SN = {
        readContext: sr,
        useCallback: $E,
        useContext: sr,
        useEffect: ym,
        useImperativeHandle: zE,
        useInsertionEffect: ME,
        useLayoutEffect: LE,
        useMemo: BE,
        useReducer: Ap,
        useRef: NE,
        useState: function() {
            return Ap(vs)
        },
        useDebugValue: wm,
        useDeferredValue: function(e) {
            var t = ar();
            return Tt === null ? t.memoizedState = e : UE(t, Tt.memoizedState, e)
        },
        useTransition: function() {
            var e = Ap(vs)[0],
                t = ar().memoizedState;
            return [e, t]
        },
        useMutableSource: OE,
        useSyncExternalStore: TE,
        useId: HE,
        unstable_isNewReconciler: !1
    };

function wr(e, t) {
    if (e && e.defaultProps) {
        t = vt({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Gh(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : vt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var cf = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Wo(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = on(),
            i = Vi(e),
            l = ui(r, i);
        l.payload = t, n != null && (l.callback = n), t = ji(e, l, i), t !== null && (kr(t, e, i, r), ec(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = on(),
            i = Vi(e),
            l = ui(r, i);
        l.tag = 1, l.payload = t, n != null && (l.callback = n), t = ji(e, l, i), t !== null && (kr(t, e, i, r), ec(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = on(),
            r = Vi(e),
            i = ui(n, r);
        i.tag = 2, t != null && (i.callback = t), t = ji(e, i, r), t !== null && (kr(t, e, r, n), ec(t, e, r))
    }
};

function X1(e, t, n, r, i, l, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, s) : t.prototype && t.prototype.isPureReactComponent ? !cs(n, r) || !cs(i, l) : !0
}

function qE(e, t, n) {
    var r = !1,
        i = Ji,
        l = t.contextType;
    return typeof l == "object" && l !== null ? l = sr(l) : (i = wn(t) ? No : Xt.current, r = t.contextTypes, l = (r = r != null) ? $l(e, i) : Ji), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = cf, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = l), t
}

function Z1(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && cf.enqueueReplaceState(t, t.state, null)
}

function Kh(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, fm(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? i.context = sr(l) : (l = wn(t) ? No : Xt.current, i.context = $l(e, l)), i.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Gh(e, t, l, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && cf.enqueueReplaceState(i, i.state, null), Oc(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function jl(e, t) {
    try {
        var n = "",
            r = t;
        do n += QA(r), r = r.return; while (r);
        var i = n
    } catch (l) {
        i = `
Error generating stack: ` + l.message + `
` + l.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function Dp(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function Qh(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var EN = typeof WeakMap == "function" ? WeakMap : Map;

function GE(e, t, n) {
    n = ui(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ac || (Ac = !0, og = r), Qh(e, t)
    }, n
}

function KE(e, t, n) {
    n = ui(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            Qh(e, t)
        }
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
        Qh(e, t), typeof r != "function" && (Wi === null ? Wi = new Set([this]) : Wi.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function J1(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new EN;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = LN.bind(null, e, t, n), t.then(e, e))
}

function ew(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function tw(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ui(-1, 1), t.tag = 2, ji(n, t, 1))), n.lanes |= 1), e)
}
var CN = pi.ReactCurrentOwner,
    mn = !1;

function nn(e, t, n, r) {
    t.child = e === null ? CE(t, null, n, r) : Ul(t, e.child, n, r)
}

function nw(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return Rl(t, i), r = mm(e, t, n, r, l, i), n = vm(), e !== null && !mn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, fi(e, t, i)) : (pt && n && im(t), t.flags |= 1, nn(e, t, r, i), t.child)
}

function rw(e, t, n, r, i) {
    if (e === null) {
        var l = n.type;
        return typeof l == "function" && !Om(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, QE(e, t, l, r, i)) : (e = lc(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (l = e.child, !(e.lanes & i)) {
        var s = l.memoizedProps;
        if (n = n.compare, n = n !== null ? n : cs, n(s, r) && e.ref === t.ref) return fi(e, t, i)
    }
    return t.flags |= 1, e = qi(l, r), e.ref = t.ref, e.return = t, t.child = e
}

function QE(e, t, n, r, i) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (cs(l, r) && e.ref === t.ref)
            if (mn = !1, t.pendingProps = r = l, (e.lanes & i) !== 0) e.flags & 131072 && (mn = !0);
            else return t.lanes = e.lanes, fi(e, t, i)
    }
    return Yh(e, t, n, r, i)
}

function YE(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, nt(_l, Dn), Dn |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, nt(_l, Dn), Dn |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, nt(_l, Dn), Dn |= r
        }
    else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, nt(_l, Dn), Dn |= r;
    return nn(e, t, i, n), t.child
}

function XE(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Yh(e, t, n, r, i) {
    var l = wn(n) ? No : Xt.current;
    return l = $l(t, l), Rl(t, i), n = mm(e, t, n, r, l, i), r = vm(), e !== null && !mn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, fi(e, t, i)) : (pt && r && im(t), t.flags |= 1, nn(e, t, n, i), t.child)
}

function iw(e, t, n, r, i) {
    if (wn(n)) {
        var l = !0;
        Ec(t)
    } else l = !1;
    if (Rl(t, i), t.stateNode === null) rc(e, t), qE(t, n, r), Kh(t, n, r, i), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var f = s.context,
            d = n.contextType;
        typeof d == "object" && d !== null ? d = sr(d) : (d = wn(n) ? No : Xt.current, d = $l(t, d));
        var p = n.getDerivedStateFromProps,
            g = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        g || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || f !== d) && Z1(t, s, r, d), Ai = !1;
        var v = t.memoizedState;
        s.state = v, Oc(t, r, s, i), f = t.memoizedState, a !== r || v !== f || yn.current || Ai ? (typeof p == "function" && (Gh(t, n, p, r), f = t.memoizedState), (a = Ai || X1(t, n, a, r, v, f, d)) ? (g || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = f), s.props = r, s.state = f, s.context = d, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, _E(e, t), a = t.memoizedProps, d = t.type === t.elementType ? a : wr(t.type, a), s.props = d, g = t.pendingProps, v = s.context, f = n.contextType, typeof f == "object" && f !== null ? f = sr(f) : (f = wn(n) ? No : Xt.current, f = $l(t, f));
        var m = n.getDerivedStateFromProps;
        (p = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== g || v !== f) && Z1(t, s, r, f), Ai = !1, v = t.memoizedState, s.state = v, Oc(t, r, s, i);
        var E = t.memoizedState;
        a !== g || v !== E || yn.current || Ai ? (typeof m == "function" && (Gh(t, n, m, r), E = t.memoizedState), (d = Ai || X1(t, n, d, r, v, E, f) || !1) ? (p || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, E, f), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, E, f)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = E), s.props = r, s.state = E, s.context = f, r = d) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Xh(e, t, n, r, l, i)
}

function Xh(e, t, n, r, i, l) {
    XE(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && j1(t, n, !1), fi(e, t, l);
    r = t.stateNode, CN.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Ul(t, e.child, null, l), t.child = Ul(t, null, a, l)) : nn(e, t, a, l), t.memoizedState = r.state, i && j1(t, n, !0), t.child
}

function ZE(e) {
    var t = e.stateNode;
    t.pendingContext ? H1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && H1(e, t.context, !1), dm(e, t.containerInfo)
}

function ow(e, t, n, r, i) {
    return Bl(), lm(i), t.flags |= 256, nn(e, t, n, r), t.child
}
var Zh = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Jh(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function JE(e, t, n) {
    var r = t.pendingProps,
        i = gt.current,
        l = !1,
        s = (t.flags & 128) !== 0,
        a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), nt(gt, i & 1), e === null) return Vh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = s) : l = pf(s, r, 0, null), e = Po(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Jh(n), t.memoizedState = Zh, e) : xm(t, s));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return kN(e, t, s, r, a, i, n);
    if (l) {
        l = r.fallback, s = t.mode, i = e.child, a = i.sibling;
        var f = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = f, t.deletions = null) : (r = qi(i, f), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? l = qi(a, l) : (l = Po(l, s, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, s = e.child.memoizedState, s = s === null ? Jh(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, l.memoizedState = s, l.childLanes = e.childLanes & ~n, t.memoizedState = Zh, r
    }
    return l = e.child, e = l.sibling, r = qi(l, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function xm(e, t) {
    return t = pf({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Fa(e, t, n, r) {
    return r !== null && lm(r), Ul(t, e.child, null, n), e = xm(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function kN(e, t, n, r, i, l, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Dp(Error(te(422))), Fa(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, i = t.mode, r = pf({
        mode: "visible",
        children: r.children
    }, i, 0, null), l = Po(l, i, s, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Ul(t, e.child, null, s), t.child.memoizedState = Jh(s), t.memoizedState = Zh, l);
    if (!(t.mode & 1)) return Fa(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, l = Error(te(419)), r = Dp(l, r, void 0), Fa(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0, mn || a) {
        if (r = Dt, r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== l.retryLane && (l.retryLane = i, ci(e, i), kr(r, e, i, -1))
        }
        return bm(), r = Dp(Error(te(421))), Fa(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = FN.bind(null, e), i._reactRetry = t, null) : (e = l.treeContext, Mn = Hi(i.nextSibling), Fn = t, pt = !0, Sr = null, e !== null && (tr[nr++] = oi, tr[nr++] = li, tr[nr++] = Mo, oi = e.id, li = e.overflow, Mo = t), t = xm(t, r.children), t.flags |= 4096, t)
}

function lw(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), qh(e.return, t, n)
}

function Np(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = i)
}

function eC(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        l = r.tail;
    if (nn(e, t, r.children, n), r = gt.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && lw(e, n, t);
            else if (e.tag === 19) lw(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (nt(gt, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Tc(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Np(t, !1, i, n, l);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Tc(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Np(t, !0, n, null, l);
            break;
        case "together":
            Np(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function rc(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function fi(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Fo |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(te(153));
    if (t.child !== null) {
        for (e = t.child, n = qi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = qi(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function _N(e, t, n) {
    switch (t.tag) {
        case 3:
            ZE(t), Bl();
            break;
        case 5:
            bE(t);
            break;
        case 1:
            wn(t.type) && Ec(t);
            break;
        case 4:
            dm(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            nt(_c, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (nt(gt, gt.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? JE(e, t, n) : (nt(gt, gt.current & 1), e = fi(e, t, n), e !== null ? e.sibling : null);
            nt(gt, gt.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return eC(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), nt(gt, gt.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, YE(e, t, n)
    }
    return fi(e, t, n)
}
var tC, eg, nC, rC;
tC = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
eg = function() {};
nC = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, To($r.current);
        var l = null;
        switch (n) {
            case "input":
                i = Eh(e, i), r = Eh(e, r), l = [];
                break;
            case "select":
                i = vt({}, i, {
                    value: void 0
                }), r = vt({}, r, {
                    value: void 0
                }), l = [];
                break;
            case "textarea":
                i = _h(e, i), r = _h(e, r), l = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = xc)
        }
        Oh(n, r);
        var s;
        n = null;
        for (d in i)
            if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
                if (d === "style") {
                    var a = i[d];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (rs.hasOwnProperty(d) ? l || (l = []) : (l = l || []).push(d, null));
        for (d in r) {
            var f = r[d];
            if (a = i?.[d], r.hasOwnProperty(d) && f !== a && (f != null || a != null))
                if (d === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || f && f.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in f) f.hasOwnProperty(s) && a[s] !== f[s] && (n || (n = {}), n[s] = f[s])
                    } else n || (l || (l = []), l.push(d, n)), n = f;
            else d === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, a = a ? a.__html : void 0, f != null && a !== f && (l = l || []).push(d, f)) : d === "children" ? typeof f != "string" && typeof f != "number" || (l = l || []).push(d, "" + f) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (rs.hasOwnProperty(d) ? (f != null && d === "onScroll" && lt("scroll", e), l || a === f || (l = [])) : (l = l || []).push(d, f))
        }
        n && (l = l || []).push("style", n);
        var d = l;
        (t.updateQueue = d) && (t.flags |= 4)
    }
};
rC = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Ru(e, t) {
    if (!pt) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function qt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function bN(e, t, n) {
    var r = t.pendingProps;
    switch (om(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return qt(t), null;
        case 1:
            return wn(t.type) && Sc(), qt(t), null;
        case 3:
            return r = t.stateNode, Hl(), st(yn), st(Xt), hm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ma(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Sr !== null && (sg(Sr), Sr = null))), eg(e, t), qt(t), null;
        case 5:
            pm(t);
            var i = To(gs.current);
            if (n = t.type, e !== null && t.stateNode != null) nC(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(te(166));
                    return qt(t), null
                }
                if (e = To($r.current), Ma(t)) {
                    r = t.stateNode, n = t.type;
                    var l = t.memoizedProps;
                    switch (r[Mr] = t, r[ps] = l, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            lt("cancel", r), lt("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            lt("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Fu.length; i++) lt(Fu[i], r);
                            break;
                        case "source":
                            lt("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            lt("error", r), lt("load", r);
                            break;
                        case "details":
                            lt("toggle", r);
                            break;
                        case "input":
                            g1(r, l), lt("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!l.multiple
                            }, lt("invalid", r);
                            break;
                        case "textarea":
                            v1(r, l), lt("invalid", r)
                    }
                    Oh(n, l), i = null;
                    for (var s in l)
                        if (l.hasOwnProperty(s)) {
                            var a = l[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (l.suppressHydrationWarning !== !0 && Na(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (l.suppressHydrationWarning !== !0 && Na(r.textContent, a, e), i = ["children", "" + a]) : rs.hasOwnProperty(s) && a != null && s === "onScroll" && lt("scroll", r)
                        } switch (n) {
                        case "input":
                            ba(r), m1(r, l, !0);
                            break;
                        case "textarea":
                            ba(r), y1(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof l.onClick == "function" && (r.onclick = xc)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = PS(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Mr] = t, e[ps] = r, tC(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = Th(n, r), n) {
                            case "dialog":
                                lt("cancel", e), lt("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                lt("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Fu.length; i++) lt(Fu[i], e);
                                i = r;
                                break;
                            case "source":
                                lt("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                lt("error", e), lt("load", e), i = r;
                                break;
                            case "details":
                                lt("toggle", e), i = r;
                                break;
                            case "input":
                                g1(e, r), i = Eh(e, r), lt("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = vt({}, r, {
                                    value: void 0
                                }), lt("invalid", e);
                                break;
                            case "textarea":
                                v1(e, r), i = _h(e, r), lt("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        Oh(n, i),
                        a = i;
                        for (l in a)
                            if (a.hasOwnProperty(l)) {
                                var f = a[l];
                                l === "style" ? NS(e, f) : l === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, f != null && AS(e, f)) : l === "children" ? typeof f == "string" ? (n !== "textarea" || f !== "") && is(e, f) : typeof f == "number" && is(e, "" + f) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (rs.hasOwnProperty(l) ? f != null && l === "onScroll" && lt("scroll", e) : f != null && Wg(e, l, f, s))
                            } switch (n) {
                            case "input":
                                ba(e), m1(e, r, !1);
                                break;
                            case "textarea":
                                ba(e), y1(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Zi(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, l = r.value, l != null ? bl(e, !!r.multiple, l, !1) : r.defaultValue != null && bl(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = xc)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return qt(t), null;
        case 6:
            if (e && t.stateNode != null) rC(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(te(166));
                if (n = To(gs.current), To($r.current), Ma(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Mr] = t, (l = r.nodeValue !== n) && (e = Fn, e !== null)) switch (e.tag) {
                        case 3:
                            Na(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Na(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    l && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Mr] = t, t.stateNode = r
            }
            return qt(t), null;
        case 13:
            if (st(gt), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (pt && Mn !== null && t.mode & 1 && !(t.flags & 128)) SE(), Bl(), t.flags |= 98560, l = !1;
                else if (l = Ma(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!l) throw Error(te(318));
                        if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(te(317));
                        l[Mr] = t
                    } else Bl(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    qt(t), l = !1
                } else Sr !== null && (sg(Sr), Sr = null), l = !0;
                if (!l) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || gt.current & 1 ? It === 0 && (It = 3) : bm())), t.updateQueue !== null && (t.flags |= 4), qt(t), null);
        case 4:
            return Hl(), eg(e, t), e === null && fs(t.stateNode.containerInfo), qt(t), null;
        case 10:
            return am(t.type._context), qt(t), null;
        case 17:
            return wn(t.type) && Sc(), qt(t), null;
        case 19:
            if (st(gt), l = t.memoizedState, l === null) return qt(t), null;
            if (r = (t.flags & 128) !== 0, s = l.rendering, s === null)
                if (r) Ru(l, !1);
                else {
                    if (It !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = Tc(e), s !== null) {
                                for (t.flags |= 128, Ru(l, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) l = n, e = r, l.flags &= 14680066, s = l.alternate, s === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = s.childLanes, l.lanes = s.lanes, l.child = s.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = s.memoizedProps, l.memoizedState = s.memoizedState, l.updateQueue = s.updateQueue, l.type = s.type, e = s.dependencies, l.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return nt(gt, gt.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    l.tail !== null && Ct() > Wl && (t.flags |= 128, r = !0, Ru(l, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Tc(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ru(l, !0), l.tail === null && l.tailMode === "hidden" && !s.alternate && !pt) return qt(t), null
                    } else 2 * Ct() - l.renderingStartTime > Wl && n !== 1073741824 && (t.flags |= 128, r = !0, Ru(l, !1), t.lanes = 4194304);
                l.isBackwards ? (s.sibling = t.child, t.child = s) : (n = l.last, n !== null ? n.sibling = s : t.child = s, l.last = s)
            }
            return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Ct(), t.sibling = null, n = gt.current, nt(gt, r ? n & 1 | 2 : n & 1), t) : (qt(t), null);
        case 22:
        case 23:
            return _m(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Dn & 1073741824 && (qt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qt(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(te(156, t.tag))
}

function ON(e, t) {
    switch (om(t), t.tag) {
        case 1:
            return wn(t.type) && Sc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Hl(), st(yn), st(Xt), hm(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return pm(t), null;
        case 13:
            if (st(gt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(te(340));
                Bl()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return st(gt), null;
        case 4:
            return Hl(), null;
        case 10:
            return am(t.type._context), null;
        case 22:
        case 23:
            return _m(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var za = !1,
    Qt = !1,
    TN = typeof WeakSet == "function" ? WeakSet : Set,
    ce = null;

function kl(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            xt(e, t, r)
        } else n.current = null
}

function tg(e, t, n) {
    try {
        n()
    } catch (r) {
        xt(e, t, r)
    }
}
var uw = !1;

function IN(e, t) {
    if (zh = vc, e = sE(), rm(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    l = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, l.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    a = -1,
                    f = -1,
                    d = 0,
                    p = 0,
                    g = e,
                    v = null;
                t: for (;;) {
                    for (var m; g !== n || i !== 0 && g.nodeType !== 3 || (a = s + i), g !== l || r !== 0 && g.nodeType !== 3 || (f = s + r), g.nodeType === 3 && (s += g.nodeValue.length), (m = g.firstChild) !== null;) v = g, g = m;
                    for (;;) {
                        if (g === e) break t;
                        if (v === n && ++d === i && (a = s), v === l && ++p === r && (f = s), (m = g.nextSibling) !== null) break;
                        g = v, v = g.parentNode
                    }
                    g = m
                }
                n = a === -1 || f === -1 ? null : {
                    start: a,
                    end: f
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for ($h = {
            focusedElem: e,
            selectionRange: n
        }, vc = !1, ce = t; ce !== null;)
        if (t = ce, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ce = e;
        else
            for (; ce !== null;) {
                t = ce;
                try {
                    var E = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (E !== null) {
                                var S = E.memoizedProps,
                                    A = E.memoizedState,
                                    y = t.stateNode,
                                    x = y.getSnapshotBeforeUpdate(t.elementType === t.type ? S : wr(t.type, S), A);
                                y.__reactInternalSnapshotBeforeUpdate = x
                            }
                            break;
                        case 3:
                            var k = t.stateNode.containerInfo;
                            k.nodeType === 1 ? k.textContent = "" : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(te(163))
                    }
                } catch (P) {
                    xt(t, t.return, P)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, ce = e;
                    break
                }
                ce = t.return
            }
    return E = uw, uw = !1, E
}

function Gu(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var l = i.destroy;
                i.destroy = void 0, l !== void 0 && tg(t, n, l)
            }
            i = i.next
        } while (i !== r)
    }
}

function ff(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function ng(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function iC(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, iC(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mr], delete t[ps], delete t[Hh], delete t[fN], delete t[dN])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function oC(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function sw(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || oC(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function rg(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xc));
    else if (r !== 4 && (e = e.child, e !== null))
        for (rg(e, t, n), e = e.sibling; e !== null;) rg(e, t, n), e = e.sibling
}

function ig(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (ig(e, t, n), e = e.sibling; e !== null;) ig(e, t, n), e = e.sibling
}
var zt = null,
    xr = !1;

function Oi(e, t, n) {
    for (n = n.child; n !== null;) lC(e, t, n), n = n.sibling
}

function lC(e, t, n) {
    if (zr && typeof zr.onCommitFiberUnmount == "function") try {
        zr.onCommitFiberUnmount(nf, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Qt || kl(n, t);
        case 6:
            var r = zt,
                i = xr;
            zt = null, Oi(e, t, n), zt = r, xr = i, zt !== null && (xr ? (e = zt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : zt.removeChild(n.stateNode));
            break;
        case 18:
            zt !== null && (xr ? (e = zt, n = n.stateNode, e.nodeType === 8 ? Op(e.parentNode, n) : e.nodeType === 1 && Op(e, n), ss(e)) : Op(zt, n.stateNode));
            break;
        case 4:
            r = zt, i = xr, zt = n.stateNode.containerInfo, xr = !0, Oi(e, t, n), zt = r, xr = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Qt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var l = i,
                        s = l.destroy;
                    l = l.tag, s !== void 0 && (l & 2 || l & 4) && tg(n, t, s), i = i.next
                } while (i !== r)
            }
            Oi(e, t, n);
            break;
        case 1:
            if (!Qt && (kl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                xt(n, t, a)
            }
            Oi(e, t, n);
            break;
        case 21:
            Oi(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Qt = (r = Qt) || n.memoizedState !== null, Oi(e, t, n), Qt = r) : Oi(e, t, n);
            break;
        default:
            Oi(e, t, n)
    }
}

function aw(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new TN), t.forEach(function(r) {
            var i = zN.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function yr(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var l = e,
                    s = t,
                    a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            zt = a.stateNode, xr = !1;
                            break e;
                        case 3:
                            zt = a.stateNode.containerInfo, xr = !0;
                            break e;
                        case 4:
                            zt = a.stateNode.containerInfo, xr = !0;
                            break e
                    }
                    a = a.return
                }
                if (zt === null) throw Error(te(160));
                lC(l, s, i), zt = null, xr = !1;
                var f = i.alternate;
                f !== null && (f.return = null), i.return = null
            } catch (d) {
                xt(i, t, d)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) uC(t, e), t = t.sibling
}

function uC(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (yr(t, e), Ar(e), r & 4) {
                try {
                    Gu(3, e, e.return), ff(3, e)
                } catch (S) {
                    xt(e, e.return, S)
                }
                try {
                    Gu(5, e, e.return)
                } catch (S) {
                    xt(e, e.return, S)
                }
            }
            break;
        case 1:
            yr(t, e), Ar(e), r & 512 && n !== null && kl(n, n.return);
            break;
        case 5:
            if (yr(t, e), Ar(e), r & 512 && n !== null && kl(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    is(i, "")
                } catch (S) {
                    xt(e, e.return, S)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var l = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : l,
                    a = e.type,
                    f = e.updateQueue;
                if (e.updateQueue = null, f !== null) try {
                    a === "input" && l.type === "radio" && l.name != null && IS(i, l), Th(a, s);
                    var d = Th(a, l);
                    for (s = 0; s < f.length; s += 2) {
                        var p = f[s],
                            g = f[s + 1];
                        p === "style" ? NS(i, g) : p === "dangerouslySetInnerHTML" ? AS(i, g) : p === "children" ? is(i, g) : Wg(i, p, g, d)
                    }
                    switch (a) {
                        case "input":
                            Ch(i, l);
                            break;
                        case "textarea":
                            RS(i, l);
                            break;
                        case "select":
                            var v = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!l.multiple;
                            var m = l.value;
                            m != null ? bl(i, !!l.multiple, m, !1) : v !== !!l.multiple && (l.defaultValue != null ? bl(i, !!l.multiple, l.defaultValue, !0) : bl(i, !!l.multiple, l.multiple ? [] : "", !1))
                    }
                    i[ps] = l
                } catch (S) {
                    xt(e, e.return, S)
                }
            }
            break;
        case 6:
            if (yr(t, e), Ar(e), r & 4) {
                if (e.stateNode === null) throw Error(te(162));
                i = e.stateNode, l = e.memoizedProps;
                try {
                    i.nodeValue = l
                } catch (S) {
                    xt(e, e.return, S)
                }
            }
            break;
        case 3:
            if (yr(t, e), Ar(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                ss(t.containerInfo)
            } catch (S) {
                xt(e, e.return, S)
            }
            break;
        case 4:
            yr(t, e), Ar(e);
            break;
        case 13:
            yr(t, e), Ar(e), i = e.child, i.flags & 8192 && (l = i.memoizedState !== null, i.stateNode.isHidden = l, !l || i.alternate !== null && i.alternate.memoizedState !== null || (Cm = Ct())), r & 4 && aw(e);
            break;
        case 22:
            if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Qt = (d = Qt) || p, yr(t, e), Qt = d) : yr(t, e), Ar(e), r & 8192) {
                if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !p && e.mode & 1)
                    for (ce = e, p = e.child; p !== null;) {
                        for (g = ce = p; ce !== null;) {
                            switch (v = ce, m = v.child, v.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Gu(4, v, v.return);
                                    break;
                                case 1:
                                    kl(v, v.return);
                                    var E = v.stateNode;
                                    if (typeof E.componentWillUnmount == "function") {
                                        r = v, n = v.return;
                                        try {
                                            t = r, E.props = t.memoizedProps, E.state = t.memoizedState, E.componentWillUnmount()
                                        } catch (S) {
                                            xt(r, n, S)
                                        }
                                    }
                                    break;
                                case 5:
                                    kl(v, v.return);
                                    break;
                                case 22:
                                    if (v.memoizedState !== null) {
                                        fw(g);
                                        continue
                                    }
                            }
                            m !== null ? (m.return = v, ce = m) : fw(g)
                        }
                        p = p.sibling
                    }
                e: for (p = null, g = e;;) {
                    if (g.tag === 5) {
                        if (p === null) {
                            p = g;
                            try {
                                i = g.stateNode, d ? (l = i.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (a = g.stateNode, f = g.memoizedProps.style, s = f != null && f.hasOwnProperty("display") ? f.display : null, a.style.display = DS("display", s))
                            } catch (S) {
                                xt(e, e.return, S)
                            }
                        }
                    } else if (g.tag === 6) {
                        if (p === null) try {
                            g.stateNode.nodeValue = d ? "" : g.memoizedProps
                        } catch (S) {
                            xt(e, e.return, S)
                        }
                    } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
                        g.child.return = g, g = g.child;
                        continue
                    }
                    if (g === e) break e;
                    for (; g.sibling === null;) {
                        if (g.return === null || g.return === e) break e;
                        p === g && (p = null), g = g.return
                    }
                    p === g && (p = null), g.sibling.return = g.return, g = g.sibling
                }
            }
            break;
        case 19:
            yr(t, e), Ar(e), r & 4 && aw(e);
            break;
        case 21:
            break;
        default:
            yr(t, e), Ar(e)
    }
}

function Ar(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (oC(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(te(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (is(i, ""), r.flags &= -33);
                    var l = sw(e);
                    ig(e, l, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = sw(e);
                    rg(e, a, s);
                    break;
                default:
                    throw Error(te(161))
            }
        }
        catch (f) {
            xt(e, e.return, f)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function RN(e, t, n) {
    ce = e, sC(e)
}

function sC(e, t, n) {
    for (var r = (e.mode & 1) !== 0; ce !== null;) {
        var i = ce,
            l = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || za;
            if (!s) {
                var a = i.alternate,
                    f = a !== null && a.memoizedState !== null || Qt;
                a = za;
                var d = Qt;
                if (za = s, (Qt = f) && !d)
                    for (ce = i; ce !== null;) s = ce, f = s.child, s.tag === 22 && s.memoizedState !== null ? dw(i) : f !== null ? (f.return = s, ce = f) : dw(i);
                for (; l !== null;) ce = l, sC(l), l = l.sibling;
                ce = i, za = a, Qt = d
            }
            cw(e)
        } else i.subtreeFlags & 8772 && l !== null ? (l.return = i, ce = l) : cw(e)
    }
}

function cw(e) {
    for (; ce !== null;) {
        var t = ce;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Qt || ff(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Qt)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : wr(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var l = t.updateQueue;
                        l !== null && K1(t, l, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            K1(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var f = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    f.autoFocus && n.focus();
                                    break;
                                case "img":
                                    f.src && (n.src = f.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var p = d.memoizedState;
                                if (p !== null) {
                                    var g = p.dehydrated;
                                    g !== null && ss(g)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(te(163))
                }
                Qt || t.flags & 512 && ng(t)
            } catch (v) {
                xt(t, t.return, v)
            }
        }
        if (t === e) {
            ce = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, ce = n;
            break
        }
        ce = t.return
    }
}

function fw(e) {
    for (; ce !== null;) {
        var t = ce;
        if (t === e) {
            ce = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, ce = n;
            break
        }
        ce = t.return
    }
}

function dw(e) {
    for (; ce !== null;) {
        var t = ce;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ff(4, t)
                    } catch (f) {
                        xt(t, n, f)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (f) {
                            xt(t, i, f)
                        }
                    }
                    var l = t.return;
                    try {
                        ng(t)
                    } catch (f) {
                        xt(t, l, f)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        ng(t)
                    } catch (f) {
                        xt(t, s, f)
                    }
            }
        } catch (f) {
            xt(t, t.return, f)
        }
        if (t === e) {
            ce = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, ce = a;
            break
        }
        ce = t.return
    }
}
var PN = Math.ceil,
    Pc = pi.ReactCurrentDispatcher,
    Sm = pi.ReactCurrentOwner,
    lr = pi.ReactCurrentBatchConfig,
    $e = 0,
    Dt = null,
    _t = null,
    Bt = 0,
    Dn = 0,
    _l = lo(0),
    It = 0,
    ws = null,
    Fo = 0,
    df = 0,
    Em = 0,
    Ku = null,
    pn = null,
    Cm = 0,
    Wl = 1 / 0,
    ni = null,
    Ac = !1,
    og = null,
    Wi = null,
    $a = !1,
    zi = null,
    Dc = 0,
    Qu = 0,
    lg = null,
    ic = -1,
    oc = 0;

function on() {
    return $e & 6 ? Ct() : ic !== -1 ? ic : ic = Ct()
}

function Vi(e) {
    return e.mode & 1 ? $e & 2 && Bt !== 0 ? Bt & -Bt : hN.transition !== null ? (oc === 0 && (oc = qS()), oc) : (e = Ye, e !== 0 || (e = window.event, e = e === void 0 ? 16 : JS(e.type)), e) : 1
}

function kr(e, t, n, r) {
    if (50 < Qu) throw Qu = 0, lg = null, Error(te(185));
    bs(e, n, r), (!($e & 2) || e !== Dt) && (e === Dt && (!($e & 2) && (df |= n), It === 4 && Ni(e, Bt)), xn(e, r), n === 1 && $e === 0 && !(t.mode & 1) && (Wl = Ct() + 500, sf && uo()))
}

function xn(e, t) {
    var n = e.callbackNode;
    hD(e, t);
    var r = mc(e, e === Dt ? Bt : 0);
    if (r === 0) n !== null && S1(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && S1(n), t === 1) e.tag === 0 ? pN(pw.bind(null, e)) : yE(pw.bind(null, e)), aN(function() {
            !($e & 6) && uo()
        }), n = null;
        else {
            switch (GS(r)) {
                case 1:
                    n = Qg;
                    break;
                case 4:
                    n = WS;
                    break;
                case 16:
                    n = gc;
                    break;
                case 536870912:
                    n = VS;
                    break;
                default:
                    n = gc
            }
            n = mC(n, aC.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function aC(e, t) {
    if (ic = -1, oc = 0, $e & 6) throw Error(te(327));
    var n = e.callbackNode;
    if (Pl() && e.callbackNode !== n) return null;
    var r = mc(e, e === Dt ? Bt : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Nc(e, r);
    else {
        t = r;
        var i = $e;
        $e |= 2;
        var l = fC();
        (Dt !== e || Bt !== t) && (ni = null, Wl = Ct() + 500, Ro(e, t));
        do try {
            NN();
            break
        } catch (a) {
            cC(e, a)
        }
        while (1);
        sm(), Pc.current = l, $e = i, _t !== null ? t = 0 : (Dt = null, Bt = 0, t = It)
    }
    if (t !== 0) {
        if (t === 2 && (i = Dh(e), i !== 0 && (r = i, t = ug(e, i))), t === 1) throw n = ws, Ro(e, 0), Ni(e, r), xn(e, Ct()), n;
        if (t === 6) Ni(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !AN(i) && (t = Nc(e, r), t === 2 && (l = Dh(e), l !== 0 && (r = l, t = ug(e, l))), t === 1)) throw n = ws, Ro(e, 0), Ni(e, r), xn(e, Ct()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(te(345));
                case 2:
                    So(e, pn, ni);
                    break;
                case 3:
                    if (Ni(e, r), (r & 130023424) === r && (t = Cm + 500 - Ct(), 10 < t)) {
                        if (mc(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            on(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Uh(So.bind(null, e, pn, ni), t);
                        break
                    }
                    So(e, pn, ni);
                    break;
                case 4:
                    if (Ni(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var s = 31 - Cr(r);
                        l = 1 << s, s = t[s], s > i && (i = s), r &= ~l
                    }
                    if (r = i, r = Ct() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * PN(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Uh(So.bind(null, e, pn, ni), r);
                        break
                    }
                    So(e, pn, ni);
                    break;
                case 5:
                    So(e, pn, ni);
                    break;
                default:
                    throw Error(te(329))
            }
        }
    }
    return xn(e, Ct()), e.callbackNode === n ? aC.bind(null, e) : null
}

function ug(e, t) {
    var n = Ku;
    return e.current.memoizedState.isDehydrated && (Ro(e, t).flags |= 256), e = Nc(e, t), e !== 2 && (t = pn, pn = n, t !== null && sg(t)), e
}

function sg(e) {
    pn === null ? pn = e : pn.push.apply(pn, e)
}

function AN(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        l = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!_r(l(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Ni(e, t) {
    for (t &= ~Em, t &= ~df, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Cr(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function pw(e) {
    if ($e & 6) throw Error(te(327));
    Pl();
    var t = mc(e, 0);
    if (!(t & 1)) return xn(e, Ct()), null;
    var n = Nc(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Dh(e);
        r !== 0 && (t = r, n = ug(e, r))
    }
    if (n === 1) throw n = ws, Ro(e, 0), Ni(e, t), xn(e, Ct()), n;
    if (n === 6) throw Error(te(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, So(e, pn, ni), xn(e, Ct()), null
}

function km(e, t) {
    var n = $e;
    $e |= 1;
    try {
        return e(t)
    } finally {
        $e = n, $e === 0 && (Wl = Ct() + 500, sf && uo())
    }
}

function zo(e) {
    zi !== null && zi.tag === 0 && !($e & 6) && Pl();
    var t = $e;
    $e |= 1;
    var n = lr.transition,
        r = Ye;
    try {
        if (lr.transition = null, Ye = 1, e) return e()
    } finally {
        Ye = r, lr.transition = n, $e = t, !($e & 6) && uo()
    }
}

function _m() {
    Dn = _l.current, st(_l)
}

function Ro(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, sN(n)), _t !== null)
        for (n = _t.return; n !== null;) {
            var r = n;
            switch (om(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Sc();
                    break;
                case 3:
                    Hl(), st(yn), st(Xt), hm();
                    break;
                case 5:
                    pm(r);
                    break;
                case 4:
                    Hl();
                    break;
                case 13:
                    st(gt);
                    break;
                case 19:
                    st(gt);
                    break;
                case 10:
                    am(r.type._context);
                    break;
                case 22:
                case 23:
                    _m()
            }
            n = n.return
        }
    if (Dt = e, _t = e = qi(e.current, null), Bt = Dn = t, It = 0, ws = null, Em = df = Fo = 0, pn = Ku = null, Oo !== null) {
        for (t = 0; t < Oo.length; t++)
            if (n = Oo[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    l = n.pending;
                if (l !== null) {
                    var s = l.next;
                    l.next = i, r.next = s
                }
                n.pending = r
            } Oo = null
    }
    return e
}

function cC(e, t) {
    do {
        var n = _t;
        try {
            if (sm(), tc.current = Rc, Ic) {
                for (var r = mt.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                Ic = !1
            }
            if (Lo = 0, At = Tt = mt = null, qu = !1, ms = 0, Sm.current = null, n === null || n.return === null) {
                It = 1, ws = t, _t = null;
                break
            }
            e: {
                var l = e,
                    s = n.return,
                    a = n,
                    f = t;
                if (t = Bt, a.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
                    var d = f,
                        p = a,
                        g = p.tag;
                    if (!(p.mode & 1) && (g === 0 || g === 11 || g === 15)) {
                        var v = p.alternate;
                        v ? (p.updateQueue = v.updateQueue, p.memoizedState = v.memoizedState, p.lanes = v.lanes) : (p.updateQueue = null, p.memoizedState = null)
                    }
                    var m = ew(s);
                    if (m !== null) {
                        m.flags &= -257, tw(m, s, a, l, t), m.mode & 1 && J1(l, d, t), t = m, f = d;
                        var E = t.updateQueue;
                        if (E === null) {
                            var S = new Set;
                            S.add(f), t.updateQueue = S
                        } else E.add(f);
                        break e
                    } else {
                        if (!(t & 1)) {
                            J1(l, d, t), bm();
                            break e
                        }
                        f = Error(te(426))
                    }
                } else if (pt && a.mode & 1) {
                    var A = ew(s);
                    if (A !== null) {
                        !(A.flags & 65536) && (A.flags |= 256), tw(A, s, a, l, t), lm(jl(f, a));
                        break e
                    }
                }
                l = f = jl(f, a),
                It !== 4 && (It = 2),
                Ku === null ? Ku = [l] : Ku.push(l),
                l = s;do {
                    switch (l.tag) {
                        case 3:
                            l.flags |= 65536, t &= -t, l.lanes |= t;
                            var y = GE(l, f, t);
                            G1(l, y);
                            break e;
                        case 1:
                            a = f;
                            var x = l.type,
                                k = l.stateNode;
                            if (!(l.flags & 128) && (typeof x.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Wi === null || !Wi.has(k)))) {
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var P = KE(l, a, t);
                                G1(l, P);
                                break e
                            }
                    }
                    l = l.return
                } while (l !== null)
            }
            pC(n)
        } catch (N) {
            t = N, _t === n && n !== null && (_t = n = n.return);
            continue
        }
        break
    } while (1)
}

function fC() {
    var e = Pc.current;
    return Pc.current = Rc, e === null ? Rc : e
}

function bm() {
    (It === 0 || It === 3 || It === 2) && (It = 4), Dt === null || !(Fo & 268435455) && !(df & 268435455) || Ni(Dt, Bt)
}

function Nc(e, t) {
    var n = $e;
    $e |= 2;
    var r = fC();
    (Dt !== e || Bt !== t) && (ni = null, Ro(e, t));
    do try {
        DN();
        break
    } catch (i) {
        cC(e, i)
    }
    while (1);
    if (sm(), $e = n, Pc.current = r, _t !== null) throw Error(te(261));
    return Dt = null, Bt = 0, It
}

function DN() {
    for (; _t !== null;) dC(_t)
}

function NN() {
    for (; _t !== null && !oD();) dC(_t)
}

function dC(e) {
    var t = gC(e.alternate, e, Dn);
    e.memoizedProps = e.pendingProps, t === null ? pC(e) : _t = t, Sm.current = null
}

function pC(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = ON(n, t), n !== null) {
                n.flags &= 32767, _t = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                It = 6, _t = null;
                return
            }
        } else if (n = bN(n, t, Dn), n !== null) {
            _t = n;
            return
        }
        if (t = t.sibling, t !== null) {
            _t = t;
            return
        }
        _t = t = e
    } while (t !== null);
    It === 0 && (It = 5)
}

function So(e, t, n) {
    var r = Ye,
        i = lr.transition;
    try {
        lr.transition = null, Ye = 1, MN(e, t, n, r)
    } finally {
        lr.transition = i, Ye = r
    }
    return null
}

function MN(e, t, n, r) {
    do Pl(); while (zi !== null);
    if ($e & 6) throw Error(te(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(te(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (gD(e, l), e === Dt && (_t = Dt = null, Bt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || $a || ($a = !0, mC(gc, function() {
            return Pl(), null
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
        l = lr.transition, lr.transition = null;
        var s = Ye;
        Ye = 1;
        var a = $e;
        $e |= 4, Sm.current = null, IN(e, n), uC(n, e), tN($h), vc = !!zh, $h = zh = null, e.current = n, RN(n), lD(), $e = a, Ye = s, lr.transition = l
    } else e.current = n;
    if ($a && ($a = !1, zi = e, Dc = i), l = e.pendingLanes, l === 0 && (Wi = null), aD(n.stateNode), xn(e, Ct()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Ac) throw Ac = !1, e = og, og = null, e;
    return Dc & 1 && e.tag !== 0 && Pl(), l = e.pendingLanes, l & 1 ? e === lg ? Qu++ : (Qu = 0, lg = e) : Qu = 0, uo(), null
}

function Pl() {
    if (zi !== null) {
        var e = GS(Dc),
            t = lr.transition,
            n = Ye;
        try {
            if (lr.transition = null, Ye = 16 > e ? 16 : e, zi === null) var r = !1;
            else {
                if (e = zi, zi = null, Dc = 0, $e & 6) throw Error(te(331));
                var i = $e;
                for ($e |= 4, ce = e.current; ce !== null;) {
                    var l = ce,
                        s = l.child;
                    if (ce.flags & 16) {
                        var a = l.deletions;
                        if (a !== null) {
                            for (var f = 0; f < a.length; f++) {
                                var d = a[f];
                                for (ce = d; ce !== null;) {
                                    var p = ce;
                                    switch (p.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Gu(8, p, l)
                                    }
                                    var g = p.child;
                                    if (g !== null) g.return = p, ce = g;
                                    else
                                        for (; ce !== null;) {
                                            p = ce;
                                            var v = p.sibling,
                                                m = p.return;
                                            if (iC(p), p === d) {
                                                ce = null;
                                                break
                                            }
                                            if (v !== null) {
                                                v.return = m, ce = v;
                                                break
                                            }
                                            ce = m
                                        }
                                }
                            }
                            var E = l.alternate;
                            if (E !== null) {
                                var S = E.child;
                                if (S !== null) {
                                    E.child = null;
                                    do {
                                        var A = S.sibling;
                                        S.sibling = null, S = A
                                    } while (S !== null)
                                }
                            }
                            ce = l
                        }
                    }
                    if (l.subtreeFlags & 2064 && s !== null) s.return = l, ce = s;
                    else e: for (; ce !== null;) {
                        if (l = ce, l.flags & 2048) switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Gu(9, l, l.return)
                        }
                        var y = l.sibling;
                        if (y !== null) {
                            y.return = l.return, ce = y;
                            break e
                        }
                        ce = l.return
                    }
                }
                var x = e.current;
                for (ce = x; ce !== null;) {
                    s = ce;
                    var k = s.child;
                    if (s.subtreeFlags & 2064 && k !== null) k.return = s, ce = k;
                    else e: for (s = x; ce !== null;) {
                        if (a = ce, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ff(9, a)
                            }
                        } catch (N) {
                            xt(a, a.return, N)
                        }
                        if (a === s) {
                            ce = null;
                            break e
                        }
                        var P = a.sibling;
                        if (P !== null) {
                            P.return = a.return, ce = P;
                            break e
                        }
                        ce = a.return
                    }
                }
                if ($e = i, uo(), zr && typeof zr.onPostCommitFiberRoot == "function") try {
                    zr.onPostCommitFiberRoot(nf, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            Ye = n, lr.transition = t
        }
    }
    return !1
}

function hw(e, t, n) {
    t = jl(n, t), t = GE(e, t, 1), e = ji(e, t, 1), t = on(), e !== null && (bs(e, 1, t), xn(e, t))
}

function xt(e, t, n) {
    if (e.tag === 3) hw(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                hw(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Wi === null || !Wi.has(r))) {
                    e = jl(n, e), e = KE(t, e, 1), t = ji(t, e, 1), e = on(), t !== null && (bs(t, 1, e), xn(t, e));
                    break
                }
            }
            t = t.return
        }
}

function LN(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = on(), e.pingedLanes |= e.suspendedLanes & n, Dt === e && (Bt & n) === n && (It === 4 || It === 3 && (Bt & 130023424) === Bt && 500 > Ct() - Cm ? Ro(e, 0) : Em |= n), xn(e, t)
}

function hC(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ia, Ia <<= 1, !(Ia & 130023424) && (Ia = 4194304)) : t = 1);
    var n = on();
    e = ci(e, t), e !== null && (bs(e, t, n), xn(e, n))
}

function FN(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), hC(e, n)
}

function zN(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(te(314))
    }
    r !== null && r.delete(t), hC(e, n)
}
var gC;
gC = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || yn.current) mn = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return mn = !1, _N(e, t, n);
            mn = !!(e.flags & 131072)
        }
    else mn = !1, pt && t.flags & 1048576 && wE(t, kc, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            rc(e, t), e = t.pendingProps;
            var i = $l(t, Xt.current);
            Rl(t, n), i = mm(null, t, r, e, i, n);
            var l = vm();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, wn(r) ? (l = !0, Ec(t)) : l = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, fm(t), i.updater = cf, t.stateNode = i, i._reactInternals = t, Kh(t, r, e, n), t = Xh(null, t, r, !0, l, n)) : (t.tag = 0, pt && l && im(t), nn(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (rc(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = BN(r), e = wr(r, e), i) {
                    case 0:
                        t = Yh(null, t, r, e, n);
                        break e;
                    case 1:
                        t = iw(null, t, r, e, n);
                        break e;
                    case 11:
                        t = nw(null, t, r, e, n);
                        break e;
                    case 14:
                        t = rw(null, t, r, wr(r.type, e), n);
                        break e
                }
                throw Error(te(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : wr(r, i), Yh(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : wr(r, i), iw(e, t, r, i, n);
        case 3:
            e: {
                if (ZE(t), e === null) throw Error(te(387));r = t.pendingProps,
                l = t.memoizedState,
                i = l.element,
                _E(e, t),
                Oc(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, l.isDehydrated)
                    if (l = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        i = jl(Error(te(423)), t), t = ow(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = jl(Error(te(424)), t), t = ow(e, t, r, n, i);
                    break e
                } else
                    for (Mn = Hi(t.stateNode.containerInfo.firstChild), Fn = t, pt = !0, Sr = null, n = CE(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Bl(), r === i) {
                        t = fi(e, t, n);
                        break e
                    }
                    nn(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return bE(t), e === null && Vh(t), r = t.type, i = t.pendingProps, l = e !== null ? e.memoizedProps : null, s = i.children, Bh(r, i) ? s = null : l !== null && Bh(r, l) && (t.flags |= 32), XE(e, t), nn(e, t, s, n), t.child;
        case 6:
            return e === null && Vh(t), null;
        case 13:
            return JE(e, t, n);
        case 4:
            return dm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ul(t, null, r, n) : nn(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : wr(r, i), nw(e, t, r, i, n);
        case 7:
            return nn(e, t, t.pendingProps, n), t.child;
        case 8:
            return nn(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return nn(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, l = t.memoizedProps, s = i.value, nt(_c, r._currentValue), r._currentValue = s, l !== null)
                    if (_r(l.value, s)) {
                        if (l.children === i.children && !yn.current) {
                            t = fi(e, t, n);
                            break e
                        }
                    } else
                        for (l = t.child, l !== null && (l.return = t); l !== null;) {
                            var a = l.dependencies;
                            if (a !== null) {
                                s = l.child;
                                for (var f = a.firstContext; f !== null;) {
                                    if (f.context === r) {
                                        if (l.tag === 1) {
                                            f = ui(-1, n & -n), f.tag = 2;
                                            var d = l.updateQueue;
                                            if (d !== null) {
                                                d = d.shared;
                                                var p = d.pending;
                                                p === null ? f.next = f : (f.next = p.next, p.next = f), d.pending = f
                                            }
                                        }
                                        l.lanes |= n, f = l.alternate, f !== null && (f.lanes |= n), qh(l.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    f = f.next
                                }
                            } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
                            else if (l.tag === 18) {
                                if (s = l.return, s === null) throw Error(te(341));
                                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), qh(s, n, t), s = l.sibling
                            } else s = l.child;
                            if (s !== null) s.return = l;
                            else
                                for (s = l; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (l = s.sibling, l !== null) {
                                        l.return = s.return, s = l;
                                        break
                                    }
                                    s = s.return
                                }
                            l = s
                        }
                nn(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, Rl(t, n), i = sr(i), r = r(i), t.flags |= 1, nn(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = wr(r, t.pendingProps), i = wr(r.type, i), rw(e, t, r, i, n);
        case 15:
            return QE(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : wr(r, i), rc(e, t), t.tag = 1, wn(r) ? (e = !0, Ec(t)) : e = !1, Rl(t, n), qE(t, r, i), Kh(t, r, i, n), Xh(null, t, r, !0, e, n);
        case 19:
            return eC(e, t, n);
        case 22:
            return YE(e, t, n)
    }
    throw Error(te(156, t.tag))
};

function mC(e, t) {
    return jS(e, t)
}

function $N(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function or(e, t, n, r) {
    return new $N(e, t, n, r)
}

function Om(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function BN(e) {
    if (typeof e == "function") return Om(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === qg) return 11;
        if (e === Gg) return 14
    }
    return 2
}

function qi(e, t) {
    var n = e.alternate;
    return n === null ? (n = or(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function lc(e, t, n, r, i, l) {
    var s = 2;
    if (r = e, typeof e == "function") Om(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case gl:
            return Po(n.children, i, l, t);
        case Vg:
            s = 8, i |= 8;
            break;
        case yh:
            return e = or(12, n, t, i | 2), e.elementType = yh, e.lanes = l, e;
        case wh:
            return e = or(13, n, t, i), e.elementType = wh, e.lanes = l, e;
        case xh:
            return e = or(19, n, t, i), e.elementType = xh, e.lanes = l, e;
        case bS:
            return pf(n, i, l, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case kS:
                    s = 10;
                    break e;
                case _S:
                    s = 9;
                    break e;
                case qg:
                    s = 11;
                    break e;
                case Gg:
                    s = 14;
                    break e;
                case Pi:
                    s = 16, r = null;
                    break e
            }
            throw Error(te(130, e == null ? e : typeof e, ""))
    }
    return t = or(s, n, t, i), t.elementType = e, t.type = r, t.lanes = l, t
}

function Po(e, t, n, r) {
    return e = or(7, e, r, t), e.lanes = n, e
}

function pf(e, t, n, r) {
    return e = or(22, e, r, t), e.elementType = bS, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Mp(e, t, n) {
    return e = or(6, e, null, t), e.lanes = n, e
}

function Lp(e, t, n) {
    return t = or(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function UN(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mp(0), this.expirationTimes = mp(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mp(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Tm(e, t, n, r, i, l, s, a, f) {
    return e = new UN(e, t, n, a, f), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = or(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, fm(l), e
}

function HN(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: hl,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function vC(e) {
    if (!e) return Ji;
    e = e._reactInternals;
    e: {
        if (Wo(e) !== e || e.tag !== 1) throw Error(te(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (wn(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(te(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (wn(n)) return vE(e, n, t)
    }
    return t
}

function yC(e, t, n, r, i, l, s, a, f) {
    return e = Tm(n, r, !0, e, i, l, s, a, f), e.context = vC(null), n = e.current, r = on(), i = Vi(n), l = ui(r, i), l.callback = t ?? null, ji(n, l, i), e.current.lanes = i, bs(e, i, r), xn(e, r), e
}

function hf(e, t, n, r) {
    var i = t.current,
        l = on(),
        s = Vi(i);
    return n = vC(n), t.context === null ? t.context = n : t.pendingContext = n, t = ui(l, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ji(i, t, s), e !== null && (kr(e, i, s, l), ec(e, i, s)), s
}

function Mc(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function gw(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Im(e, t) {
    gw(e, t), (e = e.alternate) && gw(e, t)
}

function jN() {
    return null
}
var wC = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Rm(e) {
    this._internalRoot = e
}
gf.prototype.render = Rm.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(te(409));
    hf(e, t, null, null)
};
gf.prototype.unmount = Rm.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        zo(function() {
            hf(null, e, null, null)
        }), t[ai] = null
    }
};

function gf(e) {
    this._internalRoot = e
}
gf.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = YS();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Di.length && t !== 0 && t < Di[n].priority; n++);
        Di.splice(n, 0, e), n === 0 && ZS(e)
    }
};

function Pm(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function mf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function mw() {}

function WN(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var l = r;
            r = function() {
                var d = Mc(s);
                l.call(d)
            }
        }
        var s = yC(t, r, e, 0, null, !1, !1, "", mw);
        return e._reactRootContainer = s, e[ai] = s.current, fs(e.nodeType === 8 ? e.parentNode : e), zo(), s
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var d = Mc(f);
            a.call(d)
        }
    }
    var f = Tm(e, 0, !1, null, null, !1, !1, "", mw);
    return e._reactRootContainer = f, e[ai] = f.current, fs(e.nodeType === 8 ? e.parentNode : e), zo(function() {
        hf(t, f, n, r)
    }), f
}

function vf(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
        var s = l;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var f = Mc(s);
                a.call(f)
            }
        }
        hf(t, s, e, i)
    } else s = WN(n, t, e, i, r);
    return Mc(s)
}
KS = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Lu(t.pendingLanes);
                n !== 0 && (Yg(t, n | 1), xn(t, Ct()), !($e & 6) && (Wl = Ct() + 500, uo()))
            }
            break;
        case 13:
            zo(function() {
                var r = ci(e, 1);
                if (r !== null) {
                    var i = on();
                    kr(r, e, 1, i)
                }
            }), Im(e, 1)
    }
};
Xg = function(e) {
    if (e.tag === 13) {
        var t = ci(e, 134217728);
        if (t !== null) {
            var n = on();
            kr(t, e, 134217728, n)
        }
        Im(e, 134217728)
    }
};
QS = function(e) {
    if (e.tag === 13) {
        var t = Vi(e),
            n = ci(e, t);
        if (n !== null) {
            var r = on();
            kr(n, e, t, r)
        }
        Im(e, t)
    }
};
YS = function() {
    return Ye
};
XS = function(e, t) {
    var n = Ye;
    try {
        return Ye = e, t()
    } finally {
        Ye = n
    }
};
Rh = function(e, t, n) {
    switch (t) {
        case "input":
            if (Ch(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = uf(r);
                        if (!i) throw Error(te(90));
                        TS(r), Ch(r, i)
                    }
                }
            }
            break;
        case "textarea":
            RS(e, n);
            break;
        case "select":
            t = n.value, t != null && bl(e, !!n.multiple, t, !1)
    }
};
FS = km;
zS = zo;
var VN = {
        usingClientEntryPoint: !1,
        Events: [Ts, wl, uf, MS, LS, km]
    },
    Pu = {
        findFiberByHostInstance: bo,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    qN = {
        bundleType: Pu.bundleType,
        version: Pu.version,
        rendererPackageName: Pu.rendererPackageName,
        rendererConfig: Pu.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: pi.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = US(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Pu.findFiberByHostInstance || jN,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ba = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ba.isDisabled && Ba.supportsFiber) try {
        nf = Ba.inject(qN), zr = Ba
    } catch {}
}
Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = VN;
Un.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Pm(t)) throw Error(te(200));
    return HN(e, t, null, n)
};
Un.createRoot = function(e, t) {
    if (!Pm(e)) throw Error(te(299));
    var n = !1,
        r = "",
        i = wC;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Tm(e, 1, !1, null, null, n, !1, r, i), e[ai] = t.current, fs(e.nodeType === 8 ? e.parentNode : e), new Rm(t)
};
Un.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(te(188)) : (e = Object.keys(e).join(","), Error(te(268, e)));
    return e = US(t), e = e === null ? null : e.stateNode, e
};
Un.flushSync = function(e) {
    return zo(e)
};
Un.hydrate = function(e, t, n) {
    if (!mf(t)) throw Error(te(200));
    return vf(null, e, t, !0, n)
};
Un.hydrateRoot = function(e, t, n) {
    if (!Pm(e)) throw Error(te(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        l = "",
        s = wC;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = yC(t, null, e, 1, n ?? null, i, !1, l, s), e[ai] = t.current, fs(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new gf(t)
};
Un.render = function(e, t, n) {
    if (!mf(t)) throw Error(te(200));
    return vf(null, e, t, !1, n)
};
Un.unmountComponentAtNode = function(e) {
    if (!mf(e)) throw Error(te(40));
    return e._reactRootContainer ? (zo(function() {
        vf(null, null, e, !1, function() {
            e._reactRootContainer = null, e[ai] = null
        })
    }), !0) : !1
};
Un.unstable_batchedUpdates = km;
Un.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!mf(n)) throw Error(te(200));
    if (e == null || e._reactInternals === void 0) throw Error(te(38));
    return vf(e, t, n, !1, r)
};
Un.version = "18.3.1-next-f1338f8080-20240426";

function xC() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xC)
    } catch (e) {
        console.error(e)
    }
}
xC(), xS.exports = Un;
var tu = xS.exports;
const Ua = io(tu);
var SC, vw = tu;
SC = vw.createRoot, vw.hydrateRoot;
var EC = {
        exports: {}
    },
    CC = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vl = I;

function GN(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var KN = typeof Object.is == "function" ? Object.is : GN,
    QN = Vl.useState,
    YN = Vl.useEffect,
    XN = Vl.useLayoutEffect,
    ZN = Vl.useDebugValue;

function JN(e, t) {
    var n = t(),
        r = QN({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        i = r[0].inst,
        l = r[1];
    return XN(function() {
        i.value = n, i.getSnapshot = t, Fp(i) && l({
            inst: i
        })
    }, [e, n, t]), YN(function() {
        return Fp(i) && l({
            inst: i
        }), e(function() {
            Fp(i) && l({
                inst: i
            })
        })
    }, [e]), ZN(n), n
}

function Fp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !KN(e, n)
    } catch {
        return !0
    }
}

function eM(e, t) {
    return t()
}
var tM = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? eM : JN;
CC.useSyncExternalStore = Vl.useSyncExternalStore !== void 0 ? Vl.useSyncExternalStore : tM;
EC.exports = CC;
var nM = EC.exports,
    kC = {
        exports: {}
    },
    _C = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yf = I,
    rM = nM;

function iM(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var oM = typeof Object.is == "function" ? Object.is : iM,
    lM = rM.useSyncExternalStore,
    uM = yf.useRef,
    sM = yf.useEffect,
    aM = yf.useMemo,
    cM = yf.useDebugValue;
_C.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
    var l = uM(null);
    if (l.current === null) {
        var s = {
            hasValue: !1,
            value: null
        };
        l.current = s
    } else s = l.current;
    l = aM(function() {
        function f(m) {
            if (!d) {
                if (d = !0, p = m, m = r(m), i !== void 0 && s.hasValue) {
                    var E = s.value;
                    if (i(E, m)) return g = E
                }
                return g = m
            }
            if (E = g, oM(p, m)) return E;
            var S = r(m);
            return i !== void 0 && i(E, S) ? E : (p = m, g = S)
        }
        var d = !1,
            p, g, v = n === void 0 ? null : n;
        return [function() {
            return f(t())
        }, v === null ? void 0 : function() {
            return f(v())
        }]
    }, [t, n, r, i]);
    var a = lM(e, l[0], l[1]);
    return sM(function() {
        s.hasValue = !0, s.value = a
    }, [a]), cM(a), a
};
kC.exports = _C;
var fM = kC.exports;

function dM(e) {
    e()
}
let bC = dM;
const pM = e => bC = e,
    hM = () => bC,
    yw = Symbol.for("react-redux-context"),
    ww = typeof globalThis < "u" ? globalThis : {};

function gM() {
    var e;
    if (!I.createContext) return {};
    const t = (e = ww[yw]) != null ? e : ww[yw] = new Map;
    let n = t.get(I.createContext);
    return n || (n = I.createContext(null), t.set(I.createContext, n)), n
}
const eo = gM();

function Am(e = eo) {
    return function() {
        return I.useContext(e)
    }
}
const OC = Am(),
    mM = () => {
        throw new Error("uSES not initialized!")
    };
let TC = mM;
const vM = e => {
        TC = e
    },
    yM = (e, t) => e === t;

function wM(e = eo) {
    const t = e === eo ? OC : Am(e);
    return function(r, i = {}) {
        const {
            equalityFn: l = yM,
            stabilityCheck: s = void 0,
            noopCheck: a = void 0
        } = typeof i == "function" ? {
            equalityFn: i
        } : i, {
            store: f,
            subscription: d,
            getServerState: p,
            stabilityCheck: g,
            noopCheck: v
        } = t();
        I.useRef(!0);
        const m = I.useCallback({
                [r.name](S) {
                    return r(S)
                }
            } [r.name], [r, g, s]),
            E = TC(d.addNestedSub, f.getState, p || f.getState, m, l);
        return I.useDebugValue(E), E
    }
}
const xM = wM();

function Lc() {
    return Lc = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Lc.apply(this, arguments)
}

function Dm(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0) continue;
            n[r] = e[r]
        } return n
}
var IC = {
        exports: {}
    },
    Xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nt = typeof Symbol == "function" && Symbol.for,
    Nm = Nt ? Symbol.for("react.element") : 60103,
    Mm = Nt ? Symbol.for("react.portal") : 60106,
    wf = Nt ? Symbol.for("react.fragment") : 60107,
    xf = Nt ? Symbol.for("react.strict_mode") : 60108,
    Sf = Nt ? Symbol.for("react.profiler") : 60114,
    Ef = Nt ? Symbol.for("react.provider") : 60109,
    Cf = Nt ? Symbol.for("react.context") : 60110,
    Lm = Nt ? Symbol.for("react.async_mode") : 60111,
    kf = Nt ? Symbol.for("react.concurrent_mode") : 60111,
    _f = Nt ? Symbol.for("react.forward_ref") : 60112,
    bf = Nt ? Symbol.for("react.suspense") : 60113,
    SM = Nt ? Symbol.for("react.suspense_list") : 60120,
    Of = Nt ? Symbol.for("react.memo") : 60115,
    Tf = Nt ? Symbol.for("react.lazy") : 60116,
    EM = Nt ? Symbol.for("react.block") : 60121,
    CM = Nt ? Symbol.for("react.fundamental") : 60117,
    kM = Nt ? Symbol.for("react.responder") : 60118,
    _M = Nt ? Symbol.for("react.scope") : 60119;

function jn(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Nm:
                switch (e = e.type, e) {
                    case Lm:
                    case kf:
                    case wf:
                    case Sf:
                    case xf:
                    case bf:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case Cf:
                            case _f:
                            case Tf:
                            case Of:
                            case Ef:
                                return e;
                            default:
                                return t
                        }
                }
            case Mm:
                return t
        }
    }
}

function RC(e) {
    return jn(e) === kf
}
Xe.AsyncMode = Lm;
Xe.ConcurrentMode = kf;
Xe.ContextConsumer = Cf;
Xe.ContextProvider = Ef;
Xe.Element = Nm;
Xe.ForwardRef = _f;
Xe.Fragment = wf;
Xe.Lazy = Tf;
Xe.Memo = Of;
Xe.Portal = Mm;
Xe.Profiler = Sf;
Xe.StrictMode = xf;
Xe.Suspense = bf;
Xe.isAsyncMode = function(e) {
    return RC(e) || jn(e) === Lm
};
Xe.isConcurrentMode = RC;
Xe.isContextConsumer = function(e) {
    return jn(e) === Cf
};
Xe.isContextProvider = function(e) {
    return jn(e) === Ef
};
Xe.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Nm
};
Xe.isForwardRef = function(e) {
    return jn(e) === _f
};
Xe.isFragment = function(e) {
    return jn(e) === wf
};
Xe.isLazy = function(e) {
    return jn(e) === Tf
};
Xe.isMemo = function(e) {
    return jn(e) === Of
};
Xe.isPortal = function(e) {
    return jn(e) === Mm
};
Xe.isProfiler = function(e) {
    return jn(e) === Sf
};
Xe.isStrictMode = function(e) {
    return jn(e) === xf
};
Xe.isSuspense = function(e) {
    return jn(e) === bf
};
Xe.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === wf || e === kf || e === Sf || e === xf || e === bf || e === SM || typeof e == "object" && e !== null && (e.$$typeof === Tf || e.$$typeof === Of || e.$$typeof === Ef || e.$$typeof === Cf || e.$$typeof === _f || e.$$typeof === CM || e.$$typeof === kM || e.$$typeof === _M || e.$$typeof === EM)
};
Xe.typeOf = jn;
IC.exports = Xe;
var bM = IC.exports,
    PC = bM,
    OM = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    },
    TM = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    AC = {};
AC[PC.ForwardRef] = OM;
AC[PC.Memo] = TM;
var DC = {
        exports: {}
    },
    Ze = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fm = Symbol.for("react.element"),
    zm = Symbol.for("react.portal"),
    If = Symbol.for("react.fragment"),
    Rf = Symbol.for("react.strict_mode"),
    Pf = Symbol.for("react.profiler"),
    Af = Symbol.for("react.provider"),
    Df = Symbol.for("react.context"),
    IM = Symbol.for("react.server_context"),
    Nf = Symbol.for("react.forward_ref"),
    Mf = Symbol.for("react.suspense"),
    Lf = Symbol.for("react.suspense_list"),
    Ff = Symbol.for("react.memo"),
    zf = Symbol.for("react.lazy"),
    RM = Symbol.for("react.offscreen"),
    NC;
NC = Symbol.for("react.module.reference");

function cr(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Fm:
                switch (e = e.type, e) {
                    case If:
                    case Pf:
                    case Rf:
                    case Mf:
                    case Lf:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case IM:
                            case Df:
                            case Nf:
                            case zf:
                            case Ff:
                            case Af:
                                return e;
                            default:
                                return t
                        }
                }
            case zm:
                return t
        }
    }
}
Ze.ContextConsumer = Df;
Ze.ContextProvider = Af;
Ze.Element = Fm;
Ze.ForwardRef = Nf;
Ze.Fragment = If;
Ze.Lazy = zf;
Ze.Memo = Ff;
Ze.Portal = zm;
Ze.Profiler = Pf;
Ze.StrictMode = Rf;
Ze.Suspense = Mf;
Ze.SuspenseList = Lf;
Ze.isAsyncMode = function() {
    return !1
};
Ze.isConcurrentMode = function() {
    return !1
};
Ze.isContextConsumer = function(e) {
    return cr(e) === Df
};
Ze.isContextProvider = function(e) {
    return cr(e) === Af
};
Ze.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Fm
};
Ze.isForwardRef = function(e) {
    return cr(e) === Nf
};
Ze.isFragment = function(e) {
    return cr(e) === If
};
Ze.isLazy = function(e) {
    return cr(e) === zf
};
Ze.isMemo = function(e) {
    return cr(e) === Ff
};
Ze.isPortal = function(e) {
    return cr(e) === zm
};
Ze.isProfiler = function(e) {
    return cr(e) === Pf
};
Ze.isStrictMode = function(e) {
    return cr(e) === Rf
};
Ze.isSuspense = function(e) {
    return cr(e) === Mf
};
Ze.isSuspenseList = function(e) {
    return cr(e) === Lf
};
Ze.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === If || e === Pf || e === Rf || e === Mf || e === Lf || e === RM || typeof e == "object" && e !== null && (e.$$typeof === zf || e.$$typeof === Ff || e.$$typeof === Af || e.$$typeof === Df || e.$$typeof === Nf || e.$$typeof === NC || e.getModuleId !== void 0)
};
Ze.typeOf = cr;
DC.exports = Ze;
var PM = DC.exports;
const AM = io(PM);

function DM() {
    const e = hM();
    let t = null,
        n = null;
    return {
        clear() {
            t = null, n = null
        },
        notify() {
            e(() => {
                let r = t;
                for (; r;) r.callback(), r = r.next
            })
        },
        get() {
            let r = [],
                i = t;
            for (; i;) r.push(i), i = i.next;
            return r
        },
        subscribe(r) {
            let i = !0,
                l = n = {
                    callback: r,
                    next: null,
                    prev: n
                };
            return l.prev ? l.prev.next = l : t = l,
                function() {
                    !i || t === null || (i = !1, l.next ? l.next.prev = l.prev : n = l.prev, l.prev ? l.prev.next = l.next : t = l.next)
                }
        }
    }
}
const xw = {
    notify() {},
    get: () => []
};

function NM(e, t) {
    let n, r = xw,
        i = 0,
        l = !1;

    function s(S) {
        p();
        const A = r.subscribe(S);
        let y = !1;
        return () => {
            y || (y = !0, A(), g())
        }
    }

    function a() {
        r.notify()
    }

    function f() {
        E.onStateChange && E.onStateChange()
    }

    function d() {
        return l
    }

    function p() {
        i++, n || (n = t ? t.addNestedSub(f) : e.subscribe(f), r = DM())
    }

    function g() {
        i--, n && i === 0 && (n(), n = void 0, r.clear(), r = xw)
    }

    function v() {
        l || (l = !0, p())
    }

    function m() {
        l && (l = !1, g())
    }
    const E = {
        addNestedSub: s,
        notifyNestedSubs: a,
        handleChangeWrapper: f,
        isSubscribed: d,
        trySubscribe: v,
        tryUnsubscribe: m,
        getListeners: () => r
    };
    return E
}
const MM = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    LM = MM ? I.useLayoutEffect : I.useEffect;

function FM({
    store: e,
    context: t,
    children: n,
    serverState: r,
    stabilityCheck: i = "once",
    noopCheck: l = "once"
}) {
    const s = I.useMemo(() => {
            const d = NM(e);
            return {
                store: e,
                subscription: d,
                getServerState: r ? () => r : void 0,
                stabilityCheck: i,
                noopCheck: l
            }
        }, [e, r, i, l]),
        a = I.useMemo(() => e.getState(), [e]);
    LM(() => {
        const {
            subscription: d
        } = s;
        return d.onStateChange = d.notifyNestedSubs, d.trySubscribe(), a !== e.getState() && d.notifyNestedSubs(), () => {
            d.tryUnsubscribe(), d.onStateChange = void 0
        }
    }, [s, a]);
    const f = t || eo;
    return I.createElement(f.Provider, {
        value: s
    }, n)
}

function MC(e = eo) {
    const t = e === eo ? OC : Am(e);
    return function() {
        const {
            store: r
        } = t();
        return r
    }
}
const zM = MC();

function $M(e = eo) {
    const t = e === eo ? zM : MC(e);
    return function() {
        return t().dispatch
    }
}
const BM = $M();
vM(fM.useSyncExternalStoreWithSelector);
pM(tu.unstable_batchedUpdates);
const LC = I.createContext({
    dragDropManager: void 0
});

function xs(e) {
    "@babel/helpers - typeof";
    return xs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, xs(e)
}

function UM(e, t) {
    if (xs(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (xs(r) != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function HM(e) {
    var t = UM(e, "string");
    return xs(t) == "symbol" ? t : t + ""
}

function jM(e, t, n) {
    return t = HM(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Sw(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Ew(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Sw(Object(n), !0).forEach(function(r) {
            jM(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sw(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function Gt(e) {
    return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
var Cw = function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable"
    }(),
    zp = function() {
        return Math.random().toString(36).substring(7).split("").join(".")
    },
    Fc = {
        INIT: "@@redux/INIT" + zp(),
        REPLACE: "@@redux/REPLACE" + zp(),
        PROBE_UNKNOWN_ACTION: function() {
            return "@@redux/PROBE_UNKNOWN_ACTION" + zp()
        }
    };

function WM(e) {
    if (typeof e != "object" || e === null) return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t
}

function $m(e, t, n) {
    var r;
    if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw new Error(Gt(0));
    if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
        if (typeof n != "function") throw new Error(Gt(1));
        return n($m)(e, t)
    }
    if (typeof e != "function") throw new Error(Gt(2));
    var i = e,
        l = t,
        s = [],
        a = s,
        f = !1;

    function d() {
        a === s && (a = s.slice())
    }

    function p() {
        if (f) throw new Error(Gt(3));
        return l
    }

    function g(S) {
        if (typeof S != "function") throw new Error(Gt(4));
        if (f) throw new Error(Gt(5));
        var A = !0;
        return d(), a.push(S),
            function() {
                if (A) {
                    if (f) throw new Error(Gt(6));
                    A = !1, d();
                    var x = a.indexOf(S);
                    a.splice(x, 1), s = null
                }
            }
    }

    function v(S) {
        if (!WM(S)) throw new Error(Gt(7));
        if (typeof S.type > "u") throw new Error(Gt(8));
        if (f) throw new Error(Gt(9));
        try {
            f = !0, l = i(l, S)
        } finally {
            f = !1
        }
        for (var A = s = a, y = 0; y < A.length; y++) {
            var x = A[y];
            x()
        }
        return S
    }

    function m(S) {
        if (typeof S != "function") throw new Error(Gt(10));
        i = S, v({
            type: Fc.REPLACE
        })
    }

    function E() {
        var S, A = g;
        return S = {
            subscribe: function(x) {
                if (typeof x != "object" || x === null) throw new Error(Gt(11));

                function k() {
                    x.next && x.next(p())
                }
                k();
                var P = A(k);
                return {
                    unsubscribe: P
                }
            }
        }, S[Cw] = function() {
            return this
        }, S
    }
    return v({
        type: Fc.INIT
    }), r = {
        dispatch: v,
        subscribe: g,
        getState: p,
        replaceReducer: m
    }, r[Cw] = E, r
}

function VM(e) {
    Object.keys(e).forEach(function(t) {
        var n = e[t],
            r = n(void 0, {
                type: Fc.INIT
            });
        if (typeof r > "u") throw new Error(Gt(12));
        if (typeof n(void 0, {
                type: Fc.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(Gt(13))
    })
}

function qM(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        typeof e[i] == "function" && (n[i] = e[i])
    }
    var l = Object.keys(n),
        s;
    try {
        VM(n)
    } catch (a) {
        s = a
    }
    return function(f, d) {
        if (f === void 0 && (f = {}), s) throw s;
        for (var p = !1, g = {}, v = 0; v < l.length; v++) {
            var m = l[v],
                E = n[m],
                S = f[m],
                A = E(S, d);
            if (typeof A > "u") throw d && d.type, new Error(Gt(14));
            g[m] = A, p = p || A !== S
        }
        return p = p || l.length !== Object.keys(f).length, p ? g : f
    }
}

function zc() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.length === 0 ? function(r) {
        return r
    } : t.length === 1 ? t[0] : t.reduce(function(r, i) {
        return function() {
            return r(i.apply(void 0, arguments))
        }
    })
}

function GM() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(r) {
        return function() {
            var i = r.apply(void 0, arguments),
                l = function() {
                    throw new Error(Gt(15))
                },
                s = {
                    getState: i.getState,
                    dispatch: function() {
                        return l.apply(void 0, arguments)
                    }
                },
                a = t.map(function(f) {
                    return f(s)
                });
            return l = zc.apply(void 0, a)(i.dispatch), Ew(Ew({}, i), {}, {
                dispatch: l
            })
        }
    }
}

function _e(e, t, ...n) {
    if (KM() && t === void 0) throw new Error("invariant requires an error message argument");
    if (!e) {
        let r;
        if (t === void 0) r = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            let i = 0;
            r = new Error(t.replace(/%s/g, function() {
                return n[i++]
            })), r.name = "Invariant Violation"
        }
        throw r.framesToPop = 1, r
    }
}

function KM() {
    return typeof process < "u" && {}.NODE_ENV === "production"
}

function QM(e, t, n) {
    return t.split(".").reduce((r, i) => r && r[i] ? r[i] : n || null, e)
}

function YM(e, t) {
    return e.filter(n => n !== t)
}

function FC(e) {
    return typeof e == "object"
}

function XM(e, t) {
    const n = new Map,
        r = l => {
            n.set(l, n.has(l) ? n.get(l) + 1 : 1)
        };
    e.forEach(r), t.forEach(r);
    const i = [];
    return n.forEach((l, s) => {
        l === 1 && i.push(s)
    }), i
}

function ZM(e, t) {
    return e.filter(n => t.indexOf(n) > -1)
}
const Bm = "dnd-core/INIT_COORDS",
    $f = "dnd-core/BEGIN_DRAG",
    Um = "dnd-core/PUBLISH_DRAG_SOURCE",
    Bf = "dnd-core/HOVER",
    Uf = "dnd-core/DROP",
    Hf = "dnd-core/END_DRAG";

function kw(e, t) {
    return {
        type: Bm,
        payload: {
            sourceClientOffset: t || null,
            clientOffset: e || null
        }
    }
}
const JM = {
    type: Bm,
    payload: {
        clientOffset: null,
        sourceClientOffset: null
    }
};

function eL(e) {
    return function(n = [], r = {
        publishSource: !0
    }) {
        const {
            publishSource: i = !0,
            clientOffset: l,
            getSourceClientOffset: s
        } = r, a = e.getMonitor(), f = e.getRegistry();
        e.dispatch(kw(l)), tL(n, a, f);
        const d = iL(n, a);
        if (d == null) {
            e.dispatch(JM);
            return
        }
        let p = null;
        if (l) {
            if (!s) throw new Error("getSourceClientOffset must be defined");
            nL(s), p = s(d)
        }
        e.dispatch(kw(l, p));
        const v = f.getSource(d).beginDrag(a, d);
        if (v == null) return;
        rL(v), f.pinSource(d);
        const m = f.getSourceType(d);
        return {
            type: $f,
            payload: {
                itemType: m,
                item: v,
                sourceId: d,
                clientOffset: l || null,
                sourceClientOffset: p || null,
                isSourcePublic: !!i
            }
        }
    }
}

function tL(e, t, n) {
    _e(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(r) {
        _e(n.getSource(r), "Expected sourceIds to be registered.")
    })
}

function nL(e) {
    _e(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.")
}

function rL(e) {
    _e(FC(e), "Item must be an object.")
}

function iL(e, t) {
    let n = null;
    for (let r = e.length - 1; r >= 0; r--)
        if (t.canDragSource(e[r])) {
            n = e[r];
            break
        } return n
}

function oL(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function lL(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {},
            r = Object.keys(n);
        typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
            return Object.getOwnPropertyDescriptor(n, i).enumerable
        }))), r.forEach(function(i) {
            oL(e, i, n[i])
        })
    }
    return e
}

function uL(e) {
    return function(n = {}) {
        const r = e.getMonitor(),
            i = e.getRegistry();
        sL(r), fL(r).forEach((s, a) => {
            const f = aL(s, a, i, r),
                d = {
                    type: Uf,
                    payload: {
                        dropResult: lL({}, n, f)
                    }
                };
            e.dispatch(d)
        })
    }
}

function sL(e) {
    _e(e.isDragging(), "Cannot call drop while not dragging."), _e(!e.didDrop(), "Cannot call drop twice during one drag operation.")
}

function aL(e, t, n, r) {
    const i = n.getTarget(e);
    let l = i ? i.drop(r, e) : void 0;
    return cL(l), typeof l > "u" && (l = t === 0 ? {} : r.getDropResult()), l
}

function cL(e) {
    _e(typeof e > "u" || FC(e), "Drop result must either be an object or undefined.")
}

function fL(e) {
    const t = e.getTargetIds().filter(e.canDropOnTarget, e);
    return t.reverse(), t
}

function dL(e) {
    return function() {
        const n = e.getMonitor(),
            r = e.getRegistry();
        pL(n);
        const i = n.getSourceId();
        return i != null && (r.getSource(i, !0).endDrag(n, i), r.unpinSource()), {
            type: Hf
        }
    }
}

function pL(e) {
    _e(e.isDragging(), "Cannot call endDrag while not dragging.")
}

function ag(e, t) {
    return t === null ? e === null : Array.isArray(e) ? e.some(n => n === t) : e === t
}

function hL(e) {
    return function(n, {
        clientOffset: r
    } = {}) {
        gL(n);
        const i = n.slice(0),
            l = e.getMonitor(),
            s = e.getRegistry(),
            a = l.getItemType();
        return vL(i, s, a), mL(i, l, s), yL(i, l, s), {
            type: Bf,
            payload: {
                targetIds: i,
                clientOffset: r || null
            }
        }
    }
}

function gL(e) {
    _e(Array.isArray(e), "Expected targetIds to be an array.")
}

function mL(e, t, n) {
    _e(t.isDragging(), "Cannot call hover while not dragging."), _e(!t.didDrop(), "Cannot call hover after drop.");
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        _e(e.lastIndexOf(i) === r, "Expected targetIds to be unique in the passed array.");
        const l = n.getTarget(i);
        _e(l, "Expected targetIds to be registered.")
    }
}

function vL(e, t, n) {
    for (let r = e.length - 1; r >= 0; r--) {
        const i = e[r],
            l = t.getTargetType(i);
        ag(l, n) || e.splice(r, 1)
    }
}

function yL(e, t, n) {
    e.forEach(function(r) {
        n.getTarget(r).hover(t, r)
    })
}

function wL(e) {
    return function() {
        if (e.getMonitor().isDragging()) return {
            type: Um
        }
    }
}

function xL(e) {
    return {
        beginDrag: eL(e),
        publishDragSource: wL(e),
        hover: hL(e),
        drop: uL(e),
        endDrag: dL(e)
    }
}
class SL {
    receiveBackend(t) {
        this.backend = t
    }
    getMonitor() {
        return this.monitor
    }
    getBackend() {
        return this.backend
    }
    getRegistry() {
        return this.monitor.registry
    }
    getActions() {
        const t = this,
            {
                dispatch: n
            } = this.store;

        function r(l) {
            return (...s) => {
                const a = l.apply(t, s);
                typeof a < "u" && n(a)
            }
        }
        const i = xL(this);
        return Object.keys(i).reduce((l, s) => {
            const a = i[s];
            return l[s] = r(a), l
        }, {})
    }
    dispatch(t) {
        this.store.dispatch(t)
    }
    constructor(t, n) {
        this.isSetUp = !1, this.handleRefCountChange = () => {
            const r = this.store.getState().refCount > 0;
            this.backend && (r && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !r && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1))
        }, this.store = t, this.monitor = n, t.subscribe(this.handleRefCountChange)
    }
}

function EL(e, t) {
    return {
        x: e.x + t.x,
        y: e.y + t.y
    }
}

function zC(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function CL(e) {
    const {
        clientOffset: t,
        initialClientOffset: n,
        initialSourceClientOffset: r
    } = e;
    return !t || !n || !r ? null : zC(EL(t, r), n)
}

function kL(e) {
    const {
        clientOffset: t,
        initialClientOffset: n
    } = e;
    return !t || !n ? null : zC(t, n)
}
const Yu = [],
    Hm = [];
Yu.__IS_NONE__ = !0;
Hm.__IS_ALL__ = !0;

function _L(e, t) {
    return e === Yu ? !1 : e === Hm || typeof t > "u" ? !0 : ZM(t, e).length > 0
}
class bL {
    subscribeToStateChange(t, n = {}) {
        const {
            handlerIds: r
        } = n;
        _e(typeof t == "function", "listener must be a function."), _e(typeof r > "u" || Array.isArray(r), "handlerIds, when specified, must be an array of strings.");
        let i = this.store.getState().stateId;
        const l = () => {
            const s = this.store.getState(),
                a = s.stateId;
            try {
                a === i || a === i + 1 && !_L(s.dirtyHandlerIds, r) || t()
            } finally {
                i = a
            }
        };
        return this.store.subscribe(l)
    }
    subscribeToOffsetChange(t) {
        _e(typeof t == "function", "listener must be a function.");
        let n = this.store.getState().dragOffset;
        const r = () => {
            const i = this.store.getState().dragOffset;
            i !== n && (n = i, t())
        };
        return this.store.subscribe(r)
    }
    canDragSource(t) {
        if (!t) return !1;
        const n = this.registry.getSource(t);
        return _e(n, `Expected to find a valid source. sourceId=${t}`), this.isDragging() ? !1 : n.canDrag(this, t)
    }
    canDropOnTarget(t) {
        if (!t) return !1;
        const n = this.registry.getTarget(t);
        if (_e(n, `Expected to find a valid target. targetId=${t}`), !this.isDragging() || this.didDrop()) return !1;
        const r = this.registry.getTargetType(t),
            i = this.getItemType();
        return ag(r, i) && n.canDrop(this, t)
    }
    isDragging() {
        return !!this.getItemType()
    }
    isDraggingSource(t) {
        if (!t) return !1;
        const n = this.registry.getSource(t, !0);
        if (_e(n, `Expected to find a valid source. sourceId=${t}`), !this.isDragging() || !this.isSourcePublic()) return !1;
        const r = this.registry.getSourceType(t),
            i = this.getItemType();
        return r !== i ? !1 : n.isDragging(this, t)
    }
    isOverTarget(t, n = {
        shallow: !1
    }) {
        if (!t) return !1;
        const {
            shallow: r
        } = n;
        if (!this.isDragging()) return !1;
        const i = this.registry.getTargetType(t),
            l = this.getItemType();
        if (l && !ag(i, l)) return !1;
        const s = this.getTargetIds();
        if (!s.length) return !1;
        const a = s.indexOf(t);
        return r ? a === s.length - 1 : a > -1
    }
    getItemType() {
        return this.store.getState().dragOperation.itemType
    }
    getItem() {
        return this.store.getState().dragOperation.item
    }
    getSourceId() {
        return this.store.getState().dragOperation.sourceId
    }
    getTargetIds() {
        return this.store.getState().dragOperation.targetIds
    }
    getDropResult() {
        return this.store.getState().dragOperation.dropResult
    }
    didDrop() {
        return this.store.getState().dragOperation.didDrop
    }
    isSourcePublic() {
        return !!this.store.getState().dragOperation.isSourcePublic
    }
    getInitialClientOffset() {
        return this.store.getState().dragOffset.initialClientOffset
    }
    getInitialSourceClientOffset() {
        return this.store.getState().dragOffset.initialSourceClientOffset
    }
    getClientOffset() {
        return this.store.getState().dragOffset.clientOffset
    }
    getSourceClientOffset() {
        return CL(this.store.getState().dragOffset)
    }
    getDifferenceFromInitialOffset() {
        return kL(this.store.getState().dragOffset)
    }
    constructor(t, n) {
        this.store = t, this.registry = n
    }
}
const _w = typeof global < "u" ? global : self,
    $C = _w.MutationObserver || _w.WebKitMutationObserver;

function BC(e) {
    return function() {
        const n = setTimeout(i, 0),
            r = setInterval(i, 50);

        function i() {
            clearTimeout(n), clearInterval(r), e()
        }
    }
}

function OL(e) {
    let t = 1;
    const n = new $C(e),
        r = document.createTextNode("");
    return n.observe(r, {
            characterData: !0
        }),
        function() {
            t = -t, r.data = t
        }
}
const TL = typeof $C == "function" ? OL : BC;
class IL {
    enqueueTask(t) {
        const {
            queue: n,
            requestFlush: r
        } = this;
        n.length || (r(), this.flushing = !0), n[n.length] = t
    }
    constructor() {
        this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
            const {
                queue: t
            } = this;
            for (; this.index < t.length;) {
                const n = this.index;
                if (this.index++, t[n].call(), this.index > this.capacity) {
                    for (let r = 0, i = t.length - this.index; r < i; r++) t[r] = t[r + this.index];
                    t.length -= this.index, this.index = 0
                }
            }
            t.length = 0, this.index = 0, this.flushing = !1
        }, this.registerPendingError = t => {
            this.pendingErrors.push(t), this.requestErrorThrow()
        }, this.requestFlush = TL(this.flush), this.requestErrorThrow = BC(() => {
            if (this.pendingErrors.length) throw this.pendingErrors.shift()
        })
    }
}
class RL {
    call() {
        try {
            this.task && this.task()
        } catch (t) {
            this.onError(t)
        } finally {
            this.task = null, this.release(this)
        }
    }
    constructor(t, n) {
        this.onError = t, this.release = n, this.task = null
    }
}
class PL {
    create(t) {
        const n = this.freeTasks,
            r = n.length ? n.pop() : new RL(this.onError, i => n[n.length] = i);
        return r.task = t, r
    }
    constructor(t) {
        this.onError = t, this.freeTasks = []
    }
}
const UC = new IL,
    AL = new PL(UC.registerPendingError);

function DL(e) {
    UC.enqueueTask(AL.create(e))
}
const jm = "dnd-core/ADD_SOURCE",
    Wm = "dnd-core/ADD_TARGET",
    Vm = "dnd-core/REMOVE_SOURCE",
    jf = "dnd-core/REMOVE_TARGET";

function NL(e) {
    return {
        type: jm,
        payload: {
            sourceId: e
        }
    }
}

function ML(e) {
    return {
        type: Wm,
        payload: {
            targetId: e
        }
    }
}

function LL(e) {
    return {
        type: Vm,
        payload: {
            sourceId: e
        }
    }
}

function FL(e) {
    return {
        type: jf,
        payload: {
            targetId: e
        }
    }
}

function zL(e) {
    _e(typeof e.canDrag == "function", "Expected canDrag to be a function."), _e(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), _e(typeof e.endDrag == "function", "Expected endDrag to be a function.")
}

function $L(e) {
    _e(typeof e.canDrop == "function", "Expected canDrop to be a function."), _e(typeof e.hover == "function", "Expected hover to be a function."), _e(typeof e.drop == "function", "Expected beginDrag to be a function.")
}

function cg(e, t) {
    if (t && Array.isArray(e)) {
        e.forEach(n => cg(n, !1));
        return
    }
    _e(typeof e == "string" || typeof e == "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.")
}
var rr;
(function(e) {
    e.SOURCE = "SOURCE", e.TARGET = "TARGET"
})(rr || (rr = {}));
let BL = 0;

function UL() {
    return BL++
}

function HL(e) {
    const t = UL().toString();
    switch (e) {
        case rr.SOURCE:
            return `S${t}`;
        case rr.TARGET:
            return `T${t}`;
        default:
            throw new Error(`Unknown Handler Role: ${e}`)
    }
}

function bw(e) {
    switch (e[0]) {
        case "S":
            return rr.SOURCE;
        case "T":
            return rr.TARGET;
        default:
            throw new Error(`Cannot parse handler ID: ${e}`)
    }
}

function Ow(e, t) {
    const n = e.entries();
    let r = !1;
    do {
        const {
            done: i,
            value: [, l]
        } = n.next();
        if (l === t) return !0;
        r = !!i
    } while (!r);
    return !1
}
class jL {
    addSource(t, n) {
        cg(t), zL(n);
        const r = this.addHandler(rr.SOURCE, t, n);
        return this.store.dispatch(NL(r)), r
    }
    addTarget(t, n) {
        cg(t, !0), $L(n);
        const r = this.addHandler(rr.TARGET, t, n);
        return this.store.dispatch(ML(r)), r
    }
    containsHandler(t) {
        return Ow(this.dragSources, t) || Ow(this.dropTargets, t)
    }
    getSource(t, n = !1) {
        return _e(this.isSourceId(t), "Expected a valid source ID."), n && t === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(t)
    }
    getTarget(t) {
        return _e(this.isTargetId(t), "Expected a valid target ID."), this.dropTargets.get(t)
    }
    getSourceType(t) {
        return _e(this.isSourceId(t), "Expected a valid source ID."), this.types.get(t)
    }
    getTargetType(t) {
        return _e(this.isTargetId(t), "Expected a valid target ID."), this.types.get(t)
    }
    isSourceId(t) {
        return bw(t) === rr.SOURCE
    }
    isTargetId(t) {
        return bw(t) === rr.TARGET
    }
    removeSource(t) {
        _e(this.getSource(t), "Expected an existing source."), this.store.dispatch(LL(t)), DL(() => {
            this.dragSources.delete(t), this.types.delete(t)
        })
    }
    removeTarget(t) {
        _e(this.getTarget(t), "Expected an existing target."), this.store.dispatch(FL(t)), this.dropTargets.delete(t), this.types.delete(t)
    }
    pinSource(t) {
        const n = this.getSource(t);
        _e(n, "Expected an existing source."), this.pinnedSourceId = t, this.pinnedSource = n
    }
    unpinSource() {
        _e(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null
    }
    addHandler(t, n, r) {
        const i = HL(t);
        return this.types.set(i, n), t === rr.SOURCE ? this.dragSources.set(i, r) : t === rr.TARGET && this.dropTargets.set(i, r), i
    }
    constructor(t) {
        this.types = new Map, this.dragSources = new Map, this.dropTargets = new Map, this.pinnedSourceId = null, this.pinnedSource = null, this.store = t
    }
}
const WL = (e, t) => e === t;

function VL(e, t) {
    return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y
}

function qL(e, t, n = WL) {
    if (e.length !== t.length) return !1;
    for (let r = 0; r < e.length; ++r)
        if (!n(e[r], t[r])) return !1;
    return !0
}

function GL(e = Yu, t) {
    switch (t.type) {
        case Bf:
            break;
        case jm:
        case Wm:
        case jf:
        case Vm:
            return Yu;
        case $f:
        case Um:
        case Hf:
        case Uf:
        default:
            return Hm
    }
    const {
        targetIds: n = [],
        prevTargetIds: r = []
    } = t.payload, i = XM(n, r);
    if (!(i.length > 0 || !qL(n, r))) return Yu;
    const s = r[r.length - 1],
        a = n[n.length - 1];
    return s !== a && (s && i.push(s), a && i.push(a)), i
}

function KL(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function QL(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {},
            r = Object.keys(n);
        typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
            return Object.getOwnPropertyDescriptor(n, i).enumerable
        }))), r.forEach(function(i) {
            KL(e, i, n[i])
        })
    }
    return e
}
const Tw = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null
};

function YL(e = Tw, t) {
    const {
        payload: n
    } = t;
    switch (t.type) {
        case Bm:
        case $f:
            return {
                initialSourceClientOffset: n.sourceClientOffset, initialClientOffset: n.clientOffset, clientOffset: n.clientOffset
            };
        case Bf:
            return VL(e.clientOffset, n.clientOffset) ? e : QL({}, e, {
                clientOffset: n.clientOffset
            });
        case Hf:
        case Uf:
            return Tw;
        default:
            return e
    }
}

function XL(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function al(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {},
            r = Object.keys(n);
        typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
            return Object.getOwnPropertyDescriptor(n, i).enumerable
        }))), r.forEach(function(i) {
            XL(e, i, n[i])
        })
    }
    return e
}
const ZL = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: !1,
    isSourcePublic: null
};

function JL(e = ZL, t) {
    const {
        payload: n
    } = t;
    switch (t.type) {
        case $f:
            return al({}, e, {
                itemType: n.itemType,
                item: n.item,
                sourceId: n.sourceId,
                isSourcePublic: n.isSourcePublic,
                dropResult: null,
                didDrop: !1
            });
        case Um:
            return al({}, e, {
                isSourcePublic: !0
            });
        case Bf:
            return al({}, e, {
                targetIds: n.targetIds
            });
        case jf:
            return e.targetIds.indexOf(n.targetId) === -1 ? e : al({}, e, {
                targetIds: YM(e.targetIds, n.targetId)
            });
        case Uf:
            return al({}, e, {
                dropResult: n.dropResult,
                didDrop: !0,
                targetIds: []
            });
        case Hf:
            return al({}, e, {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: !1,
                isSourcePublic: null,
                targetIds: []
            });
        default:
            return e
    }
}

function eF(e = 0, t) {
    switch (t.type) {
        case jm:
        case Wm:
            return e + 1;
        case Vm:
        case jf:
            return e - 1;
        default:
            return e
    }
}

function tF(e = 0) {
    return e + 1
}

function nF(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function rF(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {},
            r = Object.keys(n);
        typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
            return Object.getOwnPropertyDescriptor(n, i).enumerable
        }))), r.forEach(function(i) {
            nF(e, i, n[i])
        })
    }
    return e
}

function iF(e = {}, t) {
    return {
        dirtyHandlerIds: GL(e.dirtyHandlerIds, {
            type: t.type,
            payload: rF({}, t.payload, {
                prevTargetIds: QM(e, "dragOperation.targetIds", [])
            })
        }),
        dragOffset: YL(e.dragOffset, t),
        refCount: eF(e.refCount, t),
        dragOperation: JL(e.dragOperation, t),
        stateId: tF(e.stateId)
    }
}

function oF(e, t = void 0, n = {}, r = !1) {
    const i = lF(r),
        l = new bL(i, new jL(i)),
        s = new SL(i, l),
        a = e(s, t, n);
    return s.receiveBackend(a), s
}

function lF(e) {
    const t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
    return $m(iF, e && t && t({
        name: "dnd-core",
        instanceId: "dnd-core"
    }))
}

function uF(e, t) {
    if (e == null) return {};
    var n = sF(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++) r = l[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function sF(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, l;
    for (l = 0; l < r.length; l++) i = r[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
let Iw = 0;
const uc = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var aF = I.memo(function(t) {
    var {
        children: n
    } = t, r = uF(t, ["children"]);
    const [i, l] = cF(r);
    return I.useEffect(() => {
        if (l) {
            const s = HC();
            return ++Iw, () => {
                --Iw === 0 && (s[uc] = null)
            }
        }
    }, []), W(LC.Provider, {
        value: i,
        children: n
    })
});

function cF(e) {
    if ("manager" in e) return [{
        dragDropManager: e.manager
    }, !1];
    const t = fF(e.backend, e.context, e.options, e.debugMode),
        n = !e.context;
    return [t, n]
}

function fF(e, t = HC(), n, r) {
    const i = t;
    return i[uc] || (i[uc] = {
        dragDropManager: oF(e, t, n, r)
    }), i[uc]
}

function HC() {
    return typeof global < "u" ? global : window
}
var dF = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
        if (t.constructor !== n.constructor) return !1;
        var r, i, l;
        if (Array.isArray(t)) {
            if (r = t.length, r != n.length) return !1;
            for (i = r; i-- !== 0;)
                if (!e(t[i], n[i])) return !1;
            return !0
        }
        if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
        if (l = Object.keys(t), r = l.length, r !== Object.keys(n).length) return !1;
        for (i = r; i-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(n, l[i])) return !1;
        for (i = r; i-- !== 0;) {
            var s = l[i];
            if (!e(t[s], n[s])) return !1
        }
        return !0
    }
    return t !== t && n !== n
};
const pF = io(dF),
    $o = typeof window < "u" ? I.useLayoutEffect : I.useEffect;

function jC(e, t, n) {
    const [r, i] = I.useState(() => t(e)), l = I.useCallback(() => {
        const s = t(e);
        pF(r, s) || (i(s), n && n())
    }, [r, e, n]);
    return $o(l), [r, l]
}

function hF(e, t, n) {
    const [r, i] = jC(e, t, n);
    return $o(function() {
        const s = e.getHandlerId();
        if (s != null) return e.subscribeToStateChange(i, {
            handlerIds: [s]
        })
    }, [e, i]), r
}

function WC(e, t, n) {
    return hF(t, e || (() => ({})), () => n.reconnect())
}

function VC(e, t) {
    const n = [...t || []];
    return t == null && typeof e != "function" && n.push(e), I.useMemo(() => typeof e == "function" ? e() : e, n)
}

function gF(e) {
    return I.useMemo(() => e.hooks.dragSource(), [e])
}

function mF(e) {
    return I.useMemo(() => e.hooks.dragPreview(), [e])
}
let $p = !1,
    Bp = !1;
class vF {
    receiveHandlerId(t) {
        this.sourceId = t
    }
    getHandlerId() {
        return this.sourceId
    }
    canDrag() {
        _e(!$p, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
        try {
            return $p = !0, this.internalMonitor.canDragSource(this.sourceId)
        } finally {
            $p = !1
        }
    }
    isDragging() {
        if (!this.sourceId) return !1;
        _e(!Bp, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
        try {
            return Bp = !0, this.internalMonitor.isDraggingSource(this.sourceId)
        } finally {
            Bp = !1
        }
    }
    subscribeToStateChange(t, n) {
        return this.internalMonitor.subscribeToStateChange(t, n)
    }
    isDraggingSource(t) {
        return this.internalMonitor.isDraggingSource(t)
    }
    isOverTarget(t, n) {
        return this.internalMonitor.isOverTarget(t, n)
    }
    getTargetIds() {
        return this.internalMonitor.getTargetIds()
    }
    isSourcePublic() {
        return this.internalMonitor.isSourcePublic()
    }
    getSourceId() {
        return this.internalMonitor.getSourceId()
    }
    subscribeToOffsetChange(t) {
        return this.internalMonitor.subscribeToOffsetChange(t)
    }
    canDragSource(t) {
        return this.internalMonitor.canDragSource(t)
    }
    canDropOnTarget(t) {
        return this.internalMonitor.canDropOnTarget(t)
    }
    getItemType() {
        return this.internalMonitor.getItemType()
    }
    getItem() {
        return this.internalMonitor.getItem()
    }
    getDropResult() {
        return this.internalMonitor.getDropResult()
    }
    didDrop() {
        return this.internalMonitor.didDrop()
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset()
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset()
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset()
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset()
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset()
    }
    constructor(t) {
        this.sourceId = null, this.internalMonitor = t.getMonitor()
    }
}
let Up = !1;
class yF {
    receiveHandlerId(t) {
        this.targetId = t
    }
    getHandlerId() {
        return this.targetId
    }
    subscribeToStateChange(t, n) {
        return this.internalMonitor.subscribeToStateChange(t, n)
    }
    canDrop() {
        if (!this.targetId) return !1;
        _e(!Up, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
        try {
            return Up = !0, this.internalMonitor.canDropOnTarget(this.targetId)
        } finally {
            Up = !1
        }
    }
    isOver(t) {
        return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, t) : !1
    }
    getItemType() {
        return this.internalMonitor.getItemType()
    }
    getItem() {
        return this.internalMonitor.getItem()
    }
    getDropResult() {
        return this.internalMonitor.getDropResult()
    }
    didDrop() {
        return this.internalMonitor.didDrop()
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset()
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset()
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset()
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset()
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset()
    }
    constructor(t) {
        this.targetId = null, this.internalMonitor = t.getMonitor()
    }
}

function wF(e, t, n) {
    const r = n.getRegistry(),
        i = r.addTarget(e, t);
    return [i, () => r.removeTarget(i)]
}

function xF(e, t, n) {
    const r = n.getRegistry(),
        i = r.addSource(e, t);
    return [i, () => r.removeSource(i)]
}

function fg(e, t, n, r) {
    let i = n ? n.call(r, e, t) : void 0;
    if (i !== void 0) return !!i;
    if (e === t) return !0;
    if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
    const l = Object.keys(e),
        s = Object.keys(t);
    if (l.length !== s.length) return !1;
    const a = Object.prototype.hasOwnProperty.bind(t);
    for (let f = 0; f < l.length; f++) {
        const d = l[f];
        if (!a(d)) return !1;
        const p = e[d],
            g = t[d];
        if (i = n ? n.call(r, p, g, d) : void 0, i === !1 || i === void 0 && p !== g) return !1
    }
    return !0
}

function dg(e) {
    return e !== null && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function SF(e) {
    if (typeof e.type == "string") return;
    const t = e.type.displayName || e.type.name || "the component";
    throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)
}

function EF(e) {
    return (t = null, n = null) => {
        if (!I.isValidElement(t)) {
            const l = t;
            return e(l, n), l
        }
        const r = t;
        return SF(r), CF(r, n ? l => e(l, n) : e)
    }
}

function qC(e) {
    const t = {};
    return Object.keys(e).forEach(n => {
        const r = e[n];
        if (n.endsWith("Ref")) t[n] = e[n];
        else {
            const i = EF(r);
            t[n] = () => i
        }
    }), t
}

function Rw(e, t) {
    typeof e == "function" ? e(t) : e.current = t
}

function CF(e, t) {
    const n = e.ref;
    return _e(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? I.cloneElement(e, {
        ref: r => {
            Rw(n, r), Rw(t, r)
        }
    }) : I.cloneElement(e, {
        ref: t
    })
}
class kF {
    receiveHandlerId(t) {
        this.handlerId !== t && (this.handlerId = t, this.reconnect())
    }
    get connectTarget() {
        return this.dragSource
    }
    get dragSourceOptions() {
        return this.dragSourceOptionsInternal
    }
    set dragSourceOptions(t) {
        this.dragSourceOptionsInternal = t
    }
    get dragPreviewOptions() {
        return this.dragPreviewOptionsInternal
    }
    set dragPreviewOptions(t) {
        this.dragPreviewOptionsInternal = t
    }
    reconnect() {
        const t = this.reconnectDragSource();
        this.reconnectDragPreview(t)
    }
    reconnectDragSource() {
        const t = this.dragSource,
            n = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
        return n && this.disconnectDragSource(), this.handlerId ? t ? (n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = t, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, t, this.dragSourceOptions)), n) : (this.lastConnectedDragSource = t, n) : n
    }
    reconnectDragPreview(t = !1) {
        const n = this.dragPreview,
            r = t || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
        if (r && this.disconnectDragPreview(), !!this.handlerId) {
            if (!n) {
                this.lastConnectedDragPreview = n;
                return
            }
            r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = n, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, n, this.dragPreviewOptions))
        }
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId
    }
    didConnectedDragSourceChange() {
        return this.lastConnectedDragSource !== this.dragSource
    }
    didConnectedDragPreviewChange() {
        return this.lastConnectedDragPreview !== this.dragPreview
    }
    didDragSourceOptionsChange() {
        return !fg(this.lastConnectedDragSourceOptions, this.dragSourceOptions)
    }
    didDragPreviewOptionsChange() {
        return !fg(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions)
    }
    disconnectDragSource() {
        this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0)
    }
    disconnectDragPreview() {
        this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null)
    }
    get dragSource() {
        return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current
    }
    get dragPreview() {
        return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current
    }
    clearDragSource() {
        this.dragSourceNode = null, this.dragSourceRef = null
    }
    clearDragPreview() {
        this.dragPreviewNode = null, this.dragPreviewRef = null
    }
    constructor(t) {
        this.hooks = qC({
            dragSource: (n, r) => {
                this.clearDragSource(), this.dragSourceOptions = r || null, dg(n) ? this.dragSourceRef = n : this.dragSourceNode = n, this.reconnectDragSource()
            },
            dragPreview: (n, r) => {
                this.clearDragPreview(), this.dragPreviewOptions = r || null, dg(n) ? this.dragPreviewRef = n : this.dragPreviewNode = n, this.reconnectDragPreview()
            }
        }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = t
    }
}
class _F {
    get connectTarget() {
        return this.dropTarget
    }
    reconnect() {
        const t = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
        t && this.disconnectDropTarget();
        const n = this.dropTarget;
        if (this.handlerId) {
            if (!n) {
                this.lastConnectedDropTarget = n;
                return
            }
            t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = n, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, n, this.dropTargetOptions))
        }
    }
    receiveHandlerId(t) {
        t !== this.handlerId && (this.handlerId = t, this.reconnect())
    }
    get dropTargetOptions() {
        return this.dropTargetOptionsInternal
    }
    set dropTargetOptions(t) {
        this.dropTargetOptionsInternal = t
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId
    }
    didDropTargetChange() {
        return this.lastConnectedDropTarget !== this.dropTarget
    }
    didOptionsChange() {
        return !fg(this.lastConnectedDropTargetOptions, this.dropTargetOptions)
    }
    disconnectDropTarget() {
        this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0)
    }
    get dropTarget() {
        return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current
    }
    clearDropTarget() {
        this.dropTargetRef = null, this.dropTargetNode = null
    }
    constructor(t) {
        this.hooks = qC({
            dropTarget: (n, r) => {
                this.clearDropTarget(), this.dropTargetOptions = r, dg(n) ? this.dropTargetRef = n : this.dropTargetNode = n, this.reconnect()
            }
        }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = t
    }
}

function hi() {
    const {
        dragDropManager: e
    } = I.useContext(LC);
    return _e(e != null, "Expected drag drop context"), e
}

function bF(e, t) {
    const n = hi(),
        r = I.useMemo(() => new kF(n.getBackend()), [n]);
    return $o(() => (r.dragSourceOptions = e || null, r.reconnect(), () => r.disconnectDragSource()), [r, e]), $o(() => (r.dragPreviewOptions = t || null, r.reconnect(), () => r.disconnectDragPreview()), [r, t]), r
}

function OF() {
    const e = hi();
    return I.useMemo(() => new vF(e), [e])
}
class TF {
    beginDrag() {
        const t = this.spec,
            n = this.monitor;
        let r = null;
        return typeof t.item == "object" ? r = t.item : typeof t.item == "function" ? r = t.item(n) : r = {}, r ?? null
    }
    canDrag() {
        const t = this.spec,
            n = this.monitor;
        return typeof t.canDrag == "boolean" ? t.canDrag : typeof t.canDrag == "function" ? t.canDrag(n) : !0
    }
    isDragging(t, n) {
        const r = this.spec,
            i = this.monitor,
            {
                isDragging: l
            } = r;
        return l ? l(i) : n === t.getSourceId()
    }
    endDrag() {
        const t = this.spec,
            n = this.monitor,
            r = this.connector,
            {
                end: i
            } = t;
        i && i(n.getItem(), n), r.reconnect()
    }
    constructor(t, n, r) {
        this.spec = t, this.monitor = n, this.connector = r
    }
}

function IF(e, t, n) {
    const r = I.useMemo(() => new TF(e, t, n), [t, n]);
    return I.useEffect(() => {
        r.spec = e
    }, [e]), r
}

function RF(e) {
    return I.useMemo(() => {
        const t = e.type;
        return _e(t != null, "spec.type must be defined"), t
    }, [e])
}

function PF(e, t, n) {
    const r = hi(),
        i = IF(e, t, n),
        l = RF(e);
    $o(function() {
        if (l != null) {
            const [a, f] = xF(l, i, r);
            return t.receiveHandlerId(a), n.receiveHandlerId(a), f
        }
    }, [r, t, n, i, l])
}

function AF(e, t) {
    const n = VC(e, t);
    _e(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
    const r = OF(),
        i = bF(n.options, n.previewOptions);
    return PF(n, r, i), [WC(n.collect, r, i), gF(i), mF(i)]
}

function DF(e) {
    const n = hi().getMonitor(),
        [r, i] = jC(n, e);
    return I.useEffect(() => n.subscribeToOffsetChange(i)), I.useEffect(() => n.subscribeToStateChange(i)), r
}

function NF(e) {
    return I.useMemo(() => e.hooks.dropTarget(), [e])
}

function MF(e) {
    const t = hi(),
        n = I.useMemo(() => new _F(t.getBackend()), [t]);
    return $o(() => (n.dropTargetOptions = e || null, n.reconnect(), () => n.disconnectDropTarget()), [e]), n
}

function LF() {
    const e = hi();
    return I.useMemo(() => new yF(e), [e])
}

function FF(e) {
    const {
        accept: t
    } = e;
    return I.useMemo(() => (_e(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t]), [t])
}
class zF {
    canDrop() {
        const t = this.spec,
            n = this.monitor;
        return t.canDrop ? t.canDrop(n.getItem(), n) : !0
    }
    hover() {
        const t = this.spec,
            n = this.monitor;
        t.hover && t.hover(n.getItem(), n)
    }
    drop() {
        const t = this.spec,
            n = this.monitor;
        if (t.drop) return t.drop(n.getItem(), n)
    }
    constructor(t, n) {
        this.spec = t, this.monitor = n
    }
}

function $F(e, t) {
    const n = I.useMemo(() => new zF(e, t), [t]);
    return I.useEffect(() => {
        n.spec = e
    }, [e]), n
}

function BF(e, t, n) {
    const r = hi(),
        i = $F(e, t),
        l = FF(e);
    $o(function() {
        const [a, f] = wF(l, i, r);
        return t.receiveHandlerId(a), n.receiveHandlerId(a), f
    }, [r, t, i, n, l.map(s => s.toString()).join("|")])
}

function pg(e, t) {
    const n = VC(e, t),
        r = LF(),
        i = MF(n.options);
    return BF(n, r, i), [WC(n.collect, r, i), NF(i)]
}
var Gi;
(function(e) {
    e.mouse = "mouse", e.touch = "touch", e.keyboard = "keyboard"
})(Gi || (Gi = {}));
class UF {
    get delay() {
        var t;
        return (t = this.args.delay) !== null && t !== void 0 ? t : 0
    }
    get scrollAngleRanges() {
        return this.args.scrollAngleRanges
    }
    get getDropTargetElementsAtPoint() {
        return this.args.getDropTargetElementsAtPoint
    }
    get ignoreContextMenu() {
        var t;
        return (t = this.args.ignoreContextMenu) !== null && t !== void 0 ? t : !1
    }
    get enableHoverOutsideTarget() {
        var t;
        return (t = this.args.enableHoverOutsideTarget) !== null && t !== void 0 ? t : !1
    }
    get enableKeyboardEvents() {
        var t;
        return (t = this.args.enableKeyboardEvents) !== null && t !== void 0 ? t : !1
    }
    get enableMouseEvents() {
        var t;
        return (t = this.args.enableMouseEvents) !== null && t !== void 0 ? t : !1
    }
    get enableTouchEvents() {
        var t;
        return (t = this.args.enableTouchEvents) !== null && t !== void 0 ? t : !0
    }
    get touchSlop() {
        return this.args.touchSlop || 0
    }
    get delayTouchStart() {
        var t, n, r, i;
        return (i = (r = (t = this.args) === null || t === void 0 ? void 0 : t.delayTouchStart) !== null && r !== void 0 ? r : (n = this.args) === null || n === void 0 ? void 0 : n.delay) !== null && i !== void 0 ? i : 0
    }
    get delayMouseStart() {
        var t, n, r, i;
        return (i = (r = (t = this.args) === null || t === void 0 ? void 0 : t.delayMouseStart) !== null && r !== void 0 ? r : (n = this.args) === null || n === void 0 ? void 0 : n.delay) !== null && i !== void 0 ? i : 0
    }
    get window() {
        if (this.context && this.context.window) return this.context.window;
        if (typeof window < "u") return window
    }
    get document() {
        var t;
        if (!((t = this.context) === null || t === void 0) && t.document) return this.context.document;
        if (this.window) return this.window.document
    }
    get rootElement() {
        var t;
        return ((t = this.args) === null || t === void 0 ? void 0 : t.rootElement) || this.document
    }
    constructor(t, n) {
        this.args = t, this.context = n
    }
}

function HF(e, t, n, r) {
    return Math.sqrt(Math.pow(Math.abs(n - e), 2) + Math.pow(Math.abs(r - t), 2))
}

function jF(e, t, n, r, i) {
    if (!i) return !1;
    const l = Math.atan2(r - t, n - e) * 180 / Math.PI + 180;
    for (let s = 0; s < i.length; ++s) {
        const a = i[s];
        if (a && (a.start == null || l >= a.start) && (a.end == null || l <= a.end)) return !0
    }
    return !1
}
const WF = {
        Left: 1,
        Right: 2,
        Center: 4
    },
    VF = {
        Left: 0,
        Center: 1,
        Right: 2
    };

function Hp(e) {
    return e.button === void 0 || e.button === VF.Left
}

function qF(e) {
    return e.buttons === void 0 || (e.buttons & WF.Left) === 0
}

function GC(e) {
    return !!e.targetTouches
}
const GF = 1;

function KF(e) {
    const t = e.nodeType === GF ? e : e.parentElement;
    if (!t) return;
    const {
        top: n,
        left: r
    } = t.getBoundingClientRect();
    return {
        x: r,
        y: n
    }
}

function QF(e, t) {
    if (e.targetTouches.length === 1) return $c(e.targetTouches[0]);
    if (t && e.touches.length === 1 && e.touches[0].target === t.target) return $c(e.touches[0])
}

function $c(e, t) {
    return GC(e) ? QF(e, t) : {
        x: e.clientX,
        y: e.clientY
    }
}
const Pw = (() => {
        let e = !1;
        try {
            addEventListener("test", () => {}, Object.defineProperty({}, "passive", {
                get() {
                    return e = !0, !0
                }
            }))
        } catch {}
        return e
    })(),
    Au = {
        [Gi.mouse]: {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup",
            contextmenu: "contextmenu"
        },
        [Gi.touch]: {
            start: "touchstart",
            move: "touchmove",
            end: "touchend"
        },
        [Gi.keyboard]: {
            keydown: "keydown"
        }
    };
class Xu {
    profile() {
        var t;
        return {
            sourceNodes: this.sourceNodes.size,
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            targetNodes: this.targetNodes.size,
            dragOverTargetIds: ((t = this.dragOverTargetIds) === null || t === void 0 ? void 0 : t.length) || 0
        }
    }
    get document() {
        return this.options.document
    }
    setup() {
        const t = this.options.rootElement;
        t && (_e(!Xu.isSetUp, "Cannot have two Touch backends at the same time."), Xu.isSetUp = !0, this.addEventListener(t, "start", this.getTopMoveStartHandler()), this.addEventListener(t, "start", this.handleTopMoveStartCapture, !0), this.addEventListener(t, "move", this.handleTopMove), this.addEventListener(t, "move", this.handleTopMoveCapture, !0), this.addEventListener(t, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.addEventListener(t, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.addEventListener(t, "keydown", this.handleCancelOnEscape, !0))
    }
    teardown() {
        const t = this.options.rootElement;
        t && (Xu.isSetUp = !1, this._mouseClientOffset = {}, this.removeEventListener(t, "start", this.handleTopMoveStartCapture, !0), this.removeEventListener(t, "start", this.handleTopMoveStart), this.removeEventListener(t, "move", this.handleTopMoveCapture, !0), this.removeEventListener(t, "move", this.handleTopMove), this.removeEventListener(t, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.removeEventListener(t, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.removeEventListener(t, "keydown", this.handleCancelOnEscape, !0), this.uninstallSourceNodeRemovalObserver())
    }
    addEventListener(t, n, r, i = !1) {
        const l = Pw ? {
            capture: i,
            passive: !1
        } : i;
        this.listenerTypes.forEach(function(s) {
            const a = Au[s][n];
            a && t.addEventListener(a, r, l)
        })
    }
    removeEventListener(t, n, r, i = !1) {
        const l = Pw ? {
            capture: i,
            passive: !1
        } : i;
        this.listenerTypes.forEach(function(s) {
            const a = Au[s][n];
            a && t.removeEventListener(a, r, l)
        })
    }
    connectDragSource(t, n) {
        const r = this.handleMoveStart.bind(this, t);
        return this.sourceNodes.set(t, n), this.addEventListener(n, "start", r), () => {
            this.sourceNodes.delete(t), this.removeEventListener(n, "start", r)
        }
    }
    connectDragPreview(t, n, r) {
        return this.sourcePreviewNodeOptions.set(t, r), this.sourcePreviewNodes.set(t, n), () => {
            this.sourcePreviewNodes.delete(t), this.sourcePreviewNodeOptions.delete(t)
        }
    }
    connectDropTarget(t, n) {
        const r = this.options.rootElement;
        if (!this.document || !r) return () => {};
        const i = l => {
            if (!this.document || !r || !this.monitor.isDragging()) return;
            let s;
            switch (l.type) {
                case Au.mouse.move:
                    s = {
                        x: l.clientX,
                        y: l.clientY
                    };
                    break;
                case Au.touch.move:
                    var a, f;
                    s = {
                        x: ((a = l.touches[0]) === null || a === void 0 ? void 0 : a.clientX) || 0,
                        y: ((f = l.touches[0]) === null || f === void 0 ? void 0 : f.clientY) || 0
                    };
                    break
            }
            const d = s != null ? this.document.elementFromPoint(s.x, s.y) : void 0,
                p = d && n.contains(d);
            if (d === n || p) return this.handleMove(l, t)
        };
        return this.addEventListener(this.document.body, "move", i), this.targetNodes.set(t, n), () => {
            this.document && (this.targetNodes.delete(t), this.removeEventListener(this.document.body, "move", i))
        }
    }
    getTopMoveStartHandler() {
        return !this.options.delayTouchStart && !this.options.delayMouseStart ? this.handleTopMoveStart : this.handleTopMoveStartDelay
    }
    installSourceNodeRemovalObserver(t) {
        this.uninstallSourceNodeRemovalObserver(), this.draggedSourceNode = t, this.draggedSourceNodeRemovalObserver = new MutationObserver(() => {
            t && !t.parentElement && (this.resurrectSourceNode(), this.uninstallSourceNodeRemovalObserver())
        }), !(!t || !t.parentElement) && this.draggedSourceNodeRemovalObserver.observe(t.parentElement, {
            childList: !0
        })
    }
    resurrectSourceNode() {
        this.document && this.draggedSourceNode && (this.draggedSourceNode.style.display = "none", this.draggedSourceNode.removeAttribute("data-reactid"), this.document.body.appendChild(this.draggedSourceNode))
    }
    uninstallSourceNodeRemovalObserver() {
        this.draggedSourceNodeRemovalObserver && this.draggedSourceNodeRemovalObserver.disconnect(), this.draggedSourceNodeRemovalObserver = void 0, this.draggedSourceNode = void 0
    }
    constructor(t, n, r) {
        this.getSourceClientOffset = i => {
            const l = this.sourceNodes.get(i);
            return l && KF(l)
        }, this.handleTopMoveStartCapture = i => {
            Hp(i) && (this.moveStartSourceIds = [])
        }, this.handleMoveStart = i => {
            Array.isArray(this.moveStartSourceIds) && this.moveStartSourceIds.unshift(i)
        }, this.handleTopMoveStart = i => {
            if (!Hp(i)) return;
            const l = $c(i);
            l && (GC(i) && (this.lastTargetTouchFallback = i.targetTouches[0]), this._mouseClientOffset = l), this.waitingForDelay = !1
        }, this.handleTopMoveStartDelay = i => {
            if (!Hp(i)) return;
            const l = i.type === Au.touch.start ? this.options.delayTouchStart : this.options.delayMouseStart;
            this.timeout = setTimeout(this.handleTopMoveStart.bind(this, i), l), this.waitingForDelay = !0
        }, this.handleTopMoveCapture = () => {
            this.dragOverTargetIds = []
        }, this.handleMove = (i, l) => {
            this.dragOverTargetIds && this.dragOverTargetIds.unshift(l)
        }, this.handleTopMove = i => {
            if (this.timeout && clearTimeout(this.timeout), !this.document || this.waitingForDelay) return;
            const {
                moveStartSourceIds: l,
                dragOverTargetIds: s
            } = this, a = this.options.enableHoverOutsideTarget, f = $c(i, this.lastTargetTouchFallback);
            if (!f) return;
            if (this._isScrolling || !this.monitor.isDragging() && jF(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, f.x, f.y, this.options.scrollAngleRanges)) {
                this._isScrolling = !0;
                return
            }
            if (!this.monitor.isDragging() && this._mouseClientOffset.hasOwnProperty("x") && l && HF(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, f.x, f.y) > (this.options.touchSlop ? this.options.touchSlop : 0) && (this.moveStartSourceIds = void 0, this.actions.beginDrag(l, {
                    clientOffset: this._mouseClientOffset,
                    getSourceClientOffset: this.getSourceClientOffset,
                    publishSource: !1
                })), !this.monitor.isDragging()) return;
            const d = this.sourceNodes.get(this.monitor.getSourceId());
            this.installSourceNodeRemovalObserver(d), this.actions.publishDragSource(), i.cancelable && i.preventDefault();
            const p = (s || []).map(E => this.targetNodes.get(E)).filter(E => !!E),
                g = this.options.getDropTargetElementsAtPoint ? this.options.getDropTargetElementsAtPoint(f.x, f.y, p) : this.document.elementsFromPoint(f.x, f.y),
                v = [];
            for (const E in g) {
                if (!g.hasOwnProperty(E)) continue;
                let S = g[E];
                for (S != null && v.push(S); S;) S = S.parentElement, S && v.indexOf(S) === -1 && v.push(S)
            }
            const m = v.filter(E => p.indexOf(E) > -1).map(E => this._getDropTargetId(E)).filter(E => !!E).filter((E, S, A) => A.indexOf(E) === S);
            if (a)
                for (const E in this.targetNodes) {
                    const S = this.targetNodes.get(E);
                    if (d && S && S.contains(d) && m.indexOf(E) === -1) {
                        m.unshift(E);
                        break
                    }
                }
            m.reverse(), this.actions.hover(m, {
                clientOffset: f
            })
        }, this._getDropTargetId = i => {
            const l = this.targetNodes.keys();
            let s = l.next();
            for (; s.done === !1;) {
                const a = s.value;
                if (i === this.targetNodes.get(a)) return a;
                s = l.next()
            }
        }, this.handleTopMoveEndCapture = i => {
            if (this._isScrolling = !1, this.lastTargetTouchFallback = void 0, !!qF(i)) {
                if (!this.monitor.isDragging() || this.monitor.didDrop()) {
                    this.moveStartSourceIds = void 0;
                    return
                }
                i.cancelable && i.preventDefault(), this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.drop(), this.actions.endDrag()
            }
        }, this.handleCancelOnEscape = i => {
            i.key === "Escape" && this.monitor.isDragging() && (this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.endDrag())
        }, this.options = new UF(r, n), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.sourceNodes = new Map, this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.targetNodes = new Map, this.listenerTypes = [], this._mouseClientOffset = {}, this._isScrolling = !1, this.options.enableMouseEvents && this.listenerTypes.push(Gi.mouse), this.options.enableTouchEvents && this.listenerTypes.push(Gi.touch), this.options.enableKeyboardEvents && this.listenerTypes.push(Gi.keyboard)
    }
}
const YF = function(t, n = {}, r = {}) {
    return new Xu(t, n, r)
};

function Er(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(i) {
        return "'" + i + "'"
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
}

function to(e) {
    return !!e && !!e[ft]
}

function di(e) {
    var t;
    return !!e && (function(n) {
        if (!n || typeof n != "object") return !1;
        var r = Object.getPrototypeOf(n);
        if (r === null) return !0;
        var i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
        return i === Object || typeof i == "function" && Function.toString.call(i) === i3
    }(e) || Array.isArray(e) || !!e[zw] || !!(!((t = e.constructor) === null || t === void 0) && t[zw]) || qm(e) || Gm(e))
}

function Bo(e, t, n) {
    n === void 0 && (n = !1), nu(e) === 0 ? (n ? Object.keys : Dl)(e).forEach(function(r) {
        n && typeof r == "symbol" || t(r, e[r], e)
    }) : e.forEach(function(r, i) {
        return t(i, r, e)
    })
}

function nu(e) {
    var t = e[ft];
    return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : qm(e) ? 2 : Gm(e) ? 3 : 0
}

function Al(e, t) {
    return nu(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function XF(e, t) {
    return nu(e) === 2 ? e.get(t) : e[t]
}

function KC(e, t, n) {
    var r = nu(e);
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n
}

function QC(e, t) {
    return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}

function qm(e) {
    return n3 && e instanceof Map
}

function Gm(e) {
    return r3 && e instanceof Set
}

function Eo(e) {
    return e.o || e.t
}

function Km(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = XC(e);
    delete t[ft];
    for (var n = Dl(t), r = 0; r < n.length; r++) {
        var i = n[r],
            l = t[i];
        l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (t[i] = {
            configurable: !0,
            writable: !0,
            enumerable: l.enumerable,
            value: e[i]
        })
    }
    return Object.create(Object.getPrototypeOf(e), t)
}

function Qm(e, t) {
    return t === void 0 && (t = !1), Ym(e) || to(e) || !di(e) || (nu(e) > 1 && (e.set = e.add = e.clear = e.delete = ZF), Object.freeze(e), t && Bo(e, function(n, r) {
        return Qm(r, !0)
    }, !0)), e
}

function ZF() {
    Er(2)
}

function Ym(e) {
    return e == null || typeof e != "object" || Object.isFrozen(e)
}

function Br(e) {
    var t = yg[e];
    return t || Er(18, e), t
}

function JF(e, t) {
    yg[e] || (yg[e] = t)
}

function hg() {
    return Ss
}

function jp(e, t) {
    t && (Br("Patches"), e.u = [], e.s = [], e.v = t)
}

function Bc(e) {
    gg(e), e.p.forEach(e3), e.p = null
}

function gg(e) {
    e === Ss && (Ss = e.l)
}

function Aw(e) {
    return Ss = {
        p: [],
        l: Ss,
        h: e,
        m: !0,
        _: 0
    }
}

function e3(e) {
    var t = e[ft];
    t.i === 0 || t.i === 1 ? t.j() : t.g = !0
}

function Wp(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        r = e !== void 0 && e !== n;
    return t.h.O || Br("ES5").S(t, e, r), r ? (n[ft].P && (Bc(t), Er(4)), di(e) && (e = Uc(t, e), t.l || Hc(t, e)), t.u && Br("Patches").M(n[ft].t, e, t.u, t.s)) : e = Uc(t, n, []), Bc(t), t.u && t.v(t.u, t.s), e !== YC ? e : void 0
}

function Uc(e, t, n) {
    if (Ym(t)) return t;
    var r = t[ft];
    if (!r) return Bo(t, function(a, f) {
        return Dw(e, r, t, a, f, n)
    }, !0), t;
    if (r.A !== e) return t;
    if (!r.P) return Hc(e, r.t, !0), r.t;
    if (!r.I) {
        r.I = !0, r.A._--;
        var i = r.i === 4 || r.i === 5 ? r.o = Km(r.k) : r.o,
            l = i,
            s = !1;
        r.i === 3 && (l = new Set(i), i.clear(), s = !0), Bo(l, function(a, f) {
            return Dw(e, r, i, a, f, n, s)
        }), Hc(e, i, !1), n && e.u && Br("Patches").N(r, n, e.u, e.s)
    }
    return r.o
}

function Dw(e, t, n, r, i, l, s) {
    if (to(i)) {
        var a = Uc(e, i, l && t && t.i !== 3 && !Al(t.R, r) ? l.concat(r) : void 0);
        if (KC(n, r, a), !to(a)) return;
        e.m = !1
    } else s && n.add(i);
    if (di(i) && !Ym(i)) {
        if (!e.h.D && e._ < 1) return;
        Uc(e, i), t && t.A.l || Hc(e, i)
    }
}

function Hc(e, t, n) {
    n === void 0 && (n = !1), !e.l && e.h.D && e.m && Qm(t, n)
}

function Vp(e, t) {
    var n = e[ft];
    return (n ? Eo(n) : e)[t]
}

function Nw(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n;) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n)
        }
}

function Mi(e) {
    e.P || (e.P = !0, e.l && Mi(e.l))
}

function qp(e) {
    e.o || (e.o = Km(e.t))
}

function mg(e, t, n) {
    var r = qm(t) ? Br("MapSet").F(t, n) : Gm(t) ? Br("MapSet").T(t, n) : e.O ? function(i, l) {
        var s = Array.isArray(i),
            a = {
                i: s ? 1 : 0,
                A: l ? l.A : hg(),
                P: !1,
                I: !1,
                R: {},
                l,
                t: i,
                k: null,
                o: null,
                j: null,
                C: !1
            },
            f = a,
            d = Es;
        s && (f = [a], d = zu);
        var p = Proxy.revocable(f, d),
            g = p.revoke,
            v = p.proxy;
        return a.k = v, a.j = g, v
    }(t, n) : Br("ES5").J(t, n);
    return (n ? n.A : hg()).p.push(r), r
}

function vg(e) {
    return to(e) || Er(22, e),
        function t(n) {
            if (!di(n)) return n;
            var r, i = n[ft],
                l = nu(n);
            if (i) {
                if (!i.P && (i.i < 4 || !Br("ES5").K(i))) return i.t;
                i.I = !0, r = Mw(n, l), i.I = !1
            } else r = Mw(n, l);
            return Bo(r, function(s, a) {
                i && XF(i.t, s) === a || KC(r, s, t(a))
            }), l === 3 ? new Set(r) : r
        }(e)
}

function Mw(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e)
    }
    return Km(e)
}

function t3() {
    function e(l, s) {
        var a = i[l];
        return a ? a.enumerable = s : i[l] = a = {
            configurable: !0,
            enumerable: s,
            get: function() {
                var f = this[ft];
                return Es.get(f, l)
            },
            set: function(f) {
                var d = this[ft];
                Es.set(d, l, f)
            }
        }, a
    }

    function t(l) {
        for (var s = l.length - 1; s >= 0; s--) {
            var a = l[s][ft];
            if (!a.P) switch (a.i) {
                case 5:
                    r(a) && Mi(a);
                    break;
                case 4:
                    n(a) && Mi(a)
            }
        }
    }

    function n(l) {
        for (var s = l.t, a = l.k, f = Dl(a), d = f.length - 1; d >= 0; d--) {
            var p = f[d];
            if (p !== ft) {
                var g = s[p];
                if (g === void 0 && !Al(s, p)) return !0;
                var v = a[p],
                    m = v && v[ft];
                if (m ? m.t !== g : !QC(v, g)) return !0
            }
        }
        var E = !!s[ft];
        return f.length !== Dl(s).length + (E ? 0 : 1)
    }

    function r(l) {
        var s = l.k;
        if (s.length !== l.t.length) return !0;
        var a = Object.getOwnPropertyDescriptor(s, s.length - 1);
        if (a && !a.get) return !0;
        for (var f = 0; f < s.length; f++)
            if (!s.hasOwnProperty(f)) return !0;
        return !1
    }
    var i = {};
    JF("ES5", {
        J: function(l, s) {
            var a = Array.isArray(l),
                f = function(p, g) {
                    if (p) {
                        for (var v = Array(g.length), m = 0; m < g.length; m++) Object.defineProperty(v, "" + m, e(m, !0));
                        return v
                    }
                    var E = XC(g);
                    delete E[ft];
                    for (var S = Dl(E), A = 0; A < S.length; A++) {
                        var y = S[A];
                        E[y] = e(y, p || !!E[y].enumerable)
                    }
                    return Object.create(Object.getPrototypeOf(g), E)
                }(a, l),
                d = {
                    i: a ? 5 : 4,
                    A: s ? s.A : hg(),
                    P: !1,
                    I: !1,
                    R: {},
                    l: s,
                    t: l,
                    k: f,
                    o: null,
                    g: !1,
                    C: !1
                };
            return Object.defineProperty(f, ft, {
                value: d,
                writable: !0
            }), f
        },
        S: function(l, s, a) {
            a ? to(s) && s[ft].A === l && t(l.p) : (l.u && function f(d) {
                if (d && typeof d == "object") {
                    var p = d[ft];
                    if (p) {
                        var g = p.t,
                            v = p.k,
                            m = p.R,
                            E = p.i;
                        if (E === 4) Bo(v, function(k) {
                            k !== ft && (g[k] !== void 0 || Al(g, k) ? m[k] || f(v[k]) : (m[k] = !0, Mi(p)))
                        }), Bo(g, function(k) {
                            v[k] !== void 0 || Al(v, k) || (m[k] = !1, Mi(p))
                        });
                        else if (E === 5) {
                            if (r(p) && (Mi(p), m.length = !0), v.length < g.length)
                                for (var S = v.length; S < g.length; S++) m[S] = !1;
                            else
                                for (var A = g.length; A < v.length; A++) m[A] = !0;
                            for (var y = Math.min(v.length, g.length), x = 0; x < y; x++) v.hasOwnProperty(x) || (m[x] = !0), m[x] === void 0 && f(v[x])
                        }
                    }
                }
            }(l.p[0]), t(l.p))
        },
        K: function(l) {
            return l.i === 4 ? n(l) : r(l)
        }
    })
}
var Lw, Ss, Xm = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
    n3 = typeof Map < "u",
    r3 = typeof Set < "u",
    Fw = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
    YC = Xm ? Symbol.for("immer-nothing") : ((Lw = {})["immer-nothing"] = !0, Lw),
    zw = Xm ? Symbol.for("immer-draftable") : "__$immer_draftable",
    ft = Xm ? Symbol.for("immer-state") : "__$immer_state",
    i3 = "" + Object.prototype.constructor,
    Dl = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : Object.getOwnPropertyNames,
    XC = Object.getOwnPropertyDescriptors || function(e) {
        var t = {};
        return Dl(e).forEach(function(n) {
            t[n] = Object.getOwnPropertyDescriptor(e, n)
        }), t
    },
    yg = {},
    Es = {
        get: function(e, t) {
            if (t === ft) return e;
            var n = Eo(e);
            if (!Al(n, t)) return function(i, l, s) {
                var a, f = Nw(l, s);
                return f ? "value" in f ? f.value : (a = f.get) === null || a === void 0 ? void 0 : a.call(i.k) : void 0
            }(e, n, t);
            var r = n[t];
            return e.I || !di(r) ? r : r === Vp(e.t, t) ? (qp(e), e.o[t] = mg(e.A.h, r, e)) : r
        },
        has: function(e, t) {
            return t in Eo(e)
        },
        ownKeys: function(e) {
            return Reflect.ownKeys(Eo(e))
        },
        set: function(e, t, n) {
            var r = Nw(Eo(e), t);
            if (r?.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
                var i = Vp(Eo(e), t),
                    l = i?.[ft];
                if (l && l.t === n) return e.o[t] = n, e.R[t] = !1, !0;
                if (QC(n, i) && (n !== void 0 || Al(e.t, t))) return !0;
                qp(e), Mi(e)
            }
            return e.o[t] === n && (n !== void 0 || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0
        },
        deleteProperty: function(e, t) {
            return Vp(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, qp(e), Mi(e)) : delete e.R[t], e.o && delete e.o[t], !0
        },
        getOwnPropertyDescriptor: function(e, t) {
            var n = Eo(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
            return r && {
                writable: !0,
                configurable: e.i !== 1 || t !== "length",
                enumerable: r.enumerable,
                value: n[t]
            }
        },
        defineProperty: function() {
            Er(11)
        },
        getPrototypeOf: function(e) {
            return Object.getPrototypeOf(e.t)
        },
        setPrototypeOf: function() {
            Er(12)
        }
    },
    zu = {};
Bo(Es, function(e, t) {
    zu[e] = function() {
        return arguments[0] = arguments[0][0], t.apply(this, arguments)
    }
}), zu.deleteProperty = function(e, t) {
    return zu.set.call(this, e, t, void 0)
}, zu.set = function(e, t, n) {
    return Es.set.call(this, e[0], t, n, e[0])
};
var o3 = function() {
        function e(n) {
            var r = this;
            this.O = Fw, this.D = !0, this.produce = function(i, l, s) {
                if (typeof i == "function" && typeof l != "function") {
                    var a = l;
                    l = i;
                    var f = r;
                    return function(S) {
                        var A = this;
                        S === void 0 && (S = a);
                        for (var y = arguments.length, x = Array(y > 1 ? y - 1 : 0), k = 1; k < y; k++) x[k - 1] = arguments[k];
                        return f.produce(S, function(P) {
                            var N;
                            return (N = l).call.apply(N, [A, P].concat(x))
                        })
                    }
                }
                var d;
                if (typeof l != "function" && Er(6), s !== void 0 && typeof s != "function" && Er(7), di(i)) {
                    var p = Aw(r),
                        g = mg(r, i, void 0),
                        v = !0;
                    try {
                        d = l(g), v = !1
                    } finally {
                        v ? Bc(p) : gg(p)
                    }
                    return typeof Promise < "u" && d instanceof Promise ? d.then(function(S) {
                        return jp(p, s), Wp(S, p)
                    }, function(S) {
                        throw Bc(p), S
                    }) : (jp(p, s), Wp(d, p))
                }
                if (!i || typeof i != "object") {
                    if ((d = l(i)) === void 0 && (d = i), d === YC && (d = void 0), r.D && Qm(d, !0), s) {
                        var m = [],
                            E = [];
                        Br("Patches").M(i, d, m, E), s(m, E)
                    }
                    return d
                }
                Er(21, i)
            }, this.produceWithPatches = function(i, l) {
                if (typeof i == "function") return function(d) {
                    for (var p = arguments.length, g = Array(p > 1 ? p - 1 : 0), v = 1; v < p; v++) g[v - 1] = arguments[v];
                    return r.produceWithPatches(d, function(m) {
                        return i.apply(void 0, [m].concat(g))
                    })
                };
                var s, a, f = r.produce(i, l, function(d, p) {
                    s = d, a = p
                });
                return typeof Promise < "u" && f instanceof Promise ? f.then(function(d) {
                    return [d, s, a]
                }) : [f, s, a]
            }, typeof n?.useProxies == "boolean" && this.setUseProxies(n.useProxies), typeof n?.autoFreeze == "boolean" && this.setAutoFreeze(n.autoFreeze)
        }
        var t = e.prototype;
        return t.createDraft = function(n) {
            di(n) || Er(8), to(n) && (n = vg(n));
            var r = Aw(this),
                i = mg(this, n, void 0);
            return i[ft].C = !0, gg(r), i
        }, t.finishDraft = function(n, r) {
            var i = n && n[ft],
                l = i.A;
            return jp(l, r), Wp(void 0, l)
        }, t.setAutoFreeze = function(n) {
            this.D = n
        }, t.setUseProxies = function(n) {
            n && !Fw && Er(20), this.O = n
        }, t.applyPatches = function(n, r) {
            var i;
            for (i = r.length - 1; i >= 0; i--) {
                var l = r[i];
                if (l.path.length === 0 && l.op === "replace") {
                    n = l.value;
                    break
                }
            }
            i > -1 && (r = r.slice(i + 1));
            var s = Br("Patches").$;
            return to(n) ? s(n, r) : this.produce(n, function(a) {
                return s(a, r)
            })
        }, e
    }(),
    Bn = new o3,
    ZC = Bn.produce;
Bn.produceWithPatches.bind(Bn);
Bn.setAutoFreeze.bind(Bn);
Bn.setUseProxies.bind(Bn);
Bn.applyPatches.bind(Bn);
Bn.createDraft.bind(Bn);
Bn.finishDraft.bind(Bn);

function JC(e) {
    var t = function(r) {
        var i = r.dispatch,
            l = r.getState;
        return function(s) {
            return function(a) {
                return typeof a == "function" ? a(i, l, e) : s(a)
            }
        }
    };
    return t
}
var ek = JC();
ek.withExtraArgument = JC;
const $w = ek;
var tk = globalThis && globalThis.__extends || function() {
        var e = function(t, n) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(r, i) {
                r.__proto__ = i
            } || function(r, i) {
                for (var l in i) Object.prototype.hasOwnProperty.call(i, l) && (r[l] = i[l])
            }, e(t, n)
        };
        return function(t, n) {
            if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            e(t, n);

            function r() {
                this.constructor = t
            }
            t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }(),
    l3 = globalThis && globalThis.__generator || function(e, t) {
        var n = {
                label: 0,
                sent: function() {
                    if (l[0] & 1) throw l[1];
                    return l[1]
                },
                trys: [],
                ops: []
            },
            r, i, l, s;
        return s = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function a(d) {
            return function(p) {
                return f([d, p])
            }
        }

        function f(d) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; n;) try {
                if (r = 1, i && (l = d[0] & 2 ? i.return : d[0] ? i.throw || ((l = i.return) && l.call(i), 0) : i.next) && !(l = l.call(i, d[1])).done) return l;
                switch (i = 0, l && (d = [d[0] & 2, l.value]), d[0]) {
                    case 0:
                    case 1:
                        l = d;
                        break;
                    case 4:
                        return n.label++, {
                            value: d[1],
                            done: !1
                        };
                    case 5:
                        n.label++, i = d[1], d = [0];
                        continue;
                    case 7:
                        d = n.ops.pop(), n.trys.pop();
                        continue;
                    default:
                        if (l = n.trys, !(l = l.length > 0 && l[l.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                            n = 0;
                            continue
                        }
                        if (d[0] === 3 && (!l || d[1] > l[0] && d[1] < l[3])) {
                            n.label = d[1];
                            break
                        }
                        if (d[0] === 6 && n.label < l[1]) {
                            n.label = l[1], l = d;
                            break
                        }
                        if (l && n.label < l[2]) {
                            n.label = l[2], n.ops.push(d);
                            break
                        }
                        l[2] && n.ops.pop(), n.trys.pop();
                        continue
                }
                d = t.call(e, n)
            } catch (p) {
                d = [6, p], i = 0
            } finally {
                r = l = 0
            }
            if (d[0] & 5) throw d[1];
            return {
                value: d[0] ? d[1] : void 0,
                done: !0
            }
        }
    },
    ql = globalThis && globalThis.__spreadArray || function(e, t) {
        for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
        return e
    },
    u3 = Object.defineProperty,
    s3 = Object.defineProperties,
    a3 = Object.getOwnPropertyDescriptors,
    Bw = Object.getOwnPropertySymbols,
    c3 = Object.prototype.hasOwnProperty,
    f3 = Object.prototype.propertyIsEnumerable,
    Uw = function(e, t, n) {
        return t in e ? u3(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
    },
    Ki = function(e, t) {
        for (var n in t || (t = {})) c3.call(t, n) && Uw(e, n, t[n]);
        if (Bw)
            for (var r = 0, i = Bw(t); r < i.length; r++) {
                var n = i[r];
                f3.call(t, n) && Uw(e, n, t[n])
            }
        return e
    },
    Gp = function(e, t) {
        return s3(e, a3(t))
    },
    d3 = function(e, t, n) {
        return new Promise(function(r, i) {
            var l = function(f) {
                    try {
                        a(n.next(f))
                    } catch (d) {
                        i(d)
                    }
                },
                s = function(f) {
                    try {
                        a(n.throw(f))
                    } catch (d) {
                        i(d)
                    }
                },
                a = function(f) {
                    return f.done ? r(f.value) : Promise.resolve(f.value).then(l, s)
                };
            a((n = n.apply(e, t)).next())
        })
    },
    p3 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? zc : zc.apply(null, arguments)
    };

function h3(e) {
    if (typeof e != "object" || e === null) return !1;
    var t = Object.getPrototypeOf(e);
    if (t === null) return !0;
    for (var n = t; Object.getPrototypeOf(n) !== null;) n = Object.getPrototypeOf(n);
    return t === n
}
var g3 = function(e) {
    return e && typeof e.match == "function"
};

function Qi(e, t) {
    function n() {
        for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
        if (t) {
            var l = t.apply(void 0, r);
            if (!l) throw new Error("prepareAction did not return an object");
            return Ki(Ki({
                type: e,
                payload: l.payload
            }, "meta" in l && {
                meta: l.meta
            }), "error" in l && {
                error: l.error
            })
        }
        return {
            type: e,
            payload: r[0]
        }
    }
    return n.toString = function() {
        return "" + e
    }, n.type = e, n.match = function(r) {
        return r.type === e
    }, n
}
var m3 = function(e) {
        tk(t, e);

        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            var i = e.apply(this, n) || this;
            return Object.setPrototypeOf(i, t.prototype), i
        }
        return Object.defineProperty(t, Symbol.species, {
            get: function() {
                return t
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.concat = function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return e.prototype.concat.apply(this, n)
        }, t.prototype.prepend = function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return n.length === 1 && Array.isArray(n[0]) ? new(t.bind.apply(t, ql([void 0], n[0].concat(this)))) : new(t.bind.apply(t, ql([void 0], n.concat(this))))
        }, t
    }(Array),
    v3 = function(e) {
        tk(t, e);

        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            var i = e.apply(this, n) || this;
            return Object.setPrototypeOf(i, t.prototype), i
        }
        return Object.defineProperty(t, Symbol.species, {
            get: function() {
                return t
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.concat = function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return e.prototype.concat.apply(this, n)
        }, t.prototype.prepend = function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return n.length === 1 && Array.isArray(n[0]) ? new(t.bind.apply(t, ql([void 0], n[0].concat(this)))) : new(t.bind.apply(t, ql([void 0], n.concat(this))))
        }, t
    }(Array);

function wg(e) {
    return di(e) ? ZC(e, function() {}) : e
}

function y3(e) {
    return typeof e == "boolean"
}

function w3() {
    return function(t) {
        return x3(t)
    }
}

function x3(e) {
    e === void 0 && (e = {});
    var t = e.thunk,
        n = t === void 0 ? !0 : t;
    e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
    var r = new m3;
    return n && (y3(n) ? r.push($w) : r.push($w.withExtraArgument(n.extraArgument))), r
}
var S3 = !0;

function E3(e) {
    var t = w3(),
        n = e || {},
        r = n.reducer,
        i = r === void 0 ? void 0 : r,
        l = n.middleware,
        s = l === void 0 ? t() : l,
        a = n.devTools,
        f = a === void 0 ? !0 : a,
        d = n.preloadedState,
        p = d === void 0 ? void 0 : d,
        g = n.enhancers,
        v = g === void 0 ? void 0 : g,
        m;
    if (typeof i == "function") m = i;
    else if (h3(i)) m = qM(i);
    else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    var E = s;
    typeof E == "function" && (E = E(t));
    var S = GM.apply(void 0, E),
        A = zc;
    f && (A = p3(Ki({
        trace: !S3
    }, typeof f == "object" && f)));
    var y = new v3(S),
        x = y;
    Array.isArray(v) ? x = ql([S], v) : typeof v == "function" && (x = v(y));
    var k = A.apply(void 0, x);
    return $m(m, p, k)
}

function nk(e) {
    var t = {},
        n = [],
        r, i = {
            addCase: function(l, s) {
                var a = typeof l == "string" ? l : l.type;
                if (!a) throw new Error("`builder.addCase` cannot be called with an empty action type");
                if (a in t) throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
                return t[a] = s, i
            },
            addMatcher: function(l, s) {
                return n.push({
                    matcher: l,
                    reducer: s
                }), i
            },
            addDefaultCase: function(l) {
                return r = l, i
            }
        };
    return e(i), [t, n, r]
}

function C3(e) {
    return typeof e == "function"
}

function k3(e, t, n, r) {
    n === void 0 && (n = []);
    var i = typeof t == "function" ? nk(t) : [t, n, r],
        l = i[0],
        s = i[1],
        a = i[2],
        f;
    if (C3(e)) f = function() {
        return wg(e())
    };
    else {
        var d = wg(e);
        f = function() {
            return d
        }
    }

    function p(g, v) {
        g === void 0 && (g = f());
        var m = ql([l[v.type]], s.filter(function(E) {
            var S = E.matcher;
            return S(v)
        }).map(function(E) {
            var S = E.reducer;
            return S
        }));
        return m.filter(function(E) {
            return !!E
        }).length === 0 && (m = [a]), m.reduce(function(E, S) {
            if (S)
                if (to(E)) {
                    var A = E,
                        y = S(A, v);
                    return y === void 0 ? E : y
                } else {
                    if (di(E)) return ZC(E, function(x) {
                        return S(x, v)
                    });
                    var y = S(E, v);
                    if (y === void 0) {
                        if (E === null) return E;
                        throw Error("A case reducer on a non-draftable value must not return undefined")
                    }
                    return y
                } return E
        }, g)
    }
    return p.getInitialState = f, p
}

function _3(e, t) {
    return e + "/" + t
}

function Zm(e) {
    var t = e.name;
    if (!t) throw new Error("`name` is a required option for createSlice");
    typeof process < "u";
    var n = typeof e.initialState == "function" ? e.initialState : wg(e.initialState),
        r = e.reducers || {},
        i = Object.keys(r),
        l = {},
        s = {},
        a = {};
    i.forEach(function(p) {
        var g = r[p],
            v = _3(t, p),
            m, E;
        "reducer" in g ? (m = g.reducer, E = g.prepare) : m = g, l[p] = m, s[v] = m, a[p] = E ? Qi(v, E) : Qi(v)
    });

    function f() {
        var p = typeof e.extraReducers == "function" ? nk(e.extraReducers) : [e.extraReducers],
            g = p[0],
            v = g === void 0 ? {} : g,
            m = p[1],
            E = m === void 0 ? [] : m,
            S = p[2],
            A = S === void 0 ? void 0 : S,
            y = Ki(Ki({}, v), s);
        return k3(n, function(x) {
            for (var k in y) x.addCase(k, y[k]);
            for (var P = 0, N = E; P < N.length; P++) {
                var T = N[P];
                x.addMatcher(T.matcher, T.reducer)
            }
            A && x.addDefaultCase(A)
        })
    }
    var d;
    return {
        name: t,
        reducer: function(p, g) {
            return d || (d = f()), d(p, g)
        },
        actions: a,
        caseReducers: l,
        getInitialState: function() {
            return d || (d = f()), d.getInitialState()
        }
    }
}
var b3 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
    O3 = function(e) {
        e === void 0 && (e = 21);
        for (var t = "", n = e; n--;) t += b3[Math.random() * 64 | 0];
        return t
    },
    T3 = ["name", "message", "stack", "code"],
    Kp = function() {
        function e(t, n) {
            this.payload = t, this.meta = n
        }
        return e
    }(),
    Hw = function() {
        function e(t, n) {
            this.payload = t, this.meta = n
        }
        return e
    }(),
    I3 = function(e) {
        if (typeof e == "object" && e !== null) {
            for (var t = {}, n = 0, r = T3; n < r.length; n++) {
                var i = r[n];
                typeof e[i] == "string" && (t[i] = e[i])
            }
            return t
        }
        return {
            message: String(e)
        }
    },
    Jm = function() {
        function e(t, n, r) {
            var i = Qi(t + "/fulfilled", function(d, p, g, v) {
                    return {
                        payload: d,
                        meta: Gp(Ki({}, v || {}), {
                            arg: g,
                            requestId: p,
                            requestStatus: "fulfilled"
                        })
                    }
                }),
                l = Qi(t + "/pending", function(d, p, g) {
                    return {
                        payload: void 0,
                        meta: Gp(Ki({}, g || {}), {
                            arg: p,
                            requestId: d,
                            requestStatus: "pending"
                        })
                    }
                }),
                s = Qi(t + "/rejected", function(d, p, g, v, m) {
                    return {
                        payload: v,
                        error: (r && r.serializeError || I3)(d || "Rejected"),
                        meta: Gp(Ki({}, m || {}), {
                            arg: g,
                            requestId: p,
                            rejectedWithValue: !!v,
                            requestStatus: "rejected",
                            aborted: d?.name === "AbortError",
                            condition: d?.name === "ConditionError"
                        })
                    }
                }),
                a = typeof AbortController < "u" ? AbortController : function() {
                    function d() {
                        this.signal = {
                            aborted: !1,
                            addEventListener: function() {},
                            dispatchEvent: function() {
                                return !1
                            },
                            onabort: function() {},
                            removeEventListener: function() {},
                            reason: void 0,
                            throwIfAborted: function() {}
                        }
                    }
                    return d.prototype.abort = function() {}, d
                }();

            function f(d) {
                return function(p, g, v) {
                    var m = r?.idGenerator ? r.idGenerator(d) : O3(),
                        E = new a,
                        S;

                    function A(x) {
                        S = x, E.abort()
                    }
                    var y = function() {
                        return d3(this, null, function() {
                            var x, k, P, N, T, F, z;
                            return l3(this, function(q) {
                                switch (q.label) {
                                    case 0:
                                        return q.trys.push([0, 4, , 5]), N = (x = r?.condition) == null ? void 0 : x.call(r, d, {
                                            getState: g,
                                            extra: v
                                        }), P3(N) ? [4, N] : [3, 2];
                                    case 1:
                                        N = q.sent(), q.label = 2;
                                    case 2:
                                        if (N === !1 || E.signal.aborted) throw {
                                            name: "ConditionError",
                                            message: "Aborted due to condition callback returning false."
                                        };
                                        return T = new Promise(function(Q, $) {
                                            return E.signal.addEventListener("abort", function() {
                                                return $({
                                                    name: "AbortError",
                                                    message: S || "Aborted"
                                                })
                                            })
                                        }), p(l(m, d, (k = r?.getPendingMeta) == null ? void 0 : k.call(r, {
                                            requestId: m,
                                            arg: d
                                        }, {
                                            getState: g,
                                            extra: v
                                        }))), [4, Promise.race([T, Promise.resolve(n(d, {
                                            dispatch: p,
                                            getState: g,
                                            extra: v,
                                            requestId: m,
                                            signal: E.signal,
                                            abort: A,
                                            rejectWithValue: function(Q, $) {
                                                return new Kp(Q, $)
                                            },
                                            fulfillWithValue: function(Q, $) {
                                                return new Hw(Q, $)
                                            }
                                        })).then(function(Q) {
                                            if (Q instanceof Kp) throw Q;
                                            return Q instanceof Hw ? i(Q.payload, m, d, Q.meta) : i(Q, m, d)
                                        })])];
                                    case 3:
                                        return P = q.sent(), [3, 5];
                                    case 4:
                                        return F = q.sent(), P = F instanceof Kp ? s(null, m, d, F.payload, F.meta) : s(F, m, d), [3, 5];
                                    case 5:
                                        return z = r && !r.dispatchConditionRejection && s.match(P) && P.meta.condition, z || p(P), [2, P]
                                }
                            })
                        })
                    }();
                    return Object.assign(y, {
                        abort: A,
                        requestId: m,
                        arg: d,
                        unwrap: function() {
                            return y.then(R3)
                        }
                    })
                }
            }
            return Object.assign(f, {
                pending: l,
                rejected: s,
                fulfilled: i,
                typePrefix: t
            })
        }
        return e.withTypes = function() {
            return e
        }, e
    }();

function R3(e) {
    if (e.meta && e.meta.rejectedWithValue) throw e.payload;
    if (e.error) throw e.error;
    return e.payload
}

function P3(e) {
    return e !== null && typeof e == "object" && typeof e.then == "function"
}
var A3 = function(e, t) {
    return g3(e) ? e.match(t) : e(t)
};

function ev() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return function(n) {
        return e.some(function(r) {
            return A3(r, n)
        })
    }
}

function tv(e, t) {
    if (!e || !e.meta) return !1;
    var n = typeof e.meta.requestId == "string",
        r = t.indexOf(e.meta.requestStatus) > -1;
    return n && r
}

function nv(e) {
    return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0]
}

function rk() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return e.length === 0 ? function(n) {
        return tv(n, ["pending"])
    } : nv(e) ? function(n) {
        var r = e.map(function(l) {
                return l.pending
            }),
            i = ev.apply(void 0, r);
        return i(n)
    } : rk()(e[0])
}

function ik() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return e.length === 0 ? function(n) {
        return tv(n, ["rejected"])
    } : nv(e) ? function(n) {
        var r = e.map(function(l) {
                return l.rejected
            }),
            i = ev.apply(void 0, r);
        return i(n)
    } : ik()(e[0])
}

function ok() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return e.length === 0 ? function(n) {
        return tv(n, ["fulfilled"])
    } : nv(e) ? function(n) {
        var r = e.map(function(l) {
                return l.fulfilled
            }),
            i = ev.apply(void 0, r);
        return i(n)
    } : ok()(e[0])
}
var rv = "listenerMiddleware";
Qi(rv + "/add");
Qi(rv + "/removeAll");
Qi(rv + "/remove");
var jw;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
t3();
var Yt = (e => (e.PLAYER = "player", e.SHOP = "shop", e.CONTAINER = "container", e.CRAFTING = "crafting", e))(Yt || {}),
    jc = {
        exports: {}
    };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
jc.exports;
(function(e, t) {
    (function() {
        var n, r = "4.17.21",
            i = 200,
            l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            s = "Expected a function",
            a = "Invalid `variable` option passed into `_.template`",
            f = "__lodash_hash_undefined__",
            d = 500,
            p = "__lodash_placeholder__",
            g = 1,
            v = 2,
            m = 4,
            E = 1,
            S = 2,
            A = 1,
            y = 2,
            x = 4,
            k = 8,
            P = 16,
            N = 32,
            T = 64,
            F = 128,
            z = 256,
            q = 512,
            Q = 30,
            $ = "...",
            G = 800,
            B = 16,
            U = 1,
            Z = 2,
            ue = 3,
            oe = 1 / 0,
            j = 9007199254740991,
            J = 17976931348623157e292,
            b = 0 / 0,
            ne = 4294967295,
            ae = ne - 1,
            O = ne >>> 1,
            de = [
                ["ary", F],
                ["bind", A],
                ["bindKey", y],
                ["curry", k],
                ["curryRight", P],
                ["flip", q],
                ["partial", N],
                ["partialRight", T],
                ["rearg", z]
            ],
            Re = "[object Arguments]",
            me = "[object Array]",
            Ae = "[object AsyncFunction]",
            Se = "[object Boolean]",
            Le = "[object Date]",
            Te = "[object DOMException]",
            Be = "[object Error]",
            Fe = "[object Function]",
            Ge = "[object GeneratorFunction]",
            yt = "[object Map]",
            Wn = "[object Number]",
            he = "[object Null]",
            at = "[object Object]",
            Mt = "[object Promise]",
            Cn = "[object Proxy]",
            kn = "[object RegExp]",
            Ht = "[object Set]",
            Or = "[object String]",
            Wr = "[object Symbol]",
            Go = "[object Undefined]",
            Tr = "[object WeakMap]",
            Vn = "[object WeakSet]",
            V = "[object ArrayBuffer]",
            re = "[object DataView]",
            pe = "[object Float32Array]",
            Ue = "[object Float64Array]",
            He = "[object Int8Array]",
            Zt = "[object Int16Array]",
            qn = "[object Int32Array]",
            _n = "[object Uint8Array]",
            Vr = "[object Uint8ClampedArray]",
            qr = "[object Uint16Array]",
            it = "[object Uint32Array]",
            uu = /\b__p \+= '';/g,
            pr = /\b(__p \+=) '' \+/g,
            W_ = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            Nv = /&(?:amp|lt|gt|quot|#39);/g,
            Mv = /[&<>"']/g,
            V_ = RegExp(Nv.source),
            q_ = RegExp(Mv.source),
            G_ = /<%-([\s\S]+?)%>/g,
            K_ = /<%([\s\S]+?)%>/g,
            Lv = /<%=([\s\S]+?)%>/g,
            Q_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Y_ = /^\w*$/,
            X_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Jf = /[\\^$.*+?()[\]{}|]/g,
            Z_ = RegExp(Jf.source),
            ed = /^\s+/,
            J_ = /\s/,
            eb = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            tb = /\{\n\/\* \[wrapped with (.+)\] \*/,
            nb = /,? & /,
            rb = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            ib = /[()=,{}\[\]\/\s]/,
            ob = /\\(\\)?/g,
            lb = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            Fv = /\w*$/,
            ub = /^[-+]0x[0-9a-f]+$/i,
            sb = /^0b[01]+$/i,
            ab = /^\[object .+?Constructor\]$/,
            cb = /^0o[0-7]+$/i,
            fb = /^(?:0|[1-9]\d*)$/,
            db = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            Ls = /($^)/,
            pb = /['\n\r\u2028\u2029\\]/g,
            Fs = "\\ud800-\\udfff",
            hb = "\\u0300-\\u036f",
            gb = "\\ufe20-\\ufe2f",
            mb = "\\u20d0-\\u20ff",
            zv = hb + gb + mb,
            $v = "\\u2700-\\u27bf",
            Bv = "a-z\\xdf-\\xf6\\xf8-\\xff",
            vb = "\\xac\\xb1\\xd7\\xf7",
            yb = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
            wb = "\\u2000-\\u206f",
            xb = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            Uv = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            Hv = "\\ufe0e\\ufe0f",
            jv = vb + yb + wb + xb,
            td = "['’]",
            Sb = "[" + Fs + "]",
            Wv = "[" + jv + "]",
            zs = "[" + zv + "]",
            Vv = "\\d+",
            Eb = "[" + $v + "]",
            qv = "[" + Bv + "]",
            Gv = "[^" + Fs + jv + Vv + $v + Bv + Uv + "]",
            nd = "\\ud83c[\\udffb-\\udfff]",
            Cb = "(?:" + zs + "|" + nd + ")",
            Kv = "[^" + Fs + "]",
            rd = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            id = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            Ko = "[" + Uv + "]",
            Qv = "\\u200d",
            Yv = "(?:" + qv + "|" + Gv + ")",
            kb = "(?:" + Ko + "|" + Gv + ")",
            Xv = "(?:" + td + "(?:d|ll|m|re|s|t|ve))?",
            Zv = "(?:" + td + "(?:D|LL|M|RE|S|T|VE))?",
            Jv = Cb + "?",
            ey = "[" + Hv + "]?",
            _b = "(?:" + Qv + "(?:" + [Kv, rd, id].join("|") + ")" + ey + Jv + ")*",
            bb = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            Ob = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            ty = ey + Jv + _b,
            Tb = "(?:" + [Eb, rd, id].join("|") + ")" + ty,
            Ib = "(?:" + [Kv + zs + "?", zs, rd, id, Sb].join("|") + ")",
            Rb = RegExp(td, "g"),
            Pb = RegExp(zs, "g"),
            od = RegExp(nd + "(?=" + nd + ")|" + Ib + ty, "g"),
            Ab = RegExp([Ko + "?" + qv + "+" + Xv + "(?=" + [Wv, Ko, "$"].join("|") + ")", kb + "+" + Zv + "(?=" + [Wv, Ko + Yv, "$"].join("|") + ")", Ko + "?" + Yv + "+" + Xv, Ko + "+" + Zv, Ob, bb, Vv, Tb].join("|"), "g"),
            Db = RegExp("[" + Qv + Fs + zv + Hv + "]"),
            Nb = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            Mb = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            Lb = -1,
            ot = {};
        ot[pe] = ot[Ue] = ot[He] = ot[Zt] = ot[qn] = ot[_n] = ot[Vr] = ot[qr] = ot[it] = !0, ot[Re] = ot[me] = ot[V] = ot[Se] = ot[re] = ot[Le] = ot[Be] = ot[Fe] = ot[yt] = ot[Wn] = ot[at] = ot[kn] = ot[Ht] = ot[Or] = ot[Tr] = !1;
        var et = {};
        et[Re] = et[me] = et[V] = et[re] = et[Se] = et[Le] = et[pe] = et[Ue] = et[He] = et[Zt] = et[qn] = et[yt] = et[Wn] = et[at] = et[kn] = et[Ht] = et[Or] = et[Wr] = et[_n] = et[Vr] = et[qr] = et[it] = !0, et[Be] = et[Fe] = et[Tr] = !1;
        var Fb = {
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s"
            },
            zb = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            $b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            },
            Bb = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            Ub = parseFloat,
            Hb = parseInt,
            ny = typeof Cu == "object" && Cu && Cu.Object === Object && Cu,
            jb = typeof self == "object" && self && self.Object === Object && self,
            Lt = ny || jb || Function("return this")(),
            ld = t && !t.nodeType && t,
            co = ld && !0 && e && !e.nodeType && e,
            ry = co && co.exports === ld,
            ud = ry && ny.process,
            Gn = function() {
                try {
                    var M = co && co.require && co.require("util").types;
                    return M || ud && ud.binding && ud.binding("util")
                } catch {}
            }(),
            iy = Gn && Gn.isArrayBuffer,
            oy = Gn && Gn.isDate,
            ly = Gn && Gn.isMap,
            uy = Gn && Gn.isRegExp,
            sy = Gn && Gn.isSet,
            ay = Gn && Gn.isTypedArray;

        function bn(M, K, H) {
            switch (H.length) {
                case 0:
                    return M.call(K);
                case 1:
                    return M.call(K, H[0]);
                case 2:
                    return M.call(K, H[0], H[1]);
                case 3:
                    return M.call(K, H[0], H[1], H[2])
            }
            return M.apply(K, H)
        }

        function Wb(M, K, H, se) {
            for (var Ee = -1, je = M == null ? 0 : M.length; ++Ee < je;) {
                var bt = M[Ee];
                K(se, bt, H(bt), M)
            }
            return se
        }

        function Kn(M, K) {
            for (var H = -1, se = M == null ? 0 : M.length; ++H < se && K(M[H], H, M) !== !1;);
            return M
        }

        function Vb(M, K) {
            for (var H = M == null ? 0 : M.length; H-- && K(M[H], H, M) !== !1;);
            return M
        }

        function cy(M, K) {
            for (var H = -1, se = M == null ? 0 : M.length; ++H < se;)
                if (!K(M[H], H, M)) return !1;
            return !0
        }

        function yi(M, K) {
            for (var H = -1, se = M == null ? 0 : M.length, Ee = 0, je = []; ++H < se;) {
                var bt = M[H];
                K(bt, H, M) && (je[Ee++] = bt)
            }
            return je
        }

        function $s(M, K) {
            var H = M == null ? 0 : M.length;
            return !!H && Qo(M, K, 0) > -1
        }

        function sd(M, K, H) {
            for (var se = -1, Ee = M == null ? 0 : M.length; ++se < Ee;)
                if (H(K, M[se])) return !0;
            return !1
        }

        function ct(M, K) {
            for (var H = -1, se = M == null ? 0 : M.length, Ee = Array(se); ++H < se;) Ee[H] = K(M[H], H, M);
            return Ee
        }

        function wi(M, K) {
            for (var H = -1, se = K.length, Ee = M.length; ++H < se;) M[Ee + H] = K[H];
            return M
        }

        function ad(M, K, H, se) {
            var Ee = -1,
                je = M == null ? 0 : M.length;
            for (se && je && (H = M[++Ee]); ++Ee < je;) H = K(H, M[Ee], Ee, M);
            return H
        }

        function qb(M, K, H, se) {
            var Ee = M == null ? 0 : M.length;
            for (se && Ee && (H = M[--Ee]); Ee--;) H = K(H, M[Ee], Ee, M);
            return H
        }

        function cd(M, K) {
            for (var H = -1, se = M == null ? 0 : M.length; ++H < se;)
                if (K(M[H], H, M)) return !0;
            return !1
        }
        var Gb = fd("length");

        function Kb(M) {
            return M.split("")
        }

        function Qb(M) {
            return M.match(rb) || []
        }

        function fy(M, K, H) {
            var se;
            return H(M, function(Ee, je, bt) {
                if (K(Ee, je, bt)) return se = je, !1
            }), se
        }

        function Bs(M, K, H, se) {
            for (var Ee = M.length, je = H + (se ? 1 : -1); se ? je-- : ++je < Ee;)
                if (K(M[je], je, M)) return je;
            return -1
        }

        function Qo(M, K, H) {
            return K === K ? uO(M, K, H) : Bs(M, dy, H)
        }

        function Yb(M, K, H, se) {
            for (var Ee = H - 1, je = M.length; ++Ee < je;)
                if (se(M[Ee], K)) return Ee;
            return -1
        }

        function dy(M) {
            return M !== M
        }

        function py(M, K) {
            var H = M == null ? 0 : M.length;
            return H ? pd(M, K) / H : b
        }

        function fd(M) {
            return function(K) {
                return K == null ? n : K[M]
            }
        }

        function dd(M) {
            return function(K) {
                return M == null ? n : M[K]
            }
        }

        function hy(M, K, H, se, Ee) {
            return Ee(M, function(je, bt, Je) {
                H = se ? (se = !1, je) : K(H, je, bt, Je)
            }), H
        }

        function Xb(M, K) {
            var H = M.length;
            for (M.sort(K); H--;) M[H] = M[H].value;
            return M
        }

        function pd(M, K) {
            for (var H, se = -1, Ee = M.length; ++se < Ee;) {
                var je = K(M[se]);
                je !== n && (H = H === n ? je : H + je)
            }
            return H
        }

        function hd(M, K) {
            for (var H = -1, se = Array(M); ++H < M;) se[H] = K(H);
            return se
        }

        function Zb(M, K) {
            return ct(K, function(H) {
                return [H, M[H]]
            })
        }

        function gy(M) {
            return M && M.slice(0, wy(M) + 1).replace(ed, "")
        }

        function On(M) {
            return function(K) {
                return M(K)
            }
        }

        function gd(M, K) {
            return ct(K, function(H) {
                return M[H]
            })
        }

        function su(M, K) {
            return M.has(K)
        }

        function my(M, K) {
            for (var H = -1, se = M.length; ++H < se && Qo(K, M[H], 0) > -1;);
            return H
        }

        function vy(M, K) {
            for (var H = M.length; H-- && Qo(K, M[H], 0) > -1;);
            return H
        }

        function Jb(M, K) {
            for (var H = M.length, se = 0; H--;) M[H] === K && ++se;
            return se
        }
        var eO = dd(Fb),
            tO = dd(zb);

        function nO(M) {
            return "\\" + Bb[M]
        }

        function rO(M, K) {
            return M == null ? n : M[K]
        }

        function Yo(M) {
            return Db.test(M)
        }

        function iO(M) {
            return Nb.test(M)
        }

        function oO(M) {
            for (var K, H = []; !(K = M.next()).done;) H.push(K.value);
            return H
        }

        function md(M) {
            var K = -1,
                H = Array(M.size);
            return M.forEach(function(se, Ee) {
                H[++K] = [Ee, se]
            }), H
        }

        function yy(M, K) {
            return function(H) {
                return M(K(H))
            }
        }

        function xi(M, K) {
            for (var H = -1, se = M.length, Ee = 0, je = []; ++H < se;) {
                var bt = M[H];
                (bt === K || bt === p) && (M[H] = p, je[Ee++] = H)
            }
            return je
        }

        function Us(M) {
            var K = -1,
                H = Array(M.size);
            return M.forEach(function(se) {
                H[++K] = se
            }), H
        }

        function lO(M) {
            var K = -1,
                H = Array(M.size);
            return M.forEach(function(se) {
                H[++K] = [se, se]
            }), H
        }

        function uO(M, K, H) {
            for (var se = H - 1, Ee = M.length; ++se < Ee;)
                if (M[se] === K) return se;
            return -1
        }

        function sO(M, K, H) {
            for (var se = H + 1; se--;)
                if (M[se] === K) return se;
            return se
        }

        function Xo(M) {
            return Yo(M) ? cO(M) : Gb(M)
        }

        function hr(M) {
            return Yo(M) ? fO(M) : Kb(M)
        }

        function wy(M) {
            for (var K = M.length; K-- && J_.test(M.charAt(K)););
            return K
        }
        var aO = dd($b);

        function cO(M) {
            for (var K = od.lastIndex = 0; od.test(M);) ++K;
            return K
        }

        function fO(M) {
            return M.match(od) || []
        }

        function dO(M) {
            return M.match(Ab) || []
        }
        var pO = function M(K) {
                K = K == null ? Lt : Zo.defaults(Lt.Object(), K, Zo.pick(Lt, Mb));
                var H = K.Array,
                    se = K.Date,
                    Ee = K.Error,
                    je = K.Function,
                    bt = K.Math,
                    Je = K.Object,
                    vd = K.RegExp,
                    hO = K.String,
                    Qn = K.TypeError,
                    Hs = H.prototype,
                    gO = je.prototype,
                    Jo = Je.prototype,
                    js = K["__core-js_shared__"],
                    Ws = gO.toString,
                    Ke = Jo.hasOwnProperty,
                    mO = 0,
                    xy = function() {
                        var o = /[^.]+$/.exec(js && js.keys && js.keys.IE_PROTO || "");
                        return o ? "Symbol(src)_1." + o : ""
                    }(),
                    Vs = Jo.toString,
                    vO = Ws.call(Je),
                    yO = Lt._,
                    wO = vd("^" + Ws.call(Ke).replace(Jf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    qs = ry ? K.Buffer : n,
                    Si = K.Symbol,
                    Gs = K.Uint8Array,
                    Sy = qs ? qs.allocUnsafe : n,
                    Ks = yy(Je.getPrototypeOf, Je),
                    Ey = Je.create,
                    Cy = Jo.propertyIsEnumerable,
                    Qs = Hs.splice,
                    ky = Si ? Si.isConcatSpreadable : n,
                    au = Si ? Si.iterator : n,
                    fo = Si ? Si.toStringTag : n,
                    Ys = function() {
                        try {
                            var o = vo(Je, "defineProperty");
                            return o({}, "", {}), o
                        } catch {}
                    }(),
                    xO = K.clearTimeout !== Lt.clearTimeout && K.clearTimeout,
                    SO = se && se.now !== Lt.Date.now && se.now,
                    EO = K.setTimeout !== Lt.setTimeout && K.setTimeout,
                    Xs = bt.ceil,
                    Zs = bt.floor,
                    yd = Je.getOwnPropertySymbols,
                    CO = qs ? qs.isBuffer : n,
                    _y = K.isFinite,
                    kO = Hs.join,
                    _O = yy(Je.keys, Je),
                    Ot = bt.max,
                    jt = bt.min,
                    bO = se.now,
                    OO = K.parseInt,
                    by = bt.random,
                    TO = Hs.reverse,
                    wd = vo(K, "DataView"),
                    cu = vo(K, "Map"),
                    xd = vo(K, "Promise"),
                    el = vo(K, "Set"),
                    fu = vo(K, "WeakMap"),
                    du = vo(Je, "create"),
                    Js = fu && new fu,
                    tl = {},
                    IO = yo(wd),
                    RO = yo(cu),
                    PO = yo(xd),
                    AO = yo(el),
                    DO = yo(fu),
                    ea = Si ? Si.prototype : n,
                    pu = ea ? ea.valueOf : n,
                    Oy = ea ? ea.toString : n;

                function C(o) {
                    if (wt(o) && !ke(o) && !(o instanceof Me)) {
                        if (o instanceof Yn) return o;
                        if (Ke.call(o, "__wrapped__")) return T0(o)
                    }
                    return new Yn(o)
                }
                var nl = function() {
                    function o() {}
                    return function(u) {
                        if (!ht(u)) return {};
                        if (Ey) return Ey(u);
                        o.prototype = u;
                        var c = new o;
                        return o.prototype = n, c
                    }
                }();

                function ta() {}

                function Yn(o, u) {
                    this.__wrapped__ = o, this.__actions__ = [], this.__chain__ = !!u, this.__index__ = 0, this.__values__ = n
                }
                C.templateSettings = {
                    escape: G_,
                    evaluate: K_,
                    interpolate: Lv,
                    variable: "",
                    imports: {
                        _: C
                    }
                }, C.prototype = ta.prototype, C.prototype.constructor = C, Yn.prototype = nl(ta.prototype), Yn.prototype.constructor = Yn;

                function Me(o) {
                    this.__wrapped__ = o, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ne, this.__views__ = []
                }

                function NO() {
                    var o = new Me(this.__wrapped__);
                    return o.__actions__ = sn(this.__actions__), o.__dir__ = this.__dir__, o.__filtered__ = this.__filtered__, o.__iteratees__ = sn(this.__iteratees__), o.__takeCount__ = this.__takeCount__, o.__views__ = sn(this.__views__), o
                }

                function MO() {
                    if (this.__filtered__) {
                        var o = new Me(this);
                        o.__dir__ = -1, o.__filtered__ = !0
                    } else o = this.clone(), o.__dir__ *= -1;
                    return o
                }

                function LO() {
                    var o = this.__wrapped__.value(),
                        u = this.__dir__,
                        c = ke(o),
                        h = u < 0,
                        w = c ? o.length : 0,
                        _ = KT(0, w, this.__views__),
                        R = _.start,
                        D = _.end,
                        L = D - R,
                        Y = h ? D : R - 1,
                        X = this.__iteratees__,
                        ee = X.length,
                        le = 0,
                        fe = jt(L, this.__takeCount__);
                    if (!c || !h && w == L && fe == L) return Xy(o, this.__actions__);
                    var ve = [];
                    e: for (; L-- && le < fe;) {
                        Y += u;
                        for (var Ie = -1, ye = o[Y]; ++Ie < ee;) {
                            var De = X[Ie],
                                ze = De.iteratee,
                                Rn = De.type,
                                tn = ze(ye);
                            if (Rn == Z) ye = tn;
                            else if (!tn) {
                                if (Rn == U) continue e;
                                break e
                            }
                        }
                        ve[le++] = ye
                    }
                    return ve
                }
                Me.prototype = nl(ta.prototype), Me.prototype.constructor = Me;

                function po(o) {
                    var u = -1,
                        c = o == null ? 0 : o.length;
                    for (this.clear(); ++u < c;) {
                        var h = o[u];
                        this.set(h[0], h[1])
                    }
                }

                function FO() {
                    this.__data__ = du ? du(null) : {}, this.size = 0
                }

                function zO(o) {
                    var u = this.has(o) && delete this.__data__[o];
                    return this.size -= u ? 1 : 0, u
                }

                function $O(o) {
                    var u = this.__data__;
                    if (du) {
                        var c = u[o];
                        return c === f ? n : c
                    }
                    return Ke.call(u, o) ? u[o] : n
                }

                function BO(o) {
                    var u = this.__data__;
                    return du ? u[o] !== n : Ke.call(u, o)
                }

                function UO(o, u) {
                    var c = this.__data__;
                    return this.size += this.has(o) ? 0 : 1, c[o] = du && u === n ? f : u, this
                }
                po.prototype.clear = FO, po.prototype.delete = zO, po.prototype.get = $O, po.prototype.has = BO, po.prototype.set = UO;

                function Gr(o) {
                    var u = -1,
                        c = o == null ? 0 : o.length;
                    for (this.clear(); ++u < c;) {
                        var h = o[u];
                        this.set(h[0], h[1])
                    }
                }

                function HO() {
                    this.__data__ = [], this.size = 0
                }

                function jO(o) {
                    var u = this.__data__,
                        c = na(u, o);
                    if (c < 0) return !1;
                    var h = u.length - 1;
                    return c == h ? u.pop() : Qs.call(u, c, 1), --this.size, !0
                }

                function WO(o) {
                    var u = this.__data__,
                        c = na(u, o);
                    return c < 0 ? n : u[c][1]
                }

                function VO(o) {
                    return na(this.__data__, o) > -1
                }

                function qO(o, u) {
                    var c = this.__data__,
                        h = na(c, o);
                    return h < 0 ? (++this.size, c.push([o, u])) : c[h][1] = u, this
                }
                Gr.prototype.clear = HO, Gr.prototype.delete = jO, Gr.prototype.get = WO, Gr.prototype.has = VO, Gr.prototype.set = qO;

                function Kr(o) {
                    var u = -1,
                        c = o == null ? 0 : o.length;
                    for (this.clear(); ++u < c;) {
                        var h = o[u];
                        this.set(h[0], h[1])
                    }
                }

                function GO() {
                    this.size = 0, this.__data__ = {
                        hash: new po,
                        map: new(cu || Gr),
                        string: new po
                    }
                }

                function KO(o) {
                    var u = ha(this, o).delete(o);
                    return this.size -= u ? 1 : 0, u
                }

                function QO(o) {
                    return ha(this, o).get(o)
                }

                function YO(o) {
                    return ha(this, o).has(o)
                }

                function XO(o, u) {
                    var c = ha(this, o),
                        h = c.size;
                    return c.set(o, u), this.size += c.size == h ? 0 : 1, this
                }
                Kr.prototype.clear = GO, Kr.prototype.delete = KO, Kr.prototype.get = QO, Kr.prototype.has = YO, Kr.prototype.set = XO;

                function ho(o) {
                    var u = -1,
                        c = o == null ? 0 : o.length;
                    for (this.__data__ = new Kr; ++u < c;) this.add(o[u])
                }

                function ZO(o) {
                    return this.__data__.set(o, f), this
                }

                function JO(o) {
                    return this.__data__.has(o)
                }
                ho.prototype.add = ho.prototype.push = ZO, ho.prototype.has = JO;

                function gr(o) {
                    var u = this.__data__ = new Gr(o);
                    this.size = u.size
                }

                function eT() {
                    this.__data__ = new Gr, this.size = 0
                }

                function tT(o) {
                    var u = this.__data__,
                        c = u.delete(o);
                    return this.size = u.size, c
                }

                function nT(o) {
                    return this.__data__.get(o)
                }

                function rT(o) {
                    return this.__data__.has(o)
                }

                function iT(o, u) {
                    var c = this.__data__;
                    if (c instanceof Gr) {
                        var h = c.__data__;
                        if (!cu || h.length < i - 1) return h.push([o, u]), this.size = ++c.size, this;
                        c = this.__data__ = new Kr(h)
                    }
                    return c.set(o, u), this.size = c.size, this
                }
                gr.prototype.clear = eT, gr.prototype.delete = tT, gr.prototype.get = nT, gr.prototype.has = rT, gr.prototype.set = iT;

                function Ty(o, u) {
                    var c = ke(o),
                        h = !c && wo(o),
                        w = !c && !h && bi(o),
                        _ = !c && !h && !w && ll(o),
                        R = c || h || w || _,
                        D = R ? hd(o.length, hO) : [],
                        L = D.length;
                    for (var Y in o)(u || Ke.call(o, Y)) && !(R && (Y == "length" || w && (Y == "offset" || Y == "parent") || _ && (Y == "buffer" || Y == "byteLength" || Y == "byteOffset") || Zr(Y, L))) && D.push(Y);
                    return D
                }

                function Iy(o) {
                    var u = o.length;
                    return u ? o[Pd(0, u - 1)] : n
                }

                function oT(o, u) {
                    return ga(sn(o), go(u, 0, o.length))
                }

                function lT(o) {
                    return ga(sn(o))
                }

                function Sd(o, u, c) {
                    (c !== n && !mr(o[u], c) || c === n && !(u in o)) && Qr(o, u, c)
                }

                function hu(o, u, c) {
                    var h = o[u];
                    (!(Ke.call(o, u) && mr(h, c)) || c === n && !(u in o)) && Qr(o, u, c)
                }

                function na(o, u) {
                    for (var c = o.length; c--;)
                        if (mr(o[c][0], u)) return c;
                    return -1
                }

                function uT(o, u, c, h) {
                    return Ei(o, function(w, _, R) {
                        u(h, w, c(w), R)
                    }), h
                }

                function Ry(o, u) {
                    return o && Rr(u, Rt(u), o)
                }

                function sT(o, u) {
                    return o && Rr(u, cn(u), o)
                }

                function Qr(o, u, c) {
                    u == "__proto__" && Ys ? Ys(o, u, {
                        configurable: !0,
                        enumerable: !0,
                        value: c,
                        writable: !0
                    }) : o[u] = c
                }

                function Ed(o, u) {
                    for (var c = -1, h = u.length, w = H(h), _ = o == null; ++c < h;) w[c] = _ ? n : np(o, u[c]);
                    return w
                }

                function go(o, u, c) {
                    return o === o && (c !== n && (o = o <= c ? o : c), u !== n && (o = o >= u ? o : u)), o
                }

                function Xn(o, u, c, h, w, _) {
                    var R, D = u & g,
                        L = u & v,
                        Y = u & m;
                    if (c && (R = w ? c(o, h, w, _) : c(o)), R !== n) return R;
                    if (!ht(o)) return o;
                    var X = ke(o);
                    if (X) {
                        if (R = YT(o), !D) return sn(o, R)
                    } else {
                        var ee = Wt(o),
                            le = ee == Fe || ee == Ge;
                        if (bi(o)) return e0(o, D);
                        if (ee == at || ee == Re || le && !w) {
                            if (R = L || le ? {} : w0(o), !D) return L ? $T(o, sT(R, o)) : zT(o, Ry(R, o))
                        } else {
                            if (!et[ee]) return w ? o : {};
                            R = XT(o, ee, D)
                        }
                    }
                    _ || (_ = new gr);
                    var fe = _.get(o);
                    if (fe) return fe;
                    _.set(o, R), K0(o) ? o.forEach(function(ye) {
                        R.add(Xn(ye, u, c, ye, o, _))
                    }) : q0(o) && o.forEach(function(ye, De) {
                        R.set(De, Xn(ye, u, c, De, o, _))
                    });
                    var ve = Y ? L ? Hd : Ud : L ? cn : Rt,
                        Ie = X ? n : ve(o);
                    return Kn(Ie || o, function(ye, De) {
                        Ie && (De = ye, ye = o[De]), hu(R, De, Xn(ye, u, c, De, o, _))
                    }), R
                }

                function aT(o) {
                    var u = Rt(o);
                    return function(c) {
                        return Py(c, o, u)
                    }
                }

                function Py(o, u, c) {
                    var h = c.length;
                    if (o == null) return !h;
                    for (o = Je(o); h--;) {
                        var w = c[h],
                            _ = u[w],
                            R = o[w];
                        if (R === n && !(w in o) || !_(R)) return !1
                    }
                    return !0
                }

                function Ay(o, u, c) {
                    if (typeof o != "function") throw new Qn(s);
                    return Su(function() {
                        o.apply(n, c)
                    }, u)
                }

                function gu(o, u, c, h) {
                    var w = -1,
                        _ = $s,
                        R = !0,
                        D = o.length,
                        L = [],
                        Y = u.length;
                    if (!D) return L;
                    c && (u = ct(u, On(c))), h ? (_ = sd, R = !1) : u.length >= i && (_ = su, R = !1, u = new ho(u));
                    e: for (; ++w < D;) {
                        var X = o[w],
                            ee = c == null ? X : c(X);
                        if (X = h || X !== 0 ? X : 0, R && ee === ee) {
                            for (var le = Y; le--;)
                                if (u[le] === ee) continue e;
                            L.push(X)
                        } else _(u, ee, h) || L.push(X)
                    }
                    return L
                }
                var Ei = o0(Ir),
                    Dy = o0(kd, !0);

                function cT(o, u) {
                    var c = !0;
                    return Ei(o, function(h, w, _) {
                        return c = !!u(h, w, _), c
                    }), c
                }

                function ra(o, u, c) {
                    for (var h = -1, w = o.length; ++h < w;) {
                        var _ = o[h],
                            R = u(_);
                        if (R != null && (D === n ? R === R && !In(R) : c(R, D))) var D = R,
                            L = _
                    }
                    return L
                }

                function fT(o, u, c, h) {
                    var w = o.length;
                    for (c = Oe(c), c < 0 && (c = -c > w ? 0 : w + c), h = h === n || h > w ? w : Oe(h), h < 0 && (h += w), h = c > h ? 0 : Y0(h); c < h;) o[c++] = u;
                    return o
                }

                function Ny(o, u) {
                    var c = [];
                    return Ei(o, function(h, w, _) {
                        u(h, w, _) && c.push(h)
                    }), c
                }

                function Ft(o, u, c, h, w) {
                    var _ = -1,
                        R = o.length;
                    for (c || (c = JT), w || (w = []); ++_ < R;) {
                        var D = o[_];
                        u > 0 && c(D) ? u > 1 ? Ft(D, u - 1, c, h, w) : wi(w, D) : h || (w[w.length] = D)
                    }
                    return w
                }
                var Cd = l0(),
                    My = l0(!0);

                function Ir(o, u) {
                    return o && Cd(o, u, Rt)
                }

                function kd(o, u) {
                    return o && My(o, u, Rt)
                }

                function ia(o, u) {
                    return yi(u, function(c) {
                        return Jr(o[c])
                    })
                }

                function mo(o, u) {
                    u = ki(u, o);
                    for (var c = 0, h = u.length; o != null && c < h;) o = o[Pr(u[c++])];
                    return c && c == h ? o : n
                }

                function Ly(o, u, c) {
                    var h = u(o);
                    return ke(o) ? h : wi(h, c(o))
                }

                function Jt(o) {
                    return o == null ? o === n ? Go : he : fo && fo in Je(o) ? GT(o) : lI(o)
                }

                function _d(o, u) {
                    return o > u
                }

                function dT(o, u) {
                    return o != null && Ke.call(o, u)
                }

                function pT(o, u) {
                    return o != null && u in Je(o)
                }

                function hT(o, u, c) {
                    return o >= jt(u, c) && o < Ot(u, c)
                }

                function bd(o, u, c) {
                    for (var h = c ? sd : $s, w = o[0].length, _ = o.length, R = _, D = H(_), L = 1 / 0, Y = []; R--;) {
                        var X = o[R];
                        R && u && (X = ct(X, On(u))), L = jt(X.length, L), D[R] = !c && (u || w >= 120 && X.length >= 120) ? new ho(R && X) : n
                    }
                    X = o[0];
                    var ee = -1,
                        le = D[0];
                    e: for (; ++ee < w && Y.length < L;) {
                        var fe = X[ee],
                            ve = u ? u(fe) : fe;
                        if (fe = c || fe !== 0 ? fe : 0, !(le ? su(le, ve) : h(Y, ve, c))) {
                            for (R = _; --R;) {
                                var Ie = D[R];
                                if (!(Ie ? su(Ie, ve) : h(o[R], ve, c))) continue e
                            }
                            le && le.push(ve), Y.push(fe)
                        }
                    }
                    return Y
                }

                function gT(o, u, c, h) {
                    return Ir(o, function(w, _, R) {
                        u(h, c(w), _, R)
                    }), h
                }

                function mu(o, u, c) {
                    u = ki(u, o), o = C0(o, u);
                    var h = o == null ? o : o[Pr(Jn(u))];
                    return h == null ? n : bn(h, o, c)
                }

                function Fy(o) {
                    return wt(o) && Jt(o) == Re
                }

                function mT(o) {
                    return wt(o) && Jt(o) == V
                }

                function vT(o) {
                    return wt(o) && Jt(o) == Le
                }

                function vu(o, u, c, h, w) {
                    return o === u ? !0 : o == null || u == null || !wt(o) && !wt(u) ? o !== o && u !== u : yT(o, u, c, h, vu, w)
                }

                function yT(o, u, c, h, w, _) {
                    var R = ke(o),
                        D = ke(u),
                        L = R ? me : Wt(o),
                        Y = D ? me : Wt(u);
                    L = L == Re ? at : L, Y = Y == Re ? at : Y;
                    var X = L == at,
                        ee = Y == at,
                        le = L == Y;
                    if (le && bi(o)) {
                        if (!bi(u)) return !1;
                        R = !0, X = !1
                    }
                    if (le && !X) return _ || (_ = new gr), R || ll(o) ? m0(o, u, c, h, w, _) : VT(o, u, L, c, h, w, _);
                    if (!(c & E)) {
                        var fe = X && Ke.call(o, "__wrapped__"),
                            ve = ee && Ke.call(u, "__wrapped__");
                        if (fe || ve) {
                            var Ie = fe ? o.value() : o,
                                ye = ve ? u.value() : u;
                            return _ || (_ = new gr), w(Ie, ye, c, h, _)
                        }
                    }
                    return le ? (_ || (_ = new gr), qT(o, u, c, h, w, _)) : !1
                }

                function wT(o) {
                    return wt(o) && Wt(o) == yt
                }

                function Od(o, u, c, h) {
                    var w = c.length,
                        _ = w,
                        R = !h;
                    if (o == null) return !_;
                    for (o = Je(o); w--;) {
                        var D = c[w];
                        if (R && D[2] ? D[1] !== o[D[0]] : !(D[0] in o)) return !1
                    }
                    for (; ++w < _;) {
                        D = c[w];
                        var L = D[0],
                            Y = o[L],
                            X = D[1];
                        if (R && D[2]) {
                            if (Y === n && !(L in o)) return !1
                        } else {
                            var ee = new gr;
                            if (h) var le = h(Y, X, L, o, u, ee);
                            if (!(le === n ? vu(X, Y, E | S, h, ee) : le)) return !1
                        }
                    }
                    return !0
                }

                function zy(o) {
                    if (!ht(o) || tI(o)) return !1;
                    var u = Jr(o) ? wO : ab;
                    return u.test(yo(o))
                }

                function xT(o) {
                    return wt(o) && Jt(o) == kn
                }

                function ST(o) {
                    return wt(o) && Wt(o) == Ht
                }

                function ET(o) {
                    return wt(o) && Sa(o.length) && !!ot[Jt(o)]
                }

                function $y(o) {
                    return typeof o == "function" ? o : o == null ? fn : typeof o == "object" ? ke(o) ? Hy(o[0], o[1]) : Uy(o) : u1(o)
                }

                function Td(o) {
                    if (!xu(o)) return _O(o);
                    var u = [];
                    for (var c in Je(o)) Ke.call(o, c) && c != "constructor" && u.push(c);
                    return u
                }

                function CT(o) {
                    if (!ht(o)) return oI(o);
                    var u = xu(o),
                        c = [];
                    for (var h in o) h == "constructor" && (u || !Ke.call(o, h)) || c.push(h);
                    return c
                }

                function Id(o, u) {
                    return o < u
                }

                function By(o, u) {
                    var c = -1,
                        h = an(o) ? H(o.length) : [];
                    return Ei(o, function(w, _, R) {
                        h[++c] = u(w, _, R)
                    }), h
                }

                function Uy(o) {
                    var u = Wd(o);
                    return u.length == 1 && u[0][2] ? S0(u[0][0], u[0][1]) : function(c) {
                        return c === o || Od(c, o, u)
                    }
                }

                function Hy(o, u) {
                    return qd(o) && x0(u) ? S0(Pr(o), u) : function(c) {
                        var h = np(c, o);
                        return h === n && h === u ? rp(c, o) : vu(u, h, E | S)
                    }
                }

                function oa(o, u, c, h, w) {
                    o !== u && Cd(u, function(_, R) {
                        if (w || (w = new gr), ht(_)) kT(o, u, R, c, oa, h, w);
                        else {
                            var D = h ? h(Kd(o, R), _, R + "", o, u, w) : n;
                            D === n && (D = _), Sd(o, R, D)
                        }
                    }, cn)
                }

                function kT(o, u, c, h, w, _, R) {
                    var D = Kd(o, c),
                        L = Kd(u, c),
                        Y = R.get(L);
                    if (Y) {
                        Sd(o, c, Y);
                        return
                    }
                    var X = _ ? _(D, L, c + "", o, u, R) : n,
                        ee = X === n;
                    if (ee) {
                        var le = ke(L),
                            fe = !le && bi(L),
                            ve = !le && !fe && ll(L);
                        X = L, le || fe || ve ? ke(D) ? X = D : St(D) ? X = sn(D) : fe ? (ee = !1, X = e0(L, !0)) : ve ? (ee = !1, X = t0(L, !0)) : X = [] : Eu(L) || wo(L) ? (X = D, wo(D) ? X = X0(D) : (!ht(D) || Jr(D)) && (X = w0(L))) : ee = !1
                    }
                    ee && (R.set(L, X), w(X, L, h, _, R), R.delete(L)), Sd(o, c, X)
                }

                function jy(o, u) {
                    var c = o.length;
                    if (c) return u += u < 0 ? c : 0, Zr(u, c) ? o[u] : n
                }

                function Wy(o, u, c) {
                    u.length ? u = ct(u, function(_) {
                        return ke(_) ? function(R) {
                            return mo(R, _.length === 1 ? _[0] : _)
                        } : _
                    }) : u = [fn];
                    var h = -1;
                    u = ct(u, On(ge()));
                    var w = By(o, function(_, R, D) {
                        var L = ct(u, function(Y) {
                            return Y(_)
                        });
                        return {
                            criteria: L,
                            index: ++h,
                            value: _
                        }
                    });
                    return Xb(w, function(_, R) {
                        return FT(_, R, c)
                    })
                }

                function _T(o, u) {
                    return Vy(o, u, function(c, h) {
                        return rp(o, h)
                    })
                }

                function Vy(o, u, c) {
                    for (var h = -1, w = u.length, _ = {}; ++h < w;) {
                        var R = u[h],
                            D = mo(o, R);
                        c(D, R) && yu(_, ki(R, o), D)
                    }
                    return _
                }

                function bT(o) {
                    return function(u) {
                        return mo(u, o)
                    }
                }

                function Rd(o, u, c, h) {
                    var w = h ? Yb : Qo,
                        _ = -1,
                        R = u.length,
                        D = o;
                    for (o === u && (u = sn(u)), c && (D = ct(o, On(c))); ++_ < R;)
                        for (var L = 0, Y = u[_], X = c ? c(Y) : Y;
                            (L = w(D, X, L, h)) > -1;) D !== o && Qs.call(D, L, 1), Qs.call(o, L, 1);
                    return o
                }

                function qy(o, u) {
                    for (var c = o ? u.length : 0, h = c - 1; c--;) {
                        var w = u[c];
                        if (c == h || w !== _) {
                            var _ = w;
                            Zr(w) ? Qs.call(o, w, 1) : Nd(o, w)
                        }
                    }
                    return o
                }

                function Pd(o, u) {
                    return o + Zs(by() * (u - o + 1))
                }

                function OT(o, u, c, h) {
                    for (var w = -1, _ = Ot(Xs((u - o) / (c || 1)), 0), R = H(_); _--;) R[h ? _ : ++w] = o, o += c;
                    return R
                }

                function Ad(o, u) {
                    var c = "";
                    if (!o || u < 1 || u > j) return c;
                    do u % 2 && (c += o), u = Zs(u / 2), u && (o += o); while (u);
                    return c
                }

                function Pe(o, u) {
                    return Qd(E0(o, u, fn), o + "")
                }

                function TT(o) {
                    return Iy(ul(o))
                }

                function IT(o, u) {
                    var c = ul(o);
                    return ga(c, go(u, 0, c.length))
                }

                function yu(o, u, c, h) {
                    if (!ht(o)) return o;
                    u = ki(u, o);
                    for (var w = -1, _ = u.length, R = _ - 1, D = o; D != null && ++w < _;) {
                        var L = Pr(u[w]),
                            Y = c;
                        if (L === "__proto__" || L === "constructor" || L === "prototype") return o;
                        if (w != R) {
                            var X = D[L];
                            Y = h ? h(X, L, D) : n, Y === n && (Y = ht(X) ? X : Zr(u[w + 1]) ? [] : {})
                        }
                        hu(D, L, Y), D = D[L]
                    }
                    return o
                }
                var Gy = Js ? function(o, u) {
                        return Js.set(o, u), o
                    } : fn,
                    RT = Ys ? function(o, u) {
                        return Ys(o, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: op(u),
                            writable: !0
                        })
                    } : fn;

                function PT(o) {
                    return ga(ul(o))
                }

                function Zn(o, u, c) {
                    var h = -1,
                        w = o.length;
                    u < 0 && (u = -u > w ? 0 : w + u), c = c > w ? w : c, c < 0 && (c += w), w = u > c ? 0 : c - u >>> 0, u >>>= 0;
                    for (var _ = H(w); ++h < w;) _[h] = o[h + u];
                    return _
                }

                function AT(o, u) {
                    var c;
                    return Ei(o, function(h, w, _) {
                        return c = u(h, w, _), !c
                    }), !!c
                }

                function la(o, u, c) {
                    var h = 0,
                        w = o == null ? h : o.length;
                    if (typeof u == "number" && u === u && w <= O) {
                        for (; h < w;) {
                            var _ = h + w >>> 1,
                                R = o[_];
                            R !== null && !In(R) && (c ? R <= u : R < u) ? h = _ + 1 : w = _
                        }
                        return w
                    }
                    return Dd(o, u, fn, c)
                }

                function Dd(o, u, c, h) {
                    var w = 0,
                        _ = o == null ? 0 : o.length;
                    if (_ === 0) return 0;
                    u = c(u);
                    for (var R = u !== u, D = u === null, L = In(u), Y = u === n; w < _;) {
                        var X = Zs((w + _) / 2),
                            ee = c(o[X]),
                            le = ee !== n,
                            fe = ee === null,
                            ve = ee === ee,
                            Ie = In(ee);
                        if (R) var ye = h || ve;
                        else Y ? ye = ve && (h || le) : D ? ye = ve && le && (h || !fe) : L ? ye = ve && le && !fe && (h || !Ie) : fe || Ie ? ye = !1 : ye = h ? ee <= u : ee < u;
                        ye ? w = X + 1 : _ = X
                    }
                    return jt(_, ae)
                }

                function Ky(o, u) {
                    for (var c = -1, h = o.length, w = 0, _ = []; ++c < h;) {
                        var R = o[c],
                            D = u ? u(R) : R;
                        if (!c || !mr(D, L)) {
                            var L = D;
                            _[w++] = R === 0 ? 0 : R
                        }
                    }
                    return _
                }

                function Qy(o) {
                    return typeof o == "number" ? o : In(o) ? b : +o
                }

                function Tn(o) {
                    if (typeof o == "string") return o;
                    if (ke(o)) return ct(o, Tn) + "";
                    if (In(o)) return Oy ? Oy.call(o) : "";
                    var u = o + "";
                    return u == "0" && 1 / o == -oe ? "-0" : u
                }

                function Ci(o, u, c) {
                    var h = -1,
                        w = $s,
                        _ = o.length,
                        R = !0,
                        D = [],
                        L = D;
                    if (c) R = !1, w = sd;
                    else if (_ >= i) {
                        var Y = u ? null : jT(o);
                        if (Y) return Us(Y);
                        R = !1, w = su, L = new ho
                    } else L = u ? [] : D;
                    e: for (; ++h < _;) {
                        var X = o[h],
                            ee = u ? u(X) : X;
                        if (X = c || X !== 0 ? X : 0, R && ee === ee) {
                            for (var le = L.length; le--;)
                                if (L[le] === ee) continue e;
                            u && L.push(ee), D.push(X)
                        } else w(L, ee, c) || (L !== D && L.push(ee), D.push(X))
                    }
                    return D
                }

                function Nd(o, u) {
                    return u = ki(u, o), o = C0(o, u), o == null || delete o[Pr(Jn(u))]
                }

                function Yy(o, u, c, h) {
                    return yu(o, u, c(mo(o, u)), h)
                }

                function ua(o, u, c, h) {
                    for (var w = o.length, _ = h ? w : -1;
                        (h ? _-- : ++_ < w) && u(o[_], _, o););
                    return c ? Zn(o, h ? 0 : _, h ? _ + 1 : w) : Zn(o, h ? _ + 1 : 0, h ? w : _)
                }

                function Xy(o, u) {
                    var c = o;
                    return c instanceof Me && (c = c.value()), ad(u, function(h, w) {
                        return w.func.apply(w.thisArg, wi([h], w.args))
                    }, c)
                }

                function Md(o, u, c) {
                    var h = o.length;
                    if (h < 2) return h ? Ci(o[0]) : [];
                    for (var w = -1, _ = H(h); ++w < h;)
                        for (var R = o[w], D = -1; ++D < h;) D != w && (_[w] = gu(_[w] || R, o[D], u, c));
                    return Ci(Ft(_, 1), u, c)
                }

                function Zy(o, u, c) {
                    for (var h = -1, w = o.length, _ = u.length, R = {}; ++h < w;) {
                        var D = h < _ ? u[h] : n;
                        c(R, o[h], D)
                    }
                    return R
                }

                function Ld(o) {
                    return St(o) ? o : []
                }

                function Fd(o) {
                    return typeof o == "function" ? o : fn
                }

                function ki(o, u) {
                    return ke(o) ? o : qd(o, u) ? [o] : O0(qe(o))
                }
                var DT = Pe;

                function _i(o, u, c) {
                    var h = o.length;
                    return c = c === n ? h : c, !u && c >= h ? o : Zn(o, u, c)
                }
                var Jy = xO || function(o) {
                    return Lt.clearTimeout(o)
                };

                function e0(o, u) {
                    if (u) return o.slice();
                    var c = o.length,
                        h = Sy ? Sy(c) : new o.constructor(c);
                    return o.copy(h), h
                }

                function zd(o) {
                    var u = new o.constructor(o.byteLength);
                    return new Gs(u).set(new Gs(o)), u
                }

                function NT(o, u) {
                    var c = u ? zd(o.buffer) : o.buffer;
                    return new o.constructor(c, o.byteOffset, o.byteLength)
                }

                function MT(o) {
                    var u = new o.constructor(o.source, Fv.exec(o));
                    return u.lastIndex = o.lastIndex, u
                }

                function LT(o) {
                    return pu ? Je(pu.call(o)) : {}
                }

                function t0(o, u) {
                    var c = u ? zd(o.buffer) : o.buffer;
                    return new o.constructor(c, o.byteOffset, o.length)
                }

                function n0(o, u) {
                    if (o !== u) {
                        var c = o !== n,
                            h = o === null,
                            w = o === o,
                            _ = In(o),
                            R = u !== n,
                            D = u === null,
                            L = u === u,
                            Y = In(u);
                        if (!D && !Y && !_ && o > u || _ && R && L && !D && !Y || h && R && L || !c && L || !w) return 1;
                        if (!h && !_ && !Y && o < u || Y && c && w && !h && !_ || D && c && w || !R && w || !L) return -1
                    }
                    return 0
                }

                function FT(o, u, c) {
                    for (var h = -1, w = o.criteria, _ = u.criteria, R = w.length, D = c.length; ++h < R;) {
                        var L = n0(w[h], _[h]);
                        if (L) {
                            if (h >= D) return L;
                            var Y = c[h];
                            return L * (Y == "desc" ? -1 : 1)
                        }
                    }
                    return o.index - u.index
                }

                function r0(o, u, c, h) {
                    for (var w = -1, _ = o.length, R = c.length, D = -1, L = u.length, Y = Ot(_ - R, 0), X = H(L + Y), ee = !h; ++D < L;) X[D] = u[D];
                    for (; ++w < R;)(ee || w < _) && (X[c[w]] = o[w]);
                    for (; Y--;) X[D++] = o[w++];
                    return X
                }

                function i0(o, u, c, h) {
                    for (var w = -1, _ = o.length, R = -1, D = c.length, L = -1, Y = u.length, X = Ot(_ - D, 0), ee = H(X + Y), le = !h; ++w < X;) ee[w] = o[w];
                    for (var fe = w; ++L < Y;) ee[fe + L] = u[L];
                    for (; ++R < D;)(le || w < _) && (ee[fe + c[R]] = o[w++]);
                    return ee
                }

                function sn(o, u) {
                    var c = -1,
                        h = o.length;
                    for (u || (u = H(h)); ++c < h;) u[c] = o[c];
                    return u
                }

                function Rr(o, u, c, h) {
                    var w = !c;
                    c || (c = {});
                    for (var _ = -1, R = u.length; ++_ < R;) {
                        var D = u[_],
                            L = h ? h(c[D], o[D], D, c, o) : n;
                        L === n && (L = o[D]), w ? Qr(c, D, L) : hu(c, D, L)
                    }
                    return c
                }

                function zT(o, u) {
                    return Rr(o, Vd(o), u)
                }

                function $T(o, u) {
                    return Rr(o, v0(o), u)
                }

                function sa(o, u) {
                    return function(c, h) {
                        var w = ke(c) ? Wb : uT,
                            _ = u ? u() : {};
                        return w(c, o, ge(h, 2), _)
                    }
                }

                function rl(o) {
                    return Pe(function(u, c) {
                        var h = -1,
                            w = c.length,
                            _ = w > 1 ? c[w - 1] : n,
                            R = w > 2 ? c[2] : n;
                        for (_ = o.length > 3 && typeof _ == "function" ? (w--, _) : n, R && en(c[0], c[1], R) && (_ = w < 3 ? n : _, w = 1), u = Je(u); ++h < w;) {
                            var D = c[h];
                            D && o(u, D, h, _)
                        }
                        return u
                    })
                }

                function o0(o, u) {
                    return function(c, h) {
                        if (c == null) return c;
                        if (!an(c)) return o(c, h);
                        for (var w = c.length, _ = u ? w : -1, R = Je(c);
                            (u ? _-- : ++_ < w) && h(R[_], _, R) !== !1;);
                        return c
                    }
                }

                function l0(o) {
                    return function(u, c, h) {
                        for (var w = -1, _ = Je(u), R = h(u), D = R.length; D--;) {
                            var L = R[o ? D : ++w];
                            if (c(_[L], L, _) === !1) break
                        }
                        return u
                    }
                }

                function BT(o, u, c) {
                    var h = u & A,
                        w = wu(o);

                    function _() {
                        var R = this && this !== Lt && this instanceof _ ? w : o;
                        return R.apply(h ? c : this, arguments)
                    }
                    return _
                }

                function u0(o) {
                    return function(u) {
                        u = qe(u);
                        var c = Yo(u) ? hr(u) : n,
                            h = c ? c[0] : u.charAt(0),
                            w = c ? _i(c, 1).join("") : u.slice(1);
                        return h[o]() + w
                    }
                }

                function il(o) {
                    return function(u) {
                        return ad(o1(i1(u).replace(Rb, "")), o, "")
                    }
                }

                function wu(o) {
                    return function() {
                        var u = arguments;
                        switch (u.length) {
                            case 0:
                                return new o;
                            case 1:
                                return new o(u[0]);
                            case 2:
                                return new o(u[0], u[1]);
                            case 3:
                                return new o(u[0], u[1], u[2]);
                            case 4:
                                return new o(u[0], u[1], u[2], u[3]);
                            case 5:
                                return new o(u[0], u[1], u[2], u[3], u[4]);
                            case 6:
                                return new o(u[0], u[1], u[2], u[3], u[4], u[5]);
                            case 7:
                                return new o(u[0], u[1], u[2], u[3], u[4], u[5], u[6])
                        }
                        var c = nl(o.prototype),
                            h = o.apply(c, u);
                        return ht(h) ? h : c
                    }
                }

                function UT(o, u, c) {
                    var h = wu(o);

                    function w() {
                        for (var _ = arguments.length, R = H(_), D = _, L = ol(w); D--;) R[D] = arguments[D];
                        var Y = _ < 3 && R[0] !== L && R[_ - 1] !== L ? [] : xi(R, L);
                        if (_ -= Y.length, _ < c) return d0(o, u, aa, w.placeholder, n, R, Y, n, n, c - _);
                        var X = this && this !== Lt && this instanceof w ? h : o;
                        return bn(X, this, R)
                    }
                    return w
                }

                function s0(o) {
                    return function(u, c, h) {
                        var w = Je(u);
                        if (!an(u)) {
                            var _ = ge(c, 3);
                            u = Rt(u), c = function(D) {
                                return _(w[D], D, w)
                            }
                        }
                        var R = o(u, c, h);
                        return R > -1 ? w[_ ? u[R] : R] : n
                    }
                }

                function a0(o) {
                    return Xr(function(u) {
                        var c = u.length,
                            h = c,
                            w = Yn.prototype.thru;
                        for (o && u.reverse(); h--;) {
                            var _ = u[h];
                            if (typeof _ != "function") throw new Qn(s);
                            if (w && !R && pa(_) == "wrapper") var R = new Yn([], !0)
                        }
                        for (h = R ? h : c; ++h < c;) {
                            _ = u[h];
                            var D = pa(_),
                                L = D == "wrapper" ? jd(_) : n;
                            L && Gd(L[0]) && L[1] == (F | k | N | z) && !L[4].length && L[9] == 1 ? R = R[pa(L[0])].apply(R, L[3]) : R = _.length == 1 && Gd(_) ? R[D]() : R.thru(_)
                        }
                        return function() {
                            var Y = arguments,
                                X = Y[0];
                            if (R && Y.length == 1 && ke(X)) return R.plant(X).value();
                            for (var ee = 0, le = c ? u[ee].apply(this, Y) : X; ++ee < c;) le = u[ee].call(this, le);
                            return le
                        }
                    })
                }

                function aa(o, u, c, h, w, _, R, D, L, Y) {
                    var X = u & F,
                        ee = u & A,
                        le = u & y,
                        fe = u & (k | P),
                        ve = u & q,
                        Ie = le ? n : wu(o);

                    function ye() {
                        for (var De = arguments.length, ze = H(De), Rn = De; Rn--;) ze[Rn] = arguments[Rn];
                        if (fe) var tn = ol(ye),
                            Pn = Jb(ze, tn);
                        if (h && (ze = r0(ze, h, w, fe)), _ && (ze = i0(ze, _, R, fe)), De -= Pn, fe && De < Y) {
                            var Et = xi(ze, tn);
                            return d0(o, u, aa, ye.placeholder, c, ze, Et, D, L, Y - De)
                        }
                        var vr = ee ? c : this,
                            ti = le ? vr[o] : o;
                        return De = ze.length, D ? ze = uI(ze, D) : ve && De > 1 && ze.reverse(), X && L < De && (ze.length = L), this && this !== Lt && this instanceof ye && (ti = Ie || wu(ti)), ti.apply(vr, ze)
                    }
                    return ye
                }

                function c0(o, u) {
                    return function(c, h) {
                        return gT(c, o, u(h), {})
                    }
                }

                function ca(o, u) {
                    return function(c, h) {
                        var w;
                        if (c === n && h === n) return u;
                        if (c !== n && (w = c), h !== n) {
                            if (w === n) return h;
                            typeof c == "string" || typeof h == "string" ? (c = Tn(c), h = Tn(h)) : (c = Qy(c), h = Qy(h)), w = o(c, h)
                        }
                        return w
                    }
                }

                function $d(o) {
                    return Xr(function(u) {
                        return u = ct(u, On(ge())), Pe(function(c) {
                            var h = this;
                            return o(u, function(w) {
                                return bn(w, h, c)
                            })
                        })
                    })
                }

                function fa(o, u) {
                    u = u === n ? " " : Tn(u);
                    var c = u.length;
                    if (c < 2) return c ? Ad(u, o) : u;
                    var h = Ad(u, Xs(o / Xo(u)));
                    return Yo(u) ? _i(hr(h), 0, o).join("") : h.slice(0, o)
                }

                function HT(o, u, c, h) {
                    var w = u & A,
                        _ = wu(o);

                    function R() {
                        for (var D = -1, L = arguments.length, Y = -1, X = h.length, ee = H(X + L), le = this && this !== Lt && this instanceof R ? _ : o; ++Y < X;) ee[Y] = h[Y];
                        for (; L--;) ee[Y++] = arguments[++D];
                        return bn(le, w ? c : this, ee)
                    }
                    return R
                }

                function f0(o) {
                    return function(u, c, h) {
                        return h && typeof h != "number" && en(u, c, h) && (c = h = n), u = ei(u), c === n ? (c = u, u = 0) : c = ei(c), h = h === n ? u < c ? 1 : -1 : ei(h), OT(u, c, h, o)
                    }
                }

                function da(o) {
                    return function(u, c) {
                        return typeof u == "string" && typeof c == "string" || (u = er(u), c = er(c)), o(u, c)
                    }
                }

                function d0(o, u, c, h, w, _, R, D, L, Y) {
                    var X = u & k,
                        ee = X ? R : n,
                        le = X ? n : R,
                        fe = X ? _ : n,
                        ve = X ? n : _;
                    u |= X ? N : T, u &= ~(X ? T : N), u & x || (u &= ~(A | y));
                    var Ie = [o, u, w, fe, ee, ve, le, D, L, Y],
                        ye = c.apply(n, Ie);
                    return Gd(o) && k0(ye, Ie), ye.placeholder = h, _0(ye, o, u)
                }

                function Bd(o) {
                    var u = bt[o];
                    return function(c, h) {
                        if (c = er(c), h = h == null ? 0 : jt(Oe(h), 292), h && _y(c)) {
                            var w = (qe(c) + "e").split("e"),
                                _ = u(w[0] + "e" + (+w[1] + h));
                            return w = (qe(_) + "e").split("e"), +(w[0] + "e" + (+w[1] - h))
                        }
                        return u(c)
                    }
                }
                var jT = el && 1 / Us(new el([, -0]))[1] == oe ? function(o) {
                    return new el(o)
                } : sp;

                function p0(o) {
                    return function(u) {
                        var c = Wt(u);
                        return c == yt ? md(u) : c == Ht ? lO(u) : Zb(u, o(u))
                    }
                }

                function Yr(o, u, c, h, w, _, R, D) {
                    var L = u & y;
                    if (!L && typeof o != "function") throw new Qn(s);
                    var Y = h ? h.length : 0;
                    if (Y || (u &= ~(N | T), h = w = n), R = R === n ? R : Ot(Oe(R), 0), D = D === n ? D : Oe(D), Y -= w ? w.length : 0, u & T) {
                        var X = h,
                            ee = w;
                        h = w = n
                    }
                    var le = L ? n : jd(o),
                        fe = [o, u, c, h, w, X, ee, _, R, D];
                    if (le && iI(fe, le), o = fe[0], u = fe[1], c = fe[2], h = fe[3], w = fe[4], D = fe[9] = fe[9] === n ? L ? 0 : o.length : Ot(fe[9] - Y, 0), !D && u & (k | P) && (u &= ~(k | P)), !u || u == A) var ve = BT(o, u, c);
                    else u == k || u == P ? ve = UT(o, u, D) : (u == N || u == (A | N)) && !w.length ? ve = HT(o, u, c, h) : ve = aa.apply(n, fe);
                    var Ie = le ? Gy : k0;
                    return _0(Ie(ve, fe), o, u)
                }

                function h0(o, u, c, h) {
                    return o === n || mr(o, Jo[c]) && !Ke.call(h, c) ? u : o
                }

                function g0(o, u, c, h, w, _) {
                    return ht(o) && ht(u) && (_.set(u, o), oa(o, u, n, g0, _), _.delete(u)), o
                }

                function WT(o) {
                    return Eu(o) ? n : o
                }

                function m0(o, u, c, h, w, _) {
                    var R = c & E,
                        D = o.length,
                        L = u.length;
                    if (D != L && !(R && L > D)) return !1;
                    var Y = _.get(o),
                        X = _.get(u);
                    if (Y && X) return Y == u && X == o;
                    var ee = -1,
                        le = !0,
                        fe = c & S ? new ho : n;
                    for (_.set(o, u), _.set(u, o); ++ee < D;) {
                        var ve = o[ee],
                            Ie = u[ee];
                        if (h) var ye = R ? h(Ie, ve, ee, u, o, _) : h(ve, Ie, ee, o, u, _);
                        if (ye !== n) {
                            if (ye) continue;
                            le = !1;
                            break
                        }
                        if (fe) {
                            if (!cd(u, function(De, ze) {
                                    if (!su(fe, ze) && (ve === De || w(ve, De, c, h, _))) return fe.push(ze)
                                })) {
                                le = !1;
                                break
                            }
                        } else if (!(ve === Ie || w(ve, Ie, c, h, _))) {
                            le = !1;
                            break
                        }
                    }
                    return _.delete(o), _.delete(u), le
                }

                function VT(o, u, c, h, w, _, R) {
                    switch (c) {
                        case re:
                            if (o.byteLength != u.byteLength || o.byteOffset != u.byteOffset) return !1;
                            o = o.buffer, u = u.buffer;
                        case V:
                            return !(o.byteLength != u.byteLength || !_(new Gs(o), new Gs(u)));
                        case Se:
                        case Le:
                        case Wn:
                            return mr(+o, +u);
                        case Be:
                            return o.name == u.name && o.message == u.message;
                        case kn:
                        case Or:
                            return o == u + "";
                        case yt:
                            var D = md;
                        case Ht:
                            var L = h & E;
                            if (D || (D = Us), o.size != u.size && !L) return !1;
                            var Y = R.get(o);
                            if (Y) return Y == u;
                            h |= S, R.set(o, u);
                            var X = m0(D(o), D(u), h, w, _, R);
                            return R.delete(o), X;
                        case Wr:
                            if (pu) return pu.call(o) == pu.call(u)
                    }
                    return !1
                }

                function qT(o, u, c, h, w, _) {
                    var R = c & E,
                        D = Ud(o),
                        L = D.length,
                        Y = Ud(u),
                        X = Y.length;
                    if (L != X && !R) return !1;
                    for (var ee = L; ee--;) {
                        var le = D[ee];
                        if (!(R ? le in u : Ke.call(u, le))) return !1
                    }
                    var fe = _.get(o),
                        ve = _.get(u);
                    if (fe && ve) return fe == u && ve == o;
                    var Ie = !0;
                    _.set(o, u), _.set(u, o);
                    for (var ye = R; ++ee < L;) {
                        le = D[ee];
                        var De = o[le],
                            ze = u[le];
                        if (h) var Rn = R ? h(ze, De, le, u, o, _) : h(De, ze, le, o, u, _);
                        if (!(Rn === n ? De === ze || w(De, ze, c, h, _) : Rn)) {
                            Ie = !1;
                            break
                        }
                        ye || (ye = le == "constructor")
                    }
                    if (Ie && !ye) {
                        var tn = o.constructor,
                            Pn = u.constructor;
                        tn != Pn && "constructor" in o && "constructor" in u && !(typeof tn == "function" && tn instanceof tn && typeof Pn == "function" && Pn instanceof Pn) && (Ie = !1)
                    }
                    return _.delete(o), _.delete(u), Ie
                }

                function Xr(o) {
                    return Qd(E0(o, n, P0), o + "")
                }

                function Ud(o) {
                    return Ly(o, Rt, Vd)
                }

                function Hd(o) {
                    return Ly(o, cn, v0)
                }
                var jd = Js ? function(o) {
                    return Js.get(o)
                } : sp;

                function pa(o) {
                    for (var u = o.name + "", c = tl[u], h = Ke.call(tl, u) ? c.length : 0; h--;) {
                        var w = c[h],
                            _ = w.func;
                        if (_ == null || _ == o) return w.name
                    }
                    return u
                }

                function ol(o) {
                    var u = Ke.call(C, "placeholder") ? C : o;
                    return u.placeholder
                }

                function ge() {
                    var o = C.iteratee || lp;
                    return o = o === lp ? $y : o, arguments.length ? o(arguments[0], arguments[1]) : o
                }

                function ha(o, u) {
                    var c = o.__data__;
                    return eI(u) ? c[typeof u == "string" ? "string" : "hash"] : c.map
                }

                function Wd(o) {
                    for (var u = Rt(o), c = u.length; c--;) {
                        var h = u[c],
                            w = o[h];
                        u[c] = [h, w, x0(w)]
                    }
                    return u
                }

                function vo(o, u) {
                    var c = rO(o, u);
                    return zy(c) ? c : n
                }

                function GT(o) {
                    var u = Ke.call(o, fo),
                        c = o[fo];
                    try {
                        o[fo] = n;
                        var h = !0
                    } catch {}
                    var w = Vs.call(o);
                    return h && (u ? o[fo] = c : delete o[fo]), w
                }
                var Vd = yd ? function(o) {
                        return o == null ? [] : (o = Je(o), yi(yd(o), function(u) {
                            return Cy.call(o, u)
                        }))
                    } : ap,
                    v0 = yd ? function(o) {
                        for (var u = []; o;) wi(u, Vd(o)), o = Ks(o);
                        return u
                    } : ap,
                    Wt = Jt;
                (wd && Wt(new wd(new ArrayBuffer(1))) != re || cu && Wt(new cu) != yt || xd && Wt(xd.resolve()) != Mt || el && Wt(new el) != Ht || fu && Wt(new fu) != Tr) && (Wt = function(o) {
                    var u = Jt(o),
                        c = u == at ? o.constructor : n,
                        h = c ? yo(c) : "";
                    if (h) switch (h) {
                        case IO:
                            return re;
                        case RO:
                            return yt;
                        case PO:
                            return Mt;
                        case AO:
                            return Ht;
                        case DO:
                            return Tr
                    }
                    return u
                });

                function KT(o, u, c) {
                    for (var h = -1, w = c.length; ++h < w;) {
                        var _ = c[h],
                            R = _.size;
                        switch (_.type) {
                            case "drop":
                                o += R;
                                break;
                            case "dropRight":
                                u -= R;
                                break;
                            case "take":
                                u = jt(u, o + R);
                                break;
                            case "takeRight":
                                o = Ot(o, u - R);
                                break
                        }
                    }
                    return {
                        start: o,
                        end: u
                    }
                }

                function QT(o) {
                    var u = o.match(tb);
                    return u ? u[1].split(nb) : []
                }

                function y0(o, u, c) {
                    u = ki(u, o);
                    for (var h = -1, w = u.length, _ = !1; ++h < w;) {
                        var R = Pr(u[h]);
                        if (!(_ = o != null && c(o, R))) break;
                        o = o[R]
                    }
                    return _ || ++h != w ? _ : (w = o == null ? 0 : o.length, !!w && Sa(w) && Zr(R, w) && (ke(o) || wo(o)))
                }

                function YT(o) {
                    var u = o.length,
                        c = new o.constructor(u);
                    return u && typeof o[0] == "string" && Ke.call(o, "index") && (c.index = o.index, c.input = o.input), c
                }

                function w0(o) {
                    return typeof o.constructor == "function" && !xu(o) ? nl(Ks(o)) : {}
                }

                function XT(o, u, c) {
                    var h = o.constructor;
                    switch (u) {
                        case V:
                            return zd(o);
                        case Se:
                        case Le:
                            return new h(+o);
                        case re:
                            return NT(o, c);
                        case pe:
                        case Ue:
                        case He:
                        case Zt:
                        case qn:
                        case _n:
                        case Vr:
                        case qr:
                        case it:
                            return t0(o, c);
                        case yt:
                            return new h;
                        case Wn:
                        case Or:
                            return new h(o);
                        case kn:
                            return MT(o);
                        case Ht:
                            return new h;
                        case Wr:
                            return LT(o)
                    }
                }

                function ZT(o, u) {
                    var c = u.length;
                    if (!c) return o;
                    var h = c - 1;
                    return u[h] = (c > 1 ? "& " : "") + u[h], u = u.join(c > 2 ? ", " : " "), o.replace(eb, `{
/* [wrapped with ` + u + `] */
`)
                }

                function JT(o) {
                    return ke(o) || wo(o) || !!(ky && o && o[ky])
                }

                function Zr(o, u) {
                    var c = typeof o;
                    return u = u ?? j, !!u && (c == "number" || c != "symbol" && fb.test(o)) && o > -1 && o % 1 == 0 && o < u
                }

                function en(o, u, c) {
                    if (!ht(c)) return !1;
                    var h = typeof u;
                    return (h == "number" ? an(c) && Zr(u, c.length) : h == "string" && u in c) ? mr(c[u], o) : !1
                }

                function qd(o, u) {
                    if (ke(o)) return !1;
                    var c = typeof o;
                    return c == "number" || c == "symbol" || c == "boolean" || o == null || In(o) ? !0 : Y_.test(o) || !Q_.test(o) || u != null && o in Je(u)
                }

                function eI(o) {
                    var u = typeof o;
                    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? o !== "__proto__" : o === null
                }

                function Gd(o) {
                    var u = pa(o),
                        c = C[u];
                    if (typeof c != "function" || !(u in Me.prototype)) return !1;
                    if (o === c) return !0;
                    var h = jd(c);
                    return !!h && o === h[0]
                }

                function tI(o) {
                    return !!xy && xy in o
                }
                var nI = js ? Jr : cp;

                function xu(o) {
                    var u = o && o.constructor,
                        c = typeof u == "function" && u.prototype || Jo;
                    return o === c
                }

                function x0(o) {
                    return o === o && !ht(o)
                }

                function S0(o, u) {
                    return function(c) {
                        return c == null ? !1 : c[o] === u && (u !== n || o in Je(c))
                    }
                }

                function rI(o) {
                    var u = wa(o, function(h) {
                            return c.size === d && c.clear(), h
                        }),
                        c = u.cache;
                    return u
                }

                function iI(o, u) {
                    var c = o[1],
                        h = u[1],
                        w = c | h,
                        _ = w < (A | y | F),
                        R = h == F && c == k || h == F && c == z && o[7].length <= u[8] || h == (F | z) && u[7].length <= u[8] && c == k;
                    if (!(_ || R)) return o;
                    h & A && (o[2] = u[2], w |= c & A ? 0 : x);
                    var D = u[3];
                    if (D) {
                        var L = o[3];
                        o[3] = L ? r0(L, D, u[4]) : D, o[4] = L ? xi(o[3], p) : u[4]
                    }
                    return D = u[5], D && (L = o[5], o[5] = L ? i0(L, D, u[6]) : D, o[6] = L ? xi(o[5], p) : u[6]), D = u[7], D && (o[7] = D), h & F && (o[8] = o[8] == null ? u[8] : jt(o[8], u[8])), o[9] == null && (o[9] = u[9]), o[0] = u[0], o[1] = w, o
                }

                function oI(o) {
                    var u = [];
                    if (o != null)
                        for (var c in Je(o)) u.push(c);
                    return u
                }

                function lI(o) {
                    return Vs.call(o)
                }

                function E0(o, u, c) {
                    return u = Ot(u === n ? o.length - 1 : u, 0),
                        function() {
                            for (var h = arguments, w = -1, _ = Ot(h.length - u, 0), R = H(_); ++w < _;) R[w] = h[u + w];
                            w = -1;
                            for (var D = H(u + 1); ++w < u;) D[w] = h[w];
                            return D[u] = c(R), bn(o, this, D)
                        }
                }

                function C0(o, u) {
                    return u.length < 2 ? o : mo(o, Zn(u, 0, -1))
                }

                function uI(o, u) {
                    for (var c = o.length, h = jt(u.length, c), w = sn(o); h--;) {
                        var _ = u[h];
                        o[h] = Zr(_, c) ? w[_] : n
                    }
                    return o
                }

                function Kd(o, u) {
                    if (!(u === "constructor" && typeof o[u] == "function") && u != "__proto__") return o[u]
                }
                var k0 = b0(Gy),
                    Su = EO || function(o, u) {
                        return Lt.setTimeout(o, u)
                    },
                    Qd = b0(RT);

                function _0(o, u, c) {
                    var h = u + "";
                    return Qd(o, ZT(h, sI(QT(h), c)))
                }

                function b0(o) {
                    var u = 0,
                        c = 0;
                    return function() {
                        var h = bO(),
                            w = B - (h - c);
                        if (c = h, w > 0) {
                            if (++u >= G) return arguments[0]
                        } else u = 0;
                        return o.apply(n, arguments)
                    }
                }

                function ga(o, u) {
                    var c = -1,
                        h = o.length,
                        w = h - 1;
                    for (u = u === n ? h : u; ++c < u;) {
                        var _ = Pd(c, w),
                            R = o[_];
                        o[_] = o[c], o[c] = R
                    }
                    return o.length = u, o
                }
                var O0 = rI(function(o) {
                    var u = [];
                    return o.charCodeAt(0) === 46 && u.push(""), o.replace(X_, function(c, h, w, _) {
                        u.push(w ? _.replace(ob, "$1") : h || c)
                    }), u
                });

                function Pr(o) {
                    if (typeof o == "string" || In(o)) return o;
                    var u = o + "";
                    return u == "0" && 1 / o == -oe ? "-0" : u
                }

                function yo(o) {
                    if (o != null) {
                        try {
                            return Ws.call(o)
                        } catch {}
                        try {
                            return o + ""
                        } catch {}
                    }
                    return ""
                }

                function sI(o, u) {
                    return Kn(de, function(c) {
                        var h = "_." + c[0];
                        u & c[1] && !$s(o, h) && o.push(h)
                    }), o.sort()
                }

                function T0(o) {
                    if (o instanceof Me) return o.clone();
                    var u = new Yn(o.__wrapped__, o.__chain__);
                    return u.__actions__ = sn(o.__actions__), u.__index__ = o.__index__, u.__values__ = o.__values__, u
                }

                function aI(o, u, c) {
                    (c ? en(o, u, c) : u === n) ? u = 1: u = Ot(Oe(u), 0);
                    var h = o == null ? 0 : o.length;
                    if (!h || u < 1) return [];
                    for (var w = 0, _ = 0, R = H(Xs(h / u)); w < h;) R[_++] = Zn(o, w, w += u);
                    return R
                }

                function cI(o) {
                    for (var u = -1, c = o == null ? 0 : o.length, h = 0, w = []; ++u < c;) {
                        var _ = o[u];
                        _ && (w[h++] = _)
                    }
                    return w
                }

                function fI() {
                    var o = arguments.length;
                    if (!o) return [];
                    for (var u = H(o - 1), c = arguments[0], h = o; h--;) u[h - 1] = arguments[h];
                    return wi(ke(c) ? sn(c) : [c], Ft(u, 1))
                }
                var dI = Pe(function(o, u) {
                        return St(o) ? gu(o, Ft(u, 1, St, !0)) : []
                    }),
                    pI = Pe(function(o, u) {
                        var c = Jn(u);
                        return St(c) && (c = n), St(o) ? gu(o, Ft(u, 1, St, !0), ge(c, 2)) : []
                    }),
                    hI = Pe(function(o, u) {
                        var c = Jn(u);
                        return St(c) && (c = n), St(o) ? gu(o, Ft(u, 1, St, !0), n, c) : []
                    });

                function gI(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    return h ? (u = c || u === n ? 1 : Oe(u), Zn(o, u < 0 ? 0 : u, h)) : []
                }

                function mI(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    return h ? (u = c || u === n ? 1 : Oe(u), u = h - u, Zn(o, 0, u < 0 ? 0 : u)) : []
                }

                function vI(o, u) {
                    return o && o.length ? ua(o, ge(u, 3), !0, !0) : []
                }

                function yI(o, u) {
                    return o && o.length ? ua(o, ge(u, 3), !0) : []
                }

                function wI(o, u, c, h) {
                    var w = o == null ? 0 : o.length;
                    return w ? (c && typeof c != "number" && en(o, u, c) && (c = 0, h = w), fT(o, u, c, h)) : []
                }

                function I0(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    if (!h) return -1;
                    var w = c == null ? 0 : Oe(c);
                    return w < 0 && (w = Ot(h + w, 0)), Bs(o, ge(u, 3), w)
                }

                function R0(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    if (!h) return -1;
                    var w = h - 1;
                    return c !== n && (w = Oe(c), w = c < 0 ? Ot(h + w, 0) : jt(w, h - 1)), Bs(o, ge(u, 3), w, !0)
                }

                function P0(o) {
                    var u = o == null ? 0 : o.length;
                    return u ? Ft(o, 1) : []
                }

                function xI(o) {
                    var u = o == null ? 0 : o.length;
                    return u ? Ft(o, oe) : []
                }

                function SI(o, u) {
                    var c = o == null ? 0 : o.length;
                    return c ? (u = u === n ? 1 : Oe(u), Ft(o, u)) : []
                }

                function EI(o) {
                    for (var u = -1, c = o == null ? 0 : o.length, h = {}; ++u < c;) {
                        var w = o[u];
                        h[w[0]] = w[1]
                    }
                    return h
                }

                function A0(o) {
                    return o && o.length ? o[0] : n
                }

                function CI(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    if (!h) return -1;
                    var w = c == null ? 0 : Oe(c);
                    return w < 0 && (w = Ot(h + w, 0)), Qo(o, u, w)
                }

                function kI(o) {
                    var u = o == null ? 0 : o.length;
                    return u ? Zn(o, 0, -1) : []
                }
                var _I = Pe(function(o) {
                        var u = ct(o, Ld);
                        return u.length && u[0] === o[0] ? bd(u) : []
                    }),
                    bI = Pe(function(o) {
                        var u = Jn(o),
                            c = ct(o, Ld);
                        return u === Jn(c) ? u = n : c.pop(), c.length && c[0] === o[0] ? bd(c, ge(u, 2)) : []
                    }),
                    OI = Pe(function(o) {
                        var u = Jn(o),
                            c = ct(o, Ld);
                        return u = typeof u == "function" ? u : n, u && c.pop(), c.length && c[0] === o[0] ? bd(c, n, u) : []
                    });

                function TI(o, u) {
                    return o == null ? "" : kO.call(o, u)
                }

                function Jn(o) {
                    var u = o == null ? 0 : o.length;
                    return u ? o[u - 1] : n
                }

                function II(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    if (!h) return -1;
                    var w = h;
                    return c !== n && (w = Oe(c), w = w < 0 ? Ot(h + w, 0) : jt(w, h - 1)), u === u ? sO(o, u, w) : Bs(o, dy, w, !0)
                }

                function RI(o, u) {
                    return o && o.length ? jy(o, Oe(u)) : n
                }
                var PI = Pe(D0);

                function D0(o, u) {
                    return o && o.length && u && u.length ? Rd(o, u) : o
                }

                function AI(o, u, c) {
                    return o && o.length && u && u.length ? Rd(o, u, ge(c, 2)) : o
                }

                function DI(o, u, c) {
                    return o && o.length && u && u.length ? Rd(o, u, n, c) : o
                }
                var NI = Xr(function(o, u) {
                    var c = o == null ? 0 : o.length,
                        h = Ed(o, u);
                    return qy(o, ct(u, function(w) {
                        return Zr(w, c) ? +w : w
                    }).sort(n0)), h
                });

                function MI(o, u) {
                    var c = [];
                    if (!(o && o.length)) return c;
                    var h = -1,
                        w = [],
                        _ = o.length;
                    for (u = ge(u, 3); ++h < _;) {
                        var R = o[h];
                        u(R, h, o) && (c.push(R), w.push(h))
                    }
                    return qy(o, w), c
                }

                function Yd(o) {
                    return o == null ? o : TO.call(o)
                }

                function LI(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    return h ? (c && typeof c != "number" && en(o, u, c) ? (u = 0, c = h) : (u = u == null ? 0 : Oe(u), c = c === n ? h : Oe(c)), Zn(o, u, c)) : []
                }

                function FI(o, u) {
                    return la(o, u)
                }

                function zI(o, u, c) {
                    return Dd(o, u, ge(c, 2))
                }

                function $I(o, u) {
                    var c = o == null ? 0 : o.length;
                    if (c) {
                        var h = la(o, u);
                        if (h < c && mr(o[h], u)) return h
                    }
                    return -1
                }

                function BI(o, u) {
                    return la(o, u, !0)
                }

                function UI(o, u, c) {
                    return Dd(o, u, ge(c, 2), !0)
                }

                function HI(o, u) {
                    var c = o == null ? 0 : o.length;
                    if (c) {
                        var h = la(o, u, !0) - 1;
                        if (mr(o[h], u)) return h
                    }
                    return -1
                }

                function jI(o) {
                    return o && o.length ? Ky(o) : []
                }

                function WI(o, u) {
                    return o && o.length ? Ky(o, ge(u, 2)) : []
                }

                function VI(o) {
                    var u = o == null ? 0 : o.length;
                    return u ? Zn(o, 1, u) : []
                }

                function qI(o, u, c) {
                    return o && o.length ? (u = c || u === n ? 1 : Oe(u), Zn(o, 0, u < 0 ? 0 : u)) : []
                }

                function GI(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    return h ? (u = c || u === n ? 1 : Oe(u), u = h - u, Zn(o, u < 0 ? 0 : u, h)) : []
                }

                function KI(o, u) {
                    return o && o.length ? ua(o, ge(u, 3), !1, !0) : []
                }

                function QI(o, u) {
                    return o && o.length ? ua(o, ge(u, 3)) : []
                }
                var YI = Pe(function(o) {
                        return Ci(Ft(o, 1, St, !0))
                    }),
                    XI = Pe(function(o) {
                        var u = Jn(o);
                        return St(u) && (u = n), Ci(Ft(o, 1, St, !0), ge(u, 2))
                    }),
                    ZI = Pe(function(o) {
                        var u = Jn(o);
                        return u = typeof u == "function" ? u : n, Ci(Ft(o, 1, St, !0), n, u)
                    });

                function JI(o) {
                    return o && o.length ? Ci(o) : []
                }

                function eR(o, u) {
                    return o && o.length ? Ci(o, ge(u, 2)) : []
                }

                function tR(o, u) {
                    return u = typeof u == "function" ? u : n, o && o.length ? Ci(o, n, u) : []
                }

                function Xd(o) {
                    if (!(o && o.length)) return [];
                    var u = 0;
                    return o = yi(o, function(c) {
                        if (St(c)) return u = Ot(c.length, u), !0
                    }), hd(u, function(c) {
                        return ct(o, fd(c))
                    })
                }

                function N0(o, u) {
                    if (!(o && o.length)) return [];
                    var c = Xd(o);
                    return u == null ? c : ct(c, function(h) {
                        return bn(u, n, h)
                    })
                }
                var nR = Pe(function(o, u) {
                        return St(o) ? gu(o, u) : []
                    }),
                    rR = Pe(function(o) {
                        return Md(yi(o, St))
                    }),
                    iR = Pe(function(o) {
                        var u = Jn(o);
                        return St(u) && (u = n), Md(yi(o, St), ge(u, 2))
                    }),
                    oR = Pe(function(o) {
                        var u = Jn(o);
                        return u = typeof u == "function" ? u : n, Md(yi(o, St), n, u)
                    }),
                    lR = Pe(Xd);

                function uR(o, u) {
                    return Zy(o || [], u || [], hu)
                }

                function sR(o, u) {
                    return Zy(o || [], u || [], yu)
                }
                var aR = Pe(function(o) {
                    var u = o.length,
                        c = u > 1 ? o[u - 1] : n;
                    return c = typeof c == "function" ? (o.pop(), c) : n, N0(o, c)
                });

                function M0(o) {
                    var u = C(o);
                    return u.__chain__ = !0, u
                }

                function cR(o, u) {
                    return u(o), o
                }

                function ma(o, u) {
                    return u(o)
                }
                var fR = Xr(function(o) {
                    var u = o.length,
                        c = u ? o[0] : 0,
                        h = this.__wrapped__,
                        w = function(_) {
                            return Ed(_, o)
                        };
                    return u > 1 || this.__actions__.length || !(h instanceof Me) || !Zr(c) ? this.thru(w) : (h = h.slice(c, +c + (u ? 1 : 0)), h.__actions__.push({
                        func: ma,
                        args: [w],
                        thisArg: n
                    }), new Yn(h, this.__chain__).thru(function(_) {
                        return u && !_.length && _.push(n), _
                    }))
                });

                function dR() {
                    return M0(this)
                }

                function pR() {
                    return new Yn(this.value(), this.__chain__)
                }

                function hR() {
                    this.__values__ === n && (this.__values__ = Q0(this.value()));
                    var o = this.__index__ >= this.__values__.length,
                        u = o ? n : this.__values__[this.__index__++];
                    return {
                        done: o,
                        value: u
                    }
                }

                function gR() {
                    return this
                }

                function mR(o) {
                    for (var u, c = this; c instanceof ta;) {
                        var h = T0(c);
                        h.__index__ = 0, h.__values__ = n, u ? w.__wrapped__ = h : u = h;
                        var w = h;
                        c = c.__wrapped__
                    }
                    return w.__wrapped__ = o, u
                }

                function vR() {
                    var o = this.__wrapped__;
                    if (o instanceof Me) {
                        var u = o;
                        return this.__actions__.length && (u = new Me(this)), u = u.reverse(), u.__actions__.push({
                            func: ma,
                            args: [Yd],
                            thisArg: n
                        }), new Yn(u, this.__chain__)
                    }
                    return this.thru(Yd)
                }

                function yR() {
                    return Xy(this.__wrapped__, this.__actions__)
                }
                var wR = sa(function(o, u, c) {
                    Ke.call(o, c) ? ++o[c] : Qr(o, c, 1)
                });

                function xR(o, u, c) {
                    var h = ke(o) ? cy : cT;
                    return c && en(o, u, c) && (u = n), h(o, ge(u, 3))
                }

                function SR(o, u) {
                    var c = ke(o) ? yi : Ny;
                    return c(o, ge(u, 3))
                }
                var ER = s0(I0),
                    CR = s0(R0);

                function kR(o, u) {
                    return Ft(va(o, u), 1)
                }

                function _R(o, u) {
                    return Ft(va(o, u), oe)
                }

                function bR(o, u, c) {
                    return c = c === n ? 1 : Oe(c), Ft(va(o, u), c)
                }

                function L0(o, u) {
                    var c = ke(o) ? Kn : Ei;
                    return c(o, ge(u, 3))
                }

                function F0(o, u) {
                    var c = ke(o) ? Vb : Dy;
                    return c(o, ge(u, 3))
                }
                var OR = sa(function(o, u, c) {
                    Ke.call(o, c) ? o[c].push(u) : Qr(o, c, [u])
                });

                function TR(o, u, c, h) {
                    o = an(o) ? o : ul(o), c = c && !h ? Oe(c) : 0;
                    var w = o.length;
                    return c < 0 && (c = Ot(w + c, 0)), Ea(o) ? c <= w && o.indexOf(u, c) > -1 : !!w && Qo(o, u, c) > -1
                }
                var IR = Pe(function(o, u, c) {
                        var h = -1,
                            w = typeof u == "function",
                            _ = an(o) ? H(o.length) : [];
                        return Ei(o, function(R) {
                            _[++h] = w ? bn(u, R, c) : mu(R, u, c)
                        }), _
                    }),
                    RR = sa(function(o, u, c) {
                        Qr(o, c, u)
                    });

                function va(o, u) {
                    var c = ke(o) ? ct : By;
                    return c(o, ge(u, 3))
                }

                function PR(o, u, c, h) {
                    return o == null ? [] : (ke(u) || (u = u == null ? [] : [u]), c = h ? n : c, ke(c) || (c = c == null ? [] : [c]), Wy(o, u, c))
                }
                var AR = sa(function(o, u, c) {
                    o[c ? 0 : 1].push(u)
                }, function() {
                    return [
                        [],
                        []
                    ]
                });

                function DR(o, u, c) {
                    var h = ke(o) ? ad : hy,
                        w = arguments.length < 3;
                    return h(o, ge(u, 4), c, w, Ei)
                }

                function NR(o, u, c) {
                    var h = ke(o) ? qb : hy,
                        w = arguments.length < 3;
                    return h(o, ge(u, 4), c, w, Dy)
                }

                function MR(o, u) {
                    var c = ke(o) ? yi : Ny;
                    return c(o, xa(ge(u, 3)))
                }

                function LR(o) {
                    var u = ke(o) ? Iy : TT;
                    return u(o)
                }

                function FR(o, u, c) {
                    (c ? en(o, u, c) : u === n) ? u = 1: u = Oe(u);
                    var h = ke(o) ? oT : IT;
                    return h(o, u)
                }

                function zR(o) {
                    var u = ke(o) ? lT : PT;
                    return u(o)
                }

                function $R(o) {
                    if (o == null) return 0;
                    if (an(o)) return Ea(o) ? Xo(o) : o.length;
                    var u = Wt(o);
                    return u == yt || u == Ht ? o.size : Td(o).length
                }

                function BR(o, u, c) {
                    var h = ke(o) ? cd : AT;
                    return c && en(o, u, c) && (u = n), h(o, ge(u, 3))
                }
                var UR = Pe(function(o, u) {
                        if (o == null) return [];
                        var c = u.length;
                        return c > 1 && en(o, u[0], u[1]) ? u = [] : c > 2 && en(u[0], u[1], u[2]) && (u = [u[0]]), Wy(o, Ft(u, 1), [])
                    }),
                    ya = SO || function() {
                        return Lt.Date.now()
                    };

                function HR(o, u) {
                    if (typeof u != "function") throw new Qn(s);
                    return o = Oe(o),
                        function() {
                            if (--o < 1) return u.apply(this, arguments)
                        }
                }

                function z0(o, u, c) {
                    return u = c ? n : u, u = o && u == null ? o.length : u, Yr(o, F, n, n, n, n, u)
                }

                function $0(o, u) {
                    var c;
                    if (typeof u != "function") throw new Qn(s);
                    return o = Oe(o),
                        function() {
                            return --o > 0 && (c = u.apply(this, arguments)), o <= 1 && (u = n), c
                        }
                }
                var Zd = Pe(function(o, u, c) {
                        var h = A;
                        if (c.length) {
                            var w = xi(c, ol(Zd));
                            h |= N
                        }
                        return Yr(o, h, u, c, w)
                    }),
                    B0 = Pe(function(o, u, c) {
                        var h = A | y;
                        if (c.length) {
                            var w = xi(c, ol(B0));
                            h |= N
                        }
                        return Yr(u, h, o, c, w)
                    });

                function U0(o, u, c) {
                    u = c ? n : u;
                    var h = Yr(o, k, n, n, n, n, n, u);
                    return h.placeholder = U0.placeholder, h
                }

                function H0(o, u, c) {
                    u = c ? n : u;
                    var h = Yr(o, P, n, n, n, n, n, u);
                    return h.placeholder = H0.placeholder, h
                }

                function j0(o, u, c) {
                    var h, w, _, R, D, L, Y = 0,
                        X = !1,
                        ee = !1,
                        le = !0;
                    if (typeof o != "function") throw new Qn(s);
                    u = er(u) || 0, ht(c) && (X = !!c.leading, ee = "maxWait" in c, _ = ee ? Ot(er(c.maxWait) || 0, u) : _, le = "trailing" in c ? !!c.trailing : le);

                    function fe(Et) {
                        var vr = h,
                            ti = w;
                        return h = w = n, Y = Et, R = o.apply(ti, vr), R
                    }

                    function ve(Et) {
                        return Y = Et, D = Su(De, u), X ? fe(Et) : R
                    }

                    function Ie(Et) {
                        var vr = Et - L,
                            ti = Et - Y,
                            s1 = u - vr;
                        return ee ? jt(s1, _ - ti) : s1
                    }

                    function ye(Et) {
                        var vr = Et - L,
                            ti = Et - Y;
                        return L === n || vr >= u || vr < 0 || ee && ti >= _
                    }

                    function De() {
                        var Et = ya();
                        if (ye(Et)) return ze(Et);
                        D = Su(De, Ie(Et))
                    }

                    function ze(Et) {
                        return D = n, le && h ? fe(Et) : (h = w = n, R)
                    }

                    function Rn() {
                        D !== n && Jy(D), Y = 0, h = L = w = D = n
                    }

                    function tn() {
                        return D === n ? R : ze(ya())
                    }

                    function Pn() {
                        var Et = ya(),
                            vr = ye(Et);
                        if (h = arguments, w = this, L = Et, vr) {
                            if (D === n) return ve(L);
                            if (ee) return Jy(D), D = Su(De, u), fe(L)
                        }
                        return D === n && (D = Su(De, u)), R
                    }
                    return Pn.cancel = Rn, Pn.flush = tn, Pn
                }
                var jR = Pe(function(o, u) {
                        return Ay(o, 1, u)
                    }),
                    WR = Pe(function(o, u, c) {
                        return Ay(o, er(u) || 0, c)
                    });

                function VR(o) {
                    return Yr(o, q)
                }

                function wa(o, u) {
                    if (typeof o != "function" || u != null && typeof u != "function") throw new Qn(s);
                    var c = function() {
                        var h = arguments,
                            w = u ? u.apply(this, h) : h[0],
                            _ = c.cache;
                        if (_.has(w)) return _.get(w);
                        var R = o.apply(this, h);
                        return c.cache = _.set(w, R) || _, R
                    };
                    return c.cache = new(wa.Cache || Kr), c
                }
                wa.Cache = Kr;

                function xa(o) {
                    if (typeof o != "function") throw new Qn(s);
                    return function() {
                        var u = arguments;
                        switch (u.length) {
                            case 0:
                                return !o.call(this);
                            case 1:
                                return !o.call(this, u[0]);
                            case 2:
                                return !o.call(this, u[0], u[1]);
                            case 3:
                                return !o.call(this, u[0], u[1], u[2])
                        }
                        return !o.apply(this, u)
                    }
                }

                function qR(o) {
                    return $0(2, o)
                }
                var GR = DT(function(o, u) {
                        u = u.length == 1 && ke(u[0]) ? ct(u[0], On(ge())) : ct(Ft(u, 1), On(ge()));
                        var c = u.length;
                        return Pe(function(h) {
                            for (var w = -1, _ = jt(h.length, c); ++w < _;) h[w] = u[w].call(this, h[w]);
                            return bn(o, this, h)
                        })
                    }),
                    Jd = Pe(function(o, u) {
                        var c = xi(u, ol(Jd));
                        return Yr(o, N, n, u, c)
                    }),
                    W0 = Pe(function(o, u) {
                        var c = xi(u, ol(W0));
                        return Yr(o, T, n, u, c)
                    }),
                    KR = Xr(function(o, u) {
                        return Yr(o, z, n, n, n, u)
                    });

                function QR(o, u) {
                    if (typeof o != "function") throw new Qn(s);
                    return u = u === n ? u : Oe(u), Pe(o, u)
                }

                function YR(o, u) {
                    if (typeof o != "function") throw new Qn(s);
                    return u = u == null ? 0 : Ot(Oe(u), 0), Pe(function(c) {
                        var h = c[u],
                            w = _i(c, 0, u);
                        return h && wi(w, h), bn(o, this, w)
                    })
                }

                function XR(o, u, c) {
                    var h = !0,
                        w = !0;
                    if (typeof o != "function") throw new Qn(s);
                    return ht(c) && (h = "leading" in c ? !!c.leading : h, w = "trailing" in c ? !!c.trailing : w), j0(o, u, {
                        leading: h,
                        maxWait: u,
                        trailing: w
                    })
                }

                function ZR(o) {
                    return z0(o, 1)
                }

                function JR(o, u) {
                    return Jd(Fd(u), o)
                }

                function eP() {
                    if (!arguments.length) return [];
                    var o = arguments[0];
                    return ke(o) ? o : [o]
                }

                function tP(o) {
                    return Xn(o, m)
                }

                function nP(o, u) {
                    return u = typeof u == "function" ? u : n, Xn(o, m, u)
                }

                function rP(o) {
                    return Xn(o, g | m)
                }

                function iP(o, u) {
                    return u = typeof u == "function" ? u : n, Xn(o, g | m, u)
                }

                function oP(o, u) {
                    return u == null || Py(o, u, Rt(u))
                }

                function mr(o, u) {
                    return o === u || o !== o && u !== u
                }
                var lP = da(_d),
                    uP = da(function(o, u) {
                        return o >= u
                    }),
                    wo = Fy(function() {
                        return arguments
                    }()) ? Fy : function(o) {
                        return wt(o) && Ke.call(o, "callee") && !Cy.call(o, "callee")
                    },
                    ke = H.isArray,
                    sP = iy ? On(iy) : mT;

                function an(o) {
                    return o != null && Sa(o.length) && !Jr(o)
                }

                function St(o) {
                    return wt(o) && an(o)
                }

                function aP(o) {
                    return o === !0 || o === !1 || wt(o) && Jt(o) == Se
                }
                var bi = CO || cp,
                    cP = oy ? On(oy) : vT;

                function fP(o) {
                    return wt(o) && o.nodeType === 1 && !Eu(o)
                }

                function dP(o) {
                    if (o == null) return !0;
                    if (an(o) && (ke(o) || typeof o == "string" || typeof o.splice == "function" || bi(o) || ll(o) || wo(o))) return !o.length;
                    var u = Wt(o);
                    if (u == yt || u == Ht) return !o.size;
                    if (xu(o)) return !Td(o).length;
                    for (var c in o)
                        if (Ke.call(o, c)) return !1;
                    return !0
                }

                function pP(o, u) {
                    return vu(o, u)
                }

                function hP(o, u, c) {
                    c = typeof c == "function" ? c : n;
                    var h = c ? c(o, u) : n;
                    return h === n ? vu(o, u, n, c) : !!h
                }

                function ep(o) {
                    if (!wt(o)) return !1;
                    var u = Jt(o);
                    return u == Be || u == Te || typeof o.message == "string" && typeof o.name == "string" && !Eu(o)
                }

                function gP(o) {
                    return typeof o == "number" && _y(o)
                }

                function Jr(o) {
                    if (!ht(o)) return !1;
                    var u = Jt(o);
                    return u == Fe || u == Ge || u == Ae || u == Cn
                }

                function V0(o) {
                    return typeof o == "number" && o == Oe(o)
                }

                function Sa(o) {
                    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= j
                }

                function ht(o) {
                    var u = typeof o;
                    return o != null && (u == "object" || u == "function")
                }

                function wt(o) {
                    return o != null && typeof o == "object"
                }
                var q0 = ly ? On(ly) : wT;

                function mP(o, u) {
                    return o === u || Od(o, u, Wd(u))
                }

                function vP(o, u, c) {
                    return c = typeof c == "function" ? c : n, Od(o, u, Wd(u), c)
                }

                function yP(o) {
                    return G0(o) && o != +o
                }

                function wP(o) {
                    if (nI(o)) throw new Ee(l);
                    return zy(o)
                }

                function xP(o) {
                    return o === null
                }

                function SP(o) {
                    return o == null
                }

                function G0(o) {
                    return typeof o == "number" || wt(o) && Jt(o) == Wn
                }

                function Eu(o) {
                    if (!wt(o) || Jt(o) != at) return !1;
                    var u = Ks(o);
                    if (u === null) return !0;
                    var c = Ke.call(u, "constructor") && u.constructor;
                    return typeof c == "function" && c instanceof c && Ws.call(c) == vO
                }
                var tp = uy ? On(uy) : xT;

                function EP(o) {
                    return V0(o) && o >= -j && o <= j
                }
                var K0 = sy ? On(sy) : ST;

                function Ea(o) {
                    return typeof o == "string" || !ke(o) && wt(o) && Jt(o) == Or
                }

                function In(o) {
                    return typeof o == "symbol" || wt(o) && Jt(o) == Wr
                }
                var ll = ay ? On(ay) : ET;

                function CP(o) {
                    return o === n
                }

                function kP(o) {
                    return wt(o) && Wt(o) == Tr
                }

                function _P(o) {
                    return wt(o) && Jt(o) == Vn
                }
                var bP = da(Id),
                    OP = da(function(o, u) {
                        return o <= u
                    });

                function Q0(o) {
                    if (!o) return [];
                    if (an(o)) return Ea(o) ? hr(o) : sn(o);
                    if (au && o[au]) return oO(o[au]());
                    var u = Wt(o),
                        c = u == yt ? md : u == Ht ? Us : ul;
                    return c(o)
                }

                function ei(o) {
                    if (!o) return o === 0 ? o : 0;
                    if (o = er(o), o === oe || o === -oe) {
                        var u = o < 0 ? -1 : 1;
                        return u * J
                    }
                    return o === o ? o : 0
                }

                function Oe(o) {
                    var u = ei(o),
                        c = u % 1;
                    return u === u ? c ? u - c : u : 0
                }

                function Y0(o) {
                    return o ? go(Oe(o), 0, ne) : 0
                }

                function er(o) {
                    if (typeof o == "number") return o;
                    if (In(o)) return b;
                    if (ht(o)) {
                        var u = typeof o.valueOf == "function" ? o.valueOf() : o;
                        o = ht(u) ? u + "" : u
                    }
                    if (typeof o != "string") return o === 0 ? o : +o;
                    o = gy(o);
                    var c = sb.test(o);
                    return c || cb.test(o) ? Hb(o.slice(2), c ? 2 : 8) : ub.test(o) ? b : +o
                }

                function X0(o) {
                    return Rr(o, cn(o))
                }

                function TP(o) {
                    return o ? go(Oe(o), -j, j) : o === 0 ? o : 0
                }

                function qe(o) {
                    return o == null ? "" : Tn(o)
                }
                var IP = rl(function(o, u) {
                        if (xu(u) || an(u)) {
                            Rr(u, Rt(u), o);
                            return
                        }
                        for (var c in u) Ke.call(u, c) && hu(o, c, u[c])
                    }),
                    Z0 = rl(function(o, u) {
                        Rr(u, cn(u), o)
                    }),
                    Ca = rl(function(o, u, c, h) {
                        Rr(u, cn(u), o, h)
                    }),
                    RP = rl(function(o, u, c, h) {
                        Rr(u, Rt(u), o, h)
                    }),
                    PP = Xr(Ed);

                function AP(o, u) {
                    var c = nl(o);
                    return u == null ? c : Ry(c, u)
                }
                var DP = Pe(function(o, u) {
                        o = Je(o);
                        var c = -1,
                            h = u.length,
                            w = h > 2 ? u[2] : n;
                        for (w && en(u[0], u[1], w) && (h = 1); ++c < h;)
                            for (var _ = u[c], R = cn(_), D = -1, L = R.length; ++D < L;) {
                                var Y = R[D],
                                    X = o[Y];
                                (X === n || mr(X, Jo[Y]) && !Ke.call(o, Y)) && (o[Y] = _[Y])
                            }
                        return o
                    }),
                    NP = Pe(function(o) {
                        return o.push(n, g0), bn(J0, n, o)
                    });

                function MP(o, u) {
                    return fy(o, ge(u, 3), Ir)
                }

                function LP(o, u) {
                    return fy(o, ge(u, 3), kd)
                }

                function FP(o, u) {
                    return o == null ? o : Cd(o, ge(u, 3), cn)
                }

                function zP(o, u) {
                    return o == null ? o : My(o, ge(u, 3), cn)
                }

                function $P(o, u) {
                    return o && Ir(o, ge(u, 3))
                }

                function BP(o, u) {
                    return o && kd(o, ge(u, 3))
                }

                function UP(o) {
                    return o == null ? [] : ia(o, Rt(o))
                }

                function HP(o) {
                    return o == null ? [] : ia(o, cn(o))
                }

                function np(o, u, c) {
                    var h = o == null ? n : mo(o, u);
                    return h === n ? c : h
                }

                function jP(o, u) {
                    return o != null && y0(o, u, dT)
                }

                function rp(o, u) {
                    return o != null && y0(o, u, pT)
                }
                var WP = c0(function(o, u, c) {
                        u != null && typeof u.toString != "function" && (u = Vs.call(u)), o[u] = c
                    }, op(fn)),
                    VP = c0(function(o, u, c) {
                        u != null && typeof u.toString != "function" && (u = Vs.call(u)), Ke.call(o, u) ? o[u].push(c) : o[u] = [c]
                    }, ge),
                    qP = Pe(mu);

                function Rt(o) {
                    return an(o) ? Ty(o) : Td(o)
                }

                function cn(o) {
                    return an(o) ? Ty(o, !0) : CT(o)
                }

                function GP(o, u) {
                    var c = {};
                    return u = ge(u, 3), Ir(o, function(h, w, _) {
                        Qr(c, u(h, w, _), h)
                    }), c
                }

                function KP(o, u) {
                    var c = {};
                    return u = ge(u, 3), Ir(o, function(h, w, _) {
                        Qr(c, w, u(h, w, _))
                    }), c
                }
                var QP = rl(function(o, u, c) {
                        oa(o, u, c)
                    }),
                    J0 = rl(function(o, u, c, h) {
                        oa(o, u, c, h)
                    }),
                    YP = Xr(function(o, u) {
                        var c = {};
                        if (o == null) return c;
                        var h = !1;
                        u = ct(u, function(_) {
                            return _ = ki(_, o), h || (h = _.length > 1), _
                        }), Rr(o, Hd(o), c), h && (c = Xn(c, g | v | m, WT));
                        for (var w = u.length; w--;) Nd(c, u[w]);
                        return c
                    });

                function XP(o, u) {
                    return e1(o, xa(ge(u)))
                }
                var ZP = Xr(function(o, u) {
                    return o == null ? {} : _T(o, u)
                });

                function e1(o, u) {
                    if (o == null) return {};
                    var c = ct(Hd(o), function(h) {
                        return [h]
                    });
                    return u = ge(u), Vy(o, c, function(h, w) {
                        return u(h, w[0])
                    })
                }

                function JP(o, u, c) {
                    u = ki(u, o);
                    var h = -1,
                        w = u.length;
                    for (w || (w = 1, o = n); ++h < w;) {
                        var _ = o == null ? n : o[Pr(u[h])];
                        _ === n && (h = w, _ = c), o = Jr(_) ? _.call(o) : _
                    }
                    return o
                }

                function e2(o, u, c) {
                    return o == null ? o : yu(o, u, c)
                }

                function t2(o, u, c, h) {
                    return h = typeof h == "function" ? h : n, o == null ? o : yu(o, u, c, h)
                }
                var t1 = p0(Rt),
                    n1 = p0(cn);

                function n2(o, u, c) {
                    var h = ke(o),
                        w = h || bi(o) || ll(o);
                    if (u = ge(u, 4), c == null) {
                        var _ = o && o.constructor;
                        w ? c = h ? new _ : [] : ht(o) ? c = Jr(_) ? nl(Ks(o)) : {} : c = {}
                    }
                    return (w ? Kn : Ir)(o, function(R, D, L) {
                        return u(c, R, D, L)
                    }), c
                }

                function r2(o, u) {
                    return o == null ? !0 : Nd(o, u)
                }

                function i2(o, u, c) {
                    return o == null ? o : Yy(o, u, Fd(c))
                }

                function o2(o, u, c, h) {
                    return h = typeof h == "function" ? h : n, o == null ? o : Yy(o, u, Fd(c), h)
                }

                function ul(o) {
                    return o == null ? [] : gd(o, Rt(o))
                }

                function l2(o) {
                    return o == null ? [] : gd(o, cn(o))
                }

                function u2(o, u, c) {
                    return c === n && (c = u, u = n), c !== n && (c = er(c), c = c === c ? c : 0), u !== n && (u = er(u), u = u === u ? u : 0), go(er(o), u, c)
                }

                function s2(o, u, c) {
                    return u = ei(u), c === n ? (c = u, u = 0) : c = ei(c), o = er(o), hT(o, u, c)
                }

                function a2(o, u, c) {
                    if (c && typeof c != "boolean" && en(o, u, c) && (u = c = n), c === n && (typeof u == "boolean" ? (c = u, u = n) : typeof o == "boolean" && (c = o, o = n)), o === n && u === n ? (o = 0, u = 1) : (o = ei(o), u === n ? (u = o, o = 0) : u = ei(u)), o > u) {
                        var h = o;
                        o = u, u = h
                    }
                    if (c || o % 1 || u % 1) {
                        var w = by();
                        return jt(o + w * (u - o + Ub("1e-" + ((w + "").length - 1))), u)
                    }
                    return Pd(o, u)
                }
                var c2 = il(function(o, u, c) {
                    return u = u.toLowerCase(), o + (c ? r1(u) : u)
                });

                function r1(o) {
                    return ip(qe(o).toLowerCase())
                }

                function i1(o) {
                    return o = qe(o), o && o.replace(db, eO).replace(Pb, "")
                }

                function f2(o, u, c) {
                    o = qe(o), u = Tn(u);
                    var h = o.length;
                    c = c === n ? h : go(Oe(c), 0, h);
                    var w = c;
                    return c -= u.length, c >= 0 && o.slice(c, w) == u
                }

                function d2(o) {
                    return o = qe(o), o && q_.test(o) ? o.replace(Mv, tO) : o
                }

                function p2(o) {
                    return o = qe(o), o && Z_.test(o) ? o.replace(Jf, "\\$&") : o
                }
                var h2 = il(function(o, u, c) {
                        return o + (c ? "-" : "") + u.toLowerCase()
                    }),
                    g2 = il(function(o, u, c) {
                        return o + (c ? " " : "") + u.toLowerCase()
                    }),
                    m2 = u0("toLowerCase");

                function v2(o, u, c) {
                    o = qe(o), u = Oe(u);
                    var h = u ? Xo(o) : 0;
                    if (!u || h >= u) return o;
                    var w = (u - h) / 2;
                    return fa(Zs(w), c) + o + fa(Xs(w), c)
                }

                function y2(o, u, c) {
                    o = qe(o), u = Oe(u);
                    var h = u ? Xo(o) : 0;
                    return u && h < u ? o + fa(u - h, c) : o
                }

                function w2(o, u, c) {
                    o = qe(o), u = Oe(u);
                    var h = u ? Xo(o) : 0;
                    return u && h < u ? fa(u - h, c) + o : o
                }

                function x2(o, u, c) {
                    return c || u == null ? u = 0 : u && (u = +u), OO(qe(o).replace(ed, ""), u || 0)
                }

                function S2(o, u, c) {
                    return (c ? en(o, u, c) : u === n) ? u = 1 : u = Oe(u), Ad(qe(o), u)
                }

                function E2() {
                    var o = arguments,
                        u = qe(o[0]);
                    return o.length < 3 ? u : u.replace(o[1], o[2])
                }
                var C2 = il(function(o, u, c) {
                    return o + (c ? "_" : "") + u.toLowerCase()
                });

                function k2(o, u, c) {
                    return c && typeof c != "number" && en(o, u, c) && (u = c = n), c = c === n ? ne : c >>> 0, c ? (o = qe(o), o && (typeof u == "string" || u != null && !tp(u)) && (u = Tn(u), !u && Yo(o)) ? _i(hr(o), 0, c) : o.split(u, c)) : []
                }
                var _2 = il(function(o, u, c) {
                    return o + (c ? " " : "") + ip(u)
                });

                function b2(o, u, c) {
                    return o = qe(o), c = c == null ? 0 : go(Oe(c), 0, o.length), u = Tn(u), o.slice(c, c + u.length) == u
                }

                function O2(o, u, c) {
                    var h = C.templateSettings;
                    c && en(o, u, c) && (u = n), o = qe(o), u = Ca({}, u, h, h0);
                    var w = Ca({}, u.imports, h.imports, h0),
                        _ = Rt(w),
                        R = gd(w, _),
                        D, L, Y = 0,
                        X = u.interpolate || Ls,
                        ee = "__p += '",
                        le = vd((u.escape || Ls).source + "|" + X.source + "|" + (X === Lv ? lb : Ls).source + "|" + (u.evaluate || Ls).source + "|$", "g"),
                        fe = "//# sourceURL=" + (Ke.call(u, "sourceURL") ? (u.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Lb + "]") + `
`;
                    o.replace(le, function(ye, De, ze, Rn, tn, Pn) {
                        return ze || (ze = Rn), ee += o.slice(Y, Pn).replace(pb, nO), De && (D = !0, ee += `' +
__e(` + De + `) +
'`), tn && (L = !0, ee += `';
` + tn + `;
__p += '`), ze && (ee += `' +
((__t = (` + ze + `)) == null ? '' : __t) +
'`), Y = Pn + ye.length, ye
                    }), ee += `';
`;
                    var ve = Ke.call(u, "variable") && u.variable;
                    if (!ve) ee = `with (obj) {
` + ee + `
}
`;
                    else if (ib.test(ve)) throw new Ee(a);
                    ee = (L ? ee.replace(uu, "") : ee).replace(pr, "$1").replace(W_, "$1;"), ee = "function(" + (ve || "obj") + `) {
` + (ve ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (D ? ", __e = _.escape" : "") + (L ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ee + `return __p
}`;
                    var Ie = l1(function() {
                        return je(_, fe + "return " + ee).apply(n, R)
                    });
                    if (Ie.source = ee, ep(Ie)) throw Ie;
                    return Ie
                }

                function T2(o) {
                    return qe(o).toLowerCase()
                }

                function I2(o) {
                    return qe(o).toUpperCase()
                }

                function R2(o, u, c) {
                    if (o = qe(o), o && (c || u === n)) return gy(o);
                    if (!o || !(u = Tn(u))) return o;
                    var h = hr(o),
                        w = hr(u),
                        _ = my(h, w),
                        R = vy(h, w) + 1;
                    return _i(h, _, R).join("")
                }

                function P2(o, u, c) {
                    if (o = qe(o), o && (c || u === n)) return o.slice(0, wy(o) + 1);
                    if (!o || !(u = Tn(u))) return o;
                    var h = hr(o),
                        w = vy(h, hr(u)) + 1;
                    return _i(h, 0, w).join("")
                }

                function A2(o, u, c) {
                    if (o = qe(o), o && (c || u === n)) return o.replace(ed, "");
                    if (!o || !(u = Tn(u))) return o;
                    var h = hr(o),
                        w = my(h, hr(u));
                    return _i(h, w).join("")
                }

                function D2(o, u) {
                    var c = Q,
                        h = $;
                    if (ht(u)) {
                        var w = "separator" in u ? u.separator : w;
                        c = "length" in u ? Oe(u.length) : c, h = "omission" in u ? Tn(u.omission) : h
                    }
                    o = qe(o);
                    var _ = o.length;
                    if (Yo(o)) {
                        var R = hr(o);
                        _ = R.length
                    }
                    if (c >= _) return o;
                    var D = c - Xo(h);
                    if (D < 1) return h;
                    var L = R ? _i(R, 0, D).join("") : o.slice(0, D);
                    if (w === n) return L + h;
                    if (R && (D += L.length - D), tp(w)) {
                        if (o.slice(D).search(w)) {
                            var Y, X = L;
                            for (w.global || (w = vd(w.source, qe(Fv.exec(w)) + "g")), w.lastIndex = 0; Y = w.exec(X);) var ee = Y.index;
                            L = L.slice(0, ee === n ? D : ee)
                        }
                    } else if (o.indexOf(Tn(w), D) != D) {
                        var le = L.lastIndexOf(w);
                        le > -1 && (L = L.slice(0, le))
                    }
                    return L + h
                }

                function N2(o) {
                    return o = qe(o), o && V_.test(o) ? o.replace(Nv, aO) : o
                }
                var M2 = il(function(o, u, c) {
                        return o + (c ? " " : "") + u.toUpperCase()
                    }),
                    ip = u0("toUpperCase");

                function o1(o, u, c) {
                    return o = qe(o), u = c ? n : u, u === n ? iO(o) ? dO(o) : Qb(o) : o.match(u) || []
                }
                var l1 = Pe(function(o, u) {
                        try {
                            return bn(o, n, u)
                        } catch (c) {
                            return ep(c) ? c : new Ee(c)
                        }
                    }),
                    L2 = Xr(function(o, u) {
                        return Kn(u, function(c) {
                            c = Pr(c), Qr(o, c, Zd(o[c], o))
                        }), o
                    });

                function F2(o) {
                    var u = o == null ? 0 : o.length,
                        c = ge();
                    return o = u ? ct(o, function(h) {
                        if (typeof h[1] != "function") throw new Qn(s);
                        return [c(h[0]), h[1]]
                    }) : [], Pe(function(h) {
                        for (var w = -1; ++w < u;) {
                            var _ = o[w];
                            if (bn(_[0], this, h)) return bn(_[1], this, h)
                        }
                    })
                }

                function z2(o) {
                    return aT(Xn(o, g))
                }

                function op(o) {
                    return function() {
                        return o
                    }
                }

                function $2(o, u) {
                    return o == null || o !== o ? u : o
                }
                var B2 = a0(),
                    U2 = a0(!0);

                function fn(o) {
                    return o
                }

                function lp(o) {
                    return $y(typeof o == "function" ? o : Xn(o, g))
                }

                function H2(o) {
                    return Uy(Xn(o, g))
                }

                function j2(o, u) {
                    return Hy(o, Xn(u, g))
                }
                var W2 = Pe(function(o, u) {
                        return function(c) {
                            return mu(c, o, u)
                        }
                    }),
                    V2 = Pe(function(o, u) {
                        return function(c) {
                            return mu(o, c, u)
                        }
                    });

                function up(o, u, c) {
                    var h = Rt(u),
                        w = ia(u, h);
                    c == null && !(ht(u) && (w.length || !h.length)) && (c = u, u = o, o = this, w = ia(u, Rt(u)));
                    var _ = !(ht(c) && "chain" in c) || !!c.chain,
                        R = Jr(o);
                    return Kn(w, function(D) {
                        var L = u[D];
                        o[D] = L, R && (o.prototype[D] = function() {
                            var Y = this.__chain__;
                            if (_ || Y) {
                                var X = o(this.__wrapped__),
                                    ee = X.__actions__ = sn(this.__actions__);
                                return ee.push({
                                    func: L,
                                    args: arguments,
                                    thisArg: o
                                }), X.__chain__ = Y, X
                            }
                            return L.apply(o, wi([this.value()], arguments))
                        })
                    }), o
                }

                function q2() {
                    return Lt._ === this && (Lt._ = yO), this
                }

                function sp() {}

                function G2(o) {
                    return o = Oe(o), Pe(function(u) {
                        return jy(u, o)
                    })
                }
                var K2 = $d(ct),
                    Q2 = $d(cy),
                    Y2 = $d(cd);

                function u1(o) {
                    return qd(o) ? fd(Pr(o)) : bT(o)
                }

                function X2(o) {
                    return function(u) {
                        return o == null ? n : mo(o, u)
                    }
                }
                var Z2 = f0(),
                    J2 = f0(!0);

                function ap() {
                    return []
                }

                function cp() {
                    return !1
                }

                function eA() {
                    return {}
                }

                function tA() {
                    return ""
                }

                function nA() {
                    return !0
                }

                function rA(o, u) {
                    if (o = Oe(o), o < 1 || o > j) return [];
                    var c = ne,
                        h = jt(o, ne);
                    u = ge(u), o -= ne;
                    for (var w = hd(h, u); ++c < o;) u(c);
                    return w
                }

                function iA(o) {
                    return ke(o) ? ct(o, Pr) : In(o) ? [o] : sn(O0(qe(o)))
                }

                function oA(o) {
                    var u = ++mO;
                    return qe(o) + u
                }
                var lA = ca(function(o, u) {
                        return o + u
                    }, 0),
                    uA = Bd("ceil"),
                    sA = ca(function(o, u) {
                        return o / u
                    }, 1),
                    aA = Bd("floor");

                function cA(o) {
                    return o && o.length ? ra(o, fn, _d) : n
                }

                function fA(o, u) {
                    return o && o.length ? ra(o, ge(u, 2), _d) : n
                }

                function dA(o) {
                    return py(o, fn)
                }

                function pA(o, u) {
                    return py(o, ge(u, 2))
                }

                function hA(o) {
                    return o && o.length ? ra(o, fn, Id) : n
                }

                function gA(o, u) {
                    return o && o.length ? ra(o, ge(u, 2), Id) : n
                }
                var mA = ca(function(o, u) {
                        return o * u
                    }, 1),
                    vA = Bd("round"),
                    yA = ca(function(o, u) {
                        return o - u
                    }, 0);

                function wA(o) {
                    return o && o.length ? pd(o, fn) : 0
                }

                function xA(o, u) {
                    return o && o.length ? pd(o, ge(u, 2)) : 0
                }
                return C.after = HR, C.ary = z0, C.assign = IP, C.assignIn = Z0, C.assignInWith = Ca, C.assignWith = RP, C.at = PP, C.before = $0, C.bind = Zd, C.bindAll = L2, C.bindKey = B0, C.castArray = eP, C.chain = M0, C.chunk = aI, C.compact = cI, C.concat = fI, C.cond = F2, C.conforms = z2, C.constant = op, C.countBy = wR, C.create = AP, C.curry = U0, C.curryRight = H0, C.debounce = j0, C.defaults = DP, C.defaultsDeep = NP, C.defer = jR, C.delay = WR, C.difference = dI, C.differenceBy = pI, C.differenceWith = hI, C.drop = gI, C.dropRight = mI, C.dropRightWhile = vI, C.dropWhile = yI, C.fill = wI, C.filter = SR, C.flatMap = kR, C.flatMapDeep = _R, C.flatMapDepth = bR, C.flatten = P0, C.flattenDeep = xI, C.flattenDepth = SI, C.flip = VR, C.flow = B2, C.flowRight = U2, C.fromPairs = EI, C.functions = UP, C.functionsIn = HP, C.groupBy = OR, C.initial = kI, C.intersection = _I, C.intersectionBy = bI, C.intersectionWith = OI, C.invert = WP, C.invertBy = VP, C.invokeMap = IR, C.iteratee = lp, C.keyBy = RR, C.keys = Rt, C.keysIn = cn, C.map = va, C.mapKeys = GP, C.mapValues = KP, C.matches = H2, C.matchesProperty = j2, C.memoize = wa, C.merge = QP, C.mergeWith = J0, C.method = W2, C.methodOf = V2, C.mixin = up, C.negate = xa, C.nthArg = G2, C.omit = YP, C.omitBy = XP, C.once = qR, C.orderBy = PR, C.over = K2, C.overArgs = GR, C.overEvery = Q2, C.overSome = Y2, C.partial = Jd, C.partialRight = W0, C.partition = AR, C.pick = ZP, C.pickBy = e1, C.property = u1, C.propertyOf = X2, C.pull = PI, C.pullAll = D0, C.pullAllBy = AI, C.pullAllWith = DI, C.pullAt = NI, C.range = Z2, C.rangeRight = J2, C.rearg = KR, C.reject = MR, C.remove = MI, C.rest = QR, C.reverse = Yd, C.sampleSize = FR, C.set = e2, C.setWith = t2, C.shuffle = zR, C.slice = LI, C.sortBy = UR, C.sortedUniq = jI, C.sortedUniqBy = WI, C.split = k2, C.spread = YR, C.tail = VI, C.take = qI, C.takeRight = GI, C.takeRightWhile = KI, C.takeWhile = QI, C.tap = cR, C.throttle = XR, C.thru = ma, C.toArray = Q0, C.toPairs = t1, C.toPairsIn = n1, C.toPath = iA, C.toPlainObject = X0, C.transform = n2, C.unary = ZR, C.union = YI, C.unionBy = XI, C.unionWith = ZI, C.uniq = JI, C.uniqBy = eR, C.uniqWith = tR, C.unset = r2, C.unzip = Xd, C.unzipWith = N0, C.update = i2, C.updateWith = o2, C.values = ul, C.valuesIn = l2, C.without = nR, C.words = o1, C.wrap = JR, C.xor = rR, C.xorBy = iR, C.xorWith = oR, C.zip = lR, C.zipObject = uR, C.zipObjectDeep = sR, C.zipWith = aR, C.entries = t1, C.entriesIn = n1, C.extend = Z0, C.extendWith = Ca, up(C, C), C.add = lA, C.attempt = l1, C.camelCase = c2, C.capitalize = r1, C.ceil = uA, C.clamp = u2, C.clone = tP, C.cloneDeep = rP, C.cloneDeepWith = iP, C.cloneWith = nP, C.conformsTo = oP, C.deburr = i1, C.defaultTo = $2, C.divide = sA, C.endsWith = f2, C.eq = mr, C.escape = d2, C.escapeRegExp = p2, C.every = xR, C.find = ER, C.findIndex = I0, C.findKey = MP, C.findLast = CR, C.findLastIndex = R0, C.findLastKey = LP, C.floor = aA, C.forEach = L0, C.forEachRight = F0, C.forIn = FP, C.forInRight = zP, C.forOwn = $P, C.forOwnRight = BP, C.get = np, C.gt = lP, C.gte = uP, C.has = jP, C.hasIn = rp, C.head = A0, C.identity = fn, C.includes = TR, C.indexOf = CI, C.inRange = s2, C.invoke = qP, C.isArguments = wo, C.isArray = ke, C.isArrayBuffer = sP, C.isArrayLike = an, C.isArrayLikeObject = St, C.isBoolean = aP, C.isBuffer = bi, C.isDate = cP, C.isElement = fP, C.isEmpty = dP, C.isEqual = pP, C.isEqualWith = hP, C.isError = ep, C.isFinite = gP, C.isFunction = Jr, C.isInteger = V0, C.isLength = Sa, C.isMap = q0, C.isMatch = mP, C.isMatchWith = vP, C.isNaN = yP, C.isNative = wP, C.isNil = SP, C.isNull = xP, C.isNumber = G0, C.isObject = ht, C.isObjectLike = wt, C.isPlainObject = Eu, C.isRegExp = tp, C.isSafeInteger = EP, C.isSet = K0, C.isString = Ea, C.isSymbol = In, C.isTypedArray = ll, C.isUndefined = CP, C.isWeakMap = kP, C.isWeakSet = _P, C.join = TI, C.kebabCase = h2, C.last = Jn, C.lastIndexOf = II, C.lowerCase = g2, C.lowerFirst = m2, C.lt = bP, C.lte = OP, C.max = cA, C.maxBy = fA, C.mean = dA, C.meanBy = pA, C.min = hA, C.minBy = gA, C.stubArray = ap, C.stubFalse = cp, C.stubObject = eA, C.stubString = tA, C.stubTrue = nA, C.multiply = mA, C.nth = RI, C.noConflict = q2, C.noop = sp, C.now = ya, C.pad = v2, C.padEnd = y2, C.padStart = w2, C.parseInt = x2, C.random = a2, C.reduce = DR, C.reduceRight = NR, C.repeat = S2, C.replace = E2, C.result = JP, C.round = vA, C.runInContext = M, C.sample = LR, C.size = $R, C.snakeCase = C2, C.some = BR, C.sortedIndex = FI, C.sortedIndexBy = zI, C.sortedIndexOf = $I, C.sortedLastIndex = BI, C.sortedLastIndexBy = UI, C.sortedLastIndexOf = HI, C.startCase = _2, C.startsWith = b2, C.subtract = yA, C.sum = wA, C.sumBy = xA, C.template = O2, C.times = rA, C.toFinite = ei, C.toInteger = Oe, C.toLength = Y0, C.toLower = T2, C.toNumber = er, C.toSafeInteger = TP, C.toString = qe, C.toUpper = I2, C.trim = R2, C.trimEnd = P2, C.trimStart = A2, C.truncate = D2, C.unescape = N2, C.uniqueId = oA, C.upperCase = M2, C.upperFirst = ip, C.each = L0, C.eachRight = F0, C.first = A0, up(C, function() {
                    var o = {};
                    return Ir(C, function(u, c) {
                        Ke.call(C.prototype, c) || (o[c] = u)
                    }), o
                }(), {
                    chain: !1
                }), C.VERSION = r, Kn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(o) {
                    C[o].placeholder = C
                }), Kn(["drop", "take"], function(o, u) {
                    Me.prototype[o] = function(c) {
                        c = c === n ? 1 : Ot(Oe(c), 0);
                        var h = this.__filtered__ && !u ? new Me(this) : this.clone();
                        return h.__filtered__ ? h.__takeCount__ = jt(c, h.__takeCount__) : h.__views__.push({
                            size: jt(c, ne),
                            type: o + (h.__dir__ < 0 ? "Right" : "")
                        }), h
                    }, Me.prototype[o + "Right"] = function(c) {
                        return this.reverse()[o](c).reverse()
                    }
                }), Kn(["filter", "map", "takeWhile"], function(o, u) {
                    var c = u + 1,
                        h = c == U || c == ue;
                    Me.prototype[o] = function(w) {
                        var _ = this.clone();
                        return _.__iteratees__.push({
                            iteratee: ge(w, 3),
                            type: c
                        }), _.__filtered__ = _.__filtered__ || h, _
                    }
                }), Kn(["head", "last"], function(o, u) {
                    var c = "take" + (u ? "Right" : "");
                    Me.prototype[o] = function() {
                        return this[c](1).value()[0]
                    }
                }), Kn(["initial", "tail"], function(o, u) {
                    var c = "drop" + (u ? "" : "Right");
                    Me.prototype[o] = function() {
                        return this.__filtered__ ? new Me(this) : this[c](1)
                    }
                }), Me.prototype.compact = function() {
                    return this.filter(fn)
                }, Me.prototype.find = function(o) {
                    return this.filter(o).head()
                }, Me.prototype.findLast = function(o) {
                    return this.reverse().find(o)
                }, Me.prototype.invokeMap = Pe(function(o, u) {
                    return typeof o == "function" ? new Me(this) : this.map(function(c) {
                        return mu(c, o, u)
                    })
                }), Me.prototype.reject = function(o) {
                    return this.filter(xa(ge(o)))
                }, Me.prototype.slice = function(o, u) {
                    o = Oe(o);
                    var c = this;
                    return c.__filtered__ && (o > 0 || u < 0) ? new Me(c) : (o < 0 ? c = c.takeRight(-o) : o && (c = c.drop(o)), u !== n && (u = Oe(u), c = u < 0 ? c.dropRight(-u) : c.take(u - o)), c)
                }, Me.prototype.takeRightWhile = function(o) {
                    return this.reverse().takeWhile(o).reverse()
                }, Me.prototype.toArray = function() {
                    return this.take(ne)
                }, Ir(Me.prototype, function(o, u) {
                    var c = /^(?:filter|find|map|reject)|While$/.test(u),
                        h = /^(?:head|last)$/.test(u),
                        w = C[h ? "take" + (u == "last" ? "Right" : "") : u],
                        _ = h || /^find/.test(u);
                    w && (C.prototype[u] = function() {
                        var R = this.__wrapped__,
                            D = h ? [1] : arguments,
                            L = R instanceof Me,
                            Y = D[0],
                            X = L || ke(R),
                            ee = function(De) {
                                var ze = w.apply(C, wi([De], D));
                                return h && le ? ze[0] : ze
                            };
                        X && c && typeof Y == "function" && Y.length != 1 && (L = X = !1);
                        var le = this.__chain__,
                            fe = !!this.__actions__.length,
                            ve = _ && !le,
                            Ie = L && !fe;
                        if (!_ && X) {
                            R = Ie ? R : new Me(this);
                            var ye = o.apply(R, D);
                            return ye.__actions__.push({
                                func: ma,
                                args: [ee],
                                thisArg: n
                            }), new Yn(ye, le)
                        }
                        return ve && Ie ? o.apply(this, D) : (ye = this.thru(ee), ve ? h ? ye.value()[0] : ye.value() : ye)
                    })
                }), Kn(["pop", "push", "shift", "sort", "splice", "unshift"], function(o) {
                    var u = Hs[o],
                        c = /^(?:push|sort|unshift)$/.test(o) ? "tap" : "thru",
                        h = /^(?:pop|shift)$/.test(o);
                    C.prototype[o] = function() {
                        var w = arguments;
                        if (h && !this.__chain__) {
                            var _ = this.value();
                            return u.apply(ke(_) ? _ : [], w)
                        }
                        return this[c](function(R) {
                            return u.apply(ke(R) ? R : [], w)
                        })
                    }
                }), Ir(Me.prototype, function(o, u) {
                    var c = C[u];
                    if (c) {
                        var h = c.name + "";
                        Ke.call(tl, h) || (tl[h] = []), tl[h].push({
                            name: u,
                            func: c
                        })
                    }
                }), tl[aa(n, y).name] = [{
                    name: "wrapper",
                    func: n
                }], Me.prototype.clone = NO, Me.prototype.reverse = MO, Me.prototype.value = LO, C.prototype.at = fR, C.prototype.chain = dR, C.prototype.commit = pR, C.prototype.next = hR, C.prototype.plant = mR, C.prototype.reverse = vR, C.prototype.toJSON = C.prototype.valueOf = C.prototype.value = yR, C.prototype.first = C.prototype.head, au && (C.prototype[au] = gR), C
            },
            Zo = pO();
        co ? ((co.exports = Zo)._ = Zo, ld._ = Zo) : Lt._ = Zo
    }).call(Cu)
})(jc, jc.exports);
var lk = jc.exports;
const dt = {
    water: {
        name: "water",
        close: !1,
        label: "VODA",
        stack: !0,
        usable: !0,
        count: 0
    },
    burger: {
        name: "burger",
        close: !1,
        label: "BURGR",
        stack: !1,
        usable: !1,
        count: 0
    }
};
let sc = "images";

function D3(e) {
    e && e !== "" && (sc = e)
}
const uk = () => !window.invokeNative,
    sk = () => {},
    N3 = window.GetParentResourceName ? window.GetParentResourceName() : "ox_inventory";
async function ur(e, t) {
    if (!uk()) try {
        return await (await fetch(`https://${N3}/${e}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(t)
        })).json()
    } catch (n) {
        throw Error(`Failed to fetch NUI callback ${e}! (${n})`)
    }
}
const Ww = (e, t) => {
        if (t.type !== "shop" || !gn(e)) return !0;
        if (e.count !== void 0 && e.count === 0) return !1;
        if (e.grade === void 0 || !t.groups) return !0;
        const n = Nn.getState().inventory.leftInventory;
        if (!n.groups) return !1;
        const r = Object.keys(t.groups);
        if (Array.isArray(e.grade)) {
            for (let i = 0; i < r.length; i++) {
                const l = r[i];
                if (n.groups[l] !== void 0) {
                    const s = n.groups[l];
                    for (let a = 0; a < e.grade.length; a++) {
                        const f = e.grade[a];
                        if (s === f) return !0
                    }
                }
            }
            return !1
        } else {
            for (let i = 0; i < r.length; i++) {
                const l = r[i];
                if (n.groups[l] !== void 0 && n.groups[l] >= e.grade) return !0
            }
            return !1
        }
    },
    Vw = (e, t) => {
        if (!gn(e) || t !== "crafting" || !e.ingredients) return !0;
        const n = Nn.getState().inventory.leftInventory;
        return Object.entries(e.ingredients).filter(l => {
            const [s, a] = [l[0], l[1]], f = dt[s];
            return a >= 1 && f && f.count >= a ? !1 : !n.items.find(p => {
                if (gn(p) && p.name === s && a < 1) return p.metadata?.durability >= a * 100
            })
        }).length === 0
    },
    gn = (e, t = !1) => e.name !== void 0 && e.weight !== void 0 || t && e.name !== void 0 && e.count !== void 0 && e.weight !== void 0,
    M3 = (e, t) => e.name === t.name && lk.isEqual(e.metadata, t.metadata),
    L3 = (e, t, n) => t.stack ? n.find(i => i.name === e.name && lk.isEqual(i.metadata, e.metadata)) || n.find(i => i.name === void 0) : n.find(i => i.name === void 0),
    Wf = (e, t, n) => ({
        sourceInventory: t === Yt.PLAYER ? e.leftInventory : e.rightInventory,
        targetInventory: n ? n === Yt.PLAYER ? e.leftInventory : e.rightInventory : t === Yt.PLAYER ? e.rightInventory : e.leftInventory
    }),
    Gl = (e, t) => {
        if (e?.durability === void 0) return;
        let n = e.durability;
        return n > 100 && e.degrade && (n = (e.durability - t) / (60 * e.degrade) * 100), n < 0 && (n = 0), n
    },
    F3 = e => e.reduce((t, n) => gn(n) ? t + n.weight : t, 0),
    qw = async e => {
        const t = await ur("getItemData", e);
        if (t?.name) return dt[e] = t, t
    }, Nl = e => {
        const t = typeof e == "object";
        if (t) {
            if (!e.name) return;
            const i = e.metadata;
            if (i?.imageurl) return `${i.imageurl}`;
            if (i?.image) return `${sc}/${i.image}.png`
        }
        const n = t ? e.name : e,
            r = dt[n];
        return r ? (r.image || (r.image = `${sc}/${n}.png`), r.image) : `${sc}/${n}.png`
    }, z3 = (e, t) => {
        const {
            leftInventory: n,
            rightInventory: r
        } = t.payload, i = Math.floor(Date.now() / 1e3);
        n && (e.leftInventory = {
            ...n,
            items: Array.from(Array(n.slots), (l, s) => {
                const a = Object.values(n.items).find(f => f?.slot === s + 1) || {
                    slot: s + 1
                };
                return a.name && (typeof dt[a.name] > "u" && qw(a.name), a.durability = Gl(a.metadata, i)), a
            })
        }), r && (e.rightInventory = {
            ...r,
            items: Array.from(Array(r.slots), (l, s) => {
                const a = Object.values(r.items).find(f => f?.slot === s + 1) || {
                    slot: s + 1
                };
                return a.name && (typeof dt[a.name] > "u" && qw(a.name), a.durability = Gl(a.metadata, i)), a
            })
        }), e.shiftPressed = !1, e.isBusy = !1
    }, $3 = (e, t) => {
        if (t.payload.items) {
            Array.isArray(t.payload.items) || (t.payload.items = [t.payload.items]);
            const n = Math.floor(Date.now() / 1e3);
            Object.values(t.payload.items).filter(r => !!r).forEach(r => {
                const i = r.inventory && r.inventory !== Yt.PLAYER ? e.rightInventory : e.leftInventory;
                r.item.durability = Gl(r.item.metadata, n), i.items[r.item.slot - 1] = r.item
            }), e.rightInventory.type === Yt.CRAFTING && (e.rightInventory = {
                ...e.rightInventory
            })
        }
        if (t.payload.itemCount) {
            const n = Object.entries(t.payload.itemCount);
            for (let r = 0; r < n.length; r++) {
                const i = n[r][0],
                    l = n[r][1];
                dt[i] ? dt[i].count += l : console.log(`Item data for ${i} is undefined`)
            }
        }
        if (t.payload.weightData) {
            const n = t.payload.weightData.inventoryId,
                r = t.payload.weightData.maxWeight,
                i = n === e.leftInventory.id ? "leftInventory" : n === e.rightInventory.id ? "rightInventory" : null;
            if (!i) return;
            e[i].maxWeight = r
        }
        if (t.payload.slotsData) {
            const {
                inventoryId: n
            } = t.payload.slotsData, {
                slots: r
            } = t.payload.slotsData, i = n === e.leftInventory.id ? "leftInventory" : n === e.rightInventory.id ? "rightInventory" : null;
            if (!i) return;
            e[i].slots = r, iv.caseReducers.setupInventory(e, {
                type: "setupInventory",
                payload: {
                    leftInventory: i === "leftInventory" ? e[i] : void 0,
                    rightInventory: i === "rightInventory" ? e[i] : void 0
                }
            })
        }
    }, B3 = (e, t) => {
        const {
            fromSlot: n,
            fromType: r,
            toSlot: i,
            toType: l
        } = t.payload, {
            sourceInventory: s,
            targetInventory: a
        } = Wf(e, r, l), f = Math.floor(Date.now() / 1e3);
        [s.items[n.slot - 1], a.items[i.slot - 1]] = [{
            ...a.items[i.slot - 1],
            slot: n.slot,
            durability: Gl(i.metadata, f)
        }, {
            ...s.items[n.slot - 1],
            slot: i.slot,
            durability: Gl(n.metadata, f)
        }]
    }, U3 = (e, t) => {
        const {
            fromSlot: n,
            fromType: r,
            toSlot: i,
            toType: l,
            count: s
        } = t.payload, {
            sourceInventory: a,
            targetInventory: f
        } = Wf(e, r, l), d = n.weight / n.count;
        f.items[i.slot - 1] = {
            ...f.items[i.slot - 1],
            count: i.count + s,
            weight: d * (i.count + s)
        }, !(r === Yt.SHOP || r === Yt.CRAFTING) && (a.items[n.slot - 1] = n.count - s > 0 ? {
            ...a.items[n.slot - 1],
            count: n.count - s,
            weight: d * (n.count - s)
        } : {
            slot: n.slot
        })
    }, H3 = (e, t) => {
        const {
            fromSlot: n,
            fromType: r,
            toSlot: i,
            toType: l,
            count: s
        } = t.payload, {
            sourceInventory: a,
            targetInventory: f
        } = Wf(e, r, l), d = n.weight / n.count, p = Math.floor(Date.now() / 1e3), g = a.items[n.slot - 1];
        f.items[i.slot - 1] = {
            ...g,
            count: s,
            weight: d * s,
            slot: i.slot,
            durability: Gl(g.metadata, p)
        }, !(r === Yt.SHOP || r === Yt.CRAFTING) && (a.items[n.slot - 1] = n.count - s > 0 ? {
            ...a.items[n.slot - 1],
            count: n.count - s,
            weight: d * (n.count - s)
        } : {
            slot: n.slot
        })
    }, j3 = {
        leftInventory: {
            id: "",
            type: "",
            slots: 0,
            maxWeight: 0,
            items: []
        },
        rightInventory: {
            id: "",
            type: "",
            slots: 0,
            maxWeight: 0,
            items: []
        },
        additionalMetadata: new Array,
        itemAmount: 0,
        shiftPressed: !1,
        isBusy: !1
    }, iv = Zm({
        name: "inventory",
        initialState: j3,
        reducers: {
            stackSlots: U3,
            swapSlots: B3,
            setupInventory: z3,
            moveSlots: H3,
            refreshSlots: $3,
            setAdditionalMetadata: (e, t) => {
                const n = [];
                for (let r = 0; r < t.payload.length; r++) {
                    const i = t.payload[r];
                    e.additionalMetadata.find(l => l.value === i.value) || n.push(i)
                }
                e.additionalMetadata = [...e.additionalMetadata, ...n]
            },
            setItemAmount: (e, t) => {
                e.itemAmount = t.payload
            },
            setShiftPressed: (e, t) => {
                e.shiftPressed = t.payload
            },
            setContainerWeight: (e, t) => {
                const n = e.leftInventory.items.find(r => r.metadata?.container === e.rightInventory.id);
                n && (n.weight = t.payload)
            }
        },
        extraReducers: e => {
            e.addMatcher(rk, t => {
                t.isBusy = !0, t.history = {
                    leftInventory: vg(t.leftInventory),
                    rightInventory: vg(t.rightInventory)
                }
            }), e.addMatcher(ok, t => {
                t.isBusy = !1
            }), e.addMatcher(ik, t => {
                t.history && t.history.leftInventory && t.history.rightInventory && (t.leftInventory = t.history.leftInventory, t.rightInventory = t.history.rightInventory), t.isBusy = !1
            })
        }
    }), {
        setAdditionalMetadata: W3,
        setItemAmount: V3,
        setShiftPressed: q3,
        setupInventory: ak,
        swapSlots: G3,
        moveSlots: K3,
        stackSlots: Q3,
        refreshSlots: Y3,
        setContainerWeight: X3
    } = iv.actions, ck = e => e.inventory.leftInventory, Z3 = e => e.inventory.rightInventory, J3 = e => e.inventory.itemAmount, e4 = iv.reducer, t4 = {
        open: !1,
        item: null,
        inventoryType: null
    }, fk = Zm({
        name: "tooltip",
        initialState: t4,
        reducers: {
            openTooltip(e, t) {
                e.open = !0, e.item = t.payload.item, e.inventoryType = t.payload.inventoryType
            },
            closeTooltip(e) {
                e.open = !1
            }
        }
    }), {
        openTooltip: n4,
        closeTooltip: Zu
    } = fk.actions, r4 = fk.reducer, i4 = {
        coords: null,
        item: null
    }, dk = Zm({
        name: "contextMenu",
        initialState: i4,
        reducers: {
            openContextMenu(e, t) {
                e.coords = t.payload.coords, e.item = t.payload.item
            },
            closeContextMenu(e) {
                e.coords = null
            }
        }
    }), {
        openContextMenu: o4,
        closeContextMenu: pk
    } = dk.actions, l4 = dk.reducer, Nn = E3({
        reducer: {
            inventory: e4,
            tooltip: r4,
            contextMenu: l4
        }
    }), ru = () => BM(), gi = xM, Lr = (e, t) => {
        const n = I.useRef(sk);
        I.useEffect(() => {
            n.current = t
        }, [t]), I.useEffect(() => {
            const r = i => {
                const {
                    action: l,
                    data: s
                } = i.data;
                n.current && l === e && n.current(s)
            };
            return window.addEventListener("message", r), () => window.removeEventListener("message", r)
        }, [e])
    }, ov = e => {
        ur("useItem", e.slot)
    }, hk = e => {
        const {
            inventory: {
                itemAmount: t
            }
        } = Nn.getState();
        ur("giveItem", {
            slot: e.slot,
            count: t
        })
    }, ut = {}, Gw = Math.floor;

function gk(e) {
    return mk(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function Rs(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function u4(e) {
    var t;
    return (t = (mk(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function mk(e) {
    return e instanceof Node || e instanceof Rs(e).Node
}

function hn(e) {
    return e instanceof Element || e instanceof Rs(e).Element
}

function Kl(e) {
    return e instanceof HTMLElement || e instanceof Rs(e).HTMLElement
}

function xg(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Rs(e).ShadowRoot
}

function s4(e) {
    return ["html", "body", "#document"].includes(gk(e))
}

function a4(e) {
    return Rs(e).getComputedStyle(e)
}

function c4(e) {
    if (gk(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || xg(e) && e.host || u4(e);
    return xg(t) ? t.host : t
}

function Li(e) {
    let t = e.activeElement;
    for (;
        ((n = t) == null || (r = n.shadowRoot) == null ? void 0 : r.activeElement) != null;) {
        var n, r;
        t = t.shadowRoot.activeElement
    }
    return t
}

function Pt(e, t) {
    if (!e || !t) return !1;
    const n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && xg(n)) {
        let r = t;
        for (; r;) {
            if (e === r) return !0;
            r = r.parentNode || r.host
        }
    }
    return !1
}

function lv() {
    const e = navigator.userAgentData;
    return e != null && e.platform ? e.platform : navigator.platform
}

function f4() {
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? e.brands.map(t => {
        let {
            brand: n,
            version: r
        } = t;
        return n + "/" + r
    }).join(" ") : navigator.userAgent
}

function vk(e) {
    if (e.mozInputSource === 0 && e.isTrusted) return !0;
    const t = /Android/i;
    return (t.test(lv()) || t.test(f4())) && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType
}

function yk(e) {
    return e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType !== "mouse" || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0
}

function wk() {
    return /apple/i.test(navigator.vendor)
}

function d4() {
    return lv().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
}

function Wc(e, t) {
    const n = ["mouse", "pen"];
    return t || n.push("", void 0), n.includes(e)
}

function p4(e) {
    return "nativeEvent" in e
}

function h4(e) {
    return e.matches("html,body")
}

function rn(e) {
    return e?.ownerDocument || document
}

function Qp(e, t) {
    if (t == null) return !1;
    if ("composedPath" in e) return e.composedPath().includes(t);
    const n = e;
    return n.target != null && t.contains(n.target)
}

function uv(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target
}
const g4 = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";

function xk(e) {
    return Kl(e) && e.matches(g4)
}

function $t(e) {
    e.preventDefault(), e.stopPropagation()
}
const Vc = Math.min,
    Ao = Math.max,
    qc = Math.round,
    Ha = Math.floor,
    no = e => ({
        x: e,
        y: e
    }),
    m4 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    v4 = {
        start: "end",
        end: "start"
    };

function Kw(e, t, n) {
    return Ao(e, Vc(t, n))
}

function Vf(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Uo(e) {
    return e.split("-")[0]
}

function qf(e) {
    return e.split("-")[1]
}

function Sk(e) {
    return e === "x" ? "y" : "x"
}

function Ek(e) {
    return e === "y" ? "height" : "width"
}

function Gf(e) {
    return ["top", "bottom"].includes(Uo(e)) ? "y" : "x"
}

function Ck(e) {
    return Sk(Gf(e))
}

function y4(e, t, n) {
    n === void 0 && (n = !1);
    const r = qf(e),
        i = Ck(e),
        l = Ek(i);
    let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[l] > t.floating[l] && (s = Gc(s)), [s, Gc(s)]
}

function w4(e) {
    const t = Gc(e);
    return [Sg(e), t, Sg(t)]
}

function Sg(e) {
    return e.replace(/start|end/g, t => v4[t])
}

function x4(e, t, n) {
    const r = ["left", "right"],
        i = ["right", "left"],
        l = ["top", "bottom"],
        s = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? i : r : t ? r : i;
        case "left":
        case "right":
            return t ? l : s;
        default:
            return []
    }
}

function S4(e, t, n, r) {
    const i = qf(e);
    let l = x4(Uo(e), n === "start", r);
    return i && (l = l.map(s => s + "-" + i), t && (l = l.concat(l.map(Sg)))), l
}

function Gc(e) {
    return e.replace(/left|right|bottom|top/g, t => m4[t])
}

function E4(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function C4(e) {
    return typeof e != "number" ? E4(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function Kc(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: i
    } = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    }
}

function Qw(e, t, n) {
    let {
        reference: r,
        floating: i
    } = e;
    const l = Gf(t),
        s = Ck(t),
        a = Ek(s),
        f = Uo(t),
        d = l === "y",
        p = r.x + r.width / 2 - i.width / 2,
        g = r.y + r.height / 2 - i.height / 2,
        v = r[a] / 2 - i[a] / 2;
    let m;
    switch (f) {
        case "top":
            m = {
                x: p,
                y: r.y - i.height
            };
            break;
        case "bottom":
            m = {
                x: p,
                y: r.y + r.height
            };
            break;
        case "right":
            m = {
                x: r.x + r.width,
                y: g
            };
            break;
        case "left":
            m = {
                x: r.x - i.width,
                y: g
            };
            break;
        default:
            m = {
                x: r.x,
                y: r.y
            }
    }
    switch (qf(t)) {
        case "start":
            m[s] -= v * (n && d ? -1 : 1);
            break;
        case "end":
            m[s] += v * (n && d ? -1 : 1);
            break
    }
    return m
}
const k4 = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: i = "absolute",
        middleware: l = [],
        platform: s
    } = n, a = l.filter(Boolean), f = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let d = await s.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }),
        {
            x: p,
            y: g
        } = Qw(d, r, f),
        v = r,
        m = {},
        E = 0;
    for (let S = 0; S < a.length; S++) {
        const {
            name: A,
            fn: y
        } = a[S], {
            x,
            y: k,
            data: P,
            reset: N
        } = await y({
            x: p,
            y: g,
            initialPlacement: r,
            placement: v,
            strategy: i,
            middlewareData: m,
            rects: d,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        p = x ?? p, g = k ?? g, m = {
            ...m,
            [A]: {
                ...m[A],
                ...P
            }
        }, N && E <= 50 && (E++, typeof N == "object" && (N.placement && (v = N.placement), N.rects && (d = N.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : N.rects), {
            x: p,
            y: g
        } = Qw(d, v, f)), S = -1)
    }
    return {
        x: p,
        y: g,
        placement: v,
        strategy: i,
        middlewareData: m
    }
};
async function kk(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: i,
        platform: l,
        rects: s,
        elements: a,
        strategy: f
    } = e, {
        boundary: d = "clippingAncestors",
        rootBoundary: p = "viewport",
        elementContext: g = "floating",
        altBoundary: v = !1,
        padding: m = 0
    } = Vf(t, e), E = C4(m), A = a[v ? g === "floating" ? "reference" : "floating" : g], y = Kc(await l.getClippingRect({
        element: (n = await (l.isElement == null ? void 0 : l.isElement(A))) == null || n ? A : A.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(a.floating)),
        boundary: d,
        rootBoundary: p,
        strategy: f
    })), x = g === "floating" ? {
        x: r,
        y: i,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, k = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(a.floating)), P = await (l.isElement == null ? void 0 : l.isElement(k)) ? await (l.getScale == null ? void 0 : l.getScale(k)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, N = Kc(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: x,
        offsetParent: k,
        strategy: f
    }) : x);
    return {
        top: (y.top - N.top + E.top) / P.y,
        bottom: (N.bottom - y.bottom + E.bottom) / P.y,
        left: (y.left - N.left + E.left) / P.x,
        right: (N.right - y.right + E.right) / P.x
    }
}
const _4 = function(e) {
    return e === void 0 && (e = {}), {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {
                placement: i,
                middlewareData: l,
                rects: s,
                initialPlacement: a,
                platform: f,
                elements: d
            } = t, {
                mainAxis: p = !0,
                crossAxis: g = !0,
                fallbackPlacements: v,
                fallbackStrategy: m = "bestFit",
                fallbackAxisSideDirection: E = "none",
                flipAlignment: S = !0,
                ...A
            } = Vf(e, t);
            if ((n = l.arrow) != null && n.alignmentOffset) return {};
            const y = Uo(i),
                x = Uo(a) === a,
                k = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)),
                P = v || (x || !S ? [Gc(a)] : w4(a));
            !v && E !== "none" && P.push(...S4(a, S, E, k));
            const N = [a, ...P],
                T = await kk(t, A),
                F = [];
            let z = ((r = l.flip) == null ? void 0 : r.overflows) || [];
            if (p && F.push(T[y]), g) {
                const G = y4(i, s, k);
                F.push(T[G[0]], T[G[1]])
            }
            if (z = [...z, {
                    placement: i,
                    overflows: F
                }], !F.every(G => G <= 0)) {
                var q, Q;
                const G = (((q = l.flip) == null ? void 0 : q.index) || 0) + 1,
                    B = N[G];
                if (B) return {
                    data: {
                        index: G,
                        overflows: z
                    },
                    reset: {
                        placement: B
                    }
                };
                let U = (Q = z.filter(Z => Z.overflows[0] <= 0).sort((Z, ue) => Z.overflows[1] - ue.overflows[1])[0]) == null ? void 0 : Q.placement;
                if (!U) switch (m) {
                    case "bestFit": {
                        var $;
                        const Z = ($ = z.map(ue => [ue.placement, ue.overflows.filter(oe => oe > 0).reduce((oe, j) => oe + j, 0)]).sort((ue, oe) => ue[1] - oe[1])[0]) == null ? void 0 : $[0];
                        Z && (U = Z);
                        break
                    }
                    case "initialPlacement":
                        U = a;
                        break
                }
                if (i !== U) return {
                    reset: {
                        placement: U
                    }
                }
            }
            return {}
        }
    }
};
async function b4(e, t) {
    const {
        placement: n,
        platform: r,
        elements: i
    } = e, l = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), s = Uo(n), a = qf(n), f = Gf(n) === "y", d = ["left", "top"].includes(s) ? -1 : 1, p = l && f ? -1 : 1, g = Vf(t, e);
    let {
        mainAxis: v,
        crossAxis: m,
        alignmentAxis: E
    } = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...g
    };
    return a && typeof E == "number" && (m = a === "end" ? E * -1 : E), f ? {
        x: m * p,
        y: v * d
    } : {
        x: v * d,
        y: m * p
    }
}
const O4 = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: i,
                    y: l,
                    placement: s,
                    middlewareData: a
                } = t, f = await b4(t, e);
                return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                    x: i + f.x,
                    y: l + f.y,
                    data: {
                        ...f,
                        placement: s
                    }
                }
            }
        }
    },
    T4 = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: i
                } = t, {
                    mainAxis: l = !0,
                    crossAxis: s = !1,
                    limiter: a = {
                        fn: A => {
                            let {
                                x: y,
                                y: x
                            } = A;
                            return {
                                x: y,
                                y: x
                            }
                        }
                    },
                    ...f
                } = Vf(e, t), d = {
                    x: n,
                    y: r
                }, p = await kk(t, f), g = Gf(Uo(i)), v = Sk(g);
                let m = d[v],
                    E = d[g];
                if (l) {
                    const A = v === "y" ? "top" : "left",
                        y = v === "y" ? "bottom" : "right",
                        x = m + p[A],
                        k = m - p[y];
                    m = Kw(x, m, k)
                }
                if (s) {
                    const A = g === "y" ? "top" : "left",
                        y = g === "y" ? "bottom" : "right",
                        x = E + p[A],
                        k = E - p[y];
                    E = Kw(x, E, k)
                }
                const S = a.fn({
                    ...t,
                    [v]: m,
                    [g]: E
                });
                return {
                    ...S,
                    data: {
                        x: S.x - n,
                        y: S.y - r
                    }
                }
            }
        }
    };

function iu(e) {
    return _k(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function zn(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function mi(e) {
    var t;
    return (t = (_k(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function _k(e) {
    return e instanceof Node || e instanceof zn(e).Node
}

function Ur(e) {
    return e instanceof Element || e instanceof zn(e).Element
}

function Hr(e) {
    return e instanceof HTMLElement || e instanceof zn(e).HTMLElement
}

function Yw(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof zn(e).ShadowRoot
}

function Ps(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: i
    } = br(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
}

function I4(e) {
    return ["table", "td", "th"].includes(iu(e))
}

function sv(e) {
    const t = av(),
        n = br(e);
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function R4(e) {
    let t = ro(e);
    for (; Hr(t) && !Ql(t);) {
        if (sv(t)) return t;
        t = ro(t)
    }
    return null
}

function av() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function Ql(e) {
    return ["html", "body", "#document"].includes(iu(e))
}

function br(e) {
    return zn(e).getComputedStyle(e)
}

function Kf(e) {
    return Ur(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}

function ro(e) {
    if (iu(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || Yw(e) && e.host || mi(e);
    return Yw(t) ? t.host : t
}

function bk(e) {
    const t = ro(e);
    return Ql(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Hr(t) && Ps(t) ? t : bk(t)
}

function Yi(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const i = bk(e),
        l = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = zn(i);
    return l ? t.concat(s, s.visualViewport || [], Ps(i) ? i : [], s.frameElement && n ? Yi(s.frameElement) : []) : t.concat(i, Yi(i, [], n))
}

function Ok(e) {
    const t = br(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const i = Hr(e),
        l = i ? e.offsetWidth : n,
        s = i ? e.offsetHeight : r,
        a = qc(n) !== l || qc(r) !== s;
    return a && (n = l, r = s), {
        width: n,
        height: r,
        $: a
    }
}

function cv(e) {
    return Ur(e) ? e : e.contextElement
}

function Ml(e) {
    const t = cv(e);
    if (!Hr(t)) return no(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: i,
            $: l
        } = Ok(t);
    let s = (l ? qc(n.width) : n.width) / r,
        a = (l ? qc(n.height) : n.height) / i;
    return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
        x: s,
        y: a
    }
}
const P4 = no(0);

function Tk(e) {
    const t = zn(e);
    return !av() || !t.visualViewport ? P4 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function A4(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== zn(e) ? !1 : t
}

function Ho(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const i = e.getBoundingClientRect(),
        l = cv(e);
    let s = no(1);
    t && (r ? Ur(r) && (s = Ml(r)) : s = Ml(e));
    const a = A4(l, n, r) ? Tk(l) : no(0);
    let f = (i.left + a.x) / s.x,
        d = (i.top + a.y) / s.y,
        p = i.width / s.x,
        g = i.height / s.y;
    if (l) {
        const v = zn(l),
            m = r && Ur(r) ? zn(r) : r;
        let E = v,
            S = E.frameElement;
        for (; S && r && m !== E;) {
            const A = Ml(S),
                y = S.getBoundingClientRect(),
                x = br(S),
                k = y.left + (S.clientLeft + parseFloat(x.paddingLeft)) * A.x,
                P = y.top + (S.clientTop + parseFloat(x.paddingTop)) * A.y;
            f *= A.x, d *= A.y, p *= A.x, g *= A.y, f += k, d += P, E = zn(S), S = E.frameElement
        }
    }
    return Kc({
        width: p,
        height: g,
        x: f,
        y: d
    })
}
const D4 = [":popover-open", ":modal"];

function fv(e) {
    return D4.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}

function N4(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: i
    } = e;
    const l = i === "fixed",
        s = mi(r),
        a = t ? fv(t.floating) : !1;
    if (r === s || a && l) return n;
    let f = {
            scrollLeft: 0,
            scrollTop: 0
        },
        d = no(1);
    const p = no(0),
        g = Hr(r);
    if ((g || !g && !l) && ((iu(r) !== "body" || Ps(s)) && (f = Kf(r)), Hr(r))) {
        const v = Ho(r);
        d = Ml(r), p.x = v.x + r.clientLeft, p.y = v.y + r.clientTop
    }
    return {
        width: n.width * d.x,
        height: n.height * d.y,
        x: n.x * d.x - f.scrollLeft * d.x + p.x,
        y: n.y * d.y - f.scrollTop * d.y + p.y
    }
}

function M4(e) {
    return Array.from(e.getClientRects())
}

function Ik(e) {
    return Ho(mi(e)).left + Kf(e).scrollLeft
}

function L4(e) {
    const t = mi(e),
        n = Kf(e),
        r = e.ownerDocument.body,
        i = Ao(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        l = Ao(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Ik(e);
    const a = -n.scrollTop;
    return br(r).direction === "rtl" && (s += Ao(t.clientWidth, r.clientWidth) - i), {
        width: i,
        height: l,
        x: s,
        y: a
    }
}

function F4(e, t) {
    const n = zn(e),
        r = mi(e),
        i = n.visualViewport;
    let l = r.clientWidth,
        s = r.clientHeight,
        a = 0,
        f = 0;
    if (i) {
        l = i.width, s = i.height;
        const d = av();
        (!d || d && t === "fixed") && (a = i.offsetLeft, f = i.offsetTop)
    }
    return {
        width: l,
        height: s,
        x: a,
        y: f
    }
}

function z4(e, t) {
    const n = Ho(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        i = n.left + e.clientLeft,
        l = Hr(e) ? Ml(e) : no(1),
        s = e.clientWidth * l.x,
        a = e.clientHeight * l.y,
        f = i * l.x,
        d = r * l.y;
    return {
        width: s,
        height: a,
        x: f,
        y: d
    }
}

function Xw(e, t, n) {
    let r;
    if (t === "viewport") r = F4(e, n);
    else if (t === "document") r = L4(mi(e));
    else if (Ur(t)) r = z4(t, n);
    else {
        const i = Tk(e);
        r = {
            ...t,
            x: t.x - i.x,
            y: t.y - i.y
        }
    }
    return Kc(r)
}

function Rk(e, t) {
    const n = ro(e);
    return n === t || !Ur(n) || Ql(n) ? !1 : br(n).position === "fixed" || Rk(n, t)
}

function $4(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Yi(e, [], !1).filter(a => Ur(a) && iu(a) !== "body"),
        i = null;
    const l = br(e).position === "fixed";
    let s = l ? ro(e) : e;
    for (; Ur(s) && !Ql(s);) {
        const a = br(s),
            f = sv(s);
        !f && a.position === "fixed" && (i = null), (l ? !f && !i : !f && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Ps(s) && !f && Rk(e, s)) ? r = r.filter(p => p !== s) : i = a, s = ro(s)
    }
    return t.set(e, r), r
}

function B4(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: i
    } = e;
    const s = [...n === "clippingAncestors" ? fv(t) ? [] : $4(t, this._c) : [].concat(n), r],
        a = s[0],
        f = s.reduce((d, p) => {
            const g = Xw(t, p, i);
            return d.top = Ao(g.top, d.top), d.right = Vc(g.right, d.right), d.bottom = Vc(g.bottom, d.bottom), d.left = Ao(g.left, d.left), d
        }, Xw(t, a, i));
    return {
        width: f.right - f.left,
        height: f.bottom - f.top,
        x: f.left,
        y: f.top
    }
}

function U4(e) {
    const {
        width: t,
        height: n
    } = Ok(e);
    return {
        width: t,
        height: n
    }
}

function H4(e, t, n) {
    const r = Hr(t),
        i = mi(t),
        l = n === "fixed",
        s = Ho(e, !0, l, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const f = no(0);
    if (r || !r && !l)
        if ((iu(t) !== "body" || Ps(i)) && (a = Kf(t)), r) {
            const g = Ho(t, !0, l, t);
            f.x = g.x + t.clientLeft, f.y = g.y + t.clientTop
        } else i && (f.x = Ik(i));
    const d = s.left + a.scrollLeft - f.x,
        p = s.top + a.scrollTop - f.y;
    return {
        x: d,
        y: p,
        width: s.width,
        height: s.height
    }
}

function Yp(e) {
    return br(e).position === "static"
}

function Zw(e, t) {
    return !Hr(e) || br(e).position === "fixed" ? null : t ? t(e) : e.offsetParent
}

function Pk(e, t) {
    const n = zn(e);
    if (fv(e)) return n;
    if (!Hr(e)) {
        let i = ro(e);
        for (; i && !Ql(i);) {
            if (Ur(i) && !Yp(i)) return i;
            i = ro(i)
        }
        return n
    }
    let r = Zw(e, t);
    for (; r && I4(r) && Yp(r);) r = Zw(r, t);
    return r && Ql(r) && Yp(r) && !sv(r) ? n : r || R4(e) || n
}
const j4 = async function(e) {
    const t = this.getOffsetParent || Pk,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: H4(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function W4(e) {
    return br(e).direction === "rtl"
}
const V4 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: N4,
    getDocumentElement: mi,
    getClippingRect: B4,
    getOffsetParent: Pk,
    getElementRects: j4,
    getClientRects: M4,
    getDimensions: U4,
    getScale: Ml,
    isElement: Ur,
    isRTL: W4
};

function q4(e, t) {
    let n = null,
        r;
    const i = mi(e);

    function l() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), n = null
    }

    function s(a, f) {
        a === void 0 && (a = !1), f === void 0 && (f = 1), l();
        const {
            left: d,
            top: p,
            width: g,
            height: v
        } = e.getBoundingClientRect();
        if (a || t(), !g || !v) return;
        const m = Ha(p),
            E = Ha(i.clientWidth - (d + g)),
            S = Ha(i.clientHeight - (p + v)),
            A = Ha(d),
            x = {
                rootMargin: -m + "px " + -E + "px " + -S + "px " + -A + "px",
                threshold: Ao(0, Vc(1, f)) || 1
            };
        let k = !0;

        function P(N) {
            const T = N[0].intersectionRatio;
            if (T !== f) {
                if (!k) return s();
                T ? s(!1, T) : r = setTimeout(() => {
                    s(!1, 1e-7)
                }, 1e3)
            }
            k = !1
        }
        try {
            n = new IntersectionObserver(P, {
                ...x,
                root: i.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(P, x)
        }
        n.observe(e)
    }
    return s(!0), l
}

function G4(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: i = !0,
        ancestorResize: l = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: a = typeof IntersectionObserver == "function",
        animationFrame: f = !1
    } = r, d = cv(e), p = i || l ? [...d ? Yi(d) : [], ...Yi(t)] : [];
    p.forEach(y => {
        i && y.addEventListener("scroll", n, {
            passive: !0
        }), l && y.addEventListener("resize", n)
    });
    const g = d && a ? q4(d, n) : null;
    let v = -1,
        m = null;
    s && (m = new ResizeObserver(y => {
        let [x] = y;
        x && x.target === d && m && (m.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
            var k;
            (k = m) == null || k.observe(t)
        })), n()
    }), d && !f && m.observe(d), m.observe(t));
    let E, S = f ? Ho(e) : null;
    f && A();

    function A() {
        const y = Ho(e);
        S && (y.x !== S.x || y.y !== S.y || y.width !== S.width || y.height !== S.height) && n(), S = y, E = requestAnimationFrame(A)
    }
    return n(), () => {
        var y;
        p.forEach(x => {
            i && x.removeEventListener("scroll", n), l && x.removeEventListener("resize", n)
        }), g?.(), (y = m) == null || y.disconnect(), m = null, f && cancelAnimationFrame(E)
    }
}
const Ak = O4,
    Dk = T4,
    Nk = _4,
    K4 = (e, t, n) => {
        const r = new Map,
            i = {
                platform: V4,
                ...n
            },
            l = {
                ...i.platform,
                _c: r
            };
        return k4(e, t, {
            ...i,
            platform: l
        })
    };
var ac = typeof document < "u" ? I.useLayoutEffect : I.useEffect;

function Qc(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, i;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!Qc(e[r], t[r])) return !1;
            return !0
        }
        if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, i[r])) return !1;
        for (r = n; r-- !== 0;) {
            const l = i[r];
            if (!(l === "_owner" && e.$$typeof) && !Qc(e[l], t[l])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function Mk(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Jw(e, t) {
    const n = Mk(e);
    return Math.round(t * n) / n
}

function ex(e) {
    const t = I.useRef(e);
    return ac(() => {
        t.current = e
    }), t
}

function Q4(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: i,
        elements: {
            reference: l,
            floating: s
        } = {},
        transform: a = !0,
        whileElementsMounted: f,
        open: d
    } = e, [p, g] = I.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [v, m] = I.useState(r);
    Qc(v, r) || m(r);
    const [E, S] = I.useState(null), [A, y] = I.useState(null), x = I.useCallback(oe => {
        oe !== T.current && (T.current = oe, S(oe))
    }, []), k = I.useCallback(oe => {
        oe !== F.current && (F.current = oe, y(oe))
    }, []), P = l || E, N = s || A, T = I.useRef(null), F = I.useRef(null), z = I.useRef(p), q = f != null, Q = ex(f), $ = ex(i), G = I.useCallback(() => {
        if (!T.current || !F.current) return;
        const oe = {
            placement: t,
            strategy: n,
            middleware: v
        };
        $.current && (oe.platform = $.current), K4(T.current, F.current, oe).then(j => {
            const J = {
                ...j,
                isPositioned: !0
            };
            B.current && !Qc(z.current, J) && (z.current = J, tu.flushSync(() => {
                g(J)
            }))
        })
    }, [v, t, n, $]);
    ac(() => {
        d === !1 && z.current.isPositioned && (z.current.isPositioned = !1, g(oe => ({
            ...oe,
            isPositioned: !1
        })))
    }, [d]);
    const B = I.useRef(!1);
    ac(() => (B.current = !0, () => {
        B.current = !1
    }), []), ac(() => {
        if (P && (T.current = P), N && (F.current = N), P && N) {
            if (Q.current) return Q.current(P, N, G);
            G()
        }
    }, [P, N, G, Q, q]);
    const U = I.useMemo(() => ({
            reference: T,
            floating: F,
            setReference: x,
            setFloating: k
        }), [x, k]),
        Z = I.useMemo(() => ({
            reference: P,
            floating: N
        }), [P, N]),
        ue = I.useMemo(() => {
            const oe = {
                position: n,
                left: 0,
                top: 0
            };
            if (!Z.floating) return oe;
            const j = Jw(Z.floating, p.x),
                J = Jw(Z.floating, p.y);
            return a ? {
                ...oe,
                transform: "translate(" + j + "px, " + J + "px)",
                ...Mk(Z.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: j,
                top: J
            }
        }, [n, a, Z.floating, p.x, p.y]);
    return I.useMemo(() => ({
        ...p,
        update: G,
        refs: U,
        elements: Z,
        floatingStyles: ue
    }), [p, G, U, Z, ue])
}
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
var Y4 = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
    Eg = Y4.join(","),
    Lk = typeof Element > "u",
    Cs = Lk ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    Yc = !Lk && Element.prototype.getRootNode ? function(e) {
        var t;
        return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)
    } : function(e) {
        return e?.ownerDocument
    },
    Xc = function e(t, n) {
        var r;
        n === void 0 && (n = !0);
        var i = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"),
            l = i === "" || i === "true",
            s = l || n && t && e(t.parentNode);
        return s
    },
    X4 = function(t) {
        var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
        return r === "" || r === "true"
    },
    Z4 = function(t, n, r) {
        if (Xc(t)) return [];
        var i = Array.prototype.slice.apply(t.querySelectorAll(Eg));
        return n && Cs.call(t, Eg) && i.unshift(t), i = i.filter(r), i
    },
    J4 = function e(t, n, r) {
        for (var i = [], l = Array.from(t); l.length;) {
            var s = l.shift();
            if (!Xc(s, !1))
                if (s.tagName === "SLOT") {
                    var a = s.assignedElements(),
                        f = a.length ? a : s.children,
                        d = e(f, !0, r);
                    r.flatten ? i.push.apply(i, d) : i.push({
                        scopeParent: s,
                        candidates: d
                    })
                } else {
                    var p = Cs.call(s, Eg);
                    p && r.filter(s) && (n || !t.includes(s)) && i.push(s);
                    var g = s.shadowRoot || typeof r.getShadowRoot == "function" && r.getShadowRoot(s),
                        v = !Xc(g, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
                    if (g && v) {
                        var m = e(g === !0 ? s.children : g.children, !0, r);
                        r.flatten ? i.push.apply(i, m) : i.push({
                            scopeParent: s,
                            candidates: m
                        })
                    } else l.unshift.apply(l, s.children)
                }
        }
        return i
    },
    Fk = function(t) {
        return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
    },
    zk = function(t) {
        if (!t) throw new Error("No node provided");
        return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || X4(t)) && !Fk(t) ? 0 : t.tabIndex
    },
    ez = function(t, n) {
        var r = zk(t);
        return r < 0 && n && !Fk(t) ? 0 : r
    },
    tz = function(t, n) {
        return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex
    },
    $k = function(t) {
        return t.tagName === "INPUT"
    },
    nz = function(t) {
        return $k(t) && t.type === "hidden"
    },
    rz = function(t) {
        var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
            return r.tagName === "SUMMARY"
        });
        return n
    },
    iz = function(t, n) {
        for (var r = 0; r < t.length; r++)
            if (t[r].checked && t[r].form === n) return t[r]
    },
    oz = function(t) {
        if (!t.name) return !0;
        var n = t.form || Yc(t),
            r = function(a) {
                return n.querySelectorAll('input[type="radio"][name="' + a + '"]')
            },
            i;
        if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") i = r(window.CSS.escape(t.name));
        else try {
            i = r(t.name)
        } catch (s) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1
        }
        var l = iz(i, t.form);
        return !l || l === t
    },
    lz = function(t) {
        return $k(t) && t.type === "radio"
    },
    uz = function(t) {
        return lz(t) && !oz(t)
    },
    sz = function(t) {
        var n, r = t && Yc(t),
            i = (n = r) === null || n === void 0 ? void 0 : n.host,
            l = !1;
        if (r && r !== t) {
            var s, a, f;
            for (l = !!((s = i) !== null && s !== void 0 && (a = s.ownerDocument) !== null && a !== void 0 && a.contains(i) || t != null && (f = t.ownerDocument) !== null && f !== void 0 && f.contains(t)); !l && i;) {
                var d, p, g;
                r = Yc(i), i = (d = r) === null || d === void 0 ? void 0 : d.host, l = !!((p = i) !== null && p !== void 0 && (g = p.ownerDocument) !== null && g !== void 0 && g.contains(i))
            }
        }
        return l
    },
    tx = function(t) {
        var n = t.getBoundingClientRect(),
            r = n.width,
            i = n.height;
        return r === 0 && i === 0
    },
    az = function(t, n) {
        var r = n.displayCheck,
            i = n.getShadowRoot;
        if (getComputedStyle(t).visibility === "hidden") return !0;
        var l = Cs.call(t, "details>summary:first-of-type"),
            s = l ? t.parentElement : t;
        if (Cs.call(s, "details:not([open]) *")) return !0;
        if (!r || r === "full" || r === "legacy-full") {
            if (typeof i == "function") {
                for (var a = t; t;) {
                    var f = t.parentElement,
                        d = Yc(t);
                    if (f && !f.shadowRoot && i(f) === !0) return tx(t);
                    t.assignedSlot ? t = t.assignedSlot : !f && d !== t.ownerDocument ? t = d.host : t = f
                }
                t = a
            }
            if (sz(t)) return !t.getClientRects().length;
            if (r !== "legacy-full") return !0
        } else if (r === "non-zero-area") return tx(t);
        return !1
    },
    cz = function(t) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
            for (var n = t.parentElement; n;) {
                if (n.tagName === "FIELDSET" && n.disabled) {
                    for (var r = 0; r < n.children.length; r++) {
                        var i = n.children.item(r);
                        if (i.tagName === "LEGEND") return Cs.call(n, "fieldset[disabled] *") ? !0 : !i.contains(t)
                    }
                    return !0
                }
                n = n.parentElement
            }
        return !1
    },
    fz = function(t, n) {
        return !(n.disabled || Xc(n) || nz(n) || az(n, t) || rz(n) || cz(n))
    },
    nx = function(t, n) {
        return !(uz(n) || zk(n) < 0 || !fz(t, n))
    },
    dz = function(t) {
        var n = parseInt(t.getAttribute("tabindex"), 10);
        return !!(isNaN(n) || n >= 0)
    },
    pz = function e(t) {
        var n = [],
            r = [];
        return t.forEach(function(i, l) {
            var s = !!i.scopeParent,
                a = s ? i.scopeParent : i,
                f = ez(a, s),
                d = s ? e(i.candidates) : a;
            f === 0 ? s ? n.push.apply(n, d) : n.push(a) : r.push({
                documentOrder: l,
                tabIndex: f,
                item: i,
                isScope: s,
                content: d
            })
        }), r.sort(tz).reduce(function(i, l) {
            return l.isScope ? i.push.apply(i, l.content) : i.push(l.content), i
        }, []).concat(n)
    },
    dv = function(t, n) {
        n = n || {};
        var r;
        return n.getShadowRoot ? r = J4([t], n.includeContainer, {
            filter: nx.bind(null, n),
            flatten: !1,
            getShadowRoot: n.getShadowRoot,
            shadowRootFilter: dz
        }) : r = Z4(t, n.includeContainer, nx.bind(null, n)), pz(r)
    };

function pv(e) {
    return I.useMemo(() => e.every(t => t == null) ? null : t => {
        e.forEach(n => {
            typeof n == "function" ? n(t) : n != null && (n.current = t)
        })
    }, e)
}
const hv = "ArrowUp",
    Qf = "ArrowDown",
    Yl = "ArrowLeft",
    As = "ArrowRight";

function ja(e, t, n) {
    return Math.floor(e / t) !== n
}

function Ju(e, t) {
    return t < 0 || t >= e.current.length
}

function Xp(e, t) {
    return Kt(e, {
        disabledIndices: t
    })
}

function rx(e, t) {
    return Kt(e, {
        decrement: !0,
        startingIndex: e.current.length,
        disabledIndices: t
    })
}

function Kt(e, t) {
    let {
        startingIndex: n = -1,
        decrement: r = !1,
        disabledIndices: i,
        amount: l = 1
    } = t === void 0 ? {} : t;
    const s = e.current;
    let a = n;
    do {
        var f, d;
        a = a + (r ? -l : l)
    } while (a >= 0 && a <= s.length - 1 && (i ? i.includes(a) : s[a] == null || (f = s[a]) != null && f.hasAttribute("disabled") || ((d = s[a]) == null ? void 0 : d.getAttribute("aria-disabled")) === "true"));
    return a
}

function hz(e, t) {
    let {
        event: n,
        orientation: r,
        loop: i,
        cols: l,
        disabledIndices: s,
        minIndex: a,
        maxIndex: f,
        prevIndex: d,
        stopEvent: p = !1
    } = t, g = d;
    if (n.key === hv) {
        if (p && $t(n), d === -1) g = f;
        else if (g = Kt(e, {
                startingIndex: g,
                amount: l,
                decrement: !0,
                disabledIndices: s
            }), i && (d - l < a || g < 0)) {
            const v = d % l,
                m = f % l,
                E = f - (m - v);
            m === v ? g = f : g = m > v ? E : E - l
        }
        Ju(e, g) && (g = d)
    }
    if (n.key === Qf && (p && $t(n), d === -1 ? g = a : (g = Kt(e, {
            startingIndex: d,
            amount: l,
            disabledIndices: s
        }), i && d + l > f && (g = Kt(e, {
            startingIndex: d % l - l,
            amount: l,
            disabledIndices: s
        }))), Ju(e, g) && (g = d)), r === "both") {
        const v = Gw(d / l);
        n.key === As && (p && $t(n), d % l !== l - 1 ? (g = Kt(e, {
            startingIndex: d,
            disabledIndices: s
        }), i && ja(g, l, v) && (g = Kt(e, {
            startingIndex: d - d % l - 1,
            disabledIndices: s
        }))) : i && (g = Kt(e, {
            startingIndex: d - d % l - 1,
            disabledIndices: s
        })), ja(g, l, v) && (g = d)), n.key === Yl && (p && $t(n), d % l !== 0 ? (g = Kt(e, {
            startingIndex: d,
            disabledIndices: s,
            decrement: !0
        }), i && ja(g, l, v) && (g = Kt(e, {
            startingIndex: d + (l - d % l),
            decrement: !0,
            disabledIndices: s
        }))) : i && (g = Kt(e, {
            startingIndex: d + (l - d % l),
            decrement: !0,
            disabledIndices: s
        })), ja(g, l, v) && (g = d));
        const m = Gw(f / l) === v;
        Ju(e, g) && (i && m ? g = n.key === Yl ? f : Kt(e, {
            startingIndex: d - d % l - 1,
            disabledIndices: s
        }) : g = d)
    }
    return g
}
let ix = 0;

function ri(e, t) {
    t === void 0 && (t = {});
    const {
        preventScroll: n = !1,
        cancelPrevious: r = !0,
        sync: i = !1
    } = t;
    r && cancelAnimationFrame(ix);
    const l = () => e?.focus({
        preventScroll: n
    });
    i ? l() : ix = requestAnimationFrame(l)
}
var Qe = typeof document < "u" ? I.useLayoutEffect : I.useEffect;

function gz(e, t) {
    const n = e.compareDocumentPosition(t);
    return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0
}

function mz(e, t) {
    if (e.size !== t.size) return !1;
    for (const [n, r] of e.entries())
        if (r !== t.get(n)) return !1;
    return !0
}
const Bk = I.createContext({
    register: () => {},
    unregister: () => {},
    map: new Map,
    elementsRef: {
        current: []
    }
});

function vz(e) {
    let {
        children: t,
        elementsRef: n,
        labelsRef: r
    } = e;
    const [i, l] = I.useState(() => new Map), s = I.useCallback(f => {
        l(d => new Map(d).set(f, null))
    }, []), a = I.useCallback(f => {
        l(d => {
            const p = new Map(d);
            return p.delete(f), p
        })
    }, []);
    return Qe(() => {
        const f = new Map(i);
        Array.from(f.keys()).sort(gz).forEach((p, g) => {
            f.set(p, g)
        }), mz(i, f) || l(f)
    }, [i]), I.createElement(Bk.Provider, {
        value: I.useMemo(() => ({
            register: s,
            unregister: a,
            map: i,
            elementsRef: n,
            labelsRef: r
        }), [s, a, i, n, r])
    }, t)
}

function Uk(e) {
    let {
        label: t
    } = e === void 0 ? {} : e;
    const [n, r] = I.useState(null), i = I.useRef(null), {
        register: l,
        unregister: s,
        map: a,
        elementsRef: f,
        labelsRef: d
    } = I.useContext(Bk), p = I.useCallback(g => {
        if (i.current = g, n !== null && (f.current[n] = g, d)) {
            var v;
            const m = t !== void 0;
            d.current[n] = m ? t : (v = g?.textContent) != null ? v : null
        }
    }, [n, f, d, t]);
    return Qe(() => {
        const g = i.current;
        if (g) return l(g), () => {
            s(g)
        }
    }, [l, s]), Qe(() => {
        const g = i.current ? a.get(i.current) : null;
        g != null && r(g)
    }, [a]), I.useMemo(() => ({
        ref: p,
        index: n ?? -1
    }), [n, p])
}

function ks() {
    return ks = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ks.apply(this, arguments)
}
let Zp = !1,
    yz = 0;
const ox = () => "floating-ui-" + yz++;

function wz() {
    const [e, t] = I.useState(() => Zp ? ox() : void 0);
    return Qe(() => {
        e == null && t(ox())
    }, []), I.useEffect(() => {
        Zp || (Zp = !0)
    }, []), e
}
const xz = yS["useId".toString()],
    Ds = xz || wz;

function Hk() {
    const e = new Map;
    return {
        emit(t, n) {
            var r;
            (r = e.get(t)) == null || r.forEach(i => i(n))
        },
        on(t, n) {
            e.set(t, [...e.get(t) || [], n])
        },
        off(t, n) {
            var r;
            e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter(i => i !== n)) || [])
        }
    }
}
const jk = I.createContext(null),
    Wk = I.createContext(null),
    Vo = () => {
        var e;
        return ((e = I.useContext(jk)) == null ? void 0 : e.id) || null
    },
    so = () => I.useContext(Wk);

function Sz(e) {
    const t = Ds(),
        n = so(),
        r = Vo(),
        i = e || r;
    return Qe(() => {
        const l = {
            id: t,
            parentId: i
        };
        return n?.addNode(l), () => {
            n?.removeNode(l)
        }
    }, [n, t, i]), t
}

function Ez(e) {
    let {
        children: t,
        id: n
    } = e;
    const r = Vo();
    return I.createElement(jk.Provider, {
        value: I.useMemo(() => ({
            id: n,
            parentId: r
        }), [n, r])
    }, t)
}

function Cz(e) {
    let {
        children: t
    } = e;
    const n = I.useRef([]),
        r = I.useCallback(s => {
            n.current = [...n.current, s]
        }, []),
        i = I.useCallback(s => {
            n.current = n.current.filter(a => a !== s)
        }, []),
        l = I.useState(() => Hk())[0];
    return I.createElement(Wk.Provider, {
        value: I.useMemo(() => ({
            nodesRef: n,
            addNode: r,
            removeNode: i,
            events: l
        }), [n, r, i, l])
    }, t)
}

function Xl(e) {
    return "data-floating-ui-" + e
}

function vn(e) {
    const t = I.useRef(e);
    return Qe(() => {
        t.current = e
    }), t
}
const lx = Xl("safe-polygon");

function Jp(e, t, n) {
    return n && !Wc(n) ? 0 : typeof e == "number" ? e : e?.[t]
}

function kz(e, t) {
    t === void 0 && (t = {});
    const {
        open: n,
        onOpenChange: r,
        dataRef: i,
        events: l,
        elements: {
            domReference: s,
            floating: a
        },
        refs: f
    } = e, {
        enabled: d = !0,
        delay: p = 0,
        handleClose: g = null,
        mouseOnly: v = !1,
        restMs: m = 0,
        move: E = !0
    } = t, S = so(), A = Vo(), y = vn(g), x = vn(p), k = I.useRef(), P = I.useRef(), N = I.useRef(), T = I.useRef(), F = I.useRef(!0), z = I.useRef(!1), q = I.useRef(() => {}), Q = I.useCallback(() => {
        var U;
        const Z = (U = i.current.openEvent) == null ? void 0 : U.type;
        return Z?.includes("mouse") && Z !== "mousedown"
    }, [i]);
    I.useEffect(() => {
        if (!d) return;

        function U() {
            clearTimeout(P.current), clearTimeout(T.current), F.current = !0
        }
        return l.on("dismiss", U), () => {
            l.off("dismiss", U)
        }
    }, [d, l]), I.useEffect(() => {
        if (!d || !y.current || !n) return;

        function U(ue) {
            Q() && r(!1, ue)
        }
        const Z = rn(a).documentElement;
        return Z.addEventListener("mouseleave", U), () => {
            Z.removeEventListener("mouseleave", U)
        }
    }, [a, n, r, d, y, i, Q]);
    const $ = I.useCallback(function(U, Z) {
            Z === void 0 && (Z = !0);
            const ue = Jp(x.current, "close", k.current);
            ue && !N.current ? (clearTimeout(P.current), P.current = setTimeout(() => r(!1, U), ue)) : Z && (clearTimeout(P.current), r(!1, U))
        }, [x, r]),
        G = I.useCallback(() => {
            q.current(), N.current = void 0
        }, []),
        B = I.useCallback(() => {
            if (z.current) {
                const U = rn(f.floating.current).body;
                U.style.pointerEvents = "", U.removeAttribute(lx), z.current = !1
            }
        }, [f]);
    return I.useEffect(() => {
        if (!d) return;

        function U() {
            return i.current.openEvent ? ["click", "mousedown"].includes(i.current.openEvent.type) : !1
        }

        function Z(j) {
            if (clearTimeout(P.current), F.current = !1, v && !Wc(k.current) || m > 0 && Jp(x.current, "open") === 0) return;
            const J = Jp(x.current, "open", k.current);
            J ? P.current = setTimeout(() => {
                r(!0, j)
            }, J) : r(!0, j)
        }

        function ue(j) {
            if (U()) return;
            q.current();
            const J = rn(a);
            if (clearTimeout(T.current), y.current) {
                n || clearTimeout(P.current), N.current = y.current({
                    ...e,
                    tree: S,
                    x: j.clientX,
                    y: j.clientY,
                    onClose() {
                        B(), G(), $(j)
                    }
                });
                const ne = N.current;
                J.addEventListener("mousemove", ne), q.current = () => {
                    J.removeEventListener("mousemove", ne)
                };
                return
            }(k.current === "touch" ? !Pt(a, j.relatedTarget) : !0) && $(j)
        }

        function oe(j) {
            U() || y.current == null || y.current({
                ...e,
                tree: S,
                x: j.clientX,
                y: j.clientY,
                onClose() {
                    B(), G(), $(j)
                }
            })(j)
        }
        if (hn(s)) {
            const j = s;
            return n && j.addEventListener("mouseleave", oe), a?.addEventListener("mouseleave", oe), E && j.addEventListener("mousemove", Z, {
                once: !0
            }), j.addEventListener("mouseenter", Z), j.addEventListener("mouseleave", ue), () => {
                n && j.removeEventListener("mouseleave", oe), a?.removeEventListener("mouseleave", oe), E && j.removeEventListener("mousemove", Z), j.removeEventListener("mouseenter", Z), j.removeEventListener("mouseleave", ue)
            }
        }
    }, [s, a, d, e, v, m, E, $, G, B, r, n, S, x, y, i]), Qe(() => {
        var U;
        if (d && n && (U = y.current) != null && U.__options.blockPointerEvents && Q()) {
            const oe = rn(a).body;
            if (oe.setAttribute(lx, ""), oe.style.pointerEvents = "none", z.current = !0, hn(s) && a) {
                var Z, ue;
                const j = s,
                    J = S == null || (Z = S.nodesRef.current.find(b => b.id === A)) == null || (ue = Z.context) == null ? void 0 : ue.elements.floating;
                return J && (J.style.pointerEvents = ""), j.style.pointerEvents = "auto", a.style.pointerEvents = "auto", () => {
                    j.style.pointerEvents = "", a.style.pointerEvents = ""
                }
            }
        }
    }, [d, n, A, a, s, S, y, i, Q]), Qe(() => {
        n || (k.current = void 0, G(), B())
    }, [n, G, B]), I.useEffect(() => () => {
        G(), clearTimeout(P.current), clearTimeout(T.current), B()
    }, [d, s, G, B]), I.useMemo(() => {
        if (!d) return {};

        function U(Z) {
            k.current = Z.pointerType
        }
        return {
            reference: {
                onPointerDown: U,
                onPointerEnter: U,
                onMouseMove(Z) {
                    n || m === 0 || (clearTimeout(T.current), T.current = setTimeout(() => {
                        F.current || r(!0, Z.nativeEvent)
                    }, m))
                }
            },
            floating: {
                onMouseEnter() {
                    clearTimeout(P.current)
                },
                onMouseLeave(Z) {
                    l.emit("dismiss", {
                        type: "mouseLeave",
                        data: {
                            returnFocus: !1
                        }
                    }), $(Z.nativeEvent, !1)
                }
            }
        }
    }, [l, d, m, n, r, $])
}

function _z(e, t) {
    var n;
    let r = [],
        i = (n = e.find(l => l.id === t)) == null ? void 0 : n.parentId;
    for (; i;) {
        const l = e.find(s => s.id === i);
        i = l?.parentId, l && (r = r.concat(l))
    }
    return r
}

function Do(e, t) {
    let n = e.filter(i => {
            var l;
            return i.parentId === t && ((l = i.context) == null ? void 0 : l.open)
        }),
        r = n;
    for (; r.length;) r = e.filter(i => {
        var l;
        return (l = r) == null ? void 0 : l.some(s => {
            var a;
            return i.parentId === s.id && ((a = i.context) == null ? void 0 : a.open)
        })
    }), n = n.concat(r);
    return n
}

function bz(e, t) {
    let n, r = -1;

    function i(l, s) {
        s > r && (n = l, r = s), Do(e, l).forEach(f => {
            i(f.id, s + 1)
        })
    }
    return i(t, 0), e.find(l => l.id === n)
}
let cl = new WeakMap,
    Wa = new WeakSet,
    Va = {},
    eh = 0;
const Oz = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype,
    Vk = e => e && (e.host || Vk(e.parentNode)),
    Tz = (e, t) => t.map(n => {
        if (e.contains(n)) return n;
        const r = Vk(n);
        return e.contains(r) ? r : null
    }).filter(n => n != null);

function Iz(e, t, n, r) {
    const i = "data-floating-ui-inert",
        l = r ? "inert" : n ? "aria-hidden" : null,
        s = Tz(t, e),
        a = new Set,
        f = new Set(s),
        d = [];
    Va[i] || (Va[i] = new WeakMap);
    const p = Va[i];
    s.forEach(g), v(t), a.clear();

    function g(m) {
        !m || a.has(m) || (a.add(m), m.parentNode && g(m.parentNode))
    }

    function v(m) {
        !m || f.has(m) || Array.prototype.forEach.call(m.children, E => {
            if (a.has(E)) v(E);
            else {
                const S = l ? E.getAttribute(l) : null,
                    A = S !== null && S !== "false",
                    y = (cl.get(E) || 0) + 1,
                    x = (p.get(E) || 0) + 1;
                cl.set(E, y), p.set(E, x), d.push(E), y === 1 && A && Wa.add(E), x === 1 && E.setAttribute(i, ""), !A && l && E.setAttribute(l, "true")
            }
        })
    }
    return eh++, () => {
        d.forEach(m => {
            const E = (cl.get(m) || 0) - 1,
                S = (p.get(m) || 0) - 1;
            cl.set(m, E), p.set(m, S), E || (!Wa.has(m) && l && m.removeAttribute(l), Wa.delete(m)), S || m.removeAttribute(i)
        }), eh--, eh || (cl = new WeakMap, cl = new WeakMap, Wa = new WeakSet, Va = {})
    }
}

function ux(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const r = rn(e[0]).body;
    return Iz(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n)
}
const gv = () => ({
    getShadowRoot: !0,
    displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});

function qk(e, t) {
    const n = dv(e, gv());
    t === "prev" && n.reverse();
    const r = n.indexOf(Li(rn(e)));
    return n.slice(r + 1)[0]
}

function Gk() {
    return qk(document.body, "next")
}

function Kk() {
    return qk(document.body, "prev")
}

function es(e, t) {
    const n = t || e.currentTarget,
        r = e.relatedTarget;
    return !r || !Pt(n, r)
}

function Rz(e) {
    dv(e, gv()).forEach(n => {
        n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1")
    })
}

function Pz(e) {
    e.querySelectorAll("[data-tabindex]").forEach(n => {
        const r = n.dataset.tabindex;
        delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex")
    })
}
const mv = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "fixed",
    whiteSpace: "nowrap",
    width: "1px",
    top: 0,
    left: 0
};
let Az;

function sx(e) {
    e.key === "Tab" && (e.target, clearTimeout(Az))
}
const Zc = I.forwardRef(function(t, n) {
        const [r, i] = I.useState();
        Qe(() => (wk() && i("button"), document.addEventListener("keydown", sx), () => {
            document.removeEventListener("keydown", sx)
        }), []);
        const l = {
            ref: n,
            tabIndex: 0,
            role: r,
            "aria-hidden": r ? void 0 : !0,
            [Xl("focus-guard")]: "",
            style: mv
        };
        return I.createElement("span", ks({}, t, l))
    }),
    Qk = I.createContext(null);

function Dz(e) {
    let {
        id: t,
        root: n
    } = e === void 0 ? {} : e;
    const [r, i] = I.useState(null), l = Ds(), s = Yk(), a = I.useMemo(() => ({
        id: t,
        root: n,
        portalContext: s,
        uniqueId: l
    }), [t, n, s, l]), f = I.useRef();
    return Qe(() => () => {
        r?.remove()
    }, [r, a]), Qe(() => {
        if (f.current === a) return;
        f.current = a;
        const {
            id: d,
            root: p,
            portalContext: g,
            uniqueId: v
        } = a, m = d ? document.getElementById(d) : null, E = Xl("portal");
        if (m) {
            const S = document.createElement("div");
            S.id = v, S.setAttribute(E, ""), m.appendChild(S), i(S)
        } else {
            let S = p || g?.portalNode;
            S && !hn(S) && (S = S.current), S = S || document.body;
            let A = null;
            d && (A = document.createElement("div"), A.id = d, S.appendChild(A));
            const y = document.createElement("div");
            y.id = v, y.setAttribute(E, ""), S = A || S, S.appendChild(y), i(y)
        }
    }, [a]), r
}

function vv(e) {
    let {
        children: t,
        id: n,
        root: r = null,
        preserveTabOrder: i = !0
    } = e;
    const l = Dz({
            id: n,
            root: r
        }),
        [s, a] = I.useState(null),
        f = I.useRef(null),
        d = I.useRef(null),
        p = I.useRef(null),
        g = I.useRef(null),
        v = !!s && !s.modal && s.open && i && !!(r || l);
    return I.useEffect(() => {
        if (!l || !i || s != null && s.modal) return;

        function m(E) {
            l && es(E) && (E.type === "focusin" ? Pz : Rz)(l)
        }
        return l.addEventListener("focusin", m, !0), l.addEventListener("focusout", m, !0), () => {
            l.removeEventListener("focusin", m, !0), l.removeEventListener("focusout", m, !0)
        }
    }, [l, i, s?.modal]), I.createElement(Qk.Provider, {
        value: I.useMemo(() => ({
            preserveTabOrder: i,
            beforeOutsideRef: f,
            afterOutsideRef: d,
            beforeInsideRef: p,
            afterInsideRef: g,
            portalNode: l,
            setFocusManagerState: a
        }), [i, l])
    }, v && l && I.createElement(Zc, {
        "data-type": "outside",
        ref: f,
        onFocus: m => {
            if (es(m, l)) {
                var E;
                (E = p.current) == null || E.focus()
            } else {
                const S = Kk() || s?.refs.domReference.current;
                S?.focus()
            }
        }
    }), v && l && I.createElement("span", {
        "aria-owns": l.id,
        style: mv
    }), l && tu.createPortal(t, l), v && l && I.createElement(Zc, {
        "data-type": "outside",
        ref: d,
        onFocus: m => {
            if (es(m, l)) {
                var E;
                (E = g.current) == null || E.focus()
            } else {
                const S = Gk() || s?.refs.domReference.current;
                S?.focus(), s?.closeOnFocusOut && s?.onOpenChange(!1, m.nativeEvent)
            }
        }
    }))
}
const Yk = () => I.useContext(Qk),
    Nz = I.forwardRef(function(t, n) {
        return I.createElement("button", ks({}, t, {
            type: "button",
            ref: n,
            tabIndex: -1,
            style: mv
        }))
    });

function Xk(e) {
    const {
        context: t,
        children: n,
        disabled: r = !1,
        order: i = ["content"],
        guards: l = !0,
        initialFocus: s = 0,
        returnFocus: a = !0,
        modal: f = !0,
        visuallyHiddenDismiss: d = !1,
        closeOnFocusOut: p = !0
    } = e, {
        open: g,
        refs: v,
        nodeId: m,
        onOpenChange: E,
        events: S,
        dataRef: A,
        elements: {
            domReference: y,
            floating: x
        }
    } = t, k = Oz() ? l : !0, P = vn(i), N = vn(s), T = vn(a), F = so(), z = Yk(), q = typeof s == "number" && s < 0, Q = I.useRef(null), $ = I.useRef(null), G = I.useRef(!1), B = I.useRef(null), U = I.useRef(!1), Z = z != null, ue = y && y.getAttribute("role") === "combobox" && xk(y) && q, oe = I.useCallback(function(ne) {
        return ne === void 0 && (ne = x), ne ? dv(ne, gv()) : []
    }, [x]), j = I.useCallback(ne => {
        const ae = oe(ne);
        return P.current.map(O => y && O === "reference" ? y : x && O === "floating" ? x : ae).filter(Boolean).flat()
    }, [y, x, P, oe]);
    I.useEffect(() => {
        if (r || !f) return;

        function ne(O) {
            if (O.key === "Tab") {
                Pt(x, Li(rn(x))) && oe().length === 0 && !ue && $t(O);
                const de = j(),
                    Re = uv(O);
                P.current[0] === "reference" && Re === y && ($t(O), O.shiftKey ? ri(de[de.length - 1]) : ri(de[1])), P.current[1] === "floating" && Re === x && O.shiftKey && ($t(O), ri(de[0]))
            }
        }
        const ae = rn(x);
        return ae.addEventListener("keydown", ne), () => {
            ae.removeEventListener("keydown", ne)
        }
    }, [r, y, x, f, P, v, ue, oe, j]), I.useEffect(() => {
        if (r || !p) return;

        function ne() {
            U.current = !0, setTimeout(() => {
                U.current = !1
            })
        }

        function ae(O) {
            const de = O.relatedTarget;
            queueMicrotask(() => {
                const Re = !(Pt(y, de) || Pt(x, de) || Pt(de, x) || Pt(z?.portalNode, de) || de != null && de.hasAttribute(Xl("focus-guard")) || F && (Do(F.nodesRef.current, m).find(me => {
                    var Ae, Se;
                    return Pt((Ae = me.context) == null ? void 0 : Ae.elements.floating, de) || Pt((Se = me.context) == null ? void 0 : Se.elements.domReference, de)
                }) || _z(F.nodesRef.current, m).find(me => {
                    var Ae, Se;
                    return ((Ae = me.context) == null ? void 0 : Ae.elements.floating) === de || ((Se = me.context) == null ? void 0 : Se.elements.domReference) === de
                })));
                de && Re && !U.current && de !== B.current && (G.current = !0, E(!1, O))
            })
        }
        if (x && Kl(y)) return y.addEventListener("focusout", ae), y.addEventListener("pointerdown", ne), !f && x.addEventListener("focusout", ae), () => {
            y.removeEventListener("focusout", ae), y.removeEventListener("pointerdown", ne), !f && x.removeEventListener("focusout", ae)
        }
    }, [r, y, x, f, m, F, z, E, p]), I.useEffect(() => {
        var ne;
        if (r) return;
        const ae = Array.from((z == null || (ne = z.portalNode) == null ? void 0 : ne.querySelectorAll("[" + Xl("portal") + "]")) || []);
        if (x) {
            const O = [x, ...ae, Q.current, $.current, P.current.includes("reference") || ue ? y : null].filter(Re => Re != null),
                de = f ? ux(O, k, !k) : ux(O);
            return () => {
                de()
            }
        }
    }, [r, y, x, f, P, z, ue, k]), Qe(() => {
        if (r || !x) return;
        const ne = rn(x),
            ae = Li(ne);
        queueMicrotask(() => {
            const O = j(x),
                de = N.current,
                Re = (typeof de == "number" ? O[de] : de.current) || x,
                me = Pt(x, ae);
            !q && !me && g && ri(Re, {
                preventScroll: Re === x
            })
        })
    }, [r, g, x, q, j, N]), Qe(() => {
        if (r || !x) return;
        let ne = !1;
        const ae = rn(x),
            O = Li(ae),
            de = A.current;
        B.current = O;

        function Re(me) {
            if (me.type === "escapeKey" && v.domReference.current && (B.current = v.domReference.current), ["referencePress", "escapeKey"].includes(me.type)) return;
            const Ae = me.data.returnFocus;
            typeof Ae == "object" ? (G.current = !1, ne = Ae.preventScroll) : G.current = !Ae
        }
        return S.on("dismiss", Re), () => {
            S.off("dismiss", Re);
            const me = Li(ae);
            (Pt(x, me) || F && Do(F.nodesRef.current, m).some(Se => {
                var Le;
                return Pt((Le = Se.context) == null ? void 0 : Le.elements.floating, me)
            }) || de.openEvent && ["click", "mousedown"].includes(de.openEvent.type)) && v.domReference.current && (B.current = v.domReference.current), T.current && Kl(B.current) && !G.current && ri(B.current, {
                cancelPrevious: !1,
                preventScroll: ne
            })
        }
    }, [r, x, T, A, v, S, F, m]), Qe(() => {
        if (!(r || !z)) return z.setFocusManagerState({
            modal: f,
            closeOnFocusOut: p,
            open: g,
            onOpenChange: E,
            refs: v
        }), () => {
            z.setFocusManagerState(null)
        }
    }, [r, z, f, g, E, v, p]), Qe(() => {
        if (!r && x && typeof MutationObserver == "function" && !q) {
            const ne = () => {
                const O = x.getAttribute("tabindex");
                P.current.includes("floating") || Li(rn(x)) !== v.domReference.current && oe().length === 0 ? O !== "0" && x.setAttribute("tabindex", "0") : O !== "-1" && x.setAttribute("tabindex", "-1")
            };
            ne();
            const ae = new MutationObserver(ne);
            return ae.observe(x, {
                childList: !0,
                subtree: !0,
                attributes: !0
            }), () => {
                ae.disconnect()
            }
        }
    }, [r, x, v, P, oe, q]);

    function J(ne) {
        return r || !d || !f ? null : I.createElement(Nz, {
            ref: ne === "start" ? Q : $,
            onClick: ae => E(!1, ae.nativeEvent)
        }, typeof d == "string" ? d : "Dismiss")
    }
    const b = !r && k && !ue && (Z || f);
    return I.createElement(I.Fragment, null, b && I.createElement(Zc, {
        "data-type": "inside",
        ref: z?.beforeInsideRef,
        onFocus: ne => {
            if (f) {
                const O = j();
                ri(i[0] === "reference" ? O[0] : O[O.length - 1])
            } else if (z != null && z.preserveTabOrder && z.portalNode)
                if (G.current = !1, es(ne, z.portalNode)) {
                    const O = Gk() || y;
                    O?.focus()
                } else {
                    var ae;
                    (ae = z.beforeOutsideRef.current) == null || ae.focus()
                }
        }
    }), !ue && J("start"), n, J("end"), b && I.createElement(Zc, {
        "data-type": "inside",
        ref: z?.afterInsideRef,
        onFocus: ne => {
            if (f) ri(j()[0]);
            else if (z != null && z.preserveTabOrder && z.portalNode)
                if (p && (G.current = !0), es(ne, z.portalNode)) {
                    const O = Kk() || y;
                    O?.focus()
                } else {
                    var ae;
                    (ae = z.afterOutsideRef.current) == null || ae.focus()
                }
        }
    }))
}
const th = new Set,
    Zk = I.forwardRef(function(t, n) {
        let {
            lockScroll: r = !1,
            ...i
        } = t;
        const l = Ds();
        return Qe(() => {
            if (!r) return;
            th.add(l);
            const s = /iP(hone|ad|od)|iOS/.test(lv()),
                a = document.body.style,
                d = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight",
                p = window.innerWidth - document.documentElement.clientWidth,
                g = a.left ? parseFloat(a.left) : window.pageXOffset,
                v = a.top ? parseFloat(a.top) : window.pageYOffset;
            if (a.overflow = "hidden", p && (a[d] = p + "px"), s) {
                var m, E;
                const S = ((m = window.visualViewport) == null ? void 0 : m.offsetLeft) || 0,
                    A = ((E = window.visualViewport) == null ? void 0 : E.offsetTop) || 0;
                Object.assign(a, {
                    position: "fixed",
                    top: -(v - Math.floor(A)) + "px",
                    left: -(g - Math.floor(S)) + "px",
                    right: "0"
                })
            }
            return () => {
                th.delete(l), th.size === 0 && (Object.assign(a, {
                    overflow: "",
                    [d]: ""
                }), s && (Object.assign(a, {
                    position: "",
                    top: "",
                    left: "",
                    right: ""
                }), window.scrollTo(g, v)))
            }
        }, [l, r]), I.createElement("div", ks({
            ref: n
        }, i, {
            style: {
                position: "fixed",
                overflow: "auto",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...i.style
            }
        }))
    });

function ax(e) {
    return Kl(e.target) && e.target.tagName === "BUTTON"
}

function cx(e) {
    return xk(e)
}

function Mz(e, t) {
    t === void 0 && (t = {});
    const {
        open: n,
        onOpenChange: r,
        dataRef: i,
        elements: {
            domReference: l
        }
    } = e, {
        enabled: s = !0,
        event: a = "click",
        toggle: f = !0,
        ignoreMouse: d = !1,
        keyboardHandlers: p = !0
    } = t, g = I.useRef(), v = I.useRef(!1);
    return I.useMemo(() => s ? {
        reference: {
            onPointerDown(m) {
                g.current = m.pointerType
            },
            onMouseDown(m) {
                m.button === 0 && (Wc(g.current, !0) && d || a !== "click" && (n && f && (!i.current.openEvent || i.current.openEvent.type === "mousedown") ? r(!1, m.nativeEvent) : (m.preventDefault(), r(!0, m.nativeEvent))))
            },
            onClick(m) {
                if (a === "mousedown" && g.current) {
                    g.current = void 0;
                    return
                }
                Wc(g.current, !0) && d || (n && f && (!i.current.openEvent || i.current.openEvent.type === "click") ? r(!1, m.nativeEvent) : r(!0, m.nativeEvent))
            },
            onKeyDown(m) {
                g.current = void 0, !(m.defaultPrevented || !p || ax(m)) && (m.key === " " && !cx(l) && (m.preventDefault(), v.current = !0), m.key === "Enter" && r(!(n && f), m.nativeEvent))
            },
            onKeyUp(m) {
                m.defaultPrevented || !p || ax(m) || cx(l) || m.key === " " && v.current && (v.current = !1, r(!(n && f), m.nativeEvent))
            }
        }
    } : {}, [s, i, a, d, p, l, f, n, r])
}
const Lz = yS["useInsertionEffect".toString()],
    Fz = Lz || (e => e());

function Xi(e) {
    const t = I.useRef(() => {});
    return Fz(() => {
        t.current = e
    }), I.useCallback(function() {
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return t.current == null ? void 0 : t.current(...r)
    }, [])
}
const zz = {
        pointerdown: "onPointerDown",
        mousedown: "onMouseDown",
        click: "onClick"
    },
    $z = {
        pointerdown: "onPointerDownCapture",
        mousedown: "onMouseDownCapture",
        click: "onClickCapture"
    },
    Bz = e => {
        var t, n;
        return {
            escapeKeyBubbles: typeof e == "boolean" ? e : (t = e?.escapeKey) != null ? t : !1,
            outsidePressBubbles: typeof e == "boolean" ? e : (n = e?.outsidePress) != null ? n : !0
        }
    };

function Jk(e, t) {
    t === void 0 && (t = {});
    const {
        open: n,
        onOpenChange: r,
        events: i,
        nodeId: l,
        elements: {
            reference: s,
            domReference: a,
            floating: f
        },
        dataRef: d
    } = e, {
        enabled: p = !0,
        escapeKey: g = !0,
        outsidePress: v = !0,
        outsidePressEvent: m = "pointerdown",
        referencePress: E = !1,
        referencePressEvent: S = "pointerdown",
        ancestorScroll: A = !1,
        bubbles: y
    } = t, x = so(), k = Vo() != null, P = Xi(typeof v == "function" ? v : () => !1), N = typeof v == "function" ? P : v, T = I.useRef(!1), {
        escapeKeyBubbles: F,
        outsidePressBubbles: z
    } = Bz(y), q = Xi($ => {
        if (!n || !p || !g || $.key !== "Escape") return;
        const G = x ? Do(x.nodesRef.current, l) : [];
        if (!F && ($.stopPropagation(), G.length > 0)) {
            let B = !0;
            if (G.forEach(U => {
                    var Z;
                    if ((Z = U.context) != null && Z.open && !U.context.dataRef.current.__escapeKeyBubbles) {
                        B = !1;
                        return
                    }
                }), !B) return
        }
        i.emit("dismiss", {
            type: "escapeKey",
            data: {
                returnFocus: {
                    preventScroll: !1
                }
            }
        }), r(!1, p4($) ? $.nativeEvent : $)
    }), Q = Xi($ => {
        const G = T.current;
        if (T.current = !1, G || typeof N == "function" && !N($)) return;
        const B = uv($),
            U = "[" + Xl("inert") + "]",
            Z = rn(f).querySelectorAll(U);
        let ue = hn(B) ? B : null;
        for (; ue && !s4(ue);) {
            const J = c4(ue);
            if (J === rn(f).body || !hn(J)) break;
            ue = J
        }
        if (Z.length && hn(B) && !h4(B) && !Pt(B, f) && Array.from(Z).every(J => !Pt(ue, J))) return;
        if (Kl(B) && f) {
            const J = B.clientWidth > 0 && B.scrollWidth > B.clientWidth,
                b = B.clientHeight > 0 && B.scrollHeight > B.clientHeight;
            let ne = b && $.offsetX > B.clientWidth;
            if (b && a4(B).direction === "rtl" && (ne = $.offsetX <= B.offsetWidth - B.clientWidth), ne || J && $.offsetY > B.clientHeight) return
        }
        const oe = x && Do(x.nodesRef.current, l).some(J => {
            var b;
            return Qp($, (b = J.context) == null ? void 0 : b.elements.floating)
        });
        if (Qp($, f) || Qp($, a) || oe) return;
        const j = x ? Do(x.nodesRef.current, l) : [];
        if (j.length > 0) {
            let J = !0;
            if (j.forEach(b => {
                    var ne;
                    if ((ne = b.context) != null && ne.open && !b.context.dataRef.current.__outsidePressBubbles) {
                        J = !1;
                        return
                    }
                }), !J) return
        }
        i.emit("dismiss", {
            type: "outsidePress",
            data: {
                returnFocus: k ? {
                    preventScroll: !0
                } : vk($) || yk($)
            }
        }), r(!1, $)
    });
    return I.useEffect(() => {
        if (!n || !p) return;
        d.current.__escapeKeyBubbles = F, d.current.__outsidePressBubbles = z;

        function $(U) {
            r(!1, U)
        }
        const G = rn(f);
        g && G.addEventListener("keydown", q), N && G.addEventListener(m, Q);
        let B = [];
        return A && (hn(a) && (B = Yi(a)), hn(f) && (B = B.concat(Yi(f))), !hn(s) && s && s.contextElement && (B = B.concat(Yi(s.contextElement)))), B = B.filter(U => {
            var Z;
            return U !== ((Z = G.defaultView) == null ? void 0 : Z.visualViewport)
        }), B.forEach(U => {
            U.addEventListener("scroll", $, {
                passive: !0
            })
        }), () => {
            g && G.removeEventListener("keydown", q), N && G.removeEventListener(m, Q), B.forEach(U => {
                U.removeEventListener("scroll", $)
            })
        }
    }, [d, f, a, s, g, N, m, n, r, A, p, F, z, q, Q]), I.useEffect(() => {
        T.current = !1
    }, [N, m]), I.useMemo(() => p ? {
        reference: {
            onKeyDown: q,
            [zz[S]]: $ => {
                E && (i.emit("dismiss", {
                    type: "referencePress",
                    data: {
                        returnFocus: !1
                    }
                }), r(!1, $.nativeEvent))
            }
        },
        floating: {
            onKeyDown: q,
            [$z[m]]: () => {
                T.current = !0
            }
        }
    } : {}, [p, i, E, m, S, r, q])
}

function yv(e) {
    var t;
    e === void 0 && (e = {});
    const {
        open: n = !1,
        onOpenChange: r,
        nodeId: i
    } = e, [l, s] = I.useState(null), a = ((t = e.elements) == null ? void 0 : t.reference) || l, f = Q4(e), d = so(), p = Xi((P, N) => {
        P && (v.current.openEvent = N), r?.(P, N)
    }), g = I.useRef(null), v = I.useRef({}), m = I.useState(() => Hk())[0], E = Ds(), S = I.useCallback(P => {
        const N = hn(P) ? {
            getBoundingClientRect: () => P.getBoundingClientRect(),
            contextElement: P
        } : P;
        f.refs.setReference(N)
    }, [f.refs]), A = I.useCallback(P => {
        (hn(P) || P === null) && (g.current = P, s(P)), (hn(f.refs.reference.current) || f.refs.reference.current === null || P !== null && !hn(P)) && f.refs.setReference(P)
    }, [f.refs]), y = I.useMemo(() => ({
        ...f.refs,
        setReference: A,
        setPositionReference: S,
        domReference: g
    }), [f.refs, A, S]), x = I.useMemo(() => ({
        ...f.elements,
        domReference: a
    }), [f.elements, a]), k = I.useMemo(() => ({
        ...f,
        refs: y,
        elements: x,
        dataRef: v,
        nodeId: i,
        floatingId: E,
        events: m,
        open: n,
        onOpenChange: p
    }), [f, i, E, m, n, p, y, x]);
    return Qe(() => {
        const P = d?.nodesRef.current.find(N => N.id === i);
        P && (P.context = k)
    }), I.useMemo(() => ({
        ...f,
        context: k,
        refs: y,
        elements: x
    }), [f, y, x, k])
}

function nh(e, t, n) {
    const r = new Map;
    return {
        ...n === "floating" && {
            tabIndex: -1
        },
        ...e,
        ...t.map(i => i ? i[n] : null).concat(e).reduce((i, l) => (l && Object.entries(l).forEach(s => {
            let [a, f] = s;
            if (a.indexOf("on") === 0) {
                if (r.has(a) || r.set(a, []), typeof f == "function") {
                    var d;
                    (d = r.get(a)) == null || d.push(f), i[a] = function() {
                        for (var p, g = arguments.length, v = new Array(g), m = 0; m < g; m++) v[m] = arguments[m];
                        return (p = r.get(a)) == null ? void 0 : p.map(E => E(...v)).find(E => E !== void 0)
                    }
                }
            } else i[a] = f
        }), i), {})
    }
}

function e_(e) {
    e === void 0 && (e = []);
    const t = e,
        n = I.useCallback(l => nh(l, e, "reference"), t),
        r = I.useCallback(l => nh(l, e, "floating"), t),
        i = I.useCallback(l => nh(l, e, "item"), e.map(l => l?.item));
    return I.useMemo(() => ({
        getReferenceProps: n,
        getFloatingProps: r,
        getItemProps: i
    }), [n, r, i])
}
let fx = !1;

function Yf(e, t, n) {
    switch (e) {
        case "vertical":
            return t;
        case "horizontal":
            return n;
        default:
            return t || n
    }
}

function dx(e, t) {
    return Yf(t, e === hv || e === Qf, e === Yl || e === As)
}

function rh(e, t, n) {
    return Yf(t, e === Qf, n ? e === Yl : e === As) || e === "Enter" || e == " " || e === ""
}

function Uz(e, t, n) {
    return Yf(t, n ? e === Yl : e === As, e === Qf)
}

function px(e, t, n) {
    return Yf(t, n ? e === As : e === Yl, e === hv)
}

function Hz(e, t) {
    const {
        open: n,
        onOpenChange: r,
        refs: i,
        elements: {
            domReference: l,
            floating: s
        }
    } = e, {
        listRef: a,
        activeIndex: f,
        onNavigate: d = () => {},
        enabled: p = !0,
        selectedIndex: g = null,
        allowEscape: v = !1,
        loop: m = !1,
        nested: E = !1,
        rtl: S = !1,
        virtual: A = !1,
        focusItemOnOpen: y = "auto",
        focusItemOnHover: x = !0,
        openOnArrowKeyDown: k = !0,
        disabledIndices: P = void 0,
        orientation: N = "vertical",
        cols: T = 1,
        scrollItemIntoView: F = !0,
        virtualItemRef: z
    } = t, q = Vo(), Q = so(), $ = Xi(d), G = I.useRef(y), B = I.useRef(g ?? -1), U = I.useRef(null), Z = I.useRef(!0), ue = I.useRef($), oe = I.useRef(!!s), j = I.useRef(!1), J = I.useRef(!1), b = vn(P), ne = vn(n), ae = vn(F), [O, de] = I.useState(), [Re, me] = I.useState(), Ae = Xi(function(Te, Be, Fe) {
        Fe === void 0 && (Fe = !1);
        const Ge = Te.current[Be.current];
        Ge && (A ? (de(Ge.id), Q?.events.emit("virtualfocus", Ge), z && (z.current = Ge)) : ri(Ge, {
            preventScroll: !0,
            sync: d4() && wk() ? fx || j.current : !1
        }), requestAnimationFrame(() => {
            const yt = ae.current;
            yt && Ge && (Fe || !Z.current) && (Ge.scrollIntoView == null || Ge.scrollIntoView(typeof yt == "boolean" ? {
                block: "nearest",
                inline: "nearest"
            } : yt))
        }))
    });
    Qe(() => {
        document.createElement("div").focus({
            get preventScroll() {
                return fx = !0, !1
            }
        })
    }, []), Qe(() => {
        p && (n && s ? G.current && g != null && (J.current = !0, $(g)) : oe.current && (B.current = -1, ue.current(null)))
    }, [p, n, s, g, $]), Qe(() => {
        if (p && n && s)
            if (f == null) {
                if (j.current = !1, g != null) return;
                if (oe.current && (B.current = -1, Ae(a, B)), !oe.current && G.current && (U.current != null || G.current === !0 && U.current == null)) {
                    let Te = 0;
                    const Be = () => {
                        a.current[0] == null ? (Te < 2 && (Te ? requestAnimationFrame : queueMicrotask)(Be), Te++) : (B.current = U.current == null || rh(U.current, N, S) || E ? Xp(a, b.current) : rx(a, b.current), U.current = null, $(B.current))
                    };
                    Be()
                }
            } else Ju(a, f) || (B.current = f, Ae(a, B, J.current), J.current = !1)
    }, [p, n, s, f, g, E, a, N, S, $, Ae, b]), Qe(() => {
        var Te, Be;
        if (!p || s || !Q || A || !oe.current) return;
        const Fe = Q.nodesRef.current,
            Ge = (Te = Fe.find(he => he.id === q)) == null || (Be = Te.context) == null ? void 0 : Be.elements.floating,
            yt = Li(rn(s)),
            Wn = Fe.some(he => he.context && Pt(he.context.elements.floating, yt));
        Ge && !Wn && Z.current && Ge.focus({
            preventScroll: !0
        })
    }, [p, s, Q, q, A]), Qe(() => {
        if (!p || !Q || !A || q) return;

        function Te(Be) {
            me(Be.id), z && (z.current = Be)
        }
        return Q.events.on("virtualfocus", Te), () => {
            Q.events.off("virtualfocus", Te)
        }
    }, [p, Q, A, q, z]), Qe(() => {
        ue.current = $, oe.current = !!s
    }), Qe(() => {
        n || (U.current = null)
    }, [n]);
    const Se = f != null,
        Le = I.useMemo(() => {
            function Te(Fe) {
                if (!n) return;
                const Ge = a.current.indexOf(Fe);
                Ge !== -1 && $(Ge)
            }
            return {
                onFocus(Fe) {
                    let {
                        currentTarget: Ge
                    } = Fe;
                    Te(Ge)
                },
                onClick: Fe => {
                    let {
                        currentTarget: Ge
                    } = Fe;
                    return Ge.focus({
                        preventScroll: !0
                    })
                },
                ...x && {
                    onMouseMove(Fe) {
                        let {
                            currentTarget: Ge
                        } = Fe;
                        Te(Ge)
                    },
                    onPointerLeave(Fe) {
                        let {
                            pointerType: Ge
                        } = Fe;
                        !Z.current || Ge === "touch" || (B.current = -1, Ae(a, B), $(null), A || ri(i.floating.current, {
                            preventScroll: !0
                        }))
                    }
                }
            }
        }, [n, i, Ae, x, a, $, A]);
    return I.useMemo(() => {
        if (!p) return {};
        const Te = b.current;

        function Be(he) {
            if (Z.current = !1, j.current = !0, !ne.current && he.currentTarget === i.floating.current) return;
            if (E && px(he.key, N, S)) {
                $t(he), r(!1, he.nativeEvent), Kl(l) && !A && l.focus();
                return
            }
            const at = B.current,
                Mt = Xp(a, Te),
                Cn = rx(a, Te);
            if (he.key === "Home" && ($t(he), B.current = Mt, $(B.current)), he.key === "End" && ($t(he), B.current = Cn, $(B.current)), !(T > 1 && (B.current = hz(a, {
                    event: he,
                    orientation: N,
                    loop: m,
                    cols: T,
                    disabledIndices: Te,
                    minIndex: Mt,
                    maxIndex: Cn,
                    prevIndex: B.current,
                    stopEvent: !0
                }), $(B.current), N === "both")) && dx(he.key, N)) {
                if ($t(he), n && !A && Li(he.currentTarget.ownerDocument) === he.currentTarget) {
                    B.current = rh(he.key, N, S) ? Mt : Cn, $(B.current);
                    return
                }
                rh(he.key, N, S) ? m ? B.current = at >= Cn ? v && at !== a.current.length ? -1 : Mt : Kt(a, {
                    startingIndex: at,
                    disabledIndices: Te
                }) : B.current = Math.min(Cn, Kt(a, {
                    startingIndex: at,
                    disabledIndices: Te
                })) : m ? B.current = at <= Mt ? v && at !== -1 ? a.current.length : Cn : Kt(a, {
                    startingIndex: at,
                    decrement: !0,
                    disabledIndices: Te
                }) : B.current = Math.max(Mt, Kt(a, {
                    startingIndex: at,
                    decrement: !0,
                    disabledIndices: Te
                })), Ju(a, B.current) ? $(null) : $(B.current)
            }
        }

        function Fe(he) {
            y === "auto" && vk(he.nativeEvent) && (G.current = !0)
        }

        function Ge(he) {
            G.current = y, y === "auto" && yk(he.nativeEvent) && (G.current = !0)
        }
        const yt = A && n && Se && {
                "aria-activedescendant": Re || O
            },
            Wn = a.current.find(he => he?.id === O);
        return {
            reference: {
                ...yt,
                onKeyDown(he) {
                    Z.current = !1;
                    const at = he.key.indexOf("Arrow") === 0,
                        Mt = Uz(he.key, N, S),
                        Cn = px(he.key, N, S),
                        kn = dx(he.key, N),
                        Ht = (E ? Mt : kn) || he.key === "Enter" || he.key.trim() === "";
                    if (A && n) {
                        const Tr = Q?.nodesRef.current.find(V => V.parentId == null),
                            Vn = Q && Tr ? bz(Q.nodesRef.current, Tr.id) : null;
                        if (at && Vn && z) {
                            const V = new KeyboardEvent("keydown", {
                                key: he.key,
                                bubbles: !0
                            });
                            if (Mt || Cn) {
                                var Or, Wr;
                                const re = ((Or = Vn.context) == null ? void 0 : Or.elements.domReference) === he.currentTarget,
                                    pe = Cn && !re ? (Wr = Vn.context) == null ? void 0 : Wr.elements.domReference : Mt ? Wn : null;
                                pe && ($t(he), pe.dispatchEvent(V), me(void 0))
                            }
                            if (kn && Vn.context && Vn.context.open && Vn.parentId && he.currentTarget !== Vn.context.elements.domReference) {
                                var Go;
                                $t(he), (Go = Vn.context.elements.domReference) == null || Go.dispatchEvent(V);
                                return
                            }
                        }
                        return Be(he)
                    }
                    if (!(!n && !k && at)) {
                        if (Ht && (U.current = E && kn ? null : he.key), E) {
                            Mt && ($t(he), n ? (B.current = Xp(a, Te), $(B.current)) : r(!0, he.nativeEvent));
                            return
                        }
                        kn && (g != null && (B.current = g), $t(he), !n && k ? r(!0, he.nativeEvent) : Be(he), n && $(B.current))
                    }
                },
                onFocus() {
                    n && $(null)
                },
                onPointerDown: Ge,
                onMouseDown: Fe,
                onClick: Fe
            },
            floating: {
                "aria-orientation": N === "both" ? void 0 : N,
                ...yt,
                onKeyDown: Be,
                onPointerMove() {
                    Z.current = !0
                }
            },
            item: Le
        }
    }, [l, i, O, Re, b, ne, a, p, N, S, A, n, Se, E, g, k, v, T, m, y, $, r, Le, Q, z])
}

function jz(e, t) {
    t === void 0 && (t = {});
    const {
        open: n,
        floatingId: r
    } = e, {
        enabled: i = !0,
        role: l = "dialog"
    } = t, s = Ds();
    return I.useMemo(() => {
        const a = {
            id: r,
            role: l
        };
        return i ? l === "tooltip" ? {
            reference: {
                "aria-describedby": n ? r : void 0
            },
            floating: a
        } : {
            reference: {
                "aria-expanded": n ? "true" : "false",
                "aria-haspopup": l === "alertdialog" ? "dialog" : l,
                "aria-controls": n ? r : void 0,
                ...l === "listbox" && {
                    role: "combobox"
                },
                ...l === "menu" && {
                    id: s
                }
            },
            floating: {
                ...a,
                ...l === "menu" && {
                    "aria-labelledby": s
                }
            }
        } : {}
    }, [i, l, n, r, s])
}
const hx = e => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (t, n) => (n ? "-" : "") + t.toLowerCase());

function fl(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Wz(e, t) {
    const [n, r] = I.useState(e);
    return e && !n && r(!0), I.useEffect(() => {
        if (!e) {
            const i = setTimeout(() => r(!1), t);
            return () => clearTimeout(i)
        }
    }, [e, t]), n
}

function Vz(e, t) {
    t === void 0 && (t = {});
    const {
        open: n,
        elements: {
            floating: r
        }
    } = e, {
        duration: i = 250
    } = t, s = (typeof i == "number" ? i : i.close) || 0, [a, f] = I.useState(!1), [d, p] = I.useState("unmounted"), g = Wz(n, s);
    return Qe(() => {
        a && !g && p("unmounted")
    }, [a, g]), Qe(() => {
        if (r)
            if (n) {
                p("initial");
                const v = requestAnimationFrame(() => {
                    p("open")
                });
                return () => {
                    cancelAnimationFrame(v)
                }
            } else f(!0), p("close")
    }, [n, r]), {
        isMounted: g,
        status: d
    }
}

function wv(e, t) {
    t === void 0 && (t = {});
    const {
        initial: n = {
            opacity: 0
        },
        open: r,
        close: i,
        common: l,
        duration: s = 250
    } = t, a = e.placement, f = a.split("-")[0], d = I.useMemo(() => ({
        side: f,
        placement: a
    }), [f, a]), p = typeof s == "number", g = (p ? s : s.open) || 0, v = (p ? s : s.close) || 0, [m, E] = I.useState(() => ({
        ...fl(l, d),
        ...fl(n, d)
    })), {
        isMounted: S,
        status: A
    } = Vz(e, {
        duration: s
    }), y = vn(n), x = vn(r), k = vn(i), P = vn(l);
    return Qe(() => {
        const N = fl(y.current, d),
            T = fl(k.current, d),
            F = fl(P.current, d),
            z = fl(x.current, d) || Object.keys(N).reduce((q, Q) => (q[Q] = "", q), {});
        if (A === "initial" && E(q => ({
                transitionProperty: q.transitionProperty,
                ...F,
                ...N
            })), A === "open" && E({
                transitionProperty: Object.keys(z).map(hx).join(","),
                transitionDuration: g + "ms",
                ...F,
                ...z
            }), A === "close") {
            const q = T || N;
            E({
                transitionProperty: Object.keys(q).map(hx).join(","),
                transitionDuration: v + "ms",
                ...F,
                ...q
            })
        }
    }, [v, k, y, x, P, g, A, d]), {
        isMounted: S,
        styles: m
    }
}

function qz(e, t) {
    var n;
    const {
        open: r,
        dataRef: i
    } = e, {
        listRef: l,
        activeIndex: s,
        onMatch: a,
        onTypingChange: f,
        enabled: d = !0,
        findMatch: p = null,
        resetMs: g = 750,
        ignoreKeys: v = [],
        selectedIndex: m = null
    } = t, E = I.useRef(), S = I.useRef(""), A = I.useRef((n = m ?? s) != null ? n : -1), y = I.useRef(null), x = Xi(a), k = Xi(f), P = vn(p), N = vn(v);
    return Qe(() => {
        r && (clearTimeout(E.current), y.current = null, S.current = "")
    }, [r]), Qe(() => {
        if (r && S.current === "") {
            var T;
            A.current = (T = m ?? s) != null ? T : -1
        }
    }, [r, m, s]), I.useMemo(() => {
        if (!d) return {};

        function T(q) {
            q ? i.current.typing || (i.current.typing = q, k(q)) : i.current.typing && (i.current.typing = q, k(q))
        }

        function F(q, Q, $) {
            const G = P.current ? P.current(Q, $) : Q.find(B => B?.toLocaleLowerCase().indexOf($.toLocaleLowerCase()) === 0);
            return G ? q.indexOf(G) : -1
        }

        function z(q) {
            const Q = l.current;
            if (S.current.length > 0 && S.current[0] !== " " && (F(Q, Q, S.current) === -1 ? T(!1) : q.key === " " && $t(q)), Q == null || N.current.includes(q.key) || q.key.length !== 1 || q.ctrlKey || q.metaKey || q.altKey) return;
            r && q.key !== " " && ($t(q), T(!0)), Q.every(U => {
                var Z, ue;
                return U ? ((Z = U[0]) == null ? void 0 : Z.toLocaleLowerCase()) !== ((ue = U[1]) == null ? void 0 : ue.toLocaleLowerCase()) : !0
            }) && S.current === q.key && (S.current = "", A.current = y.current), S.current += q.key, clearTimeout(E.current), E.current = setTimeout(() => {
                S.current = "", A.current = y.current, T(!1)
            }, g);
            const G = A.current,
                B = F(Q, [...Q.slice((G || 0) + 1), ...Q.slice(0, (G || 0) + 1)], S.current);
            B !== -1 ? (x(B), y.current = B) : q.key !== " " && (S.current = "", T(!1))
        }
        return {
            reference: {
                onKeyDown: z
            },
            floating: {
                onKeyDown: z,
                onKeyUp(q) {
                    q.key === " " && T(!1)
                }
            }
        }
    }, [d, r, i, l, g, N, P, x, k])
}

function gx(e, t) {
    const [n, r] = e;
    let i = !1;
    const l = t.length;
    for (let s = 0, a = l - 1; s < l; a = s++) {
        const [f, d] = t[s] || [0, 0], [p, g] = t[a] || [0, 0];
        d >= r != g >= r && n <= (p - f) * (r - d) / (g - d) + f && (i = !i)
    }
    return i
}

function Gz(e, t) {
    return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height
}

function Kz(e) {
    e === void 0 && (e = {});
    const {
        buffer: t = .5,
        blockPointerEvents: n = !1,
        requireIntent: r = !0
    } = e;
    let i, l = !1,
        s = null,
        a = null,
        f = performance.now();

    function d(g, v) {
        const m = performance.now(),
            E = m - f;
        if (s === null || a === null || E === 0) return s = g, a = v, f = m, null;
        const S = g - s,
            A = v - a,
            x = Math.sqrt(S * S + A * A) / E;
        return s = g, a = v, f = m, x
    }
    const p = g => {
        let {
            x: v,
            y: m,
            placement: E,
            elements: S,
            onClose: A,
            nodeId: y,
            tree: x
        } = g;
        return function(P) {
            function N() {
                clearTimeout(i), A()
            }
            if (clearTimeout(i), !S.domReference || !S.floating || E == null || v == null || m == null) return;
            const {
                clientX: T,
                clientY: F
            } = P, z = [T, F], q = uv(P), Q = P.type === "mouseleave", $ = Pt(S.floating, q), G = Pt(S.domReference, q), B = S.domReference.getBoundingClientRect(), U = S.floating.getBoundingClientRect(), Z = E.split("-")[0], ue = v > U.right - U.width / 2, oe = m > U.bottom - U.height / 2, j = Gz(z, B), J = U.width > B.width, b = U.height > B.height, ne = (J ? B : U).left, ae = (J ? B : U).right, O = (b ? B : U).top, de = (b ? B : U).bottom;
            if ($ && (l = !0, !Q)) return;
            if (G && (l = !1), G && !Q) {
                l = !0;
                return
            }
            if (Q && hn(P.relatedTarget) && Pt(S.floating, P.relatedTarget) || x && Do(x.nodesRef.current, y).some(Ae => {
                    let {
                        context: Se
                    } = Ae;
                    return Se?.open
                })) return;
            if (Z === "top" && m >= B.bottom - 1 || Z === "bottom" && m <= B.top + 1 || Z === "left" && v >= B.right - 1 || Z === "right" && v <= B.left + 1) return N();
            let Re = [];
            switch (Z) {
                case "top":
                    Re = [
                        [ne, B.top + 1],
                        [ne, U.bottom - 1],
                        [ae, U.bottom - 1],
                        [ae, B.top + 1]
                    ];
                    break;
                case "bottom":
                    Re = [
                        [ne, U.top + 1],
                        [ne, B.bottom - 1],
                        [ae, B.bottom - 1],
                        [ae, U.top + 1]
                    ];
                    break;
                case "left":
                    Re = [
                        [U.right - 1, de],
                        [U.right - 1, O],
                        [B.left + 1, O],
                        [B.left + 1, de]
                    ];
                    break;
                case "right":
                    Re = [
                        [B.right - 1, de],
                        [B.right - 1, O],
                        [U.left + 1, O],
                        [U.left + 1, de]
                    ];
                    break
            }

            function me(Ae) {
                let [Se, Le] = Ae;
                switch (Z) {
                    case "top": {
                        const Te = [J ? Se + t / 2 : ue ? Se + t * 4 : Se - t * 4, Le + t + 1],
                            Be = [J ? Se - t / 2 : ue ? Se + t * 4 : Se - t * 4, Le + t + 1],
                            Fe = [
                                [U.left, ue || J ? U.bottom - t : U.top],
                                [U.right, ue ? J ? U.bottom - t : U.top : U.bottom - t]
                            ];
                        return [Te, Be, ...Fe]
                    }
                    case "bottom": {
                        const Te = [J ? Se + t / 2 : ue ? Se + t * 4 : Se - t * 4, Le - t],
                            Be = [J ? Se - t / 2 : ue ? Se + t * 4 : Se - t * 4, Le - t],
                            Fe = [
                                [U.left, ue || J ? U.top + t : U.bottom],
                                [U.right, ue ? J ? U.top + t : U.bottom : U.top + t]
                            ];
                        return [Te, Be, ...Fe]
                    }
                    case "left": {
                        const Te = [Se + t + 1, b ? Le + t / 2 : oe ? Le + t * 4 : Le - t * 4],
                            Be = [Se + t + 1, b ? Le - t / 2 : oe ? Le + t * 4 : Le - t * 4];
                        return [...[
                            [oe || b ? U.right - t : U.left, U.top],
                            [oe ? b ? U.right - t : U.left : U.right - t, U.bottom]
                        ], Te, Be]
                    }
                    case "right": {
                        const Te = [Se - t, b ? Le + t / 2 : oe ? Le + t * 4 : Le - t * 4],
                            Be = [Se - t, b ? Le - t / 2 : oe ? Le + t * 4 : Le - t * 4],
                            Fe = [
                                [oe || b ? U.left + t : U.right, U.top],
                                [oe ? b ? U.left + t : U.right : U.left + t, U.bottom]
                            ];
                        return [Te, Be, ...Fe]
                    }
                }
            }
            if (!gx([T, F], Re)) {
                if (l && !j) return N();
                if (!Q && r) {
                    const Ae = d(P.clientX, P.clientY);
                    if (Ae !== null && Ae < .1) return N()
                }
                gx([T, F], me([v, m])) ? !l && r && (i = window.setTimeout(N, 40)) : N()
            }
        }
    };
    return p.__options = {
        blockPointerEvents: n
    }, p
}
const Qz = ({
        infoVisible: e,
        setInfoVisible: t
    }) => {
        const {
            refs: n,
            context: r
        } = yv({
            open: e,
            onOpenChange: t
        }), i = Jk(r, {
            outsidePressEvent: "mousedown"
        }), {
            isMounted: l,
            styles: s
        } = wv(r), {
            getFloatingProps: a
        } = e_([i]);
        return W(En, {
            children: l && W(vv, {
                children: W(Zk, {
                    lockScroll: !0,
                    className: "useful-controls-dialog-overlay",
                    "data-open": e,
                    style: s,
                    children: W(Xk, {
                        context: r,
                        children: we("div", {
                            ref: n.setFloating,
                            ...a(),
                            className: "useful-controls-dialog",
                            style: s,
                            children: [we("div", {
                                className: "useful-controls-dialog-title",
                                children: [W("p", {
                                    children: ut.ui_usefulcontrols || "Useful controls"
                                }), W("div", {
                                    className: "useful-controls-dialog-close",
                                    onClick: () => t(!1),
                                    children: W("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        height: "1em",
                                        viewBox: "0 0 400 528",
                                        children: W("path", {
                                            d: "M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                                        })
                                    })
                                })]
                            }), we("div", {
                                className: "useful-controls-content-wrapper",
                                children: [we("p", {
                                    children: [W("kbd", {
                                        children: "RMB"
                                    }), W("br", {}), ut.ui_rmb]
                                }), we("p", {
                                    children: [W("kbd", {
                                        children: "ALT + LMB"
                                    }), W("br", {}), ut.ui_alt_lmb]
                                }), we("p", {
                                    children: [W("kbd", {
                                        children: "CTRL + LMB"
                                    }), W("br", {}), ut.ui_ctrl_lmb]
                                }), we("p", {
                                    children: [W("kbd", {
                                        children: "SHIFT + Drag"
                                    }), W("br", {}), ut.ui_shift_drag]
                                }), we("p", {
                                    children: [W("kbd", {
                                        children: "CTRL + SHIFT + LMB"
                                    }), W("br", {}), ut.ui_ctrl_shift_lmb]
                                }), W("div", {
                                    style: {
                                        textAlign: "right"
                                    },
                                    children: " "
                                })]
                            })]
                        })
                    })
                })
            })
        })
    },
    Yz = () => {
        const e = gi(J3),
            t = ru(),
            [n, r] = I.useState(!1),
            [, i] = pg(() => ({
                accept: "SLOT",
                drop: a => {
                    a.inventory === "player" && ov(a.item)
                }
            })),
            [, l] = pg(() => ({
                accept: "SLOT",
                drop: a => {
                    a.inventory === "player" && hk(a.item)
                }
            }));
        return we(En, {
            children: [W(Qz, {
                infoVisible: n,
                setInfoVisible: r
            }), W("div", {
                className: "inventory-control",
                children: we("div", {
                    className: "inventory-control-wrapper",
                    children: [W("input", {
                        className: "inventory-control-input",
                        type: "number",
                        defaultValue: e,
                        onChange: a => {
                            a.target.valueAsNumber = isNaN(a.target.valueAsNumber) || a.target.valueAsNumber < 0 ? 0 : Math.floor(a.target.valueAsNumber), t(V3(a.target.valueAsNumber))
                        },
                        min: 0
                    }), W("button", {
                        className: "inventory-control-button",
                        ref: i,
                        children: ut.ui_use || "Use"
                    }), W("button", {
                        className: "inventory-control-button",
                        ref: l,
                        children: ut.ui_give || "Give"
                    }), W("button", {
                        className: "inventory-control-button",
                        onClick: () => ur("exit"),
                        children: ut.ui_close || "Close"
                    })]
                })
            }), W("button", {
                className: "useful-controls-button",
                onClick: () => r(!0),
                children: W("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "2em",
                    viewBox: "0 0 524 524",
                    children: W("path", {
                        d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                    })
                })
            })]
        })
    },
    ih = (e, t, n) => {
        let r = e * n,
            i = t * (1 - n);
        return r + i
    },
    qa = (e, t, n) => {
        let r = ih(e[0], t[0], n),
            i = ih(e[1], t[1], n),
            l = ih(e[2], t[2], n);
        return `rgb(${r}, ${i}, ${l})`
    },

    Ti = {
        primaryColor: [0, 100, 255],   // Light blue for durability bar
        secondColor: [255, 100, 0],    // Light green for weight bar
        accentColor: [255, 255, 255]     // Darker blue accent for durability bar
    },
    xv = ({
        percent: e,
        durability: t
    }) => {
        const n = I.useMemo(() => 
            t 
                ? e < 50 
                    ? qa(Ti.accentColor, Ti.accentColor, e / 100)    // Blue gradient for durability < 50%
                    : qa(Ti.accentColor, Ti.accentColor, e / 100)     // Green to blue gradient for durability >= 50%
                : e > 50 
                    ? qa(Ti.primaryColor, Ti.primaryColor, e / 100)     // Green gradient for weight > 50%
                    : qa(Ti.primaryColor, Ti.primaryColor, e / 50),     // Blue gradient for weight <= 50%
            [t, e]
        );  
        return W("div", {
            className: t ? "durability-bar" : "weight-bar",
            children: W("div", {
                style: {
                    visibility: e > 0 ? "visible" : "hidden",
                    height: "100%",
                    width: `${e}%`,
                    backgroundColor: n,
                    transition: `background ${.3}s ease, width ${.3}s ease`
                }
            })
        })
    };

function Cg(e, t) {
    return Cg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i, r
    }, Cg(e, t)
}

function Sv(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Cg(e, t)
}
var t_ = {
        exports: {}
    },
    Xz = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    Zz = Xz,
    Jz = Zz;

function n_() {}

function r_() {}
r_.resetWarningCache = n_;
var e6 = function() {
    function e(r, i, l, s, a, f) {
        if (f !== Jz) {
            var d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw d.name = "Invariant Violation", d
        }
    }
    e.isRequired = e;

    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: r_,
        resetWarningCache: n_
    };
    return n.PropTypes = n, n
};
t_.exports = e6();
var t6 = t_.exports;
const Ce = io(t6);

function n6(e, t) {
    return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1
}

function r6(e, t) {
    e.classList ? e.classList.add(t) : n6(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
}

function mx(e, t) {
    return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}

function i6(e, t) {
    e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = mx(e.className, t) : e.setAttribute("class", mx(e.className && e.className.baseVal || "", t))
}
const vx = {
        disabled: !1
    },
    Jc = Ve.createContext(null);
var i_ = function(t) {
        return t.scrollTop
    },
    $u = "unmounted",
    Co = "exited",
    ko = "entering",
    pl = "entered",
    kg = "exiting",
    vi = function(e) {
        Sv(t, e);

        function t(r, i) {
            var l;
            l = e.call(this, r, i) || this;
            var s = i,
                a = s && !s.isMounting ? r.enter : r.appear,
                f;
            return l.appearStatus = null, r.in ? a ? (f = Co, l.appearStatus = ko) : f = pl : r.unmountOnExit || r.mountOnEnter ? f = $u : f = Co, l.state = {
                status: f
            }, l.nextCallback = null, l
        }
        t.getDerivedStateFromProps = function(i, l) {
            var s = i.in;
            return s && l.status === $u ? {
                status: Co
            } : null
        };
        var n = t.prototype;
        return n.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }, n.componentDidUpdate = function(i) {
            var l = null;
            if (i !== this.props) {
                var s = this.state.status;
                this.props.in ? s !== ko && s !== pl && (l = ko) : (s === ko || s === pl) && (l = kg)
            }
            this.updateStatus(!1, l)
        }, n.componentWillUnmount = function() {
            this.cancelNextCallback()
        }, n.getTimeouts = function() {
            var i = this.props.timeout,
                l, s, a;
            return l = s = a = i, i != null && typeof i != "number" && (l = i.exit, s = i.enter, a = i.appear !== void 0 ? i.appear : s), {
                exit: l,
                enter: s,
                appear: a
            }
        }, n.updateStatus = function(i, l) {
            if (i === void 0 && (i = !1), l !== null)
                if (this.cancelNextCallback(), l === ko) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var s = this.props.nodeRef ? this.props.nodeRef.current : Ua.findDOMNode(this);
                        s && i_(s)
                    }
                    this.performEnter(i)
                } else this.performExit();
            else this.props.unmountOnExit && this.state.status === Co && this.setState({
                status: $u
            })
        }, n.performEnter = function(i) {
            var l = this,
                s = this.props.enter,
                a = this.context ? this.context.isMounting : i,
                f = this.props.nodeRef ? [a] : [Ua.findDOMNode(this), a],
                d = f[0],
                p = f[1],
                g = this.getTimeouts(),
                v = a ? g.appear : g.enter;
            if (!i && !s || vx.disabled) {
                this.safeSetState({
                    status: pl
                }, function() {
                    l.props.onEntered(d)
                });
                return
            }
            this.props.onEnter(d, p), this.safeSetState({
                status: ko
            }, function() {
                l.props.onEntering(d, p), l.onTransitionEnd(v, function() {
                    l.safeSetState({
                        status: pl
                    }, function() {
                        l.props.onEntered(d, p)
                    })
                })
            })
        }, n.performExit = function() {
            var i = this,
                l = this.props.exit,
                s = this.getTimeouts(),
                a = this.props.nodeRef ? void 0 : Ua.findDOMNode(this);
            if (!l || vx.disabled) {
                this.safeSetState({
                    status: Co
                }, function() {
                    i.props.onExited(a)
                });
                return
            }
            this.props.onExit(a), this.safeSetState({
                status: kg
            }, function() {
                i.props.onExiting(a), i.onTransitionEnd(s.exit, function() {
                    i.safeSetState({
                        status: Co
                    }, function() {
                        i.props.onExited(a)
                    })
                })
            })
        }, n.cancelNextCallback = function() {
            this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null)
        }, n.safeSetState = function(i, l) {
            l = this.setNextCallback(l), this.setState(i, l)
        }, n.setNextCallback = function(i) {
            var l = this,
                s = !0;
            return this.nextCallback = function(a) {
                s && (s = !1, l.nextCallback = null, i(a))
            }, this.nextCallback.cancel = function() {
                s = !1
            }, this.nextCallback
        }, n.onTransitionEnd = function(i, l) {
            this.setNextCallback(l);
            var s = this.props.nodeRef ? this.props.nodeRef.current : Ua.findDOMNode(this),
                a = i == null && !this.props.addEndListener;
            if (!s || a) {
                setTimeout(this.nextCallback, 0);
                return
            }
            if (this.props.addEndListener) {
                var f = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback],
                    d = f[0],
                    p = f[1];
                this.props.addEndListener(d, p)
            }
            i != null && setTimeout(this.nextCallback, i)
        }, n.render = function() {
            var i = this.state.status;
            if (i === $u) return null;
            var l = this.props,
                s = l.children;
            l.in, l.mountOnEnter, l.unmountOnExit, l.appear, l.enter, l.exit, l.timeout, l.addEndListener, l.onEnter, l.onEntering, l.onEntered, l.onExit, l.onExiting, l.onExited, l.nodeRef;
            var a = Dm(l, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return Ve.createElement(Jc.Provider, {
                value: null
            }, typeof s == "function" ? s(i, a) : Ve.cloneElement(Ve.Children.only(s), a))
        }, t
    }(Ve.Component);
vi.contextType = Jc;
vi.propTypes = {};

function dl() {}
vi.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: dl,
    onEntering: dl,
    onEntered: dl,
    onExit: dl,
    onExiting: dl,
    onExited: dl
};
vi.UNMOUNTED = $u;
vi.EXITED = Co;
vi.ENTERING = ko;
vi.ENTERED = pl;
vi.EXITING = kg;
const o6 = vi;
var l6 = function(t, n) {
        return t && n && n.split(" ").forEach(function(r) {
            return r6(t, r)
        })
    },
    oh = function(t, n) {
        return t && n && n.split(" ").forEach(function(r) {
            return i6(t, r)
        })
    },
    Ev = function(e) {
        Sv(t, e);

        function t() {
            for (var r, i = arguments.length, l = new Array(i), s = 0; s < i; s++) l[s] = arguments[s];
            return r = e.call.apply(e, [this].concat(l)) || this, r.appliedClasses = {
                appear: {},
                enter: {},
                exit: {}
            }, r.onEnter = function(a, f) {
                var d = r.resolveArguments(a, f),
                    p = d[0],
                    g = d[1];
                r.removeClasses(p, "exit"), r.addClass(p, g ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(a, f)
            }, r.onEntering = function(a, f) {
                var d = r.resolveArguments(a, f),
                    p = d[0],
                    g = d[1],
                    v = g ? "appear" : "enter";
                r.addClass(p, v, "active"), r.props.onEntering && r.props.onEntering(a, f)
            }, r.onEntered = function(a, f) {
                var d = r.resolveArguments(a, f),
                    p = d[0],
                    g = d[1],
                    v = g ? "appear" : "enter";
                r.removeClasses(p, v), r.addClass(p, v, "done"), r.props.onEntered && r.props.onEntered(a, f)
            }, r.onExit = function(a) {
                var f = r.resolveArguments(a),
                    d = f[0];
                r.removeClasses(d, "appear"), r.removeClasses(d, "enter"), r.addClass(d, "exit", "base"), r.props.onExit && r.props.onExit(a)
            }, r.onExiting = function(a) {
                var f = r.resolveArguments(a),
                    d = f[0];
                r.addClass(d, "exit", "active"), r.props.onExiting && r.props.onExiting(a)
            }, r.onExited = function(a) {
                var f = r.resolveArguments(a),
                    d = f[0];
                r.removeClasses(d, "exit"), r.addClass(d, "exit", "done"), r.props.onExited && r.props.onExited(a)
            }, r.resolveArguments = function(a, f) {
                return r.props.nodeRef ? [r.props.nodeRef.current, a] : [a, f]
            }, r.getClassNames = function(a) {
                var f = r.props.classNames,
                    d = typeof f == "string",
                    p = d && f ? f + "-" : "",
                    g = d ? "" + p + a : f[a],
                    v = d ? g + "-active" : f[a + "Active"],
                    m = d ? g + "-done" : f[a + "Done"];
                return {
                    baseClassName: g,
                    activeClassName: v,
                    doneClassName: m
                }
            }, r
        }
        var n = t.prototype;
        return n.addClass = function(i, l, s) {
            var a = this.getClassNames(l)[s + "ClassName"],
                f = this.getClassNames("enter"),
                d = f.doneClassName;
            l === "appear" && s === "done" && d && (a += " " + d), s === "active" && i && i_(i), a && (this.appliedClasses[l][s] = a, l6(i, a))
        }, n.removeClasses = function(i, l) {
            var s = this.appliedClasses[l],
                a = s.base,
                f = s.active,
                d = s.done;
            this.appliedClasses[l] = {}, a && oh(i, a), f && oh(i, f), d && oh(i, d)
        }, n.render = function() {
            var i = this.props;
            i.classNames;
            var l = Dm(i, ["classNames"]);
            return Ve.createElement(o6, Lc({}, l, {
                onEnter: this.onEnter,
                onEntered: this.onEntered,
                onEntering: this.onEntering,
                onExit: this.onExit,
                onExiting: this.onExiting,
                onExited: this.onExited
            }))
        }, t
    }(Ve.Component);
Ev.defaultProps = {
    classNames: ""
};
Ev.propTypes = {};
const o_ = Ev;

function u6(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Cv(e, t) {
    var n = function(l) {
            return t && I.isValidElement(l) ? t(l) : l
        },
        r = Object.create(null);
    return e && I.Children.map(e, function(i) {
        return i
    }).forEach(function(i) {
        r[i.key] = n(i)
    }), r
}

function s6(e, t) {
    e = e || {}, t = t || {};

    function n(p) {
        return p in t ? t[p] : e[p]
    }
    var r = Object.create(null),
        i = [];
    for (var l in e) l in t ? i.length && (r[l] = i, i = []) : i.push(l);
    var s, a = {};
    for (var f in t) {
        if (r[f])
            for (s = 0; s < r[f].length; s++) {
                var d = r[f][s];
                a[r[f][s]] = n(d)
            }
        a[f] = n(f)
    }
    for (s = 0; s < i.length; s++) a[i[s]] = n(i[s]);
    return a
}

function Io(e, t, n) {
    return n[t] != null ? n[t] : e.props[t]
}

function a6(e, t) {
    return Cv(e.children, function(n) {
        return I.cloneElement(n, {
            onExited: t.bind(null, n),
            in: !0,
            appear: Io(n, "appear", e),
            enter: Io(n, "enter", e),
            exit: Io(n, "exit", e)
        })
    })
}

function c6(e, t, n) {
    var r = Cv(e.children),
        i = s6(t, r);
    return Object.keys(i).forEach(function(l) {
        var s = i[l];
        if (I.isValidElement(s)) {
            var a = l in t,
                f = l in r,
                d = t[l],
                p = I.isValidElement(d) && !d.props.in;
            f && (!a || p) ? i[l] = I.cloneElement(s, {
                onExited: n.bind(null, s),
                in: !0,
                exit: Io(s, "exit", e),
                enter: Io(s, "enter", e)
            }) : !f && a && !p ? i[l] = I.cloneElement(s, {
                in: !1
            }) : f && a && I.isValidElement(d) && (i[l] = I.cloneElement(s, {
                onExited: n.bind(null, s),
                in: d.props.in,
                exit: Io(s, "exit", e),
                enter: Io(s, "enter", e)
            }))
        }
    }), i
}
var f6 = Object.values || function(e) {
        return Object.keys(e).map(function(t) {
            return e[t]
        })
    },
    d6 = {
        component: "div",
        childFactory: function(t) {
            return t
        }
    },
    kv = function(e) {
        Sv(t, e);

        function t(r, i) {
            var l;
            l = e.call(this, r, i) || this;
            var s = l.handleExited.bind(u6(l));
            return l.state = {
                contextValue: {
                    isMounting: !0
                },
                handleExited: s,
                firstRender: !0
            }, l
        }
        var n = t.prototype;
        return n.componentDidMount = function() {
            this.mounted = !0, this.setState({
                contextValue: {
                    isMounting: !1
                }
            })
        }, n.componentWillUnmount = function() {
            this.mounted = !1
        }, t.getDerivedStateFromProps = function(i, l) {
            var s = l.children,
                a = l.handleExited,
                f = l.firstRender;
            return {
                children: f ? a6(i, a) : c6(i, s, a),
                firstRender: !1
            }
        }, n.handleExited = function(i, l) {
            var s = Cv(this.props.children);
            i.key in s || (i.props.onExited && i.props.onExited(l), this.mounted && this.setState(function(a) {
                var f = Lc({}, a.children);
                return delete f[i.key], {
                    children: f
                }
            }))
        }, n.render = function() {
            var i = this.props,
                l = i.component,
                s = i.childFactory,
                a = Dm(i, ["component", "childFactory"]),
                f = this.state.contextValue,
                d = f6(this.state.children).map(s);
            return delete a.appear, delete a.enter, delete a.exit, l === null ? Ve.createElement(Jc.Provider, {
                value: f
            }, d) : Ve.createElement(Jc.Provider, {
                value: f
            }, Ve.createElement(l, a, d))
        }, t
    }(Ve.Component);
kv.propTypes = {};
kv.defaultProps = d6;
const p6 = kv,
    h6 = e => {
        const t = I.useRef(null);
        return W(o_, {
            nodeRef: t,
            in: e.in,
            timeout: 200,
            classNames: "transition-slide-up",
            unmountOnExit: !0,
            children: Ve.cloneElement(e.children, {
                ref: t
            })
        })
    },
    g6 = () => {
        const [e, t] = I.useState(!1), n = gi(ck).items.slice(0, 5), [r, i] = I.useState();
        return Lr("toggleHotbar", () => {
            e ? t(!1) : (r && clearTimeout(r), t(!0), i(setTimeout(() => t(!1), 3e3)))
        }), W(h6, {
            in: e,
            children: W("div", {
                className: "hotbar-container",
                children: n.map(l => W("div", {
                    className: "hotbar-item-slot",
                    style: {
                        backgroundImage: `url(${l?.name?Nl(l):"none"}`
                    },
                    children: gn(l) && we("div", {
                        className: "item-slot-wrapper",
                        children: [we("div", {
                            className: "hotbar-slot-header-wrapper",
                            children: [W("div", {
                                className: "inventory-slot-number",
                                children: l.slot
                            }), we("div", {
                                className: "item-slot-info-wrapper",
                                children: [W("p", {
                                    children: l.weight > 0 ? l.weight >= 1e3 ? `${(l.weight/1e3).toLocaleString("en-us",{minimumFractionDigits:2})}kg ` : `${l.weight.toLocaleString("en-us",{minimumFractionDigits:0})}g ` : ""
                                }), W("p", {
                                    children: l.count ? l.count.toLocaleString("en-us") + "x" : ""
                                })]
                            })]
                        }), we("div", {
                            children: [l?.durability !== void 0 && W(xv, {
                                percent: l.durability,
                                durability: !0
                            }), W("div", {
                                className: "inventory-slot-label-box",
                                children: W("div", {
                                    className: "inventory-slot-label-text",
                                    children: l.metadata?.label ? l.metadata.label : dt[l.name]?.label || l.name
                                })
                            })]
                        })]
                    })
                }, `hotbar-${l.slot}`))
            })
        })
    },
    m6 = ["Escape"],
    v6 = e => {
        const t = I.useRef(sk),
            n = ru();
        I.useEffect(() => {
            t.current = e
        }, [e]), I.useEffect(() => {
            const r = i => {
                m6.includes(i.code) && (t.current(!1), n(Zu()), n(pk()), ur("exit"))
            };
            return window.addEventListener("keyup", r), () => window.removeEventListener("keyup", r)
        }, [])
    },
    y6 = Jm("inventory/validateMove", async (e, {
        rejectWithValue: t,
        dispatch: n
    }) => {
        try {
            const r = await ur("swapItems", e);
            if (r === !1) return t(r);
            typeof r == "number" && n(X3(r))
        } catch {
            return t(!1)
        }
    }),
    _g = (e, t) => {
        const {
            inventory: n
        } = Nn.getState(), {
            sourceInventory: r,
            targetInventory: i
        } = Wf(n, e.inventory, t?.inventory), l = r.items[e.item.slot - 1], s = dt[l.name];
        if (s === void 0) return console.error(`${l.name} item data undefined!`);
        if (l.metadata?.container !== void 0) {
            if (i.type === Yt.CONTAINER) return console.log(`Cannot store container ${l.name} inside another container`);
            if (n.rightInventory.id === l.metadata.container) return console.log(`Cannot move container ${l.name} when opened`)
        }
        const a = t ? i.items[t.item.slot - 1] : L3(l, s, i.items);
        if (a === void 0) return console.error("Target slot undefined!");
        if (a.metadata?.container !== void 0 && n.rightInventory.id === a.metadata.container) return console.log(`Cannot swap item ${l.name} with container ${a.name} when opened`);
        const f = n.shiftPressed && l.count > 1 && r.type !== "shop" ? Math.floor(l.count / 2) : n.itemAmount === 0 || n.itemAmount > l.count ? l.count : n.itemAmount,
            d = {
                fromSlot: l,
                toSlot: a,
                fromType: r.type,
                toType: i.type,
                count: f
            };
        Nn.dispatch(y6({
            ...d,
            fromSlot: l.slot,
            toSlot: a.slot
        })), gn(a, !0) ? s.stack && M3(l, a) ? Nn.dispatch(Q3({
            ...d,
            toSlot: a
        })) : Nn.dispatch(G3({
            ...d,
            toSlot: a
        })) : Nn.dispatch(K3(d))
    },
    w6 = Jm("inventory/buyItem", async (e, {
        rejectWithValue: t
    }) => {
        try {
            const n = await ur("buyItem", e);
            if (n === !1) return t(n)
        } catch {
            return t(!1)
        }
    }),
    x6 = (e, t) => {
        const {
            inventory: n
        } = Nn.getState(), r = n.rightInventory, i = n.leftInventory, l = r.items[e.item.slot - 1];
        if (!gn(l)) throw new Error(`Item ${l.slot} name === undefined`);
        if (l.count === 0) return;
        if (dt[l.name] === void 0) return console.error(`Item ${l.name} data undefined!`);
        const a = i.items[t.item.slot - 1];
        if (a === void 0) return console.error("Target slot undefined");
        const f = n.itemAmount !== 0 ? l.count && n.itemAmount > l.count ? l.count : n.itemAmount : 1,
            d = {
                fromSlot: l,
                toSlot: a,
                fromType: r.type,
                toType: i.type,
                count: f
            };
        Nn.dispatch(w6({
            ...d,
            fromSlot: l.slot,
            toSlot: a.slot
        }))
    },
    S6 = Jm("inventory/craftItem", async (e, {
        rejectWithValue: t
    }) => {
        try {
            const n = await ur("craftItem", e);
            if (n === !1) return t(n)
        } catch {
            return t(!1)
        }
    }),
    E6 = (e, t) => {
        const {
            inventory: n
        } = Nn.getState(), r = n.rightInventory, i = n.leftInventory, l = r.items[e.item.slot - 1];
        if (!gn(l)) throw new Error(`Item ${l.slot} name === undefined`);
        if (l.count === 0) return;
        if (dt[l.name] === void 0) return console.error(`Item ${l.name} data undefined!`);
        const a = i.items[t.item.slot - 1];
        if (a === void 0) return console.error("Target slot undefined");
        const f = n.itemAmount === 0 ? 1 : n.itemAmount,
            d = {
                fromSlot: l,
                toSlot: a,
                fromType: r.type,
                toType: i.type,
                count: f
            };
        Nn.dispatch(S6({
            ...d,
            fromSlot: l.slot,
            toSlot: a.slot
        }))
    },
    C6 = ({
        item: e,
        inventoryId: t,
        inventoryType: n,
        inventoryGroups: r
    }, i) => {
        const l = hi(),
            s = ru(),
            a = I.useRef(null),
            f = I.useCallback(() => Ww(e, {
                type: n,
                groups: r
            }) && Vw(e, n), [e, n, r]),
            [{
                isDragging: d
            }, p] = AF(() => ({
                type: "SLOT",
                collect: y => ({
                    isDragging: y.isDragging()
                }),
                item: () => gn(e, n !== Yt.SHOP) ? {
                    inventory: n,
                    item: {
                        name: e.name,
                        slot: e.slot
                    },
                    image: e?.name && `url(${Nl(e)||"none"}`
                } : null,
                canDrag: f
            }), [n, e]),
            [{
                isOver: g
            }, v] = pg(() => ({
                accept: "SLOT",
                collect: y => ({
                    isOver: y.isOver()
                }),
                drop: y => {
                    switch (s(Zu()), y.inventory) {
                        case Yt.SHOP:
                            x6(y, {
                                inventory: n,
                                item: {
                                    slot: e.slot
                                }
                            });
                            break;
                        case Yt.CRAFTING:
                            E6(y, {
                                inventory: n,
                                item: {
                                    slot: e.slot
                                }
                            });
                            break;
                        default:
                            _g(y, {
                                inventory: n,
                                item: {
                                    slot: e.slot
                                }
                            });
                            break
                    }
                },
                canDrop: y => (y.item.slot !== e.slot || y.inventory !== n) && n !== Yt.SHOP && n !== Yt.CRAFTING
            }), [n, e]);
        Lr("refreshSlots", y => {
            !d && !y.items || !Array.isArray(y.items) || !y.items.find(k => k.item.slot === e.slot && k.inventory === t) || l.dispatch({
                type: "dnd-core/END_DRAG"
            })
        });
        const m = y => p(v(y)),
            E = y => {
                y.preventDefault(), !(n !== "player" || !gn(e)) && s(o4({
                    item: e,
                    coords: {
                        x: y.clientX,
                        y: y.clientY
                    }
                }))
            },
            S = y => {
                s(Zu()), a.current && clearTimeout(a.current), y.ctrlKey && gn(e) && n !== "shop" && n !== "crafting" ? _g({
                    item: e,
                    inventory: n
                }) : y.altKey && gn(e) && n === "player" && ov(e)
            },
            A = pv([m, i]);
        return W("div", {
            ref: A,
            onContextMenu: E,
            onClick: S,
            className: "inventory-slot",
            style: {
                filter: !Ww(e, {
                    type: n,
                    groups: r
                }) || !Vw(e, n) ? "brightness(80%) grayscale(100%)" : void 0,
                opacity: d ? .4 : 1,
                backgroundImage: `url(${e?.name?Nl(e):"none"}`,
                border: g ? "1px dashed rgba(255,255,255,0.4)" : ""
            },
            children: gn(e) && we("div", {
                className: "item-slot-wrapper",
                onMouseEnter: () => {
                    a.current = window.setTimeout(() => {
                        s(n4({
                            item: e,
                            inventoryType: n
                        }))
                    }, 500)
                },
                onMouseLeave: () => {
                    s(Zu()), a.current && (clearTimeout(a.current), a.current = null)
                },
                children: [we("div", {
                    className: n === "player" && e.slot <= 5 ? "item-hotslot-header-wrapper" : "item-slot-header-wrapper",
                    children: [n === "player" && e.slot <= 5 && W("div", {
                        className: "inventory-slot-number",
                        children: e.slot
                    }), we("div", {
                        className: "item-slot-info-wrapper",
                        children: [W("p", {
                            children: e.weight > 0 ? e.weight >= 1e3 ? `${(e.weight/1e3).toLocaleString("en-us",{minimumFractionDigits:2})}kg ` : `${e.weight.toLocaleString("en-us",{minimumFractionDigits:0})}g ` : ""
                        }), W("p", {
                            children: e.count ? e.count.toLocaleString("en-us") + "x" : ""
                        })]
                    })]
                }), we("div", {
                    children: [n !== "shop" && e?.durability !== void 0 && W(xv, {
                        percent: e.durability,
                        durability: !0
                    }), n === "shop" && e?.price !== void 0 && W(En, {
                        children: e?.currency !== "money" && e.currency !== "black_money" && e.price > 0 && e.currency ? we("div", {
                            className: "item-slot-currency-wrapper",
                            children: [W("img", {
                                src: e.currency ? Nl(e.currency) : "none",
                                alt: "item-image",
                                style: {
                                    imageRendering: "-webkit-optimize-contrast",
                                    height: "auto",
                                    width: "2vh",
                                    backfaceVisibility: "hidden",
                                    transform: "translateZ(0)"
                                }
                            }), W("p", {
                                children: e.price.toLocaleString("en-us")
                            })]
                        }) : W(En, {
                            children: e.price > 0 && W("div", {
                                className: "item-slot-price-wrapper",
                                style: {
                                    color: e.currency === "money" || !e.currency ? "#2ECC71" : "#E74C3C"
                                },
                                children: we("p", {
                                    children: [ut.$ || "$", e.price.toLocaleString("en-us")]
                                })
                            })
                        })
                    }), W("div", {
                        className: "inventory-slot-label-box",
                        children: W("div", {
                            className: "inventory-slot-label-text",
                            children: e.metadata?.label ? e.metadata.label : dt[e.name]?.label || e.name
                        })
                    })]
                })]
            })
        })
    },
    k6 = Ve.memo(Ve.forwardRef(C6));

function _6(e) {
    const [t, n] = I.useState(null), r = I.useRef(null);
    return {
        ref: I.useCallback(l => {
            if (r.current && (r.current.disconnect(), r.current = null), l === null) {
                n(null);
                return
            }
            r.current = new IntersectionObserver(([s]) => {
                n(s)
            }, e), r.current.observe(l)
        }, [e?.rootMargin, e?.root, e?.threshold]),
        entry: t
    }
}
const yx = 30,
    l_ = ({
        inventory: e
    }) => {
        const t = I.useMemo(() => e.maxWeight !== void 0 ? Math.floor(F3(e.items) * 1e3) / 1e3 : 0, [e.maxWeight, e.items]),
            [n, r] = I.useState(0),
            i = I.useRef(null),
            {
                ref: l,
                entry: s
            } = _6({
                threshold: .5
            }),
            a = gi(f => f.inventory.isBusy);
        return I.useEffect(() => {
            s && s.isIntersecting && r(f => ++f)
        }, [s]), W(En, {
            children: we("div", {
                className: "inventory-grid-wrapper",
                style: {
                    pointerEvents: a ? "none" : "auto"
                },
                children: [we("div", {
                    children: [we("div", {
                        className: "inventory-grid-header-wrapper",
                        children: [W("p", {
                            children: e.label
                        }), e.maxWeight && we("p", {
                            children: [t / 1e3, "/", e.maxWeight / 1e3, "kg"]
                        })]
                    }), W(xv, {
                        percent: e.maxWeight ? t / e.maxWeight * 100 : 0
                    })]
                }), W("div", {
                    className: "inventory-grid-container",
                    ref: i,
                    children: W(En, {
                        children: e.items.slice(0, (n + 1) * yx).map((f, d) => W(k6, {
                            item: f,
                            ref: d === (n + 1) * yx - 1 ? l : null,
                            inventoryType: e.type,
                            inventoryGroups: e.groups,
                            inventoryId: e.id
                        }, `${e.type}-${e.id}-${f.slot}`))
                    })
                })]
            })
        })
    },
    b6 = () => {
        const e = gi(Z3);
        return W(l_, {
            inventory: e
        })
    },
    O6 = () => {
        const e = gi(ck);
        return W(l_, {
            inventory: e
        })
    },
    wx = ["http", "https", "mailto", "tel"];

function T6(e) {
    const t = (e || "").trim(),
        n = t.charAt(0);
    if (n === "#" || n === "/") return t;
    const r = t.indexOf(":");
    if (r === -1) return t;
    let i = -1;
    for (; ++i < wx.length;) {
        const l = wx[i];
        if (r === l.length && t.slice(0, l.length).toLowerCase() === l) return t
    }
    return i = t.indexOf("?"), i !== -1 && r > i || (i = t.indexOf("#"), i !== -1 && r > i) ? t : "javascript:void(0)"
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var I6 = function(t) {
    return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t)
};
const u_ = io(I6);

function ts(e) {
    return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? xx(e.position) : "start" in e || "end" in e ? xx(e) : "line" in e || "column" in e ? bg(e) : ""
}

function bg(e) {
    return Sx(e && e.line) + ":" + Sx(e && e.column)
}

function xx(e) {
    return bg(e && e.start) + "-" + bg(e && e.end)
}

function Sx(e) {
    return e && typeof e == "number" ? e : 1
}
class fr extends Error {
    constructor(t, n, r) {
        const i = [null, null];
        let l = {
            start: {
                line: null,
                column: null
            },
            end: {
                line: null,
                column: null
            }
        };
        if (super(), typeof n == "string" && (r = n, n = void 0), typeof r == "string") {
            const s = r.indexOf(":");
            s === -1 ? i[1] = r : (i[0] = r.slice(0, s), i[1] = r.slice(s + 1))
        }
        n && ("type" in n || "position" in n ? n.position && (l = n.position) : "start" in n || "end" in n ? l = n : ("line" in n || "column" in n) && (l.start = n)), this.name = ts(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = "", typeof t == "object" && t.stack && (this.stack = t.stack), this.reason = this.message, this.fatal, this.line = l.start.line, this.column = l.start.column, this.position = l, this.source = i[0], this.ruleId = i[1], this.file, this.actual, this.expected, this.url, this.note
    }
}
fr.prototype.file = "";
fr.prototype.name = "";
fr.prototype.reason = "";
fr.prototype.message = "";
fr.prototype.stack = "";
fr.prototype.fatal = null;
fr.prototype.column = null;
fr.prototype.line = null;
fr.prototype.source = null;
fr.prototype.ruleId = null;
fr.prototype.position = null;
const Nr = {
    basename: R6,
    dirname: P6,
    extname: A6,
    join: D6,
    sep: "/"
};

function R6(e, t) {
    if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
    Ns(e);
    let n = 0,
        r = -1,
        i = e.length,
        l;
    if (t === void 0 || t.length === 0 || t.length > e.length) {
        for (; i--;)
            if (e.charCodeAt(i) === 47) {
                if (l) {
                    n = i + 1;
                    break
                }
            } else r < 0 && (l = !0, r = i + 1);
        return r < 0 ? "" : e.slice(n, r)
    }
    if (t === e) return "";
    let s = -1,
        a = t.length - 1;
    for (; i--;)
        if (e.charCodeAt(i) === 47) {
            if (l) {
                n = i + 1;
                break
            }
        } else s < 0 && (l = !0, s = i + 1), a > -1 && (e.charCodeAt(i) === t.charCodeAt(a--) ? a < 0 && (r = i) : (a = -1, r = s));
    return n === r ? r = s : r < 0 && (r = e.length), e.slice(n, r)
}

function P6(e) {
    if (Ns(e), e.length === 0) return ".";
    let t = -1,
        n = e.length,
        r;
    for (; --n;)
        if (e.charCodeAt(n) === 47) {
            if (r) {
                t = n;
                break
            }
        } else r || (r = !0);
    return t < 0 ? e.charCodeAt(0) === 47 ? "/" : "." : t === 1 && e.charCodeAt(0) === 47 ? "//" : e.slice(0, t)
}

function A6(e) {
    Ns(e);
    let t = e.length,
        n = -1,
        r = 0,
        i = -1,
        l = 0,
        s;
    for (; t--;) {
        const a = e.charCodeAt(t);
        if (a === 47) {
            if (s) {
                r = t + 1;
                break
            }
            continue
        }
        n < 0 && (s = !0, n = t + 1), a === 46 ? i < 0 ? i = t : l !== 1 && (l = 1) : i > -1 && (l = -1)
    }
    return i < 0 || n < 0 || l === 0 || l === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n)
}

function D6(...e) {
    let t = -1,
        n;
    for (; ++t < e.length;) Ns(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
    return n === void 0 ? "." : N6(n)
}

function N6(e) {
    Ns(e);
    const t = e.charCodeAt(0) === 47;
    let n = M6(e, !t);
    return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n
}

function M6(e, t) {
    let n = "",
        r = 0,
        i = -1,
        l = 0,
        s = -1,
        a, f;
    for (; ++s <= e.length;) {
        if (s < e.length) a = e.charCodeAt(s);
        else {
            if (a === 47) break;
            a = 47
        }
        if (a === 47) {
            if (!(i === s - 1 || l === 1))
                if (i !== s - 1 && l === 2) {
                    if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
                        if (n.length > 2) {
                            if (f = n.lastIndexOf("/"), f !== n.length - 1) {
                                f < 0 ? (n = "", r = 0) : (n = n.slice(0, f), r = n.length - 1 - n.lastIndexOf("/")), i = s, l = 0;
                                continue
                            }
                        } else if (n.length > 0) {
                            n = "", r = 0, i = s, l = 0;
                            continue
                        }
                    }
                    t && (n = n.length > 0 ? n + "/.." : "..", r = 2)
                } else n.length > 0 ? n += "/" + e.slice(i + 1, s) : n = e.slice(i + 1, s), r = s - i - 1;
            i = s, l = 0
        } else a === 46 && l > -1 ? l++ : l = -1
    }
    return n
}

function Ns(e) {
    if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
}
const L6 = {
    cwd: F6
};

function F6() {
    return "/"
}

function Og(e) {
    return e !== null && typeof e == "object" && e.href && e.origin
}

function z6(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!Og(e)) {
        const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
        throw t.code = "ERR_INVALID_ARG_TYPE", t
    }
    if (e.protocol !== "file:") {
        const t = new TypeError("The URL must be of scheme file");
        throw t.code = "ERR_INVALID_URL_SCHEME", t
    }
    return $6(e)
}

function $6(e) {
    if (e.hostname !== "") {
        const r = new TypeError('File URL host must be "localhost" or empty on darwin');
        throw r.code = "ERR_INVALID_FILE_URL_HOST", r
    }
    const t = e.pathname;
    let n = -1;
    for (; ++n < t.length;)
        if (t.charCodeAt(n) === 37 && t.charCodeAt(n + 1) === 50) {
            const r = t.charCodeAt(n + 2);
            if (r === 70 || r === 102) {
                const i = new TypeError("File URL path must not include encoded / characters");
                throw i.code = "ERR_INVALID_FILE_URL_PATH", i
            }
        } return decodeURIComponent(t)
}
const lh = ["history", "path", "basename", "stem", "extname", "dirname"];
class s_ {
    constructor(t) {
        let n;
        t ? typeof t == "string" || B6(t) ? n = {
            value: t
        } : Og(t) ? n = {
            path: t
        } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = L6.cwd(), this.value, this.stored, this.result, this.map;
        let r = -1;
        for (; ++r < lh.length;) {
            const l = lh[r];
            l in n && n[l] !== void 0 && n[l] !== null && (this[l] = l === "history" ? [...n[l]] : n[l])
        }
        let i;
        for (i in n) lh.includes(i) || (this[i] = n[i])
    }
    get path() {
        return this.history[this.history.length - 1]
    }
    set path(t) {
        Og(t) && (t = z6(t)), sh(t, "path"), this.path !== t && this.history.push(t)
    }
    get dirname() {
        return typeof this.path == "string" ? Nr.dirname(this.path) : void 0
    }
    set dirname(t) {
        Ex(this.basename, "dirname"), this.path = Nr.join(t || "", this.basename)
    }
    get basename() {
        return typeof this.path == "string" ? Nr.basename(this.path) : void 0
    }
    set basename(t) {
        sh(t, "basename"), uh(t, "basename"), this.path = Nr.join(this.dirname || "", t)
    }
    get extname() {
        return typeof this.path == "string" ? Nr.extname(this.path) : void 0
    }
    set extname(t) {
        if (uh(t, "extname"), Ex(this.dirname, "extname"), t) {
            if (t.charCodeAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
        }
        this.path = Nr.join(this.dirname, this.stem + (t || ""))
    }
    get stem() {
        return typeof this.path == "string" ? Nr.basename(this.path, this.extname) : void 0
    }
    set stem(t) {
        sh(t, "stem"), uh(t, "stem"), this.path = Nr.join(this.dirname || "", t + (this.extname || ""))
    }
    toString(t) {
        return (this.value || "").toString(t || void 0)
    }
    message(t, n, r) {
        const i = new fr(t, n, r);
        return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i
    }
    info(t, n, r) {
        const i = this.message(t, n, r);
        return i.fatal = null, i
    }
    fail(t, n, r) {
        const i = this.message(t, n, r);
        throw i.fatal = !0, i
    }
}

function uh(e, t) {
    if (e && e.includes(Nr.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + Nr.sep + "`")
}

function sh(e, t) {
    if (!e) throw new Error("`" + t + "` cannot be empty")
}

function Ex(e, t) {
    if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
}

function B6(e) {
    return u_(e)
}

function Cx(e) {
    if (e) throw e
}
var cc = Object.prototype.hasOwnProperty,
    a_ = Object.prototype.toString,
    kx = Object.defineProperty,
    _x = Object.getOwnPropertyDescriptor,
    bx = function(t) {
        return typeof Array.isArray == "function" ? Array.isArray(t) : a_.call(t) === "[object Array]"
    },
    Ox = function(t) {
        if (!t || a_.call(t) !== "[object Object]") return !1;
        var n = cc.call(t, "constructor"),
            r = t.constructor && t.constructor.prototype && cc.call(t.constructor.prototype, "isPrototypeOf");
        if (t.constructor && !n && !r) return !1;
        var i;
        for (i in t);
        return typeof i > "u" || cc.call(t, i)
    },
    Tx = function(t, n) {
        kx && n.name === "__proto__" ? kx(t, n.name, {
            enumerable: !0,
            configurable: !0,
            value: n.newValue,
            writable: !0
        }) : t[n.name] = n.newValue
    },
    Ix = function(t, n) {
        if (n === "__proto__")
            if (cc.call(t, n)) {
                if (_x) return _x(t, n).value
            } else return;
        return t[n]
    },
    U6 = function e() {
        var t, n, r, i, l, s, a = arguments[0],
            f = 1,
            d = arguments.length,
            p = !1;
        for (typeof a == "boolean" && (p = a, a = arguments[1] || {}, f = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); f < d; ++f)
            if (t = arguments[f], t != null)
                for (n in t) r = Ix(a, n), i = Ix(t, n), a !== i && (p && i && (Ox(i) || (l = bx(i))) ? (l ? (l = !1, s = r && bx(r) ? r : []) : s = r && Ox(r) ? r : {}, Tx(a, {
                    name: n,
                    newValue: e(p, s, i)
                })) : typeof i < "u" && Tx(a, {
                    name: n,
                    newValue: i
                }));
        return a
    };
const Rx = io(U6);

function Tg(e) {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}

function H6() {
    const e = [],
        t = {
            run: n,
            use: r
        };
    return t;

    function n(...i) {
        let l = -1;
        const s = i.pop();
        if (typeof s != "function") throw new TypeError("Expected function as last argument, not " + s);
        a(null, ...i);

        function a(f, ...d) {
            const p = e[++l];
            let g = -1;
            if (f) {
                s(f);
                return
            }
            for (; ++g < i.length;)(d[g] === null || d[g] === void 0) && (d[g] = i[g]);
            i = d, p ? j6(p, a)(...d) : s(null, ...d)
        }
    }

    function r(i) {
        if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
        return e.push(i), t
    }
}

function j6(e, t) {
    let n;
    return r;

    function r(...s) {
        const a = e.length > s.length;
        let f;
        a && s.push(i);
        try {
            f = e.apply(this, s)
        } catch (d) {
            const p = d;
            if (a && n) throw p;
            return i(p)
        }
        a || (f && f.then && typeof f.then == "function" ? f.then(l, i) : f instanceof Error ? i(f) : l(f))
    }

    function i(s, ...a) {
        n || (n = !0, t(s, ...a))
    }

    function l(s) {
        i(null, s)
    }
}
const W6 = f_().freeze(),
    c_ = {}.hasOwnProperty;

function f_() {
    const e = H6(),
        t = [];
    let n = {},
        r, i = -1;
    return l.data = s, l.Parser = void 0, l.Compiler = void 0, l.freeze = a, l.attachers = t, l.use = f, l.parse = d, l.stringify = p, l.run = g, l.runSync = v, l.process = m, l.processSync = E, l;

    function l() {
        const S = f_();
        let A = -1;
        for (; ++A < t.length;) S.use(...t[A]);
        return S.data(Rx(!0, {}, n)), S
    }

    function s(S, A) {
        return typeof S == "string" ? arguments.length === 2 ? (fh("data", r), n[S] = A, l) : c_.call(n, S) && n[S] || null : S ? (fh("data", r), n = S, l) : n
    }

    function a() {
        if (r) return l;
        for (; ++i < t.length;) {
            const [S, ...A] = t[i];
            if (A[0] === !1) continue;
            A[0] === !0 && (A[0] = void 0);
            const y = S.call(l, ...A);
            typeof y == "function" && e.use(y)
        }
        return r = !0, i = Number.POSITIVE_INFINITY, l
    }

    function f(S, ...A) {
        let y;
        if (fh("use", r), S != null)
            if (typeof S == "function") N(S, ...A);
            else if (typeof S == "object") Array.isArray(S) ? P(S) : k(S);
        else throw new TypeError("Expected usable value, not `" + S + "`");
        return y && (n.settings = Object.assign(n.settings || {}, y)), l;

        function x(T) {
            if (typeof T == "function") N(T);
            else if (typeof T == "object")
                if (Array.isArray(T)) {
                    const [F, ...z] = T;
                    N(F, ...z)
                } else k(T);
            else throw new TypeError("Expected usable value, not `" + T + "`")
        }

        function k(T) {
            P(T.plugins), T.settings && (y = Object.assign(y || {}, T.settings))
        }

        function P(T) {
            let F = -1;
            if (T != null)
                if (Array.isArray(T))
                    for (; ++F < T.length;) {
                        const z = T[F];
                        x(z)
                    } else throw new TypeError("Expected a list of plugins, not `" + T + "`")
        }

        function N(T, F) {
            let z = -1,
                q;
            for (; ++z < t.length;)
                if (t[z][0] === T) {
                    q = t[z];
                    break
                } q ? (Tg(q[1]) && Tg(F) && (F = Rx(!0, q[1], F)), q[1] = F) : t.push([...arguments])
        }
    }

    function d(S) {
        l.freeze();
        const A = Du(S),
            y = l.Parser;
        return ah("parse", y), Px(y, "parse") ? new y(String(A), A).parse() : y(String(A), A)
    }

    function p(S, A) {
        l.freeze();
        const y = Du(A),
            x = l.Compiler;
        return ch("stringify", x), Ax(S), Px(x, "compile") ? new x(S, y).compile() : x(S, y)
    }

    function g(S, A, y) {
        if (Ax(S), l.freeze(), !y && typeof A == "function" && (y = A, A = void 0), !y) return new Promise(x);
        x(null, y);

        function x(k, P) {
            e.run(S, Du(A), N);

            function N(T, F, z) {
                F = F || S, T ? P(T) : k ? k(F) : y(null, F, z)
            }
        }
    }

    function v(S, A) {
        let y, x;
        return l.run(S, A, k), Dx("runSync", "run", x), y;

        function k(P, N) {
            Cx(P), y = N, x = !0
        }
    }

    function m(S, A) {
        if (l.freeze(), ah("process", l.Parser), ch("process", l.Compiler), !A) return new Promise(y);
        y(null, A);

        function y(x, k) {
            const P = Du(S);
            l.run(l.parse(P), P, (T, F, z) => {
                if (T || !F || !z) N(T);
                else {
                    const q = l.stringify(F, z);
                    q == null || (G6(q) ? z.value = q : z.result = q), N(T, z)
                }
            });

            function N(T, F) {
                T || !F ? k(T) : x ? x(F) : A(null, F)
            }
        }
    }

    function E(S) {
        let A;
        l.freeze(), ah("processSync", l.Parser), ch("processSync", l.Compiler);
        const y = Du(S);
        return l.process(y, x), Dx("processSync", "process", A), y;

        function x(k) {
            A = !0, Cx(k)
        }
    }
}

function Px(e, t) {
    return typeof e == "function" && e.prototype && (V6(e.prototype) || t in e.prototype)
}

function V6(e) {
    let t;
    for (t in e)
        if (c_.call(e, t)) return !0;
    return !1
}

function ah(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `Parser`")
}

function ch(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `Compiler`")
}

function fh(e, t) {
    if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}

function Ax(e) {
    if (!Tg(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`")
}

function Dx(e, t, n) {
    if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
}

function Du(e) {
    return q6(e) ? e : new s_(e)
}

function q6(e) {
    return !!(e && typeof e == "object" && "message" in e && "messages" in e)
}

function G6(e) {
    return typeof e == "string" || u_(e)
}
const K6 = {};

function Q6(e, t) {
    const n = t || K6,
        r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
        i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
    return d_(e, r, i)
}

function d_(e, t, n) {
    if (Y6(e)) {
        if ("value" in e) return e.type === "html" && !n ? "" : e.value;
        if (t && "alt" in e && e.alt) return e.alt;
        if ("children" in e) return Nx(e.children, t, n)
    }
    return Array.isArray(e) ? Nx(e, t, n) : ""
}

function Nx(e, t, n) {
    const r = [];
    let i = -1;
    for (; ++i < e.length;) r[i] = d_(e[i], t, n);
    return r.join("")
}

function Y6(e) {
    return !!(e && typeof e == "object")
}

function jr(e, t, n, r) {
    const i = e.length;
    let l = 0,
        s;
    if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) s = Array.from(r), s.unshift(t, n), e.splice(...s);
    else
        for (n && e.splice(t, n); l < r.length;) s = r.slice(l, l + 1e4), s.unshift(t, 0), e.splice(...s), l += 1e4, t += 1e4
}

function ir(e, t) {
    return e.length > 0 ? (jr(e, e.length, 0, t), e) : t
}
const Mx = {}.hasOwnProperty;

function X6(e) {
    const t = {};
    let n = -1;
    for (; ++n < e.length;) Z6(t, e[n]);
    return t
}

function Z6(e, t) {
    let n;
    for (n in t) {
        const i = (Mx.call(e, n) ? e[n] : void 0) || (e[n] = {}),
            l = t[n];
        let s;
        if (l)
            for (s in l) {
                Mx.call(i, s) || (i[s] = []);
                const a = l[s];
                J6(i[s], Array.isArray(a) ? a : a ? [a] : [])
            }
    }
}

function J6(e, t) {
    let n = -1;
    const r = [];
    for (; ++n < t.length;)(t[n].add === "after" ? e : r).push(t[n]);
    jr(e, 0, 0, r)
}
const e5 = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
    Fr = ao(/[A-Za-z]/),
    Ln = ao(/[\dA-Za-z]/),
    t5 = ao(/[#-'*+\--9=?A-Z^-~]/);

function Ig(e) {
    return e !== null && (e < 32 || e === 127)
}
const Rg = ao(/\d/),
    n5 = ao(/[\dA-Fa-f]/),
    r5 = ao(/[!-/:-@[-`{-~]/);

function xe(e) {
    return e !== null && e < -2
}

function Sn(e) {
    return e !== null && (e < 0 || e === 32)
}

function We(e) {
    return e === -2 || e === -1 || e === 32
}
const i5 = ao(e5),
    o5 = ao(/\s/);

function ao(e) {
    return t;

    function t(n) {
        return n !== null && e.test(String.fromCharCode(n))
    }
}

function rt(e, t, n, r) {
    const i = r ? r - 1 : Number.POSITIVE_INFINITY;
    let l = 0;
    return s;

    function s(f) {
        return We(f) ? (e.enter(n), a(f)) : t(f)
    }

    function a(f) {
        return We(f) && l++ < i ? (e.consume(f), a) : (e.exit(n), t(f))
    }
}
const l5 = {
    tokenize: u5
};

function u5(e) {
    const t = e.attempt(this.parser.constructs.contentInitial, r, i);
    let n;
    return t;

    function r(a) {
        if (a === null) {
            e.consume(a);
            return
        }
        return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), rt(e, t, "linePrefix")
    }

    function i(a) {
        return e.enter("paragraph"), l(a)
    }

    function l(a) {
        const f = e.enter("chunkText", {
            contentType: "text",
            previous: n
        });
        return n && (n.next = f), n = f, s(a)
    }

    function s(a) {
        if (a === null) {
            e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
            return
        }
        return xe(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), s)
    }
}
const s5 = {
        tokenize: a5
    },
    Lx = {
        tokenize: c5
    };

function a5(e) {
    const t = this,
        n = [];
    let r = 0,
        i, l, s;
    return a;

    function a(k) {
        if (r < n.length) {
            const P = n[r];
            return t.containerState = P[1], e.attempt(P[0].continuation, f, d)(k)
        }
        return d(k)
    }

    function f(k) {
        if (r++, t.containerState._closeFlow) {
            t.containerState._closeFlow = void 0, i && x();
            const P = t.events.length;
            let N = P,
                T;
            for (; N--;)
                if (t.events[N][0] === "exit" && t.events[N][1].type === "chunkFlow") {
                    T = t.events[N][1].end;
                    break
                } y(r);
            let F = P;
            for (; F < t.events.length;) t.events[F][1].end = Object.assign({}, T), F++;
            return jr(t.events, N + 1, 0, t.events.slice(P)), t.events.length = F, d(k)
        }
        return a(k)
    }

    function d(k) {
        if (r === n.length) {
            if (!i) return v(k);
            if (i.currentConstruct && i.currentConstruct.concrete) return E(k);
            t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
        }
        return t.containerState = {}, e.check(Lx, p, g)(k)
    }

    function p(k) {
        return i && x(), y(r), v(k)
    }

    function g(k) {
        return t.parser.lazy[t.now().line] = r !== n.length, s = t.now().offset, E(k)
    }

    function v(k) {
        return t.containerState = {}, e.attempt(Lx, m, E)(k)
    }

    function m(k) {
        return r++, n.push([t.currentConstruct, t.containerState]), v(k)
    }

    function E(k) {
        if (k === null) {
            i && x(), y(0), e.consume(k);
            return
        }
        return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
            contentType: "flow",
            previous: l,
            _tokenizer: i
        }), S(k)
    }

    function S(k) {
        if (k === null) {
            A(e.exit("chunkFlow"), !0), y(0), e.consume(k);
            return
        }
        return xe(k) ? (e.consume(k), A(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(k), S)
    }

    function A(k, P) {
        const N = t.sliceStream(k);
        if (P && N.push(null), k.previous = l, l && (l.next = k), l = k, i.defineSkip(k.start), i.write(N), t.parser.lazy[k.start.line]) {
            let T = i.events.length;
            for (; T--;)
                if (i.events[T][1].start.offset < s && (!i.events[T][1].end || i.events[T][1].end.offset > s)) return;
            const F = t.events.length;
            let z = F,
                q, Q;
            for (; z--;)
                if (t.events[z][0] === "exit" && t.events[z][1].type === "chunkFlow") {
                    if (q) {
                        Q = t.events[z][1].end;
                        break
                    }
                    q = !0
                } for (y(r), T = F; T < t.events.length;) t.events[T][1].end = Object.assign({}, Q), T++;
            jr(t.events, z + 1, 0, t.events.slice(F)), t.events.length = T
        }
    }

    function y(k) {
        let P = n.length;
        for (; P-- > k;) {
            const N = n[P];
            t.containerState = N[1], N[0].exit.call(t, e)
        }
        n.length = k
    }

    function x() {
        i.write([null]), l = void 0, i = void 0, t.containerState._closeFlow = void 0
    }
}

function c5(e, t, n) {
    return rt(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}

function Fx(e) {
    if (e === null || Sn(e) || o5(e)) return 1;
    if (i5(e)) return 2
}

function _v(e, t, n) {
    const r = [];
    let i = -1;
    for (; ++i < e.length;) {
        const l = e[i].resolveAll;
        l && !r.includes(l) && (t = l(t, n), r.push(l))
    }
    return t
}
const Pg = {
    name: "attention",
    tokenize: d5,
    resolveAll: f5
};

function f5(e, t) {
    let n = -1,
        r, i, l, s, a, f, d, p;
    for (; ++n < e.length;)
        if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
            for (r = n; r--;)
                if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
                    if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
                    f = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
                    const g = Object.assign({}, e[r][1].end),
                        v = Object.assign({}, e[n][1].start);
                    zx(g, -f), zx(v, f), s = {
                        type: f > 1 ? "strongSequence" : "emphasisSequence",
                        start: g,
                        end: Object.assign({}, e[r][1].end)
                    }, a = {
                        type: f > 1 ? "strongSequence" : "emphasisSequence",
                        start: Object.assign({}, e[n][1].start),
                        end: v
                    }, l = {
                        type: f > 1 ? "strongText" : "emphasisText",
                        start: Object.assign({}, e[r][1].end),
                        end: Object.assign({}, e[n][1].start)
                    }, i = {
                        type: f > 1 ? "strong" : "emphasis",
                        start: Object.assign({}, s.start),
                        end: Object.assign({}, a.end)
                    }, e[r][1].end = Object.assign({}, s.start), e[n][1].start = Object.assign({}, a.end), d = [], e[r][1].end.offset - e[r][1].start.offset && (d = ir(d, [
                        ["enter", e[r][1], t],
                        ["exit", e[r][1], t]
                    ])), d = ir(d, [
                        ["enter", i, t],
                        ["enter", s, t],
                        ["exit", s, t],
                        ["enter", l, t]
                    ]), d = ir(d, _v(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), d = ir(d, [
                        ["exit", l, t],
                        ["enter", a, t],
                        ["exit", a, t],
                        ["exit", i, t]
                    ]), e[n][1].end.offset - e[n][1].start.offset ? (p = 2, d = ir(d, [
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t]
                    ])) : p = 0, jr(e, r - 1, n - r + 3, d), n = r + d.length - p - 2;
                    break
                }
        } for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
    return e
}

function d5(e, t) {
    const n = this.parser.constructs.attentionMarkers.null,
        r = this.previous,
        i = Fx(r);
    let l;
    return s;

    function s(f) {
        return l = f, e.enter("attentionSequence"), a(f)
    }

    function a(f) {
        if (f === l) return e.consume(f), a;
        const d = e.exit("attentionSequence"),
            p = Fx(f),
            g = !p || p === 2 && i || n.includes(f),
            v = !i || i === 2 && p || n.includes(r);
        return d._open = !!(l === 42 ? g : g && (i || !v)), d._close = !!(l === 42 ? v : v && (p || !g)), t(f)
    }
}

function zx(e, t) {
    e.column += t, e.offset += t, e._bufferIndex += t
}
const p5 = {
    name: "autolink",
    tokenize: h5
};

function h5(e, t, n) {
    let r = 0;
    return i;

    function i(m) {
        return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l
    }

    function l(m) {
        return Fr(m) ? (e.consume(m), s) : d(m)
    }

    function s(m) {
        return m === 43 || m === 45 || m === 46 || Ln(m) ? (r = 1, a(m)) : d(m)
    }

    function a(m) {
        return m === 58 ? (e.consume(m), r = 0, f) : (m === 43 || m === 45 || m === 46 || Ln(m)) && r++ < 32 ? (e.consume(m), a) : (r = 0, d(m))
    }

    function f(m) {
        return m === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.exit("autolink"), t) : m === null || m === 32 || m === 60 || Ig(m) ? n(m) : (e.consume(m), f)
    }

    function d(m) {
        return m === 64 ? (e.consume(m), p) : t5(m) ? (e.consume(m), d) : n(m)
    }

    function p(m) {
        return Ln(m) ? g(m) : n(m)
    }

    function g(m) {
        return m === 46 ? (e.consume(m), r = 0, p) : m === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.exit("autolink"), t) : v(m)
    }

    function v(m) {
        if ((m === 45 || Ln(m)) && r++ < 63) {
            const E = m === 45 ? v : g;
            return e.consume(m), E
        }
        return n(m)
    }
}
const Xf = {
    tokenize: g5,
    partial: !0
};

function g5(e, t, n) {
    return r;

    function r(l) {
        return We(l) ? rt(e, i, "linePrefix")(l) : i(l)
    }

    function i(l) {
        return l === null || xe(l) ? t(l) : n(l)
    }
}
const p_ = {
    name: "blockQuote",
    tokenize: m5,
    continuation: {
        tokenize: v5
    },
    exit: y5
};

function m5(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        if (s === 62) {
            const a = r.containerState;
            return a.open || (e.enter("blockQuote", {
                _container: !0
            }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(s), e.exit("blockQuoteMarker"), l
        }
        return n(s)
    }

    function l(s) {
        return We(s) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(s), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(s))
    }
}

function v5(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return We(s) ? rt(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s) : l(s)
    }

    function l(s) {
        return e.attempt(p_, t, n)(s)
    }
}

function y5(e) {
    e.exit("blockQuote")
}
const h_ = {
    name: "characterEscape",
    tokenize: w5
};

function w5(e, t, n) {
    return r;

    function r(l) {
        return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i
    }

    function i(l) {
        return r5(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(l)
    }
}
const $x = document.createElement("i");

function bv(e) {
    const t = "&" + e + ";";
    $x.innerHTML = t;
    const n = $x.textContent;
    return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
}
const g_ = {
    name: "characterReference",
    tokenize: x5
};

function x5(e, t, n) {
    const r = this;
    let i = 0,
        l, s;
    return a;

    function a(g) {
        return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), f
    }

    function f(g) {
        return g === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(g), e.exit("characterReferenceMarkerNumeric"), d) : (e.enter("characterReferenceValue"), l = 31, s = Ln, p(g))
    }

    function d(g) {
        return g === 88 || g === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(g), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, s = n5, p) : (e.enter("characterReferenceValue"), l = 7, s = Rg, p(g))
    }

    function p(g) {
        if (g === 59 && i) {
            const v = e.exit("characterReferenceValue");
            return s === Ln && !bv(r.sliceSerialize(v)) ? n(g) : (e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)
        }
        return s(g) && i++ < l ? (e.consume(g), p) : n(g)
    }
}
const Bx = {
        tokenize: E5,
        partial: !0
    },
    Ux = {
        name: "codeFenced",
        tokenize: S5,
        concrete: !0
    };

function S5(e, t, n) {
    const r = this,
        i = {
            tokenize: N,
            partial: !0
        };
    let l = 0,
        s = 0,
        a;
    return f;

    function f(T) {
        return d(T)
    }

    function d(T) {
        const F = r.events[r.events.length - 1];
        return l = F && F[1].type === "linePrefix" ? F[2].sliceSerialize(F[1], !0).length : 0, a = T, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), p(T)
    }

    function p(T) {
        return T === a ? (s++, e.consume(T), p) : s < 3 ? n(T) : (e.exit("codeFencedFenceSequence"), We(T) ? rt(e, g, "whitespace")(T) : g(T))
    }

    function g(T) {
        return T === null || xe(T) ? (e.exit("codeFencedFence"), r.interrupt ? t(T) : e.check(Bx, S, P)(T)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
            contentType: "string"
        }), v(T))
    }

    function v(T) {
        return T === null || xe(T) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), g(T)) : We(T) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), rt(e, m, "whitespace")(T)) : T === 96 && T === a ? n(T) : (e.consume(T), v)
    }

    function m(T) {
        return T === null || xe(T) ? g(T) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
            contentType: "string"
        }), E(T))
    }

    function E(T) {
        return T === null || xe(T) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(T)) : T === 96 && T === a ? n(T) : (e.consume(T), E)
    }

    function S(T) {
        return e.attempt(i, P, A)(T)
    }

    function A(T) {
        return e.enter("lineEnding"), e.consume(T), e.exit("lineEnding"), y
    }

    function y(T) {
        return l > 0 && We(T) ? rt(e, x, "linePrefix", l + 1)(T) : x(T)
    }

    function x(T) {
        return T === null || xe(T) ? e.check(Bx, S, P)(T) : (e.enter("codeFlowValue"), k(T))
    }

    function k(T) {
        return T === null || xe(T) ? (e.exit("codeFlowValue"), x(T)) : (e.consume(T), k)
    }

    function P(T) {
        return e.exit("codeFenced"), t(T)
    }

    function N(T, F, z) {
        let q = 0;
        return Q;

        function Q(Z) {
            return T.enter("lineEnding"), T.consume(Z), T.exit("lineEnding"), $
        }

        function $(Z) {
            return T.enter("codeFencedFence"), We(Z) ? rt(T, G, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(Z) : G(Z)
        }

        function G(Z) {
            return Z === a ? (T.enter("codeFencedFenceSequence"), B(Z)) : z(Z)
        }

        function B(Z) {
            return Z === a ? (q++, T.consume(Z), B) : q >= s ? (T.exit("codeFencedFenceSequence"), We(Z) ? rt(T, U, "whitespace")(Z) : U(Z)) : z(Z)
        }

        function U(Z) {
            return Z === null || xe(Z) ? (T.exit("codeFencedFence"), F(Z)) : z(Z)
        }
    }
}

function E5(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return s === null ? n(s) : (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), l)
    }

    function l(s) {
        return r.parser.lazy[r.now().line] ? n(s) : t(s)
    }
}
const dh = {
        name: "codeIndented",
        tokenize: k5
    },
    C5 = {
        tokenize: _5,
        partial: !0
    };

function k5(e, t, n) {
    const r = this;
    return i;

    function i(d) {
        return e.enter("codeIndented"), rt(e, l, "linePrefix", 4 + 1)(d)
    }

    function l(d) {
        const p = r.events[r.events.length - 1];
        return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? s(d) : n(d)
    }

    function s(d) {
        return d === null ? f(d) : xe(d) ? e.attempt(C5, s, f)(d) : (e.enter("codeFlowValue"), a(d))
    }

    function a(d) {
        return d === null || xe(d) ? (e.exit("codeFlowValue"), s(d)) : (e.consume(d), a)
    }

    function f(d) {
        return e.exit("codeIndented"), t(d)
    }
}

function _5(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return r.parser.lazy[r.now().line] ? n(s) : xe(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), i) : rt(e, l, "linePrefix", 4 + 1)(s)
    }

    function l(s) {
        const a = r.events[r.events.length - 1];
        return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(s) : xe(s) ? i(s) : n(s)
    }
}
const b5 = {
    name: "codeText",
    tokenize: I5,
    resolve: O5,
    previous: T5
};

function O5(e) {
    let t = e.length - 4,
        n = 3,
        r, i;
    if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
        for (r = n; ++r < t;)
            if (e[r][1].type === "codeTextData") {
                e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
                break
            }
    }
    for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
    return e
}

function T5(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
}

function I5(e, t, n) {
    let r = 0,
        i, l;
    return s;

    function s(g) {
        return e.enter("codeText"), e.enter("codeTextSequence"), a(g)
    }

    function a(g) {
        return g === 96 ? (e.consume(g), r++, a) : (e.exit("codeTextSequence"), f(g))
    }

    function f(g) {
        return g === null ? n(g) : g === 32 ? (e.enter("space"), e.consume(g), e.exit("space"), f) : g === 96 ? (l = e.enter("codeTextSequence"), i = 0, p(g)) : xe(g) ? (e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), f) : (e.enter("codeTextData"), d(g))
    }

    function d(g) {
        return g === null || g === 32 || g === 96 || xe(g) ? (e.exit("codeTextData"), f(g)) : (e.consume(g), d)
    }

    function p(g) {
        return g === 96 ? (e.consume(g), i++, p) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(g)) : (l.type = "codeTextData", d(g))
    }
}

function m_(e) {
    const t = {};
    let n = -1,
        r, i, l, s, a, f, d;
    for (; ++n < e.length;) {
        for (; n in t;) n = t[n];
        if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (f = r[1]._tokenizer.events, l = 0, l < f.length && f[l][1].type === "lineEndingBlank" && (l += 2), l < f.length && f[l][1].type === "content"))
            for (; ++l < f.length && f[l][1].type !== "content";) f[l][1].type === "chunkText" && (f[l][1]._isInFirstContentOfListItem = !0, l++);
        if (r[0] === "enter") r[1].contentType && (Object.assign(t, R5(e, n)), n = t[n], d = !0);
        else if (r[1]._container) {
            for (l = n, i = void 0; l-- && (s = e[l], s[1].type === "lineEnding" || s[1].type === "lineEndingBlank");) s[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), s[1].type = "lineEnding", i = l);
            i && (r[1].end = Object.assign({}, e[i][1].start), a = e.slice(i, n), a.unshift(r), jr(e, i, n - i + 1, a))
        }
    }
    return !d
}

function R5(e, t) {
    const n = e[t][1],
        r = e[t][2];
    let i = t - 1;
    const l = [],
        s = n._tokenizer || r.parser[n.contentType](n.start),
        a = s.events,
        f = [],
        d = {};
    let p, g, v = -1,
        m = n,
        E = 0,
        S = 0;
    const A = [S];
    for (; m;) {
        for (; e[++i][1] !== m;);
        l.push(i), m._tokenizer || (p = r.sliceStream(m), m.next || p.push(null), g && s.defineSkip(m.start), m._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = !0), s.write(p), m._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = void 0)), g = m, m = m.next
    }
    for (m = n; ++v < a.length;) a[v][0] === "exit" && a[v - 1][0] === "enter" && a[v][1].type === a[v - 1][1].type && a[v][1].start.line !== a[v][1].end.line && (S = v + 1, A.push(S), m._tokenizer = void 0, m.previous = void 0, m = m.next);
    for (s.events = [], m ? (m._tokenizer = void 0, m.previous = void 0) : A.pop(), v = A.length; v--;) {
        const y = a.slice(A[v], A[v + 1]),
            x = l.pop();
        f.unshift([x, x + y.length - 1]), jr(e, x, 2, y)
    }
    for (v = -1; ++v < f.length;) d[E + f[v][0]] = E + f[v][1], E += f[v][1] - f[v][0] - 1;
    return d
}
const P5 = {
        tokenize: N5,
        resolve: D5
    },
    A5 = {
        tokenize: M5,
        partial: !0
    };

function D5(e) {
    return m_(e), e
}

function N5(e, t) {
    let n;
    return r;

    function r(a) {
        return e.enter("content"), n = e.enter("chunkContent", {
            contentType: "content"
        }), i(a)
    }

    function i(a) {
        return a === null ? l(a) : xe(a) ? e.check(A5, s, l)(a) : (e.consume(a), i)
    }

    function l(a) {
        return e.exit("chunkContent"), e.exit("content"), t(a)
    }

    function s(a) {
        return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
            contentType: "content",
            previous: n
        }), n = n.next, i
    }
}

function M5(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), rt(e, l, "linePrefix")
    }

    function l(s) {
        if (s === null || xe(s)) return n(s);
        const a = r.events[r.events.length - 1];
        return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(s) : e.interrupt(r.parser.constructs.flow, n, t)(s)
    }
}

function v_(e, t, n, r, i, l, s, a, f) {
    const d = f || Number.POSITIVE_INFINITY;
    let p = 0;
    return g;

    function g(y) {
        return y === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(y), e.exit(l), v) : y === null || y === 32 || y === 41 || Ig(y) ? n(y) : (e.enter(r), e.enter(s), e.enter(a), e.enter("chunkString", {
            contentType: "string"
        }), S(y))
    }

    function v(y) {
        return y === 62 ? (e.enter(l), e.consume(y), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
            contentType: "string"
        }), m(y))
    }

    function m(y) {
        return y === 62 ? (e.exit("chunkString"), e.exit(a), v(y)) : y === null || y === 60 || xe(y) ? n(y) : (e.consume(y), y === 92 ? E : m)
    }

    function E(y) {
        return y === 60 || y === 62 || y === 92 ? (e.consume(y), m) : m(y)
    }

    function S(y) {
        return !p && (y === null || y === 41 || Sn(y)) ? (e.exit("chunkString"), e.exit(a), e.exit(s), e.exit(r), t(y)) : p < d && y === 40 ? (e.consume(y), p++, S) : y === 41 ? (e.consume(y), p--, S) : y === null || y === 32 || y === 40 || Ig(y) ? n(y) : (e.consume(y), y === 92 ? A : S)
    }

    function A(y) {
        return y === 40 || y === 41 || y === 92 ? (e.consume(y), S) : S(y)
    }
}

function y_(e, t, n, r, i, l) {
    const s = this;
    let a = 0,
        f;
    return d;

    function d(m) {
        return e.enter(r), e.enter(i), e.consume(m), e.exit(i), e.enter(l), p
    }

    function p(m) {
        return a > 999 || m === null || m === 91 || m === 93 && !f || m === 94 && !a && "_hiddenFootnoteSupport" in s.parser.constructs ? n(m) : m === 93 ? (e.exit(l), e.enter(i), e.consume(m), e.exit(i), e.exit(r), t) : xe(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), p) : (e.enter("chunkString", {
            contentType: "string"
        }), g(m))
    }

    function g(m) {
        return m === null || m === 91 || m === 93 || xe(m) || a++ > 999 ? (e.exit("chunkString"), p(m)) : (e.consume(m), f || (f = !We(m)), m === 92 ? v : g)
    }

    function v(m) {
        return m === 91 || m === 92 || m === 93 ? (e.consume(m), a++, g) : g(m)
    }
}

function w_(e, t, n, r, i, l) {
    let s;
    return a;

    function a(v) {
        return v === 34 || v === 39 || v === 40 ? (e.enter(r), e.enter(i), e.consume(v), e.exit(i), s = v === 40 ? 41 : v, f) : n(v)
    }

    function f(v) {
        return v === s ? (e.enter(i), e.consume(v), e.exit(i), e.exit(r), t) : (e.enter(l), d(v))
    }

    function d(v) {
        return v === s ? (e.exit(l), f(s)) : v === null ? n(v) : xe(v) ? (e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), rt(e, d, "linePrefix")) : (e.enter("chunkString", {
            contentType: "string"
        }), p(v))
    }

    function p(v) {
        return v === s || v === null || xe(v) ? (e.exit("chunkString"), d(v)) : (e.consume(v), v === 92 ? g : p)
    }

    function g(v) {
        return v === s || v === 92 ? (e.consume(v), p) : p(v)
    }
}

function ns(e, t) {
    let n;
    return r;

    function r(i) {
        return xe(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : We(i) ? rt(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
    }
}

function Ll(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
}
const L5 = {
        name: "definition",
        tokenize: z5
    },
    F5 = {
        tokenize: $5,
        partial: !0
    };

function z5(e, t, n) {
    const r = this;
    let i;
    return l;

    function l(m) {
        return e.enter("definition"), s(m)
    }

    function s(m) {
        return y_.call(r, e, a, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(m)
    }

    function a(m) {
        return i = Ll(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), f) : n(m)
    }

    function f(m) {
        return Sn(m) ? ns(e, d)(m) : d(m)
    }

    function d(m) {
        return v_(e, p, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(m)
    }

    function p(m) {
        return e.attempt(F5, g, g)(m)
    }

    function g(m) {
        return We(m) ? rt(e, v, "whitespace")(m) : v(m)
    }

    function v(m) {
        return m === null || xe(m) ? (e.exit("definition"), r.parser.defined.push(i), t(m)) : n(m)
    }
}

function $5(e, t, n) {
    return r;

    function r(a) {
        return Sn(a) ? ns(e, i)(a) : n(a)
    }

    function i(a) {
        return w_(e, l, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a)
    }

    function l(a) {
        return We(a) ? rt(e, s, "whitespace")(a) : s(a)
    }

    function s(a) {
        return a === null || xe(a) ? t(a) : n(a)
    }
}
const B5 = {
    name: "hardBreakEscape",
    tokenize: U5
};

function U5(e, t, n) {
    return r;

    function r(l) {
        return e.enter("hardBreakEscape"), e.consume(l), i
    }

    function i(l) {
        return xe(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l)
    }
}
const H5 = {
    name: "headingAtx",
    tokenize: W5,
    resolve: j5
};

function j5(e, t) {
    let n = e.length - 2,
        r = 3,
        i, l;
    return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
        type: "atxHeadingText",
        start: e[r][1].start,
        end: e[n][1].end
    }, l = {
        type: "chunkText",
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: "text"
    }, jr(e, r, n - r + 1, [
        ["enter", i, t],
        ["enter", l, t],
        ["exit", l, t],
        ["exit", i, t]
    ])), e
}

function W5(e, t, n) {
    let r = 0;
    return i;

    function i(p) {
        return e.enter("atxHeading"), l(p)
    }

    function l(p) {
        return e.enter("atxHeadingSequence"), s(p)
    }

    function s(p) {
        return p === 35 && r++ < 6 ? (e.consume(p), s) : p === null || Sn(p) ? (e.exit("atxHeadingSequence"), a(p)) : n(p)
    }

    function a(p) {
        return p === 35 ? (e.enter("atxHeadingSequence"), f(p)) : p === null || xe(p) ? (e.exit("atxHeading"), t(p)) : We(p) ? rt(e, a, "whitespace")(p) : (e.enter("atxHeadingText"), d(p))
    }

    function f(p) {
        return p === 35 ? (e.consume(p), f) : (e.exit("atxHeadingSequence"), a(p))
    }

    function d(p) {
        return p === null || p === 35 || Sn(p) ? (e.exit("atxHeadingText"), a(p)) : (e.consume(p), d)
    }
}
const V5 = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
    Hx = ["pre", "script", "style", "textarea"],
    q5 = {
        name: "htmlFlow",
        tokenize: Y5,
        resolveTo: Q5,
        concrete: !0
    },
    G5 = {
        tokenize: Z5,
        partial: !0
    },
    K5 = {
        tokenize: X5,
        partial: !0
    };

function Q5(e) {
    let t = e.length;
    for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
    return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
}

function Y5(e, t, n) {
    const r = this;
    let i, l, s, a, f;
    return d;

    function d(O) {
        return p(O)
    }

    function p(O) {
        return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(O), g
    }

    function g(O) {
        return O === 33 ? (e.consume(O), v) : O === 47 ? (e.consume(O), l = !0, S) : O === 63 ? (e.consume(O), i = 3, r.interrupt ? t : b) : Fr(O) ? (e.consume(O), s = String.fromCharCode(O), A) : n(O)
    }

    function v(O) {
        return O === 45 ? (e.consume(O), i = 2, m) : O === 91 ? (e.consume(O), i = 5, a = 0, E) : Fr(O) ? (e.consume(O), i = 4, r.interrupt ? t : b) : n(O)
    }

    function m(O) {
        return O === 45 ? (e.consume(O), r.interrupt ? t : b) : n(O)
    }

    function E(O) {
        const de = "CDATA[";
        return O === de.charCodeAt(a++) ? (e.consume(O), a === de.length ? r.interrupt ? t : G : E) : n(O)
    }

    function S(O) {
        return Fr(O) ? (e.consume(O), s = String.fromCharCode(O), A) : n(O)
    }

    function A(O) {
        if (O === null || O === 47 || O === 62 || Sn(O)) {
            const de = O === 47,
                Re = s.toLowerCase();
            return !de && !l && Hx.includes(Re) ? (i = 1, r.interrupt ? t(O) : G(O)) : V5.includes(s.toLowerCase()) ? (i = 6, de ? (e.consume(O), y) : r.interrupt ? t(O) : G(O)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(O) : l ? x(O) : k(O))
        }
        return O === 45 || Ln(O) ? (e.consume(O), s += String.fromCharCode(O), A) : n(O)
    }

    function y(O) {
        return O === 62 ? (e.consume(O), r.interrupt ? t : G) : n(O)
    }

    function x(O) {
        return We(O) ? (e.consume(O), x) : Q(O)
    }

    function k(O) {
        return O === 47 ? (e.consume(O), Q) : O === 58 || O === 95 || Fr(O) ? (e.consume(O), P) : We(O) ? (e.consume(O), k) : Q(O)
    }

    function P(O) {
        return O === 45 || O === 46 || O === 58 || O === 95 || Ln(O) ? (e.consume(O), P) : N(O)
    }

    function N(O) {
        return O === 61 ? (e.consume(O), T) : We(O) ? (e.consume(O), N) : k(O)
    }

    function T(O) {
        return O === null || O === 60 || O === 61 || O === 62 || O === 96 ? n(O) : O === 34 || O === 39 ? (e.consume(O), f = O, F) : We(O) ? (e.consume(O), T) : z(O)
    }

    function F(O) {
        return O === f ? (e.consume(O), f = null, q) : O === null || xe(O) ? n(O) : (e.consume(O), F)
    }

    function z(O) {
        return O === null || O === 34 || O === 39 || O === 47 || O === 60 || O === 61 || O === 62 || O === 96 || Sn(O) ? N(O) : (e.consume(O), z)
    }

    function q(O) {
        return O === 47 || O === 62 || We(O) ? k(O) : n(O)
    }

    function Q(O) {
        return O === 62 ? (e.consume(O), $) : n(O)
    }

    function $(O) {
        return O === null || xe(O) ? G(O) : We(O) ? (e.consume(O), $) : n(O)
    }

    function G(O) {
        return O === 45 && i === 2 ? (e.consume(O), ue) : O === 60 && i === 1 ? (e.consume(O), oe) : O === 62 && i === 4 ? (e.consume(O), ne) : O === 63 && i === 3 ? (e.consume(O), b) : O === 93 && i === 5 ? (e.consume(O), J) : xe(O) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(G5, ae, B)(O)) : O === null || xe(O) ? (e.exit("htmlFlowData"), B(O)) : (e.consume(O), G)
    }

    function B(O) {
        return e.check(K5, U, ae)(O)
    }

    function U(O) {
        return e.enter("lineEnding"), e.consume(O), e.exit("lineEnding"), Z
    }

    function Z(O) {
        return O === null || xe(O) ? B(O) : (e.enter("htmlFlowData"), G(O))
    }

    function ue(O) {
        return O === 45 ? (e.consume(O), b) : G(O)
    }

    function oe(O) {
        return O === 47 ? (e.consume(O), s = "", j) : G(O)
    }

    function j(O) {
        if (O === 62) {
            const de = s.toLowerCase();
            return Hx.includes(de) ? (e.consume(O), ne) : G(O)
        }
        return Fr(O) && s.length < 8 ? (e.consume(O), s += String.fromCharCode(O), j) : G(O)
    }

    function J(O) {
        return O === 93 ? (e.consume(O), b) : G(O)
    }

    function b(O) {
        return O === 62 ? (e.consume(O), ne) : O === 45 && i === 2 ? (e.consume(O), b) : G(O)
    }

    function ne(O) {
        return O === null || xe(O) ? (e.exit("htmlFlowData"), ae(O)) : (e.consume(O), ne)
    }

    function ae(O) {
        return e.exit("htmlFlow"), t(O)
    }
}

function X5(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return xe(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), l) : n(s)
    }

    function l(s) {
        return r.parser.lazy[r.now().line] ? n(s) : t(s)
    }
}

function Z5(e, t, n) {
    return r;

    function r(i) {
        return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Xf, t, n)
    }
}
const J5 = {
    name: "htmlText",
    tokenize: e$
};

function e$(e, t, n) {
    const r = this;
    let i, l, s;
    return a;

    function a(b) {
        return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(b), f
    }

    function f(b) {
        return b === 33 ? (e.consume(b), d) : b === 47 ? (e.consume(b), N) : b === 63 ? (e.consume(b), k) : Fr(b) ? (e.consume(b), z) : n(b)
    }

    function d(b) {
        return b === 45 ? (e.consume(b), p) : b === 91 ? (e.consume(b), l = 0, E) : Fr(b) ? (e.consume(b), x) : n(b)
    }

    function p(b) {
        return b === 45 ? (e.consume(b), m) : n(b)
    }

    function g(b) {
        return b === null ? n(b) : b === 45 ? (e.consume(b), v) : xe(b) ? (s = g, oe(b)) : (e.consume(b), g)
    }

    function v(b) {
        return b === 45 ? (e.consume(b), m) : g(b)
    }

    function m(b) {
        return b === 62 ? ue(b) : b === 45 ? v(b) : g(b)
    }

    function E(b) {
        const ne = "CDATA[";
        return b === ne.charCodeAt(l++) ? (e.consume(b), l === ne.length ? S : E) : n(b)
    }

    function S(b) {
        return b === null ? n(b) : b === 93 ? (e.consume(b), A) : xe(b) ? (s = S, oe(b)) : (e.consume(b), S)
    }

    function A(b) {
        return b === 93 ? (e.consume(b), y) : S(b)
    }

    function y(b) {
        return b === 62 ? ue(b) : b === 93 ? (e.consume(b), y) : S(b)
    }

    function x(b) {
        return b === null || b === 62 ? ue(b) : xe(b) ? (s = x, oe(b)) : (e.consume(b), x)
    }

    function k(b) {
        return b === null ? n(b) : b === 63 ? (e.consume(b), P) : xe(b) ? (s = k, oe(b)) : (e.consume(b), k)
    }

    function P(b) {
        return b === 62 ? ue(b) : k(b)
    }

    function N(b) {
        return Fr(b) ? (e.consume(b), T) : n(b)
    }

    function T(b) {
        return b === 45 || Ln(b) ? (e.consume(b), T) : F(b)
    }

    function F(b) {
        return xe(b) ? (s = F, oe(b)) : We(b) ? (e.consume(b), F) : ue(b)
    }

    function z(b) {
        return b === 45 || Ln(b) ? (e.consume(b), z) : b === 47 || b === 62 || Sn(b) ? q(b) : n(b)
    }

    function q(b) {
        return b === 47 ? (e.consume(b), ue) : b === 58 || b === 95 || Fr(b) ? (e.consume(b), Q) : xe(b) ? (s = q, oe(b)) : We(b) ? (e.consume(b), q) : ue(b)
    }

    function Q(b) {
        return b === 45 || b === 46 || b === 58 || b === 95 || Ln(b) ? (e.consume(b), Q) : $(b)
    }

    function $(b) {
        return b === 61 ? (e.consume(b), G) : xe(b) ? (s = $, oe(b)) : We(b) ? (e.consume(b), $) : q(b)
    }

    function G(b) {
        return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), i = b, B) : xe(b) ? (s = G, oe(b)) : We(b) ? (e.consume(b), G) : (e.consume(b), U)
    }

    function B(b) {
        return b === i ? (e.consume(b), i = void 0, Z) : b === null ? n(b) : xe(b) ? (s = B, oe(b)) : (e.consume(b), B)
    }

    function U(b) {
        return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? n(b) : b === 47 || b === 62 || Sn(b) ? q(b) : (e.consume(b), U)
    }

    function Z(b) {
        return b === 47 || b === 62 || Sn(b) ? q(b) : n(b)
    }

    function ue(b) {
        return b === 62 ? (e.consume(b), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(b)
    }

    function oe(b) {
        return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), j
    }

    function j(b) {
        return We(b) ? rt(e, J, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : J(b)
    }

    function J(b) {
        return e.enter("htmlTextData"), s(b)
    }
}
const Ov = {
        name: "labelEnd",
        tokenize: l$,
        resolveTo: o$,
        resolveAll: i$
    },
    t$ = {
        tokenize: u$
    },
    n$ = {
        tokenize: s$
    },
    r$ = {
        tokenize: a$
    };

function i$(e) {
    let t = -1;
    for (; ++t < e.length;) {
        const n = e[t][1];
        (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++)
    }
    return e
}

function o$(e, t) {
    let n = e.length,
        r = 0,
        i, l, s, a;
    for (; n--;)
        if (i = e[n][1], l) {
            if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
            e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0)
        } else if (s) {
        if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (l = n, i.type !== "labelLink")) {
            r = 2;
            break
        }
    } else i.type === "labelEnd" && (s = n);
    const f = {
            type: e[l][1].type === "labelLink" ? "link" : "image",
            start: Object.assign({}, e[l][1].start),
            end: Object.assign({}, e[e.length - 1][1].end)
        },
        d = {
            type: "label",
            start: Object.assign({}, e[l][1].start),
            end: Object.assign({}, e[s][1].end)
        },
        p = {
            type: "labelText",
            start: Object.assign({}, e[l + r + 2][1].end),
            end: Object.assign({}, e[s - 2][1].start)
        };
    return a = [
        ["enter", f, t],
        ["enter", d, t]
    ], a = ir(a, e.slice(l + 1, l + r + 3)), a = ir(a, [
        ["enter", p, t]
    ]), a = ir(a, _v(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, s - 3), t)), a = ir(a, [
        ["exit", p, t], e[s - 2], e[s - 1],
        ["exit", d, t]
    ]), a = ir(a, e.slice(s + 1)), a = ir(a, [
        ["exit", f, t]
    ]), jr(e, l, e.length, a), e
}

function l$(e, t, n) {
    const r = this;
    let i = r.events.length,
        l, s;
    for (; i--;)
        if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
            l = r.events[i][1];
            break
        } return a;

    function a(v) {
        return l ? l._inactive ? g(v) : (s = r.parser.defined.includes(Ll(r.sliceSerialize({
            start: l.end,
            end: r.now()
        }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(v), e.exit("labelMarker"), e.exit("labelEnd"), f) : n(v)
    }

    function f(v) {
        return v === 40 ? e.attempt(t$, p, s ? p : g)(v) : v === 91 ? e.attempt(n$, p, s ? d : g)(v) : s ? p(v) : g(v)
    }

    function d(v) {
        return e.attempt(r$, p, g)(v)
    }

    function p(v) {
        return t(v)
    }

    function g(v) {
        return l._balanced = !0, n(v)
    }
}

function u$(e, t, n) {
    return r;

    function r(g) {
        return e.enter("resource"), e.enter("resourceMarker"), e.consume(g), e.exit("resourceMarker"), i
    }

    function i(g) {
        return Sn(g) ? ns(e, l)(g) : l(g)
    }

    function l(g) {
        return g === 41 ? p(g) : v_(e, s, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(g)
    }

    function s(g) {
        return Sn(g) ? ns(e, f)(g) : p(g)
    }

    function a(g) {
        return n(g)
    }

    function f(g) {
        return g === 34 || g === 39 || g === 40 ? w_(e, d, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(g) : p(g)
    }

    function d(g) {
        return Sn(g) ? ns(e, p)(g) : p(g)
    }

    function p(g) {
        return g === 41 ? (e.enter("resourceMarker"), e.consume(g), e.exit("resourceMarker"), e.exit("resource"), t) : n(g)
    }
}

function s$(e, t, n) {
    const r = this;
    return i;

    function i(a) {
        return y_.call(r, e, l, s, "reference", "referenceMarker", "referenceString")(a)
    }

    function l(a) {
        return r.parser.defined.includes(Ll(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a)
    }

    function s(a) {
        return n(a)
    }
}

function a$(e, t, n) {
    return r;

    function r(l) {
        return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i
    }

    function i(l) {
        return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), t) : n(l)
    }
}
const c$ = {
    name: "labelStartImage",
    tokenize: f$,
    resolveAll: Ov.resolveAll
};

function f$(e, t, n) {
    const r = this;
    return i;

    function i(a) {
        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), l
    }

    function l(a) {
        return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), s) : n(a)
    }

    function s(a) {
        return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a)
    }
}
const d$ = {
    name: "labelStartLink",
    tokenize: p$,
    resolveAll: Ov.resolveAll
};

function p$(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelLink"), l
    }

    function l(s) {
        return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s)
    }
}
const ph = {
    name: "lineEnding",
    tokenize: h$
};

function h$(e, t) {
    return n;

    function n(r) {
        return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), rt(e, t, "linePrefix")
    }
}
const fc = {
    name: "thematicBreak",
    tokenize: g$
};

function g$(e, t, n) {
    let r = 0,
        i;
    return l;

    function l(d) {
        return e.enter("thematicBreak"), s(d)
    }

    function s(d) {
        return i = d, a(d)
    }

    function a(d) {
        return d === i ? (e.enter("thematicBreakSequence"), f(d)) : r >= 3 && (d === null || xe(d)) ? (e.exit("thematicBreak"), t(d)) : n(d)
    }

    function f(d) {
        return d === i ? (e.consume(d), r++, f) : (e.exit("thematicBreakSequence"), We(d) ? rt(e, a, "whitespace")(d) : a(d))
    }
}
const dn = {
        name: "list",
        tokenize: y$,
        continuation: {
            tokenize: w$
        },
        exit: S$
    },
    m$ = {
        tokenize: E$,
        partial: !0
    },
    v$ = {
        tokenize: x$,
        partial: !0
    };

function y$(e, t, n) {
    const r = this,
        i = r.events[r.events.length - 1];
    let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
        s = 0;
    return a;

    function a(m) {
        const E = r.containerState.type || (m === 42 || m === 43 || m === 45 ? "listUnordered" : "listOrdered");
        if (E === "listUnordered" ? !r.containerState.marker || m === r.containerState.marker : Rg(m)) {
            if (r.containerState.type || (r.containerState.type = E, e.enter(E, {
                    _container: !0
                })), E === "listUnordered") return e.enter("listItemPrefix"), m === 42 || m === 45 ? e.check(fc, n, d)(m) : d(m);
            if (!r.interrupt || m === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), f(m)
        }
        return n(m)
    }

    function f(m) {
        return Rg(m) && ++s < 10 ? (e.consume(m), f) : (!r.interrupt || s < 2) && (r.containerState.marker ? m === r.containerState.marker : m === 41 || m === 46) ? (e.exit("listItemValue"), d(m)) : n(m)
    }

    function d(m) {
        return e.enter("listItemMarker"), e.consume(m), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || m, e.check(Xf, r.interrupt ? n : p, e.attempt(m$, v, g))
    }

    function p(m) {
        return r.containerState.initialBlankLine = !0, l++, v(m)
    }

    function g(m) {
        return We(m) ? (e.enter("listItemPrefixWhitespace"), e.consume(m), e.exit("listItemPrefixWhitespace"), v) : n(m)
    }

    function v(m) {
        return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(m)
    }
}

function w$(e, t, n) {
    const r = this;
    return r.containerState._closeFlow = void 0, e.check(Xf, i, l);

    function i(a) {
        return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, rt(e, t, "listItemIndent", r.containerState.size + 1)(a)
    }

    function l(a) {
        return r.containerState.furtherBlankLines || !We(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, s(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(v$, t, s)(a))
    }

    function s(a) {
        return r.containerState._closeFlow = !0, r.interrupt = void 0, rt(e, e.attempt(dn, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a)
    }
}

function x$(e, t, n) {
    const r = this;
    return rt(e, i, "listItemIndent", r.containerState.size + 1);

    function i(l) {
        const s = r.events[r.events.length - 1];
        return s && s[1].type === "listItemIndent" && s[2].sliceSerialize(s[1], !0).length === r.containerState.size ? t(l) : n(l)
    }
}

function S$(e) {
    e.exit(this.containerState.type)
}

function E$(e, t, n) {
    const r = this;
    return rt(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);

    function i(l) {
        const s = r.events[r.events.length - 1];
        return !We(l) && s && s[1].type === "listItemPrefixWhitespace" ? t(l) : n(l)
    }
}
const jx = {
    name: "setextUnderline",
    tokenize: k$,
    resolveTo: C$
};

function C$(e, t) {
    let n = e.length,
        r, i, l;
    for (; n--;)
        if (e[n][0] === "enter") {
            if (e[n][1].type === "content") {
                r = n;
                break
            }
            e[n][1].type === "paragraph" && (i = n)
        } else e[n][1].type === "content" && e.splice(n, 1), !l && e[n][1].type === "definition" && (l = n);
    const s = {
        type: "setextHeading",
        start: Object.assign({}, e[i][1].start),
        end: Object.assign({}, e[e.length - 1][1].end)
    };
    return e[i][1].type = "setextHeadingText", l ? (e.splice(i, 0, ["enter", s, t]), e.splice(l + 1, 0, ["exit", e[r][1], t]), e[r][1].end = Object.assign({}, e[l][1].end)) : e[r][1] = s, e.push(["exit", s, t]), e
}

function k$(e, t, n) {
    const r = this;
    let i;
    return l;

    function l(d) {
        let p = r.events.length,
            g;
        for (; p--;)
            if (r.events[p][1].type !== "lineEnding" && r.events[p][1].type !== "linePrefix" && r.events[p][1].type !== "content") {
                g = r.events[p][1].type === "paragraph";
                break
            } return !r.parser.lazy[r.now().line] && (r.interrupt || g) ? (e.enter("setextHeadingLine"), i = d, s(d)) : n(d)
    }

    function s(d) {
        return e.enter("setextHeadingLineSequence"), a(d)
    }

    function a(d) {
        return d === i ? (e.consume(d), a) : (e.exit("setextHeadingLineSequence"), We(d) ? rt(e, f, "lineSuffix")(d) : f(d))
    }

    function f(d) {
        return d === null || xe(d) ? (e.exit("setextHeadingLine"), t(d)) : n(d)
    }
}
const _$ = {
    tokenize: b$
};

function b$(e) {
    const t = this,
        n = e.attempt(Xf, r, e.attempt(this.parser.constructs.flowInitial, i, rt(e, e.attempt(this.parser.constructs.flow, i, e.attempt(P5, i)), "linePrefix")));
    return n;

    function r(l) {
        if (l === null) {
            e.consume(l);
            return
        }
        return e.enter("lineEndingBlank"), e.consume(l), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
    }

    function i(l) {
        if (l === null) {
            e.consume(l);
            return
        }
        return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), t.currentConstruct = void 0, n
    }
}
const O$ = {
        resolveAll: S_()
    },
    T$ = x_("string"),
    I$ = x_("text");

function x_(e) {
    return {
        tokenize: t,
        resolveAll: S_(e === "text" ? R$ : void 0)
    };

    function t(n) {
        const r = this,
            i = this.parser.constructs[e],
            l = n.attempt(i, s, a);
        return s;

        function s(p) {
            return d(p) ? l(p) : a(p)
        }

        function a(p) {
            if (p === null) {
                n.consume(p);
                return
            }
            return n.enter("data"), n.consume(p), f
        }

        function f(p) {
            return d(p) ? (n.exit("data"), l(p)) : (n.consume(p), f)
        }

        function d(p) {
            if (p === null) return !0;
            const g = i[p];
            let v = -1;
            if (g)
                for (; ++v < g.length;) {
                    const m = g[v];
                    if (!m.previous || m.previous.call(r, r.previous)) return !0
                }
            return !1
        }
    }
}

function S_(e) {
    return t;

    function t(n, r) {
        let i = -1,
            l;
        for (; ++i <= n.length;) l === void 0 ? n[i] && n[i][1].type === "data" && (l = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== l + 2 && (n[l][1].end = n[i - 1][1].end, n.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
        return e ? e(n, r) : n
    }
}

function R$(e, t) {
    let n = 0;
    for (; ++n <= e.length;)
        if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
            const r = e[n - 1][1],
                i = t.sliceStream(r);
            let l = i.length,
                s = -1,
                a = 0,
                f;
            for (; l--;) {
                const d = i[l];
                if (typeof d == "string") {
                    for (s = d.length; d.charCodeAt(s - 1) === 32;) a++, s--;
                    if (s) break;
                    s = -1
                } else if (d === -2) f = !0, a++;
                else if (d !== -1) {
                    l++;
                    break
                }
            }
            if (a) {
                const d = {
                    type: n === e.length || f || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        line: r.end.line,
                        column: r.end.column - a,
                        offset: r.end.offset - a,
                        _index: r.start._index + l,
                        _bufferIndex: l ? s : r.start._bufferIndex + s
                    },
                    end: Object.assign({}, r.end)
                };
                r.end = Object.assign({}, d.start), r.start.offset === r.end.offset ? Object.assign(r, d) : (e.splice(n, 0, ["enter", d, t], ["exit", d, t]), n += 2)
            }
            n++
        } return e
}

function P$(e, t, n) {
    let r = Object.assign(n ? Object.assign({}, n) : {
        line: 1,
        column: 1,
        offset: 0
    }, {
        _index: 0,
        _bufferIndex: -1
    });
    const i = {},
        l = [];
    let s = [],
        a = [];
    const f = {
            consume: x,
            enter: k,
            exit: P,
            attempt: F(N),
            check: F(T),
            interrupt: F(T, {
                interrupt: !0
            })
        },
        d = {
            previous: null,
            code: null,
            containerState: {},
            events: [],
            parser: e,
            sliceStream: m,
            sliceSerialize: v,
            now: E,
            defineSkip: S,
            write: g
        };
    let p = t.tokenize.call(d, f);
    return t.resolveAll && l.push(t), d;

    function g($) {
        return s = ir(s, $), A(), s[s.length - 1] !== null ? [] : (z(t, 0), d.events = _v(l, d.events, d), d.events)
    }

    function v($, G) {
        return D$(m($), G)
    }

    function m($) {
        return A$(s, $)
    }

    function E() {
        const {
            line: $,
            column: G,
            offset: B,
            _index: U,
            _bufferIndex: Z
        } = r;
        return {
            line: $,
            column: G,
            offset: B,
            _index: U,
            _bufferIndex: Z
        }
    }

    function S($) {
        i[$.line] = $.column, Q()
    }

    function A() {
        let $;
        for (; r._index < s.length;) {
            const G = s[r._index];
            if (typeof G == "string")
                for ($ = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === $ && r._bufferIndex < G.length;) y(G.charCodeAt(r._bufferIndex));
            else y(G)
        }
    }

    function y($) {
        p = p($)
    }

    function x($) {
        xe($) ? (r.line++, r.column = 1, r.offset += $ === -3 ? 2 : 1, Q()) : $ !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === s[r._index].length && (r._bufferIndex = -1, r._index++)), d.previous = $
    }

    function k($, G) {
        const B = G || {};
        return B.type = $, B.start = E(), d.events.push(["enter", B, d]), a.push(B), B
    }

    function P($) {
        const G = a.pop();
        return G.end = E(), d.events.push(["exit", G, d]), G
    }

    function N($, G) {
        z($, G.from)
    }

    function T($, G) {
        G.restore()
    }

    function F($, G) {
        return B;

        function B(U, Z, ue) {
            let oe, j, J, b;
            return Array.isArray(U) ? ae(U) : "tokenize" in U ? ae([U]) : ne(U);

            function ne(me) {
                return Ae;

                function Ae(Se) {
                    const Le = Se !== null && me[Se],
                        Te = Se !== null && me.null,
                        Be = [...Array.isArray(Le) ? Le : Le ? [Le] : [], ...Array.isArray(Te) ? Te : Te ? [Te] : []];
                    return ae(Be)(Se)
                }
            }

            function ae(me) {
                return oe = me, j = 0, me.length === 0 ? ue : O(me[j])
            }

            function O(me) {
                return Ae;

                function Ae(Se) {
                    return b = q(), J = me, me.partial || (d.currentConstruct = me), me.name && d.parser.constructs.disable.null.includes(me.name) ? Re() : me.tokenize.call(G ? Object.assign(Object.create(d), G) : d, f, de, Re)(Se)
                }
            }

            function de(me) {
                return $(J, b), Z
            }

            function Re(me) {
                return b.restore(), ++j < oe.length ? O(oe[j]) : ue
            }
        }
    }

    function z($, G) {
        $.resolveAll && !l.includes($) && l.push($), $.resolve && jr(d.events, G, d.events.length - G, $.resolve(d.events.slice(G), d)), $.resolveTo && (d.events = $.resolveTo(d.events, d))
    }

    function q() {
        const $ = E(),
            G = d.previous,
            B = d.currentConstruct,
            U = d.events.length,
            Z = Array.from(a);
        return {
            restore: ue,
            from: U
        };

        function ue() {
            r = $, d.previous = G, d.currentConstruct = B, d.events.length = U, a = Z, Q()
        }
    }

    function Q() {
        r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
    }
}

function A$(e, t) {
    const n = t.start._index,
        r = t.start._bufferIndex,
        i = t.end._index,
        l = t.end._bufferIndex;
    let s;
    if (n === i) s = [e[n].slice(r, l)];
    else {
        if (s = e.slice(n, i), r > -1) {
            const a = s[0];
            typeof a == "string" ? s[0] = a.slice(r) : s.shift()
        }
        l > 0 && s.push(e[i].slice(0, l))
    }
    return s
}

function D$(e, t) {
    let n = -1;
    const r = [];
    let i;
    for (; ++n < e.length;) {
        const l = e[n];
        let s;
        if (typeof l == "string") s = l;
        else switch (l) {
            case -5: {
                s = "\r";
                break
            }
            case -4: {
                s = `
`;
                break
            }
            case -3: {
                s = `\r
`;
                break
            }
            case -2: {
                s = t ? " " : "	";
                break
            }
            case -1: {
                if (!t && i) continue;
                s = " ";
                break
            }
            default:
                s = String.fromCharCode(l)
        }
        i = l === -2, r.push(s)
    }
    return r.join("")
}
const N$ = {
        42: dn,
        43: dn,
        45: dn,
        48: dn,
        49: dn,
        50: dn,
        51: dn,
        52: dn,
        53: dn,
        54: dn,
        55: dn,
        56: dn,
        57: dn,
        62: p_
    },
    M$ = {
        91: L5
    },
    L$ = {
        [-2]: dh,
        [-1]: dh,
        32: dh
    },
    F$ = {
        35: H5,
        42: fc,
        45: [jx, fc],
        60: q5,
        61: jx,
        95: fc,
        96: Ux,
        126: Ux
    },
    z$ = {
        38: g_,
        92: h_
    },
    $$ = {
        [-5]: ph,
        [-4]: ph,
        [-3]: ph,
        33: c$,
        38: g_,
        42: Pg,
        60: [p5, J5],
        91: d$,
        92: [B5, h_],
        93: Ov,
        95: Pg,
        96: b5
    },
    B$ = {
        null: [Pg, O$]
    },
    U$ = {
        null: [42, 95]
    },
    H$ = {
        null: []
    },
    j$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        attentionMarkers: U$,
        contentInitial: M$,
        disable: H$,
        document: N$,
        flow: F$,
        flowInitial: L$,
        insideSpan: B$,
        string: z$,
        text: $$
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function W$(e) {
    const n = X6([j$, ...(e || {}).extensions || []]),
        r = {
            defined: [],
            lazy: {},
            constructs: n,
            content: i(l5),
            document: i(s5),
            flow: i(_$),
            string: i(T$),
            text: i(I$)
        };
    return r;

    function i(l) {
        return s;

        function s(a) {
            return P$(r, l, a)
        }
    }
}
const Wx = /[\0\t\n\r]/g;

function V$() {
    let e = 1,
        t = "",
        n = !0,
        r;
    return i;

    function i(l, s, a) {
        const f = [];
        let d, p, g, v, m;
        for (l = t + l.toString(s), g = 0, t = "", n && (l.charCodeAt(0) === 65279 && g++, n = void 0); g < l.length;) {
            if (Wx.lastIndex = g, d = Wx.exec(l), v = d && d.index !== void 0 ? d.index : l.length, m = l.charCodeAt(v), !d) {
                t = l.slice(g);
                break
            }
            if (m === 10 && g === v && r) f.push(-3), r = void 0;
            else switch (r && (f.push(-5), r = void 0), g < v && (f.push(l.slice(g, v)), e += v - g), m) {
                case 0: {
                    f.push(65533), e++;
                    break
                }
                case 9: {
                    for (p = Math.ceil(e / 4) * 4, f.push(-2); e++ < p;) f.push(-1);
                    break
                }
                case 10: {
                    f.push(-4), e = 1;
                    break
                }
                default:
                    r = !0, e = 1
            }
            g = v + 1
        }
        return a && (r && f.push(-5), t && f.push(t), f.push(null)), f
    }
}

function q$(e) {
    for (; !m_(e););
    return e
}

function E_(e, t) {
    const n = Number.parseInt(e, t);
    return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "�" : String.fromCharCode(n)
}
const G$ = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

function K$(e) {
    return e.replace(G$, Q$)
}

function Q$(e, t, n) {
    if (t) return t;
    if (n.charCodeAt(0) === 35) {
        const i = n.charCodeAt(1),
            l = i === 120 || i === 88;
        return E_(n.slice(l ? 2 : 1), l ? 16 : 10)
    }
    return bv(n) || e
}
const C_ = {}.hasOwnProperty,
    Y$ = function(e, t, n) {
        return typeof t != "string" && (n = t, t = void 0), X$(n)(q$(W$(n).document().write(V$()(e, t, !0))))
    };

function X$(e) {
    const t = {
        transforms: [],
        canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
        enter: {
            autolink: a(kn),
            autolinkProtocol: $,
            autolinkEmail: $,
            atxHeading: a(he),
            blockQuote: a(Be),
            characterEscape: $,
            characterReference: $,
            codeFenced: a(Fe),
            codeFencedFenceInfo: f,
            codeFencedFenceMeta: f,
            codeIndented: a(Fe, f),
            codeText: a(Ge, f),
            codeTextData: $,
            data: $,
            codeFlowValue: $,
            definition: a(yt),
            definitionDestinationString: f,
            definitionLabelString: f,
            definitionTitleString: f,
            emphasis: a(Wn),
            hardBreakEscape: a(at),
            hardBreakTrailing: a(at),
            htmlFlow: a(Mt, f),
            htmlFlowData: $,
            htmlText: a(Mt, f),
            htmlTextData: $,
            image: a(Cn),
            label: f,
            link: a(kn),
            listItem: a(Or),
            listItemValue: E,
            listOrdered: a(Ht, m),
            listUnordered: a(Ht),
            paragraph: a(Wr),
            reference: Re,
            referenceString: f,
            resourceDestinationString: f,
            resourceTitleString: f,
            setextHeading: a(he),
            strong: a(Go),
            thematicBreak: a(Vn)
        },
        exit: {
            atxHeading: p(),
            atxHeadingSequence: F,
            autolink: p(),
            autolinkEmail: Te,
            autolinkProtocol: Le,
            blockQuote: p(),
            characterEscapeValue: G,
            characterReferenceMarkerHexadecimal: Ae,
            characterReferenceMarkerNumeric: Ae,
            characterReferenceValue: Se,
            codeFenced: p(x),
            codeFencedFence: y,
            codeFencedFenceInfo: S,
            codeFencedFenceMeta: A,
            codeFlowValue: G,
            codeIndented: p(k),
            codeText: p(oe),
            codeTextData: G,
            data: G,
            definition: p(),
            definitionDestinationString: T,
            definitionLabelString: P,
            definitionTitleString: N,
            emphasis: p(),
            hardBreakEscape: p(U),
            hardBreakTrailing: p(U),
            htmlFlow: p(Z),
            htmlFlowData: G,
            htmlText: p(ue),
            htmlTextData: G,
            image: p(J),
            label: ne,
            labelText: b,
            lineEnding: B,
            link: p(j),
            listItem: p(),
            listOrdered: p(),
            listUnordered: p(),
            paragraph: p(),
            referenceString: me,
            resourceDestinationString: ae,
            resourceTitleString: O,
            resource: de,
            setextHeading: p(Q),
            setextHeadingLineSequence: q,
            setextHeadingText: z,
            strong: p(),
            thematicBreak: p()
        }
    };
    k_(t, (e || {}).mdastExtensions || []);
    const n = {};
    return r;

    function r(V) {
        let re = {
            type: "root",
            children: []
        };
        const pe = {
                stack: [re],
                tokenStack: [],
                config: t,
                enter: d,
                exit: g,
                buffer: f,
                resume: v,
                setData: l,
                getData: s
            },
            Ue = [];
        let He = -1;
        for (; ++He < V.length;)
            if (V[He][1].type === "listOrdered" || V[He][1].type === "listUnordered")
                if (V[He][0] === "enter") Ue.push(He);
                else {
                    const Zt = Ue.pop();
                    He = i(V, Zt, He)
                } for (He = -1; ++He < V.length;) {
            const Zt = t[V[He][0]];
            C_.call(Zt, V[He][1].type) && Zt[V[He][1].type].call(Object.assign({
                sliceSerialize: V[He][2].sliceSerialize
            }, pe), V[He][1])
        }
        if (pe.tokenStack.length > 0) {
            const Zt = pe.tokenStack[pe.tokenStack.length - 1];
            (Zt[1] || Vx).call(pe, void 0, Zt[0])
        }
        for (re.position = {
                start: Ii(V.length > 0 ? V[0][1].start : {
                    line: 1,
                    column: 1,
                    offset: 0
                }),
                end: Ii(V.length > 0 ? V[V.length - 2][1].end : {
                    line: 1,
                    column: 1,
                    offset: 0
                })
            }, He = -1; ++He < t.transforms.length;) re = t.transforms[He](re) || re;
        return re
    }

    function i(V, re, pe) {
        let Ue = re - 1,
            He = -1,
            Zt = !1,
            qn, _n, Vr, qr;
        for (; ++Ue <= pe;) {
            const it = V[Ue];
            if (it[1].type === "listUnordered" || it[1].type === "listOrdered" || it[1].type === "blockQuote" ? (it[0] === "enter" ? He++ : He--, qr = void 0) : it[1].type === "lineEndingBlank" ? it[0] === "enter" && (qn && !qr && !He && !Vr && (Vr = Ue), qr = void 0) : it[1].type === "linePrefix" || it[1].type === "listItemValue" || it[1].type === "listItemMarker" || it[1].type === "listItemPrefix" || it[1].type === "listItemPrefixWhitespace" || (qr = void 0), !He && it[0] === "enter" && it[1].type === "listItemPrefix" || He === -1 && it[0] === "exit" && (it[1].type === "listUnordered" || it[1].type === "listOrdered")) {
                if (qn) {
                    let uu = Ue;
                    for (_n = void 0; uu--;) {
                        const pr = V[uu];
                        if (pr[1].type === "lineEnding" || pr[1].type === "lineEndingBlank") {
                            if (pr[0] === "exit") continue;
                            _n && (V[_n][1].type = "lineEndingBlank", Zt = !0), pr[1].type = "lineEnding", _n = uu
                        } else if (!(pr[1].type === "linePrefix" || pr[1].type === "blockQuotePrefix" || pr[1].type === "blockQuotePrefixWhitespace" || pr[1].type === "blockQuoteMarker" || pr[1].type === "listItemIndent")) break
                    }
                    Vr && (!_n || Vr < _n) && (qn._spread = !0), qn.end = Object.assign({}, _n ? V[_n][1].start : it[1].end), V.splice(_n || Ue, 0, ["exit", qn, it[2]]), Ue++, pe++
                }
                it[1].type === "listItemPrefix" && (qn = {
                    type: "listItem",
                    _spread: !1,
                    start: Object.assign({}, it[1].start),
                    end: void 0
                }, V.splice(Ue, 0, ["enter", qn, it[2]]), Ue++, pe++, Vr = void 0, qr = !0)
            }
        }
        return V[re][1]._spread = Zt, pe
    }

    function l(V, re) {
        n[V] = re
    }

    function s(V) {
        return n[V]
    }

    function a(V, re) {
        return pe;

        function pe(Ue) {
            d.call(this, V(Ue), Ue), re && re.call(this, Ue)
        }
    }

    function f() {
        this.stack.push({
            type: "fragment",
            children: []
        })
    }

    function d(V, re, pe) {
        return this.stack[this.stack.length - 1].children.push(V), this.stack.push(V), this.tokenStack.push([re, pe]), V.position = {
            start: Ii(re.start)
        }, V
    }

    function p(V) {
        return re;

        function re(pe) {
            V && V.call(this, pe), g.call(this, pe)
        }
    }

    function g(V, re) {
        const pe = this.stack.pop(),
            Ue = this.tokenStack.pop();
        if (Ue) Ue[0].type !== V.type && (re ? re.call(this, V, Ue[0]) : (Ue[1] || Vx).call(this, V, Ue[0]));
        else throw new Error("Cannot close `" + V.type + "` (" + ts({
            start: V.start,
            end: V.end
        }) + "): it’s not open");
        return pe.position.end = Ii(V.end), pe
    }

    function v() {
        return Q6(this.stack.pop())
    }

    function m() {
        l("expectingFirstListItemValue", !0)
    }

    function E(V) {
        if (s("expectingFirstListItemValue")) {
            const re = this.stack[this.stack.length - 2];
            re.start = Number.parseInt(this.sliceSerialize(V), 10), l("expectingFirstListItemValue")
        }
    }

    function S() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.lang = V
    }

    function A() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.meta = V
    }

    function y() {
        s("flowCodeInside") || (this.buffer(), l("flowCodeInside", !0))
    }

    function x() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.value = V.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), l("flowCodeInside")
    }

    function k() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.value = V.replace(/(\r?\n|\r)$/g, "")
    }

    function P(V) {
        const re = this.resume(),
            pe = this.stack[this.stack.length - 1];
        pe.label = re, pe.identifier = Ll(this.sliceSerialize(V)).toLowerCase()
    }

    function N() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.title = V
    }

    function T() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.url = V
    }

    function F(V) {
        const re = this.stack[this.stack.length - 1];
        if (!re.depth) {
            const pe = this.sliceSerialize(V).length;
            re.depth = pe
        }
    }

    function z() {
        l("setextHeadingSlurpLineEnding", !0)
    }

    function q(V) {
        const re = this.stack[this.stack.length - 1];
        re.depth = this.sliceSerialize(V).charCodeAt(0) === 61 ? 1 : 2
    }

    function Q() {
        l("setextHeadingSlurpLineEnding")
    }

    function $(V) {
        const re = this.stack[this.stack.length - 1];
        let pe = re.children[re.children.length - 1];
        (!pe || pe.type !== "text") && (pe = Tr(), pe.position = {
            start: Ii(V.start)
        }, re.children.push(pe)), this.stack.push(pe)
    }

    function G(V) {
        const re = this.stack.pop();
        re.value += this.sliceSerialize(V), re.position.end = Ii(V.end)
    }

    function B(V) {
        const re = this.stack[this.stack.length - 1];
        if (s("atHardBreak")) {
            const pe = re.children[re.children.length - 1];
            pe.position.end = Ii(V.end), l("atHardBreak");
            return
        }!s("setextHeadingSlurpLineEnding") && t.canContainEols.includes(re.type) && ($.call(this, V), G.call(this, V))
    }

    function U() {
        l("atHardBreak", !0)
    }

    function Z() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.value = V
    }

    function ue() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.value = V
    }

    function oe() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.value = V
    }

    function j() {
        const V = this.stack[this.stack.length - 1];
        if (s("inReference")) {
            const re = s("referenceType") || "shortcut";
            V.type += "Reference", V.referenceType = re, delete V.url, delete V.title
        } else delete V.identifier, delete V.label;
        l("referenceType")
    }

    function J() {
        const V = this.stack[this.stack.length - 1];
        if (s("inReference")) {
            const re = s("referenceType") || "shortcut";
            V.type += "Reference", V.referenceType = re, delete V.url, delete V.title
        } else delete V.identifier, delete V.label;
        l("referenceType")
    }

    function b(V) {
        const re = this.sliceSerialize(V),
            pe = this.stack[this.stack.length - 2];
        pe.label = K$(re), pe.identifier = Ll(re).toLowerCase()
    }

    function ne() {
        const V = this.stack[this.stack.length - 1],
            re = this.resume(),
            pe = this.stack[this.stack.length - 1];
        if (l("inReference", !0), pe.type === "link") {
            const Ue = V.children;
            pe.children = Ue
        } else pe.alt = re
    }

    function ae() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.url = V
    }

    function O() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.title = V
    }

    function de() {
        l("inReference")
    }

    function Re() {
        l("referenceType", "collapsed")
    }

    function me(V) {
        const re = this.resume(),
            pe = this.stack[this.stack.length - 1];
        pe.label = re, pe.identifier = Ll(this.sliceSerialize(V)).toLowerCase(), l("referenceType", "full")
    }

    function Ae(V) {
        l("characterReferenceType", V.type)
    }

    function Se(V) {
        const re = this.sliceSerialize(V),
            pe = s("characterReferenceType");
        let Ue;
        pe ? (Ue = E_(re, pe === "characterReferenceMarkerNumeric" ? 10 : 16), l("characterReferenceType")) : Ue = bv(re);
        const He = this.stack.pop();
        He.value += Ue, He.position.end = Ii(V.end)
    }

    function Le(V) {
        G.call(this, V);
        const re = this.stack[this.stack.length - 1];
        re.url = this.sliceSerialize(V)
    }

    function Te(V) {
        G.call(this, V);
        const re = this.stack[this.stack.length - 1];
        re.url = "mailto:" + this.sliceSerialize(V)
    }

    function Be() {
        return {
            type: "blockquote",
            children: []
        }
    }

    function Fe() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        }
    }

    function Ge() {
        return {
            type: "inlineCode",
            value: ""
        }
    }

    function yt() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        }
    }

    function Wn() {
        return {
            type: "emphasis",
            children: []
        }
    }

    function he() {
        return {
            type: "heading",
            depth: void 0,
            children: []
        }
    }

    function at() {
        return {
            type: "break"
        }
    }

    function Mt() {
        return {
            type: "html",
            value: ""
        }
    }

    function Cn() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        }
    }

    function kn() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        }
    }

    function Ht(V) {
        return {
            type: "list",
            ordered: V.type === "listOrdered",
            start: null,
            spread: V._spread,
            children: []
        }
    }

    function Or(V) {
        return {
            type: "listItem",
            spread: V._spread,
            checked: null,
            children: []
        }
    }

    function Wr() {
        return {
            type: "paragraph",
            children: []
        }
    }

    function Go() {
        return {
            type: "strong",
            children: []
        }
    }

    function Tr() {
        return {
            type: "text",
            value: ""
        }
    }

    function Vn() {
        return {
            type: "thematicBreak"
        }
    }
}

function Ii(e) {
    return {
        line: e.line,
        column: e.column,
        offset: e.offset
    }
}

function k_(e, t) {
    let n = -1;
    for (; ++n < t.length;) {
        const r = t[n];
        Array.isArray(r) ? k_(e, r) : Z$(e, r)
    }
}

function Z$(e, t) {
    let n;
    for (n in t)
        if (C_.call(t, n)) {
            if (n === "canContainEols") {
                const r = t[n];
                r && e[n].push(...r)
            } else if (n === "transforms") {
                const r = t[n];
                r && e[n].push(...r)
            } else if (n === "enter" || n === "exit") {
                const r = t[n];
                r && Object.assign(e[n], r)
            }
        }
}

function Vx(e, t) {
    throw e ? new Error("Cannot close `" + e.type + "` (" + ts({
        start: e.start,
        end: e.end
    }) + "): a different token (`" + t.type + "`, " + ts({
        start: t.start,
        end: t.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + ts({
        start: t.start,
        end: t.end
    }) + ") is still open")
}

function J$(e) {
    Object.assign(this, {
        Parser: n => {
            const r = this.data("settings");
            return Y$(n, Object.assign({}, r, e, {
                extensions: this.data("micromarkExtensions") || [],
                mdastExtensions: this.data("fromMarkdownExtensions") || []
            }))
        }
    })
}

function eB(e, t) {
    const n = {
        type: "element",
        tagName: "blockquote",
        properties: {},
        children: e.wrap(e.all(t), !0)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function tB(e, t) {
    const n = {
        type: "element",
        tagName: "br",
        properties: {},
        children: []
    };
    return e.patch(t, n), [e.applyData(t, n), {
        type: "text",
        value: `
`
    }]
}

function nB(e, t) {
    const n = t.value ? t.value + `
` : "",
        r = t.lang ? t.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null,
        i = {};
    r && (i.className = ["language-" + r]);
    let l = {
        type: "element",
        tagName: "code",
        properties: i,
        children: [{
            type: "text",
            value: n
        }]
    };
    return t.meta && (l.data = {
        meta: t.meta
    }), e.patch(t, l), l = e.applyData(t, l), l = {
        type: "element",
        tagName: "pre",
        properties: {},
        children: [l]
    }, e.patch(t, l), l
}

function rB(e, t) {
    const n = {
        type: "element",
        tagName: "del",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function iB(e, t) {
    const n = {
        type: "element",
        tagName: "em",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function ou(e) {
    const t = [];
    let n = -1,
        r = 0,
        i = 0;
    for (; ++n < e.length;) {
        const l = e.charCodeAt(n);
        let s = "";
        if (l === 37 && Ln(e.charCodeAt(n + 1)) && Ln(e.charCodeAt(n + 2))) i = 2;
        else if (l < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (s = String.fromCharCode(l));
        else if (l > 55295 && l < 57344) {
            const a = e.charCodeAt(n + 1);
            l < 56320 && a > 56319 && a < 57344 ? (s = String.fromCharCode(l, a), i = 1) : s = "�"
        } else s = String.fromCharCode(l);
        s && (t.push(e.slice(r, n), encodeURIComponent(s)), r = n + i + 1, s = ""), i && (n += i, i = 0)
    }
    return t.join("") + e.slice(r)
}

function __(e, t) {
    const n = String(t.identifier).toUpperCase(),
        r = ou(n.toLowerCase()),
        i = e.footnoteOrder.indexOf(n);
    let l;
    i === -1 ? (e.footnoteOrder.push(n), e.footnoteCounts[n] = 1, l = e.footnoteOrder.length) : (e.footnoteCounts[n]++, l = i + 1);
    const s = e.footnoteCounts[n],
        a = {
            type: "element",
            tagName: "a",
            properties: {
                href: "#" + e.clobberPrefix + "fn-" + r,
                id: e.clobberPrefix + "fnref-" + r + (s > 1 ? "-" + s : ""),
                dataFootnoteRef: !0,
                ariaDescribedBy: ["footnote-label"]
            },
            children: [{
                type: "text",
                value: String(l)
            }]
        };
    e.patch(t, a);
    const f = {
        type: "element",
        tagName: "sup",
        properties: {},
        children: [a]
    };
    return e.patch(t, f), e.applyData(t, f)
}

function oB(e, t) {
    const n = e.footnoteById;
    let r = 1;
    for (; r in n;) r++;
    const i = String(r);
    return n[i] = {
        type: "footnoteDefinition",
        identifier: i,
        children: [{
            type: "paragraph",
            children: t.children
        }],
        position: t.position
    }, __(e, {
        type: "footnoteReference",
        identifier: i,
        position: t.position
    })
}

function lB(e, t) {
    const n = {
        type: "element",
        tagName: "h" + t.depth,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function uB(e, t) {
    if (e.dangerous) {
        const n = {
            type: "raw",
            value: t.value
        };
        return e.patch(t, n), e.applyData(t, n)
    }
    return null
}

function b_(e, t) {
    const n = t.referenceType;
    let r = "]";
    if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return {
        type: "text",
        value: "![" + t.alt + r
    };
    const i = e.all(t),
        l = i[0];
    l && l.type === "text" ? l.value = "[" + l.value : i.unshift({
        type: "text",
        value: "["
    });
    const s = i[i.length - 1];
    return s && s.type === "text" ? s.value += r : i.push({
        type: "text",
        value: r
    }), i
}

function sB(e, t) {
    const n = e.definition(t.identifier);
    if (!n) return b_(e, t);
    const r = {
        src: ou(n.url || ""),
        alt: t.alt
    };
    n.title !== null && n.title !== void 0 && (r.title = n.title);
    const i = {
        type: "element",
        tagName: "img",
        properties: r,
        children: []
    };
    return e.patch(t, i), e.applyData(t, i)
}

function aB(e, t) {
    const n = {
        src: ou(t.url)
    };
    t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = {
        type: "element",
        tagName: "img",
        properties: n,
        children: []
    };
    return e.patch(t, r), e.applyData(t, r)
}

function cB(e, t) {
    const n = {
        type: "text",
        value: t.value.replace(/\r?\n|\r/g, " ")
    };
    e.patch(t, n);
    const r = {
        type: "element",
        tagName: "code",
        properties: {},
        children: [n]
    };
    return e.patch(t, r), e.applyData(t, r)
}

function fB(e, t) {
    const n = e.definition(t.identifier);
    if (!n) return b_(e, t);
    const r = {
        href: ou(n.url || "")
    };
    n.title !== null && n.title !== void 0 && (r.title = n.title);
    const i = {
        type: "element",
        tagName: "a",
        properties: r,
        children: e.all(t)
    };
    return e.patch(t, i), e.applyData(t, i)
}

function dB(e, t) {
    const n = {
        href: ou(t.url)
    };
    t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = {
        type: "element",
        tagName: "a",
        properties: n,
        children: e.all(t)
    };
    return e.patch(t, r), e.applyData(t, r)
}

function pB(e, t, n) {
    const r = e.all(t),
        i = n ? hB(n) : O_(t),
        l = {},
        s = [];
    if (typeof t.checked == "boolean") {
        const p = r[0];
        let g;
        p && p.type === "element" && p.tagName === "p" ? g = p : (g = {
            type: "element",
            tagName: "p",
            properties: {},
            children: []
        }, r.unshift(g)), g.children.length > 0 && g.children.unshift({
            type: "text",
            value: " "
        }), g.children.unshift({
            type: "element",
            tagName: "input",
            properties: {
                type: "checkbox",
                checked: t.checked,
                disabled: !0
            },
            children: []
        }), l.className = ["task-list-item"]
    }
    let a = -1;
    for (; ++a < r.length;) {
        const p = r[a];
        (i || a !== 0 || p.type !== "element" || p.tagName !== "p") && s.push({
            type: "text",
            value: `
`
        }), p.type === "element" && p.tagName === "p" && !i ? s.push(...p.children) : s.push(p)
    }
    const f = r[r.length - 1];
    f && (i || f.type !== "element" || f.tagName !== "p") && s.push({
        type: "text",
        value: `
`
    });
    const d = {
        type: "element",
        tagName: "li",
        properties: l,
        children: s
    };
    return e.patch(t, d), e.applyData(t, d)
}

function hB(e) {
    let t = !1;
    if (e.type === "list") {
        t = e.spread || !1;
        const n = e.children;
        let r = -1;
        for (; !t && ++r < n.length;) t = O_(n[r])
    }
    return t
}

function O_(e) {
    const t = e.spread;
    return t ?? e.children.length > 1
}

function gB(e, t) {
    const n = {},
        r = e.all(t);
    let i = -1;
    for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
        const s = r[i];
        if (s.type === "element" && s.tagName === "li" && s.properties && Array.isArray(s.properties.className) && s.properties.className.includes("task-list-item")) {
            n.className = ["contains-task-list"];
            break
        }
    }
    const l = {
        type: "element",
        tagName: t.ordered ? "ol" : "ul",
        properties: n,
        children: e.wrap(r, !0)
    };
    return e.patch(t, l), e.applyData(t, l)
}

function mB(e, t) {
    const n = {
        type: "element",
        tagName: "p",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function vB(e, t) {
    const n = {
        type: "root",
        children: e.wrap(e.all(t))
    };
    return e.patch(t, n), e.applyData(t, n)
}

function yB(e, t) {
    const n = {
        type: "element",
        tagName: "strong",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}
const Tv = T_("start"),
    Iv = T_("end");

function wB(e) {
    return {
        start: Tv(e),
        end: Iv(e)
    }
}

function T_(e) {
    return t;

    function t(n) {
        const r = n && n.position && n.position[e] || {};
        return {
            line: r.line || null,
            column: r.column || null,
            offset: r.offset > -1 ? r.offset : null
        }
    }
}

function xB(e, t) {
    const n = e.all(t),
        r = n.shift(),
        i = [];
    if (r) {
        const s = {
            type: "element",
            tagName: "thead",
            properties: {},
            children: e.wrap([r], !0)
        };
        e.patch(t.children[0], s), i.push(s)
    }
    if (n.length > 0) {
        const s = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(n, !0)
            },
            a = Tv(t.children[1]),
            f = Iv(t.children[t.children.length - 1]);
        a.line && f.line && (s.position = {
            start: a,
            end: f
        }), i.push(s)
    }
    const l = {
        type: "element",
        tagName: "table",
        properties: {},
        children: e.wrap(i, !0)
    };
    return e.patch(t, l), e.applyData(t, l)
}

function SB(e, t, n) {
    const r = n ? n.children : void 0,
        l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
        s = n && n.type === "table" ? n.align : void 0,
        a = s ? s.length : t.children.length;
    let f = -1;
    const d = [];
    for (; ++f < a;) {
        const g = t.children[f],
            v = {},
            m = s ? s[f] : void 0;
        m && (v.align = m);
        let E = {
            type: "element",
            tagName: l,
            properties: v,
            children: []
        };
        g && (E.children = e.all(g), e.patch(g, E), E = e.applyData(t, E)), d.push(E)
    }
    const p = {
        type: "element",
        tagName: "tr",
        properties: {},
        children: e.wrap(d, !0)
    };
    return e.patch(t, p), e.applyData(t, p)
}

function EB(e, t) {
    const n = {
        type: "element",
        tagName: "td",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}
const qx = 9,
    Gx = 32;

function CB(e) {
    const t = String(e),
        n = /\r?\n|\r/g;
    let r = n.exec(t),
        i = 0;
    const l = [];
    for (; r;) l.push(Kx(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
    return l.push(Kx(t.slice(i), i > 0, !1)), l.join("")
}

function Kx(e, t, n) {
    let r = 0,
        i = e.length;
    if (t) {
        let l = e.codePointAt(r);
        for (; l === qx || l === Gx;) r++, l = e.codePointAt(r)
    }
    if (n) {
        let l = e.codePointAt(i - 1);
        for (; l === qx || l === Gx;) i--, l = e.codePointAt(i - 1)
    }
    return i > r ? e.slice(r, i) : ""
}

function kB(e, t) {
    const n = {
        type: "text",
        value: CB(String(t.value))
    };
    return e.patch(t, n), e.applyData(t, n)
}

function _B(e, t) {
    const n = {
        type: "element",
        tagName: "hr",
        properties: {},
        children: []
    };
    return e.patch(t, n), e.applyData(t, n)
}
const bB = {
    blockquote: eB,
    break: tB,
    code: nB,
    delete: rB,
    emphasis: iB,
    footnoteReference: __,
    footnote: oB,
    heading: lB,
    html: uB,
    imageReference: sB,
    image: aB,
    inlineCode: cB,
    linkReference: fB,
    link: dB,
    listItem: pB,
    list: gB,
    paragraph: mB,
    root: vB,
    strong: yB,
    table: xB,
    tableCell: EB,
    tableRow: SB,
    text: kB,
    thematicBreak: _B,
    toml: Ga,
    yaml: Ga,
    definition: Ga,
    footnoteDefinition: Ga
};

function Ga() {
    return null
}
const I_ = function(e) {
    if (e == null) return RB;
    if (typeof e == "string") return IB(e);
    if (typeof e == "object") return Array.isArray(e) ? OB(e) : TB(e);
    if (typeof e == "function") return Zf(e);
    throw new Error("Expected function, string, or object as test")
};

function OB(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.length;) t[n] = I_(e[n]);
    return Zf(r);

    function r(...i) {
        let l = -1;
        for (; ++l < t.length;)
            if (t[l].call(this, ...i)) return !0;
        return !1
    }
}

function TB(e) {
    return Zf(t);

    function t(n) {
        let r;
        for (r in e)
            if (n[r] !== e[r]) return !1;
        return !0
    }
}

function IB(e) {
    return Zf(t);

    function t(n) {
        return n && n.type === e
    }
}

function Zf(e) {
    return t;

    function t(n, ...r) {
        return !!(n && typeof n == "object" && "type" in n && e.call(this, n, ...r))
    }
}

function RB() {
    return !0
}
const PB = !0,
    Qx = !1,
    AB = "skip",
    DB = function(e, t, n, r) {
        typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
        const i = I_(t),
            l = r ? -1 : 1;
        s(e, void 0, [])();

        function s(a, f, d) {
            const p = a && typeof a == "object" ? a : {};
            if (typeof p.type == "string") {
                const v = typeof p.tagName == "string" ? p.tagName : typeof p.name == "string" ? p.name : void 0;
                Object.defineProperty(g, "name", {
                    value: "node (" + (a.type + (v ? "<" + v + ">" : "")) + ")"
                })
            }
            return g;

            function g() {
                let v = [],
                    m, E, S;
                if ((!t || i(a, f, d[d.length - 1] || null)) && (v = NB(n(a, d)), v[0] === Qx)) return v;
                if (a.children && v[0] !== AB)
                    for (E = (r ? a.children.length : -1) + l, S = d.concat(a); E > -1 && E < a.children.length;) {
                        if (m = s(a.children[E], E, S)(), m[0] === Qx) return m;
                        E = typeof m[1] == "number" ? m[1] : E + l
                    }
                return v
            }
        }
    };

function NB(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [PB, e] : [e]
}
const Rv = function(e, t, n, r) {
    typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), DB(e, t, i, r);

    function i(l, s) {
        const a = s[s.length - 1];
        return n(l, a ? a.children.indexOf(l) : null, a)
    }
};

function MB(e) {
    return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column
}
const Yx = {}.hasOwnProperty;

function LB(e) {
    const t = Object.create(null);
    if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
    return Rv(e, "definition", r => {
        const i = Xx(r.identifier);
        i && !Yx.call(t, i) && (t[i] = r)
    }), n;

    function n(r) {
        const i = Xx(r);
        return i && Yx.call(t, i) ? t[i] : null
    }
}

function Xx(e) {
    return String(e || "").toUpperCase()
}
const ef = {}.hasOwnProperty;

function FB(e, t) {
    const n = t || {},
        r = n.allowDangerousHtml || !1,
        i = {};
    return s.dangerous = r, s.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, s.footnoteLabel = n.footnoteLabel || "Footnotes", s.footnoteLabelTagName = n.footnoteLabelTagName || "h2", s.footnoteLabelProperties = n.footnoteLabelProperties || {
        className: ["sr-only"]
    }, s.footnoteBackLabel = n.footnoteBackLabel || "Back to content", s.unknownHandler = n.unknownHandler, s.passThrough = n.passThrough, s.handlers = {
        ...bB,
        ...n.handlers
    }, s.definition = LB(e), s.footnoteById = i, s.footnoteOrder = [], s.footnoteCounts = {}, s.patch = zB, s.applyData = $B, s.one = a, s.all = f, s.wrap = UB, s.augment = l, Rv(e, "footnoteDefinition", d => {
        const p = String(d.identifier).toUpperCase();
        ef.call(i, p) || (i[p] = d)
    }), s;

    function l(d, p) {
        if (d && "data" in d && d.data) {
            const g = d.data;
            g.hName && (p.type !== "element" && (p = {
                type: "element",
                tagName: "",
                properties: {},
                children: []
            }), p.tagName = g.hName), p.type === "element" && g.hProperties && (p.properties = {
                ...p.properties,
                ...g.hProperties
            }), "children" in p && p.children && g.hChildren && (p.children = g.hChildren)
        }
        if (d) {
            const g = "type" in d ? d : {
                position: d
            };
            MB(g) || (p.position = {
                start: Tv(g),
                end: Iv(g)
            })
        }
        return p
    }

    function s(d, p, g, v) {
        return Array.isArray(g) && (v = g, g = {}), l(d, {
            type: "element",
            tagName: p,
            properties: g || {},
            children: v || []
        })
    }

    function a(d, p) {
        return R_(s, d, p)
    }

    function f(d) {
        return Pv(s, d)
    }
}

function zB(e, t) {
    e.position && (t.position = wB(e))
}

function $B(e, t) {
    let n = t;
    if (e && e.data) {
        const r = e.data.hName,
            i = e.data.hChildren,
            l = e.data.hProperties;
        typeof r == "string" && (n.type === "element" ? n.tagName = r : n = {
            type: "element",
            tagName: r,
            properties: {},
            children: []
        }), n.type === "element" && l && (n.properties = {
            ...n.properties,
            ...l
        }), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i)
    }
    return n
}

function R_(e, t, n) {
    const r = t && t.type;
    if (!r) throw new Error("Expected node, got `" + t + "`");
    return ef.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? {
        ...t,
        children: Pv(e, t)
    } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : BB(e, t)
}

function Pv(e, t) {
    const n = [];
    if ("children" in t) {
        const r = t.children;
        let i = -1;
        for (; ++i < r.length;) {
            const l = R_(e, r[i], t);
            if (l) {
                if (i && r[i - 1].type === "break" && (!Array.isArray(l) && l.type === "text" && (l.value = l.value.replace(/^\s+/, "")), !Array.isArray(l) && l.type === "element")) {
                    const s = l.children[0];
                    s && s.type === "text" && (s.value = s.value.replace(/^\s+/, ""))
                }
                Array.isArray(l) ? n.push(...l) : n.push(l)
            }
        }
    }
    return n
}

function BB(e, t) {
    const n = t.data || {},
        r = "value" in t && !(ef.call(n, "hProperties") || ef.call(n, "hChildren")) ? {
            type: "text",
            value: t.value
        } : {
            type: "element",
            tagName: "div",
            properties: {},
            children: Pv(e, t)
        };
    return e.patch(t, r), e.applyData(t, r)
}

function UB(e, t) {
    const n = [];
    let r = -1;
    for (t && n.push({
            type: "text",
            value: `
`
        }); ++r < e.length;) r && n.push({
        type: "text",
        value: `
`
    }), n.push(e[r]);
    return t && e.length > 0 && n.push({
        type: "text",
        value: `
`
    }), n
}

function HB(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.footnoteOrder.length;) {
        const r = e.footnoteById[e.footnoteOrder[n]];
        if (!r) continue;
        const i = e.all(r),
            l = String(r.identifier).toUpperCase(),
            s = ou(l.toLowerCase());
        let a = 0;
        const f = [];
        for (; ++a <= e.footnoteCounts[l];) {
            const g = {
                type: "element",
                tagName: "a",
                properties: {
                    href: "#" + e.clobberPrefix + "fnref-" + s + (a > 1 ? "-" + a : ""),
                    dataFootnoteBackref: !0,
                    className: ["data-footnote-backref"],
                    ariaLabel: e.footnoteBackLabel
                },
                children: [{
                    type: "text",
                    value: "↩"
                }]
            };
            a > 1 && g.children.push({
                type: "element",
                tagName: "sup",
                children: [{
                    type: "text",
                    value: String(a)
                }]
            }), f.length > 0 && f.push({
                type: "text",
                value: " "
            }), f.push(g)
        }
        const d = i[i.length - 1];
        if (d && d.type === "element" && d.tagName === "p") {
            const g = d.children[d.children.length - 1];
            g && g.type === "text" ? g.value += " " : d.children.push({
                type: "text",
                value: " "
            }), d.children.push(...f)
        } else i.push(...f);
        const p = {
            type: "element",
            tagName: "li",
            properties: {
                id: e.clobberPrefix + "fn-" + s
            },
            children: e.wrap(i, !0)
        };
        e.patch(r, p), t.push(p)
    }
    if (t.length !== 0) return {
        type: "element",
        tagName: "section",
        properties: {
            dataFootnotes: !0,
            className: ["footnotes"]
        },
        children: [{
            type: "element",
            tagName: e.footnoteLabelTagName,
            properties: {
                ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
                id: "footnote-label"
            },
            children: [{
                type: "text",
                value: e.footnoteLabel
            }]
        }, {
            type: "text",
            value: `
`
        }, {
            type: "element",
            tagName: "ol",
            properties: {},
            children: e.wrap(t, !0)
        }, {
            type: "text",
            value: `
`
        }]
    }
}

function P_(e, t) {
    const n = FB(e, t),
        r = n.one(e, null),
        i = HB(n);
    return i && r.children.push({
        type: "text",
        value: `
`
    }, i), Array.isArray(r) ? {
        type: "root",
        children: r
    } : r
}
const jB = function(e, t) {
        return e && "run" in e ? VB(e, t) : qB(e || t)
    },
    WB = jB;

function VB(e, t) {
    return (n, r, i) => {
        e.run(P_(n, t), r, l => {
            i(l)
        })
    }
}

function qB(e) {
    return t => P_(t, e)
}
class Ms {
    constructor(t, n, r) {
        this.property = t, this.normal = n, r && (this.space = r)
    }
}
Ms.prototype.property = {};
Ms.prototype.normal = {};
Ms.prototype.space = null;

function A_(e, t) {
    const n = {},
        r = {};
    let i = -1;
    for (; ++i < e.length;) Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
    return new Ms(n, r, t)
}

function Ag(e) {
    return e.toLowerCase()
}
class dr {
    constructor(t, n) {
        this.property = t, this.attribute = n
    }
}
dr.prototype.space = null;
dr.prototype.boolean = !1;
dr.prototype.booleanish = !1;
dr.prototype.overloadedBoolean = !1;
dr.prototype.number = !1;
dr.prototype.commaSeparated = !1;
dr.prototype.spaceSeparated = !1;
dr.prototype.commaOrSpaceSeparated = !1;
dr.prototype.mustUseProperty = !1;
dr.prototype.defined = !1;
let GB = 0;
const be = qo(),
    kt = qo(),
    D_ = qo(),
    ie = qo(),
    tt = qo(),
    Fl = qo(),
    An = qo();

function qo() {
    return 2 ** ++GB
}
const Dg = Object.freeze(Object.defineProperty({
        __proto__: null,
        boolean: be,
        booleanish: kt,
        commaOrSpaceSeparated: An,
        commaSeparated: Fl,
        number: ie,
        overloadedBoolean: D_,
        spaceSeparated: tt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    hh = Object.keys(Dg);
class Av extends dr {
    constructor(t, n, r, i) {
        let l = -1;
        if (super(t, n), Zx(this, "space", i), typeof r == "number")
            for (; ++l < hh.length;) {
                const s = hh[l];
                Zx(this, hh[l], (r & Dg[s]) === Dg[s])
            }
    }
}
Av.prototype.defined = !0;

function Zx(e, t, n) {
    n && (e[t] = n)
}
const KB = {}.hasOwnProperty;

function lu(e) {
    const t = {},
        n = {};
    let r;
    for (r in e.properties)
        if (KB.call(e.properties, r)) {
            const i = e.properties[r],
                l = new Av(r, e.transform(e.attributes || {}, r), i, e.space);
            e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[Ag(r)] = r, n[Ag(l.attribute)] = r
        } return new Ms(t, n, e.space)
}
const N_ = lu({
        space: "xlink",
        transform(e, t) {
            return "xlink:" + t.slice(5).toLowerCase()
        },
        properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null
        }
    }),
    M_ = lu({
        space: "xml",
        transform(e, t) {
            return "xml:" + t.slice(3).toLowerCase()
        },
        properties: {
            xmlLang: null,
            xmlBase: null,
            xmlSpace: null
        }
    });

function L_(e, t) {
    return t in e ? e[t] : t
}

function F_(e, t) {
    return L_(e, t.toLowerCase())
}
const z_ = lu({
        space: "xmlns",
        attributes: {
            xmlnsxlink: "xmlns:xlink"
        },
        transform: F_,
        properties: {
            xmlns: null,
            xmlnsXLink: null
        }
    }),
    $_ = lu({
        transform(e, t) {
            return t === "role" ? t : "aria-" + t.slice(4).toLowerCase()
        },
        properties: {
            ariaActiveDescendant: null,
            ariaAtomic: kt,
            ariaAutoComplete: null,
            ariaBusy: kt,
            ariaChecked: kt,
            ariaColCount: ie,
            ariaColIndex: ie,
            ariaColSpan: ie,
            ariaControls: tt,
            ariaCurrent: null,
            ariaDescribedBy: tt,
            ariaDetails: null,
            ariaDisabled: kt,
            ariaDropEffect: tt,
            ariaErrorMessage: null,
            ariaExpanded: kt,
            ariaFlowTo: tt,
            ariaGrabbed: kt,
            ariaHasPopup: null,
            ariaHidden: kt,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: tt,
            ariaLevel: ie,
            ariaLive: null,
            ariaModal: kt,
            ariaMultiLine: kt,
            ariaMultiSelectable: kt,
            ariaOrientation: null,
            ariaOwns: tt,
            ariaPlaceholder: null,
            ariaPosInSet: ie,
            ariaPressed: kt,
            ariaReadOnly: kt,
            ariaRelevant: null,
            ariaRequired: kt,
            ariaRoleDescription: tt,
            ariaRowCount: ie,
            ariaRowIndex: ie,
            ariaRowSpan: ie,
            ariaSelected: kt,
            ariaSetSize: ie,
            ariaSort: null,
            ariaValueMax: ie,
            ariaValueMin: ie,
            ariaValueNow: ie,
            ariaValueText: null,
            role: null
        }
    }),
    QB = lu({
        space: "html",
        attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv"
        },
        transform: F_,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
            abbr: null,
            accept: Fl,
            acceptCharset: tt,
            accessKey: tt,
            action: null,
            allow: null,
            allowFullScreen: be,
            allowPaymentRequest: be,
            allowUserMedia: be,
            alt: null,
            as: null,
            async: be,
            autoCapitalize: null,
            autoComplete: tt,
            autoFocus: be,
            autoPlay: be,
            blocking: tt,
            capture: null,
            charSet: null,
            checked: be,
            cite: null,
            className: tt,
            cols: ie,
            colSpan: null,
            content: null,
            contentEditable: kt,
            controls: be,
            controlsList: tt,
            coords: ie | Fl,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: be,
            defer: be,
            dir: null,
            dirName: null,
            disabled: be,
            download: D_,
            draggable: kt,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: be,
            formTarget: null,
            headers: tt,
            height: ie,
            hidden: be,
            high: ie,
            href: null,
            hrefLang: null,
            htmlFor: tt,
            httpEquiv: tt,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: be,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: be,
            itemId: null,
            itemProp: tt,
            itemRef: tt,
            itemScope: be,
            itemType: tt,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: be,
            low: ie,
            manifest: null,
            max: null,
            maxLength: ie,
            media: null,
            method: null,
            min: null,
            minLength: ie,
            multiple: be,
            muted: be,
            name: null,
            nonce: null,
            noModule: be,
            noValidate: be,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: be,
            optimum: ie,
            pattern: null,
            ping: tt,
            placeholder: null,
            playsInline: be,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: be,
            referrerPolicy: null,
            rel: tt,
            required: be,
            reversed: be,
            rows: ie,
            rowSpan: ie,
            sandbox: tt,
            scope: null,
            scoped: be,
            seamless: be,
            selected: be,
            shadowRootClonable: be,
            shadowRootDelegatesFocus: be,
            shadowRootMode: null,
            shape: null,
            size: ie,
            sizes: null,
            slot: null,
            span: ie,
            spellCheck: kt,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: ie,
            step: null,
            style: null,
            tabIndex: ie,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: be,
            useMap: null,
            value: kt,
            width: ie,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: tt,
            axis: null,
            background: null,
            bgColor: null,
            border: ie,
            borderColor: null,
            bottomMargin: ie,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: be,
            declare: be,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: ie,
            leftMargin: ie,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: ie,
            marginWidth: ie,
            noResize: be,
            noHref: be,
            noShade: be,
            noWrap: be,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: ie,
            rules: null,
            scheme: null,
            scrolling: kt,
            standby: null,
            summary: null,
            text: null,
            topMargin: ie,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: ie,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: be,
            disableRemotePlayback: be,
            prefix: null,
            property: null,
            results: ie,
            security: null,
            unselectable: null
        }
    }),
    YB = lu({
        space: "svg",
        attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin"
        },
        transform: L_,
        properties: {
            about: An,
            accentHeight: ie,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: ie,
            amplitude: ie,
            arabicForm: null,
            ascent: ie,
            attributeName: null,
            attributeType: null,
            azimuth: ie,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: ie,
            by: null,
            calcMode: null,
            capHeight: ie,
            className: tt,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: ie,
            diffuseConstant: ie,
            direction: null,
            display: null,
            dur: null,
            divisor: ie,
            dominantBaseline: null,
            download: be,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: ie,
            enableBackground: null,
            end: null,
            event: null,
            exponent: ie,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: ie,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: Fl,
            g2: Fl,
            glyphName: Fl,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: ie,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: ie,
            horizOriginX: ie,
            horizOriginY: ie,
            id: null,
            ideographic: ie,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: ie,
            k: ie,
            k1: ie,
            k2: ie,
            k3: ie,
            k4: ie,
            kernelMatrix: An,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: ie,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: ie,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: ie,
            overlineThickness: ie,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: ie,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: tt,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: ie,
            pointsAtY: ie,
            pointsAtZ: ie,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: An,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: An,
            rev: An,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: An,
            requiredFeatures: An,
            requiredFonts: An,
            requiredFormats: An,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: ie,
            specularExponent: ie,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: ie,
            strikethroughThickness: ie,
            string: null,
            stroke: null,
            strokeDashArray: An,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: ie,
            strokeOpacity: ie,
            strokeWidth: null,
            style: null,
            surfaceScale: ie,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: An,
            tabIndex: ie,
            tableValues: null,
            target: null,
            targetX: ie,
            targetY: ie,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: An,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: ie,
            underlineThickness: ie,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: ie,
            values: null,
            vAlphabetic: ie,
            vMathematical: ie,
            vectorEffect: null,
            vHanging: ie,
            vIdeographic: ie,
            version: null,
            vertAdvY: ie,
            vertOriginX: ie,
            vertOriginY: ie,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: ie,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null
        }
    }),
    XB = /^data[-\w.:]+$/i,
    Jx = /-[a-z]/g,
    ZB = /[A-Z]/g;

function JB(e, t) {
    const n = Ag(t);
    let r = t,
        i = dr;
    if (n in e.normal) return e.property[e.normal[n]];
    if (n.length > 4 && n.slice(0, 4) === "data" && XB.test(t)) {
        if (t.charAt(4) === "-") {
            const l = t.slice(5).replace(Jx, tU);
            r = "data" + l.charAt(0).toUpperCase() + l.slice(1)
        } else {
            const l = t.slice(4);
            if (!Jx.test(l)) {
                let s = l.replace(ZB, eU);
                s.charAt(0) !== "-" && (s = "-" + s), t = "data" + s
            }
        }
        i = Av
    }
    return new i(r, t)
}

function eU(e) {
    return "-" + e.toLowerCase()
}

function tU(e) {
    return e.charAt(1).toUpperCase()
}
const eS = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink"
    },
    nU = A_([M_, N_, z_, $_, QB], "html"),
    rU = A_([M_, N_, z_, $_, YB], "svg");

function iU(e) {
    if (e.allowedElements && e.disallowedElements) throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
    if (e.allowedElements || e.disallowedElements || e.allowElement) return t => {
        Rv(t, "element", (n, r, i) => {
            const l = i;
            let s;
            if (e.allowedElements ? s = !e.allowedElements.includes(n.tagName) : e.disallowedElements && (s = e.disallowedElements.includes(n.tagName)), !s && e.allowElement && typeof r == "number" && (s = !e.allowElement(n, r, l)), s && typeof r == "number") return e.unwrapDisallowed && n.children ? l.children.splice(r, 1, ...n.children) : l.children.splice(r, 1), r
        })
    }
}

function oU(e) {
    const t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
    return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === ""
}

function lU(e) {
    return e.join(" ").trim()
}

function uU(e, t) {
    const n = t || {};
    return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim()
}
var Dv = {
        exports: {}
    },
    tS = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    sU = /\n/g,
    aU = /^\s*/,
    cU = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    fU = /^:\s*/,
    dU = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    pU = /^[;\s]*/,
    hU = /^\s+|\s+$/g,
    gU = `
`,
    nS = "/",
    rS = "*",
    _o = "",
    mU = "comment",
    vU = "declaration",
    yU = function(e, t) {
        if (typeof e != "string") throw new TypeError("First argument must be a string");
        if (!e) return [];
        t = t || {};
        var n = 1,
            r = 1;

        function i(E) {
            var S = E.match(sU);
            S && (n += S.length);
            var A = E.lastIndexOf(gU);
            r = ~A ? E.length - A : r + E.length
        }

        function l() {
            var E = {
                line: n,
                column: r
            };
            return function(S) {
                return S.position = new s(E), d(), S
            }
        }

        function s(E) {
            this.start = E, this.end = {
                line: n,
                column: r
            }, this.source = t.source
        }
        s.prototype.content = e;

        function a(E) {
            var S = new Error(t.source + ":" + n + ":" + r + ": " + E);
            if (S.reason = E, S.filename = t.source, S.line = n, S.column = r, S.source = e, !t.silent) throw S
        }

        function f(E) {
            var S = E.exec(e);
            if (S) {
                var A = S[0];
                return i(A), e = e.slice(A.length), S
            }
        }

        function d() {
            f(aU)
        }

        function p(E) {
            var S;
            for (E = E || []; S = g();) S !== !1 && E.push(S);
            return E
        }

        function g() {
            var E = l();
            if (!(nS != e.charAt(0) || rS != e.charAt(1))) {
                for (var S = 2; _o != e.charAt(S) && (rS != e.charAt(S) || nS != e.charAt(S + 1));) ++S;
                if (S += 2, _o === e.charAt(S - 1)) return a("End of comment missing");
                var A = e.slice(2, S - 2);
                return r += 2, i(A), e = e.slice(S), r += 2, E({
                    type: mU,
                    comment: A
                })
            }
        }

        function v() {
            var E = l(),
                S = f(cU);
            if (S) {
                if (g(), !f(fU)) return a("property missing ':'");
                var A = f(dU),
                    y = E({
                        type: vU,
                        property: iS(S[0].replace(tS, _o)),
                        value: A ? iS(A[0].replace(tS, _o)) : _o
                    });
                return f(pU), y
            }
        }

        function m() {
            var E = [];
            p(E);
            for (var S; S = v();) S !== !1 && (E.push(S), p(E));
            return E
        }
        return d(), m()
    };

function iS(e) {
    return e ? e.replace(hU, _o) : _o
}
var wU = yU;

function B_(e, t) {
    var n = null;
    if (!e || typeof e != "string") return n;
    for (var r, i = wU(e), l = typeof t == "function", s, a, f = 0, d = i.length; f < d; f++) r = i[f], s = r.property, a = r.value, l ? t(s, a, r) : a && (n || (n = {}), n[s] = a);
    return n
}
Dv.exports = B_;
Dv.exports.default = B_;
var xU = Dv.exports;
const SU = io(xU),
    Ng = {}.hasOwnProperty,
    EU = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

function U_(e, t) {
    const n = [];
    let r = -1,
        i;
    for (; ++r < t.children.length;) i = t.children[r], i.type === "element" ? n.push(CU(e, i, r, t)) : i.type === "text" ? (t.type !== "element" || !EU.has(t.tagName) || !oU(i)) && n.push(i.value) : i.type === "raw" && !e.options.skipHtml && n.push(i.value);
    return n
}

function CU(e, t, n, r) {
    const i = e.options,
        l = i.transformLinkUri === void 0 ? T6 : i.transformLinkUri,
        s = e.schema,
        a = t.tagName,
        f = {};
    let d = s,
        p;
    if (s.space === "html" && a === "svg" && (d = rU, e.schema = d), t.properties)
        for (p in t.properties) Ng.call(t.properties, p) && _U(f, p, t.properties[p], e);
    (a === "ol" || a === "ul") && e.listDepth++;
    const g = U_(e, t);
    (a === "ol" || a === "ul") && e.listDepth--, e.schema = s;
    const v = t.position || {
            start: {
                line: null,
                column: null,
                offset: null
            },
            end: {
                line: null,
                column: null,
                offset: null
            }
        },
        m = i.components && Ng.call(i.components, a) ? i.components[a] : a,
        E = typeof m == "string" || m === Ve.Fragment;
    if (!AM.isValidElementType(m)) throw new TypeError(`Component for name \`${a}\` not defined or is not renderable`);
    if (f.key = n, a === "a" && i.linkTarget && (f.target = typeof i.linkTarget == "function" ? i.linkTarget(String(f.href || ""), t.children, typeof f.title == "string" ? f.title : null) : i.linkTarget), a === "a" && l && (f.href = l(String(f.href || ""), t.children, typeof f.title == "string" ? f.title : null)), !E && a === "code" && r.type === "element" && r.tagName !== "pre" && (f.inline = !0), !E && (a === "h1" || a === "h2" || a === "h3" || a === "h4" || a === "h5" || a === "h6") && (f.level = Number.parseInt(a.charAt(1), 10)), a === "img" && i.transformImageUri && (f.src = i.transformImageUri(String(f.src || ""), String(f.alt || ""), typeof f.title == "string" ? f.title : null)), !E && a === "li" && r.type === "element") {
        const S = kU(t);
        f.checked = S && S.properties ? !!S.properties.checked : null, f.index = gh(r, t), f.ordered = r.tagName === "ol"
    }
    return !E && (a === "ol" || a === "ul") && (f.ordered = a === "ol", f.depth = e.listDepth), (a === "td" || a === "th") && (f.align && (f.style || (f.style = {}), f.style.textAlign = f.align, delete f.align), E || (f.isHeader = a === "th")), !E && a === "tr" && r.type === "element" && (f.isHeader = r.tagName === "thead"), i.sourcePos && (f["data-sourcepos"] = TU(v)), !E && i.rawSourcePos && (f.sourcePosition = t.position), !E && i.includeElementIndex && (f.index = gh(r, t), f.siblingCount = gh(r)), E || (f.node = t), g.length > 0 ? Ve.createElement(m, f, g) : Ve.createElement(m, f)
}

function kU(e) {
    let t = -1;
    for (; ++t < e.children.length;) {
        const n = e.children[t];
        if (n.type === "element" && n.tagName === "input") return n
    }
    return null
}

function gh(e, t) {
    let n = -1,
        r = 0;
    for (; ++n < e.children.length && e.children[n] !== t;) e.children[n].type === "element" && r++;
    return r
}

function _U(e, t, n, r) {
    const i = JB(r.schema, t);
    let l = n;
    l == null || l !== l || (Array.isArray(l) && (l = i.commaSeparated ? uU(l) : lU(l)), i.property === "style" && typeof l == "string" && (l = bU(l)), i.space && i.property ? e[Ng.call(eS, i.property) ? eS[i.property] : i.property] = l : i.attribute && (e[i.attribute] = l))
}

function bU(e) {
    const t = {};
    try {
        SU(e, n)
    } catch {}
    return t;

    function n(r, i) {
        const l = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
        t[l.replace(/-([a-z])/g, OU)] = i
    }
}

function OU(e, t) {
    return t.toUpperCase()
}

function TU(e) {
    return [e.start.line, ":", e.start.column, "-", e.end.line, ":", e.end.column].map(String).join("")
}
const oS = {}.hasOwnProperty,
    IU = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
    Ka = {
        plugins: {
            to: "remarkPlugins",
            id: "change-plugins-to-remarkplugins"
        },
        renderers: {
            to: "components",
            id: "change-renderers-to-components"
        },
        astPlugins: {
            id: "remove-buggy-html-in-markdown-parser"
        },
        allowDangerousHtml: {
            id: "remove-buggy-html-in-markdown-parser"
        },
        escapeHtml: {
            id: "remove-buggy-html-in-markdown-parser"
        },
        source: {
            to: "children",
            id: "change-source-to-children"
        },
        allowNode: {
            to: "allowElement",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        allowedTypes: {
            to: "allowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        disallowedTypes: {
            to: "disallowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        includeNodeIndex: {
            to: "includeElementIndex",
            id: "change-includenodeindex-to-includeelementindex"
        }
    };

function H_(e) {
    for (const l in Ka)
        if (oS.call(Ka, l) && oS.call(e, l)) {
            const s = Ka[l];
            console.warn(`[react-markdown] Warning: please ${s.to?`use \`${s.to}\` instead of`:"remove"} \`${l}\` (see <${IU}#${s.id}> for more info)`), delete Ka[l]
        } const t = W6().use(J$).use(e.remarkPlugins || []).use(WB, {
            ...e.remarkRehypeOptions,
            allowDangerousHtml: !0
        }).use(e.rehypePlugins || []).use(iU, e),
        n = new s_;
    typeof e.children == "string" ? n.value = e.children : e.children !== void 0 && e.children !== null && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
    const r = t.runSync(t.parse(n), n);
    if (r.type !== "root") throw new TypeError("Expected a `root` node");
    let i = Ve.createElement(Ve.Fragment, {}, U_({
        options: e,
        schema: nU,
        listDepth: 0
    }, r));
    return e.className && (i = Ve.createElement("div", {
        className: e.className
    }, i)), i
}
H_.propTypes = {
    children: Ce.string,
    className: Ce.string,
    allowElement: Ce.func,
    allowedElements: Ce.arrayOf(Ce.string),
    disallowedElements: Ce.arrayOf(Ce.string),
    unwrapDisallowed: Ce.bool,
    remarkPlugins: Ce.arrayOf(Ce.oneOfType([Ce.object, Ce.func, Ce.arrayOf(Ce.oneOfType([Ce.bool, Ce.string, Ce.object, Ce.func, Ce.arrayOf(Ce.any)]))])),
    rehypePlugins: Ce.arrayOf(Ce.oneOfType([Ce.object, Ce.func, Ce.arrayOf(Ce.oneOfType([Ce.bool, Ce.string, Ce.object, Ce.func, Ce.arrayOf(Ce.any)]))])),
    sourcePos: Ce.bool,
    rawSourcePos: Ce.bool,
    skipHtml: Ce.bool,
    includeElementIndex: Ce.bool,
    transformLinkUri: Ce.oneOfType([Ce.func, Ce.bool]),
    linkTarget: Ce.oneOfType([Ce.func, Ce.string]),
    transformImageUri: Ce.func,
    components: Ce.object
};
const RU = () => we("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "#ffffff",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [W("path", {
            stroke: "none",
            d: "M0 0h24v24H0z",
            fill: "none"
        }), W("circle", {
            cx: "12",
            cy: "12",
            r: "9"
        }), W("polyline", {
            points: "12 7 12 12 15 15"
        })]
    }),
    lS = () => W("div", {
        className: "divider"
    }),
    PU = ({
        item: e,
        inventoryType: t,
        style: n
    }, r) => {
        const i = gi(d => d.inventory.additionalMetadata),
            l = I.useMemo(() => dt[e.name], [e]),
            s = I.useMemo(() => e.ingredients ? Object.entries(e.ingredients).sort((d, p) => d[1] - p[1]) : null, [e]),
            a = e.metadata?.description || l?.description,
            f = l?.ammoName && dt[l?.ammoName]?.label;
        return W(En, {
            children: l ? we("div", {
                style: {
                    ...n
                },
                className: "tooltip-wrapper",
                ref: r,
                children: [we("div", {
                    className: "tooltip-header-wrapper",
                    children: [W("p", {
                        children: e.metadata?.label || l.label || e.name
                    }), t === "crafting" ? we("div", {
                        className: "tooltip-crafting-duration",
                        children: [W(RU, {}), we("p", {
                            children: [(e.duration !== void 0 ? e.duration : 3e3) / 1e3, "s"]
                        })]
                    }) : W("p", {
                        children: e.metadata?.type
                    })]
                }), W(lS, {}), a && W("div", {
                    className: "tooltip-description",
                    children: W(H_, {
                        className: "tooltip-markdown",
                        children: a
                    })
                }), t !== "crafting" ? we(En, {
                    children: [e.durability !== void 0 && we("p", {
                        children: [ut.ui_durability, ": ", Math.trunc(e.durability)]
                    }), e.metadata?.ammo !== void 0 && we("p", {
                        children: [ut.ui_ammo, ": ", e.metadata.ammo]
                    }), f && we("p", {
                        children: [ut.ammo_type, ": ", f]
                    }), e.metadata?.serial && we("p", {
                        children: [ut.ui_serial, ": ", e.metadata.serial]
                    }), e.metadata?.components && e.metadata?.components[0] && we("p", {
                        children: [ut.ui_components, ":", " ", (e.metadata?.components).map((d, p, g) => p + 1 === g.length ? dt[d]?.label : dt[d]?.label + ", ")]
                    }), e.metadata?.weapontint && we("p", {
                        children: [ut.ui_tint, ": ", e.metadata.weapontint]
                    }), i.map((d, p) => W(I.Fragment, {
                        children: e.metadata && e.metadata[d.metadata] && we("p", {
                            children: [d.value, ": ", e.metadata[d.metadata]]
                        })
                    }, `metadata-${p}`))]
                }) : W("div", {
                    className: "tooltip-ingredients",
                    children: s && s.map(d => {
                        const [p, g] = [d[0], d[1]];
                        return we("div", {
                            className: "tooltip-ingredient",
                            children: [W("img", {
                                src: p ? Nl(p) : "none",
                                alt: "item-image"
                            }), W("p", {
                                children: g >= 1 ? `${g}x ${dt[p]?.label||p}` : g === 0 ? `${dt[p]?.label||p}` : g < 1 && `${g*100}% ${dt[p]?.label||p}`
                            })]
                        }, `ingredient-${p}`)
                    })
                })]
            }) : we("div", {
                className: "tooltip-wrapper",
                ref: r,
                style: n,
                children: [W("div", {
                    className: "tooltip-header-wrapper",
                    children: W("p", {
                        children: e.name
                    })
                }), W(lS, {})]
            })
        })
    },
    AU = Ve.forwardRef(PU),
    DU = () => {
        const e = gi(a => a.tooltip),
            {
                refs: t,
                context: n,
                floatingStyles: r
            } = yv({
                middleware: [Nk(), Dk(), Ak({
                    mainAxis: 10,
                    crossAxis: 10
                })],
                open: e.open,
                placement: "right-start"
            }),
            {
                isMounted: i,
                styles: l
            } = wv(n, {
                duration: 200
            }),
            s = ({
                clientX: a,
                clientY: f
            }) => {
                t.setPositionReference({
                    getBoundingClientRect() {
                        return {
                            width: 0,
                            height: 0,
                            x: a,
                            y: f,
                            left: a,
                            top: f,
                            right: a,
                            bottom: f
                        }
                    }
                })
            };
        return I.useEffect(() => (window.addEventListener("mousemove", s), () => {
            window.removeEventListener("mousemove", s)
        }), []), W(En, {
            children: i && e.item && e.inventoryType && W(vv, {
                children: W(AU, {
                    ref: t.setFloating,
                    style: {
                        ...r,
                        ...l
                    },
                    item: e.item,
                    inventoryType: e.inventoryType
                })
            })
        })
    },
    NU = e => {
        const t = document.createElement("input");
        t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
    },
    Mg = Ve.createContext({
        getItemProps: () => ({}),
        activeIndex: null,
        setActiveIndex: () => {},
        setHasFocusInside: () => {},
        isOpen: !1
    }),
    uS = Ve.forwardRef(({
        children: e,
        label: t,
        ...n
    }, r) => {
        const i = gi(oe => oe.contextMenu),
            [l, s] = I.useState(!1),
            [a, f] = I.useState(!1),
            [d, p] = I.useState(null),
            g = I.useRef([]),
            v = I.useRef([]),
            m = I.useContext(Mg),
            E = so(),
            S = Sz(),
            A = Vo(),
            y = Uk(),
            x = A != null,
            {
                floatingStyles: k,
                refs: P,
                context: N
            } = yv({
                nodeId: S,
                open: l,
                onOpenChange: s,
                placement: x ? "right-start" : "bottom-start",
                middleware: [Ak({
                    mainAxis: x ? 0 : 4,
                    alignmentAxis: x ? -4 : 0
                }), Nk(), Dk()],
                whileElementsMounted: G4
            }),
            {
                isMounted: T,
                styles: F
            } = wv(N);
        I.useEffect(() => {
            x || (i.coords && (P.setPositionReference({
                getBoundingClientRect() {
                    return {
                        width: 0,
                        height: 0,
                        x: i.coords.x,
                        y: i.coords.y,
                        top: i.coords.y,
                        right: i.coords.x,
                        bottom: i.coords.y,
                        left: i.coords.x
                    }
                }
            }), s(!0)), i.coords || s(!1))
        }, [i]);
        const z = kz(N, {
                enabled: x,
                delay: {
                    open: 75
                },
                handleClose: Kz({
                    blockPointerEvents: !0
                })
            }),
            q = Mz(N, {
                event: "mousedown",
                toggle: !x,
                ignoreMouse: x
            }),
            Q = jz(N, {
                role: "menu"
            }),
            $ = Jk(N, {
                bubbles: !0
            }),
            G = Hz(N, {
                listRef: g,
                activeIndex: d,
                nested: x,
                onNavigate: p
            }),
            B = qz(N, {
                listRef: v,
                onMatch: l ? p : void 0,
                activeIndex: d
            }),
            {
                getReferenceProps: U,
                getFloatingProps: Z,
                getItemProps: ue
            } = e_([z, q, Q, $, G, B]);
        return I.useEffect(() => {
            if (!E) return;

            function oe() {
                s(!1)
            }

            function j(J) {
                J.nodeId !== S && J.parentId === A && s(!1)
            }
            return E.events.on("click", oe), E.events.on("menuopen", j), () => {
                E.events.off("click", oe), E.events.off("menuopen", j)
            }
        }, [E, S, A]), I.useEffect(() => {
            l && E && E.events.emit("menuopen", {
                parentId: A,
                nodeId: S
            })
        }, [E, l, S, A]), we(Ez, {
            id: S,
            children: [x && we("button", {
                ref: pv([P.setReference, y.ref, r]),
                tabIndex: x ? m.activeIndex === y.index ? 0 : -1 : void 0,
                role: x ? "menuitem" : void 0,
                "data-open": l ? "" : void 0,
                "data-nested": x ? "" : void 0,
                "data-focus-inside": a ? "" : void 0,
                className: x ? "context-menu-item" : "context-menu-list",
                ...U(m.getItemProps({
                    ...n,
                    onFocus(oe) {
                        n.onFocus?.(oe), f(!1), m.setHasFocusInside(!0)
                    }
                })),
                children: [t, x && W("span", {
                    "aria-hidden": !0,
                    style: {
                        marginLeft: 10,
                        fontSize: 10
                    },
                    children: "▶"
                })]
            }), W(Mg.Provider, {
                value: {
                    activeIndex: d,
                    setActiveIndex: p,
                    getItemProps: ue,
                    setHasFocusInside: f,
                    isOpen: l
                },
                children: W(vz, {
                    elementsRef: g,
                    labelsRef: v,
                    children: T && W(vv, {
                        children: W(Zk, {
                            lockScroll: !0,
                            children: W(Xk, {
                                context: N,
                                modal: !0,
                                initialFocus: P.floating,
                                children: W("div", {
                                    ref: P.setFloating,
                                    className: "context-menu-list",
                                    style: {
                                        ...k,
                                        ...F
                                    },
                                    ...Z(),
                                    children: e
                                })
                            })
                        })
                    })
                })
            })]
        })
    }),
    Ri = Ve.forwardRef(({
        label: e,
        disabled: t,
        ...n
    }, r) => {
        const i = I.useContext(Mg),
            l = Uk({
                label: t ? null : e
            }),
            s = so(),
            a = l.index === i.activeIndex;
        return W("button", {
            ...n,
            ref: pv([l.ref, r]),
            type: "button",
            role: "menuitem",
            className: "context-menu-item",
            tabIndex: a ? 0 : -1,
            disabled: t,
            ...i.getItemProps({
                onClick(f) {
                    n.onClick?.(f), s?.events.emit("click")
                },
                onFocus(f) {
                    n.onFocus?.(f), i.setHasFocusInside(!0)
                }
            }),
            children: e
        })
    }),
    mh = Ve.forwardRef((e, t) => Vo() === null ? W(Cz, {
        children: W(uS, {
            ...e,
            ref: t
        })
    }) : W(uS, {
        ...e,
        ref: t
    })),
    MU = () => {
        const t = gi(i => i.contextMenu).item,
            n = i => {
                if (t) switch (i && i.action) {
                    case "use":
                        ov({
                            name: t.name,
                            slot: t.slot
                        });
                        break;
                    case "give":
                        hk({
                            name: t.name,
                            slot: t.slot
                        });
                        break;
                    case "drop":
                        gn(t) && _g({
                            item: t,
                            inventory: "player"
                        });
                        break;
                    case "remove":
                        ur("removeComponent", {
                            component: i?.component,
                            slot: i?.slot
                        });
                        break;
                    case "removeAmmo":
                        ur("removeAmmo", t.slot);
                        break;
                    case "copy":
                        NU(i.serial || "");
                        break;
                    case "custom":
                        ur("useButton", {
                            id: (i?.id || 0) + 1,
                            slot: t.slot
                        });
                        break
                }
            },
            r = i => i.reduce((l, s, a) => {
                if (s.group) {
                    const f = l.findIndex(d => d.groupName === s.group);
                    f !== -1 ? l[f].buttons.push({
                        ...s,
                        index: a
                    }) : l.push({
                        groupName: s.group,
                        buttons: [{
                            ...s,
                            index: a
                        }]
                    })
                } else l.push({
                    groupName: null,
                    buttons: [{
                        ...s,
                        index: a
                    }]
                });
                return l
            }, []);
        return W(En, {
            children: we(mh, {
                children: [W(Ri, {
                    onClick: () => n({
                        action: "use"
                    }),
                    label: ut.ui_use || "Use"
                }), W(Ri, {
                    onClick: () => n({
                        action: "give"
                    }),
                    label: ut.ui_give || "Give"
                }), W(Ri, {
                    onClick: () => n({
                        action: "drop"
                    }),
                    label: ut.ui_drop || "Drop"
                }), t && t.metadata?.ammo > 0 && W(Ri, {
                    onClick: () => n({
                        action: "removeAmmo"
                    }),
                    label: ut.ui_remove_ammo
                }), t && t.metadata?.serial && W(Ri, {
                    onClick: () => n({
                        action: "copy",
                        serial: t.metadata?.serial
                    }),
                    label: ut.ui_copy
                }), t && t.metadata?.components && t.metadata?.components.length > 0 && W(mh, {
                    label: ut.ui_removeattachments,
                    children: t && t.metadata?.components.map((i, l) => W(Ri, {
                        onClick: () => n({
                            action: "remove",
                            component: i,
                            slot: t.slot
                        }),
                        label: dt[i]?.label || ""
                    }, l))
                }), (t && t.name && dt[t.name]?.buttons?.length || 0) > 0 && W(En, {
                    children: t && t.name && r(dt[t.name]?.buttons).map((i, l) => W(Ve.Fragment, {
                        children: i.groupName ? W(mh, {
                            label: i.groupName,
                            children: i.buttons.map(s => W(Ri, {
                                onClick: () => n({
                                    action: "custom",
                                    id: s.index
                                }),
                                label: s.label
                            }, s.index))
                        }) : i.buttons.map(s => W(Ri, {
                            onClick: () => n({
                                action: "custom",
                                id: s.index
                            }),
                            label: s.label
                        }, s.index))
                    }, l))
                })]
            })
        })
    },
    j_ = e => {
        const t = I.useRef(null);
        return W(o_, {
            in: e.in,
            nodeRef: t,
            classNames: "transition-fade",
            timeout: 200,
            unmountOnExit: !0,
            children: W("span", {
                ref: t,
                children: e.children
            })
        })
    },
    LU = () => {
        const [e, t] = I.useState(!1), n = ru();
        return Lr("setInventoryVisible", t), Lr("closeInventory", () => {
            t(!1), n(pk()), n(Zu())
        }), v6(t), Lr("setupInventory", r => {
            n(ak(r)), !e && t(!0)
        }), Lr("refreshSlots", r => n(Y3(r))), Lr("displayMetadata", r => {
            n(W3(r))
        }), we(En, {
            children: [W(j_, {
                in: e,
                children: we("div", {
                    className: "inventory-wrapper",
                    children: [W(O6, {}), W(Yz, {}), W(b6, {}), W(DU, {}), W(MU, {})]
                })
            }), W(g6, {})]
        })
    },
    Lg = (e, t) => ({
        x: e.x - t.x,
        y: e.y - t.y
    }),
    FU = e => {
        const t = e.getInitialClientOffset(),
            n = e.getInitialSourceClientOffset();
        return t === null || n === null || t.x === void 0 || t.y === void 0 ? {
            x: 0,
            y: 0
        } : Lg(t, n)
    },
    zU = (e, t) => {
        const n = e.getClientOffset();
        if (n === null) return null;
        if (!t.current || !t.current.getBoundingClientRect) return Lg(n, FU(e));
        const r = t.current.getBoundingClientRect(),
            i = {
                x: r.width / 2,
                y: r.height / 2
            };
        return Lg(n, i)
    },
    $U = () => {
        const e = I.useRef(null),
            {
                data: t,
                isDragging: n,
                currentOffset: r
            } = DF(i => ({
                data: i.getItem(),
                currentOffset: zU(i, e),
                isDragging: i.isDragging()
            }));
        return W(En, {
            children: n && r && t.item && W("div", {
                className: "item-drag-preview",
                ref: e,
                style: {
                    transform: `translate(${r.x}px, ${r.y}px)`,
                    backgroundImage: t.image
                }
            })
        })
    },
    BU = e => {
        const [t, n] = I.useState(!1), r = I.useCallback(s => ({
            key: a
        }) => {
            a === e && n(s)
        }, [e]), i = r(!0), l = r(!1);
        return I.useEffect(() => (window.addEventListener("keydown", i), window.addEventListener("keyup", l), () => {
            window.removeEventListener("keydown", i), window.removeEventListener("keyup", l)
        }), [i, l]), t
    },
    UU = () => {
        const e = ru(),
            t = BU("Shift");
        return I.useEffect(() => {
            e(q3(t))
        }, [t, e]), W(En, {})
    },
    HU = () => {
        const e = ru(),
            t = hi();
        return Lr("init", ({
            locale: n,
            items: r,
            leftInventory: i,
            imagepath: l
        }) => {
            for (const s in n) ut[s] = n[s];
            for (const s in r) dt[s] = r[s];
            D3(l), e(ak({
                leftInventory: i
            }))
        }), ur("uiLoaded", {}), Lr("closeInventory", () => {
            t.dispatch({
                type: "dnd-core/END_DRAG"
            })
        }), we("div", {
            className: "app-wrapper",
            children: [W(LU, {}), W($U, {}), W(UU, {})]
        })
    };
addEventListener("dragstart", function(e) {
    e.preventDefault()
});
const jU = (e = []) => {
        const [t, n] = I.useState(e);
        return {
            add: r => {
                n(i => [...i, r])
            },
            remove: () => {
                let r;
                return n(([i, ...l]) => (r = i, l)), r
            },
            get values() {
                return t
            },
            get first() {
                return t[0]
            },
            get last() {
                return t[t.length - 1]
            },
            get size() {
                return t.length
            }
        }
    },
    WU = Ve.createContext(null),
    VU = Ve.forwardRef((e, t) => {
        const n = e.item.item;
        return W("div", {
            className: "item-notification-item-box",
            style: {
                backgroundImage: `url(${Nl(n)||"none"}`,
                ...e.style
            },
            ref: t,
            children: we("div", {
                className: "item-slot-wrapper",
                children: [W("div", {
                    className: "item-notification-action-box",
                    children: W("p", {
                        children: e.item.text
                    })
                }), W("div", {
                    className: "inventory-slot-label-box",
                    children: W("div", {
                        className: "inventory-slot-label-text",
                        children: n.metadata?.label || dt[n.name]?.label
                    })
                })]
            })
        })
    }),
    qU = ({
        children: e
    }) => {
        const t = jU(),
            n = r => {
                const i = Ve.createRef(),
                    l = {
                        id: Date.now(),
                        item: r,
                        ref: i
                    };
                t.add(l);
                const s = setTimeout(() => {
                    t.remove(), clearTimeout(s)
                }, 2500)
            };
        return Lr("itemNotify", ([r, i, l]) => {
            n({
                item: r,
                text: l ? `${ut[i]} ${l}x` : `${ut[i]}`
            })
        }), we(WU.Provider, {
            value: {
                add: n
            },
            children: [e, tu.createPortal(W(p6, {
                className: "item-notification-container",
                children: t.values.map((r, i) => W(j_, {
                    children: W(VU, {
                        item: r.item,
                        ref: r.ref
                    })
                }, `item-notification-${i}`))
            }), document.body)]
        })
    },
    Bu = document.getElementById("root");
uk() && (Bu.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")', Bu.style.backgroundSize = "cover", Bu.style.backgroundRepeat = "no-repeat", Bu.style.backgroundPosition = "center");
SC(Bu).render(W(Ve.StrictMode, {
    children: W(FM, {
        store: Nn,
        children: W(aF, {
            backend: YF,
            options: {
                enableMouseEvents: !0
            },
            children: W(qU, {
                children: W(HU, {})
            })
        })
    })
}));