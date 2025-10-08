import { defineComponent } from 'vue';
import { CheckboxProps, checkboxProps } from './checkbox-type';

export default defineComponent({
  name: 'SCheckbox',
  props: checkboxProps,
  setup(_props: CheckboxProps) {
    console.log(_props);
    return () => <div class="s-checkbox">checkbox</div>;
  }
});
