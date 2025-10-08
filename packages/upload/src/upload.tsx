import { defineComponent } from 'vue';
import { UploadProps, uploadProps } from './upload-type';

export default defineComponent({
  name: 'SUpload',
  props: uploadProps,
  setup(props: UploadProps) {
    console.log(props);
    return () => <div class="s-upload">upload</div>;
  }
});
