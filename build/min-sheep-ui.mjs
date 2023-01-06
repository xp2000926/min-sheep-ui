import { defineComponent as E, toRefs as D, createVNode as f, computed as S, reactive as Se, ref as T, unref as Le, inject as k, mergeProps as W, withDirectives as Me, vModelCheckbox as ze, onMounted as re, provide as B, createTextVNode as j, watch as oe, onUnmounted as Ae, Fragment as De } from "vue";
const Ce = {
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
const le = E({
  name: "SButton",
  props: Ce,
  setup(n, {
    slots: e
  }) {
    const {
      type: t,
      size: r,
      disabled: a,
      block: i
    } = D(n), o = i.value ? "s-btn--block" : "";
    return () => f("button", {
      disabled: a.value,
      class: `s-btn s-btn--${t.value} s-btn--${r.value} ${o}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), Ve = {
  install(n) {
    n.component(le.name, le);
  }
};
function ae(n, e = 0, t = []) {
  return e++, n.reduce((r, a) => {
    const i = { ...a };
    i.level = e, t.length > 0 && t[t.length - 1].level >= e && t.pop(), t.push(i);
    const o = t[t.length - 2];
    if (o && (i.parentId = o.id), i.children) {
      const l = ae(i.children, e, t);
      return delete i.children, r.concat(i, l);
    } else
      return i.isLeaf === void 0 && (i.isLeaf = !0), r.concat(i);
  }, []);
}
function je(n, { getChildren: e }) {
  return {
    toggleCheckNode: (r) => {
      r.checked = !r.checked, e(r).forEach((l) => {
        l.checked = r.checked;
      });
      const a = n.value.find((l) => l.id === r.parentId);
      if (!a)
        return;
      const i = e(a, !1), o = i.filter((l) => l.checked);
      o.length === i.length ? a.checked = !0 : o.length === 0 && (a.checked = !1);
    }
  };
}
function ke(n) {
  const e = S(() => {
    let l = [];
    const s = [];
    for (const p of n.value)
      l.map((d) => d.id).includes(p.id) || (p.expanded !== !0 && (l = t(p)), s.push(p));
    return s;
  }), t = (l, s = !0) => {
    const p = [], d = n.value.findIndex((v) => v.id === l.id);
    for (let v = d + 1; v < n.value.length && l.level < n.value[v].level; v++)
      (s || l.level === n.value[v].level - 1) && p.push(n.value[v]);
    return p;
  }, r = (l, s = []) => {
    const p = t(l, !1);
    return s.push(...p), p.forEach((d) => {
      d.expanded && r(d, s);
    }), s;
  };
  return {
    expandedTree: e,
    getChildren: t,
    getChildrenExpanded: r,
    getIndex: (l) => l ? n.value.findIndex((s) => s.id === l.id) : -1,
    getNode: (l) => n.value.find((s) => s.id === l.id),
    getParent: (l) => n.value.find((s) => s.id === l.parentId)
  };
}
const Z = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function Be(n, e, { getChildren: t, getParent: r }) {
  const a = Se({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), i = S(
    () => e.value.reduce(
      (u, g) => ({
        ...u,
        [g.id]: g
      }),
      {}
    )
  ), o = (u) => {
    u == null || u.classList.remove(...Object.values(Z));
  }, l = (u, g) => {
    var x;
    const c = (x = i.value[u]) == null ? void 0 : x.parentId;
    return c === g ? !0 : c !== void 0 ? l(c, g) : !1;
  }, s = () => {
    a.dropType = void 0, a.draggingNode = null, a.draggingTreeNode = null;
  }, p = (u, g) => {
    var c;
    u.stopPropagation(), a.draggingNode = u.target, a.draggingTreeNode = g, (c = u.dataTransfer) == null || c.setData("dragNodeId", g.id);
  }, d = (u) => {
    if (u.preventDefault(), u.stopPropagation(), !!a.draggingNode && n) {
      if (u.dataTransfer && (u.dataTransfer.dropEffect = "move"), !e)
        return;
      let g = {};
      typeof n == "object" ? g = n : n === !0 && (g = { dropInner: !0 });
      const { dropPrev: c, dropNext: x, dropInner: m } = g;
      let y;
      const w = c ? m ? 0.25 : x ? 0.45 : 1 : -1, _ = x ? m ? 0.75 : c ? 0.55 : 0 : 1, N = u.currentTarget, I = N == null ? void 0 : N.getBoundingClientRect(), z = u.clientY - ((I == null ? void 0 : I.top) || 0);
      if (z < ((I == null ? void 0 : I.height) || 0) * w ? y = "dropPrev" : z > ((I == null ? void 0 : I.height) || 0) * _ ? y = "dropNext" : m ? y = "dropInner" : y = void 0, y) {
        const C = N == null ? void 0 : N.classList;
        C && (C.contains(Z[y]) || (o(N), C.add(Z[y])));
      } else
        o(N);
      a.dropType = y;
    }
  }, v = (u) => {
    u.stopPropagation(), a.draggingNode && o(u.currentTarget);
  }, h = (u, g) => {
    var x;
    if (u.preventDefault(), u.stopPropagation(), o(u.currentTarget), !a.draggingNode || !n)
      return;
    const c = (x = u.dataTransfer) == null ? void 0 : x.getData("dragNodeId");
    if (c) {
      const m = l(g.id, c);
      if (c === g.id || m)
        return;
      a.dropType && P(c, g), s();
    }
  };
  function P(u, g) {
    const c = e.value.find((x) => x.id === u);
    if (c) {
      let x;
      const m = t(c), y = r(c);
      if (a.dropType === "dropInner") {
        x = {
          ...c,
          parentId: g.id,
          level: g.level + 1
        };
        const w = e.value.indexOf(g);
        e.value.splice(w + 1, 0, x), g.isLeaf = void 0;
        const _ = e.value.indexOf(c);
        e.value.splice(_, 1);
      } else if (a.dropType === "dropNext") {
        x = {
          ...c,
          parentId: g.parentId,
          level: g.level
        };
        const w = e.value.indexOf(g), _ = t(g, !0).length;
        e.value.splice(
          w + _ + 1,
          0,
          x
        );
        const N = e.value.indexOf(c);
        e.value.splice(N, 1);
      } else if (a.dropType === "dropPrev") {
        x = {
          ...c,
          parentId: g.parentId,
          level: g.level
        };
        const w = e.value.indexOf(g);
        e.value.splice(w, 0, x);
        const _ = e.value.indexOf(c);
        e.value.splice(_, 1);
      }
      a.dropType = "dropInner", m.forEach((w) => P(w.id, x)), y && t(y).length === 0 && (y.isLeaf = !0);
    }
  }
  return {
    onDragstart: p,
    onDragover: d,
    onDragleave: v,
    onDrop: h,
    onDragend: (u) => {
      u.preventDefault(), u.stopPropagation(), s();
    }
  };
}
function Re(n, { getNode: e, getIndex: t, getChildren: r }, { emit: a }) {
  const i = (p) => {
    const d = e(p);
    d && d.isLeaf === !1 && !d.childNodeCount && (d.loading = !0, a("lazy-load", p, o));
  }, o = (p) => {
    const d = e(p.node);
    if (d) {
      d.loading = !1;
      const v = T(
        ae(p.treeItems, d.level)
      );
      l(d, v), s(d, v);
      const h = r(d);
      d.childNodeCount = h.length;
    }
  }, l = (p, d) => {
    d.value.forEach((v) => {
      v.level - 1 === p.level && !v.parentId && (v.parentId = p.id);
    });
  }, s = (p, d) => {
    const v = t(p);
    v && n.value.splice(v + 1, 0, ...d.value);
  };
  return {
    lazyLoadNodes: i
  };
}
function Ie(n = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let t = "";
  for (let r = 0; r < n; r++)
    t += e[parseInt((Math.random() * e.length).toString())];
  return t;
}
function $e(n, { getChildren: e, getIndex: t }) {
  return {
    append: (i, o) => {
      const l = e(i, !1), s = l[l.length - 1];
      let p = t(i) + 1;
      s && (p = t(s) + 1), i.expanded = !0, i.isLeaf = !1;
      const d = T({
        ...o,
        level: i.level + 1,
        parentId: i.id,
        isLeaf: !0
      });
      d.value.id === void 0 && (d.value.id = Ie()), n.value.splice(p, 0, d.value);
    },
    remove: (i) => {
      const o = e(i).map((l) => l.id);
      n.value = n.value.filter(
        (l) => l.id !== i.id && !o.includes(l.id)
      );
    }
  };
}
function He(n, e, t, r) {
  const { lazyLoadNodes: a } = r;
  return {
    toggleNode: (o) => {
      const l = n.value.find((s) => s.id === o.id);
      l && (l.expanded = !l.expanded, l.expanded && a(l));
    }
  };
}
function Ue(n, e, t) {
  const r = Le(n), a = T(ae(r)), i = ke(a), o = [He, je, $e], l = Re(a, i, t), s = Be(e.draggable, a, i);
  return {
    ...o.reduce((d, v) => ({ ...d, ...v(a, i, t, l) }), {}),
    ...i,
    ...s,
    treeData: a
  };
}
const qe = {
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
}, Ye = {
  ...qe,
  treeNode: {
    type: Object,
    required: !0
  }
}, se = 34, de = 24, Je = E({
  name: "STreeNode",
  props: Ye,
  setup(n, {
    slots: e
  }) {
    const {
      lineable: t,
      checkable: r,
      treeNode: a,
      operable: i,
      draggable: o
    } = D(n), {
      toggleCheckNode: l,
      getChildrenExpanded: s,
      append: p,
      remove: d,
      onDragend: v,
      onDragleave: h,
      onDragover: P,
      onDragstart: O,
      onDrop: u
    } = k("TREE_UTILS"), g = T(!1), c = () => {
      g.value ? g.value = !1 : g.value = !0;
    };
    let x = {};
    return o.value && (x = {
      draggable: !0,
      onDragend: (m) => v(m),
      onDragleave: (m) => h(m),
      onDragover: (m) => P(m),
      onDragstart: (m) => O(m, a.value),
      onDrop: (m) => u(m, a.value)
    }), () => {
      var m, y, w;
      return f("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${de * (a.value.level - 1)}px`
        },
        onMouseenter: c,
        onMouseleave: c
      }, [!a.value.isLeaf && a.value.expanded && t.value && f("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${se * s(a.value).length}px`,
          left: `${de * (a.value.level - 1) + 9}px`,
          top: `${se}px`
        }
      }, null), f("div", W({
        class: "s-tree__node--content"
      }, x), [a.value.isLeaf ? f("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (m = e.icon) == null ? void 0 : m.call(e), r.value && Me(f("input", {
        type: "checkbox",
        "onUpdate:modelValue": (_) => a.value.checked = _,
        onClick: () => {
          l(a.value);
        }
      }, null), [[ze, a.value.checked]]), (y = e.content) == null ? void 0 : y.call(e), i.value && g.value && f("span", {
        class: "inline-flex ml-1"
      }, [f("svg", {
        onClick: () => {
          p(a.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [f("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), f("svg", {
        onClick: () => {
          d(a.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [f("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), a.value.loading && ((w = e.loading) == null ? void 0 : w.call(e))])]);
    };
  }
}), We = (n, {
  emit: e
}) => f("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: n.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [f("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const Ze = {
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
const Ge = E({
  name: "SVirtualList",
  props: Ze,
  setup(n, {
    slots: e
  }) {
    const {
      data: t,
      itemHeight: r,
      component: a
    } = D(n), i = T(), o = T(0), l = T(0), s = T(0), p = S(() => Math.ceil(o.value / r.value)), d = S(() => t.value.slice(s.value, Math.min(s.value + p.value, t.value.length)));
    re(() => {
      var h;
      o.value = (h = i.value) == null ? void 0 : h.clientHeight;
    });
    const v = (h) => {
      const {
        scrollTop: P
      } = h.target;
      s.value = Math.floor(P / r.value), l.value = P - P % r.value;
    };
    return () => f(a.value, {
      class: "s-virtual-list__container",
      ref: i,
      onScroll: v
    }, {
      default: () => [f("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${t.value.length * r.value}px`
        }
      }, null), f("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${l.value}px, 0)`
        }
      }, [d.value.map((h, P) => {
        var O;
        return (O = e.default) == null ? void 0 : O.call(e, {
          item: h,
          index: P
        });
      })])]
    });
  }
}), ce = E({
  name: "STree",
  props: qe,
  emits: ["lazy-load"],
  setup(n, e) {
    const {
      data: t,
      height: r,
      itemHeight: a
    } = D(n), {
      slots: i
    } = e, o = Ue(t, n, e);
    return B("TREE_UTILS", o), () => {
      const l = (s) => f(Je, W(n, {
        treeNode: s
      }), {
        content: () => i.content ? i.content(s) : s.label,
        icon: () => i.icon ? i.icon({
          nodeData: s,
          toggleNode: o.toggleNode
        }) : f(We, {
          expanded: !!s.expanded,
          onClick: () => o.toggleNode(s)
        }, null),
        loading: () => i.loading ? i.loading({
          nodeData: o
        }) : f("span", {
          class: "ml-1"
        }, [j("loading...")])
      });
      return f("div", {
        class: "s-tree"
      }, [r != null && r.value ? f("div", {
        style: {
          height: `${r.value}px`
        }
      }, [f(Ge, {
        data: o.expandedTree.value,
        itemHeight: a.value
      }, {
        default: ({
          item: s
        }) => l(s)
      })]) : o.expandedTree.value.map((s) => l(s))]);
    };
  }
}), Xe = {
  install(n) {
    n.component(ce.name, ce);
  }
}, Ne = {
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
function Ke(n = 1) {
  const e = T(n), t = (o) => {
    e.value = o;
  }, r = (o) => {
    e.value += o;
  };
  return {
    pageIndex: e,
    setPageIndex: t,
    jumpPage: r,
    prevPage: () => r(-1),
    nextPage: () => r(1)
  };
}
const Qe = (n, e, t) => {
  const r = Array.from(Array(n).keys());
  if (n <= t)
    return r.slice(2, n);
  {
    const a = Math.ceil(t / 2);
    return e <= a ? r.slice(2, t) : e >= n - a + 1 ? r.slice(n - t + 2, n) : r.slice(e - a + 2, e + a - 1);
  }
}, et = Ne, X = E({
  name: "SPager",
  props: et,
  setup(n) {
    const {
      total: e,
      pageSize: t,
      pagerCount: r
    } = D(n), a = S(() => Math.ceil(e.value / t.value)), {
      pageIndex: i,
      setPageIndex: o,
      jumpPage: l,
      prevPage: s,
      nextPage: p
    } = Ke(), d = S(() => Qe(a.value, i.value, r.value));
    return {
      totalPage: a,
      pageIndex: i,
      setPageIndex: o,
      jumpPage: l,
      prevPage: s,
      nextPage: p,
      centerPages: d
    };
  },
  render() {
    const {
      pagerCount: n,
      totalPage: e,
      pageIndex: t,
      setPageIndex: r,
      jumpPage: a,
      centerPages: i
    } = this;
    return f("ul", {
      class: "s-pager"
    }, [f("li", {
      onClick: () => r(1),
      class: {
        current: t === 1
      }
    }, [j("1")]), e > n && t > Math.ceil(n / 2) && f("li", {
      class: "more left",
      onClick: () => a(-5)
    }, [j("...")]), i.map((o) => f("li", {
      onClick: () => r(o),
      class: {
        current: t === o
      }
    }, [o])), e > n && t < e - Math.ceil(n / 2) + 1 && f("li", {
      class: "more right",
      onClick: () => a(5)
    }, [j("...")]), e > 1 && f("li", {
      onClick: () => r(e),
      class: {
        current: t === e
      }
    }, [e])]);
  }
}), ue = E({
  name: "SPagination",
  props: Ne,
  emits: ["update:modelValue"],
  setup(n, {
    emit: e
  }) {
    const t = T(), r = S(() => t.value ? t.value.pageIndex < 2 : !0), a = S(() => t.value ? t.value.pageIndex > t.value.totalPage - 1 : !0);
    return re(() => {
      oe(() => t.value.pageIndex, (i) => {
        e("update:modelValue", i);
      }), oe(() => n.modelValue, (i) => {
        t.value.pageIndex = i;
      });
    }), () => f("div", {
      class: "s-pagination"
    }, [f("button", {
      disabled: r.value,
      onClick: () => t.value.prevPage()
    }, [j("上一页")]), f(X, W(n, {
      ref: t
    }), null), f("button", {
      disabled: a.value,
      onClick: () => t.value.nextPage()
    }, [j("下一页")])]);
  }
}), tt = {
  install(n) {
    n.component(ue.name, ue), n.component(X.name, X);
  }
}, Oe = Symbol("formContextToken"), nt = {
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
const fe = E({
  name: "SForm",
  props: nt,
  emits: ["submit"],
  setup(n, {
    slots: e,
    emit: t,
    expose: r
  }) {
    const a = S(() => ({
      layout: n.layout,
      labelSize: n.labelSize,
      labelAlign: n.labelAlign
    }));
    B("LABEL_DATA", a);
    const i = /* @__PURE__ */ new Set(), o = (d) => i.add(d), l = (d) => i.delete(d);
    B(Oe, {
      model: n.model,
      rules: n.rules,
      addItem: o,
      removeItem: l
    });
    const s = (d) => {
      d.preventDefault(), t("submit");
    };
    return r({
      validate: (d) => {
        const v = [];
        i.forEach((h) => v.push(h.validate())), Promise.all(v).then(() => d(!0)).catch(() => d(!1));
      }
    }), () => {
      var d;
      return f("form", {
        class: "s-form",
        onSubmit: s
      }, [(d = e.default) == null ? void 0 : d.call(e)]);
    };
  }
}), rt = {
  label: {
    type: String
  },
  prop: {
    type: String
  }
};
function A() {
  return A = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, A.apply(this, arguments);
}
function at(n, e) {
  n.prototype = Object.create(e.prototype), n.prototype.constructor = n, H(n, e);
}
function K(n) {
  return K = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, K(n);
}
function H(n, e) {
  return H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, H(n, e);
}
function it() {
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
function J(n, e, t) {
  return it() ? J = Reflect.construct.bind() : J = function(a, i, o) {
    var l = [null];
    l.push.apply(l, i);
    var s = Function.bind.apply(a, l), p = new s();
    return o && H(p, o.prototype), p;
  }, J.apply(null, arguments);
}
function ot(n) {
  return Function.toString.call(n).indexOf("[native code]") !== -1;
}
function Q(n) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Q = function(r) {
    if (r === null || !ot(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, a);
    }
    function a() {
      return J(r, arguments, K(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), H(a, r);
  }, Q(n);
}
var lt = /%[sdj%]/g, Te = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Te = function(e, t) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && t.every(function(r) {
    return typeof r == "string";
  }) && console.warn(e, t);
});
function ee(n) {
  if (!n || !n.length)
    return null;
  var e = {};
  return n.forEach(function(t) {
    var r = t.field;
    e[r] = e[r] || [], e[r].push(t);
  }), e;
}
function F(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    t[r - 1] = arguments[r];
  var a = 0, i = t.length;
  if (typeof n == "function")
    return n.apply(null, t);
  if (typeof n == "string") {
    var o = n.replace(lt, function(l) {
      if (l === "%%")
        return "%";
      if (a >= i)
        return l;
      switch (l) {
        case "%s":
          return String(t[a++]);
        case "%d":
          return Number(t[a++]);
        case "%j":
          try {
            return JSON.stringify(t[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return l;
      }
    });
    return o;
  }
  return n;
}
function st(n) {
  return n === "string" || n === "url" || n === "hex" || n === "email" || n === "date" || n === "pattern";
}
function q(n, e) {
  return !!(n == null || e === "array" && Array.isArray(n) && !n.length || st(e) && typeof n == "string" && !n);
}
function dt(n, e, t) {
  var r = [], a = 0, i = n.length;
  function o(l) {
    r.push.apply(r, l || []), a++, a === i && t(r);
  }
  n.forEach(function(l) {
    e(l, o);
  });
}
function pe(n, e, t) {
  var r = 0, a = n.length;
  function i(o) {
    if (o && o.length) {
      t(o);
      return;
    }
    var l = r;
    r = r + 1, l < a ? e(n[l], i) : t([]);
  }
  i([]);
}
function ct(n) {
  var e = [];
  return Object.keys(n).forEach(function(t) {
    e.push.apply(e, n[t] || []);
  }), e;
}
var ve = /* @__PURE__ */ function(n) {
  at(e, n);
  function e(t, r) {
    var a;
    return a = n.call(this, "Async Validation Error") || this, a.errors = t, a.fields = r, a;
  }
  return e;
}(/* @__PURE__ */ Q(Error));
function ut(n, e, t, r, a) {
  if (e.first) {
    var i = new Promise(function(h, P) {
      var O = function(c) {
        return r(c), c.length ? P(new ve(c, ee(c))) : h(a);
      }, u = ct(n);
      pe(u, t, O);
    });
    return i.catch(function(h) {
      return h;
    }), i;
  }
  var o = e.firstFields === !0 ? Object.keys(n) : e.firstFields || [], l = Object.keys(n), s = l.length, p = 0, d = [], v = new Promise(function(h, P) {
    var O = function(g) {
      if (d.push.apply(d, g), p++, p === s)
        return r(d), d.length ? P(new ve(d, ee(d))) : h(a);
    };
    l.length || (r(d), h(a)), l.forEach(function(u) {
      var g = n[u];
      o.indexOf(u) !== -1 ? pe(g, t, O) : dt(g, t, O);
    });
  });
  return v.catch(function(h) {
    return h;
  }), v;
}
function ft(n) {
  return !!(n && n.message !== void 0);
}
function pt(n, e) {
  for (var t = n, r = 0; r < e.length; r++) {
    if (t == null)
      return t;
    t = t[e[r]];
  }
  return t;
}
function ge(n, e) {
  return function(t) {
    var r;
    return n.fullFields ? r = pt(e, n.fullFields) : r = e[t.field || n.fullField], ft(t) ? (t.field = t.field || n.fullField, t.fieldValue = r, t) : {
      message: typeof t == "function" ? t() : t,
      fieldValue: r,
      field: t.field || n.fullField
    };
  };
}
function me(n, e) {
  if (e) {
    for (var t in e)
      if (e.hasOwnProperty(t)) {
        var r = e[t];
        typeof r == "object" && typeof n[t] == "object" ? n[t] = A({}, n[t], r) : n[t] = r;
      }
  }
  return n;
}
var Ee = function(e, t, r, a, i, o) {
  e.required && (!r.hasOwnProperty(e.field) || q(t, o || e.type)) && a.push(F(i.messages.required, e.fullField));
}, vt = function(e, t, r, a, i) {
  (/^\s+$/.test(t) || t === "") && a.push(F(i.messages.whitespace, e.fullField));
}, Y, gt = function() {
  if (Y)
    return Y;
  var n = "[a-fA-F\\d:]", e = function(y) {
    return y && y.includeBoundaries ? "(?:(?<=\\s|^)(?=" + n + ")|(?<=" + n + ")(?=\\s|$))" : "";
  }, t = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", a = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + t + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + t + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + t + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + t + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + t + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + t + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + t + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + t + "$)|(?:^" + a + "$)"), o = new RegExp("^" + t + "$"), l = new RegExp("^" + a + "$"), s = function(y) {
    return y && y.exact ? i : new RegExp("(?:" + e(y) + t + e(y) + ")|(?:" + e(y) + a + e(y) + ")", "g");
  };
  s.v4 = function(m) {
    return m && m.exact ? o : new RegExp("" + e(m) + t + e(m), "g");
  }, s.v6 = function(m) {
    return m && m.exact ? l : new RegExp("" + e(m) + a + e(m), "g");
  };
  var p = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", v = s.v4().source, h = s.v6().source, P = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", O = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", u = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", g = "(?::\\d{2,5})?", c = '(?:[/?#][^\\s"]*)?', x = "(?:" + p + "|www\\.)" + d + "(?:localhost|" + v + "|" + h + "|" + P + O + u + ")" + g + c;
  return Y = new RegExp("(?:^" + x + "$)", "i"), Y;
}, he = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, R = {
  integer: function(e) {
    return R.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return R.number(e) && !R.integer(e);
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
    return typeof e == "object" && !R.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match(he.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(gt());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(he.hex);
  }
}, mt = function(e, t, r, a, i) {
  if (e.required && t === void 0) {
    Ee(e, t, r, a, i);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = e.type;
  o.indexOf(l) > -1 ? R[l](t) || a.push(F(i.messages.types[l], e.fullField, e.type)) : l && typeof t !== e.type && a.push(F(i.messages.types[l], e.fullField, e.type));
}, ht = function(e, t, r, a, i) {
  var o = typeof e.len == "number", l = typeof e.min == "number", s = typeof e.max == "number", p = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = t, v = null, h = typeof t == "number", P = typeof t == "string", O = Array.isArray(t);
  if (h ? v = "number" : P ? v = "string" : O && (v = "array"), !v)
    return !1;
  O && (d = t.length), P && (d = t.replace(p, "_").length), o ? d !== e.len && a.push(F(i.messages[v].len, e.fullField, e.len)) : l && !s && d < e.min ? a.push(F(i.messages[v].min, e.fullField, e.min)) : s && !l && d > e.max ? a.push(F(i.messages[v].max, e.fullField, e.max)) : l && s && (d < e.min || d > e.max) && a.push(F(i.messages[v].range, e.fullField, e.min, e.max));
}, V = "enum", yt = function(e, t, r, a, i) {
  e[V] = Array.isArray(e[V]) ? e[V] : [], e[V].indexOf(t) === -1 && a.push(F(i.messages[V], e.fullField, e[V].join(", ")));
}, bt = function(e, t, r, a, i) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(t) || a.push(F(i.messages.pattern.mismatch, e.fullField, t, e.pattern));
    else if (typeof e.pattern == "string") {
      var o = new RegExp(e.pattern);
      o.test(t) || a.push(F(i.messages.pattern.mismatch, e.fullField, t, e.pattern));
    }
  }
}, b = {
  required: Ee,
  whitespace: vt,
  type: mt,
  range: ht,
  enum: yt,
  pattern: bt
}, xt = function(e, t, r, a, i) {
  var o = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (q(t, "string") && !e.required)
      return r();
    b.required(e, t, a, o, i, "string"), q(t, "string") || (b.type(e, t, a, o, i), b.range(e, t, a, o, i), b.pattern(e, t, a, o, i), e.whitespace === !0 && b.whitespace(e, t, a, o, i));
  }
  r(o);
}, wt = function(e, t, r, a, i) {
  var o = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (q(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), t !== void 0 && b.type(e, t, a, o, i);
  }
  r(o);
}, _t = function(e, t, r, a, i) {
  var o = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (t === "" && (t = void 0), q(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), t !== void 0 && (b.type(e, t, a, o, i), b.range(e, t, a, o, i));
  }
  r(o);
}, Pt = function(e, t, r, a, i) {
  var o = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (q(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), t !== void 0 && b.type(e, t, a, o, i);
  }
  r(o);
}, It = function(e, t, r, a, i) {
  var o = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (q(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), q(t) || b.type(e, t, a, o, i);
  }
  r(o);
}, qt = function(e, t, r, a, i) {
  var o = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (q(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), t !== void 0 && (b.type(e, t, a, o, i), b.range(e, t, a, o, i));
  }
  r(o);
}, Nt = function(e, t, r, a, i) {
  var o = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (q(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), t !== void 0 && (b.type(e, t, a, o, i), b.range(e, t, a, o, i));
  }
  r(o);
}, Ot = function(e, t, r, a, i) {
  var o = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (t == null && !e.required)
      return r();
    b.required(e, t, a, o, i, "array"), t != null && (b.type(e, t, a, o, i), b.range(e, t, a, o, i));
  }
  r(o);
}, Tt = function(e, t, r, a, i) {
  var o = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (q(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), t !== void 0 && b.type(e, t, a, o, i);
  }
  r(o);
}, Et = "enum", Ft = function(e, t, r, a, i) {
  var o = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (q(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), t !== void 0 && b[Et](e, t, a, o, i);
  }
  r(o);
}, St = function(e, t, r, a, i) {
  var o = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (q(t, "string") && !e.required)
      return r();
    b.required(e, t, a, o, i), q(t, "string") || b.pattern(e, t, a, o, i);
  }
  r(o);
}, Lt = function(e, t, r, a, i) {
  var o = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (q(t, "date") && !e.required)
      return r();
    if (b.required(e, t, a, o, i), !q(t, "date")) {
      var s;
      t instanceof Date ? s = t : s = new Date(t), b.type(e, s, a, o, i), s && b.range(e, s.getTime(), a, o, i);
    }
  }
  r(o);
}, Mt = function(e, t, r, a, i) {
  var o = [], l = Array.isArray(t) ? "array" : typeof t;
  b.required(e, t, a, o, i, l), r(o);
}, G = function(e, t, r, a, i) {
  var o = e.type, l = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (q(t, o) && !e.required)
      return r();
    b.required(e, t, a, l, i, o), q(t, o) || b.type(e, t, a, l, i);
  }
  r(l);
}, zt = function(e, t, r, a, i) {
  var o = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (q(t) && !e.required)
      return r();
    b.required(e, t, a, o, i);
  }
  r(o);
}, $ = {
  string: xt,
  method: wt,
  number: _t,
  boolean: Pt,
  regexp: It,
  integer: qt,
  float: Nt,
  array: Ot,
  object: Tt,
  enum: Ft,
  pattern: St,
  date: Lt,
  url: G,
  hex: G,
  email: G,
  required: Mt,
  any: zt
};
function te() {
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
var ne = te(), U = /* @__PURE__ */ function() {
  function n(t) {
    this.rules = null, this._messages = ne, this.define(t);
  }
  var e = n.prototype;
  return e.define = function(r) {
    var a = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(i) {
      var o = r[i];
      a.rules[i] = Array.isArray(o) ? o : [o];
    });
  }, e.messages = function(r) {
    return r && (this._messages = me(te(), r)), this._messages;
  }, e.validate = function(r, a, i) {
    var o = this;
    a === void 0 && (a = {}), i === void 0 && (i = function() {
    });
    var l = r, s = a, p = i;
    if (typeof s == "function" && (p = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return p && p(null, l), Promise.resolve(l);
    function d(u) {
      var g = [], c = {};
      function x(y) {
        if (Array.isArray(y)) {
          var w;
          g = (w = g).concat.apply(w, y);
        } else
          g.push(y);
      }
      for (var m = 0; m < u.length; m++)
        x(u[m]);
      g.length ? (c = ee(g), p(g, c)) : p(null, l);
    }
    if (s.messages) {
      var v = this.messages();
      v === ne && (v = te()), me(v, s.messages), s.messages = v;
    } else
      s.messages = this.messages();
    var h = {}, P = s.keys || Object.keys(this.rules);
    P.forEach(function(u) {
      var g = o.rules[u], c = l[u];
      g.forEach(function(x) {
        var m = x;
        typeof m.transform == "function" && (l === r && (l = A({}, l)), c = l[u] = m.transform(c)), typeof m == "function" ? m = {
          validator: m
        } : m = A({}, m), m.validator = o.getValidationMethod(m), m.validator && (m.field = u, m.fullField = m.fullField || u, m.type = o.getType(m), h[u] = h[u] || [], h[u].push({
          rule: m,
          value: c,
          source: l,
          field: u
        }));
      });
    });
    var O = {};
    return ut(h, s, function(u, g) {
      var c = u.rule, x = (c.type === "object" || c.type === "array") && (typeof c.fields == "object" || typeof c.defaultField == "object");
      x = x && (c.required || !c.required && u.value), c.field = u.field;
      function m(_, N) {
        return A({}, N, {
          fullField: c.fullField + "." + _,
          fullFields: c.fullFields ? [].concat(c.fullFields, [_]) : [_]
        });
      }
      function y(_) {
        _ === void 0 && (_ = []);
        var N = Array.isArray(_) ? _ : [_];
        !s.suppressWarning && N.length && n.warning("async-validator:", N), N.length && c.message !== void 0 && (N = [].concat(c.message));
        var I = N.map(ge(c, l));
        if (s.first && I.length)
          return O[c.field] = 1, g(I);
        if (!x)
          g(I);
        else {
          if (c.required && !u.value)
            return c.message !== void 0 ? I = [].concat(c.message).map(ge(c, l)) : s.error && (I = [s.error(c, F(s.messages.required, c.field))]), g(I);
          var z = {};
          c.defaultField && Object.keys(u.value).map(function(M) {
            z[M] = c.defaultField;
          }), z = A({}, z, u.rule.fields);
          var C = {};
          Object.keys(z).forEach(function(M) {
            var L = z[M], Fe = Array.isArray(L) ? L : [L];
            C[M] = Fe.map(m.bind(null, M));
          });
          var ie = new n(C);
          ie.messages(s.messages), u.rule.options && (u.rule.options.messages = s.messages, u.rule.options.error = s.error), ie.validate(u.value, u.rule.options || s, function(M) {
            var L = [];
            I && I.length && L.push.apply(L, I), M && M.length && L.push.apply(L, M), g(L.length ? L : null);
          });
        }
      }
      var w;
      if (c.asyncValidator)
        w = c.asyncValidator(c, u.value, y, u.source, s);
      else if (c.validator) {
        try {
          w = c.validator(c, u.value, y, u.source, s);
        } catch (_) {
          console.error == null || console.error(_), s.suppressValidatorError || setTimeout(function() {
            throw _;
          }, 0), y(_.message);
        }
        w === !0 ? y() : w === !1 ? y(typeof c.message == "function" ? c.message(c.fullField || c.field) : c.message || (c.fullField || c.field) + " fails") : w instanceof Array ? y(w) : w instanceof Error && y(w.message);
      }
      w && w.then && w.then(function() {
        return y();
      }, function(_) {
        return y(_);
      });
    }, function(u) {
      d(u);
    }, l);
  }, e.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !$.hasOwnProperty(r.type))
      throw new Error(F("Unknown rule type %s", r.type));
    return r.type || "string";
  }, e.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var a = Object.keys(r), i = a.indexOf("message");
    return i !== -1 && a.splice(i, 1), a.length === 1 && a[0] === "required" ? $.required : $[this.getType(r)] || void 0;
  }, n;
}();
U.register = function(e, t) {
  if (typeof t != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  $[e] = t;
};
U.warning = Te;
U.messages = ne;
U.validators = $;
const ye = E({
  name: "SFormItem",
  props: rt,
  setup(n, {
    slots: e
  }) {
    const t = k("LABEL_DATA"), r = S(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": t.value.layout === "horizontal",
      "s-form__item--vertical": t.value.layout === "vertical"
    })), a = S(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": t.value.layout === "vertical",
      [`s-form__label--${t.value.labelAlign}`]: t.value.layout === "horizontal",
      [`s-form__label--${t.value.labelSize}`]: t.value.layout === "horizontal"
    })), i = k(Oe), o = T(!1), l = T(""), p = {
      validate: () => {
        if (!i)
          return console.warn("请在Form中使用FormItem"), Promise.reject("请在Form中使用FormItem");
        if (!n.prop)
          return console.warn("如果要校验当前项，请设置prop字段"), Promise.reject("如果要校验当前项，请设置prop字段");
        if (!i.rules)
          return Promise.resolve({
            result: !0
          });
        const d = i.rules[n.prop] || void 0;
        if (!d)
          return Promise.resolve({
            result: !0
          });
        const v = i.model[n.prop];
        return new U({
          [n.prop]: d
        }).validate({
          [n.prop]: v
        }, (P) => {
          P ? (o.value = !0, l.value = P[0].message || "校验错误") : (o.value = !1, l.value = "");
        });
      }
    };
    return B("FORM_ITEM_CTX", p), re(() => {
      n.prop && (i == null || i.addItem(p));
    }), Ae(() => {
      n.prop && (i == null || i.removeItem(p));
    }), () => {
      var d;
      return f("div", {
        class: r.value
      }, [f("span", {
        class: a.value
      }, [n.label]), f("div", null, [(d = e.default) == null ? void 0 : d.call(e)]), o.value && f("div", {
        class: "error-message"
      }, [l.value])]);
    };
  }
}), At = {
  install(n) {
    n.component(fe.name, fe), n.component(ye.name, ye);
  }
}, Dt = {
  modelValue: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  }
};
const be = E({
  name: "SInput",
  props: Dt,
  emits: ["update:modelValue"],
  setup(n, {
    emit: e
  }) {
    const t = k("FORM_ITEM_CTX"), r = (a) => {
      const i = a.target.value;
      e("update:modelValue", i), t.validate();
    };
    return () => f("div", {
      class: "s-input"
    }, [f("input", {
      class: "s-input__input",
      value: n.modelValue,
      onInput: r,
      type: n.type
    }, null)]);
  }
}), Ct = {
  install(n) {
    n.component(be.name, be);
  }
}, Vt = {
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
  }
};
const jt = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
const kt = E({
  name: "SBaseModal",
  props: jt,
  emits: ["update:modelValue"],
  setup(n, {
    slots: e,
    emit: t
  }) {
    const {
      modelValue: r
    } = D(n);
    return () => {
      var a;
      return f("div", null, [r.value && f("div", {
        class: "s-base-modal"
      }, [f("div", {
        class: "s-base-modal__mask",
        onClick: () => {
          t("update:modelValue", !1);
        }
      }, null), (a = e.default) == null ? void 0 : a.call(e)])]);
    };
  }
}), xe = E({
  name: "SModal",
  props: Vt,
  emits: ["update:modelValue"],
  setup(n, {
    slots: e,
    emit: t
  }) {
    const {
      modelValue: r,
      title: a,
      showClose: i,
      width: o,
      center: l,
      alignCenter: s
    } = D(n), p = s.value ? {
      marginTop: 0,
      top: "50%",
      transform: "translateY(-50%)"
    } : null;
    return () => f(kt, {
      class: "s-modal",
      modelValue: r.value,
      "onUpdate:modelValue": () => {
        t("update:modelValue");
      }
    }, {
      default: () => {
        var d, v, h;
        return [f("div", {
          class: "s-modal__container",
          style: {
            width: o.value,
            ...p
          }
        }, [e.header ? (d = e.header) == null ? void 0 : d.call(e, {
          close: () => {
            t("update:modelValue", !1);
          }
        }) : f("div", {
          class: "s-modal__header",
          style: {
            textAlign: l.value ? "center" : "left"
          }
        }, [a.value, i.value && f("svg", {
          onClick: () => {
            t("update:modelValue", !1);
          },
          class: "s-modal__close",
          viewBox: "0 0 1024 1024",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg"
        }, [f("path", {
          fill: "currentColor",
          d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
        }, null)])]), f("div", {
          className: "s-modal__body"
        }, [(v = e.default) == null ? void 0 : v.call(e)]), f("div", {
          className: "s-modal__footer"
        }, [(h = e.footer) == null ? void 0 : h.call(e)])])];
      }
    });
  }
}), Bt = {
  install(n) {
    n.component(xe.name, xe);
  }
}, Rt = {
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
window._iconfont_svg_string_1281272 = '<svg><symbol id="icon-angular" viewBox="0 0 1024 1024"><path d="M512 125.952L139.552 261.376 206.4 762.88 512 932.64l305.6-169.824 66.848-501.44L512 125.952z m0 68.096l302.176 109.888-55.808 418.56L512 859.36l-246.4-136.864-55.776-418.56L512 194.048zM512 256l-192 448h64l41.28-96h173.44L640 704h64L512 256z m0 145.6l0.64 1.92 22.4 56L571.2 544h-118.4l36.16-84.48 22.4-56 0.64-1.92z"  ></path></symbol><symbol id="icon-react" viewBox="0 0 1024 1024"><path d="M836.8 353.6c-11.2-3.2-20.8-6.4-32-9.6 1.6-8 3.2-14.4 4.8-22.4 24-118.4 8-214.4-46.4-246.4-52.8-30.4-139.2 1.6-225.6 76.8-8 8-17.6 14.4-25.6 22.4-4.8-4.8-11.2-9.6-16-16-91.2-81.6-182.4-115.2-236.8-83.2-52.8 30.4-68.8 120-46.4 233.6 1.6 11.2 4.8 22.4 8 33.6-12.8 3.2-25.6 8-36.8 11.2C76.8 392 0 451.2 0 510.4c0 62.4 81.6 124.8 192 163.2 9.6 3.2 17.6 6.4 27.2 8-3.2 12.8-6.4 24-8 36.8-20.8 110.4-4.8 198.4 48 228.8 54.4 32 145.6 0 233.6-78.4 6.4-6.4 14.4-12.8 20.8-19.2 8 8 17.6 16 27.2 24 84.8 73.6 169.6 104 222.4 73.6 54.4-32 72-126.4 48-241.6-1.6-8-3.2-17.6-6.4-27.2 6.4-1.6 12.8-3.2 19.2-6.4C940.8 636.8 1024 574.4 1024 510.4c0-59.2-78.4-118.4-187.2-156.8zM566.4 184c75.2-65.6 144-89.6 176-72 33.6 19.2 46.4 97.6 25.6 201.6-1.6 6.4-3.2 12.8-4.8 20.8-44.8-9.6-89.6-17.6-134.4-20.8-25.6-36.8-54.4-73.6-84.8-105.6 6.4-9.6 14.4-16 22.4-24zM334.4 614.4c9.6 17.6 20.8 35.2 32 51.2-32-3.2-62.4-8-92.8-14.4 8-28.8 19.2-59.2 32-89.6 9.6 19.2 19.2 36.8 28.8 52.8z m-60.8-240c28.8-6.4 59.2-11.2 91.2-16-11.2 16-20.8 33.6-30.4 51.2-9.6 17.6-19.2 33.6-28.8 52.8-12.8-30.4-22.4-59.2-32-88z m54.4 137.6c12.8-27.2 27.2-54.4 43.2-81.6s32-52.8 48-78.4c30.4-1.6 60.8-3.2 91.2-3.2s62.4 1.6 91.2 3.2c17.6 25.6 33.6 51.2 48 76.8s30.4 52.8 43.2 81.6c-12.8 27.2-27.2 54.4-43.2 81.6-16 27.2-32 52.8-48 78.4-30.4 1.6-60.8 3.2-92.8 3.2s-62.4-1.6-91.2-3.2C400 644.8 384 619.2 368 592s-25.6-52.8-40-80z m361.6 102.4l28.8-52.8c12.8 28.8 24 59.2 33.6 88-30.4 6.4-62.4 12.8-94.4 16 11.2-16 22.4-33.6 32-51.2z m28.8-153.6l-28.8-52.8c-9.6-17.6-20.8-33.6-30.4-49.6 32 4.8 62.4 9.6 91.2 16-8 30.4-19.2 59.2-32 86.4zM512 236.8c20.8 22.4 40 46.4 59.2 72-40-1.6-80-1.6-118.4 0 19.2-27.2 40-51.2 59.2-72zM280 113.6c33.6-19.2 108.8 8 187.2 78.4 4.8 4.8 9.6 9.6 16 14.4-30.4 33.6-59.2 68.8-86.4 105.6-44.8 4.8-89.6 11.2-134.4 20.8-3.2-9.6-4.8-20.8-6.4-30.4-19.2-97.6-6.4-169.6 24-188.8z m-48 528c-8-3.2-16-4.8-25.6-8-43.2-12.8-91.2-35.2-126.4-62.4-20.8-14.4-33.6-35.2-38.4-59.2 0-36.8 64-83.2 155.2-115.2 11.2-4.8 22.4-8 35.2-11.2 14.4 43.2 30.4 86.4 49.6 128-19.2 40-36.8 83.2-49.6 128zM464 836.8c-33.6 30.4-72 54.4-113.6 70.4-22.4 11.2-48 11.2-70.4 3.2-32-19.2-44.8-89.6-27.2-184 1.6-11.2 4.8-22.4 8-33.6 44.8 9.6 89.6 16 136 19.2 25.6 36.8 56 73.6 86.4 107.2-6.4 6.4-12.8 12.8-19.2 17.6z m49.6-48c-20.8-22.4-40-46.4-60.8-72 19.2 0 38.4 1.6 59.2 1.6 20.8 0 41.6 0 60.8-1.6-19.2 24-38.4 48-59.2 72zM774.4 848c-1.6 24-14.4 48-33.6 62.4-32 19.2-99.2-4.8-172.8-68.8-8-8-16-14.4-25.6-22.4 30.4-33.6 59.2-68.8 84.8-107.2 46.4-3.2 91.2-11.2 136-20.8l4.8 24c11.2 43.2 12.8 89.6 6.4 132.8z m36.8-214.4c-4.8 1.6-11.2 3.2-17.6 4.8-14.4-43.2-32-86.4-51.2-128 19.2-40 35.2-83.2 49.6-126.4 11.2 3.2 20.8 6.4 30.4 9.6 92.8 32 158.4 80 158.4 116.8 0 40-68.8 89.6-169.6 123.2zM512 603.2c51.2 0 91.2-41.6 91.2-91.2s-41.6-91.2-91.2-91.2-91.2 41.6-91.2 91.2 40 91.2 91.2 91.2z"  ></path></symbol><symbol id="icon-vuejs" viewBox="0 0 1024 1024"><path d="M777.8 128.6H624l-112 177.2-96-177.2H64L512 896 960 128.6h-182.2z m-602.4 64h107.6L512 589 740.8 192.6h107.6L512 769 175.4 192.6z"  ></path></symbol></svg>', function(n) {
  var t = (t = document.getElementsByTagName("script"))[t.length - 1], e = t.getAttribute("data-injectcss"), t = t.getAttribute("data-disable-injectsvg");
  if (!t) {
    var r, a, i, o, l, s = function(v, h) {
      h.parentNode.insertBefore(v, h);
    };
    if (e && !n.__iconfont__svg__cssinject__) {
      n.__iconfont__svg__cssinject__ = !0;
      try {
        document.write(
          "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
        );
      } catch (v) {
        console && console.log(v);
      }
    }
    r = function() {
      var v, h = document.createElement("div");
      h.innerHTML = n._iconfont_svg_string_1281272, (h = h.getElementsByTagName("svg")[0]) && (h.setAttribute("aria-hidden", "true"), h.style.position = "absolute", h.style.width = 0, h.style.height = 0, h.style.overflow = "hidden", h = h, (v = document.body).firstChild ? s(h, v.firstChild) : v.appendChild(h));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(r, 0) : (a = function() {
      document.removeEventListener("DOMContentLoaded", a, !1), r();
    }, document.addEventListener("DOMContentLoaded", a, !1)) : document.attachEvent && (i = r, o = n.document, l = !1, d(), o.onreadystatechange = function() {
      o.readyState == "complete" && (o.onreadystatechange = null, p());
    });
  }
  function p() {
    l || (l = !0, i());
  }
  function d() {
    try {
      o.documentElement.doScroll("left");
    } catch {
      return void setTimeout(d, 50);
    }
    p();
  }
}(window);
const we = E({
  name: "SIcon",
  props: Rt,
  setup(n, {
    attrs: e
  }) {
    const t = S(() => typeof n.size == "number" ? `${n.size}px` : n.size), r = f("img", W({
      src: n.name,
      style: {
        width: t.value,
        verticalAlign: "middle"
      }
    }, e), null), a = f("span", {
      class: [n.prefix, n.prefix + "-" + n.name],
      style: {
        fontSize: t.value,
        color: n.color
      }
    }, null), i = f("svg", {
      style: {
        width: t.value,
        height: t.value
      }
    }, [f("use", {
      "xlink:href": `#${n.prefix}-${n.component}`,
      fill: n.color
    }, null)]), o = n.component ? i : /http|https/.test(n.name) ? r : a;
    return () => o;
  }
}), $t = (n) => {
  const e = n.size ? typeof n.size == "number" ? `${n.size}px` : n.size : void 0, t = n.color ? n.color : "black";
  return f("svg", {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-arrow-down",
    style: {
      width: e,
      height: e,
      fill: t,
      stroke: t
    }
  }, [f("path", {
    d: "m11.27 27.728 12.727 12.728 12.728-12.728M24 5v34.295"
  }, null)]);
}, Ht = {
  install(n) {
    n.component(we.name, we), n.component("ArrowDownIcon", $t);
  }
}, Ut = {
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
const _e = E({
  name: "STabs",
  props: Ut,
  emits: ["update:modelValue"],
  setup(n, {
    slots: e
  }) {
    const t = T([]);
    B("active-data", t);
    const r = T(n.modelValue);
    B("active-tab", r);
    const a = (l) => {
      r.value = l;
    }, i = (l) => {
      const s = t.value.findIndex((p) => p.id === l);
      t.value.splice(s, 1);
    }, o = () => {
      const l = Ie();
      t.value.push({
        id: l,
        type: "random",
        title: `Tab ${l}`,
        content: `Tab ${l} Content`
      }), r.value = l;
    };
    return () => {
      var l;
      return f("div", {
        class: "s-tabs"
      }, [f("ul", {
        class: "s-tabs__nav"
      }, [t.value.map((s) => f("li", {
        onClick: () => a(s.id),
        class: s.id === r.value ? "active" : ""
      }, [s.title, n.closable && f("svg", {
        onClick: () => i(s.id),
        style: "margin-left: 8px;",
        viewBox: "0 0 1024 1024",
        width: "12",
        height: "12"
      }, [f("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])])), n.addable && f("li", null, [f("svg", {
        onClick: o,
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14"
      }, [f("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)])])]), (l = e.default) == null ? void 0 : l.call(e), t.value.filter((s) => s.type === "random").map((s) => f("div", {
        class: "s-tab"
      }, [s.id === r.value ? s.content : ""]))]);
    };
  }
}), Yt = {
  id: {
    type: String,
    required: !0
  },
  title: {
    type: String,
    required: !0
  }
};
const Pe = E({
  name: "STab",
  props: Yt,
  setup(n, {
    slots: e
  }) {
    const t = k("active-tab");
    return k("active-data").value.push({
      id: n.id,
      title: n.title
    }), () => {
      var a;
      return f(De, null, [n.id === t.value && f("div", {
        class: "s-tab"
      }, [(a = e.default) == null ? void 0 : a.call(e)])]);
    };
  }
}), Jt = {
  install(n) {
    n.component(_e.name, _e), n.component(Pe.name, Pe);
  }
}, Wt = [
  Ve,
  Xe,
  tt,
  At,
  Ct,
  Bt,
  Ht,
  Jt
], Gt = {
  version: "0.0.1",
  install(n) {
    Wt.forEach((e) => n.use(e));
  }
};
export {
  le as Button,
  fe as Form,
  we as Icon,
  be as Input,
  xe as Modal,
  ue as Pagination,
  Pe as Tab,
  _e as Tabs,
  ce as Tree,
  Gt as default
};
