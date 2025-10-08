import { defineComponent, provide, ref, watch } from 'vue';
import { radioGroupProps, RadioGroupProps } from './radio-group-type.ts';

export default defineComponent({
  name: 'SRadioGroup',
  props: radioGroupProps,
  emits: ['update:modelValue'],
  setup(props: RadioGroupProps, { slots, emit }) {
    const groupValue = ref(props.modelValue);
    const disabledValue = ref(props.disabled);
    provide('radio-group-context', groupValue);
    provide('radio-group-disabled', disabledValue);
    watch(
      () => groupValue.value,
      value => {
        emit('update:modelValue', value);
      },
      {
        deep: true
      }
    );
    return () => <div class="s-radio-group">{slots.default?.()}</div>;
  }
});
