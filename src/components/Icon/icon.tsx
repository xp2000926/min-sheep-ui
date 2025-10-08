import { defineComponent, toRefs, unref } from 'vue';
import { iconProps, IconPropsType } from './icon-type';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default defineComponent({
  name: 'SIcon',
  props: iconProps,
  setup(props: IconPropsType) {
    const { type, color, ...fontAwesomeProps } = toRefs(props);

    const customStyles = () => {
      return color?.value ? { color: color.value } : {};
    };

    const iconClass = () => {
      const baseClass = 's-icon';
      return type?.value ? `${baseClass} s-icon--${type.value}` : baseClass;
    };

    const getFontAwesomeProps = () => {
      const result: any = {};
      // console.log('fontAwesomeProps', fontAwesomeProps);

      Object.keys(fontAwesomeProps).forEach(key => {
        const ref = fontAwesomeProps[key as keyof typeof fontAwesomeProps];
        if (ref) {
          result[key] = unref(ref as any);
        }
      });
      return result;
    };

    return () => (
      <i class={iconClass()} style={customStyles()}>
        <FontAwesomeIcon {...getFontAwesomeProps()} />
      </i>
    );
  }
});
