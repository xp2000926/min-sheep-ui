import { defineComponent as s, inject as i, createVNode as e } from "vue";
const d = {
  modelValue: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  }
};
const n = s({
  name: "SInput",
  props: d,
  emits: ["update:modelValue"],
  setup(t, {
    emit: o
  }) {
    const u = i("FORM_ITEM_CTX"), p = (a) => {
      const l = a.target.value;
      o("update:modelValue", l), u.validate();
    };
    return () => e("div", {
      class: "s-input"
    }, [e("input", {
      class: "s-input__input",
      value: t.modelValue,
      onInput: p,
      type: t.type
    }, null)]);
  }
}), m = {
  install(t) {
    t.component(n.name, n);
  }
};
export {
  n as Input,
  m as default
};
