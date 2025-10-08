import { defineComponent } from 'vue';
import { CarouselProps, carouselProps } from './carousel-type';

export default defineComponent({
  name: 'SCarousel',
  props: carouselProps,
  setup(props: CarouselProps) {
    console.log(props);
    return () => <div class="s-carousel">carousel</div>;
  }
});
