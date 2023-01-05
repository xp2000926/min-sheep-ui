import { App } from 'vue'
import Icon from './src/icon'
import { ArrowDownIcon } from './arrow-down/arrow-down'

// 具名导出
export { Icon, ArrowDownIcon }

// 导出插件
export default {
  install(app: App) {
    app.component(Icon.name, Icon)
    app.component('ArrowDownIcon', ArrowDownIcon)
  }
}
