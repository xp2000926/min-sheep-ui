import { ref as m, defineComponent as P, toRefs as k, computed as i, createVNode as s, Fragment as y, createTextVNode as c, onMounted as C, watch as g, mergeProps as N } from "vue";
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
    default: 5
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
function S(n = 1) {
  const t = m(n), e = (r) => {
    t.value = r;
  }, a = (r) => {
    t.value += r;
  };
  return {
    pageIndex: t,
    setPageIndex: e,
    jumpPage: a,
    prevPage: () => a(-1),
    nextPage: () => a(1)
  };
}
const I = (n, t, e) => {
  console.log(n, t, e);
  const a = Array.from(Array(n).keys());
  if (n <= e)
    return a.slice(2, n);
  {
    const l = Math.ceil(e / 2);
    return t <= l ? a.slice(2, e) : t >= n - l + 1 ? a.slice(n - e + 2, n) : a.slice(t - l + 2, t + l - 1);
  }
}, V = v, d = P({
  name: "SPager",
  props: V,
  setup(n) {
    const {
      total: t,
      pageSize: e,
      pagerCount: a,
      hideOnSinglePage: l
    } = k(n), o = i(() => Math.ceil(t.value / e.value)), {
      pageIndex: r,
      setPageIndex: u,
      jumpPage: f,
      prevPage: x,
      nextPage: h
    } = S(), b = i(() => I(o.value, r.value, a.value));
    return {
      totalPage: o,
      pageIndex: r,
      setPageIndex: u,
      jumpPage: f,
      prevPage: x,
      nextPage: h,
      centerPages: b,
      hideOnSinglePage: l
    };
  },
  render() {
    const {
      pagerCount: n,
      totalPage: t,
      pageIndex: e,
      setPageIndex: a,
      jumpPage: l,
      centerPages: o,
      hideOnSinglePage: r
    } = this;
    return s(y, null, [r && o.length >= 0 && s("ul", {
      class: "s-pager"
    }, [s("li", {
      onClick: () => a(1),
      class: {
        current: e === 1
      }
    }, [c("1")]), t > n && e > Math.ceil(n / 2) && s("li", {
      class: "more left",
      onClick: () => l(-5)
    }, [c("...")]), o.map((u) => s("li", {
      onClick: () => a(u),
      class: {
        current: e === u
      }
    }, [u])), t > n && e < t - Math.ceil(n / 2) + 1 && s("li", {
      class: "more right",
      onClick: () => l(5)
    }, [c("...")]), t > 1 && s("li", {
      onClick: () => a(t),
      class: {
        current: e === t
      }
    }, [t])])]);
  }
}), p = P({
  name: "SPagination",
  props: v,
  emits: ["update:modelValue"],
  setup(n, {
    emit: t
  }) {
    const e = m(), a = i(() => e.value ? e.value.pageIndex < 2 : !0), l = i(() => e.value ? e.value.pageIndex > e.value.totalPage - 1 : !0);
    return C(() => {
      g(() => e.value.pageIndex, (o) => {
        t("update:modelValue", o);
      }), g(() => n.modelValue, (o) => {
        e.value.pageIndex = o;
      });
    }), () => s("div", {
      class: "s-pagination"
    }, [s("button", {
      disabled: a.value,
      onClick: () => e.value.prevPage()
    }, [c("上一页")]), s(d, N(n, {
      ref: e
    }), null), s("button", {
      disabled: l.value,
      onClick: () => e.value.nextPage()
    }, [c("下一页")])]);
  }
}), A = {
  install(n) {
    n.component(p.name, p), n.component(d.name, d);
  }
};
export {
  d as Pager,
  p as Pagination,
  A as default
};
