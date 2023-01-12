import { defineComponent as C, toRefs as B, createVNode as m, computed as L, reactive as bt, ref as A, unref as wt, inject as J, mergeProps as re, Fragment as fe, onMounted as Oe, provide as Z, createTextVNode as Y, watch as he, onUnmounted as tt, nextTick as xt } from "vue";
const Pt = {
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
const Ae = C({
  name: "SButton",
  props: Pt,
  setup(t, {
    slots: e
  }) {
    const {
      type: n,
      size: r,
      disabled: i,
      block: o
    } = B(t), a = o.value ? "s-btn--block" : "";
    return () => m("button", {
      disabled: i.value,
      class: `s-btn s-btn--${n.value} s-btn--${r.value} ${a}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), _t = {
  install(t) {
    t.component(Ae.name, Ae);
  }
};
function Se(t, e = 0, n = []) {
  return e++, t.reduce((r, i) => {
    const o = { ...i };
    o.level = e, n.length > 0 && n[n.length - 1].level >= e && n.pop(), n.push(o);
    const a = n[n.length - 2];
    if (a && (o.parentId = a.id), o.children) {
      const l = Se(o.children, e, n);
      return delete o.children, r.concat(o, l);
    } else
      return o.isLeaf === void 0 && (o.isLeaf = !0), r.concat(o);
  }, []);
}
function Ot(t, { getChildren: e, getParent: n }) {
  const r = (o) => {
    o.checked = !o.checked, o.inChecked = !1, e(o).forEach((a) => {
      a.checked = o.checked;
    }), i(o);
  }, i = (o) => {
    const a = n(o);
    if (!a)
      return;
    const l = e(a, !0), s = l.every((u) => u.checked);
    a.checked = s;
    const c = l.some((u) => u.checked);
    s ? a.inChecked = !1 : c ? a.inChecked = !0 : a.inChecked = !1, a.parentId && i(a);
  };
  return {
    toggleCheckNode: r
  };
}
function St(t) {
  const e = L(() => {
    let l = [];
    const s = [];
    for (const c of t.value)
      l.map((u) => u.id).includes(c.id) || (c.expanded !== !0 && (l = n(c)), s.push(c));
    return s;
  }), n = (l, s = !0) => {
    const c = [], u = t.value.findIndex((f) => f.id === l.id);
    for (let f = u + 1; f < t.value.length && l.level < t.value[f].level; f++)
      (s || l.level === t.value[f].level - 1) && c.push(t.value[f]);
    return c;
  }, r = (l, s = []) => {
    const c = n(l, !1);
    return s.push(...c), c.forEach((u) => {
      u.expanded && r(u, s);
    }), s;
  };
  return {
    expandedTree: e,
    getChildren: n,
    getChildrenExpanded: r,
    getIndex: (l) => l ? t.value.findIndex((s) => s.id === l.id) : -1,
    getNode: (l) => t.value.find((s) => s.id === l.id),
    getParent: (l) => t.value.find((s) => s.id === l.parentId)
  };
}
const me = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function Et(t, e, { getChildren: n, getParent: r }) {
  const i = bt({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), o = L(
    () => e.value.reduce(
      (p, v) => ({
        ...p,
        [v.id]: v
      }),
      {}
    )
  ), a = (p) => {
    p == null || p.classList.remove(...Object.values(me));
  }, l = (p, v) => {
    var b;
    const d = (b = o.value[p]) == null ? void 0 : b.parentId;
    return d === v ? !0 : d !== void 0 ? l(d, v) : !1;
  }, s = () => {
    i.dropType = void 0, i.draggingNode = null, i.draggingTreeNode = null;
  }, c = (p, v) => {
    var d;
    p.stopPropagation(), i.draggingNode = p.target, i.draggingTreeNode = v, (d = p.dataTransfer) == null || d.setData("dragNodeId", v.id);
  }, u = (p) => {
    if (p.preventDefault(), p.stopPropagation(), !!i.draggingNode && t) {
      if (p.dataTransfer && (p.dataTransfer.dropEffect = "move"), !e)
        return;
      let v = {};
      typeof t == "object" ? v = t : t === !0 && (v = { dropInner: !0 });
      const { dropPrev: d, dropNext: b, dropInner: h } = v;
      let y;
      const w = d ? h ? 0.25 : b ? 0.45 : 1 : -1, O = b ? h ? 0.75 : d ? 0.55 : 0 : 1, S = p.currentTarget, E = S == null ? void 0 : S.getBoundingClientRect(), N = p.clientY - ((E == null ? void 0 : E.top) || 0);
      if (N < ((E == null ? void 0 : E.height) || 0) * w ? y = "dropPrev" : N > ((E == null ? void 0 : E.height) || 0) * O ? y = "dropNext" : h ? y = "dropInner" : y = void 0, y) {
        const I = S == null ? void 0 : S.classList;
        I && (I.contains(me[y]) || (a(S), I.add(me[y])));
      } else
        a(S);
      i.dropType = y;
    }
  }, f = (p) => {
    p.stopPropagation(), i.draggingNode && a(p.currentTarget);
  }, g = (p, v) => {
    var b;
    if (p.preventDefault(), p.stopPropagation(), a(p.currentTarget), !i.draggingNode || !t)
      return;
    const d = (b = p.dataTransfer) == null ? void 0 : b.getData("dragNodeId");
    if (d) {
      const h = l(v.id, d);
      if (d === v.id || h)
        return;
      i.dropType && x(d, v), s();
    }
  };
  function x(p, v) {
    const d = e.value.find((b) => b.id === p);
    if (d) {
      let b;
      const h = n(d), y = r(d);
      if (i.dropType === "dropInner") {
        b = {
          ...d,
          parentId: v.id,
          level: v.level + 1
        };
        const w = e.value.indexOf(v);
        e.value.splice(w + 1, 0, b), v.isLeaf = void 0;
        const O = e.value.indexOf(d);
        e.value.splice(O, 1);
      } else if (i.dropType === "dropNext") {
        b = {
          ...d,
          parentId: v.parentId,
          level: v.level
        };
        const w = e.value.indexOf(v), O = n(v, !0).length;
        e.value.splice(
          w + O + 1,
          0,
          b
        );
        const S = e.value.indexOf(d);
        e.value.splice(S, 1);
      } else if (i.dropType === "dropPrev") {
        b = {
          ...d,
          parentId: v.parentId,
          level: v.level
        };
        const w = e.value.indexOf(v);
        e.value.splice(w, 0, b);
        const O = e.value.indexOf(d);
        e.value.splice(O, 1);
      }
      i.dropType = "dropInner", h.forEach((w) => x(w.id, b)), y && n(y).length === 0 && (y.isLeaf = !0);
    }
  }
  return {
    onDragstart: c,
    onDragover: u,
    onDragleave: f,
    onDrop: g,
    onDragend: (p) => {
      p.preventDefault(), p.stopPropagation(), s();
    }
  };
}
function Tt(t, { getNode: e, getIndex: n, getChildren: r }, { emit: i }) {
  const o = (c) => {
    const u = e(c);
    u && u.isLeaf === !1 && !u.childNodeCount && (u.loading = !0, i("lazy-load", c, a));
  }, a = (c) => {
    const u = e(c.node);
    if (u) {
      u.loading = !1;
      const f = A(
        Se(c.treeItems, u.level)
      );
      l(u, f), s(u, f);
      const g = r(u);
      u.childNodeCount = g.length;
    }
  }, l = (c, u) => {
    u.value.forEach((f) => {
      f.level - 1 === c.level && !f.parentId && (f.parentId = c.id);
    });
  }, s = (c, u) => {
    const f = n(c);
    f && t.value.splice(f + 1, 0, ...u.value);
  };
  return {
    lazyLoadNodes: o
  };
}
function nt(t = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  for (let r = 0; r < t; r++)
    n += e[parseInt((Math.random() * e.length).toString())];
  return n;
}
function Ct(t, { getChildren: e, getIndex: n }) {
  return {
    append: (o, a) => {
      const l = e(o, !1), s = l[l.length - 1];
      let c = n(o) + 1;
      s && (c = n(s) + 1), o.expanded = !0, o.isLeaf = !1;
      const u = A({
        ...a,
        level: o.level + 1,
        parentId: o.id,
        isLeaf: !0
      });
      u.value.id === void 0 && (u.value.id = nt()), t.value.splice(c, 0, u.value);
    },
    remove: (o) => {
      const a = e(o).map((l) => l.id);
      t.value = t.value.filter(
        (l) => l.id !== o.id && !a.includes(l.id)
      );
    }
  };
}
function At(t, e, n, r) {
  const { lazyLoadNodes: i } = r;
  return {
    toggleNode: (a, l, s = !1) => {
      if (a.stopPropagation(), s)
        t.value.forEach((c) => {
          c.level === l.level && c.id !== l.id && (c.expanded = !1), c.id === l.id && (c.expanded = !c.expanded), c.expanded && i(c);
        });
      else {
        const c = t.value.find((u) => u.id === l.id);
        c && (c.expanded = !c.expanded, c.expanded && i(c));
      }
    }
  };
}
function Ft(t, e, n) {
  const r = wt(t), i = A(Se(r)), o = St(i), a = [At, Ot, Ct], l = Tt(i, o, n), s = Et(e.draggable, i, o);
  return {
    ...a.reduce((u, f) => ({ ...u, ...f(i, o, n, l) }), {}),
    ...o,
    ...s,
    treeData: i
  };
}
const rt = {
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
  },
  accordion: {
    type: Boolean,
    default: !1
  }
}, Lt = {
  onClick: {
    type: Function,
    required: !0
  }
};
const Nt = C({
  name: "SBaseSelectAll",
  props: Lt,
  setup(t) {
    return () => m("label", {
      class: "s-base-select-all is-checked"
    }, [m("span", {
      class: "s-base-select-all__input is-checked"
    }, [m("span", {
      class: "s-base-select-all__inner"
    }, null), m("input", {
      type: "checkbox",
      "aria-hidden": "false",
      class: "s-base-select-all__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        t.onClick();
      }
    }, null)])]);
  }
}), It = {
  onClick: {
    type: Function,
    required: !0
  }
};
const kt = C({
  name: "SBaseSelectionBox",
  props: It,
  setup(t) {
    return () => m("label", {
      class: "s-base-selection-box"
    }, [m("span", {
      class: "s-base-selection-box__input"
    }, [m("span", {
      class: "s-base-selection-box__inner"
    }, null), m("input", {
      type: "checkbox",
      "aria-hidden": "false",
      class: "s-base-selection-box__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        t.onClick();
      }
    }, null)])]);
  }
}), Dt = {
  onClick: {
    type: Function,
    required: !0
  }
};
const qt = C({
  name: "SBaseSemiSelection",
  props: Dt,
  setup(t) {
    return () => m("label", {
      class: "s-base-semi-selection",
      "aria-controls": "undefined"
    }, [m("span", {
      class: "s-base-semi-selection__input is-indeterminate",
      tabindex: "0",
      role: "checkbox",
      "aria-checked": "mixed"
    }, [m("span", {
      class: "s-base-semi-selection__inner"
    }, null), m("input", {
      type: "checkbox",
      "aria-hidden": "true",
      class: "s-base-semi-selection__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        t.onClick();
      }
    }, null)])]);
  }
}), Vt = {
  ...rt,
  treeNode: {
    type: Object,
    required: !0
  }
}, Fe = 34, Le = 24, Rt = C({
  name: "STreeNode",
  props: Vt,
  setup(t, {
    slots: e
  }) {
    const {
      lineable: n,
      checkable: r,
      treeNode: i,
      operable: o,
      draggable: a
    } = B(t), {
      toggleCheckNode: l,
      getChildrenExpanded: s,
      append: c,
      remove: u,
      onDragend: f,
      onDragleave: g,
      onDragover: x,
      onDragstart: P,
      onDrop: p
    } = J("TREE_UTILS"), v = A(!1), d = () => {
      v.value ? v.value = !1 : v.value = !0;
    };
    let b = {};
    return a.value && (b = {
      draggable: !0,
      onDragend: (h) => f(h),
      onDragleave: (h) => g(h),
      onDragover: (h) => x(h),
      onDragstart: (h) => P(h, i.value),
      onDrop: (h) => p(h, i.value)
    }), () => {
      var h, y, w;
      return m("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${Le * (i.value.level - 1)}px`
        },
        onMouseenter: d,
        onMouseleave: d
      }, [!i.value.isLeaf && i.value.expanded && n.value && m("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${Fe * s(i.value).length}px`,
          left: `${Le * (i.value.level - 1) + 9}px`,
          top: `${Fe}px`
        }
      }, null), m("div", re({
        class: "s-tree__node--content"
      }, b), [i.value.isLeaf ? m("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (h = e.icon) == null ? void 0 : h.call(e), r.value && m(fe, null, [i.value.inChecked ? m(qt, {
        onClick: () => l(i.value)
      }, null) : i.value.checked ? m(Nt, {
        onClick: () => l(i.value)
      }, null) : m(kt, {
        onClick: () => l(i.value)
      }, null)]), (y = e.content) == null ? void 0 : y.call(e), o.value && v.value && m("span", {
        class: "inline-flex ml-1"
      }, [m("svg", {
        onClick: () => {
          c(i.value, {
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
          u(i.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [m("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), i.value.loading && ((w = e.loading) == null ? void 0 : w.call(e))])]);
    };
  }
}), Bt = (t, {
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
const Mt = {
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
const jt = C({
  name: "SVirtualList",
  props: Mt,
  setup(t, {
    slots: e
  }) {
    const {
      data: n,
      itemHeight: r,
      component: i
    } = B(t), o = A(), a = A(0), l = A(0), s = A(0), c = L(() => Math.ceil(a.value / r.value)), u = L(() => n.value.slice(s.value, Math.min(s.value + c.value, n.value.length)));
    Oe(() => {
      var g;
      a.value = (g = o.value) == null ? void 0 : g.clientHeight;
    });
    const f = (g) => {
      const {
        scrollTop: x
      } = g.target;
      s.value = Math.floor(x / r.value), l.value = x - x % r.value;
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
          transform: `translate3d(0, ${l.value}px, 0)`
        }
      }, [u.value.map((g, x) => {
        var P;
        return (P = e.default) == null ? void 0 : P.call(e, {
          item: g,
          index: x
        });
      })])]
    });
  }
}), Ne = C({
  name: "STree",
  props: rt,
  emits: ["lazy-load"],
  setup(t, e) {
    const {
      data: n,
      height: r,
      itemHeight: i,
      accordion: o
    } = B(t), {
      slots: a
    } = e, l = Ft(n, t, e);
    return Z("TREE_UTILS", l), () => {
      const s = (c) => m(Rt, re(t, {
        treeNode: c,
        onClick: o.value ? (u) => l.toggleNode(u, c, o.value) : ""
      }), {
        content: () => a.content ? a.content(c) : c.label,
        icon: () => a.icon ? a.icon({
          nodeData: c,
          toggleNode: l.toggleNode
        }) : m(Bt, {
          expanded: !!c.expanded,
          onClick: (u) => l.toggleNode(u, c, o.value)
        }, null),
        loading: () => a.loading ? a.loading({
          nodeData: l
        }) : m("span", {
          class: "ml-1"
        }, [Y("loading...")])
      });
      return m("div", {
        class: "s-tree"
      }, [r != null && r.value ? m("div", {
        style: {
          height: `${r.value}px`
        }
      }, [m(jt, {
        data: l.expandedTree.value,
        itemHeight: i.value
      }, {
        default: ({
          item: c
        }) => s(c)
      })]) : l.expandedTree.value.map((c) => s(c))]);
    };
  }
}), zt = {
  install(t) {
    t.component(Ne.name, Ne);
  }
}, it = {
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
function $t(t = 1) {
  const e = A(t), n = (a) => {
    e.value = a;
  }, r = (a) => {
    e.value += a;
  };
  return {
    pageIndex: e,
    setPageIndex: n,
    jumpPage: r,
    prevPage: () => r(-1),
    nextPage: () => r(1)
  };
}
const Ht = (t, e, n) => {
  const r = Array.from(Array(t).keys());
  if (t <= n)
    return r.slice(2, t);
  {
    const i = Math.ceil(n / 2);
    return e <= i ? r.slice(2, n) : e >= t - i + 1 ? r.slice(t - n + 2, t) : r.slice(e - i + 2, e + i - 1);
  }
}, Wt = it, ye = C({
  name: "SPager",
  props: Wt,
  setup(t) {
    const {
      total: e,
      pageSize: n,
      pagerCount: r
    } = B(t), i = L(() => Math.ceil(e.value / n.value)), {
      pageIndex: o,
      setPageIndex: a,
      jumpPage: l,
      prevPage: s,
      nextPage: c
    } = $t(), u = L(() => Ht(i.value, o.value, r.value));
    return {
      totalPage: i,
      pageIndex: o,
      setPageIndex: a,
      jumpPage: l,
      prevPage: s,
      nextPage: c,
      centerPages: u
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
    }, [Y("1")]), e > t && n > Math.ceil(t / 2) && m("li", {
      class: "more left",
      onClick: () => i(-5)
    }, [Y("...")]), o.map((a) => m("li", {
      onClick: () => r(a),
      class: {
        current: n === a
      }
    }, [a])), e > t && n < e - Math.ceil(t / 2) + 1 && m("li", {
      class: "more right",
      onClick: () => i(5)
    }, [Y("...")]), e > 1 && m("li", {
      onClick: () => r(e),
      class: {
        current: n === e
      }
    }, [e])]);
  }
}), Ie = C({
  name: "SPagination",
  props: it,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = A(), r = L(() => n.value ? n.value.pageIndex < 2 : !0), i = L(() => n.value ? n.value.pageIndex > n.value.totalPage - 1 : !0);
    return Oe(() => {
      he(() => n.value.pageIndex, (o) => {
        e("update:modelValue", o);
      }), he(() => t.modelValue, (o) => {
        n.value.pageIndex = o;
      });
    }), () => m("div", {
      class: "s-pagination"
    }, [m("button", {
      disabled: r.value,
      onClick: () => n.value.prevPage()
    }, [Y("上一页")]), m(ye, re(t, {
      ref: n
    }), null), m("button", {
      disabled: i.value,
      onClick: () => n.value.nextPage()
    }, [Y("下一页")])]);
  }
}), Ut = {
  install(t) {
    t.component(Ie.name, Ie), t.component(ye.name, ye);
  }
}, ot = Symbol("formContextToken"), Yt = {
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
const ke = C({
  name: "SForm",
  props: Yt,
  emits: ["submit"],
  setup(t, {
    slots: e,
    emit: n,
    expose: r
  }) {
    const i = L(() => ({
      layout: t.layout,
      labelSize: t.labelSize,
      labelAlign: t.labelAlign
    }));
    Z("LABEL_DATA", i);
    const o = /* @__PURE__ */ new Set(), a = (u) => o.add(u), l = (u) => o.delete(u);
    Z(ot, {
      model: t.model,
      rules: t.rules,
      addItem: a,
      removeItem: l
    });
    const s = (u) => {
      u.preventDefault(), n("submit");
    };
    return r({
      validate: (u) => {
        const f = [];
        o.forEach((g) => f.push(g.validate())), Promise.all(f).then(() => u(!0)).catch(() => u(!1));
      }
    }), () => {
      var u;
      return m("form", {
        class: "s-form",
        onSubmit: s
      }, [(u = e.default) == null ? void 0 : u.call(e)]);
    };
  }
}), Xt = {
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
function Jt(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, ee(t, e);
}
function be(t) {
  return be = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, be(t);
}
function ee(t, e) {
  return ee = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ee(t, e);
}
function Zt() {
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
function se(t, e, n) {
  return Zt() ? se = Reflect.construct.bind() : se = function(i, o, a) {
    var l = [null];
    l.push.apply(l, o);
    var s = Function.bind.apply(i, l), c = new s();
    return a && ee(c, a.prototype), c;
  }, se.apply(null, arguments);
}
function Gt(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function we(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return we = function(r) {
    if (r === null || !Gt(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, i);
    }
    function i() {
      return se(r, arguments, be(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ee(i, r);
  }, we(t);
}
var Kt = /%[sdj%]/g, at = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (at = function(e, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(e, n);
});
function xe(t) {
  if (!t || !t.length)
    return null;
  var e = {};
  return t.forEach(function(n) {
    var r = n.field;
    e[r] = e[r] || [], e[r].push(n);
  }), e;
}
function F(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  var i = 0, o = n.length;
  if (typeof t == "function")
    return t.apply(null, n);
  if (typeof t == "string") {
    var a = t.replace(Kt, function(l) {
      if (l === "%%")
        return "%";
      if (i >= o)
        return l;
      switch (l) {
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
          return l;
      }
    });
    return a;
  }
  return t;
}
function Qt(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function T(t, e) {
  return !!(t == null || e === "array" && Array.isArray(t) && !t.length || Qt(e) && typeof t == "string" && !t);
}
function en(t, e, n) {
  var r = [], i = 0, o = t.length;
  function a(l) {
    r.push.apply(r, l || []), i++, i === o && n(r);
  }
  t.forEach(function(l) {
    e(l, a);
  });
}
function De(t, e, n) {
  var r = 0, i = t.length;
  function o(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var l = r;
    r = r + 1, l < i ? e(t[l], o) : n([]);
  }
  o([]);
}
function tn(t) {
  var e = [];
  return Object.keys(t).forEach(function(n) {
    e.push.apply(e, t[n] || []);
  }), e;
}
var qe = /* @__PURE__ */ function(t) {
  Jt(e, t);
  function e(n, r) {
    var i;
    return i = t.call(this, "Async Validation Error") || this, i.errors = n, i.fields = r, i;
  }
  return e;
}(/* @__PURE__ */ we(Error));
function nn(t, e, n, r, i) {
  if (e.first) {
    var o = new Promise(function(g, x) {
      var P = function(d) {
        return r(d), d.length ? x(new qe(d, xe(d))) : g(i);
      }, p = tn(t);
      De(p, n, P);
    });
    return o.catch(function(g) {
      return g;
    }), o;
  }
  var a = e.firstFields === !0 ? Object.keys(t) : e.firstFields || [], l = Object.keys(t), s = l.length, c = 0, u = [], f = new Promise(function(g, x) {
    var P = function(v) {
      if (u.push.apply(u, v), c++, c === s)
        return r(u), u.length ? x(new qe(u, xe(u))) : g(i);
    };
    l.length || (r(u), g(i)), l.forEach(function(p) {
      var v = t[p];
      a.indexOf(p) !== -1 ? De(v, n, P) : en(v, n, P);
    });
  });
  return f.catch(function(g) {
    return g;
  }), f;
}
function rn(t) {
  return !!(t && t.message !== void 0);
}
function on(t, e) {
  for (var n = t, r = 0; r < e.length; r++) {
    if (n == null)
      return n;
    n = n[e[r]];
  }
  return n;
}
function Ve(t, e) {
  return function(n) {
    var r;
    return t.fullFields ? r = on(e, t.fullFields) : r = e[n.field || t.fullField], rn(n) ? (n.field = n.field || t.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || t.fullField
    };
  };
}
function Re(t, e) {
  if (e) {
    for (var n in e)
      if (e.hasOwnProperty(n)) {
        var r = e[n];
        typeof r == "object" && typeof t[n] == "object" ? t[n] = $({}, t[n], r) : t[n] = r;
      }
  }
  return t;
}
var lt = function(e, n, r, i, o, a) {
  e.required && (!r.hasOwnProperty(e.field) || T(n, a || e.type)) && i.push(F(o.messages.required, e.fullField));
}, an = function(e, n, r, i, o) {
  (/^\s+$/.test(n) || n === "") && i.push(F(o.messages.whitespace, e.fullField));
}, ae, ln = function() {
  if (ae)
    return ae;
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), a = new RegExp("^" + n + "$"), l = new RegExp("^" + i + "$"), s = function(y) {
    return y && y.exact ? o : new RegExp("(?:" + e(y) + n + e(y) + ")|(?:" + e(y) + i + e(y) + ")", "g");
  };
  s.v4 = function(h) {
    return h && h.exact ? a : new RegExp("" + e(h) + n + e(h), "g");
  }, s.v6 = function(h) {
    return h && h.exact ? l : new RegExp("" + e(h) + i + e(h), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", u = "(?:\\S+(?::\\S*)?@)?", f = s.v4().source, g = s.v6().source, x = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", P = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", v = "(?::\\d{2,5})?", d = '(?:[/?#][^\\s"]*)?', b = "(?:" + c + "|www\\.)" + u + "(?:localhost|" + f + "|" + g + "|" + x + P + p + ")" + v + d;
  return ae = new RegExp("(?:^" + b + "$)", "i"), ae;
}, Be = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, G = {
  integer: function(e) {
    return G.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return G.number(e) && !G.integer(e);
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
    return typeof e == "object" && !G.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match(Be.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(ln());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(Be.hex);
  }
}, sn = function(e, n, r, i, o) {
  if (e.required && n === void 0) {
    lt(e, n, r, i, o);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = e.type;
  a.indexOf(l) > -1 ? G[l](n) || i.push(F(o.messages.types[l], e.fullField, e.type)) : l && typeof n !== e.type && i.push(F(o.messages.types[l], e.fullField, e.type));
}, cn = function(e, n, r, i, o) {
  var a = typeof e.len == "number", l = typeof e.min == "number", s = typeof e.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = n, f = null, g = typeof n == "number", x = typeof n == "string", P = Array.isArray(n);
  if (g ? f = "number" : x ? f = "string" : P && (f = "array"), !f)
    return !1;
  P && (u = n.length), x && (u = n.replace(c, "_").length), a ? u !== e.len && i.push(F(o.messages[f].len, e.fullField, e.len)) : l && !s && u < e.min ? i.push(F(o.messages[f].min, e.fullField, e.min)) : s && !l && u > e.max ? i.push(F(o.messages[f].max, e.fullField, e.max)) : l && s && (u < e.min || u > e.max) && i.push(F(o.messages[f].range, e.fullField, e.min, e.max));
}, U = "enum", un = function(e, n, r, i, o) {
  e[U] = Array.isArray(e[U]) ? e[U] : [], e[U].indexOf(n) === -1 && i.push(F(o.messages[U], e.fullField, e[U].join(", ")));
}, fn = function(e, n, r, i, o) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(n) || i.push(F(o.messages.pattern.mismatch, e.fullField, n, e.pattern));
    else if (typeof e.pattern == "string") {
      var a = new RegExp(e.pattern);
      a.test(n) || i.push(F(o.messages.pattern.mismatch, e.fullField, n, e.pattern));
    }
  }
}, _ = {
  required: lt,
  whitespace: an,
  type: sn,
  range: cn,
  enum: un,
  pattern: fn
}, dn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (T(n, "string") && !e.required)
      return r();
    _.required(e, n, i, a, o, "string"), T(n, "string") || (_.type(e, n, i, a, o), _.range(e, n, i, a, o), _.pattern(e, n, i, a, o), e.whitespace === !0 && _.whitespace(e, n, i, a, o));
  }
  r(a);
}, pn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, o), n !== void 0 && _.type(e, n, i, a, o);
  }
  r(a);
}, gn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (n === "" && (n = void 0), T(n) && !e.required)
      return r();
    _.required(e, n, i, a, o), n !== void 0 && (_.type(e, n, i, a, o), _.range(e, n, i, a, o));
  }
  r(a);
}, mn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, o), n !== void 0 && _.type(e, n, i, a, o);
  }
  r(a);
}, vn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, o), T(n) || _.type(e, n, i, a, o);
  }
  r(a);
}, hn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, o), n !== void 0 && (_.type(e, n, i, a, o), _.range(e, n, i, a, o));
  }
  r(a);
}, yn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, o), n !== void 0 && (_.type(e, n, i, a, o), _.range(e, n, i, a, o));
  }
  r(a);
}, bn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (n == null && !e.required)
      return r();
    _.required(e, n, i, a, o, "array"), n != null && (_.type(e, n, i, a, o), _.range(e, n, i, a, o));
  }
  r(a);
}, wn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, o), n !== void 0 && _.type(e, n, i, a, o);
  }
  r(a);
}, xn = "enum", Pn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, o), n !== void 0 && _[xn](e, n, i, a, o);
  }
  r(a);
}, _n = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (T(n, "string") && !e.required)
      return r();
    _.required(e, n, i, a, o), T(n, "string") || _.pattern(e, n, i, a, o);
  }
  r(a);
}, On = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (T(n, "date") && !e.required)
      return r();
    if (_.required(e, n, i, a, o), !T(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), _.type(e, s, i, a, o), s && _.range(e, s.getTime(), i, a, o);
    }
  }
  r(a);
}, Sn = function(e, n, r, i, o) {
  var a = [], l = Array.isArray(n) ? "array" : typeof n;
  _.required(e, n, i, a, o, l), r(a);
}, ve = function(e, n, r, i, o) {
  var a = e.type, l = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (T(n, a) && !e.required)
      return r();
    _.required(e, n, i, l, o, a), T(n, a) || _.type(e, n, i, l, o);
  }
  r(l);
}, En = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (T(n) && !e.required)
      return r();
    _.required(e, n, i, a, o);
  }
  r(a);
}, K = {
  string: dn,
  method: pn,
  number: gn,
  boolean: mn,
  regexp: vn,
  integer: hn,
  float: yn,
  array: bn,
  object: wn,
  enum: Pn,
  pattern: _n,
  date: On,
  url: ve,
  hex: ve,
  email: ve,
  required: Sn,
  any: En
};
function Pe() {
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
var _e = Pe(), ie = /* @__PURE__ */ function() {
  function t(n) {
    this.rules = null, this._messages = _e, this.define(n);
  }
  var e = t.prototype;
  return e.define = function(r) {
    var i = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(o) {
      var a = r[o];
      i.rules[o] = Array.isArray(a) ? a : [a];
    });
  }, e.messages = function(r) {
    return r && (this._messages = Re(Pe(), r)), this._messages;
  }, e.validate = function(r, i, o) {
    var a = this;
    i === void 0 && (i = {}), o === void 0 && (o = function() {
    });
    var l = r, s = i, c = o;
    if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, l), Promise.resolve(l);
    function u(p) {
      var v = [], d = {};
      function b(y) {
        if (Array.isArray(y)) {
          var w;
          v = (w = v).concat.apply(w, y);
        } else
          v.push(y);
      }
      for (var h = 0; h < p.length; h++)
        b(p[h]);
      v.length ? (d = xe(v), c(v, d)) : c(null, l);
    }
    if (s.messages) {
      var f = this.messages();
      f === _e && (f = Pe()), Re(f, s.messages), s.messages = f;
    } else
      s.messages = this.messages();
    var g = {}, x = s.keys || Object.keys(this.rules);
    x.forEach(function(p) {
      var v = a.rules[p], d = l[p];
      v.forEach(function(b) {
        var h = b;
        typeof h.transform == "function" && (l === r && (l = $({}, l)), d = l[p] = h.transform(d)), typeof h == "function" ? h = {
          validator: h
        } : h = $({}, h), h.validator = a.getValidationMethod(h), h.validator && (h.field = p, h.fullField = h.fullField || p, h.type = a.getType(h), g[p] = g[p] || [], g[p].push({
          rule: h,
          value: d,
          source: l,
          field: p
        }));
      });
    });
    var P = {};
    return nn(g, s, function(p, v) {
      var d = p.rule, b = (d.type === "object" || d.type === "array") && (typeof d.fields == "object" || typeof d.defaultField == "object");
      b = b && (d.required || !d.required && p.value), d.field = p.field;
      function h(O, S) {
        return $({}, S, {
          fullField: d.fullField + "." + O,
          fullFields: d.fullFields ? [].concat(d.fullFields, [O]) : [O]
        });
      }
      function y(O) {
        O === void 0 && (O = []);
        var S = Array.isArray(O) ? O : [O];
        !s.suppressWarning && S.length && t.warning("async-validator:", S), S.length && d.message !== void 0 && (S = [].concat(d.message));
        var E = S.map(Ve(d, l));
        if (s.first && E.length)
          return P[d.field] = 1, v(E);
        if (!b)
          v(E);
        else {
          if (d.required && !p.value)
            return d.message !== void 0 ? E = [].concat(d.message).map(Ve(d, l)) : s.error && (E = [s.error(d, F(s.messages.required, d.field))]), v(E);
          var N = {};
          d.defaultField && Object.keys(p.value).map(function(D) {
            N[D] = d.defaultField;
          }), N = $({}, N, p.rule.fields);
          var I = {};
          Object.keys(N).forEach(function(D) {
            var q = N[D], yt = Array.isArray(q) ? q : [q];
            I[D] = yt.map(h.bind(null, D));
          });
          var W = new t(I);
          W.messages(s.messages), p.rule.options && (p.rule.options.messages = s.messages, p.rule.options.error = s.error), W.validate(p.value, p.rule.options || s, function(D) {
            var q = [];
            E && E.length && q.push.apply(q, E), D && D.length && q.push.apply(q, D), v(q.length ? q : null);
          });
        }
      }
      var w;
      if (d.asyncValidator)
        w = d.asyncValidator(d, p.value, y, p.source, s);
      else if (d.validator) {
        try {
          w = d.validator(d, p.value, y, p.source, s);
        } catch (O) {
          console.error == null || console.error(O), s.suppressValidatorError || setTimeout(function() {
            throw O;
          }, 0), y(O.message);
        }
        w === !0 ? y() : w === !1 ? y(typeof d.message == "function" ? d.message(d.fullField || d.field) : d.message || (d.fullField || d.field) + " fails") : w instanceof Array ? y(w) : w instanceof Error && y(w.message);
      }
      w && w.then && w.then(function() {
        return y();
      }, function(O) {
        return y(O);
      });
    }, function(p) {
      u(p);
    }, l);
  }, e.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !K.hasOwnProperty(r.type))
      throw new Error(F("Unknown rule type %s", r.type));
    return r.type || "string";
  }, e.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var i = Object.keys(r), o = i.indexOf("message");
    return o !== -1 && i.splice(o, 1), i.length === 1 && i[0] === "required" ? K.required : K[this.getType(r)] || void 0;
  }, t;
}();
ie.register = function(e, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  K[e] = n;
};
ie.warning = at;
ie.messages = _e;
ie.validators = K;
const Me = C({
  name: "SFormItem",
  props: Xt,
  setup(t, {
    slots: e
  }) {
    const n = J("LABEL_DATA"), r = L(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": n.value.layout === "horizontal",
      "s-form__item--vertical": n.value.layout === "vertical"
    })), i = L(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": n.value.layout === "vertical",
      [`s-form__label--${n.value.labelAlign}`]: n.value.layout === "horizontal",
      [`s-form__label--${n.value.labelSize}`]: n.value.layout === "horizontal"
    })), o = J(ot), a = A(!1), l = A(""), c = {
      validate: () => {
        if (!o)
          return console.warn("请在Form中使用FormItem"), Promise.reject("请在Form中使用FormItem");
        if (!t.prop)
          return console.warn("如果要校验当前项，请设置prop字段"), Promise.reject("如果要校验当前项，请设置prop字段");
        if (!o.rules)
          return Promise.resolve({
            result: !0
          });
        const u = o.rules[t.prop] || void 0;
        if (!u)
          return Promise.resolve({
            result: !0
          });
        const f = o.model[t.prop];
        return new ie({
          [t.prop]: u
        }).validate({
          [t.prop]: f
        }, (x) => {
          x ? (a.value = !0, l.value = x[0].message || "校验错误") : (a.value = !1, l.value = "");
        });
      }
    };
    return Z("FORM_ITEM_CTX", c), Oe(() => {
      t.prop && (o == null || o.addItem(c));
    }), tt(() => {
      t.prop && (o == null || o.removeItem(c));
    }), () => {
      var u;
      return m("div", {
        class: r.value
      }, [m("span", {
        class: i.value
      }, [t.label]), m("div", null, [(u = e.default) == null ? void 0 : u.call(e)]), a.value && m("div", {
        class: "error-message"
      }, [l.value])]);
    };
  }
}), Tn = {
  install(t) {
    t.component(ke.name, ke), t.component(Me.name, Me);
  }
}, Cn = {
  modelValue: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  }
};
const je = C({
  name: "SInput",
  props: Cn,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = J("FORM_ITEM_CTX"), r = (i) => {
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
}), An = {
  install(t) {
    t.component(je.name, je);
  }
}, Fn = {
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
const Ln = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
const Nn = C({
  name: "SBaseModal",
  props: Ln,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      modelValue: r
    } = B(t);
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
}), ze = C({
  name: "SModal",
  props: Fn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      modelValue: r,
      title: i,
      showClose: o,
      width: a,
      center: l,
      alignCenter: s,
      backgroundColor: c,
      top: u
    } = B(t), f = s.value ? {
      marginTop: 0,
      top: "50%",
      transform: "translateY(-50%)"
    } : null, g = L(() => typeof u.value == "number" ? `${u.value}px` : u.value);
    return () => m(Nn, {
      class: "s-modal",
      modelValue: r.value,
      "onUpdate:modelValue": () => {
        n("update:modelValue");
      }
    }, {
      default: () => {
        var x, P, p;
        return [m("div", {
          class: "s-modal__container",
          style: {
            width: a.value,
            ...f,
            marginTop: g.value,
            backgroundColor: c.value
          }
        }, [e.header ? (x = e.header) == null ? void 0 : x.call(e, {
          close: () => {
            n("update:modelValue", !1);
          }
        }) : m("div", {
          class: "s-modal__header",
          style: {
            textAlign: l.value ? "center" : "left"
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
}), In = {
  install(t) {
    t.component(ze.name, ze);
  }
}, kn = {
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
    var r, i, o, a, l, s = function(f, g) {
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
      g.innerHTML = t._iconfont_svg_string_1281272, (g = g.getElementsByTagName("svg")[0]) && (g.setAttribute("aria-hidden", "true"), g.style.position = "absolute", g.style.width = 0, g.style.height = 0, g.style.overflow = "hidden", g = g, (f = document.body).firstChild ? s(g, f.firstChild) : f.appendChild(g));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(r, 0) : (i = function() {
      document.removeEventListener("DOMContentLoaded", i, !1), r();
    }, document.addEventListener("DOMContentLoaded", i, !1)) : document.attachEvent && (o = r, a = t.document, l = !1, u(), a.onreadystatechange = function() {
      a.readyState == "complete" && (a.onreadystatechange = null, c());
    });
  }
  function c() {
    l || (l = !0, o());
  }
  function u() {
    try {
      a.documentElement.doScroll("left");
    } catch {
      return void setTimeout(u, 50);
    }
    c();
  }
}(window);
const $e = C({
  name: "SIcon",
  props: kn,
  setup(t) {
    const e = L(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = m("img", {
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
}), Dn = (t) => {
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
}, qn = {
  install(t) {
    t.component($e.name, $e), t.component("ArrowDownIcon", Dn);
  }
}, Vn = {
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
const He = C({
  name: "STabs",
  props: Vn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const n = A([]);
    Z("active-data", n);
    const r = A(t.modelValue);
    Z("active-tab", r);
    const i = (l) => {
      r.value = l;
    }, o = (l, s) => {
      const c = n.value.findIndex((u) => u.id === s);
      n.value.splice(c, 1), l.stopPropagation(), n.value.length === c ? i(n.value[c - 1].id) : i(n.value[c].id);
    }, a = () => {
      const l = nt();
      n.value.push({
        id: l,
        type: "random",
        title: `Tab${l}`,
        content: `Tab${l} Content`
      }), r.value = l;
    };
    return () => {
      var l;
      return m("div", {
        class: "s-tabs"
      }, [m("ul", {
        class: "s-tabs__nav"
      }, [n.value.map((s) => m("li", {
        onClick: () => i(s.id),
        class: s.id === r.value ? "active" : ""
      }, [s.title, t.closable && m("svg", {
        onClick: (c) => o(c, s.id),
        style: "margin-left: 8px;",
        viewBox: "0 0 1024 1024",
        width: "12",
        height: "12"
      }, [m("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])])), t.addable && m("li", null, [m("svg", {
        onClick: a,
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14"
      }, [m("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)])])]), (l = e.default) == null ? void 0 : l.call(e), n.value.filter((s) => s.type === "random").map((s) => m("div", {
        class: "s-tab"
      }, [s.id === r.value && s.content]))]);
    };
  }
}), Rn = {
  id: {
    type: String,
    required: !0
  },
  title: {
    type: String,
    required: !0
  }
};
const We = C({
  name: "STab",
  props: Rn,
  setup(t, {
    slots: e
  }) {
    const n = J("active-tab");
    return J("active-data").value.push({
      id: t.id,
      title: t.title
    }), () => {
      var i;
      return m(fe, null, [t.id === n.value && m("div", {
        class: "s-tab"
      }, [(i = e.default) == null ? void 0 : i.call(e)])]);
    };
  }
}), Bn = {
  install(t) {
    t.component(He.name, He), t.component(We.name, We);
  }
}, Mn = {
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
const jn = {
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
function H(t) {
  return t.split("-")[1];
}
function Ee(t) {
  return t === "y" ? "height" : "width";
}
function oe(t) {
  return t.split("-")[0];
}
function de(t) {
  return ["top", "bottom"].includes(oe(t)) ? "x" : "y";
}
function Ue(t, e, n) {
  let {
    reference: r,
    floating: i
  } = t;
  const o = r.x + r.width / 2 - i.width / 2, a = r.y + r.height / 2 - i.height / 2, l = de(e), s = Ee(l), c = r[s] / 2 - i[s] / 2, u = oe(e), f = l === "x";
  let g;
  switch (u) {
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
        y: a
      };
      break;
    case "left":
      g = {
        x: r.x - i.width,
        y: a
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (H(e)) {
    case "start":
      g[l] -= c * (n && f ? -1 : 1);
      break;
    case "end":
      g[l] += c * (n && f ? -1 : 1);
      break;
  }
  return g;
}
const zn = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: a
  } = n, l = o.filter(Boolean), s = await (a.isRTL == null ? void 0 : a.isRTL(e));
  if (process.env.NODE_ENV !== "production") {
    if (a == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), l.filter((p) => {
      let {
        name: v
      } = p;
      return v === "autoPlacement" || v === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!t || !e) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
  }
  let c = await a.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: u,
    y: f
  } = Ue(c, r, s), g = r, x = {}, P = 0;
  for (let p = 0; p < l.length; p++) {
    const {
      name: v,
      fn: d
    } = l[p], {
      x: b,
      y: h,
      data: y,
      reset: w
    } = await d({
      x: u,
      y: f,
      initialPlacement: r,
      placement: g,
      strategy: i,
      middlewareData: x,
      rects: c,
      platform: a,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (u = b ?? u, f = h ?? f, x = {
      ...x,
      [v]: {
        ...x[v],
        ...y
      }
    }, process.env.NODE_ENV !== "production" && P > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), w && P <= 50) {
      P++, typeof w == "object" && (w.placement && (g = w.placement), w.rects && (c = w.rects === !0 ? await a.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : w.rects), {
        x: u,
        y: f
      } = Ue(c, g, s)), p = -1;
      continue;
    }
  }
  return {
    x: u,
    y: f,
    placement: g,
    strategy: i,
    middlewareData: x
  };
};
function $n(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function st(t) {
  return typeof t != "number" ? $n(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ce(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Hn(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: i,
    platform: o,
    rects: a,
    elements: l,
    strategy: s
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: g = !1,
    padding: x = 0
  } = e, P = st(x), v = l[g ? f === "floating" ? "reference" : "floating" : f], d = ce(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(v))) == null || n ? v : v.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: s
  })), b = f === "floating" ? {
    ...a.floating,
    x: r,
    y: i
  } : a.reference, h = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), y = await (o.isElement == null ? void 0 : o.isElement(h)) ? await (o.getScale == null ? void 0 : o.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = ce(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: h,
    strategy: s
  }) : b);
  return process.env.NODE_ENV, {
    top: (d.top - w.top + P.top) / y.y,
    bottom: (w.bottom - d.bottom + P.bottom) / y.y,
    left: (d.left - w.left + P.left) / y.x,
    right: (w.right - d.right + P.right) / y.x
  };
}
const Wn = Math.min, Un = Math.max;
function Yn(t, e, n) {
  return Un(t, Wn(e, n));
}
const Xn = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: r = 0
    } = t || {}, {
      x: i,
      y: o,
      placement: a,
      rects: l,
      platform: s
    } = e;
    if (n == null)
      return process.env.NODE_ENV !== "production" && console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const c = st(r), u = {
      x: i,
      y: o
    }, f = de(a), g = Ee(f), x = await s.getDimensions(n), P = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", v = l.reference[g] + l.reference[f] - u[f] - l.floating[g], d = u[f] - l.reference[f], b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(n));
    let h = b ? f === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0;
    h === 0 && (h = l.floating[g]);
    const y = v / 2 - d / 2, w = c[P], O = h - x[g] - c[p], S = h / 2 - x[g] / 2 + y, E = Yn(w, S, O), I = H(a) != null && S != E && l.reference[g] / 2 - (S < w ? c[P] : c[p]) - x[g] / 2 < 0 ? S < w ? w - S : O - S : 0;
    return {
      [f]: u[f] - I,
      data: {
        [f]: E,
        centerOffset: S - E
      }
    };
  }
}), Jn = ["top", "right", "bottom", "left"], Ye = /* @__PURE__ */ Jn.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []), Zn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xe(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Zn[e]);
}
function Gn(t, e, n) {
  n === void 0 && (n = !1);
  const r = H(t), i = de(t), o = Ee(i);
  let a = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (a = Xe(a)), {
    main: a,
    cross: Xe(a)
  };
}
const Kn = {
  start: "end",
  end: "start"
};
function Qn(t) {
  return t.replace(/start|end/g, (e) => Kn[e]);
}
function er(t, e, n) {
  return (t ? [...n.filter((i) => H(i) === t), ...n.filter((i) => H(i) !== t)] : n.filter((i) => oe(i) === i)).filter((i) => t ? H(i) === t || (e ? Qn(i) !== i : !1) : !0);
}
const tr = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, r, i;
      const {
        rects: o,
        middlewareData: a,
        placement: l,
        platform: s,
        elements: c
      } = e, {
        alignment: u,
        allowedPlacements: f = Ye,
        autoAlignment: g = !0,
        ...x
      } = t, P = u !== void 0 || f === Ye ? er(u || null, g, f) : f, p = await Hn(e, x), v = ((n = a.autoPlacement) == null ? void 0 : n.index) || 0, d = P[v];
      if (d == null)
        return {};
      const {
        main: b,
        cross: h
      } = Gn(d, o, await (s.isRTL == null ? void 0 : s.isRTL(c.floating)));
      if (l !== d)
        return {
          reset: {
            placement: P[0]
          }
        };
      const y = [p[oe(d)], p[b], p[h]], w = [...((r = a.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: d,
        overflows: y
      }], O = P[v + 1];
      if (O)
        return {
          data: {
            index: v + 1,
            overflows: w
          },
          reset: {
            placement: O
          }
        };
      const S = w.slice().sort((I, W) => I.overflows[0] - W.overflows[0]), N = ((i = S.find((I) => {
        let {
          overflows: W
        } = I;
        return W.every((D) => D <= 0);
      })) == null ? void 0 : i.placement) || S[0].placement;
      return N !== l ? {
        data: {
          index: v + 1,
          overflows: w
        },
        reset: {
          placement: N
        }
      } : {};
    }
  };
};
async function nr(t, e) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = t, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), a = oe(n), l = H(n), s = de(n) === "x", c = ["left", "top"].includes(a) ? -1 : 1, u = o && s ? -1 : 1, f = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: g,
    crossAxis: x,
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
  return l && typeof P == "number" && (x = l === "end" ? P * -1 : P), s ? {
    x: x * u,
    y: g * c
  } : {
    x: g * c,
    y: x * u
  };
}
const rr = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, i = await nr(e, t);
      return {
        x: n + i.x,
        y: r + i.y,
        data: i
      };
    }
  };
};
function k(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function V(t) {
  return k(t).getComputedStyle(t);
}
function M(t) {
  return ut(t) ? (t.nodeName || "").toLowerCase() : "";
}
let le;
function ct() {
  if (le)
    return le;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (le = t.brands.map((e) => e.brand + "/" + e.version).join(" "), le) : navigator.userAgent;
}
function R(t) {
  return t instanceof k(t).HTMLElement;
}
function j(t) {
  return t instanceof k(t).Element;
}
function ut(t) {
  return t instanceof k(t).Node;
}
function Je(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = k(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function pe(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: i
  } = V(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(i);
}
function ir(t) {
  return ["table", "td", "th"].includes(M(t));
}
function Te(t) {
  const e = /firefox/i.test(ct()), n = V(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    (i) => {
      const o = n.contain;
      return o != null ? o.includes(i) : !1;
    }
  );
}
function ft() {
  return !/^((?!chrome|android).)*safari/i.test(ct());
}
function Ce(t) {
  return ["html", "body", "#document"].includes(M(t));
}
const Ze = Math.min, Q = Math.max, ue = Math.round;
function dt(t) {
  const e = V(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const i = t.offsetWidth, o = t.offsetHeight, a = ue(n) !== i || ue(r) !== o;
  return a && (n = i, r = o), {
    width: n,
    height: r,
    fallback: a
  };
}
function pt(t) {
  return j(t) ? t : t.contextElement;
}
const gt = {
  x: 1,
  y: 1
};
function X(t) {
  const e = pt(t);
  if (!R(e))
    return gt;
  const n = e.getBoundingClientRect(), {
    width: r,
    height: i,
    fallback: o
  } = dt(e);
  let a = (o ? ue(n.width) : n.width) / r, l = (o ? ue(n.height) : n.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: a,
    y: l
  };
}
function te(t, e, n, r) {
  var i, o;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const a = t.getBoundingClientRect(), l = pt(t);
  let s = gt;
  e && (r ? j(r) && (s = X(r)) : s = X(t));
  const c = l ? k(l) : window, u = !ft() && n;
  let f = (a.left + (u && ((i = c.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / s.x, g = (a.top + (u && ((o = c.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / s.y, x = a.width / s.x, P = a.height / s.y;
  if (l) {
    const p = k(l), v = r && j(r) ? k(r) : r;
    let d = p.frameElement;
    for (; d && r && v !== p; ) {
      const b = X(d), h = d.getBoundingClientRect(), y = getComputedStyle(d);
      h.x += (d.clientLeft + parseFloat(y.paddingLeft)) * b.x, h.y += (d.clientTop + parseFloat(y.paddingTop)) * b.y, f *= b.x, g *= b.y, x *= b.x, P *= b.y, f += h.x, g += h.y, d = k(d).frameElement;
    }
  }
  return {
    width: x,
    height: P,
    top: g,
    right: f + x,
    bottom: g + P,
    left: f,
    x: f,
    y: g
  };
}
function z(t) {
  return ((ut(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ge(t) {
  return j(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function mt(t) {
  return te(z(t)).left + ge(t).scrollLeft;
}
function or(t, e, n) {
  const r = R(e), i = z(e), o = te(t, !0, n === "fixed", e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((M(e) !== "body" || pe(i)) && (a = ge(e)), R(e)) {
      const s = te(e, !0);
      l.x = s.x + e.clientLeft, l.y = s.y + e.clientTop;
    } else
      i && (l.x = mt(i));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function ne(t) {
  if (M(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (Je(t) ? t.host : null) || z(t);
  return Je(e) ? e.host : e;
}
function Ge(t) {
  return !R(t) || V(t).position === "fixed" ? null : t.offsetParent;
}
function ar(t) {
  let e = ne(t);
  for (; R(e) && !Ce(e); ) {
    if (Te(e))
      return e;
    e = ne(e);
  }
  return null;
}
function Ke(t) {
  const e = k(t);
  let n = Ge(t);
  for (; n && ir(n) && V(n).position === "static"; )
    n = Ge(n);
  return n && (M(n) === "html" || M(n) === "body" && V(n).position === "static" && !Te(n)) ? e : n || ar(t) || e;
}
function lr(t) {
  return dt(t);
}
function sr(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const i = R(n), o = z(n);
  if (n === o)
    return e;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 1,
    y: 1
  };
  const s = {
    x: 0,
    y: 0
  };
  if ((i || !i && r !== "fixed") && ((M(n) !== "body" || pe(o)) && (a = ge(n)), R(n))) {
    const c = te(n);
    l = X(n), s.x = c.x + n.clientLeft, s.y = c.y + n.clientTop;
  }
  return {
    width: e.width * l.x,
    height: e.height * l.y,
    x: e.x * l.x - a.scrollLeft * l.x + s.x,
    y: e.y * l.y - a.scrollTop * l.y + s.y
  };
}
function cr(t, e) {
  const n = k(t), r = z(t), i = n.visualViewport;
  let o = r.clientWidth, a = r.clientHeight, l = 0, s = 0;
  if (i) {
    o = i.width, a = i.height;
    const c = ft();
    (c || !c && e === "fixed") && (l = i.offsetLeft, s = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: l,
    y: s
  };
}
function ur(t) {
  var e;
  const n = z(t), r = ge(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = Q(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Q(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let l = -r.scrollLeft + mt(t);
  const s = -r.scrollTop;
  return V(i || n).direction === "rtl" && (l += Q(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: l,
    y: s
  };
}
function vt(t) {
  const e = ne(t);
  return Ce(e) ? t.ownerDocument.body : R(e) && pe(e) ? e : vt(e);
}
function ht(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = vt(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = k(r);
  return i ? e.concat(o, o.visualViewport || [], pe(r) ? r : []) : e.concat(r, ht(r));
}
function fr(t, e) {
  const n = te(t, !0, e === "fixed"), r = n.top + t.clientTop, i = n.left + t.clientLeft, o = R(t) ? X(t) : {
    x: 1,
    y: 1
  }, a = t.clientWidth * o.x, l = t.clientHeight * o.y, s = i * o.x, c = r * o.y;
  return {
    top: c,
    left: s,
    right: s + a,
    bottom: c + l,
    x: s,
    y: c,
    width: a,
    height: l
  };
}
function Qe(t, e, n) {
  return e === "viewport" ? ce(cr(t, n)) : j(e) ? fr(e, n) : ce(ur(z(t)));
}
function dr(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = ht(t).filter((l) => j(l) && M(l) !== "body"), i = null;
  const o = V(t).position === "fixed";
  let a = o ? ne(t) : t;
  for (; j(a) && !Ce(a); ) {
    const l = V(a), s = Te(a);
    (o ? !s && !i : !s && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? r = r.filter((u) => u !== a) : i = l, a = ne(a);
  }
  return e.set(t, r), r;
}
function pr(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = t;
  const a = [...n === "clippingAncestors" ? dr(e, this._c) : [].concat(n), r], l = a[0], s = a.reduce((c, u) => {
    const f = Qe(e, u, i);
    return c.top = Q(f.top, c.top), c.right = Ze(f.right, c.right), c.bottom = Ze(f.bottom, c.bottom), c.left = Q(f.left, c.left), c;
  }, Qe(e, l, i));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
const gr = {
  getClippingRect: pr,
  convertOffsetParentRelativeRectToViewportRelativeRect: sr,
  isElement: j,
  getDimensions: lr,
  getOffsetParent: Ke,
  getDocumentElement: z,
  getScale: X,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: r
    } = t;
    const i = this.getOffsetParent || Ke, o = this.getDimensions;
    return {
      reference: or(e, await i(n), r),
      floating: {
        x: 0,
        y: 0,
        ...await o(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => V(t).direction === "rtl"
}, mr = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: gr,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return zn(t, e, {
    ...i,
    platform: o
  });
};
const vr = C({
  name: "SBasePopover",
  props: jn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    attrs: n
  }) {
    const {
      host: r,
      modelValue: i,
      showArrow: o,
      placement: a
    } = B(t), l = A(), s = A(), c = () => {
      const f = [];
      o.value && (f.push(rr(8)), f.push(Xn({
        element: l.value
      }))), a.value || f.push(tr()), mr(r.value, s.value, {
        middleware: f,
        placement: a.value || "bottom"
      }).then(({
        x: g,
        y: x,
        middlewareData: P,
        placement: p
      }) => {
        if (Object.assign(s.value.style, {
          left: `${g}px`,
          top: `${x}px`
        }), o.value) {
          const {
            x: v,
            y: d
          } = P.arrow, b = p.split("-")[0], h = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[b], y = ["top", "right", "bottom", "left"], w = y.indexOf(b) - 1, O = y[w < 0 ? w + 4 : w];
          Object.assign(l.value.style, {
            left: `${v}px`,
            top: `${d}px`,
            [h]: "-4px",
            [`border-${b}-color`]: "transparent",
            [`border-${O}-color`]: "transparent"
          });
        }
      });
    }, u = new MutationObserver(() => c());
    return he(i, (f) => {
      f ? (xt(c), r.value && u.observe(r.value, {
        attributes: !0
      }), window.addEventListener("resize", c), window.addEventListener("scroll", c)) : (u.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c));
    }, {
      immediate: !0
    }), tt(() => {
      u.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c);
    }), () => {
      var f;
      return m(fe, null, [i.value && m("div", re({
        ref: s,
        class: "s-base-popover"
      }, n), [(f = e.default) == null ? void 0 : f.call(e), o.value && m("div", {
        class: "s-base-popover__arrow",
        ref: l
      }, null)])]);
    };
  }
}), et = C({
  name: "SPopover",
  props: Mn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const {
      modelValue: n,
      title: r
    } = B(t);
    return () => m(fe, null, [n.value && m(vr, re({
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
}), hr = {
  install(t) {
    t.component(et.name, et);
  }
}, yr = [
  _t,
  zt,
  Ut,
  Tn,
  An,
  In,
  qn,
  Bn,
  hr
], wr = {
  version: "0.0.1",
  install(t) {
    yr.forEach((e) => t.use(e));
  }
};
export {
  Ae as Button,
  ke as Form,
  $e as Icon,
  je as Input,
  ze as Modal,
  Ie as Pagination,
  et as Popover,
  We as Tab,
  He as Tabs,
  Ne as Tree,
  wr as default
};
