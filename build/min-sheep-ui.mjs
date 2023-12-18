import { defineComponent as E, computed as k, createVNode as f, toRefs as A, Fragment as $, reactive as Ft, ref as C, unref as At, inject as M, mergeProps as ee, onMounted as Ce, provide as q, createTextVNode as z, watch as Q, onUnmounted as st, nextTick as ct, withDirectives as ut, vModelCheckbox as dt, isVNode as Lt } from "vue";
const kt = {
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
}, Nt = {
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
const fe = E({
  name: "SIcon",
  props: Nt,
  setup(t) {
    const e = k(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = f("img", {
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
}), It = (t) => {
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
}, Bt = {
  install(t) {
    t.component(fe.name, fe), t.component("ArrowDownIcon", It);
  }
};
const Ie = E({
  name: "SButton",
  props: kt,
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
    } = A(t), u = a.value ? "s-btn--block" : "", m = l.value ? "s-btn--round" : "", w = o.value ? "s-btn--plain" : "", x = s.value ? "s-btn--circle" : "", g = r.value === "mini" ? "18" : r.value === "small" ? "22" : r.value === "medium" ? "26" : "30";
    return () => f("button", {
      disabled: i.value,
      class: `s-btn s-btn--${n.value} s-btn--${r.value} ${u} ${m} ${w} ${x}`
    }, [e.default && c.value || e.default && d.value ? f($, null, [f(fe, {
      name: c.value,
      component: d.value,
      size: g
    }, null), e.default()]) : e.default ? f($, null, [e.icon && e.icon(), e.default()]) : c.value || d.value ? f(fe, {
      name: c.value,
      component: d.value,
      size: g
    }, null) : "按钮"]);
  }
}), Rt = {
  install(t) {
    t.component(Ie.name, Ie);
  }
};
function Fe(t, e = 0, n = []) {
  return e++, t.reduce((r, i) => {
    const a = { ...i };
    a.level = e, n.length > 0 && n[n.length - 1].level >= e && n.pop(), n.push(a);
    const l = n[n.length - 2];
    if (l && (a.parentId = l.id), a.children) {
      const o = Fe(a.children, e, n);
      return delete a.children, r.concat(a, o);
    } else
      return a.isLeaf === void 0 && (a.isLeaf = !0), r.concat(a);
  }, []);
}
function Vt(t, { getChildren: e, getParent: n }, { emit: r }) {
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
function Dt(t) {
  const e = k(() => {
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
function Mt(t, e, { getChildren: n, getParent: r }) {
  const i = Ft({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), a = k(
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
      const { dropPrev: p, dropNext: b, dropInner: y } = v;
      let h;
      const S = p ? y ? 0.25 : b ? 0.45 : 1 : -1, P = b ? y ? 0.75 : p ? 0.55 : 0 : 1, O = g.currentTarget, T = O == null ? void 0 : O.getBoundingClientRect(), N = g.clientY - ((T == null ? void 0 : T.top) || 0);
      if (N < ((T == null ? void 0 : T.height) || 0) * S ? h = "dropPrev" : N > ((T == null ? void 0 : T.height) || 0) * P ? h = "dropNext" : y ? h = "dropInner" : h = void 0, h) {
        const I = O == null ? void 0 : O.classList;
        I && (I.contains(ye[h]) || (l(O), I.add(ye[h])));
      } else
        l(O);
      i.dropType = h;
    }
  }, u = (g) => {
    g.stopPropagation(), i.draggingNode && l(g.currentTarget);
  }, m = (g, v) => {
    var b;
    if (g.preventDefault(), g.stopPropagation(), l(g.currentTarget), !i.draggingNode || !t)
      return;
    const p = (b = g.dataTransfer) == null ? void 0 : b.getData("dragNodeId");
    if (p) {
      const y = o(v.id, p);
      if (p === v.id || y)
        return;
      i.dropType && w(p, v), s();
    }
  };
  function w(g, v) {
    const p = e.value.find((b) => b.id === g);
    if (p) {
      let b;
      const y = n(p), h = r(p);
      if (i.dropType === "dropInner") {
        b = {
          ...p,
          parentId: v.id,
          level: v.level + 1
        };
        const S = e.value.indexOf(v);
        e.value.splice(S + 1, 0, b), v.isLeaf = void 0;
        const P = e.value.indexOf(p);
        e.value.splice(P, 1);
      } else if (i.dropType === "dropNext") {
        b = {
          ...p,
          parentId: v.parentId,
          level: v.level
        };
        const S = e.value.indexOf(v), P = n(v, !0).length;
        e.value.splice(
          S + P + 1,
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
        const P = e.value.indexOf(p);
        e.value.splice(P, 1);
      }
      i.dropType = "dropInner", y.forEach((S) => w(S.id, b)), h && n(h).length === 0 && (h.isLeaf = !0);
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
function qt(t, { getNode: e, getIndex: n, getChildren: r }, { emit: i }) {
  const a = (c) => {
    const d = e(c);
    d && d.isLeaf === !1 && !d.childNodeCount && (d.loading = !0, i("lazy-load", c, l));
  }, l = (c) => {
    const d = e(c.node);
    if (d) {
      d.loading = !1;
      const u = C(
        Fe(c.treeItems, d.level)
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
function ft(t = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  for (let r = 0; r < t; r++)
    n += e[parseInt((Math.random() * e.length).toString())];
  return n;
}
function zt(t, { getChildren: e, getIndex: n }) {
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
      d.value.id === void 0 && (d.value.id = ft()), t.value.splice(c, 0, d.value);
    },
    remove: (a) => {
      const l = e(a).map((o) => o.id);
      t.value = t.value.filter(
        (o) => o.id !== a.id && !l.includes(o.id)
      );
    }
  };
}
function jt(t, e, n, r) {
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
function $t(t, e, n) {
  const r = At(t), i = C(Fe(r)), a = Dt(i), l = [jt, Vt, zt], o = qt(i, a, n), s = Mt(e.draggable, i, a);
  return {
    ...l.reduce((d, u) => ({ ...d, ...u(i, a, n, o) }), {}),
    ...a,
    ...s,
    treeData: i
  };
}
const pt = {
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
}, Ae = {
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
var we = {}, Ht = {
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
})(Ht);
const H = we, Wt = E({
  name: "SBaseSelectAll",
  props: Ae,
  setup(t) {
    return () => f("label", {
      class: H("s-base-select-all", "is-checked", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [f("span", {
      class: H("s-base-select-all__input", "is-checked", {
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
const Ut = E({
  name: "SBaseSelectionBox",
  props: Ae,
  setup(t) {
    return () => f("label", {
      class: H("s-base-selection-box", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [f("span", {
      class: H("s-base-selection-box__input", {
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
const Yt = E({
  name: "SBaseSemiSelection",
  props: Ae,
  setup(t) {
    return () => f("label", {
      class: H("s-base-semi-selection", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [f("span", {
      class: H("s-base-semi-selection__input", "is-indeterminate", {
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
}), Xt = {
  ...pt,
  treeNode: {
    type: Object,
    required: !0
  }
}, Be = 34, Re = 24, Kt = E({
  name: "STreeNode",
  props: Xt,
  setup(t, {
    slots: e
  }) {
    const {
      lineable: n,
      checkable: r,
      treeNode: i,
      operable: a,
      draggable: l
    } = A(t), {
      toggleCheckNode: o,
      getChildrenExpanded: s,
      append: c,
      remove: d,
      onDragend: u,
      onDragleave: m,
      onDragover: w,
      onDragstart: x,
      onDrop: g
    } = M("TREE_UTILS"), v = C(!1), p = () => {
      v.value ? v.value = !1 : v.value = !0;
    };
    let b = {};
    l.value && (b = {
      draggable: !0,
      onDragend: (h) => u(h),
      onDragleave: (h) => m(h),
      onDragover: (h) => w(h),
      onDragstart: (h) => x(h, i.value),
      onDrop: (h) => g(h, i.value)
    });
    const y = () => f($, null, [i.value.inChecked ? f(Yt, {
      onClick: () => o(i.value),
      disabled: i.value.disabled
    }, null) : i.value.checked ? f(Wt, {
      onClick: () => o(i.value),
      disabled: i.value.disabled
    }, null) : f(Ut, {
      onClick: () => o(i.value),
      disabled: i.value.disabled
    }, null)]);
    return () => {
      var h, S, P;
      return f("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${Re * (i.value.level - 1)}px`
        },
        onMouseenter: p,
        onMouseleave: p
      }, [!i.value.isLeaf && i.value.expanded && n.value && f("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${Be * s(i.value).length}px`,
          left: `${Re * (i.value.level - 1) + 9}px`,
          top: `${Be}px`
        }
      }, null), f("div", ee({
        class: "s-tree__node--content"
      }, b), [i.value.isLeaf ? f("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (h = e.icon) == null ? void 0 : h.call(e), r.value && y(), (S = e.content) == null ? void 0 : S.call(e), a.value && v.value && f("span", {
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
      }, null)])]), i.value.loading && ((P = e.loading) == null ? void 0 : P.call(e))])]);
    };
  }
}), Gt = (t, {
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
const Jt = {
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
const Zt = E({
  name: "SVirtualList",
  props: Jt,
  setup(t, {
    slots: e
  }) {
    const {
      data: n,
      itemHeight: r,
      component: i
    } = A(t), a = C(), l = C(0), o = C(0), s = C(0), c = k(() => Math.ceil(l.value / r.value)), d = k(() => n.value.slice(s.value, Math.min(s.value + c.value, n.value.length)));
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
}), Ve = E({
  name: "STree",
  props: pt,
  emits: ["lazy-load", "check"],
  setup(t, e) {
    const {
      data: n,
      height: r,
      itemHeight: i,
      accordion: a
    } = A(t), {
      slots: l
    } = e, o = $t(n, t, e);
    return q("TREE_UTILS", o), () => {
      const s = (c) => f(Kt, ee(t, {
        treeNode: c,
        onClick: a.value ? (d) => o.toggleNode(d, c, a.value) : ""
      }), {
        content: () => l.content ? l.content(c) : c.label,
        icon: () => l.icon ? l.icon({
          nodeData: c,
          toggleNode: o.toggleNode
        }) : f(Gt, {
          expanded: !!c.expanded,
          onClick: (d) => o.toggleNode(d, c, a.value)
        }, null),
        loading: () => l.loading ? l.loading({
          nodeData: o
        }) : f("span", {
          class: "ml-1"
        }, [z("loading...")])
      });
      return f("div", {
        class: "s-tree"
      }, [r != null && r.value ? f("div", {
        style: {
          height: `${r.value}px`
        }
      }, [f(Zt, {
        data: o.expandedTree.value,
        itemHeight: i.value
      }, {
        default: ({
          item: c
        }) => s(c)
      })]) : o.expandedTree.value.map((c) => s(c))]);
    };
  }
}), Qt = {
  install(t) {
    t.component(Ve.name, Ve);
  }
}, mt = {
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
function en(t = 1) {
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
const tn = (t, e, n) => {
  const r = Array.from(Array(t).keys());
  if (t <= n)
    return r.slice(2, t);
  {
    const i = Math.ceil(n / 2);
    return e <= i ? r.slice(2, n) : e >= t - i + 1 ? r.slice(t - n + 2, t) : r.slice(e - i + 2, e + i - 1);
  }
}, nn = mt, xe = E({
  name: "SPager",
  props: nn,
  setup(t) {
    const {
      total: e,
      pageSize: n,
      pagerCount: r,
      hideOnSinglePage: i
    } = A(t), a = k(() => Math.ceil(e.value / n.value)), {
      pageIndex: l,
      setPageIndex: o,
      jumpPage: s,
      prevPage: c,
      nextPage: d
    } = en(), u = k(() => tn(a.value, l.value, r.value));
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
    return f($, null, [l && a.length >= 0 && f("ul", {
      class: "s-pager"
    }, [f("li", {
      onClick: () => r(1),
      class: {
        current: n === 1
      }
    }, [z("1")]), e > t && n > Math.ceil(t / 2) && f("li", {
      class: "more left",
      onClick: () => i(-5)
    }, [z("...")]), a.map((o) => f("li", {
      onClick: () => r(o),
      class: {
        current: n === o
      }
    }, [o])), e > t && n < e - Math.ceil(t / 2) + 1 && f("li", {
      class: "more right",
      onClick: () => i(5)
    }, [z("...")]), e > 1 && f("li", {
      onClick: () => r(e),
      class: {
        current: n === e
      }
    }, [e])])]);
  }
}), De = E({
  name: "SPagination",
  props: mt,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = C(), r = k(() => n.value ? n.value.pageIndex < 2 : !0), i = k(() => n.value ? n.value.pageIndex > n.value.totalPage - 1 : !0);
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
    }, [z("上一页")]), f(xe, ee(t, {
      ref: n
    }), null), f("button", {
      disabled: i.value,
      onClick: () => n.value.nextPage()
    }, [z("下一页")])]);
  }
}), rn = {
  install(t) {
    t.component(De.name, De), t.component(xe.name, xe);
  }
}, gt = Symbol("formContextToken"), an = {
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
const Me = E({
  name: "SForm",
  props: an,
  emits: ["submit"],
  setup(t, {
    slots: e,
    emit: n,
    expose: r
  }) {
    const i = k(() => ({
      layout: t.layout,
      labelSize: t.labelSize,
      labelAlign: t.labelAlign
    }));
    q("LABEL_DATA", i);
    const a = /* @__PURE__ */ new Set(), l = (d) => a.add(d), o = (d) => a.delete(d);
    q(gt, {
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
}), on = {
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
function X() {
  return X = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, X.apply(this, arguments);
}
function ln(t, e) {
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
function sn() {
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
  return sn() ? de = Reflect.construct.bind() : de = function(i, a, l) {
    var o = [null];
    o.push.apply(o, a);
    var s = Function.bind.apply(i, o), c = new s();
    return l && ie(c, l.prototype), c;
  }, de.apply(null, arguments);
}
function cn(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function Pe(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Pe = function(r) {
    if (r === null || !cn(r))
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
var un = /%[sdj%]/g, vt = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (vt = function(e, n) {
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
function L(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  var i = 0, a = n.length;
  if (typeof t == "function")
    return t.apply(null, n);
  if (typeof t == "string") {
    var l = t.replace(un, function(o) {
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
function dn(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function F(t, e) {
  return !!(t == null || e === "array" && Array.isArray(t) && !t.length || dn(e) && typeof t == "string" && !t);
}
function fn(t, e, n) {
  var r = [], i = 0, a = t.length;
  function l(o) {
    r.push.apply(r, o || []), i++, i === a && n(r);
  }
  t.forEach(function(o) {
    e(o, l);
  });
}
function qe(t, e, n) {
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
function pn(t) {
  var e = [];
  return Object.keys(t).forEach(function(n) {
    e.push.apply(e, t[n] || []);
  }), e;
}
var ze = /* @__PURE__ */ function(t) {
  ln(e, t);
  function e(n, r) {
    var i;
    return i = t.call(this, "Async Validation Error") || this, i.errors = n, i.fields = r, i;
  }
  return e;
}(/* @__PURE__ */ Pe(Error));
function mn(t, e, n, r, i) {
  if (e.first) {
    var a = new Promise(function(m, w) {
      var x = function(p) {
        return r(p), p.length ? w(new ze(p, _e(p))) : m(i);
      }, g = pn(t);
      qe(g, n, x);
    });
    return a.catch(function(m) {
      return m;
    }), a;
  }
  var l = e.firstFields === !0 ? Object.keys(t) : e.firstFields || [], o = Object.keys(t), s = o.length, c = 0, d = [], u = new Promise(function(m, w) {
    var x = function(v) {
      if (d.push.apply(d, v), c++, c === s)
        return r(d), d.length ? w(new ze(d, _e(d))) : m(i);
    };
    o.length || (r(d), m(i)), o.forEach(function(g) {
      var v = t[g];
      l.indexOf(g) !== -1 ? qe(v, n, x) : fn(v, n, x);
    });
  });
  return u.catch(function(m) {
    return m;
  }), u;
}
function gn(t) {
  return !!(t && t.message !== void 0);
}
function vn(t, e) {
  for (var n = t, r = 0; r < e.length; r++) {
    if (n == null)
      return n;
    n = n[e[r]];
  }
  return n;
}
function je(t, e) {
  return function(n) {
    var r;
    return t.fullFields ? r = vn(e, t.fullFields) : r = e[n.field || t.fullField], gn(n) ? (n.field = n.field || t.fullField, n.fieldValue = r, n) : {
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
        typeof r == "object" && typeof t[n] == "object" ? t[n] = X({}, t[n], r) : t[n] = r;
      }
  }
  return t;
}
var ht = function(e, n, r, i, a, l) {
  e.required && (!r.hasOwnProperty(e.field) || F(n, l || e.type)) && i.push(L(a.messages.required, e.fullField));
}, hn = function(e, n, r, i, a) {
  (/^\s+$/.test(n) || n === "") && i.push(L(a.messages.whitespace, e.fullField));
}, ce, yn = function() {
  if (ce)
    return ce;
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), l = new RegExp("^" + n + "$"), o = new RegExp("^" + i + "$"), s = function(h) {
    return h && h.exact ? a : new RegExp("(?:" + e(h) + n + e(h) + ")|(?:" + e(h) + i + e(h) + ")", "g");
  };
  s.v4 = function(y) {
    return y && y.exact ? l : new RegExp("" + e(y) + n + e(y), "g");
  }, s.v6 = function(y) {
    return y && y.exact ? o : new RegExp("" + e(y) + i + e(y), "g");
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
    return typeof e == "string" && e.length <= 2048 && !!e.match(yn());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(He.hex);
  }
}, bn = function(e, n, r, i, a) {
  if (e.required && n === void 0) {
    ht(e, n, r, i, a);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], o = e.type;
  l.indexOf(o) > -1 ? te[o](n) || i.push(L(a.messages.types[o], e.fullField, e.type)) : o && typeof n !== e.type && i.push(L(a.messages.types[o], e.fullField, e.type));
}, wn = function(e, n, r, i, a) {
  var l = typeof e.len == "number", o = typeof e.min == "number", s = typeof e.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, u = null, m = typeof n == "number", w = typeof n == "string", x = Array.isArray(n);
  if (m ? u = "number" : w ? u = "string" : x && (u = "array"), !u)
    return !1;
  x && (d = n.length), w && (d = n.replace(c, "_").length), l ? d !== e.len && i.push(L(a.messages[u].len, e.fullField, e.len)) : o && !s && d < e.min ? i.push(L(a.messages[u].min, e.fullField, e.min)) : s && !o && d > e.max ? i.push(L(a.messages[u].max, e.fullField, e.max)) : o && s && (d < e.min || d > e.max) && i.push(L(a.messages[u].range, e.fullField, e.min, e.max));
}, J = "enum", xn = function(e, n, r, i, a) {
  e[J] = Array.isArray(e[J]) ? e[J] : [], e[J].indexOf(n) === -1 && i.push(L(a.messages[J], e.fullField, e[J].join(", ")));
}, Sn = function(e, n, r, i, a) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(n) || i.push(L(a.messages.pattern.mismatch, e.fullField, n, e.pattern));
    else if (typeof e.pattern == "string") {
      var l = new RegExp(e.pattern);
      l.test(n) || i.push(L(a.messages.pattern.mismatch, e.fullField, n, e.pattern));
    }
  }
}, _ = {
  required: ht,
  whitespace: hn,
  type: bn,
  range: wn,
  enum: xn,
  pattern: Sn
}, Pn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (F(n, "string") && !e.required)
      return r();
    _.required(e, n, i, l, a, "string"), F(n, "string") || (_.type(e, n, i, l, a), _.range(e, n, i, l, a), _.pattern(e, n, i, l, a), e.whitespace === !0 && _.whitespace(e, n, i, l, a));
  }
  r(l);
}, _n = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (F(n) && !e.required)
      return r();
    _.required(e, n, i, l, a), n !== void 0 && _.type(e, n, i, l, a);
  }
  r(l);
}, On = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (n === "" && (n = void 0), F(n) && !e.required)
      return r();
    _.required(e, n, i, l, a), n !== void 0 && (_.type(e, n, i, l, a), _.range(e, n, i, l, a));
  }
  r(l);
}, En = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (F(n) && !e.required)
      return r();
    _.required(e, n, i, l, a), n !== void 0 && _.type(e, n, i, l, a);
  }
  r(l);
}, Tn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (F(n) && !e.required)
      return r();
    _.required(e, n, i, l, a), F(n) || _.type(e, n, i, l, a);
  }
  r(l);
}, Cn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (F(n) && !e.required)
      return r();
    _.required(e, n, i, l, a), n !== void 0 && (_.type(e, n, i, l, a), _.range(e, n, i, l, a));
  }
  r(l);
}, Fn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (F(n) && !e.required)
      return r();
    _.required(e, n, i, l, a), n !== void 0 && (_.type(e, n, i, l, a), _.range(e, n, i, l, a));
  }
  r(l);
}, An = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (n == null && !e.required)
      return r();
    _.required(e, n, i, l, a, "array"), n != null && (_.type(e, n, i, l, a), _.range(e, n, i, l, a));
  }
  r(l);
}, Ln = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (F(n) && !e.required)
      return r();
    _.required(e, n, i, l, a), n !== void 0 && _.type(e, n, i, l, a);
  }
  r(l);
}, kn = "enum", Nn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (F(n) && !e.required)
      return r();
    _.required(e, n, i, l, a), n !== void 0 && _[kn](e, n, i, l, a);
  }
  r(l);
}, In = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (F(n, "string") && !e.required)
      return r();
    _.required(e, n, i, l, a), F(n, "string") || _.pattern(e, n, i, l, a);
  }
  r(l);
}, Bn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (F(n, "date") && !e.required)
      return r();
    if (_.required(e, n, i, l, a), !F(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), _.type(e, s, i, l, a), s && _.range(e, s.getTime(), i, l, a);
    }
  }
  r(l);
}, Rn = function(e, n, r, i, a) {
  var l = [], o = Array.isArray(n) ? "array" : typeof n;
  _.required(e, n, i, l, a, o), r(l);
}, be = function(e, n, r, i, a) {
  var l = e.type, o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (F(n, l) && !e.required)
      return r();
    _.required(e, n, i, o, a, l), F(n, l) || _.type(e, n, i, o, a);
  }
  r(o);
}, Vn = function(e, n, r, i, a) {
  var l = [], o = e.required || !e.required && i.hasOwnProperty(e.field);
  if (o) {
    if (F(n) && !e.required)
      return r();
    _.required(e, n, i, l, a);
  }
  r(l);
}, ne = {
  string: Pn,
  method: _n,
  number: On,
  boolean: En,
  regexp: Tn,
  integer: Cn,
  float: Fn,
  array: An,
  object: Ln,
  enum: Nn,
  pattern: In,
  date: Bn,
  url: be,
  hex: be,
  email: be,
  required: Rn,
  any: Vn
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
      function b(h) {
        if (Array.isArray(h)) {
          var S;
          v = (S = v).concat.apply(S, h);
        } else
          v.push(h);
      }
      for (var y = 0; y < g.length; y++)
        b(g[y]);
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
        var y = b;
        typeof y.transform == "function" && (o === r && (o = X({}, o)), p = o[g] = y.transform(p)), typeof y == "function" ? y = {
          validator: y
        } : y = X({}, y), y.validator = l.getValidationMethod(y), y.validator && (y.field = g, y.fullField = y.fullField || g, y.type = l.getType(y), m[g] = m[g] || [], m[g].push({
          rule: y,
          value: p,
          source: o,
          field: g
        }));
      });
    });
    var x = {};
    return mn(m, s, function(g, v) {
      var p = g.rule, b = (p.type === "object" || p.type === "array") && (typeof p.fields == "object" || typeof p.defaultField == "object");
      b = b && (p.required || !p.required && g.value), p.field = g.field;
      function y(P, O) {
        return X({}, O, {
          fullField: p.fullField + "." + P,
          fullFields: p.fullFields ? [].concat(p.fullFields, [P]) : [P]
        });
      }
      function h(P) {
        P === void 0 && (P = []);
        var O = Array.isArray(P) ? P : [P];
        !s.suppressWarning && O.length && t.warning("async-validator:", O), O.length && p.message !== void 0 && (O = [].concat(p.message));
        var T = O.map(je(p, o));
        if (s.first && T.length)
          return x[p.field] = 1, v(T);
        if (!b)
          v(T);
        else {
          if (p.required && !g.value)
            return p.message !== void 0 ? T = [].concat(p.message).map(je(p, o)) : s.error && (T = [s.error(p, L(s.messages.required, p.field))]), v(T);
          var N = {};
          p.defaultField && Object.keys(g.value).map(function(R) {
            N[R] = p.defaultField;
          }), N = X({}, N, g.rule.fields);
          var I = {};
          Object.keys(N).forEach(function(R) {
            var V = N[R], Ct = Array.isArray(V) ? V : [V];
            I[R] = Ct.map(y.bind(null, R));
          });
          var G = new t(I);
          G.messages(s.messages), g.rule.options && (g.rule.options.messages = s.messages, g.rule.options.error = s.error), G.validate(g.value, g.rule.options || s, function(R) {
            var V = [];
            T && T.length && V.push.apply(V, T), R && R.length && V.push.apply(V, R), v(V.length ? V : null);
          });
        }
      }
      var S;
      if (p.asyncValidator)
        S = p.asyncValidator(p, g.value, h, g.source, s);
      else if (p.validator) {
        try {
          S = p.validator(p, g.value, h, g.source, s);
        } catch (P) {
          console.error == null || console.error(P), s.suppressValidatorError || setTimeout(function() {
            throw P;
          }, 0), h(P.message);
        }
        S === !0 ? h() : S === !1 ? h(typeof p.message == "function" ? p.message(p.fullField || p.field) : p.message || (p.fullField || p.field) + " fails") : S instanceof Array ? h(S) : S instanceof Error && h(S.message);
      }
      S && S.then && S.then(function() {
        return h();
      }, function(P) {
        return h(P);
      });
    }, function(g) {
      d(g);
    }, o);
  }, e.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !ne.hasOwnProperty(r.type))
      throw new Error(L("Unknown rule type %s", r.type));
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
le.warning = vt;
le.messages = Ee;
le.validators = ne;
const We = E({
  name: "SFormItem",
  props: on,
  setup(t, {
    slots: e
  }) {
    const {
      error: n
    } = A(t), r = M("LABEL_DATA"), i = k(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": r.value.layout === "horizontal",
      "s-form__item--vertical": r.value.layout === "vertical"
    })), a = k(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": r.value.layout === "vertical",
      [`s-form__label--${r.value.labelAlign}`]: r.value.layout === "horizontal",
      [`s-form__label--${r.value.labelSize}`]: r.value.layout === "horizontal"
    })), l = M(gt), o = C(!1), s = C(""), d = {
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
    return q("FORM_ITEM_CTX", d), Ce(() => {
      t.prop && (l == null || l.addItem(d));
    }), st(() => {
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
}), Dn = {
  install(t) {
    t.component(Me.name, Me), t.component(We.name, We);
  }
}, Mn = {
  modelValue: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  }
};
const Ue = E({
  name: "SInput",
  props: Mn,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = M("FORM_ITEM_CTX"), r = (i) => {
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
}), qn = {
  install(t) {
    t.component(Ue.name, Ue);
  }
}, zn = {
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
const jn = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
const $n = E({
  name: "SBaseModal",
  props: jn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      modelValue: r
    } = A(t);
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
}), Ye = E({
  name: "SModal",
  props: zn,
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
    } = A(t), u = s.value ? {
      marginTop: 0,
      top: "50%",
      transform: "translateY(-50%)"
    } : null, m = k(() => typeof d.value == "number" ? `${d.value}px` : d.value);
    return () => f($n, {
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
}), Hn = {
  install(t) {
    t.component(Ye.name, Ye);
  }
}, Wn = {
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
const Xe = E({
  name: "STabs",
  props: Wn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const n = C([]);
    q("active-data", n);
    const r = C(t.modelValue);
    q("active-tab", r);
    const i = (o) => {
      r.value = o;
    }, a = (o, s) => {
      const c = n.value.findIndex((d) => d.id === s);
      n.value.splice(c, 1), o.stopPropagation(), n.value.length === c ? i(n.value[c - 1].id) : i(n.value[c].id);
    }, l = () => {
      const o = ft();
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
}), Un = {
  id: {
    type: String,
    required: !0
  },
  title: {
    type: String,
    required: !0
  }
};
const Ke = E({
  name: "STab",
  props: Un,
  setup(t, {
    slots: e
  }) {
    const n = M("active-tab");
    return M("active-data").value.push({
      id: t.id,
      title: t.title
    }), () => {
      var i;
      return f($, null, [t.id === n.value && f("div", {
        class: "s-tab"
      }, [(i = e.default) == null ? void 0 : i.call(e)])]);
    };
  }
}), Yn = {
  install(t) {
    t.component(Xe.name, Xe), t.component(Ke.name, Ke);
  }
}, Xn = {
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
const Kn = {
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
function Le(t) {
  return t === "y" ? "height" : "width";
}
function se(t) {
  return t.split("-")[0];
}
function ge(t) {
  return ["top", "bottom"].includes(se(t)) ? "x" : "y";
}
function Ge(t, e, n) {
  let {
    reference: r,
    floating: i
  } = t;
  const a = r.x + r.width / 2 - i.width / 2, l = r.y + r.height / 2 - i.height / 2, o = ge(e), s = Le(o), c = r[s] / 2 - i[s] / 2, d = se(e), u = o === "x";
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
const Gn = async (t, e, n) => {
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
  } = Ge(c, r, s), m = r, w = {}, x = 0;
  for (let g = 0; g < o.length; g++) {
    const {
      name: v,
      fn: p
    } = o[g], {
      x: b,
      y,
      data: h,
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
    if (d = b ?? d, u = y ?? u, w = {
      ...w,
      [v]: {
        ...w[v],
        ...h
      }
    }, process.env.NODE_ENV !== "production" && x > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), S && x <= 50) {
      x++, typeof S == "object" && (S.placement && (m = S.placement), S.rects && (c = S.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : S.rects), {
        x: d,
        y: u
      } = Ge(c, m, s)), g = -1;
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
function Jn(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function yt(t) {
  return typeof t != "number" ? Jn(t) : {
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
async function Zn(t, e) {
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
  } = e, x = yt(w), v = o[m ? u === "floating" ? "reference" : "floating" : u], p = pe(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(v))) == null || n ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(o.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: s
  })), b = u === "floating" ? {
    ...l.floating,
    x: r,
    y: i
  } : l.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(o.floating)), h = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = pe(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: y,
    strategy: s
  }) : b);
  return process.env.NODE_ENV, {
    top: (p.top - S.top + x.top) / h.y,
    bottom: (S.bottom - p.bottom + x.bottom) / h.y,
    left: (p.left - S.left + x.left) / h.x,
    right: (S.right - p.right + x.right) / h.x
  };
}
const Qn = Math.min, er = Math.max;
function tr(t, e, n) {
  return er(t, Qn(e, n));
}
const nr = (t) => ({
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
    const c = yt(r), d = {
      x: i,
      y: a
    }, u = ge(l), m = Le(u), w = await s.getDimensions(n), x = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", v = o.reference[m] + o.reference[u] - d[u] - o.floating[m], p = d[u] - o.reference[u], b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(n));
    let y = b ? u === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0;
    y === 0 && (y = o.floating[m]);
    const h = v / 2 - p / 2, S = c[x], P = y - w[m] - c[g], O = y / 2 - w[m] / 2 + h, T = tr(S, O, P), I = K(l) != null && O != T && o.reference[m] / 2 - (O < S ? c[x] : c[g]) - w[m] / 2 < 0 ? O < S ? S - O : P - O : 0;
    return {
      [u]: d[u] - I,
      data: {
        [u]: T,
        centerOffset: O - T
      }
    };
  }
}), rr = ["top", "right", "bottom", "left"], Je = /* @__PURE__ */ rr.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []), ir = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ze(t) {
  return t.replace(/left|right|bottom|top/g, (e) => ir[e]);
}
function ar(t, e, n) {
  n === void 0 && (n = !1);
  const r = K(t), i = ge(t), a = Le(i);
  let l = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (l = Ze(l)), {
    main: l,
    cross: Ze(l)
  };
}
const or = {
  start: "end",
  end: "start"
};
function lr(t) {
  return t.replace(/start|end/g, (e) => or[e]);
}
function sr(t, e, n) {
  return (t ? [...n.filter((i) => K(i) === t), ...n.filter((i) => K(i) !== t)] : n.filter((i) => se(i) === i)).filter((i) => t ? K(i) === t || (e ? lr(i) !== i : !1) : !0);
}
const cr = function(t) {
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
        allowedPlacements: u = Je,
        autoAlignment: m = !0,
        ...w
      } = t, x = d !== void 0 || u === Je ? sr(d || null, m, u) : u, g = await Zn(e, w), v = ((n = l.autoPlacement) == null ? void 0 : n.index) || 0, p = x[v];
      if (p == null)
        return {};
      const {
        main: b,
        cross: y
      } = ar(p, a, await (s.isRTL == null ? void 0 : s.isRTL(c.floating)));
      if (o !== p)
        return {
          reset: {
            placement: x[0]
          }
        };
      const h = [g[se(p)], g[b], g[y]], S = [...((r = l.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: p,
        overflows: h
      }], P = x[v + 1];
      if (P)
        return {
          data: {
            index: v + 1,
            overflows: S
          },
          reset: {
            placement: P
          }
        };
      const O = S.slice().sort((I, G) => I.overflows[0] - G.overflows[0]), N = ((i = O.find((I) => {
        let {
          overflows: G
        } = I;
        return G.every((R) => R <= 0);
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
async function ur(t, e) {
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
const dr = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, i = await ur(e, t);
      return {
        x: n + i.x,
        y: r + i.y,
        data: i
      };
    }
  };
};
function B(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function D(t) {
  return B(t).getComputedStyle(t);
}
function W(t) {
  return wt(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ue;
function bt() {
  if (ue)
    return ue;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ue = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ue) : navigator.userAgent;
}
function j(t) {
  return t instanceof B(t).HTMLElement;
}
function U(t) {
  return t instanceof B(t).Element;
}
function wt(t) {
  return t instanceof B(t).Node;
}
function Qe(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = B(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function ve(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: i
  } = D(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(i);
}
function fr(t) {
  return ["table", "td", "th"].includes(W(t));
}
function ke(t) {
  const e = /firefox/i.test(bt()), n = D(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    (i) => {
      const a = n.contain;
      return a != null ? a.includes(i) : !1;
    }
  );
}
function xt() {
  return !/^((?!chrome|android).)*safari/i.test(bt());
}
function Ne(t) {
  return ["html", "body", "#document"].includes(W(t));
}
const et = Math.min, re = Math.max, me = Math.round;
function St(t) {
  const e = D(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const i = t.offsetWidth, a = t.offsetHeight, l = me(n) !== i || me(r) !== a;
  return l && (n = i, r = a), {
    width: n,
    height: r,
    fallback: l
  };
}
function Pt(t) {
  return U(t) ? t : t.contextElement;
}
const _t = {
  x: 1,
  y: 1
};
function Z(t) {
  const e = Pt(t);
  if (!j(e))
    return _t;
  const n = e.getBoundingClientRect(), {
    width: r,
    height: i,
    fallback: a
  } = St(e);
  let l = (a ? me(n.width) : n.width) / r, o = (a ? me(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!o || !Number.isFinite(o)) && (o = 1), {
    x: l,
    y: o
  };
}
function ae(t, e, n, r) {
  var i, a;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), o = Pt(t);
  let s = _t;
  e && (r ? U(r) && (s = Z(r)) : s = Z(t));
  const c = o ? B(o) : window, d = !xt() && n;
  let u = (l.left + (d && ((i = c.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / s.x, m = (l.top + (d && ((a = c.visualViewport) == null ? void 0 : a.offsetTop) || 0)) / s.y, w = l.width / s.x, x = l.height / s.y;
  if (o) {
    const g = B(o), v = r && U(r) ? B(r) : r;
    let p = g.frameElement;
    for (; p && r && v !== g; ) {
      const b = Z(p), y = p.getBoundingClientRect(), h = getComputedStyle(p);
      y.x += (p.clientLeft + parseFloat(h.paddingLeft)) * b.x, y.y += (p.clientTop + parseFloat(h.paddingTop)) * b.y, u *= b.x, m *= b.y, w *= b.x, x *= b.y, u += y.x, m += y.y, p = B(p).frameElement;
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
function Y(t) {
  return ((wt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function he(t) {
  return U(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Ot(t) {
  return ae(Y(t)).left + he(t).scrollLeft;
}
function pr(t, e, n) {
  const r = j(e), i = Y(e), a = ae(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const o = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((W(e) !== "body" || ve(i)) && (l = he(e)), j(e)) {
      const s = ae(e, !0);
      o.x = s.x + e.clientLeft, o.y = s.y + e.clientTop;
    } else
      i && (o.x = Ot(i));
  return {
    x: a.left + l.scrollLeft - o.x,
    y: a.top + l.scrollTop - o.y,
    width: a.width,
    height: a.height
  };
}
function oe(t) {
  if (W(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (Qe(t) ? t.host : null) || Y(t);
  return Qe(e) ? e.host : e;
}
function tt(t) {
  return !j(t) || D(t).position === "fixed" ? null : t.offsetParent;
}
function mr(t) {
  let e = oe(t);
  for (; j(e) && !Ne(e); ) {
    if (ke(e))
      return e;
    e = oe(e);
  }
  return null;
}
function nt(t) {
  const e = B(t);
  let n = tt(t);
  for (; n && fr(n) && D(n).position === "static"; )
    n = tt(n);
  return n && (W(n) === "html" || W(n) === "body" && D(n).position === "static" && !ke(n)) ? e : n || mr(t) || e;
}
function gr(t) {
  return St(t);
}
function vr(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const i = j(n), a = Y(n);
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
  if ((i || !i && r !== "fixed") && ((W(n) !== "body" || ve(a)) && (l = he(n)), j(n))) {
    const c = ae(n);
    o = Z(n), s.x = c.x + n.clientLeft, s.y = c.y + n.clientTop;
  }
  return {
    width: e.width * o.x,
    height: e.height * o.y,
    x: e.x * o.x - l.scrollLeft * o.x + s.x,
    y: e.y * o.y - l.scrollTop * o.y + s.y
  };
}
function hr(t, e) {
  const n = B(t), r = Y(t), i = n.visualViewport;
  let a = r.clientWidth, l = r.clientHeight, o = 0, s = 0;
  if (i) {
    a = i.width, l = i.height;
    const c = xt();
    (c || !c && e === "fixed") && (o = i.offsetLeft, s = i.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: o,
    y: s
  };
}
function yr(t) {
  var e;
  const n = Y(t), r = he(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, a = re(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = re(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let o = -r.scrollLeft + Ot(t);
  const s = -r.scrollTop;
  return D(i || n).direction === "rtl" && (o += re(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: l,
    x: o,
    y: s
  };
}
function Et(t) {
  const e = oe(t);
  return Ne(e) ? t.ownerDocument.body : j(e) && ve(e) ? e : Et(e);
}
function Tt(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = Et(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), a = B(r);
  return i ? e.concat(a, a.visualViewport || [], ve(r) ? r : []) : e.concat(r, Tt(r));
}
function br(t, e) {
  const n = ae(t, !0, e === "fixed"), r = n.top + t.clientTop, i = n.left + t.clientLeft, a = j(t) ? Z(t) : {
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
  return e === "viewport" ? pe(hr(t, n)) : U(e) ? br(e, n) : pe(yr(Y(t)));
}
function wr(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = Tt(t).filter((o) => U(o) && W(o) !== "body"), i = null;
  const a = D(t).position === "fixed";
  let l = a ? oe(t) : t;
  for (; U(l) && !Ne(l); ) {
    const o = D(l), s = ke(l);
    (a ? !s && !i : !s && o.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? r = r.filter((d) => d !== l) : i = o, l = oe(l);
  }
  return e.set(t, r), r;
}
function xr(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? wr(e, this._c) : [].concat(n), r], o = l[0], s = l.reduce((c, d) => {
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
const Sr = {
  getClippingRect: xr,
  convertOffsetParentRelativeRectToViewportRelativeRect: vr,
  isElement: U,
  getDimensions: gr,
  getOffsetParent: nt,
  getDocumentElement: Y,
  getScale: Z,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: r
    } = t;
    const i = this.getOffsetParent || nt, a = this.getDimensions;
    return {
      reference: pr(e, await i(n), r),
      floating: {
        x: 0,
        y: 0,
        ...await a(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => D(t).direction === "rtl"
}, Pr = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: Sr,
    ...n
  }, a = {
    ...i.platform,
    _c: r
  };
  return Gn(t, e, {
    ...i,
    platform: a
  });
};
const _r = E({
  name: "SBasePopover",
  props: Kn,
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
    } = A(t), o = C(), s = C(), c = () => {
      const u = [];
      a.value && (u.push(dr(8)), u.push(nr({
        element: o.value
      }))), l.value || u.push(cr()), Pr(r.value, s.value, {
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
          } = x.arrow, b = g.split("-")[0], y = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[b], h = ["top", "right", "bottom", "left"], S = h.indexOf(b) - 1, P = h[S < 0 ? S + 4 : S];
          Object.assign(o.value.style, {
            left: `${v}px`,
            top: `${p}px`,
            [y]: "-4px",
            [`border-${b}-color`]: "transparent",
            [`border-${P}-color`]: "transparent"
          });
        }
      });
    }, d = new MutationObserver(() => c());
    return Q(i, (u) => {
      u ? (ct(c), r.value && d.observe(r.value, {
        attributes: !0
      }), window.addEventListener("resize", c), window.addEventListener("scroll", c)) : (d.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c));
    }, {
      immediate: !0
    }), st(() => {
      d.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c);
    }), () => {
      var u;
      return f($, null, [i.value && f("div", ee({
        ref: s,
        class: "s-base-popover"
      }, n), [(u = e.default) == null ? void 0 : u.call(e), a.value && f("div", {
        class: "s-base-popover__arrow",
        ref: o
      }, null)])]);
    };
  }
}), it = E({
  name: "SPopover",
  props: Xn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const {
      modelValue: n,
      title: r
    } = A(t);
    return () => f($, null, [n.value && f(_r, ee({
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
}), Or = {
  install(t) {
    t.component(it.name, it);
  }
}, Er = {
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
  stripe: { type: Boolean, default: !1 },
  showSummary: { type: Boolean, default: !1 }
}, Tr = E({
  name: "STableTitle",
  setup() {
    return () => f("div", {
      class: "table-title"
    }, [z("table-footer")]);
  }
}), Cr = {
  columns: {
    type: Array,
    default: {}
  }
}, Fr = {
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
const Te = E({
  name: "STableColumn",
  props: Fr,
  setup(t) {
    const {
      prop: e,
      title: n,
      type: r
    } = A(t);
    M("column-data").value.push({
      prop: e.value,
      title: n.value,
      type: r.value
    });
    const a = M("all-checked"), l = M("is-indeterminate"), o = C();
    return ct(() => {
      o.value && (o.value.indeterminate = l.value);
    }), Q(l, () => {
      o.value && (o.value.indeterminate = l.value);
    }, {
      immediate: !0
    }), () => f("th", {
      class: "s-table-column"
    }, [r.value === "selection" ? ut(f("input", {
      ref: o,
      type: "checkbox",
      "onUpdate:modelValue": (s) => a.value = s
    }, null), [[dt, a.value]]) : n.value]);
  }
}), Ar = E({
  name: "STableHeader",
  props: Cr,
  setup(t) {
    const {
      columns: e
    } = A(t);
    return () => f($, null, [e.value.map((n, r) => f(Te, ee(n, {
      key: r
    }), null))]);
  }
}), Lr = E({
  name: "STableFooter",
  setup() {
    return () => f("div", {
      class: "table-footer"
    }, [z("table-footer")]);
  }
}), kr = E({
  name: "STableSummary",
  setup() {
    return () => f("div", {
      class: "table-summary"
    }, [z("table-footer")]);
  }
});
function at(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !Lt(t);
}
const ot = E({
  name: "STable",
  props: Er,
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
    } = A(t), s = C([]);
    q("column-data", s), Q(r, (u) => {
      const m = u.filter((w) => w.checked);
      m.length === r.value.length ? (c.value = !0, d.value = !1) : m.length === 0 ? (c.value = !1, d.value = !1) : d.value = !0, n("selection-change", m);
    }, {
      deep: !0
    });
    const c = C(r.value.every((u) => u.checked));
    q("all-checked", c), Q(c, (u) => {
      r.value.forEach((m) => {
        m.checked = u;
      });
    });
    const d = C(r.value.some((u) => u.checked) && !c.value);
    return q("is-indeterminate", d), () => {
      var w;
      let u, m;
      return f("table", {
        class: H("s-table", {
          "s-table--border": i.value,
          "s-table--striped": a.value
        })
      }, [e.title ? f(Tr, null, at(u = e.title()) ? u : {
        default: () => [u]
      }) : null, f("thead", null, [f("tr", null, [l.value.length > 0 ? f(Ar, {
        columns: l.value
      }, null) : (w = e.default) == null ? void 0 : w.call(e)])]), f("tbody", null, [r.value.length > 0 ? r.value.map((x, g) => f("tr", {
        class: H({
          "s-table__row--striped": g % 2 == 1 && a.value
        })
      }, [s.value.map((v, p) => {
        var y, h, S;
        const b = (y = e.default) == null ? void 0 : y.call(e)[p];
        return b != null && b.children ? f("td", null, [(S = (h = b == null ? void 0 : b.children).default) == null ? void 0 : S.call(h, x)]) : f("td", null, [v.prop ? x[v.prop] : v.type === "selection" ? ut(f("input", {
          type: "checkbox",
          "onUpdate:modelValue": (P) => x.checked = P
        }, null), [[dt, x.checked]]) : ""]);
      })])) : f("tr", {
        class: "s-table-placeholder"
      }, [f("td", {
        colspan: 3
      }, [f("div", {
        class: "ant-empty-description"
      }, [e.empty ? e.empty() : "暂无数据"])])])]), e.footer ? f(Lr, null, at(m = e.footer()) ? m : {
        default: () => [m]
      }) : o.value ? f(kr, null, null) : null]);
    };
  }
}), Nr = {
  install(t) {
    t.component(ot.name, ot), t.component(Te.name, Te);
  }
}, Ir = {
  image: String,
  imageSize: Number,
  description: String
};
const lt = E({
  name: "SEmpty",
  props: Ir,
  setup(t, {
    slots: e
  }) {
    const {
      image: n,
      imageSize: r,
      description: i
    } = A(t);
    return () => {
      var a;
      return f("div", {
        class: "s-empty"
      }, [f("div", {
        class: "s-empty-image",
        style: `width:${r == null ? void 0 : r.value}px`
      }, [e.image ? e.image() : n.value ? f("img", {
        src: n.value
      }, null) : f("svg", {
        width: "184",
        height: "152",
        viewBox: "0 0 184 152",
        xmlns: "http://www.w3.org/2000/svg"
      }, [f("g", {
        fill: "none",
        "fill-rule": "evenodd"
      }, [f("g", {
        transform: "translate(24 31.67)"
      }, [f("ellipse", {
        "fill-opacity": ".8",
        fill: "#F5F5F7",
        cx: "67.797",
        cy: "106.89",
        rx: "67.797",
        ry: "12.668"
      }, null), f("path", {
        d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
        fill: "#AEB8C2"
      }, null), f("path", {
        d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
        fill: "url(#linearGradient-1)",
        transform: "translate(13.56)"
      }, null), f("path", {
        d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
        fill: "#F5F5F7"
      }, null), f("path", {
        d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
        fill: "#DCE0E6"
      }, null)]), f("path", {
        d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
        fill: "#DCE0E6"
      }, null), f("g", {
        transform: "translate(149.65 15.383)",
        fill: "#FFF"
      }, [f("ellipse", {
        cx: "20.654",
        cy: "3.167",
        rx: "2.849",
        ry: "2.815"
      }, null), f("path", {
        d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
      }, null)])])])]), f("div", {
        class: "s-empty-description"
      }, [e.description ? e.description() : i.value ? i.value : "暂无数据"]), f("div", {
        class: "s-empty-footer"
      }, [(a = e.default) == null ? void 0 : a.call(e)])]);
    };
  }
}), Br = {
  install(t) {
    t.component(lt.name, lt);
  }
}, Rr = [
  Rt,
  Qt,
  rn,
  Dn,
  qn,
  Hn,
  Bt,
  Yn,
  Or,
  Nr,
  Br
], Dr = {
  version: "0.0.1",
  install(t) {
    Rr.forEach((e) => t.use(e));
  }
};
export {
  Ie as Button,
  lt as Empty,
  Me as Form,
  fe as Icon,
  Ue as Input,
  Ye as Modal,
  De as Pagination,
  it as Popover,
  Ke as Tab,
  ot as Table,
  Te as TableColumn,
  Xe as Tabs,
  Ve as Tree,
  Dr as default
};
