import { defineComponent as D, toRefs as S, createVNode as d, computed as T, reactive as Q, ref as P, unref as W, inject as U, mergeProps as O, withDirectives as X, vModelCheckbox as Z, onMounted as Y, provide as G, createTextVNode as C, watch as V } from "vue";
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
const H = D({
  name: "SButton",
  props: ee,
  setup(n, {
    slots: e
  }) {
    const {
      type: l,
      size: a,
      disabled: t,
      block: o
    } = S(n), s = o.value ? "s-btn--block" : "";
    return () => d("button", {
      disabled: t.value,
      class: `s-btn s-btn--${l.value} s-btn--${a.value} ${s}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), ne = {
  install(n) {
    n.component(H.name, H);
  }
};
function w(n, e = 0, l = []) {
  return e++, n.reduce((a, t) => {
    const o = { ...t };
    o.level = e, l.length > 0 && l[l.length - 1].level >= e && l.pop(), l.push(o);
    const s = l[l.length - 2];
    if (s && (o.parentId = s.id), o.children) {
      const r = w(o.children, e, l);
      return delete o.children, a.concat(o, r);
    } else
      return o.isLeaf === void 0 && (o.isLeaf = !0), a.concat(o);
  }, []);
}
function te(n, { getChildren: e }) {
  return {
    toggleCheckNode: (a) => {
      a.checked = !a.checked, e(a).forEach((r) => {
        r.checked = a.checked;
      });
      const t = n.value.find((r) => r.id === a.parentId);
      if (!t)
        return;
      const o = e(t, !1), s = o.filter((r) => r.checked);
      s.length === o.length ? t.checked = !0 : s.length === 0 && (t.checked = !1);
    }
  };
}
function le(n) {
  const e = T(() => {
    let r = [];
    const c = [];
    for (const u of n.value)
      r.map((i) => i.id).includes(u.id) || (u.expanded !== !0 && (r = l(u)), c.push(u));
    return c;
  }), l = (r, c = !0) => {
    const u = [], i = n.value.findIndex((f) => f.id === r.id);
    for (let f = i + 1; f < n.value.length && r.level < n.value[f].level; f++)
      (c || r.level === n.value[f].level - 1) && u.push(n.value[f]);
    return u;
  }, a = (r, c = []) => {
    const u = l(r, !1);
    return c.push(...u), u.forEach((i) => {
      i.expanded && a(i, c);
    }), c;
  };
  return {
    expandedTree: e,
    getChildren: l,
    getChildrenExpanded: a,
    getIndex: (r) => r ? n.value.findIndex((c) => c.id === r.id) : -1,
    getNode: (r) => n.value.find((c) => c.id === r.id),
    getParent: (r) => n.value.find((c) => c.id === r.parentId)
  };
}
const M = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function ae(n, e, { getChildren: l, getParent: a }) {
  const t = Q({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), o = T(
    () => e.value.reduce(
      (p, g) => ({
        ...p,
        [g.id]: g
      }),
      {}
    )
  ), s = (p) => {
    p == null || p.classList.remove(...Object.values(M));
  }, r = (p, g) => {
    var h;
    const v = (h = o.value[p]) == null ? void 0 : h.parentId;
    return v === g ? !0 : v !== void 0 ? r(v, g) : !1;
  }, c = () => {
    t.dropType = void 0, t.draggingNode = null, t.draggingTreeNode = null;
  }, u = (p, g) => {
    var v;
    p.stopPropagation(), t.draggingNode = p.target, t.draggingTreeNode = g, (v = p.dataTransfer) == null || v.setData("dragNodeId", g.id);
  }, i = (p) => {
    if (p.preventDefault(), p.stopPropagation(), !!t.draggingNode && n) {
      if (p.dataTransfer && (p.dataTransfer.dropEffect = "move"), !e)
        return;
      let g = {};
      typeof n == "object" ? g = n : n === !0 && (g = { dropInner: !0 });
      const { dropPrev: v, dropNext: h, dropInner: m } = g;
      let x;
      const b = v ? m ? 0.25 : h ? 0.45 : 1 : -1, k = h ? m ? 0.75 : v ? 0.55 : 0 : 1, N = p.currentTarget, L = N == null ? void 0 : N.getBoundingClientRect(), B = p.clientY - ((L == null ? void 0 : L.top) || 0);
      if (B < ((L == null ? void 0 : L.height) || 0) * b ? x = "dropPrev" : B > ((L == null ? void 0 : L.height) || 0) * k ? x = "dropNext" : m ? x = "dropInner" : x = void 0, x) {
        const E = N == null ? void 0 : N.classList;
        E && (E.contains(M[x]) || (s(N), E.add(M[x])));
      } else
        s(N);
      t.dropType = x;
    }
  }, f = (p) => {
    p.stopPropagation(), t.draggingNode && s(p.currentTarget);
  }, y = (p, g) => {
    var h;
    if (p.preventDefault(), p.stopPropagation(), s(p.currentTarget), !t.draggingNode || !n)
      return;
    const v = (h = p.dataTransfer) == null ? void 0 : h.getData("dragNodeId");
    if (v) {
      const m = r(g.id, v);
      if (v === g.id || m)
        return;
      t.dropType && I(v, g), c();
    }
  };
  function I(p, g) {
    const v = e.value.find((h) => h.id === p);
    if (v) {
      let h;
      const m = l(v), x = a(v);
      if (t.dropType === "dropInner") {
        h = {
          ...v,
          parentId: g.id,
          level: g.level + 1
        };
        const b = e.value.indexOf(g);
        e.value.splice(b + 1, 0, h), g.isLeaf = void 0;
        const k = e.value.indexOf(v);
        e.value.splice(k, 1);
      } else if (t.dropType === "dropNext") {
        h = {
          ...v,
          parentId: g.parentId,
          level: g.level
        };
        const b = e.value.indexOf(g), k = l(g, !0).length;
        e.value.splice(
          b + k + 1,
          0,
          h
        );
        const N = e.value.indexOf(v);
        e.value.splice(N, 1);
      } else if (t.dropType === "dropPrev") {
        h = {
          ...v,
          parentId: g.parentId,
          level: g.level
        };
        const b = e.value.indexOf(g);
        e.value.splice(b, 0, h);
        const k = e.value.indexOf(v);
        e.value.splice(k, 1);
      }
      t.dropType = "dropInner", m.forEach((b) => I(b.id, h)), x && l(x).length === 0 && (x.isLeaf = !0);
    }
  }
  return {
    onDragstart: u,
    onDragover: i,
    onDragleave: f,
    onDrop: y,
    onDragend: (p) => {
      p.preventDefault(), p.stopPropagation(), c();
    }
  };
}
function oe(n, { getNode: e, getIndex: l, getChildren: a }, { emit: t }) {
  const o = (u) => {
    const i = e(u);
    i && i.isLeaf === !1 && !i.childNodeCount && (i.loading = !0, t("lazy-load", u, s));
  }, s = (u) => {
    const i = e(u.node);
    if (i) {
      i.loading = !1;
      const f = P(
        w(u.treeItems, i.level)
      );
      r(i, f), c(i, f);
      const y = a(i);
      i.childNodeCount = y.length;
    }
  }, r = (u, i) => {
    i.value.forEach((f) => {
      f.level - 1 === u.level && !f.parentId && (f.parentId = u.id);
    });
  }, c = (u, i) => {
    const f = l(u);
    f && n.value.splice(f + 1, 0, ...i.value);
  };
  return {
    lazyLoadNodes: o
  };
}
function re(n = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let l = "";
  for (let a = 0; a < n; a++)
    l += e[parseInt((Math.random() * e.length).toString())];
  return l;
}
function se(n, { getChildren: e, getIndex: l }) {
  return {
    append: (o, s) => {
      const r = e(o, !1), c = r[r.length - 1];
      let u = l(o) + 1;
      c && (u = l(c) + 1), o.expanded = !0, o.isLeaf = !1;
      const i = P({
        ...s,
        level: o.level + 1,
        parentId: o.id,
        isLeaf: !0
      });
      i.value.id === void 0 && (i.value.id = re()), n.value.splice(u, 0, i.value);
    },
    remove: (o) => {
      const s = e(o).map((r) => r.id);
      n.value = n.value.filter(
        (r) => r.id !== o.id && !s.includes(r.id)
      );
    }
  };
}
function ce(n, e, l, a) {
  const { lazyLoadNodes: t } = a;
  return {
    toggleNode: (s) => {
      const r = n.value.find((c) => c.id === s.id);
      r && (r.expanded = !r.expanded, r.expanded && t(r));
    }
  };
}
function ie(n, e, l) {
  const a = W(n), t = P(w(a)), o = le(t), s = [ce, te, se], r = oe(t, o, l), c = ae(e.draggable, t, o);
  return {
    ...s.reduce((i, f) => ({ ...i, ...f(t, o, l, r) }), {}),
    ...o,
    ...c,
    treeData: t
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
}, de = {
  ...J,
  treeNode: {
    type: Object,
    required: !0
  }
}, j = 32, A = 24, ue = D({
  name: "STreeNode",
  props: de,
  setup(n, {
    slots: e
  }) {
    const {
      lineable: l,
      checkable: a,
      treeNode: t,
      operable: o,
      draggable: s
    } = S(n), {
      toggleCheckNode: r,
      getChildrenExpanded: c,
      append: u,
      remove: i,
      onDragend: f,
      onDragleave: y,
      onDragover: I,
      onDragstart: _,
      onDrop: p
    } = U("TREE_UTILS"), g = P(!1), v = () => {
      g.value ? g.value = !1 : g.value = !0;
    };
    let h = {};
    return s.value && (h = {
      draggable: !0,
      onDragend: (m) => f(m),
      onDragleave: (m) => y(m),
      onDragover: (m) => I(m),
      onDragstart: (m) => _(m, t.value),
      onDrop: (m) => p(m, t.value)
    }), () => {
      var m, x, b;
      return d("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${A * (t.value.level - 1)}px`
        },
        onMouseenter: v,
        onMouseleave: v
      }, [!t.value.isLeaf && t.value.expanded && l.value && d("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${j * c(t.value).length}px`,
          left: `${A * (t.value.level - 1) + 9}px`,
          top: `${j}px`
        }
      }, null), d("div", O({
        class: "s-tree__node--content"
      }, h), [t.value.isLeaf ? d("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (m = e.icon) == null ? void 0 : m.call(e), a.value && X(d("input", {
        type: "checkbox",
        "onUpdate:modelValue": (k) => t.value.checked = k,
        onClick: () => {
          r(t.value);
        }
      }, null), [[Z, t.value.checked]]), (x = e.content) == null ? void 0 : x.call(e), o.value && g.value && d("span", {
        class: "inline-flex ml-1"
      }, [d("svg", {
        onClick: () => {
          u(t.value, {
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
          i(t.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [d("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), t.value.loading && ((b = e.loading) == null ? void 0 : b.call(e))])]);
    };
  }
}), pe = (n, {
  emit: e
}) => d("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: n.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [d("path", {
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
const ve = D({
  name: "SVirtualList",
  props: ge,
  setup(n, {
    slots: e
  }) {
    const {
      data: l,
      itemHeight: a,
      component: t
    } = S(n), o = P(), s = P(0), r = P(0), c = P(0), u = T(() => Math.ceil(s.value / a.value)), i = T(() => l.value.slice(c.value, Math.min(c.value + u.value, l.value.length)));
    Y(() => {
      var y;
      s.value = (y = o.value) == null ? void 0 : y.clientHeight;
    });
    const f = (y) => {
      const {
        scrollTop: I
      } = y.target;
      c.value = Math.floor(I / a.value), r.value = I - I % a.value;
    };
    return () => d(t.value, {
      class: "s-virtual-list__container",
      ref: o,
      onScroll: f
    }, {
      default: () => [d("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${l.value.length * a.value}px`
        }
      }, null), d("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${r.value}px, 0)`
        }
      }, [i.value.map((y, I) => {
        var _;
        return (_ = e.default) == null ? void 0 : _.call(e, {
          item: y,
          index: I
        });
      })])]
    });
  }
}), $ = D({
  name: "STree",
  props: J,
  emits: ["lazy-load"],
  setup(n, e) {
    const {
      data: l,
      height: a,
      itemHeight: t
    } = S(n), {
      slots: o
    } = e, s = ie(l, n, e);
    return G("TREE_UTILS", s), () => {
      const r = (c) => d(ue, O(n, {
        treeNode: c
      }), {
        content: () => o.content ? o.content(c) : c.label,
        icon: () => o.icon ? o.icon({
          nodeData: c,
          toggleNode: s.toggleNode
        }) : d(pe, {
          expanded: !!c.expanded,
          onClick: () => s.toggleNode(c)
        }, null),
        loading: () => o.loading ? o.loading({
          nodeData: s
        }) : d("span", {
          class: "ml-1"
        }, [C("loading...")])
      });
      return d("div", {
        class: "s-tree"
      }, [a != null && a.value ? d("div", {
        style: {
          height: `${a.value}px`
        }
      }, [d(ve, {
        data: s.expandedTree.value,
        itemHeight: t.value
      }, {
        default: ({
          item: c
        }) => r(c)
      })]) : s.expandedTree.value.map((c) => r(c))]);
    };
  }
}), fe = {
  install(n) {
    n.component($.name, $);
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
function he(n = 1) {
  const e = P(n), l = (s) => {
    e.value = s;
  }, a = (s) => {
    e.value += s;
  };
  return {
    pageIndex: e,
    setPageIndex: l,
    jumpPage: a,
    prevPage: () => a(-1),
    nextPage: () => a(1)
  };
}
const me = (n, e, l) => {
  const a = Array.from(Array(n).keys());
  if (n <= l)
    return a.slice(2, n);
  {
    const t = Math.ceil(l / 2);
    return e <= t ? a.slice(2, l) : e >= n - t + 1 ? a.slice(n - l + 2, n) : a.slice(e - t + 2, e + t - 1);
  }
}, xe = K, z = D({
  name: "SPager",
  props: xe,
  setup(n) {
    const {
      total: e,
      pageSize: l,
      pagerCount: a
    } = S(n), t = T(() => Math.ceil(e.value / l.value)), {
      pageIndex: o,
      setPageIndex: s,
      jumpPage: r,
      prevPage: c,
      nextPage: u
    } = he(), i = T(() => me(t.value, o.value, a.value));
    return {
      totalPage: t,
      pageIndex: o,
      setPageIndex: s,
      jumpPage: r,
      prevPage: c,
      nextPage: u,
      centerPages: i
    };
  },
  render() {
    const {
      pagerCount: n,
      totalPage: e,
      pageIndex: l,
      setPageIndex: a,
      jumpPage: t,
      centerPages: o
    } = this;
    return d("ul", {
      class: "s-pager"
    }, [d("li", {
      onClick: () => a(1),
      class: {
        current: l === 1
      }
    }, [C("1")]), e > n && l > Math.ceil(n / 2) && d("li", {
      class: "more left",
      onClick: () => t(-5)
    }, [C("...")]), o.map((s) => d("li", {
      onClick: () => a(s),
      class: {
        current: l === s
      }
    }, [s])), e > n && l < e - Math.ceil(n / 2) + 1 && d("li", {
      class: "more right",
      onClick: () => t(5)
    }, [C("...")]), e > 1 && d("li", {
      onClick: () => a(e),
      class: {
        current: l === e
      }
    }, [e])]);
  }
}), F = D({
  name: "SPagination",
  props: K,
  emits: ["update:modelValue"],
  setup(n, {
    emit: e
  }) {
    const l = P(), a = T(() => l.value ? l.value.pageIndex < 2 : !0), t = T(() => l.value ? l.value.pageIndex > l.value.totalPage - 1 : !0);
    return Y(() => {
      V(() => l.value.pageIndex, (o) => {
        e("update:modelValue", o);
      }), V(() => n.modelValue, (o) => {
        l.value.pageIndex = o;
      });
    }), () => d("div", {
      class: "s-pagination"
    }, [d("button", {
      disabled: a.value,
      onClick: () => l.value.prevPage()
    }, [C("上一页")]), d(z, O(n, {
      ref: l
    }), null), d("button", {
      disabled: t.value,
      onClick: () => l.value.nextPage()
    }, [C("下一页")])]);
  }
}), ye = {
  install(n) {
    n.component(F.name, F), n.component(z.name, z);
  }
}, be = {
  model: {
    type: Object,
    required: !0
  },
  layout: {
    type: String,
    default: "horizontal"
  }
};
const R = D({
  name: "SForm",
  props: be,
  setup(n, {
    slots: e
  }) {
    const l = T(() => ({
      layout: n.layout
    }));
    return G("LABEL_DATA", l), () => {
      var a;
      return d("div", {
        class: "s-form"
      }, [(a = e.default) == null ? void 0 : a.call(e)]);
    };
  }
}), Ie = {
  label: {
    type: String
  }
};
const q = D({
  name: "SFormItem",
  props: Ie,
  setup(n, {
    slots: e
  }) {
    const l = U("LABEL_DATA"), a = T(() => ({
      "s-form__item": !0,
      "s-form__item--horizontal": l.value.layout === "horizontal",
      "s-form__item--vertical": l.value.layout === "vertical"
    }));
    return () => {
      var t;
      return d("div", {
        class: a.value
      }, [d("span", {
        class: "s-form__label"
      }, [n.label]), d("div", null, [(t = e.default) == null ? void 0 : t.call(e)])]);
    };
  }
}), Ne = {
  install(n) {
    n.component(R.name, R), n.component(q.name, q);
  }
}, Pe = [
  ne,
  fe,
  ye,
  Ne
], ke = {
  version: "0.0.1",
  install(n) {
    Pe.forEach((e) => n.use(e));
  }
};
export {
  H as Button,
  R as Form,
  F as Pagination,
  $ as Tree,
  ke as default
};
