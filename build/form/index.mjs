import { defineComponent as c, computed as i, provide as u, createVNode as r, inject as p } from "vue";
const s = {
  model: {
    type: Object,
    required: !0
  },
  layout: {
    type: String,
    default: "horizontal"
  }
};
const m = c({
  name: "SForm",
  props: s,
  setup(t, {
    slots: e
  }) {
    const o = i(() => ({
      layout: t.layout
    }));
    return u("LABEL_DATA", o), () => {
      var a;
      return r("div", {
        class: "s-form"
      }, [(a = e.default) == null ? void 0 : a.call(e)]);
    };
  }
}), d = {
  label: {
    type: String
  }
};
const l = c({
  name: "SFormItem",
  props: d,
  setup(t, {
    slots: e
  }) {
    const o = p("LABEL_DATA"), a = i(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": o.value.layout === "horizontal",
      "s-form__item--vertical": o.value.layout === "vertical"
    }));
    return () => {
      var n;
      return r("div", {
        class: a.value
      }, [r("span", {
        class: "s-form__label"
      }, [t.label]), r("div", null, [(n = e.default) == null ? void 0 : n.call(e)])]);
    };
  }
}), _ = {
  install(t) {
    t.component(m.name, m), t.component(l.name, l);
  }
};
export {
  m as Form,
  l as FormItem,
  _ as default
};
