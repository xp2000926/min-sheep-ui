import { defineComponent } from 'vue';
import { InputTagProps, inputTagProps } from './input-tag-type';

export default defineComponent({
  name: 'SInputTag',
  props: inputTagProps,
  setup(props: InputTagProps) {
    console.log(props);
    return () => <div class="s-input-tag">input-tag</div>;
  }
});
