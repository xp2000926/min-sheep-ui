import { defineComponent as t, toRefs as m, createVNode as l } from "vue";
const u = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
const d = t({
  name: "SBaseModal",
  props: u,
  emits: ["update:modelValue"],
  setup(e, {
    slots: a,
    emit: n
  }) {
    const {
      modelValue: s
    } = m(e);
    return () => {
      var o;
      return l("div", null, [s.value && l("div", {
        class: "s-base-modal"
      }, [l("div", {
        class: "s-base-modal__mask",
        onClick: () => {
          n("update:modelValue", !1);
        }
      }, null), (o = a.default) == null ? void 0 : o.call(a)])]);
    };
  }
}), p = {
  install(e) {
    e.component(d.name, d);
  }
};
export {
  d as BaseModal,
  p as default
};
