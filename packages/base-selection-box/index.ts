import { App } from 'vue';
import BaseSemiSelection from './src/base-semi-selection';
import BaseSelectAll from './src/base-select-all';
import BaseSelectionBox from './src/base-selection-box';
import '../index.scss';
import './style/base-select-all.scss'; // 全选
import './style/base-selection-box.scss'; // 选择框
import './style/base-semi-selection.scss'; // 半选

// 具名导出
export { BaseSelectAll, BaseSelectionBox, BaseSemiSelection };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(BaseSelectAll.name!, BaseSelectAll); // 全选
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(BaseSelectionBox.name!, BaseSelectionBox); // 选择框
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(BaseSemiSelection.name!, BaseSemiSelection); // 半选
  }
};
