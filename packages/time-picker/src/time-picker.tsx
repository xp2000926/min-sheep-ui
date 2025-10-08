import { defineComponent } from 'vue';
import { TimePickerProps, timePickerProps } from './time-picker-type';

export default defineComponent({
  name: 'STimePicker',
  props: timePickerProps,
  setup(props: TimePickerProps) {
    console.log(props);

    return () => <div class="s-time-picker">time-picker</div>;
  }
});
