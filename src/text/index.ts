import { App } from 'vue'
import Text from './src/text'

// 具名导出
export { Text }

// 导出插件
export default {
  install(app: App) {
    app.component(Text.name, Text)
  }
}
