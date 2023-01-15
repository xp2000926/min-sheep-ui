import { defineComponent as n, createVNode as e } from "vue";
const l = {
  onClick: {
    type: Function,
    required: !0
  }
};
const a = n({
  name: "SBaseSelectAll",
  props: l,
  setup(s) {
    return () => e("label", {
      class: "s-base-select-all is-checked"
    }, [e("span", {
      class: "s-base-select-all__input is-checked"
    }, [e("span", {
      class: "s-base-select-all__inner"
    }, null), e("input", {
      type: "checkbox",
      "aria-hidden": "false",
      class: "s-base-select-all__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        s.onClick();
      }
    }, null)])]);
  }
});
const c = n({
  name: "SBaseSelectionBox",
  props: l,
  setup(s) {
    return () => e("label", {
      class: "s-base-selection-box"
    }, [e("span", {
      class: "s-base-selection-box__input"
    }, [e("span", {
      class: "s-base-selection-box__inner"
    }, null), e("input", {
      type: "checkbox",
      "aria-hidden": "false",
      class: "s-base-selection-box__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        s.onClick();
      }
    }, null)])]);
  }
});
const i = n({
  name: "SBaseSemiSelection",
  props: l,
  setup(s) {
    return () => e("label", {
      class: "s-base-semi-selection",
      "aria-controls": "undefined"
    }, [e("span", {
      class: "s-base-semi-selection__input is-indeterminate",
      tabindex: "0",
      role: "checkbox",
      "aria-checked": "mixed"
    }, [e("span", {
      class: "s-base-semi-selection__inner"
    }, null), e("input", {
      type: "checkbox",
      "aria-hidden": "true",
      class: "s-base-semi-selection__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        s.onClick();
      }
    }, null)])]);
  }
}), t = {
  install(s) {
    s.component(a.name, a), s.component(c.name, c), s.component(i.name, i);
  }
};
export {
  a as BaseSelectAll,
  c as BaseSelectionBox,
  i as BaseSemiSelection,
  t as default
};
