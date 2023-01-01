import { defineComponent as D, toRefs as E, createVNode as g, computed as L, reactive as Y, ref as T, unref as G, inject as F, mergeProps as A, withDirectives as J, vModelCheckbox as K, onMounted as Q, provide as W, createTextVNode as C } from "vue";
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
const B = D({
  name: "SButton",
  props: X,
  setup(n, {
    slots: e
  }) {
    const {
      type: l,
      size: r,
      disabled: t,
      block: o
    } = E(n), s = o.value ? "s-btn--block" : "";
    return () => g("button", {
      disabled: t.value,
      class: `s-btn s-btn--${l.value} s-btn--${r.value} ${s}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), Z = {
  install(n) {
    n.component(B.name, B);
  }
};
function w(n, e = 0, l = []) {
  return e++, n.reduce((r, t) => {
    const o = { ...t };
    o.level = e, l.length > 0 && l[l.length - 1].level >= e && l.pop(), l.push(o);
    const s = l[l.length - 2];
    if (s && (o.parentId = s.id), o.children) {
      const a = w(o.children, e, l);
      return delete o.children, r.concat(o, a);
    } else
      return o.isLeaf === void 0 && (o.isLeaf = !0), r.concat(o);
  }, []);
}
function ee(n, { getChildren: e }) {
  return {
    toggleCheckNode: (r) => {
      r.checked = !r.checked, e(r).forEach((a) => {
        a.checked = r.checked;
      });
      const t = n.value.find((a) => a.id === r.parentId);
      if (!t)
        return;
      const o = e(t, !1), s = o.filter((a) => a.checked);
      s.length === o.length ? t.checked = !0 : s.length === 0 && (t.checked = !1);
    }
  };
}
function ne(n) {
  const e = L(() => {
    let a = [];
    const c = [];
    for (const d of n.value)
      a.map((i) => i.id).includes(d.id) || (d.expanded !== !0 && (a = l(d)), c.push(d));
    return c;
  }), l = (a, c = !0) => {
    const d = [], i = n.value.findIndex((f) => f.id === a.id);
    for (let f = i + 1; f < n.value.length && a.level < n.value[f].level; f++)
      (c || a.level === n.value[f].level - 1) && d.push(n.value[f]);
    return d;
  }, r = (a, c = []) => {
    const d = l(a, !1);
    return c.push(...d), d.forEach((i) => {
      i.expanded && r(i, c);
    }), c;
  };
  return {
    expandedTree: e,
    getChildren: l,
    getChildrenExpanded: r,
    getIndex: (a) => a ? n.value.findIndex((c) => c.id === a.id) : -1,
    getNode: (a) => n.value.find((c) => c.id === a.id),
    getParent: (a) => n.value.find((c) => c.id === a.parentId)
  };
}
const M = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function te(n, e, { getChildren: l, getParent: r }) {
  const t = Y({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), o = L(
    () => e.value.reduce(
      (u, p) => ({
        ...u,
        [p.id]: p
      }),
      {}
    )
  ), s = (u) => {
    u == null || u.classList.remove(...Object.values(M));
  }, a = (u, p) => {
    var h;
    const v = (h = o.value[u]) == null ? void 0 : h.parentId;
    return v === p ? !0 : v !== void 0 ? a(v, p) : !1;
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
      const N = v ? x ? 0.25 : h ? 0.45 : 1 : -1, P = h ? x ? 0.75 : v ? 0.55 : 0 : 1, I = u.currentTarget, k = I == null ? void 0 : I.getBoundingClientRect(), z = u.clientY - ((k == null ? void 0 : k.top) || 0);
      if (z < ((k == null ? void 0 : k.height) || 0) * N ? m = "dropPrev" : z > ((k == null ? void 0 : k.height) || 0) * P ? m = "dropNext" : x ? m = "dropInner" : m = void 0, m) {
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
      const x = a(p.id, v);
      if (v === p.id || x)
        return;
      t.dropType && b(v, p), c();
    }
  };
  function b(u, p) {
    const v = e.value.find((h) => h.id === u);
    if (v) {
      let h;
      const x = l(v), m = r(v);
      if (t.dropType === "dropInner") {
        h = {
          ...v,
          parentId: p.id,
          level: p.level + 1
        };
        const N = e.value.indexOf(p);
        e.value.splice(N + 1, 0, h), p.isLeaf = void 0;
        const P = e.value.indexOf(v);
        e.value.splice(P, 1);
      } else if (t.dropType === "dropNext") {
        h = {
          ...v,
          parentId: p.parentId,
          level: p.level
        };
        const N = e.value.indexOf(p), P = l(p, !0).length;
        e.value.splice(
          N + P + 1,
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
        const N = e.value.indexOf(p);
        e.value.splice(N, 0, h);
        const P = e.value.indexOf(v);
        e.value.splice(P, 1);
      }
      t.dropType = "dropInner", x.forEach((N) => b(N.id, h)), m && l(m).length === 0 && (m.isLeaf = !0);
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
function le(n, { getNode: e, getIndex: l, getChildren: r }, { emit: t }) {
  const o = (d) => {
    const i = e(d);
    i && i.isLeaf === !1 && !i.childNodeCount && (i.loading = !0, t("lazy-load", d, s));
  }, s = (d) => {
    const i = e(d.node);
    if (i) {
      i.loading = !1;
      const f = T(
        w(d.treeItems, i.level)
      );
      a(i, f), c(i, f);
      const y = r(i);
      i.childNodeCount = y.length;
    }
  }, a = (d, i) => {
    i.value.forEach((f) => {
      f.level - 1 === d.level && !f.parentId && (f.parentId = d.id);
    });
  }, c = (d, i) => {
    const f = l(d);
    f && n.value.splice(f + 1, 0, ...i.value);
  };
  return {
    lazyLoadNodes: o
  };
}
function oe(n = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let l = "";
  for (let r = 0; r < n; r++)
    l += e[parseInt((Math.random() * e.length).toString())];
  return l;
}
function ae(n, { getChildren: e, getIndex: l }) {
  return {
    append: (o, s) => {
      const a = e(o, !1), c = a[a.length - 1];
      let d = l(o) + 1;
      c && (d = l(c) + 1), o.expanded = !0, o.isLeaf = !1;
      const i = T({
        ...s,
        level: o.level + 1,
        parentId: o.id,
        isLeaf: !0
      });
      i.value.id === void 0 && (i.value.id = oe()), n.value.splice(d, 0, i.value);
    },
    remove: (o) => {
      const s = e(o).map((a) => a.id);
      n.value = n.value.filter(
        (a) => a.id !== o.id && !s.includes(a.id)
      );
    }
  };
}
function re(n, e, l, r) {
  const { lazyLoadNodes: t } = r;
  return {
    toggleNode: (s) => {
      const a = n.value.find((c) => c.id === s.id);
      a && (a.expanded = !a.expanded, a.expanded && t(a));
    }
  };
}
function se(n, e, l) {
  const r = G(n), t = T(w(r)), o = ne(t), s = [re, ee, ae], a = le(t, o, l), c = te(e.draggable, t, o);
  return {
    ...s.reduce((i, f) => ({ ...i, ...f(t, o, l, a) }), {}),
    ...o,
    ...c,
    treeData: t
  };
}
const R = {
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
  ...R,
  treeNode: {
    type: Object,
    required: !0
  }
}, H = 32, j = 24, ie = D({
  name: "STreeNode",
  props: ce,
  setup(n, {
    slots: e
  }) {
    const {
      lineable: l,
      checkable: r,
      treeNode: t,
      operable: o,
      draggable: s
    } = E(n), {
      toggleCheckNode: a,
      getChildrenExpanded: c,
      append: d,
      remove: i,
      onDragend: f,
      onDragleave: y,
      onDragover: b,
      onDragstart: S,
      onDrop: u
    } = F("TREE_UTILS"), p = T(!1), v = () => {
      p.value ? p.value = !1 : p.value = !0;
    };
    let h = {};
    return s.value && (h = {
      draggable: !0,
      onDragend: (x) => f(x),
      onDragleave: (x) => y(x),
      onDragover: (x) => b(x),
      onDragstart: (x) => S(x, t.value),
      onDrop: (x) => u(x, t.value)
    }), () => {
      var x, m, N;
      return g("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${j * (t.value.level - 1)}px`
        },
        onMouseenter: v,
        onMouseleave: v
      }, [!t.value.isLeaf && t.value.expanded && l.value && g("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${H * c(t.value).length}px`,
          left: `${j * (t.value.level - 1) + 9}px`,
          top: `${H}px`
        }
      }, null), g("div", A({
        class: "s-tree__node--content"
      }, h), [t.value.isLeaf ? g("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (x = e.icon) == null ? void 0 : x.call(e), r.value && J(g("input", {
        type: "checkbox",
        "onUpdate:modelValue": (P) => t.value.checked = P,
        onClick: () => {
          a(t.value);
        }
      }, null), [[K, t.value.checked]]), (m = e.content) == null ? void 0 : m.call(e), o.value && p.value && g("span", {
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
      }, null)])]), t.value.loading && ((N = e.loading) == null ? void 0 : N.call(e))])]);
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
      itemHeight: r,
      component: t
    } = E(n), o = T(), s = T(0), a = T(0), c = T(0), d = L(() => Math.ceil(s.value / r.value)), i = L(() => l.value.slice(c.value, Math.min(c.value + d.value, l.value.length)));
    Q(() => {
      var y;
      s.value = (y = o.value) == null ? void 0 : y.clientHeight;
    });
    const f = (y) => {
      const {
        scrollTop: b
      } = y.target;
      c.value = Math.floor(b / r.value), a.value = b - b % r.value;
    };
    return () => g(t.value, {
      class: "s-virtual-list__container",
      ref: o,
      onScroll: f
    }, {
      default: () => [g("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${l.value.length * r.value}px`
        }
      }, null), g("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${a.value}px, 0)`
        }
      }, [i.value.map((y, b) => {
        var S;
        return (S = e.default) == null ? void 0 : S.call(e, {
          item: y,
          index: b
        });
      })])]
    });
  }
}), $ = D({
  name: "STree",
  props: R,
  emits: ["lazy-load"],
  setup(n, e) {
    const {
      data: l,
      height: r,
      itemHeight: t
    } = E(n), {
      slots: o
    } = e, s = se(l, n, e);
    return W("TREE_UTILS", s), () => {
      const a = (c) => g(ie, A(n, {
        treeNode: c
      }), {
        content: () => o.content ? o.content(c) : c.label,
        icon: () => o.icon ? o.icon({
          nodeData: c,
          toggleNode: s.toggleNode
        }) : g(de, {
          expanded: !!c.expanded,
          onClick: () => s.toggleNode(c)
        }, null),
        loading: () => o.loading ? o.loading({
          nodeData: s
        }) : g("span", {
          class: "ml-1"
        }, [C("loading...")])
      });
      return g("div", {
        class: "s-tree"
      }, [r != null && r.value ? g("div", {
        style: {
          height: `${r.value}px`
        }
      }, [g(pe, {
        data: s.expandedTree.value,
        itemHeight: t.value
      }, {
        default: ({
          item: c
        }) => a(c)
      })]) : s.expandedTree.value.map((c) => a(c))]);
    };
  }
}), ge = {
  install(n) {
    n.component($.name, $);
  }
}, q = {
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
function U(n = 1) {
  const e = T(n), l = (s) => {
    e.value = s;
  }, r = (s) => {
    e.value += s;
  };
  return {
    pageIndex: e,
    setPageIndex: l,
    jumpPage: r,
    prevPage: () => r(-1),
    nextPage: () => r(1)
  };
}
const ve = (n, e, l) => {
  const r = Array.from(Array(n).keys());
  if (n <= l)
    return r.slice(2, n);
  {
    const t = Math.ceil(l / 2);
    return e <= t ? r.slice(2, l) : e >= n - t + 1 ? r.slice(n - l + 2, n) : r.slice(e - t + 2, e + t - 1);
  }
}, fe = q, O = D({
  name: "SPager",
  props: fe,
  setup(n) {
    const {
      total: e,
      pageSize: l,
      pagerCount: r
    } = E(n), t = L(() => Math.ceil(e.value / l.value)), {
      pageIndex: o,
      setPageIndex: s,
      jumpPage: a,
      prevPage: c,
      nextPage: d
    } = U(), i = L(() => ve(t.value, o.value, r.value));
    return {
      totalPage: t,
      pageIndex: o,
      setPageIndex: s,
      jumpPage: a,
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
      setPageIndex: r,
      jumpPage: t,
      centerPages: o
    } = this;
    return g("ul", {
      class: "s-pager"
    }, [g("li", {
      onClick: () => r(1),
      class: {
        current: l === 1
      }
    }, [C("1")]), e > n && l > Math.ceil(n / 2) && g("li", {
      class: "more left",
      onClick: () => t(-5)
    }, [C("...")]), o.map((s) => g("li", {
      onClick: () => r(s),
      class: {
        current: l === s
      }
    }, [s])), e > n && l < e - Math.ceil(n / 2) + 1 && g("li", {
      class: "more right",
      onClick: () => t(5)
    }, [C("...")]), e > 1 && g("li", {
      onClick: () => r(e),
      class: {
        current: l === e
      }
    }, [e])]);
  }
}), V = D({
  name: "SPagination",
  props: q,
  setup(n) {
    const {
      prevPage: e,
      nextPage: l
    } = U();
    return () => g("div", {
      class: "s-pagination"
    }, [g("button", {
      onClick: () => e()
    }, [C("上一页")]), g(O, n, null), g("button", {
      onClick: () => l()
    }, [C("下一页")])]);
  }
}), he = {
  install(n) {
    n.component(V.name, V), n.component(O.name, O);
  }
};
const xe = [
  Z,
  ge,
  he
], ye = {
  version: "0.0.1",
  install(n) {
    xe.forEach((e) => n.use(e));
  }
};
export {
  B as Button,
  V as Pagination,
  $ as Tree,
  ye as default
};
