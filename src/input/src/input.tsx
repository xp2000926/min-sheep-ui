import { defineComponent, toRefs } from 'vue';
import { InputProps, inputProps } from './input-type';

export default defineComponent({
  name: 'SInput',
  props: inputProps,
  emits: ['update:modelValue'],
  setup(props: InputProps, { emit }) {
    const { modelValue, type } = toRefs(props);
    const onInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value;
      emit('update:modelValue', val);
    };
    return () => {
      return (
        <div class="s-input">
          <input
            class="s-input-input"
            value={modelValue.value}
            onInput={onInput}
            type={type.value}
          />
        </div>
      );
    };
  }
});
