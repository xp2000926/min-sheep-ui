import { defineComponent } from 'vue';
import {
  TimePickerPanelProps,
  timePickerPanelProps
} from './time-picker-panel-type';

export default defineComponent({
  name: 'STimePickerPanel',
  props: timePickerPanelProps,
  setup(props: TimePickerPanelProps) {
    console.log(props);
    return () => <div class="s-time-picker-panel">time-picker-panel</div>;
  }
});
