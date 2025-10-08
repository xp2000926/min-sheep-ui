import { defineComponent } from 'vue';
import { SelectProps, selectProps } from './select-type';

export default defineComponent({
  name: 'SSelect',
  props: selectProps,
  setup(_props: SelectProps) {
    console.log(_props);
    return () => <div class="s-select">select</div>;
  }
});
