import { defineComponent } from 'vue';
import { QuarterPanelProps, quarterPanelProps } from './quarter-panel-type';
import DoubleLeft from '../icon/double-left';
import DoubleRight from '../icon/double-right';

export default defineComponent({
  name: 'QuarterPanel',
  props: quarterPanelProps,
  emits: ['update:type'],
  setup(props: QuarterPanelProps, { emit }) {
    console.log(props, emit);
    return () => (
      <div class="s-quarter-panel">
        <div class="s-quarter-panel-header">
          <DoubleLeft class="icon" />
          <div class="quarter">2025年</div>
          <DoubleRight class="icon" />
        </div>
      </div>
    );
  }
});
