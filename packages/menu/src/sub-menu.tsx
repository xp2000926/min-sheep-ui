import { defineComponent } from 'vue';
import { subMenuProps, SubMenuProps } from './sub-menu-type';

export default defineComponent({
  name: 'SSubMenu',
  props: subMenuProps,
  setup(_props: SubMenuProps) {
    console.log(_props);
    return () => <div class="s-sub-menu">sub-menu</div>;
  }
});
