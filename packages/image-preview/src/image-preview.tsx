import { defineComponent } from 'vue';
import { ImagePreviewProps, imagePreviewProps } from './image-preview-type';

export default defineComponent({
  name: 'SImagePreview',
  props: imagePreviewProps,
  setup(props: ImagePreviewProps) {
    console.log(props);
    return () => <div class="s-image-preview">image-preview</div>;
  }
});
