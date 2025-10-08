import { defineComponent } from 'vue';
import { weekPickerProps, WeekPickerProps } from './week-picker-type';

export default defineComponent({
  name: 'SWeekPicker',
  props: weekPickerProps,
  setup(_props: WeekPickerProps) {
    console.log(_props);
    return () => <div class="s-date-picker">date-picker</div>;
  }
});
