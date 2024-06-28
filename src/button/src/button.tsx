import { defineComponent, toRefs } from 'vue';
import { ButtonProps, buttonProps } from './button-type';

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props);
    console.log('block', block.value);

    const blockClass = block.value ? 's-button--block' : ''; // 新增
    return () => {
      const defaultSlots = slots.default ? slots.default() : '';
      return (
        <button
          disabled={disabled.value}
          class={`s-button s-button--${type.value} s-button--${size.value} ${blockClass}`}
        >
          {defaultSlots}
        </button>
      );
    };
  }
});
