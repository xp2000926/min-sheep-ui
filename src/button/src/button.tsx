import { defineComponent, toRefs, computed } from 'vue';
import { ButtonProps, buttonProps } from './button-type';

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block, plain, round, circle, dashed } =
      toRefs(props);
    const className = computed(() => ({
      's-button': true,
      'is-plain': plain.value,
      'is-round': round.value,
      'is-circle': circle.value,
      'is-block': block.value,
      'is-dashed': dashed.value,
      [`s-button--${type.value}`]:
        type.value == '' || type.value == 'default' ? false : true,
      [`s-button--${size.value}`]:
        size.value == '' || size.value == 'default' ? false : true
    }));
    return () => {
      const defaultSlots = slots.default ? slots.default() : '';
      return (
        <button disabled={disabled.value} class={className.value}>
          <span>{defaultSlots}</span>
        </button>
      );
    };
  }
});
