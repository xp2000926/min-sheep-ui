import { defineComponent as g, toRefs as i, createVNode as o } from "vue";
const b = {
  color: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  theme: {
    type: String,
    default: "dark"
  }
};
const l = g({
  name: "SColor",
  props: b,
  setup(e) {
    const {
      color: t,
      title: r,
      theme: s
    } = i(e);
    console.log(s.value);
    const n = ["rgb(83, 168, 255)", "rgb(102, 177, 255)", "rgb(121, 187, 255)", "rgb(140, 197, 255)", "rgb(160, 207, 255)", "rgb(179, 216, 255)", "rgb(198, 226, 255)", "rgb(217, 236, 255)", "rgb(236, 245, 255)", "rgb(245, 255, 255)"];
    return () => o("div", {
      class: "s-color",
      style: {
        backgroundColor: t.value
      }
    }, [o("div", {
      class: "title"
    }, [r.value]), o("div", {
      class: "color"
    }, [t.value]), o("div", {
      class: "bg-color-sub"
    }, [n.map((c, a) => o("div", {
      class: "bg-blue-sub-item",
      key: a,
      style: {
        backgroundColor: c
      }
    }, null))])]);
  }
}), u = {
  install(e) {
    e.component(l.name, l);
  }
};
export {
  l as Color,
  u as default
};
