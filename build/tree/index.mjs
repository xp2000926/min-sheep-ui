import { computed as M, reactive as H, ref as b, unref as R, defineComponent as z, toRefs as B, inject as $, createVNode as x, mergeProps as j, withDirectives as q, vModelCheckbox as U, provide as G, createTextVNode as Y } from "vue";
function P(l, n = 0, r = []) {
  return n++, l.reduce((s, e) => {
    const t = { ...e };
    t.level = n, r.length > 0 && r[r.length - 1].level >= n && r.pop(), r.push(t);
    const i = r[r.length - 2];
    if (i && (t.parentId = i.id), t.children) {
      const o = P(t.children, n, r);
      return delete t.children, s.concat(t, o);
    } else
      return t.isLeaf === void 0 && (t.isLeaf = !0), s.concat(t);
  }, []);
}
function A(l, { getChildren: n }) {
  return {
    toggleCheckNode: (s) => {
      s.checked = !s.checked, n(s).forEach((o) => {
        o.checked = s.checked;
      });
      const e = l.value.find((o) => o.id === s.parentId);
      if (!e)
        return;
      const t = n(e, !1), i = t.filter((o) => o.checked);
      i.length === t.length ? e.checked = !0 : i.length === 0 && (e.checked = !1);
    }
  };
}
function F(l) {
  const n = M(() => {
    let o = [];
    const p = [];
    for (const u of l.value)
      o.map((d) => d.id).includes(u.id) || (u.expanded !== !0 && (o = r(u)), p.push(u));
    return p;
  }), r = (o, p = !0) => {
    const u = [], d = l.value.findIndex((f) => f.id === o.id);
    for (let f = d + 1; f < l.value.length && o.level < l.value[f].level; f++)
      (p || o.level === l.value[f].level - 1) && u.push(l.value[f]);
    return u;
  }, s = (o, p = []) => {
    const u = r(o, !1);
    return p.push(...u), u.forEach((d) => {
      d.expanded && s(d, p);
    }), p;
  };
  return {
    expandedTree: n,
    getChildren: r,
    getChildrenExpanded: s,
    getIndex: (o) => o ? l.value.findIndex((p) => p.id === o.id) : -1,
    getNode: (o) => l.value.find((p) => p.id === o.id),
    getParent: (o) => l.value.find((p) => p.id === o.parentId)
  };
}
const C = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function J(l, n, { getChildren: r, getParent: s }) {
  const e = H({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), t = M(
    () => n.value.reduce(
      (a, c) => ({
        ...a,
        [c.id]: c
      }),
      {}
    )
  ), i = (a) => {
    a == null || a.classList.remove(...Object.values(C));
  }, o = (a, c) => {
    var v;
    const g = (v = t.value[a]) == null ? void 0 : v.parentId;
    return g === c ? !0 : g !== void 0 ? o(g, c) : !1;
  }, p = () => {
    e.dropType = void 0, e.draggingNode = null, e.draggingTreeNode = null;
  }, u = (a, c) => {
    var g;
    a.stopPropagation(), e.draggingNode = a.target, e.draggingTreeNode = c, (g = a.dataTransfer) == null || g.setData("dragNodeId", c.id);
  }, d = (a) => {
    if (a.preventDefault(), a.stopPropagation(), !!e.draggingNode && l) {
      if (a.dataTransfer && (a.dataTransfer.dropEffect = "move"), !n)
        return;
      let c = {};
      typeof l == "object" ? c = l : l === !0 && (c = { dropInner: !0 });
      const { dropPrev: g, dropNext: v, dropInner: h } = c;
      let N;
      const I = g ? h ? 0.25 : v ? 0.45 : 1 : -1, y = v ? h ? 0.75 : g ? 0.55 : 0 : 1, T = a.currentTarget, k = T == null ? void 0 : T.getBoundingClientRect(), _ = a.clientY - ((k == null ? void 0 : k.top) || 0);
      if (_ < ((k == null ? void 0 : k.height) || 0) * I ? N = "dropPrev" : _ > ((k == null ? void 0 : k.height) || 0) * y ? N = "dropNext" : h ? N = "dropInner" : N = void 0, N) {
        const L = T == null ? void 0 : T.classList;
        L && (L.contains(C[N]) || (i(T), L.add(C[N])));
      } else
        i(T);
      e.dropType = N;
    }
  }, f = (a) => {
    a.stopPropagation(), e.draggingNode && i(a.currentTarget);
  }, m = (a, c) => {
    var v;
    if (a.preventDefault(), a.stopPropagation(), i(a.currentTarget), !e.draggingNode || !l)
      return;
    const g = (v = a.dataTransfer) == null ? void 0 : v.getData("dragNodeId");
    if (g) {
      const h = o(c.id, g);
      if (g === c.id || h)
        return;
      e.dropType && D(g, c), p();
    }
  };
  function D(a, c) {
    const g = n.value.find((v) => v.id === a);
    if (g) {
      let v;
      const h = r(g), N = s(g);
      if (e.dropType === "dropInner") {
        v = {
          ...g,
          parentId: c.id,
          level: c.level + 1
        };
        const I = n.value.indexOf(c);
        n.value.splice(I + 1, 0, v), c.isLeaf = void 0;
        const y = n.value.indexOf(g);
        n.value.splice(y, 1);
      } else if (e.dropType === "dropNext") {
        v = {
          ...g,
          parentId: c.parentId,
          level: c.level
        };
        const I = n.value.indexOf(c), y = r(c, !0).length;
        n.value.splice(
          I + y + 1,
          0,
          v
        );
        const T = n.value.indexOf(g);
        n.value.splice(T, 1);
      } else if (e.dropType === "dropPrev") {
        v = {
          ...g,
          parentId: c.parentId,
          level: c.level
        };
        const I = n.value.indexOf(c);
        n.value.splice(I, 0, v);
        const y = n.value.indexOf(g);
        n.value.splice(y, 1);
      }
      e.dropType = "dropInner", h.forEach((I) => D(I.id, v)), N && r(N).length === 0 && (N.isLeaf = !0);
    }
  }
  return {
    onDragstart: u,
    onDragover: d,
    onDragleave: f,
    onDrop: m,
    onDragend: (a) => {
      a.preventDefault(), a.stopPropagation(), p();
    }
  };
}
function K(l, { getNode: n, getIndex: r, getChildren: s }, { emit: e }) {
  const t = (u) => {
    const d = n(u);
    d && d.isLeaf === !1 && !d.childNodeCount && (d.loading = !0, e("lazy-load", u, i));
  }, i = (u) => {
    const d = n(u.node);
    if (d) {
      d.loading = !1;
      const f = b(
        P(u.treeItems, d.level)
      );
      o(d, f), p(d, f);
      const m = s(d);
      d.childNodeCount = m.length;
    }
  }, o = (u, d) => {
    d.value.forEach((f) => {
      f.level - 1 === u.level && !f.parentId && (f.parentId = u.id);
    });
  }, p = (u, d) => {
    const f = r(u);
    f && l.value.splice(f + 1, 0, ...d.value);
  };
  return {
    lazyLoadNodes: t
  };
}
function Q(l = 8) {
  const n = "abcdefghijklmnopqrstuvwxyz0123456789";
  let r = "";
  for (let s = 0; s < l; s++)
    r += n[parseInt((Math.random() * n.length).toString())];
  return r;
}
function W(l, { getChildren: n, getIndex: r }) {
  return {
    append: (t, i) => {
      const o = n(t, !1), p = o[o.length - 1];
      let u = r(t) + 1;
      p && (u = r(p) + 1), t.expanded = !0, t.isLeaf = !1;
      const d = b({
        ...i,
        level: t.level + 1,
        parentId: t.id,
        isLeaf: !0
      });
      d.value.id === void 0 && (d.value.id = Q()), l.value.splice(u, 0, d.value);
    },
    remove: (t) => {
      const i = n(t).map((o) => o.id);
      l.value = l.value.filter(
        (o) => o.id !== t.id && !i.includes(o.id)
      );
    }
  };
}
function X(l, n, r, s) {
  const { lazyLoadNodes: e } = s;
  return {
    toggleNode: (i) => {
      const o = l.value.find((p) => p.id === i.id);
      o && (o.expanded = !o.expanded, o.expanded && e(o));
    }
  };
}
function Z(l, n, r) {
  const s = R(l), e = b(P(s)), t = F(e), i = [X, A, W], o = K(e, t, r), p = J(n.draggable, e, t);
  return {
    ...i.reduce((d, f) => ({ ...d, ...f(e, t, r, o) }), {}),
    ...t,
    ...p,
    treeData: e
  };
}
const V = {
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
  }
}, ee = {
  ...V,
  treeNode: {
    type: Object,
    required: !0
  }
}, w = 32, E = 24, ne = z({
  name: "STreeNode",
  props: ee,
  setup(l, {
    slots: n
  }) {
    const {
      lineable: r,
      checkable: s,
      treeNode: e,
      operable: t,
      draggable: i
    } = B(l), {
      toggleCheckNode: o,
      getChildrenExpanded: p,
      append: u,
      remove: d,
      onDragend: f,
      onDragleave: m,
      onDragover: D,
      onDragstart: O,
      onDrop: a
    } = $("TREE_UTILS"), c = b(!1), g = () => {
      c.value ? c.value = !1 : c.value = !0;
    };
    let v = {};
    return i.value && (v = {
      draggable: !0,
      onDragend: (h) => f(h),
      onDragleave: (h) => m(h),
      onDragover: (h) => D(h),
      onDragstart: (h) => O(h, e.value),
      onDrop: (h) => a(h, e.value)
    }), () => {
      var h, N, I;
      return x("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${E * (e.value.level - 1)}px`
        },
        onMouseenter: g,
        onMouseleave: g
      }, [!e.value.isLeaf && e.value.expanded && r.value && x("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${w * p(e.value).length}px`,
          left: `${E * (e.value.level - 1) + 9}px`,
          top: `${w}px`
        }
      }, null), x("div", j({
        class: "s-tree__node--content"
      }, v), [e.value.isLeaf ? x("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (h = n.icon) == null ? void 0 : h.call(n), s.value && q(x("input", {
        type: "checkbox",
        "onUpdate:modelValue": (y) => e.value.checked = y,
        onClick: () => {
          o(e.value);
        }
      }, null), [[U, e.value.checked]]), (N = n.content) == null ? void 0 : N.call(n), t.value && c.value && x("span", {
        class: "inline-flex ml-1"
      }, [x("svg", {
        onClick: () => {
          u(e.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [x("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), x("svg", {
        onClick: () => {
          d(e.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [x("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), e.value.loading && ((I = n.loading) == null ? void 0 : I.call(n))])]);
    };
  }
}), oe = (l, {
  emit: n
}) => x("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: l.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => n("onClick")
}, [x("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const S = z({
  name: "STree",
  props: V,
  emits: ["lazy-load"],
  setup(l, n) {
    const {
      data: r
    } = B(l), {
      slots: s
    } = n, e = Z(r, l, n);
    return G("TREE_UTILS", e), () => {
      var t;
      return x("div", {
        class: "s-tree"
      }, [(t = e.expandedTree) == null ? void 0 : t.value.map((i) => x(ne, j(l, {
        treeNode: i
      }), {
        content: () => s.content ? s.content(i) : i.label,
        icon: () => s.icon ? s.icon({
          nodeData: i,
          toggleNode: e.toggleNode
        }) : x(oe, {
          expanded: !!i.expanded,
          onClick: () => e.toggleNode(i)
        }, null),
        loading: () => s.loading ? s.loading({
          nodeData: e
        }) : x("span", {
          class: "ml-1"
        }, [Y("loading...")])
      }))]);
    };
  }
}), te = {
  install(l) {
    l.component(S.name, S);
  }
};
export {
  S as Tree,
  te as default
};
