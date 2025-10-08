import { defineComponent } from 'vue';
import {
  rangePickerPanelProps,
  RangePickerPanelProps
} from './range-picker-panel-type';

export default defineComponent({
  name: 'SRangePickerPanel',
  props: rangePickerPanelProps,
  setup(_props: RangePickerPanelProps) {
    console.log(_props);
    return () => <div class="s-date-picker">date-picker</div>;
  }
});
