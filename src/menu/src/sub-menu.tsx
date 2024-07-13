import { defineComponent, inject, provide, computed, ComputedRef } from 'vue';
import { subItemProps, SubItemProps } from './sub-menu-type';
import { MenuInjectProps } from './menu-item-type';
import '../../index.scss';
import '../style/sub-menu.scss';
export default defineComponent({
  name: 'SSubItem',
  props: subItemProps,
  setup(props: SubItemProps, { slots }) {
    const menuProps = inject('MenuProps') as ComputedRef<MenuInjectProps>;
    provide(
      'SubMenuProps',
      computed(() => ({
        level: props.level + 1
      }))
    );
    const subMenuProps = inject('SubMenuProps') as ComputedRef<{
      level: number;
    }>;
    console.log('subMenuProps', subMenuProps?.value?.level);
    return () => (
      <div
        style={{
          '--s-menu-text-color': menuProps.value.textColor,
          '--s-menu-active-text-color': menuProps.value.activeTextColor,
          '--s-menu-active-background-color':
            menuProps.value.activeBackgroundColor
        }}
        class="sub-menu"
      >
        <div class="sub-menu-title">{slots.title?.()}</div>
        <div>{slots.default?.()}</div>
      </div>
    );
  }
});
