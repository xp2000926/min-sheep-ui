import { defineComponent } from 'vue';
import { TimeSelectProps, timeSelectProps } from './time-select-type';

export default defineComponent({
  name: 'STimeSelect',
  props: timeSelectProps,
  setup(props: TimeSelectProps) {
    console.log(props);
    return () => <div class="s-time-select">time-select</div>;
  }
});
