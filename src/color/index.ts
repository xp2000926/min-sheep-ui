import { App } from 'vue'
import Color from './src/color'

// 具名导出
export { Color }

// 导出插件
export default {
  install(app: App) {
    app.component(Color.name, Color)
  }
}
