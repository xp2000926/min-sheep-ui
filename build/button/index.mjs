import { defineComponent as d, toRefs as b, createVNode as c } from "vue";
const p = {
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
const n = d({
  name: "SButton",
  props: p,
  setup(t, {
    slots: e
  }) {
    const {
      type: o,
      size: a,
      disabled: s,
      block: l
    } = b(t), u = l.value ? "s-btn--block" : "";
    return () => c("button", {
      disabled: s.value,
      class: `s-btn s-btn--${o.value} s-btn--${a.value} ${u}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), f = {
  install(t) {
    t.component(n.name, n);
  }
};
export {
  n as Button,
  f as default
};
