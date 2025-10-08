import { defineComponent } from 'vue';
import { StepsProps, stepsProps } from './steps-type';

export default defineComponent({
  name: 'SSteps',
  props: stepsProps,
  setup(_props: StepsProps) {
    console.log(_props);
    return () => <div class="s-steps">steps</div>;
  }
});
