import { defineComponent as s, toRefs as c, createVNode as a, computed as C } from "vue";
const _ = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  title: {
    type: String,
    default: ""
  },
  showClose: {
    type: Boolean,
    default: !0
  },
  width: {
    type: String,
    default: "30%"
  },
  center: {
    type: Boolean,
    default: !1
  },
  alignCenter: {
    type: Boolean,
    default: !1
  },
  backgroundColor: {
    type: String,
    default: ""
  },
  top: {
    type: [String, Number],
    default: "15vh"
  }
};
const w = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
const b = s({
  name: "SBaseModal",
  props: w,
  emits: ["update:modelValue"],
  setup(l, {
    slots: e,
    emit: o
  }) {
    const {
      modelValue: t
    } = c(l);
    return () => {
      var d;
      return a("div", null, [t.value && a("div", {
        class: "s-base-modal"
      }, [a("div", {
        class: "s-base-modal__mask",
        onClick: () => {
          o("update:modelValue", !1);
        }
      }, null), (d = e.default) == null ? void 0 : d.call(e)])]);
    };
  }
}), p = s({
  name: "SModal",
  props: _,
  emits: ["update:modelValue"],
  setup(l, {
    slots: e,
    emit: o
  }) {
    const {
      modelValue: t,
      title: d,
      showClose: i,
      width: f,
      center: v,
      alignCenter: g,
      backgroundColor: y,
      top: n
    } = c(l), V = g.value ? {
      marginTop: 0,
      top: "50%",
      transform: "translateY(-50%)"
    } : null, h = C(() => typeof n.value == "number" ? `${n.value}px` : n.value);
    return () => a(b, {
      class: "s-modal",
      modelValue: t.value,
      "onUpdate:modelValue": () => {
        o("update:modelValue");
      }
    }, {
      default: () => {
        var u, r, m;
        return [a("div", {
          class: "s-modal__container",
          style: {
            width: f.value,
            ...V,
            marginTop: h.value,
            backgroundColor: y.value
          }
        }, [e.header ? (u = e.header) == null ? void 0 : u.call(e, {
          close: () => {
            o("update:modelValue", !1);
          }
        }) : a("div", {
          class: "s-modal__header",
          style: {
            textAlign: v.value ? "center" : "left"
          }
        }, [d.value, i.value && a("svg", {
          onClick: () => {
            o("update:modelValue", !1);
          },
          class: "s-modal__close",
          viewBox: "0 0 1024 1024",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg"
        }, [a("path", {
          fill: "currentColor",
          d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
        }, null)])]), a("div", {
          className: "s-modal__body"
        }, [(r = e.default) == null ? void 0 : r.call(e)]), a("div", {
          className: "s-modal__footer"
        }, [(m = e.footer) == null ? void 0 : m.call(e)])])];
      }
    });
  }
}), x = {
  install(l) {
    l.component(p.name, p);
  }
};
export {
  p as Modal,
  x as default
};
