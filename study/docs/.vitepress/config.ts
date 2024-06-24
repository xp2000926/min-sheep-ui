import { demoBlockPlugin } from "vitepress-theme-demoblock";
const sidebar = [
  {
    text: "快速开始",
    items: [
      { text: "安装", link: "/guide/install" }, // /guide/install.md
    ],
  },
  {
    text: "通用",
    items: [
      { text: "Button 按钮", link: "/components/button/" }, // /components/button/index.md
    ],
  },
  { text: "导航", items: [] },
  { text: "反馈", items: [] },
  { text: "数据录入", items: [] },
  { text: "数据展示", items: [] },
  { text: "布局", items: [] },
];

export default {
  themeConfig: {
    sidebar,
    // demoblock: {
    //   root: {
    //     "view-source": "View source",
    //     "hide-source": "Hide source",
    //     "edit-in-editor": "Edit in Playground",
    //     "edit-on-github": "Edit on GitHub",
    //     "copy-code": "Copy code",
    //     "copy-success": "Copy success",
    //     "copy-error": "Copy error",
    //   },
    //   zh: {
    //     "view-source": "查看源代码",
    //     "hide-source": "隐藏源代码",
    //     "edit-in-editor": "在 Playground 中编辑",
    //     "edit-on-github": "在 Github 中编辑",
    //     "copy-code": "复制代码",
    //     "copy-success": "复制成功",
    //     "copy-error": "复制失败",
    //   },
    // },
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin);
    },
  },
};
