import { computed as L, reactive as $, ref as N, unref as j, defineComponent as _, createVNode as d, toRefs as B, inject as R, mergeProps as z, Fragment as q, onMounted as A, provide as F, createTextVNode as U } from "vue";
function E(t, l = 0, i = []) {
  return l++, t.reduce((f, o) => {
    const s = { ...o };
    s.level = l, i.length > 0 && i[i.length - 1].level >= l && i.pop(), i.push(s);
    const c = i[i.length - 2];
    if (c && (s.parentId = c.id), s.children) {
      const n = E(s.children, l, i);
      return delete s.children, f.concat(s, n);
    } else
      return s.isLeaf === void 0 && (s.isLeaf = !0), f.concat(s);
  }, []);
}
function Y(t, { getChildren: l, getParent: i }, { emit: f }) {
  const o = (c) => {
    c.checked = !c.checked, l(c).forEach((e) => {
      e.checked = c.checked, e.inChecked = l(c, !0).every(
        (a) => a.inChecked
      );
    }), c.inChecked = !1, s(c);
    const n = t.value.map((e) => e.checked ? e.id : "").filter((e) => e), r = t.value.map((e) => e.checked ? e : "").filter((e) => e);
    f("check", c, n, r);
  }, s = (c) => {
    const n = i(c);
    if (!n)
      return;
    const r = l(n, !0), e = r.every((v) => v.checked);
    n.checked = e;
    const a = r.some((v) => v.checked);
    e ? n.inChecked = !1 : a ? n.inChecked = !0 : n.inChecked = !1, n.parentId && s(n);
  };
  return {
    toggleCheckNode: o
  };
}
function G(t) {
  const l = L(() => {
    let n = [];
    const r = [];
    for (const e of t.value)
      n.map((a) => a.id).includes(e.id) || (e.expanded !== !0 && (n = i(e)), r.push(e));
    return r;
  }), i = (n, r = !0) => {
    const e = [], a = t.value.findIndex((v) => v.id === n.id);
    for (let v = a + 1; v < t.value.length && n.level < t.value[v].level; v++)
      (r || n.level === t.value[v].level - 1) && e.push(t.value[v]);
    return e;
  }, f = (n, r = []) => {
    const e = i(n, !1);
    return r.push(...e), e.forEach((a) => {
      a.expanded && f(a, r);
    }), r;
  };
  return {
    expandedTree: l,
    getChildren: i,
    getChildrenExpanded: f,
    getIndex: (n) => n ? t.value.findIndex((r) => r.id === n.id) : -1,
    getNode: (n) => t.value.find((r) => r.id === n.id),
    getParent: (n) => t.value.find((r) => r.id === n.parentId)
  };
}
const P = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function K(t, l, { getChildren: i, getParent: f }) {
  const o = $({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), s = L(
    () => l.value.reduce(
      (u, p) => ({
        ...u,
        [p.id]: p
      }),
      {}
    )
  ), c = (u) => {
    u == null || u.classList.remove(...Object.values(P));
  }, n = (u, p) => {
    var h;
    const g = (h = s.value[u]) == null ? void 0 : h.parentId;
    return g === p ? !0 : g !== void 0 ? n(g, p) : !1;
  }, r = () => {
    o.dropType = void 0, o.draggingNode = null, o.draggingTreeNode = null;
  }, e = (u, p) => {
    var g;
    u.stopPropagation(), o.draggingNode = u.target, o.draggingTreeNode = p, (g = u.dataTransfer) == null || g.setData("dragNodeId", p.id);
  }, a = (u) => {
    if (u.preventDefault(), u.stopPropagation(), !!o.draggingNode && t) {
      if (u.dataTransfer && (u.dataTransfer.dropEffect = "move"), !l)
        return;
      let p = {};
      typeof t == "object" ? p = t : t === !0 && (p = { dropInner: !0 });
      const { dropPrev: g, dropNext: h, dropInner: x } = p;
      let b;
      const m = g ? x ? 0.25 : h ? 0.45 : 1 : -1, T = h ? x ? 0.75 : g ? 0.55 : 0 : 1, I = u.currentTarget, C = I == null ? void 0 : I.getBoundingClientRect(), w = u.clientY - ((C == null ? void 0 : C.top) || 0);
      if (w < ((C == null ? void 0 : C.height) || 0) * m ? b = "dropPrev" : w > ((C == null ? void 0 : C.height) || 0) * T ? b = "dropNext" : x ? b = "dropInner" : b = void 0, b) {
        const D = I == null ? void 0 : I.classList;
        D && (D.contains(P[b]) || (c(I), D.add(P[b])));
      } else
        c(I);
      o.dropType = b;
    }
  }, v = (u) => {
    u.stopPropagation(), o.draggingNode && c(u.currentTarget);
  }, k = (u, p) => {
    var h;
    if (u.preventDefault(), u.stopPropagation(), c(u.currentTarget), !o.draggingNode || !t)
      return;
    const g = (h = u.dataTransfer) == null ? void 0 : h.getData("dragNodeId");
    if (g) {
      const x = n(p.id, g);
      if (g === p.id || x)
        return;
      o.dropType && y(g, p), r();
    }
  };
  function y(u, p) {
    const g = l.value.find((h) => h.id === u);
    if (g) {
      let h;
      const x = i(g), b = f(g);
      if (o.dropType === "dropInner") {
        h = {
          ...g,
          parentId: p.id,
          level: p.level + 1
        };
        const m = l.value.indexOf(p);
        l.value.splice(m + 1, 0, h), p.isLeaf = void 0;
        const T = l.value.indexOf(g);
        l.value.splice(T, 1);
      } else if (o.dropType === "dropNext") {
        h = {
          ...g,
          parentId: p.parentId,
          level: p.level
        };
        const m = l.value.indexOf(p), T = i(p, !0).length;
        l.value.splice(
          m + T + 1,
          0,
          h
        );
        const I = l.value.indexOf(g);
        l.value.splice(I, 1);
      } else if (o.dropType === "dropPrev") {
        h = {
          ...g,
          parentId: p.parentId,
          level: p.level
        };
        const m = l.value.indexOf(p);
        l.value.splice(m, 0, h);
        const T = l.value.indexOf(g);
        l.value.splice(T, 1);
      }
      o.dropType = "dropInner", x.forEach((m) => y(m.id, h)), b && i(b).length === 0 && (b.isLeaf = !0);
    }
  }
  return {
    onDragstart: e,
    onDragover: a,
    onDragleave: v,
    onDrop: k,
    onDragend: (u) => {
      u.preventDefault(), u.stopPropagation(), r();
    }
  };
}
function J(t, { getNode: l, getIndex: i, getChildren: f }, { emit: o }) {
  const s = (e) => {
    const a = l(e);
    a && a.isLeaf === !1 && !a.childNodeCount && (a.loading = !0, o("lazy-load", e, c));
  }, c = (e) => {
    const a = l(e.node);
    if (a) {
      a.loading = !1;
      const v = N(
        E(e.treeItems, a.level)
      );
      n(a, v), r(a, v);
      const k = f(a);
      a.childNodeCount = k.length;
    }
  }, n = (e, a) => {
    a.value.forEach((v) => {
      v.level - 1 === e.level && !v.parentId && (v.parentId = e.id);
    });
  }, r = (e, a) => {
    const v = i(e);
    v && t.value.splice(v + 1, 0, ...a.value);
  };
  return {
    lazyLoadNodes: s
  };
}
function Q(t = 8) {
  const l = "abcdefghijklmnopqrstuvwxyz0123456789";
  let i = "";
  for (let f = 0; f < t; f++)
    i += l[parseInt((Math.random() * l.length).toString())];
  return i;
}
function W(t, { getChildren: l, getIndex: i }) {
  return {
    append: (s, c) => {
      const n = l(s, !1), r = n[n.length - 1];
      let e = i(s) + 1;
      r && (e = i(r) + 1), s.expanded = !0, s.isLeaf = !1;
      const a = N({
        ...c,
        level: s.level + 1,
        parentId: s.id,
        isLeaf: !0
      });
      a.value.id === void 0 && (a.value.id = Q()), t.value.splice(e, 0, a.value);
    },
    remove: (s) => {
      const c = l(s).map((n) => n.id);
      t.value = t.value.filter(
        (n) => n.id !== s.id && !c.includes(n.id)
      );
    }
  };
}
function X(t, l, i, f) {
  const { lazyLoadNodes: o } = f;
  return {
    toggleNode: (c, n, r = !1) => {
      if (c.stopPropagation(), r)
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
function Z(t, l, i) {
  const f = j(t), o = N(E(f)), s = G(o), c = [X, Y, W], n = J(o, s, i), r = K(l.draggable, o, s);
  return {
    ...c.reduce((a, v) => ({ ...a, ...v(o, s, i, n) }), {}),
    ...s,
    ...r,
    treeData: o
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
  setup(t) {
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
        t.onClick();
      }
    }, null)])]);
  }
}), se = {
  ...V,
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
      lineable: i,
      checkable: f,
      treeNode: o,
      operable: s,
      draggable: c
    } = B(t), {
      toggleCheckNode: n,
      getChildrenExpanded: r,
      append: e,
      remove: a,
      onDragend: v,
      onDragleave: k,
      onDragover: y,
      onDragstart: S,
      onDrop: u
    } = R("TREE_UTILS"), p = N(!1), g = () => {
      p.value ? p.value = !1 : p.value = !0;
    };
    let h = {};
    return c.value && (h = {
      draggable: !0,
      onDragend: (x) => v(x),
      onDragleave: (x) => k(x),
      onDragover: (x) => y(x),
      onDragstart: (x) => S(x, o.value),
      onDrop: (x) => u(x, o.value)
    }), () => {
      var x, b, m;
      return d("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${M * (o.value.level - 1)}px`
        },
        onMouseenter: g,
        onMouseleave: g
      }, [!o.value.isLeaf && o.value.expanded && i.value && d("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${O * r(o.value).length}px`,
          left: `${M * (o.value.level - 1) + 9}px`,
          top: `${O}px`
        }
      }, null), d("div", z({
        class: "s-tree__node--content"
      }, h), [o.value.isLeaf ? d("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (x = l.icon) == null ? void 0 : x.call(l), f.value && d(q, null, [o.value.inChecked ? d(ae, {
        onClick: () => n(o.value)
      }, null) : o.value.checked ? d(ne, {
        onClick: () => n(o.value)
      }, null) : d(te, {
        onClick: () => n(o.value)
      }, null)]), (b = l.content) == null ? void 0 : b.call(l), s.value && p.value && d("span", {
        class: "inline-flex ml-1"
      }, [d("svg", {
        onClick: () => {
          e(o.value, {
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
          a(o.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [d("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), o.value.loading && ((m = l.loading) == null ? void 0 : m.call(l))])]);
    };
  }
}), re = (t, {
  emit: l
}) => d("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: t.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => l("onClick")
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
  setup(t, {
    slots: l
  }) {
    const {
      data: i,
      itemHeight: f,
      component: o
    } = B(t), s = N(), c = N(0), n = N(0), r = N(0), e = L(() => Math.ceil(c.value / f.value)), a = L(() => i.value.slice(r.value, Math.min(r.value + e.value, i.value.length)));
    A(() => {
      var k;
      c.value = (k = s.value) == null ? void 0 : k.clientHeight;
    });
    const v = (k) => {
      const {
        scrollTop: y
      } = k.target;
      r.value = Math.floor(y / f.value), n.value = y - y % f.value;
    };
    return () => d(o.value, {
      class: "s-virtual-list__container",
      ref: s,
      onScroll: v
    }, {
      default: () => [d("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${i.value.length * f.value}px`
        }
      }, null), d("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${n.value}px, 0)`
        }
      }, [a.value.map((k, y) => {
        var S;
        return (S = l.default) == null ? void 0 : S.call(l, {
          item: k,
          index: y
        });
      })])]
    });
  }
}), H = _({
  name: "STree",
  props: V,
  emits: ["lazy-load", "check"],
  setup(t, l) {
    const {
      data: i,
      height: f,
      itemHeight: o,
      accordion: s
    } = B(t), {
      slots: c
    } = l, n = Z(i, t, l);
    return F("TREE_UTILS", n), () => {
      const r = (e) => d(ce, z(t, {
        treeNode: e,
        onClick: s.value ? (a) => n.toggleNode(a, e, s.value) : ""
      }), {
        content: () => c.content ? c.content(e) : e.label,
        icon: () => c.icon ? c.icon({
          nodeData: e,
          toggleNode: n.toggleNode
        }) : d(re, {
          expanded: !!e.expanded,
          onClick: (a) => n.toggleNode(a, e, s.value)
        }, null),
        loading: () => c.loading ? c.loading({
          nodeData: n
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
