import { computed as C, reactive as $, ref as k, unref as j, defineComponent as E, toRefs as O, inject as R, createVNode as h, mergeProps as V, withDirectives as q, vModelCheckbox as U, onMounted as Y, provide as A, createTextVNode as G } from "vue";
function w(o, e = 0, a = []) {
  return e++, o.reduce((d, n) => {
    const l = { ...n };
    l.level = e, a.length > 0 && a[a.length - 1].level >= e && a.pop(), a.push(l);
    const i = a[a.length - 2];
    if (i && (l.parentId = i.id), l.children) {
      const t = w(l.children, e, a);
      return delete l.children, d.concat(l, t);
    } else
      return l.isLeaf === void 0 && (l.isLeaf = !0), d.concat(l);
  }, []);
}
function F(o, { getChildren: e }) {
  return {
    toggleCheckNode: (d) => {
      d.checked = !d.checked, e(d).forEach((t) => {
        t.checked = d.checked;
      });
      const n = o.value.find((t) => t.id === d.parentId);
      if (!n)
        return;
      const l = e(n, !1), i = l.filter((t) => t.checked);
      i.length === l.length ? n.checked = !0 : i.length === 0 && (n.checked = !1);
    }
  };
}
function J(o) {
  const e = C(() => {
    let t = [];
    const r = [];
    for (const p of o.value)
      t.map((c) => c.id).includes(p.id) || (p.expanded !== !0 && (t = a(p)), r.push(p));
    return r;
  }), a = (t, r = !0) => {
    const p = [], c = o.value.findIndex((g) => g.id === t.id);
    for (let g = c + 1; g < o.value.length && t.level < o.value[g].level; g++)
      (r || t.level === o.value[g].level - 1) && p.push(o.value[g]);
    return p;
  }, d = (t, r = []) => {
    const p = a(t, !1);
    return r.push(...p), p.forEach((c) => {
      c.expanded && d(c, r);
    }), r;
  };
  return {
    expandedTree: e,
    getChildren: a,
    getChildrenExpanded: d,
    getIndex: (t) => t ? o.value.findIndex((r) => r.id === t.id) : -1,
    getNode: (t) => o.value.find((r) => r.id === t.id),
    getParent: (t) => o.value.find((r) => r.id === t.parentId)
  };
}
const P = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function K(o, e, { getChildren: a, getParent: d }) {
  const n = $({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), l = C(
    () => e.value.reduce(
      (s, u) => ({
        ...s,
        [u.id]: u
      }),
      {}
    )
  ), i = (s) => {
    s == null || s.classList.remove(...Object.values(P));
  }, t = (s, u) => {
    var f;
    const v = (f = l.value[s]) == null ? void 0 : f.parentId;
    return v === u ? !0 : v !== void 0 ? t(v, u) : !1;
  }, r = () => {
    n.dropType = void 0, n.draggingNode = null, n.draggingTreeNode = null;
  }, p = (s, u) => {
    var v;
    s.stopPropagation(), n.draggingNode = s.target, n.draggingTreeNode = u, (v = s.dataTransfer) == null || v.setData("dragNodeId", u.id);
  }, c = (s) => {
    if (s.preventDefault(), s.stopPropagation(), !!n.draggingNode && o) {
      if (s.dataTransfer && (s.dataTransfer.dropEffect = "move"), !e)
        return;
      let u = {};
      typeof o == "object" ? u = o : o === !0 && (u = { dropInner: !0 });
      const { dropPrev: v, dropNext: f, dropInner: x } = u;
      let N;
      const m = v ? x ? 0.25 : f ? 0.45 : 1 : -1, b = f ? x ? 0.75 : v ? 0.55 : 0 : 1, T = s.currentTarget, L = T == null ? void 0 : T.getBoundingClientRect(), M = s.clientY - ((L == null ? void 0 : L.top) || 0);
      if (M < ((L == null ? void 0 : L.height) || 0) * m ? N = "dropPrev" : M > ((L == null ? void 0 : L.height) || 0) * b ? N = "dropNext" : x ? N = "dropInner" : N = void 0, N) {
        const _ = T == null ? void 0 : T.classList;
        _ && (_.contains(P[N]) || (i(T), _.add(P[N])));
      } else
        i(T);
      n.dropType = N;
    }
  }, g = (s) => {
    s.stopPropagation(), n.draggingNode && i(s.currentTarget);
  }, I = (s, u) => {
    var f;
    if (s.preventDefault(), s.stopPropagation(), i(s.currentTarget), !n.draggingNode || !o)
      return;
    const v = (f = s.dataTransfer) == null ? void 0 : f.getData("dragNodeId");
    if (v) {
      const x = t(u.id, v);
      if (v === u.id || x)
        return;
      n.dropType && y(v, u), r();
    }
  };
  function y(s, u) {
    const v = e.value.find((f) => f.id === s);
    if (v) {
      let f;
      const x = a(v), N = d(v);
      if (n.dropType === "dropInner") {
        f = {
          ...v,
          parentId: u.id,
          level: u.level + 1
        };
        const m = e.value.indexOf(u);
        e.value.splice(m + 1, 0, f), u.isLeaf = void 0;
        const b = e.value.indexOf(v);
        e.value.splice(b, 1);
      } else if (n.dropType === "dropNext") {
        f = {
          ...v,
          parentId: u.parentId,
          level: u.level
        };
        const m = e.value.indexOf(u), b = a(u, !0).length;
        e.value.splice(
          m + b + 1,
          0,
          f
        );
        const T = e.value.indexOf(v);
        e.value.splice(T, 1);
      } else if (n.dropType === "dropPrev") {
        f = {
          ...v,
          parentId: u.parentId,
          level: u.level
        };
        const m = e.value.indexOf(u);
        e.value.splice(m, 0, f);
        const b = e.value.indexOf(v);
        e.value.splice(b, 1);
      }
      n.dropType = "dropInner", x.forEach((m) => y(m.id, f)), N && a(N).length === 0 && (N.isLeaf = !0);
    }
  }
  return {
    onDragstart: p,
    onDragover: c,
    onDragleave: g,
    onDrop: I,
    onDragend: (s) => {
      s.preventDefault(), s.stopPropagation(), r();
    }
  };
}
function Q(o, { getNode: e, getIndex: a, getChildren: d }, { emit: n }) {
  const l = (p) => {
    const c = e(p);
    c && c.isLeaf === !1 && !c.childNodeCount && (c.loading = !0, n("lazy-load", p, i));
  }, i = (p) => {
    const c = e(p.node);
    if (c) {
      c.loading = !1;
      const g = k(
        w(p.treeItems, c.level)
      );
      t(c, g), r(c, g);
      const I = d(c);
      c.childNodeCount = I.length;
    }
  }, t = (p, c) => {
    c.value.forEach((g) => {
      g.level - 1 === p.level && !g.parentId && (g.parentId = p.id);
    });
  }, r = (p, c) => {
    const g = a(p);
    g && o.value.splice(g + 1, 0, ...c.value);
  };
  return {
    lazyLoadNodes: l
  };
}
function W(o = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let a = "";
  for (let d = 0; d < o; d++)
    a += e[parseInt((Math.random() * e.length).toString())];
  return a;
}
function X(o, { getChildren: e, getIndex: a }) {
  return {
    append: (l, i) => {
      const t = e(l, !1), r = t[t.length - 1];
      let p = a(l) + 1;
      r && (p = a(r) + 1), l.expanded = !0, l.isLeaf = !1;
      const c = k({
        ...i,
        level: l.level + 1,
        parentId: l.id,
        isLeaf: !0
      });
      c.value.id === void 0 && (c.value.id = W()), o.value.splice(p, 0, c.value);
    },
    remove: (l) => {
      const i = e(l).map((t) => t.id);
      o.value = o.value.filter(
        (t) => t.id !== l.id && !i.includes(t.id)
      );
    }
  };
}
function Z(o, e, a, d) {
  const { lazyLoadNodes: n } = d;
  return {
    toggleNode: (i) => {
      const t = o.value.find((r) => r.id === i.id);
      t && (t.expanded = !t.expanded, t.expanded && n(t));
    }
  };
}
function ee(o, e, a) {
  const d = j(o), n = k(w(d)), l = J(n), i = [Z, F, X], t = Q(n, l, a), r = K(e.draggable, n, l);
  return {
    ...i.reduce((c, g) => ({ ...c, ...g(n, l, a, t) }), {}),
    ...l,
    ...r,
    treeData: n
  };
}
const B = {
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
  }
}, ne = {
  ...B,
  treeNode: {
    type: Object,
    required: !0
  }
}, S = 34, H = 24, te = E({
  name: "STreeNode",
  props: ne,
  setup(o, {
    slots: e
  }) {
    const {
      lineable: a,
      checkable: d,
      treeNode: n,
      operable: l,
      draggable: i
    } = O(o), {
      toggleCheckNode: t,
      getChildrenExpanded: r,
      append: p,
      remove: c,
      onDragend: g,
      onDragleave: I,
      onDragover: y,
      onDragstart: D,
      onDrop: s
    } = R("TREE_UTILS"), u = k(!1), v = () => {
      u.value ? u.value = !1 : u.value = !0;
    };
    let f = {};
    return i.value && (f = {
      draggable: !0,
      onDragend: (x) => g(x),
      onDragleave: (x) => I(x),
      onDragover: (x) => y(x),
      onDragstart: (x) => D(x, n.value),
      onDrop: (x) => s(x, n.value)
    }), () => {
      var x, N, m;
      return h("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${H * (n.value.level - 1)}px`
        },
        onMouseenter: v,
        onMouseleave: v
      }, [!n.value.isLeaf && n.value.expanded && a.value && h("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${S * r(n.value).length}px`,
          left: `${H * (n.value.level - 1) + 9}px`,
          top: `${S}px`
        }
      }, null), h("div", V({
        class: "s-tree__node--content"
      }, f), [n.value.isLeaf ? h("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (x = e.icon) == null ? void 0 : x.call(e), d.value && q(h("input", {
        type: "checkbox",
        "onUpdate:modelValue": (b) => n.value.checked = b,
        onClick: () => {
          t(n.value);
        }
      }, null), [[U, n.value.checked]]), (N = e.content) == null ? void 0 : N.call(e), l.value && u.value && h("span", {
        class: "inline-flex ml-1"
      }, [h("svg", {
        onClick: () => {
          p(n.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [h("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), h("svg", {
        onClick: () => {
          c(n.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [h("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), n.value.loading && ((m = e.loading) == null ? void 0 : m.call(e))])]);
    };
  }
}), le = (o, {
  emit: e
}) => h("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: o.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [h("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const oe = {
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
const re = E({
  name: "SVirtualList",
  props: oe,
  setup(o, {
    slots: e
  }) {
    const {
      data: a,
      itemHeight: d,
      component: n
    } = O(o), l = k(), i = k(0), t = k(0), r = k(0), p = C(() => Math.ceil(i.value / d.value)), c = C(() => a.value.slice(r.value, Math.min(r.value + p.value, a.value.length)));
    Y(() => {
      var I;
      i.value = (I = l.value) == null ? void 0 : I.clientHeight;
    });
    const g = (I) => {
      const {
        scrollTop: y
      } = I.target;
      r.value = Math.floor(y / d.value), t.value = y - y % d.value;
    };
    return () => h(n.value, {
      class: "s-virtual-list__container",
      ref: l,
      onScroll: g
    }, {
      default: () => [h("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${a.value.length * d.value}px`
        }
      }, null), h("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${t.value}px, 0)`
        }
      }, [c.value.map((I, y) => {
        var D;
        return (D = e.default) == null ? void 0 : D.call(e, {
          item: I,
          index: y
        });
      })])]
    });
  }
}), z = E({
  name: "STree",
  props: B,
  emits: ["lazy-load"],
  setup(o, e) {
    const {
      data: a,
      height: d,
      itemHeight: n
    } = O(o), {
      slots: l
    } = e, i = ee(a, o, e);
    return A("TREE_UTILS", i), () => {
      const t = (r) => h(te, V(o, {
        treeNode: r
      }), {
        content: () => l.content ? l.content(r) : r.label,
        icon: () => l.icon ? l.icon({
          nodeData: r,
          toggleNode: i.toggleNode
        }) : h(le, {
          expanded: !!r.expanded,
          onClick: () => i.toggleNode(r)
        }, null),
        loading: () => l.loading ? l.loading({
          nodeData: i
        }) : h("span", {
          class: "ml-1"
        }, [G("loading...")])
      });
      return h("div", {
        class: "s-tree"
      }, [d != null && d.value ? h("div", {
        style: {
          height: `${d.value}px`
        }
      }, [h(re, {
        data: i.expandedTree.value,
        itemHeight: n.value
      }, {
        default: ({
          item: r
        }) => t(r)
      })]) : i.expandedTree.value.map((r) => t(r))]);
    };
  }
}), de = {
  install(o) {
    o.component(z.name, z);
  }
};
export {
  z as Tree,
  de as default
};
