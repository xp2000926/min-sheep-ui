import { defineComponent } from 'vue';
import { SliderProps, sliderProps } from './slider-type';

export default defineComponent({
  name: 'SSlider',
  props: sliderProps,
  setup(props: SliderProps) {
    console.log(props);
    return () => <div class="s-slider">slider</div>;
  }
});
