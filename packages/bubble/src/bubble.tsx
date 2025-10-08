import { defineComponent } from 'vue';
import { BubbleProps, bubbleProps } from './bubble-type';

export default defineComponent({
  name: 'SBubble',
  props: bubbleProps,
  setup(props: BubbleProps) {
    return () => <div class="s-bubble">bubble</div>;
  }
});
