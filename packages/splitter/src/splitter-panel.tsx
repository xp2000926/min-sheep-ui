import { defineComponent } from 'vue';
import { SplitterPanelProps, splitterPanelProps } from './splitter-panel-type';

export default defineComponent({
  name: 'SSplitterPanel ',
  props: splitterPanelProps,
  setup(props: SplitterPanelProps, { slots }) {
    console.log(props, slots);
    return () => <div class="s-splitter-panel">{slots.default()}</div>;
  }
});
