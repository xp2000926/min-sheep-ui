import { defineComponent as T, computed as F, createVNode as p, toRefs as R, Fragment as W, reactive as _t, ref as A, unref as Ot, inject as U, mergeProps as oe, onMounted as Te, provide as Y, createTextVNode as J, watch as be, onUnmounted as at, nextTick as Et } from "vue";
const Tt = {
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
}, Ct = {
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
    var r, i, o, a, l, s = function(u, m) {
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
    }, document.addEventListener("DOMContentLoaded", i, !1)) : document.attachEvent && (o = r, a = t.document, l = !1, d(), a.onreadystatechange = function() {
      a.readyState == "complete" && (a.onreadystatechange = null, c());
    });
  }
  function c() {
    l || (l = !0, o());
  }
  function d() {
    try {
      a.documentElement.doScroll("left");
    } catch {
      return void setTimeout(d, 50);
    }
    c();
  }
}(window);
const de = T({
  name: "SIcon",
  props: Ct,
  setup(t) {
    const e = F(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = p("img", {
      src: t.name,
      style: {
        width: e.value,
        verticalAlign: "middle"
      }
    }, null), r = p("span", {
      class: [t.prefix, t.prefix + "-" + t.name],
      style: {
        fontSize: e.value,
        color: t.color
      }
    }, null), i = p("svg", {
      style: {
        width: e.value,
        height: e.value
      }
    }, [p("use", {
      "xlink:href": `#${t.prefix}-${t.component}`,
      fill: t.color
    }, null)]), o = t.component ? i : /http|https/.test(t.name) ? n : r;
    return () => o;
  }
}), At = (t) => {
  const e = t.size ? typeof t.size == "number" ? `${t.size}px` : t.size : void 0, n = t.color ? t.color : "black";
  return p("svg", {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-arrow-down",
    style: {
      width: e,
      height: e,
      fill: n,
      stroke: n
    }
  }, [p("path", {
    d: "m11.27 27.728 12.727 12.728 12.728-12.728M24 5v34.295"
  }, null)]);
}, Lt = {
  install(t) {
    t.component(de.name, de), t.component("ArrowDownIcon", At);
  }
};
const Ie = T({
  name: "SButton",
  props: Tt,
  setup(t, {
    slots: e
  }) {
    const {
      type: n,
      size: r,
      disabled: i,
      block: o,
      round: a,
      plain: l,
      circle: s,
      icon: c,
      iconSvg: d
    } = R(t), u = o.value ? "s-btn--block" : "", m = a.value ? "s-btn--round" : "", x = l.value ? "s-btn--plain" : "", P = s.value ? "s-btn--circle" : "", g = r.value === "mini" ? "18" : r.value === "small" ? "22" : r.value === "medium" ? "26" : "30";
    return () => p("button", {
      disabled: i.value,
      class: `s-btn s-btn--${n.value} s-btn--${r.value} ${u} ${m} ${x} ${P}`
    }, [e.default && c.value || e.default && d.value ? p(W, null, [p(de, {
      name: c.value,
      component: d.value,
      size: g
    }, null), e.default()]) : e.default ? p(W, null, [e.icon && e.icon(), e.default()]) : c.value || d.value ? p(de, {
      name: c.value,
      component: d.value,
      size: g
    }, null) : "按钮"]);
  }
}), Ft = {
  install(t) {
    t.component(Ie.name, Ie);
  }
};
function Ce(t, e = 0, n = []) {
  return e++, t.reduce((r, i) => {
    const o = { ...i };
    o.level = e, n.length > 0 && n[n.length - 1].level >= e && n.pop(), n.push(o);
    const a = n[n.length - 2];
    if (a && (o.parentId = a.id), o.children) {
      const l = Ce(o.children, e, n);
      return delete o.children, r.concat(o, l);
    } else
      return o.isLeaf === void 0 && (o.isLeaf = !0), r.concat(o);
  }, []);
}
function Nt(t, { getChildren: e, getParent: n }, { emit: r }) {
  const i = (a) => {
    a.checked = !a.checked, e(a).forEach((u) => {
      u.checked = a.checked, u.inChecked = e(a, !0).every(
        (m) => m.inChecked
      );
    }), a.inChecked = !1, o(a);
    const l = t.value.map((u) => {
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
      a,
      l,
      s,
      c,
      d
    );
  }, o = (a) => {
    const l = n(a);
    if (!l)
      return;
    const s = e(l, !0), c = s.every((u) => u.checked);
    l.checked = c;
    const d = s.some((u) => u.checked);
    c ? l.inChecked = !1 : d ? l.inChecked = !0 : l.inChecked = !1, l.parentId && o(l);
  };
  return {
    toggleCheckNode: i
  };
}
function It(t) {
  const e = F(() => {
    let l = [];
    const s = [];
    for (const c of t.value)
      l.map((d) => d.id).includes(c.id) || (c.expanded !== !0 && (l = n(c)), s.push(c));
    return s;
  }), n = (l, s = !0) => {
    const c = [], d = t.value.findIndex((u) => u.id === l.id);
    for (let u = d + 1; u < t.value.length && l.level < t.value[u].level; u++)
      (s || l.level === t.value[u].level - 1) && c.push(t.value[u]);
    return c;
  }, r = (l, s = []) => {
    const c = n(l, !1);
    return s.push(...c), c.forEach((d) => {
      d.expanded && r(d, s);
    }), s;
  };
  return {
    expandedTree: e,
    getChildren: n,
    getChildrenExpanded: r,
    getIndex: (l) => l ? t.value.findIndex((s) => s.id === l.id) : -1,
    getNode: (l) => t.value.find((s) => s.id === l.id),
    getParent: (l) => t.value.find((s) => s.id === l.parentId)
  };
}
const he = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function kt(t, e, { getChildren: n, getParent: r }) {
  const i = _t({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), o = F(
    () => e.value.reduce(
      (g, v) => ({
        ...g,
        [v.id]: v
      }),
      {}
    )
  ), a = (g) => {
    g == null || g.classList.remove(...Object.values(he));
  }, l = (g, v) => {
    var b;
    const f = (b = o.value[g]) == null ? void 0 : b.parentId;
    return f === v ? !0 : f !== void 0 ? l(f, v) : !1;
  }, s = () => {
    i.dropType = void 0, i.draggingNode = null, i.draggingTreeNode = null;
  }, c = (g, v) => {
    var f;
    g.stopPropagation(), i.draggingNode = g.target, i.draggingTreeNode = v, (f = g.dataTransfer) == null || f.setData("dragNodeId", v.id);
  }, d = (g) => {
    if (g.preventDefault(), g.stopPropagation(), !!i.draggingNode && t) {
      if (g.dataTransfer && (g.dataTransfer.dropEffect = "move"), !e)
        return;
      let v = {};
      typeof t == "object" ? v = t : t === !0 && (v = { dropInner: !0 });
      const { dropPrev: f, dropNext: b, dropInner: y } = v;
      let h;
      const w = f ? y ? 0.25 : b ? 0.45 : 1 : -1, _ = b ? y ? 0.75 : f ? 0.55 : 0 : 1, O = g.currentTarget, E = O == null ? void 0 : O.getBoundingClientRect(), N = g.clientY - ((E == null ? void 0 : E.top) || 0);
      if (N < ((E == null ? void 0 : E.height) || 0) * w ? h = "dropPrev" : N > ((E == null ? void 0 : E.height) || 0) * _ ? h = "dropNext" : y ? h = "dropInner" : h = void 0, h) {
        const I = O == null ? void 0 : O.classList;
        I && (I.contains(he[h]) || (a(O), I.add(he[h])));
      } else
        a(O);
      i.dropType = h;
    }
  }, u = (g) => {
    g.stopPropagation(), i.draggingNode && a(g.currentTarget);
  }, m = (g, v) => {
    var b;
    if (g.preventDefault(), g.stopPropagation(), a(g.currentTarget), !i.draggingNode || !t)
      return;
    const f = (b = g.dataTransfer) == null ? void 0 : b.getData("dragNodeId");
    if (f) {
      const y = l(v.id, f);
      if (f === v.id || y)
        return;
      i.dropType && x(f, v), s();
    }
  };
  function x(g, v) {
    const f = e.value.find((b) => b.id === g);
    if (f) {
      let b;
      const y = n(f), h = r(f);
      if (i.dropType === "dropInner") {
        b = {
          ...f,
          parentId: v.id,
          level: v.level + 1
        };
        const w = e.value.indexOf(v);
        e.value.splice(w + 1, 0, b), v.isLeaf = void 0;
        const _ = e.value.indexOf(f);
        e.value.splice(_, 1);
      } else if (i.dropType === "dropNext") {
        b = {
          ...f,
          parentId: v.parentId,
          level: v.level
        };
        const w = e.value.indexOf(v), _ = n(v, !0).length;
        e.value.splice(
          w + _ + 1,
          0,
          b
        );
        const O = e.value.indexOf(f);
        e.value.splice(O, 1);
      } else if (i.dropType === "dropPrev") {
        b = {
          ...f,
          parentId: v.parentId,
          level: v.level
        };
        const w = e.value.indexOf(v);
        e.value.splice(w, 0, b);
        const _ = e.value.indexOf(f);
        e.value.splice(_, 1);
      }
      i.dropType = "dropInner", y.forEach((w) => x(w.id, b)), h && n(h).length === 0 && (h.isLeaf = !0);
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
function Rt(t, { getNode: e, getIndex: n, getChildren: r }, { emit: i }) {
  const o = (c) => {
    const d = e(c);
    d && d.isLeaf === !1 && !d.childNodeCount && (d.loading = !0, i("lazy-load", c, a));
  }, a = (c) => {
    const d = e(c.node);
    if (d) {
      d.loading = !1;
      const u = A(
        Ce(c.treeItems, d.level)
      );
      l(d, u), s(d, u);
      const m = r(d);
      d.childNodeCount = m.length;
    }
  }, l = (c, d) => {
    d.value.forEach((u) => {
      u.level - 1 === c.level && !u.parentId && (u.parentId = c.id);
    });
  }, s = (c, d) => {
    const u = n(c);
    u && t.value.splice(u + 1, 0, ...d.value);
  };
  return {
    lazyLoadNodes: o
  };
}
function lt(t = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  for (let r = 0; r < t; r++)
    n += e[parseInt((Math.random() * e.length).toString())];
  return n;
}
function Bt(t, { getChildren: e, getIndex: n }) {
  return {
    append: (o, a) => {
      const l = e(o, !1), s = l[l.length - 1];
      let c = n(o) + 1;
      s && (c = n(s) + 1), o.expanded = !0, o.isLeaf = !1;
      const d = A({
        ...a,
        level: o.level + 1,
        parentId: o.id,
        isLeaf: !0
      });
      d.value.id === void 0 && (d.value.id = lt()), t.value.splice(c, 0, d.value);
    },
    remove: (o) => {
      const a = e(o).map((l) => l.id);
      t.value = t.value.filter(
        (l) => l.id !== o.id && !a.includes(l.id)
      );
    }
  };
}
function Dt(t, e, n, r) {
  const { lazyLoadNodes: i } = r;
  return {
    toggleNode: (a, l, s = !1) => {
      if (a.stopPropagation(), s)
        t.value.forEach((c) => {
          c.level === l.level && c.id !== l.id && (c.expanded = !1), c.id === l.id && (c.expanded = !c.expanded), c.expanded && i(c);
        });
      else {
        const c = t.value.find((d) => d.id === l.id);
        c && (c.expanded = !c.expanded, c.expanded && i(c));
      }
    }
  };
}
function qt(t, e, n) {
  const r = Ot(t), i = A(Ce(r)), o = It(i), a = [Dt, Nt, Bt], l = Rt(i, o, n), s = kt(e.draggable, i, o);
  return {
    ...a.reduce((d, u) => ({ ...d, ...u(i, o, n, l) }), {}),
    ...o,
    ...s,
    treeData: i
  };
}
const st = {
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
var we = {}, Vt = {
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
        var o = arguments[i];
        if (o) {
          var a = typeof o;
          if (a === "string" || a === "number")
            r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var l = n.apply(null, o);
              l && r.push(l);
            }
          } else if (a === "object") {
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
              r.push(o.toString());
              continue;
            }
            for (var s in o)
              e.call(o, s) && o[s] && r.push(s);
          }
        }
      }
      return r.join(" ");
    }
    t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
  })();
})(Vt);
const G = we, Mt = T({
  name: "SBaseSelectAll",
  props: Ae,
  setup(t) {
    return () => p("label", {
      class: G("s-base-select-all", "is-checked", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [p("span", {
      class: G("s-base-select-all__input", "is-checked", {
        "is-disabled": t.disabled
      })
    }, [p("span", {
      class: "s-base-select-all__inner"
    }, null), p("input", {
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
const jt = T({
  name: "SBaseSelectionBox",
  props: Ae,
  setup(t) {
    return () => p("label", {
      class: G("s-base-selection-box", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [p("span", {
      class: G("s-base-selection-box__input", {
        "is-disabled": t.disabled
      })
    }, [p("span", {
      class: "s-base-selection-box__inner"
    }, null), p("input", {
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
const zt = T({
  name: "SBaseSemiSelection",
  props: Ae,
  setup(t) {
    return () => p("label", {
      class: G("s-base-semi-selection", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [p("span", {
      class: G("s-base-semi-selection__input", "is-indeterminate", {
        "is-disabled": t.disabled
      }),
      tabindex: "0",
      role: "checkbox",
      "aria-checked": "mixed"
    }, [p("span", {
      class: "s-base-semi-selection__inner"
    }, null), p("input", {
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
}), $t = {
  ...st,
  treeNode: {
    type: Object,
    required: !0
  }
}, ke = 34, Re = 24, Ht = T({
  name: "STreeNode",
  props: $t,
  setup(t, {
    slots: e
  }) {
    const {
      lineable: n,
      checkable: r,
      treeNode: i,
      operable: o,
      draggable: a
    } = R(t), {
      toggleCheckNode: l,
      getChildrenExpanded: s,
      append: c,
      remove: d,
      onDragend: u,
      onDragleave: m,
      onDragover: x,
      onDragstart: P,
      onDrop: g
    } = U("TREE_UTILS"), v = A(!1), f = () => {
      v.value ? v.value = !1 : v.value = !0;
    };
    let b = {};
    a.value && (b = {
      draggable: !0,
      onDragend: (h) => u(h),
      onDragleave: (h) => m(h),
      onDragover: (h) => x(h),
      onDragstart: (h) => P(h, i.value),
      onDrop: (h) => g(h, i.value)
    });
    const y = () => p(W, null, [i.value.inChecked ? p(zt, {
      onClick: () => l(i.value),
      disabled: i.value.disabled
    }, null) : i.value.checked ? p(Mt, {
      onClick: () => l(i.value),
      disabled: i.value.disabled
    }, null) : p(jt, {
      onClick: () => l(i.value),
      disabled: i.value.disabled
    }, null)]);
    return () => {
      var h, w, _;
      return p("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${Re * (i.value.level - 1)}px`
        },
        onMouseenter: f,
        onMouseleave: f
      }, [!i.value.isLeaf && i.value.expanded && n.value && p("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${ke * s(i.value).length}px`,
          left: `${Re * (i.value.level - 1) + 9}px`,
          top: `${ke}px`
        }
      }, null), p("div", oe({
        class: "s-tree__node--content"
      }, b), [i.value.isLeaf ? p("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (h = e.icon) == null ? void 0 : h.call(e), r.value && y(), (w = e.content) == null ? void 0 : w.call(e), o.value && v.value && p("span", {
        class: "inline-flex ml-1"
      }, [p("svg", {
        onClick: () => {
          c(i.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [p("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), p("svg", {
        onClick: () => {
          d(i.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [p("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), i.value.loading && ((_ = e.loading) == null ? void 0 : _.call(e))])]);
    };
  }
}), Wt = (t, {
  emit: e
}) => p("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: t.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [p("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const Ut = {
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
const Yt = T({
  name: "SVirtualList",
  props: Ut,
  setup(t, {
    slots: e
  }) {
    const {
      data: n,
      itemHeight: r,
      component: i
    } = R(t), o = A(), a = A(0), l = A(0), s = A(0), c = F(() => Math.ceil(a.value / r.value)), d = F(() => n.value.slice(s.value, Math.min(s.value + c.value, n.value.length)));
    Te(() => {
      var m;
      a.value = (m = o.value) == null ? void 0 : m.clientHeight;
    });
    const u = (m) => {
      const {
        scrollTop: x
      } = m.target;
      s.value = Math.floor(x / r.value), l.value = x - x % r.value;
    };
    return () => p(i.value, {
      class: "s-virtual-list__container",
      ref: o,
      onScroll: u
    }, {
      default: () => [p("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${n.value.length * r.value}px`
        }
      }, null), p("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${l.value}px, 0)`
        }
      }, [d.value.map((m, x) => {
        var P;
        return (P = e.default) == null ? void 0 : P.call(e, {
          item: m,
          index: x
        });
      })])]
    });
  }
}), Be = T({
  name: "STree",
  props: st,
  emits: ["lazy-load", "check"],
  setup(t, e) {
    const {
      data: n,
      height: r,
      itemHeight: i,
      accordion: o
    } = R(t), {
      slots: a
    } = e, l = qt(n, t, e);
    return Y("TREE_UTILS", l), () => {
      const s = (c) => p(Ht, oe(t, {
        treeNode: c,
        onClick: o.value ? (d) => l.toggleNode(d, c, o.value) : ""
      }), {
        content: () => a.content ? a.content(c) : c.label,
        icon: () => a.icon ? a.icon({
          nodeData: c,
          toggleNode: l.toggleNode
        }) : p(Wt, {
          expanded: !!c.expanded,
          onClick: (d) => l.toggleNode(d, c, o.value)
        }, null),
        loading: () => a.loading ? a.loading({
          nodeData: l
        }) : p("span", {
          class: "ml-1"
        }, [J("loading...")])
      });
      return p("div", {
        class: "s-tree"
      }, [r != null && r.value ? p("div", {
        style: {
          height: `${r.value}px`
        }
      }, [p(Yt, {
        data: l.expandedTree.value,
        itemHeight: i.value
      }, {
        default: ({
          item: c
        }) => s(c)
      })]) : l.expandedTree.value.map((c) => s(c))]);
    };
  }
}), Xt = {
  install(t) {
    t.component(Be.name, Be);
  }
}, ct = {
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
function Kt(t = 1) {
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
const Jt = (t, e, n) => {
  const r = Array.from(Array(t).keys());
  if (t <= n)
    return r.slice(2, t);
  {
    const i = Math.ceil(n / 2);
    return e <= i ? r.slice(2, n) : e >= t - i + 1 ? r.slice(t - n + 2, t) : r.slice(e - i + 2, e + i - 1);
  }
}, Zt = ct, xe = T({
  name: "SPager",
  props: Zt,
  setup(t) {
    const {
      total: e,
      pageSize: n,
      pagerCount: r,
      hideOnSinglePage: i
    } = R(t), o = F(() => Math.ceil(e.value / n.value)), {
      pageIndex: a,
      setPageIndex: l,
      jumpPage: s,
      prevPage: c,
      nextPage: d
    } = Kt(), u = F(() => Jt(o.value, a.value, r.value));
    return {
      totalPage: o,
      pageIndex: a,
      setPageIndex: l,
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
      centerPages: o,
      hideOnSinglePage: a
    } = this;
    return p(W, null, [a && o.length >= 0 && p("ul", {
      class: "s-pager"
    }, [p("li", {
      onClick: () => r(1),
      class: {
        current: n === 1
      }
    }, [J("1")]), e > t && n > Math.ceil(t / 2) && p("li", {
      class: "more left",
      onClick: () => i(-5)
    }, [J("...")]), o.map((l) => p("li", {
      onClick: () => r(l),
      class: {
        current: n === l
      }
    }, [l])), e > t && n < e - Math.ceil(t / 2) + 1 && p("li", {
      class: "more right",
      onClick: () => i(5)
    }, [J("...")]), e > 1 && p("li", {
      onClick: () => r(e),
      class: {
        current: n === e
      }
    }, [e])])]);
  }
}), De = T({
  name: "SPagination",
  props: ct,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = A(), r = F(() => n.value ? n.value.pageIndex < 2 : !0), i = F(() => n.value ? n.value.pageIndex > n.value.totalPage - 1 : !0);
    return Te(() => {
      be(() => n.value.pageIndex, (o) => {
        e("update:modelValue", o);
      }), be(() => t.modelValue, (o) => {
        n.value.pageIndex = o;
      });
    }), () => p("div", {
      class: "s-pagination"
    }, [p("button", {
      disabled: r.value,
      onClick: () => n.value.prevPage()
    }, [J("上一页")]), p(xe, oe(t, {
      ref: n
    }), null), p("button", {
      disabled: i.value,
      onClick: () => n.value.nextPage()
    }, [J("下一页")])]);
  }
}), Gt = {
  install(t) {
    t.component(De.name, De), t.component(xe.name, xe);
  }
}, ut = Symbol("formContextToken"), Qt = {
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
const qe = T({
  name: "SForm",
  props: Qt,
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
    Y("LABEL_DATA", i);
    const o = /* @__PURE__ */ new Set(), a = (d) => o.add(d), l = (d) => o.delete(d);
    Y(ut, {
      model: t.model,
      rules: t.rules,
      addItem: a,
      removeItem: l
    });
    const s = (d) => {
      d.preventDefault(), n("submit");
    };
    return r({
      validate: (d) => {
        const u = [];
        o.forEach((m) => u.push(m.validate())), Promise.all(u).then(() => d(!0)).catch(() => d(!1));
      }
    }), () => {
      var d;
      return p("form", {
        class: "s-form",
        onSubmit: s
      }, [(d = e.default) == null ? void 0 : d.call(e)]);
    };
  }
}), en = {
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
function tn(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, ne(t, e);
}
function Pe(t) {
  return Pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pe(t);
}
function ne(t, e) {
  return ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ne(t, e);
}
function nn() {
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
function ue(t, e, n) {
  return nn() ? ue = Reflect.construct.bind() : ue = function(i, o, a) {
    var l = [null];
    l.push.apply(l, o);
    var s = Function.bind.apply(i, l), c = new s();
    return a && ne(c, a.prototype), c;
  }, ue.apply(null, arguments);
}
function rn(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function Se(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Se = function(r) {
    if (r === null || !rn(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, i);
    }
    function i() {
      return ue(r, arguments, Pe(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ne(i, r);
  }, Se(t);
}
var on = /%[sdj%]/g, dt = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (dt = function(e, n) {
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
  var i = 0, o = n.length;
  if (typeof t == "function")
    return t.apply(null, n);
  if (typeof t == "string") {
    var a = t.replace(on, function(l) {
      if (l === "%%")
        return "%";
      if (i >= o)
        return l;
      switch (l) {
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
          return l;
      }
    });
    return a;
  }
  return t;
}
function an(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function C(t, e) {
  return !!(t == null || e === "array" && Array.isArray(t) && !t.length || an(e) && typeof t == "string" && !t);
}
function ln(t, e, n) {
  var r = [], i = 0, o = t.length;
  function a(l) {
    r.push.apply(r, l || []), i++, i === o && n(r);
  }
  t.forEach(function(l) {
    e(l, a);
  });
}
function Ve(t, e, n) {
  var r = 0, i = t.length;
  function o(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var l = r;
    r = r + 1, l < i ? e(t[l], o) : n([]);
  }
  o([]);
}
function sn(t) {
  var e = [];
  return Object.keys(t).forEach(function(n) {
    e.push.apply(e, t[n] || []);
  }), e;
}
var Me = /* @__PURE__ */ function(t) {
  tn(e, t);
  function e(n, r) {
    var i;
    return i = t.call(this, "Async Validation Error") || this, i.errors = n, i.fields = r, i;
  }
  return e;
}(/* @__PURE__ */ Se(Error));
function cn(t, e, n, r, i) {
  if (e.first) {
    var o = new Promise(function(m, x) {
      var P = function(f) {
        return r(f), f.length ? x(new Me(f, _e(f))) : m(i);
      }, g = sn(t);
      Ve(g, n, P);
    });
    return o.catch(function(m) {
      return m;
    }), o;
  }
  var a = e.firstFields === !0 ? Object.keys(t) : e.firstFields || [], l = Object.keys(t), s = l.length, c = 0, d = [], u = new Promise(function(m, x) {
    var P = function(v) {
      if (d.push.apply(d, v), c++, c === s)
        return r(d), d.length ? x(new Me(d, _e(d))) : m(i);
    };
    l.length || (r(d), m(i)), l.forEach(function(g) {
      var v = t[g];
      a.indexOf(g) !== -1 ? Ve(v, n, P) : ln(v, n, P);
    });
  });
  return u.catch(function(m) {
    return m;
  }), u;
}
function un(t) {
  return !!(t && t.message !== void 0);
}
function dn(t, e) {
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
    return t.fullFields ? r = dn(e, t.fullFields) : r = e[n.field || t.fullField], un(n) ? (n.field = n.field || t.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || t.fullField
    };
  };
}
function ze(t, e) {
  if (e) {
    for (var n in e)
      if (e.hasOwnProperty(n)) {
        var r = e[n];
        typeof r == "object" && typeof t[n] == "object" ? t[n] = $({}, t[n], r) : t[n] = r;
      }
  }
  return t;
}
var ft = function(e, n, r, i, o, a) {
  e.required && (!r.hasOwnProperty(e.field) || C(n, a || e.type)) && i.push(L(o.messages.required, e.fullField));
}, fn = function(e, n, r, i, o) {
  (/^\s+$/.test(n) || n === "") && i.push(L(o.messages.whitespace, e.fullField));
}, se, pn = function() {
  if (se)
    return se;
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), a = new RegExp("^" + n + "$"), l = new RegExp("^" + i + "$"), s = function(h) {
    return h && h.exact ? o : new RegExp("(?:" + e(h) + n + e(h) + ")|(?:" + e(h) + i + e(h) + ")", "g");
  };
  s.v4 = function(y) {
    return y && y.exact ? a : new RegExp("" + e(y) + n + e(y), "g");
  }, s.v6 = function(y) {
    return y && y.exact ? l : new RegExp("" + e(y) + i + e(y), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", u = s.v4().source, m = s.v6().source, x = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", P = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", v = "(?::\\d{2,5})?", f = '(?:[/?#][^\\s"]*)?', b = "(?:" + c + "|www\\.)" + d + "(?:localhost|" + u + "|" + m + "|" + x + P + g + ")" + v + f;
  return se = new RegExp("(?:^" + b + "$)", "i"), se;
}, $e = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Q = {
  integer: function(e) {
    return Q.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return Q.number(e) && !Q.integer(e);
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
    return typeof e == "object" && !Q.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match($e.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(pn());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match($e.hex);
  }
}, gn = function(e, n, r, i, o) {
  if (e.required && n === void 0) {
    ft(e, n, r, i, o);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = e.type;
  a.indexOf(l) > -1 ? Q[l](n) || i.push(L(o.messages.types[l], e.fullField, e.type)) : l && typeof n !== e.type && i.push(L(o.messages.types[l], e.fullField, e.type));
}, mn = function(e, n, r, i, o) {
  var a = typeof e.len == "number", l = typeof e.min == "number", s = typeof e.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, u = null, m = typeof n == "number", x = typeof n == "string", P = Array.isArray(n);
  if (m ? u = "number" : x ? u = "string" : P && (u = "array"), !u)
    return !1;
  P && (d = n.length), x && (d = n.replace(c, "_").length), a ? d !== e.len && i.push(L(o.messages[u].len, e.fullField, e.len)) : l && !s && d < e.min ? i.push(L(o.messages[u].min, e.fullField, e.min)) : s && !l && d > e.max ? i.push(L(o.messages[u].max, e.fullField, e.max)) : l && s && (d < e.min || d > e.max) && i.push(L(o.messages[u].range, e.fullField, e.min, e.max));
}, K = "enum", vn = function(e, n, r, i, o) {
  e[K] = Array.isArray(e[K]) ? e[K] : [], e[K].indexOf(n) === -1 && i.push(L(o.messages[K], e.fullField, e[K].join(", ")));
}, hn = function(e, n, r, i, o) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(n) || i.push(L(o.messages.pattern.mismatch, e.fullField, n, e.pattern));
    else if (typeof e.pattern == "string") {
      var a = new RegExp(e.pattern);
      a.test(n) || i.push(L(o.messages.pattern.mismatch, e.fullField, n, e.pattern));
    }
  }
}, S = {
  required: ft,
  whitespace: fn,
  type: gn,
  range: mn,
  enum: vn,
  pattern: hn
}, yn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (C(n, "string") && !e.required)
      return r();
    S.required(e, n, i, a, o, "string"), C(n, "string") || (S.type(e, n, i, a, o), S.range(e, n, i, a, o), S.pattern(e, n, i, a, o), e.whitespace === !0 && S.whitespace(e, n, i, a, o));
  }
  r(a);
}, bn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (C(n) && !e.required)
      return r();
    S.required(e, n, i, a, o), n !== void 0 && S.type(e, n, i, a, o);
  }
  r(a);
}, wn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (n === "" && (n = void 0), C(n) && !e.required)
      return r();
    S.required(e, n, i, a, o), n !== void 0 && (S.type(e, n, i, a, o), S.range(e, n, i, a, o));
  }
  r(a);
}, xn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (C(n) && !e.required)
      return r();
    S.required(e, n, i, a, o), n !== void 0 && S.type(e, n, i, a, o);
  }
  r(a);
}, Pn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (C(n) && !e.required)
      return r();
    S.required(e, n, i, a, o), C(n) || S.type(e, n, i, a, o);
  }
  r(a);
}, Sn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (C(n) && !e.required)
      return r();
    S.required(e, n, i, a, o), n !== void 0 && (S.type(e, n, i, a, o), S.range(e, n, i, a, o));
  }
  r(a);
}, _n = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (C(n) && !e.required)
      return r();
    S.required(e, n, i, a, o), n !== void 0 && (S.type(e, n, i, a, o), S.range(e, n, i, a, o));
  }
  r(a);
}, On = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (n == null && !e.required)
      return r();
    S.required(e, n, i, a, o, "array"), n != null && (S.type(e, n, i, a, o), S.range(e, n, i, a, o));
  }
  r(a);
}, En = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (C(n) && !e.required)
      return r();
    S.required(e, n, i, a, o), n !== void 0 && S.type(e, n, i, a, o);
  }
  r(a);
}, Tn = "enum", Cn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (C(n) && !e.required)
      return r();
    S.required(e, n, i, a, o), n !== void 0 && S[Tn](e, n, i, a, o);
  }
  r(a);
}, An = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (C(n, "string") && !e.required)
      return r();
    S.required(e, n, i, a, o), C(n, "string") || S.pattern(e, n, i, a, o);
  }
  r(a);
}, Ln = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (C(n, "date") && !e.required)
      return r();
    if (S.required(e, n, i, a, o), !C(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), S.type(e, s, i, a, o), s && S.range(e, s.getTime(), i, a, o);
    }
  }
  r(a);
}, Fn = function(e, n, r, i, o) {
  var a = [], l = Array.isArray(n) ? "array" : typeof n;
  S.required(e, n, i, a, o, l), r(a);
}, ye = function(e, n, r, i, o) {
  var a = e.type, l = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (C(n, a) && !e.required)
      return r();
    S.required(e, n, i, l, o, a), C(n, a) || S.type(e, n, i, l, o);
  }
  r(l);
}, Nn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (C(n) && !e.required)
      return r();
    S.required(e, n, i, a, o);
  }
  r(a);
}, ee = {
  string: yn,
  method: bn,
  number: wn,
  boolean: xn,
  regexp: Pn,
  integer: Sn,
  float: _n,
  array: On,
  object: En,
  enum: Cn,
  pattern: An,
  date: Ln,
  url: ye,
  hex: ye,
  email: ye,
  required: Fn,
  any: Nn
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
var Ee = Oe(), ae = /* @__PURE__ */ function() {
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
    this.rules = {}, Object.keys(r).forEach(function(o) {
      var a = r[o];
      i.rules[o] = Array.isArray(a) ? a : [a];
    });
  }, e.messages = function(r) {
    return r && (this._messages = ze(Oe(), r)), this._messages;
  }, e.validate = function(r, i, o) {
    var a = this;
    i === void 0 && (i = {}), o === void 0 && (o = function() {
    });
    var l = r, s = i, c = o;
    if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, l), Promise.resolve(l);
    function d(g) {
      var v = [], f = {};
      function b(h) {
        if (Array.isArray(h)) {
          var w;
          v = (w = v).concat.apply(w, h);
        } else
          v.push(h);
      }
      for (var y = 0; y < g.length; y++)
        b(g[y]);
      v.length ? (f = _e(v), c(v, f)) : c(null, l);
    }
    if (s.messages) {
      var u = this.messages();
      u === Ee && (u = Oe()), ze(u, s.messages), s.messages = u;
    } else
      s.messages = this.messages();
    var m = {}, x = s.keys || Object.keys(this.rules);
    x.forEach(function(g) {
      var v = a.rules[g], f = l[g];
      v.forEach(function(b) {
        var y = b;
        typeof y.transform == "function" && (l === r && (l = $({}, l)), f = l[g] = y.transform(f)), typeof y == "function" ? y = {
          validator: y
        } : y = $({}, y), y.validator = a.getValidationMethod(y), y.validator && (y.field = g, y.fullField = y.fullField || g, y.type = a.getType(y), m[g] = m[g] || [], m[g].push({
          rule: y,
          value: f,
          source: l,
          field: g
        }));
      });
    });
    var P = {};
    return cn(m, s, function(g, v) {
      var f = g.rule, b = (f.type === "object" || f.type === "array") && (typeof f.fields == "object" || typeof f.defaultField == "object");
      b = b && (f.required || !f.required && g.value), f.field = g.field;
      function y(_, O) {
        return $({}, O, {
          fullField: f.fullField + "." + _,
          fullFields: f.fullFields ? [].concat(f.fullFields, [_]) : [_]
        });
      }
      function h(_) {
        _ === void 0 && (_ = []);
        var O = Array.isArray(_) ? _ : [_];
        !s.suppressWarning && O.length && t.warning("async-validator:", O), O.length && f.message !== void 0 && (O = [].concat(f.message));
        var E = O.map(je(f, l));
        if (s.first && E.length)
          return P[f.field] = 1, v(E);
        if (!b)
          v(E);
        else {
          if (f.required && !g.value)
            return f.message !== void 0 ? E = [].concat(f.message).map(je(f, l)) : s.error && (E = [s.error(f, L(s.messages.required, f.field))]), v(E);
          var N = {};
          f.defaultField && Object.keys(g.value).map(function(B) {
            N[B] = f.defaultField;
          }), N = $({}, N, g.rule.fields);
          var I = {};
          Object.keys(N).forEach(function(B) {
            var D = N[B], St = Array.isArray(D) ? D : [D];
            I[B] = St.map(y.bind(null, B));
          });
          var X = new t(I);
          X.messages(s.messages), g.rule.options && (g.rule.options.messages = s.messages, g.rule.options.error = s.error), X.validate(g.value, g.rule.options || s, function(B) {
            var D = [];
            E && E.length && D.push.apply(D, E), B && B.length && D.push.apply(D, B), v(D.length ? D : null);
          });
        }
      }
      var w;
      if (f.asyncValidator)
        w = f.asyncValidator(f, g.value, h, g.source, s);
      else if (f.validator) {
        try {
          w = f.validator(f, g.value, h, g.source, s);
        } catch (_) {
          console.error == null || console.error(_), s.suppressValidatorError || setTimeout(function() {
            throw _;
          }, 0), h(_.message);
        }
        w === !0 ? h() : w === !1 ? h(typeof f.message == "function" ? f.message(f.fullField || f.field) : f.message || (f.fullField || f.field) + " fails") : w instanceof Array ? h(w) : w instanceof Error && h(w.message);
      }
      w && w.then && w.then(function() {
        return h();
      }, function(_) {
        return h(_);
      });
    }, function(g) {
      d(g);
    }, l);
  }, e.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !ee.hasOwnProperty(r.type))
      throw new Error(L("Unknown rule type %s", r.type));
    return r.type || "string";
  }, e.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var i = Object.keys(r), o = i.indexOf("message");
    return o !== -1 && i.splice(o, 1), i.length === 1 && i[0] === "required" ? ee.required : ee[this.getType(r)] || void 0;
  }, t;
}();
ae.register = function(e, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  ee[e] = n;
};
ae.warning = dt;
ae.messages = Ee;
ae.validators = ee;
const He = T({
  name: "SFormItem",
  props: en,
  setup(t, {
    slots: e
  }) {
    const {
      error: n
    } = R(t), r = U("LABEL_DATA"), i = F(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": r.value.layout === "horizontal",
      "s-form__item--vertical": r.value.layout === "vertical"
    })), o = F(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": r.value.layout === "vertical",
      [`s-form__label--${r.value.labelAlign}`]: r.value.layout === "horizontal",
      [`s-form__label--${r.value.labelSize}`]: r.value.layout === "horizontal"
    })), a = U(ut), l = A(!1), s = A(""), d = {
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
        const m = a.model[t.prop];
        return new ae({
          [t.prop]: u
        }).validate({
          [t.prop]: m
        }, (P) => {
          P ? (l.value = !0, s.value = P[0].message || "校验错误") : (l.value = !1, s.value = "");
        });
      }
    };
    return Y("FORM_ITEM_CTX", d), Te(() => {
      t.prop && (a == null || a.addItem(d));
    }), at(() => {
      t.prop && (a == null || a.removeItem(d));
    }), () => {
      var u;
      return p("div", {
        class: i.value
      }, [p("span", {
        class: o.value
      }, [t.label]), p("div", null, [(u = e.default) == null ? void 0 : u.call(e)]), n.value && p("div", {
        class: "error-message"
      }, [n.value]), l.value && p("div", {
        class: "error-message"
      }, [s.value])]);
    };
  }
}), In = {
  install(t) {
    t.component(qe.name, qe), t.component(He.name, He);
  }
}, kn = {
  modelValue: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  }
};
const We = T({
  name: "SInput",
  props: kn,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = U("FORM_ITEM_CTX"), r = (i) => {
      const o = i.target.value;
      e("update:modelValue", o), n.validate();
    };
    return () => p("div", {
      class: "s-input"
    }, [p("input", {
      class: "s-input__input",
      value: t.modelValue,
      onInput: r,
      type: t.type
    }, null)]);
  }
}), Rn = {
  install(t) {
    t.component(We.name, We);
  }
}, Bn = {
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
const Dn = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
const qn = T({
  name: "SBaseModal",
  props: Dn,
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
      return p("div", null, [r.value && p("div", {
        class: "s-base-modal"
      }, [p("div", {
        class: "s-base-modal__mask",
        onClick: () => {
          n("update:modelValue", !1);
        }
      }, null), (i = e.default) == null ? void 0 : i.call(e)])]);
    };
  }
}), Ue = T({
  name: "SModal",
  props: Bn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      modelValue: r,
      title: i,
      showClose: o,
      width: a,
      center: l,
      alignCenter: s,
      backgroundColor: c,
      top: d
    } = R(t), u = s.value ? {
      marginTop: 0,
      top: "50%",
      transform: "translateY(-50%)"
    } : null, m = F(() => typeof d.value == "number" ? `${d.value}px` : d.value);
    return () => p(qn, {
      class: "s-modal",
      modelValue: r.value,
      "onUpdate:modelValue": () => {
        n("update:modelValue");
      }
    }, {
      default: () => {
        var x, P, g;
        return [p("div", {
          class: "s-modal__container",
          style: {
            width: a.value,
            ...u,
            marginTop: m.value,
            backgroundColor: c.value
          }
        }, [e.header ? (x = e.header) == null ? void 0 : x.call(e, {
          close: () => {
            n("update:modelValue", !1);
          }
        }) : p("div", {
          class: "s-modal__header",
          style: {
            textAlign: l.value ? "center" : "left"
          }
        }, [i.value, o.value && p("svg", {
          onClick: () => {
            n("update:modelValue", !1);
          },
          class: "s-modal__close",
          viewBox: "0 0 1024 1024",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg"
        }, [p("path", {
          fill: "currentColor",
          d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
        }, null)])]), p("div", {
          className: "s-modal__body"
        }, [(P = e.default) == null ? void 0 : P.call(e)]), p("div", {
          className: "s-modal__footer"
        }, [(g = e.footer) == null ? void 0 : g.call(e)])])];
      }
    });
  }
}), Vn = {
  install(t) {
    t.component(Ue.name, Ue);
  }
}, Mn = {
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
const Ye = T({
  name: "STabs",
  props: Mn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const n = A([]);
    Y("active-data", n);
    const r = A(t.modelValue);
    Y("active-tab", r);
    const i = (l) => {
      r.value = l;
    }, o = (l, s) => {
      const c = n.value.findIndex((d) => d.id === s);
      n.value.splice(c, 1), l.stopPropagation(), n.value.length === c ? i(n.value[c - 1].id) : i(n.value[c].id);
    }, a = () => {
      const l = lt();
      n.value.push({
        id: l,
        type: "random",
        title: `Tab${l}`,
        content: `Tab${l} Content`
      }), r.value = l;
    };
    return () => {
      var l;
      return p("div", {
        class: "s-tabs"
      }, [p("ul", {
        class: "s-tabs__nav"
      }, [n.value.map((s) => p("li", {
        onClick: () => i(s.id),
        class: s.id === r.value ? "active" : ""
      }, [s.title, t.closable && p("svg", {
        onClick: (c) => o(c, s.id),
        style: "margin-left: 8px;",
        viewBox: "0 0 1024 1024",
        width: "12",
        height: "12"
      }, [p("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])])), t.addable && p("li", null, [p("svg", {
        onClick: a,
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14"
      }, [p("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)])])]), (l = e.default) == null ? void 0 : l.call(e), n.value.filter((s) => s.type === "random").map((s) => p("div", {
        class: "s-tab"
      }, [s.id === r.value && s.content]))]);
    };
  }
}), jn = {
  id: {
    type: String,
    required: !0
  },
  title: {
    type: String,
    required: !0
  }
};
const Xe = T({
  name: "STab",
  props: jn,
  setup(t, {
    slots: e
  }) {
    const n = U("active-tab");
    return U("active-data").value.push({
      id: t.id,
      title: t.title
    }), () => {
      var i;
      return p(W, null, [t.id === n.value && p("div", {
        class: "s-tab"
      }, [(i = e.default) == null ? void 0 : i.call(e)])]);
    };
  }
}), zn = {
  install(t) {
    t.component(Ye.name, Ye), t.component(Xe.name, Xe);
  }
}, $n = {
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
const Hn = {
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
function Le(t) {
  return t === "y" ? "height" : "width";
}
function le(t) {
  return t.split("-")[0];
}
function ge(t) {
  return ["top", "bottom"].includes(le(t)) ? "x" : "y";
}
function Ke(t, e, n) {
  let {
    reference: r,
    floating: i
  } = t;
  const o = r.x + r.width / 2 - i.width / 2, a = r.y + r.height / 2 - i.height / 2, l = ge(e), s = Le(l), c = r[s] / 2 - i[s] / 2, d = le(e), u = l === "x";
  let m;
  switch (d) {
    case "top":
      m = {
        x: o,
        y: r.y - i.height
      };
      break;
    case "bottom":
      m = {
        x: o,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: a
      };
      break;
    case "left":
      m = {
        x: r.x - i.width,
        y: a
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (H(e)) {
    case "start":
      m[l] -= c * (n && u ? -1 : 1);
      break;
    case "end":
      m[l] += c * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const Wn = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: a
  } = n, l = o.filter(Boolean), s = await (a.isRTL == null ? void 0 : a.isRTL(e));
  if (process.env.NODE_ENV !== "production") {
    if (a == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), l.filter((g) => {
      let {
        name: v
      } = g;
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
    x: d,
    y: u
  } = Ke(c, r, s), m = r, x = {}, P = 0;
  for (let g = 0; g < l.length; g++) {
    const {
      name: v,
      fn: f
    } = l[g], {
      x: b,
      y,
      data: h,
      reset: w
    } = await f({
      x: d,
      y: u,
      initialPlacement: r,
      placement: m,
      strategy: i,
      middlewareData: x,
      rects: c,
      platform: a,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (d = b ?? d, u = y ?? u, x = {
      ...x,
      [v]: {
        ...x[v],
        ...h
      }
    }, process.env.NODE_ENV !== "production" && P > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), w && P <= 50) {
      P++, typeof w == "object" && (w.placement && (m = w.placement), w.rects && (c = w.rects === !0 ? await a.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : w.rects), {
        x: d,
        y: u
      } = Ke(c, m, s)), g = -1;
      continue;
    }
  }
  return {
    x: d,
    y: u,
    placement: m,
    strategy: i,
    middlewareData: x
  };
};
function Un(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function pt(t) {
  return typeof t != "number" ? Un(t) : {
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
async function Yn(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: i,
    platform: o,
    rects: a,
    elements: l,
    strategy: s
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: m = !1,
    padding: x = 0
  } = e, P = pt(x), v = l[m ? u === "floating" ? "reference" : "floating" : u], f = fe(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(v))) == null || n ? v : v.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: s
  })), b = u === "floating" ? {
    ...a.floating,
    x: r,
    y: i
  } : a.reference, y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), h = await (o.isElement == null ? void 0 : o.isElement(y)) ? await (o.getScale == null ? void 0 : o.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = fe(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: y,
    strategy: s
  }) : b);
  return process.env.NODE_ENV, {
    top: (f.top - w.top + P.top) / h.y,
    bottom: (w.bottom - f.bottom + P.bottom) / h.y,
    left: (f.left - w.left + P.left) / h.x,
    right: (w.right - f.right + P.right) / h.x
  };
}
const Xn = Math.min, Kn = Math.max;
function Jn(t, e, n) {
  return Kn(t, Xn(e, n));
}
const Zn = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: r = 0
    } = t || {}, {
      x: i,
      y: o,
      placement: a,
      rects: l,
      platform: s
    } = e;
    if (n == null)
      return process.env.NODE_ENV !== "production" && console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const c = pt(r), d = {
      x: i,
      y: o
    }, u = ge(a), m = Le(u), x = await s.getDimensions(n), P = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", v = l.reference[m] + l.reference[u] - d[u] - l.floating[m], f = d[u] - l.reference[u], b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(n));
    let y = b ? u === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0;
    y === 0 && (y = l.floating[m]);
    const h = v / 2 - f / 2, w = c[P], _ = y - x[m] - c[g], O = y / 2 - x[m] / 2 + h, E = Jn(w, O, _), I = H(a) != null && O != E && l.reference[m] / 2 - (O < w ? c[P] : c[g]) - x[m] / 2 < 0 ? O < w ? w - O : _ - O : 0;
    return {
      [u]: d[u] - I,
      data: {
        [u]: E,
        centerOffset: O - E
      }
    };
  }
}), Gn = ["top", "right", "bottom", "left"], Je = /* @__PURE__ */ Gn.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []), Qn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ze(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Qn[e]);
}
function er(t, e, n) {
  n === void 0 && (n = !1);
  const r = H(t), i = ge(t), o = Le(i);
  let a = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (a = Ze(a)), {
    main: a,
    cross: Ze(a)
  };
}
const tr = {
  start: "end",
  end: "start"
};
function nr(t) {
  return t.replace(/start|end/g, (e) => tr[e]);
}
function rr(t, e, n) {
  return (t ? [...n.filter((i) => H(i) === t), ...n.filter((i) => H(i) !== t)] : n.filter((i) => le(i) === i)).filter((i) => t ? H(i) === t || (e ? nr(i) !== i : !1) : !0);
}
const ir = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, r, i;
      const {
        rects: o,
        middlewareData: a,
        placement: l,
        platform: s,
        elements: c
      } = e, {
        alignment: d,
        allowedPlacements: u = Je,
        autoAlignment: m = !0,
        ...x
      } = t, P = d !== void 0 || u === Je ? rr(d || null, m, u) : u, g = await Yn(e, x), v = ((n = a.autoPlacement) == null ? void 0 : n.index) || 0, f = P[v];
      if (f == null)
        return {};
      const {
        main: b,
        cross: y
      } = er(f, o, await (s.isRTL == null ? void 0 : s.isRTL(c.floating)));
      if (l !== f)
        return {
          reset: {
            placement: P[0]
          }
        };
      const h = [g[le(f)], g[b], g[y]], w = [...((r = a.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: f,
        overflows: h
      }], _ = P[v + 1];
      if (_)
        return {
          data: {
            index: v + 1,
            overflows: w
          },
          reset: {
            placement: _
          }
        };
      const O = w.slice().sort((I, X) => I.overflows[0] - X.overflows[0]), N = ((i = O.find((I) => {
        let {
          overflows: X
        } = I;
        return X.every((B) => B <= 0);
      })) == null ? void 0 : i.placement) || O[0].placement;
      return N !== l ? {
        data: {
          index: v + 1,
          overflows: w
        },
        reset: {
          placement: N
        }
      } : {};
    }
  };
};
async function or(t, e) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = t, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), a = le(n), l = H(n), s = ge(n) === "x", c = ["left", "top"].includes(a) ? -1 : 1, d = o && s ? -1 : 1, u = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: m,
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
  return l && typeof P == "number" && (x = l === "end" ? P * -1 : P), s ? {
    x: x * d,
    y: m * c
  } : {
    x: m * c,
    y: x * d
  };
}
const ar = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, i = await or(e, t);
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
function q(t) {
  return k(t).getComputedStyle(t);
}
function M(t) {
  return mt(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ce;
function gt() {
  if (ce)
    return ce;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ce = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ce) : navigator.userAgent;
}
function V(t) {
  return t instanceof k(t).HTMLElement;
}
function j(t) {
  return t instanceof k(t).Element;
}
function mt(t) {
  return t instanceof k(t).Node;
}
function Ge(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = k(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function me(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: i
  } = q(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(i);
}
function lr(t) {
  return ["table", "td", "th"].includes(M(t));
}
function Fe(t) {
  const e = /firefox/i.test(gt()), n = q(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    (i) => {
      const o = n.contain;
      return o != null ? o.includes(i) : !1;
    }
  );
}
function vt() {
  return !/^((?!chrome|android).)*safari/i.test(gt());
}
function Ne(t) {
  return ["html", "body", "#document"].includes(M(t));
}
const Qe = Math.min, te = Math.max, pe = Math.round;
function ht(t) {
  const e = q(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const i = t.offsetWidth, o = t.offsetHeight, a = pe(n) !== i || pe(r) !== o;
  return a && (n = i, r = o), {
    width: n,
    height: r,
    fallback: a
  };
}
function yt(t) {
  return j(t) ? t : t.contextElement;
}
const bt = {
  x: 1,
  y: 1
};
function Z(t) {
  const e = yt(t);
  if (!V(e))
    return bt;
  const n = e.getBoundingClientRect(), {
    width: r,
    height: i,
    fallback: o
  } = ht(e);
  let a = (o ? pe(n.width) : n.width) / r, l = (o ? pe(n.height) : n.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: a,
    y: l
  };
}
function re(t, e, n, r) {
  var i, o;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const a = t.getBoundingClientRect(), l = yt(t);
  let s = bt;
  e && (r ? j(r) && (s = Z(r)) : s = Z(t));
  const c = l ? k(l) : window, d = !vt() && n;
  let u = (a.left + (d && ((i = c.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / s.x, m = (a.top + (d && ((o = c.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / s.y, x = a.width / s.x, P = a.height / s.y;
  if (l) {
    const g = k(l), v = r && j(r) ? k(r) : r;
    let f = g.frameElement;
    for (; f && r && v !== g; ) {
      const b = Z(f), y = f.getBoundingClientRect(), h = getComputedStyle(f);
      y.x += (f.clientLeft + parseFloat(h.paddingLeft)) * b.x, y.y += (f.clientTop + parseFloat(h.paddingTop)) * b.y, u *= b.x, m *= b.y, x *= b.x, P *= b.y, u += y.x, m += y.y, f = k(f).frameElement;
    }
  }
  return {
    width: x,
    height: P,
    top: m,
    right: u + x,
    bottom: m + P,
    left: u,
    x: u,
    y: m
  };
}
function z(t) {
  return ((mt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ve(t) {
  return j(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function wt(t) {
  return re(z(t)).left + ve(t).scrollLeft;
}
function sr(t, e, n) {
  const r = V(e), i = z(e), o = re(t, !0, n === "fixed", e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((M(e) !== "body" || me(i)) && (a = ve(e)), V(e)) {
      const s = re(e, !0);
      l.x = s.x + e.clientLeft, l.y = s.y + e.clientTop;
    } else
      i && (l.x = wt(i));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function ie(t) {
  if (M(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (Ge(t) ? t.host : null) || z(t);
  return Ge(e) ? e.host : e;
}
function et(t) {
  return !V(t) || q(t).position === "fixed" ? null : t.offsetParent;
}
function cr(t) {
  let e = ie(t);
  for (; V(e) && !Ne(e); ) {
    if (Fe(e))
      return e;
    e = ie(e);
  }
  return null;
}
function tt(t) {
  const e = k(t);
  let n = et(t);
  for (; n && lr(n) && q(n).position === "static"; )
    n = et(n);
  return n && (M(n) === "html" || M(n) === "body" && q(n).position === "static" && !Fe(n)) ? e : n || cr(t) || e;
}
function ur(t) {
  return ht(t);
}
function dr(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const i = V(n), o = z(n);
  if (n === o)
    return e;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 1,
    y: 1
  };
  const s = {
    x: 0,
    y: 0
  };
  if ((i || !i && r !== "fixed") && ((M(n) !== "body" || me(o)) && (a = ve(n)), V(n))) {
    const c = re(n);
    l = Z(n), s.x = c.x + n.clientLeft, s.y = c.y + n.clientTop;
  }
  return {
    width: e.width * l.x,
    height: e.height * l.y,
    x: e.x * l.x - a.scrollLeft * l.x + s.x,
    y: e.y * l.y - a.scrollTop * l.y + s.y
  };
}
function fr(t, e) {
  const n = k(t), r = z(t), i = n.visualViewport;
  let o = r.clientWidth, a = r.clientHeight, l = 0, s = 0;
  if (i) {
    o = i.width, a = i.height;
    const c = vt();
    (c || !c && e === "fixed") && (l = i.offsetLeft, s = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: l,
    y: s
  };
}
function pr(t) {
  var e;
  const n = z(t), r = ve(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = te(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = te(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let l = -r.scrollLeft + wt(t);
  const s = -r.scrollTop;
  return q(i || n).direction === "rtl" && (l += te(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: l,
    y: s
  };
}
function xt(t) {
  const e = ie(t);
  return Ne(e) ? t.ownerDocument.body : V(e) && me(e) ? e : xt(e);
}
function Pt(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = xt(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = k(r);
  return i ? e.concat(o, o.visualViewport || [], me(r) ? r : []) : e.concat(r, Pt(r));
}
function gr(t, e) {
  const n = re(t, !0, e === "fixed"), r = n.top + t.clientTop, i = n.left + t.clientLeft, o = V(t) ? Z(t) : {
    x: 1,
    y: 1
  }, a = t.clientWidth * o.x, l = t.clientHeight * o.y, s = i * o.x, c = r * o.y;
  return {
    top: c,
    left: s,
    right: s + a,
    bottom: c + l,
    x: s,
    y: c,
    width: a,
    height: l
  };
}
function nt(t, e, n) {
  return e === "viewport" ? fe(fr(t, n)) : j(e) ? gr(e, n) : fe(pr(z(t)));
}
function mr(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = Pt(t).filter((l) => j(l) && M(l) !== "body"), i = null;
  const o = q(t).position === "fixed";
  let a = o ? ie(t) : t;
  for (; j(a) && !Ne(a); ) {
    const l = q(a), s = Fe(a);
    (o ? !s && !i : !s && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? r = r.filter((d) => d !== a) : i = l, a = ie(a);
  }
  return e.set(t, r), r;
}
function vr(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = t;
  const a = [...n === "clippingAncestors" ? mr(e, this._c) : [].concat(n), r], l = a[0], s = a.reduce((c, d) => {
    const u = nt(e, d, i);
    return c.top = te(u.top, c.top), c.right = Qe(u.right, c.right), c.bottom = Qe(u.bottom, c.bottom), c.left = te(u.left, c.left), c;
  }, nt(e, l, i));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
const hr = {
  getClippingRect: vr,
  convertOffsetParentRelativeRectToViewportRelativeRect: dr,
  isElement: j,
  getDimensions: ur,
  getOffsetParent: tt,
  getDocumentElement: z,
  getScale: Z,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: r
    } = t;
    const i = this.getOffsetParent || tt, o = this.getDimensions;
    return {
      reference: sr(e, await i(n), r),
      floating: {
        x: 0,
        y: 0,
        ...await o(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => q(t).direction === "rtl"
}, yr = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: hr,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return Wn(t, e, {
    ...i,
    platform: o
  });
};
const br = T({
  name: "SBasePopover",
  props: Hn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    attrs: n
  }) {
    const {
      host: r,
      modelValue: i,
      showArrow: o,
      placement: a
    } = R(t), l = A(), s = A(), c = () => {
      const u = [];
      o.value && (u.push(ar(8)), u.push(Zn({
        element: l.value
      }))), a.value || u.push(ir()), yr(r.value, s.value, {
        middleware: u,
        placement: a.value || "bottom"
      }).then(({
        x: m,
        y: x,
        middlewareData: P,
        placement: g
      }) => {
        if (Object.assign(s.value.style, {
          left: `${m}px`,
          top: `${x}px`
        }), o.value) {
          const {
            x: v,
            y: f
          } = P.arrow, b = g.split("-")[0], y = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[b], h = ["top", "right", "bottom", "left"], w = h.indexOf(b) - 1, _ = h[w < 0 ? w + 4 : w];
          Object.assign(l.value.style, {
            left: `${v}px`,
            top: `${f}px`,
            [y]: "-4px",
            [`border-${b}-color`]: "transparent",
            [`border-${_}-color`]: "transparent"
          });
        }
      });
    }, d = new MutationObserver(() => c());
    return be(i, (u) => {
      u ? (Et(c), r.value && d.observe(r.value, {
        attributes: !0
      }), window.addEventListener("resize", c), window.addEventListener("scroll", c)) : (d.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c));
    }, {
      immediate: !0
    }), at(() => {
      d.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c);
    }), () => {
      var u;
      return p(W, null, [i.value && p("div", oe({
        ref: s,
        class: "s-base-popover"
      }, n), [(u = e.default) == null ? void 0 : u.call(e), o.value && p("div", {
        class: "s-base-popover__arrow",
        ref: l
      }, null)])]);
    };
  }
}), rt = T({
  name: "SPopover",
  props: $n,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const {
      modelValue: n,
      title: r
    } = R(t);
    return () => p(W, null, [n.value && p(br, oe({
      class: "s-popover"
    }, t), {
      default: () => {
        var i;
        return [p("h4", {
          class: "s-popover__title"
        }, [r.value]), (i = e.default) == null ? void 0 : i.call(e)];
      }
    })]);
  }
}), wr = {
  install(t) {
    t.component(rt.name, rt);
  }
}, xr = {
  data: {
    type: Array,
    default: () => []
  }
};
const it = T({
  name: "STable",
  props: xr,
  setup(t, {
    slots: e
  }) {
    const {
      data: n
    } = R(t), r = A([]);
    return Y("column-data", r), () => {
      var i;
      return p("table", {
        class: "s-table"
      }, [p("thead", null, [p("tr", null, [(i = e.default) == null ? void 0 : i.call(e)])]), p("tbody", null, [n.value.map((o) => p("tr", null, [r.value.map((a, l) => {
        var c, d, u;
        const s = (c = e.default) == null ? void 0 : c.call(e)[l];
        return s != null && s.children ? p("td", null, [(u = (d = s == null ? void 0 : s.children).default) == null ? void 0 : u.call(d, o)]) : p("td", null, [a.prop ? o[a.prop] : ""]);
      })]))])]);
    };
  }
}), Pr = {
  prop: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  }
};
const ot = T({
  name: "STableColumn",
  props: Pr,
  setup(t) {
    const {
      prop: e,
      title: n
    } = R(t);
    return U("column-data").value.push({
      prop: e.value,
      title: n.value
    }), () => p("th", {
      class: "s-table-column"
    }, [n.value]);
  }
}), Sr = {
  install(t) {
    t.component(it.name, it), t.component(ot.name, ot);
  }
}, _r = [
  Ft,
  Xt,
  Gt,
  In,
  Rn,
  Vn,
  Lt,
  zn,
  wr,
  Sr
], Er = {
  version: "0.0.1",
  install(t) {
    _r.forEach((e) => t.use(e));
  }
};
export {
  Ie as Button,
  qe as Form,
  de as Icon,
  We as Input,
  Ue as Modal,
  De as Pagination,
  rt as Popover,
  Xe as Tab,
  it as Table,
  ot as TableColumn,
  Ye as Tabs,
  Be as Tree,
  Er as default
};
