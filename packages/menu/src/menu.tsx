import { defineComponent } from 'vue';
import { MenuProps, menuProps } from './menu-type';

export default defineComponent({
  name: 'SMenu',
  props: menuProps,
  setup(_props: MenuProps) {
    console.log(_props);
    return () => <div class="s-menu">menu</div>;
  }
});
