import { defineComponent } from 'vue';
import { MonthPanelProps, monthPanelProps } from './month-panel-type';
import DoubleLeft from '../icon/double-left';
import DoubleRight from '../icon/double-right';

export default defineComponent({
  name: 'MonthPanel',
  props: monthPanelProps,
  emits: ['update:type'],
  setup(props: MonthPanelProps, { emit }) {
    console.log(props, emit);
    return () => (
      <div class="s-month-panel">
        <div class="s-month-panel-header">
          <DoubleLeft class="icon" />
          <div class="month">2025年</div>
          <DoubleRight class="icon" />
        </div>
      </div>
    );
  }
});
