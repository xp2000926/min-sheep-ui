import { defineComponent } from 'vue';
import { TagProps, tagProps } from './tag-type';

export default defineComponent({
  name: 'STag',
  props: tagProps,
  setup(_props: TagProps) {
    console.log(_props);
    return () => <div class="s-tag">tag</div>;
  }
});
