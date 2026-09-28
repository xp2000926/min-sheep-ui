import { defineComponent } from 'vue';
import { AhpProps, ahpProps } from './ahp-type';

export default defineComponent({
  name: 'SAhp',
  props: ahpProps,
  setup(props: AhpProps) {
    return () => <div class="s-ahp">ahp</div>;
  }
});
