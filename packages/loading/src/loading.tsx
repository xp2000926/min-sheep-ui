import { defineComponent } from 'vue';
import { LoadingProps, loadingProps } from './loading-type';

export default defineComponent({
  name: 'SLoading',
  props: loadingProps,
  setup(props: LoadingProps) {
    console.log(props);
    return () => <div class="s-loading">loading</div>;
  }
});
