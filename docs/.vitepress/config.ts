import { demoBlockPlugin } from 'vitepress-theme-demoblock'
const sidebar = [
  {
    text: '快速开始',
    items: [
      { text: '安装', link: '/guide/install' } // /guide/install.md
    ]
  },
  {
    text: '通用',
    items: [
      { text: 'Button 按钮', link: '/components/button/' },
      { text: 'Icon 图标', link: '/components/icon/' },
    ]
  },
  { text: '导航', items: [] },
  { 
    text: '反馈', 
    items: [
      { text: 'Modal 对话框', link: '/components/modal/' },
      { text: 'Drawer 抽屉', link: '/components/drawer/' }
    ] 
  },
  { 
    text: '数据录入', 
    items: [
      { text: 'input 输入框', link: '/components/input/' },
      { text: 'Form 表单', link: '/components/form/' }
    ]
  },
  { 
    text: '数据展示', 
    items: [
      { text: 'Tree 树', link: '/components/tree/' },
      { text: 'Pagination 分页', link: '/components/pagination/' },
    ] 
  },
  { text: '布局', items: [] }
]

export default {
  themeConfig: {
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xp2000926/min-sheep-ui' }
    ]
  },
  markdown: {
    config: md => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin,{
        cssPreprocessor: 'scss'
      })
    }
  }
}
