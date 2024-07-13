import { defineComponent, toRefs } from 'vue';
import { iconsProps, IconsProps } from './icons-type';
export default defineComponent({
  name: 'Plus',
  props: iconsProps,
  setup(props: IconsProps) {
    const { width, height } = toRefs(props);
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          data-v-6fbb019e=""
          width={width.value}
          height={height.value}
          fill="currentColor"
        >
          <path
            fill="currentColor"
            d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
          ></path>
        </svg>
      </>
    );
  }
});
