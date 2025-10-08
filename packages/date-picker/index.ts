import type { App } from 'vue';
import DatePicker from './src/date-picker';
import DatePickerPanel from './src/date-picker-panel';
import RangePicker from './src/range-picker';
import RangePickerPanel from './src/range-picker-panel';
import '../index.scss';
import './style/date-picker.scss';
import './style/date-picker-panel.scss';
import './style/date-panel.scss';
import './style/year-panel.scss';
import './style/month-panel.scss';
import './style/week-panel.scss';
import './style/quarter-panel.scss';
import './style/range-picker.scss';
import './style/range-picker-panel.scss';
import './style/date-range-panel.scss';

// 具名导出
export { DatePicker, DatePickerPanel, RangePicker, RangePickerPanel };

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(DatePicker.name!, DatePicker);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(DatePickerPanel.name!, DatePickerPanel);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(RangePicker.name!, RangePicker);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(RangePickerPanel.name!, RangePickerPanel);
  }
};
