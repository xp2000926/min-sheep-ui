import { defineComponent as C, computed as L, createVNode as m, toRefs as R, Fragment as W, reactive as bt, ref as A, unref as wt, inject as J, mergeProps as ie, onMounted as Oe, provide as Z, createTextVNode as X, watch as ye, onUnmounted as tt, nextTick as xt } from "vue";
const Pt = {
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
}, _t = {
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
    var r, i, l, a, o, s = function(u, g) {
      g.parentNode.insertBefore(u, g);
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
      var u, g = document.createElement("div");
      g.innerHTML = t._iconfont_svg_string_1281272, (g = g.getElementsByTagName("svg")[0]) && (g.setAttribute("aria-hidden", "true"), g.style.position = "absolute", g.style.width = 0, g.style.height = 0, g.style.overflow = "hidden", g = g, (u = document.body).firstChild ? s(g, u.firstChild) : u.appendChild(g));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(r, 0) : (i = function() {
      document.removeEventListener("DOMContentLoaded", i, !1), r();
    }, document.addEventListener("DOMContentLoaded", i, !1)) : document.attachEvent && (l = r, a = t.document, o = !1, f(), a.onreadystatechange = function() {
      a.readyState == "complete" && (a.onreadystatechange = null, c());
    });
  }
  function c() {
    o || (o = !0, l());
  }
  function f() {
    try {
      a.documentElement.doScroll("left");
    } catch {
      return void setTimeout(f, 50);
    }
    c();
  }
}(window);
const ue = C({
  name: "SIcon",
  props: _t,
  setup(t) {
    const e = L(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = m("img", {
      src: t.name,
      style: {
        width: e.value,
        verticalAlign: "middle"
      }
    }, null), r = m("span", {
      class: [t.prefix, t.prefix + "-" + t.name],
      style: {
        fontSize: e.value,
        color: t.color
      }
    }, null), i = m("svg", {
      style: {
        width: e.value,
        height: e.value
      }
    }, [m("use", {
      "xlink:href": `#${t.prefix}-${t.component}`,
      fill: t.color
    }, null)]), l = t.component ? i : /http|https/.test(t.name) ? n : r;
    return () => l;
  }
}), St = (t) => {
  const e = t.size ? typeof t.size == "number" ? `${t.size}px` : t.size : void 0, n = t.color ? t.color : "black";
  return m("svg", {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-arrow-down",
    style: {
      width: e,
      height: e,
      fill: n,
      stroke: n
    }
  }, [m("path", {
    d: "m11.27 27.728 12.727 12.728 12.728-12.728M24 5v34.295"
  }, null)]);
}, Ot = {
  install(t) {
    t.component(ue.name, ue), t.component("ArrowDownIcon", St);
  }
};
const Fe = C({
  name: "SButton",
  props: Pt,
  setup(t, {
    slots: e
  }) {
    const {
      type: n,
      size: r,
      disabled: i,
      block: l,
      round: a,
      plain: o,
      circle: s,
      icon: c,
      iconSvg: f
    } = R(t), u = l.value ? "s-btn--block" : "", g = a.value ? "s-btn--round" : "", x = o.value ? "s-btn--plain" : "", P = s.value ? "s-btn--circle" : "", p = r.value === "mini" ? "18" : r.value === "small" ? "22" : r.value === "medium" ? "26" : "30";
    return () => m("button", {
      disabled: i.value,
      class: `s-btn s-btn--${n.value} s-btn--${r.value} ${u} ${g} ${x} ${P}`
    }, [e.default && c.value || e.default && f.value ? m(W, null, [m(ue, {
      name: c.value,
      component: f.value,
      size: p
    }, null), e.default()]) : e.default ? m(W, null, [e.icon && e.icon(), e.default()]) : c.value || f.value ? m(ue, {
      name: c.value,
      component: f.value,
      size: p
    }, null) : "按钮"]);
  }
}), Et = {
  install(t) {
    t.component(Fe.name, Fe);
  }
};
function Ee(t, e = 0, n = []) {
  return e++, t.reduce((r, i) => {
    const l = { ...i };
    l.level = e, n.length > 0 && n[n.length - 1].level >= e && n.pop(), n.push(l);
    const a = n[n.length - 2];
    if (a && (l.parentId = a.id), l.children) {
      const o = Ee(l.children, e, n);
      return delete l.children, r.concat(l, o);
    } else
      return l.isLeaf === void 0 && (l.isLeaf = !0), r.concat(l);
  }, []);
}
function Tt(t, { getChildren: e, getParent: n }, { emit: r }) {
  const i = (a) => {
    a.checked = !a.checked, e(a).forEach((u) => {
      u.checked = a.checked, u.inChecked = e(a, !0).every(
        (g) => g.inChecked
      );
    }), a.inChecked = !1, l(a);
    const o = t.value.map((u) => {
      if (u.checked)
        return u.id;
    }).filter(Boolean), s = t.value.map((u) => {
      if (u.checked)
        return u;
    }).filter(Boolean), c = t.value.map((u) => {
      if (u.inChecked)
        return u.id;
    }).filter(Boolean), f = t.value.map((u) => {
      if (u.inChecked)
        return u;
    }).filter(Boolean);
    r(
      "check",
      a,
      o,
      s,
      c,
      f
    );
  }, l = (a) => {
    const o = n(a);
    if (!o)
      return;
    const s = e(o, !0), c = s.every((u) => u.checked);
    o.checked = c;
    const f = s.some((u) => u.checked);
    c ? o.inChecked = !1 : f ? o.inChecked = !0 : o.inChecked = !1, o.parentId && l(o);
  };
  return {
    toggleCheckNode: i
  };
}
function Ct(t) {
  const e = L(() => {
    let o = [];
    const s = [];
    for (const c of t.value)
      o.map((f) => f.id).includes(c.id) || (c.expanded !== !0 && (o = n(c)), s.push(c));
    return s;
  }), n = (o, s = !0) => {
    const c = [], f = t.value.findIndex((u) => u.id === o.id);
    for (let u = f + 1; u < t.value.length && o.level < t.value[u].level; u++)
      (s || o.level === t.value[u].level - 1) && c.push(t.value[u]);
    return c;
  }, r = (o, s = []) => {
    const c = n(o, !1);
    return s.push(...c), c.forEach((f) => {
      f.expanded && r(f, s);
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
const ve = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function At(t, e, { getChildren: n, getParent: r }) {
  const i = bt({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), l = L(
    () => e.value.reduce(
      (p, v) => ({
        ...p,
        [v.id]: v
      }),
      {}
    )
  ), a = (p) => {
    p == null || p.classList.remove(...Object.values(ve));
  }, o = (p, v) => {
    var b;
    const d = (b = l.value[p]) == null ? void 0 : b.parentId;
    return d === v ? !0 : d !== void 0 ? o(d, v) : !1;
  }, s = () => {
    i.dropType = void 0, i.draggingNode = null, i.draggingTreeNode = null;
  }, c = (p, v) => {
    var d;
    p.stopPropagation(), i.draggingNode = p.target, i.draggingTreeNode = v, (d = p.dataTransfer) == null || d.setData("dragNodeId", v.id);
  }, f = (p) => {
    if (p.preventDefault(), p.stopPropagation(), !!i.draggingNode && t) {
      if (p.dataTransfer && (p.dataTransfer.dropEffect = "move"), !e)
        return;
      let v = {};
      typeof t == "object" ? v = t : t === !0 && (v = { dropInner: !0 });
      const { dropPrev: d, dropNext: b, dropInner: y } = v;
      let h;
      const w = d ? y ? 0.25 : b ? 0.45 : 1 : -1, S = b ? y ? 0.75 : d ? 0.55 : 0 : 1, O = p.currentTarget, E = O == null ? void 0 : O.getBoundingClientRect(), I = p.clientY - ((E == null ? void 0 : E.top) || 0);
      if (I < ((E == null ? void 0 : E.height) || 0) * w ? h = "dropPrev" : I > ((E == null ? void 0 : E.height) || 0) * S ? h = "dropNext" : y ? h = "dropInner" : h = void 0, h) {
        const N = O == null ? void 0 : O.classList;
        N && (N.contains(ve[h]) || (a(O), N.add(ve[h])));
      } else
        a(O);
      i.dropType = h;
    }
  }, u = (p) => {
    p.stopPropagation(), i.draggingNode && a(p.currentTarget);
  }, g = (p, v) => {
    var b;
    if (p.preventDefault(), p.stopPropagation(), a(p.currentTarget), !i.draggingNode || !t)
      return;
    const d = (b = p.dataTransfer) == null ? void 0 : b.getData("dragNodeId");
    if (d) {
      const y = o(v.id, d);
      if (d === v.id || y)
        return;
      i.dropType && x(d, v), s();
    }
  };
  function x(p, v) {
    const d = e.value.find((b) => b.id === p);
    if (d) {
      let b;
      const y = n(d), h = r(d);
      if (i.dropType === "dropInner") {
        b = {
          ...d,
          parentId: v.id,
          level: v.level + 1
        };
        const w = e.value.indexOf(v);
        e.value.splice(w + 1, 0, b), v.isLeaf = void 0;
        const S = e.value.indexOf(d);
        e.value.splice(S, 1);
      } else if (i.dropType === "dropNext") {
        b = {
          ...d,
          parentId: v.parentId,
          level: v.level
        };
        const w = e.value.indexOf(v), S = n(v, !0).length;
        e.value.splice(
          w + S + 1,
          0,
          b
        );
        const O = e.value.indexOf(d);
        e.value.splice(O, 1);
      } else if (i.dropType === "dropPrev") {
        b = {
          ...d,
          parentId: v.parentId,
          level: v.level
        };
        const w = e.value.indexOf(v);
        e.value.splice(w, 0, b);
        const S = e.value.indexOf(d);
        e.value.splice(S, 1);
      }
      i.dropType = "dropInner", y.forEach((w) => x(w.id, b)), h && n(h).length === 0 && (h.isLeaf = !0);
    }
  }
  return {
    onDragstart: c,
    onDragover: f,
    onDragleave: u,
    onDrop: g,
    onDragend: (p) => {
      p.preventDefault(), p.stopPropagation(), s();
    }
  };
}
function Ft(t, { getNode: e, getIndex: n, getChildren: r }, { emit: i }) {
  const l = (c) => {
    const f = e(c);
    f && f.isLeaf === !1 && !f.childNodeCount && (f.loading = !0, i("lazy-load", c, a));
  }, a = (c) => {
    const f = e(c.node);
    if (f) {
      f.loading = !1;
      const u = A(
        Ee(c.treeItems, f.level)
      );
      o(f, u), s(f, u);
      const g = r(f);
      f.childNodeCount = g.length;
    }
  }, o = (c, f) => {
    f.value.forEach((u) => {
      u.level - 1 === c.level && !u.parentId && (u.parentId = c.id);
    });
  }, s = (c, f) => {
    const u = n(c);
    u && t.value.splice(u + 1, 0, ...f.value);
  };
  return {
    lazyLoadNodes: l
  };
}
function nt(t = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  for (let r = 0; r < t; r++)
    n += e[parseInt((Math.random() * e.length).toString())];
  return n;
}
function Lt(t, { getChildren: e, getIndex: n }) {
  return {
    append: (l, a) => {
      const o = e(l, !1), s = o[o.length - 1];
      let c = n(l) + 1;
      s && (c = n(s) + 1), l.expanded = !0, l.isLeaf = !1;
      const f = A({
        ...a,
        level: l.level + 1,
        parentId: l.id,
        isLeaf: !0
      });
      f.value.id === void 0 && (f.value.id = nt()), t.value.splice(c, 0, f.value);
    },
    remove: (l) => {
      const a = e(l).map((o) => o.id);
      t.value = t.value.filter(
        (o) => o.id !== l.id && !a.includes(o.id)
      );
    }
  };
}
function It(t, e, n, r) {
  const { lazyLoadNodes: i } = r;
  return {
    toggleNode: (a, o, s = !1) => {
      if (a.stopPropagation(), s)
        t.value.forEach((c) => {
          c.level === o.level && c.id !== o.id && (c.expanded = !1), c.id === o.id && (c.expanded = !c.expanded), c.expanded && i(c);
        });
      else {
        const c = t.value.find((f) => f.id === o.id);
        c && (c.expanded = !c.expanded, c.expanded && i(c));
      }
    }
  };
}
function Nt(t, e, n) {
  const r = wt(t), i = A(Ee(r)), l = Ct(i), a = [It, Tt, Lt], o = Ft(i, l, n), s = At(e.draggable, i, l);
  return {
    ...a.reduce((f, u) => ({ ...f, ...u(i, l, n, o) }), {}),
    ...l,
    ...s,
    treeData: i
  };
}
const rt = {
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
}, kt = {
  onClick: {
    type: Function,
    required: !0
  }
};
const Bt = C({
  name: "SBaseSelectAll",
  props: kt,
  setup(t) {
    return () => m("label", {
      class: "s-base-select-all is-checked"
    }, [m("span", {
      class: "s-base-select-all__input is-checked"
    }, [m("span", {
      class: "s-base-select-all__inner"
    }, null), m("input", {
      type: "checkbox",
      "aria-hidden": "false",
      class: "s-base-select-all__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        t.onClick();
      }
    }, null)])]);
  }
}), qt = {
  onClick: {
    type: Function,
    required: !0
  }
};
const Dt = C({
  name: "SBaseSelectionBox",
  props: qt,
  setup(t) {
    return () => m("label", {
      class: "s-base-selection-box"
    }, [m("span", {
      class: "s-base-selection-box__input"
    }, [m("span", {
      class: "s-base-selection-box__inner"
    }, null), m("input", {
      type: "checkbox",
      "aria-hidden": "false",
      class: "s-base-selection-box__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        t.onClick();
      }
    }, null)])]);
  }
}), Rt = {
  onClick: {
    type: Function,
    required: !0
  }
};
const Vt = C({
  name: "SBaseSemiSelection",
  props: Rt,
  setup(t) {
    return () => m("label", {
      class: "s-base-semi-selection",
      "aria-controls": "undefined"
    }, [m("span", {
      class: "s-base-semi-selection__input is-indeterminate",
      tabindex: "0",
      role: "checkbox",
      "aria-checked": "mixed"
    }, [m("span", {
      class: "s-base-semi-selection__inner"
    }, null), m("input", {
      type: "checkbox",
      "aria-hidden": "true",
      class: "s-base-semi-selection__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        t.onClick();
      }
    }, null)])]);
  }
}), Mt = {
  ...rt,
  treeNode: {
    type: Object,
    required: !0
  }
}, Le = 34, Ie = 24, zt = C({
  name: "STreeNode",
  props: Mt,
  setup(t, {
    slots: e
  }) {
    const {
      lineable: n,
      checkable: r,
      treeNode: i,
      operable: l,
      draggable: a
    } = R(t), {
      toggleCheckNode: o,
      getChildrenExpanded: s,
      append: c,
      remove: f,
      onDragend: u,
      onDragleave: g,
      onDragover: x,
      onDragstart: P,
      onDrop: p
    } = J("TREE_UTILS"), v = A(!1), d = () => {
      v.value ? v.value = !1 : v.value = !0;
    };
    let b = {};
    a.value && (b = {
      draggable: !0,
      onDragend: (h) => u(h),
      onDragleave: (h) => g(h),
      onDragover: (h) => x(h),
      onDragstart: (h) => P(h, i.value),
      onDrop: (h) => p(h, i.value)
    });
    const y = () => m(W, null, [i.value.inChecked ? m(Vt, {
      onClick: () => o(i.value)
    }, null) : i.value.checked ? m(Bt, {
      onClick: () => o(i.value)
    }, null) : m(Dt, {
      onClick: () => o(i.value)
    }, null)]);
    return () => {
      var h, w, S;
      return m("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${Ie * (i.value.level - 1)}px`
        },
        onMouseenter: d,
        onMouseleave: d
      }, [!i.value.isLeaf && i.value.expanded && n.value && m("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${Le * s(i.value).length}px`,
          left: `${Ie * (i.value.level - 1) + 9}px`,
          top: `${Le}px`
        }
      }, null), m("div", ie({
        class: "s-tree__node--content"
      }, b), [i.value.isLeaf ? m("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (h = e.icon) == null ? void 0 : h.call(e), r.value && y(), (w = e.content) == null ? void 0 : w.call(e), l.value && v.value && m("span", {
        class: "inline-flex ml-1"
      }, [m("svg", {
        onClick: () => {
          c(i.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [m("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), m("svg", {
        onClick: () => {
          f(i.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [m("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), i.value.loading && ((S = e.loading) == null ? void 0 : S.call(e))])]);
    };
  }
}), jt = (t, {
  emit: e
}) => m("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: t.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [m("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const $t = {
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
const Ht = C({
  name: "SVirtualList",
  props: $t,
  setup(t, {
    slots: e
  }) {
    const {
      data: n,
      itemHeight: r,
      component: i
    } = R(t), l = A(), a = A(0), o = A(0), s = A(0), c = L(() => Math.ceil(a.value / r.value)), f = L(() => n.value.slice(s.value, Math.min(s.value + c.value, n.value.length)));
    Oe(() => {
      var g;
      a.value = (g = l.value) == null ? void 0 : g.clientHeight;
    });
    const u = (g) => {
      const {
        scrollTop: x
      } = g.target;
      s.value = Math.floor(x / r.value), o.value = x - x % r.value;
    };
    return () => m(i.value, {
      class: "s-virtual-list__container",
      ref: l,
      onScroll: u
    }, {
      default: () => [m("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${n.value.length * r.value}px`
        }
      }, null), m("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${o.value}px, 0)`
        }
      }, [f.value.map((g, x) => {
        var P;
        return (P = e.default) == null ? void 0 : P.call(e, {
          item: g,
          index: x
        });
      })])]
    });
  }
}), Ne = C({
  name: "STree",
  props: rt,
  emits: ["lazy-load", "check"],
  setup(t, e) {
    const {
      data: n,
      height: r,
      itemHeight: i,
      accordion: l
    } = R(t), {
      slots: a
    } = e, o = Nt(n, t, e);
    return Z("TREE_UTILS", o), () => {
      const s = (c) => m(zt, ie(t, {
        treeNode: c,
        onClick: l.value ? (f) => o.toggleNode(f, c, l.value) : ""
      }), {
        content: () => a.content ? a.content(c) : c.label,
        icon: () => a.icon ? a.icon({
          nodeData: c,
          toggleNode: o.toggleNode
        }) : m(jt, {
          expanded: !!c.expanded,
          onClick: (f) => o.toggleNode(f, c, l.value)
        }, null),
        loading: () => a.loading ? a.loading({
          nodeData: o
        }) : m("span", {
          class: "ml-1"
        }, [X("loading...")])
      });
      return m("div", {
        class: "s-tree"
      }, [r != null && r.value ? m("div", {
        style: {
          height: `${r.value}px`
        }
      }, [m(Ht, {
        data: o.expandedTree.value,
        itemHeight: i.value
      }, {
        default: ({
          item: c
        }) => s(c)
      })]) : o.expandedTree.value.map((c) => s(c))]);
    };
  }
}), Wt = {
  install(t) {
    t.component(Ne.name, Ne);
  }
}, it = {
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
function Ut(t = 1) {
  const e = A(t), n = (a) => {
    e.value = a;
  }, r = (a) => {
    e.value += a;
  };
  return {
    pageIndex: e,
    setPageIndex: n,
    jumpPage: r,
    prevPage: () => r(-1),
    nextPage: () => r(1)
  };
}
const Yt = (t, e, n) => {
  const r = Array.from(Array(t).keys());
  if (t <= n)
    return r.slice(2, t);
  {
    const i = Math.ceil(n / 2);
    return e <= i ? r.slice(2, n) : e >= t - i + 1 ? r.slice(t - n + 2, t) : r.slice(e - i + 2, e + i - 1);
  }
}, Xt = it, be = C({
  name: "SPager",
  props: Xt,
  setup(t) {
    const {
      total: e,
      pageSize: n,
      pagerCount: r,
      hideOnSinglePage: i
    } = R(t), l = L(() => Math.ceil(e.value / n.value)), {
      pageIndex: a,
      setPageIndex: o,
      jumpPage: s,
      prevPage: c,
      nextPage: f
    } = Ut(), u = L(() => Yt(l.value, a.value, r.value));
    return {
      totalPage: l,
      pageIndex: a,
      setPageIndex: o,
      jumpPage: s,
      prevPage: c,
      nextPage: f,
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
      centerPages: l,
      hideOnSinglePage: a
    } = this;
    return m(W, null, [a && l.length >= 0 && m("ul", {
      class: "s-pager"
    }, [m("li", {
      onClick: () => r(1),
      class: {
        current: n === 1
      }
    }, [X("1")]), e > t && n > Math.ceil(t / 2) && m("li", {
      class: "more left",
      onClick: () => i(-5)
    }, [X("...")]), l.map((o) => m("li", {
      onClick: () => r(o),
      class: {
        current: n === o
      }
    }, [o])), e > t && n < e - Math.ceil(t / 2) + 1 && m("li", {
      class: "more right",
      onClick: () => i(5)
    }, [X("...")]), e > 1 && m("li", {
      onClick: () => r(e),
      class: {
        current: n === e
      }
    }, [e])])]);
  }
}), ke = C({
  name: "SPagination",
  props: it,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = A(), r = L(() => n.value ? n.value.pageIndex < 2 : !0), i = L(() => n.value ? n.value.pageIndex > n.value.totalPage - 1 : !0);
    return Oe(() => {
      ye(() => n.value.pageIndex, (l) => {
        e("update:modelValue", l);
      }), ye(() => t.modelValue, (l) => {
        n.value.pageIndex = l;
      });
    }), () => m("div", {
      class: "s-pagination"
    }, [m("button", {
      disabled: r.value,
      onClick: () => n.value.prevPage()
    }, [X("上一页")]), m(be, ie(t, {
      ref: n
    }), null), m("button", {
      disabled: i.value,
      onClick: () => n.value.nextPage()
    }, [X("下一页")])]);
  }
}), Kt = {
  install(t) {
    t.component(ke.name, ke), t.component(be.name, be);
  }
}, ot = Symbol("formContextToken"), Jt = {
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
const Be = C({
  name: "SForm",
  props: Jt,
  emits: ["submit"],
  setup(t, {
    slots: e,
    emit: n,
    expose: r
  }) {
    const i = L(() => ({
      layout: t.layout,
      labelSize: t.labelSize,
      labelAlign: t.labelAlign
    }));
    Z("LABEL_DATA", i);
    const l = /* @__PURE__ */ new Set(), a = (f) => l.add(f), o = (f) => l.delete(f);
    Z(ot, {
      model: t.model,
      rules: t.rules,
      addItem: a,
      removeItem: o
    });
    const s = (f) => {
      f.preventDefault(), n("submit");
    };
    return r({
      validate: (f) => {
        const u = [];
        l.forEach((g) => u.push(g.validate())), Promise.all(u).then(() => f(!0)).catch(() => f(!1));
      }
    }), () => {
      var f;
      return m("form", {
        class: "s-form",
        onSubmit: s
      }, [(f = e.default) == null ? void 0 : f.call(e)]);
    };
  }
}), Zt = {
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
function $() {
  return $ = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, $.apply(this, arguments);
}
function Gt(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, te(t, e);
}
function we(t) {
  return we = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, we(t);
}
function te(t, e) {
  return te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, te(t, e);
}
function Qt() {
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
function ce(t, e, n) {
  return Qt() ? ce = Reflect.construct.bind() : ce = function(i, l, a) {
    var o = [null];
    o.push.apply(o, l);
    var s = Function.bind.apply(i, o), c = new s();
    return a && te(c, a.prototype), c;
  }, ce.apply(null, arguments);
}
function en(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function xe(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return xe = function(r) {
    if (r === null || !en(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, i);
    }
    function i() {
      return ce(r, arguments, we(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), te(i, r);
  }, xe(t);
}
var tn = /%[sdj%]/g, at = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (at = function(e, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(e, n);
});
function Pe(t) {
  if (!t || !t.length)
    return null;
  var e = {};
  return t.forEach(function(n) {
    var r = n.field;
    e[r] = e[r] || [], e[r].push(n);
  }), e;
}
function F(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  var i = 0, l = n.length;
  if (typeof t == "function")
    return t.apply(null, n);
  if (typeof t == "string") {
    var a = t.replace(tn, function(o) {
      if (o === "%%")
        return "%";
      if (i >= l)
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
    return a;
  }
  return t;
}
function nn(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function T(t, e) {
  return !!(t == null || e === "array" && Array.isArray(t) && !t.length || nn(e) && typeof t == "string" && !t);
}
function rn(t, e, n) {
  var r = [], i = 0, l = t.length;
  function a(o) {
    r.push.apply(r, o || []), i++, i === l && n(r);
  }
  t.forEach(function(o) {
    e(o, a);
  });
}
function qe(t, e, n) {
  var r = 0, i = t.length;
  function l(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var o = r;
    r = r + 1, o < i ? e(t[o], l) : n([]);
  }
  l([]);
}
function on(t) {
  var e = [];
  return Object.keys(t).forEach(function(n) {
    e.push.apply(e, t[n] || []);
  }), e;
}
var De = /* @__PURE__ */ function(t) {
  Gt(e, t);
  function e(n, r) {
    var i;
    return i = t.call(this, "Async Validation Error") || this, i.errors = n, i.fields = r, i;
  }
  return e;
}(/* @__PURE__ */ xe(Error));
function an(t, e, n, r, i) {
  if (e.first) {
    var l = new Promise(function(g, x) {
      var P = function(d) {
        return r(d), d.length ? x(new De(d, Pe(d))) : g(i);
      }, p = on(t);
      qe(p, n, P);
    });
    return l.catch(function(g) {
      return g;
    }), l;
  }
  var a = e.firstFields === !0 ? Object.keys(t) : e.firstFields || [], o = Object.keys(t), s = o.length, c = 0, f = [], u = new Promise(function(g, x) {
    var P = function(v) {
      if (f.push.apply(f, v), c++, c === s)
        return r(f), f.length ? x(new De(f, Pe(f))) : g(i);
    };
    o.length || (r(f), g(i)), o.forEach(function(p) {
      var v = t[p];
      a.indexOf(p) !== -1 ? qe(v, n, P) : rn(v, n, P);
    });
  });
  return u.catch(function(g) {
    return g;
  }), u;
}
function ln(t) {
  return !!(t && t.message !== void 0);
}
function sn(t, e) {
  for (var n = t, r = 0; r < e.length; r++) {
    if (n == null)
      return n;
    n = n[e[r]];
  }
  return n;
}
function Re(t, e) {
  return function(n) {
    var r;
    return t.fullFields ? r = sn(e, t.fullFields) : r = e[n.field || t.fullField], ln(n) ? (n.field = n.field || t.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || t.fullField
    };
  };
}
function Ve(t, e) {
  if (e) {
    for (var n in e)
      if (e.hasOwnProperty(n)) {
        var r = e[n];
        typeof r == "object" && typeof t[n] == "object" ? t[n] = $({}, t[n], r) : t[n] = r;
      }
  }
  return t;
}
var lt = function(e, n, r, i, l, a) {
  e.required && (!r.hasOwnProperty(e.field) || T(n, a || e.type)) && i.push(F(l.messages.required, e.fullField));
}, cn = function(e, n, r, i, l) {
  (/^\s+$/.test(n) || n === "") && i.push(F(l.messages.whitespace, e.fullField));
}, le, un = function() {
  if (le)
    return le;
  var t = "[a-fA-F\\d:]", e = function(h) {
    return h && h.includeBoundaries ? "(?:(?<=\\s|^)(?=" + t + ")|(?<=" + t + ")(?=\\s|$))" : "";
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), l = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), a = new RegExp("^" + n + "$"), o = new RegExp("^" + i + "$"), s = function(h) {
    return h && h.exact ? l : new RegExp("(?:" + e(h) + n + e(h) + ")|(?:" + e(h) + i + e(h) + ")", "g");
  };
  s.v4 = function(y) {
    return y && y.exact ? a : new RegExp("" + e(y) + n + e(y), "g");
  }, s.v6 = function(y) {
    return y && y.exact ? o : new RegExp("" + e(y) + i + e(y), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", u = s.v4().source, g = s.v6().source, x = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", P = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", v = "(?::\\d{2,5})?", d = '(?:[/?#][^\\s"]*)?', b = "(?:" + c + "|www\\.)" + f + "(?:localhost|" + u + "|" + g + "|" + x + P + p + ")" + v + d;
  return le = new RegExp("(?:^" + b + "$)", "i"), le;
}, Me = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, G = {
  integer: function(e) {
    return G.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return G.number(e) && !G.integer(e);
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
    return typeof e == "object" && !G.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match(Me.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(un());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(Me.hex);
  }
}, fn = function(e, n, r, i, l) {
  if (e.required && n === void 0) {
    lt(e, n, r, i, l);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], o = e.type;
  a.indexOf(o) > -1 ? G[o](n) || i.push(F(l.messages.types[o], e.fullField, e.type)) : o && typeof n !== e.type && i.push(F(l.messages.types[o], e.fullField, e.type));
}, dn = function(e, n, r, i, l) {
  var a = typeof e.len == "number", o = typeof e.min == "number", s = typeof e.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, f = n, u = null, g = typeof n == "number", x = typeof n == "string", P = Array.isArray(n);
  if (g ? u = "number" : x ? u = "string" : P && (u = "array"), !u)
    return !1;
  P && (f = n.length), x && (f = n.replace(c, "_").length), a ? f !== e.len && i.push(F(l.messages[u].len, e.fullField, e.len)) : o && !s && f < e.min ? i.push(F(l.messages[u].min, e.fullField, e.min)) : s && !o && f > e.max ? i.push(F(l.messages[u].max, e.fullField, e.max)) : o && s && (f < e.min || f > e.max) && i.push(F(l.messages[u].range, e.fullField, e.min, e.max));
}, Y = "enum", pn = function(e, n, r, i, l) {
  e[Y] = Array.isArray(e[Y]) ? e[Y] : [], e[Y].indexOf(n) === -1 && i.push(F(l.messages[Y], e.fullField, e[Y].join(", ")));
}, gn = function(e, n, r, i, l) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(n) || i.push(F(l.messages.pattern.mismatch, e.fullField, n, e.pattern));
    else if (typeof e.pattern == "string") {
      var a = new RegExp(e.pattern);
      a.test(n) || i.push(F(l.messages.pattern.mismatch, e.fullField, n, e.pattern));
    }
  }
}, _ = {
  required: lt,
  whitespace: cn,
  type: fn,
  range: dn,
  enum: pn,
  pattern: gn
}, mn = function(e, n, r, i, l) {
  var a = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (T(n, "string") && !e.required)
      return r();
    _.required(e, n, i, a, l, "string"), T(n, "string") || (_.type(e, n, i, a, l), _.range(e, n, i, a, l), _.pattern(e, n, i, a, l), e.whitespace === !0 && _.whitespace(e, n, i, a, l));
  }
  r(a);
}, vn = function(e, n, r, i, l) {
  var a = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, l), n !== void 0 && _.type(e, n, i, a, l);
  }
  r(a);
}, hn = function(e, n, r, i, l) {
  var a = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (n === "" && (n = void 0), T(n) && !e.required)
      return r();
    _.required(e, n, i, a, l), n !== void 0 && (_.type(e, n, i, a, l), _.range(e, n, i, a, l));
  }
  r(a);
}, yn = function(e, n, r, i, l) {
  var a = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, l), n !== void 0 && _.type(e, n, i, a, l);
  }
  r(a);
}, bn = function(e, n, r, i, l) {
  var a = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, l), T(n) || _.type(e, n, i, a, l);
  }
  r(a);
}, wn = function(e, n, r, i, l) {
  var a = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, l), n !== void 0 && (_.type(e, n, i, a, l), _.range(e, n, i, a, l));
  }
  r(a);
}, xn = function(e, n, r, i, l) {
  var a = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, l), n !== void 0 && (_.type(e, n, i, a, l), _.range(e, n, i, a, l));
  }
  r(a);
}, Pn = function(e, n, r, i, l) {
  var a = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (n == null && !e.required)
      return r();
    _.required(e, n, i, a, l, "array"), n != null && (_.type(e, n, i, a, l), _.range(e, n, i, a, l));
  }
  r(a);
}, _n = function(e, n, r, i, l) {
  var a = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, l), n !== void 0 && _.type(e, n, i, a, l);
  }
  r(a);
}, Sn = "enum", On = function(e, n, r, i, l) {
  var a = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, l), n !== void 0 && _[Sn](e, n, i, a, l);
  }
  r(a);
}, En = function(e, n, r, i, l) {
  var a = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (T(n, "string") && !e.required)
      return r();
    _.required(e, n, i, a, l), T(n, "string") || _.pattern(e, n, i, a, l);
  }
  r(a);
}, Tn = function(e, n, r, i, l) {
  var a = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (T(n, "date") && !e.required)
      return r();
    if (_.required(e, n, i, a, l), !T(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), _.type(e, s, i, a, l), s && _.range(e, s.getTime(), i, a, l);
    }
  }
  r(a);
}, Cn = function(e, n, r, i, l) {
  var a = [], o = Array.isArray(n) ? "array" : typeof n;
  _.required(e, n, i, a, l, o), r(a);
}, he = function(e, n, r, i, l) {
  var a = e.type, o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (T(n, a) && !e.required)
      return r();
    _.required(e, n, i, o, l, a), T(n, a) || _.type(e, n, i, o, l);
  }
  r(o);
}, An = function(e, n, r, i, l) {
  var a = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, l);
  }
  r(a);
}, Q = {
  string: mn,
  method: vn,
  number: hn,
  boolean: yn,
  regexp: bn,
  integer: wn,
  float: xn,
  array: Pn,
  object: _n,
  enum: On,
  pattern: En,
  date: Tn,
  url: he,
  hex: he,
  email: he,
  required: Cn,
  any: An
};
function _e() {
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
var Se = _e(), oe = /* @__PURE__ */ function() {
  function t(n) {
    this.rules = null, this._messages = Se, this.define(n);
  }
  var e = t.prototype;
  return e.define = function(r) {
    var i = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(l) {
      var a = r[l];
      i.rules[l] = Array.isArray(a) ? a : [a];
    });
  }, e.messages = function(r) {
    return r && (this._messages = Ve(_e(), r)), this._messages;
  }, e.validate = function(r, i, l) {
    var a = this;
    i === void 0 && (i = {}), l === void 0 && (l = function() {
    });
    var o = r, s = i, c = l;
    if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, o), Promise.resolve(o);
    function f(p) {
      var v = [], d = {};
      function b(h) {
        if (Array.isArray(h)) {
          var w;
          v = (w = v).concat.apply(w, h);
        } else
          v.push(h);
      }
      for (var y = 0; y < p.length; y++)
        b(p[y]);
      v.length ? (d = Pe(v), c(v, d)) : c(null, o);
    }
    if (s.messages) {
      var u = this.messages();
      u === Se && (u = _e()), Ve(u, s.messages), s.messages = u;
    } else
      s.messages = this.messages();
    var g = {}, x = s.keys || Object.keys(this.rules);
    x.forEach(function(p) {
      var v = a.rules[p], d = o[p];
      v.forEach(function(b) {
        var y = b;
        typeof y.transform == "function" && (o === r && (o = $({}, o)), d = o[p] = y.transform(d)), typeof y == "function" ? y = {
          validator: y
        } : y = $({}, y), y.validator = a.getValidationMethod(y), y.validator && (y.field = p, y.fullField = y.fullField || p, y.type = a.getType(y), g[p] = g[p] || [], g[p].push({
          rule: y,
          value: d,
          source: o,
          field: p
        }));
      });
    });
    var P = {};
    return an(g, s, function(p, v) {
      var d = p.rule, b = (d.type === "object" || d.type === "array") && (typeof d.fields == "object" || typeof d.defaultField == "object");
      b = b && (d.required || !d.required && p.value), d.field = p.field;
      function y(S, O) {
        return $({}, O, {
          fullField: d.fullField + "." + S,
          fullFields: d.fullFields ? [].concat(d.fullFields, [S]) : [S]
        });
      }
      function h(S) {
        S === void 0 && (S = []);
        var O = Array.isArray(S) ? S : [S];
        !s.suppressWarning && O.length && t.warning("async-validator:", O), O.length && d.message !== void 0 && (O = [].concat(d.message));
        var E = O.map(Re(d, o));
        if (s.first && E.length)
          return P[d.field] = 1, v(E);
        if (!b)
          v(E);
        else {
          if (d.required && !p.value)
            return d.message !== void 0 ? E = [].concat(d.message).map(Re(d, o)) : s.error && (E = [s.error(d, F(s.messages.required, d.field))]), v(E);
          var I = {};
          d.defaultField && Object.keys(p.value).map(function(B) {
            I[B] = d.defaultField;
          }), I = $({}, I, p.rule.fields);
          var N = {};
          Object.keys(I).forEach(function(B) {
            var q = I[B], yt = Array.isArray(q) ? q : [q];
            N[B] = yt.map(y.bind(null, B));
          });
          var U = new t(N);
          U.messages(s.messages), p.rule.options && (p.rule.options.messages = s.messages, p.rule.options.error = s.error), U.validate(p.value, p.rule.options || s, function(B) {
            var q = [];
            E && E.length && q.push.apply(q, E), B && B.length && q.push.apply(q, B), v(q.length ? q : null);
          });
        }
      }
      var w;
      if (d.asyncValidator)
        w = d.asyncValidator(d, p.value, h, p.source, s);
      else if (d.validator) {
        try {
          w = d.validator(d, p.value, h, p.source, s);
        } catch (S) {
          console.error == null || console.error(S), s.suppressValidatorError || setTimeout(function() {
            throw S;
          }, 0), h(S.message);
        }
        w === !0 ? h() : w === !1 ? h(typeof d.message == "function" ? d.message(d.fullField || d.field) : d.message || (d.fullField || d.field) + " fails") : w instanceof Array ? h(w) : w instanceof Error && h(w.message);
      }
      w && w.then && w.then(function() {
        return h();
      }, function(S) {
        return h(S);
      });
    }, function(p) {
      f(p);
    }, o);
  }, e.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Q.hasOwnProperty(r.type))
      throw new Error(F("Unknown rule type %s", r.type));
    return r.type || "string";
  }, e.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var i = Object.keys(r), l = i.indexOf("message");
    return l !== -1 && i.splice(l, 1), i.length === 1 && i[0] === "required" ? Q.required : Q[this.getType(r)] || void 0;
  }, t;
}();
oe.register = function(e, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Q[e] = n;
};
oe.warning = at;
oe.messages = Se;
oe.validators = Q;
const ze = C({
  name: "SFormItem",
  props: Zt,
  setup(t, {
    slots: e
  }) {
    const {
      error: n
    } = R(t), r = J("LABEL_DATA"), i = L(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": r.value.layout === "horizontal",
      "s-form__item--vertical": r.value.layout === "vertical"
    })), l = L(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": r.value.layout === "vertical",
      [`s-form__label--${r.value.labelAlign}`]: r.value.layout === "horizontal",
      [`s-form__label--${r.value.labelSize}`]: r.value.layout === "horizontal"
    })), a = J(ot), o = A(!1), s = A(""), f = {
      validate: () => {
        if (!a)
          return console.warn("请在Form中使用FormItem"), Promise.reject("请在Form中使用FormItem");
        if (!a.rules)
          return Promise.resolve({
            result: !0
          });
        if (!t.prop)
          return console.warn("如果要校验当前项，请设置prop字段"), Promise.reject("如果要校验当前项，请设置prop字段");
        const u = a.rules[t.prop] || void 0;
        if (!u)
          return Promise.resolve({
            result: !0
          });
        const g = a.model[t.prop];
        return new oe({
          [t.prop]: u
        }).validate({
          [t.prop]: g
        }, (P) => {
          P ? (o.value = !0, s.value = P[0].message || "校验错误") : (o.value = !1, s.value = "");
        });
      }
    };
    return Z("FORM_ITEM_CTX", f), Oe(() => {
      t.prop && (a == null || a.addItem(f));
    }), tt(() => {
      t.prop && (a == null || a.removeItem(f));
    }), () => {
      var u;
      return m("div", {
        class: i.value
      }, [m("span", {
        class: l.value
      }, [t.label]), m("div", null, [(u = e.default) == null ? void 0 : u.call(e)]), n.value && m("div", {
        class: "error-message"
      }, [n.value]), o.value && m("div", {
        class: "error-message"
      }, [s.value])]);
    };
  }
}), Fn = {
  install(t) {
    t.component(Be.name, Be), t.component(ze.name, ze);
  }
}, Ln = {
  modelValue: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  }
};
const je = C({
  name: "SInput",
  props: Ln,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = J("FORM_ITEM_CTX"), r = (i) => {
      const l = i.target.value;
      e("update:modelValue", l), n.validate();
    };
    return () => m("div", {
      class: "s-input"
    }, [m("input", {
      class: "s-input__input",
      value: t.modelValue,
      onInput: r,
      type: t.type
    }, null)]);
  }
}), In = {
  install(t) {
    t.component(je.name, je);
  }
}, Nn = {
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
const kn = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
const Bn = C({
  name: "SBaseModal",
  props: kn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      modelValue: r
    } = R(t);
    return () => {
      var i;
      return m("div", null, [r.value && m("div", {
        class: "s-base-modal"
      }, [m("div", {
        class: "s-base-modal__mask",
        onClick: () => {
          n("update:modelValue", !1);
        }
      }, null), (i = e.default) == null ? void 0 : i.call(e)])]);
    };
  }
}), $e = C({
  name: "SModal",
  props: Nn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      modelValue: r,
      title: i,
      showClose: l,
      width: a,
      center: o,
      alignCenter: s,
      backgroundColor: c,
      top: f
    } = R(t), u = s.value ? {
      marginTop: 0,
      top: "50%",
      transform: "translateY(-50%)"
    } : null, g = L(() => typeof f.value == "number" ? `${f.value}px` : f.value);
    return () => m(Bn, {
      class: "s-modal",
      modelValue: r.value,
      "onUpdate:modelValue": () => {
        n("update:modelValue");
      }
    }, {
      default: () => {
        var x, P, p;
        return [m("div", {
          class: "s-modal__container",
          style: {
            width: a.value,
            ...u,
            marginTop: g.value,
            backgroundColor: c.value
          }
        }, [e.header ? (x = e.header) == null ? void 0 : x.call(e, {
          close: () => {
            n("update:modelValue", !1);
          }
        }) : m("div", {
          class: "s-modal__header",
          style: {
            textAlign: o.value ? "center" : "left"
          }
        }, [i.value, l.value && m("svg", {
          onClick: () => {
            n("update:modelValue", !1);
          },
          class: "s-modal__close",
          viewBox: "0 0 1024 1024",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg"
        }, [m("path", {
          fill: "currentColor",
          d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
        }, null)])]), m("div", {
          className: "s-modal__body"
        }, [(P = e.default) == null ? void 0 : P.call(e)]), m("div", {
          className: "s-modal__footer"
        }, [(p = e.footer) == null ? void 0 : p.call(e)])])];
      }
    });
  }
}), qn = {
  install(t) {
    t.component($e.name, $e);
  }
}, Dn = {
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
const He = C({
  name: "STabs",
  props: Dn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const n = A([]);
    Z("active-data", n);
    const r = A(t.modelValue);
    Z("active-tab", r);
    const i = (o) => {
      r.value = o;
    }, l = (o, s) => {
      const c = n.value.findIndex((f) => f.id === s);
      n.value.splice(c, 1), o.stopPropagation(), n.value.length === c ? i(n.value[c - 1].id) : i(n.value[c].id);
    }, a = () => {
      const o = nt();
      n.value.push({
        id: o,
        type: "random",
        title: `Tab${o}`,
        content: `Tab${o} Content`
      }), r.value = o;
    };
    return () => {
      var o;
      return m("div", {
        class: "s-tabs"
      }, [m("ul", {
        class: "s-tabs__nav"
      }, [n.value.map((s) => m("li", {
        onClick: () => i(s.id),
        class: s.id === r.value ? "active" : ""
      }, [s.title, t.closable && m("svg", {
        onClick: (c) => l(c, s.id),
        style: "margin-left: 8px;",
        viewBox: "0 0 1024 1024",
        width: "12",
        height: "12"
      }, [m("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])])), t.addable && m("li", null, [m("svg", {
        onClick: a,
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14"
      }, [m("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)])])]), (o = e.default) == null ? void 0 : o.call(e), n.value.filter((s) => s.type === "random").map((s) => m("div", {
        class: "s-tab"
      }, [s.id === r.value && s.content]))]);
    };
  }
}), Rn = {
  id: {
    type: String,
    required: !0
  },
  title: {
    type: String,
    required: !0
  }
};
const We = C({
  name: "STab",
  props: Rn,
  setup(t, {
    slots: e
  }) {
    const n = J("active-tab");
    return J("active-data").value.push({
      id: t.id,
      title: t.title
    }), () => {
      var i;
      return m(W, null, [t.id === n.value && m("div", {
        class: "s-tab"
      }, [(i = e.default) == null ? void 0 : i.call(e)])]);
    };
  }
}), Vn = {
  install(t) {
    t.component(He.name, He), t.component(We.name, We);
  }
}, Mn = {
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
const zn = {
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
function H(t) {
  return t.split("-")[1];
}
function Te(t) {
  return t === "y" ? "height" : "width";
}
function ae(t) {
  return t.split("-")[0];
}
function pe(t) {
  return ["top", "bottom"].includes(ae(t)) ? "x" : "y";
}
function Ue(t, e, n) {
  let {
    reference: r,
    floating: i
  } = t;
  const l = r.x + r.width / 2 - i.width / 2, a = r.y + r.height / 2 - i.height / 2, o = pe(e), s = Te(o), c = r[s] / 2 - i[s] / 2, f = ae(e), u = o === "x";
  let g;
  switch (f) {
    case "top":
      g = {
        x: l,
        y: r.y - i.height
      };
      break;
    case "bottom":
      g = {
        x: l,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: a
      };
      break;
    case "left":
      g = {
        x: r.x - i.width,
        y: a
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (H(e)) {
    case "start":
      g[o] -= c * (n && u ? -1 : 1);
      break;
    case "end":
      g[o] += c * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const jn = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: l = [],
    platform: a
  } = n, o = l.filter(Boolean), s = await (a.isRTL == null ? void 0 : a.isRTL(e));
  if (process.env.NODE_ENV !== "production") {
    if (a == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), o.filter((p) => {
      let {
        name: v
      } = p;
      return v === "autoPlacement" || v === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!t || !e) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
  }
  let c = await a.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: f,
    y: u
  } = Ue(c, r, s), g = r, x = {}, P = 0;
  for (let p = 0; p < o.length; p++) {
    const {
      name: v,
      fn: d
    } = o[p], {
      x: b,
      y,
      data: h,
      reset: w
    } = await d({
      x: f,
      y: u,
      initialPlacement: r,
      placement: g,
      strategy: i,
      middlewareData: x,
      rects: c,
      platform: a,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (f = b ?? f, u = y ?? u, x = {
      ...x,
      [v]: {
        ...x[v],
        ...h
      }
    }, process.env.NODE_ENV !== "production" && P > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), w && P <= 50) {
      P++, typeof w == "object" && (w.placement && (g = w.placement), w.rects && (c = w.rects === !0 ? await a.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : w.rects), {
        x: f,
        y: u
      } = Ue(c, g, s)), p = -1;
      continue;
    }
  }
  return {
    x: f,
    y: u,
    placement: g,
    strategy: i,
    middlewareData: x
  };
};
function $n(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function st(t) {
  return typeof t != "number" ? $n(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function fe(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Hn(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: i,
    platform: l,
    rects: a,
    elements: o,
    strategy: s
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: g = !1,
    padding: x = 0
  } = e, P = st(x), v = o[g ? u === "floating" ? "reference" : "floating" : u], d = fe(await l.getClippingRect({
    element: (n = await (l.isElement == null ? void 0 : l.isElement(v))) == null || n ? v : v.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(o.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: s
  })), b = u === "floating" ? {
    ...a.floating,
    x: r,
    y: i
  } : a.reference, y = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(o.floating)), h = await (l.isElement == null ? void 0 : l.isElement(y)) ? await (l.getScale == null ? void 0 : l.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = fe(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: y,
    strategy: s
  }) : b);
  return process.env.NODE_ENV, {
    top: (d.top - w.top + P.top) / h.y,
    bottom: (w.bottom - d.bottom + P.bottom) / h.y,
    left: (d.left - w.left + P.left) / h.x,
    right: (w.right - d.right + P.right) / h.x
  };
}
const Wn = Math.min, Un = Math.max;
function Yn(t, e, n) {
  return Un(t, Wn(e, n));
}
const Xn = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: r = 0
    } = t || {}, {
      x: i,
      y: l,
      placement: a,
      rects: o,
      platform: s
    } = e;
    if (n == null)
      return process.env.NODE_ENV !== "production" && console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const c = st(r), f = {
      x: i,
      y: l
    }, u = pe(a), g = Te(u), x = await s.getDimensions(n), P = u === "y" ? "top" : "left", p = u === "y" ? "bottom" : "right", v = o.reference[g] + o.reference[u] - f[u] - o.floating[g], d = f[u] - o.reference[u], b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(n));
    let y = b ? u === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0;
    y === 0 && (y = o.floating[g]);
    const h = v / 2 - d / 2, w = c[P], S = y - x[g] - c[p], O = y / 2 - x[g] / 2 + h, E = Yn(w, O, S), N = H(a) != null && O != E && o.reference[g] / 2 - (O < w ? c[P] : c[p]) - x[g] / 2 < 0 ? O < w ? w - O : S - O : 0;
    return {
      [u]: f[u] - N,
      data: {
        [u]: E,
        centerOffset: O - E
      }
    };
  }
}), Kn = ["top", "right", "bottom", "left"], Ye = /* @__PURE__ */ Kn.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []), Jn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xe(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Jn[e]);
}
function Zn(t, e, n) {
  n === void 0 && (n = !1);
  const r = H(t), i = pe(t), l = Te(i);
  let a = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (a = Xe(a)), {
    main: a,
    cross: Xe(a)
  };
}
const Gn = {
  start: "end",
  end: "start"
};
function Qn(t) {
  return t.replace(/start|end/g, (e) => Gn[e]);
}
function er(t, e, n) {
  return (t ? [...n.filter((i) => H(i) === t), ...n.filter((i) => H(i) !== t)] : n.filter((i) => ae(i) === i)).filter((i) => t ? H(i) === t || (e ? Qn(i) !== i : !1) : !0);
}
const tr = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, r, i;
      const {
        rects: l,
        middlewareData: a,
        placement: o,
        platform: s,
        elements: c
      } = e, {
        alignment: f,
        allowedPlacements: u = Ye,
        autoAlignment: g = !0,
        ...x
      } = t, P = f !== void 0 || u === Ye ? er(f || null, g, u) : u, p = await Hn(e, x), v = ((n = a.autoPlacement) == null ? void 0 : n.index) || 0, d = P[v];
      if (d == null)
        return {};
      const {
        main: b,
        cross: y
      } = Zn(d, l, await (s.isRTL == null ? void 0 : s.isRTL(c.floating)));
      if (o !== d)
        return {
          reset: {
            placement: P[0]
          }
        };
      const h = [p[ae(d)], p[b], p[y]], w = [...((r = a.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: d,
        overflows: h
      }], S = P[v + 1];
      if (S)
        return {
          data: {
            index: v + 1,
            overflows: w
          },
          reset: {
            placement: S
          }
        };
      const O = w.slice().sort((N, U) => N.overflows[0] - U.overflows[0]), I = ((i = O.find((N) => {
        let {
          overflows: U
        } = N;
        return U.every((B) => B <= 0);
      })) == null ? void 0 : i.placement) || O[0].placement;
      return I !== o ? {
        data: {
          index: v + 1,
          overflows: w
        },
        reset: {
          placement: I
        }
      } : {};
    }
  };
};
async function nr(t, e) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = t, l = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), a = ae(n), o = H(n), s = pe(n) === "x", c = ["left", "top"].includes(a) ? -1 : 1, f = l && s ? -1 : 1, u = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: g,
    crossAxis: x,
    alignmentAxis: P
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
  return o && typeof P == "number" && (x = o === "end" ? P * -1 : P), s ? {
    x: x * f,
    y: g * c
  } : {
    x: g * c,
    y: x * f
  };
}
const rr = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, i = await nr(e, t);
      return {
        x: n + i.x,
        y: r + i.y,
        data: i
      };
    }
  };
};
function k(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function D(t) {
  return k(t).getComputedStyle(t);
}
function M(t) {
  return ut(t) ? (t.nodeName || "").toLowerCase() : "";
}
let se;
function ct() {
  if (se)
    return se;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (se = t.brands.map((e) => e.brand + "/" + e.version).join(" "), se) : navigator.userAgent;
}
function V(t) {
  return t instanceof k(t).HTMLElement;
}
function z(t) {
  return t instanceof k(t).Element;
}
function ut(t) {
  return t instanceof k(t).Node;
}
function Ke(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = k(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function ge(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: i
  } = D(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(i);
}
function ir(t) {
  return ["table", "td", "th"].includes(M(t));
}
function Ce(t) {
  const e = /firefox/i.test(ct()), n = D(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    (i) => {
      const l = n.contain;
      return l != null ? l.includes(i) : !1;
    }
  );
}
function ft() {
  return !/^((?!chrome|android).)*safari/i.test(ct());
}
function Ae(t) {
  return ["html", "body", "#document"].includes(M(t));
}
const Je = Math.min, ee = Math.max, de = Math.round;
function dt(t) {
  const e = D(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const i = t.offsetWidth, l = t.offsetHeight, a = de(n) !== i || de(r) !== l;
  return a && (n = i, r = l), {
    width: n,
    height: r,
    fallback: a
  };
}
function pt(t) {
  return z(t) ? t : t.contextElement;
}
const gt = {
  x: 1,
  y: 1
};
function K(t) {
  const e = pt(t);
  if (!V(e))
    return gt;
  const n = e.getBoundingClientRect(), {
    width: r,
    height: i,
    fallback: l
  } = dt(e);
  let a = (l ? de(n.width) : n.width) / r, o = (l ? de(n.height) : n.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!o || !Number.isFinite(o)) && (o = 1), {
    x: a,
    y: o
  };
}
function ne(t, e, n, r) {
  var i, l;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const a = t.getBoundingClientRect(), o = pt(t);
  let s = gt;
  e && (r ? z(r) && (s = K(r)) : s = K(t));
  const c = o ? k(o) : window, f = !ft() && n;
  let u = (a.left + (f && ((i = c.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / s.x, g = (a.top + (f && ((l = c.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / s.y, x = a.width / s.x, P = a.height / s.y;
  if (o) {
    const p = k(o), v = r && z(r) ? k(r) : r;
    let d = p.frameElement;
    for (; d && r && v !== p; ) {
      const b = K(d), y = d.getBoundingClientRect(), h = getComputedStyle(d);
      y.x += (d.clientLeft + parseFloat(h.paddingLeft)) * b.x, y.y += (d.clientTop + parseFloat(h.paddingTop)) * b.y, u *= b.x, g *= b.y, x *= b.x, P *= b.y, u += y.x, g += y.y, d = k(d).frameElement;
    }
  }
  return {
    width: x,
    height: P,
    top: g,
    right: u + x,
    bottom: g + P,
    left: u,
    x: u,
    y: g
  };
}
function j(t) {
  return ((ut(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function me(t) {
  return z(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function mt(t) {
  return ne(j(t)).left + me(t).scrollLeft;
}
function or(t, e, n) {
  const r = V(e), i = j(e), l = ne(t, !0, n === "fixed", e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const o = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((M(e) !== "body" || ge(i)) && (a = me(e)), V(e)) {
      const s = ne(e, !0);
      o.x = s.x + e.clientLeft, o.y = s.y + e.clientTop;
    } else
      i && (o.x = mt(i));
  return {
    x: l.left + a.scrollLeft - o.x,
    y: l.top + a.scrollTop - o.y,
    width: l.width,
    height: l.height
  };
}
function re(t) {
  if (M(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (Ke(t) ? t.host : null) || j(t);
  return Ke(e) ? e.host : e;
}
function Ze(t) {
  return !V(t) || D(t).position === "fixed" ? null : t.offsetParent;
}
function ar(t) {
  let e = re(t);
  for (; V(e) && !Ae(e); ) {
    if (Ce(e))
      return e;
    e = re(e);
  }
  return null;
}
function Ge(t) {
  const e = k(t);
  let n = Ze(t);
  for (; n && ir(n) && D(n).position === "static"; )
    n = Ze(n);
  return n && (M(n) === "html" || M(n) === "body" && D(n).position === "static" && !Ce(n)) ? e : n || ar(t) || e;
}
function lr(t) {
  return dt(t);
}
function sr(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const i = V(n), l = j(n);
  if (n === l)
    return e;
  let a = {
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
  if ((i || !i && r !== "fixed") && ((M(n) !== "body" || ge(l)) && (a = me(n)), V(n))) {
    const c = ne(n);
    o = K(n), s.x = c.x + n.clientLeft, s.y = c.y + n.clientTop;
  }
  return {
    width: e.width * o.x,
    height: e.height * o.y,
    x: e.x * o.x - a.scrollLeft * o.x + s.x,
    y: e.y * o.y - a.scrollTop * o.y + s.y
  };
}
function cr(t, e) {
  const n = k(t), r = j(t), i = n.visualViewport;
  let l = r.clientWidth, a = r.clientHeight, o = 0, s = 0;
  if (i) {
    l = i.width, a = i.height;
    const c = ft();
    (c || !c && e === "fixed") && (o = i.offsetLeft, s = i.offsetTop);
  }
  return {
    width: l,
    height: a,
    x: o,
    y: s
  };
}
function ur(t) {
  var e;
  const n = j(t), r = me(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, l = ee(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = ee(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let o = -r.scrollLeft + mt(t);
  const s = -r.scrollTop;
  return D(i || n).direction === "rtl" && (o += ee(n.clientWidth, i ? i.clientWidth : 0) - l), {
    width: l,
    height: a,
    x: o,
    y: s
  };
}
function vt(t) {
  const e = re(t);
  return Ae(e) ? t.ownerDocument.body : V(e) && ge(e) ? e : vt(e);
}
function ht(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = vt(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), l = k(r);
  return i ? e.concat(l, l.visualViewport || [], ge(r) ? r : []) : e.concat(r, ht(r));
}
function fr(t, e) {
  const n = ne(t, !0, e === "fixed"), r = n.top + t.clientTop, i = n.left + t.clientLeft, l = V(t) ? K(t) : {
    x: 1,
    y: 1
  }, a = t.clientWidth * l.x, o = t.clientHeight * l.y, s = i * l.x, c = r * l.y;
  return {
    top: c,
    left: s,
    right: s + a,
    bottom: c + o,
    x: s,
    y: c,
    width: a,
    height: o
  };
}
function Qe(t, e, n) {
  return e === "viewport" ? fe(cr(t, n)) : z(e) ? fr(e, n) : fe(ur(j(t)));
}
function dr(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = ht(t).filter((o) => z(o) && M(o) !== "body"), i = null;
  const l = D(t).position === "fixed";
  let a = l ? re(t) : t;
  for (; z(a) && !Ae(a); ) {
    const o = D(a), s = Ce(a);
    (l ? !s && !i : !s && o.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? r = r.filter((f) => f !== a) : i = o, a = re(a);
  }
  return e.set(t, r), r;
}
function pr(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = t;
  const a = [...n === "clippingAncestors" ? dr(e, this._c) : [].concat(n), r], o = a[0], s = a.reduce((c, f) => {
    const u = Qe(e, f, i);
    return c.top = ee(u.top, c.top), c.right = Je(u.right, c.right), c.bottom = Je(u.bottom, c.bottom), c.left = ee(u.left, c.left), c;
  }, Qe(e, o, i));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
const gr = {
  getClippingRect: pr,
  convertOffsetParentRelativeRectToViewportRelativeRect: sr,
  isElement: z,
  getDimensions: lr,
  getOffsetParent: Ge,
  getDocumentElement: j,
  getScale: K,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: r
    } = t;
    const i = this.getOffsetParent || Ge, l = this.getDimensions;
    return {
      reference: or(e, await i(n), r),
      floating: {
        x: 0,
        y: 0,
        ...await l(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => D(t).direction === "rtl"
}, mr = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: gr,
    ...n
  }, l = {
    ...i.platform,
    _c: r
  };
  return jn(t, e, {
    ...i,
    platform: l
  });
};
const vr = C({
  name: "SBasePopover",
  props: zn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    attrs: n
  }) {
    const {
      host: r,
      modelValue: i,
      showArrow: l,
      placement: a
    } = R(t), o = A(), s = A(), c = () => {
      const u = [];
      l.value && (u.push(rr(8)), u.push(Xn({
        element: o.value
      }))), a.value || u.push(tr()), mr(r.value, s.value, {
        middleware: u,
        placement: a.value || "bottom"
      }).then(({
        x: g,
        y: x,
        middlewareData: P,
        placement: p
      }) => {
        if (Object.assign(s.value.style, {
          left: `${g}px`,
          top: `${x}px`
        }), l.value) {
          const {
            x: v,
            y: d
          } = P.arrow, b = p.split("-")[0], y = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[b], h = ["top", "right", "bottom", "left"], w = h.indexOf(b) - 1, S = h[w < 0 ? w + 4 : w];
          Object.assign(o.value.style, {
            left: `${v}px`,
            top: `${d}px`,
            [y]: "-4px",
            [`border-${b}-color`]: "transparent",
            [`border-${S}-color`]: "transparent"
          });
        }
      });
    }, f = new MutationObserver(() => c());
    return ye(i, (u) => {
      u ? (xt(c), r.value && f.observe(r.value, {
        attributes: !0
      }), window.addEventListener("resize", c), window.addEventListener("scroll", c)) : (f.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c));
    }, {
      immediate: !0
    }), tt(() => {
      f.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c);
    }), () => {
      var u;
      return m(W, null, [i.value && m("div", ie({
        ref: s,
        class: "s-base-popover"
      }, n), [(u = e.default) == null ? void 0 : u.call(e), l.value && m("div", {
        class: "s-base-popover__arrow",
        ref: o
      }, null)])]);
    };
  }
}), et = C({
  name: "SPopover",
  props: Mn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const {
      modelValue: n,
      title: r
    } = R(t);
    return () => m(W, null, [n.value && m(vr, ie({
      class: "s-popover"
    }, t), {
      default: () => {
        var i;
        return [m("h4", {
          class: "s-popover__title"
        }, [r.value]), (i = e.default) == null ? void 0 : i.call(e)];
      }
    })]);
  }
}), hr = {
  install(t) {
    t.component(et.name, et);
  }
}, yr = [
  Et,
  Wt,
  Kt,
  Fn,
  In,
  qn,
  Ot,
  Vn,
  hr
], wr = {
  version: "0.0.1",
  install(t) {
    yr.forEach((e) => t.use(e));
  }
};
export {
  Fe as Button,
  Be as Form,
  ue as Icon,
  je as Input,
  $e as Modal,
  ke as Pagination,
  et as Popover,
  We as Tab,
  He as Tabs,
  Ne as Tree,
  wr as default
};
