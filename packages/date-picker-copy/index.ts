import type { App } from 'vue';
import DatePicker from './src/date-picker';
import YearPicker from './src/year-picker';
import MonthPicker from './src/month-picker';
import WeekPicker from './src/week-picker';
import MonthPickerPanel from './src/month-picker-panel';
import WeekPickerPanel from './src/week-picker-panel';
import YearPickerPanel from './src/year-picker-panel';
import RangePicker from './src/range-picker';
import RangePickerPanel from './src/range-picker-panel';
import DatePickerPanel from './src/date-picker-panel';
import '../index.scss';
import './style/date-picker.scss';
import './style/date-picker-panel.scss';

// 具名导出
export {
  DatePicker,
  MonthPickerPanel,
  WeekPickerPanel,
  YearPicker,
  WeekPicker,
  MonthPicker,
  YearPickerPanel,
  RangePicker,
  DatePickerPanel,
  RangePickerPanel
};

// 导出插件
export default {
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(DatePicker.name!, DatePicker);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(MonthPickerPanel.name!, MonthPickerPanel);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(WeekPickerPanel.name!, WeekPickerPanel);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(YearPicker.name!, YearPicker);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(WeekPicker.name!, WeekPicker);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(MonthPicker.name!, MonthPicker);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(YearPickerPanel.name!, YearPickerPanel);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(RangePicker.name!, RangePicker);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(DatePickerPanel.name!, DatePickerPanel);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    app.component(RangePickerPanel.name!, RangePickerPanel);
  }
};
