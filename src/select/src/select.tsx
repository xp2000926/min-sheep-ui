import { defineComponent } from 'vue';
import { SelectProps, selectProps } from './select-type';

export default defineComponent({
  name: 'SSelect',
  props: selectProps,
  setup(props: SelectProps) {
    console.log(props);
    return () => {
      return (
        <div class="s-select">
          <input />
        </div>
      );
    };
  }
});
