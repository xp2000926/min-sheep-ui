import { defineComponent } from 'vue';
import { TreeSelectProps, treeSelectProps } from './tree-select-type';

export default defineComponent({
  name: 'STreeSelect',
  props: treeSelectProps,
  setup(_props: TreeSelectProps) {
    console.log(_props);
    return () => <div class="s-tree-select">tree-select</div>;
  }
});
