import { defineComponent } from 'vue';
import { TabPaneProps, tabPaneProps } from './tab-pane-type';

export default defineComponent({
  name: 'STabPane',
  props: tabPaneProps,
  setup(props: TabPaneProps) {
    console.log(props);
    return () => <div class="s-tab-pane">tab-pane</div>;
  }
});
