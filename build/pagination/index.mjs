import { ref as C, defineComponent as g, toRefs as k, computed as u, createVNode as s, createTextVNode as l } from "vue";
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
  }
};
function m(e = 1) {
  const t = C(e), n = (o) => {
    t.value = o;
  }, a = (o) => {
    t.value += o;
  };
  return {
    pageIndex: t,
    setPageIndex: n,
    jumpPage: a,
    prevPage: () => a(-1),
    nextPage: () => a(1)
  };
}
const h = (e, t, n) => {
  const a = Array.from(Array(e).keys());
  if (e <= n)
    return a.slice(2, e);
  {
    const r = Math.ceil(n / 2);
    return t <= r ? a.slice(2, n) : t >= e - r + 1 ? a.slice(e - n + 2, e) : a.slice(t - r + 2, t + r - 1);
  }
}, y = P, i = g({
  name: "SPager",
  props: y,
  setup(e) {
    const {
      total: t,
      pageSize: n,
      pagerCount: a
    } = k(e), r = u(() => Math.ceil(t.value / n.value)), {
      pageIndex: c,
      setPageIndex: o,
      jumpPage: d,
      prevPage: f,
      nextPage: v
    } = m(), x = u(() => h(r.value, c.value, a.value));
    return {
      totalPage: r,
      pageIndex: c,
      setPageIndex: o,
      jumpPage: d,
      prevPage: f,
      nextPage: v,
      centerPages: x
    };
  },
  render() {
    const {
      pagerCount: e,
      totalPage: t,
      pageIndex: n,
      setPageIndex: a,
      jumpPage: r,
      centerPages: c
    } = this;
    return s("ul", {
      class: "s-pager"
    }, [s("li", {
      onClick: () => a(1),
      class: {
        current: n === 1
      }
    }, [l("1")]), t > e && n > Math.ceil(e / 2) && s("li", {
      class: "more left",
      onClick: () => r(-5)
    }, [l("...")]), c.map((o) => s("li", {
      onClick: () => a(o),
      class: {
        current: n === o
      }
    }, [o])), t > e && n < t - Math.ceil(e / 2) + 1 && s("li", {
      class: "more right",
      onClick: () => r(5)
    }, [l("...")]), t > 1 && s("li", {
      onClick: () => a(t),
      class: {
        current: n === t
      }
    }, [t])]);
  }
}), p = g({
  name: "SPagination",
  props: P,
  setup(e) {
    const {
      prevPage: t,
      nextPage: n
    } = m();
    return () => s("div", {
      class: "s-pagination"
    }, [s("button", {
      onClick: () => t()
    }, [l("上一页")]), s(i, e, null), s("button", {
      onClick: () => n()
    }, [l("下一页")])]);
  }
}), N = {
  install(e) {
    e.component(p.name, p), e.component(i.name, i);
  }
};
export {
  i as Pager,
  p as Pagination,
  N as default
};
