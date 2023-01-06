import { defineComponent as b, ref as o, provide as s, createVNode as c, inject as u, Fragment as h } from "vue";
const g = {
  modelValue: {
    type: String,
    default: ""
  },
  closable: {
    type: Boolean,
    default: !1
  },
  addable: {
    type: Boolean,
    default: !1
  }
};
function T(e = 8) {
  const l = "abcdefghijklmnopqrstuvwxyz0123456789";
  let t = "";
  for (let i = 0; i < e; i++)
    t += l[parseInt((Math.random() * l.length).toString())];
  return t;
}
const r = b({
  name: "STabs",
  props: g,
  emits: ["update:modelValue"],
  setup(e, {
    slots: l
  }) {
    const t = o([]);
    s("active-data", t);
    const i = o(e.modelValue);
    s("active-tab", i);
    const d = (a) => {
      i.value = a;
    }, m = (a) => {
      const n = t.value.findIndex((f) => f.id === a);
      t.value.splice(n, 1);
    }, p = () => {
      const a = T();
      t.value.push({
        id: a,
        type: "random",
        title: `Tab ${a}`,
        content: `Tab ${a} Content`
      }), i.value = a;
    };
    return () => {
      var a;
      return c("div", {
        class: "s-tabs"
      }, [c("ul", {
        class: "s-tabs__nav"
      }, [t.value.map((n) => c("li", {
        onClick: () => d(n.id),
        class: n.id === i.value ? "active" : ""
      }, [n.title, e.closable && c("svg", {
        onClick: () => m(n.id),
        style: "margin-left: 8px;",
        viewBox: "0 0 1024 1024",
        width: "12",
        height: "12"
      }, [c("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])])), e.addable && c("li", null, [c("svg", {
        onClick: p,
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14"
      }, [c("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)])])]), (a = l.default) == null ? void 0 : a.call(l), t.value.filter((n) => n.type === "random").map((n) => c("div", {
        class: "s-tab"
      }, [n.id === i.value ? n.content : ""]))]);
    };
  }
}), x = {
  id: {
    type: String,
    required: !0
  },
  title: {
    type: String,
    required: !0
  }
};
const v = b({
  name: "STab",
  props: x,
  setup(e, {
    slots: l
  }) {
    const t = u("active-tab");
    return u("active-data").value.push({
      id: e.id,
      title: e.title
    }), () => {
      var d;
      return c(h, null, [e.id === t.value && c("div", {
        class: "s-tab"
      }, [(d = l.default) == null ? void 0 : d.call(l)])]);
    };
  }
}), V = {
  install(e) {
    e.component(r.name, r), e.component(v.name, v);
  }
};
export {
  v as Tab,
  r as Tabs,
  V as default
};
