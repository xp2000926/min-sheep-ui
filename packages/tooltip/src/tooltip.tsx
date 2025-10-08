import { defineComponent } from 'vue';
import { TooltipProps, tooltipProps } from './tooltip-type';

export default defineComponent({
  name: 'STooltip',
  props: tooltipProps,
  setup(_props: TooltipProps) {
    console.log(_props);
    return () => <div class="s-tooltip">tooltip</div>;
  }
});
