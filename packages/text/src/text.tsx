import { defineComponent } from 'vue';
import { TextProps, textProps } from './text-type';

export default defineComponent({
  name: 'SText',
  props: textProps,
  setup(props: TextProps) {
    console.log(props);
    return () => <span class="s-text">text</span>;
  }
});
