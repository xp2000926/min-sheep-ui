import { defineComponent } from 'vue';
import { ImageProps, imageProps } from './image-type';

export default defineComponent({
  name: 'SImage',
  props: imageProps,
  setup(props: ImageProps) {
    return () => <div class="s-image">image</div>;
  }
});
