import { App } from 'vue'
import Link from './src/link'

// 具名导出
export { Link }

// 导出插件
export default {
  install(app: App) {
    app.component(Link.name, Link)
  }
}
