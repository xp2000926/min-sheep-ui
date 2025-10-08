import { defineComponent } from 'vue';
import { menuItemGroupProps, MenuItemGroupProps } from './menu-item-group-type';

export default defineComponent({
  name: 'SMenuItemGroup',
  props: menuItemGroupProps,
  setup(_props: MenuItemGroupProps) {
    console.log(_props);
    return () => <div class="s-menu-item-group">menu-item-group</div>;
  }
});
