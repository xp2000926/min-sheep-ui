import { defineComponent as h, toRefs as T, inject as k, ref as v, nextTick as H, watch as S, createVNode as a, withDirectives as D, vModelCheckbox as V, Fragment as O, mergeProps as R, createTextVNode as E, provide as x } from "vue";
const I = {
  data: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: []
  },
  border: {
    type: Boolean,
    default: !1
  },
  stripe: {
    type: Boolean,
    default: !1
  },
  showSummary: { type: Boolean, default: !1 }
}, U = {
  columns: {
    type: Array,
    default: {}
  }
}, _ = {
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
const g = h({
  name: "STableColumn",
  props: _,
  setup(l) {
    const {
      prop: n,
      title: u,
      type: t
    } = T(l);
    k("column-data").value.push({
      prop: n.value,
      title: u.value,
      type: t.value
    });
    const e = k("all-checked"), o = k("is-indeterminate"), r = v();
    return H(() => {
      r.value && (r.value.indeterminate = o.value);
    }), S(o, () => {
      r.value && (r.value.indeterminate = o.value);
    }, {
      immediate: !0
    }), () => a("th", {
      class: "s-table-column"
    }, [t.value === "selection" ? D(a("input", {
      ref: r,
      type: "checkbox",
      "onUpdate:modelValue": (i) => e.value = i
    }, null), [[V, e.value]]) : u.value]);
  }
}), M = h({
  name: "STableHeader",
  props: U,
  setup(l) {
    const {
      columns: n
    } = T(l);
    return () => a(O, null, [n.value.map((u, t) => a(g, R(u, {
      key: t
    }), null))]);
  }
}), $ = h({
  name: "STableFooter",
  setup() {
    return () => a("div", {
      class: "table-footer"
    }, [E("table-footer")]);
  }
});
var C = {}, q = {
  get exports() {
    return C;
  },
  set exports(l) {
    C = l;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(l) {
  (function() {
    var n = {}.hasOwnProperty;
    function u() {
      for (var t = [], p = 0; p < arguments.length; p++) {
        var e = arguments[p];
        if (e) {
          var o = typeof e;
          if (o === "string" || o === "number")
            t.push(e);
          else if (Array.isArray(e)) {
            if (e.length) {
              var r = u.apply(null, e);
              r && t.push(r);
            }
          } else if (o === "object") {
            if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) {
              t.push(e.toString());
              continue;
            }
            for (var i in e)
              n.call(e, i) && e[i] && t.push(i);
          }
        }
      }
      return t.join(" ");
    }
    l.exports ? (u.default = u, l.exports = u) : window.classNames = u;
  })();
})(q);
const P = C;
const j = h({
  name: "STable",
  props: I,
  emits: ["selection-change"],
  setup(l, {
    slots: n,
    emit: u
  }) {
    const {
      data: t,
      border: p,
      stripe: e,
      columns: o,
      showSummary: r
    } = T(l), i = v([]);
    x("column-data", i), S(t, (s) => {
      const c = s.filter((b) => b.checked);
      c.length === t.value.length ? (f.value = !0, m.value = !1) : c.length === 0 ? (f.value = !1, m.value = !1) : m.value = !0, u("selection-change", c);
    }, {
      deep: !0
    });
    const f = v(t.value.every((s) => s.checked));
    x("all-checked", f), S(f, (s) => {
      t.value.forEach((c) => {
        c.checked = s;
      });
    });
    const m = v(t.value.some((s) => s.checked) && !f.value);
    return x("is-indeterminate", m), () => {
      var s;
      return a("table", {
        class: P("s-table", {
          "s-table--border": p.value,
          "s-table--striped": e.value
        })
      }, [a("thead", null, [a("tr", null, [o.value.length > 0 ? a(M, {
        columns: o.value
      }, null) : (s = n.default) == null ? void 0 : s.call(n)])]), a("tbody", null, [t.value.map((c, b) => a("tr", {
        class: P({
          "s-table__row--striped": b % 2 == 1 && e.value
        })
      }, [i.value.map((y, B) => {
        var w, A, N;
        const d = (w = n.default) == null ? void 0 : w.call(n)[B];
        return d != null && d.children ? a("td", null, [(N = (A = d == null ? void 0 : d.children).default) == null ? void 0 : N.call(A, c)]) : a("td", null, [y.prop ? c[y.prop] : y.type === "selection" ? D(a("input", {
          type: "checkbox",
          "onUpdate:modelValue": (F) => c.checked = F
        }, null), [[V, c.checked]]) : ""]);
      })]))]), r.value ? a($, null, null) : null]);
    };
  }
}), G = {
  install(l) {
    l.component(j.name, j), l.component(g.name, g);
  }
};
export {
  j as Table,
  g as TableColumn,
  G as default
};
