import { defineComponent, inject, toRefs, Ref, ref } from 'vue';
import { radioButtonProps, RadioButtonProps } from './radio-button-type.ts';
import classnames from 'classnames';
import { ButtonSize } from '../../button/src/button-type';

export default defineComponent({
  name: 'SRadioButton',
  props: radioButtonProps,
  setup(props: RadioButtonProps) {
    const { label, disabled } = toRefs(props);
    const groupValue = inject('radio-group-context') as Ref<
      string | number | boolean
    >;
    const disabledValue =
      (inject('radio-group-disabled') as Ref<boolean>) ?? ref(false);
    const sizeValue =
      (inject('radio-group-size') as Ref<ButtonSize>) ?? ref('');
    console.log('sizeValue', sizeValue.value);
    return () => (
      <label
        role="radio"
        tabindex={0}
        class={classnames('s-radio-button', {
          'is-active': groupValue?.value === label.value,
          'is-disabled': disabledValue.value || disabled.value
        })}
        aria-checked={groupValue?.value === label.value}
        onClick={() => {
          if (disabledValue.value) {
            return;
          }
          if (disabled.value) {
            return;
          }
          groupValue.value = label.value;
        }}
      >
        <div class="s-radio-button__inner">{label.value}</div>
      </label>
    );
  }
});
