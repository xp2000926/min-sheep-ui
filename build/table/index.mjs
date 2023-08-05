import { defineComponent as x, toRefs as C, ref as p, provide as v, watch as m, createVNode as a, withDirectives as T, vModelCheckbox as D, inject as h, nextTick as I } from "vue";
const P = {
  data: {
    type: Array,
    default: () => []
  }
};
const y = x({
  name: "STable",
  props: P,
  emits: ["selection-change"],
  setup(i, {
    slots: n,
    emit: r
  }) {
    const {
      data: l
    } = C(i), s = p([]);
    v("column-data", s), m(l, (e) => {
      const t = e.filter((o) => o.checked);
      t.length === l.value.length ? (c.value = !0, u.value = !1) : t.length === 0 ? (c.value = !1, u.value = !1) : u.value = !0, r("selection-change", t);
    }, {
      deep: !0
    });
    const c = p(l.value.every((e) => e.checked));
    v("all-checked", c), m(c, (e) => {
      l.value.forEach((t) => {
        t.checked = e;
      });
    });
    const u = p(l.value.some((e) => e.checked) && !c.value);
    return v("is-indeterminate", u), () => {
      var e;
      return a("table", {
        class: "s-table"
      }, [a("thead", null, [a("tr", null, [(e = n.default) == null ? void 0 : e.call(n)])]), a("tbody", null, [l.value.map((t) => a("tr", null, [s.value.map((o, R) => {
        var f, b, k;
        const d = (f = n.default) == null ? void 0 : f.call(n)[R];
        return d != null && d.children ? a("td", null, [(k = (b = d == null ? void 0 : d.children).default) == null ? void 0 : k.call(b, t)]) : a("td", null, [o.prop ? t[o.prop] : o.type === "selection" ? T(a("input", {
          type: "checkbox",
          "onUpdate:modelValue": (V) => t.checked = V
        }, null), [[D, t.checked]]) : ""]);
      })]))])]);
    };
  }
}), S = {
  prop: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: ""
  }
};
const g = x({
  name: "STableColumn",
  props: S,
  setup(i) {
    const {
      prop: n,
      title: r,
      type: l
    } = C(i);
    h("column-data").value.push({
      prop: n.value,
      title: r.value,
      type: l.value
    });
    const c = h("all-checked"), u = h("is-indeterminate"), e = p();
    return I(() => {
      e.value && (e.value.indeterminate = u.value);
    }), m(u, () => {
      e.value && (e.value.indeterminate = u.value);
    }, {
      immediate: !0
    }), () => a("th", {
      class: "s-table-column"
    }, [l.value === "selection" ? T(a("input", {
      ref: e,
      type: "checkbox",
      "onUpdate:modelValue": (t) => c.value = t
    }, null), [[D, c.value]]) : r.value]);
  }
}), j = {
  install(i) {
    i.component(y.name, y), i.component(g.name, g);
  }
};
export {
  y as Table,
  g as TableColumn,
  j as default
};
