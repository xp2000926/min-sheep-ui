import { computed as y, ref as v, unref as T, defineComponent as b, toRefs as C, inject as w, createVNode as u, withDirectives as E, vModelCheckbox as z, provide as M, mergeProps as S, createTextVNode as B } from "vue";
function h(o, l = 0, i = []) {
  return l++, o.reduce((a, t) => {
    const c = { ...t };
    c.level = l, i.length > 0 && i[i.length - 1].level >= l && i.pop(), i.push(c);
    const n = i[i.length - 2];
    if (n && (c.parentId = n.id), c.children) {
      const e = h(c.children, l, i);
      return delete c.children, a.concat(c, e);
    } else
      return c.isLeaf === void 0 && (c.isLeaf = !0), a.concat(c);
  }, []);
}
function O(o, { getChildren: l }) {
  return {
    toggleCheckNode: (a) => {
      a.checked = !a.checked, l(a).forEach((e) => {
        e.checked = a.checked;
      });
      const t = o.value.find((e) => e.id === a.parentId);
      if (!t)
        return;
      const c = l(t, !1), n = c.filter((e) => e.checked);
      n.length === c.length ? t.checked = !0 : n.length === 0 && (t.checked = !1);
    }
  };
}
function V(o) {
  const l = y(() => {
    let n = [];
    const e = [];
    for (const r of o.value)
      n.map((s) => s.id).includes(r.id) || (r.expanded !== !0 && (n = i(r)), e.push(r));
    return e;
  }), i = (n, e = !0) => {
    const r = [], s = o.value.findIndex((d) => d.id === n.id);
    for (let d = s + 1; d < o.value.length && n.level < o.value[d].level; d++)
      (e || n.level === o.value[d].level - 1) && r.push(o.value[d]);
    return r;
  }, a = (n, e = []) => {
    const r = i(n, !1);
    return e.push(...r), r.forEach((s) => {
      s.expanded && a(s, e);
    }), e;
  };
  return {
    expandedTree: l,
    getChildren: i,
    getChildrenExpanded: a,
    getIndex: (n) => n ? o.value.findIndex((e) => e.id === n.id) : -1,
    getNode: (n) => o.value.find((e) => e.id === n.id)
  };
}
function _(o, { getNode: l, getIndex: i, getChildren: a }, { emit: t }) {
  const c = (s) => {
    const d = l(s);
    d && d.isLeaf === !1 && !d.childNodeCount && (d.loading = !0, t("lazy-load", s, n));
  }, n = (s) => {
    const d = l(s.node);
    if (d) {
      d.loading = !1;
      const p = v(
        h(s.treeItems, d.level)
      );
      e(d, p), r(d, p);
      const f = a(d);
      d.childNodeCount = f.length;
    }
  }, e = (s, d) => {
    d.value.forEach((p) => {
      p.level - 1 === s.level && !p.parentId && (p.parentId = s.id);
    });
  }, r = (s, d) => {
    const p = i(s);
    p && o.value.splice(p + 1, 0, ...d.value);
  };
  return {
    lazyLoadNodes: c
  };
}
function H(o = 8) {
  const l = "abcdefghijklmnopqrstuvwxyz0123456789";
  let i = "";
  for (let a = 0; a < o; a++)
    i += l[parseInt((Math.random() * l.length).toString())];
  return i;
}
function j(o, { getChildren: l, getIndex: i }) {
  return {
    append: (c, n) => {
      const e = l(c, !1), r = e[e.length - 1];
      let s = i(c) + 1;
      r && (s = i(r) + 1), c.expanded = !0, c.isLeaf = !1;
      const d = v({
        ...n,
        level: c.level + 1,
        parentId: c.id,
        isLeaf: !0
      });
      d.value.id === void 0 && (d.value.id = H()), o.value.splice(s, 0, d.value);
    },
    remove: (c) => {
      const n = l(c).map((e) => e.id);
      o.value = o.value.filter(
        (e) => e.id !== c.id && !n.includes(e.id)
      );
    }
  };
}
function P(o, l, i, a) {
  const { lazyLoadNodes: t } = a;
  return {
    toggleNode: (n) => {
      const e = o.value.find((r) => r.id === n.id);
      e && (e.expanded = !e.expanded, e.expanded && t(e));
    }
  };
}
function $(o, l) {
  const i = T(o), a = v(h(i)), t = V(a), c = [P, O, j], n = _(a, t, l);
  return {
    ...c.reduce((r, s) => ({ ...r, ...s(a, t, l, n) }), {}),
    ...t,
    treeData: a
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
}, q = {
  ...I,
  treeNode: {
    type: Object,
    required: !0
  }
}, N = 32, k = 24, R = b({
  name: "STreeNode",
  props: q,
  setup(o, {
    slots: l
  }) {
    const {
      lineable: i,
      checkable: a,
      treeNode: t,
      operable: c
    } = C(o), {
      toggleCheckNode: n,
      getChildrenExpanded: e,
      append: r,
      remove: s
    } = w("TREE_UTILS"), d = v(!1), p = () => {
      d.value ? d.value = !1 : d.value = !0;
    };
    return () => {
      var f, g, x;
      return u("div", {
        class: "s-tree-node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${k * (t.value.level - 1)}px`
        },
        onMouseenter: p,
        onMouseleave: p
      }, [!t.value.isLeaf && t.value.expanded && i.value && u("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${N * e(t.value).length}px`,
          left: `${k * (t.value.level - 1) + 9}px`,
          top: `${N}px`
        }
      }, null), t.value.isLeaf ? u("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (f = l.icon) == null ? void 0 : f.call(l), a.value && E(u("input", {
        type: "checkbox",
        "onUpdate:modelValue": (L) => t.value.checked = L,
        onClick: () => {
          n(t.value);
        }
      }, null), [[z, t.value.checked]]), (g = l.content) == null ? void 0 : g.call(l), c.value && d.value && u("span", {
        class: "inline-flex ml-1"
      }, [u("svg", {
        onClick: () => {
          r(t.value, {
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
          s(t.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [u("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), t.value.loading && ((x = l.loading) == null ? void 0 : x.call(l))]);
    };
  }
}), U = (o, {
  emit: l
}) => u("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: o.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => l("onClick")
}, [u("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const m = b({
  name: "STree",
  props: I,
  emits: ["lazy-load"],
  setup(o, l) {
    const {
      data: i
    } = C(o), {
      slots: a
    } = l, t = $(i, l);
    return M("TREE_UTILS", t), () => {
      var c;
      return u("div", {
        class: "s-tree"
      }, [(c = t.expandedTree) == null ? void 0 : c.value.map((n) => u(R, S(o, {
        treeNode: n
      }), {
        content: () => a.content ? a.content(n) : n.label,
        icon: () => a.icon ? a.icon({
          nodeData: n,
          toggleNode: t.toggleNode
        }) : u(U, {
          expanded: !!n.expanded,
          onClick: () => t.toggleNode(n)
        }, null),
        loading: () => a.loading ? a.loading({
          nodeData: t
        }) : u("span", {
          class: "ml-1"
        }, [B("loading...")])
      }))]);
    };
  }
}), A = {
  install(o) {
    o.component(m.name, m);
  }
};
export {
  m as Tree,
  A as default
};
