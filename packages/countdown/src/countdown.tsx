import { defineComponent } from 'vue';
import { CountdownProps, countdownProps } from './countdown-type';

export default defineComponent({
  name: 'SCountdown',
  props: countdownProps,
  setup(props: CountdownProps) {
    console.log('props', props);
    return () => <div class="s-countdown">countdown</div>;
  }
});
