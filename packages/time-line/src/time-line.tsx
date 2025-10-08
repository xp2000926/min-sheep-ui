import { defineComponent } from 'vue';
import { TimeLineProps, timeLineProps } from './time-line-type';

export default defineComponent({
  name: 'STimeLine',
  props: timeLineProps,
  setup(props: TimeLineProps) {
    console.log(props);
    return () => <div class="s-time-line">time-line</div>;
  }
});
