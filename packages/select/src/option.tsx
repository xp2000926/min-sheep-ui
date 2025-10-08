import { defineComponent, inject, SetupContext } from 'vue';
import { optionProps, OptionProps } from './option-type';
import classNames from 'classnames';

export default defineComponent({
  name: 'SOption',
  props: optionProps,
  setup(props: OptionProps, { slots }: SetupContext) {
    const selectContext = inject('selectContext', null);

    const handleClick = () => {
      if (props.disabled || !selectContext) return;
      selectContext.onSelect(props.value);
    };

    const isSelected = () => {
      if (!selectContext) return false;
      if (selectContext.multiple) {
        return (
          Array.isArray(selectContext.modelValue) &&
          selectContext.modelValue.includes(props.value)
        );
      }
      return selectContext.modelValue === props.value;
    };

    return () => (
      <li
        class={classNames('s-option', {
          'is-selected': isSelected(),
          'is-disabled': props.disabled
        })}
        onClick={handleClick}
      >
        {slots.default ? slots.default() : props.label || String(props.value)}
      </li>
    );
  }
});
