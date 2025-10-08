import { defineComponent } from 'vue';
import { treeTransferProps, TreeTransferProps } from './tree-transfer-type';

export default defineComponent({
  name: 'STreeTransfer',
  props: treeTransferProps,
  setup(_props: TreeTransferProps) {
    console.log(_props);
    return () => <div class="s-transfer">transfer</div>;
  }
});
