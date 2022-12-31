import { defineComponent as P, toRefs as E, createVNode as x, computed as j, reactive as H, ref as D, unref as R, inject as q, mergeProps as V, withDirectives as U, vModelCheckbox as G, provide as Y, createTextVNode as A } from "vue";
const F = {
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
  }
};
const S = P({
  name: "SButton",
  props: F,
  setup(t, {
    slots: e
  }) {
    const {
      type: r,
      size: d,
      disabled: n,
      block: o
    } = E(t), i = o.value ? "s-btn--block" : "";
    return () => x("button", {
      disabled: n.value,
      class: `s-btn s-btn--${r.value} s-btn--${d.value} ${i}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), J = {
  install(t) {
    t.component(S.name, S);
  }
};
function O(t, e = 0, r = []) {
  return e++, t.reduce((d, n) => {
    const o = { ...n };
    o.level = e, r.length > 0 && r[r.length - 1].level >= e && r.pop(), r.push(o);
    const i = r[r.length - 2];
    if (i && (o.parentId = i.id), o.children) {
      const l = O(o.children, e, r);
      return delete o.children, d.concat(o, l);
    } else
      return o.isLeaf === void 0 && (o.isLeaf = !0), d.concat(o);
  }, []);
}
function K(t, { getChildren: e }) {
  return {
    toggleCheckNode: (d) => {
      d.checked = !d.checked, e(d).forEach((l) => {
        l.checked = d.checked;
      });
      const n = t.value.find((l) => l.id === d.parentId);
      if (!n)
        return;
      const o = e(n, !1), i = o.filter((l) => l.checked);
      i.length === o.length ? n.checked = !0 : i.length === 0 && (n.checked = !1);
    }
  };
}
function Q(t) {
  const e = j(() => {
    let l = [];
    const p = [];
    for (const u of t.value)
      l.map((a) => a.id).includes(u.id) || (u.expanded !== !0 && (l = r(u)), p.push(u));
    return p;
  }), r = (l, p = !0) => {
    const u = [], a = t.value.findIndex((g) => g.id === l.id);
    for (let g = a + 1; g < t.value.length && l.level < t.value[g].level; g++)
      (p || l.level === t.value[g].level - 1) && u.push(t.value[g]);
    return u;
  }, d = (l, p = []) => {
    const u = r(l, !1);
    return p.push(...u), u.forEach((a) => {
      a.expanded && d(a, p);
    }), p;
  };
  return {
    expandedTree: e,
    getChildren: r,
    getChildrenExpanded: d,
    getIndex: (l) => l ? t.value.findIndex((p) => p.id === l.id) : -1,
    getNode: (l) => t.value.find((p) => p.id === l.id),
    getParent: (l) => t.value.find((p) => p.id === l.parentId)
  };
}
const C = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function W(t, e, { getChildren: r, getParent: d }) {
  const n = H({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), o = j(
    () => e.value.reduce(
      (c, s) => ({
        ...c,
        [s.id]: s
      }),
      {}
    )
  ), i = (c) => {
    c == null || c.classList.remove(...Object.values(C));
  }, l = (c, s) => {
    var v;
    const f = (v = o.value[c]) == null ? void 0 : v.parentId;
    return f === s ? !0 : f !== void 0 ? l(f, s) : !1;
  }, p = () => {
    n.dropType = void 0, n.draggingNode = null, n.draggingTreeNode = null;
  }, u = (c, s) => {
    var f;
    c.stopPropagation(), n.draggingNode = c.target, n.draggingTreeNode = s, (f = c.dataTransfer) == null || f.setData("dragNodeId", s.id);
  }, a = (c) => {
    if (c.preventDefault(), c.stopPropagation(), !!n.draggingNode && t) {
      if (c.dataTransfer && (c.dataTransfer.dropEffect = "move"), !e)
        return;
      let s = {};
      typeof t == "object" ? s = t : t === !0 && (s = { dropInner: !0 });
      const { dropPrev: f, dropNext: v, dropInner: h } = s;
      let N;
      const I = f ? h ? 0.25 : v ? 0.45 : 1 : -1, b = v ? h ? 0.75 : f ? 0.55 : 0 : 1, y = c.currentTarget, T = y == null ? void 0 : y.getBoundingClientRect(), w = c.clientY - ((T == null ? void 0 : T.top) || 0);
      if (w < ((T == null ? void 0 : T.height) || 0) * I ? N = "dropPrev" : w > ((T == null ? void 0 : T.height) || 0) * b ? N = "dropNext" : h ? N = "dropInner" : N = void 0, N) {
        const L = y == null ? void 0 : y.classList;
        L && (L.contains(C[N]) || (i(y), L.add(C[N])));
      } else
        i(y);
      n.dropType = N;
    }
  }, g = (c) => {
    c.stopPropagation(), n.draggingNode && i(c.currentTarget);
  }, m = (c, s) => {
    var v;
    if (c.preventDefault(), c.stopPropagation(), i(c.currentTarget), !n.draggingNode || !t)
      return;
    const f = (v = c.dataTransfer) == null ? void 0 : v.getData("dragNodeId");
    if (f) {
      const h = l(s.id, f);
      if (f === s.id || h)
        return;
      n.dropType && k(f, s), p();
    }
  };
  function k(c, s) {
    const f = e.value.find((v) => v.id === c);
    if (f) {
      let v;
      const h = r(f), N = d(f);
      if (n.dropType === "dropInner") {
        v = {
          ...f,
          parentId: s.id,
          level: s.level + 1
        };
        const I = e.value.indexOf(s);
        e.value.splice(I + 1, 0, v), s.isLeaf = void 0;
        const b = e.value.indexOf(f);
        e.value.splice(b, 1);
      } else if (n.dropType === "dropNext") {
        v = {
          ...f,
          parentId: s.parentId,
          level: s.level
        };
        const I = e.value.indexOf(s), b = r(s, !0).length;
        e.value.splice(
          I + b + 1,
          0,
          v
        );
        const y = e.value.indexOf(f);
        e.value.splice(y, 1);
      } else if (n.dropType === "dropPrev") {
        v = {
          ...f,
          parentId: s.parentId,
          level: s.level
        };
        const I = e.value.indexOf(s);
        e.value.splice(I, 0, v);
        const b = e.value.indexOf(f);
        e.value.splice(b, 1);
      }
      n.dropType = "dropInner", h.forEach((I) => k(I.id, v)), N && r(N).length === 0 && (N.isLeaf = !0);
    }
  }
  return {
    onDragstart: u,
    onDragover: a,
    onDragleave: g,
    onDrop: m,
    onDragend: (c) => {
      c.preventDefault(), c.stopPropagation(), p();
    }
  };
}
function X(t, { getNode: e, getIndex: r, getChildren: d }, { emit: n }) {
  const o = (u) => {
    const a = e(u);
    a && a.isLeaf === !1 && !a.childNodeCount && (a.loading = !0, n("lazy-load", u, i));
  }, i = (u) => {
    const a = e(u.node);
    if (a) {
      a.loading = !1;
      const g = D(
        O(u.treeItems, a.level)
      );
      l(a, g), p(a, g);
      const m = d(a);
      a.childNodeCount = m.length;
    }
  }, l = (u, a) => {
    a.value.forEach((g) => {
      g.level - 1 === u.level && !g.parentId && (g.parentId = u.id);
    });
  }, p = (u, a) => {
    const g = r(u);
    g && t.value.splice(g + 1, 0, ...a.value);
  };
  return {
    lazyLoadNodes: o
  };
}
function Z(t = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let r = "";
  for (let d = 0; d < t; d++)
    r += e[parseInt((Math.random() * e.length).toString())];
  return r;
}
function ee(t, { getChildren: e, getIndex: r }) {
  return {
    append: (o, i) => {
      const l = e(o, !1), p = l[l.length - 1];
      let u = r(o) + 1;
      p && (u = r(p) + 1), o.expanded = !0, o.isLeaf = !1;
      const a = D({
        ...i,
        level: o.level + 1,
        parentId: o.id,
        isLeaf: !0
      });
      a.value.id === void 0 && (a.value.id = Z()), t.value.splice(u, 0, a.value);
    },
    remove: (o) => {
      const i = e(o).map((l) => l.id);
      t.value = t.value.filter(
        (l) => l.id !== o.id && !i.includes(l.id)
      );
    }
  };
}
function ne(t, e, r, d) {
  const { lazyLoadNodes: n } = d;
  return {
    toggleNode: (i) => {
      const l = t.value.find((p) => p.id === i.id);
      l && (l.expanded = !l.expanded, l.expanded && n(l));
    }
  };
}
function te(t, e, r) {
  const d = R(t), n = D(O(d)), o = Q(n), i = [ne, K, ee], l = X(n, o, r), p = W(e.draggable, n, o);
  return {
    ...i.reduce((a, g) => ({ ...a, ...g(n, o, r, l) }), {}),
    ...o,
    ...p,
    treeData: n
  };
}
const $ = {
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
}, le = {
  ...$,
  treeNode: {
    type: Object,
    required: !0
  }
}, B = 32, z = 24, oe = P({
  name: "STreeNode",
  props: le,
  setup(t, {
    slots: e
  }) {
    const {
      lineable: r,
      checkable: d,
      treeNode: n,
      operable: o,
      draggable: i
    } = E(t), {
      toggleCheckNode: l,
      getChildrenExpanded: p,
      append: u,
      remove: a,
      onDragend: g,
      onDragleave: m,
      onDragover: k,
      onDragstart: _,
      onDrop: c
    } = q("TREE_UTILS"), s = D(!1), f = () => {
      s.value ? s.value = !1 : s.value = !0;
    };
    let v = {};
    return i.value && (v = {
      draggable: !0,
      onDragend: (h) => g(h),
      onDragleave: (h) => m(h),
      onDragover: (h) => k(h),
      onDragstart: (h) => _(h, n.value),
      onDrop: (h) => c(h, n.value)
    }), () => {
      var h, N, I;
      return x("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${z * (n.value.level - 1)}px`
        },
        onMouseenter: f,
        onMouseleave: f
      }, [!n.value.isLeaf && n.value.expanded && r.value && x("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${B * p(n.value).length}px`,
          left: `${z * (n.value.level - 1) + 9}px`,
          top: `${B}px`
        }
      }, null), x("div", V({
        class: "s-tree__node--content"
      }, v), [n.value.isLeaf ? x("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (h = e.icon) == null ? void 0 : h.call(e), d.value && U(x("input", {
        type: "checkbox",
        "onUpdate:modelValue": (b) => n.value.checked = b,
        onClick: () => {
          l(n.value);
        }
      }, null), [[G, n.value.checked]]), (N = e.content) == null ? void 0 : N.call(e), o.value && s.value && x("span", {
        class: "inline-flex ml-1"
      }, [x("svg", {
        onClick: () => {
          u(n.value, {
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
          a(n.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [x("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), n.value.loading && ((I = e.loading) == null ? void 0 : I.call(e))])]);
    };
  }
}), re = (t, {
  emit: e
}) => x("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: t.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [x("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const M = P({
  name: "STree",
  props: $,
  emits: ["lazy-load"],
  setup(t, e) {
    const {
      data: r
    } = E(t), {
      slots: d
    } = e, n = te(r, t, e);
    return Y("TREE_UTILS", n), () => {
      var o;
      return x("div", {
        class: "s-tree"
      }, [(o = n.expandedTree) == null ? void 0 : o.value.map((i) => x(oe, V(t, {
        treeNode: i
      }), {
        content: () => d.content ? d.content(i) : i.label,
        icon: () => d.icon ? d.icon({
          nodeData: i,
          toggleNode: n.toggleNode
        }) : x(re, {
          expanded: !!i.expanded,
          onClick: () => n.toggleNode(i)
        }, null),
        loading: () => d.loading ? d.loading({
          nodeData: n
        }) : x("span", {
          class: "ml-1"
        }, [A("loading...")])
      }))]);
    };
  }
}), de = {
  install(t) {
    t.component(M.name, M);
  }
};
const ae = [
  J,
  de
], se = {
  version: "0.0.1",
  install(t) {
    ae.forEach((e) => t.use(e));
  }
};
export {
  S as Button,
  M as Tree,
  se as default
};
