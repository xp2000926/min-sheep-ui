import { defineComponent as o, createVNode as n, createTextVNode as s } from "vue";
const p = {};
const e = o({
  name: "SText",
  props: p,
  setup(t) {
    return () => n("div", {
      class: "s-text"
    }, [s("text")]);
  }
}), x = {
  install(t) {
    t.component(e.name, e);
  }
};
export {
  e as Text,
  x as default
};
