import { defineComponent as P, toRefs as _, createVNode as g, computed as C, reactive as j, ref as L, unref as R, inject as q, mergeProps as $, withDirectives as U, vModelCheckbox as Y, onMounted as A, provide as G, createTextVNode as F } from "vue";
const J = {
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
const M = P({
  name: "SButton",
  props: J,
  setup(l, {
    slots: e
  }) {
    const {
      type: r,
      size: d,
      disabled: n,
      block: o
    } = _(l), s = o.value ? "s-btn--block" : "";
    return () => g("button", {
      disabled: n.value,
      class: `s-btn s-btn--${r.value} s-btn--${d.value} ${s}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), K = {
  install(l) {
    l.component(M.name, M);
  }
};
function O(l, e = 0, r = []) {
  return e++, l.reduce((d, n) => {
    const o = { ...n };
    o.level = e, r.length > 0 && r[r.length - 1].level >= e && r.pop(), r.push(o);
    const s = r[r.length - 2];
    if (s && (o.parentId = s.id), o.children) {
      const t = O(o.children, e, r);
      return delete o.children, d.concat(o, t);
    } else
      return o.isLeaf === void 0 && (o.isLeaf = !0), d.concat(o);
  }, []);
}
function Q(l, { getChildren: e }) {
  return {
    toggleCheckNode: (d) => {
      d.checked = !d.checked, e(d).forEach((t) => {
        t.checked = d.checked;
      });
      const n = l.value.find((t) => t.id === d.parentId);
      if (!n)
        return;
      const o = e(n, !1), s = o.filter((t) => t.checked);
      s.length === o.length ? n.checked = !0 : s.length === 0 && (n.checked = !1);
    }
  };
}
function W(l) {
  const e = C(() => {
    let t = [];
    const a = [];
    for (const p of l.value)
      t.map((c) => c.id).includes(p.id) || (p.expanded !== !0 && (t = r(p)), a.push(p));
    return a;
  }), r = (t, a = !0) => {
    const p = [], c = l.value.findIndex((v) => v.id === t.id);
    for (let v = c + 1; v < l.value.length && t.level < l.value[v].level; v++)
      (a || t.level === l.value[v].level - 1) && p.push(l.value[v]);
    return p;
  }, d = (t, a = []) => {
    const p = r(t, !1);
    return a.push(...p), p.forEach((c) => {
      c.expanded && d(c, a);
    }), a;
  };
  return {
    expandedTree: e,
    getChildren: r,
    getChildrenExpanded: d,
    getIndex: (t) => t ? l.value.findIndex((a) => a.id === t.id) : -1,
    getNode: (t) => l.value.find((a) => a.id === t.id),
    getParent: (t) => l.value.find((a) => a.id === t.parentId)
  };
}
const E = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function X(l, e, { getChildren: r, getParent: d }) {
  const n = j({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), o = C(
    () => e.value.reduce(
      (i, u) => ({
        ...i,
        [u.id]: u
      }),
      {}
    )
  ), s = (i) => {
    i == null || i.classList.remove(...Object.values(E));
  }, t = (i, u) => {
    var h;
    const f = (h = o.value[i]) == null ? void 0 : h.parentId;
    return f === u ? !0 : f !== void 0 ? t(f, u) : !1;
  }, a = () => {
    n.dropType = void 0, n.draggingNode = null, n.draggingTreeNode = null;
  }, p = (i, u) => {
    var f;
    i.stopPropagation(), n.draggingNode = i.target, n.draggingTreeNode = u, (f = i.dataTransfer) == null || f.setData("dragNodeId", u.id);
  }, c = (i) => {
    if (i.preventDefault(), i.stopPropagation(), !!n.draggingNode && l) {
      if (i.dataTransfer && (i.dataTransfer.dropEffect = "move"), !e)
        return;
      let u = {};
      typeof l == "object" ? u = l : l === !0 && (u = { dropInner: !0 });
      const { dropPrev: f, dropNext: h, dropInner: x } = u;
      let y;
      const N = f ? x ? 0.25 : h ? 0.45 : 1 : -1, T = h ? x ? 0.75 : f ? 0.55 : 0 : 1, I = i.currentTarget, k = I == null ? void 0 : I.getBoundingClientRect(), w = i.clientY - ((k == null ? void 0 : k.top) || 0);
      if (w < ((k == null ? void 0 : k.height) || 0) * N ? y = "dropPrev" : w > ((k == null ? void 0 : k.height) || 0) * T ? y = "dropNext" : x ? y = "dropInner" : y = void 0, y) {
        const S = I == null ? void 0 : I.classList;
        S && (S.contains(E[y]) || (s(I), S.add(E[y])));
      } else
        s(I);
      n.dropType = y;
    }
  }, v = (i) => {
    i.stopPropagation(), n.draggingNode && s(i.currentTarget);
  }, m = (i, u) => {
    var h;
    if (i.preventDefault(), i.stopPropagation(), s(i.currentTarget), !n.draggingNode || !l)
      return;
    const f = (h = i.dataTransfer) == null ? void 0 : h.getData("dragNodeId");
    if (f) {
      const x = t(u.id, f);
      if (f === u.id || x)
        return;
      n.dropType && b(f, u), a();
    }
  };
  function b(i, u) {
    const f = e.value.find((h) => h.id === i);
    if (f) {
      let h;
      const x = r(f), y = d(f);
      if (n.dropType === "dropInner") {
        h = {
          ...f,
          parentId: u.id,
          level: u.level + 1
        };
        const N = e.value.indexOf(u);
        e.value.splice(N + 1, 0, h), u.isLeaf = void 0;
        const T = e.value.indexOf(f);
        e.value.splice(T, 1);
      } else if (n.dropType === "dropNext") {
        h = {
          ...f,
          parentId: u.parentId,
          level: u.level
        };
        const N = e.value.indexOf(u), T = r(u, !0).length;
        e.value.splice(
          N + T + 1,
          0,
          h
        );
        const I = e.value.indexOf(f);
        e.value.splice(I, 1);
      } else if (n.dropType === "dropPrev") {
        h = {
          ...f,
          parentId: u.parentId,
          level: u.level
        };
        const N = e.value.indexOf(u);
        e.value.splice(N, 0, h);
        const T = e.value.indexOf(f);
        e.value.splice(T, 1);
      }
      n.dropType = "dropInner", x.forEach((N) => b(N.id, h)), y && r(y).length === 0 && (y.isLeaf = !0);
    }
  }
  return {
    onDragstart: p,
    onDragover: c,
    onDragleave: v,
    onDrop: m,
    onDragend: (i) => {
      i.preventDefault(), i.stopPropagation(), a();
    }
  };
}
function Z(l, { getNode: e, getIndex: r, getChildren: d }, { emit: n }) {
  const o = (p) => {
    const c = e(p);
    c && c.isLeaf === !1 && !c.childNodeCount && (c.loading = !0, n("lazy-load", p, s));
  }, s = (p) => {
    const c = e(p.node);
    if (c) {
      c.loading = !1;
      const v = L(
        O(p.treeItems, c.level)
      );
      t(c, v), a(c, v);
      const m = d(c);
      c.childNodeCount = m.length;
    }
  }, t = (p, c) => {
    c.value.forEach((v) => {
      v.level - 1 === p.level && !v.parentId && (v.parentId = p.id);
    });
  }, a = (p, c) => {
    const v = r(p);
    v && l.value.splice(v + 1, 0, ...c.value);
  };
  return {
    lazyLoadNodes: o
  };
}
function ee(l = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let r = "";
  for (let d = 0; d < l; d++)
    r += e[parseInt((Math.random() * e.length).toString())];
  return r;
}
function ne(l, { getChildren: e, getIndex: r }) {
  return {
    append: (o, s) => {
      const t = e(o, !1), a = t[t.length - 1];
      let p = r(o) + 1;
      a && (p = r(a) + 1), o.expanded = !0, o.isLeaf = !1;
      const c = L({
        ...s,
        level: o.level + 1,
        parentId: o.id,
        isLeaf: !0
      });
      c.value.id === void 0 && (c.value.id = ee()), l.value.splice(p, 0, c.value);
    },
    remove: (o) => {
      const s = e(o).map((t) => t.id);
      l.value = l.value.filter(
        (t) => t.id !== o.id && !s.includes(t.id)
      );
    }
  };
}
function te(l, e, r, d) {
  const { lazyLoadNodes: n } = d;
  return {
    toggleNode: (s) => {
      const t = l.value.find((a) => a.id === s.id);
      t && (t.expanded = !t.expanded, t.expanded && n(t));
    }
  };
}
function le(l, e, r) {
  const d = R(l), n = L(O(d)), o = W(n), s = [te, Q, ne], t = Z(n, o, r), a = X(e.draggable, n, o);
  return {
    ...s.reduce((c, v) => ({ ...c, ...v(n, o, r, t) }), {}),
    ...o,
    ...a,
    treeData: n
  };
}
const V = {
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
}, oe = {
  ...V,
  treeNode: {
    type: Object,
    required: !0
  }
}, B = 32, z = 24, ae = P({
  name: "STreeNode",
  props: oe,
  setup(l, {
    slots: e
  }) {
    const {
      lineable: r,
      checkable: d,
      treeNode: n,
      operable: o,
      draggable: s
    } = _(l), {
      toggleCheckNode: t,
      getChildrenExpanded: a,
      append: p,
      remove: c,
      onDragend: v,
      onDragleave: m,
      onDragover: b,
      onDragstart: D,
      onDrop: i
    } = q("TREE_UTILS"), u = L(!1), f = () => {
      u.value ? u.value = !1 : u.value = !0;
    };
    let h = {};
    return s.value && (h = {
      draggable: !0,
      onDragend: (x) => v(x),
      onDragleave: (x) => m(x),
      onDragover: (x) => b(x),
      onDragstart: (x) => D(x, n.value),
      onDrop: (x) => i(x, n.value)
    }), () => {
      var x, y, N;
      return g("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${z * (n.value.level - 1)}px`
        },
        onMouseenter: f,
        onMouseleave: f
      }, [!n.value.isLeaf && n.value.expanded && r.value && g("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${B * a(n.value).length}px`,
          left: `${z * (n.value.level - 1) + 9}px`,
          top: `${B}px`
        }
      }, null), g("div", $({
        class: "s-tree__node--content"
      }, h), [n.value.isLeaf ? g("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (x = e.icon) == null ? void 0 : x.call(e), d.value && U(g("input", {
        type: "checkbox",
        "onUpdate:modelValue": (T) => n.value.checked = T,
        onClick: () => {
          t(n.value);
        }
      }, null), [[Y, n.value.checked]]), (y = e.content) == null ? void 0 : y.call(e), o.value && u.value && g("span", {
        class: "inline-flex ml-1"
      }, [g("svg", {
        onClick: () => {
          p(n.value, {
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
          c(n.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [g("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), n.value.loading && ((N = e.loading) == null ? void 0 : N.call(e))])]);
    };
  }
}), re = (l, {
  emit: e
}) => g("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: l.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [g("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const de = {
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
const se = P({
  name: "SVirtualList",
  props: de,
  setup(l, {
    slots: e
  }) {
    const {
      data: r,
      itemHeight: d,
      component: n
    } = _(l), o = L(), s = L(0), t = L(0), a = L(0), p = C(() => Math.ceil(s.value / d.value)), c = C(() => r.value.slice(a.value, Math.min(a.value + p.value, r.value.length)));
    A(() => {
      var m;
      s.value = (m = o.value) == null ? void 0 : m.clientHeight;
    });
    const v = (m) => {
      const {
        scrollTop: b
      } = m.target;
      a.value = Math.floor(b / d.value), t.value = b - b % d.value;
    };
    return () => g(n.value, {
      class: "s-virtual-list__container",
      ref: o,
      onScroll: v
    }, {
      default: () => [g("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${r.value.length * d.value}px`
        }
      }, null), g("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${t.value}px, 0)`
        }
      }, [c.value.map((m, b) => {
        var D;
        return (D = e.default) == null ? void 0 : D.call(e, {
          item: m,
          index: b
        });
      })])]
    });
  }
}), H = P({
  name: "STree",
  props: V,
  emits: ["lazy-load"],
  setup(l, e) {
    const {
      data: r,
      height: d,
      itemHeight: n
    } = _(l), {
      slots: o
    } = e, s = le(r, l, e);
    return G("TREE_UTILS", s), () => {
      const t = (a) => g(ae, $(l, {
        treeNode: a
      }), {
        content: () => o.content ? o.content(a) : a.label,
        icon: () => o.icon ? o.icon({
          nodeData: a,
          toggleNode: s.toggleNode
        }) : g(re, {
          expanded: !!a.expanded,
          onClick: () => s.toggleNode(a)
        }, null),
        loading: () => o.loading ? o.loading({
          nodeData: s
        }) : g("span", {
          class: "ml-1"
        }, [F("loading...")])
      });
      return g("div", {
        class: "s-tree"
      }, [d != null && d.value ? g("div", {
        style: {
          height: `${d.value}px`
        }
      }, [g(se, {
        data: s.expandedTree.value,
        itemHeight: n.value
      }, {
        default: ({
          item: a
        }) => t(a)
      })]) : s.expandedTree.value.map((a) => t(a))]);
    };
  }
}), ce = {
  install(l) {
    l.component(H.name, H);
  }
};
const ie = [
  K,
  ce
], pe = {
  version: "0.0.1",
  install(l) {
    ie.forEach((e) => l.use(e));
  }
};
export {
  M as Button,
  H as Tree,
  pe as default
};
