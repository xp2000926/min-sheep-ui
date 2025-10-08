import { defineComponent } from 'vue';
import { rangePickerProps, RangePickerProps } from './range-picker-type';

export default defineComponent({
  name: 'SRangePicker',
  props: rangePickerProps,
  setup(_props: RangePickerProps) {
    console.log(_props);
    return () => <div class="s-date-picker">date-picker</div>;
  }
});
