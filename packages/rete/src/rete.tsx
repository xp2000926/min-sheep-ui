import { defineComponent } from 'vue';
import { ReteProps, reteProps } from './rete-type';

export default defineComponent({
  name: 'SRete',
  props: reteProps,
  setup(_props: ReteProps) {
    console.log(_props);
    return () => <div class="s-rete">rete</div>;
  }
});
