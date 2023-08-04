import { App } from 'vue'
import Table from './src/table'
import TableColumn from './src/table-column'
// 具名导出
export { Table, TableColumn }

// 导出插件
export default {
  install(app: App) {
    app.component(Table.name, Table)
    app.component(TableColumn.name, TableColumn)
  }
}
