import { defineComponent as x, toRefs as b, ref as l, computed as d, onMounted as H, createVNode as s } from "vue";
const L = {
  data: {
    type: Array,
    default: []
  },
  itemHeight: {
    type: Number,
    default: 22
  },
  component: {
    type: String,
    default: "div"
  }
};
const f = x({
  name: "SVirtualList",
  props: L,
  setup(n, {
    slots: o
  }) {
    const {
      data: i,
      itemHeight: a,
      component: m
    } = b(n), r = l(), c = l(0), v = l(0), u = l(0), h = d(() => Math.ceil(c.value / a.value)), g = d(() => i.value.slice(u.value, Math.min(u.value + h.value, i.value.length)));
    H(() => {
      var t;
      c.value = (t = r.value) == null ? void 0 : t.clientHeight;
    });
    const y = (t) => {
      const {
        scrollTop: e
      } = t.target;
      u.value = Math.floor(e / a.value), v.value = e - e % a.value;
    };
    return () => s(m.value, {
      class: "s-virtual-list__container",
      ref: r,
      onScroll: y
    }, {
      default: () => [s("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${i.value.length * a.value}px`
        }
      }, null), s("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${v.value}px, 0)`
        }
      }, [g.value.map((t, e) => {
        var p;
        return (p = o.default) == null ? void 0 : p.call(o, {
          item: t,
          index: e
        });
      })])]
    });
  }
}), _ = {
  install(n) {
    n.component(f.name, f);
  }
};
export {
  f as VirtualList,
  _ as default
};
