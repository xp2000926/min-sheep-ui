import { defineComponent as g, toRefs as x, ref as p, computed as m, createVNode as a } from "vue";
const v = {
  data: {
    type: Object,
    required: !0
  }
};
function f(t, n = 0, e = []) {
  return n++, t.reduce((i, c) => {
    const s = { ...c };
    s.level = n, e.length > 0 && e[e.length - 1].level >= n && e.pop(), e.push(s);
    const l = e[e.length - 2];
    if (l && (s.parentId = l.id), s.children) {
      const r = f(s.children, n, e);
      return delete s.children, i.concat(s, r);
    } else
      return s.isLeaf = !0, i.concat(s);
  }, []);
}
const h = g({
  name: "STree",
  props: v,
  setup(t) {
    const {
      data: n
    } = x(t), e = p(f(n.value)), i = (l) => {
      const r = e.value.find((o) => o.id === l.id);
      r && (r.expanded = !r.expanded);
    }, c = m(() => {
      let l = [];
      const r = [];
      for (const o of e.value)
        l.includes(o) || (o.expanded !== !0 && (l = s(o)), r.push(o));
      return r;
    }), s = (l) => {
      const r = [], o = e.value.findIndex((d) => d.id === l.id);
      for (let d = o + 1; d < e.value.length && l.level < e.value[d].level; d++)
        r.push(e.value[d]);
      return r;
    };
    return () => a("div", {
      class: "s-tree"
    }, [c == null ? void 0 : c.value.map((l) => a("div", {
      class: "s-tree-node",
      style: {
        paddingLeft: `${24 * (l.level - 1)}px`
      }
    }, [l.isLeaf ? a("span", {
      style: {
        display: "inline-block",
        width: "18px"
      }
    }, null) : a("svg", {
      onClick: () => i(l),
      style: {
        width: "18px",
        height: "18px",
        display: "inline-block",
        transform: l.expanded ? "rotate(90deg)" : ""
      },
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg"
    }, [a("path", {
      fill: "currentColor",
      d: "M384 192v640l384-320.064z"
    }, null)]), l.label]))]);
  }
}), P = "s", u = "_sheep", C = "S", b = (t, n = { classPrefix: P }) => {
  var e;
  t.config.globalProperties[u] = {
    ...(e = t.config.globalProperties[u]) != null ? e : {},
    classPrefix: n.classPrefix
  };
}, w = (t) => {
  var n;
  return (n = t == null ? void 0 : t.componentPrefix) != null ? n : C;
};
function I(t, n, e) {
  const i = w(e);
  t.component(i + n.name) || (b(t, e), t.component(i + n.name, n));
}
const L = {
  install(t, n) {
    I(t, h, n);
  }
};
export {
  h as Tree,
  L as default
};
