import { defineComponent, inject, toRefs, ComputedRef } from 'vue';
import {
  menuItemProps,
  MenuItemProps,
  MenuInjectProps
} from './menu-item-type';
import { Icon } from '../../icon/index';
import '../../index.scss';
import '../style/menu-item.scss';
export default defineComponent({
  name: 'MenuItem',
  props: menuItemProps,
  setup(props: MenuItemProps, { slots }) {
    const { icon, path } = toRefs(props);
    const menuProps = inject('MenuProps') as ComputedRef<MenuInjectProps>;
    const IconRender = icon.value != '' ? <Icon name={icon.value} /> : null;
    return () => {
      return (
        <div
          class={`s-menu-item w-100 flex items-center cursor-pointer relative whitespace-nowrap ${
            menuProps.value.defaultActive == path.value ? 'is-active' : ''
          }`}
          style={{
            '--s-menu-text-color': menuProps.value.textColor,
            '--s-menu-active-text-color': menuProps.value.activeTextColor,
            '--s-menu-active-background-color':
              menuProps.value.activeBackgroundColor
          }}
        >
          {slots.icon ? (
            <div class="s-menu-item-icon">{slots.icon()}</div>
          ) : (
            IconRender
          )}
          <div class="s-menu-item-title">{slots.default?.()}</div>
        </div>
      );
    };
  }
});
