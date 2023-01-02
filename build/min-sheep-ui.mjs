import { defineComponent as L, toRefs as S, createVNode as u, computed as I, reactive as Q, ref as T, unref as W, inject as U, mergeProps as O, withDirectives as X, vModelCheckbox as Z, onMounted as Y, provide as G, createTextVNode as C, watch as A } from "vue";
const ee = {
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
const V = L({
  name: "SButton",
  props: ee,
  setup(t, {
    slots: e
  }) {
    const {
      type: n,
      size: o,
      disabled: l,
      block: a
    } = S(t), s = a.value ? "s-btn--block" : "";
    return () => u("button", {
      disabled: l.value,
      class: `s-btn s-btn--${n.value} s-btn--${o.value} ${s}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), te = {
  install(t) {
    t.component(V.name, V);
  }
};
function w(t, e = 0, n = []) {
  return e++, t.reduce((o, l) => {
    const a = { ...l };
    a.level = e, n.length > 0 && n[n.length - 1].level >= e && n.pop(), n.push(a);
    const s = n[n.length - 2];
    if (s && (a.parentId = s.id), a.children) {
      const r = w(a.children, e, n);
      return delete a.children, o.concat(a, r);
    } else
      return a.isLeaf === void 0 && (a.isLeaf = !0), o.concat(a);
  }, []);
}
function ne(t, { getChildren: e }) {
  return {
    toggleCheckNode: (o) => {
      o.checked = !o.checked, e(o).forEach((r) => {
        r.checked = o.checked;
      });
      const l = t.value.find((r) => r.id === o.parentId);
      if (!l)
        return;
      const a = e(l, !1), s = a.filter((r) => r.checked);
      s.length === a.length ? l.checked = !0 : s.length === 0 && (l.checked = !1);
    }
  };
}
function le(t) {
  const e = I(() => {
    let r = [];
    const i = [];
    for (const d of t.value)
      r.map((c) => c.id).includes(d.id) || (d.expanded !== !0 && (r = n(d)), i.push(d));
    return i;
  }), n = (r, i = !0) => {
    const d = [], c = t.value.findIndex((f) => f.id === r.id);
    for (let f = c + 1; f < t.value.length && r.level < t.value[f].level; f++)
      (i || r.level === t.value[f].level - 1) && d.push(t.value[f]);
    return d;
  }, o = (r, i = []) => {
    const d = n(r, !1);
    return i.push(...d), d.forEach((c) => {
      c.expanded && o(c, i);
    }), i;
  };
  return {
    expandedTree: e,
    getChildren: n,
    getChildrenExpanded: o,
    getIndex: (r) => r ? t.value.findIndex((i) => i.id === r.id) : -1,
    getNode: (r) => t.value.find((i) => i.id === r.id),
    getParent: (r) => t.value.find((i) => i.id === r.parentId)
  };
}
const E = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function ae(t, e, { getChildren: n, getParent: o }) {
  const l = Q({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), a = I(
    () => e.value.reduce(
      (p, g) => ({
        ...p,
        [g.id]: g
      }),
      {}
    )
  ), s = (p) => {
    p == null || p.classList.remove(...Object.values(E));
  }, r = (p, g) => {
    var h;
    const v = (h = a.value[p]) == null ? void 0 : h.parentId;
    return v === g ? !0 : v !== void 0 ? r(v, g) : !1;
  }, i = () => {
    l.dropType = void 0, l.draggingNode = null, l.draggingTreeNode = null;
  }, d = (p, g) => {
    var v;
    p.stopPropagation(), l.draggingNode = p.target, l.draggingTreeNode = g, (v = p.dataTransfer) == null || v.setData("dragNodeId", g.id);
  }, c = (p) => {
    if (p.preventDefault(), p.stopPropagation(), !!l.draggingNode && t) {
      if (p.dataTransfer && (p.dataTransfer.dropEffect = "move"), !e)
        return;
      let g = {};
      typeof t == "object" ? g = t : t === !0 && (g = { dropInner: !0 });
      const { dropPrev: v, dropNext: h, dropInner: m } = g;
      let b;
      const y = v ? m ? 0.25 : h ? 0.45 : 1 : -1, k = h ? m ? 0.75 : v ? 0.55 : 0 : 1, P = p.currentTarget, _ = P == null ? void 0 : P.getBoundingClientRect(), B = p.clientY - ((_ == null ? void 0 : _.top) || 0);
      if (B < ((_ == null ? void 0 : _.height) || 0) * y ? b = "dropPrev" : B > ((_ == null ? void 0 : _.height) || 0) * k ? b = "dropNext" : m ? b = "dropInner" : b = void 0, b) {
        const z = P == null ? void 0 : P.classList;
        z && (z.contains(E[b]) || (s(P), z.add(E[b])));
      } else
        s(P);
      l.dropType = b;
    }
  }, f = (p) => {
    p.stopPropagation(), l.draggingNode && s(p.currentTarget);
  }, x = (p, g) => {
    var h;
    if (p.preventDefault(), p.stopPropagation(), s(p.currentTarget), !l.draggingNode || !t)
      return;
    const v = (h = p.dataTransfer) == null ? void 0 : h.getData("dragNodeId");
    if (v) {
      const m = r(g.id, v);
      if (v === g.id || m)
        return;
      l.dropType && N(v, g), i();
    }
  };
  function N(p, g) {
    const v = e.value.find((h) => h.id === p);
    if (v) {
      let h;
      const m = n(v), b = o(v);
      if (l.dropType === "dropInner") {
        h = {
          ...v,
          parentId: g.id,
          level: g.level + 1
        };
        const y = e.value.indexOf(g);
        e.value.splice(y + 1, 0, h), g.isLeaf = void 0;
        const k = e.value.indexOf(v);
        e.value.splice(k, 1);
      } else if (l.dropType === "dropNext") {
        h = {
          ...v,
          parentId: g.parentId,
          level: g.level
        };
        const y = e.value.indexOf(g), k = n(g, !0).length;
        e.value.splice(
          y + k + 1,
          0,
          h
        );
        const P = e.value.indexOf(v);
        e.value.splice(P, 1);
      } else if (l.dropType === "dropPrev") {
        h = {
          ...v,
          parentId: g.parentId,
          level: g.level
        };
        const y = e.value.indexOf(g);
        e.value.splice(y, 0, h);
        const k = e.value.indexOf(v);
        e.value.splice(k, 1);
      }
      l.dropType = "dropInner", m.forEach((y) => N(y.id, h)), b && n(b).length === 0 && (b.isLeaf = !0);
    }
  }
  return {
    onDragstart: d,
    onDragover: c,
    onDragleave: f,
    onDrop: x,
    onDragend: (p) => {
      p.preventDefault(), p.stopPropagation(), i();
    }
  };
}
function oe(t, { getNode: e, getIndex: n, getChildren: o }, { emit: l }) {
  const a = (d) => {
    const c = e(d);
    c && c.isLeaf === !1 && !c.childNodeCount && (c.loading = !0, l("lazy-load", d, s));
  }, s = (d) => {
    const c = e(d.node);
    if (c) {
      c.loading = !1;
      const f = T(
        w(d.treeItems, c.level)
      );
      r(c, f), i(c, f);
      const x = o(c);
      c.childNodeCount = x.length;
    }
  }, r = (d, c) => {
    c.value.forEach((f) => {
      f.level - 1 === d.level && !f.parentId && (f.parentId = d.id);
    });
  }, i = (d, c) => {
    const f = n(d);
    f && t.value.splice(f + 1, 0, ...c.value);
  };
  return {
    lazyLoadNodes: a
  };
}
function re(t = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  for (let o = 0; o < t; o++)
    n += e[parseInt((Math.random() * e.length).toString())];
  return n;
}
function se(t, { getChildren: e, getIndex: n }) {
  return {
    append: (a, s) => {
      const r = e(a, !1), i = r[r.length - 1];
      let d = n(a) + 1;
      i && (d = n(i) + 1), a.expanded = !0, a.isLeaf = !1;
      const c = T({
        ...s,
        level: a.level + 1,
        parentId: a.id,
        isLeaf: !0
      });
      c.value.id === void 0 && (c.value.id = re()), t.value.splice(d, 0, c.value);
    },
    remove: (a) => {
      const s = e(a).map((r) => r.id);
      t.value = t.value.filter(
        (r) => r.id !== a.id && !s.includes(r.id)
      );
    }
  };
}
function ie(t, e, n, o) {
  const { lazyLoadNodes: l } = o;
  return {
    toggleNode: (s) => {
      const r = t.value.find((i) => i.id === s.id);
      r && (r.expanded = !r.expanded, r.expanded && l(r));
    }
  };
}
function ce(t, e, n) {
  const o = W(t), l = T(w(o)), a = le(l), s = [ie, ne, se], r = oe(l, a, n), i = ae(e.draggable, l, a);
  return {
    ...s.reduce((c, f) => ({ ...c, ...f(l, a, n, r) }), {}),
    ...a,
    ...i,
    treeData: l
  };
}
const J = {
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
}, ue = {
  ...J,
  treeNode: {
    type: Object,
    required: !0
  }
}, H = 32, $ = 24, de = L({
  name: "STreeNode",
  props: ue,
  setup(t, {
    slots: e
  }) {
    const {
      lineable: n,
      checkable: o,
      treeNode: l,
      operable: a,
      draggable: s
    } = S(t), {
      toggleCheckNode: r,
      getChildrenExpanded: i,
      append: d,
      remove: c,
      onDragend: f,
      onDragleave: x,
      onDragover: N,
      onDragstart: D,
      onDrop: p
    } = U("TREE_UTILS"), g = T(!1), v = () => {
      g.value ? g.value = !1 : g.value = !0;
    };
    let h = {};
    return s.value && (h = {
      draggable: !0,
      onDragend: (m) => f(m),
      onDragleave: (m) => x(m),
      onDragover: (m) => N(m),
      onDragstart: (m) => D(m, l.value),
      onDrop: (m) => p(m, l.value)
    }), () => {
      var m, b, y;
      return u("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${$ * (l.value.level - 1)}px`
        },
        onMouseenter: v,
        onMouseleave: v
      }, [!l.value.isLeaf && l.value.expanded && n.value && u("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${H * i(l.value).length}px`,
          left: `${$ * (l.value.level - 1) + 9}px`,
          top: `${H}px`
        }
      }, null), u("div", O({
        class: "s-tree__node--content"
      }, h), [l.value.isLeaf ? u("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (m = e.icon) == null ? void 0 : m.call(e), o.value && X(u("input", {
        type: "checkbox",
        "onUpdate:modelValue": (k) => l.value.checked = k,
        onClick: () => {
          r(l.value);
        }
      }, null), [[Z, l.value.checked]]), (b = e.content) == null ? void 0 : b.call(e), a.value && g.value && u("span", {
        class: "inline-flex ml-1"
      }, [u("svg", {
        onClick: () => {
          d(l.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [u("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), u("svg", {
        onClick: () => {
          c(l.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [u("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), l.value.loading && ((y = e.loading) == null ? void 0 : y.call(e))])]);
    };
  }
}), pe = (t, {
  emit: e
}) => u("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: t.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [u("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const ge = {
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
const ve = L({
  name: "SVirtualList",
  props: ge,
  setup(t, {
    slots: e
  }) {
    const {
      data: n,
      itemHeight: o,
      component: l
    } = S(t), a = T(), s = T(0), r = T(0), i = T(0), d = I(() => Math.ceil(s.value / o.value)), c = I(() => n.value.slice(i.value, Math.min(i.value + d.value, n.value.length)));
    Y(() => {
      var x;
      s.value = (x = a.value) == null ? void 0 : x.clientHeight;
    });
    const f = (x) => {
      const {
        scrollTop: N
      } = x.target;
      i.value = Math.floor(N / o.value), r.value = N - N % o.value;
    };
    return () => u(l.value, {
      class: "s-virtual-list__container",
      ref: a,
      onScroll: f
    }, {
      default: () => [u("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${n.value.length * o.value}px`
        }
      }, null), u("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${r.value}px, 0)`
        }
      }, [c.value.map((x, N) => {
        var D;
        return (D = e.default) == null ? void 0 : D.call(e, {
          item: x,
          index: N
        });
      })])]
    });
  }
}), j = L({
  name: "STree",
  props: J,
  emits: ["lazy-load"],
  setup(t, e) {
    const {
      data: n,
      height: o,
      itemHeight: l
    } = S(t), {
      slots: a
    } = e, s = ce(n, t, e);
    return G("TREE_UTILS", s), () => {
      const r = (i) => u(de, O(t, {
        treeNode: i
      }), {
        content: () => a.content ? a.content(i) : i.label,
        icon: () => a.icon ? a.icon({
          nodeData: i,
          toggleNode: s.toggleNode
        }) : u(pe, {
          expanded: !!i.expanded,
          onClick: () => s.toggleNode(i)
        }, null),
        loading: () => a.loading ? a.loading({
          nodeData: s
        }) : u("span", {
          class: "ml-1"
        }, [C("loading...")])
      });
      return u("div", {
        class: "s-tree"
      }, [o != null && o.value ? u("div", {
        style: {
          height: `${o.value}px`
        }
      }, [u(ve, {
        data: s.expandedTree.value,
        itemHeight: l.value
      }, {
        default: ({
          item: i
        }) => r(i)
      })]) : s.expandedTree.value.map((i) => r(i))]);
    };
  }
}), fe = {
  install(t) {
    t.component(j.name, j);
  }
}, K = {
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
function he(t = 1) {
  const e = T(t), n = (s) => {
    e.value = s;
  }, o = (s) => {
    e.value += s;
  };
  return {
    pageIndex: e,
    setPageIndex: n,
    jumpPage: o,
    prevPage: () => o(-1),
    nextPage: () => o(1)
  };
}
const me = (t, e, n) => {
  const o = Array.from(Array(t).keys());
  if (t <= n)
    return o.slice(2, t);
  {
    const l = Math.ceil(n / 2);
    return e <= l ? o.slice(2, n) : e >= t - l + 1 ? o.slice(t - n + 2, t) : o.slice(e - l + 2, e + l - 1);
  }
}, be = K, M = L({
  name: "SPager",
  props: be,
  setup(t) {
    const {
      total: e,
      pageSize: n,
      pagerCount: o
    } = S(t), l = I(() => Math.ceil(e.value / n.value)), {
      pageIndex: a,
      setPageIndex: s,
      jumpPage: r,
      prevPage: i,
      nextPage: d
    } = he(), c = I(() => me(l.value, a.value, o.value));
    return {
      totalPage: l,
      pageIndex: a,
      setPageIndex: s,
      jumpPage: r,
      prevPage: i,
      nextPage: d,
      centerPages: c
    };
  },
  render() {
    const {
      pagerCount: t,
      totalPage: e,
      pageIndex: n,
      setPageIndex: o,
      jumpPage: l,
      centerPages: a
    } = this;
    return u("ul", {
      class: "s-pager"
    }, [u("li", {
      onClick: () => o(1),
      class: {
        current: n === 1
      }
    }, [C("1")]), e > t && n > Math.ceil(t / 2) && u("li", {
      class: "more left",
      onClick: () => l(-5)
    }, [C("...")]), a.map((s) => u("li", {
      onClick: () => o(s),
      class: {
        current: n === s
      }
    }, [s])), e > t && n < e - Math.ceil(t / 2) + 1 && u("li", {
      class: "more right",
      onClick: () => l(5)
    }, [C("...")]), e > 1 && u("li", {
      onClick: () => o(e),
      class: {
        current: n === e
      }
    }, [e])]);
  }
}), F = L({
  name: "SPagination",
  props: K,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = T(), o = I(() => n.value ? n.value.pageIndex < 2 : !0), l = I(() => n.value ? n.value.pageIndex > n.value.totalPage - 1 : !0);
    return Y(() => {
      A(() => n.value.pageIndex, (a) => {
        e("update:modelValue", a);
      }), A(() => t.modelValue, (a) => {
        n.value.pageIndex = a;
      });
    }), () => u("div", {
      class: "s-pagination"
    }, [u("button", {
      disabled: o.value,
      onClick: () => n.value.prevPage()
    }, [C("上一页")]), u(M, O(t, {
      ref: n
    }), null), u("button", {
      disabled: l.value,
      onClick: () => n.value.nextPage()
    }, [C("下一页")])]);
  }
}), xe = {
  install(t) {
    t.component(F.name, F), t.component(M.name, M);
  }
}, ye = {
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
  }
};
const R = L({
  name: "SForm",
  props: ye,
  setup(t, {
    slots: e
  }) {
    const n = I(() => ({
      layout: t.layout,
      labelSize: t.labelSize,
      labelAlign: t.labelAlign
    }));
    return G("LABEL_DATA", n), () => {
      var o;
      return u("div", {
        class: "s-form"
      }, [(o = e.default) == null ? void 0 : o.call(e)]);
    };
  }
}), Ie = {
  label: {
    type: String
  }
};
const q = L({
  name: "SFormItem",
  props: Ie,
  setup(t, {
    slots: e
  }) {
    const n = U("LABEL_DATA"), o = I(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": n.value.layout === "horizontal",
      "s-form__item--vertical": n.value.layout === "vertical"
    })), l = I(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": n.value.layout === "vertical",
      [`s-form__label--${n.value.labelAlign}`]: n.value.layout === "horizontal",
      [`s-form__label--${n.value.labelSize}`]: n.value.layout === "horizontal"
    }));
    return () => {
      var a;
      return u("div", {
        class: o.value
      }, [u("span", {
        class: l.value
      }, [t.label]), u("div", null, [(a = e.default) == null ? void 0 : a.call(e)])]);
    };
  }
}), Ne = {
  install(t) {
    t.component(R.name, R), t.component(q.name, q);
  }
}, Pe = [
  te,
  fe,
  xe,
  Ne
], ke = {
  version: "0.0.1",
  install(t) {
    Pe.forEach((e) => t.use(e));
  }
};
export {
  V as Button,
  R as Form,
  F as Pagination,
  j as Tree,
  ke as default
};
