import { computed as L, reactive as $, ref as C, unref as j, defineComponent as _, createVNode as d, toRefs as B, inject as q, mergeProps as z, Fragment as A, onMounted as R, provide as F, createTextVNode as U } from "vue";
function E(a, n = 0, c = []) {
  return n++, a.reduce((f, t) => {
    const o = { ...t };
    o.level = n, c.length > 0 && c[c.length - 1].level >= n && c.pop(), c.push(o);
    const r = c[c.length - 2];
    if (r && (o.parentId = r.id), o.children) {
      const l = E(o.children, n, c);
      return delete o.children, f.concat(o, l);
    } else
      return o.isLeaf === void 0 && (o.isLeaf = !0), f.concat(o);
  }, []);
}
function Y(a, { getChildren: n, getParent: c }) {
  const f = (o) => {
    o.checked = !o.checked, o.inChecked = !1, n(o).forEach((r) => {
      r.checked = o.checked;
    }), t(o);
  }, t = (o) => {
    const r = c(o);
    if (!r)
      return;
    const l = n(r, !0), i = l.every((s) => s.checked);
    r.checked = i;
    const e = l.some((s) => s.checked);
    i ? r.inChecked = !1 : e ? r.inChecked = !0 : r.inChecked = !1, r.parentId && t(r);
  };
  return {
    toggleCheckNode: f
  };
}
function G(a) {
  const n = L(() => {
    let l = [];
    const i = [];
    for (const e of a.value)
      l.map((s) => s.id).includes(e.id) || (e.expanded !== !0 && (l = c(e)), i.push(e));
    return i;
  }), c = (l, i = !0) => {
    const e = [], s = a.value.findIndex((g) => g.id === l.id);
    for (let g = s + 1; g < a.value.length && l.level < a.value[g].level; g++)
      (i || l.level === a.value[g].level - 1) && e.push(a.value[g]);
    return e;
  }, f = (l, i = []) => {
    const e = c(l, !1);
    return i.push(...e), e.forEach((s) => {
      s.expanded && f(s, i);
    }), i;
  };
  return {
    expandedTree: n,
    getChildren: c,
    getChildrenExpanded: f,
    getIndex: (l) => l ? a.value.findIndex((i) => i.id === l.id) : -1,
    getNode: (l) => a.value.find((i) => i.id === l.id),
    getParent: (l) => a.value.find((i) => i.id === l.parentId)
  };
}
const P = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function J(a, n, { getChildren: c, getParent: f }) {
  const t = $({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), o = L(
    () => n.value.reduce(
      (u, p) => ({
        ...u,
        [p.id]: p
      }),
      {}
    )
  ), r = (u) => {
    u == null || u.classList.remove(...Object.values(P));
  }, l = (u, p) => {
    var h;
    const v = (h = o.value[u]) == null ? void 0 : h.parentId;
    return v === p ? !0 : v !== void 0 ? l(v, p) : !1;
  }, i = () => {
    t.dropType = void 0, t.draggingNode = null, t.draggingTreeNode = null;
  }, e = (u, p) => {
    var v;
    u.stopPropagation(), t.draggingNode = u.target, t.draggingTreeNode = p, (v = u.dataTransfer) == null || v.setData("dragNodeId", p.id);
  }, s = (u) => {
    if (u.preventDefault(), u.stopPropagation(), !!t.draggingNode && a) {
      if (u.dataTransfer && (u.dataTransfer.dropEffect = "move"), !n)
        return;
      let p = {};
      typeof a == "object" ? p = a : a === !0 && (p = { dropInner: !0 });
      const { dropPrev: v, dropNext: h, dropInner: x } = p;
      let b;
      const m = v ? x ? 0.25 : h ? 0.45 : 1 : -1, T = h ? x ? 0.75 : v ? 0.55 : 0 : 1, N = u.currentTarget, I = N == null ? void 0 : N.getBoundingClientRect(), O = u.clientY - ((I == null ? void 0 : I.top) || 0);
      if (O < ((I == null ? void 0 : I.height) || 0) * m ? b = "dropPrev" : O > ((I == null ? void 0 : I.height) || 0) * T ? b = "dropNext" : x ? b = "dropInner" : b = void 0, b) {
        const D = N == null ? void 0 : N.classList;
        D && (D.contains(P[b]) || (r(N), D.add(P[b])));
      } else
        r(N);
      t.dropType = b;
    }
  }, g = (u) => {
    u.stopPropagation(), t.draggingNode && r(u.currentTarget);
  }, k = (u, p) => {
    var h;
    if (u.preventDefault(), u.stopPropagation(), r(u.currentTarget), !t.draggingNode || !a)
      return;
    const v = (h = u.dataTransfer) == null ? void 0 : h.getData("dragNodeId");
    if (v) {
      const x = l(p.id, v);
      if (v === p.id || x)
        return;
      t.dropType && y(v, p), i();
    }
  };
  function y(u, p) {
    const v = n.value.find((h) => h.id === u);
    if (v) {
      let h;
      const x = c(v), b = f(v);
      if (t.dropType === "dropInner") {
        h = {
          ...v,
          parentId: p.id,
          level: p.level + 1
        };
        const m = n.value.indexOf(p);
        n.value.splice(m + 1, 0, h), p.isLeaf = void 0;
        const T = n.value.indexOf(v);
        n.value.splice(T, 1);
      } else if (t.dropType === "dropNext") {
        h = {
          ...v,
          parentId: p.parentId,
          level: p.level
        };
        const m = n.value.indexOf(p), T = c(p, !0).length;
        n.value.splice(
          m + T + 1,
          0,
          h
        );
        const N = n.value.indexOf(v);
        n.value.splice(N, 1);
      } else if (t.dropType === "dropPrev") {
        h = {
          ...v,
          parentId: p.parentId,
          level: p.level
        };
        const m = n.value.indexOf(p);
        n.value.splice(m, 0, h);
        const T = n.value.indexOf(v);
        n.value.splice(T, 1);
      }
      t.dropType = "dropInner", x.forEach((m) => y(m.id, h)), b && c(b).length === 0 && (b.isLeaf = !0);
    }
  }
  return {
    onDragstart: e,
    onDragover: s,
    onDragleave: g,
    onDrop: k,
    onDragend: (u) => {
      u.preventDefault(), u.stopPropagation(), i();
    }
  };
}
function K(a, { getNode: n, getIndex: c, getChildren: f }, { emit: t }) {
  const o = (e) => {
    const s = n(e);
    s && s.isLeaf === !1 && !s.childNodeCount && (s.loading = !0, t("lazy-load", e, r));
  }, r = (e) => {
    const s = n(e.node);
    if (s) {
      s.loading = !1;
      const g = C(
        E(e.treeItems, s.level)
      );
      l(s, g), i(s, g);
      const k = f(s);
      s.childNodeCount = k.length;
    }
  }, l = (e, s) => {
    s.value.forEach((g) => {
      g.level - 1 === e.level && !g.parentId && (g.parentId = e.id);
    });
  }, i = (e, s) => {
    const g = c(e);
    g && a.value.splice(g + 1, 0, ...s.value);
  };
  return {
    lazyLoadNodes: o
  };
}
function Q(a = 8) {
  const n = "abcdefghijklmnopqrstuvwxyz0123456789";
  let c = "";
  for (let f = 0; f < a; f++)
    c += n[parseInt((Math.random() * n.length).toString())];
  return c;
}
function W(a, { getChildren: n, getIndex: c }) {
  return {
    append: (o, r) => {
      const l = n(o, !1), i = l[l.length - 1];
      let e = c(o) + 1;
      i && (e = c(i) + 1), o.expanded = !0, o.isLeaf = !1;
      const s = C({
        ...r,
        level: o.level + 1,
        parentId: o.id,
        isLeaf: !0
      });
      s.value.id === void 0 && (s.value.id = Q()), a.value.splice(e, 0, s.value);
    },
    remove: (o) => {
      const r = n(o).map((l) => l.id);
      a.value = a.value.filter(
        (l) => l.id !== o.id && !r.includes(l.id)
      );
    }
  };
}
function X(a, n, c, f) {
  const { lazyLoadNodes: t } = f;
  return {
    toggleNode: (r, l, i = !1) => {
      if (r.stopPropagation(), i)
        a.value.forEach((e) => {
          e.level === l.level && e.id !== l.id && (e.expanded = !1), e.id === l.id && (e.expanded = !e.expanded), e.expanded && t(e);
        });
      else {
        const e = a.value.find((s) => s.id === l.id);
        e && (e.expanded = !e.expanded, e.expanded && t(e));
      }
    }
  };
}
function Z(a, n, c) {
  const f = j(a), t = C(E(f)), o = G(t), r = [X, Y, W], l = K(t, o, c), i = J(n.draggable, t, o);
  return {
    ...r.reduce((s, g) => ({ ...s, ...g(t, o, c, l) }), {}),
    ...o,
    ...i,
    treeData: t
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
  setup(a) {
    return () => d("label", {
      class: "s-base-select-all is-checked"
    }, [d("span", {
      class: "s-base-select-all__input is-checked"
    }, [d("span", {
      class: "s-base-select-all__inner"
    }, null), d("input", {
      type: "checkbox",
      "aria-hidden": "false",
      class: "s-base-select-all__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        a.onClick();
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
  setup(a) {
    return () => d("label", {
      class: "s-base-selection-box"
    }, [d("span", {
      class: "s-base-selection-box__input"
    }, [d("span", {
      class: "s-base-selection-box__inner"
    }, null), d("input", {
      type: "checkbox",
      "aria-hidden": "false",
      class: "s-base-selection-box__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        a.onClick();
      }
    }, null)])]);
  }
}), ae = {
  onClick: {
    type: Function,
    required: !0
  }
};
const oe = _({
  name: "SBaseSemiSelection",
  props: ae,
  setup(a) {
    return () => d("label", {
      class: "s-base-semi-selection",
      "aria-controls": "undefined"
    }, [d("span", {
      class: "s-base-semi-selection__input is-indeterminate",
      tabindex: "0",
      role: "checkbox",
      "aria-checked": "mixed"
    }, [d("span", {
      class: "s-base-semi-selection__inner"
    }, null), d("input", {
      type: "checkbox",
      "aria-hidden": "true",
      class: "s-base-semi-selection__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        a.onClick();
      }
    }, null)])]);
  }
}), se = {
  ...V,
  treeNode: {
    type: Object,
    required: !0
  }
}, w = 34, M = 24, re = _({
  name: "STreeNode",
  props: se,
  setup(a, {
    slots: n
  }) {
    const {
      lineable: c,
      checkable: f,
      treeNode: t,
      operable: o,
      draggable: r
    } = B(a), {
      toggleCheckNode: l,
      getChildrenExpanded: i,
      append: e,
      remove: s,
      onDragend: g,
      onDragleave: k,
      onDragover: y,
      onDragstart: S,
      onDrop: u
    } = q("TREE_UTILS"), p = C(!1), v = () => {
      p.value ? p.value = !1 : p.value = !0;
    };
    let h = {};
    return r.value && (h = {
      draggable: !0,
      onDragend: (x) => g(x),
      onDragleave: (x) => k(x),
      onDragover: (x) => y(x),
      onDragstart: (x) => S(x, t.value),
      onDrop: (x) => u(x, t.value)
    }), () => {
      var x, b, m;
      return d("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${M * (t.value.level - 1)}px`
        },
        onMouseenter: v,
        onMouseleave: v
      }, [!t.value.isLeaf && t.value.expanded && c.value && d("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${w * i(t.value).length}px`,
          left: `${M * (t.value.level - 1) + 9}px`,
          top: `${w}px`
        }
      }, null), d("div", z({
        class: "s-tree__node--content"
      }, h), [t.value.isLeaf ? d("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (x = n.icon) == null ? void 0 : x.call(n), f.value && d(A, null, [t.value.inChecked ? d(oe, {
        onClick: () => l(t.value)
      }, null) : t.value.checked ? d(ne, {
        onClick: () => l(t.value)
      }, null) : d(te, {
        onClick: () => l(t.value)
      }, null)]), (b = n.content) == null ? void 0 : b.call(n), o.value && p.value && d("span", {
        class: "inline-flex ml-1"
      }, [d("svg", {
        onClick: () => {
          e(t.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [d("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), d("svg", {
        onClick: () => {
          s(t.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [d("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), t.value.loading && ((m = n.loading) == null ? void 0 : m.call(n))])]);
    };
  }
}), ce = (a, {
  emit: n
}) => d("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: a.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => n("onClick")
}, [d("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const ie = {
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
  props: ie,
  setup(a, {
    slots: n
  }) {
    const {
      data: c,
      itemHeight: f,
      component: t
    } = B(a), o = C(), r = C(0), l = C(0), i = C(0), e = L(() => Math.ceil(r.value / f.value)), s = L(() => c.value.slice(i.value, Math.min(i.value + e.value, c.value.length)));
    R(() => {
      var k;
      r.value = (k = o.value) == null ? void 0 : k.clientHeight;
    });
    const g = (k) => {
      const {
        scrollTop: y
      } = k.target;
      i.value = Math.floor(y / f.value), l.value = y - y % f.value;
    };
    return () => d(t.value, {
      class: "s-virtual-list__container",
      ref: o,
      onScroll: g
    }, {
      default: () => [d("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${c.value.length * f.value}px`
        }
      }, null), d("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${l.value}px, 0)`
        }
      }, [s.value.map((k, y) => {
        var S;
        return (S = n.default) == null ? void 0 : S.call(n, {
          item: k,
          index: y
        });
      })])]
    });
  }
}), H = _({
  name: "STree",
  props: V,
  emits: ["lazy-load"],
  setup(a, n) {
    const {
      data: c,
      height: f,
      itemHeight: t,
      accordion: o
    } = B(a), {
      slots: r
    } = n, l = Z(c, a, n);
    return F("TREE_UTILS", l), () => {
      const i = (e) => d(re, z(a, {
        treeNode: e,
        onClick: o.value ? (s) => l.toggleNode(s, e, o.value) : ""
      }), {
        content: () => r.content ? r.content(e) : e.label,
        icon: () => r.icon ? r.icon({
          nodeData: e,
          toggleNode: l.toggleNode
        }) : d(ce, {
          expanded: !!e.expanded,
          onClick: (s) => l.toggleNode(s, e, o.value)
        }, null),
        loading: () => r.loading ? r.loading({
          nodeData: l
        }) : d("span", {
          class: "ml-1"
        }, [U("loading...")])
      });
      return d("div", {
        class: "s-tree"
      }, [f != null && f.value ? d("div", {
        style: {
          height: `${f.value}px`
        }
      }, [d(de, {
        data: l.expandedTree.value,
        itemHeight: t.value
      }, {
        default: ({
          item: e
        }) => i(e)
      })]) : l.expandedTree.value.map((e) => i(e))]);
    };
  }
}), pe = {
  install(a) {
    a.component(H.name, H);
  }
};
export {
  H as Tree,
  pe as default
};
