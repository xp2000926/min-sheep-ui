import { defineComponent } from 'vue';
import {
  monthPickerPanelProps,
  MonthPickerPanelProps
} from './month-picker-panel-type';

export default defineComponent({
  name: 'SMonthPickerPanel',
  props: monthPickerPanelProps,
  setup(_props: MonthPickerPanelProps) {
    console.log(_props);
    return () => <div class="s-date-picker">date-picker</div>;
  }
});
