import { defineComponent } from 'vue';
import { TourProps, tourProps } from './tour-type';

export default defineComponent({
  name: 'STour',
  props: tourProps,
  setup(_props: TourProps) {
    console.log(_props);
    return () => <div class="s-tour">tour</div>;
  }
});
