import { defineComponent } from 'vue';
import { DropdownProps, dropdownProps } from './dropdown-type';

export default defineComponent({
  name: 'SDropdown',
  props: dropdownProps,
  setup(_props: DropdownProps) {
    console.log(_props);
    return () => <div class="s-dropdown">dropdown</div>;
  }
});
