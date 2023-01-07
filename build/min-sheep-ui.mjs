import { defineComponent as S, toRefs as k, createVNode as m, computed as I, reactive as mt, ref as F, unref as vt, inject as Y, mergeProps as te, withDirectives as ht, vModelCheckbox as yt, onMounted as ye, provide as X, createTextVNode as W, watch as fe, onUnmounted as bt, Fragment as be, nextTick as wt } from "vue";
const xt = {
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
const Ne = S({
  name: "SButton",
  props: xt,
  setup(t, {
    slots: e
  }) {
    const {
      type: n,
      size: r,
      disabled: i,
      block: o
    } = k(t), s = o.value ? "s-btn--block" : "";
    return () => m("button", {
      disabled: i.value,
      class: `s-btn s-btn--${n.value} s-btn--${r.value} ${s}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), Pt = {
  install(t) {
    t.component(Ne.name, Ne);
  }
};
function we(t, e = 0, n = []) {
  return e++, t.reduce((r, i) => {
    const o = { ...i };
    o.level = e, n.length > 0 && n[n.length - 1].level >= e && n.pop(), n.push(o);
    const s = n[n.length - 2];
    if (s && (o.parentId = s.id), o.children) {
      const a = we(o.children, e, n);
      return delete o.children, r.concat(o, a);
    } else
      return o.isLeaf === void 0 && (o.isLeaf = !0), r.concat(o);
  }, []);
}
function _t(t, { getChildren: e }) {
  return {
    toggleCheckNode: (r) => {
      r.checked = !r.checked, e(r).forEach((a) => {
        a.checked = r.checked;
      });
      const i = t.value.find((a) => a.id === r.parentId);
      if (!i)
        return;
      const o = e(i, !1), s = o.filter((a) => a.checked);
      s.length === o.length ? i.checked = !0 : s.length === 0 && (i.checked = !1);
    }
  };
}
function Tt(t) {
  const e = I(() => {
    let a = [];
    const l = [];
    for (const u of t.value)
      a.map((c) => c.id).includes(u.id) || (u.expanded !== !0 && (a = n(u)), l.push(u));
    return l;
  }), n = (a, l = !0) => {
    const u = [], c = t.value.findIndex((f) => f.id === a.id);
    for (let f = c + 1; f < t.value.length && a.level < t.value[f].level; f++)
      (l || a.level === t.value[f].level - 1) && u.push(t.value[f]);
    return u;
  }, r = (a, l = []) => {
    const u = n(a, !1);
    return l.push(...u), u.forEach((c) => {
      c.expanded && r(c, l);
    }), l;
  };
  return {
    expandedTree: e,
    getChildren: n,
    getChildrenExpanded: r,
    getIndex: (a) => a ? t.value.findIndex((l) => l.id === a.id) : -1,
    getNode: (a) => t.value.find((l) => l.id === a.id),
    getParent: (a) => t.value.find((l) => l.id === a.parentId)
  };
}
const ce = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function Ot(t, e, { getChildren: n, getParent: r }) {
  const i = mt({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), o = I(
    () => e.value.reduce(
      (p, h) => ({
        ...p,
        [h.id]: h
      }),
      {}
    )
  ), s = (p) => {
    p == null || p.classList.remove(...Object.values(ce));
  }, a = (p, h) => {
    var w;
    const d = (w = o.value[p]) == null ? void 0 : w.parentId;
    return d === h ? !0 : d !== void 0 ? a(d, h) : !1;
  }, l = () => {
    i.dropType = void 0, i.draggingNode = null, i.draggingTreeNode = null;
  }, u = (p, h) => {
    var d;
    p.stopPropagation(), i.draggingNode = p.target, i.draggingTreeNode = h, (d = p.dataTransfer) == null || d.setData("dragNodeId", h.id);
  }, c = (p) => {
    if (p.preventDefault(), p.stopPropagation(), !!i.draggingNode && t) {
      if (p.dataTransfer && (p.dataTransfer.dropEffect = "move"), !e)
        return;
      let h = {};
      typeof t == "object" ? h = t : t === !0 && (h = { dropInner: !0 });
      const { dropPrev: d, dropNext: w, dropInner: v } = h;
      let y;
      const x = d ? v ? 0.25 : w ? 0.45 : 1 : -1, T = w ? v ? 0.75 : d ? 0.55 : 0 : 1, O = p.currentTarget, E = O == null ? void 0 : O.getBoundingClientRect(), q = p.clientY - ((E == null ? void 0 : E.top) || 0);
      if (q < ((E == null ? void 0 : E.height) || 0) * x ? y = "dropPrev" : q > ((E == null ? void 0 : E.height) || 0) * T ? y = "dropNext" : v ? y = "dropInner" : y = void 0, y) {
        const R = O == null ? void 0 : O.classList;
        R && (R.contains(ce[y]) || (s(O), R.add(ce[y])));
      } else
        s(O);
      i.dropType = y;
    }
  }, f = (p) => {
    p.stopPropagation(), i.draggingNode && s(p.currentTarget);
  }, g = (p, h) => {
    var w;
    if (p.preventDefault(), p.stopPropagation(), s(p.currentTarget), !i.draggingNode || !t)
      return;
    const d = (w = p.dataTransfer) == null ? void 0 : w.getData("dragNodeId");
    if (d) {
      const v = a(h.id, d);
      if (d === h.id || v)
        return;
      i.dropType && b(d, h), l();
    }
  };
  function b(p, h) {
    const d = e.value.find((w) => w.id === p);
    if (d) {
      let w;
      const v = n(d), y = r(d);
      if (i.dropType === "dropInner") {
        w = {
          ...d,
          parentId: h.id,
          level: h.level + 1
        };
        const x = e.value.indexOf(h);
        e.value.splice(x + 1, 0, w), h.isLeaf = void 0;
        const T = e.value.indexOf(d);
        e.value.splice(T, 1);
      } else if (i.dropType === "dropNext") {
        w = {
          ...d,
          parentId: h.parentId,
          level: h.level
        };
        const x = e.value.indexOf(h), T = n(h, !0).length;
        e.value.splice(
          x + T + 1,
          0,
          w
        );
        const O = e.value.indexOf(d);
        e.value.splice(O, 1);
      } else if (i.dropType === "dropPrev") {
        w = {
          ...d,
          parentId: h.parentId,
          level: h.level
        };
        const x = e.value.indexOf(h);
        e.value.splice(x, 0, w);
        const T = e.value.indexOf(d);
        e.value.splice(T, 1);
      }
      i.dropType = "dropInner", v.forEach((x) => b(x.id, w)), y && n(y).length === 0 && (y.isLeaf = !0);
    }
  }
  return {
    onDragstart: u,
    onDragover: c,
    onDragleave: f,
    onDrop: g,
    onDragend: (p) => {
      p.preventDefault(), p.stopPropagation(), l();
    }
  };
}
function Et(t, { getNode: e, getIndex: n, getChildren: r }, { emit: i }) {
  const o = (u) => {
    const c = e(u);
    c && c.isLeaf === !1 && !c.childNodeCount && (c.loading = !0, i("lazy-load", u, s));
  }, s = (u) => {
    const c = e(u.node);
    if (c) {
      c.loading = !1;
      const f = F(
        we(u.treeItems, c.level)
      );
      a(c, f), l(c, f);
      const g = r(c);
      c.childNodeCount = g.length;
    }
  }, a = (u, c) => {
    c.value.forEach((f) => {
      f.level - 1 === u.level && !f.parentId && (f.parentId = u.id);
    });
  }, l = (u, c) => {
    const f = n(u);
    f && t.value.splice(f + 1, 0, ...c.value);
  };
  return {
    lazyLoadNodes: o
  };
}
function Ke(t = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  for (let r = 0; r < t; r++)
    n += e[parseInt((Math.random() * e.length).toString())];
  return n;
}
function Nt(t, { getChildren: e, getIndex: n }) {
  return {
    append: (o, s) => {
      const a = e(o, !1), l = a[a.length - 1];
      let u = n(o) + 1;
      l && (u = n(l) + 1), o.expanded = !0, o.isLeaf = !1;
      const c = F({
        ...s,
        level: o.level + 1,
        parentId: o.id,
        isLeaf: !0
      });
      c.value.id === void 0 && (c.value.id = Ke()), t.value.splice(u, 0, c.value);
    },
    remove: (o) => {
      const s = e(o).map((a) => a.id);
      t.value = t.value.filter(
        (a) => a.id !== o.id && !s.includes(a.id)
      );
    }
  };
}
function Ft(t, e, n, r) {
  const { lazyLoadNodes: i } = r;
  return {
    toggleNode: (s) => {
      const a = t.value.find((l) => l.id === s.id);
      a && (a.expanded = !a.expanded, a.expanded && i(a));
    }
  };
}
function St(t, e, n) {
  const r = vt(t), i = F(we(r)), o = Tt(i), s = [Ft, _t, Nt], a = Et(i, o, n), l = Ot(e.draggable, i, o);
  return {
    ...s.reduce((c, f) => ({ ...c, ...f(i, o, n, a) }), {}),
    ...o,
    ...l,
    treeData: i
  };
}
const Qe = {
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
}, At = {
  ...Qe,
  treeNode: {
    type: Object,
    required: !0
  }
}, Fe = 34, Se = 24, It = S({
  name: "STreeNode",
  props: At,
  setup(t, {
    slots: e
  }) {
    const {
      lineable: n,
      checkable: r,
      treeNode: i,
      operable: o,
      draggable: s
    } = k(t), {
      toggleCheckNode: a,
      getChildrenExpanded: l,
      append: u,
      remove: c,
      onDragend: f,
      onDragleave: g,
      onDragover: b,
      onDragstart: P,
      onDrop: p
    } = Y("TREE_UTILS"), h = F(!1), d = () => {
      h.value ? h.value = !1 : h.value = !0;
    };
    let w = {};
    return s.value && (w = {
      draggable: !0,
      onDragend: (v) => f(v),
      onDragleave: (v) => g(v),
      onDragover: (v) => b(v),
      onDragstart: (v) => P(v, i.value),
      onDrop: (v) => p(v, i.value)
    }), () => {
      var v, y, x;
      return m("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${Se * (i.value.level - 1)}px`
        },
        onMouseenter: d,
        onMouseleave: d
      }, [!i.value.isLeaf && i.value.expanded && n.value && m("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${Fe * l(i.value).length}px`,
          left: `${Se * (i.value.level - 1) + 9}px`,
          top: `${Fe}px`
        }
      }, null), m("div", te({
        class: "s-tree__node--content"
      }, w), [i.value.isLeaf ? m("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (v = e.icon) == null ? void 0 : v.call(e), r.value && ht(m("input", {
        type: "checkbox",
        "onUpdate:modelValue": (T) => i.value.checked = T,
        onClick: () => {
          a(i.value);
        }
      }, null), [[yt, i.value.checked]]), (y = e.content) == null ? void 0 : y.call(e), o.value && h.value && m("span", {
        class: "inline-flex ml-1"
      }, [m("svg", {
        onClick: () => {
          u(i.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [m("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), m("svg", {
        onClick: () => {
          c(i.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [m("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), i.value.loading && ((x = e.loading) == null ? void 0 : x.call(e))])]);
    };
  }
}), Lt = (t, {
  emit: e
}) => m("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: t.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [m("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const Ct = {
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
const Dt = S({
  name: "SVirtualList",
  props: Ct,
  setup(t, {
    slots: e
  }) {
    const {
      data: n,
      itemHeight: r,
      component: i
    } = k(t), o = F(), s = F(0), a = F(0), l = F(0), u = I(() => Math.ceil(s.value / r.value)), c = I(() => n.value.slice(l.value, Math.min(l.value + u.value, n.value.length)));
    ye(() => {
      var g;
      s.value = (g = o.value) == null ? void 0 : g.clientHeight;
    });
    const f = (g) => {
      const {
        scrollTop: b
      } = g.target;
      l.value = Math.floor(b / r.value), a.value = b - b % r.value;
    };
    return () => m(i.value, {
      class: "s-virtual-list__container",
      ref: o,
      onScroll: f
    }, {
      default: () => [m("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${n.value.length * r.value}px`
        }
      }, null), m("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${a.value}px, 0)`
        }
      }, [c.value.map((g, b) => {
        var P;
        return (P = e.default) == null ? void 0 : P.call(e, {
          item: g,
          index: b
        });
      })])]
    });
  }
}), Ae = S({
  name: "STree",
  props: Qe,
  emits: ["lazy-load"],
  setup(t, e) {
    const {
      data: n,
      height: r,
      itemHeight: i
    } = k(t), {
      slots: o
    } = e, s = St(n, t, e);
    return X("TREE_UTILS", s), () => {
      const a = (l) => m(It, te(t, {
        treeNode: l
      }), {
        content: () => o.content ? o.content(l) : l.label,
        icon: () => o.icon ? o.icon({
          nodeData: l,
          toggleNode: s.toggleNode
        }) : m(Lt, {
          expanded: !!l.expanded,
          onClick: () => s.toggleNode(l)
        }, null),
        loading: () => o.loading ? o.loading({
          nodeData: s
        }) : m("span", {
          class: "ml-1"
        }, [W("loading...")])
      });
      return m("div", {
        class: "s-tree"
      }, [r != null && r.value ? m("div", {
        style: {
          height: `${r.value}px`
        }
      }, [m(Dt, {
        data: s.expandedTree.value,
        itemHeight: i.value
      }, {
        default: ({
          item: l
        }) => a(l)
      })]) : s.expandedTree.value.map((l) => a(l))]);
    };
  }
}), qt = {
  install(t) {
    t.component(Ae.name, Ae);
  }
}, et = {
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
function Vt(t = 1) {
  const e = F(t), n = (s) => {
    e.value = s;
  }, r = (s) => {
    e.value += s;
  };
  return {
    pageIndex: e,
    setPageIndex: n,
    jumpPage: r,
    prevPage: () => r(-1),
    nextPage: () => r(1)
  };
}
const Mt = (t, e, n) => {
  const r = Array.from(Array(t).keys());
  if (t <= n)
    return r.slice(2, t);
  {
    const i = Math.ceil(n / 2);
    return e <= i ? r.slice(2, n) : e >= t - i + 1 ? r.slice(t - n + 2, t) : r.slice(e - i + 2, e + i - 1);
  }
}, kt = et, de = S({
  name: "SPager",
  props: kt,
  setup(t) {
    const {
      total: e,
      pageSize: n,
      pagerCount: r
    } = k(t), i = I(() => Math.ceil(e.value / n.value)), {
      pageIndex: o,
      setPageIndex: s,
      jumpPage: a,
      prevPage: l,
      nextPage: u
    } = Vt(), c = I(() => Mt(i.value, o.value, r.value));
    return {
      totalPage: i,
      pageIndex: o,
      setPageIndex: s,
      jumpPage: a,
      prevPage: l,
      nextPage: u,
      centerPages: c
    };
  },
  render() {
    const {
      pagerCount: t,
      totalPage: e,
      pageIndex: n,
      setPageIndex: r,
      jumpPage: i,
      centerPages: o
    } = this;
    return m("ul", {
      class: "s-pager"
    }, [m("li", {
      onClick: () => r(1),
      class: {
        current: n === 1
      }
    }, [W("1")]), e > t && n > Math.ceil(t / 2) && m("li", {
      class: "more left",
      onClick: () => i(-5)
    }, [W("...")]), o.map((s) => m("li", {
      onClick: () => r(s),
      class: {
        current: n === s
      }
    }, [s])), e > t && n < e - Math.ceil(t / 2) + 1 && m("li", {
      class: "more right",
      onClick: () => i(5)
    }, [W("...")]), e > 1 && m("li", {
      onClick: () => r(e),
      class: {
        current: n === e
      }
    }, [e])]);
  }
}), Ie = S({
  name: "SPagination",
  props: et,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = F(), r = I(() => n.value ? n.value.pageIndex < 2 : !0), i = I(() => n.value ? n.value.pageIndex > n.value.totalPage - 1 : !0);
    return ye(() => {
      fe(() => n.value.pageIndex, (o) => {
        e("update:modelValue", o);
      }), fe(() => t.modelValue, (o) => {
        n.value.pageIndex = o;
      });
    }), () => m("div", {
      class: "s-pagination"
    }, [m("button", {
      disabled: r.value,
      onClick: () => n.value.prevPage()
    }, [W("上一页")]), m(de, te(t, {
      ref: n
    }), null), m("button", {
      disabled: i.value,
      onClick: () => n.value.nextPage()
    }, [W("下一页")])]);
  }
}), Rt = {
  install(t) {
    t.component(Ie.name, Ie), t.component(de.name, de);
  }
}, tt = Symbol("formContextToken"), jt = {
  model: {
    type: Object,
    required: !0
  },
  layout: {
    type: String,
    default: "horizontal"
  },
  labelSize: {
    type: String,
    default: "md"
  },
  labelAlign: {
    type: String,
    default: "start"
  },
  rules: {
    type: Object
  }
};
const Le = S({
  name: "SForm",
  props: jt,
  emits: ["submit"],
  setup(t, {
    slots: e,
    emit: n,
    expose: r
  }) {
    const i = I(() => ({
      layout: t.layout,
      labelSize: t.labelSize,
      labelAlign: t.labelAlign
    }));
    X("LABEL_DATA", i);
    const o = /* @__PURE__ */ new Set(), s = (c) => o.add(c), a = (c) => o.delete(c);
    X(tt, {
      model: t.model,
      rules: t.rules,
      addItem: s,
      removeItem: a
    });
    const l = (c) => {
      c.preventDefault(), n("submit");
    };
    return r({
      validate: (c) => {
        const f = [];
        o.forEach((g) => f.push(g.validate())), Promise.all(f).then(() => c(!0)).catch(() => c(!1));
      }
    }), () => {
      var c;
      return m("form", {
        class: "s-form",
        onSubmit: l
      }, [(c = e.default) == null ? void 0 : c.call(e)]);
    };
  }
}), zt = {
  label: {
    type: String
  },
  prop: {
    type: String
  }
};
function $() {
  return $ = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, $.apply(this, arguments);
}
function Bt(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, K(t, e);
}
function pe(t) {
  return pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, pe(t);
}
function K(t, e) {
  return K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, K(t, e);
}
function $t() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function oe(t, e, n) {
  return $t() ? oe = Reflect.construct.bind() : oe = function(i, o, s) {
    var a = [null];
    a.push.apply(a, o);
    var l = Function.bind.apply(i, a), u = new l();
    return s && K(u, s.prototype), u;
  }, oe.apply(null, arguments);
}
function Ht(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function ge(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ge = function(r) {
    if (r === null || !Ht(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, i);
    }
    function i() {
      return oe(r, arguments, pe(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), K(i, r);
  }, ge(t);
}
var Wt = /%[sdj%]/g, nt = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (nt = function(e, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(e, n);
});
function me(t) {
  if (!t || !t.length)
    return null;
  var e = {};
  return t.forEach(function(n) {
    var r = n.field;
    e[r] = e[r] || [], e[r].push(n);
  }), e;
}
function A(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  var i = 0, o = n.length;
  if (typeof t == "function")
    return t.apply(null, n);
  if (typeof t == "string") {
    var s = t.replace(Wt, function(a) {
      if (a === "%%")
        return "%";
      if (i >= o)
        return a;
      switch (a) {
        case "%s":
          return String(n[i++]);
        case "%d":
          return Number(n[i++]);
        case "%j":
          try {
            return JSON.stringify(n[i++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return a;
      }
    });
    return s;
  }
  return t;
}
function Ut(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function N(t, e) {
  return !!(t == null || e === "array" && Array.isArray(t) && !t.length || Ut(e) && typeof t == "string" && !t);
}
function Yt(t, e, n) {
  var r = [], i = 0, o = t.length;
  function s(a) {
    r.push.apply(r, a || []), i++, i === o && n(r);
  }
  t.forEach(function(a) {
    e(a, s);
  });
}
function Ce(t, e, n) {
  var r = 0, i = t.length;
  function o(s) {
    if (s && s.length) {
      n(s);
      return;
    }
    var a = r;
    r = r + 1, a < i ? e(t[a], o) : n([]);
  }
  o([]);
}
function Xt(t) {
  var e = [];
  return Object.keys(t).forEach(function(n) {
    e.push.apply(e, t[n] || []);
  }), e;
}
var De = /* @__PURE__ */ function(t) {
  Bt(e, t);
  function e(n, r) {
    var i;
    return i = t.call(this, "Async Validation Error") || this, i.errors = n, i.fields = r, i;
  }
  return e;
}(/* @__PURE__ */ ge(Error));
function Jt(t, e, n, r, i) {
  if (e.first) {
    var o = new Promise(function(g, b) {
      var P = function(d) {
        return r(d), d.length ? b(new De(d, me(d))) : g(i);
      }, p = Xt(t);
      Ce(p, n, P);
    });
    return o.catch(function(g) {
      return g;
    }), o;
  }
  var s = e.firstFields === !0 ? Object.keys(t) : e.firstFields || [], a = Object.keys(t), l = a.length, u = 0, c = [], f = new Promise(function(g, b) {
    var P = function(h) {
      if (c.push.apply(c, h), u++, u === l)
        return r(c), c.length ? b(new De(c, me(c))) : g(i);
    };
    a.length || (r(c), g(i)), a.forEach(function(p) {
      var h = t[p];
      s.indexOf(p) !== -1 ? Ce(h, n, P) : Yt(h, n, P);
    });
  });
  return f.catch(function(g) {
    return g;
  }), f;
}
function Zt(t) {
  return !!(t && t.message !== void 0);
}
function Gt(t, e) {
  for (var n = t, r = 0; r < e.length; r++) {
    if (n == null)
      return n;
    n = n[e[r]];
  }
  return n;
}
function qe(t, e) {
  return function(n) {
    var r;
    return t.fullFields ? r = Gt(e, t.fullFields) : r = e[n.field || t.fullField], Zt(n) ? (n.field = n.field || t.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || t.fullField
    };
  };
}
function Ve(t, e) {
  if (e) {
    for (var n in e)
      if (e.hasOwnProperty(n)) {
        var r = e[n];
        typeof r == "object" && typeof t[n] == "object" ? t[n] = $({}, t[n], r) : t[n] = r;
      }
  }
  return t;
}
var rt = function(e, n, r, i, o, s) {
  e.required && (!r.hasOwnProperty(e.field) || N(n, s || e.type)) && i.push(A(o.messages.required, e.fullField));
}, Kt = function(e, n, r, i, o) {
  (/^\s+$/.test(n) || n === "") && i.push(A(o.messages.whitespace, e.fullField));
}, re, Qt = function() {
  if (re)
    return re;
  var t = "[a-fA-F\\d:]", e = function(y) {
    return y && y.includeBoundaries ? "(?:(?<=\\s|^)(?=" + t + ")|(?<=" + t + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", i = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), s = new RegExp("^" + n + "$"), a = new RegExp("^" + i + "$"), l = function(y) {
    return y && y.exact ? o : new RegExp("(?:" + e(y) + n + e(y) + ")|(?:" + e(y) + i + e(y) + ")", "g");
  };
  l.v4 = function(v) {
    return v && v.exact ? s : new RegExp("" + e(v) + n + e(v), "g");
  }, l.v6 = function(v) {
    return v && v.exact ? a : new RegExp("" + e(v) + i + e(v), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", f = l.v4().source, g = l.v6().source, b = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", P = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", h = "(?::\\d{2,5})?", d = '(?:[/?#][^\\s"]*)?', w = "(?:" + u + "|www\\.)" + c + "(?:localhost|" + f + "|" + g + "|" + b + P + p + ")" + h + d;
  return re = new RegExp("(?:^" + w + "$)", "i"), re;
}, Me = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, J = {
  integer: function(e) {
    return J.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return J.number(e) && !J.integer(e);
  },
  array: function(e) {
    return Array.isArray(e);
  },
  regexp: function(e) {
    if (e instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(e);
    } catch {
      return !1;
    }
  },
  date: function(e) {
    return typeof e.getTime == "function" && typeof e.getMonth == "function" && typeof e.getYear == "function" && !isNaN(e.getTime());
  },
  number: function(e) {
    return isNaN(e) ? !1 : typeof e == "number";
  },
  object: function(e) {
    return typeof e == "object" && !J.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match(Me.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(Qt());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(Me.hex);
  }
}, en = function(e, n, r, i, o) {
  if (e.required && n === void 0) {
    rt(e, n, r, i, o);
    return;
  }
  var s = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], a = e.type;
  s.indexOf(a) > -1 ? J[a](n) || i.push(A(o.messages.types[a], e.fullField, e.type)) : a && typeof n !== e.type && i.push(A(o.messages.types[a], e.fullField, e.type));
}, tn = function(e, n, r, i, o) {
  var s = typeof e.len == "number", a = typeof e.min == "number", l = typeof e.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = n, f = null, g = typeof n == "number", b = typeof n == "string", P = Array.isArray(n);
  if (g ? f = "number" : b ? f = "string" : P && (f = "array"), !f)
    return !1;
  P && (c = n.length), b && (c = n.replace(u, "_").length), s ? c !== e.len && i.push(A(o.messages[f].len, e.fullField, e.len)) : a && !l && c < e.min ? i.push(A(o.messages[f].min, e.fullField, e.min)) : l && !a && c > e.max ? i.push(A(o.messages[f].max, e.fullField, e.max)) : a && l && (c < e.min || c > e.max) && i.push(A(o.messages[f].range, e.fullField, e.min, e.max));
}, H = "enum", nn = function(e, n, r, i, o) {
  e[H] = Array.isArray(e[H]) ? e[H] : [], e[H].indexOf(n) === -1 && i.push(A(o.messages[H], e.fullField, e[H].join(", ")));
}, rn = function(e, n, r, i, o) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(n) || i.push(A(o.messages.pattern.mismatch, e.fullField, n, e.pattern));
    else if (typeof e.pattern == "string") {
      var s = new RegExp(e.pattern);
      s.test(n) || i.push(A(o.messages.pattern.mismatch, e.fullField, n, e.pattern));
    }
  }
}, _ = {
  required: rt,
  whitespace: Kt,
  type: en,
  range: tn,
  enum: nn,
  pattern: rn
}, on = function(e, n, r, i, o) {
  var s = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (N(n, "string") && !e.required)
      return r();
    _.required(e, n, i, s, o, "string"), N(n, "string") || (_.type(e, n, i, s, o), _.range(e, n, i, s, o), _.pattern(e, n, i, s, o), e.whitespace === !0 && _.whitespace(e, n, i, s, o));
  }
  r(s);
}, an = function(e, n, r, i, o) {
  var s = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (N(n) && !e.required)
      return r();
    _.required(e, n, i, s, o), n !== void 0 && _.type(e, n, i, s, o);
  }
  r(s);
}, sn = function(e, n, r, i, o) {
  var s = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (n === "" && (n = void 0), N(n) && !e.required)
      return r();
    _.required(e, n, i, s, o), n !== void 0 && (_.type(e, n, i, s, o), _.range(e, n, i, s, o));
  }
  r(s);
}, ln = function(e, n, r, i, o) {
  var s = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (N(n) && !e.required)
      return r();
    _.required(e, n, i, s, o), n !== void 0 && _.type(e, n, i, s, o);
  }
  r(s);
}, cn = function(e, n, r, i, o) {
  var s = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (N(n) && !e.required)
      return r();
    _.required(e, n, i, s, o), N(n) || _.type(e, n, i, s, o);
  }
  r(s);
}, un = function(e, n, r, i, o) {
  var s = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (N(n) && !e.required)
      return r();
    _.required(e, n, i, s, o), n !== void 0 && (_.type(e, n, i, s, o), _.range(e, n, i, s, o));
  }
  r(s);
}, fn = function(e, n, r, i, o) {
  var s = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (N(n) && !e.required)
      return r();
    _.required(e, n, i, s, o), n !== void 0 && (_.type(e, n, i, s, o), _.range(e, n, i, s, o));
  }
  r(s);
}, dn = function(e, n, r, i, o) {
  var s = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (n == null && !e.required)
      return r();
    _.required(e, n, i, s, o, "array"), n != null && (_.type(e, n, i, s, o), _.range(e, n, i, s, o));
  }
  r(s);
}, pn = function(e, n, r, i, o) {
  var s = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (N(n) && !e.required)
      return r();
    _.required(e, n, i, s, o), n !== void 0 && _.type(e, n, i, s, o);
  }
  r(s);
}, gn = "enum", mn = function(e, n, r, i, o) {
  var s = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (N(n) && !e.required)
      return r();
    _.required(e, n, i, s, o), n !== void 0 && _[gn](e, n, i, s, o);
  }
  r(s);
}, vn = function(e, n, r, i, o) {
  var s = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (N(n, "string") && !e.required)
      return r();
    _.required(e, n, i, s, o), N(n, "string") || _.pattern(e, n, i, s, o);
  }
  r(s);
}, hn = function(e, n, r, i, o) {
  var s = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (N(n, "date") && !e.required)
      return r();
    if (_.required(e, n, i, s, o), !N(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), _.type(e, l, i, s, o), l && _.range(e, l.getTime(), i, s, o);
    }
  }
  r(s);
}, yn = function(e, n, r, i, o) {
  var s = [], a = Array.isArray(n) ? "array" : typeof n;
  _.required(e, n, i, s, o, a), r(s);
}, ue = function(e, n, r, i, o) {
  var s = e.type, a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (N(n, s) && !e.required)
      return r();
    _.required(e, n, i, a, o, s), N(n, s) || _.type(e, n, i, a, o);
  }
  r(a);
}, bn = function(e, n, r, i, o) {
  var s = [], a = e.required || !e.required && i.hasOwnProperty(e.field);
  if (a) {
    if (N(n) && !e.required)
      return r();
    _.required(e, n, i, s, o);
  }
  r(s);
}, Z = {
  string: on,
  method: an,
  number: sn,
  boolean: ln,
  regexp: cn,
  integer: un,
  float: fn,
  array: dn,
  object: pn,
  enum: mn,
  pattern: vn,
  date: hn,
  url: ue,
  hex: ue,
  email: ue,
  required: yn,
  any: bn
};
function ve() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var e = JSON.parse(JSON.stringify(this));
      return e.clone = this.clone, e;
    }
  };
}
var he = ve(), ne = /* @__PURE__ */ function() {
  function t(n) {
    this.rules = null, this._messages = he, this.define(n);
  }
  var e = t.prototype;
  return e.define = function(r) {
    var i = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(o) {
      var s = r[o];
      i.rules[o] = Array.isArray(s) ? s : [s];
    });
  }, e.messages = function(r) {
    return r && (this._messages = Ve(ve(), r)), this._messages;
  }, e.validate = function(r, i, o) {
    var s = this;
    i === void 0 && (i = {}), o === void 0 && (o = function() {
    });
    var a = r, l = i, u = o;
    if (typeof l == "function" && (u = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, a), Promise.resolve(a);
    function c(p) {
      var h = [], d = {};
      function w(y) {
        if (Array.isArray(y)) {
          var x;
          h = (x = h).concat.apply(x, y);
        } else
          h.push(y);
      }
      for (var v = 0; v < p.length; v++)
        w(p[v]);
      h.length ? (d = me(h), u(h, d)) : u(null, a);
    }
    if (l.messages) {
      var f = this.messages();
      f === he && (f = ve()), Ve(f, l.messages), l.messages = f;
    } else
      l.messages = this.messages();
    var g = {}, b = l.keys || Object.keys(this.rules);
    b.forEach(function(p) {
      var h = s.rules[p], d = a[p];
      h.forEach(function(w) {
        var v = w;
        typeof v.transform == "function" && (a === r && (a = $({}, a)), d = a[p] = v.transform(d)), typeof v == "function" ? v = {
          validator: v
        } : v = $({}, v), v.validator = s.getValidationMethod(v), v.validator && (v.field = p, v.fullField = v.fullField || p, v.type = s.getType(v), g[p] = g[p] || [], g[p].push({
          rule: v,
          value: d,
          source: a,
          field: p
        }));
      });
    });
    var P = {};
    return Jt(g, l, function(p, h) {
      var d = p.rule, w = (d.type === "object" || d.type === "array") && (typeof d.fields == "object" || typeof d.defaultField == "object");
      w = w && (d.required || !d.required && p.value), d.field = p.field;
      function v(T, O) {
        return $({}, O, {
          fullField: d.fullField + "." + T,
          fullFields: d.fullFields ? [].concat(d.fullFields, [T]) : [T]
        });
      }
      function y(T) {
        T === void 0 && (T = []);
        var O = Array.isArray(T) ? T : [T];
        !l.suppressWarning && O.length && t.warning("async-validator:", O), O.length && d.message !== void 0 && (O = [].concat(d.message));
        var E = O.map(qe(d, a));
        if (l.first && E.length)
          return P[d.field] = 1, h(E);
        if (!w)
          h(E);
        else {
          if (d.required && !p.value)
            return d.message !== void 0 ? E = [].concat(d.message).map(qe(d, a)) : l.error && (E = [l.error(d, A(l.messages.required, d.field))]), h(E);
          var q = {};
          d.defaultField && Object.keys(p.value).map(function(V) {
            q[V] = d.defaultField;
          }), q = $({}, q, p.rule.fields);
          var R = {};
          Object.keys(q).forEach(function(V) {
            var C = q[V], gt = Array.isArray(C) ? C : [C];
            R[V] = gt.map(v.bind(null, V));
          });
          var Ee = new t(R);
          Ee.messages(l.messages), p.rule.options && (p.rule.options.messages = l.messages, p.rule.options.error = l.error), Ee.validate(p.value, p.rule.options || l, function(V) {
            var C = [];
            E && E.length && C.push.apply(C, E), V && V.length && C.push.apply(C, V), h(C.length ? C : null);
          });
        }
      }
      var x;
      if (d.asyncValidator)
        x = d.asyncValidator(d, p.value, y, p.source, l);
      else if (d.validator) {
        try {
          x = d.validator(d, p.value, y, p.source, l);
        } catch (T) {
          console.error == null || console.error(T), l.suppressValidatorError || setTimeout(function() {
            throw T;
          }, 0), y(T.message);
        }
        x === !0 ? y() : x === !1 ? y(typeof d.message == "function" ? d.message(d.fullField || d.field) : d.message || (d.fullField || d.field) + " fails") : x instanceof Array ? y(x) : x instanceof Error && y(x.message);
      }
      x && x.then && x.then(function() {
        return y();
      }, function(T) {
        return y(T);
      });
    }, function(p) {
      c(p);
    }, a);
  }, e.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Z.hasOwnProperty(r.type))
      throw new Error(A("Unknown rule type %s", r.type));
    return r.type || "string";
  }, e.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var i = Object.keys(r), o = i.indexOf("message");
    return o !== -1 && i.splice(o, 1), i.length === 1 && i[0] === "required" ? Z.required : Z[this.getType(r)] || void 0;
  }, t;
}();
ne.register = function(e, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Z[e] = n;
};
ne.warning = nt;
ne.messages = he;
ne.validators = Z;
const ke = S({
  name: "SFormItem",
  props: zt,
  setup(t, {
    slots: e
  }) {
    const n = Y("LABEL_DATA"), r = I(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": n.value.layout === "horizontal",
      "s-form__item--vertical": n.value.layout === "vertical"
    })), i = I(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": n.value.layout === "vertical",
      [`s-form__label--${n.value.labelAlign}`]: n.value.layout === "horizontal",
      [`s-form__label--${n.value.labelSize}`]: n.value.layout === "horizontal"
    })), o = Y(tt), s = F(!1), a = F(""), u = {
      validate: () => {
        if (!o)
          return console.warn("请在Form中使用FormItem"), Promise.reject("请在Form中使用FormItem");
        if (!t.prop)
          return console.warn("如果要校验当前项，请设置prop字段"), Promise.reject("如果要校验当前项，请设置prop字段");
        if (!o.rules)
          return Promise.resolve({
            result: !0
          });
        const c = o.rules[t.prop] || void 0;
        if (!c)
          return Promise.resolve({
            result: !0
          });
        const f = o.model[t.prop];
        return new ne({
          [t.prop]: c
        }).validate({
          [t.prop]: f
        }, (b) => {
          b ? (s.value = !0, a.value = b[0].message || "校验错误") : (s.value = !1, a.value = "");
        });
      }
    };
    return X("FORM_ITEM_CTX", u), ye(() => {
      t.prop && (o == null || o.addItem(u));
    }), bt(() => {
      t.prop && (o == null || o.removeItem(u));
    }), () => {
      var c;
      return m("div", {
        class: r.value
      }, [m("span", {
        class: i.value
      }, [t.label]), m("div", null, [(c = e.default) == null ? void 0 : c.call(e)]), s.value && m("div", {
        class: "error-message"
      }, [a.value])]);
    };
  }
}), wn = {
  install(t) {
    t.component(Le.name, Le), t.component(ke.name, ke);
  }
}, xn = {
  modelValue: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  }
};
const Re = S({
  name: "SInput",
  props: xn,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = Y("FORM_ITEM_CTX"), r = (i) => {
      const o = i.target.value;
      e("update:modelValue", o), n.validate();
    };
    return () => m("div", {
      class: "s-input"
    }, [m("input", {
      class: "s-input__input",
      value: t.modelValue,
      onInput: r,
      type: t.type
    }, null)]);
  }
}), Pn = {
  install(t) {
    t.component(Re.name, Re);
  }
}, _n = {
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
const Tn = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
const On = S({
  name: "SBaseModal",
  props: Tn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      modelValue: r
    } = k(t);
    return () => {
      var i;
      return m("div", null, [r.value && m("div", {
        class: "s-base-modal"
      }, [m("div", {
        class: "s-base-modal__mask",
        onClick: () => {
          n("update:modelValue", !1);
        }
      }, null), (i = e.default) == null ? void 0 : i.call(e)])]);
    };
  }
}), je = S({
  name: "SModal",
  props: _n,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      modelValue: r,
      title: i,
      showClose: o,
      width: s,
      center: a,
      alignCenter: l,
      backgroundColor: u,
      top: c
    } = k(t), f = l.value ? {
      marginTop: 0,
      top: "50%",
      transform: "translateY(-50%)"
    } : null, g = I(() => typeof c.value == "number" ? `${c.value}px` : c.value);
    return () => m(On, {
      class: "s-modal",
      modelValue: r.value,
      "onUpdate:modelValue": () => {
        n("update:modelValue");
      }
    }, {
      default: () => {
        var b, P, p;
        return [m("div", {
          class: "s-modal__container",
          style: {
            width: s.value,
            ...f,
            marginTop: g.value,
            backgroundColor: u.value
          }
        }, [e.header ? (b = e.header) == null ? void 0 : b.call(e, {
          close: () => {
            n("update:modelValue", !1);
          }
        }) : m("div", {
          class: "s-modal__header",
          style: {
            textAlign: a.value ? "center" : "left"
          }
        }, [i.value, o.value && m("svg", {
          onClick: () => {
            n("update:modelValue", !1);
          },
          class: "s-modal__close",
          viewBox: "0 0 1024 1024",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg"
        }, [m("path", {
          fill: "currentColor",
          d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
        }, null)])]), m("div", {
          className: "s-modal__body"
        }, [(P = e.default) == null ? void 0 : P.call(e)]), m("div", {
          className: "s-modal__footer"
        }, [(p = e.footer) == null ? void 0 : p.call(e)])])];
      }
    });
  }
}), En = {
  install(t) {
    t.component(je.name, je);
  }
}, Nn = {
  name: {
    type: String,
    default: ""
  },
  prefix: {
    type: String,
    default: "icon"
  },
  size: {
    type: [String, Number],
    default: "inherit"
  },
  color: {
    type: String,
    default: "inherit"
  },
  component: {
    type: String,
    default: null
  }
};
window._iconfont_svg_string_1281272 = '<svg><symbol id="icon-angular" viewBox="0 0 1024 1024"><path d="M512 125.952L139.552 261.376 206.4 762.88 512 932.64l305.6-169.824 66.848-501.44L512 125.952z m0 68.096l302.176 109.888-55.808 418.56L512 859.36l-246.4-136.864-55.776-418.56L512 194.048zM512 256l-192 448h64l41.28-96h173.44L640 704h64L512 256z m0 145.6l0.64 1.92 22.4 56L571.2 544h-118.4l36.16-84.48 22.4-56 0.64-1.92z"  ></path></symbol><symbol id="icon-react" viewBox="0 0 1024 1024"><path d="M836.8 353.6c-11.2-3.2-20.8-6.4-32-9.6 1.6-8 3.2-14.4 4.8-22.4 24-118.4 8-214.4-46.4-246.4-52.8-30.4-139.2 1.6-225.6 76.8-8 8-17.6 14.4-25.6 22.4-4.8-4.8-11.2-9.6-16-16-91.2-81.6-182.4-115.2-236.8-83.2-52.8 30.4-68.8 120-46.4 233.6 1.6 11.2 4.8 22.4 8 33.6-12.8 3.2-25.6 8-36.8 11.2C76.8 392 0 451.2 0 510.4c0 62.4 81.6 124.8 192 163.2 9.6 3.2 17.6 6.4 27.2 8-3.2 12.8-6.4 24-8 36.8-20.8 110.4-4.8 198.4 48 228.8 54.4 32 145.6 0 233.6-78.4 6.4-6.4 14.4-12.8 20.8-19.2 8 8 17.6 16 27.2 24 84.8 73.6 169.6 104 222.4 73.6 54.4-32 72-126.4 48-241.6-1.6-8-3.2-17.6-6.4-27.2 6.4-1.6 12.8-3.2 19.2-6.4C940.8 636.8 1024 574.4 1024 510.4c0-59.2-78.4-118.4-187.2-156.8zM566.4 184c75.2-65.6 144-89.6 176-72 33.6 19.2 46.4 97.6 25.6 201.6-1.6 6.4-3.2 12.8-4.8 20.8-44.8-9.6-89.6-17.6-134.4-20.8-25.6-36.8-54.4-73.6-84.8-105.6 6.4-9.6 14.4-16 22.4-24zM334.4 614.4c9.6 17.6 20.8 35.2 32 51.2-32-3.2-62.4-8-92.8-14.4 8-28.8 19.2-59.2 32-89.6 9.6 19.2 19.2 36.8 28.8 52.8z m-60.8-240c28.8-6.4 59.2-11.2 91.2-16-11.2 16-20.8 33.6-30.4 51.2-9.6 17.6-19.2 33.6-28.8 52.8-12.8-30.4-22.4-59.2-32-88z m54.4 137.6c12.8-27.2 27.2-54.4 43.2-81.6s32-52.8 48-78.4c30.4-1.6 60.8-3.2 91.2-3.2s62.4 1.6 91.2 3.2c17.6 25.6 33.6 51.2 48 76.8s30.4 52.8 43.2 81.6c-12.8 27.2-27.2 54.4-43.2 81.6-16 27.2-32 52.8-48 78.4-30.4 1.6-60.8 3.2-92.8 3.2s-62.4-1.6-91.2-3.2C400 644.8 384 619.2 368 592s-25.6-52.8-40-80z m361.6 102.4l28.8-52.8c12.8 28.8 24 59.2 33.6 88-30.4 6.4-62.4 12.8-94.4 16 11.2-16 22.4-33.6 32-51.2z m28.8-153.6l-28.8-52.8c-9.6-17.6-20.8-33.6-30.4-49.6 32 4.8 62.4 9.6 91.2 16-8 30.4-19.2 59.2-32 86.4zM512 236.8c20.8 22.4 40 46.4 59.2 72-40-1.6-80-1.6-118.4 0 19.2-27.2 40-51.2 59.2-72zM280 113.6c33.6-19.2 108.8 8 187.2 78.4 4.8 4.8 9.6 9.6 16 14.4-30.4 33.6-59.2 68.8-86.4 105.6-44.8 4.8-89.6 11.2-134.4 20.8-3.2-9.6-4.8-20.8-6.4-30.4-19.2-97.6-6.4-169.6 24-188.8z m-48 528c-8-3.2-16-4.8-25.6-8-43.2-12.8-91.2-35.2-126.4-62.4-20.8-14.4-33.6-35.2-38.4-59.2 0-36.8 64-83.2 155.2-115.2 11.2-4.8 22.4-8 35.2-11.2 14.4 43.2 30.4 86.4 49.6 128-19.2 40-36.8 83.2-49.6 128zM464 836.8c-33.6 30.4-72 54.4-113.6 70.4-22.4 11.2-48 11.2-70.4 3.2-32-19.2-44.8-89.6-27.2-184 1.6-11.2 4.8-22.4 8-33.6 44.8 9.6 89.6 16 136 19.2 25.6 36.8 56 73.6 86.4 107.2-6.4 6.4-12.8 12.8-19.2 17.6z m49.6-48c-20.8-22.4-40-46.4-60.8-72 19.2 0 38.4 1.6 59.2 1.6 20.8 0 41.6 0 60.8-1.6-19.2 24-38.4 48-59.2 72zM774.4 848c-1.6 24-14.4 48-33.6 62.4-32 19.2-99.2-4.8-172.8-68.8-8-8-16-14.4-25.6-22.4 30.4-33.6 59.2-68.8 84.8-107.2 46.4-3.2 91.2-11.2 136-20.8l4.8 24c11.2 43.2 12.8 89.6 6.4 132.8z m36.8-214.4c-4.8 1.6-11.2 3.2-17.6 4.8-14.4-43.2-32-86.4-51.2-128 19.2-40 35.2-83.2 49.6-126.4 11.2 3.2 20.8 6.4 30.4 9.6 92.8 32 158.4 80 158.4 116.8 0 40-68.8 89.6-169.6 123.2zM512 603.2c51.2 0 91.2-41.6 91.2-91.2s-41.6-91.2-91.2-91.2-91.2 41.6-91.2 91.2 40 91.2 91.2 91.2z"  ></path></symbol><symbol id="icon-vuejs" viewBox="0 0 1024 1024"><path d="M777.8 128.6H624l-112 177.2-96-177.2H64L512 896 960 128.6h-182.2z m-602.4 64h107.6L512 589 740.8 192.6h107.6L512 769 175.4 192.6z"  ></path></symbol></svg>', function(t) {
  var n = (n = document.getElementsByTagName("script"))[n.length - 1], e = n.getAttribute("data-injectcss"), n = n.getAttribute("data-disable-injectsvg");
  if (!n) {
    var r, i, o, s, a, l = function(f, g) {
      g.parentNode.insertBefore(f, g);
    };
    if (e && !t.__iconfont__svg__cssinject__) {
      t.__iconfont__svg__cssinject__ = !0;
      try {
        document.write(
          "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
        );
      } catch (f) {
        console && console.log(f);
      }
    }
    r = function() {
      var f, g = document.createElement("div");
      g.innerHTML = t._iconfont_svg_string_1281272, (g = g.getElementsByTagName("svg")[0]) && (g.setAttribute("aria-hidden", "true"), g.style.position = "absolute", g.style.width = 0, g.style.height = 0, g.style.overflow = "hidden", g = g, (f = document.body).firstChild ? l(g, f.firstChild) : f.appendChild(g));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(r, 0) : (i = function() {
      document.removeEventListener("DOMContentLoaded", i, !1), r();
    }, document.addEventListener("DOMContentLoaded", i, !1)) : document.attachEvent && (o = r, s = t.document, a = !1, c(), s.onreadystatechange = function() {
      s.readyState == "complete" && (s.onreadystatechange = null, u());
    });
  }
  function u() {
    a || (a = !0, o());
  }
  function c() {
    try {
      s.documentElement.doScroll("left");
    } catch {
      return void setTimeout(c, 50);
    }
    u();
  }
}(window);
const ze = S({
  name: "SIcon",
  props: Nn,
  setup(t) {
    const e = I(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = m("img", {
      src: t.name,
      style: {
        width: e.value,
        verticalAlign: "middle"
      }
    }, null), r = m("span", {
      class: [t.prefix, t.prefix + "-" + t.name],
      style: {
        fontSize: e.value,
        color: t.color
      }
    }, null), i = m("svg", {
      style: {
        width: e.value,
        height: e.value
      }
    }, [m("use", {
      "xlink:href": `#${t.prefix}-${t.component}`,
      fill: t.color
    }, null)]), o = t.component ? i : /http|https/.test(t.name) ? n : r;
    return () => o;
  }
}), Fn = (t) => {
  const e = t.size ? typeof t.size == "number" ? `${t.size}px` : t.size : void 0, n = t.color ? t.color : "black";
  return m("svg", {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-arrow-down",
    style: {
      width: e,
      height: e,
      fill: n,
      stroke: n
    }
  }, [m("path", {
    d: "m11.27 27.728 12.727 12.728 12.728-12.728M24 5v34.295"
  }, null)]);
}, Sn = {
  install(t) {
    t.component(ze.name, ze), t.component("ArrowDownIcon", Fn);
  }
}, An = {
  modelValue: {
    type: String,
    default: ""
  },
  closable: {
    type: Boolean,
    default: !1
  },
  addable: {
    type: Boolean,
    default: !1
  }
};
const Be = S({
  name: "STabs",
  props: An,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const n = F([]);
    X("active-data", n);
    const r = F(t.modelValue);
    X("active-tab", r);
    const i = (a) => {
      r.value = a;
    }, o = (a) => {
      const l = n.value.findIndex((u) => u.id === a);
      n.value.splice(l, 1);
    }, s = () => {
      const a = Ke();
      n.value.push({
        id: a,
        type: "random",
        title: `Tab${a}`,
        content: `Tab${a} Content`
      }), r.value = a;
    };
    return () => {
      var a;
      return m("div", {
        class: "s-tabs"
      }, [m("ul", {
        class: "s-tabs__nav"
      }, [n.value.map((l) => m("li", {
        onClick: () => i(l.id),
        class: l.id === r.value ? "active" : ""
      }, [l.title, t.closable && m("svg", {
        onClick: () => o(l.id),
        style: "margin-left: 8px;",
        viewBox: "0 0 1024 1024",
        width: "12",
        height: "12"
      }, [m("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])])), t.addable && m("li", null, [m("svg", {
        onClick: s,
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14"
      }, [m("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)])])]), (a = e.default) == null ? void 0 : a.call(e), n.value.filter((l) => l.type === "random").map((l) => m("div", {
        class: "s-tab"
      }, [l.id === r.value && l.content]))]);
    };
  }
}), In = {
  id: {
    type: String,
    required: !0
  },
  title: {
    type: String,
    required: !0
  }
};
const $e = S({
  name: "STab",
  props: In,
  setup(t, {
    slots: e
  }) {
    const n = Y("active-tab");
    return Y("active-data").value.push({
      id: t.id,
      title: t.title
    }), () => {
      var i;
      return m(be, null, [t.id === n.value && m("div", {
        class: "s-tab"
      }, [(i = e.default) == null ? void 0 : i.call(e)])]);
    };
  }
}), Ln = {
  install(t) {
    t.component(Be.name, Be), t.component($e.name, $e);
  }
}, Cn = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  host: {
    type: Object,
    default: () => null
  },
  title: {
    type: String,
    default: ""
  },
  showArrow: {
    type: Boolean,
    default: !1
  },
  placement: {
    type: String,
    default: "bottom"
  }
};
const Dn = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  host: {
    type: Object,
    default: () => null
  },
  showArrow: {
    type: Boolean,
    default: !1
  },
  placement: {
    type: String,
    default: "bottom"
  }
};
function xe(t) {
  return t.split("-")[1];
}
function it(t) {
  return t === "y" ? "height" : "width";
}
function Pe(t) {
  return t.split("-")[0];
}
function _e(t) {
  return ["top", "bottom"].includes(Pe(t)) ? "x" : "y";
}
function He(t, e, n) {
  let {
    reference: r,
    floating: i
  } = t;
  const o = r.x + r.width / 2 - i.width / 2, s = r.y + r.height / 2 - i.height / 2, a = _e(e), l = it(a), u = r[l] / 2 - i[l] / 2, c = Pe(e), f = a === "x";
  let g;
  switch (c) {
    case "top":
      g = {
        x: o,
        y: r.y - i.height
      };
      break;
    case "bottom":
      g = {
        x: o,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: s
      };
      break;
    case "left":
      g = {
        x: r.x - i.width,
        y: s
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (xe(e)) {
    case "start":
      g[a] -= u * (n && f ? -1 : 1);
      break;
    case "end":
      g[a] += u * (n && f ? -1 : 1);
      break;
  }
  return g;
}
const qn = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: s
  } = n, a = o.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  if (process.env.NODE_ENV !== "production") {
    if (s == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), a.filter((p) => {
      let {
        name: h
      } = p;
      return h === "autoPlacement" || h === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!t || !e) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
  }
  let u = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: c,
    y: f
  } = He(u, r, l), g = r, b = {}, P = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: h,
      fn: d
    } = a[p], {
      x: w,
      y: v,
      data: y,
      reset: x
    } = await d({
      x: c,
      y: f,
      initialPlacement: r,
      placement: g,
      strategy: i,
      middlewareData: b,
      rects: u,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (c = w ?? c, f = v ?? f, b = {
      ...b,
      [h]: {
        ...b[h],
        ...y
      }
    }, process.env.NODE_ENV !== "production" && P > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), x && P <= 50) {
      P++, typeof x == "object" && (x.placement && (g = x.placement), x.rects && (u = x.rects === !0 ? await s.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : x.rects), {
        x: c,
        y: f
      } = He(u, g, l)), p = -1;
      continue;
    }
  }
  return {
    x: c,
    y: f,
    placement: g,
    strategy: i,
    middlewareData: b
  };
};
function Vn(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Mn(t) {
  return typeof t != "number" ? Vn(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function We(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
const kn = Math.min, Rn = Math.max;
function jn(t, e, n) {
  return Rn(t, kn(e, n));
}
const zn = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: r = 0
    } = t || {}, {
      x: i,
      y: o,
      placement: s,
      rects: a,
      platform: l
    } = e;
    if (n == null)
      return process.env.NODE_ENV !== "production" && console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const u = Mn(r), c = {
      x: i,
      y: o
    }, f = _e(s), g = it(f), b = await l.getDimensions(n), P = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", h = a.reference[g] + a.reference[f] - c[f] - a.floating[g], d = c[f] - a.reference[f], w = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
    let v = w ? f === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0;
    v === 0 && (v = a.floating[g]);
    const y = h / 2 - d / 2, x = u[P], T = v - b[g] - u[p], O = v / 2 - b[g] / 2 + y, E = jn(x, O, T), R = xe(s) != null && O != E && a.reference[g] / 2 - (O < x ? u[P] : u[p]) - b[g] / 2 < 0 ? O < x ? x - O : T - O : 0;
    return {
      [f]: c[f] - R,
      data: {
        [f]: E,
        centerOffset: O - E
      }
    };
  }
});
async function Bn(t, e) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = t, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), s = Pe(n), a = xe(n), l = _e(n) === "x", u = ["left", "top"].includes(s) ? -1 : 1, c = o && l ? -1 : 1, f = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: g,
    crossAxis: b,
    alignmentAxis: P
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return a && typeof P == "number" && (b = a === "end" ? P * -1 : P), l ? {
    x: b * c,
    y: g * u
  } : {
    x: g * u,
    y: b * c
  };
}
const $n = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, i = await Bn(e, t);
      return {
        x: n + i.x,
        y: r + i.y,
        data: i
      };
    }
  };
};
function L(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function D(t) {
  return L(t).getComputedStyle(t);
}
function j(t) {
  return at(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ie;
function ot() {
  if (ie)
    return ie;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ie = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ie) : navigator.userAgent;
}
function M(t) {
  return t instanceof L(t).HTMLElement;
}
function z(t) {
  return t instanceof L(t).Element;
}
function at(t) {
  return t instanceof L(t).Node;
}
function Ue(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = L(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function se(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: i
  } = D(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(i);
}
function Hn(t) {
  return ["table", "td", "th"].includes(j(t));
}
function Te(t) {
  const e = /firefox/i.test(ot()), n = D(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    (i) => {
      const o = n.contain;
      return o != null ? o.includes(i) : !1;
    }
  );
}
function st() {
  return !/^((?!chrome|android).)*safari/i.test(ot());
}
function Oe(t) {
  return ["html", "body", "#document"].includes(j(t));
}
const Ye = Math.min, G = Math.max, ae = Math.round;
function lt(t) {
  const e = D(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const i = t.offsetWidth, o = t.offsetHeight, s = ae(n) !== i || ae(r) !== o;
  return s && (n = i, r = o), {
    width: n,
    height: r,
    fallback: s
  };
}
function ct(t) {
  return z(t) ? t : t.contextElement;
}
const ut = {
  x: 1,
  y: 1
};
function U(t) {
  const e = ct(t);
  if (!M(e))
    return ut;
  const n = e.getBoundingClientRect(), {
    width: r,
    height: i,
    fallback: o
  } = lt(e);
  let s = (o ? ae(n.width) : n.width) / r, a = (o ? ae(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
function Q(t, e, n, r) {
  var i, o;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const s = t.getBoundingClientRect(), a = ct(t);
  let l = ut;
  e && (r ? z(r) && (l = U(r)) : l = U(t));
  const u = a ? L(a) : window, c = !st() && n;
  let f = (s.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, g = (s.top + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y, b = s.width / l.x, P = s.height / l.y;
  if (a) {
    const p = L(a), h = r && z(r) ? L(r) : r;
    let d = p.frameElement;
    for (; d && r && h !== p; ) {
      const w = U(d), v = d.getBoundingClientRect(), y = getComputedStyle(d);
      v.x += (d.clientLeft + parseFloat(y.paddingLeft)) * w.x, v.y += (d.clientTop + parseFloat(y.paddingTop)) * w.y, f *= w.x, g *= w.y, b *= w.x, P *= w.y, f += v.x, g += v.y, d = L(d).frameElement;
    }
  }
  return {
    width: b,
    height: P,
    top: g,
    right: f + b,
    bottom: g + P,
    left: f,
    x: f,
    y: g
  };
}
function B(t) {
  return ((at(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function le(t) {
  return z(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function ft(t) {
  return Q(B(t)).left + le(t).scrollLeft;
}
function Wn(t, e, n) {
  const r = M(e), i = B(e), o = Q(t, !0, n === "fixed", e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((j(e) !== "body" || se(i)) && (s = le(e)), M(e)) {
      const l = Q(e, !0);
      a.x = l.x + e.clientLeft, a.y = l.y + e.clientTop;
    } else
      i && (a.x = ft(i));
  return {
    x: o.left + s.scrollLeft - a.x,
    y: o.top + s.scrollTop - a.y,
    width: o.width,
    height: o.height
  };
}
function ee(t) {
  if (j(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (Ue(t) ? t.host : null) || B(t);
  return Ue(e) ? e.host : e;
}
function Xe(t) {
  return !M(t) || D(t).position === "fixed" ? null : t.offsetParent;
}
function Un(t) {
  let e = ee(t);
  for (; M(e) && !Oe(e); ) {
    if (Te(e))
      return e;
    e = ee(e);
  }
  return null;
}
function Je(t) {
  const e = L(t);
  let n = Xe(t);
  for (; n && Hn(n) && D(n).position === "static"; )
    n = Xe(n);
  return n && (j(n) === "html" || j(n) === "body" && D(n).position === "static" && !Te(n)) ? e : n || Un(t) || e;
}
function Yn(t) {
  return lt(t);
}
function Xn(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const i = M(n), o = B(n);
  if (n === o)
    return e;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 1,
    y: 1
  };
  const l = {
    x: 0,
    y: 0
  };
  if ((i || !i && r !== "fixed") && ((j(n) !== "body" || se(o)) && (s = le(n)), M(n))) {
    const u = Q(n);
    a = U(n), l.x = u.x + n.clientLeft, l.y = u.y + n.clientTop;
  }
  return {
    width: e.width * a.x,
    height: e.height * a.y,
    x: e.x * a.x - s.scrollLeft * a.x + l.x,
    y: e.y * a.y - s.scrollTop * a.y + l.y
  };
}
function Jn(t, e) {
  const n = L(t), r = B(t), i = n.visualViewport;
  let o = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (i) {
    o = i.width, s = i.height;
    const u = st();
    (u || !u && e === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: a,
    y: l
  };
}
function Zn(t) {
  var e;
  const n = B(t), r = le(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = G(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = G(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let a = -r.scrollLeft + ft(t);
  const l = -r.scrollTop;
  return D(i || n).direction === "rtl" && (a += G(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: a,
    y: l
  };
}
function dt(t) {
  const e = ee(t);
  return Oe(e) ? t.ownerDocument.body : M(e) && se(e) ? e : dt(e);
}
function pt(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = dt(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = L(r);
  return i ? e.concat(o, o.visualViewport || [], se(r) ? r : []) : e.concat(r, pt(r));
}
function Gn(t, e) {
  const n = Q(t, !0, e === "fixed"), r = n.top + t.clientTop, i = n.left + t.clientLeft, o = M(t) ? U(t) : {
    x: 1,
    y: 1
  }, s = t.clientWidth * o.x, a = t.clientHeight * o.y, l = i * o.x, u = r * o.y;
  return {
    top: u,
    left: l,
    right: l + s,
    bottom: u + a,
    x: l,
    y: u,
    width: s,
    height: a
  };
}
function Ze(t, e, n) {
  return e === "viewport" ? We(Jn(t, n)) : z(e) ? Gn(e, n) : We(Zn(B(t)));
}
function Kn(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = pt(t).filter((a) => z(a) && j(a) !== "body"), i = null;
  const o = D(t).position === "fixed";
  let s = o ? ee(t) : t;
  for (; z(s) && !Oe(s); ) {
    const a = D(s), l = Te(s);
    (o ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? r = r.filter((c) => c !== s) : i = a, s = ee(s);
  }
  return e.set(t, r), r;
}
function Qn(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = t;
  const s = [...n === "clippingAncestors" ? Kn(e, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const f = Ze(e, c, i);
    return u.top = G(f.top, u.top), u.right = Ye(f.right, u.right), u.bottom = Ye(f.bottom, u.bottom), u.left = G(f.left, u.left), u;
  }, Ze(e, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
const er = {
  getClippingRect: Qn,
  convertOffsetParentRelativeRectToViewportRelativeRect: Xn,
  isElement: z,
  getDimensions: Yn,
  getOffsetParent: Je,
  getDocumentElement: B,
  getScale: U,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: r
    } = t;
    const i = this.getOffsetParent || Je, o = this.getDimensions;
    return {
      reference: Wn(e, await i(n), r),
      floating: {
        x: 0,
        y: 0,
        ...await o(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => D(t).direction === "rtl"
}, tr = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: er,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return qn(t, e, {
    ...i,
    platform: o
  });
};
const nr = S({
  name: "SBasePopover",
  props: Dn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    attrs: n
  }) {
    const {
      host: r,
      modelValue: i,
      showArrow: o,
      placement: s
    } = k(t), a = F(), l = F(), u = () => {
      const c = [];
      o.value && (c.push($n(8)), c.push(zn({
        element: a.value
      }))), tr(r.value, l.value, {
        middleware: c,
        placement: s.value
      }).then(({
        x: f,
        y: g,
        middlewareData: b,
        placement: P
      }) => {
        if (Object.assign(l.value.style, {
          left: `${f}px`,
          top: `${g}px`
        }), o.value) {
          const {
            x: p,
            y: h
          } = b.arrow, d = P.split("-")[0], w = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[d], v = ["top", "right", "bottom", "left"], y = v.indexOf(d) - 1, x = v[y < 0 ? y + 4 : y];
          Object.assign(a.value.style, {
            left: `${p}px`,
            top: `${h}px`,
            [w]: "-4px",
            [`border-${d}-color`]: "transparent",
            [`border-${x}-color`]: "transparent"
          });
        }
      });
    };
    return fe(i, (c) => {
      c && wt(u);
    }, {
      immediate: !0
    }), () => {
      var c;
      return m(be, null, [i.value && m("div", te({
        ref: l,
        class: "s-base-popover"
      }, n), [(c = e.default) == null ? void 0 : c.call(e), o.value && m("div", {
        class: "s-base-popover__arrow",
        ref: a
      }, null)])]);
    };
  }
}), Ge = S({
  name: "SPopover",
  props: Cn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const {
      modelValue: n,
      title: r
    } = k(t);
    return () => m(be, null, [n.value && m(nr, te({
      class: "s-popover"
    }, t), {
      default: () => {
        var i;
        return [m("h4", {
          class: "s-popover__title"
        }, [r.value]), (i = e.default) == null ? void 0 : i.call(e)];
      }
    })]);
  }
}), rr = {
  install(t) {
    t.component(Ge.name, Ge);
  }
}, ir = [
  Pt,
  qt,
  Rt,
  wn,
  Pn,
  En,
  Sn,
  Ln,
  rr
], ar = {
  version: "0.0.1",
  install(t) {
    ir.forEach((e) => t.use(e));
  }
};
export {
  Ne as Button,
  Le as Form,
  ze as Icon,
  Re as Input,
  je as Modal,
  Ie as Pagination,
  Ge as Popover,
  $e as Tab,
  Be as Tabs,
  Ae as Tree,
  ar as default
};
