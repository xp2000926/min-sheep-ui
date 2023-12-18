import { defineComponent as o, createVNode as t, createTextVNode as s } from "vue";
const i = {};
const e = o({
  name: "SLink",
  props: i,
  setup(n) {
    return () => t("div", {
      class: "s-link"
    }, [s("link")]);
  }
}), r = {
  install(n) {
    n.component(e.name, e);
  }
};
export {
  e as Link,
  r as default
};
