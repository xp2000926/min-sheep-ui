import { defineComponent, ref, toRefs, computed } from 'vue';
import { InputProps, inputProps } from './input-type';

export default defineComponent({
  name: 'SInput',
  props: inputProps,
  emits: ['update:modelValue', 'focus', 'blur', 'input', 'clear'],
  setup(props: InputProps, { emit }) {
    const {
      modelValue,
      type,
      placeholder,
      disabled,
      status,
      size,
      clearable,
      round,
      showPassword
    } = toRefs(props);
    const isFocus = ref(false);
    const onInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value;
      console.log('onInput', val, disabled.value);
      emit('update:modelValue', val);
      emit('input');
    };
    const sInputClass = computed(() => ({
      's-input': true,
      relative: true,
      'align-middle': true,
      'is-disabled': disabled.value,
      'is-round': round.value,
      [`s-input--${size.value}`]:
        size.value == '' || size.value == 'default' ? false : true,
      [`s-input--${status.value}`]: status.value == '' ? false : true
    }));
    const viewPassword = ref('password');
    return () => {
      //prefix
      return (
        <div class={sInputClass.value}>
          {/* wrapper */}
          <div
            class={`s-input__wrapper inline-flex items-center content-center ${
              isFocus.value ? 'is-focus' : ''
            }`}
          >
            {/* prefix */}
            <input
              class="s-input-inner"
              disabled={disabled.value}
              value={modelValue.value}
              onInput={onInput}
              onFocus={() => {
                isFocus.value = true;
                emit('focus');
              }}
              onBlur={() => {
                isFocus.value = false;
                emit('blur');
              }}
              type={showPassword.value ? viewPassword.value : type.value}
              placeholder={placeholder.value}
            />
            {/* suffix */}
            {clearable.value && modelValue.value.length > 0 && (
              <div class="inline-block">
                <svg
                  onClick={() => {
                    emit('update:modelValue', '');
                    emit('clear');
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                    fill="none"
                    stroke="#c0c4cc"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29.6567 18.3432L18.343 29.6569"
                    stroke="#c0c4cc"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.3433 18.3432L29.657 29.6569"
                    stroke="#c0c4cc"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}
            {showPassword.value && modelValue.value.length > 0 && (
              <div class="inline-block">
                {viewPassword.value == 'password' ? (
                  <svg
                    onClick={() => {
                      viewPassword.value = 'text';
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M9.85786 18C6.23858 21 4 24 4 24C4 24 12.9543 36 24 36C25.3699 36 26.7076 35.8154 28 35.4921M20.0318 12.5C21.3144 12.1816 22.6414 12 24 12C35.0457 12 44 24 44 24C44 24 41.7614 27 38.1421 30"
                      stroke="#c0c4cc"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.3142 20.6211C19.4981 21.5109 19 22.6972 19 23.9998C19 26.7612 21.2386 28.9998 24 28.9998C25.3627 28.9998 26.5981 28.4546 27.5 27.5705"
                      stroke="#c0c4cc"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M42 42L6 6"
                      stroke="#c0c4cc"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    onClick={() => {
                      viewPassword.value = 'password';
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z"
                      fill="none"
                      stroke="#c0c4cc"
                      stroke-width="4"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"
                      fill="none"
                      stroke="#c0c4cc"
                      stroke-width="4"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </div>
            )}

            {/* <div class="s-input__suffix">
                <div class="s-input__suffix-inner"></div>
              </div> */}
          </div>
          {/* append */}
        </div>
      );
    };
  }
});
