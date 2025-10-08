import { defineComponent } from 'vue';
import { FloatButtonProps, floatButtonProps } from './float-button-type';

export default defineComponent({
  name: 'SFloatButton',
  props: floatButtonProps,
  setup(props: FloatButtonProps) {
    console.log(props);
    return () => <div class="s-float-button">float-button</div>;
  }
});
