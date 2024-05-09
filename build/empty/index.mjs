import { defineComponent as s, toRefs as d, createVNode as e } from "vue";
const p = {
  image: String,
  imageSize: Number,
  description: String
};
const o = s({
  name: "SEmpty",
  props: p,
  setup(t, {
    slots: l
  }) {
    const {
      image: a,
      imageSize: n,
      description: i
    } = d(t);
    return () => {
      var r;
      return e("div", {
        class: "s-empty"
      }, [e("div", {
        class: "s-empty-image",
        style: `width:${n == null ? void 0 : n.value}px`
      }, [l.image ? l.image() : a.value ? e("img", {
        src: a.value
      }, null) : e("svg", {
        viewBox: "0 0 79 86",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, [e("defs", null, [e("linearGradient", {
        id: "linearGradient-1-el-id-8321-17",
        x1: "38.8503086%",
        y1: "0%",
        x2: "61.1496914%",
        y2: "100%"
      }, [e("stop", {
        "stop-color": "#fcfcfd",
        offset: "0%"
      }, null), e("stop", {
        "stop-color": "#eeeff3",
        offset: "100%"
      }, null)]), e("linearGradient", {
        id: "linearGradient-2-el-id-8321-17",
        x1: "0%",
        y1: "9.5%",
        x2: "100%",
        y2: "90.5%"
      }, [e("stop", {
        "stop-color": "#fcfcfd",
        offset: "0%"
      }, null), e("stop", {
        "stop-color": "#e9ebef",
        offset: "100%"
      }, null)]), e("rect", {
        id: "path-3-el-id-8321-17",
        x: "0",
        y: "0",
        width: "17",
        height: "36"
      }, null)]), e("g", {
        id: "Illustrations",
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd"
      }, [e("g", {
        id: "B-type",
        transform: "translate(-1268.000000, -535.000000)"
      }, [e("g", {
        id: "Group-2",
        transform: "translate(1268.000000, 535.000000)"
      }, [e("path", {
        id: "Oval-Copy-2",
        d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
        fill: "#f7f8fc"
      }, null), e("polygon", {
        id: "Rectangle-Copy-14",
        fill: "#e5e7e9",
        transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
        points: "13 58 53 58 42 45 2 45"
      }, null), e("g", {
        id: "Group-Copy",
        transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"
      }, [e("polygon", {
        id: "Rectangle-Copy-10",
        fill: "#e5e7e9",
        transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
        points: "2.84078316e-14 3 18 3 23 7 5 7"
      }, null), e("polygon", {
        id: "Rectangle-Copy-11",
        fill: "#edeef2",
        points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
      }, null), e("rect", {
        id: "Rectangle-Copy-12",
        fill: "url(#linearGradient-1-el-id-8321-17)",
        transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
        x: "38",
        y: "7",
        width: "17",
        height: "36"
      }, null), e("polygon", {
        id: "Rectangle-Copy-13",
        fill: "#f8f9fb",
        transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
        points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
      }, null)]), e("rect", {
        id: "Rectangle-Copy-15",
        fill: "url(#linearGradient-2-el-id-8321-17)",
        x: "13",
        y: "45",
        width: "40",
        height: "36"
      }, null), e("g", {
        id: "Rectangle-Copy-17",
        transform: "translate(53.000000, 45.000000)"
      }, [e("use", {
        id: "Mask",
        fill: "#e0e3e9",
        transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000)",
        "xlink:href": "#path-3-el-id-8321-17"
      }, null), e("polygon", {
        id: "Rectangle-Copy",
        fill: "#d5d7de",
        mask: "url(#mask-4-el-id-8321-17)",
        transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
        points: "7 0 24 0 20 18 7 16.5"
      }, null)]), e("polygon", {
        id: "Rectangle-Copy-18",
        fill: "#f8f9fb",
        transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
        points: "62 45 79 45 70 58 53 58"
      }, null)])])])])]), e("div", {
        class: "s-empty-description"
      }, [l.description ? l.description() : i.value ? i.value : "暂无数据"]), e("div", {
        class: "s-empty-footer"
      }, [(r = l.default) == null ? void 0 : r.call(l)])]);
    };
  }
}), c = {
  install(t) {
    t.component(o.name, o);
  }
};
export {
  o as Empty,
  c as default
};
