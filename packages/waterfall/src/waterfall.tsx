import { defineComponent } from 'vue';
import { WaterfallProps, waterfallProps } from './waterfall-type';

export default defineComponent({
  name: 'SWaterfall',
  props: waterfallProps,
  setup(_props: WaterfallProps) {
    console.log(_props);
    return () => <div class="s-waterfall">waterfall</div>;
  }
});
