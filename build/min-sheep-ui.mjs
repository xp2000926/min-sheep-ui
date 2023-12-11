import { defineComponent as T, computed as F, createVNode as f, toRefs as L, Fragment as z, reactive as Tt, ref as C, unref as Ct, inject as V, mergeProps as ee, onMounted as Ce, provide as M, createTextVNode as X, watch as Q, onUnmounted as ot, nextTick as lt, withDirectives as st, vModelCheckbox as ct } from "vue";
const At = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  plain: {
    type: Boolean,
    default: !1
  },
  circle: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String,
    default: ""
  },
  iconSvg: {
    type: String,
    default: ""
  }
}, kt = {
  name: {
    type: String,
    default: ""
  },
  prefix: {
    type: String,
    default: "icon"
  },
  size: {
    type: [String, Number],
    default: "inherit"
  },
  color: {
    type: String,
    default: "inherit"
  },
  component: {
    type: String,
    default: null
  }
};
window._iconfont_svg_string_1281272 = '<svg><symbol id="icon-angular" viewBox="0 0 1024 1024"><path d="M512 125.952L139.552 261.376 206.4 762.88 512 932.64l305.6-169.824 66.848-501.44L512 125.952z m0 68.096l302.176 109.888-55.808 418.56L512 859.36l-246.4-136.864-55.776-418.56L512 194.048zM512 256l-192 448h64l41.28-96h173.44L640 704h64L512 256z m0 145.6l0.64 1.92 22.4 56L571.2 544h-118.4l36.16-84.48 22.4-56 0.64-1.92z"  ></path></symbol><symbol id="icon-react" viewBox="0 0 1024 1024"><path d="M836.8 353.6c-11.2-3.2-20.8-6.4-32-9.6 1.6-8 3.2-14.4 4.8-22.4 24-118.4 8-214.4-46.4-246.4-52.8-30.4-139.2 1.6-225.6 76.8-8 8-17.6 14.4-25.6 22.4-4.8-4.8-11.2-9.6-16-16-91.2-81.6-182.4-115.2-236.8-83.2-52.8 30.4-68.8 120-46.4 233.6 1.6 11.2 4.8 22.4 8 33.6-12.8 3.2-25.6 8-36.8 11.2C76.8 392 0 451.2 0 510.4c0 62.4 81.6 124.8 192 163.2 9.6 3.2 17.6 6.4 27.2 8-3.2 12.8-6.4 24-8 36.8-20.8 110.4-4.8 198.4 48 228.8 54.4 32 145.6 0 233.6-78.4 6.4-6.4 14.4-12.8 20.8-19.2 8 8 17.6 16 27.2 24 84.8 73.6 169.6 104 222.4 73.6 54.4-32 72-126.4 48-241.6-1.6-8-3.2-17.6-6.4-27.2 6.4-1.6 12.8-3.2 19.2-6.4C940.8 636.8 1024 574.4 1024 510.4c0-59.2-78.4-118.4-187.2-156.8zM566.4 184c75.2-65.6 144-89.6 176-72 33.6 19.2 46.4 97.6 25.6 201.6-1.6 6.4-3.2 12.8-4.8 20.8-44.8-9.6-89.6-17.6-134.4-20.8-25.6-36.8-54.4-73.6-84.8-105.6 6.4-9.6 14.4-16 22.4-24zM334.4 614.4c9.6 17.6 20.8 35.2 32 51.2-32-3.2-62.4-8-92.8-14.4 8-28.8 19.2-59.2 32-89.6 9.6 19.2 19.2 36.8 28.8 52.8z m-60.8-240c28.8-6.4 59.2-11.2 91.2-16-11.2 16-20.8 33.6-30.4 51.2-9.6 17.6-19.2 33.6-28.8 52.8-12.8-30.4-22.4-59.2-32-88z m54.4 137.6c12.8-27.2 27.2-54.4 43.2-81.6s32-52.8 48-78.4c30.4-1.6 60.8-3.2 91.2-3.2s62.4 1.6 91.2 3.2c17.6 25.6 33.6 51.2 48 76.8s30.4 52.8 43.2 81.6c-12.8 27.2-27.2 54.4-43.2 81.6-16 27.2-32 52.8-48 78.4-30.4 1.6-60.8 3.2-92.8 3.2s-62.4-1.6-91.2-3.2C400 644.8 384 619.2 368 592s-25.6-52.8-40-80z m361.6 102.4l28.8-52.8c12.8 28.8 24 59.2 33.6 88-30.4 6.4-62.4 12.8-94.4 16 11.2-16 22.4-33.6 32-51.2z m28.8-153.6l-28.8-52.8c-9.6-17.6-20.8-33.6-30.4-49.6 32 4.8 62.4 9.6 91.2 16-8 30.4-19.2 59.2-32 86.4zM512 236.8c20.8 22.4 40 46.4 59.2 72-40-1.6-80-1.6-118.4 0 19.2-27.2 40-51.2 59.2-72zM280 113.6c33.6-19.2 108.8 8 187.2 78.4 4.8 4.8 9.6 9.6 16 14.4-30.4 33.6-59.2 68.8-86.4 105.6-44.8 4.8-89.6 11.2-134.4 20.8-3.2-9.6-4.8-20.8-6.4-30.4-19.2-97.6-6.4-169.6 24-188.8z m-48 528c-8-3.2-16-4.8-25.6-8-43.2-12.8-91.2-35.2-126.4-62.4-20.8-14.4-33.6-35.2-38.4-59.2 0-36.8 64-83.2 155.2-115.2 11.2-4.8 22.4-8 35.2-11.2 14.4 43.2 30.4 86.4 49.6 128-19.2 40-36.8 83.2-49.6 128zM464 836.8c-33.6 30.4-72 54.4-113.6 70.4-22.4 11.2-48 11.2-70.4 3.2-32-19.2-44.8-89.6-27.2-184 1.6-11.2 4.8-22.4 8-33.6 44.8 9.6 89.6 16 136 19.2 25.6 36.8 56 73.6 86.4 107.2-6.4 6.4-12.8 12.8-19.2 17.6z m49.6-48c-20.8-22.4-40-46.4-60.8-72 19.2 0 38.4 1.6 59.2 1.6 20.8 0 41.6 0 60.8-1.6-19.2 24-38.4 48-59.2 72zM774.4 848c-1.6 24-14.4 48-33.6 62.4-32 19.2-99.2-4.8-172.8-68.8-8-8-16-14.4-25.6-22.4 30.4-33.6 59.2-68.8 84.8-107.2 46.4-3.2 91.2-11.2 136-20.8l4.8 24c11.2 43.2 12.8 89.6 6.4 132.8z m36.8-214.4c-4.8 1.6-11.2 3.2-17.6 4.8-14.4-43.2-32-86.4-51.2-128 19.2-40 35.2-83.2 49.6-126.4 11.2 3.2 20.8 6.4 30.4 9.6 92.8 32 158.4 80 158.4 116.8 0 40-68.8 89.6-169.6 123.2zM512 603.2c51.2 0 91.2-41.6 91.2-91.2s-41.6-91.2-91.2-91.2-91.2 41.6-91.2 91.2 40 91.2 91.2 91.2z"  ></path></symbol><symbol id="icon-vuejs" viewBox="0 0 1024 1024"><path d="M777.8 128.6H624l-112 177.2-96-177.2H64L512 896 960 128.6h-182.2z m-602.4 64h107.6L512 589 740.8 192.6h107.6L512 769 175.4 192.6z"  ></path></symbol></svg>', function(t) {
  var n = (n = document.getElementsByTagName("script"))[n.length - 1], e = n.getAttribute("data-injectcss"), n = n.getAttribute("data-disable-injectsvg");
  if (!n) {
    var r, i, a, l, o, s = function(u, m) {
      m.parentNode.insertBefore(u, m);
    };
    if (e && !t.__iconfont__svg__cssinject__) {
      t.__iconfont__svg__cssinject__ = !0;
      try {
        document.write(
          "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
        );
      } catch (u) {
        console && console.log(u);
      }
    }
    r = function() {
      var u, m = document.createElement("div");
      m.innerHTML = t._iconfont_svg_string_1281272, (m = m.getElementsByTagName("svg")[0]) && (m.setAttribute("aria-hidden", "true"), m.style.position = "absolute", m.style.width = 0, m.style.height = 0, m.style.overflow = "hidden", m = m, (u = document.body).firstChild ? s(m, u.firstChild) : u.appendChild(m));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(r, 0) : (i = function() {
      document.removeEventListener("DOMContentLoaded", i, !1), r();
    }, document.addEventListener("DOMContentLoaded", i, !1)) : document.attachEvent && (a = r, l = t.document, o = !1, d(), l.onreadystatechange = function() {
      l.readyState == "complete" && (l.onreadystatechange = null, c());
    });
  }
  function c() {
    o || (o = !0, a());
  }
  function d() {
    try {
      l.documentElement.doScroll("left");
    } catch {
      return void setTimeout(d, 50);
    }
    c();
  }
}(window);
const fe = T({
  name: "SIcon",
  props: kt,
  setup(t) {
    const e = F(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = f("img", {
      src: t.name,
      style: {
        width: e.value,
        verticalAlign: "middle"
      }
    }, null), r = f("span", {
      class: [t.prefix, t.prefix + "-" + t.name],
      style: {
        fontSize: e.value,
        color: t.color
      }
    }, null), i = f("svg", {
      style: {
        width: e.value,
        height: e.value
      }
    }, [f("use", {
      "xlink:href": `#${t.prefix}-${t.component}`,
      fill: t.color
    }, null)]), a = t.component ? i : /http|https/.test(t.name) ? n : r;
    return () => a;
  }
}), Ft = (t) => {
  const e = t.size ? typeof t.size == "number" ? `${t.size}px` : t.size : void 0, n = t.color ? t.color : "black";
  return f("svg", {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-arrow-down",
    style: {
      width: e,
      height: e,
      fill: n,
      stroke: n
    }
  }, [f("path", {
    d: "m11.27 27.728 12.727 12.728 12.728-12.728M24 5v34.295"
  }, null)]);
}, Lt = {
  install(t) {
    t.component(fe.name, fe), t.component("ArrowDownIcon", Ft);
  }
};
const Ie = T({
  name: "SButton",
  props: At,
  setup(t, {
    slots: e
  }) {
    const {
      type: n,
      size: r,
      disabled: i,
      block: a,
      round: l,
      plain: o,
      circle: s,
      icon: c,
      iconSvg: d
    } = L(t), u = a.value ? "s-btn--block" : "", m = l.value ? "s-btn--round" : "", w = o.value ? "s-btn--plain" : "", x = s.value ? "s-btn--circle" : "", g = r.value === "mini" ? "18" : r.value === "small" ? "22" : r.value === "medium" ? "26" : "30";
    return () => f("button", {
      disabled: i.value,
      class: `s-btn s-btn--${n.value} s-btn--${r.value} ${u} ${m} ${w} ${x}`
    }, [e.default && c.value || e.default && d.value ? f(z, null, [f(fe, {
      name: c.value,
      component: d.value,
      size: g
    }, null), e.default()]) : e.default ? f(z, null, [e.icon && e.icon(), e.default()]) : c.value || d.value ? f(fe, {
      name: c.value,
      component: d.value,
      size: g
    }, null) : "按钮"]);
  }
}), Nt = {
  install(t) {
    t.component(Ie.name, Ie);
  }
};
function Ae(t, e = 0, n = []) {
  return e++, t.reduce((r, i) => {
    const a = { ...i };
    a.level = e, n.length > 0 && n[n.length - 1].level >= e && n.pop(), n.push(a);
    const l = n[n.length - 2];
    if (l && (a.parentId = l.id), a.children) {
      const o = Ae(a.children, e, n);
      return delete a.children, r.concat(a, o);
    } else
      return a.isLeaf === void 0 && (a.isLeaf = !0), r.concat(a);
  }, []);
}
function It(t, { getChildren: e, getParent: n }, { emit: r }) {
  const i = (l) => {
    l.checked = !l.checked, e(l).forEach((u) => {
      u.checked = l.checked, u.inChecked = e(l, !0).every(
        (m) => m.inChecked
      );
    }), l.inChecked = !1, a(l);
    const o = t.value.map((u) => {
      if (u.checked)
        return u.id;
    }).filter(Boolean), s = t.value.map((u) => {
      if (u.checked)
        return u;
    }).filter(Boolean), c = t.value.map((u) => {
      if (u.inChecked)
        return u.id;
    }).filter(Boolean), d = t.value.map((u) => {
      if (u.inChecked)
        return u;
    }).filter(Boolean);
    r(
      "check",
      l,
      o,
      s,
      c,
      d
    );
  }, a = (l) => {
    const o = n(l);
    if (!o)
      return;
    const s = e(o, !0), c = s.every((u) => u.checked);
    o.checked = c;
    const d = s.some((u) => u.checked);
    c ? o.inChecked = !1 : d ? o.inChecked = !0 : o.inChecked = !1, o.parentId && a(o);
  };
  return {
    toggleCheckNode: i
  };
}
function Rt(t) {
  const e = F(() => {
    let o = [];
    const s = [];
    for (const c of t.value)
      o.map((d) => d.id).includes(c.id) || (c.expanded !== !0 && (o = n(c)), s.push(c));
    return s;
  }), n = (o, s = !0) => {
    const c = [], d = t.value.findIndex((u) => u.id === o.id);
    for (let u = d + 1; u < t.value.length && o.level < t.value[u].level; u++)
      (s || o.level === t.value[u].level - 1) && c.push(t.value[u]);
    return c;
  }, r = (o, s = []) => {
    const c = n(o, !1);
    return s.push(...c), c.forEach((d) => {
      d.expanded && r(d, s);
    }), s;
  };
  return {
    expandedTree: e,
    getChildren: n,
    getChildrenExpanded: r,
    getIndex: (o) => o ? t.value.findIndex((s) => s.id === o.id) : -1,
    getNode: (o) => t.value.find((s) => s.id === o.id),
    getParent: (o) => t.value.find((s) => s.id === o.parentId)
  };
}
const ye = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function Bt(t, e, { getChildren: n, getParent: r }) {
  const i = Tt({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), a = F(
    () => e.value.reduce(
      (g, v) => ({
        ...g,
        [v.id]: v
      }),
      {}
    )
  ), l = (g) => {
    g == null || g.classList.remove(...Object.values(ye));
  }, o = (g, v) => {
    var b;
    const p = (b = a.value[g]) == null ? void 0 : b.parentId;
    return p === v ? !0 : p !== void 0 ? o(p, v) : !1;
  }, s = () => {
    i.dropType = void 0, i.draggingNode = null, i.draggingTreeNode = null;
  }, c = (g, v) => {
    var p;
    g.stopPropagation(), i.draggingNode = g.target, i.draggingTreeNode = v, (p = g.dataTransfer) == null || p.setData("dragNodeId", v.id);
  }, d = (g) => {
    if (g.preventDefault(), g.stopPropagation(), !!i.draggingNode && t) {
      if (g.dataTransfer && (g.dataTransfer.dropEffect = "move"), !e)
        return;
      let v = {};
      typeof t == "object" ? v = t : t === !0 && (v = { dropInner: !0 });
      const { dropPrev: p, dropNext: b, dropInner: h } = v;
      let y;
      const S = p ? h ? 0.25 : b ? 0.45 : 1 : -1, _ = b ? h ? 0.75 : p ? 0.55 : 0 : 1, O = g.currentTarget, E = O == null ? void 0 : O.getBoundingClientRect(), N = g.clientY - ((E == null ? void 0 : E.top) || 0);
      if (N < ((E == null ? void 0 : E.height) || 0) * S ? y = "dropPrev" : N > ((E == null ? void 0 : E.height) || 0) * _ ? y = "dropNext" : h ? y = "dropInner" : y = void 0, y) {
        const I = O == null ? void 0 : O.classList;
        I && (I.contains(ye[y]) || (l(O), I.add(ye[y])));
      } else
        l(O);
      i.dropType = y;
    }
  }, u = (g) => {
    g.stopPropagation(), i.draggingNode && l(g.currentTarget);
  }, m = (g, v) => {
    var b;
    if (g.preventDefault(), g.stopPropagation(), l(g.currentTarget), !i.draggingNode || !t)
      return;
    const p = (b = g.dataTransfer) == null ? void 0 : b.getData("dragNodeId");
    if (p) {
      const h = o(v.id, p);
      if (p === v.id || h)
        return;
      i.dropType && w(p, v), s();
    }
  };
  function w(g, v) {
    const p = e.value.find((b) => b.id === g);
    if (p) {
      let b;
      const h = n(p), y = r(p);
      if (i.dropType === "dropInner") {
        b = {
          ...p,
          parentId: v.id,
          level: v.level + 1
        };
        const S = e.value.indexOf(v);
        e.value.splice(S + 1, 0, b), v.isLeaf = void 0;
        const _ = e.value.indexOf(p);
        e.value.splice(_, 1);
      } else if (i.dropType === "dropNext") {
        b = {
          ...p,
          parentId: v.parentId,
          level: v.level
        };
        const S = e.value.indexOf(v), _ = n(v, !0).length;
        e.value.splice(
          S + _ + 1,
          0,
          b
        );
        const O = e.value.indexOf(p);
        e.value.splice(O, 1);
      } else if (i.dropType === "dropPrev") {
        b = {
          ...p,
          parentId: v.parentId,
          level: v.level
        };
        const S = e.value.indexOf(v);
        e.value.splice(S, 0, b);
        const _ = e.value.indexOf(p);
        e.value.splice(_, 1);
      }
      i.dropType = "dropInner", h.forEach((S) => w(S.id, b)), y && n(y).length === 0 && (y.isLeaf = !0);
    }
  }
  return {
    onDragstart: c,
    onDragover: d,
    onDragleave: u,
    onDrop: m,
    onDragend: (g) => {
      g.preventDefault(), g.stopPropagation(), s();
    }
  };
}
function Dt(t, { getNode: e, getIndex: n, getChildren: r }, { emit: i }) {
  const a = (c) => {
    const d = e(c);
    d && d.isLeaf === !1 && !d.childNodeCount && (d.loading = !0, i("lazy-load", c, l));
  }, l = (c) => {
    const d = e(c.node);
    if (d) {
      d.loading = !1;
      const u = C(
        Ae(c.treeItems, d.level)
      );
      o(d, u), s(d, u);
      const m = r(d);
      d.childNodeCount = m.length;
    }
  }, o = (c, d) => {
    d.value.forEach((u) => {
      u.level - 1 === c.level && !u.parentId && (u.parentId = c.id);
    });
  }, s = (c, d) => {
    const u = n(c);
    u && t.value.splice(u + 1, 0, ...d.value);
  };
  return {
    lazyLoadNodes: a
  };
}
function ut(t = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  for (let r = 0; r < t; r++)
    n += e[parseInt((Math.random() * e.length).toString())];
  return n;
}
function qt(t, { getChildren: e, getIndex: n }) {
  return {
    append: (a, l) => {
      const o = e(a, !1), s = o[o.length - 1];
      let c = n(a) + 1;
      s && (c = n(s) + 1), a.expanded = !0, a.isLeaf = !1;
      const d = C({
        ...l,
        level: a.level + 1,
        parentId: a.id,
        isLeaf: !0
      });
      d.value.id === void 0 && (d.value.id = ut()), t.value.splice(c, 0, d.value);
    },
    remove: (a) => {
      const l = e(a).map((o) => o.id);
      t.value = t.value.filter(
        (o) => o.id !== a.id && !l.includes(o.id)
      );
    }
  };
}
function Vt(t, e, n, r) {
  const { lazyLoadNodes: i } = r;
  return {
    toggleNode: (l, o, s = !1) => {
      if (l.stopPropagation(), s)
        t.value.forEach((c) => {
          c.level <= o.level ? (c.level === o.level && c.id !== o.id && (c.expanded = !1), c.id === o.id && (c.expanded = !c.expanded), c.expanded && i(c)) : c.expanded = !1;
        });
      else {
        const c = t.value.find((d) => d.id === o.id);
        c && (c.expanded = !c.expanded, c.expanded && i(c));
      }
    }
  };
}
function Mt(t, e, n) {
  const r = Ct(t), i = C(Ae(r)), a = Rt(i), l = [Vt, It, qt], o = Dt(i, a, n), s = Bt(e.draggable, i, a);
  return {
    ...l.reduce((d, u) => ({ ...d, ...u(i, a, n, o) }), {}),
    ...a,
    ...s,
    treeData: i
  };
}
const dt = {
  data: {
    type: Object,
    required: !0
  },
  lineable: {
    type: Boolean,
    default: !1
  },
  checkable: {
    type: Boolean,
    default: !1
  },
  operable: {
    type: Boolean,
    default: !1
  },
  draggable: {
    type: [Boolean, Object],
    default: !1
  },
  height: {
    type: Number
  },
  itemHeight: {
    type: Number,
    default: 30
  },
  accordion: {
    type: Boolean,
    default: !1
  }
}, ke = {
  onClick: {
    type: Function,
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  marginRight: {
    type: Number,
    default: 8
  }
};
var we = {}, jt = {
  get exports() {
    return we;
  },
  set exports(t) {
    we = t;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        if (a) {
          var l = typeof a;
          if (l === "string" || l === "number")
            r.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var o = n.apply(null, a);
              o && r.push(o);
            }
          } else if (l === "object") {
            if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
              r.push(a.toString());
              continue;
            }
            for (var s in a)
              e.call(a, s) && a[s] && r.push(s);
          }
        }
      }
      return r.join(" ");
    }
    t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
  })();
})(jt);
const $ = we, zt = T({
  name: "SBaseSelectAll",
  props: ke,
  setup(t) {
    return () => f("label", {
      class: $("s-base-select-all", "is-checked", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [f("span", {
      class: $("s-base-select-all__input", "is-checked", {
        "is-disabled": t.disabled
      })
    }, [f("span", {
      class: "s-base-select-all__inner"
    }, null), f("input", {
      type: "checkbox",
      disabled: t.disabled,
      "aria-hidden": "false",
      class: "s-base-select-all__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        t.onClick();
      }
    }, null)])]);
  }
});
const $t = T({
  name: "SBaseSelectionBox",
  props: ke,
  setup(t) {
    return () => f("label", {
      class: $("s-base-selection-box", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [f("span", {
      class: $("s-base-selection-box__input", {
        "is-disabled": t.disabled
      })
    }, [f("span", {
      class: "s-base-selection-box__inner"
    }, null), f("input", {
      type: "checkbox",
      disabled: t.disabled,
      "aria-hidden": "false",
      class: "s-base-selection-box__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        t.onClick();
      }
    }, null)])]);
  }
});
const Ht = T({
  name: "SBaseSemiSelection",
  props: ke,
  setup(t) {
    return () => f("label", {
      class: $("s-base-semi-selection", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [f("span", {
      class: $("s-base-semi-selection__input", "is-indeterminate", {
        "is-disabled": t.disabled
      }),
      tabindex: "0",
      role: "checkbox",
      "aria-checked": "mixed"
    }, [f("span", {
      class: "s-base-semi-selection__inner"
    }, null), f("input", {
      type: "checkbox",
      "aria-hidden": "true",
      disabled: t.disabled,
      class: "s-base-semi-selection__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        t.onClick();
      }
    }, null)])]);
  }
}), Wt = {
  ...dt,
  treeNode: {
    type: Object,
    required: !0
  }
}, Re = 34, Be = 24, Ut = T({
  name: "STreeNode",
  props: Wt,
  setup(t, {
    slots: e
  }) {
    const {
      lineable: n,
      checkable: r,
      treeNode: i,
      operable: a,
      draggable: l
    } = L(t), {
      toggleCheckNode: o,
      getChildrenExpanded: s,
      append: c,
      remove: d,
      onDragend: u,
      onDragleave: m,
      onDragover: w,
      onDragstart: x,
      onDrop: g
    } = V("TREE_UTILS"), v = C(!1), p = () => {
      v.value ? v.value = !1 : v.value = !0;
    };
    let b = {};
    l.value && (b = {
      draggable: !0,
      onDragend: (y) => u(y),
      onDragleave: (y) => m(y),
      onDragover: (y) => w(y),
      onDragstart: (y) => x(y, i.value),
      onDrop: (y) => g(y, i.value)
    });
    const h = () => f(z, null, [i.value.inChecked ? f(Ht, {
      onClick: () => o(i.value),
      disabled: i.value.disabled
    }, null) : i.value.checked ? f(zt, {
      onClick: () => o(i.value),
      disabled: i.value.disabled
    }, null) : f($t, {
      onClick: () => o(i.value),
      disabled: i.value.disabled
    }, null)]);
    return () => {
      var y, S, _;
      return f("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${Be * (i.value.level - 1)}px`
        },
        onMouseenter: p,
        onMouseleave: p
      }, [!i.value.isLeaf && i.value.expanded && n.value && f("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${Re * s(i.value).length}px`,
          left: `${Be * (i.value.level - 1) + 9}px`,
          top: `${Re}px`
        }
      }, null), f("div", ee({
        class: "s-tree__node--content"
      }, b), [i.value.isLeaf ? f("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (y = e.icon) == null ? void 0 : y.call(e), r.value && h(), (S = e.content) == null ? void 0 : S.call(e), a.value && v.value && f("span", {
        class: "inline-flex ml-1"
      }, [f("svg", {
        onClick: () => {
          c(i.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [f("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), f("svg", {
        onClick: () => {
          d(i.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [f("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), i.value.loading && ((_ = e.loading) == null ? void 0 : _.call(e))])]);
    };
  }
}), Yt = (t, {
  emit: e
}) => f("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: t.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [f("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const Xt = {
  data: {
    type: Array,
    default: []
  },
  itemHeight: {
    type: Number,
    default: 22
  },
  component: {
    type: String,
    default: "div"
  }
};
const Kt = T({
  name: "SVirtualList",
  props: Xt,
  setup(t, {
    slots: e
  }) {
    const {
      data: n,
      itemHeight: r,
      component: i
    } = L(t), a = C(), l = C(0), o = C(0), s = C(0), c = F(() => Math.ceil(l.value / r.value)), d = F(() => n.value.slice(s.value, Math.min(s.value + c.value, n.value.length)));
    Ce(() => {
      var m;
      l.value = (m = a.value) == null ? void 0 : m.clientHeight;
    });
    const u = (m) => {
      const {
        scrollTop: w
      } = m.target;
      s.value = Math.floor(w / r.value), o.value = w - w % r.value;
    };
    return () => f(i.value, {
      class: "s-virtual-list__container",
      ref: a,
      onScroll: u
    }, {
      default: () => [f("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${n.value.length * r.value}px`
        }
      }, null), f("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${o.value}px, 0)`
        }
      }, [d.value.map((m, w) => {
        var x;
        return (x = e.default) == null ? void 0 : x.call(e, {
          item: m,
          index: w
        });
      })])]
    });
  }
}), De = T({
  name: "STree",
  props: dt,
  emits: ["lazy-load", "check"],
  setup(t, e) {
    const {
      data: n,
      height: r,
      itemHeight: i,
      accordion: a
    } = L(t), {
      slots: l
    } = e, o = Mt(n, t, e);
    return M("TREE_UTILS", o), () => {
      const s = (c) => f(Ut, ee(t, {
        treeNode: c,
        onClick: a.value ? (d) => o.toggleNode(d, c, a.value) : ""
      }), {
        content: () => l.content ? l.content(c) : c.label,
        icon: () => l.icon ? l.icon({
          nodeData: c,
          toggleNode: o.toggleNode
        }) : f(Yt, {
          expanded: !!c.expanded,
          onClick: (d) => o.toggleNode(d, c, a.value)
        }, null),
        loading: () => l.loading ? l.loading({
          nodeData: o
        }) : f("span", {
          class: "ml-1"
        }, [X("loading...")])
      });
      return f("div", {
        class: "s-tree"
      }, [r != null && r.value ? f("div", {
        style: {
          height: `${r.value}px`
        }
      }, [f(Kt, {
        data: o.expandedTree.value,
        itemHeight: i.value
      }, {
        default: ({
          item: c
        }) => s(c)
      })]) : o.expandedTree.value.map((c) => s(c))]);
    };
  }
}), Jt = {
  install(t) {
    t.component(De.name, De);
  }
}, ft = {
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  modelValue: {
    type: Number,
    default: 1
  },
  hideOnSinglePage: {
    type: Boolean,
    default: !0
  }
};
function Zt(t = 1) {
  const e = C(t), n = (l) => {
    e.value = l;
  }, r = (l) => {
    e.value += l;
  };
  return {
    pageIndex: e,
    setPageIndex: n,
    jumpPage: r,
    prevPage: () => r(-1),
    nextPage: () => r(1)
  };
}
const Gt = (t, e, n) => {
  const r = Array.from(Array(t).keys());
  if (t <= n)
    return r.slice(2, t);
  {
    const i = Math.ceil(n / 2);
    return e <= i ? r.slice(2, n) : e >= t - i + 1 ? r.slice(t - n + 2, t) : r.slice(e - i + 2, e + i - 1);
  }
}, Qt = ft, xe = T({
  name: "SPager",
  props: Qt,
  setup(t) {
    const {
      total: e,
      pageSize: n,
      pagerCount: r,
      hideOnSinglePage: i
    } = L(t), a = F(() => Math.ceil(e.value / n.value)), {
      pageIndex: l,
      setPageIndex: o,
      jumpPage: s,
      prevPage: c,
      nextPage: d
    } = Zt(), u = F(() => Gt(a.value, l.value, r.value));
    return {
      totalPage: a,
      pageIndex: l,
      setPageIndex: o,
      jumpPage: s,
      prevPage: c,
      nextPage: d,
      centerPages: u,
      hideOnSinglePage: i
    };
  },
  render() {
    const {
      pagerCount: t,
      totalPage: e,
      pageIndex: n,
      setPageIndex: r,
      jumpPage: i,
      centerPages: a,
      hideOnSinglePage: l
    } = this;
    return f(z, null, [l && a.length >= 0 && f("ul", {
      class: "s-pager"
    }, [f("li", {
      onClick: () => r(1),
      class: {
        current: n === 1
      }
    }, [X("1")]), e > t && n > Math.ceil(t / 2) && f("li", {
      class: "more left",
      onClick: () => i(-5)
    }, [X("...")]), a.map((o) => f("li", {
      onClick: () => r(o),
      class: {
        current: n === o
      }
    }, [o])), e > t && n < e - Math.ceil(t / 2) + 1 && f("li", {
      class: "more right",
      onClick: () => i(5)
    }, [X("...")]), e > 1 && f("li", {
      onClick: () => r(e),
      class: {
        current: n === e
      }
    }, [e])])]);
  }
}), qe = T({
  name: "SPagination",
  props: ft,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = C(), r = F(() => n.value ? n.value.pageIndex < 2 : !0), i = F(() => n.value ? n.value.pageIndex > n.value.totalPage - 1 : !0);
    return Ce(() => {
      Q(() => n.value.pageIndex, (a) => {
        e("update:modelValue", a);
      }), Q(() => t.modelValue, (a) => {
        n.value.pageIndex = a;
      });
    }), () => f("div", {
      class: "s-pagination"
    }, [f("button", {
      disabled: r.value,
      onClick: () => n.value.prevPage()
    }, [X("上一页")]), f(xe, ee(t, {
      ref: n
    }), null), f("button", {
      disabled: i.value,
      onClick: () => n.value.nextPage()
    }, [X("下一页")])]);
  }
}), en = {
  install(t) {
    t.component(qe.name, qe), t.component(xe.name, xe);
  }
}, pt = Symbol("formContextToken"), tn = {
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
const Ve = T({
  name: "SForm",
  props: tn,
  emits: ["submit"],
  setup(t, {
    slots: e,
    emit: n,
    expose: r
  }) {
    const i = F(() => ({
      layout: t.layout,
      labelSize: t.labelSize,
      labelAlign: t.labelAlign
    }));
    M("LABEL_DATA", i);
    const a = /* @__PURE__ */ new Set(), l = (d) => a.add(d), o = (d) => a.delete(d);
    M(pt, {
      model: t.model,
      rules: t.rules,
      addItem: l,
      removeItem: o
    });
    const s = (d) => {
      d.preventDefault(), n("submit");
    };
    return r({
      validate: (d) => {
        const u = [];
        a.forEach((m) => u.push(m.validate())), Promise.all(u).then(() => d(!0)).catch(() => d(!1));
      }
    }), () => {
      var d;
      return f("form", {
        class: "s-form",
        onSubmit: s
      }, [(d = e.default) == null ? void 0 : d.call(e)]);
    };
  }
}), nn = {
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
function Y() {
  return Y = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Y.apply(this, arguments);
}
function rn(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, ie(t, e);
}
function Se(t) {
  return Se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Se(t);
}
function ie(t, e) {
  return ie = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ie(t, e);
}
function an() {
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
function de(t, e, n) {
  return an() ? de = Reflect.construct.bind() : de = function(i, a, l) {
    var o = [null];
    o.push.apply(o, a);
    var s = Function.bind.apply(i, o), c = new s();
    return l && ie(c, l.prototype), c;
  }, de.apply(null, arguments);
}
function on(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function Pe(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Pe = function(r) {
    if (r === null || !on(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, i);
    }
    function i() {
      return de(r, arguments, Se(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ie(i, r);
  }, Pe(t);
}
var ln = /%[sdj%]/g, mt = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (mt = function(e, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(e, n);
});
function _e(t) {
  if (!t || !t.length)
    return null;
  var e = {};
  return t.forEach(function(n) {
    var r = n.field;
    e[r] = e[r] || [], e[r].push(n);
  }), e;
}
function k(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  var i = 0, a = n.length;
  if (typeof t == "function")
    return t.apply(null, n);
  if (typeof t == "string") {
    var l = t.replace(ln, function(o) {
      if (o === "%%")
        return "%";
      if (i >= a)
        return o;
      switch (o) {
        case "%s":
          return String(n[i++]);
        case "%d":
          return Number(n[i++]);
        case "%j":
          try {
            return JSON.stringify(n[i++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return o;
      }
    });
    return l;
  }
  return t;
}
function sn(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function A(t, e) {
  return !!(t == null || e === "array" && Array.isArray(t) && !t.length || sn(e) && typeof t == "string" && !t);
}
function cn(t, e, n) {
  var r = [], i = 0, a = t.length;
  function l(o) {
    r.push.apply(r, o || []), i++, i === a && n(r);
  }
  t.forEach(function(o) {
    e(o, l);
  });
}
function Me(t, e, n) {
  var r = 0, i = t.length;
  function a(l) {
    if (l && l.length) {
      n(l);
      return;
    }
    var o = r;
    r = r + 1, o < i ? e(t[o], a) : n([]);
  }
  a([]);
}
function un(t) {
  var e = [];
  return Object.keys(t).forEach(function(n) {
    e.push.apply(e, t[n] || []);
  }), e;
}
var je = /* @__PURE__ */ function(t) {
  rn(e, t);
  function e(n, r) {
    var i;
    return i = t.call(this, "Async Validation Error") || this, i.errors = n, i.fields = r, i;
  }
  return e;
}(/* @__PURE__ */ Pe(Error));
function dn(t, e, n, r, i) {
  if (e.first) {
    var a = new Promise(function(m, w) {
      var x = function(p) {
        return r(p), p.length ? w(new je(p, _e(p))) : m(i);
      }, g = un(t);
      Me(g, n, x);
    });
    return a.catch(function(m) {
      return m;
    }), a;
  }
  var l = e.firstFields === !0 ? Object.keys(t) : e.firstFields || [], o = Object.keys(t), s = o.length, c = 0, d = [], u = new Promise(function(m, w) {
    var x = function(v) {
      if (d.push.apply(d, v), c++, c === s)
        return r(d), d.length ? w(new je(d, _e(d))) : m(i);
    };
    o.length || (r(d), m(i)), o.forEach(function(g) {
      var v = t[g];
      l.indexOf(g) !== -1 ? Me(v, n, x) : cn(v, n, x);
    });
  });
  return u.catch(function(m) {
    return m;
  }), u;
}
function fn(t) {
  return !!(t && t.message !== void 0);
}
function pn(t, e) {
  for (var n = t, r = 0; r < e.length; r++) {
    if (n == null)
      return n;
    n = n[e[r]];
  }
  return n;
}
function ze(t, e) {
  return function(n) {
    var r;
    return t.fullFields ? r = pn(e, t.fullFields) : r = e[n.field || t.fullField], fn(n) ? (n.field = n.field || t.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || t.fullField
    };
  };
}
function $e(t, e) {
  if (e) {
    for (var n in e)
      if (e.hasOwnProperty(n)) {
        var r = e[n];
        typeof r == "object" && typeof t[n] == "object" ? t[n] = Y({}, t[n], r) : t[n] = r;
      }
  }
  return t;
}
var gt = function(e, n, r, i, a, l) {
  e.required && (!r.hasOwnProperty(e.field) || A(n, l || e.type)) && i.push(k(a.messages.required, e.fullField));
}, mn = function(e, n, r, i, a) {
  (/^\s+$/.test(n) || n === "") && i.push(k(a.messages.whitespace, e.fullField));
}, ce, gn = function() {
  if (ce)
    return ce;
  var t = "[a-fA-F\\d:]", e = function(y) {
    return y && y.includeBoundaries ? "(?:(?<=\\s|^)(?=" + t + ")|(?<=" + t + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", i = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), l = new RegExp("^" + n + "$"), o = new RegExp("^" + i + "$"), s = function(y) {
    return y && y.exact ? a : new RegExp("(?:" + e(y) + n + e(y) + ")|(?:" + e(y) + i + e(y) + ")", "g");
  };
  s.v4 = function(h) {
    return h && h.exact ? l : new RegExp("" + e(h) + n + e(h), "g");
  }, s.v6 = function(h) {
    return h && h.exact ? o : new RegExp("" + e(h) + i + e(h), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", u = s.v4().source, m = s.v6().source, w = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", x = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", v = "(?::\\d{2,5})?", p = '(?:[/?#][^\\s"]*)?', b = "(?:" + c + "|www\\.)" + d + "(?:localhost|" + u + "|" + m + "|" + w + x + g + ")" + v + p;
  return ce = new RegExp("(?:^" + b + "$)", "i"), ce;
}, He = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, te = {
  integer: function(e) {
    return te.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return te.number(e) && !te.integer(e);
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
    return typeof e == "object" && !te.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match(He.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(gn());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(He.hex);
  }
}, vn = function(e, n, r, i, a) {
  if (e.required && n === void 0) {
    gt(e, n, r, i, a);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], o = e.type;
  l.indexOf(o) > -1 ? te[o](n) || i.push(k(a.messages.types[o], e.fullField, e.type)) : o && typeof n !== e.type && i.push(k(a.messages.types[o], e.fullField, e.type));
}, hn = function(e, n, r, i, a) {
  var l = typeof e.len == "number", o = typeof e.min == "number", s = typeof e.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, u = null, m = typeof n == "number", w = typeof n == "string", x = Array.isArray(n);
  if (m ? u = "number" : w ? u = "string" : x && (u = "array"), !u)
    return !1;
  x && (d = n.length), w && (d = n.replace(c, "_").length), l ? d !== e.len && i.push(k(a.messages[u].len, e.fullField, e.len)) : o && !s && d < e.min ? i.push(k(a.messages[u].min, e.fullField, e.min)) : s && !o && d > e.max ? i.push(k(a.messages[u].max, e.fullField, e.max)) : o && s && (d < e.min || d > e.max) && i.push(k(a.messages[u].range, e.fullField, e.min, e.max));
}, Z = "enum", yn = function(e, n, r, i, a) {
  e[Z] = Array.isArray(e[Z]) ? e[Z] : [], e[Z].indexOf(n) === -1 && i.push(k(a.messages[Z], e.fullField, e[Z].join(", ")));
}, bn = function(e, n, r, i, a) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(n) || i.push(k(a.messages.pattern.mismatch, e.fullField, n, e.pattern));
    else if (typeof e.pattern == "string") {
      var l = new RegExp(e.pattern);
      l.test(n) || i.push(k(a.messages.pattern.mismatch, e.fullField, n, e.pattern));
    }
  }
}, P = {
  required: gt,
  whitespace: mn,
  type: vn,
  range: hn,
  enum: yn,
  pattern: bn
}, wn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (A(n, "string") && !e.required)
      return r();
    P.required(e, n, i, l, a, "string"), A(n, "string") || (P.type(e, n, i, l, a), P.range(e, n, i, l, a), P.pattern(e, n, i, l, a), e.whitespace === !0 && P.whitespace(e, n, i, l, a));
  }
  r(l);
}, xn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (A(n) && !e.required)
      return r();
    P.required(e, n, i, l, a), n !== void 0 && P.type(e, n, i, l, a);
  }
  r(l);
}, Sn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (n === "" && (n = void 0), A(n) && !e.required)
      return r();
    P.required(e, n, i, l, a), n !== void 0 && (P.type(e, n, i, l, a), P.range(e, n, i, l, a));
  }
  r(l);
}, Pn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (A(n) && !e.required)
      return r();
    P.required(e, n, i, l, a), n !== void 0 && P.type(e, n, i, l, a);
  }
  r(l);
}, _n = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (A(n) && !e.required)
      return r();
    P.required(e, n, i, l, a), A(n) || P.type(e, n, i, l, a);
  }
  r(l);
}, On = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (A(n) && !e.required)
      return r();
    P.required(e, n, i, l, a), n !== void 0 && (P.type(e, n, i, l, a), P.range(e, n, i, l, a));
  }
  r(l);
}, En = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (A(n) && !e.required)
      return r();
    P.required(e, n, i, l, a), n !== void 0 && (P.type(e, n, i, l, a), P.range(e, n, i, l, a));
  }
  r(l);
}, Tn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (n == null && !e.required)
      return r();
    P.required(e, n, i, l, a, "array"), n != null && (P.type(e, n, i, l, a), P.range(e, n, i, l, a));
  }
  r(l);
}, Cn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (A(n) && !e.required)
      return r();
    P.required(e, n, i, l, a), n !== void 0 && P.type(e, n, i, l, a);
  }
  r(l);
}, An = "enum", kn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (A(n) && !e.required)
      return r();
    P.required(e, n, i, l, a), n !== void 0 && P[An](e, n, i, l, a);
  }
  r(l);
}, Fn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (A(n, "string") && !e.required)
      return r();
    P.required(e, n, i, l, a), A(n, "string") || P.pattern(e, n, i, l, a);
  }
  r(l);
}, Ln = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (A(n, "date") && !e.required)
      return r();
    if (P.required(e, n, i, l, a), !A(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), P.type(e, s, i, l, a), s && P.range(e, s.getTime(), i, l, a);
    }
  }
  r(l);
}, Nn = function(e, n, r, i, a) {
  var l = [], o = Array.isArray(n) ? "array" : typeof n;
  P.required(e, n, i, l, a, o), r(l);
}, be = function(e, n, r, i, a) {
  var l = e.type, o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (A(n, l) && !e.required)
      return r();
    P.required(e, n, i, o, a, l), A(n, l) || P.type(e, n, i, o, a);
  }
  r(o);
}, In = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (A(n) && !e.required)
      return r();
    P.required(e, n, i, l, a);
  }
  r(l);
}, ne = {
  string: wn,
  method: xn,
  number: Sn,
  boolean: Pn,
  regexp: _n,
  integer: On,
  float: En,
  array: Tn,
  object: Cn,
  enum: kn,
  pattern: Fn,
  date: Ln,
  url: be,
  hex: be,
  email: be,
  required: Nn,
  any: In
};
function Oe() {
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
var Ee = Oe(), le = /* @__PURE__ */ function() {
  function t(n) {
    this.rules = null, this._messages = Ee, this.define(n);
  }
  var e = t.prototype;
  return e.define = function(r) {
    var i = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(a) {
      var l = r[a];
      i.rules[a] = Array.isArray(l) ? l : [l];
    });
  }, e.messages = function(r) {
    return r && (this._messages = $e(Oe(), r)), this._messages;
  }, e.validate = function(r, i, a) {
    var l = this;
    i === void 0 && (i = {}), a === void 0 && (a = function() {
    });
    var o = r, s = i, c = a;
    if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, o), Promise.resolve(o);
    function d(g) {
      var v = [], p = {};
      function b(y) {
        if (Array.isArray(y)) {
          var S;
          v = (S = v).concat.apply(S, y);
        } else
          v.push(y);
      }
      for (var h = 0; h < g.length; h++)
        b(g[h]);
      v.length ? (p = _e(v), c(v, p)) : c(null, o);
    }
    if (s.messages) {
      var u = this.messages();
      u === Ee && (u = Oe()), $e(u, s.messages), s.messages = u;
    } else
      s.messages = this.messages();
    var m = {}, w = s.keys || Object.keys(this.rules);
    w.forEach(function(g) {
      var v = l.rules[g], p = o[g];
      v.forEach(function(b) {
        var h = b;
        typeof h.transform == "function" && (o === r && (o = Y({}, o)), p = o[g] = h.transform(p)), typeof h == "function" ? h = {
          validator: h
        } : h = Y({}, h), h.validator = l.getValidationMethod(h), h.validator && (h.field = g, h.fullField = h.fullField || g, h.type = l.getType(h), m[g] = m[g] || [], m[g].push({
          rule: h,
          value: p,
          source: o,
          field: g
        }));
      });
    });
    var x = {};
    return dn(m, s, function(g, v) {
      var p = g.rule, b = (p.type === "object" || p.type === "array") && (typeof p.fields == "object" || typeof p.defaultField == "object");
      b = b && (p.required || !p.required && g.value), p.field = g.field;
      function h(_, O) {
        return Y({}, O, {
          fullField: p.fullField + "." + _,
          fullFields: p.fullFields ? [].concat(p.fullFields, [_]) : [_]
        });
      }
      function y(_) {
        _ === void 0 && (_ = []);
        var O = Array.isArray(_) ? _ : [_];
        !s.suppressWarning && O.length && t.warning("async-validator:", O), O.length && p.message !== void 0 && (O = [].concat(p.message));
        var E = O.map(ze(p, o));
        if (s.first && E.length)
          return x[p.field] = 1, v(E);
        if (!b)
          v(E);
        else {
          if (p.required && !g.value)
            return p.message !== void 0 ? E = [].concat(p.message).map(ze(p, o)) : s.error && (E = [s.error(p, k(s.messages.required, p.field))]), v(E);
          var N = {};
          p.defaultField && Object.keys(g.value).map(function(B) {
            N[B] = p.defaultField;
          }), N = Y({}, N, g.rule.fields);
          var I = {};
          Object.keys(N).forEach(function(B) {
            var D = N[B], Et = Array.isArray(D) ? D : [D];
            I[B] = Et.map(h.bind(null, B));
          });
          var J = new t(I);
          J.messages(s.messages), g.rule.options && (g.rule.options.messages = s.messages, g.rule.options.error = s.error), J.validate(g.value, g.rule.options || s, function(B) {
            var D = [];
            E && E.length && D.push.apply(D, E), B && B.length && D.push.apply(D, B), v(D.length ? D : null);
          });
        }
      }
      var S;
      if (p.asyncValidator)
        S = p.asyncValidator(p, g.value, y, g.source, s);
      else if (p.validator) {
        try {
          S = p.validator(p, g.value, y, g.source, s);
        } catch (_) {
          console.error == null || console.error(_), s.suppressValidatorError || setTimeout(function() {
            throw _;
          }, 0), y(_.message);
        }
        S === !0 ? y() : S === !1 ? y(typeof p.message == "function" ? p.message(p.fullField || p.field) : p.message || (p.fullField || p.field) + " fails") : S instanceof Array ? y(S) : S instanceof Error && y(S.message);
      }
      S && S.then && S.then(function() {
        return y();
      }, function(_) {
        return y(_);
      });
    }, function(g) {
      d(g);
    }, o);
  }, e.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !ne.hasOwnProperty(r.type))
      throw new Error(k("Unknown rule type %s", r.type));
    return r.type || "string";
  }, e.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var i = Object.keys(r), a = i.indexOf("message");
    return a !== -1 && i.splice(a, 1), i.length === 1 && i[0] === "required" ? ne.required : ne[this.getType(r)] || void 0;
  }, t;
}();
le.register = function(e, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  ne[e] = n;
};
le.warning = mt;
le.messages = Ee;
le.validators = ne;
const We = T({
  name: "SFormItem",
  props: nn,
  setup(t, {
    slots: e
  }) {
    const {
      error: n
    } = L(t), r = V("LABEL_DATA"), i = F(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": r.value.layout === "horizontal",
      "s-form__item--vertical": r.value.layout === "vertical"
    })), a = F(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": r.value.layout === "vertical",
      [`s-form__label--${r.value.labelAlign}`]: r.value.layout === "horizontal",
      [`s-form__label--${r.value.labelSize}`]: r.value.layout === "horizontal"
    })), l = V(pt), o = C(!1), s = C(""), d = {
      validate: () => {
        if (!l)
          return console.warn("请在Form中使用FormItem"), Promise.reject("请在Form中使用FormItem");
        if (!l.rules)
          return Promise.resolve({
            result: !0
          });
        if (!t.prop)
          return console.warn("如果要校验当前项，请设置prop字段"), Promise.reject("如果要校验当前项，请设置prop字段");
        const u = l.rules[t.prop] || void 0;
        if (!u)
          return Promise.resolve({
            result: !0
          });
        const m = l.model[t.prop];
        return new le({
          [t.prop]: u
        }).validate({
          [t.prop]: m
        }, (x) => {
          x ? (o.value = !0, s.value = x[0].message || "校验错误") : (o.value = !1, s.value = "");
        });
      }
    };
    return M("FORM_ITEM_CTX", d), Ce(() => {
      t.prop && (l == null || l.addItem(d));
    }), ot(() => {
      t.prop && (l == null || l.removeItem(d));
    }), () => {
      var u;
      return f("div", {
        class: i.value
      }, [f("span", {
        class: a.value
      }, [t.label]), f("div", null, [(u = e.default) == null ? void 0 : u.call(e)]), n.value && f("div", {
        class: "error-message"
      }, [n.value]), o.value && f("div", {
        class: "error-message"
      }, [s.value])]);
    };
  }
}), Rn = {
  install(t) {
    t.component(Ve.name, Ve), t.component(We.name, We);
  }
}, Bn = {
  modelValue: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  }
};
const Ue = T({
  name: "SInput",
  props: Bn,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = V("FORM_ITEM_CTX"), r = (i) => {
      const a = i.target.value;
      e("update:modelValue", a), n.validate();
    };
    return () => f("div", {
      class: "s-input"
    }, [f("input", {
      class: "s-input__input",
      value: t.modelValue,
      onInput: r,
      type: t.type
    }, null)]);
  }
}), Dn = {
  install(t) {
    t.component(Ue.name, Ue);
  }
}, qn = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  title: {
    type: String,
    default: ""
  },
  showClose: {
    type: Boolean,
    default: !0
  },
  width: {
    type: String,
    default: "30%"
  },
  center: {
    type: Boolean,
    default: !1
  },
  alignCenter: {
    type: Boolean,
    default: !1
  },
  backgroundColor: {
    type: String,
    default: ""
  },
  top: {
    type: [String, Number],
    default: "15vh"
  }
};
const Vn = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
const Mn = T({
  name: "SBaseModal",
  props: Vn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      modelValue: r
    } = L(t);
    return () => {
      var i;
      return f("div", null, [r.value && f("div", {
        class: "s-base-modal"
      }, [f("div", {
        class: "s-base-modal__mask",
        onClick: () => {
          n("update:modelValue", !1);
        }
      }, null), (i = e.default) == null ? void 0 : i.call(e)])]);
    };
  }
}), Ye = T({
  name: "SModal",
  props: qn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      modelValue: r,
      title: i,
      showClose: a,
      width: l,
      center: o,
      alignCenter: s,
      backgroundColor: c,
      top: d
    } = L(t), u = s.value ? {
      marginTop: 0,
      top: "50%",
      transform: "translateY(-50%)"
    } : null, m = F(() => typeof d.value == "number" ? `${d.value}px` : d.value);
    return () => f(Mn, {
      class: "s-modal",
      modelValue: r.value,
      "onUpdate:modelValue": () => {
        n("update:modelValue");
      }
    }, {
      default: () => {
        var w, x, g;
        return [f("div", {
          class: "s-modal__container",
          style: {
            width: l.value,
            ...u,
            marginTop: m.value,
            backgroundColor: c.value
          }
        }, [e.header ? (w = e.header) == null ? void 0 : w.call(e, {
          close: () => {
            n("update:modelValue", !1);
          }
        }) : f("div", {
          class: "s-modal__header",
          style: {
            textAlign: o.value ? "center" : "left"
          }
        }, [i.value, a.value && f("svg", {
          onClick: () => {
            n("update:modelValue", !1);
          },
          class: "s-modal__close",
          viewBox: "0 0 1024 1024",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg"
        }, [f("path", {
          fill: "currentColor",
          d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
        }, null)])]), f("div", {
          className: "s-modal__body"
        }, [(x = e.default) == null ? void 0 : x.call(e)]), f("div", {
          className: "s-modal__footer"
        }, [(g = e.footer) == null ? void 0 : g.call(e)])])];
      }
    });
  }
}), jn = {
  install(t) {
    t.component(Ye.name, Ye);
  }
}, zn = {
  modelValue: {
    type: String,
    default: ""
  },
  closable: {
    type: Boolean,
    default: !1
  },
  addable: {
    type: Boolean,
    default: !1
  }
};
const Xe = T({
  name: "STabs",
  props: zn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const n = C([]);
    M("active-data", n);
    const r = C(t.modelValue);
    M("active-tab", r);
    const i = (o) => {
      r.value = o;
    }, a = (o, s) => {
      const c = n.value.findIndex((d) => d.id === s);
      n.value.splice(c, 1), o.stopPropagation(), n.value.length === c ? i(n.value[c - 1].id) : i(n.value[c].id);
    }, l = () => {
      const o = ut();
      n.value.push({
        id: o,
        type: "random",
        title: `Tab${o}`,
        content: `Tab${o} Content`
      }), r.value = o;
    };
    return () => {
      var o;
      return f("div", {
        class: "s-tabs"
      }, [f("ul", {
        class: "s-tabs__nav"
      }, [n.value.map((s) => f("li", {
        onClick: () => i(s.id),
        class: s.id === r.value ? "active" : ""
      }, [s.title, t.closable && f("svg", {
        onClick: (c) => a(c, s.id),
        style: "margin-left: 8px;",
        viewBox: "0 0 1024 1024",
        width: "12",
        height: "12"
      }, [f("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])])), t.addable && f("li", null, [f("svg", {
        onClick: l,
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14"
      }, [f("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)])])]), (o = e.default) == null ? void 0 : o.call(e), n.value.filter((s) => s.type === "random").map((s) => f("div", {
        class: "s-tab"
      }, [s.id === r.value && s.content]))]);
    };
  }
}), $n = {
  id: {
    type: String,
    required: !0
  },
  title: {
    type: String,
    required: !0
  }
};
const Ke = T({
  name: "STab",
  props: $n,
  setup(t, {
    slots: e
  }) {
    const n = V("active-tab");
    return V("active-data").value.push({
      id: t.id,
      title: t.title
    }), () => {
      var i;
      return f(z, null, [t.id === n.value && f("div", {
        class: "s-tab"
      }, [(i = e.default) == null ? void 0 : i.call(e)])]);
    };
  }
}), Hn = {
  install(t) {
    t.component(Xe.name, Xe), t.component(Ke.name, Ke);
  }
}, Wn = {
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
const Un = {
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
function K(t) {
  return t.split("-")[1];
}
function Fe(t) {
  return t === "y" ? "height" : "width";
}
function se(t) {
  return t.split("-")[0];
}
function ge(t) {
  return ["top", "bottom"].includes(se(t)) ? "x" : "y";
}
function Je(t, e, n) {
  let {
    reference: r,
    floating: i
  } = t;
  const a = r.x + r.width / 2 - i.width / 2, l = r.y + r.height / 2 - i.height / 2, o = ge(e), s = Fe(o), c = r[s] / 2 - i[s] / 2, d = se(e), u = o === "x";
  let m;
  switch (d) {
    case "top":
      m = {
        x: a,
        y: r.y - i.height
      };
      break;
    case "bottom":
      m = {
        x: a,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: l
      };
      break;
    case "left":
      m = {
        x: r.x - i.width,
        y: l
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (K(e)) {
    case "start":
      m[o] -= c * (n && u ? -1 : 1);
      break;
    case "end":
      m[o] += c * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const Yn = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: a = [],
    platform: l
  } = n, o = a.filter(Boolean), s = await (l.isRTL == null ? void 0 : l.isRTL(e));
  if (process.env.NODE_ENV !== "production") {
    if (l == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), o.filter((g) => {
      let {
        name: v
      } = g;
      return v === "autoPlacement" || v === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!t || !e) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
  }
  let c = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: d,
    y: u
  } = Je(c, r, s), m = r, w = {}, x = 0;
  for (let g = 0; g < o.length; g++) {
    const {
      name: v,
      fn: p
    } = o[g], {
      x: b,
      y: h,
      data: y,
      reset: S
    } = await p({
      x: d,
      y: u,
      initialPlacement: r,
      placement: m,
      strategy: i,
      middlewareData: w,
      rects: c,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (d = b ?? d, u = h ?? u, w = {
      ...w,
      [v]: {
        ...w[v],
        ...y
      }
    }, process.env.NODE_ENV !== "production" && x > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), S && x <= 50) {
      x++, typeof S == "object" && (S.placement && (m = S.placement), S.rects && (c = S.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : S.rects), {
        x: d,
        y: u
      } = Je(c, m, s)), g = -1;
      continue;
    }
  }
  return {
    x: d,
    y: u,
    placement: m,
    strategy: i,
    middlewareData: w
  };
};
function Xn(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function vt(t) {
  return typeof t != "number" ? Xn(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function pe(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Kn(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: i,
    platform: a,
    rects: l,
    elements: o,
    strategy: s
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: m = !1,
    padding: w = 0
  } = e, x = vt(w), v = o[m ? u === "floating" ? "reference" : "floating" : u], p = pe(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(v))) == null || n ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(o.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: s
  })), b = u === "floating" ? {
    ...l.floating,
    x: r,
    y: i
  } : l.reference, h = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(o.floating)), y = await (a.isElement == null ? void 0 : a.isElement(h)) ? await (a.getScale == null ? void 0 : a.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = pe(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: h,
    strategy: s
  }) : b);
  return process.env.NODE_ENV, {
    top: (p.top - S.top + x.top) / y.y,
    bottom: (S.bottom - p.bottom + x.bottom) / y.y,
    left: (p.left - S.left + x.left) / y.x,
    right: (S.right - p.right + x.right) / y.x
  };
}
const Jn = Math.min, Zn = Math.max;
function Gn(t, e, n) {
  return Zn(t, Jn(e, n));
}
const Qn = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: r = 0
    } = t || {}, {
      x: i,
      y: a,
      placement: l,
      rects: o,
      platform: s
    } = e;
    if (n == null)
      return process.env.NODE_ENV !== "production" && console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const c = vt(r), d = {
      x: i,
      y: a
    }, u = ge(l), m = Fe(u), w = await s.getDimensions(n), x = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", v = o.reference[m] + o.reference[u] - d[u] - o.floating[m], p = d[u] - o.reference[u], b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(n));
    let h = b ? u === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0;
    h === 0 && (h = o.floating[m]);
    const y = v / 2 - p / 2, S = c[x], _ = h - w[m] - c[g], O = h / 2 - w[m] / 2 + y, E = Gn(S, O, _), I = K(l) != null && O != E && o.reference[m] / 2 - (O < S ? c[x] : c[g]) - w[m] / 2 < 0 ? O < S ? S - O : _ - O : 0;
    return {
      [u]: d[u] - I,
      data: {
        [u]: E,
        centerOffset: O - E
      }
    };
  }
}), er = ["top", "right", "bottom", "left"], Ze = /* @__PURE__ */ er.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []), tr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ge(t) {
  return t.replace(/left|right|bottom|top/g, (e) => tr[e]);
}
function nr(t, e, n) {
  n === void 0 && (n = !1);
  const r = K(t), i = ge(t), a = Fe(i);
  let l = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (l = Ge(l)), {
    main: l,
    cross: Ge(l)
  };
}
const rr = {
  start: "end",
  end: "start"
};
function ir(t) {
  return t.replace(/start|end/g, (e) => rr[e]);
}
function ar(t, e, n) {
  return (t ? [...n.filter((i) => K(i) === t), ...n.filter((i) => K(i) !== t)] : n.filter((i) => se(i) === i)).filter((i) => t ? K(i) === t || (e ? ir(i) !== i : !1) : !0);
}
const or = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, r, i;
      const {
        rects: a,
        middlewareData: l,
        placement: o,
        platform: s,
        elements: c
      } = e, {
        alignment: d,
        allowedPlacements: u = Ze,
        autoAlignment: m = !0,
        ...w
      } = t, x = d !== void 0 || u === Ze ? ar(d || null, m, u) : u, g = await Kn(e, w), v = ((n = l.autoPlacement) == null ? void 0 : n.index) || 0, p = x[v];
      if (p == null)
        return {};
      const {
        main: b,
        cross: h
      } = nr(p, a, await (s.isRTL == null ? void 0 : s.isRTL(c.floating)));
      if (o !== p)
        return {
          reset: {
            placement: x[0]
          }
        };
      const y = [g[se(p)], g[b], g[h]], S = [...((r = l.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: p,
        overflows: y
      }], _ = x[v + 1];
      if (_)
        return {
          data: {
            index: v + 1,
            overflows: S
          },
          reset: {
            placement: _
          }
        };
      const O = S.slice().sort((I, J) => I.overflows[0] - J.overflows[0]), N = ((i = O.find((I) => {
        let {
          overflows: J
        } = I;
        return J.every((B) => B <= 0);
      })) == null ? void 0 : i.placement) || O[0].placement;
      return N !== o ? {
        data: {
          index: v + 1,
          overflows: S
        },
        reset: {
          placement: N
        }
      } : {};
    }
  };
};
async function lr(t, e) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = t, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), l = se(n), o = K(n), s = ge(n) === "x", c = ["left", "top"].includes(l) ? -1 : 1, d = a && s ? -1 : 1, u = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: m,
    crossAxis: w,
    alignmentAxis: x
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return o && typeof x == "number" && (w = o === "end" ? x * -1 : x), s ? {
    x: w * d,
    y: m * c
  } : {
    x: m * c,
    y: w * d
  };
}
const sr = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, i = await lr(e, t);
      return {
        x: n + i.x,
        y: r + i.y,
        data: i
      };
    }
  };
};
function R(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function q(t) {
  return R(t).getComputedStyle(t);
}
function H(t) {
  return yt(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ue;
function ht() {
  if (ue)
    return ue;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ue = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ue) : navigator.userAgent;
}
function j(t) {
  return t instanceof R(t).HTMLElement;
}
function W(t) {
  return t instanceof R(t).Element;
}
function yt(t) {
  return t instanceof R(t).Node;
}
function Qe(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = R(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function ve(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: i
  } = q(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(i);
}
function cr(t) {
  return ["table", "td", "th"].includes(H(t));
}
function Le(t) {
  const e = /firefox/i.test(ht()), n = q(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    (i) => {
      const a = n.contain;
      return a != null ? a.includes(i) : !1;
    }
  );
}
function bt() {
  return !/^((?!chrome|android).)*safari/i.test(ht());
}
function Ne(t) {
  return ["html", "body", "#document"].includes(H(t));
}
const et = Math.min, re = Math.max, me = Math.round;
function wt(t) {
  const e = q(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const i = t.offsetWidth, a = t.offsetHeight, l = me(n) !== i || me(r) !== a;
  return l && (n = i, r = a), {
    width: n,
    height: r,
    fallback: l
  };
}
function xt(t) {
  return W(t) ? t : t.contextElement;
}
const St = {
  x: 1,
  y: 1
};
function G(t) {
  const e = xt(t);
  if (!j(e))
    return St;
  const n = e.getBoundingClientRect(), {
    width: r,
    height: i,
    fallback: a
  } = wt(e);
  let l = (a ? me(n.width) : n.width) / r, o = (a ? me(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!o || !Number.isFinite(o)) && (o = 1), {
    x: l,
    y: o
  };
}
function ae(t, e, n, r) {
  var i, a;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), o = xt(t);
  let s = St;
  e && (r ? W(r) && (s = G(r)) : s = G(t));
  const c = o ? R(o) : window, d = !bt() && n;
  let u = (l.left + (d && ((i = c.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / s.x, m = (l.top + (d && ((a = c.visualViewport) == null ? void 0 : a.offsetTop) || 0)) / s.y, w = l.width / s.x, x = l.height / s.y;
  if (o) {
    const g = R(o), v = r && W(r) ? R(r) : r;
    let p = g.frameElement;
    for (; p && r && v !== g; ) {
      const b = G(p), h = p.getBoundingClientRect(), y = getComputedStyle(p);
      h.x += (p.clientLeft + parseFloat(y.paddingLeft)) * b.x, h.y += (p.clientTop + parseFloat(y.paddingTop)) * b.y, u *= b.x, m *= b.y, w *= b.x, x *= b.y, u += h.x, m += h.y, p = R(p).frameElement;
    }
  }
  return {
    width: w,
    height: x,
    top: m,
    right: u + w,
    bottom: m + x,
    left: u,
    x: u,
    y: m
  };
}
function U(t) {
  return ((yt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function he(t) {
  return W(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Pt(t) {
  return ae(U(t)).left + he(t).scrollLeft;
}
function ur(t, e, n) {
  const r = j(e), i = U(e), a = ae(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const o = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((H(e) !== "body" || ve(i)) && (l = he(e)), j(e)) {
      const s = ae(e, !0);
      o.x = s.x + e.clientLeft, o.y = s.y + e.clientTop;
    } else
      i && (o.x = Pt(i));
  return {
    x: a.left + l.scrollLeft - o.x,
    y: a.top + l.scrollTop - o.y,
    width: a.width,
    height: a.height
  };
}
function oe(t) {
  if (H(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (Qe(t) ? t.host : null) || U(t);
  return Qe(e) ? e.host : e;
}
function tt(t) {
  return !j(t) || q(t).position === "fixed" ? null : t.offsetParent;
}
function dr(t) {
  let e = oe(t);
  for (; j(e) && !Ne(e); ) {
    if (Le(e))
      return e;
    e = oe(e);
  }
  return null;
}
function nt(t) {
  const e = R(t);
  let n = tt(t);
  for (; n && cr(n) && q(n).position === "static"; )
    n = tt(n);
  return n && (H(n) === "html" || H(n) === "body" && q(n).position === "static" && !Le(n)) ? e : n || dr(t) || e;
}
function fr(t) {
  return wt(t);
}
function pr(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const i = j(n), a = U(n);
  if (n === a)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, o = {
    x: 1,
    y: 1
  };
  const s = {
    x: 0,
    y: 0
  };
  if ((i || !i && r !== "fixed") && ((H(n) !== "body" || ve(a)) && (l = he(n)), j(n))) {
    const c = ae(n);
    o = G(n), s.x = c.x + n.clientLeft, s.y = c.y + n.clientTop;
  }
  return {
    width: e.width * o.x,
    height: e.height * o.y,
    x: e.x * o.x - l.scrollLeft * o.x + s.x,
    y: e.y * o.y - l.scrollTop * o.y + s.y
  };
}
function mr(t, e) {
  const n = R(t), r = U(t), i = n.visualViewport;
  let a = r.clientWidth, l = r.clientHeight, o = 0, s = 0;
  if (i) {
    a = i.width, l = i.height;
    const c = bt();
    (c || !c && e === "fixed") && (o = i.offsetLeft, s = i.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: o,
    y: s
  };
}
function gr(t) {
  var e;
  const n = U(t), r = he(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, a = re(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = re(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let o = -r.scrollLeft + Pt(t);
  const s = -r.scrollTop;
  return q(i || n).direction === "rtl" && (o += re(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: l,
    x: o,
    y: s
  };
}
function _t(t) {
  const e = oe(t);
  return Ne(e) ? t.ownerDocument.body : j(e) && ve(e) ? e : _t(e);
}
function Ot(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = _t(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), a = R(r);
  return i ? e.concat(a, a.visualViewport || [], ve(r) ? r : []) : e.concat(r, Ot(r));
}
function vr(t, e) {
  const n = ae(t, !0, e === "fixed"), r = n.top + t.clientTop, i = n.left + t.clientLeft, a = j(t) ? G(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * a.x, o = t.clientHeight * a.y, s = i * a.x, c = r * a.y;
  return {
    top: c,
    left: s,
    right: s + l,
    bottom: c + o,
    x: s,
    y: c,
    width: l,
    height: o
  };
}
function rt(t, e, n) {
  return e === "viewport" ? pe(mr(t, n)) : W(e) ? vr(e, n) : pe(gr(U(t)));
}
function hr(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = Ot(t).filter((o) => W(o) && H(o) !== "body"), i = null;
  const a = q(t).position === "fixed";
  let l = a ? oe(t) : t;
  for (; W(l) && !Ne(l); ) {
    const o = q(l), s = Le(l);
    (a ? !s && !i : !s && o.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? r = r.filter((d) => d !== l) : i = o, l = oe(l);
  }
  return e.set(t, r), r;
}
function yr(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? hr(e, this._c) : [].concat(n), r], o = l[0], s = l.reduce((c, d) => {
    const u = rt(e, d, i);
    return c.top = re(u.top, c.top), c.right = et(u.right, c.right), c.bottom = et(u.bottom, c.bottom), c.left = re(u.left, c.left), c;
  }, rt(e, o, i));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
const br = {
  getClippingRect: yr,
  convertOffsetParentRelativeRectToViewportRelativeRect: pr,
  isElement: W,
  getDimensions: fr,
  getOffsetParent: nt,
  getDocumentElement: U,
  getScale: G,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: r
    } = t;
    const i = this.getOffsetParent || nt, a = this.getDimensions;
    return {
      reference: ur(e, await i(n), r),
      floating: {
        x: 0,
        y: 0,
        ...await a(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => q(t).direction === "rtl"
}, wr = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: br,
    ...n
  }, a = {
    ...i.platform,
    _c: r
  };
  return Yn(t, e, {
    ...i,
    platform: a
  });
};
const xr = T({
  name: "SBasePopover",
  props: Un,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    attrs: n
  }) {
    const {
      host: r,
      modelValue: i,
      showArrow: a,
      placement: l
    } = L(t), o = C(), s = C(), c = () => {
      const u = [];
      a.value && (u.push(sr(8)), u.push(Qn({
        element: o.value
      }))), l.value || u.push(or()), wr(r.value, s.value, {
        middleware: u,
        placement: l.value || "bottom"
      }).then(({
        x: m,
        y: w,
        middlewareData: x,
        placement: g
      }) => {
        if (Object.assign(s.value.style, {
          left: `${m}px`,
          top: `${w}px`
        }), a.value) {
          const {
            x: v,
            y: p
          } = x.arrow, b = g.split("-")[0], h = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[b], y = ["top", "right", "bottom", "left"], S = y.indexOf(b) - 1, _ = y[S < 0 ? S + 4 : S];
          Object.assign(o.value.style, {
            left: `${v}px`,
            top: `${p}px`,
            [h]: "-4px",
            [`border-${b}-color`]: "transparent",
            [`border-${_}-color`]: "transparent"
          });
        }
      });
    }, d = new MutationObserver(() => c());
    return Q(i, (u) => {
      u ? (lt(c), r.value && d.observe(r.value, {
        attributes: !0
      }), window.addEventListener("resize", c), window.addEventListener("scroll", c)) : (d.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c));
    }, {
      immediate: !0
    }), ot(() => {
      d.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c);
    }), () => {
      var u;
      return f(z, null, [i.value && f("div", ee({
        ref: s,
        class: "s-base-popover"
      }, n), [(u = e.default) == null ? void 0 : u.call(e), a.value && f("div", {
        class: "s-base-popover__arrow",
        ref: o
      }, null)])]);
    };
  }
}), it = T({
  name: "SPopover",
  props: Wn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const {
      modelValue: n,
      title: r
    } = L(t);
    return () => f(z, null, [n.value && f(xr, ee({
      class: "s-popover"
    }, t), {
      default: () => {
        var i;
        return [f("h4", {
          class: "s-popover__title"
        }, [r.value]), (i = e.default) == null ? void 0 : i.call(e)];
      }
    })]);
  }
}), Sr = {
  install(t) {
    t.component(it.name, it);
  }
}, Pr = {
  data: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: []
  },
  border: {
    type: Boolean,
    default: !1
  },
  stripe: {
    type: Boolean,
    default: !1
  },
  showSummary: { type: Boolean, default: !1 }
}, _r = {
  columns: {
    type: Array,
    default: {}
  }
}, Or = {
  prop: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: ""
  }
};
const Te = T({
  name: "STableColumn",
  props: Or,
  setup(t) {
    const {
      prop: e,
      title: n,
      type: r
    } = L(t);
    V("column-data").value.push({
      prop: e.value,
      title: n.value,
      type: r.value
    });
    const a = V("all-checked"), l = V("is-indeterminate"), o = C();
    return lt(() => {
      o.value && (o.value.indeterminate = l.value);
    }), Q(l, () => {
      o.value && (o.value.indeterminate = l.value);
    }, {
      immediate: !0
    }), () => f("th", {
      class: "s-table-column"
    }, [r.value === "selection" ? st(f("input", {
      ref: o,
      type: "checkbox",
      "onUpdate:modelValue": (s) => a.value = s
    }, null), [[ct, a.value]]) : n.value]);
  }
}), Er = T({
  name: "STableHeader",
  props: _r,
  setup(t) {
    const {
      columns: e
    } = L(t);
    return () => f(z, null, [e.value.map((n, r) => f(Te, ee(n, {
      key: r
    }), null))]);
  }
}), Tr = T({
  name: "STableFooter",
  setup() {
    return () => f("div", {
      class: "table-footer"
    }, [X("table-footer")]);
  }
});
const at = T({
  name: "STable",
  props: Pr,
  emits: ["selection-change"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      data: r,
      border: i,
      stripe: a,
      columns: l,
      showSummary: o
    } = L(t), s = C([]);
    M("column-data", s), Q(r, (u) => {
      const m = u.filter((w) => w.checked);
      m.length === r.value.length ? (c.value = !0, d.value = !1) : m.length === 0 ? (c.value = !1, d.value = !1) : d.value = !0, n("selection-change", m);
    }, {
      deep: !0
    });
    const c = C(r.value.every((u) => u.checked));
    M("all-checked", c), Q(c, (u) => {
      r.value.forEach((m) => {
        m.checked = u;
      });
    });
    const d = C(r.value.some((u) => u.checked) && !c.value);
    return M("is-indeterminate", d), () => {
      var u;
      return f("table", {
        class: $("s-table", {
          "s-table--border": i.value,
          "s-table--striped": a.value
        })
      }, [f("thead", null, [f("tr", null, [l.value.length > 0 ? f(Er, {
        columns: l.value
      }, null) : (u = e.default) == null ? void 0 : u.call(e)])]), f("tbody", null, [r.value.map((m, w) => f("tr", {
        class: $({
          "s-table__row--striped": w % 2 == 1 && a.value
        })
      }, [s.value.map((x, g) => {
        var p, b, h;
        const v = (p = e.default) == null ? void 0 : p.call(e)[g];
        return v != null && v.children ? f("td", null, [(h = (b = v == null ? void 0 : v.children).default) == null ? void 0 : h.call(b, m)]) : f("td", null, [x.prop ? m[x.prop] : x.type === "selection" ? st(f("input", {
          type: "checkbox",
          "onUpdate:modelValue": (y) => m.checked = y
        }, null), [[ct, m.checked]]) : ""]);
      })]))]), o.value ? f(Tr, null, null) : null]);
    };
  }
}), Cr = {
  install(t) {
    t.component(at.name, at), t.component(Te.name, Te);
  }
}, Ar = [
  Nt,
  Jt,
  en,
  Rn,
  Dn,
  jn,
  Lt,
  Hn,
  Sr,
  Cr
], Fr = {
  version: "0.0.1",
  install(t) {
    Ar.forEach((e) => t.use(e));
  }
};
export {
  Ie as Button,
  Ve as Form,
  fe as Icon,
  Ue as Input,
  Ye as Modal,
  qe as Pagination,
  it as Popover,
  Ke as Tab,
  at as Table,
  Te as TableColumn,
  Xe as Tabs,
  De as Tree,
  Fr as default
};
