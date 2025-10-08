import { defineComponent, SetupContext } from 'vue';
import { OptionGroupProps, optionGroupProps } from './option-group-type';

export default defineComponent({
  name: 'SOptionGroup',
  props: optionGroupProps,
  setup(props: OptionGroupProps, { slots }: SetupContext) {
    return () => <li class="s-option-group">s-option-group</li>;
  }
});
