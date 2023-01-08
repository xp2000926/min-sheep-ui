import { defineComponent as A, toRefs as k, createVNode as h, computed as F, reactive as wt, ref as N, unref as bt, inject as J, mergeProps as re, withDirectives as xt, vModelCheckbox as Pt, onMounted as Oe, provide as Z, createTextVNode as Y, watch as ve, onUnmounted as tt, Fragment as Ee, nextTick as Ot } from "vue";
const Et = {
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
const Ae = A({
  name: "SButton",
  props: Et,
  setup(t, {
    slots: e
  }) {
    const {
      type: n,
      size: r,
      disabled: i,
      block: o
    } = k(t), a = o.value ? "s-btn--block" : "";
    return () => h("button", {
      disabled: i.value,
      class: `s-btn s-btn--${n.value} s-btn--${r.value} ${a}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), _t = {
  install(t) {
    t.component(Ae.name, Ae);
  }
};
function _e(t, e = 0, n = []) {
  return e++, t.reduce((r, i) => {
    const o = { ...i };
    o.level = e, n.length > 0 && n[n.length - 1].level >= e && n.pop(), n.push(o);
    const a = n[n.length - 2];
    if (a && (o.parentId = a.id), o.children) {
      const l = _e(o.children, e, n);
      return delete o.children, r.concat(o, l);
    } else
      return o.isLeaf === void 0 && (o.isLeaf = !0), r.concat(o);
  }, []);
}
function Tt(t, { getChildren: e }) {
  return {
    toggleCheckNode: (r) => {
      r.checked = !r.checked, e(r).forEach((l) => {
        l.checked = r.checked;
      });
      const i = t.value.find((l) => l.id === r.parentId);
      if (!i)
        return;
      const o = e(i, !1), a = o.filter((l) => l.checked);
      a.length === o.length ? i.checked = !0 : a.length === 0 && (i.checked = !1);
    }
  };
}
function St(t) {
  const e = F(() => {
    let l = [];
    const s = [];
    for (const c of t.value)
      l.map((f) => f.id).includes(c.id) || (c.expanded !== !0 && (l = n(c)), s.push(c));
    return s;
  }), n = (l, s = !0) => {
    const c = [], f = t.value.findIndex((u) => u.id === l.id);
    for (let u = f + 1; u < t.value.length && l.level < t.value[u].level; u++)
      (s || l.level === t.value[u].level - 1) && c.push(t.value[u]);
    return c;
  }, r = (l, s = []) => {
    const c = n(l, !1);
    return s.push(...c), c.forEach((f) => {
      f.expanded && r(f, s);
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
const ge = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function Nt(t, e, { getChildren: n, getParent: r }) {
  const i = wt({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), o = F(
    () => e.value.reduce(
      (p, m) => ({
        ...p,
        [m.id]: m
      }),
      {}
    )
  ), a = (p) => {
    p == null || p.classList.remove(...Object.values(ge));
  }, l = (p, m) => {
    var w;
    const d = (w = o.value[p]) == null ? void 0 : w.parentId;
    return d === m ? !0 : d !== void 0 ? l(d, m) : !1;
  }, s = () => {
    i.dropType = void 0, i.draggingNode = null, i.draggingTreeNode = null;
  }, c = (p, m) => {
    var d;
    p.stopPropagation(), i.draggingNode = p.target, i.draggingTreeNode = m, (d = p.dataTransfer) == null || d.setData("dragNodeId", m.id);
  }, f = (p) => {
    if (p.preventDefault(), p.stopPropagation(), !!i.draggingNode && t) {
      if (p.dataTransfer && (p.dataTransfer.dropEffect = "move"), !e)
        return;
      let m = {};
      typeof t == "object" ? m = t : t === !0 && (m = { dropInner: !0 });
      const { dropPrev: d, dropNext: w, dropInner: v } = m;
      let y;
      const b = d ? v ? 0.25 : w ? 0.45 : 1 : -1, E = w ? v ? 0.75 : d ? 0.55 : 0 : 1, _ = p.currentTarget, T = _ == null ? void 0 : _.getBoundingClientRect(), I = p.clientY - ((T == null ? void 0 : T.top) || 0);
      if (I < ((T == null ? void 0 : T.height) || 0) * b ? y = "dropPrev" : I > ((T == null ? void 0 : T.height) || 0) * E ? y = "dropNext" : v ? y = "dropInner" : y = void 0, y) {
        const C = _ == null ? void 0 : _.classList;
        C && (C.contains(ge[y]) || (a(_), C.add(ge[y])));
      } else
        a(_);
      i.dropType = y;
    }
  }, u = (p) => {
    p.stopPropagation(), i.draggingNode && a(p.currentTarget);
  }, g = (p, m) => {
    var w;
    if (p.preventDefault(), p.stopPropagation(), a(p.currentTarget), !i.draggingNode || !t)
      return;
    const d = (w = p.dataTransfer) == null ? void 0 : w.getData("dragNodeId");
    if (d) {
      const v = l(m.id, d);
      if (d === m.id || v)
        return;
      i.dropType && x(d, m), s();
    }
  };
  function x(p, m) {
    const d = e.value.find((w) => w.id === p);
    if (d) {
      let w;
      const v = n(d), y = r(d);
      if (i.dropType === "dropInner") {
        w = {
          ...d,
          parentId: m.id,
          level: m.level + 1
        };
        const b = e.value.indexOf(m);
        e.value.splice(b + 1, 0, w), m.isLeaf = void 0;
        const E = e.value.indexOf(d);
        e.value.splice(E, 1);
      } else if (i.dropType === "dropNext") {
        w = {
          ...d,
          parentId: m.parentId,
          level: m.level
        };
        const b = e.value.indexOf(m), E = n(m, !0).length;
        e.value.splice(
          b + E + 1,
          0,
          w
        );
        const _ = e.value.indexOf(d);
        e.value.splice(_, 1);
      } else if (i.dropType === "dropPrev") {
        w = {
          ...d,
          parentId: m.parentId,
          level: m.level
        };
        const b = e.value.indexOf(m);
        e.value.splice(b, 0, w);
        const E = e.value.indexOf(d);
        e.value.splice(E, 1);
      }
      i.dropType = "dropInner", v.forEach((b) => x(b.id, w)), y && n(y).length === 0 && (y.isLeaf = !0);
    }
  }
  return {
    onDragstart: c,
    onDragover: f,
    onDragleave: u,
    onDrop: g,
    onDragend: (p) => {
      p.preventDefault(), p.stopPropagation(), s();
    }
  };
}
function At(t, { getNode: e, getIndex: n, getChildren: r }, { emit: i }) {
  const o = (c) => {
    const f = e(c);
    f && f.isLeaf === !1 && !f.childNodeCount && (f.loading = !0, i("lazy-load", c, a));
  }, a = (c) => {
    const f = e(c.node);
    if (f) {
      f.loading = !1;
      const u = N(
        _e(c.treeItems, f.level)
      );
      l(f, u), s(f, u);
      const g = r(f);
      f.childNodeCount = g.length;
    }
  }, l = (c, f) => {
    f.value.forEach((u) => {
      u.level - 1 === c.level && !u.parentId && (u.parentId = c.id);
    });
  }, s = (c, f) => {
    const u = n(c);
    u && t.value.splice(u + 1, 0, ...f.value);
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
function Lt(t, { getChildren: e, getIndex: n }) {
  return {
    append: (o, a) => {
      const l = e(o, !1), s = l[l.length - 1];
      let c = n(o) + 1;
      s && (c = n(s) + 1), o.expanded = !0, o.isLeaf = !1;
      const f = N({
        ...a,
        level: o.level + 1,
        parentId: o.id,
        isLeaf: !0
      });
      f.value.id === void 0 && (f.value.id = nt()), t.value.splice(c, 0, f.value);
    },
    remove: (o) => {
      const a = e(o).map((l) => l.id);
      t.value = t.value.filter(
        (l) => l.id !== o.id && !a.includes(l.id)
      );
    }
  };
}
function Ft(t, e, n, r) {
  const { lazyLoadNodes: i } = r;
  return {
    toggleNode: (a) => {
      const l = t.value.find((s) => s.id === a.id);
      l && (l.expanded = !l.expanded, l.expanded && i(l));
    }
  };
}
function It(t, e, n) {
  const r = bt(t), i = N(_e(r)), o = St(i), a = [Ft, Tt, Lt], l = At(i, o, n), s = Nt(e.draggable, i, o);
  return {
    ...a.reduce((f, u) => ({ ...f, ...u(i, o, n, l) }), {}),
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
  }
}, Ct = {
  ...rt,
  treeNode: {
    type: Object,
    required: !0
  }
}, Le = 34, Fe = 24, Dt = A({
  name: "STreeNode",
  props: Ct,
  setup(t, {
    slots: e
  }) {
    const {
      lineable: n,
      checkable: r,
      treeNode: i,
      operable: o,
      draggable: a
    } = k(t), {
      toggleCheckNode: l,
      getChildrenExpanded: s,
      append: c,
      remove: f,
      onDragend: u,
      onDragleave: g,
      onDragover: x,
      onDragstart: P,
      onDrop: p
    } = J("TREE_UTILS"), m = N(!1), d = () => {
      m.value ? m.value = !1 : m.value = !0;
    };
    let w = {};
    return a.value && (w = {
      draggable: !0,
      onDragend: (v) => u(v),
      onDragleave: (v) => g(v),
      onDragover: (v) => x(v),
      onDragstart: (v) => P(v, i.value),
      onDrop: (v) => p(v, i.value)
    }), () => {
      var v, y, b;
      return h("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${Fe * (i.value.level - 1)}px`
        },
        onMouseenter: d,
        onMouseleave: d
      }, [!i.value.isLeaf && i.value.expanded && n.value && h("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${Le * s(i.value).length}px`,
          left: `${Fe * (i.value.level - 1) + 9}px`,
          top: `${Le}px`
        }
      }, null), h("div", re({
        class: "s-tree__node--content"
      }, w), [i.value.isLeaf ? h("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (v = e.icon) == null ? void 0 : v.call(e), r.value && xt(h("input", {
        type: "checkbox",
        "onUpdate:modelValue": (E) => i.value.checked = E,
        onClick: () => {
          l(i.value);
        }
      }, null), [[Pt, i.value.checked]]), (y = e.content) == null ? void 0 : y.call(e), o.value && m.value && h("span", {
        class: "inline-flex ml-1"
      }, [h("svg", {
        onClick: () => {
          c(i.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [h("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), h("svg", {
        onClick: () => {
          f(i.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [h("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), i.value.loading && ((b = e.loading) == null ? void 0 : b.call(e))])]);
    };
  }
}), qt = (t, {
  emit: e
}) => h("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: t.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [h("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const Vt = {
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
const Rt = A({
  name: "SVirtualList",
  props: Vt,
  setup(t, {
    slots: e
  }) {
    const {
      data: n,
      itemHeight: r,
      component: i
    } = k(t), o = N(), a = N(0), l = N(0), s = N(0), c = F(() => Math.ceil(a.value / r.value)), f = F(() => n.value.slice(s.value, Math.min(s.value + c.value, n.value.length)));
    Oe(() => {
      var g;
      a.value = (g = o.value) == null ? void 0 : g.clientHeight;
    });
    const u = (g) => {
      const {
        scrollTop: x
      } = g.target;
      s.value = Math.floor(x / r.value), l.value = x - x % r.value;
    };
    return () => h(i.value, {
      class: "s-virtual-list__container",
      ref: o,
      onScroll: u
    }, {
      default: () => [h("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${n.value.length * r.value}px`
        }
      }, null), h("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${l.value}px, 0)`
        }
      }, [f.value.map((g, x) => {
        var P;
        return (P = e.default) == null ? void 0 : P.call(e, {
          item: g,
          index: x
        });
      })])]
    });
  }
}), Ie = A({
  name: "STree",
  props: rt,
  emits: ["lazy-load"],
  setup(t, e) {
    const {
      data: n,
      height: r,
      itemHeight: i
    } = k(t), {
      slots: o
    } = e, a = It(n, t, e);
    return Z("TREE_UTILS", a), () => {
      const l = (s) => h(Dt, re(t, {
        treeNode: s
      }), {
        content: () => o.content ? o.content(s) : s.label,
        icon: () => o.icon ? o.icon({
          nodeData: s,
          toggleNode: a.toggleNode
        }) : h(qt, {
          expanded: !!s.expanded,
          onClick: () => a.toggleNode(s)
        }, null),
        loading: () => o.loading ? o.loading({
          nodeData: a
        }) : h("span", {
          class: "ml-1"
        }, [Y("loading...")])
      });
      return h("div", {
        class: "s-tree"
      }, [r != null && r.value ? h("div", {
        style: {
          height: `${r.value}px`
        }
      }, [h(Rt, {
        data: a.expandedTree.value,
        itemHeight: i.value
      }, {
        default: ({
          item: s
        }) => l(s)
      })]) : a.expandedTree.value.map((s) => l(s))]);
    };
  }
}), Mt = {
  install(t) {
    t.component(Ie.name, Ie);
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
function kt(t = 1) {
  const e = N(t), n = (a) => {
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
const Bt = (t, e, n) => {
  const r = Array.from(Array(t).keys());
  if (t <= n)
    return r.slice(2, t);
  {
    const i = Math.ceil(n / 2);
    return e <= i ? r.slice(2, n) : e >= t - i + 1 ? r.slice(t - n + 2, t) : r.slice(e - i + 2, e + i - 1);
  }
}, jt = it, he = A({
  name: "SPager",
  props: jt,
  setup(t) {
    const {
      total: e,
      pageSize: n,
      pagerCount: r
    } = k(t), i = F(() => Math.ceil(e.value / n.value)), {
      pageIndex: o,
      setPageIndex: a,
      jumpPage: l,
      prevPage: s,
      nextPage: c
    } = kt(), f = F(() => Bt(i.value, o.value, r.value));
    return {
      totalPage: i,
      pageIndex: o,
      setPageIndex: a,
      jumpPage: l,
      prevPage: s,
      nextPage: c,
      centerPages: f
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
    return h("ul", {
      class: "s-pager"
    }, [h("li", {
      onClick: () => r(1),
      class: {
        current: n === 1
      }
    }, [Y("1")]), e > t && n > Math.ceil(t / 2) && h("li", {
      class: "more left",
      onClick: () => i(-5)
    }, [Y("...")]), o.map((a) => h("li", {
      onClick: () => r(a),
      class: {
        current: n === a
      }
    }, [a])), e > t && n < e - Math.ceil(t / 2) + 1 && h("li", {
      class: "more right",
      onClick: () => i(5)
    }, [Y("...")]), e > 1 && h("li", {
      onClick: () => r(e),
      class: {
        current: n === e
      }
    }, [e])]);
  }
}), Ce = A({
  name: "SPagination",
  props: it,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = N(), r = F(() => n.value ? n.value.pageIndex < 2 : !0), i = F(() => n.value ? n.value.pageIndex > n.value.totalPage - 1 : !0);
    return Oe(() => {
      ve(() => n.value.pageIndex, (o) => {
        e("update:modelValue", o);
      }), ve(() => t.modelValue, (o) => {
        n.value.pageIndex = o;
      });
    }), () => h("div", {
      class: "s-pagination"
    }, [h("button", {
      disabled: r.value,
      onClick: () => n.value.prevPage()
    }, [Y("上一页")]), h(he, re(t, {
      ref: n
    }), null), h("button", {
      disabled: i.value,
      onClick: () => n.value.nextPage()
    }, [Y("下一页")])]);
  }
}), zt = {
  install(t) {
    t.component(Ce.name, Ce), t.component(he.name, he);
  }
}, ot = Symbol("formContextToken"), $t = {
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
const De = A({
  name: "SForm",
  props: $t,
  emits: ["submit"],
  setup(t, {
    slots: e,
    emit: n,
    expose: r
  }) {
    const i = F(() => ({
      layout: t.layout,
      labelSize: t.labelSize,
      labelAlign: t.labelAlign
    }));
    Z("LABEL_DATA", i);
    const o = /* @__PURE__ */ new Set(), a = (f) => o.add(f), l = (f) => o.delete(f);
    Z(ot, {
      model: t.model,
      rules: t.rules,
      addItem: a,
      removeItem: l
    });
    const s = (f) => {
      f.preventDefault(), n("submit");
    };
    return r({
      validate: (f) => {
        const u = [];
        o.forEach((g) => u.push(g.validate())), Promise.all(u).then(() => f(!0)).catch(() => f(!1));
      }
    }), () => {
      var f;
      return h("form", {
        class: "s-form",
        onSubmit: s
      }, [(f = e.default) == null ? void 0 : f.call(e)]);
    };
  }
}), Ht = {
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
function Wt(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, ee(t, e);
}
function ye(t) {
  return ye = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ye(t);
}
function ee(t, e) {
  return ee = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ee(t, e);
}
function Ut() {
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
  return Ut() ? se = Reflect.construct.bind() : se = function(i, o, a) {
    var l = [null];
    l.push.apply(l, o);
    var s = Function.bind.apply(i, l), c = new s();
    return a && ee(c, a.prototype), c;
  }, se.apply(null, arguments);
}
function Yt(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function we(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return we = function(r) {
    if (r === null || !Yt(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, i);
    }
    function i() {
      return se(r, arguments, ye(this).constructor);
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
var Xt = /%[sdj%]/g, at = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (at = function(e, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(e, n);
});
function be(t) {
  if (!t || !t.length)
    return null;
  var e = {};
  return t.forEach(function(n) {
    var r = n.field;
    e[r] = e[r] || [], e[r].push(n);
  }), e;
}
function L(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  var i = 0, o = n.length;
  if (typeof t == "function")
    return t.apply(null, n);
  if (typeof t == "string") {
    var a = t.replace(Xt, function(l) {
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
function Jt(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function S(t, e) {
  return !!(t == null || e === "array" && Array.isArray(t) && !t.length || Jt(e) && typeof t == "string" && !t);
}
function Zt(t, e, n) {
  var r = [], i = 0, o = t.length;
  function a(l) {
    r.push.apply(r, l || []), i++, i === o && n(r);
  }
  t.forEach(function(l) {
    e(l, a);
  });
}
function qe(t, e, n) {
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
function Gt(t) {
  var e = [];
  return Object.keys(t).forEach(function(n) {
    e.push.apply(e, t[n] || []);
  }), e;
}
var Ve = /* @__PURE__ */ function(t) {
  Wt(e, t);
  function e(n, r) {
    var i;
    return i = t.call(this, "Async Validation Error") || this, i.errors = n, i.fields = r, i;
  }
  return e;
}(/* @__PURE__ */ we(Error));
function Kt(t, e, n, r, i) {
  if (e.first) {
    var o = new Promise(function(g, x) {
      var P = function(d) {
        return r(d), d.length ? x(new Ve(d, be(d))) : g(i);
      }, p = Gt(t);
      qe(p, n, P);
    });
    return o.catch(function(g) {
      return g;
    }), o;
  }
  var a = e.firstFields === !0 ? Object.keys(t) : e.firstFields || [], l = Object.keys(t), s = l.length, c = 0, f = [], u = new Promise(function(g, x) {
    var P = function(m) {
      if (f.push.apply(f, m), c++, c === s)
        return r(f), f.length ? x(new Ve(f, be(f))) : g(i);
    };
    l.length || (r(f), g(i)), l.forEach(function(p) {
      var m = t[p];
      a.indexOf(p) !== -1 ? qe(m, n, P) : Zt(m, n, P);
    });
  });
  return u.catch(function(g) {
    return g;
  }), u;
}
function Qt(t) {
  return !!(t && t.message !== void 0);
}
function en(t, e) {
  for (var n = t, r = 0; r < e.length; r++) {
    if (n == null)
      return n;
    n = n[e[r]];
  }
  return n;
}
function Re(t, e) {
  return function(n) {
    var r;
    return t.fullFields ? r = en(e, t.fullFields) : r = e[n.field || t.fullField], Qt(n) ? (n.field = n.field || t.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || t.fullField
    };
  };
}
function Me(t, e) {
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
  e.required && (!r.hasOwnProperty(e.field) || S(n, a || e.type)) && i.push(L(o.messages.required, e.fullField));
}, tn = function(e, n, r, i, o) {
  (/^\s+$/.test(n) || n === "") && i.push(L(o.messages.whitespace, e.fullField));
}, ae, nn = function() {
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
  s.v4 = function(v) {
    return v && v.exact ? a : new RegExp("" + e(v) + n + e(v), "g");
  }, s.v6 = function(v) {
    return v && v.exact ? l : new RegExp("" + e(v) + i + e(v), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", u = s.v4().source, g = s.v6().source, x = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", P = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", m = "(?::\\d{2,5})?", d = '(?:[/?#][^\\s"]*)?', w = "(?:" + c + "|www\\.)" + f + "(?:localhost|" + u + "|" + g + "|" + x + P + p + ")" + m + d;
  return ae = new RegExp("(?:^" + w + "$)", "i"), ae;
}, ke = {
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
    return typeof e == "string" && e.length <= 320 && !!e.match(ke.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(nn());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(ke.hex);
  }
}, rn = function(e, n, r, i, o) {
  if (e.required && n === void 0) {
    lt(e, n, r, i, o);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = e.type;
  a.indexOf(l) > -1 ? G[l](n) || i.push(L(o.messages.types[l], e.fullField, e.type)) : l && typeof n !== e.type && i.push(L(o.messages.types[l], e.fullField, e.type));
}, on = function(e, n, r, i, o) {
  var a = typeof e.len == "number", l = typeof e.min == "number", s = typeof e.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, f = n, u = null, g = typeof n == "number", x = typeof n == "string", P = Array.isArray(n);
  if (g ? u = "number" : x ? u = "string" : P && (u = "array"), !u)
    return !1;
  P && (f = n.length), x && (f = n.replace(c, "_").length), a ? f !== e.len && i.push(L(o.messages[u].len, e.fullField, e.len)) : l && !s && f < e.min ? i.push(L(o.messages[u].min, e.fullField, e.min)) : s && !l && f > e.max ? i.push(L(o.messages[u].max, e.fullField, e.max)) : l && s && (f < e.min || f > e.max) && i.push(L(o.messages[u].range, e.fullField, e.min, e.max));
}, U = "enum", an = function(e, n, r, i, o) {
  e[U] = Array.isArray(e[U]) ? e[U] : [], e[U].indexOf(n) === -1 && i.push(L(o.messages[U], e.fullField, e[U].join(", ")));
}, ln = function(e, n, r, i, o) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(n) || i.push(L(o.messages.pattern.mismatch, e.fullField, n, e.pattern));
    else if (typeof e.pattern == "string") {
      var a = new RegExp(e.pattern);
      a.test(n) || i.push(L(o.messages.pattern.mismatch, e.fullField, n, e.pattern));
    }
  }
}, O = {
  required: lt,
  whitespace: tn,
  type: rn,
  range: on,
  enum: an,
  pattern: ln
}, sn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (S(n, "string") && !e.required)
      return r();
    O.required(e, n, i, a, o, "string"), S(n, "string") || (O.type(e, n, i, a, o), O.range(e, n, i, a, o), O.pattern(e, n, i, a, o), e.whitespace === !0 && O.whitespace(e, n, i, a, o));
  }
  r(a);
}, cn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (S(n) && !e.required)
      return r();
    O.required(e, n, i, a, o), n !== void 0 && O.type(e, n, i, a, o);
  }
  r(a);
}, un = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (n === "" && (n = void 0), S(n) && !e.required)
      return r();
    O.required(e, n, i, a, o), n !== void 0 && (O.type(e, n, i, a, o), O.range(e, n, i, a, o));
  }
  r(a);
}, fn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (S(n) && !e.required)
      return r();
    O.required(e, n, i, a, o), n !== void 0 && O.type(e, n, i, a, o);
  }
  r(a);
}, dn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (S(n) && !e.required)
      return r();
    O.required(e, n, i, a, o), S(n) || O.type(e, n, i, a, o);
  }
  r(a);
}, pn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (S(n) && !e.required)
      return r();
    O.required(e, n, i, a, o), n !== void 0 && (O.type(e, n, i, a, o), O.range(e, n, i, a, o));
  }
  r(a);
}, gn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (S(n) && !e.required)
      return r();
    O.required(e, n, i, a, o), n !== void 0 && (O.type(e, n, i, a, o), O.range(e, n, i, a, o));
  }
  r(a);
}, mn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (n == null && !e.required)
      return r();
    O.required(e, n, i, a, o, "array"), n != null && (O.type(e, n, i, a, o), O.range(e, n, i, a, o));
  }
  r(a);
}, vn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (S(n) && !e.required)
      return r();
    O.required(e, n, i, a, o), n !== void 0 && O.type(e, n, i, a, o);
  }
  r(a);
}, hn = "enum", yn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (S(n) && !e.required)
      return r();
    O.required(e, n, i, a, o), n !== void 0 && O[hn](e, n, i, a, o);
  }
  r(a);
}, wn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (S(n, "string") && !e.required)
      return r();
    O.required(e, n, i, a, o), S(n, "string") || O.pattern(e, n, i, a, o);
  }
  r(a);
}, bn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (S(n, "date") && !e.required)
      return r();
    if (O.required(e, n, i, a, o), !S(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), O.type(e, s, i, a, o), s && O.range(e, s.getTime(), i, a, o);
    }
  }
  r(a);
}, xn = function(e, n, r, i, o) {
  var a = [], l = Array.isArray(n) ? "array" : typeof n;
  O.required(e, n, i, a, o, l), r(a);
}, me = function(e, n, r, i, o) {
  var a = e.type, l = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (S(n, a) && !e.required)
      return r();
    O.required(e, n, i, l, o, a), S(n, a) || O.type(e, n, i, l, o);
  }
  r(l);
}, Pn = function(e, n, r, i, o) {
  var a = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (S(n) && !e.required)
      return r();
    O.required(e, n, i, a, o);
  }
  r(a);
}, K = {
  string: sn,
  method: cn,
  number: un,
  boolean: fn,
  regexp: dn,
  integer: pn,
  float: gn,
  array: mn,
  object: vn,
  enum: yn,
  pattern: wn,
  date: bn,
  url: me,
  hex: me,
  email: me,
  required: xn,
  any: Pn
};
function xe() {
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
var Pe = xe(), ie = /* @__PURE__ */ function() {
  function t(n) {
    this.rules = null, this._messages = Pe, this.define(n);
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
    return r && (this._messages = Me(xe(), r)), this._messages;
  }, e.validate = function(r, i, o) {
    var a = this;
    i === void 0 && (i = {}), o === void 0 && (o = function() {
    });
    var l = r, s = i, c = o;
    if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, l), Promise.resolve(l);
    function f(p) {
      var m = [], d = {};
      function w(y) {
        if (Array.isArray(y)) {
          var b;
          m = (b = m).concat.apply(b, y);
        } else
          m.push(y);
      }
      for (var v = 0; v < p.length; v++)
        w(p[v]);
      m.length ? (d = be(m), c(m, d)) : c(null, l);
    }
    if (s.messages) {
      var u = this.messages();
      u === Pe && (u = xe()), Me(u, s.messages), s.messages = u;
    } else
      s.messages = this.messages();
    var g = {}, x = s.keys || Object.keys(this.rules);
    x.forEach(function(p) {
      var m = a.rules[p], d = l[p];
      m.forEach(function(w) {
        var v = w;
        typeof v.transform == "function" && (l === r && (l = $({}, l)), d = l[p] = v.transform(d)), typeof v == "function" ? v = {
          validator: v
        } : v = $({}, v), v.validator = a.getValidationMethod(v), v.validator && (v.field = p, v.fullField = v.fullField || p, v.type = a.getType(v), g[p] = g[p] || [], g[p].push({
          rule: v,
          value: d,
          source: l,
          field: p
        }));
      });
    });
    var P = {};
    return Kt(g, s, function(p, m) {
      var d = p.rule, w = (d.type === "object" || d.type === "array") && (typeof d.fields == "object" || typeof d.defaultField == "object");
      w = w && (d.required || !d.required && p.value), d.field = p.field;
      function v(E, _) {
        return $({}, _, {
          fullField: d.fullField + "." + E,
          fullFields: d.fullFields ? [].concat(d.fullFields, [E]) : [E]
        });
      }
      function y(E) {
        E === void 0 && (E = []);
        var _ = Array.isArray(E) ? E : [E];
        !s.suppressWarning && _.length && t.warning("async-validator:", _), _.length && d.message !== void 0 && (_ = [].concat(d.message));
        var T = _.map(Re(d, l));
        if (s.first && T.length)
          return P[d.field] = 1, m(T);
        if (!w)
          m(T);
        else {
          if (d.required && !p.value)
            return d.message !== void 0 ? T = [].concat(d.message).map(Re(d, l)) : s.error && (T = [s.error(d, L(s.messages.required, d.field))]), m(T);
          var I = {};
          d.defaultField && Object.keys(p.value).map(function(q) {
            I[q] = d.defaultField;
          }), I = $({}, I, p.rule.fields);
          var C = {};
          Object.keys(I).forEach(function(q) {
            var V = I[q], yt = Array.isArray(V) ? V : [V];
            C[q] = yt.map(v.bind(null, q));
          });
          var W = new t(C);
          W.messages(s.messages), p.rule.options && (p.rule.options.messages = s.messages, p.rule.options.error = s.error), W.validate(p.value, p.rule.options || s, function(q) {
            var V = [];
            T && T.length && V.push.apply(V, T), q && q.length && V.push.apply(V, q), m(V.length ? V : null);
          });
        }
      }
      var b;
      if (d.asyncValidator)
        b = d.asyncValidator(d, p.value, y, p.source, s);
      else if (d.validator) {
        try {
          b = d.validator(d, p.value, y, p.source, s);
        } catch (E) {
          console.error == null || console.error(E), s.suppressValidatorError || setTimeout(function() {
            throw E;
          }, 0), y(E.message);
        }
        b === !0 ? y() : b === !1 ? y(typeof d.message == "function" ? d.message(d.fullField || d.field) : d.message || (d.fullField || d.field) + " fails") : b instanceof Array ? y(b) : b instanceof Error && y(b.message);
      }
      b && b.then && b.then(function() {
        return y();
      }, function(E) {
        return y(E);
      });
    }, function(p) {
      f(p);
    }, l);
  }, e.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !K.hasOwnProperty(r.type))
      throw new Error(L("Unknown rule type %s", r.type));
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
ie.messages = Pe;
ie.validators = K;
const Be = A({
  name: "SFormItem",
  props: Ht,
  setup(t, {
    slots: e
  }) {
    const n = J("LABEL_DATA"), r = F(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": n.value.layout === "horizontal",
      "s-form__item--vertical": n.value.layout === "vertical"
    })), i = F(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": n.value.layout === "vertical",
      [`s-form__label--${n.value.labelAlign}`]: n.value.layout === "horizontal",
      [`s-form__label--${n.value.labelSize}`]: n.value.layout === "horizontal"
    })), o = J(ot), a = N(!1), l = N(""), c = {
      validate: () => {
        if (!o)
          return console.warn("请在Form中使用FormItem"), Promise.reject("请在Form中使用FormItem");
        if (!t.prop)
          return console.warn("如果要校验当前项，请设置prop字段"), Promise.reject("如果要校验当前项，请设置prop字段");
        if (!o.rules)
          return Promise.resolve({
            result: !0
          });
        const f = o.rules[t.prop] || void 0;
        if (!f)
          return Promise.resolve({
            result: !0
          });
        const u = o.model[t.prop];
        return new ie({
          [t.prop]: f
        }).validate({
          [t.prop]: u
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
      var f;
      return h("div", {
        class: r.value
      }, [h("span", {
        class: i.value
      }, [t.label]), h("div", null, [(f = e.default) == null ? void 0 : f.call(e)]), a.value && h("div", {
        class: "error-message"
      }, [l.value])]);
    };
  }
}), On = {
  install(t) {
    t.component(De.name, De), t.component(Be.name, Be);
  }
}, En = {
  modelValue: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  }
};
const je = A({
  name: "SInput",
  props: En,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = J("FORM_ITEM_CTX"), r = (i) => {
      const o = i.target.value;
      e("update:modelValue", o), n.validate();
    };
    return () => h("div", {
      class: "s-input"
    }, [h("input", {
      class: "s-input__input",
      value: t.modelValue,
      onInput: r,
      type: t.type
    }, null)]);
  }
}), _n = {
  install(t) {
    t.component(je.name, je);
  }
}, Tn = {
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
const Sn = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
const Nn = A({
  name: "SBaseModal",
  props: Sn,
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
      return h("div", null, [r.value && h("div", {
        class: "s-base-modal"
      }, [h("div", {
        class: "s-base-modal__mask",
        onClick: () => {
          n("update:modelValue", !1);
        }
      }, null), (i = e.default) == null ? void 0 : i.call(e)])]);
    };
  }
}), ze = A({
  name: "SModal",
  props: Tn,
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
      top: f
    } = k(t), u = s.value ? {
      marginTop: 0,
      top: "50%",
      transform: "translateY(-50%)"
    } : null, g = F(() => typeof f.value == "number" ? `${f.value}px` : f.value);
    return () => h(Nn, {
      class: "s-modal",
      modelValue: r.value,
      "onUpdate:modelValue": () => {
        n("update:modelValue");
      }
    }, {
      default: () => {
        var x, P, p;
        return [h("div", {
          class: "s-modal__container",
          style: {
            width: a.value,
            ...u,
            marginTop: g.value,
            backgroundColor: c.value
          }
        }, [e.header ? (x = e.header) == null ? void 0 : x.call(e, {
          close: () => {
            n("update:modelValue", !1);
          }
        }) : h("div", {
          class: "s-modal__header",
          style: {
            textAlign: l.value ? "center" : "left"
          }
        }, [i.value, o.value && h("svg", {
          onClick: () => {
            n("update:modelValue", !1);
          },
          class: "s-modal__close",
          viewBox: "0 0 1024 1024",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg"
        }, [h("path", {
          fill: "currentColor",
          d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
        }, null)])]), h("div", {
          className: "s-modal__body"
        }, [(P = e.default) == null ? void 0 : P.call(e)]), h("div", {
          className: "s-modal__footer"
        }, [(p = e.footer) == null ? void 0 : p.call(e)])])];
      }
    });
  }
}), An = {
  install(t) {
    t.component(ze.name, ze);
  }
}, Ln = {
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
    var r, i, o, a, l, s = function(u, g) {
      g.parentNode.insertBefore(u, g);
    };
    if (e && !t.__iconfont__svg__cssinject__) {
      t.__iconfont__svg__cssinject__ = !0;
      try {
        document.write(
          "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
        );
      } catch (u) {
        console && console.log(u);
      }
    }
    r = function() {
      var u, g = document.createElement("div");
      g.innerHTML = t._iconfont_svg_string_1281272, (g = g.getElementsByTagName("svg")[0]) && (g.setAttribute("aria-hidden", "true"), g.style.position = "absolute", g.style.width = 0, g.style.height = 0, g.style.overflow = "hidden", g = g, (u = document.body).firstChild ? s(g, u.firstChild) : u.appendChild(g));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(r, 0) : (i = function() {
      document.removeEventListener("DOMContentLoaded", i, !1), r();
    }, document.addEventListener("DOMContentLoaded", i, !1)) : document.attachEvent && (o = r, a = t.document, l = !1, f(), a.onreadystatechange = function() {
      a.readyState == "complete" && (a.onreadystatechange = null, c());
    });
  }
  function c() {
    l || (l = !0, o());
  }
  function f() {
    try {
      a.documentElement.doScroll("left");
    } catch {
      return void setTimeout(f, 50);
    }
    c();
  }
}(window);
const $e = A({
  name: "SIcon",
  props: Ln,
  setup(t) {
    const e = F(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = h("img", {
      src: t.name,
      style: {
        width: e.value,
        verticalAlign: "middle"
      }
    }, null), r = h("span", {
      class: [t.prefix, t.prefix + "-" + t.name],
      style: {
        fontSize: e.value,
        color: t.color
      }
    }, null), i = h("svg", {
      style: {
        width: e.value,
        height: e.value
      }
    }, [h("use", {
      "xlink:href": `#${t.prefix}-${t.component}`,
      fill: t.color
    }, null)]), o = t.component ? i : /http|https/.test(t.name) ? n : r;
    return () => o;
  }
}), Fn = (t) => {
  const e = t.size ? typeof t.size == "number" ? `${t.size}px` : t.size : void 0, n = t.color ? t.color : "black";
  return h("svg", {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-arrow-down",
    style: {
      width: e,
      height: e,
      fill: n,
      stroke: n
    }
  }, [h("path", {
    d: "m11.27 27.728 12.727 12.728 12.728-12.728M24 5v34.295"
  }, null)]);
}, In = {
  install(t) {
    t.component($e.name, $e), t.component("ArrowDownIcon", Fn);
  }
}, Cn = {
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
const He = A({
  name: "STabs",
  props: Cn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const n = N([]);
    Z("active-data", n);
    const r = N(t.modelValue);
    Z("active-tab", r);
    const i = (l) => {
      r.value = l;
    }, o = (l) => {
      const s = n.value.findIndex((c) => c.id === l);
      n.value.splice(s, 1);
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
      return h("div", {
        class: "s-tabs"
      }, [h("ul", {
        class: "s-tabs__nav"
      }, [n.value.map((s) => h("li", {
        onClick: () => i(s.id),
        class: s.id === r.value ? "active" : ""
      }, [s.title, t.closable && h("svg", {
        onClick: () => o(s.id),
        style: "margin-left: 8px;",
        viewBox: "0 0 1024 1024",
        width: "12",
        height: "12"
      }, [h("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])])), t.addable && h("li", null, [h("svg", {
        onClick: a,
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14"
      }, [h("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)])])]), (l = e.default) == null ? void 0 : l.call(e), n.value.filter((s) => s.type === "random").map((s) => h("div", {
        class: "s-tab"
      }, [s.id === r.value && s.content]))]);
    };
  }
}), Dn = {
  id: {
    type: String,
    required: !0
  },
  title: {
    type: String,
    required: !0
  }
};
const We = A({
  name: "STab",
  props: Dn,
  setup(t, {
    slots: e
  }) {
    const n = J("active-tab");
    return J("active-data").value.push({
      id: t.id,
      title: t.title
    }), () => {
      var i;
      return h(Ee, null, [t.id === n.value && h("div", {
        class: "s-tab"
      }, [(i = e.default) == null ? void 0 : i.call(e)])]);
    };
  }
}), qn = {
  install(t) {
    t.component(He.name, He), t.component(We.name, We);
  }
}, Vn = {
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
const Rn = {
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
function Te(t) {
  return t === "y" ? "height" : "width";
}
function oe(t) {
  return t.split("-")[0];
}
function fe(t) {
  return ["top", "bottom"].includes(oe(t)) ? "x" : "y";
}
function Ue(t, e, n) {
  let {
    reference: r,
    floating: i
  } = t;
  const o = r.x + r.width / 2 - i.width / 2, a = r.y + r.height / 2 - i.height / 2, l = fe(e), s = Te(l), c = r[s] / 2 - i[s] / 2, f = oe(e), u = l === "x";
  let g;
  switch (f) {
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
      g[l] -= c * (n && u ? -1 : 1);
      break;
    case "end":
      g[l] += c * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Mn = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: a
  } = n, l = o.filter(Boolean), s = await (a.isRTL == null ? void 0 : a.isRTL(e));
  if (process.env.NODE_ENV !== "production") {
    if (a == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), l.filter((p) => {
      let {
        name: m
      } = p;
      return m === "autoPlacement" || m === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!t || !e) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
  }
  let c = await a.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: f,
    y: u
  } = Ue(c, r, s), g = r, x = {}, P = 0;
  for (let p = 0; p < l.length; p++) {
    const {
      name: m,
      fn: d
    } = l[p], {
      x: w,
      y: v,
      data: y,
      reset: b
    } = await d({
      x: f,
      y: u,
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
    if (f = w ?? f, u = v ?? u, x = {
      ...x,
      [m]: {
        ...x[m],
        ...y
      }
    }, process.env.NODE_ENV !== "production" && P > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), b && P <= 50) {
      P++, typeof b == "object" && (b.placement && (g = b.placement), b.rects && (c = b.rects === !0 ? await a.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : b.rects), {
        x: f,
        y: u
      } = Ue(c, g, s)), p = -1;
      continue;
    }
  }
  return {
    x: f,
    y: u,
    placement: g,
    strategy: i,
    middlewareData: x
  };
};
function kn(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function st(t) {
  return typeof t != "number" ? kn(t) : {
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
async function Bn(t, e) {
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
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: g = !1,
    padding: x = 0
  } = e, P = st(x), m = l[g ? u === "floating" ? "reference" : "floating" : u], d = ce(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(m))) == null || n ? m : m.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: s
  })), w = u === "floating" ? {
    ...a.floating,
    x: r,
    y: i
  } : a.reference, v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), y = await (o.isElement == null ? void 0 : o.isElement(v)) ? await (o.getScale == null ? void 0 : o.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = ce(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: v,
    strategy: s
  }) : w);
  return process.env.NODE_ENV, {
    top: (d.top - b.top + P.top) / y.y,
    bottom: (b.bottom - d.bottom + P.bottom) / y.y,
    left: (d.left - b.left + P.left) / y.x,
    right: (b.right - d.right + P.right) / y.x
  };
}
const jn = Math.min, zn = Math.max;
function $n(t, e, n) {
  return zn(t, jn(e, n));
}
const Hn = (t) => ({
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
    const c = st(r), f = {
      x: i,
      y: o
    }, u = fe(a), g = Te(u), x = await s.getDimensions(n), P = u === "y" ? "top" : "left", p = u === "y" ? "bottom" : "right", m = l.reference[g] + l.reference[u] - f[u] - l.floating[g], d = f[u] - l.reference[u], w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(n));
    let v = w ? u === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0;
    v === 0 && (v = l.floating[g]);
    const y = m / 2 - d / 2, b = c[P], E = v - x[g] - c[p], _ = v / 2 - x[g] / 2 + y, T = $n(b, _, E), C = H(a) != null && _ != T && l.reference[g] / 2 - (_ < b ? c[P] : c[p]) - x[g] / 2 < 0 ? _ < b ? b - _ : E - _ : 0;
    return {
      [u]: f[u] - C,
      data: {
        [u]: T,
        centerOffset: _ - T
      }
    };
  }
}), Wn = ["top", "right", "bottom", "left"], Ye = /* @__PURE__ */ Wn.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []), Un = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xe(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Un[e]);
}
function Yn(t, e, n) {
  n === void 0 && (n = !1);
  const r = H(t), i = fe(t), o = Te(i);
  let a = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (a = Xe(a)), {
    main: a,
    cross: Xe(a)
  };
}
const Xn = {
  start: "end",
  end: "start"
};
function Jn(t) {
  return t.replace(/start|end/g, (e) => Xn[e]);
}
function Zn(t, e, n) {
  return (t ? [...n.filter((i) => H(i) === t), ...n.filter((i) => H(i) !== t)] : n.filter((i) => oe(i) === i)).filter((i) => t ? H(i) === t || (e ? Jn(i) !== i : !1) : !0);
}
const Gn = function(t) {
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
        alignment: f,
        allowedPlacements: u = Ye,
        autoAlignment: g = !0,
        ...x
      } = t, P = f !== void 0 || u === Ye ? Zn(f || null, g, u) : u, p = await Bn(e, x), m = ((n = a.autoPlacement) == null ? void 0 : n.index) || 0, d = P[m];
      if (d == null)
        return {};
      const {
        main: w,
        cross: v
      } = Yn(d, o, await (s.isRTL == null ? void 0 : s.isRTL(c.floating)));
      if (l !== d)
        return {
          reset: {
            placement: P[0]
          }
        };
      const y = [p[oe(d)], p[w], p[v]], b = [...((r = a.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: d,
        overflows: y
      }], E = P[m + 1];
      if (E)
        return {
          data: {
            index: m + 1,
            overflows: b
          },
          reset: {
            placement: E
          }
        };
      const _ = b.slice().sort((C, W) => C.overflows[0] - W.overflows[0]), I = ((i = _.find((C) => {
        let {
          overflows: W
        } = C;
        return W.every((q) => q <= 0);
      })) == null ? void 0 : i.placement) || _[0].placement;
      return I !== l ? {
        data: {
          index: m + 1,
          overflows: b
        },
        reset: {
          placement: I
        }
      } : {};
    }
  };
};
async function Kn(t, e) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = t, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), a = oe(n), l = H(n), s = fe(n) === "x", c = ["left", "top"].includes(a) ? -1 : 1, f = o && s ? -1 : 1, u = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: g,
    crossAxis: x,
    alignmentAxis: P
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return l && typeof P == "number" && (x = l === "end" ? P * -1 : P), s ? {
    x: x * f,
    y: g * c
  } : {
    x: g * c,
    y: x * f
  };
}
const Qn = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, i = await Kn(e, t);
      return {
        x: n + i.x,
        y: r + i.y,
        data: i
      };
    }
  };
};
function D(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function R(t) {
  return D(t).getComputedStyle(t);
}
function B(t) {
  return ut(t) ? (t.nodeName || "").toLowerCase() : "";
}
let le;
function ct() {
  if (le)
    return le;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (le = t.brands.map((e) => e.brand + "/" + e.version).join(" "), le) : navigator.userAgent;
}
function M(t) {
  return t instanceof D(t).HTMLElement;
}
function j(t) {
  return t instanceof D(t).Element;
}
function ut(t) {
  return t instanceof D(t).Node;
}
function Je(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = D(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function de(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: i
  } = R(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(i);
}
function er(t) {
  return ["table", "td", "th"].includes(B(t));
}
function Se(t) {
  const e = /firefox/i.test(ct()), n = R(t), r = n.backdropFilter || n.WebkitBackdropFilter;
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
function Ne(t) {
  return ["html", "body", "#document"].includes(B(t));
}
const Ze = Math.min, Q = Math.max, ue = Math.round;
function dt(t) {
  const e = R(t);
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
  if (!M(e))
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
  const c = l ? D(l) : window, f = !ft() && n;
  let u = (a.left + (f && ((i = c.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / s.x, g = (a.top + (f && ((o = c.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / s.y, x = a.width / s.x, P = a.height / s.y;
  if (l) {
    const p = D(l), m = r && j(r) ? D(r) : r;
    let d = p.frameElement;
    for (; d && r && m !== p; ) {
      const w = X(d), v = d.getBoundingClientRect(), y = getComputedStyle(d);
      v.x += (d.clientLeft + parseFloat(y.paddingLeft)) * w.x, v.y += (d.clientTop + parseFloat(y.paddingTop)) * w.y, u *= w.x, g *= w.y, x *= w.x, P *= w.y, u += v.x, g += v.y, d = D(d).frameElement;
    }
  }
  return {
    width: x,
    height: P,
    top: g,
    right: u + x,
    bottom: g + P,
    left: u,
    x: u,
    y: g
  };
}
function z(t) {
  return ((ut(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function pe(t) {
  return j(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function mt(t) {
  return te(z(t)).left + pe(t).scrollLeft;
}
function tr(t, e, n) {
  const r = M(e), i = z(e), o = te(t, !0, n === "fixed", e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((B(e) !== "body" || de(i)) && (a = pe(e)), M(e)) {
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
  if (B(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (Je(t) ? t.host : null) || z(t);
  return Je(e) ? e.host : e;
}
function Ge(t) {
  return !M(t) || R(t).position === "fixed" ? null : t.offsetParent;
}
function nr(t) {
  let e = ne(t);
  for (; M(e) && !Ne(e); ) {
    if (Se(e))
      return e;
    e = ne(e);
  }
  return null;
}
function Ke(t) {
  const e = D(t);
  let n = Ge(t);
  for (; n && er(n) && R(n).position === "static"; )
    n = Ge(n);
  return n && (B(n) === "html" || B(n) === "body" && R(n).position === "static" && !Se(n)) ? e : n || nr(t) || e;
}
function rr(t) {
  return dt(t);
}
function ir(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const i = M(n), o = z(n);
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
  if ((i || !i && r !== "fixed") && ((B(n) !== "body" || de(o)) && (a = pe(n)), M(n))) {
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
function or(t, e) {
  const n = D(t), r = z(t), i = n.visualViewport;
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
function ar(t) {
  var e;
  const n = z(t), r = pe(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = Q(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Q(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let l = -r.scrollLeft + mt(t);
  const s = -r.scrollTop;
  return R(i || n).direction === "rtl" && (l += Q(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: l,
    y: s
  };
}
function vt(t) {
  const e = ne(t);
  return Ne(e) ? t.ownerDocument.body : M(e) && de(e) ? e : vt(e);
}
function ht(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = vt(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = D(r);
  return i ? e.concat(o, o.visualViewport || [], de(r) ? r : []) : e.concat(r, ht(r));
}
function lr(t, e) {
  const n = te(t, !0, e === "fixed"), r = n.top + t.clientTop, i = n.left + t.clientLeft, o = M(t) ? X(t) : {
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
  return e === "viewport" ? ce(or(t, n)) : j(e) ? lr(e, n) : ce(ar(z(t)));
}
function sr(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = ht(t).filter((l) => j(l) && B(l) !== "body"), i = null;
  const o = R(t).position === "fixed";
  let a = o ? ne(t) : t;
  for (; j(a) && !Ne(a); ) {
    const l = R(a), s = Se(a);
    (o ? !s && !i : !s && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? r = r.filter((f) => f !== a) : i = l, a = ne(a);
  }
  return e.set(t, r), r;
}
function cr(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = t;
  const a = [...n === "clippingAncestors" ? sr(e, this._c) : [].concat(n), r], l = a[0], s = a.reduce((c, f) => {
    const u = Qe(e, f, i);
    return c.top = Q(u.top, c.top), c.right = Ze(u.right, c.right), c.bottom = Ze(u.bottom, c.bottom), c.left = Q(u.left, c.left), c;
  }, Qe(e, l, i));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
const ur = {
  getClippingRect: cr,
  convertOffsetParentRelativeRectToViewportRelativeRect: ir,
  isElement: j,
  getDimensions: rr,
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
      reference: tr(e, await i(n), r),
      floating: {
        x: 0,
        y: 0,
        ...await o(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => R(t).direction === "rtl"
}, fr = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: ur,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return Mn(t, e, {
    ...i,
    platform: o
  });
};
const dr = A({
  name: "SBasePopover",
  props: Rn,
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
    } = k(t), l = N(), s = N(), c = () => {
      const u = [];
      o.value && (u.push(Qn(8)), u.push(Hn({
        element: l.value
      }))), a.value || u.push(Gn()), fr(r.value, s.value, {
        middleware: u,
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
            x: m,
            y: d
          } = P.arrow, w = p.split("-")[0], v = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[w], y = ["top", "right", "bottom", "left"], b = y.indexOf(w) - 1, E = y[b < 0 ? b + 4 : b];
          Object.assign(l.value.style, {
            left: `${m}px`,
            top: `${d}px`,
            [v]: "-4px",
            [`border-${w}-color`]: "transparent",
            [`border-${E}-color`]: "transparent"
          });
        }
      });
    }, f = new MutationObserver(() => c());
    return ve(i, (u) => {
      u ? (Ot(c), r.value && f.observe(r.value, {
        attributes: !0
      }), window.addEventListener("resize", c), window.addEventListener("scroll", c)) : (f.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c));
    }, {
      immediate: !0
    }), tt(() => {
      f.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c);
    }), () => {
      var u;
      return h(Ee, null, [i.value && h("div", re({
        ref: s,
        class: "s-base-popover"
      }, n), [(u = e.default) == null ? void 0 : u.call(e), o.value && h("div", {
        class: "s-base-popover__arrow",
        ref: l
      }, null)])]);
    };
  }
}), et = A({
  name: "SPopover",
  props: Vn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const {
      modelValue: n,
      title: r
    } = k(t);
    return () => h(Ee, null, [n.value && h(dr, re({
      class: "s-popover"
    }, t), {
      default: () => {
        var i;
        return [h("h4", {
          class: "s-popover__title"
        }, [r.value]), (i = e.default) == null ? void 0 : i.call(e)];
      }
    })]);
  }
}), pr = {
  install(t) {
    t.component(et.name, et);
  }
}, gr = [
  _t,
  Mt,
  zt,
  On,
  _n,
  An,
  In,
  qn,
  pr
], vr = {
  version: "0.0.1",
  install(t) {
    gr.forEach((e) => t.use(e));
  }
};
export {
  Ae as Button,
  De as Form,
  $e as Icon,
  je as Input,
  ze as Modal,
  Ce as Pagination,
  et as Popover,
  We as Tab,
  He as Tabs,
  Ie as Tree,
  vr as default
};
