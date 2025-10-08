import { defineComponent } from 'vue';
import { InputNumberProps, inputNumberProps } from './input-number-type';

export default defineComponent({
  name: 'SInputNumber',
  props: inputNumberProps,
  setup(_props: InputNumberProps) {
    console.log(_props);
    return () => <div class="s-input-number">input-number</div>;
  }
});
