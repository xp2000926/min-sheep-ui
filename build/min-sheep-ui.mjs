import { defineComponent as D, toRefs as E, createVNode as g, computed as C, reactive as G, ref as P, unref as F, inject as J, mergeProps as O, withDirectives as K, vModelCheckbox as Q, onMounted as q, provide as W, createTextVNode as L, watch as V } from "vue";
const X = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  }
};
const H = D({
  name: "SButton",
  props: X,
  setup(n, {
    slots: e
  }) {
    const {
      type: l,
      size: o,
      disabled: t,
      block: a
    } = E(n), s = a.value ? "s-btn--block" : "";
    return () => g("button", {
      disabled: t.value,
      class: `s-btn s-btn--${l.value} s-btn--${o.value} ${s}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), Z = {
  install(n) {
    n.component(H.name, H);
  }
};
function z(n, e = 0, l = []) {
  return e++, n.reduce((o, t) => {
    const a = { ...t };
    a.level = e, l.length > 0 && l[l.length - 1].level >= e && l.pop(), l.push(a);
    const s = l[l.length - 2];
    if (s && (a.parentId = s.id), a.children) {
      const r = z(a.children, e, l);
      return delete a.children, o.concat(a, r);
    } else
      return a.isLeaf === void 0 && (a.isLeaf = !0), o.concat(a);
  }, []);
}
function ee(n, { getChildren: e }) {
  return {
    toggleCheckNode: (o) => {
      o.checked = !o.checked, e(o).forEach((r) => {
        r.checked = o.checked;
      });
      const t = n.value.find((r) => r.id === o.parentId);
      if (!t)
        return;
      const a = e(t, !1), s = a.filter((r) => r.checked);
      s.length === a.length ? t.checked = !0 : s.length === 0 && (t.checked = !1);
    }
  };
}
function ne(n) {
  const e = C(() => {
    let r = [];
    const c = [];
    for (const d of n.value)
      r.map((i) => i.id).includes(d.id) || (d.expanded !== !0 && (r = l(d)), c.push(d));
    return c;
  }), l = (r, c = !0) => {
    const d = [], i = n.value.findIndex((f) => f.id === r.id);
    for (let f = i + 1; f < n.value.length && r.level < n.value[f].level; f++)
      (c || r.level === n.value[f].level - 1) && d.push(n.value[f]);
    return d;
  }, o = (r, c = []) => {
    const d = l(r, !1);
    return c.push(...d), d.forEach((i) => {
      i.expanded && o(i, c);
    }), c;
  };
  return {
    expandedTree: e,
    getChildren: l,
    getChildrenExpanded: o,
    getIndex: (r) => r ? n.value.findIndex((c) => c.id === r.id) : -1,
    getNode: (r) => n.value.find((c) => c.id === r.id),
    getParent: (r) => n.value.find((c) => c.id === r.parentId)
  };
}
const M = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function te(n, e, { getChildren: l, getParent: o }) {
  const t = G({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), a = C(
    () => e.value.reduce(
      (u, p) => ({
        ...u,
        [p.id]: p
      }),
      {}
    )
  ), s = (u) => {
    u == null || u.classList.remove(...Object.values(M));
  }, r = (u, p) => {
    var h;
    const v = (h = a.value[u]) == null ? void 0 : h.parentId;
    return v === p ? !0 : v !== void 0 ? r(v, p) : !1;
  }, c = () => {
    t.dropType = void 0, t.draggingNode = null, t.draggingTreeNode = null;
  }, d = (u, p) => {
    var v;
    u.stopPropagation(), t.draggingNode = u.target, t.draggingTreeNode = p, (v = u.dataTransfer) == null || v.setData("dragNodeId", p.id);
  }, i = (u) => {
    if (u.preventDefault(), u.stopPropagation(), !!t.draggingNode && n) {
      if (u.dataTransfer && (u.dataTransfer.dropEffect = "move"), !e)
        return;
      let p = {};
      typeof n == "object" ? p = n : n === !0 && (p = { dropInner: !0 });
      const { dropPrev: v, dropNext: h, dropInner: x } = p;
      let m;
      const b = v ? x ? 0.25 : h ? 0.45 : 1 : -1, k = h ? x ? 0.75 : v ? 0.55 : 0 : 1, I = u.currentTarget, T = I == null ? void 0 : I.getBoundingClientRect(), B = u.clientY - ((T == null ? void 0 : T.top) || 0);
      if (B < ((T == null ? void 0 : T.height) || 0) * b ? m = "dropPrev" : B > ((T == null ? void 0 : T.height) || 0) * k ? m = "dropNext" : x ? m = "dropInner" : m = void 0, m) {
        const _ = I == null ? void 0 : I.classList;
        _ && (_.contains(M[m]) || (s(I), _.add(M[m])));
      } else
        s(I);
      t.dropType = m;
    }
  }, f = (u) => {
    u.stopPropagation(), t.draggingNode && s(u.currentTarget);
  }, y = (u, p) => {
    var h;
    if (u.preventDefault(), u.stopPropagation(), s(u.currentTarget), !t.draggingNode || !n)
      return;
    const v = (h = u.dataTransfer) == null ? void 0 : h.getData("dragNodeId");
    if (v) {
      const x = r(p.id, v);
      if (v === p.id || x)
        return;
      t.dropType && N(v, p), c();
    }
  };
  function N(u, p) {
    const v = e.value.find((h) => h.id === u);
    if (v) {
      let h;
      const x = l(v), m = o(v);
      if (t.dropType === "dropInner") {
        h = {
          ...v,
          parentId: p.id,
          level: p.level + 1
        };
        const b = e.value.indexOf(p);
        e.value.splice(b + 1, 0, h), p.isLeaf = void 0;
        const k = e.value.indexOf(v);
        e.value.splice(k, 1);
      } else if (t.dropType === "dropNext") {
        h = {
          ...v,
          parentId: p.parentId,
          level: p.level
        };
        const b = e.value.indexOf(p), k = l(p, !0).length;
        e.value.splice(
          b + k + 1,
          0,
          h
        );
        const I = e.value.indexOf(v);
        e.value.splice(I, 1);
      } else if (t.dropType === "dropPrev") {
        h = {
          ...v,
          parentId: p.parentId,
          level: p.level
        };
        const b = e.value.indexOf(p);
        e.value.splice(b, 0, h);
        const k = e.value.indexOf(v);
        e.value.splice(k, 1);
      }
      t.dropType = "dropInner", x.forEach((b) => N(b.id, h)), m && l(m).length === 0 && (m.isLeaf = !0);
    }
  }
  return {
    onDragstart: d,
    onDragover: i,
    onDragleave: f,
    onDrop: y,
    onDragend: (u) => {
      u.preventDefault(), u.stopPropagation(), c();
    }
  };
}
function le(n, { getNode: e, getIndex: l, getChildren: o }, { emit: t }) {
  const a = (d) => {
    const i = e(d);
    i && i.isLeaf === !1 && !i.childNodeCount && (i.loading = !0, t("lazy-load", d, s));
  }, s = (d) => {
    const i = e(d.node);
    if (i) {
      i.loading = !1;
      const f = P(
        z(d.treeItems, i.level)
      );
      r(i, f), c(i, f);
      const y = o(i);
      i.childNodeCount = y.length;
    }
  }, r = (d, i) => {
    i.value.forEach((f) => {
      f.level - 1 === d.level && !f.parentId && (f.parentId = d.id);
    });
  }, c = (d, i) => {
    const f = l(d);
    f && n.value.splice(f + 1, 0, ...i.value);
  };
  return {
    lazyLoadNodes: a
  };
}
function ae(n = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let l = "";
  for (let o = 0; o < n; o++)
    l += e[parseInt((Math.random() * e.length).toString())];
  return l;
}
function oe(n, { getChildren: e, getIndex: l }) {
  return {
    append: (a, s) => {
      const r = e(a, !1), c = r[r.length - 1];
      let d = l(a) + 1;
      c && (d = l(c) + 1), a.expanded = !0, a.isLeaf = !1;
      const i = P({
        ...s,
        level: a.level + 1,
        parentId: a.id,
        isLeaf: !0
      });
      i.value.id === void 0 && (i.value.id = ae()), n.value.splice(d, 0, i.value);
    },
    remove: (a) => {
      const s = e(a).map((r) => r.id);
      n.value = n.value.filter(
        (r) => r.id !== a.id && !s.includes(r.id)
      );
    }
  };
}
function re(n, e, l, o) {
  const { lazyLoadNodes: t } = o;
  return {
    toggleNode: (s) => {
      const r = n.value.find((c) => c.id === s.id);
      r && (r.expanded = !r.expanded, r.expanded && t(r));
    }
  };
}
function se(n, e, l) {
  const o = F(n), t = P(z(o)), a = ne(t), s = [re, ee, oe], r = le(t, a, l), c = te(e.draggable, t, a);
  return {
    ...s.reduce((i, f) => ({ ...i, ...f(t, a, l, r) }), {}),
    ...a,
    ...c,
    treeData: t
  };
}
const U = {
  data: {
    type: Object,
    required: !0
  },
  lineable: {
    type: Boolean,
    default: !1
  },
  checkable: {
    type: Boolean,
    default: !1
  },
  operable: {
    type: Boolean,
    default: !1
  },
  draggable: {
    type: [Boolean, Object],
    default: !1
  },
  height: {
    type: Number
  },
  itemHeight: {
    type: Number,
    default: 30
  }
}, ce = {
  ...U,
  treeNode: {
    type: Object,
    required: !0
  }
}, j = 32, $ = 24, ie = D({
  name: "STreeNode",
  props: ce,
  setup(n, {
    slots: e
  }) {
    const {
      lineable: l,
      checkable: o,
      treeNode: t,
      operable: a,
      draggable: s
    } = E(n), {
      toggleCheckNode: r,
      getChildrenExpanded: c,
      append: d,
      remove: i,
      onDragend: f,
      onDragleave: y,
      onDragover: N,
      onDragstart: S,
      onDrop: u
    } = J("TREE_UTILS"), p = P(!1), v = () => {
      p.value ? p.value = !1 : p.value = !0;
    };
    let h = {};
    return s.value && (h = {
      draggable: !0,
      onDragend: (x) => f(x),
      onDragleave: (x) => y(x),
      onDragover: (x) => N(x),
      onDragstart: (x) => S(x, t.value),
      onDrop: (x) => u(x, t.value)
    }), () => {
      var x, m, b;
      return g("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${$ * (t.value.level - 1)}px`
        },
        onMouseenter: v,
        onMouseleave: v
      }, [!t.value.isLeaf && t.value.expanded && l.value && g("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${j * c(t.value).length}px`,
          left: `${$ * (t.value.level - 1) + 9}px`,
          top: `${j}px`
        }
      }, null), g("div", O({
        class: "s-tree__node--content"
      }, h), [t.value.isLeaf ? g("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (x = e.icon) == null ? void 0 : x.call(e), o.value && K(g("input", {
        type: "checkbox",
        "onUpdate:modelValue": (k) => t.value.checked = k,
        onClick: () => {
          r(t.value);
        }
      }, null), [[Q, t.value.checked]]), (m = e.content) == null ? void 0 : m.call(e), a.value && p.value && g("span", {
        class: "inline-flex ml-1"
      }, [g("svg", {
        onClick: () => {
          d(t.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [g("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), g("svg", {
        onClick: () => {
          i(t.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [g("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), t.value.loading && ((b = e.loading) == null ? void 0 : b.call(e))])]);
    };
  }
}), de = (n, {
  emit: e
}) => g("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: n.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [g("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const ue = {
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
const pe = D({
  name: "SVirtualList",
  props: ue,
  setup(n, {
    slots: e
  }) {
    const {
      data: l,
      itemHeight: o,
      component: t
    } = E(n), a = P(), s = P(0), r = P(0), c = P(0), d = C(() => Math.ceil(s.value / o.value)), i = C(() => l.value.slice(c.value, Math.min(c.value + d.value, l.value.length)));
    q(() => {
      var y;
      s.value = (y = a.value) == null ? void 0 : y.clientHeight;
    });
    const f = (y) => {
      const {
        scrollTop: N
      } = y.target;
      c.value = Math.floor(N / o.value), r.value = N - N % o.value;
    };
    return () => g(t.value, {
      class: "s-virtual-list__container",
      ref: a,
      onScroll: f
    }, {
      default: () => [g("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${l.value.length * o.value}px`
        }
      }, null), g("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${r.value}px, 0)`
        }
      }, [i.value.map((y, N) => {
        var S;
        return (S = e.default) == null ? void 0 : S.call(e, {
          item: y,
          index: N
        });
      })])]
    });
  }
}), A = D({
  name: "STree",
  props: U,
  emits: ["lazy-load"],
  setup(n, e) {
    const {
      data: l,
      height: o,
      itemHeight: t
    } = E(n), {
      slots: a
    } = e, s = se(l, n, e);
    return W("TREE_UTILS", s), () => {
      const r = (c) => g(ie, O(n, {
        treeNode: c
      }), {
        content: () => a.content ? a.content(c) : c.label,
        icon: () => a.icon ? a.icon({
          nodeData: c,
          toggleNode: s.toggleNode
        }) : g(de, {
          expanded: !!c.expanded,
          onClick: () => s.toggleNode(c)
        }, null),
        loading: () => a.loading ? a.loading({
          nodeData: s
        }) : g("span", {
          class: "ml-1"
        }, [L("loading...")])
      });
      return g("div", {
        class: "s-tree"
      }, [o != null && o.value ? g("div", {
        style: {
          height: `${o.value}px`
        }
      }, [g(pe, {
        data: s.expandedTree.value,
        itemHeight: t.value
      }, {
        default: ({
          item: c
        }) => r(c)
      })]) : s.expandedTree.value.map((c) => r(c))]);
    };
  }
}), ge = {
  install(n) {
    n.component(A.name, A);
  }
}, Y = {
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
function ve(n = 1) {
  const e = P(n), l = (s) => {
    e.value = s;
  }, o = (s) => {
    e.value += s;
  };
  return {
    pageIndex: e,
    setPageIndex: l,
    jumpPage: o,
    prevPage: () => o(-1),
    nextPage: () => o(1)
  };
}
const fe = (n, e, l) => {
  const o = Array.from(Array(n).keys());
  if (n <= l)
    return o.slice(2, n);
  {
    const t = Math.ceil(l / 2);
    return e <= t ? o.slice(2, l) : e >= n - t + 1 ? o.slice(n - l + 2, n) : o.slice(e - t + 2, e + t - 1);
  }
}, he = Y, w = D({
  name: "SPager",
  props: he,
  setup(n) {
    const {
      total: e,
      pageSize: l,
      pagerCount: o
    } = E(n), t = C(() => Math.ceil(e.value / l.value)), {
      pageIndex: a,
      setPageIndex: s,
      jumpPage: r,
      prevPage: c,
      nextPage: d
    } = ve(), i = C(() => fe(t.value, a.value, o.value));
    return {
      totalPage: t,
      pageIndex: a,
      setPageIndex: s,
      jumpPage: r,
      prevPage: c,
      nextPage: d,
      centerPages: i
    };
  },
  render() {
    const {
      pagerCount: n,
      totalPage: e,
      pageIndex: l,
      setPageIndex: o,
      jumpPage: t,
      centerPages: a
    } = this;
    return g("ul", {
      class: "s-pager"
    }, [g("li", {
      onClick: () => o(1),
      class: {
        current: l === 1
      }
    }, [L("1")]), e > n && l > Math.ceil(n / 2) && g("li", {
      class: "more left",
      onClick: () => t(-5)
    }, [L("...")]), a.map((s) => g("li", {
      onClick: () => o(s),
      class: {
        current: l === s
      }
    }, [s])), e > n && l < e - Math.ceil(n / 2) + 1 && g("li", {
      class: "more right",
      onClick: () => t(5)
    }, [L("...")]), e > 1 && g("li", {
      onClick: () => o(e),
      class: {
        current: l === e
      }
    }, [e])]);
  }
}), R = D({
  name: "SPagination",
  props: Y,
  emits: ["update:modelValue"],
  setup(n, {
    emit: e
  }) {
    const l = P(), o = C(() => l.value ? l.value.pageIndex < 2 : !0), t = C(() => l.value ? l.value.pageIndex > l.value.totalPage - 1 : !0);
    return q(() => {
      V(() => l.value.pageIndex, (a) => {
        e("update:modelValue", a);
      }), V(() => n.modelValue, (a) => {
        l.value.pageIndex = a;
      });
    }), () => g("div", {
      class: "s-pagination"
    }, [g("button", {
      disabled: o.value,
      onClick: () => l.value.prevPage()
    }, [L("上一页")]), g(w, O(n, {
      ref: l
    }), null), g("button", {
      disabled: t.value,
      onClick: () => l.value.nextPage()
    }, [L("下一页")])]);
  }
}), xe = {
  install(n) {
    n.component(R.name, R), n.component(w.name, w);
  }
};
const me = [
  Z,
  ge,
  xe
], be = {
  version: "0.0.1",
  install(n) {
    me.forEach((e) => n.use(e));
  }
};
export {
  H as Button,
  R as Pagination,
  A as Tree,
  be as default
};
