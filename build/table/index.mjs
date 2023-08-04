import { defineComponent as f, toRefs as s, ref as h, provide as y, createVNode as t, inject as C } from "vue";
const T = {
  data: {
    type: Array,
    default: () => []
  }
};
const i = f({
  name: "STable",
  props: T,
  setup(a, {
    slots: e
  }) {
    const {
      data: l
    } = s(a), u = h([]);
    return y("column-data", u), () => {
      var r;
      return t("table", {
        class: "s-table"
      }, [t("thead", null, [t("tr", null, [(r = e.default) == null ? void 0 : r.call(e)])]), t("tbody", null, [l.value.map((o) => t("tr", null, [u.value.map((p, v) => {
        var c, d, m;
        const n = (c = e.default) == null ? void 0 : c.call(e)[v];
        return n != null && n.children ? t("td", null, [(m = (d = n == null ? void 0 : n.children).default) == null ? void 0 : m.call(d, o)]) : t("td", null, [p.prop ? o[p.prop] : ""]);
      })]))])]);
    };
  }
}), x = {
  prop: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  }
};
const b = f({
  name: "STableColumn",
  props: x,
  setup(a) {
    const {
      prop: e,
      title: l
    } = s(a);
    return C("column-data").value.push({
      prop: e.value,
      title: l.value
    }), () => t("th", {
      class: "s-table-column"
    }, [l.value]);
  }
}), g = {
  install(a) {
    a.component(i.name, i), a.component(b.name, b);
  }
};
export {
  i as Table,
  b as TableColumn,
  g as default
};
