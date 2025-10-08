import { defineComponent } from 'vue';
import { RangePickerProps, rangePickerProps } from './range-picker-type';

export default defineComponent({
  name: 'SRangePicker',
  props: rangePickerProps,
  setup(_props: RangePickerProps) {
    console.log(_props);
    return () => <div class="s-range-picker">range-picker</div>;
  }
});
