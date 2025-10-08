import { defineComponent } from 'vue';
import { DatePickerProps, datePickerProps } from './date-picker-type';

export default defineComponent({
  name: 'SDatePicker',
  props: datePickerProps,
  setup(_props: DatePickerProps) {
    console.log(_props);
    return () => <div class="s-date-picker">date-picker</div>;
  }
});
