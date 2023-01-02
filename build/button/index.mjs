import { defineComponent as d, toRefs as c, createVNode as b } from "vue";
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
      size: s,
      disabled: a,
      block: l
    } = c(t), u = l.value ? "s-btn--block" : "";
    return () => b("button", {
      disabled: a.value,
      class: `s-btn s-btn--${o.value} s-btn--${s.value} ${u}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), r = {
  install(t) {
    t.component(n.name, n);
  }
};
export {
  n as Button,
  r as default
};
