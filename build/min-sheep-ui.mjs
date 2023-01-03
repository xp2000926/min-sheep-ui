import { defineComponent as S, toRefs as L, createVNode as m, computed as T, reactive as Oe, ref as E, unref as Ie, inject as Y, mergeProps as ne, withDirectives as Ee, vModelCheckbox as Te, onMounted as re, provide as J, createTextVNode as k, watch as oe, onUnmounted as Se } from "vue";
const Ae = {
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
const se = S({
  name: "SButton",
  props: Ae,
  setup(n, {
    slots: e
  }) {
    const {
      type: t,
      size: r,
      disabled: a,
      block: i
    } = L(n), o = i.value ? "s-btn--block" : "";
    return () => m("button", {
      disabled: a.value,
      class: `s-btn s-btn--${t.value} s-btn--${r.value} ${o}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), De = {
  install(n) {
    n.component(se.name, se);
  }
};
function ae(n, e = 0, t = []) {
  return e++, n.reduce((r, a) => {
    const i = { ...a };
    i.level = e, t.length > 0 && t[t.length - 1].level >= e && t.pop(), t.push(i);
    const o = t[t.length - 2];
    if (o && (i.parentId = o.id), i.children) {
      const s = ae(i.children, e, t);
      return delete i.children, r.concat(i, s);
    } else
      return i.isLeaf === void 0 && (i.isLeaf = !0), r.concat(i);
  }, []);
}
function je(n, { getChildren: e }) {
  return {
    toggleCheckNode: (r) => {
      r.checked = !r.checked, e(r).forEach((s) => {
        s.checked = r.checked;
      });
      const a = n.value.find((s) => s.id === r.parentId);
      if (!a)
        return;
      const i = e(a, !1), o = i.filter((s) => s.checked);
      o.length === i.length ? a.checked = !0 : o.length === 0 && (a.checked = !1);
    }
  };
}
function Ve(n) {
  const e = T(() => {
    let s = [];
    const l = [];
    for (const c of n.value)
      s.map((u) => u.id).includes(c.id) || (c.expanded !== !0 && (s = t(c)), l.push(c));
    return l;
  }), t = (s, l = !0) => {
    const c = [], u = n.value.findIndex((v) => v.id === s.id);
    for (let v = u + 1; v < n.value.length && s.level < n.value[v].level; v++)
      (l || s.level === n.value[v].level - 1) && c.push(n.value[v]);
    return c;
  }, r = (s, l = []) => {
    const c = t(s, !1);
    return l.push(...c), c.forEach((u) => {
      u.expanded && r(u, l);
    }), l;
  };
  return {
    expandedTree: e,
    getChildren: t,
    getChildrenExpanded: r,
    getIndex: (s) => s ? n.value.findIndex((l) => l.id === s.id) : -1,
    getNode: (s) => n.value.find((l) => l.id === s.id),
    getParent: (s) => n.value.find((l) => l.id === s.parentId)
  };
}
const W = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function Le(n, e, { getChildren: t, getParent: r }) {
  const a = Oe({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), i = T(
    () => e.value.reduce(
      (f, p) => ({
        ...f,
        [p.id]: p
      }),
      {}
    )
  ), o = (f) => {
    f == null || f.classList.remove(...Object.values(W));
  }, s = (f, p) => {
    var x;
    const d = (x = i.value[f]) == null ? void 0 : x.parentId;
    return d === p ? !0 : d !== void 0 ? s(d, p) : !1;
  }, l = () => {
    a.dropType = void 0, a.draggingNode = null, a.draggingTreeNode = null;
  }, c = (f, p) => {
    var d;
    f.stopPropagation(), a.draggingNode = f.target, a.draggingTreeNode = p, (d = f.dataTransfer) == null || d.setData("dragNodeId", p.id);
  }, u = (f) => {
    if (f.preventDefault(), f.stopPropagation(), !!a.draggingNode && n) {
      if (f.dataTransfer && (f.dataTransfer.dropEffect = "move"), !e)
        return;
      let p = {};
      typeof n == "object" ? p = n : n === !0 && (p = { dropInner: !0 });
      const { dropPrev: d, dropNext: x, dropInner: g } = p;
      let h;
      const w = d ? g ? 0.25 : x ? 0.45 : 1 : -1, P = x ? g ? 0.75 : d ? 0.55 : 0 : 1, N = f.currentTarget, q = N == null ? void 0 : N.getBoundingClientRect(), j = f.clientY - ((q == null ? void 0 : q.top) || 0);
      if (j < ((q == null ? void 0 : q.height) || 0) * w ? h = "dropPrev" : j > ((q == null ? void 0 : q.height) || 0) * P ? h = "dropNext" : g ? h = "dropInner" : h = void 0, h) {
        const M = N == null ? void 0 : N.classList;
        M && (M.contains(W[h]) || (o(N), M.add(W[h])));
      } else
        o(N);
      a.dropType = h;
    }
  }, v = (f) => {
    f.stopPropagation(), a.draggingNode && o(f.currentTarget);
  }, y = (f, p) => {
    var x;
    if (f.preventDefault(), f.stopPropagation(), o(f.currentTarget), !a.draggingNode || !n)
      return;
    const d = (x = f.dataTransfer) == null ? void 0 : x.getData("dragNodeId");
    if (d) {
      const g = s(p.id, d);
      if (d === p.id || g)
        return;
      a.dropType && _(d, p), l();
    }
  };
  function _(f, p) {
    const d = e.value.find((x) => x.id === f);
    if (d) {
      let x;
      const g = t(d), h = r(d);
      if (a.dropType === "dropInner") {
        x = {
          ...d,
          parentId: p.id,
          level: p.level + 1
        };
        const w = e.value.indexOf(p);
        e.value.splice(w + 1, 0, x), p.isLeaf = void 0;
        const P = e.value.indexOf(d);
        e.value.splice(P, 1);
      } else if (a.dropType === "dropNext") {
        x = {
          ...d,
          parentId: p.parentId,
          level: p.level
        };
        const w = e.value.indexOf(p), P = t(p, !0).length;
        e.value.splice(
          w + P + 1,
          0,
          x
        );
        const N = e.value.indexOf(d);
        e.value.splice(N, 1);
      } else if (a.dropType === "dropPrev") {
        x = {
          ...d,
          parentId: p.parentId,
          level: p.level
        };
        const w = e.value.indexOf(p);
        e.value.splice(w, 0, x);
        const P = e.value.indexOf(d);
        e.value.splice(P, 1);
      }
      a.dropType = "dropInner", g.forEach((w) => _(w.id, x)), h && t(h).length === 0 && (h.isLeaf = !0);
    }
  }
  return {
    onDragstart: c,
    onDragover: u,
    onDragleave: v,
    onDrop: y,
    onDragend: (f) => {
      f.preventDefault(), f.stopPropagation(), l();
    }
  };
}
function Me(n, { getNode: e, getIndex: t, getChildren: r }, { emit: a }) {
  const i = (c) => {
    const u = e(c);
    u && u.isLeaf === !1 && !u.childNodeCount && (u.loading = !0, a("lazy-load", c, o));
  }, o = (c) => {
    const u = e(c.node);
    if (u) {
      u.loading = !1;
      const v = E(
        ae(c.treeItems, u.level)
      );
      s(u, v), l(u, v);
      const y = r(u);
      u.childNodeCount = y.length;
    }
  }, s = (c, u) => {
    u.value.forEach((v) => {
      v.level - 1 === c.level && !v.parentId && (v.parentId = c.id);
    });
  }, l = (c, u) => {
    const v = t(c);
    v && n.value.splice(v + 1, 0, ...u.value);
  };
  return {
    lazyLoadNodes: i
  };
}
function Ce(n = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let t = "";
  for (let r = 0; r < n; r++)
    t += e[parseInt((Math.random() * e.length).toString())];
  return t;
}
function ke(n, { getChildren: e, getIndex: t }) {
  return {
    append: (i, o) => {
      const s = e(i, !1), l = s[s.length - 1];
      let c = t(i) + 1;
      l && (c = t(l) + 1), i.expanded = !0, i.isLeaf = !1;
      const u = E({
        ...o,
        level: i.level + 1,
        parentId: i.id,
        isLeaf: !0
      });
      u.value.id === void 0 && (u.value.id = Ce()), n.value.splice(c, 0, u.value);
    },
    remove: (i) => {
      const o = e(i).map((s) => s.id);
      n.value = n.value.filter(
        (s) => s.id !== i.id && !o.includes(s.id)
      );
    }
  };
}
function Re(n, e, t, r) {
  const { lazyLoadNodes: a } = r;
  return {
    toggleNode: (o) => {
      const s = n.value.find((l) => l.id === o.id);
      s && (s.expanded = !s.expanded, s.expanded && a(s));
    }
  };
}
function Be(n, e, t) {
  const r = Ie(n), a = E(ae(r)), i = Ve(a), o = [Re, je, ke], s = Me(a, i, t), l = Le(e.draggable, a, i);
  return {
    ...o.reduce((u, v) => ({ ...u, ...v(a, i, t, s) }), {}),
    ...i,
    ...l,
    treeData: a
  };
}
const we = {
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
}, ze = {
  ...we,
  treeNode: {
    type: Object,
    required: !0
  }
}, le = 32, ue = 24, $e = S({
  name: "STreeNode",
  props: ze,
  setup(n, {
    slots: e
  }) {
    const {
      lineable: t,
      checkable: r,
      treeNode: a,
      operable: i,
      draggable: o
    } = L(n), {
      toggleCheckNode: s,
      getChildrenExpanded: l,
      append: c,
      remove: u,
      onDragend: v,
      onDragleave: y,
      onDragover: _,
      onDragstart: O,
      onDrop: f
    } = Y("TREE_UTILS"), p = E(!1), d = () => {
      p.value ? p.value = !1 : p.value = !0;
    };
    let x = {};
    return o.value && (x = {
      draggable: !0,
      onDragend: (g) => v(g),
      onDragleave: (g) => y(g),
      onDragover: (g) => _(g),
      onDragstart: (g) => O(g, a.value),
      onDrop: (g) => f(g, a.value)
    }), () => {
      var g, h, w;
      return m("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${ue * (a.value.level - 1)}px`
        },
        onMouseenter: d,
        onMouseleave: d
      }, [!a.value.isLeaf && a.value.expanded && t.value && m("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${le * l(a.value).length}px`,
          left: `${ue * (a.value.level - 1) + 9}px`,
          top: `${le}px`
        }
      }, null), m("div", ne({
        class: "s-tree__node--content"
      }, x), [a.value.isLeaf ? m("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (g = e.icon) == null ? void 0 : g.call(e), r.value && Ee(m("input", {
        type: "checkbox",
        "onUpdate:modelValue": (P) => a.value.checked = P,
        onClick: () => {
          s(a.value);
        }
      }, null), [[Te, a.value.checked]]), (h = e.content) == null ? void 0 : h.call(e), i.value && p.value && m("span", {
        class: "inline-flex ml-1"
      }, [m("svg", {
        onClick: () => {
          c(a.value, {
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
          u(a.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [m("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), a.value.loading && ((w = e.loading) == null ? void 0 : w.call(e))])]);
    };
  }
}), He = (n, {
  emit: e
}) => m("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: n.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [m("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const Ue = {
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
const Ye = S({
  name: "SVirtualList",
  props: Ue,
  setup(n, {
    slots: e
  }) {
    const {
      data: t,
      itemHeight: r,
      component: a
    } = L(n), i = E(), o = E(0), s = E(0), l = E(0), c = T(() => Math.ceil(o.value / r.value)), u = T(() => t.value.slice(l.value, Math.min(l.value + c.value, t.value.length)));
    re(() => {
      var y;
      o.value = (y = i.value) == null ? void 0 : y.clientHeight;
    });
    const v = (y) => {
      const {
        scrollTop: _
      } = y.target;
      l.value = Math.floor(_ / r.value), s.value = _ - _ % r.value;
    };
    return () => m(a.value, {
      class: "s-virtual-list__container",
      ref: i,
      onScroll: v
    }, {
      default: () => [m("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${t.value.length * r.value}px`
        }
      }, null), m("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${s.value}px, 0)`
        }
      }, [u.value.map((y, _) => {
        var O;
        return (O = e.default) == null ? void 0 : O.call(e, {
          item: y,
          index: _
        });
      })])]
    });
  }
}), de = S({
  name: "STree",
  props: we,
  emits: ["lazy-load"],
  setup(n, e) {
    const {
      data: t,
      height: r,
      itemHeight: a
    } = L(n), {
      slots: i
    } = e, o = Be(t, n, e);
    return J("TREE_UTILS", o), () => {
      const s = (l) => m($e, ne(n, {
        treeNode: l
      }), {
        content: () => i.content ? i.content(l) : l.label,
        icon: () => i.icon ? i.icon({
          nodeData: l,
          toggleNode: o.toggleNode
        }) : m(He, {
          expanded: !!l.expanded,
          onClick: () => o.toggleNode(l)
        }, null),
        loading: () => i.loading ? i.loading({
          nodeData: o
        }) : m("span", {
          class: "ml-1"
        }, [k("loading...")])
      });
      return m("div", {
        class: "s-tree"
      }, [r != null && r.value ? m("div", {
        style: {
          height: `${r.value}px`
        }
      }, [m(Ye, {
        data: o.expandedTree.value,
        itemHeight: a.value
      }, {
        default: ({
          item: l
        }) => s(l)
      })]) : o.expandedTree.value.map((l) => s(l))]);
    };
  }
}), Je = {
  install(n) {
    n.component(de.name, de);
  }
}, Pe = {
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
function We(n = 1) {
  const e = E(n), t = (o) => {
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
const Ze = (n, e, t) => {
  const r = Array.from(Array(n).keys());
  if (n <= t)
    return r.slice(2, n);
  {
    const a = Math.ceil(t / 2);
    return e <= a ? r.slice(2, t) : e >= n - a + 1 ? r.slice(n - t + 2, n) : r.slice(e - a + 2, e + a - 1);
  }
}, Ge = Pe, G = S({
  name: "SPager",
  props: Ge,
  setup(n) {
    const {
      total: e,
      pageSize: t,
      pagerCount: r
    } = L(n), a = T(() => Math.ceil(e.value / t.value)), {
      pageIndex: i,
      setPageIndex: o,
      jumpPage: s,
      prevPage: l,
      nextPage: c
    } = We(), u = T(() => Ze(a.value, i.value, r.value));
    return {
      totalPage: a,
      pageIndex: i,
      setPageIndex: o,
      jumpPage: s,
      prevPage: l,
      nextPage: c,
      centerPages: u
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
    return m("ul", {
      class: "s-pager"
    }, [m("li", {
      onClick: () => r(1),
      class: {
        current: t === 1
      }
    }, [k("1")]), e > n && t > Math.ceil(n / 2) && m("li", {
      class: "more left",
      onClick: () => a(-5)
    }, [k("...")]), i.map((o) => m("li", {
      onClick: () => r(o),
      class: {
        current: t === o
      }
    }, [o])), e > n && t < e - Math.ceil(n / 2) + 1 && m("li", {
      class: "more right",
      onClick: () => a(5)
    }, [k("...")]), e > 1 && m("li", {
      onClick: () => r(e),
      class: {
        current: t === e
      }
    }, [e])]);
  }
}), fe = S({
  name: "SPagination",
  props: Pe,
  emits: ["update:modelValue"],
  setup(n, {
    emit: e
  }) {
    const t = E(), r = T(() => t.value ? t.value.pageIndex < 2 : !0), a = T(() => t.value ? t.value.pageIndex > t.value.totalPage - 1 : !0);
    return re(() => {
      oe(() => t.value.pageIndex, (i) => {
        e("update:modelValue", i);
      }), oe(() => n.modelValue, (i) => {
        t.value.pageIndex = i;
      });
    }), () => m("div", {
      class: "s-pagination"
    }, [m("button", {
      disabled: r.value,
      onClick: () => t.value.prevPage()
    }, [k("上一页")]), m(G, ne(n, {
      ref: t
    }), null), m("button", {
      disabled: a.value,
      onClick: () => t.value.nextPage()
    }, [k("下一页")])]);
  }
}), Xe = {
  install(n) {
    n.component(fe.name, fe), n.component(G.name, G);
  }
}, _e = Symbol("formContextToken"), Ke = {
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
const ce = S({
  name: "SForm",
  props: Ke,
  emits: ["submit"],
  setup(n, {
    slots: e,
    emit: t,
    expose: r
  }) {
    const a = T(() => ({
      layout: n.layout,
      labelSize: n.labelSize,
      labelAlign: n.labelAlign
    }));
    J("LABEL_DATA", a);
    const i = /* @__PURE__ */ new Set(), o = (u) => i.add(u), s = (u) => i.delete(u);
    J(_e, {
      model: n.model,
      rules: n.rules,
      addItem: o,
      removeItem: s
    });
    const l = (u) => {
      u.preventDefault(), t("submit");
    };
    return r({
      validate: (u) => {
        const v = [];
        i.forEach((y) => v.push(y.validate())), Promise.all(v).then(() => u(!0)).catch(() => u(!1));
      }
    }), () => {
      var u;
      return m("form", {
        class: "s-form",
        onSubmit: l
      }, [(u = e.default) == null ? void 0 : u.call(e)]);
    };
  }
}), Qe = {
  label: {
    type: String
  },
  prop: {
    type: String
  }
};
function V() {
  return V = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, V.apply(this, arguments);
}
function et(n, e) {
  n.prototype = Object.create(e.prototype), n.prototype.constructor = n, z(n, e);
}
function X(n) {
  return X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, X(n);
}
function z(n, e) {
  return z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, z(n, e);
}
function tt() {
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
function U(n, e, t) {
  return tt() ? U = Reflect.construct.bind() : U = function(a, i, o) {
    var s = [null];
    s.push.apply(s, i);
    var l = Function.bind.apply(a, s), c = new l();
    return o && z(c, o.prototype), c;
  }, U.apply(null, arguments);
}
function nt(n) {
  return Function.toString.call(n).indexOf("[native code]") !== -1;
}
function K(n) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return K = function(r) {
    if (r === null || !nt(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, a);
    }
    function a() {
      return U(r, arguments, X(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), z(a, r);
  }, K(n);
}
var rt = /%[sdj%]/g, qe = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (qe = function(e, t) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && t.every(function(r) {
    return typeof r == "string";
  }) && console.warn(e, t);
});
function Q(n) {
  if (!n || !n.length)
    return null;
  var e = {};
  return n.forEach(function(t) {
    var r = t.field;
    e[r] = e[r] || [], e[r].push(t);
  }), e;
}
function I(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    t[r - 1] = arguments[r];
  var a = 0, i = t.length;
  if (typeof n == "function")
    return n.apply(null, t);
  if (typeof n == "string") {
    var o = n.replace(rt, function(s) {
      if (s === "%%")
        return "%";
      if (a >= i)
        return s;
      switch (s) {
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
          return s;
      }
    });
    return o;
  }
  return n;
}
function at(n) {
  return n === "string" || n === "url" || n === "hex" || n === "email" || n === "date" || n === "pattern";
}
function F(n, e) {
  return !!(n == null || e === "array" && Array.isArray(n) && !n.length || at(e) && typeof n == "string" && !n);
}
function it(n, e, t) {
  var r = [], a = 0, i = n.length;
  function o(s) {
    r.push.apply(r, s || []), a++, a === i && t(r);
  }
  n.forEach(function(s) {
    e(s, o);
  });
}
function pe(n, e, t) {
  var r = 0, a = n.length;
  function i(o) {
    if (o && o.length) {
      t(o);
      return;
    }
    var s = r;
    r = r + 1, s < a ? e(n[s], i) : t([]);
  }
  i([]);
}
function ot(n) {
  var e = [];
  return Object.keys(n).forEach(function(t) {
    e.push.apply(e, n[t] || []);
  }), e;
}
var ge = /* @__PURE__ */ function(n) {
  et(e, n);
  function e(t, r) {
    var a;
    return a = n.call(this, "Async Validation Error") || this, a.errors = t, a.fields = r, a;
  }
  return e;
}(/* @__PURE__ */ K(Error));
function st(n, e, t, r, a) {
  if (e.first) {
    var i = new Promise(function(y, _) {
      var O = function(d) {
        return r(d), d.length ? _(new ge(d, Q(d))) : y(a);
      }, f = ot(n);
      pe(f, t, O);
    });
    return i.catch(function(y) {
      return y;
    }), i;
  }
  var o = e.firstFields === !0 ? Object.keys(n) : e.firstFields || [], s = Object.keys(n), l = s.length, c = 0, u = [], v = new Promise(function(y, _) {
    var O = function(p) {
      if (u.push.apply(u, p), c++, c === l)
        return r(u), u.length ? _(new ge(u, Q(u))) : y(a);
    };
    s.length || (r(u), y(a)), s.forEach(function(f) {
      var p = n[f];
      o.indexOf(f) !== -1 ? pe(p, t, O) : it(p, t, O);
    });
  });
  return v.catch(function(y) {
    return y;
  }), v;
}
function lt(n) {
  return !!(n && n.message !== void 0);
}
function ut(n, e) {
  for (var t = n, r = 0; r < e.length; r++) {
    if (t == null)
      return t;
    t = t[e[r]];
  }
  return t;
}
function ve(n, e) {
  return function(t) {
    var r;
    return n.fullFields ? r = ut(e, n.fullFields) : r = e[t.field || n.fullField], lt(t) ? (t.field = t.field || n.fullField, t.fieldValue = r, t) : {
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
        typeof r == "object" && typeof n[t] == "object" ? n[t] = V({}, n[t], r) : n[t] = r;
      }
  }
  return n;
}
var Fe = function(e, t, r, a, i, o) {
  e.required && (!r.hasOwnProperty(e.field) || F(t, o || e.type)) && a.push(I(i.messages.required, e.fullField));
}, dt = function(e, t, r, a, i) {
  (/^\s+$/.test(t) || t === "") && a.push(I(i.messages.whitespace, e.fullField));
}, H, ft = function() {
  if (H)
    return H;
  var n = "[a-fA-F\\d:]", e = function(h) {
    return h && h.includeBoundaries ? "(?:(?<=\\s|^)(?=" + n + ")|(?<=" + n + ")(?=\\s|$))" : "";
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + t + "$)|(?:^" + a + "$)"), o = new RegExp("^" + t + "$"), s = new RegExp("^" + a + "$"), l = function(h) {
    return h && h.exact ? i : new RegExp("(?:" + e(h) + t + e(h) + ")|(?:" + e(h) + a + e(h) + ")", "g");
  };
  l.v4 = function(g) {
    return g && g.exact ? o : new RegExp("" + e(g) + t + e(g), "g");
  }, l.v6 = function(g) {
    return g && g.exact ? s : new RegExp("" + e(g) + a + e(g), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", u = "(?:\\S+(?::\\S*)?@)?", v = l.v4().source, y = l.v6().source, _ = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", O = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", f = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", p = "(?::\\d{2,5})?", d = '(?:[/?#][^\\s"]*)?', x = "(?:" + c + "|www\\.)" + u + "(?:localhost|" + v + "|" + y + "|" + _ + O + f + ")" + p + d;
  return H = new RegExp("(?:^" + x + "$)", "i"), H;
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
    return typeof e == "string" && e.length <= 2048 && !!e.match(ft());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(he.hex);
  }
}, ct = function(e, t, r, a, i) {
  if (e.required && t === void 0) {
    Fe(e, t, r, a, i);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = e.type;
  o.indexOf(s) > -1 ? R[s](t) || a.push(I(i.messages.types[s], e.fullField, e.type)) : s && typeof t !== e.type && a.push(I(i.messages.types[s], e.fullField, e.type));
}, pt = function(e, t, r, a, i) {
  var o = typeof e.len == "number", s = typeof e.min == "number", l = typeof e.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = t, v = null, y = typeof t == "number", _ = typeof t == "string", O = Array.isArray(t);
  if (y ? v = "number" : _ ? v = "string" : O && (v = "array"), !v)
    return !1;
  O && (u = t.length), _ && (u = t.replace(c, "_").length), o ? u !== e.len && a.push(I(i.messages[v].len, e.fullField, e.len)) : s && !l && u < e.min ? a.push(I(i.messages[v].min, e.fullField, e.min)) : l && !s && u > e.max ? a.push(I(i.messages[v].max, e.fullField, e.max)) : s && l && (u < e.min || u > e.max) && a.push(I(i.messages[v].range, e.fullField, e.min, e.max));
}, C = "enum", gt = function(e, t, r, a, i) {
  e[C] = Array.isArray(e[C]) ? e[C] : [], e[C].indexOf(t) === -1 && a.push(I(i.messages[C], e.fullField, e[C].join(", ")));
}, vt = function(e, t, r, a, i) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(t) || a.push(I(i.messages.pattern.mismatch, e.fullField, t, e.pattern));
    else if (typeof e.pattern == "string") {
      var o = new RegExp(e.pattern);
      o.test(t) || a.push(I(i.messages.pattern.mismatch, e.fullField, t, e.pattern));
    }
  }
}, b = {
  required: Fe,
  whitespace: dt,
  type: ct,
  range: pt,
  enum: gt,
  pattern: vt
}, mt = function(e, t, r, a, i) {
  var o = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (F(t, "string") && !e.required)
      return r();
    b.required(e, t, a, o, i, "string"), F(t, "string") || (b.type(e, t, a, o, i), b.range(e, t, a, o, i), b.pattern(e, t, a, o, i), e.whitespace === !0 && b.whitespace(e, t, a, o, i));
  }
  r(o);
}, ht = function(e, t, r, a, i) {
  var o = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (F(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), t !== void 0 && b.type(e, t, a, o, i);
  }
  r(o);
}, yt = function(e, t, r, a, i) {
  var o = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (t === "" && (t = void 0), F(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), t !== void 0 && (b.type(e, t, a, o, i), b.range(e, t, a, o, i));
  }
  r(o);
}, bt = function(e, t, r, a, i) {
  var o = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (F(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), t !== void 0 && b.type(e, t, a, o, i);
  }
  r(o);
}, xt = function(e, t, r, a, i) {
  var o = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (F(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), F(t) || b.type(e, t, a, o, i);
  }
  r(o);
}, wt = function(e, t, r, a, i) {
  var o = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (F(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), t !== void 0 && (b.type(e, t, a, o, i), b.range(e, t, a, o, i));
  }
  r(o);
}, Pt = function(e, t, r, a, i) {
  var o = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (F(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), t !== void 0 && (b.type(e, t, a, o, i), b.range(e, t, a, o, i));
  }
  r(o);
}, _t = function(e, t, r, a, i) {
  var o = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (t == null && !e.required)
      return r();
    b.required(e, t, a, o, i, "array"), t != null && (b.type(e, t, a, o, i), b.range(e, t, a, o, i));
  }
  r(o);
}, qt = function(e, t, r, a, i) {
  var o = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (F(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), t !== void 0 && b.type(e, t, a, o, i);
  }
  r(o);
}, Ft = "enum", Nt = function(e, t, r, a, i) {
  var o = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (F(t) && !e.required)
      return r();
    b.required(e, t, a, o, i), t !== void 0 && b[Ft](e, t, a, o, i);
  }
  r(o);
}, Ot = function(e, t, r, a, i) {
  var o = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (F(t, "string") && !e.required)
      return r();
    b.required(e, t, a, o, i), F(t, "string") || b.pattern(e, t, a, o, i);
  }
  r(o);
}, It = function(e, t, r, a, i) {
  var o = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (F(t, "date") && !e.required)
      return r();
    if (b.required(e, t, a, o, i), !F(t, "date")) {
      var l;
      t instanceof Date ? l = t : l = new Date(t), b.type(e, l, a, o, i), l && b.range(e, l.getTime(), a, o, i);
    }
  }
  r(o);
}, Et = function(e, t, r, a, i) {
  var o = [], s = Array.isArray(t) ? "array" : typeof t;
  b.required(e, t, a, o, i, s), r(o);
}, Z = function(e, t, r, a, i) {
  var o = e.type, s = [], l = e.required || !e.required && a.hasOwnProperty(e.field);
  if (l) {
    if (F(t, o) && !e.required)
      return r();
    b.required(e, t, a, s, i, o), F(t, o) || b.type(e, t, a, s, i);
  }
  r(s);
}, Tt = function(e, t, r, a, i) {
  var o = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (F(t) && !e.required)
      return r();
    b.required(e, t, a, o, i);
  }
  r(o);
}, B = {
  string: mt,
  method: ht,
  number: yt,
  boolean: bt,
  regexp: xt,
  integer: wt,
  float: Pt,
  array: _t,
  object: qt,
  enum: Nt,
  pattern: Ot,
  date: It,
  url: Z,
  hex: Z,
  email: Z,
  required: Et,
  any: Tt
};
function ee() {
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
var te = ee(), $ = /* @__PURE__ */ function() {
  function n(t) {
    this.rules = null, this._messages = te, this.define(t);
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
    return r && (this._messages = me(ee(), r)), this._messages;
  }, e.validate = function(r, a, i) {
    var o = this;
    a === void 0 && (a = {}), i === void 0 && (i = function() {
    });
    var s = r, l = a, c = i;
    if (typeof l == "function" && (c = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, s), Promise.resolve(s);
    function u(f) {
      var p = [], d = {};
      function x(h) {
        if (Array.isArray(h)) {
          var w;
          p = (w = p).concat.apply(w, h);
        } else
          p.push(h);
      }
      for (var g = 0; g < f.length; g++)
        x(f[g]);
      p.length ? (d = Q(p), c(p, d)) : c(null, s);
    }
    if (l.messages) {
      var v = this.messages();
      v === te && (v = ee()), me(v, l.messages), l.messages = v;
    } else
      l.messages = this.messages();
    var y = {}, _ = l.keys || Object.keys(this.rules);
    _.forEach(function(f) {
      var p = o.rules[f], d = s[f];
      p.forEach(function(x) {
        var g = x;
        typeof g.transform == "function" && (s === r && (s = V({}, s)), d = s[f] = g.transform(d)), typeof g == "function" ? g = {
          validator: g
        } : g = V({}, g), g.validator = o.getValidationMethod(g), g.validator && (g.field = f, g.fullField = g.fullField || f, g.type = o.getType(g), y[f] = y[f] || [], y[f].push({
          rule: g,
          value: d,
          source: s,
          field: f
        }));
      });
    });
    var O = {};
    return st(y, l, function(f, p) {
      var d = f.rule, x = (d.type === "object" || d.type === "array") && (typeof d.fields == "object" || typeof d.defaultField == "object");
      x = x && (d.required || !d.required && f.value), d.field = f.field;
      function g(P, N) {
        return V({}, N, {
          fullField: d.fullField + "." + P,
          fullFields: d.fullFields ? [].concat(d.fullFields, [P]) : [P]
        });
      }
      function h(P) {
        P === void 0 && (P = []);
        var N = Array.isArray(P) ? P : [P];
        !l.suppressWarning && N.length && n.warning("async-validator:", N), N.length && d.message !== void 0 && (N = [].concat(d.message));
        var q = N.map(ve(d, s));
        if (l.first && q.length)
          return O[d.field] = 1, p(q);
        if (!x)
          p(q);
        else {
          if (d.required && !f.value)
            return d.message !== void 0 ? q = [].concat(d.message).map(ve(d, s)) : l.error && (q = [l.error(d, I(l.messages.required, d.field))]), p(q);
          var j = {};
          d.defaultField && Object.keys(f.value).map(function(D) {
            j[D] = d.defaultField;
          }), j = V({}, j, f.rule.fields);
          var M = {};
          Object.keys(j).forEach(function(D) {
            var A = j[D], Ne = Array.isArray(A) ? A : [A];
            M[D] = Ne.map(g.bind(null, D));
          });
          var ie = new n(M);
          ie.messages(l.messages), f.rule.options && (f.rule.options.messages = l.messages, f.rule.options.error = l.error), ie.validate(f.value, f.rule.options || l, function(D) {
            var A = [];
            q && q.length && A.push.apply(A, q), D && D.length && A.push.apply(A, D), p(A.length ? A : null);
          });
        }
      }
      var w;
      if (d.asyncValidator)
        w = d.asyncValidator(d, f.value, h, f.source, l);
      else if (d.validator) {
        try {
          w = d.validator(d, f.value, h, f.source, l);
        } catch (P) {
          console.error == null || console.error(P), l.suppressValidatorError || setTimeout(function() {
            throw P;
          }, 0), h(P.message);
        }
        w === !0 ? h() : w === !1 ? h(typeof d.message == "function" ? d.message(d.fullField || d.field) : d.message || (d.fullField || d.field) + " fails") : w instanceof Array ? h(w) : w instanceof Error && h(w.message);
      }
      w && w.then && w.then(function() {
        return h();
      }, function(P) {
        return h(P);
      });
    }, function(f) {
      u(f);
    }, s);
  }, e.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !B.hasOwnProperty(r.type))
      throw new Error(I("Unknown rule type %s", r.type));
    return r.type || "string";
  }, e.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var a = Object.keys(r), i = a.indexOf("message");
    return i !== -1 && a.splice(i, 1), a.length === 1 && a[0] === "required" ? B.required : B[this.getType(r)] || void 0;
  }, n;
}();
$.register = function(e, t) {
  if (typeof t != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  B[e] = t;
};
$.warning = qe;
$.messages = te;
$.validators = B;
const ye = S({
  name: "SFormItem",
  props: Qe,
  setup(n, {
    slots: e
  }) {
    const t = Y("LABEL_DATA"), r = T(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": t.value.layout === "horizontal",
      "s-form__item--vertical": t.value.layout === "vertical"
    })), a = T(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": t.value.layout === "vertical",
      [`s-form__label--${t.value.labelAlign}`]: t.value.layout === "horizontal",
      [`s-form__label--${t.value.labelSize}`]: t.value.layout === "horizontal"
    })), i = Y(_e), o = E(!1), s = E(""), c = {
      validate: () => {
        if (!i)
          return console.warn("请在Form中使用FormItem"), Promise.reject("请在Form中使用FormItem");
        if (!n.prop)
          return console.warn("如果要校验当前项，请设置prop字段"), Promise.reject("如果要校验当前项，请设置prop字段");
        if (!i.rules)
          return Promise.resolve({
            result: !0
          });
        const u = i.rules[n.prop] || void 0;
        if (!u)
          return Promise.resolve({
            result: !0
          });
        const v = i.model[n.prop];
        return new $({
          [n.prop]: u
        }).validate({
          [n.prop]: v
        }, (_) => {
          _ ? (o.value = !0, s.value = _[0].message || "校验错误") : (o.value = !1, s.value = "");
        });
      }
    };
    return J("FORM_ITEM_CTX", c), re(() => {
      n.prop && (i == null || i.addItem(c));
    }), Se(() => {
      n.prop && (i == null || i.removeItem(c));
    }), () => {
      var u;
      return m("div", {
        class: r.value
      }, [m("span", {
        class: a.value
      }, [n.label]), m("div", null, [(u = e.default) == null ? void 0 : u.call(e)]), o.value && m("div", {
        class: "error-message"
      }, [s.value])]);
    };
  }
}), St = {
  install(n) {
    n.component(ce.name, ce), n.component(ye.name, ye);
  }
}, At = {
  modelValue: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  }
};
const be = S({
  name: "SInput",
  props: At,
  emits: ["update:modelValue"],
  setup(n, {
    emit: e
  }) {
    const t = Y("FORM_ITEM_CTX"), r = (a) => {
      const i = a.target.value;
      e("update:modelValue", i), t.validate();
    };
    return () => m("div", {
      class: "s-input"
    }, [m("input", {
      class: "s-input__input",
      value: n.modelValue,
      onInput: r,
      type: n.type
    }, null)]);
  }
}), Dt = {
  install(n) {
    n.component(be.name, be);
  }
}, jt = {
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
const Vt = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
const Lt = S({
  name: "SBaseModal",
  props: Vt,
  emits: ["update:modelValue"],
  setup(n, {
    slots: e,
    emit: t
  }) {
    const {
      modelValue: r
    } = L(n);
    return () => {
      var a;
      return m("div", null, [r.value && m("div", {
        class: "s-base-modal"
      }, [m("div", {
        class: "s-base-modal__mask",
        onClick: () => {
          t("update:modelValue", !1);
        }
      }, null), (a = e.default) == null ? void 0 : a.call(e)])]);
    };
  }
}), xe = S({
  name: "SModal",
  props: jt,
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
      center: s,
      alignCenter: l
    } = L(n), c = l.value ? {
      marginTop: 0,
      top: "50%",
      transform: "translateY(-50%)"
    } : null;
    return () => m(Lt, {
      class: "s-modal",
      modelValue: r.value,
      "onUpdate:modelValue": () => {
        t("update:modelValue");
      }
    }, {
      default: () => {
        var u, v, y;
        return [m("div", {
          class: "s-modal__container",
          style: {
            width: o.value,
            ...c
          }
        }, [e.header ? (u = e.header) == null ? void 0 : u.call(e, {
          close: () => {
            t("update:modelValue", !1);
          }
        }) : m("div", {
          class: "s-modal__header",
          style: {
            textAlign: s.value ? "center" : "left"
          }
        }, [a.value, i.value && m("svg", {
          onClick: () => {
            t("update:modelValue", !1);
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
        }, [(v = e.default) == null ? void 0 : v.call(e)]), m("div", {
          className: "s-modal__footer"
        }, [(y = e.footer) == null ? void 0 : y.call(e)])])];
      }
    });
  }
}), Mt = {
  install(n) {
    n.component(xe.name, xe);
  }
}, Ct = [
  De,
  Je,
  Xe,
  St,
  Dt,
  Mt
], Rt = {
  version: "0.0.1",
  install(n) {
    Ct.forEach((e) => n.use(e));
  }
};
export {
  se as Button,
  ce as Form,
  be as Input,
  xe as Modal,
  fe as Pagination,
  de as Tree,
  Rt as default
};
