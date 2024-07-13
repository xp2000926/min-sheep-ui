import { defineComponent, computed, toRefs, provide } from 'vue';
import { MenuProps, menuProps } from './menu-type';
import '../../index.scss';
import '../style/menu.scss';
export default defineComponent({
  name: 'SMenu',
  props: menuProps,
  setup(props: MenuProps, { slots }) {
    const {
      defaultActive,
      backgroundColor,
      textColor,
      activeTextColor,
      activeBackgroundColor
    } = toRefs(props);
    provide(
      'MenuProps',
      computed(() => ({
        defaultActive: defaultActive.value,
        textColor: textColor.value,
        activeTextColor: activeTextColor.value,
        activeBackgroundColor: activeBackgroundColor.value
      }))
    );
    return () => {
      return (
        <div
          class="s-menu"
          style={{
            '--s-menu-background-color': backgroundColor.value
          }}
        >
          {slots.default?.({})}
        </div>
      );
    };
  }
});
