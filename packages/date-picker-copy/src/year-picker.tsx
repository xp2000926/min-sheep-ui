import { defineComponent } from 'vue';
import { yearPickerProps, YearPickerProps } from './year-picker-type';

export default defineComponent({
  name: 'SYearPicker',
  props: yearPickerProps,
  setup(_props: YearPickerProps) {
    console.log(_props);
    return () => <div class="s-date-picker">date-picker</div>;
  }
});
