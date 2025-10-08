import { defineComponent } from 'vue';
import { MenuItemProps, menuItemProps } from './menu-item-type';

export default defineComponent({
  name: 'SMenuItem',
  props: menuItemProps,
  setup(_props: MenuItemProps) {
    console.log(_props);
    return () => <div class="s-menu-item">menu-item</div>;
  }
});
