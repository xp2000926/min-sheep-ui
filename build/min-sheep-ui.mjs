import { defineComponent as C, computed as L, createVNode as p, toRefs as R, Fragment as Y, reactive as Ct, ref as T, unref as Tt, inject as V, mergeProps as oe, onMounted as Ce, provide as M, createTextVNode as J, watch as G, onUnmounted as ot, nextTick as lt, withDirectives as st, vModelCheckbox as ct } from "vue";
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
    var r, i, o, l, a, s = function(u, m) {
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
    }, document.addEventListener("DOMContentLoaded", i, !1)) : document.attachEvent && (o = r, l = t.document, a = !1, d(), l.onreadystatechange = function() {
      l.readyState == "complete" && (l.onreadystatechange = null, c());
    });
  }
  function c() {
    a || (a = !0, o());
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
const fe = C({
  name: "SIcon",
  props: kt,
  setup(t) {
    const e = L(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = p("img", {
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
}), Lt = (t) => {
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
}, Ft = {
  install(t) {
    t.component(fe.name, fe), t.component("ArrowDownIcon", Lt);
  }
};
const Ne = C({
  name: "SButton",
  props: At,
  setup(t, {
    slots: e
  }) {
    const {
      type: n,
      size: r,
      disabled: i,
      block: o,
      round: l,
      plain: a,
      circle: s,
      icon: c,
      iconSvg: d
    } = R(t), u = o.value ? "s-btn--block" : "", m = l.value ? "s-btn--round" : "", b = a.value ? "s-btn--plain" : "", w = s.value ? "s-btn--circle" : "", g = r.value === "mini" ? "18" : r.value === "small" ? "22" : r.value === "medium" ? "26" : "30";
    return () => p("button", {
      disabled: i.value,
      class: `s-btn s-btn--${n.value} s-btn--${r.value} ${u} ${m} ${b} ${w}`
    }, [e.default && c.value || e.default && d.value ? p(Y, null, [p(fe, {
      name: c.value,
      component: d.value,
      size: g
    }, null), e.default()]) : e.default ? p(Y, null, [e.icon && e.icon(), e.default()]) : c.value || d.value ? p(fe, {
      name: c.value,
      component: d.value,
      size: g
    }, null) : "按钮"]);
  }
}), Nt = {
  install(t) {
    t.component(Ne.name, Ne);
  }
};
function Te(t, e = 0, n = []) {
  return e++, t.reduce((r, i) => {
    const o = { ...i };
    o.level = e, n.length > 0 && n[n.length - 1].level >= e && n.pop(), n.push(o);
    const l = n[n.length - 2];
    if (l && (o.parentId = l.id), o.children) {
      const a = Te(o.children, e, n);
      return delete o.children, r.concat(o, a);
    } else
      return o.isLeaf === void 0 && (o.isLeaf = !0), r.concat(o);
  }, []);
}
function It(t, { getChildren: e, getParent: n }, { emit: r }) {
  const i = (l) => {
    l.checked = !l.checked, e(l).forEach((u) => {
      u.checked = l.checked, u.inChecked = e(l, !0).every(
        (m) => m.inChecked
      );
    }), l.inChecked = !1, o(l);
    const a = t.value.map((u) => {
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
      a,
      s,
      c,
      d
    );
  }, o = (l) => {
    const a = n(l);
    if (!a)
      return;
    const s = e(a, !0), c = s.every((u) => u.checked);
    a.checked = c;
    const d = s.some((u) => u.checked);
    c ? a.inChecked = !1 : d ? a.inChecked = !0 : a.inChecked = !1, a.parentId && o(a);
  };
  return {
    toggleCheckNode: i
  };
}
function Rt(t) {
  const e = L(() => {
    let a = [];
    const s = [];
    for (const c of t.value)
      a.map((d) => d.id).includes(c.id) || (c.expanded !== !0 && (a = n(c)), s.push(c));
    return s;
  }), n = (a, s = !0) => {
    const c = [], d = t.value.findIndex((u) => u.id === a.id);
    for (let u = d + 1; u < t.value.length && a.level < t.value[u].level; u++)
      (s || a.level === t.value[u].level - 1) && c.push(t.value[u]);
    return c;
  }, r = (a, s = []) => {
    const c = n(a, !1);
    return s.push(...c), c.forEach((d) => {
      d.expanded && r(d, s);
    }), s;
  };
  return {
    expandedTree: e,
    getChildren: n,
    getChildrenExpanded: r,
    getIndex: (a) => a ? t.value.findIndex((s) => s.id === a.id) : -1,
    getNode: (a) => t.value.find((s) => s.id === a.id),
    getParent: (a) => t.value.find((s) => s.id === a.parentId)
  };
}
const ye = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function Bt(t, e, { getChildren: n, getParent: r }) {
  const i = Ct({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), o = L(
    () => e.value.reduce(
      (g, v) => ({
        ...g,
        [v.id]: v
      }),
      {}
    )
  ), l = (g) => {
    g == null || g.classList.remove(...Object.values(ye));
  }, a = (g, v) => {
    var x;
    const f = (x = o.value[g]) == null ? void 0 : x.parentId;
    return f === v ? !0 : f !== void 0 ? a(f, v) : !1;
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
      const { dropPrev: f, dropNext: x, dropInner: y } = v;
      let h;
      const P = f ? y ? 0.25 : x ? 0.45 : 1 : -1, _ = x ? y ? 0.75 : f ? 0.55 : 0 : 1, O = g.currentTarget, E = O == null ? void 0 : O.getBoundingClientRect(), F = g.clientY - ((E == null ? void 0 : E.top) || 0);
      if (F < ((E == null ? void 0 : E.height) || 0) * P ? h = "dropPrev" : F > ((E == null ? void 0 : E.height) || 0) * _ ? h = "dropNext" : y ? h = "dropInner" : h = void 0, h) {
        const N = O == null ? void 0 : O.classList;
        N && (N.contains(ye[h]) || (l(O), N.add(ye[h])));
      } else
        l(O);
      i.dropType = h;
    }
  }, u = (g) => {
    g.stopPropagation(), i.draggingNode && l(g.currentTarget);
  }, m = (g, v) => {
    var x;
    if (g.preventDefault(), g.stopPropagation(), l(g.currentTarget), !i.draggingNode || !t)
      return;
    const f = (x = g.dataTransfer) == null ? void 0 : x.getData("dragNodeId");
    if (f) {
      const y = a(v.id, f);
      if (f === v.id || y)
        return;
      i.dropType && b(f, v), s();
    }
  };
  function b(g, v) {
    const f = e.value.find((x) => x.id === g);
    if (f) {
      let x;
      const y = n(f), h = r(f);
      if (i.dropType === "dropInner") {
        x = {
          ...f,
          parentId: v.id,
          level: v.level + 1
        };
        const P = e.value.indexOf(v);
        e.value.splice(P + 1, 0, x), v.isLeaf = void 0;
        const _ = e.value.indexOf(f);
        e.value.splice(_, 1);
      } else if (i.dropType === "dropNext") {
        x = {
          ...f,
          parentId: v.parentId,
          level: v.level
        };
        const P = e.value.indexOf(v), _ = n(v, !0).length;
        e.value.splice(
          P + _ + 1,
          0,
          x
        );
        const O = e.value.indexOf(f);
        e.value.splice(O, 1);
      } else if (i.dropType === "dropPrev") {
        x = {
          ...f,
          parentId: v.parentId,
          level: v.level
        };
        const P = e.value.indexOf(v);
        e.value.splice(P, 0, x);
        const _ = e.value.indexOf(f);
        e.value.splice(_, 1);
      }
      i.dropType = "dropInner", y.forEach((P) => b(P.id, x)), h && n(h).length === 0 && (h.isLeaf = !0);
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
  const o = (c) => {
    const d = e(c);
    d && d.isLeaf === !1 && !d.childNodeCount && (d.loading = !0, i("lazy-load", c, l));
  }, l = (c) => {
    const d = e(c.node);
    if (d) {
      d.loading = !1;
      const u = T(
        Te(c.treeItems, d.level)
      );
      a(d, u), s(d, u);
      const m = r(d);
      d.childNodeCount = m.length;
    }
  }, a = (c, d) => {
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
function ut(t = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  for (let r = 0; r < t; r++)
    n += e[parseInt((Math.random() * e.length).toString())];
  return n;
}
function qt(t, { getChildren: e, getIndex: n }) {
  return {
    append: (o, l) => {
      const a = e(o, !1), s = a[a.length - 1];
      let c = n(o) + 1;
      s && (c = n(s) + 1), o.expanded = !0, o.isLeaf = !1;
      const d = T({
        ...l,
        level: o.level + 1,
        parentId: o.id,
        isLeaf: !0
      });
      d.value.id === void 0 && (d.value.id = ut()), t.value.splice(c, 0, d.value);
    },
    remove: (o) => {
      const l = e(o).map((a) => a.id);
      t.value = t.value.filter(
        (a) => a.id !== o.id && !l.includes(a.id)
      );
    }
  };
}
function Vt(t, e, n, r) {
  const { lazyLoadNodes: i } = r;
  return {
    toggleNode: (l, a, s = !1) => {
      if (l.stopPropagation(), s)
        t.value.forEach((c) => {
          c.level <= a.level ? (c.level === a.level && c.id !== a.id && (c.expanded = !1), c.id === a.id && (c.expanded = !c.expanded), c.expanded && i(c)) : c.expanded = !1;
        });
      else {
        const c = t.value.find((d) => d.id === a.id);
        c && (c.expanded = !c.expanded, c.expanded && i(c));
      }
    }
  };
}
function Mt(t, e, n) {
  const r = Tt(t), i = T(Te(r)), o = Rt(i), l = [Vt, It, qt], a = Dt(i, o, n), s = Bt(e.draggable, i, o);
  return {
    ...l.reduce((d, u) => ({ ...d, ...u(i, o, n, a) }), {}),
    ...o,
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
        var o = arguments[i];
        if (o) {
          var l = typeof o;
          if (l === "string" || l === "number")
            r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var a = n.apply(null, o);
              a && r.push(a);
            }
          } else if (l === "object") {
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
})(jt);
const Q = we, zt = C({
  name: "SBaseSelectAll",
  props: Ae,
  setup(t) {
    return () => p("label", {
      class: Q("s-base-select-all", "is-checked", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [p("span", {
      class: Q("s-base-select-all__input", "is-checked", {
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
const $t = C({
  name: "SBaseSelectionBox",
  props: Ae,
  setup(t) {
    return () => p("label", {
      class: Q("s-base-selection-box", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [p("span", {
      class: Q("s-base-selection-box__input", {
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
const Ht = C({
  name: "SBaseSemiSelection",
  props: Ae,
  setup(t) {
    return () => p("label", {
      class: Q("s-base-semi-selection", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [p("span", {
      class: Q("s-base-semi-selection__input", "is-indeterminate", {
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
}), Wt = {
  ...dt,
  treeNode: {
    type: Object,
    required: !0
  }
}, Ie = 34, Re = 24, Ut = C({
  name: "STreeNode",
  props: Wt,
  setup(t, {
    slots: e
  }) {
    const {
      lineable: n,
      checkable: r,
      treeNode: i,
      operable: o,
      draggable: l
    } = R(t), {
      toggleCheckNode: a,
      getChildrenExpanded: s,
      append: c,
      remove: d,
      onDragend: u,
      onDragleave: m,
      onDragover: b,
      onDragstart: w,
      onDrop: g
    } = V("TREE_UTILS"), v = T(!1), f = () => {
      v.value ? v.value = !1 : v.value = !0;
    };
    let x = {};
    l.value && (x = {
      draggable: !0,
      onDragend: (h) => u(h),
      onDragleave: (h) => m(h),
      onDragover: (h) => b(h),
      onDragstart: (h) => w(h, i.value),
      onDrop: (h) => g(h, i.value)
    });
    const y = () => p(Y, null, [i.value.inChecked ? p(Ht, {
      onClick: () => a(i.value),
      disabled: i.value.disabled
    }, null) : i.value.checked ? p(zt, {
      onClick: () => a(i.value),
      disabled: i.value.disabled
    }, null) : p($t, {
      onClick: () => a(i.value),
      disabled: i.value.disabled
    }, null)]);
    return () => {
      var h, P, _;
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
          height: `${Ie * s(i.value).length}px`,
          left: `${Re * (i.value.level - 1) + 9}px`,
          top: `${Ie}px`
        }
      }, null), p("div", oe({
        class: "s-tree__node--content"
      }, x), [i.value.isLeaf ? p("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (h = e.icon) == null ? void 0 : h.call(e), r.value && y(), (P = e.content) == null ? void 0 : P.call(e), o.value && v.value && p("span", {
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
}), Yt = (t, {
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
const Kt = C({
  name: "SVirtualList",
  props: Xt,
  setup(t, {
    slots: e
  }) {
    const {
      data: n,
      itemHeight: r,
      component: i
    } = R(t), o = T(), l = T(0), a = T(0), s = T(0), c = L(() => Math.ceil(l.value / r.value)), d = L(() => n.value.slice(s.value, Math.min(s.value + c.value, n.value.length)));
    Ce(() => {
      var m;
      l.value = (m = o.value) == null ? void 0 : m.clientHeight;
    });
    const u = (m) => {
      const {
        scrollTop: b
      } = m.target;
      s.value = Math.floor(b / r.value), a.value = b - b % r.value;
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
          transform: `translate3d(0, ${a.value}px, 0)`
        }
      }, [d.value.map((m, b) => {
        var w;
        return (w = e.default) == null ? void 0 : w.call(e, {
          item: m,
          index: b
        });
      })])]
    });
  }
}), Be = C({
  name: "STree",
  props: dt,
  emits: ["lazy-load", "check"],
  setup(t, e) {
    const {
      data: n,
      height: r,
      itemHeight: i,
      accordion: o
    } = R(t), {
      slots: l
    } = e, a = Mt(n, t, e);
    return M("TREE_UTILS", a), () => {
      const s = (c) => p(Ut, oe(t, {
        treeNode: c,
        onClick: o.value ? (d) => a.toggleNode(d, c, o.value) : ""
      }), {
        content: () => l.content ? l.content(c) : c.label,
        icon: () => l.icon ? l.icon({
          nodeData: c,
          toggleNode: a.toggleNode
        }) : p(Yt, {
          expanded: !!c.expanded,
          onClick: (d) => a.toggleNode(d, c, o.value)
        }, null),
        loading: () => l.loading ? l.loading({
          nodeData: a
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
      }, [p(Kt, {
        data: a.expandedTree.value,
        itemHeight: i.value
      }, {
        default: ({
          item: c
        }) => s(c)
      })]) : a.expandedTree.value.map((c) => s(c))]);
    };
  }
}), Jt = {
  install(t) {
    t.component(Be.name, Be);
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
  const e = T(t), n = (l) => {
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
}, Qt = ft, xe = C({
  name: "SPager",
  props: Qt,
  setup(t) {
    const {
      total: e,
      pageSize: n,
      pagerCount: r,
      hideOnSinglePage: i
    } = R(t), o = L(() => Math.ceil(e.value / n.value)), {
      pageIndex: l,
      setPageIndex: a,
      jumpPage: s,
      prevPage: c,
      nextPage: d
    } = Zt(), u = L(() => Gt(o.value, l.value, r.value));
    return {
      totalPage: o,
      pageIndex: l,
      setPageIndex: a,
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
      hideOnSinglePage: l
    } = this;
    return p(Y, null, [l && o.length >= 0 && p("ul", {
      class: "s-pager"
    }, [p("li", {
      onClick: () => r(1),
      class: {
        current: n === 1
      }
    }, [J("1")]), e > t && n > Math.ceil(t / 2) && p("li", {
      class: "more left",
      onClick: () => i(-5)
    }, [J("...")]), o.map((a) => p("li", {
      onClick: () => r(a),
      class: {
        current: n === a
      }
    }, [a])), e > t && n < e - Math.ceil(t / 2) + 1 && p("li", {
      class: "more right",
      onClick: () => i(5)
    }, [J("...")]), e > 1 && p("li", {
      onClick: () => r(e),
      class: {
        current: n === e
      }
    }, [e])])]);
  }
}), De = C({
  name: "SPagination",
  props: ft,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = T(), r = L(() => n.value ? n.value.pageIndex < 2 : !0), i = L(() => n.value ? n.value.pageIndex > n.value.totalPage - 1 : !0);
    return Ce(() => {
      G(() => n.value.pageIndex, (o) => {
        e("update:modelValue", o);
      }), G(() => t.modelValue, (o) => {
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
}), en = {
  install(t) {
    t.component(De.name, De), t.component(xe.name, xe);
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
const qe = C({
  name: "SForm",
  props: tn,
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
    M("LABEL_DATA", i);
    const o = /* @__PURE__ */ new Set(), l = (d) => o.add(d), a = (d) => o.delete(d);
    M(pt, {
      model: t.model,
      rules: t.rules,
      addItem: l,
      removeItem: a
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
function W() {
  return W = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, W.apply(this, arguments);
}
function rn(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, re(t, e);
}
function Pe(t) {
  return Pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pe(t);
}
function re(t, e) {
  return re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, re(t, e);
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
  return an() ? de = Reflect.construct.bind() : de = function(i, o, l) {
    var a = [null];
    a.push.apply(a, o);
    var s = Function.bind.apply(i, a), c = new s();
    return l && re(c, l.prototype), c;
  }, de.apply(null, arguments);
}
function on(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function Se(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Se = function(r) {
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
      return de(r, arguments, Pe(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), re(i, r);
  }, Se(t);
}
var ln = /%[sdj%]/g, gt = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (gt = function(e, n) {
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
  var i = 0, o = n.length;
  if (typeof t == "function")
    return t.apply(null, n);
  if (typeof t == "string") {
    var l = t.replace(ln, function(a) {
      if (a === "%%")
        return "%";
      if (i >= o)
        return a;
      switch (a) {
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
          return a;
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
  var r = [], i = 0, o = t.length;
  function l(a) {
    r.push.apply(r, a || []), i++, i === o && n(r);
  }
  t.forEach(function(a) {
    e(a, l);
  });
}
function Ve(t, e, n) {
  var r = 0, i = t.length;
  function o(l) {
    if (l && l.length) {
      n(l);
      return;
    }
    var a = r;
    r = r + 1, a < i ? e(t[a], o) : n([]);
  }
  o([]);
}
function un(t) {
  var e = [];
  return Object.keys(t).forEach(function(n) {
    e.push.apply(e, t[n] || []);
  }), e;
}
var Me = /* @__PURE__ */ function(t) {
  rn(e, t);
  function e(n, r) {
    var i;
    return i = t.call(this, "Async Validation Error") || this, i.errors = n, i.fields = r, i;
  }
  return e;
}(/* @__PURE__ */ Se(Error));
function dn(t, e, n, r, i) {
  if (e.first) {
    var o = new Promise(function(m, b) {
      var w = function(f) {
        return r(f), f.length ? b(new Me(f, _e(f))) : m(i);
      }, g = un(t);
      Ve(g, n, w);
    });
    return o.catch(function(m) {
      return m;
    }), o;
  }
  var l = e.firstFields === !0 ? Object.keys(t) : e.firstFields || [], a = Object.keys(t), s = a.length, c = 0, d = [], u = new Promise(function(m, b) {
    var w = function(v) {
      if (d.push.apply(d, v), c++, c === s)
        return r(d), d.length ? b(new Me(d, _e(d))) : m(i);
    };
    a.length || (r(d), m(i)), a.forEach(function(g) {
      var v = t[g];
      l.indexOf(g) !== -1 ? Ve(v, n, w) : cn(v, n, w);
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
function je(t, e) {
  return function(n) {
    var r;
    return t.fullFields ? r = pn(e, t.fullFields) : r = e[n.field || t.fullField], fn(n) ? (n.field = n.field || t.fullField, n.fieldValue = r, n) : {
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
        typeof r == "object" && typeof t[n] == "object" ? t[n] = W({}, t[n], r) : t[n] = r;
      }
  }
  return t;
}
var mt = function(e, n, r, i, o, l) {
  e.required && (!r.hasOwnProperty(e.field) || A(n, l || e.type)) && i.push(k(o.messages.required, e.fullField));
}, gn = function(e, n, r, i, o) {
  (/^\s+$/.test(n) || n === "") && i.push(k(o.messages.whitespace, e.fullField));
}, ce, mn = function() {
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), l = new RegExp("^" + n + "$"), a = new RegExp("^" + i + "$"), s = function(h) {
    return h && h.exact ? o : new RegExp("(?:" + e(h) + n + e(h) + ")|(?:" + e(h) + i + e(h) + ")", "g");
  };
  s.v4 = function(y) {
    return y && y.exact ? l : new RegExp("" + e(y) + n + e(y), "g");
  }, s.v6 = function(y) {
    return y && y.exact ? a : new RegExp("" + e(y) + i + e(y), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", u = s.v4().source, m = s.v6().source, b = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", w = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", v = "(?::\\d{2,5})?", f = '(?:[/?#][^\\s"]*)?', x = "(?:" + c + "|www\\.)" + d + "(?:localhost|" + u + "|" + m + "|" + b + w + g + ")" + v + f;
  return ce = new RegExp("(?:^" + x + "$)", "i"), ce;
}, $e = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, ee = {
  integer: function(e) {
    return ee.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return ee.number(e) && !ee.integer(e);
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
    return typeof e == "object" && !ee.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match($e.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(mn());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match($e.hex);
  }
}, vn = function(e, n, r, i, o) {
  if (e.required && n === void 0) {
    mt(e, n, r, i, o);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], a = e.type;
  l.indexOf(a) > -1 ? ee[a](n) || i.push(k(o.messages.types[a], e.fullField, e.type)) : a && typeof n !== e.type && i.push(k(o.messages.types[a], e.fullField, e.type));
}, hn = function(e, n, r, i, o) {
  var l = typeof e.len == "number", a = typeof e.min == "number", s = typeof e.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, u = null, m = typeof n == "number", b = typeof n == "string", w = Array.isArray(n);
  if (m ? u = "number" : b ? u = "string" : w && (u = "array"), !u)
    return !1;
  w && (d = n.length), b && (d = n.replace(c, "_").length), l ? d !== e.len && i.push(k(o.messages[u].len, e.fullField, e.len)) : a && !s && d < e.min ? i.push(k(o.messages[u].min, e.fullField, e.min)) : s && !a && d > e.max ? i.push(k(o.messages[u].max, e.fullField, e.max)) : a && s && (d < e.min || d > e.max) && i.push(k(o.messages[u].range, e.fullField, e.min, e.max));
}, K = "enum", yn = function(e, n, r, i, o) {
  e[K] = Array.isArray(e[K]) ? e[K] : [], e[K].indexOf(n) === -1 && i.push(k(o.messages[K], e.fullField, e[K].join(", ")));
}, bn = function(e, n, r, i, o) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(n) || i.push(k(o.messages.pattern.mismatch, e.fullField, n, e.pattern));
    else if (typeof e.pattern == "string") {
      var l = new RegExp(e.pattern);
      l.test(n) || i.push(k(o.messages.pattern.mismatch, e.fullField, n, e.pattern));
    }
  }
}, S = {
  required: mt,
  whitespace: gn,
  type: vn,
  range: hn,
  enum: yn,
  pattern: bn
}, wn = function(e, n, r, i, o) {
  var l = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (A(n, "string") && !e.required)
      return r();
    S.required(e, n, i, l, o, "string"), A(n, "string") || (S.type(e, n, i, l, o), S.range(e, n, i, l, o), S.pattern(e, n, i, l, o), e.whitespace === !0 && S.whitespace(e, n, i, l, o));
  }
  r(l);
}, xn = function(e, n, r, i, o) {
  var l = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (A(n) && !e.required)
      return r();
    S.required(e, n, i, l, o), n !== void 0 && S.type(e, n, i, l, o);
  }
  r(l);
}, Pn = function(e, n, r, i, o) {
  var l = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (n === "" && (n = void 0), A(n) && !e.required)
      return r();
    S.required(e, n, i, l, o), n !== void 0 && (S.type(e, n, i, l, o), S.range(e, n, i, l, o));
  }
  r(l);
}, Sn = function(e, n, r, i, o) {
  var l = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (A(n) && !e.required)
      return r();
    S.required(e, n, i, l, o), n !== void 0 && S.type(e, n, i, l, o);
  }
  r(l);
}, _n = function(e, n, r, i, o) {
  var l = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (A(n) && !e.required)
      return r();
    S.required(e, n, i, l, o), A(n) || S.type(e, n, i, l, o);
  }
  r(l);
}, On = function(e, n, r, i, o) {
  var l = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (A(n) && !e.required)
      return r();
    S.required(e, n, i, l, o), n !== void 0 && (S.type(e, n, i, l, o), S.range(e, n, i, l, o));
  }
  r(l);
}, En = function(e, n, r, i, o) {
  var l = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (A(n) && !e.required)
      return r();
    S.required(e, n, i, l, o), n !== void 0 && (S.type(e, n, i, l, o), S.range(e, n, i, l, o));
  }
  r(l);
}, Cn = function(e, n, r, i, o) {
  var l = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (n == null && !e.required)
      return r();
    S.required(e, n, i, l, o, "array"), n != null && (S.type(e, n, i, l, o), S.range(e, n, i, l, o));
  }
  r(l);
}, Tn = function(e, n, r, i, o) {
  var l = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (A(n) && !e.required)
      return r();
    S.required(e, n, i, l, o), n !== void 0 && S.type(e, n, i, l, o);
  }
  r(l);
}, An = "enum", kn = function(e, n, r, i, o) {
  var l = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (A(n) && !e.required)
      return r();
    S.required(e, n, i, l, o), n !== void 0 && S[An](e, n, i, l, o);
  }
  r(l);
}, Ln = function(e, n, r, i, o) {
  var l = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (A(n, "string") && !e.required)
      return r();
    S.required(e, n, i, l, o), A(n, "string") || S.pattern(e, n, i, l, o);
  }
  r(l);
}, Fn = function(e, n, r, i, o) {
  var l = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (A(n, "date") && !e.required)
      return r();
    if (S.required(e, n, i, l, o), !A(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), S.type(e, s, i, l, o), s && S.range(e, s.getTime(), i, l, o);
    }
  }
  r(l);
}, Nn = function(e, n, r, i, o) {
  var l = [], a = Array.isArray(n) ? "array" : typeof n;
  S.required(e, n, i, l, o, a), r(l);
}, be = function(e, n, r, i, o) {
  var l = e.type, a = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (A(n, l) && !e.required)
      return r();
    S.required(e, n, i, a, o, l), A(n, l) || S.type(e, n, i, a, o);
  }
  r(a);
}, In = function(e, n, r, i, o) {
  var l = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (A(n) && !e.required)
      return r();
    S.required(e, n, i, l, o);
  }
  r(l);
}, te = {
  string: wn,
  method: xn,
  number: Pn,
  boolean: Sn,
  regexp: _n,
  integer: On,
  float: En,
  array: Cn,
  object: Tn,
  enum: kn,
  pattern: Ln,
  date: Fn,
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
    this.rules = {}, Object.keys(r).forEach(function(o) {
      var l = r[o];
      i.rules[o] = Array.isArray(l) ? l : [l];
    });
  }, e.messages = function(r) {
    return r && (this._messages = ze(Oe(), r)), this._messages;
  }, e.validate = function(r, i, o) {
    var l = this;
    i === void 0 && (i = {}), o === void 0 && (o = function() {
    });
    var a = r, s = i, c = o;
    if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, a), Promise.resolve(a);
    function d(g) {
      var v = [], f = {};
      function x(h) {
        if (Array.isArray(h)) {
          var P;
          v = (P = v).concat.apply(P, h);
        } else
          v.push(h);
      }
      for (var y = 0; y < g.length; y++)
        x(g[y]);
      v.length ? (f = _e(v), c(v, f)) : c(null, a);
    }
    if (s.messages) {
      var u = this.messages();
      u === Ee && (u = Oe()), ze(u, s.messages), s.messages = u;
    } else
      s.messages = this.messages();
    var m = {}, b = s.keys || Object.keys(this.rules);
    b.forEach(function(g) {
      var v = l.rules[g], f = a[g];
      v.forEach(function(x) {
        var y = x;
        typeof y.transform == "function" && (a === r && (a = W({}, a)), f = a[g] = y.transform(f)), typeof y == "function" ? y = {
          validator: y
        } : y = W({}, y), y.validator = l.getValidationMethod(y), y.validator && (y.field = g, y.fullField = y.fullField || g, y.type = l.getType(y), m[g] = m[g] || [], m[g].push({
          rule: y,
          value: f,
          source: a,
          field: g
        }));
      });
    });
    var w = {};
    return dn(m, s, function(g, v) {
      var f = g.rule, x = (f.type === "object" || f.type === "array") && (typeof f.fields == "object" || typeof f.defaultField == "object");
      x = x && (f.required || !f.required && g.value), f.field = g.field;
      function y(_, O) {
        return W({}, O, {
          fullField: f.fullField + "." + _,
          fullFields: f.fullFields ? [].concat(f.fullFields, [_]) : [_]
        });
      }
      function h(_) {
        _ === void 0 && (_ = []);
        var O = Array.isArray(_) ? _ : [_];
        !s.suppressWarning && O.length && t.warning("async-validator:", O), O.length && f.message !== void 0 && (O = [].concat(f.message));
        var E = O.map(je(f, a));
        if (s.first && E.length)
          return w[f.field] = 1, v(E);
        if (!x)
          v(E);
        else {
          if (f.required && !g.value)
            return f.message !== void 0 ? E = [].concat(f.message).map(je(f, a)) : s.error && (E = [s.error(f, k(s.messages.required, f.field))]), v(E);
          var F = {};
          f.defaultField && Object.keys(g.value).map(function(B) {
            F[B] = f.defaultField;
          }), F = W({}, F, g.rule.fields);
          var N = {};
          Object.keys(F).forEach(function(B) {
            var D = F[B], Et = Array.isArray(D) ? D : [D];
            N[B] = Et.map(y.bind(null, B));
          });
          var X = new t(N);
          X.messages(s.messages), g.rule.options && (g.rule.options.messages = s.messages, g.rule.options.error = s.error), X.validate(g.value, g.rule.options || s, function(B) {
            var D = [];
            E && E.length && D.push.apply(D, E), B && B.length && D.push.apply(D, B), v(D.length ? D : null);
          });
        }
      }
      var P;
      if (f.asyncValidator)
        P = f.asyncValidator(f, g.value, h, g.source, s);
      else if (f.validator) {
        try {
          P = f.validator(f, g.value, h, g.source, s);
        } catch (_) {
          console.error == null || console.error(_), s.suppressValidatorError || setTimeout(function() {
            throw _;
          }, 0), h(_.message);
        }
        P === !0 ? h() : P === !1 ? h(typeof f.message == "function" ? f.message(f.fullField || f.field) : f.message || (f.fullField || f.field) + " fails") : P instanceof Array ? h(P) : P instanceof Error && h(P.message);
      }
      P && P.then && P.then(function() {
        return h();
      }, function(_) {
        return h(_);
      });
    }, function(g) {
      d(g);
    }, a);
  }, e.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !te.hasOwnProperty(r.type))
      throw new Error(k("Unknown rule type %s", r.type));
    return r.type || "string";
  }, e.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var i = Object.keys(r), o = i.indexOf("message");
    return o !== -1 && i.splice(o, 1), i.length === 1 && i[0] === "required" ? te.required : te[this.getType(r)] || void 0;
  }, t;
}();
le.register = function(e, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  te[e] = n;
};
le.warning = gt;
le.messages = Ee;
le.validators = te;
const He = C({
  name: "SFormItem",
  props: nn,
  setup(t, {
    slots: e
  }) {
    const {
      error: n
    } = R(t), r = V("LABEL_DATA"), i = L(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": r.value.layout === "horizontal",
      "s-form__item--vertical": r.value.layout === "vertical"
    })), o = L(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": r.value.layout === "vertical",
      [`s-form__label--${r.value.labelAlign}`]: r.value.layout === "horizontal",
      [`s-form__label--${r.value.labelSize}`]: r.value.layout === "horizontal"
    })), l = V(pt), a = T(!1), s = T(""), d = {
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
        }, (w) => {
          w ? (a.value = !0, s.value = w[0].message || "校验错误") : (a.value = !1, s.value = "");
        });
      }
    };
    return M("FORM_ITEM_CTX", d), Ce(() => {
      t.prop && (l == null || l.addItem(d));
    }), ot(() => {
      t.prop && (l == null || l.removeItem(d));
    }), () => {
      var u;
      return p("div", {
        class: i.value
      }, [p("span", {
        class: o.value
      }, [t.label]), p("div", null, [(u = e.default) == null ? void 0 : u.call(e)]), n.value && p("div", {
        class: "error-message"
      }, [n.value]), a.value && p("div", {
        class: "error-message"
      }, [s.value])]);
    };
  }
}), Rn = {
  install(t) {
    t.component(qe.name, qe), t.component(He.name, He);
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
const We = C({
  name: "SInput",
  props: Bn,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = V("FORM_ITEM_CTX"), r = (i) => {
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
}), Dn = {
  install(t) {
    t.component(We.name, We);
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
const Mn = C({
  name: "SBaseModal",
  props: Vn,
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
}), Ue = C({
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
      showClose: o,
      width: l,
      center: a,
      alignCenter: s,
      backgroundColor: c,
      top: d
    } = R(t), u = s.value ? {
      marginTop: 0,
      top: "50%",
      transform: "translateY(-50%)"
    } : null, m = L(() => typeof d.value == "number" ? `${d.value}px` : d.value);
    return () => p(Mn, {
      class: "s-modal",
      modelValue: r.value,
      "onUpdate:modelValue": () => {
        n("update:modelValue");
      }
    }, {
      default: () => {
        var b, w, g;
        return [p("div", {
          class: "s-modal__container",
          style: {
            width: l.value,
            ...u,
            marginTop: m.value,
            backgroundColor: c.value
          }
        }, [e.header ? (b = e.header) == null ? void 0 : b.call(e, {
          close: () => {
            n("update:modelValue", !1);
          }
        }) : p("div", {
          class: "s-modal__header",
          style: {
            textAlign: a.value ? "center" : "left"
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
        }, [(w = e.default) == null ? void 0 : w.call(e)]), p("div", {
          className: "s-modal__footer"
        }, [(g = e.footer) == null ? void 0 : g.call(e)])])];
      }
    });
  }
}), jn = {
  install(t) {
    t.component(Ue.name, Ue);
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
const Ye = C({
  name: "STabs",
  props: zn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const n = T([]);
    M("active-data", n);
    const r = T(t.modelValue);
    M("active-tab", r);
    const i = (a) => {
      r.value = a;
    }, o = (a, s) => {
      const c = n.value.findIndex((d) => d.id === s);
      n.value.splice(c, 1), a.stopPropagation(), n.value.length === c ? i(n.value[c - 1].id) : i(n.value[c].id);
    }, l = () => {
      const a = ut();
      n.value.push({
        id: a,
        type: "random",
        title: `Tab${a}`,
        content: `Tab${a} Content`
      }), r.value = a;
    };
    return () => {
      var a;
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
        onClick: l,
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14"
      }, [p("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)])])]), (a = e.default) == null ? void 0 : a.call(e), n.value.filter((s) => s.type === "random").map((s) => p("div", {
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
const Xe = C({
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
      return p(Y, null, [t.id === n.value && p("div", {
        class: "s-tab"
      }, [(i = e.default) == null ? void 0 : i.call(e)])]);
    };
  }
}), Hn = {
  install(t) {
    t.component(Ye.name, Ye), t.component(Xe.name, Xe);
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
function U(t) {
  return t.split("-")[1];
}
function ke(t) {
  return t === "y" ? "height" : "width";
}
function se(t) {
  return t.split("-")[0];
}
function me(t) {
  return ["top", "bottom"].includes(se(t)) ? "x" : "y";
}
function Ke(t, e, n) {
  let {
    reference: r,
    floating: i
  } = t;
  const o = r.x + r.width / 2 - i.width / 2, l = r.y + r.height / 2 - i.height / 2, a = me(e), s = ke(a), c = r[s] / 2 - i[s] / 2, d = se(e), u = a === "x";
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
  switch (U(e)) {
    case "start":
      m[a] -= c * (n && u ? -1 : 1);
      break;
    case "end":
      m[a] += c * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const Yn = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: l
  } = n, a = o.filter(Boolean), s = await (l.isRTL == null ? void 0 : l.isRTL(e));
  if (process.env.NODE_ENV !== "production") {
    if (l == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), a.filter((g) => {
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
  } = Ke(c, r, s), m = r, b = {}, w = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: v,
      fn: f
    } = a[g], {
      x,
      y,
      data: h,
      reset: P
    } = await f({
      x: d,
      y: u,
      initialPlacement: r,
      placement: m,
      strategy: i,
      middlewareData: b,
      rects: c,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (d = x ?? d, u = y ?? u, b = {
      ...b,
      [v]: {
        ...b[v],
        ...h
      }
    }, process.env.NODE_ENV !== "production" && w > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), P && w <= 50) {
      w++, typeof P == "object" && (P.placement && (m = P.placement), P.rects && (c = P.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : P.rects), {
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
    middlewareData: b
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
    platform: o,
    rects: l,
    elements: a,
    strategy: s
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: m = !1,
    padding: b = 0
  } = e, w = vt(b), v = a[m ? u === "floating" ? "reference" : "floating" : u], f = pe(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(v))) == null || n ? v : v.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: s
  })), x = u === "floating" ? {
    ...l.floating,
    x: r,
    y: i
  } : l.reference, y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), h = await (o.isElement == null ? void 0 : o.isElement(y)) ? await (o.getScale == null ? void 0 : o.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = pe(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: y,
    strategy: s
  }) : x);
  return process.env.NODE_ENV, {
    top: (f.top - P.top + w.top) / h.y,
    bottom: (P.bottom - f.bottom + w.bottom) / h.y,
    left: (f.left - P.left + w.left) / h.x,
    right: (P.right - f.right + w.right) / h.x
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
      y: o,
      placement: l,
      rects: a,
      platform: s
    } = e;
    if (n == null)
      return process.env.NODE_ENV !== "production" && console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const c = vt(r), d = {
      x: i,
      y: o
    }, u = me(l), m = ke(u), b = await s.getDimensions(n), w = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", v = a.reference[m] + a.reference[u] - d[u] - a.floating[m], f = d[u] - a.reference[u], x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(n));
    let y = x ? u === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    y === 0 && (y = a.floating[m]);
    const h = v / 2 - f / 2, P = c[w], _ = y - b[m] - c[g], O = y / 2 - b[m] / 2 + h, E = Gn(P, O, _), N = U(l) != null && O != E && a.reference[m] / 2 - (O < P ? c[w] : c[g]) - b[m] / 2 < 0 ? O < P ? P - O : _ - O : 0;
    return {
      [u]: d[u] - N,
      data: {
        [u]: E,
        centerOffset: O - E
      }
    };
  }
}), er = ["top", "right", "bottom", "left"], Je = /* @__PURE__ */ er.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []), tr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ze(t) {
  return t.replace(/left|right|bottom|top/g, (e) => tr[e]);
}
function nr(t, e, n) {
  n === void 0 && (n = !1);
  const r = U(t), i = me(t), o = ke(i);
  let l = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (l = Ze(l)), {
    main: l,
    cross: Ze(l)
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
  return (t ? [...n.filter((i) => U(i) === t), ...n.filter((i) => U(i) !== t)] : n.filter((i) => se(i) === i)).filter((i) => t ? U(i) === t || (e ? ir(i) !== i : !1) : !0);
}
const or = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, r, i;
      const {
        rects: o,
        middlewareData: l,
        placement: a,
        platform: s,
        elements: c
      } = e, {
        alignment: d,
        allowedPlacements: u = Je,
        autoAlignment: m = !0,
        ...b
      } = t, w = d !== void 0 || u === Je ? ar(d || null, m, u) : u, g = await Kn(e, b), v = ((n = l.autoPlacement) == null ? void 0 : n.index) || 0, f = w[v];
      if (f == null)
        return {};
      const {
        main: x,
        cross: y
      } = nr(f, o, await (s.isRTL == null ? void 0 : s.isRTL(c.floating)));
      if (a !== f)
        return {
          reset: {
            placement: w[0]
          }
        };
      const h = [g[se(f)], g[x], g[y]], P = [...((r = l.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: f,
        overflows: h
      }], _ = w[v + 1];
      if (_)
        return {
          data: {
            index: v + 1,
            overflows: P
          },
          reset: {
            placement: _
          }
        };
      const O = P.slice().sort((N, X) => N.overflows[0] - X.overflows[0]), F = ((i = O.find((N) => {
        let {
          overflows: X
        } = N;
        return X.every((B) => B <= 0);
      })) == null ? void 0 : i.placement) || O[0].placement;
      return F !== a ? {
        data: {
          index: v + 1,
          overflows: P
        },
        reset: {
          placement: F
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
  } = t, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), l = se(n), a = U(n), s = me(n) === "x", c = ["left", "top"].includes(l) ? -1 : 1, d = o && s ? -1 : 1, u = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: m,
    crossAxis: b,
    alignmentAxis: w
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
  return a && typeof w == "number" && (b = a === "end" ? w * -1 : w), s ? {
    x: b * d,
    y: m * c
  } : {
    x: m * c,
    y: b * d
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
function I(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function q(t) {
  return I(t).getComputedStyle(t);
}
function z(t) {
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
  return t instanceof I(t).HTMLElement;
}
function $(t) {
  return t instanceof I(t).Element;
}
function yt(t) {
  return t instanceof I(t).Node;
}
function Ge(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = I(t).ShadowRoot;
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
  return ["table", "td", "th"].includes(z(t));
}
function Le(t) {
  const e = /firefox/i.test(ht()), n = q(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    (i) => {
      const o = n.contain;
      return o != null ? o.includes(i) : !1;
    }
  );
}
function bt() {
  return !/^((?!chrome|android).)*safari/i.test(ht());
}
function Fe(t) {
  return ["html", "body", "#document"].includes(z(t));
}
const Qe = Math.min, ne = Math.max, ge = Math.round;
function wt(t) {
  const e = q(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const i = t.offsetWidth, o = t.offsetHeight, l = ge(n) !== i || ge(r) !== o;
  return l && (n = i, r = o), {
    width: n,
    height: r,
    fallback: l
  };
}
function xt(t) {
  return $(t) ? t : t.contextElement;
}
const Pt = {
  x: 1,
  y: 1
};
function Z(t) {
  const e = xt(t);
  if (!j(e))
    return Pt;
  const n = e.getBoundingClientRect(), {
    width: r,
    height: i,
    fallback: o
  } = wt(e);
  let l = (o ? ge(n.width) : n.width) / r, a = (o ? ge(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: l,
    y: a
  };
}
function ie(t, e, n, r) {
  var i, o;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), a = xt(t);
  let s = Pt;
  e && (r ? $(r) && (s = Z(r)) : s = Z(t));
  const c = a ? I(a) : window, d = !bt() && n;
  let u = (l.left + (d && ((i = c.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / s.x, m = (l.top + (d && ((o = c.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / s.y, b = l.width / s.x, w = l.height / s.y;
  if (a) {
    const g = I(a), v = r && $(r) ? I(r) : r;
    let f = g.frameElement;
    for (; f && r && v !== g; ) {
      const x = Z(f), y = f.getBoundingClientRect(), h = getComputedStyle(f);
      y.x += (f.clientLeft + parseFloat(h.paddingLeft)) * x.x, y.y += (f.clientTop + parseFloat(h.paddingTop)) * x.y, u *= x.x, m *= x.y, b *= x.x, w *= x.y, u += y.x, m += y.y, f = I(f).frameElement;
    }
  }
  return {
    width: b,
    height: w,
    top: m,
    right: u + b,
    bottom: m + w,
    left: u,
    x: u,
    y: m
  };
}
function H(t) {
  return ((yt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function he(t) {
  return $(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function St(t) {
  return ie(H(t)).left + he(t).scrollLeft;
}
function ur(t, e, n) {
  const r = j(e), i = H(e), o = ie(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((z(e) !== "body" || ve(i)) && (l = he(e)), j(e)) {
      const s = ie(e, !0);
      a.x = s.x + e.clientLeft, a.y = s.y + e.clientTop;
    } else
      i && (a.x = St(i));
  return {
    x: o.left + l.scrollLeft - a.x,
    y: o.top + l.scrollTop - a.y,
    width: o.width,
    height: o.height
  };
}
function ae(t) {
  if (z(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (Ge(t) ? t.host : null) || H(t);
  return Ge(e) ? e.host : e;
}
function et(t) {
  return !j(t) || q(t).position === "fixed" ? null : t.offsetParent;
}
function dr(t) {
  let e = ae(t);
  for (; j(e) && !Fe(e); ) {
    if (Le(e))
      return e;
    e = ae(e);
  }
  return null;
}
function tt(t) {
  const e = I(t);
  let n = et(t);
  for (; n && cr(n) && q(n).position === "static"; )
    n = et(n);
  return n && (z(n) === "html" || z(n) === "body" && q(n).position === "static" && !Le(n)) ? e : n || dr(t) || e;
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
  const i = j(n), o = H(n);
  if (n === o)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 1,
    y: 1
  };
  const s = {
    x: 0,
    y: 0
  };
  if ((i || !i && r !== "fixed") && ((z(n) !== "body" || ve(o)) && (l = he(n)), j(n))) {
    const c = ie(n);
    a = Z(n), s.x = c.x + n.clientLeft, s.y = c.y + n.clientTop;
  }
  return {
    width: e.width * a.x,
    height: e.height * a.y,
    x: e.x * a.x - l.scrollLeft * a.x + s.x,
    y: e.y * a.y - l.scrollTop * a.y + s.y
  };
}
function gr(t, e) {
  const n = I(t), r = H(t), i = n.visualViewport;
  let o = r.clientWidth, l = r.clientHeight, a = 0, s = 0;
  if (i) {
    o = i.width, l = i.height;
    const c = bt();
    (c || !c && e === "fixed") && (a = i.offsetLeft, s = i.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: a,
    y: s
  };
}
function mr(t) {
  var e;
  const n = H(t), r = he(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = ne(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = ne(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let a = -r.scrollLeft + St(t);
  const s = -r.scrollTop;
  return q(i || n).direction === "rtl" && (a += ne(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: a,
    y: s
  };
}
function _t(t) {
  const e = ae(t);
  return Fe(e) ? t.ownerDocument.body : j(e) && ve(e) ? e : _t(e);
}
function Ot(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = _t(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = I(r);
  return i ? e.concat(o, o.visualViewport || [], ve(r) ? r : []) : e.concat(r, Ot(r));
}
function vr(t, e) {
  const n = ie(t, !0, e === "fixed"), r = n.top + t.clientTop, i = n.left + t.clientLeft, o = j(t) ? Z(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * o.x, a = t.clientHeight * o.y, s = i * o.x, c = r * o.y;
  return {
    top: c,
    left: s,
    right: s + l,
    bottom: c + a,
    x: s,
    y: c,
    width: l,
    height: a
  };
}
function nt(t, e, n) {
  return e === "viewport" ? pe(gr(t, n)) : $(e) ? vr(e, n) : pe(mr(H(t)));
}
function hr(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = Ot(t).filter((a) => $(a) && z(a) !== "body"), i = null;
  const o = q(t).position === "fixed";
  let l = o ? ae(t) : t;
  for (; $(l) && !Fe(l); ) {
    const a = q(l), s = Le(l);
    (o ? !s && !i : !s && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? r = r.filter((d) => d !== l) : i = a, l = ae(l);
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
  const l = [...n === "clippingAncestors" ? hr(e, this._c) : [].concat(n), r], a = l[0], s = l.reduce((c, d) => {
    const u = nt(e, d, i);
    return c.top = ne(u.top, c.top), c.right = Qe(u.right, c.right), c.bottom = Qe(u.bottom, c.bottom), c.left = ne(u.left, c.left), c;
  }, nt(e, a, i));
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
  isElement: $,
  getDimensions: fr,
  getOffsetParent: tt,
  getDocumentElement: H,
  getScale: Z,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: r
    } = t;
    const i = this.getOffsetParent || tt, o = this.getDimensions;
    return {
      reference: ur(e, await i(n), r),
      floating: {
        x: 0,
        y: 0,
        ...await o(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => q(t).direction === "rtl"
}, wr = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: br,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return Yn(t, e, {
    ...i,
    platform: o
  });
};
const xr = C({
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
      showArrow: o,
      placement: l
    } = R(t), a = T(), s = T(), c = () => {
      const u = [];
      o.value && (u.push(sr(8)), u.push(Qn({
        element: a.value
      }))), l.value || u.push(or()), wr(r.value, s.value, {
        middleware: u,
        placement: l.value || "bottom"
      }).then(({
        x: m,
        y: b,
        middlewareData: w,
        placement: g
      }) => {
        if (Object.assign(s.value.style, {
          left: `${m}px`,
          top: `${b}px`
        }), o.value) {
          const {
            x: v,
            y: f
          } = w.arrow, x = g.split("-")[0], y = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[x], h = ["top", "right", "bottom", "left"], P = h.indexOf(x) - 1, _ = h[P < 0 ? P + 4 : P];
          Object.assign(a.value.style, {
            left: `${v}px`,
            top: `${f}px`,
            [y]: "-4px",
            [`border-${x}-color`]: "transparent",
            [`border-${_}-color`]: "transparent"
          });
        }
      });
    }, d = new MutationObserver(() => c());
    return G(i, (u) => {
      u ? (lt(c), r.value && d.observe(r.value, {
        attributes: !0
      }), window.addEventListener("resize", c), window.addEventListener("scroll", c)) : (d.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c));
    }, {
      immediate: !0
    }), ot(() => {
      d.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c);
    }), () => {
      var u;
      return p(Y, null, [i.value && p("div", oe({
        ref: s,
        class: "s-base-popover"
      }, n), [(u = e.default) == null ? void 0 : u.call(e), o.value && p("div", {
        class: "s-base-popover__arrow",
        ref: a
      }, null)])]);
    };
  }
}), rt = C({
  name: "SPopover",
  props: Wn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const {
      modelValue: n,
      title: r
    } = R(t);
    return () => p(Y, null, [n.value && p(xr, oe({
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
}), Pr = {
  install(t) {
    t.component(rt.name, rt);
  }
}, Sr = {
  data: {
    type: Array,
    default: () => []
  }
};
const it = C({
  name: "STable",
  props: Sr,
  emits: ["selection-change"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      data: r
    } = R(t), i = T([]);
    M("column-data", i), G(r, (a) => {
      const s = a.filter((c) => c.checked);
      s.length === r.value.length ? (o.value = !0, l.value = !1) : s.length === 0 ? (o.value = !1, l.value = !1) : l.value = !0, n("selection-change", s);
    }, {
      deep: !0
    });
    const o = T(r.value.every((a) => a.checked));
    M("all-checked", o), G(o, (a) => {
      r.value.forEach((s) => {
        s.checked = a;
      });
    });
    const l = T(r.value.some((a) => a.checked) && !o.value);
    return M("is-indeterminate", l), () => {
      var a;
      return p("table", {
        class: "s-table"
      }, [p("thead", null, [p("tr", null, [(a = e.default) == null ? void 0 : a.call(e)])]), p("tbody", null, [r.value.map((s) => p("tr", null, [i.value.map((c, d) => {
        var m, b, w;
        const u = (m = e.default) == null ? void 0 : m.call(e)[d];
        return u != null && u.children ? p("td", null, [(w = (b = u == null ? void 0 : u.children).default) == null ? void 0 : w.call(b, s)]) : p("td", null, [c.prop ? s[c.prop] : c.type === "selection" ? st(p("input", {
          type: "checkbox",
          "onUpdate:modelValue": (g) => s.checked = g
        }, null), [[ct, s.checked]]) : ""]);
      })]))])]);
    };
  }
}), _r = {
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
const at = C({
  name: "STableColumn",
  props: _r,
  setup(t) {
    const {
      prop: e,
      title: n,
      type: r
    } = R(t);
    V("column-data").value.push({
      prop: e.value,
      title: n.value,
      type: r.value
    });
    const o = V("all-checked"), l = V("is-indeterminate"), a = T();
    return lt(() => {
      a.value && (a.value.indeterminate = l.value);
    }), G(l, () => {
      a.value && (a.value.indeterminate = l.value);
    }, {
      immediate: !0
    }), () => p("th", {
      class: "s-table-column"
    }, [r.value === "selection" ? st(p("input", {
      ref: a,
      type: "checkbox",
      "onUpdate:modelValue": (s) => o.value = s
    }, null), [[ct, o.value]]) : n.value]);
  }
}), Or = {
  install(t) {
    t.component(it.name, it), t.component(at.name, at);
  }
}, Er = [
  Nt,
  Jt,
  en,
  Rn,
  Dn,
  jn,
  Ft,
  Hn,
  Pr,
  Or
], Tr = {
  version: "0.0.1",
  install(t) {
    Er.forEach((e) => t.use(e));
  }
};
export {
  Ne as Button,
  qe as Form,
  fe as Icon,
  We as Input,
  Ue as Modal,
  De as Pagination,
  rt as Popover,
  Xe as Tab,
  it as Table,
  at as TableColumn,
  Ye as Tabs,
  Be as Tree,
  Tr as default
};
