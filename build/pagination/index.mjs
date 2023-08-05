import { ref as m, defineComponent as P, toRefs as C, computed as i, createVNode as r, Fragment as k, createTextVNode as c, onMounted as y, watch as d, mergeProps as I } from "vue";
const v = {
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
  },
  hideOnSinglePage: {
    type: Boolean,
    default: !0
  }
};
function N(t = 1) {
  const a = m(t), e = (s) => {
    a.value = s;
  }, n = (s) => {
    a.value += s;
  };
  return {
    pageIndex: a,
    setPageIndex: e,
    jumpPage: n,
    prevPage: () => n(-1),
    nextPage: () => n(1)
  };
}
const S = (t, a, e) => {
  const n = Array.from(Array(t).keys());
  if (t <= e)
    return n.slice(2, t);
  {
    const l = Math.ceil(e / 2);
    return a <= l ? n.slice(2, e) : a >= t - l + 1 ? n.slice(t - e + 2, t) : n.slice(a - l + 2, a + l - 1);
  }
}, V = v, g = P({
  name: "SPager",
  props: V,
  setup(t) {
    const {
      total: a,
      pageSize: e,
      pagerCount: n,
      hideOnSinglePage: l
    } = C(t), u = i(() => Math.ceil(a.value / e.value)), {
      pageIndex: s,
      setPageIndex: o,
      jumpPage: f,
      prevPage: x,
      nextPage: h
    } = N(), b = i(() => S(u.value, s.value, n.value));
    return {
      totalPage: u,
      pageIndex: s,
      setPageIndex: o,
      jumpPage: f,
      prevPage: x,
      nextPage: h,
      centerPages: b,
      hideOnSinglePage: l
    };
  },
  render() {
    const {
      pagerCount: t,
      totalPage: a,
      pageIndex: e,
      setPageIndex: n,
      jumpPage: l,
      centerPages: u,
      hideOnSinglePage: s
    } = this;
    return r(k, null, [s && u.length >= 0 && r("ul", {
      class: "s-pager"
    }, [r("li", {
      onClick: () => n(1),
      class: {
        current: e === 1
      }
    }, [c("1")]), a > t && e > Math.ceil(t / 2) && r("li", {
      class: "more left",
      onClick: () => l(-5)
    }, [c("...")]), u.map((o) => r("li", {
      onClick: () => n(o),
      class: {
        current: e === o
      }
    }, [o])), a > t && e < a - Math.ceil(t / 2) + 1 && r("li", {
      class: "more right",
      onClick: () => l(5)
    }, [c("...")]), a > 1 && r("li", {
      onClick: () => n(a),
      class: {
        current: e === a
      }
    }, [a])])]);
  }
}), p = P({
  name: "SPagination",
  props: v,
  emits: ["update:modelValue"],
  setup(t, {
    emit: a
  }) {
    const e = m(), n = i(() => e.value ? e.value.pageIndex < 2 : !0), l = i(() => e.value ? e.value.pageIndex > e.value.totalPage - 1 : !0);
    return y(() => {
      d(() => e.value.pageIndex, (u) => {
        a("update:modelValue", u);
      }), d(() => t.modelValue, (u) => {
        e.value.pageIndex = u;
      });
    }), () => r("div", {
      class: "s-pagination"
    }, [r("button", {
      disabled: n.value,
      onClick: () => e.value.prevPage()
    }, [c("上一页")]), r(g, I(t, {
      ref: e
    }), null), r("button", {
      disabled: l.value,
      onClick: () => e.value.nextPage()
    }, [c("下一页")])]);
  }
}), A = {
  install(t) {
    t.component(p.name, p), t.component(g.name, g);
  }
};
export {
  g as Pager,
  p as Pagination,
  A as default
};
