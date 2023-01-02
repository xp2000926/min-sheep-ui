import { defineComponent as u, computed as r, provide as s, createVNode as o, inject as f } from "vue";
const b = {
  model: {
    type: Object,
    required: !0
  },
  layout: {
    type: String,
    default: "horizontal"
  },
  labelSize: {
    type: String,
    default: "md"
  },
  labelAlign: {
    type: String,
    default: "start"
  }
};
const m = u({
  name: "SForm",
  props: b,
  setup(l, {
    slots: a
  }) {
    const e = r(() => ({
      layout: l.layout,
      labelSize: l.labelSize,
      labelAlign: l.labelAlign
    }));
    return s("LABEL_DATA", e), () => {
      var t;
      return o("div", {
        class: "s-form"
      }, [(t = a.default) == null ? void 0 : t.call(a)]);
    };
  }
}), d = {
  label: {
    type: String
  }
};
const i = u({
  name: "SFormItem",
  props: d,
  setup(l, {
    slots: a
  }) {
    const e = f("LABEL_DATA"), t = r(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": e.value.layout === "horizontal",
      "s-form__item--vertical": e.value.layout === "vertical"
    })), c = r(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": e.value.layout === "vertical",
      [`s-form__label--${e.value.labelAlign}`]: e.value.layout === "horizontal",
      [`s-form__label--${e.value.labelSize}`]: e.value.layout === "horizontal"
    }));
    return () => {
      var n;
      return o("div", {
        class: t.value
      }, [o("span", {
        class: c.value
      }, [l.label]), o("div", null, [(n = a.default) == null ? void 0 : n.call(a)])]);
    };
  }
}), _ = {
  install(l) {
    l.component(m.name, m), l.component(i.name, i);
  }
};
export {
  m as Form,
  i as FormItem,
  _ as default
};
