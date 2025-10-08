import { defineComponent } from 'vue';
import { yearPanelProps, YearPanelProps } from './year-panel-type';
import DoubleLeft from '../icon/double-left';
import DoubleRight from '../icon/double-right';

export default defineComponent({
  name: 'YearPanel',
  props: yearPanelProps,
  emits: ['update:type'],
  setup(props: YearPanelProps, { emit }) {
    console.log(props, emit);
    return () => (
      <div class="s-year-panel">
        <div class="s-year-panel-header">
          <DoubleLeft class="icon" />
          <div class="years">2020年-2029年</div>
          <DoubleRight class="icon" />
        </div>
      </div>
    );
  }
});
