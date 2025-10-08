import { defineComponent } from 'vue';
import { BacktopProps, backtopProps } from './backtop-type';

export default defineComponent({
  name: 'SBacktop',
  props: backtopProps,
  setup(props: BacktopProps) {
    console.log(props);
    return () => <div class="s-backtop">backtop</div>;
  }
});
