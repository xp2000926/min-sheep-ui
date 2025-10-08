import { defineComponent } from 'vue';
import { CardProps, cardProps } from './card-type';

export default defineComponent({
  name: 'SCard',
  props: cardProps,
  setup(_props: CardProps) {
    console.log(_props);
    return () => <div class="s-card">card</div>;
  }
});
