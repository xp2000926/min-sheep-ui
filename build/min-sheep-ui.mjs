import { defineComponent as d, toRefs as c, createVNode as r } from "vue";
const i = {
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
  props: i,
  setup(t, {
    slots: e
  }) {
    const {
      type: o,
      size: s,
      disabled: l,
      block: a
    } = c(t), u = a.value ? "s-btn--block" : "";
    return () => r("button", {
      disabled: l.value,
      class: `s-btn s-btn--${o.value} s-btn--${s.value} ${u}`
    }, [e.default ? e.default() : "\u6309\u94AE"]);
  }
}), p = {
  install(t) {
    t.component(n.name, n);
  }
}, b = [p], m = {
  install(t) {
    b.forEach((e) => t.use(e));
  }
};
export {
  n as Button,
  m as default
};
