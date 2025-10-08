import { defineComponent } from 'vue';
import { CascaderProps, cascaderProps } from './cascader-type';

export default defineComponent({
  name: 'SCascader',
  props: cascaderProps,
  setup(props: CascaderProps) {
    console.log(props);
    return () => <div class="s-cascader">cascader</div>;
  }
});
