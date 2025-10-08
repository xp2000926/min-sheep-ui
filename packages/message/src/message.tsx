import { defineComponent } from 'vue';
import { MessageProps, messageProps } from './message-type';

export default defineComponent({
  name: 'SMessage',
  props: messageProps,
  setup(_props: MessageProps) {
    console.log(_props);
    return () => <div class="s-message">message</div>;
  }
});
