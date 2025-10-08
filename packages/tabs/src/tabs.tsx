import { defineComponent } from 'vue';
import { TabsProps, tabsProps } from './tabs-type';

export default defineComponent({
  name: 'STabs',
  props: tabsProps,
  setup(props: TabsProps) {
    console.log(props);
    return () => <div class="s-tabs">tabs</div>;
  }
});
