import { App } from 'vue'
import BaseModal from './src/base-modal'

// 具名导出
export { BaseModal }

// 导出插件
export default {
  install(app: App) {
    app.component(BaseModal.name, BaseModal)
  }
}
