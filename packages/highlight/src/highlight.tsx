import { defineComponent } from 'vue';
import { HighlightProps, highlightProps } from './highlight-type';

// 参考 naiveui
export default defineComponent({
  name: 'SHighlight',
  props: highlightProps,
  setup(_props: HighlightProps) {
    console.log(_props);
    return () => <div class="s-highlight">highlight</div>;
  }
});
