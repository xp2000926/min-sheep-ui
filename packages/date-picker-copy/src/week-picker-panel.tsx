import { defineComponent } from 'vue';
import {
  weekPickerPanelProps,
  WeekPickerPanelProps
} from './week-picker-panel-type';

export default defineComponent({
  name: 'SWeekPickerPanel',
  props: weekPickerPanelProps,
  setup(_props: WeekPickerPanelProps) {
    console.log(_props);
    return () => <div class="s-date-picker">date-picker</div>;
  }
});
