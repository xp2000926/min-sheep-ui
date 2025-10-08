import { defineComponent } from 'vue';
import {
  ColorPickerPanelProps,
  colorPickerPanelProps
} from './color-picker-panel-type';

export default defineComponent({
  name: 'SColorPickerPanel',
  props: colorPickerPanelProps,
  setup(props: ColorPickerPanelProps) {
    console.log(props);
    return () => <div class="s-color-picker-panel">color-picker-panel</div>;
  }
});
