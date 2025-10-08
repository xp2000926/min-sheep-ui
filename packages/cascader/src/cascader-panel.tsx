import { defineComponent } from 'vue';
import { CascaderPanelProps, cascaderPanelProps } from './cascader-panel-type';

export default defineComponent({
  name: 'SCascaderPanel', // cascader-panel
  props: cascaderPanelProps,
  setup(props: CascaderPanelProps) {
    console.log(props);
    return () => <div class="s-cascader-panel">cascader-panel</div>;
  }
});
