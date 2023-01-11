import { defineComponent as n, createVNode as e } from "vue";
const i = {
  onClick: {
    type: Function,
    required: !0
  }
};
const l = n({
  name: "SBaseSelectAll",
  props: i,
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
}), t = {
  onClick: {
    type: Function,
    required: !0
  }
};
const a = n({
  name: "SBaseSelectionBox",
  props: t,
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
}), o = {
  onClick: {
    type: Function,
    required: !0
  }
};
const c = n({
  name: "SBaseSemiSelection",
  props: o,
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
}), b = {
  install(s) {
    s.component(l.name, l), s.component(a.name, a), s.component(c.name, c);
  }
};
export {
  l as BaseSelectAll,
  a as BaseSelectionBox,
  c as BaseSemiSelection,
  b as default
};
