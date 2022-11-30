import { defineComponent as a, toRefs as u, ref as g, createVNode as l } from "vue";
const P = {
  data: {
    type: Object,
    required: !0
  }
};
function d(r, n = 0, e = []) {
  return n++, r.reduce((s, c) => {
    const t = { ...c };
    t.level = n, e.length > 0 && e[e.length - 1].level >= n && e.pop(), e.push(t);
    const o = e[e.length - 2];
    if (o && (t.parentId = o.id), t.children) {
      const f = d(t.children, n, e);
      return delete t.children, s.concat(t, f);
    } else
      return t.isLeaf = !0, s.concat(t);
  }, []);
}
const m = a({
  name: "STree",
  props: P,
  setup(r) {
    const {
      data: n
    } = u(r), e = g(d(n.value));
    return () => l("div", {
      class: "s-tree"
    }, [e == null ? void 0 : e.value.map((s) => l("div", {
      class: "s-tree-node",
      style: {
        paddingLeft: `${24 * (s.level - 1)}px`
      }
    }, [s.label]))]);
  }
}), x = "s", i = "_sheep", C = "S", b = (r, n = { classPrefix: x }) => {
  var e;
  r.config.globalProperties[i] = {
    ...(e = r.config.globalProperties[i]) != null ? e : {},
    classPrefix: n.classPrefix
  };
}, I = (r) => {
  var n;
  return (n = r == null ? void 0 : r.componentPrefix) != null ? n : C;
};
function L(r, n, e) {
  const s = I(e);
  r.component(s + n.name) || (b(r, e), r.component(s + n.name, n));
}
const O = {
  install(r, n) {
    L(r, m, n);
  }
};
export {
  m as Tree,
  O as default
};
