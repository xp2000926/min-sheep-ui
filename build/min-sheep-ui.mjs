import { defineComponent as D, toRefs as z, createVNode as h, computed as T, reactive as Ne, ref as _, unref as Ie, inject as Y, mergeProps as ne, withDirectives as Ee, vModelCheckbox as _e, onMounted as re, provide as J, createTextVNode as V, watch as oe, onUnmounted as Te } from "vue";
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
const se = D({
  name: "SButton",
  props: Ae,
  setup(r, {
    slots: e
  }) {
    const {
      type: t,
      size: n,
      disabled: i,
      block: a
    } = z(r), o = a.value ? "s-btn--block" : "";
    return () => h("button", {
      disabled: i.value,
      class: `s-btn s-btn--${t.value} s-btn--${n.value} ${o}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), Se = {
  install(r) {
    r.component(se.name, se);
  }
};
function ie(r, e = 0, t = []) {
  return e++, r.reduce((n, i) => {
    const a = { ...i };
    a.level = e, t.length > 0 && t[t.length - 1].level >= e && t.pop(), t.push(a);
    const o = t[t.length - 2];
    if (o && (a.parentId = o.id), a.children) {
      const s = ie(a.children, e, t);
      return delete a.children, n.concat(a, s);
    } else
      return a.isLeaf === void 0 && (a.isLeaf = !0), n.concat(a);
  }, []);
}
function De(r, { getChildren: e }) {
  return {
    toggleCheckNode: (n) => {
      n.checked = !n.checked, e(n).forEach((s) => {
        s.checked = n.checked;
      });
      const i = r.value.find((s) => s.id === n.parentId);
      if (!i)
        return;
      const a = e(i, !1), o = a.filter((s) => s.checked);
      o.length === a.length ? i.checked = !0 : o.length === 0 && (i.checked = !1);
    }
  };
}
function je(r) {
  const e = T(() => {
    let s = [];
    const l = [];
    for (const c of r.value)
      s.map((u) => u.id).includes(c.id) || (c.expanded !== !0 && (s = t(c)), l.push(c));
    return l;
  }), t = (s, l = !0) => {
    const c = [], u = r.value.findIndex((v) => v.id === s.id);
    for (let v = u + 1; v < r.value.length && s.level < r.value[v].level; v++)
      (l || s.level === r.value[v].level - 1) && c.push(r.value[v]);
    return c;
  }, n = (s, l = []) => {
    const c = t(s, !1);
    return l.push(...c), c.forEach((u) => {
      u.expanded && n(u, l);
    }), l;
  };
  return {
    expandedTree: e,
    getChildren: t,
    getChildrenExpanded: n,
    getIndex: (s) => s ? r.value.findIndex((l) => l.id === s.id) : -1,
    getNode: (s) => r.value.find((l) => l.id === s.id),
    getParent: (s) => r.value.find((l) => l.id === s.parentId)
  };
}
const W = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function Le(r, e, { getChildren: t, getParent: n }) {
  const i = Ne({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), a = T(
    () => e.value.reduce(
      (d, p) => ({
        ...d,
        [p.id]: p
      }),
      {}
    )
  ), o = (d) => {
    d == null || d.classList.remove(...Object.values(W));
  }, s = (d, p) => {
    var x;
    const f = (x = a.value[d]) == null ? void 0 : x.parentId;
    return f === p ? !0 : f !== void 0 ? s(f, p) : !1;
  }, l = () => {
    i.dropType = void 0, i.draggingNode = null, i.draggingTreeNode = null;
  }, c = (d, p) => {
    var f;
    d.stopPropagation(), i.draggingNode = d.target, i.draggingTreeNode = p, (f = d.dataTransfer) == null || f.setData("dragNodeId", p.id);
  }, u = (d) => {
    if (d.preventDefault(), d.stopPropagation(), !!i.draggingNode && r) {
      if (d.dataTransfer && (d.dataTransfer.dropEffect = "move"), !e)
        return;
      let p = {};
      typeof r == "object" ? p = r : r === !0 && (p = { dropInner: !0 });
      const { dropPrev: f, dropNext: x, dropInner: g } = p;
      let m;
      const w = f ? g ? 0.25 : x ? 0.45 : 1 : -1, P = x ? g ? 0.75 : f ? 0.55 : 0 : 1, N = d.currentTarget, F = N == null ? void 0 : N.getBoundingClientRect(), j = d.clientY - ((F == null ? void 0 : F.top) || 0);
      if (j < ((F == null ? void 0 : F.height) || 0) * w ? m = "dropPrev" : j > ((F == null ? void 0 : F.height) || 0) * P ? m = "dropNext" : g ? m = "dropInner" : m = void 0, m) {
        const M = N == null ? void 0 : N.classList;
        M && (M.contains(W[m]) || (o(N), M.add(W[m])));
      } else
        o(N);
      i.dropType = m;
    }
  }, v = (d) => {
    d.stopPropagation(), i.draggingNode && o(d.currentTarget);
  }, b = (d, p) => {
    var x;
    if (d.preventDefault(), d.stopPropagation(), o(d.currentTarget), !i.draggingNode || !r)
      return;
    const f = (x = d.dataTransfer) == null ? void 0 : x.getData("dragNodeId");
    if (f) {
      const g = s(p.id, f);
      if (f === p.id || g)
        return;
      i.dropType && q(f, p), l();
    }
  };
  function q(d, p) {
    const f = e.value.find((x) => x.id === d);
    if (f) {
      let x;
      const g = t(f), m = n(f);
      if (i.dropType === "dropInner") {
        x = {
          ...f,
          parentId: p.id,
          level: p.level + 1
        };
        const w = e.value.indexOf(p);
        e.value.splice(w + 1, 0, x), p.isLeaf = void 0;
        const P = e.value.indexOf(f);
        e.value.splice(P, 1);
      } else if (i.dropType === "dropNext") {
        x = {
          ...f,
          parentId: p.parentId,
          level: p.level
        };
        const w = e.value.indexOf(p), P = t(p, !0).length;
        e.value.splice(
          w + P + 1,
          0,
          x
        );
        const N = e.value.indexOf(f);
        e.value.splice(N, 1);
      } else if (i.dropType === "dropPrev") {
        x = {
          ...f,
          parentId: p.parentId,
          level: p.level
        };
        const w = e.value.indexOf(p);
        e.value.splice(w, 0, x);
        const P = e.value.indexOf(f);
        e.value.splice(P, 1);
      }
      i.dropType = "dropInner", g.forEach((w) => q(w.id, x)), m && t(m).length === 0 && (m.isLeaf = !0);
    }
  }
  return {
    onDragstart: c,
    onDragover: u,
    onDragleave: v,
    onDrop: b,
    onDragend: (d) => {
      d.preventDefault(), d.stopPropagation(), l();
    }
  };
}
function Me(r, { getNode: e, getIndex: t, getChildren: n }, { emit: i }) {
  const a = (c) => {
    const u = e(c);
    u && u.isLeaf === !1 && !u.childNodeCount && (u.loading = !0, i("lazy-load", c, o));
  }, o = (c) => {
    const u = e(c.node);
    if (u) {
      u.loading = !1;
      const v = _(
        ie(c.treeItems, u.level)
      );
      s(u, v), l(u, v);
      const b = n(u);
      u.childNodeCount = b.length;
    }
  }, s = (c, u) => {
    u.value.forEach((v) => {
      v.level - 1 === c.level && !v.parentId && (v.parentId = c.id);
    });
  }, l = (c, u) => {
    const v = t(c);
    v && r.value.splice(v + 1, 0, ...u.value);
  };
  return {
    lazyLoadNodes: a
  };
}
function ke(r = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let t = "";
  for (let n = 0; n < r; n++)
    t += e[parseInt((Math.random() * e.length).toString())];
  return t;
}
function Ve(r, { getChildren: e, getIndex: t }) {
  return {
    append: (a, o) => {
      const s = e(a, !1), l = s[s.length - 1];
      let c = t(a) + 1;
      l && (c = t(l) + 1), a.expanded = !0, a.isLeaf = !1;
      const u = _({
        ...o,
        level: a.level + 1,
        parentId: a.id,
        isLeaf: !0
      });
      u.value.id === void 0 && (u.value.id = ke()), r.value.splice(c, 0, u.value);
    },
    remove: (a) => {
      const o = e(a).map((s) => s.id);
      r.value = r.value.filter(
        (s) => s.id !== a.id && !o.includes(s.id)
      );
    }
  };
}
function Re(r, e, t, n) {
  const { lazyLoadNodes: i } = n;
  return {
    toggleNode: (o) => {
      const s = r.value.find((l) => l.id === o.id);
      s && (s.expanded = !s.expanded, s.expanded && i(s));
    }
  };
}
function Ce(r, e, t) {
  const n = Ie(r), i = _(ie(n)), a = je(i), o = [Re, De, Ve], s = Me(i, a, t), l = Le(e.draggable, i, a);
  return {
    ...o.reduce((u, v) => ({ ...u, ...v(i, a, t, s) }), {}),
    ...a,
    ...l,
    treeData: i
  };
}
const xe = {
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
}, $e = {
  ...xe,
  treeNode: {
    type: Object,
    required: !0
  }
}, le = 32, fe = 24, ze = D({
  name: "STreeNode",
  props: $e,
  setup(r, {
    slots: e
  }) {
    const {
      lineable: t,
      checkable: n,
      treeNode: i,
      operable: a,
      draggable: o
    } = z(r), {
      toggleCheckNode: s,
      getChildrenExpanded: l,
      append: c,
      remove: u,
      onDragend: v,
      onDragleave: b,
      onDragover: q,
      onDragstart: I,
      onDrop: d
    } = Y("TREE_UTILS"), p = _(!1), f = () => {
      p.value ? p.value = !1 : p.value = !0;
    };
    let x = {};
    return o.value && (x = {
      draggable: !0,
      onDragend: (g) => v(g),
      onDragleave: (g) => b(g),
      onDragover: (g) => q(g),
      onDragstart: (g) => I(g, i.value),
      onDrop: (g) => d(g, i.value)
    }), () => {
      var g, m, w;
      return h("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${fe * (i.value.level - 1)}px`
        },
        onMouseenter: f,
        onMouseleave: f
      }, [!i.value.isLeaf && i.value.expanded && t.value && h("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${le * l(i.value).length}px`,
          left: `${fe * (i.value.level - 1) + 9}px`,
          top: `${le}px`
        }
      }, null), h("div", ne({
        class: "s-tree__node--content"
      }, x), [i.value.isLeaf ? h("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (g = e.icon) == null ? void 0 : g.call(e), n.value && Ee(h("input", {
        type: "checkbox",
        "onUpdate:modelValue": (P) => i.value.checked = P,
        onClick: () => {
          s(i.value);
        }
      }, null), [[_e, i.value.checked]]), (m = e.content) == null ? void 0 : m.call(e), a.value && p.value && h("span", {
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
          u(i.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [h("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), i.value.loading && ((w = e.loading) == null ? void 0 : w.call(e))])]);
    };
  }
}), Be = (r, {
  emit: e
}) => h("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: r.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [h("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const He = {
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
const Ue = D({
  name: "SVirtualList",
  props: He,
  setup(r, {
    slots: e
  }) {
    const {
      data: t,
      itemHeight: n,
      component: i
    } = z(r), a = _(), o = _(0), s = _(0), l = _(0), c = T(() => Math.ceil(o.value / n.value)), u = T(() => t.value.slice(l.value, Math.min(l.value + c.value, t.value.length)));
    re(() => {
      var b;
      o.value = (b = a.value) == null ? void 0 : b.clientHeight;
    });
    const v = (b) => {
      const {
        scrollTop: q
      } = b.target;
      l.value = Math.floor(q / n.value), s.value = q - q % n.value;
    };
    return () => h(i.value, {
      class: "s-virtual-list__container",
      ref: a,
      onScroll: v
    }, {
      default: () => [h("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${t.value.length * n.value}px`
        }
      }, null), h("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${s.value}px, 0)`
        }
      }, [u.value.map((b, q) => {
        var I;
        return (I = e.default) == null ? void 0 : I.call(e, {
          item: b,
          index: q
        });
      })])]
    });
  }
}), ue = D({
  name: "STree",
  props: xe,
  emits: ["lazy-load"],
  setup(r, e) {
    const {
      data: t,
      height: n,
      itemHeight: i
    } = z(r), {
      slots: a
    } = e, o = Ce(t, r, e);
    return J("TREE_UTILS", o), () => {
      const s = (l) => h(ze, ne(r, {
        treeNode: l
      }), {
        content: () => a.content ? a.content(l) : l.label,
        icon: () => a.icon ? a.icon({
          nodeData: l,
          toggleNode: o.toggleNode
        }) : h(Be, {
          expanded: !!l.expanded,
          onClick: () => o.toggleNode(l)
        }, null),
        loading: () => a.loading ? a.loading({
          nodeData: o
        }) : h("span", {
          class: "ml-1"
        }, [V("loading...")])
      });
      return h("div", {
        class: "s-tree"
      }, [n != null && n.value ? h("div", {
        style: {
          height: `${n.value}px`
        }
      }, [h(Ue, {
        data: o.expandedTree.value,
        itemHeight: i.value
      }, {
        default: ({
          item: l
        }) => s(l)
      })]) : o.expandedTree.value.map((l) => s(l))]);
    };
  }
}), Ye = {
  install(r) {
    r.component(ue.name, ue);
  }
}, we = {
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
function Je(r = 1) {
  const e = _(r), t = (o) => {
    e.value = o;
  }, n = (o) => {
    e.value += o;
  };
  return {
    pageIndex: e,
    setPageIndex: t,
    jumpPage: n,
    prevPage: () => n(-1),
    nextPage: () => n(1)
  };
}
const We = (r, e, t) => {
  const n = Array.from(Array(r).keys());
  if (r <= t)
    return n.slice(2, r);
  {
    const i = Math.ceil(t / 2);
    return e <= i ? n.slice(2, t) : e >= r - i + 1 ? n.slice(r - t + 2, r) : n.slice(e - i + 2, e + i - 1);
  }
}, Ze = we, G = D({
  name: "SPager",
  props: Ze,
  setup(r) {
    const {
      total: e,
      pageSize: t,
      pagerCount: n
    } = z(r), i = T(() => Math.ceil(e.value / t.value)), {
      pageIndex: a,
      setPageIndex: o,
      jumpPage: s,
      prevPage: l,
      nextPage: c
    } = Je(), u = T(() => We(i.value, a.value, n.value));
    return {
      totalPage: i,
      pageIndex: a,
      setPageIndex: o,
      jumpPage: s,
      prevPage: l,
      nextPage: c,
      centerPages: u
    };
  },
  render() {
    const {
      pagerCount: r,
      totalPage: e,
      pageIndex: t,
      setPageIndex: n,
      jumpPage: i,
      centerPages: a
    } = this;
    return h("ul", {
      class: "s-pager"
    }, [h("li", {
      onClick: () => n(1),
      class: {
        current: t === 1
      }
    }, [V("1")]), e > r && t > Math.ceil(r / 2) && h("li", {
      class: "more left",
      onClick: () => i(-5)
    }, [V("...")]), a.map((o) => h("li", {
      onClick: () => n(o),
      class: {
        current: t === o
      }
    }, [o])), e > r && t < e - Math.ceil(r / 2) + 1 && h("li", {
      class: "more right",
      onClick: () => i(5)
    }, [V("...")]), e > 1 && h("li", {
      onClick: () => n(e),
      class: {
        current: t === e
      }
    }, [e])]);
  }
}), de = D({
  name: "SPagination",
  props: we,
  emits: ["update:modelValue"],
  setup(r, {
    emit: e
  }) {
    const t = _(), n = T(() => t.value ? t.value.pageIndex < 2 : !0), i = T(() => t.value ? t.value.pageIndex > t.value.totalPage - 1 : !0);
    return re(() => {
      oe(() => t.value.pageIndex, (a) => {
        e("update:modelValue", a);
      }), oe(() => r.modelValue, (a) => {
        t.value.pageIndex = a;
      });
    }), () => h("div", {
      class: "s-pagination"
    }, [h("button", {
      disabled: n.value,
      onClick: () => t.value.prevPage()
    }, [V("上一页")]), h(G, ne(r, {
      ref: t
    }), null), h("button", {
      disabled: i.value,
      onClick: () => t.value.nextPage()
    }, [V("下一页")])]);
  }
}), Ge = {
  install(r) {
    r.component(de.name, de), r.component(G.name, G);
  }
}, Pe = Symbol("formContextToken"), Xe = {
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
const ce = D({
  name: "SForm",
  props: Xe,
  emits: ["submit"],
  setup(r, {
    slots: e,
    emit: t,
    expose: n
  }) {
    const i = T(() => ({
      layout: r.layout,
      labelSize: r.labelSize,
      labelAlign: r.labelAlign
    }));
    J("LABEL_DATA", i);
    const a = /* @__PURE__ */ new Set(), o = (u) => a.add(u), s = (u) => a.delete(u);
    J(Pe, {
      model: r.model,
      rules: r.rules,
      addItem: o,
      removeItem: s
    });
    const l = (u) => {
      u.preventDefault(), t("submit");
    };
    return n({
      validate: (u) => {
        const v = [];
        a.forEach((b) => v.push(b.validate())), Promise.all(v).then(() => u(!0)).catch(() => u(!1));
      }
    }), () => {
      var u;
      return h("form", {
        class: "s-form",
        onSubmit: l
      }, [(u = e.default) == null ? void 0 : u.call(e)]);
    };
  }
}), Ke = {
  label: {
    type: String
  },
  prop: {
    type: String
  }
};
function L() {
  return L = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, L.apply(this, arguments);
}
function Qe(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, $(r, e);
}
function X(r) {
  return X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, X(r);
}
function $(r, e) {
  return $ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, $(r, e);
}
function et() {
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
function U(r, e, t) {
  return et() ? U = Reflect.construct.bind() : U = function(i, a, o) {
    var s = [null];
    s.push.apply(s, a);
    var l = Function.bind.apply(i, s), c = new l();
    return o && $(c, o.prototype), c;
  }, U.apply(null, arguments);
}
function tt(r) {
  return Function.toString.call(r).indexOf("[native code]") !== -1;
}
function K(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return K = function(n) {
    if (n === null || !tt(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(n))
        return e.get(n);
      e.set(n, i);
    }
    function i() {
      return U(n, arguments, X(this).constructor);
    }
    return i.prototype = Object.create(n.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), $(i, n);
  }, K(r);
}
var nt = /%[sdj%]/g, qe = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (qe = function(e, t) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && t.every(function(n) {
    return typeof n == "string";
  }) && console.warn(e, t);
});
function Q(r) {
  if (!r || !r.length)
    return null;
  var e = {};
  return r.forEach(function(t) {
    var n = t.field;
    e[n] = e[n] || [], e[n].push(t);
  }), e;
}
function E(r) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  var i = 0, a = t.length;
  if (typeof r == "function")
    return r.apply(null, t);
  if (typeof r == "string") {
    var o = r.replace(nt, function(s) {
      if (s === "%%")
        return "%";
      if (i >= a)
        return s;
      switch (s) {
        case "%s":
          return String(t[i++]);
        case "%d":
          return Number(t[i++]);
        case "%j":
          try {
            return JSON.stringify(t[i++]);
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
  return r;
}
function rt(r) {
  return r === "string" || r === "url" || r === "hex" || r === "email" || r === "date" || r === "pattern";
}
function O(r, e) {
  return !!(r == null || e === "array" && Array.isArray(r) && !r.length || rt(e) && typeof r == "string" && !r);
}
function it(r, e, t) {
  var n = [], i = 0, a = r.length;
  function o(s) {
    n.push.apply(n, s || []), i++, i === a && t(n);
  }
  r.forEach(function(s) {
    e(s, o);
  });
}
function pe(r, e, t) {
  var n = 0, i = r.length;
  function a(o) {
    if (o && o.length) {
      t(o);
      return;
    }
    var s = n;
    n = n + 1, s < i ? e(r[s], a) : t([]);
  }
  a([]);
}
function at(r) {
  var e = [];
  return Object.keys(r).forEach(function(t) {
    e.push.apply(e, r[t] || []);
  }), e;
}
var ge = /* @__PURE__ */ function(r) {
  Qe(e, r);
  function e(t, n) {
    var i;
    return i = r.call(this, "Async Validation Error") || this, i.errors = t, i.fields = n, i;
  }
  return e;
}(/* @__PURE__ */ K(Error));
function ot(r, e, t, n, i) {
  if (e.first) {
    var a = new Promise(function(b, q) {
      var I = function(f) {
        return n(f), f.length ? q(new ge(f, Q(f))) : b(i);
      }, d = at(r);
      pe(d, t, I);
    });
    return a.catch(function(b) {
      return b;
    }), a;
  }
  var o = e.firstFields === !0 ? Object.keys(r) : e.firstFields || [], s = Object.keys(r), l = s.length, c = 0, u = [], v = new Promise(function(b, q) {
    var I = function(p) {
      if (u.push.apply(u, p), c++, c === l)
        return n(u), u.length ? q(new ge(u, Q(u))) : b(i);
    };
    s.length || (n(u), b(i)), s.forEach(function(d) {
      var p = r[d];
      o.indexOf(d) !== -1 ? pe(p, t, I) : it(p, t, I);
    });
  });
  return v.catch(function(b) {
    return b;
  }), v;
}
function st(r) {
  return !!(r && r.message !== void 0);
}
function lt(r, e) {
  for (var t = r, n = 0; n < e.length; n++) {
    if (t == null)
      return t;
    t = t[e[n]];
  }
  return t;
}
function ve(r, e) {
  return function(t) {
    var n;
    return r.fullFields ? n = lt(e, r.fullFields) : n = e[t.field || r.fullField], st(t) ? (t.field = t.field || r.fullField, t.fieldValue = n, t) : {
      message: typeof t == "function" ? t() : t,
      fieldValue: n,
      field: t.field || r.fullField
    };
  };
}
function me(r, e) {
  if (e) {
    for (var t in e)
      if (e.hasOwnProperty(t)) {
        var n = e[t];
        typeof n == "object" && typeof r[t] == "object" ? r[t] = L({}, r[t], n) : r[t] = n;
      }
  }
  return r;
}
var Fe = function(e, t, n, i, a, o) {
  e.required && (!n.hasOwnProperty(e.field) || O(t, o || e.type)) && i.push(E(a.messages.required, e.fullField));
}, ft = function(e, t, n, i, a) {
  (/^\s+$/.test(t) || t === "") && i.push(E(a.messages.whitespace, e.fullField));
}, H, ut = function() {
  if (H)
    return H;
  var r = "[a-fA-F\\d:]", e = function(m) {
    return m && m.includeBoundaries ? "(?:(?<=\\s|^)(?=" + r + ")|(?<=" + r + ")(?=\\s|$))" : "";
  }, t = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", i = (`
(?:
(?:` + n + ":){7}(?:" + n + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + n + ":){6}(?:" + t + "|:" + n + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + n + ":){5}(?::" + t + "|(?::" + n + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + n + ":){4}(?:(?::" + n + "){0,1}:" + t + "|(?::" + n + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + n + ":){3}(?:(?::" + n + "){0,2}:" + t + "|(?::" + n + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + n + ":){2}(?:(?::" + n + "){0,3}:" + t + "|(?::" + n + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + n + ":){1}(?:(?::" + n + "){0,4}:" + t + "|(?::" + n + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + n + "){0,5}:" + t + "|(?::" + n + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + t + "$)|(?:^" + i + "$)"), o = new RegExp("^" + t + "$"), s = new RegExp("^" + i + "$"), l = function(m) {
    return m && m.exact ? a : new RegExp("(?:" + e(m) + t + e(m) + ")|(?:" + e(m) + i + e(m) + ")", "g");
  };
  l.v4 = function(g) {
    return g && g.exact ? o : new RegExp("" + e(g) + t + e(g), "g");
  }, l.v6 = function(g) {
    return g && g.exact ? s : new RegExp("" + e(g) + i + e(g), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", u = "(?:\\S+(?::\\S*)?@)?", v = l.v4().source, b = l.v6().source, q = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", I = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", d = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", p = "(?::\\d{2,5})?", f = '(?:[/?#][^\\s"]*)?', x = "(?:" + c + "|www\\.)" + u + "(?:localhost|" + v + "|" + b + "|" + q + I + d + ")" + p + f;
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
    return typeof e == "string" && e.length <= 2048 && !!e.match(ut());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(he.hex);
  }
}, dt = function(e, t, n, i, a) {
  if (e.required && t === void 0) {
    Fe(e, t, n, i, a);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = e.type;
  o.indexOf(s) > -1 ? R[s](t) || i.push(E(a.messages.types[s], e.fullField, e.type)) : s && typeof t !== e.type && i.push(E(a.messages.types[s], e.fullField, e.type));
}, ct = function(e, t, n, i, a) {
  var o = typeof e.len == "number", s = typeof e.min == "number", l = typeof e.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = t, v = null, b = typeof t == "number", q = typeof t == "string", I = Array.isArray(t);
  if (b ? v = "number" : q ? v = "string" : I && (v = "array"), !v)
    return !1;
  I && (u = t.length), q && (u = t.replace(c, "_").length), o ? u !== e.len && i.push(E(a.messages[v].len, e.fullField, e.len)) : s && !l && u < e.min ? i.push(E(a.messages[v].min, e.fullField, e.min)) : l && !s && u > e.max ? i.push(E(a.messages[v].max, e.fullField, e.max)) : s && l && (u < e.min || u > e.max) && i.push(E(a.messages[v].range, e.fullField, e.min, e.max));
}, k = "enum", pt = function(e, t, n, i, a) {
  e[k] = Array.isArray(e[k]) ? e[k] : [], e[k].indexOf(t) === -1 && i.push(E(a.messages[k], e.fullField, e[k].join(", ")));
}, gt = function(e, t, n, i, a) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(t) || i.push(E(a.messages.pattern.mismatch, e.fullField, t, e.pattern));
    else if (typeof e.pattern == "string") {
      var o = new RegExp(e.pattern);
      o.test(t) || i.push(E(a.messages.pattern.mismatch, e.fullField, t, e.pattern));
    }
  }
}, y = {
  required: Fe,
  whitespace: ft,
  type: dt,
  range: ct,
  enum: pt,
  pattern: gt
}, vt = function(e, t, n, i, a) {
  var o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (O(t, "string") && !e.required)
      return n();
    y.required(e, t, i, o, a, "string"), O(t, "string") || (y.type(e, t, i, o, a), y.range(e, t, i, o, a), y.pattern(e, t, i, o, a), e.whitespace === !0 && y.whitespace(e, t, i, o, a));
  }
  n(o);
}, mt = function(e, t, n, i, a) {
  var o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (O(t) && !e.required)
      return n();
    y.required(e, t, i, o, a), t !== void 0 && y.type(e, t, i, o, a);
  }
  n(o);
}, ht = function(e, t, n, i, a) {
  var o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (t === "" && (t = void 0), O(t) && !e.required)
      return n();
    y.required(e, t, i, o, a), t !== void 0 && (y.type(e, t, i, o, a), y.range(e, t, i, o, a));
  }
  n(o);
}, yt = function(e, t, n, i, a) {
  var o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (O(t) && !e.required)
      return n();
    y.required(e, t, i, o, a), t !== void 0 && y.type(e, t, i, o, a);
  }
  n(o);
}, bt = function(e, t, n, i, a) {
  var o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (O(t) && !e.required)
      return n();
    y.required(e, t, i, o, a), O(t) || y.type(e, t, i, o, a);
  }
  n(o);
}, xt = function(e, t, n, i, a) {
  var o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (O(t) && !e.required)
      return n();
    y.required(e, t, i, o, a), t !== void 0 && (y.type(e, t, i, o, a), y.range(e, t, i, o, a));
  }
  n(o);
}, wt = function(e, t, n, i, a) {
  var o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (O(t) && !e.required)
      return n();
    y.required(e, t, i, o, a), t !== void 0 && (y.type(e, t, i, o, a), y.range(e, t, i, o, a));
  }
  n(o);
}, Pt = function(e, t, n, i, a) {
  var o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (t == null && !e.required)
      return n();
    y.required(e, t, i, o, a, "array"), t != null && (y.type(e, t, i, o, a), y.range(e, t, i, o, a));
  }
  n(o);
}, qt = function(e, t, n, i, a) {
  var o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (O(t) && !e.required)
      return n();
    y.required(e, t, i, o, a), t !== void 0 && y.type(e, t, i, o, a);
  }
  n(o);
}, Ft = "enum", Ot = function(e, t, n, i, a) {
  var o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (O(t) && !e.required)
      return n();
    y.required(e, t, i, o, a), t !== void 0 && y[Ft](e, t, i, o, a);
  }
  n(o);
}, Nt = function(e, t, n, i, a) {
  var o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (O(t, "string") && !e.required)
      return n();
    y.required(e, t, i, o, a), O(t, "string") || y.pattern(e, t, i, o, a);
  }
  n(o);
}, It = function(e, t, n, i, a) {
  var o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (O(t, "date") && !e.required)
      return n();
    if (y.required(e, t, i, o, a), !O(t, "date")) {
      var l;
      t instanceof Date ? l = t : l = new Date(t), y.type(e, l, i, o, a), l && y.range(e, l.getTime(), i, o, a);
    }
  }
  n(o);
}, Et = function(e, t, n, i, a) {
  var o = [], s = Array.isArray(t) ? "array" : typeof t;
  y.required(e, t, i, o, a, s), n(o);
}, Z = function(e, t, n, i, a) {
  var o = e.type, s = [], l = e.required || !e.required && i.hasOwnProperty(e.field);
  if (l) {
    if (O(t, o) && !e.required)
      return n();
    y.required(e, t, i, s, a, o), O(t, o) || y.type(e, t, i, s, a);
  }
  n(s);
}, _t = function(e, t, n, i, a) {
  var o = [], s = e.required || !e.required && i.hasOwnProperty(e.field);
  if (s) {
    if (O(t) && !e.required)
      return n();
    y.required(e, t, i, o, a);
  }
  n(o);
}, C = {
  string: vt,
  method: mt,
  number: ht,
  boolean: yt,
  regexp: bt,
  integer: xt,
  float: wt,
  array: Pt,
  object: qt,
  enum: Ot,
  pattern: Nt,
  date: It,
  url: Z,
  hex: Z,
  email: Z,
  required: Et,
  any: _t
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
var te = ee(), B = /* @__PURE__ */ function() {
  function r(t) {
    this.rules = null, this._messages = te, this.define(t);
  }
  var e = r.prototype;
  return e.define = function(n) {
    var i = this;
    if (!n)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof n != "object" || Array.isArray(n))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(a) {
      var o = n[a];
      i.rules[a] = Array.isArray(o) ? o : [o];
    });
  }, e.messages = function(n) {
    return n && (this._messages = me(ee(), n)), this._messages;
  }, e.validate = function(n, i, a) {
    var o = this;
    i === void 0 && (i = {}), a === void 0 && (a = function() {
    });
    var s = n, l = i, c = a;
    if (typeof l == "function" && (c = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, s), Promise.resolve(s);
    function u(d) {
      var p = [], f = {};
      function x(m) {
        if (Array.isArray(m)) {
          var w;
          p = (w = p).concat.apply(w, m);
        } else
          p.push(m);
      }
      for (var g = 0; g < d.length; g++)
        x(d[g]);
      p.length ? (f = Q(p), c(p, f)) : c(null, s);
    }
    if (l.messages) {
      var v = this.messages();
      v === te && (v = ee()), me(v, l.messages), l.messages = v;
    } else
      l.messages = this.messages();
    var b = {}, q = l.keys || Object.keys(this.rules);
    q.forEach(function(d) {
      var p = o.rules[d], f = s[d];
      p.forEach(function(x) {
        var g = x;
        typeof g.transform == "function" && (s === n && (s = L({}, s)), f = s[d] = g.transform(f)), typeof g == "function" ? g = {
          validator: g
        } : g = L({}, g), g.validator = o.getValidationMethod(g), g.validator && (g.field = d, g.fullField = g.fullField || d, g.type = o.getType(g), b[d] = b[d] || [], b[d].push({
          rule: g,
          value: f,
          source: s,
          field: d
        }));
      });
    });
    var I = {};
    return ot(b, l, function(d, p) {
      var f = d.rule, x = (f.type === "object" || f.type === "array") && (typeof f.fields == "object" || typeof f.defaultField == "object");
      x = x && (f.required || !f.required && d.value), f.field = d.field;
      function g(P, N) {
        return L({}, N, {
          fullField: f.fullField + "." + P,
          fullFields: f.fullFields ? [].concat(f.fullFields, [P]) : [P]
        });
      }
      function m(P) {
        P === void 0 && (P = []);
        var N = Array.isArray(P) ? P : [P];
        !l.suppressWarning && N.length && r.warning("async-validator:", N), N.length && f.message !== void 0 && (N = [].concat(f.message));
        var F = N.map(ve(f, s));
        if (l.first && F.length)
          return I[f.field] = 1, p(F);
        if (!x)
          p(F);
        else {
          if (f.required && !d.value)
            return f.message !== void 0 ? F = [].concat(f.message).map(ve(f, s)) : l.error && (F = [l.error(f, E(l.messages.required, f.field))]), p(F);
          var j = {};
          f.defaultField && Object.keys(d.value).map(function(S) {
            j[S] = f.defaultField;
          }), j = L({}, j, d.rule.fields);
          var M = {};
          Object.keys(j).forEach(function(S) {
            var A = j[S], Oe = Array.isArray(A) ? A : [A];
            M[S] = Oe.map(g.bind(null, S));
          });
          var ae = new r(M);
          ae.messages(l.messages), d.rule.options && (d.rule.options.messages = l.messages, d.rule.options.error = l.error), ae.validate(d.value, d.rule.options || l, function(S) {
            var A = [];
            F && F.length && A.push.apply(A, F), S && S.length && A.push.apply(A, S), p(A.length ? A : null);
          });
        }
      }
      var w;
      if (f.asyncValidator)
        w = f.asyncValidator(f, d.value, m, d.source, l);
      else if (f.validator) {
        try {
          w = f.validator(f, d.value, m, d.source, l);
        } catch (P) {
          console.error == null || console.error(P), l.suppressValidatorError || setTimeout(function() {
            throw P;
          }, 0), m(P.message);
        }
        w === !0 ? m() : w === !1 ? m(typeof f.message == "function" ? f.message(f.fullField || f.field) : f.message || (f.fullField || f.field) + " fails") : w instanceof Array ? m(w) : w instanceof Error && m(w.message);
      }
      w && w.then && w.then(function() {
        return m();
      }, function(P) {
        return m(P);
      });
    }, function(d) {
      u(d);
    }, s);
  }, e.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !C.hasOwnProperty(n.type))
      throw new Error(E("Unknown rule type %s", n.type));
    return n.type || "string";
  }, e.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var i = Object.keys(n), a = i.indexOf("message");
    return a !== -1 && i.splice(a, 1), i.length === 1 && i[0] === "required" ? C.required : C[this.getType(n)] || void 0;
  }, r;
}();
B.register = function(e, t) {
  if (typeof t != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  C[e] = t;
};
B.warning = qe;
B.messages = te;
B.validators = C;
const ye = D({
  name: "SFormItem",
  props: Ke,
  setup(r, {
    slots: e
  }) {
    const t = Y("LABEL_DATA"), n = T(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": t.value.layout === "horizontal",
      "s-form__item--vertical": t.value.layout === "vertical"
    })), i = T(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": t.value.layout === "vertical",
      [`s-form__label--${t.value.labelAlign}`]: t.value.layout === "horizontal",
      [`s-form__label--${t.value.labelSize}`]: t.value.layout === "horizontal"
    })), a = Y(Pe), o = _(!1), s = _(""), c = {
      validate: () => {
        if (!a)
          return console.warn("请在Form中使用FormItem"), Promise.reject("请在Form中使用FormItem");
        if (!r.prop)
          return console.warn("如果要校验当前项，请设置prop字段"), Promise.reject("如果要校验当前项，请设置prop字段");
        if (!a.rules)
          return Promise.resolve({
            result: !0
          });
        const u = a.rules[r.prop] || void 0;
        if (!u)
          return Promise.resolve({
            result: !0
          });
        const v = a.model[r.prop];
        return new B({
          [r.prop]: u
        }).validate({
          [r.prop]: v
        }, (q) => {
          q ? (o.value = !0, s.value = q[0].message || "校验错误") : (o.value = !1, s.value = "");
        });
      }
    };
    return J("FORM_ITEM_CTX", c), re(() => {
      r.prop && (a == null || a.addItem(c));
    }), Te(() => {
      r.prop && (a == null || a.removeItem(c));
    }), () => {
      var u;
      return h("div", {
        class: n.value
      }, [h("span", {
        class: i.value
      }, [r.label]), h("div", null, [(u = e.default) == null ? void 0 : u.call(e)]), o.value && h("div", {
        class: "error-message"
      }, [s.value])]);
    };
  }
}), Tt = {
  install(r) {
    r.component(ce.name, ce), r.component(ye.name, ye);
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
const be = D({
  name: "SInput",
  props: At,
  emits: ["update:modelValue"],
  setup(r, {
    emit: e
  }) {
    const t = Y("FORM_ITEM_CTX"), n = (i) => {
      const a = i.target.value;
      e("update:modelValue", a), t.validate();
    };
    return () => h("div", {
      class: "s-input"
    }, [h("input", {
      class: "s-input__input",
      value: r.modelValue,
      onInput: n,
      type: r.type
    }, null)]);
  }
}), St = {
  install(r) {
    r.component(be.name, be);
  }
}, Dt = [
  Se,
  Ye,
  Ge,
  Tt,
  St
], Lt = {
  version: "0.0.1",
  install(r) {
    Dt.forEach((e) => r.use(e));
  }
};
export {
  se as Button,
  ce as Form,
  be as Input,
  de as Pagination,
  ue as Tree,
  Lt as default
};
