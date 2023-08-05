import { computed as B, reactive as A, ref as S, unref as q, defineComponent as T, createVNode as p, toRefs as O, inject as F, mergeProps as V, Fragment as K, onMounted as U, provide as Y, createTextVNode as G } from "vue";
function E(e, t = 0, d = []) {
  return t++, e.reduce((u, a) => {
    const s = { ...a };
    s.level = t, d.length > 0 && d[d.length - 1].level >= t && d.pop(), d.push(s);
    const o = d[d.length - 2];
    if (o && (s.parentId = o.id), s.children) {
      const n = E(s.children, t, d);
      return delete s.children, u.concat(s, n);
    } else
      return s.isLeaf === void 0 && (s.isLeaf = !0), u.concat(s);
  }, []);
}
function J(e, { getChildren: t, getParent: d }, { emit: u }) {
  const a = (o) => {
    o.checked = !o.checked, t(o).forEach((c) => {
      c.checked = o.checked, c.inChecked = t(o, !0).every(
        (b) => b.inChecked
      );
    }), o.inChecked = !1, s(o);
    const n = e.value.map((c) => {
      if (c.checked)
        return c.id;
    }).filter(Boolean), r = e.value.map((c) => {
      if (c.checked)
        return c;
    }).filter(Boolean), l = e.value.map((c) => {
      if (c.inChecked)
        return c.id;
    }).filter(Boolean), i = e.value.map((c) => {
      if (c.inChecked)
        return c;
    }).filter(Boolean);
    u(
      "check",
      o,
      n,
      r,
      l,
      i
    );
  }, s = (o) => {
    const n = d(o);
    if (!n)
      return;
    const r = t(n, !0), l = r.every((c) => c.checked);
    n.checked = l;
    const i = r.some((c) => c.checked);
    l ? n.inChecked = !1 : i ? n.inChecked = !0 : n.inChecked = !1, n.parentId && s(n);
  };
  return {
    toggleCheckNode: a
  };
}
function Q(e) {
  const t = B(() => {
    let n = [];
    const r = [];
    for (const l of e.value)
      n.map((i) => i.id).includes(l.id) || (l.expanded !== !0 && (n = d(l)), r.push(l));
    return r;
  }), d = (n, r = !0) => {
    const l = [], i = e.value.findIndex((c) => c.id === n.id);
    for (let c = i + 1; c < e.value.length && n.level < e.value[c].level; c++)
      (r || n.level === e.value[c].level - 1) && l.push(e.value[c]);
    return l;
  }, u = (n, r = []) => {
    const l = d(n, !1);
    return r.push(...l), l.forEach((i) => {
      i.expanded && u(i, r);
    }), r;
  };
  return {
    expandedTree: t,
    getChildren: d,
    getChildrenExpanded: u,
    getIndex: (n) => n ? e.value.findIndex((r) => r.id === n.id) : -1,
    getNode: (n) => e.value.find((r) => r.id === n.id),
    getParent: (n) => e.value.find((r) => r.id === n.parentId)
  };
}
const w = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function W(e, t, { getChildren: d, getParent: u }) {
  const a = A({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), s = B(
    () => t.value.reduce(
      (f, v) => ({
        ...f,
        [v.id]: v
      }),
      {}
    )
  ), o = (f) => {
    f == null || f.classList.remove(...Object.values(w));
  }, n = (f, v) => {
    var x;
    const g = (x = s.value[f]) == null ? void 0 : x.parentId;
    return g === v ? !0 : g !== void 0 ? n(g, v) : !1;
  }, r = () => {
    a.dropType = void 0, a.draggingNode = null, a.draggingTreeNode = null;
  }, l = (f, v) => {
    var g;
    f.stopPropagation(), a.draggingNode = f.target, a.draggingTreeNode = v, (g = f.dataTransfer) == null || g.setData("dragNodeId", v.id);
  }, i = (f) => {
    if (f.preventDefault(), f.stopPropagation(), !!a.draggingNode && e) {
      if (f.dataTransfer && (f.dataTransfer.dropEffect = "move"), !t)
        return;
      let v = {};
      typeof e == "object" ? v = e : e === !0 && (v = { dropInner: !0 });
      const { dropPrev: g, dropNext: x, dropInner: N } = v;
      let h;
      const m = g ? N ? 0.25 : x ? 0.45 : 1 : -1, k = x ? N ? 0.75 : g ? 0.55 : 0 : 1, I = f.currentTarget, C = I == null ? void 0 : I.getBoundingClientRect(), M = f.clientY - ((C == null ? void 0 : C.top) || 0);
      if (M < ((C == null ? void 0 : C.height) || 0) * m ? h = "dropPrev" : M > ((C == null ? void 0 : C.height) || 0) * k ? h = "dropNext" : N ? h = "dropInner" : h = void 0, h) {
        const D = I == null ? void 0 : I.classList;
        D && (D.contains(w[h]) || (o(I), D.add(w[h])));
      } else
        o(I);
      a.dropType = h;
    }
  }, c = (f) => {
    f.stopPropagation(), a.draggingNode && o(f.currentTarget);
  }, b = (f, v) => {
    var x;
    if (f.preventDefault(), f.stopPropagation(), o(f.currentTarget), !a.draggingNode || !e)
      return;
    const g = (x = f.dataTransfer) == null ? void 0 : x.getData("dragNodeId");
    if (g) {
      const N = n(v.id, g);
      if (g === v.id || N)
        return;
      a.dropType && y(g, v), r();
    }
  };
  function y(f, v) {
    const g = t.value.find((x) => x.id === f);
    if (g) {
      let x;
      const N = d(g), h = u(g);
      if (a.dropType === "dropInner") {
        x = {
          ...g,
          parentId: v.id,
          level: v.level + 1
        };
        const m = t.value.indexOf(v);
        t.value.splice(m + 1, 0, x), v.isLeaf = void 0;
        const k = t.value.indexOf(g);
        t.value.splice(k, 1);
      } else if (a.dropType === "dropNext") {
        x = {
          ...g,
          parentId: v.parentId,
          level: v.level
        };
        const m = t.value.indexOf(v), k = d(v, !0).length;
        t.value.splice(
          m + k + 1,
          0,
          x
        );
        const I = t.value.indexOf(g);
        t.value.splice(I, 1);
      } else if (a.dropType === "dropPrev") {
        x = {
          ...g,
          parentId: v.parentId,
          level: v.level
        };
        const m = t.value.indexOf(v);
        t.value.splice(m, 0, x);
        const k = t.value.indexOf(g);
        t.value.splice(k, 1);
      }
      a.dropType = "dropInner", N.forEach((m) => y(m.id, x)), h && d(h).length === 0 && (h.isLeaf = !0);
    }
  }
  return {
    onDragstart: l,
    onDragover: i,
    onDragleave: c,
    onDrop: b,
    onDragend: (f) => {
      f.preventDefault(), f.stopPropagation(), r();
    }
  };
}
function X(e, { getNode: t, getIndex: d, getChildren: u }, { emit: a }) {
  const s = (l) => {
    const i = t(l);
    i && i.isLeaf === !1 && !i.childNodeCount && (i.loading = !0, a("lazy-load", l, o));
  }, o = (l) => {
    const i = t(l.node);
    if (i) {
      i.loading = !1;
      const c = S(
        E(l.treeItems, i.level)
      );
      n(i, c), r(i, c);
      const b = u(i);
      i.childNodeCount = b.length;
    }
  }, n = (l, i) => {
    i.value.forEach((c) => {
      c.level - 1 === l.level && !c.parentId && (c.parentId = l.id);
    });
  }, r = (l, i) => {
    const c = d(l);
    c && e.value.splice(c + 1, 0, ...i.value);
  };
  return {
    lazyLoadNodes: s
  };
}
function Z(e = 8) {
  const t = "abcdefghijklmnopqrstuvwxyz0123456789";
  let d = "";
  for (let u = 0; u < e; u++)
    d += t[parseInt((Math.random() * t.length).toString())];
  return d;
}
function ee(e, { getChildren: t, getIndex: d }) {
  return {
    append: (s, o) => {
      const n = t(s, !1), r = n[n.length - 1];
      let l = d(s) + 1;
      r && (l = d(r) + 1), s.expanded = !0, s.isLeaf = !1;
      const i = S({
        ...o,
        level: s.level + 1,
        parentId: s.id,
        isLeaf: !0
      });
      i.value.id === void 0 && (i.value.id = Z()), e.value.splice(l, 0, i.value);
    },
    remove: (s) => {
      const o = t(s).map((n) => n.id);
      e.value = e.value.filter(
        (n) => n.id !== s.id && !o.includes(n.id)
      );
    }
  };
}
function ne(e, t, d, u) {
  const { lazyLoadNodes: a } = u;
  return {
    toggleNode: (o, n, r = !1) => {
      if (o.stopPropagation(), r)
        e.value.forEach((l) => {
          l.level <= n.level ? (l.level === n.level && l.id !== n.id && (l.expanded = !1), l.id === n.id && (l.expanded = !l.expanded), l.expanded && a(l)) : l.expanded = !1;
        });
      else {
        const l = e.value.find((i) => i.id === n.id);
        l && (l.expanded = !l.expanded, l.expanded && a(l));
      }
    }
  };
}
function le(e, t, d) {
  const u = q(e), a = S(E(u)), s = Q(a), o = [ne, J, ee], n = X(a, s, d), r = W(t.draggable, a, s);
  return {
    ...o.reduce((i, c) => ({ ...i, ...c(a, s, d, n) }), {}),
    ...s,
    ...r,
    treeData: a
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
var P = {}, te = {
  get exports() {
    return P;
  },
  set exports(e) {
    P = e;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function d() {
      for (var u = [], a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        if (s) {
          var o = typeof s;
          if (o === "string" || o === "number")
            u.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var n = d.apply(null, s);
              n && u.push(n);
            }
          } else if (o === "object") {
            if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) {
              u.push(s.toString());
              continue;
            }
            for (var r in s)
              t.call(s, r) && s[r] && u.push(r);
          }
        }
      }
      return u.join(" ");
    }
    e.exports ? (d.default = d, e.exports = d) : window.classNames = d;
  })();
})(te);
const _ = P, ae = T({
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
    slots: t
  }) {
    const {
      lineable: d,
      checkable: u,
      treeNode: a,
      operable: s,
      draggable: o
    } = O(e), {
      toggleCheckNode: n,
      getChildrenExpanded: r,
      append: l,
      remove: i,
      onDragend: c,
      onDragleave: b,
      onDragover: y,
      onDragstart: L,
      onDrop: f
    } = F("TREE_UTILS"), v = S(!1), g = () => {
      v.value ? v.value = !1 : v.value = !0;
    };
    let x = {};
    o.value && (x = {
      draggable: !0,
      onDragend: (h) => c(h),
      onDragleave: (h) => b(h),
      onDragover: (h) => y(h),
      onDragstart: (h) => L(h, a.value),
      onDrop: (h) => f(h, a.value)
    });
    const N = () => p(K, null, [a.value.inChecked ? p(oe, {
      onClick: () => n(a.value),
      disabled: a.value.disabled
    }, null) : a.value.checked ? p(ae, {
      onClick: () => n(a.value),
      disabled: a.value.disabled
    }, null) : p(se, {
      onClick: () => n(a.value),
      disabled: a.value.disabled
    }, null)]);
    return () => {
      var h, m, k;
      return p("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${j * (a.value.level - 1)}px`
        },
        onMouseenter: g,
        onMouseleave: g
      }, [!a.value.isLeaf && a.value.expanded && d.value && p("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${H * r(a.value).length}px`,
          left: `${j * (a.value.level - 1) + 9}px`,
          top: `${H}px`
        }
      }, null), p("div", V({
        class: "s-tree__node--content"
      }, x), [a.value.isLeaf ? p("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (h = t.icon) == null ? void 0 : h.call(t), u.value && N(), (m = t.content) == null ? void 0 : m.call(t), s.value && v.value && p("span", {
        class: "inline-flex ml-1"
      }, [p("svg", {
        onClick: () => {
          l(a.value, {
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
          i(a.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [p("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), a.value.loading && ((k = t.loading) == null ? void 0 : k.call(t))])]);
    };
  }
}), de = (e, {
  emit: t
}) => p("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: e.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => t("onClick")
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
    slots: t
  }) {
    const {
      data: d,
      itemHeight: u,
      component: a
    } = O(e), s = S(), o = S(0), n = S(0), r = S(0), l = B(() => Math.ceil(o.value / u.value)), i = B(() => d.value.slice(r.value, Math.min(r.value + l.value, d.value.length)));
    U(() => {
      var b;
      o.value = (b = s.value) == null ? void 0 : b.clientHeight;
    });
    const c = (b) => {
      const {
        scrollTop: y
      } = b.target;
      r.value = Math.floor(y / u.value), n.value = y - y % u.value;
    };
    return () => p(a.value, {
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
          transform: `translate3d(0, ${n.value}px, 0)`
        }
      }, [i.value.map((b, y) => {
        var L;
        return (L = t.default) == null ? void 0 : L.call(t, {
          item: b,
          index: y
        });
      })])]
    });
  }
}), z = T({
  name: "STree",
  props: $,
  emits: ["lazy-load", "check"],
  setup(e, t) {
    const {
      data: d,
      height: u,
      itemHeight: a,
      accordion: s
    } = O(e), {
      slots: o
    } = t, n = le(d, e, t);
    return Y("TREE_UTILS", n), () => {
      const r = (l) => p(ce, V(e, {
        treeNode: l,
        onClick: s.value ? (i) => n.toggleNode(i, l, s.value) : ""
      }), {
        content: () => o.content ? o.content(l) : l.label,
        icon: () => o.icon ? o.icon({
          nodeData: l,
          toggleNode: n.toggleNode
        }) : p(de, {
          expanded: !!l.expanded,
          onClick: (i) => n.toggleNode(i, l, s.value)
        }, null),
        loading: () => o.loading ? o.loading({
          nodeData: n
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
        data: n.expandedTree.value,
        itemHeight: a.value
      }, {
        default: ({
          item: l
        }) => r(l)
      })]) : n.expandedTree.value.map((l) => r(l))]);
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
