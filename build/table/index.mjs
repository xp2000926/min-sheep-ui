import { defineComponent as R, toRefs as E, inject as k, ref as C, nextTick as I, watch as w, createVNode as t, withDirectives as g, vModelCheckbox as j, provide as S, computed as _, createTextVNode as M, mergeProps as A } from "vue";
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
  showSummary: { type: Boolean, default: !1 },
  headerCellStyle: {
    type: [Object, Function],
    default: {}
  },
  showHeader: {
    type: Boolean,
    default: !0
  },
  headerRowClassName: {
    type: [Object, Function],
    default: {}
  }
}, q = {
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
const x = R({
  name: "STableColumn",
  props: q,
  setup(s) {
    const {
      prop: a,
      title: c,
      type: l
    } = E(s);
    k("column-data").value.push({
      prop: a.value,
      title: c.value,
      type: l.value
    });
    const e = k("all-checked"), i = k("is-indeterminate"), r = C();
    I(() => {
      r.value && (r.value.indeterminate = i.value);
    }), w(i, () => {
      r.value && (r.value.indeterminate = i.value);
    }, {
      immediate: !0
    });
    const n = k("is-table-thead-styles");
    return () => n.isStyles == !1 ? n.columnData.map((h, y) => t("th", {
      class: "s-table-column",
      style: n.headerCellStyle({
        row: n.columnData,
        column: h,
        rowIndex: 1,
        columnIndex: y
      })
    }, [l.value === "selection" ? g(t("input", {
      ref: r,
      type: "checkbox",
      "onUpdate:modelValue": (p) => e.value = p
    }, null), [[j, e.value]]) : c.value])) : t("th", {
      class: "s-table-column"
    }, [l.value === "selection" ? g(t("input", {
      ref: r,
      type: "checkbox",
      "onUpdate:modelValue": (h) => e.value = h
    }, null), [[j, e.value]]) : c.value]);
  }
});
var D = {}, z = {
  get exports() {
    return D;
  },
  set exports(s) {
    D = s;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(s) {
  (function() {
    var a = {}.hasOwnProperty;
    function c() {
      for (var l = [], f = 0; f < arguments.length; f++) {
        var e = arguments[f];
        if (e) {
          var i = typeof e;
          if (i === "string" || i === "number")
            l.push(e);
          else if (Array.isArray(e)) {
            if (e.length) {
              var r = c.apply(null, e);
              r && l.push(r);
            }
          } else if (i === "object") {
            if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) {
              l.push(e.toString());
              continue;
            }
            for (var n in e)
              a.call(e, n) && e[n] && l.push(n);
          }
        }
      }
      return l.join(" ");
    }
    s.exports ? (c.default = c, s.exports = c) : window.classNames = c;
  })();
})(z);
const H = D;
const P = R({
  name: "STable",
  props: $,
  emits: ["selection-change"],
  setup(s, {
    slots: a,
    emit: c
  }) {
    const {
      data: l,
      border: f,
      stripe: e,
      columns: i,
      showSummary: r,
      headerCellStyle: n,
      showHeader: h
    } = E(s), y = C([]);
    S("column-data", y), w(l, (u) => {
      const o = u.filter((d) => d.checked);
      o.length === l.value.length ? (p.value = !0, b.value = !1) : o.length === 0 ? (p.value = !1, b.value = !1) : b.value = !0, c("selection-change", o);
    }, {
      deep: !0
    });
    const p = C(l.value.every((u) => u.checked));
    S("all-checked", p), w(p, (u) => {
      l.value.forEach((o) => {
        o.checked = u;
      });
    });
    const b = C(l.value.some((u) => u.checked) && !p.value);
    S("is-indeterminate", b);
    const N = _(() => typeof n.value == "object");
    S("is-table-thead-styles", {
      isStyles: N.value,
      headerCellStyle: n.value
    });
    const T = (u, o = 0) => u.map((d, v) => d.children ? (o++, u(d.children, o)) : typeof n.value == "function" ? t(x, A(d, {
      key: v,
      style: n.value({
        row: u,
        column: d,
        rowIndex: o,
        columnIndex: v
      })
    }), null) : t(x, A(d, {
      key: v
    }), null));
    return () => {
      var u;
      return t("table", {
        class: H("s-table", {
          "s-table--border": f.value,
          "s-table--striped": e.value
        })
      }, [a.title ? t("div", {
        class: "table-title"
      }, [a.title()]) : null, t("thead", {
        style: h.value ? "" : "display:none"
      }, [t("tr", {
        style: N.value ? n.value : {}
      }, [i.value.length > 0 ? T(i.value) : (u = a.default) == null ? void 0 : u.call(a)])]), t("tbody", null, [l.value.length > 0 ? l.value.map((o, d) => t("tr", {
        class: H({
          "s-table__row--striped": d % 2 == 1 && e.value
        })
      }, [y.value.map((v, U) => {
        var B, O, V;
        const m = (B = a.default) == null ? void 0 : B.call(a)[U];
        return m != null && m.children ? t("td", null, [(V = (O = m == null ? void 0 : m.children).default) == null ? void 0 : V.call(O, o)]) : t("td", null, [v.prop ? o[v.prop] : v.type === "selection" ? g(t("input", {
          type: "checkbox",
          "onUpdate:modelValue": (F) => o.checked = F
        }, null), [[j, o.checked]]) : ""]);
      })])) : t("tr", {
        class: "s-table-placeholder"
      }, [t("td", {
        colspan: 3
      }, [t("div", {
        class: "ant-empty-description"
      }, [a.empty ? a.empty() : "暂无数据"])])])]), a.footer ? t("div", {
        class: "table-footer"
      }, [a.footer()]) : null, r.value ? t("div", {
        class: "table-summary"
      }, [M("总结")]) : null]);
    };
  }
}), J = {
  install(s) {
    s.component(P.name, P), s.component(x.name, x);
  }
};
export {
  P as Table,
  x as TableColumn,
  J as default
};
