import { ref as x, unref as v, computed as k, defineComponent as b, toRefs as m, createVNode as d, withDirectives as C, vModelCheckbox as P } from "vue";
function p(t, e = 0, c = []) {
  return e++, t.reduce((r, a) => {
    const o = { ...a };
    o.level = e, c.length > 0 && c[c.length - 1].level >= e && c.pop(), c.push(o);
    const l = c[c.length - 2];
    if (l && (o.parentId = l.id), o.children) {
      const n = p(o.children, e, c);
      return delete o.children, r.concat(o, n);
    } else
      return o.isLeaf = !0, r.concat(o);
  }, []);
}
function I(t) {
  const e = x(p(v(t))), c = (l) => {
    const n = e.value.find((s) => s.id === l.id);
    n && (n.expanded = !n.expanded);
  }, r = k(() => {
    let l = [];
    const n = [];
    for (const s of e.value)
      l.includes(s) || (s.expanded !== !0 && (l = a(s)), n.push(s));
    return n;
  }), a = (l, n = !0) => {
    const s = [], u = e.value.findIndex((i) => i.id === l.id);
    for (let i = u + 1; i < e.value.length && l.level < e.value[i].level; i++)
      (n || l.level === e.value[i].level - 1) && s.push(e.value[i]);
    return s;
  };
  return {
    innerData: e,
    toggleNode: c,
    expandedTree: r,
    getChildren: a,
    toggleCheckNode: (l) => {
      l.checked = !l.checked, a(l).forEach((i) => {
        i.checked = l.checked;
      });
      const n = e.value.find((i) => i.id === l.parentId);
      if (!n)
        return;
      const s = a(n, !1);
      s.filter((i) => i.checked).length === s.length ? n.checked = !0 : n.checked = !1;
    }
  };
}
const w = {
  data: {
    type: Object,
    required: !0
  },
  checkable: {
    type: Boolean,
    default: !1
  }
}, f = 32, g = 24, y = b({
  name: "STree",
  props: w,
  setup(t) {
    const {
      data: e,
      checkable: c
    } = m(t), {
      expandedTree: r,
      toggleNode: a,
      getChildren: o,
      toggleCheckNode: l
    } = I(e);
    return () => d("div", {
      class: "s-tree"
    }, [r == null ? void 0 : r.value.map((n) => d("div", {
      class: "s-tree-node hover:bg-slate-300 relative leading-8",
      style: {
        paddingLeft: `${g * (n.level - 1)}px`
      }
    }, [!n.isLeaf && n.expanded && d("span", {
      class: "s-tree-node__vline absolute w-px bg-slate-300",
      style: {
        height: `${f * o(n).length}px`,
        left: `${g * (n.level - 1) + 11}px`,
        top: `${f}px`
      }
    }, null), n.isLeaf ? d("span", {
      style: {
        display: "inline-block",
        width: "18px"
      }
    }, null) : d("svg", {
      onClick: () => a(n),
      style: {
        width: "18px",
        height: "18px",
        display: "inline-block",
        transform: n.expanded ? "rotate(90deg)" : ""
      },
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg"
    }, [d("path", {
      fill: "currentColor",
      d: "M384 192v640l384-320.064z"
    }, null)]), c.value && C(d("input", {
      type: "checkbox",
      "onUpdate:modelValue": (s) => n.checked = s,
      onClick: () => {
        l(n);
      }
    }, null), [[P, n.checked]]), n.label]))]);
  }
}), E = "s", h = "_sheep", N = "S", _ = (t, e = { classPrefix: E }) => {
  var c;
  t.config.globalProperties[h] = {
    ...(c = t.config.globalProperties[h]) != null ? c : {},
    classPrefix: e.classPrefix
  };
}, L = (t) => {
  var e;
  return (e = t == null ? void 0 : t.componentPrefix) != null ? e : N;
};
function O(t, e, c) {
  const r = L(c);
  t.component(r + e.name) || (_(t, c), t.component(r + e.name, e));
}
const S = {
  install(t, e) {
    O(t, y, e);
  }
};
export {
  y as Tree,
  S as default
};
