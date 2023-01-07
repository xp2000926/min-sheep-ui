import { defineComponent as tt, toRefs as et, ref as X, watch as mt, nextTick as gt, createVNode as D, Fragment as nt, mergeProps as ot } from "vue";
const wt = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  host: {
    type: Object,
    default: () => null
  },
  title: {
    type: String,
    default: ""
  },
  showArrow: {
    type: Boolean,
    default: !1
  },
  placement: {
    type: String,
    default: "bottom"
  }
};
const yt = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  host: {
    type: Object,
    default: () => null
  },
  showArrow: {
    type: Boolean,
    default: !1
  },
  placement: {
    type: String,
    default: "bottom"
  }
};
function _(t) {
  return t.split("-")[1];
}
function it(t) {
  return t === "y" ? "height" : "width";
}
function j(t) {
  return t.split("-")[0];
}
function I(t) {
  return ["top", "bottom"].includes(j(t)) ? "x" : "y";
}
function Y(t, e, n) {
  let {
    reference: i,
    floating: o
  } = t;
  const l = i.x + i.width / 2 - o.width / 2, s = i.y + i.height / 2 - o.height / 2, r = I(e), c = it(r), a = i[c] / 2 - o[c] / 2, d = j(e), f = r === "x";
  let u;
  switch (d) {
    case "top":
      u = {
        x: l,
        y: i.y - o.height
      };
      break;
    case "bottom":
      u = {
        x: l,
        y: i.y + i.height
      };
      break;
    case "right":
      u = {
        x: i.x + i.width,
        y: s
      };
      break;
    case "left":
      u = {
        x: i.x - o.width,
        y: s
      };
      break;
    default:
      u = {
        x: i.x,
        y: i.y
      };
  }
  switch (_(e)) {
    case "start":
      u[r] -= a * (n && f ? -1 : 1);
      break;
    case "end":
      u[r] += a * (n && f ? -1 : 1);
      break;
  }
  return u;
}
const xt = async (t, e, n) => {
  const {
    placement: i = "bottom",
    strategy: o = "absolute",
    middleware: l = [],
    platform: s
  } = n, r = l.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(e));
  if (process.env.NODE_ENV !== "production") {
    if (s == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), r.filter((y) => {
      let {
        name: v
      } = y;
      return v === "autoPlacement" || v === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!t || !e) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
  }
  let a = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: d,
    y: f
  } = Y(a, i, c), u = i, p = {}, h = 0;
  for (let y = 0; y < r.length; y++) {
    const {
      name: v,
      fn: m
    } = r[y], {
      x: g,
      y: w,
      data: A,
      reset: x
    } = await m({
      x: d,
      y: f,
      initialPlacement: i,
      placement: u,
      strategy: o,
      middlewareData: p,
      rects: a,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (d = g ?? d, f = w ?? f, p = {
      ...p,
      [v]: {
        ...p[v],
        ...A
      }
    }, process.env.NODE_ENV !== "production" && h > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), x && h <= 50) {
      h++, typeof x == "object" && (x.placement && (u = x.placement), x.rects && (a = x.rects === !0 ? await s.getElementRects({
        reference: t,
        floating: e,
        strategy: o
      }) : x.rects), {
        x: d,
        y: f
      } = Y(a, u, c)), y = -1;
      continue;
    }
  }
  return {
    x: d,
    y: f,
    placement: u,
    strategy: o,
    middlewareData: p
  };
};
function bt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function vt(t) {
  return typeof t != "number" ? bt(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function z(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
const At = Math.min, Ct = Math.max;
function Ot(t, e, n) {
  return Ct(t, At(e, n));
}
const Tt = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: i = 0
    } = t || {}, {
      x: o,
      y: l,
      placement: s,
      rects: r,
      platform: c
    } = e;
    if (n == null)
      return process.env.NODE_ENV !== "production" && console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const a = vt(i), d = {
      x: o,
      y: l
    }, f = I(s), u = it(f), p = await c.getDimensions(n), h = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", v = r.reference[u] + r.reference[f] - d[f] - r.floating[u], m = d[f] - r.reference[f], g = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(n));
    let w = g ? f === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = r.floating[u]);
    const A = v / 2 - m / 2, x = a[h], U = w - p[u] - a[y], L = w / 2 - p[u] / 2 + A, $ = Ot(x, L, U), ht = _(s) != null && L != $ && r.reference[u] / 2 - (L < x ? a[h] : a[y]) - p[u] / 2 < 0 ? L < x ? x - L : U - L : 0;
    return {
      [f]: d[f] - ht,
      data: {
        [f]: $,
        centerOffset: L - $
      }
    };
  }
});
async function Et(t, e) {
  const {
    placement: n,
    platform: i,
    elements: o
  } = t, l = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)), s = j(n), r = _(n), c = I(n) === "x", a = ["left", "top"].includes(s) ? -1 : 1, d = l && c ? -1 : 1, f = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: u,
    crossAxis: p,
    alignmentAxis: h
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return r && typeof h == "number" && (p = r === "end" ? h * -1 : h), c ? {
    x: p * d,
    y: u * a
  } : {
    x: u * a,
    y: p * d
  };
}
const Rt = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: i
      } = e, o = await Et(e, t);
      return {
        x: n + o.x,
        y: i + o.y,
        data: o
      };
    }
  };
};
function b(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function C(t) {
  return b(t).getComputedStyle(t);
}
function T(t) {
  return st(t) ? (t.nodeName || "").toLowerCase() : "";
}
let P;
function rt() {
  if (P)
    return P;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (P = t.brands.map((e) => e.brand + "/" + e.version).join(" "), P) : navigator.userAgent;
}
function O(t) {
  return t instanceof b(t).HTMLElement;
}
function E(t) {
  return t instanceof b(t).Element;
}
function st(t) {
  return t instanceof b(t).Node;
}
function K(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = b(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function k(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: i,
    display: o
  } = C(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !["inline", "contents"].includes(o);
}
function Lt(t) {
  return ["table", "td", "th"].includes(T(t));
}
function M(t) {
  const e = /firefox/i.test(rt()), n = C(t), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (i ? i !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(
    (o) => {
      const l = n.contain;
      return l != null ? l.includes(o) : !1;
    }
  );
}
function lt() {
  return !/^((?!chrome|android).)*safari/i.test(rt());
}
function H(t) {
  return ["html", "body", "#document"].includes(T(t));
}
const q = Math.min, F = Math.max, B = Math.round;
function ct(t) {
  const e = C(t);
  let n = parseFloat(e.width), i = parseFloat(e.height);
  const o = t.offsetWidth, l = t.offsetHeight, s = B(n) !== o || B(i) !== l;
  return s && (n = o, i = l), {
    width: n,
    height: i,
    fallback: s
  };
}
function at(t) {
  return E(t) ? t : t.contextElement;
}
const ft = {
  x: 1,
  y: 1
};
function V(t) {
  const e = at(t);
  if (!O(e))
    return ft;
  const n = e.getBoundingClientRect(), {
    width: i,
    height: o,
    fallback: l
  } = ct(e);
  let s = (l ? B(n.width) : n.width) / i, r = (l ? B(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!r || !Number.isFinite(r)) && (r = 1), {
    x: s,
    y: r
  };
}
function N(t, e, n, i) {
  var o, l;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const s = t.getBoundingClientRect(), r = at(t);
  let c = ft;
  e && (i ? E(i) && (c = V(i)) : c = V(t));
  const a = r ? b(r) : window, d = !lt() && n;
  let f = (s.left + (d && ((o = a.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / c.x, u = (s.top + (d && ((l = a.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / c.y, p = s.width / c.x, h = s.height / c.y;
  if (r) {
    const y = b(r), v = i && E(i) ? b(i) : i;
    let m = y.frameElement;
    for (; m && i && v !== y; ) {
      const g = V(m), w = m.getBoundingClientRect(), A = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(A.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(A.paddingTop)) * g.y, f *= g.x, u *= g.y, p *= g.x, h *= g.y, f += w.x, u += w.y, m = b(m).frameElement;
    }
  }
  return {
    width: p,
    height: h,
    top: u,
    right: f + p,
    bottom: u + h,
    left: f,
    x: f,
    y: u
  };
}
function R(t) {
  return ((st(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function W(t) {
  return E(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function ut(t) {
  return N(R(t)).left + W(t).scrollLeft;
}
function Dt(t, e, n) {
  const i = O(e), o = R(e), l = N(t, !0, n === "fixed", e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const r = {
    x: 0,
    y: 0
  };
  if (i || !i && n !== "fixed")
    if ((T(e) !== "body" || k(o)) && (s = W(e)), O(e)) {
      const c = N(e, !0);
      r.x = c.x + e.clientLeft, r.y = c.y + e.clientTop;
    } else
      o && (r.x = ut(o));
  return {
    x: l.left + s.scrollLeft - r.x,
    y: l.top + s.scrollTop - r.y,
    width: l.width,
    height: l.height
  };
}
function S(t) {
  if (T(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (K(t) ? t.host : null) || R(t);
  return K(e) ? e.host : e;
}
function G(t) {
  return !O(t) || C(t).position === "fixed" ? null : t.offsetParent;
}
function Vt(t) {
  let e = S(t);
  for (; O(e) && !H(e); ) {
    if (M(e))
      return e;
    e = S(e);
  }
  return null;
}
function J(t) {
  const e = b(t);
  let n = G(t);
  for (; n && Lt(n) && C(n).position === "static"; )
    n = G(n);
  return n && (T(n) === "html" || T(n) === "body" && C(n).position === "static" && !M(n)) ? e : n || Vt(t) || e;
}
function Ft(t) {
  return ct(t);
}
function Nt(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: i
  } = t;
  const o = O(n), l = R(n);
  if (n === l)
    return e;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, r = {
    x: 1,
    y: 1
  };
  const c = {
    x: 0,
    y: 0
  };
  if ((o || !o && i !== "fixed") && ((T(n) !== "body" || k(l)) && (s = W(n)), O(n))) {
    const a = N(n);
    r = V(n), c.x = a.x + n.clientLeft, c.y = a.y + n.clientTop;
  }
  return {
    width: e.width * r.x,
    height: e.height * r.y,
    x: e.x * r.x - s.scrollLeft * r.x + c.x,
    y: e.y * r.y - s.scrollTop * r.y + c.y
  };
}
function St(t, e) {
  const n = b(t), i = R(t), o = n.visualViewport;
  let l = i.clientWidth, s = i.clientHeight, r = 0, c = 0;
  if (o) {
    l = o.width, s = o.height;
    const a = lt();
    (a || !a && e === "fixed") && (r = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: l,
    height: s,
    x: r,
    y: c
  };
}
function Pt(t) {
  var e;
  const n = R(t), i = W(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, l = F(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = F(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let r = -i.scrollLeft + ut(t);
  const c = -i.scrollTop;
  return C(o || n).direction === "rtl" && (r += F(n.clientWidth, o ? o.clientWidth : 0) - l), {
    width: l,
    height: s,
    x: r,
    y: c
  };
}
function dt(t) {
  const e = S(t);
  return H(e) ? t.ownerDocument.body : O(e) && k(e) ? e : dt(e);
}
function pt(t, e) {
  var n;
  e === void 0 && (e = []);
  const i = dt(t), o = i === ((n = t.ownerDocument) == null ? void 0 : n.body), l = b(i);
  return o ? e.concat(l, l.visualViewport || [], k(i) ? i : []) : e.concat(i, pt(i));
}
function Bt(t, e) {
  const n = N(t, !0, e === "fixed"), i = n.top + t.clientTop, o = n.left + t.clientLeft, l = O(t) ? V(t) : {
    x: 1,
    y: 1
  }, s = t.clientWidth * l.x, r = t.clientHeight * l.y, c = o * l.x, a = i * l.y;
  return {
    top: a,
    left: c,
    right: c + s,
    bottom: a + r,
    x: c,
    y: a,
    width: s,
    height: r
  };
}
function Q(t, e, n) {
  return e === "viewport" ? z(St(t, n)) : E(e) ? Bt(e, n) : z(Pt(R(t)));
}
function kt(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let i = pt(t).filter((r) => E(r) && T(r) !== "body"), o = null;
  const l = C(t).position === "fixed";
  let s = l ? S(t) : t;
  for (; E(s) && !H(s); ) {
    const r = C(s), c = M(s);
    (l ? !c && !o : !c && r.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) ? i = i.filter((d) => d !== s) : o = r, s = S(s);
  }
  return e.set(t, i), i;
}
function Wt(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: i,
    strategy: o
  } = t;
  const s = [...n === "clippingAncestors" ? kt(e, this._c) : [].concat(n), i], r = s[0], c = s.reduce((a, d) => {
    const f = Q(e, d, o);
    return a.top = F(f.top, a.top), a.right = q(f.right, a.right), a.bottom = q(f.bottom, a.bottom), a.left = F(f.left, a.left), a;
  }, Q(e, r, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
const $t = {
  getClippingRect: Wt,
  convertOffsetParentRelativeRectToViewportRelativeRect: Nt,
  isElement: E,
  getDimensions: Ft,
  getOffsetParent: J,
  getDocumentElement: R,
  getScale: V,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: i
    } = t;
    const o = this.getOffsetParent || J, l = this.getDimensions;
    return {
      reference: Dt(e, await o(n), i),
      floating: {
        x: 0,
        y: 0,
        ...await l(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => C(t).direction === "rtl"
}, _t = (t, e, n) => {
  const i = /* @__PURE__ */ new Map(), o = {
    platform: $t,
    ...n
  }, l = {
    ...o.platform,
    _c: i
  };
  return xt(t, e, {
    ...o,
    platform: l
  });
};
const jt = tt({
  name: "SBasePopover",
  props: yt,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    attrs: n
  }) {
    const {
      host: i,
      modelValue: o,
      showArrow: l,
      placement: s
    } = et(t), r = X(), c = X(), a = () => {
      const d = [];
      l.value && (d.push(Rt(8)), d.push(Tt({
        element: r.value
      }))), _t(i.value, c.value, {
        middleware: d,
        placement: s.value
      }).then(({
        x: f,
        y: u,
        middlewareData: p,
        placement: h
      }) => {
        if (Object.assign(c.value.style, {
          left: `${f}px`,
          top: `${u}px`
        }), l.value) {
          const {
            x: y,
            y: v
          } = p.arrow, m = h.split("-")[0], g = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[m], w = ["top", "right", "bottom", "left"], A = w.indexOf(m) - 1, x = w[A < 0 ? A + 4 : A];
          Object.assign(r.value.style, {
            left: `${y}px`,
            top: `${v}px`,
            [g]: "-4px",
            [`border-${m}-color`]: "transparent",
            [`border-${x}-color`]: "transparent"
          });
        }
      });
    };
    return mt(o, (d) => {
      d && gt(a);
    }, {
      immediate: !0
    }), () => {
      var d;
      return D(nt, null, [o.value && D("div", ot({
        ref: c,
        class: "s-base-popover"
      }, n), [(d = e.default) == null ? void 0 : d.call(e), l.value && D("div", {
        class: "s-base-popover__arrow",
        ref: r
      }, null)])]);
    };
  }
}), Z = tt({
  name: "SPopover",
  props: wt,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const {
      modelValue: n,
      title: i
    } = et(t);
    return () => D(nt, null, [n.value && D(jt, ot({
      class: "s-popover"
    }, t), {
      default: () => {
        var o;
        return [D("h4", {
          class: "s-popover__title"
        }, [i.value]), (o = e.default) == null ? void 0 : o.call(e)];
      }
    })]);
  }
}), Ht = {
  install(t) {
    t.component(Z.name, Z);
  }
};
export {
  Z as Popover,
  Ht as default
};
