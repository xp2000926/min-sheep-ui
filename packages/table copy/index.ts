import type { App } from 'vue';
import Table from './src/table';
import TableColumn from './src/table-column';
import '../index.scss';
import './style/table.scss';
import './style/table-column.scss';

// 具名导出
export { Table, TableColumn };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Table.name!, Table);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(TableColumn.name!, TableColumn);
  }
};
