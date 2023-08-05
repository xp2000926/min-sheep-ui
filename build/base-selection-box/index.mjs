import { defineComponent as b, createVNode as i } from "vue";
const r = {
  onClick: {
    type: Function,
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  marginRight: {
    type: Number,
    default: 8
  }
};
var d = {}, p = {
  get exports() {
    return d;
  },
  set exports(e) {
    d = e;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var f = {}.hasOwnProperty;
    function l() {
      for (var a = [], t = 0; t < arguments.length; t++) {
        var s = arguments[t];
        if (s) {
          var c = typeof s;
          if (c === "string" || c === "number")
            a.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var u = l.apply(null, s);
              u && a.push(u);
            }
          } else if (c === "object") {
            if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) {
              a.push(s.toString());
              continue;
            }
            for (var o in s)
              f.call(s, o) && s[o] && a.push(o);
          }
        }
      }
      return a.join(" ");
    }
    e.exports ? (l.default = l, e.exports = l) : window.classNames = l;
  })();
})(p);
const n = d, m = b({
  name: "SBaseSelectAll",
  props: r,
  setup(e) {
    return () => i("label", {
      class: n("s-base-select-all", "is-checked", {
        "is-disabled": e.disabled
      }),
      style: {
        marginRight: e.marginRight + "px"
      }
    }, [i("span", {
      class: n("s-base-select-all__input", "is-checked", {
        "is-disabled": e.disabled
      })
    }, [i("span", {
      class: "s-base-select-all__inner"
    }, null), i("input", {
      type: "checkbox",
      disabled: e.disabled,
      "aria-hidden": "false",
      class: "s-base-select-all__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        e.onClick();
      }
    }, null)])]);
  }
});
const x = b({
  name: "SBaseSelectionBox",
  props: r,
  setup(e) {
    return () => i("label", {
      class: n("s-base-selection-box", {
        "is-disabled": e.disabled
      }),
      style: {
        marginRight: e.marginRight + "px"
      }
    }, [i("span", {
      class: n("s-base-selection-box__input", {
        "is-disabled": e.disabled
      })
    }, [i("span", {
      class: "s-base-selection-box__inner"
    }, null), i("input", {
      type: "checkbox",
      disabled: e.disabled,
      "aria-hidden": "false",
      class: "s-base-selection-box__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        e.onClick();
      }
    }, null)])]);
  }
});
const h = b({
  name: "SBaseSemiSelection",
  props: r,
  setup(e) {
    return () => i("label", {
      class: n("s-base-semi-selection", {
        "is-disabled": e.disabled
      }),
      style: {
        marginRight: e.marginRight + "px"
      }
    }, [i("span", {
      class: n("s-base-semi-selection__input", "is-indeterminate", {
        "is-disabled": e.disabled
      }),
      tabindex: "0",
      role: "checkbox",
      "aria-checked": "mixed"
    }, [i("span", {
      class: "s-base-semi-selection__inner"
    }, null), i("input", {
      type: "checkbox",
      "aria-hidden": "true",
      disabled: e.disabled,
      class: "s-base-semi-selection__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        e.onClick();
      }
    }, null)])]);
  }
}), _ = {
  install(e) {
    e.component(m.name, m), e.component(x.name, x), e.component(h.name, h);
  }
};
export {
  m as BaseSelectAll,
  x as BaseSelectionBox,
  h as BaseSemiSelection,
  _ as default
};
