import { defineComponent } from 'vue';
import { InputGroupProps, inputGroupProps } from './input-group-type';

export default defineComponent({
  name: 'SInputGroup',
  props: inputGroupProps,
  setup(props: InputGroupProps) {
    console.log(props);
    return () => <div class="s-input-group">s-input-group</div>;
  }
});
