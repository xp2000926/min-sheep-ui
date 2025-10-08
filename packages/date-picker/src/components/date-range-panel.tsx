import { defineComponent } from 'vue';
import {
  DateRangePanelProps,
  dateRangePanelProps
} from './date-range-panel-type';
import DoubleLeft from '../icon/double-left';
import Left from '../icon/left';
import DoubleRight from '../icon/double-right';
import Right from '../icon/right';

export default defineComponent({
  name: 'SDateRangePanel',
  props: dateRangePanelProps,
  setup(_props: DateRangePanelProps) {
    console.log(_props);
    return () => (
      <div class="s-date-range-panel">
        <div class="s-date-range-panel-header pr-3">
          <DoubleLeft class="icon" />
          <Left class="icon" />{' '}
          <div class="s-date-panel-header-text flex">
            <div class="years">2025年</div>
            <div class="month">1月</div>
          </div>
          <Right class="icon" />
          <DoubleRight class="icon" />
        </div>
        <div class="s-date-range-panel-header pl-3">
          <DoubleLeft class="icon" />
          <Left class="icon" />
          <div class="s-date-panel-header-text flex">
            <div class="years">2025年</div>
            <div class="month">2月</div>
          </div>
          <Right class="icon" />
          <DoubleRight class="icon" />
        </div>
      </div>
    );
  }
});
