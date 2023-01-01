import { App } from 'vue'
import Pagination from './src/pagination'
import Pager from './src/components/pager'
// 具名导出
export { Pagination, Pager }

// 导出插件
export default {
  install(app: App) {
    app.component(Pagination.name, Pagination)
    app.component(Pager.name, Pager)
  }
}
