import { defineComponent as wt, toRefs as yt, ref as G, watch as xt, nextTick as vt, onUnmounted as bt, createVNode as Y, Fragment as Ot, mergeProps as Et } from "vue";
const At = {
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
function k(t) {
  return t.split("-")[0];
}
function j(t) {
  return ["top", "bottom"].includes(k(t)) ? "x" : "y";
}
function J(t, e, n) {
  let {
    reference: i,
    floating: o
  } = t;
  const r = i.x + i.width / 2 - o.width / 2, l = i.y + i.height / 2 - o.height / 2, s = j(e), c = z(s), f = i[c] / 2 - o[c] / 2, d = k(e), a = s === "x";
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
const Rt = async (t, e, n) => {
  const {
    placement: i = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: l
  } = n, s = r.filter(Boolean), c = await (l.isRTL == null ? void 0 : l.isRTL(e));
  if (process.env.NODE_ENV !== "production") {
    if (l == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), s.filter((v) => {
      let {
        name: y
      } = v;
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
  for (let v = 0; v < s.length; v++) {
    const {
      name: y,
      fn: m
    } = s[v], {
      x: w,
      y: x,
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
    if (d = w ?? d, a = x ?? a, h = {
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
      } = J(f, u, c)), v = -1;
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
function Ct(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function st(t) {
  return typeof t != "number" ? Ct(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function W(t) {
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
  } = e, p = st(h), y = s[u ? a === "floating" ? "reference" : "floating" : a], m = W(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(s.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: c
  })), w = a === "floating" ? {
    ...l.floating,
    x: i,
    y: o
  } : l.reference, x = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(s.floating)), b = await (r.isElement == null ? void 0 : r.isElement(x)) ? await (r.getScale == null ? void 0 : r.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, g = W(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: x,
    strategy: c
  }) : w);
  return process.env.NODE_ENV, {
    top: (m.top - g.top + p.top) / b.y,
    bottom: (g.bottom - m.bottom + p.bottom) / b.y,
    left: (m.left - g.left + p.left) / b.x,
    right: (g.right - m.right + p.right) / b.x
  };
}
const Tt = Math.min, Pt = Math.max;
function St(t, e, n) {
  return Pt(t, Tt(e, n));
}
const Dt = (t) => ({
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
    const f = st(i), d = {
      x: o,
      y: r
    }, a = j(l), u = z(a), h = await c.getDimensions(n), p = a === "y" ? "top" : "left", v = a === "y" ? "bottom" : "right", y = s.reference[u] + s.reference[a] - d[a] - s.floating[u], m = d[a] - s.reference[a], w = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(n));
    let x = w ? a === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0;
    x === 0 && (x = s.floating[u]);
    const b = y / 2 - m / 2, g = f[p], P = x - h[u] - f[v], E = x / 2 - h[u] / 2 + b, $ = St(g, E, P), F = S(l) != null && E != $ && s.reference[u] / 2 - (E < g ? f[p] : f[v]) - h[u] / 2 < 0 ? E < g ? g - E : P - E : 0;
    return {
      [a]: d[a] - F,
      data: {
        [a]: $,
        centerOffset: E - $
      }
    };
  }
}), Ft = ["top", "right", "bottom", "left"], Q = /* @__PURE__ */ Ft.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []), Nt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Z(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Nt[e]);
}
function Vt(t, e, n) {
  n === void 0 && (n = !1);
  const i = S(t), o = j(t), r = z(o);
  let l = o === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Z(l)), {
    main: l,
    cross: Z(l)
  };
}
const Bt = {
  start: "end",
  end: "start"
};
function kt(t) {
  return t.replace(/start|end/g, (e) => Bt[e]);
}
function $t(t, e, n) {
  return (t ? [...n.filter((o) => S(o) === t), ...n.filter((o) => S(o) !== t)] : n.filter((o) => k(o) === o)).filter((o) => t ? S(o) === t || (e ? kt(o) !== o : !1) : !0);
}
const _t = function(t) {
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
      } = t, p = d !== void 0 || a === Q ? $t(d || null, u, a) : a, v = await Lt(e, h), y = ((n = l.autoPlacement) == null ? void 0 : n.index) || 0, m = p[y];
      if (m == null)
        return {};
      const {
        main: w,
        cross: x
      } = Vt(m, r, await (c.isRTL == null ? void 0 : c.isRTL(f.floating)));
      if (s !== m)
        return {
          reset: {
            placement: p[0]
          }
        };
      const b = [v[k(m)], v[w], v[x]], g = [...((i = l.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: m,
        overflows: b
      }], P = p[y + 1];
      if (P)
        return {
          data: {
            index: y + 1,
            overflows: g
          },
          reset: {
            placement: P
          }
        };
      const E = g.slice().sort((F, X) => F.overflows[0] - X.overflows[0]), U = ((o = E.find((F) => {
        let {
          overflows: X
        } = F;
        return X.every((ht) => ht <= 0);
      })) == null ? void 0 : o.placement) || E[0].placement;
      return U !== s ? {
        data: {
          index: y + 1,
          overflows: g
        },
        reset: {
          placement: U
        }
      } : {};
    }
  };
};
async function Wt(t, e) {
  const {
    placement: n,
    platform: i,
    elements: o
  } = t, r = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)), l = k(n), s = S(n), c = j(n) === "x", f = ["left", "top"].includes(l) ? -1 : 1, d = r && c ? -1 : 1, a = typeof e == "function" ? e(t) : e;
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
const Mt = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: i
      } = e, o = await Wt(e, t);
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
  return ct(t) ? (t.nodeName || "").toLowerCase() : "";
}
let _;
function lt() {
  if (_)
    return _;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (_ = t.brands.map((e) => e.brand + "/" + e.version).join(" "), _) : navigator.userAgent;
}
function R(t) {
  return t instanceof O(t).HTMLElement;
}
function L(t) {
  return t instanceof O(t).Element;
}
function ct(t) {
  return t instanceof O(t).Node;
}
function tt(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = O(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function I(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: i,
    display: o
  } = A(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !["inline", "contents"].includes(o);
}
function jt(t) {
  return ["table", "td", "th"].includes(C(t));
}
function K(t) {
  const e = /firefox/i.test(lt()), n = A(t), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (i ? i !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(
    (o) => {
      const r = n.contain;
      return r != null ? r.includes(o) : !1;
    }
  );
}
function at() {
  return !/^((?!chrome|android).)*safari/i.test(lt());
}
function q(t) {
  return ["html", "body", "#document"].includes(C(t));
}
const et = Math.min, N = Math.max, M = Math.round;
function ft(t) {
  const e = A(t);
  let n = parseFloat(e.width), i = parseFloat(e.height);
  const o = t.offsetWidth, r = t.offsetHeight, l = M(n) !== o || M(i) !== r;
  return l && (n = o, i = r), {
    width: n,
    height: i,
    fallback: l
  };
}
function ut(t) {
  return L(t) ? t : t.contextElement;
}
const dt = {
  x: 1,
  y: 1
};
function D(t) {
  const e = ut(t);
  if (!R(e))
    return dt;
  const n = e.getBoundingClientRect(), {
    width: i,
    height: o,
    fallback: r
  } = ft(e);
  let l = (r ? M(n.width) : n.width) / i, s = (r ? M(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
function V(t, e, n, i) {
  var o, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), s = ut(t);
  let c = dt;
  e && (i ? L(i) && (c = D(i)) : c = D(t));
  const f = s ? O(s) : window, d = !at() && n;
  let a = (l.left + (d && ((o = f.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / c.x, u = (l.top + (d && ((r = f.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / c.y, h = l.width / c.x, p = l.height / c.y;
  if (s) {
    const v = O(s), y = i && L(i) ? O(i) : i;
    let m = v.frameElement;
    for (; m && i && y !== v; ) {
      const w = D(m), x = m.getBoundingClientRect(), b = getComputedStyle(m);
      x.x += (m.clientLeft + parseFloat(b.paddingLeft)) * w.x, x.y += (m.clientTop + parseFloat(b.paddingTop)) * w.y, a *= w.x, u *= w.y, h *= w.x, p *= w.y, a += x.x, u += x.y, m = O(m).frameElement;
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
function T(t) {
  return ((ct(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function H(t) {
  return L(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function pt(t) {
  return V(T(t)).left + H(t).scrollLeft;
}
function It(t, e, n) {
  const i = R(e), o = T(e), r = V(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = {
    x: 0,
    y: 0
  };
  if (i || !i && n !== "fixed")
    if ((C(e) !== "body" || I(o)) && (l = H(e)), R(e)) {
      const c = V(e, !0);
      s.x = c.x + e.clientLeft, s.y = c.y + e.clientTop;
    } else
      o && (s.x = pt(o));
  return {
    x: r.left + l.scrollLeft - s.x,
    y: r.top + l.scrollTop - s.y,
    width: r.width,
    height: r.height
  };
}
function B(t) {
  if (C(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (tt(t) ? t.host : null) || T(t);
  return tt(e) ? e.host : e;
}
function nt(t) {
  return !R(t) || A(t).position === "fixed" ? null : t.offsetParent;
}
function Ht(t) {
  let e = B(t);
  for (; R(e) && !q(e); ) {
    if (K(e))
      return e;
    e = B(e);
  }
  return null;
}
function ot(t) {
  const e = O(t);
  let n = nt(t);
  for (; n && jt(n) && A(n).position === "static"; )
    n = nt(n);
  return n && (C(n) === "html" || C(n) === "body" && A(n).position === "static" && !K(n)) ? e : n || Ht(t) || e;
}
function Ut(t) {
  return ft(t);
}
function Xt(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: i
  } = t;
  const o = R(n), r = T(n);
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
  if ((o || !o && i !== "fixed") && ((C(n) !== "body" || I(r)) && (l = H(n)), R(n))) {
    const f = V(n);
    s = D(n), c.x = f.x + n.clientLeft, c.y = f.y + n.clientTop;
  }
  return {
    width: e.width * s.x,
    height: e.height * s.y,
    x: e.x * s.x - l.scrollLeft * s.x + c.x,
    y: e.y * s.y - l.scrollTop * s.y + c.y
  };
}
function Yt(t, e) {
  const n = O(t), i = T(t), o = n.visualViewport;
  let r = i.clientWidth, l = i.clientHeight, s = 0, c = 0;
  if (o) {
    r = o.width, l = o.height;
    const f = at();
    (f || !f && e === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: s,
    y: c
  };
}
function zt(t) {
  var e;
  const n = T(t), i = H(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, r = N(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = N(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let s = -i.scrollLeft + pt(t);
  const c = -i.scrollTop;
  return A(o || n).direction === "rtl" && (s += N(n.clientWidth, o ? o.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: s,
    y: c
  };
}
function mt(t) {
  const e = B(t);
  return q(e) ? t.ownerDocument.body : R(e) && I(e) ? e : mt(e);
}
function gt(t, e) {
  var n;
  e === void 0 && (e = []);
  const i = mt(t), o = i === ((n = t.ownerDocument) == null ? void 0 : n.body), r = O(i);
  return o ? e.concat(r, r.visualViewport || [], I(i) ? i : []) : e.concat(i, gt(i));
}
function Kt(t, e) {
  const n = V(t, !0, e === "fixed"), i = n.top + t.clientTop, o = n.left + t.clientLeft, r = R(t) ? D(t) : {
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
  return e === "viewport" ? W(Yt(t, n)) : L(e) ? Kt(e, n) : W(zt(T(t)));
}
function qt(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let i = gt(t).filter((s) => L(s) && C(s) !== "body"), o = null;
  const r = A(t).position === "fixed";
  let l = r ? B(t) : t;
  for (; L(l) && !q(l); ) {
    const s = A(l), c = K(l);
    (r ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) ? i = i.filter((d) => d !== l) : o = s, l = B(l);
  }
  return e.set(t, i), i;
}
function Gt(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: i,
    strategy: o
  } = t;
  const l = [...n === "clippingAncestors" ? qt(e, this._c) : [].concat(n), i], s = l[0], c = l.reduce((f, d) => {
    const a = it(e, d, o);
    return f.top = N(a.top, f.top), f.right = et(a.right, f.right), f.bottom = et(a.bottom, f.bottom), f.left = N(a.left, f.left), f;
  }, it(e, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
const Jt = {
  getClippingRect: Gt,
  convertOffsetParentRelativeRectToViewportRelativeRect: Xt,
  isElement: L,
  getDimensions: Ut,
  getOffsetParent: ot,
  getDocumentElement: T,
  getScale: D,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: i
    } = t;
    const o = this.getOffsetParent || ot, r = this.getDimensions;
    return {
      reference: It(e, await o(n), i),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => A(t).direction === "rtl"
}, Qt = (t, e, n) => {
  const i = /* @__PURE__ */ new Map(), o = {
    platform: Jt,
    ...n
  }, r = {
    ...o.platform,
    _c: i
  };
  return Rt(t, e, {
    ...o,
    platform: r
  });
};
const rt = wt({
  name: "SBasePopover",
  props: At,
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
    } = yt(t), s = G(), c = G(), f = () => {
      const a = [];
      r.value && (a.push(Mt(8)), a.push(Dt({
        element: s.value
      }))), l.value || a.push(_t()), Qt(i.value, c.value, {
        middleware: a,
        placement: l.value || "bottom"
      }).then(({
        x: u,
        y: h,
        middlewareData: p,
        placement: v
      }) => {
        if (Object.assign(c.value.style, {
          left: `${u}px`,
          top: `${h}px`
        }), r.value) {
          const {
            x: y,
            y: m
          } = p.arrow, w = v.split("-")[0], x = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[w], b = ["top", "right", "bottom", "left"], g = b.indexOf(w) - 1, P = b[g < 0 ? g + 4 : g];
          Object.assign(s.value.style, {
            left: `${y}px`,
            top: `${m}px`,
            [x]: "-4px",
            [`border-${w}-color`]: "transparent",
            [`border-${P}-color`]: "transparent"
          });
        }
      });
    }, d = new MutationObserver(() => f());
    return xt(o, (a) => {
      a ? (vt(f), i.value && d.observe(i.value, {
        attributes: !0
      }), window.addEventListener("resize", f), window.addEventListener("scroll", f)) : (d.disconnect(), window.removeEventListener("resize", f), window.removeEventListener("scroll", f));
    }, {
      immediate: !0
    }), bt(() => {
      d.disconnect(), window.removeEventListener("resize", f), window.removeEventListener("scroll", f);
    }), () => {
      var a;
      return Y(Ot, null, [o.value && Y("div", Et({
        ref: c,
        class: "s-base-popover"
      }, n), [(a = e.default) == null ? void 0 : a.call(e), r.value && Y("div", {
        class: "s-base-popover__arrow",
        ref: s
      }, null)])]);
    };
  }
}), te = {
  install(t) {
    t.component(rt.name, rt);
  }
};
export {
  rt as BasePopover,
  te as default
};
