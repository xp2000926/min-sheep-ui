import { computed as L, reactive as V, ref as T, unref as $, defineComponent as _, createVNode as u, toRefs as P, inject as j, mergeProps as z, Fragment as q, onMounted as A, provide as F, createTextVNode as K } from "vue";
function w(t, l = 0, d = []) {
  return l++, t.reduce((v, o) => {
    const c = { ...o };
    c.level = l, d.length > 0 && d[d.length - 1].level >= l && d.pop(), d.push(c);
    const i = d[d.length - 2];
    if (i && (c.parentId = i.id), c.children) {
      const n = w(c.children, l, d);
      return delete c.children, v.concat(c, n);
    } else
      return c.isLeaf === void 0 && (c.isLeaf = !0), v.concat(c);
  }, []);
}
function U(t, { getChildren: l, getParent: d }, { emit: v }) {
  const o = (i) => {
    i.checked = !i.checked, l(i).forEach((s) => {
      s.checked = i.checked, s.inChecked = l(i, !0).every(
        (b) => b.inChecked
      );
    }), i.inChecked = !1, c(i);
    const n = t.value.map((s) => {
      if (s.checked)
        return s.id;
    }).filter(Boolean), r = t.value.map((s) => {
      if (s.checked)
        return s;
    }).filter(Boolean), e = t.value.map((s) => {
      if (s.inChecked)
        return s.id;
    }).filter(Boolean), a = t.value.map((s) => {
      if (s.inChecked)
        return s;
    }).filter(Boolean);
    v(
      "check",
      i,
      n,
      r,
      e,
      a
    );
  }, c = (i) => {
    const n = d(i);
    if (!n)
      return;
    const r = l(n, !0), e = r.every((s) => s.checked);
    n.checked = e;
    const a = r.some((s) => s.checked);
    e ? n.inChecked = !1 : a ? n.inChecked = !0 : n.inChecked = !1, n.parentId && c(n);
  };
  return {
    toggleCheckNode: o
  };
}
function Y(t) {
  const l = L(() => {
    let n = [];
    const r = [];
    for (const e of t.value)
      n.map((a) => a.id).includes(e.id) || (e.expanded !== !0 && (n = d(e)), r.push(e));
    return r;
  }), d = (n, r = !0) => {
    const e = [], a = t.value.findIndex((s) => s.id === n.id);
    for (let s = a + 1; s < t.value.length && n.level < t.value[s].level; s++)
      (r || n.level === t.value[s].level - 1) && e.push(t.value[s]);
    return e;
  }, v = (n, r = []) => {
    const e = d(n, !1);
    return r.push(...e), e.forEach((a) => {
      a.expanded && v(a, r);
    }), r;
  };
  return {
    expandedTree: l,
    getChildren: d,
    getChildrenExpanded: v,
    getIndex: (n) => n ? t.value.findIndex((r) => r.id === n.id) : -1,
    getNode: (n) => t.value.find((r) => r.id === n.id),
    getParent: (n) => t.value.find((r) => r.id === n.parentId)
  };
}
const D = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function G(t, l, { getChildren: d, getParent: v }) {
  const o = V({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), c = L(
    () => l.value.reduce(
      (p, f) => ({
        ...p,
        [f.id]: f
      }),
      {}
    )
  ), i = (p) => {
    p == null || p.classList.remove(...Object.values(D));
  }, n = (p, f) => {
    var x;
    const g = (x = c.value[p]) == null ? void 0 : x.parentId;
    return g === f ? !0 : g !== void 0 ? n(g, f) : !1;
  }, r = () => {
    o.dropType = void 0, o.draggingNode = null, o.draggingTreeNode = null;
  }, e = (p, f) => {
    var g;
    p.stopPropagation(), o.draggingNode = p.target, o.draggingTreeNode = f, (g = p.dataTransfer) == null || g.setData("dragNodeId", f.id);
  }, a = (p) => {
    if (p.preventDefault(), p.stopPropagation(), !!o.draggingNode && t) {
      if (p.dataTransfer && (p.dataTransfer.dropEffect = "move"), !l)
        return;
      let f = {};
      typeof t == "object" ? f = t : t === !0 && (f = { dropInner: !0 });
      const { dropPrev: g, dropNext: x, dropInner: C } = f;
      let h;
      const k = g ? C ? 0.25 : x ? 0.45 : 1 : -1, m = x ? C ? 0.75 : g ? 0.55 : 0 : 1, I = p.currentTarget, N = I == null ? void 0 : I.getBoundingClientRect(), E = p.clientY - ((N == null ? void 0 : N.top) || 0);
      if (E < ((N == null ? void 0 : N.height) || 0) * k ? h = "dropPrev" : E > ((N == null ? void 0 : N.height) || 0) * m ? h = "dropNext" : C ? h = "dropInner" : h = void 0, h) {
        const B = I == null ? void 0 : I.classList;
        B && (B.contains(D[h]) || (i(I), B.add(D[h])));
      } else
        i(I);
      o.dropType = h;
    }
  }, s = (p) => {
    p.stopPropagation(), o.draggingNode && i(p.currentTarget);
  }, b = (p, f) => {
    var x;
    if (p.preventDefault(), p.stopPropagation(), i(p.currentTarget), !o.draggingNode || !t)
      return;
    const g = (x = p.dataTransfer) == null ? void 0 : x.getData("dragNodeId");
    if (g) {
      const C = n(f.id, g);
      if (g === f.id || C)
        return;
      o.dropType && y(g, f), r();
    }
  };
  function y(p, f) {
    const g = l.value.find((x) => x.id === p);
    if (g) {
      let x;
      const C = d(g), h = v(g);
      if (o.dropType === "dropInner") {
        x = {
          ...g,
          parentId: f.id,
          level: f.level + 1
        };
        const k = l.value.indexOf(f);
        l.value.splice(k + 1, 0, x), f.isLeaf = void 0;
        const m = l.value.indexOf(g);
        l.value.splice(m, 1);
      } else if (o.dropType === "dropNext") {
        x = {
          ...g,
          parentId: f.parentId,
          level: f.level
        };
        const k = l.value.indexOf(f), m = d(f, !0).length;
        l.value.splice(
          k + m + 1,
          0,
          x
        );
        const I = l.value.indexOf(g);
        l.value.splice(I, 1);
      } else if (o.dropType === "dropPrev") {
        x = {
          ...g,
          parentId: f.parentId,
          level: f.level
        };
        const k = l.value.indexOf(f);
        l.value.splice(k, 0, x);
        const m = l.value.indexOf(g);
        l.value.splice(m, 1);
      }
      o.dropType = "dropInner", C.forEach((k) => y(k.id, x)), h && d(h).length === 0 && (h.isLeaf = !0);
    }
  }
  return {
    onDragstart: e,
    onDragover: a,
    onDragleave: s,
    onDrop: b,
    onDragend: (p) => {
      p.preventDefault(), p.stopPropagation(), r();
    }
  };
}
function J(t, { getNode: l, getIndex: d, getChildren: v }, { emit: o }) {
  const c = (e) => {
    const a = l(e);
    a && a.isLeaf === !1 && !a.childNodeCount && (a.loading = !0, o("lazy-load", e, i));
  }, i = (e) => {
    const a = l(e.node);
    if (a) {
      a.loading = !1;
      const s = T(
        w(e.treeItems, a.level)
      );
      n(a, s), r(a, s);
      const b = v(a);
      a.childNodeCount = b.length;
    }
  }, n = (e, a) => {
    a.value.forEach((s) => {
      s.level - 1 === e.level && !s.parentId && (s.parentId = e.id);
    });
  }, r = (e, a) => {
    const s = d(e);
    s && t.value.splice(s + 1, 0, ...a.value);
  };
  return {
    lazyLoadNodes: c
  };
}
function Q(t = 8) {
  const l = "abcdefghijklmnopqrstuvwxyz0123456789";
  let d = "";
  for (let v = 0; v < t; v++)
    d += l[parseInt((Math.random() * l.length).toString())];
  return d;
}
function W(t, { getChildren: l, getIndex: d }) {
  return {
    append: (c, i) => {
      const n = l(c, !1), r = n[n.length - 1];
      let e = d(c) + 1;
      r && (e = d(r) + 1), c.expanded = !0, c.isLeaf = !1;
      const a = T({
        ...i,
        level: c.level + 1,
        parentId: c.id,
        isLeaf: !0
      });
      a.value.id === void 0 && (a.value.id = Q()), t.value.splice(e, 0, a.value);
    },
    remove: (c) => {
      const i = l(c).map((n) => n.id);
      t.value = t.value.filter(
        (n) => n.id !== c.id && !i.includes(n.id)
      );
    }
  };
}
function X(t, l, d, v) {
  const { lazyLoadNodes: o } = v;
  return {
    toggleNode: (i, n, r = !1) => {
      if (i.stopPropagation(), r)
        t.value.forEach((e) => {
          e.level === n.level && e.id !== n.id && (e.expanded = !1), e.id === n.id && (e.expanded = !e.expanded), e.expanded && o(e);
        });
      else {
        const e = t.value.find((a) => a.id === n.id);
        e && (e.expanded = !e.expanded, e.expanded && o(e));
      }
    }
  };
}
function Z(t, l, d) {
  const v = $(t), o = T(w(v)), c = Y(o), i = [X, U, W], n = J(o, c, d), r = G(l.draggable, o, c);
  return {
    ...i.reduce((a, s) => ({ ...a, ...s(o, c, d, n) }), {}),
    ...c,
    ...r,
    treeData: o
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
  },
  accordion: {
    type: Boolean,
    default: !1
  }
}, ee = {
  onClick: {
    type: Function,
    required: !0
  }
};
const ne = _({
  name: "SBaseSelectAll",
  props: ee,
  setup(t) {
    return () => u("label", {
      class: "s-base-select-all is-checked"
    }, [u("span", {
      class: "s-base-select-all__input is-checked"
    }, [u("span", {
      class: "s-base-select-all__inner"
    }, null), u("input", {
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
}), le = {
  onClick: {
    type: Function,
    required: !0
  }
};
const te = _({
  name: "SBaseSelectionBox",
  props: le,
  setup(t) {
    return () => u("label", {
      class: "s-base-selection-box"
    }, [u("span", {
      class: "s-base-selection-box__input"
    }, [u("span", {
      class: "s-base-selection-box__inner"
    }, null), u("input", {
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
}), oe = {
  onClick: {
    type: Function,
    required: !0
  }
};
const ae = _({
  name: "SBaseSemiSelection",
  props: oe,
  setup(t) {
    return () => u("label", {
      class: "s-base-semi-selection",
      "aria-controls": "undefined"
    }, [u("span", {
      class: "s-base-semi-selection__input is-indeterminate",
      tabindex: "0",
      role: "checkbox",
      "aria-checked": "mixed"
    }, [u("span", {
      class: "s-base-semi-selection__inner"
    }, null), u("input", {
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
}), se = {
  ...R,
  treeNode: {
    type: Object,
    required: !0
  }
}, O = 34, M = 24, ce = _({
  name: "STreeNode",
  props: se,
  setup(t, {
    slots: l
  }) {
    const {
      lineable: d,
      checkable: v,
      treeNode: o,
      operable: c,
      draggable: i
    } = P(t), {
      toggleCheckNode: n,
      getChildrenExpanded: r,
      append: e,
      remove: a,
      onDragend: s,
      onDragleave: b,
      onDragover: y,
      onDragstart: S,
      onDrop: p
    } = j("TREE_UTILS"), f = T(!1), g = () => {
      f.value ? f.value = !1 : f.value = !0;
    };
    let x = {};
    i.value && (x = {
      draggable: !0,
      onDragend: (h) => s(h),
      onDragleave: (h) => b(h),
      onDragover: (h) => y(h),
      onDragstart: (h) => S(h, o.value),
      onDrop: (h) => p(h, o.value)
    });
    const C = () => u(q, null, [o.value.inChecked ? u(ae, {
      onClick: () => n(o.value)
    }, null) : o.value.checked ? u(ne, {
      onClick: () => n(o.value)
    }, null) : u(te, {
      onClick: () => n(o.value)
    }, null)]);
    return () => {
      var h, k, m;
      return u("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${M * (o.value.level - 1)}px`
        },
        onMouseenter: g,
        onMouseleave: g
      }, [!o.value.isLeaf && o.value.expanded && d.value && u("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${O * r(o.value).length}px`,
          left: `${M * (o.value.level - 1) + 9}px`,
          top: `${O}px`
        }
      }, null), u("div", z({
        class: "s-tree__node--content"
      }, x), [o.value.isLeaf ? u("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (h = l.icon) == null ? void 0 : h.call(l), v.value && C(), (k = l.content) == null ? void 0 : k.call(l), c.value && f.value && u("span", {
        class: "inline-flex ml-1"
      }, [u("svg", {
        onClick: () => {
          e(o.value, {
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
          a(o.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [u("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), o.value.loading && ((m = l.loading) == null ? void 0 : m.call(l))])]);
    };
  }
}), ie = (t, {
  emit: l
}) => u("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: t.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => l("onClick")
}, [u("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const re = {
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
const de = _({
  name: "SVirtualList",
  props: re,
  setup(t, {
    slots: l
  }) {
    const {
      data: d,
      itemHeight: v,
      component: o
    } = P(t), c = T(), i = T(0), n = T(0), r = T(0), e = L(() => Math.ceil(i.value / v.value)), a = L(() => d.value.slice(r.value, Math.min(r.value + e.value, d.value.length)));
    A(() => {
      var b;
      i.value = (b = c.value) == null ? void 0 : b.clientHeight;
    });
    const s = (b) => {
      const {
        scrollTop: y
      } = b.target;
      r.value = Math.floor(y / v.value), n.value = y - y % v.value;
    };
    return () => u(o.value, {
      class: "s-virtual-list__container",
      ref: c,
      onScroll: s
    }, {
      default: () => [u("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${d.value.length * v.value}px`
        }
      }, null), u("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${n.value}px, 0)`
        }
      }, [a.value.map((b, y) => {
        var S;
        return (S = l.default) == null ? void 0 : S.call(l, {
          item: b,
          index: y
        });
      })])]
    });
  }
}), H = _({
  name: "STree",
  props: R,
  emits: ["lazy-load", "check"],
  setup(t, l) {
    const {
      data: d,
      height: v,
      itemHeight: o,
      accordion: c
    } = P(t), {
      slots: i
    } = l, n = Z(d, t, l);
    return F("TREE_UTILS", n), () => {
      const r = (e) => u(ce, z(t, {
        treeNode: e,
        onClick: c.value ? (a) => n.toggleNode(a, e, c.value) : ""
      }), {
        content: () => i.content ? i.content(e) : e.label,
        icon: () => i.icon ? i.icon({
          nodeData: e,
          toggleNode: n.toggleNode
        }) : u(ie, {
          expanded: !!e.expanded,
          onClick: (a) => n.toggleNode(a, e, c.value)
        }, null),
        loading: () => i.loading ? i.loading({
          nodeData: n
        }) : u("span", {
          class: "ml-1"
        }, [K("loading...")])
      });
      return u("div", {
        class: "s-tree"
      }, [v != null && v.value ? u("div", {
        style: {
          height: `${v.value}px`
        }
      }, [u(de, {
        data: n.expandedTree.value,
        itemHeight: o.value
      }, {
        default: ({
          item: e
        }) => r(e)
      })]) : n.expandedTree.value.map((e) => r(e))]);
    };
  }
}), pe = {
  install(t) {
    t.component(H.name, H);
  }
};
export {
  H as Tree,
  pe as default
};
