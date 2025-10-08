import { defineComponent } from 'vue';
import { TableTransferProps, tableTransferProps } from './table-transfer-type';

export default defineComponent({
  name: 'STableTransfer',
  props: tableTransferProps,
  setup(_props: TableTransferProps) {
    console.log(_props);
    return () => <div class="s-transfer">transfer</div>;
  }
});
