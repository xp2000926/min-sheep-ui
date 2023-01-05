import { App } from 'vue'
import Tabs from './src/tabs'
import Tab from './src/tab'

// 具名导出
export { Tabs, Tab }

// 导出插件
export default {
  install(app: App) {
    app.component(Tabs.name, Tabs)
    app.component(Tab.name, Tab)
  }
}
