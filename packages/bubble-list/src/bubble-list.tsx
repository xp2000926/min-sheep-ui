import { defineComponent } from 'vue';
import { BubbleListProps, bubbleListProps } from './bubble-list-type';

export default defineComponent({
  name: 'SBubbleList',
  props: bubbleListProps,
  setup(props: BubbleListProps) {
    console.log(props);
    return () => <div class="s-bubble-list">bubble-list</div>;
  }
});
