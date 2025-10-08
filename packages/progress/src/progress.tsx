import { defineComponent } from 'vue';
import { ProgressProps, progressProps } from './progress-type';

export default defineComponent({
  name: 'SProgress',
  props: progressProps,
  setup(_props: ProgressProps) {
    console.log(_props);
    return () => <div class="s-progress">progress</div>;
  }
});
