import { demoBlockPlugin } from 'vitepress-theme-demoblock'
const sidebar = [
  {
    text: '快速开始',
    collapsible: true,
    collapsed: true,
    items: [
      { text: '安装', link: '/guide/install' } // /guide/install.md
    ]
  },
  {
    text: '通用',
    collapsible: true,
    collapsed: false,
    items: [
      { text: 'Button 按钮', link: '/components/button/' },
      { text: 'Icon 图标', link: '/components/icon/' }
    ]
  },
  {
    text: '导航',
    collapsible: true,
    collapsed: false,
    items: [{ text: 'Tabs 标签页', link: '/components/tabs/' }]
  },
  {
    text: '反馈',
    collapsible: true,
    collapsed: false,
    items: [
      { text: 'Modal 对话框', link: '/components/modal/' },
      { text: 'Drawer 抽屉', link: '/components/drawer/' },
      { text: 'Popover 气泡卡片', link: '/components/popover/' }
    ]
  },
  {
    text: '数据录入',
    collapsible: true,
    collapsed: false,
    items: [
      { text: 'Input 输入框', link: '/components/input/' },
      { text: 'Form 表单', link: '/components/form/' }
    ]
  },
  {
    text: '数据展示',
    collapsible: true,
    collapsed: false,
    items: [
      { text: 'Tree 树', link: '/components/tree/' },
      { text: 'Pagination 分页', link: '/components/pagination/' },
      { text: 'Table 表格', link: '/components/table/' },
      { text: 'Empty 空状态', link: '/components/empty/' }
    ]
  },
  {
    text: '布局',
    collapsible: true,
    collapsed: false,
    items: []
  }
]

export default {
  title: 'min Sheep UI', //站点标题
  description: '一个vue3组件库',
  lang: 'cn-ZH',
  themeConfig: {
    siteTitle: 'min Sheep UI',
    // logo: "/logo.png",
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xp2000926/min-sheep-ui' }
    ]
  },
  markdown: {
    config: md => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'scss'
      })
    }
  }
}
