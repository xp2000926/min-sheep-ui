import { defineComponent } from 'vue';
import { monthPickerProps, MonthPickerProps } from './month-picker-type';

export default defineComponent({
  name: 'SMonthPicker',
  props: monthPickerProps,
  setup(_props: MonthPickerProps) {
    console.log(_props);
    return () => <div class="s-date-picker">date-picker</div>;
  }
});
