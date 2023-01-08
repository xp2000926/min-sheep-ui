import { defineComponent as st, toRefs as lt, ref as G, watch as bt, nextTick as Ot, onUnmounted as Et, createVNode as D, Fragment as ct, mergeProps as at } from "vue";
const At = {
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
const Rt = {
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
function S(t) {
  return t.split("-")[1];
}
function z(t) {
  return t === "y" ? "height" : "width";
}
function _(t) {
  return t.split("-")[0];
}
function I(t) {
  return ["top", "bottom"].includes(_(t)) ? "x" : "y";
}
function J(t, e, n) {
  let {
    reference: i,
    floating: o
  } = t;
  const r = i.x + i.width / 2 - o.width / 2, l = i.y + i.height / 2 - o.height / 2, s = I(e), c = z(s), f = i[c] / 2 - o[c] / 2, d = _(e), a = s === "x";
  let u;
  switch (d) {
    case "top":
      u = {
        x: r,
        y: i.y - o.height
      };
      break;
    case "bottom":
      u = {
        x: r,
        y: i.y + i.height
      };
      break;
    case "right":
      u = {
        x: i.x + i.width,
        y: l
      };
      break;
    case "left":
      u = {
        x: i.x - o.width,
        y: l
      };
      break;
    default:
      u = {
        x: i.x,
        y: i.y
      };
  }
  switch (S(e)) {
    case "start":
      u[s] -= f * (n && a ? -1 : 1);
      break;
    case "end":
      u[s] += f * (n && a ? -1 : 1);
      break;
  }
  return u;
}
const Ct = async (t, e, n) => {
  const {
    placement: i = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: l
  } = n, s = r.filter(Boolean), c = await (l.isRTL == null ? void 0 : l.isRTL(e));
  if (process.env.NODE_ENV !== "production") {
    if (l == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), s.filter((x) => {
      let {
        name: y
      } = x;
      return y === "autoPlacement" || y === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!t || !e) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
  }
  let f = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: d,
    y: a
  } = J(f, i, c), u = i, h = {}, p = 0;
  for (let x = 0; x < s.length; x++) {
    const {
      name: y,
      fn: m
    } = s[x], {
      x: w,
      y: v,
      data: b,
      reset: g
    } = await m({
      x: d,
      y: a,
      initialPlacement: i,
      placement: u,
      strategy: o,
      middlewareData: h,
      rects: f,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (d = w ?? d, a = v ?? a, h = {
      ...h,
      [y]: {
        ...h[y],
        ...b
      }
    }, process.env.NODE_ENV !== "production" && p > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), g && p <= 50) {
      p++, typeof g == "object" && (g.placement && (u = g.placement), g.rects && (f = g.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: o
      }) : g.rects), {
        x: d,
        y: a
      } = J(f, u, c)), x = -1;
      continue;
    }
  }
  return {
    x: d,
    y: a,
    placement: u,
    strategy: o,
    middlewareData: h
  };
};
function Pt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ft(t) {
  return typeof t != "number" ? Pt(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function M(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Lt(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: i,
    y: o,
    platform: r,
    rects: l,
    elements: s,
    strategy: c
  } = t, {
    boundary: f = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: a = "floating",
    altBoundary: u = !1,
    padding: h = 0
  } = e, p = ft(h), y = s[u ? a === "floating" ? "reference" : "floating" : a], m = M(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(s.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: c
  })), w = a === "floating" ? {
    ...l.floating,
    x: i,
    y: o
  } : l.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(s.floating)), b = await (r.isElement == null ? void 0 : r.isElement(v)) ? await (r.getScale == null ? void 0 : r.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, g = M(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: v,
    strategy: c
  }) : w);
  return process.env.NODE_ENV, {
    top: (m.top - g.top + p.top) / b.y,
    bottom: (g.bottom - m.bottom + p.bottom) / b.y,
    left: (m.left - g.left + p.left) / b.x,
    right: (g.right - m.right + p.right) / b.x
  };
}
const Tt = Math.min, St = Math.max;
function Dt(t, e, n) {
  return St(t, Tt(e, n));
}
const Vt = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: i = 0
    } = t || {}, {
      x: o,
      y: r,
      placement: l,
      rects: s,
      platform: c
    } = e;
    if (n == null)
      return process.env.NODE_ENV !== "production" && console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const f = ft(i), d = {
      x: o,
      y: r
    }, a = I(l), u = z(a), h = await c.getDimensions(n), p = a === "y" ? "top" : "left", x = a === "y" ? "bottom" : "right", y = s.reference[u] + s.reference[a] - d[a] - s.floating[u], m = d[a] - s.reference[a], w = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(n));
    let v = w ? a === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0;
    v === 0 && (v = s.floating[u]);
    const b = y / 2 - m / 2, g = f[p], T = v - h[u] - f[x], E = v / 2 - h[u] / 2 + b, $ = Dt(g, E, T), F = S(l) != null && E != $ && s.reference[u] / 2 - (E < g ? f[p] : f[x]) - h[u] / 2 < 0 ? E < g ? g - E : T - E : 0;
    return {
      [a]: d[a] - F,
      data: {
        [a]: $,
        centerOffset: E - $
      }
    };
  }
}), Ft = ["top", "right", "bottom", "left"], Q = /* @__PURE__ */ Ft.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []), Bt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Z(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Bt[e]);
}
function Nt(t, e, n) {
  n === void 0 && (n = !1);
  const i = S(t), o = I(t), r = z(o);
  let l = o === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Z(l)), {
    main: l,
    cross: Z(l)
  };
}
const kt = {
  start: "end",
  end: "start"
};
function _t(t) {
  return t.replace(/start|end/g, (e) => kt[e]);
}
function $t(t, e, n) {
  return (t ? [...n.filter((o) => S(o) === t), ...n.filter((o) => S(o) !== t)] : n.filter((o) => _(o) === o)).filter((o) => t ? S(o) === t || (e ? _t(o) !== o : !1) : !0);
}
const Wt = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, i, o;
      const {
        rects: r,
        middlewareData: l,
        placement: s,
        platform: c,
        elements: f
      } = e, {
        alignment: d,
        allowedPlacements: a = Q,
        autoAlignment: u = !0,
        ...h
      } = t, p = d !== void 0 || a === Q ? $t(d || null, u, a) : a, x = await Lt(e, h), y = ((n = l.autoPlacement) == null ? void 0 : n.index) || 0, m = p[y];
      if (m == null)
        return {};
      const {
        main: w,
        cross: v
      } = Nt(m, r, await (c.isRTL == null ? void 0 : c.isRTL(f.floating)));
      if (s !== m)
        return {
          reset: {
            placement: p[0]
          }
        };
      const b = [x[_(m)], x[w], x[v]], g = [...((i = l.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: m,
        overflows: b
      }], T = p[y + 1];
      if (T)
        return {
          data: {
            index: y + 1,
            overflows: g
          },
          reset: {
            placement: T
          }
        };
      const E = g.slice().sort((F, Y) => F.overflows[0] - Y.overflows[0]), X = ((o = E.find((F) => {
        let {
          overflows: Y
        } = F;
        return Y.every((xt) => xt <= 0);
      })) == null ? void 0 : o.placement) || E[0].placement;
      return X !== s ? {
        data: {
          index: y + 1,
          overflows: g
        },
        reset: {
          placement: X
        }
      } : {};
    }
  };
};
async function Mt(t, e) {
  const {
    placement: n,
    platform: i,
    elements: o
  } = t, r = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)), l = _(n), s = S(n), c = I(n) === "x", f = ["left", "top"].includes(l) ? -1 : 1, d = r && c ? -1 : 1, a = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: u,
    crossAxis: h,
    alignmentAxis: p
  } = typeof a == "number" ? {
    mainAxis: a,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...a
  };
  return s && typeof p == "number" && (h = s === "end" ? p * -1 : p), c ? {
    x: h * d,
    y: u * f
  } : {
    x: u * f,
    y: h * d
  };
}
const jt = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: i
      } = e, o = await Mt(e, t);
      return {
        x: n + o.x,
        y: i + o.y,
        data: o
      };
    }
  };
};
function O(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function A(t) {
  return O(t).getComputedStyle(t);
}
function C(t) {
  return dt(t) ? (t.nodeName || "").toLowerCase() : "";
}
let W;
function ut() {
  if (W)
    return W;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (W = t.brands.map((e) => e.brand + "/" + e.version).join(" "), W) : navigator.userAgent;
}
function R(t) {
  return t instanceof O(t).HTMLElement;
}
function P(t) {
  return t instanceof O(t).Element;
}
function dt(t) {
  return t instanceof O(t).Node;
}
function tt(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = O(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function H(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: i,
    display: o
  } = A(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !["inline", "contents"].includes(o);
}
function It(t) {
  return ["table", "td", "th"].includes(C(t));
}
function K(t) {
  const e = /firefox/i.test(ut()), n = A(t), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (i ? i !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(
    (o) => {
      const r = n.contain;
      return r != null ? r.includes(o) : !1;
    }
  );
}
function pt() {
  return !/^((?!chrome|android).)*safari/i.test(ut());
}
function q(t) {
  return ["html", "body", "#document"].includes(C(t));
}
const et = Math.min, B = Math.max, j = Math.round;
function mt(t) {
  const e = A(t);
  let n = parseFloat(e.width), i = parseFloat(e.height);
  const o = t.offsetWidth, r = t.offsetHeight, l = j(n) !== o || j(i) !== r;
  return l && (n = o, i = r), {
    width: n,
    height: i,
    fallback: l
  };
}
function gt(t) {
  return P(t) ? t : t.contextElement;
}
const ht = {
  x: 1,
  y: 1
};
function V(t) {
  const e = gt(t);
  if (!R(e))
    return ht;
  const n = e.getBoundingClientRect(), {
    width: i,
    height: o,
    fallback: r
  } = mt(e);
  let l = (r ? j(n.width) : n.width) / i, s = (r ? j(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
function N(t, e, n, i) {
  var o, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), s = gt(t);
  let c = ht;
  e && (i ? P(i) && (c = V(i)) : c = V(t));
  const f = s ? O(s) : window, d = !pt() && n;
  let a = (l.left + (d && ((o = f.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / c.x, u = (l.top + (d && ((r = f.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / c.y, h = l.width / c.x, p = l.height / c.y;
  if (s) {
    const x = O(s), y = i && P(i) ? O(i) : i;
    let m = x.frameElement;
    for (; m && i && y !== x; ) {
      const w = V(m), v = m.getBoundingClientRect(), b = getComputedStyle(m);
      v.x += (m.clientLeft + parseFloat(b.paddingLeft)) * w.x, v.y += (m.clientTop + parseFloat(b.paddingTop)) * w.y, a *= w.x, u *= w.y, h *= w.x, p *= w.y, a += v.x, u += v.y, m = O(m).frameElement;
    }
  }
  return {
    width: h,
    height: p,
    top: u,
    right: a + h,
    bottom: u + p,
    left: a,
    x: a,
    y: u
  };
}
function L(t) {
  return ((dt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function U(t) {
  return P(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function wt(t) {
  return N(L(t)).left + U(t).scrollLeft;
}
function Ht(t, e, n) {
  const i = R(e), o = L(e), r = N(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = {
    x: 0,
    y: 0
  };
  if (i || !i && n !== "fixed")
    if ((C(e) !== "body" || H(o)) && (l = U(e)), R(e)) {
      const c = N(e, !0);
      s.x = c.x + e.clientLeft, s.y = c.y + e.clientTop;
    } else
      o && (s.x = wt(o));
  return {
    x: r.left + l.scrollLeft - s.x,
    y: r.top + l.scrollTop - s.y,
    width: r.width,
    height: r.height
  };
}
function k(t) {
  if (C(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (tt(t) ? t.host : null) || L(t);
  return tt(e) ? e.host : e;
}
function nt(t) {
  return !R(t) || A(t).position === "fixed" ? null : t.offsetParent;
}
function Ut(t) {
  let e = k(t);
  for (; R(e) && !q(e); ) {
    if (K(e))
      return e;
    e = k(e);
  }
  return null;
}
function ot(t) {
  const e = O(t);
  let n = nt(t);
  for (; n && It(n) && A(n).position === "static"; )
    n = nt(n);
  return n && (C(n) === "html" || C(n) === "body" && A(n).position === "static" && !K(n)) ? e : n || Ut(t) || e;
}
function Xt(t) {
  return mt(t);
}
function Yt(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: i
  } = t;
  const o = R(n), r = L(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 1,
    y: 1
  };
  const c = {
    x: 0,
    y: 0
  };
  if ((o || !o && i !== "fixed") && ((C(n) !== "body" || H(r)) && (l = U(n)), R(n))) {
    const f = N(n);
    s = V(n), c.x = f.x + n.clientLeft, c.y = f.y + n.clientTop;
  }
  return {
    width: e.width * s.x,
    height: e.height * s.y,
    x: e.x * s.x - l.scrollLeft * s.x + c.x,
    y: e.y * s.y - l.scrollTop * s.y + c.y
  };
}
function zt(t, e) {
  const n = O(t), i = L(t), o = n.visualViewport;
  let r = i.clientWidth, l = i.clientHeight, s = 0, c = 0;
  if (o) {
    r = o.width, l = o.height;
    const f = pt();
    (f || !f && e === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: s,
    y: c
  };
}
function Kt(t) {
  var e;
  const n = L(t), i = U(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, r = B(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = B(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let s = -i.scrollLeft + wt(t);
  const c = -i.scrollTop;
  return A(o || n).direction === "rtl" && (s += B(n.clientWidth, o ? o.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: s,
    y: c
  };
}
function yt(t) {
  const e = k(t);
  return q(e) ? t.ownerDocument.body : R(e) && H(e) ? e : yt(e);
}
function vt(t, e) {
  var n;
  e === void 0 && (e = []);
  const i = yt(t), o = i === ((n = t.ownerDocument) == null ? void 0 : n.body), r = O(i);
  return o ? e.concat(r, r.visualViewport || [], H(i) ? i : []) : e.concat(i, vt(i));
}
function qt(t, e) {
  const n = N(t, !0, e === "fixed"), i = n.top + t.clientTop, o = n.left + t.clientLeft, r = R(t) ? V(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, s = t.clientHeight * r.y, c = o * r.x, f = i * r.y;
  return {
    top: f,
    left: c,
    right: c + l,
    bottom: f + s,
    x: c,
    y: f,
    width: l,
    height: s
  };
}
function it(t, e, n) {
  return e === "viewport" ? M(zt(t, n)) : P(e) ? qt(e, n) : M(Kt(L(t)));
}
function Gt(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let i = vt(t).filter((s) => P(s) && C(s) !== "body"), o = null;
  const r = A(t).position === "fixed";
  let l = r ? k(t) : t;
  for (; P(l) && !q(l); ) {
    const s = A(l), c = K(l);
    (r ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) ? i = i.filter((d) => d !== l) : o = s, l = k(l);
  }
  return e.set(t, i), i;
}
function Jt(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: i,
    strategy: o
  } = t;
  const l = [...n === "clippingAncestors" ? Gt(e, this._c) : [].concat(n), i], s = l[0], c = l.reduce((f, d) => {
    const a = it(e, d, o);
    return f.top = B(a.top, f.top), f.right = et(a.right, f.right), f.bottom = et(a.bottom, f.bottom), f.left = B(a.left, f.left), f;
  }, it(e, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
const Qt = {
  getClippingRect: Jt,
  convertOffsetParentRelativeRectToViewportRelativeRect: Yt,
  isElement: P,
  getDimensions: Xt,
  getOffsetParent: ot,
  getDocumentElement: L,
  getScale: V,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: i
    } = t;
    const o = this.getOffsetParent || ot, r = this.getDimensions;
    return {
      reference: Ht(e, await o(n), i),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => A(t).direction === "rtl"
}, Zt = (t, e, n) => {
  const i = /* @__PURE__ */ new Map(), o = {
    platform: Qt,
    ...n
  }, r = {
    ...o.platform,
    _c: i
  };
  return Ct(t, e, {
    ...o,
    platform: r
  });
};
const te = st({
  name: "SBasePopover",
  props: Rt,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    attrs: n
  }) {
    const {
      host: i,
      modelValue: o,
      showArrow: r,
      placement: l
    } = lt(t), s = G(), c = G(), f = () => {
      const a = [];
      r.value && (a.push(jt(8)), a.push(Vt({
        element: s.value
      }))), l.value || a.push(Wt()), Zt(i.value, c.value, {
        middleware: a,
        placement: l.value || "bottom"
      }).then(({
        x: u,
        y: h,
        middlewareData: p,
        placement: x
      }) => {
        if (Object.assign(c.value.style, {
          left: `${u}px`,
          top: `${h}px`
        }), r.value) {
          const {
            x: y,
            y: m
          } = p.arrow, w = x.split("-")[0], v = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[w], b = ["top", "right", "bottom", "left"], g = b.indexOf(w) - 1, T = b[g < 0 ? g + 4 : g];
          Object.assign(s.value.style, {
            left: `${y}px`,
            top: `${m}px`,
            [v]: "-4px",
            [`border-${w}-color`]: "transparent",
            [`border-${T}-color`]: "transparent"
          });
        }
      });
    }, d = new MutationObserver(() => f());
    return bt(o, (a) => {
      a ? (Ot(f), i.value && d.observe(i.value, {
        attributes: !0
      }), window.addEventListener("resize", f), window.addEventListener("scroll", f)) : (d.disconnect(), window.removeEventListener("resize", f), window.removeEventListener("scroll", f));
    }, {
      immediate: !0
    }), Et(() => {
      d.disconnect(), window.removeEventListener("resize", f), window.removeEventListener("scroll", f);
    }), () => {
      var a;
      return D(ct, null, [o.value && D("div", at({
        ref: c,
        class: "s-base-popover"
      }, n), [(a = e.default) == null ? void 0 : a.call(e), r.value && D("div", {
        class: "s-base-popover__arrow",
        ref: s
      }, null)])]);
    };
  }
}), rt = st({
  name: "SPopover",
  props: At,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const {
      modelValue: n,
      title: i
    } = lt(t);
    return () => D(ct, null, [n.value && D(te, at({
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
}), ne = {
  install(t) {
    t.component(rt.name, rt);
  }
};
export {
  rt as Popover,
  ne as default
};
