import { defineComponent } from 'vue';
import { DatePanelProps, datePanelProps } from './date-panel-type';
import DoubleLeft from '../icon/double-left';
import Left from '../icon/left';
import DoubleRight from '../icon/double-right';
import Right from '../icon/right';

export default defineComponent({
  name: 'DatePanel',
  props: datePanelProps,
  emits: ['update:type'],
  setup(props: DatePanelProps, { emit }) {
    return () => (
      <div class="s-date-panel">
        <div class="s-date-panel-header">
          <DoubleLeft class="icon" />
          <Left class="icon" />
          <div class="s-date-panel-header-text flex">
            <div class="years" onClick={() => emit('update:type', 'year')}>
              2025年
            </div>
            <div class="month" onClick={() => emit('update:type', 'month')}>
              1月
            </div>
          </div>
          <Right class="icon" />
          <DoubleRight class="icon" />
        </div>
      </div>
    );
  }
});
