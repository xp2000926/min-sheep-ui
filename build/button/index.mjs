import { defineComponent as p, computed as _, createVNode as c, toRefs as S, Fragment as g } from "vue";
const L = {
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
  },
  round: {
    type: Boolean,
    default: !1
  },
  plain: {
    type: Boolean,
    default: !1
  },
  circle: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String,
    default: ""
  },
  iconSvg: {
    type: String,
    default: ""
  }
}, x = {
  name: {
    type: String,
    default: ""
  },
  prefix: {
    type: String,
    default: "icon"
  },
  size: {
    type: [String, Number],
    default: "inherit"
  },
  color: {
    type: String,
    default: "inherit"
  },
  component: {
    type: String,
    default: null
  }
};
window._iconfont_svg_string_1281272 = '<svg><symbol id="icon-angular" viewBox="0 0 1024 1024"><path d="M512 125.952L139.552 261.376 206.4 762.88 512 932.64l305.6-169.824 66.848-501.44L512 125.952z m0 68.096l302.176 109.888-55.808 418.56L512 859.36l-246.4-136.864-55.776-418.56L512 194.048zM512 256l-192 448h64l41.28-96h173.44L640 704h64L512 256z m0 145.6l0.64 1.92 22.4 56L571.2 544h-118.4l36.16-84.48 22.4-56 0.64-1.92z"  ></path></symbol><symbol id="icon-react" viewBox="0 0 1024 1024"><path d="M836.8 353.6c-11.2-3.2-20.8-6.4-32-9.6 1.6-8 3.2-14.4 4.8-22.4 24-118.4 8-214.4-46.4-246.4-52.8-30.4-139.2 1.6-225.6 76.8-8 8-17.6 14.4-25.6 22.4-4.8-4.8-11.2-9.6-16-16-91.2-81.6-182.4-115.2-236.8-83.2-52.8 30.4-68.8 120-46.4 233.6 1.6 11.2 4.8 22.4 8 33.6-12.8 3.2-25.6 8-36.8 11.2C76.8 392 0 451.2 0 510.4c0 62.4 81.6 124.8 192 163.2 9.6 3.2 17.6 6.4 27.2 8-3.2 12.8-6.4 24-8 36.8-20.8 110.4-4.8 198.4 48 228.8 54.4 32 145.6 0 233.6-78.4 6.4-6.4 14.4-12.8 20.8-19.2 8 8 17.6 16 27.2 24 84.8 73.6 169.6 104 222.4 73.6 54.4-32 72-126.4 48-241.6-1.6-8-3.2-17.6-6.4-27.2 6.4-1.6 12.8-3.2 19.2-6.4C940.8 636.8 1024 574.4 1024 510.4c0-59.2-78.4-118.4-187.2-156.8zM566.4 184c75.2-65.6 144-89.6 176-72 33.6 19.2 46.4 97.6 25.6 201.6-1.6 6.4-3.2 12.8-4.8 20.8-44.8-9.6-89.6-17.6-134.4-20.8-25.6-36.8-54.4-73.6-84.8-105.6 6.4-9.6 14.4-16 22.4-24zM334.4 614.4c9.6 17.6 20.8 35.2 32 51.2-32-3.2-62.4-8-92.8-14.4 8-28.8 19.2-59.2 32-89.6 9.6 19.2 19.2 36.8 28.8 52.8z m-60.8-240c28.8-6.4 59.2-11.2 91.2-16-11.2 16-20.8 33.6-30.4 51.2-9.6 17.6-19.2 33.6-28.8 52.8-12.8-30.4-22.4-59.2-32-88z m54.4 137.6c12.8-27.2 27.2-54.4 43.2-81.6s32-52.8 48-78.4c30.4-1.6 60.8-3.2 91.2-3.2s62.4 1.6 91.2 3.2c17.6 25.6 33.6 51.2 48 76.8s30.4 52.8 43.2 81.6c-12.8 27.2-27.2 54.4-43.2 81.6-16 27.2-32 52.8-48 78.4-30.4 1.6-60.8 3.2-92.8 3.2s-62.4-1.6-91.2-3.2C400 644.8 384 619.2 368 592s-25.6-52.8-40-80z m361.6 102.4l28.8-52.8c12.8 28.8 24 59.2 33.6 88-30.4 6.4-62.4 12.8-94.4 16 11.2-16 22.4-33.6 32-51.2z m28.8-153.6l-28.8-52.8c-9.6-17.6-20.8-33.6-30.4-49.6 32 4.8 62.4 9.6 91.2 16-8 30.4-19.2 59.2-32 86.4zM512 236.8c20.8 22.4 40 46.4 59.2 72-40-1.6-80-1.6-118.4 0 19.2-27.2 40-51.2 59.2-72zM280 113.6c33.6-19.2 108.8 8 187.2 78.4 4.8 4.8 9.6 9.6 16 14.4-30.4 33.6-59.2 68.8-86.4 105.6-44.8 4.8-89.6 11.2-134.4 20.8-3.2-9.6-4.8-20.8-6.4-30.4-19.2-97.6-6.4-169.6 24-188.8z m-48 528c-8-3.2-16-4.8-25.6-8-43.2-12.8-91.2-35.2-126.4-62.4-20.8-14.4-33.6-35.2-38.4-59.2 0-36.8 64-83.2 155.2-115.2 11.2-4.8 22.4-8 35.2-11.2 14.4 43.2 30.4 86.4 49.6 128-19.2 40-36.8 83.2-49.6 128zM464 836.8c-33.6 30.4-72 54.4-113.6 70.4-22.4 11.2-48 11.2-70.4 3.2-32-19.2-44.8-89.6-27.2-184 1.6-11.2 4.8-22.4 8-33.6 44.8 9.6 89.6 16 136 19.2 25.6 36.8 56 73.6 86.4 107.2-6.4 6.4-12.8 12.8-19.2 17.6z m49.6-48c-20.8-22.4-40-46.4-60.8-72 19.2 0 38.4 1.6 59.2 1.6 20.8 0 41.6 0 60.8-1.6-19.2 24-38.4 48-59.2 72zM774.4 848c-1.6 24-14.4 48-33.6 62.4-32 19.2-99.2-4.8-172.8-68.8-8-8-16-14.4-25.6-22.4 30.4-33.6 59.2-68.8 84.8-107.2 46.4-3.2 91.2-11.2 136-20.8l4.8 24c11.2 43.2 12.8 89.6 6.4 132.8z m36.8-214.4c-4.8 1.6-11.2 3.2-17.6 4.8-14.4-43.2-32-86.4-51.2-128 19.2-40 35.2-83.2 49.6-126.4 11.2 3.2 20.8 6.4 30.4 9.6 92.8 32 158.4 80 158.4 116.8 0 40-68.8 89.6-169.6 123.2zM512 603.2c51.2 0 91.2-41.6 91.2-91.2s-41.6-91.2-91.2-91.2-91.2 41.6-91.2 91.2 40 91.2 91.2 91.2z"  ></path></symbol><symbol id="icon-vuejs" viewBox="0 0 1024 1024"><path d="M777.8 128.6H624l-112 177.2-96-177.2H64L512 896 960 128.6h-182.2z m-602.4 64h107.6L512 589 740.8 192.6h107.6L512 769 175.4 192.6z"  ></path></symbol></svg>', function(e) {
  var o = (o = document.getElementsByTagName("script"))[o.length - 1], n = o.getAttribute("data-injectcss"), o = o.getAttribute("data-disable-injectsvg");
  if (!o) {
    var l, a, r, s, m, f = function(i, t) {
      t.parentNode.insertBefore(i, t);
    };
    if (n && !e.__iconfont__svg__cssinject__) {
      e.__iconfont__svg__cssinject__ = !0;
      try {
        document.write(
          "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
        );
      } catch (i) {
        console && console.log(i);
      }
    }
    l = function() {
      var i, t = document.createElement("div");
      t.innerHTML = e._iconfont_svg_string_1281272, (t = t.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", t = t, (i = document.body).firstChild ? f(t, i.firstChild) : i.appendChild(t));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(l, 0) : (a = function() {
      document.removeEventListener("DOMContentLoaded", a, !1), l();
    }, document.addEventListener("DOMContentLoaded", a, !1)) : document.attachEvent && (r = l, s = e.document, m = !1, d(), s.onreadystatechange = function() {
      s.readyState == "complete" && (s.onreadystatechange = null, u());
    });
  }
  function u() {
    m || (m = !0, r());
  }
  function d() {
    try {
      s.documentElement.doScroll("left");
    } catch {
      return void setTimeout(d, 50);
    }
    u();
  }
}(window);
const y = p({
  name: "SIcon",
  props: x,
  setup(e) {
    const n = _(() => typeof e.size == "number" ? `${e.size}px` : e.size), o = c("img", {
      src: e.name,
      style: {
        width: n.value,
        verticalAlign: "middle"
      }
    }, null), l = c("span", {
      class: [e.prefix, e.prefix + "-" + e.name],
      style: {
        fontSize: n.value,
        color: e.color
      }
    }, null), a = c("svg", {
      style: {
        width: n.value,
        height: n.value
      }
    }, [c("use", {
      "xlink:href": `#${e.prefix}-${e.component}`,
      fill: e.color
    }, null)]), r = e.component ? a : /http|https/.test(e.name) ? o : l;
    return () => r;
  }
});
const h = p({
  name: "SButton",
  props: L,
  setup(e, {
    slots: n
  }) {
    const {
      type: o,
      size: l,
      disabled: a,
      block: r,
      round: s,
      plain: m,
      circle: f,
      icon: u,
      iconSvg: d
    } = S(e), i = r.value ? "s-btn--block" : "", t = s.value ? "s-btn--round" : "", z = m.value ? "s-btn--plain" : "", b = f.value ? "s-btn--circle" : "", v = l.value === "mini" ? "18" : l.value === "small" ? "22" : l.value === "medium" ? "26" : "30";
    return () => c("button", {
      disabled: a.value,
      class: `s-btn s-btn--${o.value} s-btn--${l.value} ${i} ${t} ${z} ${b}`
    }, [n.default && u.value || n.default && d.value ? c(g, null, [c(y, {
      name: u.value,
      component: d.value,
      size: v
    }, null), n.default()]) : n.default ? c(g, null, [n.icon && n.icon(), n.default()]) : u.value || d.value ? c(y, {
      name: u.value,
      component: d.value,
      size: v
    }, null) : "按钮"]);
  }
}), M = {
  install(e) {
    e.component(h.name, h);
  }
};
export {
  h as Button,
  M as default
};
