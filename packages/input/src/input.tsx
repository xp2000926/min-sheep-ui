import { defineComponent, toRefs } from 'vue';
import { InputProps, inputProps } from './input-type';
import classnames from 'classnames';

export default defineComponent({
  name: 'SInput',
  props: inputProps,
  emits: [
    'update:modelValue',
    'blur',
    'clear',
    'focus',
    'select',
    'keyup',
    'change',
    'input'
  ],
  setup(props: InputProps, { slots, emit }) {
    const {
      type,
      modelValue,
      disabled,
      placeholder,
      showPassword,
      maxlength,
      minlength
    } = toRefs(props);

    const oninput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value;
      emit('update:modelValue', val);
    };
    return () => (
      <div
        class={classnames('s-input', {
          'is-disabled': disabled.value
        })}
      >
        <input
          class="s-input__input"
          disabled={disabled.value}
          placeholder={placeholder.value}
          value={modelValue.value}
          onInput={oninput}
          type={showPassword.value ? 'password' : type.value}
          maxlength={maxlength?.value}
          minlength={minlength?.value}
        />
        <div class="s-input__suffix">
          <div class="s-input__suffix-inner">
            <div class="s-input__icon">
              {showPassword.value
                ? slots['password-invisible-icon']
                  ? slots['password-invisible-icon']?.()
                  : 11
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
