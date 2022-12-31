import { defineComponent as g, toRefs as h, createVNode as u, computed as T, ref as v, unref as w, inject as E, withDirectives as z, vModelCheckbox as S, provide as B, mergeProps as M, createTextVNode as P } from "vue";
const $ = {
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
const k = g({
  name: "SButton",
  props: $,
  setup(n, {
    slots: e
  }) {
    const {
      type: s,
      size: d,
      disabled: o,
      block: c
    } = h(n), t = c.value ? "s-btn--block" : "";
    return () => u("button", {
      disabled: o.value,
      class: `s-btn s-btn--${s.value} s-btn--${d.value} ${t}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), O = {
  install(n) {
    n.component(k.name, k);
  }
};
function x(n, e = 0, s = []) {
  return e++, n.reduce((d, o) => {
    const c = { ...o };
    c.level = e, s.length > 0 && s[s.length - 1].level >= e && s.pop(), s.push(c);
    const t = s[s.length - 2];
    if (t && (c.parentId = t.id), c.children) {
      const l = x(c.children, e, s);
      return delete c.children, d.concat(c, l);
    } else
      return c.isLeaf === void 0 && (c.isLeaf = !0), d.concat(c);
  }, []);
}
function V(n, { getChildren: e }) {
  return {
    toggleCheckNode: (d) => {
      d.checked = !d.checked, e(d).forEach((l) => {
        l.checked = d.checked;
      });
      const o = n.value.find((l) => l.id === d.parentId);
      if (!o)
        return;
      const c = e(o, !1), t = c.filter((l) => l.checked);
      t.length === c.length ? o.checked = !0 : t.length === 0 && (o.checked = !1);
    }
  };
}
function _(n) {
  const e = T(() => {
    let t = [];
    const l = [];
    for (const r of n.value)
      t.map((i) => i.id).includes(r.id) || (r.expanded !== !0 && (t = s(r)), l.push(r));
    return l;
  }), s = (t, l = !0) => {
    const r = [], i = n.value.findIndex((a) => a.id === t.id);
    for (let a = i + 1; a < n.value.length && t.level < n.value[a].level; a++)
      (l || t.level === n.value[a].level - 1) && r.push(n.value[a]);
    return r;
  }, d = (t, l = []) => {
    const r = s(t, !1);
    return l.push(...r), r.forEach((i) => {
      i.expanded && d(i, l);
    }), l;
  };
  return {
    expandedTree: e,
    getChildren: s,
    getChildrenExpanded: d,
    getIndex: (t) => t ? n.value.findIndex((l) => l.id === t.id) : -1,
    getNode: (t) => n.value.find((l) => l.id === t.id)
  };
}
function H(n, { getNode: e, getIndex: s, getChildren: d }, { emit: o }) {
  const c = (i) => {
    const a = e(i);
    a && a.isLeaf === !1 && !a.childNodeCount && (a.loading = !0, o("lazy-load", i, t));
  }, t = (i) => {
    const a = e(i.node);
    if (a) {
      a.loading = !1;
      const p = v(
        x(i.treeItems, a.level)
      );
      l(a, p), r(a, p);
      const f = d(a);
      a.childNodeCount = f.length;
    }
  }, l = (i, a) => {
    a.value.forEach((p) => {
      p.level - 1 === i.level && !p.parentId && (p.parentId = i.id);
    });
  }, r = (i, a) => {
    const p = s(i);
    p && n.value.splice(p + 1, 0, ...a.value);
  };
  return {
    lazyLoadNodes: c
  };
}
function j(n = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let s = "";
  for (let d = 0; d < n; d++)
    s += e[parseInt((Math.random() * e.length).toString())];
  return s;
}
function q(n, { getChildren: e, getIndex: s }) {
  return {
    append: (c, t) => {
      const l = e(c, !1), r = l[l.length - 1];
      let i = s(c) + 1;
      r && (i = s(r) + 1), c.expanded = !0, c.isLeaf = !1;
      const a = v({
        ...t,
        level: c.level + 1,
        parentId: c.id,
        isLeaf: !0
      });
      a.value.id === void 0 && (a.value.id = j()), n.value.splice(i, 0, a.value);
    },
    remove: (c) => {
      const t = e(c).map((l) => l.id);
      n.value = n.value.filter(
        (l) => l.id !== c.id && !t.includes(l.id)
      );
    }
  };
}
function R(n, e, s, d) {
  const { lazyLoadNodes: o } = d;
  return {
    toggleNode: (t) => {
      const l = n.value.find((r) => r.id === t.id);
      l && (l.expanded = !l.expanded, l.expanded && o(l));
    }
  };
}
function U(n, e) {
  const s = w(n), d = v(x(s)), o = _(d), c = [R, V, q], t = H(d, o, e);
  return {
    ...c.reduce((r, i) => ({ ...r, ...i(d, o, e, t) }), {}),
    ...o,
    treeData: d
  };
}
const I = {
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
  }
}, G = {
  ...I,
  treeNode: {
    type: Object,
    required: !0
  }
}, m = 32, y = 24, A = g({
  name: "STreeNode",
  props: G,
  setup(n, {
    slots: e
  }) {
    const {
      lineable: s,
      checkable: d,
      treeNode: o,
      operable: c
    } = h(n), {
      toggleCheckNode: t,
      getChildrenExpanded: l,
      append: r,
      remove: i
    } = E("TREE_UTILS"), a = v(!1), p = () => {
      a.value ? a.value = !1 : a.value = !0;
    };
    return () => {
      var f, b, N;
      return u("div", {
        class: "s-tree-node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${y * (o.value.level - 1)}px`
        },
        onMouseenter: p,
        onMouseleave: p
      }, [!o.value.isLeaf && o.value.expanded && s.value && u("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${m * l(o.value).length}px`,
          left: `${y * (o.value.level - 1) + 9}px`,
          top: `${m}px`
        }
      }, null), o.value.isLeaf ? u("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (f = e.icon) == null ? void 0 : f.call(e), d.value && z(u("input", {
        type: "checkbox",
        "onUpdate:modelValue": (L) => o.value.checked = L,
        onClick: () => {
          t(o.value);
        }
      }, null), [[S, o.value.checked]]), (b = e.content) == null ? void 0 : b.call(e), c.value && a.value && u("span", {
        class: "inline-flex ml-1"
      }, [u("svg", {
        onClick: () => {
          r(o.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [u("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), u("svg", {
        onClick: () => {
          i(o.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [u("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), o.value.loading && ((N = e.loading) == null ? void 0 : N.call(e))]);
    };
  }
}), F = (n, {
  emit: e
}) => u("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: n.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [u("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const C = g({
  name: "STree",
  props: I,
  emits: ["lazy-load"],
  setup(n, e) {
    const {
      data: s
    } = h(n), {
      slots: d
    } = e, o = U(s, e);
    return B("TREE_UTILS", o), () => {
      var c;
      return u("div", {
        class: "s-tree"
      }, [(c = o.expandedTree) == null ? void 0 : c.value.map((t) => u(A, M(n, {
        treeNode: t
      }), {
        content: () => d.content ? d.content(t) : t.label,
        icon: () => d.icon ? d.icon({
          nodeData: t,
          toggleNode: o.toggleNode
        }) : u(F, {
          expanded: !!t.expanded,
          onClick: () => o.toggleNode(t)
        }, null),
        loading: () => d.loading ? d.loading({
          nodeData: o
        }) : u("span", {
          class: "ml-1"
        }, [P("loading...")])
      }))]);
    };
  }
}), J = {
  install(n) {
    n.component(C.name, C);
  }
};
const K = [
  O,
  J
], W = {
  version: "0.0.1",
  install(n) {
    K.forEach((e) => n.use(e));
  }
};
export {
  k as Button,
  C as Tree,
  W as default
};
