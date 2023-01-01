import { ref as g, defineComponent as m, toRefs as C, computed as c, createVNode as r, createTextVNode as o, onMounted as k, watch as d, mergeProps as h } from "vue";
const P = {
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  modelValue: {
    type: Number,
    default: 1
  }
};
function y(t = 1) {
  const a = g(t), e = (u) => {
    a.value = u;
  }, n = (u) => {
    a.value += u;
  };
  return {
    pageIndex: a,
    setPageIndex: e,
    jumpPage: n,
    prevPage: () => n(-1),
    nextPage: () => n(1)
  };
}
const I = (t, a, e) => {
  const n = Array.from(Array(t).keys());
  if (t <= e)
    return n.slice(2, t);
  {
    const l = Math.ceil(e / 2);
    return a <= l ? n.slice(2, e) : a >= t - l + 1 ? n.slice(t - e + 2, t) : n.slice(a - l + 2, a + l - 1);
  }
}, N = P, i = m({
  name: "SPager",
  props: N,
  setup(t) {
    const {
      total: a,
      pageSize: e,
      pagerCount: n
    } = C(t), l = c(() => Math.ceil(a.value / e.value)), {
      pageIndex: s,
      setPageIndex: u,
      jumpPage: v,
      prevPage: f,
      nextPage: x
    } = y(), b = c(() => I(l.value, s.value, n.value));
    return {
      totalPage: l,
      pageIndex: s,
      setPageIndex: u,
      jumpPage: v,
      prevPage: f,
      nextPage: x,
      centerPages: b
    };
  },
  render() {
    const {
      pagerCount: t,
      totalPage: a,
      pageIndex: e,
      setPageIndex: n,
      jumpPage: l,
      centerPages: s
    } = this;
    return r("ul", {
      class: "s-pager"
    }, [r("li", {
      onClick: () => n(1),
      class: {
        current: e === 1
      }
    }, [o("1")]), a > t && e > Math.ceil(t / 2) && r("li", {
      class: "more left",
      onClick: () => l(-5)
    }, [o("...")]), s.map((u) => r("li", {
      onClick: () => n(u),
      class: {
        current: e === u
      }
    }, [u])), a > t && e < a - Math.ceil(t / 2) + 1 && r("li", {
      class: "more right",
      onClick: () => l(5)
    }, [o("...")]), a > 1 && r("li", {
      onClick: () => n(a),
      class: {
        current: e === a
      }
    }, [a])]);
  }
}), p = m({
  name: "SPagination",
  props: P,
  emits: ["update:modelValue"],
  setup(t, {
    emit: a
  }) {
    const e = g(), n = c(() => e.value ? e.value.pageIndex < 2 : !0), l = c(() => e.value ? e.value.pageIndex > e.value.totalPage - 1 : !0);
    return k(() => {
      d(() => e.value.pageIndex, (s) => {
        a("update:modelValue", s);
      }), d(() => t.modelValue, (s) => {
        e.value.pageIndex = s;
      });
    }), () => r("div", {
      class: "s-pagination"
    }, [r("button", {
      disabled: n.value,
      onClick: () => e.value.prevPage()
    }, [o("上一页")]), r(i, h(t, {
      ref: e
    }), null), r("button", {
      disabled: l.value,
      onClick: () => e.value.nextPage()
    }, [o("下一页")])]);
  }
}), M = {
  install(t) {
    t.component(p.name, p), t.component(i.name, i);
  }
};
export {
  i as Pager,
  p as Pagination,
  M as default
};
