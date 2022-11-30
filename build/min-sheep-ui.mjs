import { defineComponent as r, toRefs as i, createVNode as f } from "vue";
const u = {
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
}, d = r({
  name: "SButton",
  props: u,
  setup(e, {
    slots: t
  }) {
    const {
      type: n,
      size: s,
      disabled: o,
      block: a
    } = i(e), c = a.value ? "s-btn--block" : "";
    return () => f("button", {
      disabled: o.value,
      class: `s-btn s-btn--${n.value} s-btn--${s.value} ${c}`
    }, [t.default ? t.default() : "\u6309\u94AE"]);
  }
}), b = "s", l = "_sheep", P = "S", m = (e, t = { classPrefix: b }) => {
  var n;
  e.config.globalProperties[l] = {
    ...(n = e.config.globalProperties[l]) != null ? n : {},
    classPrefix: t.classPrefix
  };
}, g = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : P;
};
function p(e, t, n) {
  const s = g(n);
  e.component(s + t.name) || (m(e, n), e.component(s + t.name, t));
}
const y = {
  install(e, t) {
    p(e, d, t);
  }
}, C = [y], B = {
  install(e) {
    C.forEach((t) => e.use(t));
  }
};
export {
  d as Button,
  B as default
};
