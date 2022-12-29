import { defineComponent as p, toRefs as f, createVNode as s, ref as N, unref as m, computed as y, inject as T, withDirectives as C, vModelCheckbox as E, provide as S, mergeProps as w } from "vue";
const I = {
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
const g = p({
  name: "SButton",
  props: I,
  setup(o, {
    slots: e
  }) {
    const {
      type: a,
      size: i,
      disabled: n,
      block: t
    } = f(o), l = t.value ? "s-btn--block" : "";
    return () => s("button", {
      disabled: n.value,
      class: `s-btn s-btn--${a.value} s-btn--${i.value} ${l}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), B = {
  install(o) {
    o.component(g.name, g);
  }
};
function k(o, e = 0, a = []) {
  return e++, o.reduce((i, n) => {
    const t = { ...n };
    t.level = e, a.length > 0 && a[a.length - 1].level >= e && a.pop(), a.push(t);
    const l = a[a.length - 2];
    if (l && (t.parentId = l.id), t.children) {
      const c = k(t.children, e, a);
      return delete t.children, i.concat(t, c);
    } else
      return t.isLeaf = !0, i.concat(t);
  }, []);
}
function D(o) {
  const e = N(k(m(o))), a = (l) => {
    const c = e.value.find((d) => d.id === l.id);
    c && (c.expanded = !c.expanded);
  }, i = y(() => {
    let l = [];
    const c = [];
    for (const d of e.value)
      l.includes(d) || (d.expanded !== !0 && (l = n(d)), c.push(d));
    return c;
  }), n = (l, c = !0) => {
    const d = [], u = e.value.findIndex((r) => r.id === l.id);
    for (let r = u + 1; r < e.value.length && l.level < e.value[r].level; r++)
      (c || l.level === e.value[r].level - 1) && d.push(e.value[r]);
    return d;
  };
  return {
    innerData: e,
    toggleNode: a,
    expandedTree: i,
    getChildrenExpanded: n,
    toggleCheckNode: (l) => {
      l.checked = !l.checked, n(l).forEach((r) => {
        r.checked = l.checked;
      });
      const c = e.value.find((r) => r.id === l.parentId);
      if (!c)
        return;
      const d = n(c, !1);
      d.filter((r) => r.checked).length === d.length ? c.checked = !0 : c.checked = !1;
    }
  };
}
const x = {
  data: {
    type: Object,
    required: !0
  },
  checkable: {
    type: Boolean,
    default: !1
  },
  lineable: {
    type: Boolean,
    default: !1
  }
}, $ = {
  ...x,
  treeNode: {
    type: Object,
    required: !0
  }
}, v = 32, h = 24, L = p({
  name: "STreeNode",
  props: $,
  setup(o, {
    slots: e
  }) {
    const {
      lineable: a,
      checkable: i,
      treeNode: n
    } = f(o), {
      toggleCheckNode: t,
      getChildrenExpanded: l
    } = T("TREE_UTILS");
    return () => {
      var c, d;
      return s("div", {
        class: "s-tree-node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${h * (n.value.level - 1)}px`
        }
      }, [!n.value.isLeaf && n.value.expanded && a.value && s("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${v * l(n.value).length}px`,
          left: `${h * (n.value.level - 1) + 9}px`,
          top: `${v}px`
        }
      }, null), n.value.isLeaf ? s("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (c = e.icon) == null ? void 0 : c.call(e), i.value && C(s("input", {
        type: "checkbox",
        "onUpdate:modelValue": (u) => n.value.checked = u,
        onClick: () => {
          t(n.value);
        }
      }, null), [[E, n.value.checked]]), (d = e.content) == null ? void 0 : d.call(e)]);
    };
  }
}), P = (o, {
  emit: e
}) => s("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: o.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [s("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const b = p({
  name: "STree",
  props: x,
  setup(o, {
    slots: e
  }) {
    const {
      data: a
    } = f(o), i = D(a);
    return S("TREE_UTILS", i), () => {
      var n;
      return s("div", {
        class: "s-tree"
      }, [(n = i.expandedTree) == null ? void 0 : n.value.map((t) => s(L, w(o, {
        treeNode: t
      }), {
        content: () => e.content ? e.content(t) : t.label,
        icon: () => e.icon ? e.icon({
          nodeData: t,
          toggleNode: i.toggleNode
        }) : s(P, {
          expanded: !!t.expanded,
          onClick: () => i.toggleNode(t)
        }, null)
      }))]);
    };
  }
}), _ = {
  install(o) {
    o.component(b.name, b);
  }
};
const O = [
  B,
  _
], z = {
  version: "0.0.1",
  install(o) {
    O.forEach((e) => o.use(e));
  }
};
export {
  g as Button,
  b as Tree,
  z as default
};
