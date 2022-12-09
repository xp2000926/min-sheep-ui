import { ref as f, unref as g, computed as x, defineComponent as p, toRefs as m, createVNode as d } from "vue";
function u(t, e = 0, n = []) {
  return e++, t.reduce((i, s) => {
    const r = { ...s };
    r.level = e, n.length > 0 && n[n.length - 1].level >= e && n.pop(), n.push(r);
    const l = n[n.length - 2];
    if (l && (r.parentId = l.id), r.children) {
      const o = u(r.children, e, n);
      return delete r.children, i.concat(r, o);
    } else
      return r.isLeaf = !0, i.concat(r);
  }, []);
}
function v(t) {
  const e = f(u(g(t))), n = (r) => {
    const l = e.value.find((o) => o.id === r.id);
    l && (l.expanded = !l.expanded);
  }, i = x(() => {
    let r = [];
    const l = [];
    for (const o of e.value)
      r.includes(o) || (o.expanded !== !0 && (r = s(o)), l.push(o));
    return l;
  }), s = (r) => {
    const l = [], o = e.value.findIndex((c) => c.id === r.id);
    for (let c = o + 1; c < e.value.length && r.level < e.value[c].level; c++)
      l.push(e.value[c]);
    return l;
  };
  return {
    innerData: e,
    toggleNode: n,
    expandedTree: i,
    getChildren: s
  };
}
const h = {
  data: {
    type: Object,
    required: !0
  }
}, P = p({
  name: "STree",
  props: h,
  setup(t) {
    const {
      data: e
    } = m(t), {
      expandedTree: n,
      toggleNode: i
    } = v(e);
    return () => d("div", {
      class: "s-tree"
    }, [n == null ? void 0 : n.value.map((s) => d("div", {
      class: "s-tree-node hover:bg-slate-300",
      style: {
        paddingLeft: `${24 * (s.level - 1)}px`
      }
    }, [s.isLeaf ? d("span", {
      style: {
        display: "inline-block",
        width: "18px"
      }
    }, null) : d("svg", {
      onClick: () => i(s),
      style: {
        width: "18px",
        height: "18px",
        display: "inline-block",
        transform: s.expanded ? "rotate(90deg)" : ""
      },
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg"
    }, [d("path", {
      fill: "currentColor",
      d: "M384 192v640l384-320.064z"
    }, null)]), s.label]))]);
  }
}), C = "s", a = "_sheep", b = "S", w = (t, e = { classPrefix: C }) => {
  var n;
  t.config.globalProperties[a] = {
    ...(n = t.config.globalProperties[a]) != null ? n : {},
    classPrefix: e.classPrefix
  };
}, I = (t) => {
  var e;
  return (e = t == null ? void 0 : t.componentPrefix) != null ? e : b;
};
function y(t, e, n) {
  const i = I(n);
  t.component(i + e.name) || (w(t, n), t.component(i + e.name, e));
}
const N = {
  install(t, e) {
    y(t, P, e);
  }
};
export {
  P as Tree,
  N as default
};
