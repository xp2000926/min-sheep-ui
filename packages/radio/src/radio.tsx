import { defineComponent, toRefs, Ref, inject, ref } from 'vue';
import { RadioProps, radioProps } from './radio-type';
import type { ButtonSize } from '../../button/src/button-type';
import classNames from 'classnames';

export default defineComponent({
  name: 'SRadio',
  props: radioProps,
  emits: ['update:modelValue'],
  setup(props: RadioProps, { slots, emit }) {
    const { modelValue, label, value, disabled, border } = toRefs(props);
    const groupValue = inject('radio-group-context') as Ref<
      string | number | boolean
    >;
    const disabledValue =
      (inject('radio-group-disabled') as Ref<boolean>) ?? ref(false);
    const sizeValue =
      (inject('radio-group-size') as Ref<ButtonSize>) ?? ref('');

    console.log(
      sizeValue,
      'disabledValue-radio-button',
      groupValue?.value,
      modelValue.value == label.value,
      groupValue?.value == value.value,
      modelValue.value == label.value
    );
    return () => (
      <label
        class={classNames('s-radio', {
          'is-bordered': border.value,
          'is-checked': groupValue?.value
            ? modelValue.value == label.value &&
              groupValue?.value == value.value
            : modelValue.value == label.value
        })}
      >
        <span
          onClick={() => {
            if (disabled.value || disabledValue?.value) {
              return;
            } else {
              if (groupValue) {
                groupValue.value = value.value;
              }
              emit('update:modelValue', label.value);
            }
          }}
          class={classNames('s-radio__input', {
            'is-checked': groupValue?.value
              ? modelValue.value == label.value &&
                groupValue?.value == value.value
              : modelValue.value == label.value,
            'is-disabled': disabled.value || disabledValue?.value
          })}
        >
          <span class="s-radio__inner"></span>
          <input
            disabled={disabled.value || disabledValue?.value}
            type="radio"
            aria-hidden="true"
            tabindex="-1"
            autocomplete="off"
            class="s-radio__original"
            value={modelValue.value}
          />
        </span>
        <span class="s-radio__label">{slots.default?.()}</span>
      </label>
    );
  }
});
