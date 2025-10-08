import { defineComponent } from 'vue';
import { TypewriterProps, typewriterProps } from './typewriter-type';

export default defineComponent({
  name: 'STypewriter',
  props: typewriterProps,
  setup(props: TypewriterProps) {
    return () => <div class="s-typewriter">typewriter</div>;
  }
});
