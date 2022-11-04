import { defineComponent as d, toRefs as p, createVNode as b } from "vue";
const c = {
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
}, n = d({
  name: "SButton",
  props: c,
  setup(e, {
    slots: t
  }) {
    const {
      type: o,
      size: a,
      disabled: l,
      block: s
    } = p(e), u = s.value ? "s-btn--block" : "";
    return () => b("button", {
      disabled: l.value,
      class: `s-btn s-btn--${o.value} s-btn--${a.value} ${u}`
    }, [t.default ? t.default() : "\u6309\u94AE"]);
  }
}), f = {
  install(e) {
    e.component(n.name, n);
  }
};
export {
  n as Button,
  f as default
};
