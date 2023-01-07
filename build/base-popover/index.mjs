import { defineComponent as ut, toRefs as dt, ref as X, watch as pt, nextTick as ht, createVNode as $, Fragment as mt, mergeProps as gt } from "vue";
const wt = {
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
function tt(t) {
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
    reference: o,
    floating: i
  } = t;
  const c = o.x + o.width / 2 - i.width / 2, s = o.y + o.height / 2 - i.height / 2, r = I(e), l = tt(r), a = o[l] / 2 - i[l] / 2, d = j(e), f = r === "x";
  let u;
  switch (d) {
    case "top":
      u = {
        x: c,
        y: o.y - i.height
      };
      break;
    case "bottom":
      u = {
        x: c,
        y: o.y + o.height
      };
      break;
    case "right":
      u = {
        x: o.x + o.width,
        y: s
      };
      break;
    case "left":
      u = {
        x: o.x - i.width,
        y: s
      };
      break;
    default:
      u = {
        x: o.x,
        y: o.y
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
const yt = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: c = [],
    platform: s
  } = n, r = c.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
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
    strategy: i
  }), {
    x: d,
    y: f
  } = Y(a, o, l), u = o, p = {}, h = 0;
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
      initialPlacement: o,
      placement: u,
      strategy: i,
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
        strategy: i
      }) : x.rects), {
        x: d,
        y: f
      } = Y(a, u, l)), y = -1;
      continue;
    }
  }
  return {
    x: d,
    y: f,
    placement: u,
    strategy: i,
    middlewareData: p
  };
};
function xt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function bt(t) {
  return typeof t != "number" ? xt(t) : {
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
const vt = Math.min, At = Math.max;
function Ct(t, e, n) {
  return At(t, vt(e, n));
}
const Tt = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: c,
      placement: s,
      rects: r,
      platform: l
    } = e;
    if (n == null)
      return process.env.NODE_ENV !== "production" && console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const a = bt(o), d = {
      x: i,
      y: c
    }, f = I(s), u = tt(f), p = await l.getDimensions(n), h = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", v = r.reference[u] + r.reference[f] - d[f] - r.floating[u], m = d[f] - r.reference[f], g = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
    let w = g ? f === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = r.floating[u]);
    const A = v / 2 - m / 2, x = a[h], U = w - p[u] - a[y], L = w / 2 - p[u] / 2 + A, W = Ct(x, L, U), ft = _(s) != null && L != W && r.reference[u] / 2 - (L < x ? a[h] : a[y]) - p[u] / 2 < 0 ? L < x ? x - L : U - L : 0;
    return {
      [f]: d[f] - ft,
      data: {
        [f]: W,
        centerOffset: L - W
      }
    };
  }
});
async function Et(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, c = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = j(n), r = _(n), l = I(n) === "x", a = ["left", "top"].includes(s) ? -1 : 1, d = c && l ? -1 : 1, f = typeof e == "function" ? e(t) : e;
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
  return r && typeof h == "number" && (p = r === "end" ? h * -1 : h), l ? {
    x: p * d,
    y: u * a
  } : {
    x: u * a,
    y: p * d
  };
}
const Ot = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await Et(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
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
function E(t) {
  return nt(t) ? (t.nodeName || "").toLowerCase() : "";
}
let S;
function et() {
  if (S)
    return S;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (S = t.brands.map((e) => e.brand + "/" + e.version).join(" "), S) : navigator.userAgent;
}
function T(t) {
  return t instanceof b(t).HTMLElement;
}
function O(t) {
  return t instanceof b(t).Element;
}
function nt(t) {
  return t instanceof b(t).Node;
}
function K(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = b(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function P(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = C(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Rt(t) {
  return ["table", "td", "th"].includes(E(t));
}
function M(t) {
  const e = /firefox/i.test(et()), n = C(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    (i) => {
      const c = n.contain;
      return c != null ? c.includes(i) : !1;
    }
  );
}
function ot() {
  return !/^((?!chrome|android).)*safari/i.test(et());
}
function H(t) {
  return ["html", "body", "#document"].includes(E(t));
}
const q = Math.min, F = Math.max, k = Math.round;
function it(t) {
  const e = C(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, c = t.offsetHeight, s = k(n) !== i || k(o) !== c;
  return s && (n = i, o = c), {
    width: n,
    height: o,
    fallback: s
  };
}
function rt(t) {
  return O(t) ? t : t.contextElement;
}
const st = {
  x: 1,
  y: 1
};
function D(t) {
  const e = rt(t);
  if (!T(e))
    return st;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: c
  } = it(e);
  let s = (c ? k(n.width) : n.width) / o, r = (c ? k(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!r || !Number.isFinite(r)) && (r = 1), {
    x: s,
    y: r
  };
}
function N(t, e, n, o) {
  var i, c;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const s = t.getBoundingClientRect(), r = rt(t);
  let l = st;
  e && (o ? O(o) && (l = D(o)) : l = D(t));
  const a = r ? b(r) : window, d = !ot() && n;
  let f = (s.left + (d && ((i = a.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, u = (s.top + (d && ((c = a.visualViewport) == null ? void 0 : c.offsetTop) || 0)) / l.y, p = s.width / l.x, h = s.height / l.y;
  if (r) {
    const y = b(r), v = o && O(o) ? b(o) : o;
    let m = y.frameElement;
    for (; m && o && v !== y; ) {
      const g = D(m), w = m.getBoundingClientRect(), A = getComputedStyle(m);
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
  return ((nt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function B(t) {
  return O(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function ct(t) {
  return N(R(t)).left + B(t).scrollLeft;
}
function Lt(t, e, n) {
  const o = T(e), i = R(e), c = N(t, !0, n === "fixed", e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const r = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((E(e) !== "body" || P(i)) && (s = B(e)), T(e)) {
      const l = N(e, !0);
      r.x = l.x + e.clientLeft, r.y = l.y + e.clientTop;
    } else
      i && (r.x = ct(i));
  return {
    x: c.left + s.scrollLeft - r.x,
    y: c.top + s.scrollTop - r.y,
    width: c.width,
    height: c.height
  };
}
function V(t) {
  if (E(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (K(t) ? t.host : null) || R(t);
  return K(e) ? e.host : e;
}
function G(t) {
  return !T(t) || C(t).position === "fixed" ? null : t.offsetParent;
}
function Dt(t) {
  let e = V(t);
  for (; T(e) && !H(e); ) {
    if (M(e))
      return e;
    e = V(e);
  }
  return null;
}
function J(t) {
  const e = b(t);
  let n = G(t);
  for (; n && Rt(n) && C(n).position === "static"; )
    n = G(n);
  return n && (E(n) === "html" || E(n) === "body" && C(n).position === "static" && !M(n)) ? e : n || Dt(t) || e;
}
function Ft(t) {
  return it(t);
}
function Nt(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = T(n), c = R(n);
  if (n === c)
    return e;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, r = {
    x: 1,
    y: 1
  };
  const l = {
    x: 0,
    y: 0
  };
  if ((i || !i && o !== "fixed") && ((E(n) !== "body" || P(c)) && (s = B(n)), T(n))) {
    const a = N(n);
    r = D(n), l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
  }
  return {
    width: e.width * r.x,
    height: e.height * r.y,
    x: e.x * r.x - s.scrollLeft * r.x + l.x,
    y: e.y * r.y - s.scrollTop * r.y + l.y
  };
}
function Vt(t, e) {
  const n = b(t), o = R(t), i = n.visualViewport;
  let c = o.clientWidth, s = o.clientHeight, r = 0, l = 0;
  if (i) {
    c = i.width, s = i.height;
    const a = ot();
    (a || !a && e === "fixed") && (r = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: c,
    height: s,
    x: r,
    y: l
  };
}
function St(t) {
  var e;
  const n = R(t), o = B(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, c = F(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = F(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let r = -o.scrollLeft + ct(t);
  const l = -o.scrollTop;
  return C(i || n).direction === "rtl" && (r += F(n.clientWidth, i ? i.clientWidth : 0) - c), {
    width: c,
    height: s,
    x: r,
    y: l
  };
}
function lt(t) {
  const e = V(t);
  return H(e) ? t.ownerDocument.body : T(e) && P(e) ? e : lt(e);
}
function at(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = lt(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), c = b(o);
  return i ? e.concat(c, c.visualViewport || [], P(o) ? o : []) : e.concat(o, at(o));
}
function kt(t, e) {
  const n = N(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, c = T(t) ? D(t) : {
    x: 1,
    y: 1
  }, s = t.clientWidth * c.x, r = t.clientHeight * c.y, l = i * c.x, a = o * c.y;
  return {
    top: a,
    left: l,
    right: l + s,
    bottom: a + r,
    x: l,
    y: a,
    width: s,
    height: r
  };
}
function Q(t, e, n) {
  return e === "viewport" ? z(Vt(t, n)) : O(e) ? kt(e, n) : z(St(R(t)));
}
function Pt(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = at(t).filter((r) => O(r) && E(r) !== "body"), i = null;
  const c = C(t).position === "fixed";
  let s = c ? V(t) : t;
  for (; O(s) && !H(s); ) {
    const r = C(s), l = M(s);
    (c ? !l && !i : !l && r.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((d) => d !== s) : i = r, s = V(s);
  }
  return e.set(t, o), o;
}
function Bt(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const s = [...n === "clippingAncestors" ? Pt(e, this._c) : [].concat(n), o], r = s[0], l = s.reduce((a, d) => {
    const f = Q(e, d, i);
    return a.top = F(f.top, a.top), a.right = q(f.right, a.right), a.bottom = q(f.bottom, a.bottom), a.left = F(f.left, a.left), a;
  }, Q(e, r, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
const Wt = {
  getClippingRect: Bt,
  convertOffsetParentRelativeRectToViewportRelativeRect: Nt,
  isElement: O,
  getDimensions: Ft,
  getOffsetParent: J,
  getDocumentElement: R,
  getScale: D,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || J, c = this.getDimensions;
    return {
      reference: Lt(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await c(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => C(t).direction === "rtl"
}, $t = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Wt,
    ...n
  }, c = {
    ...i.platform,
    _c: o
  };
  return yt(t, e, {
    ...i,
    platform: c
  });
};
const Z = ut({
  name: "SBasePopover",
  props: wt,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    attrs: n
  }) {
    const {
      host: o,
      modelValue: i,
      showArrow: c,
      placement: s
    } = dt(t), r = X(), l = X(), a = () => {
      const d = [];
      c.value && (d.push(Ot(8)), d.push(Tt({
        element: r.value
      }))), $t(o.value, l.value, {
        middleware: d,
        placement: s.value
      }).then(({
        x: f,
        y: u,
        middlewareData: p,
        placement: h
      }) => {
        if (Object.assign(l.value.style, {
          left: `${f}px`,
          top: `${u}px`
        }), c.value) {
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
    return pt(i, (d) => {
      d && ht(a);
    }, {
      immediate: !0
    }), () => {
      var d;
      return $(mt, null, [i.value && $("div", gt({
        ref: l,
        class: "s-base-popover"
      }, n), [(d = e.default) == null ? void 0 : d.call(e), c.value && $("div", {
        class: "s-base-popover__arrow",
        ref: r
      }, null)])]);
    };
  }
}), It = {
  install(t) {
    t.component(Z.name, Z);
  }
};
export {
  Z as BasePopover,
  It as default
};
