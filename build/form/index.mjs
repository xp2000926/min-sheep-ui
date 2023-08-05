import { defineComponent as ae, computed as B, provide as U, createVNode as N, toRefs as de, inject as C, ref as H, onMounted as ce, onUnmounted as le } from "vue";
const fe = Symbol("formContextToken"), pe = {
  model: {
    type: Object,
    required: !0
  },
  layout: {
    type: String,
    default: "horizontal"
  },
  labelSize: {
    type: String,
    default: "md"
  },
  labelAlign: {
    type: String,
    default: "start"
  },
  rules: {
    type: Object
  }
};
const Q = ae({
  name: "SForm",
  props: pe,
  emits: ["submit"],
  setup(n, {
    slots: e,
    emit: r,
    expose: t
  }) {
    const i = B(() => ({
      layout: n.layout,
      labelSize: n.labelSize,
      labelAlign: n.labelAlign
    }));
    U("LABEL_DATA", i);
    const f = /* @__PURE__ */ new Set(), a = (l) => f.add(l), s = (l) => f.delete(l);
    U(fe, {
      model: n.model,
      rules: n.rules,
      addItem: a,
      removeItem: s
    });
    const o = (l) => {
      l.preventDefault(), r("submit");
    };
    return t({
      validate: (l) => {
        const m = [];
        f.forEach((g) => m.push(g.validate())), Promise.all(m).then(() => l(!0)).catch(() => l(!1));
      }
    }), () => {
      var l;
      return N("form", {
        class: "s-form",
        onSubmit: o
      }, [(l = e.default) == null ? void 0 : l.call(e)]);
    };
  }
}), me = {
  label: {
    type: String
  },
  prop: {
    type: String
  },
  error: {
    type: String,
    default: ""
  }
};
function R() {
  return R = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var t in r)
        Object.prototype.hasOwnProperty.call(r, t) && (n[t] = r[t]);
    }
    return n;
  }, R.apply(this, arguments);
}
function ye(n, e) {
  n.prototype = Object.create(e.prototype), n.prototype.constructor = n, I(n, e);
}
function J(n) {
  return J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, J(n);
}
function I(n, e) {
  return I = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, i) {
    return t.__proto__ = i, t;
  }, I(n, e);
}
function ge() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function L(n, e, r) {
  return ge() ? L = Reflect.construct.bind() : L = function(i, f, a) {
    var s = [null];
    s.push.apply(s, f);
    var o = Function.bind.apply(i, s), b = new o();
    return a && I(b, a.prototype), b;
  }, L.apply(null, arguments);
}
function ve(n) {
  return Function.toString.call(n).indexOf("[native code]") !== -1;
}
function W(n) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return W = function(t) {
    if (t === null || !ve(t))
      return t;
    if (typeof t != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(t))
        return e.get(t);
      e.set(t, i);
    }
    function i() {
      return L(t, arguments, J(this).constructor);
    }
    return i.prototype = Object.create(t.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), I(i, t);
  }, W(n);
}
var he = /%[sdj%]/g, se = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (se = function(e, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(t) {
    return typeof t == "string";
  }) && console.warn(e, r);
});
function Z(n) {
  if (!n || !n.length)
    return null;
  var e = {};
  return n.forEach(function(r) {
    var t = r.field;
    e[t] = e[t] || [], e[t].push(r);
  }), e;
}
function x(n) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++)
    r[t - 1] = arguments[t];
  var i = 0, f = r.length;
  if (typeof n == "function")
    return n.apply(null, r);
  if (typeof n == "string") {
    var a = n.replace(he, function(s) {
      if (s === "%%")
        return "%";
      if (i >= f)
        return s;
      switch (s) {
        case "%s":
          return String(r[i++]);
        case "%d":
          return Number(r[i++]);
        case "%j":
          try {
            return JSON.stringify(r[i++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return a;
  }
  return n;
}
function be(n) {
  return n === "string" || n === "url" || n === "hex" || n === "email" || n === "date" || n === "pattern";
}
function h(n, e) {
  return !!(n == null || e === "array" && Array.isArray(n) && !n.length || be(e) && typeof n == "string" && !n);
}
function we(n, e, r) {
  var t = [], i = 0, f = n.length;
  function a(s) {
    t.push.apply(t, s || []), i++, i === f && r(t);
  }
  n.forEach(function(s) {
    e(s, a);
  });
}
function k(n, e, r) {
  var t = 0, i = n.length;
  function f(a) {
    if (a && a.length) {
      r(a);
      return;
    }
    var s = t;
    t = t + 1, s < i ? e(n[s], f) : r([]);
  }
  f([]);
}
function qe(n) {
  var e = [];
  return Object.keys(n).forEach(function(r) {
    e.push.apply(e, n[r] || []);
  }), e;
}
var ee = /* @__PURE__ */ function(n) {
  ye(e, n);
  function e(r, t) {
    var i;
    return i = n.call(this, "Async Validation Error") || this, i.errors = r, i.fields = t, i;
  }
  return e;
}(/* @__PURE__ */ W(Error));
function Fe(n, e, r, t, i) {
  if (e.first) {
    var f = new Promise(function(g, O) {
      var q = function(u) {
        return t(u), u.length ? O(new ee(u, Z(u))) : g(i);
      }, d = qe(n);
      k(d, r, q);
    });
    return f.catch(function(g) {
      return g;
    }), f;
  }
  var a = e.firstFields === !0 ? Object.keys(n) : e.firstFields || [], s = Object.keys(n), o = s.length, b = 0, l = [], m = new Promise(function(g, O) {
    var q = function(v) {
      if (l.push.apply(l, v), b++, b === o)
        return t(l), l.length ? O(new ee(l, Z(l))) : g(i);
    };
    s.length || (t(l), g(i)), s.forEach(function(d) {
      var v = n[d];
      a.indexOf(d) !== -1 ? k(v, r, q) : we(v, r, q);
    });
  });
  return m.catch(function(g) {
    return g;
  }), m;
}
function xe(n) {
  return !!(n && n.message !== void 0);
}
function Oe(n, e) {
  for (var r = n, t = 0; t < e.length; t++) {
    if (r == null)
      return r;
    r = r[e[t]];
  }
  return r;
}
function re(n, e) {
  return function(r) {
    var t;
    return n.fullFields ? t = Oe(e, n.fullFields) : t = e[r.field || n.fullField], xe(r) ? (r.field = r.field || n.fullField, r.fieldValue = t, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: t,
      field: r.field || n.fullField
    };
  };
}
function te(n, e) {
  if (e) {
    for (var r in e)
      if (e.hasOwnProperty(r)) {
        var t = e[r];
        typeof t == "object" && typeof n[r] == "object" ? n[r] = R({}, n[r], t) : n[r] = t;
      }
  }
  return n;
}
var oe = function(e, r, t, i, f, a) {
  e.required && (!t.hasOwnProperty(e.field) || h(r, a || e.type)) && i.push(x(f.messages.required, e.fullField));
}, Ae = function(e, r, t, i, f) {
  (/^\s+$/.test(r) || r === "") && i.push(x(f.messages.whitespace, e.fullField));
}, $, Ee = function() {
  if ($)
    return $;
  var n = "[a-fA-F\\d:]", e = function(y) {
    return y && y.includeBoundaries ? "(?:(?<=\\s|^)(?=" + n + ")|(?<=" + n + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", t = "[a-fA-F\\d]{1,4}", i = (`
(?:
(?:` + t + ":){7}(?:" + t + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + t + ":){6}(?:" + r + "|:" + t + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + t + ":){5}(?::" + r + "|(?::" + t + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + t + ":){4}(?:(?::" + t + "){0,1}:" + r + "|(?::" + t + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + t + ":){3}(?:(?::" + t + "){0,2}:" + r + "|(?::" + t + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + t + ":){2}(?:(?::" + t + "){0,3}:" + r + "|(?::" + t + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + t + ":){1}(?:(?::" + t + "){0,4}:" + r + "|(?::" + t + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + t + "){0,5}:" + r + "|(?::" + t + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), f = new RegExp("(?:^" + r + "$)|(?:^" + i + "$)"), a = new RegExp("^" + r + "$"), s = new RegExp("^" + i + "$"), o = function(y) {
    return y && y.exact ? f : new RegExp("(?:" + e(y) + r + e(y) + ")|(?:" + e(y) + i + e(y) + ")", "g");
  };
  o.v4 = function(p) {
    return p && p.exact ? a : new RegExp("" + e(p) + r + e(p), "g");
  }, o.v6 = function(p) {
    return p && p.exact ? s : new RegExp("" + e(p) + i + e(p), "g");
  };
  var b = "(?:(?:[a-z]+:)?//)", l = "(?:\\S+(?::\\S*)?@)?", m = o.v4().source, g = o.v6().source, O = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", q = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", d = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", v = "(?::\\d{2,5})?", u = '(?:[/?#][^\\s"]*)?', E = "(?:" + b + "|www\\.)" + l + "(?:localhost|" + m + "|" + g + "|" + O + q + d + ")" + v + u;
  return $ = new RegExp("(?:^" + E + "$)", "i"), $;
}, ne = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, T = {
  integer: function(e) {
    return T.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return T.number(e) && !T.integer(e);
  },
  array: function(e) {
    return Array.isArray(e);
  },
  regexp: function(e) {
    if (e instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(e);
    } catch {
      return !1;
    }
  },
  date: function(e) {
    return typeof e.getTime == "function" && typeof e.getMonth == "function" && typeof e.getYear == "function" && !isNaN(e.getTime());
  },
  number: function(e) {
    return isNaN(e) ? !1 : typeof e == "number";
  },
  object: function(e) {
    return typeof e == "object" && !T.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match(ne.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(Ee());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(ne.hex);
  }
}, _e = function(e, r, t, i, f) {
  if (e.required && r === void 0) {
    oe(e, r, t, i, f);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = e.type;
  a.indexOf(s) > -1 ? T[s](r) || i.push(x(f.messages.types[s], e.fullField, e.type)) : s && typeof r !== e.type && i.push(x(f.messages.types[s], e.fullField, e.type));
}, Pe = function(e, r, t, i, f) {
  var a = typeof e.len == "number", s = typeof e.min == "number", o = typeof e.max == "number", b = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = r, m = null, g = typeof r == "number", O = typeof r == "string", q = Array.isArray(r);
  if (g ? m = "number" : O ? m = "string" : q && (m = "array"), !m)
    return !1;
  q && (l = r.length), O && (l = r.replace(b, "_").length), a ? l !== e.len && i.push(x(f.messages[m].len, e.fullField, e.len)) : s && !o && l < e.min ? i.push(x(f.messages[m].min, e.fullField, e.min)) : o && !s && l > e.max ? i.push(x(f.messages[m].max, e.fullField, e.max)) : s && o && (l < e.min || l > e.max) && i.push(x(f.messages[m].range, e.fullField, e.min, e.max));
}, S = "enum", je = function(e, r, t, i, f) {
  e[S] = Array.isArray(e[S]) ? e[S] : [], e[S].indexOf(r) === -1 && i.push(x(f.messages[S], e.fullField, e[S].join(", ")));
}, Re = function(e, r, t, i, f) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(r) || i.push(x(f.messages.pattern.mismatch, e.fullField, r, e.pattern));
    else if (typeof e.pattern == "string") {
      var a = new RegExp(e.pattern);
      a.test(r) || i.push(x(f.messages.pattern.mismatch, e.fullField, r, e.pattern));
    }
  }
}, c = {
  required: oe,
  whitespace: Ae,
  type: _e,
  range: Pe,
  enum: je,
  pattern: Re
}, Se = function(e, r, t, i, f) {
  var a = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (h(r, "string") && !e.required)
      return t();
    c.required(e, r, i, a, f, "string"), h(r, "string") || (c.type(e, r, i, a, f), c.range(e, r, i, a, f), c.pattern(e, r, i, a, f), e.whitespace === !0 && c.whitespace(e, r, i, a, f));
  }
  t(a);
}, Ne = function(e, r, t, i, f) {
  var a = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required)
      return t();
    c.required(e, r, i, a, f), r !== void 0 && c.type(e, r, i, a, f);
  }
  t(a);
}, De = function(e, r, t, i, f) {
  var a = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (r === "" && (r = void 0), h(r) && !e.required)
      return t();
    c.required(e, r, i, a, f), r !== void 0 && (c.type(e, r, i, a, f), c.range(e, r, i, a, f));
  }
  t(a);
}, Te = function(e, r, t, i, f) {
  var a = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required)
      return t();
    c.required(e, r, i, a, f), r !== void 0 && c.type(e, r, i, a, f);
  }
  t(a);
}, Ve = function(e, r, t, i, f) {
  var a = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required)
      return t();
    c.required(e, r, i, a, f), h(r) || c.type(e, r, i, a, f);
  }
  t(a);
}, Ie = function(e, r, t, i, f) {
  var a = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required)
      return t();
    c.required(e, r, i, a, f), r !== void 0 && (c.type(e, r, i, a, f), c.range(e, r, i, a, f));
  }
  t(a);
}, Me = function(e, r, t, i, f) {
  var a = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required)
      return t();
    c.required(e, r, i, a, f), r !== void 0 && (c.type(e, r, i, a, f), c.range(e, r, i, a, f));
  }
  t(a);
}, $e = function(e, r, t, i, f) {
  var a = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (r == null && !e.required)
      return t();
    c.required(e, r, i, a, f, "array"), r != null && (c.type(e, r, i, a, f), c.range(e, r, i, a, f));
  }
  t(a);
}, Le = function(e, r, t, i, f) {
  var a = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required)
      return t();
    c.required(e, r, i, a, f), r !== void 0 && c.type(e, r, i, a, f);
  }
  t(a);
}, ze = "enum", Be = function(e, r, t, i, f) {
  var a = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required)
      return t();
    c.required(e, r, i, a, f), r !== void 0 && c[ze](e, r, i, a, f);
  }
  t(a);
}, Ue = function(e, r, t, i, f) {
  var a = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (h(r, "string") && !e.required)
      return t();
    c.required(e, r, i, a, f), h(r, "string") || c.pattern(e, r, i, a, f);
  }
  t(a);
}, Je = function(e, r, t, i, f) {
  var a = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (h(r, "date") && !e.required)
      return t();
    if (c.required(e, r, i, a, f), !h(r, "date")) {
      var o;
      r instanceof Date ? o = r : o = new Date(r), c.type(e, o, i, a, f), o && c.range(e, o.getTime(), i, a, f);
    }
  }
  t(a);
}, We = function(e, r, t, i, f) {
  var a = [], s = Array.isArray(r) ? "array" : typeof r;
  c.required(e, r, i, a, f, s), t(a);
}, z = function(e, r, t, i, f) {
  var a = e.type, s = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (h(r, a) && !e.required)
      return t();
    c.required(e, r, i, s, f, a), h(r, a) || c.type(e, r, i, s, f);
  }
  t(s);
}, Ze = function(e, r, t, i, f) {
  var a = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (h(r) && !e.required)
      return t();
    c.required(e, r, i, a, f);
  }
  t(a);
}, V = {
  string: Se,
  method: Ne,
  number: De,
  boolean: Te,
  regexp: Ve,
  integer: Ie,
  float: Me,
  array: $e,
  object: Le,
  enum: Be,
  pattern: Ue,
  date: Je,
  url: z,
  hex: z,
  email: z,
  required: We,
  any: Ze
};
function Y() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var e = JSON.parse(JSON.stringify(this));
      return e.clone = this.clone, e;
    }
  };
}
var G = Y(), M = /* @__PURE__ */ function() {
  function n(r) {
    this.rules = null, this._messages = G, this.define(r);
  }
  var e = n.prototype;
  return e.define = function(t) {
    var i = this;
    if (!t)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof t != "object" || Array.isArray(t))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(t).forEach(function(f) {
      var a = t[f];
      i.rules[f] = Array.isArray(a) ? a : [a];
    });
  }, e.messages = function(t) {
    return t && (this._messages = te(Y(), t)), this._messages;
  }, e.validate = function(t, i, f) {
    var a = this;
    i === void 0 && (i = {}), f === void 0 && (f = function() {
    });
    var s = t, o = i, b = f;
    if (typeof o == "function" && (b = o, o = {}), !this.rules || Object.keys(this.rules).length === 0)
      return b && b(null, s), Promise.resolve(s);
    function l(d) {
      var v = [], u = {};
      function E(y) {
        if (Array.isArray(y)) {
          var F;
          v = (F = v).concat.apply(F, y);
        } else
          v.push(y);
      }
      for (var p = 0; p < d.length; p++)
        E(d[p]);
      v.length ? (u = Z(v), b(v, u)) : b(null, s);
    }
    if (o.messages) {
      var m = this.messages();
      m === G && (m = Y()), te(m, o.messages), o.messages = m;
    } else
      o.messages = this.messages();
    var g = {}, O = o.keys || Object.keys(this.rules);
    O.forEach(function(d) {
      var v = a.rules[d], u = s[d];
      v.forEach(function(E) {
        var p = E;
        typeof p.transform == "function" && (s === t && (s = R({}, s)), u = s[d] = p.transform(u)), typeof p == "function" ? p = {
          validator: p
        } : p = R({}, p), p.validator = a.getValidationMethod(p), p.validator && (p.field = d, p.fullField = p.fullField || d, p.type = a.getType(p), g[d] = g[d] || [], g[d].push({
          rule: p,
          value: u,
          source: s,
          field: d
        }));
      });
    });
    var q = {};
    return Fe(g, o, function(d, v) {
      var u = d.rule, E = (u.type === "object" || u.type === "array") && (typeof u.fields == "object" || typeof u.defaultField == "object");
      E = E && (u.required || !u.required && d.value), u.field = d.field;
      function p(w, j) {
        return R({}, j, {
          fullField: u.fullField + "." + w,
          fullFields: u.fullFields ? [].concat(u.fullFields, [w]) : [w]
        });
      }
      function y(w) {
        w === void 0 && (w = []);
        var j = Array.isArray(w) ? w : [w];
        !o.suppressWarning && j.length && n.warning("async-validator:", j), j.length && u.message !== void 0 && (j = [].concat(u.message));
        var _ = j.map(re(u, s));
        if (o.first && _.length)
          return q[u.field] = 1, v(_);
        if (!E)
          v(_);
        else {
          if (u.required && !d.value)
            return u.message !== void 0 ? _ = [].concat(u.message).map(re(u, s)) : o.error && (_ = [o.error(u, x(o.messages.required, u.field))]), v(_);
          var D = {};
          u.defaultField && Object.keys(d.value).map(function(P) {
            D[P] = u.defaultField;
          }), D = R({}, D, d.rule.fields);
          var K = {};
          Object.keys(D).forEach(function(P) {
            var A = D[P], ue = Array.isArray(A) ? A : [A];
            K[P] = ue.map(p.bind(null, P));
          });
          var X = new n(K);
          X.messages(o.messages), d.rule.options && (d.rule.options.messages = o.messages, d.rule.options.error = o.error), X.validate(d.value, d.rule.options || o, function(P) {
            var A = [];
            _ && _.length && A.push.apply(A, _), P && P.length && A.push.apply(A, P), v(A.length ? A : null);
          });
        }
      }
      var F;
      if (u.asyncValidator)
        F = u.asyncValidator(u, d.value, y, d.source, o);
      else if (u.validator) {
        try {
          F = u.validator(u, d.value, y, d.source, o);
        } catch (w) {
          console.error == null || console.error(w), o.suppressValidatorError || setTimeout(function() {
            throw w;
          }, 0), y(w.message);
        }
        F === !0 ? y() : F === !1 ? y(typeof u.message == "function" ? u.message(u.fullField || u.field) : u.message || (u.fullField || u.field) + " fails") : F instanceof Array ? y(F) : F instanceof Error && y(F.message);
      }
      F && F.then && F.then(function() {
        return y();
      }, function(w) {
        return y(w);
      });
    }, function(d) {
      l(d);
    }, s);
  }, e.getType = function(t) {
    if (t.type === void 0 && t.pattern instanceof RegExp && (t.type = "pattern"), typeof t.validator != "function" && t.type && !V.hasOwnProperty(t.type))
      throw new Error(x("Unknown rule type %s", t.type));
    return t.type || "string";
  }, e.getValidationMethod = function(t) {
    if (typeof t.validator == "function")
      return t.validator;
    var i = Object.keys(t), f = i.indexOf("message");
    return f !== -1 && i.splice(f, 1), i.length === 1 && i[0] === "required" ? V.required : V[this.getType(t)] || void 0;
  }, n;
}();
M.register = function(e, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  V[e] = r;
};
M.warning = se;
M.messages = G;
M.validators = V;
const ie = ae({
  name: "SFormItem",
  props: me,
  setup(n, {
    slots: e
  }) {
    const {
      error: r
    } = de(n), t = C("LABEL_DATA"), i = B(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": t.value.layout === "horizontal",
      "s-form__item--vertical": t.value.layout === "vertical"
    })), f = B(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": t.value.layout === "vertical",
      [`s-form__label--${t.value.labelAlign}`]: t.value.layout === "horizontal",
      [`s-form__label--${t.value.labelSize}`]: t.value.layout === "horizontal"
    })), a = C(fe), s = H(!1), o = H(""), l = {
      validate: () => {
        if (!a)
          return console.warn("请在Form中使用FormItem"), Promise.reject("请在Form中使用FormItem");
        if (!a.rules)
          return Promise.resolve({
            result: !0
          });
        if (!n.prop)
          return console.warn("如果要校验当前项，请设置prop字段"), Promise.reject("如果要校验当前项，请设置prop字段");
        const m = a.rules[n.prop] || void 0;
        if (!m)
          return Promise.resolve({
            result: !0
          });
        const g = a.model[n.prop];
        return new M({
          [n.prop]: m
        }).validate({
          [n.prop]: g
        }, (q) => {
          q ? (s.value = !0, o.value = q[0].message || "校验错误") : (s.value = !1, o.value = "");
        });
      }
    };
    return U("FORM_ITEM_CTX", l), ce(() => {
      n.prop && (a == null || a.addItem(l));
    }), le(() => {
      n.prop && (a == null || a.removeItem(l));
    }), () => {
      var m;
      return N("div", {
        class: i.value
      }, [N("span", {
        class: f.value
      }, [n.label]), N("div", null, [(m = e.default) == null ? void 0 : m.call(e)]), r.value && N("div", {
        class: "error-message"
      }, [r.value]), s.value && N("div", {
        class: "error-message"
      }, [o.value])]);
    };
  }
}), Ge = {
  install(n) {
    n.component(Q.name, Q), n.component(ie.name, ie);
  }
};
export {
  Q as Form,
  ie as FormItem,
  Ge as default
};
