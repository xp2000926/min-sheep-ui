import { defineComponent as r, toRefs as f, createVNode as i } from "vue";
const d = {
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
}, u = r({
  name: "SButton",
  props: d,
  setup(e, {
    slots: t
  }) {
    const {
      type: n,
      size: s,
      disabled: o,
      block: a
    } = f(e), c = a.value ? "s-btn--block" : "";
    return () => i("button", {
      disabled: o.value,
      class: `s-btn s-btn--${n.value} s-btn--${s.value} ${c}`
    }, [t.default ? t.default() : "\u6309\u94AE"]);
  }
}), b = "s", l = "_sheep", m = "S", P = (e, t = { classPrefix: b }) => {
  var n;
  e.config.globalProperties[l] = {
    ...(n = e.config.globalProperties[l]) != null ? n : {},
    classPrefix: t.classPrefix
  };
}, g = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : m;
};
function p(e, t, n) {
  const s = g(n);
  e.component(s + t.name) || (P(e, n), e.component(s + t.name, t));
}
const C = {
  install(e, t) {
    p(e, u, t);
  }
};
export {
  u as Button,
  C as default
};
