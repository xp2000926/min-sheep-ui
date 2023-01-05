import { defineComponent as m, ref as u, provide as l, createVNode as t, inject as o, Fragment as v } from "vue";
const p = {
  modelValue: {
    type: String,
    default: ""
  }
};
const r = m({
  name: "STabs",
  props: p,
  emits: ["update:modelValue"],
  setup(a, {
    slots: e
  }) {
    const n = u([]);
    l("active-data", n);
    const i = u(a.modelValue);
    l("active-tab", i);
    const c = (d) => {
      i.value = d;
    };
    return () => {
      var d;
      return t("div", {
        class: "s-tabs"
      }, [t("ul", {
        className: "s-tabs__nav"
      }, [n.value.map((s) => t("li", {
        onClick: () => c(s.id),
        class: s.id === i.value ? "active" : ""
      }, [s.title]))]), (d = e.default) == null ? void 0 : d.call(e)]);
    };
  }
}), f = {
  id: {
    type: String,
    required: !0
  },
  title: {
    type: String,
    required: !0
  }
};
const b = m({
  name: "STab",
  props: f,
  setup(a, {
    slots: e
  }) {
    const n = o("active-tab");
    return o("active-data").value.push({
      id: a.id,
      title: a.title
    }), () => {
      var c;
      return t(v, null, [a.id === n.value && t("div", {
        class: "s-tab"
      }, [(c = e.default) == null ? void 0 : c.call(e)])]);
    };
  }
}), g = {
  install(a) {
    a.component(r.name, r), a.component(b.name, b);
  }
};
export {
  b as Tab,
  r as Tabs,
  g as default
};
