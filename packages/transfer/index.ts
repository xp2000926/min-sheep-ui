import type { App } from 'vue';
import Transfer from './src/transfer';
import TreeTransfer from './src/tree-transfer';
import TableTransfer from './src/table-transfer';
import '../index.scss';
import './style/transfer.scss';

// 具名导出
export { Transfer, TreeTransfer, TableTransfer };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(Transfer.name!, Transfer);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(TreeTransfer.name!, TreeTransfer);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(TableTransfer.name!, TableTransfer);
  }
};
