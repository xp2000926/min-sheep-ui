import { defineComponent, toRefs } from 'vue';
import { InputProps, inputProps } from './input-type';

export default defineComponent({
  name: 'SInput',
  props: inputProps,
  emits: ['update:modelValue'],
  setup(props: InputProps, { emit }) {
    const { modelValue, type, placeholder, disabled } = toRefs(props);
    const onInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value;
      emit('update:modelValue', val);
    };
    return () => {
      return (
        <div
          class={`s-input relative inline-flex align-middle ${
            disabled.value ? 'is-disabled' : ''
          }`}
        >
          <div class="s-input__wrapper">
            <input
              class="s-input-inner"
              value={modelValue.value}
              onInput={onInput}
              type={type.value}
              placeholder={placeholder.value}
            />
          </div>
        </div>
      );
    };
  }
});
