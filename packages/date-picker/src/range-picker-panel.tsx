import { defineComponent, toRefs } from 'vue';
import {
  RangePickerPanelProps,
  rangePickerPanelProps
} from './range-picker-panel-type';
import DateRangePanel from './components/date-range-panel';

export default defineComponent({
  name: 'SRangePickerPanel',
  props: rangePickerPanelProps,
  setup(props: RangePickerPanelProps) {
    const { type } = toRefs(props);
    return () => (
      <div class="s-range-picker-panel">
        {type.value == 'date' ? <DateRangePanel /> : null}
      </div>
    );
  }
});
