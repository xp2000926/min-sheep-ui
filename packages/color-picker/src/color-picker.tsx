import { defineComponent } from 'vue';
import { ColorPickerProps, colorPickerProps } from './color-picker-type';

export default defineComponent({
  name: 'SColorPicker',
  props: colorPickerProps,
  setup(_props: ColorPickerProps) {
    console.log(_props);
    return () => <div class="s-color-picker">color-picker</div>;
  }
});
