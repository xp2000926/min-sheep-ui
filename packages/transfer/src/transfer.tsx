import { defineComponent } from 'vue';
import { TransferProps, transferProps } from './transfer-type';

export default defineComponent({
  name: 'STransfer',
  props: transferProps,
  setup(_props: TransferProps) {
    console.log(_props);
    return () => <div class="s-transfer">transfer</div>;
  }
});
