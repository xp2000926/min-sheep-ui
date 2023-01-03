import { defineComponent as s, toRefs as c, createVNode as a } from "vue";
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
  }
};
const h = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
const w = s({
  name: "SBaseModal",
  props: h,
  emits: ["update:modelValue"],
  setup(l, {
    slots: e,
    emit: d
  }) {
    const {
      modelValue: t
    } = c(l);
    return () => {
      var o;
      return a("div", null, [t.value && a("div", {
        class: "s-base-modal"
      }, [a("div", {
        class: "s-base-modal__mask",
        onClick: () => {
          d("update:modelValue", !1);
        }
      }, null), (o = e.default) == null ? void 0 : o.call(e)])]);
    };
  }
}), r = s({
  name: "SModal",
  props: _,
  emits: ["update:modelValue"],
  setup(l, {
    slots: e,
    emit: d
  }) {
    const {
      modelValue: t,
      title: o,
      showClose: i,
      width: p,
      center: f,
      alignCenter: v
    } = c(l), V = v.value ? {
      marginTop: 0,
      top: "50%",
      transform: "translateY(-50%)"
    } : null;
    return () => a(w, {
      class: "s-modal",
      modelValue: t.value,
      "onUpdate:modelValue": () => {
        d("update:modelValue");
      }
    }, {
      default: () => {
        var n, u, m;
        return [a("div", {
          class: "s-modal__container",
          style: {
            width: p.value,
            ...V
          }
        }, [e.header ? (n = e.header) == null ? void 0 : n.call(e, {
          close: () => {
            d("update:modelValue", !1);
          }
        }) : a("div", {
          class: "s-modal__header",
          style: {
            textAlign: f.value ? "center" : "left"
          }
        }, [o.value, i.value && a("svg", {
          onClick: () => {
            d("update:modelValue", !1);
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
        }, [(u = e.default) == null ? void 0 : u.call(e)]), a("div", {
          className: "s-modal__footer"
        }, [(m = e.footer) == null ? void 0 : m.call(e)])])];
      }
    });
  }
}), g = {
  install(l) {
    l.component(r.name, r);
  }
};
export {
  r as Modal,
  g as default
};
