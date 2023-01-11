import { computed as L, reactive as $, ref as T, unref as j, defineComponent as _, createVNode as i, toRefs as B, inject as q, mergeProps as z, Fragment as A, onMounted as R, provide as F, createTextVNode as U } from "vue";
function E(o, e = 0, c = []) {
  return e++, o.reduce((v, n) => {
    const l = { ...n };
    l.level = e, c.length > 0 && c[c.length - 1].level >= e && c.pop(), c.push(l);
    const s = c[c.length - 2];
    if (s && (l.parentId = s.id), l.children) {
      const t = E(l.children, e, c);
      return delete l.children, v.concat(l, t);
    } else
      return l.isLeaf === void 0 && (l.isLeaf = !0), v.concat(l);
  }, []);
}
function Y(o, { getChildren: e, getParent: c }) {
  const v = (l) => {
    l.checked = !l.checked, l.inChecked = !1, e(l).forEach((s) => {
      s.checked = l.checked;
    }), n(l);
  }, n = (l) => {
    const s = c(l);
    if (!s)
      return;
    const t = e(s, !0), a = t.every((r) => r.checked);
    s.checked = a;
    const d = t.some((r) => r.checked);
    a ? s.inChecked = !1 : d ? s.inChecked = !0 : s.inChecked = !1, s.parentId && n(s);
  };
  return {
    toggleCheckNode: v
  };
}
function G(o) {
  const e = L(() => {
    let t = [];
    const a = [];
    for (const d of o.value)
      t.map((r) => r.id).includes(d.id) || (d.expanded !== !0 && (t = c(d)), a.push(d));
    return a;
  }), c = (t, a = !0) => {
    const d = [], r = o.value.findIndex((g) => g.id === t.id);
    for (let g = r + 1; g < o.value.length && t.level < o.value[g].level; g++)
      (a || t.level === o.value[g].level - 1) && d.push(o.value[g]);
    return d;
  }, v = (t, a = []) => {
    const d = c(t, !1);
    return a.push(...d), d.forEach((r) => {
      r.expanded && v(r, a);
    }), a;
  };
  return {
    expandedTree: e,
    getChildren: c,
    getChildrenExpanded: v,
    getIndex: (t) => t ? o.value.findIndex((a) => a.id === t.id) : -1,
    getNode: (t) => o.value.find((a) => a.id === t.id),
    getParent: (t) => o.value.find((a) => a.id === t.parentId)
  };
}
const P = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function J(o, e, { getChildren: c, getParent: v }) {
  const n = $({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), l = L(
    () => e.value.reduce(
      (u, p) => ({
        ...u,
        [p.id]: p
      }),
      {}
    )
  ), s = (u) => {
    u == null || u.classList.remove(...Object.values(P));
  }, t = (u, p) => {
    var h;
    const f = (h = l.value[u]) == null ? void 0 : h.parentId;
    return f === p ? !0 : f !== void 0 ? t(f, p) : !1;
  }, a = () => {
    n.dropType = void 0, n.draggingNode = null, n.draggingTreeNode = null;
  }, d = (u, p) => {
    var f;
    u.stopPropagation(), n.draggingNode = u.target, n.draggingTreeNode = p, (f = u.dataTransfer) == null || f.setData("dragNodeId", p.id);
  }, r = (u) => {
    if (u.preventDefault(), u.stopPropagation(), !!n.draggingNode && o) {
      if (u.dataTransfer && (u.dataTransfer.dropEffect = "move"), !e)
        return;
      let p = {};
      typeof o == "object" ? p = o : o === !0 && (p = { dropInner: !0 });
      const { dropPrev: f, dropNext: h, dropInner: x } = p;
      let b;
      const k = f ? x ? 0.25 : h ? 0.45 : 1 : -1, C = h ? x ? 0.75 : f ? 0.55 : 0 : 1, N = u.currentTarget, I = N == null ? void 0 : N.getBoundingClientRect(), O = u.clientY - ((I == null ? void 0 : I.top) || 0);
      if (O < ((I == null ? void 0 : I.height) || 0) * k ? b = "dropPrev" : O > ((I == null ? void 0 : I.height) || 0) * C ? b = "dropNext" : x ? b = "dropInner" : b = void 0, b) {
        const D = N == null ? void 0 : N.classList;
        D && (D.contains(P[b]) || (s(N), D.add(P[b])));
      } else
        s(N);
      n.dropType = b;
    }
  }, g = (u) => {
    u.stopPropagation(), n.draggingNode && s(u.currentTarget);
  }, m = (u, p) => {
    var h;
    if (u.preventDefault(), u.stopPropagation(), s(u.currentTarget), !n.draggingNode || !o)
      return;
    const f = (h = u.dataTransfer) == null ? void 0 : h.getData("dragNodeId");
    if (f) {
      const x = t(p.id, f);
      if (f === p.id || x)
        return;
      n.dropType && y(f, p), a();
    }
  };
  function y(u, p) {
    const f = e.value.find((h) => h.id === u);
    if (f) {
      let h;
      const x = c(f), b = v(f);
      if (n.dropType === "dropInner") {
        h = {
          ...f,
          parentId: p.id,
          level: p.level + 1
        };
        const k = e.value.indexOf(p);
        e.value.splice(k + 1, 0, h), p.isLeaf = void 0;
        const C = e.value.indexOf(f);
        e.value.splice(C, 1);
      } else if (n.dropType === "dropNext") {
        h = {
          ...f,
          parentId: p.parentId,
          level: p.level
        };
        const k = e.value.indexOf(p), C = c(p, !0).length;
        e.value.splice(
          k + C + 1,
          0,
          h
        );
        const N = e.value.indexOf(f);
        e.value.splice(N, 1);
      } else if (n.dropType === "dropPrev") {
        h = {
          ...f,
          parentId: p.parentId,
          level: p.level
        };
        const k = e.value.indexOf(p);
        e.value.splice(k, 0, h);
        const C = e.value.indexOf(f);
        e.value.splice(C, 1);
      }
      n.dropType = "dropInner", x.forEach((k) => y(k.id, h)), b && c(b).length === 0 && (b.isLeaf = !0);
    }
  }
  return {
    onDragstart: d,
    onDragover: r,
    onDragleave: g,
    onDrop: m,
    onDragend: (u) => {
      u.preventDefault(), u.stopPropagation(), a();
    }
  };
}
function K(o, { getNode: e, getIndex: c, getChildren: v }, { emit: n }) {
  const l = (d) => {
    const r = e(d);
    r && r.isLeaf === !1 && !r.childNodeCount && (r.loading = !0, n("lazy-load", d, s));
  }, s = (d) => {
    const r = e(d.node);
    if (r) {
      r.loading = !1;
      const g = T(
        E(d.treeItems, r.level)
      );
      t(r, g), a(r, g);
      const m = v(r);
      r.childNodeCount = m.length;
    }
  }, t = (d, r) => {
    r.value.forEach((g) => {
      g.level - 1 === d.level && !g.parentId && (g.parentId = d.id);
    });
  }, a = (d, r) => {
    const g = c(d);
    g && o.value.splice(g + 1, 0, ...r.value);
  };
  return {
    lazyLoadNodes: l
  };
}
function Q(o = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let c = "";
  for (let v = 0; v < o; v++)
    c += e[parseInt((Math.random() * e.length).toString())];
  return c;
}
function W(o, { getChildren: e, getIndex: c }) {
  return {
    append: (l, s) => {
      const t = e(l, !1), a = t[t.length - 1];
      let d = c(l) + 1;
      a && (d = c(a) + 1), l.expanded = !0, l.isLeaf = !1;
      const r = T({
        ...s,
        level: l.level + 1,
        parentId: l.id,
        isLeaf: !0
      });
      r.value.id === void 0 && (r.value.id = Q()), o.value.splice(d, 0, r.value);
    },
    remove: (l) => {
      const s = e(l).map((t) => t.id);
      o.value = o.value.filter(
        (t) => t.id !== l.id && !s.includes(t.id)
      );
    }
  };
}
function X(o, e, c, v) {
  const { lazyLoadNodes: n } = v;
  return {
    toggleNode: (s) => {
      const t = o.value.find((a) => a.id === s.id);
      t && (t.expanded = !t.expanded, t.expanded && n(t));
    }
  };
}
function Z(o, e, c) {
  const v = j(o), n = T(E(v)), l = G(n), s = [X, Y, W], t = K(n, l, c), a = J(e.draggable, n, l);
  return {
    ...s.reduce((r, g) => ({ ...r, ...g(n, l, c, t) }), {}),
    ...l,
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
}, ee = {
  onClick: {
    type: Function,
    required: !0
  }
};
const ne = _({
  name: "SBaseSelectAll",
  props: ee,
  setup(o) {
    return () => i("label", {
      class: "s-base-select-all is-checked"
    }, [i("span", {
      class: "s-base-select-all__input is-checked"
    }, [i("span", {
      class: "s-base-select-all__inner"
    }, null), i("input", {
      type: "checkbox",
      "aria-hidden": "false",
      class: "s-base-select-all__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        o.onClick();
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
  setup(o) {
    return () => i("label", {
      class: "s-base-selection-box"
    }, [i("span", {
      class: "s-base-selection-box__input"
    }, [i("span", {
      class: "s-base-selection-box__inner"
    }, null), i("input", {
      type: "checkbox",
      "aria-hidden": "false",
      class: "s-base-selection-box__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        o.onClick();
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
  setup(o) {
    return () => i("label", {
      class: "s-base-semi-selection",
      "aria-controls": "undefined"
    }, [i("span", {
      class: "s-base-semi-selection__input is-indeterminate",
      tabindex: "0",
      role: "checkbox",
      "aria-checked": "mixed"
    }, [i("span", {
      class: "s-base-semi-selection__inner"
    }, null), i("input", {
      type: "checkbox",
      "aria-hidden": "true",
      class: "s-base-semi-selection__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        o.onClick();
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
  setup(o, {
    slots: e
  }) {
    const {
      lineable: c,
      checkable: v,
      treeNode: n,
      operable: l,
      draggable: s
    } = B(o), {
      toggleCheckNode: t,
      getChildrenExpanded: a,
      append: d,
      remove: r,
      onDragend: g,
      onDragleave: m,
      onDragover: y,
      onDragstart: S,
      onDrop: u
    } = q("TREE_UTILS"), p = T(!1), f = () => {
      p.value ? p.value = !1 : p.value = !0;
    };
    let h = {};
    return s.value && (h = {
      draggable: !0,
      onDragend: (x) => g(x),
      onDragleave: (x) => m(x),
      onDragover: (x) => y(x),
      onDragstart: (x) => S(x, n.value),
      onDrop: (x) => u(x, n.value)
    }), () => {
      var x, b, k;
      return i("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${M * (n.value.level - 1)}px`
        },
        onMouseenter: f,
        onMouseleave: f
      }, [!n.value.isLeaf && n.value.expanded && c.value && i("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${w * a(n.value).length}px`,
          left: `${M * (n.value.level - 1) + 9}px`,
          top: `${w}px`
        }
      }, null), i("div", z({
        class: "s-tree__node--content"
      }, h), [n.value.isLeaf ? i("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (x = e.icon) == null ? void 0 : x.call(e), v.value && i(A, null, [n.value.inChecked ? i(ae, {
        onClick: () => t(n.value)
      }, null) : n.value.checked ? i(ne, {
        onClick: () => t(n.value)
      }, null) : i(te, {
        onClick: () => t(n.value)
      }, null)]), (b = e.content) == null ? void 0 : b.call(e), l.value && p.value && i("span", {
        class: "inline-flex ml-1"
      }, [i("svg", {
        onClick: () => {
          d(n.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [i("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), i("svg", {
        onClick: () => {
          r(n.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [i("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), n.value.loading && ((k = e.loading) == null ? void 0 : k.call(e))])]);
    };
  }
}), ce = (o, {
  emit: e
}) => i("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: o.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [i("path", {
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
  setup(o, {
    slots: e
  }) {
    const {
      data: c,
      itemHeight: v,
      component: n
    } = B(o), l = T(), s = T(0), t = T(0), a = T(0), d = L(() => Math.ceil(s.value / v.value)), r = L(() => c.value.slice(a.value, Math.min(a.value + d.value, c.value.length)));
    R(() => {
      var m;
      s.value = (m = l.value) == null ? void 0 : m.clientHeight;
    });
    const g = (m) => {
      const {
        scrollTop: y
      } = m.target;
      a.value = Math.floor(y / v.value), t.value = y - y % v.value;
    };
    return () => i(n.value, {
      class: "s-virtual-list__container",
      ref: l,
      onScroll: g
    }, {
      default: () => [i("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${c.value.length * v.value}px`
        }
      }, null), i("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${t.value}px, 0)`
        }
      }, [r.value.map((m, y) => {
        var S;
        return (S = e.default) == null ? void 0 : S.call(e, {
          item: m,
          index: y
        });
      })])]
    });
  }
}), H = _({
  name: "STree",
  props: V,
  emits: ["lazy-load"],
  setup(o, e) {
    const {
      data: c,
      height: v,
      itemHeight: n
    } = B(o), {
      slots: l
    } = e, s = Z(c, o, e);
    return F("TREE_UTILS", s), () => {
      const t = (a) => i(re, z(o, {
        treeNode: a
      }), {
        content: () => l.content ? l.content(a) : a.label,
        icon: () => l.icon ? l.icon({
          nodeData: a,
          toggleNode: s.toggleNode
        }) : i(ce, {
          expanded: !!a.expanded,
          onClick: () => s.toggleNode(a)
        }, null),
        loading: () => l.loading ? l.loading({
          nodeData: s
        }) : i("span", {
          class: "ml-1"
        }, [U("loading...")])
      });
      return i("div", {
        class: "s-tree"
      }, [v != null && v.value ? i("div", {
        style: {
          height: `${v.value}px`
        }
      }, [i(de, {
        data: s.expandedTree.value,
        itemHeight: n.value
      }, {
        default: ({
          item: a
        }) => t(a)
      })]) : s.expandedTree.value.map((a) => t(a))]);
    };
  }
}), pe = {
  install(o) {
    o.component(H.name, H);
  }
};
export {
  H as Tree,
  pe as default
};
