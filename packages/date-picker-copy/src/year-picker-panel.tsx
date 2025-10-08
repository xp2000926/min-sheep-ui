import { defineComponent } from 'vue';
import {
  yearPickerPanelProps,
  YearPickerPanelProps
} from './year-picker-panel-type';

export default defineComponent({
  name: 'SMonthPickerPanel',
  props: yearPickerPanelProps,
  setup(_props: YearPickerPanelProps) {
    console.log(_props);
    return () => <div class="s-date-picker">date-picker</div>;
  }
});
