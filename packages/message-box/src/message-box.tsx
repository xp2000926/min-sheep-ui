import { defineComponent } from 'vue';
import { MessageBoxProps, messageBoxProps } from './message-box-type';

export default defineComponent({
  name: 'SMessageBox',
  props: messageBoxProps,
  setup(_props: MessageBoxProps) {
    console.log(_props);
    return () => <div class="s-message-box">message-box</div>;
  }
});
