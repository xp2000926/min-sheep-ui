import { defineComponent } from 'vue';
import { SplitterProps, splitterProps } from './splitter-type';

export default defineComponent({
  name: 'SSplitter',
  props: splitterProps,
  setup(props: SplitterProps, { slots }) {
    return () => <div class="s-splitter">{slots.default()}</div>;
  }
});
