import {
  demoblockPlugin,
  demoblockVitePlugin
} from 'vitepress-theme-demoblock';
import fs from 'fs';
import path from 'path';

let sidebar: Array<{
  text: string;
  collapsible: boolean;
  collapsed: boolean;
  items: Array<{ text: string; link: string }> | [];
}> = [
  {
    text: '开发指南',
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: '安装',
        link: '/guide/install/'
      },
      {
        text: '快速上手',
        link: '/guide/quickstart/'
      }
    ]
  },
  {
    text: '组件总览',
    collapsible: true,
    collapsed: false,
    items: [{ text: 'Overview 组件总览', link: '/components/overview/' }]
  },
  { text: '通用', collapsible: true, collapsed: false, items: [] },
  { text: '导航', collapsible: true, collapsed: false, items: [] },
  { text: '反馈', collapsible: true, collapsed: false, items: [] },
  { text: '数据录入', collapsible: true, collapsed: false, items: [] },
  { text: '数据展示', collapsible: true, collapsed: false, items: [] },
  { text: '布局', collapsible: true, collapsed: false, items: [] },
  { text: '其他', collapsible: true, collapsed: false, items: [] },
  { text: '全局化配置 ', collapsible: true, collapsed: false, items: [] }
];

// 动态生成 docs 的 sidebar 目录
let filename = path.resolve(__dirname, '../../packages/');
fs.readdir(filename, async (err, files: any[]) => {
  if (err) {
    return console.error('读取目录时出错', err);
  }
  let newFiles = files.map(async (element: string) => {
    const file = await fs.promises.stat(path.resolve(filename, element));
    if (!file.isFile()) {
      return element;
    }
  });
  let res = await Promise.all(newFiles);

  Promise.all(
    res.filter(Boolean).map(async element => {
      return {
        file: fs
          .readdirSync(path.resolve(filename, element!))
          .filter(it => 'index.json' === it)[0],
        path: path.resolve(filename, element!)
      };
    })
  ).then(res1 => {
    res1
      .filter(it => it.file)
      .map(async it => {
        let res2 = await fs.readFileSync(
          path.resolve(it.path, it.file),
          'utf-8'
        );
        if (res2) {
          let { category, title: text, link } = JSON.parse(res2);
          sidebar = sidebar.map(item => {
            if (item.text == category) {
              (
                item.items as Array<{
                  text: string;
                  link: string;
                }>
              ).push({ text, link });
              return item;
            } else {
              return item;
            }
          });
        }
      });
  });
});
const config = {
  lang: 'zh-CN',
  title: 'min-sheep-ui',
  cacheDir: '../node_modules/.vite-cache', // 自定义缓存目录
  themeConfig: {
    // sidebarwidth: 600,
    sidebar,
    lastUpdated: {
      text: '更新在',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    search: {
      provider: 'local'
    }
  },
  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    },
    config: md => {
      md.use(demoblockPlugin);
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  }
};
export default config;
