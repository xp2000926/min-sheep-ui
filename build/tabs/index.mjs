import { defineComponent as p, ref as s, provide as u, createVNode as l, inject as v, Fragment as g } from "vue";
const T = {
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
function x(t = 8) {
  const c = "abcdefghijklmnopqrstuvwxyz0123456789";
  let e = "";
  for (let i = 0; i < t; i++)
    e += c[parseInt((Math.random() * c.length).toString())];
  return e;
}
const r = p({
  name: "STabs",
  props: T,
  emits: ["update:modelValue"],
  setup(t, {
    slots: c
  }) {
    const e = s([]);
    u("active-data", e);
    const i = s(t.modelValue);
    u("active-tab", i);
    const d = (a) => {
      i.value = a;
    }, m = (a, n) => {
      const o = e.value.findIndex((h) => h.id === n);
      e.value.splice(o, 1), a.stopPropagation(), e.value.length === o ? d(e.value[o - 1].id) : d(e.value[o].id);
    }, f = () => {
      const a = x();
      e.value.push({
        id: a,
        type: "random",
        title: `Tab${a}`,
        content: `Tab${a} Content`
      }), i.value = a;
    };
    return () => {
      var a;
      return l("div", {
        class: "s-tabs"
      }, [l("ul", {
        class: "s-tabs__nav"
      }, [e.value.map((n) => l("li", {
        onClick: () => d(n.id),
        class: n.id === i.value ? "active" : ""
      }, [n.title, t.closable && l("svg", {
        onClick: (o) => m(o, n.id),
        style: "margin-left: 8px;",
        viewBox: "0 0 1024 1024",
        width: "12",
        height: "12"
      }, [l("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])])), t.addable && l("li", null, [l("svg", {
        onClick: f,
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14"
      }, [l("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)])])]), (a = c.default) == null ? void 0 : a.call(c), e.value.filter((n) => n.type === "random").map((n) => l("div", {
        class: "s-tab"
      }, [n.id === i.value && n.content]))]);
    };
  }
}), y = {
  id: {
    type: String,
    required: !0
  },
  title: {
    type: String,
    required: !0
  }
};
const b = p({
  name: "STab",
  props: y,
  setup(t, {
    slots: c
  }) {
    const e = v("active-tab");
    return v("active-data").value.push({
      id: t.id,
      title: t.title
    }), () => {
      var d;
      return l(g, null, [t.id === e.value && l("div", {
        class: "s-tab"
      }, [(d = c.default) == null ? void 0 : d.call(c)])]);
    };
  }
}), L = {
  install(t) {
    t.component(r.name, r), t.component(b.name, b);
  }
};
export {
  b as Tab,
  r as Tabs,
  L as default
};
