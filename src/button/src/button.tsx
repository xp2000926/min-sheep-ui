import { defineComponent, toRefs } from 'vue';
import { ButtonProps, buttonProps } from './button-type';

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block, plain, round, circle } = toRefs(props);
    const typeClass = type.value == '' ? '' : `s-button--${type.value}`;
    const sizeClass = size.value == '' ? '' : `s-button--${size.value}`;
    const plainClass = plain.value ? 'is-plain' : '';
    const roundClass = round.value ? 'is-round' : '';
    const circleClass = circle.value ? 'is-circle' : '';
    const blockClass = block.value ? 'is-block' : ''; // 新增
    const className =
      `s-button ${typeClass} ${plainClass} ${sizeClass} ${blockClass} ${roundClass} ${circleClass}`.trim();
    return () => {
      const defaultSlots = slots.default ? slots.default() : '';

      return (
        <button disabled={disabled.value} class={className}>
          <span>{defaultSlots}</span>
        </button>
      );
    };
  }
});
