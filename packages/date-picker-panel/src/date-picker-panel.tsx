import { defineComponent } from 'vue';
import {
  DatePickerPanelProps,
  datePickerPanelProps
} from './date-picker-panel-type';

export default defineComponent({
  name: 'SDatePickerPanel',
  props: datePickerPanelProps,
  setup(props: DatePickerPanelProps) {
    console.log('props', props);
    return () => <div class="s-date-picker-panel">date-picker-panel</div>;
  }
});
