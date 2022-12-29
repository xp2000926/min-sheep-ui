import { ref as N, unref as b, computed as T, defineComponent as h, toRefs as v, inject as m, createVNode as u, withDirectives as C, vModelCheckbox as y, provide as E, mergeProps as w } from "vue";
function x(a, e = 0, d = []) {
  return e++, a.reduce((i, n) => {
    const t = { ...n };
    t.level = e, d.length > 0 && d[d.length - 1].level >= e && d.pop(), d.push(t);
    const l = d[d.length - 2];
    if (l && (t.parentId = l.id), t.children) {
      const c = x(t.children, e, d);
      return delete t.children, i.concat(t, c);
    } else
      return t.isLeaf = !0, i.concat(t);
  }, []);
}
function I(a) {
  const e = N(x(b(a))), d = (l) => {
    const c = e.value.find((o) => o.id === l.id);
    c && (c.expanded = !c.expanded);
  }, i = T(() => {
    let l = [];
    const c = [];
    for (const o of e.value)
      l.includes(o) || (o.expanded !== !0 && (l = n(o)), c.push(o));
    return c;
  }), n = (l, c = !0) => {
    const o = [], s = e.value.findIndex((r) => r.id === l.id);
    for (let r = s + 1; r < e.value.length && l.level < e.value[r].level; r++)
      (c || l.level === e.value[r].level - 1) && o.push(e.value[r]);
    return o;
  };
  return {
    innerData: e,
    toggleNode: d,
    expandedTree: i,
    getChildrenExpanded: n,
    toggleCheckNode: (l) => {
      l.checked = !l.checked, n(l).forEach((r) => {
        r.checked = l.checked;
      });
      const c = e.value.find((r) => r.id === l.parentId);
      if (!c)
        return;
      const o = n(c, !1);
      o.filter((r) => r.checked).length === o.length ? c.checked = !0 : c.checked = !1;
    }
  };
}
const k = {
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
}, S = {
  ...k,
  treeNode: {
    type: Object,
    required: !0
  }
}, p = 32, g = 24, D = h({
  name: "STreeNode",
  props: S,
  setup(a, {
    slots: e
  }) {
    const {
      lineable: d,
      checkable: i,
      treeNode: n
    } = v(a), {
      toggleCheckNode: t,
      getChildrenExpanded: l
    } = m("TREE_UTILS");
    return () => {
      var c, o;
      return u("div", {
        class: "s-tree-node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${g * (n.value.level - 1)}px`
        }
      }, [!n.value.isLeaf && n.value.expanded && d.value && u("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${p * l(n.value).length}px`,
          left: `${g * (n.value.level - 1) + 9}px`,
          top: `${p}px`
        }
      }, null), n.value.isLeaf ? u("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (c = e.icon) == null ? void 0 : c.call(e), i.value && C(u("input", {
        type: "checkbox",
        "onUpdate:modelValue": (s) => n.value.checked = s,
        onClick: () => {
          t(n.value);
        }
      }, null), [[y, n.value.checked]]), (o = e.content) == null ? void 0 : o.call(e)]);
    };
  }
}), L = (a, {
  emit: e
}) => u("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: a.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [u("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const f = h({
  name: "STree",
  props: k,
  setup(a, {
    slots: e
  }) {
    const {
      data: d
    } = v(a), i = I(d);
    return E("TREE_UTILS", i), () => {
      var n;
      return u("div", {
        class: "s-tree"
      }, [(n = i.expandedTree) == null ? void 0 : n.value.map((t) => u(D, w(a, {
        treeNode: t
      }), {
        content: () => e.content ? e.content(t) : t.label,
        icon: () => e.icon ? e.icon({
          nodeData: t,
          toggleNode: i.toggleNode
        }) : u(L, {
          expanded: !!t.expanded,
          onClick: () => i.toggleNode(t)
        }, null)
      }))]);
    };
  }
}), O = {
  install(a) {
    a.component(f.name, f);
  }
};
export {
  f as Tree,
  O as default
};
