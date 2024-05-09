import { computed as B, reactive as A, ref as S, unref as q, defineComponent as T, createVNode as p, toRefs as O, inject as F, mergeProps as V, Fragment as K, onMounted as U, provide as Y, createTextVNode as G } from "vue";
function E(e, n = 0, d = []) {
  return n++, e.reduce((u, t) => {
    const s = { ...t };
    s.level = n, d.length > 0 && d[d.length - 1].level >= n && d.pop(), d.push(s);
    const r = d[d.length - 2];
    if (r && (s.parentId = r.id), s.children) {
      const l = E(s.children, n, d);
      return delete s.children, u.concat(s, l);
    } else
      return s.isLeaf === void 0 && (s.isLeaf = !0), u.concat(s);
  }, []);
}
function J(e, { getChildren: n, getParent: d }, { emit: u }) {
  const t = (r) => {
    r.checked = !r.checked, n(r).forEach((c) => {
      c.checked = r.checked, c.inChecked = n(r, !0).every(
        (x) => x.inChecked
      );
    }), r.inChecked = !1, s(r);
    const l = e.value.map((c) => {
      if (c.checked)
        return c.id;
    }).filter(Boolean), i = e.value.map((c) => {
      if (c.checked)
        return c;
    }).filter(Boolean), a = e.value.map((c) => {
      if (c.inChecked)
        return c.id;
    }).filter(Boolean), o = e.value.map((c) => {
      if (c.inChecked)
        return c;
    }).filter(Boolean);
    u(
      "check",
      r,
      l,
      i,
      a,
      o
    );
  }, s = (r) => {
    const l = d(r);
    if (!l)
      return;
    const i = n(l, !0), a = i.every((c) => c.checked);
    l.checked = a;
    const o = i.some((c) => c.checked);
    a ? l.inChecked = !1 : o ? l.inChecked = !0 : l.inChecked = !1, l.parentId && s(l);
  };
  return {
    toggleCheckNode: t
  };
}
function Q(e) {
  const n = B(() => {
    let l = [];
    const i = [];
    for (const a of e.value)
      l.map((o) => o.id).includes(a.id) || (a.expanded !== !0 && (l = d(a)), i.push(a));
    return i;
  }), d = (l, i = !0) => {
    const a = [], o = e.value.findIndex((c) => c.id === l.id);
    for (let c = o + 1; c < e.value.length && l.level < e.value[c].level; c++)
      (i || l.level === e.value[c].level - 1) && a.push(e.value[c]);
    return a;
  }, u = (l, i = []) => {
    const a = d(l, !1);
    return i.push(...a), a.forEach((o) => {
      o.expanded && u(o, i);
    }), i;
  };
  return {
    expandedTree: n,
    getChildren: d,
    getChildrenExpanded: u,
    getIndex: (l) => l ? e.value.findIndex((i) => i.id === l.id) : -1,
    getNode: (l) => e.value.find((i) => i.id === l.id),
    getParent: (l) => e.value.find((i) => i.id === l.parentId)
  };
}
const P = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function W(e, n, { getChildren: d, getParent: u }) {
  const t = A({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), s = B(
    () => n.value.reduce(
      (f, v) => ({
        ...f,
        [v.id]: v
      }),
      {}
    )
  ), r = (f) => {
    f == null || f.classList.remove(...Object.values(P));
  }, l = (f, v) => {
    var b;
    const g = (b = s.value[f]) == null ? void 0 : b.parentId;
    return g === v ? !0 : g !== void 0 ? l(g, v) : !1;
  }, i = () => {
    t.dropType = void 0, t.draggingNode = null, t.draggingTreeNode = null;
  }, a = (f, v) => {
    var g;
    f.stopPropagation(), t.draggingNode = f.target, t.draggingTreeNode = v, (g = f.dataTransfer) == null || g.setData("dragNodeId", v.id);
  }, o = (f) => {
    if (f.preventDefault(), f.stopPropagation(), !!t.draggingNode && e) {
      if (f.dataTransfer && (f.dataTransfer.dropEffect = "move"), !n)
        return;
      let v = {};
      typeof e == "object" ? v = e : e === !0 && (v = { dropInner: !0 });
      const { dropPrev: g, dropNext: b, dropInner: I } = v;
      let m;
      const h = g ? I ? 0.25 : b ? 0.45 : 1 : -1, N = b ? I ? 0.75 : g ? 0.55 : 0 : 1, y = f.currentTarget, C = y == null ? void 0 : y.getBoundingClientRect(), M = f.clientY - ((C == null ? void 0 : C.top) || 0);
      if (M < ((C == null ? void 0 : C.height) || 0) * h ? m = "dropPrev" : M > ((C == null ? void 0 : C.height) || 0) * N ? m = "dropNext" : I ? m = "dropInner" : m = void 0, m) {
        const D = y == null ? void 0 : y.classList;
        D && (D.contains(P[m]) || (r(y), D.add(P[m])));
      } else
        r(y);
      t.dropType = m;
    }
  }, c = (f) => {
    f.stopPropagation(), t.draggingNode && r(f.currentTarget);
  }, x = (f, v) => {
    var b;
    if (f.preventDefault(), f.stopPropagation(), r(f.currentTarget), !t.draggingNode || !e)
      return;
    const g = (b = f.dataTransfer) == null ? void 0 : b.getData("dragNodeId");
    if (g) {
      const I = l(v.id, g);
      if (g === v.id || I)
        return;
      t.dropType && k(g, v), i();
    }
  };
  function k(f, v) {
    const g = n.value.find((b) => b.id === f);
    if (g) {
      let b;
      const I = d(g), m = u(g);
      if (t.dropType === "dropInner") {
        b = {
          ...g,
          parentId: v.id,
          level: v.level + 1
        };
        const h = n.value.indexOf(v);
        n.value.splice(h + 1, 0, b), v.isLeaf = void 0;
        const N = n.value.indexOf(g);
        n.value.splice(N, 1);
      } else if (t.dropType === "dropNext") {
        b = {
          ...g,
          parentId: v.parentId,
          level: v.level
        };
        const h = n.value.indexOf(v), N = d(v, !0).length;
        n.value.splice(
          h + N + 1,
          0,
          b
        );
        const y = n.value.indexOf(g);
        n.value.splice(y, 1);
      } else if (t.dropType === "dropPrev") {
        b = {
          ...g,
          parentId: v.parentId,
          level: v.level
        };
        const h = n.value.indexOf(v);
        n.value.splice(h, 0, b);
        const N = n.value.indexOf(g);
        n.value.splice(N, 1);
      }
      t.dropType = "dropInner", I.forEach((h) => k(h.id, b)), m && d(m).length === 0 && (m.isLeaf = !0);
    }
  }
  return {
    onDragstart: a,
    onDragover: o,
    onDragleave: c,
    onDrop: x,
    onDragend: (f) => {
      f.preventDefault(), f.stopPropagation(), i();
    }
  };
}
function X(e, { getNode: n, getIndex: d, getChildren: u }, { emit: t }) {
  const s = (a) => {
    const o = n(a);
    o && o.isLeaf === !1 && !o.childNodeCount && (o.loading = !0, t("lazy-load", a, r));
  }, r = (a) => {
    const o = n(a.node);
    if (o) {
      o.loading = !1;
      const c = S(
        E(a.treeItems, o.level)
      );
      l(o, c), i(o, c);
      const x = u(o);
      o.childNodeCount = x.length;
    }
  }, l = (a, o) => {
    o.value.forEach((c) => {
      c.level - 1 === a.level && !c.parentId && (c.parentId = a.id);
    });
  }, i = (a, o) => {
    const c = d(a);
    c && e.value.splice(c + 1, 0, ...o.value);
  };
  return {
    lazyLoadNodes: s
  };
}
function Z(e = 8) {
  const n = "abcdefghijklmnopqrstuvwxyz0123456789";
  let d = "";
  for (let u = 0; u < e; u++)
    d += n[parseInt((Math.random() * n.length).toString())];
  return d;
}
function ee(e, { getChildren: n, getIndex: d }) {
  return {
    append: (s, r) => {
      const l = n(s, !1), i = l[l.length - 1];
      let a = d(s) + 1;
      i && (a = d(i) + 1), s.expanded = !0, s.isLeaf = !1;
      const o = S({
        ...r,
        level: s.level + 1,
        parentId: s.id,
        isLeaf: !0
      });
      o.value.id === void 0 && (o.value.id = Z()), e.value.splice(a, 0, o.value);
    },
    remove: (s) => {
      const r = n(s).map((l) => l.id);
      e.value = e.value.filter(
        (l) => l.id !== s.id && !r.includes(l.id)
      );
    }
  };
}
function le(e, n, d, u) {
  const { lazyLoadNodes: t } = u;
  return {
    toggleNode: (r, l, i = !1) => {
      if (r.stopPropagation(), i)
        e.value.forEach((a) => {
          a.level <= l.level ? (a.level === l.level && a.id !== l.id && (a.expanded = !1), a.id === l.id && (a.expanded = !a.expanded), a.expanded && t(a)) : a.expanded = !1;
        });
      else {
        const a = e.value.find((o) => o.id === l.id);
        a && (a.expanded = !a.expanded, a.expanded && t(a));
      }
    }
  };
}
function ne(e, n, d) {
  const u = q(e), t = S(E(u)), s = Q(t), r = [le, J, ee], l = X(t, s, d), i = W(n.draggable, t, s);
  return {
    ...r.reduce((o, c) => ({ ...o, ...c(t, s, d, l) }), {}),
    ...s,
    ...i,
    treeData: t
  };
}
const $ = {
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
  },
  props: {
    type: Object,
    default: {
      label: "label",
      children: "children"
    }
  }
}, R = {
  onClick: {
    type: Function,
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  marginRight: {
    type: Number,
    default: 8
  }
};
var w = {}, te = {
  get exports() {
    return w;
  },
  set exports(e) {
    w = e;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var n = {}.hasOwnProperty;
    function d() {
      for (var u = [], t = 0; t < arguments.length; t++) {
        var s = arguments[t];
        if (s) {
          var r = typeof s;
          if (r === "string" || r === "number")
            u.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var l = d.apply(null, s);
              l && u.push(l);
            }
          } else if (r === "object") {
            if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) {
              u.push(s.toString());
              continue;
            }
            for (var i in s)
              n.call(s, i) && s[i] && u.push(i);
          }
        }
      }
      return u.join(" ");
    }
    e.exports ? (d.default = d, e.exports = d) : window.classNames = d;
  })();
})(te);
const _ = w, ae = T({
  name: "SBaseSelectAll",
  props: R,
  setup(e) {
    return () => p("label", {
      class: _("s-base-select-all", "is-checked", {
        "is-disabled": e.disabled
      }),
      style: {
        marginRight: e.marginRight + "px"
      }
    }, [p("span", {
      class: _("s-base-select-all__input", "is-checked", {
        "is-disabled": e.disabled
      })
    }, [p("span", {
      class: "s-base-select-all__inner"
    }, null), p("input", {
      type: "checkbox",
      disabled: e.disabled,
      "aria-hidden": "false",
      class: "s-base-select-all__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        e.onClick();
      }
    }, null)])]);
  }
});
const se = T({
  name: "SBaseSelectionBox",
  props: R,
  setup(e) {
    return () => p("label", {
      class: _("s-base-selection-box", {
        "is-disabled": e.disabled
      }),
      style: {
        marginRight: e.marginRight + "px"
      }
    }, [p("span", {
      class: _("s-base-selection-box__input", {
        "is-disabled": e.disabled
      })
    }, [p("span", {
      class: "s-base-selection-box__inner"
    }, null), p("input", {
      type: "checkbox",
      disabled: e.disabled,
      "aria-hidden": "false",
      class: "s-base-selection-box__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        e.onClick();
      }
    }, null)])]);
  }
});
const oe = T({
  name: "SBaseSemiSelection",
  props: R,
  setup(e) {
    return () => p("label", {
      class: _("s-base-semi-selection", {
        "is-disabled": e.disabled
      }),
      style: {
        marginRight: e.marginRight + "px"
      }
    }, [p("span", {
      class: _("s-base-semi-selection__input", "is-indeterminate", {
        "is-disabled": e.disabled
      }),
      tabindex: "0",
      role: "checkbox",
      "aria-checked": "mixed"
    }, [p("span", {
      class: "s-base-semi-selection__inner"
    }, null), p("input", {
      type: "checkbox",
      "aria-hidden": "true",
      disabled: e.disabled,
      class: "s-base-semi-selection__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        e.onClick();
      }
    }, null)])]);
  }
}), ie = {
  ...$,
  treeNode: {
    type: Object,
    required: !0
  }
}, H = 34, j = 24, ce = T({
  name: "STreeNode",
  props: ie,
  setup(e, {
    slots: n
  }) {
    const {
      lineable: d,
      checkable: u,
      treeNode: t,
      operable: s,
      draggable: r,
      props: l
    } = O(e), {
      toggleCheckNode: i,
      getChildrenExpanded: a,
      append: o,
      remove: c,
      onDragend: x,
      onDragleave: k,
      onDragover: L,
      onDragstart: f,
      onDrop: v
    } = F("TREE_UTILS");
    console.log("defaultProps", l);
    const g = S(!1), b = () => {
      g.value ? g.value = !1 : g.value = !0;
    };
    let I = {};
    r.value && (I = {
      draggable: !0,
      onDragend: (h) => x(h),
      onDragleave: (h) => k(h),
      onDragover: (h) => L(h),
      onDragstart: (h) => f(h, t.value),
      onDrop: (h) => v(h, t.value)
    });
    const m = () => p(K, null, [t.value.inChecked ? p(oe, {
      onClick: () => i(t.value),
      disabled: t.value.disabled
    }, null) : t.value.checked ? p(ae, {
      onClick: () => i(t.value),
      disabled: t.value.disabled
    }, null) : p(se, {
      onClick: () => i(t.value),
      disabled: t.value.disabled
    }, null)]);
    return () => {
      var h, N, y;
      return p("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${j * (t.value.level - 1)}px`
        },
        onMouseenter: b,
        onMouseleave: b
      }, [!t.value.isLeaf && t.value.expanded && d.value && p("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${H * a(t.value).length}px`,
          left: `${j * (t.value.level - 1) + 9}px`,
          top: `${H}px`
        }
      }, null), p("div", V({
        class: "s-tree__node--content"
      }, I), [t.value.isLeaf ? p("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (h = n.icon) == null ? void 0 : h.call(n), u.value && m(), (N = n.content) == null ? void 0 : N.call(n), s.value && g.value && p("span", {
        class: "inline-flex ml-1"
      }, [p("svg", {
        onClick: () => {
          o(t.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [p("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), p("svg", {
        onClick: () => {
          c(t.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [p("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), t.value.loading && ((y = n.loading) == null ? void 0 : y.call(n))])]);
    };
  }
}), de = (e, {
  emit: n
}) => p("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: e.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => n("onClick")
}, [p("path", {
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
const ue = T({
  name: "SVirtualList",
  props: re,
  setup(e, {
    slots: n
  }) {
    const {
      data: d,
      itemHeight: u,
      component: t
    } = O(e), s = S(), r = S(0), l = S(0), i = S(0), a = B(() => Math.ceil(r.value / u.value)), o = B(() => d.value.slice(i.value, Math.min(i.value + a.value, d.value.length)));
    U(() => {
      var x;
      r.value = (x = s.value) == null ? void 0 : x.clientHeight;
    });
    const c = (x) => {
      const {
        scrollTop: k
      } = x.target;
      i.value = Math.floor(k / u.value), l.value = k - k % u.value;
    };
    return () => p(t.value, {
      class: "s-virtual-list__container",
      ref: s,
      onScroll: c
    }, {
      default: () => [p("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${d.value.length * u.value}px`
        }
      }, null), p("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${l.value}px, 0)`
        }
      }, [o.value.map((x, k) => {
        var L;
        return (L = n.default) == null ? void 0 : L.call(n, {
          item: x,
          index: k
        });
      })])]
    });
  }
}), z = T({
  name: "STree",
  props: $,
  emits: ["lazy-load", "check"],
  setup(e, n) {
    const {
      data: d,
      height: u,
      itemHeight: t,
      accordion: s,
      props: r
    } = O(e), {
      slots: l
    } = n, i = ne(d, e, n);
    return Y("TREE_UTILS", i), () => {
      const a = (o) => p(ce, V(e, {
        treeNode: o,
        onClick: s.value ? (c) => i.toggleNode(c, o, s.value) : ""
      }), {
        content: () => l.content ? l.content(o) : r.value.label == "label" ? o.label : o[r.value.label],
        icon: () => l.icon ? l.icon({
          nodeData: o,
          toggleNode: i.toggleNode
        }) : p(de, {
          expanded: !!o.expanded,
          onClick: (c) => i.toggleNode(c, o, s.value)
        }, null),
        loading: () => l.loading ? l.loading({
          nodeData: i
        }) : p("span", {
          class: "ml-1"
        }, [G("loading...")])
      });
      return p("div", {
        class: "s-tree"
      }, [u != null && u.value ? p("div", {
        style: {
          height: `${u.value}px`
        }
      }, [p(ue, {
        data: i.expandedTree.value,
        itemHeight: t.value
      }, {
        default: ({
          item: o
        }) => a(o)
      })]) : i.expandedTree.value.map((o) => a(o))]);
    };
  }
}), fe = {
  install(e) {
    e.component(z.name, z);
  }
};
export {
  z as Tree,
  fe as default
};
