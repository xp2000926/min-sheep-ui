import { defineComponent, toRefs } from 'vue';
import { IconProps, iconProps } from './icon-type';
// import * as Icons from '../icons';

export default defineComponent({
  name: 'SIcon',
  props: iconProps,
  setup(props: IconProps) {
    const { name, size, color } = toRefs(props);
    const getSize = (size: IconProps['size']): string[] => {
      const width = (size as string) || '1em';
      const height = (size as string) || '1em';
      return [width, height];
    };
    const [width, height] = getSize(size.value);
    return () => {
      return (
        <div class="s-icon" style={{ width, height, color: color.value }}>
          {/* {(Icons as never as string[])[name.value].setup({
            width,
            height
          })} */}
        </div>
      );
    };
  }
});
