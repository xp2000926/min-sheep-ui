import { defineComponent } from 'vue';
import { DividerProps, dividerProps } from './divider-type';

export default defineComponent({
  name: 'SDivider',
  props: dividerProps,
  setup(_props: DividerProps) {
    console.log(_props);
    return () => <div class="s-divider">divider</div>;
  }
});
