import { defineComponent as m, createVNode as e, createTextVNode as j, toRefs as w, inject as k, ref as y, nextTick as E, watch as T, withDirectives as D, vModelCheckbox as B, Fragment as I, mergeProps as U, provide as x, isVNode as M } from "vue";
const $ = {
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
  stripe: { type: Boolean, default: !1 },
  showSummary: { type: Boolean, default: !1 }
}, q = m({
  name: "STableTitle",
  setup() {
    return () => e("div", {
      class: "table-title"
    }, [j("table-footer")]);
  }
}), z = {
  columns: {
    type: Array,
    default: {}
  }
}, G = {
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
const g = m({
  name: "STableColumn",
  props: G,
  setup(n) {
    const {
      prop: t,
      title: u,
      type: l
    } = w(n);
    k("column-data").value.push({
      prop: t.value,
      title: u.value,
      type: l.value
    });
    const a = k("all-checked"), r = k("is-indeterminate"), c = y();
    return E(() => {
      c.value && (c.value.indeterminate = r.value);
    }), T(r, () => {
      c.value && (c.value.indeterminate = r.value);
    }, {
      immediate: !0
    }), () => e("th", {
      class: "s-table-column"
    }, [l.value === "selection" ? D(e("input", {
      ref: c,
      type: "checkbox",
      "onUpdate:modelValue": (i) => a.value = i
    }, null), [[B, a.value]]) : u.value]);
  }
}), J = m({
  name: "STableHeader",
  props: z,
  setup(n) {
    const {
      columns: t
    } = w(n);
    return () => e(I, null, [t.value.map((u, l) => e(g, U(u, {
      key: l
    }), null))]);
  }
}), K = m({
  name: "STableFooter",
  setup() {
    return () => e("div", {
      class: "table-footer"
    }, [j("table-footer")]);
  }
}), L = m({
  name: "STableSummary",
  setup() {
    return () => e("div", {
      class: "table-summary"
    }, [j("table-footer")]);
  }
});
var C = {}, Q = {
  get exports() {
    return C;
  },
  set exports(n) {
    C = n;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(n) {
  (function() {
    var t = {}.hasOwnProperty;
    function u() {
      for (var l = [], p = 0; p < arguments.length; p++) {
        var a = arguments[p];
        if (a) {
          var r = typeof a;
          if (r === "string" || r === "number")
            l.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var c = u.apply(null, a);
              c && l.push(c);
            }
          } else if (r === "object") {
            if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
              l.push(a.toString());
              continue;
            }
            for (var i in a)
              t.call(a, i) && a[i] && l.push(i);
          }
        }
      }
      return l.join(" ");
    }
    n.exports ? (u.default = u, n.exports = u) : window.classNames = u;
  })();
})(Q);
const P = C;
function V(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !M(n);
}
const _ = m({
  name: "STable",
  props: $,
  emits: ["selection-change"],
  setup(n, {
    slots: t,
    emit: u
  }) {
    const {
      data: l,
      border: p,
      stripe: a,
      columns: r,
      showSummary: c
    } = w(n), i = y([]);
    x("column-data", i), T(l, (o) => {
      const s = o.filter((b) => b.checked);
      s.length === l.value.length ? (f.value = !0, v.value = !1) : s.length === 0 ? (f.value = !1, v.value = !1) : v.value = !0, u("selection-change", s);
    }, {
      deep: !0
    });
    const f = y(l.value.every((o) => o.checked));
    x("all-checked", f), T(f, (o) => {
      l.value.forEach((s) => {
        s.checked = o;
      });
    });
    const v = y(l.value.some((o) => o.checked) && !f.value);
    return x("is-indeterminate", v), () => {
      var b;
      let o, s;
      return e("table", {
        class: P("s-table", {
          "s-table--border": p.value,
          "s-table--striped": a.value
        })
      }, [t.title ? e(q, null, V(o = t.title()) ? o : {
        default: () => [o]
      }) : null, e("thead", null, [e("tr", null, [r.value.length > 0 ? e(J, {
        columns: r.value
      }, null) : (b = t.default) == null ? void 0 : b.call(t)])]), e("tbody", null, [l.value.length > 0 ? l.value.map((h, F) => e("tr", {
        class: P({
          "s-table__row--striped": F % 2 == 1 && a.value
        })
      }, [i.value.map((S, H) => {
        var N, A, O;
        const d = (N = t.default) == null ? void 0 : N.call(t)[H];
        return d != null && d.children ? e("td", null, [(O = (A = d == null ? void 0 : d.children).default) == null ? void 0 : O.call(A, h)]) : e("td", null, [S.prop ? h[S.prop] : S.type === "selection" ? D(e("input", {
          type: "checkbox",
          "onUpdate:modelValue": (R) => h.checked = R
        }, null), [[B, h.checked]]) : ""]);
      })])) : e("tr", {
        class: "s-table-placeholder"
      }, [e("td", {
        colspan: 3
      }, [e("div", {
        class: "ant-empty-description"
      }, [t.empty ? t.empty() : "暂无数据"])])])]), t.footer ? e(K, null, V(s = t.footer()) ? s : {
        default: () => [s]
      }) : c.value ? e(L, null, null) : null]);
    };
  }
}), X = {
  install(n) {
    n.component(_.name, _), n.component(g.name, g);
  }
};
export {
  _ as Table,
  g as TableColumn,
  X as default
};
